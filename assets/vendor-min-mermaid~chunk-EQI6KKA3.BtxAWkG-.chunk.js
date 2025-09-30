import { $t as pt, J as mr, P as Xo, Q as ot, U as hn, X as nr, a as u, et as qo, i as p, q as ln, qt as ia, r as m, t as S, w as Ot, x as Ni, y as Mo } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as m$1 } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { f as Yt, l as Vt, o as M, t as $ } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
var nt = /* @__PURE__ */ Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), A = /* @__PURE__ */ Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), K$1 = /* @__PURE__ */ Object.freeze({
	...nt,
	...A
}), Te$1 = /* @__PURE__ */ Object.freeze({
	...K$1,
	body: "",
	hidden: !1
});
var rt$1 = /* @__PURE__ */ Object.freeze({
	width: null,
	height: null
}), Ie$1 = /* @__PURE__ */ Object.freeze({
	...rt$1,
	...A
});
var X = /* @__PURE__ */ m$1((n$1, e, r, s = "") => {
	let t = /* @__PURE__ */ n$1.split(":");
	if (n$1.slice(0, 1) === "@") {
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
}, "stringToIcon"), O = /* @__PURE__ */ m$1((n$1, e) => n$1 ? !!((e && n$1.prefix === "" || n$1.prefix) && n$1.name) : !1, "validateIconName");
function $e(n$1, e) {
	let r = {};
	!n$1.hFlip != !e.hFlip && (r.hFlip = !0), !n$1.vFlip != !e.vFlip && (r.vFlip = !0);
	let s = ((n$1.rotate || 0) + (e.rotate || 0)) % 4;
	return s && (r.rotate = s), r;
}
m$1($e, "mergeIconTransformations");
function J(n$1, e) {
	let r = /* @__PURE__ */ $e(n$1, e);
	for (let s in Te$1) s in A ? s in n$1 && !(s in r) && (r[s] = A[s]) : s in e ? r[s] = e[s] : s in n$1 && (r[s] = n$1[s]);
	return r;
}
m$1(J, "mergeIconData");
function Re$1(n$1, e) {
	let r = n$1.icons, s = n$1.aliases || Object.create(null), t = /* @__PURE__ */ Object.create(null);
	function l(i) {
		if (r[i]) return t[i] = [];
		if (!(i in t)) {
			t[i] = null;
			let o = s[i] && s[i].parent, a = o && l(o);
			a && (t[i] = /* @__PURE__ */ [o].concat(a));
		}
		return t[i];
	}
	return m$1(l, "resolve"), (e || Object.keys(r).concat(/* @__PURE__ */ Object.keys(s))).forEach(l), t;
}
m$1(Re$1, "getIconsTree");
function ze(n$1, e, r) {
	let s = n$1.icons, t = n$1.aliases || Object.create(null), l = {};
	function i(o) {
		l = /* @__PURE__ */ J(s[o] || t[o], l);
	}
	return m$1(i, "parse"), i(e), r.forEach(i), J(n$1, l);
}
m$1(ze, "internalGetIconData");
function Y(n$1, e) {
	if (n$1.icons[e]) return ze(n$1, e, []);
	let r = Re$1(n$1, [e])[e];
	return r ? ze(n$1, e, r) : null;
}
m$1(Y, "getIconData");
var st$1 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, it = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ee$1(n$1, e, r) {
	if (e === 1) return n$1;
	if (r = r || 100, typeof n$1 == "number") return Math.ceil(n$1 * e * r) / r;
	if (typeof n$1 != "string") return n$1;
	let s = /* @__PURE__ */ n$1.split(st$1);
	if (s === null || !s.length) return n$1;
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
m$1(ee$1, "calculateSize");
function ot$2(n$1, e = "defs") {
	let r = "", s = /* @__PURE__ */ n$1.indexOf("<" + e);
	for (; s >= 0;) {
		let t = /* @__PURE__ */ n$1.indexOf(">", s), l = /* @__PURE__ */ n$1.indexOf("</" + e);
		if (t === -1 || l === -1) break;
		let i = /* @__PURE__ */ n$1.indexOf(">", l);
		if (i === -1) break;
		r += /* @__PURE__ */ n$1.slice(t + 1, l).trim(), n$1 = n$1.slice(0, s).trim() + n$1.slice(i + 1);
	}
	return {
		defs: r,
		content: n$1
	};
}
m$1(ot$2, "splitSVGDefs");
function lt$1(n$1, e) {
	return n$1 ? "<defs>" + n$1 + "</defs>" + e : e;
}
m$1(lt$1, "mergeDefsAndContent");
function Ee$1(n$1, e, r) {
	let s = /* @__PURE__ */ ot$2(n$1);
	return lt$1(s.defs, e + s.content + r);
}
m$1(Ee$1, "wrapSVGContent");
var at = /* @__PURE__ */ m$1((n$1) => n$1 === "unset" || n$1 === "undefined" || n$1 === "none", "isUnsetKeyword");
function te$1(n$1, e) {
	let r = {
		...K$1,
		...n$1
	}, s = {
		...Ie$1,
		...e
	}, t = {
		left: r.left,
		top: r.top,
		width: r.width,
		height: r.height
	}, l = r.body;
	[r, s].forEach((x) => {
		let b = [], L = x.hFlip, M$1 = x.vFlip, S$1 = x.rotate;
		L ? M$1 ? S$1 += 2 : (b.push("translate(" + (t.width + t.left).toString() + " " + (0 - t.top).toString() + ")"), b.push("scale(-1 1)"), t.top = t.left = 0) : M$1 && (b.push("translate(" + (0 - t.left).toString() + " " + (t.height + t.top).toString() + ")"), b.push("scale(1 -1)"), t.top = t.left = 0);
		let y;
		switch (S$1 < 0 && (S$1 -= Math.floor(S$1 / 4) * 4), S$1 = S$1 % 4, S$1) {
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
		S$1 % 2 === 1 && (t.left !== t.top && (y = t.left, t.left = t.top, t.top = y), t.width !== t.height && (y = t.width, t.width = t.height, t.height = y)), b.length && (l = /* @__PURE__ */ Ee$1(l, "<g transform=\"" + b.join(" ") + "\">", "</g>"));
	});
	let i = s.width, o = s.height, a = t.width, c = t.height, h, f;
	i === null ? (f = o === null ? "1em" : o === "auto" ? c : o, h = /* @__PURE__ */ ee$1(f, a / c)) : (h = i === "auto" ? a : i, f = o === null ? ee$1(h, c / a) : o === "auto" ? c : o);
	let u$1 = {}, m$2 = /* @__PURE__ */ m$1((x, b) => {
		at(b) || (u$1[x] = /* @__PURE__ */ b.toString());
	}, "setAttr");
	m$2("width", h), m$2("height", f);
	let k = [
		t.left,
		t.top,
		a,
		c
	];
	return u$1.viewBox = /* @__PURE__ */ k.join(" "), {
		attributes: u$1,
		viewBox: k,
		body: l
	};
}
m$1(te$1, "iconToSVG");
var ct = /\sid="(\S+)"/g, pt$2 = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), ht = 0;
function ne$1(n$1, e = pt$2) {
	let r = [], s;
	for (; s = /* @__PURE__ */ ct.exec(n$1);) r.push(s[1]);
	if (!r.length) return n$1;
	let t = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return r.forEach((l) => {
		let i = typeof e == "function" ? e(l) : e + (ht++).toString(), o = /* @__PURE__ */ l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		n$1 = /* @__PURE__ */ n$1.replace(new RegExp("([#;\"])(" + o + ")([\")]|\\.[a-z])", "g"), "$1" + i + t + "$3");
	}), n$1 = /* @__PURE__ */ n$1.replace(new RegExp(t, "g"), ""), n$1;
}
m$1(ne$1, "replaceIDs");
function re$1(n$1, e) {
	let r = n$1.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let s in e) r += " " + s + "=\"" + e[s] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + r + ">" + n$1 + "</svg>";
}
m$1(re$1, "iconToHTML");
var ut$1 = {
	body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
	height: 80,
	width: 80
}, se$1 = /* @__PURE__ */ new Map(), Ae$1 = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ m$1((n$1) => {
	for (let e of n$1) {
		if (!e.name) throw new Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
		if (pt.debug("Registering icon pack:", e.name), "loader" in e) Ae$1.set(e.name, e.loader);
		else if ("icons" in e) se$1.set(e.name, e.icons);
		else throw pt.error("Invalid icon loader:", e), /* @__PURE__ */ new Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
	}
}, "registerIconPacks"), Le$1 = /* @__PURE__ */ m$1(async (n$1, e) => {
	let r = /* @__PURE__ */ X(n$1, !0, e !== void 0);
	if (!r) throw new Error(`Invalid icon name: ${n$1}`);
	let s = r.prefix || e;
	if (!s) throw new Error(`Icon name must contain a prefix: ${n$1}`);
	let t = /* @__PURE__ */ se$1.get(s);
	if (!t) {
		let i = /* @__PURE__ */ Ae$1.get(s);
		if (!i) throw new Error(`Icon set not found: ${r.prefix}`);
		try {
			t = {
				...await i(),
				prefix: s
			}, se$1.set(s, t);
		} catch (o) {
			throw pt.error(o), /* @__PURE__ */ new Error(`Failed to load icon set: ${r.prefix}`);
		}
	}
	let l = /* @__PURE__ */ Y(t, r.name);
	if (!l) throw new Error(`Icon not found: ${n$1}`);
	return l;
}, "getRegisteredIconData"), Me$1 = /* @__PURE__ */ m$1(async (n$1) => {
	try {
		return await Le$1(n$1), !0;
	} catch {
		return !1;
	}
}, "isIconAvailable"), ve = /* @__PURE__ */ m$1(async (n$1, e, r) => {
	let s;
	try {
		s = await Le$1(n$1, e?.fallbackPrefix);
	} catch (i) {
		pt.error(i), s = ut$1;
	}
	let t = /* @__PURE__ */ te$1(s, e), l = /* @__PURE__ */ re$1(/* @__PURE__ */ ne$1(t.body), {
		...t.attributes,
		...r
	});
	return ot(l, /* @__PURE__ */ Ot());
}, "getIconSVG");
function Ce$1(n$1) {
	for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
	var s = /* @__PURE__ */ Array.from(typeof n$1 == "string" ? [n$1] : n$1);
	s[s.length - 1] = /* @__PURE__ */ s[s.length - 1].replace(/\r?\n([\t ]*)$/, "");
	var t = /* @__PURE__ */ s.reduce(function(o, a) {
		var c = /* @__PURE__ */ a.match(/\n([\t ]+|(?!\s).)/g);
		return c ? o.concat(/* @__PURE__ */ c.map(function(h) {
			var f, u$1;
			return (u$1 = (f = /* @__PURE__ */ h.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && u$1 !== void 0 ? u$1 : 0;
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
`).map(function(u$1, m$2) {
			return m$2 === 0 ? u$1 : "" + h + u$1;
		}).join(`
`)), i += f + s[a + 1];
	}), i;
}
m$1(Ce$1, "dedent");
function ae$1() {
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
m$1(ae$1, "L");
var E = /* @__PURE__ */ ae$1();
function Fe$1(n$1) {
	E = n$1;
}
m$1(Fe$1, "G");
var _$1 = { exec: /* @__PURE__ */ m$1(() => null, "exec") };
function d(n$1, e = "") {
	let r = typeof n$1 == "string" ? n$1 : n$1.source, s = {
		replace: /* @__PURE__ */ m$1((t, l) => {
			let i = typeof l == "string" ? l : l.source;
			return i = /* @__PURE__ */ i.replace(w.caret, "$1"), r = /* @__PURE__ */ r.replace(t, i), s;
		}, "replace"),
		getRegex: /* @__PURE__ */ m$1(() => new RegExp(r, e), "getRegex")
	};
	return s;
}
m$1(d, "h");
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
	listItemRegex: /* @__PURE__ */ m$1((n$1) => /* @__PURE__ */ new RegExp(`^( {0,3}${n$1})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
	nextBulletRegex: /* @__PURE__ */ m$1((n$1) => /* @__PURE__ */ new RegExp(`^ {0,${Math.min(3, n$1 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
	hrRegex: /* @__PURE__ */ m$1((n$1) => /* @__PURE__ */ new RegExp(`^ {0,${Math.min(3, n$1 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
	fencesBeginRegex: /* @__PURE__ */ m$1((n$1) => /* @__PURE__ */ new RegExp(`^ {0,${Math.min(3, n$1 - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
	headingBeginRegex: /* @__PURE__ */ m$1((n$1) => /* @__PURE__ */ new RegExp(`^ {0,${Math.min(3, n$1 - 1)}}#`), "headingBeginRegex"),
	htmlBeginRegex: /* @__PURE__ */ m$1((n$1) => new RegExp(`^ {0,${Math.min(3, n$1 - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
}, ft = /^(?:[ \t]*(?:\n|$))+/, gt = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, dt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, B = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, mt = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ce$1 = /(?:[*+-]|\d{1,9}[.)])/, qe$1 = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Oe$1 = /* @__PURE__ */ d(qe$1).replace(/bull/g, ce$1).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), kt = /* @__PURE__ */ d(qe$1).replace(/bull/g, ce$1).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), pe$1 = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, xt$1 = /^[^\n]+/, he$1 = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, bt$1 = /* @__PURE__ */ d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", he$1).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), wt = /* @__PURE__ */ d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ce$1).getRegex(), N$1 = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ue$1 = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, yt$1 = /* @__PURE__ */ d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ue$1).replace("tag", N$1).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), We$1 = /* @__PURE__ */ d(pe$1).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N$1).getRegex(), fe$1 = {
	blockquote: /* @__PURE__ */ d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", We$1).getRegex(),
	code: gt,
	def: bt$1,
	fences: dt,
	heading: mt,
	hr: B,
	html: yt$1,
	lheading: Oe$1,
	list: wt,
	newline: ft,
	paragraph: We$1,
	table: _$1,
	text: xt$1
}, Pe$1 = /* @__PURE__ */ d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N$1).getRegex(), Tt$1 = {
	...fe$1,
	lheading: kt,
	table: Pe$1,
	paragraph: /* @__PURE__ */ d(pe$1).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Pe$1).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N$1).getRegex()
}, It$1 = {
	...fe$1,
	html: /* @__PURE__ */ d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ue$1).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: _$1,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: /* @__PURE__ */ d(pe$1).replace("hr", B).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Oe$1).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, $t$1 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Rt$1 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ge$1 = /^( {2,}|\\)\n(?!\s*$)/, zt$1 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, V = /[\p{P}\p{S}]/u, ge$1 = /[\s\p{P}\p{S}]/u, Ze$1 = /[^\s\p{P}\p{S}]/u, Et = /* @__PURE__ */ d(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ge$1).getRegex(), He$1 = /(?!~)[\p{P}\p{S}]/u, At$1 = /(?!~)[\s\p{P}\p{S}]/u, Lt$1 = /(?:[^\s\p{P}\p{S}]|~)/u, Mt$1 = /\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, Ne = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, vt$1 = /* @__PURE__ */ d(Ne, "u").replace(/punct/g, V).getRegex(), Ct$1 = /* @__PURE__ */ d(Ne, "u").replace(/punct/g, He$1).getRegex(), Ve$1 = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Pt$1 = /* @__PURE__ */ d(Ve$1, "gu").replace(/notPunctSpace/g, Ze$1).replace(/punctSpace/g, ge$1).replace(/punct/g, V).getRegex(), jt = /* @__PURE__ */ d(Ve$1, "gu").replace(/notPunctSpace/g, Lt$1).replace(/punctSpace/g, At$1).replace(/punct/g, He$1).getRegex(), Dt$1 = /* @__PURE__ */ d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ze$1).replace(/punctSpace/g, ge$1).replace(/punct/g, V).getRegex(), _t$1 = /* @__PURE__ */ d(/\\(punct)/, "gu").replace(/punct/g, V).getRegex(), Bt$1 = /* @__PURE__ */ d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ft$1 = /* @__PURE__ */ d(ue$1).replace("(?:-->|$)", "-->").getRegex(), qt$1 = /* @__PURE__ */ d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ft$1).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), G = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/, Ot$2 = /* @__PURE__ */ d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", G).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ue$1 = /* @__PURE__ */ d(/^!?\[(label)\]\[(ref)\]/).replace("label", G).replace("ref", he$1).getRegex(), Qe$1 = /* @__PURE__ */ d(/^!?\[(ref)\](?:\[\])?/).replace("ref", he$1).getRegex(), de$1 = {
	_backpedal: _$1,
	anyPunctuation: _t$1,
	autolink: Bt$1,
	blockSkip: Mt$1,
	br: Ge$1,
	code: Rt$1,
	del: _$1,
	emStrongLDelim: vt$1,
	emStrongRDelimAst: Pt$1,
	emStrongRDelimUnd: Dt$1,
	escape: $t$1,
	link: Ot$2,
	nolink: Qe$1,
	punctuation: Et,
	reflink: Ue$1,
	reflinkSearch: /* @__PURE__ */ d("reflink|nolink(?!\\()", "g").replace("reflink", Ue$1).replace("nolink", Qe$1).getRegex(),
	tag: qt$1,
	text: zt$1,
	url: _$1
}, Gt$1 = {
	...de$1,
	link: /* @__PURE__ */ d(/^!?\[(label)\]\((.*?)\)/).replace("label", G).getRegex(),
	reflink: /* @__PURE__ */ d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G).getRegex()
}, ie$1 = {
	...de$1,
	emStrongRDelimAst: jt,
	emStrongLDelim: Ct$1,
	url: /* @__PURE__ */ d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Zt$1 = {
	...ie$1,
	br: /* @__PURE__ */ d(Ge$1).replace("{2,}", "*").getRegex(),
	text: /* @__PURE__ */ d(ie$1.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, W = {
	normal: fe$1,
	gfm: Tt$1,
	pedantic: It$1
}, P$1 = {
	normal: de$1,
	gfm: ie$1,
	breaks: Zt$1,
	pedantic: Gt$1
}, Ht$1 = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, je$1 = /* @__PURE__ */ m$1((n$1) => Ht$1[n$1], "ke");
function T(n$1, e) {
	if (e) {
		if (w.escapeTest.test(n$1)) return n$1.replace(w.escapeReplace, je$1);
	} else if (w.escapeTestNoEncode.test(n$1)) return n$1.replace(w.escapeReplaceNoEncode, je$1);
	return n$1;
}
m$1(T, "w");
function De(n$1) {
	try {
		n$1 = /* @__PURE__ */ encodeURI(n$1).replace(w.percentDecode, "%");
	} catch {
		return null;
	}
	return n$1;
}
m$1(De, "J");
function _e$1(n$1, e) {
	let s = /* @__PURE__ */ n$1.replace(w.findPipe, (l, i, o) => {
		let a = !1, c = i;
		for (; --c >= 0 && o[c] === "\\";) a = !a;
		return a ? "|" : " |";
	}).split(w.splitPipe), t = 0;
	if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e) if (s.length > e) s.splice(e);
	else for (; s.length < e;) s.push("");
	for (; t < s.length; t++) s[t] = /* @__PURE__ */ s[t].trim().replace(w.slashPipe, "|");
	return s;
}
m$1(_e$1, "V");
function j(n$1, e, r) {
	let s = n$1.length;
	if (s === 0) return "";
	let t = 0;
	for (; t < s;) {
		let l = /* @__PURE__ */ n$1.charAt(s - t - 1);
		if (l === e && !r) t++;
		else if (l !== e && r) t++;
		else break;
	}
	return n$1.slice(0, s - t);
}
m$1(j, "z");
function Nt$1(n$1, e) {
	if (n$1.indexOf(e[1]) === -1) return -1;
	let r = 0;
	for (let s = 0; s < n$1.length; s++) if (n$1[s] === "\\") s++;
	else if (n$1[s] === e[0]) r++;
	else if (n$1[s] === e[1] && (r--, r < 0)) return s;
	return r > 0 ? -2 : -1;
}
m$1(Nt$1, "ge");
function Be$1(n$1, e, r, s, t) {
	let l = e.href, i = e.title || null, o = /* @__PURE__ */ n$1[1].replace(t.other.outputLinkReplace, "$1");
	s.state.inLink = !0;
	let a = {
		type: n$1[0].charAt(0) === "!" ? "image" : "link",
		raw: r,
		href: l,
		title: i,
		text: o,
		tokens: /* @__PURE__ */ s.inlineTokens(o)
	};
	return s.state.inLink = !1, a;
}
m$1(Be$1, "fe");
function Vt$2(n$1, e, r) {
	let s = /* @__PURE__ */ n$1.match(r.other.indentCodeCompensation);
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
m$1(Vt$2, "Je");
var Z = class {
	static {
		m$1(this, "y");
	}
	options;
	rules;
	lexer;
	constructor(n$1) {
		this.options = n$1 || E;
	}
	space(n$1) {
		let e = /* @__PURE__ */ this.rules.block.newline.exec(n$1);
		if (e && e[0].length > 0) return {
			type: "space",
			raw: e[0]
		};
	}
	code(n$1) {
		let e = /* @__PURE__ */ this.rules.block.code.exec(n$1);
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
	fences(n$1) {
		let e = /* @__PURE__ */ this.rules.block.fences.exec(n$1);
		if (e) {
			let r = e[0], s = /* @__PURE__ */ Vt$2(r, e[3] || "", this.rules);
			return {
				type: "code",
				raw: r,
				lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
				text: s
			};
		}
	}
	heading(n$1) {
		let e = /* @__PURE__ */ this.rules.block.heading.exec(n$1);
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
	hr(n$1) {
		let e = /* @__PURE__ */ this.rules.block.hr.exec(n$1);
		if (e) return {
			type: "hr",
			raw: /* @__PURE__ */ j(e[0], `
`)
		};
	}
	blockquote(n$1) {
		let e = /* @__PURE__ */ this.rules.block.blockquote.exec(n$1);
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
				let u$1 = /* @__PURE__ */ l.at(-1);
				if (u$1?.type === "code") break;
				if (u$1?.type === "blockquote") {
					let m$2 = u$1, k = m$2.raw + `
` + r.join(`
`), x = /* @__PURE__ */ this.blockquote(k);
					l[l.length - 1] = x, s = s.substring(0, s.length - m$2.raw.length) + x.raw, t = t.substring(0, t.length - m$2.text.length) + x.text;
					break;
				} else if (u$1?.type === "list") {
					let m$2 = u$1, k = m$2.raw + `
` + r.join(`
`), x = /* @__PURE__ */ this.list(k);
					l[l.length - 1] = x, s = s.substring(0, s.length - u$1.raw.length) + x.raw, t = t.substring(0, t.length - m$2.raw.length) + x.raw, r = /* @__PURE__ */ k.substring(l.at(-1).raw.length).split(`
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
	list(n$1) {
		let e = /* @__PURE__ */ this.rules.block.list.exec(n$1);
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
			for (; n$1;) {
				let a = !1, c = "", h = "";
				if (!(e = /* @__PURE__ */ l.exec(n$1)) || this.rules.block.hr.test(n$1)) break;
				c = e[0], n$1 = /* @__PURE__ */ n$1.substring(c.length);
				let f = /* @__PURE__ */ e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (L) => " ".repeat(3 * L.length)), u$1 = n$1.split(`
`, 1)[0], m$2 = !f.trim(), k = 0;
				if (this.options.pedantic ? (k = 2, h = /* @__PURE__ */ f.trimStart()) : m$2 ? k = e[1].length + 1 : (k = /* @__PURE__ */ e[2].search(this.rules.other.nonSpaceChar), k = k > 4 ? 1 : k, h = /* @__PURE__ */ f.slice(k), k += e[1].length), m$2 && this.rules.other.blankLine.test(u$1) && (c += u$1 + `
`, n$1 = /* @__PURE__ */ n$1.substring(u$1.length + 1), a = !0), !a) {
					let L = /* @__PURE__ */ this.rules.other.nextBulletRegex(k), M$1 = /* @__PURE__ */ this.rules.other.hrRegex(k), S$1 = /* @__PURE__ */ this.rules.other.fencesBeginRegex(k), y = /* @__PURE__ */ this.rules.other.headingBeginRegex(k), tt = /* @__PURE__ */ this.rules.other.htmlBeginRegex(k);
					for (; n$1;) {
						let U = n$1.split(`
`, 1)[0], v$1;
						if (u$1 = U, this.options.pedantic ? (u$1 = /* @__PURE__ */ u$1.replace(this.rules.other.listReplaceNesting, "  "), v$1 = u$1) : v$1 = /* @__PURE__ */ u$1.replace(this.rules.other.tabCharGlobal, "    "), S$1.test(u$1) || y.test(u$1) || tt.test(u$1) || L.test(u$1) || M$1.test(u$1)) break;
						if (v$1.search(this.rules.other.nonSpaceChar) >= k || !u$1.trim()) h += `
` + v$1.slice(k);
						else {
							if (m$2 || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S$1.test(f) || y.test(f) || M$1.test(f)) break;
							h += `
` + u$1;
						}
						!m$2 && !u$1.trim() && (m$2 = !0), c += U + `
`, n$1 = /* @__PURE__ */ n$1.substring(U.length + 1), f = /* @__PURE__ */ v$1.slice(k);
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
	html(n$1) {
		let e = /* @__PURE__ */ this.rules.block.html.exec(n$1);
		if (e) return {
			type: "html",
			block: !0,
			raw: e[0],
			pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
			text: e[0]
		};
	}
	def(n$1) {
		let e = /* @__PURE__ */ this.rules.block.def.exec(n$1);
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
	table(n$1) {
		let e = /* @__PURE__ */ this.rules.block.table.exec(n$1);
		if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
		let r = /* @__PURE__ */ _e$1(e[1]), s = /* @__PURE__ */ e[2].replace(this.rules.other.tableAlignChars, "").split("|"), t = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
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
			for (let i of t) l.rows.push(/* @__PURE__ */ _e$1(i, l.header.length).map((o, a) => ({
				text: o,
				tokens: /* @__PURE__ */ this.lexer.inline(o),
				header: !1,
				align: l.align[a]
			})));
			return l;
		}
	}
	lheading(n$1) {
		let e = /* @__PURE__ */ this.rules.block.lheading.exec(n$1);
		if (e) return {
			type: "heading",
			raw: e[0],
			depth: e[2].charAt(0) === "=" ? 1 : 2,
			text: e[1],
			tokens: /* @__PURE__ */ this.lexer.inline(e[1])
		};
	}
	paragraph(n$1) {
		let e = /* @__PURE__ */ this.rules.block.paragraph.exec(n$1);
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
	text(n$1) {
		let e = /* @__PURE__ */ this.rules.block.text.exec(n$1);
		if (e) return {
			type: "text",
			raw: e[0],
			text: e[0],
			tokens: /* @__PURE__ */ this.lexer.inline(e[0])
		};
	}
	escape(n$1) {
		let e = /* @__PURE__ */ this.rules.inline.escape.exec(n$1);
		if (e) return {
			type: "escape",
			raw: e[0],
			text: e[1]
		};
	}
	tag(n$1) {
		let e = /* @__PURE__ */ this.rules.inline.tag.exec(n$1);
		if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: e[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: e[0]
		};
	}
	link(n$1) {
		let e = /* @__PURE__ */ this.rules.inline.link.exec(n$1);
		if (e) {
			let r = /* @__PURE__ */ e[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
				if (!this.rules.other.endAngleBracket.test(r)) return;
				let l = /* @__PURE__ */ j(/* @__PURE__ */ r.slice(0, -1), "\\");
				if ((r.length - l.length) % 2 === 0) return;
			} else {
				let l = /* @__PURE__ */ Nt$1(e[2], "()");
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
			return s = /* @__PURE__ */ s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? s = /* @__PURE__ */ s.slice(1) : s = /* @__PURE__ */ s.slice(1, -1)), Be$1(e, {
				href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
				title: t && t.replace(this.rules.inline.anyPunctuation, "$1")
			}, e[0], this.lexer, this.rules);
		}
	}
	reflink(n$1, e) {
		let r;
		if ((r = /* @__PURE__ */ this.rules.inline.reflink.exec(n$1)) || (r = /* @__PURE__ */ this.rules.inline.nolink.exec(n$1))) {
			let s = /* @__PURE__ */ (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "), t = e[s.toLowerCase()];
			if (!t) {
				let l = /* @__PURE__ */ r[0].charAt(0);
				return {
					type: "text",
					raw: l,
					text: l
				};
			}
			return Be$1(r, t, r[0], this.lexer, this.rules);
		}
	}
	emStrong(n$1, e, r = "") {
		let s = /* @__PURE__ */ this.rules.inline.emStrongLDelim.exec(n$1);
		if (!(!s || s[3] && r.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !r || this.rules.inline.punctuation.exec(r))) {
			let t = [...s[0]].length - 1, l, i, o = t, a = 0, c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, e = /* @__PURE__ */ e.slice(-1 * n$1.length + t); (s = /* @__PURE__ */ c.exec(e)) != null;) {
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
				let h = [...s[0]][0].length, f = /* @__PURE__ */ n$1.slice(0, t + s.index + h + i);
				if (Math.min(t, i) % 2) {
					let m$2 = /* @__PURE__ */ f.slice(1, -1);
					return {
						type: "em",
						raw: f,
						text: m$2,
						tokens: /* @__PURE__ */ this.lexer.inlineTokens(m$2)
					};
				}
				let u$1 = /* @__PURE__ */ f.slice(2, -2);
				return {
					type: "strong",
					raw: f,
					text: u$1,
					tokens: /* @__PURE__ */ this.lexer.inlineTokens(u$1)
				};
			}
		}
	}
	codespan(n$1) {
		let e = /* @__PURE__ */ this.rules.inline.code.exec(n$1);
		if (e) {
			let r = /* @__PURE__ */ e[2].replace(this.rules.other.newLineCharGlobal, " "), s = /* @__PURE__ */ this.rules.other.nonSpaceChar.test(r), t = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
			return s && t && (r = /* @__PURE__ */ r.substring(1, r.length - 1)), {
				type: "codespan",
				raw: e[0],
				text: r
			};
		}
	}
	br(n$1) {
		let e = /* @__PURE__ */ this.rules.inline.br.exec(n$1);
		if (e) return {
			type: "br",
			raw: e[0]
		};
	}
	del(n$1) {
		let e = /* @__PURE__ */ this.rules.inline.del.exec(n$1);
		if (e) return {
			type: "del",
			raw: e[0],
			text: e[2],
			tokens: /* @__PURE__ */ this.lexer.inlineTokens(e[2])
		};
	}
	autolink(n$1) {
		let e = /* @__PURE__ */ this.rules.inline.autolink.exec(n$1);
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
	url(n$1) {
		let e;
		if (e = /* @__PURE__ */ this.rules.inline.url.exec(n$1)) {
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
	inlineText(n$1) {
		let e = /* @__PURE__ */ this.rules.inline.text.exec(n$1);
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
}, $$1 = class oe$1 {
	static {
		m$1(this, "l");
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
			inline: P$1.normal
		};
		this.options.pedantic ? (r.block = W.pedantic, r.inline = P$1.pedantic) : this.options.gfm && (r.block = W.gfm, this.options.breaks ? r.inline = P$1.breaks : r.inline = P$1.gfm), this.tokenizer.rules = r;
	}
	static get rules() {
		return {
			block: W,
			inline: P$1
		};
	}
	static lex(e, r) {
		return new oe$1(r).lex(e);
	}
	static lexInline(e, r) {
		return new oe$1(r).inlineTokens(e);
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
				this.options.extensions.startInline.forEach((u$1) => {
					f = /* @__PURE__ */ u$1.call({ lexer: this }, h), typeof f == "number" && f >= 0 && (c = /* @__PURE__ */ Math.min(c, f));
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
}, H$1 = class {
	static {
		m$1(this, "P");
	}
	options;
	parser;
	constructor(n$1) {
		this.options = n$1 || E;
	}
	space(n$1) {
		return "";
	}
	code({ text: n$1, lang: e, escaped: r }) {
		let s = (e || "").match(w.notSpaceStart)?.[0], t = n$1.replace(w.endingNewline, "") + `
`;
		return s ? "<pre><code class=\"language-" + T(s) + "\">" + (r ? t : T(t, !0)) + `</code></pre>
` : "<pre><code>" + (r ? t : T(t, !0)) + `</code></pre>
`;
	}
	blockquote({ tokens: n$1 }) {
		return `<blockquote>
${this.parser.parse(n$1)}</blockquote>
`;
	}
	html({ text: n$1 }) {
		return n$1;
	}
	def(n$1) {
		return "";
	}
	heading({ tokens: n$1, depth: e }) {
		return `<h${e}>${this.parser.parseInline(n$1)}</h${e}>
`;
	}
	hr(n$1) {
		return `<hr>
`;
	}
	list(n$1) {
		let e = n$1.ordered, r = n$1.start, s = "";
		for (let i = 0; i < n$1.items.length; i++) {
			let o = n$1.items[i];
			s += /* @__PURE__ */ this.listitem(o);
		}
		let t = e ? "ol" : "ul", l = e && r !== 1 ? " start=\"" + r + "\"" : "";
		return "<" + t + l + `>
` + s + "</" + t + `>
`;
	}
	listitem(n$1) {
		let e = "";
		if (n$1.task) {
			let r = /* @__PURE__ */ this.checkbox({ checked: !!n$1.checked });
			n$1.loose ? n$1.tokens[0]?.type === "paragraph" ? (n$1.tokens[0].text = r + " " + n$1.tokens[0].text, n$1.tokens[0].tokens && n$1.tokens[0].tokens.length > 0 && n$1.tokens[0].tokens[0].type === "text" && (n$1.tokens[0].tokens[0].text = r + " " + T(n$1.tokens[0].tokens[0].text), n$1.tokens[0].tokens[0].escaped = !0)) : n$1.tokens.unshift({
				type: "text",
				raw: r + " ",
				text: r + " ",
				escaped: !0
			}) : e += r + " ";
		}
		return e += /* @__PURE__ */ this.parser.parse(n$1.tokens, !!n$1.loose), `<li>${e}</li>
`;
	}
	checkbox({ checked: n$1 }) {
		return "<input " + (n$1 ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
	}
	paragraph({ tokens: n$1 }) {
		return `<p>${this.parser.parseInline(n$1)}</p>
`;
	}
	table(n$1) {
		let e = "", r = "";
		for (let t = 0; t < n$1.header.length; t++) r += /* @__PURE__ */ this.tablecell(n$1.header[t]);
		e += /* @__PURE__ */ this.tablerow({ text: r });
		let s = "";
		for (let t = 0; t < n$1.rows.length; t++) {
			let l = n$1.rows[t];
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
	tablerow({ text: n$1 }) {
		return `<tr>
${n$1}</tr>
`;
	}
	tablecell(n$1) {
		let e = /* @__PURE__ */ this.parser.parseInline(n$1.tokens), r = n$1.header ? "th" : "td";
		return (n$1.align ? `<${r} align="${n$1.align}">` : `<${r}>`) + e + `</${r}>
`;
	}
	strong({ tokens: n$1 }) {
		return `<strong>${this.parser.parseInline(n$1)}</strong>`;
	}
	em({ tokens: n$1 }) {
		return `<em>${this.parser.parseInline(n$1)}</em>`;
	}
	codespan({ text: n$1 }) {
		return `<code>${T(n$1, !0)}</code>`;
	}
	br(n$1) {
		return "<br>";
	}
	del({ tokens: n$1 }) {
		return `<del>${this.parser.parseInline(n$1)}</del>`;
	}
	link({ href: n$1, title: e, tokens: r }) {
		let s = /* @__PURE__ */ this.parser.parseInline(r), t = /* @__PURE__ */ De(n$1);
		if (t === null) return s;
		n$1 = t;
		let l = "<a href=\"" + n$1 + "\"";
		return e && (l += " title=\"" + T(e) + "\""), l += ">" + s + "</a>", l;
	}
	image({ href: n$1, title: e, text: r, tokens: s }) {
		s && (r = /* @__PURE__ */ this.parser.parseInline(s, this.parser.textRenderer));
		let t = /* @__PURE__ */ De(n$1);
		if (t === null) return T(r);
		n$1 = t;
		let l = `<img src="${n$1}" alt="${r}"`;
		return e && (l += ` title="${T(e)}"`), l += ">", l;
	}
	text(n$1) {
		return "tokens" in n$1 && n$1.tokens ? this.parser.parseInline(n$1.tokens) : "escaped" in n$1 && n$1.escaped ? n$1.text : T(n$1.text);
	}
}, me$1 = class {
	static {
		m$1(this, "$");
	}
	strong({ text: n$1 }) {
		return n$1;
	}
	em({ text: n$1 }) {
		return n$1;
	}
	codespan({ text: n$1 }) {
		return n$1;
	}
	del({ text: n$1 }) {
		return n$1;
	}
	html({ text: n$1 }) {
		return n$1;
	}
	text({ text: n$1 }) {
		return n$1;
	}
	link({ text: n$1 }) {
		return "" + n$1;
	}
	image({ text: n$1 }) {
		return "" + n$1;
	}
	br() {
		return "";
	}
}, R = class le$1 {
	static {
		m$1(this, "l");
	}
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || E, this.options.renderer = this.options.renderer || new H$1(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new me$1();
	}
	static parse(e, r) {
		return new le$1(r).parse(e);
	}
	static parseInline(e, r) {
		return new le$1(r).parseInline(e);
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
}, D$1 = class {
	static {
		m$1(this, "S");
	}
	options;
	block;
	constructor(n$1) {
		this.options = n$1 || E;
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
	preprocess(n$1) {
		return n$1;
	}
	postprocess(n$1) {
		return n$1;
	}
	processAllTokens(n$1) {
		return n$1;
	}
	emStrongMask(n$1) {
		return n$1;
	}
	provideLexer() {
		return this.block ? $$1.lex : $$1.lexInline;
	}
	provideParser() {
		return this.block ? R.parse : R.parseInline;
	}
}, Ut$1 = class {
	static {
		m$1(this, "B");
	}
	defaults = ae$1();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = R;
	Renderer = H$1;
	TextRenderer = me$1;
	Lexer = $$1;
	Tokenizer = Z;
	Hooks = D$1;
	constructor(...n$1) {
		this.use(...n$1);
	}
	walkTokens(n$1, e) {
		let r = [];
		for (let s of n$1) switch (r = /* @__PURE__ */ r.concat(/* @__PURE__ */ e.call(this, s)), s.type) {
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
	use(...n$1) {
		let e = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return n$1.forEach((r) => {
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
				let t = this.defaults.renderer || new H$1(this.defaults);
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
				let t = this.defaults.hooks || new D$1();
				for (let l in r.hooks) {
					if (!(l in t)) throw new Error(`hook '${l}' does not exist`);
					if (["options", "block"].includes(l)) continue;
					let i = l, o = r.hooks[i], a = t[i];
					D$1.passThroughHooks.has(l) ? t[i] = (c) => {
						if (this.defaults.async && D$1.passThroughHooksRespectAsync.has(l)) return Promise.resolve(/* @__PURE__ */ o.call(t, c)).then((f) => a.call(t, f));
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
	setOptions(n$1) {
		return this.defaults = {
			...this.defaults,
			...n$1
		}, this;
	}
	lexer(n$1, e) {
		return $$1.lex(n$1, e ?? this.defaults);
	}
	parser(n$1, e) {
		return R.parse(n$1, e ?? this.defaults);
	}
	parseMarkdown(n$1) {
		return (e, r) => {
			let s = { ...r }, t = {
				...this.defaults,
				...s
			}, l = /* @__PURE__ */ this.onError(!!t.silent, !!t.async);
			if (this.defaults.async === !0 && s.async === !1) return l(/* @__PURE__ */ new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof e > "u" || e === null) return l(/* @__PURE__ */ new Error("marked(): input parameter is undefined or null"));
			if (typeof e != "string") return l(/* @__PURE__ */ new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
			t.hooks && (t.hooks.options = t, t.hooks.block = n$1);
			let i = t.hooks ? t.hooks.provideLexer() : n$1 ? $$1.lex : $$1.lexInline, o = t.hooks ? t.hooks.provideParser() : n$1 ? R.parse : R.parseInline;
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
	onError(n$1, e) {
		return (r) => {
			if (r.message += `
Please report this to https://github.com/markedjs/marked.`, n$1) {
				let s = "<p>An error occurred:</p><pre>" + T(r.message + "", !0) + "</pre>";
				return e ? Promise.resolve(s) : s;
			}
			if (e) return Promise.reject(r);
			throw r;
		};
	}
}, z = new Ut$1();
function g(n$1, e) {
	return z.parse(n$1, e);
}
m$1(g, "d");
g.options = g.setOptions = function(n$1) {
	return z.setOptions(n$1), g.defaults = z.defaults, Fe$1(g.defaults), g;
};
g.getDefaults = ae$1;
g.defaults = E;
g.use = function(...n$1) {
	return z.use(...n$1), g.defaults = z.defaults, Fe$1(g.defaults), g;
};
g.walkTokens = function(n$1, e) {
	return z.walkTokens(n$1, e);
};
g.parseInline = z.parseInline;
g.Parser = R;
g.parser = R.parse;
g.Renderer = H$1;
g.TextRenderer = me$1;
g.Lexer = $$1;
g.lexer = $$1.lex;
g.Tokenizer = Z;
g.Hooks = D$1;
g.parse = g;
g.options;
g.setOptions;
g.use;
g.walkTokens;
g.parseInline;
R.parse;
$$1.lex;
function Qt(n$1, { markdownAutoWrap: e }) {
	let t = /* @__PURE__ */ Ce$1(/* @__PURE__ */ n$1.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`));
	return e === !1 ? t.replace(/ /g, "&nbsp;") : t;
}
m$1(Qt, "preprocessMarkdown");
function Ke$1(n$1, e = {}) {
	let r = /* @__PURE__ */ Qt(n$1, e), s = /* @__PURE__ */ g.lexer(r), t = [[]], l = 0;
	function i(o, a = "normal") {
		o.type === "text" ? o.text.split(`
`).forEach((h, f) => {
			f !== 0 && (l++, t.push([])), h.split(" ").forEach((u$1) => {
				u$1 = /* @__PURE__ */ u$1.replace(/&#39;/g, "'"), u$1 && t[l].push({
					content: u$1,
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
	return m$1(i, "processNode"), s.forEach((o) => {
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
m$1(Ke$1, "markdownToLines");
function Xe$1(n$1, { markdownAutoWrap: e } = {}) {
	let r = /* @__PURE__ */ g.lexer(n$1);
	function s(t) {
		return t.type === "text" ? e === !1 ? t.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : t.text.replace(/\n */g, "<br/>") : t.type === "strong" ? `<strong>${t.tokens?.map(s).join("")}</strong>` : t.type === "em" ? `<em>${t.tokens?.map(s).join("")}</em>` : t.type === "paragraph" ? `<p>${t.tokens?.map(s).join("")}</p>` : t.type === "space" ? "" : t.type === "html" ? `${t.text}` : t.type === "escape" ? t.text : (pt.warn(`Unsupported markdown: ${t.type}`), t.raw);
	}
	return m$1(s, "output"), r.map(s).join("");
}
m$1(Xe$1, "markdownToHTML");
function Kt(n$1) {
	return Intl.Segmenter ? [.../* @__PURE__ */ new Intl.Segmenter().segment(n$1)].map((e) => e.segment) : [...n$1];
}
m$1(Kt, "splitTextToChars");
function Xt$1(n$1, e) {
	let r = /* @__PURE__ */ Kt(e.content);
	return Je$1(n$1, [], r, e.type);
}
m$1(Xt$1, "splitWordToFitWidth");
function Je$1(n$1, e, r, s) {
	if (r.length === 0) return [{
		content: /* @__PURE__ */ e.join(""),
		type: s
	}, {
		content: "",
		type: s
	}];
	let [t, ...l] = r, i = [...e, t];
	return n$1([{
		content: /* @__PURE__ */ i.join(""),
		type: s
	}]) ? Je$1(n$1, i, l, s) : (e.length === 0 && t && (e.push(t), r.shift()), [{
		content: /* @__PURE__ */ e.join(""),
		type: s
	}, {
		content: /* @__PURE__ */ r.join(""),
		type: s
	}]);
}
m$1(Je$1, "splitWordToFitWidthRecursion");
function Ye$1(n$1, e) {
	if (n$1.some(({ content: r }) => r.includes(`
`))) throw new Error("splitLineToFitWidth does not support newlines in the line");
	return ke$1(n$1, e);
}
m$1(Ye$1, "splitLineToFitWidth");
function ke$1(n$1, e, r = [], s = []) {
	if (n$1.length === 0) return s.length > 0 && r.push(s), r.length > 0 ? r : [];
	let t = "";
	n$1[0].content === " " && (t = " ", n$1.shift());
	let l = n$1.shift() ?? {
		content: " ",
		type: "normal"
	}, i = [...s];
	if (t !== "" && i.push({
		content: t,
		type: "normal"
	}), i.push(l), e(i)) return ke$1(n$1, e, r, i);
	if (s.length > 0) r.push(s), n$1.unshift(l);
	else if (l.content) {
		let [o, a] = Xt$1(e, l);
		r.push([o]), a.content && n$1.unshift(a);
	}
	return ke$1(n$1, e, r);
}
m$1(ke$1, "splitLineToFitWidthRecursion");
function et$1(n$1, e) {
	e && n$1.attr("style", e);
}
m$1(et$1, "applyStyle");
async function Jt(n$1, e, r, s, t = !1, l = Ot()) {
	let i = /* @__PURE__ */ n$1.append("foreignObject");
	i.attr("width", `${10 * r}px`), i.attr("height", `${10 * r}px`);
	let o = /* @__PURE__ */ i.append("xhtml:div"), a = nr(e.label) ? await qo(/* @__PURE__ */ e.label.replace(hn.lineBreakRegex, `
`), l) : ot(e.label, l), c = e.isNode ? "nodeLabel" : "edgeLabel", h = /* @__PURE__ */ o.append("span");
	h.html(a), et$1(h, e.labelStyle), h.attr("class", `${c} ${s}`), et$1(o, e.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", r + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), t && o.attr("class", "labelBkg");
	let f = /* @__PURE__ */ o.node().getBoundingClientRect();
	return f.width === r && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", r + "px"), f = /* @__PURE__ */ o.node().getBoundingClientRect()), i.node();
}
m$1(Jt, "addHtmlSpan");
function xe$1(n$1, e, r) {
	return n$1.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * r - .1 + "em").attr("dy", r + "em");
}
m$1(xe$1, "createTspan");
function Yt$2(n$1, e, r) {
	let s = /* @__PURE__ */ n$1.append("text"), t = /* @__PURE__ */ xe$1(s, 1, e);
	be(t, r);
	let l = /* @__PURE__ */ t.node().getComputedTextLength();
	return s.remove(), l;
}
m$1(Yt$2, "computeWidthOfText");
function $r$1(n$1, e, r) {
	let s = /* @__PURE__ */ n$1.append("text"), t = /* @__PURE__ */ xe$1(s, 1, e);
	be(t, [{
		content: r,
		type: "normal"
	}]);
	let l = t.node()?.getBoundingClientRect();
	return l && s.remove(), l;
}
m$1($r$1, "computeDimensionOfText");
function en(n$1, e, r, s = !1) {
	let l = /* @__PURE__ */ e.append("g"), i = /* @__PURE__ */ l.insert("rect").attr("class", "background").attr("style", "stroke: none"), o = /* @__PURE__ */ l.append("text").attr("y", "-10.1"), a = 0;
	for (let c of r) {
		let h = /* @__PURE__ */ m$1((u$1) => Yt$2(l, 1.1, u$1) <= n$1, "checkWidth"), f = h(c) ? [c] : Ye$1(c, h);
		for (let u$1 of f) be(/* @__PURE__ */ xe$1(o, a, 1.1), u$1), a++;
	}
	if (s) {
		let c = /* @__PURE__ */ o.node().getBBox(), h = 2;
		return i.attr("x", c.x - h).attr("y", c.y - h).attr("width", c.width + 2 * h).attr("height", c.height + 2 * h), l.node();
	} else return o.node();
}
m$1(en, "createFormattedText");
function be(n$1, e) {
	n$1.text(""), e.forEach((r, s) => {
		let t = /* @__PURE__ */ n$1.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
		s === 0 ? t.text(r.content) : t.text(" " + r.content);
	});
}
m$1(be, "updateTextContentAndStyles");
async function tn(n$1, e = {}) {
	let r = [];
	n$1.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (t, l, i) => (r.push(/* @__PURE__ */ (async () => {
		let o = `${l}:${i}`;
		return await Me$1(o) ? await ve(o, void 0, { class: "label-icon" }) : `<i class='${ot(t, e).replace(":", " ")}'></i>`;
	})()), t));
	let s = await Promise.all(r);
	return n$1.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => s.shift() ?? "");
}
m$1(tn, "replaceIconSubstring");
var Rr = /* @__PURE__ */ m$1(async (n$1, e = "", { style: r = "", isTitle: s = !1, classes: t = "", useHtmlLabels: l = !0, isNode: i = !0, width: o = 200, addSvgBackground: a = !1 } = {}, c) => {
	if (pt.debug("XYZ createText", e, r, s, t, l, i, "addSvgBackground: ", a), l) {
		let f = await tn(/* @__PURE__ */ Yt(/* @__PURE__ */ Xe$1(e, c)), c), u$1 = /* @__PURE__ */ e.replace(/\\\\/g, "\\"), m$2 = {
			isNode: i,
			label: nr(e) ? u$1 : f,
			labelStyle: /* @__PURE__ */ r.replace("fill:", "color:")
		};
		return await Jt(n$1, m$2, o, t, a, c);
	} else {
		let u$1 = /* @__PURE__ */ en(o, n$1, /* @__PURE__ */ Ke$1(/* @__PURE__ */ (/* @__PURE__ */ e.replace(/<br\s*\/?>/g, "<br/>")).replace("<br>", "<br/>"), c), e ? a : !1);
		if (i) {
			/stroke:/.exec(r) && (r = /* @__PURE__ */ r.replace("stroke:", "lineColor:"));
			let m$2 = /* @__PURE__ */ r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			ia(u$1).attr("style", m$2);
		} else {
			let m$2 = /* @__PURE__ */ r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
			ia(u$1).select("rect").attr("style", /* @__PURE__ */ m$2.replace(/background:/g, "fill:"));
			let k = /* @__PURE__ */ r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			ia(u$1).select("text").attr("style", k);
		}
		return u$1;
	}
}, "createText");
var n = /* @__PURE__ */ m$1(({ flowchart: r }) => {
	let t = r?.subGraphTitleMargin?.top ?? 0, a = r?.subGraphTitleMargin?.bottom ?? 0, o = t + a;
	return {
		subGraphTitleTopMargin: t,
		subGraphTitleBottomMargin: a,
		subGraphTitleTotalMargin: o
	};
}, "getSubGraphTitleMargins");
var C = /* @__PURE__ */ m$1(async (c, t, i) => {
	let r, e = t.useHtmlLabels || Mo(mr()?.htmlLabels);
	i ? r = i : r = "node default";
	let a = /* @__PURE__ */ c.insert("g").attr("class", r).attr("id", t.domId || t.id), h = /* @__PURE__ */ a.insert("g").attr("class", "label").attr("style", /* @__PURE__ */ Vt(t.labelStyle)), s;
	t.label === void 0 ? s = "" : s = typeof t.label == "string" ? t.label : t.label[0];
	let l = await Rr(h, /* @__PURE__ */ ot(/* @__PURE__ */ Yt(s), /* @__PURE__ */ mr()), {
		useHtmlLabels: e,
		width: t.width || mr().flowchart?.wrappingWidth,
		cssClasses: "markdown-node-label",
		style: t.labelStyle,
		addSvgBackground: !!t.icon || !!t.img
	}), o = /* @__PURE__ */ l.getBBox(), n$1 = (t?.padding ?? 0) / 2;
	if (e) {
		let p$1 = l.children[0], f = /* @__PURE__ */ ia(l), m$2 = /* @__PURE__ */ p$1.getElementsByTagName("img");
		if (m$2) {
			let d$1 = s.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all(/* @__PURE__ */ [...m$2].map((g$1) => new Promise((y) => {
				function u$1() {
					if (g$1.style.display = "flex", g$1.style.flexDirection = "column", d$1) {
						let b = mr().fontSize ? mr().fontSize : window.getComputedStyle(document.body).fontSize, S$1 = 5, [k = Ni.fontSize] = $(b), w$1 = k * S$1 + "px";
						g$1.style.minWidth = w$1, g$1.style.maxWidth = w$1;
					} else g$1.style.width = "100%";
					y(g$1);
				}
				m$1(u$1, "setupImage"), setTimeout(() => {
					g$1.complete && u$1();
				}), g$1.addEventListener("error", u$1), g$1.addEventListener("load", u$1);
			})));
		}
		o = /* @__PURE__ */ p$1.getBoundingClientRect(), f.attr("width", o.width), f.attr("height", o.height);
	}
	return e ? h.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")") : h.attr("transform", "translate(0, " + -o.height / 2 + ")"), t.centerLabel && h.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), h.insert("rect", ":first-child"), {
		shapeSvg: a,
		bbox: o,
		halfPadding: n$1,
		label: h
	};
}, "labelHelper"), At = /* @__PURE__ */ m$1(async (c, t, i) => {
	let r = i.useHtmlLabels || Mo(mr()?.flowchart?.htmlLabels), e = /* @__PURE__ */ c.insert("g").attr("class", "label").attr("style", i.labelStyle || ""), a = await Rr(e, /* @__PURE__ */ ot(/* @__PURE__ */ Yt(t), /* @__PURE__ */ mr()), {
		useHtmlLabels: r,
		width: i.width || mr()?.flowchart?.wrappingWidth,
		style: i.labelStyle,
		addSvgBackground: !!i.icon || !!i.img
	}), h = /* @__PURE__ */ a.getBBox(), s = i.padding / 2;
	if (Mo(mr()?.flowchart?.htmlLabels)) {
		let l = a.children[0], o = /* @__PURE__ */ ia(a);
		h = /* @__PURE__ */ l.getBoundingClientRect(), o.attr("width", h.width), o.attr("height", h.height);
	}
	return r ? e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")") : e.attr("transform", "translate(0, " + -h.height / 2 + ")"), i.centerLabel && e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), e.insert("rect", ":first-child"), {
		shapeSvg: c,
		bbox: h,
		halfPadding: s,
		label: e
	};
}, "insertLabel"), D = /* @__PURE__ */ m$1((c, t) => {
	let i = /* @__PURE__ */ t.node().getBBox();
	c.width = i.width, c.height = i.height;
}, "updateNodeBounds");
var P = /* @__PURE__ */ m$1((c, t) => (c.look === "handDrawn" ? "rough-node" : "node") + " " + c.cssClasses + " " + (t || ""), "getNodeClasses");
function H(c) {
	let t = /* @__PURE__ */ c.map((i, r) => `${r === 0 ? "M" : "L"}${i.x},${i.y}`);
	return t.push("Z"), t.join(" ");
}
m$1(H, "createPathFromPoints");
function lt(c, t, i, r, e, a) {
	let h = [], l = i - c, o = r - t, n$1 = l / a, p$1 = 2 * Math.PI / n$1, f = t + o / 2;
	for (let m$2 = 0; m$2 <= 50; m$2++) {
		let d$1 = m$2 / 50, g$1 = c + d$1 * l, y = f + e * Math.sin(p$1 * (g$1 - c));
		h.push({
			x: g$1,
			y
		});
	}
	return h;
}
m$1(lt, "generateFullSineWavePoints");
function Nt(c, t, i, r, e, a) {
	let h = [], s = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s + p$1 * n$1, m$2 = c + i * Math.cos(f), d$1 = t + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d$1
		});
	}
	return h;
}
m$1(Nt, "generateCirclePoints");
function te(c, t, i) {
	if (c && c.length) {
		let [r, e] = t, a = Math.PI / 180 * i, h = /* @__PURE__ */ Math.cos(a), s = /* @__PURE__ */ Math.sin(a);
		for (let l of c) {
			let [o, n$1] = l;
			l[0] = (o - r) * h - (n$1 - e) * s + r, l[1] = (o - r) * s + (n$1 - e) * h + e;
		}
	}
}
m$1(te, "t");
function sr(c, t) {
	return c[0] === t[0] && c[1] === t[1];
}
m$1(sr, "e");
function rr(c, t, i, r = 1) {
	let e = i, a = /* @__PURE__ */ Math.max(t, .1), h = c[0] && c[0][0] && typeof c[0][0] == "number" ? [c] : c, s = [0, 0];
	if (e) for (let o of h) te(o, s, e);
	let l = /* @__PURE__ */ function(o, n$1, p$1) {
		let f = [];
		for (let b of o) {
			let S$1 = [...b];
			sr(S$1[0], S$1[S$1.length - 1]) || S$1.push([S$1[0][0], S$1[0][1]]), S$1.length > 2 && f.push(S$1);
		}
		let m$2 = [];
		n$1 = /* @__PURE__ */ Math.max(n$1, .1);
		let d$1 = [];
		for (let b of f) for (let S$1 = 0; S$1 < b.length - 1; S$1++) {
			let k = b[S$1], w$1 = b[S$1 + 1];
			if (k[1] !== w$1[1]) {
				let B$1 = /* @__PURE__ */ Math.min(k[1], w$1[1]);
				d$1.push({
					ymin: B$1,
					ymax: /* @__PURE__ */ Math.max(k[1], w$1[1]),
					x: B$1 === k[1] ? k[0] : w$1[0],
					islope: (w$1[0] - k[0]) / (w$1[1] - k[1])
				});
			}
		}
		if (d$1.sort((b, S$1) => b.ymin < S$1.ymin ? -1 : b.ymin > S$1.ymin ? 1 : b.x < S$1.x ? -1 : b.x > S$1.x ? 1 : b.ymax === S$1.ymax ? 0 : (b.ymax - S$1.ymax) / Math.abs(b.ymax - S$1.ymax)), !d$1.length) return m$2;
		let g$1 = [], y = d$1[0].ymin, u$1 = 0;
		for (; g$1.length || d$1.length;) {
			if (d$1.length) {
				let b = -1;
				for (let S$1 = 0; S$1 < d$1.length && !(d$1[S$1].ymin > y); S$1++) b = S$1;
				d$1.splice(0, b + 1).forEach((S$1) => {
					g$1.push({
						s: y,
						edge: S$1
					});
				});
			}
			if (g$1 = /* @__PURE__ */ g$1.filter((b) => !(b.edge.ymax <= y)), g$1.sort((b, S$1) => b.edge.x === S$1.edge.x ? 0 : (b.edge.x - S$1.edge.x) / Math.abs(b.edge.x - S$1.edge.x)), (p$1 !== 1 || u$1 % n$1 == 0) && g$1.length > 1) for (let b = 0; b < g$1.length; b += 2) {
				let S$1 = b + 1;
				if (S$1 >= g$1.length) break;
				let k = g$1[b].edge, w$1 = g$1[S$1].edge;
				m$2.push([[/* @__PURE__ */ Math.round(k.x), y], [/* @__PURE__ */ Math.round(w$1.x), y]]);
			}
			y += p$1, g$1.forEach((b) => {
				b.edge.x = b.edge.x + p$1 * b.edge.islope;
			}), u$1++;
		}
		return m$2;
	}(h, a, r);
	if (e) {
		for (let o of h) te(o, s, -e);
		(function(o, n$1, p$1) {
			let f = [];
			o.forEach((m$2) => f.push(...m$2)), te(f, n$1, p$1);
		})(l, s, -e);
	}
	return l;
}
m$1(rr, "s");
function Tt(c, t) {
	var i;
	let r = t.hachureAngle + 90, e = t.hachureGap;
	e < 0 && (e = 4 * t.strokeWidth), e = /* @__PURE__ */ Math.round(/* @__PURE__ */ Math.max(e, .1));
	let a = 1;
	return t.roughness >= 1 && (((i = t.randomizer) === null || i === void 0 ? void 0 : i.next()) || Math.random()) > .7 && (a = e), rr(c, e, r, a || 1);
}
m$1(Tt, "n");
var Ct = class {
	static {
		m$1(this, "o");
	}
	constructor(t) {
		this.helper = t;
	}
	fillPolygons(t, i) {
		return this._fillPolygons(t, i);
	}
	_fillPolygons(t, i) {
		let r = /* @__PURE__ */ Tt(t, i);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.renderLines(r, i)
		};
	}
	renderLines(t, i) {
		let r = [];
		for (let e of t) r.push(.../* @__PURE__ */ this.helper.doubleLineOps(e[0][0], e[0][1], e[1][0], e[1][1], i));
		return r;
	}
};
function zt(c) {
	let t = c[0], i = c[1];
	return Math.sqrt(Math.pow(t[0] - i[0], 2) + Math.pow(t[1] - i[1], 2));
}
m$1(zt, "a");
var oe = class extends Ct {
	static {
		m$1(this, "h");
	}
	fillPolygons(t, i) {
		let r = i.hachureGap;
		r < 0 && (r = 4 * i.strokeWidth), r = /* @__PURE__ */ Math.max(r, .1);
		let e = /* @__PURE__ */ Tt(t, /* @__PURE__ */ Object.assign({}, i, { hachureGap: r })), a = Math.PI / 180 * i.hachureAngle, h = [], s = .5 * r * Math.cos(a), l = .5 * r * Math.sin(a);
		for (let [o, n$1] of e) zt([o, n$1]) && h.push([[o[0] - s, o[1] + l], [...n$1]], [[o[0] + s, o[1] - l], [...n$1]]);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.renderLines(h, i)
		};
	}
}, ie = class extends Ct {
	static {
		m$1(this, "r");
	}
	fillPolygons(t, i) {
		let r = /* @__PURE__ */ this._fillPolygons(t, i), e = /* @__PURE__ */ Object.assign({}, i, { hachureAngle: i.hachureAngle + 90 }), a = /* @__PURE__ */ this._fillPolygons(t, e);
		return r.ops = /* @__PURE__ */ r.ops.concat(a.ops), r;
	}
}, ne = class {
	static {
		m$1(this, "i");
	}
	constructor(t) {
		this.helper = t;
	}
	fillPolygons(t, i) {
		let r = /* @__PURE__ */ Tt(t, i = /* @__PURE__ */ Object.assign({}, i, { hachureAngle: 0 }));
		return this.dotsOnLines(r, i);
	}
	dotsOnLines(t, i) {
		let r = [], e = i.hachureGap;
		e < 0 && (e = 4 * i.strokeWidth), e = /* @__PURE__ */ Math.max(e, .1);
		let a = i.fillWeight;
		a < 0 && (a = i.strokeWidth / 2);
		let h = e / 4;
		for (let s of t) {
			let l = /* @__PURE__ */ zt(s), o = l / e, n$1 = Math.ceil(o) - 1, p$1 = l - n$1 * e, f = (s[0][0] + s[1][0]) / 2 - e / 4, m$2 = /* @__PURE__ */ Math.min(s[0][1], s[1][1]);
			for (let d$1 = 0; d$1 < n$1; d$1++) {
				let g$1 = m$2 + p$1 + d$1 * e, y = f - h + 2 * Math.random() * h, u$1 = g$1 - h + 2 * Math.random() * h, b = /* @__PURE__ */ this.helper.ellipse(y, u$1, a, a, i);
				r.push(...b.ops);
			}
		}
		return {
			type: "fillSketch",
			ops: r
		};
	}
}, le = class {
	static {
		m$1(this, "c");
	}
	constructor(t) {
		this.helper = t;
	}
	fillPolygons(t, i) {
		let r = /* @__PURE__ */ Tt(t, i);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.dashedLine(r, i)
		};
	}
	dashedLine(t, i) {
		let r = i.dashOffset < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashOffset, e = i.dashGap < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashGap, a = [];
		return t.forEach((h) => {
			let s = /* @__PURE__ */ zt(h), l = /* @__PURE__ */ Math.floor(s / (r + e)), o = (s + e - l * (r + e)) / 2, n$1 = h[0], p$1 = h[1];
			n$1[0] > p$1[0] && (n$1 = h[1], p$1 = h[0]);
			let f = /* @__PURE__ */ Math.atan((p$1[1] - n$1[1]) / (p$1[0] - n$1[0]));
			for (let m$2 = 0; m$2 < l; m$2++) {
				let d$1 = m$2 * (r + e), g$1 = d$1 + r, y = [n$1[0] + d$1 * Math.cos(f) + o * Math.cos(f), n$1[1] + d$1 * Math.sin(f) + o * Math.sin(f)], u$1 = [n$1[0] + g$1 * Math.cos(f) + o * Math.cos(f), n$1[1] + g$1 * Math.sin(f) + o * Math.sin(f)];
				a.push(.../* @__PURE__ */ this.helper.doubleLineOps(y[0], y[1], u$1[0], u$1[1], i));
			}
		}), a;
	}
}, ce = class {
	static {
		m$1(this, "l");
	}
	constructor(t) {
		this.helper = t;
	}
	fillPolygons(t, i) {
		let r = i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap, e = i.zigzagOffset < 0 ? r : i.zigzagOffset, a = /* @__PURE__ */ Tt(t, i = /* @__PURE__ */ Object.assign({}, i, { hachureGap: r + e }));
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.zigzagLines(a, e, i)
		};
	}
	zigzagLines(t, i, r) {
		let e = [];
		return t.forEach((a) => {
			let h = /* @__PURE__ */ zt(a), s = /* @__PURE__ */ Math.round(h / (2 * i)), l = a[0], o = a[1];
			l[0] > o[0] && (l = a[1], o = a[0]);
			let n$1 = /* @__PURE__ */ Math.atan((o[1] - l[1]) / (o[0] - l[0]));
			for (let p$1 = 0; p$1 < s; p$1++) {
				let f = 2 * p$1 * i, m$2 = 2 * (p$1 + 1) * i, d$1 = /* @__PURE__ */ Math.sqrt(2 * Math.pow(i, 2)), g$1 = [l[0] + f * Math.cos(n$1), l[1] + f * Math.sin(n$1)], y = [l[0] + m$2 * Math.cos(n$1), l[1] + m$2 * Math.sin(n$1)], u$1 = [g$1[0] + d$1 * Math.cos(n$1 + Math.PI / 4), g$1[1] + d$1 * Math.sin(n$1 + Math.PI / 4)];
				e.push(.../* @__PURE__ */ this.helper.doubleLineOps(g$1[0], g$1[1], u$1[0], u$1[1], r), .../* @__PURE__ */ this.helper.doubleLineOps(u$1[0], u$1[1], y[0], y[1], r));
			}
		}), e;
	}
}, et = {}, he = class {
	static {
		m$1(this, "p");
	}
	constructor(t) {
		this.seed = t;
	}
	next() {
		return this.seed ? (2 ** 31 - 1 & (this.seed = /* @__PURE__ */ Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
	}
}, ar = 0, ee = 1, ve$1 = 2, Ot$1 = {
	A: 7,
	a: 7,
	C: 6,
	c: 6,
	H: 1,
	h: 1,
	L: 2,
	l: 2,
	M: 2,
	m: 2,
	Q: 4,
	q: 4,
	S: 4,
	s: 4,
	T: 2,
	t: 2,
	V: 1,
	v: 1,
	Z: 0,
	z: 0
};
function se(c, t) {
	return c.type === t;
}
m$1(se, "k");
function ue(c) {
	let t = [], i = /* @__PURE__ */ function(h) {
		let s = new Array();
		for (; h !== "";) if (h.match(/^([ \t\r\n,]+)/)) h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		else if (h.match(/^([aAcChHlLmMqQsStTvVzZ])/)) s[s.length] = {
			type: ar,
			text: RegExp.$1
		}, h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		else {
			if (!h.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
			s[s.length] = {
				type: ee,
				text: `${parseFloat(RegExp.$1)}`
			}, h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		}
		return s[s.length] = {
			type: ve$1,
			text: ""
		}, s;
	}(c), r = "BOD", e = 0, a = i[e];
	for (; !se(a, ve$1);) {
		let h = 0, s = [];
		if (r === "BOD") {
			if (a.text !== "M" && a.text !== "m") return ue("M0,0" + c);
			e++, h = Ot$1[a.text], r = a.text;
		} else se(a, ee) ? h = Ot$1[r] : (e++, h = Ot$1[a.text], r = a.text);
		if (!(e + h < i.length)) throw new Error("Path data ended short");
		for (let l = e; l < e + h; l++) {
			let o = i[l];
			if (!se(o, ee)) throw new Error("Param not a number: " + r + "," + o.text);
			s[s.length] = +o.text;
		}
		if (typeof Ot$1[r] != "number") throw new Error("Bad segment: " + r);
		{
			let l = {
				key: r,
				data: s
			};
			t.push(l), e += h, a = i[e], r === "M" && (r = "L"), r === "m" && (r = "l");
		}
	}
	return t;
}
m$1(ue, "b");
function Ge(c) {
	let t = 0, i = 0, r = 0, e = 0, a = [];
	for (let { key: h, data: s } of c) switch (h) {
		case "M":
			a.push({
				key: "M",
				data: [...s]
			}), [t, i] = s, [r, e] = s;
			break;
		case "m":
			t += s[0], i += s[1], a.push({
				key: "M",
				data: [t, i]
			}), r = t, e = i;
			break;
		case "L":
			a.push({
				key: "L",
				data: [...s]
			}), [t, i] = s;
			break;
		case "l":
			t += s[0], i += s[1], a.push({
				key: "L",
				data: [t, i]
			});
			break;
		case "C":
			a.push({
				key: "C",
				data: [...s]
			}), t = s[4], i = s[5];
			break;
		case "c": {
			let l = /* @__PURE__ */ s.map((o, n$1) => n$1 % 2 ? o + i : o + t);
			a.push({
				key: "C",
				data: l
			}), t = l[4], i = l[5];
			break;
		}
		case "Q":
			a.push({
				key: "Q",
				data: [...s]
			}), t = s[2], i = s[3];
			break;
		case "q": {
			let l = /* @__PURE__ */ s.map((o, n$1) => n$1 % 2 ? o + i : o + t);
			a.push({
				key: "Q",
				data: l
			}), t = l[2], i = l[3];
			break;
		}
		case "A":
			a.push({
				key: "A",
				data: [...s]
			}), t = s[5], i = s[6];
			break;
		case "a":
			t += s[5], i += s[6], a.push({
				key: "A",
				data: [
					s[0],
					s[1],
					s[2],
					s[3],
					s[4],
					t,
					i
				]
			});
			break;
		case "H":
			a.push({
				key: "H",
				data: [...s]
			}), t = s[0];
			break;
		case "h":
			t += s[0], a.push({
				key: "H",
				data: [t]
			});
			break;
		case "V":
			a.push({
				key: "V",
				data: [...s]
			}), i = s[0];
			break;
		case "v":
			i += s[0], a.push({
				key: "V",
				data: [i]
			});
			break;
		case "S":
			a.push({
				key: "S",
				data: [...s]
			}), t = s[2], i = s[3];
			break;
		case "s": {
			let l = /* @__PURE__ */ s.map((o, n$1) => n$1 % 2 ? o + i : o + t);
			a.push({
				key: "S",
				data: l
			}), t = l[2], i = l[3];
			break;
		}
		case "T":
			a.push({
				key: "T",
				data: [...s]
			}), t = s[0], i = s[1];
			break;
		case "t":
			t += s[0], i += s[1], a.push({
				key: "T",
				data: [t, i]
			});
			break;
		case "Z":
		case "z": a.push({
			key: "Z",
			data: []
		}), t = r, i = e;
	}
	return a;
}
m$1(Ge, "y");
function Ee(c) {
	let t = [], i = "", r = 0, e = 0, a = 0, h = 0, s = 0, l = 0;
	for (let { key: o, data: n$1 } of c) {
		switch (o) {
			case "M":
				t.push({
					key: "M",
					data: [...n$1]
				}), [r, e] = n$1, [a, h] = n$1;
				break;
			case "C":
				t.push({
					key: "C",
					data: [...n$1]
				}), r = n$1[4], e = n$1[5], s = n$1[2], l = n$1[3];
				break;
			case "L":
				t.push({
					key: "L",
					data: [...n$1]
				}), [r, e] = n$1;
				break;
			case "H":
				r = n$1[0], t.push({
					key: "L",
					data: [r, e]
				});
				break;
			case "V":
				e = n$1[0], t.push({
					key: "L",
					data: [r, e]
				});
				break;
			case "S": {
				let p$1 = 0, f = 0;
				i === "C" || i === "S" ? (p$1 = r + (r - s), f = e + (e - l)) : (p$1 = r, f = e), t.push({
					key: "C",
					data: [
						p$1,
						f,
						...n$1
					]
				}), s = n$1[0], l = n$1[1], r = n$1[2], e = n$1[3];
				break;
			}
			case "T": {
				let [p$1, f] = n$1, m$2 = 0, d$1 = 0;
				i === "Q" || i === "T" ? (m$2 = r + (r - s), d$1 = e + (e - l)) : (m$2 = r, d$1 = e);
				let g$1 = r + 2 * (m$2 - r) / 3, y = e + 2 * (d$1 - e) / 3, u$1 = p$1 + 2 * (m$2 - p$1) / 3, b = f + 2 * (d$1 - f) / 3;
				t.push({
					key: "C",
					data: [
						g$1,
						y,
						u$1,
						b,
						p$1,
						f
					]
				}), s = m$2, l = d$1, r = p$1, e = f;
				break;
			}
			case "Q": {
				let [p$1, f, m$2, d$1] = n$1, g$1 = r + 2 * (p$1 - r) / 3, y = e + 2 * (f - e) / 3, u$1 = m$2 + 2 * (p$1 - m$2) / 3, b = d$1 + 2 * (f - d$1) / 3;
				t.push({
					key: "C",
					data: [
						g$1,
						y,
						u$1,
						b,
						m$2,
						d$1
					]
				}), s = p$1, l = f, r = m$2, e = d$1;
				break;
			}
			case "A": {
				let p$1 = /* @__PURE__ */ Math.abs(n$1[0]), f = /* @__PURE__ */ Math.abs(n$1[1]), m$2 = n$1[2], d$1 = n$1[3], g$1 = n$1[4], y = n$1[5], u$1 = n$1[6];
				p$1 === 0 || f === 0 ? (t.push({
					key: "C",
					data: [
						r,
						e,
						y,
						u$1,
						y,
						u$1
					]
				}), r = y, e = u$1) : (r !== y || e !== u$1) && (je(r, e, y, u$1, p$1, f, m$2, d$1, g$1).forEach(function(b) {
					t.push({
						key: "C",
						data: b
					});
				}), r = y, e = u$1);
				break;
			}
			case "Z": t.push({
				key: "Z",
				data: []
			}), r = a, e = h;
		}
		i = o;
	}
	return t;
}
m$1(Ee, "m");
function Pt(c, t, i) {
	return [c * Math.cos(i) - t * Math.sin(i), c * Math.sin(i) + t * Math.cos(i)];
}
m$1(Pt, "w");
function je(c, t, i, r, e, a, h, s, l, o) {
	let n$1 = (p$1 = h, Math.PI * p$1 / 180);
	var p$1;
	let f = [], m$2 = 0, d$1 = 0, g$1 = 0, y = 0;
	if (o) [m$2, d$1, g$1, y] = o;
	else {
		[c, t] = /* @__PURE__ */ Pt(c, t, -n$1), [i, r] = /* @__PURE__ */ Pt(i, r, -n$1);
		let G$1 = (c - i) / 2, j$1 = (t - r) / 2, W$1 = G$1 * G$1 / (e * e) + j$1 * j$1 / (a * a);
		W$1 > 1 && (W$1 = /* @__PURE__ */ Math.sqrt(W$1), e *= W$1, a *= W$1);
		let A$1 = e * e, I = a * a, F = A$1 * I - A$1 * j$1 * j$1 - I * G$1 * G$1, Q = A$1 * j$1 * j$1 + I * G$1 * G$1, it$1 = (s === l ? -1 : 1) * Math.sqrt(/* @__PURE__ */ Math.abs(F / Q));
		g$1 = it$1 * e * j$1 / a + (c + i) / 2, y = it$1 * -a * G$1 / e + (t + r) / 2, m$2 = /* @__PURE__ */ Math.asin(/* @__PURE__ */ parseFloat(/* @__PURE__ */ ((t - y) / a).toFixed(9))), d$1 = /* @__PURE__ */ Math.asin(/* @__PURE__ */ parseFloat(/* @__PURE__ */ ((r - y) / a).toFixed(9))), c < g$1 && (m$2 = Math.PI - m$2), i < g$1 && (d$1 = Math.PI - d$1), m$2 < 0 && (m$2 = 2 * Math.PI + m$2), d$1 < 0 && (d$1 = 2 * Math.PI + d$1), l && m$2 > d$1 && (m$2 -= 2 * Math.PI), !l && d$1 > m$2 && (d$1 -= 2 * Math.PI);
	}
	let u$1 = d$1 - m$2;
	if (Math.abs(u$1) > 120 * Math.PI / 180) {
		let G$1 = d$1, j$1 = i, W$1 = r;
		d$1 = l && d$1 > m$2 ? m$2 + 120 * Math.PI / 180 * 1 : m$2 + 120 * Math.PI / 180 * -1, f = /* @__PURE__ */ je(i = g$1 + e * Math.cos(d$1), r = y + a * Math.sin(d$1), j$1, W$1, e, a, h, 0, l, [
			d$1,
			G$1,
			g$1,
			y
		]);
	}
	u$1 = d$1 - m$2;
	let b = /* @__PURE__ */ Math.cos(m$2), S$1 = /* @__PURE__ */ Math.sin(m$2), k = /* @__PURE__ */ Math.cos(d$1), w$1 = /* @__PURE__ */ Math.sin(d$1), B$1 = /* @__PURE__ */ Math.tan(u$1 / 4), T$1 = 4 / 3 * e * B$1, R$1 = 4 / 3 * a * B$1, E$1 = [c, t], L = [c + T$1 * S$1, t - R$1 * b], O$1 = [i + T$1 * w$1, r - R$1 * k], V$1 = [i, r];
	if (L[0] = 2 * E$1[0] - L[0], L[1] = 2 * E$1[1] - L[1], o) return [
		L,
		O$1,
		V$1
	].concat(f);
	{
		f = /* @__PURE__ */ [
			L,
			O$1,
			V$1
		].concat(f);
		let G$1 = [];
		for (let j$1 = 0; j$1 < f.length; j$1 += 3) {
			let W$1 = /* @__PURE__ */ Pt(f[j$1][0], f[j$1][1], n$1), A$1 = /* @__PURE__ */ Pt(f[j$1 + 1][0], f[j$1 + 1][1], n$1), I = /* @__PURE__ */ Pt(f[j$1 + 2][0], f[j$1 + 2][1], n$1);
			G$1.push([
				W$1[0],
				W$1[1],
				A$1[0],
				A$1[1],
				I[0],
				I[1]
			]);
		}
		return G$1;
	}
}
m$1(je, "x");
var or = {
	randOffset: /* @__PURE__ */ m$1(function(c, t) {
		return _(c, t);
	}, "randOffset"),
	randOffsetWithRange: /* @__PURE__ */ m$1(function(c, t, i) {
		return It(c, t, i);
	}, "randOffsetWithRange"),
	ellipse: /* @__PURE__ */ m$1(function(c, t, i, r, e) {
		return pe(c, t, e, /* @__PURE__ */ Oe(i, r, e)).opset;
	}, "ellipse"),
	doubleLineOps: /* @__PURE__ */ m$1(function(c, t, i, r, e) {
		return ut(c, t, i, r, e, !0);
	}, "doubleLineOps")
};
function Ae(c, t, i, r, e) {
	return {
		type: "path",
		ops: /* @__PURE__ */ ut(c, t, i, r, e)
	};
}
m$1(Ae, "v");
function Vt$1(c, t, i) {
	let r = (c || []).length;
	if (r > 2) {
		let e = [];
		for (let a = 0; a < r - 1; a++) e.push(.../* @__PURE__ */ ut(c[a][0], c[a][1], c[a + 1][0], c[a + 1][1], i));
		return t && e.push(.../* @__PURE__ */ ut(c[r - 1][0], c[r - 1][1], c[0][0], c[0][1], i)), {
			type: "path",
			ops: e
		};
	}
	return r === 2 ? Ae(c[0][0], c[0][1], c[1][0], c[1][1], i) : {
		type: "path",
		ops: []
	};
}
m$1(Vt$1, "S");
function ir(c, t, i, r, e) {
	return function(a, h) {
		return Vt$1(a, !0, h);
	}([
		[c, t],
		[c + i, t],
		[c + i, t + r],
		[c, t + r]
	], e);
}
m$1(ir, "O");
function Me(c, t) {
	if (c.length) {
		let i = typeof c[0][0] == "number" ? [c] : c, r = /* @__PURE__ */ Lt(i[0], 1 * (1 + .2 * t.roughness), t), e = t.disableMultiStroke ? [] : Lt(i[0], 1.5 * (1 + .22 * t.roughness), /* @__PURE__ */ Be(t));
		for (let a = 1; a < i.length; a++) {
			let h = i[a];
			if (h.length) {
				let s = /* @__PURE__ */ Lt(h, 1 * (1 + .2 * t.roughness), t), l = t.disableMultiStroke ? [] : Lt(h, 1.5 * (1 + .22 * t.roughness), /* @__PURE__ */ Be(t));
				for (let o of s) o.op !== "move" && r.push(o);
				for (let o of l) o.op !== "move" && e.push(o);
			}
		}
		return {
			type: "path",
			ops: /* @__PURE__ */ r.concat(e)
		};
	}
	return {
		type: "path",
		ops: []
	};
}
m$1(Me, "L");
function Oe(c, t, i) {
	let r = /* @__PURE__ */ Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(c / 2, 2) + Math.pow(t / 2, 2)) / 2)), e = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ Math.max(i.curveStepCount, i.curveStepCount / Math.sqrt(200) * r)), a = 2 * Math.PI / e, h = /* @__PURE__ */ Math.abs(c / 2), s = /* @__PURE__ */ Math.abs(t / 2), l = 1 - i.curveFitting;
	return h += /* @__PURE__ */ _(h * l, i), s += /* @__PURE__ */ _(s * l, i), {
		increment: a,
		rx: h,
		ry: s
	};
}
m$1(Oe, "T");
function pe(c, t, i, r) {
	let [e, a] = Ce(r.increment, c, t, r.rx, r.ry, 1, r.increment * It(.1, /* @__PURE__ */ It(.4, 1, i), i), i), h = /* @__PURE__ */ Ft(e, null, i);
	if (!i.disableMultiStroke && i.roughness !== 0) {
		let [s] = Ce(r.increment, c, t, r.rx, r.ry, 1.5, 0, i), l = /* @__PURE__ */ Ft(s, null, i);
		h = /* @__PURE__ */ h.concat(l);
	}
	return {
		estimatedPoints: a,
		opset: {
			type: "path",
			ops: h
		}
	};
}
m$1(pe, "D");
function ke(c, t, i, r, e, a, h, s, l) {
	let o = c, n$1 = t, p$1 = /* @__PURE__ */ Math.abs(i / 2), f = /* @__PURE__ */ Math.abs(r / 2);
	p$1 += /* @__PURE__ */ _(.01 * p$1, l), f += /* @__PURE__ */ _(.01 * f, l);
	let m$2 = e, d$1 = a;
	for (; m$2 < 0;) m$2 += 2 * Math.PI, d$1 += 2 * Math.PI;
	d$1 - m$2 > 2 * Math.PI && (m$2 = 0, d$1 = 2 * Math.PI);
	let g$1 = 2 * Math.PI / l.curveStepCount, y = /* @__PURE__ */ Math.min(g$1 / 2, (d$1 - m$2) / 2), u$1 = /* @__PURE__ */ Te(y, o, n$1, p$1, f, m$2, d$1, 1, l);
	if (!l.disableMultiStroke) {
		let b = /* @__PURE__ */ Te(y, o, n$1, p$1, f, m$2, d$1, 1.5, l);
		u$1.push(...b);
	}
	return h && (s ? u$1.push(.../* @__PURE__ */ ut(o, n$1, o + p$1 * Math.cos(m$2), n$1 + f * Math.sin(m$2), l), .../* @__PURE__ */ ut(o, n$1, o + p$1 * Math.cos(d$1), n$1 + f * Math.sin(d$1), l)) : u$1.push({
		op: "lineTo",
		data: [o, n$1]
	}, {
		op: "lineTo",
		data: [o + p$1 * Math.cos(m$2), n$1 + f * Math.sin(m$2)]
	})), {
		type: "path",
		ops: u$1
	};
}
m$1(ke, "A");
function Pe(c, t) {
	let i = /* @__PURE__ */ Ee(/* @__PURE__ */ Ge(/* @__PURE__ */ ue(c))), r = [], e = [0, 0], a = [0, 0];
	for (let { key: h, data: s } of i) switch (h) {
		case "M":
			a = [s[0], s[1]], e = [s[0], s[1]];
			break;
		case "L":
			r.push(.../* @__PURE__ */ ut(a[0], a[1], s[0], s[1], t)), a = [s[0], s[1]];
			break;
		case "C": {
			let [l, o, n$1, p$1, f, m$2] = s;
			r.push(.../* @__PURE__ */ nr$1(l, o, n$1, p$1, f, m$2, a, t)), a = [f, m$2];
			break;
		}
		case "Z": r.push(.../* @__PURE__ */ ut(a[0], a[1], e[0], e[1], t)), a = [e[0], e[1]];
	}
	return {
		type: "path",
		ops: r
	};
}
m$1(Pe, "_");
function re(c, t) {
	let i = [];
	for (let r of c) if (r.length) {
		let e = t.maxRandomnessOffset || 0, a = r.length;
		if (a > 2) {
			i.push({
				op: "move",
				data: [r[0][0] + _(e, t), r[0][1] + _(e, t)]
			});
			for (let h = 1; h < a; h++) i.push({
				op: "lineTo",
				data: [r[h][0] + _(e, t), r[h][1] + _(e, t)]
			});
		}
	}
	return {
		type: "fillPath",
		ops: i
	};
}
m$1(re, "I");
function vt(c, t) {
	return (function(i, r) {
		let e = i.fillStyle || "hachure";
		if (!et[e]) switch (e) {
			case "zigzag":
				et[e] || (et[e] = new oe(r));
				break;
			case "cross-hatch":
				et[e] || (et[e] = new ie(r));
				break;
			case "dots":
				et[e] || (et[e] = new ne(r));
				break;
			case "dashed":
				et[e] || (et[e] = new le(r));
				break;
			case "zigzag-line":
				et[e] || (et[e] = new ce(r));
				break;
			default: e = "hachure", et[e] || (et[e] = new Ct(r));
		}
		return et[e];
	})(t, or).fillPolygons(c, t);
}
m$1(vt, "C");
function Be(c) {
	let t = /* @__PURE__ */ Object.assign({}, c);
	return t.randomizer = void 0, c.seed && (t.seed = c.seed + 1), t;
}
m$1(Be, "z");
function Le(c) {
	return c.randomizer || (c.randomizer = new he(c.seed || 0)), c.randomizer.next();
}
m$1(Le, "W");
function It(c, t, i, r = 1) {
	return i.roughness * r * (Le(i) * (t - c) + c);
}
m$1(It, "E");
function _(c, t, i = 1) {
	return It(-c, c, t, i);
}
m$1(_, "G");
function ut(c, t, i, r, e, a = !1) {
	let h = a ? e.disableMultiStrokeFill : e.disableMultiStroke, s = /* @__PURE__ */ me(c, t, i, r, e, !0, !1);
	if (h) return s;
	let l = /* @__PURE__ */ me(c, t, i, r, e, !0, !0);
	return s.concat(l);
}
m$1(ut, "$");
function me(c, t, i, r, e, a, h) {
	let s = Math.pow(c - i, 2) + Math.pow(t - r, 2), l = /* @__PURE__ */ Math.sqrt(s), o = 1;
	o = l < 200 ? 1 : l > 500 ? .4 : -.0016668 * l + 1.233334;
	let n$1 = e.maxRandomnessOffset || 0;
	n$1 * n$1 * 100 > s && (n$1 = l / 10);
	let p$1 = n$1 / 2, f = .2 + .2 * Le(e), m$2 = e.bowing * e.maxRandomnessOffset * (r - t) / 200, d$1 = e.bowing * e.maxRandomnessOffset * (c - i) / 200;
	m$2 = /* @__PURE__ */ _(m$2, e, o), d$1 = /* @__PURE__ */ _(d$1, e, o);
	let g$1 = [], y = /* @__PURE__ */ m$1(() => _(p$1, e, o), "M"), u$1 = /* @__PURE__ */ m$1(() => _(n$1, e, o), "k"), b = e.preserveVertices;
	return a && (h ? g$1.push({
		op: "move",
		data: [c + (b ? 0 : y()), t + (b ? 0 : y())]
	}) : g$1.push({
		op: "move",
		data: [c + (b ? 0 : _(n$1, e, o)), t + (b ? 0 : _(n$1, e, o))]
	})), h ? g$1.push({
		op: "bcurveTo",
		data: [
			m$2 + c + (i - c) * f + y(),
			d$1 + t + (r - t) * f + y(),
			m$2 + c + 2 * (i - c) * f + y(),
			d$1 + t + 2 * (r - t) * f + y(),
			i + (b ? 0 : y()),
			r + (b ? 0 : y())
		]
	}) : g$1.push({
		op: "bcurveTo",
		data: [
			m$2 + c + (i - c) * f + u$1(),
			d$1 + t + (r - t) * f + u$1(),
			m$2 + c + 2 * (i - c) * f + u$1(),
			d$1 + t + 2 * (r - t) * f + u$1(),
			i + (b ? 0 : u$1()),
			r + (b ? 0 : u$1())
		]
	}), g$1;
}
m$1(me, "R");
function Lt(c, t, i) {
	if (!c.length) return [];
	let r = [];
	r.push([c[0][0] + _(t, i), c[0][1] + _(t, i)]), r.push([c[0][0] + _(t, i), c[0][1] + _(t, i)]);
	for (let e = 1; e < c.length; e++) r.push([c[e][0] + _(t, i), c[e][1] + _(t, i)]), e === c.length - 1 && r.push([c[e][0] + _(t, i), c[e][1] + _(t, i)]);
	return Ft(r, null, i);
}
m$1(Lt, "j");
function Ft(c, t, i) {
	let r = c.length, e = [];
	if (r > 3) {
		let a = [], h = 1 - i.curveTightness;
		e.push({
			op: "move",
			data: [c[1][0], c[1][1]]
		});
		for (let s = 1; s + 2 < r; s++) {
			let l = c[s];
			a[0] = [l[0], l[1]], a[1] = [l[0] + (h * c[s + 1][0] - h * c[s - 1][0]) / 6, l[1] + (h * c[s + 1][1] - h * c[s - 1][1]) / 6], a[2] = [c[s + 1][0] + (h * c[s][0] - h * c[s + 2][0]) / 6, c[s + 1][1] + (h * c[s][1] - h * c[s + 2][1]) / 6], a[3] = [c[s + 1][0], c[s + 1][1]], e.push({
				op: "bcurveTo",
				data: [
					a[1][0],
					a[1][1],
					a[2][0],
					a[2][1],
					a[3][0],
					a[3][1]
				]
			});
		}
		if (t && t.length === 2) {
			let s = i.maxRandomnessOffset;
			e.push({
				op: "lineTo",
				data: [t[0] + _(s, i), t[1] + _(s, i)]
			});
		}
	} else r === 3 ? (e.push({
		op: "move",
		data: [c[1][0], c[1][1]]
	}), e.push({
		op: "bcurveTo",
		data: [
			c[1][0],
			c[1][1],
			c[2][0],
			c[2][1],
			c[2][0],
			c[2][1]
		]
	})) : r === 2 && e.push(.../* @__PURE__ */ me(c[0][0], c[0][1], c[1][0], c[1][1], i, !0, !0));
	return e;
}
m$1(Ft, "q");
function Ce(c, t, i, r, e, a, h, s) {
	let l = [], o = [];
	if (s.roughness === 0) {
		c /= 4, o.push([t + r * Math.cos(-c), i + e * Math.sin(-c)]);
		for (let n$1 = 0; n$1 <= 2 * Math.PI; n$1 += c) {
			let p$1 = [t + r * Math.cos(n$1), i + e * Math.sin(n$1)];
			l.push(p$1), o.push(p$1);
		}
		o.push([t + r * Math.cos(0), i + e * Math.sin(0)]), o.push([t + r * Math.cos(c), i + e * Math.sin(c)]);
	} else {
		let n$1 = _(.5, s) - Math.PI / 2;
		o.push([_(a, s) + t + .9 * r * Math.cos(n$1 - c), _(a, s) + i + .9 * e * Math.sin(n$1 - c)]);
		let p$1 = 2 * Math.PI + n$1 - .01;
		for (let f = n$1; f < p$1; f += c) {
			let m$2 = [_(a, s) + t + r * Math.cos(f), _(a, s) + i + e * Math.sin(f)];
			l.push(m$2), o.push(m$2);
		}
		o.push([_(a, s) + t + r * Math.cos(n$1 + 2 * Math.PI + .5 * h), _(a, s) + i + e * Math.sin(n$1 + 2 * Math.PI + .5 * h)]), o.push([_(a, s) + t + .98 * r * Math.cos(n$1 + h), _(a, s) + i + .98 * e * Math.sin(n$1 + h)]), o.push([_(a, s) + t + .9 * r * Math.cos(n$1 + .5 * h), _(a, s) + i + .9 * e * Math.sin(n$1 + .5 * h)]);
	}
	return [o, l];
}
m$1(Ce, "F");
function Te(c, t, i, r, e, a, h, s, l) {
	let o = a + _(.1, l), n$1 = [];
	n$1.push([_(s, l) + t + .9 * r * Math.cos(o - c), _(s, l) + i + .9 * e * Math.sin(o - c)]);
	for (let p$1 = o; p$1 <= h; p$1 += c) n$1.push([_(s, l) + t + r * Math.cos(p$1), _(s, l) + i + e * Math.sin(p$1)]);
	return n$1.push([t + r * Math.cos(h), i + e * Math.sin(h)]), n$1.push([t + r * Math.cos(h), i + e * Math.sin(h)]), Ft(n$1, null, l);
}
m$1(Te, "V");
function nr$1(c, t, i, r, e, a, h, s) {
	let l = [], o = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + .3], n$1 = [0, 0], p$1 = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
	for (let m$2 = 0; m$2 < p$1; m$2++) m$2 === 0 ? l.push({
		op: "move",
		data: [h[0], h[1]]
	}) : l.push({
		op: "move",
		data: [h[0] + (f ? 0 : _(o[0], s)), h[1] + (f ? 0 : _(o[0], s))]
	}), n$1 = f ? [e, a] : [e + _(o[m$2], s), a + _(o[m$2], s)], l.push({
		op: "bcurveTo",
		data: [
			c + _(o[m$2], s),
			t + _(o[m$2], s),
			i + _(o[m$2], s),
			r + _(o[m$2], s),
			n$1[0],
			n$1[1]
		]
	});
	return l;
}
m$1(nr$1, "Z");
function Bt(c) {
	return [...c];
}
m$1(Bt, "Q");
function Re(c, t = 0) {
	let i = c.length;
	if (i < 3) throw new Error("A curve must have at least three points.");
	let r = [];
	if (i === 3) r.push(/* @__PURE__ */ Bt(c[0]), /* @__PURE__ */ Bt(c[1]), /* @__PURE__ */ Bt(c[2]), /* @__PURE__ */ Bt(c[2]));
	else {
		let e = [];
		e.push(c[0], c[0]);
		for (let s = 1; s < c.length; s++) e.push(c[s]), s === c.length - 1 && e.push(c[s]);
		let a = [], h = 1 - t;
		r.push(/* @__PURE__ */ Bt(e[0]));
		for (let s = 1; s + 2 < e.length; s++) {
			let l = e[s];
			a[0] = [l[0], l[1]], a[1] = [l[0] + (h * e[s + 1][0] - h * e[s - 1][0]) / 6, l[1] + (h * e[s + 1][1] - h * e[s - 1][1]) / 6], a[2] = [e[s + 1][0] + (h * e[s][0] - h * e[s + 2][0]) / 6, e[s + 1][1] + (h * e[s][1] - h * e[s + 2][1]) / 6], a[3] = [e[s + 1][0], e[s + 1][1]], r.push(a[1], a[2], a[3]);
		}
	}
	return r;
}
m$1(Re, "H");
function Wt(c, t) {
	return Math.pow(c[0] - t[0], 2) + Math.pow(c[1] - t[1], 2);
}
m$1(Wt, "N");
function lr(c, t, i) {
	let r = /* @__PURE__ */ Wt(t, i);
	if (r === 0) return Wt(c, t);
	let e = ((c[0] - t[0]) * (i[0] - t[0]) + (c[1] - t[1]) * (i[1] - t[1])) / r;
	return e = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(1, e)), Wt(c, /* @__PURE__ */ $t(t, i, e));
}
m$1(lr, "B");
function $t(c, t, i) {
	return [c[0] + (t[0] - c[0]) * i, c[1] + (t[1] - c[1]) * i];
}
m$1($t, "J");
function fe(c, t, i, r) {
	let e = r || [];
	if (function(s, l) {
		let o = s[l + 0], n$1 = s[l + 1], p$1 = s[l + 2], f = s[l + 3], m$2 = 3 * n$1[0] - 2 * o[0] - f[0];
		m$2 *= m$2;
		let d$1 = 3 * n$1[1] - 2 * o[1] - f[1];
		d$1 *= d$1;
		let g$1 = 3 * p$1[0] - 2 * f[0] - o[0];
		g$1 *= g$1;
		let y = 3 * p$1[1] - 2 * f[1] - o[1];
		return y *= y, m$2 < g$1 && (m$2 = g$1), d$1 < y && (d$1 = y), m$2 + d$1;
	}(c, t) < i) {
		let s = c[t + 0];
		e.length ? (a = e[e.length - 1], h = s, Math.sqrt(/* @__PURE__ */ Wt(a, h)) > 1 && e.push(s)) : e.push(s), e.push(c[t + 3]);
	} else {
		let l = c[t + 0], o = c[t + 1], n$1 = c[t + 2], p$1 = c[t + 3], f = /* @__PURE__ */ $t(l, o, .5), m$2 = /* @__PURE__ */ $t(o, n$1, .5), d$1 = /* @__PURE__ */ $t(n$1, p$1, .5), g$1 = /* @__PURE__ */ $t(f, m$2, .5), y = /* @__PURE__ */ $t(m$2, d$1, .5), u$1 = /* @__PURE__ */ $t(g$1, y, .5);
		fe([
			l,
			f,
			g$1,
			u$1
		], 0, i, e), fe([
			u$1,
			y,
			d$1,
			p$1
		], 0, i, e);
	}
	var a, h;
	return e;
}
m$1(fe, "K");
function cr(c, t) {
	return _t(c, 0, c.length, t);
}
m$1(cr, "U");
function _t(c, t, i, r, e) {
	let a = e || [], h = c[t], s = c[i - 1], l = 0, o = 1;
	for (let n$1 = t + 1; n$1 < i - 1; ++n$1) {
		let p$1 = /* @__PURE__ */ lr(c[n$1], h, s);
		p$1 > l && (l = p$1, o = n$1);
	}
	return Math.sqrt(l) > r ? (_t(c, t, o + 1, r, a), _t(c, o, i, r, a)) : (a.length || a.push(h), a.push(s)), a;
}
m$1(_t, "X");
function ae(c, t = .15, i) {
	let r = [], e = (c.length - 1) / 3;
	for (let a = 0; a < e; a++) fe(c, 3 * a, t, r);
	return i && i > 0 ? _t(r, 0, r.length, i) : r;
}
m$1(ae, "Y");
var ot$1 = "none", Mt = class {
	static {
		m$1(this, "et");
	}
	constructor(t) {
		this.defaultOptions = {
			maxRandomnessOffset: 2,
			roughness: 1,
			bowing: 1,
			stroke: "#000",
			strokeWidth: 1,
			curveTightness: 0,
			curveFitting: .95,
			curveStepCount: 9,
			fillStyle: "hachure",
			fillWeight: -1,
			hachureAngle: -41,
			hachureGap: -1,
			dashOffset: -1,
			dashGap: -1,
			zigzagOffset: -1,
			seed: 0,
			disableMultiStroke: !1,
			disableMultiStrokeFill: !1,
			preserveVertices: !1,
			fillShapeRoughnessGain: .8
		}, this.config = t || {}, this.config.options && (this.defaultOptions = /* @__PURE__ */ this._o(this.config.options));
	}
	static newSeed() {
		return Math.floor(Math.random() * 2 ** 31);
	}
	_o(t) {
		return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
	}
	_d(t, i, r) {
		return {
			shape: t,
			sets: i || [],
			options: r || this.defaultOptions
		};
	}
	line(t, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a);
		return this._d("line", [/* @__PURE__ */ Ae(t, i, r, e, h)], h);
	}
	rectangle(t, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a), s = [], l = /* @__PURE__ */ ir(t, i, r, e, h);
		if (h.fill) {
			let o = [
				[t, i],
				[t + r, i],
				[t + r, i + e],
				[t, i + e]
			];
			h.fillStyle === "solid" ? s.push(/* @__PURE__ */ re([o], h)) : s.push(/* @__PURE__ */ vt([o], h));
		}
		return h.stroke !== ot$1 && s.push(l), this._d("rectangle", s, h);
	}
	ellipse(t, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a), s = [], l = /* @__PURE__ */ Oe(r, e, h), o = /* @__PURE__ */ pe(t, i, h, l);
		if (h.fill) if (h.fillStyle === "solid") {
			let n$1 = pe(t, i, h, l).opset;
			n$1.type = "fillPath", s.push(n$1);
		} else s.push(/* @__PURE__ */ vt([o.estimatedPoints], h));
		return h.stroke !== ot$1 && s.push(o.opset), this._d("ellipse", s, h);
	}
	circle(t, i, r, e) {
		let a = /* @__PURE__ */ this.ellipse(t, i, r, r, e);
		return a.shape = "circle", a;
	}
	linearPath(t, i) {
		let r = /* @__PURE__ */ this._o(i);
		return this._d("linearPath", [/* @__PURE__ */ Vt$1(t, !1, r)], r);
	}
	arc(t, i, r, e, a, h, s = !1, l) {
		let o = /* @__PURE__ */ this._o(l), n$1 = [], p$1 = /* @__PURE__ */ ke(t, i, r, e, a, h, s, !0, o);
		if (s && o.fill) if (o.fillStyle === "solid") {
			let f = /* @__PURE__ */ Object.assign({}, o);
			f.disableMultiStroke = !0;
			let m$2 = /* @__PURE__ */ ke(t, i, r, e, a, h, !0, !1, f);
			m$2.type = "fillPath", n$1.push(m$2);
		} else n$1.push(/* @__PURE__ */ function(f, m$2, d$1, g$1, y, u$1, b) {
			let S$1 = f, k = m$2, w$1 = /* @__PURE__ */ Math.abs(d$1 / 2), B$1 = /* @__PURE__ */ Math.abs(g$1 / 2);
			w$1 += /* @__PURE__ */ _(.01 * w$1, b), B$1 += /* @__PURE__ */ _(.01 * B$1, b);
			let T$1 = y, R$1 = u$1;
			for (; T$1 < 0;) T$1 += 2 * Math.PI, R$1 += 2 * Math.PI;
			R$1 - T$1 > 2 * Math.PI && (T$1 = 0, R$1 = 2 * Math.PI);
			let E$1 = (R$1 - T$1) / b.curveStepCount, L = [];
			for (let O$1 = T$1; O$1 <= R$1; O$1 += E$1) L.push([S$1 + w$1 * Math.cos(O$1), k + B$1 * Math.sin(O$1)]);
			return L.push([S$1 + w$1 * Math.cos(R$1), k + B$1 * Math.sin(R$1)]), L.push([S$1, k]), vt([L], b);
		}(t, i, r, e, a, h, o));
		return o.stroke !== ot$1 && n$1.push(p$1), this._d("arc", n$1, o);
	}
	curve(t, i) {
		let r = /* @__PURE__ */ this._o(i), e = [], a = /* @__PURE__ */ Me(t, r);
		if (r.fill && r.fill !== ot$1) if (r.fillStyle === "solid") {
			let h = /* @__PURE__ */ Me(t, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
				disableMultiStroke: !0,
				roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
			}));
			e.push({
				type: "fillPath",
				ops: /* @__PURE__ */ this._mergedShape(h.ops)
			});
		} else {
			let h = [], s = t;
			if (s.length) {
				let l = typeof s[0][0] == "number" ? [s] : s;
				for (let o of l) o.length < 3 ? h.push(...o) : o.length === 3 ? h.push(.../* @__PURE__ */ ae(/* @__PURE__ */ Re([
					o[0],
					o[0],
					o[1],
					o[2]
				]), 10, (1 + r.roughness) / 2)) : h.push(.../* @__PURE__ */ ae(/* @__PURE__ */ Re(o), 10, (1 + r.roughness) / 2));
			}
			h.length && e.push(/* @__PURE__ */ vt([h], r));
		}
		return r.stroke !== ot$1 && e.push(a), this._d("curve", e, r);
	}
	polygon(t, i) {
		let r = /* @__PURE__ */ this._o(i), e = [], a = /* @__PURE__ */ Vt$1(t, !0, r);
		return r.fill && (r.fillStyle === "solid" ? e.push(/* @__PURE__ */ re([t], r)) : e.push(/* @__PURE__ */ vt([t], r))), r.stroke !== ot$1 && e.push(a), this._d("polygon", e, r);
	}
	path(t, i) {
		let r = /* @__PURE__ */ this._o(i), e = [];
		if (!t) return this._d("path", e, r);
		t = /* @__PURE__ */ (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		let a = r.fill && r.fill !== "transparent" && r.fill !== ot$1, h = r.stroke !== ot$1, s = !!(r.simplification && r.simplification < 1), l = /* @__PURE__ */ function(n$1, p$1, f) {
			let m$2 = /* @__PURE__ */ Ee(/* @__PURE__ */ Ge(/* @__PURE__ */ ue(n$1))), d$1 = [], g$1 = [], y = [0, 0], u$1 = [], b = /* @__PURE__ */ m$1(() => {
				u$1.length >= 4 && g$1.push(.../* @__PURE__ */ ae(u$1, p$1)), u$1 = [];
			}, "i"), S$1 = /* @__PURE__ */ m$1(() => {
				b(), g$1.length && (d$1.push(g$1), g$1 = []);
			}, "c");
			for (let { key: w$1, data: B$1 } of m$2) switch (w$1) {
				case "M":
					S$1(), y = [B$1[0], B$1[1]], g$1.push(y);
					break;
				case "L":
					b(), g$1.push([B$1[0], B$1[1]]);
					break;
				case "C":
					if (!u$1.length) {
						let T$1 = g$1.length ? g$1[g$1.length - 1] : y;
						u$1.push([T$1[0], T$1[1]]);
					}
					u$1.push([B$1[0], B$1[1]]), u$1.push([B$1[2], B$1[3]]), u$1.push([B$1[4], B$1[5]]);
					break;
				case "Z": b(), g$1.push([y[0], y[1]]);
			}
			if (S$1(), !f) return d$1;
			let k = [];
			for (let w$1 of d$1) {
				let B$1 = /* @__PURE__ */ cr(w$1, f);
				B$1.length && k.push(B$1);
			}
			return k;
		}(t, 1, s ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), o = /* @__PURE__ */ Pe(t, r);
		if (a) if (r.fillStyle === "solid") if (l.length === 1) {
			let n$1 = /* @__PURE__ */ Pe(t, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
				disableMultiStroke: !0,
				roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
			}));
			e.push({
				type: "fillPath",
				ops: /* @__PURE__ */ this._mergedShape(n$1.ops)
			});
		} else e.push(/* @__PURE__ */ re(l, r));
		else e.push(/* @__PURE__ */ vt(l, r));
		return h && (s ? l.forEach((n$1) => {
			e.push(/* @__PURE__ */ Vt$1(n$1, !1, r));
		}) : e.push(o)), this._d("path", e, r);
	}
	opsToPath(t, i) {
		let r = "";
		for (let e of t.ops) {
			let a = typeof i == "number" && i >= 0 ? e.data.map((h) => +h.toFixed(i)) : e.data;
			switch (e.op) {
				case "move":
					r += `M${a[0]} ${a[1]} `;
					break;
				case "bcurveTo":
					r += `C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;
					break;
				case "lineTo": r += `L${a[0]} ${a[1]} `;
			}
		}
		return r.trim();
	}
	toPaths(t) {
		let i = t.sets || [], r = t.options || this.defaultOptions, e = [];
		for (let a of i) {
			let h = null;
			switch (a.type) {
				case "path":
					h = {
						d: /* @__PURE__ */ this.opsToPath(a),
						stroke: r.stroke,
						strokeWidth: r.strokeWidth,
						fill: ot$1
					};
					break;
				case "fillPath":
					h = {
						d: /* @__PURE__ */ this.opsToPath(a),
						stroke: ot$1,
						strokeWidth: 0,
						fill: r.fill || ot$1
					};
					break;
				case "fillSketch": h = /* @__PURE__ */ this.fillSketch(a, r);
			}
			h && e.push(h);
		}
		return e;
	}
	fillSketch(t, i) {
		let r = i.fillWeight;
		return r < 0 && (r = i.strokeWidth / 2), {
			d: /* @__PURE__ */ this.opsToPath(t),
			stroke: i.fill || ot$1,
			strokeWidth: r,
			fill: ot$1
		};
	}
	_mergedShape(t) {
		return t.filter((i, r) => r === 0 || i.op !== "move");
	}
}, de = class {
	static {
		m$1(this, "st");
	}
	constructor(t, i) {
		this.canvas = t, this.ctx = /* @__PURE__ */ this.canvas.getContext("2d"), this.gen = new Mt(i);
	}
	draw(t) {
		let i = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.ctx, a = t.options.fixedDecimalPlaceDigits;
		for (let h of i) switch (h.type) {
			case "path":
				e.save(), e.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, e.lineWidth = r.strokeWidth, r.strokeLineDash && e.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (e.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(e, h, a), e.restore();
				break;
			case "fillPath": {
				e.save(), e.fillStyle = r.fill || "";
				let s = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
				this._drawToContext(e, h, a, s), e.restore();
				break;
			}
			case "fillSketch": this.fillSketch(e, h, r);
		}
	}
	fillSketch(t, i, r) {
		let e = r.fillWeight;
		e < 0 && (e = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = e, this._drawToContext(t, i, r.fixedDecimalPlaceDigits), t.restore();
	}
	_drawToContext(t, i, r, e = "nonzero") {
		t.beginPath();
		for (let a of i.ops) {
			let h = typeof r == "number" && r >= 0 ? a.data.map((s) => +s.toFixed(r)) : a.data;
			switch (a.op) {
				case "move":
					t.moveTo(h[0], h[1]);
					break;
				case "bcurveTo":
					t.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
					break;
				case "lineTo": t.lineTo(h[0], h[1]);
			}
		}
		i.type === "fillPath" ? t.fill(e) : t.stroke();
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	line(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.line(t, i, r, e, a);
		return this.draw(h), h;
	}
	rectangle(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.rectangle(t, i, r, e, a);
		return this.draw(h), h;
	}
	ellipse(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.ellipse(t, i, r, e, a);
		return this.draw(h), h;
	}
	circle(t, i, r, e) {
		let a = /* @__PURE__ */ this.gen.circle(t, i, r, e);
		return this.draw(a), a;
	}
	linearPath(t, i) {
		let r = /* @__PURE__ */ this.gen.linearPath(t, i);
		return this.draw(r), r;
	}
	polygon(t, i) {
		let r = /* @__PURE__ */ this.gen.polygon(t, i);
		return this.draw(r), r;
	}
	arc(t, i, r, e, a, h, s = !1, l) {
		let o = /* @__PURE__ */ this.gen.arc(t, i, r, e, a, h, s, l);
		return this.draw(o), o;
	}
	curve(t, i) {
		let r = /* @__PURE__ */ this.gen.curve(t, i);
		return this.draw(r), r;
	}
	path(t, i) {
		let r = /* @__PURE__ */ this.gen.path(t, i);
		return this.draw(r), r;
	}
}, Ht = "http://www.w3.org/2000/svg", ge = class {
	static {
		m$1(this, "ot");
	}
	constructor(t, i) {
		this.svg = t, this.gen = new Mt(i);
	}
	draw(t) {
		let i = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.svg.ownerDocument || window.document, a = /* @__PURE__ */ e.createElementNS(Ht, "g"), h = t.options.fixedDecimalPlaceDigits;
		for (let s of i) {
			let l = null;
			switch (s.type) {
				case "path":
					l = /* @__PURE__ */ e.createElementNS(Ht, "path"), l.setAttribute("d", /* @__PURE__ */ this.opsToPath(s, h)), l.setAttribute("stroke", r.stroke), l.setAttribute("stroke-width", r.strokeWidth + ""), l.setAttribute("fill", "none"), r.strokeLineDash && l.setAttribute("stroke-dasharray", /* @__PURE__ */ r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
					break;
				case "fillPath":
					l = /* @__PURE__ */ e.createElementNS(Ht, "path"), l.setAttribute("d", /* @__PURE__ */ this.opsToPath(s, h)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
					break;
				case "fillSketch": l = /* @__PURE__ */ this.fillSketch(e, s, r);
			}
			l && a.appendChild(l);
		}
		return a;
	}
	fillSketch(t, i, r) {
		let e = r.fillWeight;
		e < 0 && (e = r.strokeWidth / 2);
		let a = /* @__PURE__ */ t.createElementNS(Ht, "path");
		return a.setAttribute("d", /* @__PURE__ */ this.opsToPath(i, r.fixedDecimalPlaceDigits)), a.setAttribute("stroke", r.fill || ""), a.setAttribute("stroke-width", e + ""), a.setAttribute("fill", "none"), r.fillLineDash && a.setAttribute("stroke-dasharray", /* @__PURE__ */ r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), a;
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	opsToPath(t, i) {
		return this.gen.opsToPath(t, i);
	}
	line(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.line(t, i, r, e, a);
		return this.draw(h);
	}
	rectangle(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.rectangle(t, i, r, e, a);
		return this.draw(h);
	}
	ellipse(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.ellipse(t, i, r, e, a);
		return this.draw(h);
	}
	circle(t, i, r, e) {
		let a = /* @__PURE__ */ this.gen.circle(t, i, r, e);
		return this.draw(a);
	}
	linearPath(t, i) {
		let r = /* @__PURE__ */ this.gen.linearPath(t, i);
		return this.draw(r);
	}
	polygon(t, i) {
		let r = /* @__PURE__ */ this.gen.polygon(t, i);
		return this.draw(r);
	}
	arc(t, i, r, e, a, h, s = !1, l) {
		let o = /* @__PURE__ */ this.gen.arc(t, i, r, e, a, h, s, l);
		return this.draw(o);
	}
	curve(t, i) {
		let r = /* @__PURE__ */ this.gen.curve(t, i);
		return this.draw(r);
	}
	path(t, i) {
		let r = /* @__PURE__ */ this.gen.path(t, i);
		return this.draw(r);
	}
}, v = {
	canvas: /* @__PURE__ */ m$1((c, t) => new de(c, t), "canvas"),
	svg: /* @__PURE__ */ m$1((c, t) => new ge(c, t), "svg"),
	generator: /* @__PURE__ */ m$1((c) => new Mt(c), "generator"),
	newSeed: /* @__PURE__ */ m$1(() => Mt.newSeed(), "newSeed")
};
var yt = /* @__PURE__ */ m$1((c, t) => {
	var i = c.x, r = c.y, e = t.x - i, a = t.y - r, h = c.width / 2, s = c.height / 2, l, o;
	return Math.abs(a) * h > Math.abs(e) * s ? (a < 0 && (s = -s), l = a === 0 ? 0 : s * e / a, o = s) : (e < 0 && (h = -h), l = h, o = e === 0 ? 0 : h * a / e), {
		x: i + l,
		y: r + o
	};
}, "intersectRect");
function pr(c, t) {
	t && c.attr("style", t);
}
m$1(pr, "applyStyle");
async function mr$1(c) {
	let t = /* @__PURE__ */ ia(/* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), i = /* @__PURE__ */ t.append("xhtml:div"), r = /* @__PURE__ */ mr(), e = c.label;
	c.label && nr(c.label) && (e = await qo(/* @__PURE__ */ c.label.replace(hn.lineBreakRegex, `
`), r));
	let h = "<span class=\"" + (c.isNode ? "nodeLabel" : "edgeLabel") + "\" " + (c.labelStyle ? "style=\"" + c.labelStyle + "\"" : "") + ">" + e + "</span>";
	return i.html(/* @__PURE__ */ ot(h, r)), pr(i, c.labelStyle), i.style("display", "inline-block"), i.style("padding-right", "1px"), i.style("white-space", "nowrap"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
m$1(mr$1, "addHtmlLabel");
var Rt = /* @__PURE__ */ m$1(async (c, t, i, r) => {
	let e = c || "";
	if (typeof e == "object" && (e = e[0]), Mo(mr().flowchart.htmlLabels)) {
		e = /* @__PURE__ */ e.replace(/\\n|\n/g, "<br />"), pt.info("vertexText" + e);
		let a = {
			isNode: r,
			label: /* @__PURE__ */ Yt(e).replace(/fa[blrs]?:fa-[\w-]+/g, (s) => `<i class='${s.replace(":", " ")}'></i>`),
			labelStyle: t && t.replace("fill:", "color:")
		};
		return await mr$1(a);
	} else {
		let a = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "text");
		a.setAttribute("style", /* @__PURE__ */ t.replace("color:", "fill:"));
		let h = [];
		typeof e == "string" ? h = /* @__PURE__ */ e.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(e) ? h = e : h = [];
		for (let s of h) {
			let l = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), i ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = /* @__PURE__ */ s.trim(), a.appendChild(l);
		}
		return a;
	}
}, "createLabel");
var st = /* @__PURE__ */ m$1((c, t, i, r, e) => [
	"M",
	c + e,
	t,
	"H",
	c + i - e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c + i,
	t + e,
	"V",
	t + r - e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c + i - e,
	t + r,
	"H",
	c + e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c,
	t + r - e,
	"V",
	t + e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c + e,
	t,
	"Z"
].join(" "), "createRoundedRectPathD");
var He = /* @__PURE__ */ m$1(async (c, t) => {
	pt.info("Creating subgraph rect for ", t.id, t);
	let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: l, borderStyles: o, backgroundStyles: n$1 } = m(t), p$1 = /* @__PURE__ */ c.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = /* @__PURE__ */ Mo(i.flowchart.htmlLabels), m$2 = /* @__PURE__ */ p$1.insert("g").attr("class", "cluster-label "), d$1 = await Rr(m$2, t.label, {
		style: t.labelStyle,
		useHtmlLabels: f,
		isNode: !0
	}), g$1 = /* @__PURE__ */ d$1.getBBox();
	if (Mo(i.flowchart.htmlLabels)) {
		let T$1 = d$1.children[0], R$1 = /* @__PURE__ */ ia(d$1);
		g$1 = /* @__PURE__ */ T$1.getBoundingClientRect(), R$1.attr("width", g$1.width), R$1.attr("height", g$1.height);
	}
	let y = t.width <= g$1.width + t.padding ? g$1.width + t.padding : t.width;
	t.width <= g$1.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
	let u$1 = t.height, b = t.x - y / 2, S$1 = t.y - u$1 / 2;
	pt.trace("Data ", t, /* @__PURE__ */ JSON.stringify(t));
	let k;
	if (t.look === "handDrawn") {
		let T$1 = /* @__PURE__ */ v.svg(p$1), R$1 = /* @__PURE__ */ S(t, {
			roughness: .7,
			fill: a,
			stroke: h,
			fillWeight: 3,
			seed: e
		}), E$1 = /* @__PURE__ */ T$1.path(/* @__PURE__ */ st(b, S$1, y, u$1, 0), R$1);
		k = /* @__PURE__ */ p$1.insert(() => (pt.debug("Rough node insert CXC", E$1), E$1), ":first-child"), k.select("path:nth-child(2)").attr("style", /* @__PURE__ */ o.join(";")), k.select("path").attr("style", /* @__PURE__ */ n$1.join(";").replace("fill", "stroke"));
	} else k = /* @__PURE__ */ p$1.insert("rect", ":first-child"), k.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S$1).attr("width", y).attr("height", u$1);
	let { subGraphTitleTopMargin: w$1 } = n(i);
	if (m$2.attr("transform", `translate(${t.x - g$1.width / 2}, ${t.y - t.height / 2 + w$1})`), s) {
		let T$1 = /* @__PURE__ */ m$2.select("span");
		T$1 && T$1.attr("style", s);
	}
	let B$1 = /* @__PURE__ */ k.node().getBBox();
	return t.offsetX = 0, t.width = B$1.width, t.height = B$1.height, t.offsetY = g$1.height - t.padding / 2, t.intersect = function(T$1) {
		return yt(t, T$1);
	}, {
		cluster: p$1,
		labelBBox: g$1
	};
}, "rect"), br = {
	rect: He,
	squareRect: He,
	roundedWithTitle: /* @__PURE__ */ m$1(async (c, t) => {
		let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { altBackground: a, compositeBackground: h, compositeTitleBackground: s, nodeBorder: l } = r, o = /* @__PURE__ */ c.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), n$1 = /* @__PURE__ */ o.insert("g", ":first-child"), p$1 = /* @__PURE__ */ o.insert("g").attr("class", "cluster-label"), f = /* @__PURE__ */ o.append("rect"), m$2 = /* @__PURE__ */ p$1.node().appendChild(await Rt(t.label, t.labelStyle, void 0, !0)), d$1 = /* @__PURE__ */ m$2.getBBox();
		if (Mo(i.flowchart.htmlLabels)) {
			let E$1 = m$2.children[0], L = /* @__PURE__ */ ia(m$2);
			d$1 = /* @__PURE__ */ E$1.getBoundingClientRect(), L.attr("width", d$1.width), L.attr("height", d$1.height);
		}
		let g$1 = 0 * t.padding, y = g$1 / 2, u$1 = (t.width <= d$1.width + t.padding ? d$1.width + t.padding : t.width) + g$1;
		t.width <= d$1.width + t.padding ? t.diff = (u$1 - t.width) / 2 - t.padding : t.diff = -t.padding;
		let b = t.height + g$1, S$1 = t.height + g$1 - d$1.height - 6, k = t.x - u$1 / 2, w$1 = t.y - b / 2;
		t.width = u$1;
		let B$1 = t.y - t.height / 2 - y + d$1.height + 2, T$1;
		if (t.look === "handDrawn") {
			let E$1 = /* @__PURE__ */ t.cssClasses.includes("statediagram-cluster-alt"), L = /* @__PURE__ */ v.svg(o), O$1 = t.rx || t.ry ? L.path(/* @__PURE__ */ st(k, w$1, u$1, b, 10), {
				roughness: .7,
				fill: s,
				fillStyle: "solid",
				stroke: l,
				seed: e
			}) : L.rectangle(k, w$1, u$1, b, { seed: e });
			T$1 = /* @__PURE__ */ o.insert(() => O$1, ":first-child");
			let V$1 = /* @__PURE__ */ L.rectangle(k, B$1, u$1, S$1, {
				fill: E$1 ? a : h,
				fillStyle: E$1 ? "hachure" : "solid",
				stroke: l,
				seed: e
			});
			T$1 = /* @__PURE__ */ o.insert(() => O$1, ":first-child"), f = /* @__PURE__ */ o.insert(() => V$1);
		} else T$1 = /* @__PURE__ */ n$1.insert("rect", ":first-child"), T$1.attr("class", "outer").attr("x", k).attr("y", w$1).attr("width", u$1).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", k).attr("y", B$1).attr("width", u$1).attr("height", S$1);
		p$1.attr("transform", `translate(${t.x - d$1.width / 2}, ${w$1 + 1 - (Mo(i.flowchart.htmlLabels) ? 0 : 3)})`);
		return t.height = T$1.node().getBBox().height, t.offsetX = 0, t.offsetY = d$1.height - t.padding / 2, t.labelBBox = d$1, t.intersect = function(E$1) {
			return yt(t, E$1);
		}, {
			cluster: o,
			labelBBox: d$1
		};
	}, "roundedWithTitle"),
	noteGroup: /* @__PURE__ */ m$1((c, t) => {
		let i = /* @__PURE__ */ c.insert("g").attr("class", "note-cluster").attr("id", t.id), r = /* @__PURE__ */ i.insert("rect", ":first-child"), e = 0 * t.padding, a = e / 2;
		r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + e).attr("height", t.height + e).attr("fill", "none");
		let h = /* @__PURE__ */ r.node().getBBox();
		return t.width = h.width, t.height = h.height, t.intersect = function(s) {
			return yt(t, s);
		}, {
			cluster: i,
			labelBBox: {
				width: 0,
				height: 0
			}
		};
	}, "noteGroup"),
	divider: /* @__PURE__ */ m$1((c, t) => {
		let { themeVariables: r, handDrawnSeed: e } = mr(), { nodeBorder: a } = r, h = /* @__PURE__ */ c.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), s = /* @__PURE__ */ h.insert("g", ":first-child"), l = 0 * t.padding, o = t.width + l;
		t.diff = -t.padding;
		let n$1 = t.height + l, p$1 = t.x - o / 2, f = t.y - n$1 / 2;
		t.width = o;
		let m$2;
		if (t.look === "handDrawn") {
			let y = /* @__PURE__ */ v.svg(h).rectangle(p$1, f, o, n$1, {
				fill: "lightgrey",
				roughness: .5,
				strokeLineDash: [5],
				stroke: a,
				seed: e
			});
			m$2 = /* @__PURE__ */ h.insert(() => y, ":first-child");
		} else m$2 = /* @__PURE__ */ s.insert("rect", ":first-child"), m$2.attr("class", "divider").attr("x", p$1).attr("y", f).attr("width", o).attr("height", n$1).attr("data-look", t.look);
		return t.height = m$2.node().getBBox().height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(g$1) {
			return yt(t, g$1);
		}, {
			cluster: h,
			labelBBox: {}
		};
	}, "divider"),
	kanbanSection: /* @__PURE__ */ m$1(async (c, t) => {
		pt.info("Creating subgraph rect for ", t.id, t);
		let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: l, borderStyles: o, backgroundStyles: n$1 } = m(t), p$1 = /* @__PURE__ */ c.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = /* @__PURE__ */ Mo(i.flowchart.htmlLabels), m$2 = /* @__PURE__ */ p$1.insert("g").attr("class", "cluster-label "), d$1 = await Rr(m$2, t.label, {
			style: t.labelStyle,
			useHtmlLabels: f,
			isNode: !0,
			width: t.width
		}), g$1 = /* @__PURE__ */ d$1.getBBox();
		if (Mo(i.flowchart.htmlLabels)) {
			let T$1 = d$1.children[0], R$1 = /* @__PURE__ */ ia(d$1);
			g$1 = /* @__PURE__ */ T$1.getBoundingClientRect(), R$1.attr("width", g$1.width), R$1.attr("height", g$1.height);
		}
		let y = t.width <= g$1.width + t.padding ? g$1.width + t.padding : t.width;
		t.width <= g$1.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
		let u$1 = t.height, b = t.x - y / 2, S$1 = t.y - u$1 / 2;
		pt.trace("Data ", t, /* @__PURE__ */ JSON.stringify(t));
		let k;
		if (t.look === "handDrawn") {
			let T$1 = /* @__PURE__ */ v.svg(p$1), R$1 = /* @__PURE__ */ S(t, {
				roughness: .7,
				fill: a,
				stroke: h,
				fillWeight: 4,
				seed: e
			}), E$1 = /* @__PURE__ */ T$1.path(/* @__PURE__ */ st(b, S$1, y, u$1, t.rx), R$1);
			k = /* @__PURE__ */ p$1.insert(() => (pt.debug("Rough node insert CXC", E$1), E$1), ":first-child"), k.select("path:nth-child(2)").attr("style", /* @__PURE__ */ o.join(";")), k.select("path").attr("style", /* @__PURE__ */ n$1.join(";").replace("fill", "stroke"));
		} else k = /* @__PURE__ */ p$1.insert("rect", ":first-child"), k.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S$1).attr("width", y).attr("height", u$1);
		let { subGraphTitleTopMargin: w$1 } = n(i);
		if (m$2.attr("transform", `translate(${t.x - g$1.width / 2}, ${t.y - t.height / 2 + w$1})`), s) {
			let T$1 = /* @__PURE__ */ m$2.select("span");
			T$1 && T$1.attr("style", s);
		}
		let B$1 = /* @__PURE__ */ k.node().getBBox();
		return t.offsetX = 0, t.width = B$1.width, t.height = B$1.height, t.offsetY = g$1.height - t.padding / 2, t.intersect = function(T$1) {
			return yt(t, T$1);
		}, {
			cluster: p$1,
			labelBBox: g$1
		};
	}, "kanbanSection")
}, Ve = /* @__PURE__ */ new Map(), xa = /* @__PURE__ */ m$1(async (c, t) => {
	let i = t.shape || "rect", r = await br[i](c, t);
	return Ve.set(t.id, r), r;
}, "insertCluster");
var ba = /* @__PURE__ */ m$1(() => {
	Ve = /* @__PURE__ */ new Map();
}, "clear");
function Sr(c, t) {
	return c.intersect(t);
}
m$1(Sr, "intersectNode");
var We = Sr;
function wr(c, t, i, r) {
	var e = c.x, a = c.y, h = e - r.x, s = a - r.y, l = /* @__PURE__ */ Math.sqrt(t * t * s * s + i * i * h * h), o = /* @__PURE__ */ Math.abs(t * i * h / l);
	r.x < e && (o = -o);
	var n$1 = /* @__PURE__ */ Math.abs(t * i * s / l);
	return r.y < a && (n$1 = -n$1), {
		x: e + o,
		y: a + n$1
	};
}
m$1(wr, "intersectEllipse");
var qt = wr;
function Nr(c, t, i) {
	return qt(c, t, t, i);
}
m$1(Nr, "intersectCircle");
var Ie = Nr;
function $r(c, t, i, r) {
	{
		let e = t.y - c.y, a = c.x - t.x, h = t.x * c.y - c.x * t.y, s = e * i.x + a * i.y + h, l = e * r.x + a * r.y + h, o = 1e-6;
		if (s !== 0 && l !== 0 && Fe(s, l)) return;
		let n$1 = r.y - i.y, p$1 = i.x - r.x, f = r.x * i.y - i.x * r.y, m$2 = n$1 * c.x + p$1 * c.y + f, d$1 = n$1 * t.x + p$1 * t.y + f;
		if (Math.abs(m$2) < o && Math.abs(d$1) < o && Fe(m$2, d$1)) return;
		let g$1 = e * p$1 - n$1 * a;
		if (g$1 === 0) return;
		let y = /* @__PURE__ */ Math.abs(g$1 / 2), u$1 = a * f - p$1 * h, b = u$1 < 0 ? (u$1 - y) / g$1 : (u$1 + y) / g$1;
		u$1 = n$1 * h - e * f;
		let S$1 = u$1 < 0 ? (u$1 - y) / g$1 : (u$1 + y) / g$1;
		return {
			x: b,
			y: S$1
		};
	}
}
m$1($r, "intersectLine");
function Fe(c, t) {
	return c * t > 0;
}
m$1(Fe, "sameSign");
var _e = $r;
function Dr(c, t, i) {
	let r = c.x, e = c.y, a = [], h = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
	typeof t.forEach == "function" ? t.forEach(function(n$1) {
		h = /* @__PURE__ */ Math.min(h, n$1.x), s = /* @__PURE__ */ Math.min(s, n$1.y);
	}) : (h = /* @__PURE__ */ Math.min(h, t.x), s = /* @__PURE__ */ Math.min(s, t.y));
	let l = r - c.width / 2 - h, o = e - c.height / 2 - s;
	for (let n$1 = 0; n$1 < t.length; n$1++) {
		let p$1 = t[n$1], f = t[n$1 < t.length - 1 ? n$1 + 1 : 0], m$2 = /* @__PURE__ */ _e(c, i, {
			x: l + p$1.x,
			y: o + p$1.y
		}, {
			x: l + f.x,
			y: o + f.y
		});
		m$2 && a.push(m$2);
	}
	return a.length ? (a.length > 1 && a.sort(function(n$1, p$1) {
		let f = n$1.x - i.x, m$2 = n$1.y - i.y, d$1 = /* @__PURE__ */ Math.sqrt(f * f + m$2 * m$2), g$1 = p$1.x - i.x, y = p$1.y - i.y, u$1 = /* @__PURE__ */ Math.sqrt(g$1 * g$1 + y * y);
		return d$1 < u$1 ? -1 : d$1 === u$1 ? 0 : 1;
	}), a[0]) : c;
}
m$1(Dr, "intersectPolygon");
var N = {
	node: We,
	circle: Ie,
	ellipse: qt,
	polygon: Dr,
	rect: yt
};
function qe(c, t) {
	let { labelStyles: i } = m(t);
	t.labelStyle = i;
	let r = /* @__PURE__ */ P(t), e = r;
	r || (e = "anchor");
	let a = /* @__PURE__ */ c.insert("g").attr("class", e).attr("id", t.domId || t.id), h = 1, { cssStyles: s } = t, l = /* @__PURE__ */ v.svg(a), o = /* @__PURE__ */ S(t, {
		fill: "black",
		stroke: "none",
		fillStyle: "solid"
	});
	t.look !== "handDrawn" && (o.roughness = 0);
	let n$1 = /* @__PURE__ */ l.circle(0, 0, h * 2, o), p$1 = /* @__PURE__ */ a.insert(() => n$1, ":first-child");
	return p$1.attr("class", "anchor").attr("style", /* @__PURE__ */ Vt(s)), D(t, p$1), t.intersect = function(f) {
		return pt.info("Circle intersect", t, h, f), N.circle(t, h, f);
	}, a;
}
m$1(qe, "anchor");
function Xe(c, t, i, r, e, a, h) {
	let l = (c + i) / 2, o = (t + r) / 2, n$1 = /* @__PURE__ */ Math.atan2(r - t, i - c), p$1 = (i - c) / 2, f = (r - t) / 2, m$2 = p$1 / e, d$1 = f / a, g$1 = /* @__PURE__ */ Math.sqrt(m$2 ** 2 + d$1 ** 2);
	if (g$1 > 1) throw new Error("The given radii are too small to create an arc between the points.");
	let y = /* @__PURE__ */ Math.sqrt(1 - g$1 ** 2), u$1 = l + y * a * Math.sin(n$1) * (h ? -1 : 1), b = o - y * e * Math.cos(n$1) * (h ? -1 : 1), S$1 = /* @__PURE__ */ Math.atan2((t - b) / a, (c - u$1) / e), w$1 = Math.atan2((r - b) / a, (i - u$1) / e) - S$1;
	h && w$1 < 0 && (w$1 += 2 * Math.PI), !h && w$1 > 0 && (w$1 -= 2 * Math.PI);
	let B$1 = [];
	for (let T$1 = 0; T$1 < 20; T$1++) {
		let R$1 = T$1 / 19, E$1 = S$1 + R$1 * w$1, L = u$1 + e * Math.cos(E$1), O$1 = b + a * Math.sin(E$1);
		B$1.push({
			x: L,
			y: O$1
		});
	}
	return B$1;
}
m$1(Xe, "generateArcPoints");
async function Ye(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.width + t.padding + 20, s = a.height + t.padding, l = s / 2, o = l / (2.5 + s / 50), { cssStyles: n$1 } = t, p$1 = [
		{
			x: h / 2,
			y: -s / 2
		},
		{
			x: -h / 2,
			y: -s / 2
		},
		.../* @__PURE__ */ Xe(-h / 2, -s / 2, -h / 2, s / 2, o, l, !1),
		{
			x: h / 2,
			y: s / 2
		},
		.../* @__PURE__ */ Xe(h / 2, s / 2, h / 2, -s / 2, o, l, !0)
	], f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = /* @__PURE__ */ H(p$1), g$1 = /* @__PURE__ */ f.path(d$1, m$2), y = /* @__PURE__ */ e.insert(() => g$1, ":first-child");
	return y.attr("class", "basic label-container"), n$1 && t.look !== "handDrawn" && y.selectAll("path").attr("style", n$1), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(${o / 2}, 0)`), D(t, y), t.intersect = function(u$1) {
		return N.polygon(t, p$1, u$1);
	}, e;
}
m$1(Ye, "bowTieRect");
function rt(c, t, i, r) {
	return c.insert("polygon", ":first-child").attr("points", /* @__PURE__ */ r.map(function(e) {
		return e.x + "," + e.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + i / 2 + ")");
}
m$1(rt, "insertPolygonShape");
async function Ze(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.height + t.padding, s = 12, l = a.width + t.padding + s, o = 0, n$1 = l, p$1 = -h, f = 0, m$2 = [
		{
			x: o + s,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		},
		{
			x: n$1,
			y: f
		},
		{
			x: o,
			y: f
		},
		{
			x: o,
			y: p$1 + s
		},
		{
			x: o + s,
			y: p$1
		}
	], d$1, { cssStyles: g$1 } = t;
	if (t.look === "handDrawn") {
		let y = /* @__PURE__ */ v.svg(e), u$1 = /* @__PURE__ */ S(t, {}), b = /* @__PURE__ */ H(m$2), S$1 = /* @__PURE__ */ y.path(b, u$1);
		d$1 = /* @__PURE__ */ e.insert(() => S$1, ":first-child").attr("transform", `translate(${-l / 2}, ${h / 2})`), g$1 && d$1.attr("style", g$1);
	} else d$1 = /* @__PURE__ */ rt(e, l, h, m$2);
	return r && d$1.attr("style", r), D(t, d$1), t.intersect = function(y) {
		return N.polygon(t, m$2, y);
	}, e;
}
m$1(Ze, "card");
function Ue(c, t) {
	let { nodeStyles: i } = m(t);
	t.label = "";
	let r = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: e } = t, a = /* @__PURE__ */ Math.max(28, t.width ?? 0), h = [
		{
			x: 0,
			y: a / 2
		},
		{
			x: a / 2,
			y: 0
		},
		{
			x: 0,
			y: -a / 2
		},
		{
			x: -a / 2,
			y: 0
		}
	], s = /* @__PURE__ */ v.svg(r), l = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
	let o = /* @__PURE__ */ H(h), n$1 = /* @__PURE__ */ s.path(o, l), p$1 = /* @__PURE__ */ r.insert(() => n$1, ":first-child");
	return e && t.look !== "handDrawn" && p$1.selectAll("path").attr("style", e), i && t.look !== "handDrawn" && p$1.selectAll("path").attr("style", i), t.width = 28, t.height = 28, t.intersect = function(f) {
		return N.polygon(t, h, f);
	}, r;
}
m$1(Ue, "choice");
async function Xt(c, t, i) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r;
	let { shapeSvg: a, bbox: h, halfPadding: s } = await C(c, t, /* @__PURE__ */ P(t)), l = i?.padding ?? s, o = h.width / 2 + l, n$1, { cssStyles: p$1 } = t;
	if (t.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(a), m$2 = /* @__PURE__ */ S(t, {}), d$1 = /* @__PURE__ */ f.circle(0, 0, o * 2, m$2);
		n$1 = /* @__PURE__ */ a.insert(() => d$1, ":first-child"), n$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(p$1));
	} else n$1 = /* @__PURE__ */ a.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", e).attr("r", o).attr("cx", 0).attr("cy", 0);
	return D(t, n$1), t.calcIntersect = function(f, m$2) {
		let d$1 = f.width / 2;
		return N.circle(f, d$1, m$2);
	}, t.intersect = function(f) {
		return pt.info("Circle intersect", t, o, f), N.circle(t, o, f);
	}, a;
}
m$1(Xt, "circle");
function vr(c) {
	let t = /* @__PURE__ */ Math.cos(Math.PI / 4), i = /* @__PURE__ */ Math.sin(Math.PI / 4), r = c * 2, e = {
		x: r / 2 * t,
		y: r / 2 * i
	}, a = {
		x: -(r / 2) * t,
		y: r / 2 * i
	}, h = {
		x: -(r / 2) * t,
		y: -(r / 2) * i
	}, s = {
		x: r / 2 * t,
		y: -(r / 2) * i
	};
	return `M ${a.x},${a.y} L ${s.x},${s.y}
                   M ${e.x},${e.y} L ${h.x},${h.y}`;
}
m$1(vr, "createLine");
function Qe(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i, t.label = "";
	let e = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), a = /* @__PURE__ */ Math.max(30, t?.width ?? 0), { cssStyles: h } = t, s = /* @__PURE__ */ v.svg(e), l = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
	let o = /* @__PURE__ */ s.circle(0, 0, a * 2, l), n$1 = /* @__PURE__ */ vr(a), p$1 = /* @__PURE__ */ s.path(n$1, l), f = /* @__PURE__ */ e.insert(() => o, ":first-child");
	return f.insert(() => p$1), h && t.look !== "handDrawn" && f.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && f.selectAll("path").attr("style", r), D(t, f), t.intersect = function(m$2) {
		return pt.info("crossedCircle intersect", t, {
			radius: a,
			point: m$2
		}), N.circle(t, a, m$2);
	}, e;
}
m$1(Qe, "crossedCircle");
function xt(c, t, i, r = 100, e = 0, a = 180) {
	let h = [], s = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s + p$1 * n$1, m$2 = c + i * Math.cos(f), d$1 = t + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d$1
		});
	}
	return h;
}
m$1(xt, "generateCirclePoints");
async function Je(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t, p$1 = [
		.../* @__PURE__ */ xt(s / 2, -l / 2, o, 30, -90, 0),
		{
			x: -s / 2 - o,
			y: o
		},
		.../* @__PURE__ */ xt(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ xt(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s / 2 - o,
			y: -l / 2
		},
		.../* @__PURE__ */ xt(s / 2, l / 2, o, 20, 0, 90)
	], f = [
		{
			x: s / 2,
			y: -l / 2 - o
		},
		{
			x: -s / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ xt(s / 2, -l / 2, o, 20, -90, 0),
		{
			x: -s / 2 - o,
			y: -o
		},
		.../* @__PURE__ */ xt(s / 2 + s * .1, -o, o, 20, -180, -270),
		.../* @__PURE__ */ xt(s / 2 + s * .1, o, o, 20, -90, -180),
		{
			x: -s / 2 - o,
			y: l / 2
		},
		.../* @__PURE__ */ xt(s / 2, l / 2, o, 20, 0, 90),
		{
			x: -s / 2,
			y: l / 2 + o
		},
		{
			x: s / 2,
			y: l / 2 + o
		}
	], m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, { fill: "none" });
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let y = /* @__PURE__ */ H(p$1).replace("Z", ""), u$1 = /* @__PURE__ */ m$2.path(y, d$1), b = /* @__PURE__ */ H(f), S$1 = /* @__PURE__ */ m$2.path(b, { ...d$1 }), k = /* @__PURE__ */ e.insert("g", ":first-child");
	return k.insert(() => S$1, ":first-child").attr("stroke-opacity", 0), k.insert(() => u$1, ":first-child"), k.attr("class", "text"), n$1 && t.look !== "handDrawn" && k.selectAll("path").attr("style", n$1), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(${o}, 0)`), h.attr("transform", `translate(${-s / 2 + o - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w$1) {
		return N.polygon(t, f, w$1);
	}, e;
}
m$1(Je, "curlyBraceLeft");
function bt(c, t, i, r = 100, e = 0, a = 180) {
	let h = [], s = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s + p$1 * n$1, m$2 = c + i * Math.cos(f), d$1 = t + i * Math.sin(f);
		h.push({
			x: m$2,
			y: d$1
		});
	}
	return h;
}
m$1(bt, "generateCirclePoints");
async function Ke(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t, p$1 = [
		.../* @__PURE__ */ bt(s / 2, -l / 2, o, 20, -90, 0),
		{
			x: s / 2 + o,
			y: -o
		},
		.../* @__PURE__ */ bt(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ bt(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: s / 2 + o,
			y: l / 2
		},
		.../* @__PURE__ */ bt(s / 2, l / 2, o, 20, 0, 90)
	], f = [
		{
			x: -s / 2,
			y: -l / 2 - o
		},
		{
			x: s / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ bt(s / 2, -l / 2, o, 20, -90, 0),
		{
			x: s / 2 + o,
			y: -o
		},
		.../* @__PURE__ */ bt(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ bt(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: s / 2 + o,
			y: l / 2
		},
		.../* @__PURE__ */ bt(s / 2, l / 2, o, 20, 0, 90),
		{
			x: s / 2,
			y: l / 2 + o
		},
		{
			x: -s / 2,
			y: l / 2 + o
		}
	], m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, { fill: "none" });
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let y = /* @__PURE__ */ H(p$1).replace("Z", ""), u$1 = /* @__PURE__ */ m$2.path(y, d$1), b = /* @__PURE__ */ H(f), S$1 = /* @__PURE__ */ m$2.path(b, { ...d$1 }), k = /* @__PURE__ */ e.insert("g", ":first-child");
	return k.insert(() => S$1, ":first-child").attr("stroke-opacity", 0), k.insert(() => u$1, ":first-child"), k.attr("class", "text"), n$1 && t.look !== "handDrawn" && k.selectAll("path").attr("style", n$1), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(${-o}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w$1) {
		return N.polygon(t, f, w$1);
	}, e;
}
m$1(Ke, "curlyBraceRight");
function K(c, t, i, r = 100, e = 0, a = 180) {
	let h = [], s = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s + p$1 * n$1, m$2 = c + i * Math.cos(f), d$1 = t + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d$1
		});
	}
	return h;
}
m$1(K, "generateCirclePoints");
async function ts(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t, p$1 = [
		.../* @__PURE__ */ K(s / 2, -l / 2, o, 30, -90, 0),
		{
			x: -s / 2 - o,
			y: o
		},
		.../* @__PURE__ */ K(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ K(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s / 2 - o,
			y: -l / 2
		},
		.../* @__PURE__ */ K(s / 2, l / 2, o, 20, 0, 90)
	], f = [
		.../* @__PURE__ */ K(-s / 2 + o + o / 2, -l / 2, o, 20, -90, -180),
		{
			x: s / 2 - o / 2,
			y: o
		},
		.../* @__PURE__ */ K(-s / 2 - o / 2, -o, o, 20, 0, 90),
		.../* @__PURE__ */ K(-s / 2 - o / 2, o, o, 20, -90, 0),
		{
			x: s / 2 - o / 2,
			y: -o
		},
		.../* @__PURE__ */ K(-s / 2 + o + o / 2, l / 2, o, 30, -180, -270)
	], m$2 = [
		{
			x: s / 2,
			y: -l / 2 - o
		},
		{
			x: -s / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ K(s / 2, -l / 2, o, 20, -90, 0),
		{
			x: -s / 2 - o,
			y: -o
		},
		.../* @__PURE__ */ K(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ K(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s / 2 - o,
			y: l / 2
		},
		.../* @__PURE__ */ K(s / 2, l / 2, o, 20, 0, 90),
		{
			x: -s / 2,
			y: l / 2 + o
		},
		{
			x: s / 2 - o - o / 2,
			y: l / 2 + o
		},
		.../* @__PURE__ */ K(-s / 2 + o + o / 2, -l / 2, o, 20, -90, -180),
		{
			x: s / 2 - o / 2,
			y: o
		},
		.../* @__PURE__ */ K(-s / 2 - o / 2, -o, o, 20, 0, 90),
		.../* @__PURE__ */ K(-s / 2 - o / 2, o, o, 20, -90, 0),
		{
			x: s / 2 - o / 2,
			y: -o
		},
		.../* @__PURE__ */ K(-s / 2 + o + o / 2, l / 2, o, 30, -180, -270)
	], d$1 = /* @__PURE__ */ v.svg(e), g$1 = /* @__PURE__ */ S(t, { fill: "none" });
	t.look !== "handDrawn" && (g$1.roughness = 0, g$1.fillStyle = "solid");
	let u$1 = /* @__PURE__ */ H(p$1).replace("Z", ""), b = /* @__PURE__ */ d$1.path(u$1, g$1), k = /* @__PURE__ */ H(f).replace("Z", ""), w$1 = /* @__PURE__ */ d$1.path(k, g$1), B$1 = /* @__PURE__ */ H(m$2), T$1 = /* @__PURE__ */ d$1.path(B$1, { ...g$1 }), R$1 = /* @__PURE__ */ e.insert("g", ":first-child");
	return R$1.insert(() => T$1, ":first-child").attr("stroke-opacity", 0), R$1.insert(() => b, ":first-child"), R$1.insert(() => w$1, ":first-child"), R$1.attr("class", "text"), n$1 && t.look !== "handDrawn" && R$1.selectAll("path").attr("style", n$1), r && t.look !== "handDrawn" && R$1.selectAll("path").attr("style", r), R$1.attr("transform", `translate(${o - o / 4}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, R$1), t.intersect = function(E$1) {
		return N.polygon(t, m$2, E$1);
	}, e;
}
m$1(ts, "curlyBraces");
async function es(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = 80, s = 20, l = /* @__PURE__ */ Math.max(h, (a.width + (t.padding ?? 0) * 2) * 1.25, t?.width ?? 0), o = /* @__PURE__ */ Math.max(s, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n$1 = o / 2, { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = l, g$1 = o, y = d$1 - n$1, u$1 = g$1 / 4, b = [
		{
			x: y,
			y: 0
		},
		{
			x: u$1,
			y: 0
		},
		{
			x: 0,
			y: g$1 / 2
		},
		{
			x: u$1,
			y: g$1
		},
		{
			x: y,
			y: g$1
		},
		.../* @__PURE__ */ Nt(-y, -g$1 / 2, n$1, 50, 270, 90)
	], S$1 = /* @__PURE__ */ H(b), k = /* @__PURE__ */ f.path(S$1, m$2), w$1 = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w$1.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && w$1.selectChildren("path").attr("style", p$1), r && t.look !== "handDrawn" && w$1.selectChildren("path").attr("style", r), w$1.attr("transform", `translate(${-l / 2}, ${-o / 2})`), D(t, w$1), t.intersect = function(B$1) {
		return N.polygon(t, b, B$1);
	}, e;
}
m$1(es, "curvedTrapezoid");
var Mr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [
	`M${c},${t + a}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`
].join(" "), "createCylinderPathD"), kr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [
	`M${c},${t + a}`,
	`M${c + i},${t + a}`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`
].join(" "), "createOuterCylinderPathD"), Pr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [`M${c - i / 2},${-r / 2}`, `a${e},${a} 0,0,0 ${i},0`].join(" "), "createInnerCylinderPathD");
async function ss(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + t.padding, t.width ?? 0), l = s / 2, o = l / (2.5 + s / 50), n$1 = /* @__PURE__ */ Math.max(a.height + o + t.padding, t.height ?? 0), p$1, { cssStyles: f } = t;
	if (t.look === "handDrawn") {
		let m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ kr(0, 0, s, n$1, l, o), g$1 = /* @__PURE__ */ Pr(0, o, s, n$1, l, o), y = /* @__PURE__ */ m$2.path(d$1, /* @__PURE__ */ S(t, {})), u$1 = /* @__PURE__ */ m$2.path(g$1, /* @__PURE__ */ S(t, { fill: "none" }));
		p$1 = /* @__PURE__ */ e.insert(() => u$1, ":first-child"), p$1 = /* @__PURE__ */ e.insert(() => y, ":first-child"), p$1.attr("class", "basic label-container"), f && p$1.attr("style", f);
	} else {
		let m$2 = /* @__PURE__ */ Mr(0, 0, s, n$1, l, o);
		p$1 = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", m$2).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(f)).attr("style", r);
	}
	return p$1.attr("label-offset-y", o), p$1.attr("transform", `translate(${-s / 2}, ${-(n$1 / 2 + o)})`), D(t, p$1), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`), t.intersect = function(m$2) {
		let d$1 = /* @__PURE__ */ N.rect(t, m$2), g$1 = d$1.x - (t.x ?? 0);
		if (l != 0 && (Math.abs(g$1) < (t.width ?? 0) / 2 || Math.abs(g$1) == (t.width ?? 0) / 2 && Math.abs(d$1.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - o)) {
			let y = o * o * (1 - g$1 * g$1 / (l * l));
			y > 0 && (y = /* @__PURE__ */ Math.sqrt(y)), y = o - y, m$2.y - (t.y ?? 0) > 0 && (y = -y), d$1.y += y;
		}
		return d$1;
	}, e;
}
m$1(ss, "cylinder");
async function rs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + t.padding, l = a.height + t.padding, o = l * .2, n$1 = -s / 2, p$1 = -l / 2 - o / 2, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = [
		{
			x: n$1,
			y: p$1 + o
		},
		{
			x: -n$1,
			y: p$1 + o
		},
		{
			x: -n$1,
			y: -p$1
		},
		{
			x: n$1,
			y: -p$1
		},
		{
			x: n$1,
			y: p$1
		},
		{
			x: -n$1,
			y: p$1
		},
		{
			x: -n$1,
			y: p$1 + o
		}
	], y = /* @__PURE__ */ m$2.polygon(/* @__PURE__ */ g$1.map((b) => [b.x, b.y]), d$1), u$1 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container"), f && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), h.attr("transform", `translate(${n$1 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${p$1 + o + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, u$1), t.intersect = function(b) {
		return N.rect(t, b);
	}, e;
}
m$1(rs, "dividedRectangle");
async function as(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width / 2 + h + 5, o = a.width / 2 + h, n$1, { cssStyles: p$1 } = t;
	if (t.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {
			roughness: .2,
			strokeWidth: 2.5
		}), d$1 = /* @__PURE__ */ S(t, {
			roughness: .2,
			strokeWidth: 1.5
		}), g$1 = /* @__PURE__ */ f.circle(0, 0, l * 2, m$2), y = /* @__PURE__ */ f.circle(0, 0, o * 2, d$1);
		n$1 = /* @__PURE__ */ e.insert("g", ":first-child"), n$1.attr("class", /* @__PURE__ */ Vt(t.cssClasses)).attr("style", /* @__PURE__ */ Vt(p$1)), n$1.node()?.appendChild(g$1), n$1.node()?.appendChild(y);
	} else {
		n$1 = /* @__PURE__ */ e.insert("g", ":first-child");
		let f = /* @__PURE__ */ n$1.insert("circle", ":first-child"), m$2 = /* @__PURE__ */ n$1.insert("circle");
		n$1.attr("class", "basic label-container").attr("style", r), f.attr("class", "outer-circle").attr("style", r).attr("r", l).attr("cx", 0).attr("cy", 0), m$2.attr("class", "inner-circle").attr("style", r).attr("r", o).attr("cx", 0).attr("cy", 0);
	}
	return D(t, n$1), t.intersect = function(f) {
		return pt.info("DoubleCircle intersect", t, l, f), N.circle(t, l, f);
	}, e;
}
m$1(as, "doublecircle");
function os(c, t, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.label = "", t.labelStyle = r;
	let a = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), h = 7, { cssStyles: s } = t, l = /* @__PURE__ */ v.svg(a), { nodeBorder: o } = i, n$1 = /* @__PURE__ */ S(t, { fillStyle: "solid" });
	t.look !== "handDrawn" && (n$1.roughness = 0);
	let p$1 = /* @__PURE__ */ l.circle(0, 0, h * 2, n$1), f = /* @__PURE__ */ a.insert(() => p$1, ":first-child");
	return f.selectAll("path").attr("style", `fill: ${o} !important;`), s && s.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), e && t.look !== "handDrawn" && f.selectAll("path").attr("style", e), D(t, f), t.intersect = function(m$2) {
		return pt.info("filledCircle intersect", t, {
			radius: h,
			point: m$2
		}), N.circle(t, h, m$2);
	}, a;
}
m$1(os, "filledCircle");
async function is(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + (t.padding ?? 0), l = s + a.height, o = s + a.height, n$1 = [
		{
			x: 0,
			y: -l
		},
		{
			x: o,
			y: -l
		},
		{
			x: o / 2,
			y: 0
		}
	], { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = /* @__PURE__ */ H(n$1), g$1 = /* @__PURE__ */ f.path(d$1, m$2), y = /* @__PURE__ */ e.insert(() => g$1, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
	return p$1 && t.look !== "handDrawn" && y.selectChildren("path").attr("style", p$1), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), t.width = s, t.height = l, D(t, y), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`), t.intersect = function(u$1) {
		return pt.info("Triangle intersect", t, n$1, u$1), N.polygon(t, n$1, u$1);
	}, e;
}
m$1(is, "flippedTriangle");
function ns(c, t, { dir: i, config: { state: r, themeVariables: e } }) {
	let { nodeStyles: a } = m(t);
	t.label = "";
	let h = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, l = /* @__PURE__ */ Math.max(70, t?.width ?? 0), o = /* @__PURE__ */ Math.max(10, t?.height ?? 0);
	i === "LR" && (l = /* @__PURE__ */ Math.max(10, t?.width ?? 0), o = /* @__PURE__ */ Math.max(70, t?.height ?? 0));
	let n$1 = -1 * l / 2, p$1 = -1 * o / 2, f = /* @__PURE__ */ v.svg(h), m$2 = /* @__PURE__ */ S(t, {
		stroke: e.lineColor,
		fill: e.lineColor
	});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = /* @__PURE__ */ f.rectangle(n$1, p$1, l, o, m$2), g$1 = /* @__PURE__ */ h.insert(() => d$1, ":first-child");
	s && t.look !== "handDrawn" && g$1.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && g$1.selectAll("path").attr("style", a), D(t, g$1);
	let y = r?.padding ?? 0;
	return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(u$1) {
		return N.rect(t, u$1);
	}, h;
}
m$1(ns, "forkJoin");
async function ls(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let e = 80, a = 50, { shapeSvg: h, bbox: s } = await C(c, t, /* @__PURE__ */ P(t)), l = /* @__PURE__ */ Math.max(e, s.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /* @__PURE__ */ Math.max(a, s.height + (t.padding ?? 0) * 2, t?.height ?? 0), n$1 = o / 2, { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(h), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = [
		{
			x: -l / 2,
			y: -o / 2
		},
		{
			x: l / 2 - n$1,
			y: -o / 2
		},
		.../* @__PURE__ */ Nt(-l / 2 + n$1, 0, n$1, 50, 90, 270),
		{
			x: l / 2 - n$1,
			y: o / 2
		},
		{
			x: -l / 2,
			y: o / 2
		}
	], g$1 = /* @__PURE__ */ H(d$1), y = /* @__PURE__ */ f.path(g$1, m$2), u$1 = /* @__PURE__ */ h.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", p$1), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), D(t, u$1), t.intersect = function(b) {
		return pt.info("Pill intersect", t, {
			radius: n$1,
			point: b
		}), N.polygon(t, d$1, b);
	}, h;
}
m$1(ls, "halfRoundedRectangle");
async function cs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.height + (t.padding ?? 0), s = a.width + (t.padding ?? 0) * 2.5, { cssStyles: l } = t, o = /* @__PURE__ */ v.svg(e), n$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (n$1.roughness = 0, n$1.fillStyle = "solid");
	let p$1 = s / 2, f = p$1 / 6;
	p$1 = p$1 + f;
	let m$2 = h / 2, d$1 = m$2 / 2, g$1 = p$1 - d$1, y = [
		{
			x: -g$1,
			y: -m$2
		},
		{
			x: 0,
			y: -m$2
		},
		{
			x: g$1,
			y: -m$2
		},
		{
			x: p$1,
			y: 0
		},
		{
			x: g$1,
			y: m$2
		},
		{
			x: 0,
			y: m$2
		},
		{
			x: -g$1,
			y: m$2
		},
		{
			x: -p$1,
			y: 0
		}
	], u$1 = /* @__PURE__ */ H(y), b = /* @__PURE__ */ o.path(u$1, n$1), S$1 = /* @__PURE__ */ e.insert(() => b, ":first-child");
	return S$1.attr("class", "basic label-container"), l && t.look !== "handDrawn" && S$1.selectChildren("path").attr("style", l), r && t.look !== "handDrawn" && S$1.selectChildren("path").attr("style", r), t.width = s, t.height = h, D(t, S$1), t.intersect = function(k) {
		return N.polygon(t, y, k);
	}, e;
}
m$1(cs, "hexagon");
async function hs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.label = "", t.labelStyle = i;
	let { shapeSvg: e } = await C(c, t, /* @__PURE__ */ P(t)), a = /* @__PURE__ */ Math.max(30, t?.width ?? 0), h = /* @__PURE__ */ Math.max(30, t?.height ?? 0), { cssStyles: s } = t, l = /* @__PURE__ */ v.svg(e), o = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (o.roughness = 0, o.fillStyle = "solid");
	let n$1 = [
		{
			x: 0,
			y: 0
		},
		{
			x: a,
			y: 0
		},
		{
			x: 0,
			y: h
		},
		{
			x: a,
			y: h
		}
	], p$1 = /* @__PURE__ */ H(n$1), f = /* @__PURE__ */ l.path(p$1, o), m$2 = /* @__PURE__ */ e.insert(() => f, ":first-child");
	return m$2.attr("class", "basic label-container"), s && t.look !== "handDrawn" && m$2.selectChildren("path").attr("style", s), r && t.look !== "handDrawn" && m$2.selectChildren("path").attr("style", r), m$2.attr("transform", `translate(${-a / 2}, ${-h / 2})`), D(t, m$2), t.intersect = function(d$1) {
		return pt.info("Pill intersect", t, { points: n$1 }), N.polygon(t, n$1, d$1);
	}, e;
}
m$1(hs, "hourglass");
async function ps(c, t, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m(t);
	t.labelStyle = e;
	let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t.width = /* @__PURE__ */ Math.max(s, l ?? 0);
	let { shapeSvg: o, bbox: n$1, label: p$1 } = await C(c, t, "icon-shape default"), f = t.pos === "t", m$2 = s, d$1 = s, { nodeBorder: g$1 } = i, { stylesMap: y } = p(t), u$1 = -d$1 / 2, b = -m$2 / 2, S$1 = t.label ? 8 : 0, k = /* @__PURE__ */ v.svg(o), w$1 = /* @__PURE__ */ S(t, {
		stroke: "none",
		fill: "none"
	});
	t.look !== "handDrawn" && (w$1.roughness = 0, w$1.fillStyle = "solid");
	let B$1 = /* @__PURE__ */ k.rectangle(u$1, b, d$1, m$2, w$1), T$1 = /* @__PURE__ */ Math.max(d$1, n$1.width), R$1 = m$2 + n$1.height + S$1, E$1 = /* @__PURE__ */ k.rectangle(-T$1 / 2, -R$1 / 2, T$1, R$1, {
		...w$1,
		fill: "transparent",
		stroke: "none"
	}), L = /* @__PURE__ */ o.insert(() => B$1, ":first-child"), O$1 = /* @__PURE__ */ o.insert(() => E$1);
	if (t.icon) {
		let V$1 = /* @__PURE__ */ o.append("g");
		V$1.html(`<g>${await ve(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let G$1 = /* @__PURE__ */ V$1.node().getBBox(), j$1 = G$1.width, W$1 = G$1.height, A$1 = G$1.x, I = G$1.y;
		V$1.attr("transform", `translate(${-j$1 / 2 - A$1},${f ? n$1.height / 2 + S$1 / 2 - W$1 / 2 - I : -n$1.height / 2 - S$1 / 2 - W$1 / 2 - I})`), V$1.attr("style", `color: ${y.get("stroke") ?? g$1};`);
	}
	return p$1.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${f ? -R$1 / 2 : R$1 / 2 - n$1.height})`), L.attr("transform", `translate(0,${f ? n$1.height / 2 + S$1 / 2 : -n$1.height / 2 - S$1 / 2})`), D(t, O$1), t.intersect = function(V$1) {
		if (pt.info("iconSquare intersect", t, V$1), !t.label) return N.rect(t, V$1);
		let G$1 = t.x ?? 0, j$1 = t.y ?? 0, W$1 = t.height ?? 0, A$1 = [];
		return f ? A$1 = [
			{
				x: G$1 - n$1.width / 2,
				y: j$1 - W$1 / 2
			},
			{
				x: G$1 + n$1.width / 2,
				y: j$1 - W$1 / 2
			},
			{
				x: G$1 + n$1.width / 2,
				y: j$1 - W$1 / 2 + n$1.height + S$1
			},
			{
				x: G$1 + d$1 / 2,
				y: j$1 - W$1 / 2 + n$1.height + S$1
			},
			{
				x: G$1 + d$1 / 2,
				y: j$1 + W$1 / 2
			},
			{
				x: G$1 - d$1 / 2,
				y: j$1 + W$1 / 2
			},
			{
				x: G$1 - d$1 / 2,
				y: j$1 - W$1 / 2 + n$1.height + S$1
			},
			{
				x: G$1 - n$1.width / 2,
				y: j$1 - W$1 / 2 + n$1.height + S$1
			}
		] : A$1 = [
			{
				x: G$1 - d$1 / 2,
				y: j$1 - W$1 / 2
			},
			{
				x: G$1 + d$1 / 2,
				y: j$1 - W$1 / 2
			},
			{
				x: G$1 + d$1 / 2,
				y: j$1 - W$1 / 2 + m$2
			},
			{
				x: G$1 + n$1.width / 2,
				y: j$1 - W$1 / 2 + m$2
			},
			{
				x: G$1 + n$1.width / 2 / 2,
				y: j$1 + W$1 / 2
			},
			{
				x: G$1 - n$1.width / 2,
				y: j$1 + W$1 / 2
			},
			{
				x: G$1 - n$1.width / 2,
				y: j$1 - W$1 / 2 + m$2
			},
			{
				x: G$1 - d$1 / 2,
				y: j$1 - W$1 / 2 + m$2
			}
		], N.polygon(t, A$1, V$1);
	}, o;
}
m$1(ps, "icon");
async function ms(c, t, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m(t);
	t.labelStyle = e;
	let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t.width = /* @__PURE__ */ Math.max(s, l ?? 0);
	let { shapeSvg: o, bbox: n$1, label: p$1 } = await C(c, t, "icon-shape default"), f = 20, m$2 = t.label ? 8 : 0, d$1 = t.pos === "t", { nodeBorder: g$1, mainBkg: y } = i, { stylesMap: u$1 } = p(t), b = /* @__PURE__ */ v.svg(o), S$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
	S$1.stroke = u$1.get("fill") ?? y;
	let w$1 = /* @__PURE__ */ o.append("g");
	t.icon && w$1.html(`<g>${await ve(t.icon, {
		height: s,
		width: s,
		fallbackPrefix: ""
	})}</g>`);
	let B$1 = /* @__PURE__ */ w$1.node().getBBox(), T$1 = B$1.width, R$1 = B$1.height, E$1 = B$1.x, L = B$1.y, O$1 = Math.max(T$1, R$1) * Math.SQRT2 + f * 2, V$1 = /* @__PURE__ */ b.circle(0, 0, O$1, S$1), G$1 = /* @__PURE__ */ Math.max(O$1, n$1.width), j$1 = O$1 + n$1.height + m$2, W$1 = /* @__PURE__ */ b.rectangle(-G$1 / 2, -j$1 / 2, G$1, j$1, {
		...S$1,
		fill: "transparent",
		stroke: "none"
	}), A$1 = /* @__PURE__ */ o.insert(() => V$1, ":first-child"), I = /* @__PURE__ */ o.insert(() => W$1);
	return w$1.attr("transform", `translate(${-T$1 / 2 - E$1},${d$1 ? n$1.height / 2 + m$2 / 2 - R$1 / 2 - L : -n$1.height / 2 - m$2 / 2 - R$1 / 2 - L})`), w$1.attr("style", `color: ${u$1.get("stroke") ?? g$1};`), p$1.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${d$1 ? -j$1 / 2 : j$1 / 2 - n$1.height})`), A$1.attr("transform", `translate(0,${d$1 ? n$1.height / 2 + m$2 / 2 : -n$1.height / 2 - m$2 / 2})`), D(t, I), t.intersect = function(F) {
		return pt.info("iconSquare intersect", t, F), N.rect(t, F);
	}, o;
}
m$1(ms, "iconCircle");
async function fs(c, t, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m(t);
	t.labelStyle = e;
	let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t.width = /* @__PURE__ */ Math.max(s, l ?? 0);
	let { shapeSvg: o, bbox: n$1, halfPadding: p$1, label: f } = await C(c, t, "icon-shape default"), m$2 = t.pos === "t", d$1 = s + p$1 * 2, g$1 = s + p$1 * 2, { nodeBorder: y, mainBkg: u$1 } = i, { stylesMap: b } = p(t), S$1 = -g$1 / 2, k = -d$1 / 2, w$1 = t.label ? 8 : 0, B$1 = /* @__PURE__ */ v.svg(o), T$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (T$1.roughness = 0, T$1.fillStyle = "solid");
	T$1.stroke = b.get("fill") ?? u$1;
	let E$1 = /* @__PURE__ */ B$1.path(/* @__PURE__ */ st(S$1, k, g$1, d$1, 5), T$1), L = /* @__PURE__ */ Math.max(g$1, n$1.width), O$1 = d$1 + n$1.height + w$1, V$1 = /* @__PURE__ */ B$1.rectangle(-L / 2, -O$1 / 2, L, O$1, {
		...T$1,
		fill: "transparent",
		stroke: "none"
	}), G$1 = /* @__PURE__ */ o.insert(() => E$1, ":first-child").attr("class", "icon-shape2"), j$1 = /* @__PURE__ */ o.insert(() => V$1);
	if (t.icon) {
		let W$1 = /* @__PURE__ */ o.append("g");
		W$1.html(`<g>${await ve(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let A$1 = /* @__PURE__ */ W$1.node().getBBox(), I = A$1.width, F = A$1.height, Q = A$1.x, it$1 = A$1.y;
		W$1.attr("transform", `translate(${-I / 2 - Q},${m$2 ? n$1.height / 2 + w$1 / 2 - F / 2 - it$1 : -n$1.height / 2 - w$1 / 2 - F / 2 - it$1})`), W$1.attr("style", `color: ${b.get("stroke") ?? y};`);
	}
	return f.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${m$2 ? -O$1 / 2 : O$1 / 2 - n$1.height})`), G$1.attr("transform", `translate(0,${m$2 ? n$1.height / 2 + w$1 / 2 : -n$1.height / 2 - w$1 / 2})`), D(t, j$1), t.intersect = function(W$1) {
		if (pt.info("iconSquare intersect", t, W$1), !t.label) return N.rect(t, W$1);
		let A$1 = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0, Q = [];
		return m$2 ? Q = [
			{
				x: A$1 - n$1.width / 2,
				y: I - F / 2
			},
			{
				x: A$1 + n$1.width / 2,
				y: I - F / 2
			},
			{
				x: A$1 + n$1.width / 2,
				y: I - F / 2 + n$1.height + w$1
			},
			{
				x: A$1 + g$1 / 2,
				y: I - F / 2 + n$1.height + w$1
			},
			{
				x: A$1 + g$1 / 2,
				y: I + F / 2
			},
			{
				x: A$1 - g$1 / 2,
				y: I + F / 2
			},
			{
				x: A$1 - g$1 / 2,
				y: I - F / 2 + n$1.height + w$1
			},
			{
				x: A$1 - n$1.width / 2,
				y: I - F / 2 + n$1.height + w$1
			}
		] : Q = [
			{
				x: A$1 - g$1 / 2,
				y: I - F / 2
			},
			{
				x: A$1 + g$1 / 2,
				y: I - F / 2
			},
			{
				x: A$1 + g$1 / 2,
				y: I - F / 2 + d$1
			},
			{
				x: A$1 + n$1.width / 2,
				y: I - F / 2 + d$1
			},
			{
				x: A$1 + n$1.width / 2 / 2,
				y: I + F / 2
			},
			{
				x: A$1 - n$1.width / 2,
				y: I + F / 2
			},
			{
				x: A$1 - n$1.width / 2,
				y: I - F / 2 + d$1
			},
			{
				x: A$1 - g$1 / 2,
				y: I - F / 2 + d$1
			}
		], N.polygon(t, Q, W$1);
	}, o;
}
m$1(fs, "iconRounded");
async function ds(c, t, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m(t);
	t.labelStyle = e;
	let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t.width = /* @__PURE__ */ Math.max(s, l ?? 0);
	let { shapeSvg: o, bbox: n$1, halfPadding: p$1, label: f } = await C(c, t, "icon-shape default"), m$2 = t.pos === "t", d$1 = s + p$1 * 2, g$1 = s + p$1 * 2, { nodeBorder: y, mainBkg: u$1 } = i, { stylesMap: b } = p(t), S$1 = -g$1 / 2, k = -d$1 / 2, w$1 = t.label ? 8 : 0, B$1 = /* @__PURE__ */ v.svg(o), T$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (T$1.roughness = 0, T$1.fillStyle = "solid");
	T$1.stroke = b.get("fill") ?? u$1;
	let E$1 = /* @__PURE__ */ B$1.path(/* @__PURE__ */ st(S$1, k, g$1, d$1, .1), T$1), L = /* @__PURE__ */ Math.max(g$1, n$1.width), O$1 = d$1 + n$1.height + w$1, V$1 = /* @__PURE__ */ B$1.rectangle(-L / 2, -O$1 / 2, L, O$1, {
		...T$1,
		fill: "transparent",
		stroke: "none"
	}), G$1 = /* @__PURE__ */ o.insert(() => E$1, ":first-child"), j$1 = /* @__PURE__ */ o.insert(() => V$1);
	if (t.icon) {
		let W$1 = /* @__PURE__ */ o.append("g");
		W$1.html(`<g>${await ve(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let A$1 = /* @__PURE__ */ W$1.node().getBBox(), I = A$1.width, F = A$1.height, Q = A$1.x, it$1 = A$1.y;
		W$1.attr("transform", `translate(${-I / 2 - Q},${m$2 ? n$1.height / 2 + w$1 / 2 - F / 2 - it$1 : -n$1.height / 2 - w$1 / 2 - F / 2 - it$1})`), W$1.attr("style", `color: ${b.get("stroke") ?? y};`);
	}
	return f.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${m$2 ? -O$1 / 2 : O$1 / 2 - n$1.height})`), G$1.attr("transform", `translate(0,${m$2 ? n$1.height / 2 + w$1 / 2 : -n$1.height / 2 - w$1 / 2})`), D(t, j$1), t.intersect = function(W$1) {
		if (pt.info("iconSquare intersect", t, W$1), !t.label) return N.rect(t, W$1);
		let A$1 = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0, Q = [];
		return m$2 ? Q = [
			{
				x: A$1 - n$1.width / 2,
				y: I - F / 2
			},
			{
				x: A$1 + n$1.width / 2,
				y: I - F / 2
			},
			{
				x: A$1 + n$1.width / 2,
				y: I - F / 2 + n$1.height + w$1
			},
			{
				x: A$1 + g$1 / 2,
				y: I - F / 2 + n$1.height + w$1
			},
			{
				x: A$1 + g$1 / 2,
				y: I + F / 2
			},
			{
				x: A$1 - g$1 / 2,
				y: I + F / 2
			},
			{
				x: A$1 - g$1 / 2,
				y: I - F / 2 + n$1.height + w$1
			},
			{
				x: A$1 - n$1.width / 2,
				y: I - F / 2 + n$1.height + w$1
			}
		] : Q = [
			{
				x: A$1 - g$1 / 2,
				y: I - F / 2
			},
			{
				x: A$1 + g$1 / 2,
				y: I - F / 2
			},
			{
				x: A$1 + g$1 / 2,
				y: I - F / 2 + d$1
			},
			{
				x: A$1 + n$1.width / 2,
				y: I - F / 2 + d$1
			},
			{
				x: A$1 + n$1.width / 2 / 2,
				y: I + F / 2
			},
			{
				x: A$1 - n$1.width / 2,
				y: I + F / 2
			},
			{
				x: A$1 - n$1.width / 2,
				y: I - F / 2 + d$1
			},
			{
				x: A$1 - g$1 / 2,
				y: I - F / 2 + d$1
			}
		], N.polygon(t, Q, W$1);
	}, o;
}
m$1(ds, "iconSquare");
async function gs(c, t, { config: { flowchart: i } }) {
	let r = new Image();
	r.src = t?.img ?? "", await r.decode();
	let e = /* @__PURE__ */ Number(/* @__PURE__ */ r.naturalWidth.toString().replace("px", "")), a = /* @__PURE__ */ Number(/* @__PURE__ */ r.naturalHeight.toString().replace("px", ""));
	t.imageAspectRatio = e / a;
	let { labelStyles: h } = m(t);
	t.labelStyle = h;
	let s = i?.wrappingWidth;
	t.defaultWidth = i?.wrappingWidth;
	let l = /* @__PURE__ */ Math.max(t.label ? s ?? 0 : 0, t?.assetWidth ?? e), o = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, n$1 = t.constraint === "on" ? o / t.imageAspectRatio : t?.assetHeight ?? a;
	t.width = /* @__PURE__ */ Math.max(o, s ?? 0);
	let { shapeSvg: p$1, bbox: f, label: m$2 } = await C(c, t, "image-shape default"), d$1 = t.pos === "t", g$1 = -o / 2, y = -n$1 / 2, u$1 = t.label ? 8 : 0, b = /* @__PURE__ */ v.svg(p$1), S$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
	let k = /* @__PURE__ */ b.rectangle(g$1, y, o, n$1, S$1), w$1 = /* @__PURE__ */ Math.max(o, f.width), B$1 = n$1 + f.height + u$1, T$1 = /* @__PURE__ */ b.rectangle(-w$1 / 2, -B$1 / 2, w$1, B$1, {
		...S$1,
		fill: "none",
		stroke: "none"
	}), R$1 = /* @__PURE__ */ p$1.insert(() => k, ":first-child"), E$1 = /* @__PURE__ */ p$1.insert(() => T$1);
	if (t.img) {
		let L = /* @__PURE__ */ p$1.append("image");
		L.attr("href", t.img), L.attr("width", o), L.attr("height", n$1), L.attr("preserveAspectRatio", "none"), L.attr("transform", `translate(${-o / 2},${d$1 ? B$1 / 2 - n$1 : -B$1 / 2})`);
	}
	return m$2.attr("transform", `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${d$1 ? -n$1 / 2 - f.height / 2 - u$1 / 2 : n$1 / 2 - f.height / 2 + u$1 / 2})`), R$1.attr("transform", `translate(0,${d$1 ? f.height / 2 + u$1 / 2 : -f.height / 2 - u$1 / 2})`), D(t, E$1), t.intersect = function(L) {
		if (pt.info("iconSquare intersect", t, L), !t.label) return N.rect(t, L);
		let O$1 = t.x ?? 0, V$1 = t.y ?? 0, G$1 = t.height ?? 0, j$1 = [];
		return d$1 ? j$1 = [
			{
				x: O$1 - f.width / 2,
				y: V$1 - G$1 / 2
			},
			{
				x: O$1 + f.width / 2,
				y: V$1 - G$1 / 2
			},
			{
				x: O$1 + f.width / 2,
				y: V$1 - G$1 / 2 + f.height + u$1
			},
			{
				x: O$1 + o / 2,
				y: V$1 - G$1 / 2 + f.height + u$1
			},
			{
				x: O$1 + o / 2,
				y: V$1 + G$1 / 2
			},
			{
				x: O$1 - o / 2,
				y: V$1 + G$1 / 2
			},
			{
				x: O$1 - o / 2,
				y: V$1 - G$1 / 2 + f.height + u$1
			},
			{
				x: O$1 - f.width / 2,
				y: V$1 - G$1 / 2 + f.height + u$1
			}
		] : j$1 = [
			{
				x: O$1 - o / 2,
				y: V$1 - G$1 / 2
			},
			{
				x: O$1 + o / 2,
				y: V$1 - G$1 / 2
			},
			{
				x: O$1 + o / 2,
				y: V$1 - G$1 / 2 + n$1
			},
			{
				x: O$1 + f.width / 2,
				y: V$1 - G$1 / 2 + n$1
			},
			{
				x: O$1 + f.width / 2 / 2,
				y: V$1 + G$1 / 2
			},
			{
				x: O$1 - f.width / 2,
				y: V$1 + G$1 / 2
			},
			{
				x: O$1 - f.width / 2,
				y: V$1 - G$1 / 2 + n$1
			},
			{
				x: O$1 - o / 2,
				y: V$1 - G$1 / 2 + n$1
			}
		], N.polygon(t, j$1, L);
	}, p$1;
}
m$1(gs, "imageSquare");
async function us(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), s = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = [
		{
			x: 0,
			y: 0
		},
		{
			x: h,
			y: 0
		},
		{
			x: h + 3 * s / 6,
			y: -s
		},
		{
			x: -3 * s / 6,
			y: -s
		}
	], o, { cssStyles: n$1 } = t;
	if (t.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {}), m$2 = /* @__PURE__ */ H(l), d$1 = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d$1, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s, l);
	return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p$1) {
		return N.polygon(t, l, p$1);
	}, e;
}
m$1(us, "inv_trapezoid");
async function Dt(c, t, i) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r;
	let { shapeSvg: a, bbox: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(h.width + i.labelPaddingX * 2, t?.width || 0), l = /* @__PURE__ */ Math.max(h.height + i.labelPaddingY * 2, t?.height || 0), o = -s / 2, n$1 = -l / 2, p$1, { rx: f, ry: m$2 } = t, { cssStyles: d$1 } = t;
	if (i?.rx && i.ry && (f = i.rx, m$2 = i.ry), t.look === "handDrawn") {
		let g$1 = /* @__PURE__ */ v.svg(a), y = /* @__PURE__ */ S(t, {}), u$1 = f || m$2 ? g$1.path(/* @__PURE__ */ st(o, n$1, s, l, f || 0), y) : g$1.rectangle(o, n$1, s, l, y);
		p$1 = /* @__PURE__ */ a.insert(() => u$1, ":first-child"), p$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(d$1));
	} else p$1 = /* @__PURE__ */ a.insert("rect", ":first-child"), p$1.attr("class", "basic label-container").attr("style", e).attr("rx", /* @__PURE__ */ Vt(f)).attr("ry", /* @__PURE__ */ Vt(m$2)).attr("x", o).attr("y", n$1).attr("width", s).attr("height", l);
	return D(t, p$1), t.calcIntersect = function(g$1, y) {
		return N.rect(g$1, y);
	}, t.intersect = function(g$1) {
		return N.rect(t, g$1);
	}, a;
}
m$1(Dt, "drawRect");
async function ys(c, t) {
	let { shapeSvg: i, bbox: r, label: e } = await C(c, t, "label"), a = /* @__PURE__ */ i.insert("rect", ":first-child");
	return a.attr("width", .1).attr("height", .1), i.attr("class", "label edgeLabel"), e.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), D(t, a), t.intersect = function(l) {
		return N.rect(t, l);
	}, i;
}
m$1(ys, "labelRect");
async function xs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), s = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), l = [
		{
			x: 0,
			y: 0
		},
		{
			x: h + 3 * s / 6,
			y: 0
		},
		{
			x: h,
			y: -s
		},
		{
			x: -(3 * s) / 6,
			y: -s
		}
	], o, { cssStyles: n$1 } = t;
	if (t.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {}), m$2 = /* @__PURE__ */ H(l), d$1 = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d$1, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s, l);
	return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p$1) {
		return N.polygon(t, l, p$1);
	}, e;
}
m$1(xs, "lean_left");
async function bs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), s = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), l = [
		{
			x: -3 * s / 6,
			y: 0
		},
		{
			x: h,
			y: 0
		},
		{
			x: h + 3 * s / 6,
			y: -s
		},
		{
			x: 0,
			y: -s
		}
	], o, { cssStyles: n$1 } = t;
	if (t.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {}), m$2 = /* @__PURE__ */ H(l), d$1 = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d$1, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s, l);
	return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p$1) {
		return N.polygon(t, l, p$1);
	}, e;
}
m$1(bs, "lean_right");
function Ss(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.label = "", t.labelStyle = i;
	let e = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, h = /* @__PURE__ */ Math.max(35, t?.width ?? 0), s = /* @__PURE__ */ Math.max(35, t?.height ?? 0), l = 7, o = [
		{
			x: h,
			y: 0
		},
		{
			x: 0,
			y: s + l / 2
		},
		{
			x: h - 2 * l,
			y: s + l / 2
		},
		{
			x: 0,
			y: 2 * s
		},
		{
			x: h,
			y: s - l / 2
		},
		{
			x: 2 * l,
			y: s - l / 2
		}
	], n$1 = /* @__PURE__ */ v.svg(e), p$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = /* @__PURE__ */ H(o), m$2 = /* @__PURE__ */ n$1.path(f, p$1), d$1 = /* @__PURE__ */ e.insert(() => m$2, ":first-child");
	return a && t.look !== "handDrawn" && d$1.selectAll("path").attr("style", a), r && t.look !== "handDrawn" && d$1.selectAll("path").attr("style", r), d$1.attr("transform", `translate(-${h / 2},${-s})`), D(t, d$1), t.intersect = function(g$1) {
		return pt.info("lightningBolt intersect", t, g$1), N.polygon(t, o, g$1);
	}, e;
}
m$1(Ss, "lightningBolt");
var Br = /* @__PURE__ */ m$1((c, t, i, r, e, a, h) => [
	`M${c},${t + a}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`,
	`M${c},${t + a + h}`,
	`a${e},${a} 0,0,0 ${i},0`
].join(" "), "createCylinderPathD"), Cr = /* @__PURE__ */ m$1((c, t, i, r, e, a, h) => [
	`M${c},${t + a}`,
	`M${c + i},${t + a}`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`,
	`M${c},${t + a + h}`,
	`a${e},${a} 0,0,0 ${i},0`
].join(" "), "createOuterCylinderPathD"), Tr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [`M${c - i / 2},${-r / 2}`, `a${e},${a} 0,0,0 ${i},0`].join(" "), "createInnerCylinderPathD");
async function ws(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t.width ?? 0), l = s / 2, o = l / (2.5 + s / 50), n$1 = /* @__PURE__ */ Math.max(a.height + o + (t.padding ?? 0), t.height ?? 0), p$1 = n$1 * .1, f, { cssStyles: m$2 } = t;
	if (t.look === "handDrawn") {
		let d$1 = /* @__PURE__ */ v.svg(e), g$1 = /* @__PURE__ */ Cr(0, 0, s, n$1, l, o, p$1), y = /* @__PURE__ */ Tr(0, o, s, n$1, l, o), u$1 = /* @__PURE__ */ S(t, {}), b = /* @__PURE__ */ d$1.path(g$1, u$1), S$1 = /* @__PURE__ */ d$1.path(y, u$1);
		e.insert(() => S$1, ":first-child").attr("class", "line"), f = /* @__PURE__ */ e.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), m$2 && f.attr("style", m$2);
	} else {
		let d$1 = /* @__PURE__ */ Br(0, 0, s, n$1, l, o, p$1);
		f = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", d$1).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(m$2)).attr("style", r);
	}
	return f.attr("label-offset-y", o), f.attr("transform", `translate(${-s / 2}, ${-(n$1 / 2 + o)})`), D(t, f), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o - (a.y - (a.top ?? 0))})`), t.intersect = function(d$1) {
		let g$1 = /* @__PURE__ */ N.rect(t, d$1), y = g$1.x - (t.x ?? 0);
		if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(g$1.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - o)) {
			let u$1 = o * o * (1 - y * y / (l * l));
			u$1 > 0 && (u$1 = /* @__PURE__ */ Math.sqrt(u$1)), u$1 = o - u$1, d$1.y - (t.y ?? 0) > 0 && (u$1 = -u$1), g$1.y += u$1;
		}
		return g$1;
	}, e;
}
m$1(ws, "linedCylinder");
async function Ns(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n$1 = l + o, { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = [
		{
			x: -s / 2 - s / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s / 2 - s / 2 * .1,
			y: n$1 / 2
		},
		.../* @__PURE__ */ lt(-s / 2 - s / 2 * .1, n$1 / 2, s / 2 + s / 2 * .1, n$1 / 2, o, .8),
		{
			x: s / 2 + s / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s / 2 - s / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s / 2,
			y: -n$1 / 2
		},
		{
			x: -s / 2,
			y: n$1 / 2 * 1.1
		},
		{
			x: -s / 2,
			y: -n$1 / 2
		}
	], g$1 = /* @__PURE__ */ f.polygon(/* @__PURE__ */ d$1.map((u$1) => [u$1.x, u$1.y]), m$2), y = /* @__PURE__ */ e.insert(() => g$1, ":first-child");
	return y.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && y.selectAll("path").attr("style", p$1), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) + s / 2 * .1 / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o / 2 - (a.y - (a.top ?? 0))})`), D(t, y), t.intersect = function(u$1) {
		return N.polygon(t, d$1, u$1);
	}, e;
}
m$1(Ns, "linedWaveEdgedRect");
async function $s(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = 5, n$1 = -s / 2, p$1 = -l / 2, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, {}), g$1 = [
		{
			x: n$1 - o,
			y: p$1 + o
		},
		{
			x: n$1 - o,
			y: p$1 + l + o
		},
		{
			x: n$1 + s - o,
			y: p$1 + l + o
		},
		{
			x: n$1 + s - o,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 + l - o
		},
		{
			x: n$1 + s + o,
			y: p$1 + l - o
		},
		{
			x: n$1 + s + o,
			y: p$1 - o
		},
		{
			x: n$1 + o,
			y: p$1 - o
		},
		{
			x: n$1 + o,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		},
		{
			x: n$1,
			y: p$1 + o
		}
	], y = [
		{
			x: n$1,
			y: p$1 + o
		},
		{
			x: n$1 + s - o,
			y: p$1 + o
		},
		{
			x: n$1 + s - o,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		}
	];
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let u$1 = /* @__PURE__ */ H(g$1), b = /* @__PURE__ */ m$2.path(u$1, d$1), S$1 = /* @__PURE__ */ H(y), k = /* @__PURE__ */ m$2.path(S$1, {
		...d$1,
		fill: "none"
	}), w$1 = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w$1.insert(() => b, ":first-child"), w$1.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w$1.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w$1.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) - o - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o - (a.y - (a.top ?? 0))})`), D(t, w$1), t.intersect = function(B$1) {
		return N.polygon(t, g$1, B$1);
	}, e;
}
m$1($s, "multiRect");
async function Ds(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n$1 = l + o, p$1 = -s / 2, f = -n$1 / 2, m$2 = 5, { cssStyles: d$1 } = t, g$1 = /* @__PURE__ */ lt(p$1 - m$2, f + n$1 + m$2, p$1 + s - m$2, f + n$1 + m$2, o, .8), y = g$1?.[g$1.length - 1], u$1 = [
		{
			x: p$1 - m$2,
			y: f + m$2
		},
		{
			x: p$1 - m$2,
			y: f + n$1 + m$2
		},
		...g$1,
		{
			x: p$1 + s - m$2,
			y: y.y - m$2
		},
		{
			x: p$1 + s,
			y: y.y - m$2
		},
		{
			x: p$1 + s,
			y: y.y - 2 * m$2
		},
		{
			x: p$1 + s + m$2,
			y: y.y - 2 * m$2
		},
		{
			x: p$1 + s + m$2,
			y: f - m$2
		},
		{
			x: p$1 + m$2,
			y: f - m$2
		},
		{
			x: p$1 + m$2,
			y: f
		},
		{
			x: p$1,
			y: f
		},
		{
			x: p$1,
			y: f + m$2
		}
	], b = [
		{
			x: p$1,
			y: f + m$2
		},
		{
			x: p$1 + s - m$2,
			y: f + m$2
		},
		{
			x: p$1 + s - m$2,
			y: y.y - m$2
		},
		{
			x: p$1 + s,
			y: y.y - m$2
		},
		{
			x: p$1 + s,
			y: f
		},
		{
			x: p$1,
			y: f
		}
	], S$1 = /* @__PURE__ */ v.svg(e), k = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
	let w$1 = /* @__PURE__ */ H(u$1), B$1 = /* @__PURE__ */ S$1.path(w$1, k), T$1 = /* @__PURE__ */ H(b), R$1 = /* @__PURE__ */ S$1.path(T$1, k), E$1 = /* @__PURE__ */ e.insert(() => B$1, ":first-child");
	return E$1.insert(() => R$1), E$1.attr("class", "basic label-container"), d$1 && t.look !== "handDrawn" && E$1.selectAll("path").attr("style", d$1), r && t.look !== "handDrawn" && E$1.selectAll("path").attr("style", r), E$1.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-(a.width / 2) - m$2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + m$2 - o / 2 - (a.y - (a.top ?? 0))})`), D(t, E$1), t.intersect = function(L) {
		return N.polygon(t, u$1, L);
	}, e;
}
m$1(Ds, "multiWaveEdgedRectangle");
async function vs(c, t, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r, t.useHtmlLabels || Ot().flowchart?.htmlLabels !== !1 || (t.centerLabel = !0);
	let { shapeSvg: h, bbox: s, label: l } = await C(c, t, /* @__PURE__ */ P(t)), o = /* @__PURE__ */ Math.max(s.width + (t.padding ?? 0) * 2, t?.width ?? 0), n$1 = /* @__PURE__ */ Math.max(s.height + (t.padding ?? 0) * 2, t?.height ?? 0), p$1 = -o / 2, f = -n$1 / 2, { cssStyles: m$2 } = t, d$1 = /* @__PURE__ */ v.svg(h), g$1 = /* @__PURE__ */ S(t, {
		fill: i.noteBkgColor,
		stroke: i.noteBorderColor
	});
	t.look !== "handDrawn" && (g$1.roughness = 0, g$1.fillStyle = "solid");
	let y = /* @__PURE__ */ d$1.rectangle(p$1, f, o, n$1, g$1), u$1 = /* @__PURE__ */ h.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container"), m$2 && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", m$2), e && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", e), l.attr("transform", `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) - (s.y - (s.top ?? 0))})`), D(t, u$1), t.intersect = function(b) {
		return N.rect(t, b);
	}, h;
}
m$1(vs, "note");
var Rr$1 = /* @__PURE__ */ m$1((c, t, i) => [
	`M${c + i / 2},${t}`,
	`L${c + i},${t - i / 2}`,
	`L${c + i / 2},${t - i}`,
	`L${c},${t - i / 2}`,
	"Z"
].join(" "), "createDecisionBoxPathD");
async function Ms(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.width + t.padding, s = a.height + t.padding, l = h + s, o = .5, n$1 = [
		{
			x: l / 2,
			y: 0
		},
		{
			x: l,
			y: -l / 2
		},
		{
			x: l / 2,
			y: -l
		},
		{
			x: 0,
			y: -l / 2
		}
	], p$1, { cssStyles: f } = t;
	if (t.look === "handDrawn") {
		let m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, {}), g$1 = /* @__PURE__ */ Rr$1(0, 0, l), y = /* @__PURE__ */ m$2.path(g$1, d$1);
		p$1 = /* @__PURE__ */ e.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + o}, ${l / 2})`), f && p$1.attr("style", f);
	} else p$1 = /* @__PURE__ */ rt(e, l, l, n$1), p$1.attr("transform", `translate(${-l / 2 + o}, ${l / 2})`);
	return r && p$1.attr("style", r), D(t, p$1), t.calcIntersect = function(m$2, d$1) {
		let g$1 = m$2.width, y = [
			{
				x: g$1 / 2,
				y: 0
			},
			{
				x: g$1,
				y: -g$1 / 2
			},
			{
				x: g$1 / 2,
				y: -g$1
			},
			{
				x: 0,
				y: -g$1 / 2
			}
		], u$1 = /* @__PURE__ */ N.polygon(m$2, y, d$1);
		return {
			x: u$1.x - .5,
			y: u$1.y - .5
		};
	}, t.intersect = function(m$2) {
		return this.calcIntersect(t, m$2);
	}, e;
}
m$1(Ms, "question");
async function ks(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), o = -s / 2, n$1 = -l / 2, p$1 = n$1 / 2, f = [
		{
			x: o + p$1,
			y: n$1
		},
		{
			x: o,
			y: 0
		},
		{
			x: o + p$1,
			y: -n$1
		},
		{
			x: -o,
			y: -n$1
		},
		{
			x: -o,
			y: n$1
		}
	], { cssStyles: m$2 } = t, d$1 = /* @__PURE__ */ v.svg(e), g$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (g$1.roughness = 0, g$1.fillStyle = "solid");
	let y = /* @__PURE__ */ H(f), u$1 = /* @__PURE__ */ d$1.path(y, g$1), b = /* @__PURE__ */ e.insert(() => u$1, ":first-child");
	return b.attr("class", "basic label-container"), m$2 && t.look !== "handDrawn" && b.selectAll("path").attr("style", m$2), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), b.attr("transform", `translate(${-p$1 / 2},0)`), h.attr("transform", `translate(${-p$1 / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), D(t, b), t.intersect = function(S$1) {
		return N.polygon(t, f, S$1);
	}, e;
}
m$1(ks, "rect_left_inv_arrow");
async function Ps(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let e;
	t.cssClasses ? e = "node " + t.cssClasses : e = "node default";
	let a = /* @__PURE__ */ c.insert("g").attr("class", e).attr("id", t.domId || t.id), h = /* @__PURE__ */ a.insert("g"), s = /* @__PURE__ */ a.insert("g").attr("class", "label").attr("style", r), l = t.description, o = t.label, n$1 = /* @__PURE__ */ s.node().appendChild(await Rt(o, t.labelStyle, !0, !0)), p$1 = {
		width: 0,
		height: 0
	};
	if (Mo(mr()?.flowchart?.htmlLabels)) {
		let R$1 = n$1.children[0], E$1 = /* @__PURE__ */ ia(n$1);
		p$1 = /* @__PURE__ */ R$1.getBoundingClientRect(), E$1.attr("width", p$1.width), E$1.attr("height", p$1.height);
	}
	pt.info("Text 2", l);
	let f = l || [], m$2 = /* @__PURE__ */ n$1.getBBox(), d$1 = /* @__PURE__ */ s.node().appendChild(await Rt(f.join ? f.join("<br/>") : f, t.labelStyle, !0, !0)), g$1 = d$1.children[0], y = /* @__PURE__ */ ia(d$1);
	p$1 = /* @__PURE__ */ g$1.getBoundingClientRect(), y.attr("width", p$1.width), y.attr("height", p$1.height);
	let u$1 = (t.padding || 0) / 2;
	ia(d$1).attr("transform", "translate( " + (p$1.width > m$2.width ? 0 : (m$2.width - p$1.width) / 2) + ", " + (m$2.height + u$1 + 5) + ")"), ia(n$1).attr("transform", "translate( " + (p$1.width < m$2.width ? 0 : -(m$2.width - p$1.width) / 2) + ", 0)"), p$1 = /* @__PURE__ */ s.node().getBBox(), s.attr("transform", "translate(" + -p$1.width / 2 + ", " + (-p$1.height / 2 - u$1 + 3) + ")");
	let b = p$1.width + (t.padding || 0), S$1 = p$1.height + (t.padding || 0), k = -p$1.width / 2 - u$1, w$1 = -p$1.height / 2 - u$1, B$1, T$1;
	if (t.look === "handDrawn") {
		let R$1 = /* @__PURE__ */ v.svg(a), E$1 = /* @__PURE__ */ S(t, {}), L = /* @__PURE__ */ R$1.path(/* @__PURE__ */ st(k, w$1, b, S$1, t.rx || 0), E$1), O$1 = /* @__PURE__ */ R$1.line(-p$1.width / 2 - u$1, -p$1.height / 2 - u$1 + m$2.height + u$1, p$1.width / 2 + u$1, -p$1.height / 2 - u$1 + m$2.height + u$1, E$1);
		T$1 = /* @__PURE__ */ a.insert(() => (pt.debug("Rough node insert CXC", L), O$1), ":first-child"), B$1 = /* @__PURE__ */ a.insert(() => (pt.debug("Rough node insert CXC", L), L), ":first-child");
	} else B$1 = /* @__PURE__ */ h.insert("rect", ":first-child"), T$1 = /* @__PURE__ */ h.insert("line"), B$1.attr("class", "outer title-state").attr("style", r).attr("x", -p$1.width / 2 - u$1).attr("y", -p$1.height / 2 - u$1).attr("width", p$1.width + (t.padding || 0)).attr("height", p$1.height + (t.padding || 0)), T$1.attr("class", "divider").attr("x1", -p$1.width / 2 - u$1).attr("x2", p$1.width / 2 + u$1).attr("y1", -p$1.height / 2 - u$1 + m$2.height + u$1).attr("y2", -p$1.height / 2 - u$1 + m$2.height + u$1);
	return D(t, B$1), t.intersect = function(R$1) {
		return N.rect(t, R$1);
	}, a;
}
m$1(Ps, "rectWithTitle");
function Yt$1(c, t, i, r, e, a, h) {
	let l = (c + i) / 2, o = (t + r) / 2, n$1 = /* @__PURE__ */ Math.atan2(r - t, i - c), p$1 = (i - c) / 2, f = (r - t) / 2, m$2 = p$1 / e, d$1 = f / a, g$1 = /* @__PURE__ */ Math.sqrt(m$2 ** 2 + d$1 ** 2);
	if (g$1 > 1) throw new Error("The given radii are too small to create an arc between the points.");
	let y = /* @__PURE__ */ Math.sqrt(1 - g$1 ** 2), u$1 = l + y * a * Math.sin(n$1) * (h ? -1 : 1), b = o - y * e * Math.cos(n$1) * (h ? -1 : 1), S$1 = /* @__PURE__ */ Math.atan2((t - b) / a, (c - u$1) / e), w$1 = Math.atan2((r - b) / a, (i - u$1) / e) - S$1;
	h && w$1 < 0 && (w$1 += 2 * Math.PI), !h && w$1 > 0 && (w$1 -= 2 * Math.PI);
	let B$1 = [];
	for (let T$1 = 0; T$1 < 20; T$1++) {
		let R$1 = T$1 / 19, E$1 = S$1 + R$1 * w$1, L = u$1 + e * Math.cos(E$1), O$1 = b + a * Math.sin(E$1);
		B$1.push({
			x: L,
			y: O$1
		});
	}
	return B$1;
}
m$1(Yt$1, "generateArcPoints");
async function Bs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = t?.padding ?? 0, s = t?.padding ?? 0, l = (t?.width ? t?.width : a.width) + h * 2, o = (t?.height ? t?.height : a.height) + s * 2, n$1 = t.radius || 5, p$1 = t.taper || 5, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, {});
	t.stroke && (d$1.stroke = t.stroke), t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = [
		{
			x: -l / 2 + p$1,
			y: -o / 2
		},
		{
			x: l / 2 - p$1,
			y: -o / 2
		},
		.../* @__PURE__ */ Yt$1(l / 2 - p$1, -o / 2, l / 2, -o / 2 + p$1, n$1, n$1, !0),
		{
			x: l / 2,
			y: -o / 2 + p$1
		},
		{
			x: l / 2,
			y: o / 2 - p$1
		},
		.../* @__PURE__ */ Yt$1(l / 2, o / 2 - p$1, l / 2 - p$1, o / 2, n$1, n$1, !0),
		{
			x: l / 2 - p$1,
			y: o / 2
		},
		{
			x: -l / 2 + p$1,
			y: o / 2
		},
		.../* @__PURE__ */ Yt$1(-l / 2 + p$1, o / 2, -l / 2, o / 2 - p$1, n$1, n$1, !0),
		{
			x: -l / 2,
			y: o / 2 - p$1
		},
		{
			x: -l / 2,
			y: -o / 2 + p$1
		},
		.../* @__PURE__ */ Yt$1(-l / 2, -o / 2 + p$1, -l / 2 + p$1, -o / 2, n$1, n$1, !0)
	], y = /* @__PURE__ */ H(g$1), u$1 = /* @__PURE__ */ m$2.path(y, d$1), b = /* @__PURE__ */ e.insert(() => u$1, ":first-child");
	return b.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && b.selectChildren("path").attr("style", r), D(t, b), t.intersect = function(S$1) {
		return N.polygon(t, g$1, S$1);
	}, e;
}
m$1(Bs, "roundedRect");
async function Cs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = t?.padding ?? 0, l = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n$1 = -a.width / 2 - s, p$1 = -a.height / 2 - s, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = [
		{
			x: n$1,
			y: p$1
		},
		{
			x: n$1 + l + 8,
			y: p$1
		},
		{
			x: n$1 + l + 8,
			y: p$1 + o
		},
		{
			x: n$1 - 8,
			y: p$1 + o
		},
		{
			x: n$1 - 8,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		},
		{
			x: n$1,
			y: p$1 + o
		}
	], y = /* @__PURE__ */ m$2.polygon(/* @__PURE__ */ g$1.map((b) => [b.x, b.y]), d$1), u$1 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(f)), r && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), f && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), h.attr("transform", `translate(${-l / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-o / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), D(t, u$1), t.intersect = function(b) {
		return N.rect(t, b);
	}, e;
}
m$1(Cs, "shadedProcess");
async function Ts(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = -s / 2, n$1 = -l / 2, { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = [
		{
			x: o,
			y: n$1
		},
		{
			x: o,
			y: n$1 + l
		},
		{
			x: o + s,
			y: n$1 + l
		},
		{
			x: o + s,
			y: n$1 - l / 2
		}
	], g$1 = /* @__PURE__ */ H(d$1), y = /* @__PURE__ */ f.path(g$1, m$2), u$1 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", p$1), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), u$1.attr("transform", `translate(0, ${l / 4})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), D(t, u$1), t.intersect = function(b) {
		return N.polygon(t, d$1, b);
	}, e;
}
m$1(Ts, "slopedRect");
async function Rs(c, t) {
	let i = {
		rx: 0,
		ry: 0,
		classes: "",
		labelPaddingX: t.labelPaddingX ?? (t?.padding || 0) * 2,
		labelPaddingY: (t?.padding || 0) * 1
	};
	return Dt(c, t, i);
}
m$1(Rs, "squareRect");
async function Gs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.height + t.padding, s = a.width + h / 4 + t.padding, l = h / 2, { cssStyles: o } = t, n$1 = /* @__PURE__ */ v.svg(e), p$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = [
		{
			x: -s / 2 + l,
			y: -h / 2
		},
		{
			x: s / 2 - l,
			y: -h / 2
		},
		.../* @__PURE__ */ Nt(-s / 2 + l, 0, l, 50, 90, 270),
		{
			x: s / 2 - l,
			y: h / 2
		},
		.../* @__PURE__ */ Nt(s / 2 - l, 0, l, 50, 270, 450)
	], m$2 = /* @__PURE__ */ H(f), d$1 = /* @__PURE__ */ n$1.path(m$2, p$1), g$1 = /* @__PURE__ */ e.insert(() => d$1, ":first-child");
	return g$1.attr("class", "basic label-container outer-path"), o && t.look !== "handDrawn" && g$1.selectChildren("path").attr("style", o), r && t.look !== "handDrawn" && g$1.selectChildren("path").attr("style", r), D(t, g$1), t.intersect = function(y) {
		return N.polygon(t, f, y);
	}, e;
}
m$1(Gs, "stadium");
async function Es(c, t) {
	return Dt(c, t, {
		rx: 5,
		ry: 5,
		classes: "flowchart-node"
	});
}
m$1(Es, "state");
function js(c, t, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r;
	let { cssStyles: a } = t, { lineColor: h, stateBorder: s, nodeBorder: l } = i, o = /* @__PURE__ */ c.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n$1 = /* @__PURE__ */ v.svg(o), p$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = /* @__PURE__ */ n$1.circle(0, 0, 14, {
		...p$1,
		stroke: h,
		strokeWidth: 2
	}), m$2 = s ?? l, d$1 = /* @__PURE__ */ n$1.circle(0, 0, 5, {
		...p$1,
		fill: m$2,
		stroke: m$2,
		strokeWidth: 2,
		fillStyle: "solid"
	}), g$1 = /* @__PURE__ */ o.insert(() => f, ":first-child");
	return g$1.insert(() => d$1), a && g$1.selectAll("path").attr("style", a), e && g$1.selectAll("path").attr("style", e), D(t, g$1), t.intersect = function(y) {
		return N.circle(t, 7, y);
	}, o;
}
m$1(js, "stateEnd");
function As(c, t, { config: { themeVariables: i } }) {
	let { lineColor: r } = i, e = /* @__PURE__ */ c.insert("g").attr("class", "node default").attr("id", t.domId || t.id), a;
	if (t.look === "handDrawn") {
		let s = /* @__PURE__ */ v.svg(e).circle(0, 0, 14, /* @__PURE__ */ u(r));
		a = /* @__PURE__ */ e.insert(() => s), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
	} else a = /* @__PURE__ */ e.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
	return D(t, a), t.intersect = function(h) {
		return N.circle(t, 7, h);
	}, e;
}
m$1(As, "stateStart");
async function Os(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = (t?.padding || 0) / 2, s = a.width + t.padding, l = a.height + t.padding, o = -a.width / 2 - h, n$1 = -a.height / 2 - h, p$1 = [
		{
			x: 0,
			y: 0
		},
		{
			x: s,
			y: 0
		},
		{
			x: s,
			y: -l
		},
		{
			x: 0,
			y: -l
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: s + 8,
			y: 0
		},
		{
			x: s + 8,
			y: -l
		},
		{
			x: -8,
			y: -l
		},
		{
			x: -8,
			y: 0
		}
	];
	if (t.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {}), d$1 = /* @__PURE__ */ f.rectangle(o - 8, n$1, s + 16, l, m$2), g$1 = /* @__PURE__ */ f.line(o, n$1, o, n$1 + l, m$2), y = /* @__PURE__ */ f.line(o + s, n$1, o + s, n$1 + l, m$2);
		e.insert(() => g$1, ":first-child"), e.insert(() => y, ":first-child");
		let u$1 = /* @__PURE__ */ e.insert(() => d$1, ":first-child"), { cssStyles: b } = t;
		u$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(b)), D(t, u$1);
	} else {
		let f = /* @__PURE__ */ rt(e, s, l, p$1);
		r && f.attr("style", r), D(t, f);
	}
	return t.intersect = function(f) {
		return N.polygon(t, p$1, f);
	}, e;
}
m$1(Os, "subroutine");
async function Ls(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), s = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = -h / 2, o = -s / 2, n$1 = .2 * s, p$1 = .2 * s, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, {}), g$1 = [
		{
			x: l - n$1 / 2,
			y: o
		},
		{
			x: l + h + n$1 / 2,
			y: o
		},
		{
			x: l + h + n$1 / 2,
			y: o + s
		},
		{
			x: l - n$1 / 2,
			y: o + s
		}
	], y = [
		{
			x: l + h - n$1 / 2,
			y: o + s
		},
		{
			x: l + h + n$1 / 2,
			y: o + s
		},
		{
			x: l + h + n$1 / 2,
			y: o + s - p$1
		}
	];
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let u$1 = /* @__PURE__ */ H(g$1), b = /* @__PURE__ */ m$2.path(u$1, d$1), S$1 = /* @__PURE__ */ H(y), k = /* @__PURE__ */ m$2.path(S$1, {
		...d$1,
		fillStyle: "solid"
	}), w$1 = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w$1.insert(() => b, ":first-child"), w$1.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w$1.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w$1.selectAll("path").attr("style", r), D(t, w$1), t.intersect = function(B$1) {
		return N.polygon(t, g$1, B$1);
	}, e;
}
m$1(Ls, "taggedRect");
async function Hs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n$1 = .2 * s, p$1 = .2 * l, f = l + o, { cssStyles: m$2 } = t, d$1 = /* @__PURE__ */ v.svg(e), g$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (g$1.roughness = 0, g$1.fillStyle = "solid");
	let y = [
		{
			x: -s / 2 - s / 2 * .1,
			y: f / 2
		},
		.../* @__PURE__ */ lt(-s / 2 - s / 2 * .1, f / 2, s / 2 + s / 2 * .1, f / 2, o, .8),
		{
			x: s / 2 + s / 2 * .1,
			y: -f / 2
		},
		{
			x: -s / 2 - s / 2 * .1,
			y: -f / 2
		}
	], u$1 = -s / 2 + s / 2 * .1, b = -f / 2 - p$1 * .4, S$1 = [
		{
			x: u$1 + s - n$1,
			y: (b + l) * 1.4
		},
		{
			x: u$1 + s,
			y: b + l - p$1
		},
		{
			x: u$1 + s,
			y: (b + l) * .9
		},
		.../* @__PURE__ */ lt(u$1 + s, (b + l) * 1.3, u$1 + s - n$1, (b + l) * 1.5, -l * .03, .5)
	], k = /* @__PURE__ */ H(y), w$1 = /* @__PURE__ */ d$1.path(k, g$1), B$1 = /* @__PURE__ */ H(S$1), T$1 = /* @__PURE__ */ d$1.path(B$1, {
		...g$1,
		fillStyle: "solid"
	}), R$1 = /* @__PURE__ */ e.insert(() => T$1, ":first-child");
	return R$1.insert(() => w$1, ":first-child"), R$1.attr("class", "basic label-container"), m$2 && t.look !== "handDrawn" && R$1.selectAll("path").attr("style", m$2), r && t.look !== "handDrawn" && R$1.selectAll("path").attr("style", r), R$1.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o / 2 - (a.y - (a.top ?? 0))})`), D(t, R$1), t.intersect = function(E$1) {
		return N.polygon(t, y, E$1);
	}, e;
}
m$1(Hs, "taggedWaveEdgedRectangle");
async function Vs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + t.padding, t?.width || 0), s = /* @__PURE__ */ Math.max(a.height + t.padding, t?.height || 0), l = -h / 2, o = -s / 2, n$1 = /* @__PURE__ */ e.insert("rect", ":first-child");
	return n$1.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", o).attr("width", h).attr("height", s), D(t, n$1), t.intersect = function(p$1) {
		return N.rect(t, p$1);
	}, e;
}
m$1(Vs, "text");
var Gr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => `M${c},${t}
    a${e},${a} 0,0,1 0,${-r}
    l${i},0
    a${e},${a} 0,0,1 0,${r}
    M${i},${-r}
    a${e},${a} 0,0,0 0,${r}
    l${-i},0`, "createCylinderPathD"), Er = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [
	`M${c},${t}`,
	`M${c + i},${t}`,
	`a${e},${a} 0,0,0 0,${-r}`,
	`l${-i},0`,
	`a${e},${a} 0,0,0 0,${r}`,
	`l${i},0`
].join(" "), "createOuterCylinderPathD"), jr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [`M${c + i / 2},${-r / 2}`, `a${e},${a} 0,0,0 0,${r}`].join(" "), "createInnerCylinderPathD");
async function Ws(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h, halfPadding: s } = await C(c, t, /* @__PURE__ */ P(t)), l = t.look === "neo" ? s * 2 : s, o = a.height + l, n$1 = o / 2, p$1 = n$1 / (2.5 + o / 50), f = a.width + p$1 + l, { cssStyles: m$2 } = t, d$1;
	if (t.look === "handDrawn") {
		let g$1 = /* @__PURE__ */ v.svg(e), y = /* @__PURE__ */ Er(0, 0, f, o, p$1, n$1), u$1 = /* @__PURE__ */ jr(0, 0, f, o, p$1, n$1), b = /* @__PURE__ */ g$1.path(y, /* @__PURE__ */ S(t, {})), S$1 = /* @__PURE__ */ g$1.path(u$1, /* @__PURE__ */ S(t, { fill: "none" }));
		d$1 = /* @__PURE__ */ e.insert(() => S$1, ":first-child"), d$1 = /* @__PURE__ */ e.insert(() => b, ":first-child"), d$1.attr("class", "basic label-container"), m$2 && d$1.attr("style", m$2);
	} else {
		let g$1 = /* @__PURE__ */ Gr(0, 0, f, o, p$1, n$1);
		d$1 = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", g$1).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(m$2)).attr("style", r), d$1.attr("class", "basic label-container"), m$2 && d$1.selectAll("path").attr("style", m$2), r && d$1.selectAll("path").attr("style", r);
	}
	return d$1.attr("label-offset-x", p$1), d$1.attr("transform", `translate(${-f / 2}, ${o / 2} )`), h.attr("transform", `translate(${-(a.width / 2) - p$1 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), D(t, d$1), t.intersect = function(g$1) {
		let y = /* @__PURE__ */ N.rect(t, g$1), u$1 = y.y - (t.y ?? 0);
		if (n$1 != 0 && (Math.abs(u$1) < (t.height ?? 0) / 2 || Math.abs(u$1) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - p$1)) {
			let b = p$1 * p$1 * (1 - u$1 * u$1 / (n$1 * n$1));
			b != 0 && (b = /* @__PURE__ */ Math.sqrt(/* @__PURE__ */ Math.abs(b))), b = p$1 - b, g$1.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
		}
		return y;
	}, e;
}
m$1(Ws, "tiltedCylinder");
async function Is(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.width + t.padding, s = a.height + t.padding, l = [
		{
			x: -3 * s / 6,
			y: 0
		},
		{
			x: h + 3 * s / 6,
			y: 0
		},
		{
			x: h,
			y: -s
		},
		{
			x: 0,
			y: -s
		}
	], o, { cssStyles: n$1 } = t;
	if (t.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {}), m$2 = /* @__PURE__ */ H(l), d$1 = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d$1, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s, l);
	return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p$1) {
		return N.polygon(t, l, p$1);
	}, e;
}
m$1(Is, "trapezoid");
async function Fs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = 60, s = 20, l = /* @__PURE__ */ Math.max(h, a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /* @__PURE__ */ Math.max(s, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), { cssStyles: n$1 } = t, p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
	let m$2 = [
		{
			x: -l / 2 * .8,
			y: -o / 2
		},
		{
			x: l / 2 * .8,
			y: -o / 2
		},
		{
			x: l / 2,
			y: -o / 2 * .6
		},
		{
			x: l / 2,
			y: o / 2
		},
		{
			x: -l / 2,
			y: o / 2
		},
		{
			x: -l / 2,
			y: -o / 2 * .6
		}
	], d$1 = /* @__PURE__ */ H(m$2), g$1 = /* @__PURE__ */ p$1.path(d$1, f), y = /* @__PURE__ */ e.insert(() => g$1, ":first-child");
	return y.attr("class", "basic label-container"), n$1 && t.look !== "handDrawn" && y.selectChildren("path").attr("style", n$1), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), D(t, y), t.intersect = function(u$1) {
		return N.polygon(t, m$2, u$1);
	}, e;
}
m$1(Fs, "trapezoidalPentagon");
async function _s(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Mo(mr().flowchart?.htmlLabels), l = a.width + (t.padding ?? 0), o = l + a.height, n$1 = l + a.height, p$1 = [
		{
			x: 0,
			y: 0
		},
		{
			x: n$1,
			y: 0
		},
		{
			x: n$1 / 2,
			y: -o
		}
	], { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = /* @__PURE__ */ H(p$1), y = /* @__PURE__ */ m$2.path(g$1, d$1), u$1 = /* @__PURE__ */ e.insert(() => y, ":first-child").attr("transform", `translate(${-o / 2}, ${o / 2})`);
	return f && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), t.width = l, t.height = o, D(t, u$1), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${o / 2 - (a.height + (t.padding ?? 0) / (s ? 2 : 1) - (a.y - (a.top ?? 0)))})`), t.intersect = function(b) {
		return pt.info("Triangle intersect", t, p$1, b), N.polygon(t, p$1, b);
	}, e;
}
m$1(_s, "triangle");
async function zs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 8, n$1 = l + o, { cssStyles: p$1 } = t, m$2 = 70 - s, d$1 = m$2 > 0 ? m$2 / 2 : 0, g$1 = /* @__PURE__ */ v.svg(e), y = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let u$1 = [
		{
			x: -s / 2 - d$1,
			y: n$1 / 2
		},
		.../* @__PURE__ */ lt(-s / 2 - d$1, n$1 / 2, s / 2 + d$1, n$1 / 2, o, .8),
		{
			x: s / 2 + d$1,
			y: -n$1 / 2
		},
		{
			x: -s / 2 - d$1,
			y: -n$1 / 2
		}
	], b = /* @__PURE__ */ H(u$1), S$1 = /* @__PURE__ */ g$1.path(b, y), k = /* @__PURE__ */ e.insert(() => S$1, ":first-child");
	return k.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && k.selectAll("path").attr("style", p$1), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w$1) {
		return N.polygon(t, u$1, w$1);
	}, e;
}
m$1(zs, "waveEdgedRectangle");
async function qs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = 100, s = 50, l = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n$1 = l / o, p$1 = l, f = o;
	p$1 > f * n$1 ? f = p$1 / n$1 : p$1 = f * n$1, p$1 = /* @__PURE__ */ Math.max(p$1, h), f = /* @__PURE__ */ Math.max(f, s);
	let m$2 = /* @__PURE__ */ Math.min(f * .2, f / 4), d$1 = f + m$2 * 2, { cssStyles: g$1 } = t, y = /* @__PURE__ */ v.svg(e), u$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (u$1.roughness = 0, u$1.fillStyle = "solid");
	let b = [
		{
			x: -p$1 / 2,
			y: d$1 / 2
		},
		.../* @__PURE__ */ lt(-p$1 / 2, d$1 / 2, p$1 / 2, d$1 / 2, m$2, 1),
		{
			x: p$1 / 2,
			y: -d$1 / 2
		},
		.../* @__PURE__ */ lt(p$1 / 2, -d$1 / 2, -p$1 / 2, -d$1 / 2, m$2, -1)
	], S$1 = /* @__PURE__ */ H(b), k = /* @__PURE__ */ y.path(S$1, u$1), w$1 = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w$1.attr("class", "basic label-container"), g$1 && t.look !== "handDrawn" && w$1.selectAll("path").attr("style", g$1), r && t.look !== "handDrawn" && w$1.selectAll("path").attr("style", r), D(t, w$1), t.intersect = function(B$1) {
		return N.polygon(t, b, B$1);
	}, e;
}
m$1(qs, "waveRectangle");
async function Xs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = 5, n$1 = -s / 2, p$1 = -l / 2, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S(t, {}), g$1 = [
		{
			x: n$1 - o,
			y: p$1 - o
		},
		{
			x: n$1 - o,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 - o
		}
	], y = `M${n$1 - o},${p$1 - o} L${n$1 + s},${p$1 - o} L${n$1 + s},${p$1 + l} L${n$1 - o},${p$1 + l} L${n$1 - o},${p$1 - o}
                M${n$1 - o},${p$1} L${n$1 + s},${p$1}
                M${n$1},${p$1 - o} L${n$1},${p$1 + l}`;
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let u$1 = /* @__PURE__ */ m$2.path(y, d$1), b = /* @__PURE__ */ e.insert(() => u$1, ":first-child");
	return b.attr("transform", `translate(${o / 2}, ${o / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) + o / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o / 2 - (a.y - (a.top ?? 0))})`), D(t, b), t.intersect = function(S$1) {
		return N.polygon(t, g$1, S$1);
	}, e;
}
m$1(Xs, "windowPane");
async function ye(c, t) {
	let i = t;
	if (i.alias && (t.label = i.alias), t.look === "handDrawn") {
		let { themeVariables: Y$1 } = Ot(), { background: J$1 } = Y$1, tt = {
			...t,
			id: t.id + "-background",
			look: "default",
			cssStyles: ["stroke: none", `fill: ${J$1}`]
		};
		await ye(c, tt);
	}
	let r = /* @__PURE__ */ Ot();
	t.useHtmlLabels = r.htmlLabels;
	let e = r.er?.diagramPadding ?? 10, a = r.er?.entityPadding ?? 6, { cssStyles: h } = t, { labelStyles: s, nodeStyles: l } = m(t);
	if (i.attributes.length === 0 && t.label) {
		let Y$1 = {
			rx: 0,
			ry: 0,
			labelPaddingX: e,
			labelPaddingY: e * 1.5,
			classes: ""
		};
		M(t.label, r) + Y$1.labelPaddingX * 2 < r.er.minEntityWidth && (t.width = r.er.minEntityWidth);
		let J$1 = await Dt(c, t, Y$1);
		if (!Mo(r.htmlLabels)) {
			let tt = /* @__PURE__ */ J$1.select("text"), at$1 = tt.node()?.getBBox();
			tt.attr("transform", `translate(${-at$1.width / 2}, 0)`);
		}
		return J$1;
	}
	r.htmlLabels || (e *= 1.25, a *= 1.25);
	let o = /* @__PURE__ */ P(t);
	o || (o = "node default");
	let n$1 = /* @__PURE__ */ c.insert("g").attr("class", o).attr("id", t.domId || t.id), p$1 = await Gt(n$1, t.label ?? "", r, 0, 0, ["name"], s);
	p$1.height += a;
	let f = 0, m$2 = [], d$1 = [], g$1 = 0, y = 0, u$1 = 0, b = 0, S$1 = !0, k = !0;
	for (let Y$1 of i.attributes) {
		let J$1 = await Gt(n$1, Y$1.type, r, 0, f, ["attribute-type"], s);
		g$1 = /* @__PURE__ */ Math.max(g$1, J$1.width + e);
		let tt = await Gt(n$1, Y$1.name, r, 0, f, ["attribute-name"], s);
		y = /* @__PURE__ */ Math.max(y, tt.width + e);
		let at$1 = await Gt(n$1, /* @__PURE__ */ Y$1.keys.join(), r, 0, f, ["attribute-keys"], s);
		u$1 = /* @__PURE__ */ Math.max(u$1, at$1.width + e);
		let St = await Gt(n$1, Y$1.comment, r, 0, f, ["attribute-comment"], s);
		b = /* @__PURE__ */ Math.max(b, St.width + e);
		let mt$1 = Math.max(J$1.height, tt.height, at$1.height, St.height) + a;
		d$1.push({
			yOffset: f,
			rowHeight: mt$1
		}), f += mt$1;
	}
	let w$1 = 4;
	u$1 <= e && (S$1 = !1, u$1 = 0, w$1--), b <= e && (k = !1, b = 0, w$1--);
	let B$1 = /* @__PURE__ */ n$1.node().getBBox();
	if (p$1.width + e * 2 - (g$1 + y + u$1 + b) > 0) {
		let Y$1 = p$1.width + e * 2 - (g$1 + y + u$1 + b);
		g$1 += Y$1 / w$1, y += Y$1 / w$1, u$1 > 0 && (u$1 += Y$1 / w$1), b > 0 && (b += Y$1 / w$1);
	}
	let T$1 = g$1 + y + u$1 + b, R$1 = /* @__PURE__ */ v.svg(n$1), E$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (E$1.roughness = 0, E$1.fillStyle = "solid");
	let L = 0;
	d$1.length > 0 && (L = /* @__PURE__ */ d$1.reduce((Y$1, J$1) => Y$1 + (J$1?.rowHeight ?? 0), 0));
	let O$1 = /* @__PURE__ */ Math.max(B$1.width + e * 2, t?.width || 0, T$1), V$1 = /* @__PURE__ */ Math.max((L ?? 0) + p$1.height, t?.height || 0), G$1 = -O$1 / 2, j$1 = -V$1 / 2;
	n$1.selectAll("g:not(:first-child)").each((Y$1, J$1, tt) => {
		let at$1 = /* @__PURE__ */ ia(tt[J$1]), St = /* @__PURE__ */ at$1.attr("transform"), mt$1 = 0, be$1 = 0;
		if (St) {
			let Qt$1 = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(St);
			Qt$1 && (mt$1 = /* @__PURE__ */ parseFloat(Qt$1[1]), be$1 = /* @__PURE__ */ parseFloat(Qt$1[2]), at$1.attr("class").includes("attribute-name") ? mt$1 += g$1 : at$1.attr("class").includes("attribute-keys") ? mt$1 += g$1 + y : at$1.attr("class").includes("attribute-comment") && (mt$1 += g$1 + y + u$1));
		}
		at$1.attr("transform", `translate(${G$1 + e / 2 + mt$1}, ${be$1 + j$1 + p$1.height + a / 2})`);
	}), n$1.select(".name").attr("transform", "translate(" + -p$1.width / 2 + ", " + (j$1 + a / 2) + ")");
	let W$1 = /* @__PURE__ */ R$1.rectangle(G$1, j$1, O$1, V$1, E$1), A$1 = /* @__PURE__ */ n$1.insert(() => W$1, ":first-child").attr("style", /* @__PURE__ */ h.join("")), { themeVariables: I } = Ot(), { rowEven: F, rowOdd: Q, nodeBorder: it$1 } = I;
	m$2.push(0);
	for (let [Y$1, J$1] of d$1.entries()) {
		let at$1 = (Y$1 + 1) % 2 === 0 && J$1.yOffset !== 0, St = /* @__PURE__ */ R$1.rectangle(G$1, p$1.height + j$1 + J$1?.yOffset, O$1, J$1?.rowHeight, {
			...E$1,
			fill: at$1 ? F : Q,
			stroke: it$1
		});
		n$1.insert(() => St, "g.label").attr("style", /* @__PURE__ */ h.join("")).attr("class", `row-rect-${at$1 ? "even" : "odd"}`);
	}
	let ct$1 = /* @__PURE__ */ R$1.line(G$1, p$1.height + j$1, O$1 + G$1, p$1.height + j$1, E$1);
	n$1.insert(() => ct$1).attr("class", "divider"), ct$1 = /* @__PURE__ */ R$1.line(g$1 + G$1, p$1.height + j$1, g$1 + G$1, V$1 + j$1, E$1), n$1.insert(() => ct$1).attr("class", "divider"), S$1 && (ct$1 = /* @__PURE__ */ R$1.line(g$1 + y + G$1, p$1.height + j$1, g$1 + y + G$1, V$1 + j$1, E$1), n$1.insert(() => ct$1).attr("class", "divider")), k && (ct$1 = /* @__PURE__ */ R$1.line(g$1 + y + u$1 + G$1, p$1.height + j$1, g$1 + y + u$1 + G$1, V$1 + j$1, E$1), n$1.insert(() => ct$1).attr("class", "divider"));
	for (let Y$1 of m$2) ct$1 = /* @__PURE__ */ R$1.line(G$1, p$1.height + j$1 + Y$1, O$1 + G$1, p$1.height + j$1 + Y$1, E$1), n$1.insert(() => ct$1).attr("class", "divider");
	if (D(t, A$1), l && t.look !== "handDrawn") {
		let J$1 = l.split(";")?.filter((tt) => tt.includes("stroke"))?.map((tt) => `${tt}`).join("; ");
		n$1.selectAll("path").attr("style", J$1 ?? ""), n$1.selectAll(".row-rect-even path").attr("style", l);
	}
	return t.intersect = function(Y$1) {
		return N.rect(t, Y$1);
	}, n$1;
}
m$1(ye, "erBox");
async function Gt(c, t, i, r = 0, e = 0, a = [], h = "") {
	let s = /* @__PURE__ */ c.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${r}, ${e})`).attr("style", h);
	t !== ln(t) && (t = /* @__PURE__ */ ln(t), t = /* @__PURE__ */ t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
	let l = /* @__PURE__ */ s.node().appendChild(await Rr(s, t, {
		width: M(t, i) + 100,
		style: h,
		useHtmlLabels: i.htmlLabels
	}, i));
	if (t.includes("&lt;") || t.includes("&gt;")) {
		let n$1 = l.children[0];
		for (n$1.textContent = /* @__PURE__ */ n$1.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); n$1.childNodes[0];) n$1 = n$1.childNodes[0], n$1.textContent = /* @__PURE__ */ n$1.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
	}
	let o = /* @__PURE__ */ l.getBBox();
	if (Mo(i.htmlLabels)) {
		let n$1 = l.children[0];
		n$1.style.textAlign = "start";
		let p$1 = /* @__PURE__ */ ia(l);
		o = /* @__PURE__ */ n$1.getBoundingClientRect(), p$1.attr("width", o.width), p$1.attr("height", o.height);
	}
	return o;
}
m$1(Gt, "addText");
async function Ys(c, t, i, r, e = i.class.padding ?? 12) {
	let a = r ? 0 : 3, h = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId || t.id), s = null, l = null, o = null, n$1 = null, p$1 = 0, f = 0, m$2 = 0;
	if (s = /* @__PURE__ */ h.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
		let b = t.annotations[0];
		await Zt(s, { text: `\xAB${b}\xBB` }, 0), p$1 = s.node().getBBox().height;
	}
	l = /* @__PURE__ */ h.insert("g").attr("class", "label-group text"), await Zt(l, t, 0, ["font-weight: bolder"]);
	let d$1 = /* @__PURE__ */ l.node().getBBox();
	f = d$1.height, o = /* @__PURE__ */ h.insert("g").attr("class", "members-group text");
	let g$1 = 0;
	for (let b of t.members) {
		let S$1 = await Zt(o, b, g$1, [/* @__PURE__ */ b.parseClassifier()]);
		g$1 += S$1 + a;
	}
	m$2 = o.node().getBBox().height, m$2 <= 0 && (m$2 = e / 2), n$1 = /* @__PURE__ */ h.insert("g").attr("class", "methods-group text");
	let y = 0;
	for (let b of t.methods) {
		let S$1 = await Zt(n$1, b, y, [/* @__PURE__ */ b.parseClassifier()]);
		y += S$1 + a;
	}
	let u$1 = /* @__PURE__ */ h.node().getBBox();
	if (s !== null) {
		let b = /* @__PURE__ */ s.node().getBBox();
		s.attr("transform", `translate(${-b.width / 2})`);
	}
	return l.attr("transform", `translate(${-d$1.width / 2}, ${p$1})`), u$1 = /* @__PURE__ */ h.node().getBBox(), o.attr("transform", `translate(0, ${p$1 + f + e * 2})`), u$1 = /* @__PURE__ */ h.node().getBBox(), n$1.attr("transform", `translate(0, ${p$1 + f + (m$2 ? m$2 + e * 4 : e * 2)})`), u$1 = /* @__PURE__ */ h.node().getBBox(), {
		shapeSvg: h,
		bbox: u$1
	};
}
m$1(Ys, "textHelper");
async function Zt(c, t, i, r = []) {
	let e = /* @__PURE__ */ c.insert("g").attr("class", "label").attr("style", /* @__PURE__ */ r.join("; ")), a = /* @__PURE__ */ Ot(), h = "useHtmlLabels" in t ? t.useHtmlLabels : Mo(a.htmlLabels) ?? !0, s = "";
	"text" in t ? s = t.text : s = t.label, !h && s.startsWith("\\") && (s = /* @__PURE__ */ s.substring(1)), nr(s) && (h = !0);
	let l = await Rr(e, /* @__PURE__ */ Xo(/* @__PURE__ */ Yt(s)), {
		width: M(s, a) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: h
	}, a), o, n$1 = 1;
	if (h) {
		let p$1 = l.children[0], f = /* @__PURE__ */ ia(l);
		n$1 = p$1.innerHTML.split("<br>").length, p$1.innerHTML.includes("</math>") && (n$1 += p$1.innerHTML.split("<mrow>").length - 1);
		let m$2 = /* @__PURE__ */ p$1.getElementsByTagName("img");
		if (m$2) {
			let d$1 = s.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all(/* @__PURE__ */ [...m$2].map((g$1) => new Promise((y) => {
				function u$1() {
					if (g$1.style.display = "flex", g$1.style.flexDirection = "column", d$1) {
						let b = a.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, k = parseInt(b, 10) * 5 + "px";
						g$1.style.minWidth = k, g$1.style.maxWidth = k;
					} else g$1.style.width = "100%";
					y(g$1);
				}
				m$1(u$1, "setupImage"), setTimeout(() => {
					g$1.complete && u$1();
				}), g$1.addEventListener("error", u$1), g$1.addEventListener("load", u$1);
			})));
		}
		o = /* @__PURE__ */ p$1.getBoundingClientRect(), f.attr("width", o.width), f.attr("height", o.height);
	} else {
		r.includes("font-weight: bolder") && ia(l).selectAll("tspan").attr("font-weight", ""), n$1 = l.children.length;
		let p$1 = l.children[0];
		(l.textContent === "" || l.textContent.includes("&gt")) && (p$1.textContent = s[0] + s.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s[1] === " " && (p$1.textContent = p$1.textContent[0] + " " + p$1.textContent.substring(1))), p$1.textContent === "undefined" && (p$1.textContent = ""), o = /* @__PURE__ */ l.getBBox();
	}
	return e.attr("transform", "translate(0," + (-o.height / (2 * n$1) + i) + ")"), o.height;
}
m$1(Zt, "addText");
async function Zs(c, t) {
	let i = /* @__PURE__ */ mr(), r = i.class.padding ?? 12, e = r, a = t.useHtmlLabels ?? Mo(i.htmlLabels) ?? !0, h = t;
	h.annotations = h.annotations ?? [], h.members = h.members ?? [], h.methods = h.methods ?? [];
	let { shapeSvg: s, bbox: l } = await Ys(c, t, i, a, e), { labelStyles: o, nodeStyles: n$1 } = m(t);
	t.labelStyle = o, t.cssStyles = h.styles || "";
	let p$1 = h.styles?.join(";") || n$1 || "";
	t.cssStyles || (t.cssStyles = /* @__PURE__ */ p$1.replaceAll("!important", "").split(";"));
	let f = h.members.length === 0 && h.methods.length === 0 && !i.class?.hideEmptyMembersBox, m$2 = /* @__PURE__ */ v.svg(s), d$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = l.width, y = l.height;
	h.members.length === 0 && h.methods.length === 0 ? y += e : h.members.length > 0 && h.methods.length === 0 && (y += e * 2);
	let u$1 = -g$1 / 2, b = -y / 2, S$1 = /* @__PURE__ */ m$2.rectangle(u$1 - r, b - r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0), g$1 + 2 * r, y + 2 * r + (f ? r * 2 : h.members.length === 0 && h.methods.length === 0 ? -r : 0), d$1), k = /* @__PURE__ */ s.insert(() => S$1, ":first-child");
	k.attr("class", "basic label-container");
	let w$1 = /* @__PURE__ */ k.node().getBBox();
	s.selectAll(".text").each((E$1, L, O$1) => {
		let V$1 = /* @__PURE__ */ ia(O$1[L]), G$1 = /* @__PURE__ */ V$1.attr("transform"), j$1 = 0;
		if (G$1) {
			let F = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(G$1);
			F && (j$1 = /* @__PURE__ */ parseFloat(F[2]));
		}
		let W$1 = j$1 + b + r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0);
		a || (W$1 -= 4);
		let A$1 = u$1;
		(V$1.attr("class").includes("label-group") || V$1.attr("class").includes("annotation-group")) && (A$1 = -V$1.node()?.getBBox().width / 2 || 0, s.selectAll("text").each(function(I, F, Q) {
			window.getComputedStyle(Q[F]).textAnchor === "middle" && (A$1 = 0);
		})), V$1.attr("transform", `translate(${A$1}, ${W$1})`);
	});
	let B$1 = s.select(".annotation-group").node().getBBox().height - (f ? r / 2 : 0) || 0, T$1 = s.select(".label-group").node().getBBox().height - (f ? r / 2 : 0) || 0, R$1 = s.select(".members-group").node().getBBox().height - (f ? r / 2 : 0) || 0;
	if (h.members.length > 0 || h.methods.length > 0 || f) {
		let E$1 = /* @__PURE__ */ m$2.line(w$1.x, B$1 + T$1 + b + r, w$1.x + w$1.width, B$1 + T$1 + b + r, d$1);
		s.insert(() => E$1).attr("class", "divider").attr("style", p$1);
	}
	if (f || h.members.length > 0 || h.methods.length > 0) {
		let E$1 = /* @__PURE__ */ m$2.line(w$1.x, B$1 + T$1 + R$1 + b + e * 2 + r, w$1.x + w$1.width, B$1 + T$1 + R$1 + b + r + e * 2, d$1);
		s.insert(() => E$1).attr("class", "divider").attr("style", p$1);
	}
	if (h.look !== "handDrawn" && s.selectAll("path").attr("style", p$1), k.select(":nth-child(2)").attr("style", p$1), s.selectAll(".divider").select("path").attr("style", p$1), t.labelStyle ? s.selectAll("span").attr("style", t.labelStyle) : s.selectAll("span").attr("style", p$1), !a) {
		let E$1 = /* @__PURE__ */ RegExp(/color\s*:\s*([^;]*)/), L = /* @__PURE__ */ E$1.exec(p$1);
		if (L) {
			let O$1 = /* @__PURE__ */ L[0].replace("color", "fill");
			s.selectAll("tspan").attr("style", O$1);
		} else if (o) {
			let O$1 = /* @__PURE__ */ E$1.exec(o);
			if (O$1) {
				let V$1 = /* @__PURE__ */ O$1[0].replace("color", "fill");
				s.selectAll("tspan").attr("style", V$1);
			}
		}
	}
	return D(t, k), t.intersect = function(E$1) {
		return N.rect(t, E$1);
	}, s;
}
m$1(Zs, "classBox");
async function Us(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let e = t, a = t, h = 20, s = 20, l = "verifyMethod" in t, o = /* @__PURE__ */ P(t), n$1 = /* @__PURE__ */ c.insert("g").attr("class", o).attr("id", t.domId ?? t.id), p$1;
	l ? p$1 = await pt$1(n$1, `&lt;&lt;${e.type}&gt;&gt;`, 0, t.labelStyle) : p$1 = await pt$1(n$1, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
	let f = p$1, m$2 = await pt$1(n$1, e.name, f, t.labelStyle + "; font-weight: bold;");
	if (f += m$2 + s, l) {
		let B$1 = await pt$1(n$1, `${e.requirementId ? `ID: ${e.requirementId}` : ""}`, f, t.labelStyle);
		f += B$1;
		let T$1 = await pt$1(n$1, `${e.text ? `Text: ${e.text}` : ""}`, f, t.labelStyle);
		f += T$1;
		let R$1 = await pt$1(n$1, `${e.risk ? `Risk: ${e.risk}` : ""}`, f, t.labelStyle);
		f += R$1, await pt$1(n$1, `${e.verifyMethod ? `Verification: ${e.verifyMethod}` : ""}`, f, t.labelStyle);
	} else {
		let B$1 = await pt$1(n$1, `${a.type ? `Type: ${a.type}` : ""}`, f, t.labelStyle);
		f += B$1, await pt$1(n$1, `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`, f, t.labelStyle);
	}
	let d$1 = (n$1.node()?.getBBox().width ?? 200) + h, g$1 = (n$1.node()?.getBBox().height ?? 200) + h, y = -d$1 / 2, u$1 = -g$1 / 2, b = /* @__PURE__ */ v.svg(n$1), S$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
	let k = /* @__PURE__ */ b.rectangle(y, u$1, d$1, g$1, S$1), w$1 = /* @__PURE__ */ n$1.insert(() => k, ":first-child");
	if (w$1.attr("class", "basic label-container").attr("style", r), n$1.selectAll(".label").each((B$1, T$1, R$1) => {
		let E$1 = /* @__PURE__ */ ia(R$1[T$1]), L = /* @__PURE__ */ E$1.attr("transform"), O$1 = 0, V$1 = 0;
		if (L) {
			let A$1 = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(L);
			A$1 && (O$1 = /* @__PURE__ */ parseFloat(A$1[1]), V$1 = /* @__PURE__ */ parseFloat(A$1[2]));
		}
		let G$1 = V$1 - g$1 / 2, j$1 = y + h / 2;
		(T$1 === 0 || T$1 === 1) && (j$1 = O$1), E$1.attr("transform", `translate(${j$1}, ${G$1 + h})`);
	}), f > p$1 + m$2 + s) {
		let B$1 = /* @__PURE__ */ b.line(y, u$1 + p$1 + m$2 + s, y + d$1, u$1 + p$1 + m$2 + s, S$1);
		n$1.insert(() => B$1).attr("style", r);
	}
	return D(t, w$1), t.intersect = function(B$1) {
		return N.rect(t, B$1);
	}, n$1;
}
m$1(Us, "requirementBox");
async function pt$1(c, t, i, r = "") {
	if (t === "") return 0;
	let e = /* @__PURE__ */ c.insert("g").attr("class", "label").attr("style", r), a = /* @__PURE__ */ mr(), h = a.htmlLabels ?? !0, s = await Rr(e, /* @__PURE__ */ Xo(/* @__PURE__ */ Yt(t)), {
		width: M(t, a) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: h,
		style: r
	}, a), l;
	if (h) {
		let o = s.children[0], n$1 = /* @__PURE__ */ ia(s);
		l = /* @__PURE__ */ o.getBoundingClientRect(), n$1.attr("width", l.width), n$1.attr("height", l.height);
	} else {
		let o = s.children[0];
		for (let n$1 of o.children) n$1.textContent = /* @__PURE__ */ n$1.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), r && n$1.setAttribute("style", r);
		l = /* @__PURE__ */ s.getBBox(), l.height += 6;
	}
	return e.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + i})`), l.height;
}
m$1(pt$1, "addText");
var Ar = /* @__PURE__ */ m$1((c) => {
	switch (c) {
		case "Very High": return "red";
		case "High": return "orange";
		case "Medium": return null;
		case "Low": return "blue";
		case "Very Low": return "lightblue";
	}
}, "colorFromPriority");
async function Qs(c, t, { config: i }) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r || "";
	let a = 10, h = t.width;
	t.width = (t.width ?? 200) - 10;
	let { shapeSvg: s, bbox: l, label: o } = await C(c, t, /* @__PURE__ */ P(t)), n$1 = t.padding || 10, p$1 = "", f;
	"ticket" in t && t.ticket && i?.kanban?.ticketBaseUrl && (p$1 = i?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), f = /* @__PURE__ */ s.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p$1).attr("target", "_blank"));
	let m$2 = {
		useHtmlLabels: t.useHtmlLabels,
		labelStyle: t.labelStyle || "",
		width: t.width,
		img: t.img,
		padding: t.padding || 8,
		centerLabel: !1
	}, d$1, g$1;
	f ? {label: d$1, bbox: g$1} = await At(f, "ticket" in t && t.ticket || "", m$2) : {label: d$1, bbox: g$1} = await At(s, "ticket" in t && t.ticket || "", m$2);
	let { label: y, bbox: u$1 } = await At(s, "assigned" in t && t.assigned || "", m$2);
	t.width = h;
	let b = 10, S$1 = t?.width || 0, k = Math.max(g$1.height, u$1.height) / 2, w$1 = Math.max(l.height + b * 2, t?.height || 0) + k, B$1 = -S$1 / 2, T$1 = -w$1 / 2;
	o.attr("transform", "translate(" + (n$1 - S$1 / 2) + ", " + (-k - l.height / 2) + ")"), d$1.attr("transform", "translate(" + (n$1 - S$1 / 2) + ", " + (-k + l.height / 2) + ")"), y.attr("transform", "translate(" + (n$1 + S$1 / 2 - u$1.width - 2 * a) + ", " + (-k + l.height / 2) + ")");
	let R$1, { rx: E$1, ry: L } = t, { cssStyles: O$1 } = t;
	if (t.look === "handDrawn") {
		let V$1 = /* @__PURE__ */ v.svg(s), G$1 = /* @__PURE__ */ S(t, {}), j$1 = E$1 || L ? V$1.path(/* @__PURE__ */ st(B$1, T$1, S$1, w$1, E$1 || 0), G$1) : V$1.rectangle(B$1, T$1, S$1, w$1, G$1);
		R$1 = /* @__PURE__ */ s.insert(() => j$1, ":first-child"), R$1.attr("class", "basic label-container").attr("style", O$1 || null);
	} else {
		R$1 = /* @__PURE__ */ s.insert("rect", ":first-child"), R$1.attr("class", "basic label-container __APA__").attr("style", e).attr("rx", E$1 ?? 5).attr("ry", L ?? 5).attr("x", B$1).attr("y", T$1).attr("width", S$1).attr("height", w$1);
		let V$1 = "priority" in t && t.priority;
		if (V$1) {
			let G$1 = /* @__PURE__ */ s.append("line"), j$1 = B$1 + 2, W$1 = T$1 + Math.floor((E$1 ?? 0) / 2), A$1 = T$1 + w$1 - Math.floor((E$1 ?? 0) / 2);
			G$1.attr("x1", j$1).attr("y1", W$1).attr("x2", j$1).attr("y2", A$1).attr("stroke-width", "4").attr("stroke", /* @__PURE__ */ Ar(V$1));
		}
	}
	return D(t, R$1), t.height = w$1, t.intersect = function(V$1) {
		return N.rect(t, V$1);
	}, s;
}
m$1(Qs, "kanbanItem");
async function Js(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width + 10 * h, o = a.height + 8 * h, n$1 = .15 * l, { cssStyles: p$1 } = t, f = a.width + 20, m$2 = a.height + 20, d$1 = /* @__PURE__ */ Math.max(l, f), g$1 = /* @__PURE__ */ Math.max(o, m$2);
	s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`);
	let y, u$1 = `M0 0 
    a${n$1},${n$1} 1 0,0 ${d$1 * .25},${-1 * g$1 * .1}
    a${n$1},${n$1} 1 0,0 ${d$1 * .25},0
    a${n$1},${n$1} 1 0,0 ${d$1 * .25},0
    a${n$1},${n$1} 1 0,0 ${d$1 * .25},${g$1 * .1}

    a${n$1},${n$1} 1 0,0 ${d$1 * .15},${g$1 * .33}
    a${n$1 * .8},${n$1 * .8} 1 0,0 0,${g$1 * .34}
    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .15},${g$1 * .33}

    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .25},${g$1 * .15}
    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .25},0
    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .25},0
    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .25},${-1 * g$1 * .15}

    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .1},${-1 * g$1 * .33}
    a${n$1 * .8},${n$1 * .8} 1 0,0 0,${-1 * g$1 * .34}
    a${n$1},${n$1} 1 0,0 ${d$1 * .1},${-1 * g$1 * .33}
  H0 V0 Z`;
	if (t.look === "handDrawn") {
		let b = /* @__PURE__ */ v.svg(e), S$1 = /* @__PURE__ */ S(t, {}), k = /* @__PURE__ */ b.path(u$1, S$1);
		y = /* @__PURE__ */ e.insert(() => k, ":first-child"), y.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(p$1));
	} else y = /* @__PURE__ */ e.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", u$1);
	return y.attr("transform", `translate(${-d$1 / 2}, ${-g$1 / 2})`), D(t, y), t.calcIntersect = function(b, S$1) {
		return N.rect(b, S$1);
	}, t.intersect = function(b) {
		return pt.info("Bang intersect", t, b), N.rect(t, b);
	}, e;
}
m$1(Js, "bang");
async function Ks(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width + 2 * h, o = a.height + 2 * h, n$1 = .15 * l, p$1 = .25 * l, f = .35 * l, m$2 = .2 * l, { cssStyles: d$1 } = t, g$1, y = `M0 0 
    a${n$1},${n$1} 0 0,1 ${l * .25},${-1 * l * .1}
    a${f},${f} 1 0,1 ${l * .4},${-1 * l * .1}
    a${p$1},${p$1} 1 0,1 ${l * .35},${l * .2}

    a${n$1},${n$1} 1 0,1 ${l * .15},${o * .35}
    a${m$2},${m$2} 1 0,1 ${-1 * l * .15},${o * .65}

    a${p$1},${n$1} 1 0,1 ${-1 * l * .25},${l * .15}
    a${f},${f} 1 0,1 ${-1 * l * .5},0
    a${n$1},${n$1} 1 0,1 ${-1 * l * .25},${-1 * l * .15}

    a${n$1},${n$1} 1 0,1 ${-1 * l * .1},${-1 * o * .35}
    a${m$2},${m$2} 1 0,1 ${l * .1},${-1 * o * .65}
  H0 V0 Z`;
	if (t.look === "handDrawn") {
		let u$1 = /* @__PURE__ */ v.svg(e), b = /* @__PURE__ */ S(t, {}), S$1 = /* @__PURE__ */ u$1.path(y, b);
		g$1 = /* @__PURE__ */ e.insert(() => S$1, ":first-child"), g$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(d$1));
	} else g$1 = /* @__PURE__ */ e.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", y);
	return s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), g$1.attr("transform", `translate(${-l / 2}, ${-o / 2})`), D(t, g$1), t.calcIntersect = function(u$1, b) {
		return N.rect(u$1, b);
	}, t.intersect = function(u$1) {
		return pt.info("Cloud intersect", t, u$1), N.rect(t, u$1);
	}, e;
}
m$1(Ks, "cloud");
async function tr(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width + 8 * h, o = a.height + 2 * h, n$1 = 5, p$1 = `
    M${-l / 2} ${o / 2 - n$1}
    v${-o + 2 * n$1}
    q0,-${n$1} ${n$1},-${n$1}
    h${l - 2 * n$1}
    q${n$1},0 ${n$1},${n$1}
    v${o - 2 * n$1}
    q0,${n$1} -${n$1},${n$1}
    h${-l + 2 * n$1}
    q-${n$1},0 -${n$1},-${n$1}
    Z
  `, f = /* @__PURE__ */ e.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr("style", r).attr("d", p$1);
	return e.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", o / 2).attr("x2", l / 2).attr("y2", o / 2), s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), e.append(() => s.node()), D(t, f), t.calcIntersect = function(m$2, d$1) {
		return N.rect(m$2, d$1);
	}, t.intersect = function(m$2) {
		return N.rect(t, m$2);
	}, e;
}
m$1(tr, "defaultMindmapNode");
async function er(c, t) {
	let i = { padding: t.padding ?? 0 };
	return Xt(c, t, i);
}
m$1(er, "mindmapCircle");
var Or = [
	{
		semanticName: "Process",
		name: "Rectangle",
		shortName: "rect",
		description: "Standard process shape",
		aliases: [
			"proc",
			"process",
			"rectangle"
		],
		internalAliases: ["squareRect"],
		handler: Rs
	},
	{
		semanticName: "Event",
		name: "Rounded Rectangle",
		shortName: "rounded",
		description: "Represents an event",
		aliases: ["event"],
		internalAliases: ["roundedRect"],
		handler: Bs
	},
	{
		semanticName: "Terminal Point",
		name: "Stadium",
		shortName: "stadium",
		description: "Terminal point",
		aliases: ["terminal", "pill"],
		handler: Gs
	},
	{
		semanticName: "Subprocess",
		name: "Framed Rectangle",
		shortName: "fr-rect",
		description: "Subprocess",
		aliases: [
			"subprocess",
			"subproc",
			"framed-rectangle",
			"subroutine"
		],
		handler: Os
	},
	{
		semanticName: "Database",
		name: "Cylinder",
		shortName: "cyl",
		description: "Database storage",
		aliases: [
			"db",
			"database",
			"cylinder"
		],
		handler: ss
	},
	{
		semanticName: "Start",
		name: "Circle",
		shortName: "circle",
		description: "Starting point",
		aliases: ["circ"],
		handler: Xt
	},
	{
		semanticName: "Bang",
		name: "Bang",
		shortName: "bang",
		description: "Bang",
		aliases: ["bang"],
		handler: Js
	},
	{
		semanticName: "Cloud",
		name: "Cloud",
		shortName: "cloud",
		description: "cloud",
		aliases: ["cloud"],
		handler: Ks
	},
	{
		semanticName: "Decision",
		name: "Diamond",
		shortName: "diam",
		description: "Decision-making step",
		aliases: [
			"decision",
			"diamond",
			"question"
		],
		handler: Ms
	},
	{
		semanticName: "Prepare Conditional",
		name: "Hexagon",
		shortName: "hex",
		description: "Preparation or condition step",
		aliases: ["hexagon", "prepare"],
		handler: cs
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Right",
		shortName: "lean-r",
		description: "Represents input or output",
		aliases: ["lean-right", "in-out"],
		internalAliases: ["lean_right"],
		handler: bs
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Left",
		shortName: "lean-l",
		description: "Represents output or input",
		aliases: ["lean-left", "out-in"],
		internalAliases: ["lean_left"],
		handler: xs
	},
	{
		semanticName: "Priority Action",
		name: "Trapezoid Base Bottom",
		shortName: "trap-b",
		description: "Priority action",
		aliases: [
			"priority",
			"trapezoid-bottom",
			"trapezoid"
		],
		handler: Is
	},
	{
		semanticName: "Manual Operation",
		name: "Trapezoid Base Top",
		shortName: "trap-t",
		description: "Represents a manual task",
		aliases: [
			"manual",
			"trapezoid-top",
			"inv-trapezoid"
		],
		internalAliases: ["inv_trapezoid"],
		handler: us
	},
	{
		semanticName: "Stop",
		name: "Double Circle",
		shortName: "dbl-circ",
		description: "Represents a stop point",
		aliases: ["double-circle"],
		internalAliases: ["doublecircle"],
		handler: as
	},
	{
		semanticName: "Text Block",
		name: "Text Block",
		shortName: "text",
		description: "Text block",
		handler: Vs
	},
	{
		semanticName: "Card",
		name: "Notched Rectangle",
		shortName: "notch-rect",
		description: "Represents a card",
		aliases: ["card", "notched-rectangle"],
		handler: Ze
	},
	{
		semanticName: "Lined/Shaded Process",
		name: "Lined Rectangle",
		shortName: "lin-rect",
		description: "Lined process shape",
		aliases: [
			"lined-rectangle",
			"lined-process",
			"lin-proc",
			"shaded-process"
		],
		handler: Cs
	},
	{
		semanticName: "Start",
		name: "Small Circle",
		shortName: "sm-circ",
		description: "Small starting point",
		aliases: ["start", "small-circle"],
		internalAliases: ["stateStart"],
		handler: As
	},
	{
		semanticName: "Stop",
		name: "Framed Circle",
		shortName: "fr-circ",
		description: "Stop point",
		aliases: ["stop", "framed-circle"],
		internalAliases: ["stateEnd"],
		handler: js
	},
	{
		semanticName: "Fork/Join",
		name: "Filled Rectangle",
		shortName: "fork",
		description: "Fork or join in process flow",
		aliases: ["join"],
		internalAliases: ["forkJoin"],
		handler: ns
	},
	{
		semanticName: "Collate",
		name: "Hourglass",
		shortName: "hourglass",
		description: "Represents a collate operation",
		aliases: ["hourglass", "collate"],
		handler: hs
	},
	{
		semanticName: "Comment",
		name: "Curly Brace",
		shortName: "brace",
		description: "Adds a comment",
		aliases: ["comment", "brace-l"],
		handler: Je
	},
	{
		semanticName: "Comment Right",
		name: "Curly Brace",
		shortName: "brace-r",
		description: "Adds a comment",
		handler: Ke
	},
	{
		semanticName: "Comment with braces on both sides",
		name: "Curly Braces",
		shortName: "braces",
		description: "Adds a comment",
		handler: ts
	},
	{
		semanticName: "Com Link",
		name: "Lightning Bolt",
		shortName: "bolt",
		description: "Communication link",
		aliases: ["com-link", "lightning-bolt"],
		handler: Ss
	},
	{
		semanticName: "Document",
		name: "Document",
		shortName: "doc",
		description: "Represents a document",
		aliases: ["doc", "document"],
		handler: zs
	},
	{
		semanticName: "Delay",
		name: "Half-Rounded Rectangle",
		shortName: "delay",
		description: "Represents a delay",
		aliases: ["half-rounded-rectangle"],
		handler: ls
	},
	{
		semanticName: "Direct Access Storage",
		name: "Horizontal Cylinder",
		shortName: "h-cyl",
		description: "Direct access storage",
		aliases: ["das", "horizontal-cylinder"],
		handler: Ws
	},
	{
		semanticName: "Disk Storage",
		name: "Lined Cylinder",
		shortName: "lin-cyl",
		description: "Disk storage",
		aliases: ["disk", "lined-cylinder"],
		handler: ws
	},
	{
		semanticName: "Display",
		name: "Curved Trapezoid",
		shortName: "curv-trap",
		description: "Represents a display",
		aliases: ["curved-trapezoid", "display"],
		handler: es
	},
	{
		semanticName: "Divided Process",
		name: "Divided Rectangle",
		shortName: "div-rect",
		description: "Divided process shape",
		aliases: [
			"div-proc",
			"divided-rectangle",
			"divided-process"
		],
		handler: rs
	},
	{
		semanticName: "Extract",
		name: "Triangle",
		shortName: "tri",
		description: "Extraction process",
		aliases: ["extract", "triangle"],
		handler: _s
	},
	{
		semanticName: "Internal Storage",
		name: "Window Pane",
		shortName: "win-pane",
		description: "Internal storage",
		aliases: ["internal-storage", "window-pane"],
		handler: Xs
	},
	{
		semanticName: "Junction",
		name: "Filled Circle",
		shortName: "f-circ",
		description: "Junction point",
		aliases: ["junction", "filled-circle"],
		handler: os
	},
	{
		semanticName: "Loop Limit",
		name: "Trapezoidal Pentagon",
		shortName: "notch-pent",
		description: "Loop limit step",
		aliases: ["loop-limit", "notched-pentagon"],
		handler: Fs
	},
	{
		semanticName: "Manual File",
		name: "Flipped Triangle",
		shortName: "flip-tri",
		description: "Manual file operation",
		aliases: ["manual-file", "flipped-triangle"],
		handler: is
	},
	{
		semanticName: "Manual Input",
		name: "Sloped Rectangle",
		shortName: "sl-rect",
		description: "Manual input step",
		aliases: ["manual-input", "sloped-rectangle"],
		handler: Ts
	},
	{
		semanticName: "Multi-Document",
		name: "Stacked Document",
		shortName: "docs",
		description: "Multiple documents",
		aliases: [
			"documents",
			"st-doc",
			"stacked-document"
		],
		handler: Ds
	},
	{
		semanticName: "Multi-Process",
		name: "Stacked Rectangle",
		shortName: "st-rect",
		description: "Multiple processes",
		aliases: [
			"procs",
			"processes",
			"stacked-rectangle"
		],
		handler: $s
	},
	{
		semanticName: "Stored Data",
		name: "Bow Tie Rectangle",
		shortName: "bow-rect",
		description: "Stored data",
		aliases: ["stored-data", "bow-tie-rectangle"],
		handler: Ye
	},
	{
		semanticName: "Summary",
		name: "Crossed Circle",
		shortName: "cross-circ",
		description: "Summary",
		aliases: ["summary", "crossed-circle"],
		handler: Qe
	},
	{
		semanticName: "Tagged Document",
		name: "Tagged Document",
		shortName: "tag-doc",
		description: "Tagged document",
		aliases: ["tag-doc", "tagged-document"],
		handler: Hs
	},
	{
		semanticName: "Tagged Process",
		name: "Tagged Rectangle",
		shortName: "tag-rect",
		description: "Tagged process",
		aliases: [
			"tagged-rectangle",
			"tag-proc",
			"tagged-process"
		],
		handler: Ls
	},
	{
		semanticName: "Paper Tape",
		name: "Flag",
		shortName: "flag",
		description: "Paper tape",
		aliases: ["paper-tape"],
		handler: qs
	},
	{
		semanticName: "Odd",
		name: "Odd",
		shortName: "odd",
		description: "Odd shape",
		internalAliases: ["rect_left_inv_arrow"],
		handler: ks
	},
	{
		semanticName: "Lined Document",
		name: "Lined Document",
		shortName: "lin-doc",
		description: "Lined document",
		aliases: ["lined-document"],
		handler: Ns
	}
], xe = /* @__PURE__ */ m$1(() => {
	let t = [.../* @__PURE__ */ Object.entries({
		state: Es,
		choice: Ue,
		note: vs,
		rectWithTitle: Ps,
		labelRect: ys,
		iconSquare: ds,
		iconCircle: ms,
		icon: ps,
		iconRounded: fs,
		imageSquare: gs,
		anchor: qe,
		kanbanItem: Qs,
		mindmapCircle: er,
		defaultMindmapNode: tr,
		classBox: Zs,
		erBox: ye,
		requirementBox: Us
	}), .../* @__PURE__ */ Or.flatMap((i) => [
		i.shortName,
		..."aliases" in i ? i.aliases : [],
		..."internalAliases" in i ? i.internalAliases : []
	].map((e) => [e, i.handler]))];
	return Object.fromEntries(t);
}, "generateShapeMap")();
function Md(c) {
	return c in xe;
}
m$1(Md, "isValidShape");
var Ut = /* @__PURE__ */ new Map();
async function Td(c, t, i) {
	let r, e;
	t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
	let a = t.shape ? xe[t.shape] : void 0;
	if (!a) throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
	if (t.link) {
		let h;
		i.config.securityLevel === "sandbox" ? h = "_top" : t.linkTarget && (h = t.linkTarget || "_blank"), r = /* @__PURE__ */ c.insert("svg:a").attr("xlink:href", t.link).attr("target", h ?? null), e = await a(r, t, i);
	} else e = await a(c, t, i), r = e;
	return t.tooltip && e.attr("title", t.tooltip), Ut.set(t.id, r), t.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
}
m$1(Td, "insertNode");
var Rd = /* @__PURE__ */ m$1((c, t) => {
	Ut.set(t.id, c);
}, "setNodeElem"), Gd = /* @__PURE__ */ m$1(() => {
	Ut.clear();
}, "clear"), Ed = /* @__PURE__ */ m$1((c) => {
	let t = /* @__PURE__ */ Ut.get(c.id);
	pt.trace("Transforming node", c.diff, c, "translate(" + (c.x - c.width / 2 - 5) + ", " + c.width / 2 + ")");
	let i = 8, r = c.diff || 0;
	return c.clusterNode ? t.attr("transform", "translate(" + (c.x + r - c.width / 2) + ", " + (c.y - c.height / 2 - i) + ")") : t.attr("transform", "translate(" + c.x + ", " + c.y + ")"), r;
}, "positionNode");
export { tn as _, Md as a, Td as c, xa as d, n as f, Rr as g, Hn as h, Gd as i, ba as l, Ce$1 as m, D as n, Rd as o, $r$1 as p, Ed as r, Rt as s, C as t, v as u, ut$1 as v, ve as y };
