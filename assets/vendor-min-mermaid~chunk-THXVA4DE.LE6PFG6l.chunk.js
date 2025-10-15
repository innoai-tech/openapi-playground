import { n, t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
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
	function v(r) {
		return t.relativeFirstCharacters.indexOf(r[0]) > -1;
	}
	m(v, "isRelativeUrlWithoutProtocol");
	function x(r) {
		return r.replace(t.ctrlCharactersRegex, "").replace(t.htmlEntitiesRegex, function(a, i) {
			return String.fromCharCode(i);
		});
	}
	m(x, "decodeHtmlCharacters");
	function C(r) {
		return URL.canParse(r);
	}
	m(C, "isValidUrl");
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
		if (v(i)) return i;
		var u = /* @__PURE__ */ i.trimStart(), m$1 = /* @__PURE__ */ u.match(t.urlSchemeRegex);
		if (!m$1) return i;
		var l = /* @__PURE__ */ m$1[0].toLowerCase().trim();
		if (t.invalidProtocolRegex.test(l)) return t.BLANK_URL;
		var s = /* @__PURE__ */ u.replace(/\\/g, "/");
		if (l === "mailto:" || l.includes("://")) return s;
		if (l === "http:" || l === "https:") {
			if (!C(s)) return t.BLANK_URL;
			var o = new URL(s);
			return o.protocol = /* @__PURE__ */ o.protocol.toLowerCase(), o.hostname = /* @__PURE__ */ o.hostname.toLowerCase(), o.toString();
		}
		return s;
	}
	m(p, "sanitizeUrl");
	h.sanitizeUrl = p;
});
export { f as t };
