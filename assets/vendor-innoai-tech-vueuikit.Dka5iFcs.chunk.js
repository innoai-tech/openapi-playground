let e;
import { $t as t, At as r, Bt as n, Ct as a, Dt as i, Et as o, Ft as s, Gt as l, H as u, Ht as c, It as f, Jt as h, Kt as d, Lt as m, Mt as g, Nt as p, O as y, Ot as b, Pt as v, Rt as x, St as w, Tt as C, U as k, Vt as P, W as M, Wt as S, Xt as _, Yt as A, Z as T, bt as R, c as D, ct as $, d as O, dt as L, en as I, f as F, ft as E, gt as V, ht as B, i as H, jt as N, kt as z, lt as W, m as j, mt as q, n as G, nn as U, o as Y, ot as K, pt as X, qt as J, rn as Z, s as Q, st as ee, t as et, tn as er, u as en, ut as ea, wt as ei, xt as eo, yt as es, zt as el } from "./vendor-innoai-tech-vuekit.sxpUSeRX.chunk.js";
import { t as eu } from "./vendor-rxjs.Bnzpw5oq.chunk.js";
var ec, ef, eh, ed, em, eg, ep, ey, eb = void 0, ev = "undefined" != typeof window && window.trustedTypes;
if (ev) try {
	eb = ev.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {}
var ex = eb ? (e) => eb.createHTML(e) : (e) => e, ew = "undefined" != typeof document ? document : null, eC = ew && ew.createElement("template"), ek = "transition", eP = "animation", eM = Symbol("_vtc"), eS = {
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
}, e_ = ei({}, ee, eS), eA = ((ec = (e, { slots: t }) => X(K, function(e) {
	let t = {};
	for (let r in e) r in eS || (t[r] = e[r]);
	if (!1 === e.css) return t;
	let { name: n = "v", type: a, duration: i, enterFromClass: o = `${n}-enter-from`, enterActiveClass: l = `${n}-enter-active`, enterToClass: u = `${n}-enter-to`, appearFromClass: c = o, appearActiveClass: f = l, appearToClass: h = u, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: g = `${n}-leave-to` } = e, p = function(e) {
		if (null == e) return null;
		{
			if (r(e)) return [function(e) {
				return s(e);
			}(e.enter), function(e) {
				return s(e);
			}(e.leave)];
			let t = function(e) {
				return s(e);
			}(e);
			return [t, t];
		}
	}(i), y = p && p[0], b = p && p[1], { onBeforeEnter: v, onEnter: x, onEnterCancelled: w, onLeave: C, onLeaveCancelled: k, onBeforeAppear: P = v, onAppear: M = x, onAppearCancelled: S = w } = t, _ = (e, t, r, n) => {
		e._enterCancelled = n, e$(e, t ? h : u), e$(e, t ? f : l), r && r();
	}, A = (e, t) => {
		e._isLeaving = !1, e$(e, d), e$(e, g), e$(e, m), t && t();
	}, T = (e) => (t, r) => {
		let n = e ? M : x, i = () => _(t, e, r);
		eT(n, [t, i]), eO(() => {
			e$(t, e ? c : o), eD(t, e ? h : u), eR(n) || eI(t, a, y, i);
		});
	};
	return ei(t, {
		onBeforeEnter(e) {
			eT(v, [e]), eD(e, o), eD(e, l);
		},
		onBeforeAppear(e) {
			eT(P, [e]), eD(e, c), eD(e, f);
		},
		onEnter: T(!1),
		onAppear: T(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let r = () => A(e, t);
			eD(e, d), e._enterCancelled ? (eD(e, m), eV(e)) : (eV(e), eD(e, m)), eO(() => {
				e._isLeaving && (e$(e, d), eD(e, g), eR(C) || eI(e, a, b, r));
			}), eT(C, [e, r]);
		},
		onEnterCancelled(e) {
			_(e, !1, void 0, !0), eT(w, [e]);
		},
		onAppearCancelled(e) {
			_(e, !0, void 0, !0), eT(S, [e]);
		},
		onLeaveCancelled(e) {
			A(e), eT(k, [e]);
		}
	});
}(e), t)).displayName = "Transition", ec.props = e_, ec), eT = (e, t = []) => {
	i(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, eR = (e) => !!e && (i(e) ? e.some((e) => e.length > 1) : e.length > 1);
function eD(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[eM] || (e[eM] = /* @__PURE__ */ new Set())).add(t);
}
function e$(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let r = e[eM];
	r && (r.delete(t), r.size || (e[eM] = void 0));
}
function eO(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var eL = 0;
function eI(e, t, r, n) {
	let a = e._endId = ++eL, i = () => {
		a === e._endId && n();
	};
	if (null != r) return setTimeout(i, r);
	let { type: o, timeout: s, propCount: l } = function(e, t) {
		let r = window.getComputedStyle(e), n = (e) => (r[e] || "").split(", "), a = n(`${ek}Delay`), i = n(`${ek}Duration`), o = eF(a, i), s = n(`${eP}Delay`), l = n(`${eP}Duration`), u = eF(s, l), c = null, f = 0, h = 0;
		t === ek ? o > 0 && (c = ek, f = o, h = i.length) : t === eP ? u > 0 && (c = eP, f = u, h = l.length) : h = (c = (f = Math.max(o, u)) > 0 ? o > u ? ek : eP : null) ? c === ek ? i.length : l.length : 0;
		let d = c === ek && /\b(?:transform|all)(?:,|$)/.test(n(`${ek}Property`).toString());
		return {
			type: c,
			timeout: f,
			propCount: h,
			hasTransform: d
		};
	}(e, t);
	if (!o) return n();
	let u = o + "end", c = 0, f = () => {
		e.removeEventListener(u, h), i();
	}, h = (t) => {
		t.target === e && ++c >= l && f();
	};
	setTimeout(() => {
		c < l && f();
	}, s + 1), e.addEventListener(u, h);
}
function eF(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, r) => eE(t) + eE(e[r])));
}
function eE(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function eV(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
var eB = Symbol("_vod"), eH = Symbol("_vsh"), eN = Symbol(""), ez = /(?:^|;)\s*display\s*:/, eW = /\s*!important$/;
function ej(e, t, r) {
	if (i(r)) r.forEach((r) => ej(e, t, r));
	else if (r ??= "", t.startsWith("--")) e.setProperty(t, r);
	else {
		let n = function(e, t) {
			let r = eG[t];
			if (r) return r;
			let n = w(t);
			if ("filter" !== n && n in e) return eG[t] = n;
			n = a(n);
			for (let r = 0; r < eq.length; r++) {
				let a = eq[r] + n;
				if (a in e) return eG[t] = a;
			}
			return t;
		}(e, t);
		eW.test(r) ? e.setProperty(C(n), r.replace(eW, ""), "important") : e[n] = r;
	}
}
var eq = [
	"Webkit",
	"Moz",
	"ms"
], eG = {}, eU = "http://www.w3.org/1999/xlink";
function eY(e, t, r, n, a, i = g(t)) {
	n && t.startsWith("xlink:") ? null == r ? e.removeAttributeNS(eU, t.slice(6, t.length)) : e.setAttributeNS(eU, t, r) : null == r || i && !o(r) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : v(r) ? String(r) : r);
}
function eK(e, t, r, n, a) {
	if ("innerHTML" === t || "textContent" === t) {
		null != r && (e[t] = "innerHTML" === t ? ex(r) : r);
		return;
	}
	let i = e.tagName;
	if ("value" === t && "PROGRESS" !== i && !i.includes("-")) {
		let n = "OPTION" === i ? e.getAttribute("value") || "" : e.value, a = null == r ? "checkbox" === e.type ? "on" : "" : String(r);
		n === a && "_value" in e || (e.value = a), r ?? e.removeAttribute(t), e._value = r;
		return;
	}
	let s = !1;
	if ("" === r || null == r) {
		let n = typeof e[t];
		"boolean" === n ? r = o(r) : null == r && "string" === n ? (r = "", s = !0) : "number" === n && (r = 0, s = !0);
	}
	try {
		e[t] = r;
	} catch (e) {}
	s && e.removeAttribute(a || t);
}
var eX = Symbol("_vei"), eJ = /(?:Once|Passive|Capture)$/, eZ = 0, eQ = Promise.resolve(), e0 = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), e1 = ei({ patchProp: (e, t, r, n, a, o) => {
	let s = "svg" === a;
	if ("class" === t) {
		var l = n;
		let t = e[eM];
		t && (l = (l ? [l, ...t] : [...t]).join(" ")), null == l ? e.removeAttribute("class") : s ? e.setAttribute("class", l) : e.className = l;
	} else "style" === t ? function(e, t, r) {
		let n = e.style, a = p(r), i = !1;
		if (r && !a) {
			if (t) if (p(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				r[t] ?? ej(n, t, "");
			}
			else for (let e in t) r[e] ?? ej(n, e, "");
			for (let e in r) "display" === e && (i = !0), ej(n, e, r[e]);
		} else if (a) {
			if (t !== r) {
				let e = n[eN];
				e && (r += ";" + e), n.cssText = r, i = ez.test(r);
			}
		} else t && e.removeAttribute("style");
		eB in e && (e[eB] = i ? n.display : "", e[eH] && (n.display = "none"));
	}(e, r, n) : N(t) ? z(t) || function(e, t, r, n, a = null) {
		let o = e[eX] || (e[eX] = {}), s = o[t];
		if (n && s) s.value = n;
		else {
			var l;
			let [r, u] = function(e) {
				let t;
				if (eJ.test(e)) {
					let r;
					for (t = {}; r = e.match(eJ);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
				}
				return [":" === e[2] ? e.slice(3) : C(e.slice(2)), t];
			}(t);
			n ? (l = o[t] = function(e, t) {
				let r = (e) => {
					if (e._vts) {
						if (e._vts <= r.attached) return;
					} else e._vts = Date.now();
					ea(function(e, t) {
						if (!i(t)) return t;
						{
							let r = e.stopImmediatePropagation;
							return e.stopImmediatePropagation = () => {
								r.call(e), e._stopped = !0;
							}, t.map((e) => (t) => !t._stopped && e && e(t));
						}
					}(e, r.value), t, 5, [e]);
				};
				return r.value = e, r.attached = eZ || (eQ.then(() => eZ = 0), eZ = Date.now()), r;
			}(n, a), e.addEventListener(r, l, u)) : s && (e.removeEventListener(r, s, u), o[t] = void 0);
		}
	}(e, t, 0, n, o) : ("." === t[0] ? (t = t.slice(1), 0) : "^" === t[0] ? (t = t.slice(1), 1) : !function(e, t, r, n) {
		if (n) return !!("innerHTML" === t || "textContent" === t || t in e && e0(t) && b(r));
		if ("spellcheck" === t || "draggable" === t || "translate" === t || "autocorrect" === t || "form" === t || "list" === t && "INPUT" === e.tagName || "type" === t && "TEXTAREA" === e.tagName) return !1;
		if ("width" === t || "height" === t) {
			let t = e.tagName;
			if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1;
		}
		return !(e0(t) && p(r)) && t in e;
	}(e, t, n, s)) ? e._isVueCE && (/[A-Z]/.test(t) || !p(n)) ? eK(e, w(t), n, o, t) : ("true-value" === t ? e._trueValue = n : "false-value" === t && (e._falseValue = n), eY(e, t, n, s)) : (eK(e, t, n), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || eY(e, t, n, s, o, "value" !== t));
} }, {
	insert: (e, t, r) => {
		t.insertBefore(e, r || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, r, n) => {
		let a = "svg" === t ? ew.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? ew.createElementNS("http://www.w3.org/1998/Math/MathML", e) : r ? ew.createElement(e, { is: r }) : ew.createElement(e);
		return "select" === e && n && null != n.multiple && a.setAttribute("multiple", n.multiple), a;
	},
	createText: (e) => ew.createTextNode(e),
	createComment: (e) => ew.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ew.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, r, n, a, i) {
		let o = r ? r.previousSibling : t.lastChild;
		if (a && (a === i || a.nextSibling)) for (; t.insertBefore(a.cloneNode(!0), r), a !== i && (a = a.nextSibling););
		else {
			eC.innerHTML = ex("svg" === n ? `<svg>${e}</svg>` : "mathml" === n ? `<math>${e}</math>` : e);
			let a = eC.content;
			if ("svg" === n || "mathml" === n) {
				let e = a.firstChild;
				for (; e.firstChild;) a.appendChild(e.firstChild);
				a.removeChild(e);
			}
			t.insertBefore(a, r);
		}
		return [o ? o.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild];
	}
}), e2 = (...e) => {
	let t = (eg || (eg = E(e1))).createApp(...e), { mount: r } = t;
	return t.mount = (e) => {
		var n, a;
		let i = p(n = e) ? document.querySelector(n) : n;
		if (!i) return;
		let o = t._component;
		b(o) || o.render || o.template || (o.template = i.innerHTML), 1 === i.nodeType && (i.textContent = "");
		let s = r(i, !1, (a = i) instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && a instanceof MathMLElement ? "mathml" : void 0);
		return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
	}, t;
}, e4 = function() {}, e5 = function() {}, e3 = (e, t, r) => Math.min(Math.max(r, e), t);
function e8(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var e6 = ["duration", "bounce"], e9 = [
	"stiffness",
	"damping",
	"mass"
];
function e7(e, t) {
	return t.some((t) => void 0 !== e[t]);
}
function te(e) {
	var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: a } = e, i = eu(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let o = {
		done: !1,
		value: t
	}, { stiffness: s, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: h } = function(e) {
		let t = Object.assign({
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1
		}, e);
		if (!e7(e, e9) && e7(e, e6)) {
			let r = function({ duration: e = 800, bounce: t = .25, velocity: r = 0, mass: n = 1 }) {
				let a, i;
				e4(e <= 1e4, "Spring duration must be 10 seconds or less");
				let o = 1 - t;
				o = e3(.05, 1, o), e = e3(.01, 10, e / 1e3), o < 1 ? (a = (t) => {
					let n = t * o, a = n * e;
					return .001 - (n - r) / e8(t, o) * Math.exp(-a);
				}, i = (t) => {
					let n = t * o * e, i = Math.pow(o, 2) * Math.pow(t, 2) * e, s = Math.exp(-n), l = e8(Math.pow(t, 2), o);
					return (-a(t) + .001 > 0 ? -1 : 1) * ((n * r + r - i) * s) / l;
				}) : (a = (t) => -.001 + Math.exp(-t * e) * ((t - r) * e + 1), i = (t) => e * e * (r - t) * Math.exp(-t * e));
				let s = function(e, t, r) {
					let n = r;
					for (let r = 1; r < 12; r++) n -= e(n) / t(n);
					return n;
				}(a, i, 5 / e);
				if (e *= 1e3, isNaN(s)) return {
					stiffness: 100,
					damping: 10,
					duration: e
				};
				{
					let t = Math.pow(s, 2) * n;
					return {
						stiffness: t,
						damping: 2 * o * Math.sqrt(n * t),
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
	}(i), d = tt, m = tt;
	function g() {
		let e = c ? -(c / 1e3) : 0, n = r - t, i = l / (2 * Math.sqrt(s * u)), o = Math.sqrt(s / u) / 1e3;
		if (void 0 === a && (a = Math.min(Math.abs(r - t) / 100, .4)), i < 1) {
			let t = e8(o, i);
			d = (a) => r - Math.exp(-i * o * a) * ((e + i * o * n) / t * Math.sin(t * a) + n * Math.cos(t * a)), m = (r) => {
				let a = Math.exp(-i * o * r);
				return i * o * a * (Math.sin(t * r) * (e + i * o * n) / t + n * Math.cos(t * r)) - a * (Math.cos(t * r) * (e + i * o * n) - t * n * Math.sin(t * r));
			};
		} else if (1 === i) d = (t) => r - Math.exp(-o * t) * (n + (e + o * n) * t);
		else {
			let t = o * Math.sqrt(i * i - 1);
			d = (a) => {
				let s = Math.exp(-i * o * a), l = Math.min(t * a, 300);
				return r - s * ((e + i * o * n) * Math.sinh(l) + t * n * Math.cosh(l)) / t;
			};
		}
	}
	return g(), {
		next: (e) => {
			let t = d(e);
			if (h) o.done = e >= f;
			else {
				let i = Math.abs(1e3 * m(e)) <= n, s = Math.abs(r - t) <= a;
				o.done = i && s;
			}
			return o.value = o.done ? r : t, o;
		},
		flipTarget: () => {
			c = -c, [t, r] = [r, t], g();
		}
	};
}
te.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
var tt = (e) => 0, tr = (e, t, r) => {
	let n = t - e;
	return 0 === n ? 1 : (r - e) / n;
}, tn = (e, t, r) => -r * e + r * t + e, ta = (e, t) => (r) => Math.max(Math.min(r, t), e), ti = (e) => e % 1 ? Number(e.toFixed(5)) : e, to = /(-)?([\d]*\.?[\d])+/g, ts = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, tl = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function tu(e) {
	return "string" == typeof e;
}
var tc = {
	test: (e) => "number" == typeof e,
	parse: parseFloat,
	transform: (e) => e
}, tf = Object.assign(Object.assign({}, tc), { transform: ta(0, 1) }), th = {
	test: (e) => tu(e) && e.endsWith("%") && 1 === e.split(" ").length,
	parse: parseFloat,
	transform: (e) => `${e}%`
}, td = (e, t) => (r) => !!(tu(r) && tl.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), tm = (e, t, r) => (n) => {
	if (!tu(n)) return n;
	let [a, i, o, s] = n.match(to);
	return {
		[e]: parseFloat(a),
		[t]: parseFloat(i),
		[r]: parseFloat(o),
		alpha: void 0 !== s ? parseFloat(s) : 1
	};
}, tg = {
	test: td("hsl", "hue"),
	parse: tm("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + th.transform(ti(t)) + ", " + th.transform(ti(r)) + ", " + ti(tf.transform(n)) + ")"
}, tp = ta(0, 255), ty = Object.assign(Object.assign({}, tc), { transform: (e) => Math.round(tp(e)) }), tb = {
	test: td("rgb", "red"),
	parse: tm("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + ty.transform(e) + ", " + ty.transform(t) + ", " + ty.transform(r) + ", " + ti(tf.transform(n)) + ")"
}, tv = {
	test: td("#"),
	parse: function(e) {
		let t = "", r = "", n = "", a = "";
		return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), a = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), a = e.substr(4, 1), t += t, r += r, n += n, a += a), {
			red: parseInt(t, 16),
			green: parseInt(r, 16),
			blue: parseInt(n, 16),
			alpha: a ? parseInt(a, 16) / 255 : 1
		};
	},
	transform: tb.transform
}, tx = (e) => tb.test(e) || tv.test(e) || tg.test(e), tw = (e) => tb.test(e) ? tb.parse(e) : tg.test(e) ? tg.parse(e) : tv.parse(e), tC = (e) => tu(e) ? e : e.hasOwnProperty("red") ? tb.transform(e) : tg.transform(e), tk = "${c}", tP = "${n}";
function tM(e) {
	"number" == typeof e && (e = `${e}`);
	let t = [], r = 0, n = e.match(ts);
	n && (r = n.length, e = e.replace(ts, tk), t.push(...n.map(tw)));
	let a = e.match(to);
	return a && (e = e.replace(to, tP), t.push(...a.map(tc.parse))), {
		values: t,
		numColors: r,
		tokenised: e
	};
}
var tS = function(e) {
	let { values: t, numColors: r, tokenised: n } = tM(e), a = t.length;
	return (e) => {
		let t = n;
		for (let n = 0; n < a; n++) t = t.replace(n < r ? tk : tP, n < r ? tC(e[n]) : ti(e[n]));
		return t;
	};
};
function t_(e, t, r) {
	return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function tA({ hue: e, saturation: t, lightness: r, alpha: n }) {
	e /= 360, r /= 100;
	let a = 0, i = 0, o = 0;
	if (t /= 100) {
		let n = r < .5 ? r * (1 + t) : r + t - r * t, s = 2 * r - n;
		a = t_(s, n, e + 1 / 3), i = t_(s, n, e), o = t_(s, n, e - 1 / 3);
	} else a = i = o = r;
	return {
		red: Math.round(255 * a),
		green: Math.round(255 * i),
		blue: Math.round(255 * o),
		alpha: n
	};
}
var tT = (e, t, r) => {
	let n = e * e;
	return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, tR = [
	tv,
	tb,
	tg
], tD = (e) => tR.find((t) => t.test(e)), t$ = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, tO = (e, t) => {
	let r = tD(e), n = tD(t);
	e5(!!r, t$(e)), e5(!!n, t$(t));
	let a = r.parse(e), i = n.parse(t);
	r === tg && (a = tA(a), r = tb), n === tg && (i = tA(i), n = tb);
	let o = Object.assign({}, a);
	return (e) => {
		for (let t in o) "alpha" !== t && (o[t] = tT(a[t], i[t], e));
		return o.alpha = tn(a.alpha, i.alpha, e), r.transform(o);
	};
}, tL = (e, t) => (r) => t(e(r)), tI = (...e) => e.reduce(tL);
function tF(e, t) {
	return "number" == typeof e ? (r) => tn(e, t, r) : tx(e) ? tO(e, t) : tH(e, t);
}
var tE = (e, t) => {
	let r = [...e], n = r.length, a = e.map((e, r) => tF(e, t[r]));
	return (e) => {
		for (let t = 0; t < n; t++) r[t] = a[t](e);
		return r;
	};
}, tV = (e, t) => {
	let r = Object.assign(Object.assign({}, e), t), n = {};
	for (let a in r) void 0 !== e[a] && void 0 !== t[a] && (n[a] = tF(e[a], t[a]));
	return (e) => {
		for (let t in n) r[t] = n[t](e);
		return r;
	};
};
function tB(e) {
	let t = tM(e).values, r = t.length, n = 0, a = 0, i = 0;
	for (let e = 0; e < r; e++) n || "number" == typeof t[e] ? n++ : void 0 !== t[e].hue ? i++ : a++;
	return {
		parsed: t,
		numNumbers: n,
		numRGB: a,
		numHSL: i
	};
}
var tH = (e, t) => {
	let r = tS(t), n = tB(e), a = tB(t);
	return n.numHSL === a.numHSL && n.numRGB === a.numRGB && n.numNumbers >= a.numNumbers ? tI(tE(n.parsed, a.parsed), r) : (e4(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (r) => `${r > 0 ? t : e}`);
}, tN = (e, t) => (r) => tn(e, t, r);
function tz(e, t, { clamp: r = !0, ease: n, mixer: a } = {}) {
	let i = e.length;
	e5(i === t.length, "Both input and output ranges must be the same length"), e5(!n || !Array.isArray(n) || n.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[i - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
	let o = function(e, t, r) {
		let n = [], a = r || function(e) {
			if ("number" == typeof e) return tN;
			if ("string" == typeof e) if (tx(e)) return tO;
			else return tH;
			return Array.isArray(e) ? tE : "object" == typeof e ? tV : void 0;
		}(e[0]), i = e.length - 1;
		for (let r = 0; r < i; r++) {
			let i = a(e[r], e[r + 1]);
			t && (i = tI(Array.isArray(t) ? t[r] : t, i)), n.push(i);
		}
		return n;
	}(t, n, a), s = 2 === i ? function([e, t], [r]) {
		return (n) => r(tr(e, t, n));
	}(e, o) : function(e, t) {
		let r = e.length, n = r - 1;
		return (a) => {
			let i = 0, o = !1;
			if (a <= e[0] ? o = !0 : a >= e[n] && (i = n - 1, o = !0), !o) {
				let t = 1;
				for (; t < r && !(e[t] > a) && t !== n; t++);
				i = t - 1;
			}
			let s = tr(e[i], e[i + 1], a);
			return t[i](s);
		};
	}(e, o);
	return r ? (t) => s(e3(e[0], e[i - 1], t)) : s;
}
var tW = (e) => e, tj = (e = (e) => Math.pow(e, 2), (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2);
function tq({ from: e = 0, to: t = 1, ease: r, offset: n, duration: a = 300 }) {
	var i;
	let o = {
		done: !1,
		value: e
	}, s = Array.isArray(t) ? t : [e, t], l = (i = n && n.length === s.length ? n : function(e) {
		let t = e.length;
		return e.map((e, r) => 0 !== r ? r / (t - 1) : 0);
	}(s), i.map((e) => e * a));
	function u() {
		return tz(l, s, { ease: Array.isArray(r) ? r : s.map(() => r || tj).splice(0, s.length - 1) });
	}
	let c = u();
	return {
		next: (e) => (o.value = c(e), o.done = e >= a, o),
		flipTarget: () => {
			s.reverse(), c = u();
		}
	};
}
var tG = {
	keyframes: tq,
	spring: te,
	decay: function({ velocity: e = 0, from: t = 0, power: r = .8, timeConstant: n = 350, restDelta: a = .5, modifyTarget: i }) {
		let o = {
			done: !1,
			value: t
		}, s = r * e, l = t + s, u = void 0 === i ? l : i(l);
		return u !== l && (s = u - t), {
			next: (e) => {
				let t = -s * Math.exp(-e / n);
				return o.done = !(t > a || t < -a), o.value = o.done ? u : u + t, o;
			},
			flipTarget: () => {}
		};
	}
}, tU = 1 / 60 * 1e3, tY = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), tK = "undefined" != typeof window ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(tY()), tU), tX = !0, tJ = !1, tZ = !1, tQ = {
	delta: 0,
	timestamp: 0
}, t0 = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], t1 = t0.reduce((e, t) => (e[t] = function(e) {
	let t = [], r = [], n = 0, a = !1, i = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		schedule: (e, i = !1, s = !1) => {
			let l = s && a, u = l ? t : r;
			return i && o.add(e), -1 === u.indexOf(e) && (u.push(e), l && a && (n = t.length)), e;
		},
		cancel: (e) => {
			let t = r.indexOf(e);
			-1 !== t && r.splice(t, 1), o.delete(e);
		},
		process: (l) => {
			if (a) {
				i = !0;
				return;
			}
			if (a = !0, [t, r] = [r, t], r.length = 0, n = t.length) for (let r = 0; r < n; r++) {
				let n = t[r];
				n(l), o.has(n) && (s.schedule(n), e());
			}
			a = !1, i && (i = !1, s.process(l));
		}
	};
	return s;
}(() => tJ = !0), e), {}), t2 = t0.reduce((e, t) => {
	let r = t1[t];
	return e[t] = (e, t = !1, n = !1) => (tJ || t8(), r.schedule(e, t, n)), e;
}, {}), t4 = t0.reduce((e, t) => (e[t] = t1[t].cancel, e), {}), t5 = (e) => t1[e].process(tQ), t3 = (e) => {
	tJ = !1, tQ.delta = tX ? tU : Math.max(Math.min(e - tQ.timestamp, 40), 1), tQ.timestamp = e, tZ = !0, t0.forEach(t5), tZ = !1, tJ && (tX = !1, tK(t3));
}, t8 = () => {
	tJ = !0, tX = !0, tZ || tK(t3);
};
function t6(e, t, r = 0) {
	return e - t - r;
}
var t9 = (e) => {
	let t = ({ delta: t }) => e(t);
	return {
		start: () => t2.update(t, !0),
		stop: () => t4.update(t)
	};
};
function t7(e) {
	let t, r, n;
	var a, { from: i, autoplay: o = !0, driver: s = t9, elapsed: l = 0, repeat: u = 0, repeatType: c = "loop", repeatDelay: f = 0, onPlay: h, onStop: d, onComplete: m, onRepeat: g, onUpdate: p } = e, y = eu(e, [
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
	let { to: b } = y, v = 0, x = y.duration, w = !1, C = !0, k = function(e) {
		if (Array.isArray(e.to)) return tq;
		if (tG[e.type]) return tG[e.type];
		let t = new Set(Object.keys(e));
		if (t.has("ease") || t.has("duration") && !t.has("dampingRatio"));
		else if (t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta")) return te;
		return tq;
	}(y);
	null != (a = k.needsInterpolation) && a.call(k, i, b) && (n = tz([0, 100], [i, b], { clamp: !1 }), i = 0, b = 100);
	let P = k(Object.assign(Object.assign({}, y), {
		from: i,
		to: b
	}));
	return o && (h?.(), (t = s(function(e) {
		if (C || (e = -e), l += e, !w) {
			let e = P.next(Math.max(0, l));
			r = e.value, n && (r = n(r)), w = C ? e.done : l <= 0;
		}
		if (p?.(r), w) if (0 === v && (x ??= l), v < u) {
			var a = l;
			(C ? a >= x + f : a <= -f) && (v++, "reverse" === c ? l = function(e, t, r = 0, n = !0) {
				return n ? t6(t + -e, t, r) : t - (e - t) + r;
			}(l, x, f, C = v % 2 == 0) : (l = t6(l, x, f), "mirror" === c && P.flipTarget()), w = !1, g && g());
		} else t.stop(), m && m();
	})).start()), { stop: () => {
		d?.(), t.stop();
	} };
}
var re = (e, t) => 1 - 3 * t + 3 * e, rt = (e, t) => 3 * t - 6 * e, rr = (e, t, r) => ((re(t, r) * e + rt(t, r)) * e + 3 * t) * e, rn = (e, t, r) => 3 * re(t, r) * e * e + 2 * rt(t, r) * e + 3 * t, ra = {
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
}, ri = /[A-Z]|^ms/g, ro = /_EMO_([^_]+?)_([^]*?)_EMO_/g, rs = function(e) {
	return 45 === e.charCodeAt(1);
}, rl = function(e) {
	return null != e && "boolean" != typeof e;
}, ru = (ef = function(e) {
	return rs(e) ? e : e.replace(ri, "-$&").toLowerCase();
}, eh = Object.create(null), function(e) {
	return void 0 === eh[e] && (eh[e] = ef(e)), eh[e];
}), rc = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if ("string" == typeof t) return t.replace(ro, function(e, t, r) {
			return ep = {
				name: t,
				styles: r,
				next: ep
			}, t;
		});
	}
	return 1 === ra[e] || rs(e) || "number" != typeof t || 0 === t ? t : t + "px";
};
function rf(e, t, r) {
	if (null == r) return "";
	if (void 0 !== r.__emotion_styles) return r;
	switch (typeof r) {
		case "boolean": return "";
		case "object":
			if (1 === r.anim) return ep = {
				name: r.name,
				styles: r.styles,
				next: ep
			}, r.name;
			if (void 0 !== r.styles) {
				var n = r.next;
				if (void 0 !== n) for (; void 0 !== n;) ep = {
					name: n.name,
					styles: n.styles,
					next: ep
				}, n = n.next;
				return r.styles + ";";
			}
			return function(e, t, r) {
				var n = "";
				if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += rf(e, t, r[a]) + ";";
				else for (var i in r) {
					var o = r[i];
					if ("object" != typeof o) null != t && void 0 !== t[o] ? n += i + "{" + t[o] + "}" : rl(o) && (n += ru(i) + ":" + rc(i, o) + ";");
					else if (Array.isArray(o) && "string" == typeof o[0] && (null == t || void 0 === t[o[0]])) for (var s = 0; s < o.length; s++) rl(o[s]) && (n += ru(i) + ":" + rc(i, o[s]) + ";");
					else {
						var l = rf(e, t, o);
						switch (i) {
							case "animation":
							case "animationName":
								n += ru(i) + ":" + l + ";";
								break;
							default: n += i + "{" + l + "}";
						}
					}
				}
				return n;
			}(e, t, r);
		case "function": if (void 0 !== e) {
			var a = ep, i = r(e);
			return ep = a, rf(e, t, i);
		}
	}
	if (null == t) return r;
	var o = t[r];
	return void 0 !== o ? o : r;
}
var rh = /label:\s*([^\s;{]+)\s*(;|$)/g;
function rd() {
	return new Proxy({}, { get: (e, t) => t });
}
let rm = rd(), rg = {
	paddingX: [rm.paddingLeft, rm.paddingRight],
	paddingY: [rm.paddingTop, rm.paddingBottom],
	marginX: [rm.marginInlineStart, rm.marginInlineEnd],
	marginY: [rm.marginTop, rm.marginBottom],
	borderX: [rm.borderLeft, rm.borderRight],
	borderY: [rm.borderTop, rm.borderBottom],
	color: [rm.color, rm.fill],
	borderTopRadius: [rm.borderTopLeftRadius, rm.borderTopRightRadius],
	borderBottomRadius: [rm.borderBottomLeftRadius, rm.borderBottomRightRadius],
	borderRightRadius: [rm.borderTopRightRadius, rm.borderBottomRightRadius],
	borderLeftRadius: [rm.borderTopLeftRadius, rm.borderBottomLeftRadius],
	backgroundGradient: [rm.backgroundImage],
	boxSize: [rm.width, rm.height]
}, rp = rd(), ry = {
	font: rp.fontFamily,
	shadow: rp.boxShadow,
	rounded: rp.borderRadius,
	roundedTop: rp.borderTopRadius,
	roundedBottom: rp.borderBottomRadius,
	roundedLeft: rp.borderLeftRadius,
	roundedRight: rp.borderRightRadius,
	bg: rp.background,
	bgImage: rp.backgroundImage,
	bgSize: rp.backgroundSize,
	bgPosition: rp.backgroundPosition,
	bgRepeat: rp.backgroundRepeat,
	bgAttachment: rp.backgroundAttachment,
	bgColor: rp.backgroundColor,
	bgGradient: rp.backgroundGradient,
	bgClip: rp.backgroundClip,
	pos: rp.position,
	p: rp.padding,
	pt: rp.paddingTop,
	pr: rp.paddingRight,
	pl: rp.paddingLeft,
	pb: rp.paddingBottom,
	ps: rp.paddingInlineStart,
	pe: rp.paddingInlineEnd,
	px: rp.paddingX,
	py: rp.paddingY,
	m: rp.margin,
	mt: rp.marginTop,
	mr: rp.marginRight,
	ml: rp.marginLeft,
	mb: rp.marginBottom,
	ms: rp.marginInlineStart,
	me: rp.marginInlineEnd,
	mx: rp.marginX,
	my: rp.marginY,
	w: rp.width,
	minW: rp.minWidth,
	maxW: rp.maxWidth,
	h: rp.height,
	minH: rp.minHeight,
	maxH: rp.maxHeight
}, rb = rd(), rv = (...e) => {
	let t = [...e];
	for (let r of e) ry[r] && t.push(ry[r]);
	return t;
}, rx = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
var rw = class e {
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
		if (rx[t]) return rx[t];
		let r = t;
		if (r.startsWith("$") || r.endsWith("$") || r.startsWith("_")) {
			let t = "", n = "";
			if (r.startsWith("_") ? (t = "&", r = r.slice(1)) : r.startsWith("$") ? (t = "& ", r = r.slice(1)) : (n = " &", r = r.slice(0, r.length - 1)), r.startsWith("data") || r.startsWith("aria")) {
				let [e, a] = r.split("__");
				return a ? `${t}[${m(e)}='${m(a)}']${n}` : `${t}[${m(e)}]${n}`;
			}
			if ("&" === t) {
				if (r.startsWith("$")) return `${t}::${r.slice(1)}`;
				if (e.supportedPseudoClasses[r]) {
					let n = e.supportedPseudoClasses[r];
					return `${t}:${n}, ${t}[data-${n}]:not([data-${n}='false']), ${t}.${n}`;
				}
				let [n, a] = r.split("__"), i = m(n);
				return a ? `${t}[data-${i}='${m(a)}']` : `${t}[data-${i}]:not([data-${i}='false'])`;
			}
		}
	};
	static walkStateValues = (t, r, n = {
		default: {},
		selectorPath: [],
		path: []
	}) => {
		let { $: a,...i } = t;
		for (let t in i) {
			let o = i[t], s = i.default ?? n.default, l = a ?? Z(s, [...n.path.slice(1), "$"]), u = l ? [...n.selectorPath, l] : n.selectorPath, c = [...n.path, t];
			if (d(o)) {
				e.walkStateValues(o, r, {
					path: c,
					selectorPath: u,
					default: s
				});
				continue;
			}
			r(o, c, u);
		}
	};
	constructor(e) {
		this.opt = e;
	}
	processAll(t, r = !0) {
		let n = [], { state: a, extends: i,...o } = t;
		if (i) for (let e of i) n.push(...this.processAll(e, r));
		if (a) {
			let t = {}, r = {};
			e.walkStateValues(a, (e, n, a) => {
				let i = `--${this.opt.varPrefix}-state-${n.join("-")}`, o = I(n) ?? "", s = {};
				this.process(s, o, e, !1), t[i] = s[o], h(r, [...a, o], `var(${i})`);
			}), n.push(t), n.push(...this.processAll(r));
		}
		if (!el(o)) {
			let e = {};
			this.processTo(e, o, r), n.push(e);
		}
		return n;
	}
	processTo(e, t, r = !0) {
		for (let n in t) this.process(e, n, t[n], r);
	}
	process(t, r, n, a = !0) {
		if (this.opt.mixins[r]) {
			let e = this.opt.mixins[r]?.get(n);
			if (e) for (let r in e) this.process(t, r, e[r], a);
			return;
		}
		let i = r;
		if (d(n)) {
			t[i = e.convertSelector(i) ?? i] = t[i] ?? {}, this.processTo(t[i], n);
			return;
		}
		if (a && rg[i = ry[i] ?? i]) {
			for (let e of rg[i]) t[e] = this.opt.processValue(e, n);
			return;
		}
		t[i] = this.opt.processValue(i, n);
	}
};
let rC = ((ed = {}).var = "var", ed.mixin = "mixin", ed);
var rk = class e {
	static create(e, { value: t, on: r, transform: n }) {
		return {
			type: e,
			value: t,
			on: r,
			transform: n,
			__Tokens: void 0,
			__ValueType: void 0,
			__CSSTokens: void 0
		};
	}
	static color(r) {
		return e.create(rC.var, {
			value: r,
			on: rv(rb.color, rb.bgColor, rb.outlineColor, rb.borderColor, rb.accentColor, rb.fill, rb.stroke),
			transform: (e, r) => t(e) ? {
				default: `var(${r(e)})`,
				rgb: `var(${r(`${e}/rgb`)})`
			} : {
				default: `rgb(${e[0]}, ${e[1]}, ${e[2]})`,
				rgb: `${e[0]} ${e[1]} ${e[2]}`
			},
			fallback: ""
		});
	}
	static space(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.gap, rb.rowGap, rb.columnGap, rb.top, rb.right, rb.bottom, rb.left, rb.m, rb.ms, rb.me, rb.mt, rb.mr, rb.mb, rb.ml, rb.mx, rb.my, rb.p, rb.ps, rb.pe, rb.pt, rb.pr, rb.pb, rb.pl, rb.px, rb.py)
		});
	}
	static boxSize(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.w, rb.minW, rb.maxW, rb.h, rb.minH, rb.maxH, rb.boxSize),
			fallback: 0
		});
	}
	static fontSize(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.fontSize),
			fallback: 0
		});
	}
	static lineHeight(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.lineHeight),
			fallback: 0
		});
	}
	static rounded(t) {
		return e.create(rC.var, {
			value: t,
			fallback: 0,
			on: rv(rb.rounded, rb.roundedTop, rb.roundedBottom, rb.roundedLeft, rb.roundedRight, rm.borderTopLeftRadius, rm.borderTopRightRadius, rm.borderBottomLeftRadius, rm.borderBottomRightRadius, rm.borderTopRightRadius, rm.borderBottomRightRadius, rm.borderTopLeftRadius, rm.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.transitionTimingFunction)
		});
	}
	static transitionDuration(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.transitionDuration),
			transform: (e) => `${e}ms`
		});
	}
	static font(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.font)
		});
	}
	static fontWeight(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.fontWeight)
		});
	}
	static letterSpacing(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.letterSpacing)
		});
	}
	static shadow(t) {
		return e.create(rC.var, {
			value: t,
			on: rv(rb.shadow)
		});
	}
	static customMixin(t, r) {
		return e.create(rC.mixin, {
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
let rP = (e, t, r) => {
	let n = e;
	for (let e = 0; e < t.length; e++) {
		let a = t[e];
		if (e === t.length - 1) {
			n[a] = r;
			continue;
		}
		n[a] = n[a] ?? {}, n = n[a];
	}
};
var rM = class e {
	static defaultMode = "_default";
	static walkValues = (t, r, n = []) => {
		for (let a in t) {
			let i = t[a];
			if (d(i)) {
				if (er(i, "_default")) {
					r(i, [...n, a]);
					continue;
				}
				e.walkValues(i, r, [...n, a]);
				continue;
			}
			r(i, [...n, a]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(t, { cssVar: r, transformFallback: n }) {
		e.walkValues(t.value, (e, a) => {
			let i = a.join("."), o = (e, a) => {
				let i = t.transform ? t.transform(e, r) : n(e);
				if (U(i)) for (let e in i) a(i[e], "default" === e ? "" : e);
				else a(i, "");
			};
			if (h(this._cssVarRefs, [i], r(i)), d(e)) for (let t in e) o(e[t], (e, r) => {
				h(this._values, [`${i}${r ? `/${r}` : ""}`, t], e);
			});
			else o(e, (e, t) => {
				h(this._values, [`${i}${t ? `/${t}` : ""}`], e);
			});
		});
	}
	get tokens() {
		return J(this._values);
	}
	get(t, r, n) {
		let a = this._values[t];
		return U(a) ? n ? a[r] : a[r] ?? a[e.defaultMode] : n ? r === e.defaultMode ? a : void 0 : a;
	}
	use(e, t = !1) {
		if (this._cssVarRefs[e]) return t ? `${this._cssVarRefs[e]}` : `var(${this._cssVarRefs[e]})`;
	}
}, rS = class e {
	static walkValue = (t, r, n = []) => {
		for (let a in t) {
			let i = t[a];
			if (d(i)) {
				if (er(i, "__mixin")) {
					r(i, [...n, a]);
					continue;
				}
				e.walkValue(i, r, [...n, a]);
				continue;
			}
			r(i, [...n, a]);
		}
	};
	_values = {};
	constructor(t) {
		e.walkValue(t.value, (e, t) => {
			let r = t.join(".");
			h(this._values, [r], S(e, "__mixin"));
		});
	}
	get tokens() {
		return J(this._values);
	}
	get(e) {
		return this._values[e];
	}
}, r_ = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
let rA = (e) => {
	let t = Z(e, ["color", "sys"], {});
	return {
		...e,
		color: { sys: l(r_, (e) => c(t, (t, r) => _(e, (e) => r.indexOf(e) > -1))) }
	};
}, rT = (e) => (t) => `rgba(var(${t}--rgb) / ${e})`;
function rR(e, t) {
	return Object.assign((e) => t(e), {
		toString: () => e,
		token: e
	});
}
var rD = (e) => e.reduce((e, t) => Object.assign(e, { [t]: !0 }), {}), r$ = class e {
	static propsCanPercent = rD([...rk.boxSize({}).on]);
	static propsCanBaseDp = rD([
		...rk.boxSize({}).on,
		...rk.space({}).on,
		...rk.fontSize({}).on,
		...rk.letterSpacing({}).on,
		...rk.lineHeight({}).on,
		...rk.rounded({}).on
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
	transformFallback = (t, r) => e.propsCanBaseDp[t] && A(r) ? e.propsCanPercent[t] && 1 > Math.abs(r) ? `${100 * r}%` : this.dp(r) : r;
	constructor(e, t = {}) {
		for (let r in this.theme = e, this.varPrefix = t.varPrefix ?? "vk", this.mode = t.mode ?? "light", h(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e) {
			let t = e[r];
			if (t) {
				if (t.type === rC.var) {
					let e = new rM(t, {
						cssVar: (e) => this.cssVar(r, e),
						transformFallback: (e) => this.transformFallback(t.on[0], e)
					});
					for (let n of (this.tokens[r] = e, t.on)) this.propValues[n] = e;
					for (let t of e.tokens) for (let a of ["light", "dark"]) {
						let i = a === this.mode ? "_default" : `_${a}`, o = e.get(t, i, !0);
						n(o) || ("_default" === i ? h(this.cssVars, [this.cssVar(r, t)], o) : h(this.cssVars, [i, this.cssVar(r, t)], o));
					}
					continue;
				}
				if (t.type === rC.mixin) {
					let e = new rS(t);
					for (let r of t.on) this.mixins[r] = e;
				}
			}
		}
	}
	cssVar(e, t) {
		return `--${this.varPrefix}-${m(e)}__${t.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (e, t) => this.tokens[t] ? Object.assign((e) => this.tokens[t]?.get(e, `_${this.mode}`), { tokens: this.tokens[t]?.tokens }) : this.mixins[t] ? Object.assign((e) => this.mixins[t]?.get(e), { tokens: this.mixins[t]?.tokens }) : void 0 });
	processValue = (e, t) => {
		if (P(t) && er(t, "token")) {
			let r = this.propValues[e]?.use(t.token, !0);
			return r ? t(r) : void 0;
		}
		return this.propValues[e]?.use(t) ?? this.transformFallback(e, t);
	};
	unstable_sx = (e) => new rw({
		mixins: this.mixins,
		varPrefix: this.varPrefix,
		processValue: this.processValue
	}).processAll(e);
	unstable_css(e, t) {
		let r = t ?? {};
		return r.__emotion_styles = r.__emotion_styles ?? function(e, t, r) {
			if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
			var n, a = !0, i = "";
			ep = void 0;
			var o = e[0];
			null == o || void 0 === o.raw ? (a = !1, i += rf(r, t, o)) : i += o[0];
			for (var s = 1; s < e.length; s++) i += rf(r, t, e[s]), a && (i += o[s]);
			rh.lastIndex = 0;
			for (var l = ""; null !== (n = rh.exec(i));) l += "-" + n[1];
			return {
				name: function(e) {
					for (var t, r = 0, n = 0, a = e.length; a >= 4; ++n, a -= 4) t = (65535 & (t = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24)) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, r = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
					switch (a) {
						case 3: r ^= (255 & e.charCodeAt(n + 2)) << 16;
						case 2: r ^= (255 & e.charCodeAt(n + 1)) << 8;
						case 1: r ^= 255 & e.charCodeAt(n), r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
					}
					return r ^= r >>> 13, (((r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16)) ^ r >>> 15) >>> 0).toString(36);
				}(i) + l,
				styles: i,
				next: ep
			};
		}(this.unstable_sx(t), e?.registered, {}), r.__emotion_styles;
	}
	toFigmaTokens() {
		let e = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } }, r = {}, n = {}, a = (e, r) => U(r) ? {
			$type: e,
			$value: l(r, (t) => a(e, t).$value)
		} : t(r) ? {
			$type: e,
			$value: r.replace(/var\(([^)]+)\)/g, (e) => {
				let t = e.slice(4, e.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((e, t) => 0 === t ? x(e) : e).join(".") ?? "";
				return t.startsWith("sys.") ? `{${t}}` : `{seed.${t}}`;
			}).replace(/calc\(.+\)$/g, (e) => e.slice(5, e.length - 1))
		} : {
			$type: e,
			$value: r
		};
		for (let t in this.tokens) {
			let i = this.tokens[t], o = (o) => {
				for (let s of i.tokens) if (!s.includes("/")) if (s.startsWith("sys.")) {
					let e = i.get(s, "_default"), l = i.get(s, "_dark");
					rP(r, [t, ...s.split(".")], a(o, e)), e !== l && rP(n, [t, ...s.split(".")], a(o, l));
				} else rP(e, [t, ...s.split(".")], a(o, i.get(s, "_default")));
			};
			switch (t) {
				case "color":
					o("color");
					break;
				case "rounded":
					o("borderRadius");
					break;
				case "shadow":
					o("boxShadow");
					break;
				case "font":
					o("fontFamily");
					break;
				case "fontWeight": o("fontWeight");
			}
		}
		for (let e in this.mixins) {
			let t = this.mixins[e];
			if (!t) continue;
			let n = (n) => {
				for (let i of t.tokens) {
					let o = t.get(i);
					if (!o) continue;
					let s = this.unstable_sx(o)[0];
					rP(r, [e, ...i.split(".")], a(n, s));
				}
			};
			"textStyle" === e && n("typography");
		}
		return {
			seed: e,
			base: rA(r),
			dark: rA(n)
		};
	}
};
let rO = {
	shadow: rk.shadow({
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
	elevation: rk.customMixin("elevation", {
		0: rk.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		1: rk.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		2: rk.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		3: rk.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		4: rk.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var rL = (e, t, r, n) => Object.assign(function(e, t, r, n) {
	if (e === t && r === n) return tW;
	let a = new Float32Array(11);
	for (let t = 0; t < 11; ++t) a[t] = rr(.1 * t, e, r);
	return (i) => 0 === i || 1 === i ? i : rr(function(t) {
		let n = 0, i = 1;
		for (; 10 !== i && a[i] <= t; ++i) n += .1;
		let o = n + (t - a[--i]) / (a[i + 1] - a[i]) * .1, s = rn(o, e, r);
		if (s >= .001) {
			var l = o;
			for (let n = 0; n < 8; ++n) {
				let n = rn(l, e, r);
				if (0 === n) break;
				let a = rr(l, e, r) - t;
				l -= a / n;
			}
			return l;
		}
		return 0 === s ? o : function(e, t, r, n, a) {
			let i, o, s = 0;
			do
				(i = rr(o = t + (r - t) / 2, n, a) - e) > 0 ? r = o : t = o;
			while (Math.abs(i) > 1e-7 && ++s < 10);
			return o;
		}(t, n, n + .1, e, r);
	}(i), t, n);
}(e, t, r, n), { toString: () => `cubic-bezier(${e}, ${t}, ${r}, ${n})` });
let rI = {
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
		linear: rL(0, 0, 1, 1),
		standard: Object.assign(rL(.2, 0, 0, 1), {
			accelerate: rL(.3, 0, 1, 1),
			decelerate: rL(0, 0, 0, 1)
		}),
		emphasized: Object.assign(rL(.2, 0, 0, 1), {
			accelerate: rL(.3, 0, .8, .15),
			decelerate: rL(.05, .7, .1, 1)
		}),
		legacy: Object.assign(rL(.4, 0, .2, 1), {
			decelerate: rL(0, 0, .2, 1),
			accelerate: rL(.4, 0, 1, 1)
		})
	}
}, rF = (e, t) => {
	let r = t ?? {
		...e,
		from: { ...e.to },
		to: { ...e.from }
	};
	return u({
		onComplete: T(),
		$default: T()
	}, (t, { slots: n, emit: a }) => {
		let i, o = (t, r) => {
			i = t7({
				...e,
				autoplay: !0,
				onComplete: () => {
					r(), a("complete", "enter");
				},
				onUpdate: (e) => {
					Object.assign(t.style, e);
				}
			});
		}, s = (e, t) => {
			i = t7({
				...r,
				autoplay: !0,
				onComplete: () => {
					t(), a("complete", "leave");
				},
				onUpdate: (t) => {
					Object.assign(e.style, t);
				}
			});
		}, l = () => {
			i?.stop();
		};
		return () => Y(eA, {
			css: !1,
			onEnter: o,
			onEnterCancelled: l,
			onLeave: s,
			onLeaveCancelled: l,
			children: n.default?.()
		});
	}, { name: "Transition" });
}, rE = {
	transitionDuration: rk.transitionDuration(rI.duration),
	transitionTimingFunction: rk.transitionTimingFunction({
		linear: rI.easing.linear.toString(),
		standard: rI.easing.standard.toString(),
		"standard-accelerate": rI.easing.standard.accelerate.toString(),
		"standard-decelerate": rI.easing.standard.decelerate.toString(),
		emphasized: rI.easing.emphasized.toString(),
		"emphasized-decelerate": rI.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": rI.easing.emphasized.accelerate.toString(),
		legacy: rI.easing.legacy.toString(),
		"legacy-decelerate": rI.easing.legacy.decelerate.toString(),
		"legacy-accelerate": rI.easing.legacy.accelerate.toString()
	})
};
function rV(e) {
	return e < 0 ? -1 : +(0 !== e);
}
function rB(e, t, r) {
	return r < e ? e : r > t ? t : r;
}
function rH(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function rN(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function rz(e, t) {
	return [
		e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2],
		e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2],
		e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]
	];
}
var rW = [
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
], rj = [
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
], rq = [
	95.047,
	100,
	108.883
];
function rG(e, t, r) {
	return (-16777216 | (255 & e) << 16 | (255 & t) << 8 | 255 & r) >>> 0;
}
function rU(e) {
	return rG(rZ(e[0]), rZ(e[1]), rZ(e[2]));
}
function rY(e) {
	return 116 * rQ(function(e) {
		return rz([
			rJ(e >> 16 & 255),
			rJ(e >> 8 & 255),
			rJ(255 & e)
		], rW);
	}(e)[1] / 100) - 16;
}
function rK(e) {
	return 100 * function(e) {
		let t = e * e * e;
		return t > 216 / 24389 ? t : (116 * e - 16) / (24389 / 27);
	}((e + 16) / 116);
}
function rX(e) {
	return 116 * rQ(e / 100) - 16;
}
function rJ(e) {
	let t = e / 255;
	return t <= .040449936 ? t / 12.92 * 100 : 100 * Math.pow((t + .055) / 1.055, 2.4);
}
function rZ(e) {
	var t;
	let r = e / 100;
	return (t = Math.round(255 * (r <= .0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055))) < 0 ? 0 : t > 255 ? 255 : t;
}
function rQ(e) {
	return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
}
var r0 = class e {
	static make(t = rq, r = 200 / Math.PI * rK(50) / 100, n = 50, a = 2, i = !1) {
		var o, s;
		let l = .401288 * t[0] + .650173 * t[1] + -.051461 * t[2], u = -.250268 * t[0] + 1.204414 * t[1] + .045854 * t[2], c = -.002079 * t[0] + .048952 * t[1] + .953127 * t[2], f = .8 + a / 10, h = f >= .9 ? (1 - (o = (f - .9) * 10)) * .59 + .69 * o : (1 - (s = (f - .8) * 10)) * .525 + .59 * s, d = i ? 1 : f * (1 - 1 / 3.6 * Math.exp((-r - 42) / 92)), m = [
			100 / l * (d = d > 1 ? 1 : d < 0 ? 0 : d) + 1 - d,
			100 / u * d + 1 - d,
			100 / c * d + 1 - d
		], g = 1 / (5 * r + 1), p = g * g * g * g, y = 1 - p, b = p * r + .1 * y * y * Math.cbrt(5 * r), v = rK(n) / t[1], x = 1.48 + Math.sqrt(v), w = .725 / Math.pow(v, .2), C = [
			Math.pow(b * m[0] * l / 100, .42),
			Math.pow(b * m[1] * u / 100, .42),
			Math.pow(b * m[2] * c / 100, .42)
		], k = [
			400 * C[0] / (C[0] + 27.13),
			400 * C[1] / (C[1] + 27.13),
			400 * C[2] / (C[2] + 27.13)
		];
		return new e(v, (2 * k[0] + k[1] + .05 * k[2]) * w, w, w, h, f, m, b, Math.pow(b, .25), x);
	}
	constructor(e, t, r, n, a, i, o, s, l, u) {
		this.n = e, this.aw = t, this.nbb = r, this.ncb = n, this.c = a, this.nc = i, this.rgbD = o, this.fl = s, this.fLRoot = l, this.z = u;
	}
};
r0.DEFAULT = r0.make();
var r1 = class e {
	constructor(e, t, r, n, a, i, o, s, l) {
		this.hue = e, this.chroma = t, this.j = r, this.q = n, this.m = a, this.s = i, this.jstar = o, this.astar = s, this.bstar = l;
	}
	distance(e) {
		let t = this.jstar - e.jstar, r = this.astar - e.astar, n = this.bstar - e.bstar;
		return 1.41 * Math.pow(Math.sqrt(t * t + r * r + n * n), .63);
	}
	static fromInt(t) {
		return e.fromIntInViewingConditions(t, r0.DEFAULT);
	}
	static fromIntInViewingConditions(t, r) {
		let n = rJ((16711680 & t) >> 16), a = rJ((65280 & t) >> 8), i = rJ(255 & t), o = .41233895 * n + .35762064 * a + .18051042 * i, s = .2126 * n + .7152 * a + .0722 * i, l = .01932141 * n + .11916382 * a + .95034478 * i, u = r.rgbD[0] * (.401288 * o + .650173 * s - .051461 * l), c = r.rgbD[1] * (-.250268 * o + 1.204414 * s + .045854 * l), f = r.rgbD[2] * (-.002079 * o + .048952 * s + .953127 * l), h = Math.pow(r.fl * Math.abs(u) / 100, .42), d = Math.pow(r.fl * Math.abs(c) / 100, .42), m = Math.pow(r.fl * Math.abs(f) / 100, .42), g = 400 * rV(u) * h / (h + 27.13), p = 400 * rV(c) * d / (d + 27.13), y = 400 * rV(f) * m / (m + 27.13), b = (11 * g + -12 * p + y) / 11, v = (g + p - 2 * y) / 9, x = 180 * Math.atan2(v, b) / Math.PI, w = x < 0 ? x + 360 : x >= 360 ? x - 360 : x, C = w * Math.PI / 180, k = 100 * Math.pow((40 * g + 20 * p + y) / 20 * r.nbb / r.aw, r.c * r.z), P = 4 / r.c * Math.sqrt(k / 100) * (r.aw + 4) * r.fLRoot, M = Math.pow(5e4 / 13 * (.25 * (Math.cos((w < 20.14 ? w + 360 : w) * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(b * b + v * v) / ((20 * g + 20 * p + 21 * y) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, r.n), .73), S = M * Math.sqrt(k / 100), _ = S * r.fLRoot, A = 50 * Math.sqrt(M * r.c / (r.aw + 4)), T = 1 / .0228 * Math.log(1 + .0228 * _);
		return new e(w, S, k, P, _, A, 1.7000000000000002 * k / (1 + .007 * k), T * Math.cos(C), T * Math.sin(C));
	}
	static fromJch(t, r, n) {
		return e.fromJchInViewingConditions(t, r, n, r0.DEFAULT);
	}
	static fromJchInViewingConditions(t, r, n, a) {
		let i = 4 / a.c * Math.sqrt(t / 100) * (a.aw + 4) * a.fLRoot, o = r * a.fLRoot, s = 50 * Math.sqrt(r / Math.sqrt(t / 100) * a.c / (a.aw + 4)), l = n * Math.PI / 180, u = 1 / .0228 * Math.log(1 + .0228 * o);
		return new e(n, r, t, i, o, s, 1.7000000000000002 * t / (1 + .007 * t), u * Math.cos(l), u * Math.sin(l));
	}
	static fromUcs(t, r, n) {
		return e.fromUcsInViewingConditions(t, r, n, r0.DEFAULT);
	}
	static fromUcsInViewingConditions(t, r, n, a) {
		let i = (Math.exp(.0228 * Math.sqrt(r * r + n * n)) - 1) / .0228 / a.fLRoot, o = 180 / Math.PI * Math.atan2(n, r);
		return o < 0 && (o += 360), e.fromJchInViewingConditions(t / (1 - (t - 100) * .007), i, o, a);
	}
	toInt() {
		return this.viewed(r0.DEFAULT);
	}
	viewed(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, n = .25 * (Math.cos(r + 2) + 3.8), a = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), i = 5e4 / 13 * n * e.nc * e.ncb, o = a / e.nbb, s = Math.sin(r), l = Math.cos(r), u = 23 * (o + .305) * t / (23 * i + 11 * t * l + 108 * t * s), c = u * l, f = u * s, h = (460 * o + 451 * c + 288 * f) / 1403, d = (460 * o - 891 * c - 261 * f) / 1403, m = (460 * o - 220 * c - 6300 * f) / 1403, g = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), p = rV(h) * (100 / e.fl) * Math.pow(g, 1 / .42), y = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), b = rV(d) * (100 / e.fl) * Math.pow(y, 1 / .42), v = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), x = rV(m) * (100 / e.fl) * Math.pow(v, 1 / .42), w = p / e.rgbD[0], C = b / e.rgbD[1], k = x / e.rgbD[2];
		return function(e, t, r) {
			let n = rj[0][0] * e + rj[0][1] * t + rj[0][2] * r, a = rj[1][0] * e + rj[1][1] * t + rj[1][2] * r, i = rj[2][0] * e + rj[2][1] * t + rj[2][2] * r;
			return rG(rZ(n), rZ(a), rZ(i));
		}(1.86206786 * w - 1.01125463 * C + .14918677 * k, .38752654 * w + .62144744 * C - .00897398 * k, -.0158415 * w - .03412294 * C + 1.04996444 * k);
	}
	static fromXyzInViewingConditions(t, r, n, a) {
		let i = a.rgbD[0] * (.401288 * t + .650173 * r - .051461 * n), o = a.rgbD[1] * (-.250268 * t + 1.204414 * r + .045854 * n), s = a.rgbD[2] * (-.002079 * t + .048952 * r + .953127 * n), l = Math.pow(a.fl * Math.abs(i) / 100, .42), u = Math.pow(a.fl * Math.abs(o) / 100, .42), c = Math.pow(a.fl * Math.abs(s) / 100, .42), f = 400 * rV(i) * l / (l + 27.13), h = 400 * rV(o) * u / (u + 27.13), d = 400 * rV(s) * c / (c + 27.13), m = (11 * f + -12 * h + d) / 11, g = (f + h - 2 * d) / 9, p = 180 * Math.atan2(g, m) / Math.PI, y = p < 0 ? p + 360 : p >= 360 ? p - 360 : p, b = y * Math.PI / 180, v = 100 * Math.pow((40 * f + 20 * h + d) / 20 * a.nbb / a.aw, a.c * a.z), x = 4 / a.c * Math.sqrt(v / 100) * (a.aw + 4) * a.fLRoot, w = Math.pow(5e4 / 13 * (1 / 4 * (Math.cos((y < 20.14 ? y + 360 : y) * Math.PI / 180 + 2) + 3.8)) * a.nc * a.ncb * Math.sqrt(m * m + g * g) / ((20 * f + 20 * h + 21 * d) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, a.n), .73), C = w * Math.sqrt(v / 100), k = C * a.fLRoot, P = 50 * Math.sqrt(w * a.c / (a.aw + 4)), M = Math.log(1 + .0228 * k) / .0228;
		return new e(y, C, v, x, k, P, 1.7000000000000002 * v / (1 + .007 * v), M * Math.cos(b), M * Math.sin(b));
	}
	xyzInViewingConditions(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, n = .25 * (Math.cos(r + 2) + 3.8), a = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), i = 5e4 / 13 * n * e.nc * e.ncb, o = a / e.nbb, s = Math.sin(r), l = Math.cos(r), u = 23 * (o + .305) * t / (23 * i + 11 * t * l + 108 * t * s), c = u * l, f = u * s, h = (460 * o + 451 * c + 288 * f) / 1403, d = (460 * o - 891 * c - 261 * f) / 1403, m = (460 * o - 220 * c - 6300 * f) / 1403, g = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), p = rV(h) * (100 / e.fl) * Math.pow(g, 1 / .42), y = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), b = rV(d) * (100 / e.fl) * Math.pow(y, 1 / .42), v = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), x = rV(m) * (100 / e.fl) * Math.pow(v, 1 / .42), w = p / e.rgbD[0], C = b / e.rgbD[1], k = x / e.rgbD[2];
		return [
			1.86206786 * w - 1.01125463 * C + .14918677 * k,
			.38752654 * w + .62144744 * C - .00897398 * k,
			-.0158415 * w - .03412294 * C + 1.04996444 * k
		];
	}
}, r2 = class e {
	static sanitizeRadians(e) {
		return (e + 8 * Math.PI) % (2 * Math.PI);
	}
	static trueDelinearized(e) {
		let t = e / 100;
		return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
	}
	static chromaticAdaptation(e) {
		let t = Math.pow(Math.abs(e), .42);
		return 400 * rV(e) * t / (t + 27.13);
	}
	static hueOf(t) {
		let r = rz(t, e.SCALED_DISCOUNT_FROM_LINRGB), n = e.chromaticAdaptation(r[0]), a = e.chromaticAdaptation(r[1]), i = e.chromaticAdaptation(r[2]);
		return Math.atan2((n + a - 2 * i) / 9, (11 * n + -12 * a + i) / 11);
	}
	static areInCyclicOrder(t, r, n) {
		return e.sanitizeRadians(r - t) < e.sanitizeRadians(n - t);
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
	static setCoordinate(t, r, n, a) {
		let i = e.intercept(t[a], r, n[a]);
		return e.lerpPoint(t, i, n);
	}
	static isBounded(e) {
		return 0 <= e && e <= 100;
	}
	static nthVertex(t, r) {
		let n = e.Y_FROM_LINRGB[0], a = e.Y_FROM_LINRGB[1], i = e.Y_FROM_LINRGB[2], o = r % 4 <= 1 ? 0 : 100, s = 100 * (r % 2 != 0);
		if (r < 4) {
			let r = (t - o * a - s * i) / n;
			return e.isBounded(r) ? [
				r,
				o,
				s
			] : [
				-1,
				-1,
				-1
			];
		}
		if (r < 8) {
			let r = (t - s * n - o * i) / a;
			return e.isBounded(r) ? [
				s,
				r,
				o
			] : [
				-1,
				-1,
				-1
			];
		}
		{
			let r = (t - o * n - s * a) / i;
			return e.isBounded(r) ? [
				o,
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
		let n = [
			-1,
			-1,
			-1
		], a = n, i = 0, o = 0, s = !1, l = !0;
		for (let u = 0; u < 12; u++) {
			let c = e.nthVertex(t, u);
			if (c[0] < 0) continue;
			let f = e.hueOf(c);
			if (!s) {
				n = c, a = c, i = f, o = f, s = !0;
				continue;
			}
			(l || e.areInCyclicOrder(i, f, o)) && (l = !1, e.areInCyclicOrder(i, r, f) ? (a = c, o = f) : (n = c, i = f));
		}
		return [n, a];
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
		let n = e.bisectToSegment(t, r), a = n[0], i = e.hueOf(a), o = n[1];
		for (let t = 0; t < 3; t++) if (a[t] !== o[t]) {
			let n = -1, s = 255;
			a[t] < o[t] ? (n = e.criticalPlaneBelow(e.trueDelinearized(a[t])), s = e.criticalPlaneAbove(e.trueDelinearized(o[t]))) : (n = e.criticalPlaneAbove(e.trueDelinearized(a[t])), s = e.criticalPlaneBelow(e.trueDelinearized(o[t])));
			for (let l = 0; l < 8; l++) if (1 >= Math.abs(s - n)) break;
			else {
				let l = Math.floor((n + s) / 2), u = e.CRITICAL_PLANES[l], c = e.setCoordinate(a, u, o, t), f = e.hueOf(c);
				e.areInCyclicOrder(i, r, f) ? (o = c, s = l) : (a = c, i = f, n = l);
			}
		}
		return e.midpoint(a, o);
	}
	static inverseChromaticAdaptation(e) {
		let t = Math.abs(e), r = Math.max(0, 27.13 * t / (400 - t));
		return rV(e) * Math.pow(r, 1 / .42);
	}
	static findResultByJ(t, r, n) {
		let a = 11 * Math.sqrt(n), i = r0.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(.29, i.n), .73), s = .25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * i.nc * i.ncb, l = Math.sin(t), u = Math.cos(t);
		for (let t = 0; t < 5; t++) {
			let c = a / 100, f = Math.pow((0 === r || 0 === a ? 0 : r / Math.sqrt(c)) * o, 1 / .9), h = i.aw * Math.pow(c, 1 / i.c / i.z) / i.nbb, d = 23 * (h + .305) * f / (23 * s + 11 * f * u + 108 * f * l), m = d * u, g = d * l, p = (460 * h + 451 * m + 288 * g) / 1403, y = (460 * h - 891 * m - 261 * g) / 1403, b = (460 * h - 220 * m - 6300 * g) / 1403, x = rz([
				e.inverseChromaticAdaptation(p),
				e.inverseChromaticAdaptation(y),
				e.inverseChromaticAdaptation(b)
			], e.LINRGB_FROM_SCALED_DISCOUNT);
			if (x[0] < 0 || x[1] < 0 || x[2] < 0) break;
			let w = e.Y_FROM_LINRGB[0], C = e.Y_FROM_LINRGB[1], k = e.Y_FROM_LINRGB[2], P = w * x[0] + C * x[1] + k * x[2];
			if (P <= 0) break;
			if (4 === t || .002 > Math.abs(P - n)) {
				if (x[0] > 100.01 || x[1] > 100.01 || x[2] > 100.01) return 0;
				return rU(x);
			}
			a -= (P - n) * a / (2 * P);
		}
		return 0;
	}
	static solveToInt(t, r, n) {
		if (r < 1e-4 || n < 1e-4 || n > 99.9999) {
			let e = rZ(rK(n));
			return rG(e, e, e);
		}
		let a = (t = rN(t)) / 180 * Math.PI, i = rK(n), o = e.findResultByJ(a, r, i);
		return 0 !== o ? o : rU(e.bisectToLimit(i, a));
	}
	static solveToCam(t, r, n) {
		return r1.fromInt(e.solveToInt(t, r, n));
	}
};
r2.SCALED_DISCOUNT_FROM_LINRGB = [
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
], r2.LINRGB_FROM_SCALED_DISCOUNT = [
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
], r2.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
], r2.CRITICAL_PLANES = [
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
var r4 = class e {
	static from(t, r, n) {
		return new e(r2.solveToInt(t, r, n));
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
		this.setInternalState(r2.solveToInt(e, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(e) {
		this.setInternalState(r2.solveToInt(this.internalHue, e, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(e) {
		this.setInternalState(r2.solveToInt(this.internalHue, this.internalChroma, e));
	}
	constructor(e) {
		this.argb = e;
		let t = r1.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = rY(e), this.argb = e;
	}
	setInternalState(e) {
		let t = r1.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = rY(e), this.argb = e;
	}
	inViewingConditions(t) {
		let r = r1.fromInt(this.toInt()).xyzInViewingConditions(t), n = r1.fromXyzInViewingConditions(r[0], r[1], r[2], r0.make());
		return e.from(n.hue, n.chroma, rX(r[1]));
	}
}, r5 = class e {
	static ratioOfTones(t, r) {
		return t = rB(0, 100, t), r = rB(0, 100, r), e.ratioOfYs(rK(t), rK(r));
	}
	static ratioOfYs(e, t) {
		let r = e > t ? e : t;
		return (r + 5) / ((r === t ? e : t) + 5);
	}
	static lighter(t, r) {
		if (t < 0 || t > 100) return -1;
		let n = rK(t), a = r * (n + 5) - 5, i = e.ratioOfYs(a, n), o = Math.abs(i - r);
		if (i < r && o > .04) return -1;
		let s = rX(a) + .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static darker(t, r) {
		if (t < 0 || t > 100) return -1;
		let n = rK(t), a = (n + 5) / r - 5, i = e.ratioOfYs(n, a), o = Math.abs(i - r);
		if (i < r && o > .04) return -1;
		let s = rX(a) - .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static lighterUnsafe(t, r) {
		let n = e.lighter(t, r);
		return n < 0 ? 100 : n;
	}
	static darkerUnsafe(t, r) {
		let n = e.darker(t, r);
		return n < 0 ? 0 : n;
	}
}, r3 = class e {
	static isDisliked(e) {
		let t = Math.round(e.hue) >= 90 && 111 >= Math.round(e.hue), r = Math.round(e.chroma) > 16, n = 65 > Math.round(e.tone);
		return t && r && n;
	}
	static fixIfDisliked(t) {
		return e.isDisliked(t) ? r4.from(t.hue, t.chroma, 70) : t;
	}
}, r8 = class e {
	static fromPalette(t) {
		return new e(t.name ?? "", t.palette, t.tone, t.isBackground ?? !1, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
	}
	constructor(e, t, r, n, a, i, o, s) {
		if (this.name = e, this.palette = t, this.tone = r, this.isBackground = n, this.background = a, this.secondBackground = i, this.contrastCurve = o, this.toneDeltaPair = s, this.hctCache = /* @__PURE__ */ new Map(), !a && i) throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
		if (!a && o) throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
		if (a && !o) throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
	}
	getArgb(e) {
		return this.getHct(e).toInt();
	}
	getHct(e) {
		let t = this.hctCache.get(e);
		if (null != t) return t;
		let r = this.getTone(e), n = this.palette(e).getHct(r);
		return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, n), n;
	}
	getTone(t) {
		let r = t.contrastLevel < 0;
		if (this.toneDeltaPair) {
			let n = this.toneDeltaPair(t), a = n.roleA, i = n.roleB, o = n.delta, s = n.polarity, l = n.stayTogether, u = this.background(t).getTone(t), c = "nearer" === s || "lighter" === s && !t.isDark || "darker" === s && t.isDark, f = c ? a : i, h = c ? i : a, d = this.name === f.name, m = t.isDark ? 1 : -1, g = f.contrastCurve.get(t.contrastLevel), p = h.contrastCurve.get(t.contrastLevel), y = f.tone(t), b = r5.ratioOfTones(u, y) >= g ? y : e.foregroundTone(u, g), v = h.tone(t), x = r5.ratioOfTones(u, v) >= p ? v : e.foregroundTone(u, p);
			return r && (b = e.foregroundTone(u, g), x = e.foregroundTone(u, p)), (x - b) * m >= o || ((x = rB(0, 100, b + o * m)) - b) * m >= o || (b = rB(0, 100, x - o * m)), 50 <= b && b < 60 ? x = m > 0 ? Math.max(x, (b = 60) + o * m) : Math.min(x, (b = 49) + o * m) : 50 <= x && x < 60 && (x = l ? m > 0 ? Math.max(x, (b = 60) + o * m) : Math.min(x, (b = 49) + o * m) : m > 0 ? 60 : 49), d ? b : x;
		}
		{
			let n = this.tone(t);
			if (null == this.background) return n;
			let a = this.background(t).getTone(t), i = this.contrastCurve.get(t.contrastLevel);
			if (r5.ratioOfTones(a, n) >= i || (n = e.foregroundTone(a, i)), r && (n = e.foregroundTone(a, i)), this.isBackground && 50 <= n && n < 60 && (n = r5.ratioOfTones(49, a) >= i ? 49 : 60), this.secondBackground) {
				let [r, a] = [this.background, this.secondBackground], [o, s] = [r(t).getTone(t), a(t).getTone(t)], [l, u] = [Math.max(o, s), Math.min(o, s)];
				if (r5.ratioOfTones(l, n) >= i && r5.ratioOfTones(u, n) >= i) return n;
				let c = r5.lighter(l, i), f = r5.darker(u, i), h = [];
				return (-1 !== c && h.push(c), -1 !== f && h.push(f), e.tonePrefersLightForeground(o) || e.tonePrefersLightForeground(s)) ? c < 0 ? 100 : c : 1 === h.length ? h[0] : f < 0 ? 0 : f;
			}
			return n;
		}
	}
	static foregroundTone(t, r) {
		let n = r5.lighterUnsafe(t, r), a = r5.darkerUnsafe(t, r), i = r5.ratioOfTones(n, t), o = r5.ratioOfTones(a, t);
		if (!e.tonePrefersLightForeground(t)) return o >= r || o >= i ? a : n;
		{
			let e = .1 > Math.abs(i - o) && i < r && o < r;
			return i >= r || i >= o || e ? n : a;
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
}, r6 = class e {
	static fromInt(t) {
		let r = r4.fromInt(t);
		return e.fromHct(r);
	}
	static fromHct(t) {
		return new e(t.hue, t.chroma, t);
	}
	static fromHueAndChroma(t, r) {
		return new e(t, r, new r9(t, r).create());
	}
	constructor(e, t, r) {
		this.hue = e, this.chroma = t, this.keyColor = r, this.cache = /* @__PURE__ */ new Map();
	}
	tone(e) {
		let t = this.cache.get(e);
		return void 0 === t && (t = r4.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, t)), t;
	}
	getHct(e) {
		return r4.fromInt(this.tone(e));
	}
}, r9 = class {
	constructor(e, t) {
		this.hue = e, this.requestedChroma = t, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
	}
	create() {
		let e = 0, t = 100;
		for (; e < t;) {
			let r = Math.floor((e + t) / 2), n = this.maxChroma(r) < this.maxChroma(r + 1);
			if (this.maxChroma(r) >= this.requestedChroma - .01) if (Math.abs(e - 50) < Math.abs(t - 50)) t = r;
			else {
				if (e === r) return r4.from(this.hue, this.requestedChroma, e);
				e = r;
			}
			else n ? e = r + 1 : t = r;
		}
		return r4.from(this.hue, this.requestedChroma, e);
	}
	maxChroma(e) {
		if (this.chromaCache.has(e)) return this.chromaCache.get(e);
		let t = r4.from(this.hue, this.maxChromaValue, e).chroma;
		return this.chromaCache.set(e, t), t;
	}
}, r7 = class {
	constructor(e, t, r, n) {
		this.low = e, this.normal = t, this.medium = r, this.high = n;
	}
	get(e) {
		var t, r, n, a, i, o, s, l, u;
		return e <= -1 ? this.low : e < 0 ? (t = this.low, r = this.normal, (1 - (n = (e - -1) / 1)) * t + n * r) : e < .5 ? (a = this.normal, i = this.medium, (1 - (o = (e - 0) / .5)) * a + o * i) : e < 1 ? (s = this.medium, l = this.high, (1 - (u = (e - .5) / .5)) * s + u * l) : this.high;
	}
}, ne = class {
	constructor(e, t, r, n, a) {
		this.roleA = e, this.roleB = t, this.delta = r, this.polarity = n, this.stayTogether = a;
	}
};
function nt(e) {
	return e.variant === ey.FIDELITY || e.variant === ey.CONTENT;
}
function nr(e) {
	return e.variant === ey.MONOCHROME;
}
(em = ey || (ey = {}))[em.MONOCHROME = 0] = "MONOCHROME", em[em.NEUTRAL = 1] = "NEUTRAL", em[em.TONAL_SPOT = 2] = "TONAL_SPOT", em[em.VIBRANT = 3] = "VIBRANT", em[em.EXPRESSIVE = 4] = "EXPRESSIVE", em[em.FIDELITY = 5] = "FIDELITY", em[em.CONTENT = 6] = "CONTENT", em[em.RAINBOW = 7] = "RAINBOW", em[em.FRUIT_SALAD = 8] = "FRUIT_SALAD";
var nn = class e {
	static highestSurface(t) {
		return t.isDark ? e.surfaceBright : e.surfaceDim;
	}
};
nn.contentAccentToneDelta = 15, nn.primaryPaletteKeyColor = r8.fromPalette({
	name: "primary_palette_key_color",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.primaryPalette.keyColor.tone
}), nn.secondaryPaletteKeyColor = r8.fromPalette({
	name: "secondary_palette_key_color",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.secondaryPalette.keyColor.tone
}), nn.tertiaryPaletteKeyColor = r8.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => e.tertiaryPalette.keyColor.tone
}), nn.neutralPaletteKeyColor = r8.fromPalette({
	name: "neutral_palette_key_color",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.neutralPalette.keyColor.tone
}), nn.neutralVariantPaletteKeyColor = r8.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.neutralVariantPalette.keyColor.tone
}), nn.background = r8.fromPalette({
	name: "background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), nn.onBackground = r8.fromPalette({
	name: "on_background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => nn.background,
	contrastCurve: new r7(3, 3, 4.5, 7)
}), nn.surface = r8.fromPalette({
	name: "surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), nn.surfaceDim = r8.fromPalette({
	name: "surface_dim",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : new r7(87, 87, 80, 75).get(e.contrastLevel),
	isBackground: !0
}), nn.surfaceBright = r8.fromPalette({
	name: "surface_bright",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new r7(24, 24, 29, 34).get(e.contrastLevel) : 98,
	isBackground: !0
}), nn.surfaceContainerLowest = r8.fromPalette({
	name: "surface_container_lowest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new r7(4, 4, 2, 0).get(e.contrastLevel) : 100,
	isBackground: !0
}), nn.surfaceContainerLow = r8.fromPalette({
	name: "surface_container_low",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new r7(10, 10, 11, 12).get(e.contrastLevel) : new r7(96, 96, 96, 95).get(e.contrastLevel),
	isBackground: !0
}), nn.surfaceContainer = r8.fromPalette({
	name: "surface_container",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new r7(12, 12, 16, 20).get(e.contrastLevel) : new r7(94, 94, 92, 90).get(e.contrastLevel),
	isBackground: !0
}), nn.surfaceContainerHigh = r8.fromPalette({
	name: "surface_container_high",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new r7(17, 17, 21, 25).get(e.contrastLevel) : new r7(92, 92, 88, 85).get(e.contrastLevel),
	isBackground: !0
}), nn.surfaceContainerHighest = r8.fromPalette({
	name: "surface_container_highest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new r7(22, 22, 26, 30).get(e.contrastLevel) : new r7(90, 90, 84, 80).get(e.contrastLevel),
	isBackground: !0
}), nn.onSurface = r8.fromPalette({
	name: "on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.surfaceVariant = r8.fromPalette({
	name: "surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0
}), nn.onSurfaceVariant = r8.fromPalette({
	name: "on_surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 80 : 30,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(3, 4.5, 7, 11)
}), nn.inverseSurface = r8.fromPalette({
	name: "inverse_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 20
}), nn.inverseOnSurface = r8.fromPalette({
	name: "inverse_on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 20 : 95,
	background: (e) => nn.inverseSurface,
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.outline = r8.fromPalette({
	name: "outline",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 60 : 50,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1.5, 3, 4.5, 7)
}), nn.outlineVariant = r8.fromPalette({
	name: "outline_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 80,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5)
}), nn.shadow = r8.fromPalette({
	name: "shadow",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), nn.scrim = r8.fromPalette({
	name: "scrim",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), nn.surfaceTint = r8.fromPalette({
	name: "surface_tint",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0
}), nn.primary = r8.fromPalette({
	name: "primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => nr(e) ? 100 * !!e.isDark : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ne(nn.primaryContainer, nn.primary, 10, "nearer", !1)
}), nn.onPrimary = r8.fromPalette({
	name: "on_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => nr(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => nn.primary,
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.primaryContainer = r8.fromPalette({
	name: "primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => nt(e) ? e.sourceColorHct.tone : nr(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.primaryContainer, nn.primary, 10, "nearer", !1)
}), nn.onPrimaryContainer = r8.fromPalette({
	name: "on_primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => nt(e) ? r8.foregroundTone(nn.primaryContainer.tone(e), 4.5) : nr(e) ? 100 * !e.isDark : e.isDark ? 90 : 30,
	background: (e) => nn.primaryContainer,
	contrastCurve: new r7(3, 4.5, 7, 11)
}), nn.inversePrimary = r8.fromPalette({
	name: "inverse_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 40 : 80,
	background: (e) => nn.inverseSurface,
	contrastCurve: new r7(3, 4.5, 7, 7)
}), nn.secondary = r8.fromPalette({
	name: "secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ne(nn.secondaryContainer, nn.secondary, 10, "nearer", !1)
}), nn.onSecondary = r8.fromPalette({
	name: "on_secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => nr(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
	background: (e) => nn.secondary,
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.secondaryContainer = r8.fromPalette({
	name: "secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => {
		let t = e.isDark ? 30 : 90;
		return nr(e) ? e.isDark ? 30 : 85 : nt(e) ? function(e, t, r, n) {
			let a = r, i = r4.from(e, t, r);
			if (i.chroma < t) {
				let r = i.chroma;
				for (; i.chroma < t;) {
					a += n ? -1 : 1;
					let o = r4.from(e, t, a);
					if (r > o.chroma || .4 > Math.abs(o.chroma - t)) break;
					Math.abs(o.chroma - t) < Math.abs(i.chroma - t) && (i = o), r = Math.max(r, o.chroma);
				}
			}
			return a;
		}(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark) : t;
	},
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.secondaryContainer, nn.secondary, 10, "nearer", !1)
}), nn.onSecondaryContainer = r8.fromPalette({
	name: "on_secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => nr(e) ? e.isDark ? 90 : 10 : nt(e) ? r8.foregroundTone(nn.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => nn.secondaryContainer,
	contrastCurve: new r7(3, 4.5, 7, 11)
}), nn.tertiary = r8.fromPalette({
	name: "tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => nr(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ne(nn.tertiaryContainer, nn.tertiary, 10, "nearer", !1)
}), nn.onTertiary = r8.fromPalette({
	name: "on_tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => nr(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => nn.tertiary,
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.tertiaryContainer = r8.fromPalette({
	name: "tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => {
		if (nr(e)) return e.isDark ? 60 : 49;
		if (!nt(e)) return e.isDark ? 30 : 90;
		let t = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
		return r3.fixIfDisliked(t).tone;
	},
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.tertiaryContainer, nn.tertiary, 10, "nearer", !1)
}), nn.onTertiaryContainer = r8.fromPalette({
	name: "on_tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => nr(e) ? 100 * !e.isDark : nt(e) ? r8.foregroundTone(nn.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => nn.tertiaryContainer,
	contrastCurve: new r7(3, 4.5, 7, 11)
}), nn.error = r8.fromPalette({
	name: "error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ne(nn.errorContainer, nn.error, 10, "nearer", !1)
}), nn.onError = r8.fromPalette({
	name: "on_error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 20 : 100,
	background: (e) => nn.error,
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.errorContainer = r8.fromPalette({
	name: "error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.errorContainer, nn.error, 10, "nearer", !1)
}), nn.onErrorContainer = r8.fromPalette({
	name: "on_error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => nr(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
	background: (e) => nn.errorContainer,
	contrastCurve: new r7(3, 4.5, 7, 11)
}), nn.primaryFixed = r8.fromPalette({
	name: "primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => nr(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.primaryFixed, nn.primaryFixedDim, 10, "lighter", !0)
}), nn.primaryFixedDim = r8.fromPalette({
	name: "primary_fixed_dim",
	palette: (e) => e.primaryPalette,
	tone: (e) => nr(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.primaryFixed, nn.primaryFixedDim, 10, "lighter", !0)
}), nn.onPrimaryFixed = r8.fromPalette({
	name: "on_primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => nr(e) ? 100 : 10,
	background: (e) => nn.primaryFixedDim,
	secondBackground: (e) => nn.primaryFixed,
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.onPrimaryFixedVariant = r8.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (e) => e.primaryPalette,
	tone: (e) => nr(e) ? 90 : 30,
	background: (e) => nn.primaryFixedDim,
	secondBackground: (e) => nn.primaryFixed,
	contrastCurve: new r7(3, 4.5, 7, 11)
}), nn.secondaryFixed = r8.fromPalette({
	name: "secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => nr(e) ? 80 : 90,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.secondaryFixed, nn.secondaryFixedDim, 10, "lighter", !0)
}), nn.secondaryFixedDim = r8.fromPalette({
	name: "secondary_fixed_dim",
	palette: (e) => e.secondaryPalette,
	tone: (e) => nr(e) ? 70 : 80,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.secondaryFixed, nn.secondaryFixedDim, 10, "lighter", !0)
}), nn.onSecondaryFixed = r8.fromPalette({
	name: "on_secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => 10,
	background: (e) => nn.secondaryFixedDim,
	secondBackground: (e) => nn.secondaryFixed,
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.onSecondaryFixedVariant = r8.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (e) => e.secondaryPalette,
	tone: (e) => nr(e) ? 25 : 30,
	background: (e) => nn.secondaryFixedDim,
	secondBackground: (e) => nn.secondaryFixed,
	contrastCurve: new r7(3, 4.5, 7, 11)
}), nn.tertiaryFixed = r8.fromPalette({
	name: "tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => nr(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.tertiaryFixed, nn.tertiaryFixedDim, 10, "lighter", !0)
}), nn.tertiaryFixedDim = r8.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => nr(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => nn.highestSurface(e),
	contrastCurve: new r7(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ne(nn.tertiaryFixed, nn.tertiaryFixedDim, 10, "lighter", !0)
}), nn.onTertiaryFixed = r8.fromPalette({
	name: "on_tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => nr(e) ? 100 : 10,
	background: (e) => nn.tertiaryFixedDim,
	secondBackground: (e) => nn.tertiaryFixed,
	contrastCurve: new r7(4.5, 7, 11, 21)
}), nn.onTertiaryFixedVariant = r8.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => nr(e) ? 90 : 30,
	background: (e) => nn.tertiaryFixedDim,
	secondBackground: (e) => nn.tertiaryFixed,
	contrastCurve: new r7(3, 4.5, 7, 11)
});
var na = class {
	constructor(e) {
		this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = r4.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = r6.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(e, t, r) {
		let n = e.hue;
		if (t.length !== r.length) throw Error(`mismatch between hue length ${t.length} & rotations ${r.length}`);
		if (1 === r.length) return rN(e.hue + r[0]);
		let a = t.length;
		for (let e = 0; e <= a - 2; e++) {
			let a = t[e], i = t[e + 1];
			if (a < n && n < i) return rN(n + r[e]);
		}
		return n;
	}
	getArgb(e) {
		return e.getArgb(this);
	}
	getHct(e) {
		return e.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(nn.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(nn.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(nn.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(nn.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(nn.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(nn.background);
	}
	get onBackground() {
		return this.getArgb(nn.onBackground);
	}
	get surface() {
		return this.getArgb(nn.surface);
	}
	get surfaceDim() {
		return this.getArgb(nn.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(nn.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(nn.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(nn.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(nn.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(nn.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(nn.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(nn.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(nn.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(nn.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(nn.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(nn.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(nn.outline);
	}
	get outlineVariant() {
		return this.getArgb(nn.outlineVariant);
	}
	get shadow() {
		return this.getArgb(nn.shadow);
	}
	get scrim() {
		return this.getArgb(nn.scrim);
	}
	get surfaceTint() {
		return this.getArgb(nn.surfaceTint);
	}
	get primary() {
		return this.getArgb(nn.primary);
	}
	get onPrimary() {
		return this.getArgb(nn.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(nn.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(nn.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(nn.inversePrimary);
	}
	get secondary() {
		return this.getArgb(nn.secondary);
	}
	get onSecondary() {
		return this.getArgb(nn.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(nn.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(nn.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(nn.tertiary);
	}
	get onTertiary() {
		return this.getArgb(nn.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(nn.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(nn.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(nn.error);
	}
	get onError() {
		return this.getArgb(nn.onError);
	}
	get errorContainer() {
		return this.getArgb(nn.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(nn.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(nn.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(nn.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(nn.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(nn.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(nn.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(nn.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(nn.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(nn.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(nn.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(nn.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(nn.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(nn.onTertiaryFixedVariant);
	}
}, ni = class e {
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
		let n = new e(r.primary, t);
		return r.secondary && (n.a2 = new e(r.secondary, t).a1), r.tertiary && (n.a3 = new e(r.tertiary, t).a1), r.error && (n.error = new e(r.error, t).a1), r.neutral && (n.n1 = new e(r.neutral, t).n1), r.neutralVariant && (n.n2 = new e(r.neutralVariant, t).n2), n;
	}
	constructor(e, t) {
		let r = r4.fromInt(e), n = r.hue, a = r.chroma;
		t ? (this.a1 = r6.fromHueAndChroma(n, a), this.a2 = r6.fromHueAndChroma(n, a / 3), this.a3 = r6.fromHueAndChroma(n + 60, a / 2), this.n1 = r6.fromHueAndChroma(n, Math.min(a / 12, 4)), this.n2 = r6.fromHueAndChroma(n, Math.min(a / 6, 8))) : (this.a1 = r6.fromHueAndChroma(n, Math.max(48, a)), this.a2 = r6.fromHueAndChroma(n, 16), this.a3 = r6.fromHueAndChroma(n + 60, 24), this.n1 = r6.fromHueAndChroma(n, 4), this.n2 = r6.fromHueAndChroma(n, 8)), this.error = r6.fromHueAndChroma(25, 84);
	}
}, no = class e extends na {
	constructor(t, r, n) {
		super({
			sourceColorArgb: t.toInt(),
			variant: ey.EXPRESSIVE,
			contrastLevel: n,
			isDark: r,
			primaryPalette: r6.fromHueAndChroma(rN(t.hue + 240), 40),
			secondaryPalette: r6.fromHueAndChroma(na.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: r6.fromHueAndChroma(na.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: r6.fromHueAndChroma(t.hue + 15, 8),
			neutralVariantPalette: r6.fromHueAndChroma(t.hue + 15, 12)
		});
	}
};
no.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
], no.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
], no.tertiaryRotations = [
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
var ns = class e extends na {
	constructor(t, r, n) {
		super({
			sourceColorArgb: t.toInt(),
			variant: ey.VIBRANT,
			contrastLevel: n,
			isDark: r,
			primaryPalette: r6.fromHueAndChroma(t.hue, 200),
			secondaryPalette: r6.fromHueAndChroma(na.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: r6.fromHueAndChroma(na.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: r6.fromHueAndChroma(t.hue, 10),
			neutralVariantPalette: r6.fromHueAndChroma(t.hue, 12)
		});
	}
};
ns.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
], ns.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
], ns.tertiaryRotations = [
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
var nl = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: !0
};
function nu(e, t) {
	return e.score > t.score ? -1 : +(e.score < t.score);
}
var nc = class e {
	constructor() {}
	static score(t, r) {
		let { desired: n, fallbackColorARGB: a, filter: i } = {
			...nl,
			...r
		}, o = [], s = Array(360).fill(0), l = 0;
		for (let [e, r] of t.entries()) {
			let t = r4.fromInt(e);
			o.push(t);
			let n = Math.floor(t.hue);
			s[n] += r, l += r;
		}
		let u = Array(360).fill(0);
		for (let e = 0; e < 360; e++) {
			let t = s[e] / l;
			for (let r = e - 14; r < e + 16; r++) {
				let e = rH(r);
				u[e] += t;
			}
		}
		let c = [];
		for (let t of o) {
			let r = u[rH(Math.round(t.hue))];
			if (i && (t.chroma < e.CUTOFF_CHROMA || r <= e.CUTOFF_EXCITED_PROPORTION)) continue;
			let n = 100 * r * e.WEIGHT_PROPORTION, a = t.chroma < e.TARGET_CHROMA ? e.WEIGHT_CHROMA_BELOW : e.WEIGHT_CHROMA_ABOVE, o = n + (t.chroma - e.TARGET_CHROMA) * a;
			c.push({
				hct: t,
				score: o
			});
		}
		c.sort(nu);
		let f = [];
		for (let e = 90; e >= 15; e--) {
			for (let { hct: t } of (f.length = 0, c)) if (f.find((r) => 180 - Math.abs(Math.abs(t.hue - r.hue) - 180) < e) || f.push(t), f.length >= n) break;
			if (f.length >= n) break;
		}
		let h = [];
		for (let e of (0 === f.length && h.push(a), f)) h.push(e.toInt());
		return h;
	}
};
function nf(e) {
	let t = 3 === (e = e.replace("#", "")).length, r = 6 === e.length, n = 8 === e.length;
	if (!t && !r && !n) throw Error("unexpected hex " + e);
	let a = 0, i = 0, o = 0;
	return t ? (a = nh(e.slice(0, 1).repeat(2)), i = nh(e.slice(1, 2).repeat(2)), o = nh(e.slice(2, 3).repeat(2))) : r ? (a = nh(e.slice(0, 2)), i = nh(e.slice(2, 4)), o = nh(e.slice(4, 6))) : n && (a = nh(e.slice(2, 4)), i = nh(e.slice(4, 6)), o = nh(e.slice(6, 8))), (-16777216 | (255 & a) << 16 | (255 & i) << 8 | 255 & o) >>> 0;
}
function nh(e) {
	return parseInt(e, 16);
}
nc.TARGET_CHROMA = 48, nc.WEIGHT_PROPORTION = .7, nc.WEIGHT_CHROMA_ABOVE = .3, nc.WEIGHT_CHROMA_BELOW = .1, nc.CUTOFF_CHROMA = 5, nc.CUTOFF_EXCITED_PROPORTION = .01;
var nd = {
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
}, nm = (e) => {
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
}, ng = (e) => ({
	primary: !0,
	secondary: !0,
	tertiary: !0,
	error: !0,
	warning: !0,
	success: !0
})[e], np = class e {
	static toHEX = (e) => `#${nm(e).map((e) => f(e.toString(16), 2, "0")).join("")}`;
	static createRoleColorRuleBuilder(e) {
		let t = {}, r = new Proxy({}, { get: (n, a) => "build" == a ? () => t : (n, a) => (t[`${n}${e ? `:${e}` : ""}`] = a, r) });
		return r;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get: (e, t) => (e) => [t, e] });
	}
	static fromColors = (t) => {
		let { primary: r, secondary: n, tertiary: a, neutral: i, neutralVariant: o, error: s,...u } = t, c = ni.contentFromColors({
			primary: nf(r),
			secondary: n ? nf(n) : void 0,
			tertiary: a ? nf(a) : void 0,
			error: s ? nf(s) : void 0
		});
		return i && (c.n1 = r6.fromHueAndChroma(nf(i), 4)), o && (c.n2 = r6.fromHueAndChroma(nf(o), 8)), new e({
			primary: c.a1,
			secondary: c.a2,
			tertiary: c.a3,
			neutral: c.n1,
			neutralVariant: c.n2,
			error: c.error,
			...l(u, (e) => r6.fromInt(nf(e)))
		});
	};
	constructor(e) {
		this.seeds = e;
	}
	normalizeRoleRules(t = {}) {
		let r = e.createRoleColorSourcePicker(), n = e.createRoleColorRuleBuilder().rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(87)).rule("outline-variant", r.neutralVariant(80)).rule("surface", r.neutral(99)).rule("on-surface", r.neutral(10)).rule("surface-variant", r.neutralVariant(90)).rule("on-surface-variant", r.neutralVariant(30)).rule("surface-dim", r.neutral(87)).rule("surface-bright", r.neutral(98)).rule("surface-container-lowest", r.neutral(100)).rule("surface-container-low", r.neutral(96)).rule("surface-container", r.neutral(94)).rule("surface-container-high", r.neutral(92)).rule("surface-container-highest", r.neutral(90)).rule("inverse-surface", r.neutral(20)).rule("inverse-on-surface", r.neutral(95)).rule("inverse-primary", r.primary(80)), a = e.createRoleColorRuleBuilder("dark").rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(60)).rule("outline-variant", r.neutralVariant(30)).rule("surface", r.neutral(10)).rule("on-surface", r.neutral(90)).rule("surface-variant", r.neutralVariant(30)).rule("on-surface-variant", r.neutralVariant(80)).rule("surface-dim", r.neutral(6)).rule("surface-bright", r.neutral(24)).rule("surface-container-lowest", r.neutral(4)).rule("surface-container-low", r.neutral(10)).rule("surface-container", r.neutral(12)).rule("surface-container-high", r.neutral(17)).rule("surface-container-highest", r.neutral(22)).rule("inverse-surface", r.neutral(90)).rule("inverse-on-surface", r.neutral(20)).rule("inverse-primary", r.primary(40));
		for (let e in this.seeds) e.startsWith("neutral") || (n = n.rule(e, r[e](40)).rule(`on-${e}`, r[e](100)).rule(`${e}-container`, r[e](90)).rule(`on-${e}-container`, r[e](10)), a = a.rule(e, r[e](80)).rule(`on-${e}`, r[e](20)).rule(`${e}-container`, r[e](30)).rule(`on-${e}-container`, r[e](90)));
		return {
			...n.build(),
			...a.build(),
			...t
		};
	}
	getThemeRoleColors(e) {
		let t = {}, r = {};
		for (let [n, [a, i]] of Object.entries(e)) if (this.seeds[a]) {
			if (n.endsWith(":dark")) {
				r[n.split(":")[0]] = nd[i] ? `${String(a)}.${i}` : this.seeds[a]?.tone(i);
				continue;
			}
			t[n] = nd[i] ? `${String(a)}.${i}` : this.seeds[a]?.tone(i);
		}
		return [t, r];
	}
	toDesignTokens(e = {}) {
		let t = this.normalizeRoleRules(e), [r, n] = this.getThemeRoleColors(t), a = {}, i = {};
		for (let e in r) if (a[`${e}`] = {
			_default: A(r[e]) ? nm(r[e]) : r[e],
			_dark: A(n[e]) ? nm(n[e]) : n[e]
		}, ng(e) && (i[`${e}`] = rk.mixin({
			bgColor: `sys.${e}`,
			color: `sys.on-${e}`
		}), i[`${e}-container`] = rk.mixin({
			bgColor: `sys.${e}-container`,
			color: `sys.on-${e}-container`
		})), e.startsWith("surface")) {
			if (e.includes("container")) {
				i[`${e}`] = rk.mixin({
					bgColor: `sys.${e}`,
					color: "sys.on-surface"
				});
				continue;
			}
			i[`${e}`] = rk.mixin({
				bgColor: `sys.${e}`,
				color: "sys.on-surface"
			}), i[`on-${e}`] = rk.mixin({
				bgColor: `sys.on-${e}`,
				color: "sys.inverse-on-surface"
			});
		}
		return {
			color: rk.color({
				...l(this.seeds, (e) => Object.keys(nd).reduce((t, r) => Object.assign(t, { [r]: nm(e.tone(parseInt(r))) }), {})),
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
				sys: a
			}),
			containerStyle: rk.customMixin("containerStyle", { sys: i })
		};
	}
};
let ny = rk.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
}), nb = {
	font: rk.font({
		brand: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		plain: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace"
	}),
	fontWeight: rk.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: rk.customMixin("textStyle", { sys: {
		"display-large": rk.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": rk.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": rk.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": rk.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": rk.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": rk.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": rk.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": rk.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": rk.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": rk.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": rk.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": rk.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": rk.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": rk.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": rk.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var nv = np.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
let nx = {
	...nb,
	...rE,
	...rO,
	rounded: ny,
	...nv.toDesignTokens({})
}, nw = r$.create(nx, { varPrefix: "vk" }), nC = et(() => nw, { name: "Theme" });
var nk = function() {
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
			var n = function(e) {
				if (e.sheet) return e.sheet;
				for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
			}(r);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch (e) {}
		} else r.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			var t;
			return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), nP = "-ms-", nM = "-moz-", nS = "-webkit-", n_ = "comm", nA = "rule", nT = "decl", nR = "@keyframes", nD = Math.abs, n$ = String.fromCharCode, nO = Object.assign;
function nL(e, t, r) {
	return e.replace(t, r);
}
function nI(e, t) {
	return e.indexOf(t);
}
function nF(e, t) {
	return 0 | e.charCodeAt(t);
}
function nE(e, t, r) {
	return e.slice(t, r);
}
function nV(e) {
	return e.length;
}
function nB(e, t) {
	return t.push(e), e;
}
var nH = 1, nN = 1, nz = 0, nW = 0, nj = 0, nq = "";
function nG(e, t, r, n, a, i, o) {
	return {
		value: e,
		root: t,
		parent: r,
		type: n,
		props: a,
		children: i,
		line: nH,
		column: nN,
		length: o,
		return: ""
	};
}
function nU(e, t) {
	return nO(nG("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function nY() {
	return nj = nW < nz ? nF(nq, nW++) : 0, nN++, 10 === nj && (nN = 1, nH++), nj;
}
function nK() {
	return nF(nq, nW);
}
function nX(e) {
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
function nJ(e) {
	return nH = nN = 1, nz = nV(nq = e), nW = 0, [];
}
function nZ(e) {
	var t, r;
	return (t = nW - 1, r = function e(t) {
		for (; nY();) switch (nj) {
			case t: return nW;
			case 34:
			case 39:
				34 !== t && 39 !== t && e(nj);
				break;
			case 40:
				41 === t && e(t);
				break;
			case 92: nY();
		}
		return nW;
	}(91 === e ? e + 2 : 40 === e ? e + 1 : e), nE(nq, t, r)).trim();
}
function nQ(e, t, r, n, a, i, o, s, l, u, c) {
	for (var f = a - 1, h = 0 === a ? i : [""], d = h.length, m = 0, g = 0, p = 0; m < n; ++m) for (var y = 0, b = nE(e, f + 1, f = nD(g = o[m])), v = e; y < d; ++y) (v = (g > 0 ? h[y] + " " + b : nL(b, /&\f/g, h[y])).trim()) && (l[p++] = v);
	return nG(e, t, r, 0 === a ? nA : s, l, u, c);
}
function n0(e, t, r, n) {
	return nG(e, t, r, nT, nE(e, 0, n), nE(e, n + 1, -1), n);
}
function n1(e, t) {
	for (var r = "", n = e.length, a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
	return r;
}
function n2(e, t, r, n) {
	switch (e.type) {
		case "@layer": if (e.children.length) break;
		case "@import":
		case nT: return e.return = e.return || e.value;
		case n_: return "";
		case nR: return e.return = e.value + "{" + n1(e.children, n) + "}";
		case nA: e.value = e.props.join(",");
	}
	return nV(r = n1(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
var n4 = function(e, t, r) {
	for (var n = 0, a = 0; n = a, a = nK(), 38 === n && 12 === a && (t[r] = 1), !nX(a);) nY();
	return nE(nq, e, nW);
}, n5 = function(e, t) {
	var r = -1, n = 44;
	do
		switch (nX(n)) {
			case 0:
				38 === n && 12 === nK() && (t[r] = 1), e[r] += n4(nW - 1, t, r);
				break;
			case 2:
				e[r] += nZ(n);
				break;
			case 4: if (44 === n) {
				e[++r] = 58 === nK() ? "&\f" : "", t[r] = e[r].length;
				break;
			}
			default: e[r] += n$(n);
		}
	while (n = nY());
	return e;
}, n3 = function(e, t) {
	var r;
	return r = n5(nJ(e), t), nq = "", r;
}, n8 = /* @__PURE__ */ new WeakMap(), n6 = function(e) {
	if ("rule" === e.type && e.parent && !(e.length < 1)) {
		for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; "rule" !== r.type;) if (!(r = r.parent)) return;
		if ((1 !== e.props.length || 58 === t.charCodeAt(0) || n8.get(r)) && !n) {
			n8.set(e, !0);
			for (var a = [], i = n3(t, a), o = r.props, s = 0, l = 0; s < i.length; s++) for (var u = 0; u < o.length; u++, l++) e.props[l] = a[s] ? i[s].replace(/&\f/g, o[u]) : o[u] + " " + i[s];
		}
	}
}, n9 = function(e) {
	if ("decl" === e.type) {
		var t = e.value;
		108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
	}
}, n7 = [function(e, t, r, n) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case nT:
			e.return = function e(t, r) {
				switch (45 ^ nF(t, 0) ? (((r << 2 ^ nF(t, 0)) << 2 ^ nF(t, 1)) << 2 ^ nF(t, 2)) << 2 ^ nF(t, 3) : 0) {
					case 5103: return nS + "print-" + t + t;
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
					case 3829: return nS + t + t;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756: return nS + t + nM + t + nP + t + t;
					case 6828:
					case 4268: return nS + t + nP + t + t;
					case 6165: return nS + t + nP + "flex-" + t + t;
					case 5187: return nS + t + nL(t, /(\w+).+(:[^]+)/, nS + "box-$1$2" + nP + "flex-$1$2") + t;
					case 5443: return nS + t + nP + "flex-item-" + nL(t, /flex-|-self/, "") + t;
					case 4675: return nS + t + nP + "flex-line-pack" + nL(t, /align-content|flex-|-self/, "") + t;
					case 5548: return nS + t + nP + nL(t, "shrink", "negative") + t;
					case 5292: return nS + t + nP + nL(t, "basis", "preferred-size") + t;
					case 6060: return nS + "box-" + nL(t, "-grow", "") + nS + t + nP + nL(t, "grow", "positive") + t;
					case 4554: return nS + nL(t, /([^-])(transform)/g, "$1" + nS + "$2") + t;
					case 6187: return nL(nL(nL(t, /(zoom-|grab)/, nS + "$1"), /(image-set)/, nS + "$1"), t, "") + t;
					case 5495:
					case 3959: return nL(t, /(image-set\([^]*)/, nS + "$1$`$1");
					case 4968: return nL(nL(t, /(.+:)(flex-)?(.*)/, nS + "box-pack:$3" + nP + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + nS + t + t;
					case 4095:
					case 3583:
					case 4068:
					case 2532: return nL(t, /(.+)-inline(.+)/, nS + "$1$2") + t;
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
						if (nV(t) - 1 - r > 6) switch (nF(t, r + 1)) {
							case 109: if (45 !== nF(t, r + 4)) break;
							case 102: return nL(t, /(.+:)(.+)-([^]+)/, "$1" + nS + "$2-$3$1" + nM + (108 == nF(t, r + 3) ? "$3" : "$2-$3")) + t;
							case 115: return ~nI(t, "stretch") ? e(nL(t, "stretch", "fill-available"), r) + t : t;
						}
						break;
					case 4949: if (115 !== nF(t, r + 1)) break;
					case 6444:
						switch (nF(t, nV(t) - 3 - (~nI(t, "!important") && 10))) {
							case 107: return nL(t, ":", ":" + nS) + t;
							case 101: return nL(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + nS + (45 === nF(t, 14) ? "inline-" : "") + "box$3$1" + nS + "$2$3$1" + nP + "$2box$3") + t;
						}
						break;
					case 5936:
						switch (nF(t, r + 11)) {
							case 114: return nS + t + nP + nL(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
							case 108: return nS + t + nP + nL(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
							case 45: return nS + t + nP + nL(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
						}
						return nS + t + nP + t + t;
				}
				return t;
			}(e.value, e.length);
			break;
		case nR: return n1([nU(e, { value: nL(e.value, "@", "@" + nS) })], n);
		case nA: if (e.length) {
			var a, i;
			return a = e.props, i = function(t) {
				var r;
				switch (r = t, (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r) {
					case ":read-only":
					case ":read-write": return n1([nU(e, { props: [nL(t, /:(read-\w+)/, ":" + nM + "$1")] })], n);
					case "::placeholder": return n1([
						nU(e, { props: [nL(t, /:(plac\w+)/, ":" + nS + "input-$1")] }),
						nU(e, { props: [nL(t, /:(plac\w+)/, ":" + nM + "$1")] }),
						nU(e, { props: [nL(t, /:(plac\w+)/, nP + "input-$1")] })
					], n);
				}
				return "";
			}, a.map(i).join("");
		}
	}
}], ae = function(e) {
	var t, r, n, a, i, o = e.key;
	if ("css" === o) {
		var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(s, function(e) {
			-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var l = e.stylisPlugins || n7, u = {}, c = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + o + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) u[t[r]] = !0;
		c.push(e);
	});
	var f = (r = (t = [n6, n9].concat(l, [n2, (n = function(e) {
		i.insert(e);
	}, function(e) {
		!e.root && (e = e.return) && n(e);
	})])).length, function(e, n, a, i) {
		for (var o = "", s = 0; s < r; s++) o += t[s](e, n, a, i) || "";
		return o;
	}), h = function(e) {
		var t, r;
		return n1((r = function e(t, r, n, a, i, o, s, l, u) {
			for (var c, f = 0, h = 0, d = s, m = 0, g = 0, p = 0, y = 1, b = 1, v = 1, x = 0, w = "", C = i, k = o, P = a, M = w; b;) switch (p = x, x = nY()) {
				case 40: if (108 != p && 58 == nF(M, d - 1)) {
					-1 != nI(M += nL(nZ(x), "&", "&\f"), "&\f") && (v = -1);
					break;
				}
				case 34:
				case 39:
				case 91:
					M += nZ(x);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					M += function(e) {
						for (; nj = nK();) if (nj < 33) nY();
						else break;
						return nX(e) > 2 || nX(nj) > 3 ? "" : " ";
					}(p);
					break;
				case 92:
					M += function(e, t) {
						for (var r; --t && nY() && !(nj < 48) && !(nj > 102) && (!(nj > 57) || !(nj < 65)) && (!(nj > 70) || !(nj < 97)););
						return r = nW + (t < 6 && 32 == nK() && 32 == nY()), nE(nq, e, r);
					}(nW - 1, 7);
					continue;
				case 47:
					switch (nK()) {
						case 42:
						case 47:
							nB((c = function(e, t) {
								for (; nY();) if (e + nj === 57) break;
								else if (e + nj === 84 && 47 === nK()) break;
								return "/*" + nE(nq, t, nW - 1) + "*" + n$(47 === e ? e : nY());
							}(nY(), nW), nG(c, r, n, n_, n$(nj), nE(c, 2, -2), 0)), u);
							break;
						default: M += "/";
					}
					break;
				case 123 * y: l[f++] = nV(M) * v;
				case 125 * y:
				case 59:
				case 0:
					switch (x) {
						case 0:
						case 125: b = 0;
						case 59 + h:
							-1 == v && (M = nL(M, /\f/g, "")), g > 0 && nV(M) - d && nB(g > 32 ? n0(M + ";", a, n, d - 1) : n0(nL(M, " ", "") + ";", a, n, d - 2), u);
							break;
						case 59: M += ";";
						default: if (nB(P = nQ(M, r, n, f, h, i, l, w, C = [], k = [], d), o), 123 === x) if (0 === h) e(M, r, P, P, C, o, d, l, k);
						else switch (99 === m && 110 === nF(M, 3) ? 100 : m) {
							case 100:
							case 108:
							case 109:
							case 115:
								e(t, P, P, a && nB(nQ(t, P, P, 0, 0, i, l, w, i, C = [], d), k), i, k, d, l, a ? C : k);
								break;
							default: e(M, P, P, P, [""], k, 0, l, k);
						}
					}
					f = h = g = 0, y = v = 1, w = M = "", d = s;
					break;
				case 58: d = 1 + nV(M), g = p;
				default:
					if (y < 1) {
						if (123 == x) --y;
						else if (125 == x && 0 == y++ && 125 == (nj = nW > 0 ? nF(nq, --nW) : 0, nN--, 10 === nj && (nN = 1, nH--), nj)) continue;
					}
					switch (M += n$(x), x * y) {
						case 38:
							v = h > 0 ? 1 : (M += "\f", -1);
							break;
						case 44:
							l[f++] = (nV(M) - 1) * v, v = 1;
							break;
						case 64:
							45 === nK() && (M += nZ(nY())), m = nK(), h = d = nV(w = M += function(e) {
								for (; !nX(nK());) nY();
								return nE(nq, e, nW);
							}(nW)), x++;
							break;
						case 45: 45 === p && 2 == nV(M) && (y = 0);
					}
			}
			return o;
		}("", null, null, null, [""], t = nJ(t = e), 0, [0], t), nq = "", r), f);
	}, d = {
		key: o,
		sheet: new nk({
			key: o,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: u,
		registered: {},
		insert: function(e, t, r, n) {
			i = r, h(e ? e + "{" + t.styles + "}" : t.styles), n && (d.inserted[t.name] = !0);
		}
	};
	return d.sheet.hydrate(c), d;
}, at = function(e, t, r) {
	var n = e.key + "-" + t.name;
	!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles);
}, ar = function(e, t, r) {
	at(e, t, r);
	var n = e.key + "-" + t.name;
	if (void 0 === e.inserted[t.name]) {
		var a = t;
		do
			e.insert(t === a ? "." + n : "", a, e.sheet, !0), a = a.next;
		while (void 0 !== a);
	}
};
let an = et(() => ae({ key: "css" }), { name: "Cache" }), aa = (e) => (t) => {
	t.serialized && (t.withoutScoping ? e.insert("", t.serialized, e.sheet, !0) : ar(e, t.serialized, t.isStringTag ?? !0));
};
var ai = u({
	sx: T(),
	component: T().optional().default("div")
}, (e, { slots: t, expose: r }) => {
	let n = nC.use(), a = an.use(), i = n.unstable_css(a, e.sx ?? {}), o = aa(a);
	V(() => {
		o({
			serialized: i,
			isStringTag: !0
		});
	});
	let s = F(null);
	return r({ [O]: s }), () => Y(e.component ?? "div", {
		ref: s,
		class: "0" !== i.name ? `${a.key}-${i.name}` : "",
		children: t
	});
});
function ao(...e) {
	let r, a = "div", i = {}, o = {};
	for (let s of e) {
		if (P(s)) {
			r = s;
			continue;
		}
		if (t(s) || k(s)) {
			a = s;
			continue;
		}
		n(r) && M(s) ? i = s : o = s;
	}
	return r ??= (e, t) => (r) => {
		let n = {};
		for (let t in e) "component" !== t && "sx" !== t && e[t] && (n[`data-${t}`] = e[t]);
		return Y(r, {
			...n,
			children: t.slots
		});
	}, (e) => {
		let t = Object.assign(u({
			...i,
			sx: T().optional(),
			component: T().optional()
		}, (n, i) => {
			let o = nC.use(), s = an.use(), l = aa(s), u = R(""), c = o.unstable_css(s, e), f = () => ("0" !== c.name ? `${s.key}-${c.name}${u.value}` : `${u.value}`) + (t.name ? ` ${t.name}` : "");
			if (a.__styled) {
				let e = o.unstable_css(s, n.sx ?? {});
				"0" !== e.name && (u.value = ` ${s.key}-${e.name}`), V(() => {
					l({
						serialized: c,
						isStringTag: !0
					}), l({
						serialized: e,
						isStringTag: !0
					});
				});
			} else q(() => {
				l({
					serialized: c,
					isStringTag: !0
				});
			});
			let h = r(n, i), d = F(null);
			return i.expose({ [O]: d }), () => {
				if (a.__styled) {
					let e = h(a);
					return e ? L(e, {
						component: n.component,
						ref: d,
						class: f()
					}) : null;
				}
				let e = h(ai);
				return e ? L(e, {
					component: n.component || a,
					sx: n.sx,
					ref: d,
					class: f()
				}) : null;
			};
		}, o), { __styled: !0 });
		return t.toString = () => `.${t.name}`, t;
	};
}
var as = u(({ styles: e }) => {
	let r = nC.use(), n = an.use(), a = aa(n), i = r.unstable_css(n, t(e) ? { "&": e } : e);
	return q(() => {
		a({
			serialized: i,
			withoutScoping: !0
		});
	}), () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
}), al = u(() => {
	let e = nC.use().rootCSSVars;
	return () => Y(as, { styles: {
		":host, :root, [data-theme]": e,
		"*, *::after, *::before": { boxSizing: "border-box" },
		html: { fontSize: "10px" },
		a: { color: "inherit" },
		body: { textStyle: "sys.body-medium" }
	} });
}, { displayName: "CSSReset" });
let au = et(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" });
var ac = et(() => new af(es(null), es(null), () => !1), { name: "Overlay" }), af = class {
	children = [];
	constructor(e, t, r) {
		this.triggerRef = e, this.contentRef = t, this.isOpen = r;
	}
	add = (e) => (this.children = [...this.children, e], () => {
		this.children = this.children.filter((t) => t !== e);
	});
	isClickInside = (e) => {
		for (let t of this.children) if (t.isClickInside(e)) return !0;
		let t = eo(this.triggerRef), r = eo(this.contentRef);
		return t && (t === e.target || e.composedPath().includes(t)) || r && (r === e.target || e.composedPath().includes(r));
	};
	topmost() {
		return 0 === this.children.filter((e) => e.isOpen()).length;
	}
}, ah = u((e, { slots: t, attrs: r, emit: n }) => {
	let a = e.contentRef || es(null), i = new af(e.triggerRef ?? es(null), a, () => !!e.isOpen), o = au.use();
	return B(ac.use().add(i)), window && j(H(a, "value"), G((e) => {
		if (!e) return;
		let t = (e) => {
			i.isClickInside(e) || n("click-outside", e);
		};
		return window.addEventListener("pointerdown", t), () => {
			window.removeEventListener("pointerdown", t);
		};
	}), G((e) => {
		if (!e) return;
		let t = (e) => {
			"Escape" === e.key && i.topmost() && n("esc-keydown", e);
		};
		return window.addEventListener("keydown", t), () => {
			window.removeEventListener("keydown", t);
		};
	}), en()), () => {
		let s = e.isOpen ? L(Y("div", {
			...r,
			ref: a,
			style: e.style,
			children: Y(ac, {
				value: i,
				children: t.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			n("content-before-mount");
		} }) : null;
		return Y(W, {
			to: o.mountPoint(),
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
}), ad = Math.min, am = Math.max, ag = Math.round, ap = Math.floor, ay = (e) => ({
	x: e,
	y: e
}), ab = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, av = {
	start: "end",
	end: "start"
};
function ax(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function aw(e) {
	return e.split("-")[0];
}
function aC(e) {
	return e.split("-")[1];
}
function ak(e) {
	return "x" === e ? "y" : "x";
}
function aP(e) {
	return "y" === e ? "height" : "width";
}
var aM = new Set(["top", "bottom"]);
function aS(e) {
	return aM.has(aw(e)) ? "y" : "x";
}
function a_(e) {
	return e.replace(/start|end/g, (e) => av[e]);
}
var aA = ["left", "right"], aT = ["right", "left"], aR = ["top", "bottom"], aD = ["bottom", "top"];
function a$(e) {
	return e.replace(/left|right|bottom|top/g, (e) => ab[e]);
}
function aO(e) {
	let { x: t, y: r, width: n, height: a } = e;
	return {
		width: n,
		height: a,
		top: r,
		left: t,
		right: t + n,
		bottom: r + a,
		x: t,
		y: r
	};
}
function aL(e, t, r) {
	let n, { reference: a, floating: i } = e, o = aS(t), s = ak(aS(t)), l = aP(s), u = aw(t), c = "y" === o, f = a.x + a.width / 2 - i.width / 2, h = a.y + a.height / 2 - i.height / 2, d = a[l] / 2 - i[l] / 2;
	switch (u) {
		case "top":
			n = {
				x: f,
				y: a.y - i.height
			};
			break;
		case "bottom":
			n = {
				x: f,
				y: a.y + a.height
			};
			break;
		case "right":
			n = {
				x: a.x + a.width,
				y: h
			};
			break;
		case "left":
			n = {
				x: a.x - i.width,
				y: h
			};
			break;
		default: n = {
			x: a.x,
			y: a.y
		};
	}
	switch (aC(t)) {
		case "start":
			n[s] -= d * (r && c ? -1 : 1);
			break;
		case "end": n[s] += d * (r && c ? -1 : 1);
	}
	return n;
}
var aI = async (e, t, r) => {
	let { placement: n = "bottom", strategy: a = "absolute", middleware: i = [], platform: o } = r, s = i.filter(Boolean), l = await (null == o.isRTL ? void 0 : o.isRTL(t)), u = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: a
	}), { x: c, y: f } = aL(u, n, l), h = n, d = {}, m = 0;
	for (let r = 0; r < s.length; r++) {
		let { name: i, fn: g } = s[r], { x: p, y, data: b, reset: v } = await g({
			x: c,
			y: f,
			initialPlacement: n,
			placement: h,
			strategy: a,
			middlewareData: d,
			rects: u,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		c = null != p ? p : c, f = null != y ? y : f, d = {
			...d,
			[i]: {
				...d[i],
				...b
			}
		}, v && m <= 50 && (m++, "object" == typeof v && (v.placement && (h = v.placement), v.rects && (u = !0 === v.rects ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: a
		}) : v.rects), {x: c, y: f} = aL(u, h, l)), r = -1);
	}
	return {
		x: c,
		y: f,
		placement: h,
		strategy: a,
		middlewareData: d
	};
};
async function aF(e, t) {
	var r, n;
	void 0 === t && (t = {});
	let { x: a, y: i, platform: o, rects: s, elements: l, strategy: u } = e, { boundary: c = "clippingAncestors", rootBoundary: f = "viewport", elementContext: h = "floating", altBoundary: d = !1, padding: m = 0 } = ax(t, e), g = "number" != typeof (n = m) ? {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...n
	} : {
		top: n,
		right: n,
		bottom: n,
		left: n
	}, p = l[d ? "floating" === h ? "reference" : "floating" : h], y = aO(await o.getClippingRect({
		element: null == (r = await (null == o.isElement ? void 0 : o.isElement(p))) || r ? p : p.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(l.floating)),
		boundary: c,
		rootBoundary: f,
		strategy: u
	})), b = "floating" === h ? {
		x: a,
		y: i,
		width: s.floating.width,
		height: s.floating.height
	} : s.reference, v = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(l.floating)), x = await (null == o.isElement ? void 0 : o.isElement(v)) && await (null == o.getScale ? void 0 : o.getScale(v)) || {
		x: 1,
		y: 1
	}, w = aO(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: l,
		rect: b,
		offsetParent: v,
		strategy: u
	}) : b);
	return {
		top: (y.top - w.top + g.top) / x.y,
		bottom: (w.bottom - y.bottom + g.bottom) / x.y,
		left: (y.left - w.left + g.left) / x.x,
		right: (w.right - y.right + g.right) / x.x
	};
}
function aE() {
	return "undefined" != typeof window;
}
function aV(e) {
	return aN(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function aB(e) {
	var t;
	return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function aH(e) {
	var t;
	return null == (t = (aN(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function aN(e) {
	return !!aE() && (e instanceof Node || e instanceof aB(e).Node);
}
function az(e) {
	return !!aE() && (e instanceof Element || e instanceof aB(e).Element);
}
function aW(e) {
	return !!aE() && (e instanceof HTMLElement || e instanceof aB(e).HTMLElement);
}
function aj(e) {
	return !!aE() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof aB(e).ShadowRoot);
}
var aq = new Set(["inline", "contents"]);
function aG(e) {
	let { overflow: t, overflowX: r, overflowY: n, display: a } = a4(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !aq.has(a);
}
var aU = new Set([
	"table",
	"td",
	"th"
]), aY = [":popover-open", ":modal"];
function aK(e) {
	return aY.some((t) => {
		try {
			return e.matches(t);
		} catch (e) {
			return !1;
		}
	});
}
var aX = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], aJ = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], aZ = [
	"paint",
	"layout",
	"strict",
	"content"
];
function aQ(e) {
	let t = a0(), r = az(e) ? a4(e) : e;
	return aX.some((e) => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || aJ.some((e) => (r.willChange || "").includes(e)) || aZ.some((e) => (r.contain || "").includes(e));
}
function a0() {
	return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
var a1 = new Set([
	"html",
	"body",
	"#document"
]);
function a2(e) {
	return a1.has(aV(e));
}
function a4(e) {
	return aB(e).getComputedStyle(e);
}
function a5(e) {
	return az(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function a3(e) {
	if ("html" === aV(e)) return e;
	let t = e.assignedSlot || e.parentNode || aj(e) && e.host || aH(e);
	return aj(t) ? t.host : t;
}
function a8(e, t, r) {
	var n;
	void 0 === t && (t = []), void 0 === r && (r = !0);
	let a = function e(t) {
		let r = a3(t);
		return a2(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : aW(r) && aG(r) ? r : e(r);
	}(e), i = a === (null == (n = e.ownerDocument) ? void 0 : n.body), o = aB(a);
	if (i) {
		let e = a6(o);
		return t.concat(o, o.visualViewport || [], aG(a) ? a : [], e && r ? a8(e) : []);
	}
	return t.concat(a, a8(a, [], r));
}
function a6(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function a9(e) {
	let t = a4(e), r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0, a = aW(e), i = a ? e.offsetWidth : r, o = a ? e.offsetHeight : n, s = ag(r) !== i || ag(n) !== o;
	return s && (r = i, n = o), {
		width: r,
		height: n,
		$: s
	};
}
function a7(e) {
	return az(e) ? e : e.contextElement;
}
function ie(e) {
	let t = a7(e);
	if (!aW(t)) return ay(1);
	let r = t.getBoundingClientRect(), { width: n, height: a, $: i } = a9(t), o = (i ? ag(r.width) : r.width) / n, s = (i ? ag(r.height) : r.height) / a;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var it = ay(0);
function ir(e) {
	let t = aB(e);
	return a0() && t.visualViewport ? {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	} : it;
}
function ia(e, t, r, n) {
	var a;
	void 0 === t && (t = !1), void 0 === r && (r = !1);
	let i = e.getBoundingClientRect(), o = a7(e), s = ay(1);
	t && (n ? az(n) && (s = ie(n)) : s = ie(e));
	let l = (void 0 === (a = r) && (a = !1), n && (!a || n === aB(o)) && a) ? ir(o) : ay(0), u = (i.left + l.x) / s.x, c = (i.top + l.y) / s.y, f = i.width / s.x, h = i.height / s.y;
	if (o) {
		let e = aB(o), t = n && az(n) ? aB(n) : n, r = e, a = a6(r);
		for (; a && n && t !== r;) {
			let e = ie(a), t = a.getBoundingClientRect(), n = a4(a), i = t.left + (a.clientLeft + parseFloat(n.paddingLeft)) * e.x, o = t.top + (a.clientTop + parseFloat(n.paddingTop)) * e.y;
			u *= e.x, c *= e.y, f *= e.x, h *= e.y, u += i, c += o, a = a6(r = aB(a));
		}
	}
	return aO({
		width: f,
		height: h,
		x: u,
		y: c
	});
}
function ii(e, t) {
	let r = a5(e).scrollLeft;
	return t ? t.left + r : ia(aH(e)).left + r;
}
function io(e, t) {
	let r = e.getBoundingClientRect();
	return {
		x: r.left + t.scrollLeft - ii(e, r),
		y: r.top + t.scrollTop
	};
}
var is = new Set(["absolute", "fixed"]);
function il(e, t, r) {
	let n;
	if ("viewport" === t) n = function(e, t) {
		let r = aB(e), n = aH(e), a = r.visualViewport, i = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
		if (a) {
			i = a.width, o = a.height;
			let e = a0();
			(!e || e && "fixed" === t) && (s = a.offsetLeft, l = a.offsetTop);
		}
		let u = ii(n);
		if (u <= 0) {
			let e = n.ownerDocument, t = e.body, r = getComputedStyle(t), a = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0, o = Math.abs(n.clientWidth - t.clientWidth - a);
			o <= 25 && (i -= o);
		} else u <= 25 && (i += u);
		return {
			width: i,
			height: o,
			x: s,
			y: l
		};
	}(e, r);
	else if ("document" === t) n = function(e) {
		let t = aH(e), r = a5(e), n = e.ownerDocument.body, a = am(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = am(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight), o = -r.scrollLeft + ii(e), s = -r.scrollTop;
		return "rtl" === a4(n).direction && (o += am(t.clientWidth, n.clientWidth) - a), {
			width: a,
			height: i,
			x: o,
			y: s
		};
	}(aH(e));
	else if (az(t)) n = function(e, t) {
		let r = ia(e, !0, "fixed" === t), n = r.top + e.clientTop, a = r.left + e.clientLeft, i = aW(e) ? ie(e) : ay(1);
		return {
			width: e.clientWidth * i.x,
			height: e.clientHeight * i.y,
			x: a * i.x,
			y: n * i.y
		};
	}(t, r);
	else {
		let r = ir(e);
		n = {
			x: t.x - r.x,
			y: t.y - r.y,
			width: t.width,
			height: t.height
		};
	}
	return aO(n);
}
function iu(e) {
	return "static" === a4(e).position;
}
function ic(e, t) {
	if (!aW(e) || "fixed" === a4(e).position) return null;
	if (t) return t(e);
	let r = e.offsetParent;
	return aH(e) === r && (r = r.ownerDocument.body), r;
}
function ih(e, t) {
	var r;
	let n = aB(e);
	if (aK(e)) return n;
	if (!aW(e)) {
		let t = a3(e);
		for (; t && !a2(t);) {
			if (az(t) && !iu(t)) return t;
			t = a3(t);
		}
		return n;
	}
	let a = ic(e, t);
	for (; a && (r = a, aU.has(aV(r))) && iu(a);) a = ic(a, t);
	return a && a2(a) && iu(a) && !aQ(a) ? n : a || function(e) {
		let t = a3(e);
		for (; aW(t) && !a2(t);) {
			if (aQ(t)) return t;
			if (aK(t)) break;
			t = a3(t);
		}
		return null;
	}(e) || n;
}
var id = async function(e) {
	let t = this.getOffsetParent || ih, r = this.getDimensions, n = await r(e.floating);
	return {
		reference: function(e, t, r) {
			let n = aW(t), a = aH(t), i = "fixed" === r, o = ia(e, !0, i, t), s = {
				scrollLeft: 0,
				scrollTop: 0
			}, l = ay(0);
			if (n || !n && !i) if (("body" !== aV(t) || aG(a)) && (s = a5(t)), n) {
				let e = ia(t, !0, i, t);
				l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop;
			} else a && (l.x = ii(a));
			i && !n && a && (l.x = ii(a));
			let u = !a || n || i ? ay(0) : io(a, s);
			return {
				x: o.left + s.scrollLeft - l.x - u.x,
				y: o.top + s.scrollTop - l.y - u.y,
				width: o.width,
				height: o.height
			};
		}(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: n.width,
			height: n.height
		}
	};
}, im = {
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { elements: t, rect: r, offsetParent: n, strategy: a } = e, i = "fixed" === a, o = aH(n), s = !!t && aK(t.floating);
		if (n === o || s && i) return r;
		let l = {
			scrollLeft: 0,
			scrollTop: 0
		}, u = ay(1), c = ay(0), f = aW(n);
		if ((f || !f && !i) && (("body" !== aV(n) || aG(o)) && (l = a5(n)), aW(n))) {
			let e = ia(n);
			u = ie(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
		}
		let h = !o || f || i ? ay(0) : io(o, l);
		return {
			width: r.width * u.x,
			height: r.height * u.y,
			x: r.x * u.x - l.scrollLeft * u.x + c.x + h.x,
			y: r.y * u.y - l.scrollTop * u.y + c.y + h.y
		};
	},
	getDocumentElement: aH,
	getClippingRect: function(e) {
		let { element: t, boundary: r, rootBoundary: n, strategy: a } = e, i = [..."clippingAncestors" === r ? aK(t) ? [] : function(e, t) {
			let r = t.get(e);
			if (r) return r;
			let n = a8(e, [], !1).filter((e) => az(e) && "body" !== aV(e)), a = null, i = "fixed" === a4(e).position, o = i ? a3(e) : e;
			for (; az(o) && !a2(o);) {
				let t = a4(o), r = aQ(o);
				r || "fixed" !== t.position || (a = null), (i ? !r && !a : !r && "static" === t.position && !!a && is.has(a.position) || aG(o) && !r && function e(t, r) {
					let n = a3(t);
					return !(n === r || !az(n) || a2(n)) && ("fixed" === a4(n).position || e(n, r));
				}(e, o)) ? n = n.filter((e) => e !== o) : a = t, o = a3(o);
			}
			return t.set(e, n), n;
		}(t, this._c) : [].concat(r), n], o = i[0], s = i.reduce((e, r) => {
			let n = il(t, r, a);
			return e.top = am(n.top, e.top), e.right = ad(n.right, e.right), e.bottom = ad(n.bottom, e.bottom), e.left = am(n.left, e.left), e;
		}, il(t, o, a));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	getOffsetParent: ih,
	getElementRects: id,
	getClientRects: function(e) {
		return Array.from(e.getClientRects());
	},
	getDimensions: function(e) {
		let { width: t, height: r } = a9(e);
		return {
			width: t,
			height: r
		};
	},
	getScale: ie,
	isElement: az,
	isRTL: function(e) {
		return "rtl" === a4(e).direction;
	}
};
function ig(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
var ip = function(e) {
	return void 0 === e && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var r, n;
			let a, i, { placement: o, rects: s, platform: l, elements: u } = t, { apply: c = () => {},...f } = ax(e, t), h = await aF(t, f), d = aw(o), m = aC(o), g = "y" === aS(o), { width: p, height: y } = s.floating;
			"top" === d || "bottom" === d ? (a = d, i = m === (await (null == l.isRTL ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (i = d, a = "end" === m ? "top" : "bottom");
			let b = y - h.top - h.bottom, v = p - h.left - h.right, x = ad(y - h[a], b), w = ad(p - h[i], v), C = !t.middlewareData.shift, k = x, P = w;
			if (null != (r = t.middlewareData.shift) && r.enabled.x && (P = v), null != (n = t.middlewareData.shift) && n.enabled.y && (k = b), C && !m) {
				let e = am(h.left, 0), t = am(h.right, 0), r = am(h.top, 0), n = am(h.bottom, 0);
				g ? P = p - 2 * (0 !== e || 0 !== t ? e + t : am(h.left, h.right)) : k = y - 2 * (0 !== r || 0 !== n ? r + n : am(h.top, h.bottom));
			}
			await c({
				...t,
				availableWidth: P,
				availableHeight: k
			});
			let M = await l.getDimensions(u.floating);
			return p !== M.width || y !== M.height ? { reset: { rects: !0 } } : {};
		}
	};
}, iy = u((e, { slots: t, emit: r, attrs: n }) => {
	let a = D(null), i = D(null);
	return j(y([a, i]), G(([t, r]) => {
		if (r && t) {
			let n = async () => {
				var n, a;
				r.style.position = "absolute";
				let i = await ((e, t, r) => {
					let n = /* @__PURE__ */ new Map(), a = {
						platform: im,
						...r
					}, i = {
						...a.platform,
						_c: n
					};
					return aI(e, t, {
						...a,
						platform: i
					});
				})(t, r, {
					placement: e.placement ?? "bottom",
					middleware: [
						...e.modifiers ?? [],
						...e.middleware ?? [],
						(void 0 === n && (n = {}), {
							name: "flip",
							options: n,
							async fn(e) {
								var t, r, a, i, o;
								let { placement: s, middlewareData: l, rects: u, initialPlacement: c, platform: f, elements: h } = e, { mainAxis: d = !0, crossAxis: m = !0, fallbackPlacements: g, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: b = !0,...v } = ax(n, e);
								if (null != (t = l.arrow) && t.alignmentOffset) return {};
								let x = aw(s), w = aS(c), C = aw(c) === c, k = await (null == f.isRTL ? void 0 : f.isRTL(h.floating)), P = g || (C || !b ? [a$(c)] : function(e) {
									let t = a$(e);
									return [
										a_(e),
										t,
										a_(t)
									];
								}(c)), M = "none" !== y;
								!g && M && P.push(...function(e, t, r, n) {
									let a = aC(e), i = function(e, t, r) {
										switch (e) {
											case "top":
											case "bottom":
												if (r) return t ? aT : aA;
												return t ? aA : aT;
											case "left":
											case "right": return t ? aR : aD;
											default: return [];
										}
									}(aw(e), "start" === r, n);
									return a && (i = i.map((e) => e + "-" + a), t && (i = i.concat(i.map(a_)))), i;
								}(c, b, y, k));
								let S = [c, ...P], _ = await aF(e, v), A = [], T = (null == (r = l.flip) ? void 0 : r.overflows) || [];
								if (d && A.push(_[x]), m) {
									let e = function(e, t, r) {
										void 0 === r && (r = !1);
										let n = aC(e), a = ak(aS(e)), i = aP(a), o = "x" === a ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
										return t.reference[i] > t.floating[i] && (o = a$(o)), [o, a$(o)];
									}(s, u, k);
									A.push(_[e[0]], _[e[1]]);
								}
								if (T = [...T, {
									placement: s,
									overflows: A
								}], !A.every((e) => e <= 0)) {
									let e = ((null == (a = l.flip) ? void 0 : a.index) || 0) + 1, t = S[e];
									if (t && ("alignment" !== m || w === aS(t) || T.every((e) => aS(e.placement) !== w || e.overflows[0] > 0))) return {
										data: {
											index: e,
											overflows: T
										},
										reset: { placement: t }
									};
									let r = null == (i = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
									if (!r) switch (p) {
										case "bestFit": {
											let e = null == (o = T.filter((e) => {
												if (M) {
													let t = aS(e.placement);
													return t === w || "y" === t;
												}
												return !0;
											}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0];
											e && (r = e);
											break;
										}
										case "initialPlacement": r = c;
									}
									if (s !== r) return { reset: { placement: r } };
								}
								return {};
							}
						}),
						(void 0 === a && (a = {}), {
							name: "shift",
							options: a,
							async fn(e) {
								let { x: t, y: r, placement: n } = e, { mainAxis: i = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
									let { x: t, y: r } = e;
									return {
										x: t,
										y: r
									};
								} },...l } = ax(a, e), u = {
									x: t,
									y: r
								}, c = await aF(e, l), f = aS(aw(n)), h = ak(f), d = u[h], m = u[f];
								if (i) {
									let e = "y" === h ? "top" : "left", t = "y" === h ? "bottom" : "right", r = d + c[e], n = d - c[t];
									d = am(r, ad(d, n));
								}
								if (o) {
									let e = "y" === f ? "top" : "left", t = "y" === f ? "bottom" : "right", r = m + c[e], n = m - c[t];
									m = am(r, ad(m, n));
								}
								let g = s.fn({
									...e,
									[h]: d,
									[f]: m
								});
								return {
									...g,
									data: {
										x: g.x - t,
										y: g.y - r,
										enabled: {
											[h]: i,
											[f]: o
										}
									}
								};
							}
						})
					]
				});
				Object.assign(r.style, {
					left: `${i.x}px`,
					top: `${i.y}px`
				}), r.setAttribute("data-placement", i.placement);
			}, a = function(e, t, r, n) {
				let a;
				void 0 === n && (n = {});
				let { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: s = "function" == typeof ResizeObserver, layoutShift: l = "function" == typeof IntersectionObserver, animationFrame: u = !1 } = n, c = a7(e), f = i || o ? [...c ? a8(c) : [], ...a8(t)] : [];
				f.forEach((e) => {
					i && e.addEventListener("scroll", r, { passive: !0 }), o && e.addEventListener("resize", r);
				});
				let h = c && l ? function(e, t) {
					let r, n = null, a = aH(e);
					function i() {
						var e;
						clearTimeout(r), null == (e = n) || e.disconnect(), n = null;
					}
					return function o(s, l) {
						void 0 === s && (s = !1), void 0 === l && (l = 1), i();
						let u = e.getBoundingClientRect(), { left: c, top: f, width: h, height: d } = u;
						if (s || t(), !h || !d) return;
						let m = ap(f), g = ap(a.clientWidth - (c + h)), p = {
							rootMargin: -m + "px " + -g + "px " + -ap(a.clientHeight - (f + d)) + "px " + -ap(c) + "px",
							threshold: am(0, ad(1, l)) || 1
						}, y = !0;
						function b(t) {
							let n = t[0].intersectionRatio;
							if (n !== l) {
								if (!y) return o();
								n ? o(!1, n) : r = setTimeout(() => {
									o(!1, 1e-7);
								}, 1e3);
							}
							1 !== n || ig(u, e.getBoundingClientRect()) || o(), y = !1;
						}
						try {
							n = new IntersectionObserver(b, {
								...p,
								root: a.ownerDocument
							});
						} catch (e) {
							n = new IntersectionObserver(b, p);
						}
						n.observe(e);
					}(!0), i;
				}(c, r) : null, d = -1, m = null;
				s && (m = new ResizeObserver((e) => {
					let [n] = e;
					n && n.target === c && m && (m.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
						var e;
						null == (e = m) || e.observe(t);
					})), r();
				}), c && !u && m.observe(c), m.observe(t));
				let g = u ? ia(e) : null;
				return u && function t() {
					let n = ia(e);
					g && !ig(g, n) && r(), g = n, a = requestAnimationFrame(t);
				}(), r(), () => {
					var e;
					f.forEach((e) => {
						i && e.removeEventListener("scroll", r), o && e.removeEventListener("resize", r);
					}), h?.(), null == (e = m) || e.disconnect(), m = null, u && cancelAnimationFrame(a);
				};
			}(t, r, n);
			return () => {
				a();
			};
		}
		return () => {};
	}), en()), () => {
		let o = t.default?.()[0];
		return o ? Q($, { children: [L(o, {
			...n,
			onVnodeMounted: (e) => {
				a.value = function e(t) {
					if (t) {
						if (t instanceof HTMLElement) return t;
						if (t instanceof Text) return e(t.nextElementSibling);
					}
					return null;
				}(e.el);
			}
		}), Y(ah, {
			style: { zIndex: 100 },
			triggerRef: a,
			contentRef: i,
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
});
export { as as a, nC as c, rT as d, rR as f, al as i, rF as l, e2 as m, ip as n, ao as o, t7 as p, ah as r, ai as s, iy as t, rI as u };
