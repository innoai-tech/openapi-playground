var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _a, __, _b, __2, _c, __3, _d, __4, _e2, __5, _f, __6, _g, __7, __this_instances, t_fn, e_fn, n_fn;
import { X as Xe$1 } from "./vendor-min-mermaid~chunk-UENA7NWE.a12nwn0g.chunk.js";
import { t as tt$1, R as Rl, r as rh, g as gf, m as mC, W as Wl } from "./vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
function le(a) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  var s = /* @__PURE__ */ Array.from(typeof a == "string" ? [
    a
  ] : a);
  s[s.length - 1] = /* @__PURE__ */ s[s.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = /* @__PURE__ */ s.reduce(function(l, o) {
    var p = /* @__PURE__ */ o.match(/\n([\t ]+|(?!\s).)/g);
    return p ? l.concat(/* @__PURE__ */ p.map(function(c) {
      var h, u;
      return (u = (h = /* @__PURE__ */ c.match(/[\t ]/g)) === null || h === void 0 ? void 0 : h.length) !== null && u !== void 0 ? u : 0;
    })) : l;
  }, []);
  if (n.length) {
    var r = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    s = /* @__PURE__ */ s.map(function(l) {
      return l.replace(r, `
`);
    });
  }
  s[0] = /* @__PURE__ */ s[0].replace(/^\r?\n/, "");
  var i = s[0];
  return e.forEach(function(l, o) {
    var p = /* @__PURE__ */ i.match(/(?:^|\n)( *)$/), c = p ? p[1] : "", h = l;
    typeof l == "string" && l.includes(`
`) && (h = /* @__PURE__ */ String(l).split(`
`).map(function(u, g) {
      return g === 0 ? u : "" + c + u;
    }).join(`
`)), i += h + s[o + 1];
  }), i;
}
m$1(le, "dedent");
function O() {
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
m$1(O, "_getDefaults");
var R = /* @__PURE__ */ O();
function ue(a) {
  R = a;
}
m$1(ue, "changeDefaults");
var fe = /[&<>"']/, Le = new RegExp(fe.source, "g"), ge = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Me = new RegExp(ge.source, "g"), Ie = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, oe = /* @__PURE__ */ m$1((a) => Ie[a], "getEscapeReplacement");
function m(a, e) {
  if (e) {
    if (fe.test(a)) return a.replace(Le, oe);
  } else if (ge.test(a)) return a.replace(Me, oe);
  return a;
}
m$1(m, "escape$1");
var _e = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Ee(a) {
  return a.replace(_e, (e, t) => (t = /* @__PURE__ */ t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(/* @__PURE__ */ parseInt(/* @__PURE__ */ t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
m$1(Ee, "unescape");
var Ae = /(^|[^\[])\^/g;
function x(a, e) {
  let t = typeof a == "string" ? a : a.source;
  e = e || "";
  let s = {
    replace: /* @__PURE__ */ m$1((n, r) => {
      let i = typeof r == "string" ? r : r.source;
      return i = /* @__PURE__ */ i.replace(Ae, "$1"), t = /* @__PURE__ */ t.replace(n, i), s;
    }, "replace"),
    getRegex: /* @__PURE__ */ m$1(() => new RegExp(t, e), "getRegex")
  };
  return s;
}
m$1(x, "edit");
function ae(a) {
  try {
    a = /* @__PURE__ */ encodeURI(a).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return a;
}
m$1(ae, "cleanUrl");
var _ = {
  exec: /* @__PURE__ */ m$1(() => null, "exec")
};
function ce(a, e) {
  let t = /* @__PURE__ */ a.replace(/\|/g, (r, i, l) => {
    let o = false, p = i;
    for (; --p >= 0 && l[p] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }), s = /* @__PURE__ */ t.split(/ \|/), n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s[s.length - 1].trim() && s.pop(), e) if (s.length > e) s.splice(e);
  else for (; s.length < e; ) s.push("");
  for (; n < s.length; n++) s[n] = /* @__PURE__ */ s[n].trim().replace(/\\\|/g, "|");
  return s;
}
m$1(ce, "splitCells");
function M(a, e, t) {
  let s = a.length;
  if (s === 0) return "";
  let n = 0;
  for (; n < s; ) {
    let r = /* @__PURE__ */ a.charAt(s - n - 1);
    if (r === e && !t) n++;
    else if (r !== e && t) n++;
    else break;
  }
  return a.slice(0, s - n);
}
m$1(M, "rtrim");
function Ce(a, e) {
  if (a.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let s = 0; s < a.length; s++) if (a[s] === "\\") s++;
  else if (a[s] === e[0]) t++;
  else if (a[s] === e[1] && (t--, t < 0)) return s;
  return -1;
}
m$1(Ce, "findClosingBracket");
function pe(a, e, t, s) {
  let n = e.href, r = e.title ? m(e.title) : null, i = /* @__PURE__ */ a[1].replace(/\\([\[\]])/g, "$1");
  if (a[0].charAt(0) !== "!") {
    s.state.inLink = true;
    let l = {
      type: "link",
      raw: t,
      href: n,
      title: r,
      text: i,
      tokens: /* @__PURE__ */ s.inlineTokens(i)
    };
    return s.state.inLink = false, l;
  }
  return {
    type: "image",
    raw: t,
    href: n,
    title: r,
    text: /* @__PURE__ */ m(i)
  };
}
m$1(pe, "outputLink");
function ve(a, e) {
  let t = /* @__PURE__ */ a.match(/^(\s+)(?:```)/);
  if (t === null) return e;
  let s = t[1];
  return e.split(`
`).map((n) => {
    let r = /* @__PURE__ */ n.match(/^\s+/);
    if (r === null) return n;
    let [i] = r;
    return i.length >= s.length ? n.slice(s.length) : n;
  }).join(`
`);
}
m$1(ve, "indentCodeCompensation");
var S = (_a = class {
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
      let s = /* @__PURE__ */ t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? s : M(s, `
`)
      };
    }
  }
  fences(e) {
    let t = /* @__PURE__ */ this.rules.block.fences.exec(e);
    if (t) {
      let s = t[0], n = /* @__PURE__ */ ve(s, t[3] || "");
      return {
        type: "code",
        raw: s,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: n
      };
    }
  }
  heading(e) {
    let t = /* @__PURE__ */ this.rules.block.heading.exec(e);
    if (t) {
      let s = /* @__PURE__ */ t[2].trim();
      if (/#$/.test(s)) {
        let n = /* @__PURE__ */ M(s, "#");
        (this.options.pedantic || !n || / $/.test(n)) && (s = /* @__PURE__ */ n.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: s,
        tokens: /* @__PURE__ */ this.lexer.inline(s)
      };
    }
  }
  hr(e) {
    let t = /* @__PURE__ */ this.rules.block.hr.exec(e);
    if (t) return {
      type: "hr",
      raw: /* @__PURE__ */ M(t[0], `
`)
    };
  }
  blockquote(e) {
    let t = /* @__PURE__ */ this.rules.block.blockquote.exec(e);
    if (t) {
      let s = /* @__PURE__ */ M(t[0], `
`).split(`
`), n = "", r = "", i = [];
      for (; s.length > 0; ) {
        let l = false, o = [], p;
        for (p = 0; p < s.length; p++) if (/^ {0,3}>/.test(s[p])) o.push(s[p]), l = true;
        else if (!l) o.push(s[p]);
        else break;
        s = /* @__PURE__ */ s.slice(p);
        let c = /* @__PURE__ */ o.join(`
`), h = /* @__PURE__ */ c.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`).replace(/^ {0,3}>[ \t]?/gm, "");
        n = n ? `${n}
${c}` : c, r = r ? `${r}
${h}` : h;
        let u = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(h, i, true), this.lexer.state.top = u, s.length === 0) break;
        let g = i[i.length - 1];
        if ((g == null ? void 0 : g.type) === "code") break;
        if ((g == null ? void 0 : g.type) === "blockquote") {
          let d = g, b = d.raw + `
` + s.join(`
`), w = /* @__PURE__ */ this.blockquote(b);
          i[i.length - 1] = w, n = n.substring(0, n.length - d.raw.length) + w.raw, r = r.substring(0, r.length - d.text.length) + w.text;
          break;
        } else if ((g == null ? void 0 : g.type) === "list") {
          let d = g, b = d.raw + `
` + s.join(`
`), w = /* @__PURE__ */ this.list(b);
          i[i.length - 1] = w, n = n.substring(0, n.length - g.raw.length) + w.raw, r = r.substring(0, r.length - d.raw.length) + w.raw, s = /* @__PURE__ */ b.substring(i[i.length - 1].raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: n,
        tokens: i,
        text: r
      };
    }
  }
  list(e) {
    let t = /* @__PURE__ */ this.rules.block.list.exec(e);
    if (t) {
      let s = /* @__PURE__ */ t[1].trim(), n = s.length > 1, r = {
        type: "list",
        raw: "",
        ordered: n,
        start: n ? +s.slice(0, -1) : "",
        loose: false,
        items: []
      };
      s = n ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = n ? s : "[*+-]");
      let i = new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`), l = false;
      for (; e; ) {
        let o = false, p = "", c = "";
        if (!(t = /* @__PURE__ */ i.exec(e)) || this.rules.block.hr.test(e)) break;
        p = t[0], e = /* @__PURE__ */ e.substring(p.length);
        let h = /* @__PURE__ */ t[2].split(`
`, 1)[0].replace(/^\t+/, (q) => " ".repeat(3 * q.length)), u = e.split(`
`, 1)[0], g = !h.trim(), d = 0;
        if (this.options.pedantic ? (d = 2, c = /* @__PURE__ */ h.trimStart()) : g ? d = t[1].length + 1 : (d = /* @__PURE__ */ t[2].search(/[^ ]/), d = d > 4 ? 1 : d, c = /* @__PURE__ */ h.slice(d), d += t[1].length), g && /^ *$/.test(u) && (p += u + `
`, e = /* @__PURE__ */ e.substring(u.length + 1), o = true), !o) {
          let q = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), Y = new RegExp(`^ {0,${Math.min(3, d - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), J = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`), ee = new RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
          for (; e; ) {
            let Z = e.split(`
`, 1)[0];
            if (u = Z, this.options.pedantic && (u = /* @__PURE__ */ u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), J.test(u) || ee.test(u) || q.test(u) || Y.test(e)) break;
            if (u.search(/[^ ]/) >= d || !u.trim()) c += `
` + u.slice(d);
            else {
              if (g || h.search(/[^ ]/) >= 4 || J.test(h) || ee.test(h) || Y.test(h)) break;
              c += `
` + u;
            }
            !g && !u.trim() && (g = true), p += Z + `
`, e = /* @__PURE__ */ e.substring(Z.length + 1), h = /* @__PURE__ */ u.slice(d);
          }
        }
        r.loose || (l ? r.loose = true : /\n *\n *$/.test(p) && (l = true));
        let b = null, w;
        this.options.gfm && (b = /* @__PURE__ */ /^\[[ xX]\] /.exec(c), b && (w = b[0] !== "[ ] ", c = /* @__PURE__ */ c.replace(/^\[[ xX]\] +/, ""))), r.items.push({
          type: "list_item",
          raw: p,
          task: !!b,
          checked: w,
          loose: false,
          text: c,
          tokens: []
        }), r.raw += p;
      }
      r.items[r.items.length - 1].raw = /* @__PURE__ */ r.items[r.items.length - 1].raw.trimEnd(), r.items[r.items.length - 1].text = /* @__PURE__ */ r.items[r.items.length - 1].text.trimEnd(), r.raw = /* @__PURE__ */ r.raw.trimEnd();
      for (let o = 0; o < r.items.length; o++) if (this.lexer.state.top = false, r.items[o].tokens = /* @__PURE__ */ this.lexer.blockTokens(r.items[o].text, []), !r.loose) {
        let p = /* @__PURE__ */ r.items[o].tokens.filter((h) => h.type === "space"), c = p.length > 0 && p.some((h) => /\n.*\n/.test(h.raw));
        r.loose = c;
      }
      if (r.loose) for (let o = 0; o < r.items.length; o++) r.items[o].loose = true;
      return r;
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
      let s = /* @__PURE__ */ t[1].toLowerCase().replace(/\s+/g, " "), n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: s,
        raw: t[0],
        href: n,
        title: r
      };
    }
  }
  table(e) {
    let t = /* @__PURE__ */ this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2])) return;
    let s = /* @__PURE__ */ ce(t[1]), n = /* @__PURE__ */ t[2].replace(/^\||\| *$/g, "").split("|"), r = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === n.length) {
      for (let l of n) /^ *-+: *$/.test(l) ? i.align.push("right") : /^ *:-+: *$/.test(l) ? i.align.push("center") : /^ *:-+ *$/.test(l) ? i.align.push("left") : i.align.push(null);
      for (let l = 0; l < s.length; l++) i.header.push({
        text: s[l],
        tokens: /* @__PURE__ */ this.lexer.inline(s[l]),
        header: true,
        align: i.align[l]
      });
      for (let l of r) i.rows.push(/* @__PURE__ */ ce(l, i.header.length).map((o, p) => ({
        text: o,
        tokens: /* @__PURE__ */ this.lexer.inline(o),
        header: false,
        align: i.align[p]
      })));
      return i;
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
      let s = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: s,
        tokens: /* @__PURE__ */ this.lexer.inline(s)
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
      text: /* @__PURE__ */ m(t[1])
    };
  }
  tag(e) {
    let t = /* @__PURE__ */ this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = false), {
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
      let s = /* @__PURE__ */ t[2].trim();
      if (!this.options.pedantic && /^</.test(s)) {
        if (!/>$/.test(s)) return;
        let i = /* @__PURE__ */ M(/* @__PURE__ */ s.slice(0, -1), "\\");
        if ((s.length - i.length) % 2 === 0) return;
      } else {
        let i = /* @__PURE__ */ Ce(t[2], "()");
        if (i > -1) {
          let o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = /* @__PURE__ */ t[2].substring(0, i), t[0] = /* @__PURE__ */ t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let n = t[2], r = "";
      if (this.options.pedantic) {
        let i = /* @__PURE__ */ /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
        i && (n = i[1], r = i[3]);
      } else r = t[3] ? t[3].slice(1, -1) : "";
      return n = /* @__PURE__ */ n.trim(), /^</.test(n) && (this.options.pedantic && !/>$/.test(s) ? n = /* @__PURE__ */ n.slice(1) : n = /* @__PURE__ */ n.slice(1, -1)), pe(t, {
        href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
        title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let s;
    if ((s = /* @__PURE__ */ this.rules.inline.reflink.exec(e)) || (s = /* @__PURE__ */ this.rules.inline.nolink.exec(e))) {
      let n = /* @__PURE__ */ (s[2] || s[1]).replace(/\s+/g, " "), r = t[n.toLowerCase()];
      if (!r) {
        let i = /* @__PURE__ */ s[0].charAt(0);
        return {
          type: "text",
          raw: i,
          text: i
        };
      }
      return pe(s, r, s[0], this.lexer);
    }
  }
  emStrong(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    let n = /* @__PURE__ */ this.rules.inline.emStrongLDelim.exec(e);
    if (!n || n[3] && s.match(/[\p{L}\p{N}]/u)) return;
    if (!(n[1] || n[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      let i = [
        ...n[0]
      ].length - 1, l, o, p = i, c = 0, h = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, t = /* @__PURE__ */ t.slice(-1 * e.length + i); (n = /* @__PURE__ */ h.exec(t)) != null; ) {
        if (l = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !l) continue;
        if (o = [
          ...l
        ].length, n[3] || n[4]) {
          p += o;
          continue;
        } else if ((n[5] || n[6]) && i % 3 && !((i + o) % 3)) {
          c += o;
          continue;
        }
        if (p -= o, p > 0) continue;
        o = /* @__PURE__ */ Math.min(o, o + p + c);
        let u = [
          ...n[0]
        ][0].length, g = /* @__PURE__ */ e.slice(0, i + n.index + u + o);
        if (Math.min(i, o) % 2) {
          let b = /* @__PURE__ */ g.slice(1, -1);
          return {
            type: "em",
            raw: g,
            text: b,
            tokens: /* @__PURE__ */ this.lexer.inlineTokens(b)
          };
        }
        let d = /* @__PURE__ */ g.slice(2, -2);
        return {
          type: "strong",
          raw: g,
          text: d,
          tokens: /* @__PURE__ */ this.lexer.inlineTokens(d)
        };
      }
    }
  }
  codespan(e) {
    let t = /* @__PURE__ */ this.rules.inline.code.exec(e);
    if (t) {
      let s = /* @__PURE__ */ t[2].replace(/\n/g, " "), n = /* @__PURE__ */ /[^ ]/.test(s), r = /^ /.test(s) && / $/.test(s);
      return n && r && (s = /* @__PURE__ */ s.substring(1, s.length - 1)), s = /* @__PURE__ */ m(s, true), {
        type: "codespan",
        raw: t[0],
        text: s
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
      let s, n;
      return t[2] === "@" ? (s = /* @__PURE__ */ m(t[1]), n = "mailto:" + s) : (s = /* @__PURE__ */ m(t[1]), n = s), {
        type: "link",
        raw: t[0],
        text: s,
        href: n,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  url(e) {
    var _a2;
    let t;
    if (t = /* @__PURE__ */ this.rules.inline.url.exec(e)) {
      let s, n;
      if (t[2] === "@") s = /* @__PURE__ */ m(t[0]), n = "mailto:" + s;
      else {
        let r;
        do
          r = t[0], t[0] = ((_a2 = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : _a2[0]) ?? "";
        while (r !== t[0]);
        s = /* @__PURE__ */ m(t[0]), t[1] === "www." ? n = "http://" + t[0] : n = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: s,
        href: n,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  inlineText(e) {
    let t = /* @__PURE__ */ this.rules.inline.text.exec(e);
    if (t) {
      let s;
      return this.lexer.state.inRawBlock ? s = t[0] : s = /* @__PURE__ */ m(t[0]), {
        type: "text",
        raw: t[0],
        text: s
      };
    }
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "_Tokenizer")), _a), je = /^(?: *(?:\n|$))+/, Be = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, We = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, A = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, qe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, de = /(?:[*+-]|\d{1,9}[.)])/, ke = /* @__PURE__ */ x(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, de).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Q = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ze = /^[^\n]+/, H = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Pe = /* @__PURE__ */ x(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", H).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), De = /* @__PURE__ */ x(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, de).getRegex(), W = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", N = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Fe = /* @__PURE__ */ x("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", N).replace("tag", W).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), xe = /* @__PURE__ */ x(Q).replace("hr", A).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex(), Oe = /* @__PURE__ */ x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", xe).getRegex(), G = {
  blockquote: Oe,
  code: Be,
  def: Pe,
  fences: We,
  heading: qe,
  hr: A,
  html: Fe,
  lheading: ke,
  list: De,
  newline: je,
  paragraph: xe,
  table: _,
  text: Ze
}, he = /* @__PURE__ */ x("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", A).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex(), Qe = {
  ...G,
  table: he,
  paragraph: /* @__PURE__ */ x(Q).replace("hr", A).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", he).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex()
}, He = {
  ...G,
  html: /* @__PURE__ */ x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", N).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: _,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: /* @__PURE__ */ x(Q).replace("hr", A).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ke).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, me = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ne = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, be = /^( {2,}|\\)\n(?!\s*$)/, Ge = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, C = "\\p{P}\\p{S}", Ue = /* @__PURE__ */ x(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, C).getRegex(), Xe = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Ke = /* @__PURE__ */ x(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, C).getRegex(), Ve = /* @__PURE__ */ x("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, C).getRegex(), Ye = /* @__PURE__ */ x("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, C).getRegex(), Je = /* @__PURE__ */ x(/\\([punct])/, "gu").replace(/punct/g, C).getRegex(), et = /* @__PURE__ */ x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), tt = /* @__PURE__ */ x(N).replace("(?:-->|$)", "-->").getRegex(), nt = /* @__PURE__ */ x("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", tt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), B = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, st = /* @__PURE__ */ x(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", B).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), we = /* @__PURE__ */ x(/^!?\[(label)\]\[(ref)\]/).replace("label", B).replace("ref", H).getRegex(), ye = /* @__PURE__ */ x(/^!?\[(ref)\](?:\[\])?/).replace("ref", H).getRegex(), rt = /* @__PURE__ */ x("reflink|nolink(?!\\()", "g").replace("reflink", we).replace("nolink", ye).getRegex(), U = {
  _backpedal: _,
  anyPunctuation: Je,
  autolink: et,
  blockSkip: Xe,
  br: be,
  code: Ne,
  del: _,
  emStrongLDelim: Ke,
  emStrongRDelimAst: Ve,
  emStrongRDelimUnd: Ye,
  escape: me,
  link: st,
  nolink: ye,
  punctuation: Ue,
  reflink: we,
  reflinkSearch: rt,
  tag: nt,
  text: Ge,
  url: _
}, it = {
  ...U,
  link: /* @__PURE__ */ x(/^!?\[(label)\]\((.*?)\)/).replace("label", B).getRegex(),
  reflink: /* @__PURE__ */ x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", B).getRegex()
}, D = {
  ...U,
  escape: /* @__PURE__ */ x(me).replace("])", "~|])").getRegex(),
  url: /* @__PURE__ */ x(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, lt = {
  ...D,
  br: /* @__PURE__ */ x(be).replace("{2,}", "*").getRegex(),
  text: /* @__PURE__ */ x(D.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, j = {
  normal: G,
  gfm: Qe,
  pedantic: He
}, I = {
  normal: U,
  gfm: D,
  breaks: lt,
  pedantic: it
}, y = (_b = class {
  constructor(e) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new S(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    let t = {
      block: j.normal,
      inline: I.normal
    };
    this.options.pedantic ? (t.block = j.pedantic, t.inline = I.pedantic) : this.options.gfm && (t.block = j.gfm, this.options.breaks ? t.inline = I.breaks : t.inline = I.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return {
      block: j,
      inline: I
    };
  }
  static lex(e, t) {
    return new _b(t).lex(e);
  }
  static lexInline(e, t) {
    return new _b(t).inlineTokens(e);
  }
  lex(e) {
    e = /* @__PURE__ */ e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let s = this.inlineQueue[t];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    this.options.pedantic ? e = /* @__PURE__ */ e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = /* @__PURE__ */ e.replace(/^( *)(\t+)/gm, (l, o, p) => o + "    ".repeat(p.length));
    let n, r, i;
    for (; e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((l) => (n = /* @__PURE__ */ l.call({
      lexer: this
    }, e, t)) ? (e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n), true) : false))) {
      if (n = /* @__PURE__ */ this.tokenizer.space(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.code(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.fences(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.heading(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.hr(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.blockquote(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.list(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.html(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.def(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + n.raw, r.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
          href: n.href,
          title: n.title
        });
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.table(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.lheading(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (i = e, this.options.extensions && this.options.extensions.startBlock) {
        let l = 1 / 0, o = /* @__PURE__ */ e.slice(1), p;
        this.options.extensions.startBlock.forEach((c) => {
          p = /* @__PURE__ */ c.call({
            lexer: this
          }, o), typeof p == "number" && p >= 0 && (l = /* @__PURE__ */ Math.min(l, p));
        }), l < 1 / 0 && l >= 0 && (i = /* @__PURE__ */ e.substring(0, l + 1));
      }
      if (this.state.top && (n = /* @__PURE__ */ this.tokenizer.paragraph(i))) {
        r = t[t.length - 1], s && (r == null ? void 0 : r.type) === "paragraph" ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n), s = i.length !== e.length, e = /* @__PURE__ */ e.substring(n.raw.length);
        continue;
      }
      if (n = /* @__PURE__ */ this.tokenizer.text(e)) {
        e = /* @__PURE__ */ e.substring(n.raw.length), r = t[t.length - 1], r && r.type === "text" ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n);
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
    let s, n, r, i = e, l, o, p;
    if (this.tokens.links) {
      let c = /* @__PURE__ */ Object.keys(this.tokens.links);
      if (c.length > 0) for (; (l = /* @__PURE__ */ this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) c.includes(/* @__PURE__ */ l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (l = /* @__PURE__ */ this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) i = i.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (l = /* @__PURE__ */ this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, l.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; ) if (o || (p = ""), o = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => (s = /* @__PURE__ */ c.call({
      lexer: this
    }, e, t)) ? (e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s), true) : false))) {
      if (s = /* @__PURE__ */ this.tokenizer.escape(e)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = /* @__PURE__ */ this.tokenizer.tag(e)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), n = t[t.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : t.push(s);
        continue;
      }
      if (s = /* @__PURE__ */ this.tokenizer.link(e)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = /* @__PURE__ */ this.tokenizer.reflink(e, this.tokens.links)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), n = t[t.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : t.push(s);
        continue;
      }
      if (s = /* @__PURE__ */ this.tokenizer.emStrong(e, i, p)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = /* @__PURE__ */ this.tokenizer.codespan(e)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = /* @__PURE__ */ this.tokenizer.br(e)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = /* @__PURE__ */ this.tokenizer.del(e)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (s = /* @__PURE__ */ this.tokenizer.autolink(e)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (!this.state.inLink && (s = /* @__PURE__ */ this.tokenizer.url(e))) {
        e = /* @__PURE__ */ e.substring(s.raw.length), t.push(s);
        continue;
      }
      if (r = e, this.options.extensions && this.options.extensions.startInline) {
        let c = 1 / 0, h = /* @__PURE__ */ e.slice(1), u;
        this.options.extensions.startInline.forEach((g) => {
          u = /* @__PURE__ */ g.call({
            lexer: this
          }, h), typeof u == "number" && u >= 0 && (c = /* @__PURE__ */ Math.min(c, u));
        }), c < 1 / 0 && c >= 0 && (r = /* @__PURE__ */ e.substring(0, c + 1));
      }
      if (s = /* @__PURE__ */ this.tokenizer.inlineText(r)) {
        e = /* @__PURE__ */ e.substring(s.raw.length), s.raw.slice(-1) !== "_" && (p = /* @__PURE__ */ s.raw.slice(-1)), o = true, n = t[t.length - 1], n && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : t.push(s);
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
}, __2 = new WeakMap(), __privateAdd(_b, __2, m$1(_b, "_Lexer")), _b), L = (_c = class {
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
    let { text: e, lang: t, escaped: s } = param;
    let n = (_a2 = (t || "").match(/^\S*/)) == null ? void 0 : _a2[0], r = e.replace(/\n$/, "") + `
`;
    return n ? '<pre><code class="language-' + m(n) + '">' + (s ? r : m(r, true)) + `</code></pre>
` : "<pre><code>" + (s ? r : m(r, true)) + `</code></pre>
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
    let t = e.ordered, s = e.start, n = "";
    for (let l = 0; l < e.items.length; l++) {
      let o = e.items[l];
      n += /* @__PURE__ */ this.listitem(o);
    }
    let r = t ? "ol" : "ul", i = t && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + r + i + `>
` + n + "</" + r + `>
`;
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      let s = /* @__PURE__ */ this.checkbox({
        checked: !!e.checked
      });
      e.loose ? e.tokens.length > 0 && e.tokens[0].type === "paragraph" ? (e.tokens[0].text = s + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = s + " " + e.tokens[0].tokens[0].text)) : e.tokens.unshift({
        type: "text",
        raw: s + " ",
        text: s + " "
      }) : t += s + " ";
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
    let t = "", s = "";
    for (let r = 0; r < e.header.length; r++) s += /* @__PURE__ */ this.tablecell(e.header[r]);
    t += /* @__PURE__ */ this.tablerow({
      text: s
    });
    let n = "";
    for (let r = 0; r < e.rows.length; r++) {
      let i = e.rows[r];
      s = "";
      for (let l = 0; l < i.length; l++) s += /* @__PURE__ */ this.tablecell(i[l]);
      n += /* @__PURE__ */ this.tablerow({
        text: s
      });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + n + `</table>
`;
  }
  tablerow(param) {
    let { text: e } = param;
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = /* @__PURE__ */ this.parser.parseInline(e.tokens), s = e.header ? "th" : "td";
    return (e.align ? `<${s} align="${e.align}">` : `<${s}>`) + t + `</${s}>
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
    return `<code>${e}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del(param) {
    let { tokens: e } = param;
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link(param) {
    let { href: e, title: t, tokens: s } = param;
    let n = /* @__PURE__ */ this.parser.parseInline(s), r = /* @__PURE__ */ ae(e);
    if (r === null) return n;
    e = r;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>", i;
  }
  image(param) {
    let { href: e, title: t, text: s } = param;
    let n = /* @__PURE__ */ ae(e);
    if (n === null) return s;
    e = n;
    let r = `<img src="${e}" alt="${s}"`;
    return t && (r += ` title="${t}"`), r += ">", r;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : e.text;
  }
}, __3 = new WeakMap(), __privateAdd(_c, __3, m$1(_c, "_Renderer")), _c), E = (_d = class {
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
}, __4 = new WeakMap(), __privateAdd(_d, __4, m$1(_d, "_TextRenderer")), _d), T = (_e2 = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e || R, this.options.renderer = this.options.renderer || new L(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new E();
  }
  static parse(e, t) {
    return new _e2(t).parse(e);
  }
  static parseInline(e, t) {
    return new _e2(t).parseInline(e);
  }
  parse(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    let s = "";
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        let l = r, o = /* @__PURE__ */ this.options.extensions.renderers[l.type].call({
          parser: this
        }, l);
        if (o !== false || ![
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
          s += o || "";
          continue;
        }
      }
      let i = r;
      switch (i.type) {
        case "space": {
          s += /* @__PURE__ */ this.renderer.space(i);
          continue;
        }
        case "hr": {
          s += /* @__PURE__ */ this.renderer.hr(i);
          continue;
        }
        case "heading": {
          s += /* @__PURE__ */ this.renderer.heading(i);
          continue;
        }
        case "code": {
          s += /* @__PURE__ */ this.renderer.code(i);
          continue;
        }
        case "table": {
          s += /* @__PURE__ */ this.renderer.table(i);
          continue;
        }
        case "blockquote": {
          s += /* @__PURE__ */ this.renderer.blockquote(i);
          continue;
        }
        case "list": {
          s += /* @__PURE__ */ this.renderer.list(i);
          continue;
        }
        case "html": {
          s += /* @__PURE__ */ this.renderer.html(i);
          continue;
        }
        case "paragraph": {
          s += /* @__PURE__ */ this.renderer.paragraph(i);
          continue;
        }
        case "text": {
          let l = i, o = /* @__PURE__ */ this.renderer.text(l);
          for (; n + 1 < e.length && e[n + 1].type === "text"; ) l = e[++n], o += `
` + this.renderer.text(l);
          t ? s += /* @__PURE__ */ this.renderer.paragraph({
            type: "paragraph",
            raw: o,
            text: o,
            tokens: [
              {
                type: "text",
                raw: o,
                text: o
              }
            ]
          }) : s += o;
          continue;
        }
        default: {
          let l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return s;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let s = "";
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        let l = /* @__PURE__ */ this.options.extensions.renderers[r.type].call({
          parser: this
        }, r);
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
        ].includes(r.type)) {
          s += l || "";
          continue;
        }
      }
      let i = r;
      switch (i.type) {
        case "escape": {
          s += /* @__PURE__ */ t.text(i);
          break;
        }
        case "html": {
          s += /* @__PURE__ */ t.html(i);
          break;
        }
        case "link": {
          s += /* @__PURE__ */ t.link(i);
          break;
        }
        case "image": {
          s += /* @__PURE__ */ t.image(i);
          break;
        }
        case "strong": {
          s += /* @__PURE__ */ t.strong(i);
          break;
        }
        case "em": {
          s += /* @__PURE__ */ t.em(i);
          break;
        }
        case "codespan": {
          s += /* @__PURE__ */ t.codespan(i);
          break;
        }
        case "br": {
          s += /* @__PURE__ */ t.br(i);
          break;
        }
        case "del": {
          s += /* @__PURE__ */ t.del(i);
          break;
        }
        case "text": {
          s += /* @__PURE__ */ t.text(i);
          break;
        }
        default: {
          let l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return s;
  }
}, __5 = new WeakMap(), __privateAdd(_e2, __5, m$1(_e2, "_Parser")), _e2), z = (_f = class {
  constructor(e) {
    __publicField(this, "options");
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
}, __6 = new WeakMap(), __privateAdd(_f, __6, m$1(_f, "_Hooks")), __publicField(_f, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), _f), F = (_g = class {
  constructor(...e) {
    __privateAdd(this, __this_instances);
    __publicField(this, "defaults", O());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", __privateMethod(this, __this_instances, e_fn).call(this, y.lex, T.parse));
    __publicField(this, "parseInline", __privateMethod(this, __this_instances, e_fn).call(this, y.lexInline, T.parseInline));
    __publicField(this, "Parser", T);
    __publicField(this, "Renderer", L);
    __publicField(this, "TextRenderer", E);
    __publicField(this, "Lexer", y);
    __publicField(this, "Tokenizer", S);
    __publicField(this, "Hooks", z);
    this.use(...e);
  }
  walkTokens(e, t) {
    var _a2, _b2;
    let s = [];
    for (let n of e) switch (s = /* @__PURE__ */ s.concat(/* @__PURE__ */ t.call(this, n)), n.type) {
      case "table": {
        let r = n;
        for (let i of r.header) s = /* @__PURE__ */ s.concat(/* @__PURE__ */ this.walkTokens(i.tokens, t));
        for (let i of r.rows) for (let l of i) s = /* @__PURE__ */ s.concat(/* @__PURE__ */ this.walkTokens(l.tokens, t));
        break;
      }
      case "list": {
        let r = n;
        s = /* @__PURE__ */ s.concat(/* @__PURE__ */ this.walkTokens(r.items, t));
        break;
      }
      default: {
        let r = n;
        ((_b2 = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) == null ? void 0 : _b2[r.type]) ? this.defaults.extensions.childTokens[r.type].forEach((i) => {
          let l = /* @__PURE__ */ r[i].flat(1 / 0);
          s = /* @__PURE__ */ s.concat(/* @__PURE__ */ this.walkTokens(l, t));
        }) : r.tokens && (s = /* @__PURE__ */ s.concat(/* @__PURE__ */ this.walkTokens(r.tokens, t)));
      }
    }
    return s;
  }
  use() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    let t = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    return e.forEach((s) => {
      let n = {
        ...s
      };
      if (n.async = this.defaults.async || n.async || false, s.extensions && (s.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let i = t.renderers[r.name];
          i ? t.renderers[r.name] = function() {
            for (var _len2 = arguments.length, l = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              l[_key2] = arguments[_key2];
            }
            let o = /* @__PURE__ */ r.renderer.apply(this, l);
            return o === false && (o = /* @__PURE__ */ i.apply(this, l)), o;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i = t[r.level];
          i ? i.unshift(r.tokenizer) : t[r.level] = [
            r.tokenizer
          ], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [
            r.start
          ] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [
            r.start
          ]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), n.extensions = t), s.renderer) {
        let r = this.defaults.renderer || new L(this.defaults);
        for (let i in s.renderer) {
          if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
          if ([
            "options",
            "parser"
          ].includes(i)) continue;
          let l = i, o = s.renderer[l];
          s.useNewRenderer || (o = /* @__PURE__ */ __privateMethod(this, __this_instances, t_fn).call(this, o, l, r));
          let p = r[l];
          r[l] = function() {
            for (var _len2 = arguments.length, c = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              c[_key2] = arguments[_key2];
            }
            let h = /* @__PURE__ */ o.apply(r, c);
            return h === false && (h = /* @__PURE__ */ p.apply(r, c)), h || "";
          };
        }
        n.renderer = r;
      }
      if (s.tokenizer) {
        let r = this.defaults.tokenizer || new S(this.defaults);
        for (let i in s.tokenizer) {
          if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
          if ([
            "options",
            "rules",
            "lexer"
          ].includes(i)) continue;
          let l = i, o = s.tokenizer[l], p = r[l];
          r[l] = function() {
            for (var _len2 = arguments.length, c = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              c[_key2] = arguments[_key2];
            }
            let h = /* @__PURE__ */ o.apply(r, c);
            return h === false && (h = /* @__PURE__ */ p.apply(r, c)), h;
          };
        }
        n.tokenizer = r;
      }
      if (s.hooks) {
        let r = this.defaults.hooks || new z();
        for (let i in s.hooks) {
          if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
          if (i === "options") continue;
          let l = i, o = s.hooks[l], p = r[l];
          z.passThroughHooks.has(i) ? r[l] = (c) => {
            if (this.defaults.async) return Promise.resolve(/* @__PURE__ */ o.call(r, c)).then((u) => p.call(r, u));
            let h = /* @__PURE__ */ o.call(r, c);
            return p.call(r, h);
          } : r[l] = function() {
            for (var _len2 = arguments.length, c = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              c[_key2] = arguments[_key2];
            }
            let h = /* @__PURE__ */ o.apply(r, c);
            return h === false && (h = /* @__PURE__ */ p.apply(r, c)), h;
          };
        }
        n.hooks = r;
      }
      if (s.walkTokens) {
        let r = this.defaults.walkTokens, i = s.walkTokens;
        n.walkTokens = function(l) {
          let o = [];
          return o.push(/* @__PURE__ */ i.call(this, l)), r && (o = /* @__PURE__ */ o.concat(/* @__PURE__ */ r.call(this, l))), o;
        };
      }
      this.defaults = {
        ...this.defaults,
        ...n
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
}, __7 = new WeakMap(), __this_instances = new WeakSet(), t_fn = function(e, t, s) {
  switch (t) {
    case "heading":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, /* @__PURE__ */ s.parser.parseInline(n.tokens), n.depth, /* @__PURE__ */ Ee(/* @__PURE__ */ s.parser.parseInline(n.tokens, s.parser.textRenderer)));
      };
    case "code":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, n.text, n.lang, !!n.escaped);
      };
    case "table":
      return function(n) {
        if (!n.type || n.type !== t) return e.apply(this, arguments);
        let r = "", i = "";
        for (let o = 0; o < n.header.length; o++) i += /* @__PURE__ */ this.tablecell({
          text: n.header[o].text,
          tokens: n.header[o].tokens,
          header: true,
          align: n.align[o]
        });
        r += /* @__PURE__ */ this.tablerow({
          text: i
        });
        let l = "";
        for (let o = 0; o < n.rows.length; o++) {
          let p = n.rows[o];
          i = "";
          for (let c = 0; c < p.length; c++) i += /* @__PURE__ */ this.tablecell({
            text: p[c].text,
            tokens: p[c].tokens,
            header: false,
            align: n.align[c]
          });
          l += /* @__PURE__ */ this.tablerow({
            text: i
          });
        }
        return e.call(this, r, l);
      };
    case "blockquote":
      return function(n) {
        if (!n.type || n.type !== t) return e.apply(this, arguments);
        let r = /* @__PURE__ */ this.parser.parse(n.tokens);
        return e.call(this, r);
      };
    case "list":
      return function(n) {
        if (!n.type || n.type !== t) return e.apply(this, arguments);
        let r = n.ordered, i = n.start, l = n.loose, o = "";
        for (let p = 0; p < n.items.length; p++) {
          let c = n.items[p], h = c.checked, u = c.task, g = "";
          if (c.task) {
            let d = /* @__PURE__ */ this.checkbox({
              checked: !!h
            });
            l ? c.tokens.length > 0 && c.tokens[0].type === "paragraph" ? (c.tokens[0].text = d + " " + c.tokens[0].text, c.tokens[0].tokens && c.tokens[0].tokens.length > 0 && c.tokens[0].tokens[0].type === "text" && (c.tokens[0].tokens[0].text = d + " " + c.tokens[0].tokens[0].text)) : c.tokens.unshift({
              type: "text",
              text: d + " "
            }) : g += d + " ";
          }
          g += /* @__PURE__ */ this.parser.parse(c.tokens, l), o += /* @__PURE__ */ this.listitem({
            type: "list_item",
            raw: g,
            text: g,
            task: u,
            checked: !!h,
            loose: l,
            tokens: c.tokens
          });
        }
        return e.call(this, o, r, i);
      };
    case "html":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, n.text, n.block);
      };
    case "paragraph":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, /* @__PURE__ */ this.parser.parseInline(n.tokens));
      };
    case "escape":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, n.text);
      };
    case "link":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, n.href, n.title, /* @__PURE__ */ this.parser.parseInline(n.tokens));
      };
    case "image":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, n.href, n.title, n.text);
      };
    case "strong":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, /* @__PURE__ */ this.parser.parseInline(n.tokens));
      };
    case "em":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, /* @__PURE__ */ this.parser.parseInline(n.tokens));
      };
    case "codespan":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, n.text);
      };
    case "del":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, /* @__PURE__ */ this.parser.parseInline(n.tokens));
      };
    case "text":
      return function(n) {
        return !n.type || n.type !== t ? e.apply(this, arguments) : e.call(this, n.text);
      };
  }
  return e;
}, e_fn = function(e, t) {
  return (s, n) => {
    let r = {
      ...n
    }, i = {
      ...this.defaults,
      ...r
    };
    this.defaults.async === true && r.async === false && (i.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), i.async = true);
    let l = /* @__PURE__ */ __privateMethod(this, __this_instances, n_fn).call(this, !!i.silent, !!i.async);
    if (typeof s > "u" || s === null) return l(new Error("marked(): input parameter is undefined or null"));
    if (typeof s != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
    if (i.hooks && (i.hooks.options = i), i.async) return Promise.resolve(i.hooks ? i.hooks.preprocess(s) : s).then((o) => e(o, i)).then((o) => i.hooks ? i.hooks.processAllTokens(o) : o).then((o) => i.walkTokens ? Promise.all(/* @__PURE__ */ this.walkTokens(o, i.walkTokens)).then(() => o) : o).then((o) => t(o, i)).then((o) => i.hooks ? i.hooks.postprocess(o) : o).catch(l);
    try {
      i.hooks && (s = /* @__PURE__ */ i.hooks.preprocess(s));
      let o = /* @__PURE__ */ e(s, i);
      i.hooks && (o = /* @__PURE__ */ i.hooks.processAllTokens(o)), i.walkTokens && this.walkTokens(o, i.walkTokens);
      let p = /* @__PURE__ */ t(o, i);
      return i.hooks && (p = /* @__PURE__ */ i.hooks.postprocess(p)), p;
    } catch (o) {
      return l(o);
    }
  };
}, n_fn = function(e, t) {
  return (s) => {
    if (s.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      let n = "<p>An error occurred:</p><pre>" + m(s.message + "", true) + "</pre>";
      return t ? Promise.resolve(n) : n;
    }
    if (t) return Promise.reject(s);
    throw s;
  };
}, __privateAdd(_g, __7, m$1(_g, "Marked")), _g), $ = new F();
function k(a, e) {
  return $.parse(a, e);
}
m$1(k, "marked");
k.options = k.setOptions = function(a) {
  return $.setOptions(a), k.defaults = $.defaults, ue(k.defaults), k;
};
k.getDefaults = O;
k.defaults = R;
k.use = function() {
  for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
  }
  return $.use(...a), k.defaults = $.defaults, ue(k.defaults), k;
};
k.walkTokens = function(a, e) {
  return $.walkTokens(a, e);
};
k.parseInline = $.parseInline;
k.Parser = T;
k.parser = T.parse;
k.Renderer = L;
k.TextRenderer = E;
k.Lexer = y;
k.lexer = y.lex;
k.Tokenizer = S;
k.Hooks = z;
k.parse = k;
k.options;
k.setOptions;
k.use;
k.walkTokens;
k.parseInline;
T.parse;
y.lex;
function ot(a, param) {
  let { markdownAutoWrap: e } = param;
  let s = /* @__PURE__ */ a.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), n = /* @__PURE__ */ le(s);
  return e === false ? n.replace(/ /g, "&nbsp;") : n;
}
m$1(ot, "preprocessMarkdown");
function Te(a) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let t = /* @__PURE__ */ ot(a, e), s = /* @__PURE__ */ k.lexer(t), n = [
    []
  ], r = 0;
  function i(l) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "normal";
    l.type === "text" ? l.text.split(`
`).forEach((c, h) => {
      h !== 0 && (r++, n.push([])), c.split(" ").forEach((u) => {
        u = /* @__PURE__ */ u.replace(/&#39;/g, "'"), u && n[r].push({
          content: u,
          type: o
        });
      });
    }) : l.type === "strong" || l.type === "em" ? l.tokens.forEach((p) => {
      i(p, l.type);
    }) : l.type === "html" && n[r].push({
      content: l.text,
      type: "normal"
    });
  }
  return m$1(i, "processNode"), s.forEach((l) => {
    var _a2;
    l.type === "paragraph" ? (_a2 = l.tokens) == null ? void 0 : _a2.forEach((o) => {
      i(o);
    }) : l.type === "html" && n[r].push({
      content: l.text,
      type: "normal"
    });
  }), n;
}
m$1(Te, "markdownToLines");
function $e(a) {
  let { markdownAutoWrap: e } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let t = /* @__PURE__ */ k.lexer(a);
  function s(n) {
    var _a2, _b2, _c2;
    return n.type === "text" ? e === false ? n.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : n.text.replace(/\n */g, "<br/>") : n.type === "strong" ? `<strong>${(_a2 = n.tokens) == null ? void 0 : _a2.map(s).join("")}</strong>` : n.type === "em" ? `<em>${(_b2 = n.tokens) == null ? void 0 : _b2.map(s).join("")}</em>` : n.type === "paragraph" ? `<p>${(_c2 = n.tokens) == null ? void 0 : _c2.map(s).join("")}</p>` : n.type === "space" ? "" : n.type === "html" ? `${n.text}` : n.type === "escape" ? n.text : `Unsupported markdown: ${n.type}`;
  }
  return m$1(s, "output"), t.map(s).join("");
}
m$1($e, "markdownToHTML");
function at(a) {
  return Intl.Segmenter ? [
    .../* @__PURE__ */ new Intl.Segmenter().segment(a)
  ].map((e) => e.segment) : [
    ...a
  ];
}
m$1(at, "splitTextToChars");
function ct(a, e) {
  let t = /* @__PURE__ */ at(e.content);
  return Re(a, [], t, e.type);
}
m$1(ct, "splitWordToFitWidth");
function Re(a, e, t, s) {
  if (t.length === 0) return [
    {
      content: /* @__PURE__ */ e.join(""),
      type: s
    },
    {
      content: "",
      type: s
    }
  ];
  let [n, ...r] = t, i = [
    ...e,
    n
  ];
  return a([
    {
      content: /* @__PURE__ */ i.join(""),
      type: s
    }
  ]) ? Re(a, i, r, s) : (e.length === 0 && n && (e.push(n), t.shift()), [
    {
      content: /* @__PURE__ */ e.join(""),
      type: s
    },
    {
      content: /* @__PURE__ */ t.join(""),
      type: s
    }
  ]);
}
m$1(Re, "splitWordToFitWidthRecursion");
function ze(a, e) {
  if (a.some((param) => {
    let { content: t } = param;
    return t.includes(`
`);
  })) throw new Error("splitLineToFitWidth does not support newlines in the line");
  return X(a, e);
}
m$1(ze, "splitLineToFitWidth");
function X(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  if (a.length === 0) return s.length > 0 && t.push(s), t.length > 0 ? t : [];
  let n = "";
  a[0].content === " " && (n = " ", a.shift());
  let r = a.shift() ?? {
    content: " ",
    type: "normal"
  }, i = [
    ...s
  ];
  if (n !== "" && i.push({
    content: n,
    type: "normal"
  }), i.push(r), e(i)) return X(a, e, t, i);
  if (s.length > 0) t.push(s), a.unshift(r);
  else if (r.content) {
    let [l, o] = ct(e, r);
    t.push([
      l
    ]), o.content && a.unshift(o);
  }
  return X(a, e, t);
}
m$1(X, "splitLineToFitWidthRecursion");
function Se(a, e) {
  e && a.attr("style", e);
}
m$1(Se, "applyStyle");
async function pt(a, e, t, s) {
  let n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  let r = /* @__PURE__ */ a.append("foreignObject");
  r.attr("width", `${10 * t}px`), r.attr("height", `${10 * t}px`);
  let i = /* @__PURE__ */ r.append("xhtml:div"), l = e.label;
  e.label && Rl(e.label) && (l = await gf(/* @__PURE__ */ e.label.replace(mC.lineBreakRegex, `
`), /* @__PURE__ */ Wl()));
  let o = e.isNode ? "nodeLabel" : "edgeLabel", p = /* @__PURE__ */ i.append("span");
  p.html(l), Se(p, e.labelStyle), p.attr("class", `${o} ${s}`), Se(i, e.labelStyle), i.style("display", "table-cell"), i.style("white-space", "nowrap"), i.style("line-height", "1.5"), i.style("max-width", t + "px"), i.style("text-align", "center"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), n && i.attr("class", "labelBkg");
  let c = /* @__PURE__ */ i.node().getBoundingClientRect();
  return c.width === t && (i.style("display", "table"), i.style("white-space", "break-spaces"), i.style("width", t + "px"), c = /* @__PURE__ */ i.node().getBoundingClientRect()), r.node();
}
m$1(pt, "addHtmlSpan");
function K(a, e, t) {
  return a.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * t - 0.1 + "em").attr("dy", t + "em");
}
m$1(K, "createTspan");
function ht(a, e, t) {
  let s = /* @__PURE__ */ a.append("text"), n = /* @__PURE__ */ K(s, 1, e);
  V(n, t);
  let r = /* @__PURE__ */ n.node().getComputedTextLength();
  return s.remove(), r;
}
m$1(ht, "computeWidthOfText");
function qt(a, e, t) {
  var _a2;
  let s = /* @__PURE__ */ a.append("text"), n = /* @__PURE__ */ K(s, 1, e);
  V(n, [
    {
      content: t,
      type: "normal"
    }
  ]);
  let r = (_a2 = n.node()) == null ? void 0 : _a2.getBoundingClientRect();
  return r && s.remove(), r;
}
m$1(qt, "computeDimensionOfText");
function ut(a, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  let r = /* @__PURE__ */ e.append("g"), i = /* @__PURE__ */ r.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = /* @__PURE__ */ r.append("text").attr("y", "-10.1"), o = 0;
  for (let p of t) {
    let c = /* @__PURE__ */ m$1((u) => ht(r, 1.1, u) <= a, "checkWidth"), h = c(p) ? [
      p
    ] : ze(p, c);
    for (let u of h) {
      let g = /* @__PURE__ */ K(l, o, 1.1);
      V(g, u), o++;
    }
  }
  if (s) {
    let p = /* @__PURE__ */ l.node().getBBox(), c = 2;
    return i.attr("x", p.x - c).attr("y", p.y - c).attr("width", p.width + 2 * c).attr("height", p.height + 2 * c), r.node();
  } else return l.node();
}
m$1(ut, "createFormattedText");
function V(a, e) {
  a.text(""), e.forEach((t, s) => {
    let n = /* @__PURE__ */ a.append("tspan").attr("font-style", t.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", t.type === "strong" ? "bold" : "normal");
    s === 0 ? n.text(t.content) : n.text(" " + t.content);
  });
}
m$1(V, "updateTextContentAndStyles");
function ft(a) {
  return a.replace(/fa[bklrs]?:fa-[\w-]+/g, (e) => `<i class='${e.replace(":", " ")}'></i>`);
}
m$1(ft, "replaceIconSubstring");
var Zt = /* @__PURE__ */ m$1(async function(a) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", { style: t = "", isTitle: s = false, classes: n = "", useHtmlLabels: r = true, isNode: i = true, width: l = 200, addSvgBackground: o = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, p = arguments.length > 3 ? arguments[3] : void 0;
  if (tt$1.debug("XYZ createText", e, t, s, n, r, i, "addSvgBackground: ", o), r) {
    let c = /* @__PURE__ */ $e(e, p), h = /* @__PURE__ */ ft(/* @__PURE__ */ Xe$1(c)), u = /* @__PURE__ */ e.replace(/\\\\/g, "\\"), g = {
      isNode: i,
      label: Rl(e) ? u : h,
      labelStyle: /* @__PURE__ */ t.replace("fill:", "color:")
    };
    return await pt(a, g, l, n, o);
  } else {
    let c = /* @__PURE__ */ e.replace(/<br\s*\/?>/g, "<br/>"), h = /* @__PURE__ */ Te(/* @__PURE__ */ c.replace("<br>", "<br/>"), p), u = /* @__PURE__ */ ut(l, a, h, e ? o : false);
    if (i) {
      /stroke:/.exec(t) && (t = /* @__PURE__ */ t.replace("stroke:", "lineColor:"));
      let g = /* @__PURE__ */ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      rh(u).attr("style", g);
    } else {
      let g = /* @__PURE__ */ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      rh(u).select("rect").attr("style", /* @__PURE__ */ g.replace(/background:/g, "fill:"));
      let d = /* @__PURE__ */ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      rh(u).select("text").attr("style", d);
    }
    return u;
  }
}, "createText");
export {
  Zt as Z,
  ft as f,
  le as l,
  qt as q
};
