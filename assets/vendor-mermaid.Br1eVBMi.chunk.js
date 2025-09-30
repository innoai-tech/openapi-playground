import { Z as e } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
function t(e) {
	return typeof e > "u" || null === e;
}
function n(e) {
	return "object" == typeof e && null !== e;
}
function i(e, t) {
	var n, i = "";
	for (n = 0; n < t; n += 1) i += e;
	return i;
}
function r(e) {
	return 0 === e && -Infinity == 1 / e;
}
function o(e, t) {
	var n = "", i = e.reason || "(unknown reason)";
	return e.mark ? (e.mark.name && (n += "in \"" + e.mark.name + "\" "), n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (n += `

` + e.mark.snippet), i + " " + n) : i;
}
function a(e, t) {
	Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = o(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack || "";
}
function l(e, t, n, i, r) {
	var o = "", a = "", l = Math.floor(r / 2) - 1;
	return i - t > l && (t = i - l + (o = " ... ").length), n - i > l && (n = i + l - (a = " ...").length), {
		str: o + e.slice(t, n).replace(/\t/g, "→") + a,
		pos: i - t + o.length
	};
}
function c(e, t) {
	return i(" ", t - e.length) + e;
}
function s(e, t) {
	if (t = Object.create(t || null), !e.buffer) return null;
	t.maxLength || (t.maxLength = 79), "number" != typeof t.indent && (t.indent = 1), "number" != typeof t.linesBefore && (t.linesBefore = 3), "number" != typeof t.linesAfter && (t.linesAfter = 2);
	for (var n, r = /\r?\n|\r|\0/g, o = [0], a = [], s = -1; n = r.exec(e.buffer);) a.push(n.index), o.push(n.index + n[0].length), e.position <= n.index && s < 0 && (s = o.length - 2);
	s < 0 && (s = o.length - 1);
	var u, p, f = "", d = Math.min(e.line + t.linesAfter, a.length).toString().length, h = t.maxLength - (t.indent + d + 3);
	for (u = 1; u <= t.linesBefore && !(s - u < 0); u++) p = l(e.buffer, o[s - u], a[s - u], e.position - (o[s] - o[s - u]), h), f = i(" ", t.indent) + c((e.line - u + 1).toString(), d) + " | " + p.str + `
` + f;
	for (p = l(e.buffer, o[s], a[s], e.position, h), f += i(" ", t.indent) + c((e.line + 1).toString(), d) + " | " + p.str + `
` + i("-", t.indent + d + 3 + p.pos) + `^
`, u = 1; u <= t.linesAfter && !(s + u >= a.length); u++) p = l(e.buffer, o[s + u], a[s + u], e.position - (o[s] - o[s + u]), h), f += i(" ", t.indent) + c((e.line + u + 1).toString(), d) + " | " + p.str + `
`;
	return f.replace(/\n$/, "");
}
e(t, "isNothing"), e(n, "isObject"), e(function(e) {
	return Array.isArray(e) ? e : t(e) ? [] : [e];
}, "toArray"), e(function(e, t) {
	var n, i, r, o;
	if (t) for (o = Object.keys(t), n = 0, i = o.length; n < i; n += 1) e[r = o[n]] = t[r];
	return e;
}, "extend"), e(i, "repeat"), e(r, "isNegativeZero"), e(o, "formatError"), e(a, "YAMLException$1"), a.prototype = Object.create(Error.prototype), a.prototype.constructor = a, a.prototype.toString = e(function(e) {
	return this.name + ": " + o(this, e);
}, "toString"), e(l, "getLine"), e(c, "padStart"), e(s, "makeSnippet");
var u, p = [
	"kind",
	"multi",
	"resolve",
	"construct",
	"instanceOf",
	"predicate",
	"represent",
	"representName",
	"defaultStyle",
	"styleAliases"
], f = [
	"scalar",
	"sequence",
	"mapping"
];
function d(e) {
	var t = {};
	return null !== e && Object.keys(e).forEach(function(n) {
		e[n].forEach(function(e) {
			t[String(e)] = n;
		});
	}), t;
}
function h(e, t) {
	if (Object.keys(t = t || {}).forEach(function(t) {
		if (-1 === p.indexOf(t)) throw new a("Unknown option \"" + t + "\" is met in definition of \"" + e + "\" YAML type.");
	}), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
		return !0;
	}, this.construct = t.construct || function(e) {
		return e;
	}, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = d(t.styleAliases || null), -1 === f.indexOf(this.kind)) throw new a("Unknown kind \"" + this.kind + "\" is specified for \"" + e + "\" YAML type.");
}
function m(e, t) {
	var n = [];
	return e[t].forEach(function(e) {
		var t = n.length;
		n.forEach(function(n, i) {
			n.tag === e.tag && n.kind === e.kind && n.multi === e.multi && (t = i);
		}), n[t] = e;
	}), n;
}
function g() {
	var t, n, i = {
		scalar: {},
		sequence: {},
		mapping: {},
		fallback: {},
		multi: {
			scalar: [],
			sequence: [],
			mapping: [],
			fallback: []
		}
	};
	function r(e) {
		e.multi ? (i.multi[e.kind].push(e), i.multi.fallback.push(e)) : i[e.kind][e.tag] = i.fallback[e.tag] = e;
	}
	for (e(r, "collectType"), t = 0, n = arguments.length; t < n; t += 1) arguments[t].forEach(r);
	return i;
}
function y(e) {
	return this.extend(e);
}
e(d, "compileStyleAliases"), e(h, "Type$1"), e(m, "compileList"), e(g, "compileMap"), e(y, "Schema$1"), y.prototype.extend = e(function(e) {
	var t = [], n = [];
	if (e instanceof h) n.push(e);
	else if (Array.isArray(e)) n = n.concat(e);
	else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit))) e.implicit && (t = t.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
	else throw new a("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
	t.forEach(function(e) {
		if (!(e instanceof h)) throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");
		if (e.loadKind && "scalar" !== e.loadKind) throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
		if (e.multi) throw new a("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
	}), n.forEach(function(e) {
		if (!(e instanceof h)) throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");
	});
	var i = Object.create(y.prototype);
	return i.implicit = (this.implicit || []).concat(t), i.explicit = (this.explicit || []).concat(n), i.compiledImplicit = m(i, "implicit"), i.compiledExplicit = m(i, "explicit"), i.compiledTypeMap = g(i.compiledImplicit, i.compiledExplicit), i;
}, "extend");
var b = new y({ explicit: [
	new h("tag:yaml.org,2002:str", {
		kind: "scalar",
		construct: e(function(e) {
			return null !== e ? e : "";
		}, "construct")
	}),
	new h("tag:yaml.org,2002:seq", {
		kind: "sequence",
		construct: e(function(e) {
			return null !== e ? e : [];
		}, "construct")
	}),
	new h("tag:yaml.org,2002:map", {
		kind: "mapping",
		construct: e(function(e) {
			return null !== e ? e : {};
		}, "construct")
	})
] });
function v(e) {
	if (null === e) return !0;
	var t = e.length;
	return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e);
}
function A() {
	return null;
}
function k(e) {
	return null === e;
}
e(v, "resolveYamlNull"), e(A, "constructYamlNull"), e(k, "isNull");
var w = new h("tag:yaml.org,2002:null", {
	kind: "scalar",
	resolve: v,
	construct: A,
	predicate: k,
	represent: {
		canonical: e(function() {
			return "~";
		}, "canonical"),
		lowercase: e(function() {
			return "null";
		}, "lowercase"),
		uppercase: e(function() {
			return "NULL";
		}, "uppercase"),
		camelcase: e(function() {
			return "Null";
		}, "camelcase"),
		empty: e(function() {
			return "";
		}, "empty")
	},
	defaultStyle: "lowercase"
});
function x(e) {
	if (null === e) return !1;
	var t = e.length;
	return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e);
}
function C(e) {
	return "true" === e || "True" === e || "TRUE" === e;
}
function S(e) {
	return "[object Boolean]" === Object.prototype.toString.call(e);
}
e(x, "resolveYamlBoolean"), e(C, "constructYamlBoolean"), e(S, "isBoolean");
var O = new h("tag:yaml.org,2002:bool", {
	kind: "scalar",
	resolve: x,
	construct: C,
	predicate: S,
	represent: {
		lowercase: e(function(e) {
			return e ? "true" : "false";
		}, "lowercase"),
		uppercase: e(function(e) {
			return e ? "TRUE" : "FALSE";
		}, "uppercase"),
		camelcase: e(function(e) {
			return e ? "True" : "False";
		}, "camelcase")
	},
	defaultStyle: "lowercase"
});
function I(e) {
	return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function j(e) {
	return 48 <= e && e <= 55;
}
function T(e) {
	return 48 <= e && e <= 57;
}
function F(e) {
	if (null === e) return !1;
	var t, n = e.length, i = 0, r = !1;
	if (!n) return !1;
	if (("-" === (t = e[i]) || "+" === t) && (t = e[++i]), "0" === t) {
		if (i + 1 === n) return !0;
		if ("b" === (t = e[++i])) {
			for (i++; i < n; i++) if ("_" !== (t = e[i])) {
				if ("0" !== t && "1" !== t) return !1;
				r = !0;
			}
			return r && "_" !== t;
		}
		if ("x" === t) {
			for (i++; i < n; i++) if ("_" !== (t = e[i])) {
				if (!I(e.charCodeAt(i))) return !1;
				r = !0;
			}
			return r && "_" !== t;
		}
		if ("o" === t) {
			for (i++; i < n; i++) if ("_" !== (t = e[i])) {
				if (!j(e.charCodeAt(i))) return !1;
				r = !0;
			}
			return r && "_" !== t;
		}
	}
	if ("_" === t) return !1;
	for (; i < n; i++) if ("_" !== (t = e[i])) {
		if (!T(e.charCodeAt(i))) return !1;
		r = !0;
	}
	return !(!r || "_" === t);
}
function L(e) {
	var t, n = e, i = 1;
	if (-1 !== n.indexOf("_") && (n = n.replace(/_/g, "")), ("-" === (t = n[0]) || "+" === t) && ("-" === t && (i = -1), t = (n = n.slice(1))[0]), "0" === n) return 0;
	if ("0" === t) {
		if ("b" === n[1]) return i * parseInt(n.slice(2), 2);
		if ("x" === n[1]) return i * parseInt(n.slice(2), 16);
		if ("o" === n[1]) return i * parseInt(n.slice(2), 8);
	}
	return i * parseInt(n, 10);
}
function M(e) {
	return "[object Number]" === Object.prototype.toString.call(e) && e % 1 == 0 && !r(e);
}
e(I, "isHexCode"), e(j, "isOctCode"), e(T, "isDecCode"), e(F, "resolveYamlInteger"), e(L, "constructYamlInteger"), e(M, "isInteger");
var N = new h("tag:yaml.org,2002:int", {
	kind: "scalar",
	resolve: F,
	construct: L,
	predicate: M,
	represent: {
		binary: e(function(e) {
			return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
		}, "binary"),
		octal: e(function(e) {
			return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
		}, "octal"),
		decimal: e(function(e) {
			return e.toString(10);
		}, "decimal"),
		hexadecimal: e(function(e) {
			return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
		}, "hexadecimal")
	},
	defaultStyle: "decimal",
	styleAliases: {
		binary: [2, "bin"],
		octal: [8, "oct"],
		decimal: [10, "dec"],
		hexadecimal: [16, "hex"]
	}
}), E = RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Y(e) {
	return !(null === e || !E.test(e) || "_" === e[e.length - 1]);
}
function _(e) {
	var t, n;
	return n = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), ".inf" === t ? 1 === n ? Infinity : -Infinity : ".nan" === t ? NaN : n * parseFloat(t, 10);
}
e(Y, "resolveYamlFloat"), e(_, "constructYamlFloat");
var D = /^[-+]?[0-9]+e/;
function q(e, t) {
	var n;
	if (isNaN(e)) switch (t) {
		case "lowercase": return ".nan";
		case "uppercase": return ".NAN";
		case "camelcase": return ".NaN";
	}
	else if (Infinity === e) switch (t) {
		case "lowercase": return ".inf";
		case "uppercase": return ".INF";
		case "camelcase": return ".Inf";
	}
	else if (-Infinity === e) switch (t) {
		case "lowercase": return "-.inf";
		case "uppercase": return "-.INF";
		case "camelcase": return "-.Inf";
	}
	else if (r(e)) return "-0.0";
	return n = e.toString(10), D.test(n) ? n.replace("e", ".e") : n;
}
function B(e) {
	return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 != 0 || r(e));
}
e(q, "representYamlFloat"), e(B, "isFloat");
var U = new h("tag:yaml.org,2002:float", {
	kind: "scalar",
	resolve: Y,
	construct: _,
	predicate: B,
	represent: q,
	defaultStyle: "lowercase"
}), P = b.extend({ implicit: [
	w,
	O,
	N,
	U
] }), R = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), W = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function $(e) {
	return null !== e && (null !== R.exec(e) || null !== W.exec(e));
}
function K(e) {
	var t, n, i, r, o, a, l, c, s = 0, u = null;
	if (null === (t = R.exec(e)) && (t = W.exec(e)), null === t) throw Error("Date resolve error");
	if (n = +t[1], i = t[2] - 1, r = +t[3], !t[4]) return new Date(Date.UTC(n, i, r));
	if (o = +t[4], a = +t[5], l = +t[6], t[7]) {
		for (s = t[7].slice(0, 3); s.length < 3;) s += "0";
		s *= 1;
	}
	return t[9] && (u = (60 * t[10] + +(t[11] || 0)) * 6e4, "-" === t[9] && (u = -u)), c = new Date(Date.UTC(n, i, r, o, a, l, s)), u && c.setTime(c.getTime() - u), c;
}
function H(e) {
	return e.toISOString();
}
e($, "resolveYamlTimestamp"), e(K, "constructYamlTimestamp"), e(H, "representYamlTimestamp");
var Q = new h("tag:yaml.org,2002:timestamp", {
	kind: "scalar",
	resolve: $,
	construct: K,
	instanceOf: Date,
	represent: H
});
function G(e) {
	return "<<" === e || null === e;
}
e(G, "resolveYamlMerge");
var Z = new h("tag:yaml.org,2002:merge", {
	kind: "scalar",
	resolve: G
}), z = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function J(e) {
	if (null === e) return !1;
	var t, n, i = 0, r = e.length;
	for (n = 0; n < r; n++) if (!((t = z.indexOf(e.charAt(n))) > 64)) {
		if (t < 0) return !1;
		i += 6;
	}
	return i % 8 == 0;
}
function X(e) {
	var t, n, i = e.replace(/[\r\n=]/g, ""), r = i.length, o = 0, a = [];
	for (t = 0; t < r; t++) t % 4 == 0 && t && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(255 & o)), o = o << 6 | z.indexOf(i.charAt(t));
	return 0 == (n = r % 4 * 6) ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(255 & o)) : 18 === n ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : 12 === n && a.push(o >> 4 & 255), new Uint8Array(a);
}
function V(e) {
	var t, n, i = "", r = 0, o = e.length;
	for (t = 0; t < o; t++) t % 3 == 0 && t && (i += z[r >> 18 & 63], i += z[r >> 12 & 63], i += z[r >> 6 & 63], i += z[63 & r]), r = (r << 8) + e[t];
	return 0 == (n = o % 3) ? (i += z[r >> 18 & 63], i += z[r >> 12 & 63], i += z[r >> 6 & 63], i += z[63 & r]) : 2 === n ? (i += z[r >> 10 & 63], i += z[r >> 4 & 63], i += z[r << 2 & 63], i += z[64]) : 1 === n && (i += z[r >> 2 & 63], i += z[r << 4 & 63], i += z[64], i += z[64]), i;
}
function ee(e) {
	return "[object Uint8Array]" === Object.prototype.toString.call(e);
}
e(J, "resolveYamlBinary"), e(X, "constructYamlBinary"), e(V, "representYamlBinary"), e(ee, "isBinary");
var et = new h("tag:yaml.org,2002:binary", {
	kind: "scalar",
	resolve: J,
	construct: X,
	predicate: ee,
	represent: V
}), en = Object.prototype.hasOwnProperty, ei = Object.prototype.toString;
function er(e) {
	if (null === e) return !0;
	var t, n, i, r, o, a = [];
	for (t = 0, n = e.length; t < n; t += 1) {
		if (i = e[t], o = !1, "[object Object]" !== ei.call(i)) return !1;
		for (r in i) if (en.call(i, r)) if (o) return !1;
		else o = !0;
		if (!o || -1 !== a.indexOf(r)) return !1;
		a.push(r);
	}
	return !0;
}
function eo(e) {
	return null !== e ? e : [];
}
e(er, "resolveYamlOmap"), e(eo, "constructYamlOmap");
var ea = new h("tag:yaml.org,2002:omap", {
	kind: "sequence",
	resolve: er,
	construct: eo
}), el = Object.prototype.toString;
function ec(e) {
	var t, n, i, r, o;
	if (null === e) return !0;
	for (o = Array(e.length), t = 0, n = e.length; t < n; t += 1) {
		if (i = e[t], "[object Object]" !== el.call(i) || 1 !== (r = Object.keys(i)).length) return !1;
		o[t] = [r[0], i[r[0]]];
	}
	return !0;
}
function es(e) {
	var t, n, i, r, o;
	if (null === e) return [];
	for (o = Array(e.length), t = 0, n = e.length; t < n; t += 1) r = Object.keys(i = e[t]), o[t] = [r[0], i[r[0]]];
	return o;
}
e(ec, "resolveYamlPairs"), e(es, "constructYamlPairs");
var eu = new h("tag:yaml.org,2002:pairs", {
	kind: "sequence",
	resolve: ec,
	construct: es
}), ep = Object.prototype.hasOwnProperty;
function ef(e) {
	var t;
	if (null === e) return !0;
	for (t in e) if (ep.call(e, t) && null !== e[t]) return !1;
	return !0;
}
function ed(e) {
	return null !== e ? e : {};
}
e(ef, "resolveYamlSet"), e(ed, "constructYamlSet");
var eh = new h("tag:yaml.org,2002:set", {
	kind: "mapping",
	resolve: ef,
	construct: ed
}), em = P.extend({
	implicit: [Q, Z],
	explicit: [
		et,
		ea,
		eu,
		eh
	]
}), eg = Object.prototype.hasOwnProperty, ey = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, eb = /[\x85\u2028\u2029]/, ev = /[,\[\]\{\}]/, eA = /^(?:!|!!|![a-z\-]+!)$/i, ek = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function ew(e) {
	return Object.prototype.toString.call(e);
}
function ex(e) {
	return 10 === e || 13 === e;
}
function eC(e) {
	return 9 === e || 32 === e;
}
function eS(e) {
	return 9 === e || 32 === e || 10 === e || 13 === e;
}
function eO(e) {
	return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
}
function eI(e) {
	var t;
	return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1;
}
function ej(e) {
	return 120 === e ? 2 : 117 === e ? 4 : 8 * (85 === e);
}
function eT(e) {
	return 48 <= e && e <= 57 ? e - 48 : -1;
}
function eF(e) {
	return 48 === e ? "\0" : 97 === e ? "\x07" : 98 === e ? "\b" : 116 === e || 9 === e ? "	" : 110 === e ? `
` : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "\x1B" : 32 === e ? " " : 34 === e ? "\"" : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? "\xA0" : 76 === e ? "\u2028" : 80 === e ? "\u2029" : "";
}
function eL(e) {
	return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
}
e(ew, "_class"), e(ex, "is_EOL"), e(eC, "is_WHITE_SPACE"), e(eS, "is_WS_OR_EOL"), e(eO, "is_FLOW_INDICATOR"), e(eI, "fromHexCode"), e(ej, "escapedHexLen"), e(eT, "fromDecimalCode"), e(eF, "simpleEscapeSequence"), e(eL, "charFromCodepoint");
var eM = Array(256), eN = Array(256);
for (u = 0; u < 256; u++) eM[u] = +!!eF(u), eN[u] = eF(u);
function eE(e, t) {
	this.input = e, this.filename = t.filename || null, this.schema = t.schema || em, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function eY(e, t) {
	var n = {
		name: e.filename,
		buffer: e.input.slice(0, -1),
		position: e.position,
		line: e.line,
		column: e.position - e.lineStart
	};
	return n.snippet = s(n), new a(t, n);
}
function e_(e, t) {
	throw eY(e, t);
}
function eD(e, t) {
	e.onWarning && e.onWarning.call(null, eY(e, t));
}
e(eE, "State$1"), e(eY, "generateError"), e(e_, "throwError"), e(eD, "throwWarning");
var eq = {
	YAML: e(function(e, t, n) {
		var i, r, o;
		null !== e.version && e_(e, "duplication of %YAML directive"), 1 !== n.length && e_(e, "YAML directive accepts exactly one argument"), null === (i = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) && e_(e, "ill-formed argument of the YAML directive"), r = parseInt(i[1], 10), o = parseInt(i[2], 10), 1 !== r && e_(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, 1 !== o && 2 !== o && eD(e, "unsupported YAML version of the document");
	}, "handleYamlDirective"),
	TAG: e(function(e, t, n) {
		var i, r;
		2 !== n.length && e_(e, "TAG directive accepts exactly two arguments"), i = n[0], r = n[1], eA.test(i) || e_(e, "ill-formed tag handle (first argument) of the TAG directive"), eg.call(e.tagMap, i) && e_(e, "there is a previously declared suffix for \"" + i + "\" tag handle"), ek.test(r) || e_(e, "ill-formed tag prefix (second argument) of the TAG directive");
		try {
			r = decodeURIComponent(r);
		} catch {
			e_(e, "tag prefix is malformed: " + r);
		}
		e.tagMap[i] = r;
	}, "handleTagDirective")
};
function eB(e, t, n, i) {
	var r, o, a, l;
	if (t < n) {
		if (l = e.input.slice(t, n), i) for (r = 0, o = l.length; r < o; r += 1) 9 === (a = l.charCodeAt(r)) || 32 <= a && a <= 1114111 || e_(e, "expected valid JSON character");
		else ey.test(l) && e_(e, "the stream contains non-printable characters");
		e.result += l;
	}
}
function eU(e, t, i, r) {
	var o, a, l, c;
	for (n(i) || e_(e, "cannot merge mappings; the provided source object is unacceptable"), o = Object.keys(i), l = 0, c = o.length; l < c; l += 1) a = o[l], eg.call(t, a) || (t[a] = i[a], r[a] = !0);
}
function eP(e, t, n, i, r, o, a, l, c) {
	var s, u;
	if (Array.isArray(r)) for (r = Array.prototype.slice.call(r), s = 0, u = r.length; s < u; s += 1) Array.isArray(r[s]) && e_(e, "nested arrays are not supported inside keys"), "object" == typeof r && "[object Object]" === ew(r[s]) && (r[s] = "[object Object]");
	if ("object" == typeof r && "[object Object]" === ew(r) && (r = "[object Object]"), r = String(r), null === t && (t = {}), "tag:yaml.org,2002:merge" === i) if (Array.isArray(o)) for (s = 0, u = o.length; s < u; s += 1) eU(e, t, o[s], n);
	else eU(e, t, o, n);
	else !e.json && !eg.call(n, r) && eg.call(t, r) && (e.line = a || e.line, e.lineStart = l || e.lineStart, e.position = c || e.position, e_(e, "duplicated mapping key")), "__proto__" === r ? Object.defineProperty(t, r, {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: o
	}) : t[r] = o, delete n[r];
	return t;
}
function eR(e) {
	var t = e.input.charCodeAt(e.position);
	10 === t ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : e_(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function eW(e, t, n) {
	for (var i = 0, r = e.input.charCodeAt(e.position); 0 !== r;) {
		for (; eC(r);) 9 === r && -1 === e.firstTabInLine && (e.firstTabInLine = e.position), r = e.input.charCodeAt(++e.position);
		if (t && 35 === r) do
			r = e.input.charCodeAt(++e.position);
		while (10 !== r && 13 !== r && 0 !== r);
		if (ex(r)) for (eR(e), r = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; 32 === r;) e.lineIndent++, r = e.input.charCodeAt(++e.position);
		else break;
	}
	return -1 !== n && 0 !== i && e.lineIndent < n && eD(e, "deficient indentation"), i;
}
function e$(e) {
	var t, n = e.position;
	return !!((45 === (t = e.input.charCodeAt(n)) || 46 === t) && t === e.input.charCodeAt(n + 1) && t === e.input.charCodeAt(n + 2) && (n += 3, 0 === (t = e.input.charCodeAt(n)) || eS(t)));
}
function eK(e, t) {
	1 === t ? e.result += " " : t > 1 && (e.result += i(`
`, t - 1));
}
function eH(e, t, n) {
	var i, r, o, a, l, c, s, u, p = e.kind, f = e.result;
	if (eS(u = e.input.charCodeAt(e.position)) || eO(u) || 35 === u || 38 === u || 42 === u || 33 === u || 124 === u || 62 === u || 39 === u || 34 === u || 37 === u || 64 === u || 96 === u || (63 === u || 45 === u) && (eS(i = e.input.charCodeAt(e.position + 1)) || n && eO(i))) return !1;
	for (e.kind = "scalar", e.result = "", r = o = e.position, a = !1; 0 !== u;) {
		if (58 === u) {
			if (eS(i = e.input.charCodeAt(e.position + 1)) || n && eO(i)) break;
		} else if (35 === u) {
			if (eS(e.input.charCodeAt(e.position - 1))) break;
		} else {
			if (e.position === e.lineStart && e$(e) || n && eO(u)) break;
			if (ex(u)) if (l = e.line, c = e.lineStart, s = e.lineIndent, eW(e, !1, -1), e.lineIndent >= t) {
				a = !0, u = e.input.charCodeAt(e.position);
				continue;
			} else {
				e.position = o, e.line = l, e.lineStart = c, e.lineIndent = s;
				break;
			}
		}
		a && (eB(e, r, o, !1), eK(e, e.line - l), r = o = e.position, a = !1), eC(u) || (o = e.position + 1), u = e.input.charCodeAt(++e.position);
	}
	return eB(e, r, o, !1), !!e.result || (e.kind = p, e.result = f, !1);
}
function eQ(e, t) {
	var n, i, r;
	if (39 !== (n = e.input.charCodeAt(e.position))) return !1;
	for (e.kind = "scalar", e.result = "", e.position++, i = r = e.position; 0 !== (n = e.input.charCodeAt(e.position));) if (39 === n) if (eB(e, i, e.position, !0), 39 !== (n = e.input.charCodeAt(++e.position))) return !0;
	else i = e.position, e.position++, r = e.position;
	else ex(n) ? (eB(e, i, r, !0), eK(e, eW(e, !1, t)), i = r = e.position) : e.position === e.lineStart && e$(e) ? e_(e, "unexpected end of the document within a single quoted scalar") : (e.position++, r = e.position);
	e_(e, "unexpected end of the stream within a single quoted scalar");
}
function eG(e, t) {
	var n, i, r, o, a, l;
	if (34 !== (l = e.input.charCodeAt(e.position))) return !1;
	for (e.kind = "scalar", e.result = "", e.position++, n = i = e.position; 0 !== (l = e.input.charCodeAt(e.position));) {
		if (34 === l) return eB(e, n, e.position, !0), e.position++, !0;
		if (92 === l) {
			if (eB(e, n, e.position, !0), ex(l = e.input.charCodeAt(++e.position))) eW(e, !1, t);
			else if (l < 256 && eM[l]) e.result += eN[l], e.position++;
			else if ((a = ej(l)) > 0) {
				for (r = a, o = 0; r > 0; r--) (a = eI(l = e.input.charCodeAt(++e.position))) >= 0 ? o = (o << 4) + a : e_(e, "expected hexadecimal character");
				e.result += eL(o), e.position++;
			} else e_(e, "unknown escape sequence");
			n = i = e.position;
		} else ex(l) ? (eB(e, n, i, !0), eK(e, eW(e, !1, t)), n = i = e.position) : e.position === e.lineStart && e$(e) ? e_(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
	}
	e_(e, "unexpected end of the stream within a double quoted scalar");
}
function eZ(e, t) {
	var n, i, r, o, a, l, c, s, u, p, f, d, h = !0, m = e.tag, g = e.anchor, y = Object.create(null);
	if (91 === (d = e.input.charCodeAt(e.position))) a = 93, s = !1, o = [];
	else {
		if (123 !== d) return !1;
		a = 125, s = !0, o = {};
	}
	for (null !== e.anchor && (e.anchorMap[e.anchor] = o), d = e.input.charCodeAt(++e.position); 0 !== d;) {
		if (eW(e, !0, t), (d = e.input.charCodeAt(e.position)) === a) return e.position++, e.tag = m, e.anchor = g, e.kind = s ? "mapping" : "sequence", e.result = o, !0;
		h ? 44 === d && e_(e, "expected the node content, but found ','") : e_(e, "missed comma between flow collection entries"), p = u = f = null, l = c = !1, 63 === d && eS(e.input.charCodeAt(e.position + 1)) && (l = c = !0, e.position++, eW(e, !0, t)), n = e.line, i = e.lineStart, r = e.position, e2(e, t, 1, !1, !0), p = e.tag, u = e.result, eW(e, !0, t), d = e.input.charCodeAt(e.position), (c || e.line === n) && 58 === d && (l = !0, d = e.input.charCodeAt(++e.position), eW(e, !0, t), e2(e, t, 1, !1, !0), f = e.result), s ? eP(e, o, y, p, u, f, n, i, r) : l ? o.push(eP(e, null, y, p, u, f, n, i, r)) : o.push(u), eW(e, !0, t), 44 === (d = e.input.charCodeAt(e.position)) ? (h = !0, d = e.input.charCodeAt(++e.position)) : h = !1;
	}
	e_(e, "unexpected end of the stream within a flow collection");
}
function ez(e, t) {
	var n, r, o, a, l = 1, c = !1, s = !1, u = t, p = 0, f = !1;
	if (124 === (a = e.input.charCodeAt(e.position))) r = !1;
	else {
		if (62 !== a) return !1;
		r = !0;
	}
	for (e.kind = "scalar", e.result = ""; 0 !== a;) if (43 === (a = e.input.charCodeAt(++e.position)) || 45 === a) 1 === l ? l = 43 === a ? 3 : 2 : e_(e, "repeat of a chomping mode identifier");
	else if ((o = eT(a)) >= 0) 0 === o ? e_(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? e_(e, "repeat of an indentation width identifier") : (u = t + o - 1, s = !0);
	else break;
	if (eC(a)) {
		do
			a = e.input.charCodeAt(++e.position);
		while (eC(a));
		if (35 === a) do
			a = e.input.charCodeAt(++e.position);
		while (!ex(a) && 0 !== a);
	}
	for (; 0 !== a;) {
		for (eR(e), e.lineIndent = 0, a = e.input.charCodeAt(e.position); (!s || e.lineIndent < u) && 32 === a;) e.lineIndent++, a = e.input.charCodeAt(++e.position);
		if (!s && e.lineIndent > u && (u = e.lineIndent), ex(a)) {
			p++;
			continue;
		}
		if (e.lineIndent < u) {
			3 === l ? e.result += i(`
`, c ? 1 + p : p) : 1 === l && c && (e.result += `
`);
			break;
		}
		for (r ? eC(a) ? (f = !0, e.result += i(`
`, c ? 1 + p : p)) : f ? (f = !1, e.result += i(`
`, p + 1)) : 0 === p ? c && (e.result += " ") : e.result += i(`
`, p) : e.result += i(`
`, c ? 1 + p : p), c = !0, s = !0, p = 0, n = e.position; !ex(a) && 0 !== a;) a = e.input.charCodeAt(++e.position);
		eB(e, n, e.position, !1);
	}
	return !0;
}
function eJ(e, t) {
	var n, i, r = e.tag, o = e.anchor, a = [], l = !1;
	if (-1 !== e.firstTabInLine) return !1;
	for (null !== e.anchor && (e.anchorMap[e.anchor] = a), i = e.input.charCodeAt(e.position); 0 !== i && (-1 !== e.firstTabInLine && (e.position = e.firstTabInLine, e_(e, "tab characters must not be used in indentation")), !(45 !== i || !eS(e.input.charCodeAt(e.position + 1))));) {
		if (l = !0, e.position++, eW(e, !0, -1) && e.lineIndent <= t) {
			a.push(null), i = e.input.charCodeAt(e.position);
			continue;
		}
		if (n = e.line, e2(e, t, 3, !1, !0), a.push(e.result), eW(e, !0, -1), i = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > t) && 0 !== i) e_(e, "bad indentation of a sequence entry");
		else if (e.lineIndent < t) break;
	}
	return !!l && (e.tag = r, e.anchor = o, e.kind = "sequence", e.result = a, !0);
}
function eX(e, t, n) {
	var i, r, o, a, l, c, s, u = e.tag, p = e.anchor, f = {}, d = Object.create(null), h = null, m = null, g = null, y = !1, b = !1;
	if (-1 !== e.firstTabInLine) return !1;
	for (null !== e.anchor && (e.anchorMap[e.anchor] = f), s = e.input.charCodeAt(e.position); 0 !== s;) {
		if (y || -1 === e.firstTabInLine || (e.position = e.firstTabInLine, e_(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), o = e.line, (63 === s || 58 === s) && eS(i)) 63 === s ? (y && (eP(e, f, d, h, m, null, a, l, c), h = m = g = null), b = !0, y = !0, r = !0) : y ? (y = !1, r = !0) : e_(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, s = i;
		else {
			if (a = e.line, l = e.lineStart, c = e.position, !e2(e, n, 2, !1, !0)) break;
			if (e.line === o) {
				for (s = e.input.charCodeAt(e.position); eC(s);) s = e.input.charCodeAt(++e.position);
				if (58 === s) eS(s = e.input.charCodeAt(++e.position)) || e_(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (eP(e, f, d, h, m, null, a, l, c), h = m = g = null), b = !0, y = !1, r = !1, h = e.tag, m = e.result;
				else {
					if (!b) return e.tag = u, e.anchor = p, !0;
					e_(e, "can not read an implicit mapping pair; a colon is missed");
				}
			} else {
				if (!b) return e.tag = u, e.anchor = p, !0;
				e_(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
			}
		}
		if ((e.line === o || e.lineIndent > t) && (y && (a = e.line, l = e.lineStart, c = e.position), e2(e, t, 4, !0, r) && (y ? m = e.result : g = e.result), y || (eP(e, f, d, h, m, g, a, l, c), h = m = g = null), eW(e, !0, -1), s = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && 0 !== s) e_(e, "bad indentation of a mapping entry");
		else if (e.lineIndent < t) break;
	}
	return y && eP(e, f, d, h, m, null, a, l, c), b && (e.tag = u, e.anchor = p, e.kind = "mapping", e.result = f), b;
}
function eV(e) {
	var t, n, i, r, o = !1, a = !1;
	if (33 !== (r = e.input.charCodeAt(e.position))) return !1;
	if (null !== e.tag && e_(e, "duplication of a tag property"), 60 === (r = e.input.charCodeAt(++e.position)) ? (o = !0, r = e.input.charCodeAt(++e.position)) : 33 === r ? (a = !0, n = "!!", r = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, o) {
		do
			r = e.input.charCodeAt(++e.position);
		while (0 !== r && 62 !== r);
		e.position < e.length ? (i = e.input.slice(t, e.position), r = e.input.charCodeAt(++e.position)) : e_(e, "unexpected end of the stream within a verbatim tag");
	} else {
		for (; 0 !== r && !eS(r);) 33 === r && (a ? e_(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), eA.test(n) || e_(e, "named tag handle cannot contain such characters"), a = !0, t = e.position + 1)), r = e.input.charCodeAt(++e.position);
		i = e.input.slice(t, e.position), ev.test(i) && e_(e, "tag suffix cannot contain flow indicator characters");
	}
	i && !ek.test(i) && e_(e, "tag name cannot contain such characters: " + i);
	try {
		i = decodeURIComponent(i);
	} catch {
		e_(e, "tag name is malformed: " + i);
	}
	return o ? e.tag = i : eg.call(e.tagMap, n) ? e.tag = e.tagMap[n] + i : "!" === n ? e.tag = "!" + i : "!!" === n ? e.tag = "tag:yaml.org,2002:" + i : e_(e, "undeclared tag handle \"" + n + "\""), !0;
}
function e0(e) {
	var t, n;
	if (38 !== (n = e.input.charCodeAt(e.position))) return !1;
	for (null !== e.anchor && e_(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), t = e.position; 0 !== n && !eS(n) && !eO(n);) n = e.input.charCodeAt(++e.position);
	return e.position === t && e_(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function e1(e) {
	var t, n, i;
	if (42 !== (i = e.input.charCodeAt(e.position))) return !1;
	for (i = e.input.charCodeAt(++e.position), t = e.position; 0 !== i && !eS(i) && !eO(i);) i = e.input.charCodeAt(++e.position);
	return e.position === t && e_(e, "name of an alias node must contain at least one character"), n = e.input.slice(t, e.position), eg.call(e.anchorMap, n) || e_(e, "unidentified alias \"" + n + "\""), e.result = e.anchorMap[n], eW(e, !0, -1), !0;
}
function e2(e, t, n, i, r) {
	var o, a, l, c, s, u, p, f, d, h = 1, m = !1, g = !1;
	if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = a = l = 4 === n || 3 === n, i && eW(e, !0, -1) && (m = !0, e.lineIndent > t ? h = 1 : e.lineIndent === t ? h = 0 : e.lineIndent < t && (h = -1)), 1 === h) for (; eV(e) || e0(e);) eW(e, !0, -1) ? (m = !0, l = o, e.lineIndent > t ? h = 1 : e.lineIndent === t ? h = 0 : e.lineIndent < t && (h = -1)) : l = !1;
	if (l && (l = m || r), (1 === h || 4 === n) && (f = 1 === n || 2 === n ? t : t + 1, d = e.position - e.lineStart, 1 === h ? l && (eJ(e, d) || eX(e, d, f)) || eZ(e, f) ? g = !0 : (a && ez(e, f) || eQ(e, f) || eG(e, f) ? g = !0 : e1(e) ? (g = !0, (null !== e.tag || null !== e.anchor) && e_(e, "alias node should not have any properties")) : eH(e, f, 1 === n) && (g = !0, null === e.tag && (e.tag = "?")), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === h && (g = l && eJ(e, d))), null === e.tag) null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
	else if ("?" === e.tag) {
		for (null !== e.result && "scalar" !== e.kind && e_(e, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + e.kind + "\""), c = 0, s = e.implicitTypes.length; c < s; c += 1) if ((p = e.implicitTypes[c]).resolve(e.result)) {
			e.result = p.construct(e.result), e.tag = p.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
			break;
		}
	} else if ("!" !== e.tag) {
		if (eg.call(e.typeMap[e.kind || "fallback"], e.tag)) p = e.typeMap[e.kind || "fallback"][e.tag];
		else for (p = null, u = e.typeMap.multi[e.kind || "fallback"], c = 0, s = u.length; c < s; c += 1) if (e.tag.slice(0, u[c].tag.length) === u[c].tag) {
			p = u[c];
			break;
		}
		p || e_(e, "unknown tag !<" + e.tag + ">"), null !== e.result && p.kind !== e.kind && e_(e, "unacceptable node kind for !<" + e.tag + "> tag; it should be \"" + p.kind + "\", not \"" + e.kind + "\""), p.resolve(e.result, e.tag) ? (e.result = p.construct(e.result, e.tag), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : e_(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
	}
	return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || g;
}
function e3(e) {
	var t, n, i, r, o = e.position, a = !1;
	for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = Object.create(null), e.anchorMap = Object.create(null); 0 !== (r = e.input.charCodeAt(e.position)) && (eW(e, !0, -1), r = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== r));) {
		for (a = !0, r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !eS(r);) r = e.input.charCodeAt(++e.position);
		for (n = e.input.slice(t, e.position), i = [], n.length < 1 && e_(e, "directive name must not be less than one character in length"); 0 !== r;) {
			for (; eC(r);) r = e.input.charCodeAt(++e.position);
			if (35 === r) {
				do
					r = e.input.charCodeAt(++e.position);
				while (0 !== r && !ex(r));
				break;
			}
			if (ex(r)) break;
			for (t = e.position; 0 !== r && !eS(r);) r = e.input.charCodeAt(++e.position);
			i.push(e.input.slice(t, e.position));
		}
		0 !== r && eR(e), eg.call(eq, n) ? eq[n](e, n, i) : eD(e, "unknown document directive \"" + n + "\"");
	}
	if (eW(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, eW(e, !0, -1)) : a && e_(e, "directives end mark is expected"), e2(e, e.lineIndent - 1, 4, !1, !0), eW(e, !0, -1), e.checkLineBreaks && eb.test(e.input.slice(o, e.position)) && eD(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && e$(e)) {
		46 === e.input.charCodeAt(e.position) && (e.position += 3, eW(e, !0, -1));
		return;
	}
	e.position < e.length - 1 && e_(e, "end of the stream or a document separator is expected");
}
function e5(e, t) {
	e = String(e), t = t || {}, 0 !== e.length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += `
`), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
	var n = new eE(e, t), i = e.indexOf("\0");
	for (-1 !== i && (n.position = i, e_(n, "null byte is not allowed in input")), n.input += "\0"; 32 === n.input.charCodeAt(n.position);) n.lineIndent += 1, n.position += 1;
	for (; n.position < n.length - 1;) e3(n);
	return n.documents;
}
function e6(e, t, n) {
	null !== t && "object" == typeof t && typeof n > "u" && (n = t, t = null);
	var i = e5(e, n);
	if ("function" != typeof t) return i;
	for (var r = 0, o = i.length; r < o; r += 1) t(i[r]);
}
function e9(e, t) {
	var n = e5(e, t);
	if (0 !== n.length) {
		if (1 === n.length) return n[0];
		throw new a("expected a single document in the stream, but found more");
	}
}
e(eB, "captureSegment"), e(eU, "mergeMappings"), e(eP, "storeMappingPair"), e(eR, "readLineBreak"), e(eW, "skipSeparationSpace"), e(e$, "testDocumentSeparator"), e(eK, "writeFoldedLines"), e(eH, "readPlainScalar"), e(eQ, "readSingleQuotedScalar"), e(eG, "readDoubleQuotedScalar"), e(eZ, "readFlowCollection"), e(ez, "readBlockScalar"), e(eJ, "readBlockSequence"), e(eX, "readBlockMapping"), e(eV, "readTagProperty"), e(e0, "readAnchorProperty"), e(e1, "readAlias"), e(e2, "composeNode"), e(e3, "readDocument"), e(e5, "loadDocuments"), e(e6, "loadAll$1"), e(e9, "load$1");
var e4 = Object.prototype.toString, e8 = Object.prototype.hasOwnProperty, e7 = {};
e7[0] = "\\0", e7[7] = "\\a", e7[8] = "\\b", e7[9] = "\\t", e7[10] = "\\n", e7[11] = "\\v", e7[12] = "\\f", e7[13] = "\\r", e7[27] = "\\e", e7[34] = "\\\"", e7[92] = "\\\\", e7[133] = "\\N", e7[160] = "\\_", e7[8232] = "\\L", e7[8233] = "\\P";
var te = [
	"y",
	"Y",
	"yes",
	"Yes",
	"YES",
	"on",
	"On",
	"ON",
	"n",
	"N",
	"no",
	"No",
	"NO",
	"off",
	"Off",
	"OFF"
], tt = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function tn(e, t) {
	var n, i, r, o, a, l, c;
	if (null === t) return {};
	for (n = {}, i = Object.keys(t), r = 0, o = i.length; r < o; r += 1) l = String(t[a = i[r]]), "!!" === a.slice(0, 2) && (a = "tag:yaml.org,2002:" + a.slice(2)), (c = e.compiledTypeMap.fallback[a]) && e8.call(c.styleAliases, l) && (l = c.styleAliases[l]), n[a] = l;
	return n;
}
function ti(e) {
	var t, n, r;
	if (t = e.toString(16).toUpperCase(), e <= 255) n = "x", r = 2;
	else if (e <= 65535) n = "u", r = 4;
	else if (e <= 4294967295) n = "U", r = 8;
	else throw new a("code point within a string may not be greater than 0xFFFFFFFF");
	return "\\" + n + i("0", r - t.length) + t;
}
function tr(e) {
	this.schema = e.schema || em, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = t(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = tn(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = "\"" === e.quotingType ? 2 : 1, this.forceQuotes = e.forceQuotes || !1, this.replacer = "function" == typeof e.replacer ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function to(e, t) {
	for (var n, r = i(" ", t), o = 0, a = -1, l = "", c = e.length; o < c;) -1 === (a = e.indexOf(`
`, o)) ? (n = e.slice(o), o = c) : (n = e.slice(o, a + 1), o = a + 1), n.length && n !== `
` && (l += r), l += n;
	return l;
}
function ta(e, t) {
	return `
` + i(" ", e.indent * t);
}
function tl(e, t) {
	var n, i;
	for (n = 0, i = e.implicitTypes.length; n < i; n += 1) if (e.implicitTypes[n].resolve(t)) return !0;
	return !1;
}
function tc(e) {
	return 32 === e || 9 === e;
}
function ts(e) {
	return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && 65279 !== e || 65536 <= e && e <= 1114111;
}
function tu(e) {
	return ts(e) && 65279 !== e && 13 !== e && 10 !== e;
}
function tp(e, t, n) {
	var i = tu(e), r = i && !tc(e);
	return (n ? i : i && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e) && 35 !== e && !(58 === t && !r) || tu(t) && !tc(t) && 35 === e || 58 === t && r;
}
function tf(e) {
	return ts(e) && 65279 !== e && !tc(e) && 45 !== e && 63 !== e && 58 !== e && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e && 35 !== e && 38 !== e && 42 !== e && 33 !== e && 124 !== e && 61 !== e && 62 !== e && 39 !== e && 34 !== e && 37 !== e && 64 !== e && 96 !== e;
}
function td(e) {
	return !tc(e) && 58 !== e;
}
function th(e, t) {
	var n, i = e.charCodeAt(t);
	return i >= 55296 && i <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1)) >= 56320 && n <= 57343 ? (i - 55296) * 1024 + n - 56320 + 65536 : i;
}
function tm(e) {
	return /^\n* /.test(e);
}
function tg(e, t, n, i, r, o, a, l) {
	var c, s = 0, u = null, p = !1, f = !1, d = -1 !== i, h = -1, m = tf(th(e, 0)) && td(th(e, e.length - 1));
	if (t || a) for (c = 0; c < e.length; s >= 65536 ? c += 2 : c++) {
		if (!ts(s = th(e, c))) return 5;
		m = m && tp(s, u, l), u = s;
	}
	else {
		for (c = 0; c < e.length; s >= 65536 ? c += 2 : c++) {
			if (10 === (s = th(e, c))) p = !0, d && (f = f || c - h - 1 > i && " " !== e[h + 1], h = c);
			else if (!ts(s)) return 5;
			m = m && tp(s, u, l), u = s;
		}
		f = f || d && c - h - 1 > i && " " !== e[h + 1];
	}
	return p || f ? n > 9 && tm(e) ? 5 : a ? 2 === o ? 5 : 2 : f ? 4 : 3 : !m || a || r(e) ? 2 === o ? 5 : 2 : 1;
}
function ty(t, n, i, r, o) {
	t.dump = function() {
		if (0 === n.length) return 2 === t.quotingType ? "\"\"" : "''";
		if (!t.noCompatMode && (-1 !== te.indexOf(n) || tt.test(n))) return 2 === t.quotingType ? "\"" + n + "\"" : "'" + n + "'";
		var l = t.indent * Math.max(1, i), c = -1 === t.lineWidth ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - l), s = r || t.flowLevel > -1 && i >= t.flowLevel;
		function u(e) {
			return tl(t, e);
		}
		switch (e(u, "testAmbiguity"), tg(n, s, t.indent, c, u, t.quotingType, t.forceQuotes && !r, o)) {
			case 1: return n;
			case 2: return "'" + n.replace(/'/g, "''") + "'";
			case 3: return "|" + tb(n, t.indent) + tv(to(n, l));
			case 4: return ">" + tb(n, t.indent) + tv(to(tA(n, c), l));
			case 5: return "\"" + tw(n) + "\"";
			default: throw new a("impossible error: invalid scalar style");
		}
	}();
}
function tb(e, t) {
	var n = tm(e) ? String(t) : "", i = e[e.length - 1] === `
`;
	return n + (i && (e[e.length - 2] === `
` || e === `
`) ? "+" : i ? "" : "-") + `
`;
}
function tv(e) {
	return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function tA(e, t) {
	for (var n, i, r, o = /(\n+)([^\n]*)/g, a = (o.lastIndex = n = -1 !== (n = e.indexOf(`
`)) ? n : e.length, tk(e.slice(0, n), t)), l = e[0] === `
` || " " === e[0]; r = o.exec(e);) {
		var c = r[1], s = r[2];
		i = " " === s[0], a += c + (l || i || "" === s ? "" : `
`) + tk(s, t), l = i;
	}
	return a;
}
function tk(e, t) {
	if ("" === e || " " === e[0]) return e;
	for (var n, i, r = / [^ ]/g, o = 0, a = 0, l = 0, c = ""; n = r.exec(e);) (l = n.index) - o > t && (i = a > o ? a : l, c += `
` + e.slice(o, i), o = i + 1), a = l;
	return c += `
`, e.length - o > t && a > o ? c += e.slice(o, a) + `
` + e.slice(a + 1) : c += e.slice(o), c.slice(1);
}
function tw(e) {
	for (var t, n = "", i = 0, r = 0; r < e.length; i >= 65536 ? r += 2 : r++) !(t = e7[i = th(e, r)]) && ts(i) ? (n += e[r], i >= 65536 && (n += e[r + 1])) : n += t || ti(i);
	return n;
}
function tx(e, t, n) {
	var i, r, o, a = "", l = e.tag;
	for (i = 0, r = n.length; i < r; i += 1) o = n[i], e.replacer && (o = e.replacer.call(n, String(i), o)), (tj(e, t, o, !1, !1) || typeof o > "u" && tj(e, t, null, !1, !1)) && ("" !== a && (a += "," + (e.condenseFlow ? "" : " ")), a += e.dump);
	e.tag = l, e.dump = "[" + a + "]";
}
function tC(e, t, n, i) {
	var r, o, a, l = "", c = e.tag;
	for (r = 0, o = n.length; r < o; r += 1) a = n[r], e.replacer && (a = e.replacer.call(n, String(r), a)), (tj(e, t + 1, a, !0, !0, !1, !0) || typeof a > "u" && tj(e, t + 1, null, !0, !0, !1, !0)) && (i && "" === l || (l += ta(e, t)), e.dump && 10 === e.dump.charCodeAt(0) ? l += "-" : l += "- ", l += e.dump);
	e.tag = c, e.dump = l || "[]";
}
function tS(e, t, n) {
	var i, r, o, a, l, c = "", s = e.tag, u = Object.keys(n);
	for (i = 0, r = u.length; i < r; i += 1) l = "", "" !== c && (l += ", "), e.condenseFlow && (l += "\""), a = n[o = u[i]], e.replacer && (a = e.replacer.call(n, o, a)), tj(e, t, o, !1, !1) && (e.dump.length > 1024 && (l += "? "), l += e.dump + (e.condenseFlow ? "\"" : "") + ":" + (e.condenseFlow ? "" : " "), tj(e, t, a, !1, !1) && (l += e.dump, c += l));
	e.tag = s, e.dump = "{" + c + "}";
}
function tO(e, t, n, i) {
	var r, o, l, c, s, u, p = "", f = e.tag, d = Object.keys(n);
	if (!0 === e.sortKeys) d.sort();
	else if ("function" == typeof e.sortKeys) d.sort(e.sortKeys);
	else if (e.sortKeys) throw new a("sortKeys must be a boolean or a function");
	for (r = 0, o = d.length; r < o; r += 1) u = "", i && "" === p || (u += ta(e, t)), c = n[l = d[r]], e.replacer && (c = e.replacer.call(n, l, c)), tj(e, t + 1, l, !0, !0, !0) && ((s = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += "?" : u += "? "), u += e.dump, s && (u += ta(e, t)), tj(e, t + 1, c, !0, s) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += ":" : u += ": ", u += e.dump, p += u));
	e.tag = f, e.dump = p || "{}";
}
function tI(e, t, n) {
	var i, r, o, l, c, s;
	for (r = n ? e.explicitTypes : e.implicitTypes, o = 0, l = r.length; o < l; o += 1) if (((c = r[o]).instanceOf || c.predicate) && (!c.instanceOf || "object" == typeof t && t instanceof c.instanceOf) && (!c.predicate || c.predicate(t))) {
		if (n ? c.multi && c.representName ? e.tag = c.representName(t) : e.tag = c.tag : e.tag = "?", c.represent) {
			if (s = e.styleMap[c.tag] || c.defaultStyle, "[object Function]" === e4.call(c.represent)) i = c.represent(t, s);
			else if (e8.call(c.represent, s)) i = c.represent[s](t, s);
			else throw new a("!<" + c.tag + "> tag resolver accepts not \"" + s + "\" style");
			e.dump = i;
		}
		return !0;
	}
	return !1;
}
function tj(e, t, n, i, r, o, l) {
	e.tag = null, e.dump = n, tI(e, n, !1) || tI(e, n, !0);
	var c, s = e4.call(e.dump), u = i;
	i && (i = e.flowLevel < 0 || e.flowLevel > t);
	var p, f, d = "[object Object]" === s || "[object Array]" === s;
	if (d && (f = -1 !== (p = e.duplicates.indexOf(n))), (null !== e.tag && "?" !== e.tag || f || 2 !== e.indent && t > 0) && (r = !1), f && e.usedDuplicates[p]) e.dump = "*ref_" + p;
	else {
		if (d && f && !e.usedDuplicates[p] && (e.usedDuplicates[p] = !0), "[object Object]" === s) i && 0 !== Object.keys(e.dump).length ? (tO(e, t, e.dump, r), f && (e.dump = "&ref_" + p + e.dump)) : (tS(e, t, e.dump), f && (e.dump = "&ref_" + p + " " + e.dump));
		else if ("[object Array]" === s) i && 0 !== e.dump.length ? (e.noArrayIndent && !l && t > 0 ? tC(e, t - 1, e.dump, r) : tC(e, t, e.dump, r), f && (e.dump = "&ref_" + p + e.dump)) : (tx(e, t, e.dump), f && (e.dump = "&ref_" + p + " " + e.dump));
		else if ("[object String]" === s) "?" !== e.tag && ty(e, e.dump, t, o, u);
		else {
			if ("[object Undefined]" === s || e.skipInvalid) return !1;
			throw new a("unacceptable kind of an object to dump " + s);
		}
		null !== e.tag && "?" !== e.tag && (c = encodeURI("!" === e.tag[0] ? e.tag.slice(1) : e.tag).replace(/!/g, "%21"), c = "!" === e.tag[0] ? "!" + c : "tag:yaml.org,2002:" === c.slice(0, 18) ? "!!" + c.slice(18) : "!<" + c + ">", e.dump = c + " " + e.dump);
	}
	return !0;
}
function tT(e, t) {
	var n, i, r = [], o = [];
	for (tF(e, r, o), n = 0, i = o.length; n < i; n += 1) t.duplicates.push(r[o[n]]);
	t.usedDuplicates = Array(i);
}
function tF(e, t, n) {
	var i, r, o;
	if (null !== e && "object" == typeof e) if (-1 !== (r = t.indexOf(e))) -1 === n.indexOf(r) && n.push(r);
	else if (t.push(e), Array.isArray(e)) for (r = 0, o = e.length; r < o; r += 1) tF(e[r], t, n);
	else for (i = Object.keys(e), r = 0, o = i.length; r < o; r += 1) tF(e[i[r]], t, n);
}
e(tn, "compileStyleMap"), e(ti, "encodeHex"), e(tr, "State"), e(to, "indentString"), e(ta, "generateNextLine"), e(tl, "testImplicitResolving"), e(tc, "isWhitespace"), e(ts, "isPrintable"), e(tu, "isNsCharOrWhitespace"), e(tp, "isPlainSafe"), e(tf, "isPlainSafeFirst"), e(td, "isPlainSafeLast"), e(th, "codePointAt"), e(tm, "needIndentIndicator");
function tL(e, t) {
	return function() {
		throw Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
	};
}
e(tg, "chooseScalarStyle"), e(ty, "writeScalar"), e(tb, "blockHeader"), e(tv, "dropEndingNewline"), e(tA, "foldString"), e(tk, "foldLine"), e(tw, "escapeString"), e(tx, "writeFlowSequence"), e(tC, "writeBlockSequence"), e(tS, "writeFlowMapping"), e(tO, "writeBlockMapping"), e(tI, "detectType"), e(tj, "writeNode"), e(tT, "getDuplicateReferences"), e(tF, "inspectNode"), e(function(e, t) {
	var n = new tr(t = t || {});
	n.noRefs || tT(e, n);
	var i = e;
	return n.replacer && (i = n.replacer.call({ "": i }, "", i)), tj(n, 0, i, !0, !0) ? n.dump + `
` : "";
}, "dump$1"), e(tL, "renamed");
var tM = P, tN = e9;
tL("safeLoad", "load"), tL("safeLoadAll", "loadAll"), tL("safeDump", "dump");
export { tM as n, tN as t };
