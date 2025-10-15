let e;
import { $ as t, B as r, E as a, G as n, H as i, J as o, K as s, Q as l, V as u, W as c, X as h, at as d, c as f, dt as g, f as m, ht as p, i as y, it as b, l as x, mt as v, n as w, nt as k, o as C, ot as P, pt as M, rt as _, st as A, t as S, tt as R, u as T, ut as D } from "./vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js";
import { s as $ } from "./lib-nodepkg-typedef.C31p5CR7.chunk.js";
import { t as O } from "./vendor-rxjs.Bnzpw5oq.chunk.js";
import { C as I, D as F, E as L, O as B, S as V, T as H, _ as E, a as z, b as W, c as j, d as N, f as q, g as U, h as G, i as Y, l as K, m as X, n as J, o as Z, p as Q, r as ee, s as et, t as er, u as ea, v as en, w as ei, x as eo, y as es } from "./vendor-mermaid.BLxVj147.chunk.js";
import { $ as el, A as eu, B as ec, C as eh, D as ed, E as ef, F as eg, G as em, H as ep, I as ey, J as eb, K as ex, L as ev, M as ew, N as ek, O as eC, P as eP, R as eM, S as e_, T as eA, U as eS, V as eR, W as eT, X as eD, Y as e$, Z as eO, _ as eI, b as eF, ct as eL, d as eB, et as eV, f as eH, g as eE, gt as ez, h as eW, j as ej, k as eN, lt as eq, m as eU, nt as eG, p as eY, q as eK, tt as eX, u as eJ, ut as eZ, v as eQ, vt as e0, w as e1, x as e2, y as e4, yt as e5, z as e3 } from "./index.DdIYnUiz.entry.js";
var e8, e6, e9, e7, te = (e, t, r) => Math.min(Math.max(r, e), t);
function tt(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var tr = ["duration", "bounce"], ta = [
	"stiffness",
	"damping",
	"mass"
];
function tn(e, t) {
	return t.some((t) => void 0 !== e[t]);
}
function ti(e) {
	var { from: t = 0, to: r = 1, restSpeed: a = 2, restDelta: n } = e, i = O(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let o = {
		done: !1,
		value: t
	}, { stiffness: s, damping: l, mass: u, velocity: c, duration: h, isResolvedFromDuration: d } = function(e) {
		let t = Object.assign({
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1
		}, e);
		if (!tn(e, ta) && tn(e, tr)) {
			let r = function({ duration: e = 800, bounce: t = .25, velocity: r = 0, mass: a = 1 }) {
				let n, i;
				e$(e <= 1e4, "Spring duration must be 10 seconds or less");
				let o = 1 - t;
				o = te(.05, 1, o), e = te(.01, 10, e / 1e3), o < 1 ? (n = (t) => {
					let a = t * o, n = a * e;
					return .001 - (a - r) / tt(t, o) * Math.exp(-n);
				}, i = (t) => {
					let a = t * o * e, i = Math.pow(o, 2) * Math.pow(t, 2) * e, s = Math.exp(-a), l = tt(Math.pow(t, 2), o);
					return (-n(t) + .001 > 0 ? -1 : 1) * ((a * r + r - i) * s) / l;
				}) : (n = (t) => -.001 + Math.exp(-t * e) * ((t - r) * e + 1), i = (t) => e * e * (r - t) * Math.exp(-t * e));
				let s = function(e, t, r) {
					let a = r;
					for (let r = 1; r < 12; r++) a -= e(a) / t(a);
					return a;
				}(n, i, 5 / e);
				if (e *= 1e3, isNaN(s)) return {
					stiffness: 100,
					damping: 10,
					duration: e
				};
				{
					let t = Math.pow(s, 2) * a;
					return {
						stiffness: t,
						damping: 2 * o * Math.sqrt(a * t),
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
	}(i), f = to, g = to;
	function m() {
		let e = c ? -(c / 1e3) : 0, a = r - t, i = l / (2 * Math.sqrt(s * u)), o = Math.sqrt(s / u) / 1e3;
		if (void 0 === n && (n = Math.min(Math.abs(r - t) / 100, .4)), i < 1) {
			let t = tt(o, i);
			f = (n) => r - Math.exp(-i * o * n) * ((e + i * o * a) / t * Math.sin(t * n) + a * Math.cos(t * n)), g = (r) => {
				let n = Math.exp(-i * o * r);
				return i * o * n * (Math.sin(t * r) * (e + i * o * a) / t + a * Math.cos(t * r)) - n * (Math.cos(t * r) * (e + i * o * a) - t * a * Math.sin(t * r));
			};
		} else if (1 === i) f = (t) => r - Math.exp(-o * t) * (a + (e + o * a) * t);
		else {
			let t = o * Math.sqrt(i * i - 1);
			f = (n) => {
				let s = Math.exp(-i * o * n), l = Math.min(t * n, 300);
				return r - s * ((e + i * o * a) * Math.sinh(l) + t * a * Math.cosh(l)) / t;
			};
		}
	}
	return m(), {
		next: (e) => {
			let t = f(e);
			if (d) o.done = e >= h;
			else {
				let i = Math.abs(1e3 * g(e)) <= a, s = Math.abs(r - t) <= n;
				o.done = i && s;
			}
			return o.value = o.done ? r : t, o;
		},
		flipTarget: () => {
			c = -c, [t, r] = [r, t], m();
		}
	};
}
ti.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
var to = (e) => 0, ts = (e, t, r) => {
	let a = t - e;
	return 0 === a ? 1 : (r - e) / a;
}, tl = (e, t, r) => -r * e + r * t + e;
function tu(e, t, r) {
	return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function tc({ hue: e, saturation: t, lightness: r, alpha: a }) {
	e /= 360, r /= 100;
	let n = 0, i = 0, o = 0;
	if (t /= 100) {
		let a = r < .5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
		n = tu(s, a, e + 1 / 3), i = tu(s, a, e), o = tu(s, a, e - 1 / 3);
	} else n = i = o = r;
	return {
		red: Math.round(255 * n),
		green: Math.round(255 * i),
		blue: Math.round(255 * o),
		alpha: a
	};
}
var th = (e, t, r) => {
	let a = e * e;
	return Math.sqrt(Math.max(0, r * (t * t - a) + a));
}, td = [
	em,
	ex,
	eK
], tf = (e) => td.find((t) => t.test(e)), tg = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, tm = (e, t) => {
	let r = tf(e), a = tf(t);
	eb(!!r, tg(e)), eb(!!a, tg(t));
	let n = r.parse(e), i = a.parse(t);
	r === eK && (n = tc(n), r = ex), a === eK && (i = tc(i), a = ex);
	let o = Object.assign({}, n);
	return (e) => {
		for (let t in o) "alpha" !== t && (o[t] = th(n[t], i[t], e));
		return o.alpha = tl(n.alpha, i.alpha, e), r.transform(o);
	};
}, tp = (e, t) => (r) => t(e(r)), ty = (...e) => e.reduce(tp);
function tb(e, t) {
	return "number" == typeof e ? (r) => tl(e, t, r) : eT.test(e) ? tm(e, t) : tk(e, t);
}
var tx = (e, t) => {
	let r = [...e], a = r.length, n = e.map((e, r) => tb(e, t[r]));
	return (e) => {
		for (let t = 0; t < a; t++) r[t] = n[t](e);
		return r;
	};
}, tv = (e, t) => {
	let r = Object.assign(Object.assign({}, e), t), a = {};
	for (let n in r) void 0 !== e[n] && void 0 !== t[n] && (a[n] = tb(e[n], t[n]));
	return (e) => {
		for (let t in a) r[t] = a[t](e);
		return r;
	};
};
function tw(e) {
	let t = eS.parse(e), r = t.length, a = 0, n = 0, i = 0;
	for (let e = 0; e < r; e++) a || "number" == typeof t[e] ? a++ : void 0 !== t[e].hue ? i++ : n++;
	return {
		parsed: t,
		numNumbers: a,
		numRGB: n,
		numHSL: i
	};
}
var tk = (e, t) => {
	let r = eS.createTransformer(t), a = tw(e), n = tw(t);
	return a.numHSL === n.numHSL && a.numRGB === n.numRGB && a.numNumbers >= n.numNumbers ? ty(tx(a.parsed, n.parsed), r) : (e$(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (r) => `${r > 0 ? t : e}`);
}, tC = (e, t) => (r) => tl(e, t, r);
function tP(e, t, { clamp: r = !0, ease: a, mixer: n } = {}) {
	let i = e.length;
	eb(i === t.length, "Both input and output ranges must be the same length"), eb(!a || !Array.isArray(a) || a.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[i - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
	let o = function(e, t, r) {
		let a = [], n = r || function(e) {
			if ("number" == typeof e) return tC;
			if ("string" == typeof e) if (eT.test(e)) return tm;
			else return tk;
			return Array.isArray(e) ? tx : "object" == typeof e ? tv : void 0;
		}(e[0]), i = e.length - 1;
		for (let r = 0; r < i; r++) {
			let i = n(e[r], e[r + 1]);
			t && (i = ty(Array.isArray(t) ? t[r] : t, i)), a.push(i);
		}
		return a;
	}(t, a, n), s = 2 === i ? function([e, t], [r]) {
		return (a) => r(ts(e, t, a));
	}(e, o) : function(e, t) {
		let r = e.length, a = r - 1;
		return (n) => {
			let i = 0, o = !1;
			if (n <= e[0] ? o = !0 : n >= e[a] && (i = a - 1, o = !0), !o) {
				let t = 1;
				for (; t < r && !(e[t] > n) && t !== a; t++);
				i = t - 1;
			}
			let s = ts(e[i], e[i + 1], n);
			return t[i](s);
		};
	}(e, o);
	return r ? (t) => s(te(e[0], e[i - 1], t)) : s;
}
var tM = (e) => e, t_ = (e = (e) => Math.pow(e, 2), (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2);
function tA({ from: e = 0, to: t = 1, ease: r, offset: a, duration: n = 300 }) {
	var i;
	let o = {
		done: !1,
		value: e
	}, s = Array.isArray(t) ? t : [e, t], l = (i = a && a.length === s.length ? a : function(e) {
		let t = e.length;
		return e.map((e, r) => 0 !== r ? r / (t - 1) : 0);
	}(s), i.map((e) => e * n));
	function u() {
		return tP(l, s, { ease: Array.isArray(r) ? r : s.map(() => r || t_).splice(0, s.length - 1) });
	}
	let c = u();
	return {
		next: (e) => (o.value = c(e), o.done = e >= n, o),
		flipTarget: () => {
			s.reverse(), c = u();
		}
	};
}
var tS = {
	keyframes: tA,
	spring: ti,
	decay: function({ velocity: e = 0, from: t = 0, power: r = .8, timeConstant: a = 350, restDelta: n = .5, modifyTarget: i }) {
		let o = {
			done: !1,
			value: t
		}, s = r * e, l = t + s, u = void 0 === i ? l : i(l);
		return u !== l && (s = u - t), {
			next: (e) => {
				let t = -s * Math.exp(-e / a);
				return o.done = !(t > n || t < -n), o.value = o.done ? u : u + t, o;
			},
			flipTarget: () => {}
		};
	}
};
function tR(e, t, r = 0) {
	return e - t - r;
}
var tT = (e) => {
	let t = ({ delta: t }) => e(t);
	return {
		start: () => ep.update(t, !0),
		stop: () => eR.update(t)
	};
};
function tD(e) {
	let t, r, a;
	var n, { from: i, autoplay: o = !0, driver: s = tT, elapsed: l = 0, repeat: u = 0, repeatType: c = "loop", repeatDelay: h = 0, onPlay: d, onStop: f, onComplete: g, onRepeat: m, onUpdate: p } = e, y = O(e, [
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
	let { to: b } = y, x = 0, v = y.duration, w = !1, k = !0, C = function(e) {
		if (Array.isArray(e.to)) return tA;
		if (tS[e.type]) return tS[e.type];
		let t = new Set(Object.keys(e));
		if (t.has("ease") || t.has("duration") && !t.has("dampingRatio"));
		else if (t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta")) return ti;
		return tA;
	}(y);
	null != (n = C.needsInterpolation) && n.call(C, i, b) && (a = tP([0, 100], [i, b], { clamp: !1 }), i = 0, b = 100);
	let P = C(Object.assign(Object.assign({}, y), {
		from: i,
		to: b
	}));
	return o && (d?.(), (t = s(function(e) {
		if (k || (e = -e), l += e, !w) {
			let e = P.next(Math.max(0, l));
			r = e.value, a && (r = a(r)), w = k ? e.done : l <= 0;
		}
		if (p?.(r), w) if (0 === x && (v ??= l), x < u) {
			var n = l;
			(k ? n >= v + h : n <= -h) && (x++, "reverse" === c ? l = function(e, t, r = 0, a = !0) {
				return a ? tR(t + -e, t, r) : t - (e - t) + r;
			}(l, v, h, k = x % 2 == 0) : (l = tR(l, v, h), "mirror" === c && P.flipTarget()), w = !1, m && m());
		} else t.stop(), g && g();
	})).start()), { stop: () => {
		f?.(), t.stop();
	} };
}
var t$ = (e, t) => 1 - 3 * t + 3 * e, tO = (e, t) => 3 * t - 6 * e, tI = (e, t, r) => ((t$(t, r) * e + tO(t, r)) * e + 3 * t) * e, tF = (e, t, r) => 3 * t$(t, r) * e * e + 2 * tO(t, r) * e + 3 * t, tL = /[A-Z]|^ms/g, tB = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tV = function(e) {
	return 45 === e.charCodeAt(1);
}, tH = function(e) {
	return null != e && "boolean" != typeof e;
}, tE = eM(function(e) {
	return tV(e) ? e : e.replace(tL, "-$&").toLowerCase();
}), tz = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if ("string" == typeof t) return t.replace(tB, function(e, t, r) {
			return e9 = {
				name: t,
				styles: r,
				next: e9
			}, t;
		});
	}
	return 1 === e3[e] || tV(e) || "number" != typeof t || 0 === t ? t : t + "px";
};
function tW(e, t, r) {
	if (null == r) return "";
	if (void 0 !== r.__emotion_styles) return r;
	switch (typeof r) {
		case "boolean": return "";
		case "object":
			if (1 === r.anim) return e9 = {
				name: r.name,
				styles: r.styles,
				next: e9
			}, r.name;
			if (void 0 !== r.styles) {
				var a = r.next;
				if (void 0 !== a) for (; void 0 !== a;) e9 = {
					name: a.name,
					styles: a.styles,
					next: e9
				}, a = a.next;
				return r.styles + ";";
			}
			return function(e, t, r) {
				var a = "";
				if (Array.isArray(r)) for (var n = 0; n < r.length; n++) a += tW(e, t, r[n]) + ";";
				else for (var i in r) {
					var o = r[i];
					if ("object" != typeof o) null != t && void 0 !== t[o] ? a += i + "{" + t[o] + "}" : tH(o) && (a += tE(i) + ":" + tz(i, o) + ";");
					else if (Array.isArray(o) && "string" == typeof o[0] && (null == t || void 0 === t[o[0]])) for (var s = 0; s < o.length; s++) tH(o[s]) && (a += tE(i) + ":" + tz(i, o[s]) + ";");
					else {
						var l = tW(e, t, o);
						switch (i) {
							case "animation":
							case "animationName":
								a += tE(i) + ":" + l + ";";
								break;
							default: a += i + "{" + l + "}";
						}
					}
				}
				return a;
			}(e, t, r);
		case "function": if (void 0 !== e) {
			var n = e9, i = r(e);
			return e9 = n, tW(e, t, i);
		}
	}
	if (null == t) return r;
	var o = t[r];
	return void 0 !== o ? o : r;
}
var tj = /label:\s*([^\s;{]+)\s*(;|$)/g;
function tN() {
	return new Proxy({}, { get: (e, t) => t });
}
let tq = tN(), tU = {
	paddingX: [tq.paddingLeft, tq.paddingRight],
	paddingY: [tq.paddingTop, tq.paddingBottom],
	marginX: [tq.marginInlineStart, tq.marginInlineEnd],
	marginY: [tq.marginTop, tq.marginBottom],
	borderX: [tq.borderLeft, tq.borderRight],
	borderY: [tq.borderTop, tq.borderBottom],
	color: [tq.color, tq.fill],
	borderTopRadius: [tq.borderTopLeftRadius, tq.borderTopRightRadius],
	borderBottomRadius: [tq.borderBottomLeftRadius, tq.borderBottomRightRadius],
	borderRightRadius: [tq.borderTopRightRadius, tq.borderBottomRightRadius],
	borderLeftRadius: [tq.borderTopLeftRadius, tq.borderBottomLeftRadius],
	backgroundGradient: [tq.backgroundImage],
	boxSize: [tq.width, tq.height]
}, tG = tN(), tY = {
	font: tG.fontFamily,
	shadow: tG.boxShadow,
	rounded: tG.borderRadius,
	roundedTop: tG.borderTopRadius,
	roundedBottom: tG.borderBottomRadius,
	roundedLeft: tG.borderLeftRadius,
	roundedRight: tG.borderRightRadius,
	bg: tG.background,
	bgImage: tG.backgroundImage,
	bgSize: tG.backgroundSize,
	bgPosition: tG.backgroundPosition,
	bgRepeat: tG.backgroundRepeat,
	bgAttachment: tG.backgroundAttachment,
	bgColor: tG.backgroundColor,
	bgGradient: tG.backgroundGradient,
	bgClip: tG.backgroundClip,
	pos: tG.position,
	p: tG.padding,
	pt: tG.paddingTop,
	pr: tG.paddingRight,
	pl: tG.paddingLeft,
	pb: tG.paddingBottom,
	ps: tG.paddingInlineStart,
	pe: tG.paddingInlineEnd,
	px: tG.paddingX,
	py: tG.paddingY,
	m: tG.margin,
	mt: tG.marginTop,
	mr: tG.marginRight,
	ml: tG.marginLeft,
	mb: tG.marginBottom,
	ms: tG.marginInlineStart,
	me: tG.marginInlineEnd,
	mx: tG.marginX,
	my: tG.marginY,
	w: tG.width,
	minW: tG.minWidth,
	maxW: tG.maxWidth,
	h: tG.height,
	minH: tG.minHeight,
	maxH: tG.maxHeight
}, tK = tN(), tX = (...e) => {
	let t = [...e];
	for (let r of e) tY[r] && t.push(tY[r]);
	return t;
}, tJ = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
var tZ = class e {
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
		if (tJ[t]) return tJ[t];
		let r = t;
		if (r.startsWith("$") || r.endsWith("$") || r.startsWith("_")) {
			let t = "", a = "";
			if (r.startsWith("_") ? (t = "&", r = r.slice(1)) : r.startsWith("$") ? (t = "& ", r = r.slice(1)) : (a = " &", r = r.slice(0, r.length - 1)), r.startsWith("data") || r.startsWith("aria")) {
				let [e, i] = r.split("__");
				return i ? `${t}[${n(e)}='${n(i)}']${a}` : `${t}[${n(e)}]${a}`;
			}
			if ("&" === t) {
				if (r.startsWith("$")) return `${t}::${r.slice(1)}`;
				if (e.supportedPseudoClasses[r]) {
					let a = e.supportedPseudoClasses[r];
					return `${t}:${a}, ${t}[data-${a}]:not([data-${a}='false']), ${t}.${a}`;
				}
				let [a, i] = r.split("__"), o = n(a);
				return i ? `${t}[data-${o}='${n(i)}']` : `${t}[data-${o}]:not([data-${o}='false'])`;
			}
		}
	};
	static walkStateValues = (t, r, a = {
		default: {},
		selectorPath: [],
		path: []
	}) => {
		let { $: n,...i } = t;
		for (let t in i) {
			let o = i[t], s = i.default ?? a.default, l = n ?? p(s, [...a.path.slice(1), "$"]), u = l ? [...a.selectorPath, l] : a.selectorPath, c = [...a.path, t];
			if (_(o)) {
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
		let a = [], { state: n, extends: i,...s } = t;
		if (i) for (let e of i) a.push(...this.processAll(e, r));
		if (n) {
			let t = {}, r = {};
			e.walkStateValues(n, (e, a, n) => {
				let i = `--${this.opt.varPrefix}-state-${a.join("-")}`, o = g(a) ?? "", s = {};
				this.process(s, o, e, !1), t[i] = s[o], d(r, [...n, o], `var(${i})`);
			}), a.push(t), a.push(...this.processAll(r));
		}
		if (!o(s)) {
			let e = {};
			this.processTo(e, s, r), a.push(e);
		}
		return a;
	}
	processTo(e, t, r = !0) {
		for (let a in t) this.process(e, a, t[a], r);
	}
	process(t, r, a, n = !0) {
		if (this.opt.mixins[r]) {
			let e = this.opt.mixins[r]?.get(a);
			if (e) for (let r in e) this.process(t, r, e[r], n);
			return;
		}
		let i = r;
		if (_(a)) {
			t[i = e.convertSelector(i) ?? i] = t[i] ?? {}, this.processTo(t[i], a);
			return;
		}
		if (n && tU[i = tY[i] ?? i]) {
			for (let e of tU[i]) t[e] = this.opt.processValue(e, a);
			return;
		}
		t[i] = this.opt.processValue(i, a);
	}
};
let tQ = ((e8 = {}).var = "var", e8.mixin = "mixin", e8);
var t0 = class e {
	static create(e, { value: t, on: r, transform: a }) {
		return {
			type: e,
			value: t,
			on: r,
			transform: a,
			__Tokens: void 0,
			__ValueType: void 0,
			__CSSTokens: void 0
		};
	}
	static color(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.color, tK.bgColor, tK.outlineColor, tK.borderColor, tK.accentColor, tK.fill, tK.stroke),
			transform: (e, t) => D(e) ? {
				default: `var(${t(e)})`,
				rgb: `var(${t(`${e}/rgb`)})`
			} : {
				default: `rgb(${e[0]}, ${e[1]}, ${e[2]})`,
				rgb: `${e[0]} ${e[1]} ${e[2]}`
			},
			fallback: ""
		});
	}
	static space(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.gap, tK.rowGap, tK.columnGap, tK.top, tK.right, tK.bottom, tK.left, tK.m, tK.ms, tK.me, tK.mt, tK.mr, tK.mb, tK.ml, tK.mx, tK.my, tK.p, tK.ps, tK.pe, tK.pt, tK.pr, tK.pb, tK.pl, tK.px, tK.py)
		});
	}
	static boxSize(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.w, tK.minW, tK.maxW, tK.h, tK.minH, tK.maxH, tK.boxSize),
			fallback: 0
		});
	}
	static fontSize(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.fontSize),
			fallback: 0
		});
	}
	static lineHeight(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.lineHeight),
			fallback: 0
		});
	}
	static rounded(t) {
		return e.create(tQ.var, {
			value: t,
			fallback: 0,
			on: tX(tK.rounded, tK.roundedTop, tK.roundedBottom, tK.roundedLeft, tK.roundedRight, tq.borderTopLeftRadius, tq.borderTopRightRadius, tq.borderBottomLeftRadius, tq.borderBottomRightRadius, tq.borderTopRightRadius, tq.borderBottomRightRadius, tq.borderTopLeftRadius, tq.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.transitionTimingFunction)
		});
	}
	static transitionDuration(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.transitionDuration),
			transform: (e) => `${e}ms`
		});
	}
	static font(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.font)
		});
	}
	static fontWeight(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.fontWeight)
		});
	}
	static letterSpacing(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.letterSpacing)
		});
	}
	static shadow(t) {
		return e.create(tQ.var, {
			value: t,
			on: tX(tK.shadow)
		});
	}
	static customMixin(t, r) {
		return e.create(tQ.mixin, {
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
let t1 = (e, t, r) => {
	let a = e;
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (e === t.length - 1) {
			a[n] = r;
			continue;
		}
		a[n] = a[n] ?? {}, a = a[n];
	}
};
var t2 = class e {
	static defaultMode = "_default";
	static walkValues = (t, r, a = []) => {
		for (let n in t) {
			let i = t[n];
			if (_(i)) {
				if (M(i, "_default")) {
					r(i, [...a, n]);
					continue;
				}
				e.walkValues(i, r, [...a, n]);
				continue;
			}
			r(i, [...a, n]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(t, { cssVar: r, transformFallback: a }) {
		e.walkValues(t.value, (e, n) => {
			let i = n.join("."), o = (e, n) => {
				let i = t.transform ? t.transform(e, r) : a(e);
				if (v(i)) for (let e in i) n(i[e], "default" === e ? "" : e);
				else n(i, "");
			};
			if (d(this._cssVarRefs, [i], r(i)), _(e)) for (let t in e) o(e[t], (e, r) => {
				d(this._values, [`${i}${r ? `/${r}` : ""}`, t], e);
			});
			else o(e, (e, t) => {
				d(this._values, [`${i}${t ? `/${t}` : ""}`], e);
			});
		});
	}
	get tokens() {
		return b(this._values);
	}
	get(t, r, a) {
		let n = this._values[t];
		return v(n) ? a ? n[r] : n[r] ?? n[e.defaultMode] : a ? r === e.defaultMode ? n : void 0 : n;
	}
	use(e, t = !1) {
		if (this._cssVarRefs[e]) return t ? `${this._cssVarRefs[e]}` : `var(${this._cssVarRefs[e]})`;
	}
}, t4 = class e {
	static walkValue = (t, r, a = []) => {
		for (let n in t) {
			let i = t[n];
			if (_(i)) {
				if (M(i, "__mixin")) {
					r(i, [...a, n]);
					continue;
				}
				e.walkValue(i, r, [...a, n]);
				continue;
			}
			r(i, [...a, n]);
		}
	};
	_values = {};
	constructor(t) {
		e.walkValue(t.value, (e, t) => {
			let r = t.join(".");
			d(this._values, [r], R(e, "__mixin"));
		});
	}
	get tokens() {
		return b(this._values);
	}
	get(e) {
		return this._values[e];
	}
}, t5 = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
let t3 = (e) => {
	let r = p(e, ["color", "sys"], {});
	return {
		...e,
		color: { sys: k(t5, (e) => t(r, (t, r) => A(e, (e) => r.indexOf(e) > -1))) }
	};
}, t8 = (e) => (t) => `rgba(var(${t}--rgb) / ${e})`;
function t6(e, t) {
	return Object.assign((e) => t(e), {
		toString: () => e,
		token: e
	});
}
var t9 = (e) => e.reduce((e, t) => Object.assign(e, { [t]: !0 }), {}), t7 = class e {
	static propsCanPercent = t9([...t0.boxSize({}).on]);
	static propsCanBaseDp = t9([
		...t0.boxSize({}).on,
		...t0.space({}).on,
		...t0.fontSize({}).on,
		...t0.letterSpacing({}).on,
		...t0.lineHeight({}).on,
		...t0.rounded({}).on
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
	transformFallback = (t, r) => e.propsCanBaseDp[t] && P(r) ? e.propsCanPercent[t] && 1 > Math.abs(r) ? `${100 * r}%` : this.dp(r) : r;
	constructor(e, t = {}) {
		for (let r in this.theme = e, this.varPrefix = t.varPrefix ?? "vk", this.mode = t.mode ?? "light", d(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e) {
			let t = e[r];
			if (t) {
				if (t.type === tQ.var) {
					let e = new t2(t, {
						cssVar: (e) => this.cssVar(r, e),
						transformFallback: (e) => this.transformFallback(t.on[0], e)
					});
					for (let a of (this.tokens[r] = e, t.on)) this.propValues[a] = e;
					for (let t of e.tokens) for (let a of ["light", "dark"]) {
						let n = a === this.mode ? "_default" : `_${a}`, i = e.get(t, n, !0);
						h(i) || ("_default" === n ? d(this.cssVars, [this.cssVar(r, t)], i) : d(this.cssVars, [n, this.cssVar(r, t)], i));
					}
					continue;
				}
				if (t.type === tQ.mixin) {
					let e = new t4(t);
					for (let r of t.on) this.mixins[r] = e;
				}
			}
		}
	}
	cssVar(e, t) {
		return `--${this.varPrefix}-${n(e)}__${t.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (e, t) => this.tokens[t] ? Object.assign((e) => this.tokens[t]?.get(e, `_${this.mode}`), { tokens: this.tokens[t]?.tokens }) : this.mixins[t] ? Object.assign((e) => this.mixins[t]?.get(e), { tokens: this.mixins[t]?.tokens }) : void 0 });
	processValue = (e, t) => {
		if (l(t) && M(t, "token")) {
			let r = this.propValues[e]?.use(t.token, !0);
			return r ? t(r) : void 0;
		}
		return this.propValues[e]?.use(t) ?? this.transformFallback(e, t);
	};
	unstable_sx = (e) => new tZ({
		mixins: this.mixins,
		varPrefix: this.varPrefix,
		processValue: this.processValue
	}).processAll(e);
	unstable_css(e, t) {
		let r = t ?? {};
		return r.__emotion_styles = r.__emotion_styles ?? function(e, t, r) {
			if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
			var a, n = !0, i = "";
			e9 = void 0;
			var o = e[0];
			null == o || void 0 === o.raw ? (n = !1, i += tW(r, t, o)) : i += o[0];
			for (var s = 1; s < e.length; s++) i += tW(r, t, e[s]), n && (i += o[s]);
			tj.lastIndex = 0;
			for (var l = ""; null !== (a = tj.exec(i));) l += "-" + a[1];
			return {
				name: ec(i) + l,
				styles: i,
				next: e9
			};
		}(this.unstable_sx(t), e?.registered, {}), r.__emotion_styles;
	}
	toFigmaTokens() {
		let e = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } }, t = {}, r = {}, a = (e, t) => v(t) ? {
			$type: e,
			$value: k(t, (t) => a(e, t).$value)
		} : D(t) ? {
			$type: e,
			$value: t.replace(/var\(([^)]+)\)/g, (e) => {
				let t = e.slice(4, e.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((e, t) => 0 === t ? s(e) : e).join(".") ?? "";
				return t.startsWith("sys.") ? `{${t}}` : `{seed.${t}}`;
			}).replace(/calc\(.+\)$/g, (e) => e.slice(5, e.length - 1))
		} : {
			$type: e,
			$value: t
		};
		for (let n in this.tokens) {
			let i = this.tokens[n], o = (o) => {
				for (let s of i.tokens) if (!s.includes("/")) if (s.startsWith("sys.")) {
					let e = i.get(s, "_default"), l = i.get(s, "_dark");
					t1(t, [n, ...s.split(".")], a(o, e)), e !== l && t1(r, [n, ...s.split(".")], a(o, l));
				} else t1(e, [n, ...s.split(".")], a(o, i.get(s, "_default")));
			};
			switch (n) {
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
			let r = this.mixins[e];
			if (!r) continue;
			let n = (n) => {
				for (let i of r.tokens) {
					let o = r.get(i);
					if (!o) continue;
					let s = this.unstable_sx(o)[0];
					t1(t, [e, ...i.split(".")], a(n, s));
				}
			};
			"textStyle" === e && n("typography");
		}
		return {
			seed: e,
			base: t3(t),
			dark: t3(r)
		};
	}
};
let re = {
	shadow: t0.shadow({
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
	elevation: t0.customMixin("elevation", {
		0: t0.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		1: t0.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		2: t0.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		3: t0.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		4: t0.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var rt = (e, t, r, a) => Object.assign(function(e, t, r, a) {
	if (e === t && r === a) return tM;
	let n = new Float32Array(11);
	for (let t = 0; t < 11; ++t) n[t] = tI(.1 * t, e, r);
	return (i) => 0 === i || 1 === i ? i : tI(function(t) {
		let a = 0, i = 1;
		for (; 10 !== i && n[i] <= t; ++i) a += .1;
		let o = a + (t - n[--i]) / (n[i + 1] - n[i]) * .1, s = tF(o, e, r);
		if (s >= .001) {
			var l = o;
			for (let a = 0; a < 8; ++a) {
				let a = tF(l, e, r);
				if (0 === a) break;
				let n = tI(l, e, r) - t;
				l -= n / a;
			}
			return l;
		}
		return 0 === s ? o : function(e, t, r, a, n) {
			let i, o, s = 0;
			do
				(i = tI(o = t + (r - t) / 2, a, n) - e) > 0 ? r = o : t = o;
			while (Math.abs(i) > 1e-7 && ++s < 10);
			return o;
		}(t, a, a + .1, e, r);
	}(i), t, a);
}(e, t, r, a), { toString: () => `cubic-bezier(${e}, ${t}, ${r}, ${a})` });
let rr = {
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
		linear: rt(0, 0, 1, 1),
		standard: Object.assign(rt(.2, 0, 0, 1), {
			accelerate: rt(.3, 0, 1, 1),
			decelerate: rt(0, 0, 0, 1)
		}),
		emphasized: Object.assign(rt(.2, 0, 0, 1), {
			accelerate: rt(.3, 0, .8, .15),
			decelerate: rt(.05, .7, .1, 1)
		}),
		legacy: Object.assign(rt(.4, 0, .2, 1), {
			decelerate: rt(0, 0, .2, 1),
			accelerate: rt(.4, 0, 1, 1)
		})
	}
}, ra = (e, t) => {
	let a = t ?? {
		...e,
		from: { ...e.to },
		to: { ...e.from }
	};
	return r({
		onComplete: $(),
		$default: $()
	}, (t, { slots: r, emit: n }) => {
		let i, o = (t, r) => {
			i = tD({
				...e,
				autoplay: !0,
				onComplete: () => {
					r(), n("complete", "enter");
				},
				onUpdate: (e) => {
					Object.assign(t.style, e);
				}
			});
		}, s = (e, t) => {
			i = tD({
				...a,
				autoplay: !0,
				onComplete: () => {
					t(), n("complete", "leave");
				},
				onUpdate: (t) => {
					Object.assign(e.style, t);
				}
			});
		}, l = () => {
			i?.stop();
		};
		return () => eD(el, {
			css: !1,
			onEnter: o,
			onEnterCancelled: l,
			onLeave: s,
			onLeaveCancelled: l,
			children: r.default?.()
		});
	}, { name: "Transition" });
}, rn = {
	transitionDuration: t0.transitionDuration(rr.duration),
	transitionTimingFunction: t0.transitionTimingFunction({
		linear: rr.easing.linear.toString(),
		standard: rr.easing.standard.toString(),
		"standard-accelerate": rr.easing.standard.accelerate.toString(),
		"standard-decelerate": rr.easing.standard.decelerate.toString(),
		emphasized: rr.easing.emphasized.toString(),
		"emphasized-decelerate": rr.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": rr.easing.emphasized.accelerate.toString(),
		legacy: rr.easing.legacy.toString(),
		"legacy-decelerate": rr.easing.legacy.decelerate.toString(),
		"legacy-accelerate": rr.easing.legacy.accelerate.toString()
	})
};
function ri(e) {
	return e < 0 ? -1 : +(0 !== e);
}
function ro(e, t, r) {
	return r < e ? e : r > t ? t : r;
}
function rs(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function rl(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function ru(e, t) {
	return [
		e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2],
		e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2],
		e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]
	];
}
var rc = [
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
], rh = [
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
], rd = [
	95.047,
	100,
	108.883
];
function rf(e, t, r) {
	return (-16777216 | (255 & e) << 16 | (255 & t) << 8 | 255 & r) >>> 0;
}
function rg(e) {
	return rf(rx(e[0]), rx(e[1]), rx(e[2]));
}
function rm(e) {
	return 116 * rv(function(e) {
		return ru([
			rb(e >> 16 & 255),
			rb(e >> 8 & 255),
			rb(255 & e)
		], rc);
	}(e)[1] / 100) - 16;
}
function rp(e) {
	return 100 * function(e) {
		let t = e * e * e;
		return t > 216 / 24389 ? t : (116 * e - 16) / (24389 / 27);
	}((e + 16) / 116);
}
function ry(e) {
	return 116 * rv(e / 100) - 16;
}
function rb(e) {
	let t = e / 255;
	return t <= .040449936 ? t / 12.92 * 100 : 100 * Math.pow((t + .055) / 1.055, 2.4);
}
function rx(e) {
	var t;
	let r = e / 100;
	return (t = Math.round(255 * (r <= .0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055))) < 0 ? 0 : t > 255 ? 255 : t;
}
function rv(e) {
	return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
}
var rw = class e {
	static make(t = rd, r = 200 / Math.PI * rp(50) / 100, a = 50, n = 2, i = !1) {
		var o, s;
		let l = .401288 * t[0] + .650173 * t[1] + -.051461 * t[2], u = -.250268 * t[0] + 1.204414 * t[1] + .045854 * t[2], c = -.002079 * t[0] + .048952 * t[1] + .953127 * t[2], h = .8 + n / 10, d = h >= .9 ? (1 - (o = (h - .9) * 10)) * .59 + .69 * o : (1 - (s = (h - .8) * 10)) * .525 + .59 * s, f = i ? 1 : h * (1 - 1 / 3.6 * Math.exp((-r - 42) / 92)), g = [
			100 / l * (f = f > 1 ? 1 : f < 0 ? 0 : f) + 1 - f,
			100 / u * f + 1 - f,
			100 / c * f + 1 - f
		], m = 1 / (5 * r + 1), p = m * m * m * m, y = 1 - p, b = p * r + .1 * y * y * Math.cbrt(5 * r), x = rp(a) / t[1], v = 1.48 + Math.sqrt(x), w = .725 / Math.pow(x, .2), k = [
			Math.pow(b * g[0] * l / 100, .42),
			Math.pow(b * g[1] * u / 100, .42),
			Math.pow(b * g[2] * c / 100, .42)
		], C = [
			400 * k[0] / (k[0] + 27.13),
			400 * k[1] / (k[1] + 27.13),
			400 * k[2] / (k[2] + 27.13)
		];
		return new e(x, (2 * C[0] + C[1] + .05 * C[2]) * w, w, w, d, h, g, b, Math.pow(b, .25), v);
	}
	constructor(e, t, r, a, n, i, o, s, l, u) {
		this.n = e, this.aw = t, this.nbb = r, this.ncb = a, this.c = n, this.nc = i, this.rgbD = o, this.fl = s, this.fLRoot = l, this.z = u;
	}
};
rw.DEFAULT = rw.make();
var rk = class e {
	constructor(e, t, r, a, n, i, o, s, l) {
		this.hue = e, this.chroma = t, this.j = r, this.q = a, this.m = n, this.s = i, this.jstar = o, this.astar = s, this.bstar = l;
	}
	distance(e) {
		let t = this.jstar - e.jstar, r = this.astar - e.astar, a = this.bstar - e.bstar;
		return 1.41 * Math.pow(Math.sqrt(t * t + r * r + a * a), .63);
	}
	static fromInt(t) {
		return e.fromIntInViewingConditions(t, rw.DEFAULT);
	}
	static fromIntInViewingConditions(t, r) {
		let a = rb((16711680 & t) >> 16), n = rb((65280 & t) >> 8), i = rb(255 & t), o = .41233895 * a + .35762064 * n + .18051042 * i, s = .2126 * a + .7152 * n + .0722 * i, l = .01932141 * a + .11916382 * n + .95034478 * i, u = r.rgbD[0] * (.401288 * o + .650173 * s - .051461 * l), c = r.rgbD[1] * (-.250268 * o + 1.204414 * s + .045854 * l), h = r.rgbD[2] * (-.002079 * o + .048952 * s + .953127 * l), d = Math.pow(r.fl * Math.abs(u) / 100, .42), f = Math.pow(r.fl * Math.abs(c) / 100, .42), g = Math.pow(r.fl * Math.abs(h) / 100, .42), m = 400 * ri(u) * d / (d + 27.13), p = 400 * ri(c) * f / (f + 27.13), y = 400 * ri(h) * g / (g + 27.13), b = (11 * m + -12 * p + y) / 11, x = (m + p - 2 * y) / 9, v = 180 * Math.atan2(x, b) / Math.PI, w = v < 0 ? v + 360 : v >= 360 ? v - 360 : v, k = w * Math.PI / 180, C = 100 * Math.pow((40 * m + 20 * p + y) / 20 * r.nbb / r.aw, r.c * r.z), P = 4 / r.c * Math.sqrt(C / 100) * (r.aw + 4) * r.fLRoot, M = Math.pow(5e4 / 13 * (.25 * (Math.cos((w < 20.14 ? w + 360 : w) * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(b * b + x * x) / ((20 * m + 20 * p + 21 * y) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, r.n), .73), _ = M * Math.sqrt(C / 100), A = _ * r.fLRoot, S = 50 * Math.sqrt(M * r.c / (r.aw + 4)), R = 1 / .0228 * Math.log(1 + .0228 * A);
		return new e(w, _, C, P, A, S, 1.7000000000000002 * C / (1 + .007 * C), R * Math.cos(k), R * Math.sin(k));
	}
	static fromJch(t, r, a) {
		return e.fromJchInViewingConditions(t, r, a, rw.DEFAULT);
	}
	static fromJchInViewingConditions(t, r, a, n) {
		let i = 4 / n.c * Math.sqrt(t / 100) * (n.aw + 4) * n.fLRoot, o = r * n.fLRoot, s = 50 * Math.sqrt(r / Math.sqrt(t / 100) * n.c / (n.aw + 4)), l = a * Math.PI / 180, u = 1 / .0228 * Math.log(1 + .0228 * o);
		return new e(a, r, t, i, o, s, 1.7000000000000002 * t / (1 + .007 * t), u * Math.cos(l), u * Math.sin(l));
	}
	static fromUcs(t, r, a) {
		return e.fromUcsInViewingConditions(t, r, a, rw.DEFAULT);
	}
	static fromUcsInViewingConditions(t, r, a, n) {
		let i = (Math.exp(.0228 * Math.sqrt(r * r + a * a)) - 1) / .0228 / n.fLRoot, o = 180 / Math.PI * Math.atan2(a, r);
		return o < 0 && (o += 360), e.fromJchInViewingConditions(t / (1 - (t - 100) * .007), i, o, n);
	}
	toInt() {
		return this.viewed(rw.DEFAULT);
	}
	viewed(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, a = .25 * (Math.cos(r + 2) + 3.8), n = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), i = 5e4 / 13 * a * e.nc * e.ncb, o = n / e.nbb, s = Math.sin(r), l = Math.cos(r), u = 23 * (o + .305) * t / (23 * i + 11 * t * l + 108 * t * s), c = u * l, h = u * s, d = (460 * o + 451 * c + 288 * h) / 1403, f = (460 * o - 891 * c - 261 * h) / 1403, g = (460 * o - 220 * c - 6300 * h) / 1403, m = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), p = ri(d) * (100 / e.fl) * Math.pow(m, 1 / .42), y = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f))), b = ri(f) * (100 / e.fl) * Math.pow(y, 1 / .42), x = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), v = ri(g) * (100 / e.fl) * Math.pow(x, 1 / .42), w = p / e.rgbD[0], k = b / e.rgbD[1], C = v / e.rgbD[2];
		return function(e, t, r) {
			let a = rh[0][0] * e + rh[0][1] * t + rh[0][2] * r, n = rh[1][0] * e + rh[1][1] * t + rh[1][2] * r, i = rh[2][0] * e + rh[2][1] * t + rh[2][2] * r;
			return rf(rx(a), rx(n), rx(i));
		}(1.86206786 * w - 1.01125463 * k + .14918677 * C, .38752654 * w + .62144744 * k - .00897398 * C, -.0158415 * w - .03412294 * k + 1.04996444 * C);
	}
	static fromXyzInViewingConditions(t, r, a, n) {
		let i = n.rgbD[0] * (.401288 * t + .650173 * r - .051461 * a), o = n.rgbD[1] * (-.250268 * t + 1.204414 * r + .045854 * a), s = n.rgbD[2] * (-.002079 * t + .048952 * r + .953127 * a), l = Math.pow(n.fl * Math.abs(i) / 100, .42), u = Math.pow(n.fl * Math.abs(o) / 100, .42), c = Math.pow(n.fl * Math.abs(s) / 100, .42), h = 400 * ri(i) * l / (l + 27.13), d = 400 * ri(o) * u / (u + 27.13), f = 400 * ri(s) * c / (c + 27.13), g = (11 * h + -12 * d + f) / 11, m = (h + d - 2 * f) / 9, p = 180 * Math.atan2(m, g) / Math.PI, y = p < 0 ? p + 360 : p >= 360 ? p - 360 : p, b = y * Math.PI / 180, x = 100 * Math.pow((40 * h + 20 * d + f) / 20 * n.nbb / n.aw, n.c * n.z), v = 4 / n.c * Math.sqrt(x / 100) * (n.aw + 4) * n.fLRoot, w = Math.pow(5e4 / 13 * (1 / 4 * (Math.cos((y < 20.14 ? y + 360 : y) * Math.PI / 180 + 2) + 3.8)) * n.nc * n.ncb * Math.sqrt(g * g + m * m) / ((20 * h + 20 * d + 21 * f) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, n.n), .73), k = w * Math.sqrt(x / 100), C = k * n.fLRoot, P = 50 * Math.sqrt(w * n.c / (n.aw + 4)), M = Math.log(1 + .0228 * C) / .0228;
		return new e(y, k, x, v, C, P, 1.7000000000000002 * x / (1 + .007 * x), M * Math.cos(b), M * Math.sin(b));
	}
	xyzInViewingConditions(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, a = .25 * (Math.cos(r + 2) + 3.8), n = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), i = 5e4 / 13 * a * e.nc * e.ncb, o = n / e.nbb, s = Math.sin(r), l = Math.cos(r), u = 23 * (o + .305) * t / (23 * i + 11 * t * l + 108 * t * s), c = u * l, h = u * s, d = (460 * o + 451 * c + 288 * h) / 1403, f = (460 * o - 891 * c - 261 * h) / 1403, g = (460 * o - 220 * c - 6300 * h) / 1403, m = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), p = ri(d) * (100 / e.fl) * Math.pow(m, 1 / .42), y = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f))), b = ri(f) * (100 / e.fl) * Math.pow(y, 1 / .42), x = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), v = ri(g) * (100 / e.fl) * Math.pow(x, 1 / .42), w = p / e.rgbD[0], k = b / e.rgbD[1], C = v / e.rgbD[2];
		return [
			1.86206786 * w - 1.01125463 * k + .14918677 * C,
			.38752654 * w + .62144744 * k - .00897398 * C,
			-.0158415 * w - .03412294 * k + 1.04996444 * C
		];
	}
}, rC = class e {
	static sanitizeRadians(e) {
		return (e + 8 * Math.PI) % (2 * Math.PI);
	}
	static trueDelinearized(e) {
		let t = e / 100;
		return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
	}
	static chromaticAdaptation(e) {
		let t = Math.pow(Math.abs(e), .42);
		return 400 * ri(e) * t / (t + 27.13);
	}
	static hueOf(t) {
		let r = ru(t, e.SCALED_DISCOUNT_FROM_LINRGB), a = e.chromaticAdaptation(r[0]), n = e.chromaticAdaptation(r[1]), i = e.chromaticAdaptation(r[2]);
		return Math.atan2((a + n - 2 * i) / 9, (11 * a + -12 * n + i) / 11);
	}
	static areInCyclicOrder(t, r, a) {
		return e.sanitizeRadians(r - t) < e.sanitizeRadians(a - t);
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
	static setCoordinate(t, r, a, n) {
		let i = e.intercept(t[n], r, a[n]);
		return e.lerpPoint(t, i, a);
	}
	static isBounded(e) {
		return 0 <= e && e <= 100;
	}
	static nthVertex(t, r) {
		let a = e.Y_FROM_LINRGB[0], n = e.Y_FROM_LINRGB[1], i = e.Y_FROM_LINRGB[2], o = r % 4 <= 1 ? 0 : 100, s = 100 * (r % 2 != 0);
		if (r < 4) {
			let r = (t - o * n - s * i) / a;
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
			let r = (t - s * a - o * i) / n;
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
			let r = (t - o * a - s * n) / i;
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
		let a = [
			-1,
			-1,
			-1
		], n = a, i = 0, o = 0, s = !1, l = !0;
		for (let u = 0; u < 12; u++) {
			let c = e.nthVertex(t, u);
			if (c[0] < 0) continue;
			let h = e.hueOf(c);
			if (!s) {
				a = c, n = c, i = h, o = h, s = !0;
				continue;
			}
			(l || e.areInCyclicOrder(i, h, o)) && (l = !1, e.areInCyclicOrder(i, r, h) ? (n = c, o = h) : (a = c, i = h));
		}
		return [a, n];
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
		let a = e.bisectToSegment(t, r), n = a[0], i = e.hueOf(n), o = a[1];
		for (let t = 0; t < 3; t++) if (n[t] !== o[t]) {
			let a = -1, s = 255;
			n[t] < o[t] ? (a = e.criticalPlaneBelow(e.trueDelinearized(n[t])), s = e.criticalPlaneAbove(e.trueDelinearized(o[t]))) : (a = e.criticalPlaneAbove(e.trueDelinearized(n[t])), s = e.criticalPlaneBelow(e.trueDelinearized(o[t])));
			for (let l = 0; l < 8; l++) if (1 >= Math.abs(s - a)) break;
			else {
				let l = Math.floor((a + s) / 2), u = e.CRITICAL_PLANES[l], c = e.setCoordinate(n, u, o, t), h = e.hueOf(c);
				e.areInCyclicOrder(i, r, h) ? (o = c, s = l) : (n = c, i = h, a = l);
			}
		}
		return e.midpoint(n, o);
	}
	static inverseChromaticAdaptation(e) {
		let t = Math.abs(e), r = Math.max(0, 27.13 * t / (400 - t));
		return ri(e) * Math.pow(r, 1 / .42);
	}
	static findResultByJ(t, r, a) {
		let n = 11 * Math.sqrt(a), i = rw.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(.29, i.n), .73), s = .25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * i.nc * i.ncb, l = Math.sin(t), u = Math.cos(t);
		for (let t = 0; t < 5; t++) {
			let c = n / 100, h = Math.pow((0 === r || 0 === n ? 0 : r / Math.sqrt(c)) * o, 1 / .9), d = i.aw * Math.pow(c, 1 / i.c / i.z) / i.nbb, f = 23 * (d + .305) * h / (23 * s + 11 * h * u + 108 * h * l), g = f * u, m = f * l, p = (460 * d + 451 * g + 288 * m) / 1403, y = (460 * d - 891 * g - 261 * m) / 1403, b = (460 * d - 220 * g - 6300 * m) / 1403, v = ru([
				e.inverseChromaticAdaptation(p),
				e.inverseChromaticAdaptation(y),
				e.inverseChromaticAdaptation(b)
			], e.LINRGB_FROM_SCALED_DISCOUNT);
			if (v[0] < 0 || v[1] < 0 || v[2] < 0) break;
			let w = e.Y_FROM_LINRGB[0], k = e.Y_FROM_LINRGB[1], C = e.Y_FROM_LINRGB[2], P = w * v[0] + k * v[1] + C * v[2];
			if (P <= 0) break;
			if (4 === t || .002 > Math.abs(P - a)) {
				if (v[0] > 100.01 || v[1] > 100.01 || v[2] > 100.01) return 0;
				return rg(v);
			}
			n -= (P - a) * n / (2 * P);
		}
		return 0;
	}
	static solveToInt(t, r, a) {
		if (r < 1e-4 || a < 1e-4 || a > 99.9999) {
			let e = rx(rp(a));
			return rf(e, e, e);
		}
		let n = (t = rl(t)) / 180 * Math.PI, i = rp(a), o = e.findResultByJ(n, r, i);
		return 0 !== o ? o : rg(e.bisectToLimit(i, n));
	}
	static solveToCam(t, r, a) {
		return rk.fromInt(e.solveToInt(t, r, a));
	}
};
rC.SCALED_DISCOUNT_FROM_LINRGB = [
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
], rC.LINRGB_FROM_SCALED_DISCOUNT = [
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
], rC.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
], rC.CRITICAL_PLANES = [
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
var rP = class e {
	static from(t, r, a) {
		return new e(rC.solveToInt(t, r, a));
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
		this.setInternalState(rC.solveToInt(e, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(e) {
		this.setInternalState(rC.solveToInt(this.internalHue, e, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(e) {
		this.setInternalState(rC.solveToInt(this.internalHue, this.internalChroma, e));
	}
	constructor(e) {
		this.argb = e;
		let t = rk.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = rm(e), this.argb = e;
	}
	setInternalState(e) {
		let t = rk.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = rm(e), this.argb = e;
	}
	inViewingConditions(t) {
		let r = rk.fromInt(this.toInt()).xyzInViewingConditions(t), a = rk.fromXyzInViewingConditions(r[0], r[1], r[2], rw.make());
		return e.from(a.hue, a.chroma, ry(r[1]));
	}
}, rM = class e {
	static ratioOfTones(t, r) {
		return t = ro(0, 100, t), r = ro(0, 100, r), e.ratioOfYs(rp(t), rp(r));
	}
	static ratioOfYs(e, t) {
		let r = e > t ? e : t;
		return (r + 5) / ((r === t ? e : t) + 5);
	}
	static lighter(t, r) {
		if (t < 0 || t > 100) return -1;
		let a = rp(t), n = r * (a + 5) - 5, i = e.ratioOfYs(n, a), o = Math.abs(i - r);
		if (i < r && o > .04) return -1;
		let s = ry(n) + .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static darker(t, r) {
		if (t < 0 || t > 100) return -1;
		let a = rp(t), n = (a + 5) / r - 5, i = e.ratioOfYs(a, n), o = Math.abs(i - r);
		if (i < r && o > .04) return -1;
		let s = ry(n) - .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static lighterUnsafe(t, r) {
		let a = e.lighter(t, r);
		return a < 0 ? 100 : a;
	}
	static darkerUnsafe(t, r) {
		let a = e.darker(t, r);
		return a < 0 ? 0 : a;
	}
}, r_ = class e {
	static isDisliked(e) {
		let t = Math.round(e.hue) >= 90 && 111 >= Math.round(e.hue), r = Math.round(e.chroma) > 16, a = 65 > Math.round(e.tone);
		return t && r && a;
	}
	static fixIfDisliked(t) {
		return e.isDisliked(t) ? rP.from(t.hue, t.chroma, 70) : t;
	}
}, rA = class e {
	static fromPalette(t) {
		return new e(t.name ?? "", t.palette, t.tone, t.isBackground ?? !1, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
	}
	constructor(e, t, r, a, n, i, o, s) {
		if (this.name = e, this.palette = t, this.tone = r, this.isBackground = a, this.background = n, this.secondBackground = i, this.contrastCurve = o, this.toneDeltaPair = s, this.hctCache = /* @__PURE__ */ new Map(), !n && i) throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
		if (!n && o) throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
		if (n && !o) throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
	}
	getArgb(e) {
		return this.getHct(e).toInt();
	}
	getHct(e) {
		let t = this.hctCache.get(e);
		if (null != t) return t;
		let r = this.getTone(e), a = this.palette(e).getHct(r);
		return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, a), a;
	}
	getTone(t) {
		let r = t.contrastLevel < 0;
		if (this.toneDeltaPair) {
			let a = this.toneDeltaPair(t), n = a.roleA, i = a.roleB, o = a.delta, s = a.polarity, l = a.stayTogether, u = this.background(t).getTone(t), c = "nearer" === s || "lighter" === s && !t.isDark || "darker" === s && t.isDark, h = c ? n : i, d = c ? i : n, f = this.name === h.name, g = t.isDark ? 1 : -1, m = h.contrastCurve.get(t.contrastLevel), p = d.contrastCurve.get(t.contrastLevel), y = h.tone(t), b = rM.ratioOfTones(u, y) >= m ? y : e.foregroundTone(u, m), x = d.tone(t), v = rM.ratioOfTones(u, x) >= p ? x : e.foregroundTone(u, p);
			return r && (b = e.foregroundTone(u, m), v = e.foregroundTone(u, p)), (v - b) * g >= o || ((v = ro(0, 100, b + o * g)) - b) * g >= o || (b = ro(0, 100, v - o * g)), 50 <= b && b < 60 ? v = g > 0 ? Math.max(v, (b = 60) + o * g) : Math.min(v, (b = 49) + o * g) : 50 <= v && v < 60 && (v = l ? g > 0 ? Math.max(v, (b = 60) + o * g) : Math.min(v, (b = 49) + o * g) : g > 0 ? 60 : 49), f ? b : v;
		}
		{
			let a = this.tone(t);
			if (null == this.background) return a;
			let n = this.background(t).getTone(t), i = this.contrastCurve.get(t.contrastLevel);
			if (rM.ratioOfTones(n, a) >= i || (a = e.foregroundTone(n, i)), r && (a = e.foregroundTone(n, i)), this.isBackground && 50 <= a && a < 60 && (a = rM.ratioOfTones(49, n) >= i ? 49 : 60), this.secondBackground) {
				let [r, n] = [this.background, this.secondBackground], [o, s] = [r(t).getTone(t), n(t).getTone(t)], [l, u] = [Math.max(o, s), Math.min(o, s)];
				if (rM.ratioOfTones(l, a) >= i && rM.ratioOfTones(u, a) >= i) return a;
				let c = rM.lighter(l, i), h = rM.darker(u, i), d = [];
				return (-1 !== c && d.push(c), -1 !== h && d.push(h), e.tonePrefersLightForeground(o) || e.tonePrefersLightForeground(s)) ? c < 0 ? 100 : c : 1 === d.length ? d[0] : h < 0 ? 0 : h;
			}
			return a;
		}
	}
	static foregroundTone(t, r) {
		let a = rM.lighterUnsafe(t, r), n = rM.darkerUnsafe(t, r), i = rM.ratioOfTones(a, t), o = rM.ratioOfTones(n, t);
		if (!e.tonePrefersLightForeground(t)) return o >= r || o >= i ? n : a;
		{
			let e = .1 > Math.abs(i - o) && i < r && o < r;
			return i >= r || i >= o || e ? a : n;
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
}, rS = class e {
	static fromInt(t) {
		let r = rP.fromInt(t);
		return e.fromHct(r);
	}
	static fromHct(t) {
		return new e(t.hue, t.chroma, t);
	}
	static fromHueAndChroma(t, r) {
		return new e(t, r, new rR(t, r).create());
	}
	constructor(e, t, r) {
		this.hue = e, this.chroma = t, this.keyColor = r, this.cache = /* @__PURE__ */ new Map();
	}
	tone(e) {
		let t = this.cache.get(e);
		return void 0 === t && (t = rP.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, t)), t;
	}
	getHct(e) {
		return rP.fromInt(this.tone(e));
	}
}, rR = class {
	constructor(e, t) {
		this.hue = e, this.requestedChroma = t, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
	}
	create() {
		let e = 0, t = 100;
		for (; e < t;) {
			let r = Math.floor((e + t) / 2), a = this.maxChroma(r) < this.maxChroma(r + 1);
			if (this.maxChroma(r) >= this.requestedChroma - .01) if (Math.abs(e - 50) < Math.abs(t - 50)) t = r;
			else {
				if (e === r) return rP.from(this.hue, this.requestedChroma, e);
				e = r;
			}
			else a ? e = r + 1 : t = r;
		}
		return rP.from(this.hue, this.requestedChroma, e);
	}
	maxChroma(e) {
		if (this.chromaCache.has(e)) return this.chromaCache.get(e);
		let t = rP.from(this.hue, this.maxChromaValue, e).chroma;
		return this.chromaCache.set(e, t), t;
	}
}, rT = class {
	constructor(e, t, r, a) {
		this.low = e, this.normal = t, this.medium = r, this.high = a;
	}
	get(e) {
		var t, r, a, n, i, o, s, l, u;
		return e <= -1 ? this.low : e < 0 ? (t = this.low, r = this.normal, (1 - (a = (e - -1) / 1)) * t + a * r) : e < .5 ? (n = this.normal, i = this.medium, (1 - (o = (e - 0) / .5)) * n + o * i) : e < 1 ? (s = this.medium, l = this.high, (1 - (u = (e - .5) / .5)) * s + u * l) : this.high;
	}
}, rD = class {
	constructor(e, t, r, a, n) {
		this.roleA = e, this.roleB = t, this.delta = r, this.polarity = a, this.stayTogether = n;
	}
};
function r$(e) {
	return e.variant === e7.FIDELITY || e.variant === e7.CONTENT;
}
function rO(e) {
	return e.variant === e7.MONOCHROME;
}
(e6 = e7 || (e7 = {}))[e6.MONOCHROME = 0] = "MONOCHROME", e6[e6.NEUTRAL = 1] = "NEUTRAL", e6[e6.TONAL_SPOT = 2] = "TONAL_SPOT", e6[e6.VIBRANT = 3] = "VIBRANT", e6[e6.EXPRESSIVE = 4] = "EXPRESSIVE", e6[e6.FIDELITY = 5] = "FIDELITY", e6[e6.CONTENT = 6] = "CONTENT", e6[e6.RAINBOW = 7] = "RAINBOW", e6[e6.FRUIT_SALAD = 8] = "FRUIT_SALAD";
var rI = class e {
	static highestSurface(t) {
		return t.isDark ? e.surfaceBright : e.surfaceDim;
	}
};
rI.contentAccentToneDelta = 15, rI.primaryPaletteKeyColor = rA.fromPalette({
	name: "primary_palette_key_color",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.primaryPalette.keyColor.tone
}), rI.secondaryPaletteKeyColor = rA.fromPalette({
	name: "secondary_palette_key_color",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.secondaryPalette.keyColor.tone
}), rI.tertiaryPaletteKeyColor = rA.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => e.tertiaryPalette.keyColor.tone
}), rI.neutralPaletteKeyColor = rA.fromPalette({
	name: "neutral_palette_key_color",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.neutralPalette.keyColor.tone
}), rI.neutralVariantPaletteKeyColor = rA.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.neutralVariantPalette.keyColor.tone
}), rI.background = rA.fromPalette({
	name: "background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), rI.onBackground = rA.fromPalette({
	name: "on_background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => rI.background,
	contrastCurve: new rT(3, 3, 4.5, 7)
}), rI.surface = rA.fromPalette({
	name: "surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), rI.surfaceDim = rA.fromPalette({
	name: "surface_dim",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : new rT(87, 87, 80, 75).get(e.contrastLevel),
	isBackground: !0
}), rI.surfaceBright = rA.fromPalette({
	name: "surface_bright",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new rT(24, 24, 29, 34).get(e.contrastLevel) : 98,
	isBackground: !0
}), rI.surfaceContainerLowest = rA.fromPalette({
	name: "surface_container_lowest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new rT(4, 4, 2, 0).get(e.contrastLevel) : 100,
	isBackground: !0
}), rI.surfaceContainerLow = rA.fromPalette({
	name: "surface_container_low",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new rT(10, 10, 11, 12).get(e.contrastLevel) : new rT(96, 96, 96, 95).get(e.contrastLevel),
	isBackground: !0
}), rI.surfaceContainer = rA.fromPalette({
	name: "surface_container",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new rT(12, 12, 16, 20).get(e.contrastLevel) : new rT(94, 94, 92, 90).get(e.contrastLevel),
	isBackground: !0
}), rI.surfaceContainerHigh = rA.fromPalette({
	name: "surface_container_high",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new rT(17, 17, 21, 25).get(e.contrastLevel) : new rT(92, 92, 88, 85).get(e.contrastLevel),
	isBackground: !0
}), rI.surfaceContainerHighest = rA.fromPalette({
	name: "surface_container_highest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new rT(22, 22, 26, 30).get(e.contrastLevel) : new rT(90, 90, 84, 80).get(e.contrastLevel),
	isBackground: !0
}), rI.onSurface = rA.fromPalette({
	name: "on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.surfaceVariant = rA.fromPalette({
	name: "surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0
}), rI.onSurfaceVariant = rA.fromPalette({
	name: "on_surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 80 : 30,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(3, 4.5, 7, 11)
}), rI.inverseSurface = rA.fromPalette({
	name: "inverse_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 20
}), rI.inverseOnSurface = rA.fromPalette({
	name: "inverse_on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 20 : 95,
	background: (e) => rI.inverseSurface,
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.outline = rA.fromPalette({
	name: "outline",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 60 : 50,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1.5, 3, 4.5, 7)
}), rI.outlineVariant = rA.fromPalette({
	name: "outline_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 80,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5)
}), rI.shadow = rA.fromPalette({
	name: "shadow",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), rI.scrim = rA.fromPalette({
	name: "scrim",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), rI.surfaceTint = rA.fromPalette({
	name: "surface_tint",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0
}), rI.primary = rA.fromPalette({
	name: "primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => rO(e) ? 100 * !!e.isDark : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new rD(rI.primaryContainer, rI.primary, 10, "nearer", !1)
}), rI.onPrimary = rA.fromPalette({
	name: "on_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => rO(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => rI.primary,
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.primaryContainer = rA.fromPalette({
	name: "primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => r$(e) ? e.sourceColorHct.tone : rO(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.primaryContainer, rI.primary, 10, "nearer", !1)
}), rI.onPrimaryContainer = rA.fromPalette({
	name: "on_primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => r$(e) ? rA.foregroundTone(rI.primaryContainer.tone(e), 4.5) : rO(e) ? 100 * !e.isDark : e.isDark ? 90 : 30,
	background: (e) => rI.primaryContainer,
	contrastCurve: new rT(3, 4.5, 7, 11)
}), rI.inversePrimary = rA.fromPalette({
	name: "inverse_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 40 : 80,
	background: (e) => rI.inverseSurface,
	contrastCurve: new rT(3, 4.5, 7, 7)
}), rI.secondary = rA.fromPalette({
	name: "secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new rD(rI.secondaryContainer, rI.secondary, 10, "nearer", !1)
}), rI.onSecondary = rA.fromPalette({
	name: "on_secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => rO(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
	background: (e) => rI.secondary,
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.secondaryContainer = rA.fromPalette({
	name: "secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => {
		let t = e.isDark ? 30 : 90;
		return rO(e) ? e.isDark ? 30 : 85 : r$(e) ? function(e, t, r, a) {
			let n = r, i = rP.from(e, t, r);
			if (i.chroma < t) {
				let r = i.chroma;
				for (; i.chroma < t;) {
					n += a ? -1 : 1;
					let o = rP.from(e, t, n);
					if (r > o.chroma || .4 > Math.abs(o.chroma - t)) break;
					Math.abs(o.chroma - t) < Math.abs(i.chroma - t) && (i = o), r = Math.max(r, o.chroma);
				}
			}
			return n;
		}(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark) : t;
	},
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.secondaryContainer, rI.secondary, 10, "nearer", !1)
}), rI.onSecondaryContainer = rA.fromPalette({
	name: "on_secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => rO(e) ? e.isDark ? 90 : 10 : r$(e) ? rA.foregroundTone(rI.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => rI.secondaryContainer,
	contrastCurve: new rT(3, 4.5, 7, 11)
}), rI.tertiary = rA.fromPalette({
	name: "tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => rO(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new rD(rI.tertiaryContainer, rI.tertiary, 10, "nearer", !1)
}), rI.onTertiary = rA.fromPalette({
	name: "on_tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => rO(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => rI.tertiary,
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.tertiaryContainer = rA.fromPalette({
	name: "tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => {
		if (rO(e)) return e.isDark ? 60 : 49;
		if (!r$(e)) return e.isDark ? 30 : 90;
		let t = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
		return r_.fixIfDisliked(t).tone;
	},
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.tertiaryContainer, rI.tertiary, 10, "nearer", !1)
}), rI.onTertiaryContainer = rA.fromPalette({
	name: "on_tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => rO(e) ? 100 * !e.isDark : r$(e) ? rA.foregroundTone(rI.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => rI.tertiaryContainer,
	contrastCurve: new rT(3, 4.5, 7, 11)
}), rI.error = rA.fromPalette({
	name: "error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new rD(rI.errorContainer, rI.error, 10, "nearer", !1)
}), rI.onError = rA.fromPalette({
	name: "on_error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 20 : 100,
	background: (e) => rI.error,
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.errorContainer = rA.fromPalette({
	name: "error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.errorContainer, rI.error, 10, "nearer", !1)
}), rI.onErrorContainer = rA.fromPalette({
	name: "on_error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => rO(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
	background: (e) => rI.errorContainer,
	contrastCurve: new rT(3, 4.5, 7, 11)
}), rI.primaryFixed = rA.fromPalette({
	name: "primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => rO(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.primaryFixed, rI.primaryFixedDim, 10, "lighter", !0)
}), rI.primaryFixedDim = rA.fromPalette({
	name: "primary_fixed_dim",
	palette: (e) => e.primaryPalette,
	tone: (e) => rO(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.primaryFixed, rI.primaryFixedDim, 10, "lighter", !0)
}), rI.onPrimaryFixed = rA.fromPalette({
	name: "on_primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => rO(e) ? 100 : 10,
	background: (e) => rI.primaryFixedDim,
	secondBackground: (e) => rI.primaryFixed,
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.onPrimaryFixedVariant = rA.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (e) => e.primaryPalette,
	tone: (e) => rO(e) ? 90 : 30,
	background: (e) => rI.primaryFixedDim,
	secondBackground: (e) => rI.primaryFixed,
	contrastCurve: new rT(3, 4.5, 7, 11)
}), rI.secondaryFixed = rA.fromPalette({
	name: "secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => rO(e) ? 80 : 90,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.secondaryFixed, rI.secondaryFixedDim, 10, "lighter", !0)
}), rI.secondaryFixedDim = rA.fromPalette({
	name: "secondary_fixed_dim",
	palette: (e) => e.secondaryPalette,
	tone: (e) => rO(e) ? 70 : 80,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.secondaryFixed, rI.secondaryFixedDim, 10, "lighter", !0)
}), rI.onSecondaryFixed = rA.fromPalette({
	name: "on_secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => 10,
	background: (e) => rI.secondaryFixedDim,
	secondBackground: (e) => rI.secondaryFixed,
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.onSecondaryFixedVariant = rA.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (e) => e.secondaryPalette,
	tone: (e) => rO(e) ? 25 : 30,
	background: (e) => rI.secondaryFixedDim,
	secondBackground: (e) => rI.secondaryFixed,
	contrastCurve: new rT(3, 4.5, 7, 11)
}), rI.tertiaryFixed = rA.fromPalette({
	name: "tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => rO(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.tertiaryFixed, rI.tertiaryFixedDim, 10, "lighter", !0)
}), rI.tertiaryFixedDim = rA.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => rO(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => rI.highestSurface(e),
	contrastCurve: new rT(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new rD(rI.tertiaryFixed, rI.tertiaryFixedDim, 10, "lighter", !0)
}), rI.onTertiaryFixed = rA.fromPalette({
	name: "on_tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => rO(e) ? 100 : 10,
	background: (e) => rI.tertiaryFixedDim,
	secondBackground: (e) => rI.tertiaryFixed,
	contrastCurve: new rT(4.5, 7, 11, 21)
}), rI.onTertiaryFixedVariant = rA.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => rO(e) ? 90 : 30,
	background: (e) => rI.tertiaryFixedDim,
	secondBackground: (e) => rI.tertiaryFixed,
	contrastCurve: new rT(3, 4.5, 7, 11)
});
var rF = class {
	constructor(e) {
		this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = rP.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = rS.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(e, t, r) {
		let a = e.hue;
		if (t.length !== r.length) throw Error(`mismatch between hue length ${t.length} & rotations ${r.length}`);
		if (1 === r.length) return rl(e.hue + r[0]);
		let n = t.length;
		for (let e = 0; e <= n - 2; e++) {
			let n = t[e], i = t[e + 1];
			if (n < a && a < i) return rl(a + r[e]);
		}
		return a;
	}
	getArgb(e) {
		return e.getArgb(this);
	}
	getHct(e) {
		return e.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(rI.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(rI.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(rI.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(rI.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(rI.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(rI.background);
	}
	get onBackground() {
		return this.getArgb(rI.onBackground);
	}
	get surface() {
		return this.getArgb(rI.surface);
	}
	get surfaceDim() {
		return this.getArgb(rI.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(rI.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(rI.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(rI.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(rI.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(rI.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(rI.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(rI.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(rI.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(rI.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(rI.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(rI.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(rI.outline);
	}
	get outlineVariant() {
		return this.getArgb(rI.outlineVariant);
	}
	get shadow() {
		return this.getArgb(rI.shadow);
	}
	get scrim() {
		return this.getArgb(rI.scrim);
	}
	get surfaceTint() {
		return this.getArgb(rI.surfaceTint);
	}
	get primary() {
		return this.getArgb(rI.primary);
	}
	get onPrimary() {
		return this.getArgb(rI.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(rI.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(rI.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(rI.inversePrimary);
	}
	get secondary() {
		return this.getArgb(rI.secondary);
	}
	get onSecondary() {
		return this.getArgb(rI.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(rI.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(rI.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(rI.tertiary);
	}
	get onTertiary() {
		return this.getArgb(rI.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(rI.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(rI.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(rI.error);
	}
	get onError() {
		return this.getArgb(rI.onError);
	}
	get errorContainer() {
		return this.getArgb(rI.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(rI.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(rI.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(rI.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(rI.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(rI.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(rI.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(rI.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(rI.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(rI.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(rI.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(rI.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(rI.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(rI.onTertiaryFixedVariant);
	}
}, rL = class e {
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
		let a = new e(r.primary, t);
		return r.secondary && (a.a2 = new e(r.secondary, t).a1), r.tertiary && (a.a3 = new e(r.tertiary, t).a1), r.error && (a.error = new e(r.error, t).a1), r.neutral && (a.n1 = new e(r.neutral, t).n1), r.neutralVariant && (a.n2 = new e(r.neutralVariant, t).n2), a;
	}
	constructor(e, t) {
		let r = rP.fromInt(e), a = r.hue, n = r.chroma;
		t ? (this.a1 = rS.fromHueAndChroma(a, n), this.a2 = rS.fromHueAndChroma(a, n / 3), this.a3 = rS.fromHueAndChroma(a + 60, n / 2), this.n1 = rS.fromHueAndChroma(a, Math.min(n / 12, 4)), this.n2 = rS.fromHueAndChroma(a, Math.min(n / 6, 8))) : (this.a1 = rS.fromHueAndChroma(a, Math.max(48, n)), this.a2 = rS.fromHueAndChroma(a, 16), this.a3 = rS.fromHueAndChroma(a + 60, 24), this.n1 = rS.fromHueAndChroma(a, 4), this.n2 = rS.fromHueAndChroma(a, 8)), this.error = rS.fromHueAndChroma(25, 84);
	}
}, rB = class e extends rF {
	constructor(t, r, a) {
		super({
			sourceColorArgb: t.toInt(),
			variant: e7.EXPRESSIVE,
			contrastLevel: a,
			isDark: r,
			primaryPalette: rS.fromHueAndChroma(rl(t.hue + 240), 40),
			secondaryPalette: rS.fromHueAndChroma(rF.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: rS.fromHueAndChroma(rF.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: rS.fromHueAndChroma(t.hue + 15, 8),
			neutralVariantPalette: rS.fromHueAndChroma(t.hue + 15, 12)
		});
	}
};
rB.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
], rB.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
], rB.tertiaryRotations = [
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
var rV = class e extends rF {
	constructor(t, r, a) {
		super({
			sourceColorArgb: t.toInt(),
			variant: e7.VIBRANT,
			contrastLevel: a,
			isDark: r,
			primaryPalette: rS.fromHueAndChroma(t.hue, 200),
			secondaryPalette: rS.fromHueAndChroma(rF.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: rS.fromHueAndChroma(rF.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: rS.fromHueAndChroma(t.hue, 10),
			neutralVariantPalette: rS.fromHueAndChroma(t.hue, 12)
		});
	}
};
rV.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
], rV.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
], rV.tertiaryRotations = [
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
var rH = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: !0
};
function rE(e, t) {
	return e.score > t.score ? -1 : +(e.score < t.score);
}
var rz = class e {
	constructor() {}
	static score(t, r) {
		let { desired: a, fallbackColorARGB: n, filter: i } = {
			...rH,
			...r
		}, o = [], s = Array(360).fill(0), l = 0;
		for (let [e, r] of t.entries()) {
			let t = rP.fromInt(e);
			o.push(t);
			let a = Math.floor(t.hue);
			s[a] += r, l += r;
		}
		let u = Array(360).fill(0);
		for (let e = 0; e < 360; e++) {
			let t = s[e] / l;
			for (let r = e - 14; r < e + 16; r++) {
				let e = rs(r);
				u[e] += t;
			}
		}
		let c = [];
		for (let t of o) {
			let r = u[rs(Math.round(t.hue))];
			if (i && (t.chroma < e.CUTOFF_CHROMA || r <= e.CUTOFF_EXCITED_PROPORTION)) continue;
			let a = 100 * r * e.WEIGHT_PROPORTION, n = t.chroma < e.TARGET_CHROMA ? e.WEIGHT_CHROMA_BELOW : e.WEIGHT_CHROMA_ABOVE, o = a + (t.chroma - e.TARGET_CHROMA) * n;
			c.push({
				hct: t,
				score: o
			});
		}
		c.sort(rE);
		let h = [];
		for (let e = 90; e >= 15; e--) {
			for (let { hct: t } of (h.length = 0, c)) if (h.find((r) => 180 - Math.abs(Math.abs(t.hue - r.hue) - 180) < e) || h.push(t), h.length >= a) break;
			if (h.length >= a) break;
		}
		let d = [];
		for (let e of (0 === h.length && d.push(n), h)) d.push(e.toInt());
		return d;
	}
};
function rW(e) {
	let t = 3 === (e = e.replace("#", "")).length, r = 6 === e.length, a = 8 === e.length;
	if (!t && !r && !a) throw Error("unexpected hex " + e);
	let n = 0, i = 0, o = 0;
	return t ? (n = rj(e.slice(0, 1).repeat(2)), i = rj(e.slice(1, 2).repeat(2)), o = rj(e.slice(2, 3).repeat(2))) : r ? (n = rj(e.slice(0, 2)), i = rj(e.slice(2, 4)), o = rj(e.slice(4, 6))) : a && (n = rj(e.slice(2, 4)), i = rj(e.slice(4, 6)), o = rj(e.slice(6, 8))), (-16777216 | (255 & n) << 16 | (255 & i) << 8 | 255 & o) >>> 0;
}
function rj(e) {
	return parseInt(e, 16);
}
rz.TARGET_CHROMA = 48, rz.WEIGHT_PROPORTION = .7, rz.WEIGHT_CHROMA_ABOVE = .3, rz.WEIGHT_CHROMA_BELOW = .1, rz.CUTOFF_CHROMA = 5, rz.CUTOFF_EXCITED_PROPORTION = .01;
var rN = {
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
}, rq = (e) => {
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
}, rU = (e) => ({
	primary: !0,
	secondary: !0,
	tertiary: !0,
	error: !0,
	warning: !0,
	success: !0
})[e], rG = class e {
	static toHEX = (e) => `#${rq(e).map((e) => c(e.toString(16), 2, "0")).join("")}`;
	static createRoleColorRuleBuilder(e) {
		let t = {}, r = new Proxy({}, { get: (a, n) => "build" == n ? () => t : (a, n) => (t[`${a}${e ? `:${e}` : ""}`] = n, r) });
		return r;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get: (e, t) => (e) => [t, e] });
	}
	static fromColors = (t) => {
		let { primary: r, secondary: a, tertiary: n, neutral: i, neutralVariant: o, error: s,...l } = t, u = rL.contentFromColors({
			primary: rW(r),
			secondary: a ? rW(a) : void 0,
			tertiary: n ? rW(n) : void 0,
			error: s ? rW(s) : void 0
		});
		return i && (u.n1 = rS.fromHueAndChroma(rW(i), 4)), o && (u.n2 = rS.fromHueAndChroma(rW(o), 8)), new e({
			primary: u.a1,
			secondary: u.a2,
			tertiary: u.a3,
			neutral: u.n1,
			neutralVariant: u.n2,
			error: u.error,
			...k(l, (e) => rS.fromInt(rW(e)))
		});
	};
	constructor(e) {
		this.seeds = e;
	}
	normalizeRoleRules(t = {}) {
		let r = e.createRoleColorSourcePicker(), a = e.createRoleColorRuleBuilder().rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(87)).rule("outline-variant", r.neutralVariant(80)).rule("surface", r.neutral(99)).rule("on-surface", r.neutral(10)).rule("surface-variant", r.neutralVariant(90)).rule("on-surface-variant", r.neutralVariant(30)).rule("surface-dim", r.neutral(87)).rule("surface-bright", r.neutral(98)).rule("surface-container-lowest", r.neutral(100)).rule("surface-container-low", r.neutral(96)).rule("surface-container", r.neutral(94)).rule("surface-container-high", r.neutral(92)).rule("surface-container-highest", r.neutral(90)).rule("inverse-surface", r.neutral(20)).rule("inverse-on-surface", r.neutral(95)).rule("inverse-primary", r.primary(80)), n = e.createRoleColorRuleBuilder("dark").rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(60)).rule("outline-variant", r.neutralVariant(30)).rule("surface", r.neutral(10)).rule("on-surface", r.neutral(90)).rule("surface-variant", r.neutralVariant(30)).rule("on-surface-variant", r.neutralVariant(80)).rule("surface-dim", r.neutral(6)).rule("surface-bright", r.neutral(24)).rule("surface-container-lowest", r.neutral(4)).rule("surface-container-low", r.neutral(10)).rule("surface-container", r.neutral(12)).rule("surface-container-high", r.neutral(17)).rule("surface-container-highest", r.neutral(22)).rule("inverse-surface", r.neutral(90)).rule("inverse-on-surface", r.neutral(20)).rule("inverse-primary", r.primary(40));
		for (let e in this.seeds) e.startsWith("neutral") || (a = a.rule(e, r[e](40)).rule(`on-${e}`, r[e](100)).rule(`${e}-container`, r[e](90)).rule(`on-${e}-container`, r[e](10)), n = n.rule(e, r[e](80)).rule(`on-${e}`, r[e](20)).rule(`${e}-container`, r[e](30)).rule(`on-${e}-container`, r[e](90)));
		return {
			...a.build(),
			...n.build(),
			...t
		};
	}
	getThemeRoleColors(e) {
		let t = {}, r = {};
		for (let [a, [n, i]] of Object.entries(e)) if (this.seeds[n]) {
			if (a.endsWith(":dark")) {
				r[a.split(":")[0]] = rN[i] ? `${String(n)}.${i}` : this.seeds[n]?.tone(i);
				continue;
			}
			t[a] = rN[i] ? `${String(n)}.${i}` : this.seeds[n]?.tone(i);
		}
		return [t, r];
	}
	toDesignTokens(e = {}) {
		let t = this.normalizeRoleRules(e), [r, a] = this.getThemeRoleColors(t), n = {}, i = {};
		for (let e in r) if (n[`${e}`] = {
			_default: P(r[e]) ? rq(r[e]) : r[e],
			_dark: P(a[e]) ? rq(a[e]) : a[e]
		}, rU(e) && (i[`${e}`] = t0.mixin({
			bgColor: `sys.${e}`,
			color: `sys.on-${e}`
		}), i[`${e}-container`] = t0.mixin({
			bgColor: `sys.${e}-container`,
			color: `sys.on-${e}-container`
		})), e.startsWith("surface")) {
			if (e.includes("container")) {
				i[`${e}`] = t0.mixin({
					bgColor: `sys.${e}`,
					color: "sys.on-surface"
				});
				continue;
			}
			i[`${e}`] = t0.mixin({
				bgColor: `sys.${e}`,
				color: "sys.on-surface"
			}), i[`on-${e}`] = t0.mixin({
				bgColor: `sys.on-${e}`,
				color: "sys.inverse-on-surface"
			});
		}
		return {
			color: t0.color({
				...k(this.seeds, (e) => Object.keys(rN).reduce((t, r) => Object.assign(t, { [r]: rq(e.tone(parseInt(r))) }), {})),
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
				sys: n
			}),
			containerStyle: t0.customMixin("containerStyle", { sys: i })
		};
	}
};
let rY = t0.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
}), rK = {
	font: t0.font({
		brand: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		plain: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace"
	}),
	fontWeight: t0.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: t0.customMixin("textStyle", { sys: {
		"display-large": t0.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": t0.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": t0.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": t0.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": t0.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": t0.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": t0.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": t0.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": t0.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": t0.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": t0.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": t0.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": t0.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": t0.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": t0.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var rX = rG.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
let rJ = {
	...rK,
	...rn,
	...re,
	rounded: rY,
	...rX.toDesignTokens({})
}, rZ = t7.create(rJ, { varPrefix: "vk" }), rQ = S(() => rZ, { name: "Theme" });
var r0 = function(e, t, r) {
	for (var a = 0, n = 0; a = n, n = N(), 38 === a && 12 === n && (t[r] = 1), !X(n);) ea();
	return Q(e, q);
}, r1 = function(e, t) {
	var r = -1, a = 44;
	do
		switch (X(a)) {
			case 0:
				38 === a && 12 === N() && (t[r] = 1), e[r] += r0(q - 1, t, r);
				break;
			case 2:
				e[r] += K(a);
				break;
			case 4: if (44 === a) {
				e[++r] = 58 === N() ? "&\f" : "", t[r] = e[r].length;
				break;
			}
			default: e[r] += E(a);
		}
	while (a = ea());
	return e;
}, r2 = /* @__PURE__ */ new WeakMap(), r4 = function(e) {
	if ("rule" === e.type && e.parent && !(e.length < 1)) {
		for (var t = e.value, r = e.parent, a = e.column === r.column && e.line === r.line; "rule" !== r.type;) if (!(r = r.parent)) return;
		if ((1 !== e.props.length || 58 === t.charCodeAt(0) || r2.get(r)) && !a) {
			r2.set(e, !0);
			for (var n = [], i = j(r1(Z(t), n)), o = r.props, s = 0, l = 0; s < i.length; s++) for (var u = 0; u < o.length; u++, l++) e.props[l] = n[s] ? i[s].replace(/&\f/g, o[u]) : o[u] + " " + i[s];
		}
	}
}, r5 = function(e) {
	if ("decl" === e.type) {
		var t = e.value;
		108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
	}
}, r3 = [function(e, t, r, a) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case I:
			e.return = function e(t, r) {
				switch (en(t, r)) {
					case 5103: return B + "print-" + t + t;
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
					case 3829: return B + t + t;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756: return B + t + H + t + L + t + t;
					case 6828:
					case 4268: return B + t + L + t + t;
					case 6165: return B + t + L + "flex-" + t + t;
					case 5187: return B + t + eo(t, /(\w+).+(:[^]+)/, B + "box-$1$2" + L + "flex-$1$2") + t;
					case 5443: return B + t + L + "flex-item-" + eo(t, /flex-|-self/, "") + t;
					case 4675: return B + t + L + "flex-line-pack" + eo(t, /align-content|flex-|-self/, "") + t;
					case 5548: return B + t + L + eo(t, "shrink", "negative") + t;
					case 5292: return B + t + L + eo(t, "basis", "preferred-size") + t;
					case 6060: return B + "box-" + eo(t, "-grow", "") + B + t + L + eo(t, "grow", "positive") + t;
					case 4554: return B + eo(t, /([^-])(transform)/g, "$1" + B + "$2") + t;
					case 6187: return eo(eo(eo(t, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), t, "") + t;
					case 5495:
					case 3959: return eo(t, /(image-set\([^]*)/, B + "$1$`$1");
					case 4968: return eo(eo(t, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + L + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + B + t + t;
					case 4095:
					case 3583:
					case 4068:
					case 2532: return eo(t, /(.+)-inline(.+)/, B + "$1$2") + t;
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
						if (V(t) - 1 - r > 6) switch (G(t, r + 1)) {
							case 109: if (45 !== G(t, r + 4)) break;
							case 102: return eo(t, /(.+:)(.+)-([^]+)/, "$1" + B + "$2-$3$1" + H + (108 == G(t, r + 3) ? "$3" : "$2-$3")) + t;
							case 115: return ~es(t, "stretch") ? e(eo(t, "stretch", "fill-available"), r) + t : t;
						}
						break;
					case 4949: if (115 !== G(t, r + 1)) break;
					case 6444:
						switch (G(t, V(t) - 3 - (~es(t, "!important") && 10))) {
							case 107: return eo(t, ":", ":" + B) + t;
							case 101: return eo(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + B + (45 === G(t, 14) ? "inline-" : "") + "box$3$1" + B + "$2$3$1" + L + "$2box$3") + t;
						}
						break;
					case 5936:
						switch (G(t, r + 11)) {
							case 114: return B + t + L + eo(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
							case 108: return B + t + L + eo(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
							case 45: return B + t + L + eo(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
						}
						return B + t + L + t + t;
				}
				return t;
			}(e.value, e.length);
			break;
		case ei: return ee([et(e, { value: eo(e.value, "@", "@" + B) })], a);
		case F: if (e.length) return U(e.props, function(t) {
			switch (W(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return ee([et(e, { props: [eo(t, /:(read-\w+)/, ":" + H + "$1")] })], a);
				case "::placeholder": return ee([
					et(e, { props: [eo(t, /:(plac\w+)/, ":" + B + "input-$1")] }),
					et(e, { props: [eo(t, /:(plac\w+)/, ":" + H + "$1")] }),
					et(e, { props: [eo(t, /:(plac\w+)/, L + "input-$1")] })
				], a);
			}
			return "";
		});
	}
}], r8 = function(e) {
	var t, r, a = e.key;
	if ("css" === a) {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var i = e.stylisPlugins || r3, o = {}, s = [];
	t = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + a + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) o[t[r]] = !0;
		s.push(e);
	});
	var l = er([r4, r5].concat(i, [Y, J(function(e) {
		r.insert(e);
	})])), u = {
		key: a,
		sheet: new ev({
			key: a,
			container: t,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: o,
		registered: {},
		insert: function(e, t, a, n) {
			r = a, ee(z(e ? e + "{" + t.styles + "}" : t.styles), l), n && (u.inserted[t.name] = !0);
		}
	};
	return u.sheet.hydrate(s), u;
}, r6 = function(e, t, r) {
	var a = e.key + "-" + t.name;
	!1 === r && void 0 === e.registered[a] && (e.registered[a] = t.styles);
}, r9 = function(e, t, r) {
	r6(e, t, r);
	var a = e.key + "-" + t.name;
	if (void 0 === e.inserted[t.name]) {
		var n = t;
		do
			e.insert(t === n ? "." + a : "", n, e.sheet, !0), n = n.next;
		while (void 0 !== n);
	}
};
let r7 = S(() => r8({ key: "css" }), { name: "Cache" }), ae = (e) => (t) => {
	t.serialized && (t.withoutScoping ? e.insert("", t.serialized, e.sheet, !0) : r9(e, t.serialized, t.isStringTag ?? !0));
};
var at = r({
	sx: $(),
	component: $().optional().default("div")
}, (e, { slots: t, expose: r }) => {
	let a = rQ.use(), n = r7.use(), i = a.unstable_css(n, e.sx ?? {}), o = ae(n);
	eZ(() => {
		o({
			serialized: i,
			isStringTag: !0
		});
	});
	let s = T(null);
	return r({ [x]: s }), () => eD(e.component ?? "div", {
		ref: s,
		class: "0" !== i.name ? `${n.key}-${i.name}` : "",
		children: t
	});
});
function ar(...e) {
	let t, a = "div", n = {}, o = {};
	for (let r of e) {
		if (l(r)) {
			t = r;
			continue;
		}
		if (D(r) || u(r)) {
			a = r;
			continue;
		}
		h(t) && i(r) ? n = r : o = r;
	}
	return t ??= (e, t) => (r) => {
		let a = {};
		for (let t in e) "component" !== t && "sx" !== t && e[t] && (a[`data-${t}`] = e[t]);
		return eD(r, {
			...a,
			children: t.slots
		});
	}, (e) => {
		let i = Object.assign(r({
			...n,
			sx: $().optional(),
			component: $().optional()
		}, (r, n) => {
			let o = rQ.use(), s = r7.use(), l = ae(s), u = e0(""), c = o.unstable_css(s, e), h = () => ("0" !== c.name ? `${s.key}-${c.name}${u.value}` : `${u.value}`) + (i.name ? ` ${i.name}` : "");
			if (a.__styled) {
				let e = o.unstable_css(s, r.sx ?? {});
				"0" !== e.name && (u.value = ` ${s.key}-${e.name}`), eZ(() => {
					l({
						serialized: c,
						isStringTag: !0
					}), l({
						serialized: e,
						isStringTag: !0
					});
				});
			} else eL(() => {
				l({
					serialized: c,
					isStringTag: !0
				});
			});
			let d = t(r, n), f = T(null);
			return n.expose({ [x]: f }), () => {
				if (a.__styled) {
					let e = d(a);
					return e ? eG(e, {
						component: r.component,
						ref: f,
						class: h()
					}) : null;
				}
				let e = d(at);
				return e ? eG(e, {
					component: r.component || a,
					sx: r.sx,
					ref: f,
					class: h()
				}) : null;
			};
		}, o), { __styled: !0 });
		return i.toString = () => `.${i.name}`, i;
	};
}
var aa = r(({ styles: e }) => {
	let t = rQ.use(), r = r7.use(), a = ae(r), n = t.unstable_css(r, D(e) ? { "&": e } : e);
	return eL(() => {
		a({
			serialized: n,
			withoutScoping: !0
		});
	}), () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
}), an = r(() => {
	let e = rQ.use().rootCSSVars;
	return () => eD(aa, { styles: {
		":host, :root, [data-theme]": e,
		"*, *::after, *::before": { boxSizing: "border-box" },
		html: { fontSize: "10px" },
		a: { color: "inherit" },
		body: { textStyle: "sys.body-medium" }
	} });
}, { displayName: "CSSReset" });
let ai = S(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" });
var ao = S(() => new as(ez(null), ez(null), () => !1), { name: "Overlay" }), as = class {
	children = [];
	constructor(e, t, r) {
		this.triggerRef = e, this.contentRef = t, this.isOpen = r;
	}
	add = (e) => (this.children = [...this.children, e], () => {
		this.children = this.children.filter((t) => t !== e);
	});
	isClickInside = (e) => {
		for (let t of this.children) if (t.isClickInside(e)) return !0;
		let t = e5(this.triggerRef), r = e5(this.contentRef);
		return t && (t === e.target || e.composedPath().includes(t)) || r && (r === e.target || e.composedPath().includes(r));
	};
	topmost() {
		return 0 === this.children.filter((e) => e.isOpen()).length;
	}
}, al = r((e, { slots: t, attrs: r, emit: a }) => {
	let n = e.contentRef || ez(null), i = new as(e.triggerRef ?? ez(null), n, () => !!e.isOpen), o = ai.use();
	return eq(ao.use().add(i)), window && m(y(n, "value"), w((e) => {
		if (!e) return;
		let t = (e) => {
			i.isClickInside(e) || a("click-outside", e);
		};
		return window.addEventListener("pointerdown", t), () => {
			window.removeEventListener("pointerdown", t);
		};
	}), w((e) => {
		if (!e) return;
		let t = (e) => {
			"Escape" === e.key && i.topmost() && a("esc-keydown", e);
		};
		return window.addEventListener("keydown", t), () => {
			window.removeEventListener("keydown", t);
		};
	}), f()), () => {
		let s = e.isOpen ? eG(eD("div", {
			...r,
			ref: n,
			style: e.style,
			children: eD(ao, {
				value: i,
				children: t.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			a("content-before-mount");
		} }) : null;
		return eD(eX, {
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
});
function au(e) {
	let t = eJ(e), r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0, n = e2(e), i = n ? e.offsetWidth : r, o = n ? e.offsetHeight : a, s = ey(r) !== i || ey(a) !== o;
	return s && (r = i, a = o), {
		width: r,
		height: a,
		$: s
	};
}
function ac(e) {
	return eF(e) ? e : e.contextElement;
}
function ah(e) {
	let t = ac(e);
	if (!e2(t)) return ej(1);
	let r = t.getBoundingClientRect(), { width: a, height: n, $: i } = au(t), o = (i ? ey(r.width) : r.width) / a, s = (i ? ey(r.height) : r.height) / n;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var ad = ej(0);
function af(e) {
	let t = eQ(e);
	return ef() && t.visualViewport ? {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	} : ad;
}
function ag(e, t, r, a) {
	var n;
	void 0 === t && (t = !1), void 0 === r && (r = !1);
	let i = e.getBoundingClientRect(), o = ac(e), s = ej(1);
	t && (a ? eF(a) && (s = ah(a)) : s = ah(e));
	let l = (void 0 === (n = r) && (n = !1), a && (!n || a === eQ(o)) && n) ? af(o) : ej(0), u = (i.left + l.x) / s.x, c = (i.top + l.y) / s.y, h = i.width / s.x, d = i.height / s.y;
	if (o) {
		let e = eQ(o), t = a && eF(a) ? eQ(a) : a, r = e, n = eY(r);
		for (; n && a && t !== r;) {
			let e = ah(n), t = n.getBoundingClientRect(), a = eJ(n), i = t.left + (n.clientLeft + parseFloat(a.paddingLeft)) * e.x, o = t.top + (n.clientTop + parseFloat(a.paddingTop)) * e.y;
			u *= e.x, c *= e.y, h *= e.x, d *= e.y, u += i, c += o, n = eY(r = eQ(n));
		}
	}
	return eg({
		width: h,
		height: d,
		x: u,
		y: c
	});
}
function am(e, t) {
	let r = eW(e).scrollLeft;
	return t ? t.left + r : ag(eH(e)).left + r;
}
function ap(e, t) {
	let r = e.getBoundingClientRect();
	return {
		x: r.left + t.scrollLeft - am(e, r),
		y: r.top + t.scrollTop
	};
}
var ay = new Set(["absolute", "fixed"]);
function ab(e, t, r) {
	let a;
	if ("viewport" === t) a = function(e, t) {
		let r = eQ(e), a = eH(e), n = r.visualViewport, i = a.clientWidth, o = a.clientHeight, s = 0, l = 0;
		if (n) {
			i = n.width, o = n.height;
			let e = ef();
			(!e || e && "fixed" === t) && (s = n.offsetLeft, l = n.offsetTop);
		}
		let u = am(a);
		if (u <= 0) {
			let e = a.ownerDocument, t = e.body, r = getComputedStyle(t), n = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0, o = Math.abs(a.clientWidth - t.clientWidth - n);
			o <= 25 && (i -= o);
		} else u <= 25 && (i += u);
		return {
			width: i,
			height: o,
			x: s,
			y: l
		};
	}(e, r);
	else if ("document" === t) a = function(e) {
		let t = eH(e), r = eW(e), a = e.ownerDocument.body, n = ek(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), i = ek(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight), o = -r.scrollLeft + am(e), s = -r.scrollTop;
		return "rtl" === eJ(a).direction && (o += ek(t.clientWidth, a.clientWidth) - n), {
			width: n,
			height: i,
			x: o,
			y: s
		};
	}(eH(e));
	else if (eF(t)) a = function(e, t) {
		let r = ag(e, !0, "fixed" === t), a = r.top + e.clientTop, n = r.left + e.clientLeft, i = e2(e) ? ah(e) : ej(1);
		return {
			width: e.clientWidth * i.x,
			height: e.clientHeight * i.y,
			x: n * i.x,
			y: a * i.y
		};
	}(t, r);
	else {
		let r = af(e);
		a = {
			x: t.x - r.x,
			y: t.y - r.y,
			width: t.width,
			height: t.height
		};
	}
	return eg(a);
}
function ax(e) {
	return "static" === eJ(e).position;
}
function av(e, t) {
	if (!e2(e) || "fixed" === eJ(e).position) return null;
	if (t) return t(e);
	let r = e.offsetParent;
	return eH(e) === r && (r = r.ownerDocument.body), r;
}
function aw(e, t) {
	let r = eQ(e);
	if (eA(e)) return r;
	if (!e2(e)) {
		let t = eI(e);
		for (; t && !e_(t);) {
			if (eF(t) && !ax(t)) return t;
			t = eI(t);
		}
		return r;
	}
	let a = av(e, t);
	for (; a && e1(a) && ax(a);) a = av(a, t);
	return a && e_(a) && ax(a) && !e4(a) ? r : a || eB(e) || r;
}
var ak = async function(e) {
	let t = this.getOffsetParent || aw, r = this.getDimensions, a = await r(e.floating);
	return {
		reference: function(e, t, r) {
			let a = e2(t), n = eH(t), i = "fixed" === r, o = ag(e, !0, i, t), s = {
				scrollLeft: 0,
				scrollTop: 0
			}, l = ej(0);
			if (a || !a && !i) if (("body" !== eU(t) || eh(n)) && (s = eW(t)), a) {
				let e = ag(t, !0, i, t);
				l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop;
			} else n && (l.x = am(n));
			i && !a && n && (l.x = am(n));
			let u = !n || a || i ? ej(0) : ap(n, s);
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
			width: a.width,
			height: a.height
		}
	};
}, aC = {
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { elements: t, rect: r, offsetParent: a, strategy: n } = e, i = "fixed" === n, o = eH(a), s = !!t && eA(t.floating);
		if (a === o || s && i) return r;
		let l = {
			scrollLeft: 0,
			scrollTop: 0
		}, u = ej(1), c = ej(0), h = e2(a);
		if ((h || !h && !i) && (("body" !== eU(a) || eh(o)) && (l = eW(a)), e2(a))) {
			let e = ag(a);
			u = ah(a), c.x = e.x + a.clientLeft, c.y = e.y + a.clientTop;
		}
		let d = !o || h || i ? ej(0) : ap(o, l);
		return {
			width: r.width * u.x,
			height: r.height * u.y,
			x: r.x * u.x - l.scrollLeft * u.x + c.x + d.x,
			y: r.y * u.y - l.scrollTop * u.y + c.y + d.y
		};
	},
	getDocumentElement: eH,
	getClippingRect: function(e) {
		let { element: t, boundary: r, rootBoundary: a, strategy: n } = e, i = [..."clippingAncestors" === r ? eA(t) ? [] : function(e, t) {
			let r = t.get(e);
			if (r) return r;
			let a = eE(e, [], !1).filter((e) => eF(e) && "body" !== eU(e)), n = null, i = "fixed" === eJ(e).position, o = i ? eI(e) : e;
			for (; eF(o) && !e_(o);) {
				let t = eJ(o), r = e4(o);
				r || "fixed" !== t.position || (n = null), (i ? !r && !n : !r && "static" === t.position && !!n && ay.has(n.position) || eh(o) && !r && function e(t, r) {
					let a = eI(t);
					return !(a === r || !eF(a) || e_(a)) && ("fixed" === eJ(a).position || e(a, r));
				}(e, o)) ? a = a.filter((e) => e !== o) : n = t, o = eI(o);
			}
			return t.set(e, a), a;
		}(t, this._c) : [].concat(r), a], o = i[0], s = i.reduce((e, r) => {
			let a = ab(t, r, n);
			return e.top = ek(a.top, e.top), e.right = eP(a.right, e.right), e.bottom = eP(a.bottom, e.bottom), e.left = ek(a.left, e.left), e;
		}, ab(t, o, n));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	getOffsetParent: aw,
	getElementRects: ak,
	getClientRects: function(e) {
		return Array.from(e.getClientRects());
	},
	getDimensions: function(e) {
		let { width: t, height: r } = au(e);
		return {
			width: t,
			height: r
		};
	},
	getScale: ah,
	isElement: eF,
	isRTL: function(e) {
		return "rtl" === eJ(e).direction;
	}
};
function aP(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
var aM = eu, a_ = r((e, { slots: t, emit: r, attrs: n }) => {
	let i = C(null), o = C(null);
	return m(a([i, o]), w(([t, r]) => {
		if (r && t) {
			let a = async () => {
				r.style.position = "absolute";
				let a = await ((e, t, r) => {
					let a = /* @__PURE__ */ new Map(), n = {
						platform: aC,
						...r
					}, i = {
						...n.platform,
						_c: a
					};
					return ed(e, t, {
						...n,
						platform: i
					});
				})(t, r, {
					placement: e.placement ?? "bottom",
					middleware: [
						...e.modifiers ?? [],
						...e.middleware ?? [],
						eC(),
						eN()
					]
				});
				Object.assign(r.style, {
					left: `${a.x}px`,
					top: `${a.y}px`
				}), r.setAttribute("data-placement", a.placement);
			}, n = function(e, t, r, a) {
				let n;
				void 0 === a && (a = {});
				let { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: s = "function" == typeof ResizeObserver, layoutShift: l = "function" == typeof IntersectionObserver, animationFrame: u = !1 } = a, c = ac(e), h = i || o ? [...c ? eE(c) : [], ...eE(t)] : [];
				h.forEach((e) => {
					i && e.addEventListener("scroll", r, { passive: !0 }), o && e.addEventListener("resize", r);
				});
				let d = c && l ? function(e, t) {
					let r, a = null, n = eH(e);
					function i() {
						var e;
						clearTimeout(r), null == (e = a) || e.disconnect(), a = null;
					}
					return function o(s, l) {
						void 0 === s && (s = !1), void 0 === l && (l = 1), i();
						let u = e.getBoundingClientRect(), { left: c, top: h, width: d, height: f } = u;
						if (s || t(), !d || !f) return;
						let g = ew(h), m = ew(n.clientWidth - (c + d)), p = {
							rootMargin: -g + "px " + -m + "px " + -ew(n.clientHeight - (h + f)) + "px " + -ew(c) + "px",
							threshold: ek(0, eP(1, l)) || 1
						}, y = !0;
						function b(t) {
							let a = t[0].intersectionRatio;
							if (a !== l) {
								if (!y) return o();
								a ? o(!1, a) : r = setTimeout(() => {
									o(!1, 1e-7);
								}, 1e3);
							}
							1 !== a || aP(u, e.getBoundingClientRect()) || o(), y = !1;
						}
						try {
							a = new IntersectionObserver(b, {
								...p,
								root: n.ownerDocument
							});
						} catch (e) {
							a = new IntersectionObserver(b, p);
						}
						a.observe(e);
					}(!0), i;
				}(c, r) : null, f = -1, g = null;
				s && (g = new ResizeObserver((e) => {
					let [a] = e;
					a && a.target === c && g && (g.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
						var e;
						null == (e = g) || e.observe(t);
					})), r();
				}), c && !u && g.observe(c), g.observe(t));
				let m = u ? ag(e) : null;
				return u && function t() {
					let a = ag(e);
					m && !aP(m, a) && r(), m = a, n = requestAnimationFrame(t);
				}(), r(), () => {
					var e;
					h.forEach((e) => {
						i && e.removeEventListener("scroll", r), o && e.removeEventListener("resize", r);
					}), d?.(), null == (e = g) || e.disconnect(), g = null, u && cancelAnimationFrame(n);
				};
			}(t, r, a);
			return () => {
				n();
			};
		}
		return () => {};
	}), f()), () => {
		let a = t.default?.()[0];
		return a ? eO(eV, { children: [eG(a, {
			...n,
			onVnodeMounted: (e) => {
				i.value = function e(t) {
					if (t) {
						if (t instanceof HTMLElement) return t;
						if (t instanceof Text) return e(t.nextElementSibling);
					}
					return null;
				}(e.el);
			}
		}), eD(al, {
			style: { zIndex: 100 },
			triggerRef: i,
			contentRef: o,
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
export { aa as a, rQ as c, t8 as d, t6 as f, an as i, ra as l, aM as n, ar as o, tD as p, al as r, at as s, a_ as t, rr as u };
