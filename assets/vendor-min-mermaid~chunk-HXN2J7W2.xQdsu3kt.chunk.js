import { Y as Yt$1 } from './vendor-min-mermaid~chunk-RGZHNYJS.BZGdGDWl.chunk.js';
import { l as lr, M as Mt$1, r as rt$1, I as Io, n as nn } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { p as pt$1, i as ia } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var nt = /*#__PURE__*/ Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
}), z = /*#__PURE__*/ Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
}), K = /*#__PURE__*/ Object.freeze({
    ...nt,
    ...z
}), Te = /*#__PURE__*/ Object.freeze({
    ...K,
    body: "",
    hidden: false
});
var rt = /*#__PURE__*/ Object.freeze({
    width: null,
    height: null
}), Ie = /*#__PURE__*/ Object.freeze({
    ...rt,
    ...z
});
var X = /*#__PURE__*/ m$1((t, e, n, i = "")=>{
    let r = /*#__PURE__*/ t.split(":");
    if (t.slice(0, 1) === "@") {
        if (r.length < 2 || r.length > 3) return null;
        i = /*#__PURE__*/ r.shift().slice(1);
    }
    if (r.length > 3 || !r.length) return null;
    if (r.length > 1) {
        let o = /*#__PURE__*/ r.pop(), c = /*#__PURE__*/ r.pop(), l = {
            provider: r.length > 0 ? r[0] : i,
            prefix: c,
            name: o
        };
        return e && !F(l) ? null : l;
    }
    let s = r[0], a = /*#__PURE__*/ s.split("-");
    if (a.length > 1) {
        let o = {
            provider: i,
            prefix: /*#__PURE__*/ a.shift(),
            name: /*#__PURE__*/ a.join("-")
        };
        return e && !F(o) ? null : o;
    }
    if (n && i === "") {
        let o = {
            provider: i,
            prefix: "",
            name: s
        };
        return e && !F(o, n) ? null : o;
    }
    return null;
}, "stringToIcon"), F = /*#__PURE__*/ m$1((t, e)=>t ? !!((e && t.prefix === "" || t.prefix) && t.name) : false, "validateIconName");
function ve(t, e) {
    let n = {};
    !t.hFlip != !e.hFlip && (n.hFlip = true), !t.vFlip != !e.vFlip && (n.vFlip = true);
    let i = ((t.rotate || 0) + (e.rotate || 0)) % 4;
    return i && (n.rotate = i), n;
}
m$1(ve, "mergeIconTransformations");
function J(t, e) {
    let n = /*#__PURE__*/ ve(t, e);
    for(let i in Te)i in z ? i in t && !(i in n) && (n[i] = z[i]) : i in e ? n[i] = e[i] : i in t && (n[i] = t[i]);
    return n;
}
m$1(J, "mergeIconData");
function Re(t, e) {
    let n = t.icons, i = t.aliases || Object.create(null), r = /*#__PURE__*/ Object.create(null);
    function s(a) {
        if (n[a]) return r[a] = [];
        if (!(a in r)) {
            r[a] = null;
            let o = i[a] && i[a].parent, c = o && s(o);
            c && (r[a] = /*#__PURE__*/ [
                o
            ].concat(c));
        }
        return r[a];
    }
    return m$1(s, "resolve"), (e || Object.keys(n).concat(/*#__PURE__*/ Object.keys(i))).forEach(s), r;
}
m$1(Re, "getIconsTree");
function $e(t, e, n) {
    let i = t.icons, r = t.aliases || Object.create(null), s = {};
    function a(o) {
        s = /*#__PURE__*/ J(i[o] || r[o], s);
    }
    return m$1(a, "parse"), a(e), n.forEach(a), J(t, s);
}
m$1($e, "internalGetIconData");
function Y(t, e) {
    if (t.icons[e]) return $e(t, e, []);
    let n = Re(t, [
        e
    ])[e];
    return n ? $e(t, e, n) : null;
}
m$1(Y, "getIconData");
var it = /(-?[0-9.]*[0-9]+[0-9.]*)/g, st = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ee(t, e, n) {
    if (e === 1) return t;
    if (n = n || 100, typeof t == "number") return Math.ceil(t * e * n) / n;
    if (typeof t != "string") return t;
    let i = /*#__PURE__*/ t.split(it);
    if (i === null || !i.length) return t;
    let r = [], s = /*#__PURE__*/ i.shift(), a = /*#__PURE__*/ st.test(s);
    for(;;){
        if (a) {
            let o = /*#__PURE__*/ parseFloat(s);
            isNaN(o) ? r.push(s) : r.push(Math.ceil(o * e * n) / n);
        } else r.push(s);
        if (s = /*#__PURE__*/ i.shift(), s === void 0) return r.join("");
        a = !a;
    }
}
m$1(ee, "calculateSize");
function ot(t, e = "defs") {
    let n = "", i = /*#__PURE__*/ t.indexOf("<" + e);
    for(; i >= 0;){
        let r = /*#__PURE__*/ t.indexOf(">", i), s = /*#__PURE__*/ t.indexOf("</" + e);
        if (r === -1 || s === -1) break;
        let a = /*#__PURE__*/ t.indexOf(">", s);
        if (a === -1) break;
        n += /*#__PURE__*/ t.slice(r + 1, s).trim(), t = t.slice(0, i).trim() + t.slice(a + 1);
    }
    return {
        defs: n,
        content: t
    };
}
m$1(ot, "splitSVGDefs");
function at(t, e) {
    return t ? "<defs>" + t + "</defs>" + e : e;
}
m$1(at, "mergeDefsAndContent");
function Le(t, e, n) {
    let i = /*#__PURE__*/ ot(t);
    return at(i.defs, e + i.content + n);
}
m$1(Le, "wrapSVGContent");
var lt = /*#__PURE__*/ m$1((t)=>t === "unset" || t === "undefined" || t === "none", "isUnsetKeyword");
function te(t, e) {
    let n = {
        ...K,
        ...t
    }, i = {
        ...Ie,
        ...e
    }, r = {
        left: n.left,
        top: n.top,
        width: n.width,
        height: n.height
    }, s = n.body;
    [
        n,
        i
    ].forEach((x)=>{
        let b = [], C = x.hFlip, E = x.vFlip, S = x.rotate;
        C ? E ? S += 2 : (b.push("translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"), b.push("scale(-1 1)"), r.top = r.left = 0) : E && (b.push("translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"), b.push("scale(1 -1)"), r.top = r.left = 0);
        let y;
        switch(S < 0 && (S -= Math.floor(S / 4) * 4), S = S % 4, S){
            case 1:
                y = r.height / 2 + r.top, b.unshift("rotate(90 " + y.toString() + " " + y.toString() + ")");
                break;
            case 2:
                b.unshift("rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")");
                break;
            case 3:
                y = r.width / 2 + r.left, b.unshift("rotate(-90 " + y.toString() + " " + y.toString() + ")");
                break;
        }
        S % 2 === 1 && (r.left !== r.top && (y = r.left, r.left = r.top, r.top = y), r.width !== r.height && (y = r.width, r.width = r.height, r.height = y)), b.length && (s = /*#__PURE__*/ Le(s, '<g transform="' + b.join(" ") + '">', "</g>"));
    });
    let a = i.width, o = i.height, c = r.width, l = r.height, u, f;
    a === null ? (f = o === null ? "1em" : o === "auto" ? l : o, u = /*#__PURE__*/ ee(f, c / l)) : (u = a === "auto" ? c : a, f = o === null ? ee(u, l / c) : o === "auto" ? l : o);
    let h = {}, k = /*#__PURE__*/ m$1((x, b)=>{
        lt(b) || (h[x] = /*#__PURE__*/ b.toString());
    }, "setAttr");
    k("width", u), k("height", f);
    let d = [
        r.left,
        r.top,
        c,
        l
    ];
    return h.viewBox = /*#__PURE__*/ d.join(" "), {
        attributes: h,
        viewBox: d,
        body: s
    };
}
m$1(te, "iconToSVG");
var ct = /\sid="(\S+)"/g, pt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), ut = 0;
function ne(t, e = pt) {
    let n = [], i;
    for(; i = /*#__PURE__*/ ct.exec(t);)n.push(i[1]);
    if (!n.length) return t;
    let r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach((s)=>{
        let a = typeof e == "function" ? e(s) : e + (ut++).toString(), o = /*#__PURE__*/ s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        t = /*#__PURE__*/ t.replace(new RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"), "$1" + a + r + "$3");
    }), t = /*#__PURE__*/ t.replace(new RegExp(r, "g"), ""), t;
}
m$1(ne, "replaceIDs");
function re(t, e) {
    let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for(let i in e)n += " " + i + '="' + e[i] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
m$1(re, "iconToHTML");
var ht = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80
}, ie = new Map, ze = new Map, Zn = /*#__PURE__*/ m$1((t)=>{
    for (let e of t){
        if (!e.name) throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');
        if (pt$1.debug("Registering icon pack:", e.name), "loader" in e) ze.set(e.name, e.loader);
        else if ("icons" in e) ie.set(e.name, e.icons);
        else throw pt$1.error("Invalid icon loader:", e), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
    }
}, "registerIconPacks"), Ce = /*#__PURE__*/ m$1(async (t, e)=>{
    let n = /*#__PURE__*/ X(t, true, e !== void 0);
    if (!n) throw new Error(`Invalid icon name: ${t}`);
    let i = n.prefix || e;
    if (!i) throw new Error(`Icon name must contain a prefix: ${t}`);
    let r = /*#__PURE__*/ ie.get(i);
    if (!r) {
        let a = /*#__PURE__*/ ze.get(i);
        if (!a) throw new Error(`Icon set not found: ${n.prefix}`);
        try {
            r = {
                ...await a(),
                prefix: i
            }, ie.set(i, r);
        } catch (o) {
            throw pt$1.error(o), new Error(`Failed to load icon set: ${n.prefix}`);
        }
    }
    let s = /*#__PURE__*/ Y(r, n.name);
    if (!s) throw new Error(`Icon not found: ${t}`);
    return s;
}, "getRegisteredIconData"), Ee = /*#__PURE__*/ m$1(async (t)=>{
    try {
        return await Ce(t), !0;
    } catch  {
        return false;
    }
}, "isIconAvailable"), Ae = /*#__PURE__*/ m$1(async (t, e, n)=>{
    let i;
    try {
        i = await Ce(t, e?.fallbackPrefix);
    } catch (a) {
        pt$1.error(a), i = ht;
    }
    let r = /*#__PURE__*/ te(i, e), s = /*#__PURE__*/ re(/*#__PURE__*/ ne(r.body), {
        ...r.attributes,
        ...n
    });
    return rt$1(s, /*#__PURE__*/ Mt$1());
}, "getIconSVG");
function Me(t) {
    for(var e = [], n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
    var i = /*#__PURE__*/ Array.from(typeof t == "string" ? [
        t
    ] : t);
    i[i.length - 1] = /*#__PURE__*/ i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var r = /*#__PURE__*/ i.reduce(function(o, c) {
        var l = /*#__PURE__*/ c.match(/\n([\t ]+|(?!\s).)/g);
        return l ? o.concat(/*#__PURE__*/ l.map(function(u) {
            var f, h;
            return (h = (f = /*#__PURE__*/ u.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && h !== void 0 ? h : 0;
        })) : o;
    }, []);
    if (r.length) {
        var s = new RegExp(`
[	 ]{` + Math.min.apply(Math, r) + "}", "g");
        i = /*#__PURE__*/ i.map(function(o) {
            return o.replace(s, `
`);
        });
    }
    i[0] = /*#__PURE__*/ i[0].replace(/^\r?\n/, "");
    var a = i[0];
    return e.forEach(function(o, c) {
        var l = /*#__PURE__*/ a.match(/(?:^|\n)( *)$/), u = l ? l[1] : "", f = o;
        typeof o == "string" && o.includes(`
`) && (f = /*#__PURE__*/ String(o).split(`
`).map(function(h, k) {
            return k === 0 ? h : "" + u + h;
        }).join(`
`)), a += f + i[c + 1];
    }), a;
}
m$1(Me, "dedent");
function le() {
    return {
        async: false,
        breaks: false,
        extensions: null,
        gfm: true,
        hooks: null,
        pedantic: false,
        renderer: null,
        silent: false,
        tokenizer: null,
        walkTokens: null
    };
}
m$1(le, "_getDefaults");
var L = /*#__PURE__*/ le();
function Oe(t) {
    L = t;
}
m$1(Oe, "changeDefaults");
var j = {
    exec: /*#__PURE__*/ m$1(()=>null, "exec")
};
function m(t, e = "") {
    let n = typeof t == "string" ? t : t.source, i = {
        replace: /*#__PURE__*/ m$1((r, s)=>{
            let a = typeof s == "string" ? s : s.source;
            return a = /*#__PURE__*/ a.replace(w.caret, "$1"), n = /*#__PURE__*/ n.replace(r, a), i;
        }, "replace"),
        getRegex: /*#__PURE__*/ m$1(()=>new RegExp(n, e), "getRegex")
    };
    return i;
}
m$1(m, "edit");
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
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
    nextBulletRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
    hrRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
    fencesBeginRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
    headingBeginRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}#`), "headingBeginRegex"),
    htmlBeginRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
}, ft = /^(?:[ \t]*(?:\n|$))+/, gt = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, dt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, B = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, mt = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ce = /(?:[*+-]|\d{1,9}[.)])/, Fe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, qe = /*#__PURE__*/ m(Fe).replace(/bull/g, ce).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), kt = /*#__PURE__*/ m(Fe).replace(/bull/g, ce).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), pe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, xt = /^[^\n]+/, ue = /(?!\s*\])(?:\\.|[^\[\]\\])+/, bt = /*#__PURE__*/ m(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ue).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), wt = /*#__PURE__*/ m(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ce).getRegex(), H = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", he = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, yt = /*#__PURE__*/ m("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", he).replace("tag", H).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ge = /*#__PURE__*/ m(pe).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex(), St = /*#__PURE__*/ m(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ge).getRegex(), fe = {
    blockquote: St,
    code: gt,
    def: bt,
    fences: dt,
    heading: mt,
    hr: B,
    html: yt,
    lheading: qe,
    list: wt,
    newline: ft,
    paragraph: Ge,
    table: j,
    text: xt
}, Pe = /*#__PURE__*/ m("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex(), Tt = {
    ...fe,
    lheading: kt,
    table: Pe,
    paragraph: /*#__PURE__*/ m(pe).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Pe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex()
}, It = {
    ...fe,
    html: /*#__PURE__*/ m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", he).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: j,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: /*#__PURE__*/ m(pe).replace("hr", B).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", qe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, vt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Rt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, We = /^( {2,}|\\)\n(?!\s*$)/, $t = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, V = /[\p{P}\p{S}]/u, ge = /[\s\p{P}\p{S}]/u, Ne = /[^\s\p{P}\p{S}]/u, Lt = /*#__PURE__*/ m(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ge).getRegex(), Ze = /(?!~)[\p{P}\p{S}]/u, zt = /(?!~)[\s\p{P}\p{S}]/u, Ct = /(?:[^\s\p{P}\p{S}]|~)/u, Et = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, He = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, At = /*#__PURE__*/ m(He, "u").replace(/punct/g, V).getRegex(), Mt = /*#__PURE__*/ m(He, "u").replace(/punct/g, Ze).getRegex(), Ve = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Pt = /*#__PURE__*/ m(Ve, "gu").replace(/notPunctSpace/g, Ne).replace(/punctSpace/g, ge).replace(/punct/g, V).getRegex(), _t = /*#__PURE__*/ m(Ve, "gu").replace(/notPunctSpace/g, Ct).replace(/punctSpace/g, zt).replace(/punct/g, Ze).getRegex(), jt = /*#__PURE__*/ m("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ne).replace(/punctSpace/g, ge).replace(/punct/g, V).getRegex(), Bt = /*#__PURE__*/ m(/\\(punct)/, "gu").replace(/punct/g, V).getRegex(), Dt = /*#__PURE__*/ m(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ot = /*#__PURE__*/ m(he).replace("(?:-->|$)", "-->").getRegex(), Ft = /*#__PURE__*/ m("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ot).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), W = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, qt = /*#__PURE__*/ m(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", W).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ue = /*#__PURE__*/ m(/^!?\[(label)\]\[(ref)\]/).replace("label", W).replace("ref", ue).getRegex(), Qe = /*#__PURE__*/ m(/^!?\[(ref)\](?:\[\])?/).replace("ref", ue).getRegex(), Gt = /*#__PURE__*/ m("reflink|nolink(?!\\()", "g").replace("reflink", Ue).replace("nolink", Qe).getRegex(), de = {
    _backpedal: j,
    anyPunctuation: Bt,
    autolink: Dt,
    blockSkip: Et,
    br: We,
    code: Rt,
    del: j,
    emStrongLDelim: At,
    emStrongRDelimAst: Pt,
    emStrongRDelimUnd: jt,
    escape: vt,
    link: qt,
    nolink: Qe,
    punctuation: Lt,
    reflink: Ue,
    reflinkSearch: Gt,
    tag: Ft,
    text: $t,
    url: j
}, Wt = {
    ...de,
    link: /*#__PURE__*/ m(/^!?\[(label)\]\((.*?)\)/).replace("label", W).getRegex(),
    reflink: /*#__PURE__*/ m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", W).getRegex()
}, se = {
    ...de,
    emStrongRDelimAst: _t,
    emStrongLDelim: Mt,
    url: /*#__PURE__*/ m(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Nt = {
    ...se,
    br: /*#__PURE__*/ m(We).replace("{2,}", "*").getRegex(),
    text: /*#__PURE__*/ m(se.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, q = {
    normal: fe,
    gfm: Tt,
    pedantic: It
}, P = {
    normal: de,
    gfm: se,
    breaks: Nt,
    pedantic: Wt
}, Zt = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}, _e = /*#__PURE__*/ m$1((t)=>Zt[t], "getEscapeReplacement");
function T(t, e) {
    if (e) {
        if (w.escapeTest.test(t)) return t.replace(w.escapeReplace, _e);
    } else if (w.escapeTestNoEncode.test(t)) return t.replace(w.escapeReplaceNoEncode, _e);
    return t;
}
m$1(T, "escape2");
function je(t) {
    try {
        t = /*#__PURE__*/ encodeURI(t).replace(w.percentDecode, "%");
    } catch  {
        return null;
    }
    return t;
}
m$1(je, "cleanUrl");
function Be(t, e) {
    let n = /*#__PURE__*/ t.replace(w.findPipe, (s, a, o)=>{
        let c = false, l = a;
        for(; --l >= 0 && o[l] === "\\";)c = !c;
        return c ? "|" : " |";
    }), i = /*#__PURE__*/ n.split(w.splitPipe), r = 0;
    if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), e) if (i.length > e) i.splice(e);
    else for(; i.length < e;)i.push("");
    for(; r < i.length; r++)i[r] = /*#__PURE__*/ i[r].trim().replace(w.slashPipe, "|");
    return i;
}
m$1(Be, "splitCells");
function _(t, e, n) {
    let i = t.length;
    if (i === 0) return "";
    let r = 0;
    for(; r < i;){
        let s = /*#__PURE__*/ t.charAt(i - r - 1);
        if (s === e && !n) r++;
        else if (s !== e && n) r++;
        else break;
    }
    return t.slice(0, i - r);
}
m$1(_, "rtrim");
function Ht(t, e) {
    if (t.indexOf(e[1]) === -1) return -1;
    let n = 0;
    for(let i = 0; i < t.length; i++)if (t[i] === "\\") i++;
    else if (t[i] === e[0]) n++;
    else if (t[i] === e[1] && (n--, n < 0)) return i;
    return n > 0 ? -2 : -1;
}
m$1(Ht, "findClosingBracket");
function De(t, e, n, i, r) {
    let s = e.href, a = e.title || null, o = /*#__PURE__*/ t[1].replace(r.other.outputLinkReplace, "$1");
    i.state.inLink = true;
    let c = {
        type: t[0].charAt(0) === "!" ? "image" : "link",
        raw: n,
        href: s,
        title: a,
        text: o,
        tokens: /*#__PURE__*/ i.inlineTokens(o)
    };
    return i.state.inLink = false, c;
}
m$1(De, "outputLink");
function Vt(t, e, n) {
    let i = /*#__PURE__*/ t.match(n.other.indentCodeCompensation);
    if (i === null) return e;
    let r = i[1];
    return e.split(`
`).map((s)=>{
        let a = /*#__PURE__*/ s.match(n.other.beginningSpace);
        if (a === null) return s;
        let [o] = a;
        return o.length >= r.length ? s.slice(r.length) : s;
    }).join(`
`);
}
m$1(Vt, "indentCodeCompensation");
var N = class {
    static{
        m$1(this, "_Tokenizer");
    }
    options;
    rules;
    lexer;
    constructor(t){
        this.options = t || L;
    }
    space(t) {
        let e = /*#__PURE__*/ this.rules.block.newline.exec(t);
        if (e && e[0].length > 0) return {
            type: "space",
            raw: e[0]
        };
    }
    code(t) {
        let e = /*#__PURE__*/ this.rules.block.code.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[0].replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: e[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? n : _(n, `
`)
            };
        }
    }
    fences(t) {
        let e = /*#__PURE__*/ this.rules.block.fences.exec(t);
        if (e) {
            let n = e[0], i = /*#__PURE__*/ Vt(n, e[3] || "", this.rules);
            return {
                type: "code",
                raw: n,
                lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
                text: i
            };
        }
    }
    heading(t) {
        let e = /*#__PURE__*/ this.rules.block.heading.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[2].trim();
            if (this.rules.other.endingHash.test(n)) {
                let i = /*#__PURE__*/ _(n, "#");
                (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (n = /*#__PURE__*/ i.trim());
            }
            return {
                type: "heading",
                raw: e[0],
                depth: e[1].length,
                text: n,
                tokens: /*#__PURE__*/ this.lexer.inline(n)
            };
        }
    }
    hr(t) {
        let e = /*#__PURE__*/ this.rules.block.hr.exec(t);
        if (e) return {
            type: "hr",
            raw: /*#__PURE__*/ _(e[0], `
`)
        };
    }
    blockquote(t) {
        let e = /*#__PURE__*/ this.rules.block.blockquote.exec(t);
        if (e) {
            let n = /*#__PURE__*/ _(e[0], `
`).split(`
`), i = "", r = "", s = [];
            for(; n.length > 0;){
                let a = false, o = [], c;
                for(c = 0; c < n.length; c++)if (this.rules.other.blockquoteStart.test(n[c])) o.push(n[c]), a = true;
                else if (!a) o.push(n[c]);
                else break;
                n = /*#__PURE__*/ n.slice(c);
                let l = /*#__PURE__*/ o.join(`
`), u = /*#__PURE__*/ l.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                i = i ? `${i}
${l}` : l, r = r ? `${r}
${u}` : u;
                let f = this.lexer.state.top;
                if (this.lexer.state.top = true, this.lexer.blockTokens(u, s, true), this.lexer.state.top = f, n.length === 0) break;
                let h = /*#__PURE__*/ s.at(-1);
                if (h?.type === "code") break;
                if (h?.type === "blockquote") {
                    let k = h, d = k.raw + `
` + n.join(`
`), x = /*#__PURE__*/ this.blockquote(d);
                    s[s.length - 1] = x, i = i.substring(0, i.length - k.raw.length) + x.raw, r = r.substring(0, r.length - k.text.length) + x.text;
                    break;
                } else if (h?.type === "list") {
                    let k = h, d = k.raw + `
` + n.join(`
`), x = /*#__PURE__*/ this.list(d);
                    s[s.length - 1] = x, i = i.substring(0, i.length - h.raw.length) + x.raw, r = r.substring(0, r.length - k.raw.length) + x.raw, n = /*#__PURE__*/ d.substring(s.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return {
                type: "blockquote",
                raw: i,
                tokens: s,
                text: r
            };
        }
    }
    list(t) {
        let e = /*#__PURE__*/ this.rules.block.list.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[1].trim(), i = n.length > 1, r = {
                type: "list",
                raw: "",
                ordered: i,
                start: i ? +n.slice(0, -1) : "",
                loose: false,
                items: []
            };
            n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
            let s = /*#__PURE__*/ this.rules.other.listItemRegex(n), a = false;
            for(; t;){
                let c = false, l = "", u = "";
                if (!(e = /*#__PURE__*/ s.exec(t)) || this.rules.block.hr.test(t)) break;
                l = e[0], t = /*#__PURE__*/ t.substring(l.length);
                let f = /*#__PURE__*/ e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (C)=>" ".repeat(3 * C.length)), h = t.split(`
`, 1)[0], k = !f.trim(), d = 0;
                if (this.options.pedantic ? (d = 2, u = /*#__PURE__*/ f.trimStart()) : k ? d = e[1].length + 1 : (d = /*#__PURE__*/ e[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, u = /*#__PURE__*/ f.slice(d), d += e[1].length), k && this.rules.other.blankLine.test(h) && (l += h + `
`, t = /*#__PURE__*/ t.substring(h.length + 1), c = true), !c) {
                    let C = /*#__PURE__*/ this.rules.other.nextBulletRegex(d), E = /*#__PURE__*/ this.rules.other.hrRegex(d), S = /*#__PURE__*/ this.rules.other.fencesBeginRegex(d), y = /*#__PURE__*/ this.rules.other.headingBeginRegex(d), tt = /*#__PURE__*/ this.rules.other.htmlBeginRegex(d);
                    for(; t;){
                        let U = t.split(`
`, 1)[0], A;
                        if (h = U, this.options.pedantic ? (h = /*#__PURE__*/ h.replace(this.rules.other.listReplaceNesting, "  "), A = h) : A = /*#__PURE__*/ h.replace(this.rules.other.tabCharGlobal, "    "), S.test(h) || y.test(h) || tt.test(h) || C.test(h) || E.test(h)) break;
                        if (A.search(this.rules.other.nonSpaceChar) >= d || !h.trim()) u += `
` + A.slice(d);
                        else {
                            if (k || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S.test(f) || y.test(f) || E.test(f)) break;
                            u += `
` + h;
                        }
                        !k && !h.trim() && (k = true), l += U + `
`, t = /*#__PURE__*/ t.substring(U.length + 1), f = /*#__PURE__*/ A.slice(d);
                    }
                }
                r.loose || (a ? r.loose = true : this.rules.other.doubleBlankLine.test(l) && (a = true));
                let x = null, b;
                this.options.gfm && (x = /*#__PURE__*/ this.rules.other.listIsTask.exec(u), x && (b = x[0] !== "[ ] ", u = /*#__PURE__*/ u.replace(this.rules.other.listReplaceTask, ""))), r.items.push({
                    type: "list_item",
                    raw: l,
                    task: !!x,
                    checked: b,
                    loose: false,
                    text: u,
                    tokens: []
                }), r.raw += l;
            }
            let o = /*#__PURE__*/ r.items.at(-1);
            if (o) o.raw = /*#__PURE__*/ o.raw.trimEnd(), o.text = /*#__PURE__*/ o.text.trimEnd();
            else return;
            r.raw = /*#__PURE__*/ r.raw.trimEnd();
            for(let c = 0; c < r.items.length; c++)if (this.lexer.state.top = false, r.items[c].tokens = /*#__PURE__*/ this.lexer.blockTokens(r.items[c].text, []), !r.loose) {
                let l = /*#__PURE__*/ r.items[c].tokens.filter((f)=>f.type === "space"), u = l.length > 0 && l.some((f)=>this.rules.other.anyLine.test(f.raw));
                r.loose = u;
            }
            if (r.loose) for(let c = 0; c < r.items.length; c++)r.items[c].loose = true;
            return r;
        }
    }
    html(t) {
        let e = /*#__PURE__*/ this.rules.block.html.exec(t);
        if (e) return {
            type: "html",
            block: true,
            raw: e[0],
            pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
            text: e[0]
        };
    }
    def(t) {
        let e = /*#__PURE__*/ this.rules.block.def.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
            return {
                type: "def",
                tag: n,
                raw: e[0],
                href: i,
                title: r
            };
        }
    }
    table(t) {
        let e = /*#__PURE__*/ this.rules.block.table.exec(t);
        if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
        let n = /*#__PURE__*/ Be(e[1]), i = /*#__PURE__*/ e[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
            type: "table",
            raw: e[0],
            header: [],
            align: [],
            rows: []
        };
        if (n.length === i.length) {
            for (let a of i)this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
            for(let a = 0; a < n.length; a++)s.header.push({
                text: n[a],
                tokens: /*#__PURE__*/ this.lexer.inline(n[a]),
                header: true,
                align: s.align[a]
            });
            for (let a of r)s.rows.push(/*#__PURE__*/ Be(a, s.header.length).map((o, c)=>({
                    text: o,
                    tokens: /*#__PURE__*/ this.lexer.inline(o),
                    header: false,
                    align: s.align[c]
                })));
            return s;
        }
    }
    lheading(t) {
        let e = /*#__PURE__*/ this.rules.block.lheading.exec(t);
        if (e) return {
            type: "heading",
            raw: e[0],
            depth: e[2].charAt(0) === "=" ? 1 : 2,
            text: e[1],
            tokens: /*#__PURE__*/ this.lexer.inline(e[1])
        };
    }
    paragraph(t) {
        let e = /*#__PURE__*/ this.rules.block.paragraph.exec(t);
        if (e) {
            let n = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
            return {
                type: "paragraph",
                raw: e[0],
                text: n,
                tokens: /*#__PURE__*/ this.lexer.inline(n)
            };
        }
    }
    text(t) {
        let e = /*#__PURE__*/ this.rules.block.text.exec(t);
        if (e) return {
            type: "text",
            raw: e[0],
            text: e[0],
            tokens: /*#__PURE__*/ this.lexer.inline(e[0])
        };
    }
    escape(t) {
        let e = /*#__PURE__*/ this.rules.inline.escape.exec(t);
        if (e) return {
            type: "escape",
            raw: e[0],
            text: e[1]
        };
    }
    tag(t) {
        let e = /*#__PURE__*/ this.rules.inline.tag.exec(t);
        if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = false), {
            type: "html",
            raw: e[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: false,
            text: e[0]
        };
    }
    link(t) {
        let e = /*#__PURE__*/ this.rules.inline.link.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
                if (!this.rules.other.endAngleBracket.test(n)) return;
                let s = /*#__PURE__*/ _(/*#__PURE__*/ n.slice(0, -1), "\\");
                if ((n.length - s.length) % 2 === 0) return;
            } else {
                let s = /*#__PURE__*/ Ht(e[2], "()");
                if (s === -2) return;
                if (s > -1) {
                    let o = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
                    e[2] = /*#__PURE__*/ e[2].substring(0, s), e[0] = /*#__PURE__*/ e[0].substring(0, o).trim(), e[3] = "";
                }
            }
            let i = e[2], r = "";
            if (this.options.pedantic) {
                let s = /*#__PURE__*/ this.rules.other.pedanticHrefTitle.exec(i);
                s && (i = s[1], r = s[3]);
            } else r = e[3] ? e[3].slice(1, -1) : "";
            return i = /*#__PURE__*/ i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? i = /*#__PURE__*/ i.slice(1) : i = /*#__PURE__*/ i.slice(1, -1)), De(e, {
                href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
                title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
            }, e[0], this.lexer, this.rules);
        }
    }
    reflink(t, e) {
        let n;
        if ((n = /*#__PURE__*/ this.rules.inline.reflink.exec(t)) || (n = /*#__PURE__*/ this.rules.inline.nolink.exec(t))) {
            let i = /*#__PURE__*/ (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = e[i.toLowerCase()];
            if (!r) {
                let s = /*#__PURE__*/ n[0].charAt(0);
                return {
                    type: "text",
                    raw: s,
                    text: s
                };
            }
            return De(n, r, n[0], this.lexer, this.rules);
        }
    }
    emStrong(t, e, n = "") {
        let i = /*#__PURE__*/ this.rules.inline.emStrongLDelim.exec(t);
        if (!i || i[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
        if (!(i[1] || i[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
            let s = [
                ...i[0]
            ].length - 1, a, o, c = s, l = 0, u = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            for(u.lastIndex = 0, e = /*#__PURE__*/ e.slice(-1 * t.length + s); (i = /*#__PURE__*/ u.exec(e)) != null;){
                if (a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !a) continue;
                if (o = [
                    ...a
                ].length, i[3] || i[4]) {
                    c += o;
                    continue;
                } else if ((i[5] || i[6]) && s % 3 && !((s + o) % 3)) {
                    l += o;
                    continue;
                }
                if (c -= o, c > 0) continue;
                o = /*#__PURE__*/ Math.min(o, o + c + l);
                let f = [
                    ...i[0]
                ][0].length, h = /*#__PURE__*/ t.slice(0, s + i.index + f + o);
                if (Math.min(s, o) % 2) {
                    let d = /*#__PURE__*/ h.slice(1, -1);
                    return {
                        type: "em",
                        raw: h,
                        text: d,
                        tokens: /*#__PURE__*/ this.lexer.inlineTokens(d)
                    };
                }
                let k = /*#__PURE__*/ h.slice(2, -2);
                return {
                    type: "strong",
                    raw: h,
                    text: k,
                    tokens: /*#__PURE__*/ this.lexer.inlineTokens(k)
                };
            }
        }
    }
    codespan(t) {
        let e = /*#__PURE__*/ this.rules.inline.code.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[2].replace(this.rules.other.newLineCharGlobal, " "), i = /*#__PURE__*/ this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
            return i && r && (n = /*#__PURE__*/ n.substring(1, n.length - 1)), {
                type: "codespan",
                raw: e[0],
                text: n
            };
        }
    }
    br(t) {
        let e = /*#__PURE__*/ this.rules.inline.br.exec(t);
        if (e) return {
            type: "br",
            raw: e[0]
        };
    }
    del(t) {
        let e = /*#__PURE__*/ this.rules.inline.del.exec(t);
        if (e) return {
            type: "del",
            raw: e[0],
            text: e[2],
            tokens: /*#__PURE__*/ this.lexer.inlineTokens(e[2])
        };
    }
    autolink(t) {
        let e = /*#__PURE__*/ this.rules.inline.autolink.exec(t);
        if (e) {
            let n, i;
            return e[2] === "@" ? (n = e[1], i = "mailto:" + n) : (n = e[1], i = n), {
                type: "link",
                raw: e[0],
                text: n,
                href: i,
                tokens: [
                    {
                        type: "text",
                        raw: n,
                        text: n
                    }
                ]
            };
        }
    }
    url(t) {
        let e;
        if (e = /*#__PURE__*/ this.rules.inline.url.exec(t)) {
            let n, i;
            if (e[2] === "@") n = e[0], i = "mailto:" + n;
            else {
                let r;
                do r = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
                while (r !== e[0]);
                n = e[0], e[1] === "www." ? i = "http://" + e[0] : i = e[0];
            }
            return {
                type: "link",
                raw: e[0],
                text: n,
                href: i,
                tokens: [
                    {
                        type: "text",
                        raw: n,
                        text: n
                    }
                ]
            };
        }
    }
    inlineText(t) {
        let e = /*#__PURE__*/ this.rules.inline.text.exec(t);
        if (e) {
            let n = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: e[0],
                text: e[0],
                escaped: n
            };
        }
    }
}, v = class oe {
    static{
        m$1(this, "__Lexer");
    }
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(e){
        this.tokens = [], this.tokens.links = /*#__PURE__*/ Object.create(null), this.options = e || L, this.options.tokenizer = this.options.tokenizer || new N, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: false,
            inRawBlock: false,
            top: true
        };
        let n = {
            other: w,
            block: q.normal,
            inline: P.normal
        };
        this.options.pedantic ? (n.block = q.pedantic, n.inline = P.pedantic) : this.options.gfm && (n.block = q.gfm, this.options.breaks ? n.inline = P.breaks : n.inline = P.gfm), this.tokenizer.rules = n;
    }
    static get rules() {
        return {
            block: q,
            inline: P
        };
    }
    static lex(e, n) {
        return new oe(n).lex(e);
    }
    static lexInline(e, n) {
        return new oe(n).inlineTokens(e);
    }
    lex(e) {
        e = /*#__PURE__*/ e.replace(w.carriageReturn, `
`), this.blockTokens(e, this.tokens);
        for(let n = 0; n < this.inlineQueue.length; n++){
            let i = this.inlineQueue[n];
            this.inlineTokens(i.src, i.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(e, n = [], i = false) {
        for(this.options.pedantic && (e = /*#__PURE__*/ e.replace(w.tabCharGlobal, "    ").replace(w.spaceLine, "")); e;){
            let r;
            if (this.options.extensions?.block?.some((a)=>(r = /*#__PURE__*/ a.call({
                    lexer: this
                }, e, n)) ? (e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r), true) : false)) continue;
            if (r = /*#__PURE__*/ this.tokenizer.space(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let a = /*#__PURE__*/ n.at(-1);
                r.raw.length === 1 && a !== void 0 ? a.raw += `
` : n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.code(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let a = /*#__PURE__*/ n.at(-1);
                a?.type === "paragraph" || a?.type === "text" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.at(-1).src = a.text) : n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.fences(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.heading(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.hr(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.blockquote(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.list(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.html(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.def(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let a = /*#__PURE__*/ n.at(-1);
                a?.type === "paragraph" || a?.type === "text" ? (a.raw += `
` + r.raw, a.text += `
` + r.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                    href: r.href,
                    title: r.title
                });
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.table(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.lheading(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            let s = e;
            if (this.options.extensions?.startBlock) {
                let a = 1 / 0, o = /*#__PURE__*/ e.slice(1), c;
                this.options.extensions.startBlock.forEach((l)=>{
                    c = /*#__PURE__*/ l.call({
                        lexer: this
                    }, o), typeof c == "number" && c >= 0 && (a = /*#__PURE__*/ Math.min(a, c));
                }), a < 1 / 0 && a >= 0 && (s = /*#__PURE__*/ e.substring(0, a + 1));
            }
            if (this.state.top && (r = /*#__PURE__*/ this.tokenizer.paragraph(s))) {
                let a = /*#__PURE__*/ n.at(-1);
                i && a?.type === "paragraph" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : n.push(r), i = s.length !== e.length, e = /*#__PURE__*/ e.substring(r.raw.length);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.text(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let a = /*#__PURE__*/ n.at(-1);
                a?.type === "text" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : n.push(r);
                continue;
            }
            if (e) {
                let a = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(a);
                    break;
                } else throw new Error(a);
            }
        }
        return this.state.top = true, n;
    }
    inline(e, n = []) {
        return this.inlineQueue.push({
            src: e,
            tokens: n
        }), n;
    }
    inlineTokens(e, n = []) {
        let i = e, r = null;
        if (this.tokens.links) {
            let o = /*#__PURE__*/ Object.keys(this.tokens.links);
            if (o.length > 0) for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null;)o.includes(/*#__PURE__*/ r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null;)i = i.slice(0, r.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.blockSkip.exec(i)) != null;)i = i.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        let s = false, a = "";
        for(; e;){
            s || (a = ""), s = false;
            let o;
            if (this.options.extensions?.inline?.some((l)=>(o = /*#__PURE__*/ l.call({
                    lexer: this
                }, e, n)) ? (e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o), true) : false)) continue;
            if (o = /*#__PURE__*/ this.tokenizer.escape(e)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            if (o = /*#__PURE__*/ this.tokenizer.tag(e)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            if (o = /*#__PURE__*/ this.tokenizer.link(e)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            if (o = /*#__PURE__*/ this.tokenizer.reflink(e, this.tokens.links)) {
                e = /*#__PURE__*/ e.substring(o.raw.length);
                let l = /*#__PURE__*/ n.at(-1);
                o.type === "text" && l?.type === "text" ? (l.raw += o.raw, l.text += o.text) : n.push(o);
                continue;
            }
            if (o = /*#__PURE__*/ this.tokenizer.emStrong(e, i, a)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            if (o = /*#__PURE__*/ this.tokenizer.codespan(e)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            if (o = /*#__PURE__*/ this.tokenizer.br(e)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            if (o = /*#__PURE__*/ this.tokenizer.del(e)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            if (o = /*#__PURE__*/ this.tokenizer.autolink(e)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            if (!this.state.inLink && (o = /*#__PURE__*/ this.tokenizer.url(e))) {
                e = /*#__PURE__*/ e.substring(o.raw.length), n.push(o);
                continue;
            }
            let c = e;
            if (this.options.extensions?.startInline) {
                let l = 1 / 0, u = /*#__PURE__*/ e.slice(1), f;
                this.options.extensions.startInline.forEach((h)=>{
                    f = /*#__PURE__*/ h.call({
                        lexer: this
                    }, u), typeof f == "number" && f >= 0 && (l = /*#__PURE__*/ Math.min(l, f));
                }), l < 1 / 0 && l >= 0 && (c = /*#__PURE__*/ e.substring(0, l + 1));
            }
            if (o = /*#__PURE__*/ this.tokenizer.inlineText(c)) {
                e = /*#__PURE__*/ e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = /*#__PURE__*/ o.raw.slice(-1)), s = true;
                let l = /*#__PURE__*/ n.at(-1);
                l?.type === "text" ? (l.raw += o.raw, l.text += o.text) : n.push(o);
                continue;
            }
            if (e) {
                let l = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(l);
                    break;
                } else throw new Error(l);
            }
        }
        return n;
    }
}, Z = class {
    static{
        m$1(this, "_Renderer");
    }
    options;
    parser;
    constructor(t){
        this.options = t || L;
    }
    space(t) {
        return "";
    }
    code({ text: t, lang: e, escaped: n }) {
        let i = (e || "").match(w.notSpaceStart)?.[0], r = t.replace(w.endingNewline, "") + `
`;
        return i ? '<pre><code class="language-' + T(i) + '">' + (n ? r : T(r, true)) + `</code></pre>
` : "<pre><code>" + (n ? r : T(r, true)) + `</code></pre>
`;
    }
    blockquote({ tokens: t }) {
        return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
    }
    html({ text: t }) {
        return t;
    }
    heading({ tokens: t, depth: e }) {
        return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`;
    }
    hr(t) {
        return `<hr>
`;
    }
    list(t) {
        let e = t.ordered, n = t.start, i = "";
        for(let a = 0; a < t.items.length; a++){
            let o = t.items[a];
            i += /*#__PURE__*/ this.listitem(o);
        }
        let r = e ? "ol" : "ul", s = e && n !== 1 ? ' start="' + n + '"' : "";
        return "<" + r + s + `>
` + i + "</" + r + `>
`;
    }
    listitem(t) {
        let e = "";
        if (t.task) {
            let n = /*#__PURE__*/ this.checkbox({
                checked: !!t.checked
            });
            t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = n + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = n + " " + T(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = true)) : t.tokens.unshift({
                type: "text",
                raw: n + " ",
                text: n + " ",
                escaped: true
            }) : e += n + " ";
        }
        return e += /*#__PURE__*/ this.parser.parse(t.tokens, !!t.loose), `<li>${e}</li>
`;
    }
    checkbox({ checked: t }) {
        return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph({ tokens: t }) {
        return `<p>${this.parser.parseInline(t)}</p>
`;
    }
    table(t) {
        let e = "", n = "";
        for(let r = 0; r < t.header.length; r++)n += /*#__PURE__*/ this.tablecell(t.header[r]);
        e += /*#__PURE__*/ this.tablerow({
            text: n
        });
        let i = "";
        for(let r = 0; r < t.rows.length; r++){
            let s = t.rows[r];
            n = "";
            for(let a = 0; a < s.length; a++)n += /*#__PURE__*/ this.tablecell(s[a]);
            i += /*#__PURE__*/ this.tablerow({
                text: n
            });
        }
        return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + i + `</table>
`;
    }
    tablerow({ text: t }) {
        return `<tr>
${t}</tr>
`;
    }
    tablecell(t) {
        let e = /*#__PURE__*/ this.parser.parseInline(t.tokens), n = t.header ? "th" : "td";
        return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
    }
    strong({ tokens: t }) {
        return `<strong>${this.parser.parseInline(t)}</strong>`;
    }
    em({ tokens: t }) {
        return `<em>${this.parser.parseInline(t)}</em>`;
    }
    codespan({ text: t }) {
        return `<code>${T(t, true)}</code>`;
    }
    br(t) {
        return "<br>";
    }
    del({ tokens: t }) {
        return `<del>${this.parser.parseInline(t)}</del>`;
    }
    link({ href: t, title: e, tokens: n }) {
        let i = /*#__PURE__*/ this.parser.parseInline(n), r = /*#__PURE__*/ je(t);
        if (r === null) return i;
        t = r;
        let s = '<a href="' + t + '"';
        return e && (s += ' title="' + T(e) + '"'), s += ">" + i + "</a>", s;
    }
    image({ href: t, title: e, text: n, tokens: i }) {
        i && (n = /*#__PURE__*/ this.parser.parseInline(i, this.parser.textRenderer));
        let r = /*#__PURE__*/ je(t);
        if (r === null) return T(n);
        t = r;
        let s = `<img src="${t}" alt="${n}"`;
        return e && (s += ` title="${T(e)}"`), s += ">", s;
    }
    text(t) {
        return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : T(t.text);
    }
}, me = class {
    static{
        m$1(this, "_TextRenderer");
    }
    strong({ text: t }) {
        return t;
    }
    em({ text: t }) {
        return t;
    }
    codespan({ text: t }) {
        return t;
    }
    del({ text: t }) {
        return t;
    }
    html({ text: t }) {
        return t;
    }
    text({ text: t }) {
        return t;
    }
    link({ text: t }) {
        return "" + t;
    }
    image({ text: t }) {
        return "" + t;
    }
    br() {
        return "";
    }
}, R = class ae {
    static{
        m$1(this, "__Parser");
    }
    options;
    renderer;
    textRenderer;
    constructor(e){
        this.options = e || L, this.options.renderer = this.options.renderer || new Z, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new me;
    }
    static parse(e, n) {
        return new ae(n).parse(e);
    }
    static parseInline(e, n) {
        return new ae(n).parseInline(e);
    }
    parse(e, n = true) {
        let i = "";
        for(let r = 0; r < e.length; r++){
            let s = e[r];
            if (this.options.extensions?.renderers?.[s.type]) {
                let o = s, c = /*#__PURE__*/ this.options.extensions.renderers[o.type].call({
                    parser: this
                }, o);
                if (c !== false || ![
                    "space",
                    "hr",
                    "heading",
                    "code",
                    "table",
                    "blockquote",
                    "list",
                    "html",
                    "paragraph",
                    "text"
                ].includes(o.type)) {
                    i += c || "";
                    continue;
                }
            }
            let a = s;
            switch(a.type){
                case "space":
                    {
                        i += /*#__PURE__*/ this.renderer.space(a);
                        continue;
                    }
                case "hr":
                    {
                        i += /*#__PURE__*/ this.renderer.hr(a);
                        continue;
                    }
                case "heading":
                    {
                        i += /*#__PURE__*/ this.renderer.heading(a);
                        continue;
                    }
                case "code":
                    {
                        i += /*#__PURE__*/ this.renderer.code(a);
                        continue;
                    }
                case "table":
                    {
                        i += /*#__PURE__*/ this.renderer.table(a);
                        continue;
                    }
                case "blockquote":
                    {
                        i += /*#__PURE__*/ this.renderer.blockquote(a);
                        continue;
                    }
                case "list":
                    {
                        i += /*#__PURE__*/ this.renderer.list(a);
                        continue;
                    }
                case "html":
                    {
                        i += /*#__PURE__*/ this.renderer.html(a);
                        continue;
                    }
                case "paragraph":
                    {
                        i += /*#__PURE__*/ this.renderer.paragraph(a);
                        continue;
                    }
                case "text":
                    {
                        let o = a, c = /*#__PURE__*/ this.renderer.text(o);
                        for(; r + 1 < e.length && e[r + 1].type === "text";)o = e[++r], c += `
` + this.renderer.text(o);
                        n ? i += /*#__PURE__*/ this.renderer.paragraph({
                            type: "paragraph",
                            raw: c,
                            text: c,
                            tokens: [
                                {
                                    type: "text",
                                    raw: c,
                                    text: c,
                                    escaped: true
                                }
                            ]
                        }) : i += c;
                        continue;
                    }
                default:
                    {
                        let o = 'Token with "' + a.type + '" type was not found.';
                        if (this.options.silent) return console.error(o), "";
                        throw new Error(o);
                    }
            }
        }
        return i;
    }
    parseInline(e, n = this.renderer) {
        let i = "";
        for(let r = 0; r < e.length; r++){
            let s = e[r];
            if (this.options.extensions?.renderers?.[s.type]) {
                let o = /*#__PURE__*/ this.options.extensions.renderers[s.type].call({
                    parser: this
                }, s);
                if (o !== false || ![
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
                ].includes(s.type)) {
                    i += o || "";
                    continue;
                }
            }
            let a = s;
            switch(a.type){
                case "escape":
                    {
                        i += /*#__PURE__*/ n.text(a);
                        break;
                    }
                case "html":
                    {
                        i += /*#__PURE__*/ n.html(a);
                        break;
                    }
                case "link":
                    {
                        i += /*#__PURE__*/ n.link(a);
                        break;
                    }
                case "image":
                    {
                        i += /*#__PURE__*/ n.image(a);
                        break;
                    }
                case "strong":
                    {
                        i += /*#__PURE__*/ n.strong(a);
                        break;
                    }
                case "em":
                    {
                        i += /*#__PURE__*/ n.em(a);
                        break;
                    }
                case "codespan":
                    {
                        i += /*#__PURE__*/ n.codespan(a);
                        break;
                    }
                case "br":
                    {
                        i += /*#__PURE__*/ n.br(a);
                        break;
                    }
                case "del":
                    {
                        i += /*#__PURE__*/ n.del(a);
                        break;
                    }
                case "text":
                    {
                        i += /*#__PURE__*/ n.text(a);
                        break;
                    }
                default:
                    {
                        let o = 'Token with "' + a.type + '" type was not found.';
                        if (this.options.silent) return console.error(o), "";
                        throw new Error(o);
                    }
            }
        }
        return i;
    }
}, G = class {
    static{
        m$1(this, "_Hooks");
    }
    options;
    block;
    constructor(t){
        this.options = t || L;
    }
    static passThroughHooks = new Set([
        "preprocess",
        "postprocess",
        "processAllTokens"
    ]);
    preprocess(t) {
        return t;
    }
    postprocess(t) {
        return t;
    }
    processAllTokens(t) {
        return t;
    }
    provideLexer() {
        return this.block ? v.lex : v.lexInline;
    }
    provideParser() {
        return this.block ? R.parse : R.parseInline;
    }
}, Ut = class {
    static{
        m$1(this, "Marked");
    }
    defaults = le();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = R;
    Renderer = Z;
    TextRenderer = me;
    Lexer = v;
    Tokenizer = N;
    Hooks = G;
    constructor(...t){
        this.use(...t);
    }
    walkTokens(t, e) {
        let n = [];
        for (let i of t)switch(n = /*#__PURE__*/ n.concat(/*#__PURE__*/ e.call(this, i)), i.type){
            case "table":
                {
                    let r = i;
                    for (let s of r.header)n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(s.tokens, e));
                    for (let s of r.rows)for (let a of s)n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(a.tokens, e));
                    break;
                }
            case "list":
                {
                    let r = i;
                    n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(r.items, e));
                    break;
                }
            default:
                {
                    let r = i;
                    this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((s)=>{
                        let a = /*#__PURE__*/ r[s].flat(1 / 0);
                        n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(a, e));
                    }) : r.tokens && (n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(r.tokens, e)));
                }
        }
        return n;
    }
    use(...t) {
        let e = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        return t.forEach((n)=>{
            let i = {
                ...n
            };
            if (i.async = this.defaults.async || i.async || false, n.extensions && (n.extensions.forEach((r)=>{
                if (!r.name) throw new Error("extension name required");
                if ("renderer" in r) {
                    let s = e.renderers[r.name];
                    s ? e.renderers[r.name] = function(...a) {
                        let o = /*#__PURE__*/ r.renderer.apply(this, a);
                        return o === false && (o = /*#__PURE__*/ s.apply(this, a)), o;
                    } : e.renderers[r.name] = r.renderer;
                }
                if ("tokenizer" in r) {
                    if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                    let s = e[r.level];
                    s ? s.unshift(r.tokenizer) : e[r.level] = [
                        r.tokenizer
                    ], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [
                        r.start
                    ] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [
                        r.start
                    ]));
                }
                "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens);
            }), i.extensions = e), n.renderer) {
                let r = this.defaults.renderer || new Z(this.defaults);
                for(let s in n.renderer){
                    if (!(s in r)) throw new Error(`renderer '${s}' does not exist`);
                    if ([
                        "options",
                        "parser"
                    ].includes(s)) continue;
                    let a = s, o = n.renderer[a], c = r[a];
                    r[a] = (...l)=>{
                        let u = /*#__PURE__*/ o.apply(r, l);
                        return u === false && (u = /*#__PURE__*/ c.apply(r, l)), u || "";
                    };
                }
                i.renderer = r;
            }
            if (n.tokenizer) {
                let r = this.defaults.tokenizer || new N(this.defaults);
                for(let s in n.tokenizer){
                    if (!(s in r)) throw new Error(`tokenizer '${s}' does not exist`);
                    if ([
                        "options",
                        "rules",
                        "lexer"
                    ].includes(s)) continue;
                    let a = s, o = n.tokenizer[a], c = r[a];
                    r[a] = (...l)=>{
                        let u = /*#__PURE__*/ o.apply(r, l);
                        return u === false && (u = /*#__PURE__*/ c.apply(r, l)), u;
                    };
                }
                i.tokenizer = r;
            }
            if (n.hooks) {
                let r = this.defaults.hooks || new G;
                for(let s in n.hooks){
                    if (!(s in r)) throw new Error(`hook '${s}' does not exist`);
                    if ([
                        "options",
                        "block"
                    ].includes(s)) continue;
                    let a = s, o = n.hooks[a], c = r[a];
                    G.passThroughHooks.has(s) ? r[a] = (l)=>{
                        if (this.defaults.async) return Promise.resolve(/*#__PURE__*/ o.call(r, l)).then((f)=>c.call(r, f));
                        let u = /*#__PURE__*/ o.call(r, l);
                        return c.call(r, u);
                    } : r[a] = (...l)=>{
                        let u = /*#__PURE__*/ o.apply(r, l);
                        return u === false && (u = /*#__PURE__*/ c.apply(r, l)), u;
                    };
                }
                i.hooks = r;
            }
            if (n.walkTokens) {
                let r = this.defaults.walkTokens, s = n.walkTokens;
                i.walkTokens = function(a) {
                    let o = [];
                    return o.push(/*#__PURE__*/ s.call(this, a)), r && (o = /*#__PURE__*/ o.concat(/*#__PURE__*/ r.call(this, a))), o;
                };
            }
            this.defaults = {
                ...this.defaults,
                ...i
            };
        }), this;
    }
    setOptions(t) {
        return this.defaults = {
            ...this.defaults,
            ...t
        }, this;
    }
    lexer(t, e) {
        return v.lex(t, e ?? this.defaults);
    }
    parser(t, e) {
        return R.parse(t, e ?? this.defaults);
    }
    parseMarkdown(t) {
        return m$1((n, i)=>{
            let r = {
                ...i
            }, s = {
                ...this.defaults,
                ...r
            }, a = /*#__PURE__*/ this.onError(!!s.silent, !!s.async);
            if (this.defaults.async === true && r.async === false) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            if (typeof n > "u" || n === null) return a(new Error("marked(): input parameter is undefined or null"));
            if (typeof n != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
            s.hooks && (s.hooks.options = s, s.hooks.block = t);
            let o = s.hooks ? s.hooks.provideLexer() : t ? v.lex : v.lexInline, c = s.hooks ? s.hooks.provideParser() : t ? R.parse : R.parseInline;
            if (s.async) return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((l)=>o(l, s)).then((l)=>s.hooks ? s.hooks.processAllTokens(l) : l).then((l)=>s.walkTokens ? Promise.all(/*#__PURE__*/ this.walkTokens(l, s.walkTokens)).then(()=>l) : l).then((l)=>c(l, s)).then((l)=>s.hooks ? s.hooks.postprocess(l) : l).catch(a);
            try {
                s.hooks && (n = /*#__PURE__*/ s.hooks.preprocess(n));
                let l = /*#__PURE__*/ o(n, s);
                s.hooks && (l = /*#__PURE__*/ s.hooks.processAllTokens(l)), s.walkTokens && this.walkTokens(l, s.walkTokens);
                let u = /*#__PURE__*/ c(l, s);
                return s.hooks && (u = /*#__PURE__*/ s.hooks.postprocess(u)), u;
            } catch (l) {
                return a(l);
            }
        }, "parse2");
    }
    onError(t, e) {
        return (n)=>{
            if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
                let i = "<p>An error occurred:</p><pre>" + T(n.message + "", true) + "</pre>";
                return e ? Promise.resolve(i) : i;
            }
            if (e) return Promise.reject(n);
            throw n;
        };
    }
}, $ = new Ut;
function g(t, e) {
    return $.parse(t, e);
}
m$1(g, "marked");
g.options = g.setOptions = function(t) {
    return $.setOptions(t), g.defaults = $.defaults, Oe(g.defaults), g;
};
g.getDefaults = le;
g.defaults = L;
g.use = function(...t) {
    return $.use(...t), g.defaults = $.defaults, Oe(g.defaults), g;
};
g.walkTokens = function(t, e) {
    return $.walkTokens(t, e);
};
g.parseInline = $.parseInline;
g.Parser = R;
g.parser = R.parse;
g.Renderer = Z;
g.TextRenderer = me;
g.Lexer = v;
g.lexer = v.lex;
g.Tokenizer = N;
g.Hooks = G;
g.parse = g;
g.options;
g.setOptions;
g.use;
g.walkTokens;
g.parseInline;
R.parse;
v.lex;
function Qt(t, { markdownAutoWrap: e }) {
    let i = /*#__PURE__*/ t.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), r = /*#__PURE__*/ Me(i);
    return e === false ? r.replace(/ /g, "&nbsp;") : r;
}
m$1(Qt, "preprocessMarkdown");
function Ke(t, e = {}) {
    let n = /*#__PURE__*/ Qt(t, e), i = /*#__PURE__*/ g.lexer(n), r = [
        []
    ], s = 0;
    function a(o, c = "normal") {
        o.type === "text" ? o.text.split(`
`).forEach((u, f)=>{
            f !== 0 && (s++, r.push([])), u.split(" ").forEach((h)=>{
                h = /*#__PURE__*/ h.replace(/&#39;/g, "'"), h && r[s].push({
                    content: h,
                    type: c
                });
            });
        }) : o.type === "strong" || o.type === "em" ? o.tokens.forEach((l)=>{
            a(l, o.type);
        }) : o.type === "html" && r[s].push({
            content: o.text,
            type: "normal"
        });
    }
    return m$1(a, "processNode"), i.forEach((o)=>{
        o.type === "paragraph" ? o.tokens?.forEach((c)=>{
            a(c);
        }) : o.type === "html" ? r[s].push({
            content: o.text,
            type: "normal"
        }) : r[s].push({
            content: o.raw,
            type: "normal"
        });
    }), r;
}
m$1(Ke, "markdownToLines");
function Xe(t, { markdownAutoWrap: e } = {}) {
    let n = /*#__PURE__*/ g.lexer(t);
    function i(r) {
        return r.type === "text" ? e === false ? r.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : r.text.replace(/\n */g, "<br/>") : r.type === "strong" ? `<strong>${r.tokens?.map(i).join("")}</strong>` : r.type === "em" ? `<em>${r.tokens?.map(i).join("")}</em>` : r.type === "paragraph" ? `<p>${r.tokens?.map(i).join("")}</p>` : r.type === "space" ? "" : r.type === "html" ? `${r.text}` : r.type === "escape" ? r.text : (pt$1.warn(`Unsupported markdown: ${r.type}`), r.raw);
    }
    return m$1(i, "output"), n.map(i).join("");
}
m$1(Xe, "markdownToHTML");
function Kt(t) {
    return Intl.Segmenter ? [
        .../*#__PURE__*/ new Intl.Segmenter().segment(t)
    ].map((e)=>e.segment) : [
        ...t
    ];
}
m$1(Kt, "splitTextToChars");
function Xt(t, e) {
    let n = /*#__PURE__*/ Kt(e.content);
    return Je(t, [], n, e.type);
}
m$1(Xt, "splitWordToFitWidth");
function Je(t, e, n, i) {
    if (n.length === 0) return [
        {
            content: /*#__PURE__*/ e.join(""),
            type: i
        },
        {
            content: "",
            type: i
        }
    ];
    let [r, ...s] = n, a = [
        ...e,
        r
    ];
    return t([
        {
            content: /*#__PURE__*/ a.join(""),
            type: i
        }
    ]) ? Je(t, a, s, i) : (e.length === 0 && r && (e.push(r), n.shift()), [
        {
            content: /*#__PURE__*/ e.join(""),
            type: i
        },
        {
            content: /*#__PURE__*/ n.join(""),
            type: i
        }
    ]);
}
m$1(Je, "splitWordToFitWidthRecursion");
function Ye(t, e) {
    if (t.some(({ content: n })=>n.includes(`
`))) throw new Error("splitLineToFitWidth does not support newlines in the line");
    return ke(t, e);
}
m$1(Ye, "splitLineToFitWidth");
function ke(t, e, n = [], i = []) {
    if (t.length === 0) return i.length > 0 && n.push(i), n.length > 0 ? n : [];
    let r = "";
    t[0].content === " " && (r = " ", t.shift());
    let s = t.shift() ?? {
        content: " ",
        type: "normal"
    }, a = [
        ...i
    ];
    if (r !== "" && a.push({
        content: r,
        type: "normal"
    }), a.push(s), e(a)) return ke(t, e, n, a);
    if (i.length > 0) n.push(i), t.unshift(s);
    else if (s.content) {
        let [o, c] = Xt(e, s);
        n.push([
            o
        ]), c.content && t.unshift(c);
    }
    return ke(t, e, n);
}
m$1(ke, "splitLineToFitWidthRecursion");
function et(t, e) {
    e && t.attr("style", e);
}
m$1(et, "applyStyle");
async function Jt(t, e, n, i, r = false, s = Mt$1()) {
    let a = /*#__PURE__*/ t.append("foreignObject");
    a.attr("width", `${10 * n}px`), a.attr("height", `${10 * n}px`);
    let o = /*#__PURE__*/ a.append("xhtml:div"), c = lr(e.label) ? await Io(/*#__PURE__*/ e.label.replace(nn.lineBreakRegex, `
`), s) : rt$1(e.label, s), l = e.isNode ? "nodeLabel" : "edgeLabel", u = /*#__PURE__*/ o.append("span");
    u.html(c), et(u, e.labelStyle), u.attr("class", `${l} ${i}`), et(o, e.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", n + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), r && o.attr("class", "labelBkg");
    let f = /*#__PURE__*/ o.node().getBoundingClientRect();
    return f.width === n && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", n + "px"), f = /*#__PURE__*/ o.node().getBoundingClientRect()), a.node();
}
m$1(Jt, "addHtmlSpan");
function xe(t, e, n) {
    return t.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * n - .1 + "em").attr("dy", n + "em");
}
m$1(xe, "createTspan");
function Yt(t, e, n) {
    let i = /*#__PURE__*/ t.append("text"), r = /*#__PURE__*/ xe(i, 1, e);
    be(r, n);
    let s = /*#__PURE__*/ r.node().getComputedTextLength();
    return i.remove(), s;
}
m$1(Yt, "computeWidthOfText");
function vr(t, e, n) {
    let i = /*#__PURE__*/ t.append("text"), r = /*#__PURE__*/ xe(i, 1, e);
    be(r, [
        {
            content: n,
            type: "normal"
        }
    ]);
    let s = r.node()?.getBoundingClientRect();
    return s && i.remove(), s;
}
m$1(vr, "computeDimensionOfText");
function en(t, e, n, i = false) {
    let s = /*#__PURE__*/ e.append("g"), a = /*#__PURE__*/ s.insert("rect").attr("class", "background").attr("style", "stroke: none"), o = /*#__PURE__*/ s.append("text").attr("y", "-10.1"), c = 0;
    for (let l of n){
        let u = /*#__PURE__*/ m$1((h)=>Yt(s, 1.1, h) <= t, "checkWidth"), f = u(l) ? [
            l
        ] : Ye(l, u);
        for (let h of f){
            let k = /*#__PURE__*/ xe(o, c, 1.1);
            be(k, h), c++;
        }
    }
    if (i) {
        let l = /*#__PURE__*/ o.node().getBBox(), u = 2;
        return a.attr("x", l.x - u).attr("y", l.y - u).attr("width", l.width + 2 * u).attr("height", l.height + 2 * u), s.node();
    } else return o.node();
}
m$1(en, "createFormattedText");
function be(t, e) {
    t.text(""), e.forEach((n, i)=>{
        let r = /*#__PURE__*/ t.append("tspan").attr("font-style", n.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", n.type === "strong" ? "bold" : "normal");
        i === 0 ? r.text(n.content) : r.text(" " + n.content);
    });
}
m$1(be, "updateTextContentAndStyles");
async function tn(t, e = {}) {
    let n = [];
    t.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (r, s, a)=>(n.push(/*#__PURE__*/ (async ()=>{
            let o = `${s}:${a}`;
            return await Ee(o) ? await Ae(o, void 0, {
                class: "label-icon"
            }) : `<i class='${rt$1(r, e).replace(":", " ")}'></i>`;
        })()), r));
    let i = await Promise.all(n);
    return t.replace(/(fa[bklrs]?):fa-([\w-]+)/g, ()=>i.shift() ?? "");
}
m$1(tn, "replaceIconSubstring");
var Rr = /*#__PURE__*/ m$1(async (t, e = "", { style: n = "", isTitle: i = false, classes: r = "", useHtmlLabels: s = true, isNode: a = true, width: o = 200, addSvgBackground: c = false } = {}, l)=>{
    if (pt$1.debug("XYZ createText", e, n, i, r, s, a, "addSvgBackground: ", c), s) {
        let u = /*#__PURE__*/ Xe(e, l), f = await tn(/*#__PURE__*/ Yt$1(u), l), h = /*#__PURE__*/ e.replace(/\\\\/g, "\\"), k = {
            isNode: a,
            label: lr(e) ? h : f,
            labelStyle: /*#__PURE__*/ n.replace("fill:", "color:")
        };
        return await Jt(t, k, o, r, c, l);
    } else {
        let u = /*#__PURE__*/ e.replace(/<br\s*\/?>/g, "<br/>"), f = /*#__PURE__*/ Ke(/*#__PURE__*/ u.replace("<br>", "<br/>"), l), h = /*#__PURE__*/ en(o, t, f, e ? c : false);
        if (a) {
            /stroke:/.exec(n) && (n = /*#__PURE__*/ n.replace("stroke:", "lineColor:"));
            let k = /*#__PURE__*/ n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            ia(h).attr("style", k);
        } else {
            let k = /*#__PURE__*/ n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
            ia(h).select("rect").attr("style", /*#__PURE__*/ k.replace(/background:/g, "fill:"));
            let d = /*#__PURE__*/ n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            ia(h).select("text").attr("style", d);
        }
        return h;
    }
}, "createText");
export { Ae as A, Me as M, Rr as R, Zn as Z, ht as h, tn as t, vr as v };
