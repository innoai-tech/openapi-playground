import { X as Xe$1 } from './vendor-min-mermaid~chunk-YM3XIQPS.DjUuqvt-.chunk.js';
import { t as tt$1, R as Rl, i as ih, C as Cf, g as gC, H as Hl } from './vendor-min-mermaid~chunk-ZKYS2E5M.BBMfbsl4.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.ByXaayWf.chunk.js';
function he(o) {
    for(var e = [], t = 1; t < arguments.length; t++)e[t - 1] = arguments[t];
    var n = Array.from(typeof o == "string" ? [
        o
    ] : o);
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var r = n.reduce(function(l, a) {
        var c = a.match(/\n([\t ]+|(?!\s).)/g);
        return c ? l.concat(c.map(function(p) {
            var h, f;
            return (f = (h = p.match(/[\t ]/g)) === null || h === void 0 ? void 0 : h.length) !== null && f !== void 0 ? f : 0;
        })) : l;
    }, []);
    if (r.length) {
        var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, r) + "}", "g");
        n = n.map(function(l) {
            return l.replace(i, `
`);
        });
    }
    n[0] = n[0].replace(/^\r?\n/, "");
    var s = n[0];
    return e.forEach(function(l, a) {
        var c = s.match(/(?:^|\n)( *)$/), p = c ? c[1] : "", h = l;
        typeof l == "string" && l.includes(`
`) && (h = String(l).split(`
`).map(function(f, g) {
            return g === 0 ? f : "" + p + f;
        }).join(`
`)), s += h + n[a + 1];
    }), s;
}
m$1(he, "dedent");
function N() {
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
m$1(N, "_getDefaults");
var R = N();
function me(o) {
    R = o;
}
m$1(me, "changeDefaults");
var E = {
    exec: m$1(()=>null, "exec")
};
function k(o) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    let t = typeof o == "string" ? o : o.source, n = {
        replace: m$1((r, i)=>{
            let s = typeof i == "string" ? i : i.source;
            return s = s.replace(b.caret, "$1"), t = t.replace(r, s), n;
        }, "replace"),
        getRegex: m$1(()=>new RegExp(t, e), "getRegex")
    };
    return n;
}
m$1(k, "edit");
var b = {
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
    listItemRegex: m$1((o)=>new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
    nextBulletRegex: m$1((o)=>new RegExp(`^ {0,${Math.min(3, o - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
    hrRegex: m$1((o)=>new RegExp(`^ {0,${Math.min(3, o - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
    fencesBeginRegex: m$1((o)=>new RegExp(`^ {0,${Math.min(3, o - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
    headingBeginRegex: m$1((o)=>new RegExp(`^ {0,${Math.min(3, o - 1)}}#`), "headingBeginRegex"),
    htmlBeginRegex: m$1((o)=>new RegExp(`^ {0,${Math.min(3, o - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
}, Be = /^(?:[ \t]*(?:\n|$))+/, Pe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ve = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, B = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, We = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, H = /(?:[*+-]|\d{1,9}[.)])/, xe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, be = k(xe).replace(/bull/g, H).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), qe = k(xe).replace(/bull/g, H).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Q = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, je = /^[^\n]+/, U = /(?!\s*\])(?:\\.|[^\[\]\\])+/, De = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", U).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ze = k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, H).getRegex(), q = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", X = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Oe = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", X).replace("tag", q).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), we = k(Q).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex(), Ge = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", we).getRegex(), K = {
    blockquote: Ge,
    code: Pe,
    def: De,
    fences: ve,
    heading: We,
    hr: B,
    html: Oe,
    lheading: be,
    list: Ze,
    newline: Be,
    paragraph: we,
    table: E,
    text: je
}, ue = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex(), Fe = {
    ...K,
    lheading: qe,
    table: ue,
    paragraph: k(Q).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ue).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex()
}, Ne = {
    ...K,
    html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", X).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: E,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: k(Q).replace("hr", B).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", be).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, He = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Qe = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ye = /^( {2,}|\\)\n(?!\s*$)/, Ue = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, j = /[\p{P}\p{S}]/u, V = /[\s\p{P}\p{S}]/u, Te = /[^\s\p{P}\p{S}]/u, Xe = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, V).getRegex(), Se = /(?!~)[\p{P}\p{S}]/u, Ke = /(?!~)[\s\p{P}\p{S}]/u, Ve = /(?:[^\s\p{P}\p{S}]|~)/u, Ye = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, $e = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Je = k($e, "u").replace(/punct/g, j).getRegex(), et = k($e, "u").replace(/punct/g, Se).getRegex(), Re = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", tt = k(Re, "gu").replace(/notPunctSpace/g, Te).replace(/punctSpace/g, V).replace(/punct/g, j).getRegex(), nt = k(Re, "gu").replace(/notPunctSpace/g, Ve).replace(/punctSpace/g, Ke).replace(/punct/g, Se).getRegex(), rt = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Te).replace(/punctSpace/g, V).replace(/punct/g, j).getRegex(), st = k(/\\(punct)/, "gu").replace(/punct/g, j).getRegex(), it = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), lt = k(X).replace("(?:-->|$)", "-->").getRegex(), ot = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", lt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), W = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, at = k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", W).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Le = k(/^!?\[(label)\]\[(ref)\]/).replace("label", W).replace("ref", U).getRegex(), ze = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", U).getRegex(), ct = k("reflink|nolink(?!\\()", "g").replace("reflink", Le).replace("nolink", ze).getRegex(), Y = {
    _backpedal: E,
    anyPunctuation: st,
    autolink: it,
    blockSkip: Ye,
    br: ye,
    code: Qe,
    del: E,
    emStrongLDelim: Je,
    emStrongRDelimAst: tt,
    emStrongRDelimUnd: rt,
    escape: He,
    link: at,
    nolink: ze,
    punctuation: Xe,
    reflink: Le,
    reflinkSearch: ct,
    tag: ot,
    text: Ue,
    url: E
}, pt = {
    ...Y,
    link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", W).getRegex(),
    reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", W).getRegex()
}, G = {
    ...Y,
    emStrongRDelimAst: nt,
    emStrongLDelim: et,
    url: k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, ht = {
    ...G,
    br: k(ye).replace("{2,}", "*").getRegex(),
    text: k(G.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, v = {
    normal: K,
    gfm: Fe,
    pedantic: Ne
}, M = {
    normal: Y,
    gfm: G,
    breaks: ht,
    pedantic: pt
}, ut = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}, fe = m$1((o)=>ut[o], "getEscapeReplacement");
function S(o, e) {
    if (e) {
        if (b.escapeTest.test(o)) return o.replace(b.escapeReplace, fe);
    } else if (b.escapeTestNoEncode.test(o)) return o.replace(b.escapeReplaceNoEncode, fe);
    return o;
}
m$1(S, "escape");
function ge(o) {
    try {
        o = encodeURI(o).replace(b.percentDecode, "%");
    } catch  {
        return null;
    }
    return o;
}
m$1(ge, "cleanUrl");
function de(o, e) {
    let t = o.replace(b.findPipe, (i, s, l)=>{
        let a = false, c = s;
        for(; --c >= 0 && l[c] === "\\";)a = !a;
        return a ? "|" : " |";
    }), n = t.split(b.splitPipe), r = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
    else for(; n.length < e;)n.push("");
    for(; r < n.length; r++)n[r] = n[r].trim().replace(b.slashPipe, "|");
    return n;
}
m$1(de, "splitCells");
function I(o, e, t) {
    let n = o.length;
    if (n === 0) return "";
    let r = 0;
    for(; r < n && o.charAt(n - r - 1) === e;)r++;
    return o.slice(0, n - r);
}
m$1(I, "rtrim");
function ft(o, e) {
    if (o.indexOf(e[1]) === -1) return -1;
    let t = 0;
    for(let n = 0; n < o.length; n++)if (o[n] === "\\") n++;
    else if (o[n] === e[0]) t++;
    else if (o[n] === e[1] && (t--, t < 0)) return n;
    return -1;
}
m$1(ft, "findClosingBracket");
function ke(o, e, t, n, r) {
    let i = e.href, s = e.title || null, l = o[1].replace(r.other.outputLinkReplace, "$1");
    if (o[0].charAt(0) !== "!") {
        n.state.inLink = true;
        let a = {
            type: "link",
            raw: t,
            href: i,
            title: s,
            text: l,
            tokens: n.inlineTokens(l)
        };
        return n.state.inLink = false, a;
    }
    return {
        type: "image",
        raw: t,
        href: i,
        title: s,
        text: l
    };
}
m$1(ke, "outputLink");
function gt(o, e, t) {
    let n = o.match(t.other.indentCodeCompensation);
    if (n === null) return e;
    let r = n[1];
    return e.split(`
`).map((i)=>{
        let s = i.match(t.other.beginningSpace);
        if (s === null) return i;
        let [l] = s;
        return l.length >= r.length ? i.slice(r.length) : i;
    }).join(`
`);
}
m$1(gt, "indentCodeCompensation");
var z = class {
    static #_ = m$1(this, "_Tokenizer");
    options;
    rules;
    lexer;
    constructor(e){
        this.options = e || R;
    }
    space(e) {
        let t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return {
            type: "space",
            raw: t[0]
        };
    }
    code(e) {
        let t = this.rules.block.code.exec(e);
        if (t) {
            let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? n : I(n, `
`)
            };
        }
    }
    fences(e) {
        let t = this.rules.block.fences.exec(e);
        if (t) {
            let n = t[0], r = gt(n, t[3] || "", this.rules);
            return {
                type: "code",
                raw: n,
                lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                text: r
            };
        }
    }
    heading(e) {
        let t = this.rules.block.heading.exec(e);
        if (t) {
            let n = t[2].trim();
            if (this.rules.other.endingHash.test(n)) {
                let r = I(n, "#");
                (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
            }
            return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: n,
                tokens: this.lexer.inline(n)
            };
        }
    }
    hr(e) {
        let t = this.rules.block.hr.exec(e);
        if (t) return {
            type: "hr",
            raw: I(t[0], `
`)
        };
    }
    blockquote(e) {
        let t = this.rules.block.blockquote.exec(e);
        if (t) {
            let n = I(t[0], `
`).split(`
`), r = "", i = "", s = [];
            for(; n.length > 0;){
                let l = false, a = [], c;
                for(c = 0; c < n.length; c++)if (this.rules.other.blockquoteStart.test(n[c])) a.push(n[c]), l = true;
                else if (!l) a.push(n[c]);
                else break;
                n = n.slice(c);
                let p = a.join(`
`), h = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                r = r ? `${r}
${p}` : p, i = i ? `${i}
${h}` : h;
                let f = this.lexer.state.top;
                if (this.lexer.state.top = true, this.lexer.blockTokens(h, s, true), this.lexer.state.top = f, n.length === 0) break;
                let g = s.at(-1);
                if (g?.type === "code") break;
                if (g?.type === "blockquote") {
                    let x = g, m = x.raw + `
` + n.join(`
`), w = this.blockquote(m);
                    s[s.length - 1] = w, r = r.substring(0, r.length - x.raw.length) + w.raw, i = i.substring(0, i.length - x.text.length) + w.text;
                    break;
                } else if (g?.type === "list") {
                    let x = g, m = x.raw + `
` + n.join(`
`), w = this.list(m);
                    s[s.length - 1] = w, r = r.substring(0, r.length - g.raw.length) + w.raw, i = i.substring(0, i.length - x.raw.length) + w.raw, n = m.substring(s.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return {
                type: "blockquote",
                raw: r,
                tokens: s,
                text: i
            };
        }
    }
    list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
            let n = t[1].trim(), r = n.length > 1, i = {
                type: "list",
                raw: "",
                ordered: r,
                start: r ? +n.slice(0, -1) : "",
                loose: false,
                items: []
            };
            n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
            let s = this.rules.other.listItemRegex(n), l = false;
            for(; e;){
                let c = false, p = "", h = "";
                if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
                p = t[0], e = e.substring(p.length);
                let f = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (D)=>" ".repeat(3 * D.length)), g = e.split(`
`, 1)[0], x = !f.trim(), m = 0;
                if (this.options.pedantic ? (m = 2, h = f.trimStart()) : x ? m = t[1].length + 1 : (m = t[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, h = f.slice(m), m += t[1].length), x && this.rules.other.blankLine.test(g) && (p += g + `
`, e = e.substring(g.length + 1), c = true), !c) {
                    let D = this.rules.other.nextBulletRegex(m), re = this.rules.other.hrRegex(m), se = this.rules.other.fencesBeginRegex(m), ie = this.rules.other.headingBeginRegex(m), _e = this.rules.other.htmlBeginRegex(m);
                    for(; e;){
                        let Z = e.split(`
`, 1)[0], C;
                        if (g = Z, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), C = g) : C = g.replace(this.rules.other.tabCharGlobal, "    "), se.test(g) || ie.test(g) || _e.test(g) || D.test(g) || re.test(g)) break;
                        if (C.search(this.rules.other.nonSpaceChar) >= m || !g.trim()) h += `
` + C.slice(m);
                        else {
                            if (x || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || se.test(f) || ie.test(f) || re.test(f)) break;
                            h += `
` + g;
                        }
                        !x && !g.trim() && (x = true), p += Z + `
`, e = e.substring(Z.length + 1), f = C.slice(m);
                    }
                }
                i.loose || (l ? i.loose = true : this.rules.other.doubleBlankLine.test(p) && (l = true));
                let w = null, ne;
                this.options.gfm && (w = this.rules.other.listIsTask.exec(h), w && (ne = w[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
                    type: "list_item",
                    raw: p,
                    task: !!w,
                    checked: ne,
                    loose: false,
                    text: h,
                    tokens: []
                }), i.raw += p;
            }
            let a = i.items.at(-1);
            if (a) a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
            else return;
            i.raw = i.raw.trimEnd();
            for(let c = 0; c < i.items.length; c++)if (this.lexer.state.top = false, i.items[c].tokens = this.lexer.blockTokens(i.items[c].text, []), !i.loose) {
                let p = i.items[c].tokens.filter((f)=>f.type === "space"), h = p.length > 0 && p.some((f)=>this.rules.other.anyLine.test(f.raw));
                i.loose = h;
            }
            if (i.loose) for(let c = 0; c < i.items.length; c++)i.items[c].loose = true;
            return i;
        }
    }
    html(e) {
        let t = this.rules.block.html.exec(e);
        if (t) return {
            type: "html",
            block: true,
            raw: t[0],
            pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
            text: t[0]
        };
    }
    def(e) {
        let t = this.rules.block.def.exec(e);
        if (t) {
            let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
            return {
                type: "def",
                tag: n,
                raw: t[0],
                href: r,
                title: i
            };
        }
    }
    table(e) {
        let t = this.rules.block.table.exec(e);
        if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
        let n = de(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
            type: "table",
            raw: t[0],
            header: [],
            align: [],
            rows: []
        };
        if (n.length === r.length) {
            for (let l of r)this.rules.other.tableAlignRight.test(l) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? s.align.push("left") : s.align.push(null);
            for(let l = 0; l < n.length; l++)s.header.push({
                text: n[l],
                tokens: this.lexer.inline(n[l]),
                header: true,
                align: s.align[l]
            });
            for (let l of i)s.rows.push(de(l, s.header.length).map((a, c)=>({
                    text: a,
                    tokens: this.lexer.inline(a),
                    header: false,
                    align: s.align[c]
                })));
            return s;
        }
    }
    lheading(e) {
        let t = this.rules.block.lheading.exec(e);
        if (t) return {
            type: "heading",
            raw: t[0],
            depth: t[2].charAt(0) === "=" ? 1 : 2,
            text: t[1],
            tokens: this.lexer.inline(t[1])
        };
    }
    paragraph(e) {
        let t = this.rules.block.paragraph.exec(e);
        if (t) {
            let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
            return {
                type: "paragraph",
                raw: t[0],
                text: n,
                tokens: this.lexer.inline(n)
            };
        }
    }
    text(e) {
        let t = this.rules.block.text.exec(e);
        if (t) return {
            type: "text",
            raw: t[0],
            text: t[0],
            tokens: this.lexer.inline(t[0])
        };
    }
    escape(e) {
        let t = this.rules.inline.escape.exec(e);
        if (t) return {
            type: "escape",
            raw: t[0],
            text: t[1]
        };
    }
    tag(e) {
        let t = this.rules.inline.tag.exec(e);
        if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), {
            type: "html",
            raw: t[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: false,
            text: t[0]
        };
    }
    link(e) {
        let t = this.rules.inline.link.exec(e);
        if (t) {
            let n = t[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
                if (!this.rules.other.endAngleBracket.test(n)) return;
                let s = I(n.slice(0, -1), "\\");
                if ((n.length - s.length) % 2 === 0) return;
            } else {
                let s = ft(t[2], "()");
                if (s > -1) {
                    let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
                    t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, a).trim(), t[3] = "";
                }
            }
            let r = t[2], i = "";
            if (this.options.pedantic) {
                let s = this.rules.other.pedanticHrefTitle.exec(r);
                s && (r = s[1], i = s[3]);
            } else i = t[3] ? t[3].slice(1, -1) : "";
            return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), ke(t, {
                href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
                title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
            }, t[0], this.lexer, this.rules);
        }
    }
    reflink(e, t) {
        let n;
        if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
            let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
            if (!i) {
                let s = n[0].charAt(0);
                return {
                    type: "text",
                    raw: s,
                    text: s
                };
            }
            return ke(n, i, n[0], this.lexer, this.rules);
        }
    }
    emStrong(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
        let r = this.rules.inline.emStrongLDelim.exec(e);
        if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
        if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
            let s = [
                ...r[0]
            ].length - 1, l, a, c = s, p = 0, h = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            for(h.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = h.exec(t)) != null;){
                if (l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !l) continue;
                if (a = [
                    ...l
                ].length, r[3] || r[4]) {
                    c += a;
                    continue;
                } else if ((r[5] || r[6]) && s % 3 && !((s + a) % 3)) {
                    p += a;
                    continue;
                }
                if (c -= a, c > 0) continue;
                a = Math.min(a, a + c + p);
                let f = [
                    ...r[0]
                ][0].length, g = e.slice(0, s + r.index + f + a);
                if (Math.min(s, a) % 2) {
                    let m = g.slice(1, -1);
                    return {
                        type: "em",
                        raw: g,
                        text: m,
                        tokens: this.lexer.inlineTokens(m)
                    };
                }
                let x = g.slice(2, -2);
                return {
                    type: "strong",
                    raw: g,
                    text: x,
                    tokens: this.lexer.inlineTokens(x)
                };
            }
        }
    }
    codespan(e) {
        let t = this.rules.inline.code.exec(e);
        if (t) {
            let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
            return r && i && (n = n.substring(1, n.length - 1)), {
                type: "codespan",
                raw: t[0],
                text: n
            };
        }
    }
    br(e) {
        let t = this.rules.inline.br.exec(e);
        if (t) return {
            type: "br",
            raw: t[0]
        };
    }
    del(e) {
        let t = this.rules.inline.del.exec(e);
        if (t) return {
            type: "del",
            raw: t[0],
            text: t[2],
            tokens: this.lexer.inlineTokens(t[2])
        };
    }
    autolink(e) {
        let t = this.rules.inline.autolink.exec(e);
        if (t) {
            let n, r;
            return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), {
                type: "link",
                raw: t[0],
                text: n,
                href: r,
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
    url(e) {
        let t;
        if (t = this.rules.inline.url.exec(e)) {
            let n, r;
            if (t[2] === "@") n = t[0], r = "mailto:" + n;
            else {
                let i;
                do i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
                while (i !== t[0]);
                n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
            }
            return {
                type: "link",
                raw: t[0],
                text: n,
                href: r,
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
    inlineText(e) {
        let t = this.rules.inline.text.exec(e);
        if (t) {
            let n = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: t[0],
                text: t[0],
                escaped: n
            };
        }
    }
}, y = class o {
    static #_ = m$1(this, "_Lexer");
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(e){
        this.tokens = [], this.tokens.links = Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new z, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: false,
            inRawBlock: false,
            top: true
        };
        let t = {
            other: b,
            block: v.normal,
            inline: M.normal
        };
        this.options.pedantic ? (t.block = v.pedantic, t.inline = M.pedantic) : this.options.gfm && (t.block = v.gfm, this.options.breaks ? t.inline = M.breaks : t.inline = M.gfm), this.tokenizer.rules = t;
    }
    static get rules() {
        return {
            block: v,
            inline: M
        };
    }
    static lex(e, t) {
        return new o(t).lex(e);
    }
    static lexInline(e, t) {
        return new o(t).inlineTokens(e);
    }
    lex(e) {
        e = e.replace(b.carriageReturn, `
`), this.blockTokens(e, this.tokens);
        for(let t = 0; t < this.inlineQueue.length; t++){
            let n = this.inlineQueue[t];
            this.inlineTokens(n.src, n.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        for(this.options.pedantic && (e = e.replace(b.tabCharGlobal, "    ").replace(b.spaceLine, "")); e;){
            let r;
            if (this.options.extensions?.block?.some((s)=>(r = s.call({
                    lexer: this
                }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
            if (r = this.tokenizer.space(e)) {
                e = e.substring(r.raw.length);
                let s = t.at(-1);
                r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
                continue;
            }
            if (r = this.tokenizer.code(e)) {
                e = e.substring(r.raw.length);
                let s = t.at(-1);
                s?.type === "paragraph" || s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
                continue;
            }
            if (r = this.tokenizer.fences(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.heading(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.hr(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.blockquote(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.list(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.html(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.def(e)) {
                e = e.substring(r.raw.length);
                let s = t.at(-1);
                s?.type === "paragraph" || s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                    href: r.href,
                    title: r.title
                });
                continue;
            }
            if (r = this.tokenizer.table(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.lheading(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            let i = e;
            if (this.options.extensions?.startBlock) {
                let s = 1 / 0, l = e.slice(1), a;
                this.options.extensions.startBlock.forEach((c)=>{
                    a = c.call({
                        lexer: this
                    }, l), typeof a == "number" && a >= 0 && (s = Math.min(s, a));
                }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
            }
            if (this.state.top && (r = this.tokenizer.paragraph(i))) {
                let s = t.at(-1);
                n && s?.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
                continue;
            }
            if (r = this.tokenizer.text(e)) {
                e = e.substring(r.raw.length);
                let s = t.at(-1);
                s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
                continue;
            }
            if (e) {
                let s = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(s);
                    break;
                } else throw new Error(s);
            }
        }
        return this.state.top = true, t;
    }
    inline(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return this.inlineQueue.push({
            src: e,
            tokens: t
        }), t;
    }
    inlineTokens(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        let n = e, r = null;
        if (this.tokens.links) {
            let l = Object.keys(this.tokens.links);
            if (l.length > 0) for(; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;)l.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for(; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;)n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for(; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;)n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        let i = false, s = "";
        for(; e;){
            i || (s = ""), i = false;
            let l;
            if (this.options.extensions?.inline?.some((c)=>(l = c.call({
                    lexer: this
                }, e, t)) ? (e = e.substring(l.raw.length), t.push(l), true) : false)) continue;
            if (l = this.tokenizer.escape(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = this.tokenizer.tag(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = this.tokenizer.link(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = this.tokenizer.reflink(e, this.tokens.links)) {
                e = e.substring(l.raw.length);
                let c = t.at(-1);
                l.type === "text" && c?.type === "text" ? (c.raw += l.raw, c.text += l.text) : t.push(l);
                continue;
            }
            if (l = this.tokenizer.emStrong(e, n, s)) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = this.tokenizer.codespan(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = this.tokenizer.br(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = this.tokenizer.del(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = this.tokenizer.autolink(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (!this.state.inLink && (l = this.tokenizer.url(e))) {
                e = e.substring(l.raw.length), t.push(l);
                continue;
            }
            let a = e;
            if (this.options.extensions?.startInline) {
                let c = 1 / 0, p = e.slice(1), h;
                this.options.extensions.startInline.forEach((f)=>{
                    h = f.call({
                        lexer: this
                    }, p), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
                }), c < 1 / 0 && c >= 0 && (a = e.substring(0, c + 1));
            }
            if (l = this.tokenizer.inlineText(a)) {
                e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (s = l.raw.slice(-1)), i = true;
                let c = t.at(-1);
                c?.type === "text" ? (c.raw += l.raw, c.text += l.text) : t.push(l);
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
        return t;
    }
}, A = class {
    static #_ = m$1(this, "_Renderer");
    options;
    parser;
    constructor(e){
        this.options = e || R;
    }
    space(e) {
        return "";
    }
    code(param) {
        let { text: e, lang: t, escaped: n } = param;
        let r = (t || "").match(b.notSpaceStart)?.[0], i = e.replace(b.endingNewline, "") + `
`;
        return r ? '<pre><code class="language-' + S(r) + '">' + (n ? i : S(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : S(i, true)) + `</code></pre>
`;
    }
    blockquote(param) {
        let { tokens: e } = param;
        return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
    }
    html(param) {
        let { text: e } = param;
        return e;
    }
    heading(param) {
        let { tokens: e, depth: t } = param;
        return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
    }
    hr(e) {
        return `<hr>
`;
    }
    list(e) {
        let t = e.ordered, n = e.start, r = "";
        for(let l = 0; l < e.items.length; l++){
            let a = e.items[l];
            r += this.listitem(a);
        }
        let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
        return "<" + i + s + `>
` + r + "</" + i + `>
`;
    }
    listitem(e) {
        let t = "";
        if (e.task) {
            let n = this.checkbox({
                checked: !!e.checked
            });
            e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + S(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({
                type: "text",
                raw: n + " ",
                text: n + " ",
                escaped: true
            }) : t += n + " ";
        }
        return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
    }
    checkbox(param) {
        let { checked: e } = param;
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph(param) {
        let { tokens: e } = param;
        return `<p>${this.parser.parseInline(e)}</p>
`;
    }
    table(e) {
        let t = "", n = "";
        for(let i = 0; i < e.header.length; i++)n += this.tablecell(e.header[i]);
        t += this.tablerow({
            text: n
        });
        let r = "";
        for(let i = 0; i < e.rows.length; i++){
            let s = e.rows[i];
            n = "";
            for(let l = 0; l < s.length; l++)n += this.tablecell(s[l]);
            r += this.tablerow({
                text: n
            });
        }
        return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
    }
    tablerow(param) {
        let { text: e } = param;
        return `<tr>
${e}</tr>
`;
    }
    tablecell(e) {
        let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
        return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
    }
    strong(param) {
        let { tokens: e } = param;
        return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em(param) {
        let { tokens: e } = param;
        return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan(param) {
        let { text: e } = param;
        return `<code>${S(e, true)}</code>`;
    }
    br(e) {
        return "<br>";
    }
    del(param) {
        let { tokens: e } = param;
        return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link(param) {
        let { href: e, title: t, tokens: n } = param;
        let r = this.parser.parseInline(n), i = ge(e);
        if (i === null) return r;
        e = i;
        let s = '<a href="' + e + '"';
        return t && (s += ' title="' + S(t) + '"'), s += ">" + r + "</a>", s;
    }
    image(param) {
        let { href: e, title: t, text: n } = param;
        let r = ge(e);
        if (r === null) return S(n);
        e = r;
        let i = `<img src="${e}" alt="${n}"`;
        return t && (i += ` title="${S(t)}"`), i += ">", i;
    }
    text(e) {
        return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : S(e.text);
    }
}, _ = class {
    static #_ = m$1(this, "_TextRenderer");
    strong(param) {
        let { text: e } = param;
        return e;
    }
    em(param) {
        let { text: e } = param;
        return e;
    }
    codespan(param) {
        let { text: e } = param;
        return e;
    }
    del(param) {
        let { text: e } = param;
        return e;
    }
    html(param) {
        let { text: e } = param;
        return e;
    }
    text(param) {
        let { text: e } = param;
        return e;
    }
    link(param) {
        let { text: e } = param;
        return "" + e;
    }
    image(param) {
        let { text: e } = param;
        return "" + e;
    }
    br() {
        return "";
    }
}, T = class o {
    static #_ = m$1(this, "_Parser");
    options;
    renderer;
    textRenderer;
    constructor(e){
        this.options = e || R, this.options.renderer = this.options.renderer || new A, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _;
    }
    static parse(e, t) {
        return new o(t).parse(e);
    }
    static parseInline(e, t) {
        return new o(t).parseInline(e);
    }
    parse(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        let n = "";
        for(let r = 0; r < e.length; r++){
            let i = e[r];
            if (this.options.extensions?.renderers?.[i.type]) {
                let l = i, a = this.options.extensions.renderers[l.type].call({
                    parser: this
                }, l);
                if (a !== false || ![
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
                ].includes(l.type)) {
                    n += a || "";
                    continue;
                }
            }
            let s = i;
            switch(s.type){
                case "space":
                    {
                        n += this.renderer.space(s);
                        continue;
                    }
                case "hr":
                    {
                        n += this.renderer.hr(s);
                        continue;
                    }
                case "heading":
                    {
                        n += this.renderer.heading(s);
                        continue;
                    }
                case "code":
                    {
                        n += this.renderer.code(s);
                        continue;
                    }
                case "table":
                    {
                        n += this.renderer.table(s);
                        continue;
                    }
                case "blockquote":
                    {
                        n += this.renderer.blockquote(s);
                        continue;
                    }
                case "list":
                    {
                        n += this.renderer.list(s);
                        continue;
                    }
                case "html":
                    {
                        n += this.renderer.html(s);
                        continue;
                    }
                case "paragraph":
                    {
                        n += this.renderer.paragraph(s);
                        continue;
                    }
                case "text":
                    {
                        let l = s, a = this.renderer.text(l);
                        for(; r + 1 < e.length && e[r + 1].type === "text";)l = e[++r], a += `
` + this.renderer.text(l);
                        t ? n += this.renderer.paragraph({
                            type: "paragraph",
                            raw: a,
                            text: a,
                            tokens: [
                                {
                                    type: "text",
                                    raw: a,
                                    text: a,
                                    escaped: true
                                }
                            ]
                        }) : n += a;
                        continue;
                    }
                default:
                    {
                        let l = 'Token with "' + s.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw new Error(l);
                    }
            }
        }
        return n;
    }
    parseInline(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.renderer;
        let n = "";
        for(let r = 0; r < e.length; r++){
            let i = e[r];
            if (this.options.extensions?.renderers?.[i.type]) {
                let l = this.options.extensions.renderers[i.type].call({
                    parser: this
                }, i);
                if (l !== false || ![
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
                ].includes(i.type)) {
                    n += l || "";
                    continue;
                }
            }
            let s = i;
            switch(s.type){
                case "escape":
                    {
                        n += t.text(s);
                        break;
                    }
                case "html":
                    {
                        n += t.html(s);
                        break;
                    }
                case "link":
                    {
                        n += t.link(s);
                        break;
                    }
                case "image":
                    {
                        n += t.image(s);
                        break;
                    }
                case "strong":
                    {
                        n += t.strong(s);
                        break;
                    }
                case "em":
                    {
                        n += t.em(s);
                        break;
                    }
                case "codespan":
                    {
                        n += t.codespan(s);
                        break;
                    }
                case "br":
                    {
                        n += t.br(s);
                        break;
                    }
                case "del":
                    {
                        n += t.del(s);
                        break;
                    }
                case "text":
                    {
                        n += t.text(s);
                        break;
                    }
                default:
                    {
                        let l = 'Token with "' + s.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw new Error(l);
                    }
            }
        }
        return n;
    }
}, L = class {
    static #_ = m$1(this, "_Hooks");
    options;
    block;
    constructor(e){
        this.options = e || R;
    }
    static passThroughHooks = new Set([
        "preprocess",
        "postprocess",
        "processAllTokens"
    ]);
    preprocess(e) {
        return e;
    }
    postprocess(e) {
        return e;
    }
    processAllTokens(e) {
        return e;
    }
    provideLexer() {
        return this.block ? y.lex : y.lexInline;
    }
    provideParser() {
        return this.block ? T.parse : T.parseInline;
    }
}, F = class {
    static #_ = m$1(this, "Marked");
    defaults = N();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = T;
    Renderer = A;
    TextRenderer = _;
    Lexer = y;
    Tokenizer = z;
    Hooks = L;
    constructor(...e){
        this.use(...e);
    }
    walkTokens(e, t) {
        let n = [];
        for (let r of e)switch(n = n.concat(t.call(this, r)), r.type){
            case "table":
                {
                    let i = r;
                    for (let s of i.header)n = n.concat(this.walkTokens(s.tokens, t));
                    for (let s of i.rows)for (let l of s)n = n.concat(this.walkTokens(l.tokens, t));
                    break;
                }
            case "list":
                {
                    let i = r;
                    n = n.concat(this.walkTokens(i.items, t));
                    break;
                }
            default:
                {
                    let i = r;
                    this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s)=>{
                        let l = i[s].flat(1 / 0);
                        n = n.concat(this.walkTokens(l, t));
                    }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
                }
        }
        return n;
    }
    use() {
        for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
            e[_key] = arguments[_key];
        }
        let t = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        return e.forEach((n)=>{
            let r = {
                ...n
            };
            if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i)=>{
                if (!i.name) throw new Error("extension name required");
                if ("renderer" in i) {
                    let s = t.renderers[i.name];
                    s ? t.renderers[i.name] = function() {
                        for(var _len = arguments.length, l = new Array(_len), _key = 0; _key < _len; _key++){
                            l[_key] = arguments[_key];
                        }
                        let a = i.renderer.apply(this, l);
                        return a === false && (a = s.apply(this, l)), a;
                    } : t.renderers[i.name] = i.renderer;
                }
                if ("tokenizer" in i) {
                    if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                    let s = t[i.level];
                    s ? s.unshift(i.tokenizer) : t[i.level] = [
                        i.tokenizer
                    ], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [
                        i.start
                    ] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [
                        i.start
                    ]));
                }
                "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
            }), r.extensions = t), n.renderer) {
                let i = this.defaults.renderer || new A(this.defaults);
                for(let s in n.renderer){
                    if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
                    if ([
                        "options",
                        "parser"
                    ].includes(s)) continue;
                    let l = s, a = n.renderer[l], c = i[l];
                    i[l] = function() {
                        for(var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++){
                            p[_key] = arguments[_key];
                        }
                        let h = a.apply(i, p);
                        return h === false && (h = c.apply(i, p)), h || "";
                    };
                }
                r.renderer = i;
            }
            if (n.tokenizer) {
                let i = this.defaults.tokenizer || new z(this.defaults);
                for(let s in n.tokenizer){
                    if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
                    if ([
                        "options",
                        "rules",
                        "lexer"
                    ].includes(s)) continue;
                    let l = s, a = n.tokenizer[l], c = i[l];
                    i[l] = function() {
                        for(var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++){
                            p[_key] = arguments[_key];
                        }
                        let h = a.apply(i, p);
                        return h === false && (h = c.apply(i, p)), h;
                    };
                }
                r.tokenizer = i;
            }
            if (n.hooks) {
                let i = this.defaults.hooks || new L;
                for(let s in n.hooks){
                    if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
                    if ([
                        "options",
                        "block"
                    ].includes(s)) continue;
                    let l = s, a = n.hooks[l], c = i[l];
                    L.passThroughHooks.has(s) ? i[l] = (p)=>{
                        if (this.defaults.async) return Promise.resolve(a.call(i, p)).then((f)=>c.call(i, f));
                        let h = a.call(i, p);
                        return c.call(i, h);
                    } : i[l] = function() {
                        for(var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++){
                            p[_key] = arguments[_key];
                        }
                        let h = a.apply(i, p);
                        return h === false && (h = c.apply(i, p)), h;
                    };
                }
                r.hooks = i;
            }
            if (n.walkTokens) {
                let i = this.defaults.walkTokens, s = n.walkTokens;
                r.walkTokens = function(l) {
                    let a = [];
                    return a.push(s.call(this, l)), i && (a = a.concat(i.call(this, l))), a;
                };
            }
            this.defaults = {
                ...this.defaults,
                ...r
            };
        }), this;
    }
    setOptions(e) {
        return this.defaults = {
            ...this.defaults,
            ...e
        }, this;
    }
    lexer(e, t) {
        return y.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
        return T.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
        return m$1((n, r)=>{
            let i = {
                ...r
            }, s = {
                ...this.defaults,
                ...i
            }, l = this.onError(!!s.silent, !!s.async);
            if (this.defaults.async === true && i.async === false) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            if (typeof n > "u" || n === null) return l(new Error("marked(): input parameter is undefined or null"));
            if (typeof n != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
            s.hooks && (s.hooks.options = s, s.hooks.block = e);
            let a = s.hooks ? s.hooks.provideLexer() : e ? y.lex : y.lexInline, c = s.hooks ? s.hooks.provideParser() : e ? T.parse : T.parseInline;
            if (s.async) return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((p)=>a(p, s)).then((p)=>s.hooks ? s.hooks.processAllTokens(p) : p).then((p)=>s.walkTokens ? Promise.all(this.walkTokens(p, s.walkTokens)).then(()=>p) : p).then((p)=>c(p, s)).then((p)=>s.hooks ? s.hooks.postprocess(p) : p).catch(l);
            try {
                s.hooks && (n = s.hooks.preprocess(n));
                let p = a(n, s);
                s.hooks && (p = s.hooks.processAllTokens(p)), s.walkTokens && this.walkTokens(p, s.walkTokens);
                let h = c(p, s);
                return s.hooks && (h = s.hooks.postprocess(h)), h;
            } catch (p) {
                return l(p);
            }
        }, "parse");
    }
    onError(e, t) {
        return (n)=>{
            if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
                let r = "<p>An error occurred:</p><pre>" + S(n.message + "", true) + "</pre>";
                return t ? Promise.resolve(r) : r;
            }
            if (t) return Promise.reject(n);
            throw n;
        };
    }
}, $ = new F;
function d(o, e) {
    return $.parse(o, e);
}
m$1(d, "marked");
d.options = d.setOptions = function(o) {
    return $.setOptions(o), d.defaults = $.defaults, me(d.defaults), d;
};
d.getDefaults = N;
d.defaults = R;
d.use = function() {
    for(var _len = arguments.length, o = new Array(_len), _key = 0; _key < _len; _key++){
        o[_key] = arguments[_key];
    }
    return $.use(...o), d.defaults = $.defaults, me(d.defaults), d;
};
d.walkTokens = function(o, e) {
    return $.walkTokens(o, e);
};
d.parseInline = $.parseInline;
d.Parser = T;
d.parser = T.parse;
d.Renderer = A;
d.TextRenderer = _;
d.Lexer = y;
d.lexer = y.lex;
d.Tokenizer = z;
d.Hooks = L;
d.parse = d;
d.options;
d.setOptions;
d.use;
d.walkTokens;
d.parseInline;
T.parse;
y.lex;
function dt(o, param) {
    let { markdownAutoWrap: e } = param;
    let n = o.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), r = he(n);
    return e === false ? r.replace(/ /g, "&nbsp;") : r;
}
m$1(dt, "preprocessMarkdown");
function Ae(o) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let t = dt(o, e), n = d.lexer(t), r = [
        []
    ], i = 0;
    function s(l) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "normal";
        l.type === "text" ? l.text.split(`
`).forEach((p, h)=>{
            h !== 0 && (i++, r.push([])), p.split(" ").forEach((f)=>{
                f = f.replace(/&#39;/g, "'"), f && r[i].push({
                    content: f,
                    type: a
                });
            });
        }) : l.type === "strong" || l.type === "em" ? l.tokens.forEach((c)=>{
            s(c, l.type);
        }) : l.type === "html" && r[i].push({
            content: l.text,
            type: "normal"
        });
    }
    return m$1(s, "processNode"), n.forEach((l)=>{
        l.type === "paragraph" ? l.tokens?.forEach((a)=>{
            s(a);
        }) : l.type === "html" && r[i].push({
            content: l.text,
            type: "normal"
        });
    }), r;
}
m$1(Ae, "markdownToLines");
function Ce(o) {
    let { markdownAutoWrap: e } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let t = d.lexer(o);
    function n(r) {
        return r.type === "text" ? e === false ? r.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : r.text.replace(/\n */g, "<br/>") : r.type === "strong" ? `<strong>${r.tokens?.map(n).join("")}</strong>` : r.type === "em" ? `<em>${r.tokens?.map(n).join("")}</em>` : r.type === "paragraph" ? `<p>${r.tokens?.map(n).join("")}</p>` : r.type === "space" ? "" : r.type === "html" ? `${r.text}` : r.type === "escape" ? r.text : `Unsupported markdown: ${r.type}`;
    }
    return m$1(n, "output"), t.map(n).join("");
}
m$1(Ce, "markdownToHTML");
function kt(o) {
    return Intl.Segmenter ? [
        ...new Intl.Segmenter().segment(o)
    ].map((e)=>e.segment) : [
        ...o
    ];
}
m$1(kt, "splitTextToChars");
function mt(o, e) {
    let t = kt(e.content);
    return Me(o, [], t, e.type);
}
m$1(mt, "splitWordToFitWidth");
function Me(o, e, t, n) {
    if (t.length === 0) return [
        {
            content: e.join(""),
            type: n
        },
        {
            content: "",
            type: n
        }
    ];
    let [r, ...i] = t, s = [
        ...e,
        r
    ];
    return o([
        {
            content: s.join(""),
            type: n
        }
    ]) ? Me(o, s, i, n) : (e.length === 0 && r && (e.push(r), t.shift()), [
        {
            content: e.join(""),
            type: n
        },
        {
            content: t.join(""),
            type: n
        }
    ]);
}
m$1(Me, "splitWordToFitWidthRecursion");
function Ie(o, e) {
    if (o.some((param)=>{
        let { content: t } = param;
        return t.includes(`
`);
    })) throw new Error("splitLineToFitWidth does not support newlines in the line");
    return J(o, e);
}
m$1(Ie, "splitLineToFitWidth");
function J(o, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    if (o.length === 0) return n.length > 0 && t.push(n), t.length > 0 ? t : [];
    let r = "";
    o[0].content === " " && (r = " ", o.shift());
    let i = o.shift() ?? {
        content: " ",
        type: "normal"
    }, s = [
        ...n
    ];
    if (r !== "" && s.push({
        content: r,
        type: "normal"
    }), s.push(i), e(s)) return J(o, e, t, s);
    if (n.length > 0) t.push(n), o.unshift(i);
    else if (i.content) {
        let [l, a] = mt(e, i);
        t.push([
            l
        ]), a.content && o.unshift(a);
    }
    return J(o, e, t);
}
m$1(J, "splitLineToFitWidthRecursion");
function Ee(o, e) {
    e && o.attr("style", e);
}
m$1(Ee, "applyStyle");
async function xt(o, e, t, n) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    let i = o.append("foreignObject");
    i.attr("width", `${10 * t}px`), i.attr("height", `${10 * t}px`);
    let s = i.append("xhtml:div"), l = e.label;
    e.label && Rl(e.label) && (l = await Cf(e.label.replace(gC.lineBreakRegex, `
`), Hl()));
    let a = e.isNode ? "nodeLabel" : "edgeLabel", c = s.append("span");
    c.html(l), Ee(c, e.labelStyle), c.attr("class", `${a} ${n}`), Ee(s, e.labelStyle), s.style("display", "table-cell"), s.style("white-space", "nowrap"), s.style("line-height", "1.5"), s.style("max-width", t + "px"), s.style("text-align", "center"), s.attr("xmlns", "http://www.w3.org/1999/xhtml"), r && s.attr("class", "labelBkg");
    let p = s.node().getBoundingClientRect();
    return p.width === t && (s.style("display", "table"), s.style("white-space", "break-spaces"), s.style("width", t + "px"), p = s.node().getBoundingClientRect()), i.node();
}
m$1(xt, "addHtmlSpan");
function ee(o, e, t) {
    return o.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * t - .1 + "em").attr("dy", t + "em");
}
m$1(ee, "createTspan");
function bt(o, e, t) {
    let n = o.append("text"), r = ee(n, 1, e);
    te(r, t);
    let i = r.node().getComputedTextLength();
    return n.remove(), i;
}
m$1(bt, "computeWidthOfText");
function Ht(o, e, t) {
    let n = o.append("text"), r = ee(n, 1, e);
    te(r, [
        {
            content: t,
            type: "normal"
        }
    ]);
    let i = r.node()?.getBoundingClientRect();
    return i && n.remove(), i;
}
m$1(Ht, "computeDimensionOfText");
function wt(o, e, t) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    let i = e.append("g"), s = i.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = i.append("text").attr("y", "-10.1"), a = 0;
    for (let c of t){
        let p = m$1((f)=>bt(i, 1.1, f) <= o, "checkWidth"), h = p(c) ? [
            c
        ] : Ie(c, p);
        for (let f of h){
            let g = ee(l, a, 1.1);
            te(g, f), a++;
        }
    }
    if (n) {
        let c = l.node().getBBox(), p = 2;
        return s.attr("x", c.x - p).attr("y", c.y - p).attr("width", c.width + 2 * p).attr("height", c.height + 2 * p), i.node();
    } else return l.node();
}
m$1(wt, "createFormattedText");
function te(o, e) {
    o.text(""), e.forEach((t, n)=>{
        let r = o.append("tspan").attr("font-style", t.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", t.type === "strong" ? "bold" : "normal");
        n === 0 ? r.text(t.content) : r.text(" " + t.content);
    });
}
m$1(te, "updateTextContentAndStyles");
function yt(o) {
    return o.replace(/fa[bklrs]?:fa-[\w-]+/g, (e)=>`<i class='${e.replace(":", " ")}'></i>`);
}
m$1(yt, "replaceIconSubstring");
var Qt = m$1(async function(o) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", { style: t = "", isTitle: n = false, classes: r = "", useHtmlLabels: i = true, isNode: s = true, width: l = 200, addSvgBackground: a = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = arguments.length > 3 ? arguments[3] : void 0;
    if (tt$1.debug("XYZ createText", e, t, n, r, i, s, "addSvgBackground: ", a), i) {
        let p = Ce(e, c), h = yt(Xe$1(p)), f = e.replace(/\\\\/g, "\\"), g = {
            isNode: s,
            label: Rl(e) ? f : h,
            labelStyle: t.replace("fill:", "color:")
        };
        return await xt(o, g, l, r, a);
    } else {
        let p = e.replace(/<br\s*\/?>/g, "<br/>"), h = Ae(p.replace("<br>", "<br/>"), c), f = wt(l, o, h, e ? a : false);
        if (s) {
            /stroke:/.exec(t) && (t = t.replace("stroke:", "lineColor:"));
            let g = t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            ih(f).attr("style", g);
        } else {
            let g = t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
            ih(f).select("rect").attr("style", g.replace(/background:/g, "fill:"));
            let x = t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            ih(f).select("text").attr("style", x);
        }
        return f;
    }
}, "createText");
export { Ht as H, Qt as Q, he as h, yt as y };
