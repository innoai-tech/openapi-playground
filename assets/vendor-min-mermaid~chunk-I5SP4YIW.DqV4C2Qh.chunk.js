var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, _b, __2, _c, __3, _d, __4, _e, __5, _f, __6, _g, __7;
import { X as Xe$1 } from "./vendor-min-mermaid~chunk-QS5O44OF.L_MBO-WO.chunk.js";
import { t as tt$1, N as Nl, i as ih, C as Cf, g as gC, H as Hl } from "./vendor-min-mermaid~chunk-QJLC67TO.Dw34GYds.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
function he(o) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  var n = /* @__PURE__ */ Array.from(typeof o == "string" ? [
    o
  ] : o);
  n[n.length - 1] = /* @__PURE__ */ n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var r = /* @__PURE__ */ n.reduce(function(l, a) {
    var c = /* @__PURE__ */ a.match(/\n([\t ]+|(?!\s).)/g);
    return c ? l.concat(/* @__PURE__ */ c.map(function(p) {
      var h, f;
      return (f = (h = /* @__PURE__ */ p.match(/[\t ]/g)) === null || h === void 0 ? void 0 : h.length) !== null && f !== void 0 ? f : 0;
    })) : l;
  }, []);
  if (r.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, r) + "}", "g");
    n = /* @__PURE__ */ n.map(function(l) {
      return l.replace(i, `
`);
    });
  }
  n[0] = /* @__PURE__ */ n[0].replace(/^\r?\n/, "");
  var s = n[0];
  return e.forEach(function(l, a) {
    var c = /* @__PURE__ */ s.match(/(?:^|\n)( *)$/), p = c ? c[1] : "", h = l;
    typeof l == "string" && l.includes(`
`) && (h = /* @__PURE__ */ String(l).split(`
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
var R = /* @__PURE__ */ N();
function me(o) {
  R = o;
}
m$1(me, "changeDefaults");
var E = {
  exec: /* @__PURE__ */ m$1(() => null, "exec")
};
function k(o) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  let t = typeof o == "string" ? o : o.source, n = {
    replace: /* @__PURE__ */ m$1((r, i) => {
      let s = typeof i == "string" ? i : i.source;
      return s = /* @__PURE__ */ s.replace(b.caret, "$1"), t = /* @__PURE__ */ t.replace(r, s), n;
    }, "replace"),
    getRegex: /* @__PURE__ */ m$1(() => new RegExp(t, e), "getRegex")
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
  listItemRegex: /* @__PURE__ */ m$1((o) => new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
  nextBulletRegex: /* @__PURE__ */ m$1((o) => new RegExp(`^ {0,${Math.min(3, o - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
  hrRegex: /* @__PURE__ */ m$1((o) => new RegExp(`^ {0,${Math.min(3, o - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
  fencesBeginRegex: /* @__PURE__ */ m$1((o) => new RegExp(`^ {0,${Math.min(3, o - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
  headingBeginRegex: /* @__PURE__ */ m$1((o) => new RegExp(`^ {0,${Math.min(3, o - 1)}}#`), "headingBeginRegex"),
  htmlBeginRegex: /* @__PURE__ */ m$1((o) => new RegExp(`^ {0,${Math.min(3, o - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
}, Be = /^(?:[ \t]*(?:\n|$))+/, Pe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ve = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, B = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, We = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, H = /(?:[*+-]|\d{1,9}[.)])/, xe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, be = /* @__PURE__ */ k(xe).replace(/bull/g, H).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), qe = /* @__PURE__ */ k(xe).replace(/bull/g, H).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Q = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, je = /^[^\n]+/, U = /(?!\s*\])(?:\\.|[^\[\]\\])+/, De = /* @__PURE__ */ k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", U).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ze = /* @__PURE__ */ k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, H).getRegex(), q = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", X = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Oe = /* @__PURE__ */ k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", X).replace("tag", q).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), we = /* @__PURE__ */ k(Q).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex(), Ge = /* @__PURE__ */ k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", we).getRegex(), K = {
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
}, ue = /* @__PURE__ */ k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex(), Fe = {
  ...K,
  lheading: qe,
  table: ue,
  paragraph: /* @__PURE__ */ k(Q).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ue).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", q).getRegex()
}, Ne = {
  ...K,
  html: /* @__PURE__ */ k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", X).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: E,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: /* @__PURE__ */ k(Q).replace("hr", B).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", be).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, He = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Qe = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ye = /^( {2,}|\\)\n(?!\s*$)/, Ue = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, j = /[\p{P}\p{S}]/u, V = /[\s\p{P}\p{S}]/u, Te = /[^\s\p{P}\p{S}]/u, Xe = /* @__PURE__ */ k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, V).getRegex(), Se = /(?!~)[\p{P}\p{S}]/u, Ke = /(?!~)[\s\p{P}\p{S}]/u, Ve = /(?:[^\s\p{P}\p{S}]|~)/u, Ye = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, $e = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Je = /* @__PURE__ */ k($e, "u").replace(/punct/g, j).getRegex(), et = /* @__PURE__ */ k($e, "u").replace(/punct/g, Se).getRegex(), Re = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", tt = /* @__PURE__ */ k(Re, "gu").replace(/notPunctSpace/g, Te).replace(/punctSpace/g, V).replace(/punct/g, j).getRegex(), nt = /* @__PURE__ */ k(Re, "gu").replace(/notPunctSpace/g, Ve).replace(/punctSpace/g, Ke).replace(/punct/g, Se).getRegex(), rt = /* @__PURE__ */ k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Te).replace(/punctSpace/g, V).replace(/punct/g, j).getRegex(), st = /* @__PURE__ */ k(/\\(punct)/, "gu").replace(/punct/g, j).getRegex(), it = /* @__PURE__ */ k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), lt = /* @__PURE__ */ k(X).replace("(?:-->|$)", "-->").getRegex(), ot = /* @__PURE__ */ k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", lt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), W = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, at = /* @__PURE__ */ k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", W).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Le = /* @__PURE__ */ k(/^!?\[(label)\]\[(ref)\]/).replace("label", W).replace("ref", U).getRegex(), ze = /* @__PURE__ */ k(/^!?\[(ref)\](?:\[\])?/).replace("ref", U).getRegex(), ct = /* @__PURE__ */ k("reflink|nolink(?!\\()", "g").replace("reflink", Le).replace("nolink", ze).getRegex(), Y = {
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
  link: /* @__PURE__ */ k(/^!?\[(label)\]\((.*?)\)/).replace("label", W).getRegex(),
  reflink: /* @__PURE__ */ k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", W).getRegex()
}, G = {
  ...Y,
  emStrongRDelimAst: nt,
  emStrongLDelim: et,
  url: /* @__PURE__ */ k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, ht = {
  ...G,
  br: /* @__PURE__ */ k(ye).replace("{2,}", "*").getRegex(),
  text: /* @__PURE__ */ k(G.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
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
}, fe = /* @__PURE__ */ m$1((o) => ut[o], "getEscapeReplacement");
function S(o, e) {
  if (e) {
    if (b.escapeTest.test(o)) return o.replace(b.escapeReplace, fe);
  } else if (b.escapeTestNoEncode.test(o)) return o.replace(b.escapeReplaceNoEncode, fe);
  return o;
}
m$1(S, "escape");
function ge(o) {
  try {
    o = /* @__PURE__ */ encodeURI(o).replace(b.percentDecode, "%");
  } catch {
    return null;
  }
  return o;
}
m$1(ge, "cleanUrl");
function de(o, e) {
  var _a2;
  let t = /* @__PURE__ */ o.replace(b.findPipe, (i, s, l) => {
    let a = false, c = s;
    for (; --c >= 0 && l[c] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), n = /* @__PURE__ */ t.split(b.splitPipe), r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((_a2 = n.at(-1)) == null ? void 0 : _a2.trim()) && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; r < n.length; r++) n[r] = /* @__PURE__ */ n[r].trim().replace(b.slashPipe, "|");
  return n;
}
m$1(de, "splitCells");
function I(o, e, t) {
  let n = o.length;
  if (n === 0) return "";
  let r = 0;
  for (; r < n && o.charAt(n - r - 1) === e; ) r++;
  return o.slice(0, n - r);
}
m$1(I, "rtrim");
function ft(o, e) {
  if (o.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < o.length; n++) if (o[n] === "\\") n++;
  else if (o[n] === e[0]) t++;
  else if (o[n] === e[1] && (t--, t < 0)) return n;
  return -1;
}
m$1(ft, "findClosingBracket");
function ke(o, e, t, n, r) {
  let i = e.href, s = e.title || null, l = /* @__PURE__ */ o[1].replace(r.other.outputLinkReplace, "$1");
  if (o[0].charAt(0) !== "!") {
    n.state.inLink = true;
    let a = {
      type: "link",
      raw: t,
      href: i,
      title: s,
      text: l,
      tokens: /* @__PURE__ */ n.inlineTokens(l)
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
  let n = /* @__PURE__ */ o.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let r = n[1];
  return e.split(`
`).map((i) => {
    let s = /* @__PURE__ */ i.match(t.other.beginningSpace);
    if (s === null) return i;
    let [l] = s;
    return l.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
m$1(gt, "indentCodeCompensation");
var z = (_a = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = e || R;
  }
  space(e) {
    let t = /* @__PURE__ */ this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return {
      type: "space",
      raw: t[0]
    };
  }
  code(e) {
    let t = /* @__PURE__ */ this.rules.block.code.exec(e);
    if (t) {
      let n = /* @__PURE__ */ t[0].replace(this.rules.other.codeRemoveIndent, "");
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
    let t = /* @__PURE__ */ this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = /* @__PURE__ */ gt(n, t[3] || "", this.rules);
      return {
        type: "code",
        raw: n,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: r
      };
    }
  }
  heading(e) {
    let t = /* @__PURE__ */ this.rules.block.heading.exec(e);
    if (t) {
      let n = /* @__PURE__ */ t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = /* @__PURE__ */ I(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = /* @__PURE__ */ r.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: /* @__PURE__ */ this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    let t = /* @__PURE__ */ this.rules.block.hr.exec(e);
    if (t) return {
      type: "hr",
      raw: /* @__PURE__ */ I(t[0], `
`)
    };
  }
  blockquote(e) {
    let t = /* @__PURE__ */ this.rules.block.blockquote.exec(e);
    if (t) {
      let n = /* @__PURE__ */ I(t[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; n.length > 0; ) {
        let l = false, a = [], c;
        for (c = 0; c < n.length; c++) if (this.rules.other.blockquoteStart.test(n[c])) a.push(n[c]), l = true;
        else if (!l) a.push(n[c]);
        else break;
        n = /* @__PURE__ */ n.slice(c);
        let p = /* @__PURE__ */ a.join(`
`), h = /* @__PURE__ */ p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${p}` : p, i = i ? `${i}
${h}` : h;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(h, s, true), this.lexer.state.top = f, n.length === 0) break;
        let g = /* @__PURE__ */ s.at(-1);
        if ((g == null ? void 0 : g.type) === "code") break;
        if ((g == null ? void 0 : g.type) === "blockquote") {
          let x = g, m = x.raw + `
` + n.join(`
`), w = /* @__PURE__ */ this.blockquote(m);
          s[s.length - 1] = w, r = r.substring(0, r.length - x.raw.length) + w.raw, i = i.substring(0, i.length - x.text.length) + w.text;
          break;
        } else if ((g == null ? void 0 : g.type) === "list") {
          let x = g, m = x.raw + `
` + n.join(`
`), w = /* @__PURE__ */ this.list(m);
          s[s.length - 1] = w, r = r.substring(0, r.length - g.raw.length) + w.raw, i = i.substring(0, i.length - x.raw.length) + w.raw, n = /* @__PURE__ */ m.substring(s.at(-1).raw.length).split(`
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
    let t = /* @__PURE__ */ this.rules.block.list.exec(e);
    if (t) {
      let n = /* @__PURE__ */ t[1].trim(), r = n.length > 1, i = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +n.slice(0, -1) : "",
        loose: false,
        items: []
      };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let s = /* @__PURE__ */ this.rules.other.listItemRegex(n), l = false;
      for (; e; ) {
        let c = false, p = "", h = "";
        if (!(t = /* @__PURE__ */ s.exec(e)) || this.rules.block.hr.test(e)) break;
        p = t[0], e = /* @__PURE__ */ e.substring(p.length);
        let f = /* @__PURE__ */ t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (D) => " ".repeat(3 * D.length)), g = e.split(`
`, 1)[0], x = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, h = /* @__PURE__ */ f.trimStart()) : x ? m = t[1].length + 1 : (m = /* @__PURE__ */ t[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, h = /* @__PURE__ */ f.slice(m), m += t[1].length), x && this.rules.other.blankLine.test(g) && (p += g + `
`, e = /* @__PURE__ */ e.substring(g.length + 1), c = true), !c) {
          let D = /* @__PURE__ */ this.rules.other.nextBulletRegex(m), re = /* @__PURE__ */ this.rules.other.hrRegex(m), se = /* @__PURE__ */ this.rules.other.fencesBeginRegex(m), ie = /* @__PURE__ */ this.rules.other.headingBeginRegex(m), _e2 = /* @__PURE__ */ this.rules.other.htmlBeginRegex(m);
          for (; e; ) {
            let Z = e.split(`
`, 1)[0], C;
            if (g = Z, this.options.pedantic ? (g = /* @__PURE__ */ g.replace(this.rules.other.listReplaceNesting, "  "), C = g) : C = /* @__PURE__ */ g.replace(this.rules.other.tabCharGlobal, "    "), se.test(g) || ie.test(g) || _e2.test(g) || D.test(g) || re.test(g)) break;
            if (C.search(this.rules.other.nonSpaceChar) >= m || !g.trim()) h += `
` + C.slice(m);
            else {
              if (x || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || se.test(f) || ie.test(f) || re.test(f)) break;
              h += `
` + g;
            }
            !x && !g.trim() && (x = true), p += Z + `
`, e = /* @__PURE__ */ e.substring(Z.length + 1), f = /* @__PURE__ */ C.slice(m);
          }
        }
        i.loose || (l ? i.loose = true : this.rules.other.doubleBlankLine.test(p) && (l = true));
        let w = null, ne;
        this.options.gfm && (w = /* @__PURE__ */ this.rules.other.listIsTask.exec(h), w && (ne = w[0] !== "[ ] ", h = /* @__PURE__ */ h.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: p,
          task: !!w,
          checked: ne,
          loose: false,
          text: h,
          tokens: []
        }), i.raw += p;
      }
      let a = /* @__PURE__ */ i.items.at(-1);
      if (a) a.raw = /* @__PURE__ */ a.raw.trimEnd(), a.text = /* @__PURE__ */ a.text.trimEnd();
      else return;
      i.raw = /* @__PURE__ */ i.raw.trimEnd();
      for (let c = 0; c < i.items.length; c++) if (this.lexer.state.top = false, i.items[c].tokens = /* @__PURE__ */ this.lexer.blockTokens(i.items[c].text, []), !i.loose) {
        let p = /* @__PURE__ */ i.items[c].tokens.filter((f) => f.type === "space"), h = p.length > 0 && p.some((f) => this.rules.other.anyLine.test(f.raw));
        i.loose = h;
      }
      if (i.loose) for (let c = 0; c < i.items.length; c++) i.items[c].loose = true;
      return i;
    }
  }
  html(e) {
    let t = /* @__PURE__ */ this.rules.block.html.exec(e);
    if (t) return {
      type: "html",
      block: true,
      raw: t[0],
      pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
      text: t[0]
    };
  }
  def(e) {
    let t = /* @__PURE__ */ this.rules.block.def.exec(e);
    if (t) {
      let n = /* @__PURE__ */ t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
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
    var _a2;
    let t = /* @__PURE__ */ this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = /* @__PURE__ */ de(t[1]), r = /* @__PURE__ */ t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = ((_a2 = t[3]) == null ? void 0 : _a2.trim()) ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === r.length) {
      for (let l of r) this.rules.other.tableAlignRight.test(l) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? s.align.push("left") : s.align.push(null);
      for (let l = 0; l < n.length; l++) s.header.push({
        text: n[l],
        tokens: /* @__PURE__ */ this.lexer.inline(n[l]),
        header: true,
        align: s.align[l]
      });
      for (let l of i) s.rows.push(/* @__PURE__ */ de(l, s.header.length).map((a, c) => ({
        text: a,
        tokens: /* @__PURE__ */ this.lexer.inline(a),
        header: false,
        align: s.align[c]
      })));
      return s;
    }
  }
  lheading(e) {
    let t = /* @__PURE__ */ this.rules.block.lheading.exec(e);
    if (t) return {
      type: "heading",
      raw: t[0],
      depth: t[2].charAt(0) === "=" ? 1 : 2,
      text: t[1],
      tokens: /* @__PURE__ */ this.lexer.inline(t[1])
    };
  }
  paragraph(e) {
    let t = /* @__PURE__ */ this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: /* @__PURE__ */ this.lexer.inline(n)
      };
    }
  }
  text(e) {
    let t = /* @__PURE__ */ this.rules.block.text.exec(e);
    if (t) return {
      type: "text",
      raw: t[0],
      text: t[0],
      tokens: /* @__PURE__ */ this.lexer.inline(t[0])
    };
  }
  escape(e) {
    let t = /* @__PURE__ */ this.rules.inline.escape.exec(e);
    if (t) return {
      type: "escape",
      raw: t[0],
      text: t[1]
    };
  }
  tag(e) {
    let t = /* @__PURE__ */ this.rules.inline.tag.exec(e);
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
    let t = /* @__PURE__ */ this.rules.inline.link.exec(e);
    if (t) {
      let n = /* @__PURE__ */ t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let s = /* @__PURE__ */ I(/* @__PURE__ */ n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = /* @__PURE__ */ ft(t[2], "()");
        if (s > -1) {
          let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = /* @__PURE__ */ t[2].substring(0, s), t[0] = /* @__PURE__ */ t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        let s = /* @__PURE__ */ this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else i = t[3] ? t[3].slice(1, -1) : "";
      return r = /* @__PURE__ */ r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = /* @__PURE__ */ r.slice(1) : r = /* @__PURE__ */ r.slice(1, -1)), ke(t, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = /* @__PURE__ */ this.rules.inline.reflink.exec(e)) || (n = /* @__PURE__ */ this.rules.inline.nolink.exec(e))) {
      let r = /* @__PURE__ */ (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        let s = /* @__PURE__ */ n[0].charAt(0);
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
    let r = /* @__PURE__ */ this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let s = [
        ...r[0]
      ].length - 1, l, a, c = s, p = 0, h = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, t = /* @__PURE__ */ t.slice(-1 * e.length + s); (r = /* @__PURE__ */ h.exec(t)) != null; ) {
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
        a = /* @__PURE__ */ Math.min(a, a + c + p);
        let f = [
          ...r[0]
        ][0].length, g = /* @__PURE__ */ e.slice(0, s + r.index + f + a);
        if (Math.min(s, a) % 2) {
          let m = /* @__PURE__ */ g.slice(1, -1);
          return {
            type: "em",
            raw: g,
            text: m,
            tokens: /* @__PURE__ */ this.lexer.inlineTokens(m)
          };
        }
        let x = /* @__PURE__ */ g.slice(2, -2);
        return {
          type: "strong",
          raw: g,
          text: x,
          tokens: /* @__PURE__ */ this.lexer.inlineTokens(x)
        };
      }
    }
  }
  codespan(e) {
    let t = /* @__PURE__ */ this.rules.inline.code.exec(e);
    if (t) {
      let n = /* @__PURE__ */ t[2].replace(this.rules.other.newLineCharGlobal, " "), r = /* @__PURE__ */ this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = /* @__PURE__ */ n.substring(1, n.length - 1)), {
        type: "codespan",
        raw: t[0],
        text: n
      };
    }
  }
  br(e) {
    let t = /* @__PURE__ */ this.rules.inline.br.exec(e);
    if (t) return {
      type: "br",
      raw: t[0]
    };
  }
  del(e) {
    let t = /* @__PURE__ */ this.rules.inline.del.exec(e);
    if (t) return {
      type: "del",
      raw: t[0],
      text: t[2],
      tokens: /* @__PURE__ */ this.lexer.inlineTokens(t[2])
    };
  }
  autolink(e) {
    let t = /* @__PURE__ */ this.rules.inline.autolink.exec(e);
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
    var _a2;
    let t;
    if (t = /* @__PURE__ */ this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@") n = t[0], r = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = ((_a2 = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : _a2[0]) ?? "";
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
    let t = /* @__PURE__ */ this.rules.inline.text.exec(e);
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
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "_Tokenizer")), _a), y = (_b = class {
  constructor(e) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new z(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
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
    return new _b(t).lex(e);
  }
  static lexInline(e, t) {
    return new _b(t).inlineTokens(e);
  }
  lex(e) {
    e = /* @__PURE__ */ e.replace(b.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e) {
    var _a2, _b2, _c2;
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    for (this.options.pedantic && (e = /* @__PURE__ */ e.replace(b.tabCharGlobal, "    ").replace(b.spaceLine, "")); e; ) {
      let r;
      if ((_b2 = (_a2 = this.options.extensions) == null ? void 0 : _a2.block) == null ? void 0 : _b2.some((s) => (r = /* @__PURE__ */ s.call({
        lexer: this
      }, e, t)) ? (e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = /* @__PURE__ */ this.tokenizer.space(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length);
        let s = /* @__PURE__ */ t.at(-1);
        r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.code(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length);
        let s = /* @__PURE__ */ t.at(-1);
        (s == null ? void 0 : s.type) === "paragraph" || (s == null ? void 0 : s.type) === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.fences(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.heading(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.hr(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.blockquote(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.list(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.html(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.def(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length);
        let s = /* @__PURE__ */ t.at(-1);
        (s == null ? void 0 : s.type) === "paragraph" || (s == null ? void 0 : s.type) === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
          href: r.href,
          title: r.title
        });
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.table(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.lheading(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if ((_c2 = this.options.extensions) == null ? void 0 : _c2.startBlock) {
        let s = 1 / 0, l = /* @__PURE__ */ e.slice(1), a;
        this.options.extensions.startBlock.forEach((c) => {
          a = /* @__PURE__ */ c.call({
            lexer: this
          }, l), typeof a == "number" && a >= 0 && (s = /* @__PURE__ */ Math.min(s, a));
        }), s < 1 / 0 && s >= 0 && (i = /* @__PURE__ */ e.substring(0, s + 1));
      }
      if (this.state.top && (r = /* @__PURE__ */ this.tokenizer.paragraph(i))) {
        let s = /* @__PURE__ */ t.at(-1);
        n && (s == null ? void 0 : s.type) === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = /* @__PURE__ */ e.substring(r.raw.length);
        continue;
      }
      if (r = /* @__PURE__ */ this.tokenizer.text(e)) {
        e = /* @__PURE__ */ e.substring(r.raw.length);
        let s = /* @__PURE__ */ t.at(-1);
        (s == null ? void 0 : s.type) === "text" ? (s.raw += `
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
    var _a2, _b2, _c2;
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    let n = e, r = null;
    if (this.tokens.links) {
      let l = /* @__PURE__ */ Object.keys(this.tokens.links);
      if (l.length > 0) for (; (r = /* @__PURE__ */ this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) l.includes(/* @__PURE__ */ r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = /* @__PURE__ */ this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (r = /* @__PURE__ */ this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i = false, s = "";
    for (; e; ) {
      i || (s = ""), i = false;
      let l;
      if ((_b2 = (_a2 = this.options.extensions) == null ? void 0 : _a2.inline) == null ? void 0 : _b2.some((c) => (l = /* @__PURE__ */ c.call({
        lexer: this
      }, e, t)) ? (e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l), true) : false)) continue;
      if (l = /* @__PURE__ */ this.tokenizer.escape(e)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = /* @__PURE__ */ this.tokenizer.tag(e)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = /* @__PURE__ */ this.tokenizer.link(e)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = /* @__PURE__ */ this.tokenizer.reflink(e, this.tokens.links)) {
        e = /* @__PURE__ */ e.substring(l.raw.length);
        let c = /* @__PURE__ */ t.at(-1);
        l.type === "text" && (c == null ? void 0 : c.type) === "text" ? (c.raw += l.raw, c.text += l.text) : t.push(l);
        continue;
      }
      if (l = /* @__PURE__ */ this.tokenizer.emStrong(e, n, s)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = /* @__PURE__ */ this.tokenizer.codespan(e)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = /* @__PURE__ */ this.tokenizer.br(e)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = /* @__PURE__ */ this.tokenizer.del(e)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = /* @__PURE__ */ this.tokenizer.autolink(e)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (!this.state.inLink && (l = /* @__PURE__ */ this.tokenizer.url(e))) {
        e = /* @__PURE__ */ e.substring(l.raw.length), t.push(l);
        continue;
      }
      let a = e;
      if ((_c2 = this.options.extensions) == null ? void 0 : _c2.startInline) {
        let c = 1 / 0, p = /* @__PURE__ */ e.slice(1), h;
        this.options.extensions.startInline.forEach((f) => {
          h = /* @__PURE__ */ f.call({
            lexer: this
          }, p), typeof h == "number" && h >= 0 && (c = /* @__PURE__ */ Math.min(c, h));
        }), c < 1 / 0 && c >= 0 && (a = /* @__PURE__ */ e.substring(0, c + 1));
      }
      if (l = /* @__PURE__ */ this.tokenizer.inlineText(a)) {
        e = /* @__PURE__ */ e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (s = /* @__PURE__ */ l.raw.slice(-1)), i = true;
        let c = /* @__PURE__ */ t.at(-1);
        (c == null ? void 0 : c.type) === "text" ? (c.raw += l.raw, c.text += l.text) : t.push(l);
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
}, __2 = new WeakMap(), __privateAdd(_b, __2, m$1(_b, "_Lexer")), _b), A = (_c = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = e || R;
  }
  space(e) {
    return "";
  }
  code(param) {
    var _a2;
    let { text: e, lang: t, escaped: n } = param;
    let r = (_a2 = (t || "").match(b.notSpaceStart)) == null ? void 0 : _a2[0], i = e.replace(b.endingNewline, "") + `
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
    for (let l = 0; l < e.items.length; l++) {
      let a = e.items[l];
      r += /* @__PURE__ */ this.listitem(a);
    }
    let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    var _a2;
    let t = "";
    if (e.task) {
      let n = /* @__PURE__ */ this.checkbox({
        checked: !!e.checked
      });
      e.loose ? ((_a2 = e.tokens[0]) == null ? void 0 : _a2.type) === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + S(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({
        type: "text",
        raw: n + " ",
        text: n + " ",
        escaped: true
      }) : t += n + " ";
    }
    return t += /* @__PURE__ */ this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
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
    for (let i = 0; i < e.header.length; i++) n += /* @__PURE__ */ this.tablecell(e.header[i]);
    t += /* @__PURE__ */ this.tablerow({
      text: n
    });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      let s = e.rows[i];
      n = "";
      for (let l = 0; l < s.length; l++) n += /* @__PURE__ */ this.tablecell(s[l]);
      r += /* @__PURE__ */ this.tablerow({
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
    let t = /* @__PURE__ */ this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
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
    let r = /* @__PURE__ */ this.parser.parseInline(n), i = /* @__PURE__ */ ge(e);
    if (i === null) return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + S(t) + '"'), s += ">" + r + "</a>", s;
  }
  image(param) {
    let { href: e, title: t, text: n } = param;
    let r = /* @__PURE__ */ ge(e);
    if (r === null) return S(n);
    e = r;
    let i = `<img src="${e}" alt="${n}"`;
    return t && (i += ` title="${S(t)}"`), i += ">", i;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : S(e.text);
  }
}, __3 = new WeakMap(), __privateAdd(_c, __3, m$1(_c, "_Renderer")), _c), _ = (_d = class {
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
}, __4 = new WeakMap(), __privateAdd(_d, __4, m$1(_d, "_TextRenderer")), _d), T = (_e = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e || R, this.options.renderer = this.options.renderer || new A(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _();
  }
  static parse(e, t) {
    return new _e(t).parse(e);
  }
  static parseInline(e, t) {
    return new _e(t).parseInline(e);
  }
  parse(e) {
    var _a2, _b2;
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if ((_b2 = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b2[i.type]) {
        let l = i, a = /* @__PURE__ */ this.options.extensions.renderers[l.type].call({
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
      switch (s.type) {
        case "space": {
          n += /* @__PURE__ */ this.renderer.space(s);
          continue;
        }
        case "hr": {
          n += /* @__PURE__ */ this.renderer.hr(s);
          continue;
        }
        case "heading": {
          n += /* @__PURE__ */ this.renderer.heading(s);
          continue;
        }
        case "code": {
          n += /* @__PURE__ */ this.renderer.code(s);
          continue;
        }
        case "table": {
          n += /* @__PURE__ */ this.renderer.table(s);
          continue;
        }
        case "blockquote": {
          n += /* @__PURE__ */ this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          n += /* @__PURE__ */ this.renderer.list(s);
          continue;
        }
        case "html": {
          n += /* @__PURE__ */ this.renderer.html(s);
          continue;
        }
        case "paragraph": {
          n += /* @__PURE__ */ this.renderer.paragraph(s);
          continue;
        }
        case "text": {
          let l = s, a = /* @__PURE__ */ this.renderer.text(l);
          for (; r + 1 < e.length && e[r + 1].type === "text"; ) l = e[++r], a += `
` + this.renderer.text(l);
          t ? n += /* @__PURE__ */ this.renderer.paragraph({
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
        default: {
          let l = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
  parseInline(e) {
    var _a2, _b2;
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.renderer;
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if ((_b2 = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b2[i.type]) {
        let l = /* @__PURE__ */ this.options.extensions.renderers[i.type].call({
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
      switch (s.type) {
        case "escape": {
          n += /* @__PURE__ */ t.text(s);
          break;
        }
        case "html": {
          n += /* @__PURE__ */ t.html(s);
          break;
        }
        case "link": {
          n += /* @__PURE__ */ t.link(s);
          break;
        }
        case "image": {
          n += /* @__PURE__ */ t.image(s);
          break;
        }
        case "strong": {
          n += /* @__PURE__ */ t.strong(s);
          break;
        }
        case "em": {
          n += /* @__PURE__ */ t.em(s);
          break;
        }
        case "codespan": {
          n += /* @__PURE__ */ t.codespan(s);
          break;
        }
        case "br": {
          n += /* @__PURE__ */ t.br(s);
          break;
        }
        case "del": {
          n += /* @__PURE__ */ t.del(s);
          break;
        }
        case "text": {
          n += /* @__PURE__ */ t.text(s);
          break;
        }
        default: {
          let l = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
}, __5 = new WeakMap(), __privateAdd(_e, __5, m$1(_e, "_Parser")), _e), L = (_f = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = e || R;
  }
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
}, __6 = new WeakMap(), __privateAdd(_f, __6, m$1(_f, "_Hooks")), __publicField(_f, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), _f), F = (_g = class {
  constructor(...e) {
    __publicField(this, "defaults", N());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", T);
    __publicField(this, "Renderer", A);
    __publicField(this, "TextRenderer", _);
    __publicField(this, "Lexer", y);
    __publicField(this, "Tokenizer", z);
    __publicField(this, "Hooks", L);
    this.use(...e);
  }
  walkTokens(e, t) {
    var _a2, _b2;
    let n = [];
    for (let r of e) switch (n = /* @__PURE__ */ n.concat(/* @__PURE__ */ t.call(this, r)), r.type) {
      case "table": {
        let i = r;
        for (let s of i.header) n = /* @__PURE__ */ n.concat(/* @__PURE__ */ this.walkTokens(s.tokens, t));
        for (let s of i.rows) for (let l of s) n = /* @__PURE__ */ n.concat(/* @__PURE__ */ this.walkTokens(l.tokens, t));
        break;
      }
      case "list": {
        let i = r;
        n = /* @__PURE__ */ n.concat(/* @__PURE__ */ this.walkTokens(i.items, t));
        break;
      }
      default: {
        let i = r;
        ((_b2 = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) == null ? void 0 : _b2[i.type]) ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let l = /* @__PURE__ */ i[s].flat(1 / 0);
          n = /* @__PURE__ */ n.concat(/* @__PURE__ */ this.walkTokens(l, t));
        }) : i.tokens && (n = /* @__PURE__ */ n.concat(/* @__PURE__ */ this.walkTokens(i.tokens, t)));
      }
    }
    return n;
  }
  use() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    let t = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    return e.forEach((n) => {
      let r = {
        ...n
      };
      if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t.renderers[i.name];
          s ? t.renderers[i.name] = function() {
            for (var _len2 = arguments.length, l = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              l[_key2] = arguments[_key2];
            }
            let a = /* @__PURE__ */ i.renderer.apply(this, l);
            return a === false && (a = /* @__PURE__ */ s.apply(this, l)), a;
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
        for (let s in n.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if ([
            "options",
            "parser"
          ].includes(s)) continue;
          let l = s, a = n.renderer[l], c = i[l];
          i[l] = function() {
            for (var _len2 = arguments.length, p = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              p[_key2] = arguments[_key2];
            }
            let h = /* @__PURE__ */ a.apply(i, p);
            return h === false && (h = /* @__PURE__ */ c.apply(i, p)), h || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new z(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if ([
            "options",
            "rules",
            "lexer"
          ].includes(s)) continue;
          let l = s, a = n.tokenizer[l], c = i[l];
          i[l] = function() {
            for (var _len2 = arguments.length, p = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              p[_key2] = arguments[_key2];
            }
            let h = /* @__PURE__ */ a.apply(i, p);
            return h === false && (h = /* @__PURE__ */ c.apply(i, p)), h;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new L();
        for (let s in n.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if ([
            "options",
            "block"
          ].includes(s)) continue;
          let l = s, a = n.hooks[l], c = i[l];
          L.passThroughHooks.has(s) ? i[l] = (p) => {
            if (this.defaults.async) return Promise.resolve(/* @__PURE__ */ a.call(i, p)).then((f) => c.call(i, f));
            let h = /* @__PURE__ */ a.call(i, p);
            return c.call(i, h);
          } : i[l] = function() {
            for (var _len2 = arguments.length, p = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              p[_key2] = arguments[_key2];
            }
            let h = /* @__PURE__ */ a.apply(i, p);
            return h === false && (h = /* @__PURE__ */ c.apply(i, p)), h;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, s = n.walkTokens;
        r.walkTokens = function(l) {
          let a = [];
          return a.push(/* @__PURE__ */ s.call(this, l)), i && (a = /* @__PURE__ */ a.concat(/* @__PURE__ */ i.call(this, l))), a;
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
    return m$1((n, r) => {
      let i = {
        ...r
      }, s = {
        ...this.defaults,
        ...i
      }, l = /* @__PURE__ */ this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && i.async === false) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      s.hooks && (s.hooks.options = s, s.hooks.block = e);
      let a = s.hooks ? s.hooks.provideLexer() : e ? y.lex : y.lexInline, c = s.hooks ? s.hooks.provideParser() : e ? T.parse : T.parseInline;
      if (s.async) return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((p) => a(p, s)).then((p) => s.hooks ? s.hooks.processAllTokens(p) : p).then((p) => s.walkTokens ? Promise.all(/* @__PURE__ */ this.walkTokens(p, s.walkTokens)).then(() => p) : p).then((p) => c(p, s)).then((p) => s.hooks ? s.hooks.postprocess(p) : p).catch(l);
      try {
        s.hooks && (n = /* @__PURE__ */ s.hooks.preprocess(n));
        let p = /* @__PURE__ */ a(n, s);
        s.hooks && (p = /* @__PURE__ */ s.hooks.processAllTokens(p)), s.walkTokens && this.walkTokens(p, s.walkTokens);
        let h = /* @__PURE__ */ c(p, s);
        return s.hooks && (h = /* @__PURE__ */ s.hooks.postprocess(h)), h;
      } catch (p) {
        return l(p);
      }
    }, "parse");
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let r = "<p>An error occurred:</p><pre>" + S(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
}, __7 = new WeakMap(), __privateAdd(_g, __7, m$1(_g, "Marked")), _g), $ = new F();
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
  for (var _len = arguments.length, o = new Array(_len), _key = 0; _key < _len; _key++) {
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
  let n = /* @__PURE__ */ o.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), r = /* @__PURE__ */ he(n);
  return e === false ? r.replace(/ /g, "&nbsp;") : r;
}
m$1(dt, "preprocessMarkdown");
function Ae(o) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let t = /* @__PURE__ */ dt(o, e), n = /* @__PURE__ */ d.lexer(t), r = [
    []
  ], i = 0;
  function s(l) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "normal";
    l.type === "text" ? l.text.split(`
`).forEach((p, h) => {
      h !== 0 && (i++, r.push([])), p.split(" ").forEach((f) => {
        f = /* @__PURE__ */ f.replace(/&#39;/g, "'"), f && r[i].push({
          content: f,
          type: a
        });
      });
    }) : l.type === "strong" || l.type === "em" ? l.tokens.forEach((c) => {
      s(c, l.type);
    }) : l.type === "html" && r[i].push({
      content: l.text,
      type: "normal"
    });
  }
  return m$1(s, "processNode"), n.forEach((l) => {
    var _a2;
    l.type === "paragraph" ? (_a2 = l.tokens) == null ? void 0 : _a2.forEach((a) => {
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
  let t = /* @__PURE__ */ d.lexer(o);
  function n(r) {
    var _a2, _b2, _c2;
    return r.type === "text" ? e === false ? r.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : r.text.replace(/\n */g, "<br/>") : r.type === "strong" ? `<strong>${(_a2 = r.tokens) == null ? void 0 : _a2.map(n).join("")}</strong>` : r.type === "em" ? `<em>${(_b2 = r.tokens) == null ? void 0 : _b2.map(n).join("")}</em>` : r.type === "paragraph" ? `<p>${(_c2 = r.tokens) == null ? void 0 : _c2.map(n).join("")}</p>` : r.type === "space" ? "" : r.type === "html" ? `${r.text}` : r.type === "escape" ? r.text : `Unsupported markdown: ${r.type}`;
  }
  return m$1(n, "output"), t.map(n).join("");
}
m$1(Ce, "markdownToHTML");
function kt(o) {
  return Intl.Segmenter ? [
    .../* @__PURE__ */ new Intl.Segmenter().segment(o)
  ].map((e) => e.segment) : [
    ...o
  ];
}
m$1(kt, "splitTextToChars");
function mt(o, e) {
  let t = /* @__PURE__ */ kt(e.content);
  return Me(o, [], t, e.type);
}
m$1(mt, "splitWordToFitWidth");
function Me(o, e, t, n) {
  if (t.length === 0) return [
    {
      content: /* @__PURE__ */ e.join(""),
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
      content: /* @__PURE__ */ s.join(""),
      type: n
    }
  ]) ? Me(o, s, i, n) : (e.length === 0 && r && (e.push(r), t.shift()), [
    {
      content: /* @__PURE__ */ e.join(""),
      type: n
    },
    {
      content: /* @__PURE__ */ t.join(""),
      type: n
    }
  ]);
}
m$1(Me, "splitWordToFitWidthRecursion");
function Ie(o, e) {
  if (o.some((param) => {
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
  let i = /* @__PURE__ */ o.append("foreignObject");
  i.attr("width", `${10 * t}px`), i.attr("height", `${10 * t}px`);
  let s = /* @__PURE__ */ i.append("xhtml:div"), l = e.label;
  e.label && Nl(e.label) && (l = await Cf(/* @__PURE__ */ e.label.replace(gC.lineBreakRegex, `
`), /* @__PURE__ */ Hl()));
  let a = e.isNode ? "nodeLabel" : "edgeLabel", c = /* @__PURE__ */ s.append("span");
  c.html(l), Ee(c, e.labelStyle), c.attr("class", `${a} ${n}`), Ee(s, e.labelStyle), s.style("display", "table-cell"), s.style("white-space", "nowrap"), s.style("line-height", "1.5"), s.style("max-width", t + "px"), s.style("text-align", "center"), s.attr("xmlns", "http://www.w3.org/1999/xhtml"), r && s.attr("class", "labelBkg");
  let p = /* @__PURE__ */ s.node().getBoundingClientRect();
  return p.width === t && (s.style("display", "table"), s.style("white-space", "break-spaces"), s.style("width", t + "px"), p = /* @__PURE__ */ s.node().getBoundingClientRect()), i.node();
}
m$1(xt, "addHtmlSpan");
function ee(o, e, t) {
  return o.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * t - 0.1 + "em").attr("dy", t + "em");
}
m$1(ee, "createTspan");
function bt(o, e, t) {
  let n = /* @__PURE__ */ o.append("text"), r = /* @__PURE__ */ ee(n, 1, e);
  te(r, t);
  let i = /* @__PURE__ */ r.node().getComputedTextLength();
  return n.remove(), i;
}
m$1(bt, "computeWidthOfText");
function Ht(o, e, t) {
  var _a2;
  let n = /* @__PURE__ */ o.append("text"), r = /* @__PURE__ */ ee(n, 1, e);
  te(r, [
    {
      content: t,
      type: "normal"
    }
  ]);
  let i = (_a2 = r.node()) == null ? void 0 : _a2.getBoundingClientRect();
  return i && n.remove(), i;
}
m$1(Ht, "computeDimensionOfText");
function wt(o, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  let i = /* @__PURE__ */ e.append("g"), s = /* @__PURE__ */ i.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = /* @__PURE__ */ i.append("text").attr("y", "-10.1"), a = 0;
  for (let c of t) {
    let p = /* @__PURE__ */ m$1((f) => bt(i, 1.1, f) <= o, "checkWidth"), h = p(c) ? [
      c
    ] : Ie(c, p);
    for (let f of h) {
      let g = /* @__PURE__ */ ee(l, a, 1.1);
      te(g, f), a++;
    }
  }
  if (n) {
    let c = /* @__PURE__ */ l.node().getBBox(), p = 2;
    return s.attr("x", c.x - p).attr("y", c.y - p).attr("width", c.width + 2 * p).attr("height", c.height + 2 * p), i.node();
  } else return l.node();
}
m$1(wt, "createFormattedText");
function te(o, e) {
  o.text(""), e.forEach((t, n) => {
    let r = /* @__PURE__ */ o.append("tspan").attr("font-style", t.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", t.type === "strong" ? "bold" : "normal");
    n === 0 ? r.text(t.content) : r.text(" " + t.content);
  });
}
m$1(te, "updateTextContentAndStyles");
function yt(o) {
  return o.replace(/fa[bklrs]?:fa-[\w-]+/g, (e) => `<i class='${e.replace(":", " ")}'></i>`);
}
m$1(yt, "replaceIconSubstring");
var Qt = /* @__PURE__ */ m$1(async function(o) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", { style: t = "", isTitle: n = false, classes: r = "", useHtmlLabels: i = true, isNode: s = true, width: l = 200, addSvgBackground: a = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = arguments.length > 3 ? arguments[3] : void 0;
  if (tt$1.debug("XYZ createText", e, t, n, r, i, s, "addSvgBackground: ", a), i) {
    let p = /* @__PURE__ */ Ce(e, c), h = /* @__PURE__ */ yt(/* @__PURE__ */ Xe$1(p)), f = /* @__PURE__ */ e.replace(/\\\\/g, "\\"), g = {
      isNode: s,
      label: Nl(e) ? f : h,
      labelStyle: /* @__PURE__ */ t.replace("fill:", "color:")
    };
    return await xt(o, g, l, r, a);
  } else {
    let p = /* @__PURE__ */ e.replace(/<br\s*\/?>/g, "<br/>"), h = /* @__PURE__ */ Ae(/* @__PURE__ */ p.replace("<br>", "<br/>"), c), f = /* @__PURE__ */ wt(l, o, h, e ? a : false);
    if (s) {
      /stroke:/.exec(t) && (t = /* @__PURE__ */ t.replace("stroke:", "lineColor:"));
      let g = /* @__PURE__ */ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ih(f).attr("style", g);
    } else {
      let g = /* @__PURE__ */ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      ih(f).select("rect").attr("style", /* @__PURE__ */ g.replace(/background:/g, "fill:"));
      let x = /* @__PURE__ */ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ih(f).select("text").attr("style", x);
    }
    return f;
  }
}, "createText");
export {
  Ht as H,
  Qt as Q,
  he as h,
  yt as y
};
