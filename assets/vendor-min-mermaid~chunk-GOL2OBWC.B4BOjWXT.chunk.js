import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { V as ia, q as pt } from "./vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js";
import { G as nr, R as hn, Y as qo, q as ot, y as Ot } from "./vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js";
import { f as Yt } from "./vendor-min-mermaid~chunk-EFRVIJHI.Df9d5nYk.chunk.js";
var nt = /* @__PURE__ */ Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), A = /* @__PURE__ */ Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), K = /* @__PURE__ */ Object.freeze({
	...nt,
	...A
}), Te = /* @__PURE__ */ Object.freeze({
	...K,
	body: "",
	hidden: !1
});
var rt = /* @__PURE__ */ Object.freeze({
	width: null,
	height: null
}), Ie = /* @__PURE__ */ Object.freeze({
	...rt,
	...A
});
var X = /* @__PURE__ */ m((n, e, r, s = "") => {
	let t = /* @__PURE__ */ n.split(":");
	if (n.slice(0, 1) === "@") {
		if (t.length < 2 || t.length > 3) return null;
		s = /* @__PURE__ */ t.shift().slice(1);
	}
	if (t.length > 3 || !t.length) return null;
	if (t.length > 1) {
		let o = /* @__PURE__ */ t.pop(), a = /* @__PURE__ */ t.pop(), c = {
			provider: t.length > 0 ? t[0] : s,
			prefix: a,
			name: o
		};
		return e && !O(c) ? null : c;
	}
	let l = t[0], i = /* @__PURE__ */ l.split("-");
	if (i.length > 1) {
		let o = {
			provider: s,
			prefix: /* @__PURE__ */ i.shift(),
			name: /* @__PURE__ */ i.join("-")
		};
		return e && !O(o) ? null : o;
	}
	if (r && s === "") {
		let o = {
			provider: s,
			prefix: "",
			name: l
		};
		return e && !O(o, r) ? null : o;
	}
	return null;
}, "stringToIcon"), O = /* @__PURE__ */ m((n, e) => n ? !!((e && n.prefix === "" || n.prefix) && n.name) : !1, "validateIconName");
function $e(n, e) {
	let r = {};
	!n.hFlip != !e.hFlip && (r.hFlip = !0), !n.vFlip != !e.vFlip && (r.vFlip = !0);
	let s = ((n.rotate || 0) + (e.rotate || 0)) % 4;
	return s && (r.rotate = s), r;
}
m($e, "mergeIconTransformations");
function J(n, e) {
	let r = /* @__PURE__ */ $e(n, e);
	for (let s in Te) s in A ? s in n && !(s in r) && (r[s] = A[s]) : s in e ? r[s] = e[s] : s in n && (r[s] = n[s]);
	return r;
}
m(J, "mergeIconData");
function Re(n, e) {
	let r = n.icons, s = n.aliases || Object.create(null), t = /* @__PURE__ */ Object.create(null);
	function l(i) {
		if (r[i]) return t[i] = [];
		if (!(i in t)) {
			t[i] = null;
			let o = s[i] && s[i].parent, a = o && l(o);
			a && (t[i] = /* @__PURE__ */ [o].concat(a));
		}
		return t[i];
	}
	return m(l, "resolve"), (e || Object.keys(r).concat(/* @__PURE__ */ Object.keys(s))).forEach(l), t;
}
m(Re, "getIconsTree");
function ze(n, e, r) {
	let s = n.icons, t = n.aliases || Object.create(null), l = {};
	function i(o) {
		l = /* @__PURE__ */ J(s[o] || t[o], l);
	}
	return m(i, "parse"), i(e), r.forEach(i), J(n, l);
}
m(ze, "internalGetIconData");
function Y(n, e) {
	if (n.icons[e]) return ze(n, e, []);
	let r = Re(n, [e])[e];
	return r ? ze(n, e, r) : null;
}
m(Y, "getIconData");
var st = /(-?[0-9.]*[0-9]+[0-9.]*)/g, it = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ee(n, e, r) {
	if (e === 1) return n;
	if (r = r || 100, typeof n == "number") return Math.ceil(n * e * r) / r;
	if (typeof n != "string") return n;
	let s = /* @__PURE__ */ n.split(st);
	if (s === null || !s.length) return n;
	let t = [], l = /* @__PURE__ */ s.shift(), i = /* @__PURE__ */ it.test(l);
	for (;;) {
		if (i) {
			let o = /* @__PURE__ */ parseFloat(l);
			isNaN(o) ? t.push(l) : t.push(Math.ceil(o * e * r) / r);
		} else t.push(l);
		if (l = /* @__PURE__ */ s.shift(), l === void 0) return t.join("");
		i = !i;
	}
}
m(ee, "calculateSize");
function ot$1(n, e = "defs") {
	let r = "", s = /* @__PURE__ */ n.indexOf("<" + e);
	for (; s >= 0;) {
		let t = /* @__PURE__ */ n.indexOf(">", s), l = /* @__PURE__ */ n.indexOf("</" + e);
		if (t === -1 || l === -1) break;
		let i = /* @__PURE__ */ n.indexOf(">", l);
		if (i === -1) break;
		r += /* @__PURE__ */ n.slice(t + 1, l).trim(), n = n.slice(0, s).trim() + n.slice(i + 1);
	}
	return {
		defs: r,
		content: n
	};
}
m(ot$1, "splitSVGDefs");
function lt(n, e) {
	return n ? "<defs>" + n + "</defs>" + e : e;
}
m(lt, "mergeDefsAndContent");
function Ee(n, e, r) {
	let s = /* @__PURE__ */ ot$1(n);
	return lt(s.defs, e + s.content + r);
}
m(Ee, "wrapSVGContent");
var at = /* @__PURE__ */ m((n) => n === "unset" || n === "undefined" || n === "none", "isUnsetKeyword");
function te(n, e) {
	let r = {
		...K,
		...n
	}, s = {
		...Ie,
		...e
	}, t = {
		left: r.left,
		top: r.top,
		width: r.width,
		height: r.height
	}, l = r.body;
	[r, s].forEach((x) => {
		let b = [], L = x.hFlip, M = x.vFlip, S = x.rotate;
		L ? M ? S += 2 : (b.push("translate(" + (t.width + t.left).toString() + " " + (0 - t.top).toString() + ")"), b.push("scale(-1 1)"), t.top = t.left = 0) : M && (b.push("translate(" + (0 - t.left).toString() + " " + (t.height + t.top).toString() + ")"), b.push("scale(1 -1)"), t.top = t.left = 0);
		let y;
		switch (S < 0 && (S -= Math.floor(S / 4) * 4), S = S % 4, S) {
			case 1:
				y = t.height / 2 + t.top, b.unshift("rotate(90 " + y.toString() + " " + y.toString() + ")");
				break;
			case 2:
				b.unshift("rotate(180 " + (t.width / 2 + t.left).toString() + " " + (t.height / 2 + t.top).toString() + ")");
				break;
			case 3:
				y = t.width / 2 + t.left, b.unshift("rotate(-90 " + y.toString() + " " + y.toString() + ")");
				break;
		}
		S % 2 === 1 && (t.left !== t.top && (y = t.left, t.left = t.top, t.top = y), t.width !== t.height && (y = t.width, t.width = t.height, t.height = y)), b.length && (l = /* @__PURE__ */ Ee(l, "<g transform=\"" + b.join(" ") + "\">", "</g>"));
	});
	let i = s.width, o = s.height, a = t.width, c = t.height, h, f;
	i === null ? (f = o === null ? "1em" : o === "auto" ? c : o, h = /* @__PURE__ */ ee(f, a / c)) : (h = i === "auto" ? a : i, f = o === null ? ee(h, c / a) : o === "auto" ? c : o);
	let u = {}, m$1 = /* @__PURE__ */ m((x, b) => {
		at(b) || (u[x] = /* @__PURE__ */ b.toString());
	}, "setAttr");
	m$1("width", h), m$1("height", f);
	let k = [
		t.left,
		t.top,
		a,
		c
	];
	return u.viewBox = /* @__PURE__ */ k.join(" "), {
		attributes: u,
		viewBox: k,
		body: l
	};
}
m(te, "iconToSVG");
var ct = /\sid="(\S+)"/g, pt$1 = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), ht = 0;
function ne(n, e = pt$1) {
	let r = [], s;
	for (; s = /* @__PURE__ */ ct.exec(n);) r.push(s[1]);
	if (!r.length) return n;
	let t = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return r.forEach((l) => {
		let i = typeof e == "function" ? e(l) : e + (ht++).toString(), o = /* @__PURE__ */ l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		n = /* @__PURE__ */ n.replace(new RegExp("([#;\"])(" + o + ")([\")]|\\.[a-z])", "g"), "$1" + i + t + "$3");
	}), n = /* @__PURE__ */ n.replace(new RegExp(t, "g"), ""), n;
}
m(ne, "replaceIDs");
function re(n, e) {
	let r = n.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let s in e) r += " " + s + "=\"" + e[s] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + r + ">" + n + "</svg>";
}
m(re, "iconToHTML");
var ut = {
	body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
	height: 80,
	width: 80
}, se = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ m((n) => {
	for (let e of n) {
		if (!e.name) throw new Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
		if (pt.debug("Registering icon pack:", e.name), "loader" in e) Ae.set(e.name, e.loader);
		else if ("icons" in e) se.set(e.name, e.icons);
		else throw pt.error("Invalid icon loader:", e), /* @__PURE__ */ new Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
	}
}, "registerIconPacks"), Le = /* @__PURE__ */ m(async (n, e) => {
	let r = /* @__PURE__ */ X(n, !0, e !== void 0);
	if (!r) throw new Error(`Invalid icon name: ${n}`);
	let s = r.prefix || e;
	if (!s) throw new Error(`Icon name must contain a prefix: ${n}`);
	let t = /* @__PURE__ */ se.get(s);
	if (!t) {
		let i = /* @__PURE__ */ Ae.get(s);
		if (!i) throw new Error(`Icon set not found: ${r.prefix}`);
		try {
			t = {
				...await i(),
				prefix: s
			}, se.set(s, t);
		} catch (o) {
			throw pt.error(o), /* @__PURE__ */ new Error(`Failed to load icon set: ${r.prefix}`);
		}
	}
	let l = /* @__PURE__ */ Y(t, r.name);
	if (!l) throw new Error(`Icon not found: ${n}`);
	return l;
}, "getRegisteredIconData"), Me = /* @__PURE__ */ m(async (n) => {
	try {
		return await Le(n), !0;
	} catch {
		return !1;
	}
}, "isIconAvailable"), ve = /* @__PURE__ */ m(async (n, e, r) => {
	let s;
	try {
		s = await Le(n, e?.fallbackPrefix);
	} catch (i) {
		pt.error(i), s = ut;
	}
	let t = /* @__PURE__ */ te(s, e);
	return ot(/* @__PURE__ */ re(/* @__PURE__ */ ne(t.body), {
		...t.attributes,
		...r
	}), /* @__PURE__ */ Ot());
}, "getIconSVG");
function Ce(n) {
	for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
	var s = /* @__PURE__ */ Array.from(typeof n == "string" ? [n] : n);
	s[s.length - 1] = /* @__PURE__ */ s[s.length - 1].replace(/\r?\n([\t ]*)$/, "");
	var t = /* @__PURE__ */ s.reduce(function(o, a) {
		var c = /* @__PURE__ */ a.match(/\n([\t ]+|(?!\s).)/g);
		return c ? o.concat(/* @__PURE__ */ c.map(function(h) {
			var f, u;
			return (u = (f = /* @__PURE__ */ h.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && u !== void 0 ? u : 0;
		})) : o;
	}, []);
	if (t.length) {
		var l = new RegExp(`
[	 ]{` + Math.min.apply(Math, t) + "}", "g");
		s = /* @__PURE__ */ s.map(function(o) {
			return o.replace(l, `
`);
		});
	}
	s[0] = /* @__PURE__ */ s[0].replace(/^\r?\n/, "");
	var i = s[0];
	return e.forEach(function(o, a) {
		var c = /* @__PURE__ */ i.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", f = o;
		typeof o == "string" && o.includes(`
`) && (f = /* @__PURE__ */ String(o).split(`
`).map(function(u, m$1) {
			return m$1 === 0 ? u : "" + h + u;
		}).join(`
`)), i += f + s[a + 1];
	}), i;
}
m(Ce, "dedent");
function ae() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
m(ae, "L");
var E = /* @__PURE__ */ ae();
function Fe(n) {
	E = n;
}
m(Fe, "G");
var _ = { exec: /* @__PURE__ */ m(() => null, "exec") };
function d(n, e = "") {
	let r = typeof n == "string" ? n : n.source, s = {
		replace: /* @__PURE__ */ m((t, l) => {
			let i = typeof l == "string" ? l : l.source;
			return i = /* @__PURE__ */ i.replace(w.caret, "$1"), r = /* @__PURE__ */ r.replace(t, i), s;
		}, "replace"),
		getRegex: /* @__PURE__ */ m(() => new RegExp(r, e), "getRegex")
	};
	return s;
}
m(d, "h");
var w = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceTabs: /^\t+/,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] /,
	listReplaceTask: /^\[[ xX]\] +/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: /* @__PURE__ */ m((n) => /* @__PURE__ */ new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
	nextBulletRegex: /* @__PURE__ */ m((n) => /* @__PURE__ */ new RegExp(`^ {0,${Math.min(3, n - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
	hrRegex: /* @__PURE__ */ m((n) => /* @__PURE__ */ new RegExp(`^ {0,${Math.min(3, n - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
	fencesBeginRegex: /* @__PURE__ */ m((n) => /* @__PURE__ */ new RegExp(`^ {0,${Math.min(3, n - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
	headingBeginRegex: /* @__PURE__ */ m((n) => /* @__PURE__ */ new RegExp(`^ {0,${Math.min(3, n - 1)}}#`), "headingBeginRegex"),
	htmlBeginRegex: /* @__PURE__ */ m((n) => new RegExp(`^ {0,${Math.min(3, n - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
}, ft = /^(?:[ \t]*(?:\n|$))+/, gt = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, dt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, B = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, mt = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ce = /(?:[*+-]|\d{1,9}[.)])/, qe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Oe = /* @__PURE__ */ d(qe).replace(/bull/g, ce).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), kt = /* @__PURE__ */ d(qe).replace(/bull/g, ce).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), pe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, xt = /^[^\n]+/, he = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, bt = /* @__PURE__ */ d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", he).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), wt = /* @__PURE__ */ d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ce).getRegex(), N = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ue = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, yt = /* @__PURE__ */ d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ue).replace("tag", N).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), We = /* @__PURE__ */ d(pe).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex(), fe = {
	blockquote: /* @__PURE__ */ d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", We).getRegex(),
	code: gt,
	def: bt,
	fences: dt,
	heading: mt,
	hr: B,
	html: yt,
	lheading: Oe,
	list: wt,
	newline: ft,
	paragraph: We,
	table: _,
	text: xt
}, Pe = /* @__PURE__ */ d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex(), Tt = {
	...fe,
	lheading: kt,
	table: Pe,
	paragraph: /* @__PURE__ */ d(pe).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Pe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex()
}, It = {
	...fe,
	html: /* @__PURE__ */ d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ue).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: _,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: /* @__PURE__ */ d(pe).replace("hr", B).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Oe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, $t = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Rt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ge = /^( {2,}|\\)\n(?!\s*$)/, zt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, V = /[\p{P}\p{S}]/u, ge = /[\s\p{P}\p{S}]/u, Ze = /[^\s\p{P}\p{S}]/u, Et = /* @__PURE__ */ d(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ge).getRegex(), He = /(?!~)[\p{P}\p{S}]/u, At = /(?!~)[\s\p{P}\p{S}]/u, Lt = /(?:[^\s\p{P}\p{S}]|~)/u, Mt = /\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, Ne = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, vt = /* @__PURE__ */ d(Ne, "u").replace(/punct/g, V).getRegex(), Ct = /* @__PURE__ */ d(Ne, "u").replace(/punct/g, He).getRegex(), Ve = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Pt = /* @__PURE__ */ d(Ve, "gu").replace(/notPunctSpace/g, Ze).replace(/punctSpace/g, ge).replace(/punct/g, V).getRegex(), jt = /* @__PURE__ */ d(Ve, "gu").replace(/notPunctSpace/g, Lt).replace(/punctSpace/g, At).replace(/punct/g, He).getRegex(), Dt = /* @__PURE__ */ d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ze).replace(/punctSpace/g, ge).replace(/punct/g, V).getRegex(), _t = /* @__PURE__ */ d(/\\(punct)/, "gu").replace(/punct/g, V).getRegex(), Bt = /* @__PURE__ */ d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ft = /* @__PURE__ */ d(ue).replace("(?:-->|$)", "-->").getRegex(), qt = /* @__PURE__ */ d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ft).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), G = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/, Ot$1 = /* @__PURE__ */ d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", G).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ue = /* @__PURE__ */ d(/^!?\[(label)\]\[(ref)\]/).replace("label", G).replace("ref", he).getRegex(), Qe = /* @__PURE__ */ d(/^!?\[(ref)\](?:\[\])?/).replace("ref", he).getRegex(), de = {
	_backpedal: _,
	anyPunctuation: _t,
	autolink: Bt,
	blockSkip: Mt,
	br: Ge,
	code: Rt,
	del: _,
	emStrongLDelim: vt,
	emStrongRDelimAst: Pt,
	emStrongRDelimUnd: Dt,
	escape: $t,
	link: Ot$1,
	nolink: Qe,
	punctuation: Et,
	reflink: Ue,
	reflinkSearch: /* @__PURE__ */ d("reflink|nolink(?!\\()", "g").replace("reflink", Ue).replace("nolink", Qe).getRegex(),
	tag: qt,
	text: zt,
	url: _
}, Gt = {
	...de,
	link: /* @__PURE__ */ d(/^!?\[(label)\]\((.*?)\)/).replace("label", G).getRegex(),
	reflink: /* @__PURE__ */ d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G).getRegex()
}, ie = {
	...de,
	emStrongRDelimAst: jt,
	emStrongLDelim: Ct,
	url: /* @__PURE__ */ d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Zt = {
	...ie,
	br: /* @__PURE__ */ d(Ge).replace("{2,}", "*").getRegex(),
	text: /* @__PURE__ */ d(ie.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, W = {
	normal: fe,
	gfm: Tt,
	pedantic: It
}, P = {
	normal: de,
	gfm: ie,
	breaks: Zt,
	pedantic: Gt
}, Ht = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, je = /* @__PURE__ */ m((n) => Ht[n], "ke");
function T(n, e) {
	if (e) {
		if (w.escapeTest.test(n)) return n.replace(w.escapeReplace, je);
	} else if (w.escapeTestNoEncode.test(n)) return n.replace(w.escapeReplaceNoEncode, je);
	return n;
}
m(T, "w");
function De(n) {
	try {
		n = /* @__PURE__ */ encodeURI(n).replace(w.percentDecode, "%");
	} catch {
		return null;
	}
	return n;
}
m(De, "J");
function _e(n, e) {
	let s = /* @__PURE__ */ n.replace(w.findPipe, (l, i, o) => {
		let a = !1, c = i;
		for (; --c >= 0 && o[c] === "\\";) a = !a;
		return a ? "|" : " |";
	}).split(w.splitPipe), t = 0;
	if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e) if (s.length > e) s.splice(e);
	else for (; s.length < e;) s.push("");
	for (; t < s.length; t++) s[t] = /* @__PURE__ */ s[t].trim().replace(w.slashPipe, "|");
	return s;
}
m(_e, "V");
function j(n, e, r) {
	let s = n.length;
	if (s === 0) return "";
	let t = 0;
	for (; t < s;) {
		let l = /* @__PURE__ */ n.charAt(s - t - 1);
		if (l === e && !r) t++;
		else if (l !== e && r) t++;
		else break;
	}
	return n.slice(0, s - t);
}
m(j, "z");
function Nt(n, e) {
	if (n.indexOf(e[1]) === -1) return -1;
	let r = 0;
	for (let s = 0; s < n.length; s++) if (n[s] === "\\") s++;
	else if (n[s] === e[0]) r++;
	else if (n[s] === e[1] && (r--, r < 0)) return s;
	return r > 0 ? -2 : -1;
}
m(Nt, "ge");
function Be(n, e, r, s, t) {
	let l = e.href, i = e.title || null, o = /* @__PURE__ */ n[1].replace(t.other.outputLinkReplace, "$1");
	s.state.inLink = !0;
	let a = {
		type: n[0].charAt(0) === "!" ? "image" : "link",
		raw: r,
		href: l,
		title: i,
		text: o,
		tokens: /* @__PURE__ */ s.inlineTokens(o)
	};
	return s.state.inLink = !1, a;
}
m(Be, "fe");
function Vt(n, e, r) {
	let s = /* @__PURE__ */ n.match(r.other.indentCodeCompensation);
	if (s === null) return e;
	let t = s[1];
	return e.split(`
`).map((l) => {
		let i = /* @__PURE__ */ l.match(r.other.beginningSpace);
		if (i === null) return l;
		let [o] = i;
		return o.length >= t.length ? l.slice(t.length) : l;
	}).join(`
`);
}
m(Vt, "Je");
var Z = class {
	static {
		m(this, "y");
	}
	options;
	rules;
	lexer;
	constructor(n) {
		this.options = n || E;
	}
	space(n) {
		let e = /* @__PURE__ */ this.rules.block.newline.exec(n);
		if (e && e[0].length > 0) return {
			type: "space",
			raw: e[0]
		};
	}
	code(n) {
		let e = /* @__PURE__ */ this.rules.block.code.exec(n);
		if (e) {
			let r = /* @__PURE__ */ e[0].replace(this.rules.other.codeRemoveIndent, "");
			return {
				type: "code",
				raw: e[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? r : j(r, `
`)
			};
		}
	}
	fences(n) {
		let e = /* @__PURE__ */ this.rules.block.fences.exec(n);
		if (e) {
			let r = e[0], s = /* @__PURE__ */ Vt(r, e[3] || "", this.rules);
			return {
				type: "code",
				raw: r,
				lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
				text: s
			};
		}
	}
	heading(n) {
		let e = /* @__PURE__ */ this.rules.block.heading.exec(n);
		if (e) {
			let r = /* @__PURE__ */ e[2].trim();
			if (this.rules.other.endingHash.test(r)) {
				let s = /* @__PURE__ */ j(r, "#");
				(this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (r = /* @__PURE__ */ s.trim());
			}
			return {
				type: "heading",
				raw: e[0],
				depth: e[1].length,
				text: r,
				tokens: /* @__PURE__ */ this.lexer.inline(r)
			};
		}
	}
	hr(n) {
		let e = /* @__PURE__ */ this.rules.block.hr.exec(n);
		if (e) return {
			type: "hr",
			raw: /* @__PURE__ */ j(e[0], `
`)
		};
	}
	blockquote(n) {
		let e = /* @__PURE__ */ this.rules.block.blockquote.exec(n);
		if (e) {
			let r = /* @__PURE__ */ j(e[0], `
`).split(`
`), s = "", t = "", l = [];
			for (; r.length > 0;) {
				let i = !1, o = [], a;
				for (a = 0; a < r.length; a++) if (this.rules.other.blockquoteStart.test(r[a])) o.push(r[a]), i = !0;
				else if (!i) o.push(r[a]);
				else break;
				r = /* @__PURE__ */ r.slice(a);
				let c = /* @__PURE__ */ o.join(`
`), h = /* @__PURE__ */ c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
				s = s ? `${s}
${c}` : c, t = t ? `${t}
${h}` : h;
				let f = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(h, l, !0), this.lexer.state.top = f, r.length === 0) break;
				let u = /* @__PURE__ */ l.at(-1);
				if (u?.type === "code") break;
				if (u?.type === "blockquote") {
					let m$1 = u, k = m$1.raw + `
` + r.join(`
`), x = /* @__PURE__ */ this.blockquote(k);
					l[l.length - 1] = x, s = s.substring(0, s.length - m$1.raw.length) + x.raw, t = t.substring(0, t.length - m$1.text.length) + x.text;
					break;
				} else if (u?.type === "list") {
					let m$1 = u, k = m$1.raw + `
` + r.join(`
`), x = /* @__PURE__ */ this.list(k);
					l[l.length - 1] = x, s = s.substring(0, s.length - u.raw.length) + x.raw, t = t.substring(0, t.length - m$1.raw.length) + x.raw, r = /* @__PURE__ */ k.substring(l.at(-1).raw.length).split(`
`);
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: s,
				tokens: l,
				text: t
			};
		}
	}
	list(n) {
		let e = /* @__PURE__ */ this.rules.block.list.exec(n);
		if (e) {
			let r = /* @__PURE__ */ e[1].trim(), s = r.length > 1, t = {
				type: "list",
				raw: "",
				ordered: s,
				start: s ? +r.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			r = s ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = s ? r : "[*+-]");
			let l = /* @__PURE__ */ this.rules.other.listItemRegex(r), i = !1;
			for (; n;) {
				let a = !1, c = "", h = "";
				if (!(e = /* @__PURE__ */ l.exec(n)) || this.rules.block.hr.test(n)) break;
				c = e[0], n = /* @__PURE__ */ n.substring(c.length);
				let f = /* @__PURE__ */ e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (L) => " ".repeat(3 * L.length)), u = n.split(`
`, 1)[0], m$1 = !f.trim(), k = 0;
				if (this.options.pedantic ? (k = 2, h = /* @__PURE__ */ f.trimStart()) : m$1 ? k = e[1].length + 1 : (k = /* @__PURE__ */ e[2].search(this.rules.other.nonSpaceChar), k = k > 4 ? 1 : k, h = /* @__PURE__ */ f.slice(k), k += e[1].length), m$1 && this.rules.other.blankLine.test(u) && (c += u + `
`, n = /* @__PURE__ */ n.substring(u.length + 1), a = !0), !a) {
					let L = /* @__PURE__ */ this.rules.other.nextBulletRegex(k), M = /* @__PURE__ */ this.rules.other.hrRegex(k), S = /* @__PURE__ */ this.rules.other.fencesBeginRegex(k), y = /* @__PURE__ */ this.rules.other.headingBeginRegex(k), tt = /* @__PURE__ */ this.rules.other.htmlBeginRegex(k);
					for (; n;) {
						let U = n.split(`
`, 1)[0], v;
						if (u = U, this.options.pedantic ? (u = /* @__PURE__ */ u.replace(this.rules.other.listReplaceNesting, "  "), v = u) : v = /* @__PURE__ */ u.replace(this.rules.other.tabCharGlobal, "    "), S.test(u) || y.test(u) || tt.test(u) || L.test(u) || M.test(u)) break;
						if (v.search(this.rules.other.nonSpaceChar) >= k || !u.trim()) h += `
` + v.slice(k);
						else {
							if (m$1 || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S.test(f) || y.test(f) || M.test(f)) break;
							h += `
` + u;
						}
						!m$1 && !u.trim() && (m$1 = !0), c += U + `
`, n = /* @__PURE__ */ n.substring(U.length + 1), f = /* @__PURE__ */ v.slice(k);
					}
				}
				t.loose || (i ? t.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (i = !0));
				let x = null, b;
				this.options.gfm && (x = /* @__PURE__ */ this.rules.other.listIsTask.exec(h), x && (b = x[0] !== "[ ] ", h = /* @__PURE__ */ h.replace(this.rules.other.listReplaceTask, ""))), t.items.push({
					type: "list_item",
					raw: c,
					task: !!x,
					checked: b,
					loose: !1,
					text: h,
					tokens: []
				}), t.raw += c;
			}
			let o = /* @__PURE__ */ t.items.at(-1);
			if (o) o.raw = /* @__PURE__ */ o.raw.trimEnd(), o.text = /* @__PURE__ */ o.text.trimEnd();
			else return;
			t.raw = /* @__PURE__ */ t.raw.trimEnd();
			for (let a = 0; a < t.items.length; a++) if (this.lexer.state.top = !1, t.items[a].tokens = /* @__PURE__ */ this.lexer.blockTokens(t.items[a].text, []), !t.loose) {
				let c = /* @__PURE__ */ t.items[a].tokens.filter((f) => f.type === "space");
				t.loose = c.length > 0 && c.some((f) => this.rules.other.anyLine.test(f.raw));
			}
			if (t.loose) for (let a = 0; a < t.items.length; a++) t.items[a].loose = !0;
			return t;
		}
	}
	html(n) {
		let e = /* @__PURE__ */ this.rules.block.html.exec(n);
		if (e) return {
			type: "html",
			block: !0,
			raw: e[0],
			pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
			text: e[0]
		};
	}
	def(n) {
		let e = /* @__PURE__ */ this.rules.block.def.exec(n);
		if (e) {
			let r = /* @__PURE__ */ e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", t = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
			return {
				type: "def",
				tag: r,
				raw: e[0],
				href: s,
				title: t
			};
		}
	}
	table(n) {
		let e = /* @__PURE__ */ this.rules.block.table.exec(n);
		if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
		let r = /* @__PURE__ */ _e(e[1]), s = /* @__PURE__ */ e[2].replace(this.rules.other.tableAlignChars, "").split("|"), t = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], l = {
			type: "table",
			raw: e[0],
			header: [],
			align: [],
			rows: []
		};
		if (r.length === s.length) {
			for (let i of s) this.rules.other.tableAlignRight.test(i) ? l.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? l.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? l.align.push("left") : l.align.push(null);
			for (let i = 0; i < r.length; i++) l.header.push({
				text: r[i],
				tokens: /* @__PURE__ */ this.lexer.inline(r[i]),
				header: !0,
				align: l.align[i]
			});
			for (let i of t) l.rows.push(/* @__PURE__ */ _e(i, l.header.length).map((o, a) => ({
				text: o,
				tokens: /* @__PURE__ */ this.lexer.inline(o),
				header: !1,
				align: l.align[a]
			})));
			return l;
		}
	}
	lheading(n) {
		let e = /* @__PURE__ */ this.rules.block.lheading.exec(n);
		if (e) return {
			type: "heading",
			raw: e[0],
			depth: e[2].charAt(0) === "=" ? 1 : 2,
			text: e[1],
			tokens: /* @__PURE__ */ this.lexer.inline(e[1])
		};
	}
	paragraph(n) {
		let e = /* @__PURE__ */ this.rules.block.paragraph.exec(n);
		if (e) {
			let r = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
			return {
				type: "paragraph",
				raw: e[0],
				text: r,
				tokens: /* @__PURE__ */ this.lexer.inline(r)
			};
		}
	}
	text(n) {
		let e = /* @__PURE__ */ this.rules.block.text.exec(n);
		if (e) return {
			type: "text",
			raw: e[0],
			text: e[0],
			tokens: /* @__PURE__ */ this.lexer.inline(e[0])
		};
	}
	escape(n) {
		let e = /* @__PURE__ */ this.rules.inline.escape.exec(n);
		if (e) return {
			type: "escape",
			raw: e[0],
			text: e[1]
		};
	}
	tag(n) {
		let e = /* @__PURE__ */ this.rules.inline.tag.exec(n);
		if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: e[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: e[0]
		};
	}
	link(n) {
		let e = /* @__PURE__ */ this.rules.inline.link.exec(n);
		if (e) {
			let r = /* @__PURE__ */ e[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
				if (!this.rules.other.endAngleBracket.test(r)) return;
				let l = /* @__PURE__ */ j(/* @__PURE__ */ r.slice(0, -1), "\\");
				if ((r.length - l.length) % 2 === 0) return;
			} else {
				let l = /* @__PURE__ */ Nt(e[2], "()");
				if (l === -2) return;
				if (l > -1) {
					let i = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + l;
					e[2] = /* @__PURE__ */ e[2].substring(0, l), e[0] = /* @__PURE__ */ e[0].substring(0, i).trim(), e[3] = "";
				}
			}
			let s = e[2], t = "";
			if (this.options.pedantic) {
				let l = /* @__PURE__ */ this.rules.other.pedanticHrefTitle.exec(s);
				l && (s = l[1], t = l[3]);
			} else t = e[3] ? e[3].slice(1, -1) : "";
			return s = /* @__PURE__ */ s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? s = /* @__PURE__ */ s.slice(1) : s = /* @__PURE__ */ s.slice(1, -1)), Be(e, {
				href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
				title: t && t.replace(this.rules.inline.anyPunctuation, "$1")
			}, e[0], this.lexer, this.rules);
		}
	}
	reflink(n, e) {
		let r;
		if ((r = /* @__PURE__ */ this.rules.inline.reflink.exec(n)) || (r = /* @__PURE__ */ this.rules.inline.nolink.exec(n))) {
			let t = e[(r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!t) {
				let l = /* @__PURE__ */ r[0].charAt(0);
				return {
					type: "text",
					raw: l,
					text: l
				};
			}
			return Be(r, t, r[0], this.lexer, this.rules);
		}
	}
	emStrong(n, e, r = "") {
		let s = /* @__PURE__ */ this.rules.inline.emStrongLDelim.exec(n);
		if (!(!s || s[3] && r.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !r || this.rules.inline.punctuation.exec(r))) {
			let t = [...s[0]].length - 1, l, i, o = t, a = 0, c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, e = /* @__PURE__ */ e.slice(-1 * n.length + t); (s = /* @__PURE__ */ c.exec(e)) != null;) {
				if (l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !l) continue;
				if (i = [...l].length, s[3] || s[4]) {
					o += i;
					continue;
				} else if ((s[5] || s[6]) && t % 3 && !((t + i) % 3)) {
					a += i;
					continue;
				}
				if (o -= i, o > 0) continue;
				i = /* @__PURE__ */ Math.min(i, i + o + a);
				let h = [...s[0]][0].length, f = /* @__PURE__ */ n.slice(0, t + s.index + h + i);
				if (Math.min(t, i) % 2) {
					let m$1 = /* @__PURE__ */ f.slice(1, -1);
					return {
						type: "em",
						raw: f,
						text: m$1,
						tokens: /* @__PURE__ */ this.lexer.inlineTokens(m$1)
					};
				}
				let u = /* @__PURE__ */ f.slice(2, -2);
				return {
					type: "strong",
					raw: f,
					text: u,
					tokens: /* @__PURE__ */ this.lexer.inlineTokens(u)
				};
			}
		}
	}
	codespan(n) {
		let e = /* @__PURE__ */ this.rules.inline.code.exec(n);
		if (e) {
			let r = /* @__PURE__ */ e[2].replace(this.rules.other.newLineCharGlobal, " "), s = /* @__PURE__ */ this.rules.other.nonSpaceChar.test(r), t = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
			return s && t && (r = /* @__PURE__ */ r.substring(1, r.length - 1)), {
				type: "codespan",
				raw: e[0],
				text: r
			};
		}
	}
	br(n) {
		let e = /* @__PURE__ */ this.rules.inline.br.exec(n);
		if (e) return {
			type: "br",
			raw: e[0]
		};
	}
	del(n) {
		let e = /* @__PURE__ */ this.rules.inline.del.exec(n);
		if (e) return {
			type: "del",
			raw: e[0],
			text: e[2],
			tokens: /* @__PURE__ */ this.lexer.inlineTokens(e[2])
		};
	}
	autolink(n) {
		let e = /* @__PURE__ */ this.rules.inline.autolink.exec(n);
		if (e) {
			let r, s;
			return e[2] === "@" ? (r = e[1], s = "mailto:" + r) : (r = e[1], s = r), {
				type: "link",
				raw: e[0],
				text: r,
				href: s,
				tokens: [{
					type: "text",
					raw: r,
					text: r
				}]
			};
		}
	}
	url(n) {
		let e;
		if (e = /* @__PURE__ */ this.rules.inline.url.exec(n)) {
			let r, s;
			if (e[2] === "@") r = e[0], s = "mailto:" + r;
			else {
				let t;
				do
					t = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
				while (t !== e[0]);
				r = e[0], e[1] === "www." ? s = "http://" + e[0] : s = e[0];
			}
			return {
				type: "link",
				raw: e[0],
				text: r,
				href: s,
				tokens: [{
					type: "text",
					raw: r,
					text: r
				}]
			};
		}
	}
	inlineText(n) {
		let e = /* @__PURE__ */ this.rules.inline.text.exec(n);
		if (e) {
			let r = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: e[0],
				text: e[0],
				escaped: r
			};
		}
	}
}, $ = class oe {
	static {
		m(this, "l");
	}
	tokens;
	options;
	state;
	tokenizer;
	inlineQueue;
	constructor(e) {
		this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || E, this.options.tokenizer = this.options.tokenizer || new Z(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let r = {
			other: w,
			block: W.normal,
			inline: P.normal
		};
		this.options.pedantic ? (r.block = W.pedantic, r.inline = P.pedantic) : this.options.gfm && (r.block = W.gfm, this.options.breaks ? r.inline = P.breaks : r.inline = P.gfm), this.tokenizer.rules = r;
	}
	static get rules() {
		return {
			block: W,
			inline: P
		};
	}
	static lex(e, r) {
		return new oe(r).lex(e);
	}
	static lexInline(e, r) {
		return new oe(r).inlineTokens(e);
	}
	lex(e) {
		e = /* @__PURE__ */ e.replace(w.carriageReturn, `
`), this.blockTokens(e, this.tokens);
		for (let r = 0; r < this.inlineQueue.length; r++) {
			let s = this.inlineQueue[r];
			this.inlineTokens(s.src, s.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, r = [], s = !1) {
		for (this.options.pedantic && (e = /* @__PURE__ */ e.replace(w.tabCharGlobal, "    ").replace(w.spaceLine, "")); e;) {
			let t;
			if (this.options.extensions?.block?.some((i) => (t = /* @__PURE__ */ i.call({ lexer: this }, e, r)) ? (e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t), !0) : !1)) continue;
			if (t = /* @__PURE__ */ this.tokenizer.space(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length);
				let i = /* @__PURE__ */ r.at(-1);
				t.raw.length === 1 && i !== void 0 ? i.raw += `
` : r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.code(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length);
				let i = /* @__PURE__ */ r.at(-1);
				i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + t.raw, i.text += `
` + t.text, this.inlineQueue.at(-1).src = i.text) : r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.fences(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.heading(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.hr(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.blockquote(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.list(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.html(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.def(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length);
				let i = /* @__PURE__ */ r.at(-1);
				i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + t.raw, i.text += `
` + t.raw, this.inlineQueue.at(-1).src = i.text) : this.tokens.links[t.tag] || (this.tokens.links[t.tag] = {
					href: t.href,
					title: t.title
				}, r.push(t));
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.table(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.lheading(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length), r.push(t);
				continue;
			}
			let l = e;
			if (this.options.extensions?.startBlock) {
				let i = Infinity, o = /* @__PURE__ */ e.slice(1), a;
				this.options.extensions.startBlock.forEach((c) => {
					a = /* @__PURE__ */ c.call({ lexer: this }, o), typeof a == "number" && a >= 0 && (i = /* @__PURE__ */ Math.min(i, a));
				}), i < Infinity && i >= 0 && (l = /* @__PURE__ */ e.substring(0, i + 1));
			}
			if (this.state.top && (t = /* @__PURE__ */ this.tokenizer.paragraph(l))) {
				let i = /* @__PURE__ */ r.at(-1);
				s && i?.type === "paragraph" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + t.raw, i.text += `
` + t.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : r.push(t), s = l.length !== e.length, e = /* @__PURE__ */ e.substring(t.raw.length);
				continue;
			}
			if (t = /* @__PURE__ */ this.tokenizer.text(e)) {
				e = /* @__PURE__ */ e.substring(t.raw.length);
				let i = /* @__PURE__ */ r.at(-1);
				i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + t.raw, i.text += `
` + t.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : r.push(t);
				continue;
			}
			if (e) {
				let i = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(i);
					break;
				} else throw new Error(i);
			}
		}
		return this.state.top = !0, r;
	}
	inline(e, r = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: r
		}), r;
	}
	inlineTokens(e, r = []) {
		let s = e, t = null;
		if (this.tokens.links) {
			let o = /* @__PURE__ */ Object.keys(this.tokens.links);
			if (o.length > 0) for (; (t = /* @__PURE__ */ this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null;) o.includes(/* @__PURE__ */ t[0].slice(t[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, t.index) + "[" + "a".repeat(t[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (t = /* @__PURE__ */ this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null;) s = s.slice(0, t.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		for (; (t = /* @__PURE__ */ this.tokenizer.rules.inline.blockSkip.exec(s)) != null;) s = s.slice(0, t.index) + "[" + "a".repeat(t[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		s = this.options.hooks?.emStrongMask?.call({ lexer: this }, s) ?? s;
		let l = !1, i = "";
		for (; e;) {
			l || (i = ""), l = !1;
			let o;
			if (this.options.extensions?.inline?.some((c) => (o = /* @__PURE__ */ c.call({ lexer: this }, e, r)) ? (e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o), !0) : !1)) continue;
			if (o = /* @__PURE__ */ this.tokenizer.escape(e)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			if (o = /* @__PURE__ */ this.tokenizer.tag(e)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			if (o = /* @__PURE__ */ this.tokenizer.link(e)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			if (o = /* @__PURE__ */ this.tokenizer.reflink(e, this.tokens.links)) {
				e = /* @__PURE__ */ e.substring(o.raw.length);
				let c = /* @__PURE__ */ r.at(-1);
				o.type === "text" && c?.type === "text" ? (c.raw += o.raw, c.text += o.text) : r.push(o);
				continue;
			}
			if (o = /* @__PURE__ */ this.tokenizer.emStrong(e, s, i)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			if (o = /* @__PURE__ */ this.tokenizer.codespan(e)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			if (o = /* @__PURE__ */ this.tokenizer.br(e)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			if (o = /* @__PURE__ */ this.tokenizer.del(e)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			if (o = /* @__PURE__ */ this.tokenizer.autolink(e)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			if (!this.state.inLink && (o = /* @__PURE__ */ this.tokenizer.url(e))) {
				e = /* @__PURE__ */ e.substring(o.raw.length), r.push(o);
				continue;
			}
			let a = e;
			if (this.options.extensions?.startInline) {
				let c = Infinity, h = /* @__PURE__ */ e.slice(1), f;
				this.options.extensions.startInline.forEach((u) => {
					f = /* @__PURE__ */ u.call({ lexer: this }, h), typeof f == "number" && f >= 0 && (c = /* @__PURE__ */ Math.min(c, f));
				}), c < Infinity && c >= 0 && (a = /* @__PURE__ */ e.substring(0, c + 1));
			}
			if (o = /* @__PURE__ */ this.tokenizer.inlineText(a)) {
				e = /* @__PURE__ */ e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (i = /* @__PURE__ */ o.raw.slice(-1)), l = !0;
				let c = /* @__PURE__ */ r.at(-1);
				c?.type === "text" ? (c.raw += o.raw, c.text += o.text) : r.push(o);
				continue;
			}
			if (e) {
				let c = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(c);
					break;
				} else throw new Error(c);
			}
		}
		return r;
	}
}, H = class {
	static {
		m(this, "P");
	}
	options;
	parser;
	constructor(n) {
		this.options = n || E;
	}
	space(n) {
		return "";
	}
	code({ text: n, lang: e, escaped: r }) {
		let s = (e || "").match(w.notSpaceStart)?.[0], t = n.replace(w.endingNewline, "") + `
`;
		return s ? "<pre><code class=\"language-" + T(s) + "\">" + (r ? t : T(t, !0)) + `</code></pre>
` : "<pre><code>" + (r ? t : T(t, !0)) + `</code></pre>
`;
	}
	blockquote({ tokens: n }) {
		return `<blockquote>
${this.parser.parse(n)}</blockquote>
`;
	}
	html({ text: n }) {
		return n;
	}
	def(n) {
		return "";
	}
	heading({ tokens: n, depth: e }) {
		return `<h${e}>${this.parser.parseInline(n)}</h${e}>
`;
	}
	hr(n) {
		return `<hr>
`;
	}
	list(n) {
		let e = n.ordered, r = n.start, s = "";
		for (let i = 0; i < n.items.length; i++) {
			let o = n.items[i];
			s += /* @__PURE__ */ this.listitem(o);
		}
		let t = e ? "ol" : "ul", l = e && r !== 1 ? " start=\"" + r + "\"" : "";
		return "<" + t + l + `>
` + s + "</" + t + `>
`;
	}
	listitem(n) {
		let e = "";
		if (n.task) {
			let r = /* @__PURE__ */ this.checkbox({ checked: !!n.checked });
			n.loose ? n.tokens[0]?.type === "paragraph" ? (n.tokens[0].text = r + " " + n.tokens[0].text, n.tokens[0].tokens && n.tokens[0].tokens.length > 0 && n.tokens[0].tokens[0].type === "text" && (n.tokens[0].tokens[0].text = r + " " + T(n.tokens[0].tokens[0].text), n.tokens[0].tokens[0].escaped = !0)) : n.tokens.unshift({
				type: "text",
				raw: r + " ",
				text: r + " ",
				escaped: !0
			}) : e += r + " ";
		}
		return e += /* @__PURE__ */ this.parser.parse(n.tokens, !!n.loose), `<li>${e}</li>
`;
	}
	checkbox({ checked: n }) {
		return "<input " + (n ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
	}
	paragraph({ tokens: n }) {
		return `<p>${this.parser.parseInline(n)}</p>
`;
	}
	table(n) {
		let e = "", r = "";
		for (let t = 0; t < n.header.length; t++) r += /* @__PURE__ */ this.tablecell(n.header[t]);
		e += /* @__PURE__ */ this.tablerow({ text: r });
		let s = "";
		for (let t = 0; t < n.rows.length; t++) {
			let l = n.rows[t];
			r = "";
			for (let i = 0; i < l.length; i++) r += /* @__PURE__ */ this.tablecell(l[i]);
			s += /* @__PURE__ */ this.tablerow({ text: r });
		}
		return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + s + `</table>
`;
	}
	tablerow({ text: n }) {
		return `<tr>
${n}</tr>
`;
	}
	tablecell(n) {
		let e = /* @__PURE__ */ this.parser.parseInline(n.tokens), r = n.header ? "th" : "td";
		return (n.align ? `<${r} align="${n.align}">` : `<${r}>`) + e + `</${r}>
`;
	}
	strong({ tokens: n }) {
		return `<strong>${this.parser.parseInline(n)}</strong>`;
	}
	em({ tokens: n }) {
		return `<em>${this.parser.parseInline(n)}</em>`;
	}
	codespan({ text: n }) {
		return `<code>${T(n, !0)}</code>`;
	}
	br(n) {
		return "<br>";
	}
	del({ tokens: n }) {
		return `<del>${this.parser.parseInline(n)}</del>`;
	}
	link({ href: n, title: e, tokens: r }) {
		let s = /* @__PURE__ */ this.parser.parseInline(r), t = /* @__PURE__ */ De(n);
		if (t === null) return s;
		n = t;
		let l = "<a href=\"" + n + "\"";
		return e && (l += " title=\"" + T(e) + "\""), l += ">" + s + "</a>", l;
	}
	image({ href: n, title: e, text: r, tokens: s }) {
		s && (r = /* @__PURE__ */ this.parser.parseInline(s, this.parser.textRenderer));
		let t = /* @__PURE__ */ De(n);
		if (t === null) return T(r);
		n = t;
		let l = `<img src="${n}" alt="${r}"`;
		return e && (l += ` title="${T(e)}"`), l += ">", l;
	}
	text(n) {
		return "tokens" in n && n.tokens ? this.parser.parseInline(n.tokens) : "escaped" in n && n.escaped ? n.text : T(n.text);
	}
}, me = class {
	static {
		m(this, "$");
	}
	strong({ text: n }) {
		return n;
	}
	em({ text: n }) {
		return n;
	}
	codespan({ text: n }) {
		return n;
	}
	del({ text: n }) {
		return n;
	}
	html({ text: n }) {
		return n;
	}
	text({ text: n }) {
		return n;
	}
	link({ text: n }) {
		return "" + n;
	}
	image({ text: n }) {
		return "" + n;
	}
	br() {
		return "";
	}
}, R = class le {
	static {
		m(this, "l");
	}
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || E, this.options.renderer = this.options.renderer || new H(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new me();
	}
	static parse(e, r) {
		return new le(r).parse(e);
	}
	static parseInline(e, r) {
		return new le(r).parseInline(e);
	}
	parse(e, r = !0) {
		let s = "";
		for (let t = 0; t < e.length; t++) {
			let l = e[t];
			if (this.options.extensions?.renderers?.[l.type]) {
				let o = l, a = /* @__PURE__ */ this.options.extensions.renderers[o.type].call({ parser: this }, o);
				if (a !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(o.type)) {
					s += a || "";
					continue;
				}
			}
			let i = l;
			switch (i.type) {
				case "space":
					s += /* @__PURE__ */ this.renderer.space(i);
					continue;
				case "hr":
					s += /* @__PURE__ */ this.renderer.hr(i);
					continue;
				case "heading":
					s += /* @__PURE__ */ this.renderer.heading(i);
					continue;
				case "code":
					s += /* @__PURE__ */ this.renderer.code(i);
					continue;
				case "table":
					s += /* @__PURE__ */ this.renderer.table(i);
					continue;
				case "blockquote":
					s += /* @__PURE__ */ this.renderer.blockquote(i);
					continue;
				case "list":
					s += /* @__PURE__ */ this.renderer.list(i);
					continue;
				case "html":
					s += /* @__PURE__ */ this.renderer.html(i);
					continue;
				case "def":
					s += /* @__PURE__ */ this.renderer.def(i);
					continue;
				case "paragraph":
					s += /* @__PURE__ */ this.renderer.paragraph(i);
					continue;
				case "text": {
					let o = i, a = /* @__PURE__ */ this.renderer.text(o);
					for (; t + 1 < e.length && e[t + 1].type === "text";) o = e[++t], a += `
` + this.renderer.text(o);
					r ? s += /* @__PURE__ */ this.renderer.paragraph({
						type: "paragraph",
						raw: a,
						text: a,
						tokens: [{
							type: "text",
							raw: a,
							text: a,
							escaped: !0
						}]
					}) : s += a;
					continue;
				}
				default: {
					let o = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(o), "";
					throw new Error(o);
				}
			}
		}
		return s;
	}
	parseInline(e, r = this.renderer) {
		let s = "";
		for (let t = 0; t < e.length; t++) {
			let l = e[t];
			if (this.options.extensions?.renderers?.[l.type]) {
				let o = /* @__PURE__ */ this.options.extensions.renderers[l.type].call({ parser: this }, l);
				if (o !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(l.type)) {
					s += o || "";
					continue;
				}
			}
			let i = l;
			switch (i.type) {
				case "escape":
					s += /* @__PURE__ */ r.text(i);
					break;
				case "html":
					s += /* @__PURE__ */ r.html(i);
					break;
				case "link":
					s += /* @__PURE__ */ r.link(i);
					break;
				case "image":
					s += /* @__PURE__ */ r.image(i);
					break;
				case "strong":
					s += /* @__PURE__ */ r.strong(i);
					break;
				case "em":
					s += /* @__PURE__ */ r.em(i);
					break;
				case "codespan":
					s += /* @__PURE__ */ r.codespan(i);
					break;
				case "br":
					s += /* @__PURE__ */ r.br(i);
					break;
				case "del":
					s += /* @__PURE__ */ r.del(i);
					break;
				case "text":
					s += /* @__PURE__ */ r.text(i);
					break;
				default: {
					let o = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(o), "";
					throw new Error(o);
				}
			}
		}
		return s;
	}
}, D = class {
	static {
		m(this, "S");
	}
	options;
	block;
	constructor(n) {
		this.options = n || E;
	}
	static passThroughHooks = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(n) {
		return n;
	}
	postprocess(n) {
		return n;
	}
	processAllTokens(n) {
		return n;
	}
	emStrongMask(n) {
		return n;
	}
	provideLexer() {
		return this.block ? $.lex : $.lexInline;
	}
	provideParser() {
		return this.block ? R.parse : R.parseInline;
	}
}, Ut = class {
	static {
		m(this, "B");
	}
	defaults = ae();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = R;
	Renderer = H;
	TextRenderer = me;
	Lexer = $;
	Tokenizer = Z;
	Hooks = D;
	constructor(...n) {
		this.use(...n);
	}
	walkTokens(n, e) {
		let r = [];
		for (let s of n) switch (r = /* @__PURE__ */ r.concat(/* @__PURE__ */ e.call(this, s)), s.type) {
			case "table": {
				let t = s;
				for (let l of t.header) r = /* @__PURE__ */ r.concat(/* @__PURE__ */ this.walkTokens(l.tokens, e));
				for (let l of t.rows) for (let i of l) r = /* @__PURE__ */ r.concat(/* @__PURE__ */ this.walkTokens(i.tokens, e));
				break;
			}
			case "list": {
				let t = s;
				r = /* @__PURE__ */ r.concat(/* @__PURE__ */ this.walkTokens(t.items, e));
				break;
			}
			default: {
				let t = s;
				this.defaults.extensions?.childTokens?.[t.type] ? this.defaults.extensions.childTokens[t.type].forEach((l) => {
					let i = /* @__PURE__ */ t[l].flat(Infinity);
					r = /* @__PURE__ */ r.concat(/* @__PURE__ */ this.walkTokens(i, e));
				}) : t.tokens && (r = /* @__PURE__ */ r.concat(/* @__PURE__ */ this.walkTokens(t.tokens, e)));
			}
		}
		return r;
	}
	use(...n) {
		let e = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return n.forEach((r) => {
			let s = { ...r };
			if (s.async = this.defaults.async || s.async || !1, r.extensions && (r.extensions.forEach((t) => {
				if (!t.name) throw new Error("extension name required");
				if ("renderer" in t) {
					let l = e.renderers[t.name];
					l ? e.renderers[t.name] = function(...i) {
						let o = /* @__PURE__ */ t.renderer.apply(this, i);
						return o === !1 && (o = /* @__PURE__ */ l.apply(this, i)), o;
					} : e.renderers[t.name] = t.renderer;
				}
				if ("tokenizer" in t) {
					if (!t.level || t.level !== "block" && t.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
					let l = e[t.level];
					l ? l.unshift(t.tokenizer) : e[t.level] = [t.tokenizer], t.start && (t.level === "block" ? e.startBlock ? e.startBlock.push(t.start) : e.startBlock = [t.start] : t.level === "inline" && (e.startInline ? e.startInline.push(t.start) : e.startInline = [t.start]));
				}
				"childTokens" in t && t.childTokens && (e.childTokens[t.name] = t.childTokens);
			}), s.extensions = e), r.renderer) {
				let t = this.defaults.renderer || new H(this.defaults);
				for (let l in r.renderer) {
					if (!(l in t)) throw new Error(`renderer '${l}' does not exist`);
					if (["options", "parser"].includes(l)) continue;
					let i = l, o = r.renderer[i], a = t[i];
					t[i] = (...c) => {
						let h = /* @__PURE__ */ o.apply(t, c);
						return h === !1 && (h = /* @__PURE__ */ a.apply(t, c)), h || "";
					};
				}
				s.renderer = t;
			}
			if (r.tokenizer) {
				let t = this.defaults.tokenizer || new Z(this.defaults);
				for (let l in r.tokenizer) {
					if (!(l in t)) throw new Error(`tokenizer '${l}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(l)) continue;
					let i = l, o = r.tokenizer[i], a = t[i];
					t[i] = (...c) => {
						let h = /* @__PURE__ */ o.apply(t, c);
						return h === !1 && (h = /* @__PURE__ */ a.apply(t, c)), h;
					};
				}
				s.tokenizer = t;
			}
			if (r.hooks) {
				let t = this.defaults.hooks || new D();
				for (let l in r.hooks) {
					if (!(l in t)) throw new Error(`hook '${l}' does not exist`);
					if (["options", "block"].includes(l)) continue;
					let i = l, o = r.hooks[i], a = t[i];
					D.passThroughHooks.has(l) ? t[i] = (c) => {
						if (this.defaults.async && D.passThroughHooksRespectAsync.has(l)) return Promise.resolve(/* @__PURE__ */ o.call(t, c)).then((f) => a.call(t, f));
						let h = /* @__PURE__ */ o.call(t, c);
						return a.call(t, h);
					} : t[i] = (...c) => {
						let h = /* @__PURE__ */ o.apply(t, c);
						return h === !1 && (h = /* @__PURE__ */ a.apply(t, c)), h;
					};
				}
				s.hooks = t;
			}
			if (r.walkTokens) {
				let t = this.defaults.walkTokens, l = r.walkTokens;
				s.walkTokens = function(i) {
					let o = [];
					return o.push(/* @__PURE__ */ l.call(this, i)), t && (o = /* @__PURE__ */ o.concat(/* @__PURE__ */ t.call(this, i))), o;
				};
			}
			this.defaults = {
				...this.defaults,
				...s
			};
		}), this;
	}
	setOptions(n) {
		return this.defaults = {
			...this.defaults,
			...n
		}, this;
	}
	lexer(n, e) {
		return $.lex(n, e ?? this.defaults);
	}
	parser(n, e) {
		return R.parse(n, e ?? this.defaults);
	}
	parseMarkdown(n) {
		return (e, r) => {
			let s = { ...r }, t = {
				...this.defaults,
				...s
			}, l = /* @__PURE__ */ this.onError(!!t.silent, !!t.async);
			if (this.defaults.async === !0 && s.async === !1) return l(/* @__PURE__ */ new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof e > "u" || e === null) return l(/* @__PURE__ */ new Error("marked(): input parameter is undefined or null"));
			if (typeof e != "string") return l(/* @__PURE__ */ new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
			t.hooks && (t.hooks.options = t, t.hooks.block = n);
			let i = t.hooks ? t.hooks.provideLexer() : n ? $.lex : $.lexInline, o = t.hooks ? t.hooks.provideParser() : n ? R.parse : R.parseInline;
			if (t.async) return Promise.resolve(t.hooks ? t.hooks.preprocess(e) : e).then((a) => i(a, t)).then((a) => t.hooks ? t.hooks.processAllTokens(a) : a).then((a) => t.walkTokens ? Promise.all(/* @__PURE__ */ this.walkTokens(a, t.walkTokens)).then(() => a) : a).then((a) => o(a, t)).then((a) => t.hooks ? t.hooks.postprocess(a) : a).catch(l);
			try {
				t.hooks && (e = /* @__PURE__ */ t.hooks.preprocess(e));
				let a = /* @__PURE__ */ i(e, t);
				t.hooks && (a = /* @__PURE__ */ t.hooks.processAllTokens(a)), t.walkTokens && this.walkTokens(a, t.walkTokens);
				let c = /* @__PURE__ */ o(a, t);
				return t.hooks && (c = /* @__PURE__ */ t.hooks.postprocess(c)), c;
			} catch (a) {
				return l(a);
			}
		};
	}
	onError(n, e) {
		return (r) => {
			if (r.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
				let s = "<p>An error occurred:</p><pre>" + T(r.message + "", !0) + "</pre>";
				return e ? Promise.resolve(s) : s;
			}
			if (e) return Promise.reject(r);
			throw r;
		};
	}
}, z = new Ut();
function g(n, e) {
	return z.parse(n, e);
}
m(g, "d");
g.options = g.setOptions = function(n) {
	return z.setOptions(n), g.defaults = z.defaults, Fe(g.defaults), g;
};
g.getDefaults = ae;
g.defaults = E;
g.use = function(...n) {
	return z.use(...n), g.defaults = z.defaults, Fe(g.defaults), g;
};
g.walkTokens = function(n, e) {
	return z.walkTokens(n, e);
};
g.parseInline = z.parseInline;
g.Parser = R;
g.parser = R.parse;
g.Renderer = H;
g.TextRenderer = me;
g.Lexer = $;
g.lexer = $.lex;
g.Tokenizer = Z;
g.Hooks = D;
g.parse = g;
g.options;
g.setOptions;
g.use;
g.walkTokens;
g.parseInline;
R.parse;
$.lex;
function Qt(n, { markdownAutoWrap: e }) {
	let t = /* @__PURE__ */ Ce(/* @__PURE__ */ n.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`));
	return e === !1 ? t.replace(/ /g, "&nbsp;") : t;
}
m(Qt, "preprocessMarkdown");
function Ke(n, e = {}) {
	let r = /* @__PURE__ */ Qt(n, e), s = /* @__PURE__ */ g.lexer(r), t = [[]], l = 0;
	function i(o, a = "normal") {
		o.type === "text" ? o.text.split(`
`).forEach((h, f) => {
			f !== 0 && (l++, t.push([])), h.split(" ").forEach((u) => {
				u = /* @__PURE__ */ u.replace(/&#39;/g, "'"), u && t[l].push({
					content: u,
					type: a
				});
			});
		}) : o.type === "strong" || o.type === "em" ? o.tokens.forEach((c) => {
			i(c, o.type);
		}) : o.type === "html" && t[l].push({
			content: o.text,
			type: "normal"
		});
	}
	return m(i, "processNode"), s.forEach((o) => {
		o.type === "paragraph" ? o.tokens?.forEach((a) => {
			i(a);
		}) : o.type === "html" ? t[l].push({
			content: o.text,
			type: "normal"
		}) : t[l].push({
			content: o.raw,
			type: "normal"
		});
	}), t;
}
m(Ke, "markdownToLines");
function Xe(n, { markdownAutoWrap: e } = {}) {
	let r = /* @__PURE__ */ g.lexer(n);
	function s(t) {
		return t.type === "text" ? e === !1 ? t.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : t.text.replace(/\n */g, "<br/>") : t.type === "strong" ? `<strong>${t.tokens?.map(s).join("")}</strong>` : t.type === "em" ? `<em>${t.tokens?.map(s).join("")}</em>` : t.type === "paragraph" ? `<p>${t.tokens?.map(s).join("")}</p>` : t.type === "space" ? "" : t.type === "html" ? `${t.text}` : t.type === "escape" ? t.text : (pt.warn(`Unsupported markdown: ${t.type}`), t.raw);
	}
	return m(s, "output"), r.map(s).join("");
}
m(Xe, "markdownToHTML");
function Kt(n) {
	return Intl.Segmenter ? [.../* @__PURE__ */ new Intl.Segmenter().segment(n)].map((e) => e.segment) : [...n];
}
m(Kt, "splitTextToChars");
function Xt(n, e) {
	return Je(n, [], /* @__PURE__ */ Kt(e.content), e.type);
}
m(Xt, "splitWordToFitWidth");
function Je(n, e, r, s) {
	if (r.length === 0) return [{
		content: /* @__PURE__ */ e.join(""),
		type: s
	}, {
		content: "",
		type: s
	}];
	let [t, ...l] = r, i = [...e, t];
	return n([{
		content: /* @__PURE__ */ i.join(""),
		type: s
	}]) ? Je(n, i, l, s) : (e.length === 0 && t && (e.push(t), r.shift()), [{
		content: /* @__PURE__ */ e.join(""),
		type: s
	}, {
		content: /* @__PURE__ */ r.join(""),
		type: s
	}]);
}
m(Je, "splitWordToFitWidthRecursion");
function Ye(n, e) {
	if (n.some(({ content: r }) => r.includes(`
`))) throw new Error("splitLineToFitWidth does not support newlines in the line");
	return ke(n, e);
}
m(Ye, "splitLineToFitWidth");
function ke(n, e, r = [], s = []) {
	if (n.length === 0) return s.length > 0 && r.push(s), r.length > 0 ? r : [];
	let t = "";
	n[0].content === " " && (t = " ", n.shift());
	let l = n.shift() ?? {
		content: " ",
		type: "normal"
	}, i = [...s];
	if (t !== "" && i.push({
		content: t,
		type: "normal"
	}), i.push(l), e(i)) return ke(n, e, r, i);
	if (s.length > 0) r.push(s), n.unshift(l);
	else if (l.content) {
		let [o, a] = Xt(e, l);
		r.push([o]), a.content && n.unshift(a);
	}
	return ke(n, e, r);
}
m(ke, "splitLineToFitWidthRecursion");
function et(n, e) {
	e && n.attr("style", e);
}
m(et, "applyStyle");
async function Jt(n, e, r, s, t = !1, l = Ot()) {
	let i = /* @__PURE__ */ n.append("foreignObject");
	i.attr("width", `${10 * r}px`), i.attr("height", `${10 * r}px`);
	let o = /* @__PURE__ */ i.append("xhtml:div"), a = nr(e.label) ? await qo(/* @__PURE__ */ e.label.replace(hn.lineBreakRegex, `
`), l) : ot(e.label, l), c = e.isNode ? "nodeLabel" : "edgeLabel", h = /* @__PURE__ */ o.append("span");
	h.html(a), et(h, e.labelStyle), h.attr("class", `${c} ${s}`), et(o, e.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", r + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), t && o.attr("class", "labelBkg");
	let f = /* @__PURE__ */ o.node().getBoundingClientRect();
	return f.width === r && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", r + "px"), f = /* @__PURE__ */ o.node().getBoundingClientRect()), i.node();
}
m(Jt, "addHtmlSpan");
function xe(n, e, r) {
	return n.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * r - .1 + "em").attr("dy", r + "em");
}
m(xe, "createTspan");
function Yt$1(n, e, r) {
	let s = /* @__PURE__ */ n.append("text"), t = /* @__PURE__ */ xe(s, 1, e);
	be(t, r);
	let l = /* @__PURE__ */ t.node().getComputedTextLength();
	return s.remove(), l;
}
m(Yt$1, "computeWidthOfText");
function $r(n, e, r) {
	let s = /* @__PURE__ */ n.append("text"), t = /* @__PURE__ */ xe(s, 1, e);
	be(t, [{
		content: r,
		type: "normal"
	}]);
	let l = t.node()?.getBoundingClientRect();
	return l && s.remove(), l;
}
m($r, "computeDimensionOfText");
function en(n, e, r, s = !1) {
	let l = /* @__PURE__ */ e.append("g"), i = /* @__PURE__ */ l.insert("rect").attr("class", "background").attr("style", "stroke: none"), o = /* @__PURE__ */ l.append("text").attr("y", "-10.1"), a = 0;
	for (let c of r) {
		let h = /* @__PURE__ */ m((u) => Yt$1(l, 1.1, u) <= n, "checkWidth"), f = h(c) ? [c] : Ye(c, h);
		for (let u of f) be(/* @__PURE__ */ xe(o, a, 1.1), u), a++;
	}
	if (s) {
		let c = /* @__PURE__ */ o.node().getBBox(), h = 2;
		return i.attr("x", c.x - h).attr("y", c.y - h).attr("width", c.width + 2 * h).attr("height", c.height + 2 * h), l.node();
	} else return o.node();
}
m(en, "createFormattedText");
function be(n, e) {
	n.text(""), e.forEach((r, s) => {
		let t = /* @__PURE__ */ n.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
		s === 0 ? t.text(r.content) : t.text(" " + r.content);
	});
}
m(be, "updateTextContentAndStyles");
async function tn(n, e = {}) {
	let r = [];
	n.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (t, l, i) => (r.push(/* @__PURE__ */ (async () => {
		let o = `${l}:${i}`;
		return await Me(o) ? await ve(o, void 0, { class: "label-icon" }) : `<i class='${ot(t, e).replace(":", " ")}'></i>`;
	})()), t));
	let s = await Promise.all(r);
	return n.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => s.shift() ?? "");
}
m(tn, "replaceIconSubstring");
var Rr = /* @__PURE__ */ m(async (n, e = "", { style: r = "", isTitle: s = !1, classes: t = "", useHtmlLabels: l = !0, isNode: i = !0, width: o = 200, addSvgBackground: a = !1 } = {}, c) => {
	if (pt.debug("XYZ createText", e, r, s, t, l, i, "addSvgBackground: ", a), l) {
		let f = await tn(/* @__PURE__ */ Yt(/* @__PURE__ */ Xe(e, c)), c), u = /* @__PURE__ */ e.replace(/\\\\/g, "\\");
		return await Jt(n, {
			isNode: i,
			label: nr(e) ? u : f,
			labelStyle: /* @__PURE__ */ r.replace("fill:", "color:")
		}, o, t, a, c);
	} else {
		let u = /* @__PURE__ */ en(o, n, /* @__PURE__ */ Ke(/* @__PURE__ */ e.replace(/<br\s*\/?>/g, "<br/>").replace("<br>", "<br/>"), c), e ? a : !1);
		if (i) {
			/stroke:/.exec(r) && (r = /* @__PURE__ */ r.replace("stroke:", "lineColor:"));
			let m$1 = /* @__PURE__ */ r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			ia(u).attr("style", m$1);
		} else {
			let m$1 = /* @__PURE__ */ r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
			ia(u).select("rect").attr("style", /* @__PURE__ */ m$1.replace(/background:/g, "fill:"));
			let k = /* @__PURE__ */ r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			ia(u).select("text").attr("style", k);
		}
		return u;
	}
}, "createText");
export { tn as a, Rr as i, Ce as n, ut as o, Hn as r, ve as s, $r as t };
