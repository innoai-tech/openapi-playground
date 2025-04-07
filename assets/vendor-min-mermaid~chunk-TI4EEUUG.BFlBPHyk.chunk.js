import { n, m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var g = /*#__PURE__*/ n((e)=>{
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.BLANK_URL = e.relativeFirstCharacters = e.whitespaceEscapeCharsRegex = e.urlSchemeRegex = e.ctrlCharactersRegex = e.htmlCtrlEntityRegex = e.htmlEntitiesRegex = e.invalidProtocolRegex = void 0;
    e.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
    e.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
    e.htmlCtrlEntityRegex = /&(newline|tab);/gi;
    e.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
    e.urlSchemeRegex = /^.+(:|&colon;)/gim;
    e.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
    e.relativeFirstCharacters = [
        ".",
        "/"
    ];
    e.BLANK_URL = "about:blank";
});
var f = /*#__PURE__*/ n((h)=>{
    Object.defineProperty(h, "__esModule", {
        value: true
    });
    h.sanitizeUrl = void 0;
    var t = /*#__PURE__*/ g();
    function v(r) {
        return t.relativeFirstCharacters.indexOf(r[0]) > -1;
    }
    m$1(v, "isRelativeUrlWithoutProtocol");
    function x(r) {
        var c = /*#__PURE__*/ r.replace(t.ctrlCharactersRegex, "");
        return c.replace(t.htmlEntitiesRegex, function(a, i) {
            return String.fromCharCode(i);
        });
    }
    m$1(x, "decodeHtmlCharacters");
    function C(r) {
        return URL.canParse(r);
    }
    m$1(C, "isValidUrl");
    function d(r) {
        try {
            return decodeURIComponent(r);
        } catch  {
            return r;
        }
    }
    m$1(d, "decodeURI");
    function p(r) {
        if (!r) return t.BLANK_URL;
        var c, a = /*#__PURE__*/ d(/*#__PURE__*/ r.trim());
        do a = /*#__PURE__*/ x(a).replace(t.htmlCtrlEntityRegex, "").replace(t.ctrlCharactersRegex, "").replace(t.whitespaceEscapeCharsRegex, "").trim(), a = /*#__PURE__*/ d(a), c = a.match(t.ctrlCharactersRegex) || a.match(t.htmlEntitiesRegex) || a.match(t.htmlCtrlEntityRegex) || a.match(t.whitespaceEscapeCharsRegex);
        while (c && c.length > 0);
        var i = a;
        if (!i) return t.BLANK_URL;
        if (v(i)) return i;
        var u = /*#__PURE__*/ i.trimStart(), m = /*#__PURE__*/ u.match(t.urlSchemeRegex);
        if (!m) return i;
        var l = /*#__PURE__*/ m[0].toLowerCase().trim();
        if (t.invalidProtocolRegex.test(l)) return t.BLANK_URL;
        var s = /*#__PURE__*/ u.replace(/\\/g, "/");
        if (l === "mailto:" || l.includes("://")) return s;
        if (l === "http:" || l === "https:") {
            if (!C(s)) return t.BLANK_URL;
            var o = new URL(s);
            return o.protocol = /*#__PURE__*/ o.protocol.toLowerCase(), o.hostname = /*#__PURE__*/ o.hostname.toLowerCase(), o.toString();
        }
        return s;
    }
    m$1(p, "sanitizeUrl");
    h.sanitizeUrl = p;
});
export { f };
