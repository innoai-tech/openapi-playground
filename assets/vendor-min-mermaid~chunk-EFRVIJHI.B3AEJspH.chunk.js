import { $t as pt, Ct as Lc, D as Ti, Dt as Qs, Et as Qc, Gt as Zs, Lt as Wc, Nt as Vc, Ot as Rs, Pt as Vn, St as Kc, U as hn, Ut as Zc, Vt as Xc, Z as os, _t as Gc, an as zs, ft as Bc, gt as Es, h as Jt, in as zc, it as v, lt as $s, qt as ia, tn as qc, vt as Hc, xt as Jc } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Q as n, X as qs, Y as ki, Z as m, et as q } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var g = /* @__PURE__ */ n((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	e.BLANK_URL = e.relativeFirstCharacters = e.whitespaceEscapeCharsRegex = e.urlSchemeRegex = e.ctrlCharactersRegex = e.htmlCtrlEntityRegex = e.htmlEntitiesRegex = e.invalidProtocolRegex = void 0;
	e.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
	e.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
	e.htmlCtrlEntityRegex = /&(newline|tab);/gi;
	e.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
	e.urlSchemeRegex = /^.+(:|&colon;)/gim;
	e.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
	e.relativeFirstCharacters = [".", "/"];
	e.BLANK_URL = "about:blank";
});
var f = /* @__PURE__ */ n((h) => {
	Object.defineProperty(h, "__esModule", { value: !0 });
	h.sanitizeUrl = void 0;
	var t = /* @__PURE__ */ g();
	function v$1(r) {
		return t.relativeFirstCharacters.indexOf(r[0]) > -1;
	}
	m(v$1, "isRelativeUrlWithoutProtocol");
	function x(r) {
		return r.replace(t.ctrlCharactersRegex, "").replace(t.htmlEntitiesRegex, function(a, i) {
			return String.fromCharCode(i);
		});
	}
	m(x, "decodeHtmlCharacters");
	function C$1(r) {
		return URL.canParse(r);
	}
	m(C$1, "isValidUrl");
	function d(r) {
		try {
			return decodeURIComponent(r);
		} catch {
			return r;
		}
	}
	m(d, "decodeURI");
	function p(r) {
		if (!r) return t.BLANK_URL;
		var c, a = /* @__PURE__ */ d(/* @__PURE__ */ r.trim());
		do
			a = /* @__PURE__ */ x(a).replace(t.htmlCtrlEntityRegex, "").replace(t.ctrlCharactersRegex, "").replace(t.whitespaceEscapeCharsRegex, "").trim(), a = /* @__PURE__ */ d(a), c = a.match(t.ctrlCharactersRegex) || a.match(t.htmlEntitiesRegex) || a.match(t.htmlCtrlEntityRegex) || a.match(t.whitespaceEscapeCharsRegex);
		while (c && c.length > 0);
		var i = a;
		if (!i) return t.BLANK_URL;
		if (v$1(i)) return i;
		var u = /* @__PURE__ */ i.trimStart(), m$1 = /* @__PURE__ */ u.match(t.urlSchemeRegex);
		if (!m$1) return i;
		var l = /* @__PURE__ */ m$1[0].toLowerCase().trim();
		if (t.invalidProtocolRegex.test(l)) return t.BLANK_URL;
		var s = /* @__PURE__ */ u.replace(/\\/g, "/");
		if (l === "mailto:" || l.includes("://")) return s;
		if (l === "http:" || l === "https:") {
			if (!C$1(s)) return t.BLANK_URL;
			var o = new URL(s);
			return o.protocol = /* @__PURE__ */ o.protocol.toLowerCase(), o.hostname = /* @__PURE__ */ o.hostname.toLowerCase(), o.toString();
		}
		return s;
	}
	m(p, "sanitizeUrl");
	h.sanitizeUrl = p;
});
var nt = /* @__PURE__ */ q(/* @__PURE__ */ f(), 1);
var ct = "​", ut = {
	curveBasis: $s,
	curveBasisClosed: Es,
	curveBasisOpen: Rs,
	curveBumpX: Lc,
	curveBumpY: zc,
	curveBundle: Hc,
	curveCardinalClosed: qc,
	curveCardinalOpen: Wc,
	curveCardinal: Bc,
	curveCatmullRomClosed: Xc,
	curveCatmullRomOpen: Gc,
	curveCatmullRom: Vc,
	curveLinear: Vn,
	curveLinearClosed: zs,
	curveMonotoneX: Zc,
	curveMonotoneY: Qc,
	curveNatural: Zs,
	curveStep: Qs,
	curveStepAfter: Jc,
	curveStepBefore: Kc
}, lt = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, ft = /* @__PURE__ */ m(function(e, t) {
	let r = /* @__PURE__ */ rt(e, /(?:init\b)|(?:initialize\b)/), n$1 = {};
	if (Array.isArray(r)) {
		let s = /* @__PURE__ */ r.map((u) => u.args);
		Jt(s), n$1 = /* @__PURE__ */ v(n$1, [...s]);
	} else n$1 = r.args;
	if (!n$1) return;
	let i = /* @__PURE__ */ os(e, t), o = "config";
	return n$1[o] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), n$1[i] = n$1[o], delete n$1[o]), n$1;
}, "detectInit"), rt = /* @__PURE__ */ m(function(e, t = null) {
	try {
		let r = new RegExp(`[%]{2}(?![{]${lt.source})(?=[}][%]{2}).*
`, "ig");
		e = /* @__PURE__ */ e.trim().replace(r, "").replace(/'/gm, "\""), pt.debug(`Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`);
		let n$1, i = [];
		for (; (n$1 = /* @__PURE__ */ Ti.exec(e)) !== null;) if (n$1.index === Ti.lastIndex && Ti.lastIndex++, n$1 && !t || t && n$1[1]?.match(t) || t && n$1[2]?.match(t)) {
			let o = n$1[1] ? n$1[1] : n$1[2], s = n$1[3] ? n$1[3].trim() : n$1[4] ? JSON.parse(/* @__PURE__ */ n$1[4].trim()) : null;
			i.push({
				type: o,
				args: s
			});
		}
		return i.length === 0 ? {
			type: e,
			args: null
		} : i.length === 1 ? i[0] : i;
	} catch (r) {
		return pt.error(`ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`), {
			type: void 0,
			args: null
		};
	}
}, "detectDirective"), zt = /* @__PURE__ */ m(function(e) {
	return e.replace(Ti, "");
}, "removeDirectives"), gt = /* @__PURE__ */ m(function(e, t) {
	for (let [r, n$1] of t.entries()) if (n$1.match(e)) return r;
	return -1;
}, "isSubstringInArray");
function dt(e, t) {
	if (!e) return t;
	let r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
	return ut[r] ?? t;
}
m(dt, "interpolateToCurve");
function ht(e, t) {
	let r = /* @__PURE__ */ e.trim();
	if (r) return t.securityLevel !== "loose" ? (0, nt.sanitizeUrl)(r) : r;
}
m(ht, "formatUrl");
var mt = /* @__PURE__ */ m((e, ...t) => {
	let r = /* @__PURE__ */ e.split("."), n$1 = r.length - 1, i = r[n$1], o = window;
	for (let s = 0; s < n$1; s++) if (o = o[r[s]], !o) {
		pt.error(`Function name: ${e} not found in window`);
		return;
	}
	o[i](...t);
}, "runFunc");
function it(e, t) {
	return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
m(it, "distance");
function pt$1(e) {
	let t, r = 0;
	e.forEach((i) => {
		r += /* @__PURE__ */ it(i, t), t = i;
	});
	let n$1 = r / 2;
	return T(e, n$1);
}
m(pt$1, "traverseEdge");
function xt(e) {
	return e.length === 1 ? e[0] : pt$1(e);
}
m(xt, "calcLabelPosition");
var tt = /* @__PURE__ */ m((e, t = 2) => {
	let r = /* @__PURE__ */ Math.pow(10, t);
	return Math.round(e * r) / r;
}, "roundNumber"), T = /* @__PURE__ */ m((e, t) => {
	let r, n$1 = t;
	for (let i of e) {
		if (r) {
			let o = /* @__PURE__ */ it(i, r);
			if (o === 0) return r;
			if (o < n$1) n$1 -= o;
			else {
				let s = n$1 / o;
				if (s <= 0) return r;
				if (s >= 1) return {
					x: i.x,
					y: i.y
				};
				if (s > 0 && s < 1) return {
					x: /* @__PURE__ */ tt((1 - s) * r.x + s * i.x, 5),
					y: /* @__PURE__ */ tt((1 - s) * r.y + s * i.y, 5)
				};
			}
		}
		r = i;
	}
	throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), yt = /* @__PURE__ */ m((e, t, r) => {
	pt.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = /* @__PURE__ */ t.reverse());
	let i = /* @__PURE__ */ T(t, 25), o = e ? 10 : 5, s = /* @__PURE__ */ Math.atan2(t[0].y - i.y, t[0].x - i.x), u = {
		x: 0,
		y: 0
	};
	return u.x = Math.sin(s) * o + (t[0].x + i.x) / 2, u.y = -Math.cos(s) * o + (t[0].y + i.y) / 2, u;
}, "calcCardinalityPosition");
function vt(e, t, r) {
	let n$1 = /* @__PURE__ */ structuredClone(r);
	pt.info("our points", n$1), t !== "start_left" && t !== "start_right" && n$1.reverse();
	let i = 25 + e, o = /* @__PURE__ */ T(n$1, i), s = 10 + e * .5, u = /* @__PURE__ */ Math.atan2(n$1[0].y - o.y, n$1[0].x - o.x), c = {
		x: 0,
		y: 0
	};
	return t === "start_left" ? (c.x = Math.sin(u + Math.PI) * s + (n$1[0].x + o.x) / 2, c.y = -Math.cos(u + Math.PI) * s + (n$1[0].y + o.y) / 2) : t === "end_right" ? (c.x = Math.sin(u - Math.PI) * s + (n$1[0].x + o.x) / 2 - 5, c.y = -Math.cos(u - Math.PI) * s + (n$1[0].y + o.y) / 2 - 5) : t === "end_left" ? (c.x = Math.sin(u) * s + (n$1[0].x + o.x) / 2 - 5, c.y = -Math.cos(u) * s + (n$1[0].y + o.y) / 2 - 5) : (c.x = Math.sin(u) * s + (n$1[0].x + o.x) / 2, c.y = -Math.cos(u) * s + (n$1[0].y + o.y) / 2), c;
}
m(vt, "calcTerminalLabelPosition");
function bt(e) {
	let t = "", r = "";
	for (let n$1 of e) n$1 !== void 0 && (n$1.startsWith("color:") || n$1.startsWith("text-align:") ? r = r + n$1 + ";" : t = t + n$1 + ";");
	return {
		style: t,
		labelStyle: r
	};
}
m(bt, "getStylesFromArray");
var et = 0, Ct = /* @__PURE__ */ m(() => (et++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + et), "generateId");
function Mt(e) {
	let t = "", r = "0123456789abcdef", n$1 = 16;
	for (let i = 0; i < e; i++) t += /* @__PURE__ */ r.charAt(/* @__PURE__ */ Math.floor(Math.random() * n$1));
	return t;
}
m(Mt, "makeRandomHex");
var wt = /* @__PURE__ */ m((e) => Mt(e.length), "random"), Pt = /* @__PURE__ */ m(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		anchor: "start",
		style: "#666",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0,
		valign: void 0,
		text: ""
	};
}, "getTextObj"), Tt = /* @__PURE__ */ m(function(e, t) {
	let r = /* @__PURE__ */ t.text.replace(hn.lineBreakRegex, " "), [, n$1] = $(t.fontSize), i = /* @__PURE__ */ e.append("text");
	i.attr("x", t.x), i.attr("y", t.y), i.style("text-anchor", t.anchor), i.style("font-family", t.fontFamily), i.style("font-size", n$1), i.style("font-weight", t.fontWeight), i.attr("fill", t.fill), t.class !== void 0 && i.attr("class", t.class);
	let o = /* @__PURE__ */ i.append("tspan");
	return o.attr("x", t.x + t.textMargin * 2), o.attr("fill", t.fill), o.text(r), i;
}, "drawSimpleText"), St = /* @__PURE__ */ ki((e, t, r) => {
	if (!e || (r = /* @__PURE__ */ Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		joinWith: "<br/>"
	}, r), hn.lineBreakRegex.test(e))) return e;
	let n$1 = /* @__PURE__ */ e.split(" ").filter(Boolean), i = [], o = "";
	return n$1.forEach((s, u) => {
		let c = /* @__PURE__ */ M(`${s} `, r), l = /* @__PURE__ */ M(o, r);
		if (c > t) {
			let { hyphenatedStrings: h, remainingWord: f$1 } = $t(s, t, "-", r);
			i.push(o, ...h), o = f$1;
		} else l + c >= t ? (i.push(o), o = s) : o = /* @__PURE__ */ [o, s].filter(Boolean).join(" ");
		u + 1 === n$1.length && i.push(o);
	}), i.filter((s) => s !== "").join(r.joinWith);
}, (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`), $t = /* @__PURE__ */ ki((e, t, r = "-", n$1) => {
	n$1 = /* @__PURE__ */ Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		margin: 0
	}, n$1);
	let i = [...e], o = [], s = "";
	return i.forEach((u, c) => {
		let l = `${s}${u}`;
		if (M(l, n$1) >= t) {
			let x = c + 1, h = i.length === x, f$1 = `${l}${r}`;
			o.push(h ? l : f$1), s = "";
		} else s = l;
	}), {
		hyphenatedStrings: o,
		remainingWord: s
	};
}, (e, t, r = "-", n$1) => `${e}${t}${r}${n$1.fontSize}${n$1.fontWeight}${n$1.fontFamily}`);
function Wt(e, t) {
	return S(e, t).height;
}
m(Wt, "calculateTextHeight");
function M(e, t) {
	return S(e, t).width;
}
m(M, "calculateTextWidth");
var S = /* @__PURE__ */ ki((e, t) => {
	let { fontSize: r = 12, fontFamily: n$1 = "Arial", fontWeight: i = 400 } = t;
	if (!e) return {
		width: 0,
		height: 0
	};
	let [, o] = $(r), s = ["sans-serif", n$1], u = /* @__PURE__ */ e.split(hn.lineBreakRegex), c = [], l = /* @__PURE__ */ ia("body");
	if (!l.remove) return {
		width: 0,
		height: 0,
		lineHeight: 0
	};
	let p = /* @__PURE__ */ l.append("svg");
	for (let h of s) {
		let f$1 = 0, g$1 = {
			width: 0,
			height: 0,
			lineHeight: 0
		};
		for (let ot of u) {
			let W = /* @__PURE__ */ Pt();
			W.text = ot || "​";
			let E = /* @__PURE__ */ Tt(p, W).style("font-size", o).style("font-weight", i).style("font-family", h), y = /* @__PURE__ */ (E._groups || E)[0][0].getBBox();
			if (y.width === 0 && y.height === 0) throw new Error("svg element not in render tree");
			g$1.width = /* @__PURE__ */ Math.round(/* @__PURE__ */ Math.max(g$1.width, y.width)), f$1 = /* @__PURE__ */ Math.round(y.height), g$1.height += f$1, g$1.lineHeight = /* @__PURE__ */ Math.round(/* @__PURE__ */ Math.max(g$1.lineHeight, f$1));
		}
		c.push(g$1);
	}
	p.remove();
	let x = isNaN(c[1].height) || isNaN(c[1].width) || isNaN(c[1].lineHeight) || c[0].height > c[1].height && c[0].width > c[1].width && c[0].lineHeight > c[1].lineHeight ? 0 : 1;
	return c[x];
}, (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`), P = class {
	constructor(t = !1, r) {
		this.count = 0;
		this.count = r ? r.length : 0, this.next = t ? () => this.count++ : () => Date.now();
	}
	static {
		m(this, "InitIDGenerator");
	}
}, C, Et = /* @__PURE__ */ m(function(e) {
	return C = C || document.createElement("div"), e = /* @__PURE__ */ escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), C.innerHTML = e, unescape(C.textContent);
}, "entityDecode");
function It(e) {
	return "str" in e;
}
m(It, "isDetailedError");
var Bt = /* @__PURE__ */ m((e, t, r, n$1) => {
	if (!n$1) return;
	let i = e.node()?.getBBox();
	i && e.append("text").text(n$1).attr("text-anchor", "middle").attr("x", i.x + i.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), $ = /* @__PURE__ */ m((e) => {
	if (typeof e == "number") return [e, e + "px"];
	let t = /* @__PURE__ */ parseInt(e ?? "", 10);
	return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function Lt(e, t) {
	return qs({}, e, t);
}
m(Lt, "cleanAndMerge");
var Ut = {
	assignWithDepth: v,
	wrapLabel: St,
	calculateTextHeight: Wt,
	calculateTextWidth: M,
	calculateTextDimensions: S,
	cleanAndMerge: Lt,
	detectInit: ft,
	detectDirective: rt,
	isSubstringInArray: gt,
	interpolateToCurve: dt,
	calcLabelPosition: xt,
	calcCardinalityPosition: yt,
	calcTerminalLabelPosition: vt,
	formatUrl: ht,
	getStylesFromArray: bt,
	generateId: Ct,
	random: wt,
	runFunc: mt,
	entityDecode: Et,
	insertTitle: Bt,
	isLabelCoordinateInPath: Dt,
	parseFontSize: $,
	InitIDGenerator: P
}, Xt = /* @__PURE__ */ m(function(e) {
	let t = e;
	return t = /* @__PURE__ */ t.replace(/style.*:\S*#.*;/g, function(r) {
		return r.substring(0, r.length - 1);
	}), t = /* @__PURE__ */ t.replace(/classDef.*:\S*#.*;/g, function(r) {
		return r.substring(0, r.length - 1);
	}), t = /* @__PURE__ */ t.replace(/#\w+;/g, function(r) {
		let n$1 = /* @__PURE__ */ r.substring(1, r.length - 1);
		return /^\+?\d+$/.test(n$1) ? "ﬂ°°" + n$1 + "¶ß" : "ﬂ°" + n$1 + "¶ß";
	}), t;
}, "encodeEntities"), Yt = /* @__PURE__ */ m(function(e) {
	return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities");
var Jt$1 = /* @__PURE__ */ m((e, t, { counter: r = 0, prefix: n$1, suffix: i }, o) => o || `${n$1 ? `${n$1}_` : ""}${e}_${t}_${r}${i ? `_${i}` : ""}`, "getEdgeId");
function Vt(e) {
	return e ?? null;
}
m(Vt, "handleUndefinedAttr");
function Dt(e, t) {
	let r = /* @__PURE__ */ Math.round(e.x), n$1 = /* @__PURE__ */ Math.round(e.y), i = /* @__PURE__ */ t.replace(/(\d+\.\d+)/g, (o) => Math.round(/* @__PURE__ */ parseFloat(o)).toString());
	return i.includes(/* @__PURE__ */ r.toString()) || i.includes(/* @__PURE__ */ n$1.toString());
}
m(Dt, "isLabelCoordinateInPath");
export { zt as _, Lt as a, Ut as c, Xt as d, Yt as f, wt as g, dt as h, Jt$1 as i, Vt as l, ct as m, Ct as n, M as o, bt as p, It as r, St as s, $ as t, Wt as u, f as v };
