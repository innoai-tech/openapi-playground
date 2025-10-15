import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
function _e(e) {
	return typeof e > "u" || e === null;
}
m(_e, "isNothing");
function Qe(e) {
	return typeof e == "object" && e !== null;
}
m(Qe, "isObject");
function Ve(e) {
	return Array.isArray(e) ? e : _e(e) ? [] : [e];
}
m(Ve, "toArray");
function Xe(e, n) {
	var i, l, r, u;
	if (n) for (u = /* @__PURE__ */ Object.keys(n), i = 0, l = u.length; i < l; i += 1) r = u[i], e[r] = n[r];
	return e;
}
m(Xe, "extend");
function Ze(e, n) {
	var i = "", l;
	for (l = 0; l < n; l += 1) i += e;
	return i;
}
m(Ze, "repeat");
function ze(e) {
	return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
m(ze, "isNegativeZero");
var C = {
	isNothing: _e,
	isObject: Qe,
	toArray: Ve,
	repeat: Ze,
	isNegativeZero: ze,
	extend: Xe
};
function we(e, n) {
	var i = "", l = e.reason || "(unknown reason)";
	return e.mark ? (e.mark.name && (i += "in \"" + e.mark.name + "\" "), i += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !n && e.mark.snippet && (i += `

` + e.mark.snippet), l + " " + i) : l;
}
m(we, "formatError");
function B(e, n) {
	Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = n, this.message = /* @__PURE__ */ we(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (/* @__PURE__ */ new Error()).stack || "";
}
m(B, "YAMLException$1");
B.prototype = /* @__PURE__ */ Object.create(Error.prototype);
B.prototype.constructor = B;
B.prototype.toString = /* @__PURE__ */ m(function(n) {
	return this.name + ": " + we(this, n);
}, "toString");
var E = B;
function Q(e, n, i, l, r) {
	var u = "", o = "", f = Math.floor(r / 2) - 1;
	return l - n > f && (u = " ... ", n = l - f + u.length), i - l > f && (o = " ...", i = l + f - o.length), {
		str: u + e.slice(n, i).replace(/\t/g, "→") + o,
		pos: l - n + u.length
	};
}
m(Q, "getLine");
function V(e, n) {
	return C.repeat(" ", n - e.length) + e;
}
m(V, "padStart");
function un(e, n) {
	if (n = /* @__PURE__ */ Object.create(n || null), !e.buffer) return null;
	n.maxLength || (n.maxLength = 79), typeof n.indent != "number" && (n.indent = 1), typeof n.linesBefore != "number" && (n.linesBefore = 3), typeof n.linesAfter != "number" && (n.linesAfter = 2);
	for (var i = /\r?\n|\r|\0/g, l = [0], r = [], u, o = -1; u = /* @__PURE__ */ i.exec(e.buffer);) r.push(u.index), l.push(u.index + u[0].length), e.position <= u.index && o < 0 && (o = l.length - 2);
	o < 0 && (o = l.length - 1);
	var f = "", a, p, h = Math.min(e.line + n.linesAfter, r.length).toString().length, t = n.maxLength - (n.indent + h + 3);
	for (a = 1; a <= n.linesBefore && !(o - a < 0); a++) p = /* @__PURE__ */ Q(e.buffer, l[o - a], r[o - a], e.position - (l[o] - l[o - a]), t), f = C.repeat(" ", n.indent) + V(/* @__PURE__ */ (e.line - a + 1).toString(), h) + " | " + p.str + `
` + f;
	for (p = /* @__PURE__ */ Q(e.buffer, l[o], r[o], e.position, t), f += C.repeat(" ", n.indent) + V(/* @__PURE__ */ (e.line + 1).toString(), h) + " | " + p.str + `
`, f += C.repeat("-", n.indent + h + 3 + p.pos) + `^
`, a = 1; a <= n.linesAfter && !(o + a >= r.length); a++) p = /* @__PURE__ */ Q(e.buffer, l[o + a], r[o + a], e.position - (l[o] - l[o + a]), t), f += C.repeat(" ", n.indent) + V(/* @__PURE__ */ (e.line + a + 1).toString(), h) + " | " + p.str + `
`;
	return f.replace(/\n$/, "");
}
m(un, "makeSnippet");
var fn = un, cn = [
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
], an = [
	"scalar",
	"sequence",
	"mapping"
];
function pn(e) {
	var n = {};
	return e !== null && Object.keys(e).forEach(function(i) {
		e[i].forEach(function(l) {
			n[String(l)] = i;
		});
	}), n;
}
m(pn, "compileStyleAliases");
function tn(e, n) {
	if (n = n || {}, Object.keys(n).forEach(function(i) {
		if (cn.indexOf(i) === -1) throw new E("Unknown option \"" + i + "\" is met in definition of \"" + e + "\" YAML type.");
	}), this.options = n, this.tag = e, this.kind = n.kind || null, this.resolve = n.resolve || function() {
		return !0;
	}, this.construct = n.construct || function(i) {
		return i;
	}, this.instanceOf = n.instanceOf || null, this.predicate = n.predicate || null, this.represent = n.represent || null, this.representName = n.representName || null, this.defaultStyle = n.defaultStyle || null, this.multi = n.multi || !1, this.styleAliases = /* @__PURE__ */ pn(n.styleAliases || null), an.indexOf(this.kind) === -1) throw new E("Unknown kind \"" + this.kind + "\" is specified for \"" + e + "\" YAML type.");
}
m(tn, "Type$1");
var _ = tn;
function fe(e, n) {
	var i = [];
	return e[n].forEach(function(l) {
		var r = i.length;
		i.forEach(function(u, o) {
			u.tag === l.tag && u.kind === l.kind && u.multi === l.multi && (r = o);
		}), i[r] = l;
	}), i;
}
m(fe, "compileList");
function hn() {
	var e = {
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
	}, n, i;
	function l(r) {
		r.multi ? (e.multi[r.kind].push(r), e.multi.fallback.push(r)) : e[r.kind][r.tag] = e.fallback[r.tag] = r;
	}
	for (m(l, "collectType"), n = 0, i = arguments.length; n < i; n += 1) arguments[n].forEach(l);
	return e;
}
m(hn, "compileMap");
function Z(e) {
	return this.extend(e);
}
m(Z, "Schema$1");
Z.prototype.extend = /* @__PURE__ */ m(function(n) {
	var i = [], l = [];
	if (n instanceof _) l.push(n);
	else if (Array.isArray(n)) l = /* @__PURE__ */ l.concat(n);
	else if (n && (Array.isArray(n.implicit) || Array.isArray(n.explicit))) n.implicit && (i = /* @__PURE__ */ i.concat(n.implicit)), n.explicit && (l = /* @__PURE__ */ l.concat(n.explicit));
	else throw new E("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
	i.forEach(function(u) {
		if (!(u instanceof _)) throw new E("Specified list of YAML types (or a single Type object) contains a non-Type object.");
		if (u.loadKind && u.loadKind !== "scalar") throw new E("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
		if (u.multi) throw new E("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
	}), l.forEach(function(u) {
		if (!(u instanceof _)) throw new E("Specified list of YAML types (or a single Type object) contains a non-Type object.");
	});
	var r = /* @__PURE__ */ Object.create(Z.prototype);
	return r.implicit = /* @__PURE__ */ (this.implicit || []).concat(i), r.explicit = /* @__PURE__ */ (this.explicit || []).concat(l), r.compiledImplicit = /* @__PURE__ */ fe(r, "implicit"), r.compiledExplicit = /* @__PURE__ */ fe(r, "explicit"), r.compiledTypeMap = /* @__PURE__ */ hn(r.compiledImplicit, r.compiledExplicit), r;
}, "extend");
var gn = new Z({ explicit: [
	new _("tag:yaml.org,2002:str", {
		kind: "scalar",
		construct: /* @__PURE__ */ m(function(e) {
			return e !== null ? e : "";
		}, "construct")
	}),
	new _("tag:yaml.org,2002:seq", {
		kind: "sequence",
		construct: /* @__PURE__ */ m(function(e) {
			return e !== null ? e : [];
		}, "construct")
	}),
	new _("tag:yaml.org,2002:map", {
		kind: "mapping",
		construct: /* @__PURE__ */ m(function(e) {
			return e !== null ? e : {};
		}, "construct")
	})
] });
function An(e) {
	if (e === null) return !0;
	var n = e.length;
	return n === 1 && e === "~" || n === 4 && (e === "null" || e === "Null" || e === "NULL");
}
m(An, "resolveYamlNull");
function vn() {
	return null;
}
m(vn, "constructYamlNull");
function yn(e) {
	return e === null;
}
m(yn, "isNull");
var Cn = new _("tag:yaml.org,2002:null", {
	kind: "scalar",
	resolve: An,
	construct: vn,
	predicate: yn,
	represent: {
		canonical: /* @__PURE__ */ m(function() {
			return "~";
		}, "canonical"),
		lowercase: /* @__PURE__ */ m(function() {
			return "null";
		}, "lowercase"),
		uppercase: /* @__PURE__ */ m(function() {
			return "NULL";
		}, "uppercase"),
		camelcase: /* @__PURE__ */ m(function() {
			return "Null";
		}, "camelcase"),
		empty: /* @__PURE__ */ m(function() {
			return "";
		}, "empty")
	},
	defaultStyle: "lowercase"
});
function _n(e) {
	if (e === null) return !1;
	var n = e.length;
	return n === 4 && (e === "true" || e === "True" || e === "TRUE") || n === 5 && (e === "false" || e === "False" || e === "FALSE");
}
m(_n, "resolveYamlBoolean");
function wn(e) {
	return e === "true" || e === "True" || e === "TRUE";
}
m(wn, "constructYamlBoolean");
function En(e) {
	return Object.prototype.toString.call(e) === "[object Boolean]";
}
m(En, "isBoolean");
var Sn = new _("tag:yaml.org,2002:bool", {
	kind: "scalar",
	resolve: _n,
	construct: wn,
	predicate: En,
	represent: {
		lowercase: /* @__PURE__ */ m(function(e) {
			return e ? "true" : "false";
		}, "lowercase"),
		uppercase: /* @__PURE__ */ m(function(e) {
			return e ? "TRUE" : "FALSE";
		}, "uppercase"),
		camelcase: /* @__PURE__ */ m(function(e) {
			return e ? "True" : "False";
		}, "camelcase")
	},
	defaultStyle: "lowercase"
});
function Fn(e) {
	return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
m(Fn, "isHexCode");
function bn(e) {
	return 48 <= e && e <= 55;
}
m(bn, "isOctCode");
function Tn(e) {
	return 48 <= e && e <= 57;
}
m(Tn, "isDecCode");
function On(e) {
	if (e === null) return !1;
	var n = e.length, i = 0, l = !1, r;
	if (!n) return !1;
	if (r = e[i], (r === "-" || r === "+") && (r = e[++i]), r === "0") {
		if (i + 1 === n) return !0;
		if (r = e[++i], r === "b") {
			for (i++; i < n; i++) if (r = e[i], r !== "_") {
				if (r !== "0" && r !== "1") return !1;
				l = !0;
			}
			return l && r !== "_";
		}
		if (r === "x") {
			for (i++; i < n; i++) if (r = e[i], r !== "_") {
				if (!Fn(/* @__PURE__ */ e.charCodeAt(i))) return !1;
				l = !0;
			}
			return l && r !== "_";
		}
		if (r === "o") {
			for (i++; i < n; i++) if (r = e[i], r !== "_") {
				if (!bn(/* @__PURE__ */ e.charCodeAt(i))) return !1;
				l = !0;
			}
			return l && r !== "_";
		}
	}
	if (r === "_") return !1;
	for (; i < n; i++) if (r = e[i], r !== "_") {
		if (!Tn(/* @__PURE__ */ e.charCodeAt(i))) return !1;
		l = !0;
	}
	return !(!l || r === "_");
}
m(On, "resolveYamlInteger");
function In(e) {
	var n = e, i = 1, l;
	if (n.indexOf("_") !== -1 && (n = /* @__PURE__ */ n.replace(/_/g, "")), l = n[0], (l === "-" || l === "+") && (l === "-" && (i = -1), n = /* @__PURE__ */ n.slice(1), l = n[0]), n === "0") return 0;
	if (l === "0") {
		if (n[1] === "b") return i * parseInt(/* @__PURE__ */ n.slice(2), 2);
		if (n[1] === "x") return i * parseInt(/* @__PURE__ */ n.slice(2), 16);
		if (n[1] === "o") return i * parseInt(/* @__PURE__ */ n.slice(2), 8);
	}
	return i * parseInt(n, 10);
}
m(In, "constructYamlInteger");
function Ln(e) {
	return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !C.isNegativeZero(e);
}
m(Ln, "isInteger");
var kn = new _("tag:yaml.org,2002:int", {
	kind: "scalar",
	resolve: On,
	construct: In,
	predicate: Ln,
	represent: {
		binary: /* @__PURE__ */ m(function(e) {
			return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
		}, "binary"),
		octal: /* @__PURE__ */ m(function(e) {
			return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
		}, "octal"),
		decimal: /* @__PURE__ */ m(function(e) {
			return e.toString(10);
		}, "decimal"),
		hexadecimal: /* @__PURE__ */ m(function(e) {
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
}), Nn = /* @__PURE__ */ new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Rn(e) {
	return !(e === null || !Nn.test(e) || e[e.length - 1] === "_");
}
m(Rn, "resolveYamlFloat");
function Dn(e) {
	var n, i;
	return n = /* @__PURE__ */ e.replace(/_/g, "").toLowerCase(), i = n[0] === "-" ? -1 : 1, "+-".indexOf(n[0]) >= 0 && (n = /* @__PURE__ */ n.slice(1)), n === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : n === ".nan" ? NaN : i * parseFloat(n, 10);
}
m(Dn, "constructYamlFloat");
var Mn = /^[-+]?[0-9]+e/;
function Yn(e, n) {
	var i;
	if (isNaN(e)) switch (n) {
		case "lowercase": return ".nan";
		case "uppercase": return ".NAN";
		case "camelcase": return ".NaN";
	}
	else if (Number.POSITIVE_INFINITY === e) switch (n) {
		case "lowercase": return ".inf";
		case "uppercase": return ".INF";
		case "camelcase": return ".Inf";
	}
	else if (Number.NEGATIVE_INFINITY === e) switch (n) {
		case "lowercase": return "-.inf";
		case "uppercase": return "-.INF";
		case "camelcase": return "-.Inf";
	}
	else if (C.isNegativeZero(e)) return "-0.0";
	return i = /* @__PURE__ */ e.toString(10), Mn.test(i) ? i.replace("e", ".e") : i;
}
m(Yn, "representYamlFloat");
function Bn(e) {
	return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || C.isNegativeZero(e));
}
m(Bn, "isFloat");
var Pn = new _("tag:yaml.org,2002:float", {
	kind: "scalar",
	resolve: Rn,
	construct: Dn,
	predicate: Bn,
	represent: Yn,
	defaultStyle: "lowercase"
}), Ee = /* @__PURE__ */ gn.extend({ implicit: [
	Cn,
	Sn,
	kn,
	Pn
] }), Hn = Ee, Se = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), Fe = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function jn(e) {
	return e === null ? !1 : Se.exec(e) !== null || Fe.exec(e) !== null;
}
m(jn, "resolveYamlTimestamp");
function Un(e) {
	var n, i, l, r, u, o, f, a = 0, p = null, h, t, s;
	if (n = /* @__PURE__ */ Se.exec(e), n === null && (n = /* @__PURE__ */ Fe.exec(e)), n === null) throw new Error("Date resolve error");
	if (i = +n[1], l = +n[2] - 1, r = +n[3], !n[4]) return new Date(Date.UTC(i, l, r));
	if (u = +n[4], o = +n[5], f = +n[6], n[7]) {
		for (a = /* @__PURE__ */ n[7].slice(0, 3); a.length < 3;) a += "0";
		a = +a;
	}
	return n[9] && (h = +n[10], t = +(n[11] || 0), p = (h * 60 + t) * 6e4, n[9] === "-" && (p = -p)), s = new Date(Date.UTC(i, l, r, u, o, f, a)), p && s.setTime(s.getTime() - p), s;
}
m(Un, "constructYamlTimestamp");
function Kn(e) {
	return e.toISOString();
}
m(Kn, "representYamlTimestamp");
var qn = new _("tag:yaml.org,2002:timestamp", {
	kind: "scalar",
	resolve: jn,
	construct: Un,
	instanceOf: Date,
	represent: Kn
});
function Gn(e) {
	return e === "<<" || e === null;
}
m(Gn, "resolveYamlMerge");
var Wn = new _("tag:yaml.org,2002:merge", {
	kind: "scalar",
	resolve: Gn
}), ie = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function $n(e) {
	if (e === null) return !1;
	var n, i, l = 0, r = e.length, u = ie;
	for (i = 0; i < r; i++) if (n = /* @__PURE__ */ u.indexOf(/* @__PURE__ */ e.charAt(i)), !(n > 64)) {
		if (n < 0) return !1;
		l += 6;
	}
	return l % 8 === 0;
}
m($n, "resolveYamlBinary");
function Qn(e) {
	var n, i, l = /* @__PURE__ */ e.replace(/[\r\n=]/g, ""), r = l.length, u = ie, o = 0, f = [];
	for (n = 0; n < r; n++) n % 4 === 0 && n && (f.push(o >> 16 & 255), f.push(o >> 8 & 255), f.push(o & 255)), o = o << 6 | u.indexOf(/* @__PURE__ */ l.charAt(n));
	return i = r % 4 * 6, i === 0 ? (f.push(o >> 16 & 255), f.push(o >> 8 & 255), f.push(o & 255)) : i === 18 ? (f.push(o >> 10 & 255), f.push(o >> 2 & 255)) : i === 12 && f.push(o >> 4 & 255), new Uint8Array(f);
}
m(Qn, "constructYamlBinary");
function Vn(e) {
	var n = "", i = 0, l, r, u = e.length, o = ie;
	for (l = 0; l < u; l++) l % 3 === 0 && l && (n += o[i >> 18 & 63], n += o[i >> 12 & 63], n += o[i >> 6 & 63], n += o[i & 63]), i = (i << 8) + e[l];
	return r = u % 3, r === 0 ? (n += o[i >> 18 & 63], n += o[i >> 12 & 63], n += o[i >> 6 & 63], n += o[i & 63]) : r === 2 ? (n += o[i >> 10 & 63], n += o[i >> 4 & 63], n += o[i << 2 & 63], n += o[64]) : r === 1 && (n += o[i >> 2 & 63], n += o[i << 4 & 63], n += o[64], n += o[64]), n;
}
m(Vn, "representYamlBinary");
function Xn(e) {
	return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
m(Xn, "isBinary");
var Zn = new _("tag:yaml.org,2002:binary", {
	kind: "scalar",
	resolve: $n,
	construct: Qn,
	predicate: Xn,
	represent: Vn
}), zn = Object.prototype.hasOwnProperty, Jn = Object.prototype.toString;
function ei(e) {
	if (e === null) return !0;
	var n = [], i, l, r, u, o, f = e;
	for (i = 0, l = f.length; i < l; i += 1) {
		if (r = f[i], o = !1, Jn.call(r) !== "[object Object]") return !1;
		for (u in r) if (zn.call(r, u)) if (!o) o = !0;
		else return !1;
		if (!o) return !1;
		if (n.indexOf(u) === -1) n.push(u);
		else return !1;
	}
	return !0;
}
m(ei, "resolveYamlOmap");
function ni(e) {
	return e !== null ? e : [];
}
m(ni, "constructYamlOmap");
var ii = new _("tag:yaml.org,2002:omap", {
	kind: "sequence",
	resolve: ei,
	construct: ni
}), ri = Object.prototype.toString;
function li(e) {
	if (e === null) return !0;
	var n, i, l, r, u, o = e;
	for (u = new Array(o.length), n = 0, i = o.length; n < i; n += 1) {
		if (l = o[n], ri.call(l) !== "[object Object]" || (r = /* @__PURE__ */ Object.keys(l), r.length !== 1)) return !1;
		u[n] = [r[0], l[r[0]]];
	}
	return !0;
}
m(li, "resolveYamlPairs");
function oi(e) {
	if (e === null) return [];
	var n, i, l, r, u, o = e;
	for (u = new Array(o.length), n = 0, i = o.length; n < i; n += 1) l = o[n], r = /* @__PURE__ */ Object.keys(l), u[n] = [r[0], l[r[0]]];
	return u;
}
m(oi, "constructYamlPairs");
var ui = new _("tag:yaml.org,2002:pairs", {
	kind: "sequence",
	resolve: li,
	construct: oi
}), fi = Object.prototype.hasOwnProperty;
function ci(e) {
	if (e === null) return !0;
	var n, i = e;
	for (n in i) if (fi.call(i, n) && i[n] !== null) return !1;
	return !0;
}
m(ci, "resolveYamlSet");
function ai(e) {
	return e !== null ? e : {};
}
m(ai, "constructYamlSet");
var pi = new _("tag:yaml.org,2002:set", {
	kind: "mapping",
	resolve: ci,
	construct: ai
}), be = /* @__PURE__ */ Hn.extend({
	implicit: [qn, Wn],
	explicit: [
		Zn,
		ii,
		ui,
		pi
	]
}), I = Object.prototype.hasOwnProperty, U = 1, Te = 2, Oe = 3, K = 4, X = 1, ti = 2, ce = 3, hi = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, di = /[\x85\u2028\u2029]/, si = /[,\[\]\{\}]/, Ie = /^(?:!|!!|![a-z\-]+!)$/i, Le = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function ae(e) {
	return Object.prototype.toString.call(e);
}
m(ae, "_class");
function b(e) {
	return e === 10 || e === 13;
}
m(b, "is_EOL");
function k(e) {
	return e === 9 || e === 32;
}
m(k, "is_WHITE_SPACE");
function S(e) {
	return e === 9 || e === 32 || e === 10 || e === 13;
}
m(S, "is_WS_OR_EOL");
function R(e) {
	return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
m(R, "is_FLOW_INDICATOR");
function xi(e) {
	var n;
	return 48 <= e && e <= 57 ? e - 48 : (n = e | 32, 97 <= n && n <= 102 ? n - 97 + 10 : -1);
}
m(xi, "fromHexCode");
function mi(e) {
	return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
m(mi, "escapedHexLen");
function gi(e) {
	return 48 <= e && e <= 57 ? e - 48 : -1;
}
m(gi, "fromDecimalCode");
function pe(e) {
	return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? "\"" : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? "\xA0" : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
m(pe, "simpleEscapeSequence");
function Ai(e) {
	return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
}
m(Ai, "charFromCodepoint");
var ke = new Array(256), Ne = new Array(256);
for (L = 0; L < 256; L++) ke[L] = pe(L) ? 1 : 0, Ne[L] = /* @__PURE__ */ pe(L);
var L;
function vi(e, n) {
	this.input = e, this.filename = n.filename || null, this.schema = n.schema || be, this.onWarning = n.onWarning || null, this.legacy = n.legacy || !1, this.json = n.json || !1, this.listener = n.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
m(vi, "State$1");
function Re(e, n) {
	var i = {
		name: e.filename,
		buffer: /* @__PURE__ */ e.input.slice(0, -1),
		position: e.position,
		line: e.line,
		column: e.position - e.lineStart
	};
	return i.snippet = /* @__PURE__ */ fn(i), new E(n, i);
}
m(Re, "generateError");
function d(e, n) {
	throw Re(e, n);
}
m(d, "throwError");
function q(e, n) {
	e.onWarning && e.onWarning.call(null, /* @__PURE__ */ Re(e, n));
}
m(q, "throwWarning");
var te = {
	YAML: /* @__PURE__ */ m(function(n, i, l) {
		var r, u, o;
		n.version !== null && d(n, "duplication of %YAML directive"), l.length !== 1 && d(n, "YAML directive accepts exactly one argument"), r = /* @__PURE__ */ /^([0-9]+)\.([0-9]+)$/.exec(l[0]), r === null && d(n, "ill-formed argument of the YAML directive"), u = /* @__PURE__ */ parseInt(r[1], 10), o = /* @__PURE__ */ parseInt(r[2], 10), u !== 1 && d(n, "unacceptable YAML version of the document"), n.version = l[0], n.checkLineBreaks = o < 2, o !== 1 && o !== 2 && q(n, "unsupported YAML version of the document");
	}, "handleYamlDirective"),
	TAG: /* @__PURE__ */ m(function(n, i, l) {
		var r, u;
		l.length !== 2 && d(n, "TAG directive accepts exactly two arguments"), r = l[0], u = l[1], Ie.test(r) || d(n, "ill-formed tag handle (first argument) of the TAG directive"), I.call(n.tagMap, r) && d(n, "there is a previously declared suffix for \"" + r + "\" tag handle"), Le.test(u) || d(n, "ill-formed tag prefix (second argument) of the TAG directive");
		try {
			u = /* @__PURE__ */ decodeURIComponent(u);
		} catch {
			d(n, "tag prefix is malformed: " + u);
		}
		n.tagMap[r] = u;
	}, "handleTagDirective")
};
function O(e, n, i, l) {
	var r, u, o, f;
	if (n < i) {
		if (f = /* @__PURE__ */ e.input.slice(n, i), l) for (r = 0, u = f.length; r < u; r += 1) o = /* @__PURE__ */ f.charCodeAt(r), o === 9 || 32 <= o && o <= 1114111 || d(e, "expected valid JSON character");
		else hi.test(f) && d(e, "the stream contains non-printable characters");
		e.result += f;
	}
}
m(O, "captureSegment");
function he(e, n, i, l) {
	var r, u, o, f;
	for (C.isObject(i) || d(e, "cannot merge mappings; the provided source object is unacceptable"), r = /* @__PURE__ */ Object.keys(i), o = 0, f = r.length; o < f; o += 1) u = r[o], I.call(n, u) || (n[u] = i[u], l[u] = !0);
}
m(he, "mergeMappings");
function D(e, n, i, l, r, u, o, f, a) {
	var p, h;
	if (Array.isArray(r)) for (r = /* @__PURE__ */ Array.prototype.slice.call(r), p = 0, h = r.length; p < h; p += 1) Array.isArray(r[p]) && d(e, "nested arrays are not supported inside keys"), typeof r == "object" && ae(r[p]) === "[object Object]" && (r[p] = "[object Object]");
	if (typeof r == "object" && ae(r) === "[object Object]" && (r = "[object Object]"), r = /* @__PURE__ */ String(r), n === null && (n = {}), l === "tag:yaml.org,2002:merge") if (Array.isArray(u)) for (p = 0, h = u.length; p < h; p += 1) he(e, n, u[p], i);
	else he(e, n, u, i);
	else !e.json && !I.call(i, r) && I.call(n, r) && (e.line = o || e.line, e.lineStart = f || e.lineStart, e.position = a || e.position, d(e, "duplicated mapping key")), r === "__proto__" ? Object.defineProperty(n, r, {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: u
	}) : n[r] = u, delete i[r];
	return n;
}
m(D, "storeMappingPair");
function re(e) {
	var n = /* @__PURE__ */ e.input.charCodeAt(e.position);
	n === 10 ? e.position++ : n === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : d(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
m(re, "readLineBreak");
function y(e, n, i) {
	for (var l = 0, r = /* @__PURE__ */ e.input.charCodeAt(e.position); r !== 0;) {
		for (; k(r);) r === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), r = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		if (n && r === 35) do
			r = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		while (r !== 10 && r !== 13 && r !== 0);
		if (b(r)) for (re(e), r = /* @__PURE__ */ e.input.charCodeAt(e.position), l++, e.lineIndent = 0; r === 32;) e.lineIndent++, r = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		else break;
	}
	return i !== -1 && l !== 0 && e.lineIndent < i && q(e, "deficient indentation"), l;
}
m(y, "skipSeparationSpace");
function $(e) {
	var n = e.position, i;
	return i = /* @__PURE__ */ e.input.charCodeAt(n), !!((i === 45 || i === 46) && i === e.input.charCodeAt(n + 1) && i === e.input.charCodeAt(n + 2) && (n += 3, i = /* @__PURE__ */ e.input.charCodeAt(n), i === 0 || S(i)));
}
m($, "testDocumentSeparator");
function le(e, n) {
	n === 1 ? e.result += " " : n > 1 && (e.result += /* @__PURE__ */ C.repeat(`
`, n - 1));
}
m(le, "writeFoldedLines");
function yi(e, n, i) {
	var l, r, u, o, f, a, p, h, t = e.kind, s = e.result, x;
	if (x = /* @__PURE__ */ e.input.charCodeAt(e.position), S(x) || R(x) || x === 35 || x === 38 || x === 42 || x === 33 || x === 124 || x === 62 || x === 39 || x === 34 || x === 37 || x === 64 || x === 96 || (x === 63 || x === 45) && (r = /* @__PURE__ */ e.input.charCodeAt(e.position + 1), S(r) || i && R(r))) return !1;
	for (e.kind = "scalar", e.result = "", u = o = e.position, f = !1; x !== 0;) {
		if (x === 58) {
			if (r = /* @__PURE__ */ e.input.charCodeAt(e.position + 1), S(r) || i && R(r)) break;
		} else if (x === 35) {
			if (l = /* @__PURE__ */ e.input.charCodeAt(e.position - 1), S(l)) break;
		} else {
			if (e.position === e.lineStart && $(e) || i && R(x)) break;
			if (b(x)) if (a = e.line, p = e.lineStart, h = e.lineIndent, y(e, !1, -1), e.lineIndent >= n) {
				f = !0, x = /* @__PURE__ */ e.input.charCodeAt(e.position);
				continue;
			} else {
				e.position = o, e.line = a, e.lineStart = p, e.lineIndent = h;
				break;
			}
		}
		f && (O(e, u, o, !1), le(e, e.line - a), u = o = e.position, f = !1), k(x) || (o = e.position + 1), x = /* @__PURE__ */ e.input.charCodeAt(++e.position);
	}
	return O(e, u, o, !1), e.result ? !0 : (e.kind = t, e.result = s, !1);
}
m(yi, "readPlainScalar");
function Ci(e, n) {
	var i, l, r;
	if (i = /* @__PURE__ */ e.input.charCodeAt(e.position), i !== 39) return !1;
	for (e.kind = "scalar", e.result = "", e.position++, l = r = e.position; (i = /* @__PURE__ */ e.input.charCodeAt(e.position)) !== 0;) if (i === 39) if (O(e, l, e.position, !0), i = /* @__PURE__ */ e.input.charCodeAt(++e.position), i === 39) l = e.position, e.position++, r = e.position;
	else return !0;
	else b(i) ? (O(e, l, r, !0), le(e, /* @__PURE__ */ y(e, !1, n)), l = r = e.position) : e.position === e.lineStart && $(e) ? d(e, "unexpected end of the document within a single quoted scalar") : (e.position++, r = e.position);
	d(e, "unexpected end of the stream within a single quoted scalar");
}
m(Ci, "readSingleQuotedScalar");
function _i(e, n) {
	var i, l, r, u, o, f;
	if (f = /* @__PURE__ */ e.input.charCodeAt(e.position), f !== 34) return !1;
	for (e.kind = "scalar", e.result = "", e.position++, i = l = e.position; (f = /* @__PURE__ */ e.input.charCodeAt(e.position)) !== 0;) {
		if (f === 34) return O(e, i, e.position, !0), e.position++, !0;
		if (f === 92) {
			if (O(e, i, e.position, !0), f = /* @__PURE__ */ e.input.charCodeAt(++e.position), b(f)) y(e, !1, n);
			else if (f < 256 && ke[f]) e.result += Ne[f], e.position++;
			else if ((o = /* @__PURE__ */ mi(f)) > 0) {
				for (r = o, u = 0; r > 0; r--) f = /* @__PURE__ */ e.input.charCodeAt(++e.position), (o = /* @__PURE__ */ xi(f)) >= 0 ? u = (u << 4) + o : d(e, "expected hexadecimal character");
				e.result += /* @__PURE__ */ Ai(u), e.position++;
			} else d(e, "unknown escape sequence");
			i = l = e.position;
		} else b(f) ? (O(e, i, l, !0), le(e, /* @__PURE__ */ y(e, !1, n)), i = l = e.position) : e.position === e.lineStart && $(e) ? d(e, "unexpected end of the document within a double quoted scalar") : (e.position++, l = e.position);
	}
	d(e, "unexpected end of the stream within a double quoted scalar");
}
m(_i, "readDoubleQuotedScalar");
function wi(e, n) {
	var i = !0, l, r, u, o = e.tag, f, a = e.anchor, p, h, t, s, x, m$1 = /* @__PURE__ */ Object.create(null), A, v, F, g;
	if (g = /* @__PURE__ */ e.input.charCodeAt(e.position), g === 91) h = 93, x = !1, f = [];
	else if (g === 123) h = 125, x = !0, f = {};
	else return !1;
	for (e.anchor !== null && (e.anchorMap[e.anchor] = f), g = /* @__PURE__ */ e.input.charCodeAt(++e.position); g !== 0;) {
		if (y(e, !0, n), g = /* @__PURE__ */ e.input.charCodeAt(e.position), g === h) return e.position++, e.tag = o, e.anchor = a, e.kind = x ? "mapping" : "sequence", e.result = f, !0;
		i ? g === 44 && d(e, "expected the node content, but found ','") : d(e, "missed comma between flow collection entries"), v = A = F = null, t = s = !1, g === 63 && (p = /* @__PURE__ */ e.input.charCodeAt(e.position + 1), S(p) && (t = s = !0, e.position++, y(e, !0, n))), l = e.line, r = e.lineStart, u = e.position, M(e, n, U, !1, !0), v = e.tag, A = e.result, y(e, !0, n), g = /* @__PURE__ */ e.input.charCodeAt(e.position), (s || e.line === l) && g === 58 && (t = !0, g = /* @__PURE__ */ e.input.charCodeAt(++e.position), y(e, !0, n), M(e, n, U, !1, !0), F = e.result), x ? D(e, f, m$1, v, A, F, l, r, u) : t ? f.push(/* @__PURE__ */ D(e, null, m$1, v, A, F, l, r, u)) : f.push(A), y(e, !0, n), g = /* @__PURE__ */ e.input.charCodeAt(e.position), g === 44 ? (i = !0, g = /* @__PURE__ */ e.input.charCodeAt(++e.position)) : i = !1;
	}
	d(e, "unexpected end of the stream within a flow collection");
}
m(wi, "readFlowCollection");
function Ei(e, n) {
	var i, l, r = X, u = !1, o = !1, f = n, a = 0, p = !1, h, t;
	if (t = /* @__PURE__ */ e.input.charCodeAt(e.position), t === 124) l = !1;
	else if (t === 62) l = !0;
	else return !1;
	for (e.kind = "scalar", e.result = ""; t !== 0;) if (t = /* @__PURE__ */ e.input.charCodeAt(++e.position), t === 43 || t === 45) X === r ? r = t === 43 ? ce : ti : d(e, "repeat of a chomping mode identifier");
	else if ((h = /* @__PURE__ */ gi(t)) >= 0) h === 0 ? d(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? d(e, "repeat of an indentation width identifier") : (f = n + h - 1, o = !0);
	else break;
	if (k(t)) {
		do
			t = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		while (k(t));
		if (t === 35) do
			t = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		while (!b(t) && t !== 0);
	}
	for (; t !== 0;) {
		for (re(e), e.lineIndent = 0, t = /* @__PURE__ */ e.input.charCodeAt(e.position); (!o || e.lineIndent < f) && t === 32;) e.lineIndent++, t = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		if (!o && e.lineIndent > f && (f = e.lineIndent), b(t)) {
			a++;
			continue;
		}
		if (e.lineIndent < f) {
			r === ce ? e.result += /* @__PURE__ */ C.repeat(`
`, u ? 1 + a : a) : r === X && u && (e.result += `
`);
			break;
		}
		for (l ? k(t) ? (p = !0, e.result += /* @__PURE__ */ C.repeat(`
`, u ? 1 + a : a)) : p ? (p = !1, e.result += /* @__PURE__ */ C.repeat(`
`, a + 1)) : a === 0 ? u && (e.result += " ") : e.result += /* @__PURE__ */ C.repeat(`
`, a) : e.result += /* @__PURE__ */ C.repeat(`
`, u ? 1 + a : a), u = !0, o = !0, a = 0, i = e.position; !b(t) && t !== 0;) t = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		O(e, i, e.position, !1);
	}
	return !0;
}
m(Ei, "readBlockScalar");
function de(e, n) {
	var i, l = e.tag, r = e.anchor, u = [], o, f = !1, a;
	if (e.firstTabInLine !== -1) return !1;
	for (e.anchor !== null && (e.anchorMap[e.anchor] = u), a = /* @__PURE__ */ e.input.charCodeAt(e.position); a !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, d(e, "tab characters must not be used in indentation")), !(a !== 45 || (o = /* @__PURE__ */ e.input.charCodeAt(e.position + 1), !S(o))));) {
		if (f = !0, e.position++, y(e, !0, -1) && e.lineIndent <= n) {
			u.push(null), a = /* @__PURE__ */ e.input.charCodeAt(e.position);
			continue;
		}
		if (i = e.line, M(e, n, Oe, !1, !0), u.push(e.result), y(e, !0, -1), a = /* @__PURE__ */ e.input.charCodeAt(e.position), (e.line === i || e.lineIndent > n) && a !== 0) d(e, "bad indentation of a sequence entry");
		else if (e.lineIndent < n) break;
	}
	return f ? (e.tag = l, e.anchor = r, e.kind = "sequence", e.result = u, !0) : !1;
}
m(de, "readBlockSequence");
function Si(e, n, i) {
	var l, r, u, o, f, a, p = e.tag, h = e.anchor, t = {}, s = /* @__PURE__ */ Object.create(null), x = null, m$1 = null, A = null, v = !1, F = !1, g;
	if (e.firstTabInLine !== -1) return !1;
	for (e.anchor !== null && (e.anchorMap[e.anchor] = t), g = /* @__PURE__ */ e.input.charCodeAt(e.position); g !== 0;) {
		if (!v && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, d(e, "tab characters must not be used in indentation")), l = /* @__PURE__ */ e.input.charCodeAt(e.position + 1), u = e.line, (g === 63 || g === 58) && S(l)) g === 63 ? (v && (D(e, t, s, x, m$1, null, o, f, a), x = m$1 = A = null), F = !0, v = !0, r = !0) : v ? (v = !1, r = !0) : d(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, g = l;
		else {
			if (o = e.line, f = e.lineStart, a = e.position, !M(e, i, Te, !1, !0)) break;
			if (e.line === u) {
				for (g = /* @__PURE__ */ e.input.charCodeAt(e.position); k(g);) g = /* @__PURE__ */ e.input.charCodeAt(++e.position);
				if (g === 58) g = /* @__PURE__ */ e.input.charCodeAt(++e.position), S(g) || d(e, "a whitespace character is expected after the key-value separator within a block mapping"), v && (D(e, t, s, x, m$1, null, o, f, a), x = m$1 = A = null), F = !0, v = !1, r = !1, x = e.tag, m$1 = e.result;
				else if (F) d(e, "can not read an implicit mapping pair; a colon is missed");
				else return e.tag = p, e.anchor = h, !0;
			} else if (F) d(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
			else return e.tag = p, e.anchor = h, !0;
		}
		if ((e.line === u || e.lineIndent > n) && (v && (o = e.line, f = e.lineStart, a = e.position), M(e, n, K, !0, r) && (v ? m$1 = e.result : A = e.result), v || (D(e, t, s, x, m$1, A, o, f, a), x = m$1 = A = null), y(e, !0, -1), g = /* @__PURE__ */ e.input.charCodeAt(e.position)), (e.line === u || e.lineIndent > n) && g !== 0) d(e, "bad indentation of a mapping entry");
		else if (e.lineIndent < n) break;
	}
	return v && D(e, t, s, x, m$1, null, o, f, a), F && (e.tag = p, e.anchor = h, e.kind = "mapping", e.result = t), F;
}
m(Si, "readBlockMapping");
function Fi(e) {
	var n, i = !1, l = !1, r, u, o;
	if (o = /* @__PURE__ */ e.input.charCodeAt(e.position), o !== 33) return !1;
	if (e.tag !== null && d(e, "duplication of a tag property"), o = /* @__PURE__ */ e.input.charCodeAt(++e.position), o === 60 ? (i = !0, o = /* @__PURE__ */ e.input.charCodeAt(++e.position)) : o === 33 ? (l = !0, r = "!!", o = /* @__PURE__ */ e.input.charCodeAt(++e.position)) : r = "!", n = e.position, i) {
		do
			o = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		while (o !== 0 && o !== 62);
		e.position < e.length ? (u = /* @__PURE__ */ e.input.slice(n, e.position), o = /* @__PURE__ */ e.input.charCodeAt(++e.position)) : d(e, "unexpected end of the stream within a verbatim tag");
	} else {
		for (; o !== 0 && !S(o);) o === 33 && (l ? d(e, "tag suffix cannot contain exclamation marks") : (r = /* @__PURE__ */ e.input.slice(n - 1, e.position + 1), Ie.test(r) || d(e, "named tag handle cannot contain such characters"), l = !0, n = e.position + 1)), o = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		u = /* @__PURE__ */ e.input.slice(n, e.position), si.test(u) && d(e, "tag suffix cannot contain flow indicator characters");
	}
	u && !Le.test(u) && d(e, "tag name cannot contain such characters: " + u);
	try {
		u = /* @__PURE__ */ decodeURIComponent(u);
	} catch {
		d(e, "tag name is malformed: " + u);
	}
	return i ? e.tag = u : I.call(e.tagMap, r) ? e.tag = e.tagMap[r] + u : r === "!" ? e.tag = "!" + u : r === "!!" ? e.tag = "tag:yaml.org,2002:" + u : d(e, "undeclared tag handle \"" + r + "\""), !0;
}
m(Fi, "readTagProperty");
function bi(e) {
	var n, i;
	if (i = /* @__PURE__ */ e.input.charCodeAt(e.position), i !== 38) return !1;
	for (e.anchor !== null && d(e, "duplication of an anchor property"), i = /* @__PURE__ */ e.input.charCodeAt(++e.position), n = e.position; i !== 0 && !S(i) && !R(i);) i = /* @__PURE__ */ e.input.charCodeAt(++e.position);
	return e.position === n && d(e, "name of an anchor node must contain at least one character"), e.anchor = /* @__PURE__ */ e.input.slice(n, e.position), !0;
}
m(bi, "readAnchorProperty");
function Ti(e) {
	var n, i, l;
	if (l = /* @__PURE__ */ e.input.charCodeAt(e.position), l !== 42) return !1;
	for (l = /* @__PURE__ */ e.input.charCodeAt(++e.position), n = e.position; l !== 0 && !S(l) && !R(l);) l = /* @__PURE__ */ e.input.charCodeAt(++e.position);
	return e.position === n && d(e, "name of an alias node must contain at least one character"), i = /* @__PURE__ */ e.input.slice(n, e.position), I.call(e.anchorMap, i) || d(e, "unidentified alias \"" + i + "\""), e.result = e.anchorMap[i], y(e, !0, -1), !0;
}
m(Ti, "readAlias");
function M(e, n, i, l, r) {
	var u, o, f, a = 1, p = !1, h = !1, t, s, x, m$1, A, v;
	if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, u = o = f = K === i || Oe === i, l && y(e, !0, -1) && (p = !0, e.lineIndent > n ? a = 1 : e.lineIndent === n ? a = 0 : e.lineIndent < n && (a = -1)), a === 1) for (; Fi(e) || bi(e);) y(e, !0, -1) ? (p = !0, f = u, e.lineIndent > n ? a = 1 : e.lineIndent === n ? a = 0 : e.lineIndent < n && (a = -1)) : f = !1;
	if (f && (f = p || r), (a === 1 || K === i) && (U === i || Te === i ? A = n : A = n + 1, v = e.position - e.lineStart, a === 1 ? f && (de(e, v) || Si(e, v, A)) || wi(e, A) ? h = !0 : (o && Ei(e, A) || Ci(e, A) || _i(e, A) ? h = !0 : Ti(e) ? (h = !0, (e.tag !== null || e.anchor !== null) && d(e, "alias node should not have any properties")) : yi(e, A, U === i) && (h = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : a === 0 && (h = f && de(e, v))), e.tag === null) e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
	else if (e.tag === "?") {
		for (e.result !== null && e.kind !== "scalar" && d(e, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + e.kind + "\""), t = 0, s = e.implicitTypes.length; t < s; t += 1) if (m$1 = e.implicitTypes[t], m$1.resolve(e.result)) {
			e.result = /* @__PURE__ */ m$1.construct(e.result), e.tag = m$1.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
			break;
		}
	} else if (e.tag !== "!") {
		if (I.call(e.typeMap[e.kind || "fallback"], e.tag)) m$1 = e.typeMap[e.kind || "fallback"][e.tag];
		else for (m$1 = null, x = e.typeMap.multi[e.kind || "fallback"], t = 0, s = x.length; t < s; t += 1) if (e.tag.slice(0, x[t].tag.length) === x[t].tag) {
			m$1 = x[t];
			break;
		}
		m$1 || d(e, "unknown tag !<" + e.tag + ">"), e.result !== null && m$1.kind !== e.kind && d(e, "unacceptable node kind for !<" + e.tag + "> tag; it should be \"" + m$1.kind + "\", not \"" + e.kind + "\""), m$1.resolve(e.result, e.tag) ? (e.result = /* @__PURE__ */ m$1.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : d(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
	}
	return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
}
m(M, "composeNode");
function Oi(e) {
	var n = e.position, i, l, r, u = !1, o;
	for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = /* @__PURE__ */ e.input.charCodeAt(e.position)) !== 0 && (y(e, !0, -1), o = /* @__PURE__ */ e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37));) {
		for (u = !0, o = /* @__PURE__ */ e.input.charCodeAt(++e.position), i = e.position; o !== 0 && !S(o);) o = /* @__PURE__ */ e.input.charCodeAt(++e.position);
		for (l = /* @__PURE__ */ e.input.slice(i, e.position), r = [], l.length < 1 && d(e, "directive name must not be less than one character in length"); o !== 0;) {
			for (; k(o);) o = /* @__PURE__ */ e.input.charCodeAt(++e.position);
			if (o === 35) {
				do
					o = /* @__PURE__ */ e.input.charCodeAt(++e.position);
				while (o !== 0 && !b(o));
				break;
			}
			if (b(o)) break;
			for (i = e.position; o !== 0 && !S(o);) o = /* @__PURE__ */ e.input.charCodeAt(++e.position);
			r.push(/* @__PURE__ */ e.input.slice(i, e.position));
		}
		o !== 0 && re(e), I.call(te, l) ? te[l](e, l, r) : q(e, "unknown document directive \"" + l + "\"");
	}
	if (y(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, y(e, !0, -1)) : u && d(e, "directives end mark is expected"), M(e, e.lineIndent - 1, K, !1, !0), y(e, !0, -1), e.checkLineBreaks && di.test(/* @__PURE__ */ e.input.slice(n, e.position)) && q(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && $(e)) {
		e.input.charCodeAt(e.position) === 46 && (e.position += 3, y(e, !0, -1));
		return;
	}
	if (e.position < e.length - 1) d(e, "end of the stream or a document separator is expected");
	else return;
}
m(Oi, "readDocument");
function De(e, n) {
	e = /* @__PURE__ */ String(e), n = n || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = /* @__PURE__ */ e.slice(1)));
	var i = new vi(e, n), l = /* @__PURE__ */ e.indexOf("\0");
	for (l !== -1 && (i.position = l, d(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32;) i.lineIndent += 1, i.position += 1;
	for (; i.position < i.length - 1;) Oi(i);
	return i.documents;
}
m(De, "loadDocuments");
function Ii(e, n, i) {
	n !== null && typeof n == "object" && typeof i > "u" && (i = n, n = null);
	var l = /* @__PURE__ */ De(e, i);
	if (typeof n != "function") return l;
	for (var r = 0, u = l.length; r < u; r += 1) n(l[r]);
}
m(Ii, "loadAll$1");
function Li(e, n) {
	var i = /* @__PURE__ */ De(e, n);
	if (i.length !== 0) {
		if (i.length === 1) return i[0];
		throw new E("expected a single document in the stream, but found more");
	}
}
m(Li, "load$1");
var Me = {
	loadAll: Ii,
	load: Li
}, Ye = Object.prototype.toString, Be = Object.prototype.hasOwnProperty, oe = 65279, Ri = 9, P = 10, Di = 13, Mi = 32, Yi = 33, Bi = 34, z = 35, Pi = 37, Hi = 38, ji = 39, Ui = 42, Pe = 44, Ki = 45, G = 58, qi = 61, Gi = 62, Wi = 63, $i = 64, He = 91, je = 93, Qi = 96, Ue = 123, Vi = 124, Ke = 125, w = {};
w[0] = "\\0";
w[7] = "\\a";
w[8] = "\\b";
w[9] = "\\t";
w[10] = "\\n";
w[11] = "\\v";
w[12] = "\\f";
w[13] = "\\r";
w[27] = "\\e";
w[34] = "\\\"";
w[92] = "\\\\";
w[133] = "\\N";
w[160] = "\\_";
w[8232] = "\\L";
w[8233] = "\\P";
var Xi = [
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
], Zi = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function zi(e, n) {
	var i, l, r, u, o, f, a;
	if (n === null) return {};
	for (i = {}, l = /* @__PURE__ */ Object.keys(n), r = 0, u = l.length; r < u; r += 1) o = l[r], f = /* @__PURE__ */ String(n[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), a = e.compiledTypeMap.fallback[o], a && Be.call(a.styleAliases, f) && (f = a.styleAliases[f]), i[o] = f;
	return i;
}
m(zi, "compileStyleMap");
function Ji(e) {
	var n, i, l;
	if (n = /* @__PURE__ */ e.toString(16).toUpperCase(), e <= 255) i = "x", l = 2;
	else if (e <= 65535) i = "u", l = 4;
	else if (e <= 4294967295) i = "U", l = 8;
	else throw new E("code point within a string may not be greater than 0xFFFFFFFF");
	return "\\" + i + C.repeat("0", l - n.length) + n;
}
m(Ji, "encodeHex");
var er = 1, H = 2;
function nr(e) {
	this.schema = e.schema || be, this.indent = /* @__PURE__ */ Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = C.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = /* @__PURE__ */ zi(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === "\"" ? H : er, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
m(nr, "State");
function se(e, n) {
	for (var i = /* @__PURE__ */ C.repeat(" ", n), l = 0, r = -1, u = "", o, f = e.length; l < f;) r = /* @__PURE__ */ e.indexOf(`
`, l), r === -1 ? (o = /* @__PURE__ */ e.slice(l), l = f) : (o = /* @__PURE__ */ e.slice(l, r + 1), l = r + 1), o.length && o !== `
` && (u += i), u += o;
	return u;
}
m(se, "indentString");
function J(e, n) {
	return `
` + C.repeat(" ", e.indent * n);
}
m(J, "generateNextLine");
function ir(e, n) {
	var i, l, r;
	for (i = 0, l = e.implicitTypes.length; i < l; i += 1) if (r = e.implicitTypes[i], r.resolve(n)) return !0;
	return !1;
}
m(ir, "testImplicitResolving");
function W(e) {
	return e === Mi || e === Ri;
}
m(W, "isWhitespace");
function j(e) {
	return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== oe || 65536 <= e && e <= 1114111;
}
m(j, "isPrintable");
function xe(e) {
	return j(e) && e !== oe && e !== Di && e !== P;
}
m(xe, "isNsCharOrWhitespace");
function me(e, n, i) {
	var l = /* @__PURE__ */ xe(e), r = l && !W(e);
	return (i ? l : l && e !== Pe && e !== He && e !== je && e !== Ue && e !== Ke) && e !== z && !(n === G && !r) || xe(n) && !W(n) && e === z || n === G && r;
}
m(me, "isPlainSafe");
function rr(e) {
	return j(e) && e !== oe && !W(e) && e !== Ki && e !== Wi && e !== G && e !== Pe && e !== He && e !== je && e !== Ue && e !== Ke && e !== z && e !== Hi && e !== Ui && e !== Yi && e !== Vi && e !== qi && e !== Gi && e !== ji && e !== Bi && e !== Pi && e !== $i && e !== Qi;
}
m(rr, "isPlainSafeFirst");
function lr(e) {
	return !W(e) && e !== G;
}
m(lr, "isPlainSafeLast");
function Y(e, n) {
	var i = /* @__PURE__ */ e.charCodeAt(n), l;
	return i >= 55296 && i <= 56319 && n + 1 < e.length && (l = /* @__PURE__ */ e.charCodeAt(n + 1), l >= 56320 && l <= 57343) ? (i - 55296) * 1024 + l - 56320 + 65536 : i;
}
m(Y, "codePointAt");
function qe(e) {
	return /^\n* /.test(e);
}
m(qe, "needIndentIndicator");
var Ge = 1, ee = 2, We = 3, $e = 4, N = 5;
function or(e, n, i, l, r, u, o, f) {
	var a, p = 0, h = null, t = !1, s = !1, x = l !== -1, m$1 = -1, A = rr(/* @__PURE__ */ Y(e, 0)) && lr(/* @__PURE__ */ Y(e, e.length - 1));
	if (n || o) for (a = 0; a < e.length; p >= 65536 ? a += 2 : a++) {
		if (p = /* @__PURE__ */ Y(e, a), !j(p)) return N;
		A = A && me(p, h, f), h = p;
	}
	else {
		for (a = 0; a < e.length; p >= 65536 ? a += 2 : a++) {
			if (p = /* @__PURE__ */ Y(e, a), p === P) t = !0, x && (s = s || a - m$1 - 1 > l && e[m$1 + 1] !== " ", m$1 = a);
			else if (!j(p)) return N;
			A = A && me(p, h, f), h = p;
		}
		s = s || x && a - m$1 - 1 > l && e[m$1 + 1] !== " ";
	}
	return !t && !s ? A && !o && !r(e) ? Ge : u === H ? N : ee : i > 9 && qe(e) ? N : o ? u === H ? N : ee : s ? $e : We;
}
m(or, "chooseScalarStyle");
function ur(e, n, i, l, r) {
	e.dump = /* @__PURE__ */ function() {
		if (n.length === 0) return e.quotingType === H ? "\"\"" : "''";
		if (!e.noCompatMode && (Xi.indexOf(n) !== -1 || Zi.test(n))) return e.quotingType === H ? "\"" + n + "\"" : "'" + n + "'";
		var u = e.indent * Math.max(1, i), o = e.lineWidth === -1 ? -1 : Math.max(/* @__PURE__ */ Math.min(e.lineWidth, 40), e.lineWidth - u), f = l || e.flowLevel > -1 && i >= e.flowLevel;
		function a(p) {
			return ir(e, p);
		}
		switch (m(a, "testAmbiguity"), or(n, f, e.indent, o, a, e.quotingType, e.forceQuotes && !l, r)) {
			case Ge: return n;
			case ee: return "'" + n.replace(/'/g, "''") + "'";
			case We: return "|" + ge(n, e.indent) + Ae(/* @__PURE__ */ se(n, u));
			case $e: return ">" + ge(n, e.indent) + Ae(/* @__PURE__ */ se(/* @__PURE__ */ fr(n, o), u));
			case N: return "\"" + cr(n) + "\"";
			default: throw new E("impossible error: invalid scalar style");
		}
	}();
}
m(ur, "writeScalar");
function ge(e, n) {
	var i = qe(e) ? String(n) : "", l = e[e.length - 1] === `
`;
	return i + (l && (e[e.length - 2] === `
` || e === `
`) ? "+" : l ? "" : "-") + `
`;
}
m(ge, "blockHeader");
function Ae(e) {
	return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
m(Ae, "dropEndingNewline");
function fr(e, n) {
	for (var i = /(\n+)([^\n]*)/g, l = /* @__PURE__ */ function() {
		var p = /* @__PURE__ */ e.indexOf(`
`);
		return p = p !== -1 ? p : e.length, i.lastIndex = p, ve(/* @__PURE__ */ e.slice(0, p), n);
	}(), r = e[0] === `
` || e[0] === " ", u, o; o = /* @__PURE__ */ i.exec(e);) {
		var f = o[1], a = o[2];
		u = a[0] === " ", l += f + (!r && !u && a !== "" ? `
` : "") + ve(a, n), r = u;
	}
	return l;
}
m(fr, "foldString");
function ve(e, n) {
	if (e === "" || e[0] === " ") return e;
	for (var i = / [^ ]/g, l, r = 0, u, o = 0, f = 0, a = ""; l = /* @__PURE__ */ i.exec(e);) f = l.index, f - r > n && (u = o > r ? o : f, a += `
` + e.slice(r, u), r = u + 1), o = f;
	return a += `
`, e.length - r > n && o > r ? a += e.slice(r, o) + `
` + e.slice(o + 1) : a += /* @__PURE__ */ e.slice(r), a.slice(1);
}
m(ve, "foldLine");
function cr(e) {
	for (var n = "", i = 0, l, r = 0; r < e.length; i >= 65536 ? r += 2 : r++) i = /* @__PURE__ */ Y(e, r), l = w[i], !l && j(i) ? (n += e[r], i >= 65536 && (n += e[r + 1])) : n += l || Ji(i);
	return n;
}
m(cr, "escapeString");
function ar(e, n, i) {
	var l = "", r = e.tag, u, o, f;
	for (u = 0, o = i.length; u < o; u += 1) f = i[u], e.replacer && (f = /* @__PURE__ */ e.replacer.call(i, /* @__PURE__ */ String(u), f)), (T(e, n, f, !1, !1) || typeof f > "u" && T(e, n, null, !1, !1)) && (l !== "" && (l += "," + (e.condenseFlow ? "" : " ")), l += e.dump);
	e.tag = r, e.dump = "[" + l + "]";
}
m(ar, "writeFlowSequence");
function ye(e, n, i, l) {
	var r = "", u = e.tag, o, f, a;
	for (o = 0, f = i.length; o < f; o += 1) a = i[o], e.replacer && (a = /* @__PURE__ */ e.replacer.call(i, /* @__PURE__ */ String(o), a)), (T(e, n + 1, a, !0, !0, !1, !0) || typeof a > "u" && T(e, n + 1, null, !0, !0, !1, !0)) && ((!l || r !== "") && (r += /* @__PURE__ */ J(e, n)), e.dump && P === e.dump.charCodeAt(0) ? r += "-" : r += "- ", r += e.dump);
	e.tag = u, e.dump = r || "[]";
}
m(ye, "writeBlockSequence");
function pr(e, n, i) {
	var l = "", r = e.tag, u = /* @__PURE__ */ Object.keys(i), o, f, a, p, h;
	for (o = 0, f = u.length; o < f; o += 1) h = "", l !== "" && (h += ", "), e.condenseFlow && (h += "\""), a = u[o], p = i[a], e.replacer && (p = /* @__PURE__ */ e.replacer.call(i, a, p)), T(e, n, a, !1, !1) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? "\"" : "") + ":" + (e.condenseFlow ? "" : " "), T(e, n, p, !1, !1) && (h += e.dump, l += h));
	e.tag = r, e.dump = "{" + l + "}";
}
m(pr, "writeFlowMapping");
function tr(e, n, i, l) {
	var r = "", u = e.tag, o = /* @__PURE__ */ Object.keys(i), f, a, p, h, t, s;
	if (e.sortKeys === !0) o.sort();
	else if (typeof e.sortKeys == "function") o.sort(e.sortKeys);
	else if (e.sortKeys) throw new E("sortKeys must be a boolean or a function");
	for (f = 0, a = o.length; f < a; f += 1) s = "", (!l || r !== "") && (s += /* @__PURE__ */ J(e, n)), p = o[f], h = i[p], e.replacer && (h = /* @__PURE__ */ e.replacer.call(i, p, h)), T(e, n + 1, p, !0, !0, !0) && (t = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, t && (e.dump && P === e.dump.charCodeAt(0) ? s += "?" : s += "? "), s += e.dump, t && (s += /* @__PURE__ */ J(e, n)), T(e, n + 1, h, !0, t) && (e.dump && P === e.dump.charCodeAt(0) ? s += ":" : s += ": ", s += e.dump, r += s));
	e.tag = u, e.dump = r || "{}";
}
m(tr, "writeBlockMapping");
function Ce(e, n, i) {
	var l, r, u, o, f, a;
	for (r = i ? e.explicitTypes : e.implicitTypes, u = 0, o = r.length; u < o; u += 1) if (f = r[u], (f.instanceOf || f.predicate) && (!f.instanceOf || typeof n == "object" && n instanceof f.instanceOf) && (!f.predicate || f.predicate(n))) {
		if (i ? f.multi && f.representName ? e.tag = /* @__PURE__ */ f.representName(n) : e.tag = f.tag : e.tag = "?", f.represent) {
			if (a = e.styleMap[f.tag] || f.defaultStyle, Ye.call(f.represent) === "[object Function]") l = /* @__PURE__ */ f.represent(n, a);
			else if (Be.call(f.represent, a)) l = /* @__PURE__ */ f.represent[a](n, a);
			else throw new E("!<" + f.tag + "> tag resolver accepts not \"" + a + "\" style");
			e.dump = l;
		}
		return !0;
	}
	return !1;
}
m(Ce, "detectType");
function T(e, n, i, l, r, u, o) {
	e.tag = null, e.dump = i, Ce(e, i, !1) || Ce(e, i, !0);
	var f = /* @__PURE__ */ Ye.call(e.dump), a = l, p;
	l && (l = e.flowLevel < 0 || e.flowLevel > n);
	var h = f === "[object Object]" || f === "[object Array]", t, s;
	if (h && (t = /* @__PURE__ */ e.duplicates.indexOf(i), s = t !== -1), (e.tag !== null && e.tag !== "?" || s || e.indent !== 2 && n > 0) && (r = !1), s && e.usedDuplicates[t]) e.dump = "*ref_" + t;
	else {
		if (h && s && !e.usedDuplicates[t] && (e.usedDuplicates[t] = !0), f === "[object Object]") l && Object.keys(e.dump).length !== 0 ? (tr(e, n, e.dump, r), s && (e.dump = "&ref_" + t + e.dump)) : (pr(e, n, e.dump), s && (e.dump = "&ref_" + t + " " + e.dump));
		else if (f === "[object Array]") l && e.dump.length !== 0 ? (e.noArrayIndent && !o && n > 0 ? ye(e, n - 1, e.dump, r) : ye(e, n, e.dump, r), s && (e.dump = "&ref_" + t + e.dump)) : (ar(e, n, e.dump), s && (e.dump = "&ref_" + t + " " + e.dump));
		else if (f === "[object String]") e.tag !== "?" && ur(e, e.dump, n, u, a);
		else {
			if (f === "[object Undefined]") return !1;
			if (e.skipInvalid) return !1;
			throw new E("unacceptable kind of an object to dump " + f);
		}
		e.tag !== null && e.tag !== "?" && (p = /* @__PURE__ */ encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(/!/g, "%21"), e.tag[0] === "!" ? p = "!" + p : p.slice(0, 18) === "tag:yaml.org,2002:" ? p = "!!" + p.slice(18) : p = "!<" + p + ">", e.dump = p + " " + e.dump);
	}
	return !0;
}
m(T, "writeNode");
function hr(e, n) {
	var i = [], l = [], r, u;
	for (ne(e, i, l), r = 0, u = l.length; r < u; r += 1) n.duplicates.push(i[l[r]]);
	n.usedDuplicates = new Array(u);
}
m(hr, "getDuplicateReferences");
function ne(e, n, i) {
	var l, r, u;
	if (e !== null && typeof e == "object") if (r = /* @__PURE__ */ n.indexOf(e), r !== -1) i.indexOf(r) === -1 && i.push(r);
	else if (n.push(e), Array.isArray(e)) for (r = 0, u = e.length; r < u; r += 1) ne(e[r], n, i);
	else for (l = /* @__PURE__ */ Object.keys(e), r = 0, u = l.length; r < u; r += 1) ne(e[l[r]], n, i);
}
m(ne, "inspectNode");
function dr(e, n) {
	n = n || {};
	var i = new nr(n);
	i.noRefs || hr(e, i);
	var l = e;
	return i.replacer && (l = /* @__PURE__ */ i.replacer.call({ "": l }, "", l)), T(i, 0, l, !0, !0) ? i.dump + `
` : "";
}
m(dr, "dump$1");
var xr = { dump: dr };
function ue(e, n) {
	return function() {
		throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + n + " instead, which is now safe by default.");
	};
}
m(ue, "renamed");
var mr = Ee, gr = Me.load;
Me.loadAll;
xr.dump;
ue("safeLoad", "load");
ue("safeLoadAll", "loadAll");
ue("safeDump", "dump");
export { mr as n, gr as t };
