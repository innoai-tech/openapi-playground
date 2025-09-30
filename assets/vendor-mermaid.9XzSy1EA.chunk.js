import { Z as e } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
function t(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function n(e) {
	if (Array.isArray(e)) return e;
}
function r(e) {
	if (Array.isArray(e)) return t(e);
}
function a(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function i(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, v(r.key), r);
	}
}
function o(e, t, n) {
	return t && i(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s(t, n) {
	var r = "u" > typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
	if (!r) {
		if (Array.isArray(t) || (r = m(t)) || n) {
			r && (t = r);
			var a = 0, i = e(function() {}, "F");
			return {
				s: i,
				n: e(function() {
					return a >= t.length ? { done: !0 } : {
						done: !1,
						value: t[a++]
					};
				}, "n"),
				e: e(function(e) {
					throw e;
				}, "e"),
				f: i
			};
		}
		throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
	}
	var o, s = !0, l = !1;
	return {
		s: e(function() {
			r = r.call(t);
		}, "s"),
		n: e(function() {
			var e = r.next();
			return s = e.done, e;
		}, "n"),
		e: e(function(e) {
			l = !0, o = e;
		}, "e"),
		f: e(function() {
			try {
				s || null == r.return || r.return();
			} finally {
				if (l) throw o;
			}
		}, "f")
	};
}
function l(e, t, n) {
	return (t = v(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function u(e) {
	if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
}
function c(e, t) {
	var n = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
	if (null != n) {
		var r, a, i, o, s = [], l = !0, u = !1;
		try {
			if (i = (n = n.call(e)).next, 0 === t) {
				if (Object(n) !== n) return;
				l = !1;
			} else for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
		} catch (e) {
			u = !0, a = e;
		} finally {
			try {
				if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (u) throw a;
			}
		}
		return s;
	}
}
function d() {
	throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h() {
	throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f(e, t) {
	return n(e) || c(e, t) || m(e, t) || d();
}
function p(e) {
	return r(e) || u(e) || m(e) || h();
}
function g(e, t) {
	if ("object" != typeof e || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (void 0 !== n) {
		var r = n.call(e, t);
		if ("object" != typeof r) return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return String(e);
}
function v(e) {
	var t = g(e, "string");
	return "symbol" == typeof t ? t : t + "";
}
function y(e) {
	return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
		return typeof e;
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	})(e);
}
function m(e, n) {
	if (e) {
		if ("string" == typeof e) return t(e, n);
		var r = {}.toString.call(e).slice(8, -1);
		return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0;
	}
}
e(t, "_arrayLikeToArray"), e(n, "_arrayWithHoles"), e(r, "_arrayWithoutHoles"), e(a, "_classCallCheck"), e(i, "_defineProperties"), e(o, "_createClass"), e(s, "_createForOfIteratorHelper"), e(l, "_defineProperty$1"), e(u, "_iterableToArray"), e(c, "_iterableToArrayLimit"), e(d, "_nonIterableRest"), e(h, "_nonIterableSpread"), e(f, "_slicedToArray"), e(p, "_toConsumableArray"), e(g, "_toPrimitive"), e(v, "_toPropertyKey"), e(y, "_typeof"), e(m, "_unsupportedIterableToArray");
var x, w, E = typeof window > "u" ? null : window, C = E ? E.navigator : null;
E && E.document;
var T = y(""), k = y({}), S = y(function() {}), P = typeof HTMLElement > "u" ? "undefined" : y(HTMLElement), B = e(function(e) {
	return e && e.instanceString && D(e.instanceString) ? e.instanceString() : null;
}, "instanceStr"), _ = e(function(e) {
	return null != e && y(e) == T;
}, "string"), D = e(function(e) {
	return null != e && y(e) === S;
}, "fn"), A = e(function(e) {
	return !z(e) && (Array.isArray ? Array.isArray(e) : null != e && e instanceof Array);
}, "array"), M = e(function(e) {
	return null != e && y(e) === k && !A(e) && e.constructor === Object;
}, "plainObject"), R = e(function(e) {
	return null != e && y(e) === k;
}, "object"), I = e(function(e) {
	return null != e && y(e) === y(1) && !isNaN(e);
}, "number"), L = e(function(e) {
	return I(e) && Math.floor(e) === e;
}, "integer"), N = e(function(e) {
	if ("undefined" !== P) return null != e && e instanceof HTMLElement;
}, "htmlElement"), z = e(function(e) {
	return O(e) || F(e);
}, "elementOrCollection"), O = e(function(e) {
	return "collection" === B(e) && e._private.single;
}, "element"), F = e(function(e) {
	return "collection" === B(e) && !e._private.single;
}, "collection"), V = e(function(e) {
	return "core" === B(e);
}, "core"), q = e(function(e) {
	return "stylesheet" === B(e);
}, "stylesheet"), j = e(function(e) {
	return "event" === B(e);
}, "event"), X = e(function(e) {
	return null == e || !!("" === e || e.match(/^\s+$/));
}, "emptyString"), Y = e(function(e) {
	return !(typeof HTMLElement > "u") && e instanceof HTMLElement;
}, "domElement"), W = e(function(e) {
	return M(e) && I(e.x1) && I(e.x2) && I(e.y1) && I(e.y2);
}, "boundingBox"), H = e(function(e) {
	return R(e) && D(e.then);
}, "promise"), K = e(function() {
	return C && C.userAgent.match(/msie|trident|edge/i);
}, "ms"), U = e(function(t, n) {
	n || (n = e(function() {
		if (1 == arguments.length) return arguments[0];
		if (0 == arguments.length) return "undefined";
		for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
		return e.join("$");
	}, "keyFn"));
	var r = e(function() {
		var e, a = arguments, i = n.apply(this, a), o = r.cache;
		return (e = o[i]) || (e = o[i] = t.apply(this, a)), e;
	}, "memoizedFn");
	return r.cache = {}, r;
}, "memoize"), G = U(function(e) {
	return e.replace(/([A-Z])/g, function(e) {
		return "-" + e.toLowerCase();
	});
}), Z = U(function(e) {
	return e.replace(/(-\w)/g, function(e) {
		return e[1].toUpperCase();
	});
}), $ = U(function(e, t) {
	return e + t[0].toUpperCase() + t.substring(1);
}, function(e, t) {
	return e + "$" + t;
}), Q = e(function(e) {
	return X(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, "capitalize"), J = e(function(e, t) {
	return e.slice(-1 * t.length) === t;
}, "endsWith"), ee = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", et = "rgb[a]?\\((" + ee + "[%]?)\\s*,\\s*(" + ee + "[%]?)\\s*,\\s*(" + ee + "[%]?)(?:\\s*,\\s*(" + ee + "))?\\)", en = "rgb[a]?\\((?:" + ee + "[%]?)\\s*,\\s*(?:" + ee + "[%]?)\\s*,\\s*(?:" + ee + "[%]?)(?:\\s*,\\s*(?:" + ee + "))?\\)", er = "hsl[a]?\\((" + ee + ")\\s*,\\s*(" + ee + "[%])\\s*,\\s*(" + ee + "[%])(?:\\s*,\\s*(" + ee + "))?\\)", ea = "hsl[a]?\\((?:" + ee + ")\\s*,\\s*(?:" + ee + "[%])\\s*,\\s*(?:" + ee + "[%])(?:\\s*,\\s*(?:" + ee + "))?\\)", ei = e(function(e, t) {
	return e < t ? -1 : +(e > t);
}, "ascending"), eo = e(function(e, t) {
	return -1 * ei(e, t);
}, "descending"), es = null != Object.assign ? Object.assign.bind(Object) : function(e) {
	for (var t = arguments, n = 1; n < t.length; n++) {
		var r = t[n];
		if (null != r) for (var a = Object.keys(r), i = 0; i < a.length; i++) {
			var o = a[i];
			e[o] = r[o];
		}
	}
	return e;
}, el = e(function(e) {
	if ((4 === e.length || 7 === e.length) && "#" === e[0]) {
		var t, n, r;
		return 4 === e.length ? (t = parseInt(e[1] + e[1], 16), n = parseInt(e[2] + e[2], 16), r = parseInt(e[3] + e[3], 16)) : (t = parseInt(e[1] + e[2], 16), n = parseInt(e[3] + e[4], 16), r = parseInt(e[5] + e[6], 16)), [
			t,
			n,
			r
		];
	}
}, "hex2tuple"), eu = e(function(t) {
	function n(e, t, n) {
		return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
	}
	e(n, "hue2rgb");
	var r, a, i, o, s, l, u, c, d = RegExp("^" + er + "$").exec(t);
	if (d) {
		if ((a = parseInt(d[1])) < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a %= 360), a /= 360, (i = parseFloat(d[2])) < 0 || i > 100 || (i /= 100, (o = parseFloat(d[3])) < 0 || o > 100) || (o /= 100, void 0 !== (s = d[4]) && ((s = parseFloat(s)) < 0 || s > 1))) return;
		if (0 === i) l = u = c = Math.round(255 * o);
		else {
			var h = o < .5 ? o * (1 + i) : o + i - o * i, f = 2 * o - h;
			l = Math.round(255 * n(f, h, a + 1 / 3)), u = Math.round(255 * n(f, h, a)), c = Math.round(255 * n(f, h, a - 1 / 3));
		}
		r = [
			l,
			u,
			c,
			s
		];
	}
	return r;
}, "hsl2tuple"), ec = e(function(e) {
	var t, n = RegExp("^" + et + "$").exec(e);
	if (n) {
		t = [];
		for (var r = [], a = 1; a <= 3; a++) {
			var i = n[a];
			if ("%" === i[i.length - 1] && (r[a] = !0), i = parseFloat(i), r[a] && (i = i / 100 * 255), i < 0 || i > 255) return;
			t.push(Math.floor(i));
		}
		var o = r[1] || r[2] || r[3], s = r[1] && r[2] && r[3];
		if (o && !s) return;
		var l = n[4];
		if (void 0 !== l) {
			if ((l = parseFloat(l)) < 0 || l > 1) return;
			t.push(l);
		}
	}
	return t;
}, "rgb2tuple"), ed = e(function(e) {
	return ef[e.toLowerCase()];
}, "colorname2tuple"), eh = e(function(e) {
	return (A(e) ? e : null) || ed(e) || el(e) || ec(e) || eu(e);
}, "color2tuple"), ef = {
	transparent: [
		0,
		0,
		0,
		0
	],
	aliceblue: [
		240,
		248,
		255
	],
	antiquewhite: [
		250,
		235,
		215
	],
	aqua: [
		0,
		255,
		255
	],
	aquamarine: [
		127,
		255,
		212
	],
	azure: [
		240,
		255,
		255
	],
	beige: [
		245,
		245,
		220
	],
	bisque: [
		255,
		228,
		196
	],
	black: [
		0,
		0,
		0
	],
	blanchedalmond: [
		255,
		235,
		205
	],
	blue: [
		0,
		0,
		255
	],
	blueviolet: [
		138,
		43,
		226
	],
	brown: [
		165,
		42,
		42
	],
	burlywood: [
		222,
		184,
		135
	],
	cadetblue: [
		95,
		158,
		160
	],
	chartreuse: [
		127,
		255,
		0
	],
	chocolate: [
		210,
		105,
		30
	],
	coral: [
		255,
		127,
		80
	],
	cornflowerblue: [
		100,
		149,
		237
	],
	cornsilk: [
		255,
		248,
		220
	],
	crimson: [
		220,
		20,
		60
	],
	cyan: [
		0,
		255,
		255
	],
	darkblue: [
		0,
		0,
		139
	],
	darkcyan: [
		0,
		139,
		139
	],
	darkgoldenrod: [
		184,
		134,
		11
	],
	darkgray: [
		169,
		169,
		169
	],
	darkgreen: [
		0,
		100,
		0
	],
	darkgrey: [
		169,
		169,
		169
	],
	darkkhaki: [
		189,
		183,
		107
	],
	darkmagenta: [
		139,
		0,
		139
	],
	darkolivegreen: [
		85,
		107,
		47
	],
	darkorange: [
		255,
		140,
		0
	],
	darkorchid: [
		153,
		50,
		204
	],
	darkred: [
		139,
		0,
		0
	],
	darksalmon: [
		233,
		150,
		122
	],
	darkseagreen: [
		143,
		188,
		143
	],
	darkslateblue: [
		72,
		61,
		139
	],
	darkslategray: [
		47,
		79,
		79
	],
	darkslategrey: [
		47,
		79,
		79
	],
	darkturquoise: [
		0,
		206,
		209
	],
	darkviolet: [
		148,
		0,
		211
	],
	deeppink: [
		255,
		20,
		147
	],
	deepskyblue: [
		0,
		191,
		255
	],
	dimgray: [
		105,
		105,
		105
	],
	dimgrey: [
		105,
		105,
		105
	],
	dodgerblue: [
		30,
		144,
		255
	],
	firebrick: [
		178,
		34,
		34
	],
	floralwhite: [
		255,
		250,
		240
	],
	forestgreen: [
		34,
		139,
		34
	],
	fuchsia: [
		255,
		0,
		255
	],
	gainsboro: [
		220,
		220,
		220
	],
	ghostwhite: [
		248,
		248,
		255
	],
	gold: [
		255,
		215,
		0
	],
	goldenrod: [
		218,
		165,
		32
	],
	gray: [
		128,
		128,
		128
	],
	grey: [
		128,
		128,
		128
	],
	green: [
		0,
		128,
		0
	],
	greenyellow: [
		173,
		255,
		47
	],
	honeydew: [
		240,
		255,
		240
	],
	hotpink: [
		255,
		105,
		180
	],
	indianred: [
		205,
		92,
		92
	],
	indigo: [
		75,
		0,
		130
	],
	ivory: [
		255,
		255,
		240
	],
	khaki: [
		240,
		230,
		140
	],
	lavender: [
		230,
		230,
		250
	],
	lavenderblush: [
		255,
		240,
		245
	],
	lawngreen: [
		124,
		252,
		0
	],
	lemonchiffon: [
		255,
		250,
		205
	],
	lightblue: [
		173,
		216,
		230
	],
	lightcoral: [
		240,
		128,
		128
	],
	lightcyan: [
		224,
		255,
		255
	],
	lightgoldenrodyellow: [
		250,
		250,
		210
	],
	lightgray: [
		211,
		211,
		211
	],
	lightgreen: [
		144,
		238,
		144
	],
	lightgrey: [
		211,
		211,
		211
	],
	lightpink: [
		255,
		182,
		193
	],
	lightsalmon: [
		255,
		160,
		122
	],
	lightseagreen: [
		32,
		178,
		170
	],
	lightskyblue: [
		135,
		206,
		250
	],
	lightslategray: [
		119,
		136,
		153
	],
	lightslategrey: [
		119,
		136,
		153
	],
	lightsteelblue: [
		176,
		196,
		222
	],
	lightyellow: [
		255,
		255,
		224
	],
	lime: [
		0,
		255,
		0
	],
	limegreen: [
		50,
		205,
		50
	],
	linen: [
		250,
		240,
		230
	],
	magenta: [
		255,
		0,
		255
	],
	maroon: [
		128,
		0,
		0
	],
	mediumaquamarine: [
		102,
		205,
		170
	],
	mediumblue: [
		0,
		0,
		205
	],
	mediumorchid: [
		186,
		85,
		211
	],
	mediumpurple: [
		147,
		112,
		219
	],
	mediumseagreen: [
		60,
		179,
		113
	],
	mediumslateblue: [
		123,
		104,
		238
	],
	mediumspringgreen: [
		0,
		250,
		154
	],
	mediumturquoise: [
		72,
		209,
		204
	],
	mediumvioletred: [
		199,
		21,
		133
	],
	midnightblue: [
		25,
		25,
		112
	],
	mintcream: [
		245,
		255,
		250
	],
	mistyrose: [
		255,
		228,
		225
	],
	moccasin: [
		255,
		228,
		181
	],
	navajowhite: [
		255,
		222,
		173
	],
	navy: [
		0,
		0,
		128
	],
	oldlace: [
		253,
		245,
		230
	],
	olive: [
		128,
		128,
		0
	],
	olivedrab: [
		107,
		142,
		35
	],
	orange: [
		255,
		165,
		0
	],
	orangered: [
		255,
		69,
		0
	],
	orchid: [
		218,
		112,
		214
	],
	palegoldenrod: [
		238,
		232,
		170
	],
	palegreen: [
		152,
		251,
		152
	],
	paleturquoise: [
		175,
		238,
		238
	],
	palevioletred: [
		219,
		112,
		147
	],
	papayawhip: [
		255,
		239,
		213
	],
	peachpuff: [
		255,
		218,
		185
	],
	peru: [
		205,
		133,
		63
	],
	pink: [
		255,
		192,
		203
	],
	plum: [
		221,
		160,
		221
	],
	powderblue: [
		176,
		224,
		230
	],
	purple: [
		128,
		0,
		128
	],
	red: [
		255,
		0,
		0
	],
	rosybrown: [
		188,
		143,
		143
	],
	royalblue: [
		65,
		105,
		225
	],
	saddlebrown: [
		139,
		69,
		19
	],
	salmon: [
		250,
		128,
		114
	],
	sandybrown: [
		244,
		164,
		96
	],
	seagreen: [
		46,
		139,
		87
	],
	seashell: [
		255,
		245,
		238
	],
	sienna: [
		160,
		82,
		45
	],
	silver: [
		192,
		192,
		192
	],
	skyblue: [
		135,
		206,
		235
	],
	slateblue: [
		106,
		90,
		205
	],
	slategray: [
		112,
		128,
		144
	],
	slategrey: [
		112,
		128,
		144
	],
	snow: [
		255,
		250,
		250
	],
	springgreen: [
		0,
		255,
		127
	],
	steelblue: [
		70,
		130,
		180
	],
	tan: [
		210,
		180,
		140
	],
	teal: [
		0,
		128,
		128
	],
	thistle: [
		216,
		191,
		216
	],
	tomato: [
		255,
		99,
		71
	],
	turquoise: [
		64,
		224,
		208
	],
	violet: [
		238,
		130,
		238
	],
	wheat: [
		245,
		222,
		179
	],
	white: [
		255,
		255,
		255
	],
	whitesmoke: [
		245,
		245,
		245
	],
	yellow: [
		255,
		255,
		0
	],
	yellowgreen: [
		154,
		205,
		50
	]
}, ep = e(function(e) {
	for (var t = e.map, n = e.keys, r = n.length, a = 0; a < r; a++) {
		var i = n[a];
		if (M(i)) throw Error("Tried to set map with object key");
		a < n.length - 1 ? (t[i] ?? (t[i] = {}), t = t[i]) : t[i] = e.value;
	}
}, "setMap"), eg = e(function(e) {
	for (var t = e.map, n = e.keys, r = n.length, a = 0; a < r; a++) {
		var i = n[a];
		if (M(i)) throw Error("Tried to get map with object key");
		if (null == (t = t[i])) break;
	}
	return t;
}, "getMap"), ev = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof self ? self : {};
function ey(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function em() {
	if (ty) return tv;
	function t(e) {
		var t = typeof e;
		return null != e && ("object" == t || "function" == t);
	}
	return ty = 1, e(t, "isObject"), tv = t;
}
function eb() {
	return tb ? tm : (tb = 1, tm = "object" == typeof ev && ev && ev.Object === Object && ev);
}
function ex() {
	if (tw) return tx;
	tw = 1;
	var e = eb(), t = "object" == typeof self && self && self.Object === Object && self;
	return tx = e || t || Function("return this")();
}
function ew() {
	if (tC) return tE;
	tC = 1;
	var t = ex();
	return tE = e(function() {
		return t.Date.now();
	}, "now");
}
function eE() {
	if (tk) return tT;
	tk = 1;
	var t = /\s/;
	function n(e) {
		for (var n = e.length; n-- && t.test(e.charAt(n)););
		return n;
	}
	return e(n, "trimmedEndIndex"), tT = n;
}
function eC() {
	if (tP) return tS;
	tP = 1;
	var t = eE(), n = /^\s+/;
	function r(e) {
		return e && e.slice(0, t(e) + 1).replace(n, "");
	}
	return e(r, "baseTrim"), tS = r;
}
function eT() {
	return t_ ? tB : (t_ = 1, tB = ex().Symbol);
}
function ek() {
	if (tA) return tD;
	tA = 1;
	var t = eT(), n = Object.prototype, r = n.hasOwnProperty, a = n.toString, i = t ? t.toStringTag : void 0;
	function o(e) {
		var t = r.call(e, i), n = e[i];
		try {
			e[i] = void 0;
			var o = !0;
		} catch {}
		var s = a.call(e);
		return o && (t ? e[i] = n : delete e[i]), s;
	}
	return e(o, "getRawTag"), tD = o;
}
function eS() {
	if (tR) return tM;
	tR = 1;
	var t = Object.prototype.toString;
	function n(e) {
		return t.call(e);
	}
	return e(n, "objectToString"), tM = n;
}
function eP() {
	if (tL) return tI;
	tL = 1;
	var t = eT(), n = ek(), r = eS(), a = t ? t.toStringTag : void 0;
	function i(e) {
		return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? n(e) : r(e);
	}
	return e(i, "baseGetTag"), tI = i;
}
function eB() {
	if (tz) return tN;
	function t(e) {
		return null != e && "object" == typeof e;
	}
	return tz = 1, e(t, "isObjectLike"), tN = t;
}
function e_() {
	if (tF) return tO;
	tF = 1;
	var t = eP(), n = eB();
	function r(e) {
		return "symbol" == typeof e || n(e) && "[object Symbol]" == t(e);
	}
	return e(r, "isSymbol"), tO = r;
}
function eD() {
	if (tq) return tV;
	tq = 1;
	var t = eC(), n = em(), r = e_(), a = NaN, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, l = parseInt;
	function u(e) {
		if ("number" == typeof e) return e;
		if (r(e)) return a;
		if (n(e)) {
			var u = "function" == typeof e.valueOf ? e.valueOf() : e;
			e = n(u) ? u + "" : u;
		}
		if ("string" != typeof e) return 0 === e ? e : +e;
		e = t(e);
		var c = o.test(e);
		return c || s.test(e) ? l(e.slice(2), c ? 2 : 8) : i.test(e) ? a : +e;
	}
	return e(u, "toNumber"), tV = u;
}
function eA() {
	if (tX) return tj;
	tX = 1;
	var t = em(), n = ew(), r = eD(), a = Math.max, i = Math.min;
	function o(o, s, l) {
		var u, c, d, h, f, p, g = 0, v = !1, y = !1, m = !0;
		if ("function" != typeof o) throw TypeError("Expected a function");
		function x(e) {
			var t = u, n = c;
			return u = c = void 0, g = e, h = o.apply(n, t);
		}
		function w(e) {
			return g = e, f = setTimeout(T, s), v ? x(e) : h;
		}
		function E(e) {
			var t = e - p, n = e - g, r = s - t;
			return y ? i(r, d - n) : r;
		}
		function C(e) {
			var t = e - p, n = e - g;
			return void 0 === p || t >= s || t < 0 || y && n >= d;
		}
		function T() {
			var e = n();
			if (C(e)) return k(e);
			f = setTimeout(T, E(e));
		}
		function k(e) {
			return f = void 0, m && u ? x(e) : (u = c = void 0, h);
		}
		function S() {
			void 0 !== f && clearTimeout(f), g = 0, u = p = c = f = void 0;
		}
		function P() {
			return void 0 === f ? h : k(n());
		}
		function B() {
			var e = n(), t = C(e);
			if (u = arguments, c = this, p = e, t) {
				if (void 0 === f) return w(p);
				if (y) return clearTimeout(f), f = setTimeout(T, s), x(p);
			}
			return void 0 === f && (f = setTimeout(T, s)), h;
		}
		return s = r(s) || 0, t(l) && (v = !!l.leading, d = (y = "maxWait" in l) ? a(r(l.maxWait) || 0, s) : d, m = "trailing" in l ? !!l.trailing : m), e(x, "invokeFunc"), e(w, "leadingEdge"), e(E, "remainingWait"), e(C, "shouldInvoke"), e(T, "timerExpired"), e(k, "trailingEdge"), e(S, "cancel"), e(P, "flush"), e(B, "debounced"), B.cancel = S, B.flush = P, B;
	}
	return e(o, "debounce"), tj = o;
}
e(ey, "getDefaultExportFromCjs"), e(em, "requireIsObject"), e(eb, "require_freeGlobal"), e(ex, "require_root"), e(ew, "requireNow"), e(eE, "require_trimmedEndIndex"), e(eC, "require_baseTrim"), e(eT, "require_Symbol"), e(ek, "require_getRawTag"), e(eS, "require_objectToString"), e(eP, "require_baseGetTag"), e(eB, "requireIsObjectLike"), e(e_, "requireIsSymbol"), e(eD, "requireToNumber"), e(eA, "requireDebounce");
var eM = ey(eA()), eR = E ? E.performance : null, eI = eR && eR.now ? function() {
	return eR.now();
} : function() {
	return Date.now();
}, eL = function() {
	if (E) {
		if (E.requestAnimationFrame) return function(e) {
			E.requestAnimationFrame(e);
		};
		if (E.mozRequestAnimationFrame) return function(e) {
			E.mozRequestAnimationFrame(e);
		};
		if (E.webkitRequestAnimationFrame) return function(e) {
			E.webkitRequestAnimationFrame(e);
		};
		if (E.msRequestAnimationFrame) return function(e) {
			E.msRequestAnimationFrame(e);
		};
	}
	return function(e) {
		e && setTimeout(function() {
			e(eI());
		}, 1e3 / 60);
	};
}(), eN = e(function(e) {
	return eL(e);
}, "requestAnimationFrame"), ez = e(function(e) {
	for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9261; !(t = e.next()).done;) n = 65599 * n + t.value | 0;
	return n;
}, "hashIterableInts"), eO = e(function(e) {
	return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9261) * 65599 + e | 0;
}, "hashInt"), eF = e(function(e) {
	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5381;
	return (t << 5) + t + e | 0;
}, "hashIntAlt"), eV = e(function(e, t) {
	return 2097152 * e + t;
}, "combineHashes"), eq = e(function(e) {
	return 2097152 * e[0] + e[1];
}, "combineHashesArray"), ej = e(function(e, t) {
	return [eO(e[0], t[0]), eF(e[1], t[1])];
}, "hashArrays"), eX = e(function(t, n) {
	var r = {
		value: 0,
		done: !1
	}, a = 0, i = t.length;
	return ez({ next: e(function() {
		return a < i ? r.value = t[a++] : r.done = !0, r;
	}, "next") }, n);
}, "hashIntsArray"), eY = e(function(t, n) {
	var r = {
		value: 0,
		done: !1
	}, a = 0, i = t.length;
	return ez({ next: e(function() {
		return a < i ? r.value = t.charCodeAt(a++) : r.done = !0, r;
	}, "next") }, n);
}, "hashString"), eW = e(function() {
	return eH(arguments);
}, "hashStrings"), eH = e(function(e) {
	for (var t, n = 0; n < e.length; n++) {
		var r = e[n];
		t = 0 === n ? eY(r) : eY(r, t);
	}
	return t;
}, "hashStringsArray");
function eK(e, t, n, r, a) {
	var i = a * Math.PI / 180;
	return {
		x: Math.cos(i) * (e - n) - Math.sin(i) * (t - r) + n,
		y: Math.sin(i) * (e - n) + Math.cos(i) * (t - r) + r
	};
}
e(eK, "rotatePoint");
var eU = e(function(e, t, n, r, a, i) {
	return {
		x: (e - n) * a + n,
		y: (t - r) * i + r
	};
}, "movePointByBoxAspect");
function eG(e, t, n) {
	if (0 === n) return e;
	var r = (t.x1 + t.x2) / 2, a = (t.y1 + t.y2) / 2, i = t.w / t.h, o = eK(e.x, e.y, r, a, n), s = eU(o.x, o.y, r, a, i, 1 / i);
	return {
		x: s.x,
		y: s.y
	};
}
e(eG, "rotatePosAndSkewByBox");
var eZ = !0, e$ = null != console.warn, eQ = null != console.trace, eJ = Number.MAX_SAFE_INTEGER || 9007199254740991, e0 = e(function() {
	return !0;
}, "trueify"), e1 = e(function() {
	return !1;
}, "falsify"), e2 = e(function() {
	return 0;
}, "zeroify"), e5 = e(function() {}, "noop"), e3 = e(function(e) {
	throw Error(e);
}, "error"), e4 = e(function(e) {
	if (void 0 === e) return eZ;
	eZ = !!e;
}, "warnings"), e9 = e(function(e) {
	e4() && (e$ ? console.warn(e) : (console.log(e), eQ && console.trace()));
}, "warn"), e6 = e(function(e) {
	return es({}, e);
}, "clone"), e8 = e(function(e) {
	return null == e ? e : A(e) ? e.slice() : M(e) ? e6(e) : e;
}, "copy"), e7 = e(function(e) {
	return e.slice();
}, "copyArray"), te = e(function(e, t) {
	for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
	return t;
}, "uuid"), tt = {}, tn = e(function() {
	return tt;
}, "staticEmptyObject"), tr = e(function(e) {
	var t = Object.keys(e);
	return function(n) {
		for (var r = {}, a = 0; a < t.length; a++) {
			var i = t[a], o = n?.[i];
			r[i] = void 0 === o ? e[i] : o;
		}
		return r;
	};
}, "defaults"), ta = e(function(e, t, n) {
	for (var r = e.length - 1; r >= 0; r--) e[r] === t && e.splice(r, 1);
}, "removeFromArray"), ti = e(function(e) {
	e.splice(0, e.length);
}, "clearArray"), to = e(function(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		e.push(r);
	}
}, "push"), ts = e(function(e, t, n) {
	return n && (t = $(n, t)), e[t];
}, "getPrefixedProperty"), tl = e(function(e, t, n, r) {
	n && (t = $(n, t)), e[t] = r;
}, "setPrefixedProperty"), tu = function() {
	function t() {
		a(this, t), this._obj = {};
	}
	return e(t, "ObjectMap"), o(t, [
		{
			key: "set",
			value: e(function(e, t) {
				return this._obj[e] = t, this;
			}, "set")
		},
		{
			key: "delete",
			value: e(function(e) {
				return this._obj[e] = void 0, this;
			}, "_delete")
		},
		{
			key: "clear",
			value: e(function() {
				this._obj = {};
			}, "clear")
		},
		{
			key: "has",
			value: e(function(e) {
				return void 0 !== this._obj[e];
			}, "has")
		},
		{
			key: "get",
			value: e(function(e) {
				return this._obj[e];
			}, "get")
		}
	]);
}(), tc = "u" > typeof Map ? Map : tu, td = function() {
	function t(e) {
		if (a(this, t), this._obj = Object.create(null), this.size = 0, null != e) {
			var n = null != e.instanceString && e.instanceString() === this.instanceString() ? e.toArray() : e;
			for (var r = 0; r < n.length; r++) this.add(n[r]);
		}
	}
	return e(t, "ObjectSet"), o(t, [
		{
			key: "instanceString",
			value: e(function() {
				return "set";
			}, "instanceString")
		},
		{
			key: "add",
			value: e(function(e) {
				var t = this._obj;
				1 !== t[e] && (t[e] = 1, this.size++);
			}, "add")
		},
		{
			key: "delete",
			value: e(function(e) {
				var t = this._obj;
				1 === t[e] && (t[e] = 0, this.size--);
			}, "_delete")
		},
		{
			key: "clear",
			value: e(function() {
				this._obj = Object.create(null);
			}, "clear")
		},
		{
			key: "has",
			value: e(function(e) {
				return 1 === this._obj[e];
			}, "has")
		},
		{
			key: "toArray",
			value: e(function() {
				var e = this;
				return Object.keys(this._obj).filter(function(t) {
					return e.has(t);
				});
			}, "toArray")
		},
		{
			key: "forEach",
			value: e(function(e, t) {
				return this.toArray().forEach(e, t);
			}, "forEach")
		}
	]);
}(), th = (typeof Set > "u" ? "undefined" : y(Set)) !== "undefined" ? Set : td, tf = e(function(e, t) {
	var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
	if (void 0 === e || void 0 === t || !V(e)) return void e3("An element must have a core reference and parameters set");
	var r = t.group;
	if (r ?? (r = t.data && null != t.data.source && null != t.data.target ? "edges" : "nodes"), "nodes" !== r && "edges" !== r) return void e3("An element must be of type `nodes` or `edges`; you specified `" + r + "`");
	this.length = 1, this[0] = this;
	var a = this._private = {
		cy: e,
		single: !0,
		data: t.data || {},
		position: t.position || {
			x: 0,
			y: 0
		},
		autoWidth: void 0,
		autoHeight: void 0,
		autoPadding: void 0,
		compoundBoundsClean: !1,
		listeners: [],
		group: r,
		style: {},
		rstyle: {},
		styleCxts: [],
		styleKeys: {},
		removed: !0,
		selected: !!t.selected,
		selectable: void 0 === t.selectable || !!t.selectable,
		locked: !!t.locked,
		grabbed: !1,
		grabbable: void 0 === t.grabbable || !!t.grabbable,
		pannable: void 0 === t.pannable ? "edges" === r : !!t.pannable,
		active: !1,
		classes: new th(),
		animation: {
			current: [],
			queue: []
		},
		rscratch: {},
		scratch: t.scratch || {},
		edges: [],
		children: [],
		parent: t.parent && t.parent.isNode() ? t.parent : null,
		traversalCache: {},
		backgrounding: !1,
		bbCache: null,
		bbCacheShift: {
			x: 0,
			y: 0
		},
		bodyBounds: null,
		overlayBounds: null,
		labelBounds: {
			all: null,
			source: null,
			target: null,
			main: null
		},
		arrowBounds: {
			source: null,
			target: null,
			"mid-source": null,
			"mid-target": null
		}
	};
	if (a.position.x ?? (a.position.x = 0), a.position.y ?? (a.position.y = 0), t.renderedPosition) {
		var i = t.renderedPosition, o = e.pan(), s = e.zoom();
		a.position = {
			x: (i.x - o.x) / s,
			y: (i.y - o.y) / s
		};
	}
	var l = [];
	A(t.classes) ? l = t.classes : _(t.classes) && (l = t.classes.split(/\s+/));
	for (var u = 0, c = l.length; u < c; u++) {
		var d = l[u];
		d && "" !== d && a.classes.add(d);
	}
	this.createEmitter(), (void 0 === n || n) && this.restore();
	var h = t.style || t.css;
	h && (e9("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(h));
}, "Element"), tp = e(function(t) {
	return t = {
		bfs: t.bfs || !t.dfs,
		dfs: t.dfs || !t.bfs
	}, e(function(n, r, a) {
		M(n) && !z(n) && (n = (i = n).roots || i.root, r = i.visit, a = i.directed), a = 2 != arguments.length || D(r) ? a : r, r = D(r) ? r : function() {};
		for (var i, o, s = this._private.cy, l = n = _(n) ? this.filter(n) : n, u = [], c = [], d = {}, h = {}, f = {}, p = 0, g = this.byGroup(), v = g.nodes, y = g.edges, m = 0; m < l.length; m++) {
			var x = l[m], w = x.id();
			x.isNode() && (u.unshift(x), t.bfs && (f[w] = !0, c.push(x)), h[w] = 0);
		}
		for (var E, C = e(function() {
			var e = t.bfs ? u.shift() : u.pop(), n = e.id();
			if (t.dfs) {
				if (f[n]) return 0;
				f[n] = !0, c.push(e);
			}
			var i, s = h[n], l = d[n], g = null != l ? l.source() : null, m = null != l ? l.target() : null, x = null == l ? void 0 : e.same(g) ? m[0] : g[0];
			if (!0 === (i = r(e, l, x, p++, s))) return o = e, 1;
			if (!1 === i) return 1;
			for (var w = e.connectedEdges().filter(function(t) {
				return (!a || t.source().same(e)) && y.has(t);
			}), E = 0; E < w.length; E++) {
				var C = w[E], T = C.connectedNodes().filter(function(t) {
					return !t.same(e) && v.has(t);
				}), k = T.id();
				0 === T.length || f[k] || (T = T[0], u.push(T), t.bfs && (f[k] = !0, c.push(T)), d[k] = C, h[k] = h[n] + 1);
			}
		}, "_loop"); 0 !== u.length && (0 === (E = C()) || 1 !== E););
		for (var T = s.collection(), k = 0; k < c.length; k++) {
			var S = c[k], P = d[S.id()];
			null != P && T.push(P), T.push(S);
		}
		return {
			path: s.collection(T),
			found: s.collection(o)
		};
	}, "searchFn");
}, "defineSearch"), tg = {
	breadthFirstSearch: tp({ bfs: !0 }),
	depthFirstSearch: tp({ dfs: !0 })
};
tg.bfs = tg.breadthFirstSearch, tg.dfs = tg.depthFirstSearch;
var tv, ty, tm, tb, tx, tw, tE, tC, tT, tk, tS, tP, tB, t_, tD, tA, tM, tR, tI, tL, tN, tz, tO, tF, tV, tq, tj, tX, tY, tW = { exports: {} }, tH = tW.exports;
function tK() {
	return tY || (tY = 1, (function() {
		var t, n, r, a, i, o, s, l, u, c, d, h, f, p = Math.floor, g = Math.min;
		n = e(function(e, t) {
			return e < t ? -1 : +(e > t);
		}, "defaultCmp"), l = e(function(e, t, r, a, i) {
			var o;
			if (r ??= 0, i ??= n, r < 0) throw Error("lo must be non-negative");
			for (a ??= e.length; r < a;) 0 > i(t, e[o = p((r + a) / 2)]) ? a = o : r = o + 1;
			return [].splice.apply(e, [r, r - r].concat(t)), t;
		}, "insort"), i = e(function(e, t, r) {
			return r ??= n, e.push(t), h(e, 0, e.length - 1, r);
		}, "heappush"), a = e(function(e, t) {
			var r, a;
			return t ??= n, r = e.pop(), e.length ? (a = e[0], e[0] = r, f(e, 0, t)) : a = r, a;
		}, "heappop"), s = e(function(e, t, r) {
			var a;
			return r ??= n, a = e[0], e[0] = t, f(e, 0, r), a;
		}, "heapreplace"), o = e(function(e, t, r) {
			var a;
			return r ??= n, e.length && 0 > r(e[0], t) && (t = (a = [e[0], t])[0], e[0] = a[1], f(e, 0, r)), t;
		}, "heappushpop"), r = e(function(e, t) {
			var r, a, i, o, s, l;
			for (t ??= n, o = (function() {
				l = [];
				for (var t = 0, n = p(e.length / 2); 0 <= n ? t < n : t > n; 0 <= n ? t++ : t--) l.push(t);
				return l;
			}).apply(this).reverse(), s = [], a = 0, i = o.length; a < i; a++) r = o[a], s.push(f(e, r, t));
			return s;
		}, "heapify"), d = e(function(e, t, r) {
			var a;
			if (r ??= n, -1 !== (a = e.indexOf(t))) return h(e, 0, a, r), f(e, a, r);
		}, "updateItem"), u = e(function(e, t, a) {
			var i, s, l, u;
			if (a ??= n, !(i = e.slice(0, t)).length) return i;
			for (r(i, a), u = e.slice(t), s = 0, l = u.length; s < l; s++) o(i, u[s], a);
			return i.sort(a).reverse();
		}, "nlargest"), c = e(function(e, t, i) {
			var o, s, u, c, d, h, f, p, v;
			if (i ??= n, 10 * t <= e.length) {
				if (!(u = e.slice(0, t).sort(i)).length) return u;
				for (s = u[u.length - 1], f = e.slice(t), c = 0, h = f.length; c < h; c++) 0 > i(o = f[c], s) && (l(u, o, 0, null, i), u.pop(), s = u[u.length - 1]);
				return u;
			}
			for (r(e, i), v = [], d = 0, p = g(t, e.length); 0 <= p ? d < p : d > p; 0 <= p ? ++d : --d) v.push(a(e, i));
			return v;
		}, "nsmallest"), h = e(function(e, t, r, a) {
			var i, o, s;
			for (a ??= n, i = e[r]; r > t;) {
				if (0 > a(i, o = e[s = r - 1 >> 1])) {
					e[r] = o, r = s;
					continue;
				}
				break;
			}
			return e[r] = i;
		}, "_siftdown"), f = e(function(e, t, r) {
			var a, i, o, s, l;
			for (r ??= n, i = e.length, l = t, o = e[t], a = 2 * t + 1; a < i;) (s = a + 1) < i && !(0 > r(e[a], e[s])) && (a = s), e[t] = e[a], a = 2 * (t = a) + 1;
			return e[t] = o, h(e, l, t, r);
		}, "_siftup"), t = function() {
			function t(e) {
				this.cmp = e ?? n, this.nodes = [];
			}
			return t.push = i, t.pop = a, t.replace = s, t.pushpop = o, t.heapify = r, t.updateItem = d, t.nlargest = u, t.nsmallest = c, e(t, "Heap"), t.prototype.push = function(e) {
				return i(this.nodes, e, this.cmp);
			}, t.prototype.pop = function() {
				return a(this.nodes, this.cmp);
			}, t.prototype.peek = function() {
				return this.nodes[0];
			}, t.prototype.contains = function(e) {
				return -1 !== this.nodes.indexOf(e);
			}, t.prototype.replace = function(e) {
				return s(this.nodes, e, this.cmp);
			}, t.prototype.pushpop = function(e) {
				return o(this.nodes, e, this.cmp);
			}, t.prototype.heapify = function() {
				return r(this.nodes, this.cmp);
			}, t.prototype.updateItem = function(e) {
				return d(this.nodes, e, this.cmp);
			}, t.prototype.clear = function() {
				return this.nodes = [];
			}, t.prototype.empty = function() {
				return 0 === this.nodes.length;
			}, t.prototype.size = function() {
				return this.nodes.length;
			}, t.prototype.clone = function() {
				var e;
				return (e = new t()).nodes = this.nodes.slice(0), e;
			}, t.prototype.toArray = function() {
				return this.nodes.slice(0);
			}, t.prototype.insert = t.prototype.push, t.prototype.top = t.prototype.peek, t.prototype.front = t.prototype.peek, t.prototype.has = t.prototype.contains, t.prototype.copy = t.prototype.clone, t;
		}(), tW.exports = t;
	}).call(tH)), tW.exports;
}
function tU() {
	return tZ || (tZ = 1, tG = tK()), tG;
}
e(tK, "requireHeap$1"), e(tU, "requireHeap");
var tG, tZ, t$, tQ = ey(tU()), tJ = tr({
	root: null,
	weight: e(function(e) {
		return 1;
	}, "weight"),
	directed: !1
}), t0 = { dijkstra: e(function(t) {
	if (!M(t)) {
		var n = arguments;
		t = {
			root: n[0],
			weight: n[1],
			directed: n[2]
		};
	}
	var r = tJ(t), a = r.root, i = r.weight, o = r.directed, s = this, l = _(a) ? this.filter(a)[0] : a[0], u = {}, c = {}, d = {}, h = this.byGroup(), f = h.nodes, p = h.edges;
	p.unmergeBy(function(e) {
		return e.isLoop();
	});
	for (var g = e(function(e) {
		return u[e.id()];
	}, "getDist"), v = e(function(e, t) {
		u[e.id()] = t, y.updateItem(e);
	}, "setDist"), y = new tQ(function(e, t) {
		return g(e) - g(t);
	}), m = 0; m < f.length; m++) {
		var x = f[m];
		u[x.id()] = x.same(l) ? 0 : Infinity, y.push(x);
	}
	for (var w = e(function(e, t) {
		for (var n, r = (o ? e.edgesTo(t) : e.edgesWith(t)).intersect(p), a = Infinity, s = 0; s < r.length; s++) {
			var l = r[s], u = i(l);
			(u < a || !n) && (a = u, n = l);
		}
		return {
			edge: n,
			dist: a
		};
	}, "distBetween"); y.size() > 0;) {
		var E = y.pop(), C = g(E);
		if (d[E.id()] = C, C !== Infinity) for (var T = E.neighborhood().intersect(f), k = 0; k < T.length; k++) {
			var S = T[k], P = S.id(), B = w(E, S), D = C + B.dist;
			D < g(S) && (v(S, D), c[P] = {
				node: E,
				edge: B.edge
			});
		}
	}
	return {
		distanceTo: e(function(e) {
			return d[(_(e) ? f.filter(e)[0] : e[0]).id()];
		}, "distanceTo"),
		pathTo: e(function(e) {
			var t = _(e) ? f.filter(e)[0] : e[0], n = [], r = t, a = r.id();
			if (t.length > 0) for (n.unshift(t); c[a];) {
				var i = c[a];
				n.unshift(i.edge), n.unshift(i.node), a = (r = i.node).id();
			}
			return s.spawn(n);
		}, "pathTo")
	};
}, "dijkstra") }, t1 = { kruskal: e(function(t) {
	t = t || function(e) {
		return 1;
	};
	for (var n = this.byGroup(), r = n.nodes, a = n.edges, i = r.length, o = Array(i), s = e(function(e) {
		for (var t = 0; t < o.length; t++) if (o[t].has(e)) return t;
	}, "findSetIndex"), l = 0; l < i; l++) o[l] = this.spawn(r[l]);
	for (var u = a.sort(function(e, n) {
		return t(e) - t(n);
	}), c = 0; c < u.length; c++) {
		var d = u[c], h = d.source()[0], f = d.target()[0], p = s(h), g = s(f), v = o[p], y = o[g];
		p !== g && (r.merge(d), v.merge(y), o.splice(g, 1));
	}
	return r;
}, "kruskal") }, t2 = tr({
	root: null,
	goal: null,
	weight: e(function(e) {
		return 1;
	}, "weight"),
	heuristic: e(function(e) {
		return 0;
	}, "heuristic"),
	directed: !1
}), t5 = { aStar: e(function(t) {
	var n = this.cy(), r = t2(t), a = r.root, i = r.goal, o = r.heuristic, s = r.directed, l = r.weight;
	a = n.collection(a)[0], i = n.collection(i)[0];
	var u, c, d = a.id(), h = i.id(), f = {}, p = {}, g = {}, v = new tQ(function(e, t) {
		return p[e.id()] - p[t.id()];
	}), y = new th(), m = {}, x = {}, w = e(function(e, t) {
		v.push(e), y.add(t);
	}, "addToOpenSet"), E = e(function() {
		c = (u = v.pop()).id(), y.delete(c);
	}, "popFromOpenSet"), C = e(function(e) {
		return y.has(e);
	}, "isInOpenSet");
	w(a, d), f[d] = 0, p[d] = o(a);
	for (var T = 0; v.size() > 0;) {
		if (E(), T++, c === h) {
			for (var k = [], S = i, P = h, B = x[P]; k.unshift(S), null != B && k.unshift(B), null != (S = m[P]);) B = x[P = S.id()];
			return {
				found: !0,
				distance: f[c],
				path: this.spawn(k),
				steps: T
			};
		}
		g[c] = !0;
		for (var _ = u._private.edges, D = 0; D < _.length; D++) {
			var A = _[D];
			if (this.hasElementWithId(A.id()) && !(s && A.data("source") !== c)) {
				var M = A.source(), R = A.target(), I = M.id() !== c ? M : R, L = I.id();
				if (this.hasElementWithId(L) && !g[L]) {
					var N = f[c] + l(A);
					if (!C(L)) {
						f[L] = N, p[L] = N + o(I), w(I, L), m[L] = u, x[L] = A;
						continue;
					}
					N < f[L] && (f[L] = N, p[L] = N + o(I), m[L] = u, x[L] = A);
				}
			}
		}
	}
	return {
		found: !1,
		distance: void 0,
		path: void 0,
		steps: T
	};
}, "aStar") }, t3 = tr({
	weight: e(function(e) {
		return 1;
	}, "weight"),
	directed: !1
}), t4 = { floydWarshall: e(function(t) {
	for (var n = this.cy(), r = t3(t), a = r.weight, i = r.directed, o = this.byGroup(), s = o.nodes, l = o.edges, u = s.length, c = u * u, d = e(function(e) {
		return s.indexOf(e);
	}, "indexOf"), h = e(function(e) {
		return s[e];
	}, "atIndex"), f = Array(c), p = 0; p < c; p++) {
		var g = p % u;
		(p - g) / u === g ? f[p] = 0 : f[p] = Infinity;
	}
	for (var v = Array(c), y = Array(c), m = 0; m < l.length; m++) {
		var x = l[m], w = x.source()[0], E = x.target()[0];
		if (w !== E) {
			var C = d(w), T = d(E), k = C * u + T, S = a(x);
			if (f[k] > S && (f[k] = S, v[k] = T, y[k] = x), !i) {
				var P = T * u + C;
				!i && f[P] > S && (f[P] = S, v[P] = C, y[P] = x);
			}
		}
	}
	for (var B = 0; B < u; B++) for (var D = 0; D < u; D++) for (var A = D * u + B, M = 0; M < u; M++) {
		var R = D * u + M, I = B * u + M;
		f[A] + f[I] < f[R] && (f[R] = f[A] + f[I], v[R] = v[A]);
	}
	var L = e(function(e) {
		return (_(e) ? n.filter(e) : e)[0];
	}, "getArgEle"), N = e(function(e) {
		return d(L(e));
	}, "indexOfArgEle");
	return {
		distance: e(function(e, t) {
			return f[N(e) * u + N(t)];
		}, "distance"),
		path: e(function(e, t) {
			var r = N(e), a = N(t), i = h(r);
			if (r === a) return i.collection();
			if (null == v[r * u + a]) return n.collection();
			var o, s = n.collection(), l = r;
			for (s.merge(i); r !== a;) l = r, r = v[r * u + a], o = y[l * u + r], s.merge(o), s.merge(h(r));
			return s;
		}, "path")
	};
}, "floydWarshall") }, t9 = tr({
	weight: e(function(e) {
		return 1;
	}, "weight"),
	directed: !1,
	root: null
}), t6 = { bellmanFord: e(function(t) {
	var n = this, r = t9(t), a = r.weight, i = r.directed, o = r.root, s = this, l = this.cy(), u = this.byGroup(), c = u.edges, d = u.nodes, h = d.length, f = new tc(), p = !1, g = [];
	o = l.collection(o)[0], c.unmergeBy(function(e) {
		return e.isLoop();
	});
	for (var v = c.length, y = e(function(e) {
		var t = f.get(e.id());
		return t || (t = {}, f.set(e.id(), t)), t;
	}, "getInfo"), m = e(function(e) {
		return (_(e) ? l.$(e) : e)[0];
	}, "getNodeFromTo"), x = e(function(e) {
		return y(m(e)).dist;
	}, "distanceTo"), w = e(function(e) {
		for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o, r = m(e), a = [], i = r;;) {
			if (null == i) return n.spawn();
			var l = y(i), u = l.edge, c = l.pred;
			if (a.unshift(i[0]), i.same(t) && a.length > 0) break;
			null != u && a.unshift(u), i = c;
		}
		return s.spawn(a);
	}, "pathTo"), E = 0; E < h; E++) {
		var C = d[E], T = y(C);
		C.same(o) ? T.dist = 0 : T.dist = Infinity, T.pred = null, T.edge = null;
	}
	for (var k = !1, S = e(function(e, t, n, r, a, i) {
		var o = r.dist + i;
		o < a.dist && !n.same(r.edge) && (a.dist = o, a.pred = e, a.edge = n, k = !0);
	}, "checkForEdgeReplacement"), P = 1; P < h; P++) {
		k = !1;
		for (var B = 0; B < v; B++) {
			var D = c[B], A = D.source(), M = D.target(), R = a(D), I = y(A), L = y(M);
			S(A, M, D, I, L, R), i || S(M, A, D, L, I, R);
		}
		if (!k) break;
	}
	if (k) for (var N = [], z = 0; z < v; z++) {
		var O = c[z], F = O.source(), V = O.target(), q = a(O), j = y(F).dist, X = y(V).dist;
		if (j + q < X || !i && X + q < j) if (p || (e9("Graph contains a negative weight cycle for Bellman-Ford"), p = !0), !1 !== t.findNegativeWeightCycles) {
			var Y = [];
			j + q < X && Y.push(F), !i && X + q < j && Y.push(V);
			for (var W = Y.length, H = 0; H < W; H++) {
				var K = Y[H], U = [K];
				U.push(y(K).edge);
				for (var G = y(K).pred; -1 === U.indexOf(G);) U.push(G), U.push(y(G).edge), G = y(G).pred;
				U = U.slice(U.indexOf(G));
				for (var Z = U[0].id(), $ = 0, Q = 2; Q < U.length; Q += 2) U[Q].id() < Z && (Z = U[Q].id(), $ = Q);
				(U = U.slice($).concat(U.slice(0, $))).push(U[0]);
				var J = U.map(function(e) {
					return e.id();
				}).join(",");
				-1 === N.indexOf(J) && (g.push(s.spawn(U)), N.push(J));
			}
		} else break;
	}
	return {
		distanceTo: x,
		pathTo: w,
		hasNegativeWeightCycle: p,
		negativeWeightCycles: g
	};
}, "bellmanFord") }, t8 = Math.sqrt(2), t7 = e(function(e, t, n) {
	0 === n.length && e3("Karger-Stein must be run on a connected (sub)graph");
	for (var r = n[e], a = r[1], i = r[2], o = t[a], s = t[i], l = n.length - 1; l >= 0; l--) {
		var u = n[l], c = u[1], d = u[2];
		(t[c] === o && t[d] === s || t[c] === s && t[d] === o) && n.splice(l, 1);
	}
	for (var h = 0; h < n.length; h++) {
		var f = n[h];
		f[1] === s ? (n[h] = f.slice(), n[h][1] = o) : f[2] === s && (n[h] = f.slice(), n[h][2] = o);
	}
	for (var p = 0; p < t.length; p++) t[p] === s && (t[p] = o);
	return n;
}, "collapse"), ne = e(function(e, t, n, r) {
	for (; n > r;) t = t7(Math.floor(Math.random() * t.length), e, t), n--;
	return t;
}, "contractUntil"), nt = { kargerStein: e(function() {
	var t = this, n = this.byGroup(), r = n.nodes, a = n.edges;
	a.unmergeBy(function(e) {
		return e.isLoop();
	});
	var i = r.length, o = a.length, s = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), l = Math.floor(i / t8);
	if (i < 2) return void e3("At least 2 nodes are required for Karger-Stein algorithm");
	for (var u = [], c = 0; c < o; c++) {
		var d = a[c];
		u.push([
			c,
			r.indexOf(d.source()),
			r.indexOf(d.target())
		]);
	}
	for (var h = Infinity, f = [], p = Array(i), g = Array(i), v = Array(i), y = e(function(e, t) {
		for (var n = 0; n < i; n++) t[n] = e[n];
	}, "copyNodesMap"), m = 0; m <= s; m++) {
		for (var x = 0; x < i; x++) g[x] = x;
		var w = ne(g, u.slice(), i, l), E = w.slice();
		y(g, v);
		var C = ne(g, w, l, 2), T = ne(v, E, l, 2);
		C.length <= T.length && C.length < h ? (h = C.length, f = C, y(g, p)) : T.length <= C.length && T.length < h && (h = T.length, f = T, y(v, p));
	}
	for (var k = this.spawn(f.map(function(e) {
		return a[e[0]];
	})), S = this.spawn(), P = this.spawn(), B = p[0], _ = 0; _ < p.length; _++) {
		var D = p[_], A = r[_];
		D === B ? S.merge(A) : P.merge(A);
	}
	var M = e(function(e) {
		var n = t.spawn();
		return e.forEach(function(e) {
			n.merge(e), e.connectedEdges().forEach(function(e) {
				t.contains(e) && !k.contains(e) && n.merge(e);
			});
		}), n;
	}, "constructComponent");
	return {
		cut: k,
		components: [M(S), M(P)],
		partition1: S,
		partition2: P
	};
}, "kargerStein") }, nn = e(function(e) {
	return {
		x: e.x,
		y: e.y
	};
}, "copyPosition"), nr = e(function(e, t, n) {
	return {
		x: e.x * t + n.x,
		y: e.y * t + n.y
	};
}, "modelToRenderedPosition"), na = e(function(e, t, n) {
	return {
		x: (e.x - n.x) / t,
		y: (e.y - n.y) / t
	};
}, "renderedToModelPosition"), ni = e(function(e) {
	return {
		x: e[0],
		y: e[1]
	};
}, "array2point"), no = e(function(e) {
	for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length, r = Infinity, a = t; a < n; a++) {
		var i = e[a];
		isFinite(i) && (r = Math.min(i, r));
	}
	return r;
}, "min"), ns = e(function(e) {
	for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length, r = -Infinity, a = t; a < n; a++) {
		var i = e[a];
		isFinite(i) && (r = Math.max(i, r));
	}
	return r;
}, "max"), nl = e(function(e) {
	for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length, r = 0, a = 0, i = t; i < n; i++) {
		var o = e[i];
		isFinite(o) && (r += o, a++);
	}
	return r / a;
}, "mean"), nu = e(function(e) {
	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length, r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4], i = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
	r ? e = e.slice(t, n) : (n < e.length && e.splice(n, e.length - n), t > 0 && e.splice(0, t));
	for (var o = 0, s = e.length - 1; s >= 0; s--) {
		var l = e[s];
		i ? isFinite(l) || (e[s] = -Infinity, o++) : e.splice(s, 1);
	}
	a && e.sort(function(e, t) {
		return e - t;
	});
	var u = e.length, c = Math.floor(u / 2);
	return u % 2 != 0 ? e[c + 1 + o] : (e[c - 1 + o] + e[c + o]) / 2;
}, "median"), nc = e(function(e) {
	return Math.PI * e / 180;
}, "deg2rad"), nd = e(function(e, t) {
	return Math.atan2(t, e) - Math.PI / 2;
}, "getAngleFromDisp"), nh = Math.log2 || function(e) {
	return Math.log(e) / Math.log(2);
}, nf = e(function(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}, "signum"), np = e(function(e, t) {
	return Math.sqrt(ng(e, t));
}, "dist"), ng = e(function(e, t) {
	var n = t.x - e.x, r = t.y - e.y;
	return n * n + r * r;
}, "sqdist"), nv = e(function(e) {
	for (var t = e.length, n = 0, r = 0; r < t; r++) n += e[r];
	for (var a = 0; a < t; a++) e[a] = e[a] / n;
	return e;
}, "inPlaceSumNormalize"), ny = e(function(e, t, n, r) {
	return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * t + r * r * n;
}, "qbezierAt"), nm = e(function(e, t, n, r) {
	return {
		x: ny(e.x, t.x, n.x, r),
		y: ny(e.y, t.y, n.y, r)
	};
}, "qbezierPtAt"), nb = e(function(e, t, n, r) {
	var a = {
		x: t.x - e.x,
		y: t.y - e.y
	}, i = np(e, t), o = {
		x: a.x / i,
		y: a.y / i
	};
	return n = n ?? 0, r = r ?? n * i, {
		x: e.x + o.x * r,
		y: e.y + o.y * r
	};
}, "lineAt"), nx = e(function(e, t, n) {
	return Math.max(e, Math.min(n, t));
}, "bound"), nw = e(function(e) {
	if (null == e) return {
		x1: Infinity,
		y1: Infinity,
		x2: -Infinity,
		y2: -Infinity,
		w: 0,
		h: 0
	};
	if (null != e.x1 && null != e.y1) {
		if (null != e.x2 && null != e.y2 && e.x2 >= e.x1 && e.y2 >= e.y1) return {
			x1: e.x1,
			y1: e.y1,
			x2: e.x2,
			y2: e.y2,
			w: e.x2 - e.x1,
			h: e.y2 - e.y1
		};
		if (null != e.w && null != e.h && e.w >= 0 && e.h >= 0) return {
			x1: e.x1,
			y1: e.y1,
			x2: e.x1 + e.w,
			y2: e.y1 + e.h,
			w: e.w,
			h: e.h
		};
	}
}, "makeBoundingBox"), nE = e(function(e) {
	return {
		x1: e.x1,
		x2: e.x2,
		w: e.w,
		y1: e.y1,
		y2: e.y2,
		h: e.h
	};
}, "copyBoundingBox"), nC = e(function(e) {
	e.x1 = Infinity, e.y1 = Infinity, e.x2 = -Infinity, e.y2 = -Infinity, e.w = 0, e.h = 0;
}, "clearBoundingBox"), nT = e(function(e, t) {
	e.x1 = Math.min(e.x1, t.x1), e.x2 = Math.max(e.x2, t.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, t.y1), e.y2 = Math.max(e.y2, t.y2), e.h = e.y2 - e.y1;
}, "updateBoundingBox"), nk = e(function(e, t, n) {
	e.x1 = Math.min(e.x1, t), e.x2 = Math.max(e.x2, t), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, n), e.y2 = Math.max(e.y2, n), e.h = e.y2 - e.y1;
}, "expandBoundingBoxByPoint"), nS = e(function(e) {
	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
	return e.x1 -= t, e.x2 += t, e.y1 -= t, e.y2 += t, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, "expandBoundingBox"), nP = e(function(e) {
	var t, n, r, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0];
	if (1 === i.length) t = n = r = a = i[0];
	else if (2 === i.length) t = r = i[0], a = n = i[1];
	else if (4 === i.length) {
		var o = f(i, 4);
		t = o[0], n = o[1], r = o[2], a = o[3];
	}
	return e.x1 -= a, e.x2 += n, e.y1 -= t, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, "expandBoundingBoxSides"), nB = e(function(e, t) {
	e.x1 = t.x1, e.y1 = t.y1, e.x2 = t.x2, e.y2 = t.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, "assignBoundingBox"), n_ = e(function(e, t) {
	return !(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
}, "boundingBoxesIntersect"), nD = e(function(e, t, n) {
	return e.x1 <= t && t <= e.x2 && e.y1 <= n && n <= e.y2;
}, "inBoundingBox"), nA = e(function(e, t) {
	return nD(e, t.x, t.y);
}, "pointInBoundingBox"), nM = e(function(e, t) {
	return nD(e, t.x1, t.y1) && nD(e, t.x2, t.y2);
}, "boundingBoxInBoundingBox"), nR = null != (t$ = Math.hypot) ? t$ : function(e, t) {
	return Math.sqrt(e * e + t * t);
};
function nI(t, n) {
	if (t.length < 3) throw Error("Need at least 3 vertices");
	var r = e(function(e, t) {
		return {
			x: e.x + t.x,
			y: e.y + t.y
		};
	}, "add"), a = e(function(e, t) {
		return {
			x: e.x - t.x,
			y: e.y - t.y
		};
	}, "sub"), i = e(function(e, t) {
		return {
			x: e.x * t,
			y: e.y * t
		};
	}, "scale"), o = e(function(e, t) {
		return e.x * t.y - e.y * t.x;
	}, "cross"), s = e(function(e) {
		var t = nR(e.x, e.y);
		return 0 === t ? {
			x: 0,
			y: 0
		} : {
			x: e.x / t,
			y: e.y / t
		};
	}, "normalize"), l = e(function(e) {
		for (var t = 0, n = 0; n < e.length; n++) {
			var r = e[n], a = e[(n + 1) % e.length];
			t += r.x * a.y - a.x * r.y;
		}
		return t / 2;
	}, "signedArea"), u = e(function(e, t, n, s) {
		var l = a(t, e), u = a(s, n), c = o(l, u);
		if (1e-9 > Math.abs(c)) return r(e, i(l, .5));
		var d = o(a(n, e), u) / c;
		return r(e, i(l, d));
	}, "intersectLines"), c = t.map(function(e) {
		return {
			x: e.x,
			y: e.y
		};
	});
	0 > l(c) && c.reverse();
	for (var d = c.length, h = [], f = 0; f < d; f++) {
		var p = c[f], g = a(c[(f + 1) % d], p), v = s({
			x: g.y,
			y: -g.x
		});
		h.push(v);
	}
	for (var y = h.map(function(e, t) {
		return {
			p1: r(c[t], i(e, n)),
			p2: r(c[(t + 1) % d], i(e, n))
		};
	}), m = [], x = 0; x < d; x++) {
		var w = y[(x - 1 + d) % d], E = y[x], C = u(w.p1, w.p2, E.p1, E.p2);
		m.push(C);
	}
	return m;
}
function nL(e, t, n, r, a, i) {
	var o = nI(nJ(e, t, n, r, a), i), s = nw();
	return o.forEach(function(e) {
		return nk(s, e.x, e.y);
	}), s;
}
e(nI, "inflatePolygon"), e(nL, "miterBox");
var nN = e(function(e, t, n, r, a, i, o) {
	var s, l, u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "auto", c = "auto" === u ? n9(a, i) : u, d = a / 2, h = i / 2, f = (c = Math.min(c, d, h)) !== d, p = c !== h;
	if (f) {
		var g = n - d + c - o, v = r - h - o, y = n + d - c + o;
		if ((l = nQ(e, t, n, r, g, v, y, v, !1)).length > 0) return l;
	}
	if (p) {
		var m = n + d + o, x = r - h + c - o, w = r + h - c + o;
		if ((l = nQ(e, t, n, r, m, x, m, w, !1)).length > 0) return l;
	}
	if (f) {
		var E = n - d + c - o, C = r + h + o, T = n + d - c + o;
		if ((l = nQ(e, t, n, r, E, C, T, C, !1)).length > 0) return l;
	}
	if (p) {
		var k = n - d - o, S = r - h + c - o, P = r + h - c + o;
		if ((l = nQ(e, t, n, r, k, S, k, P, !1)).length > 0) return l;
	}
	var B = n - d + c, _ = r - h + c;
	if ((s = nZ(e, t, n, r, B, _, c + o)).length > 0 && s[0] <= B && s[1] <= _) return [s[0], s[1]];
	var D = n + d - c, A = r - h + c;
	if ((s = nZ(e, t, n, r, D, A, c + o)).length > 0 && s[0] >= D && s[1] <= A) return [s[0], s[1]];
	var M = n + d - c, R = r + h - c;
	if ((s = nZ(e, t, n, r, M, R, c + o)).length > 0 && s[0] >= M && s[1] >= R) return [s[0], s[1]];
	var I = n - d + c, L = r + h - c;
	return (s = nZ(e, t, n, r, I, L, c + o)).length > 0 && s[0] <= I && s[1] >= L ? [s[0], s[1]] : [];
}, "roundRectangleIntersectLine"), nz = e(function(e, t, n, r, a, i, o) {
	var s = Math.min(n, a), l = Math.max(n, a), u = Math.min(r, i), c = Math.max(r, i);
	return s - o <= e && e <= l + o && u - o <= t && t <= c + o;
}, "inLineVicinity"), nO = e(function(e, t, n, r, a, i, o, s, l) {
	var u = {
		x1: Math.min(n, o, a) - l,
		x2: Math.max(n, o, a) + l,
		y1: Math.min(r, s, i) - l,
		y2: Math.max(r, s, i) + l
	};
	return !(e < u.x1 || e > u.x2 || t < u.y1 || t > u.y2);
}, "inBezierVicinity"), nF = e(function(e, t, n, r) {
	var a = t * t - 4 * e * (n -= r);
	if (a < 0) return [];
	var i = Math.sqrt(a), o = 2 * e;
	return [(-t + i) / o, (-t - i) / o];
}, "solveQuadratic"), nV = e(function(e, t, n, r, a) {
	var i, o, s, l, u, c, d, h;
	if (0 === e && (e = 1e-5), t /= e, n /= e, r /= e, i = (o = (3 * n - t * t) / 9) * o * o + (s = (-(27 * r) + t * (9 * n - t * t * 2)) / 54) * s, a[1] = 0, d = t / 3, i > 0) {
		u = (u = s + Math.sqrt(i)) < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), c = (c = s - Math.sqrt(i)) < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), a[0] = -d + u + c, d += (u + c) / 2, a[4] = a[2] = -d, d = Math.sqrt(3) * (-c + u) / 2, a[3] = d, a[5] = -d;
		return;
	}
	if (a[5] = a[3] = 0, 0 === i) {
		h = s < 0 ? -Math.pow(-s, 1 / 3) : Math.pow(s, 1 / 3), a[0] = -d + 2 * h, a[4] = a[2] = -(h + d);
		return;
	}
	l = Math.acos(s / Math.sqrt(l = (o = -o) * o * o)), h = 2 * Math.sqrt(o), a[0] = -d + h * Math.cos(l / 3), a[2] = -d + h * Math.cos((l + 2 * Math.PI) / 3), a[4] = -d + h * Math.cos((l + 4 * Math.PI) / 3);
}, "solveCubic"), nq = e(function(e, t, n, r, a, i, o, s) {
	var l = [];
	nV(n * n - 4 * n * a + 2 * n * o + 4 * a * a - 4 * a * o + o * o + r * r - 4 * r * i + 2 * r * s + 4 * i * i - 4 * i * s + s * s, 9 * n * a - 3 * n * n - 3 * n * o - 6 * a * a + 3 * a * o + 9 * r * i - 3 * r * r - 3 * r * s - 6 * i * i + 3 * i * s, 3 * n * n - 6 * n * a + n * o - n * e + 2 * a * a + 2 * a * e - o * e + 3 * r * r - 6 * r * i + r * s - r * t + 2 * i * i + 2 * i * t - s * t, n * a - n * n + n * e - a * e + r * i - r * r + r * t - i * t, l);
	for (var u = [], c = 0; c < 6; c += 2) 1e-7 > Math.abs(l[c + 1]) && l[c] >= 0 && l[c] <= 1 && u.push(l[c]);
	u.push(1), u.push(0);
	for (var d, h = -1, f = 0; f < u.length; f++) d = Math.pow(Math.pow(1 - u[f], 2) * n + 2 * (1 - u[f]) * u[f] * a + u[f] * u[f] * o - e, 2) + Math.pow(Math.pow(1 - u[f], 2) * r + 2 * (1 - u[f]) * u[f] * i + u[f] * u[f] * s - t, 2), h >= 0 ? d < h && (h = d) : h = d;
	return h;
}, "sqdistToQuadraticBezier"), nj = e(function(e, t, n, r, a, i) {
	var o = [e - n, t - r], s = [a - n, i - r], l = s[0] * s[0] + s[1] * s[1], u = o[0] * o[0] + o[1] * o[1], c = o[0] * s[0] + o[1] * s[1], d = c * c / l;
	return c < 0 ? u : d > l ? (e - a) * (e - a) + (t - i) * (t - i) : u - d;
}, "sqdistToFiniteLine"), nX = e(function(e, t, n) {
	for (var r, a, i, o, s = 0, l = 0; l < n.length / 2; l++) if (r = n[2 * l], a = n[2 * l + 1], l + 1 < n.length / 2 ? (i = n[(l + 1) * 2], o = n[(l + 1) * 2 + 1]) : (i = n[(l + 1 - n.length / 2) * 2], o = n[(l + 1 - n.length / 2) * 2 + 1]), r != e || i != e) if ((!(r >= e) || !(e >= i)) && (!(r <= e) || !(e <= i))) continue;
	else (e - r) / (i - r) * (o - a) + a > t && s++;
	return s % 2 != 0;
}, "pointInsidePolygonPoints"), nY = e(function(e, t, n, r, a, i, o, s, l) {
	var u, c = Array(n.length);
	null != s[0] ? (u = Math.atan(s[1] / s[0]), s[0] < 0 ? u += Math.PI / 2 : u = -u - Math.PI / 2) : u = s;
	for (var d = Math.cos(-u), h = Math.sin(-u), f = 0; f < c.length / 2; f++) c[2 * f] = i / 2 * (n[2 * f] * d - n[2 * f + 1] * h), c[2 * f + 1] = o / 2 * (n[2 * f + 1] * d + n[2 * f] * h), c[2 * f] += r, c[2 * f + 1] += a;
	return nX(e, t, l > 0 ? nH(nK(c, -l)) : c);
}, "pointInsidePolygon"), nW = e(function(e, t, n, r, a, i, o, s) {
	for (var l = Array(2 * n.length), u = 0; u < s.length; u++) {
		var c = s[u];
		if (l[4 * u + 0] = c.startX, l[4 * u + 1] = c.startY, l[4 * u + 2] = c.stopX, l[4 * u + 3] = c.stopY, Math.pow(c.cx - e, 2) + Math.pow(c.cy - t, 2) <= Math.pow(c.radius, 2)) return !0;
	}
	return nX(e, t, l);
}, "pointInsideRoundPolygon"), nH = e(function(e) {
	for (var t, n, r, a, i, o, s, l, u = Array(e.length / 2), c = 0; c < e.length / 4; c++) {
		t = e[4 * c], n = e[4 * c + 1], r = e[4 * c + 2], a = e[4 * c + 3], c < e.length / 4 - 1 ? (i = e[(c + 1) * 4], o = e[(c + 1) * 4 + 1], s = e[(c + 1) * 4 + 2], l = e[(c + 1) * 4 + 3]) : (i = e[0], o = e[1], s = e[2], l = e[3]);
		var d = nQ(t, n, r, a, i, o, s, l, !0);
		u[2 * c] = d[0], u[2 * c + 1] = d[1];
	}
	return u;
}, "joinLines"), nK = e(function(e, t) {
	for (var n, r, a, i, o = Array(2 * e.length), s = 0; s < e.length / 2; s++) {
		n = e[2 * s], r = e[2 * s + 1], s < e.length / 2 - 1 ? (a = e[(s + 1) * 2], i = e[(s + 1) * 2 + 1]) : (a = e[0], i = e[1]);
		var l = i - r, u = -(a - n), c = Math.sqrt(l * l + u * u), d = l / c, h = u / c;
		o[4 * s] = n + d * t, o[4 * s + 1] = r + h * t, o[4 * s + 2] = a + d * t, o[4 * s + 3] = i + h * t;
	}
	return o;
}, "expandPolygon"), nU = e(function(e, t, n, r, a, i) {
	var o = n - e, s = r - t, l = Math.sqrt((o /= a) * o + (s /= i) * s), u = l - 1;
	if (u < 0) return [];
	var c = u / l;
	return [(n - e) * c + e, (r - t) * c + t];
}, "intersectLineEllipse"), nG = e(function(e, t, n, r, a, i, o) {
	return e -= a, t -= i, (e /= n / 2 + o) * e + (t /= r / 2 + o) * t <= 1;
}, "checkInEllipse"), nZ = e(function(e, t, n, r, a, i, o) {
	var s = [n - e, r - t], l = [e - a, t - i], u = s[0] * s[0] + s[1] * s[1], c = 2 * (l[0] * s[0] + l[1] * s[1]), d = c * c - 4 * u * (l[0] * l[0] + l[1] * l[1] - o * o);
	if (d < 0) return [];
	var h = (-c + Math.sqrt(d)) / (2 * u), f = (-c - Math.sqrt(d)) / (2 * u), p = Math.min(h, f), g = Math.max(h, f), v = [];
	if (p >= 0 && p <= 1 && v.push(p), g >= 0 && g <= 1 && v.push(g), 0 === v.length) return [];
	var y = v[0] * s[0] + e, m = v[0] * s[1] + t;
	return v.length > 1 ? v[0] == v[1] ? [y, m] : [
		y,
		m,
		v[1] * s[0] + e,
		v[1] * s[1] + t
	] : [y, m];
}, "intersectLineCircle"), n$ = e(function(e, t, n) {
	return t <= e && e <= n || n <= e && e <= t ? e : e <= t && t <= n || n <= t && t <= e ? t : n;
}, "midOfThree"), nQ = e(function(e, t, n, r, a, i, o, s, l) {
	var u = e - a, c = n - e, d = o - a, h = t - i, f = r - t, p = s - i, g = d * h - p * u, v = c * h - f * u, y = p * c - d * f;
	if (0 === y) return 0 === g || 0 === v ? n$(e, n, o) === o ? [o, s] : n$(e, n, a) === a ? [a, i] : n$(a, o, n) === n ? [n, r] : [] : [];
	var m = g / y, x = v / y;
	return -.001 <= m && m <= 1.001 && -.001 <= x && x <= 1.001 || l ? [e + m * c, t + m * f] : [];
}, "finiteLinesIntersect"), nJ = e(function(e, t, n, r, a) {
	var i = [], o = r / 2, s = a / 2;
	i.push({
		x: t + o * e[0],
		y: n + s * e[1]
	});
	for (var l = 1; l < e.length / 2; l++) i.push({
		x: t + o * e[2 * l],
		y: n + s * e[2 * l + 1]
	});
	return i;
}, "transformPoints"), n0 = e(function(e, t, n, r, a, i, o, s) {
	var l, u = [], c = Array(n.length), d = !0;
	if (i ?? (d = !1), d) {
		for (var h = 0; h < c.length / 2; h++) c[2 * h] = n[2 * h] * i + r, c[2 * h + 1] = n[2 * h + 1] * o + a;
		f = s > 0 ? nH(nK(c, -s)) : c;
	} else f = n;
	for (var f, p, g, v, y, m = 0; m < f.length / 2; m++) p = f[2 * m], g = f[2 * m + 1], m < f.length / 2 - 1 ? (v = f[(m + 1) * 2], y = f[(m + 1) * 2 + 1]) : (v = f[0], y = f[1]), 0 !== (l = nQ(e, t, r, a, p, g, v, y)).length && u.push(l[0], l[1]);
	return u;
}, "polygonIntersectLine"), n1 = e(function(e, t, n, r, a, i, o, s, l) {
	var u, c = [], d = Array(2 * n.length);
	l.forEach(function(n, i) {
		0 === i ? (d[d.length - 2] = n.startX, d[d.length - 1] = n.startY) : (d[4 * i - 2] = n.startX, d[4 * i - 1] = n.startY), d[4 * i] = n.stopX, d[4 * i + 1] = n.stopY, 0 !== (u = nZ(e, t, r, a, n.cx, n.cy, n.radius)).length && c.push(u[0], u[1]);
	});
	for (var h = 0; h < d.length / 4; h++) 0 !== (u = nQ(e, t, r, a, d[4 * h], d[4 * h + 1], d[4 * h + 2], d[4 * h + 3], !1)).length && c.push(u[0], u[1]);
	if (c.length > 2) {
		for (var f = [c[0], c[1]], p = Math.pow(f[0] - e, 2) + Math.pow(f[1] - t, 2), g = 1; g < c.length / 2; g++) {
			var v = Math.pow(c[2 * g] - e, 2) + Math.pow(c[2 * g + 1] - t, 2);
			v <= p && (f[0] = c[2 * g], f[1] = c[2 * g + 1], p = v);
		}
		return f;
	}
	return c;
}, "roundPolygonIntersectLine"), n2 = e(function(e, t, n) {
	var r = [e[0] - t[0], e[1] - t[1]], a = Math.sqrt(r[0] * r[0] + r[1] * r[1]), i = (a - n) / a;
	return i < 0 && (i = 1e-5), [t[0] + i * r[0], t[1] + i * r[1]];
}, "shortenIntersection"), n5 = e(function(e, t) {
	return n3(n4(e, t));
}, "generateUnitNgonPointsFitToSquare"), n3 = e(function(e) {
	for (var t, n, r = e.length / 2, a = Infinity, i = Infinity, o = -Infinity, s = -Infinity, l = 0; l < r; l++) t = e[2 * l], n = e[2 * l + 1], a = Math.min(a, t), o = Math.max(o, t), i = Math.min(i, n), s = Math.max(s, n);
	for (var u = 2 / (o - a), c = 2 / (s - i), d = 0; d < r; d++) t = e[2 * d] = e[2 * d] * u, n = e[2 * d + 1] = e[2 * d + 1] * c, a = Math.min(a, t), o = Math.max(o, t), i = Math.min(i, n), s = Math.max(s, n);
	if (i < -1) for (var h = 0; h < r; h++) n = e[2 * h + 1] = e[2 * h + 1] + (-1 - i);
	return e;
}, "fitPolygonToSquare"), n4 = e(function(e, t) {
	var n = 1 / e * 2 * Math.PI, r = e % 2 == 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
	r += t;
	for (var a, i = Array(2 * e), o = 0; o < e; o++) a = o * n + r, i[2 * o] = Math.cos(a), i[2 * o + 1] = Math.sin(-a);
	return i;
}, "generateUnitNgonPoints"), n9 = e(function(e, t) {
	return Math.min(e / 4, t / 4, 8);
}, "getRoundRectangleRadius"), n6 = e(function(e, t) {
	return Math.min(e / 10, t / 10, 8);
}, "getRoundPolygonRadius"), n8 = e(function() {
	return 8;
}, "getCutRectangleCornerLength"), n7 = e(function(e, t, n) {
	return [
		e - 2 * t + n,
		2 * (t - e),
		e
	];
}, "bezierPtsToQuadCoeff"), re = e(function(e, t) {
	return {
		heightOffset: Math.min(15, .05 * t),
		widthOffset: Math.min(100, .25 * e),
		ctrlPtOffsetPct: .05
	};
}, "getBarrelCurveConstants");
function rt(t, n) {
	function r(e) {
		for (var t = [], n = 0; n < e.length; n++) {
			var r = e[n], a = e[(n + 1) % e.length], i = {
				x: a.x - r.x,
				y: a.y - r.y
			}, o = {
				x: -i.y,
				y: i.x
			}, s = Math.sqrt(o.x * o.x + o.y * o.y);
			t.push({
				x: o.x / s,
				y: o.y / s
			});
		}
		return t;
	}
	function a(e, t) {
		var n, r = Infinity, a = -Infinity, i = s(e);
		try {
			for (i.s(); !(n = i.n()).done;) {
				var o = n.value, l = o.x * t.x + o.y * t.y;
				r = Math.min(r, l), a = Math.max(a, l);
			}
		} catch (e) {
			i.e(e);
		} finally {
			i.f();
		}
		return {
			min: r,
			max: a
		};
	}
	function i(e, t) {
		return !(e.max < t.min || t.max < e.min);
	}
	e(r, "getAxes"), e(a, "project"), e(i, "overlaps");
	var o, l = s([].concat(p(r(t)), p(r(n))));
	try {
		for (l.s(); !(o = l.n()).done;) {
			var u = o.value, c = a(t, u), d = a(n, u);
			if (!i(c, d)) return !1;
		}
	} catch (e) {
		l.e(e);
	} finally {
		l.f();
	}
	return !0;
}
e(rt, "satPolygonIntersection");
var rn = tr({
	dampingFactor: .8,
	precision: 1e-6,
	iterations: 200,
	weight: e(function(e) {
		return 1;
	}, "weight")
}), rr = { pageRank: e(function(t) {
	for (var n = rn(t), r = n.dampingFactor, a = n.precision, i = n.iterations, o = n.weight, s = this._private.cy, l = this.byGroup(), u = l.nodes, c = l.edges, d = u.length, h = d * d, f = c.length, p = Array(h), g = Array(d), v = (1 - r) / d, y = 0; y < d; y++) {
		for (var m = 0; m < d; m++) p[y * d + m] = 0;
		g[y] = 0;
	}
	for (var x = 0; x < f; x++) {
		var w = c[x], E = w.data("source"), C = w.data("target");
		if (E !== C) {
			var T = u.indexOfId(E), k = u.indexOfId(C), S = o(w), P = k * d + T;
			p[P] += S, g[T] += S;
		}
	}
	for (var B = 1 / d + v, _ = 0; _ < d; _++) if (0 === g[_]) for (var D = 0; D < d; D++) p[D * d + _] = B;
	else for (var A = 0; A < d; A++) {
		var M = A * d + _;
		p[M] = p[M] / g[_] + v;
	}
	for (var R, I = Array(d), L = Array(d), N = 0; N < d; N++) I[N] = 1;
	for (var z = 0; z < i; z++) {
		for (var O = 0; O < d; O++) L[O] = 0;
		for (var F = 0; F < d; F++) for (var V = 0; V < d; V++) {
			var q = F * d + V;
			L[F] += p[q] * I[V];
		}
		nv(L), R = I, I = L, L = R;
		for (var j = 0, X = 0; X < d; X++) {
			var Y = R[X] - I[X];
			j += Y * Y;
		}
		if (j < a) break;
	}
	return { rank: e(function(e) {
		return e = s.collection(e)[0], I[u.indexOf(e)];
	}, "rank") };
}, "pageRank") }, ra = tr({
	root: null,
	weight: e(function(e) {
		return 1;
	}, "weight"),
	directed: !1,
	alpha: 0
}), ri = {
	degreeCentralityNormalized: e(function(t) {
		t = ra(t);
		var n = this.cy(), r = this.nodes(), a = r.length;
		if (t.directed) {
			for (var i = {}, o = {}, s = 0, l = 0, u = 0; u < a; u++) {
				var c = r[u], d = c.id();
				t.root = c;
				var h = this.degreeCentrality(t);
				s < h.indegree && (s = h.indegree), l < h.outdegree && (l = h.outdegree), i[d] = h.indegree, o[d] = h.outdegree;
			}
			return {
				indegree: e(function(e) {
					return 0 == s ? 0 : (_(e) && (e = n.filter(e)), i[e.id()] / s);
				}, "indegree"),
				outdegree: e(function(e) {
					return 0 === l ? 0 : (_(e) && (e = n.filter(e)), o[e.id()] / l);
				}, "outdegree")
			};
		}
		for (var f = {}, p = 0, g = 0; g < a; g++) {
			var v = r[g];
			t.root = v;
			var y = this.degreeCentrality(t);
			p < y.degree && (p = y.degree), f[v.id()] = y.degree;
		}
		return { degree: e(function(e) {
			return 0 === p ? 0 : (_(e) && (e = n.filter(e)), f[e.id()] / p);
		}, "degree") };
	}, "degreeCentralityNormalized"),
	degreeCentrality: e(function(e) {
		e = ra(e);
		var t = this.cy(), n = this, r = e, a = r.root, i = r.weight, o = r.directed, s = r.alpha;
		if (a = t.collection(a)[0], o) {
			for (var l = a.connectedEdges(), u = l.filter(function(e) {
				return e.target().same(a) && n.has(e);
			}), c = l.filter(function(e) {
				return e.source().same(a) && n.has(e);
			}), d = u.length, h = c.length, f = 0, p = 0, g = 0; g < u.length; g++) f += i(u[g]);
			for (var v = 0; v < c.length; v++) p += i(c[v]);
			return {
				indegree: Math.pow(d, 1 - s) * Math.pow(f, s),
				outdegree: Math.pow(h, 1 - s) * Math.pow(p, s)
			};
		}
		for (var y = a.connectedEdges().intersection(n), m = y.length, x = 0, w = 0; w < y.length; w++) x += i(y[w]);
		return { degree: Math.pow(m, 1 - s) * Math.pow(x, s) };
	}, "degreeCentrality")
};
ri.dc = ri.degreeCentrality, ri.dcn = ri.degreeCentralityNormalised = ri.degreeCentralityNormalized;
var ro = tr({
	harmonic: !0,
	weight: e(function() {
		return 1;
	}, "weight"),
	directed: !1,
	root: null
}), rs = {
	closenessCentralityNormalized: e(function(t) {
		for (var n = ro(t), r = n.harmonic, a = n.weight, i = n.directed, o = this.cy(), s = {}, l = 0, u = this.nodes(), c = this.floydWarshall({
			weight: a,
			directed: i
		}), d = 0; d < u.length; d++) {
			for (var h = 0, f = u[d], p = 0; p < u.length; p++) if (d !== p) {
				var g = c.distance(f, u[p]);
				r ? h += 1 / g : h += g;
			}
			r || (h = 1 / h), l < h && (l = h), s[f.id()] = h;
		}
		return { closeness: e(function(e) {
			return 0 == l ? 0 : s[e = _(e) ? o.filter(e)[0].id() : e.id()] / l;
		}, "closeness") };
	}, "closenessCentralityNormalized"),
	closenessCentrality: e(function(e) {
		var t = ro(e), n = t.root, r = t.weight, a = t.directed, i = t.harmonic;
		n = this.filter(n)[0];
		for (var o = this.dijkstra({
			root: n,
			weight: r,
			directed: a
		}), s = 0, l = this.nodes(), u = 0; u < l.length; u++) {
			var c = l[u];
			if (!c.same(n)) {
				var d = o.distanceTo(c);
				i ? s += 1 / d : s += d;
			}
		}
		return i ? s : 1 / s;
	}, "closenessCentrality")
};
rs.cc = rs.closenessCentrality, rs.ccn = rs.closenessCentralityNormalised = rs.closenessCentralityNormalized;
var rl = tr({
	weight: null,
	directed: !1
}), ru = { betweennessCentrality: e(function(t) {
	for (var n = rl(t), r = n.directed, a = n.weight, i = null != a, o = this.cy(), s = this.nodes(), l = {}, u = {}, c = 0, d = {
		set: e(function(e, t) {
			u[e] = t, t > c && (c = t);
		}, "set"),
		get: e(function(e) {
			return u[e];
		}, "get")
	}, h = 0; h < s.length; h++) {
		var f = s[h], p = f.id();
		r ? l[p] = f.outgoers().nodes() : l[p] = f.openNeighborhood().nodes(), d.set(p, 0);
	}
	for (var g = e(function() {
		for (var e = s[v].id(), t = [], n = {}, r = {}, u = {}, c = new tQ(function(e, t) {
			return u[e] - u[t];
		}), h = 0; h < s.length; h++) {
			var f = s[h].id();
			n[f] = [], r[f] = 0, u[f] = Infinity;
		}
		for (r[e] = 1, u[e] = 0, c.push(e); !c.empty();) {
			var p = c.pop();
			if (t.push(p), i) for (var g = 0; g < l[p].length; g++) {
				var y = l[p][g], m = o.getElementById(p), w = a(m.edgesTo(y).length > 0 ? m.edgesTo(y)[0] : y.edgesTo(m)[0]);
				u[y = y.id()] > u[p] + w && (u[y] = u[p] + w, 0 > c.nodes.indexOf(y) ? c.push(y) : c.updateItem(y), r[y] = 0, n[y] = []), u[y] == u[p] + w && (r[y] = r[y] + r[p], n[y].push(p));
			}
			else for (var E = 0; E < l[p].length; E++) {
				var C = l[p][E].id();
				u[C] == Infinity && (c.push(C), u[C] = u[p] + 1), u[C] == u[p] + 1 && (r[C] = r[C] + r[p], n[C].push(p));
			}
		}
		for (var T = {}, k = 0; k < s.length; k++) T[s[k].id()] = 0;
		for (; t.length > 0;) {
			for (var S = t.pop(), P = 0; P < n[S].length; P++) {
				var B = n[S][P];
				T[B] = T[B] + r[B] / r[S] * (1 + T[S]);
			}
			S != s[v].id() && d.set(S, d.get(S) + T[S]);
		}
	}, "_loop"), v = 0; v < s.length; v++) g();
	var y = {
		betweenness: e(function(e) {
			var t = o.collection(e).id();
			return d.get(t);
		}, "betweenness"),
		betweennessNormalized: e(function(e) {
			if (0 == c) return 0;
			var t = o.collection(e).id();
			return d.get(t) / c;
		}, "betweennessNormalized")
	};
	return y.betweennessNormalised = y.betweennessNormalized, y;
}, "betweennessCentrality") };
ru.bc = ru.betweennessCentrality;
var rc = tr({
	expandFactor: 2,
	inflateFactor: 2,
	multFactor: 1,
	maxIterations: 20,
	attributes: [function(e) {
		return 1;
	}]
}), rd = e(function(e) {
	return rc(e);
}, "setOptions"), rh = e(function(e, t) {
	for (var n = 0, r = 0; r < t.length; r++) n += t[r](e);
	return n;
}, "getSimilarity"), rf = e(function(e, t, n) {
	for (var r = 0; r < t; r++) e[r * t + r] = n;
}, "addLoops"), rp = e(function(e, t) {
	for (var n, r = 0; r < t; r++) {
		n = 0;
		for (var a = 0; a < t; a++) n += e[a * t + r];
		for (var i = 0; i < t; i++) e[i * t + r] = e[i * t + r] / n;
	}
}, "normalize"), rg = e(function(e, t, n) {
	for (var r = Array(n * n), a = 0; a < n; a++) {
		for (var i = 0; i < n; i++) r[a * n + i] = 0;
		for (var o = 0; o < n; o++) for (var s = 0; s < n; s++) r[a * n + s] += e[a * n + o] * t[o * n + s];
	}
	return r;
}, "mmult"), rv = e(function(e, t, n) {
	for (var r = e.slice(0), a = 1; a < n; a++) e = rg(e, r, t);
	return e;
}, "expand"), ry = e(function(e, t, n) {
	for (var r = Array(t * t), a = 0; a < t * t; a++) r[a] = Math.pow(e[a], n);
	return rp(r, t), r;
}, "inflate"), rm = e(function(e, t, n, r) {
	for (var a = 0; a < n; a++) if (Math.round(e[a] * Math.pow(10, r)) / Math.pow(10, r) != Math.round(t[a] * Math.pow(10, r)) / Math.pow(10, r)) return !1;
	return !0;
}, "hasConverged"), rb = e(function(e, t, n, r) {
	for (var a = [], i = 0; i < t; i++) {
		for (var o = [], s = 0; s < t; s++) Math.round(1e3 * e[i * t + s]) / 1e3 > 0 && o.push(n[s]);
		0 !== o.length && a.push(r.collection(o));
	}
	return a;
}, "assign"), rx = e(function(e, t) {
	for (var n = 0; n < e.length; n++) if (!t[n] || e[n].id() !== t[n].id()) return !1;
	return !0;
}, "isDuplicate"), rw = e(function(e) {
	for (var t = 0; t < e.length; t++) for (var n = 0; n < e.length; n++) t != n && rx(e[t], e[n]) && e.splice(n, 1);
	return e;
}, "removeDuplicates"), rE = e(function(e) {
	for (var t = this.nodes(), n = this.edges(), r = this.cy(), a = rd(e), i = {}, o = 0; o < t.length; o++) i[t[o].id()] = o;
	for (var s, l = t.length, u = l * l, c = Array(u), d = 0; d < u; d++) c[d] = 0;
	for (var h = 0; h < n.length; h++) {
		var f = n[h], p = i[f.source().id()], g = i[f.target().id()], v = rh(f, a.attributes);
		c[p * l + g] += v, c[g * l + p] += v;
	}
	rf(c, l, a.multFactor), rp(c, l);
	for (var y = !0, m = 0; y && m < a.maxIterations;) y = !1, rm(c = ry(s = rv(c, l, a.expandFactor), l, a.inflateFactor), s, u, 4) || (y = !0), m++;
	return rw(rb(c, l, t, r));
}, "markovClustering"), rC = e(function(e) {
	return e;
}, "identity"), rT = e(function(e, t) {
	return Math.abs(t - e);
}, "absDiff"), rk = e(function(e, t, n) {
	return e + rT(t, n);
}, "addAbsDiff"), rS = e(function(e, t, n) {
	return e + Math.pow(n - t, 2);
}, "addSquaredDiff"), rP = e(function(e) {
	return Math.sqrt(e);
}, "sqrt"), rB = e(function(e, t, n) {
	return Math.max(e, rT(t, n));
}, "maxAbsDiff"), r_ = e(function(e, t, n, r, a) {
	for (var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : rC, o = r, s = 0; s < e; s++) o = a(o, t(s), n(s));
	return i(o);
}, "getDistance"), rD = {
	euclidean: e(function(e, t, n) {
		return e >= 2 ? r_(e, t, n, 0, rS, rP) : r_(e, t, n, 0, rk);
	}, "euclidean"),
	squaredEuclidean: e(function(e, t, n) {
		return r_(e, t, n, 0, rS);
	}, "squaredEuclidean"),
	manhattan: e(function(e, t, n) {
		return r_(e, t, n, 0, rk);
	}, "manhattan"),
	max: e(function(e, t, n) {
		return r_(e, t, n, -Infinity, rB);
	}, "max")
};
function rA(e, t, n, r, a, i) {
	var o;
	return o = D(e) ? e : rD[e] || rD.euclidean, 0 === t && D(e) ? o(a, i) : o(t, n, r, a, i);
}
rD["squared-euclidean"] = rD.squaredEuclidean, rD.squaredeuclidean = rD.squaredEuclidean, e(rA, "clusteringDistance");
var rM = tr({
	k: 2,
	m: 2,
	sensitivityThreshold: 1e-4,
	distance: "euclidean",
	maxIterations: 10,
	attributes: [],
	testMode: !1,
	testCentroids: null
}), rR = e(function(e) {
	return rM(e);
}, "setOptions"), rI = e(function(t, n, r, a, i) {
	var o = "kMedoids" !== i ? function(e) {
		return r[e];
	} : function(e) {
		return a[e](r);
	}, s = e(function(e) {
		return a[e](n);
	}, "getQ");
	return rA(t, a.length, o, s, r, n);
}, "getDist"), rL = e(function(e, t, n) {
	for (var r = n.length, a = Array(r), i = Array(r), o = Array(t), s = null, l = 0; l < r; l++) a[l] = e.min(n[l]).value, i[l] = e.max(n[l]).value;
	for (var u = 0; u < t; u++) {
		s = [];
		for (var c = 0; c < r; c++) s[c] = Math.random() * (i[c] - a[c]) + a[c];
		o[u] = s;
	}
	return o;
}, "randomCentroids"), rN = e(function(e, t, n, r, a) {
	for (var i = Infinity, o = 0, s = 0; s < t.length; s++) {
		var l = rI(n, e, t[s], r, a);
		l < i && (i = l, o = s);
	}
	return o;
}, "classify"), rz = e(function(e, t, n) {
	for (var r = [], a = null, i = 0; i < t.length; i++) n[(a = t[i]).id()] === e && r.push(a);
	return r;
}, "buildCluster"), rO = e(function(e, t, n) {
	return Math.abs(t - e) <= n;
}, "haveValuesConverged"), rF = e(function(e, t, n) {
	for (var r = 0; r < e.length; r++) for (var a = 0; a < e[r].length; a++) if (Math.abs(e[r][a] - t[r][a]) > n) return !1;
	return !0;
}, "haveMatricesConverged"), rV = e(function(e, t, n) {
	for (var r = 0; r < n; r++) if (e === t[r]) return !0;
	return !1;
}, "seenBefore"), rq = e(function(e, t) {
	var n = Array(t);
	if (e.length < 50) for (var r = 0; r < t; r++) {
		for (var a = e[Math.floor(Math.random() * e.length)]; rV(a, n, r);) a = e[Math.floor(Math.random() * e.length)];
		n[r] = a;
	}
	else for (var i = 0; i < t; i++) n[i] = e[Math.floor(Math.random() * e.length)];
	return n;
}, "randomMedoids"), rj = e(function(e, t, n) {
	for (var r = 0, a = 0; a < t.length; a++) r += rI("manhattan", t[a], e, n, "kMedoids");
	return r;
}, "findCost"), rX = e(function(e) {
	var t, n = this.cy(), r = this.nodes(), a = null, i = rR(e), o = Array(i.k), s = {};
	i.testMode ? "number" == typeof i.testCentroids ? (i.testCentroids, t = rL(r, i.k, i.attributes)) : t = "object" === y(i.testCentroids) ? i.testCentroids : rL(r, i.k, i.attributes) : t = rL(r, i.k, i.attributes);
	for (var l = !0, u = 0; l && u < i.maxIterations;) {
		for (var c = 0; c < r.length; c++) s[(a = r[c]).id()] = rN(a, t, i.distance, i.attributes, "kMeans");
		l = !1;
		for (var d = 0; d < i.k; d++) {
			var h = rz(d, r, s);
			if (0 !== h.length) {
				for (var f = i.attributes.length, p = t[d], g = Array(f), v = Array(f), m = 0; m < f; m++) {
					v[m] = 0;
					for (var x = 0; x < h.length; x++) a = h[x], v[m] += i.attributes[m](a);
					g[m] = v[m] / h.length, rO(g[m], p[m], i.sensitivityThreshold) || (l = !0);
				}
				t[d] = g, o[d] = n.collection(h);
			}
		}
		u++;
	}
	return o;
}, "kMeans"), rY = e(function(e) {
	var t, n, r = this.cy(), a = this.nodes(), i = null, o = rR(e), s = Array(o.k), l = {}, u = Array(o.k);
	o.testMode ? "number" == typeof o.testCentroids || (t = "object" === y(o.testCentroids) ? o.testCentroids : rq(a, o.k)) : t = rq(a, o.k);
	for (var c = !0, d = 0; c && d < o.maxIterations;) {
		for (var h = 0; h < a.length; h++) l[(i = a[h]).id()] = rN(i, t, o.distance, o.attributes, "kMedoids");
		c = !1;
		for (var f = 0; f < t.length; f++) {
			var p = rz(f, a, l);
			if (0 !== p.length) {
				u[f] = rj(t[f], p, o.attributes);
				for (var g = 0; g < p.length; g++) (n = rj(p[g], p, o.attributes)) < u[f] && (u[f] = n, t[f] = p[g], c = !0);
				s[f] = r.collection(p);
			}
		}
		d++;
	}
	return s;
}, "kMedoids"), rW = e(function(e, t, n, r, a) {
	for (var i, o, s = 0; s < t.length; s++) for (var l = 0; l < e.length; l++) r[s][l] = Math.pow(n[s][l], a.m);
	for (var u = 0; u < e.length; u++) for (var c = 0; c < a.attributes.length; c++) {
		i = 0, o = 0;
		for (var d = 0; d < t.length; d++) i += r[d][u] * a.attributes[c](t[d]), o += r[d][u];
		e[u][c] = i / o;
	}
}, "updateCentroids"), rH = e(function(e, t, n, r, a) {
	for (var i = 0; i < e.length; i++) t[i] = e[i].slice();
	for (var o, s = 2 / (a.m - 1), l = 0; l < n.length; l++) for (var u = 0; u < r.length; u++) {
		o = 0;
		for (var c = 0; c < n.length; c++) o += Math.pow(rI(a.distance, r[u], n[l], a.attributes, "cmeans") / rI(a.distance, r[u], n[c], a.attributes, "cmeans"), s);
		e[u][l] = 1 / o;
	}
}, "updateMembership"), rK = e(function(e, t, n, r) {
	for (var a = Array(n.k), i = 0; i < a.length; i++) a[i] = [];
	for (var o, s, l = 0; l < t.length; l++) {
		o = -Infinity, s = -1;
		for (var u = 0; u < t[0].length; u++) t[l][u] > o && (o = t[l][u], s = u);
		a[s].push(e[l]);
	}
	for (var c = 0; c < a.length; c++) a[c] = r.collection(a[c]);
	return a;
}, "assign"), rU = e(function(e) {
	for (var t, n, r, a = this.cy(), i = this.nodes(), o = rR(e), s = Array(i.length), l = 0; l < i.length; l++) s[l] = Array(o.k);
	n = Array(i.length);
	for (var u = 0; u < i.length; u++) n[u] = Array(o.k);
	for (var c = 0; c < i.length; c++) {
		for (var d = 0, h = 0; h < o.k; h++) n[c][h] = Math.random(), d += n[c][h];
		for (var f = 0; f < o.k; f++) n[c][f] = n[c][f] / d;
	}
	t = Array(o.k);
	for (var p = 0; p < o.k; p++) t[p] = Array(o.attributes.length);
	r = Array(i.length);
	for (var g = 0; g < i.length; g++) r[g] = Array(o.k);
	for (var v = !0, y = 0; v && y < o.maxIterations;) v = !1, rW(t, i, n, r, o), rH(n, s, t, i, o), rF(n, s, o.sensitivityThreshold) || (v = !0), y++;
	return {
		clusters: rK(i, n, o, a),
		degreeOfMembership: n
	};
}, "fuzzyCMeans"), rG = tr({
	distance: "euclidean",
	linkage: "min",
	mode: "threshold",
	threshold: Infinity,
	addDendrogram: !1,
	dendrogramDepth: 0,
	attributes: []
}), rZ = {
	single: "min",
	complete: "max"
}, r$ = e(function(e) {
	var t = rG(e), n = rZ[t.linkage];
	return null != n && (t.linkage = n), t;
}, "setOptions"), rQ = e(function(t, n, r, a, i) {
	for (var o, s = 0, l = Infinity, u = i.attributes, c = e(function(e, t) {
		return rA(i.distance, u.length, function(t) {
			return u[t](e);
		}, function(e) {
			return u[e](t);
		}, e, t);
	}, "getDist"), d = 0; d < t.length; d++) {
		var h = t[d].key, f = r[h][a[h]];
		f < l && (s = h, l = f);
	}
	if ("threshold" === i.mode && l >= i.threshold || "dendrogram" === i.mode && 1 === t.length) return !1;
	var p, g = n[s], v = n[a[s]];
	p = "dendrogram" === i.mode ? {
		left: g,
		right: v,
		key: g.key
	} : {
		value: g.value.concat(v.value),
		key: g.key
	}, t[g.index] = p, t.splice(v.index, 1), n[g.key] = p;
	for (var y = 0; y < t.length; y++) {
		var m = t[y];
		g.key === m.key ? o = Infinity : "min" === i.linkage ? (o = r[g.key][m.key], r[g.key][m.key] > r[v.key][m.key] && (o = r[v.key][m.key])) : "max" === i.linkage ? (o = r[g.key][m.key], r[g.key][m.key] < r[v.key][m.key] && (o = r[v.key][m.key])) : o = "mean" === i.linkage ? (r[g.key][m.key] * g.size + r[v.key][m.key] * v.size) / (g.size + v.size) : "dendrogram" === i.mode ? c(m.value, g.value) : c(m.value[0], g.value[0]), r[g.key][m.key] = r[m.key][g.key] = o;
	}
	for (var x = 0; x < t.length; x++) {
		var w = t[x].key;
		if (a[w] === g.key || a[w] === v.key) {
			for (var E = w, C = 0; C < t.length; C++) {
				var T = t[C].key;
				r[w][T] < r[w][E] && (E = T);
			}
			a[w] = E;
		}
		t[x].index = x;
	}
	return g.key = v.key = g.index = v.index = null, !0;
}, "mergeClosest"), rJ = e(function(e, t, n) {
	e && (e.value ? t.push(e.value) : (e.left && rJ(e.left, t), e.right && rJ(e.right, t)));
}, "getAllChildren"), r0 = e(function(e, t) {
	if (!e) return "";
	if (e.left && e.right) {
		var n = r0(e.left, t), r = r0(e.right, t), a = t.add({
			group: "nodes",
			data: { id: n + "," + r }
		});
		return t.add({
			group: "edges",
			data: {
				source: n,
				target: a.id()
			}
		}), t.add({
			group: "edges",
			data: {
				source: r,
				target: a.id()
			}
		}), a.id();
	}
	if (e.value) return e.value.id();
}, "buildDendrogram"), r1 = e(function(e, t, n) {
	if (!e) return [];
	var r = [], a = [], i = [];
	return 0 === t ? (e.left && rJ(e.left, r), e.right && rJ(e.right, a), i = r.concat(a), [n.collection(i)]) : 1 === t ? e.value ? [n.collection(e.value)] : (e.left && rJ(e.left, r), e.right && rJ(e.right, a), [n.collection(r), n.collection(a)]) : e.value ? [n.collection(e.value)] : (e.left && (r = r1(e.left, t - 1, n)), e.right && (a = r1(e.right, t - 1, n)), r.concat(a));
}, "buildClustersFromTree"), r2 = e(function(t) {
	for (var n, r = this.cy(), a = this.nodes(), i = r$(t), o = i.attributes, s = e(function(e, t) {
		return rA(i.distance, o.length, function(t) {
			return o[t](e);
		}, function(e) {
			return o[e](t);
		}, e, t);
	}, "getDist"), l = [], u = [], c = [], d = [], h = 0; h < a.length; h++) {
		var f = {
			value: "dendrogram" === i.mode ? a[h] : [a[h]],
			key: h,
			index: h
		};
		l[h] = f, d[h] = f, u[h] = [], c[h] = 0;
	}
	for (var p = 0; p < l.length; p++) for (var g = 0; g <= p; g++) {
		var v = void 0;
		v = "dendrogram" === i.mode ? p === g ? Infinity : s(l[p].value, l[g].value) : p === g ? Infinity : s(l[p].value[0], l[g].value[0]), u[p][g] = v, u[g][p] = v, v < u[p][c[p]] && (c[p] = g);
	}
	for (var y = rQ(l, d, u, c, i); y;) y = rQ(l, d, u, c, i);
	return "dendrogram" === i.mode ? (n = r1(l[0], i.dendrogramDepth, r), i.addDendrogram && r0(l[0], r)) : (n = Array(l.length), l.forEach(function(e, t) {
		e.key = e.index = null, n[t] = r.collection(e.value);
	})), n;
}, "hierarchicalClustering"), r5 = tr({
	distance: "euclidean",
	preference: "median",
	damping: .8,
	maxIterations: 1e3,
	minIterations: 100,
	attributes: []
}), r3 = e(function(e) {
	var t = e.damping, n = e.preference;
	.5 <= t && t < 1 || e3("Damping must range on [0.5, 1).  Got: ".concat(t));
	var r = [
		"median",
		"mean",
		"min",
		"max"
	];
	return r.some(function(e) {
		return e === n;
	}) || I(n) || e3("Preference must be one of [".concat(r.map(function(e) {
		return "'".concat(e, "'");
	}).join(", "), "] or a number.  Got: ").concat(n)), r5(e);
}, "setOptions"), r4 = e(function(t, n, r, a) {
	var i = e(function(e, t) {
		return a[t](e);
	}, "attr");
	return -rA(t, a.length, function(e) {
		return i(n, e);
	}, function(e) {
		return i(r, e);
	}, n, r);
}, "getSimilarity"), r9 = e(function(e, t) {
	return "median" === t ? nu(e) : "mean" === t ? nl(e) : "min" === t ? no(e) : "max" === t ? ns(e) : t;
}, "getPreference"), r6 = e(function(e, t, n) {
	for (var r = [], a = 0; a < e; a++) t[a * e + a] + n[a * e + a] > 0 && r.push(a);
	return r;
}, "findExemplars"), r8 = e(function(e, t, n) {
	for (var r = [], a = 0; a < e; a++) {
		for (var i = -1, o = -Infinity, s = 0; s < n.length; s++) {
			var l = n[s];
			t[a * e + l] > o && (i = l, o = t[a * e + l]);
		}
		i > 0 && r.push(i);
	}
	for (var u = 0; u < n.length; u++) r[n[u]] = n[u];
	return r;
}, "assignClusters"), r7 = e(function(e, t, n) {
	for (var r = r8(e, t, n), a = 0; a < n.length; a++) {
		for (var i = [], o = 0; o < r.length; o++) r[o] === n[a] && i.push(o);
		for (var s = -1, l = -Infinity, u = 0; u < i.length; u++) {
			for (var c = 0, d = 0; d < i.length; d++) c += t[i[d] * e + i[u]];
			c > l && (s = u, l = c);
		}
		n[a] = i[s];
	}
	return r8(e, t, n);
}, "assign"), ae = e(function(e) {
	for (var t, n = this.cy(), r = this.nodes(), a = r3(e), i = {}, o = 0; o < r.length; o++) i[r[o].id()] = o;
	for (var s, l, u, c = r.length, d = c * c, h = Array(d), f = 0; f < d; f++) h[f] = -Infinity;
	for (var p = 0; p < c; p++) for (var g = 0; g < c; g++) p !== g && (h[p * c + g] = r4(a.distance, r[p], r[g], a.attributes));
	s = r9(h, a.preference);
	for (var v = 0; v < c; v++) h[v * c + v] = s;
	l = Array(d);
	for (var y = 0; y < d; y++) l[y] = 0;
	u = Array(d);
	for (var m = 0; m < d; m++) u[m] = 0;
	for (var x = Array(c), w = Array(c), E = Array(c), C = 0; C < c; C++) x[C] = 0, w[C] = 0, E[C] = 0;
	for (var T = Array(c * a.minIterations), k = 0; k < T.length; k++) T[k] = 0;
	for (t = 0; t < a.maxIterations; t++) {
		for (var S = 0; S < c; S++) {
			for (var P = -Infinity, B = -Infinity, _ = -1, D = 0, A = 0; A < c; A++) x[A] = l[S * c + A], (D = u[S * c + A] + h[S * c + A]) >= P ? (B = P, P = D, _ = A) : D > B && (B = D);
			for (var M = 0; M < c; M++) l[S * c + M] = (1 - a.damping) * (h[S * c + M] - P) + a.damping * x[M];
			l[S * c + _] = (1 - a.damping) * (h[S * c + _] - B) + a.damping * x[_];
		}
		for (var R = 0; R < c; R++) {
			for (var I = 0, L = 0; L < c; L++) x[L] = u[L * c + R], w[L] = Math.max(0, l[L * c + R]), I += w[L];
			I -= w[R], w[R] = l[R * c + R], I += w[R];
			for (var N = 0; N < c; N++) u[N * c + R] = (1 - a.damping) * Math.min(0, I - w[N]) + a.damping * x[N];
			u[R * c + R] = (1 - a.damping) * (I - w[R]) + a.damping * x[R];
		}
		for (var z = 0, O = 0; O < c; O++) {
			var F = +(u[O * c + O] + l[O * c + O] > 0);
			T[t % a.minIterations * c + O] = F, z += F;
		}
		if (z > 0 && (t >= a.minIterations - 1 || t == a.maxIterations - 1)) {
			for (var V = 0, q = 0; q < c; q++) {
				E[q] = 0;
				for (var j = 0; j < a.minIterations; j++) E[q] += T[j * c + q];
				(0 === E[q] || E[q] === a.minIterations) && V++;
			}
			if (V === c) break;
		}
	}
	for (var X = r6(c, l, u), Y = r7(c, h, X), W = {}, H = 0; H < X.length; H++) W[X[H]] = [];
	for (var K = 0; K < r.length; K++) {
		var U = Y[i[r[K].id()]];
		null != U && W[U].push(r[K]);
	}
	for (var G = Array(X.length), Z = 0; Z < X.length; Z++) G[Z] = n.collection(W[X[Z]]);
	return G;
}, "affinityPropagation"), at = tr({
	root: void 0,
	directed: !1
}), an = { hierholzer: e(function(t) {
	if (!M(t)) {
		var n = arguments;
		t = {
			root: n[0],
			directed: n[1]
		};
	}
	var r, a, i, o = at(t), s = o.root, l = o.directed, u = !1;
	s && (i = _(s) ? this.filter(s)[0].id() : s[0].id());
	var c = {}, d = {};
	l ? this.forEach(function(e) {
		var t = e.id();
		if (e.isNode()) {
			var n = e.indegree(!0), i = e.outdegree(!0), o = n - i, s = i - n;
			1 == o ? r ? u = !0 : r = t : 1 == s ? a ? u = !0 : a = t : (s > 1 || o > 1) && (u = !0), c[t] = [], e.outgoers().forEach(function(e) {
				e.isEdge() && c[t].push(e.id());
			});
		} else d[t] = [void 0, e.target().id()];
	}) : this.forEach(function(e) {
		var t = e.id();
		e.isNode() ? (e.degree(!0) % 2 && (r ? a ? u = !0 : a = t : r = t), c[t] = [], e.connectedEdges().forEach(function(e) {
			return c[t].push(e.id());
		})) : d[t] = [e.source().id(), e.target().id()];
	});
	var h = {
		found: !1,
		trail: void 0
	};
	if (u) return h;
	if (a && r) if (l) {
		if (i && a != i) return h;
		i = a;
	} else {
		if (i && a != i && r != i) return h;
		i || (i = a);
	}
	else i || (i = this[0].id());
	var f = e(function(e) {
		for (var t, n, r, a = e, i = [e]; c[a].length;) n = d[t = c[a].shift()][0], a != (r = d[t][1]) ? (c[r] = c[r].filter(function(e) {
			return e != t;
		}), a = r) : l || a == n || (c[n] = c[n].filter(function(e) {
			return e != t;
		}), a = n), i.unshift(t), i.unshift(a);
		return i;
	}, "walk"), p = [], g = [];
	for (g = f(i); 1 != g.length;) 0 == c[g[0]].length ? (p.unshift(this.getElementById(g.shift())), p.unshift(this.getElementById(g.shift()))) : g = f(g.shift()).concat(g);
	for (var v in p.unshift(this.getElementById(g.shift())), c) if (c[v].length) return h;
	return h.found = !0, h.trail = this.spawn(p, !0), h;
}, "hierholzer") }, ar = e(function() {
	var t = this, n = {}, r = 0, a = 0, i = [], o = [], s = {}, l = e(function(e, r) {
		for (var a = o.length - 1, s = [], l = t.spawn(); o[a].x != e || o[a].y != r;) s.push(o.pop().edge), a--;
		s.push(o.pop().edge), s.forEach(function(e) {
			var r = e.connectedNodes().intersection(t);
			l.merge(e), r.forEach(function(e) {
				var r = e.id(), a = e.connectedEdges().intersection(t);
				l.merge(e), n[r].cutVertex ? l.merge(a.filter(function(e) {
					return e.isLoop();
				})) : l.merge(a);
			});
		}), i.push(l);
	}, "buildComponent"), u = e(function(e, c, d) {
		e === d && (a += 1), n[c] = {
			id: r,
			low: r++,
			cutVertex: !1
		};
		var h, f, p, g, v = t.getElementById(c).connectedEdges().intersection(t);
		0 === v.size() ? i.push(t.spawn(t.getElementById(c))) : v.forEach(function(t) {
			h = t.source().id(), f = t.target().id(), (p = h === c ? f : h) !== d && (s[g = t.id()] || (s[g] = !0, o.push({
				x: c,
				y: p,
				edge: t
			})), p in n ? n[c].low = Math.min(n[c].low, n[p].id) : (u(e, p, c), n[c].low = Math.min(n[c].low, n[p].low), n[c].id <= n[p].low && (n[c].cutVertex = !0, l(c, p))));
		});
	}, "biconnectedSearch");
	t.forEach(function(e) {
		if (e.isNode()) {
			var t = e.id();
			t in n || (a = 0, u(t, t), n[t].cutVertex = a > 1);
		}
	});
	var c = Object.keys(n).filter(function(e) {
		return n[e].cutVertex;
	}).map(function(e) {
		return t.getElementById(e);
	});
	return {
		cut: t.spawn(c),
		components: i
	};
}, "hopcroftTarjanBiconnected"), aa = e(function() {
	var t = this, n = {}, r = 0, a = [], i = [], o = t.spawn(t), s = e(function(e) {
		if (i.push(e), n[e] = {
			index: r,
			low: r++,
			explored: !1
		}, t.getElementById(e).connectedEdges().intersection(t).forEach(function(t) {
			var r = t.target().id();
			r !== e && (r in n || s(r), n[r].explored || (n[e].low = Math.min(n[e].low, n[r].low)));
		}), n[e].index === n[e].low) {
			for (var l = t.spawn();;) {
				var u = i.pop();
				if (l.merge(t.getElementById(u)), n[u].low = n[e].index, n[u].explored = !0, u === e) break;
			}
			var c = l.edgesWith(l), d = l.merge(c);
			a.push(d), o = o.difference(d);
		}
	}, "stronglyConnectedSearch");
	return t.forEach(function(e) {
		if (e.isNode()) {
			var t = e.id();
			t in n || s(t);
		}
	}), {
		cut: o,
		components: a
	};
}, "tarjanStronglyConnected"), ai = {};
[
	tg,
	t0,
	t1,
	t5,
	t4,
	t6,
	nt,
	rr,
	ri,
	rs,
	ru,
	{
		markovClustering: rE,
		mcl: rE
	},
	{
		kMeans: rX,
		kMedoids: rY,
		fuzzyCMeans: rU,
		fcm: rU
	},
	{
		hierarchicalClustering: r2,
		hca: r2
	},
	{
		affinityPropagation: ae,
		ap: ae
	},
	an,
	{
		hopcroftTarjanBiconnected: ar,
		htbc: ar,
		htb: ar,
		hopcroftTarjanBiconnectedComponents: ar
	},
	{
		tarjanStronglyConnected: aa,
		tsc: aa,
		tscc: aa,
		tarjanStronglyConnectedComponents: aa
	}
].forEach(function(e) {
	es(ai, e);
});
var ao = e(function(e) {
	if (!(this instanceof ao)) return new ao(e);
	this.id = "Thenable/1.0.7", this.state = 0, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = { then: this.then.bind(this) }, "function" == typeof e && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
}, "api");
ao.prototype = {
	fulfill: e(function(e) {
		return as(this, 1, "fulfillValue", e);
	}, "fulfill"),
	reject: e(function(e) {
		return as(this, 2, "rejectReason", e);
	}, "reject"),
	then: e(function(e, t) {
		var n = new ao();
		return this.onFulfilled.push(ac(e, n, "fulfill")), this.onRejected.push(ac(t, n, "reject")), al(this), n.proxy;
	}, "then")
};
var as = e(function(e, t, n, r) {
	return 0 === e.state && (e.state = t, e[n] = r, al(e)), e;
}, "deliver"), al = e(function(e) {
	1 === e.state ? au(e, "onFulfilled", e.fulfillValue) : 2 === e.state && au(e, "onRejected", e.rejectReason);
}, "execute"), au = e(function(t, n, r) {
	if (0 !== t[n].length) {
		var a = t[n];
		t[n] = [];
		var i = e(function() {
			for (var e = 0; e < a.length; e++) a[e](r);
		}, "func");
		"function" == typeof setImmediate ? setImmediate(i) : setTimeout(i, 0);
	}
}, "execute_handlers"), ac = e(function(e, t, n) {
	return function(r) {
		if ("function" != typeof e) t[n].call(t, r);
		else {
			var a;
			try {
				a = e(r);
			} catch (e) {
				t.reject(e);
				return;
			}
			ad(t, a);
		}
	};
}, "resolver"), ad = e(function(e, t) {
	if (e === t || e.proxy === t) return void e.reject(TypeError("cannot resolve promise with itself"));
	if ("object" === y(t) && null !== t || "function" == typeof t) try {
		n = t.then;
	} catch (t) {
		e.reject(t);
		return;
	}
	if ("function" == typeof n) {
		var n, r = !1;
		try {
			n.call(t, function(n) {
				r || (r = !0, n === t ? e.reject(TypeError("circular thenable chain")) : ad(e, n));
			}, function(t) {
				r || (r = !0, e.reject(t));
			});
		} catch (t) {
			r || e.reject(t);
		}
		return;
	}
	e.fulfill(t);
}, "resolve");
ao.all = function(t) {
	return new ao(function(n, r) {
		for (var a = Array(t.length), i = 0, o = e(function(e, r) {
			a[e] = r, ++i === t.length && n(a);
		}, "fulfill"), s = 0; s < t.length; s++) (function(e) {
			var n = t[e];
			null != n && null != n.then ? n.then(function(t) {
				o(e, t);
			}, function(e) {
				r(e);
			}) : o(e, n);
		})(s);
	});
}, ao.resolve = function(e) {
	return new ao(function(t, n) {
		t(e);
	});
}, ao.reject = function(e) {
	return new ao(function(t, n) {
		n(e);
	});
};
var ah = "u" > typeof Promise ? Promise : ao, af = e(function(e, t, n) {
	var r = V(e), a = this._private = es({ duration: 1e3 }, t, n);
	if (a.target = e, a.style = a.style || a.css, a.started = !1, a.playing = !1, a.hooked = !1, a.applying = !1, a.progress = 0, a.completes = [], a.frames = [], a.complete && D(a.complete) && a.completes.push(a.complete), !r) {
		var i = e.position();
		a.startPosition = a.startPosition || {
			x: i.x,
			y: i.y
		}, a.startStyle = a.startStyle || e.cy().style().getAnimationStartStyle(e, a.style);
	}
	if (r) {
		var o = e.pan();
		a.startPan = {
			x: o.x,
			y: o.y
		}, a.startZoom = e.zoom();
	}
	this.length = 1, this[0] = this;
}, "Animation"), ap = af.prototype;
es(ap, {
	instanceString: e(function() {
		return "animation";
	}, "instanceString"),
	hook: e(function() {
		var e = this._private;
		if (!e.hooked) {
			var t = e.target._private.animation;
			(e.queue ? t.queue : t.current).push(this), z(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
		}
		return this;
	}, "hook"),
	play: e(function() {
		var e = this._private;
		return 1 === e.progress && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
	}, "play"),
	playing: e(function() {
		return this._private.playing;
	}, "playing"),
	apply: e(function() {
		var e = this._private;
		return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
	}, "apply"),
	applying: e(function() {
		return this._private.applying;
	}, "applying"),
	pause: e(function() {
		var e = this._private;
		return e.playing = !1, e.started = !1, this;
	}, "pause"),
	stop: e(function() {
		var e = this._private;
		return e.playing = !1, e.started = !1, e.stopped = !0, this;
	}, "stop"),
	rewind: e(function() {
		return this.progress(0);
	}, "rewind"),
	fastforward: e(function() {
		return this.progress(1);
	}, "fastforward"),
	time: e(function(e) {
		var t = this._private;
		return void 0 === e ? t.progress * t.duration : this.progress(e / t.duration);
	}, "time"),
	progress: e(function(e) {
		var t = this._private, n = t.playing;
		return void 0 === e ? t.progress : (n && this.pause(), t.progress = e, t.started = !1, n && this.play(), this);
	}, "progress"),
	completed: e(function() {
		return 1 === this._private.progress;
	}, "completed"),
	reverse: e(function() {
		var t = this._private, n = t.playing;
		n && this.pause(), t.progress = 1 - t.progress, t.started = !1;
		var r = e(function(e, n) {
			var r = t[e];
			null != r && (t[e] = t[n], t[n] = r);
		}, "swap");
		if (r("zoom", "startZoom"), r("pan", "startPan"), r("position", "startPosition"), t.style) for (var a = 0; a < t.style.length; a++) {
			var i = t.style[a], o = i.name, s = t.startStyle[o];
			t.startStyle[o] = i, t.style[a] = s;
		}
		return n && this.play(), this;
	}, "reverse"),
	promise: e(function(e) {
		var t, n = this._private;
		return t = "frame" === e ? n.frames : n.completes, new ah(function(e, n) {
			t.push(function() {
				e();
			});
		});
	}, "promise")
}), ap.complete = ap.completed, ap.run = ap.play, ap.running = ap.playing;
var ag, av, ay = {
	animated: e(function() {
		return e(function() {
			var e = void 0 !== this.length ? this : [this];
			if (!(this._private.cy || this).styleEnabled()) return !1;
			var t = e[0];
			if (t) return t._private.animation.current.length > 0;
		}, "animatedImpl");
	}, "animated"),
	clearQueue: e(function() {
		return e(function() {
			var e = void 0 !== this.length ? this : [this];
			if (!(this._private.cy || this).styleEnabled()) return this;
			for (var t = 0; t < e.length; t++) e[t]._private.animation.queue = [];
			return this;
		}, "clearQueueImpl");
	}, "clearQueue"),
	delay: e(function() {
		return e(function(e, t) {
			return (this._private.cy || this).styleEnabled() ? this.animate({
				delay: e,
				duration: e,
				complete: t
			}) : this;
		}, "delayImpl");
	}, "delay"),
	delayAnimation: e(function() {
		return e(function(e, t) {
			return (this._private.cy || this).styleEnabled() ? this.animation({
				delay: e,
				duration: e,
				complete: t
			}) : this;
		}, "delayAnimationImpl");
	}, "delayAnimation"),
	animation: e(function() {
		return e(function(e, t) {
			var n = void 0 !== this.length, r = n ? this : [this], a = this._private.cy || this, i = !n, o = !i;
			if (!a.styleEnabled()) return this;
			var s = a.style();
			if (0 === Object.keys(e = es({}, e, t)).length) return new af(r[0], e);
			switch (void 0 === e.duration && (e.duration = 400), e.duration) {
				case "slow":
					e.duration = 600;
					break;
				case "fast": e.duration = 200;
			}
			if (o && (e.style = s.getPropsList(e.style || e.css), e.css = void 0), o && null != e.renderedPosition) {
				var l = e.renderedPosition, u = a.pan(), c = a.zoom();
				e.position = na(l, c, u);
			}
			if (i && null != e.panBy) {
				var d = e.panBy, h = a.pan();
				e.pan = {
					x: h.x + d.x,
					y: h.y + d.y
				};
			}
			var f = e.center || e.centre;
			if (i && null != f) {
				var p = a.getCenterPan(f.eles, e.zoom);
				null != p && (e.pan = p);
			}
			if (i && null != e.fit) {
				var g = e.fit, v = a.getFitViewport(g.eles || g.boundingBox, g.padding);
				null != v && (e.pan = v.pan, e.zoom = v.zoom);
			}
			if (i && M(e.zoom)) {
				var y = a.getZoomedViewport(e.zoom);
				null != y ? (y.zoomed && (e.zoom = y.zoom), y.panned && (e.pan = y.pan)) : e.zoom = null;
			}
			return new af(r[0], e);
		}, "animationImpl");
	}, "animation"),
	animate: e(function() {
		return e(function(e, t) {
			var n = void 0 !== this.length ? this : [this];
			if (!(this._private.cy || this).styleEnabled()) return this;
			t && (e = es({}, e, t));
			for (var r = 0; r < n.length; r++) {
				var a = n[r], i = a.animated() && (void 0 === e.queue || e.queue);
				a.animation(e, i ? { queue: !0 } : void 0).play();
			}
			return this;
		}, "animateImpl");
	}, "animate"),
	stop: e(function() {
		return e(function(e, t) {
			var n = void 0 !== this.length ? this : [this], r = this._private.cy || this;
			if (!r.styleEnabled()) return this;
			for (var a = 0; a < n.length; a++) {
				for (var i = n[a]._private, o = i.animation.current, s = 0; s < o.length; s++) {
					var l = o[s]._private;
					t && (l.duration = 0);
				}
				e && (i.animation.queue = []), t || (i.animation.current = []);
			}
			return r.notify("draw"), this;
		}, "stopImpl");
	}, "stop")
};
function am() {
	return av ? ag : (av = 1, ag = Array.isArray);
}
function ab() {
	if (a8) return a6;
	a8 = 1;
	var t = am(), n = e_(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
	function i(e, i) {
		if (t(e)) return !1;
		var o = typeof e;
		return !!("number" == o || "symbol" == o || "boolean" == o || null == e || n(e)) || a.test(e) || !r.test(e) || null != i && e in Object(i);
	}
	return e(i, "isKey"), a6 = i;
}
function ax() {
	if (ie) return a7;
	ie = 1;
	var t = eP(), n = em();
	function r(e) {
		if (!n(e)) return !1;
		var r = t(e);
		return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r;
	}
	return e(r, "isFunction"), a7 = r;
}
function aw() {
	return ir ? it : (ir = 1, it = ex()["__core-js_shared__"]);
}
function aE() {
	if (ii) return ia;
	ii = 1;
	var t, n = aw(), r = (t = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + t : "";
	function a(e) {
		return !!r && r in e;
	}
	return e(a, "isMasked"), ia = a;
}
function aC() {
	if (is) return io;
	is = 1;
	var t = Function.prototype.toString;
	function n(e) {
		if (null != e) {
			try {
				return t.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	return e(n, "toSource"), io = n;
}
function aT() {
	if (iu) return il;
	iu = 1;
	var t = ax(), n = aE(), r = em(), a = aC(), i = /^\[object .+?Constructor\]$/, o = Object.prototype, s = Function.prototype.toString, l = o.hasOwnProperty, u = RegExp("^" + s.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function c(e) {
		return !(!r(e) || n(e)) && (t(e) ? u : i).test(a(e));
	}
	return e(c, "baseIsNative"), il = c;
}
function ak() {
	if (id) return ic;
	function t(e, t) {
		return e?.[t];
	}
	return id = 1, e(t, "getValue"), ic = t;
}
function aS() {
	if (ip) return ih;
	ip = 1;
	var t = aT(), n = ak();
	function r(e, r) {
		var a = n(e, r);
		return t(a) ? a : void 0;
	}
	return e(r, "getNative"), ih = r;
}
function aP() {
	return iv ? ig : (iv = 1, ig = aS()(Object, "create"));
}
function aB() {
	if (im) return iy;
	im = 1;
	var t = aP();
	function n() {
		this.__data__ = t ? t(null) : {}, this.size = 0;
	}
	return e(n, "hashClear"), iy = n;
}
function a_() {
	if (ix) return ib;
	function t(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= !!t, t;
	}
	return ix = 1, e(t, "hashDelete"), ib = t;
}
function aD() {
	if (iE) return iw;
	iE = 1;
	var t = aP(), n = Object.prototype.hasOwnProperty;
	function r(e) {
		var r = this.__data__;
		if (t) {
			var a = r[e];
			return "__lodash_hash_undefined__" === a ? void 0 : a;
		}
		return n.call(r, e) ? r[e] : void 0;
	}
	return e(r, "hashGet"), iw = r;
}
function aA() {
	if (iT) return iC;
	iT = 1;
	var t = aP(), n = Object.prototype.hasOwnProperty;
	function r(e) {
		var r = this.__data__;
		return t ? void 0 !== r[e] : n.call(r, e);
	}
	return e(r, "hashHas"), iC = r;
}
function aM() {
	if (iS) return ik;
	iS = 1;
	var t = aP();
	function n(e, n) {
		var r = this.__data__;
		return this.size += +!this.has(e), r[e] = t && void 0 === n ? "__lodash_hash_undefined__" : n, this;
	}
	return e(n, "hashSet"), ik = n;
}
function aR() {
	if (iB) return iP;
	iB = 1;
	var t = aB(), n = a_(), r = aD(), a = aA(), i = aM();
	function o(e) {
		var t = -1, n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	return e(o, "Hash"), o.prototype.clear = t, o.prototype.delete = n, o.prototype.get = r, o.prototype.has = a, o.prototype.set = i, iP = o;
}
function aI() {
	if (iD) return i_;
	function t() {
		this.__data__ = [], this.size = 0;
	}
	return iD = 1, e(t, "listCacheClear"), i_ = t;
}
function aL() {
	if (iM) return iA;
	function t(e, t) {
		return e === t || e != e && t != t;
	}
	return iM = 1, e(t, "eq"), iA = t;
}
function aN() {
	if (iI) return iR;
	iI = 1;
	var t = aL();
	function n(e, n) {
		for (var r = e.length; r--;) if (t(e[r][0], n)) return r;
		return -1;
	}
	return e(n, "assocIndexOf"), iR = n;
}
function az() {
	if (iN) return iL;
	iN = 1;
	var t = aN(), n = Array.prototype.splice;
	function r(e) {
		var r = this.__data__, a = t(r, e);
		return !(a < 0) && (a == r.length - 1 ? r.pop() : n.call(r, a, 1), --this.size, !0);
	}
	return e(r, "listCacheDelete"), iL = r;
}
function aO() {
	if (iO) return iz;
	iO = 1;
	var t = aN();
	function n(e) {
		var n = this.__data__, r = t(n, e);
		return r < 0 ? void 0 : n[r][1];
	}
	return e(n, "listCacheGet"), iz = n;
}
function aF() {
	if (iV) return iF;
	iV = 1;
	var t = aN();
	function n(e) {
		return t(this.__data__, e) > -1;
	}
	return e(n, "listCacheHas"), iF = n;
}
function aV() {
	if (ij) return iq;
	ij = 1;
	var t = aN();
	function n(e, n) {
		var r = this.__data__, a = t(r, e);
		return a < 0 ? (++this.size, r.push([e, n])) : r[a][1] = n, this;
	}
	return e(n, "listCacheSet"), iq = n;
}
function aq() {
	if (iY) return iX;
	iY = 1;
	var t = aI(), n = az(), r = aO(), a = aF(), i = aV();
	function o(e) {
		var t = -1, n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	return e(o, "ListCache"), o.prototype.clear = t, o.prototype.delete = n, o.prototype.get = r, o.prototype.has = a, o.prototype.set = i, iX = o;
}
function aj() {
	return iH ? iW : (iH = 1, iW = aS()(ex(), "Map"));
}
function aX() {
	if (iU) return iK;
	iU = 1;
	var t = aR(), n = aq(), r = aj();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new t(),
			map: new (r || n)(),
			string: new t()
		};
	}
	return e(a, "mapCacheClear"), iK = a;
}
function aY() {
	if (iZ) return iG;
	function t(e) {
		var t = typeof e;
		return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
	}
	return iZ = 1, e(t, "isKeyable"), iG = t;
}
function aW() {
	if (iQ) return i$;
	iQ = 1;
	var t = aY();
	function n(e, n) {
		var r = e.__data__;
		return t(n) ? r["string" == typeof n ? "string" : "hash"] : r.map;
	}
	return e(n, "getMapData"), i$ = n;
}
function aH() {
	if (i0) return iJ;
	i0 = 1;
	var t = aW();
	function n(e) {
		var n = t(this, e).delete(e);
		return this.size -= !!n, n;
	}
	return e(n, "mapCacheDelete"), iJ = n;
}
function aK() {
	if (i2) return i1;
	i2 = 1;
	var t = aW();
	function n(e) {
		return t(this, e).get(e);
	}
	return e(n, "mapCacheGet"), i1 = n;
}
function aU() {
	if (i3) return i5;
	i3 = 1;
	var t = aW();
	function n(e) {
		return t(this, e).has(e);
	}
	return e(n, "mapCacheHas"), i5 = n;
}
function aG() {
	if (i9) return i4;
	i9 = 1;
	var t = aW();
	function n(e, n) {
		var r = t(this, e), a = r.size;
		return r.set(e, n), this.size += +(r.size != a), this;
	}
	return e(n, "mapCacheSet"), i4 = n;
}
function aZ() {
	if (i8) return i6;
	i8 = 1;
	var t = aX(), n = aH(), r = aK(), a = aU(), i = aG();
	function o(e) {
		var t = -1, n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	return e(o, "MapCache"), o.prototype.clear = t, o.prototype.delete = n, o.prototype.get = r, o.prototype.has = a, o.prototype.set = i, i6 = o;
}
function a$() {
	if (oe) return i7;
	oe = 1;
	var t = aZ();
	function n(r, a) {
		if ("function" != typeof r || null != a && "function" != typeof a) throw TypeError("Expected a function");
		var i = e(function() {
			var e = arguments, t = a ? a.apply(this, e) : e[0], n = i.cache;
			if (n.has(t)) return n.get(t);
			var o = r.apply(this, e);
			return i.cache = n.set(t, o) || n, o;
		}, "memoized");
		return i.cache = new (n.Cache || t)(), i;
	}
	return e(n, "memoize"), n.Cache = t, i7 = n;
}
function aQ() {
	if (on) return ot;
	on = 1;
	var t = a$();
	function n(e) {
		var n = t(e, function(e) {
			return 500 === r.size && r.clear(), e;
		}), r = n.cache;
		return n;
	}
	return e(n, "memoizeCapped"), ot = n;
}
function aJ() {
	if (oa) return or;
	oa = 1;
	var e = aQ(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g;
	return or = e(function(e) {
		var r = [];
		return 46 === e.charCodeAt(0) && r.push(""), e.replace(t, function(e, t, a, i) {
			r.push(a ? i.replace(n, "$1") : t || e);
		}), r;
	});
}
function a0() {
	if (oo) return oi;
	function t(e, t) {
		for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
		return a;
	}
	return oo = 1, e(t, "arrayMap"), oi = t;
}
function a1() {
	if (ol) return os;
	ol = 1;
	var t = eT(), n = a0(), r = am(), a = e_(), i = t ? t.prototype : void 0, o = i ? i.toString : void 0;
	function s(e) {
		if ("string" == typeof e) return e;
		if (r(e)) return n(e, s) + "";
		if (a(e)) return o ? o.call(e) : "";
		var t = e + "";
		return "0" == t && 1 / e == -Infinity ? "-0" : t;
	}
	return e(s, "baseToString"), os = s;
}
function a2() {
	if (oc) return ou;
	oc = 1;
	var t = a1();
	function n(e) {
		return null == e ? "" : t(e);
	}
	return e(n, "toString"), ou = n;
}
function a5() {
	if (oh) return od;
	oh = 1;
	var t = am(), n = ab(), r = aJ(), a = a2();
	function i(e, i) {
		return t(e) ? e : n(e, i) ? [e] : r(a(e));
	}
	return e(i, "castPath"), od = i;
}
function a3() {
	if (op) return of;
	op = 1;
	var t = e_();
	function n(e) {
		if ("string" == typeof e || t(e)) return e;
		var n = e + "";
		return "0" == n && 1 / e == -Infinity ? "-0" : n;
	}
	return e(n, "toKey"), of = n;
}
function a4() {
	if (ov) return og;
	ov = 1;
	var t = a5(), n = a3();
	function r(e, r) {
		r = t(r, e);
		for (var a = 0, i = r.length; null != e && a < i;) e = e[n(r[a++])];
		return a && a == i ? e : void 0;
	}
	return e(r, "baseGet"), og = r;
}
function a9() {
	if (om) return oy;
	om = 1;
	var t = a4();
	function n(e, n, r) {
		var a = null == e ? void 0 : t(e, n);
		return void 0 === a ? r : a;
	}
	return e(n, "get"), oy = n;
}
e(am, "requireIsArray"), e(ab, "require_isKey"), e(ax, "requireIsFunction"), e(aw, "require_coreJsData"), e(aE, "require_isMasked"), e(aC, "require_toSource"), e(aT, "require_baseIsNative"), e(ak, "require_getValue"), e(aS, "require_getNative"), e(aP, "require_nativeCreate"), e(aB, "require_hashClear"), e(a_, "require_hashDelete"), e(aD, "require_hashGet"), e(aA, "require_hashHas"), e(aM, "require_hashSet"), e(aR, "require_Hash"), e(aI, "require_listCacheClear"), e(aL, "requireEq"), e(aN, "require_assocIndexOf"), e(az, "require_listCacheDelete"), e(aO, "require_listCacheGet"), e(aF, "require_listCacheHas"), e(aV, "require_listCacheSet"), e(aq, "require_ListCache"), e(aj, "require_Map"), e(aX, "require_mapCacheClear"), e(aY, "require_isKeyable"), e(aW, "require_getMapData"), e(aH, "require_mapCacheDelete"), e(aK, "require_mapCacheGet"), e(aU, "require_mapCacheHas"), e(aG, "require_mapCacheSet"), e(aZ, "require_MapCache"), e(a$, "requireMemoize"), e(aQ, "require_memoizeCapped"), e(aJ, "require_stringToPath"), e(a0, "require_arrayMap"), e(a1, "require_baseToString"), e(a2, "requireToString"), e(a5, "require_castPath"), e(a3, "require_toKey"), e(a4, "require_baseGet"), e(a9, "requireGet");
var a6, a8, a7, ie, it, ir, ia, ii, io, is, il, iu, ic, id, ih, ip, ig, iv, iy, im, ib, ix, iw, iE, iC, iT, ik, iS, iP, iB, i_, iD, iA, iM, iR, iI, iL, iN, iz, iO, iF, iV, iq, ij, iX, iY, iW, iH, iK, iU, iG, iZ, i$, iQ, iJ, i0, i1, i2, i5, i3, i4, i9, i6, i8, i7, oe, ot, on, or, oa, oi, oo, os, ol, ou, oc, od, oh, of, op, og, ov, oy, om, ob, ox, ow = ey(a9());
function oE() {
	if (ox) return ob;
	ox = 1;
	var e = aS();
	return ob = function() {
		try {
			var t = e(Object, "defineProperty");
			return t({}, "", {}), t;
		} catch {}
	}();
}
function oC() {
	if (o_) return oB;
	o_ = 1;
	var t = oE();
	function n(e, n, r) {
		"__proto__" == n && t ? t(e, n, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[n] = r;
	}
	return e(n, "baseAssignValue"), oB = n;
}
function oT() {
	if (oA) return oD;
	oA = 1;
	var t = oC(), n = aL(), r = Object.prototype.hasOwnProperty;
	function a(e, a, i) {
		var o = e[a];
		r.call(e, a) && n(o, i) && (void 0 !== i || a in e) || t(e, a, i);
	}
	return e(a, "assignValue"), oD = a;
}
function ok() {
	if (oR) return oM;
	oR = 1;
	var t = /^(?:0|[1-9]\d*)$/;
	function n(e, n) {
		var r = typeof e;
		return !!(n = n ?? 9007199254740991) && ("number" == r || "symbol" != r && t.test(e)) && e > -1 && e % 1 == 0 && e < n;
	}
	return e(n, "isIndex"), oM = n;
}
function oS() {
	if (oL) return oI;
	oL = 1;
	var t = oT(), n = a5(), r = ok(), a = em(), i = a3();
	function o(e, o, s, l) {
		if (!a(e)) return e;
		o = n(o, e);
		for (var u = -1, c = o.length, d = c - 1, h = e; null != h && ++u < c;) {
			var f = i(o[u]), p = s;
			if ("__proto__" === f || "constructor" === f || "prototype" === f) break;
			if (u != d) {
				var g = h[f];
				void 0 === (p = l ? l(g, f, h) : void 0) && (p = a(g) ? g : r(o[u + 1]) ? [] : {});
			}
			t(h, f, p), h = h[f];
		}
		return e;
	}
	return e(o, "baseSet"), oI = o;
}
function oP() {
	if (oz) return oN;
	oz = 1;
	var t = oS();
	function n(e, n, r) {
		return null == e ? e : t(e, n, r);
	}
	return e(n, "set"), oN = n;
}
e(oE, "require_defineProperty"), e(oC, "require_baseAssignValue"), e(oT, "require_assignValue"), e(ok, "require_isIndex"), e(oS, "require_baseSet"), e(oP, "requireSet");
var oB, o_, oD, oA, oM, oR, oI, oL, oN, oz, oO, oF, oV = ey(oP());
function oq() {
	if (oF) return oO;
	function t(e, t) {
		var n = -1, r = e.length;
		for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
		return t;
	}
	return oF = 1, e(t, "copyArray"), oO = t;
}
function oj() {
	if (sx) return sb;
	sx = 1;
	var t = a0(), n = oq(), r = am(), a = e_(), i = aJ(), o = a3(), s = a2();
	function l(e) {
		return r(e) ? t(e, o) : a(e) ? [e] : n(i(s(e)));
	}
	return e(l, "toPath"), sb = l;
}
e(oq, "require_copyArray"), e(oj, "requireToPath");
var oX = ey(oj()), oY = {
	data: e(function(t) {
		return t = es({}, {
			field: "data",
			bindingEvent: "data",
			allowBinding: !1,
			allowSetting: !1,
			allowGetting: !1,
			settingEvent: "data",
			settingTriggersEvent: !1,
			triggerFnName: "trigger",
			immutableKeys: {},
			updateStyle: !1,
			beforeGet: e(function(e) {}, "beforeGet"),
			beforeSet: e(function(e, t) {}, "beforeSet"),
			onSet: e(function(e) {}, "onSet"),
			canSet: e(function(e) {
				return !0;
			}, "canSet")
		}, t), e(function(e, n) {
			var r, a = t, i = void 0 !== this.length, o = i ? this : [this], s = i ? this[0] : this;
			if (_(e)) {
				var u, c = -1 !== e.indexOf(".") && oX(e);
				if (a.allowGetting && void 0 === n) return s && (a.beforeGet(s), u = c && void 0 === s._private[a.field][e] ? ow(s._private[a.field], c) : s._private[a.field][e]), u;
				if (a.allowSetting && void 0 !== n && !a.immutableKeys[e]) {
					var d = l({}, e, n);
					a.beforeSet(this, d);
					for (var h = 0, f = o.length; h < f; h++) {
						var p = o[h];
						a.canSet(p) && (c && void 0 === s._private[a.field][e] ? oV(p._private[a.field], c, n) : p._private[a.field][e] = n);
					}
					a.updateStyle && this.updateStyle(), a.onSet(this), a.settingTriggersEvent && this[a.triggerFnName](a.settingEvent);
				}
			} else if (a.allowSetting && M(e)) {
				var g, v, y = Object.keys(e);
				a.beforeSet(this, e);
				for (var m = 0; m < y.length; m++) if (v = e[g = y[m]], !a.immutableKeys[g]) for (var x = 0; x < o.length; x++) {
					var w = o[x];
					a.canSet(w) && (w._private[a.field][g] = v);
				}
				a.updateStyle && this.updateStyle(), a.onSet(this), a.settingTriggersEvent && this[a.triggerFnName](a.settingEvent);
			} else if (a.allowBinding && D(e)) this.on(a.bindingEvent, e);
			else if (a.allowGetting && void 0 === e) return s && (a.beforeGet(s), r = s._private[a.field]), r;
			return this;
		}, "dataImpl");
	}, "data"),
	removeData: e(function(t) {
		return t = es({}, {
			field: "data",
			event: "data",
			triggerFnName: "trigger",
			triggerEvent: !1,
			immutableKeys: {}
		}, t), e(function(e) {
			var n = t, r = void 0 !== this.length ? this : [this];
			if (_(e)) {
				for (var a = e.split(/\s+/), i = a.length, o = 0; o < i; o++) {
					var s = a[o];
					if (!X(s) && !n.immutableKeys[s]) for (var l = 0, u = r.length; l < u; l++) r[l]._private[n.field][s] = void 0;
				}
				n.triggerEvent && this[n.triggerFnName](n.event);
			} else if (void 0 === e) {
				for (var c = 0, d = r.length; c < d; c++) for (var h = r[c]._private[n.field], f = Object.keys(h), p = 0; p < f.length; p++) {
					var g = f[p];
					n.immutableKeys[g] || (h[g] = void 0);
				}
				n.triggerEvent && this[n.triggerFnName](n.event);
			}
			return this;
		}, "removeDataImpl");
	}, "removeData")
}, oW = { eventAliasesOn: e(function(t) {
	t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(t, n) {
		var r = this, a = Array.prototype.slice.call(arguments, 0);
		return new ah(function(t, n) {
			var i = e(function(e) {
				r.off.apply(r, s), t(e);
			}, "callback"), o = a.concat([i]), s = o.concat([]);
			r.on.apply(r, o);
		});
	};
}, "eventAliasesOn") }, oH = {};
[
	ay,
	oY,
	oW
].forEach(function(e) {
	es(oH, e);
});
var oK = {
	animate: oH.animate(),
	animation: oH.animation(),
	animated: oH.animated(),
	clearQueue: oH.clearQueue(),
	delay: oH.delay(),
	delayAnimation: oH.delayAnimation(),
	stop: oH.stop()
}, oU = {
	classes: e(function(e) {
		if (void 0 === e) {
			var t = [];
			return this[0]._private.classes.forEach(function(e) {
				return t.push(e);
			}), t;
		}
		A(e) || (e = (e || "").match(/\S+/g) || []);
		for (var n = [], r = new th(e), a = 0; a < this.length; a++) {
			for (var i = this[a], o = i._private, s = o.classes, l = !1, u = 0; u < e.length; u++) {
				var c = e[u];
				if (!s.has(c)) {
					l = !0;
					break;
				}
			}
			l || (l = s.size !== e.length), l && (o.classes = r, n.push(i));
		}
		return n.length > 0 && this.spawn(n).updateStyle().emit("class"), this;
	}, "classes"),
	addClass: e(function(e) {
		return this.toggleClass(e, !0);
	}, "addClass"),
	hasClass: e(function(e) {
		var t = this[0];
		return null != t && t._private.classes.has(e);
	}, "hasClass"),
	toggleClass: e(function(e, t) {
		A(e) || (e = e.match(/\S+/g) || []);
		for (var n = void 0 === t, r = [], a = 0, i = this.length; a < i; a++) for (var o = this[a], s = o._private.classes, l = !1, u = 0; u < e.length; u++) {
			var c = e[u], d = s.has(c), h = !1;
			t || n && !d ? (s.add(c), h = !0) : (!t || n && d) && (s.delete(c), h = !0), !l && h && (r.push(o), l = !0);
		}
		return r.length > 0 && this.spawn(r).updateStyle().emit("class"), this;
	}, "toggleClass"),
	removeClass: e(function(e) {
		return this.toggleClass(e, !1);
	}, "removeClass"),
	flashClass: e(function(e, t) {
		var n = this;
		if (null == t) t = 250;
		else if (0 === t) return n;
		return n.addClass(e), setTimeout(function() {
			n.removeClass(e);
		}, t), n;
	}, "flashClass")
};
oU.className = oU.classNames = oU.classes;
var oG = {
	metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
	comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
	boolOp: "\\?|\\!|\\^",
	string: "\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'",
	number: ee,
	meta: "degree|indegree|outdegree",
	separator: "\\s*,\\s*",
	descendant: "\\s+",
	child: "\\s+>\\s+",
	subject: "\\$",
	group: "node|edge|\\*",
	directedEdge: "\\s+->\\s+",
	undirectedEdge: "\\s+<->\\s+"
};
for (oG.variable = "(?:[\\w-.]|(?:\\\\" + oG.metaChar + "))+", oG.className = "(?:[\\w-]|(?:\\\\" + oG.metaChar + "))+", oG.value = oG.string + "|" + oG.number, oG.id = oG.variable, sv = oG.comparatorOp.split("|"), sm = 0; sm < sv.length; sm++) sy = sv[sm], oG.comparatorOp += "|@" + sy;
for (sv = oG.comparatorOp.split("|"), sm = 0; sm < sv.length; sm++) (sy = sv[sm]).indexOf("!") >= 0 || "=" === sy || (oG.comparatorOp += "|\\!" + sy);
var oZ = e(function() {
	return { checks: [] };
}, "newQuery"), o$ = [
	{
		selector: ":selected",
		matches: e(function(e) {
			return e.selected();
		}, "matches")
	},
	{
		selector: ":unselected",
		matches: e(function(e) {
			return !e.selected();
		}, "matches")
	},
	{
		selector: ":selectable",
		matches: e(function(e) {
			return e.selectable();
		}, "matches")
	},
	{
		selector: ":unselectable",
		matches: e(function(e) {
			return !e.selectable();
		}, "matches")
	},
	{
		selector: ":locked",
		matches: e(function(e) {
			return e.locked();
		}, "matches")
	},
	{
		selector: ":unlocked",
		matches: e(function(e) {
			return !e.locked();
		}, "matches")
	},
	{
		selector: ":visible",
		matches: e(function(e) {
			return e.visible();
		}, "matches")
	},
	{
		selector: ":hidden",
		matches: e(function(e) {
			return !e.visible();
		}, "matches")
	},
	{
		selector: ":transparent",
		matches: e(function(e) {
			return e.transparent();
		}, "matches")
	},
	{
		selector: ":grabbed",
		matches: e(function(e) {
			return e.grabbed();
		}, "matches")
	},
	{
		selector: ":free",
		matches: e(function(e) {
			return !e.grabbed();
		}, "matches")
	},
	{
		selector: ":removed",
		matches: e(function(e) {
			return e.removed();
		}, "matches")
	},
	{
		selector: ":inside",
		matches: e(function(e) {
			return !e.removed();
		}, "matches")
	},
	{
		selector: ":grabbable",
		matches: e(function(e) {
			return e.grabbable();
		}, "matches")
	},
	{
		selector: ":ungrabbable",
		matches: e(function(e) {
			return !e.grabbable();
		}, "matches")
	},
	{
		selector: ":animated",
		matches: e(function(e) {
			return e.animated();
		}, "matches")
	},
	{
		selector: ":unanimated",
		matches: e(function(e) {
			return !e.animated();
		}, "matches")
	},
	{
		selector: ":parent",
		matches: e(function(e) {
			return e.isParent();
		}, "matches")
	},
	{
		selector: ":childless",
		matches: e(function(e) {
			return e.isChildless();
		}, "matches")
	},
	{
		selector: ":child",
		matches: e(function(e) {
			return e.isChild();
		}, "matches")
	},
	{
		selector: ":orphan",
		matches: e(function(e) {
			return e.isOrphan();
		}, "matches")
	},
	{
		selector: ":nonorphan",
		matches: e(function(e) {
			return e.isChild();
		}, "matches")
	},
	{
		selector: ":compound",
		matches: e(function(e) {
			return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
		}, "matches")
	},
	{
		selector: ":loop",
		matches: e(function(e) {
			return e.isLoop();
		}, "matches")
	},
	{
		selector: ":simple",
		matches: e(function(e) {
			return e.isSimple();
		}, "matches")
	},
	{
		selector: ":active",
		matches: e(function(e) {
			return e.active();
		}, "matches")
	},
	{
		selector: ":inactive",
		matches: e(function(e) {
			return !e.active();
		}, "matches")
	},
	{
		selector: ":backgrounding",
		matches: e(function(e) {
			return e.backgrounding();
		}, "matches")
	},
	{
		selector: ":nonbackgrounding",
		matches: e(function(e) {
			return !e.backgrounding();
		}, "matches")
	}
].sort(function(e, t) {
	return eo(e.selector, t.selector);
}), oQ = function() {
	for (var e, t = {}, n = 0; n < o$.length; n++) t[(e = o$[n]).selector] = e.matches;
	return t;
}(), oJ = e(function(e, t) {
	return oQ[e](t);
}, "stateSelectorMatches"), o0 = "(" + o$.map(function(e) {
	return e.selector;
}).join("|") + ")", o1 = e(function(e) {
	return e.replace(RegExp("\\\\(" + oG.metaChar + ")", "g"), function(e, t) {
		return t;
	});
}, "cleanMetaChars"), o2 = e(function(e, t, n) {
	e[e.length - 1] = n;
}, "replaceLastQuery"), o5 = [
	{
		name: "group",
		query: !0,
		regex: "(" + oG.group + ")",
		populate: e(function(e, t, n) {
			var r = f(n, 1)[0];
			t.checks.push({
				type: 0,
				value: "*" === r ? r : r + "s"
			});
		}, "populate")
	},
	{
		name: "state",
		query: !0,
		regex: o0,
		populate: e(function(e, t, n) {
			var r = f(n, 1)[0];
			t.checks.push({
				type: 7,
				value: r
			});
		}, "populate")
	},
	{
		name: "id",
		query: !0,
		regex: "\\#(" + oG.id + ")",
		populate: e(function(e, t, n) {
			var r = f(n, 1)[0];
			t.checks.push({
				type: 8,
				value: o1(r)
			});
		}, "populate")
	},
	{
		name: "className",
		query: !0,
		regex: "\\.(" + oG.className + ")",
		populate: e(function(e, t, n) {
			var r = f(n, 1)[0];
			t.checks.push({
				type: 9,
				value: o1(r)
			});
		}, "populate")
	},
	{
		name: "dataExists",
		query: !0,
		regex: "\\[\\s*(" + oG.variable + ")\\s*\\]",
		populate: e(function(e, t, n) {
			var r = f(n, 1)[0];
			t.checks.push({
				type: 4,
				field: o1(r)
			});
		}, "populate")
	},
	{
		name: "dataCompare",
		query: !0,
		regex: "\\[\\s*(" + oG.variable + ")\\s*(" + oG.comparatorOp + ")\\s*(" + oG.value + ")\\s*\\]",
		populate: e(function(e, t, n) {
			var r = f(n, 3), a = r[0], i = r[1], o = r[2];
			o = null != RegExp("^" + oG.string + "$").exec(o) ? o.substring(1, o.length - 1) : parseFloat(o), t.checks.push({
				type: 3,
				field: o1(a),
				operator: i,
				value: o
			});
		}, "populate")
	},
	{
		name: "dataBool",
		query: !0,
		regex: "\\[\\s*(" + oG.boolOp + ")\\s*(" + oG.variable + ")\\s*\\]",
		populate: e(function(e, t, n) {
			var r = f(n, 2), a = r[0], i = r[1];
			t.checks.push({
				type: 5,
				field: o1(i),
				operator: a
			});
		}, "populate")
	},
	{
		name: "metaCompare",
		query: !0,
		regex: "\\[\\[\\s*(" + oG.meta + ")\\s*(" + oG.comparatorOp + ")\\s*(" + oG.number + ")\\s*\\]\\]",
		populate: e(function(e, t, n) {
			var r = f(n, 3), a = r[0], i = r[1], o = r[2];
			t.checks.push({
				type: 6,
				field: o1(a),
				operator: i,
				value: parseFloat(o)
			});
		}, "populate")
	},
	{
		name: "nextQuery",
		separator: !0,
		regex: oG.separator,
		populate: e(function(e, t) {
			var n = e.currentSubject, r = e.edgeCount, a = e.compoundCount, i = e[e.length - 1];
			return null != n && (i.subject = n, e.currentSubject = null), i.edgeCount = r, i.compoundCount = a, e.edgeCount = 0, e.compoundCount = 0, e[e.length++] = oZ();
		}, "populate")
	},
	{
		name: "directedEdge",
		separator: !0,
		regex: oG.directedEdge,
		populate: e(function(e, t) {
			if (null == e.currentSubject) {
				var n = oZ(), r = oZ();
				return n.checks.push({
					type: 11,
					source: t,
					target: r
				}), o2(e, t, n), e.edgeCount++, r;
			}
			var a = oZ(), i = oZ();
			return a.checks.push({
				type: 12,
				source: t,
				target: i
			}), o2(e, t, a), e.edgeCount++, i;
		}, "populate")
	},
	{
		name: "undirectedEdge",
		separator: !0,
		regex: oG.undirectedEdge,
		populate: e(function(e, t) {
			if (null == e.currentSubject) {
				var n = oZ(), r = oZ();
				return n.checks.push({
					type: 10,
					nodes: [t, r]
				}), o2(e, t, n), e.edgeCount++, r;
			}
			var a = oZ(), i = oZ();
			return a.checks.push({
				type: 14,
				node: t,
				neighbor: i
			}), o2(e, t, a), i;
		}, "populate")
	},
	{
		name: "child",
		separator: !0,
		regex: oG.child,
		populate: e(function(e, t) {
			if (null == e.currentSubject) {
				var n = oZ(), r = oZ(), a = e[e.length - 1];
				return n.checks.push({
					type: 15,
					parent: a,
					child: r
				}), o2(e, t, n), e.compoundCount++, r;
			}
			if (e.currentSubject === t) {
				var i = oZ(), o = e[e.length - 1], s = oZ(), l = oZ(), u = oZ(), c = oZ();
				return i.checks.push({
					type: 19,
					left: o,
					right: s,
					subject: l
				}), l.checks = t.checks, t.checks = [{ type: 20 }], c.checks.push({ type: 20 }), s.checks.push({
					type: 17,
					parent: c,
					child: u
				}), o2(e, o, i), e.currentSubject = l, e.compoundCount++, u;
			}
			var d = oZ(), h = oZ(), f = [{
				type: 17,
				parent: d,
				child: h
			}];
			return d.checks = t.checks, t.checks = f, e.compoundCount++, h;
		}, "populate")
	},
	{
		name: "descendant",
		separator: !0,
		regex: oG.descendant,
		populate: e(function(e, t) {
			if (null == e.currentSubject) {
				var n = oZ(), r = oZ(), a = e[e.length - 1];
				return n.checks.push({
					type: 16,
					ancestor: a,
					descendant: r
				}), o2(e, t, n), e.compoundCount++, r;
			}
			if (e.currentSubject === t) {
				var i = oZ(), o = e[e.length - 1], s = oZ(), l = oZ(), u = oZ(), c = oZ();
				return i.checks.push({
					type: 19,
					left: o,
					right: s,
					subject: l
				}), l.checks = t.checks, t.checks = [{ type: 20 }], c.checks.push({ type: 20 }), s.checks.push({
					type: 18,
					ancestor: c,
					descendant: u
				}), o2(e, o, i), e.currentSubject = l, e.compoundCount++, u;
			}
			var d = oZ(), h = oZ(), f = [{
				type: 18,
				ancestor: d,
				descendant: h
			}];
			return d.checks = t.checks, t.checks = f, e.compoundCount++, h;
		}, "populate")
	},
	{
		name: "subject",
		modifier: !0,
		regex: oG.subject,
		populate: e(function(e, t) {
			if (null != e.currentSubject && e.currentSubject !== t) return e9("Redefinition of subject in selector `" + e.toString() + "`"), !1;
			e.currentSubject = t;
			var n = e[e.length - 1].checks[0], r = null == n ? null : n.type;
			11 === r ? n.type = 13 : 10 === r && (n.type = 14, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
		}, "populate")
	}
];
o5.forEach(function(e) {
	return e.regexObj = RegExp("^" + e.regex);
});
var o3 = e(function(e) {
	for (var t, n, r, a = 0; a < o5.length; a++) {
		var i = o5[a], o = i.name, s = e.match(i.regexObj);
		if (null != s) {
			n = s, t = i, r = o;
			var l = s[0];
			e = e.substring(l.length);
			break;
		}
	}
	return {
		expr: t,
		match: n,
		name: r,
		remaining: e
	};
}, "consumeExpr"), o4 = e(function(e) {
	var t = e.match(/^\s+/);
	if (t) {
		var n = t[0];
		e = e.substring(n.length);
	}
	return e;
}, "consumeWhitespace"), o9 = e(function(e) {
	var t = this.inputText = e, n = this[0] = oZ();
	for (this.length = 1, t = o4(t);;) {
		var r = o3(t);
		if (null == r.expr) return e9("The selector `" + e + "`is invalid"), !1;
		var a = r.match.slice(1), i = r.expr.populate(this, n, a);
		if (!1 === i) return !1;
		if (null != i && (n = i), (t = r.remaining).match(/^\s*$/)) break;
	}
	var o = this[this.length - 1];
	null != this.currentSubject && (o.subject = this.currentSubject), o.edgeCount = this.edgeCount, o.compoundCount = this.compoundCount;
	for (var s = 0; s < this.length; s++) {
		var l = this[s];
		if (l.compoundCount > 0 && l.edgeCount > 0) return e9("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
		if (l.edgeCount > 1) return e9("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
		1 === l.edgeCount && e9("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
	}
	return !0;
}, "parse"), o6 = e(function() {
	if (null != this.toStringCache) return this.toStringCache;
	for (var t = e(function(e) {
		return e ?? "";
	}, "clean"), n = e(function(e) {
		return _(e) ? "\"" + e + "\"" : t(e);
	}, "cleanVal"), r = e(function(e) {
		return " " + e + " ";
	}, "space"), a = e(function(e, a) {
		var o = e.type, s = e.value;
		switch (o) {
			case 0:
				var l = t(s);
				return l.substring(0, l.length - 1);
			case 3: return "[" + e.field + r(t(e.operator)) + n(s) + "]";
			case 5:
				var u = e.operator, c = e.field;
				return "[" + t(u) + c + "]";
			case 4: return "[" + e.field + "]";
			case 6:
				var d = e.operator;
				return "[[" + e.field + r(t(d)) + n(s) + "]]";
			case 7: return s;
			case 8: return "#" + s;
			case 9: return "." + s;
			case 17:
			case 15: return i(e.parent, a) + r(">") + i(e.child, a);
			case 18:
			case 16: return i(e.ancestor, a) + " " + i(e.descendant, a);
			case 19:
				var h = i(e.left, a), f = i(e.subject, a), p = i(e.right, a);
				return h + (h.length > 0 ? " " : "") + f + p;
			case 20: return "";
		}
	}, "checkToString"), i = e(function(e, t) {
		return e.checks.reduce(function(n, r, i) {
			return n + (t === e && 0 === i ? "$" : "") + a(r, t);
		}, "");
	}, "queryToString"), o = "", s = 0; s < this.length; s++) {
		var l = this[s];
		o += i(l, l.subject), this.length > 1 && s < this.length - 1 && (o += ", ");
	}
	return this.toStringCache = o, o;
}, "toString"), o8 = e(function(e, t, n) {
	var r, a, i, o = _(e), s = I(e), l = _(n), u = !1, c = !1, d = !1;
	switch (t.indexOf("!") >= 0 && (t = t.replace("!", ""), c = !0), t.indexOf("@") >= 0 && (t = t.replace("@", ""), u = !0), (o || l || u) && (a = !o && !s ? "" : "" + e, i = "" + n), u && (e = a = a.toLowerCase(), n = i = i.toLowerCase()), t) {
		case "*=":
			r = a.indexOf(i) >= 0;
			break;
		case "$=":
			r = a.indexOf(i, a.length - i.length) >= 0;
			break;
		case "^=":
			r = 0 === a.indexOf(i);
			break;
		case "=":
			r = e === n;
			break;
		case ">":
			d = !0, r = e > n;
			break;
		case ">=":
			d = !0, r = e >= n;
			break;
		case "<":
			d = !0, r = e < n;
			break;
		case "<=":
			d = !0, r = e <= n;
			break;
		default: r = !1;
	}
	return c && (null != e || !d) && (r = !r), r;
}, "valCmp"), o7 = e(function(e, t) {
	switch (t) {
		case "?": return !!e;
		case "!": return !e;
		case "^": return void 0 === e;
	}
}, "boolCmp"), se = e(function(e) {
	return void 0 !== e;
}, "existCmp"), st = e(function(e, t) {
	return e.data(t);
}, "data"), sn = e(function(e, t) {
	return e[t]();
}, "meta"), sr = [], sa = e(function(e, t) {
	return e.checks.every(function(e) {
		return sr[e.type](e, t);
	});
}, "matches");
sr[0] = function(e, t) {
	var n = e.value;
	return "*" === n || n === t.group();
}, sr[7] = function(e, t) {
	return oJ(e.value, t);
}, sr[8] = function(e, t) {
	var n = e.value;
	return t.id() === n;
}, sr[9] = function(e, t) {
	var n = e.value;
	return t.hasClass(n);
}, sr[6] = function(e, t) {
	var n = e.field, r = e.operator, a = e.value;
	return o8(sn(t, n), r, a);
}, sr[3] = function(e, t) {
	var n = e.field, r = e.operator, a = e.value;
	return o8(st(t, n), r, a);
}, sr[5] = function(e, t) {
	var n = e.field, r = e.operator;
	return o7(st(t, n), r);
}, sr[4] = function(e, t) {
	var n = e.field;
	return e.operator, se(st(t, n));
}, sr[10] = function(e, t) {
	var n = e.nodes[0], r = e.nodes[1], a = t.source(), i = t.target();
	return sa(n, a) && sa(r, i) || sa(r, a) && sa(n, i);
}, sr[14] = function(e, t) {
	return sa(e.node, t) && t.neighborhood().some(function(t) {
		return t.isNode() && sa(e.neighbor, t);
	});
}, sr[11] = function(e, t) {
	return sa(e.source, t.source()) && sa(e.target, t.target());
}, sr[12] = function(e, t) {
	return sa(e.source, t) && t.outgoers().some(function(t) {
		return t.isNode() && sa(e.target, t);
	});
}, sr[13] = function(e, t) {
	return sa(e.target, t) && t.incomers().some(function(t) {
		return t.isNode() && sa(e.source, t);
	});
}, sr[15] = function(e, t) {
	return sa(e.child, t) && sa(e.parent, t.parent());
}, sr[17] = function(e, t) {
	return sa(e.parent, t) && t.children().some(function(t) {
		return sa(e.child, t);
	});
}, sr[16] = function(e, t) {
	return sa(e.descendant, t) && t.ancestors().some(function(t) {
		return sa(e.ancestor, t);
	});
}, sr[18] = function(e, t) {
	return sa(e.ancestor, t) && t.descendants().some(function(t) {
		return sa(e.descendant, t);
	});
}, sr[19] = function(e, t) {
	return sa(e.subject, t) && sa(e.left, t) && sa(e.right, t);
}, sr[20] = function() {
	return !0;
}, sr[1] = function(e, t) {
	return e.value.has(t);
}, sr[2] = function(e, t) {
	return (0, e.value)(t);
};
var si = e(function(t) {
	var n = this;
	if (1 === n.length && 1 === n[0].checks.length && 8 === n[0].checks[0].type) return t.getElementById(n[0].checks[0].value).collection();
	var r = e(function(e) {
		for (var t = 0; t < n.length; t++) if (sa(n[t], e)) return !0;
		return !1;
	}, "selectorFunction");
	return n.text() ?? (r = e(function() {
		return !0;
	}, "selectorFunction")), t.filter(r);
}, "filter"), so = {
	matches: e(function(e) {
		for (var t = 0; t < this.length; t++) if (sa(this[t], e)) return !0;
		return !1;
	}, "matches"),
	filter: si
}, ss = e(function(e) {
	this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, null == e || _(e) && e.match(/^\s*$/) || (z(e) ? this.addQuery({ checks: [{
		type: 1,
		value: e.collection()
	}] }) : D(e) ? this.addQuery({ checks: [{
		type: 2,
		value: e
	}] }) : _(e) ? this.parse(e) || (this.invalid = !0) : e3("A selector must be created from a string; found "));
}, "Selector"), sl = ss.prototype;
[{
	parse: o9,
	toString: o6
}, so].forEach(function(e) {
	return es(sl, e);
}), sl.text = function() {
	return this.inputText;
}, sl.size = function() {
	return this.length;
}, sl.eq = function(e) {
	return this[e];
}, sl.sameText = function(e) {
	return !this.invalid && !e.invalid && this.text() === e.text();
}, sl.addQuery = function(e) {
	this[this.length++] = e;
}, sl.selector = sl.toString;
var su = {
	allAre: e(function(e) {
		var t = new ss(e);
		return this.every(function(e) {
			return t.matches(e);
		});
	}, "allAre"),
	is: e(function(e) {
		var t = new ss(e);
		return this.some(function(e) {
			return t.matches(e);
		});
	}, "is"),
	some: e(function(e, t) {
		for (var n = 0; n < this.length; n++) if (t ? e.apply(t, [
			this[n],
			n,
			this
		]) : e(this[n], n, this)) return !0;
		return !1;
	}, "some"),
	every: e(function(e, t) {
		for (var n = 0; n < this.length; n++) if (!(t ? e.apply(t, [
			this[n],
			n,
			this
		]) : e(this[n], n, this))) return !1;
		return !0;
	}, "every"),
	same: e(function(e) {
		if (this === e) return !0;
		e = this.cy().collection(e);
		var t = this.length;
		return t === e.length && (1 === t ? this[0] === e[0] : this.every(function(t) {
			return e.hasElementWithId(t.id());
		}));
	}, "same"),
	anySame: e(function(e) {
		return e = this.cy().collection(e), this.some(function(t) {
			return e.hasElementWithId(t.id());
		});
	}, "anySame"),
	allAreNeighbors: e(function(e) {
		e = this.cy().collection(e);
		var t = this.neighborhood();
		return e.every(function(e) {
			return t.hasElementWithId(e.id());
		});
	}, "allAreNeighbors"),
	contains: e(function(e) {
		e = this.cy().collection(e);
		var t = this;
		return e.every(function(e) {
			return t.hasElementWithId(e.id());
		});
	}, "contains")
};
su.allAreNeighbours = su.allAreNeighbors, su.has = su.contains, su.equal = su.equals = su.same;
var sc = e(function(t, n) {
	return e(function(e, r, a, i) {
		if (null == e ? o = "" : z(e) && 1 === e.length && (o = e.id()), 1 !== this.length || !o) return t.call(this, e, r, a, i);
		var o, s = this[0]._private, l = s.traversalCache = s.traversalCache || {}, u = l[n] = l[n] || [], c = eY(o);
		return u[c] || (u[c] = t.call(this, e, r, a, i));
	}, "traversalCache");
}, "cache"), sd = {
	parent: e(function(e) {
		var t = [];
		if (1 === this.length) {
			var n = this[0]._private.parent;
			if (n) return n;
		}
		for (var r = 0; r < this.length; r++) {
			var a = this[r]._private.parent;
			a && t.push(a);
		}
		return this.spawn(t, !0).filter(e);
	}, "parent"),
	parents: e(function(e) {
		for (var t = [], n = this.parent(); n.nonempty();) {
			for (var r = 0; r < n.length; r++) {
				var a = n[r];
				t.push(a);
			}
			n = n.parent();
		}
		return this.spawn(t, !0).filter(e);
	}, "parents"),
	commonAncestors: e(function(e) {
		for (var t, n = 0; n < this.length; n++) {
			var r = this[n].parents();
			t = (t = t || r).intersect(r);
		}
		return t.filter(e);
	}, "commonAncestors"),
	orphans: e(function(e) {
		return this.stdFilter(function(e) {
			return e.isOrphan();
		}).filter(e);
	}, "orphans"),
	nonorphans: e(function(e) {
		return this.stdFilter(function(e) {
			return e.isChild();
		}).filter(e);
	}, "nonorphans"),
	children: sc(function(e) {
		for (var t = [], n = 0; n < this.length; n++) for (var r = this[n], a = r._private.children, i = 0; i < a.length; i++) t.push(a[i]);
		return this.spawn(t, !0).filter(e);
	}, "children"),
	siblings: e(function(e) {
		return this.parent().children().not(this).filter(e);
	}, "siblings"),
	isParent: e(function() {
		var e = this[0];
		if (e) return e.isNode() && 0 !== e._private.children.length;
	}, "isParent"),
	isChildless: e(function() {
		var e = this[0];
		if (e) return e.isNode() && 0 === e._private.children.length;
	}, "isChildless"),
	isChild: e(function() {
		var e = this[0];
		if (e) return e.isNode() && null != e._private.parent;
	}, "isChild"),
	isOrphan: e(function() {
		var e = this[0];
		if (e) return e.isNode() && null == e._private.parent;
	}, "isOrphan"),
	descendants: e(function(t) {
		var n = [];
		function r(e) {
			for (var t = 0; t < e.length; t++) {
				var a = e[t];
				n.push(a), a.children().nonempty() && r(a.children());
			}
		}
		return e(r, "add"), r(this.children()), this.spawn(n, !0).filter(t);
	}, "descendants")
};
function sh(e, t, n, r) {
	for (var a = [], i = new th(), o = e.cy().hasCompoundNodes(), s = 0; s < e.length; s++) {
		var l = e[s];
		n ? a.push(l) : o && r(a, i, l);
	}
	for (; a.length > 0;) {
		var u = a.shift();
		t(u), i.add(u.id()), o && r(a, i, u);
	}
	return e;
}
function sf(e, t, n) {
	if (n.isParent()) for (var r = n._private.children, a = 0; a < r.length; a++) {
		var i = r[a];
		t.has(i.id()) || e.push(i);
	}
}
function sp(e, t, n) {
	if (n.isChild()) {
		var r = n._private.parent;
		t.has(r.id()) || e.push(r);
	}
}
function sg(e, t, n) {
	sp(e, t, n), sf(e, t, n);
}
e(sh, "forEachCompound"), e(sf, "addChildren"), sd.forEachDown = function(e) {
	var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	return sh(this, e, t, sf);
}, e(sp, "addParent"), sd.forEachUp = function(e) {
	var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	return sh(this, e, t, sp);
}, e(sg, "addParentAndChildren"), sd.forEachUpAndDown = function(e) {
	var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	return sh(this, e, t, sg);
}, sd.ancestors = sd.parents;
var sv, sy, sm, sb, sx, sw, sE = sw = {
	data: oH.data({
		field: "data",
		bindingEvent: "data",
		allowBinding: !0,
		allowSetting: !0,
		settingEvent: "data",
		settingTriggersEvent: !0,
		triggerFnName: "trigger",
		allowGetting: !0,
		immutableKeys: {
			id: !0,
			source: !0,
			target: !0,
			parent: !0
		},
		updateStyle: !0
	}),
	removeData: oH.removeData({
		field: "data",
		event: "data",
		triggerFnName: "trigger",
		triggerEvent: !0,
		immutableKeys: {
			id: !0,
			source: !0,
			target: !0,
			parent: !0
		},
		updateStyle: !0
	}),
	scratch: oH.data({
		field: "scratch",
		bindingEvent: "scratch",
		allowBinding: !0,
		allowSetting: !0,
		settingEvent: "scratch",
		settingTriggersEvent: !0,
		triggerFnName: "trigger",
		allowGetting: !0,
		updateStyle: !0
	}),
	removeScratch: oH.removeData({
		field: "scratch",
		event: "scratch",
		triggerFnName: "trigger",
		triggerEvent: !0,
		updateStyle: !0
	}),
	rscratch: oH.data({
		field: "rscratch",
		allowBinding: !1,
		allowSetting: !0,
		settingTriggersEvent: !1,
		allowGetting: !0
	}),
	removeRscratch: oH.removeData({
		field: "rscratch",
		triggerEvent: !1
	}),
	id: e(function() {
		var e = this[0];
		if (e) return e._private.data.id;
	}, "id")
};
sE.attr = sE.data, sE.removeAttr = sE.removeData;
var sC = {};
function sT(e) {
	return function(t) {
		if (void 0 === t && (t = !0), 0 !== this.length) if (!this.isNode() || this.removed()) return;
		else {
			for (var n = 0, r = this[0], a = r._private.edges, i = 0; i < a.length; i++) {
				var o = a[i];
				!t && o.isLoop() || (n += e(r, o));
			}
			return n;
		}
	};
}
function sk(e, t) {
	return function(n) {
		for (var r, a = this.nodes(), i = 0; i < a.length; i++) {
			var o = a[i][e](n);
			void 0 !== o && (void 0 === r || t(o, r)) && (r = o);
		}
		return r;
	};
}
e(sT, "defineDegreeFunction"), es(sC, {
	degree: sT(function(e, t) {
		return t.source().same(t.target()) ? 2 : 1;
	}),
	indegree: sT(function(e, t) {
		return +!!t.target().same(e);
	}),
	outdegree: sT(function(e, t) {
		return +!!t.source().same(e);
	})
}), e(sk, "defineDegreeBoundsFunction"), es(sC, {
	minDegree: sk("degree", function(e, t) {
		return e < t;
	}),
	maxDegree: sk("degree", function(e, t) {
		return e > t;
	}),
	minIndegree: sk("indegree", function(e, t) {
		return e < t;
	}),
	maxIndegree: sk("indegree", function(e, t) {
		return e > t;
	}),
	minOutdegree: sk("outdegree", function(e, t) {
		return e < t;
	}),
	maxOutdegree: sk("outdegree", function(e, t) {
		return e > t;
	})
}), es(sC, { totalDegree: e(function(e) {
	for (var t = 0, n = this.nodes(), r = 0; r < n.length; r++) t += n[r].degree(e);
	return t;
}, "totalDegree") });
var sS, sP, sB = e(function(e, t, n) {
	for (var r = 0; r < e.length; r++) {
		var a = e[r];
		if (!a.locked()) {
			var i = a._private.position, o = {
				x: null != t.x ? t.x - i.x : 0,
				y: null != t.y ? t.y - i.y : 0
			};
			a.isParent() && (0 !== o.x || 0 !== o.y) && a.children().shift(o, n), a.dirtyBoundingBoxCache();
		}
	}
}, "beforePositionSet"), s_ = {
	field: "position",
	bindingEvent: "position",
	allowBinding: !0,
	allowSetting: !0,
	settingEvent: "position",
	settingTriggersEvent: !0,
	triggerFnName: "emitAndNotify",
	allowGetting: !0,
	validKeys: ["x", "y"],
	beforeGet: e(function(e) {
		e.updateCompoundBounds();
	}, "beforeGet"),
	beforeSet: e(function(e, t) {
		sB(e, t, !1);
	}, "beforeSet"),
	onSet: e(function(e) {
		e.dirtyCompoundBoundsCache();
	}, "onSet"),
	canSet: e(function(e) {
		return !e.locked();
	}, "canSet")
};
(sS = sP = {
	position: oH.data(s_),
	silentPosition: oH.data(es({}, s_, {
		allowBinding: !1,
		allowSetting: !0,
		settingTriggersEvent: !1,
		allowGetting: !1,
		beforeSet: e(function(e, t) {
			sB(e, t, !0);
		}, "beforeSet"),
		onSet: e(function(e) {
			e.dirtyCompoundBoundsCache();
		}, "onSet")
	})),
	positions: e(function(e, t) {
		if (M(e)) t ? this.silentPosition(e) : this.position(e);
		else if (D(e)) {
			var n = this.cy();
			n.startBatch();
			for (var r = 0; r < this.length; r++) {
				var a = this[r], i = void 0;
				(i = e(a, r)) && (t ? a.silentPosition(i) : a.position(i));
			}
			n.endBatch();
		}
		return this;
	}, "positions"),
	silentPositions: e(function(e) {
		return this.positions(e, !0);
	}, "silentPositions"),
	shift: e(function(e, t, n) {
		var r;
		if (M(e) ? (r = {
			x: I(e.x) ? e.x : 0,
			y: I(e.y) ? e.y : 0
		}, n = t) : _(e) && I(t) && ((r = {
			x: 0,
			y: 0
		})[e] = t), null != r) {
			var a = this.cy();
			a.startBatch();
			for (var i = 0; i < this.length; i++) {
				var o = this[i];
				if (!(a.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
					var s = o.position(), l = {
						x: s.x + r.x,
						y: s.y + r.y
					};
					n ? o.silentPosition(l) : o.position(l);
				}
			}
			a.endBatch();
		}
		return this;
	}, "shift"),
	silentShift: e(function(e, t) {
		return M(e) ? this.shift(e, !0) : _(e) && I(t) && this.shift(e, t, !0), this;
	}, "silentShift"),
	renderedPosition: e(function(e, t) {
		var n = this[0], r = this.cy(), a = r.zoom(), i = r.pan(), o = M(e) ? e : void 0, s = void 0 !== o || void 0 !== t && _(e);
		if (n && n.isNode()) if (!s) return o = nr(n.position(), a, i), void 0 === e ? o : o[e];
		else for (var l = 0; l < this.length; l++) {
			var u = this[l];
			void 0 !== t ? u.position(e, (t - i[e]) / a) : void 0 !== o && u.position(na(o, a, i));
		}
		else if (!s) return;
		return this;
	}, "renderedPosition"),
	relativePosition: e(function(e, t) {
		var n = this[0], r = this.cy(), a = M(e) ? e : void 0, i = void 0 !== a || void 0 !== t && _(e), o = r.hasCompoundNodes();
		if (n && n.isNode()) if (i) for (var s = 0; s < this.length; s++) {
			var l = this[s], u = o ? l.parent() : null, c = u && u.length > 0;
			c && (u = u[0]);
			var d = c ? u.position() : {
				x: 0,
				y: 0
			};
			void 0 !== t ? l.position(e, t + d[e]) : void 0 !== a && l.position({
				x: a.x + d.x,
				y: a.y + d.y
			});
		}
		else {
			var h = n.position(), f = o ? n.parent() : null, p = f && f.length > 0;
			p && (f = f[0]);
			var g = p ? f.position() : {
				x: 0,
				y: 0
			};
			return a = {
				x: h.x - g.x,
				y: h.y - g.y
			}, void 0 === e ? a : a[e];
		}
		else if (!i) return;
		return this;
	}, "relativePosition")
}).modelPosition = sS.point = sS.position, sS.modelPositions = sS.points = sS.positions, sS.renderedPoint = sS.renderedPosition, sS.relativePoint = sS.relativePosition;
var sD, sA = sD = {};
sD.renderedBoundingBox = function(e) {
	var t = this.boundingBox(e), n = this.cy(), r = n.zoom(), a = n.pan(), i = t.x1 * r + a.x, o = t.x2 * r + a.x, s = t.y1 * r + a.y, l = t.y2 * r + a.y;
	return {
		x1: i,
		x2: o,
		y1: s,
		y2: l,
		w: o - i,
		h: l - s
	};
}, sD.dirtyCompoundBoundsCache = function() {
	var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.cy();
	return t.styleEnabled() && t.hasCompoundNodes() && this.forEachUp(function(t) {
		if (t.isParent()) {
			var n = t._private;
			n.compoundBoundsClean = !1, n.bbCache = null, e || t.emitAndNotify("bounds");
		}
	}), this;
}, sD.updateCompoundBounds = function() {
	var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = this.cy();
	if (!n.styleEnabled() || !n.hasCompoundNodes() || !t && n.batching()) return this;
	function r(t) {
		if (t.isParent()) {
			var n = t._private, r = t.children(), a = "include" === t.pstyle("compound-sizing-wrt-labels").value, i = {
				width: {
					val: t.pstyle("min-width").pfValue,
					left: t.pstyle("min-width-bias-left"),
					right: t.pstyle("min-width-bias-right")
				},
				height: {
					val: t.pstyle("min-height").pfValue,
					top: t.pstyle("min-height-bias-top"),
					bottom: t.pstyle("min-height-bias-bottom")
				}
			}, o = r.boundingBox({
				includeLabels: a,
				includeOverlays: !1,
				useCache: !1
			}), s = n.position;
			(0 === o.w || 0 === o.h) && ((o = {
				w: t.pstyle("width").pfValue,
				h: t.pstyle("height").pfValue
			}).x1 = s.x - o.w / 2, o.x2 = s.x + o.w / 2, o.y1 = s.y - o.h / 2, o.y2 = s.y + o.h / 2), e(m, "computeBiasValues"), e(x, "computePaddingValues");
			var l = i.width.left.value;
			"px" === i.width.left.units && i.width.val > 0 && (l = 100 * l / i.width.val);
			var u = i.width.right.value;
			"px" === i.width.right.units && i.width.val > 0 && (u = 100 * u / i.width.val);
			var c = i.height.top.value;
			"px" === i.height.top.units && i.height.val > 0 && (c = 100 * c / i.height.val);
			var d = i.height.bottom.value;
			"px" === i.height.bottom.units && i.height.val > 0 && (d = 100 * d / i.height.val);
			var h = m(i.width.val - o.w, l, u), f = h.biasDiff, p = h.biasComplementDiff, g = m(i.height.val - o.h, c, d), v = g.biasDiff, y = g.biasComplementDiff;
			n.autoPadding = x(o.w, o.h, t.pstyle("padding"), t.pstyle("padding-relative-to").value), n.autoWidth = Math.max(o.w, i.width.val), s.x = (-f + o.x1 + o.x2 + p) / 2, n.autoHeight = Math.max(o.h, i.height.val), s.y = (-v + o.y1 + o.y2 + y) / 2;
		}
		function m(e, t, n) {
			var r = 0, a = 0, i = t + n;
			return e > 0 && i > 0 && (r = t / i * e, a = n / i * e), {
				biasDiff: r,
				biasComplementDiff: a
			};
		}
		function x(e, t, n, r) {
			if ("%" !== n.units) return "px" === n.units ? n.pfValue : 0;
			switch (r) {
				case "width": return e > 0 ? n.pfValue * e : 0;
				case "height": return t > 0 ? n.pfValue * t : 0;
				case "average": return e > 0 && t > 0 ? n.pfValue * (e + t) / 2 : 0;
				case "min": return e > 0 && t > 0 ? e > t ? n.pfValue * t : n.pfValue * e : 0;
				case "max": return e > 0 && t > 0 ? e > t ? n.pfValue * e : n.pfValue * t : 0;
				default: return 0;
			}
		}
	}
	e(r, "update");
	for (var a = 0; a < this.length; a++) {
		var i = this[a], o = i._private;
		(!o.compoundBoundsClean || t) && (r(i), n.batching() || (o.compoundBoundsClean = !0));
	}
	return this;
};
var sM = e(function(e) {
	return e === Infinity || e === -Infinity ? 0 : e;
}, "noninf"), sR = e(function(e, t, n, r, a) {
	r - t == 0 || a - n == 0 || null == t || null == n || null == r || null == a || (e.x1 = t < e.x1 ? t : e.x1, e.x2 = r > e.x2 ? r : e.x2, e.y1 = n < e.y1 ? n : e.y1, e.y2 = a > e.y2 ? a : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, "updateBounds"), sI = e(function(e, t) {
	return null == t ? e : sR(e, t.x1, t.y1, t.x2, t.y2);
}, "updateBoundsFromBox"), sL = e(function(e, t, n) {
	return ts(e, t, n);
}, "prefixedProperty"), sN = e(function(e, t, n) {
	if (!t.cy().headless()) {
		var r, a, i = t._private, o = i.rstyle, s = o.arrowWidth / 2;
		if ("none" !== t.pstyle(n + "-arrow-shape").value) {
			"source" === n ? (r = o.srcX, a = o.srcY) : "target" === n ? (r = o.tgtX, a = o.tgtY) : (r = o.midX, a = o.midY);
			var l = i.arrowBounds = i.arrowBounds || {}, u = l[n] = l[n] || {};
			u.x1 = r - s, u.y1 = a - s, u.x2 = r + s, u.y2 = a + s, u.w = u.x2 - u.x1, u.h = u.y2 - u.y1, nS(u, 1), sR(e, u.x1, u.y1, u.x2, u.y2);
		}
	}
}, "updateBoundsFromArrow"), sz = e(function(t, n, r) {
	if (!n.cy().headless()) {
		o = r ? r + "-" : "";
		var a = n._private, i = a.rstyle;
		if (n.pstyle(o + "label").strValue) {
			var o, s, l, u, c, d = n.pstyle("text-halign"), h = n.pstyle("text-valign"), f = sL(i, "labelWidth", r), p = sL(i, "labelHeight", r), g = sL(i, "labelX", r), v = sL(i, "labelY", r), y = n.pstyle(o + "text-margin-x").pfValue, m = n.pstyle(o + "text-margin-y").pfValue, x = n.isEdge(), w = n.pstyle(o + "text-rotation"), E = n.pstyle("text-outline-width").pfValue, C = n.pstyle("text-border-width").pfValue / 2, T = n.pstyle("text-background-padding").pfValue, k = f / 2, S = p / 2;
			if (x) s = g - k, l = g + k, u = v - S, c = v + S;
			else {
				switch (d.value) {
					case "left":
						s = g - f, l = g;
						break;
					case "center":
						s = g - k, l = g + k;
						break;
					case "right": s = g, l = g + f;
				}
				switch (h.value) {
					case "top":
						u = v - p, c = v;
						break;
					case "center":
						u = v - S, c = v + S;
						break;
					case "bottom": u = v, c = v + p;
				}
			}
			var P = y - Math.max(E, C) - T - 2, B = y + Math.max(E, C) + T + 2, _ = m - Math.max(E, C) - T - 2, D = m + Math.max(E, C) + T + 2;
			s += P, l += B, u += _, c += D;
			var A = r || "main", M = a.labelBounds, R = M[A] = M[A] || {};
			R.x1 = s, R.y1 = u, R.x2 = l, R.y2 = c, R.w = l - s, R.h = c - u, R.leftPad = P, R.rightPad = B, R.topPad = _, R.botPad = D;
			var I = x && "autorotate" === w.strValue, L = null != w.pfValue && 0 !== w.pfValue;
			if (I || L) {
				var N = I ? sL(a.rstyle, "labelAngle", r) : w.pfValue, z = Math.cos(N), O = Math.sin(N), F = (s + l) / 2, V = (u + c) / 2;
				if (!x) {
					switch (d.value) {
						case "left":
							F = l;
							break;
						case "right": F = s;
					}
					switch (h.value) {
						case "top":
							V = c;
							break;
						case "bottom": V = u;
					}
				}
				var q = e(function(e, t) {
					return {
						x: (e -= F) * z - (t -= V) * O + F,
						y: e * O + t * z + V
					};
				}, "rotate"), j = q(s, u), X = q(s, c), Y = q(l, u), W = q(l, c);
				s = Math.min(j.x, X.x, Y.x, W.x), l = Math.max(j.x, X.x, Y.x, W.x), u = Math.min(j.y, X.y, Y.y, W.y), c = Math.max(j.y, X.y, Y.y, W.y);
			}
			var H = A + "Rot", K = M[H] = M[H] || {};
			K.x1 = s, K.y1 = u, K.x2 = l, K.y2 = c, K.w = l - s, K.h = c - u, sR(t, s, u, l, c), sR(a.labelBounds.all, s, u, l, c);
		}
		return t;
	}
}, "updateBoundsFromLabel"), sO = e(function(e, t) {
	if (!t.cy().headless()) {
		var n = t.pstyle("outline-opacity").value, r = t.pstyle("outline-width").value + t.pstyle("outline-offset").value;
		sF(e, t, n, r, "outside", r / 2);
	}
}, "updateBoundsFromOutline"), sF = e(function(e, t, n, r, a, i) {
	if (!(0 === n || r <= 0 || "inside" === a)) {
		var o = t.cy(), s = t.pstyle("shape").value, l = o.renderer().nodeShapes[s], u = t.position(), c = u.x, d = u.y, h = t.width(), f = t.height();
		l.hasMiterBounds ? ("center" === a && (r /= 2), sI(e, l.miterBounds(c, d, h, f, r))) : null != i && i > 0 && nP(e, [
			i,
			i,
			i,
			i
		]);
	}
}, "updateBoundsFromMiter"), sV = e(function(e, t) {
	if (!t.cy().headless()) {
		var n = t.pstyle("border-opacity").value, r = t.pstyle("border-width").pfValue, a = t.pstyle("border-position").value;
		sF(e, t, n, r, a);
	}
}, "updateBoundsFromMiterBorder"), sq = e(function(t, n) {
	var r, a, i, o, s, l, u = t._private.cy, c = u.styleEnabled(), d = u.headless(), h = nw(), f = t._private, p = t.isNode(), g = t.isEdge(), v = f.rstyle, y = p && c ? t.pstyle("bounds-expansion").pfValue : [0], m = e(function(e) {
		return "none" !== e.pstyle("display").value;
	}, "isDisplayed"), x = !c || m(t) && (!g || m(t.source()) && m(t.target()));
	if (x) {
		var w = 0;
		c && n.includeOverlays && 0 !== t.pstyle("overlay-opacity").value && (w = t.pstyle("overlay-padding").value);
		var E = 0;
		c && n.includeUnderlays && 0 !== t.pstyle("underlay-opacity").value && (E = t.pstyle("underlay-padding").value);
		var C = Math.max(w, E), T = 0;
		if (c && (T = t.pstyle("width").pfValue / 2), p && n.includeNodes) {
			var k = t.position();
			s = k.x, l = k.y;
			var S = t.outerWidth() / 2, P = t.outerHeight() / 2;
			r = s - S, a = s + S, sR(h, r, i = l - P, a, o = l + P), c && sO(h, t), c && n.includeOutlines && !d && sO(h, t), c && sV(h, t);
		} else if (g && n.includeEdges) if (c && !d) {
			var B, _ = t.pstyle("curve-style").strValue;
			if (r = Math.min(v.srcX, v.midX, v.tgtX), a = Math.max(v.srcX, v.midX, v.tgtX), i = Math.min(v.srcY, v.midY, v.tgtY), o = Math.max(v.srcY, v.midY, v.tgtY), r -= T, a += T, sR(h, r, i -= T, a, o += T), "haystack" === _) {
				var D = v.haystackPts;
				if (D && 2 === D.length) {
					if (r = D[0].x, i = D[0].y, a = D[1].x, o = D[1].y, r > a) {
						var A = r;
						r = a, a = A;
					}
					if (i > o) {
						var M = i;
						i = o, o = M;
					}
					sR(h, r - T, i - T, a + T, o + T);
				}
			} else if ("bezier" === _ || "unbundled-bezier" === _ || J(_, "segments") || J(_, "taxi")) {
				switch (_) {
					case "bezier":
					case "unbundled-bezier":
						B = v.bezierPts;
						break;
					case "segments":
					case "taxi":
					case "round-segments":
					case "round-taxi": B = v.linePts;
				}
				if (null != B) for (var R = 0; R < B.length; R++) {
					var I = B[R];
					r = I.x - T, a = I.x + T, sR(h, r, i = I.y - T, a, o = I.y + T);
				}
			}
		} else {
			var L = t.source().position(), N = t.target().position();
			if (r = L.x, a = N.x, i = L.y, o = N.y, r > a) {
				var z = r;
				r = a, a = z;
			}
			if (i > o) {
				var O = i;
				i = o, o = O;
			}
			r -= T, a += T, sR(h, r, i -= T, a, o += T);
		}
		if (c && n.includeEdges && g && (sN(h, t, "mid-source"), sN(h, t, "mid-target"), sN(h, t, "source"), sN(h, t, "target")), c && "yes" === t.pstyle("ghost").value) {
			var F = t.pstyle("ghost-offset-x").pfValue, V = t.pstyle("ghost-offset-y").pfValue;
			sR(h, h.x1 + F, h.y1 + V, h.x2 + F, h.y2 + V);
		}
		var q = f.bodyBounds = f.bodyBounds || {};
		nB(q, h), nP(q, y), nS(q, 1), c && (r = h.x1, a = h.x2, i = h.y1, o = h.y2, sR(h, r - C, i - C, a + C, o + C));
		var j = f.overlayBounds = f.overlayBounds || {};
		nB(j, h), nP(j, y), nS(j, 1);
		var X = f.labelBounds = f.labelBounds || {};
		null != X.all ? nC(X.all) : X.all = nw(), c && n.includeLabels && (n.includeMainLabels && sz(h, t, null), g && (n.includeSourceLabels && sz(h, t, "source"), n.includeTargetLabels && sz(h, t, "target")));
	}
	return h.x1 = sM(h.x1), h.y1 = sM(h.y1), h.x2 = sM(h.x2), h.y2 = sM(h.y2), h.w = sM(h.x2 - h.x1), h.h = sM(h.y2 - h.y1), h.w > 0 && h.h > 0 && x && (nP(h, y), nS(h, 1)), h;
}, "boundingBoxImpl"), sj = e(function(t) {
	var n = 0, r = e(function(e) {
		return !!e << n++;
	}, "tf");
	return 0 + r(t.incudeNodes) + r(t.includeEdges) + r(t.includeLabels) + r(t.includeMainLabels) + r(t.includeSourceLabels) + r(t.includeTargetLabels) + r(t.includeOverlays) + r(t.includeOutlines);
}, "getKey"), sX = e(function(t) {
	var n = e(function(e) {
		return Math.round(e);
	}, "r");
	if (t.isEdge()) {
		var r = t.source().position(), a = t.target().position();
		return eX([
			n(r.x),
			n(r.y),
			n(a.x),
			n(a.y)
		]);
	}
	var i = t.position();
	return eX([n(i.x), n(i.y)]);
}, "getBoundingBoxPosKey"), sY = e(function(e, t) {
	var n, r = e._private, a = e.isEdge(), i = (null == t ? sH : sj(t)) === sH;
	if (null == r.bbCache ? (r.bbCache = n = sq(e, sW), r.bbCachePosKey = sX(e)) : n = r.bbCache, !i) {
		var o = e.isNode();
		n = nw(), (t.includeNodes && o || t.includeEdges && !o) && (t.includeOverlays ? sI(n, r.overlayBounds) : sI(n, r.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!a || t.includeSourceLabels && t.includeTargetLabels) ? sI(n, r.labelBounds.all) : (t.includeMainLabels && sI(n, r.labelBounds.mainRot), t.includeSourceLabels && sI(n, r.labelBounds.sourceRot), t.includeTargetLabels && sI(n, r.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
	}
	return n;
}, "cachedBoundingBoxImpl"), sW = {
	includeNodes: !0,
	includeEdges: !0,
	includeLabels: !0,
	includeMainLabels: !0,
	includeSourceLabels: !0,
	includeTargetLabels: !0,
	includeOverlays: !0,
	includeUnderlays: !0,
	includeOutlines: !0,
	useCache: !0
}, sH = sj(sW), sK = tr(sW);
sD.boundingBox = function(e) {
	var t, n = void 0 === e || void 0 === e.useCache || !0 === e.useCache, r = U(function(e) {
		var t = e._private;
		return null == t.bbCache || t.styleDirty || t.bbCachePosKey !== sX(e);
	}, function(e) {
		return e.id();
	});
	if (n && 1 === this.length && !r(this[0])) e = void 0 === e ? sW : sK(e), t = sY(this[0], e);
	else {
		t = nw();
		var a = sK(e = e || sW), i = this.cy().styleEnabled();
		this.edges().forEach(r), this.nodes().forEach(r), i && this.recalculateRenderedStyle(n), this.updateCompoundBounds(!n);
		for (var o = 0; o < this.length; o++) {
			var s = this[o];
			r(s) && s.dirtyBoundingBoxCache(), sI(t, sY(s, a));
		}
	}
	return t.x1 = sM(t.x1), t.y1 = sM(t.y1), t.x2 = sM(t.x2), t.y2 = sM(t.y2), t.w = sM(t.x2 - t.x1), t.h = sM(t.y2 - t.y1), t;
}, sD.dirtyBoundingBoxCache = function() {
	for (var e = 0; e < this.length; e++) {
		var t = this[e]._private;
		t.bbCache = null, t.bbCachePosKey = null, t.bodyBounds = null, t.overlayBounds = null, t.labelBounds.all = null, t.labelBounds.source = null, t.labelBounds.target = null, t.labelBounds.main = null, t.labelBounds.sourceRot = null, t.labelBounds.targetRot = null, t.labelBounds.mainRot = null, t.arrowBounds.source = null, t.arrowBounds.target = null, t.arrowBounds["mid-source"] = null, t.arrowBounds["mid-target"] = null;
	}
	return this.emitAndNotify("bounds"), this;
}, sD.boundingBoxAt = function(t) {
	var n = this.nodes(), r = this.cy(), a = r.hasCompoundNodes(), i = r.collection();
	if (a && (i = n.filter(function(e) {
		return e.isParent();
	}), n = n.not(i)), M(t)) {
		var o = t;
		t = e(function() {
			return o;
		}, "fn");
	}
	var s = e(function(e, n) {
		return e._private.bbAtOldPos = t(e, n);
	}, "storeOldPos"), l = e(function(e) {
		return e._private.bbAtOldPos;
	}, "getOldPos");
	r.startBatch(), n.forEach(s).silentPositions(t), a && (i.dirtyCompoundBoundsCache(), i.dirtyBoundingBoxCache(), i.updateCompoundBounds(!0));
	var u = nE(this.boundingBox({ useCache: !1 }));
	return n.silentPositions(l), a && (i.dirtyCompoundBoundsCache(), i.dirtyBoundingBoxCache(), i.updateCompoundBounds(!0)), r.endBatch(), u;
}, sA.boundingbox = sA.bb = sA.boundingBox, sA.renderedBoundingbox = sA.renderedBoundingBox;
var sU, sG = sU = {}, sZ = e(function(t) {
	t.uppercaseName = Q(t.name), t.autoName = "auto" + t.uppercaseName, t.labelName = "label" + t.uppercaseName, t.outerName = "outer" + t.uppercaseName, t.uppercaseOuterName = Q(t.outerName), sG[t.name] = e(function() {
		var e = this[0], n = e._private, r = n.cy._private.styleEnabled;
		if (e) if (!r) return 1;
		else {
			if (e.isParent()) return e.updateCompoundBounds(), n[t.autoName] || 0;
			var a = e.pstyle(t.name);
			return "label" === a.strValue ? (e.recalculateRenderedStyle(), n.rstyle[t.labelName] || 0) : a.pfValue;
		}
	}, "dimImpl"), sG["outer" + t.uppercaseName] = e(function() {
		var e = this[0], n = e._private.cy._private.styleEnabled;
		if (e) if (!n) return 1;
		else {
			var r = e[t.name](), a = e.pstyle("border-position").value;
			return r + ("center" === a ? e.pstyle("border-width").pfValue : "outside" === a ? 2 * e.pstyle("border-width").pfValue : 0) + 2 * e.padding();
		}
	}, "outerDimImpl"), sG["rendered" + t.uppercaseName] = e(function() {
		var e = this[0];
		if (e) return e[t.name]() * this.cy().zoom();
	}, "renderedDimImpl"), sG["rendered" + t.uppercaseOuterName] = e(function() {
		var e = this[0];
		if (e) return e[t.outerName]() * this.cy().zoom();
	}, "renderedOuterDimImpl");
}, "defineDimFns");
sZ({ name: "width" }), sZ({ name: "height" }), sU.padding = function() {
	var e = this[0], t = e._private;
	return e.isParent() ? (e.updateCompoundBounds(), void 0 !== t.autoPadding ? t.autoPadding : e.pstyle("padding").pfValue) : e.pstyle("padding").pfValue;
}, sU.paddedHeight = function() {
	var e = this[0];
	return e.height() + 2 * e.padding();
}, sU.paddedWidth = function() {
	var e = this[0];
	return e.width() + 2 * e.padding();
};
var s$ = e(function(e, t) {
	if (e.isEdge() && e.takesUpSpace()) return t(e);
}, "ifEdge"), sQ = e(function(e, t) {
	if (e.isEdge() && e.takesUpSpace()) {
		var n = e.cy();
		return nr(t(e), n.zoom(), n.pan());
	}
}, "ifEdgeRenderedPosition"), sJ = e(function(e, t) {
	if (e.isEdge() && e.takesUpSpace()) {
		var n = e.cy(), r = n.pan(), a = n.zoom();
		return t(e).map(function(e) {
			return nr(e, a, r);
		});
	}
}, "ifEdgeRenderedPositions"), s0 = {
	controlPoints: {
		get: e(function(e) {
			return e.renderer().getControlPoints(e);
		}, "controlPoints"),
		mult: !0
	},
	segmentPoints: {
		get: e(function(e) {
			return e.renderer().getSegmentPoints(e);
		}, "segmentPoints"),
		mult: !0
	},
	sourceEndpoint: { get: e(function(e) {
		return e.renderer().getSourceEndpoint(e);
	}, "sourceEndpoint") },
	targetEndpoint: { get: e(function(e) {
		return e.renderer().getTargetEndpoint(e);
	}, "targetEndpoint") },
	midpoint: { get: e(function(e) {
		return e.renderer().getEdgeMidpoint(e);
	}, "midpoint") }
}, s1 = e(function(e) {
	return "rendered" + e[0].toUpperCase() + e.substr(1);
}, "renderedName"), s2 = es({}, sP, sD, sU, Object.keys(s0).reduce(function(e, t) {
	var n = s0[t], r = s1(t);
	return e[t] = function() {
		return s$(this, n.get);
	}, n.mult ? e[r] = function() {
		return sJ(this, n.get);
	} : e[r] = function() {
		return sQ(this, n.get);
	}, e;
}, {})), s5 = e(function(e, t) {
	this.recycle(e, t);
}, "Event");
function s3() {
	return !1;
}
function s4() {
	return !0;
}
e(s3, "returnFalse"), e(s4, "returnTrue"), s5.prototype = {
	instanceString: e(function() {
		return "event";
	}, "instanceString"),
	recycle: e(function(e, t) {
		if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = s3, null != e && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? s4 : s3) : null != e && e.type ? t = e : this.type = e, null != t && (this.originalEvent = t.originalEvent, this.type = null != t.type ? t.type : this.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), null != this.cy && null != this.position && null == this.renderedPosition) {
			var n = this.position, r = this.cy.zoom(), a = this.cy.pan();
			this.renderedPosition = {
				x: n.x * r + a.x,
				y: n.y * r + a.y
			};
		}
		this.timeStamp = e && e.timeStamp || Date.now();
	}, "recycle"),
	preventDefault: e(function() {
		this.isDefaultPrevented = s4;
		var e = this.originalEvent;
		e && e.preventDefault && e.preventDefault();
	}, "preventDefault"),
	stopPropagation: e(function() {
		this.isPropagationStopped = s4;
		var e = this.originalEvent;
		e && e.stopPropagation && e.stopPropagation();
	}, "stopPropagation"),
	stopImmediatePropagation: e(function() {
		this.isImmediatePropagationStopped = s4, this.stopPropagation();
	}, "stopImmediatePropagation"),
	isDefaultPrevented: s3,
	isPropagationStopped: s3,
	isImmediatePropagationStopped: s3
};
var s9 = /^([^.]+)(\.(?:[^.]+))?$/, s6 = {
	qualifierCompare: e(function(e, t) {
		return e === t;
	}, "qualifierCompare"),
	eventMatches: e(function() {
		return !0;
	}, "eventMatches"),
	addEventFields: e(function() {}, "addEventFields"),
	callbackContext: e(function(e) {
		return e;
	}, "callbackContext"),
	beforeEmit: e(function() {}, "beforeEmit"),
	afterEmit: e(function() {}, "afterEmit"),
	bubble: e(function() {
		return !1;
	}, "bubble"),
	parent: e(function() {
		return null;
	}, "parent"),
	context: null
}, s8 = Object.keys(s6), s7 = {};
function le() {
	for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s7, t = arguments.length > 1 ? arguments[1] : void 0, n = 0; n < s8.length; n++) {
		var r = s8[n];
		this[r] = e[r] || s6[r];
	}
	this.context = t || this.context, this.listeners = [], this.emitting = 0;
}
e(le, "Emitter");
var lt = le.prototype, ln = e(function(e, t, n, r, a, i, o) {
	D(r) && (a = r, r = null), o && (i = null == i ? o : es({}, i, o));
	for (var s = A(n) ? n : n.split(/\s+/), l = 0; l < s.length; l++) {
		var u = s[l];
		if (!X(u)) {
			var c = u.match(s9);
			if (c && !1 === t(e, u, c[1], c[2] ? c[2] : null, r, a, i)) break;
		}
	}
}, "forEachEvent"), lr = e(function(e, t) {
	return e.addEventFields(e.context, t), new s5(t.type, t);
}, "makeEventObj"), la = e(function(e, t, n) {
	if (j(n)) return void t(e, n);
	if (M(n)) return void t(e, lr(e, n));
	for (var r = A(n) ? n : n.split(/\s+/), a = 0; a < r.length; a++) {
		var i = r[a];
		if (!X(i)) {
			var o = i.match(s9);
			if (o) {
				var s = lr(e, {
					type: o[1],
					namespace: o[2] ? o[2] : null,
					target: e.context
				});
				t(e, s);
			}
		}
	}
}, "forEachEventObj");
lt.on = lt.addListener = function(e, t, n, r, a) {
	return ln(this, function(e, t, n, r, a, i, o) {
		D(i) && e.listeners.push({
			event: t,
			callback: i,
			type: n,
			namespace: r,
			qualifier: a,
			conf: o
		});
	}, e, t, n, r, a), this;
}, lt.one = function(e, t, n, r) {
	return this.on(e, t, n, r, { one: !0 });
}, lt.removeListener = lt.off = function(t, n, r, a) {
	var i = this;
	0 !== this.emitting && (this.listeners = e7(this.listeners));
	for (var o = this.listeners, s = e(function(e) {
		var s = o[e];
		ln(i, function(n, r, a, i, l, u) {
			if ((s.type === a || "*" === t) && (!i && ".*" !== s.namespace || s.namespace === i) && (!l || n.qualifierCompare(s.qualifier, l)) && (!u || s.callback === u)) return o.splice(e, 1), !1;
		}, t, n, r, a);
	}, "_loop"), l = o.length - 1; l >= 0; l--) s(l);
	return this;
}, lt.removeAllListeners = function() {
	return this.removeListener("*");
}, lt.emit = lt.trigger = function(t, n, r) {
	var a = this.listeners, i = a.length;
	return this.emitting++, A(n) || (n = [n]), la(this, function(t, o) {
		null != r && (i = (a = [{
			event: o.event,
			type: o.type,
			namespace: o.namespace,
			callback: r
		}]).length);
		for (var s = e(function() {
			var e = a[l];
			if (e.type === o.type && (!e.namespace || e.namespace === o.namespace || ".*" === e.namespace) && t.eventMatches(t.context, e, o)) {
				var r = [o];
				null != n && to(r, n), t.beforeEmit(t.context, e, o), e.conf && e.conf.one && (t.listeners = t.listeners.filter(function(t) {
					return t !== e;
				}));
				var i = t.callbackContext(t.context, e, o), s = e.callback.apply(i, r);
				t.afterEmit(t.context, e, o), !1 === s && (o.stopPropagation(), o.preventDefault());
			}
		}, "_loop2"), l = 0; l < i; l++) s();
		t.bubble(t.context) && !o.isPropagationStopped() && t.parent(t.context).emit(o, n);
	}, t), this.emitting--, this;
};
var li = {
	qualifierCompare: e(function(e, t) {
		return null == e || null == t ? null == e && null == t : e.sameText(t);
	}, "qualifierCompare"),
	eventMatches: e(function(e, t, n) {
		var r = t.qualifier;
		return null == r || e !== n.target && O(n.target) && r.matches(n.target);
	}, "eventMatches"),
	addEventFields: e(function(e, t) {
		t.cy = e.cy(), t.target = e;
	}, "addEventFields"),
	callbackContext: e(function(e, t, n) {
		return null != t.qualifier ? n.target : e;
	}, "callbackContext"),
	beforeEmit: e(function(e, t) {
		t.conf && t.conf.once && t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
	}, "beforeEmit"),
	bubble: e(function() {
		return !0;
	}, "bubble"),
	parent: e(function(e) {
		return e.isChild() ? e.parent() : e.cy();
	}, "parent")
}, lo = e(function(e) {
	return _(e) ? new ss(e) : e;
}, "argSelector"), ls = {
	createEmitter: e(function() {
		for (var e = 0; e < this.length; e++) {
			var t = this[e], n = t._private;
			n.emitter || (n.emitter = new le(li, t));
		}
		return this;
	}, "createEmitter"),
	emitter: e(function() {
		return this._private.emitter;
	}, "emitter"),
	on: e(function(e, t, n) {
		for (var r = lo(t), a = 0; a < this.length; a++) this[a].emitter().on(e, r, n);
		return this;
	}, "on"),
	removeListener: e(function(e, t, n) {
		for (var r = lo(t), a = 0; a < this.length; a++) this[a].emitter().removeListener(e, r, n);
		return this;
	}, "removeListener"),
	removeAllListeners: e(function() {
		for (var e = 0; e < this.length; e++) this[e].emitter().removeAllListeners();
		return this;
	}, "removeAllListeners"),
	one: e(function(e, t, n) {
		for (var r = lo(t), a = 0; a < this.length; a++) this[a].emitter().one(e, r, n);
		return this;
	}, "one"),
	once: e(function(e, t, n) {
		for (var r = lo(t), a = 0; a < this.length; a++) this[a].emitter().on(e, r, n, {
			once: !0,
			onceCollection: this
		});
	}, "once"),
	emit: e(function(e, t) {
		for (var n = 0; n < this.length; n++) this[n].emitter().emit(e, t);
		return this;
	}, "emit"),
	emitAndNotify: e(function(e, t) {
		if (0 !== this.length) return this.cy().notify(e, this), this.emit(e, t), this;
	}, "emitAndNotify")
};
oH.eventAliasesOn(ls);
var ll = {
	nodes: e(function(e) {
		return this.filter(function(e) {
			return e.isNode();
		}).filter(e);
	}, "nodes"),
	edges: e(function(e) {
		return this.filter(function(e) {
			return e.isEdge();
		}).filter(e);
	}, "edges"),
	byGroup: e(function() {
		for (var e = this.spawn(), t = this.spawn(), n = 0; n < this.length; n++) {
			var r = this[n];
			r.isNode() ? e.push(r) : t.push(r);
		}
		return {
			nodes: e,
			edges: t
		};
	}, "byGroup"),
	filter: e(function(e, t) {
		if (void 0 === e) return this;
		if (_(e) || z(e)) return new ss(e).filter(this);
		if (D(e)) {
			for (var n = this.spawn(), r = 0; r < this.length; r++) {
				var a = this[r];
				(t ? e.apply(t, [
					a,
					r,
					this
				]) : e(a, r, this)) && n.push(a);
			}
			return n;
		}
		return this.spawn();
	}, "filter"),
	not: e(function(e) {
		if (!e) return this;
		_(e) && (e = this.filter(e));
		for (var t = this.spawn(), n = 0; n < this.length; n++) {
			var r = this[n];
			e.has(r) || t.push(r);
		}
		return t;
	}, "not"),
	absoluteComplement: e(function() {
		return this.cy().mutableElements().not(this);
	}, "absoluteComplement"),
	intersect: e(function(e) {
		if (_(e)) return this.filter(e);
		for (var t = this.spawn(), n = this.length < e.length, r = n ? this : e, a = n ? e : this, i = 0; i < r.length; i++) {
			var o = r[i];
			a.has(o) && t.push(o);
		}
		return t;
	}, "intersect"),
	xor: e(function(t) {
		var n = this._private.cy;
		_(t) && (t = n.$(t));
		var r = this.spawn(), a = t, i = e(function(e, t) {
			for (var n = 0; n < e.length; n++) {
				var a = e[n], i = a._private.data.id;
				t.hasElementWithId(i) || r.push(a);
			}
		}, "add");
		return i(this, a), i(a, this), r;
	}, "xor"),
	diff: e(function(t) {
		var n = this._private.cy;
		_(t) && (t = n.$(t));
		var r = this.spawn(), a = this.spawn(), i = this.spawn(), o = t, s = e(function(e, t, n) {
			for (var r = 0; r < e.length; r++) {
				var a = e[r], o = a._private.data.id;
				t.hasElementWithId(o) ? i.merge(a) : n.push(a);
			}
		}, "add");
		return s(this, o, r), s(o, this, a), {
			left: r,
			right: a,
			both: i
		};
	}, "diff"),
	add: e(function(e) {
		var t = this._private.cy;
		if (!e) return this;
		if (_(e)) {
			var n = e;
			e = t.mutableElements().filter(n);
		}
		for (var r = this.spawnSelf(), a = 0; a < e.length; a++) {
			var i = e[a];
			this.has(i) || r.push(i);
		}
		return r;
	}, "add"),
	merge: e(function(e) {
		var t = this._private, n = t.cy;
		if (!e) return this;
		if (e && _(e)) {
			var r = e;
			e = n.mutableElements().filter(r);
		}
		for (var a = t.map, i = 0; i < e.length; i++) {
			var o = e[i], s = o._private.data.id;
			if (!a.has(s)) {
				var l = this.length++;
				this[l] = o, a.set(s, {
					ele: o,
					index: l
				});
			}
		}
		return this;
	}, "merge"),
	unmergeAt: e(function(e) {
		var t = this[e].id(), n = this._private.map;
		this[e] = void 0, n.delete(t);
		var r = e === this.length - 1;
		if (this.length > 1 && !r) {
			var a = this.length - 1, i = this[a], o = i._private.data.id;
			this[a] = void 0, this[e] = i, n.set(o, {
				ele: i,
				index: e
			});
		}
		return this.length--, this;
	}, "unmergeAt"),
	unmergeOne: e(function(e) {
		e = e[0];
		var t = this._private, n = e._private.data.id, r = t.map.get(n);
		if (!r) return this;
		var a = r.index;
		return this.unmergeAt(a), this;
	}, "unmergeOne"),
	unmerge: e(function(e) {
		var t = this._private.cy;
		if (!e) return this;
		if (e && _(e)) {
			var n = e;
			e = t.mutableElements().filter(n);
		}
		for (var r = 0; r < e.length; r++) this.unmergeOne(e[r]);
		return this;
	}, "unmerge"),
	unmergeBy: e(function(e) {
		for (var t = this.length - 1; t >= 0; t--) e(this[t]) && this.unmergeAt(t);
		return this;
	}, "unmergeBy"),
	map: e(function(e, t) {
		for (var n = [], r = 0; r < this.length; r++) {
			var a = this[r], i = t ? e.apply(t, [
				a,
				r,
				this
			]) : e(a, r, this);
			n.push(i);
		}
		return n;
	}, "map"),
	reduce: e(function(e, t) {
		for (var n = t, r = 0; r < this.length; r++) n = e(n, this[r], r, this);
		return n;
	}, "reduce"),
	max: e(function(e, t) {
		for (var n, r = -Infinity, a = 0; a < this.length; a++) {
			var i = this[a], o = t ? e.apply(t, [
				i,
				a,
				this
			]) : e(i, a, this);
			o > r && (r = o, n = i);
		}
		return {
			value: r,
			ele: n
		};
	}, "max"),
	min: e(function(e, t) {
		for (var n, r = Infinity, a = 0; a < this.length; a++) {
			var i = this[a], o = t ? e.apply(t, [
				i,
				a,
				this
			]) : e(i, a, this);
			o < r && (r = o, n = i);
		}
		return {
			value: r,
			ele: n
		};
	}, "min")
};
ll.u = ll["|"] = ll["+"] = ll.union = ll.or = ll.add, ll["\\"] = ll["!"] = ll["-"] = ll.difference = ll.relativeComplement = ll.subtract = ll.not, ll.n = ll["&"] = ll["."] = ll.and = ll.intersection = ll.intersect, ll["^"] = ll["(+)"] = ll["(-)"] = ll.symmetricDifference = ll.symdiff = ll.xor, ll.fnFilter = ll.filterFn = ll.stdFilter = ll.filter, ll.complement = ll.abscomp = ll.absoluteComplement;
var lu = {
	isNode: e(function() {
		return "nodes" === this.group();
	}, "isNode"),
	isEdge: e(function() {
		return "edges" === this.group();
	}, "isEdge"),
	isLoop: e(function() {
		return this.isEdge() && this.source()[0] === this.target()[0];
	}, "isLoop"),
	isSimple: e(function() {
		return this.isEdge() && this.source()[0] !== this.target()[0];
	}, "isSimple"),
	group: e(function() {
		var e = this[0];
		if (e) return e._private.group;
	}, "group")
}, lc = e(function(t, n) {
	var r = t.cy().hasCompoundNodes();
	function a(e) {
		var t = e.pstyle("z-compound-depth");
		return "auto" === t.value ? r ? e.zDepth() : 0 : "bottom" === t.value ? -1 : "top" === t.value ? eJ : 0;
	}
	e(a, "getDepth");
	var i = a(t) - a(n);
	if (0 !== i) return i;
	function o(e) {
		return "auto" === e.pstyle("z-index-compare").value && e.isNode() ? 1 : 0;
	}
	e(o, "getEleDepth");
	var s = o(t) - o(n);
	if (0 !== s) return s;
	var l = t.pstyle("z-index").value - n.pstyle("z-index").value;
	return 0 !== l ? l : t.poolIndex() - n.poolIndex();
}, "zIndexSort"), ld = {
	forEach: e(function(e, t) {
		if (D(e)) for (var n = this.length, r = 0; r < n; r++) {
			var a = this[r];
			if ((t ? e.apply(t, [
				a,
				r,
				this
			]) : e(a, r, this)) === !1) break;
		}
		return this;
	}, "forEach"),
	toArray: e(function() {
		for (var e = [], t = 0; t < this.length; t++) e.push(this[t]);
		return e;
	}, "toArray"),
	slice: e(function(e, t) {
		var n = [], r = this.length;
		t ??= r, (e ??= 0) < 0 && (e = r + e), t < 0 && (t = r + t);
		for (var a = e; a >= 0 && a < t && a < r; a++) n.push(this[a]);
		return this.spawn(n);
	}, "slice"),
	size: e(function() {
		return this.length;
	}, "size"),
	eq: e(function(e) {
		return this[e] || this.spawn();
	}, "eq"),
	first: e(function() {
		return this[0] || this.spawn();
	}, "first"),
	last: e(function() {
		return this[this.length - 1] || this.spawn();
	}, "last"),
	empty: e(function() {
		return 0 === this.length;
	}, "empty"),
	nonempty: e(function() {
		return !this.empty();
	}, "nonempty"),
	sort: e(function(e) {
		if (!D(e)) return this;
		var t = this.toArray().sort(e);
		return this.spawn(t);
	}, "sort"),
	sortByZIndex: e(function() {
		return this.sort(lc);
	}, "sortByZIndex"),
	zDepth: e(function() {
		var e = this[0];
		if (e) {
			var t = e._private;
			if ("nodes" === t.group) {
				var n = t.data.parent ? e.parents().size() : 0;
				return e.isParent() ? n : eJ - 1;
			}
			var r = t.source, a = t.target;
			return Math.max(r.zDepth(), a.zDepth(), 0);
		}
	}, "zDepth")
};
ld.each = ld.forEach, e(function() {
	var t = "undefined";
	(typeof Symbol > "u" ? "undefined" : y(Symbol)) != t && y(Symbol.iterator) != t && (ld[Symbol.iterator] = function() {
		var t = this, n = {
			value: void 0,
			done: !1
		}, r = 0, a = this.length;
		return l({ next: e(function() {
			return r < a ? n.value = t[r++] : (n.value = void 0, n.done = !0), n;
		}, "next") }, Symbol.iterator, function() {
			return this;
		});
	});
}, "defineSymbolIterator")();
var lh = tr({ nodeDimensionsIncludeLabels: !1 }), lf = {
	layoutDimensions: e(function(e) {
		if (e = lh(e), this.takesUpSpace()) if (e.nodeDimensionsIncludeLabels) {
			var t, n = this.boundingBox();
			t = {
				w: n.w,
				h: n.h
			};
		} else t = {
			w: this.outerWidth(),
			h: this.outerHeight()
		};
		else t = {
			w: 0,
			h: 0
		};
		return (0 === t.w || 0 === t.h) && (t.w = t.h = 1), t;
	}, "layoutDimensions"),
	layoutPositions: e(function(t, n, r) {
		var a = this.nodes().filter(function(e) {
			return !e.isParent();
		}), i = this.cy(), o = n.eles, s = e(function(e) {
			return e.id();
		}, "getMemoizeKey"), l = U(r, s);
		t.emit({
			type: "layoutstart",
			layout: t
		}), t.animations = [];
		var u = e(function(e, t, n) {
			var r = {
				x: t.x1 + t.w / 2,
				y: t.y1 + t.h / 2
			}, a = {
				x: (n.x - r.x) * e,
				y: (n.y - r.y) * e
			};
			return {
				x: r.x + a.x,
				y: r.y + a.y
			};
		}, "calculateSpacing"), c = n.spacingFactor && 1 !== n.spacingFactor, d = e(function() {
			if (!c) return null;
			for (var e = nw(), t = 0; t < a.length; t++) {
				var n = l(a[t], t);
				nk(e, n.x, n.y);
			}
			return e;
		}, "spacingBb")(), h = U(function(e, t) {
			var r = l(e, t);
			return c && (r = u(Math.abs(n.spacingFactor), d, r)), null != n.transform && (r = n.transform(e, r)), r;
		}, s);
		if (n.animate) {
			for (var f = 0; f < a.length; f++) {
				var p = a[f], g = h(p, f);
				if (null == n.animateFilter || n.animateFilter(p, f)) {
					var v = p.animation({
						position: g,
						duration: n.animationDuration,
						easing: n.animationEasing
					});
					t.animations.push(v);
				} else p.position(g);
			}
			if (n.fit) {
				var y = i.animation({
					fit: {
						boundingBox: o.boundingBoxAt(h),
						padding: n.padding
					},
					duration: n.animationDuration,
					easing: n.animationEasing
				});
				t.animations.push(y);
			} else if (void 0 !== n.zoom && void 0 !== n.pan) {
				var m = i.animation({
					zoom: n.zoom,
					pan: n.pan,
					duration: n.animationDuration,
					easing: n.animationEasing
				});
				t.animations.push(m);
			}
			t.animations.forEach(function(e) {
				return e.play();
			}), t.one("layoutready", n.ready), t.emit({
				type: "layoutready",
				layout: t
			}), ah.all(t.animations.map(function(e) {
				return e.promise();
			})).then(function() {
				t.one("layoutstop", n.stop), t.emit({
					type: "layoutstop",
					layout: t
				});
			});
		} else a.positions(h), n.fit && i.fit(n.eles, n.padding), null != n.zoom && i.zoom(n.zoom), n.pan && i.pan(n.pan), t.one("layoutready", n.ready), t.emit({
			type: "layoutready",
			layout: t
		}), t.one("layoutstop", n.stop), t.emit({
			type: "layoutstop",
			layout: t
		});
		return this;
	}, "layoutPositions"),
	layout: e(function(e) {
		return this.cy().makeLayout(es({}, e, { eles: this }));
	}, "layout")
};
function lp(e, t, n) {
	var r, a = n._private, i = a.styleCache = a.styleCache || [];
	return (r = i[e]) ?? (r = i[e] = t(n)), r;
}
function lg(t, n) {
	return t = eY(t), e(function(e) {
		return lp(t, n, e);
	}, "cachedStyleFunction");
}
function lv(t, n) {
	t = eY(t);
	var r = e(function(e) {
		return n.call(e);
	}, "selfFn");
	return e(function() {
		var e = this[0];
		if (e) return lp(t, r, e);
	}, "cachedPrototypeStyleFunction");
}
lf.createLayout = lf.makeLayout = lf.layout, e(lp, "styleCache"), e(lg, "cacheStyleFunction"), e(lv, "cachePrototypeStyleFunction");
var ly = {
	recalculateRenderedStyle: e(function(e) {
		var t = this.cy(), n = t.renderer(), r = t.styleEnabled();
		return n && r && n.recalculateRenderedStyle(this, e), this;
	}, "recalculateRenderedStyle"),
	dirtyStyleCache: e(function() {
		var t = this.cy(), n = e(function(e) {
			return e._private.styleCache = null;
		}, "dirty");
		if (t.hasCompoundNodes()) {
			var r = this.spawnSelf().merge(this.descendants()).merge(this.parents());
			r.merge(r.connectedEdges()), r.forEach(n);
		} else this.forEach(function(e) {
			n(e), e.connectedEdges().forEach(n);
		});
		return this;
	}, "dirtyStyleCache"),
	updateStyle: e(function(e) {
		var t = this._private.cy;
		if (!t.styleEnabled()) return this;
		if (t.batching()) return t._private.batchStyleEles.merge(this), this;
		var n = t.hasCompoundNodes(), r = this;
		e = !!(e || void 0 === e), n && (r = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
		var a = r;
		return e ? a.emitAndNotify("style") : a.emit("style"), r.forEach(function(e) {
			return e._private.styleDirty = !0;
		}), this;
	}, "updateStyle"),
	cleanStyle: e(function() {
		var e = this.cy();
		if (e.styleEnabled()) for (var t = 0; t < this.length; t++) {
			var n = this[t];
			n._private.styleDirty && (n._private.styleDirty = !1, e.style().apply(n));
		}
	}, "cleanStyle"),
	parsedStyle: e(function(e) {
		var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n = this[0], r = n.cy();
		if (r.styleEnabled() && n) return n._private.styleDirty && (n._private.styleDirty = !1, r.style().apply(n)), n._private.style[e] ?? (t ? r.style().getDefaultProperty(e) : null);
	}, "parsedStyle"),
	numericStyle: e(function(e) {
		var t = this[0];
		if (t.cy().styleEnabled() && t) {
			var n = t.pstyle(e);
			return void 0 !== n.pfValue ? n.pfValue : n.value;
		}
	}, "numericStyle"),
	numericStyleUnits: e(function(e) {
		var t = this[0];
		if (t.cy().styleEnabled() && t) return t.pstyle(e).units;
	}, "numericStyleUnits"),
	renderedStyle: e(function(e) {
		var t = this.cy();
		if (!t.styleEnabled()) return this;
		var n = this[0];
		if (n) return t.style().getRenderedStyle(n, e);
	}, "renderedStyle"),
	style: e(function(e, t) {
		var n = this.cy();
		if (!n.styleEnabled()) return this;
		var r = n.style();
		if (M(e)) r.applyBypass(this, e, !1), this.emitAndNotify("style");
		else if (_(e)) if (void 0 === t) {
			var a = this[0];
			return a ? r.getStylePropertyValue(a, e) : void 0;
		} else r.applyBypass(this, e, t, !1), this.emitAndNotify("style");
		else if (void 0 === e) {
			var i = this[0];
			return i ? r.getRawStyle(i) : void 0;
		}
		return this;
	}, "style"),
	removeStyle: e(function(e) {
		var t = this.cy();
		if (!t.styleEnabled()) return this;
		var n = t.style();
		if (void 0 === e) for (var r = 0; r < this.length; r++) {
			var a = this[r];
			n.removeAllBypasses(a, !1);
		}
		else {
			e = e.split(/\s+/);
			for (var i = 0; i < this.length; i++) {
				var o = this[i];
				n.removeBypasses(o, e, !1);
			}
		}
		return this.emitAndNotify("style"), this;
	}, "removeStyle"),
	show: e(function() {
		return this.css("display", "element"), this;
	}, "show"),
	hide: e(function() {
		return this.css("display", "none"), this;
	}, "hide"),
	effectiveOpacity: e(function() {
		var e = this.cy();
		if (!e.styleEnabled()) return 1;
		var t = e.hasCompoundNodes(), n = this[0];
		if (n) {
			var r = n._private, a = n.pstyle("opacity").value;
			if (!t) return a;
			var i = r.data.parent ? n.parents() : null;
			if (i) for (var o = 0; o < i.length; o++) a = i[o].pstyle("opacity").value * a;
			return a;
		}
	}, "effectiveOpacity"),
	transparent: e(function() {
		if (!this.cy().styleEnabled()) return !1;
		var e = this[0], t = e.cy().hasCompoundNodes();
		if (e) return t ? 0 === e.effectiveOpacity() : 0 === e.pstyle("opacity").value;
	}, "transparent"),
	backgrounding: e(function() {
		return !!this.cy().styleEnabled() && !!this[0]._private.backgrounding;
	}, "backgrounding")
};
function lm(e, t) {
	var n = e._private.data.parent ? e.parents() : null;
	if (n) {
		for (var r = 0; r < n.length; r++) if (!t(n[r])) return !1;
	}
	return !0;
}
function lb(e) {
	var t = e.ok, n = e.edgeOkViaNode || e.ok, r = e.parentOk || e.ok;
	return function() {
		var e = this.cy();
		if (!e.styleEnabled()) return !0;
		var a = this[0], i = e.hasCompoundNodes();
		if (a) {
			var o = a._private;
			if (!t(a)) return !1;
			if (a.isNode()) return !i || lm(a, r);
			var s = o.source, l = o.target;
			return n(s) && (!i || lm(s, n)) && (s === l || n(l) && (!i || lm(l, n)));
		}
	};
}
e(lm, "checkCompound"), e(lb, "defineDerivedStateFunction");
var lx = lg("eleTakesUpSpace", function(e) {
	return "element" === e.pstyle("display").value && 0 !== e.width() && (!e.isNode() || 0 !== e.height());
});
ly.takesUpSpace = lv("takesUpSpace", lb({ ok: lx })), ly.interactive = lv("interactive", lb({
	ok: lg("eleInteractive", function(e) {
		return "yes" === e.pstyle("events").value && "visible" === e.pstyle("visibility").value && lx(e);
	}),
	parentOk: lg("parentInteractive", function(e) {
		return "visible" === e.pstyle("visibility").value && lx(e);
	}),
	edgeOkViaNode: lx
})), ly.noninteractive = function() {
	var e = this[0];
	if (e) return !e.interactive();
}, ly.visible = lv("visible", lb({
	ok: lg("eleVisible", function(e) {
		return "visible" === e.pstyle("visibility").value && 0 !== e.pstyle("opacity").pfValue && lx(e);
	}),
	edgeOkViaNode: lx
})), ly.hidden = function() {
	var e = this[0];
	if (e) return !e.visible();
}, ly.isBundledBezier = lv("isBundledBezier", function() {
	return !!this.cy().styleEnabled() && !this.removed() && "bezier" === this.pstyle("curve-style").value && this.takesUpSpace();
}), ly.bypass = ly.css = ly.style, ly.renderedCss = ly.renderedStyle, ly.removeBypass = ly.removeCss = ly.removeStyle, ly.pstyle = ly.parsedStyle;
var lw = {};
function lE(e) {
	return function() {
		var t = arguments, n = [];
		if (2 === t.length) {
			var r = t[0], a = t[1];
			this.on(e.event, r, a);
		} else if (1 === t.length && D(t[0])) {
			var i = t[0];
			this.on(e.event, i);
		} else if (0 === t.length || 1 === t.length && A(t[0])) {
			for (var o = 1 === t.length ? t[0] : null, s = 0; s < this.length; s++) {
				var l = this[s], u = !e.ableField || l._private[e.ableField], c = l._private[e.field] != e.value;
				if (e.overrideAble) {
					var d = e.overrideAble(l);
					if (void 0 !== d && (u = d, !d)) return this;
				}
				u && (l._private[e.field] = e.value, c && n.push(l));
			}
			var h = this.spawn(n);
			h.updateStyle(), h.emit(e.event), o && h.emit(o);
		}
		return this;
	};
}
function lC(e) {
	lw[e.field] = function() {
		var t = this[0];
		if (t) {
			if (e.overrideField) {
				var n = e.overrideField(t);
				if (void 0 !== n) return n;
			}
			return t._private[e.field];
		}
	}, lw[e.on] = lE({
		event: e.on,
		field: e.field,
		ableField: e.ableField,
		overrideAble: e.overrideAble,
		value: !0
	}), lw[e.off] = lE({
		event: e.off,
		field: e.field,
		ableField: e.ableField,
		overrideAble: e.overrideAble,
		value: !1
	});
}
e(lE, "defineSwitchFunction"), e(lC, "defineSwitchSet"), lC({
	field: "locked",
	overrideField: e(function(e) {
		return !!e.cy().autolock() || void 0;
	}, "overrideField"),
	on: "lock",
	off: "unlock"
}), lC({
	field: "grabbable",
	overrideField: e(function(e) {
		return !(e.cy().autoungrabify() || e.pannable()) && void 0;
	}, "overrideField"),
	on: "grabify",
	off: "ungrabify"
}), lC({
	field: "selected",
	ableField: "selectable",
	overrideAble: e(function(e) {
		return !e.cy().autounselectify() && void 0;
	}, "overrideAble"),
	on: "select",
	off: "unselect"
}), lC({
	field: "selectable",
	overrideField: e(function(e) {
		return !e.cy().autounselectify() && void 0;
	}, "overrideField"),
	on: "selectify",
	off: "unselectify"
}), lw.deselect = lw.unselect, lw.grabbed = function() {
	var e = this[0];
	if (e) return e._private.grabbed;
}, lC({
	field: "active",
	on: "activate",
	off: "unactivate"
}), lC({
	field: "pannable",
	on: "panify",
	off: "unpanify"
}), lw.inactive = function() {
	var e = this[0];
	if (e) return !e._private.active;
};
var lT = {}, lk = e(function(t) {
	return e(function(e) {
		for (var n = [], r = 0; r < this.length; r++) {
			var a = this[r];
			if (a.isNode()) {
				for (var i = !1, o = a.connectedEdges(), s = 0; s < o.length; s++) {
					var l = o[s], u = l.source(), c = l.target();
					if (t.noIncomingEdges && c === a && u !== a || t.noOutgoingEdges && u === a && c !== a) {
						i = !0;
						break;
					}
				}
				i || n.push(a);
			}
		}
		return this.spawn(n, !0).filter(e);
	}, "dagExtremityImpl");
}, "defineDagExtremity"), lS = e(function(e) {
	return function(t) {
		for (var n = [], r = 0; r < this.length; r++) {
			var a = this[r];
			if (a.isNode()) for (var i = a.connectedEdges(), o = 0; o < i.length; o++) {
				var s = i[o], l = s.source(), u = s.target();
				e.outgoing && l === a ? (n.push(s), n.push(u)) : e.incoming && u === a && (n.push(s), n.push(l));
			}
		}
		return this.spawn(n, !0).filter(t);
	};
}, "defineDagOneHop"), lP = e(function(e) {
	return function(t) {
		for (var n = this, r = [], a = {};;) {
			var i = e.outgoing ? n.outgoers() : n.incomers();
			if (0 === i.length) break;
			for (var o = !1, s = 0; s < i.length; s++) {
				var l = i[s], u = l.id();
				a[u] || (a[u] = !0, r.push(l), o = !0);
			}
			if (!o) break;
			n = i;
		}
		return this.spawn(r, !0).filter(t);
	};
}, "defineDagAllHops");
function lB(t) {
	return e(function(e) {
		for (var n = [], r = 0; r < this.length; r++) {
			var a = this[r]._private[t.attr];
			a && n.push(a);
		}
		return this.spawn(n, !0).filter(e);
	}, "sourceImpl");
}
function l_(t) {
	return e(function(e) {
		var n = [], r = this._private.cy, a = t || {};
		_(e) && (e = r.$(e));
		for (var i = 0; i < e.length; i++) for (var o = e[i]._private.edges, s = 0; s < o.length; s++) {
			var l = o[s], u = l._private.data, c = this.hasElementWithId(u.source) && e.hasElementWithId(u.target), d = e.hasElementWithId(u.source) && this.hasElementWithId(u.target);
			(c || d) && ((a.thisIsSrc || a.thisIsTgt) && (a.thisIsSrc && !c || a.thisIsTgt && !d) || n.push(l));
		}
		return this.spawn(n, !0);
	}, "edgesWithImpl");
}
function lD(t) {
	return t = es({}, { codirected: !1 }, t), e(function(e) {
		for (var n = [], r = this.edges(), a = t, i = 0; i < r.length; i++) for (var o = r[i], s = o._private, l = s.source, u = l._private.data.id, c = s.data.target, d = l._private.edges, h = 0; h < d.length; h++) {
			var f = d[h], p = f._private.data, g = p.target, v = p.source, y = g === c && v === u, m = u === g && c === v;
			(a.codirected && y || !a.codirected && (y || m)) && n.push(f);
		}
		return this.spawn(n, !0).filter(e);
	}, "parallelEdgesImpl");
}
lT.clearTraversalCache = function() {
	for (var e = 0; e < this.length; e++) this[e]._private.traversalCache = null;
}, es(lT, {
	roots: lk({ noIncomingEdges: !0 }),
	leaves: lk({ noOutgoingEdges: !0 }),
	outgoers: sc(lS({ outgoing: !0 }), "outgoers"),
	successors: lP({ outgoing: !0 }),
	incomers: sc(lS({ incoming: !0 }), "incomers"),
	predecessors: lP({})
}), es(lT, {
	neighborhood: sc(function(e) {
		for (var t = [], n = this.nodes(), r = 0; r < n.length; r++) for (var a = n[r], i = a.connectedEdges(), o = 0; o < i.length; o++) {
			var s = i[o], l = s.source(), u = s.target(), c = a === l ? u : l;
			c.length > 0 && t.push(c[0]), t.push(s[0]);
		}
		return this.spawn(t, !0).filter(e);
	}, "neighborhood"),
	closedNeighborhood: e(function(e) {
		return this.neighborhood().add(this).filter(e);
	}, "closedNeighborhood"),
	openNeighborhood: e(function(e) {
		return this.neighborhood(e);
	}, "openNeighborhood")
}), lT.neighbourhood = lT.neighborhood, lT.closedNeighbourhood = lT.closedNeighborhood, lT.openNeighbourhood = lT.openNeighborhood, es(lT, {
	source: sc(e(function(e) {
		var t, n = this[0];
		return n && (t = n._private.source || n.cy().collection()), t && e ? t.filter(e) : t;
	}, "sourceImpl"), "source"),
	target: sc(e(function(e) {
		var t, n = this[0];
		return n && (t = n._private.target || n.cy().collection()), t && e ? t.filter(e) : t;
	}, "targetImpl"), "target"),
	sources: lB({ attr: "source" }),
	targets: lB({ attr: "target" })
}), e(lB, "defineSourceFunction"), es(lT, {
	edgesWith: sc(l_(), "edgesWith"),
	edgesTo: sc(l_({ thisIsSrc: !0 }), "edgesTo")
}), e(l_, "defineEdgesWithFunction"), es(lT, {
	connectedEdges: sc(function(e) {
		for (var t = [], n = 0; n < this.length; n++) {
			var r = this[n];
			if (r.isNode()) for (var a = r._private.edges, i = 0; i < a.length; i++) {
				var o = a[i];
				t.push(o);
			}
		}
		return this.spawn(t, !0).filter(e);
	}, "connectedEdges"),
	connectedNodes: sc(function(e) {
		for (var t = [], n = 0; n < this.length; n++) {
			var r = this[n];
			r.isEdge() && (t.push(r.source()[0]), t.push(r.target()[0]));
		}
		return this.spawn(t, !0).filter(e);
	}, "connectedNodes"),
	parallelEdges: sc(lD(), "parallelEdges"),
	codirectedEdges: sc(lD({ codirected: !0 }), "codirectedEdges")
}), e(lD, "defineParallelEdgesFunction"), es(lT, {
	components: e(function(t) {
		var n = this, r = n.cy(), a = r.collection(), i = null == t ? n.nodes() : t.nodes(), o = [];
		null != t && i.empty() && (i = t.sources());
		var s = e(function(e, t) {
			a.merge(e), i.unmerge(e), t.merge(e);
		}, "visitInComponent");
		if (i.empty()) return n.spawn();
		var l = e(function() {
			var t = r.collection();
			o.push(t);
			var a = i[0];
			s(a, t), n.bfs({
				directed: !1,
				roots: a,
				visit: e(function(e) {
					return s(e, t);
				}, "visit")
			}), t.forEach(function(e) {
				e.connectedEdges().forEach(function(e) {
					n.has(e) && t.has(e.source()) && t.has(e.target()) && t.merge(e);
				});
			});
		}, "_loop");
		do
			l();
		while (i.length > 0);
		return o;
	}, "components"),
	component: e(function() {
		var e = this[0];
		return e.cy().mutableElements().components(e)[0];
	}, "component")
}), lT.componentsOf = lT.components;
var lA = e(function(t, n) {
	var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
	if (void 0 === t) return void e3("A collection must have a reference to the core");
	var i = new tc(), o = !1;
	if (n) {
		if (n.length > 0 && M(n[0]) && !O(n[0])) {
			o = !0;
			for (var s = [], l = new th(), u = 0, c = n.length; u < c; u++) {
				var d = n[u];
				d.data ??= {};
				var h = d.data;
				if (null == h.id) h.id = te();
				else if (t.hasElementWithId(h.id) || l.has(h.id)) continue;
				var f = new tf(t, d, !1);
				s.push(f), l.add(h.id);
			}
			n = s;
		}
	} else n = [];
	this.length = 0;
	for (var p = 0, g = n.length; p < g; p++) {
		var v = n[p][0];
		if (null != v) {
			var y = v._private.data.id;
			(!r || !i.has(y)) && (r && i.set(y, {
				index: this.length,
				ele: v
			}), this[this.length] = v, this.length++);
		}
	}
	this._private = {
		eles: this,
		cy: t,
		get map() {
			return this.lazyMap ?? this.rebuildMap(), this.lazyMap;
		},
		set map(b) {
			this.lazyMap = b;
		},
		rebuildMap: e(function() {
			for (var e = this.lazyMap = new tc(), t = this.eles, n = 0; n < t.length; n++) {
				var r = t[n];
				e.set(r.id(), {
					index: n,
					ele: r
				});
			}
		}, "rebuildMap")
	}, r && (this._private.map = i), o && !a && this.restore();
}, "Collection"), lM = tf.prototype = lA.prototype = Object.create(Array.prototype);
lM.instanceString = function() {
	return "collection";
}, lM.spawn = function(e, t) {
	return new lA(this.cy(), e, t);
}, lM.spawnSelf = function() {
	return this.spawn(this);
}, lM.cy = function() {
	return this._private.cy;
}, lM.renderer = function() {
	return this._private.cy.renderer();
}, lM.element = function() {
	return this[0];
}, lM.collection = function() {
	return F(this) ? this : new lA(this._private.cy, [this]);
}, lM.unique = function() {
	return new lA(this._private.cy, this, !0);
}, lM.hasElementWithId = function(e) {
	return e = "" + e, this._private.map.has(e);
}, lM.getElementById = function(e) {
	e = "" + e;
	var t = this._private.cy, n = this._private.map.get(e);
	return n ? n.ele : new lA(t);
}, lM.$id = lM.getElementById, lM.poolIndex = function() {
	var e = this._private.cy._private.elements, t = this[0]._private.data.id;
	return e._private.map.get(t).index;
}, lM.indexOf = function(e) {
	var t = e[0]._private.data.id;
	return this._private.map.get(t).index;
}, lM.indexOfId = function(e) {
	return e = "" + e, this._private.map.get(e).index;
}, lM.json = function(t) {
	var n = this.element(), r = this.cy();
	if (null == n && t) return this;
	if (null != n) {
		var a = n._private;
		if (M(t)) {
			if (r.startBatch(), t.data) {
				n.data(t.data);
				var i = a.data;
				if (n.isEdge()) {
					var o = !1, s = {}, l = t.data.source, u = t.data.target;
					null != l && l != i.source && (s.source = "" + l, o = !0), null != u && u != i.target && (s.target = "" + u, o = !0), o && (n = n.move(s));
				} else {
					var c = "parent" in t.data, d = t.data.parent;
					c && (null != d || null != i.parent) && d != i.parent && (void 0 === d && (d = null), null != d && (d = "" + d), n = n.move({ parent: d }));
				}
			}
			t.position && n.position(t.position);
			var h = e(function(e, r, i) {
				var o = t[e];
				null != o && o !== a[e] && (o ? n[r]() : n[i]());
			}, "checkSwitch");
			return h("removed", "remove", "restore"), h("selected", "select", "unselect"), h("selectable", "selectify", "unselectify"), h("locked", "lock", "unlock"), h("grabbable", "grabify", "ungrabify"), h("pannable", "panify", "unpanify"), null != t.classes && n.classes(t.classes), r.endBatch(), this;
		}
		if (void 0 === t) {
			var f = {
				data: e8(a.data),
				position: e8(a.position),
				group: a.group,
				removed: a.removed,
				selected: a.selected,
				selectable: a.selectable,
				locked: a.locked,
				grabbable: a.grabbable,
				pannable: a.pannable,
				classes: null
			};
			f.classes = "";
			var p = 0;
			return a.classes.forEach(function(e) {
				return f.classes += 0 == p++ ? e : " " + e;
			}), f;
		}
	}
}, lM.jsons = function() {
	for (var e = [], t = 0; t < this.length; t++) {
		var n = this[t].json();
		e.push(n);
	}
	return e;
}, lM.clone = function() {
	for (var e = this.cy(), t = [], n = 0; n < this.length; n++) {
		var r = new tf(e, this[n].json(), !1);
		t.push(r);
	}
	return new lA(e, t);
}, lM.copy = lM.clone, lM.restore = function() {
	for (var t, n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], a = this.cy(), i = a._private, o = [], s = [], l = 0, u = this.length; l < u; l++) {
		var c = this[l];
		r && !c.removed() || (c.isNode() ? o.push(c) : s.push(c));
	}
	t = o.concat(s);
	var d, h = e(function() {
		t.splice(d, 1), d--;
	}, "removeFromElements");
	for (d = 0; d < t.length; d++) {
		var f = t[d], p = f._private, g = p.data;
		if (f.clearTraversalCache(), !(!r && !p.removed)) {
			if (void 0 === g.id) g.id = te();
			else if (I(g.id)) g.id = "" + g.id;
			else if (X(g.id) || !_(g.id)) {
				e3("Can not create element with invalid string ID `" + g.id + "`"), h();
				continue;
			} else if (a.hasElementWithId(g.id)) {
				e3("Can not create second element with ID `" + g.id + "`"), h();
				continue;
			}
		}
		var v = g.id;
		if (f.isNode()) {
			var y = p.position;
			y.x ??= 0, y.y ??= 0;
		}
		if (f.isEdge()) {
			for (var m = ["source", "target"], x = m.length, w = !1, E = 0; E < x; E++) {
				var C = m[E], T = g[C];
				I(T) && (T = g[C] = "" + g[C]), null == T || "" === T ? (e3("Can not create edge `" + v + "` with unspecified " + C), w = !0) : a.hasElementWithId(T) || (e3("Can not create edge `" + v + "` with nonexistant " + C + " `" + T + "`"), w = !0);
			}
			if (w) {
				h();
				continue;
			}
			var k = a.getElementById(g.source), S = a.getElementById(g.target);
			k.same(S) ? k._private.edges.push(f) : (k._private.edges.push(f), S._private.edges.push(f)), f._private.source = k, f._private.target = S;
		}
		p.map = new tc(), p.map.set(v, {
			ele: f,
			index: 0
		}), p.removed = !1, r && a.addToPool(f);
	}
	for (var P = 0; P < o.length; P++) {
		var B = o[P], D = B._private.data;
		I(D.parent) && (D.parent = "" + D.parent);
		var A = D.parent;
		if (null != A || B._private.parent) {
			var M = B._private.parent ? a.collection().merge(B._private.parent) : a.getElementById(A);
			if (M.empty()) D.parent = void 0;
			else if (M[0].removed()) e9("Node added with missing parent, reference to parent removed"), D.parent = void 0, B._private.parent = null;
			else {
				for (var R = !1, L = M; !L.empty();) {
					if (B.same(L)) {
						R = !0, D.parent = void 0;
						break;
					}
					L = L.parent();
				}
				R || (M[0]._private.children.push(B), B._private.parent = M[0], i.hasCompoundNodes = !0);
			}
		}
	}
	if (t.length > 0) {
		for (var z = t.length === this.length ? this : new lA(a, t), O = 0; O < z.length; O++) {
			var F = z[O];
			F.isNode() || (F.parallelEdges().clearTraversalCache(), F.source().clearTraversalCache(), F.target().clearTraversalCache());
		}
		(i.hasCompoundNodes ? a.collection().merge(z).merge(z.connectedNodes()).merge(z.parent()) : z).dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(n), n ? z.emitAndNotify("add") : r && z.emit("add");
	}
	return this;
}, lM.removed = function() {
	var e = this[0];
	return e && e._private.removed;
}, lM.inside = function() {
	var e = this[0];
	return e && !e._private.removed;
}, lM.remove = function() {
	var t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r = [], a = {}, i = this._private.cy;
	function o(e) {
		for (var t = e._private.edges, n = 0; n < t.length; n++) l(t[n]);
	}
	function s(e) {
		for (var t = e._private.children, n = 0; n < t.length; n++) l(t[n]);
	}
	function l(e) {
		var t = a[e.id()];
		n && e.removed() || t || (a[e.id()] = !0, e.isNode() ? (r.push(e), o(e), s(e)) : r.unshift(e));
	}
	e(o, "addConnectedEdges"), e(s, "addChildren"), e(l, "add");
	for (var u = 0, c = this.length; u < c; u++) l(this[u]);
	function d(e, t) {
		ta(e._private.edges, t), e.clearTraversalCache();
	}
	function h(e) {
		e.clearTraversalCache();
	}
	e(d, "removeEdgeRef"), e(h, "removeParallelRef");
	var f = [];
	function p(e, t) {
		t = t[0];
		var n = (e = e[0])._private.children, r = e.id();
		ta(n, t), t._private.parent = null, f.ids[r] || (f.ids[r] = !0, f.push(e));
	}
	f.ids = {}, e(p, "removeChildRef"), this.dirtyCompoundBoundsCache(), n && i.removeFromPool(r);
	for (var g = 0; g < r.length; g++) {
		var v = r[g];
		if (v.isEdge()) {
			var y = v.source()[0], m = v.target()[0];
			d(y, v), d(m, v);
			for (var x = v.parallelEdges(), w = 0; w < x.length; w++) {
				var E = x[w];
				h(E), E.isBundledBezier() && E.dirtyBoundingBoxCache();
			}
		} else {
			var C = v.parent();
			0 !== C.length && p(C, v);
		}
		n && (v._private.removed = !0);
	}
	var T = i._private.elements;
	i._private.hasCompoundNodes = !1;
	for (var k = 0; k < T.length; k++) if (T[k].isParent()) {
		i._private.hasCompoundNodes = !0;
		break;
	}
	var S = new lA(this.cy(), r);
	S.size() > 0 && (t ? S.emitAndNotify("remove") : n && S.emit("remove"));
	for (var P = 0; P < f.length; P++) {
		var B = f[P];
		n && B.removed() || B.updateStyle();
	}
	return S;
}, lM.move = function(t) {
	var n = this._private.cy, r = this, a = e(function(e) {
		return null == e ? e : "" + e;
	}, "toString");
	if (void 0 !== t.source || void 0 !== t.target) {
		var i = a(t.source), o = a(t.target), s = null != i && n.hasElementWithId(i), l = null != o && n.hasElementWithId(o);
		(s || l) && (n.batch(function() {
			r.remove(!1, !1), r.emitAndNotify("moveout");
			for (var e = 0; e < r.length; e++) {
				var t = r[e], n = t._private.data;
				t.isEdge() && (s && (n.source = i), l && (n.target = o));
			}
			r.restore(!1, !1);
		}), r.emitAndNotify("move"));
	} else if (void 0 !== t.parent) {
		var u = a(t.parent);
		if (null === u || n.hasElementWithId(u)) {
			var c = null === u ? void 0 : u;
			n.batch(function() {
				var e = r.remove(!1, !1);
				e.emitAndNotify("moveout");
				for (var t = 0; t < r.length; t++) {
					var n = r[t], a = n._private.data;
					n.isNode() && (a.parent = c);
				}
				e.restore(!1, !1);
			}), r.emitAndNotify("move");
		}
	}
	return this;
}, [
	ai,
	oK,
	oU,
	su,
	sd,
	sw,
	sC,
	s2,
	ls,
	ll,
	lu,
	ld,
	lf,
	ly,
	lw,
	lT
].forEach(function(e) {
	es(lM, e);
});
var lR = {
	add: e(function(e) {
		var t;
		if (z(e)) if (e._private.cy === this) t = e.restore();
		else {
			for (var n = [], r = 0; r < e.length; r++) {
				var a = e[r];
				n.push(a.json());
			}
			t = new lA(this, n);
		}
		else if (A(e)) t = new lA(this, e);
		else if (M(e) && (A(e.nodes) || A(e.edges))) {
			for (var i = [], o = ["nodes", "edges"], s = 0, l = o.length; s < l; s++) {
				var u = o[s], c = e[u];
				if (A(c)) for (var d = 0, h = c.length; d < h; d++) {
					var f = es({ group: u }, c[d]);
					i.push(f);
				}
			}
			t = new lA(this, i);
		} else t = new tf(this, e).collection();
		return t;
	}, "add"),
	remove: e(function(e) {
		if (!z(e) && _(e)) {
			var t = e;
			e = this.$(t);
		}
		return e.remove();
	}, "remove")
};
function lI(t, n, r, a) {
	var i = "u" > typeof Float32Array;
	if (4 != arguments.length) return !1;
	for (var o = 0; o < 4; ++o) if ("number" != typeof arguments[o] || isNaN(arguments[o]) || !isFinite(arguments[o])) return !1;
	t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
	var s = i ? new Float32Array(11) : Array(11);
	function l(e, t) {
		return 1 - 3 * t + 3 * e;
	}
	function u(e, t) {
		return 3 * t - 6 * e;
	}
	function c(e) {
		return 3 * e;
	}
	function d(e, t, n) {
		return ((l(t, n) * e + u(t, n)) * e + c(t)) * e;
	}
	function h(e, t, n) {
		return 3 * l(t, n) * e * e + 2 * u(t, n) * e + c(t);
	}
	function f(e, n) {
		for (var a = 0; a < 4; ++a) {
			var i = h(n, t, r);
			if (0 === i) break;
			var o = d(n, t, r) - e;
			n -= o / i;
		}
		return n;
	}
	function p() {
		for (var e = 0; e < 11; ++e) s[e] = d(.1 * e, t, r);
	}
	function g(e, n, a) {
		var i, o, s = 0;
		do
			(i = d(o = n + (a - n) / 2, t, r) - e) > 0 ? a = o : n = o;
		while (Math.abs(i) > 1e-7 && ++s < 10);
		return o;
	}
	function v(e) {
		for (var n = 0, a = 1; 10 !== a && s[a] <= e; ++a) n += .1;
		var i = n + (e - s[--a]) / (s[a + 1] - s[a]) * .1, o = h(i, t, r);
		return o >= .001 ? f(e, i) : 0 === o ? i : g(e, n, n + .1);
	}
	e(l, "A"), e(u, "B"), e(c, "C"), e(d, "calcBezier"), e(h, "getSlope"), e(f, "newtonRaphsonIterate"), e(p, "calcSampleValues"), e(g, "binarySubdivide"), e(v, "getTForX");
	var y = !1;
	function m() {
		y = !0, (t !== n || r !== a) && p();
	}
	e(m, "precompute");
	var x = e(function(e) {
		return y || m(), t === n && r === a ? e : 0 === e ? 0 : 1 === e ? 1 : d(v(e), n, a);
	}, "f");
	x.getControlPoints = function() {
		return [{
			x: t,
			y: n
		}, {
			x: r,
			y: a
		}];
	};
	var w = "generateBezier(" + [
		t,
		n,
		r,
		a
	] + ")";
	return x.toString = function() {
		return w;
	}, x;
}
e(lI, "generateCubicBezier");
var lL = function() {
	function t(e) {
		return -e.tension * e.x - e.friction * e.v;
	}
	function n(e, n, r) {
		var a = {
			x: e.x + r.dx * n,
			v: e.v + r.dv * n,
			tension: e.tension,
			friction: e.friction
		};
		return {
			dx: a.v,
			dv: t(a)
		};
	}
	function r(e, r) {
		var a = {
			dx: e.v,
			dv: t(e)
		}, i = n(e, .5 * r, a), o = n(e, .5 * r, i), s = n(e, r, o), l = 1 / 6 * (a.dx + 2 * (i.dx + o.dx) + s.dx), u = 1 / 6 * (a.dv + 2 * (i.dv + o.dv) + s.dv);
		return e.x = e.x + l * r, e.v = e.v + u * r, e;
	}
	return e(t, "springAccelerationForState"), e(n, "springEvaluateStateWithDerivative"), e(r, "springIntegrateState"), e(function e(t, n, a) {
		var i, o, s, l = {
			x: -1,
			v: 0,
			tension: null,
			friction: null
		}, u = [0], c = 0, d = 1 / 1e4;
		for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, a = a || null, l.tension = t, l.friction = n, o = (i = null !== a) ? (c = e(t, n)) / a * .016 : .016; s = r(s || l, o), u.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
		return i ? function(e) {
			return u[e * (u.length - 1) | 0];
		} : c;
	}, "springRK4Factory");
}(), lN = e(function(e, t, n, r) {
	var a = lI(e, t, n, r);
	return function(e, t, n) {
		return e + (t - e) * a(n);
	};
}, "cubicBezier"), lz = {
	linear: e(function(e, t, n) {
		return e + (t - e) * n;
	}, "linear"),
	ease: lN(.25, .1, .25, 1),
	"ease-in": lN(.42, 0, 1, 1),
	"ease-out": lN(0, 0, .58, 1),
	"ease-in-out": lN(.42, 0, .58, 1),
	"ease-in-sine": lN(.47, 0, .745, .715),
	"ease-out-sine": lN(.39, .575, .565, 1),
	"ease-in-out-sine": lN(.445, .05, .55, .95),
	"ease-in-quad": lN(.55, .085, .68, .53),
	"ease-out-quad": lN(.25, .46, .45, .94),
	"ease-in-out-quad": lN(.455, .03, .515, .955),
	"ease-in-cubic": lN(.55, .055, .675, .19),
	"ease-out-cubic": lN(.215, .61, .355, 1),
	"ease-in-out-cubic": lN(.645, .045, .355, 1),
	"ease-in-quart": lN(.895, .03, .685, .22),
	"ease-out-quart": lN(.165, .84, .44, 1),
	"ease-in-out-quart": lN(.77, 0, .175, 1),
	"ease-in-quint": lN(.755, .05, .855, .06),
	"ease-out-quint": lN(.23, 1, .32, 1),
	"ease-in-out-quint": lN(.86, 0, .07, 1),
	"ease-in-expo": lN(.95, .05, .795, .035),
	"ease-out-expo": lN(.19, 1, .22, 1),
	"ease-in-out-expo": lN(1, 0, 0, 1),
	"ease-in-circ": lN(.6, .04, .98, .335),
	"ease-out-circ": lN(.075, .82, .165, 1),
	"ease-in-out-circ": lN(.785, .135, .15, .86),
	spring: e(function(e, t, n) {
		if (0 === n) return lz.linear;
		var r = lL(e, t, n);
		return function(e, t, n) {
			return e + (t - e) * r(n);
		};
	}, "spring"),
	"cubic-bezier": lN
};
function lO(e, t, n, r, a) {
	if (1 === r || t === n) return n;
	var i = a(t, n, r);
	return null == e || ((e.roundValue || e.color) && (i = Math.round(i)), void 0 !== e.min && (i = Math.max(i, e.min)), void 0 !== e.max && (i = Math.min(i, e.max))), i;
}
function lF(e, t) {
	return null != e.pfValue || null != e.value ? null != e.pfValue && (null == t || "%" !== t.type.units) ? e.pfValue : e.value : e;
}
function lV(e, t, n, r, a) {
	var i = null != a ? a.type : null;
	n < 0 ? n = 0 : n > 1 && (n = 1);
	var o = lF(e, a), s = lF(t, a);
	if (I(o) && I(s)) return lO(i, o, s, n, r);
	if (A(o) && A(s)) {
		for (var l = [], u = 0; u < s.length; u++) {
			var c = o[u], d = s[u];
			if (null != c && null != d) {
				var h = lO(i, c, d, n, r);
				l.push(h);
			} else l.push(d);
		}
		return l;
	}
}
function lq(e, t, n, r) {
	var a = !r, i = e._private, o = t._private, s = o.easing, l = o.startTime, u = (r ? e : e.cy()).style();
	o.easingImpl || (null == s ? o.easingImpl = lz.linear : (c = _(s) ? u.parse("transition-timing-function", s).value : s, _(c) ? (d = c, h = []) : (d = c[1], h = c.slice(2).map(function(e) {
		return +e;
	})), h.length > 0 ? ("spring" === d && h.push(o.duration), o.easingImpl = lz[d].apply(null, h)) : o.easingImpl = lz[d]));
	var c, d, h, f, p = o.easingImpl;
	if (f = 0 === o.duration ? 1 : (n - l) / o.duration, o.applying && (f = o.progress), f < 0 ? f = 0 : f > 1 && (f = 1), null == o.delay) {
		var g = o.startPosition, v = o.position;
		if (v && a && !e.locked()) {
			var y = {};
			lj(g.x, v.x) && (y.x = lV(g.x, v.x, f, p)), lj(g.y, v.y) && (y.y = lV(g.y, v.y, f, p)), e.position(y);
		}
		var m = o.startPan, x = o.pan, w = i.pan, E = null != x && r;
		E && (lj(m.x, x.x) && (w.x = lV(m.x, x.x, f, p)), lj(m.y, x.y) && (w.y = lV(m.y, x.y, f, p)), e.emit("pan"));
		var C = o.startZoom, T = o.zoom, k = null != T && r;
		k && (lj(C, T) && (i.zoom = nx(i.minZoom, lV(C, T, f, p), i.maxZoom)), e.emit("zoom")), (E || k) && e.emit("viewport");
		var S = o.style;
		if (S && S.length > 0 && a) {
			for (var P = 0; P < S.length; P++) {
				var B = S[P], D = B.name, A = o.startStyle[D], M = u.properties[A.name], R = lV(A, B, f, p, M);
				u.overrideBypass(e, D, R);
			}
			e.emit("style");
		}
	}
	return o.progress = f, f;
}
function lj(e, t) {
	return null != e && null != t && (!!(I(e) && I(t)) || !!(e && t));
}
function lX(e, t, n, r) {
	var a = t._private;
	a.started = !0, a.startTime = n - a.progress * a.duration;
}
function lY(t, n) {
	var r = n._private.aniEles, a = [];
	function i(n, r) {
		var i = n._private, o = i.animation.current, s = i.animation.queue, l = !1;
		if (0 === o.length) {
			var u = s.shift();
			u && o.push(u);
		}
		for (var c = e(function(e) {
			for (var t = e.length - 1; t >= 0; t--) (0, e[t])();
			e.splice(0, e.length);
		}, "callbacks"), d = o.length - 1; d >= 0; d--) {
			var h = o[d], f = h._private;
			if (f.stopped) {
				o.splice(d, 1), f.hooked = !1, f.playing = !1, f.started = !1, c(f.frames);
				continue;
			}
			(f.playing || f.applying) && (f.playing && f.applying && (f.applying = !1), f.started || lX(n, h, t), lq(n, h, t, r), f.applying && (f.applying = !1), c(f.frames), null != f.step && f.step(t), h.completed() && (o.splice(d, 1), f.hooked = !1, f.playing = !1, f.started = !1, c(f.completes)), l = !0);
		}
		return r || 0 !== o.length || 0 !== s.length || a.push(n), l;
	}
	e(i, "stepOne");
	for (var o = !1, s = 0; s < r.length; s++) {
		var l = i(r[s]);
		o = o || l;
	}
	var u = i(n, !0);
	(o || u) && (r.length > 0 ? n.notify("draw", r) : n.notify("draw")), r.unmerge(a), n.emit("step");
}
e(lO, "getEasedValue"), e(lF, "getValue"), e(lV, "ease"), e(lq, "step$1"), e(lj, "valid"), e(lX, "startAnimation"), e(lY, "stepAll");
var lW = {
	animate: oH.animate(),
	animation: oH.animation(),
	animated: oH.animated(),
	clearQueue: oH.clearQueue(),
	delay: oH.delay(),
	delayAnimation: oH.delayAnimation(),
	stop: oH.stop(),
	addToAnimationPool: e(function(e) {
		this.styleEnabled() && this._private.aniEles.merge(e);
	}, "addToAnimationPool"),
	stopAnimationLoop: e(function() {
		this._private.animationsRunning = !1;
	}, "stopAnimationLoop"),
	startAnimationLoop: e(function() {
		var t = this;
		if (t._private.animationsRunning = !0, t.styleEnabled()) {
			e(r, "headlessStep");
			var n = t.renderer();
			n && n.beforeRender ? n.beforeRender(e(function(e, n) {
				lY(n, t);
			}, "rendererAnimationStep"), n.beforeRenderPriorities.animations) : r();
		}
		function r() {
			t._private.animationsRunning && eN(e(function(e) {
				lY(e, t), r();
			}, "animationStep"));
		}
	}, "startAnimationLoop")
}, lH = {
	qualifierCompare: e(function(e, t) {
		return null == e || null == t ? null == e && null == t : e.sameText(t);
	}, "qualifierCompare"),
	eventMatches: e(function(e, t, n) {
		var r = t.qualifier;
		return null == r || e !== n.target && O(n.target) && r.matches(n.target);
	}, "eventMatches"),
	addEventFields: e(function(e, t) {
		t.cy = e, t.target = e;
	}, "addEventFields"),
	callbackContext: e(function(e, t, n) {
		return null != t.qualifier ? n.target : e;
	}, "callbackContext")
}, lK = e(function(e) {
	return _(e) ? new ss(e) : e;
}, "argSelector"), lU = {
	createEmitter: e(function() {
		var e = this._private;
		return e.emitter || (e.emitter = new le(lH, this)), this;
	}, "createEmitter"),
	emitter: e(function() {
		return this._private.emitter;
	}, "emitter"),
	on: e(function(e, t, n) {
		return this.emitter().on(e, lK(t), n), this;
	}, "on"),
	removeListener: e(function(e, t, n) {
		return this.emitter().removeListener(e, lK(t), n), this;
	}, "removeListener"),
	removeAllListeners: e(function() {
		return this.emitter().removeAllListeners(), this;
	}, "removeAllListeners"),
	one: e(function(e, t, n) {
		return this.emitter().one(e, lK(t), n), this;
	}, "one"),
	once: e(function(e, t, n) {
		return this.emitter().one(e, lK(t), n), this;
	}, "once"),
	emit: e(function(e, t) {
		return this.emitter().emit(e, t), this;
	}, "emit"),
	emitAndNotify: e(function(e, t) {
		return this.emit(e), this.notify(e, t), this;
	}, "emitAndNotify")
};
oH.eventAliasesOn(lU);
var lG = {
	png: e(function(e) {
		return e = e || {}, this._private.renderer.png(e);
	}, "png"),
	jpg: e(function(e) {
		var t = this._private.renderer;
		return (e = e || {}).bg = e.bg || "#fff", t.jpg(e);
	}, "jpg")
};
lG.jpeg = lG.jpg;
var lZ = { layout: e(function(e) {
	if (null == e) return void e3("Layout options must be specified to make a layout");
	if (null == e.name) return void e3("A `name` must be specified to make a layout");
	var t, n = e.name, r = this.extension("layout", n);
	return null == r ? void e3("No such layout `" + n + "` found.  Did you forget to import it and `cytoscape.use()` it?") : (t = _(e.eles) ? this.$(e.eles) : null != e.eles ? e.eles : this.$(), new r(es({}, e, {
		cy: this,
		eles: t
	})));
}, "layout") };
lZ.createLayout = lZ.makeLayout = lZ.layout;
var l$ = {
	notify: e(function(e, t) {
		var n = this._private;
		if (this.batching()) {
			n.batchNotifications = n.batchNotifications || {};
			var r = n.batchNotifications[e] = n.batchNotifications[e] || this.collection();
			null != t && r.merge(t);
			return;
		}
		if (n.notificationsEnabled) {
			var a = this.renderer();
			this.destroyed() || !a || a.notify(e, t);
		}
	}, "notify"),
	notifications: e(function(e) {
		var t = this._private;
		return void 0 === e ? t.notificationsEnabled : (t.notificationsEnabled = !!e, this);
	}, "notifications"),
	noNotifications: e(function(e) {
		this.notifications(!1), e(), this.notifications(!0);
	}, "noNotifications"),
	batching: e(function() {
		return this._private.batchCount > 0;
	}, "batching"),
	startBatch: e(function() {
		var e = this._private;
		return e.batchCount ??= 0, 0 === e.batchCount && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
	}, "startBatch"),
	endBatch: e(function() {
		var e = this._private;
		if (0 === e.batchCount) return this;
		if (e.batchCount--, 0 === e.batchCount) {
			e.batchStyleEles.updateStyle();
			var t = this.renderer();
			Object.keys(e.batchNotifications).forEach(function(n) {
				var r = e.batchNotifications[n];
				r.empty() ? t.notify(n) : t.notify(n, r);
			});
		}
		return this;
	}, "endBatch"),
	batch: e(function(e) {
		return this.startBatch(), e(), this.endBatch(), this;
	}, "batch"),
	batchData: e(function(e) {
		var t = this;
		return this.batch(function() {
			for (var n = Object.keys(e), r = 0; r < n.length; r++) {
				var a = n[r], i = e[a];
				t.getElementById(a).data(i);
			}
		});
	}, "batchData")
}, lQ = tr({
	hideEdgesOnViewport: !1,
	textureOnViewport: !1,
	motionBlur: !1,
	motionBlurOpacity: .05,
	pixelRatio: void 0,
	desktopTapThreshold: 4,
	touchTapThreshold: 8,
	wheelSensitivity: 1,
	debug: !1,
	showFps: !1,
	webgl: !1,
	webglDebug: !1,
	webglDebugShowAtlases: !1,
	webglTexSize: 2048,
	webglTexRows: 36,
	webglTexRowsNodes: 18,
	webglBatchSize: 2048,
	webglTexPerBatch: 14,
	webglBgColor: [
		255,
		255,
		255
	]
}), lJ = {
	renderTo: e(function(e, t, n, r) {
		return this._private.renderer.renderTo(e, t, n, r), this;
	}, "renderTo"),
	renderer: e(function() {
		return this._private.renderer;
	}, "renderer"),
	forceRender: e(function() {
		return this.notify("draw"), this;
	}, "forceRender"),
	resize: e(function() {
		return this.invalidateSize(), this.emitAndNotify("resize"), this;
	}, "resize"),
	initRenderer: e(function(e) {
		var t = this.extension("renderer", e.name);
		if (null == t) return void e3("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
		void 0 !== e.wheelSensitivity && e9("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
		var n = lQ(e);
		n.cy = this, this._private.renderer = new t(n), this.notify("init");
	}, "initRenderer"),
	destroyRenderer: e(function() {
		this.notify("destroy");
		var e = this.container();
		if (e) for (e._cyreg = null; e.childNodes.length > 0;) e.removeChild(e.childNodes[0]);
		this._private.renderer = null, this.mutableElements().forEach(function(e) {
			var t = e._private;
			t.rscratch = {}, t.rstyle = {}, t.animation.current = [], t.animation.queue = [];
		});
	}, "destroyRenderer"),
	onRender: e(function(e) {
		return this.on("render", e);
	}, "onRender"),
	offRender: e(function(e) {
		return this.off("render", e);
	}, "offRender")
};
lJ.invalidateDimensions = lJ.resize;
var l0 = {
	collection: e(function(e, t) {
		return _(e) ? this.$(e) : z(e) ? e.collection() : A(e) ? (t || (t = {}), new lA(this, e, t.unique, t.removed)) : new lA(this);
	}, "collection"),
	nodes: e(function(e) {
		var t = this.$(function(e) {
			return e.isNode();
		});
		return e ? t.filter(e) : t;
	}, "nodes"),
	edges: e(function(e) {
		var t = this.$(function(e) {
			return e.isEdge();
		});
		return e ? t.filter(e) : t;
	}, "edges"),
	$: e(function(e) {
		var t = this._private.elements;
		return e ? t.filter(e) : t.spawnSelf();
	}, "$"),
	mutableElements: e(function() {
		return this._private.elements;
	}, "mutableElements")
};
l0.elements = l0.filter = l0.$;
var l1 = {};
l1.apply = function(e) {
	for (var t = this._private.cy.collection(), n = 0; n < e.length; n++) {
		var r = e[n], a = this.getContextMeta(r);
		if (!a.empty) {
			var i = this.getContextStyle(a), o = this.applyContextStyle(a, i, r);
			r._private.appliedInitStyle ? this.updateTransitions(r, o.diffProps) : r._private.appliedInitStyle = !0, this.updateStyleHints(r) && t.push(r);
		}
	}
	return t;
}, l1.getPropertiesDiff = function(e, t) {
	var n = this._private.propDiffs = this._private.propDiffs || {}, r = e + "-" + t, a = n[r];
	if (a) return a;
	for (var i = [], o = {}, s = 0; s < this.length; s++) {
		var l = this[s], u = "t" === e[s], c = "t" === t[s], d = u !== c, h = l.mappedProperties.length > 0;
		if (d || c && h) {
			var f = void 0;
			d && h || d ? f = l.properties : h && (f = l.mappedProperties);
			for (var p = 0; p < f.length; p++) {
				for (var g = f[p], v = g.name, y = !1, m = s + 1; m < this.length; m++) {
					var x = this[m];
					if ("t" === t[m] && (y = null != x.properties[g.name])) break;
				}
				o[v] || y || (o[v] = !0, i.push(v));
			}
		}
	}
	return n[r] = i, i;
}, l1.getContextMeta = function(e) {
	for (var t, n = "", r = e._private.styleCxtKey || "", a = 0; a < this.length; a++) {
		var i = this[a];
		i.selector && i.selector.matches(e) ? n += "t" : n += "f";
	}
	return t = this.getPropertiesDiff(r, n), e._private.styleCxtKey = n, {
		key: n,
		diffPropNames: t,
		empty: 0 === t.length
	};
}, l1.getContextStyle = function(e) {
	var t = e.key, n = this._private.contextStyles = this._private.contextStyles || {};
	if (n[t]) return n[t];
	for (var r = { _private: { key: t } }, a = 0; a < this.length; a++) {
		var i = this[a];
		if ("t" === t[a]) for (var o = 0; o < i.properties.length; o++) {
			var s = i.properties[o];
			r[s.name] = s;
		}
	}
	return n[t] = r, r;
}, l1.applyContextStyle = function(e, t, n) {
	for (var r = e.diffPropNames, a = {}, i = this.types, o = 0; o < r.length; o++) {
		var s = r[o], l = t[s], u = n.pstyle(s);
		if (!l) if (!u) continue;
		else l = u.bypass ? {
			name: s,
			deleteBypassed: !0
		} : {
			name: s,
			delete: !0
		};
		if (u !== l) {
			if (l.mapped === i.fn && null != u && null != u.mapping && u.mapping.value === l.value) {
				var c = u.mapping;
				if ((c.fnValue = l.value(n)) === c.prevFnValue) continue;
			}
			var d = a[s] = { prev: u };
			this.applyParsedProperty(n, l), d.next = n.pstyle(s), d.next && d.next.bypass && (d.next = d.next.bypassed);
		}
	}
	return { diffProps: a };
}, l1.updateStyleHints = function(t) {
	var n = t._private, r = this, a = r.propertyGroupNames, i = r.propertyGroupKeys, o = e(function(e, t, n) {
		return r.getPropertiesHash(e, t, n);
	}, "propHash"), s = n.styleKey;
	if (t.removed()) return !1;
	var l = "nodes" === n.group, u = t._private.style;
	a = Object.keys(u);
	for (var c = 0; c < i.length; c++) {
		var d = i[c];
		n.styleKeys[d] = [9261, 5381];
	}
	for (var h = e(function(e, t) {
		return n.styleKeys[t][0] = eO(e, n.styleKeys[t][0]);
	}, "updateGrKey1"), f = e(function(e, t) {
		return n.styleKeys[t][1] = eF(e, n.styleKeys[t][1]);
	}, "updateGrKey2"), p = e(function(e, t) {
		h(e, t), f(e, t);
	}, "updateGrKey"), g = e(function(e, t) {
		for (var n = 0; n < e.length; n++) {
			var r = e.charCodeAt(n);
			h(r, t), f(r, t);
		}
	}, "updateGrKeyWStr"), v = e(function(e) {
		return -128 < e && e < 128 && Math.floor(e) !== e ? 2e9 - (1024 * e | 0) : e;
	}, "cleanNum"), y = 0; y < a.length; y++) {
		var m = a[y], x = u[m];
		if (null != x) {
			var w = this.properties[m], E = w.type, C = w.groupKey, T = void 0;
			null != w.hashOverride ? T = w.hashOverride(t, x) : null != x.pfValue && (T = x.pfValue);
			var k = null == w.enums ? x.value : null, S = null != T, P = S || null != k, B = x.units;
			E.number && P && !E.multiple ? (p(v(S ? T : k), C), S || null == B || g(B, C)) : g(x.strValue, C);
		}
	}
	for (var _ = [9261, 5381], D = 0; D < i.length; D++) {
		var A = i[D], M = n.styleKeys[A];
		_[0] = eO(M[0], _[0]), _[1] = eF(M[1], _[1]);
	}
	n.styleKey = eV(_[0], _[1]);
	var R = n.styleKeys;
	n.labelDimsKey = eq(R.labelDimensions);
	var I = o(t, ["label"], R.labelDimensions);
	if (n.labelKey = eq(I), n.labelStyleKey = eq(ej(R.commonLabel, I)), !l) {
		var L = o(t, ["source-label"], R.labelDimensions);
		n.sourceLabelKey = eq(L), n.sourceLabelStyleKey = eq(ej(R.commonLabel, L));
		var N = o(t, ["target-label"], R.labelDimensions);
		n.targetLabelKey = eq(N), n.targetLabelStyleKey = eq(ej(R.commonLabel, N));
	}
	if (l) {
		var z = n.styleKeys, O = z.nodeBody, F = z.nodeBorder, V = z.nodeOutline, q = z.backgroundImage, j = z.compound, X = z.pie, Y = z.stripe;
		n.nodeKey = eq([
			O,
			F,
			V,
			q,
			j,
			X,
			Y
		].filter(function(e) {
			return null != e;
		}).reduce(ej, [9261, 5381])), n.hasPie = null != X && 9261 !== X[0] && 5381 !== X[1], n.hasStripe = null != Y && 9261 !== Y[0] && 5381 !== Y[1];
	}
	return s !== n.styleKey;
}, l1.clearStyleHints = function(e) {
	var t = e._private;
	t.styleCxtKey = "", t.styleKeys = {}, t.styleKey = null, t.labelKey = null, t.labelStyleKey = null, t.sourceLabelKey = null, t.sourceLabelStyleKey = null, t.targetLabelKey = null, t.targetLabelStyleKey = null, t.nodeKey = null, t.hasPie = null, t.hasStripe = null;
}, l1.applyParsedProperty = function(t, n) {
	var r, a = this, i = n, o = t._private.style, s = a.types, l = a.properties[i.name].type, u = i.bypass, c = o[i.name], d = c && c.bypass, h = t._private, f = "mapping", p = e(function(e) {
		return null == e ? null : null != e.pfValue ? e.pfValue : e.value;
	}, "getVal"), g = e(function() {
		var e = p(c), n = p(i);
		a.checkTriggers(t, i.name, e, n);
	}, "checkTriggers");
	if ("curve-style" === n.name && t.isEdge() && ("bezier" !== n.value && t.isLoop() || "haystack" === n.value && (t.source().isParent() || t.target().isParent())) && (i = n = this.parse(n.name, "bezier", u)), i.delete) return o[i.name] = void 0, g(), !0;
	if (i.deleteBypassed) return c ? !!c.bypass && (c.bypassed = void 0, g(), !0) : (g(), !0);
	if (i.deleteBypass) return c ? !!c.bypass && (o[i.name] = c.bypassed, g(), !0) : (g(), !0);
	var v = e(function() {
		e9("Do not assign mappings to elements without corresponding data (i.e. ele `" + t.id() + "` has no mapping for property `" + i.name + "` with data field `" + i.field + "`); try a `[" + i.field + "]` selector to limit scope to elements with `" + i.field + "` defined");
	}, "printMappingErr");
	switch (i.mapped) {
		case s.mapData:
			for (var y, m = i.field.split("."), x = h.data, w = 0; w < m.length && x; w++) x = x[m[w]];
			if (null == x) return v(), !1;
			if (!I(x)) return e9("Do not use continuous mappers without specifying numeric data (i.e. `" + i.field + ": " + x + "` for `" + t.id() + "` is non-numeric)"), !1;
			var E = i.fieldMax - i.fieldMin;
			if ((y = 0 === E ? 0 : (x - i.fieldMin) / E) < 0 ? y = 0 : y > 1 && (y = 1), l.color) {
				var C = i.valueMin[0], T = i.valueMax[0], k = i.valueMin[1], S = i.valueMax[1], P = i.valueMin[2], B = i.valueMax[2], _ = null == i.valueMin[3] ? 1 : i.valueMin[3], D = [
					Math.round(C + (T - C) * y),
					Math.round(k + (S - k) * y),
					Math.round(P + (B - P) * y),
					Math.round(_ + ((null == i.valueMax[3] ? 1 : i.valueMax[3]) - _) * y)
				];
				r = {
					bypass: i.bypass,
					name: i.name,
					value: D,
					strValue: "rgb(" + D[0] + ", " + D[1] + ", " + D[2] + ")"
				};
			} else {
				if (!l.number) return !1;
				var A = i.valueMin + (i.valueMax - i.valueMin) * y;
				r = this.parse(i.name, A, i.bypass, f);
			}
			if (!r) return v(), !1;
			r.mapping = i, i = r;
			break;
		case s.data:
			for (var M = i.field.split("."), R = h.data, L = 0; L < M.length && R; L++) R = R[M[L]];
			if (null != R && (r = this.parse(i.name, R, i.bypass, f)), !r) return v(), !1;
			r.mapping = i, i = r;
			break;
		case s.fn:
			var N = i.value, z = null != i.fnValue ? i.fnValue : N(t);
			if (i.prevFnValue = z, null == z) return e9("Custom function mappers may not return null (i.e. `" + i.name + "` for ele `" + t.id() + "` is null)"), !1;
			if (!(r = this.parse(i.name, z, i.bypass, f))) return e9("Custom function mappers may not return invalid values for the property type (i.e. `" + i.name + "` for ele `" + t.id() + "` is invalid)"), !1;
			r.mapping = e8(i), i = r;
			break;
		case void 0: break;
		default: return !1;
	}
	return u ? (d ? i.bypassed = c.bypassed : i.bypassed = c, o[i.name] = i) : d ? c.bypassed = i : o[i.name] = i, g(), !0;
}, l1.cleanElements = function(e, t) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n];
		if (this.clearStyleHints(r), r.dirtyCompoundBoundsCache(), r.dirtyBoundingBoxCache(), t) for (var a = r._private.style, i = Object.keys(a), o = 0; o < i.length; o++) {
			var s = i[o], l = a[s];
			null != l && (l.bypass ? l.bypassed = null : a[s] = null);
		}
		else r._private.style = {};
	}
}, l1.update = function() {
	this._private.cy.mutableElements().updateStyle();
}, l1.updateTransitions = function(e, t) {
	var n = this, r = e._private, a = e.pstyle("transition-property").value, i = e.pstyle("transition-duration").pfValue, o = e.pstyle("transition-delay").pfValue;
	if (a.length > 0 && i > 0) {
		for (var s = {}, l = !1, u = 0; u < a.length; u++) {
			var c = a[u], d = e.pstyle(c), h = t[c];
			if (h) {
				var f = h.prev, p = null != h.next ? h.next : d, g = !1, v = void 0;
				f && (I(f.pfValue) && I(p.pfValue) ? (g = p.pfValue - f.pfValue, v = f.pfValue + 1e-6 * g) : I(f.value) && I(p.value) ? (g = p.value - f.value, v = f.value + 1e-6 * g) : A(f.value) && A(p.value) && (g = f.value[0] !== p.value[0] || f.value[1] !== p.value[1] || f.value[2] !== p.value[2], v = f.strValue), g && (s[c] = p.strValue, this.applyBypass(e, c, v), l = !0));
			}
		}
		if (!l) return;
		r.transitioning = !0, new ah(function(t) {
			o > 0 ? e.delayAnimation(o).play().promise().then(t) : t();
		}).then(function() {
			return e.animation({
				style: s,
				duration: i,
				easing: e.pstyle("transition-timing-function").value,
				queue: !1
			}).play().promise();
		}).then(function() {
			n.removeBypasses(e, a), e.emitAndNotify("style"), r.transitioning = !1;
		});
	} else r.transitioning && (this.removeBypasses(e, a), e.emitAndNotify("style"), r.transitioning = !1);
}, l1.checkTrigger = function(e, t, n, r, a, i) {
	var o = this.properties[t], s = a(o);
	e.removed() || null != s && s(n, r, e) && i(o);
}, l1.checkZOrderTrigger = function(e, t, n, r) {
	var a = this;
	this.checkTrigger(e, t, n, r, function(e) {
		return e.triggersZOrder;
	}, function() {
		a._private.cy.notify("zorder", e);
	});
}, l1.checkBoundsTrigger = function(e, t, n, r) {
	this.checkTrigger(e, t, n, r, function(e) {
		return e.triggersBounds;
	}, function(t) {
		e.dirtyCompoundBoundsCache(), e.dirtyBoundingBoxCache();
	});
}, l1.checkConnectedEdgesBoundsTrigger = function(e, t, n, r) {
	this.checkTrigger(e, t, n, r, function(e) {
		return e.triggersBoundsOfConnectedEdges;
	}, function(t) {
		e.connectedEdges().forEach(function(e) {
			e.dirtyBoundingBoxCache();
		});
	});
}, l1.checkParallelEdgesBoundsTrigger = function(e, t, n, r) {
	this.checkTrigger(e, t, n, r, function(e) {
		return e.triggersBoundsOfParallelEdges;
	}, function(t) {
		e.parallelEdges().forEach(function(e) {
			e.dirtyBoundingBoxCache();
		});
	});
}, l1.checkTriggers = function(e, t, n, r) {
	e.dirtyStyleCache(), this.checkZOrderTrigger(e, t, n, r), this.checkBoundsTrigger(e, t, n, r), this.checkConnectedEdgesBoundsTrigger(e, t, n, r), this.checkParallelEdgesBoundsTrigger(e, t, n, r);
};
var l2 = {};
l2.applyBypass = function(e, t, n, r) {
	var a = [];
	if ("*" === t || "**" === t) {
		if (void 0 !== n) for (var i = 0; i < this.properties.length; i++) {
			var o = this.properties[i].name, s = this.parse(o, n, !0);
			s && a.push(s);
		}
	} else if (_(t)) {
		var l = this.parse(t, n, !0);
		l && a.push(l);
	} else {
		if (!M(t)) return !1;
		r = n;
		for (var u = Object.keys(t), c = 0; c < u.length; c++) {
			var d = u[c], h = t[d];
			if (void 0 === h && (h = t[Z(d)]), void 0 !== h) {
				var f = this.parse(d, h, !0);
				f && a.push(f);
			}
		}
	}
	if (0 === a.length) return !1;
	for (var p = !1, g = 0; g < e.length; g++) {
		for (var v = e[g], y = {}, m = void 0, x = 0; x < a.length; x++) {
			var w = a[x];
			if (r) {
				var E = v.pstyle(w.name);
				m = y[w.name] = { prev: E };
			}
			p = this.applyParsedProperty(v, e8(w)) || p, r && (m.next = v.pstyle(w.name));
		}
		p && this.updateStyleHints(v), r && this.updateTransitions(v, y, !0);
	}
	return p;
}, l2.overrideBypass = function(e, t, n) {
	t = G(t);
	for (var r = 0; r < e.length; r++) {
		var a = e[r], i = a._private.style[t], o = this.properties[t].type, s = o.color, l = o.mutiple, u = i ? null != i.pfValue ? i.pfValue : i.value : null;
		i && i.bypass ? (i.value = n, null != i.pfValue && (i.pfValue = n), s ? i.strValue = "rgb(" + n.join(",") + ")" : l ? i.strValue = n.join(" ") : i.strValue = "" + n, this.updateStyleHints(a)) : this.applyBypass(a, t, n), this.checkTriggers(a, t, u, n);
	}
}, l2.removeAllBypasses = function(e, t) {
	return this.removeBypasses(e, this.propertyNames, t);
}, l2.removeBypasses = function(e, t, n) {
	for (var r = 0; r < e.length; r++) {
		for (var a = e[r], i = {}, o = 0; o < t.length; o++) {
			var s = t[o], l = this.properties[s], u = a.pstyle(l.name);
			if (!(!u || !u.bypass)) {
				var c = this.parse(s, "", !0), d = i[l.name] = { prev: u };
				this.applyParsedProperty(a, c), d.next = a.pstyle(l.name);
			}
		}
		this.updateStyleHints(a), n && this.updateTransitions(a, i, !0);
	}
};
var l5 = {};
l5.getEmSizeInPixels = function() {
	var e = this.containerCss("font-size");
	return null != e ? parseFloat(e) : 1;
}, l5.containerCss = function(e) {
	var t = this._private.cy, n = t.container(), r = t.window();
	if (r && n && r.getComputedStyle) return r.getComputedStyle(n).getPropertyValue(e);
};
var l3 = {};
l3.getRenderedStyle = function(e, t) {
	return t ? this.getStylePropertyValue(e, t, !0) : this.getRawStyle(e, !0);
}, l3.getRawStyle = function(e, t) {
	if (e = e[0]) {
		for (var n = {}, r = 0; r < this.properties.length; r++) {
			var a = this.properties[r], i = this.getStylePropertyValue(e, a.name, t);
			null != i && (n[a.name] = i, n[Z(a.name)] = i);
		}
		return n;
	}
}, l3.getIndexedStyle = function(e, t, n, r) {
	return e.pstyle(t)[n][r] ?? e.cy().style().getDefaultProperty(t)[n][0];
}, l3.getStylePropertyValue = function(t, n, r) {
	if (t = t[0]) {
		var a = this.properties[n];
		a.alias && (a = a.pointsTo);
		var i = a.type, o = t.pstyle(a.name);
		if (o) {
			var s = o.value, l = o.units, u = o.strValue;
			if (r && i.number && null != s && I(s)) {
				var c = t.cy().zoom(), d = e(function(e) {
					return e * c;
				}, "getRenderedValue"), h = e(function(e, t) {
					return d(e) + t;
				}, "getValueStringWithUnits"), f = A(s);
				return (f ? l.every(function(e) {
					return null != e;
				}) : null != l) ? f ? s.map(function(e, t) {
					return h(e, l[t]);
				}).join(" ") : h(s, l) : f ? s.map(function(e) {
					return _(e) ? e : "" + d(e);
				}).join(" ") : "" + d(s);
			}
			if (null != u) return u;
		}
		return null;
	}
}, l3.getAnimationStartStyle = function(e, t) {
	for (var n = {}, r = 0; r < t.length; r++) {
		var a = t[r].name, i = e.pstyle(a);
		void 0 !== i && (i = M(i) ? this.parse(a, i.strValue) : this.parse(a, i)), i && (n[a] = i);
	}
	return n;
}, l3.getPropsList = function(e) {
	var t = [], n = this.properties;
	if (e) for (var r = Object.keys(e), a = 0; a < r.length; a++) {
		var i = r[a], o = e[i], s = n[i] || n[G(i)], l = this.parse(s.name, o);
		l && t.push(l);
	}
	return t;
}, l3.getNonDefaultPropertiesHash = function(e, t, n) {
	var r, a, i, o, s, l, u = n.slice();
	for (s = 0; s < t.length; s++) if (r = t[s], null != (a = e.pstyle(r, !1))) if (null != a.pfValue) u[0] = eO(o, u[0]), u[1] = eF(o, u[1]);
	else for (i = a.strValue, l = 0; l < i.length; l++) o = i.charCodeAt(l), u[0] = eO(o, u[0]), u[1] = eF(o, u[1]);
	return u;
}, l3.getPropertiesHash = l3.getNonDefaultPropertiesHash;
var l4 = {};
l4.appendFromJson = function(e) {
	for (var t = 0; t < e.length; t++) {
		var n = e[t], r = n.selector, a = n.style || n.css, i = Object.keys(a);
		this.selector(r);
		for (var o = 0; o < i.length; o++) {
			var s = i[o], l = a[s];
			this.css(s, l);
		}
	}
	return this;
}, l4.fromJson = function(e) {
	return this.resetToDefault(), this.appendFromJson(e), this;
}, l4.json = function() {
	for (var e = [], t = this.defaultLength; t < this.length; t++) {
		for (var n = this[t], r = n.selector, a = n.properties, i = {}, o = 0; o < a.length; o++) {
			var s = a[o];
			i[s.name] = s.strValue;
		}
		e.push({
			selector: r ? r.toString() : "core",
			style: i
		});
	}
	return e;
};
var l9 = {};
l9.appendFromString = function(t) {
	var n, r, a, i = "" + t;
	function o() {
		i = i.length > n.length ? i.substr(n.length) : "";
	}
	function s() {
		r = r.length > a.length ? r.substr(a.length) : "";
	}
	for (i = i.replace(/[/][*](\s|.)+?[*][/]/g, ""), e(o, "removeSelAndBlockFromRemaining"), e(s, "removePropAndValFromRem"); !i.match(/^\s*$/);) {
		var l = i.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
		if (!l) {
			e9("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + i);
			break;
		}
		n = l[0];
		var u = l[1];
		if ("core" !== u && new ss(u).invalid) {
			e9("Skipping parsing of block: Invalid selector found in string stylesheet: " + u), o();
			continue;
		}
		var c = l[2], d = !1;
		r = c;
		for (var h = []; !r.match(/^\s*$/);) {
			var f = r.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
			if (!f) {
				e9("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + c), d = !0;
				break;
			}
			a = f[0];
			var p = f[1], g = f[2];
			if (!this.properties[p]) {
				e9("Skipping property: Invalid property name in: " + a), s();
				continue;
			}
			if (!this.parse(p, g)) {
				e9("Skipping property: Invalid property definition in: " + a), s();
				continue;
			}
			h.push({
				name: p,
				val: g
			}), s();
		}
		if (d) {
			o();
			break;
		}
		this.selector(u);
		for (var v = 0; v < h.length; v++) {
			var y = h[v];
			this.css(y.name, y.val);
		}
		o();
	}
	return this;
}, l9.fromString = function(e) {
	return this.resetToDefault(), this.appendFromString(e), this;
};
var l6 = {};
(function() {
	var t = e(function(e) {
		return "^" + e + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
	}, "data"), n = e(function(e) {
		var t = ee + "|\\w+|" + en + "|" + ea + "|\\#[0-9a-fA-F]{3}|\\#[0-9a-fA-F]{6}";
		return "^" + e + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + ee + ")\\s*\\,\\s*(" + ee + ")\\s*,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\)$";
	}, "mapData"), r = [
		"^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$",
		"^(none)$",
		"^(.+)$"
	];
	l6.types = {
		time: {
			number: !0,
			min: 0,
			units: "s|ms",
			implicitUnits: "ms"
		},
		percent: {
			number: !0,
			min: 0,
			max: 100,
			units: "%",
			implicitUnits: "%"
		},
		percentages: {
			number: !0,
			min: 0,
			max: 100,
			units: "%",
			implicitUnits: "%",
			multiple: !0
		},
		zeroOneNumber: {
			number: !0,
			min: 0,
			max: 1,
			unitless: !0
		},
		zeroOneNumbers: {
			number: !0,
			min: 0,
			max: 1,
			unitless: !0,
			multiple: !0
		},
		nOneOneNumber: {
			number: !0,
			min: -1,
			max: 1,
			unitless: !0
		},
		nonNegativeInt: {
			number: !0,
			min: 0,
			integer: !0,
			unitless: !0
		},
		nonNegativeNumber: {
			number: !0,
			min: 0,
			unitless: !0
		},
		position: { enums: ["parent", "origin"] },
		nodeSize: {
			number: !0,
			min: 0,
			enums: ["label"]
		},
		number: {
			number: !0,
			unitless: !0
		},
		numbers: {
			number: !0,
			unitless: !0,
			multiple: !0
		},
		positiveNumber: {
			number: !0,
			unitless: !0,
			min: 0,
			strictMin: !0
		},
		size: {
			number: !0,
			min: 0
		},
		bidirectionalSize: { number: !0 },
		bidirectionalSizeMaybePercent: {
			number: !0,
			allowPercent: !0
		},
		bidirectionalSizes: {
			number: !0,
			multiple: !0
		},
		sizeMaybePercent: {
			number: !0,
			min: 0,
			allowPercent: !0
		},
		axisDirection: { enums: [
			"horizontal",
			"leftward",
			"rightward",
			"vertical",
			"upward",
			"downward",
			"auto"
		] },
		axisDirectionExplicit: { enums: [
			"leftward",
			"rightward",
			"upward",
			"downward"
		] },
		axisDirectionPrimary: { enums: ["horizontal", "vertical"] },
		paddingRelativeTo: { enums: [
			"width",
			"height",
			"average",
			"min",
			"max"
		] },
		bgWH: {
			number: !0,
			min: 0,
			allowPercent: !0,
			enums: ["auto"],
			multiple: !0
		},
		bgPos: {
			number: !0,
			allowPercent: !0,
			multiple: !0
		},
		bgRelativeTo: {
			enums: ["inner", "include-padding"],
			multiple: !0
		},
		bgRepeat: {
			enums: [
				"repeat",
				"repeat-x",
				"repeat-y",
				"no-repeat"
			],
			multiple: !0
		},
		bgFit: {
			enums: [
				"none",
				"contain",
				"cover"
			],
			multiple: !0
		},
		bgCrossOrigin: {
			enums: [
				"anonymous",
				"use-credentials",
				"null"
			],
			multiple: !0
		},
		bgClip: {
			enums: ["none", "node"],
			multiple: !0
		},
		bgContainment: {
			enums: ["inside", "over"],
			multiple: !0
		},
		boxSelection: { enums: [
			"contain",
			"overlap",
			"none"
		] },
		color: { color: !0 },
		colors: {
			color: !0,
			multiple: !0
		},
		fill: { enums: [
			"solid",
			"linear-gradient",
			"radial-gradient"
		] },
		bool: { enums: ["yes", "no"] },
		bools: {
			enums: ["yes", "no"],
			multiple: !0
		},
		lineStyle: { enums: [
			"solid",
			"dotted",
			"dashed"
		] },
		lineCap: { enums: [
			"butt",
			"round",
			"square"
		] },
		linePosition: { enums: [
			"center",
			"inside",
			"outside"
		] },
		lineJoin: { enums: [
			"round",
			"bevel",
			"miter"
		] },
		borderStyle: { enums: [
			"solid",
			"dotted",
			"dashed",
			"double"
		] },
		curveStyle: { enums: [
			"bezier",
			"unbundled-bezier",
			"haystack",
			"segments",
			"straight",
			"straight-triangle",
			"taxi",
			"round-segments",
			"round-taxi"
		] },
		radiusType: {
			enums: ["arc-radius", "influence-radius"],
			multiple: !0
		},
		fontFamily: { regex: "^([\\w- \\\"]+(?:\\s*,\\s*[\\w- \\\"]+)*)$" },
		fontStyle: { enums: [
			"italic",
			"normal",
			"oblique"
		] },
		fontWeight: { enums: [
			"normal",
			"bold",
			"bolder",
			"lighter",
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"800",
			"900",
			100,
			200,
			300,
			400,
			500,
			600,
			700,
			800,
			900
		] },
		textDecoration: { enums: [
			"none",
			"underline",
			"overline",
			"line-through"
		] },
		textTransform: { enums: [
			"none",
			"uppercase",
			"lowercase"
		] },
		textWrap: { enums: [
			"none",
			"wrap",
			"ellipsis"
		] },
		textOverflowWrap: { enums: ["whitespace", "anywhere"] },
		textBackgroundShape: { enums: [
			"rectangle",
			"roundrectangle",
			"round-rectangle",
			"circle"
		] },
		nodeShape: { enums: [
			"rectangle",
			"roundrectangle",
			"round-rectangle",
			"cutrectangle",
			"cut-rectangle",
			"bottomroundrectangle",
			"bottom-round-rectangle",
			"barrel",
			"ellipse",
			"triangle",
			"round-triangle",
			"square",
			"pentagon",
			"round-pentagon",
			"hexagon",
			"round-hexagon",
			"concavehexagon",
			"concave-hexagon",
			"heptagon",
			"round-heptagon",
			"octagon",
			"round-octagon",
			"tag",
			"round-tag",
			"star",
			"diamond",
			"round-diamond",
			"vee",
			"rhomboid",
			"right-rhomboid",
			"polygon"
		] },
		overlayShape: { enums: [
			"roundrectangle",
			"round-rectangle",
			"ellipse"
		] },
		cornerRadius: {
			number: !0,
			min: 0,
			units: "px|em",
			implicitUnits: "px",
			enums: ["auto"]
		},
		compoundIncludeLabels: { enums: ["include", "exclude"] },
		arrowShape: { enums: [
			"tee",
			"triangle",
			"triangle-tee",
			"circle-triangle",
			"triangle-cross",
			"triangle-backcurve",
			"vee",
			"square",
			"circle",
			"diamond",
			"chevron",
			"none"
		] },
		arrowFill: { enums: ["filled", "hollow"] },
		arrowWidth: {
			number: !0,
			units: "%|px|em",
			implicitUnits: "px",
			enums: ["match-line"]
		},
		display: { enums: ["element", "none"] },
		visibility: { enums: ["hidden", "visible"] },
		zCompoundDepth: { enums: [
			"bottom",
			"orphan",
			"auto",
			"top"
		] },
		zIndexCompare: { enums: ["auto", "manual"] },
		valign: { enums: [
			"top",
			"center",
			"bottom"
		] },
		halign: { enums: [
			"left",
			"center",
			"right"
		] },
		justification: { enums: [
			"left",
			"center",
			"right",
			"auto"
		] },
		text: { string: !0 },
		data: {
			mapping: !0,
			regex: t("data")
		},
		layoutData: {
			mapping: !0,
			regex: t("layoutData")
		},
		scratch: {
			mapping: !0,
			regex: t("scratch")
		},
		mapData: {
			mapping: !0,
			regex: n("mapData")
		},
		mapLayoutData: {
			mapping: !0,
			regex: n("mapLayoutData")
		},
		mapScratch: {
			mapping: !0,
			regex: n("mapScratch")
		},
		fn: {
			mapping: !0,
			fn: !0
		},
		url: {
			regexes: r,
			singleRegexMatchValue: !0
		},
		urls: {
			regexes: r,
			singleRegexMatchValue: !0,
			multiple: !0
		},
		propList: { propList: !0 },
		angle: {
			number: !0,
			units: "deg|rad",
			implicitUnits: "rad"
		},
		textRotation: {
			number: !0,
			units: "deg|rad",
			implicitUnits: "rad",
			enums: ["none", "autorotate"]
		},
		polygonPointList: {
			number: !0,
			multiple: !0,
			evenMultiple: !0,
			min: -1,
			max: 1,
			unitless: !0
		},
		edgeDistances: { enums: [
			"intersection",
			"node-position",
			"endpoints"
		] },
		edgeEndpoint: {
			number: !0,
			multiple: !0,
			units: "%|px|em|deg|rad",
			implicitUnits: "px",
			enums: [
				"inside-to-node",
				"outside-to-node",
				"outside-to-node-or-label",
				"outside-to-line",
				"outside-to-line-or-label"
			],
			singleEnum: !0,
			validate: e(function(e, t) {
				switch (e.length) {
					case 2: return "deg" !== t[0] && "rad" !== t[0] && "deg" !== t[1] && "rad" !== t[1];
					case 1: return _(e[0]) || "deg" === t[0] || "rad" === t[0];
					default: return !1;
				}
			}, "validate")
		},
		easing: {
			regexes: ["^(spring)\\s*\\(\\s*(" + ee + ")\\s*,\\s*(" + ee + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + ee + ")\\s*,\\s*(" + ee + ")\\s*,\\s*(" + ee + ")\\s*,\\s*(" + ee + ")\\s*\\)$"],
			enums: [
				"linear",
				"ease",
				"ease-in",
				"ease-out",
				"ease-in-out",
				"ease-in-sine",
				"ease-out-sine",
				"ease-in-out-sine",
				"ease-in-quad",
				"ease-out-quad",
				"ease-in-out-quad",
				"ease-in-cubic",
				"ease-out-cubic",
				"ease-in-out-cubic",
				"ease-in-quart",
				"ease-out-quart",
				"ease-in-out-quart",
				"ease-in-quint",
				"ease-out-quint",
				"ease-in-out-quint",
				"ease-in-expo",
				"ease-out-expo",
				"ease-in-out-expo",
				"ease-in-circ",
				"ease-out-circ",
				"ease-in-out-circ"
			]
		},
		gradientDirection: { enums: [
			"to-bottom",
			"to-top",
			"to-left",
			"to-right",
			"to-bottom-right",
			"to-bottom-left",
			"to-top-right",
			"to-top-left",
			"to-right-bottom",
			"to-left-bottom",
			"to-right-top",
			"to-left-top"
		] },
		boundsExpansion: {
			number: !0,
			multiple: !0,
			min: 0,
			validate: e(function(e) {
				var t = e.length;
				return 1 === t || 2 === t || 4 === t;
			}, "validate")
		}
	};
	var a = {
		zeroNonZero: e(function(e, t) {
			return (null == e || null == t) && e !== t || 0 == e && 0 != t || 0 != e && 0 == t;
		}, "zeroNonZero"),
		any: e(function(e, t) {
			return e != t;
		}, "any"),
		emptyNonEmpty: e(function(e, t) {
			var n = X(e), r = X(t);
			return n && !r || !n && r;
		}, "emptyNonEmpty")
	}, i = l6.types, o = [
		{
			name: "label",
			type: i.text,
			triggersBounds: a.any,
			triggersZOrder: a.emptyNonEmpty
		},
		{
			name: "text-rotation",
			type: i.textRotation,
			triggersBounds: a.any
		},
		{
			name: "text-margin-x",
			type: i.bidirectionalSize,
			triggersBounds: a.any
		},
		{
			name: "text-margin-y",
			type: i.bidirectionalSize,
			triggersBounds: a.any
		}
	], s = [
		{
			name: "source-label",
			type: i.text,
			triggersBounds: a.any
		},
		{
			name: "source-text-rotation",
			type: i.textRotation,
			triggersBounds: a.any
		},
		{
			name: "source-text-margin-x",
			type: i.bidirectionalSize,
			triggersBounds: a.any
		},
		{
			name: "source-text-margin-y",
			type: i.bidirectionalSize,
			triggersBounds: a.any
		},
		{
			name: "source-text-offset",
			type: i.size,
			triggersBounds: a.any
		}
	], l = [
		{
			name: "target-label",
			type: i.text,
			triggersBounds: a.any
		},
		{
			name: "target-text-rotation",
			type: i.textRotation,
			triggersBounds: a.any
		},
		{
			name: "target-text-margin-x",
			type: i.bidirectionalSize,
			triggersBounds: a.any
		},
		{
			name: "target-text-margin-y",
			type: i.bidirectionalSize,
			triggersBounds: a.any
		},
		{
			name: "target-text-offset",
			type: i.size,
			triggersBounds: a.any
		}
	], u = [
		{
			name: "font-family",
			type: i.fontFamily,
			triggersBounds: a.any
		},
		{
			name: "font-style",
			type: i.fontStyle,
			triggersBounds: a.any
		},
		{
			name: "font-weight",
			type: i.fontWeight,
			triggersBounds: a.any
		},
		{
			name: "font-size",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "text-transform",
			type: i.textTransform,
			triggersBounds: a.any
		},
		{
			name: "text-wrap",
			type: i.textWrap,
			triggersBounds: a.any
		},
		{
			name: "text-overflow-wrap",
			type: i.textOverflowWrap,
			triggersBounds: a.any
		},
		{
			name: "text-max-width",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "text-outline-width",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "line-height",
			type: i.positiveNumber,
			triggersBounds: a.any
		}
	], c = [
		{
			name: "text-valign",
			type: i.valign,
			triggersBounds: a.any
		},
		{
			name: "text-halign",
			type: i.halign,
			triggersBounds: a.any
		},
		{
			name: "color",
			type: i.color
		},
		{
			name: "text-outline-color",
			type: i.color
		},
		{
			name: "text-outline-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "text-background-color",
			type: i.color
		},
		{
			name: "text-background-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "text-background-padding",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "text-border-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "text-border-color",
			type: i.color
		},
		{
			name: "text-border-width",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "text-border-style",
			type: i.borderStyle,
			triggersBounds: a.any
		},
		{
			name: "text-background-shape",
			type: i.textBackgroundShape,
			triggersBounds: a.any
		},
		{
			name: "text-justification",
			type: i.justification
		},
		{
			name: "box-select-labels",
			type: i.bool,
			triggersBounds: a.any
		}
	], d = [
		{
			name: "events",
			type: i.bool,
			triggersZOrder: a.any
		},
		{
			name: "text-events",
			type: i.bool,
			triggersZOrder: a.any
		},
		{
			name: "box-selection",
			type: i.boxSelection,
			triggersZOrder: a.any
		}
	], h = [
		{
			name: "display",
			type: i.display,
			triggersZOrder: a.any,
			triggersBounds: a.any,
			triggersBoundsOfConnectedEdges: a.any,
			triggersBoundsOfParallelEdges: e(function(e, t, n) {
				return e !== t && "bezier" === n.pstyle("curve-style").value;
			}, "triggersBoundsOfParallelEdges")
		},
		{
			name: "visibility",
			type: i.visibility,
			triggersZOrder: a.any
		},
		{
			name: "opacity",
			type: i.zeroOneNumber,
			triggersZOrder: a.zeroNonZero
		},
		{
			name: "text-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "min-zoomed-font-size",
			type: i.size
		},
		{
			name: "z-compound-depth",
			type: i.zCompoundDepth,
			triggersZOrder: a.any
		},
		{
			name: "z-index-compare",
			type: i.zIndexCompare,
			triggersZOrder: a.any
		},
		{
			name: "z-index",
			type: i.number,
			triggersZOrder: a.any
		}
	], f = [
		{
			name: "overlay-padding",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "overlay-color",
			type: i.color
		},
		{
			name: "overlay-opacity",
			type: i.zeroOneNumber,
			triggersBounds: a.zeroNonZero
		},
		{
			name: "overlay-shape",
			type: i.overlayShape,
			triggersBounds: a.any
		},
		{
			name: "overlay-corner-radius",
			type: i.cornerRadius
		}
	], p = [
		{
			name: "underlay-padding",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "underlay-color",
			type: i.color
		},
		{
			name: "underlay-opacity",
			type: i.zeroOneNumber,
			triggersBounds: a.zeroNonZero
		},
		{
			name: "underlay-shape",
			type: i.overlayShape,
			triggersBounds: a.any
		},
		{
			name: "underlay-corner-radius",
			type: i.cornerRadius
		}
	], g = [
		{
			name: "transition-property",
			type: i.propList
		},
		{
			name: "transition-duration",
			type: i.time
		},
		{
			name: "transition-delay",
			type: i.time
		},
		{
			name: "transition-timing-function",
			type: i.easing
		}
	], v = e(function(e, t) {
		return "label" === t.value ? -e.poolIndex() : t.pfValue;
	}, "nodeSizeHashOverride"), y = [
		{
			name: "height",
			type: i.nodeSize,
			triggersBounds: a.any,
			hashOverride: v
		},
		{
			name: "width",
			type: i.nodeSize,
			triggersBounds: a.any,
			hashOverride: v
		},
		{
			name: "shape",
			type: i.nodeShape,
			triggersBounds: a.any
		},
		{
			name: "shape-polygon-points",
			type: i.polygonPointList,
			triggersBounds: a.any
		},
		{
			name: "corner-radius",
			type: i.cornerRadius
		},
		{
			name: "background-color",
			type: i.color
		},
		{
			name: "background-fill",
			type: i.fill
		},
		{
			name: "background-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "background-blacken",
			type: i.nOneOneNumber
		},
		{
			name: "background-gradient-stop-colors",
			type: i.colors
		},
		{
			name: "background-gradient-stop-positions",
			type: i.percentages
		},
		{
			name: "background-gradient-direction",
			type: i.gradientDirection
		},
		{
			name: "padding",
			type: i.sizeMaybePercent,
			triggersBounds: a.any
		},
		{
			name: "padding-relative-to",
			type: i.paddingRelativeTo,
			triggersBounds: a.any
		},
		{
			name: "bounds-expansion",
			type: i.boundsExpansion,
			triggersBounds: a.any
		}
	], m = [
		{
			name: "border-color",
			type: i.color
		},
		{
			name: "border-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "border-width",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "border-style",
			type: i.borderStyle
		},
		{
			name: "border-cap",
			type: i.lineCap
		},
		{
			name: "border-join",
			type: i.lineJoin
		},
		{
			name: "border-dash-pattern",
			type: i.numbers
		},
		{
			name: "border-dash-offset",
			type: i.number
		},
		{
			name: "border-position",
			type: i.linePosition
		}
	], x = [
		{
			name: "outline-color",
			type: i.color
		},
		{
			name: "outline-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "outline-width",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "outline-style",
			type: i.borderStyle
		},
		{
			name: "outline-offset",
			type: i.size,
			triggersBounds: a.any
		}
	], w = [
		{
			name: "background-image",
			type: i.urls
		},
		{
			name: "background-image-crossorigin",
			type: i.bgCrossOrigin
		},
		{
			name: "background-image-opacity",
			type: i.zeroOneNumbers
		},
		{
			name: "background-image-containment",
			type: i.bgContainment
		},
		{
			name: "background-image-smoothing",
			type: i.bools
		},
		{
			name: "background-position-x",
			type: i.bgPos
		},
		{
			name: "background-position-y",
			type: i.bgPos
		},
		{
			name: "background-width-relative-to",
			type: i.bgRelativeTo
		},
		{
			name: "background-height-relative-to",
			type: i.bgRelativeTo
		},
		{
			name: "background-repeat",
			type: i.bgRepeat
		},
		{
			name: "background-fit",
			type: i.bgFit
		},
		{
			name: "background-clip",
			type: i.bgClip
		},
		{
			name: "background-width",
			type: i.bgWH
		},
		{
			name: "background-height",
			type: i.bgWH
		},
		{
			name: "background-offset-x",
			type: i.bgPos
		},
		{
			name: "background-offset-y",
			type: i.bgPos
		}
	], E = [
		{
			name: "position",
			type: i.position,
			triggersBounds: a.any
		},
		{
			name: "compound-sizing-wrt-labels",
			type: i.compoundIncludeLabels,
			triggersBounds: a.any
		},
		{
			name: "min-width",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "min-width-bias-left",
			type: i.sizeMaybePercent,
			triggersBounds: a.any
		},
		{
			name: "min-width-bias-right",
			type: i.sizeMaybePercent,
			triggersBounds: a.any
		},
		{
			name: "min-height",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "min-height-bias-top",
			type: i.sizeMaybePercent,
			triggersBounds: a.any
		},
		{
			name: "min-height-bias-bottom",
			type: i.sizeMaybePercent,
			triggersBounds: a.any
		}
	], C = [
		{
			name: "line-style",
			type: i.lineStyle
		},
		{
			name: "line-color",
			type: i.color
		},
		{
			name: "line-fill",
			type: i.fill
		},
		{
			name: "line-cap",
			type: i.lineCap
		},
		{
			name: "line-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "line-dash-pattern",
			type: i.numbers
		},
		{
			name: "line-dash-offset",
			type: i.number
		},
		{
			name: "line-outline-width",
			type: i.size
		},
		{
			name: "line-outline-color",
			type: i.color
		},
		{
			name: "line-gradient-stop-colors",
			type: i.colors
		},
		{
			name: "line-gradient-stop-positions",
			type: i.percentages
		},
		{
			name: "curve-style",
			type: i.curveStyle,
			triggersBounds: a.any,
			triggersBoundsOfParallelEdges: e(function(e, t) {
				return e !== t && ("bezier" === e || "bezier" === t);
			}, "triggersBoundsOfParallelEdges")
		},
		{
			name: "haystack-radius",
			type: i.zeroOneNumber,
			triggersBounds: a.any
		},
		{
			name: "source-endpoint",
			type: i.edgeEndpoint,
			triggersBounds: a.any
		},
		{
			name: "target-endpoint",
			type: i.edgeEndpoint,
			triggersBounds: a.any
		},
		{
			name: "control-point-step-size",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "control-point-distances",
			type: i.bidirectionalSizes,
			triggersBounds: a.any
		},
		{
			name: "control-point-weights",
			type: i.numbers,
			triggersBounds: a.any
		},
		{
			name: "segment-distances",
			type: i.bidirectionalSizes,
			triggersBounds: a.any
		},
		{
			name: "segment-weights",
			type: i.numbers,
			triggersBounds: a.any
		},
		{
			name: "segment-radii",
			type: i.numbers,
			triggersBounds: a.any
		},
		{
			name: "radius-type",
			type: i.radiusType,
			triggersBounds: a.any
		},
		{
			name: "taxi-turn",
			type: i.bidirectionalSizeMaybePercent,
			triggersBounds: a.any
		},
		{
			name: "taxi-turn-min-distance",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "taxi-direction",
			type: i.axisDirection,
			triggersBounds: a.any
		},
		{
			name: "taxi-radius",
			type: i.number,
			triggersBounds: a.any
		},
		{
			name: "edge-distances",
			type: i.edgeDistances,
			triggersBounds: a.any
		},
		{
			name: "arrow-scale",
			type: i.positiveNumber,
			triggersBounds: a.any
		},
		{
			name: "loop-direction",
			type: i.angle,
			triggersBounds: a.any
		},
		{
			name: "loop-sweep",
			type: i.angle,
			triggersBounds: a.any
		},
		{
			name: "source-distance-from-node",
			type: i.size,
			triggersBounds: a.any
		},
		{
			name: "target-distance-from-node",
			type: i.size,
			triggersBounds: a.any
		}
	], T = [
		{
			name: "ghost",
			type: i.bool,
			triggersBounds: a.any
		},
		{
			name: "ghost-offset-x",
			type: i.bidirectionalSize,
			triggersBounds: a.any
		},
		{
			name: "ghost-offset-y",
			type: i.bidirectionalSize,
			triggersBounds: a.any
		},
		{
			name: "ghost-opacity",
			type: i.zeroOneNumber
		}
	], k = [
		{
			name: "selection-box-color",
			type: i.color
		},
		{
			name: "selection-box-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "selection-box-border-color",
			type: i.color
		},
		{
			name: "selection-box-border-width",
			type: i.size
		},
		{
			name: "active-bg-color",
			type: i.color
		},
		{
			name: "active-bg-opacity",
			type: i.zeroOneNumber
		},
		{
			name: "active-bg-size",
			type: i.size
		},
		{
			name: "outside-texture-bg-color",
			type: i.color
		},
		{
			name: "outside-texture-bg-opacity",
			type: i.zeroOneNumber
		}
	], S = [];
	l6.pieBackgroundN = 16, S.push({
		name: "pie-size",
		type: i.sizeMaybePercent
	}), S.push({
		name: "pie-hole",
		type: i.sizeMaybePercent
	}), S.push({
		name: "pie-start-angle",
		type: i.angle
	});
	for (var P = 1; P <= l6.pieBackgroundN; P++) S.push({
		name: "pie-" + P + "-background-color",
		type: i.color
	}), S.push({
		name: "pie-" + P + "-background-size",
		type: i.percent
	}), S.push({
		name: "pie-" + P + "-background-opacity",
		type: i.zeroOneNumber
	});
	var B = [];
	l6.stripeBackgroundN = 16, B.push({
		name: "stripe-size",
		type: i.sizeMaybePercent
	}), B.push({
		name: "stripe-direction",
		type: i.axisDirectionPrimary
	});
	for (var D = 1; D <= l6.stripeBackgroundN; D++) B.push({
		name: "stripe-" + D + "-background-color",
		type: i.color
	}), B.push({
		name: "stripe-" + D + "-background-size",
		type: i.percent
	}), B.push({
		name: "stripe-" + D + "-background-opacity",
		type: i.zeroOneNumber
	});
	var A = [], M = l6.arrowPrefixes = [
		"source",
		"mid-source",
		"target",
		"mid-target"
	];
	[
		{
			name: "arrow-shape",
			type: i.arrowShape,
			triggersBounds: a.any
		},
		{
			name: "arrow-color",
			type: i.color
		},
		{
			name: "arrow-fill",
			type: i.arrowFill
		},
		{
			name: "arrow-width",
			type: i.arrowWidth
		}
	].forEach(function(e) {
		M.forEach(function(t) {
			var n = t + "-" + e.name, r = e.type, a = e.triggersBounds;
			A.push({
				name: n,
				type: r,
				triggersBounds: a
			});
		});
	}, {});
	var R = l6.properties = [].concat(d, g, h, f, p, T, c, u, o, s, l, y, m, x, w, S, B, E, C, A, k), I = l6.propertyGroups = {
		behavior: d,
		transition: g,
		visibility: h,
		overlay: f,
		underlay: p,
		ghost: T,
		commonLabel: c,
		labelDimensions: u,
		mainLabel: o,
		sourceLabel: s,
		targetLabel: l,
		nodeBody: y,
		nodeBorder: m,
		nodeOutline: x,
		backgroundImage: w,
		pie: S,
		stripe: B,
		compound: E,
		edgeLine: C,
		edgeArrow: A,
		core: k
	}, L = l6.propertyGroupNames = {};
	(l6.propertyGroupKeys = Object.keys(I)).forEach(function(e) {
		L[e] = I[e].map(function(e) {
			return e.name;
		}), I[e].forEach(function(t) {
			return t.groupKey = e;
		});
	});
	var N = l6.aliases = [
		{
			name: "content",
			pointsTo: "label"
		},
		{
			name: "control-point-distance",
			pointsTo: "control-point-distances"
		},
		{
			name: "control-point-weight",
			pointsTo: "control-point-weights"
		},
		{
			name: "segment-distance",
			pointsTo: "segment-distances"
		},
		{
			name: "segment-weight",
			pointsTo: "segment-weights"
		},
		{
			name: "segment-radius",
			pointsTo: "segment-radii"
		},
		{
			name: "edge-text-rotation",
			pointsTo: "text-rotation"
		},
		{
			name: "padding-left",
			pointsTo: "padding"
		},
		{
			name: "padding-right",
			pointsTo: "padding"
		},
		{
			name: "padding-top",
			pointsTo: "padding"
		},
		{
			name: "padding-bottom",
			pointsTo: "padding"
		}
	];
	l6.propertyNames = R.map(function(e) {
		return e.name;
	});
	for (var z = 0; z < R.length; z++) {
		var O = R[z];
		R[O.name] = O;
	}
	for (var F = 0; F < N.length; F++) {
		var V = N[F], q = R[V.pointsTo], j = {
			name: V.name,
			alias: !0,
			pointsTo: q
		};
		R.push(j), R[V.name] = j;
	}
})(), l6.getDefaultProperty = function(e) {
	return this.getDefaultProperties()[e];
}, l6.getDefaultProperties = function() {
	var e = this._private;
	if (null != e.defaultProperties) return e.defaultProperties;
	for (var t = es({
		"selection-box-color": "#ddd",
		"selection-box-opacity": .65,
		"selection-box-border-color": "#aaa",
		"selection-box-border-width": 1,
		"active-bg-color": "black",
		"active-bg-opacity": .15,
		"active-bg-size": 30,
		"outside-texture-bg-color": "#000",
		"outside-texture-bg-opacity": .125,
		events: "yes",
		"text-events": "no",
		"text-valign": "top",
		"text-halign": "center",
		"text-justification": "auto",
		"line-height": 1,
		color: "#000",
		"box-selection": "contain",
		"text-outline-color": "#000",
		"text-outline-width": 0,
		"text-outline-opacity": 1,
		"text-opacity": 1,
		"text-decoration": "none",
		"text-transform": "none",
		"text-wrap": "none",
		"text-overflow-wrap": "whitespace",
		"text-max-width": 9999,
		"text-background-color": "#000",
		"text-background-opacity": 0,
		"text-background-shape": "rectangle",
		"text-background-padding": 0,
		"text-border-opacity": 0,
		"text-border-width": 0,
		"text-border-style": "solid",
		"text-border-color": "#000",
		"font-family": "Helvetica Neue, Helvetica, sans-serif",
		"font-style": "normal",
		"font-weight": "normal",
		"font-size": 16,
		"min-zoomed-font-size": 0,
		"text-rotation": "none",
		"source-text-rotation": "none",
		"target-text-rotation": "none",
		visibility: "visible",
		display: "element",
		opacity: 1,
		"z-compound-depth": "auto",
		"z-index-compare": "auto",
		"z-index": 0,
		label: "",
		"text-margin-x": 0,
		"text-margin-y": 0,
		"source-label": "",
		"source-text-offset": 0,
		"source-text-margin-x": 0,
		"source-text-margin-y": 0,
		"target-label": "",
		"target-text-offset": 0,
		"target-text-margin-x": 0,
		"target-text-margin-y": 0,
		"overlay-opacity": 0,
		"overlay-color": "#000",
		"overlay-padding": 10,
		"overlay-shape": "round-rectangle",
		"overlay-corner-radius": "auto",
		"underlay-opacity": 0,
		"underlay-color": "#000",
		"underlay-padding": 10,
		"underlay-shape": "round-rectangle",
		"underlay-corner-radius": "auto",
		"transition-property": "none",
		"transition-duration": 0,
		"transition-delay": 0,
		"transition-timing-function": "linear",
		"box-select-labels": "no",
		"background-blacken": 0,
		"background-color": "#999",
		"background-fill": "solid",
		"background-opacity": 1,
		"background-image": "none",
		"background-image-crossorigin": "anonymous",
		"background-image-opacity": 1,
		"background-image-containment": "inside",
		"background-image-smoothing": "yes",
		"background-position-x": "50%",
		"background-position-y": "50%",
		"background-offset-x": 0,
		"background-offset-y": 0,
		"background-width-relative-to": "include-padding",
		"background-height-relative-to": "include-padding",
		"background-repeat": "no-repeat",
		"background-fit": "none",
		"background-clip": "node",
		"background-width": "auto",
		"background-height": "auto",
		"border-color": "#000",
		"border-opacity": 1,
		"border-width": 0,
		"border-style": "solid",
		"border-dash-pattern": [4, 2],
		"border-dash-offset": 0,
		"border-cap": "butt",
		"border-join": "miter",
		"border-position": "center",
		"outline-color": "#999",
		"outline-opacity": 1,
		"outline-width": 0,
		"outline-offset": 0,
		"outline-style": "solid",
		height: 30,
		width: 30,
		shape: "ellipse",
		"shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
		"corner-radius": "auto",
		"bounds-expansion": 0,
		"background-gradient-direction": "to-bottom",
		"background-gradient-stop-colors": "#999",
		"background-gradient-stop-positions": "0%",
		ghost: "no",
		"ghost-offset-y": 0,
		"ghost-offset-x": 0,
		"ghost-opacity": 0,
		padding: 0,
		"padding-relative-to": "width",
		position: "origin",
		"compound-sizing-wrt-labels": "include",
		"min-width": 0,
		"min-width-bias-left": 0,
		"min-width-bias-right": 0,
		"min-height": 0,
		"min-height-bias-top": 0,
		"min-height-bias-bottom": 0
	}, {
		"pie-size": "100%",
		"pie-hole": 0,
		"pie-start-angle": "0deg"
	}, [
		{
			name: "pie-{{i}}-background-color",
			value: "black"
		},
		{
			name: "pie-{{i}}-background-size",
			value: "0%"
		},
		{
			name: "pie-{{i}}-background-opacity",
			value: 1
		}
	].reduce(function(e, t) {
		for (var n = 1; n <= l6.pieBackgroundN; n++) e[t.name.replace("{{i}}", n)] = t.value;
		return e;
	}, {}), {
		"stripe-size": "100%",
		"stripe-direction": "horizontal"
	}, [
		{
			name: "stripe-{{i}}-background-color",
			value: "black"
		},
		{
			name: "stripe-{{i}}-background-size",
			value: "0%"
		},
		{
			name: "stripe-{{i}}-background-opacity",
			value: 1
		}
	].reduce(function(e, t) {
		for (var n = 1; n <= l6.stripeBackgroundN; n++) e[t.name.replace("{{i}}", n)] = t.value;
		return e;
	}, {}), {
		"line-style": "solid",
		"line-color": "#999",
		"line-fill": "solid",
		"line-cap": "butt",
		"line-opacity": 1,
		"line-outline-width": 0,
		"line-outline-color": "#000",
		"line-gradient-stop-colors": "#999",
		"line-gradient-stop-positions": "0%",
		"control-point-step-size": 40,
		"control-point-weights": .5,
		"segment-weights": .5,
		"segment-distances": 20,
		"segment-radii": 15,
		"radius-type": "arc-radius",
		"taxi-turn": "50%",
		"taxi-radius": 15,
		"taxi-turn-min-distance": 10,
		"taxi-direction": "auto",
		"edge-distances": "intersection",
		"curve-style": "haystack",
		"haystack-radius": 0,
		"arrow-scale": 1,
		"loop-direction": "-45deg",
		"loop-sweep": "-90deg",
		"source-distance-from-node": 0,
		"target-distance-from-node": 0,
		"source-endpoint": "outside-to-node",
		"target-endpoint": "outside-to-node",
		"line-dash-pattern": [6, 3],
		"line-dash-offset": 0
	}, [
		{
			name: "arrow-shape",
			value: "none"
		},
		{
			name: "arrow-color",
			value: "#999"
		},
		{
			name: "arrow-fill",
			value: "filled"
		},
		{
			name: "arrow-width",
			value: 1
		}
	].reduce(function(e, t) {
		return l6.arrowPrefixes.forEach(function(n) {
			e[n + "-" + t.name] = t.value;
		}), e;
	}, {})), n = {}, r = 0; r < this.properties.length; r++) {
		var a = this.properties[r];
		if (!a.pointsTo) {
			var i = a.name, o = t[i];
			n[i] = this.parse(i, o);
		}
	}
	return e.defaultProperties = n, e.defaultProperties;
}, l6.addDefaultStylesheet = function() {
	this.selector(":parent").css({
		shape: "rectangle",
		padding: 10,
		"background-color": "#eee",
		"border-color": "#ccc",
		"border-width": 1
	}).selector("edge").css({ width: 3 }).selector(":loop").css({ "curve-style": "bezier" }).selector("edge:compound").css({
		"curve-style": "bezier",
		"source-endpoint": "outside-to-line",
		"target-endpoint": "outside-to-line"
	}).selector(":selected").css({
		"background-color": "#0169D9",
		"line-color": "#0169D9",
		"source-arrow-color": "#0169D9",
		"target-arrow-color": "#0169D9",
		"mid-source-arrow-color": "#0169D9",
		"mid-target-arrow-color": "#0169D9"
	}).selector(":parent:selected").css({
		"background-color": "#CCE1F9",
		"border-color": "#aec8e5"
	}).selector(":active").css({
		"overlay-color": "black",
		"overlay-padding": 10,
		"overlay-opacity": .25
	}), this.defaultLength = this.length;
};
var l8 = {};
l8.parse = function(e, t, n, r) {
	if (D(t)) return this.parseImplWarn(e, t, n, r);
	var a, i = eW(e, "" + t, n ? "t" : "f", "mapping" === r || !0 === r || !1 === r || null == r ? "dontcare" : r), o = this.propCache = this.propCache || [];
	return (a = o[i]) || (a = o[i] = this.parseImplWarn(e, t, n, r)), (n || "mapping" === r) && (a = e8(a)) && (a.value = e8(a.value)), a;
}, l8.parseImplWarn = function(e, t, n, r) {
	var a = this.parseImpl(e, t, n, r);
	return a || null == t || e9("The style property `".concat(e, ": ").concat(t, "` is invalid")), a && ("width" === a.name || "height" === a.name) && "label" === t && e9("The style value of `label` is deprecated for `" + a.name + "`"), a;
}, l8.parseImpl = function(t, n, r, a) {
	t = G(t);
	var i = this.properties[t], o = n, s = this.types;
	if (!i || void 0 === n) return null;
	i.alias && (t = (i = i.pointsTo).name);
	var l = _(n);
	l && (n = n.trim());
	var u = i.type;
	if (!u) return null;
	if (r && ("" === n || null === n)) return {
		name: t,
		value: n,
		bypass: !0,
		deleteBypass: !0
	};
	if (D(n)) return {
		name: t,
		value: n,
		strValue: "fn",
		mapped: s.fn,
		bypass: r
	};
	if (!(!l || a || n.length < 7 || "a" !== n[1])) {
		if (n.length >= 7 && "d" === n[0] && (k = new RegExp(s.data.regex).exec(n))) {
			if (r) return !1;
			var c = s.data;
			return {
				name: t,
				value: k,
				strValue: "" + n,
				mapped: c,
				field: k[1],
				bypass: r
			};
		} else if (n.length >= 10 && "m" === n[0] && (S = new RegExp(s.mapData.regex).exec(n))) {
			if (r || u.multiple) return !1;
			var d = s.mapData;
			if (!(u.color || u.number)) return !1;
			var h = this.parse(t, S[4]);
			if (!h || h.mapped) return !1;
			var f = this.parse(t, S[5]);
			if (!f || f.mapped) return !1;
			if (h.pfValue === f.pfValue || h.strValue === f.strValue) return e9("`" + t + ": " + n + "` is not a valid mapper because the output range is zero; converting to `" + t + ": " + h.strValue + "`"), this.parse(t, h.strValue);
			if (u.color) {
				var p = h.value, g = f.value;
				if (p[0] === g[0] && p[1] === g[1] && p[2] === g[2] && (p[3] === g[3] || (null == p[3] || 1 === p[3]) && (null == g[3] || 1 === g[3]))) return !1;
			}
			return {
				name: t,
				value: S,
				strValue: "" + n,
				mapped: d,
				field: S[1],
				fieldMin: parseFloat(S[2]),
				fieldMax: parseFloat(S[3]),
				valueMin: h.value,
				valueMax: f.value,
				bypass: r
			};
		}
	}
	if (u.multiple && "multiple" !== a) {
		if (P = l ? n.split(/\s+/) : A(n) ? n : [n], u.evenMultiple && P.length % 2 != 0) return null;
		for (var v = [], y = [], m = [], x = "", w = !1, E = 0; E < P.length; E++) {
			var C = this.parse(t, P[E], r, "multiple");
			w = w || _(C.value), v.push(C.value), m.push(null != C.pfValue ? C.pfValue : C.value), y.push(C.units), x += (E > 0 ? " " : "") + C.strValue;
		}
		return u.validate && !u.validate(v, y) ? null : u.singleEnum && w ? 1 === v.length && _(v[0]) ? {
			name: t,
			value: v[0],
			strValue: v[0],
			bypass: r
		} : null : {
			name: t,
			value: v,
			pfValue: m,
			strValue: x,
			bypass: r,
			units: y
		};
	}
	var T = e(function() {
		for (var e = 0; e < u.enums.length; e++) if (u.enums[e] === n) return {
			name: t,
			value: n,
			strValue: "" + n,
			bypass: r
		};
		return null;
	}, "checkEnums");
	if (u.number) {
		var k, S, P, B, M = "px";
		if (u.units && (B = u.units), u.implicitUnits && (M = u.implicitUnits), !u.unitless) if (l) {
			var R = "px|em" + (u.allowPercent ? "|\\%" : "");
			B && (R = B);
			var I = n.match("^(" + ee + ")(" + R + ")?$");
			I && (n = I[1], B = I[2] || M);
		} else (!B || u.implicitUnits) && (B = M);
		if (isNaN(n = parseFloat(n)) && void 0 === u.enums) return null;
		if (isNaN(n) && void 0 !== u.enums) return n = o, T();
		if (u.integer && !L(n) || void 0 !== u.min && (n < u.min || u.strictMin && n === u.min) || void 0 !== u.max && (n > u.max || u.strictMax && n === u.max)) return null;
		var N = {
			name: t,
			value: n,
			strValue: "" + n + (B || ""),
			units: B,
			bypass: r
		};
		return u.unitless || "px" !== B && "em" !== B ? N.pfValue = n : N.pfValue = "px" !== B && B ? this.getEmSizeInPixels() * n : n, ("ms" === B || "s" === B) && (N.pfValue = "ms" === B ? n : 1e3 * n), ("deg" === B || "rad" === B) && (N.pfValue = "rad" === B ? n : nc(n)), "%" === B && (N.pfValue = n / 100), N;
	}
	if (u.propList) {
		var z = [], O = "" + n;
		if ("none" !== O) {
			for (var F = O.split(/\s*,\s*|\s+/), V = 0; V < F.length; V++) {
				var q = F[V].trim();
				this.properties[q] ? z.push(q) : e9("`" + q + "` is not a valid property name");
			}
			if (0 === z.length) return null;
		}
		return {
			name: t,
			value: z,
			strValue: 0 === z.length ? "none" : z.join(" "),
			bypass: r
		};
	}
	if (u.color) {
		var j = eh(n);
		return j ? {
			name: t,
			value: j,
			pfValue: j,
			strValue: "rgb(" + j[0] + "," + j[1] + "," + j[2] + ")",
			bypass: r
		} : null;
	}
	if (!u.regex && !u.regexes) return u.string ? {
		name: t,
		value: "" + n,
		strValue: "" + n,
		bypass: r
	} : u.enums ? T() : null;
	if (u.enums) {
		var X = T();
		if (X) return X;
	}
	for (var Y = u.regexes ? u.regexes : [u.regex], W = 0; W < Y.length; W++) {
		var H = new RegExp(Y[W]).exec(n);
		if (H) return {
			name: t,
			value: u.singleRegexMatchValue ? H[1] : H,
			strValue: "" + n,
			bypass: r
		};
	}
	return null;
};
var l7 = e(function(e) {
	return this instanceof l7 ? V(e) ? void (this._private = {
		cy: e,
		coreStyle: {}
	}, this.length = 0, this.resetToDefault()) : void e3("A style must have a core reference") : new l7(e);
}, "Style"), ue = l7.prototype;
ue.instanceString = function() {
	return "style";
}, ue.clear = function() {
	for (var e = this._private, t = e.cy.elements(), n = 0; n < this.length; n++) this[n] = void 0;
	return this.length = 0, e.contextStyles = {}, e.propDiffs = {}, this.cleanElements(t, !0), t.forEach(function(e) {
		var t = e[0]._private;
		t.styleDirty = !0, t.appliedInitStyle = !1;
	}), this;
}, ue.resetToDefault = function() {
	return this.clear(), this.addDefaultStylesheet(), this;
}, ue.core = function(e) {
	return this._private.coreStyle[e] || this.getDefaultProperty(e);
}, ue.selector = function(e) {
	var t = "core" === e ? null : new ss(e), n = this.length++;
	return this[n] = {
		selector: t,
		properties: [],
		mappedProperties: [],
		index: n
	}, this;
}, ue.css = function() {
	var e = arguments;
	if (1 === e.length) for (var t = e[0], n = 0; n < this.properties.length; n++) {
		var r = this.properties[n], a = t[r.name];
		void 0 === a && (a = t[Z(r.name)]), void 0 !== a && this.cssRule(r.name, a);
	}
	else 2 === e.length && this.cssRule(e[0], e[1]);
	return this;
}, ue.style = ue.css, ue.cssRule = function(e, t) {
	var n = this.parse(e, t);
	if (n) {
		var r = this.length - 1;
		this[r].properties.push(n), this[r].properties[n.name] = n, n.name.match(/pie-(\d+)-background-size/) && n.value && (this._private.hasPie = !0), n.name.match(/stripe-(\d+)-background-size/) && n.value && (this._private.hasStripe = !0), n.mapped && this[r].mappedProperties.push(n), this[r].selector || (this._private.coreStyle[n.name] = n);
	}
	return this;
}, ue.append = function(e) {
	return q(e) ? e.appendToStyle(this) : A(e) ? this.appendFromJson(e) : _(e) && this.appendFromString(e), this;
}, l7.fromJson = function(e, t) {
	var n = new l7(e);
	return n.fromJson(t), n;
}, l7.fromString = function(e, t) {
	return new l7(e).fromString(t);
}, [
	l1,
	l2,
	l5,
	l3,
	l4,
	l9,
	l6,
	l8
].forEach(function(e) {
	es(ue, e);
}), l7.types = ue.types, l7.properties = ue.properties, l7.propertyGroups = ue.propertyGroups, l7.propertyGroupNames = ue.propertyGroupNames, l7.propertyGroupKeys = ue.propertyGroupKeys;
var ut = {
	style: e(function(e) {
		return e && this.setStyle(e).update(), this._private.style;
	}, "style"),
	setStyle: e(function(e) {
		var t = this._private;
		return q(e) ? t.style = e.generateStyle(this) : A(e) ? t.style = l7.fromJson(this, e) : _(e) ? t.style = l7.fromString(this, e) : t.style = l7(this), t.style;
	}, "setStyle"),
	updateStyle: e(function() {
		this.mutableElements().updateStyle();
	}, "updateStyle")
}, un = {
	autolock: e(function(e) {
		return void 0 === e ? this._private.autolock : (this._private.autolock = !!e, this);
	}, "autolock"),
	autoungrabify: e(function(e) {
		return void 0 === e ? this._private.autoungrabify : (this._private.autoungrabify = !!e, this);
	}, "autoungrabify"),
	autounselectify: e(function(e) {
		return void 0 === e ? this._private.autounselectify : (this._private.autounselectify = !!e, this);
	}, "autounselectify"),
	selectionType: e(function(e) {
		var t = this._private;
		return (t.selectionType ??= "single", void 0 === e) ? t.selectionType : (("additive" === e || "single" === e) && (t.selectionType = e), this);
	}, "selectionType"),
	panningEnabled: e(function(e) {
		return void 0 === e ? this._private.panningEnabled : (this._private.panningEnabled = !!e, this);
	}, "panningEnabled"),
	userPanningEnabled: e(function(e) {
		return void 0 === e ? this._private.userPanningEnabled : (this._private.userPanningEnabled = !!e, this);
	}, "userPanningEnabled"),
	zoomingEnabled: e(function(e) {
		return void 0 === e ? this._private.zoomingEnabled : (this._private.zoomingEnabled = !!e, this);
	}, "zoomingEnabled"),
	userZoomingEnabled: e(function(e) {
		return void 0 === e ? this._private.userZoomingEnabled : (this._private.userZoomingEnabled = !!e, this);
	}, "userZoomingEnabled"),
	boxSelectionEnabled: e(function(e) {
		return void 0 === e ? this._private.boxSelectionEnabled : (this._private.boxSelectionEnabled = !!e, this);
	}, "boxSelectionEnabled"),
	pan: e(function() {
		var e, t, n, r, a, i = arguments, o = this._private.pan;
		switch (i.length) {
			case 0: return o;
			case 1:
				if (_(i[0])) return o[e = i[0]];
				if (M(i[0])) {
					if (!this._private.panningEnabled) return this;
					r = (n = i[0]).x, a = n.y, I(r) && (o.x = r), I(a) && (o.y = a), this.emit("pan viewport");
				}
				break;
			case 2:
				if (!this._private.panningEnabled) return this;
				e = i[0], t = i[1], ("x" === e || "y" === e) && I(t) && (o[e] = t), this.emit("pan viewport");
		}
		return this.notify("viewport"), this;
	}, "pan"),
	panBy: e(function(e, t) {
		var n, r, a, i = arguments, o = this._private.pan;
		if (!this._private.panningEnabled) return this;
		switch (i.length) {
			case 1:
				M(e) && (r = (n = i[0]).x, a = n.y, I(r) && (o.x += r), I(a) && (o.y += a), this.emit("pan viewport"));
				break;
			case 2: ("x" === e || "y" === e) && I(t) && (o[e] += t), this.emit("pan viewport");
		}
		return this.notify("viewport"), this;
	}, "panBy"),
	gc: e(function() {
		this.notify("gc");
	}, "gc"),
	fit: e(function(e, t) {
		var n = this.getFitViewport(e, t);
		if (n) {
			var r = this._private;
			r.zoom = n.zoom, r.pan = n.pan, this.emit("pan zoom viewport"), this.notify("viewport");
		}
		return this;
	}, "fit"),
	getFitViewport: e(function(e, t) {
		if (I(e) && void 0 === t && (t = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
			var n;
			if (_(e)) {
				var r = e;
				e = this.$(r);
			} else if (W(e)) {
				var a = e;
				(n = {
					x1: a.x1,
					y1: a.y1,
					x2: a.x2,
					y2: a.y2
				}).w = n.x2 - n.x1, n.h = n.y2 - n.y1;
			} else z(e) || (e = this.mutableElements());
			if (!(z(e) && e.empty())) {
				n = n || e.boundingBox();
				var i, o = this.width(), s = this.height();
				if (t = I(t) ? t : 0, !isNaN(o) && !isNaN(s) && o > 0 && s > 0 && !isNaN(n.w) && !isNaN(n.h) && n.w > 0 && n.h > 0) {
					i = (i = (i = Math.min((o - 2 * t) / n.w, (s - 2 * t) / n.h)) > this._private.maxZoom ? this._private.maxZoom : i) < this._private.minZoom ? this._private.minZoom : i;
					var l = {
						x: (o - i * (n.x1 + n.x2)) / 2,
						y: (s - i * (n.y1 + n.y2)) / 2
					};
					return {
						zoom: i,
						pan: l
					};
				}
			}
		}
	}, "getFitViewport"),
	zoomRange: e(function(e, t) {
		var n = this._private;
		if (null == t) {
			var r = e;
			e = r.min, t = r.max;
		}
		return I(e) && I(t) && e <= t ? (n.minZoom = e, n.maxZoom = t) : I(e) && void 0 === t && e <= n.maxZoom ? n.minZoom = e : I(t) && void 0 === e && t >= n.minZoom && (n.maxZoom = t), this;
	}, "zoomRange"),
	minZoom: e(function(e) {
		return void 0 === e ? this._private.minZoom : this.zoomRange({ min: e });
	}, "minZoom"),
	maxZoom: e(function(e) {
		return void 0 === e ? this._private.maxZoom : this.zoomRange({ max: e });
	}, "maxZoom"),
	getZoomedViewport: e(function(e) {
		var t, n, r = this._private, a = r.pan, i = r.zoom, o = !1;
		if (r.zoomingEnabled || (o = !0), I(e) ? n = e : M(e) && (n = e.level, null != e.position ? t = nr(e.position, i, a) : null != e.renderedPosition && (t = e.renderedPosition), null == t || r.panningEnabled || (o = !0)), n = (n = n > r.maxZoom ? r.maxZoom : n) < r.minZoom ? r.minZoom : n, o || !I(n) || n === i || null != t && (!I(t.x) || !I(t.y))) return null;
		if (null == t) return {
			zoomed: !0,
			panned: !1,
			zoom: n,
			pan: a
		};
		var s = n, l = {
			x: -s / i * (t.x - a.x) + t.x,
			y: -s / i * (t.y - a.y) + t.y
		};
		return {
			zoomed: !0,
			panned: !0,
			zoom: s,
			pan: l
		};
	}, "getZoomedViewport"),
	zoom: e(function(e) {
		if (void 0 === e) return this._private.zoom;
		var t = this.getZoomedViewport(e), n = this._private;
		return null != t && t.zoomed && (n.zoom = t.zoom, t.panned && (n.pan.x = t.pan.x, n.pan.y = t.pan.y), this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"), this.notify("viewport")), this;
	}, "zoom"),
	viewport: e(function(e) {
		var t = this._private, n = !0, r = !0, a = [], i = !1, o = !1;
		if (!e || (I(e.zoom) || (n = !1), M(e.pan) || (r = !1), !n && !r)) return this;
		if (n) {
			var s = e.zoom;
			s < t.minZoom || s > t.maxZoom || !t.zoomingEnabled ? i = !0 : (t.zoom = s, a.push("zoom"));
		}
		if (r && (!i || !e.cancelOnFailedZoom) && t.panningEnabled) {
			var l = e.pan;
			I(l.x) && (t.pan.x = l.x, o = !1), I(l.y) && (t.pan.y = l.y, o = !1), o || a.push("pan");
		}
		return a.length > 0 && (a.push("viewport"), this.emit(a.join(" ")), this.notify("viewport")), this;
	}, "viewport"),
	center: e(function(e) {
		var t = this.getCenterPan(e);
		return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
	}, "center"),
	getCenterPan: e(function(e, t) {
		if (this._private.panningEnabled) {
			if (_(e)) {
				var n = e;
				e = this.mutableElements().filter(n);
			} else z(e) || (e = this.mutableElements());
			if (0 !== e.length) {
				var r = e.boundingBox(), a = this.width(), i = this.height();
				return {
					x: (a - (t = void 0 === t ? this._private.zoom : t) * (r.x1 + r.x2)) / 2,
					y: (i - t * (r.y1 + r.y2)) / 2
				};
			}
		}
	}, "getCenterPan"),
	reset: e(function() {
		return this._private.panningEnabled && this._private.zoomingEnabled && this.viewport({
			pan: {
				x: 0,
				y: 0
			},
			zoom: 1
		}), this;
	}, "reset"),
	invalidateSize: e(function() {
		this._private.sizeCache = null;
	}, "invalidateSize"),
	size: e(function() {
		var t, n, r = this._private, a = r.container;
		return r.sizeCache = r.sizeCache || (a ? (t = this.window().getComputedStyle(a), n = e(function(e) {
			return parseFloat(t.getPropertyValue(e));
		}, "val"), {
			width: a.clientWidth - n("padding-left") - n("padding-right"),
			height: a.clientHeight - n("padding-top") - n("padding-bottom")
		}) : {
			width: 1,
			height: 1
		});
	}, "size"),
	width: e(function() {
		return this.size().width;
	}, "width"),
	height: e(function() {
		return this.size().height;
	}, "height"),
	extent: e(function() {
		var e = this._private.pan, t = this._private.zoom, n = this.renderedExtent(), r = {
			x1: (n.x1 - e.x) / t,
			x2: (n.x2 - e.x) / t,
			y1: (n.y1 - e.y) / t,
			y2: (n.y2 - e.y) / t
		};
		return r.w = r.x2 - r.x1, r.h = r.y2 - r.y1, r;
	}, "extent"),
	renderedExtent: e(function() {
		var e = this.width(), t = this.height();
		return {
			x1: 0,
			y1: 0,
			x2: e,
			y2: t,
			w: e,
			h: t
		};
	}, "renderedExtent"),
	multiClickDebounceTime: e(function(e) {
		return e ? (this._private.multiClickDebounceTime = e, this) : this._private.multiClickDebounceTime;
	}, "multiClickDebounceTime")
};
un.centre = un.center, un.autolockNodes = un.autolock, un.autoungrabifyNodes = un.autoungrabify;
var ur = {
	data: oH.data({
		field: "data",
		bindingEvent: "data",
		allowBinding: !0,
		allowSetting: !0,
		settingEvent: "data",
		settingTriggersEvent: !0,
		triggerFnName: "trigger",
		allowGetting: !0,
		updateStyle: !0
	}),
	removeData: oH.removeData({
		field: "data",
		event: "data",
		triggerFnName: "trigger",
		triggerEvent: !0,
		updateStyle: !0
	}),
	scratch: oH.data({
		field: "scratch",
		bindingEvent: "scratch",
		allowBinding: !0,
		allowSetting: !0,
		settingEvent: "scratch",
		settingTriggersEvent: !0,
		triggerFnName: "trigger",
		allowGetting: !0,
		updateStyle: !0
	}),
	removeScratch: oH.removeData({
		field: "scratch",
		event: "scratch",
		triggerFnName: "trigger",
		triggerEvent: !0,
		updateStyle: !0
	})
};
ur.attr = ur.data, ur.removeAttr = ur.removeData;
var ua = e(function(t) {
	var n = this, r = (t = es({}, t)).container;
	r && !N(r) && N(r[0]) && (r = r[0]);
	var a = r ? r._cyreg : null;
	(a = a || {}).cy && (a.cy.destroy(), a = {});
	var i = a.readies = a.readies || [];
	r && (r._cyreg = a), a.cy = n;
	var o = void 0 !== E && void 0 !== r && !t.headless, s = t;
	s.layout = es({ name: o ? "grid" : "null" }, s.layout), s.renderer = es({ name: o ? "canvas" : "null" }, s.renderer);
	var l = e(function(e, t, n) {
		return void 0 !== t ? t : void 0 !== n ? n : e;
	}, "defVal"), u = this._private = {
		container: r,
		ready: !1,
		options: s,
		elements: new lA(this),
		listeners: [],
		aniEles: new lA(this),
		data: s.data || {},
		scratch: {},
		layout: null,
		renderer: null,
		destroyed: !1,
		notificationsEnabled: !0,
		minZoom: 1e-50,
		maxZoom: 1e50,
		zoomingEnabled: l(!0, s.zoomingEnabled),
		userZoomingEnabled: l(!0, s.userZoomingEnabled),
		panningEnabled: l(!0, s.panningEnabled),
		userPanningEnabled: l(!0, s.userPanningEnabled),
		boxSelectionEnabled: l(!0, s.boxSelectionEnabled),
		autolock: l(!1, s.autolock, s.autolockNodes),
		autoungrabify: l(!1, s.autoungrabify, s.autoungrabifyNodes),
		autounselectify: l(!1, s.autounselectify),
		styleEnabled: void 0 === s.styleEnabled ? o : s.styleEnabled,
		zoom: I(s.zoom) ? s.zoom : 1,
		pan: {
			x: M(s.pan) && I(s.pan.x) ? s.pan.x : 0,
			y: M(s.pan) && I(s.pan.y) ? s.pan.y : 0
		},
		animation: {
			current: [],
			queue: []
		},
		hasCompoundNodes: !1,
		multiClickDebounceTime: l(250, s.multiClickDebounceTime)
	};
	this.createEmitter(), this.selectionType(s.selectionType), this.zoomRange({
		min: s.minZoom,
		max: s.maxZoom
	});
	var c = e(function(e, t) {
		if (e.some(H)) return ah.all(e).then(t);
		t(e);
	}, "loadExtData");
	u.styleEnabled && n.setStyle([]);
	var d = es({}, s, s.renderer);
	n.initRenderer(d);
	var h = e(function(e, t, r) {
		n.notifications(!1);
		var a = n.mutableElements();
		a.length > 0 && a.remove(), null != e && (M(e) || A(e)) && n.add(e), n.one("layoutready", function(e) {
			n.notifications(!0), n.emit(e), n.one("load", t), n.emitAndNotify("load");
		}).one("layoutstop", function() {
			n.one("done", r), n.emit("done");
		});
		var i = es({}, n._private.options.layout);
		i.eles = n.elements(), n.layout(i).run();
	}, "setElesAndLayout");
	c([s.style, s.elements], function(e) {
		var t = e[0], r = e[1];
		u.styleEnabled && n.style().append(t), h(r, function() {
			n.startAnimationLoop(), u.ready = !0, D(s.ready) && n.on("ready", s.ready);
			for (var e = 0; e < i.length; e++) {
				var t = i[e];
				n.on("ready", t);
			}
			a && (a.readies = []), n.emit("ready");
		}, s.done);
	});
}, "Core"), ui = ua.prototype;
es(ui, {
	instanceString: e(function() {
		return "core";
	}, "instanceString"),
	isReady: e(function() {
		return this._private.ready;
	}, "isReady"),
	destroyed: e(function() {
		return this._private.destroyed;
	}, "destroyed"),
	ready: e(function(e) {
		return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
	}, "ready"),
	destroy: e(function() {
		if (!this.destroyed()) return this.stopAnimationLoop(), this.destroyRenderer(), this.emit("destroy"), this._private.destroyed = !0, this;
	}, "destroy"),
	hasElementWithId: e(function(e) {
		return this._private.elements.hasElementWithId(e);
	}, "hasElementWithId"),
	getElementById: e(function(e) {
		return this._private.elements.getElementById(e);
	}, "getElementById"),
	hasCompoundNodes: e(function() {
		return this._private.hasCompoundNodes;
	}, "hasCompoundNodes"),
	headless: e(function() {
		return this._private.renderer.isHeadless();
	}, "headless"),
	styleEnabled: e(function() {
		return this._private.styleEnabled;
	}, "styleEnabled"),
	addToPool: e(function(e) {
		return this._private.elements.merge(e), this;
	}, "addToPool"),
	removeFromPool: e(function(e) {
		return this._private.elements.unmerge(e), this;
	}, "removeFromPool"),
	container: e(function() {
		return this._private.container || null;
	}, "container"),
	window: e(function() {
		if (null == this._private.container) return E;
		var e = this._private.container.ownerDocument;
		return void 0 === e || null == e ? E : e.defaultView || E;
	}, "window"),
	mount: e(function(e) {
		if (null != e) {
			var t = this._private, n = t.options;
			return !N(e) && N(e[0]) && (e = e[0]), this.stopAnimationLoop(), this.destroyRenderer(), t.container = e, t.styleEnabled = !0, this.invalidateSize(), this.initRenderer(es({}, n, n.renderer, { name: "null" === n.renderer.name ? "canvas" : n.renderer.name })), this.startAnimationLoop(), this.style(n.style), this.emit("mount"), this;
		}
	}, "mount"),
	unmount: e(function() {
		return this.stopAnimationLoop(), this.destroyRenderer(), this.initRenderer({ name: "null" }), this.emit("unmount"), this;
	}, "unmount"),
	options: e(function() {
		return e8(this._private.options);
	}, "options"),
	json: e(function(t) {
		var n = this, r = n._private, a = n.mutableElements(), i = e(function(e) {
			return n.getElementById(e.id());
		}, "getFreshRef");
		if (M(t)) {
			if (n.startBatch(), t.elements) {
				var o = {}, s = e(function(e, t) {
					for (var r = [], a = [], i = 0; i < e.length; i++) {
						var s = e[i];
						if (!s.data.id) {
							e9("cy.json() cannot handle elements without an ID attribute");
							continue;
						}
						var l = "" + s.data.id, u = n.getElementById(l);
						o[l] = !0, 0 !== u.length ? a.push({
							ele: u,
							json: s
						}) : (t && (s.group = t), r.push(s));
					}
					n.add(r);
					for (var c = 0; c < a.length; c++) {
						var d = a[c], h = d.ele, f = d.json;
						h.json(f);
					}
				}, "updateEles");
				if (A(t.elements)) s(t.elements);
				else for (var l = ["nodes", "edges"], u = 0; u < l.length; u++) {
					var c = l[u], d = t.elements[c];
					A(d) && s(d, c);
				}
				var h = n.collection();
				a.filter(function(e) {
					return !o[e.id()];
				}).forEach(function(e) {
					e.isParent() ? h.merge(e) : e.remove();
				}), h.forEach(function(e) {
					return e.children().move({ parent: null });
				}), h.forEach(function(e) {
					return i(e).remove();
				});
			}
			t.style && n.style(t.style), null != t.zoom && t.zoom !== r.zoom && n.zoom(t.zoom), t.pan && (t.pan.x !== r.pan.x || t.pan.y !== r.pan.y) && n.pan(t.pan), t.data && n.data(t.data);
			for (var f = [
				"minZoom",
				"maxZoom",
				"zoomingEnabled",
				"userZoomingEnabled",
				"panningEnabled",
				"userPanningEnabled",
				"boxSelectionEnabled",
				"autolock",
				"autoungrabify",
				"autounselectify",
				"multiClickDebounceTime"
			], p = 0; p < f.length; p++) {
				var g = f[p];
				null != t[g] && n[g](t[g]);
			}
			return n.endBatch(), this;
		}
		var v = {};
		t ? v.elements = this.elements().map(function(e) {
			return e.json();
		}) : (v.elements = {}, a.forEach(function(e) {
			var t = e.group();
			v.elements[t] || (v.elements[t] = []), v.elements[t].push(e.json());
		})), this._private.styleEnabled && (v.style = n.style().json()), v.data = e8(n.data());
		var y = r.options;
		return v.zoomingEnabled = r.zoomingEnabled, v.userZoomingEnabled = r.userZoomingEnabled, v.zoom = r.zoom, v.minZoom = r.minZoom, v.maxZoom = r.maxZoom, v.panningEnabled = r.panningEnabled, v.userPanningEnabled = r.userPanningEnabled, v.pan = e8(r.pan), v.boxSelectionEnabled = r.boxSelectionEnabled, v.renderer = e8(y.renderer), v.hideEdgesOnViewport = y.hideEdgesOnViewport, v.textureOnViewport = y.textureOnViewport, v.wheelSensitivity = y.wheelSensitivity, v.motionBlur = y.motionBlur, v.multiClickDebounceTime = y.multiClickDebounceTime, v;
	}, "json")
}), ui.$id = ui.getElementById, [
	lR,
	lW,
	lU,
	lG,
	lZ,
	l$,
	lJ,
	l0,
	ut,
	un,
	ur
].forEach(function(e) {
	es(ui, e);
});
var uo = {
	fit: !0,
	directed: !1,
	direction: "downward",
	padding: 30,
	circle: !1,
	grid: !1,
	spacingFactor: 1.75,
	boundingBox: void 0,
	avoidOverlap: !0,
	nodeDimensionsIncludeLabels: !1,
	roots: void 0,
	depthSort: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: e(function(e, t) {
		return !0;
	}, "animateFilter"),
	ready: void 0,
	stop: void 0,
	transform: e(function(e, t) {
		return t;
	}, "transform")
}, us = {
	maximal: !1,
	acyclic: !1
}, ul = e(function(e) {
	return e.scratch("breadthfirst");
}, "getInfo"), uu = e(function(e, t) {
	return e.scratch("breadthfirst", t);
}, "setInfo");
function uc(e) {
	this.options = es({}, uo, us, e);
}
e(uc, "BreadthFirstLayout"), uc.prototype.run = function() {
	var t, n = this.options, r = n.cy, a = n.eles, i = a.nodes().filter(function(e) {
		return e.isChildless();
	}), o = n.directed, s = n.acyclic || n.maximal || n.maximalAdjustments > 0, l = !!n.boundingBox, u = nw(l ? n.boundingBox : structuredClone(r.extent()));
	if (z(n.roots)) t = n.roots;
	else if (A(n.roots)) {
		for (var c = [], d = 0; d < n.roots.length; d++) {
			var h = n.roots[d], f = r.getElementById(h);
			c.push(f);
		}
		t = r.collection(c);
	} else if (_(n.roots)) t = r.$(n.roots);
	else if (o) t = i.roots();
	else {
		var p = a.components();
		t = r.collection();
		for (var g = e(function() {
			var e = p[v], n = e.maxDegree(!1), r = e.filter(function(e) {
				return e.degree(!1) === n;
			});
			t = t.add(r);
		}, "_loop"), v = 0; v < p.length; v++) g();
	}
	var y = [], m = {}, x = e(function(e, t) {
		y[t] ?? (y[t] = []);
		var n = y[t].length;
		y[t].push(e), uu(e, {
			index: n,
			depth: t
		});
	}, "addToDepth"), w = e(function(e, t) {
		var n = ul(e), r = n.depth, a = n.index;
		y[r][a] = null, e.isChildless() && x(e, t);
	}, "changeDepth");
	a.bfs({
		roots: t,
		directed: n.directed,
		visit: e(function(e, t, n, r, a) {
			var i = e[0], o = i.id();
			i.isChildless() && x(i, a), m[o] = !0;
		}, "visit")
	});
	for (var E = [], C = 0; C < i.length; C++) {
		var T = i[C];
		m[T.id()] || E.push(T);
	}
	var k = e(function(e) {
		for (var t = y[e], n = 0; n < t.length; n++) {
			var r = t[n];
			if (null == r) {
				t.splice(n, 1), n--;
				continue;
			}
			uu(r, {
				depth: e,
				index: n
			});
		}
	}, "assignDepthsAt"), S = e(function(e, t) {
		for (var r = ul(e), i = e.incomers().filter(function(e) {
			return e.isNode() && a.has(e);
		}), o = -1, s = e.id(), l = 0; l < i.length; l++) o = Math.max(o, ul(i[l]).depth);
		if (r.depth <= o) {
			if (!n.acyclic && t[s]) return null;
			var u = o + 1;
			return w(e, u), t[s] = u, !0;
		}
		return !1;
	}, "adjustMaximally");
	if (o && s) {
		var P = [], B = {}, D = e(function(e) {
			return P.push(e);
		}, "enqueue"), M = e(function() {
			return P.shift();
		}, "dequeue");
		for (i.forEach(function(e) {
			return P.push(e);
		}); P.length > 0;) {
			var R = M(), I = S(R, B);
			if (I) R.outgoers().filter(function(e) {
				return e.isNode() && a.has(e);
			}).forEach(D);
			else if (null === I) {
				e9("Detected double maximal shift for node `" + R.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
				break;
			}
		}
	}
	var L = 0;
	if (n.avoidOverlap) for (var N = 0; N < i.length; N++) {
		var O = i[N].layoutDimensions(n), F = O.w, V = O.h;
		L = Math.max(L, F, V);
	}
	var q = {}, j = e(function(e) {
		if (q[e.id()]) return q[e.id()];
		for (var t = ul(e).depth, n = e.neighborhood(), r = 0, a = 0, o = 0; o < n.length; o++) {
			var s = n[o];
			if (!(s.isEdge() || s.isParent() || !i.has(s))) {
				var l = ul(s);
				if (null != l) {
					var u = l.index, c = l.depth;
					if (null != u && null != c) {
						var d = y[c].length;
						c < t && (r += u / d, a++);
					}
				}
			}
		}
		return r /= a = Math.max(1, a), 0 === a && (r = 0), q[e.id()] = r, r;
	}, "getWeightedPercent"), X = e(function(e, t) {
		var n = j(e) - j(t);
		return 0 === n ? ei(e.id(), t.id()) : n;
	}, "sortFn");
	void 0 !== n.depthSort && (X = n.depthSort);
	for (var Y = y.length, W = 0; W < Y; W++) y[W].sort(X), k(W);
	for (var H = [], K = 0; K < E.length; K++) H.push(E[K]);
	var U = e(function() {
		for (var e = 0; e < Y; e++) k(e);
	}, "assignDepths");
	H.length && (y.unshift(H), Y = y.length, U());
	for (var G = 0, Z = 0; Z < Y; Z++) G = Math.max(y[Z].length, G);
	var $ = {
		x: u.x1 + u.w / 2,
		y: u.y1 + u.h / 2
	}, Q = i.reduce(function(e, t) {
		var r;
		return r = t.boundingBox({ includeLabels: n.nodeDimensionsIncludeLabels }), {
			w: -1 === e.w ? r.w : (e.w + r.w) / 2,
			h: -1 === e.h ? r.h : (e.h + r.h) / 2
		};
	}, {
		w: -1,
		h: -1
	}), J = Math.max(1 === Y ? 0 : l ? (u.h - 2 * n.padding - Q.h) / (Y - 1) : (u.h - 2 * n.padding - Q.h) / (Y + 1), L), ee = y.reduce(function(e, t) {
		return Math.max(e, t.length);
	}, 0), et = e(function(e) {
		var t = ul(e), r = t.depth, a = t.index;
		if (n.circle) {
			var i = Math.min(u.w / 2 / Y, u.h / 2 / Y), o = (i = Math.max(i, L)) * r + i - (Y > 0 && y[0].length <= 3 ? i / 2 : 0), s = 2 * Math.PI / y[r].length * a;
			return 0 === r && 1 === y[0].length && (o = 1), {
				x: $.x + o * Math.cos(s),
				y: $.y + o * Math.sin(s)
			};
		}
		var c = y[r].length, d = Math.max(1 === c ? 0 : l ? (u.w - 2 * n.padding - Q.w) / ((n.grid ? ee : c) - 1) : (u.w - 2 * n.padding - Q.w) / ((n.grid ? ee : c) + 1), L);
		return {
			x: $.x + (a + 1 - (c + 1) / 2) * d,
			y: $.y + (r + 1 - (Y + 1) / 2) * J
		};
	}, "getPositionTopBottom"), en = {
		downward: 0,
		leftward: 90,
		upward: 180,
		rightward: -90
	};
	-1 === Object.keys(en).indexOf(n.direction) && e3("Invalid direction '".concat(n.direction, "' specified for breadthfirst layout. Valid values are: ").concat(Object.keys(en).join(", ")));
	var er = e(function(e) {
		return eG(et(e), u, en[n.direction]);
	}, "getPosition");
	return a.nodes().layoutPositions(this, n, er), this;
};
var ud = {
	fit: !0,
	padding: 30,
	boundingBox: void 0,
	avoidOverlap: !0,
	nodeDimensionsIncludeLabels: !1,
	spacingFactor: void 0,
	radius: void 0,
	startAngle: 1.5 * Math.PI,
	sweep: void 0,
	clockwise: !0,
	sort: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: e(function(e, t) {
		return !0;
	}, "animateFilter"),
	ready: void 0,
	stop: void 0,
	transform: e(function(e, t) {
		return t;
	}, "transform")
};
function uh(e) {
	this.options = es({}, ud, e);
}
e(uh, "CircleLayout"), uh.prototype.run = function() {
	var t = this.options, n = t.cy, r = t.eles, a = void 0 !== t.counterclockwise ? !t.counterclockwise : t.clockwise, i = r.nodes().not(":parent");
	t.sort && (i = i.sort(t.sort));
	for (var o, s = nw(t.boundingBox ? t.boundingBox : {
		x1: 0,
		y1: 0,
		w: n.width(),
		h: n.height()
	}), l = {
		x: s.x1 + s.w / 2,
		y: s.y1 + s.h / 2
	}, u = (void 0 === t.sweep ? 2 * Math.PI - 2 * Math.PI / i.length : t.sweep) / Math.max(1, i.length - 1), c = 0, d = 0; d < i.length; d++) {
		var h = i[d].layoutDimensions(t);
		c = Math.max(c, h.w, h.h);
	}
	if (o = I(t.radius) ? t.radius : i.length <= 1 ? 0 : Math.min(s.h, s.w) / 2 - c, i.length > 1 && t.avoidOverlap) {
		var f = Math.cos(u) - 1, p = Math.sin(u) - 0;
		o = Math.max(Math.sqrt((c *= 1.75) * c / (f * f + p * p)), o);
	}
	var g = e(function(e, n) {
		var r = t.startAngle + n * u * (a ? 1 : -1), i = o * Math.cos(r), s = o * Math.sin(r);
		return {
			x: l.x + i,
			y: l.y + s
		};
	}, "getPos");
	return r.nodes().layoutPositions(this, t, g), this;
};
var uf = {
	fit: !0,
	padding: 30,
	startAngle: 1.5 * Math.PI,
	sweep: void 0,
	clockwise: !0,
	equidistant: !1,
	minNodeSpacing: 10,
	boundingBox: void 0,
	avoidOverlap: !0,
	nodeDimensionsIncludeLabels: !1,
	height: void 0,
	width: void 0,
	spacingFactor: void 0,
	concentric: e(function(e) {
		return e.degree();
	}, "concentric"),
	levelWidth: e(function(e) {
		return e.maxDegree() / 4;
	}, "levelWidth"),
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: e(function(e, t) {
		return !0;
	}, "animateFilter"),
	ready: void 0,
	stop: void 0,
	transform: e(function(e, t) {
		return t;
	}, "transform")
};
function up(e) {
	this.options = es({}, uf, e);
}
e(up, "ConcentricLayout"), up.prototype.run = function() {
	for (var e = this.options, t = void 0 !== e.counterclockwise ? !e.counterclockwise : e.clockwise, n = e.cy, r = e.eles, a = r.nodes().not(":parent"), i = nw(e.boundingBox ? e.boundingBox : {
		x1: 0,
		y1: 0,
		w: n.width(),
		h: n.height()
	}), o = {
		x: i.x1 + i.w / 2,
		y: i.y1 + i.h / 2
	}, s = [], l = 0, u = 0; u < a.length; u++) {
		var c = a[u], d = void 0;
		d = e.concentric(c), s.push({
			value: d,
			node: c
		}), c._private.scratch.concentric = d;
	}
	a.updateStyle();
	for (var h = 0; h < a.length; h++) {
		var f = a[h].layoutDimensions(e);
		l = Math.max(l, f.w, f.h);
	}
	s.sort(function(e, t) {
		return t.value - e.value;
	});
	for (var p = e.levelWidth(a), g = [[]], v = g[0], y = 0; y < s.length; y++) {
		var m = s[y];
		v.length > 0 && Math.abs(v[0].value - m.value) >= p && (v = [], g.push(v)), v.push(m);
	}
	var x = l + e.minNodeSpacing;
	if (!e.avoidOverlap) {
		var w = g.length > 0 && g[0].length > 1, E = (Math.min(i.w, i.h) / 2 - x) / (g.length + w ? 1 : 0);
		x = Math.min(x, E);
	}
	for (var C = 0, T = 0; T < g.length; T++) {
		var k = g[T], S = k.dTheta = (void 0 === e.sweep ? 2 * Math.PI - 2 * Math.PI / k.length : e.sweep) / Math.max(1, k.length - 1);
		if (k.length > 1 && e.avoidOverlap) {
			var P = Math.cos(S) - 1, B = Math.sin(S) - 0;
			C = Math.max(Math.sqrt(x * x / (P * P + B * B)), C);
		}
		k.r = C, C += x;
	}
	if (e.equidistant) {
		for (var _ = 0, D = 0, A = 0; A < g.length; A++) _ = Math.max(_, g[A].r - D);
		D = 0;
		for (var M = 0; M < g.length; M++) {
			var R = g[M];
			0 === M && (D = R.r), R.r = D, D += _;
		}
	}
	for (var I = {}, L = 0; L < g.length; L++) for (var N = g[L], z = N.dTheta, O = N.r, F = 0; F < N.length; F++) {
		var V = N[F], q = e.startAngle + (t ? 1 : -1) * z * F, j = {
			x: o.x + O * Math.cos(q),
			y: o.y + O * Math.sin(q)
		};
		I[V.node.id()] = j;
	}
	return r.nodes().layoutPositions(this, e, function(e) {
		return I[e.id()];
	}), this;
};
var ug, uv = {
	ready: e(function() {}, "ready"),
	stop: e(function() {}, "stop"),
	animate: !0,
	animationEasing: void 0,
	animationDuration: void 0,
	animateFilter: e(function(e, t) {
		return !0;
	}, "animateFilter"),
	animationThreshold: 250,
	refresh: 20,
	fit: !0,
	padding: 30,
	boundingBox: void 0,
	nodeDimensionsIncludeLabels: !1,
	randomize: !1,
	componentSpacing: 40,
	nodeRepulsion: e(function(e) {
		return 2048;
	}, "nodeRepulsion"),
	nodeOverlap: 4,
	idealEdgeLength: e(function(e) {
		return 32;
	}, "idealEdgeLength"),
	edgeElasticity: e(function(e) {
		return 32;
	}, "edgeElasticity"),
	nestingFactor: 1.2,
	gravity: 1,
	numIter: 1e3,
	initialTemp: 1e3,
	coolingFactor: .99,
	minTemp: 1
};
function uy(e) {
	this.options = es({}, uv, e), this.options.layout = this;
	var t = this.options.eles.nodes(), n = this.options.eles.edges().filter(function(e) {
		var n = e.source().data("id"), r = e.target().data("id"), a = t.some(function(e) {
			return e.data("id") === n;
		}), i = t.some(function(e) {
			return e.data("id") === r;
		});
		return !a || !i;
	});
	this.options.eles = this.options.eles.not(n);
}
e(uy, "CoseLayout"), uy.prototype.run = function() {
	var t = this.options, n = t.cy, r = this;
	r.stopped = !1, (!0 === t.animate || !1 === t.animate) && r.emit({
		type: "layoutstart",
		layout: r
	}), ug = !0 === t.debug;
	var a = ub(n, r, t);
	ug && um(a), t.randomize && uE(a);
	var i = eI(), o = e(function() {
		uT(a, n, t), !0 === t.fit && n.fit(t.padding);
	}, "refresh"), s = e(function(e) {
		return !(r.stopped || e >= t.numIter || (uk(a, t), a.temperature = a.temperature * t.coolingFactor, a.temperature < t.minTemp));
	}, "mainLoop"), l = e(function() {
		if (!0 === t.animate || !1 === t.animate) o(), r.one("layoutstop", t.stop), r.emit({
			type: "layoutstop",
			layout: r
		});
		else {
			var e = t.eles.nodes(), n = uC(a, t, e);
			e.layoutPositions(r, t, n);
		}
	}, "done"), u = 0, c = !0;
	if (!0 === t.animate) {
		var d = e(function() {
			for (var e = 0; c && e < t.refresh;) c = s(u), u++, e++;
			c ? (eI() - i >= t.animationThreshold && o(), eN(d)) : (uz(a, t), l());
		}, "frame");
		d();
	} else {
		for (; c;) c = s(u), u++;
		uz(a, t), l();
	}
	return this;
}, uy.prototype.stop = function() {
	return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
}, uy.prototype.destroy = function() {
	return this.thread && this.thread.stop(), this;
};
var um, ub = e(function(e, t, n) {
	for (var r = n.eles.edges(), a = n.eles.nodes(), i = nw(n.boundingBox ? n.boundingBox : {
		x1: 0,
		y1: 0,
		w: e.width(),
		h: e.height()
	}), o = {
		isCompound: e.hasCompoundNodes(),
		layoutNodes: [],
		idToIndex: {},
		nodeSize: a.size(),
		graphSet: [],
		indexToGraph: [],
		layoutEdges: [],
		edgeSize: r.size(),
		temperature: n.initialTemp,
		clientWidth: i.w,
		clientHeight: i.h,
		boundingBox: i
	}, s = n.eles.components(), l = {}, u = 0; u < s.length; u++) for (var c = s[u], d = 0; d < c.length; d++) {
		var h = c[d];
		l[h.id()] = u;
	}
	for (var u = 0; u < o.nodeSize; u++) {
		var f = a[u], p = f.layoutDimensions(n), g = {};
		g.isLocked = f.locked(), g.id = f.data("id"), g.parentId = f.data("parent"), g.cmptId = l[f.id()], g.children = [], g.positionX = f.position("x"), g.positionY = f.position("y"), g.offsetX = 0, g.offsetY = 0, g.height = p.w, g.width = p.h, g.maxX = g.positionX + g.width / 2, g.minX = g.positionX - g.width / 2, g.maxY = g.positionY + g.height / 2, g.minY = g.positionY - g.height / 2, g.padLeft = parseFloat(f.style("padding")), g.padRight = parseFloat(f.style("padding")), g.padTop = parseFloat(f.style("padding")), g.padBottom = parseFloat(f.style("padding")), g.nodeRepulsion = D(n.nodeRepulsion) ? n.nodeRepulsion(f) : n.nodeRepulsion, o.layoutNodes.push(g), o.idToIndex[g.id] = u;
	}
	for (var v = [], y = 0, m = -1, x = [], u = 0; u < o.nodeSize; u++) {
		var f = o.layoutNodes[u], w = f.parentId;
		null != w ? o.layoutNodes[o.idToIndex[w]].children.push(f.id) : (v[++m] = f.id, x.push(f.id));
	}
	for (o.graphSet.push(x); y <= m;) {
		var E = v[y++], C = o.idToIndex[E], h = o.layoutNodes[C], T = h.children;
		if (T.length > 0) {
			o.graphSet.push(T);
			for (var u = 0; u < T.length; u++) v[++m] = T[u];
		}
	}
	for (var u = 0; u < o.graphSet.length; u++) for (var k = o.graphSet[u], d = 0; d < k.length; d++) {
		var S = o.idToIndex[k[d]];
		o.indexToGraph[S] = u;
	}
	for (var u = 0; u < o.edgeSize; u++) {
		var P = r[u], B = {};
		B.id = P.data("id"), B.sourceId = P.data("source"), B.targetId = P.data("target");
		var _ = D(n.idealEdgeLength) ? n.idealEdgeLength(P) : n.idealEdgeLength, A = D(n.edgeElasticity) ? n.edgeElasticity(P) : n.edgeElasticity, M = o.idToIndex[B.sourceId], R = o.idToIndex[B.targetId];
		if (o.indexToGraph[M] != o.indexToGraph[R]) {
			for (var I = ux(B.sourceId, B.targetId, o), L = o.graphSet[I], N = 0, g = o.layoutNodes[M]; -1 === L.indexOf(g.id);) g = o.layoutNodes[o.idToIndex[g.parentId]], N++;
			for (g = o.layoutNodes[R]; -1 === L.indexOf(g.id);) g = o.layoutNodes[o.idToIndex[g.parentId]], N++;
			_ *= N * n.nestingFactor;
		}
		B.idealLength = _, B.elasticity = A, o.layoutEdges.push(B);
	}
	return o;
}, "createLayoutInfo"), ux = e(function(e, t, n) {
	var r = uw(e, t, 0, n);
	return 2 > r.count ? 0 : r.graph;
}, "findLCA"), uw = e(function(e, t, n, r) {
	var a = r.graphSet[n];
	if (-1 < a.indexOf(e) && -1 < a.indexOf(t)) return {
		count: 2,
		graph: n
	};
	for (var i = 0, o = 0; o < a.length; o++) {
		var s = a[o], l = r.idToIndex[s], u = r.layoutNodes[l].children;
		if (0 !== u.length) {
			var c = uw(e, t, r.indexToGraph[r.idToIndex[u[0]]], r);
			if (0 !== c.count) {
				if (1 !== c.count) return c;
				else if (2 == ++i) break;
			}
		}
	}
	return {
		count: i,
		graph: n
	};
}, "findLCA_aux"), uE = e(function(e, t) {
	for (var n = e.clientWidth, r = e.clientHeight, a = 0; a < e.nodeSize; a++) {
		var i = e.layoutNodes[a];
		0 !== i.children.length || i.isLocked || (i.positionX = Math.random() * n, i.positionY = Math.random() * r);
	}
}, "randomizePositions"), uC = e(function(e, t, n) {
	var r = e.boundingBox, a = {
		x1: Infinity,
		x2: -Infinity,
		y1: Infinity,
		y2: -Infinity
	};
	return t.boundingBox && (n.forEach(function(t) {
		var n = e.layoutNodes[e.idToIndex[t.data("id")]];
		a.x1 = Math.min(a.x1, n.positionX), a.x2 = Math.max(a.x2, n.positionX), a.y1 = Math.min(a.y1, n.positionY), a.y2 = Math.max(a.y2, n.positionY);
	}), a.w = a.x2 - a.x1, a.h = a.y2 - a.y1), function(n, i) {
		var o = e.layoutNodes[e.idToIndex[n.data("id")]];
		if (!t.boundingBox) return {
			x: o.positionX,
			y: o.positionY
		};
		var s = 0 === a.w ? .5 : (o.positionX - a.x1) / a.w, l = 0 === a.h ? .5 : (o.positionY - a.y1) / a.h;
		return {
			x: r.x1 + s * r.w,
			y: r.y1 + l * r.h
		};
	};
}, "getScaleInBoundsFn"), uT = e(function(e, t, n) {
	var r = n.layout, a = n.eles.nodes(), i = uC(e, n, a);
	a.positions(i), !0 !== e.ready && (e.ready = !0, r.one("layoutready", n.ready), r.emit({
		type: "layoutready",
		layout: this
	}));
}, "refreshPositions"), uk = e(function(e, t, n) {
	uS(e, t), uA(e), uM(e, t), uR(e), uI(e);
}, "step"), uS = e(function(e, t) {
	for (var n = 0; n < e.graphSet.length; n++) for (var r = e.graphSet[n], a = r.length, i = 0; i < a; i++) for (var o = e.layoutNodes[e.idToIndex[r[i]]], s = i + 1; s < a; s++) uB(o, e.layoutNodes[e.idToIndex[r[s]]], e, t);
}, "calculateNodeForces"), uP = e(function(e) {
	return -1 + 2 * e * Math.random();
}, "randomDistance"), uB = e(function(e, t, n, r) {
	if (!(e.cmptId !== t.cmptId && !n.isCompound)) {
		var a = t.positionX - e.positionX, i = t.positionY - e.positionY;
		0 === a && 0 === i && (a = uP(1), i = uP(1));
		var o = u_(e, t, a, i);
		if (o > 0) var s = r.nodeOverlap * o, l = Math.sqrt(a * a + i * i), u = s * a / l, c = s * i / l;
		else var d = uD(e, a, i), h = uD(t, -1 * a, -1 * i), f = h.x - d.x, p = h.y - d.y, g = f * f + p * p, l = Math.sqrt(g), s = (e.nodeRepulsion + t.nodeRepulsion) / g, u = s * f / l, c = s * p / l;
		e.isLocked || (e.offsetX -= u, e.offsetY -= c), t.isLocked || (t.offsetX += u, t.offsetY += c);
	}
}, "nodeRepulsion"), u_ = e(function(e, t, n, r) {
	if (n > 0) var a = e.maxX - t.minX;
	else var a = t.maxX - e.minX;
	if (r > 0) var i = e.maxY - t.minY;
	else var i = t.maxY - e.minY;
	return a >= 0 && i >= 0 ? Math.sqrt(a * a + i * i) : 0;
}, "nodesOverlap"), uD = e(function(e, t, n) {
	var r = e.positionX, a = e.positionY, i = e.height || 1, o = e.width || 1, s = n / t, l = i / o, u = {};
	return 0 === t && 0 < n || 0 === t && 0 > n ? (u.x = r, u.y = a + i / 2) : 0 < t && -1 * l <= s && s <= l ? (u.x = r + o / 2, u.y = a + o * n / 2 / t) : 0 > t && -1 * l <= s && s <= l ? (u.x = r - o / 2, u.y = a - o * n / 2 / t) : 0 < n && (s <= -1 * l || s >= l) ? (u.x = r + i * t / 2 / n, u.y = a + i / 2) : 0 > n && (s <= -1 * l || s >= l) && (u.x = r - i * t / 2 / n, u.y = a - i / 2), u;
}, "findClippingPoint"), uA = e(function(e, t) {
	for (var n = 0; n < e.edgeSize; n++) {
		var r = e.layoutEdges[n], a = e.idToIndex[r.sourceId], i = e.layoutNodes[a], o = e.idToIndex[r.targetId], s = e.layoutNodes[o], l = s.positionX - i.positionX, u = s.positionY - i.positionY;
		if (0 !== l || 0 !== u) {
			var c = uD(i, l, u), d = uD(s, -1 * l, -1 * u), h = d.x - c.x, f = d.y - c.y, p = Math.sqrt(h * h + f * f), g = Math.pow(r.idealLength - p, 2) / r.elasticity;
			if (0 !== p) var v = g * h / p, y = g * f / p;
			else var v = 0, y = 0;
			i.isLocked || (i.offsetX += v, i.offsetY += y), s.isLocked || (s.offsetX -= v, s.offsetY -= y);
		}
	}
}, "calculateEdgeForces"), uM = e(function(e, t) {
	if (0 !== t.gravity) for (var n = 0; n < e.graphSet.length; n++) {
		var r = e.graphSet[n], a = r.length;
		if (0 === n) var i = e.clientHeight / 2, o = e.clientWidth / 2;
		else var s = e.layoutNodes[e.idToIndex[r[0]]], l = e.layoutNodes[e.idToIndex[s.parentId]], i = l.positionX, o = l.positionY;
		for (var u = 0; u < a; u++) {
			var c = e.layoutNodes[e.idToIndex[r[u]]];
			if (!c.isLocked) {
				var d = i - c.positionX, h = o - c.positionY, f = Math.sqrt(d * d + h * h);
				if (f > 1) {
					var p = t.gravity * d / f, g = t.gravity * h / f;
					c.offsetX += p, c.offsetY += g;
				}
			}
		}
	}
}, "calculateGravityForces"), uR = e(function(e, t) {
	var n = [], r = 0, a = -1;
	for (n.push.apply(n, e.graphSet[0]), a += e.graphSet[0].length; r <= a;) {
		var i = n[r++], o = e.idToIndex[i], s = e.layoutNodes[o], l = s.children;
		if (0 < l.length && !s.isLocked) {
			for (var u = s.offsetX, c = s.offsetY, d = 0; d < l.length; d++) {
				var h = e.layoutNodes[e.idToIndex[l[d]]];
				h.offsetX += u, h.offsetY += c, n[++a] = l[d];
			}
			s.offsetX = 0, s.offsetY = 0;
		}
	}
}, "propagateForces"), uI = e(function(e, t) {
	for (var n = 0; n < e.nodeSize; n++) {
		var r = e.layoutNodes[n];
		0 < r.children.length && (r.maxX = void 0, r.minX = void 0, r.maxY = void 0, r.minY = void 0);
	}
	for (var n = 0; n < e.nodeSize; n++) {
		var r = e.layoutNodes[n];
		if (!(0 < r.children.length || r.isLocked)) {
			var a = uL(r.offsetX, r.offsetY, e.temperature);
			r.positionX += a.x, r.positionY += a.y, r.offsetX = 0, r.offsetY = 0, r.minX = r.positionX - r.width, r.maxX = r.positionX + r.width, r.minY = r.positionY - r.height, r.maxY = r.positionY + r.height, uN(r, e);
		}
	}
	for (var n = 0; n < e.nodeSize; n++) {
		var r = e.layoutNodes[n];
		0 < r.children.length && !r.isLocked && (r.positionX = (r.maxX + r.minX) / 2, r.positionY = (r.maxY + r.minY) / 2, r.width = r.maxX - r.minX, r.height = r.maxY - r.minY);
	}
}, "updatePositions"), uL = e(function(e, t, n) {
	var r = Math.sqrt(e * e + t * t);
	if (r > n) var a = {
		x: n * e / r,
		y: n * t / r
	};
	else var a = {
		x: e,
		y: t
	};
	return a;
}, "limitForce"), uN = e(function(e, t) {
	var n = e.parentId;
	if (null != n) {
		var r = t.layoutNodes[t.idToIndex[n]], a = !1;
		if ((null == r.maxX || e.maxX + r.padRight > r.maxX) && (r.maxX = e.maxX + r.padRight, a = !0), (null == r.minX || e.minX - r.padLeft < r.minX) && (r.minX = e.minX - r.padLeft, a = !0), (null == r.maxY || e.maxY + r.padBottom > r.maxY) && (r.maxY = e.maxY + r.padBottom, a = !0), (null == r.minY || e.minY - r.padTop < r.minY) && (r.minY = e.minY - r.padTop, a = !0), a) return uN(r, t);
	}
}, "updateAncestryBoundaries"), uz = e(function(e, t) {
	for (var n = e.layoutNodes, r = [], a = 0; a < n.length; a++) {
		var i = n[a], o = i.cmptId;
		(r[o] = r[o] || []).push(i);
	}
	for (var s = 0, a = 0; a < r.length; a++) {
		var l = r[a];
		if (l) {
			l.x1 = Infinity, l.x2 = -Infinity, l.y1 = Infinity, l.y2 = -Infinity;
			for (var u = 0; u < l.length; u++) {
				var c = l[u];
				l.x1 = Math.min(l.x1, c.positionX - c.width / 2), l.x2 = Math.max(l.x2, c.positionX + c.width / 2), l.y1 = Math.min(l.y1, c.positionY - c.height / 2), l.y2 = Math.max(l.y2, c.positionY + c.height / 2);
			}
			l.w = l.x2 - l.x1, l.h = l.y2 - l.y1, s += l.w * l.h;
		}
	}
	r.sort(function(e, t) {
		return t.w * t.h - e.w * e.h;
	});
	for (var d = 0, h = 0, f = 0, p = 0, g = Math.sqrt(s) * e.clientWidth / e.clientHeight, a = 0; a < r.length; a++) {
		var l = r[a];
		if (l) {
			for (var u = 0; u < l.length; u++) {
				var c = l[u];
				c.isLocked || (c.positionX += d - l.x1, c.positionY += h - l.y1);
			}
			d += l.w + t.componentSpacing, f += l.w + t.componentSpacing, p = Math.max(p, l.h), f > g && (h += p + t.componentSpacing, d = 0, f = 0, p = 0);
		}
	}
}, "separateComponents"), uO = {
	fit: !0,
	padding: 30,
	boundingBox: void 0,
	avoidOverlap: !0,
	avoidOverlapPadding: 10,
	nodeDimensionsIncludeLabels: !1,
	spacingFactor: void 0,
	condense: !1,
	rows: void 0,
	cols: void 0,
	position: e(function(e) {}, "position"),
	sort: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: e(function(e, t) {
		return !0;
	}, "animateFilter"),
	ready: void 0,
	stop: void 0,
	transform: e(function(e, t) {
		return t;
	}, "transform")
};
function uF(e) {
	this.options = es({}, uO, e);
}
e(uF, "GridLayout"), uF.prototype.run = function() {
	var t = this.options, n = t.cy, r = t.eles, a = r.nodes().not(":parent");
	t.sort && (a = a.sort(t.sort));
	var i = nw(t.boundingBox ? t.boundingBox : {
		x1: 0,
		y1: 0,
		w: n.width(),
		h: n.height()
	});
	if (0 === i.h || 0 === i.w) r.nodes().layoutPositions(this, t, function(e) {
		return {
			x: i.x1,
			y: i.y1
		};
	});
	else {
		var o = a.size(), s = Math.sqrt(o * i.h / i.w), l = Math.round(s), u = Math.round(i.w / i.h * s), c = e(function(e) {
			if (null == e) return Math.min(l, u);
			Math.min(l, u) == l ? l = e : u = e;
		}, "small"), d = e(function(e) {
			if (null == e) return Math.max(l, u);
			Math.max(l, u) == l ? l = e : u = e;
		}, "large"), h = t.rows, f = null != t.cols ? t.cols : t.columns;
		if (null != h && null != f) l = h, u = f;
		else if (null != h && null == f) u = Math.ceil(o / (l = h));
		else if (null == h && null != f) l = Math.ceil(o / (u = f));
		else if (u * l > o) {
			var p = c(), g = d();
			(p - 1) * g >= o ? c(p - 1) : (g - 1) * p >= o && d(g - 1);
		} else for (; u * l < o;) {
			var v = c(), y = d();
			(y + 1) * v >= o ? d(y + 1) : c(v + 1);
		}
		var m = i.w / u, x = i.h / l;
		if (t.condense && (m = 0, x = 0), t.avoidOverlap) for (var w = 0; w < a.length; w++) {
			var E = a[w], C = E._private.position;
			(null == C.x || null == C.y) && (C.x = 0, C.y = 0);
			var T = E.layoutDimensions(t), k = t.avoidOverlapPadding, S = T.w + k, P = T.h + k;
			m = Math.max(m, S), x = Math.max(x, P);
		}
		for (var B = {}, _ = e(function(e, t) {
			return !!B["c-" + e + "-" + t];
		}, "used"), D = e(function(e, t) {
			B["c-" + e + "-" + t] = !0;
		}, "use"), A = 0, M = 0, R = e(function() {
			++M >= u && (M = 0, A++);
		}, "moveToNextCell"), I = {}, L = 0; L < a.length; L++) {
			var N = a[L], z = t.position(N);
			if (z && (void 0 !== z.row || void 0 !== z.col)) {
				var O = {
					row: z.row,
					col: z.col
				};
				if (void 0 === O.col) for (O.col = 0; _(O.row, O.col);) O.col++;
				else if (void 0 === O.row) for (O.row = 0; _(O.row, O.col);) O.row++;
				I[N.id()] = O, D(O.row, O.col);
			}
		}
		var F = e(function(e, t) {
			if (e.locked() || e.isParent()) return !1;
			var n, r, a = I[e.id()];
			if (a) n = a.col * m + m / 2 + i.x1, r = a.row * x + x / 2 + i.y1;
			else {
				for (; _(A, M);) R();
				n = M * m + m / 2 + i.x1, r = A * x + x / 2 + i.y1, D(A, M), R();
			}
			return {
				x: n,
				y: r
			};
		}, "getPos");
		a.layoutPositions(this, t, F);
	}
	return this;
};
var uV = {
	ready: e(function() {}, "ready"),
	stop: e(function() {}, "stop")
};
function uq(e) {
	this.options = es({}, uV, e);
}
e(uq, "NullLayout"), uq.prototype.run = function() {
	var e = this.options, t = e.eles;
	return e.cy, this.emit("layoutstart"), t.nodes().positions(function() {
		return {
			x: 0,
			y: 0
		};
	}), this.one("layoutready", e.ready), this.emit("layoutready"), this.one("layoutstop", e.stop), this.emit("layoutstop"), this;
}, uq.prototype.stop = function() {
	return this;
};
var uj = {
	positions: void 0,
	zoom: void 0,
	pan: void 0,
	fit: !0,
	padding: 30,
	spacingFactor: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: e(function(e, t) {
		return !0;
	}, "animateFilter"),
	ready: void 0,
	stop: void 0,
	transform: e(function(e, t) {
		return t;
	}, "transform")
};
function uX(e) {
	this.options = es({}, uj, e);
}
e(uX, "PresetLayout"), uX.prototype.run = function() {
	var t = this.options, n = t.eles.nodes(), r = D(t.positions);
	function a(e) {
		return null == t.positions ? nn(e.position()) : r ? t.positions(e) : t.positions[e._private.data.id] ?? null;
	}
	return e(a, "getPosition"), n.layoutPositions(this, t, function(e, t) {
		var n = a(e);
		return !e.locked() && null != n && n;
	}), this;
};
var uY = {
	fit: !0,
	padding: 30,
	boundingBox: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: e(function(e, t) {
		return !0;
	}, "animateFilter"),
	ready: void 0,
	stop: void 0,
	transform: e(function(e, t) {
		return t;
	}, "transform")
};
function uW(e) {
	this.options = es({}, uY, e);
}
e(uW, "RandomLayout"), uW.prototype.run = function() {
	var t = this.options, n = t.cy, r = t.eles, a = nw(t.boundingBox ? t.boundingBox : {
		x1: 0,
		y1: 0,
		w: n.width(),
		h: n.height()
	}), i = e(function(e, t) {
		return {
			x: a.x1 + Math.round(Math.random() * a.w),
			y: a.y1 + Math.round(Math.random() * a.h)
		};
	}, "getPos");
	return r.nodes().layoutPositions(this, t, i), this;
};
var uH = [
	{
		name: "breadthfirst",
		impl: uc
	},
	{
		name: "circle",
		impl: uh
	},
	{
		name: "concentric",
		impl: up
	},
	{
		name: "cose",
		impl: uy
	},
	{
		name: "grid",
		impl: uF
	},
	{
		name: "null",
		impl: uq
	},
	{
		name: "preset",
		impl: uX
	},
	{
		name: "random",
		impl: uW
	}
];
function uK(e) {
	this.options = e, this.notifications = 0;
}
e(uK, "NullRenderer");
var uU = e(function() {}, "noop"), uG = e(function() {
	throw Error("A headless instance can not render images");
}, "throwImgErr");
uK.prototype = {
	recalculateRenderedStyle: uU,
	notify: e(function() {
		this.notifications++;
	}, "notify"),
	init: uU,
	isHeadless: e(function() {
		return !0;
	}, "isHeadless"),
	png: uG,
	jpg: uG
};
var uZ = {};
uZ.arrowShapeWidth = .3, uZ.registerArrowShapes = function() {
	var t = this.arrowShapes = {}, n = this, r = e(function(e, t, n, r, a, i, o) {
		var s = a.x - n / 2 - o, l = a.x + n / 2 + o, u = a.y - n / 2 - o, c = a.y + n / 2 + o;
		return s <= e && e <= l && u <= t && t <= c;
	}, "bbCollide"), a = e(function(e, t, n, r, a) {
		var i = e * Math.cos(r) - t * Math.sin(r), o = e * Math.sin(r) + t * Math.cos(r);
		return {
			x: i * n + a.x,
			y: o * n + a.y
		};
	}, "transform"), i = e(function(e, t, n, r) {
		for (var i = [], o = 0; o < e.length; o += 2) {
			var s = e[o], l = e[o + 1];
			i.push(a(s, l, t, n, r));
		}
		return i;
	}, "transformPoints"), o = e(function(e) {
		for (var t = [], n = 0; n < e.length; n++) {
			var r = e[n];
			t.push(r.x, r.y);
		}
		return t;
	}, "pointsToArr"), s = e(function(e) {
		return e.pstyle("width").pfValue * e.pstyle("arrow-scale").pfValue * 2;
	}, "standardGap"), l = e(function(a, l) {
		_(l) && (l = t[l]), t[a] = es({
			name: a,
			points: [
				-.15,
				-.3,
				.15,
				-.3,
				.15,
				.3,
				-.15,
				.3
			],
			collide: e(function(e, t, n, r, a, s) {
				return nX(e, t, o(i(this.points, n + 2 * s, r, a)));
			}, "collide"),
			roughCollide: r,
			draw: e(function(e, t, r, a) {
				var o = i(this.points, t, r, a);
				n.arrowShapeImpl("polygon")(e, o);
			}, "draw"),
			spacing: e(function(e) {
				return 0;
			}, "spacing"),
			gap: s
		}, l);
	}, "defineArrowShape");
	l("none", {
		collide: e1,
		roughCollide: e1,
		draw: e5,
		spacing: e2,
		gap: e2
	}), l("triangle", { points: [
		-.15,
		-.3,
		0,
		0,
		.15,
		-.3
	] }), l("arrow", "triangle"), l("triangle-backcurve", {
		points: t.triangle.points,
		controlPoint: [0, -.15],
		roughCollide: r,
		draw: e(function(e, t, r, o, s) {
			var l = i(this.points, t, r, o), u = this.controlPoint, c = a(u[0], u[1], t, r, o);
			n.arrowShapeImpl(this.name)(e, l, c);
		}, "draw"),
		gap: e(function(e) {
			return .8 * s(e);
		}, "gap")
	}), l("triangle-tee", {
		points: [
			0,
			0,
			.15,
			-.3,
			-.15,
			-.3,
			0,
			0
		],
		pointsTee: [
			-.15,
			-.4,
			-.15,
			-.5,
			.15,
			-.5,
			.15,
			-.4
		],
		collide: e(function(e, t, n, r, a, s, l) {
			var u = o(i(this.points, n + 2 * l, r, a)), c = o(i(this.pointsTee, n + 2 * l, r, a));
			return nX(e, t, u) || nX(e, t, c);
		}, "collide"),
		draw: e(function(e, t, r, a, o) {
			var s = i(this.points, t, r, a), l = i(this.pointsTee, t, r, a);
			n.arrowShapeImpl(this.name)(e, s, l);
		}, "draw")
	}), l("circle-triangle", {
		radius: .15,
		pointsTr: [
			0,
			-.15,
			.15,
			-.45,
			-.15,
			-.45,
			0,
			-.15
		],
		collide: e(function(e, t, n, r, a, s, l) {
			var u = Math.pow(a.x - e, 2) + Math.pow(a.y - t, 2) <= Math.pow((n + 2 * l) * this.radius, 2);
			return nX(e, t, o(i(this.points, n + 2 * l, r, a))) || u;
		}, "collide"),
		draw: e(function(e, t, r, a, o) {
			var s = i(this.pointsTr, t, r, a);
			n.arrowShapeImpl(this.name)(e, s, a.x, a.y, this.radius * t);
		}, "draw"),
		spacing: e(function(e) {
			return n.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.radius;
		}, "spacing")
	}), l("triangle-cross", {
		points: [
			0,
			0,
			.15,
			-.3,
			-.15,
			-.3,
			0,
			0
		],
		baseCrossLinePts: [
			-.15,
			-.4,
			-.15,
			-.4,
			.15,
			-.4,
			.15,
			-.4
		],
		crossLinePts: e(function(e, t) {
			var n = this.baseCrossLinePts.slice(), r = t / e;
			return n[3] = n[3] - r, n[5] = n[5] - r, n;
		}, "crossLinePts"),
		collide: e(function(e, t, n, r, a, s, l) {
			var u = o(i(this.points, n + 2 * l, r, a)), c = o(i(this.crossLinePts(n, s), n + 2 * l, r, a));
			return nX(e, t, u) || nX(e, t, c);
		}, "collide"),
		draw: e(function(e, t, r, a, o) {
			var s = i(this.points, t, r, a), l = i(this.crossLinePts(t, o), t, r, a);
			n.arrowShapeImpl(this.name)(e, s, l);
		}, "draw")
	}), l("vee", {
		points: [
			-.15,
			-.3,
			0,
			0,
			.15,
			-.3,
			0,
			-.15
		],
		gap: e(function(e) {
			return .525 * s(e);
		}, "gap")
	}), l("circle", {
		radius: .15,
		collide: e(function(e, t, n, r, a, i, o) {
			return Math.pow(a.x - e, 2) + Math.pow(a.y - t, 2) <= Math.pow((n + 2 * o) * this.radius, 2);
		}, "collide"),
		draw: e(function(e, t, r, a, i) {
			n.arrowShapeImpl(this.name)(e, a.x, a.y, this.radius * t);
		}, "draw"),
		spacing: e(function(e) {
			return n.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.radius;
		}, "spacing")
	}), l("tee", {
		points: [
			-.15,
			0,
			-.15,
			-.1,
			.15,
			-.1,
			.15,
			0
		],
		spacing: e(function(e) {
			return 1;
		}, "spacing"),
		gap: e(function(e) {
			return 1;
		}, "gap")
	}), l("square", { points: [
		-.15,
		0,
		.15,
		0,
		.15,
		-.3,
		-.15,
		-.3
	] }), l("diamond", {
		points: [
			-.15,
			-.15,
			0,
			-.3,
			.15,
			-.15,
			0,
			0
		],
		gap: e(function(e) {
			return e.pstyle("width").pfValue * e.pstyle("arrow-scale").value;
		}, "gap")
	}), l("chevron", {
		points: [
			0,
			0,
			-.15,
			-.15,
			-.1,
			-.2,
			0,
			-.1,
			.1,
			-.2,
			.15,
			-.15
		],
		gap: e(function(e) {
			return .95 * e.pstyle("width").pfValue * e.pstyle("arrow-scale").value;
		}, "gap")
	});
};
var u$ = {};
u$.projectIntoViewport = function(e, t) {
	var n = this.cy, r = this.findContainerClientCoords(), a = r[0], i = r[1], o = r[4], s = n.pan(), l = n.zoom();
	return [((e - a) / o - s.x) / l, ((t - i) / o - s.y) / l];
}, u$.findContainerClientCoords = function() {
	if (this.containerBB) return this.containerBB;
	var t = this.container, n = t.getBoundingClientRect(), r = this.cy.window().getComputedStyle(t), a = e(function(e) {
		return parseFloat(r.getPropertyValue(e));
	}, "styleValue"), i = {
		left: a("padding-left"),
		right: a("padding-right"),
		top: a("padding-top"),
		bottom: a("padding-bottom")
	}, o = {
		left: a("border-left-width"),
		right: a("border-right-width"),
		top: a("border-top-width"),
		bottom: a("border-bottom-width")
	}, s = t.clientWidth, l = t.clientHeight, u = i.left + i.right, c = i.top + i.bottom, d = o.left + o.right, h = n.width / (s + d), f = n.left + i.left + o.left, p = n.top + i.top + o.top;
	return this.containerBB = [
		f,
		p,
		s - u,
		l - c,
		h
	];
}, u$.invalidateContainerClientCoordsCache = function() {
	this.containerBB = null;
}, u$.findNearestElement = function(e, t, n, r) {
	return this.findNearestElements(e, t, n, r)[0];
}, u$.findNearestElements = function(t, n, r, a) {
	var i, o, s = this, l = this, u = l.getCachedZSortedEles(), c = [], d = l.cy.zoom(), h = l.cy.hasCompoundNodes(), f = (a ? 24 : 8) / d, p = (a ? 8 : 2) / d, g = (a ? 8 : 2) / d, v = Infinity;
	function y(e, t) {
		if (e.isNode()) {
			if (o) return;
			o = e, c.push(e);
		}
		if (e.isEdge() && (null == t || t < v)) if (i) {
			if (i.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value && i.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value) {
				for (var n = 0; n < c.length; n++) if (c[n].isEdge()) {
					c[n] = e, i = e, v = t ?? v;
					break;
				}
			}
		} else c.push(e), i = e, v = t ?? v;
	}
	function m(e) {
		var r = e.outerWidth() + 2 * p, a = e.outerHeight() + 2 * p, i = r / 2, o = a / 2, u = e.position(), c = "auto" === e.pstyle("corner-radius").value ? "auto" : e.pstyle("corner-radius").pfValue, d = e._private.rscratch;
		if (u.x - i <= t && t <= u.x + i && u.y - o <= n && n <= u.y + o && l.nodeShapes[s.getNodeShape(e)].checkPoint(t, n, 0, r, a, u.x, u.y, c, d)) return y(e, 0), !0;
	}
	function x(e) {
		var r, a = e._private, i = a.rscratch, o = e.pstyle("width").pfValue, u = e.pstyle("arrow-scale").value, d = o / 2 + f, p = d * d, g = 2 * d, v = a.source, x = a.target;
		if ("segments" === i.edgeType || "straight" === i.edgeType || "haystack" === i.edgeType) {
			for (var w = i.allpts, E = 0; E + 3 < w.length; E += 2) if (nz(t, n, w[E], w[E + 1], w[E + 2], w[E + 3], g) && p > (r = nj(t, n, w[E], w[E + 1], w[E + 2], w[E + 3]))) return y(e, r), !0;
		} else if ("bezier" === i.edgeType || "multibezier" === i.edgeType || "self" === i.edgeType || "compound" === i.edgeType) {
			for (var w = i.allpts, E = 0; E + 5 < i.allpts.length; E += 4) if (nO(t, n, w[E], w[E + 1], w[E + 2], w[E + 3], w[E + 4], w[E + 5], g) && p > (r = nq(t, n, w[E], w[E + 1], w[E + 2], w[E + 3], w[E + 4], w[E + 5]))) return y(e, r), !0;
		}
		for (var v = v || a.source, x = x || a.target, C = s.getArrowWidth(o, u), T = [
			{
				name: "source",
				x: i.arrowStartX,
				y: i.arrowStartY,
				angle: i.srcArrowAngle
			},
			{
				name: "target",
				x: i.arrowEndX,
				y: i.arrowEndY,
				angle: i.tgtArrowAngle
			},
			{
				name: "mid-source",
				x: i.midX,
				y: i.midY,
				angle: i.midsrcArrowAngle
			},
			{
				name: "mid-target",
				x: i.midX,
				y: i.midY,
				angle: i.midtgtArrowAngle
			}
		], E = 0; E < T.length; E++) {
			var k = T[E], S = l.arrowShapes[e.pstyle(k.name + "-arrow-shape").value], P = e.pstyle("width").pfValue;
			if (S.roughCollide(t, n, C, k.angle, {
				x: k.x,
				y: k.y
			}, P, f) && S.collide(t, n, C, k.angle, {
				x: k.x,
				y: k.y
			}, P, f)) return y(e), !0;
		}
		h && c.length > 0 && (m(v), m(x));
	}
	function w(e, t, n) {
		return ts(e, t, n);
	}
	function E(r, a) {
		var i, o = r._private;
		i = a ? a + "-" : "", r.boundingBox();
		var s = o.labelBounds[a || "main"], l = r.pstyle(i + "label").value;
		if (!("yes" !== r.pstyle("text-events").strValue || !l)) {
			var u = w(o.rscratch, "labelX", a), c = w(o.rscratch, "labelY", a), d = w(o.rscratch, "labelAngle", a), h = r.pstyle(i + "text-margin-x").pfValue, f = r.pstyle(i + "text-margin-y").pfValue, p = s.x1 - g - h, v = s.x2 + g - h, m = s.y1 - g - f, x = s.y2 + g - f;
			if (d) {
				var E = Math.cos(d), C = Math.sin(d), T = e(function(e, t) {
					return {
						x: (e -= u) * E - (t -= c) * C + u,
						y: e * C + t * E + c
					};
				}, "rotate"), k = T(p, m), S = T(p, x), P = T(v, m), B = T(v, x);
				if (nX(t, n, [
					k.x + h,
					k.y + f,
					P.x + h,
					P.y + f,
					B.x + h,
					B.y + f,
					S.x + h,
					S.y + f
				])) return y(r), !0;
			} else if (nD(s, t, n)) return y(r), !0;
		}
	}
	r && (u = u.interactive), e(y, "addEle"), e(m, "checkNode"), e(x, "checkEdge"), e(w, "preprop"), e(E, "checkLabel");
	for (var C = u.length - 1; C >= 0; C--) {
		var T = u[C];
		T.isNode() ? m(T) || E(T) : x(T) || E(T) || E(T, "source") || E(T, "target");
	}
	return c;
}, u$.getAllInBox = function(t, n, r, a) {
	var i = this.getCachedZSortedEles().interactive, o = 2 / this.cy.zoom(), s = [], l = Math.min(t, r), u = Math.max(t, r), c = Math.min(n, a), d = Math.max(n, a);
	t = l, r = u;
	var h = nw({
		x1: t,
		y1: n = c,
		x2: r,
		y2: a = d
	}), p = [
		{
			x: h.x1,
			y: h.y1
		},
		{
			x: h.x2,
			y: h.y1
		},
		{
			x: h.x2,
			y: h.y2
		},
		{
			x: h.x1,
			y: h.y2
		}
	], g = [
		[p[0], p[1]],
		[p[1], p[2]],
		[p[2], p[3]],
		[p[3], p[0]]
	];
	function v(e, t, n) {
		return ts(e, t, n);
	}
	function y(t, n) {
		var r = t._private;
		t.boundingBox();
		var a = r.labelBounds.main;
		if (!a) return null;
		var i = v(r.rscratch, "labelX", n), s = v(r.rscratch, "labelY", n), l = v(r.rscratch, "labelAngle", n), u = t.pstyle("text-margin-x").pfValue, c = t.pstyle("text-margin-y").pfValue, d = a.x1 - o - u, h = a.x2 + o - u, f = a.y1 - o - c, p = a.y2 + o - c;
		if (!l) return [
			{
				x: d,
				y: f
			},
			{
				x: h,
				y: f
			},
			{
				x: h,
				y: p
			},
			{
				x: d,
				y: p
			}
		];
		var g = Math.cos(l), y = Math.sin(l), m = e(function(e, t) {
			return {
				x: (e -= i) * g - (t -= s) * y + i,
				y: e * y + t * g + s
			};
		}, "rotate");
		return [
			m(d, f),
			m(h, f),
			m(h, p),
			m(d, p)
		];
	}
	function m(t, n, r, a) {
		function i(e, t, n) {
			return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
		}
		return e(i, "ccw"), i(t, r, a) !== i(n, r, a) && i(t, n, r) !== i(t, n, a);
	}
	e(v, "preprop"), e(y, "getRotatedLabelBox"), e(m, "doLinesIntersect");
	for (var x = 0; x < i.length; x++) {
		var w = i[x];
		if (w.isNode()) {
			var E = "yes" === w.pstyle("text-events").strValue, C = w.pstyle("box-selection").strValue, T = "yes" === w.pstyle("box-select-labels").strValue;
			if ("none" === C) continue;
			var k = ("overlap" === C || T) && E, S = w.boundingBox({
				includeNodes: !0,
				includeEdges: !1,
				includeLabels: k
			});
			if ("contain" === C) {
				var P = !1;
				if (T && E) {
					var B = y(w);
					B && rt(B, p) && (s.push(w), P = !0);
				}
				!P && nM(h, S) && s.push(w);
			} else if ("overlap" === C && n_(h, S)) {
				var _ = w.boundingBox({
					includeNodes: !0,
					includeEdges: !0,
					includeLabels: !1,
					includeMainLabels: !1,
					includeSourceLabels: !1,
					includeTargetLabels: !1
				});
				if (rt([
					{
						x: _.x1,
						y: _.y1
					},
					{
						x: _.x2,
						y: _.y1
					},
					{
						x: _.x2,
						y: _.y2
					},
					{
						x: _.x1,
						y: _.y2
					}
				], p)) s.push(w);
				else {
					var D = y(w);
					D && rt(D, p) && s.push(w);
				}
			}
		} else {
			var A = w._private, M = A.rscratch, R = w.pstyle("box-selection").strValue;
			if ("none" === R) continue;
			if ("contain" === R) {
				if (null != M.startX && null != M.startY && !nD(h, M.startX, M.startY) || null != M.endX && null != M.endY && !nD(h, M.endX, M.endY)) continue;
				if ("bezier" === M.edgeType || "multibezier" === M.edgeType || "self" === M.edgeType || "compound" === M.edgeType || "segments" === M.edgeType || "haystack" === M.edgeType) {
					for (var I = A.rstyle.bezierPts || A.rstyle.linePts || A.rstyle.haystackPts, L = !0, N = 0; N < I.length; N++) if (!nA(h, I[N])) {
						L = !1;
						break;
					}
					L && s.push(w);
				} else "straight" === M.edgeType && s.push(w);
			} else if ("overlap" === R) {
				var z = !1;
				if (null != M.startX && null != M.startY && null != M.endX && null != M.endY && (nD(h, M.startX, M.startY) || nD(h, M.endX, M.endY))) s.push(w), z = !0;
				else if (!z && "haystack" === M.edgeType) {
					for (var O = A.rstyle.haystackPts, F = 0; F < O.length; F++) if (nA(h, O[F])) {
						s.push(w), z = !0;
						break;
					}
				}
				if (!z) {
					var V = A.rstyle.bezierPts || A.rstyle.linePts || A.rstyle.haystackPts;
					if ((!V || V.length < 2) && "straight" === M.edgeType && null != M.startX && null != M.startY && null != M.endX && null != M.endY && (V = [{
						x: M.startX,
						y: M.startY
					}, {
						x: M.endX,
						y: M.endY
					}]), !V || V.length < 2) continue;
					for (var q = 0; q < V.length - 1; q++) {
						for (var j = V[q], X = V[q + 1], Y = 0; Y < g.length; Y++) {
							var W = f(g[Y], 2);
							if (m(j, X, W[0], W[1])) {
								s.push(w), z = !0;
								break;
							}
						}
						if (z) break;
					}
				}
			}
		}
	}
	return s;
};
var uQ = {};
uQ.calculateArrowAngles = function(e) {
	var t, n, r, a, i, o, s, l, u = e._private.rscratch, c = "haystack" === u.edgeType, d = "bezier" === u.edgeType, h = "multibezier" === u.edgeType, f = "segments" === u.edgeType, p = "compound" === u.edgeType, g = "self" === u.edgeType;
	if (c ? (r = u.haystackPts[0], a = u.haystackPts[1], i = u.haystackPts[2], o = u.haystackPts[3]) : (r = u.arrowStartX, a = u.arrowStartY, i = u.arrowEndX, o = u.arrowEndY), s = u.midX, l = u.midY, f) t = r - u.segpts[0], n = a - u.segpts[1];
	else if (h || p || g || d) {
		var v = u.allpts, y = ny(v[0], v[2], v[4], .1), m = ny(v[1], v[3], v[5], .1);
		t = r - y, n = a - m;
	} else t = r - s, n = a - l;
	u.srcArrowAngle = nd(t, n);
	var s = u.midX, l = u.midY;
	if (c && (s = (r + i) / 2, l = (a + o) / 2), t = i - r, n = o - a, f) {
		var v = u.allpts;
		if (v.length / 2 % 2 == 0) {
			var x = v.length / 2, w = x - 2;
			t = v[x] - v[w], n = v[x + 1] - v[w + 1];
		} else if (u.isRound) t = u.midVector[1], n = -u.midVector[0];
		else {
			var x = v.length / 2 - 1, w = x - 2;
			t = v[x] - v[w], n = v[x + 1] - v[w + 1];
		}
	} else if (h || p || g) {
		var E, C, T, k, v = u.allpts;
		if (u.ctrlpts.length / 2 % 2 == 0) {
			var S = v.length / 2 - 1, P = S + 2, B = P + 2;
			E = ny(v[S], v[P], v[B], 0), C = ny(v[S + 1], v[P + 1], v[B + 1], 0), T = ny(v[S], v[P], v[B], 1e-4), k = ny(v[S + 1], v[P + 1], v[B + 1], 1e-4);
		} else {
			var P = v.length / 2 - 1, S = P - 2, B = P + 2;
			E = ny(v[S], v[P], v[B], .4999), C = ny(v[S + 1], v[P + 1], v[B + 1], .4999), T = ny(v[S], v[P], v[B], .5), k = ny(v[S + 1], v[P + 1], v[B + 1], .5);
		}
		t = T - E, n = k - C;
	}
	if (u.midtgtArrowAngle = nd(t, n), u.midDispX = t, u.midDispY = n, t *= -1, n *= -1, f) {
		var v = u.allpts;
		if (v.length / 2 % 2 != 0 && !u.isRound) {
			var x = v.length / 2 - 1, _ = x + 2;
			t = -(v[_] - v[x]), n = -(v[_ + 1] - v[x + 1]);
		}
	}
	if (u.midsrcArrowAngle = nd(t, n), f) t = i - u.segpts[u.segpts.length - 2], n = o - u.segpts[u.segpts.length - 1];
	else if (h || p || g || d) {
		var v = u.allpts, D = v.length, y = ny(v[D - 6], v[D - 4], v[D - 2], .9), m = ny(v[D - 5], v[D - 3], v[D - 1], .9);
		t = i - y, n = o - m;
	} else t = i - s, n = o - l;
	u.tgtArrowAngle = nd(t, n);
}, uQ.getArrowWidth = uQ.getArrowHeight = function(e, t) {
	var n = this.arrowWidthCache = this.arrowWidthCache || {}, r = n[e + ", " + t];
	return r || (r = Math.max(Math.pow(13.37 * e, .9), 29) * t, n[e + ", " + t] = r, r);
};
var uJ, u0, u1, u2, u5, u3, u4, u9, u6, u8, u7, ce, ct, cn, cr, ca, ci, co = {}, cs = {}, cl = e(function(e, t, n) {
	n.x = t.x - e.x, n.y = t.y - e.y, n.len = Math.sqrt(n.x * n.x + n.y * n.y), n.nx = n.x / n.len, n.ny = n.y / n.len, n.ang = Math.atan2(n.ny, n.nx);
}, "asVec"), cu = e(function(e, t) {
	t.x = -1 * e.x, t.y = -1 * e.y, t.nx = -1 * e.nx, t.ny = -1 * e.ny, t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, "invertVec"), cc = e(function(e, t, n, r, a) {
	if (e !== ci ? cl(t, e, co) : cu(cs, co), cl(t, n, cs), u1 = co.nx * cs.ny - co.ny * cs.nx, u2 = co.nx * cs.nx - -(co.ny * cs.ny), 1e-6 > Math.abs(u4 = Math.asin(Math.max(-1, Math.min(1, u1))))) {
		uJ = t.x, u0 = t.y, u6 = u7 = 0;
		return;
	}
	u5 = 1, u3 = !1, u2 < 0 ? u4 < 0 ? u4 = Math.PI + u4 : (u4 = Math.PI - u4, u5 = -1, u3 = !0) : u4 > 0 && (u5 = -1, u3 = !0), u7 = void 0 !== t.radius ? t.radius : r, u9 = u4 / 2, ce = Math.min(co.len / 2, cs.len / 2), u6 = a ? (u8 = Math.abs(Math.cos(u9) * u7 / Math.sin(u9))) > ce ? Math.abs((u8 = ce) * Math.sin(u9) / Math.cos(u9)) : u7 : Math.abs((u8 = Math.min(ce, u7)) * Math.sin(u9) / Math.cos(u9)), cr = t.x + cs.nx * u8, ca = t.y + cs.ny * u8, uJ = cr - cs.ny * u6 * u5, u0 = ca + cs.nx * u6 * u5, ct = t.x + co.nx * u8, cn = t.y + co.ny * u8, ci = t;
}, "calcCornerArc");
function cd(e, t) {
	0 === t.radius ? e.lineTo(t.cx, t.cy) : e.arc(t.cx, t.cy, t.radius, t.startAngle, t.endAngle, t.counterClockwise);
}
function ch(e, t, n, r) {
	var a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
	return 0 === r || 0 === t.radius ? {
		cx: t.x,
		cy: t.y,
		radius: 0,
		startX: t.x,
		startY: t.y,
		stopX: t.x,
		stopY: t.y,
		startAngle: void 0,
		endAngle: void 0,
		counterClockwise: void 0
	} : (cc(e, t, n, r, a), {
		cx: uJ,
		cy: u0,
		radius: u6,
		startX: ct,
		startY: cn,
		stopX: cr,
		stopY: ca,
		startAngle: co.ang + Math.PI / 2 * u5,
		endAngle: cs.ang - Math.PI / 2 * u5,
		counterClockwise: u3
	});
}
e(cd, "drawPreparedRoundCorner"), e(ch, "getRoundCorner");
var cf = Math.sqrt(.02), cp = {};
function cg(e) {
	var t = [];
	if (null != e) {
		for (var n = 0; n < e.length; n += 2) {
			var r = e[n], a = e[n + 1];
			t.push({
				x: r,
				y: a
			});
		}
		return t;
	}
}
cp.findMidptPtsEtc = function(t, n) {
	var r, a = n.posPts, i = n.intersectionPts, o = n.vectorNormInverse, s = t.pstyle("source-endpoint"), l = t.pstyle("target-endpoint"), u = null != s.units && null != l.units, c = e(function(e, t, n, r) {
		var a = r - t, i = n - e, o = Math.sqrt(i * i + a * a);
		return {
			x: -a / o,
			y: i / o
		};
	}, "recalcVectorNormInverse");
	switch (t.pstyle("edge-distances").value) {
		case "node-position":
			r = a;
			break;
		case "intersection":
			r = i;
			break;
		case "endpoints": if (u) {
			var d = f(this.manualEndptToPx(t.source()[0], s), 2), h = d[0], p = d[1], g = f(this.manualEndptToPx(t.target()[0], l), 2), v = g[0], y = g[1];
			o = c(h, p, v, y), r = {
				x1: h,
				y1: p,
				x2: v,
				y2: y
			};
		} else e9("Edge ".concat(t.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), r = i;
	}
	return {
		midptPts: r,
		vectorNormInverse: o
	};
}, cp.findHaystackPoints = function(e) {
	for (var t = 0; t < e.length; t++) {
		var n = e[t], r = n._private, a = r.rscratch;
		if (!a.haystack) {
			var i = 2 * Math.random() * Math.PI;
			a.source = {
				x: Math.cos(i),
				y: Math.sin(i)
			}, a.target = {
				x: Math.cos(i = 2 * Math.random() * Math.PI),
				y: Math.sin(i)
			};
		}
		var o = r.source, s = r.target, l = o.position(), u = s.position(), c = o.width(), d = s.width(), h = o.height(), f = s.height(), p = n.pstyle("haystack-radius").value / 2;
		a.haystackPts = a.allpts = [
			a.source.x * c * p + l.x,
			a.source.y * h * p + l.y,
			a.target.x * d * p + u.x,
			a.target.y * f * p + u.y
		], a.midX = (a.allpts[0] + a.allpts[2]) / 2, a.midY = (a.allpts[1] + a.allpts[3]) / 2, a.edgeType = "haystack", a.haystack = !0, this.storeEdgeProjections(n), this.calculateArrowAngles(n), this.recalculateEdgeLabelProjections(n), this.calculateLabelAngles(n);
	}
}, cp.findSegmentsPoints = function(e, t) {
	var n = e._private.rscratch, r = e.pstyle("segment-weights"), a = e.pstyle("segment-distances"), i = e.pstyle("segment-radii"), o = e.pstyle("radius-type"), s = Math.min(r.pfValue.length, a.pfValue.length), l = i.pfValue[i.pfValue.length - 1], u = o.pfValue[o.pfValue.length - 1];
	n.edgeType = "segments", n.segpts = [], n.radii = [], n.isArcRadius = [];
	for (var c = 0; c < s; c++) {
		var d = r.pfValue[c], h = a.pfValue[c], f = 1 - d, p = this.findMidptPtsEtc(e, t), g = p.midptPts, v = p.vectorNormInverse, y = {
			x: g.x1 * f + g.x2 * d,
			y: g.y1 * f + g.y2 * d
		};
		n.segpts.push(y.x + v.x * h, y.y + v.y * h), n.radii.push(void 0 !== i.pfValue[c] ? i.pfValue[c] : l), n.isArcRadius.push((void 0 !== o.pfValue[c] ? o.pfValue[c] : u) === "arc-radius");
	}
}, cp.findLoopPoints = function(e, t, n, r) {
	var a = e._private.rscratch, i = t.dirCounts, o = t.srcPos, s = e.pstyle("control-point-distances"), l = s ? s.pfValue[0] : void 0, u = e.pstyle("loop-direction").pfValue, c = e.pstyle("loop-sweep").pfValue, d = e.pstyle("control-point-step-size").pfValue;
	a.edgeType = "self";
	var h = n, f = d;
	r && (h = 0, f = l);
	var p = u - Math.PI / 2, g = p - c / 2, v = p + c / 2, y = u + "_" + c;
	h = void 0 === i[y] ? i[y] = 0 : ++i[y], a.ctrlpts = [
		o.x + 1.4 * Math.cos(g) * f * (h / 3 + 1),
		o.y + 1.4 * Math.sin(g) * f * (h / 3 + 1),
		o.x + 1.4 * Math.cos(v) * f * (h / 3 + 1),
		o.y + 1.4 * Math.sin(v) * f * (h / 3 + 1)
	];
}, cp.findCompoundLoopPoints = function(e, t, n, r) {
	var a = e._private.rscratch;
	a.edgeType = "compound";
	var i = t.srcPos, o = t.tgtPos, s = t.srcW, l = t.srcH, u = t.tgtW, c = t.tgtH, d = e.pstyle("control-point-step-size").pfValue, h = e.pstyle("control-point-distances"), f = h ? h.pfValue[0] : void 0, p = n, g = d;
	r && (p = 0, g = f);
	var v = {
		x: i.x - s / 2,
		y: i.y - l / 2
	}, y = {
		x: o.x - u / 2,
		y: o.y - c / 2
	}, m = {
		x: Math.min(v.x, y.x),
		y: Math.min(v.y, y.y)
	}, x = Math.max(.5, Math.log(.01 * s)), w = Math.max(.5, Math.log(.01 * u));
	a.ctrlpts = [
		m.x,
		m.y - 1.7995514309304248 * g * (p / 3 + 1) * x,
		m.x - 1.7995514309304248 * g * (p / 3 + 1) * w,
		m.y
	];
}, cp.findStraightEdgePoints = function(e) {
	e._private.rscratch.edgeType = "straight";
}, cp.findBezierPoints = function(e, t, n, r, a) {
	var i = e._private.rscratch, o = e.pstyle("control-point-step-size").pfValue, s = e.pstyle("control-point-distances"), l = e.pstyle("control-point-weights"), u = s && l ? Math.min(s.value.length, l.value.length) : 1, c = s ? s.pfValue[0] : void 0, d = l.value[0];
	i.edgeType = r ? "multibezier" : "bezier", i.ctrlpts = [];
	for (var h = 0; h < u; h++) {
		var f = (.5 - t.eles.length / 2 + n) * o * (a ? -1 : 1), p = void 0, g = nf(f);
		r && (c = s ? s.pfValue[h] : o, d = l.value[h]);
		var v = void 0 !== (p = r ? c : void 0 !== c ? g * c : void 0) ? p : f, y = 1 - d, m = d, x = this.findMidptPtsEtc(e, t), w = x.midptPts, E = x.vectorNormInverse, C = {
			x: w.x1 * y + w.x2 * m,
			y: w.y1 * y + w.y2 * m
		};
		i.ctrlpts.push(C.x + E.x * v, C.y + E.y * v);
	}
}, cp.findTaxiPoints = function(t, n) {
	var r, a = t._private.rscratch;
	a.edgeType = "segments";
	var i = "vertical", o = "horizontal", s = "leftward", l = "rightward", u = "downward", c = "upward", d = n.posPts, h = n.srcW, f = n.srcH, p = n.tgtW, g = n.tgtH, v = "node-position" !== t.pstyle("edge-distances").value, y = t.pstyle("taxi-direction").value, m = y, x = t.pstyle("taxi-turn"), w = "%" === x.units, E = x.pfValue, C = E < 0, T = t.pstyle("taxi-turn-min-distance").pfValue, k = d.x2 - d.x1, S = d.y2 - d.y1, P = e(function(e, t) {
		return e > 0 ? Math.max(e - t, 0) : Math.min(e + t, 0);
	}, "subDWH"), B = P(k, v ? (h + p) / 2 : 0), _ = P(S, v ? (f + g) / 2 : 0), D = !1;
	"auto" === m ? y = Math.abs(B) > Math.abs(_) ? o : i : m === c || m === u ? (y = i, D = !0) : (m === s || m === l) && (y = o, D = !0);
	var A = y === i, M = A ? _ : B, R = A ? S : k, I = nf(R), L = !1;
	!(D && (w || C)) && (m === u && R < 0 || m === c && R > 0 || m === s && R > 0 || m === l && R < 0) && (I *= -1, M = I * Math.abs(M), L = !0), r = w ? (E < 0 ? 1 + E : E) * M : (E < 0 ? M : 0) + E * I;
	var N = e(function(e) {
		return Math.abs(e) < T || Math.abs(e) >= Math.abs(M);
	}, "getIsTooClose"), z = N(r), O = N(Math.abs(M) - Math.abs(r));
	if ((z || O) && !L) if (A) {
		var F = Math.abs(k) <= p / 2;
		if (Math.abs(R) <= f / 2) {
			var V = (d.x1 + d.x2) / 2;
			a.segpts = [
				V,
				d.y1,
				V,
				d.y2
			];
		} else if (F) {
			var q = (d.y1 + d.y2) / 2;
			a.segpts = [
				d.x1,
				q,
				d.x2,
				q
			];
		} else a.segpts = [d.x1, d.y2];
	} else {
		var j = Math.abs(S) <= g / 2;
		if (Math.abs(R) <= h / 2) {
			var X = (d.y1 + d.y2) / 2;
			a.segpts = [
				d.x1,
				X,
				d.x2,
				X
			];
		} else if (j) {
			var Y = (d.x1 + d.x2) / 2;
			a.segpts = [
				Y,
				d.y1,
				Y,
				d.y2
			];
		} else a.segpts = [d.x2, d.y1];
	}
	else if (A) {
		var W = d.y1 + r + (v ? f / 2 * I : 0);
		a.segpts = [
			d.x1,
			W,
			d.x2,
			W
		];
	} else {
		var H = d.x1 + r + (v ? h / 2 * I : 0);
		a.segpts = [
			H,
			d.y1,
			H,
			d.y2
		];
	}
	if (a.isRound) {
		var K = t.pstyle("taxi-radius").value, U = "arc-radius" === t.pstyle("radius-type").value[0];
		a.radii = Array(a.segpts.length / 2).fill(K), a.isArcRadius = Array(a.segpts.length / 2).fill(U);
	}
}, cp.tryToCorrectInvalidPoints = function(e, t) {
	var n = e._private.rscratch;
	if ("bezier" === n.edgeType) {
		var r = t.srcPos, a = t.tgtPos, i = t.srcW, o = t.srcH, s = t.tgtW, l = t.tgtH, u = t.srcShape, c = t.tgtShape, d = t.srcCornerRadius, h = t.tgtCornerRadius, f = t.srcRs, p = t.tgtRs, g = !I(n.startX) || !I(n.startY), v = !I(n.arrowStartX) || !I(n.arrowStartY), y = !I(n.endX) || !I(n.endY), m = !I(n.arrowEndX) || !I(n.arrowEndY), x = 3 * (this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth), w = np({
			x: n.ctrlpts[0],
			y: n.ctrlpts[1]
		}, {
			x: n.startX,
			y: n.startY
		}), E = w < x, C = np({
			x: n.ctrlpts[0],
			y: n.ctrlpts[1]
		}, {
			x: n.endX,
			y: n.endY
		}), T = C < x, k = !1;
		if (g || v || E) {
			k = !0;
			var S = {
				x: n.ctrlpts[0] - r.x,
				y: n.ctrlpts[1] - r.y
			}, P = Math.sqrt(S.x * S.x + S.y * S.y), B = {
				x: S.x / P,
				y: S.y / P
			}, _ = Math.max(i, o), D = {
				x: n.ctrlpts[0] + 2 * B.x * _,
				y: n.ctrlpts[1] + 2 * B.y * _
			}, A = u.intersectLine(r.x, r.y, i, o, D.x, D.y, 0, d, f);
			E ? (n.ctrlpts[0] = n.ctrlpts[0] + B.x * (x - w), n.ctrlpts[1] = n.ctrlpts[1] + B.y * (x - w)) : (n.ctrlpts[0] = A[0] + B.x * x, n.ctrlpts[1] = A[1] + B.y * x);
		}
		if (y || m || T) {
			k = !0;
			var M = {
				x: n.ctrlpts[0] - a.x,
				y: n.ctrlpts[1] - a.y
			}, R = Math.sqrt(M.x * M.x + M.y * M.y), L = {
				x: M.x / R,
				y: M.y / R
			}, N = Math.max(i, o), z = {
				x: n.ctrlpts[0] + 2 * L.x * N,
				y: n.ctrlpts[1] + 2 * L.y * N
			}, O = c.intersectLine(a.x, a.y, s, l, z.x, z.y, 0, h, p);
			T ? (n.ctrlpts[0] = n.ctrlpts[0] + L.x * (x - C), n.ctrlpts[1] = n.ctrlpts[1] + L.y * (x - C)) : (n.ctrlpts[0] = O[0] + L.x * x, n.ctrlpts[1] = O[1] + L.y * x);
		}
		k && this.findEndpoints(e);
	}
}, cp.storeAllpts = function(e) {
	var t = e._private.rscratch;
	if ("multibezier" === t.edgeType || "bezier" === t.edgeType || "self" === t.edgeType || "compound" === t.edgeType) {
		t.allpts = [], t.allpts.push(t.startX, t.startY);
		for (var n, r = 0; r + 1 < t.ctrlpts.length; r += 2) t.allpts.push(t.ctrlpts[r], t.ctrlpts[r + 1]), r + 3 < t.ctrlpts.length && t.allpts.push((t.ctrlpts[r] + t.ctrlpts[r + 2]) / 2, (t.ctrlpts[r + 1] + t.ctrlpts[r + 3]) / 2);
		t.allpts.push(t.endX, t.endY), t.ctrlpts.length / 2 % 2 == 0 ? (n = t.allpts.length / 2 - 1, t.midX = t.allpts[n], t.midY = t.allpts[n + 1]) : (n = t.allpts.length / 2 - 3, t.midX = ny(t.allpts[n], t.allpts[n + 2], t.allpts[n + 4], .5), t.midY = ny(t.allpts[n + 1], t.allpts[n + 3], t.allpts[n + 5], .5));
	} else if ("straight" === t.edgeType) t.allpts = [
		t.startX,
		t.startY,
		t.endX,
		t.endY
	], t.midX = (t.startX + t.endX + t.arrowStartX + t.arrowEndX) / 4, t.midY = (t.startY + t.endY + t.arrowStartY + t.arrowEndY) / 4;
	else if ("segments" === t.edgeType) {
		if (t.allpts = [], t.allpts.push(t.startX, t.startY), t.allpts.push.apply(t.allpts, t.segpts), t.allpts.push(t.endX, t.endY), t.isRound) {
			t.roundCorners = [];
			for (var a = 2; a + 3 < t.allpts.length; a += 2) {
				var i = t.radii[a / 2 - 1], o = t.isArcRadius[a / 2 - 1];
				t.roundCorners.push(ch({
					x: t.allpts[a - 2],
					y: t.allpts[a - 1]
				}, {
					x: t.allpts[a],
					y: t.allpts[a + 1],
					radius: i
				}, {
					x: t.allpts[a + 2],
					y: t.allpts[a + 3]
				}, i, o));
			}
		}
		if (t.segpts.length % 4 == 0) {
			var s = t.segpts.length / 2, l = s - 2;
			t.midX = (t.segpts[l] + t.segpts[s]) / 2, t.midY = (t.segpts[l + 1] + t.segpts[s + 1]) / 2;
		} else {
			var u = t.segpts.length / 2 - 1;
			if (t.isRound) {
				var c = {
					x: t.segpts[u],
					y: t.segpts[u + 1]
				}, d = t.roundCorners[u / 2];
				if (0 === d.radius) {
					var h = {
						x: t.segpts[u + 2],
						y: t.segpts[u + 3]
					};
					t.midX = c.x, t.midY = c.y, t.midVector = [c.y - h.y, h.x - c.x];
				} else {
					var f = [c.x - d.cx, c.y - d.cy], p = d.radius / Math.sqrt(Math.pow(f[0], 2) + Math.pow(f[1], 2));
					f = f.map(function(e) {
						return e * p;
					}), t.midX = d.cx + f[0], t.midY = d.cy + f[1], t.midVector = f;
				}
			} else t.midX = t.segpts[u], t.midY = t.segpts[u + 1];
		}
	}
}, cp.checkForInvalidEdgeWarning = function(e) {
	var t = e[0]._private.rscratch;
	t.nodesOverlap || I(t.startX) && I(t.startY) && I(t.endX) && I(t.endY) ? t.loggedErr = !1 : t.loggedErr || (t.loggedErr = !0, e9("Edge `" + e.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
}, cp.findEdgeControlPoints = function(t) {
	var n = this;
	if (!(!t || 0 === t.length)) {
		for (var r = this, a = r.cy.hasCompoundNodes(), i = new tc(), o = e(function(e, t) {
			return [].concat(p(e), [+!!t]).join("-");
		}, "getKey"), s = [], l = [], u = 0; u < t.length; u++) {
			var c = t[u], d = c._private, h = c.pstyle("curve-style").value;
			if (!(c.removed() || !c.takesUpSpace())) {
				if ("haystack" === h) {
					l.push(c);
					continue;
				}
				var f = "unbundled-bezier" === h || J(h, "segments") || "straight" === h || "straight-triangle" === h || J(h, "taxi"), g = "unbundled-bezier" === h || "bezier" === h, v = d.source, y = d.target, m = [v.poolIndex(), y.poolIndex()].sort(), x = o(m, f), w = i.get(x);
				w ?? (w = { eles: [] }, s.push({
					pairId: m,
					edgeIsUnbundled: f
				}), i.set(x, w)), w.eles.push(c), f && (w.hasUnbundled = !0), g && (w.hasBezier = !0);
			}
		}
		for (var E = e(function() {
			var e, t = s[C], l = o(t.pairId, t.edgeIsUnbundled), u = i.get(l);
			if (!u.hasUnbundled) {
				var c = u.eles[0].parallelEdges().filter(function(e) {
					return e.isBundledBezier();
				});
				ti(u.eles), c.forEach(function(e) {
					return u.eles.push(e);
				}), u.eles.sort(function(e, t) {
					return e.poolIndex() - t.poolIndex();
				});
			}
			var d = u.eles[0], h = d.source(), f = d.target();
			if (h.poolIndex() > f.poolIndex()) {
				var p = h;
				h = f, f = p;
			}
			var g = u.srcPos = h.position(), v = u.tgtPos = f.position(), y = u.srcW = h.outerWidth(), m = u.srcH = h.outerHeight(), x = u.tgtW = f.outerWidth(), w = u.tgtH = f.outerHeight(), E = u.srcShape = r.nodeShapes[n.getNodeShape(h)], T = u.tgtShape = r.nodeShapes[n.getNodeShape(f)], k = u.srcCornerRadius = "auto" === h.pstyle("corner-radius").value ? "auto" : h.pstyle("corner-radius").pfValue, S = u.tgtCornerRadius = "auto" === f.pstyle("corner-radius").value ? "auto" : f.pstyle("corner-radius").pfValue, P = u.tgtRs = f._private.rscratch, B = u.srcRs = h._private.rscratch;
			u.dirCounts = {
				north: 0,
				west: 0,
				south: 0,
				east: 0,
				northwest: 0,
				southwest: 0,
				northeast: 0,
				southeast: 0
			};
			for (var _ = 0; _ < u.eles.length; _++) {
				var D = u.eles[_], A = D[0]._private.rscratch, M = D.pstyle("curve-style").value, R = "unbundled-bezier" === M || J(M, "segments") || J(M, "taxi"), L = !h.same(D.source());
				if (!u.calculatedIntersection && h !== f && (u.hasBezier || u.hasUnbundled)) {
					u.calculatedIntersection = !0;
					var N = E.intersectLine(g.x, g.y, y, m, v.x, v.y, 0, k, B), z = u.srcIntn = N, O = T.intersectLine(v.x, v.y, x, w, g.x, g.y, 0, S, P), F = u.tgtIntn = O, V = u.intersectionPts = {
						x1: N[0],
						x2: O[0],
						y1: N[1],
						y2: O[1]
					}, q = u.posPts = {
						x1: g.x,
						x2: v.x,
						y1: g.y,
						y2: v.y
					}, j = O[1] - N[1], X = O[0] - N[0], Y = Math.sqrt(X * X + j * j);
					I(Y) && Y >= cf || (Y = Math.sqrt(Math.max(X * X, .01) + Math.max(j * j, .01)));
					var W = u.vector = {
						x: X,
						y: j
					}, H = u.vectorNorm = {
						x: W.x / Y,
						y: W.y / Y
					}, K = {
						x: -H.y,
						y: H.x
					};
					u.nodesOverlap = !I(Y) || T.checkPoint(N[0], N[1], 0, x, w, v.x, v.y, S, P) || E.checkPoint(O[0], O[1], 0, y, m, g.x, g.y, k, B), u.vectorNormInverse = K, e = {
						nodesOverlap: u.nodesOverlap,
						dirCounts: u.dirCounts,
						calculatedIntersection: !0,
						hasBezier: u.hasBezier,
						hasUnbundled: u.hasUnbundled,
						eles: u.eles,
						srcPos: v,
						srcRs: P,
						tgtPos: g,
						tgtRs: B,
						srcW: x,
						srcH: w,
						tgtW: y,
						tgtH: m,
						srcIntn: F,
						tgtIntn: z,
						srcShape: T,
						tgtShape: E,
						posPts: {
							x1: q.x2,
							y1: q.y2,
							x2: q.x1,
							y2: q.y1
						},
						intersectionPts: {
							x1: V.x2,
							y1: V.y2,
							x2: V.x1,
							y2: V.y1
						},
						vector: {
							x: -W.x,
							y: -W.y
						},
						vectorNorm: {
							x: -H.x,
							y: -H.y
						},
						vectorNormInverse: {
							x: -K.x,
							y: -K.y
						}
					};
				}
				var U = L ? e : u;
				A.nodesOverlap = U.nodesOverlap, A.srcIntn = U.srcIntn, A.tgtIntn = U.tgtIntn, A.isRound = M.startsWith("round"), a && (h.isParent() || h.isChild() || f.isParent() || f.isChild()) && (h.parents().anySame(f) || f.parents().anySame(h) || h.same(f) && h.isParent()) ? n.findCompoundLoopPoints(D, U, _, R) : h === f ? n.findLoopPoints(D, U, _, R) : M.endsWith("segments") ? n.findSegmentsPoints(D, U) : M.endsWith("taxi") ? n.findTaxiPoints(D, U) : "straight" !== M && (R || u.eles.length % 2 != 1 || _ !== Math.floor(u.eles.length / 2)) ? n.findBezierPoints(D, U, _, R, L) : n.findStraightEdgePoints(D), n.findEndpoints(D), n.tryToCorrectInvalidPoints(D, U), n.checkForInvalidEdgeWarning(D), n.storeAllpts(D), n.storeEdgeProjections(D), n.calculateArrowAngles(D), n.recalculateEdgeLabelProjections(D), n.calculateLabelAngles(D);
			}
		}, "_loop"), C = 0; C < s.length; C++) E();
		this.findHaystackPoints(l);
	}
}, e(cg, "getPts"), cp.getSegmentPoints = function(e) {
	var t = e[0]._private.rscratch;
	if (this.recalculateRenderedStyle(e), "segments" === t.edgeType) return cg(t.segpts);
}, cp.getControlPoints = function(e) {
	var t = e[0]._private.rscratch;
	this.recalculateRenderedStyle(e);
	var n = t.edgeType;
	if ("bezier" === n || "multibezier" === n || "self" === n || "compound" === n) return cg(t.ctrlpts);
}, cp.getEdgeMidpoint = function(e) {
	var t = e[0]._private.rscratch;
	return this.recalculateRenderedStyle(e), {
		x: t.midX,
		y: t.midY
	};
};
var cv = {};
cv.manualEndptToPx = function(e, t) {
	var n = e.position(), r = e.outerWidth(), a = e.outerHeight(), i = e._private.rscratch;
	if (2 === t.value.length) {
		var o = [t.pfValue[0], t.pfValue[1]];
		return "%" === t.units[0] && (o[0] = o[0] * r), "%" === t.units[1] && (o[1] = o[1] * a), o[0] += n.x, o[1] += n.y, o;
	}
	var s = t.pfValue[0];
	s = -Math.PI / 2 + s;
	var l = 2 * Math.max(r, a), u = [n.x + Math.cos(s) * l, n.y + Math.sin(s) * l];
	return this.nodeShapes[this.getNodeShape(e)].intersectLine(n.x, n.y, r, a, u[0], u[1], 0, "auto" === e.pstyle("corner-radius").value ? "auto" : e.pstyle("corner-radius").pfValue, i);
}, cv.findEndpoints = function(e) {
	var t, n, r, a, i, o = e.source()[0], s = e.target()[0], l = o.position(), u = s.position(), c = e.pstyle("target-arrow-shape").value, d = e.pstyle("source-arrow-shape").value, h = e.pstyle("target-distance-from-node").pfValue, f = e.pstyle("source-distance-from-node").pfValue, p = o._private.rscratch, g = s._private.rscratch, v = e.pstyle("curve-style").value, y = e._private.rscratch, m = y.edgeType, x = J(v, "taxi"), w = "self" === m || "compound" === m, E = "bezier" === m || "multibezier" === m || w, C = "bezier" !== m, T = "straight" === m || "segments" === m, k = "segments" === m, S = w || x, P = e.pstyle("source-endpoint"), B = S ? "outside-to-node" : P.value, _ = "auto" === o.pstyle("corner-radius").value ? "auto" : o.pstyle("corner-radius").pfValue, D = e.pstyle("target-endpoint"), A = S ? "outside-to-node" : D.value, M = "auto" === s.pstyle("corner-radius").value ? "auto" : s.pstyle("corner-radius").pfValue;
	y.srcManEndpt = P, y.tgtManEndpt = D;
	var R, L, N, z, O = null != (t = (null == D || null == (n = D.pfValue) ? void 0 : n.length) === 2 ? D.pfValue : null) ? t : [0, 0], F = null != (r = (null == P || null == (a = P.pfValue) ? void 0 : a.length) === 2 ? P.pfValue : null) ? r : [0, 0];
	if (E) {
		var V = [y.ctrlpts[0], y.ctrlpts[1]];
		R = C ? [y.ctrlpts[y.ctrlpts.length - 2], y.ctrlpts[y.ctrlpts.length - 1]] : V, L = V;
	} else if (T) {
		var q = k ? y.segpts.slice(0, 2) : [u.x + O[0], u.y + O[1]];
		R = k ? y.segpts.slice(y.segpts.length - 2) : [l.x + F[0], l.y + F[1]], L = q;
	}
	if ("inside-to-node" === A) i = [u.x, u.y];
	else if (D.units) i = this.manualEndptToPx(s, D);
	else if ("outside-to-line" === A) i = y.tgtIntn;
	else if ("outside-to-node" === A || "outside-to-node-or-label" === A ? N = R : ("outside-to-line" === A || "outside-to-line-or-label" === A) && (N = [l.x, l.y]), i = this.nodeShapes[this.getNodeShape(s)].intersectLine(u.x, u.y, s.outerWidth(), s.outerHeight(), N[0], N[1], 0, M, g), "outside-to-node-or-label" === A || "outside-to-line-or-label" === A) {
		var j = s._private.rscratch, X = j.labelWidth, Y = j.labelHeight, W = j.labelX, H = j.labelY, K = X / 2, U = Y / 2, G = s.pstyle("text-valign").value;
		"top" === G ? H -= U : "bottom" === G && (H += U);
		var Z = s.pstyle("text-halign").value;
		"left" === Z ? W -= K : "right" === Z && (W += K);
		var $ = n0(N[0], N[1], [
			W - K,
			H - U,
			W + K,
			H - U,
			W + K,
			H + U,
			W - K,
			H + U
		], u.x, u.y);
		if ($.length > 0) {
			var Q = ng(l, ni(i)), ee = ng(l, ni($)), et = Q;
			ee < Q && (i = $, et = ee), $.length > 2 && ng(l, {
				x: $[2],
				y: $[3]
			}) < et && (i = [$[2], $[3]]);
		}
	}
	var en = n2(i, R, this.arrowShapes[c].spacing(e) + h), er = n2(i, R, this.arrowShapes[c].gap(e) + h);
	if (y.endX = er[0], y.endY = er[1], y.arrowEndX = en[0], y.arrowEndY = en[1], "inside-to-node" === B) i = [l.x, l.y];
	else if (P.units) i = this.manualEndptToPx(o, P);
	else if ("outside-to-line" === B) i = y.srcIntn;
	else if ("outside-to-node" === B || "outside-to-node-or-label" === B ? z = L : ("outside-to-line" === B || "outside-to-line-or-label" === B) && (z = [u.x, u.y]), i = this.nodeShapes[this.getNodeShape(o)].intersectLine(l.x, l.y, o.outerWidth(), o.outerHeight(), z[0], z[1], 0, _, p), "outside-to-node-or-label" === B || "outside-to-line-or-label" === B) {
		var ea = o._private.rscratch, ei = ea.labelWidth, eo = ea.labelHeight, es = ea.labelX, el = ea.labelY, eu = ei / 2, ec = eo / 2, ed = o.pstyle("text-valign").value;
		"top" === ed ? el -= ec : "bottom" === ed && (el += ec);
		var eh = o.pstyle("text-halign").value;
		"left" === eh ? es -= eu : "right" === eh && (es += eu);
		var ef = n0(z[0], z[1], [
			es - eu,
			el - ec,
			es + eu,
			el - ec,
			es + eu,
			el + ec,
			es - eu,
			el + ec
		], l.x, l.y);
		if (ef.length > 0) {
			var ep = ng(u, ni(i)), eg = ng(u, ni(ef)), ev = ep;
			eg < ep && (i = [ef[0], ef[1]], ev = eg), ef.length > 2 && ng(u, {
				x: ef[2],
				y: ef[3]
			}) < ev && (i = [ef[2], ef[3]]);
		}
	}
	var ey = n2(i, L, this.arrowShapes[d].spacing(e) + f), em = n2(i, L, this.arrowShapes[d].gap(e) + f);
	y.startX = em[0], y.startY = em[1], y.arrowStartX = ey[0], y.arrowStartY = ey[1], (E || C || T) && (I(y.startX) && I(y.startY) && I(y.endX) && I(y.endY) ? y.badLine = !1 : y.badLine = !0);
}, cv.getSourceEndpoint = function(e) {
	var t = e[0]._private.rscratch;
	return (this.recalculateRenderedStyle(e), "haystack" === t.edgeType) ? {
		x: t.haystackPts[0],
		y: t.haystackPts[1]
	} : {
		x: t.arrowStartX,
		y: t.arrowStartY
	};
}, cv.getTargetEndpoint = function(e) {
	var t = e[0]._private.rscratch;
	return (this.recalculateRenderedStyle(e), "haystack" === t.edgeType) ? {
		x: t.haystackPts[2],
		y: t.haystackPts[3]
	} : {
		x: t.arrowEndX,
		y: t.arrowEndY
	};
};
var cy = {};
function cm(t, n, r) {
	for (var a = e(function(e, t, n, r) {
		return ny(e, t, n, r);
	}, "qbezierAt$1"), i = n._private.rstyle.bezierPts, o = 0; o < t.bezierProjPcts.length; o++) {
		var s = t.bezierProjPcts[o];
		i.push({
			x: a(r[0], r[2], r[4], s),
			y: a(r[1], r[3], r[5], s)
		});
	}
}
e(cm, "pushBezierPts"), cy.storeEdgeProjections = function(e) {
	var t = e._private, n = t.rscratch, r = n.edgeType;
	if (t.rstyle.bezierPts = null, t.rstyle.linePts = null, t.rstyle.haystackPts = null, "multibezier" === r || "bezier" === r || "self" === r || "compound" === r) {
		t.rstyle.bezierPts = [];
		for (var a = 0; a + 5 < n.allpts.length; a += 4) cm(this, e, n.allpts.slice(a, a + 6));
	} else if ("segments" === r) for (var i = t.rstyle.linePts = [], a = 0; a + 1 < n.allpts.length; a += 2) i.push({
		x: n.allpts[a],
		y: n.allpts[a + 1]
	});
	else if ("haystack" === r) {
		var o = n.haystackPts;
		t.rstyle.haystackPts = [{
			x: o[0],
			y: o[1]
		}, {
			x: o[2],
			y: o[3]
		}];
	}
	t.rstyle.arrowWidth = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth;
}, cy.recalculateEdgeProjections = function(e) {
	this.findEdgeControlPoints(e);
};
var cb = {};
cb.recalculateNodeLabelProjection = function(e) {
	if (!X(e.pstyle("label").strValue)) {
		var t, n, r = e._private, a = e.width(), i = e.height(), o = e.padding(), s = e.position(), l = e.pstyle("text-halign").strValue, u = e.pstyle("text-valign").strValue, c = r.rscratch, d = r.rstyle;
		switch (l) {
			case "left":
				t = s.x - a / 2 - o;
				break;
			case "right":
				t = s.x + a / 2 + o;
				break;
			default: t = s.x;
		}
		switch (u) {
			case "top":
				n = s.y - i / 2 - o;
				break;
			case "bottom":
				n = s.y + i / 2 + o;
				break;
			default: n = s.y;
		}
		c.labelX = t, c.labelY = n, d.labelX = t, d.labelY = n, this.calculateLabelAngles(e), this.applyLabelDimensions(e);
	}
};
var cx = e(function(e, t) {
	var n = Math.atan(t / e);
	return 0 === e && n < 0 && (n *= -1), n;
}, "lineAngleFromDelta"), cw = e(function(e, t) {
	return cx(t.x - e.x, t.y - e.y);
}, "lineAngle"), cE = e(function(e, t, n, r) {
	var a = nx(0, r - .001, 1), i = nx(0, r + .001, 1);
	return cw(nm(e, t, n, a), nm(e, t, n, i));
}, "bezierAngle");
cb.recalculateEdgeLabelProjections = function(t) {
	var n, r = t._private, a = r.rscratch, i = this, o = {
		mid: t.pstyle("label").strValue,
		source: t.pstyle("source-label").strValue,
		target: t.pstyle("target-label").strValue
	};
	if (o.mid || o.source || o.target) {
		n = {
			x: a.midX,
			y: a.midY
		};
		var s = e(function(e, t, n) {
			tl(r.rscratch, e, t, n), tl(r.rstyle, e, t, n);
		}, "setRs");
		s("labelX", null, n.x), s("labelY", null, n.y), s("labelAutoAngle", null, cx(a.midDispX, a.midDispY));
		var l = e(function() {
			if (l.cache) return l.cache;
			for (var t = [], n = 0; n + 5 < a.allpts.length; n += 4) {
				var o = {
					x: a.allpts[n],
					y: a.allpts[n + 1]
				}, s = {
					x: a.allpts[n + 2],
					y: a.allpts[n + 3]
				}, u = {
					x: a.allpts[n + 4],
					y: a.allpts[n + 5]
				};
				t.push({
					p0: o,
					p1: s,
					p2: u,
					startDist: 0,
					length: 0,
					segments: []
				});
			}
			var c = r.rstyle.bezierPts, d = i.bezierProjPcts.length;
			function h(e, t, n, r, a) {
				var i = np(t, n), o = e.segments[e.segments.length - 1], s = {
					p0: t,
					p1: n,
					t0: r,
					t1: a,
					startDist: o ? o.startDist + o.length : 0,
					length: i
				};
				e.segments.push(s), e.length += i;
			}
			e(h, "addSegment");
			for (var f = 0; f < t.length; f++) {
				var p = t[f], g = t[f - 1];
				g && (p.startDist = g.startDist + g.length), h(p, p.p0, c[f * d], 0, i.bezierProjPcts[0]);
				for (var v = 0; v < d - 1; v++) h(p, c[f * d + v], c[f * d + v + 1], i.bezierProjPcts[v], i.bezierProjPcts[v + 1]);
				h(p, c[f * d + d - 1], p.p2, i.bezierProjPcts[d - 1], 1);
			}
			return l.cache = t;
		}, "createControlPointInfo"), u = e(function(e) {
			var r, i = "source" === e;
			if (o[e]) {
				var u = t.pstyle(e + "-text-offset").pfValue;
				switch (a.edgeType) {
					case "self":
					case "compound":
					case "bezier":
					case "multibezier":
						for (var c, d = l(), h = 0, f = 0, p = 0; p < d.length; p++) {
							for (var g = d[i ? p : d.length - 1 - p], v = 0; v < g.segments.length; v++) {
								var y = g.segments[i ? v : g.segments.length - 1 - v], m = p === d.length - 1 && v === g.segments.length - 1;
								if (h = f, (f += y.length) >= u || m) {
									c = {
										cp: g,
										segment: y
									};
									break;
								}
							}
							if (c) break;
						}
						var x = c.cp, w = c.segment, E = (u - h) / w.length, C = w.t1 - w.t0, T = i ? w.t0 + C * E : w.t1 - C * E;
						T = nx(0, T, 1), n = nm(x.p0, x.p1, x.p2, T), r = cE(x.p0, x.p1, x.p2, T);
						break;
					case "straight":
					case "segments":
					case "haystack":
						for (var k, S, P, B, _ = 0, D = a.allpts.length, A = 0; A + 3 < D && (i ? (P = {
							x: a.allpts[A],
							y: a.allpts[A + 1]
						}, B = {
							x: a.allpts[A + 2],
							y: a.allpts[A + 3]
						}) : (P = {
							x: a.allpts[D - 2 - A],
							y: a.allpts[D - 1 - A]
						}, B = {
							x: a.allpts[D - 4 - A],
							y: a.allpts[D - 3 - A]
						}), k = np(P, B), S = _, !((_ += k) >= u)); A += 2);
						var M = (u - S) / k;
						n = nb(P, B, M = nx(0, M, 1)), r = cw(P, B);
				}
				s("labelX", e, n.x), s("labelY", e, n.y), s("labelAutoAngle", e, r);
			}
		}, "calculateEndProjection");
		u("source"), u("target"), this.applyLabelDimensions(t);
	}
}, cb.applyLabelDimensions = function(e) {
	this.applyPrefixedLabelDimensions(e), e.isEdge() && (this.applyPrefixedLabelDimensions(e, "source"), this.applyPrefixedLabelDimensions(e, "target"));
}, cb.applyPrefixedLabelDimensions = function(e, t) {
	var n = e._private, r = this.getLabelText(e, t), a = eY(r, e._private.labelDimsKey);
	if (ts(n.rscratch, "prefixedLabelDimsKey", t) !== a) {
		tl(n.rscratch, "prefixedLabelDimsKey", t, a);
		var i = this.calculateLabelDimensions(e, r), o = e.pstyle("line-height").pfValue, s = e.pstyle("text-wrap").strValue, l = ts(n.rscratch, "labelWrapCachedLines", t) || [], u = "wrap" !== s ? 1 : Math.max(l.length, 1), c = i.height / u, d = i.width, h = i.height + (u - 1) * (o - 1) * c;
		tl(n.rstyle, "labelWidth", t, d), tl(n.rscratch, "labelWidth", t, d), tl(n.rstyle, "labelHeight", t, h), tl(n.rscratch, "labelHeight", t, h), tl(n.rscratch, "labelLineHeight", t, c * o);
	}
}, cb.getLabelText = function(t, n) {
	var r = t._private, a = n ? n + "-" : "", i = t.pstyle(a + "label").strValue, o = t.pstyle("text-transform").value, l = e(function(e, t) {
		return t ? (tl(r.rscratch, e, n, t), t) : ts(r.rscratch, e, n);
	}, "rscratch");
	if (!i) return "";
	"none" == o || ("uppercase" == o ? i = i.toUpperCase() : "lowercase" == o && (i = i.toLowerCase()));
	var u = t.pstyle("text-wrap").value;
	if ("wrap" === u) {
		var c = l("labelKey");
		if (null != c && l("labelWrapKey") === c) return l("labelWrapCachedText");
		for (var d = i.split(`
`), h = t.pstyle("text-max-width").pfValue, f = "anywhere" === t.pstyle("text-overflow-wrap").value, p = [], g = /[\s\u200b]+|$/g, v = 0; v < d.length; v++) {
			var y = d[v], m = this.calculateLabelDimensions(t, y).width;
			if (f && (y = y.split("").join("​")), m > h) {
				var x, w = y.matchAll(g), E = "", C = 0, T = s(w);
				try {
					for (T.s(); !(x = T.n()).done;) {
						var k = x.value, S = k[0], P = y.substring(C, k.index);
						C = k.index + S.length;
						var B = 0 === E.length ? P : E + P + S;
						this.calculateLabelDimensions(t, B).width <= h ? E += P + S : (E && p.push(E), E = P + S);
					}
				} catch (e) {
					T.e(e);
				} finally {
					T.f();
				}
				E.match(/^[\s\u200b]+$/) || p.push(E);
			} else p.push(y);
		}
		l("labelWrapCachedLines", p), i = l("labelWrapCachedText", p.join(`
`)), l("labelWrapKey", c);
	} else if ("ellipsis" === u) {
		var _ = t.pstyle("text-max-width").pfValue, D = "", A = !1;
		if (this.calculateLabelDimensions(t, i).width < _) return i;
		for (var M = 0; M < i.length && !(this.calculateLabelDimensions(t, D + i[M] + "…").width > _); M++) D += i[M], M === i.length - 1 && (A = !0);
		return A || (D += "…"), D;
	}
	return i;
}, cb.getLabelJustification = function(e) {
	var t = e.pstyle("text-justification").strValue, n = e.pstyle("text-halign").strValue;
	if ("auto" !== t) return t;
	if (!e.isNode()) return "center";
	switch (n) {
		case "left": return "right";
		case "right": return "left";
		default: return "center";
	}
}, cb.calculateLabelDimensions = function(e, t) {
	var n = this.cy.window().document, r = e.pstyle("font-style").strValue, a = e.pstyle("font-size").pfValue, i = e.pstyle("font-family").strValue, o = e.pstyle("font-weight").strValue, s = this.labelCalcCanvas, l = this.labelCalcCanvasContext;
	if (!s) {
		s = this.labelCalcCanvas = n.createElement("canvas"), l = this.labelCalcCanvasContext = s.getContext("2d");
		var u = s.style;
		u.position = "absolute", u.left = "-9999px", u.top = "-9999px", u.zIndex = "-1", u.visibility = "hidden", u.pointerEvents = "none";
	}
	l.font = "".concat(r, " ").concat(o, " ").concat(a, "px ").concat(i);
	for (var c = 0, d = 0, h = t.split(`
`), f = 0; f < h.length; f++) {
		var p = h[f];
		c = Math.max(Math.ceil(l.measureText(p).width), c), d += a;
	}
	return {
		width: c += 0,
		height: d += 0
	};
}, cb.calculateLabelAngle = function(e, t) {
	var n = e._private.rscratch, r = e.isEdge(), a = e.pstyle((t ? t + "-" : "") + "text-rotation"), i = a.strValue;
	return "none" === i ? 0 : r && "autorotate" === i ? n.labelAutoAngle : "autorotate" === i ? 0 : a.pfValue;
}, cb.calculateLabelAngles = function(e) {
	var t = e.isEdge(), n = e._private.rscratch;
	n.labelAngle = this.calculateLabelAngle(e), t && (n.sourceLabelAngle = this.calculateLabelAngle(e, "source"), n.targetLabelAngle = this.calculateLabelAngle(e, "target"));
};
var cC = {}, cT = !1;
cC.getNodeShape = function(e) {
	var t = e.pstyle("shape").value;
	if ("cutrectangle" === t && (28 > e.width() || 28 > e.height())) return cT || (e9("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), cT = !0), "rectangle";
	if (e.isParent()) return "rectangle" === t || "roundrectangle" === t || "round-rectangle" === t || "cutrectangle" === t || "cut-rectangle" === t || "barrel" === t ? t : "rectangle";
	if ("polygon" === t) {
		var n = e.pstyle("shape-polygon-points").value;
		return this.nodeShapes.makePolygon(n).name;
	}
	return t;
};
var ck = {};
ck.registerCalculationListeners = function() {
	var t = this.cy, n = t.collection(), r = this, a = e(function(e) {
		var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
		if (n.merge(e), t) for (var r = 0; r < e.length; r++) {
			var a = e[r]._private.rstyle;
			a.clean = !1, a.cleanConnected = !1;
		}
	}, "enqueue");
	r.binder(t).on("bounds.* dirty.*", e(function(e) {
		a(e.target);
	}, "onDirtyBounds")).on("style.* background.*", e(function(e) {
		a(e.target, !1);
	}, "onDirtyStyle"));
	var i = e(function(e) {
		if (e) {
			var i = r.onUpdateEleCalcsFns;
			n.cleanStyle();
			for (var o = 0; o < n.length; o++) {
				var s = n[o], l = s._private.rstyle;
				s.isNode() && !l.cleanConnected && (a(s.connectedEdges()), l.cleanConnected = !0);
			}
			if (i) for (var u = 0; u < i.length; u++) (0, i[u])(e, n);
			r.recalculateRenderedStyle(n), n = t.collection();
		}
	}, "updateEleCalcs");
	r.flushRenderedStyleQueue = function() {
		i(!0);
	}, r.beforeRender(i, r.beforeRenderPriorities.eleCalcs);
}, ck.onUpdateEleCalcs = function(e) {
	(this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e);
}, ck.recalculateRenderedStyle = function(t, n) {
	var r = e(function(e) {
		return e._private.rstyle.cleanConnected;
	}, "isCleanConnected");
	if (0 !== t.length) {
		var a = [], i = [];
		if (!this.destroyed) {
			void 0 === n && (n = !0);
			for (var o = 0; o < t.length; o++) {
				var s = t[o], l = s._private, u = l.rstyle;
				!s.isEdge() || r(s.source()) && r(s.target()) || (u.clean = !1), s.isEdge() && s.isBundledBezier() && s.parallelEdges().some(function(e) {
					return !e._private.rstyle.clean && e.isBundledBezier();
				}) && (u.clean = !1), n && u.clean || s.removed() || "none" === s.pstyle("display").value || ("nodes" === l.group ? i.push(s) : a.push(s), u.clean = !0);
			}
			for (var c = 0; c < i.length; c++) {
				var d = i[c], h = d._private.rstyle, f = d.position();
				this.recalculateNodeLabelProjection(d), h.nodeX = f.x, h.nodeY = f.y, h.nodeW = d.pstyle("width").pfValue, h.nodeH = d.pstyle("height").pfValue;
			}
			this.recalculateEdgeProjections(a);
			for (var p = 0; p < a.length; p++) {
				var g = a[p]._private, v = g.rstyle, y = g.rscratch;
				v.srcX = y.arrowStartX, v.srcY = y.arrowStartY, v.tgtX = y.arrowEndX, v.tgtY = y.arrowEndY, v.midX = y.midX, v.midY = y.midY, v.labelAngle = y.labelAngle, v.sourceLabelAngle = y.sourceLabelAngle, v.targetLabelAngle = y.targetLabelAngle;
			}
		}
	}
};
var cS = {};
cS.updateCachedGrabbedEles = function() {
	var e = this.cachedZSortedEles;
	if (e) {
		e.drag = [], e.nondrag = [];
		for (var t = [], n = 0; n < e.length; n++) {
			var r = e[n], a = r._private.rscratch;
			r.grabbed() && !r.isParent() ? t.push(r) : a.inDragLayer ? e.drag.push(r) : e.nondrag.push(r);
		}
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			e.drag.push(r);
		}
	}
}, cS.invalidateCachedZSortedEles = function() {
	this.cachedZSortedEles = null;
}, cS.getCachedZSortedEles = function(e) {
	if (e || !this.cachedZSortedEles) {
		var t = this.cy.mutableElements().toArray();
		t.sort(lc), t.interactive = t.filter(function(e) {
			return e.interactive();
		}), this.cachedZSortedEles = t, this.updateCachedGrabbedEles();
	} else t = this.cachedZSortedEles;
	return t;
};
var cP = {};
[
	u$,
	uQ,
	cp,
	cv,
	cy,
	cb,
	cC,
	ck,
	cS
].forEach(function(e) {
	es(cP, e);
});
var cB = {};
cB.getCachedImage = function(e, t, n) {
	var r = this.imageCache = this.imageCache || {}, a = r[e];
	if (a) return a.image.complete || a.image.addEventListener("load", n), a.image;
	var i = (a = r[e] = r[e] || {}).image = new Image();
	i.addEventListener("load", n), i.addEventListener("error", function() {
		i.error = !0;
	});
	var o = "data:";
	return e.substring(0, o.length).toLowerCase() === o || (i.crossOrigin = t = "null" === t ? null : t), i.src = e, i;
};
var c_ = {};
c_.registerBinding = function(e, t, n, r) {
	var a = Array.prototype.slice.apply(arguments, [1]);
	if (Array.isArray(e)) {
		for (var i = [], o = 0; o < e.length; o++) {
			var s = e[o];
			if (void 0 !== s) {
				var l = this.binder(s);
				i.push(l.on.apply(l, a));
			}
		}
		return i;
	}
	var l = this.binder(e);
	return l.on.apply(l, a);
}, c_.binder = function(t) {
	var n = this, r = n.cy.window(), a = t === r || t === r.document || t === r.document.body || Y(t);
	if (null == n.supportsPassiveEvents) {
		var i = !1;
		try {
			var o = Object.defineProperty({}, "passive", { get: e(function() {
				return i = !0, !0;
			}, "get") });
			r.addEventListener("test", null, o);
		} catch {}
		n.supportsPassiveEvents = i;
	}
	var s = e(function(e, r, i) {
		var o = Array.prototype.slice.call(arguments);
		return a && n.supportsPassiveEvents && (o[2] = {
			capture: i ?? !1,
			passive: !1,
			once: !1
		}), n.bindings.push({
			target: t,
			args: o
		}), (t.addEventListener || t.on).apply(t, o), this;
	}, "on");
	return {
		on: s,
		addEventListener: s,
		addListener: s,
		bind: s
	};
}, c_.nodeIsDraggable = function(e) {
	return e && e.isNode() && !e.locked() && e.grabbable();
}, c_.nodeIsGrabbable = function(e) {
	return this.nodeIsDraggable(e) && e.interactive();
}, c_.load = function() {
	var t, n, r, a, i, o, s = this, l = s.cy.window(), u = e(function(e) {
		return e.selected();
	}, "isSelected"), c = e(function(e) {
		var t = e.getRootNode();
		if (t && 11 === t.nodeType && void 0 !== t.host) return t;
	}, "getShadowRoot"), d = e(function(e, t, n, r) {
		e ??= s.cy;
		for (var a = 0; a < t.length; a++) {
			var i = t[a];
			e.emit({
				originalEvent: n,
				type: i,
				position: r
			});
		}
	}, "triggerEvents"), h = e(function(e) {
		return e.shiftKey || e.metaKey || e.ctrlKey;
	}, "isMultSelKeyDown"), f = e(function(e, t) {
		var n = !0;
		if (s.cy.hasCompoundNodes() && e && e.pannable()) for (var r = 0; t && r < t.length; r++) {
			var e = t[r];
			if (e.isNode() && e.isParent() && !e.pannable()) {
				n = !1;
				break;
			}
		}
		else n = !0;
		return n;
	}, "allowPanningPassthrough"), p = e(function(e) {
		e[0]._private.grabbed = !0;
	}, "setGrabbed"), g = e(function(e) {
		e[0]._private.grabbed = !1;
	}, "setFreed"), v = e(function(e) {
		e[0]._private.rscratch.inDragLayer = !0;
	}, "setInDragLayer"), y = e(function(e) {
		e[0]._private.rscratch.inDragLayer = !1;
	}, "setOutDragLayer"), m = e(function(e) {
		e[0]._private.rscratch.isGrabTarget = !0;
	}, "setGrabTarget"), x = e(function(e) {
		e[0]._private.rscratch.isGrabTarget = !1;
	}, "removeGrabTarget"), w = e(function(e, t) {
		var n = t.addToList;
		!n.has(e) && e.grabbable() && !e.locked() && (n.merge(e), p(e));
	}, "addToDragList"), E = e(function(e, t) {
		if (e.cy().hasCompoundNodes() && (null != t.inDragLayer || null != t.addToList)) {
			var n = e.descendants();
			t.inDragLayer && (n.forEach(v), n.connectedEdges().forEach(v)), t.addToList && w(n, t);
		}
	}, "addDescendantsToDrag"), C = e(function(e, t) {
		t = t || {};
		var n = e.cy().hasCompoundNodes();
		t.inDragLayer && (e.forEach(v), e.neighborhood().stdFilter(function(e) {
			return !n || e.isEdge();
		}).forEach(v)), t.addToList && e.forEach(function(e) {
			w(e, t);
		}), E(e, t), k(e, { inDragLayer: t.inDragLayer }), s.updateCachedGrabbedEles();
	}, "addNodesToDrag"), T = e(function(e) {
		e && (s.getCachedZSortedEles().forEach(function(e) {
			g(e), y(e), x(e);
		}), s.updateCachedGrabbedEles());
	}, "freeDraggedElements"), k = e(function(e, t) {
		if ((null != t.inDragLayer || null != t.addToList) && e.cy().hasCompoundNodes()) {
			var n = e.ancestors().orphans();
			if (!n.same(e)) {
				var r = n.descendants().spawnSelf().merge(n).unmerge(e).unmerge(e.descendants()), a = r.connectedEdges();
				t.inDragLayer && (a.forEach(v), r.forEach(v)), t.addToList && r.forEach(function(e) {
					w(e, t);
				});
			}
		}
	}, "updateAncestorsInDragLayer"), S = e(function() {
		null != document.activeElement && null != document.activeElement.blur && document.activeElement.blur();
	}, "blurActiveDomElement"), P = "u" > typeof MutationObserver, B = "u" > typeof ResizeObserver;
	P ? (s.removeObserver = new MutationObserver(function(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t].removedNodes;
			if (n) {
				for (var r = 0; r < n.length; r++) if (n[r] === s.container) {
					s.destroy();
					break;
				}
			}
		}
	}), s.container.parentNode && s.removeObserver.observe(s.container.parentNode, { childList: !0 })) : s.registerBinding(s.container, "DOMNodeRemoved", function(e) {
		s.destroy();
	});
	var _ = eM(function() {
		s.cy.resize();
	}, 100);
	P && (s.styleObserver = new MutationObserver(_), s.styleObserver.observe(s.container, { attributes: !0 })), s.registerBinding(l, "resize", _), B && (s.resizeObserver = new ResizeObserver(_), s.resizeObserver.observe(s.container));
	var D = e(function(e, t) {
		for (; null != e;) t(e), e = e.parentNode;
	}, "forEachUp"), A = e(function() {
		s.invalidateContainerClientCoordsCache();
	}, "invalidateCoords");
	D(s.container, function(e) {
		s.registerBinding(e, "transitionend", A), s.registerBinding(e, "animationend", A), s.registerBinding(e, "scroll", A);
	}), s.registerBinding(s.container, "contextmenu", function(e) {
		e.preventDefault();
	});
	var M = e(function() {
		return 0 !== s.selection[4];
	}, "inBoxSelection"), R = e(function(e) {
		for (var t = s.findContainerClientCoords(), n = t[0], r = t[1], a = t[2], i = t[3], o = e.touches ? e.touches : [e], l = !1, u = 0; u < o.length; u++) {
			var c = o[u];
			if (n <= c.clientX && c.clientX <= n + a && r <= c.clientY && c.clientY <= r + i) {
				l = !0;
				break;
			}
		}
		if (!l) return !1;
		for (var d = s.container, h = e.target.parentNode, f = !1; h;) {
			if (h === d) {
				f = !0;
				break;
			}
			h = h.parentNode;
		}
		return !!f;
	}, "eventInContainer");
	s.registerBinding(s.container, "mousedown", e(function(t) {
		if (R(t) && (1 !== s.hoverData.which || 1 === t.which)) {
			t.preventDefault(), S(), s.hoverData.capture = !0, s.hoverData.which = t.which;
			var n = s.cy, r = [t.clientX, t.clientY], a = s.projectIntoViewport(r[0], r[1]), i = s.selection, o = s.findNearestElements(a[0], a[1], !0, !1), l = o[0], u = s.dragData.possibleDragElements;
			s.hoverData.mdownPos = a, s.hoverData.mdownGPos = r;
			var c = e(function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: a[0],
						y: a[1]
					}
				};
			}, "makeEvent"), h = e(function() {
				s.hoverData.tapholdCancelled = !1, clearTimeout(s.hoverData.tapholdTimeout), s.hoverData.tapholdTimeout = setTimeout(function() {
					if (!s.hoverData.tapholdCancelled) {
						var e = s.hoverData.down;
						e ? e.emit(c("taphold")) : n.emit(c("taphold"));
					}
				}, s.tapholdDuration);
			}, "checkForTaphold");
			if (3 == t.which) {
				s.hoverData.cxtStarted = !0;
				var f = {
					originalEvent: t,
					type: "cxttapstart",
					position: {
						x: a[0],
						y: a[1]
					}
				};
				l ? (l.activate(), l.emit(f), s.hoverData.down = l) : n.emit(f), s.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), s.hoverData.cxtDragged = !1;
			} else if (1 == t.which) {
				if (l && l.activate(), null != l && s.nodeIsGrabbable(l)) {
					var p = e(function(e) {
						e.emit(c("grab"));
					}, "triggerGrab");
					if (m(l), l.selected()) {
						u = s.dragData.possibleDragElements = n.collection();
						var g = n.$(function(e) {
							return e.isNode() && e.selected() && s.nodeIsGrabbable(e);
						});
						C(g, { addToList: u }), l.emit(c("grabon")), g.forEach(p);
					} else C(l, { addToList: u = s.dragData.possibleDragElements = n.collection() }), l.emit(c("grabon")).emit(c("grab"));
					s.redrawHint("eles", !0), s.redrawHint("drag", !0);
				}
				s.hoverData.down = l, s.hoverData.downs = o, s.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), d(l, [
					"mousedown",
					"tapstart",
					"vmousedown"
				], t, {
					x: a[0],
					y: a[1]
				}), null == l ? (i[4] = 1, s.data.bgActivePosistion = {
					x: a[0],
					y: a[1]
				}, s.redrawHint("select", !0), s.redraw()) : l.pannable() && (i[4] = 1), h();
			}
			i[0] = i[2] = a[0], i[1] = i[3] = a[1];
		}
	}, "mousedownHandler"), !1);
	var L = c(s.container);
	s.registerBinding([l, L], "mousemove", e(function(t) {
		if (!(!s.hoverData.capture && !R(t))) {
			var n, r = !1, a = s.cy, i = a.zoom(), o = [t.clientX, t.clientY], l = s.projectIntoViewport(o[0], o[1]), u = s.hoverData.mdownPos, c = s.hoverData.mdownGPos, p = s.selection, g = null;
			s.hoverData.draggingEles || s.hoverData.dragging || s.hoverData.selecting || (g = s.findNearestElement(l[0], l[1], !0, !1));
			var v, y = s.hoverData.last, m = s.hoverData.down, x = [l[0] - p[2], l[1] - p[3]], w = s.dragData.possibleDragElements;
			if (c) {
				var E = o[0] - c[0], k = o[1] - c[1];
				s.hoverData.isOverThresholdDrag = v = E * E + k * k >= s.desktopTapThreshold2;
			}
			var S = h(t);
			v && (s.hoverData.tapholdCancelled = !0);
			var P = e(function() {
				var e = s.hoverData.dragDelta = s.hoverData.dragDelta || [];
				0 === e.length ? (e.push(x[0]), e.push(x[1])) : (e[0] += x[0], e[1] += x[1]);
			}, "updateDragDelta");
			r = !0, d(g, [
				"mousemove",
				"vmousemove",
				"tapdrag"
			], t, {
				x: l[0],
				y: l[1]
			});
			var B = e(function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: l[0],
						y: l[1]
					}
				};
			}, "makeEvent"), _ = e(function() {
				s.data.bgActivePosistion = void 0, s.hoverData.selecting || a.emit(B("boxstart")), p[4] = 1, s.hoverData.selecting = !0, s.redrawHint("select", !0), s.redraw();
			}, "goIntoBoxMode");
			if (3 === s.hoverData.which) {
				if (v) {
					var D = B("cxtdrag");
					m ? m.emit(D) : a.emit(D), s.hoverData.cxtDragged = !0, (!s.hoverData.cxtOver || g !== s.hoverData.cxtOver) && (s.hoverData.cxtOver && s.hoverData.cxtOver.emit(B("cxtdragout")), s.hoverData.cxtOver = g, g && g.emit(B("cxtdragover")));
				}
			} else if (s.hoverData.dragging) {
				if (r = !0, a.panningEnabled() && a.userPanningEnabled()) {
					if (s.hoverData.justStartedPan) {
						var A = s.hoverData.mdownPos;
						n = {
							x: (l[0] - A[0]) * i,
							y: (l[1] - A[1]) * i
						}, s.hoverData.justStartedPan = !1;
					} else n = {
						x: x[0] * i,
						y: x[1] * i
					};
					a.panBy(n), a.emit(B("dragpan")), s.hoverData.dragged = !0;
				}
				l = s.projectIntoViewport(t.clientX, t.clientY);
			} else if (1 == p[4] && (null == m || m.pannable())) v && (!s.hoverData.dragging && a.boxSelectionEnabled() && (S || !a.panningEnabled() || !a.userPanningEnabled()) ? _() : !s.hoverData.selecting && a.panningEnabled() && a.userPanningEnabled() && f(m, s.hoverData.downs) && (s.hoverData.dragging = !0, s.hoverData.justStartedPan = !0, p[4] = 0, s.data.bgActivePosistion = ni(u), s.redrawHint("select", !0), s.redraw()), m && m.pannable() && m.active() && m.unactivate());
			else {
				if (m && m.pannable() && m.active() && m.unactivate(), m && m.grabbed() || g == y || (y && d(y, ["mouseout", "tapdragout"], t, {
					x: l[0],
					y: l[1]
				}), g && d(g, ["mouseover", "tapdragover"], t, {
					x: l[0],
					y: l[1]
				}), s.hoverData.last = g), m) if (v) {
					if (a.boxSelectionEnabled() && S) m && m.grabbed() && (T(w), m.emit(B("freeon")), w.emit(B("free")), s.dragData.didDrag && (m.emit(B("dragfreeon")), w.emit(B("dragfree")))), _();
					else if (m && m.grabbed() && s.nodeIsDraggable(m)) {
						var M = !s.dragData.didDrag;
						M && s.redrawHint("eles", !0), s.dragData.didDrag = !0, s.hoverData.draggingEles || C(w, { inDragLayer: !0 });
						var L = {
							x: 0,
							y: 0
						};
						if (I(x[0]) && I(x[1]) && (L.x += x[0], L.y += x[1], M)) {
							var N = s.hoverData.dragDelta;
							N && I(N[0]) && I(N[1]) && (L.x += N[0], L.y += N[1]);
						}
						s.hoverData.draggingEles = !0, w.silentShift(L).emit(B("position")).emit(B("drag")), s.redrawHint("drag", !0), s.redraw();
					}
				} else P();
				r = !0;
			}
			if (p[2] = l[0], p[3] = l[1], r) return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), !1;
		}
	}, "mousemoveHandler"), !1), s.registerBinding(l, "mouseup", e(function(t) {
		if (!(1 === s.hoverData.which && 1 !== t.which && s.hoverData.capture) && s.hoverData.capture) {
			s.hoverData.capture = !1;
			var n = s.cy, r = s.projectIntoViewport(t.clientX, t.clientY), a = s.selection, i = s.findNearestElement(r[0], r[1], !0, !1), o = s.dragData.possibleDragElements, l = s.hoverData.down, c = h(t);
			s.data.bgActivePosistion && (s.redrawHint("select", !0), s.redraw()), s.hoverData.tapholdCancelled = !0, s.data.bgActivePosistion = void 0, l && l.unactivate();
			var f = e(function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: r[0],
						y: r[1]
					}
				};
			}, "makeEvent");
			if (3 === s.hoverData.which) {
				var p = f("cxttapend");
				if (l ? l.emit(p) : n.emit(p), !s.hoverData.cxtDragged) {
					var g = f("cxttap");
					l ? l.emit(g) : n.emit(g);
				}
				s.hoverData.cxtDragged = !1, s.hoverData.which = null;
			} else if (1 === s.hoverData.which) {
				if (d(i, [
					"mouseup",
					"tapend",
					"vmouseup"
				], t, {
					x: r[0],
					y: r[1]
				}), s.dragData.didDrag || s.hoverData.dragged || s.hoverData.selecting || s.hoverData.isOverThresholdDrag || (d(l, [
					"click",
					"tap",
					"vclick"
				], t, {
					x: r[0],
					y: r[1]
				}), z = !1, t.timeStamp - O <= n.multiClickDebounceTime() ? (N && clearTimeout(N), z = !0, O = null, d(l, [
					"dblclick",
					"dbltap",
					"vdblclick"
				], t, {
					x: r[0],
					y: r[1]
				})) : (N = setTimeout(function() {
					z || d(l, [
						"oneclick",
						"onetap",
						"voneclick"
					], t, {
						x: r[0],
						y: r[1]
					});
				}, n.multiClickDebounceTime()), O = t.timeStamp)), null != l || s.dragData.didDrag || s.hoverData.selecting || s.hoverData.dragged || h(t) || (n.$(u).unselect(["tapunselect"]), o.length > 0 && s.redrawHint("eles", !0), s.dragData.possibleDragElements = o = n.collection()), i != l || s.dragData.didDrag || s.hoverData.selecting || null == i || !i._private.selectable || (s.hoverData.dragging || ("additive" === n.selectionType() || c ? i.selected() ? i.unselect(["tapunselect"]) : i.select(["tapselect"]) : c || (n.$(u).unmerge(i).unselect(["tapunselect"]), i.select(["tapselect"]))), s.redrawHint("eles", !0)), s.hoverData.selecting) {
					var v = n.collection(s.getAllInBox(a[0], a[1], a[2], a[3]));
					s.redrawHint("select", !0), v.length > 0 && s.redrawHint("eles", !0), n.emit(f("boxend"));
					var y = e(function(e) {
						return e.selectable() && !e.selected();
					}, "eleWouldBeSelected");
					"additive" === n.selectionType() || c || n.$(u).unmerge(v).unselect(), v.emit(f("box")).stdFilter(y).select().emit(f("boxselect")), s.redraw();
				}
				if (s.hoverData.dragging && (s.hoverData.dragging = !1, s.redrawHint("select", !0), s.redrawHint("eles", !0), s.redraw()), !a[4]) {
					s.redrawHint("drag", !0), s.redrawHint("eles", !0);
					var m = l && l.grabbed();
					T(o), m && (l.emit(f("freeon")), o.emit(f("free")), s.dragData.didDrag && (l.emit(f("dragfreeon")), o.emit(f("dragfree"))));
				}
			}
			a[4] = 0, s.hoverData.down = null, s.hoverData.cxtStarted = !1, s.hoverData.draggingEles = !1, s.hoverData.selecting = !1, s.hoverData.isOverThresholdDrag = !1, s.dragData.didDrag = !1, s.hoverData.dragged = !1, s.hoverData.dragDelta = [], s.hoverData.mdownPos = null, s.hoverData.mdownGPos = null, s.hoverData.which = null;
		}
	}, "mouseupHandler"), !1);
	var N, z, O, F, V = [], q = 1e5, j = e(function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n] % t != 0) return !1;
		return !0;
	}, "allAreDivisibleBy"), X = e(function(e) {
		for (var t = Math.abs(e[0]), n = 1; n < e.length; n++) if (Math.abs(e[n]) !== t) return !1;
		return !0;
	}, "allAreSameMagnitude"), Y = e(function(e) {
		var t = !1, n = e.deltaY;
		if (n ?? (null != e.wheelDeltaY ? n = e.wheelDeltaY / 4 : null != e.wheelDelta && (n = e.wheelDelta / 4)), 0 !== n) {
			if (null == F) if (V.length >= 4) {
				if (!(F = j(V, 5))) {
					var r = Math.abs(V[0]);
					F = X(V) && r > 5;
				}
				if (F) for (var a = 0; a < V.length; a++) q = Math.min(Math.abs(V[a]), q);
			} else V.push(n), t = !0;
			else F && (q = Math.min(Math.abs(n), q));
			if (!s.scrollingPage) {
				var i = s.cy, o = i.zoom(), l = i.pan(), u = s.projectIntoViewport(e.clientX, e.clientY), c = [u[0] * o + l.x, u[1] * o + l.y];
				if (s.hoverData.draggingEles || s.hoverData.dragging || s.hoverData.cxtStarted || M()) return void e.preventDefault();
				if (i.panningEnabled() && i.userPanningEnabled() && i.zoomingEnabled() && i.userZoomingEnabled()) {
					e.preventDefault(), s.data.wheelZooming = !0, clearTimeout(s.data.wheelTimeout), s.data.wheelTimeout = setTimeout(function() {
						s.data.wheelZooming = !1, s.redrawHint("eles", !0), s.redraw();
					}, 150), t && Math.abs(n) > 5 && (n = 5 * nf(n)), d = -(n / 250), F && (d /= q, d *= 3), d *= s.wheelSensitivity, 1 === e.deltaMode && (d *= 33);
					var d, h = i.zoom() * Math.pow(10, d);
					"gesturechange" === e.type && (h = s.gestureStartZoom * e.scale), i.zoom({
						level: h,
						renderedPosition: {
							x: c[0],
							y: c[1]
						}
					}), i.emit({
						type: "gesturechange" === e.type ? "pinchzoom" : "scrollzoom",
						originalEvent: e,
						position: {
							x: u[0],
							y: u[1]
						}
					});
				}
			}
		}
	}, "wheelHandler");
	s.registerBinding(s.container, "wheel", Y, !0), s.registerBinding(l, "scroll", e(function(e) {
		s.scrollingPage = !0, clearTimeout(s.scrollingPageTimeout), s.scrollingPageTimeout = setTimeout(function() {
			s.scrollingPage = !1;
		}, 250);
	}, "scrollHandler"), !0), s.registerBinding(s.container, "gesturestart", e(function(e) {
		s.gestureStartZoom = s.cy.zoom(), s.hasTouchStarted || e.preventDefault();
	}, "gestureStartHandler"), !0), s.registerBinding(s.container, "gesturechange", function(e) {
		s.hasTouchStarted || Y(e);
	}, !0), s.registerBinding(s.container, "mouseout", e(function(e) {
		var t = s.projectIntoViewport(e.clientX, e.clientY);
		s.cy.emit({
			originalEvent: e,
			type: "mouseout",
			position: {
				x: t[0],
				y: t[1]
			}
		});
	}, "mouseOutHandler"), !1), s.registerBinding(s.container, "mouseover", e(function(e) {
		var t = s.projectIntoViewport(e.clientX, e.clientY);
		s.cy.emit({
			originalEvent: e,
			type: "mouseover",
			position: {
				x: t[0],
				y: t[1]
			}
		});
	}, "mouseOverHandler"), !1);
	var W, H, K, U, G, Z, $, Q, J, ee, et, en, er, ea, ei = e(function(e, t, n, r) {
		return Math.sqrt((n - e) * (n - e) + (r - t) * (r - t));
	}, "distance"), eo = e(function(e, t, n, r) {
		return (n - e) * (n - e) + (r - t) * (r - t);
	}, "distanceSq");
	if (s.registerBinding(s.container, "touchstart", ea = e(function(t) {
		if (s.hasTouchStarted = !0, R(t)) {
			S(), s.touchData.capture = !0, s.data.bgActivePosistion = void 0;
			var n = s.cy, r = s.touchData.now, a = s.touchData.earlier;
			if (t.touches[0]) {
				var i = s.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
				r[0] = i[0], r[1] = i[1];
			}
			if (t.touches[1]) {
				var i = s.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
				r[2] = i[0], r[3] = i[1];
			}
			if (t.touches[2]) {
				var i = s.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
				r[4] = i[0], r[5] = i[1];
			}
			var o = e(function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: r[0],
						y: r[1]
					}
				};
			}, "makeEvent");
			if (t.touches[1]) {
				s.touchData.singleTouchMoved = !0, T(s.dragData.touchDragEles);
				var l = s.findContainerClientCoords();
				J = l[0], ee = l[1], et = l[2], en = l[3], W = t.touches[0].clientX - J, H = t.touches[0].clientY - ee, K = t.touches[1].clientX - J, U = t.touches[1].clientY - ee, er = 0 <= W && W <= et && 0 <= K && K <= et && 0 <= H && H <= en && 0 <= U && U <= en;
				var u = n.pan(), c = n.zoom();
				if (G = ei(W, H, K, U), Z = eo(W, H, K, U), Q = [(($ = [(W + K) / 2, (H + U) / 2])[0] - u.x) / c, ($[1] - u.y) / c], Z < 4e4 && !t.touches[2]) {
					var h = s.findNearestElement(r[0], r[1], !0, !0), f = s.findNearestElement(r[2], r[3], !0, !0);
					h && h.isNode() ? (h.activate().emit(o("cxttapstart")), s.touchData.start = h) : f && f.isNode() ? (f.activate().emit(o("cxttapstart")), s.touchData.start = f) : n.emit(o("cxttapstart")), s.touchData.start && (s.touchData.start._private.grabbed = !1), s.touchData.cxt = !0, s.touchData.cxtDragged = !1, s.data.bgActivePosistion = void 0, s.redraw();
					return;
				}
			}
			if (t.touches[2]) n.boxSelectionEnabled() && t.preventDefault();
			else if (!t.touches[1] && t.touches[0]) {
				var p = s.findNearestElements(r[0], r[1], !0, !0), g = p[0];
				if (null != g && (g.activate(), s.touchData.start = g, s.touchData.starts = p, s.nodeIsGrabbable(g))) {
					var v = s.dragData.touchDragEles = n.collection(), y = null;
					s.redrawHint("eles", !0), s.redrawHint("drag", !0), g.selected() ? C(y = n.$(function(e) {
						return e.selected() && s.nodeIsGrabbable(e);
					}), { addToList: v }) : C(g, { addToList: v }), m(g), g.emit(o("grabon")), y ? y.forEach(function(e) {
						e.emit(o("grab"));
					}) : g.emit(o("grab"));
				}
				d(g, [
					"touchstart",
					"tapstart",
					"vmousedown"
				], t, {
					x: r[0],
					y: r[1]
				}), g ?? (s.data.bgActivePosistion = {
					x: i[0],
					y: i[1]
				}, s.redrawHint("select", !0), s.redraw()), s.touchData.singleTouchMoved = !1, s.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(s.touchData.tapholdTimeout), s.touchData.tapholdTimeout = setTimeout(function() {
					!1 !== s.touchData.singleTouchMoved || s.pinching || s.touchData.selecting || d(s.touchData.start, ["taphold"], t, {
						x: r[0],
						y: r[1]
					});
				}, s.tapholdDuration);
			}
			if (t.touches.length >= 1) {
				for (var x = s.touchData.startPosition = [
					null,
					null,
					null,
					null,
					null,
					null
				], w = 0; w < r.length; w++) x[w] = a[w] = r[w];
				var E = t.touches[0];
				s.touchData.startGPosition = [E.clientX, E.clientY];
			}
		}
	}, "touchstartHandler"), !1), s.registerBinding(l, "touchmove", t = e(function(t) {
		var n = s.touchData.capture;
		if (!(!n && !R(t))) {
			var r = s.selection, a = s.cy, i = s.touchData.now, o = s.touchData.earlier, l = a.zoom();
			if (t.touches[0]) {
				var u = s.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
				i[0] = u[0], i[1] = u[1];
			}
			if (t.touches[1]) {
				var u = s.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
				i[2] = u[0], i[3] = u[1];
			}
			if (t.touches[2]) {
				var u = s.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
				i[4] = u[0], i[5] = u[1];
			}
			var c, h = e(function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: i[0],
						y: i[1]
					}
				};
			}, "makeEvent"), p = s.touchData.startGPosition;
			if (n && t.touches[0] && p) {
				for (var g = [], v = 0; v < i.length; v++) g[v] = i[v] - o[v];
				var y = t.touches[0].clientX - p[0], m = y * y, x = t.touches[0].clientY - p[1];
				c = m + x * x >= s.touchTapThreshold2;
			}
			if (n && s.touchData.cxt) {
				t.preventDefault();
				var w = t.touches[0].clientX - J, E = t.touches[0].clientY - ee, k = t.touches[1].clientX - J, S = t.touches[1].clientY - ee, P = eo(w, E, k, S);
				if (P / Z >= 2.25 || P >= 22500) {
					s.touchData.cxt = !1, s.data.bgActivePosistion = void 0, s.redrawHint("select", !0);
					var B = h("cxttapend");
					s.touchData.start ? (s.touchData.start.unactivate().emit(B), s.touchData.start = null) : a.emit(B);
				}
			}
			if (n && s.touchData.cxt) {
				var B = h("cxtdrag");
				s.data.bgActivePosistion = void 0, s.redrawHint("select", !0), s.touchData.start ? s.touchData.start.emit(B) : a.emit(B), s.touchData.start && (s.touchData.start._private.grabbed = !1), s.touchData.cxtDragged = !0;
				var _ = s.findNearestElement(i[0], i[1], !0, !0);
				(!s.touchData.cxtOver || _ !== s.touchData.cxtOver) && (s.touchData.cxtOver && s.touchData.cxtOver.emit(h("cxtdragout")), s.touchData.cxtOver = _, _ && _.emit(h("cxtdragover")));
			} else if (n && t.touches[2] && a.boxSelectionEnabled()) t.preventDefault(), s.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), s.touchData.selecting || a.emit(h("boxstart")), s.touchData.selecting = !0, s.touchData.didSelect = !0, r[4] = 1, r && 0 !== r.length && void 0 !== r[0] ? (r[2] = (i[0] + i[2] + i[4]) / 3, r[3] = (i[1] + i[3] + i[5]) / 3) : (r[0] = (i[0] + i[2] + i[4]) / 3, r[1] = (i[1] + i[3] + i[5]) / 3, r[2] = (i[0] + i[2] + i[4]) / 3 + 1, r[3] = (i[1] + i[3] + i[5]) / 3 + 1), s.redrawHint("select", !0), s.redraw();
			else if (n && t.touches[1] && !s.touchData.didSelect && a.zoomingEnabled() && a.panningEnabled() && a.userZoomingEnabled() && a.userPanningEnabled()) {
				t.preventDefault(), s.data.bgActivePosistion = void 0, s.redrawHint("select", !0);
				var D = s.dragData.touchDragEles;
				if (D) {
					s.redrawHint("drag", !0);
					for (var A = 0; A < D.length; A++) {
						var M = D[A]._private;
						M.grabbed = !1, M.rscratch.inDragLayer = !1;
					}
				}
				var L = s.touchData.start, w = t.touches[0].clientX - J, E = t.touches[0].clientY - ee, k = t.touches[1].clientX - J, S = t.touches[1].clientY - ee, N = ei(w, E, k, S), z = N / G;
				if (er) {
					var O = w - W, F = E - H, V = k - K, q = S - U, j = a.zoom(), X = j * z, Y = a.pan(), $ = Q[0] * j + Y.x, et = Q[1] * j + Y.y, en = {
						x: -X / j * ($ - Y.x - (O + V) / 2) + $,
						y: -X / j * (et - Y.y - (F + q) / 2) + et
					};
					if (L && L.active()) {
						var D = s.dragData.touchDragEles;
						T(D), s.redrawHint("drag", !0), s.redrawHint("eles", !0), L.unactivate().emit(h("freeon")), D.emit(h("free")), s.dragData.didDrag && (L.emit(h("dragfreeon")), D.emit(h("dragfree")));
					}
					a.viewport({
						zoom: X,
						pan: en,
						cancelOnFailedZoom: !0
					}), a.emit(h("pinchzoom")), G = N, W = w, H = E, K = k, U = S, s.pinching = !0;
				}
				if (t.touches[0]) {
					var u = s.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
					i[0] = u[0], i[1] = u[1];
				}
				if (t.touches[1]) {
					var u = s.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
					i[2] = u[0], i[3] = u[1];
				}
				if (t.touches[2]) {
					var u = s.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
					i[4] = u[0], i[5] = u[1];
				}
			} else if (t.touches[0] && !s.touchData.didSelect) {
				var _, ea = s.touchData.start, es = s.touchData.last;
				if (s.hoverData.draggingEles || s.swipePanning || (_ = s.findNearestElement(i[0], i[1], !0, !0)), n && null != ea && t.preventDefault(), n && null != ea && s.nodeIsDraggable(ea)) if (c) {
					var D = s.dragData.touchDragEles, el = !s.dragData.didDrag;
					el && C(D, { inDragLayer: !0 }), s.dragData.didDrag = !0;
					var eu = {
						x: 0,
						y: 0
					};
					if (I(g[0]) && I(g[1]) && (eu.x += g[0], eu.y += g[1], el)) {
						s.redrawHint("eles", !0);
						var ec = s.touchData.dragDelta;
						ec && I(ec[0]) && I(ec[1]) && (eu.x += ec[0], eu.y += ec[1]);
					}
					s.hoverData.draggingEles = !0, D.silentShift(eu).emit(h("position")).emit(h("drag")), s.redrawHint("drag", !0), s.touchData.startPosition[0] == o[0] && s.touchData.startPosition[1] == o[1] && s.redrawHint("eles", !0), s.redraw();
				} else {
					var ec = s.touchData.dragDelta = s.touchData.dragDelta || [];
					0 === ec.length ? (ec.push(g[0]), ec.push(g[1])) : (ec[0] += g[0], ec[1] += g[1]);
				}
				if (d(ea || _, [
					"touchmove",
					"tapdrag",
					"vmousemove"
				], t, {
					x: i[0],
					y: i[1]
				}), ea && ea.grabbed() || _ == es || (es && es.emit(h("tapdragout")), _ && _.emit(h("tapdragover"))), s.touchData.last = _, n) for (var A = 0; A < i.length; A++) i[A] && s.touchData.startPosition[A] && c && (s.touchData.singleTouchMoved = !0);
				if (n && (null == ea || ea.pannable()) && a.panningEnabled() && a.userPanningEnabled()) {
					f(ea, s.touchData.starts) && (t.preventDefault(), s.data.bgActivePosistion || (s.data.bgActivePosistion = ni(s.touchData.startPosition)), s.swipePanning ? (a.panBy({
						x: g[0] * l,
						y: g[1] * l
					}), a.emit(h("dragpan"))) : c && (s.swipePanning = !0, a.panBy({
						x: y * l,
						y: x * l
					}), a.emit(h("dragpan")), ea && (ea.unactivate(), s.redrawHint("select", !0), s.touchData.start = null)));
					var u = s.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
					i[0] = u[0], i[1] = u[1];
				}
			}
			for (var v = 0; v < i.length; v++) o[v] = i[v];
			n && t.touches.length > 0 && !s.hoverData.draggingEles && !s.swipePanning && null != s.data.bgActivePosistion && (s.data.bgActivePosistion = void 0, s.redrawHint("select", !0), s.redraw());
		}
	}, "touchmoveHandler"), !1), s.registerBinding(l, "touchcancel", n = e(function(e) {
		var t = s.touchData.start;
		s.touchData.capture = !1, t && t.unactivate();
	}, "touchcancelHandler")), s.registerBinding(l, "touchend", r = e(function(t) {
		var n, r = s.touchData.start;
		if (s.touchData.capture) {
			0 === t.touches.length && (s.touchData.capture = !1), t.preventDefault();
			var l = s.selection;
			s.swipePanning = !1, s.hoverData.draggingEles = !1;
			var c = s.cy, h = c.zoom(), f = s.touchData.now, p = s.touchData.earlier;
			if (t.touches[0]) {
				var g = s.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
				f[0] = g[0], f[1] = g[1];
			}
			if (t.touches[1]) {
				var g = s.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
				f[2] = g[0], f[3] = g[1];
			}
			if (t.touches[2]) {
				var g = s.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
				f[4] = g[0], f[5] = g[1];
			}
			var v = e(function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: f[0],
						y: f[1]
					}
				};
			}, "makeEvent");
			if (r && r.unactivate(), s.touchData.cxt) {
				if (n = v("cxttapend"), r ? r.emit(n) : c.emit(n), !s.touchData.cxtDragged) {
					var y = v("cxttap");
					r ? r.emit(y) : c.emit(y);
				}
				s.touchData.start && (s.touchData.start._private.grabbed = !1), s.touchData.cxt = !1, s.touchData.start = null, s.redraw();
				return;
			}
			if (!t.touches[2] && c.boxSelectionEnabled() && s.touchData.selecting) {
				s.touchData.selecting = !1;
				var m = c.collection(s.getAllInBox(l[0], l[1], l[2], l[3]));
				l[0] = void 0, l[1] = void 0, l[2] = void 0, l[3] = void 0, l[4] = 0, s.redrawHint("select", !0), c.emit(v("boxend"));
				var x = e(function(e) {
					return e.selectable() && !e.selected();
				}, "eleWouldBeSelected");
				m.emit(v("box")).stdFilter(x).select().emit(v("boxselect")), m.nonempty() && s.redrawHint("eles", !0), s.redraw();
			}
			if (r?.unactivate(), t.touches[2]) s.data.bgActivePosistion = void 0, s.redrawHint("select", !0);
			else if (!t.touches[1] && !t.touches[0] && !t.touches[0]) {
				s.data.bgActivePosistion = void 0, s.redrawHint("select", !0);
				var w = s.dragData.touchDragEles;
				if (null != r) {
					var E = r._private.grabbed;
					T(w), s.redrawHint("drag", !0), s.redrawHint("eles", !0), E && (r.emit(v("freeon")), w.emit(v("free")), s.dragData.didDrag && (r.emit(v("dragfreeon")), w.emit(v("dragfree")))), d(r, [
						"touchend",
						"tapend",
						"vmouseup",
						"tapdragout"
					], t, {
						x: f[0],
						y: f[1]
					}), r.unactivate(), s.touchData.start = null;
				} else d(s.findNearestElement(f[0], f[1], !0, !0), [
					"touchend",
					"tapend",
					"vmouseup",
					"tapdragout"
				], t, {
					x: f[0],
					y: f[1]
				});
				var C = s.touchData.startPosition[0] - f[0], k = s.touchData.startPosition[1] - f[1];
				s.touchData.singleTouchMoved || (r || c.$(":selected").unselect(["tapunselect"]), d(r, ["tap", "vclick"], t, {
					x: f[0],
					y: f[1]
				}), a = !1, t.timeStamp - o <= c.multiClickDebounceTime() ? (i && clearTimeout(i), a = !0, o = null, d(r, ["dbltap", "vdblclick"], t, {
					x: f[0],
					y: f[1]
				})) : (i = setTimeout(function() {
					a || d(r, ["onetap", "voneclick"], t, {
						x: f[0],
						y: f[1]
					});
				}, c.multiClickDebounceTime()), o = t.timeStamp)), null != r && !s.dragData.didDrag && r._private.selectable && (C * C + k * k) * h * h < s.touchTapThreshold2 && !s.pinching && ("single" === c.selectionType() ? (c.$(u).unmerge(r).unselect(["tapunselect"]), r.select(["tapselect"])) : r.selected() ? r.unselect(["tapunselect"]) : r.select(["tapselect"]), s.redrawHint("eles", !0)), s.touchData.singleTouchMoved = !0;
			}
			for (var S = 0; S < f.length; S++) p[S] = f[S];
			s.dragData.didDrag = !1, 0 === t.touches.length && (s.touchData.dragDelta = [], s.touchData.startPosition = [
				null,
				null,
				null,
				null,
				null,
				null
			], s.touchData.startGPosition = null, s.touchData.didSelect = !1), t.touches.length < 2 && (1 === t.touches.length && (s.touchData.startGPosition = [t.touches[0].clientX, t.touches[0].clientY]), s.pinching = !1, s.redrawHint("eles", !0), s.redraw());
		}
	}, "touchendHandler"), !1), typeof TouchEvent > "u") {
		var es = [], el = e(function(e) {
			return {
				clientX: e.clientX,
				clientY: e.clientY,
				force: 1,
				identifier: e.pointerId,
				pageX: e.pageX,
				pageY: e.pageY,
				radiusX: e.width / 2,
				radiusY: e.height / 2,
				screenX: e.screenX,
				screenY: e.screenY,
				target: e.target
			};
		}, "makeTouch"), eu = e(function(e) {
			return {
				event: e,
				touch: el(e)
			};
		}, "makePointer"), ec = e(function(e) {
			es.push(eu(e));
		}, "addPointer"), ed = e(function(e) {
			for (var t = 0; t < es.length; t++) if (es[t].event.pointerId === e.pointerId) return void es.splice(t, 1);
		}, "removePointer"), eh = e(function(e) {
			var t = es.filter(function(t) {
				return t.event.pointerId === e.pointerId;
			})[0];
			t.event = e, t.touch = el(e);
		}, "updatePointer"), ef = e(function(e) {
			e.touches = es.map(function(e) {
				return e.touch;
			});
		}, "addTouchesToEvent"), ep = e(function(e) {
			return "mouse" === e.pointerType || 4 === e.pointerType;
		}, "pointerIsMouse");
		s.registerBinding(s.container, "pointerdown", function(e) {
			ep(e) || (e.preventDefault(), ec(e), ef(e), ea(e));
		}), s.registerBinding(s.container, "pointerup", function(e) {
			ep(e) || (ed(e), ef(e), r(e));
		}), s.registerBinding(s.container, "pointercancel", function(e) {
			ep(e) || (ed(e), ef(e), n(e));
		}), s.registerBinding(s.container, "pointermove", function(e) {
			ep(e) || (e.preventDefault(), eh(e), ef(e), t(e));
		});
	}
};
var cD = {};
cD.generatePolygon = function(t, n) {
	return this.nodeShapes[t] = {
		renderer: this,
		name: t,
		points: n,
		draw: e(function(e, t, n, r, a, i) {
			this.renderer.nodeShapeImpl("polygon", e, t, n, r, a, this.points);
		}, "draw"),
		intersectLine: e(function(e, t, n, r, a, i, o, s) {
			return n0(a, i, this.points, e, t, n / 2, r / 2, o);
		}, "intersectLine"),
		checkPoint: e(function(e, t, n, r, a, i, o, s) {
			return nY(e, t, this.points, i, o, r, a, [0, -1], n);
		}, "checkPoint"),
		hasMiterBounds: "rectangle" !== t,
		miterBounds: e(function(e, t, n, r, a, i) {
			return nL(this.points, e, t, n, r, a);
		}, "miterBounds")
	};
}, cD.generateEllipse = function() {
	return this.nodeShapes.ellipse = {
		renderer: this,
		name: "ellipse",
		draw: e(function(e, t, n, r, a, i) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
		}, "draw"),
		intersectLine: e(function(e, t, n, r, a, i, o, s) {
			return nU(a, i, e, t, n / 2 + o, r / 2 + o);
		}, "intersectLine"),
		checkPoint: e(function(e, t, n, r, a, i, o, s) {
			return nG(e, t, r, a, i, o, n);
		}, "checkPoint")
	};
}, cD.generateRoundPolygon = function(t, n) {
	return this.nodeShapes[t] = {
		renderer: this,
		name: t,
		points: n,
		getOrCreateCorners: e(function(e, t, r, a, i, o, s) {
			if (void 0 !== o[s] && o[s + "-cx"] === e && o[s + "-cy"] === t) return o[s];
			o[s] = Array(n.length / 2), o[s + "-cx"] = e, o[s + "-cy"] = t;
			var l = r / 2, u = a / 2;
			i = "auto" === i ? n6(r, a) : i;
			for (var c = Array(n.length / 2), d = 0; d < n.length / 2; d++) c[d] = {
				x: e + l * n[2 * d],
				y: t + u * n[2 * d + 1]
			};
			var h, f, p, g, v = c.length;
			for (f = c[v - 1], h = 0; h < v; h++) p = c[h % v], g = c[(h + 1) % v], o[s][h] = ch(f, p, g, i), f = p, p = g;
			return o[s];
		}, "getOrCreateCorners"),
		draw: e(function(e, t, n, r, a, i, o) {
			this.renderer.nodeShapeImpl("round-polygon", e, t, n, r, a, this.points, this.getOrCreateCorners(t, n, r, a, i, o, "drawCorners"));
		}, "draw"),
		intersectLine: e(function(e, t, n, r, a, i, o, s, l) {
			return n1(a, i, this.points, e, t, n, r, o, this.getOrCreateCorners(e, t, n, r, s, l, "corners"));
		}, "intersectLine"),
		checkPoint: e(function(e, t, n, r, a, i, o, s, l) {
			return nW(e, t, this.points, i, o, r, a, this.getOrCreateCorners(i, o, r, a, s, l, "corners"));
		}, "checkPoint")
	};
}, cD.generateRoundRectangle = function() {
	return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
		renderer: this,
		name: "round-rectangle",
		points: n5(4, 0),
		draw: e(function(e, t, n, r, a, i) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, this.points, i);
		}, "draw"),
		intersectLine: e(function(e, t, n, r, a, i, o, s) {
			return nN(a, i, e, t, n, r, o, s);
		}, "intersectLine"),
		checkPoint: e(function(e, t, n, r, a, i, o, s) {
			var l = r / 2, u = a / 2, c = 2 * (s = Math.min(l, u, s = "auto" === s ? n9(r, a) : s));
			return !!(nY(e, t, this.points, i, o, r, a - c, [0, -1], n) || nY(e, t, this.points, i, o, r - c, a, [0, -1], n) || nG(e, t, c, c, i - l + s, o - u + s, n) || nG(e, t, c, c, i + l - s, o - u + s, n) || nG(e, t, c, c, i + l - s, o + u - s, n) || nG(e, t, c, c, i - l + s, o + u - s, n));
		}, "checkPoint")
	};
}, cD.generateCutRectangle = function() {
	return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
		renderer: this,
		name: "cut-rectangle",
		cornerLength: n8(),
		points: n5(4, 0),
		draw: e(function(e, t, n, r, a, i) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, null, i);
		}, "draw"),
		generateCutTrianglePts: e(function(e, t, n, r, a) {
			var i = "auto" === a ? this.cornerLength : a, o = t / 2, s = e / 2, l = n - s, u = n + s, c = r - o, d = r + o;
			return {
				topLeft: [
					l,
					c + i,
					l + i,
					c,
					l + i,
					c + i
				],
				topRight: [
					u - i,
					c,
					u,
					c + i,
					u - i,
					c + i
				],
				bottomRight: [
					u,
					d - i,
					u - i,
					d,
					u - i,
					d - i
				],
				bottomLeft: [
					l + i,
					d,
					l,
					d - i,
					l + i,
					d - i
				]
			};
		}, "generateCutTrianglePts"),
		intersectLine: e(function(e, t, n, r, a, i, o, s) {
			var l = this.generateCutTrianglePts(n + 2 * o, r + 2 * o, e, t, s);
			return n0(a, i, [].concat.apply([], [
				l.topLeft.splice(0, 4),
				l.topRight.splice(0, 4),
				l.bottomRight.splice(0, 4),
				l.bottomLeft.splice(0, 4)
			]), e, t);
		}, "intersectLine"),
		checkPoint: e(function(e, t, n, r, a, i, o, s) {
			var l = "auto" === s ? this.cornerLength : s;
			if (nY(e, t, this.points, i, o, r, a - 2 * l, [0, -1], n) || nY(e, t, this.points, i, o, r - 2 * l, a, [0, -1], n)) return !0;
			var u = this.generateCutTrianglePts(r, a, i, o);
			return nX(e, t, u.topLeft) || nX(e, t, u.topRight) || nX(e, t, u.bottomRight) || nX(e, t, u.bottomLeft);
		}, "checkPoint")
	};
}, cD.generateBarrel = function() {
	return this.nodeShapes.barrel = {
		renderer: this,
		name: "barrel",
		points: n5(4, 0),
		draw: e(function(e, t, n, r, a, i) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
		}, "draw"),
		intersectLine: e(function(t, n, r, a, i, o, s, l) {
			var u = this.generateBarrelBezierPts(r + 2 * s, a + 2 * s, t, n), c = e(function(e) {
				var t = nm({
					x: e[0],
					y: e[1]
				}, {
					x: e[2],
					y: e[3]
				}, {
					x: e[4],
					y: e[5]
				}, .15), n = nm({
					x: e[0],
					y: e[1]
				}, {
					x: e[2],
					y: e[3]
				}, {
					x: e[4],
					y: e[5]
				}, .5), r = nm({
					x: e[0],
					y: e[1]
				}, {
					x: e[2],
					y: e[3]
				}, {
					x: e[4],
					y: e[5]
				}, .85);
				return [
					e[0],
					e[1],
					t.x,
					t.y,
					n.x,
					n.y,
					r.x,
					r.y,
					e[4],
					e[5]
				];
			}, "approximateBarrelCurvePts");
			return n0(i, o, [].concat(c(u.topLeft), c(u.topRight), c(u.bottomRight), c(u.bottomLeft)), t, n);
		}, "intersectLine"),
		generateBarrelBezierPts: e(function(e, t, n, r) {
			var a = t / 2, i = e / 2, o = n - i, s = n + i, l = r - a, u = r + a, c = re(e, t), d = c.heightOffset, h = c.widthOffset, f = c.ctrlPtOffsetPct * e, p = {
				topLeft: [
					o,
					l + d,
					o + f,
					l,
					o + h,
					l
				],
				topRight: [
					s - h,
					l,
					s - f,
					l,
					s,
					l + d
				],
				bottomRight: [
					s,
					u - d,
					s - f,
					u,
					s - h,
					u
				],
				bottomLeft: [
					o + h,
					u,
					o + f,
					u,
					o,
					u - d
				]
			};
			return p.topLeft.isTop = !0, p.topRight.isTop = !0, p.bottomLeft.isBottom = !0, p.bottomRight.isBottom = !0, p;
		}, "generateBarrelBezierPts"),
		checkPoint: e(function(t, n, r, a, i, o, s, l) {
			var u = re(a, i), c = u.heightOffset, d = u.widthOffset;
			if (nY(t, n, this.points, o, s, a, i - 2 * c, [0, -1], r) || nY(t, n, this.points, o, s, a - 2 * d, i, [0, -1], r)) return !0;
			for (var h = this.generateBarrelBezierPts(a, i, o, s), f = e(function(e, t, n) {
				var r = n[4], a = n[2], i = n[0], o = n[5], s = n[1];
				if (Math.min(r, i) <= e && e <= Math.max(r, i) && Math.min(o, s) <= t && t <= Math.max(o, s)) {
					var l = n7(r, a, i), u = nF(l[0], l[1], l[2], e).filter(function(e) {
						return 0 <= e && e <= 1;
					});
					if (u.length > 0) return u[0];
				}
				return null;
			}, "getCurveT"), p = Object.keys(h), g = 0; g < p.length; g++) {
				var v = h[p[g]], y = f(t, n, v);
				if (null != y) {
					var m = ny(v[5], v[3], v[1], y);
					if (v.isTop && m <= n || v.isBottom && n <= m) return !0;
				}
			}
			return !1;
		}, "checkPoint")
	};
}, cD.generateBottomRoundrectangle = function() {
	return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
		renderer: this,
		name: "bottom-round-rectangle",
		points: n5(4, 0),
		draw: e(function(e, t, n, r, a, i) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, this.points, i);
		}, "draw"),
		intersectLine: e(function(e, t, n, r, a, i, o, s) {
			var l = e - (n / 2 + o), u = t - (r / 2 + o), c = e + (n / 2 + o), d = nQ(a, i, e, t, l, u, c, u, !1);
			return d.length > 0 ? d : nN(a, i, e, t, n, r, o, s);
		}, "intersectLine"),
		checkPoint: e(function(e, t, n, r, a, i, o, s) {
			var l = 2 * (s = "auto" === s ? n9(r, a) : s);
			if (nY(e, t, this.points, i, o, r, a - l, [0, -1], n) || nY(e, t, this.points, i, o, r - l, a, [0, -1], n)) return !0;
			var u = r / 2 + 2 * n, c = a / 2 + 2 * n;
			return !!(nX(e, t, [
				i - u,
				o - c,
				i - u,
				o,
				i + u,
				o,
				i + u,
				o - c
			]) || nG(e, t, l, l, i + r / 2 - s, o + a / 2 - s, n) || nG(e, t, l, l, i - r / 2 + s, o + a / 2 - s, n));
		}, "checkPoint")
	};
}, cD.registerNodeShapes = function() {
	var e = this.nodeShapes = {}, t = this;
	this.generateEllipse(), this.generatePolygon("triangle", n5(3, 0)), this.generateRoundPolygon("round-triangle", n5(3, 0)), this.generatePolygon("rectangle", n5(4, 0)), e.square = e.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
	var n = [
		0,
		1,
		1,
		0,
		0,
		-1,
		-1,
		0
	];
	this.generatePolygon("diamond", n), this.generateRoundPolygon("round-diamond", n), this.generatePolygon("pentagon", n5(5, 0)), this.generateRoundPolygon("round-pentagon", n5(5, 0)), this.generatePolygon("hexagon", n5(6, 0)), this.generateRoundPolygon("round-hexagon", n5(6, 0)), this.generatePolygon("heptagon", n5(7, 0)), this.generateRoundPolygon("round-heptagon", n5(7, 0)), this.generatePolygon("octagon", n5(8, 0)), this.generateRoundPolygon("round-octagon", n5(8, 0));
	var r = Array(20), a = n4(5, 0), i = n4(5, Math.PI / 5), o = .5 * (3 - Math.sqrt(5));
	o *= 1.57;
	for (var s = 0; s < i.length / 2; s++) i[2 * s] *= o, i[2 * s + 1] *= o;
	for (var s = 0; s < 5; s++) r[4 * s] = a[2 * s], r[4 * s + 1] = a[2 * s + 1], r[4 * s + 2] = i[2 * s], r[4 * s + 3] = i[2 * s + 1];
	r = n3(r), this.generatePolygon("star", r), this.generatePolygon("vee", [
		-1,
		-1,
		0,
		-.333,
		1,
		-1,
		0,
		1
	]), this.generatePolygon("rhomboid", [
		-1,
		-1,
		.333,
		-1,
		1,
		1,
		-.333,
		1
	]), this.generatePolygon("right-rhomboid", [
		-.333,
		-1,
		1,
		-1,
		.333,
		1,
		-1,
		1
	]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [
		-1,
		-.95,
		-.75,
		0,
		-1,
		.95,
		1,
		.95,
		.75,
		0,
		1,
		-.95
	]);
	var l = [
		-1,
		-1,
		.25,
		-1,
		1,
		0,
		.25,
		1,
		-1,
		1
	];
	this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l), e.makePolygon = function(e) {
		var n, r = "polygon-" + e.join("$");
		return (n = this[r]) ? n : t.generatePolygon(r, e);
	};
};
var cA = {};
cA.timeToRender = function() {
	return this.redrawTotalTime / this.redrawCount;
}, cA.redraw = function(e) {
	e = e || tn(), void 0 === this.averageRedrawTime && (this.averageRedrawTime = 0), void 0 === this.lastRedrawTime && (this.lastRedrawTime = 0), void 0 === this.lastDrawTime && (this.lastDrawTime = 0), this.requestedFrame = !0, this.renderOptions = e;
}, cA.beforeRender = function(e, t) {
	if (!this.destroyed) {
		t ?? e3("Priority is not optional for beforeRender");
		var n = this.beforeRenderCallbacks;
		n.push({
			fn: e,
			priority: t
		}), n.sort(function(e, t) {
			return t.priority - e.priority;
		});
	}
};
var cM = e(function(e, t, n) {
	for (var r = e.beforeRenderCallbacks, a = 0; a < r.length; a++) r[a].fn(t, n);
}, "beforeRenderCallbacks");
cA.startRenderLoop = function() {
	var t = this, n = t.cy;
	if (!t.renderLoopStarted) {
		t.renderLoopStarted = !0;
		var r = e(function(e) {
			if (!t.destroyed) {
				if (!n.batching()) if (t.requestedFrame && !t.skipFrame) {
					cM(t, !0, e);
					var a = eI();
					t.render(t.renderOptions);
					var i = t.lastDrawTime = eI();
					void 0 === t.averageRedrawTime && (t.averageRedrawTime = i - a), void 0 === t.redrawCount && (t.redrawCount = 0), t.redrawCount++, void 0 === t.redrawTotalTime && (t.redrawTotalTime = 0);
					var o = i - a;
					t.redrawTotalTime += o, t.lastRedrawTime = o, t.averageRedrawTime = t.averageRedrawTime / 2 + o / 2, t.requestedFrame = !1;
				} else cM(t, !1, e);
				t.skipFrame = !1, eN(r);
			}
		}, "renderFn");
		eN(r);
	}
};
var cR = e(function(e) {
	this.init(e);
}, "BaseRenderer"), cI = cR.prototype;
cI.clientFunctions = [
	"redrawHint",
	"render",
	"renderTo",
	"matchCanvasSize",
	"nodeShapeImpl",
	"arrowShapeImpl"
], cI.init = function(e) {
	this.options = e, this.cy = e.cy;
	var t = this.container = e.cy.container(), n = this.cy.window();
	if (n) {
		var r = n.document, a = r.head, i = "__________cytoscape_stylesheet", o = "__________cytoscape_container", s = null != r.getElementById(i);
		if (0 > t.className.indexOf(o) && (t.className = (t.className || "") + " " + o), !s) {
			var l = r.createElement("style");
			l.id = i, l.textContent = "." + o + " { position: relative; }", a.insertBefore(l, a.children[0]);
		}
		"static" === n.getComputedStyle(t).getPropertyValue("position") && e9("A Cytoscape container has style position:static and so can not use UI extensions properly");
	}
	this.selection = [
		void 0,
		void 0,
		void 0,
		void 0,
		0
	], this.bezierProjPcts = [
		.05,
		.225,
		.4,
		.5,
		.6,
		.775,
		.95
	], this.hoverData = {
		down: null,
		last: null,
		downTime: null,
		triggerMode: null,
		dragging: !1,
		initialPan: [null, null],
		capture: !1
	}, this.dragData = { possibleDragElements: [] }, this.touchData = {
		start: null,
		capture: !1,
		startPosition: [
			null,
			null,
			null,
			null,
			null,
			null
		],
		singleTouchStartTime: null,
		singleTouchMoved: !0,
		now: [
			null,
			null,
			null,
			null,
			null,
			null
		],
		earlier: [
			null,
			null,
			null,
			null,
			null,
			null
		]
	}, this.redraws = 0, this.showFps = e.showFps, this.debug = e.debug, this.webgl = e.webgl, this.hideEdgesOnViewport = e.hideEdgesOnViewport, this.textureOnViewport = e.textureOnViewport, this.wheelSensitivity = e.wheelSensitivity, this.motionBlurEnabled = e.motionBlur, this.forcedPixelRatio = I(e.pixelRatio) ? e.pixelRatio : null, this.motionBlur = e.motionBlur, this.motionBlurOpacity = e.motionBlurOpacity, this.motionBlurTransparency = 1 - this.motionBlurOpacity, this.motionBlurPxRatio = 1, this.mbPxRBlurry = 1, this.minMbLowQualFrames = 4, this.fullQualityMb = !1, this.clearedForMotionBlur = [], this.desktopTapThreshold = e.desktopTapThreshold, this.desktopTapThreshold2 = e.desktopTapThreshold * e.desktopTapThreshold, this.touchTapThreshold = e.touchTapThreshold, this.touchTapThreshold2 = e.touchTapThreshold * e.touchTapThreshold, this.tapholdDuration = 500, this.bindings = [], this.beforeRenderCallbacks = [], this.beforeRenderPriorities = {
		animations: 400,
		eleCalcs: 300,
		eleTxrDeq: 200,
		lyrTxrDeq: 150,
		lyrTxrSkip: 100
	}, this.registerNodeShapes(), this.registerArrowShapes(), this.registerCalculationListeners();
}, cI.notify = function(e, t) {
	var n = this.cy;
	if (!this.destroyed) {
		if ("init" === e) return void this.load();
		if ("destroy" === e) return void this.destroy();
		("add" === e || "remove" === e || "move" === e && n.hasCompoundNodes() || "load" === e || "zorder" === e || "mount" === e) && this.invalidateCachedZSortedEles(), "viewport" === e && this.redrawHint("select", !0), "gc" === e && this.redrawHint("gc", !0), ("load" === e || "resize" === e || "mount" === e) && (this.invalidateContainerClientCoordsCache(), this.matchCanvasSize(this.container)), this.redrawHint("eles", !0), this.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
	}
}, cI.destroy = function() {
	this.destroyed = !0, this.cy.stopAnimationLoop();
	for (var e = 0; e < this.bindings.length; e++) {
		var t = this.bindings[e], n = t.target;
		(n.off || n.removeEventListener).apply(n, t.args);
	}
	if (this.bindings = [], this.beforeRenderCallbacks = [], this.onUpdateEleCalcsFns = [], this.removeObserver && this.removeObserver.disconnect(), this.styleObserver && this.styleObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.labelCalcDiv) try {
		document.body.removeChild(this.labelCalcDiv);
	} catch {}
}, cI.isHeadless = function() {
	return !1;
}, [
	uZ,
	cP,
	cB,
	c_,
	cD,
	cA
].forEach(function(e) {
	es(cI, e);
});
var cL = 1e3 / 60, cN = { setupDequeueing: e(function(t) {
	return e(function() {
		var n = this, r = this.renderer;
		if (!n.dequeueingSetup) {
			n.dequeueingSetup = !0;
			var a = eM(function() {
				r.redrawHint("eles", !0), r.redrawHint("drag", !0), r.redraw();
			}, t.deqRedrawThreshold), i = e(function(e, i) {
				var o = eI(), s = r.averageRedrawTime, l = r.lastRedrawTime, u = [], c = r.cy.extent(), d = r.getPixelRatio();
				for (e || r.flushRenderedStyleQueue();;) {
					var h = eI(), f = h - o, p = h - i;
					if (l < cL) {
						var g = cL - (e ? s : 0);
						if (p >= t.deqFastCost * g) break;
					} else if (e) {
						if (f >= t.deqCost * l || f >= t.deqAvgCost * s) break;
					} else if (p >= t.deqNoDrawCost * cL) break;
					var v = t.deq(n, d, c);
					if (v.length > 0) for (var y = 0; y < v.length; y++) u.push(v[y]);
					else break;
				}
				u.length > 0 && (t.onDeqd(n, u), !e && t.shouldRedraw(n, u, d, c) && a());
			}, "dequeue"), o = t.priority || e5;
			r.beforeRender(i, o(n));
		}
	}, "setupDequeueingImpl");
}, "setupDequeueing") }, cz = function() {
	function t(e) {
		var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1;
		a(this, t), this.idsByKey = new tc(), this.keyForId = new tc(), this.cachesByLvl = new tc(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = n;
	}
	return e(t, "ElementTextureCacheLookup"), o(t, [
		{
			key: "getIdsFor",
			value: e(function(e) {
				e ?? e3("Can not get id list for null key");
				var t = this.idsByKey, n = this.idsByKey.get(e);
				return n || (n = new th(), t.set(e, n)), n;
			}, "getIdsFor")
		},
		{
			key: "addIdForKey",
			value: e(function(e, t) {
				null != e && this.getIdsFor(e).add(t);
			}, "addIdForKey")
		},
		{
			key: "deleteIdForKey",
			value: e(function(e, t) {
				null != e && this.getIdsFor(e).delete(t);
			}, "deleteIdForKey")
		},
		{
			key: "getNumberOfIdsForKey",
			value: e(function(e) {
				return null == e ? 0 : this.getIdsFor(e).size;
			}, "getNumberOfIdsForKey")
		},
		{
			key: "updateKeyMappingFor",
			value: e(function(e) {
				var t = e.id(), n = this.keyForId.get(t), r = this.getKey(e);
				this.deleteIdForKey(n, t), this.addIdForKey(r, t), this.keyForId.set(t, r);
			}, "updateKeyMappingFor")
		},
		{
			key: "deleteKeyMappingFor",
			value: e(function(e) {
				var t = e.id(), n = this.keyForId.get(t);
				this.deleteIdForKey(n, t), this.keyForId.delete(t);
			}, "deleteKeyMappingFor")
		},
		{
			key: "keyHasChangedFor",
			value: e(function(e) {
				var t = e.id();
				return this.keyForId.get(t) !== this.getKey(e);
			}, "keyHasChangedFor")
		},
		{
			key: "isInvalid",
			value: e(function(e) {
				return this.keyHasChangedFor(e) || this.doesEleInvalidateKey(e);
			}, "isInvalid")
		},
		{
			key: "getCachesAt",
			value: e(function(e) {
				var t = this.cachesByLvl, n = this.lvls, r = t.get(e);
				return r || (r = new tc(), t.set(e, r), n.push(e)), r;
			}, "getCachesAt")
		},
		{
			key: "getCache",
			value: e(function(e, t) {
				return this.getCachesAt(t).get(e);
			}, "getCache")
		},
		{
			key: "get",
			value: e(function(e, t) {
				var n = this.getKey(e), r = this.getCache(n, t);
				return null != r && this.updateKeyMappingFor(e), r;
			}, "get")
		},
		{
			key: "getForCachedKey",
			value: e(function(e, t) {
				var n = this.keyForId.get(e.id());
				return this.getCache(n, t);
			}, "getForCachedKey")
		},
		{
			key: "hasCache",
			value: e(function(e, t) {
				return this.getCachesAt(t).has(e);
			}, "hasCache")
		},
		{
			key: "has",
			value: e(function(e, t) {
				var n = this.getKey(e);
				return this.hasCache(n, t);
			}, "has")
		},
		{
			key: "setCache",
			value: e(function(e, t, n) {
				n.key = e, this.getCachesAt(t).set(e, n);
			}, "setCache")
		},
		{
			key: "set",
			value: e(function(e, t, n) {
				var r = this.getKey(e);
				this.setCache(r, t, n), this.updateKeyMappingFor(e);
			}, "set")
		},
		{
			key: "deleteCache",
			value: e(function(e, t) {
				this.getCachesAt(t).delete(e);
			}, "deleteCache")
		},
		{
			key: "delete",
			value: e(function(e, t) {
				var n = this.getKey(e);
				this.deleteCache(n, t);
			}, "_delete")
		},
		{
			key: "invalidateKey",
			value: e(function(e) {
				var t = this;
				this.lvls.forEach(function(n) {
					return t.deleteCache(e, n);
				});
			}, "invalidateKey")
		},
		{
			key: "invalidate",
			value: e(function(e) {
				var t = e.id(), n = this.keyForId.get(t);
				this.deleteKeyMappingFor(e);
				var r = this.doesEleInvalidateKey(e);
				return r && this.invalidateKey(n), r || 0 === this.getNumberOfIdsForKey(n);
			}, "invalidate")
		}
	]);
}(), cO = {
	dequeue: "dequeue",
	downscale: "downscale",
	highQuality: "highQuality"
}, cF = tr({
	getKey: null,
	doesEleInvalidateKey: e1,
	drawElement: null,
	getBoundingBox: null,
	getRotationPoint: null,
	getRotationOffset: null,
	isVisible: e0,
	allowEdgeTxrCaching: !0,
	allowParentTxrCaching: !0
}), cV = e(function(e, t) {
	this.renderer = e, this.onDequeues = [];
	var n = cF(t);
	es(this, n), this.lookup = new cz(n.getKey, n.doesEleInvalidateKey), this.setupDequeueing();
}, "ElementTextureCache"), cq = cV.prototype;
cq.reasons = cO, cq.getTextureQueue = function(e) {
	return this.eleImgCaches = this.eleImgCaches || {}, this.eleImgCaches[e] = this.eleImgCaches[e] || [];
}, cq.getRetiredTextureQueue = function(e) {
	var t = this.eleImgCaches.retired = this.eleImgCaches.retired || {};
	return t[e] = t[e] || [];
}, cq.getElementQueue = function() {
	return this.eleCacheQueue = this.eleCacheQueue || new tQ(function(e, t) {
		return t.reqs - e.reqs;
	});
}, cq.getElementKeyToQueue = function() {
	return this.eleKeyToCacheQueue = this.eleKeyToCacheQueue || {};
}, cq.getElement = function(t, n, r, a, i) {
	var o, s = this, l = this.renderer, u = l.cy.zoom(), c = this.lookup;
	if (!n || 0 === n.w || 0 === n.h || isNaN(n.w) || isNaN(n.h) || !t.visible() || t.removed() || !s.allowEdgeTxrCaching && t.isEdge() || !s.allowParentTxrCaching && t.isParent()) return null;
	if ((a ??= Math.ceil(nh(u * r))) < -4) a = -4;
	else if (u >= 7.99 || a > 3) return null;
	var d = Math.pow(2, a), h = n.h * d, f = n.w * d, p = l.eleTextBiggerThanMin(t, d);
	if (!this.isVisible(t, p)) return null;
	var g = c.get(t, a);
	if (g && g.invalidated && (g.invalidated = !1, g.texture.invalidatedWidth -= g.width), g) return g;
	if (x = h <= 25 ? 25 : h <= 50 ? 50 : 50 * Math.ceil(h / 50), h > 1024 || f > 1024) return null;
	var v = s.getTextureQueue(x), y = v[v.length - 2], m = e(function() {
		return s.recycleTexture(x, f) || s.addTexture(x, f);
	}, "addNewTxr");
	y || (y = v[v.length - 1]), y || (y = m()), y.width - y.usedWidth < f && (y = m());
	for (var x, w, E = e(function(e) {
		return e && e.scaledLabelShown === p;
	}, "scalableFrom"), C = i && i === cO.dequeue, T = i && i === cO.highQuality, k = i && i === cO.downscale, S = a + 1; S <= 3; S++) {
		var P = c.get(t, S);
		if (P) {
			w = P;
			break;
		}
	}
	var B = w && w.level === a + 1 ? w : null, _ = e(function() {
		y.context.drawImage(B.texture.canvas, B.x, 0, B.width, B.height, y.usedWidth, 0, f, h);
	}, "downscale");
	if (y.context.setTransform(1, 0, 0, 1, 0, 0), y.context.clearRect(y.usedWidth, 0, f, x), E(B)) _();
	else if (E(w)) if (!T) return s.queueElement(t, w.level - 1), w;
	else {
		for (var D = w.level; D > a; D--) B = s.getElement(t, n, r, D, cO.downscale);
		_();
	}
	else {
		if (!C && !T && !k) for (var A = a - 1; A >= -4; A--) {
			var M = c.get(t, A);
			if (M) {
				o = M;
				break;
			}
		}
		if (E(o)) return s.queueElement(t, a), o;
		y.context.translate(y.usedWidth, 0), y.context.scale(d, d), this.drawElement(y.context, t, n, p, !1), y.context.scale(1 / d, 1 / d), y.context.translate(-y.usedWidth, 0);
	}
	return g = {
		x: y.usedWidth,
		texture: y,
		level: a,
		scale: d,
		width: f,
		height: h,
		scaledLabelShown: p
	}, y.usedWidth += Math.ceil(f + 8), y.eleCaches.push(g), c.set(t, a, g), s.checkTextureFullness(y), g;
}, cq.invalidateElements = function(e) {
	for (var t = 0; t < e.length; t++) this.invalidateElement(e[t]);
}, cq.invalidateElement = function(e) {
	var t = this.lookup, n = [];
	if (t.isInvalid(e)) {
		for (var r = -4; r <= 3; r++) {
			var a = t.getForCachedKey(e, r);
			a && n.push(a);
		}
		if (t.invalidate(e)) for (var i = 0; i < n.length; i++) {
			var o = n[i], s = o.texture;
			s.invalidatedWidth += o.width, o.invalidated = !0, this.checkTextureUtility(s);
		}
		this.removeFromQueue(e);
	}
}, cq.checkTextureUtility = function(e) {
	e.invalidatedWidth >= .2 * e.width && this.retireTexture(e);
}, cq.checkTextureFullness = function(e) {
	var t = this.getTextureQueue(e.height);
	e.usedWidth / e.width > .8 && e.fullnessChecks >= 10 ? ta(t, e) : e.fullnessChecks++;
}, cq.retireTexture = function(e) {
	var t = e.height, n = this.getTextureQueue(t), r = this.lookup;
	ta(n, e), e.retired = !0;
	for (var a = e.eleCaches, i = 0; i < a.length; i++) {
		var o = a[i];
		r.deleteCache(o.key, o.level);
	}
	ti(a), this.getRetiredTextureQueue(t).push(e);
}, cq.addTexture = function(e, t) {
	var n = this.getTextureQueue(e), r = {};
	return n.push(r), r.eleCaches = [], r.height = e, r.width = Math.max(1024, t), r.usedWidth = 0, r.invalidatedWidth = 0, r.fullnessChecks = 0, r.canvas = this.renderer.makeOffscreenCanvas(r.width, r.height), r.context = r.canvas.getContext("2d"), r;
}, cq.recycleTexture = function(e, t) {
	for (var n = this.getTextureQueue(e), r = this.getRetiredTextureQueue(e), a = 0; a < r.length; a++) {
		var i = r[a];
		if (i.width >= t) return i.retired = !1, i.usedWidth = 0, i.invalidatedWidth = 0, i.fullnessChecks = 0, ti(i.eleCaches), i.context.setTransform(1, 0, 0, 1, 0, 0), i.context.clearRect(0, 0, i.width, i.height), ta(r, i), n.push(i), i;
	}
}, cq.queueElement = function(e, t) {
	var n = this.getElementQueue(), r = this.getElementKeyToQueue(), a = this.getKey(e), i = r[a];
	if (i) i.level = Math.max(i.level, t), i.eles.merge(e), i.reqs++, n.updateItem(i);
	else {
		var o = {
			eles: e.spawn().merge(e),
			level: t,
			reqs: 1,
			key: a
		};
		n.push(o), r[a] = o;
	}
}, cq.dequeue = function(e) {
	for (var t = this.getElementQueue(), n = this.getElementKeyToQueue(), r = [], a = this.lookup, i = 0; i < 1 && t.size() > 0; i++) {
		var o = t.pop(), s = o.key, l = o.eles[0], u = a.hasCache(l, o.level);
		if (n[s] = null, !u) {
			r.push(o);
			var c = this.getBoundingBox(l);
			this.getElement(l, c, e, o.level, cO.dequeue);
		}
	}
	return r;
}, cq.removeFromQueue = function(e) {
	var t = this.getElementQueue(), n = this.getElementKeyToQueue(), r = this.getKey(e), a = n[r];
	null != a && (1 === a.eles.length ? (a.reqs = eJ, t.updateItem(a), t.pop(), n[r] = null) : a.eles.unmerge(e));
}, cq.onDequeue = function(e) {
	this.onDequeues.push(e);
}, cq.offDequeue = function(e) {
	ta(this.onDequeues, e);
}, cq.setupDequeueing = cN.setupDequeueing({
	deqRedrawThreshold: 100,
	deqCost: .15,
	deqAvgCost: .1,
	deqNoDrawCost: .9,
	deqFastCost: .9,
	deq: e(function(e, t, n) {
		return e.dequeue(t, n);
	}, "deq"),
	onDeqd: e(function(e, t) {
		for (var n = 0; n < e.onDequeues.length; n++) (0, e.onDequeues[n])(t);
	}, "onDeqd"),
	shouldRedraw: e(function(e, t, n, r) {
		for (var a = 0; a < t.length; a++) for (var i = t[a].eles, o = 0; o < i.length; o++) if (n_(i[o].boundingBox(), r)) return !0;
		return !1;
	}, "shouldRedraw"),
	priority: e(function(e) {
		return e.renderer.beforeRenderPriorities.eleTxrDeq;
	}, "priority")
});
var cj = 4e3 * 4e3, cX = e(function(t) {
	var n = this, r = n.renderer = t, a = r.cy;
	n.layersByLevel = {}, n.firstGet = !0, n.lastInvalidationTime = eI() - 500, n.skipping = !1, n.eleTxrDeqs = a.collection(), n.scheduleElementRefinement = eM(function() {
		n.refineElementTextures(n.eleTxrDeqs), n.eleTxrDeqs.unmerge(n.eleTxrDeqs);
	}, 50), r.beforeRender(function(e, t) {
		t - n.lastInvalidationTime <= 250 ? n.skipping = !0 : n.skipping = !1;
	}, r.beforeRenderPriorities.lyrTxrSkip), n.layersQueue = new tQ(e(function(e, t) {
		return t.reqs - e.reqs;
	}, "qSort")), n.setupDequeueing();
}, "LayeredTextureCache"), cY = cX.prototype, cW = 0;
cY.makeLayer = function(e, t) {
	var n = Math.pow(2, t), r = Math.ceil(e.w * n), a = Math.ceil(e.h * n), i = this.renderer.makeOffscreenCanvas(r, a), o = {
		id: cW = ++cW % 9007199254740991,
		bb: e,
		level: t,
		width: r,
		height: a,
		canvas: i,
		context: i.getContext("2d"),
		eles: [],
		elesQueue: [],
		reqs: 0
	}, s = o.context, l = -o.bb.x1, u = -o.bb.y1;
	return s.scale(n, n), s.translate(l, u), o;
}, cY.getLayers = function(t, n, r) {
	var a = this, i = a.renderer.cy.zoom(), o = a.firstGet;
	if (a.firstGet = !1, null == r) {
		if ((r = Math.ceil(nh(i * n))) < -4) r = -4;
		else if (i >= 3.99 || r > 2) return null;
	}
	a.validateLayersElesOrdering(r, t);
	var s, l, u = a.layersByLevel, c = Math.pow(2, r), d = u[r] = u[r] || [], h = a.levelIsComplete(r, t), f = e(function() {
		var n = e(function(e) {
			if (a.validateLayersElesOrdering(e, t), a.levelIsComplete(e, t)) return l = u[e], !0;
		}, "canUseAsTmpLvl"), i = e(function(e) {
			if (!l) for (var t = r + e; -4 <= t && t <= 2 && !n(t); t += e);
		}, "checkLvls");
		i(1), i(-1);
		for (var o = d.length - 1; o >= 0; o--) {
			var s = d[o];
			s.invalid && ta(d, s);
		}
	}, "checkTempLevels");
	if (h) return d;
	f();
	var p = e(function() {
		if (!s) {
			s = nw();
			for (var e = 0; e < t.length; e++) nT(s, t[e].boundingBox());
		}
		return s;
	}, "getBb"), g = e(function(e) {
		var t = (e = e || {}).after;
		p();
		var n = Math.ceil(s.w * c), i = Math.ceil(s.h * c);
		if (n > 32767 || i > 32767 || n * i > cj) return null;
		var o = a.makeLayer(s, r);
		if (null != t) {
			var l = d.indexOf(t) + 1;
			d.splice(l, 0, o);
		} else (void 0 === e.insert || e.insert) && d.unshift(o);
		return o;
	}, "makeLayer");
	if (a.skipping && !o) return null;
	for (var v = null, y = t.length / 1, m = !o, x = 0; x < t.length; x++) {
		var w = t[x], E = w._private.rscratch, C = E.imgLayerCaches = E.imgLayerCaches || {}, T = C[r];
		if (T) {
			v = T;
			continue;
		}
		if ((!v || v.eles.length >= y || !nM(v.bb, w.boundingBox())) && !(v = g({
			insert: !0,
			after: v
		}))) return null;
		l || m ? a.queueLayer(v, w) : a.drawEleInLayer(v, w, r, n), v.eles.push(w), C[r] = v;
	}
	return l || (m ? null : d);
}, cY.getEleLevelForLayerLevel = function(e, t) {
	return e;
}, cY.drawEleInLayer = function(e, t, n, r) {
	var a = this.renderer, i = e.context, o = t.boundingBox();
	0 !== o.w && 0 !== o.h && t.visible() && (n = this.getEleLevelForLayerLevel(n, r), a.setImgSmoothing(i, !1), a.drawCachedElement(i, t, null, null, n, !0), a.setImgSmoothing(i, !0));
}, cY.levelIsComplete = function(e, t) {
	var n = this.layersByLevel[e];
	if (!n || 0 === n.length) return !1;
	for (var r = 0, a = 0; a < n.length; a++) {
		var i = n[a];
		if (i.reqs > 0 || i.invalid) return !1;
		r += i.eles.length;
	}
	return r === t.length;
}, cY.validateLayersElesOrdering = function(e, t) {
	var n = this.layersByLevel[e];
	if (n) for (var r = 0; r < n.length; r++) {
		for (var a = n[r], i = -1, o = 0; o < t.length; o++) if (a.eles[0] === t[o]) {
			i = o;
			break;
		}
		if (i < 0) {
			this.invalidateLayer(a);
			continue;
		}
		for (var s = i, o = 0; o < a.eles.length; o++) if (a.eles[o] !== t[s + o]) {
			this.invalidateLayer(a);
			break;
		}
	}
}, cY.updateElementsInLayers = function(e, t) {
	for (var n = O(e[0]), r = 0; r < e.length; r++) for (var a = n ? null : e[r], i = n ? e[r] : e[r].ele, o = i._private.rscratch, s = o.imgLayerCaches = o.imgLayerCaches || {}, l = -4; l <= 2; l++) {
		var u = s[l];
		u && (a && this.getEleLevelForLayerLevel(u.level) !== a.level || t(u, i, a));
	}
}, cY.haveLayers = function() {
	for (var e = !1, t = -4; t <= 2; t++) {
		var n = this.layersByLevel[t];
		if (n && n.length > 0) {
			e = !0;
			break;
		}
	}
	return e;
}, cY.invalidateElements = function(t) {
	var n = this;
	0 === t.length || (n.lastInvalidationTime = eI(), 0 !== t.length && n.haveLayers() && n.updateElementsInLayers(t, e(function(e, t, r) {
		n.invalidateLayer(e);
	}, "invalAssocLayers")));
}, cY.invalidateLayer = function(e) {
	if (this.lastInvalidationTime = eI(), !e.invalid) {
		var t = e.level, n = e.eles;
		ta(this.layersByLevel[t], e), e.elesQueue = [], e.invalid = !0, e.replacement && (e.replacement.invalid = !0);
		for (var r = 0; r < n.length; r++) {
			var a = n[r]._private.rscratch.imgLayerCaches;
			a && (a[t] = null);
		}
	}
}, cY.refineElementTextures = function(t) {
	var n = this;
	n.updateElementsInLayers(t, e(function(e, t, r) {
		var a = e.replacement;
		if (a || ((a = e.replacement = n.makeLayer(e.bb, e.level)).replaces = e, a.eles = e.eles), !a.reqs) for (var i = 0; i < a.eles.length; i++) n.queueLayer(a, a.eles[i]);
	}, "refineEachEle"));
}, cY.enqueueElementRefinement = function(e) {
	this.eleTxrDeqs.merge(e), this.scheduleElementRefinement();
}, cY.queueLayer = function(e, t) {
	var n = this.layersQueue, r = e.elesQueue, a = r.hasId = r.hasId || {};
	if (!e.replacement) {
		if (t) {
			if (a[t.id()]) return;
			r.push(t), a[t.id()] = !0;
		}
		e.reqs ? (e.reqs++, n.updateItem(e)) : (e.reqs = 1, n.push(e));
	}
}, cY.dequeue = function(e) {
	for (var t = this.layersQueue, n = [], r = 0; r < 1 && 0 !== t.size();) {
		var a = t.peek();
		if (a.replacement || a.replaces && a !== a.replaces.replacement || a.invalid) {
			t.pop();
			continue;
		}
		var i = a.elesQueue.shift();
		i && (this.drawEleInLayer(a, i, a.level, e), r++), 0 === n.length && n.push(!0), 0 === a.elesQueue.length && (t.pop(), a.reqs = 0, a.replaces && this.applyLayerReplacement(a), this.requestRedraw());
	}
	return n;
}, cY.applyLayerReplacement = function(e) {
	var t = this.layersByLevel[e.level], n = e.replaces, r = t.indexOf(n);
	if (!(r < 0 || n.invalid)) {
		t[r] = e;
		for (var a = 0; a < e.eles.length; a++) {
			var i = e.eles[a]._private, o = i.imgLayerCaches = i.imgLayerCaches || {};
			o && (o[e.level] = e);
		}
		this.requestRedraw();
	}
}, cY.requestRedraw = eM(function() {
	var e = this.renderer;
	e.redrawHint("eles", !0), e.redrawHint("drag", !0), e.redraw();
}, 100), cY.setupDequeueing = cN.setupDequeueing({
	deqRedrawThreshold: 50,
	deqCost: .15,
	deqAvgCost: .1,
	deqNoDrawCost: .9,
	deqFastCost: .9,
	deq: e(function(e, t) {
		return e.dequeue(t);
	}, "deq"),
	onDeqd: e5,
	shouldRedraw: e0,
	priority: e(function(e) {
		return e.renderer.beforeRenderPriorities.lyrTxrDeq;
	}, "priority")
});
var cH, cK = {};
function cU(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		e.lineTo(r.x, r.y);
	}
}
function cG(e, t, n) {
	for (var r, a = 0; a < t.length; a++) {
		var i = t[a];
		0 === a && (r = i), e.lineTo(i.x, i.y);
	}
	e.quadraticCurveTo(n.x, n.y, r.x, r.y);
}
function cZ(e, t, n) {
	e.beginPath && e.beginPath();
	for (var r = 0; r < t.length; r++) {
		var a = t[r];
		e.lineTo(a.x, a.y);
	}
	var i = n[0];
	e.moveTo(i.x, i.y);
	for (var r = 1; r < n.length; r++) {
		var a = n[r];
		e.lineTo(a.x, a.y);
	}
	e.closePath && e.closePath();
}
function c$(e, t, n, r, a) {
	e.beginPath && e.beginPath(), e.arc(n, r, a, 0, 2 * Math.PI, !1);
	var i = t[0];
	e.moveTo(i.x, i.y);
	for (var o = 0; o < t.length; o++) {
		var s = t[o];
		e.lineTo(s.x, s.y);
	}
	e.closePath && e.closePath();
}
function cQ(e, t, n, r) {
	e.arc(t, n, r, 0, 2 * Math.PI, !1);
}
e(cU, "polygon"), e(cG, "triangleBackcurve"), e(cZ, "triangleTee"), e(c$, "circleTriangle"), e(cQ, "circle$1"), cK.arrowShapeImpl = function(e) {
	return (cH || (cH = {
		polygon: cU,
		"triangle-backcurve": cG,
		"triangle-tee": cZ,
		"circle-triangle": c$,
		"triangle-cross": cZ,
		circle: cQ
	}))[e];
};
var cJ = {};
cJ.drawElement = function(e, t, n, r, a, i) {
	t.isNode() ? this.drawNode(e, t, n, r, a, i) : this.drawEdge(e, t, n, r, a, i);
}, cJ.drawElementOverlay = function(e, t) {
	t.isNode() ? this.drawNodeOverlay(e, t) : this.drawEdgeOverlay(e, t);
}, cJ.drawElementUnderlay = function(e, t) {
	t.isNode() ? this.drawNodeUnderlay(e, t) : this.drawEdgeUnderlay(e, t);
}, cJ.drawCachedElementPortion = function(e, t, n, r, a, i, o, s) {
	var l = n.getBoundingBox(t);
	if (0 !== l.w && 0 !== l.h) {
		var u = n.getElement(t, l, r, a, i);
		if (null != u) {
			var c, d = s(this, t);
			if (0 === d) return;
			var h, f, p, g, v, y = o(this, t), m = l.x1, x = l.y1, w = l.w, E = l.h;
			if (0 !== y) {
				var C = n.getRotationPoint(t);
				p = C.x, g = C.y, e.translate(p, g), e.rotate(y), (v = this.getImgSmoothing(e)) || this.setImgSmoothing(e, !0);
				var T = n.getRotationOffset(t);
				h = T.x, f = T.y;
			} else h = m, f = x;
			1 !== d && (c = e.globalAlpha, e.globalAlpha = c * d), e.drawImage(u.texture.canvas, u.x, 0, u.width, u.height, h, f, w, E), 1 !== d && (e.globalAlpha = c), 0 !== y && (e.rotate(-y), e.translate(-p, -g), v || this.setImgSmoothing(e, !1));
		} else n.drawElement(e, t);
	}
};
var c0 = e(function() {
	return 0;
}, "getZeroRotation"), c1 = e(function(e, t) {
	return e.getTextAngle(t, null);
}, "getLabelRotation"), c2 = e(function(e, t) {
	return e.getTextAngle(t, "source");
}, "getSourceLabelRotation"), c5 = e(function(e, t) {
	return e.getTextAngle(t, "target");
}, "getTargetLabelRotation"), c3 = e(function(e, t) {
	return t.effectiveOpacity();
}, "getOpacity"), c4 = e(function(e, t) {
	return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
}, "getTextOpacity");
cJ.drawCachedElement = function(e, t, n, r, a, i) {
	var o = this.data, s = o.eleTxrCache, l = o.lblTxrCache, u = o.slbTxrCache, c = o.tlbTxrCache, d = t.boundingBox(), h = !0 === i ? s.reasons.highQuality : null;
	if (!(0 === d.w || 0 === d.h || !t.visible()) && (!r || n_(d, r))) {
		var f = t.isEdge(), p = t.element()._private.rscratch.badLine;
		this.drawElementUnderlay(e, t), this.drawCachedElementPortion(e, t, s, n, a, h, c0, c3), f && p || this.drawCachedElementPortion(e, t, l, n, a, h, c1, c4), f && !p && (this.drawCachedElementPortion(e, t, u, n, a, h, c2, c4), this.drawCachedElementPortion(e, t, c, n, a, h, c5, c4)), this.drawElementOverlay(e, t);
	}
}, cJ.drawElements = function(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		this.drawElement(e, r);
	}
}, cJ.drawCachedElements = function(e, t, n, r) {
	for (var a = 0; a < t.length; a++) {
		var i = t[a];
		this.drawCachedElement(e, i, n, r);
	}
}, cJ.drawCachedNodes = function(e, t, n, r) {
	for (var a = 0; a < t.length; a++) {
		var i = t[a];
		i.isNode() && this.drawCachedElement(e, i, n, r);
	}
}, cJ.drawLayeredElements = function(e, t, n, r) {
	var a = this.data.lyrTxrCache.getLayers(t, n);
	if (a) for (var i = 0; i < a.length; i++) {
		var o = a[i], s = o.bb;
		0 === s.w || 0 === s.h || e.drawImage(o.canvas, s.x1, s.y1, s.w, s.h);
	}
	else this.drawCachedElements(e, t, n, r);
};
var c9 = {};
c9.drawEdge = function(t, n, r) {
	var a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4], o = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5], s = this, l = n._private.rscratch;
	if (!(o && !n.visible()) && !(l.badLine || null == l.allpts || isNaN(l.allpts[0]))) {
		r && (u = r, t.translate(-u.x1, -u.y1));
		var u, c = o ? n.pstyle("opacity").value : 1, d = o ? n.pstyle("line-opacity").value : 1, h = n.pstyle("curve-style").value, f = n.pstyle("line-style").value, p = n.pstyle("width").pfValue, g = n.pstyle("line-cap").value, v = n.pstyle("line-outline-width").value, y = n.pstyle("line-outline-color").value, m = c * d, x = c * d, w = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
			"straight-triangle" === h ? (s.eleStrokeStyle(t, n, e), s.drawEdgeTrianglePath(n, t, l.allpts)) : (t.lineWidth = p, t.lineCap = g, s.eleStrokeStyle(t, n, e), s.drawEdgePath(n, t, l.allpts, f), t.lineCap = "butt");
		}, "drawLine"), E = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
			if (t.lineWidth = p + v, t.lineCap = g, v > 0) s.colorStrokeStyle(t, y[0], y[1], y[2], e);
			else {
				t.lineCap = "butt";
				return;
			}
			"straight-triangle" === h ? s.drawEdgeTrianglePath(n, t, l.allpts) : (s.drawEdgePath(n, t, l.allpts, f), t.lineCap = "butt");
		}, "drawLineOutline"), C = e(function() {
			i && s.drawEdgeOverlay(t, n);
		}, "drawOverlay"), T = e(function() {
			i && s.drawEdgeUnderlay(t, n);
		}, "drawUnderlay"), k = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x;
			s.drawArrowheads(t, n, e);
		}, "drawArrows"), S = e(function() {
			s.drawElementText(t, n, null, a);
		}, "drawText");
		if (t.lineJoin = "round", "yes" === n.pstyle("ghost").value) {
			var P = n.pstyle("ghost-offset-x").pfValue, B = n.pstyle("ghost-offset-y").pfValue, _ = m * n.pstyle("ghost-opacity").value;
			t.translate(P, B), w(_), k(_), t.translate(-P, -B);
		} else E();
		T(), w(), k(), C(), S(), r && t.translate(u.x1, u.y1);
	}
};
var c6 = e(function(e) {
	if (!["overlay", "underlay"].includes(e)) throw Error("Invalid state");
	return function(t, n) {
		if (n.visible()) {
			var r = n.pstyle("".concat(e, "-opacity")).value;
			if (0 !== r) {
				var a = this.usePaths(), i = n._private.rscratch, o = 2 * n.pstyle("".concat(e, "-padding")).pfValue, s = n.pstyle("".concat(e, "-color")).value;
				t.lineWidth = o, "self" !== i.edgeType || a ? t.lineCap = "round" : t.lineCap = "butt", this.colorStrokeStyle(t, s[0], s[1], s[2], r), this.drawEdgePath(n, t, i.allpts, "solid");
			}
		}
	};
}, "drawEdgeOverlayUnderlay");
c9.drawEdgeOverlay = c6("overlay"), c9.drawEdgeUnderlay = c6("underlay"), c9.drawEdgePath = function(e, t, n, r) {
	var a, i = e._private.rscratch, o = t, l = !1, u = this.usePaths(), c = e.pstyle("line-dash-pattern").pfValue, d = e.pstyle("line-dash-offset").pfValue;
	if (u) {
		var h = n.join("$");
		i.pathCacheKey && i.pathCacheKey === h ? (a = t = i.pathCache, l = !0) : (a = t = new Path2D(), i.pathCacheKey = h, i.pathCache = a);
	}
	if (o.setLineDash) switch (r) {
		case "dotted":
			o.setLineDash([1, 1]);
			break;
		case "dashed":
			o.setLineDash(c), o.lineDashOffset = d;
			break;
		case "solid": o.setLineDash([]);
	}
	if (!l && !i.badLine) switch (t.beginPath && t.beginPath(), t.moveTo(n[0], n[1]), i.edgeType) {
		case "bezier":
		case "self":
		case "compound":
		case "multibezier":
			for (var f = 2; f + 3 < n.length; f += 4) t.quadraticCurveTo(n[f], n[f + 1], n[f + 2], n[f + 3]);
			break;
		case "straight":
		case "haystack":
			for (var p = 2; p + 1 < n.length; p += 2) t.lineTo(n[p], n[p + 1]);
			break;
		case "segments": if (i.isRound) {
			var g, v = s(i.roundCorners);
			try {
				for (v.s(); !(g = v.n()).done;) {
					var y = g.value;
					cd(t, y);
				}
			} catch (e) {
				v.e(e);
			} finally {
				v.f();
			}
			t.lineTo(n[n.length - 2], n[n.length - 1]);
		} else for (var m = 2; m + 1 < n.length; m += 2) t.lineTo(n[m], n[m + 1]);
	}
	t = o, u ? t.stroke(a) : t.stroke(), t.setLineDash && t.setLineDash([]);
}, c9.drawEdgeTrianglePath = function(e, t, n) {
	t.fillStyle = t.strokeStyle;
	for (var r = e.pstyle("width").pfValue, a = 0; a + 1 < n.length; a += 2) {
		var i = [n[a + 2] - n[a], n[a + 3] - n[a + 1]], o = Math.sqrt(i[0] * i[0] + i[1] * i[1]), s = [i[1] / o, -i[0] / o], l = [s[0] * r / 2, s[1] * r / 2];
		t.beginPath(), t.moveTo(n[a] - l[0], n[a + 1] - l[1]), t.lineTo(n[a] + l[0], n[a + 1] + l[1]), t.lineTo(n[a + 2], n[a + 3]), t.closePath(), t.fill();
	}
}, c9.drawArrowheads = function(e, t, n) {
	var r = t._private.rscratch, a = "haystack" === r.edgeType;
	a || this.drawArrowhead(e, t, "source", r.arrowStartX, r.arrowStartY, r.srcArrowAngle, n), this.drawArrowhead(e, t, "mid-target", r.midX, r.midY, r.midtgtArrowAngle, n), this.drawArrowhead(e, t, "mid-source", r.midX, r.midY, r.midsrcArrowAngle, n), a || this.drawArrowhead(e, t, "target", r.arrowEndX, r.arrowEndY, r.tgtArrowAngle, n);
}, c9.drawArrowhead = function(e, t, n, r, a, i, o) {
	if (!(isNaN(r) || null == r || isNaN(a) || null == a || isNaN(i) || null == i)) {
		var s = t.pstyle(n + "-arrow-shape").value;
		if ("none" !== s) {
			var l = "hollow" === t.pstyle(n + "-arrow-fill").value ? "both" : "filled", u = t.pstyle(n + "-arrow-fill").value, c = t.pstyle("width").pfValue, d = t.pstyle(n + "-arrow-width"), h = "match-line" === d.value ? c : d.pfValue;
			"%" === d.units && (h *= c);
			var f = t.pstyle("opacity").value;
			void 0 === o && (o = f);
			var p = e.globalCompositeOperation;
			(1 !== o || "hollow" === u) && (e.globalCompositeOperation = "destination-out", this.colorFillStyle(e, 255, 255, 255, 1), this.colorStrokeStyle(e, 255, 255, 255, 1), this.drawArrowShape(t, e, l, c, s, h, r, a, i), e.globalCompositeOperation = p);
			var g = t.pstyle(n + "-arrow-color").value;
			this.colorFillStyle(e, g[0], g[1], g[2], o), this.colorStrokeStyle(e, g[0], g[1], g[2], o), this.drawArrowShape(t, e, u, c, s, h, r, a, i);
		}
	}
}, c9.drawArrowShape = function(e, t, n, r, a, i, o, s, l) {
	var u, c = this.usePaths() && "triangle-cross" !== a, d = !1, h = t, f = e.pstyle("arrow-scale").value, p = this.getArrowWidth(r, f), g = this.arrowShapes[a];
	if (c) {
		var v = this.arrowPathCache = this.arrowPathCache || [], y = eY(a), m = v[y];
		null != m ? (u = t = m, d = !0) : (u = t = new Path2D(), v[y] = u);
	}
	d || (t.beginPath && t.beginPath(), c ? g.draw(t, 1, 0, {
		x: 0,
		y: 0
	}, 1) : g.draw(t, p, l, {
		x: o,
		y: s
	}, r), t.closePath && t.closePath()), t = h, c && (t.translate(o, s), t.rotate(l), t.scale(p, p)), ("filled" === n || "both" === n) && (c ? t.fill(u) : t.fill()), ("hollow" === n || "both" === n) && (t.lineWidth = i / (c ? p : 1), t.lineJoin = "miter", c ? t.stroke(u) : t.stroke()), c && (t.scale(1 / p, 1 / p), t.rotate(-l), t.translate(-o, -s));
};
var c8 = {};
c8.safeDrawImage = function(e, t, n, r, a, i, o, s, l, u) {
	if (!(a <= 0 || i <= 0 || l <= 0 || u <= 0)) try {
		e.drawImage(t, n, r, a, i, o, s, l, u);
	} catch (e) {
		e9(e);
	}
}, c8.drawInscribedImage = function(e, t, n, r, a) {
	var i = n.position(), o = i.x, s = i.y, l = n.cy().style(), u = l.getIndexedStyle.bind(l), c = u(n, "background-fit", "value", r), d = u(n, "background-repeat", "value", r), h = n.width(), f = n.height(), p = 2 * n.padding(), g = h + ("inner" === u(n, "background-width-relative-to", "value", r) ? 0 : p), v = f + ("inner" === u(n, "background-height-relative-to", "value", r) ? 0 : p), y = n._private.rscratch, m = "node" === u(n, "background-clip", "value", r), x = u(n, "background-image-opacity", "value", r) * a, w = u(n, "background-image-smoothing", "value", r), E = n.pstyle("corner-radius").value;
	"auto" !== E && (E = n.pstyle("corner-radius").pfValue);
	var C = t.width || t.cachedW, T = t.height || t.cachedH;
	(null == C || null == T) && (document.body.appendChild(t), C = t.cachedW = t.width || t.offsetWidth, T = t.cachedH = t.height || t.offsetHeight, document.body.removeChild(t));
	var k = C, S = T;
	if ("auto" !== u(n, "background-width", "value", r) && (k = "%" === u(n, "background-width", "units", r) ? u(n, "background-width", "pfValue", r) * g : u(n, "background-width", "pfValue", r)), "auto" !== u(n, "background-height", "value", r) && (S = "%" === u(n, "background-height", "units", r) ? u(n, "background-height", "pfValue", r) * v : u(n, "background-height", "pfValue", r)), 0 !== k && 0 !== S) {
		if ("contain" === c) {
			var P = Math.min(g / k, v / S);
			k *= P, S *= P;
		} else if ("cover" === c) {
			var P = Math.max(g / k, v / S);
			k *= P, S *= P;
		}
		var B = o - g / 2, _ = u(n, "background-position-x", "units", r), D = u(n, "background-position-x", "pfValue", r);
		"%" === _ ? B += (g - k) * D : B += D;
		var A = u(n, "background-offset-x", "units", r), M = u(n, "background-offset-x", "pfValue", r);
		"%" === A ? B += (g - k) * M : B += M;
		var R = s - v / 2, I = u(n, "background-position-y", "units", r), L = u(n, "background-position-y", "pfValue", r);
		"%" === I ? R += (v - S) * L : R += L;
		var N = u(n, "background-offset-y", "units", r), z = u(n, "background-offset-y", "pfValue", r);
		"%" === N ? R += (v - S) * z : R += z, y.pathCache && (B -= o, R -= s, o = 0, s = 0);
		var O = e.globalAlpha;
		e.globalAlpha = x;
		var F = this.getImgSmoothing(e), V = !1;
		("no" === w && F ? (this.setImgSmoothing(e, !1), V = !0) : "yes" !== w || F || (this.setImgSmoothing(e, !0), V = !0), "no-repeat" === d) ? (m && (e.save(), y.pathCache ? e.clip(y.pathCache) : (this.nodeShapes[this.getNodeShape(n)].draw(e, o, s, g, v, E, y), e.clip())), this.safeDrawImage(e, t, 0, 0, C, T, B, R, k, S), m && e.restore()) : (e.fillStyle = e.createPattern(t, d), this.nodeShapes[this.getNodeShape(n)].draw(e, o, s, g, v, E, y), e.translate(B, R), e.fill(), e.translate(-B, -R)), e.globalAlpha = O, V && this.setImgSmoothing(e, F);
	}
};
var c7 = {};
function de(e, t, n, r, a) {
	var i = Math.min(r, a) / 2;
	e.beginPath(), e.arc(t + r / 2, n + a / 2, i, 0, 2 * Math.PI), e.closePath();
}
function dt(e, t, n, r, a) {
	var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5, o = Math.min(i, r / 2, a / 2);
	e.beginPath(), e.moveTo(t + o, n), e.lineTo(t + r - o, n), e.quadraticCurveTo(t + r, n, t + r, n + o), e.lineTo(t + r, n + a - o), e.quadraticCurveTo(t + r, n + a, t + r - o, n + a), e.lineTo(t + o, n + a), e.quadraticCurveTo(t, n + a, t, n + a - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.closePath();
}
c7.eleTextBiggerThanMin = function(e, t) {
	return t || (t = Math.pow(2, Math.ceil(nh(e.cy().zoom() * this.getPixelRatio())))), !(e.pstyle("font-size").pfValue * t < e.pstyle("min-zoomed-font-size").pfValue);
}, c7.drawElementText = function(e, t, n, r, a) {
	var i = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
	if (null == r) {
		if (i && !this.eleTextBiggerThanMin(t)) return;
	} else if (!1 === r) return;
	if (t.isNode()) {
		var o = t.pstyle("label");
		if (!o || !o.value) return;
		e.textAlign = this.getLabelJustification(t), e.textBaseline = "bottom";
	} else {
		var s = t.element()._private.rscratch.badLine, l = t.pstyle("label"), u = t.pstyle("source-label"), c = t.pstyle("target-label");
		if (s || (!l || !l.value) && (!u || !u.value) && (!c || !c.value)) return;
		e.textAlign = "center", e.textBaseline = "bottom";
	}
	var d, h = !n;
	n && (d = n, e.translate(-d.x1, -d.y1)), null == a ? (this.drawText(e, t, null, h, i), t.isEdge() && (this.drawText(e, t, "source", h, i), this.drawText(e, t, "target", h, i))) : this.drawText(e, t, a, h, i), n && e.translate(d.x1, d.y1);
}, c7.getFontCache = function(e) {
	var t;
	this.fontCaches = this.fontCaches || [];
	for (var n = 0; n < this.fontCaches.length; n++) if ((t = this.fontCaches[n]).context === e) return t;
	return t = { context: e }, this.fontCaches.push(t), t;
}, c7.setupTextStyle = function(e, t) {
	var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], r = t.pstyle("font-style").strValue, a = t.pstyle("font-size").pfValue + "px", i = t.pstyle("font-family").strValue, o = t.pstyle("font-weight").strValue, s = n ? t.effectiveOpacity() * t.pstyle("text-opacity").value : 1, l = t.pstyle("text-outline-opacity").value * s, u = t.pstyle("color").value, c = t.pstyle("text-outline-color").value;
	e.font = r + " " + o + " " + a + " " + i, e.lineJoin = "round", this.colorFillStyle(e, u[0], u[1], u[2], s), this.colorStrokeStyle(e, c[0], c[1], c[2], l);
}, e(de, "circle"), e(dt, "roundRect"), c7.getTextAngle = function(e, t) {
	var n, r = e._private.rscratch, a = t ? t + "-" : "", i = e.pstyle(a + "text-rotation");
	if ("autorotate" === i.strValue) {
		var o = ts(r, "labelAngle", t);
		n = e.isEdge() ? o : 0;
	} else n = "none" === i.strValue ? 0 : i.pfValue;
	return n;
}, c7.drawText = function(e, t, n) {
	var r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4], i = t._private.rscratch, o = a ? t.effectiveOpacity() : 1;
	if (!(a && (0 === o || 0 === t.pstyle("text-opacity").value))) {
		"main" === n && (n = null);
		var s, l, u = ts(i, "labelX", n), c = ts(i, "labelY", n), d = this.getLabelText(t, n);
		if (null != d && "" !== d && !isNaN(u) && !isNaN(c)) {
			this.setupTextStyle(e, t, a);
			var h, f = n ? n + "-" : "", p = ts(i, "labelWidth", n), g = ts(i, "labelHeight", n), v = t.pstyle(f + "text-margin-x").pfValue, y = t.pstyle(f + "text-margin-y").pfValue, m = t.isEdge(), x = t.pstyle("text-halign").value, w = t.pstyle("text-valign").value;
			switch (m && (x = "center", w = "center"), u += v, c += y, 0 !== (h = r ? this.getTextAngle(t, n) : 0) && (s = u, l = c, e.translate(s, l), e.rotate(h), u = 0, c = 0), w) {
				case "top": break;
				case "center":
					c += g / 2;
					break;
				case "bottom": c += g;
			}
			var E = t.pstyle("text-background-opacity").value, C = t.pstyle("text-border-opacity").value, T = t.pstyle("text-border-width").pfValue, k = t.pstyle("text-background-padding").pfValue, S = t.pstyle("text-background-shape").strValue, P = "round-rectangle" === S || "roundrectangle" === S;
			if (E > 0 || T > 0 && C > 0) {
				var B = e.fillStyle, _ = e.strokeStyle, D = e.lineWidth, A = t.pstyle("text-background-color").value, M = t.pstyle("text-border-color").value, R = t.pstyle("text-border-style").value, I = E > 0, L = T > 0 && C > 0, N = u - k;
				switch (x) {
					case "left":
						N -= p;
						break;
					case "center": N -= p / 2;
				}
				var z = c - g - k, O = p + 2 * k, F = g + 2 * k;
				if (I && (e.fillStyle = "rgba(".concat(A[0], ",").concat(A[1], ",").concat(A[2], ",").concat(E * o, ")")), L && (e.strokeStyle = "rgba(".concat(M[0], ",").concat(M[1], ",").concat(M[2], ",").concat(C * o, ")"), e.lineWidth = T, e.setLineDash)) switch (R) {
					case "dotted":
						e.setLineDash([1, 1]);
						break;
					case "dashed":
						e.setLineDash([4, 2]);
						break;
					case "double":
						e.lineWidth = T / 4, e.setLineDash([]);
						break;
					default: e.setLineDash([]);
				}
				if (P ? (e.beginPath(), dt(e, N, z, O, F, 2)) : "circle" === S ? (e.beginPath(), de(e, N, z, O, F)) : (e.beginPath(), e.rect(N, z, O, F)), I && e.fill(), L && e.stroke(), L && "double" === R) {
					var V = T / 2;
					e.beginPath(), P ? dt(e, N + V, z + V, O - 2 * V, F - 2 * V, 2) : e.rect(N + V, z + V, O - 2 * V, F - 2 * V), e.stroke();
				}
				e.fillStyle = B, e.strokeStyle = _, e.lineWidth = D, e.setLineDash && e.setLineDash([]);
			}
			var q = 2 * t.pstyle("text-outline-width").pfValue;
			if (q > 0 && (e.lineWidth = q), "wrap" === t.pstyle("text-wrap").value) {
				var j = ts(i, "labelWrapCachedLines", n), X = ts(i, "labelLineHeight", n), Y = p / 2, W = this.getLabelJustification(t);
				switch ("auto" === W || ("left" === x ? "left" === W ? u += -p : "center" === W && (u += -Y) : "center" === x ? "left" === W ? u += -Y : "right" === W && (u += Y) : "right" === x && ("center" === W ? u += Y : "right" === W && (u += p))), w) {
					case "top":
					case "center":
					case "bottom": c -= (j.length - 1) * X;
				}
				for (var H = 0; H < j.length; H++) q > 0 && e.strokeText(j[H], u, c), e.fillText(j[H], u, c), c += X;
			} else q > 0 && e.strokeText(d, u, c), e.fillText(d, u, c);
			0 !== h && (e.rotate(-h), e.translate(-s, -l));
		}
	}
};
var dn = {};
dn.drawNode = function(t, n, r) {
	var a, i, o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4], l = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5], u = this, c = n._private, d = c.rscratch, h = n.position();
	if (!(!I(h.x) || !I(h.y)) && !(l && !n.visible())) {
		var f, p, g = l ? n.effectiveOpacity() : 1, v = u.usePaths(), y = !1, m = n.padding();
		a = n.width() + 2 * m, i = n.height() + 2 * m, r && (f = r, t.translate(-f.x1, -f.y1));
		for (var x = n.pstyle("background-image").value, w = Array(x.length), E = Array(x.length), C = 0, T = 0; T < x.length; T++) {
			var k = x[T];
			if (w[T] = null != k && "none" !== k) {
				var S = n.cy().style().getIndexedStyle(n, "background-image-crossorigin", "value", T);
				C++, E[T] = u.getCachedImage(k, S, function() {
					c.backgroundTimestamp = Date.now(), n.emitAndNotify("background");
				});
			}
		}
		var P = n.pstyle("background-blacken").value, B = n.pstyle("border-width").pfValue, _ = n.pstyle("background-opacity").value * g, D = n.pstyle("border-color").value, A = n.pstyle("border-style").value, M = n.pstyle("border-join").value, R = n.pstyle("border-cap").value, L = n.pstyle("border-position").value, N = n.pstyle("border-dash-pattern").pfValue, z = n.pstyle("border-dash-offset").pfValue, O = n.pstyle("border-opacity").value * g, F = n.pstyle("outline-width").pfValue, V = n.pstyle("outline-color").value, q = n.pstyle("outline-style").value, j = n.pstyle("outline-opacity").value * g, X = n.pstyle("outline-offset").value, Y = n.pstyle("corner-radius").value;
		"auto" !== Y && (Y = n.pstyle("corner-radius").pfValue);
		var W = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _;
			u.eleFillStyle(t, n, e);
		}, "setupShapeColor"), H = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
			u.colorStrokeStyle(t, D[0], D[1], D[2], e);
		}, "setupBorderColor"), K = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j;
			u.colorStrokeStyle(t, V[0], V[1], V[2], e);
		}, "setupOutlineColor"), U = e(function(e, t, n, r) {
			var a, i = u.nodePathCache = u.nodePathCache || [], o = eW("polygon" === n ? n + "," + r.join(",") : n, "" + t, "" + e, "" + Y), s = i[o], l = !1;
			return null != s ? (l = !0, d.pathCache = a = s) : (a = new Path2D(), i[o] = d.pathCache = a), {
				path: a,
				cacheHit: l
			};
		}, "getPath"), G = n.pstyle("shape").strValue, Z = n.pstyle("shape-polygon-points").pfValue;
		if (v) {
			t.translate(h.x, h.y);
			var $ = U(a, i, G, Z);
			p = $.path, y = $.cacheHit;
		}
		var Q = e(function() {
			if (!y) {
				var e = h;
				v && (e = {
					x: 0,
					y: 0
				}), u.nodeShapes[u.getNodeShape(n)].draw(p || t, e.x, e.y, a, i, Y, d);
			}
			v ? t.fill(p) : t.fill();
		}, "drawShape"), J = e(function() {
			for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g, r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], a = c.backgrounding, i = 0, o = 0; o < E.length; o++) {
				var s = n.cy().style().getIndexedStyle(n, "background-image-containment", "value", o);
				if (r && "over" === s || !r && "inside" === s) {
					i++;
					continue;
				}
				w[o] && E[o].complete && !E[o].error && (i++, u.drawInscribedImage(t, E[o], n, o, e));
			}
			c.backgrounding = i !== C, a !== c.backgrounding && n.updateStyle(!1);
		}, "drawImages"), ee = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
			u.hasPie(n) && (u.drawPie(t, n, r), e && (v || u.nodeShapes[u.getNodeShape(n)].draw(t, h.x, h.y, a, i, Y, d)));
		}, "drawPie"), et = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
			u.hasStripe(n) && (t.save(), v ? t.clip(d.pathCache) : (u.nodeShapes[u.getNodeShape(n)].draw(t, h.x, h.y, a, i, Y, d), t.clip()), u.drawStripe(t, n, r), t.restore(), e && (v || u.nodeShapes[u.getNodeShape(n)].draw(t, h.x, h.y, a, i, Y, d)));
		}, "drawStripe"), en = e(function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g, n = P > 0 ? 0 : 255;
			0 !== P && (u.colorFillStyle(t, n, n, n, (P > 0 ? P : -P) * e), v ? t.fill(p) : t.fill());
		}, "darken"), er = e(function() {
			if (B > 0) {
				if (t.lineWidth = B, t.lineCap = R, t.lineJoin = M, t.setLineDash) switch (A) {
					case "dotted":
						t.setLineDash([1, 1]);
						break;
					case "dashed":
						t.setLineDash(N), t.lineDashOffset = z;
						break;
					case "solid":
					case "double": t.setLineDash([]);
				}
				if ("center" !== L) {
					if (t.save(), t.lineWidth *= 2, "inside" === L) v ? t.clip(p) : t.clip();
					else {
						var e = new Path2D();
						e.rect(-a / 2 - B, -i / 2 - B, a + 2 * B, i + 2 * B), e.addPath(p), t.clip(e, "evenodd");
					}
					v ? t.stroke(p) : t.stroke(), t.restore();
				} else v ? t.stroke(p) : t.stroke();
				if ("double" === A) {
					t.lineWidth = B / 3;
					var n = t.globalCompositeOperation;
					t.globalCompositeOperation = "destination-out", v ? t.stroke(p) : t.stroke(), t.globalCompositeOperation = n;
				}
				t.setLineDash && t.setLineDash([]);
			}
		}, "drawBorder"), ea = e(function() {
			if (F > 0) {
				if (t.lineWidth = F, t.lineCap = "butt", t.setLineDash) switch (q) {
					case "dotted":
						t.setLineDash([1, 1]);
						break;
					case "dashed":
						t.setLineDash([4, 2]);
						break;
					case "solid":
					case "double": t.setLineDash([]);
				}
				var e = h;
				v && (e = {
					x: 0,
					y: 0
				});
				var r = u.getNodeShape(n), o = B;
				"inside" === L && (o = 0), "outside" === L && (o *= 2);
				var s, l = (a + o + (F + X)) / a, c = (i + o + (F + X)) / i, d = a * l, f = i * c, p = u.nodeShapes[r].points;
				if (v && (s = U(d, f, r, p).path), "ellipse" === r) u.drawEllipsePath(s || t, e.x, e.y, d, f);
				else if ([
					"round-diamond",
					"round-heptagon",
					"round-hexagon",
					"round-octagon",
					"round-pentagon",
					"round-polygon",
					"round-triangle",
					"round-tag"
				].includes(r)) {
					var g = 0, y = 0, m = 0;
					"round-diamond" === r ? g = (o + X + F) * 1.4 : "round-heptagon" === r ? (g = (o + X + F) * 1.075, m = -(o / 2 + X + F) / 35) : "round-hexagon" === r ? g = (o + X + F) * 1.12 : "round-pentagon" === r ? (g = (o + X + F) * 1.13, m = -(o / 2 + X + F) / 15) : "round-tag" === r ? (g = (o + X + F) * 1.12, y = (o / 2 + F + X) * .07) : "round-triangle" === r && (g = Math.PI / 2 * (o + X + F), m = -(o + X / 2 + F) / Math.PI), 0 !== g && (l = (a + g) / a, d = a * l, ["round-hexagon", "round-tag"].includes(r) || (c = (i + g) / i, f = i * c)), Y = "auto" === Y ? n6(d, f) : Y;
					for (var x = d / 2, w = f / 2, E = Y + (o + F + X) / 2, C = Array(p.length / 2), T = Array(p.length / 2), k = 0; k < p.length / 2; k++) C[k] = {
						x: e.x + y + x * p[2 * k],
						y: e.y + m + w * p[2 * k + 1]
					};
					var S, P, _, D, A = C.length;
					for (P = C[A - 1], S = 0; S < A; S++) _ = C[S % A], D = C[(S + 1) % A], T[S] = ch(P, _, D, E), P = _, _ = D;
					u.drawRoundPolygonPath(s || t, e.x + y, e.y + m, a * l, i * c, p, T);
				} else ["roundrectangle", "round-rectangle"].includes(r) ? (Y = "auto" === Y ? n9(d, f) : Y, u.drawRoundRectanglePath(s || t, e.x, e.y, d, f, Y + (o + F + X) / 2)) : ["cutrectangle", "cut-rectangle"].includes(r) ? (Y = "auto" === Y ? n8() : Y, u.drawCutRectanglePath(s || t, e.x, e.y, d, f, null, Y + (o + F + X) / 4)) : ["bottomroundrectangle", "bottom-round-rectangle"].includes(r) ? (Y = "auto" === Y ? n9(d, f) : Y, u.drawBottomRoundRectanglePath(s || t, e.x, e.y, d, f, Y + (o + F + X) / 2)) : "barrel" === r ? u.drawBarrelPath(s || t, e.x, e.y, d, f) : (p = r.startsWith("polygon") || [
					"rhomboid",
					"right-rhomboid",
					"round-tag",
					"tag",
					"vee"
				].includes(r) ? nH(nK(p, (o + F + X) / a)) : nH(nK(p, -((o + F + X) / a))), u.drawPolygonPath(s || t, e.x, e.y, a, i, p));
				if (v ? t.stroke(s) : t.stroke(), "double" === q) {
					t.lineWidth = o / 3;
					var M = t.globalCompositeOperation;
					t.globalCompositeOperation = "destination-out", v ? t.stroke(s) : t.stroke(), t.globalCompositeOperation = M;
				}
				t.setLineDash && t.setLineDash([]);
			}
		}, "drawOutline"), ei = e(function() {
			s && u.drawNodeOverlay(t, n, h, a, i);
		}, "drawOverlay"), eo = e(function() {
			s && u.drawNodeUnderlay(t, n, h, a, i);
		}, "drawUnderlay"), es = e(function() {
			u.drawElementText(t, n, null, o);
		}, "drawText");
		if ("yes" === n.pstyle("ghost").value) {
			var el = n.pstyle("ghost-offset-x").pfValue, eu = n.pstyle("ghost-offset-y").pfValue, ec = n.pstyle("ghost-opacity").value, ed = ec * g;
			t.translate(el, eu), K(), ea(), W(ec * _), Q(), J(ed, !0), H(ec * O), er(), ee(0 !== P || 0 !== B), et(0 !== P || 0 !== B), J(ed, !1), en(ed), t.translate(-el, -eu);
		}
		v && t.translate(-h.x, -h.y), eo(), v && t.translate(h.x, h.y), K(), ea(), W(), Q(), J(g, !0), H(), er(), ee(0 !== P || 0 !== B), et(0 !== P || 0 !== B), J(g, !1), en(), v && t.translate(-h.x, -h.y), es(), ei(), r && t.translate(f.x1, f.y1);
	}
};
var dr = e(function(e) {
	if (!["overlay", "underlay"].includes(e)) throw Error("Invalid state");
	return function(t, n, r, a, i) {
		if (n.visible()) {
			var o = n.pstyle("".concat(e, "-padding")).pfValue, s = n.pstyle("".concat(e, "-opacity")).value, l = n.pstyle("".concat(e, "-color")).value, u = n.pstyle("".concat(e, "-shape")).value, c = n.pstyle("".concat(e, "-corner-radius")).value;
			if (s > 0) {
				if (r = r || n.position(), null == a || null == i) {
					var d = n.padding();
					a = n.width() + 2 * d, i = n.height() + 2 * d;
				}
				this.colorFillStyle(t, l[0], l[1], l[2], s), this.nodeShapes[u].draw(t, r.x, r.y, a + 2 * o, i + 2 * o, c), t.fill();
			}
		}
	};
}, "drawNodeOverlayUnderlay");
dn.drawNodeOverlay = dr("overlay"), dn.drawNodeUnderlay = dr("underlay"), dn.hasPie = function(e) {
	return (e = e[0])._private.hasPie;
}, dn.hasStripe = function(e) {
	return (e = e[0])._private.hasStripe;
}, dn.drawPie = function(e, t, n, r) {
	t = t[0], r = r || t.position();
	var a, i = t.cy().style(), o = t.pstyle("pie-size"), s = t.pstyle("pie-hole"), l = t.pstyle("pie-start-angle").pfValue, u = r.x, c = r.y, d = Math.min(t.width(), t.height()) / 2, h = 0;
	if (this.usePaths() && (u = 0, c = 0), "%" === o.units ? d *= o.pfValue : void 0 !== o.pfValue && (d = o.pfValue / 2), "%" === s.units ? a = d * s.pfValue : void 0 !== s.pfValue && (a = s.pfValue / 2), !(a >= d)) for (var f = 1; f <= i.pieBackgroundN; f++) {
		var p = t.pstyle("pie-" + f + "-background-size").value, g = t.pstyle("pie-" + f + "-background-color").value, v = t.pstyle("pie-" + f + "-background-opacity").value * n, y = p / 100;
		y + h > 1 && (y = 1 - h);
		var m = 1.5 * Math.PI + 2 * Math.PI * h, x = 2 * Math.PI * y, w = (m += l) + x;
		0 === p || h >= 1 || h + y > 1 || (0 === a ? (e.beginPath(), e.moveTo(u, c), e.arc(u, c, d, m, w)) : (e.beginPath(), e.arc(u, c, d, m, w), e.arc(u, c, a, w, m, !0)), e.closePath(), this.colorFillStyle(e, g[0], g[1], g[2], v), e.fill(), h += y);
	}
}, dn.drawStripe = function(e, t, n, r) {
	t = t[0], r = r || t.position();
	var a = t.cy().style(), i = r.x, o = r.y, s = t.width(), l = t.height(), u = 0, c = this.usePaths();
	e.save();
	var d = t.pstyle("stripe-direction").value, h = t.pstyle("stripe-size");
	switch (d) {
		case "vertical": break;
		case "righward": e.rotate(-Math.PI / 2);
	}
	var f = s, p = l;
	"%" === h.units ? (f *= h.pfValue, p *= h.pfValue) : void 0 !== h.pfValue && (f = h.pfValue, p = h.pfValue), c && (i = 0, o = 0), o -= f / 2, i -= p / 2;
	for (var g = 1; g <= a.stripeBackgroundN; g++) {
		var v = t.pstyle("stripe-" + g + "-background-size").value, y = t.pstyle("stripe-" + g + "-background-color").value, m = t.pstyle("stripe-" + g + "-background-opacity").value * n, x = v / 100;
		x + u > 1 && (x = 1 - u), 0 === v || u >= 1 || u + x > 1 || (e.beginPath(), e.rect(i, o + p * u, f, p * x), e.closePath(), this.colorFillStyle(e, y[0], y[1], y[2], m), e.fill(), u += x);
	}
	e.restore();
};
var da = {};
function di(e, t, n) {
	var r = e.createShader(t);
	if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) throw Error(e.getShaderInfoLog(r));
	return r;
}
function ds(e, t, n) {
	var r = di(e, e.VERTEX_SHADER, t), a = di(e, e.FRAGMENT_SHADER, n), i = e.createProgram();
	if (e.attachShader(i, r), e.attachShader(i, a), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS)) throw Error("Could not initialize shaders");
	return i;
}
function dl(e, t, n) {
	void 0 === n && (n = t);
	var r = e.makeOffscreenCanvas(t, n), a = r.context = r.getContext("2d");
	return r.clear = function() {
		return a.clearRect(0, 0, r.width, r.height);
	}, r.clear(), r;
}
function du(e) {
	var t = e.pixelRatio, n = e.cy.zoom(), r = e.cy.pan();
	return {
		zoom: n * t,
		pan: {
			x: r.x * t,
			y: r.y * t
		}
	};
}
function dc(e) {
	var t = e.pixelRatio;
	return e.cy.zoom() * t;
}
function dd(e, t, n, r, a) {
	var i = r * n + t.x, o = a * n + t.y;
	return [i, o = Math.round(e.canvasHeight - o)];
}
function dh(e) {
	return "solid" === e.pstyle("background-fill").value && "none" === e.pstyle("background-image").strValue && (0 === e.pstyle("border-width").value || 0 === e.pstyle("border-opacity").value || "solid" === e.pstyle("border-style").value);
}
function df(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function dp(e, t, n) {
	var r = e[0] / 255, a = e[1] / 255, i = e[2] / 255, o = n || [
		,
		,
		,
		,
	];
	return o[0] = r * t, o[1] = a * t, o[2] = i * t, o[3] = t, o;
}
function dg(e, t) {
	var n = t || [
		,
		,
		,
		,
	];
	return n[0] = ((0 | e) & 255) / 255, n[1] = (e >> 8 & 255) / 255, n[2] = (e >> 16 & 255) / 255, n[3] = (e >> 24 & 255) / 255, n;
}
function dv(e) {
	return e[0] + (e[1] << 8) + (e[2] << 16) + (e[3] << 24);
}
function dy(e, t) {
	var n = e.createTexture();
	return n.buffer = function(t) {
		e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), e.generateMipmap(e.TEXTURE_2D), e.bindTexture(e.TEXTURE_2D, null);
	}, n.deleteTexture = function() {
		e.deleteTexture(n);
	}, n;
}
function dm(e, t) {
	switch (t) {
		case "float": return [
			1,
			e.FLOAT,
			4
		];
		case "vec2": return [
			2,
			e.FLOAT,
			4
		];
		case "vec3": return [
			3,
			e.FLOAT,
			4
		];
		case "vec4": return [
			4,
			e.FLOAT,
			4
		];
		case "int": return [
			1,
			e.INT,
			4
		];
		case "ivec2": return [
			2,
			e.INT,
			4
		];
	}
}
function db(e, t, n) {
	switch (t) {
		case e.FLOAT: return new Float32Array(n);
		case e.INT: return new Int32Array(n);
	}
}
function dx(e, t, n, r, a, i) {
	switch (t) {
		case e.FLOAT: return new Float32Array(n.buffer, i * r, a);
		case e.INT: return new Int32Array(n.buffer, i * r, a);
	}
}
function dw(e, t, n, r) {
	var a = f(dm(e, t), 2), i = a[0], o = a[1], s = db(e, o, r), l = e.createBuffer();
	return e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW), o === e.FLOAT ? e.vertexAttribPointer(n, i, o, !1, 0, 0) : o === e.INT && e.vertexAttribIPointer(n, i, o, 0, 0), e.enableVertexAttribArray(n), e.bindBuffer(e.ARRAY_BUFFER, null), l;
}
function dE(e, t, n, r) {
	var a = f(dm(e, n), 3), i = a[0], o = a[1], s = a[2], l = db(e, o, t * i), u = i * s, c = e.createBuffer();
	e.bindBuffer(e.ARRAY_BUFFER, c), e.bufferData(e.ARRAY_BUFFER, t * u, e.DYNAMIC_DRAW), e.enableVertexAttribArray(r), o === e.FLOAT ? e.vertexAttribPointer(r, i, o, !1, u, 0) : o === e.INT && e.vertexAttribIPointer(r, i, o, u, 0), e.vertexAttribDivisor(r, 1), e.bindBuffer(e.ARRAY_BUFFER, null);
	for (var d = Array(t), h = 0; h < t; h++) d[h] = dx(e, o, l, u, i, h);
	return c.dataArray = l, c.stride = u, c.size = i, c.getView = function(e) {
		return d[e];
	}, c.setPoint = function(e, t, n) {
		var r = d[e];
		r[0] = t, r[1] = n;
	}, c.bufferSubData = function(t) {
		e.bindBuffer(e.ARRAY_BUFFER, c), t ? e.bufferSubData(e.ARRAY_BUFFER, 0, l, 0, t * i) : e.bufferSubData(e.ARRAY_BUFFER, 0, l);
	}, c;
}
function dC(e, t, n) {
	for (var r = new Float32Array(9 * t), a = Array(t), i = 0; i < t; i++) {
		var o = 9 * i * 4;
		a[i] = new Float32Array(r.buffer, o, 9);
	}
	var s = e.createBuffer();
	e.bindBuffer(e.ARRAY_BUFFER, s), e.bufferData(e.ARRAY_BUFFER, r.byteLength, e.DYNAMIC_DRAW);
	for (var l = 0; l < 3; l++) {
		var u = n + l;
		e.enableVertexAttribArray(u), e.vertexAttribPointer(u, 3, e.FLOAT, !1, 36, 12 * l), e.vertexAttribDivisor(u, 1);
	}
	return e.bindBuffer(e.ARRAY_BUFFER, null), s.getMatrixView = function(e) {
		return a[e];
	}, s.setData = function(e, t) {
		a[t].set(e, 0);
	}, s.bufferSubData = function() {
		e.bindBuffer(e.ARRAY_BUFFER, s), e.bufferSubData(e.ARRAY_BUFFER, 0, r);
	}, s;
}
function dT(e) {
	var t = e.createFramebuffer();
	e.bindFramebuffer(e.FRAMEBUFFER, t);
	var n = e.createTexture();
	return e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0), e.bindFramebuffer(e.FRAMEBUFFER, null), t.setFramebufferAttachmentSizes = function(t, r) {
		e.bindTexture(e.TEXTURE_2D, n), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t, r, 0, e.RGBA, e.UNSIGNED_BYTE, null);
	}, t;
}
da.getPixelRatio = function() {
	var e = this.data.contexts[0];
	if (null != this.forcedPixelRatio) return this.forcedPixelRatio;
	var t = this.cy.window(), n = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
	return (t.devicePixelRatio || 1) / n;
}, da.paintCache = function(e) {
	for (var t, n = this.paintCaches = this.paintCaches || [], r = !0, a = 0; a < n.length; a++) if ((t = n[a]).context === e) {
		r = !1;
		break;
	}
	return r && (t = { context: e }, n.push(t)), t;
}, da.createGradientStyleFor = function(e, t, n, r, a) {
	var i, o = this.usePaths(), s = n.pstyle(t + "-gradient-stop-colors").value, l = n.pstyle(t + "-gradient-stop-positions").pfValue;
	if ("radial-gradient" === r) if (n.isEdge()) {
		var u = n.sourceEndpoint(), c = n.targetEndpoint(), d = n.midpoint(), h = np(u, d), f = np(c, d);
		i = e.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(h, f));
	} else {
		var p = o ? {
			x: 0,
			y: 0
		} : n.position(), g = n.paddedWidth(), v = n.paddedHeight();
		i = e.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(g, v));
	}
	else if (n.isEdge()) {
		var y = n.sourceEndpoint(), m = n.targetEndpoint();
		i = e.createLinearGradient(y.x, y.y, m.x, m.y);
	} else {
		var x = o ? {
			x: 0,
			y: 0
		} : n.position(), w = n.paddedWidth(), E = n.paddedHeight(), C = w / 2, T = E / 2;
		switch (n.pstyle("background-gradient-direction").value) {
			case "to-bottom":
				i = e.createLinearGradient(x.x, x.y - T, x.x, x.y + T);
				break;
			case "to-top":
				i = e.createLinearGradient(x.x, x.y + T, x.x, x.y - T);
				break;
			case "to-left":
				i = e.createLinearGradient(x.x + C, x.y, x.x - C, x.y);
				break;
			case "to-right":
				i = e.createLinearGradient(x.x - C, x.y, x.x + C, x.y);
				break;
			case "to-bottom-right":
			case "to-right-bottom":
				i = e.createLinearGradient(x.x - C, x.y - T, x.x + C, x.y + T);
				break;
			case "to-top-right":
			case "to-right-top":
				i = e.createLinearGradient(x.x - C, x.y + T, x.x + C, x.y - T);
				break;
			case "to-bottom-left":
			case "to-left-bottom":
				i = e.createLinearGradient(x.x + C, x.y - T, x.x - C, x.y + T);
				break;
			case "to-top-left":
			case "to-left-top": i = e.createLinearGradient(x.x + C, x.y + T, x.x - C, x.y - T);
		}
	}
	if (!i) return null;
	for (var k = l.length === s.length, S = s.length, P = 0; P < S; P++) i.addColorStop(k ? l[P] : P / (S - 1), "rgba(" + s[P][0] + "," + s[P][1] + "," + s[P][2] + "," + a + ")");
	return i;
}, da.gradientFillStyle = function(e, t, n, r) {
	var a = this.createGradientStyleFor(e, "background", t, n, r);
	if (!a) return null;
	e.fillStyle = a;
}, da.colorFillStyle = function(e, t, n, r, a) {
	e.fillStyle = "rgba(" + t + "," + n + "," + r + "," + a + ")";
}, da.eleFillStyle = function(e, t, n) {
	var r = t.pstyle("background-fill").value;
	if ("linear-gradient" === r || "radial-gradient" === r) this.gradientFillStyle(e, t, r, n);
	else {
		var a = t.pstyle("background-color").value;
		this.colorFillStyle(e, a[0], a[1], a[2], n);
	}
}, da.gradientStrokeStyle = function(e, t, n, r) {
	var a = this.createGradientStyleFor(e, "line", t, n, r);
	if (!a) return null;
	e.strokeStyle = a;
}, da.colorStrokeStyle = function(e, t, n, r, a) {
	e.strokeStyle = "rgba(" + t + "," + n + "," + r + "," + a + ")";
}, da.eleStrokeStyle = function(e, t, n) {
	var r = t.pstyle("line-fill").value;
	if ("linear-gradient" === r || "radial-gradient" === r) this.gradientStrokeStyle(e, t, r, n);
	else {
		var a = t.pstyle("line-color").value;
		this.colorStrokeStyle(e, a[0], a[1], a[2], n);
	}
}, da.matchCanvasSize = function(e) {
	var t = this.data, n = this.findContainerClientCoords(), r = n[2], a = n[3], i = this.getPixelRatio(), o = this.motionBlurPxRatio;
	(e === this.data.bufferCanvases[this.MOTIONBLUR_BUFFER_NODE] || e === this.data.bufferCanvases[this.MOTIONBLUR_BUFFER_DRAG]) && (i = o);
	var s, l = r * i, u = a * i;
	if (l !== this.canvasWidth || u !== this.canvasHeight) {
		this.fontCaches = null;
		var c = t.canvasContainer;
		c.style.width = r + "px", c.style.height = a + "px";
		for (var d = 0; d < this.CANVAS_LAYERS; d++) (s = t.canvases[d]).width = l, s.height = u, s.style.width = r + "px", s.style.height = a + "px";
		for (var d = 0; d < this.BUFFER_COUNT; d++) (s = t.bufferCanvases[d]).width = l, s.height = u, s.style.width = r + "px", s.style.height = a + "px";
		this.textureMult = 1, i <= 1 && (s = t.bufferCanvases[this.TEXTURE_BUFFER], this.textureMult = 2, s.width = l * this.textureMult, s.height = u * this.textureMult), this.canvasWidth = l, this.canvasHeight = u, this.pixelRatio = i;
	}
}, da.renderTo = function(e, t, n, r) {
	this.render({
		forcedContext: e,
		forcedZoom: t,
		forcedPan: n,
		drawAllLayers: !0,
		forcedPxRatio: r
	});
}, da.clearCanvas = function() {
	var t = this, n = t.data;
	function r(e) {
		e.clearRect(0, 0, t.canvasWidth, t.canvasHeight);
	}
	e(r, "clear"), r(n.contexts[t.NODE]), r(n.contexts[t.DRAG]);
}, da.render = function(t) {
	var n = this;
	t = t || tn();
	var r = n.cy, a = t.forcedContext, i = t.drawAllLayers, o = t.drawOnlyNodeLayer, s = t.forcedZoom, l = t.forcedPan, u = void 0 === t.forcedPxRatio ? this.getPixelRatio() : t.forcedPxRatio, c = n.data, d = c.canvasNeedsRedraw, h = n.textureOnViewport && !a && (n.pinching || n.hoverData.dragging || n.swipePanning || n.data.wheelZooming), f = void 0 !== t.motionBlur ? t.motionBlur : n.motionBlur, p = n.motionBlurPxRatio, g = r.hasCompoundNodes(), v = n.hoverData.draggingEles, y = !!(n.hoverData.selecting || n.touchData.selecting), m = f = f && !a && n.motionBlurEnabled && !y;
	a || (n.prevPxRatio !== u && (n.invalidateContainerClientCoordsCache(), n.matchCanvasSize(n.container), n.redrawHint("eles", !0), n.redrawHint("drag", !0)), n.prevPxRatio = u), !a && n.motionBlurTimeout && clearTimeout(n.motionBlurTimeout), f && (n.mbFrames ??= 0, n.mbFrames++, n.mbFrames < 3 && (m = !1), n.mbFrames > n.minMbLowQualFrames && (n.motionBlurPxRatio = n.mbPxRBlurry)), n.clearingMotionBlur && (n.motionBlurPxRatio = 1), n.textureDrawLastFrame && !h && (d[n.NODE] = !0, d[n.SELECT_BOX] = !0);
	var x = r.style(), w = r.zoom(), E = void 0 !== s ? s : w, C = r.pan(), T = {
		x: C.x,
		y: C.y
	}, k = {
		zoom: w,
		pan: {
			x: C.x,
			y: C.y
		}
	}, S = n.prevViewport;
	void 0 === S || k.zoom !== S.zoom || k.pan.x !== S.pan.x || k.pan.y !== S.pan.y || v && !g || (n.motionBlurPxRatio = 1), l && (T = l), E *= u, T.x *= u, T.y *= u;
	var P = n.getCachedZSortedEles();
	function B(e, t, r, a, i) {
		var o = e.globalCompositeOperation;
		e.globalCompositeOperation = "destination-out", n.colorFillStyle(e, 255, 255, 255, n.motionBlurTransparency), e.fillRect(t, r, a, i), e.globalCompositeOperation = o;
	}
	function _(e, t) {
		var r, o, u, d;
		n.clearingMotionBlur || e !== c.bufferContexts[n.MOTIONBLUR_BUFFER_NODE] && e !== c.bufferContexts[n.MOTIONBLUR_BUFFER_DRAG] ? (r = T, o = E, u = n.canvasWidth, d = n.canvasHeight) : (r = {
			x: C.x * p,
			y: C.y * p
		}, o = w * p, u = n.canvasWidth * p, d = n.canvasHeight * p), e.setTransform(1, 0, 0, 1, 0, 0), "motionBlur" === t ? B(e, 0, 0, u, d) : !a && (void 0 === t || t) && e.clearRect(0, 0, u, d), i || (e.translate(r.x, r.y), e.scale(o, o)), l && e.translate(l.x, l.y), s && e.scale(s, s);
	}
	if (e(B, "mbclear"), e(_, "setContextTransform"), h || (n.textureDrawLastFrame = !1), h) {
		if (n.textureDrawLastFrame = !0, !n.textureCache) {
			n.textureCache = {}, n.textureCache.bb = r.mutableElements().boundingBox(), n.textureCache.texture = n.data.bufferCanvases[n.TEXTURE_BUFFER];
			var D = n.data.bufferContexts[n.TEXTURE_BUFFER];
			D.setTransform(1, 0, 0, 1, 0, 0), D.clearRect(0, 0, n.canvasWidth * n.textureMult, n.canvasHeight * n.textureMult), n.render({
				forcedContext: D,
				drawOnlyNodeLayer: !0,
				forcedPxRatio: u * n.textureMult
			});
			var k = n.textureCache.viewport = {
				zoom: r.zoom(),
				pan: r.pan(),
				width: n.canvasWidth,
				height: n.canvasHeight
			};
			k.mpan = {
				x: (0 - k.pan.x) / k.zoom,
				y: (0 - k.pan.y) / k.zoom
			};
		}
		d[n.DRAG] = !1, d[n.NODE] = !1;
		var A = c.contexts[n.NODE], M = n.textureCache.texture, k = n.textureCache.viewport;
		A.setTransform(1, 0, 0, 1, 0, 0), f ? B(A, 0, 0, k.width, k.height) : A.clearRect(0, 0, k.width, k.height);
		var R = x.core("outside-texture-bg-color").value, I = x.core("outside-texture-bg-opacity").value;
		n.colorFillStyle(A, R[0], R[1], R[2], I), A.fillRect(0, 0, k.width, k.height);
		var w = r.zoom();
		_(A, !1), A.clearRect(k.mpan.x, k.mpan.y, k.width / k.zoom / u, k.height / k.zoom / u), A.drawImage(M, k.mpan.x, k.mpan.y, k.width / k.zoom / u, k.height / k.zoom / u);
	} else n.textureOnViewport && !a && (n.textureCache = null);
	var L = r.extent(), N = n.pinching || n.hoverData.dragging || n.swipePanning || n.data.wheelZooming || n.hoverData.draggingEles || n.cy.animated(), z = n.hideEdgesOnViewport && N, O = [];
	if (O[n.NODE] = !d[n.NODE] && f && !n.clearedForMotionBlur[n.NODE] || n.clearingMotionBlur, O[n.NODE] && (n.clearedForMotionBlur[n.NODE] = !0), O[n.DRAG] = !d[n.DRAG] && f && !n.clearedForMotionBlur[n.DRAG] || n.clearingMotionBlur, O[n.DRAG] && (n.clearedForMotionBlur[n.DRAG] = !0), d[n.NODE] || i || o || O[n.NODE]) {
		var F = f && !O[n.NODE] && 1 !== p, A = a || (F ? n.data.bufferContexts[n.MOTIONBLUR_BUFFER_NODE] : c.contexts[n.NODE]);
		_(A, f && !F ? "motionBlur" : void 0), z ? n.drawCachedNodes(A, P.nondrag, u, L) : n.drawLayeredElements(A, P.nondrag, u, L), n.debug && n.drawDebugPoints(A, P.nondrag), i || f || (d[n.NODE] = !1);
	}
	if (!o && (d[n.DRAG] || i || O[n.DRAG])) {
		var F = f && !O[n.DRAG] && 1 !== p, A = a || (F ? n.data.bufferContexts[n.MOTIONBLUR_BUFFER_DRAG] : c.contexts[n.DRAG]);
		_(A, f && !F ? "motionBlur" : void 0), z ? n.drawCachedNodes(A, P.drag, u, L) : n.drawCachedElements(A, P.drag, u, L), n.debug && n.drawDebugPoints(A, P.drag), i || f || (d[n.DRAG] = !1);
	}
	if (this.drawSelectionRectangle(t, _), f && 1 !== p) {
		var V = c.contexts[n.NODE], q = n.data.bufferCanvases[n.MOTIONBLUR_BUFFER_NODE], j = c.contexts[n.DRAG], X = n.data.bufferCanvases[n.MOTIONBLUR_BUFFER_DRAG], Y = e(function(e, t, r) {
			e.setTransform(1, 0, 0, 1, 0, 0), r || !m ? e.clearRect(0, 0, n.canvasWidth, n.canvasHeight) : B(e, 0, 0, n.canvasWidth, n.canvasHeight), e.drawImage(t, 0, 0, n.canvasWidth * p, n.canvasHeight * p, 0, 0, n.canvasWidth, n.canvasHeight);
		}, "drawMotionBlur");
		(d[n.NODE] || O[n.NODE]) && (Y(V, q, O[n.NODE]), d[n.NODE] = !1), (d[n.DRAG] || O[n.DRAG]) && (Y(j, X, O[n.DRAG]), d[n.DRAG] = !1);
	}
	n.prevViewport = k, n.clearingMotionBlur && (n.clearingMotionBlur = !1, n.motionBlurCleared = !0, n.motionBlur = !0), f && (n.motionBlurTimeout = setTimeout(function() {
		n.motionBlurTimeout = null, n.clearedForMotionBlur[n.NODE] = !1, n.clearedForMotionBlur[n.DRAG] = !1, n.motionBlur = !1, n.clearingMotionBlur = !h, n.mbFrames = 0, d[n.NODE] = !0, d[n.DRAG] = !0, n.redraw();
	}, 100)), a || r.emit("render");
}, da.drawSelectionRectangle = function(e, t) {
	var n = this.cy, r = this.data, a = n.style(), i = e.drawOnlyNodeLayer, o = e.drawAllLayers, s = r.canvasNeedsRedraw, l = e.forcedContext;
	if (this.showFps || !i && s[this.SELECT_BOX] && !o) {
		var u = l || r.contexts[this.SELECT_BOX];
		if (t(u), 1 == this.selection[4] && (this.hoverData.selecting || this.touchData.selecting)) {
			var c = this.cy.zoom(), d = a.core("selection-box-border-width").value / c;
			u.lineWidth = d, u.fillStyle = "rgba(" + a.core("selection-box-color").value[0] + "," + a.core("selection-box-color").value[1] + "," + a.core("selection-box-color").value[2] + "," + a.core("selection-box-opacity").value + ")", u.fillRect(this.selection[0], this.selection[1], this.selection[2] - this.selection[0], this.selection[3] - this.selection[1]), d > 0 && (u.strokeStyle = "rgba(" + a.core("selection-box-border-color").value[0] + "," + a.core("selection-box-border-color").value[1] + "," + a.core("selection-box-border-color").value[2] + "," + a.core("selection-box-opacity").value + ")", u.strokeRect(this.selection[0], this.selection[1], this.selection[2] - this.selection[0], this.selection[3] - this.selection[1]));
		}
		if (r.bgActivePosistion && !this.hoverData.selecting) {
			var c = this.cy.zoom(), h = r.bgActivePosistion;
			u.fillStyle = "rgba(" + a.core("active-bg-color").value[0] + "," + a.core("active-bg-color").value[1] + "," + a.core("active-bg-color").value[2] + "," + a.core("active-bg-opacity").value + ")", u.beginPath(), u.arc(h.x, h.y, a.core("active-bg-size").pfValue / c, 0, 2 * Math.PI), u.fill();
		}
		var f = this.lastRedrawTime;
		if (this.showFps && f) {
			var p = Math.round(1e3 / (f = Math.round(f))), g = "1 frame = " + f + " ms = " + p + " fps";
			u.setTransform(1, 0, 0, 1, 0, 0), u.fillStyle = "rgba(255, 0, 0, 0.75)", u.strokeStyle = "rgba(255, 0, 0, 0.75)", u.font = "30px Arial", x || (x = u.measureText(g).actualBoundingBoxAscent), u.fillText(g, 0, x), u.strokeRect(0, x + 10, 250, 20), u.fillRect(0, x + 10, 250 * Math.min(p / 60, 1), 20);
		}
		o || (s[this.SELECT_BOX] = !1);
	}
}, e(di, "compileShader"), e(ds, "createProgram"), e(dl, "createTextureCanvas"), e(du, "getEffectivePanZoom"), e(dc, "getEffectiveZoom"), e(dd, "modelToRenderedPosition"), e(dh, "isSimpleShape"), e(df, "arrayEqual"), e(dp, "toWebGLColor"), e(dg, "indexToVec4"), e(dv, "vec4ToIndex"), e(dy, "createTexture"), e(dm, "getTypeInfo"), e(db, "createTypedArray"), e(dx, "createTypedArrayView"), e(dw, "createBufferStaticDraw"), e(dE, "createBufferDynamicDraw"), e(dC, "create3x3MatrixBufferDynamicDraw"), e(dT, "createPickingFrameBuffer");
var dk = "u" > typeof Float32Array ? Float32Array : Array;
function dS() {
	var e = new dk(9);
	return dk != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e;
}
function dP(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
}
function dB(e, t, n) {
	var r = t[0], a = t[1], i = t[2], o = t[3], s = t[4], l = t[5], u = t[6], c = t[7], d = t[8], h = n[0], f = n[1], p = n[2], g = n[3], v = n[4], y = n[5], m = n[6], x = n[7], w = n[8];
	return e[0] = h * r + f * o + p * u, e[1] = h * a + f * s + p * c, e[2] = h * i + f * l + p * d, e[3] = g * r + v * o + y * u, e[4] = g * a + v * s + y * c, e[5] = g * i + v * l + y * d, e[6] = m * r + x * o + w * u, e[7] = m * a + x * s + w * c, e[8] = m * i + x * l + w * d, e;
}
function d_(e, t, n) {
	var r = t[0], a = t[1], i = t[2], o = t[3], s = t[4], l = t[5], u = t[6], c = t[7], d = t[8], h = n[0], f = n[1];
	return e[0] = r, e[1] = a, e[2] = i, e[3] = o, e[4] = s, e[5] = l, e[6] = h * r + f * o + u, e[7] = h * a + f * s + c, e[8] = h * i + f * l + d, e;
}
function dD(e, t, n) {
	var r = t[0], a = t[1], i = t[2], o = t[3], s = t[4], l = t[5], u = t[6], c = t[7], d = t[8], h = Math.sin(n), f = Math.cos(n);
	return e[0] = f * r + h * o, e[1] = f * a + h * s, e[2] = f * i + h * l, e[3] = f * o - h * r, e[4] = f * s - h * a, e[5] = f * l - h * i, e[6] = u, e[7] = c, e[8] = d, e;
}
function dA(e, t, n) {
	var r = n[0], a = n[1];
	return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = a * t[3], e[4] = a * t[4], e[5] = a * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
}
function dM(e, t, n) {
	return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / n, e[5] = 0, e[6] = -1, e[7] = 1, e[8] = 1, e;
}
Math.hypot || (Math.hypot = function() {
	for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
	return Math.sqrt(e);
}), e(dS, "create"), e(dP, "identity"), e(dB, "multiply"), e(d_, "translate"), e(dD, "rotate"), e(dA, "scale"), e(dM, "projection");
var dR = function() {
	function t(e, n, r, i) {
		a(this, t), this.debugID = Math.floor(1e4 * Math.random()), this.r = e, this.texSize = n, this.texRows = r, this.texHeight = Math.floor(n / r), this.enableWrapping = !0, this.locked = !1, this.texture = null, this.needsBuffer = !0, this.freePointer = {
			x: 0,
			row: 0
		}, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = i(e, n, n), this.scratch = i(e, n, this.texHeight, "scratch");
	}
	return e(t, "Atlas"), o(t, [
		{
			key: "lock",
			value: e(function() {
				this.locked = !0;
			}, "lock")
		},
		{
			key: "getKeys",
			value: e(function() {
				return new Set(this.keyToLocation.keys());
			}, "getKeys")
		},
		{
			key: "getScale",
			value: e(function(e) {
				var t = e.w, n = e.h, r = this.texHeight, a = this.texSize, i = r / n, o = t * i, s = n * i;
				return o > a && (i = a / t, o = t * i, s = n * i), {
					scale: i,
					texW: o,
					texH: s
				};
			}, "getScale")
		},
		{
			key: "draw",
			value: e(function(t, n, r) {
				var a = this;
				if (this.locked) throw Error("can't draw, atlas is locked");
				var i = this.texSize, o = this.texRows, s = this.texHeight, l = this.getScale(n), u = l.scale, c = l.texW, d = l.texH, h = e(function(e, t) {
					if (r && t) {
						var a = t.context, i = e.x, o = s * e.row;
						a.save(), a.translate(i, o), a.scale(u, u), r(a, n), a.restore();
					}
				}, "drawAt"), f = [null, null], p = e(function() {
					h(a.freePointer, a.canvas), f[0] = {
						x: a.freePointer.x,
						y: a.freePointer.row * s,
						w: c,
						h: d
					}, f[1] = {
						x: a.freePointer.x + c,
						y: a.freePointer.row * s,
						w: 0,
						h: d
					}, a.freePointer.x += c, a.freePointer.x == i && (a.freePointer.x = 0, a.freePointer.row++);
				}, "drawNormal"), g = e(function() {
					var e = a.scratch, t = a.canvas;
					e.clear(), h({
						x: 0,
						row: 0
					}, e);
					var n = i - a.freePointer.x, r = c - n, o = a.freePointer.x, l = a.freePointer.row * s;
					t.context.drawImage(e, 0, 0, n, s, o, l, n, s), f[0] = {
						x: o,
						y: l,
						w: n,
						h: d
					};
					var u = (a.freePointer.row + 1) * s;
					t && t.context.drawImage(e, n, 0, r, s, 0, u, r, s), f[1] = {
						x: 0,
						y: u,
						w: r,
						h: d
					}, a.freePointer.x = r, a.freePointer.row++;
				}, "drawWrapped"), v = e(function() {
					a.freePointer.x = 0, a.freePointer.row++;
				}, "moveToStartOfNextRow");
				if (this.freePointer.x + c <= i) p();
				else {
					if (this.freePointer.row >= o - 1) return !1;
					this.freePointer.x === i ? (v(), p()) : this.enableWrapping ? g() : (v(), p());
				}
				return this.keyToLocation.set(t, f), this.needsBuffer = !0, f;
			}, "draw")
		},
		{
			key: "getOffsets",
			value: e(function(e) {
				return this.keyToLocation.get(e);
			}, "getOffsets")
		},
		{
			key: "isEmpty",
			value: e(function() {
				return 0 === this.freePointer.x && 0 === this.freePointer.row;
			}, "isEmpty")
		},
		{
			key: "canFit",
			value: e(function(e) {
				if (this.locked) return !1;
				var t = this.texSize, n = this.texRows, r = this.getScale(e).texW;
				return !(this.freePointer.x + r > t) || this.freePointer.row < n - 1;
			}, "canFit")
		},
		{
			key: "bufferIfNeeded",
			value: e(function(e) {
				this.texture || (this.texture = dy(e, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = !1, this.locked && (this.canvas = null, this.scratch = null));
			}, "bufferIfNeeded")
		},
		{
			key: "dispose",
			value: e(function() {
				this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = !0;
			}, "dispose")
		}
	]);
}(), dI = function() {
	function t(e, n, r, i) {
		a(this, t), this.r = e, this.texSize = n, this.texRows = r, this.createTextureCanvas = i, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
	}
	return e(t, "AtlasCollection"), o(t, [
		{
			key: "getKeys",
			value: e(function() {
				return new Set(this.styleKeyToAtlas.keys());
			}, "getKeys")
		},
		{
			key: "_createAtlas",
			value: e(function() {
				return new dR(this.r, this.texSize, this.texRows, this.createTextureCanvas);
			}, "_createAtlas")
		},
		{
			key: "_getScratchCanvas",
			value: e(function() {
				if (!this.scratch) {
					var e = this.r, t = this.texSize, n = this.texRows, r = this.createTextureCanvas, a = Math.floor(t / n);
					this.scratch = r(e, t, a, "scratch");
				}
				return this.scratch;
			}, "_getScratchCanvas")
		},
		{
			key: "draw",
			value: e(function(e, t, n) {
				var r = this.styleKeyToAtlas.get(e);
				return r || ((r = this.atlases[this.atlases.length - 1]) && r.canFit(t) || (r && r.lock(), r = this._createAtlas(), this.atlases.push(r)), r.draw(e, t, n), this.styleKeyToAtlas.set(e, r)), r;
			}, "draw")
		},
		{
			key: "getAtlas",
			value: e(function(e) {
				return this.styleKeyToAtlas.get(e);
			}, "getAtlas")
		},
		{
			key: "hasAtlas",
			value: e(function(e) {
				return this.styleKeyToAtlas.has(e);
			}, "hasAtlas")
		},
		{
			key: "markKeyForGC",
			value: e(function(e) {
				this.markedKeys.add(e);
			}, "markKeyForGC")
		},
		{
			key: "gc",
			value: e(function() {
				var t = this, n = this.markedKeys;
				if (0 === n.size) return void console.log("nothing to garbage collect");
				var r, a = [], i = /* @__PURE__ */ new Map(), o = null, l = s(this.atlases);
				try {
					var u = e(function() {
						var e = r.value, l = e.getKeys(), u = dL(n, l);
						if (0 === u.size) return a.push(e), l.forEach(function(t) {
							return i.set(t, e);
						}), 1;
						o || (o = t._createAtlas(), a.push(o));
						var c, d = s(l);
						try {
							for (d.s(); !(c = d.n()).done;) {
								var h = c.value;
								if (!u.has(h)) {
									var p = e.getOffsets(h), g = f(p, 2), v = g[0], y = g[1];
									o.canFit({
										w: v.w + y.w,
										h: v.h
									}) || (o.lock(), o = t._createAtlas(), a.push(o)), e.canvas && (t._copyTextureToNewAtlas(h, e, o), i.set(h, o));
								}
							}
						} catch (e) {
							d.e(e);
						} finally {
							d.f();
						}
						e.dispose();
					}, "_loop");
					for (l.s(); !(r = l.n()).done;) u();
				} catch (e) {
					l.e(e);
				} finally {
					l.f();
				}
				this.atlases = a, this.styleKeyToAtlas = i, this.markedKeys = /* @__PURE__ */ new Set();
			}, "gc")
		},
		{
			key: "_copyTextureToNewAtlas",
			value: e(function(e, t, n) {
				var r = f(t.getOffsets(e), 2), a = r[0], i = r[1];
				if (0 === i.w) n.draw(e, a, function(e) {
					e.drawImage(t.canvas, a.x, a.y, a.w, a.h, 0, 0, a.w, a.h);
				});
				else {
					var o = this._getScratchCanvas();
					o.clear(), o.context.drawImage(t.canvas, a.x, a.y, a.w, a.h, 0, 0, a.w, a.h), o.context.drawImage(t.canvas, i.x, i.y, i.w, i.h, a.w, 0, i.w, i.h);
					var s = a.w + i.w, l = a.h;
					n.draw(e, {
						w: s,
						h: l
					}, function(e) {
						e.drawImage(o, 0, 0, s, l, 0, 0, s, l);
					});
				}
			}, "_copyTextureToNewAtlas")
		},
		{
			key: "getCounts",
			value: e(function() {
				return {
					keyCount: this.styleKeyToAtlas.size,
					atlasCount: new Set(this.styleKeyToAtlas.values()).size
				};
			}, "getCounts")
		}
	]);
}();
function dL(e, t) {
	return e.intersection ? e.intersection(t) : new Set(p(e).filter(function(e) {
		return t.has(e);
	}));
}
e(dL, "intersection");
var dN = function() {
	function t(e, n) {
		a(this, t), this.r = e, this.globalOptions = n, this.atlasSize = n.webglTexSize, this.maxAtlasesPerBatch = n.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map();
	}
	return e(t, "AtlasManager"), o(t, [
		{
			key: "getAtlasSize",
			value: e(function() {
				return this.atlasSize;
			}, "getAtlasSize")
		},
		{
			key: "addAtlasCollection",
			value: e(function(e, t) {
				var n = this.globalOptions, r = n.webglTexSize, a = n.createTextureCanvas, i = t.texRows, o = this._cacheScratchCanvas(a), s = new dI(this.r, r, i, o);
				this.collections.set(e, s);
			}, "addAtlasCollection")
		},
		{
			key: "addRenderType",
			value: e(function(e, t) {
				var n = t.collection;
				if (!this.collections.has(n)) throw Error("invalid atlas collection name '".concat(n, "'"));
				var r = es({
					type: e,
					atlasCollection: this.collections.get(n)
				}, t);
				this.renderTypes.set(e, r);
			}, "addRenderType")
		},
		{
			key: "getRenderTypeOpts",
			value: e(function(e) {
				return this.renderTypes.get(e);
			}, "getRenderTypeOpts")
		},
		{
			key: "getAtlasCollection",
			value: e(function(e) {
				return this.collections.get(e);
			}, "getAtlasCollection")
		},
		{
			key: "_cacheScratchCanvas",
			value: e(function(e) {
				var t = -1, n = -1, r = null;
				return function(a, i, o, s) {
					return s ? (r && i == t && o == n || (t = i, n = o, r = e(a, i, o)), r) : e(a, i, o);
				};
			}, "_cacheScratchCanvas")
		},
		{
			key: "_key",
			value: e(function(e, t) {
				return "".concat(e, "-").concat(t);
			}, "_key")
		},
		{
			key: "invalidate",
			value: e(function(t) {
				var n, r = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = a.forceRedraw, o = void 0 !== i && i, l = a.filterEle, u = void 0 === l ? function() {
					return !0;
				} : l, c = a.filterType, d = void 0 === c ? function() {
					return !0;
				} : c, h = !1, f = !1, p = s(t);
				try {
					for (p.s(); !(n = p.n()).done;) {
						var g = n.value;
						if (u(g)) {
							var v, y = s(this.renderTypes.values());
							try {
								var m = e(function() {
									var e = v.value, t = e.type;
									if (d(t)) {
										var n = r.collections.get(e.collection), a = e.getKey(g), i = Array.isArray(a) ? a : [a];
										if (o) i.forEach(function(e) {
											return n.markKeyForGC(e);
										}), f = !0;
										else {
											var s = e.getID ? e.getID(g) : g.id(), l = r._key(t, s), u = r.typeAndIdToKey.get(l);
											void 0 === u || df(i, u) || (h = !0, r.typeAndIdToKey.delete(l), u.forEach(function(e) {
												return n.markKeyForGC(e);
											}));
										}
									}
								}, "_loop2");
								for (y.s(); !(v = y.n()).done;) m();
							} catch (e) {
								y.e(e);
							} finally {
								y.f();
							}
						}
					}
				} catch (e) {
					p.e(e);
				} finally {
					p.f();
				}
				return f && (this.gc(), h = !1), h;
			}, "invalidate")
		},
		{
			key: "gc",
			value: e(function() {
				var e, t = s(this.collections.values());
				try {
					for (t.s(); !(e = t.n()).done;) e.value.gc();
				} catch (e) {
					t.e(e);
				} finally {
					t.f();
				}
			}, "gc")
		},
		{
			key: "getOrCreateAtlas",
			value: e(function(e, t, n, r) {
				var a = this.renderTypes.get(t), i = this.collections.get(a.collection), o = !1, s = i.draw(r, n, function(t) {
					a.drawClipped ? (t.save(), t.beginPath(), t.rect(0, 0, n.w, n.h), t.clip(), a.drawElement(t, e, n, !0, !0), t.restore()) : a.drawElement(t, e, n, !0, !0), o = !0;
				});
				if (o) {
					var l = a.getID ? a.getID(e) : e.id(), u = this._key(t, l);
					this.typeAndIdToKey.has(u) ? this.typeAndIdToKey.get(u).push(r) : this.typeAndIdToKey.set(u, [r]);
				}
				return s;
			}, "getOrCreateAtlas")
		},
		{
			key: "getAtlasInfo",
			value: e(function(e, t) {
				var n = this, r = this.renderTypes.get(t), a = r.getKey(e);
				return (Array.isArray(a) ? a : [a]).map(function(a) {
					var i = r.getBoundingBox(e, a), o = n.getOrCreateAtlas(e, t, i, a), s = f(o.getOffsets(a), 2), l = s[0];
					return {
						atlas: o,
						tex: l,
						tex1: l,
						tex2: s[1],
						bb: i
					};
				});
			}, "getAtlasInfo")
		},
		{
			key: "getDebugInfo",
			value: e(function() {
				var e, t = [], n = s(this.collections);
				try {
					for (n.s(); !(e = n.n()).done;) {
						var r = f(e.value, 2), a = r[0], i = r[1].getCounts(), o = i.keyCount, l = i.atlasCount;
						t.push({
							type: a,
							keyCount: o,
							atlasCount: l
						});
					}
				} catch (e) {
					n.e(e);
				} finally {
					n.f();
				}
				return t;
			}, "getDebugInfo")
		}
	]);
}(), dz = function() {
	function t(e) {
		a(this, t), this.globalOptions = e, this.atlasSize = e.webglTexSize, this.maxAtlasesPerBatch = e.webglTexPerBatch, this.batchAtlases = [];
	}
	return e(t, "AtlasBatchManager"), o(t, [
		{
			key: "getMaxAtlasesPerBatch",
			value: e(function() {
				return this.maxAtlasesPerBatch;
			}, "getMaxAtlasesPerBatch")
		},
		{
			key: "getAtlasSize",
			value: e(function() {
				return this.atlasSize;
			}, "getAtlasSize")
		},
		{
			key: "getIndexArray",
			value: e(function() {
				return Array.from({ length: this.maxAtlasesPerBatch }, function(e, t) {
					return t;
				});
			}, "getIndexArray")
		},
		{
			key: "startBatch",
			value: e(function() {
				this.batchAtlases = [];
			}, "startBatch")
		},
		{
			key: "getAtlasCount",
			value: e(function() {
				return this.batchAtlases.length;
			}, "getAtlasCount")
		},
		{
			key: "getAtlases",
			value: e(function() {
				return this.batchAtlases;
			}, "getAtlases")
		},
		{
			key: "canAddToCurrentBatch",
			value: e(function(e) {
				return this.batchAtlases.length !== this.maxAtlasesPerBatch || this.batchAtlases.includes(e);
			}, "canAddToCurrentBatch")
		},
		{
			key: "getAtlasIndexForBatch",
			value: e(function(e) {
				var t = this.batchAtlases.indexOf(e);
				if (t < 0) {
					if (this.batchAtlases.length === this.maxAtlasesPerBatch) throw Error("cannot add more atlases to batch");
					this.batchAtlases.push(e), t = this.batchAtlases.length - 1;
				}
				return t;
			}, "getAtlasIndexForBatch")
		}
	]);
}(), dO = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`, dF = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`, dV = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`, dq = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`, dj = {
	name: "screen",
	screen: !0
}, dX = {
	name: "picking",
	picking: !0
}, dY = function() {
	function t(e, n, r) {
		a(this, t), this.r = e, this.gl = n, this.maxInstances = r.webglBatchSize, this.atlasSize = r.webglTexSize, this.bgColor = r.bgColor, this.debug = r.webglDebug, this.batchDebugInfo = [], r.enableWrapping = !0, r.createTextureCanvas = dl, this.atlasManager = new dN(e, r), this.batchManager = new dz(r), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(dj), this.pickingProgram = this._createShaderProgram(dX), this.vao = this._createVAO();
	}
	return e(t, "ElementDrawingWebGL"), o(t, [
		{
			key: "addAtlasCollection",
			value: e(function(e, t) {
				this.atlasManager.addAtlasCollection(e, t);
			}, "addAtlasCollection")
		},
		{
			key: "addTextureAtlasRenderType",
			value: e(function(e, t) {
				this.atlasManager.addRenderType(e, t);
			}, "addTextureAtlasRenderType")
		},
		{
			key: "addSimpleShapeRenderType",
			value: e(function(e, t) {
				this.simpleShapeOptions.set(e, t);
			}, "addSimpleShapeRenderType")
		},
		{
			key: "invalidate",
			value: e(function(t) {
				var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).type, r = this.atlasManager;
				return n ? r.invalidate(t, {
					filterType: e(function(e) {
						return e === n;
					}, "filterType"),
					forceRedraw: !0
				}) : r.invalidate(t);
			}, "invalidate")
		},
		{
			key: "gc",
			value: e(function() {
				this.atlasManager.gc();
			}, "gc")
		},
		{
			key: "_createShaderProgram",
			value: e(function(e) {
				var t = this.gl, n = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == `.concat(0, `) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(4, " || aVertType == ").concat(7, ` 
             || aVertType == `).concat(5, " || aVertType == ").concat(6, `) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(1, `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == `).concat(2, `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == `).concat(3, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `), r = this.batchManager.getIndexArray(), a = ds(t, n, `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      `.concat(r.map(function(e) {
					return "uniform sampler2D uTexture".concat(e, ";");
				}).join(`
	`), `

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      `).concat(dO, `
      `).concat(dF, `
      `).concat(dV, `
      `).concat(dq, `

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == `).concat(0, `) {
          // look up the texel from the texture unit
          `).concat(r.map(function(e) {
					return "if(vAtlasId == ".concat(e, ") outColor = texture(uTexture").concat(e, ", vTexCoord);");
				}).join(`
	else `), `
        } 
        else if(vVertType == `).concat(3, `) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == `).concat(4, ` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == `).concat(4, " || vVertType == ").concat(7, ` 
          || vVertType == `).concat(5, " || vVertType == ").concat(6, `) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == `).concat(4, `) {
            d = rectangleSD(p, b);
          } else if(vVertType == `).concat(7, ` && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == `).concat(7, `) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        `).concat(e.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `));
				a.aPosition = t.getAttribLocation(a, "aPosition"), a.aIndex = t.getAttribLocation(a, "aIndex"), a.aVertType = t.getAttribLocation(a, "aVertType"), a.aTransform = t.getAttribLocation(a, "aTransform"), a.aAtlasId = t.getAttribLocation(a, "aAtlasId"), a.aTex = t.getAttribLocation(a, "aTex"), a.aPointAPointB = t.getAttribLocation(a, "aPointAPointB"), a.aPointCPointD = t.getAttribLocation(a, "aPointCPointD"), a.aLineWidth = t.getAttribLocation(a, "aLineWidth"), a.aColor = t.getAttribLocation(a, "aColor"), a.aCornerRadius = t.getAttribLocation(a, "aCornerRadius"), a.aBorderColor = t.getAttribLocation(a, "aBorderColor"), a.uPanZoomMatrix = t.getUniformLocation(a, "uPanZoomMatrix"), a.uAtlasSize = t.getUniformLocation(a, "uAtlasSize"), a.uBGColor = t.getUniformLocation(a, "uBGColor"), a.uZoom = t.getUniformLocation(a, "uZoom"), a.uTextures = [];
				for (var i = 0; i < this.batchManager.getMaxAtlasesPerBatch(); i++) a.uTextures.push(t.getUniformLocation(a, "uTexture".concat(i)));
				return a;
			}, "_createShaderProgram")
		},
		{
			key: "_createVAO",
			value: e(function() {
				var e = [
					0,
					0,
					1,
					0,
					1,
					1,
					0,
					0,
					1,
					1,
					0,
					1
				];
				this.vertexCount = e.length / 2;
				var t = this.maxInstances, n = this.gl, r = this.program, a = n.createVertexArray();
				return n.bindVertexArray(a), dw(n, "vec2", r.aPosition, e), this.transformBuffer = dC(n, t, r.aTransform), this.indexBuffer = dE(n, t, "vec4", r.aIndex), this.vertTypeBuffer = dE(n, t, "int", r.aVertType), this.atlasIdBuffer = dE(n, t, "int", r.aAtlasId), this.texBuffer = dE(n, t, "vec4", r.aTex), this.pointAPointBBuffer = dE(n, t, "vec4", r.aPointAPointB), this.pointCPointDBuffer = dE(n, t, "vec4", r.aPointCPointD), this.lineWidthBuffer = dE(n, t, "vec2", r.aLineWidth), this.colorBuffer = dE(n, t, "vec4", r.aColor), this.cornerRadiusBuffer = dE(n, t, "vec4", r.aCornerRadius), this.borderColorBuffer = dE(n, t, "vec4", r.aBorderColor), n.bindVertexArray(null), a;
			}, "_createVAO")
		},
		{
			key: "buffers",
			get: e(function() {
				var e = this;
				return this._buffers || (this._buffers = Object.keys(this).filter(function(e) {
					return J(e, "Buffer");
				}).map(function(t) {
					return e[t];
				})), this._buffers;
			}, "get")
		},
		{
			key: "startFrame",
			value: e(function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dj;
				this.panZoomMatrix = e, this.renderTarget = t, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
			}, "startFrame")
		},
		{
			key: "startBatch",
			value: e(function() {
				this.instanceCount = 0, this.batchManager.startBatch();
			}, "startBatch")
		},
		{
			key: "endFrame",
			value: e(function() {
				this.endBatch();
			}, "endFrame")
		},
		{
			key: "_isVisible",
			value: e(function(e, t) {
				return !!e.visible() && (!t || !t.isVisible || t.isVisible(e));
			}, "_isVisible")
		},
		{
			key: "drawTexture",
			value: e(function(e, t, n) {
				var r = this.atlasManager, a = this.batchManager, i = r.getRenderTypeOpts(n);
				if (this._isVisible(e, i) && !(e.isEdge() && !this._isValidEdge(e))) {
					if (this.renderTarget.picking && i.getTexPickingMode) {
						var o = i.getTexPickingMode(e);
						if (1 === o) return;
						if (2 == o) return void this.drawPickingRectangle(e, t, n);
					}
					var l, u = s(r.getAtlasInfo(e, n));
					try {
						for (u.s(); !(l = u.n()).done;) {
							var c = l.value, d = c.atlas, h = c.tex1, p = c.tex2;
							a.canAddToCurrentBatch(d) || this.endBatch();
							for (var g = a.getAtlasIndexForBatch(d), v = 0, y = [[h, !0], [p, !1]]; v < y.length; v++) {
								var m = f(y[v], 2), x = m[0], w = m[1];
								if (0 != x.w) {
									var E = this.instanceCount;
									this.vertTypeBuffer.getView(E)[0] = 0;
									var C = this.indexBuffer.getView(E);
									dg(t, C), this.atlasIdBuffer.getView(E)[0] = g;
									var T = this.texBuffer.getView(E);
									T[0] = x.x, T[1] = x.y, T[2] = x.w, T[3] = x.h;
									var k = this.transformBuffer.getMatrixView(E);
									this.setTransformMatrix(e, k, i, c, w), this.instanceCount++, w || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
								}
							}
						}
					} catch (e) {
						u.e(e);
					} finally {
						u.f();
					}
				}
			}, "drawTexture")
		},
		{
			key: "setTransformMatrix",
			value: e(function(e, t, n, r) {
				var a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4], i = 0;
				if (n.shapeProps && n.shapeProps.padding && (i = e.pstyle(n.shapeProps.padding).pfValue), r) {
					var o = r.bb, s = r.tex1, l = r.tex2, u = s.w / (s.w + l.w);
					a || (u = 1 - u);
					var c = this._getAdjustedBB(o, i, a, u);
					this._applyTransformMatrix(t, c, n, e);
				} else {
					var d = n.getBoundingBox(e), h = this._getAdjustedBB(d, i, !0, 1);
					this._applyTransformMatrix(t, h, n, e);
				}
			}, "setTransformMatrix")
		},
		{
			key: "_applyTransformMatrix",
			value: e(function(e, t, n, r) {
				dP(e);
				var a, i, o = n.getRotation ? n.getRotation(r) : 0;
				if (0 !== o) {
					var s = n.getRotationPoint(r);
					d_(e, e, [s.x, s.y]), dD(e, e, o);
					var l = n.getRotationOffset(r);
					a = l.x + (t.xOffset || 0), i = l.y + (t.yOffset || 0);
				} else a = t.x1, i = t.y1;
				d_(e, e, [a, i]), dA(e, e, [t.w, t.h]);
			}, "_applyTransformMatrix")
		},
		{
			key: "_getAdjustedBB",
			value: e(function(e, t, n, r) {
				var a = e.x1, i = e.y1, o = e.w, s = e.h, l = e.yOffset;
				t && (a -= t, i -= t, o += 2 * t, s += 2 * t);
				var u = 0, c = o * r;
				return n && r < 1 ? o = c : !n && r < 1 && (a += u = o - c, o = c), {
					x1: a,
					y1: i,
					w: o,
					h: s,
					xOffset: u,
					yOffset: l
				};
			}, "_getAdjustedBB")
		},
		{
			key: "drawPickingRectangle",
			value: e(function(e, t, n) {
				var r = this.atlasManager.getRenderTypeOpts(n), a = this.instanceCount;
				this.vertTypeBuffer.getView(a)[0] = 4, dg(t, this.indexBuffer.getView(a)), dp([
					0,
					0,
					0
				], 1, this.colorBuffer.getView(a));
				var i = this.transformBuffer.getMatrixView(a);
				this.setTransformMatrix(e, i, r), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
			}, "drawPickingRectangle")
		},
		{
			key: "drawNode",
			value: e(function(e, t, n) {
				var r = this.simpleShapeOptions.get(n);
				if (this._isVisible(e, r)) {
					var a = r.shapeProps, i = this._getVertTypeForShape(e, a.shape);
					if (void 0 === i || r.isSimple && !r.isSimple(e)) return void this.drawTexture(e, t, n);
					var o = this.instanceCount;
					if (this.vertTypeBuffer.getView(o)[0] = i, 5 === i || 6 === i) {
						var s = r.getBoundingBox(e), l = this._getCornerRadius(e, a.radius, s), u = this.cornerRadiusBuffer.getView(o);
						u[0] = l, u[1] = l, u[2] = l, u[3] = l, 6 === i && (u[0] = 0, u[2] = 0);
					}
					dg(t, this.indexBuffer.getView(o)), dp(e.pstyle(a.color).value, e.pstyle(a.opacity).value, this.colorBuffer.getView(o));
					var c = this.lineWidthBuffer.getView(o);
					if (c[0] = 0, c[1] = 0, a.border) {
						var d = e.pstyle("border-width").value;
						if (d > 0) {
							dp(e.pstyle("border-color").value, e.pstyle("border-opacity").value, this.borderColorBuffer.getView(o));
							var h = e.pstyle("border-position").value;
							if ("inside" === h) c[0] = 0, c[1] = -d;
							else if ("outside" === h) c[0] = d, c[1] = 0;
							else {
								var f = d / 2;
								c[0] = f, c[1] = -f;
							}
						}
					}
					var p = this.transformBuffer.getMatrixView(o);
					this.setTransformMatrix(e, p, r), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
				}
			}, "drawNode")
		},
		{
			key: "_getVertTypeForShape",
			value: e(function(e, t) {
				switch (e.pstyle(t).value) {
					case "rectangle": return 4;
					case "ellipse": return 7;
					case "roundrectangle":
					case "round-rectangle": return 5;
					case "bottom-round-rectangle": return 6;
					default: return;
				}
			}, "_getVertTypeForShape")
		},
		{
			key: "_getCornerRadius",
			value: e(function(e, t, n) {
				var r = n.w, a = n.h;
				return "auto" === e.pstyle(t).value ? n9(r, a) : Math.min(e.pstyle(t).pfValue, a / 2, r / 2);
			}, "_getCornerRadius")
		},
		{
			key: "drawEdgeArrow",
			value: e(function(e, t, n) {
				if (e.visible()) {
					var r, a, i, o = e._private.rscratch;
					if ("source" === n ? (r = o.arrowStartX, a = o.arrowStartY, i = o.srcArrowAngle) : (r = o.arrowEndX, a = o.arrowEndY, i = o.tgtArrowAngle), !(isNaN(r) || null == r || isNaN(a) || null == a || isNaN(i) || null == i) && "none" !== e.pstyle(n + "-arrow-shape").value) {
						var s = e.pstyle(n + "-arrow-color").value, l = e.pstyle("opacity").value, u = e.pstyle("line-opacity").value, c = e.pstyle("width").pfValue, d = e.pstyle("arrow-scale").value, h = this.r.getArrowWidth(c, d), f = this.instanceCount, p = this.transformBuffer.getMatrixView(f);
						dP(p), d_(p, p, [r, a]), dA(p, p, [h, h]), dD(p, p, i), this.vertTypeBuffer.getView(f)[0] = 3, dg(t, this.indexBuffer.getView(f)), dp(s, l * u, this.colorBuffer.getView(f)), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
					}
				}
			}, "drawEdgeArrow")
		},
		{
			key: "drawEdgeLine",
			value: e(function(e, t) {
				if (e.visible()) {
					var n = this._getEdgePoints(e);
					if (n) {
						var r = e.pstyle("opacity").value, a = e.pstyle("line-opacity").value, i = e.pstyle("width").pfValue, o = e.pstyle("line-color").value, s = r * a;
						if (n.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), 4 == n.length) {
							var l = this.instanceCount;
							this.vertTypeBuffer.getView(l)[0] = 1, dg(t, this.indexBuffer.getView(l)), dp(o, s, this.colorBuffer.getView(l)), this.lineWidthBuffer.getView(l)[0] = i;
							var u = this.pointAPointBBuffer.getView(l);
							u[0] = n[0], u[1] = n[1], u[2] = n[2], u[3] = n[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
						} else for (var c = 0; c < n.length - 2; c += 2) {
							var d = this.instanceCount;
							this.vertTypeBuffer.getView(d)[0] = 2, dg(t, this.indexBuffer.getView(d)), dp(o, s, this.colorBuffer.getView(d)), this.lineWidthBuffer.getView(d)[0] = i;
							var h = n[c - 2], f = n[c - 1], p = n[c], g = n[c + 1], v = n[c + 2], y = n[c + 3], m = n[c + 4], x = n[c + 5];
							0 == c && (h = 2 * p - v + .001, f = 2 * g - y + .001), c == n.length - 4 && (m = 2 * v - p + .001, x = 2 * y - g + .001);
							var w = this.pointAPointBBuffer.getView(d);
							w[0] = h, w[1] = f, w[2] = p, w[3] = g;
							var E = this.pointCPointDBuffer.getView(d);
							E[0] = v, E[1] = y, E[2] = m, E[3] = x, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
						}
					}
				}
			}, "drawEdgeLine")
		},
		{
			key: "_isValidEdge",
			value: e(function(e) {
				var t = e._private.rscratch;
				return !(t.badLine || null == t.allpts || isNaN(t.allpts[0]));
			}, "_isValidEdge")
		},
		{
			key: "_getEdgePoints",
			value: e(function(e) {
				var t = e._private.rscratch;
				if (this._isValidEdge(e)) {
					var n = t.allpts;
					if (4 == n.length) return n;
					var r = this._getNumSegments(e);
					return this._getCurveSegmentPoints(n, r);
				}
			}, "_getEdgePoints")
		},
		{
			key: "_getNumSegments",
			value: e(function(e) {
				return Math.min(15, this.maxInstances);
			}, "_getNumSegments")
		},
		{
			key: "_getCurveSegmentPoints",
			value: e(function(e, t) {
				if (4 == e.length) return e;
				for (var n = Array((t + 1) * 2), r = 0; r <= t; r++) if (0 == r) n[0] = e[0], n[1] = e[1];
				else if (r == t) n[2 * r] = e[e.length - 2], n[2 * r + 1] = e[e.length - 1];
				else {
					var a = r / t;
					this._setCurvePoint(e, a, n, 2 * r);
				}
				return n;
			}, "_getCurveSegmentPoints")
		},
		{
			key: "_setCurvePoint",
			value: e(function(e, t, n, r) {
				if (e.length <= 2) n[r] = e[0], n[r + 1] = e[1];
				else {
					for (var a = Array(e.length - 2), i = 0; i < a.length; i += 2) {
						var o = (1 - t) * e[i] + t * e[i + 2], s = (1 - t) * e[i + 1] + t * e[i + 3];
						a[i] = o, a[i + 1] = s;
					}
					return this._setCurvePoint(a, t, n, r);
				}
			}, "_setCurvePoint")
		},
		{
			key: "endBatch",
			value: e(function() {
				var e = this.gl, t = this.vao, n = this.vertexCount, r = this.instanceCount;
				if (0 !== r) {
					var a = this.renderTarget.picking ? this.pickingProgram : this.program;
					e.useProgram(a), e.bindVertexArray(t);
					var i, o = s(this.buffers);
					try {
						for (o.s(); !(i = o.n()).done;) i.value.bufferSubData(r);
					} catch (e) {
						o.e(e);
					} finally {
						o.f();
					}
					for (var l = this.batchManager.getAtlases(), u = 0; u < l.length; u++) l[u].bufferIfNeeded(e);
					for (var c = 0; c < l.length; c++) e.activeTexture(e.TEXTURE0 + c), e.bindTexture(e.TEXTURE_2D, l[c].texture), e.uniform1i(a.uTextures[c], c);
					e.uniform1f(a.uZoom, dc(this.r)), e.uniformMatrix3fv(a.uPanZoomMatrix, !1, this.panZoomMatrix), e.uniform1i(a.uAtlasSize, this.batchManager.getAtlasSize());
					var d = dp(this.bgColor, 1);
					e.uniform4fv(a.uBGColor, d), e.drawArraysInstanced(e.TRIANGLES, 0, n, r), e.bindVertexArray(null), e.bindTexture(e.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({
						count: r,
						atlasCount: l.length
					}), this.startBatch();
				}
			}, "endBatch")
		},
		{
			key: "getDebugInfo",
			value: e(function() {
				var e = this.atlasManager.getDebugInfo(), t = e.reduce(function(e, t) {
					return e + t.atlasCount;
				}, 0), n = this.batchDebugInfo, r = n.reduce(function(e, t) {
					return e + t.count;
				}, 0);
				return {
					atlasInfo: e,
					totalAtlases: t,
					wrappedCount: this.wrappedCount,
					simpleCount: this.simpleCount,
					batchCount: n.length,
					batchInfo: n,
					totalInstances: r
				};
			}, "getDebugInfo")
		}
	]);
}(), dW = {};
function dH(e) {
	var t = e.cy.container();
	return eh(t && t.style && t.style.backgroundColor || "white");
}
function dK(e, t) {
	return ts(e._private.rscratch, "labelWrapCachedLines", t) || [];
}
dW.initWebgl = function(t, n) {
	var r = this, a = r.data.contexts[r.WEBGL];
	t.bgColor = dH(r), t.webglTexSize = Math.min(t.webglTexSize, a.getParameter(a.MAX_TEXTURE_SIZE)), t.webglTexRows = Math.min(t.webglTexRows, 54), t.webglTexRowsNodes = Math.min(t.webglTexRowsNodes, 54), t.webglBatchSize = Math.min(t.webglBatchSize, 16384), t.webglTexPerBatch = Math.min(t.webglTexPerBatch, a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), r.webglDebug = t.webglDebug, r.webglDebugShowAtlases = t.webglDebugShowAtlases, r.pickingFrameBuffer = dT(a), r.pickingFrameBuffer.needsDraw = !0, r.drawing = new dY(r, a, t);
	var i = e(function(e) {
		return function(t) {
			return r.getTextAngle(t, e);
		};
	}, "getLabelRotation"), o = e(function(e) {
		return function(t) {
			var n = t.pstyle(e);
			return n && n.value;
		};
	}, "isLabelVisible"), s = e(function(e) {
		return function(t) {
			return t.pstyle("".concat(e, "-opacity")).value > 0;
		};
	}, "isLayerVisible"), l = e(function(e) {
		return "yes" === e.pstyle("text-events").strValue ? 2 : 1;
	}, "getTexPickingMode"), u = e(function(e) {
		var t = e.position(), n = t.x, r = t.y, a = e.outerWidth(), i = e.outerHeight();
		return {
			w: a,
			h: i,
			x1: n - a / 2,
			y1: r - i / 2
		};
	}, "getBBForSimpleShape");
	r.drawing.addAtlasCollection("node", { texRows: t.webglTexRowsNodes }), r.drawing.addAtlasCollection("label", { texRows: t.webglTexRows }), r.drawing.addTextureAtlasRenderType("node-body", {
		collection: "node",
		getKey: n.getStyleKey,
		getBoundingBox: n.getElementBox,
		drawElement: n.drawElement
	}), r.drawing.addSimpleShapeRenderType("node-body", {
		getBoundingBox: u,
		isSimple: dh,
		shapeProps: {
			shape: "shape",
			color: "background-color",
			opacity: "background-opacity",
			radius: "corner-radius",
			border: !0
		}
	}), r.drawing.addSimpleShapeRenderType("node-overlay", {
		getBoundingBox: u,
		isVisible: s("overlay"),
		shapeProps: {
			shape: "overlay-shape",
			color: "overlay-color",
			opacity: "overlay-opacity",
			padding: "overlay-padding",
			radius: "overlay-corner-radius"
		}
	}), r.drawing.addSimpleShapeRenderType("node-underlay", {
		getBoundingBox: u,
		isVisible: s("underlay"),
		shapeProps: {
			shape: "underlay-shape",
			color: "underlay-color",
			opacity: "underlay-opacity",
			padding: "underlay-padding",
			radius: "underlay-corner-radius"
		}
	}), r.drawing.addTextureAtlasRenderType("label", {
		collection: "label",
		getTexPickingMode: l,
		getKey: dU(n.getLabelKey, null),
		getBoundingBox: dG(n.getLabelBox, null),
		drawClipped: !0,
		drawElement: n.drawLabel,
		getRotation: i(null),
		getRotationPoint: n.getLabelRotationPoint,
		getRotationOffset: n.getLabelRotationOffset,
		isVisible: o("label")
	}), r.drawing.addTextureAtlasRenderType("edge-source-label", {
		collection: "label",
		getTexPickingMode: l,
		getKey: dU(n.getSourceLabelKey, "source"),
		getBoundingBox: dG(n.getSourceLabelBox, "source"),
		drawClipped: !0,
		drawElement: n.drawSourceLabel,
		getRotation: i("source"),
		getRotationPoint: n.getSourceLabelRotationPoint,
		getRotationOffset: n.getSourceLabelRotationOffset,
		isVisible: o("source-label")
	}), r.drawing.addTextureAtlasRenderType("edge-target-label", {
		collection: "label",
		getTexPickingMode: l,
		getKey: dU(n.getTargetLabelKey, "target"),
		getBoundingBox: dG(n.getTargetLabelBox, "target"),
		drawClipped: !0,
		drawElement: n.drawTargetLabel,
		getRotation: i("target"),
		getRotationPoint: n.getTargetLabelRotationPoint,
		getRotationOffset: n.getTargetLabelRotationOffset,
		isVisible: o("target-label")
	});
	var c = eM(function() {
		console.log("garbage collect flag set"), r.data.gc = !0;
	}, 1e4);
	r.onUpdateEleCalcs(function(e, t) {
		var n = !1;
		t && t.length > 0 && (n |= r.drawing.invalidate(t)), n && c();
	}), dZ(r);
}, e(dH, "getBGColor"), e(dK, "getLabelLines");
var dU = e(function(e, t) {
	return function(n) {
		var r = e(n), a = dK(n, t);
		return a.length > 1 ? a.map(function(e, t) {
			return "".concat(r, "_").concat(t);
		}) : r;
	};
}, "getStyleKeysForLabel"), dG = e(function(e, t) {
	return function(n, r) {
		var a = e(n);
		if ("string" == typeof r) {
			var i = r.indexOf("_");
			if (i > 0) {
				var o = Number(r.substring(i + 1)), s = dK(n, t), l = a.h / s.length, u = l * o, c = a.y1 + u;
				return {
					x1: a.x1,
					w: a.w,
					y1: c,
					h: l,
					yOffset: u
				};
			}
		}
		return a;
	};
}, "getBoundingBoxForLabel");
function dZ(e) {
	var t = e.render;
	e.render = function(n) {
		n = n || {};
		var r = e.cy;
		e.webgl && (r.zoom() > 7.99 ? (d$(e), t.call(e, n)) : (dQ(e), d6(e, n, dj)));
	};
	var n = e.matchCanvasSize;
	e.matchCanvasSize = function(t) {
		n.call(e, t), e.pickingFrameBuffer.setFramebufferAttachmentSizes(e.canvasWidth, e.canvasHeight), e.pickingFrameBuffer.needsDraw = !0;
	}, e.findNearestElements = function(t, n, r, a) {
		return d4(e, t, n);
	};
	var r = e.invalidateCachedZSortedEles;
	e.invalidateCachedZSortedEles = function() {
		r.call(e), e.pickingFrameBuffer.needsDraw = !0;
	};
	var a = e.notify;
	e.notify = function(t, n) {
		a.call(e, t, n), "viewport" === t || "bounds" === t ? e.pickingFrameBuffer.needsDraw = !0 : "background" === t && e.drawing.invalidate(n, { type: "node-body" });
	};
}
function d$(e) {
	var t = e.data.contexts[e.WEBGL];
	t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
}
function dQ(t) {
	var n = e(function(e) {
		e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t.canvasWidth, t.canvasHeight), e.restore();
	}, "clear");
	n(t.data.contexts[t.NODE]), n(t.data.contexts[t.DRAG]);
}
function dJ(e) {
	var t = e.canvasWidth, n = e.canvasHeight, r = du(e), a = r.pan, i = r.zoom, o = dS();
	d_(o, o, [a.x, a.y]), dA(o, o, [i, i]);
	var s = dS();
	dM(s, t, n);
	var l = dS();
	return dB(l, s, o), l;
}
function d0(e, t) {
	var n = e.canvasWidth, r = e.canvasHeight, a = du(e), i = a.pan, o = a.zoom;
	t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, n, r), t.translate(i.x, i.y), t.scale(o, o);
}
function d1(e, t) {
	e.drawSelectionRectangle(t, function(t) {
		return d0(e, t);
	});
}
function d2(e) {
	var t = e.data.contexts[e.NODE];
	t.save(), d0(e, t), t.strokeStyle = "rgba(0, 0, 0, 0.3)", t.beginPath(), t.moveTo(-1e3, 0), t.lineTo(1e3, 0), t.stroke(), t.beginPath(), t.moveTo(0, -1e3), t.lineTo(0, 1e3), t.stroke(), t.restore();
}
function d5(t) {
	var n = e(function(e, n, r) {
		for (var a = e.atlasManager.getAtlasCollection(n), i = t.data.contexts[t.NODE], o = a.atlases, s = 0; s < o.length; s++) {
			var l = o[s].canvas;
			if (l) {
				var u = l.width, c = l.height, d = u * s, h = l.height * r;
				i.save(), i.scale(.4, .4), i.drawImage(l, d, h), i.strokeStyle = "black", i.rect(d, h, u, c), i.stroke(), i.restore();
			}
		}
	}, "draw"), r = 0;
	n(t.drawing, "node", r++), n(t.drawing, "label", r++);
}
function d3(e, t, n, r, a) {
	var i = du(e), o = f(dd(e, i.pan, i.zoom, t, n), 2), s = o[0], l = o[1], u = e.data.contexts[e.WEBGL];
	u.bindFramebuffer(u.FRAMEBUFFER, e.pickingFrameBuffer), e.pickingFrameBuffer.needsDraw && (u.viewport(0, 0, u.canvas.width, u.canvas.height), d6(e, null, dX), e.pickingFrameBuffer.needsDraw = !1);
	var c = new Uint8Array(144);
	u.readPixels(s - 3, l - 3, 6, 6, u.RGBA, u.UNSIGNED_BYTE, c), u.bindFramebuffer(u.FRAMEBUFFER, null);
	for (var d = /* @__PURE__ */ new Set(), h = 0; h < 36; h++) {
		var p = dv(c.slice(4 * h, 4 * h + 4)) - 1;
		p >= 0 && d.add(p);
	}
	return d;
}
function d4(e, t, n) {
	var r, a, i, o = d3(e, t, n), l = e.getCachedZSortedEles(), u = s(o);
	try {
		for (u.s(); !(i = u.n()).done;) {
			var c = l[i.value];
			if (!r && c.isNode() && (r = c), !a && c.isEdge() && (a = c), r && a) break;
		}
	} catch (e) {
		u.e(e);
	} finally {
		u.f();
	}
	return [r, a].filter(Boolean);
}
function d9(e, t, n) {
	var r = e.drawing;
	t += 1, n.isNode() ? (r.drawNode(n, t, "node-underlay"), r.drawNode(n, t, "node-body"), r.drawTexture(n, t, "label"), r.drawNode(n, t, "node-overlay")) : (r.drawEdgeLine(n, t), r.drawEdgeArrow(n, t, "source"), r.drawEdgeArrow(n, t, "target"), r.drawTexture(n, t, "label"), r.drawTexture(n, t, "edge-source-label"), r.drawTexture(n, t, "edge-target-label"));
}
function d6(e, t, n) {
	e.webglDebug && (g = performance.now());
	var r = e.drawing, a = 0;
	if (n.screen && e.data.canvasNeedsRedraw[e.SELECT_BOX] && d1(e, t), e.data.canvasNeedsRedraw[e.NODE] || n.picking) {
		var i = e.data.contexts[e.WEBGL];
		n.screen ? (i.clearColor(0, 0, 0, 0), i.enable(i.BLEND), i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA)) : i.disable(i.BLEND), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), i.viewport(0, 0, i.canvas.width, i.canvas.height);
		var o = dJ(e), l = e.getCachedZSortedEles();
		if (a = l.length, r.startFrame(o, n), n.screen) {
			for (var u = 0; u < l.nondrag.length; u++) d9(e, u, l.nondrag[u]);
			for (var c = 0; c < l.drag.length; c++) d9(e, c, l.drag[c]);
		} else if (n.picking) for (var d = 0; d < l.length; d++) d9(e, d, l[d]);
		r.endFrame(), n.screen && e.webglDebugShowAtlases && (d2(e), d5(e)), e.data.canvasNeedsRedraw[e.NODE] = !1, e.data.canvasNeedsRedraw[e.DRAG] = !1;
	}
	if (e.webglDebug) {
		var h = Math.ceil(performance.now() - g), f = r.getDebugInfo(), p = [
			"".concat(a, " elements"),
			"".concat(f.totalInstances, " instances"),
			"".concat(f.batchCount, " batches"),
			"".concat(f.totalAtlases, " atlases"),
			"".concat(f.wrappedCount, " wrapped textures"),
			"".concat(f.simpleCount, " simple shapes")
		].join(", ");
		console.log("WebGL (".concat(n.name, ") - frame time ").concat(h, "ms")), console.log("Totals:"), console.log("  ".concat(p)), console.log("Texture Atlases Used:");
		var g, v, y = s(f.atlasInfo);
		try {
			for (y.s(); !(v = y.n()).done;) {
				var m = v.value;
				console.log("  ".concat(m.type, ": ").concat(m.keyCount, " keys, ").concat(m.atlasCount, " atlases"));
			}
		} catch (e) {
			y.e(e);
		} finally {
			y.f();
		}
		console.log("");
	}
	e.data.gc && (console.log("Garbage Collect!"), e.data.gc = !1, r.gc());
}
e(dZ, "overrideCanvasRendererFunctions"), e(d$, "clearWebgl"), e(dQ, "clearCanvas"), e(dJ, "createPanZoomMatrix"), e(d0, "setContextTransform"), e(d1, "drawSelectionRectangle"), e(d2, "drawAxes"), e(d5, "drawAtlases"), e(d3, "getPickingIndexes"), e(d4, "findNearestElementsWebgl"), e(d9, "drawEle"), e(d6, "renderWebgl");
var d8 = {};
d8.drawPolygonPath = function(e, t, n, r, a, i) {
	var o = r / 2, s = a / 2;
	e.beginPath && e.beginPath(), e.moveTo(t + o * i[0], n + s * i[1]);
	for (var l = 1; l < i.length / 2; l++) e.lineTo(t + o * i[2 * l], n + s * i[2 * l + 1]);
	e.closePath();
}, d8.drawRoundPolygonPath = function(e, t, n, r, a, i, o) {
	o.forEach(function(t) {
		return cd(e, t);
	}), e.closePath();
}, d8.drawRoundRectanglePath = function(e, t, n, r, a, i) {
	var o = r / 2, s = a / 2, l = "auto" === i ? n9(r, a) : Math.min(i, s, o);
	e.beginPath && e.beginPath(), e.moveTo(t, n - s), e.arcTo(t + o, n - s, t + o, n, l), e.arcTo(t + o, n + s, t, n + s, l), e.arcTo(t - o, n + s, t - o, n, l), e.arcTo(t - o, n - s, t, n - s, l), e.lineTo(t, n - s), e.closePath();
}, d8.drawBottomRoundRectanglePath = function(e, t, n, r, a, i) {
	var o = r / 2, s = a / 2, l = "auto" === i ? n9(r, a) : i;
	e.beginPath && e.beginPath(), e.moveTo(t, n - s), e.lineTo(t + o, n - s), e.lineTo(t + o, n), e.arcTo(t + o, n + s, t, n + s, l), e.arcTo(t - o, n + s, t - o, n, l), e.lineTo(t - o, n - s), e.lineTo(t, n - s), e.closePath();
}, d8.drawCutRectanglePath = function(e, t, n, r, a, i, o) {
	var s = r / 2, l = a / 2, u = "auto" === o ? n8() : o;
	e.beginPath && e.beginPath(), e.moveTo(t - s + u, n - l), e.lineTo(t + s - u, n - l), e.lineTo(t + s, n - l + u), e.lineTo(t + s, n + l - u), e.lineTo(t + s - u, n + l), e.lineTo(t - s + u, n + l), e.lineTo(t - s, n + l - u), e.lineTo(t - s, n - l + u), e.closePath();
}, d8.drawBarrelPath = function(e, t, n, r, a) {
	var i = r / 2, o = a / 2, s = t - i, l = t + i, u = n - o, c = n + o, d = re(r, a), h = d.widthOffset, f = d.heightOffset, p = d.ctrlPtOffsetPct * h;
	e.beginPath && e.beginPath(), e.moveTo(s, u + f), e.lineTo(s, c - f), e.quadraticCurveTo(s + p, c, s + h, c), e.lineTo(l - h, c), e.quadraticCurveTo(l - p, c, l, c - f), e.lineTo(l, u + f), e.quadraticCurveTo(l - p, u, l - h, u), e.lineTo(s + h, u), e.quadraticCurveTo(s + p, u, s, u + f), e.closePath();
};
var d7 = {}, he = {}, ht = Math.PI / 40;
for (w = 0 * Math.PI; w < 2 * Math.PI; w += ht) d7[w] = Math.sin(w), he[w] = Math.cos(w);
d8.drawEllipsePath = function(e, t, n, r, a) {
	if (e.beginPath && e.beginPath(), e.ellipse) e.ellipse(t, n, r / 2, a / 2, 0, 0, 2 * Math.PI);
	else for (var i, o, s = r / 2, l = a / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += ht) i = t - s * d7[u] * 0 + s * he[u] * 1, o = n + l * he[u] * 0 + l * d7[u] * 1, 0 === u ? e.moveTo(i, o) : e.lineTo(i, o);
	e.closePath();
};
var hn = {};
function hr(e, t) {
	for (var n = atob(e), r = new ArrayBuffer(n.length), a = new Uint8Array(r), i = 0; i < n.length; i++) a[i] = n.charCodeAt(i);
	return new Blob([r], { type: t });
}
function ha(e) {
	var t = e.indexOf(",");
	return e.substr(t + 1);
}
function hi(t, n, r) {
	var a = e(function() {
		return n.toDataURL(r, t.quality);
	}, "getB64Uri");
	switch (t.output) {
		case "blob-promise": return new ah(function(e, a) {
			try {
				n.toBlob(function(t) {
					null != t ? e(t) : a(Error("`canvas.toBlob()` sent a null value in its callback"));
				}, r, t.quality);
			} catch (e) {
				a(e);
			}
		});
		case "blob": return hr(ha(a()), r);
		case "base64": return ha(a());
		default: return a();
	}
}
hn.createBuffer = function(e, t) {
	var n = document.createElement("canvas");
	return n.width = e, n.height = t, [n, n.getContext("2d")];
}, hn.bufferCanvasImage = function(e) {
	var t = this.cy, n = t.mutableElements().boundingBox(), r = this.findContainerClientCoords(), a = e.full ? Math.ceil(n.w) : r[2], i = e.full ? Math.ceil(n.h) : r[3], o = I(e.maxWidth) || I(e.maxHeight), s = this.getPixelRatio(), l = 1;
	if (void 0 !== e.scale) a *= e.scale, i *= e.scale, l = e.scale;
	else if (o) {
		var u = Infinity, c = Infinity;
		I(e.maxWidth) && (u = l * e.maxWidth / a), I(e.maxHeight) && (c = l * e.maxHeight / i), a *= l = Math.min(u, c), i *= l;
	}
	o || (a *= s, i *= s, l *= s);
	var d = document.createElement("canvas");
	d.width = a, d.height = i, d.style.width = a + "px", d.style.height = i + "px";
	var h = d.getContext("2d");
	if (a > 0 && i > 0) {
		h.clearRect(0, 0, a, i), h.globalCompositeOperation = "source-over";
		var f = this.getCachedZSortedEles();
		if (e.full) h.translate(-n.x1 * l, -n.y1 * l), h.scale(l, l), this.drawElements(h, f), h.scale(1 / l, 1 / l), h.translate(n.x1 * l, n.y1 * l);
		else {
			var p = t.pan(), g = {
				x: p.x * l,
				y: p.y * l
			};
			l *= t.zoom(), h.translate(g.x, g.y), h.scale(l, l), this.drawElements(h, f), h.scale(1 / l, 1 / l), h.translate(-g.x, -g.y);
		}
		e.bg && (h.globalCompositeOperation = "destination-over", h.fillStyle = e.bg, h.rect(0, 0, a, i), h.fill());
	}
	return d;
}, e(hr, "b64ToBlob"), e(ha, "b64UriToB64"), e(hi, "output"), hn.png = function(e) {
	return hi(e, this.bufferCanvasImage(e), "image/png");
}, hn.jpg = function(e) {
	return hi(e, this.bufferCanvasImage(e), "image/jpeg");
};
var ho = {};
ho.nodeShapeImpl = function(e, t, n, r, a, i, o, s) {
	switch (e) {
		case "ellipse": return this.drawEllipsePath(t, n, r, a, i);
		case "polygon": return this.drawPolygonPath(t, n, r, a, i, o);
		case "round-polygon": return this.drawRoundPolygonPath(t, n, r, a, i, o, s);
		case "roundrectangle":
		case "round-rectangle": return this.drawRoundRectanglePath(t, n, r, a, i, s);
		case "cutrectangle":
		case "cut-rectangle": return this.drawCutRectanglePath(t, n, r, a, i, o, s);
		case "bottomroundrectangle":
		case "bottom-round-rectangle": return this.drawBottomRoundRectanglePath(t, n, r, a, i, s);
		case "barrel": return this.drawBarrelPath(t, n, r, a, i);
	}
};
var hs = hl.prototype;
function hl(t) {
	var n = this, r = n.cy.window().document;
	t.webgl && (hs.CANVAS_LAYERS = n.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), n.data = {
		canvases: Array(hs.CANVAS_LAYERS),
		contexts: Array(hs.CANVAS_LAYERS),
		canvasNeedsRedraw: Array(hs.CANVAS_LAYERS),
		bufferCanvases: Array(hs.BUFFER_COUNT),
		bufferContexts: Array(hs.CANVAS_LAYERS)
	};
	var a = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
	n.data.canvasContainer = r.createElement("div");
	var o = n.data.canvasContainer.style;
	n.data.canvasContainer.style[a] = i, o.position = "relative", o.zIndex = "0", o.overflow = "hidden";
	var s = t.cy.container();
	s.appendChild(n.data.canvasContainer), s.style[a] = i;
	var l = {
		"-webkit-user-select": "none",
		"-moz-user-select": "-moz-none",
		"user-select": "none",
		"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
		"outline-style": "none"
	};
	K() && (l["-ms-touch-action"] = "none", l["touch-action"] = "none");
	for (var u = 0; u < hs.CANVAS_LAYERS; u++) {
		var c = n.data.canvases[u] = r.createElement("canvas"), d = hs.CANVAS_TYPES[u];
		n.data.contexts[u] = c.getContext(d), n.data.contexts[u] || e3("Could not create canvas of type " + d), Object.keys(l).forEach(function(e) {
			c.style[e] = l[e];
		}), c.style.position = "absolute", c.setAttribute("data-id", "layer" + u), c.style.zIndex = String(hs.CANVAS_LAYERS - u), n.data.canvasContainer.appendChild(c), n.data.canvasNeedsRedraw[u] = !1;
	}
	n.data.topCanvas = n.data.canvases[0], n.data.canvases[hs.NODE].setAttribute("data-id", "layer" + hs.NODE + "-node"), n.data.canvases[hs.SELECT_BOX].setAttribute("data-id", "layer" + hs.SELECT_BOX + "-selectbox"), n.data.canvases[hs.DRAG].setAttribute("data-id", "layer" + hs.DRAG + "-drag"), n.data.canvases[hs.WEBGL] && n.data.canvases[hs.WEBGL].setAttribute("data-id", "layer" + hs.WEBGL + "-webgl");
	for (var u = 0; u < hs.BUFFER_COUNT; u++) n.data.bufferCanvases[u] = r.createElement("canvas"), n.data.bufferContexts[u] = n.data.bufferCanvases[u].getContext("2d"), n.data.bufferCanvases[u].style.position = "absolute", n.data.bufferCanvases[u].setAttribute("data-id", "buffer" + u), n.data.bufferCanvases[u].style.zIndex = String(-u - 1), n.data.bufferCanvases[u].style.visibility = "hidden";
	n.pathsEnabled = !0;
	var h = nw(), f = e(function(e) {
		return {
			x: (e.x1 + e.x2) / 2,
			y: (e.y1 + e.y2) / 2
		};
	}, "getBoxCenter"), p = e(function(e) {
		return {
			x: -e.w / 2,
			y: -e.h / 2
		};
	}, "getCenterOffset"), g = e(function(e) {
		var t = e[0]._private;
		return t.oldBackgroundTimestamp !== t.backgroundTimestamp;
	}, "backgroundTimestampHasChanged"), v = e(function(e) {
		return e[0]._private.nodeKey;
	}, "getStyleKey"), y = e(function(e) {
		return e[0]._private.labelStyleKey;
	}, "getLabelKey"), m = e(function(e) {
		return e[0]._private.sourceLabelStyleKey;
	}, "getSourceLabelKey"), x = e(function(e) {
		return e[0]._private.targetLabelStyleKey;
	}, "getTargetLabelKey"), w = e(function(e, t, r, a, i) {
		return n.drawElement(e, t, r, !1, !1, i);
	}, "drawElement"), E = e(function(e, t, r, a, i) {
		return n.drawElementText(e, t, r, a, "main", i);
	}, "drawLabel"), C = e(function(e, t, r, a, i) {
		return n.drawElementText(e, t, r, a, "source", i);
	}, "drawSourceLabel"), T = e(function(e, t, r, a, i) {
		return n.drawElementText(e, t, r, a, "target", i);
	}, "drawTargetLabel"), k = e(function(e) {
		return e.boundingBox(), e[0]._private.bodyBounds;
	}, "getElementBox"), S = e(function(e) {
		return e.boundingBox(), e[0]._private.labelBounds.main || h;
	}, "getLabelBox"), P = e(function(e) {
		return e.boundingBox(), e[0]._private.labelBounds.source || h;
	}, "getSourceLabelBox"), B = e(function(e) {
		return e.boundingBox(), e[0]._private.labelBounds.target || h;
	}, "getTargetLabelBox"), _ = e(function(e, t) {
		return t;
	}, "isLabelVisibleAtScale"), D = e(function(e) {
		return f(k(e));
	}, "getElementRotationPoint"), A = e(function(e, t, n) {
		var r = e ? e + "-" : "";
		return {
			x: t.x + n.pstyle(r + "text-margin-x").pfValue,
			y: t.y + n.pstyle(r + "text-margin-y").pfValue
		};
	}, "addTextMargin"), M = e(function(e, t, n) {
		var r = e[0]._private.rscratch;
		return {
			x: r[t],
			y: r[n]
		};
	}, "getRsPt"), R = e(function(e) {
		return A("", M(e, "labelX", "labelY"), e);
	}, "getLabelRotationPoint"), I = e(function(e) {
		return A("source", M(e, "sourceLabelX", "sourceLabelY"), e);
	}, "getSourceLabelRotationPoint"), L = e(function(e) {
		return A("target", M(e, "targetLabelX", "targetLabelY"), e);
	}, "getTargetLabelRotationPoint"), N = e(function(e) {
		return p(k(e));
	}, "getElementRotationOffset"), z = e(function(e) {
		return p(P(e));
	}, "getSourceLabelRotationOffset"), O = e(function(e) {
		return p(B(e));
	}, "getTargetLabelRotationOffset"), F = e(function(e) {
		var t = S(e), n = p(S(e));
		if (e.isNode()) {
			switch (e.pstyle("text-halign").value) {
				case "left":
					n.x = -t.w - (t.leftPad || 0);
					break;
				case "right": n.x = -(t.rightPad || 0);
			}
			switch (e.pstyle("text-valign").value) {
				case "top":
					n.y = -t.h - (t.topPad || 0);
					break;
				case "bottom": n.y = -(t.botPad || 0);
			}
		}
		return n;
	}, "getLabelRotationOffset"), V = n.data.eleTxrCache = new cV(n, {
		getKey: v,
		doesEleInvalidateKey: g,
		drawElement: w,
		getBoundingBox: k,
		getRotationPoint: D,
		getRotationOffset: N,
		allowEdgeTxrCaching: !1,
		allowParentTxrCaching: !1
	}), q = n.data.lblTxrCache = new cV(n, {
		getKey: y,
		drawElement: E,
		getBoundingBox: S,
		getRotationPoint: R,
		getRotationOffset: F,
		isVisible: _
	}), j = n.data.slbTxrCache = new cV(n, {
		getKey: m,
		drawElement: C,
		getBoundingBox: P,
		getRotationPoint: I,
		getRotationOffset: z,
		isVisible: _
	}), X = n.data.tlbTxrCache = new cV(n, {
		getKey: x,
		drawElement: T,
		getBoundingBox: B,
		getRotationPoint: L,
		getRotationOffset: O,
		isVisible: _
	}), Y = n.data.lyrTxrCache = new cX(n);
	n.onUpdateEleCalcs(e(function(e, t) {
		V.invalidateElements(t), q.invalidateElements(t), j.invalidateElements(t), X.invalidateElements(t), Y.invalidateElements(t);
		for (var n = 0; n < t.length; n++) {
			var r = t[n]._private;
			r.oldBackgroundTimestamp = r.backgroundTimestamp;
		}
	}, "invalidateTextureCaches"));
	var W = e(function(e) {
		for (var t = 0; t < e.length; t++) Y.enqueueElementRefinement(e[t].ele);
	}, "refineInLayers");
	V.onDequeue(W), q.onDequeue(W), j.onDequeue(W), X.onDequeue(W), t.webgl && n.initWebgl(t, {
		getStyleKey: v,
		getLabelKey: y,
		getSourceLabelKey: m,
		getTargetLabelKey: x,
		drawElement: w,
		drawLabel: E,
		drawSourceLabel: C,
		drawTargetLabel: T,
		getElementBox: k,
		getLabelBox: S,
		getSourceLabelBox: P,
		getTargetLabelBox: B,
		getElementRotationPoint: D,
		getElementRotationOffset: N,
		getLabelRotationPoint: R,
		getSourceLabelRotationPoint: I,
		getTargetLabelRotationPoint: L,
		getLabelRotationOffset: F,
		getSourceLabelRotationOffset: z,
		getTargetLabelRotationOffset: O
	});
}
hs.CANVAS_LAYERS = 3, hs.SELECT_BOX = 0, hs.DRAG = 1, hs.NODE = 2, hs.WEBGL = 3, hs.CANVAS_TYPES = [
	"2d",
	"2d",
	"2d",
	"webgl2"
], hs.BUFFER_COUNT = 3, hs.TEXTURE_BUFFER = 0, hs.MOTIONBLUR_BUFFER_NODE = 1, hs.MOTIONBLUR_BUFFER_DRAG = 2, e(hl, "CanvasRenderer"), hs.redrawHint = function(e, t) {
	switch (e) {
		case "eles":
			this.data.canvasNeedsRedraw[hs.NODE] = t;
			break;
		case "drag":
			this.data.canvasNeedsRedraw[hs.DRAG] = t;
			break;
		case "select":
			this.data.canvasNeedsRedraw[hs.SELECT_BOX] = t;
			break;
		case "gc": this.data.gc = !0;
	}
};
var hu = "u" > typeof Path2D;
hs.path2dEnabled = function(e) {
	if (void 0 === e) return this.pathsEnabled;
	this.pathsEnabled = !!e;
}, hs.usePaths = function() {
	return hu && this.pathsEnabled;
}, hs.setImgSmoothing = function(e, t) {
	null != e.imageSmoothingEnabled ? e.imageSmoothingEnabled = t : (e.webkitImageSmoothingEnabled = t, e.mozImageSmoothingEnabled = t, e.msImageSmoothingEnabled = t);
}, hs.getImgSmoothing = function(e) {
	return null != e.imageSmoothingEnabled ? e.imageSmoothingEnabled : e.webkitImageSmoothingEnabled || e.mozImageSmoothingEnabled || e.msImageSmoothingEnabled;
}, hs.makeOffscreenCanvas = function(e, t) {
	var n;
	return (typeof OffscreenCanvas > "u" ? "undefined" : y(OffscreenCanvas)) !== "undefined" ? n = new OffscreenCanvas(e, t) : ((n = this.cy.window().document.createElement("canvas")).width = e, n.height = t), n;
}, [
	cK,
	cJ,
	c9,
	c8,
	c7,
	dn,
	da,
	dW,
	d8,
	hn,
	ho
].forEach(function(e) {
	es(hs, e);
});
var hc = [{
	type: "layout",
	extensions: uH
}, {
	type: "renderer",
	extensions: [
		{
			name: "null",
			impl: uK
		},
		{
			name: "base",
			impl: cR
		},
		{
			name: "canvas",
			impl: hl
		}
	]
}], hd = {}, hh = {};
function hf(t, n, r) {
	var a = r, i = e(function(e) {
		e9("Can not register `" + n + "` for `" + t + "` since `" + e + "` already exists in the prototype and can not be overridden");
	}, "overrideErr");
	if ("core" === t) {
		if (ua.prototype[n]) return i(n);
		ua.prototype[n] = r;
	} else if ("collection" === t) {
		if (lA.prototype[n]) return i(n);
		lA.prototype[n] = r;
	} else if ("layout" === t) {
		for (var o = e(function(e) {
			this.options = e, r.call(this, e), M(this._private) || (this._private = {}), this._private.cy = e.cy, this._private.listeners = [], this.createEmitter();
		}, "Layout"), s = o.prototype = Object.create(r.prototype), l = [], u = 0; u < l.length; u++) {
			var c = l[u];
			s[c] = s[c] || function() {
				return this;
			};
		}
		s.start && !s.run ? s.run = function() {
			return this.start(), this;
		} : !s.start && s.run && (s.start = function() {
			return this.run(), this;
		});
		var d = r.prototype.stop;
		s.stop = function() {
			var e = this.options;
			if (e && e.animate) {
				var t = this.animations;
				if (t) for (var n = 0; n < t.length; n++) t[n].stop();
			}
			return d ? d.call(this) : this.emit("layoutstop"), this;
		}, s.destroy || (s.destroy = function() {
			return this;
		}), s.cy = function() {
			return this._private.cy;
		};
		var h = e(function(e) {
			return e._private.cy;
		}, "getCy"), f = {
			addEventFields: e(function(e, t) {
				t.layout = e, t.cy = h(e), t.target = e;
			}, "addEventFields"),
			bubble: e(function() {
				return !0;
			}, "bubble"),
			parent: e(function(e) {
				return h(e);
			}, "parent")
		};
		es(s, {
			createEmitter: e(function() {
				return this._private.emitter = new le(f, this), this;
			}, "createEmitter"),
			emitter: e(function() {
				return this._private.emitter;
			}, "emitter"),
			on: e(function(e, t) {
				return this.emitter().on(e, t), this;
			}, "on"),
			one: e(function(e, t) {
				return this.emitter().one(e, t), this;
			}, "one"),
			once: e(function(e, t) {
				return this.emitter().one(e, t), this;
			}, "once"),
			removeListener: e(function(e, t) {
				return this.emitter().removeListener(e, t), this;
			}, "removeListener"),
			removeAllListeners: e(function() {
				return this.emitter().removeAllListeners(), this;
			}, "removeAllListeners"),
			emit: e(function(e, t) {
				return this.emitter().emit(e, t), this;
			}, "emit")
		}), oH.eventAliasesOn(s), a = o;
	} else if ("renderer" === t && "null" !== n && "base" !== n) {
		var p = hp("renderer", "base"), g = p.prototype, v = r.prototype, y = e(function() {
			p.apply(this, arguments), r.apply(this, arguments);
		}, "Renderer"), m = y.prototype;
		for (var x in g) {
			var w = g[x];
			if (null != v[x]) return i(x);
			m[x] = w;
		}
		for (var E in v) m[E] = v[E];
		g.clientFunctions.forEach(function(e) {
			m[e] = m[e] || function() {
				e3("Renderer does not implement `renderer." + e + "()` on its prototype");
			};
		}), a = y;
	} else if ("__proto__" === t || "constructor" === t || "prototype" === t) return e3(t + " is an illegal type to be registered, possibly lead to prototype pollutions");
	return ep({
		map: hd,
		keys: [t, n],
		value: a
	});
}
function hp(e, t) {
	return eg({
		map: hd,
		keys: [e, t]
	});
}
function hg(e, t, n, r, a) {
	return ep({
		map: hh,
		keys: [
			e,
			t,
			n,
			r
		],
		value: a
	});
}
function hv(e, t, n, r) {
	return eg({
		map: hh,
		keys: [
			e,
			t,
			n,
			r
		]
	});
}
e(hf, "setExtension"), e(hp, "getExtension"), e(hg, "setModule"), e(hv, "getModule");
var hy = e(function() {
	return 2 == arguments.length ? hp.apply(null, arguments) : 3 == arguments.length ? hf.apply(null, arguments) : 4 == arguments.length ? hv.apply(null, arguments) : 5 == arguments.length ? hg.apply(null, arguments) : void e3("Invalid extension access syntax");
}, "extension");
ua.prototype.extension = hy, hc.forEach(function(e) {
	e.extensions.forEach(function(t) {
		hf(e.type, t.name, t.impl);
	});
});
var hm = e(function() {
	if (!(this instanceof hm)) return new hm();
	this.length = 0;
}, "Stylesheet"), hb = hm.prototype;
hb.instanceString = function() {
	return "stylesheet";
}, hb.selector = function(e) {
	return this[this.length++] = {
		selector: e,
		properties: []
	}, this;
}, hb.css = function(e, t) {
	var n = this.length - 1;
	if (_(e)) this[n].properties.push({
		name: e,
		value: t
	});
	else if (M(e)) for (var r = Object.keys(e), a = 0; a < r.length; a++) {
		var i = r[a], o = e[i];
		if (null != o) {
			var s = l7.properties[i] || l7.properties[Z(i)];
			if (null != s) {
				var l = s.name;
				this[n].properties.push({
					name: l,
					value: o
				});
			}
		}
	}
	return this;
}, hb.style = hb.css, hb.generateStyle = function(e) {
	var t = new l7(e);
	return this.appendToStyle(t);
}, hb.appendToStyle = function(e) {
	for (var t = 0; t < this.length; t++) {
		var n = this[t], r = n.selector, a = n.properties;
		e.selector(r);
		for (var i = 0; i < a.length; i++) {
			var o = a[i];
			e.css(o.name, o.value);
		}
	}
	return e;
};
var hx = e(function(e) {
	return (void 0 === e && (e = {}), M(e)) ? new ua(e) : _(e) ? hy.apply(hy, arguments) : void 0;
}, "cytoscape");
hx.use = function(e) {
	var t = Array.prototype.slice.call(arguments, 1);
	return t.unshift(hx), e.apply(null, t), this;
}, hx.warnings = function(e) {
	return e4(e);
}, hx.version = "3.33.1", hx.stylesheet = hx.Stylesheet = hm;
export { hx as t };
