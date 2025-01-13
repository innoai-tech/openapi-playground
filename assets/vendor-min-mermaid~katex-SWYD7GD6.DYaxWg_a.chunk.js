var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, _b, __2, _c, __3, _d, __4, _e2, __5, _f, __6, _g, __7, _h, __8, _i, __9, _j, __10, _k, __11, _l, __12, _m, __13, _n, __14, _o, __15, _p, __16, _q, __17, _r2, __18, _s, __19, _t2, __20, _u, __21;
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var c0 = (_a = class {
  constructor(e, t, a) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = a;
  }
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new _a(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "SourceLocation")), _a), v0 = (_b = class {
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  range(e, t) {
    return new _b(t, c0.range(this, e));
  }
}, __2 = new WeakMap(), __privateAdd(_b, __2, m$1(_b, "Token")), _b), z = (_c = class {
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var a = "KaTeX parse error: " + e, n, s, o = t && t.loc;
    if (o && o.start <= o.end) {
      var h = o.lexer.input;
      n = o.start, s = o.end, n === h.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
      var c = /* @__PURE__ */ h.slice(n, s).replace(/[^]/g, "$&̲"), v;
      n > 15 ? v = "…" + h.slice(n - 15, n) : v = /* @__PURE__ */ h.slice(0, n);
      var b;
      s + 15 < h.length ? b = h.slice(s, s + 15) + "…" : b = /* @__PURE__ */ h.slice(s), a += v + c + b;
    }
    var x = new Error(a);
    return x.name = "ParseError", x.__proto__ = _c.prototype, x.position = n, n != null && s != null && (x.length = s - n), x.rawMessage = e, x;
  }
}, __3 = new WeakMap(), __privateAdd(_c, __3, m$1(_c, "ParseError")), _c);
z.prototype.__proto__ = Error.prototype;
var ba = /* @__PURE__ */ m$1(function(e, t) {
  return e.indexOf(t) !== -1;
}, "contains"), ya = /* @__PURE__ */ m$1(function(e, t) {
  return e === void 0 ? t : e;
}, "deflt"), xa = /([A-Z])/g, wa = /* @__PURE__ */ m$1(function(e) {
  return e.replace(xa, "-$1").toLowerCase();
}, "hyphenate"), ka = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Sa = /[&><"']/g;
function Ma(r5) {
  return String(r5).replace(Sa, (e) => ka[e]);
}
m$1(Ma, "escape");
var xr = /* @__PURE__ */ m$1(function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, "getBaseElem"), za = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ xr(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, "isCharacterBox"), Aa = /* @__PURE__ */ m$1(function(e) {
  if (!e) throw new Error("Expected non-null, but got " + String(e));
  return e;
}, "assert"), Ta = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, "protocolFromUrl"), R = {
  contains: ba,
  deflt: ya,
  escape: Ma,
  hyphenate: wa,
  getBaseElem: xr,
  isCharacterBox: za,
  protocolFromUrl: Ta
}, Ne = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: [
        "htmlAndMathml",
        "html",
        "mathml"
      ]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: true,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: /* @__PURE__ */ m$1((r5) => "#" + r5, "cliProcessor")
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: /* @__PURE__ */ m$1((r5, e) => (e.push(r5), e), "cliProcessor")
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: /* @__PURE__ */ m$1((r5) => Math.max(0, r5), "processor"),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [
      {
        enum: [
          "warn",
          "ignore",
          "error"
        ]
      },
      "boolean",
      "function"
    ],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: false
  },
  trust: {
    type: [
      "boolean",
      "function"
    ],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: /* @__PURE__ */ m$1((r5) => Math.max(0, r5), "processor"),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: /* @__PURE__ */ m$1((r5) => Math.max(0, r5), "processor"),
    cli: "-e, --max-expand <n>",
    cliProcessor: /* @__PURE__ */ m$1((r5) => r5 === "Infinity" ? 1 / 0 : parseInt(r5), "cliProcessor")
  },
  globalGroup: {
    type: "boolean",
    cli: false
  }
};
function Ba(r5) {
  if (r5.default) return r5.default;
  var e = r5.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string") return t.enum[0];
  switch (t) {
    case "boolean":
      return false;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
m$1(Ba, "getDefaultValue");
var me = (_d = class {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in Ne) if (Ne.hasOwnProperty(t)) {
      var a = Ne[t];
      this[t] = e[t] !== void 0 ? a.processor ? a.processor(e[t]) : e[t] : Ba(a);
    }
  }
  reportNonstrict(e, t, a) {
    var n = this.strict;
    if (typeof n == "function" && (n = /* @__PURE__ */ n(e, t, a)), !(!n || n === "ignore")) {
      if (n === true || n === "error") throw new z("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), a);
      n === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]"));
    }
  }
  useStrictBehavior(e, t, a) {
    var n = this.strict;
    if (typeof n == "function") try {
      n = /* @__PURE__ */ n(e, t, a);
    } catch {
      n = "error";
    }
    return !n || n === "ignore" ? false : n === true || n === "error" ? true : n === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]")), false);
  }
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = /* @__PURE__ */ R.protocolFromUrl(e.url);
      if (t == null) return false;
      e.protocol = t;
    }
    var a = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!a;
  }
}, __4 = new WeakMap(), __privateAdd(_d, __4, m$1(_d, "Settings")), _d), w0 = (_e2 = class {
  constructor(e, t, a) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = a;
  }
  sup() {
    return k0[Da[this.id]];
  }
  sub() {
    return k0[Ca[this.id]];
  }
  fracNum() {
    return k0[qa[this.id]];
  }
  fracDen() {
    return k0[Na[this.id]];
  }
  cramp() {
    return k0[Ra[this.id]];
  }
  text() {
    return k0[Ea[this.id]];
  }
  isTight() {
    return this.size >= 2;
  }
}, __5 = new WeakMap(), __privateAdd(_e2, __5, m$1(_e2, "Style")), _e2), kt = 0, Ee = 1, re = 2, q0 = 3, ce = 4, p0 = 5, ae = 6, i0 = 7, k0 = [
  new w0(kt, 0, false),
  new w0(Ee, 0, true),
  new w0(re, 1, false),
  new w0(q0, 1, true),
  new w0(ce, 2, false),
  new w0(p0, 2, true),
  new w0(ae, 3, false),
  new w0(i0, 3, true)
], Da = [
  ce,
  p0,
  ce,
  p0,
  ae,
  i0,
  ae,
  i0
], Ca = [
  p0,
  p0,
  p0,
  p0,
  i0,
  i0,
  i0,
  i0
], qa = [
  re,
  q0,
  ce,
  p0,
  ae,
  i0,
  ae,
  i0
], Na = [
  q0,
  q0,
  p0,
  p0,
  i0,
  i0,
  i0,
  i0
], Ra = [
  Ee,
  Ee,
  q0,
  q0,
  p0,
  p0,
  i0,
  i0
], Ea = [
  kt,
  Ee,
  re,
  q0,
  re,
  q0,
  re,
  q0
], I = {
  DISPLAY: k0[kt],
  TEXT: k0[re],
  SCRIPT: k0[ce],
  SCRIPTSCRIPT: k0[ae]
}, ht = [
  {
    name: "latin",
    blocks: [
      [
        256,
        591
      ],
      [
        768,
        879
      ]
    ]
  },
  {
    name: "cyrillic",
    blocks: [
      [
        1024,
        1279
      ]
    ]
  },
  {
    name: "armenian",
    blocks: [
      [
        1328,
        1423
      ]
    ]
  },
  {
    name: "brahmic",
    blocks: [
      [
        2304,
        4255
      ]
    ]
  },
  {
    name: "georgian",
    blocks: [
      [
        4256,
        4351
      ]
    ]
  },
  {
    name: "cjk",
    blocks: [
      [
        12288,
        12543
      ],
      [
        19968,
        40879
      ],
      [
        65280,
        65376
      ]
    ]
  },
  {
    name: "hangul",
    blocks: [
      [
        44032,
        55215
      ]
    ]
  }
];
function Ia(r5) {
  for (var e = 0; e < ht.length; e++) for (var t = ht[e], a = 0; a < t.blocks.length; a++) {
    var n = t.blocks[a];
    if (r5 >= n[0] && r5 <= n[1]) return t.name;
  }
  return null;
}
m$1(Ia, "scriptFromCodepoint");
var Re = [];
ht.forEach((r5) => r5.blocks.forEach((e) => Re.push(...e)));
function wr(r5) {
  for (var e = 0; e < Re.length; e += 2) if (r5 >= Re[e] && r5 <= Re[e + 1]) return true;
  return false;
}
m$1(wr, "supportedCodepoint");
var te = 80, Oa = /* @__PURE__ */ m$1(function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, "sqrtMain"), Ha = /* @__PURE__ */ m$1(function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, "sqrtSize1"), Fa = /* @__PURE__ */ m$1(function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, "sqrtSize2"), La = /* @__PURE__ */ m$1(function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, "sqrtSize3"), Pa = /* @__PURE__ */ m$1(function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, "sqrtSize4"), Ga = /* @__PURE__ */ m$1(function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, "phasePath"), Va = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = a - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, "sqrtTall"), Ua = /* @__PURE__ */ m$1(function(e, t, a) {
  t = 1e3 * t;
  var n = "";
  switch (e) {
    case "sqrtMain":
      n = /* @__PURE__ */ Oa(t, te);
      break;
    case "sqrtSize1":
      n = /* @__PURE__ */ Ha(t, te);
      break;
    case "sqrtSize2":
      n = /* @__PURE__ */ Fa(t, te);
      break;
    case "sqrtSize3":
      n = /* @__PURE__ */ La(t, te);
      break;
    case "sqrtSize4":
      n = /* @__PURE__ */ Pa(t, te);
      break;
    case "sqrtTall":
      n = /* @__PURE__ */ Va(t, te, a);
  }
  return n;
}, "sqrtPath"), Ya = /* @__PURE__ */ m$1(function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, "innerPath"), Ut = {
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, Xa = /* @__PURE__ */ m$1(function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
}, "tallDelim"), W0 = (_f = class {
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return R.contains(this.classes, e);
  }
  toNode() {
    for (var e = /* @__PURE__ */ document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(/* @__PURE__ */ this.children[t].toNode());
    return e;
  }
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++) e += /* @__PURE__ */ this.children[t].toMarkup();
    return e;
  }
  toText() {
    var e = /* @__PURE__ */ m$1((t) => t.toText(), "toText");
    return this.children.map(e).join("");
  }
}, __6 = new WeakMap(), __privateAdd(_f, __6, m$1(_f, "DocumentFragment")), _f), S0 = {
  "AMS-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    65: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    66: [
      0,
      0.68889,
      0,
      0,
      0.66667
    ],
    67: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    68: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    69: [
      0,
      0.68889,
      0,
      0,
      0.66667
    ],
    70: [
      0,
      0.68889,
      0,
      0,
      0.61111
    ],
    71: [
      0,
      0.68889,
      0,
      0,
      0.77778
    ],
    72: [
      0,
      0.68889,
      0,
      0,
      0.77778
    ],
    73: [
      0,
      0.68889,
      0,
      0,
      0.38889
    ],
    74: [
      0.16667,
      0.68889,
      0,
      0,
      0.5
    ],
    75: [
      0,
      0.68889,
      0,
      0,
      0.77778
    ],
    76: [
      0,
      0.68889,
      0,
      0,
      0.66667
    ],
    77: [
      0,
      0.68889,
      0,
      0,
      0.94445
    ],
    78: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    79: [
      0.16667,
      0.68889,
      0,
      0,
      0.77778
    ],
    80: [
      0,
      0.68889,
      0,
      0,
      0.61111
    ],
    81: [
      0.16667,
      0.68889,
      0,
      0,
      0.77778
    ],
    82: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    83: [
      0,
      0.68889,
      0,
      0,
      0.55556
    ],
    84: [
      0,
      0.68889,
      0,
      0,
      0.66667
    ],
    85: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    86: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    87: [
      0,
      0.68889,
      0,
      0,
      1
    ],
    88: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    89: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    90: [
      0,
      0.68889,
      0,
      0,
      0.66667
    ],
    107: [
      0,
      0.68889,
      0,
      0,
      0.55556
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    165: [
      0,
      0.675,
      0.025,
      0,
      0.75
    ],
    174: [
      0.15559,
      0.69224,
      0,
      0,
      0.94666
    ],
    240: [
      0,
      0.68889,
      0,
      0,
      0.55556
    ],
    295: [
      0,
      0.68889,
      0,
      0,
      0.54028
    ],
    710: [
      0,
      0.825,
      0,
      0,
      2.33334
    ],
    732: [
      0,
      0.9,
      0,
      0,
      2.33334
    ],
    770: [
      0,
      0.825,
      0,
      0,
      2.33334
    ],
    771: [
      0,
      0.9,
      0,
      0,
      2.33334
    ],
    989: [
      0.08167,
      0.58167,
      0,
      0,
      0.77778
    ],
    1008: [
      0,
      0.43056,
      0.04028,
      0,
      0.66667
    ],
    8245: [
      0,
      0.54986,
      0,
      0,
      0.275
    ],
    8463: [
      0,
      0.68889,
      0,
      0,
      0.54028
    ],
    8487: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    8498: [
      0,
      0.68889,
      0,
      0,
      0.55556
    ],
    8502: [
      0,
      0.68889,
      0,
      0,
      0.66667
    ],
    8503: [
      0,
      0.68889,
      0,
      0,
      0.44445
    ],
    8504: [
      0,
      0.68889,
      0,
      0,
      0.66667
    ],
    8513: [
      0,
      0.68889,
      0,
      0,
      0.63889
    ],
    8592: [
      -0.03598,
      0.46402,
      0,
      0,
      0.5
    ],
    8594: [
      -0.03598,
      0.46402,
      0,
      0,
      0.5
    ],
    8602: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8603: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8606: [
      0.01354,
      0.52239,
      0,
      0,
      1
    ],
    8608: [
      0.01354,
      0.52239,
      0,
      0,
      1
    ],
    8610: [
      0.01354,
      0.52239,
      0,
      0,
      1.11111
    ],
    8611: [
      0.01354,
      0.52239,
      0,
      0,
      1.11111
    ],
    8619: [
      0,
      0.54986,
      0,
      0,
      1
    ],
    8620: [
      0,
      0.54986,
      0,
      0,
      1
    ],
    8621: [
      -0.13313,
      0.37788,
      0,
      0,
      1.38889
    ],
    8622: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8624: [
      0,
      0.69224,
      0,
      0,
      0.5
    ],
    8625: [
      0,
      0.69224,
      0,
      0,
      0.5
    ],
    8630: [
      0,
      0.43056,
      0,
      0,
      1
    ],
    8631: [
      0,
      0.43056,
      0,
      0,
      1
    ],
    8634: [
      0.08198,
      0.58198,
      0,
      0,
      0.77778
    ],
    8635: [
      0.08198,
      0.58198,
      0,
      0,
      0.77778
    ],
    8638: [
      0.19444,
      0.69224,
      0,
      0,
      0.41667
    ],
    8639: [
      0.19444,
      0.69224,
      0,
      0,
      0.41667
    ],
    8642: [
      0.19444,
      0.69224,
      0,
      0,
      0.41667
    ],
    8643: [
      0.19444,
      0.69224,
      0,
      0,
      0.41667
    ],
    8644: [
      0.1808,
      0.675,
      0,
      0,
      1
    ],
    8646: [
      0.1808,
      0.675,
      0,
      0,
      1
    ],
    8647: [
      0.1808,
      0.675,
      0,
      0,
      1
    ],
    8648: [
      0.19444,
      0.69224,
      0,
      0,
      0.83334
    ],
    8649: [
      0.1808,
      0.675,
      0,
      0,
      1
    ],
    8650: [
      0.19444,
      0.69224,
      0,
      0,
      0.83334
    ],
    8651: [
      0.01354,
      0.52239,
      0,
      0,
      1
    ],
    8652: [
      0.01354,
      0.52239,
      0,
      0,
      1
    ],
    8653: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8654: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8655: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8666: [
      0.13667,
      0.63667,
      0,
      0,
      1
    ],
    8667: [
      0.13667,
      0.63667,
      0,
      0,
      1
    ],
    8669: [
      -0.13313,
      0.37788,
      0,
      0,
      1
    ],
    8672: [
      -0.064,
      0.437,
      0,
      0,
      1.334
    ],
    8674: [
      -0.064,
      0.437,
      0,
      0,
      1.334
    ],
    8705: [
      0,
      0.825,
      0,
      0,
      0.5
    ],
    8708: [
      0,
      0.68889,
      0,
      0,
      0.55556
    ],
    8709: [
      0.08167,
      0.58167,
      0,
      0,
      0.77778
    ],
    8717: [
      0,
      0.43056,
      0,
      0,
      0.42917
    ],
    8722: [
      -0.03598,
      0.46402,
      0,
      0,
      0.5
    ],
    8724: [
      0.08198,
      0.69224,
      0,
      0,
      0.77778
    ],
    8726: [
      0.08167,
      0.58167,
      0,
      0,
      0.77778
    ],
    8733: [
      0,
      0.69224,
      0,
      0,
      0.77778
    ],
    8736: [
      0,
      0.69224,
      0,
      0,
      0.72222
    ],
    8737: [
      0,
      0.69224,
      0,
      0,
      0.72222
    ],
    8738: [
      0.03517,
      0.52239,
      0,
      0,
      0.72222
    ],
    8739: [
      0.08167,
      0.58167,
      0,
      0,
      0.22222
    ],
    8740: [
      0.25142,
      0.74111,
      0,
      0,
      0.27778
    ],
    8741: [
      0.08167,
      0.58167,
      0,
      0,
      0.38889
    ],
    8742: [
      0.25142,
      0.74111,
      0,
      0,
      0.5
    ],
    8756: [
      0,
      0.69224,
      0,
      0,
      0.66667
    ],
    8757: [
      0,
      0.69224,
      0,
      0,
      0.66667
    ],
    8764: [
      -0.13313,
      0.36687,
      0,
      0,
      0.77778
    ],
    8765: [
      -0.13313,
      0.37788,
      0,
      0,
      0.77778
    ],
    8769: [
      -0.13313,
      0.36687,
      0,
      0,
      0.77778
    ],
    8770: [
      -0.03625,
      0.46375,
      0,
      0,
      0.77778
    ],
    8774: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8776: [
      -0.01688,
      0.48312,
      0,
      0,
      0.77778
    ],
    8778: [
      0.08167,
      0.58167,
      0,
      0,
      0.77778
    ],
    8782: [
      0.06062,
      0.54986,
      0,
      0,
      0.77778
    ],
    8783: [
      0.06062,
      0.54986,
      0,
      0,
      0.77778
    ],
    8785: [
      0.08198,
      0.58198,
      0,
      0,
      0.77778
    ],
    8786: [
      0.08198,
      0.58198,
      0,
      0,
      0.77778
    ],
    8787: [
      0.08198,
      0.58198,
      0,
      0,
      0.77778
    ],
    8790: [
      0,
      0.69224,
      0,
      0,
      0.77778
    ],
    8791: [
      0.22958,
      0.72958,
      0,
      0,
      0.77778
    ],
    8796: [
      0.08198,
      0.91667,
      0,
      0,
      0.77778
    ],
    8806: [
      0.25583,
      0.75583,
      0,
      0,
      0.77778
    ],
    8807: [
      0.25583,
      0.75583,
      0,
      0,
      0.77778
    ],
    8808: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    8809: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    8812: [
      0.25583,
      0.75583,
      0,
      0,
      0.5
    ],
    8814: [
      0.20576,
      0.70576,
      0,
      0,
      0.77778
    ],
    8815: [
      0.20576,
      0.70576,
      0,
      0,
      0.77778
    ],
    8816: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8817: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8818: [
      0.22958,
      0.72958,
      0,
      0,
      0.77778
    ],
    8819: [
      0.22958,
      0.72958,
      0,
      0,
      0.77778
    ],
    8822: [
      0.1808,
      0.675,
      0,
      0,
      0.77778
    ],
    8823: [
      0.1808,
      0.675,
      0,
      0,
      0.77778
    ],
    8828: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    8829: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    8830: [
      0.22958,
      0.72958,
      0,
      0,
      0.77778
    ],
    8831: [
      0.22958,
      0.72958,
      0,
      0,
      0.77778
    ],
    8832: [
      0.20576,
      0.70576,
      0,
      0,
      0.77778
    ],
    8833: [
      0.20576,
      0.70576,
      0,
      0,
      0.77778
    ],
    8840: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8841: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8842: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    8843: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    8847: [
      0.03517,
      0.54986,
      0,
      0,
      0.77778
    ],
    8848: [
      0.03517,
      0.54986,
      0,
      0,
      0.77778
    ],
    8858: [
      0.08198,
      0.58198,
      0,
      0,
      0.77778
    ],
    8859: [
      0.08198,
      0.58198,
      0,
      0,
      0.77778
    ],
    8861: [
      0.08198,
      0.58198,
      0,
      0,
      0.77778
    ],
    8862: [
      0,
      0.675,
      0,
      0,
      0.77778
    ],
    8863: [
      0,
      0.675,
      0,
      0,
      0.77778
    ],
    8864: [
      0,
      0.675,
      0,
      0,
      0.77778
    ],
    8865: [
      0,
      0.675,
      0,
      0,
      0.77778
    ],
    8872: [
      0,
      0.69224,
      0,
      0,
      0.61111
    ],
    8873: [
      0,
      0.69224,
      0,
      0,
      0.72222
    ],
    8874: [
      0,
      0.69224,
      0,
      0,
      0.88889
    ],
    8876: [
      0,
      0.68889,
      0,
      0,
      0.61111
    ],
    8877: [
      0,
      0.68889,
      0,
      0,
      0.61111
    ],
    8878: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    8879: [
      0,
      0.68889,
      0,
      0,
      0.72222
    ],
    8882: [
      0.03517,
      0.54986,
      0,
      0,
      0.77778
    ],
    8883: [
      0.03517,
      0.54986,
      0,
      0,
      0.77778
    ],
    8884: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    8885: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    8888: [
      0,
      0.54986,
      0,
      0,
      1.11111
    ],
    8890: [
      0.19444,
      0.43056,
      0,
      0,
      0.55556
    ],
    8891: [
      0.19444,
      0.69224,
      0,
      0,
      0.61111
    ],
    8892: [
      0.19444,
      0.69224,
      0,
      0,
      0.61111
    ],
    8901: [
      0,
      0.54986,
      0,
      0,
      0.27778
    ],
    8903: [
      0.08167,
      0.58167,
      0,
      0,
      0.77778
    ],
    8905: [
      0.08167,
      0.58167,
      0,
      0,
      0.77778
    ],
    8906: [
      0.08167,
      0.58167,
      0,
      0,
      0.77778
    ],
    8907: [
      0,
      0.69224,
      0,
      0,
      0.77778
    ],
    8908: [
      0,
      0.69224,
      0,
      0,
      0.77778
    ],
    8909: [
      -0.03598,
      0.46402,
      0,
      0,
      0.77778
    ],
    8910: [
      0,
      0.54986,
      0,
      0,
      0.76042
    ],
    8911: [
      0,
      0.54986,
      0,
      0,
      0.76042
    ],
    8912: [
      0.03517,
      0.54986,
      0,
      0,
      0.77778
    ],
    8913: [
      0.03517,
      0.54986,
      0,
      0,
      0.77778
    ],
    8914: [
      0,
      0.54986,
      0,
      0,
      0.66667
    ],
    8915: [
      0,
      0.54986,
      0,
      0,
      0.66667
    ],
    8916: [
      0,
      0.69224,
      0,
      0,
      0.66667
    ],
    8918: [
      0.0391,
      0.5391,
      0,
      0,
      0.77778
    ],
    8919: [
      0.0391,
      0.5391,
      0,
      0,
      0.77778
    ],
    8920: [
      0.03517,
      0.54986,
      0,
      0,
      1.33334
    ],
    8921: [
      0.03517,
      0.54986,
      0,
      0,
      1.33334
    ],
    8922: [
      0.38569,
      0.88569,
      0,
      0,
      0.77778
    ],
    8923: [
      0.38569,
      0.88569,
      0,
      0,
      0.77778
    ],
    8926: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    8927: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    8928: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8929: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8934: [
      0.23222,
      0.74111,
      0,
      0,
      0.77778
    ],
    8935: [
      0.23222,
      0.74111,
      0,
      0,
      0.77778
    ],
    8936: [
      0.23222,
      0.74111,
      0,
      0,
      0.77778
    ],
    8937: [
      0.23222,
      0.74111,
      0,
      0,
      0.77778
    ],
    8938: [
      0.20576,
      0.70576,
      0,
      0,
      0.77778
    ],
    8939: [
      0.20576,
      0.70576,
      0,
      0,
      0.77778
    ],
    8940: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8941: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    8994: [
      0.19444,
      0.69224,
      0,
      0,
      0.77778
    ],
    8995: [
      0.19444,
      0.69224,
      0,
      0,
      0.77778
    ],
    9416: [
      0.15559,
      0.69224,
      0,
      0,
      0.90222
    ],
    9484: [
      0,
      0.69224,
      0,
      0,
      0.5
    ],
    9488: [
      0,
      0.69224,
      0,
      0,
      0.5
    ],
    9492: [
      0,
      0.37788,
      0,
      0,
      0.5
    ],
    9496: [
      0,
      0.37788,
      0,
      0,
      0.5
    ],
    9585: [
      0.19444,
      0.68889,
      0,
      0,
      0.88889
    ],
    9586: [
      0.19444,
      0.74111,
      0,
      0,
      0.88889
    ],
    9632: [
      0,
      0.675,
      0,
      0,
      0.77778
    ],
    9633: [
      0,
      0.675,
      0,
      0,
      0.77778
    ],
    9650: [
      0,
      0.54986,
      0,
      0,
      0.72222
    ],
    9651: [
      0,
      0.54986,
      0,
      0,
      0.72222
    ],
    9654: [
      0.03517,
      0.54986,
      0,
      0,
      0.77778
    ],
    9660: [
      0,
      0.54986,
      0,
      0,
      0.72222
    ],
    9661: [
      0,
      0.54986,
      0,
      0,
      0.72222
    ],
    9664: [
      0.03517,
      0.54986,
      0,
      0,
      0.77778
    ],
    9674: [
      0.11111,
      0.69224,
      0,
      0,
      0.66667
    ],
    9733: [
      0.19444,
      0.69224,
      0,
      0,
      0.94445
    ],
    10003: [
      0,
      0.69224,
      0,
      0,
      0.83334
    ],
    10016: [
      0,
      0.69224,
      0,
      0,
      0.83334
    ],
    10731: [
      0.11111,
      0.69224,
      0,
      0,
      0.66667
    ],
    10846: [
      0.19444,
      0.75583,
      0,
      0,
      0.61111
    ],
    10877: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    10878: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    10885: [
      0.25583,
      0.75583,
      0,
      0,
      0.77778
    ],
    10886: [
      0.25583,
      0.75583,
      0,
      0,
      0.77778
    ],
    10887: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    10888: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    10889: [
      0.26167,
      0.75726,
      0,
      0,
      0.77778
    ],
    10890: [
      0.26167,
      0.75726,
      0,
      0,
      0.77778
    ],
    10891: [
      0.48256,
      0.98256,
      0,
      0,
      0.77778
    ],
    10892: [
      0.48256,
      0.98256,
      0,
      0,
      0.77778
    ],
    10901: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    10902: [
      0.13667,
      0.63667,
      0,
      0,
      0.77778
    ],
    10933: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    10934: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    10935: [
      0.26167,
      0.75726,
      0,
      0,
      0.77778
    ],
    10936: [
      0.26167,
      0.75726,
      0,
      0,
      0.77778
    ],
    10937: [
      0.26167,
      0.75726,
      0,
      0,
      0.77778
    ],
    10938: [
      0.26167,
      0.75726,
      0,
      0,
      0.77778
    ],
    10949: [
      0.25583,
      0.75583,
      0,
      0,
      0.77778
    ],
    10950: [
      0.25583,
      0.75583,
      0,
      0,
      0.77778
    ],
    10955: [
      0.28481,
      0.79383,
      0,
      0,
      0.77778
    ],
    10956: [
      0.28481,
      0.79383,
      0,
      0,
      0.77778
    ],
    57350: [
      0.08167,
      0.58167,
      0,
      0,
      0.22222
    ],
    57351: [
      0.08167,
      0.58167,
      0,
      0,
      0.38889
    ],
    57352: [
      0.08167,
      0.58167,
      0,
      0,
      0.77778
    ],
    57353: [
      0,
      0.43056,
      0.04028,
      0,
      0.66667
    ],
    57356: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    57357: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    57358: [
      0.41951,
      0.91951,
      0,
      0,
      0.77778
    ],
    57359: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    57360: [
      0.30274,
      0.79383,
      0,
      0,
      0.77778
    ],
    57361: [
      0.41951,
      0.91951,
      0,
      0,
      0.77778
    ],
    57366: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    57367: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    57368: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    57369: [
      0.25142,
      0.75726,
      0,
      0,
      0.77778
    ],
    57370: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    57371: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ]
  },
  "Caligraphic-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    65: [
      0,
      0.68333,
      0,
      0.19445,
      0.79847
    ],
    66: [
      0,
      0.68333,
      0.03041,
      0.13889,
      0.65681
    ],
    67: [
      0,
      0.68333,
      0.05834,
      0.13889,
      0.52653
    ],
    68: [
      0,
      0.68333,
      0.02778,
      0.08334,
      0.77139
    ],
    69: [
      0,
      0.68333,
      0.08944,
      0.11111,
      0.52778
    ],
    70: [
      0,
      0.68333,
      0.09931,
      0.11111,
      0.71875
    ],
    71: [
      0.09722,
      0.68333,
      0.0593,
      0.11111,
      0.59487
    ],
    72: [
      0,
      0.68333,
      965e-5,
      0.11111,
      0.84452
    ],
    73: [
      0,
      0.68333,
      0.07382,
      0,
      0.54452
    ],
    74: [
      0.09722,
      0.68333,
      0.18472,
      0.16667,
      0.67778
    ],
    75: [
      0,
      0.68333,
      0.01445,
      0.05556,
      0.76195
    ],
    76: [
      0,
      0.68333,
      0,
      0.13889,
      0.68972
    ],
    77: [
      0,
      0.68333,
      0,
      0.13889,
      1.2009
    ],
    78: [
      0,
      0.68333,
      0.14736,
      0.08334,
      0.82049
    ],
    79: [
      0,
      0.68333,
      0.02778,
      0.11111,
      0.79611
    ],
    80: [
      0,
      0.68333,
      0.08222,
      0.08334,
      0.69556
    ],
    81: [
      0.09722,
      0.68333,
      0,
      0.11111,
      0.81667
    ],
    82: [
      0,
      0.68333,
      0,
      0.08334,
      0.8475
    ],
    83: [
      0,
      0.68333,
      0.075,
      0.13889,
      0.60556
    ],
    84: [
      0,
      0.68333,
      0.25417,
      0,
      0.54464
    ],
    85: [
      0,
      0.68333,
      0.09931,
      0.08334,
      0.62583
    ],
    86: [
      0,
      0.68333,
      0.08222,
      0,
      0.61278
    ],
    87: [
      0,
      0.68333,
      0.08222,
      0.08334,
      0.98778
    ],
    88: [
      0,
      0.68333,
      0.14643,
      0.13889,
      0.7133
    ],
    89: [
      0.09722,
      0.68333,
      0.08222,
      0.08334,
      0.66834
    ],
    90: [
      0,
      0.68333,
      0.07944,
      0.13889,
      0.72473
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ]
  },
  "Fraktur-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    33: [
      0,
      0.69141,
      0,
      0,
      0.29574
    ],
    34: [
      0,
      0.69141,
      0,
      0,
      0.21471
    ],
    38: [
      0,
      0.69141,
      0,
      0,
      0.73786
    ],
    39: [
      0,
      0.69141,
      0,
      0,
      0.21201
    ],
    40: [
      0.24982,
      0.74947,
      0,
      0,
      0.38865
    ],
    41: [
      0.24982,
      0.74947,
      0,
      0,
      0.38865
    ],
    42: [
      0,
      0.62119,
      0,
      0,
      0.27764
    ],
    43: [
      0.08319,
      0.58283,
      0,
      0,
      0.75623
    ],
    44: [
      0,
      0.10803,
      0,
      0,
      0.27764
    ],
    45: [
      0.08319,
      0.58283,
      0,
      0,
      0.75623
    ],
    46: [
      0,
      0.10803,
      0,
      0,
      0.27764
    ],
    47: [
      0.24982,
      0.74947,
      0,
      0,
      0.50181
    ],
    48: [
      0,
      0.47534,
      0,
      0,
      0.50181
    ],
    49: [
      0,
      0.47534,
      0,
      0,
      0.50181
    ],
    50: [
      0,
      0.47534,
      0,
      0,
      0.50181
    ],
    51: [
      0.18906,
      0.47534,
      0,
      0,
      0.50181
    ],
    52: [
      0.18906,
      0.47534,
      0,
      0,
      0.50181
    ],
    53: [
      0.18906,
      0.47534,
      0,
      0,
      0.50181
    ],
    54: [
      0,
      0.69141,
      0,
      0,
      0.50181
    ],
    55: [
      0.18906,
      0.47534,
      0,
      0,
      0.50181
    ],
    56: [
      0,
      0.69141,
      0,
      0,
      0.50181
    ],
    57: [
      0.18906,
      0.47534,
      0,
      0,
      0.50181
    ],
    58: [
      0,
      0.47534,
      0,
      0,
      0.21606
    ],
    59: [
      0.12604,
      0.47534,
      0,
      0,
      0.21606
    ],
    61: [
      -0.13099,
      0.36866,
      0,
      0,
      0.75623
    ],
    63: [
      0,
      0.69141,
      0,
      0,
      0.36245
    ],
    65: [
      0,
      0.69141,
      0,
      0,
      0.7176
    ],
    66: [
      0,
      0.69141,
      0,
      0,
      0.88397
    ],
    67: [
      0,
      0.69141,
      0,
      0,
      0.61254
    ],
    68: [
      0,
      0.69141,
      0,
      0,
      0.83158
    ],
    69: [
      0,
      0.69141,
      0,
      0,
      0.66278
    ],
    70: [
      0.12604,
      0.69141,
      0,
      0,
      0.61119
    ],
    71: [
      0,
      0.69141,
      0,
      0,
      0.78539
    ],
    72: [
      0.06302,
      0.69141,
      0,
      0,
      0.7203
    ],
    73: [
      0,
      0.69141,
      0,
      0,
      0.55448
    ],
    74: [
      0.12604,
      0.69141,
      0,
      0,
      0.55231
    ],
    75: [
      0,
      0.69141,
      0,
      0,
      0.66845
    ],
    76: [
      0,
      0.69141,
      0,
      0,
      0.66602
    ],
    77: [
      0,
      0.69141,
      0,
      0,
      1.04953
    ],
    78: [
      0,
      0.69141,
      0,
      0,
      0.83212
    ],
    79: [
      0,
      0.69141,
      0,
      0,
      0.82699
    ],
    80: [
      0.18906,
      0.69141,
      0,
      0,
      0.82753
    ],
    81: [
      0.03781,
      0.69141,
      0,
      0,
      0.82699
    ],
    82: [
      0,
      0.69141,
      0,
      0,
      0.82807
    ],
    83: [
      0,
      0.69141,
      0,
      0,
      0.82861
    ],
    84: [
      0,
      0.69141,
      0,
      0,
      0.66899
    ],
    85: [
      0,
      0.69141,
      0,
      0,
      0.64576
    ],
    86: [
      0,
      0.69141,
      0,
      0,
      0.83131
    ],
    87: [
      0,
      0.69141,
      0,
      0,
      1.04602
    ],
    88: [
      0,
      0.69141,
      0,
      0,
      0.71922
    ],
    89: [
      0.18906,
      0.69141,
      0,
      0,
      0.83293
    ],
    90: [
      0.12604,
      0.69141,
      0,
      0,
      0.60201
    ],
    91: [
      0.24982,
      0.74947,
      0,
      0,
      0.27764
    ],
    93: [
      0.24982,
      0.74947,
      0,
      0,
      0.27764
    ],
    94: [
      0,
      0.69141,
      0,
      0,
      0.49965
    ],
    97: [
      0,
      0.47534,
      0,
      0,
      0.50046
    ],
    98: [
      0,
      0.69141,
      0,
      0,
      0.51315
    ],
    99: [
      0,
      0.47534,
      0,
      0,
      0.38946
    ],
    100: [
      0,
      0.62119,
      0,
      0,
      0.49857
    ],
    101: [
      0,
      0.47534,
      0,
      0,
      0.40053
    ],
    102: [
      0.18906,
      0.69141,
      0,
      0,
      0.32626
    ],
    103: [
      0.18906,
      0.47534,
      0,
      0,
      0.5037
    ],
    104: [
      0.18906,
      0.69141,
      0,
      0,
      0.52126
    ],
    105: [
      0,
      0.69141,
      0,
      0,
      0.27899
    ],
    106: [
      0,
      0.69141,
      0,
      0,
      0.28088
    ],
    107: [
      0,
      0.69141,
      0,
      0,
      0.38946
    ],
    108: [
      0,
      0.69141,
      0,
      0,
      0.27953
    ],
    109: [
      0,
      0.47534,
      0,
      0,
      0.76676
    ],
    110: [
      0,
      0.47534,
      0,
      0,
      0.52666
    ],
    111: [
      0,
      0.47534,
      0,
      0,
      0.48885
    ],
    112: [
      0.18906,
      0.52396,
      0,
      0,
      0.50046
    ],
    113: [
      0.18906,
      0.47534,
      0,
      0,
      0.48912
    ],
    114: [
      0,
      0.47534,
      0,
      0,
      0.38919
    ],
    115: [
      0,
      0.47534,
      0,
      0,
      0.44266
    ],
    116: [
      0,
      0.62119,
      0,
      0,
      0.33301
    ],
    117: [
      0,
      0.47534,
      0,
      0,
      0.5172
    ],
    118: [
      0,
      0.52396,
      0,
      0,
      0.5118
    ],
    119: [
      0,
      0.52396,
      0,
      0,
      0.77351
    ],
    120: [
      0.18906,
      0.47534,
      0,
      0,
      0.38865
    ],
    121: [
      0.18906,
      0.47534,
      0,
      0,
      0.49884
    ],
    122: [
      0.18906,
      0.47534,
      0,
      0,
      0.39054
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    8216: [
      0,
      0.69141,
      0,
      0,
      0.21471
    ],
    8217: [
      0,
      0.69141,
      0,
      0,
      0.21471
    ],
    58112: [
      0,
      0.62119,
      0,
      0,
      0.49749
    ],
    58113: [
      0,
      0.62119,
      0,
      0,
      0.4983
    ],
    58114: [
      0.18906,
      0.69141,
      0,
      0,
      0.33328
    ],
    58115: [
      0.18906,
      0.69141,
      0,
      0,
      0.32923
    ],
    58116: [
      0.18906,
      0.47534,
      0,
      0,
      0.50343
    ],
    58117: [
      0,
      0.69141,
      0,
      0,
      0.33301
    ],
    58118: [
      0,
      0.62119,
      0,
      0,
      0.33409
    ],
    58119: [
      0,
      0.47534,
      0,
      0,
      0.50073
    ]
  },
  "Main-Bold": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    33: [
      0,
      0.69444,
      0,
      0,
      0.35
    ],
    34: [
      0,
      0.69444,
      0,
      0,
      0.60278
    ],
    35: [
      0.19444,
      0.69444,
      0,
      0,
      0.95833
    ],
    36: [
      0.05556,
      0.75,
      0,
      0,
      0.575
    ],
    37: [
      0.05556,
      0.75,
      0,
      0,
      0.95833
    ],
    38: [
      0,
      0.69444,
      0,
      0,
      0.89444
    ],
    39: [
      0,
      0.69444,
      0,
      0,
      0.31944
    ],
    40: [
      0.25,
      0.75,
      0,
      0,
      0.44722
    ],
    41: [
      0.25,
      0.75,
      0,
      0,
      0.44722
    ],
    42: [
      0,
      0.75,
      0,
      0,
      0.575
    ],
    43: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    44: [
      0.19444,
      0.15556,
      0,
      0,
      0.31944
    ],
    45: [
      0,
      0.44444,
      0,
      0,
      0.38333
    ],
    46: [
      0,
      0.15556,
      0,
      0,
      0.31944
    ],
    47: [
      0.25,
      0.75,
      0,
      0,
      0.575
    ],
    48: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    49: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    50: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    51: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    52: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    53: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    54: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    55: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    56: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    57: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    58: [
      0,
      0.44444,
      0,
      0,
      0.31944
    ],
    59: [
      0.19444,
      0.44444,
      0,
      0,
      0.31944
    ],
    60: [
      0.08556,
      0.58556,
      0,
      0,
      0.89444
    ],
    61: [
      -0.10889,
      0.39111,
      0,
      0,
      0.89444
    ],
    62: [
      0.08556,
      0.58556,
      0,
      0,
      0.89444
    ],
    63: [
      0,
      0.69444,
      0,
      0,
      0.54305
    ],
    64: [
      0,
      0.69444,
      0,
      0,
      0.89444
    ],
    65: [
      0,
      0.68611,
      0,
      0,
      0.86944
    ],
    66: [
      0,
      0.68611,
      0,
      0,
      0.81805
    ],
    67: [
      0,
      0.68611,
      0,
      0,
      0.83055
    ],
    68: [
      0,
      0.68611,
      0,
      0,
      0.88194
    ],
    69: [
      0,
      0.68611,
      0,
      0,
      0.75555
    ],
    70: [
      0,
      0.68611,
      0,
      0,
      0.72361
    ],
    71: [
      0,
      0.68611,
      0,
      0,
      0.90416
    ],
    72: [
      0,
      0.68611,
      0,
      0,
      0.9
    ],
    73: [
      0,
      0.68611,
      0,
      0,
      0.43611
    ],
    74: [
      0,
      0.68611,
      0,
      0,
      0.59444
    ],
    75: [
      0,
      0.68611,
      0,
      0,
      0.90138
    ],
    76: [
      0,
      0.68611,
      0,
      0,
      0.69166
    ],
    77: [
      0,
      0.68611,
      0,
      0,
      1.09166
    ],
    78: [
      0,
      0.68611,
      0,
      0,
      0.9
    ],
    79: [
      0,
      0.68611,
      0,
      0,
      0.86388
    ],
    80: [
      0,
      0.68611,
      0,
      0,
      0.78611
    ],
    81: [
      0.19444,
      0.68611,
      0,
      0,
      0.86388
    ],
    82: [
      0,
      0.68611,
      0,
      0,
      0.8625
    ],
    83: [
      0,
      0.68611,
      0,
      0,
      0.63889
    ],
    84: [
      0,
      0.68611,
      0,
      0,
      0.8
    ],
    85: [
      0,
      0.68611,
      0,
      0,
      0.88472
    ],
    86: [
      0,
      0.68611,
      0.01597,
      0,
      0.86944
    ],
    87: [
      0,
      0.68611,
      0.01597,
      0,
      1.18888
    ],
    88: [
      0,
      0.68611,
      0,
      0,
      0.86944
    ],
    89: [
      0,
      0.68611,
      0.02875,
      0,
      0.86944
    ],
    90: [
      0,
      0.68611,
      0,
      0,
      0.70277
    ],
    91: [
      0.25,
      0.75,
      0,
      0,
      0.31944
    ],
    92: [
      0.25,
      0.75,
      0,
      0,
      0.575
    ],
    93: [
      0.25,
      0.75,
      0,
      0,
      0.31944
    ],
    94: [
      0,
      0.69444,
      0,
      0,
      0.575
    ],
    95: [
      0.31,
      0.13444,
      0.03194,
      0,
      0.575
    ],
    97: [
      0,
      0.44444,
      0,
      0,
      0.55902
    ],
    98: [
      0,
      0.69444,
      0,
      0,
      0.63889
    ],
    99: [
      0,
      0.44444,
      0,
      0,
      0.51111
    ],
    100: [
      0,
      0.69444,
      0,
      0,
      0.63889
    ],
    101: [
      0,
      0.44444,
      0,
      0,
      0.52708
    ],
    102: [
      0,
      0.69444,
      0.10903,
      0,
      0.35139
    ],
    103: [
      0.19444,
      0.44444,
      0.01597,
      0,
      0.575
    ],
    104: [
      0,
      0.69444,
      0,
      0,
      0.63889
    ],
    105: [
      0,
      0.69444,
      0,
      0,
      0.31944
    ],
    106: [
      0.19444,
      0.69444,
      0,
      0,
      0.35139
    ],
    107: [
      0,
      0.69444,
      0,
      0,
      0.60694
    ],
    108: [
      0,
      0.69444,
      0,
      0,
      0.31944
    ],
    109: [
      0,
      0.44444,
      0,
      0,
      0.95833
    ],
    110: [
      0,
      0.44444,
      0,
      0,
      0.63889
    ],
    111: [
      0,
      0.44444,
      0,
      0,
      0.575
    ],
    112: [
      0.19444,
      0.44444,
      0,
      0,
      0.63889
    ],
    113: [
      0.19444,
      0.44444,
      0,
      0,
      0.60694
    ],
    114: [
      0,
      0.44444,
      0,
      0,
      0.47361
    ],
    115: [
      0,
      0.44444,
      0,
      0,
      0.45361
    ],
    116: [
      0,
      0.63492,
      0,
      0,
      0.44722
    ],
    117: [
      0,
      0.44444,
      0,
      0,
      0.63889
    ],
    118: [
      0,
      0.44444,
      0.01597,
      0,
      0.60694
    ],
    119: [
      0,
      0.44444,
      0.01597,
      0,
      0.83055
    ],
    120: [
      0,
      0.44444,
      0,
      0,
      0.60694
    ],
    121: [
      0.19444,
      0.44444,
      0.01597,
      0,
      0.60694
    ],
    122: [
      0,
      0.44444,
      0,
      0,
      0.51111
    ],
    123: [
      0.25,
      0.75,
      0,
      0,
      0.575
    ],
    124: [
      0.25,
      0.75,
      0,
      0,
      0.31944
    ],
    125: [
      0.25,
      0.75,
      0,
      0,
      0.575
    ],
    126: [
      0.35,
      0.34444,
      0,
      0,
      0.575
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    163: [
      0,
      0.69444,
      0,
      0,
      0.86853
    ],
    168: [
      0,
      0.69444,
      0,
      0,
      0.575
    ],
    172: [
      0,
      0.44444,
      0,
      0,
      0.76666
    ],
    176: [
      0,
      0.69444,
      0,
      0,
      0.86944
    ],
    177: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    184: [
      0.17014,
      0,
      0,
      0,
      0.51111
    ],
    198: [
      0,
      0.68611,
      0,
      0,
      1.04166
    ],
    215: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    216: [
      0.04861,
      0.73472,
      0,
      0,
      0.89444
    ],
    223: [
      0,
      0.69444,
      0,
      0,
      0.59722
    ],
    230: [
      0,
      0.44444,
      0,
      0,
      0.83055
    ],
    247: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    248: [
      0.09722,
      0.54167,
      0,
      0,
      0.575
    ],
    305: [
      0,
      0.44444,
      0,
      0,
      0.31944
    ],
    338: [
      0,
      0.68611,
      0,
      0,
      1.16944
    ],
    339: [
      0,
      0.44444,
      0,
      0,
      0.89444
    ],
    567: [
      0.19444,
      0.44444,
      0,
      0,
      0.35139
    ],
    710: [
      0,
      0.69444,
      0,
      0,
      0.575
    ],
    711: [
      0,
      0.63194,
      0,
      0,
      0.575
    ],
    713: [
      0,
      0.59611,
      0,
      0,
      0.575
    ],
    714: [
      0,
      0.69444,
      0,
      0,
      0.575
    ],
    715: [
      0,
      0.69444,
      0,
      0,
      0.575
    ],
    728: [
      0,
      0.69444,
      0,
      0,
      0.575
    ],
    729: [
      0,
      0.69444,
      0,
      0,
      0.31944
    ],
    730: [
      0,
      0.69444,
      0,
      0,
      0.86944
    ],
    732: [
      0,
      0.69444,
      0,
      0,
      0.575
    ],
    733: [
      0,
      0.69444,
      0,
      0,
      0.575
    ],
    915: [
      0,
      0.68611,
      0,
      0,
      0.69166
    ],
    916: [
      0,
      0.68611,
      0,
      0,
      0.95833
    ],
    920: [
      0,
      0.68611,
      0,
      0,
      0.89444
    ],
    923: [
      0,
      0.68611,
      0,
      0,
      0.80555
    ],
    926: [
      0,
      0.68611,
      0,
      0,
      0.76666
    ],
    928: [
      0,
      0.68611,
      0,
      0,
      0.9
    ],
    931: [
      0,
      0.68611,
      0,
      0,
      0.83055
    ],
    933: [
      0,
      0.68611,
      0,
      0,
      0.89444
    ],
    934: [
      0,
      0.68611,
      0,
      0,
      0.83055
    ],
    936: [
      0,
      0.68611,
      0,
      0,
      0.89444
    ],
    937: [
      0,
      0.68611,
      0,
      0,
      0.83055
    ],
    8211: [
      0,
      0.44444,
      0.03194,
      0,
      0.575
    ],
    8212: [
      0,
      0.44444,
      0.03194,
      0,
      1.14999
    ],
    8216: [
      0,
      0.69444,
      0,
      0,
      0.31944
    ],
    8217: [
      0,
      0.69444,
      0,
      0,
      0.31944
    ],
    8220: [
      0,
      0.69444,
      0,
      0,
      0.60278
    ],
    8221: [
      0,
      0.69444,
      0,
      0,
      0.60278
    ],
    8224: [
      0.19444,
      0.69444,
      0,
      0,
      0.51111
    ],
    8225: [
      0.19444,
      0.69444,
      0,
      0,
      0.51111
    ],
    8242: [
      0,
      0.55556,
      0,
      0,
      0.34444
    ],
    8407: [
      0,
      0.72444,
      0.15486,
      0,
      0.575
    ],
    8463: [
      0,
      0.69444,
      0,
      0,
      0.66759
    ],
    8465: [
      0,
      0.69444,
      0,
      0,
      0.83055
    ],
    8467: [
      0,
      0.69444,
      0,
      0,
      0.47361
    ],
    8472: [
      0.19444,
      0.44444,
      0,
      0,
      0.74027
    ],
    8476: [
      0,
      0.69444,
      0,
      0,
      0.83055
    ],
    8501: [
      0,
      0.69444,
      0,
      0,
      0.70277
    ],
    8592: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8593: [
      0.19444,
      0.69444,
      0,
      0,
      0.575
    ],
    8594: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8595: [
      0.19444,
      0.69444,
      0,
      0,
      0.575
    ],
    8596: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8597: [
      0.25,
      0.75,
      0,
      0,
      0.575
    ],
    8598: [
      0.19444,
      0.69444,
      0,
      0,
      1.14999
    ],
    8599: [
      0.19444,
      0.69444,
      0,
      0,
      1.14999
    ],
    8600: [
      0.19444,
      0.69444,
      0,
      0,
      1.14999
    ],
    8601: [
      0.19444,
      0.69444,
      0,
      0,
      1.14999
    ],
    8636: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8637: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8640: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8641: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8656: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8657: [
      0.19444,
      0.69444,
      0,
      0,
      0.70277
    ],
    8658: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8659: [
      0.19444,
      0.69444,
      0,
      0,
      0.70277
    ],
    8660: [
      -0.10889,
      0.39111,
      0,
      0,
      1.14999
    ],
    8661: [
      0.25,
      0.75,
      0,
      0,
      0.70277
    ],
    8704: [
      0,
      0.69444,
      0,
      0,
      0.63889
    ],
    8706: [
      0,
      0.69444,
      0.06389,
      0,
      0.62847
    ],
    8707: [
      0,
      0.69444,
      0,
      0,
      0.63889
    ],
    8709: [
      0.05556,
      0.75,
      0,
      0,
      0.575
    ],
    8711: [
      0,
      0.68611,
      0,
      0,
      0.95833
    ],
    8712: [
      0.08556,
      0.58556,
      0,
      0,
      0.76666
    ],
    8715: [
      0.08556,
      0.58556,
      0,
      0,
      0.76666
    ],
    8722: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    8723: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    8725: [
      0.25,
      0.75,
      0,
      0,
      0.575
    ],
    8726: [
      0.25,
      0.75,
      0,
      0,
      0.575
    ],
    8727: [
      -0.02778,
      0.47222,
      0,
      0,
      0.575
    ],
    8728: [
      -0.02639,
      0.47361,
      0,
      0,
      0.575
    ],
    8729: [
      -0.02639,
      0.47361,
      0,
      0,
      0.575
    ],
    8730: [
      0.18,
      0.82,
      0,
      0,
      0.95833
    ],
    8733: [
      0,
      0.44444,
      0,
      0,
      0.89444
    ],
    8734: [
      0,
      0.44444,
      0,
      0,
      1.14999
    ],
    8736: [
      0,
      0.69224,
      0,
      0,
      0.72222
    ],
    8739: [
      0.25,
      0.75,
      0,
      0,
      0.31944
    ],
    8741: [
      0.25,
      0.75,
      0,
      0,
      0.575
    ],
    8743: [
      0,
      0.55556,
      0,
      0,
      0.76666
    ],
    8744: [
      0,
      0.55556,
      0,
      0,
      0.76666
    ],
    8745: [
      0,
      0.55556,
      0,
      0,
      0.76666
    ],
    8746: [
      0,
      0.55556,
      0,
      0,
      0.76666
    ],
    8747: [
      0.19444,
      0.69444,
      0.12778,
      0,
      0.56875
    ],
    8764: [
      -0.10889,
      0.39111,
      0,
      0,
      0.89444
    ],
    8768: [
      0.19444,
      0.69444,
      0,
      0,
      0.31944
    ],
    8771: [
      222e-5,
      0.50222,
      0,
      0,
      0.89444
    ],
    8773: [
      0.027,
      0.638,
      0,
      0,
      0.894
    ],
    8776: [
      0.02444,
      0.52444,
      0,
      0,
      0.89444
    ],
    8781: [
      222e-5,
      0.50222,
      0,
      0,
      0.89444
    ],
    8801: [
      222e-5,
      0.50222,
      0,
      0,
      0.89444
    ],
    8804: [
      0.19667,
      0.69667,
      0,
      0,
      0.89444
    ],
    8805: [
      0.19667,
      0.69667,
      0,
      0,
      0.89444
    ],
    8810: [
      0.08556,
      0.58556,
      0,
      0,
      1.14999
    ],
    8811: [
      0.08556,
      0.58556,
      0,
      0,
      1.14999
    ],
    8826: [
      0.08556,
      0.58556,
      0,
      0,
      0.89444
    ],
    8827: [
      0.08556,
      0.58556,
      0,
      0,
      0.89444
    ],
    8834: [
      0.08556,
      0.58556,
      0,
      0,
      0.89444
    ],
    8835: [
      0.08556,
      0.58556,
      0,
      0,
      0.89444
    ],
    8838: [
      0.19667,
      0.69667,
      0,
      0,
      0.89444
    ],
    8839: [
      0.19667,
      0.69667,
      0,
      0,
      0.89444
    ],
    8846: [
      0,
      0.55556,
      0,
      0,
      0.76666
    ],
    8849: [
      0.19667,
      0.69667,
      0,
      0,
      0.89444
    ],
    8850: [
      0.19667,
      0.69667,
      0,
      0,
      0.89444
    ],
    8851: [
      0,
      0.55556,
      0,
      0,
      0.76666
    ],
    8852: [
      0,
      0.55556,
      0,
      0,
      0.76666
    ],
    8853: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    8854: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    8855: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    8856: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    8857: [
      0.13333,
      0.63333,
      0,
      0,
      0.89444
    ],
    8866: [
      0,
      0.69444,
      0,
      0,
      0.70277
    ],
    8867: [
      0,
      0.69444,
      0,
      0,
      0.70277
    ],
    8868: [
      0,
      0.69444,
      0,
      0,
      0.89444
    ],
    8869: [
      0,
      0.69444,
      0,
      0,
      0.89444
    ],
    8900: [
      -0.02639,
      0.47361,
      0,
      0,
      0.575
    ],
    8901: [
      -0.02639,
      0.47361,
      0,
      0,
      0.31944
    ],
    8902: [
      -0.02778,
      0.47222,
      0,
      0,
      0.575
    ],
    8968: [
      0.25,
      0.75,
      0,
      0,
      0.51111
    ],
    8969: [
      0.25,
      0.75,
      0,
      0,
      0.51111
    ],
    8970: [
      0.25,
      0.75,
      0,
      0,
      0.51111
    ],
    8971: [
      0.25,
      0.75,
      0,
      0,
      0.51111
    ],
    8994: [
      -0.13889,
      0.36111,
      0,
      0,
      1.14999
    ],
    8995: [
      -0.13889,
      0.36111,
      0,
      0,
      1.14999
    ],
    9651: [
      0.19444,
      0.69444,
      0,
      0,
      1.02222
    ],
    9657: [
      -0.02778,
      0.47222,
      0,
      0,
      0.575
    ],
    9661: [
      0.19444,
      0.69444,
      0,
      0,
      1.02222
    ],
    9667: [
      -0.02778,
      0.47222,
      0,
      0,
      0.575
    ],
    9711: [
      0.19444,
      0.69444,
      0,
      0,
      1.14999
    ],
    9824: [
      0.12963,
      0.69444,
      0,
      0,
      0.89444
    ],
    9825: [
      0.12963,
      0.69444,
      0,
      0,
      0.89444
    ],
    9826: [
      0.12963,
      0.69444,
      0,
      0,
      0.89444
    ],
    9827: [
      0.12963,
      0.69444,
      0,
      0,
      0.89444
    ],
    9837: [
      0,
      0.75,
      0,
      0,
      0.44722
    ],
    9838: [
      0.19444,
      0.69444,
      0,
      0,
      0.44722
    ],
    9839: [
      0.19444,
      0.69444,
      0,
      0,
      0.44722
    ],
    10216: [
      0.25,
      0.75,
      0,
      0,
      0.44722
    ],
    10217: [
      0.25,
      0.75,
      0,
      0,
      0.44722
    ],
    10815: [
      0,
      0.68611,
      0,
      0,
      0.9
    ],
    10927: [
      0.19667,
      0.69667,
      0,
      0,
      0.89444
    ],
    10928: [
      0.19667,
      0.69667,
      0,
      0,
      0.89444
    ],
    57376: [
      0.19444,
      0.69444,
      0,
      0,
      0
    ]
  },
  "Main-BoldItalic": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    33: [
      0,
      0.69444,
      0.11417,
      0,
      0.38611
    ],
    34: [
      0,
      0.69444,
      0.07939,
      0,
      0.62055
    ],
    35: [
      0.19444,
      0.69444,
      0.06833,
      0,
      0.94444
    ],
    37: [
      0.05556,
      0.75,
      0.12861,
      0,
      0.94444
    ],
    38: [
      0,
      0.69444,
      0.08528,
      0,
      0.88555
    ],
    39: [
      0,
      0.69444,
      0.12945,
      0,
      0.35555
    ],
    40: [
      0.25,
      0.75,
      0.15806,
      0,
      0.47333
    ],
    41: [
      0.25,
      0.75,
      0.03306,
      0,
      0.47333
    ],
    42: [
      0,
      0.75,
      0.14333,
      0,
      0.59111
    ],
    43: [
      0.10333,
      0.60333,
      0.03306,
      0,
      0.88555
    ],
    44: [
      0.19444,
      0.14722,
      0,
      0,
      0.35555
    ],
    45: [
      0,
      0.44444,
      0.02611,
      0,
      0.41444
    ],
    46: [
      0,
      0.14722,
      0,
      0,
      0.35555
    ],
    47: [
      0.25,
      0.75,
      0.15806,
      0,
      0.59111
    ],
    48: [
      0,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    49: [
      0,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    50: [
      0,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    51: [
      0,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    52: [
      0.19444,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    53: [
      0,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    54: [
      0,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    55: [
      0.19444,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    56: [
      0,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    57: [
      0,
      0.64444,
      0.13167,
      0,
      0.59111
    ],
    58: [
      0,
      0.44444,
      0.06695,
      0,
      0.35555
    ],
    59: [
      0.19444,
      0.44444,
      0.06695,
      0,
      0.35555
    ],
    61: [
      -0.10889,
      0.39111,
      0.06833,
      0,
      0.88555
    ],
    63: [
      0,
      0.69444,
      0.11472,
      0,
      0.59111
    ],
    64: [
      0,
      0.69444,
      0.09208,
      0,
      0.88555
    ],
    65: [
      0,
      0.68611,
      0,
      0,
      0.86555
    ],
    66: [
      0,
      0.68611,
      0.0992,
      0,
      0.81666
    ],
    67: [
      0,
      0.68611,
      0.14208,
      0,
      0.82666
    ],
    68: [
      0,
      0.68611,
      0.09062,
      0,
      0.87555
    ],
    69: [
      0,
      0.68611,
      0.11431,
      0,
      0.75666
    ],
    70: [
      0,
      0.68611,
      0.12903,
      0,
      0.72722
    ],
    71: [
      0,
      0.68611,
      0.07347,
      0,
      0.89527
    ],
    72: [
      0,
      0.68611,
      0.17208,
      0,
      0.8961
    ],
    73: [
      0,
      0.68611,
      0.15681,
      0,
      0.47166
    ],
    74: [
      0,
      0.68611,
      0.145,
      0,
      0.61055
    ],
    75: [
      0,
      0.68611,
      0.14208,
      0,
      0.89499
    ],
    76: [
      0,
      0.68611,
      0,
      0,
      0.69777
    ],
    77: [
      0,
      0.68611,
      0.17208,
      0,
      1.07277
    ],
    78: [
      0,
      0.68611,
      0.17208,
      0,
      0.8961
    ],
    79: [
      0,
      0.68611,
      0.09062,
      0,
      0.85499
    ],
    80: [
      0,
      0.68611,
      0.0992,
      0,
      0.78721
    ],
    81: [
      0.19444,
      0.68611,
      0.09062,
      0,
      0.85499
    ],
    82: [
      0,
      0.68611,
      0.02559,
      0,
      0.85944
    ],
    83: [
      0,
      0.68611,
      0.11264,
      0,
      0.64999
    ],
    84: [
      0,
      0.68611,
      0.12903,
      0,
      0.7961
    ],
    85: [
      0,
      0.68611,
      0.17208,
      0,
      0.88083
    ],
    86: [
      0,
      0.68611,
      0.18625,
      0,
      0.86555
    ],
    87: [
      0,
      0.68611,
      0.18625,
      0,
      1.15999
    ],
    88: [
      0,
      0.68611,
      0.15681,
      0,
      0.86555
    ],
    89: [
      0,
      0.68611,
      0.19803,
      0,
      0.86555
    ],
    90: [
      0,
      0.68611,
      0.14208,
      0,
      0.70888
    ],
    91: [
      0.25,
      0.75,
      0.1875,
      0,
      0.35611
    ],
    93: [
      0.25,
      0.75,
      0.09972,
      0,
      0.35611
    ],
    94: [
      0,
      0.69444,
      0.06709,
      0,
      0.59111
    ],
    95: [
      0.31,
      0.13444,
      0.09811,
      0,
      0.59111
    ],
    97: [
      0,
      0.44444,
      0.09426,
      0,
      0.59111
    ],
    98: [
      0,
      0.69444,
      0.07861,
      0,
      0.53222
    ],
    99: [
      0,
      0.44444,
      0.05222,
      0,
      0.53222
    ],
    100: [
      0,
      0.69444,
      0.10861,
      0,
      0.59111
    ],
    101: [
      0,
      0.44444,
      0.085,
      0,
      0.53222
    ],
    102: [
      0.19444,
      0.69444,
      0.21778,
      0,
      0.4
    ],
    103: [
      0.19444,
      0.44444,
      0.105,
      0,
      0.53222
    ],
    104: [
      0,
      0.69444,
      0.09426,
      0,
      0.59111
    ],
    105: [
      0,
      0.69326,
      0.11387,
      0,
      0.35555
    ],
    106: [
      0.19444,
      0.69326,
      0.1672,
      0,
      0.35555
    ],
    107: [
      0,
      0.69444,
      0.11111,
      0,
      0.53222
    ],
    108: [
      0,
      0.69444,
      0.10861,
      0,
      0.29666
    ],
    109: [
      0,
      0.44444,
      0.09426,
      0,
      0.94444
    ],
    110: [
      0,
      0.44444,
      0.09426,
      0,
      0.64999
    ],
    111: [
      0,
      0.44444,
      0.07861,
      0,
      0.59111
    ],
    112: [
      0.19444,
      0.44444,
      0.07861,
      0,
      0.59111
    ],
    113: [
      0.19444,
      0.44444,
      0.105,
      0,
      0.53222
    ],
    114: [
      0,
      0.44444,
      0.11111,
      0,
      0.50167
    ],
    115: [
      0,
      0.44444,
      0.08167,
      0,
      0.48694
    ],
    116: [
      0,
      0.63492,
      0.09639,
      0,
      0.385
    ],
    117: [
      0,
      0.44444,
      0.09426,
      0,
      0.62055
    ],
    118: [
      0,
      0.44444,
      0.11111,
      0,
      0.53222
    ],
    119: [
      0,
      0.44444,
      0.11111,
      0,
      0.76777
    ],
    120: [
      0,
      0.44444,
      0.12583,
      0,
      0.56055
    ],
    121: [
      0.19444,
      0.44444,
      0.105,
      0,
      0.56166
    ],
    122: [
      0,
      0.44444,
      0.13889,
      0,
      0.49055
    ],
    126: [
      0.35,
      0.34444,
      0.11472,
      0,
      0.59111
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    168: [
      0,
      0.69444,
      0.11473,
      0,
      0.59111
    ],
    176: [
      0,
      0.69444,
      0,
      0,
      0.94888
    ],
    184: [
      0.17014,
      0,
      0,
      0,
      0.53222
    ],
    198: [
      0,
      0.68611,
      0.11431,
      0,
      1.02277
    ],
    216: [
      0.04861,
      0.73472,
      0.09062,
      0,
      0.88555
    ],
    223: [
      0.19444,
      0.69444,
      0.09736,
      0,
      0.665
    ],
    230: [
      0,
      0.44444,
      0.085,
      0,
      0.82666
    ],
    248: [
      0.09722,
      0.54167,
      0.09458,
      0,
      0.59111
    ],
    305: [
      0,
      0.44444,
      0.09426,
      0,
      0.35555
    ],
    338: [
      0,
      0.68611,
      0.11431,
      0,
      1.14054
    ],
    339: [
      0,
      0.44444,
      0.085,
      0,
      0.82666
    ],
    567: [
      0.19444,
      0.44444,
      0.04611,
      0,
      0.385
    ],
    710: [
      0,
      0.69444,
      0.06709,
      0,
      0.59111
    ],
    711: [
      0,
      0.63194,
      0.08271,
      0,
      0.59111
    ],
    713: [
      0,
      0.59444,
      0.10444,
      0,
      0.59111
    ],
    714: [
      0,
      0.69444,
      0.08528,
      0,
      0.59111
    ],
    715: [
      0,
      0.69444,
      0,
      0,
      0.59111
    ],
    728: [
      0,
      0.69444,
      0.10333,
      0,
      0.59111
    ],
    729: [
      0,
      0.69444,
      0.12945,
      0,
      0.35555
    ],
    730: [
      0,
      0.69444,
      0,
      0,
      0.94888
    ],
    732: [
      0,
      0.69444,
      0.11472,
      0,
      0.59111
    ],
    733: [
      0,
      0.69444,
      0.11472,
      0,
      0.59111
    ],
    915: [
      0,
      0.68611,
      0.12903,
      0,
      0.69777
    ],
    916: [
      0,
      0.68611,
      0,
      0,
      0.94444
    ],
    920: [
      0,
      0.68611,
      0.09062,
      0,
      0.88555
    ],
    923: [
      0,
      0.68611,
      0,
      0,
      0.80666
    ],
    926: [
      0,
      0.68611,
      0.15092,
      0,
      0.76777
    ],
    928: [
      0,
      0.68611,
      0.17208,
      0,
      0.8961
    ],
    931: [
      0,
      0.68611,
      0.11431,
      0,
      0.82666
    ],
    933: [
      0,
      0.68611,
      0.10778,
      0,
      0.88555
    ],
    934: [
      0,
      0.68611,
      0.05632,
      0,
      0.82666
    ],
    936: [
      0,
      0.68611,
      0.10778,
      0,
      0.88555
    ],
    937: [
      0,
      0.68611,
      0.0992,
      0,
      0.82666
    ],
    8211: [
      0,
      0.44444,
      0.09811,
      0,
      0.59111
    ],
    8212: [
      0,
      0.44444,
      0.09811,
      0,
      1.18221
    ],
    8216: [
      0,
      0.69444,
      0.12945,
      0,
      0.35555
    ],
    8217: [
      0,
      0.69444,
      0.12945,
      0,
      0.35555
    ],
    8220: [
      0,
      0.69444,
      0.16772,
      0,
      0.62055
    ],
    8221: [
      0,
      0.69444,
      0.07939,
      0,
      0.62055
    ]
  },
  "Main-Italic": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    33: [
      0,
      0.69444,
      0.12417,
      0,
      0.30667
    ],
    34: [
      0,
      0.69444,
      0.06961,
      0,
      0.51444
    ],
    35: [
      0.19444,
      0.69444,
      0.06616,
      0,
      0.81777
    ],
    37: [
      0.05556,
      0.75,
      0.13639,
      0,
      0.81777
    ],
    38: [
      0,
      0.69444,
      0.09694,
      0,
      0.76666
    ],
    39: [
      0,
      0.69444,
      0.12417,
      0,
      0.30667
    ],
    40: [
      0.25,
      0.75,
      0.16194,
      0,
      0.40889
    ],
    41: [
      0.25,
      0.75,
      0.03694,
      0,
      0.40889
    ],
    42: [
      0,
      0.75,
      0.14917,
      0,
      0.51111
    ],
    43: [
      0.05667,
      0.56167,
      0.03694,
      0,
      0.76666
    ],
    44: [
      0.19444,
      0.10556,
      0,
      0,
      0.30667
    ],
    45: [
      0,
      0.43056,
      0.02826,
      0,
      0.35778
    ],
    46: [
      0,
      0.10556,
      0,
      0,
      0.30667
    ],
    47: [
      0.25,
      0.75,
      0.16194,
      0,
      0.51111
    ],
    48: [
      0,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    49: [
      0,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    50: [
      0,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    51: [
      0,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    52: [
      0.19444,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    53: [
      0,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    54: [
      0,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    55: [
      0.19444,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    56: [
      0,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    57: [
      0,
      0.64444,
      0.13556,
      0,
      0.51111
    ],
    58: [
      0,
      0.43056,
      0.0582,
      0,
      0.30667
    ],
    59: [
      0.19444,
      0.43056,
      0.0582,
      0,
      0.30667
    ],
    61: [
      -0.13313,
      0.36687,
      0.06616,
      0,
      0.76666
    ],
    63: [
      0,
      0.69444,
      0.1225,
      0,
      0.51111
    ],
    64: [
      0,
      0.69444,
      0.09597,
      0,
      0.76666
    ],
    65: [
      0,
      0.68333,
      0,
      0,
      0.74333
    ],
    66: [
      0,
      0.68333,
      0.10257,
      0,
      0.70389
    ],
    67: [
      0,
      0.68333,
      0.14528,
      0,
      0.71555
    ],
    68: [
      0,
      0.68333,
      0.09403,
      0,
      0.755
    ],
    69: [
      0,
      0.68333,
      0.12028,
      0,
      0.67833
    ],
    70: [
      0,
      0.68333,
      0.13305,
      0,
      0.65277
    ],
    71: [
      0,
      0.68333,
      0.08722,
      0,
      0.77361
    ],
    72: [
      0,
      0.68333,
      0.16389,
      0,
      0.74333
    ],
    73: [
      0,
      0.68333,
      0.15806,
      0,
      0.38555
    ],
    74: [
      0,
      0.68333,
      0.14028,
      0,
      0.525
    ],
    75: [
      0,
      0.68333,
      0.14528,
      0,
      0.76888
    ],
    76: [
      0,
      0.68333,
      0,
      0,
      0.62722
    ],
    77: [
      0,
      0.68333,
      0.16389,
      0,
      0.89666
    ],
    78: [
      0,
      0.68333,
      0.16389,
      0,
      0.74333
    ],
    79: [
      0,
      0.68333,
      0.09403,
      0,
      0.76666
    ],
    80: [
      0,
      0.68333,
      0.10257,
      0,
      0.67833
    ],
    81: [
      0.19444,
      0.68333,
      0.09403,
      0,
      0.76666
    ],
    82: [
      0,
      0.68333,
      0.03868,
      0,
      0.72944
    ],
    83: [
      0,
      0.68333,
      0.11972,
      0,
      0.56222
    ],
    84: [
      0,
      0.68333,
      0.13305,
      0,
      0.71555
    ],
    85: [
      0,
      0.68333,
      0.16389,
      0,
      0.74333
    ],
    86: [
      0,
      0.68333,
      0.18361,
      0,
      0.74333
    ],
    87: [
      0,
      0.68333,
      0.18361,
      0,
      0.99888
    ],
    88: [
      0,
      0.68333,
      0.15806,
      0,
      0.74333
    ],
    89: [
      0,
      0.68333,
      0.19383,
      0,
      0.74333
    ],
    90: [
      0,
      0.68333,
      0.14528,
      0,
      0.61333
    ],
    91: [
      0.25,
      0.75,
      0.1875,
      0,
      0.30667
    ],
    93: [
      0.25,
      0.75,
      0.10528,
      0,
      0.30667
    ],
    94: [
      0,
      0.69444,
      0.06646,
      0,
      0.51111
    ],
    95: [
      0.31,
      0.12056,
      0.09208,
      0,
      0.51111
    ],
    97: [
      0,
      0.43056,
      0.07671,
      0,
      0.51111
    ],
    98: [
      0,
      0.69444,
      0.06312,
      0,
      0.46
    ],
    99: [
      0,
      0.43056,
      0.05653,
      0,
      0.46
    ],
    100: [
      0,
      0.69444,
      0.10333,
      0,
      0.51111
    ],
    101: [
      0,
      0.43056,
      0.07514,
      0,
      0.46
    ],
    102: [
      0.19444,
      0.69444,
      0.21194,
      0,
      0.30667
    ],
    103: [
      0.19444,
      0.43056,
      0.08847,
      0,
      0.46
    ],
    104: [
      0,
      0.69444,
      0.07671,
      0,
      0.51111
    ],
    105: [
      0,
      0.65536,
      0.1019,
      0,
      0.30667
    ],
    106: [
      0.19444,
      0.65536,
      0.14467,
      0,
      0.30667
    ],
    107: [
      0,
      0.69444,
      0.10764,
      0,
      0.46
    ],
    108: [
      0,
      0.69444,
      0.10333,
      0,
      0.25555
    ],
    109: [
      0,
      0.43056,
      0.07671,
      0,
      0.81777
    ],
    110: [
      0,
      0.43056,
      0.07671,
      0,
      0.56222
    ],
    111: [
      0,
      0.43056,
      0.06312,
      0,
      0.51111
    ],
    112: [
      0.19444,
      0.43056,
      0.06312,
      0,
      0.51111
    ],
    113: [
      0.19444,
      0.43056,
      0.08847,
      0,
      0.46
    ],
    114: [
      0,
      0.43056,
      0.10764,
      0,
      0.42166
    ],
    115: [
      0,
      0.43056,
      0.08208,
      0,
      0.40889
    ],
    116: [
      0,
      0.61508,
      0.09486,
      0,
      0.33222
    ],
    117: [
      0,
      0.43056,
      0.07671,
      0,
      0.53666
    ],
    118: [
      0,
      0.43056,
      0.10764,
      0,
      0.46
    ],
    119: [
      0,
      0.43056,
      0.10764,
      0,
      0.66444
    ],
    120: [
      0,
      0.43056,
      0.12042,
      0,
      0.46389
    ],
    121: [
      0.19444,
      0.43056,
      0.08847,
      0,
      0.48555
    ],
    122: [
      0,
      0.43056,
      0.12292,
      0,
      0.40889
    ],
    126: [
      0.35,
      0.31786,
      0.11585,
      0,
      0.51111
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    168: [
      0,
      0.66786,
      0.10474,
      0,
      0.51111
    ],
    176: [
      0,
      0.69444,
      0,
      0,
      0.83129
    ],
    184: [
      0.17014,
      0,
      0,
      0,
      0.46
    ],
    198: [
      0,
      0.68333,
      0.12028,
      0,
      0.88277
    ],
    216: [
      0.04861,
      0.73194,
      0.09403,
      0,
      0.76666
    ],
    223: [
      0.19444,
      0.69444,
      0.10514,
      0,
      0.53666
    ],
    230: [
      0,
      0.43056,
      0.07514,
      0,
      0.71555
    ],
    248: [
      0.09722,
      0.52778,
      0.09194,
      0,
      0.51111
    ],
    338: [
      0,
      0.68333,
      0.12028,
      0,
      0.98499
    ],
    339: [
      0,
      0.43056,
      0.07514,
      0,
      0.71555
    ],
    710: [
      0,
      0.69444,
      0.06646,
      0,
      0.51111
    ],
    711: [
      0,
      0.62847,
      0.08295,
      0,
      0.51111
    ],
    713: [
      0,
      0.56167,
      0.10333,
      0,
      0.51111
    ],
    714: [
      0,
      0.69444,
      0.09694,
      0,
      0.51111
    ],
    715: [
      0,
      0.69444,
      0,
      0,
      0.51111
    ],
    728: [
      0,
      0.69444,
      0.10806,
      0,
      0.51111
    ],
    729: [
      0,
      0.66786,
      0.11752,
      0,
      0.30667
    ],
    730: [
      0,
      0.69444,
      0,
      0,
      0.83129
    ],
    732: [
      0,
      0.66786,
      0.11585,
      0,
      0.51111
    ],
    733: [
      0,
      0.69444,
      0.1225,
      0,
      0.51111
    ],
    915: [
      0,
      0.68333,
      0.13305,
      0,
      0.62722
    ],
    916: [
      0,
      0.68333,
      0,
      0,
      0.81777
    ],
    920: [
      0,
      0.68333,
      0.09403,
      0,
      0.76666
    ],
    923: [
      0,
      0.68333,
      0,
      0,
      0.69222
    ],
    926: [
      0,
      0.68333,
      0.15294,
      0,
      0.66444
    ],
    928: [
      0,
      0.68333,
      0.16389,
      0,
      0.74333
    ],
    931: [
      0,
      0.68333,
      0.12028,
      0,
      0.71555
    ],
    933: [
      0,
      0.68333,
      0.11111,
      0,
      0.76666
    ],
    934: [
      0,
      0.68333,
      0.05986,
      0,
      0.71555
    ],
    936: [
      0,
      0.68333,
      0.11111,
      0,
      0.76666
    ],
    937: [
      0,
      0.68333,
      0.10257,
      0,
      0.71555
    ],
    8211: [
      0,
      0.43056,
      0.09208,
      0,
      0.51111
    ],
    8212: [
      0,
      0.43056,
      0.09208,
      0,
      1.02222
    ],
    8216: [
      0,
      0.69444,
      0.12417,
      0,
      0.30667
    ],
    8217: [
      0,
      0.69444,
      0.12417,
      0,
      0.30667
    ],
    8220: [
      0,
      0.69444,
      0.1685,
      0,
      0.51444
    ],
    8221: [
      0,
      0.69444,
      0.06961,
      0,
      0.51444
    ],
    8463: [
      0,
      0.68889,
      0,
      0,
      0.54028
    ]
  },
  "Main-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    33: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    34: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    35: [
      0.19444,
      0.69444,
      0,
      0,
      0.83334
    ],
    36: [
      0.05556,
      0.75,
      0,
      0,
      0.5
    ],
    37: [
      0.05556,
      0.75,
      0,
      0,
      0.83334
    ],
    38: [
      0,
      0.69444,
      0,
      0,
      0.77778
    ],
    39: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    40: [
      0.25,
      0.75,
      0,
      0,
      0.38889
    ],
    41: [
      0.25,
      0.75,
      0,
      0,
      0.38889
    ],
    42: [
      0,
      0.75,
      0,
      0,
      0.5
    ],
    43: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    44: [
      0.19444,
      0.10556,
      0,
      0,
      0.27778
    ],
    45: [
      0,
      0.43056,
      0,
      0,
      0.33333
    ],
    46: [
      0,
      0.10556,
      0,
      0,
      0.27778
    ],
    47: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    48: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    49: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    50: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    51: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    52: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    53: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    54: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    55: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    56: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    57: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    58: [
      0,
      0.43056,
      0,
      0,
      0.27778
    ],
    59: [
      0.19444,
      0.43056,
      0,
      0,
      0.27778
    ],
    60: [
      0.0391,
      0.5391,
      0,
      0,
      0.77778
    ],
    61: [
      -0.13313,
      0.36687,
      0,
      0,
      0.77778
    ],
    62: [
      0.0391,
      0.5391,
      0,
      0,
      0.77778
    ],
    63: [
      0,
      0.69444,
      0,
      0,
      0.47222
    ],
    64: [
      0,
      0.69444,
      0,
      0,
      0.77778
    ],
    65: [
      0,
      0.68333,
      0,
      0,
      0.75
    ],
    66: [
      0,
      0.68333,
      0,
      0,
      0.70834
    ],
    67: [
      0,
      0.68333,
      0,
      0,
      0.72222
    ],
    68: [
      0,
      0.68333,
      0,
      0,
      0.76389
    ],
    69: [
      0,
      0.68333,
      0,
      0,
      0.68056
    ],
    70: [
      0,
      0.68333,
      0,
      0,
      0.65278
    ],
    71: [
      0,
      0.68333,
      0,
      0,
      0.78472
    ],
    72: [
      0,
      0.68333,
      0,
      0,
      0.75
    ],
    73: [
      0,
      0.68333,
      0,
      0,
      0.36111
    ],
    74: [
      0,
      0.68333,
      0,
      0,
      0.51389
    ],
    75: [
      0,
      0.68333,
      0,
      0,
      0.77778
    ],
    76: [
      0,
      0.68333,
      0,
      0,
      0.625
    ],
    77: [
      0,
      0.68333,
      0,
      0,
      0.91667
    ],
    78: [
      0,
      0.68333,
      0,
      0,
      0.75
    ],
    79: [
      0,
      0.68333,
      0,
      0,
      0.77778
    ],
    80: [
      0,
      0.68333,
      0,
      0,
      0.68056
    ],
    81: [
      0.19444,
      0.68333,
      0,
      0,
      0.77778
    ],
    82: [
      0,
      0.68333,
      0,
      0,
      0.73611
    ],
    83: [
      0,
      0.68333,
      0,
      0,
      0.55556
    ],
    84: [
      0,
      0.68333,
      0,
      0,
      0.72222
    ],
    85: [
      0,
      0.68333,
      0,
      0,
      0.75
    ],
    86: [
      0,
      0.68333,
      0.01389,
      0,
      0.75
    ],
    87: [
      0,
      0.68333,
      0.01389,
      0,
      1.02778
    ],
    88: [
      0,
      0.68333,
      0,
      0,
      0.75
    ],
    89: [
      0,
      0.68333,
      0.025,
      0,
      0.75
    ],
    90: [
      0,
      0.68333,
      0,
      0,
      0.61111
    ],
    91: [
      0.25,
      0.75,
      0,
      0,
      0.27778
    ],
    92: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    93: [
      0.25,
      0.75,
      0,
      0,
      0.27778
    ],
    94: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    95: [
      0.31,
      0.12056,
      0.02778,
      0,
      0.5
    ],
    97: [
      0,
      0.43056,
      0,
      0,
      0.5
    ],
    98: [
      0,
      0.69444,
      0,
      0,
      0.55556
    ],
    99: [
      0,
      0.43056,
      0,
      0,
      0.44445
    ],
    100: [
      0,
      0.69444,
      0,
      0,
      0.55556
    ],
    101: [
      0,
      0.43056,
      0,
      0,
      0.44445
    ],
    102: [
      0,
      0.69444,
      0.07778,
      0,
      0.30556
    ],
    103: [
      0.19444,
      0.43056,
      0.01389,
      0,
      0.5
    ],
    104: [
      0,
      0.69444,
      0,
      0,
      0.55556
    ],
    105: [
      0,
      0.66786,
      0,
      0,
      0.27778
    ],
    106: [
      0.19444,
      0.66786,
      0,
      0,
      0.30556
    ],
    107: [
      0,
      0.69444,
      0,
      0,
      0.52778
    ],
    108: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    109: [
      0,
      0.43056,
      0,
      0,
      0.83334
    ],
    110: [
      0,
      0.43056,
      0,
      0,
      0.55556
    ],
    111: [
      0,
      0.43056,
      0,
      0,
      0.5
    ],
    112: [
      0.19444,
      0.43056,
      0,
      0,
      0.55556
    ],
    113: [
      0.19444,
      0.43056,
      0,
      0,
      0.52778
    ],
    114: [
      0,
      0.43056,
      0,
      0,
      0.39167
    ],
    115: [
      0,
      0.43056,
      0,
      0,
      0.39445
    ],
    116: [
      0,
      0.61508,
      0,
      0,
      0.38889
    ],
    117: [
      0,
      0.43056,
      0,
      0,
      0.55556
    ],
    118: [
      0,
      0.43056,
      0.01389,
      0,
      0.52778
    ],
    119: [
      0,
      0.43056,
      0.01389,
      0,
      0.72222
    ],
    120: [
      0,
      0.43056,
      0,
      0,
      0.52778
    ],
    121: [
      0.19444,
      0.43056,
      0.01389,
      0,
      0.52778
    ],
    122: [
      0,
      0.43056,
      0,
      0,
      0.44445
    ],
    123: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    124: [
      0.25,
      0.75,
      0,
      0,
      0.27778
    ],
    125: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    126: [
      0.35,
      0.31786,
      0,
      0,
      0.5
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    163: [
      0,
      0.69444,
      0,
      0,
      0.76909
    ],
    167: [
      0.19444,
      0.69444,
      0,
      0,
      0.44445
    ],
    168: [
      0,
      0.66786,
      0,
      0,
      0.5
    ],
    172: [
      0,
      0.43056,
      0,
      0,
      0.66667
    ],
    176: [
      0,
      0.69444,
      0,
      0,
      0.75
    ],
    177: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    182: [
      0.19444,
      0.69444,
      0,
      0,
      0.61111
    ],
    184: [
      0.17014,
      0,
      0,
      0,
      0.44445
    ],
    198: [
      0,
      0.68333,
      0,
      0,
      0.90278
    ],
    215: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    216: [
      0.04861,
      0.73194,
      0,
      0,
      0.77778
    ],
    223: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    230: [
      0,
      0.43056,
      0,
      0,
      0.72222
    ],
    247: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    248: [
      0.09722,
      0.52778,
      0,
      0,
      0.5
    ],
    305: [
      0,
      0.43056,
      0,
      0,
      0.27778
    ],
    338: [
      0,
      0.68333,
      0,
      0,
      1.01389
    ],
    339: [
      0,
      0.43056,
      0,
      0,
      0.77778
    ],
    567: [
      0.19444,
      0.43056,
      0,
      0,
      0.30556
    ],
    710: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    711: [
      0,
      0.62847,
      0,
      0,
      0.5
    ],
    713: [
      0,
      0.56778,
      0,
      0,
      0.5
    ],
    714: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    715: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    728: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    729: [
      0,
      0.66786,
      0,
      0,
      0.27778
    ],
    730: [
      0,
      0.69444,
      0,
      0,
      0.75
    ],
    732: [
      0,
      0.66786,
      0,
      0,
      0.5
    ],
    733: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    915: [
      0,
      0.68333,
      0,
      0,
      0.625
    ],
    916: [
      0,
      0.68333,
      0,
      0,
      0.83334
    ],
    920: [
      0,
      0.68333,
      0,
      0,
      0.77778
    ],
    923: [
      0,
      0.68333,
      0,
      0,
      0.69445
    ],
    926: [
      0,
      0.68333,
      0,
      0,
      0.66667
    ],
    928: [
      0,
      0.68333,
      0,
      0,
      0.75
    ],
    931: [
      0,
      0.68333,
      0,
      0,
      0.72222
    ],
    933: [
      0,
      0.68333,
      0,
      0,
      0.77778
    ],
    934: [
      0,
      0.68333,
      0,
      0,
      0.72222
    ],
    936: [
      0,
      0.68333,
      0,
      0,
      0.77778
    ],
    937: [
      0,
      0.68333,
      0,
      0,
      0.72222
    ],
    8211: [
      0,
      0.43056,
      0.02778,
      0,
      0.5
    ],
    8212: [
      0,
      0.43056,
      0.02778,
      0,
      1
    ],
    8216: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    8217: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    8220: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    8221: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    8224: [
      0.19444,
      0.69444,
      0,
      0,
      0.44445
    ],
    8225: [
      0.19444,
      0.69444,
      0,
      0,
      0.44445
    ],
    8230: [
      0,
      0.123,
      0,
      0,
      1.172
    ],
    8242: [
      0,
      0.55556,
      0,
      0,
      0.275
    ],
    8407: [
      0,
      0.71444,
      0.15382,
      0,
      0.5
    ],
    8463: [
      0,
      0.68889,
      0,
      0,
      0.54028
    ],
    8465: [
      0,
      0.69444,
      0,
      0,
      0.72222
    ],
    8467: [
      0,
      0.69444,
      0,
      0.11111,
      0.41667
    ],
    8472: [
      0.19444,
      0.43056,
      0,
      0.11111,
      0.63646
    ],
    8476: [
      0,
      0.69444,
      0,
      0,
      0.72222
    ],
    8501: [
      0,
      0.69444,
      0,
      0,
      0.61111
    ],
    8592: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8593: [
      0.19444,
      0.69444,
      0,
      0,
      0.5
    ],
    8594: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8595: [
      0.19444,
      0.69444,
      0,
      0,
      0.5
    ],
    8596: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8597: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    8598: [
      0.19444,
      0.69444,
      0,
      0,
      1
    ],
    8599: [
      0.19444,
      0.69444,
      0,
      0,
      1
    ],
    8600: [
      0.19444,
      0.69444,
      0,
      0,
      1
    ],
    8601: [
      0.19444,
      0.69444,
      0,
      0,
      1
    ],
    8614: [
      0.011,
      0.511,
      0,
      0,
      1
    ],
    8617: [
      0.011,
      0.511,
      0,
      0,
      1.126
    ],
    8618: [
      0.011,
      0.511,
      0,
      0,
      1.126
    ],
    8636: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8637: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8640: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8641: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8652: [
      0.011,
      0.671,
      0,
      0,
      1
    ],
    8656: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8657: [
      0.19444,
      0.69444,
      0,
      0,
      0.61111
    ],
    8658: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8659: [
      0.19444,
      0.69444,
      0,
      0,
      0.61111
    ],
    8660: [
      -0.13313,
      0.36687,
      0,
      0,
      1
    ],
    8661: [
      0.25,
      0.75,
      0,
      0,
      0.61111
    ],
    8704: [
      0,
      0.69444,
      0,
      0,
      0.55556
    ],
    8706: [
      0,
      0.69444,
      0.05556,
      0.08334,
      0.5309
    ],
    8707: [
      0,
      0.69444,
      0,
      0,
      0.55556
    ],
    8709: [
      0.05556,
      0.75,
      0,
      0,
      0.5
    ],
    8711: [
      0,
      0.68333,
      0,
      0,
      0.83334
    ],
    8712: [
      0.0391,
      0.5391,
      0,
      0,
      0.66667
    ],
    8715: [
      0.0391,
      0.5391,
      0,
      0,
      0.66667
    ],
    8722: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    8723: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    8725: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    8726: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    8727: [
      -0.03472,
      0.46528,
      0,
      0,
      0.5
    ],
    8728: [
      -0.05555,
      0.44445,
      0,
      0,
      0.5
    ],
    8729: [
      -0.05555,
      0.44445,
      0,
      0,
      0.5
    ],
    8730: [
      0.2,
      0.8,
      0,
      0,
      0.83334
    ],
    8733: [
      0,
      0.43056,
      0,
      0,
      0.77778
    ],
    8734: [
      0,
      0.43056,
      0,
      0,
      1
    ],
    8736: [
      0,
      0.69224,
      0,
      0,
      0.72222
    ],
    8739: [
      0.25,
      0.75,
      0,
      0,
      0.27778
    ],
    8741: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    8743: [
      0,
      0.55556,
      0,
      0,
      0.66667
    ],
    8744: [
      0,
      0.55556,
      0,
      0,
      0.66667
    ],
    8745: [
      0,
      0.55556,
      0,
      0,
      0.66667
    ],
    8746: [
      0,
      0.55556,
      0,
      0,
      0.66667
    ],
    8747: [
      0.19444,
      0.69444,
      0.11111,
      0,
      0.41667
    ],
    8764: [
      -0.13313,
      0.36687,
      0,
      0,
      0.77778
    ],
    8768: [
      0.19444,
      0.69444,
      0,
      0,
      0.27778
    ],
    8771: [
      -0.03625,
      0.46375,
      0,
      0,
      0.77778
    ],
    8773: [
      -0.022,
      0.589,
      0,
      0,
      0.778
    ],
    8776: [
      -0.01688,
      0.48312,
      0,
      0,
      0.77778
    ],
    8781: [
      -0.03625,
      0.46375,
      0,
      0,
      0.77778
    ],
    8784: [
      -0.133,
      0.673,
      0,
      0,
      0.778
    ],
    8801: [
      -0.03625,
      0.46375,
      0,
      0,
      0.77778
    ],
    8804: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    8805: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    8810: [
      0.0391,
      0.5391,
      0,
      0,
      1
    ],
    8811: [
      0.0391,
      0.5391,
      0,
      0,
      1
    ],
    8826: [
      0.0391,
      0.5391,
      0,
      0,
      0.77778
    ],
    8827: [
      0.0391,
      0.5391,
      0,
      0,
      0.77778
    ],
    8834: [
      0.0391,
      0.5391,
      0,
      0,
      0.77778
    ],
    8835: [
      0.0391,
      0.5391,
      0,
      0,
      0.77778
    ],
    8838: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    8839: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    8846: [
      0,
      0.55556,
      0,
      0,
      0.66667
    ],
    8849: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    8850: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    8851: [
      0,
      0.55556,
      0,
      0,
      0.66667
    ],
    8852: [
      0,
      0.55556,
      0,
      0,
      0.66667
    ],
    8853: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    8854: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    8855: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    8856: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    8857: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    8866: [
      0,
      0.69444,
      0,
      0,
      0.61111
    ],
    8867: [
      0,
      0.69444,
      0,
      0,
      0.61111
    ],
    8868: [
      0,
      0.69444,
      0,
      0,
      0.77778
    ],
    8869: [
      0,
      0.69444,
      0,
      0,
      0.77778
    ],
    8872: [
      0.249,
      0.75,
      0,
      0,
      0.867
    ],
    8900: [
      -0.05555,
      0.44445,
      0,
      0,
      0.5
    ],
    8901: [
      -0.05555,
      0.44445,
      0,
      0,
      0.27778
    ],
    8902: [
      -0.03472,
      0.46528,
      0,
      0,
      0.5
    ],
    8904: [
      5e-3,
      0.505,
      0,
      0,
      0.9
    ],
    8942: [
      0.03,
      0.903,
      0,
      0,
      0.278
    ],
    8943: [
      -0.19,
      0.313,
      0,
      0,
      1.172
    ],
    8945: [
      -0.1,
      0.823,
      0,
      0,
      1.282
    ],
    8968: [
      0.25,
      0.75,
      0,
      0,
      0.44445
    ],
    8969: [
      0.25,
      0.75,
      0,
      0,
      0.44445
    ],
    8970: [
      0.25,
      0.75,
      0,
      0,
      0.44445
    ],
    8971: [
      0.25,
      0.75,
      0,
      0,
      0.44445
    ],
    8994: [
      -0.14236,
      0.35764,
      0,
      0,
      1
    ],
    8995: [
      -0.14236,
      0.35764,
      0,
      0,
      1
    ],
    9136: [
      0.244,
      0.744,
      0,
      0,
      0.412
    ],
    9137: [
      0.244,
      0.745,
      0,
      0,
      0.412
    ],
    9651: [
      0.19444,
      0.69444,
      0,
      0,
      0.88889
    ],
    9657: [
      -0.03472,
      0.46528,
      0,
      0,
      0.5
    ],
    9661: [
      0.19444,
      0.69444,
      0,
      0,
      0.88889
    ],
    9667: [
      -0.03472,
      0.46528,
      0,
      0,
      0.5
    ],
    9711: [
      0.19444,
      0.69444,
      0,
      0,
      1
    ],
    9824: [
      0.12963,
      0.69444,
      0,
      0,
      0.77778
    ],
    9825: [
      0.12963,
      0.69444,
      0,
      0,
      0.77778
    ],
    9826: [
      0.12963,
      0.69444,
      0,
      0,
      0.77778
    ],
    9827: [
      0.12963,
      0.69444,
      0,
      0,
      0.77778
    ],
    9837: [
      0,
      0.75,
      0,
      0,
      0.38889
    ],
    9838: [
      0.19444,
      0.69444,
      0,
      0,
      0.38889
    ],
    9839: [
      0.19444,
      0.69444,
      0,
      0,
      0.38889
    ],
    10216: [
      0.25,
      0.75,
      0,
      0,
      0.38889
    ],
    10217: [
      0.25,
      0.75,
      0,
      0,
      0.38889
    ],
    10222: [
      0.244,
      0.744,
      0,
      0,
      0.412
    ],
    10223: [
      0.244,
      0.745,
      0,
      0,
      0.412
    ],
    10229: [
      0.011,
      0.511,
      0,
      0,
      1.609
    ],
    10230: [
      0.011,
      0.511,
      0,
      0,
      1.638
    ],
    10231: [
      0.011,
      0.511,
      0,
      0,
      1.859
    ],
    10232: [
      0.024,
      0.525,
      0,
      0,
      1.609
    ],
    10233: [
      0.024,
      0.525,
      0,
      0,
      1.638
    ],
    10234: [
      0.024,
      0.525,
      0,
      0,
      1.858
    ],
    10236: [
      0.011,
      0.511,
      0,
      0,
      1.638
    ],
    10815: [
      0,
      0.68333,
      0,
      0,
      0.75
    ],
    10927: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    10928: [
      0.13597,
      0.63597,
      0,
      0,
      0.77778
    ],
    57376: [
      0.19444,
      0.69444,
      0,
      0,
      0
    ]
  },
  "Math-BoldItalic": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    48: [
      0,
      0.44444,
      0,
      0,
      0.575
    ],
    49: [
      0,
      0.44444,
      0,
      0,
      0.575
    ],
    50: [
      0,
      0.44444,
      0,
      0,
      0.575
    ],
    51: [
      0.19444,
      0.44444,
      0,
      0,
      0.575
    ],
    52: [
      0.19444,
      0.44444,
      0,
      0,
      0.575
    ],
    53: [
      0.19444,
      0.44444,
      0,
      0,
      0.575
    ],
    54: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    55: [
      0.19444,
      0.44444,
      0,
      0,
      0.575
    ],
    56: [
      0,
      0.64444,
      0,
      0,
      0.575
    ],
    57: [
      0.19444,
      0.44444,
      0,
      0,
      0.575
    ],
    65: [
      0,
      0.68611,
      0,
      0,
      0.86944
    ],
    66: [
      0,
      0.68611,
      0.04835,
      0,
      0.8664
    ],
    67: [
      0,
      0.68611,
      0.06979,
      0,
      0.81694
    ],
    68: [
      0,
      0.68611,
      0.03194,
      0,
      0.93812
    ],
    69: [
      0,
      0.68611,
      0.05451,
      0,
      0.81007
    ],
    70: [
      0,
      0.68611,
      0.15972,
      0,
      0.68889
    ],
    71: [
      0,
      0.68611,
      0,
      0,
      0.88673
    ],
    72: [
      0,
      0.68611,
      0.08229,
      0,
      0.98229
    ],
    73: [
      0,
      0.68611,
      0.07778,
      0,
      0.51111
    ],
    74: [
      0,
      0.68611,
      0.10069,
      0,
      0.63125
    ],
    75: [
      0,
      0.68611,
      0.06979,
      0,
      0.97118
    ],
    76: [
      0,
      0.68611,
      0,
      0,
      0.75555
    ],
    77: [
      0,
      0.68611,
      0.11424,
      0,
      1.14201
    ],
    78: [
      0,
      0.68611,
      0.11424,
      0,
      0.95034
    ],
    79: [
      0,
      0.68611,
      0.03194,
      0,
      0.83666
    ],
    80: [
      0,
      0.68611,
      0.15972,
      0,
      0.72309
    ],
    81: [
      0.19444,
      0.68611,
      0,
      0,
      0.86861
    ],
    82: [
      0,
      0.68611,
      421e-5,
      0,
      0.87235
    ],
    83: [
      0,
      0.68611,
      0.05382,
      0,
      0.69271
    ],
    84: [
      0,
      0.68611,
      0.15972,
      0,
      0.63663
    ],
    85: [
      0,
      0.68611,
      0.11424,
      0,
      0.80027
    ],
    86: [
      0,
      0.68611,
      0.25555,
      0,
      0.67778
    ],
    87: [
      0,
      0.68611,
      0.15972,
      0,
      1.09305
    ],
    88: [
      0,
      0.68611,
      0.07778,
      0,
      0.94722
    ],
    89: [
      0,
      0.68611,
      0.25555,
      0,
      0.67458
    ],
    90: [
      0,
      0.68611,
      0.06979,
      0,
      0.77257
    ],
    97: [
      0,
      0.44444,
      0,
      0,
      0.63287
    ],
    98: [
      0,
      0.69444,
      0,
      0,
      0.52083
    ],
    99: [
      0,
      0.44444,
      0,
      0,
      0.51342
    ],
    100: [
      0,
      0.69444,
      0,
      0,
      0.60972
    ],
    101: [
      0,
      0.44444,
      0,
      0,
      0.55361
    ],
    102: [
      0.19444,
      0.69444,
      0.11042,
      0,
      0.56806
    ],
    103: [
      0.19444,
      0.44444,
      0.03704,
      0,
      0.5449
    ],
    104: [
      0,
      0.69444,
      0,
      0,
      0.66759
    ],
    105: [
      0,
      0.69326,
      0,
      0,
      0.4048
    ],
    106: [
      0.19444,
      0.69326,
      0.0622,
      0,
      0.47083
    ],
    107: [
      0,
      0.69444,
      0.01852,
      0,
      0.6037
    ],
    108: [
      0,
      0.69444,
      88e-4,
      0,
      0.34815
    ],
    109: [
      0,
      0.44444,
      0,
      0,
      1.0324
    ],
    110: [
      0,
      0.44444,
      0,
      0,
      0.71296
    ],
    111: [
      0,
      0.44444,
      0,
      0,
      0.58472
    ],
    112: [
      0.19444,
      0.44444,
      0,
      0,
      0.60092
    ],
    113: [
      0.19444,
      0.44444,
      0.03704,
      0,
      0.54213
    ],
    114: [
      0,
      0.44444,
      0.03194,
      0,
      0.5287
    ],
    115: [
      0,
      0.44444,
      0,
      0,
      0.53125
    ],
    116: [
      0,
      0.63492,
      0,
      0,
      0.41528
    ],
    117: [
      0,
      0.44444,
      0,
      0,
      0.68102
    ],
    118: [
      0,
      0.44444,
      0.03704,
      0,
      0.56666
    ],
    119: [
      0,
      0.44444,
      0.02778,
      0,
      0.83148
    ],
    120: [
      0,
      0.44444,
      0,
      0,
      0.65903
    ],
    121: [
      0.19444,
      0.44444,
      0.03704,
      0,
      0.59028
    ],
    122: [
      0,
      0.44444,
      0.04213,
      0,
      0.55509
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    915: [
      0,
      0.68611,
      0.15972,
      0,
      0.65694
    ],
    916: [
      0,
      0.68611,
      0,
      0,
      0.95833
    ],
    920: [
      0,
      0.68611,
      0.03194,
      0,
      0.86722
    ],
    923: [
      0,
      0.68611,
      0,
      0,
      0.80555
    ],
    926: [
      0,
      0.68611,
      0.07458,
      0,
      0.84125
    ],
    928: [
      0,
      0.68611,
      0.08229,
      0,
      0.98229
    ],
    931: [
      0,
      0.68611,
      0.05451,
      0,
      0.88507
    ],
    933: [
      0,
      0.68611,
      0.15972,
      0,
      0.67083
    ],
    934: [
      0,
      0.68611,
      0,
      0,
      0.76666
    ],
    936: [
      0,
      0.68611,
      0.11653,
      0,
      0.71402
    ],
    937: [
      0,
      0.68611,
      0.04835,
      0,
      0.8789
    ],
    945: [
      0,
      0.44444,
      0,
      0,
      0.76064
    ],
    946: [
      0.19444,
      0.69444,
      0.03403,
      0,
      0.65972
    ],
    947: [
      0.19444,
      0.44444,
      0.06389,
      0,
      0.59003
    ],
    948: [
      0,
      0.69444,
      0.03819,
      0,
      0.52222
    ],
    949: [
      0,
      0.44444,
      0,
      0,
      0.52882
    ],
    950: [
      0.19444,
      0.69444,
      0.06215,
      0,
      0.50833
    ],
    951: [
      0.19444,
      0.44444,
      0.03704,
      0,
      0.6
    ],
    952: [
      0,
      0.69444,
      0.03194,
      0,
      0.5618
    ],
    953: [
      0,
      0.44444,
      0,
      0,
      0.41204
    ],
    954: [
      0,
      0.44444,
      0,
      0,
      0.66759
    ],
    955: [
      0,
      0.69444,
      0,
      0,
      0.67083
    ],
    956: [
      0.19444,
      0.44444,
      0,
      0,
      0.70787
    ],
    957: [
      0,
      0.44444,
      0.06898,
      0,
      0.57685
    ],
    958: [
      0.19444,
      0.69444,
      0.03021,
      0,
      0.50833
    ],
    959: [
      0,
      0.44444,
      0,
      0,
      0.58472
    ],
    960: [
      0,
      0.44444,
      0.03704,
      0,
      0.68241
    ],
    961: [
      0.19444,
      0.44444,
      0,
      0,
      0.6118
    ],
    962: [
      0.09722,
      0.44444,
      0.07917,
      0,
      0.42361
    ],
    963: [
      0,
      0.44444,
      0.03704,
      0,
      0.68588
    ],
    964: [
      0,
      0.44444,
      0.13472,
      0,
      0.52083
    ],
    965: [
      0,
      0.44444,
      0.03704,
      0,
      0.63055
    ],
    966: [
      0.19444,
      0.44444,
      0,
      0,
      0.74722
    ],
    967: [
      0.19444,
      0.44444,
      0,
      0,
      0.71805
    ],
    968: [
      0.19444,
      0.69444,
      0.03704,
      0,
      0.75833
    ],
    969: [
      0,
      0.44444,
      0.03704,
      0,
      0.71782
    ],
    977: [
      0,
      0.69444,
      0,
      0,
      0.69155
    ],
    981: [
      0.19444,
      0.69444,
      0,
      0,
      0.7125
    ],
    982: [
      0,
      0.44444,
      0.03194,
      0,
      0.975
    ],
    1009: [
      0.19444,
      0.44444,
      0,
      0,
      0.6118
    ],
    1013: [
      0,
      0.44444,
      0,
      0,
      0.48333
    ],
    57649: [
      0,
      0.44444,
      0,
      0,
      0.39352
    ],
    57911: [
      0.19444,
      0.44444,
      0,
      0,
      0.43889
    ]
  },
  "Math-Italic": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    48: [
      0,
      0.43056,
      0,
      0,
      0.5
    ],
    49: [
      0,
      0.43056,
      0,
      0,
      0.5
    ],
    50: [
      0,
      0.43056,
      0,
      0,
      0.5
    ],
    51: [
      0.19444,
      0.43056,
      0,
      0,
      0.5
    ],
    52: [
      0.19444,
      0.43056,
      0,
      0,
      0.5
    ],
    53: [
      0.19444,
      0.43056,
      0,
      0,
      0.5
    ],
    54: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    55: [
      0.19444,
      0.43056,
      0,
      0,
      0.5
    ],
    56: [
      0,
      0.64444,
      0,
      0,
      0.5
    ],
    57: [
      0.19444,
      0.43056,
      0,
      0,
      0.5
    ],
    65: [
      0,
      0.68333,
      0,
      0.13889,
      0.75
    ],
    66: [
      0,
      0.68333,
      0.05017,
      0.08334,
      0.75851
    ],
    67: [
      0,
      0.68333,
      0.07153,
      0.08334,
      0.71472
    ],
    68: [
      0,
      0.68333,
      0.02778,
      0.05556,
      0.82792
    ],
    69: [
      0,
      0.68333,
      0.05764,
      0.08334,
      0.7382
    ],
    70: [
      0,
      0.68333,
      0.13889,
      0.08334,
      0.64306
    ],
    71: [
      0,
      0.68333,
      0,
      0.08334,
      0.78625
    ],
    72: [
      0,
      0.68333,
      0.08125,
      0.05556,
      0.83125
    ],
    73: [
      0,
      0.68333,
      0.07847,
      0.11111,
      0.43958
    ],
    74: [
      0,
      0.68333,
      0.09618,
      0.16667,
      0.55451
    ],
    75: [
      0,
      0.68333,
      0.07153,
      0.05556,
      0.84931
    ],
    76: [
      0,
      0.68333,
      0,
      0.02778,
      0.68056
    ],
    77: [
      0,
      0.68333,
      0.10903,
      0.08334,
      0.97014
    ],
    78: [
      0,
      0.68333,
      0.10903,
      0.08334,
      0.80347
    ],
    79: [
      0,
      0.68333,
      0.02778,
      0.08334,
      0.76278
    ],
    80: [
      0,
      0.68333,
      0.13889,
      0.08334,
      0.64201
    ],
    81: [
      0.19444,
      0.68333,
      0,
      0.08334,
      0.79056
    ],
    82: [
      0,
      0.68333,
      773e-5,
      0.08334,
      0.75929
    ],
    83: [
      0,
      0.68333,
      0.05764,
      0.08334,
      0.6132
    ],
    84: [
      0,
      0.68333,
      0.13889,
      0.08334,
      0.58438
    ],
    85: [
      0,
      0.68333,
      0.10903,
      0.02778,
      0.68278
    ],
    86: [
      0,
      0.68333,
      0.22222,
      0,
      0.58333
    ],
    87: [
      0,
      0.68333,
      0.13889,
      0,
      0.94445
    ],
    88: [
      0,
      0.68333,
      0.07847,
      0.08334,
      0.82847
    ],
    89: [
      0,
      0.68333,
      0.22222,
      0,
      0.58056
    ],
    90: [
      0,
      0.68333,
      0.07153,
      0.08334,
      0.68264
    ],
    97: [
      0,
      0.43056,
      0,
      0,
      0.52859
    ],
    98: [
      0,
      0.69444,
      0,
      0,
      0.42917
    ],
    99: [
      0,
      0.43056,
      0,
      0.05556,
      0.43276
    ],
    100: [
      0,
      0.69444,
      0,
      0.16667,
      0.52049
    ],
    101: [
      0,
      0.43056,
      0,
      0.05556,
      0.46563
    ],
    102: [
      0.19444,
      0.69444,
      0.10764,
      0.16667,
      0.48959
    ],
    103: [
      0.19444,
      0.43056,
      0.03588,
      0.02778,
      0.47697
    ],
    104: [
      0,
      0.69444,
      0,
      0,
      0.57616
    ],
    105: [
      0,
      0.65952,
      0,
      0,
      0.34451
    ],
    106: [
      0.19444,
      0.65952,
      0.05724,
      0,
      0.41181
    ],
    107: [
      0,
      0.69444,
      0.03148,
      0,
      0.5206
    ],
    108: [
      0,
      0.69444,
      0.01968,
      0.08334,
      0.29838
    ],
    109: [
      0,
      0.43056,
      0,
      0,
      0.87801
    ],
    110: [
      0,
      0.43056,
      0,
      0,
      0.60023
    ],
    111: [
      0,
      0.43056,
      0,
      0.05556,
      0.48472
    ],
    112: [
      0.19444,
      0.43056,
      0,
      0.08334,
      0.50313
    ],
    113: [
      0.19444,
      0.43056,
      0.03588,
      0.08334,
      0.44641
    ],
    114: [
      0,
      0.43056,
      0.02778,
      0.05556,
      0.45116
    ],
    115: [
      0,
      0.43056,
      0,
      0.05556,
      0.46875
    ],
    116: [
      0,
      0.61508,
      0,
      0.08334,
      0.36111
    ],
    117: [
      0,
      0.43056,
      0,
      0.02778,
      0.57246
    ],
    118: [
      0,
      0.43056,
      0.03588,
      0.02778,
      0.48472
    ],
    119: [
      0,
      0.43056,
      0.02691,
      0.08334,
      0.71592
    ],
    120: [
      0,
      0.43056,
      0,
      0.02778,
      0.57153
    ],
    121: [
      0.19444,
      0.43056,
      0.03588,
      0.05556,
      0.49028
    ],
    122: [
      0,
      0.43056,
      0.04398,
      0.05556,
      0.46505
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    915: [
      0,
      0.68333,
      0.13889,
      0.08334,
      0.61528
    ],
    916: [
      0,
      0.68333,
      0,
      0.16667,
      0.83334
    ],
    920: [
      0,
      0.68333,
      0.02778,
      0.08334,
      0.76278
    ],
    923: [
      0,
      0.68333,
      0,
      0.16667,
      0.69445
    ],
    926: [
      0,
      0.68333,
      0.07569,
      0.08334,
      0.74236
    ],
    928: [
      0,
      0.68333,
      0.08125,
      0.05556,
      0.83125
    ],
    931: [
      0,
      0.68333,
      0.05764,
      0.08334,
      0.77986
    ],
    933: [
      0,
      0.68333,
      0.13889,
      0.05556,
      0.58333
    ],
    934: [
      0,
      0.68333,
      0,
      0.08334,
      0.66667
    ],
    936: [
      0,
      0.68333,
      0.11,
      0.05556,
      0.61222
    ],
    937: [
      0,
      0.68333,
      0.05017,
      0.08334,
      0.7724
    ],
    945: [
      0,
      0.43056,
      37e-4,
      0.02778,
      0.6397
    ],
    946: [
      0.19444,
      0.69444,
      0.05278,
      0.08334,
      0.56563
    ],
    947: [
      0.19444,
      0.43056,
      0.05556,
      0,
      0.51773
    ],
    948: [
      0,
      0.69444,
      0.03785,
      0.05556,
      0.44444
    ],
    949: [
      0,
      0.43056,
      0,
      0.08334,
      0.46632
    ],
    950: [
      0.19444,
      0.69444,
      0.07378,
      0.08334,
      0.4375
    ],
    951: [
      0.19444,
      0.43056,
      0.03588,
      0.05556,
      0.49653
    ],
    952: [
      0,
      0.69444,
      0.02778,
      0.08334,
      0.46944
    ],
    953: [
      0,
      0.43056,
      0,
      0.05556,
      0.35394
    ],
    954: [
      0,
      0.43056,
      0,
      0,
      0.57616
    ],
    955: [
      0,
      0.69444,
      0,
      0,
      0.58334
    ],
    956: [
      0.19444,
      0.43056,
      0,
      0.02778,
      0.60255
    ],
    957: [
      0,
      0.43056,
      0.06366,
      0.02778,
      0.49398
    ],
    958: [
      0.19444,
      0.69444,
      0.04601,
      0.11111,
      0.4375
    ],
    959: [
      0,
      0.43056,
      0,
      0.05556,
      0.48472
    ],
    960: [
      0,
      0.43056,
      0.03588,
      0,
      0.57003
    ],
    961: [
      0.19444,
      0.43056,
      0,
      0.08334,
      0.51702
    ],
    962: [
      0.09722,
      0.43056,
      0.07986,
      0.08334,
      0.36285
    ],
    963: [
      0,
      0.43056,
      0.03588,
      0,
      0.57141
    ],
    964: [
      0,
      0.43056,
      0.1132,
      0.02778,
      0.43715
    ],
    965: [
      0,
      0.43056,
      0.03588,
      0.02778,
      0.54028
    ],
    966: [
      0.19444,
      0.43056,
      0,
      0.08334,
      0.65417
    ],
    967: [
      0.19444,
      0.43056,
      0,
      0.05556,
      0.62569
    ],
    968: [
      0.19444,
      0.69444,
      0.03588,
      0.11111,
      0.65139
    ],
    969: [
      0,
      0.43056,
      0.03588,
      0,
      0.62245
    ],
    977: [
      0,
      0.69444,
      0,
      0.08334,
      0.59144
    ],
    981: [
      0.19444,
      0.69444,
      0,
      0.08334,
      0.59583
    ],
    982: [
      0,
      0.43056,
      0.02778,
      0,
      0.82813
    ],
    1009: [
      0.19444,
      0.43056,
      0,
      0.08334,
      0.51702
    ],
    1013: [
      0,
      0.43056,
      0,
      0.05556,
      0.4059
    ],
    57649: [
      0,
      0.43056,
      0,
      0.02778,
      0.32246
    ],
    57911: [
      0.19444,
      0.43056,
      0,
      0.08334,
      0.38403
    ]
  },
  "SansSerif-Bold": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    33: [
      0,
      0.69444,
      0,
      0,
      0.36667
    ],
    34: [
      0,
      0.69444,
      0,
      0,
      0.55834
    ],
    35: [
      0.19444,
      0.69444,
      0,
      0,
      0.91667
    ],
    36: [
      0.05556,
      0.75,
      0,
      0,
      0.55
    ],
    37: [
      0.05556,
      0.75,
      0,
      0,
      1.02912
    ],
    38: [
      0,
      0.69444,
      0,
      0,
      0.83056
    ],
    39: [
      0,
      0.69444,
      0,
      0,
      0.30556
    ],
    40: [
      0.25,
      0.75,
      0,
      0,
      0.42778
    ],
    41: [
      0.25,
      0.75,
      0,
      0,
      0.42778
    ],
    42: [
      0,
      0.75,
      0,
      0,
      0.55
    ],
    43: [
      0.11667,
      0.61667,
      0,
      0,
      0.85556
    ],
    44: [
      0.10556,
      0.13056,
      0,
      0,
      0.30556
    ],
    45: [
      0,
      0.45833,
      0,
      0,
      0.36667
    ],
    46: [
      0,
      0.13056,
      0,
      0,
      0.30556
    ],
    47: [
      0.25,
      0.75,
      0,
      0,
      0.55
    ],
    48: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    49: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    50: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    51: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    52: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    53: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    54: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    55: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    56: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    57: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    58: [
      0,
      0.45833,
      0,
      0,
      0.30556
    ],
    59: [
      0.10556,
      0.45833,
      0,
      0,
      0.30556
    ],
    61: [
      -0.09375,
      0.40625,
      0,
      0,
      0.85556
    ],
    63: [
      0,
      0.69444,
      0,
      0,
      0.51945
    ],
    64: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    65: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    66: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    67: [
      0,
      0.69444,
      0,
      0,
      0.70278
    ],
    68: [
      0,
      0.69444,
      0,
      0,
      0.79445
    ],
    69: [
      0,
      0.69444,
      0,
      0,
      0.64167
    ],
    70: [
      0,
      0.69444,
      0,
      0,
      0.61111
    ],
    71: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    72: [
      0,
      0.69444,
      0,
      0,
      0.79445
    ],
    73: [
      0,
      0.69444,
      0,
      0,
      0.33056
    ],
    74: [
      0,
      0.69444,
      0,
      0,
      0.51945
    ],
    75: [
      0,
      0.69444,
      0,
      0,
      0.76389
    ],
    76: [
      0,
      0.69444,
      0,
      0,
      0.58056
    ],
    77: [
      0,
      0.69444,
      0,
      0,
      0.97778
    ],
    78: [
      0,
      0.69444,
      0,
      0,
      0.79445
    ],
    79: [
      0,
      0.69444,
      0,
      0,
      0.79445
    ],
    80: [
      0,
      0.69444,
      0,
      0,
      0.70278
    ],
    81: [
      0.10556,
      0.69444,
      0,
      0,
      0.79445
    ],
    82: [
      0,
      0.69444,
      0,
      0,
      0.70278
    ],
    83: [
      0,
      0.69444,
      0,
      0,
      0.61111
    ],
    84: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    85: [
      0,
      0.69444,
      0,
      0,
      0.76389
    ],
    86: [
      0,
      0.69444,
      0.01528,
      0,
      0.73334
    ],
    87: [
      0,
      0.69444,
      0.01528,
      0,
      1.03889
    ],
    88: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    89: [
      0,
      0.69444,
      0.0275,
      0,
      0.73334
    ],
    90: [
      0,
      0.69444,
      0,
      0,
      0.67223
    ],
    91: [
      0.25,
      0.75,
      0,
      0,
      0.34306
    ],
    93: [
      0.25,
      0.75,
      0,
      0,
      0.34306
    ],
    94: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    95: [
      0.35,
      0.10833,
      0.03056,
      0,
      0.55
    ],
    97: [
      0,
      0.45833,
      0,
      0,
      0.525
    ],
    98: [
      0,
      0.69444,
      0,
      0,
      0.56111
    ],
    99: [
      0,
      0.45833,
      0,
      0,
      0.48889
    ],
    100: [
      0,
      0.69444,
      0,
      0,
      0.56111
    ],
    101: [
      0,
      0.45833,
      0,
      0,
      0.51111
    ],
    102: [
      0,
      0.69444,
      0.07639,
      0,
      0.33611
    ],
    103: [
      0.19444,
      0.45833,
      0.01528,
      0,
      0.55
    ],
    104: [
      0,
      0.69444,
      0,
      0,
      0.56111
    ],
    105: [
      0,
      0.69444,
      0,
      0,
      0.25556
    ],
    106: [
      0.19444,
      0.69444,
      0,
      0,
      0.28611
    ],
    107: [
      0,
      0.69444,
      0,
      0,
      0.53056
    ],
    108: [
      0,
      0.69444,
      0,
      0,
      0.25556
    ],
    109: [
      0,
      0.45833,
      0,
      0,
      0.86667
    ],
    110: [
      0,
      0.45833,
      0,
      0,
      0.56111
    ],
    111: [
      0,
      0.45833,
      0,
      0,
      0.55
    ],
    112: [
      0.19444,
      0.45833,
      0,
      0,
      0.56111
    ],
    113: [
      0.19444,
      0.45833,
      0,
      0,
      0.56111
    ],
    114: [
      0,
      0.45833,
      0.01528,
      0,
      0.37222
    ],
    115: [
      0,
      0.45833,
      0,
      0,
      0.42167
    ],
    116: [
      0,
      0.58929,
      0,
      0,
      0.40417
    ],
    117: [
      0,
      0.45833,
      0,
      0,
      0.56111
    ],
    118: [
      0,
      0.45833,
      0.01528,
      0,
      0.5
    ],
    119: [
      0,
      0.45833,
      0.01528,
      0,
      0.74445
    ],
    120: [
      0,
      0.45833,
      0,
      0,
      0.5
    ],
    121: [
      0.19444,
      0.45833,
      0.01528,
      0,
      0.5
    ],
    122: [
      0,
      0.45833,
      0,
      0,
      0.47639
    ],
    126: [
      0.35,
      0.34444,
      0,
      0,
      0.55
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    168: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    176: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    180: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    184: [
      0.17014,
      0,
      0,
      0,
      0.48889
    ],
    305: [
      0,
      0.45833,
      0,
      0,
      0.25556
    ],
    567: [
      0.19444,
      0.45833,
      0,
      0,
      0.28611
    ],
    710: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    711: [
      0,
      0.63542,
      0,
      0,
      0.55
    ],
    713: [
      0,
      0.63778,
      0,
      0,
      0.55
    ],
    728: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    729: [
      0,
      0.69444,
      0,
      0,
      0.30556
    ],
    730: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    732: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    733: [
      0,
      0.69444,
      0,
      0,
      0.55
    ],
    915: [
      0,
      0.69444,
      0,
      0,
      0.58056
    ],
    916: [
      0,
      0.69444,
      0,
      0,
      0.91667
    ],
    920: [
      0,
      0.69444,
      0,
      0,
      0.85556
    ],
    923: [
      0,
      0.69444,
      0,
      0,
      0.67223
    ],
    926: [
      0,
      0.69444,
      0,
      0,
      0.73334
    ],
    928: [
      0,
      0.69444,
      0,
      0,
      0.79445
    ],
    931: [
      0,
      0.69444,
      0,
      0,
      0.79445
    ],
    933: [
      0,
      0.69444,
      0,
      0,
      0.85556
    ],
    934: [
      0,
      0.69444,
      0,
      0,
      0.79445
    ],
    936: [
      0,
      0.69444,
      0,
      0,
      0.85556
    ],
    937: [
      0,
      0.69444,
      0,
      0,
      0.79445
    ],
    8211: [
      0,
      0.45833,
      0.03056,
      0,
      0.55
    ],
    8212: [
      0,
      0.45833,
      0.03056,
      0,
      1.10001
    ],
    8216: [
      0,
      0.69444,
      0,
      0,
      0.30556
    ],
    8217: [
      0,
      0.69444,
      0,
      0,
      0.30556
    ],
    8220: [
      0,
      0.69444,
      0,
      0,
      0.55834
    ],
    8221: [
      0,
      0.69444,
      0,
      0,
      0.55834
    ]
  },
  "SansSerif-Italic": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    33: [
      0,
      0.69444,
      0.05733,
      0,
      0.31945
    ],
    34: [
      0,
      0.69444,
      316e-5,
      0,
      0.5
    ],
    35: [
      0.19444,
      0.69444,
      0.05087,
      0,
      0.83334
    ],
    36: [
      0.05556,
      0.75,
      0.11156,
      0,
      0.5
    ],
    37: [
      0.05556,
      0.75,
      0.03126,
      0,
      0.83334
    ],
    38: [
      0,
      0.69444,
      0.03058,
      0,
      0.75834
    ],
    39: [
      0,
      0.69444,
      0.07816,
      0,
      0.27778
    ],
    40: [
      0.25,
      0.75,
      0.13164,
      0,
      0.38889
    ],
    41: [
      0.25,
      0.75,
      0.02536,
      0,
      0.38889
    ],
    42: [
      0,
      0.75,
      0.11775,
      0,
      0.5
    ],
    43: [
      0.08333,
      0.58333,
      0.02536,
      0,
      0.77778
    ],
    44: [
      0.125,
      0.08333,
      0,
      0,
      0.27778
    ],
    45: [
      0,
      0.44444,
      0.01946,
      0,
      0.33333
    ],
    46: [
      0,
      0.08333,
      0,
      0,
      0.27778
    ],
    47: [
      0.25,
      0.75,
      0.13164,
      0,
      0.5
    ],
    48: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    49: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    50: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    51: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    52: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    53: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    54: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    55: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    56: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    57: [
      0,
      0.65556,
      0.11156,
      0,
      0.5
    ],
    58: [
      0,
      0.44444,
      0.02502,
      0,
      0.27778
    ],
    59: [
      0.125,
      0.44444,
      0.02502,
      0,
      0.27778
    ],
    61: [
      -0.13,
      0.37,
      0.05087,
      0,
      0.77778
    ],
    63: [
      0,
      0.69444,
      0.11809,
      0,
      0.47222
    ],
    64: [
      0,
      0.69444,
      0.07555,
      0,
      0.66667
    ],
    65: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    66: [
      0,
      0.69444,
      0.08293,
      0,
      0.66667
    ],
    67: [
      0,
      0.69444,
      0.11983,
      0,
      0.63889
    ],
    68: [
      0,
      0.69444,
      0.07555,
      0,
      0.72223
    ],
    69: [
      0,
      0.69444,
      0.11983,
      0,
      0.59722
    ],
    70: [
      0,
      0.69444,
      0.13372,
      0,
      0.56945
    ],
    71: [
      0,
      0.69444,
      0.11983,
      0,
      0.66667
    ],
    72: [
      0,
      0.69444,
      0.08094,
      0,
      0.70834
    ],
    73: [
      0,
      0.69444,
      0.13372,
      0,
      0.27778
    ],
    74: [
      0,
      0.69444,
      0.08094,
      0,
      0.47222
    ],
    75: [
      0,
      0.69444,
      0.11983,
      0,
      0.69445
    ],
    76: [
      0,
      0.69444,
      0,
      0,
      0.54167
    ],
    77: [
      0,
      0.69444,
      0.08094,
      0,
      0.875
    ],
    78: [
      0,
      0.69444,
      0.08094,
      0,
      0.70834
    ],
    79: [
      0,
      0.69444,
      0.07555,
      0,
      0.73611
    ],
    80: [
      0,
      0.69444,
      0.08293,
      0,
      0.63889
    ],
    81: [
      0.125,
      0.69444,
      0.07555,
      0,
      0.73611
    ],
    82: [
      0,
      0.69444,
      0.08293,
      0,
      0.64584
    ],
    83: [
      0,
      0.69444,
      0.09205,
      0,
      0.55556
    ],
    84: [
      0,
      0.69444,
      0.13372,
      0,
      0.68056
    ],
    85: [
      0,
      0.69444,
      0.08094,
      0,
      0.6875
    ],
    86: [
      0,
      0.69444,
      0.1615,
      0,
      0.66667
    ],
    87: [
      0,
      0.69444,
      0.1615,
      0,
      0.94445
    ],
    88: [
      0,
      0.69444,
      0.13372,
      0,
      0.66667
    ],
    89: [
      0,
      0.69444,
      0.17261,
      0,
      0.66667
    ],
    90: [
      0,
      0.69444,
      0.11983,
      0,
      0.61111
    ],
    91: [
      0.25,
      0.75,
      0.15942,
      0,
      0.28889
    ],
    93: [
      0.25,
      0.75,
      0.08719,
      0,
      0.28889
    ],
    94: [
      0,
      0.69444,
      0.0799,
      0,
      0.5
    ],
    95: [
      0.35,
      0.09444,
      0.08616,
      0,
      0.5
    ],
    97: [
      0,
      0.44444,
      981e-5,
      0,
      0.48056
    ],
    98: [
      0,
      0.69444,
      0.03057,
      0,
      0.51667
    ],
    99: [
      0,
      0.44444,
      0.08336,
      0,
      0.44445
    ],
    100: [
      0,
      0.69444,
      0.09483,
      0,
      0.51667
    ],
    101: [
      0,
      0.44444,
      0.06778,
      0,
      0.44445
    ],
    102: [
      0,
      0.69444,
      0.21705,
      0,
      0.30556
    ],
    103: [
      0.19444,
      0.44444,
      0.10836,
      0,
      0.5
    ],
    104: [
      0,
      0.69444,
      0.01778,
      0,
      0.51667
    ],
    105: [
      0,
      0.67937,
      0.09718,
      0,
      0.23889
    ],
    106: [
      0.19444,
      0.67937,
      0.09162,
      0,
      0.26667
    ],
    107: [
      0,
      0.69444,
      0.08336,
      0,
      0.48889
    ],
    108: [
      0,
      0.69444,
      0.09483,
      0,
      0.23889
    ],
    109: [
      0,
      0.44444,
      0.01778,
      0,
      0.79445
    ],
    110: [
      0,
      0.44444,
      0.01778,
      0,
      0.51667
    ],
    111: [
      0,
      0.44444,
      0.06613,
      0,
      0.5
    ],
    112: [
      0.19444,
      0.44444,
      0.0389,
      0,
      0.51667
    ],
    113: [
      0.19444,
      0.44444,
      0.04169,
      0,
      0.51667
    ],
    114: [
      0,
      0.44444,
      0.10836,
      0,
      0.34167
    ],
    115: [
      0,
      0.44444,
      0.0778,
      0,
      0.38333
    ],
    116: [
      0,
      0.57143,
      0.07225,
      0,
      0.36111
    ],
    117: [
      0,
      0.44444,
      0.04169,
      0,
      0.51667
    ],
    118: [
      0,
      0.44444,
      0.10836,
      0,
      0.46111
    ],
    119: [
      0,
      0.44444,
      0.10836,
      0,
      0.68334
    ],
    120: [
      0,
      0.44444,
      0.09169,
      0,
      0.46111
    ],
    121: [
      0.19444,
      0.44444,
      0.10836,
      0,
      0.46111
    ],
    122: [
      0,
      0.44444,
      0.08752,
      0,
      0.43472
    ],
    126: [
      0.35,
      0.32659,
      0.08826,
      0,
      0.5
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    168: [
      0,
      0.67937,
      0.06385,
      0,
      0.5
    ],
    176: [
      0,
      0.69444,
      0,
      0,
      0.73752
    ],
    184: [
      0.17014,
      0,
      0,
      0,
      0.44445
    ],
    305: [
      0,
      0.44444,
      0.04169,
      0,
      0.23889
    ],
    567: [
      0.19444,
      0.44444,
      0.04169,
      0,
      0.26667
    ],
    710: [
      0,
      0.69444,
      0.0799,
      0,
      0.5
    ],
    711: [
      0,
      0.63194,
      0.08432,
      0,
      0.5
    ],
    713: [
      0,
      0.60889,
      0.08776,
      0,
      0.5
    ],
    714: [
      0,
      0.69444,
      0.09205,
      0,
      0.5
    ],
    715: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    728: [
      0,
      0.69444,
      0.09483,
      0,
      0.5
    ],
    729: [
      0,
      0.67937,
      0.07774,
      0,
      0.27778
    ],
    730: [
      0,
      0.69444,
      0,
      0,
      0.73752
    ],
    732: [
      0,
      0.67659,
      0.08826,
      0,
      0.5
    ],
    733: [
      0,
      0.69444,
      0.09205,
      0,
      0.5
    ],
    915: [
      0,
      0.69444,
      0.13372,
      0,
      0.54167
    ],
    916: [
      0,
      0.69444,
      0,
      0,
      0.83334
    ],
    920: [
      0,
      0.69444,
      0.07555,
      0,
      0.77778
    ],
    923: [
      0,
      0.69444,
      0,
      0,
      0.61111
    ],
    926: [
      0,
      0.69444,
      0.12816,
      0,
      0.66667
    ],
    928: [
      0,
      0.69444,
      0.08094,
      0,
      0.70834
    ],
    931: [
      0,
      0.69444,
      0.11983,
      0,
      0.72222
    ],
    933: [
      0,
      0.69444,
      0.09031,
      0,
      0.77778
    ],
    934: [
      0,
      0.69444,
      0.04603,
      0,
      0.72222
    ],
    936: [
      0,
      0.69444,
      0.09031,
      0,
      0.77778
    ],
    937: [
      0,
      0.69444,
      0.08293,
      0,
      0.72222
    ],
    8211: [
      0,
      0.44444,
      0.08616,
      0,
      0.5
    ],
    8212: [
      0,
      0.44444,
      0.08616,
      0,
      1
    ],
    8216: [
      0,
      0.69444,
      0.07816,
      0,
      0.27778
    ],
    8217: [
      0,
      0.69444,
      0.07816,
      0,
      0.27778
    ],
    8220: [
      0,
      0.69444,
      0.14205,
      0,
      0.5
    ],
    8221: [
      0,
      0.69444,
      316e-5,
      0,
      0.5
    ]
  },
  "SansSerif-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    33: [
      0,
      0.69444,
      0,
      0,
      0.31945
    ],
    34: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    35: [
      0.19444,
      0.69444,
      0,
      0,
      0.83334
    ],
    36: [
      0.05556,
      0.75,
      0,
      0,
      0.5
    ],
    37: [
      0.05556,
      0.75,
      0,
      0,
      0.83334
    ],
    38: [
      0,
      0.69444,
      0,
      0,
      0.75834
    ],
    39: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    40: [
      0.25,
      0.75,
      0,
      0,
      0.38889
    ],
    41: [
      0.25,
      0.75,
      0,
      0,
      0.38889
    ],
    42: [
      0,
      0.75,
      0,
      0,
      0.5
    ],
    43: [
      0.08333,
      0.58333,
      0,
      0,
      0.77778
    ],
    44: [
      0.125,
      0.08333,
      0,
      0,
      0.27778
    ],
    45: [
      0,
      0.44444,
      0,
      0,
      0.33333
    ],
    46: [
      0,
      0.08333,
      0,
      0,
      0.27778
    ],
    47: [
      0.25,
      0.75,
      0,
      0,
      0.5
    ],
    48: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    49: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    50: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    51: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    52: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    53: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    54: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    55: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    56: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    57: [
      0,
      0.65556,
      0,
      0,
      0.5
    ],
    58: [
      0,
      0.44444,
      0,
      0,
      0.27778
    ],
    59: [
      0.125,
      0.44444,
      0,
      0,
      0.27778
    ],
    61: [
      -0.13,
      0.37,
      0,
      0,
      0.77778
    ],
    63: [
      0,
      0.69444,
      0,
      0,
      0.47222
    ],
    64: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    65: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    66: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    67: [
      0,
      0.69444,
      0,
      0,
      0.63889
    ],
    68: [
      0,
      0.69444,
      0,
      0,
      0.72223
    ],
    69: [
      0,
      0.69444,
      0,
      0,
      0.59722
    ],
    70: [
      0,
      0.69444,
      0,
      0,
      0.56945
    ],
    71: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    72: [
      0,
      0.69444,
      0,
      0,
      0.70834
    ],
    73: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    74: [
      0,
      0.69444,
      0,
      0,
      0.47222
    ],
    75: [
      0,
      0.69444,
      0,
      0,
      0.69445
    ],
    76: [
      0,
      0.69444,
      0,
      0,
      0.54167
    ],
    77: [
      0,
      0.69444,
      0,
      0,
      0.875
    ],
    78: [
      0,
      0.69444,
      0,
      0,
      0.70834
    ],
    79: [
      0,
      0.69444,
      0,
      0,
      0.73611
    ],
    80: [
      0,
      0.69444,
      0,
      0,
      0.63889
    ],
    81: [
      0.125,
      0.69444,
      0,
      0,
      0.73611
    ],
    82: [
      0,
      0.69444,
      0,
      0,
      0.64584
    ],
    83: [
      0,
      0.69444,
      0,
      0,
      0.55556
    ],
    84: [
      0,
      0.69444,
      0,
      0,
      0.68056
    ],
    85: [
      0,
      0.69444,
      0,
      0,
      0.6875
    ],
    86: [
      0,
      0.69444,
      0.01389,
      0,
      0.66667
    ],
    87: [
      0,
      0.69444,
      0.01389,
      0,
      0.94445
    ],
    88: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    89: [
      0,
      0.69444,
      0.025,
      0,
      0.66667
    ],
    90: [
      0,
      0.69444,
      0,
      0,
      0.61111
    ],
    91: [
      0.25,
      0.75,
      0,
      0,
      0.28889
    ],
    93: [
      0.25,
      0.75,
      0,
      0,
      0.28889
    ],
    94: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    95: [
      0.35,
      0.09444,
      0.02778,
      0,
      0.5
    ],
    97: [
      0,
      0.44444,
      0,
      0,
      0.48056
    ],
    98: [
      0,
      0.69444,
      0,
      0,
      0.51667
    ],
    99: [
      0,
      0.44444,
      0,
      0,
      0.44445
    ],
    100: [
      0,
      0.69444,
      0,
      0,
      0.51667
    ],
    101: [
      0,
      0.44444,
      0,
      0,
      0.44445
    ],
    102: [
      0,
      0.69444,
      0.06944,
      0,
      0.30556
    ],
    103: [
      0.19444,
      0.44444,
      0.01389,
      0,
      0.5
    ],
    104: [
      0,
      0.69444,
      0,
      0,
      0.51667
    ],
    105: [
      0,
      0.67937,
      0,
      0,
      0.23889
    ],
    106: [
      0.19444,
      0.67937,
      0,
      0,
      0.26667
    ],
    107: [
      0,
      0.69444,
      0,
      0,
      0.48889
    ],
    108: [
      0,
      0.69444,
      0,
      0,
      0.23889
    ],
    109: [
      0,
      0.44444,
      0,
      0,
      0.79445
    ],
    110: [
      0,
      0.44444,
      0,
      0,
      0.51667
    ],
    111: [
      0,
      0.44444,
      0,
      0,
      0.5
    ],
    112: [
      0.19444,
      0.44444,
      0,
      0,
      0.51667
    ],
    113: [
      0.19444,
      0.44444,
      0,
      0,
      0.51667
    ],
    114: [
      0,
      0.44444,
      0.01389,
      0,
      0.34167
    ],
    115: [
      0,
      0.44444,
      0,
      0,
      0.38333
    ],
    116: [
      0,
      0.57143,
      0,
      0,
      0.36111
    ],
    117: [
      0,
      0.44444,
      0,
      0,
      0.51667
    ],
    118: [
      0,
      0.44444,
      0.01389,
      0,
      0.46111
    ],
    119: [
      0,
      0.44444,
      0.01389,
      0,
      0.68334
    ],
    120: [
      0,
      0.44444,
      0,
      0,
      0.46111
    ],
    121: [
      0.19444,
      0.44444,
      0.01389,
      0,
      0.46111
    ],
    122: [
      0,
      0.44444,
      0,
      0,
      0.43472
    ],
    126: [
      0.35,
      0.32659,
      0,
      0,
      0.5
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    168: [
      0,
      0.67937,
      0,
      0,
      0.5
    ],
    176: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    184: [
      0.17014,
      0,
      0,
      0,
      0.44445
    ],
    305: [
      0,
      0.44444,
      0,
      0,
      0.23889
    ],
    567: [
      0.19444,
      0.44444,
      0,
      0,
      0.26667
    ],
    710: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    711: [
      0,
      0.63194,
      0,
      0,
      0.5
    ],
    713: [
      0,
      0.60889,
      0,
      0,
      0.5
    ],
    714: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    715: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    728: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    729: [
      0,
      0.67937,
      0,
      0,
      0.27778
    ],
    730: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    732: [
      0,
      0.67659,
      0,
      0,
      0.5
    ],
    733: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    915: [
      0,
      0.69444,
      0,
      0,
      0.54167
    ],
    916: [
      0,
      0.69444,
      0,
      0,
      0.83334
    ],
    920: [
      0,
      0.69444,
      0,
      0,
      0.77778
    ],
    923: [
      0,
      0.69444,
      0,
      0,
      0.61111
    ],
    926: [
      0,
      0.69444,
      0,
      0,
      0.66667
    ],
    928: [
      0,
      0.69444,
      0,
      0,
      0.70834
    ],
    931: [
      0,
      0.69444,
      0,
      0,
      0.72222
    ],
    933: [
      0,
      0.69444,
      0,
      0,
      0.77778
    ],
    934: [
      0,
      0.69444,
      0,
      0,
      0.72222
    ],
    936: [
      0,
      0.69444,
      0,
      0,
      0.77778
    ],
    937: [
      0,
      0.69444,
      0,
      0,
      0.72222
    ],
    8211: [
      0,
      0.44444,
      0.02778,
      0,
      0.5
    ],
    8212: [
      0,
      0.44444,
      0.02778,
      0,
      1
    ],
    8216: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    8217: [
      0,
      0.69444,
      0,
      0,
      0.27778
    ],
    8220: [
      0,
      0.69444,
      0,
      0,
      0.5
    ],
    8221: [
      0,
      0.69444,
      0,
      0,
      0.5
    ]
  },
  "Script-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    65: [
      0,
      0.7,
      0.22925,
      0,
      0.80253
    ],
    66: [
      0,
      0.7,
      0.04087,
      0,
      0.90757
    ],
    67: [
      0,
      0.7,
      0.1689,
      0,
      0.66619
    ],
    68: [
      0,
      0.7,
      0.09371,
      0,
      0.77443
    ],
    69: [
      0,
      0.7,
      0.18583,
      0,
      0.56162
    ],
    70: [
      0,
      0.7,
      0.13634,
      0,
      0.89544
    ],
    71: [
      0,
      0.7,
      0.17322,
      0,
      0.60961
    ],
    72: [
      0,
      0.7,
      0.29694,
      0,
      0.96919
    ],
    73: [
      0,
      0.7,
      0.19189,
      0,
      0.80907
    ],
    74: [
      0.27778,
      0.7,
      0.19189,
      0,
      1.05159
    ],
    75: [
      0,
      0.7,
      0.31259,
      0,
      0.91364
    ],
    76: [
      0,
      0.7,
      0.19189,
      0,
      0.87373
    ],
    77: [
      0,
      0.7,
      0.15981,
      0,
      1.08031
    ],
    78: [
      0,
      0.7,
      0.3525,
      0,
      0.9015
    ],
    79: [
      0,
      0.7,
      0.08078,
      0,
      0.73787
    ],
    80: [
      0,
      0.7,
      0.08078,
      0,
      1.01262
    ],
    81: [
      0,
      0.7,
      0.03305,
      0,
      0.88282
    ],
    82: [
      0,
      0.7,
      0.06259,
      0,
      0.85
    ],
    83: [
      0,
      0.7,
      0.19189,
      0,
      0.86767
    ],
    84: [
      0,
      0.7,
      0.29087,
      0,
      0.74697
    ],
    85: [
      0,
      0.7,
      0.25815,
      0,
      0.79996
    ],
    86: [
      0,
      0.7,
      0.27523,
      0,
      0.62204
    ],
    87: [
      0,
      0.7,
      0.27523,
      0,
      0.80532
    ],
    88: [
      0,
      0.7,
      0.26006,
      0,
      0.94445
    ],
    89: [
      0,
      0.7,
      0.2939,
      0,
      0.70961
    ],
    90: [
      0,
      0.7,
      0.24037,
      0,
      0.8212
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ]
  },
  "Size1-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    40: [
      0.35001,
      0.85,
      0,
      0,
      0.45834
    ],
    41: [
      0.35001,
      0.85,
      0,
      0,
      0.45834
    ],
    47: [
      0.35001,
      0.85,
      0,
      0,
      0.57778
    ],
    91: [
      0.35001,
      0.85,
      0,
      0,
      0.41667
    ],
    92: [
      0.35001,
      0.85,
      0,
      0,
      0.57778
    ],
    93: [
      0.35001,
      0.85,
      0,
      0,
      0.41667
    ],
    123: [
      0.35001,
      0.85,
      0,
      0,
      0.58334
    ],
    125: [
      0.35001,
      0.85,
      0,
      0,
      0.58334
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    710: [
      0,
      0.72222,
      0,
      0,
      0.55556
    ],
    732: [
      0,
      0.72222,
      0,
      0,
      0.55556
    ],
    770: [
      0,
      0.72222,
      0,
      0,
      0.55556
    ],
    771: [
      0,
      0.72222,
      0,
      0,
      0.55556
    ],
    8214: [
      -99e-5,
      0.601,
      0,
      0,
      0.77778
    ],
    8593: [
      1e-5,
      0.6,
      0,
      0,
      0.66667
    ],
    8595: [
      1e-5,
      0.6,
      0,
      0,
      0.66667
    ],
    8657: [
      1e-5,
      0.6,
      0,
      0,
      0.77778
    ],
    8659: [
      1e-5,
      0.6,
      0,
      0,
      0.77778
    ],
    8719: [
      0.25001,
      0.75,
      0,
      0,
      0.94445
    ],
    8720: [
      0.25001,
      0.75,
      0,
      0,
      0.94445
    ],
    8721: [
      0.25001,
      0.75,
      0,
      0,
      1.05556
    ],
    8730: [
      0.35001,
      0.85,
      0,
      0,
      1
    ],
    8739: [
      -599e-5,
      0.606,
      0,
      0,
      0.33333
    ],
    8741: [
      -599e-5,
      0.606,
      0,
      0,
      0.55556
    ],
    8747: [
      0.30612,
      0.805,
      0.19445,
      0,
      0.47222
    ],
    8748: [
      0.306,
      0.805,
      0.19445,
      0,
      0.47222
    ],
    8749: [
      0.306,
      0.805,
      0.19445,
      0,
      0.47222
    ],
    8750: [
      0.30612,
      0.805,
      0.19445,
      0,
      0.47222
    ],
    8896: [
      0.25001,
      0.75,
      0,
      0,
      0.83334
    ],
    8897: [
      0.25001,
      0.75,
      0,
      0,
      0.83334
    ],
    8898: [
      0.25001,
      0.75,
      0,
      0,
      0.83334
    ],
    8899: [
      0.25001,
      0.75,
      0,
      0,
      0.83334
    ],
    8968: [
      0.35001,
      0.85,
      0,
      0,
      0.47222
    ],
    8969: [
      0.35001,
      0.85,
      0,
      0,
      0.47222
    ],
    8970: [
      0.35001,
      0.85,
      0,
      0,
      0.47222
    ],
    8971: [
      0.35001,
      0.85,
      0,
      0,
      0.47222
    ],
    9168: [
      -99e-5,
      0.601,
      0,
      0,
      0.66667
    ],
    10216: [
      0.35001,
      0.85,
      0,
      0,
      0.47222
    ],
    10217: [
      0.35001,
      0.85,
      0,
      0,
      0.47222
    ],
    10752: [
      0.25001,
      0.75,
      0,
      0,
      1.11111
    ],
    10753: [
      0.25001,
      0.75,
      0,
      0,
      1.11111
    ],
    10754: [
      0.25001,
      0.75,
      0,
      0,
      1.11111
    ],
    10756: [
      0.25001,
      0.75,
      0,
      0,
      0.83334
    ],
    10758: [
      0.25001,
      0.75,
      0,
      0,
      0.83334
    ]
  },
  "Size2-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    40: [
      0.65002,
      1.15,
      0,
      0,
      0.59722
    ],
    41: [
      0.65002,
      1.15,
      0,
      0,
      0.59722
    ],
    47: [
      0.65002,
      1.15,
      0,
      0,
      0.81111
    ],
    91: [
      0.65002,
      1.15,
      0,
      0,
      0.47222
    ],
    92: [
      0.65002,
      1.15,
      0,
      0,
      0.81111
    ],
    93: [
      0.65002,
      1.15,
      0,
      0,
      0.47222
    ],
    123: [
      0.65002,
      1.15,
      0,
      0,
      0.66667
    ],
    125: [
      0.65002,
      1.15,
      0,
      0,
      0.66667
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    710: [
      0,
      0.75,
      0,
      0,
      1
    ],
    732: [
      0,
      0.75,
      0,
      0,
      1
    ],
    770: [
      0,
      0.75,
      0,
      0,
      1
    ],
    771: [
      0,
      0.75,
      0,
      0,
      1
    ],
    8719: [
      0.55001,
      1.05,
      0,
      0,
      1.27778
    ],
    8720: [
      0.55001,
      1.05,
      0,
      0,
      1.27778
    ],
    8721: [
      0.55001,
      1.05,
      0,
      0,
      1.44445
    ],
    8730: [
      0.65002,
      1.15,
      0,
      0,
      1
    ],
    8747: [
      0.86225,
      1.36,
      0.44445,
      0,
      0.55556
    ],
    8748: [
      0.862,
      1.36,
      0.44445,
      0,
      0.55556
    ],
    8749: [
      0.862,
      1.36,
      0.44445,
      0,
      0.55556
    ],
    8750: [
      0.86225,
      1.36,
      0.44445,
      0,
      0.55556
    ],
    8896: [
      0.55001,
      1.05,
      0,
      0,
      1.11111
    ],
    8897: [
      0.55001,
      1.05,
      0,
      0,
      1.11111
    ],
    8898: [
      0.55001,
      1.05,
      0,
      0,
      1.11111
    ],
    8899: [
      0.55001,
      1.05,
      0,
      0,
      1.11111
    ],
    8968: [
      0.65002,
      1.15,
      0,
      0,
      0.52778
    ],
    8969: [
      0.65002,
      1.15,
      0,
      0,
      0.52778
    ],
    8970: [
      0.65002,
      1.15,
      0,
      0,
      0.52778
    ],
    8971: [
      0.65002,
      1.15,
      0,
      0,
      0.52778
    ],
    10216: [
      0.65002,
      1.15,
      0,
      0,
      0.61111
    ],
    10217: [
      0.65002,
      1.15,
      0,
      0,
      0.61111
    ],
    10752: [
      0.55001,
      1.05,
      0,
      0,
      1.51112
    ],
    10753: [
      0.55001,
      1.05,
      0,
      0,
      1.51112
    ],
    10754: [
      0.55001,
      1.05,
      0,
      0,
      1.51112
    ],
    10756: [
      0.55001,
      1.05,
      0,
      0,
      1.11111
    ],
    10758: [
      0.55001,
      1.05,
      0,
      0,
      1.11111
    ]
  },
  "Size3-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    40: [
      0.95003,
      1.45,
      0,
      0,
      0.73611
    ],
    41: [
      0.95003,
      1.45,
      0,
      0,
      0.73611
    ],
    47: [
      0.95003,
      1.45,
      0,
      0,
      1.04445
    ],
    91: [
      0.95003,
      1.45,
      0,
      0,
      0.52778
    ],
    92: [
      0.95003,
      1.45,
      0,
      0,
      1.04445
    ],
    93: [
      0.95003,
      1.45,
      0,
      0,
      0.52778
    ],
    123: [
      0.95003,
      1.45,
      0,
      0,
      0.75
    ],
    125: [
      0.95003,
      1.45,
      0,
      0,
      0.75
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    710: [
      0,
      0.75,
      0,
      0,
      1.44445
    ],
    732: [
      0,
      0.75,
      0,
      0,
      1.44445
    ],
    770: [
      0,
      0.75,
      0,
      0,
      1.44445
    ],
    771: [
      0,
      0.75,
      0,
      0,
      1.44445
    ],
    8730: [
      0.95003,
      1.45,
      0,
      0,
      1
    ],
    8968: [
      0.95003,
      1.45,
      0,
      0,
      0.58334
    ],
    8969: [
      0.95003,
      1.45,
      0,
      0,
      0.58334
    ],
    8970: [
      0.95003,
      1.45,
      0,
      0,
      0.58334
    ],
    8971: [
      0.95003,
      1.45,
      0,
      0,
      0.58334
    ],
    10216: [
      0.95003,
      1.45,
      0,
      0,
      0.75
    ],
    10217: [
      0.95003,
      1.45,
      0,
      0,
      0.75
    ]
  },
  "Size4-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.25
    ],
    40: [
      1.25003,
      1.75,
      0,
      0,
      0.79167
    ],
    41: [
      1.25003,
      1.75,
      0,
      0,
      0.79167
    ],
    47: [
      1.25003,
      1.75,
      0,
      0,
      1.27778
    ],
    91: [
      1.25003,
      1.75,
      0,
      0,
      0.58334
    ],
    92: [
      1.25003,
      1.75,
      0,
      0,
      1.27778
    ],
    93: [
      1.25003,
      1.75,
      0,
      0,
      0.58334
    ],
    123: [
      1.25003,
      1.75,
      0,
      0,
      0.80556
    ],
    125: [
      1.25003,
      1.75,
      0,
      0,
      0.80556
    ],
    160: [
      0,
      0,
      0,
      0,
      0.25
    ],
    710: [
      0,
      0.825,
      0,
      0,
      1.8889
    ],
    732: [
      0,
      0.825,
      0,
      0,
      1.8889
    ],
    770: [
      0,
      0.825,
      0,
      0,
      1.8889
    ],
    771: [
      0,
      0.825,
      0,
      0,
      1.8889
    ],
    8730: [
      1.25003,
      1.75,
      0,
      0,
      1
    ],
    8968: [
      1.25003,
      1.75,
      0,
      0,
      0.63889
    ],
    8969: [
      1.25003,
      1.75,
      0,
      0,
      0.63889
    ],
    8970: [
      1.25003,
      1.75,
      0,
      0,
      0.63889
    ],
    8971: [
      1.25003,
      1.75,
      0,
      0,
      0.63889
    ],
    9115: [
      0.64502,
      1.155,
      0,
      0,
      0.875
    ],
    9116: [
      1e-5,
      0.6,
      0,
      0,
      0.875
    ],
    9117: [
      0.64502,
      1.155,
      0,
      0,
      0.875
    ],
    9118: [
      0.64502,
      1.155,
      0,
      0,
      0.875
    ],
    9119: [
      1e-5,
      0.6,
      0,
      0,
      0.875
    ],
    9120: [
      0.64502,
      1.155,
      0,
      0,
      0.875
    ],
    9121: [
      0.64502,
      1.155,
      0,
      0,
      0.66667
    ],
    9122: [
      -99e-5,
      0.601,
      0,
      0,
      0.66667
    ],
    9123: [
      0.64502,
      1.155,
      0,
      0,
      0.66667
    ],
    9124: [
      0.64502,
      1.155,
      0,
      0,
      0.66667
    ],
    9125: [
      -99e-5,
      0.601,
      0,
      0,
      0.66667
    ],
    9126: [
      0.64502,
      1.155,
      0,
      0,
      0.66667
    ],
    9127: [
      1e-5,
      0.9,
      0,
      0,
      0.88889
    ],
    9128: [
      0.65002,
      1.15,
      0,
      0,
      0.88889
    ],
    9129: [
      0.90001,
      0,
      0,
      0,
      0.88889
    ],
    9130: [
      0,
      0.3,
      0,
      0,
      0.88889
    ],
    9131: [
      1e-5,
      0.9,
      0,
      0,
      0.88889
    ],
    9132: [
      0.65002,
      1.15,
      0,
      0,
      0.88889
    ],
    9133: [
      0.90001,
      0,
      0,
      0,
      0.88889
    ],
    9143: [
      0.88502,
      0.915,
      0,
      0,
      1.05556
    ],
    10216: [
      1.25003,
      1.75,
      0,
      0,
      0.80556
    ],
    10217: [
      1.25003,
      1.75,
      0,
      0,
      0.80556
    ],
    57344: [
      -499e-5,
      0.605,
      0,
      0,
      1.05556
    ],
    57345: [
      -499e-5,
      0.605,
      0,
      0,
      1.05556
    ],
    57680: [
      0,
      0.12,
      0,
      0,
      0.45
    ],
    57681: [
      0,
      0.12,
      0,
      0,
      0.45
    ],
    57682: [
      0,
      0.12,
      0,
      0,
      0.45
    ],
    57683: [
      0,
      0.12,
      0,
      0,
      0.45
    ]
  },
  "Typewriter-Regular": {
    32: [
      0,
      0,
      0,
      0,
      0.525
    ],
    33: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    34: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    35: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    36: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    37: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    38: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    39: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    40: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    41: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    42: [
      0,
      0.52083,
      0,
      0,
      0.525
    ],
    43: [
      -0.08056,
      0.53055,
      0,
      0,
      0.525
    ],
    44: [
      0.13889,
      0.125,
      0,
      0,
      0.525
    ],
    45: [
      -0.08056,
      0.53055,
      0,
      0,
      0.525
    ],
    46: [
      0,
      0.125,
      0,
      0,
      0.525
    ],
    47: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    48: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    49: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    50: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    51: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    52: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    53: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    54: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    55: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    56: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    57: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    58: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    59: [
      0.13889,
      0.43056,
      0,
      0,
      0.525
    ],
    60: [
      -0.05556,
      0.55556,
      0,
      0,
      0.525
    ],
    61: [
      -0.19549,
      0.41562,
      0,
      0,
      0.525
    ],
    62: [
      -0.05556,
      0.55556,
      0,
      0,
      0.525
    ],
    63: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    64: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    65: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    66: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    67: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    68: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    69: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    70: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    71: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    72: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    73: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    74: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    75: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    76: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    77: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    78: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    79: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    80: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    81: [
      0.13889,
      0.61111,
      0,
      0,
      0.525
    ],
    82: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    83: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    84: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    85: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    86: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    87: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    88: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    89: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    90: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    91: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    92: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    93: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    94: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    95: [
      0.09514,
      0,
      0,
      0,
      0.525
    ],
    96: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    97: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    98: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    99: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    100: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    101: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    102: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    103: [
      0.22222,
      0.43056,
      0,
      0,
      0.525
    ],
    104: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    105: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    106: [
      0.22222,
      0.61111,
      0,
      0,
      0.525
    ],
    107: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    108: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    109: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    110: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    111: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    112: [
      0.22222,
      0.43056,
      0,
      0,
      0.525
    ],
    113: [
      0.22222,
      0.43056,
      0,
      0,
      0.525
    ],
    114: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    115: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    116: [
      0,
      0.55358,
      0,
      0,
      0.525
    ],
    117: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    118: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    119: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    120: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    121: [
      0.22222,
      0.43056,
      0,
      0,
      0.525
    ],
    122: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    123: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    124: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    125: [
      0.08333,
      0.69444,
      0,
      0,
      0.525
    ],
    126: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    127: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    160: [
      0,
      0,
      0,
      0,
      0.525
    ],
    176: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    184: [
      0.19445,
      0,
      0,
      0,
      0.525
    ],
    305: [
      0,
      0.43056,
      0,
      0,
      0.525
    ],
    567: [
      0.22222,
      0.43056,
      0,
      0,
      0.525
    ],
    711: [
      0,
      0.56597,
      0,
      0,
      0.525
    ],
    713: [
      0,
      0.56555,
      0,
      0,
      0.525
    ],
    714: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    715: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    728: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    730: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    770: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    771: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    776: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    915: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    916: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    920: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    923: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    926: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    928: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    931: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    933: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    934: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    936: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    937: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    8216: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    8217: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    8242: [
      0,
      0.61111,
      0,
      0,
      0.525
    ],
    9251: [
      0.11111,
      0.21944,
      0,
      0,
      0.525
    ]
  }
}, we = {
  slant: [
    0.25,
    0.25,
    0.25
  ],
  space: [
    0,
    0,
    0
  ],
  stretch: [
    0,
    0,
    0
  ],
  shrink: [
    0,
    0,
    0
  ],
  xHeight: [
    0.431,
    0.431,
    0.431
  ],
  quad: [
    1,
    1.171,
    1.472
  ],
  extraSpace: [
    0,
    0,
    0
  ],
  num1: [
    0.677,
    0.732,
    0.925
  ],
  num2: [
    0.394,
    0.384,
    0.387
  ],
  num3: [
    0.444,
    0.471,
    0.504
  ],
  denom1: [
    0.686,
    0.752,
    1.025
  ],
  denom2: [
    0.345,
    0.344,
    0.532
  ],
  sup1: [
    0.413,
    0.503,
    0.504
  ],
  sup2: [
    0.363,
    0.431,
    0.404
  ],
  sup3: [
    0.289,
    0.286,
    0.294
  ],
  sub1: [
    0.15,
    0.143,
    0.2
  ],
  sub2: [
    0.247,
    0.286,
    0.4
  ],
  supDrop: [
    0.386,
    0.353,
    0.494
  ],
  subDrop: [
    0.05,
    0.071,
    0.1
  ],
  delim1: [
    2.39,
    1.7,
    1.98
  ],
  delim2: [
    1.01,
    1.157,
    1.42
  ],
  axisHeight: [
    0.25,
    0.25,
    0.25
  ],
  defaultRuleThickness: [
    0.04,
    0.049,
    0.049
  ],
  bigOpSpacing1: [
    0.111,
    0.111,
    0.111
  ],
  bigOpSpacing2: [
    0.166,
    0.166,
    0.166
  ],
  bigOpSpacing3: [
    0.2,
    0.2,
    0.2
  ],
  bigOpSpacing4: [
    0.6,
    0.611,
    0.611
  ],
  bigOpSpacing5: [
    0.1,
    0.143,
    0.143
  ],
  sqrtRuleThickness: [
    0.04,
    0.04,
    0.04
  ],
  ptPerEm: [
    10,
    10,
    10
  ],
  doubleRuleSep: [
    0.2,
    0.2,
    0.2
  ],
  arrayRuleWidth: [
    0.04,
    0.04,
    0.04
  ],
  fboxsep: [
    0.3,
    0.3,
    0.3
  ],
  fboxrule: [
    0.04,
    0.04,
    0.04
  ]
}, Yt = {
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function $a(r5, e) {
  S0[r5] = e;
}
m$1($a, "setFontMetrics");
function St(r5, e, t) {
  if (!S0[e]) throw new Error("Font metrics not found for font: " + e + ".");
  var a = /* @__PURE__ */ r5.charCodeAt(0), n = S0[e][a];
  if (!n && r5[0] in Yt && (a = /* @__PURE__ */ Yt[r5[0]].charCodeAt(0), n = S0[e][a]), !n && t === "text" && wr(a) && (n = S0[e][77]), n) return {
    depth: n[0],
    height: n[1],
    italic: n[2],
    skew: n[3],
    width: n[4]
  };
}
m$1(St, "getCharacterMetrics");
var Qe = {};
function Wa(r5) {
  var e;
  if (r5 >= 5 ? e = 0 : r5 >= 3 ? e = 1 : e = 2, !Qe[e]) {
    var t = Qe[e] = {
      cssEmPerMu: we.quad[e] / 18
    };
    for (var a in we) we.hasOwnProperty(a) && (t[a] = we[a][e]);
  }
  return Qe[e];
}
m$1(Wa, "getGlobalMetrics");
var ja = [
  [
    1,
    1,
    1
  ],
  [
    2,
    1,
    1
  ],
  [
    3,
    1,
    1
  ],
  [
    4,
    2,
    1
  ],
  [
    5,
    2,
    1
  ],
  [
    6,
    3,
    1
  ],
  [
    7,
    4,
    2
  ],
  [
    8,
    6,
    3
  ],
  [
    9,
    7,
    6
  ],
  [
    10,
    8,
    7
  ],
  [
    11,
    10,
    9
  ]
], Xt = [
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], $t = /* @__PURE__ */ m$1(function(e, t) {
  return t.size < 2 ? e : ja[e - 1][t.size - 1];
}, "sizeAtStyle"), Ie = (_g = class {
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || _g.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Xt[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
    return new _g(t);
  }
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: /* @__PURE__ */ $t(this.textSize, e)
    });
  }
  havingCrampedStyle() {
    return this.havingStyle(/* @__PURE__ */ this.style.cramp());
  }
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: /* @__PURE__ */ this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: Xt[e - 1]
    });
  }
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = /* @__PURE__ */ $t(_g.BASESIZE, e);
    return this.size === t && this.textSize === _g.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: /* @__PURE__ */ this.style.text(),
      size: e
    });
  }
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  withPhantom() {
    return this.extend({
      phantom: true
    });
  }
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  sizingClasses(e) {
    return e.size !== this.size ? [
      "sizing",
      "reset-size" + e.size,
      "size" + this.size
    ] : [];
  }
  baseSizingClasses() {
    return this.size !== _g.BASESIZE ? [
      "sizing",
      "reset-size" + this.size,
      "size" + _g.BASESIZE
    ] : [];
  }
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = /* @__PURE__ */ Wa(this.size)), this._fontMetrics;
  }
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}, __7 = new WeakMap(), __privateAdd(_g, __7, m$1(_g, "Options")), _g);
Ie.BASESIZE = 6;
var mt = {
  pt: 1,
  mm: 7227 / 2540,
  cm: 7227 / 254,
  in: 72.27,
  bp: 803 / 800,
  pc: 12,
  dd: 1238 / 1157,
  cc: 14856 / 1157,
  nd: 685 / 642,
  nc: 1370 / 107,
  sp: 1 / 65536,
  px: 803 / 800
}, Za = {
  ex: true,
  em: true,
  mu: true
}, kr = /* @__PURE__ */ m$1(function(e) {
  return typeof e != "string" && (e = e.unit), e in mt || e in Za || e === "ex";
}, "validUnit"), Q = /* @__PURE__ */ m$1(function(e, t) {
  var a;
  if (e.unit in mt) a = mt[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu") a = t.fontMetrics().cssEmPerMu;
  else {
    var n;
    if (t.style.isTight() ? n = /* @__PURE__ */ t.havingStyle(/* @__PURE__ */ t.style.text()) : n = t, e.unit === "ex") a = n.fontMetrics().xHeight;
    else if (e.unit === "em") a = n.fontMetrics().quad;
    else throw new z("Invalid unit: '" + e.unit + "'");
    n !== t && (a *= n.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * a, t.maxSize);
}, "calculateSize"), T = /* @__PURE__ */ m$1(function(e) {
  return +e.toFixed(4) + "em";
}, "makeEm"), G0 = /* @__PURE__ */ m$1(function(e) {
  return e.filter((t) => t).join(" ");
}, "createClass"), Sr = /* @__PURE__ */ m$1(function(e, t, a) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var n = /* @__PURE__ */ t.getColor();
    n && (this.style.color = n);
  }
}, "initNode"), Mr = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ document.createElement(e);
  t.className = /* @__PURE__ */ G0(this.classes);
  for (var a in this.style) this.style.hasOwnProperty(a) && (t.style[a] = this.style[a]);
  for (var n in this.attributes) this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
  for (var s = 0; s < this.children.length; s++) t.appendChild(/* @__PURE__ */ this.children[s].toNode());
  return t;
}, "toNode"), zr = /* @__PURE__ */ m$1(function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + R.escape(/* @__PURE__ */ G0(this.classes)) + '"');
  var a = "";
  for (var n in this.style) this.style.hasOwnProperty(n) && (a += R.hyphenate(n) + ":" + this.style[n] + ";");
  a && (t += ' style="' + R.escape(a) + '"');
  for (var s in this.attributes) this.attributes.hasOwnProperty(s) && (t += " " + s + '="' + R.escape(this.attributes[s]) + '"');
  t += ">";
  for (var o = 0; o < this.children.length; o++) t += /* @__PURE__ */ this.children[o].toMarkup();
  return t += "</" + e + ">", t;
}, "toMarkup"), j0 = (_h = class {
  constructor(e, t, a, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Sr.call(this, e, a, n), this.children = t || [];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return R.contains(this.classes, e);
  }
  toNode() {
    return Mr.call(this, "span");
  }
  toMarkup() {
    return zr.call(this, "span");
  }
}, __8 = new WeakMap(), __privateAdd(_h, __8, m$1(_h, "Span")), _h), de = (_i = class {
  constructor(e, t, a, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Sr.call(this, t, n), this.children = a || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return R.contains(this.classes, e);
  }
  toNode() {
    return Mr.call(this, "a");
  }
  toMarkup() {
    return zr.call(this, "a");
  }
}, __9 = new WeakMap(), __privateAdd(_i, __9, m$1(_i, "Anchor")), _i), ct = (_j = class {
  constructor(e, t, a) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = [
      "mord"
    ], this.style = a;
  }
  hasClass(e) {
    return R.contains(this.classes, e);
  }
  toNode() {
    var e = /* @__PURE__ */ document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style) this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + R.escape(this.src) + '"' + (' alt="' + R.escape(this.alt) + '"'), t = "";
    for (var a in this.style) this.style.hasOwnProperty(a) && (t += R.hyphenate(a) + ":" + this.style[a] + ";");
    return t && (e += ' style="' + R.escape(t) + '"'), e += "'/>", e;
  }
}, __10 = new WeakMap(), __privateAdd(_j, __10, m$1(_j, "Img")), _j), Ka = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  ì: "ı̀"
}, h0 = (_k = class {
  constructor(e, t, a, n, s, o, h, c) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = a || 0, this.italic = n || 0, this.skew = s || 0, this.width = o || 0, this.classes = h || [], this.style = c || {}, this.maxFontSize = 0;
    var v = /* @__PURE__ */ Ia(/* @__PURE__ */ this.text.charCodeAt(0));
    v && this.classes.push(v + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Ka[this.text]);
  }
  hasClass(e) {
    return R.contains(this.classes, e);
  }
  toNode() {
    var e = /* @__PURE__ */ document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = /* @__PURE__ */ document.createElement("span"), t.style.marginRight = /* @__PURE__ */ T(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = /* @__PURE__ */ G0(this.classes));
    for (var a in this.style) this.style.hasOwnProperty(a) && (t = t || document.createElement("span"), t.style[a] = this.style[a]);
    return t ? (t.appendChild(e), t) : e;
  }
  toMarkup() {
    var e = false, t = "<span";
    this.classes.length && (e = true, t += ' class="', t += /* @__PURE__ */ R.escape(/* @__PURE__ */ G0(this.classes)), t += '"');
    var a = "";
    this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
    for (var n in this.style) this.style.hasOwnProperty(n) && (a += R.hyphenate(n) + ":" + this.style[n] + ";");
    a && (e = true, t += ' style="' + R.escape(a) + '"');
    var s = /* @__PURE__ */ R.escape(this.text);
    return e ? (t += ">", t += s, t += "</span>", t) : s;
  }
}, __11 = new WeakMap(), __privateAdd(_k, __11, m$1(_k, "SymbolNode")), _k), x0 = (_l = class {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = /* @__PURE__ */ document.createElementNS(e, "svg");
    for (var a in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
    for (var n = 0; n < this.children.length; n++) t.appendChild(/* @__PURE__ */ this.children[n].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + R.escape(this.attributes[t]) + '"');
    e += ">";
    for (var a = 0; a < this.children.length; a++) e += /* @__PURE__ */ this.children[a].toMarkup();
    return e += "</svg>", e;
  }
}, __12 = new WeakMap(), __privateAdd(_l, __12, m$1(_l, "SvgNode")), _l), M0 = (_m = class {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = /* @__PURE__ */ document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Ut[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + R.escape(this.alternate) + '"/>' : '<path d="' + R.escape(Ut[this.pathName]) + '"/>';
  }
}, __13 = new WeakMap(), __privateAdd(_m, __13, m$1(_m, "PathNode")), _m), fe = (_n = class {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = /* @__PURE__ */ document.createElementNS(e, "line");
    for (var a in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + R.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}, __14 = new WeakMap(), __privateAdd(_n, __14, m$1(_n, "LineNode")), _n);
function Wt(r5) {
  if (r5 instanceof h0) return r5;
  throw new Error("Expected symbolNode but got " + String(r5) + ".");
}
m$1(Wt, "assertSymbolDomNode");
function Ja(r5) {
  if (r5 instanceof j0) return r5;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r5) + ".");
}
m$1(Ja, "assertSpan");
var Qa = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, _a2 = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, W = {
  math: {},
  text: {}
};
function i(r5, e, t, a, n, s) {
  W[r5][n] = {
    font: e,
    group: t,
    replace: a
  }, s && a && (W[r5][a] = W[r5][n]);
}
m$1(i, "defineSymbol");
var l = "math", S = "text", u = "main", f = "ams", j = "accent-token", C = "bin", s0 = "close", ne = "inner", E = "mathord", e0 = "op-token", d0 = "open", Ve = "punct", p = "rel", I0 = "spacing", g = "textord";
i(l, u, p, "≡", "\\equiv", true);
i(l, u, p, "≺", "\\prec", true);
i(l, u, p, "≻", "\\succ", true);
i(l, u, p, "∼", "\\sim", true);
i(l, u, p, "⊥", "\\perp");
i(l, u, p, "⪯", "\\preceq", true);
i(l, u, p, "⪰", "\\succeq", true);
i(l, u, p, "≃", "\\simeq", true);
i(l, u, p, "∣", "\\mid", true);
i(l, u, p, "≪", "\\ll", true);
i(l, u, p, "≫", "\\gg", true);
i(l, u, p, "≍", "\\asymp", true);
i(l, u, p, "∥", "\\parallel");
i(l, u, p, "⋈", "\\bowtie", true);
i(l, u, p, "⌣", "\\smile", true);
i(l, u, p, "⊑", "\\sqsubseteq", true);
i(l, u, p, "⊒", "\\sqsupseteq", true);
i(l, u, p, "≐", "\\doteq", true);
i(l, u, p, "⌢", "\\frown", true);
i(l, u, p, "∋", "\\ni", true);
i(l, u, p, "∝", "\\propto", true);
i(l, u, p, "⊢", "\\vdash", true);
i(l, u, p, "⊣", "\\dashv", true);
i(l, u, p, "∋", "\\owns");
i(l, u, Ve, ".", "\\ldotp");
i(l, u, Ve, "⋅", "\\cdotp");
i(l, u, g, "#", "\\#");
i(S, u, g, "#", "\\#");
i(l, u, g, "&", "\\&");
i(S, u, g, "&", "\\&");
i(l, u, g, "ℵ", "\\aleph", true);
i(l, u, g, "∀", "\\forall", true);
i(l, u, g, "ℏ", "\\hbar", true);
i(l, u, g, "∃", "\\exists", true);
i(l, u, g, "∇", "\\nabla", true);
i(l, u, g, "♭", "\\flat", true);
i(l, u, g, "ℓ", "\\ell", true);
i(l, u, g, "♮", "\\natural", true);
i(l, u, g, "♣", "\\clubsuit", true);
i(l, u, g, "℘", "\\wp", true);
i(l, u, g, "♯", "\\sharp", true);
i(l, u, g, "♢", "\\diamondsuit", true);
i(l, u, g, "ℜ", "\\Re", true);
i(l, u, g, "♡", "\\heartsuit", true);
i(l, u, g, "ℑ", "\\Im", true);
i(l, u, g, "♠", "\\spadesuit", true);
i(l, u, g, "§", "\\S", true);
i(S, u, g, "§", "\\S");
i(l, u, g, "¶", "\\P", true);
i(S, u, g, "¶", "\\P");
i(l, u, g, "†", "\\dag");
i(S, u, g, "†", "\\dag");
i(S, u, g, "†", "\\textdagger");
i(l, u, g, "‡", "\\ddag");
i(S, u, g, "‡", "\\ddag");
i(S, u, g, "‡", "\\textdaggerdbl");
i(l, u, s0, "⎱", "\\rmoustache", true);
i(l, u, d0, "⎰", "\\lmoustache", true);
i(l, u, s0, "⟯", "\\rgroup", true);
i(l, u, d0, "⟮", "\\lgroup", true);
i(l, u, C, "∓", "\\mp", true);
i(l, u, C, "⊖", "\\ominus", true);
i(l, u, C, "⊎", "\\uplus", true);
i(l, u, C, "⊓", "\\sqcap", true);
i(l, u, C, "∗", "\\ast");
i(l, u, C, "⊔", "\\sqcup", true);
i(l, u, C, "◯", "\\bigcirc", true);
i(l, u, C, "∙", "\\bullet", true);
i(l, u, C, "‡", "\\ddagger");
i(l, u, C, "≀", "\\wr", true);
i(l, u, C, "⨿", "\\amalg");
i(l, u, C, "&", "\\And");
i(l, u, p, "⟵", "\\longleftarrow", true);
i(l, u, p, "⇐", "\\Leftarrow", true);
i(l, u, p, "⟸", "\\Longleftarrow", true);
i(l, u, p, "⟶", "\\longrightarrow", true);
i(l, u, p, "⇒", "\\Rightarrow", true);
i(l, u, p, "⟹", "\\Longrightarrow", true);
i(l, u, p, "↔", "\\leftrightarrow", true);
i(l, u, p, "⟷", "\\longleftrightarrow", true);
i(l, u, p, "⇔", "\\Leftrightarrow", true);
i(l, u, p, "⟺", "\\Longleftrightarrow", true);
i(l, u, p, "↦", "\\mapsto", true);
i(l, u, p, "⟼", "\\longmapsto", true);
i(l, u, p, "↗", "\\nearrow", true);
i(l, u, p, "↩", "\\hookleftarrow", true);
i(l, u, p, "↪", "\\hookrightarrow", true);
i(l, u, p, "↘", "\\searrow", true);
i(l, u, p, "↼", "\\leftharpoonup", true);
i(l, u, p, "⇀", "\\rightharpoonup", true);
i(l, u, p, "↙", "\\swarrow", true);
i(l, u, p, "↽", "\\leftharpoondown", true);
i(l, u, p, "⇁", "\\rightharpoondown", true);
i(l, u, p, "↖", "\\nwarrow", true);
i(l, u, p, "⇌", "\\rightleftharpoons", true);
i(l, f, p, "≮", "\\nless", true);
i(l, f, p, "", "\\@nleqslant");
i(l, f, p, "", "\\@nleqq");
i(l, f, p, "⪇", "\\lneq", true);
i(l, f, p, "≨", "\\lneqq", true);
i(l, f, p, "", "\\@lvertneqq");
i(l, f, p, "⋦", "\\lnsim", true);
i(l, f, p, "⪉", "\\lnapprox", true);
i(l, f, p, "⊀", "\\nprec", true);
i(l, f, p, "⋠", "\\npreceq", true);
i(l, f, p, "⋨", "\\precnsim", true);
i(l, f, p, "⪹", "\\precnapprox", true);
i(l, f, p, "≁", "\\nsim", true);
i(l, f, p, "", "\\@nshortmid");
i(l, f, p, "∤", "\\nmid", true);
i(l, f, p, "⊬", "\\nvdash", true);
i(l, f, p, "⊭", "\\nvDash", true);
i(l, f, p, "⋪", "\\ntriangleleft");
i(l, f, p, "⋬", "\\ntrianglelefteq", true);
i(l, f, p, "⊊", "\\subsetneq", true);
i(l, f, p, "", "\\@varsubsetneq");
i(l, f, p, "⫋", "\\subsetneqq", true);
i(l, f, p, "", "\\@varsubsetneqq");
i(l, f, p, "≯", "\\ngtr", true);
i(l, f, p, "", "\\@ngeqslant");
i(l, f, p, "", "\\@ngeqq");
i(l, f, p, "⪈", "\\gneq", true);
i(l, f, p, "≩", "\\gneqq", true);
i(l, f, p, "", "\\@gvertneqq");
i(l, f, p, "⋧", "\\gnsim", true);
i(l, f, p, "⪊", "\\gnapprox", true);
i(l, f, p, "⊁", "\\nsucc", true);
i(l, f, p, "⋡", "\\nsucceq", true);
i(l, f, p, "⋩", "\\succnsim", true);
i(l, f, p, "⪺", "\\succnapprox", true);
i(l, f, p, "≆", "\\ncong", true);
i(l, f, p, "", "\\@nshortparallel");
i(l, f, p, "∦", "\\nparallel", true);
i(l, f, p, "⊯", "\\nVDash", true);
i(l, f, p, "⋫", "\\ntriangleright");
i(l, f, p, "⋭", "\\ntrianglerighteq", true);
i(l, f, p, "", "\\@nsupseteqq");
i(l, f, p, "⊋", "\\supsetneq", true);
i(l, f, p, "", "\\@varsupsetneq");
i(l, f, p, "⫌", "\\supsetneqq", true);
i(l, f, p, "", "\\@varsupsetneqq");
i(l, f, p, "⊮", "\\nVdash", true);
i(l, f, p, "⪵", "\\precneqq", true);
i(l, f, p, "⪶", "\\succneqq", true);
i(l, f, p, "", "\\@nsubseteqq");
i(l, f, C, "⊴", "\\unlhd");
i(l, f, C, "⊵", "\\unrhd");
i(l, f, p, "↚", "\\nleftarrow", true);
i(l, f, p, "↛", "\\nrightarrow", true);
i(l, f, p, "⇍", "\\nLeftarrow", true);
i(l, f, p, "⇏", "\\nRightarrow", true);
i(l, f, p, "↮", "\\nleftrightarrow", true);
i(l, f, p, "⇎", "\\nLeftrightarrow", true);
i(l, f, p, "△", "\\vartriangle");
i(l, f, g, "ℏ", "\\hslash");
i(l, f, g, "▽", "\\triangledown");
i(l, f, g, "◊", "\\lozenge");
i(l, f, g, "Ⓢ", "\\circledS");
i(l, f, g, "®", "\\circledR");
i(S, f, g, "®", "\\circledR");
i(l, f, g, "∡", "\\measuredangle", true);
i(l, f, g, "∄", "\\nexists");
i(l, f, g, "℧", "\\mho");
i(l, f, g, "Ⅎ", "\\Finv", true);
i(l, f, g, "⅁", "\\Game", true);
i(l, f, g, "‵", "\\backprime");
i(l, f, g, "▲", "\\blacktriangle");
i(l, f, g, "▼", "\\blacktriangledown");
i(l, f, g, "■", "\\blacksquare");
i(l, f, g, "⧫", "\\blacklozenge");
i(l, f, g, "★", "\\bigstar");
i(l, f, g, "∢", "\\sphericalangle", true);
i(l, f, g, "∁", "\\complement", true);
i(l, f, g, "ð", "\\eth", true);
i(S, u, g, "ð", "ð");
i(l, f, g, "╱", "\\diagup");
i(l, f, g, "╲", "\\diagdown");
i(l, f, g, "□", "\\square");
i(l, f, g, "□", "\\Box");
i(l, f, g, "◊", "\\Diamond");
i(l, f, g, "¥", "\\yen", true);
i(S, f, g, "¥", "\\yen", true);
i(l, f, g, "✓", "\\checkmark", true);
i(S, f, g, "✓", "\\checkmark");
i(l, f, g, "ℶ", "\\beth", true);
i(l, f, g, "ℸ", "\\daleth", true);
i(l, f, g, "ℷ", "\\gimel", true);
i(l, f, g, "ϝ", "\\digamma", true);
i(l, f, g, "ϰ", "\\varkappa");
i(l, f, d0, "┌", "\\@ulcorner", true);
i(l, f, s0, "┐", "\\@urcorner", true);
i(l, f, d0, "└", "\\@llcorner", true);
i(l, f, s0, "┘", "\\@lrcorner", true);
i(l, f, p, "≦", "\\leqq", true);
i(l, f, p, "⩽", "\\leqslant", true);
i(l, f, p, "⪕", "\\eqslantless", true);
i(l, f, p, "≲", "\\lesssim", true);
i(l, f, p, "⪅", "\\lessapprox", true);
i(l, f, p, "≊", "\\approxeq", true);
i(l, f, C, "⋖", "\\lessdot");
i(l, f, p, "⋘", "\\lll", true);
i(l, f, p, "≶", "\\lessgtr", true);
i(l, f, p, "⋚", "\\lesseqgtr", true);
i(l, f, p, "⪋", "\\lesseqqgtr", true);
i(l, f, p, "≑", "\\doteqdot");
i(l, f, p, "≓", "\\risingdotseq", true);
i(l, f, p, "≒", "\\fallingdotseq", true);
i(l, f, p, "∽", "\\backsim", true);
i(l, f, p, "⋍", "\\backsimeq", true);
i(l, f, p, "⫅", "\\subseteqq", true);
i(l, f, p, "⋐", "\\Subset", true);
i(l, f, p, "⊏", "\\sqsubset", true);
i(l, f, p, "≼", "\\preccurlyeq", true);
i(l, f, p, "⋞", "\\curlyeqprec", true);
i(l, f, p, "≾", "\\precsim", true);
i(l, f, p, "⪷", "\\precapprox", true);
i(l, f, p, "⊲", "\\vartriangleleft");
i(l, f, p, "⊴", "\\trianglelefteq");
i(l, f, p, "⊨", "\\vDash", true);
i(l, f, p, "⊪", "\\Vvdash", true);
i(l, f, p, "⌣", "\\smallsmile");
i(l, f, p, "⌢", "\\smallfrown");
i(l, f, p, "≏", "\\bumpeq", true);
i(l, f, p, "≎", "\\Bumpeq", true);
i(l, f, p, "≧", "\\geqq", true);
i(l, f, p, "⩾", "\\geqslant", true);
i(l, f, p, "⪖", "\\eqslantgtr", true);
i(l, f, p, "≳", "\\gtrsim", true);
i(l, f, p, "⪆", "\\gtrapprox", true);
i(l, f, C, "⋗", "\\gtrdot");
i(l, f, p, "⋙", "\\ggg", true);
i(l, f, p, "≷", "\\gtrless", true);
i(l, f, p, "⋛", "\\gtreqless", true);
i(l, f, p, "⪌", "\\gtreqqless", true);
i(l, f, p, "≖", "\\eqcirc", true);
i(l, f, p, "≗", "\\circeq", true);
i(l, f, p, "≜", "\\triangleq", true);
i(l, f, p, "∼", "\\thicksim");
i(l, f, p, "≈", "\\thickapprox");
i(l, f, p, "⫆", "\\supseteqq", true);
i(l, f, p, "⋑", "\\Supset", true);
i(l, f, p, "⊐", "\\sqsupset", true);
i(l, f, p, "≽", "\\succcurlyeq", true);
i(l, f, p, "⋟", "\\curlyeqsucc", true);
i(l, f, p, "≿", "\\succsim", true);
i(l, f, p, "⪸", "\\succapprox", true);
i(l, f, p, "⊳", "\\vartriangleright");
i(l, f, p, "⊵", "\\trianglerighteq");
i(l, f, p, "⊩", "\\Vdash", true);
i(l, f, p, "∣", "\\shortmid");
i(l, f, p, "∥", "\\shortparallel");
i(l, f, p, "≬", "\\between", true);
i(l, f, p, "⋔", "\\pitchfork", true);
i(l, f, p, "∝", "\\varpropto");
i(l, f, p, "◀", "\\blacktriangleleft");
i(l, f, p, "∴", "\\therefore", true);
i(l, f, p, "∍", "\\backepsilon");
i(l, f, p, "▶", "\\blacktriangleright");
i(l, f, p, "∵", "\\because", true);
i(l, f, p, "⋘", "\\llless");
i(l, f, p, "⋙", "\\gggtr");
i(l, f, C, "⊲", "\\lhd");
i(l, f, C, "⊳", "\\rhd");
i(l, f, p, "≂", "\\eqsim", true);
i(l, u, p, "⋈", "\\Join");
i(l, f, p, "≑", "\\Doteq", true);
i(l, f, C, "∔", "\\dotplus", true);
i(l, f, C, "∖", "\\smallsetminus");
i(l, f, C, "⋒", "\\Cap", true);
i(l, f, C, "⋓", "\\Cup", true);
i(l, f, C, "⩞", "\\doublebarwedge", true);
i(l, f, C, "⊟", "\\boxminus", true);
i(l, f, C, "⊞", "\\boxplus", true);
i(l, f, C, "⋇", "\\divideontimes", true);
i(l, f, C, "⋉", "\\ltimes", true);
i(l, f, C, "⋊", "\\rtimes", true);
i(l, f, C, "⋋", "\\leftthreetimes", true);
i(l, f, C, "⋌", "\\rightthreetimes", true);
i(l, f, C, "⋏", "\\curlywedge", true);
i(l, f, C, "⋎", "\\curlyvee", true);
i(l, f, C, "⊝", "\\circleddash", true);
i(l, f, C, "⊛", "\\circledast", true);
i(l, f, C, "⋅", "\\centerdot");
i(l, f, C, "⊺", "\\intercal", true);
i(l, f, C, "⋒", "\\doublecap");
i(l, f, C, "⋓", "\\doublecup");
i(l, f, C, "⊠", "\\boxtimes", true);
i(l, f, p, "⇢", "\\dashrightarrow", true);
i(l, f, p, "⇠", "\\dashleftarrow", true);
i(l, f, p, "⇇", "\\leftleftarrows", true);
i(l, f, p, "⇆", "\\leftrightarrows", true);
i(l, f, p, "⇚", "\\Lleftarrow", true);
i(l, f, p, "↞", "\\twoheadleftarrow", true);
i(l, f, p, "↢", "\\leftarrowtail", true);
i(l, f, p, "↫", "\\looparrowleft", true);
i(l, f, p, "⇋", "\\leftrightharpoons", true);
i(l, f, p, "↶", "\\curvearrowleft", true);
i(l, f, p, "↺", "\\circlearrowleft", true);
i(l, f, p, "↰", "\\Lsh", true);
i(l, f, p, "⇈", "\\upuparrows", true);
i(l, f, p, "↿", "\\upharpoonleft", true);
i(l, f, p, "⇃", "\\downharpoonleft", true);
i(l, u, p, "⊶", "\\origof", true);
i(l, u, p, "⊷", "\\imageof", true);
i(l, f, p, "⊸", "\\multimap", true);
i(l, f, p, "↭", "\\leftrightsquigarrow", true);
i(l, f, p, "⇉", "\\rightrightarrows", true);
i(l, f, p, "⇄", "\\rightleftarrows", true);
i(l, f, p, "↠", "\\twoheadrightarrow", true);
i(l, f, p, "↣", "\\rightarrowtail", true);
i(l, f, p, "↬", "\\looparrowright", true);
i(l, f, p, "↷", "\\curvearrowright", true);
i(l, f, p, "↻", "\\circlearrowright", true);
i(l, f, p, "↱", "\\Rsh", true);
i(l, f, p, "⇊", "\\downdownarrows", true);
i(l, f, p, "↾", "\\upharpoonright", true);
i(l, f, p, "⇂", "\\downharpoonright", true);
i(l, f, p, "⇝", "\\rightsquigarrow", true);
i(l, f, p, "⇝", "\\leadsto");
i(l, f, p, "⇛", "\\Rrightarrow", true);
i(l, f, p, "↾", "\\restriction");
i(l, u, g, "‘", "`");
i(l, u, g, "$", "\\$");
i(S, u, g, "$", "\\$");
i(S, u, g, "$", "\\textdollar");
i(l, u, g, "%", "\\%");
i(S, u, g, "%", "\\%");
i(l, u, g, "_", "\\_");
i(S, u, g, "_", "\\_");
i(S, u, g, "_", "\\textunderscore");
i(l, u, g, "∠", "\\angle", true);
i(l, u, g, "∞", "\\infty", true);
i(l, u, g, "′", "\\prime");
i(l, u, g, "△", "\\triangle");
i(l, u, g, "Γ", "\\Gamma", true);
i(l, u, g, "Δ", "\\Delta", true);
i(l, u, g, "Θ", "\\Theta", true);
i(l, u, g, "Λ", "\\Lambda", true);
i(l, u, g, "Ξ", "\\Xi", true);
i(l, u, g, "Π", "\\Pi", true);
i(l, u, g, "Σ", "\\Sigma", true);
i(l, u, g, "Υ", "\\Upsilon", true);
i(l, u, g, "Φ", "\\Phi", true);
i(l, u, g, "Ψ", "\\Psi", true);
i(l, u, g, "Ω", "\\Omega", true);
i(l, u, g, "A", "Α");
i(l, u, g, "B", "Β");
i(l, u, g, "E", "Ε");
i(l, u, g, "Z", "Ζ");
i(l, u, g, "H", "Η");
i(l, u, g, "I", "Ι");
i(l, u, g, "K", "Κ");
i(l, u, g, "M", "Μ");
i(l, u, g, "N", "Ν");
i(l, u, g, "O", "Ο");
i(l, u, g, "P", "Ρ");
i(l, u, g, "T", "Τ");
i(l, u, g, "X", "Χ");
i(l, u, g, "¬", "\\neg", true);
i(l, u, g, "¬", "\\lnot");
i(l, u, g, "⊤", "\\top");
i(l, u, g, "⊥", "\\bot");
i(l, u, g, "∅", "\\emptyset");
i(l, f, g, "∅", "\\varnothing");
i(l, u, E, "α", "\\alpha", true);
i(l, u, E, "β", "\\beta", true);
i(l, u, E, "γ", "\\gamma", true);
i(l, u, E, "δ", "\\delta", true);
i(l, u, E, "ϵ", "\\epsilon", true);
i(l, u, E, "ζ", "\\zeta", true);
i(l, u, E, "η", "\\eta", true);
i(l, u, E, "θ", "\\theta", true);
i(l, u, E, "ι", "\\iota", true);
i(l, u, E, "κ", "\\kappa", true);
i(l, u, E, "λ", "\\lambda", true);
i(l, u, E, "μ", "\\mu", true);
i(l, u, E, "ν", "\\nu", true);
i(l, u, E, "ξ", "\\xi", true);
i(l, u, E, "ο", "\\omicron", true);
i(l, u, E, "π", "\\pi", true);
i(l, u, E, "ρ", "\\rho", true);
i(l, u, E, "σ", "\\sigma", true);
i(l, u, E, "τ", "\\tau", true);
i(l, u, E, "υ", "\\upsilon", true);
i(l, u, E, "ϕ", "\\phi", true);
i(l, u, E, "χ", "\\chi", true);
i(l, u, E, "ψ", "\\psi", true);
i(l, u, E, "ω", "\\omega", true);
i(l, u, E, "ε", "\\varepsilon", true);
i(l, u, E, "ϑ", "\\vartheta", true);
i(l, u, E, "ϖ", "\\varpi", true);
i(l, u, E, "ϱ", "\\varrho", true);
i(l, u, E, "ς", "\\varsigma", true);
i(l, u, E, "φ", "\\varphi", true);
i(l, u, C, "∗", "*", true);
i(l, u, C, "+", "+");
i(l, u, C, "−", "-", true);
i(l, u, C, "⋅", "\\cdot", true);
i(l, u, C, "∘", "\\circ", true);
i(l, u, C, "÷", "\\div", true);
i(l, u, C, "±", "\\pm", true);
i(l, u, C, "×", "\\times", true);
i(l, u, C, "∩", "\\cap", true);
i(l, u, C, "∪", "\\cup", true);
i(l, u, C, "∖", "\\setminus", true);
i(l, u, C, "∧", "\\land");
i(l, u, C, "∨", "\\lor");
i(l, u, C, "∧", "\\wedge", true);
i(l, u, C, "∨", "\\vee", true);
i(l, u, g, "√", "\\surd");
i(l, u, d0, "⟨", "\\langle", true);
i(l, u, d0, "∣", "\\lvert");
i(l, u, d0, "∥", "\\lVert");
i(l, u, s0, "?", "?");
i(l, u, s0, "!", "!");
i(l, u, s0, "⟩", "\\rangle", true);
i(l, u, s0, "∣", "\\rvert");
i(l, u, s0, "∥", "\\rVert");
i(l, u, p, "=", "=");
i(l, u, p, ":", ":");
i(l, u, p, "≈", "\\approx", true);
i(l, u, p, "≅", "\\cong", true);
i(l, u, p, "≥", "\\ge");
i(l, u, p, "≥", "\\geq", true);
i(l, u, p, "←", "\\gets");
i(l, u, p, ">", "\\gt", true);
i(l, u, p, "∈", "\\in", true);
i(l, u, p, "", "\\@not");
i(l, u, p, "⊂", "\\subset", true);
i(l, u, p, "⊃", "\\supset", true);
i(l, u, p, "⊆", "\\subseteq", true);
i(l, u, p, "⊇", "\\supseteq", true);
i(l, f, p, "⊈", "\\nsubseteq", true);
i(l, f, p, "⊉", "\\nsupseteq", true);
i(l, u, p, "⊨", "\\models");
i(l, u, p, "←", "\\leftarrow", true);
i(l, u, p, "≤", "\\le");
i(l, u, p, "≤", "\\leq", true);
i(l, u, p, "<", "\\lt", true);
i(l, u, p, "→", "\\rightarrow", true);
i(l, u, p, "→", "\\to");
i(l, f, p, "≱", "\\ngeq", true);
i(l, f, p, "≰", "\\nleq", true);
i(l, u, I0, " ", "\\ ");
i(l, u, I0, " ", "\\space");
i(l, u, I0, " ", "\\nobreakspace");
i(S, u, I0, " ", "\\ ");
i(S, u, I0, " ", " ");
i(S, u, I0, " ", "\\space");
i(S, u, I0, " ", "\\nobreakspace");
i(l, u, I0, null, "\\nobreak");
i(l, u, I0, null, "\\allowbreak");
i(l, u, Ve, ",", ",");
i(l, u, Ve, ";", ";");
i(l, f, C, "⊼", "\\barwedge", true);
i(l, f, C, "⊻", "\\veebar", true);
i(l, u, C, "⊙", "\\odot", true);
i(l, u, C, "⊕", "\\oplus", true);
i(l, u, C, "⊗", "\\otimes", true);
i(l, u, g, "∂", "\\partial", true);
i(l, u, C, "⊘", "\\oslash", true);
i(l, f, C, "⊚", "\\circledcirc", true);
i(l, f, C, "⊡", "\\boxdot", true);
i(l, u, C, "△", "\\bigtriangleup");
i(l, u, C, "▽", "\\bigtriangledown");
i(l, u, C, "†", "\\dagger");
i(l, u, C, "⋄", "\\diamond");
i(l, u, C, "⋆", "\\star");
i(l, u, C, "◃", "\\triangleleft");
i(l, u, C, "▹", "\\triangleright");
i(l, u, d0, "{", "\\{");
i(S, u, g, "{", "\\{");
i(S, u, g, "{", "\\textbraceleft");
i(l, u, s0, "}", "\\}");
i(S, u, g, "}", "\\}");
i(S, u, g, "}", "\\textbraceright");
i(l, u, d0, "{", "\\lbrace");
i(l, u, s0, "}", "\\rbrace");
i(l, u, d0, "[", "\\lbrack", true);
i(S, u, g, "[", "\\lbrack", true);
i(l, u, s0, "]", "\\rbrack", true);
i(S, u, g, "]", "\\rbrack", true);
i(l, u, d0, "(", "\\lparen", true);
i(l, u, s0, ")", "\\rparen", true);
i(S, u, g, "<", "\\textless", true);
i(S, u, g, ">", "\\textgreater", true);
i(l, u, d0, "⌊", "\\lfloor", true);
i(l, u, s0, "⌋", "\\rfloor", true);
i(l, u, d0, "⌈", "\\lceil", true);
i(l, u, s0, "⌉", "\\rceil", true);
i(l, u, g, "\\", "\\backslash");
i(l, u, g, "∣", "|");
i(l, u, g, "∣", "\\vert");
i(S, u, g, "|", "\\textbar", true);
i(l, u, g, "∥", "\\|");
i(l, u, g, "∥", "\\Vert");
i(S, u, g, "∥", "\\textbardbl");
i(S, u, g, "~", "\\textasciitilde");
i(S, u, g, "\\", "\\textbackslash");
i(S, u, g, "^", "\\textasciicircum");
i(l, u, p, "↑", "\\uparrow", true);
i(l, u, p, "⇑", "\\Uparrow", true);
i(l, u, p, "↓", "\\downarrow", true);
i(l, u, p, "⇓", "\\Downarrow", true);
i(l, u, p, "↕", "\\updownarrow", true);
i(l, u, p, "⇕", "\\Updownarrow", true);
i(l, u, e0, "∐", "\\coprod");
i(l, u, e0, "⋁", "\\bigvee");
i(l, u, e0, "⋀", "\\bigwedge");
i(l, u, e0, "⨄", "\\biguplus");
i(l, u, e0, "⋂", "\\bigcap");
i(l, u, e0, "⋃", "\\bigcup");
i(l, u, e0, "∫", "\\int");
i(l, u, e0, "∫", "\\intop");
i(l, u, e0, "∬", "\\iint");
i(l, u, e0, "∭", "\\iiint");
i(l, u, e0, "∏", "\\prod");
i(l, u, e0, "∑", "\\sum");
i(l, u, e0, "⨂", "\\bigotimes");
i(l, u, e0, "⨁", "\\bigoplus");
i(l, u, e0, "⨀", "\\bigodot");
i(l, u, e0, "∮", "\\oint");
i(l, u, e0, "∯", "\\oiint");
i(l, u, e0, "∰", "\\oiiint");
i(l, u, e0, "⨆", "\\bigsqcup");
i(l, u, e0, "∫", "\\smallint");
i(S, u, ne, "…", "\\textellipsis");
i(l, u, ne, "…", "\\mathellipsis");
i(S, u, ne, "…", "\\ldots", true);
i(l, u, ne, "…", "\\ldots", true);
i(l, u, ne, "⋯", "\\@cdots", true);
i(l, u, ne, "⋱", "\\ddots", true);
i(l, u, g, "⋮", "\\varvdots");
i(l, u, j, "ˊ", "\\acute");
i(l, u, j, "ˋ", "\\grave");
i(l, u, j, "¨", "\\ddot");
i(l, u, j, "~", "\\tilde");
i(l, u, j, "ˉ", "\\bar");
i(l, u, j, "˘", "\\breve");
i(l, u, j, "ˇ", "\\check");
i(l, u, j, "^", "\\hat");
i(l, u, j, "⃗", "\\vec");
i(l, u, j, "˙", "\\dot");
i(l, u, j, "˚", "\\mathring");
i(l, u, E, "", "\\@imath");
i(l, u, E, "", "\\@jmath");
i(l, u, g, "ı", "ı");
i(l, u, g, "ȷ", "ȷ");
i(S, u, g, "ı", "\\i", true);
i(S, u, g, "ȷ", "\\j", true);
i(S, u, g, "ß", "\\ss", true);
i(S, u, g, "æ", "\\ae", true);
i(S, u, g, "œ", "\\oe", true);
i(S, u, g, "ø", "\\o", true);
i(S, u, g, "Æ", "\\AE", true);
i(S, u, g, "Œ", "\\OE", true);
i(S, u, g, "Ø", "\\O", true);
i(S, u, j, "ˊ", "\\'");
i(S, u, j, "ˋ", "\\`");
i(S, u, j, "ˆ", "\\^");
i(S, u, j, "˜", "\\~");
i(S, u, j, "ˉ", "\\=");
i(S, u, j, "˘", "\\u");
i(S, u, j, "˙", "\\.");
i(S, u, j, "¸", "\\c");
i(S, u, j, "˚", "\\r");
i(S, u, j, "ˇ", "\\v");
i(S, u, j, "¨", '\\"');
i(S, u, j, "˝", "\\H");
i(S, u, j, "◯", "\\textcircled");
var Ar = {
  "--": true,
  "---": true,
  "``": true,
  "''": true
};
i(S, u, g, "–", "--", true);
i(S, u, g, "–", "\\textendash");
i(S, u, g, "—", "---", true);
i(S, u, g, "—", "\\textemdash");
i(S, u, g, "‘", "`", true);
i(S, u, g, "‘", "\\textquoteleft");
i(S, u, g, "’", "'", true);
i(S, u, g, "’", "\\textquoteright");
i(S, u, g, "“", "``", true);
i(S, u, g, "“", "\\textquotedblleft");
i(S, u, g, "”", "''", true);
i(S, u, g, "”", "\\textquotedblright");
i(l, u, g, "°", "\\degree", true);
i(S, u, g, "°", "\\degree");
i(S, u, g, "°", "\\textdegree", true);
i(l, u, g, "£", "\\pounds");
i(l, u, g, "£", "\\mathsterling", true);
i(S, u, g, "£", "\\pounds");
i(S, u, g, "£", "\\textsterling", true);
i(l, f, g, "✠", "\\maltese");
i(S, f, g, "✠", "\\maltese");
var jt = '0123456789/@."';
for (ke = 0; ke < jt.length; ke++) _e = /* @__PURE__ */ jt.charAt(ke), i(l, u, g, _e, _e);
var _e, ke, Zt = '0123456789!@*()-=+";:?/.,';
for (Se = 0; Se < Zt.length; Se++) et = /* @__PURE__ */ Zt.charAt(Se), i(S, u, g, et, et);
var et, Se, Oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (Me = 0; Me < Oe.length; Me++) le = /* @__PURE__ */ Oe.charAt(Me), i(l, u, E, le, le), i(S, u, g, le, le);
var le, Me;
i(l, f, g, "C", "ℂ");
i(S, f, g, "C", "ℂ");
i(l, f, g, "H", "ℍ");
i(S, f, g, "H", "ℍ");
i(l, f, g, "N", "ℕ");
i(S, f, g, "N", "ℕ");
i(l, f, g, "P", "ℙ");
i(S, f, g, "P", "ℙ");
i(l, f, g, "Q", "ℚ");
i(S, f, g, "Q", "ℚ");
i(l, f, g, "R", "ℝ");
i(S, f, g, "R", "ℝ");
i(l, f, g, "Z", "ℤ");
i(S, f, g, "Z", "ℤ");
i(l, u, E, "h", "ℎ");
i(S, u, E, "h", "ℎ");
var O = "";
for (a0 = 0; a0 < Oe.length; a0++) K = /* @__PURE__ */ Oe.charAt(a0), O = /* @__PURE__ */ String.fromCharCode(55349, 56320 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56372 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56424 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56580 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56684 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56736 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56788 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56840 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56944 + a0), i(l, u, E, K, O), i(S, u, g, K, O), a0 < 26 && (O = /* @__PURE__ */ String.fromCharCode(55349, 56632 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /* @__PURE__ */ String.fromCharCode(55349, 56476 + a0), i(l, u, E, K, O), i(S, u, g, K, O));
var K, a0;
O = "𝕜";
i(l, u, E, "k", O);
i(S, u, g, "k", O);
for (L0 = 0; L0 < 10; L0++) D0 = /* @__PURE__ */ L0.toString(), O = /* @__PURE__ */ String.fromCharCode(55349, 57294 + L0), i(l, u, E, D0, O), i(S, u, g, D0, O), O = /* @__PURE__ */ String.fromCharCode(55349, 57314 + L0), i(l, u, E, D0, O), i(S, u, g, D0, O), O = /* @__PURE__ */ String.fromCharCode(55349, 57324 + L0), i(l, u, E, D0, O), i(S, u, g, D0, O), O = /* @__PURE__ */ String.fromCharCode(55349, 57334 + L0), i(l, u, E, D0, O), i(S, u, g, D0, O);
var D0, L0, dt = "ÐÞþ";
for (ze = 0; ze < dt.length; ze++) oe = /* @__PURE__ */ dt.charAt(ze), i(l, u, E, oe, oe), i(S, u, g, oe, oe);
var oe, ze, Ae = [
  [
    "mathbf",
    "textbf",
    "Main-Bold"
  ],
  [
    "mathbf",
    "textbf",
    "Main-Bold"
  ],
  [
    "mathnormal",
    "textit",
    "Math-Italic"
  ],
  [
    "mathnormal",
    "textit",
    "Math-Italic"
  ],
  [
    "boldsymbol",
    "boldsymbol",
    "Main-BoldItalic"
  ],
  [
    "boldsymbol",
    "boldsymbol",
    "Main-BoldItalic"
  ],
  [
    "mathscr",
    "textscr",
    "Script-Regular"
  ],
  [
    "",
    "",
    ""
  ],
  [
    "",
    "",
    ""
  ],
  [
    "",
    "",
    ""
  ],
  [
    "mathfrak",
    "textfrak",
    "Fraktur-Regular"
  ],
  [
    "mathfrak",
    "textfrak",
    "Fraktur-Regular"
  ],
  [
    "mathbb",
    "textbb",
    "AMS-Regular"
  ],
  [
    "mathbb",
    "textbb",
    "AMS-Regular"
  ],
  [
    "mathboldfrak",
    "textboldfrak",
    "Fraktur-Regular"
  ],
  [
    "mathboldfrak",
    "textboldfrak",
    "Fraktur-Regular"
  ],
  [
    "mathsf",
    "textsf",
    "SansSerif-Regular"
  ],
  [
    "mathsf",
    "textsf",
    "SansSerif-Regular"
  ],
  [
    "mathboldsf",
    "textboldsf",
    "SansSerif-Bold"
  ],
  [
    "mathboldsf",
    "textboldsf",
    "SansSerif-Bold"
  ],
  [
    "mathitsf",
    "textitsf",
    "SansSerif-Italic"
  ],
  [
    "mathitsf",
    "textitsf",
    "SansSerif-Italic"
  ],
  [
    "",
    "",
    ""
  ],
  [
    "",
    "",
    ""
  ],
  [
    "mathtt",
    "texttt",
    "Typewriter-Regular"
  ],
  [
    "mathtt",
    "texttt",
    "Typewriter-Regular"
  ]
], Kt = [
  [
    "mathbf",
    "textbf",
    "Main-Bold"
  ],
  [
    "",
    "",
    ""
  ],
  [
    "mathsf",
    "textsf",
    "SansSerif-Regular"
  ],
  [
    "mathboldsf",
    "textboldsf",
    "SansSerif-Bold"
  ],
  [
    "mathtt",
    "texttt",
    "Typewriter-Regular"
  ]
], e1 = /* @__PURE__ */ m$1(function(e, t) {
  var a = /* @__PURE__ */ e.charCodeAt(0), n = /* @__PURE__ */ e.charCodeAt(1), s = (a - 55296) * 1024 + (n - 56320) + 65536, o = t === "math" ? 0 : 1;
  if (119808 <= s && s < 120484) {
    var h = /* @__PURE__ */ Math.floor((s - 119808) / 26);
    return [
      Ae[h][2],
      Ae[h][o]
    ];
  } else if (120782 <= s && s <= 120831) {
    var c = /* @__PURE__ */ Math.floor((s - 120782) / 10);
    return [
      Kt[c][2],
      Kt[c][o]
    ];
  } else {
    if (s === 120485 || s === 120486) return [
      Ae[0][2],
      Ae[0][o]
    ];
    if (120486 < s && s < 120782) return [
      "",
      ""
    ];
    throw new z("Unsupported character: " + e);
  }
}, "wideCharacterFont"), Ue = /* @__PURE__ */ m$1(function(e, t, a) {
  return W[a][e] && W[a][e].replace && (e = W[a][e].replace), {
    value: e,
    metrics: /* @__PURE__ */ St(e, t, a)
  };
}, "lookupSymbol"), y0 = /* @__PURE__ */ m$1(function(e, t, a, n, s) {
  var o = /* @__PURE__ */ Ue(e, t, a), h = o.metrics;
  e = o.value;
  var c;
  if (h) {
    var v = h.italic;
    (a === "text" || n && n.font === "mathit") && (v = 0), c = new h0(e, h.height, h.depth, v, h.skew, h.width, s);
  } else typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + a + "'")), c = new h0(e, 0, 0, 0, 0, 0, s);
  if (n) {
    c.maxFontSize = n.sizeMultiplier, n.style.isTight() && c.classes.push("mtight");
    var b = /* @__PURE__ */ n.getColor();
    b && (c.style.color = b);
  }
  return c;
}, "makeSymbol"), t1 = /* @__PURE__ */ m$1(function(e, t, a, n) {
  return n === void 0 && (n = []), a.font === "boldsymbol" && Ue(e, "Main-Bold", t).metrics ? y0(e, "Main-Bold", t, a, /* @__PURE__ */ n.concat([
    "mathbf"
  ])) : e === "\\" || W[t][e].font === "main" ? y0(e, "Main-Regular", t, a, n) : y0(e, "AMS-Regular", t, a, /* @__PURE__ */ n.concat([
    "amsrm"
  ]));
}, "mathsym"), r1 = /* @__PURE__ */ m$1(function(e, t, a, n, s) {
  return s !== "textord" && Ue(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, "boldsymbol"), a1 = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = e.mode, s = e.text, o = [
    "mord"
  ], h = n === "math" || n === "text" && t.font, c = h ? t.font : t.fontFamily, v = "", b = "";
  if (s.charCodeAt(0) === 55349 && ([v, b] = /* @__PURE__ */ e1(s, n)), v.length > 0) return y0(s, v, n, t, /* @__PURE__ */ o.concat(b));
  if (c) {
    var x, k;
    if (c === "boldsymbol") {
      var w = /* @__PURE__ */ r1(s, n, t, o, a);
      x = w.fontName, k = [
        w.fontClass
      ];
    } else h ? (x = Dr[c].fontName, k = [
      c
    ]) : (x = /* @__PURE__ */ Te(c, t.fontWeight, t.fontShape), k = [
      c,
      t.fontWeight,
      t.fontShape
    ]);
    if (Ue(s, x, n).metrics) return y0(s, x, n, t, /* @__PURE__ */ o.concat(k));
    if (Ar.hasOwnProperty(s) && x.slice(0, 10) === "Typewriter") {
      for (var A = [], B = 0; B < s.length; B++) A.push(/* @__PURE__ */ y0(s[B], x, n, t, /* @__PURE__ */ o.concat(k)));
      return Br(A);
    }
  }
  if (a === "mathord") return y0(s, "Math-Italic", n, t, /* @__PURE__ */ o.concat([
    "mathnormal"
  ]));
  if (a === "textord") {
    var q = W[n][s] && W[n][s].font;
    if (q === "ams") {
      var N = /* @__PURE__ */ Te("amsrm", t.fontWeight, t.fontShape);
      return y0(s, N, n, t, /* @__PURE__ */ o.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (q === "main" || !q) {
      var H = /* @__PURE__ */ Te("textrm", t.fontWeight, t.fontShape);
      return y0(s, H, n, t, /* @__PURE__ */ o.concat(t.fontWeight, t.fontShape));
    } else {
      var F = /* @__PURE__ */ Te(q, t.fontWeight, t.fontShape);
      return y0(s, F, n, t, /* @__PURE__ */ o.concat(F, t.fontWeight, t.fontShape));
    }
  } else throw new Error("unexpected type: " + a + " in makeOrd");
}, "makeOrd"), n1 = /* @__PURE__ */ m$1((r5, e) => {
  if (G0(r5.classes) !== G0(e.classes) || r5.skew !== e.skew || r5.maxFontSize !== e.maxFontSize) return false;
  if (r5.classes.length === 1) {
    var t = r5.classes[0];
    if (t === "mbin" || t === "mord") return false;
  }
  for (var a in r5.style) if (r5.style.hasOwnProperty(a) && r5.style[a] !== e.style[a]) return false;
  for (var n in e.style) if (e.style.hasOwnProperty(n) && r5.style[n] !== e.style[n]) return false;
  return true;
}, "canCombine"), i1 = /* @__PURE__ */ m$1((r5) => {
  for (var e = 0; e < r5.length - 1; e++) {
    var t = r5[e], a = r5[e + 1];
    t instanceof h0 && a instanceof h0 && n1(t, a) && (t.text += a.text, t.height = /* @__PURE__ */ Math.max(t.height, a.height), t.depth = /* @__PURE__ */ Math.max(t.depth, a.depth), t.italic = a.italic, r5.splice(e + 1, 1), e--);
  }
  return r5;
}, "tryCombineChars"), Mt = /* @__PURE__ */ m$1(function(e) {
  for (var t = 0, a = 0, n = 0, s = 0; s < e.children.length; s++) {
    var o = e.children[s];
    o.height > t && (t = o.height), o.depth > a && (a = o.depth), o.maxFontSize > n && (n = o.maxFontSize);
  }
  e.height = t, e.depth = a, e.maxFontSize = n;
}, "sizeElementFromChildren"), o0 = /* @__PURE__ */ m$1(function(e, t, a, n) {
  var s = new j0(e, t, a, n);
  return Mt(s), s;
}, "makeSpan"), Tr = /* @__PURE__ */ m$1((r5, e, t, a) => new j0(r5, e, t, a), "makeSvgSpan"), s1 = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = /* @__PURE__ */ o0([
    e
  ], [], t);
  return n.height = /* @__PURE__ */ Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = /* @__PURE__ */ T(n.height), n.maxFontSize = 1, n;
}, "makeLineSpan"), l1 = /* @__PURE__ */ m$1(function(e, t, a, n) {
  var s = new de(e, t, a, n);
  return Mt(s), s;
}, "makeAnchor"), Br = /* @__PURE__ */ m$1(function(e) {
  var t = new W0(e);
  return Mt(t), t;
}, "makeFragment"), o1 = /* @__PURE__ */ m$1(function(e, t) {
  return e instanceof W0 ? o0([], [
    e
  ], t) : e;
}, "wrapFragment"), u1 = /* @__PURE__ */ m$1(function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, a = [
      t[0]
    ], n = -t[0].shift - t[0].elem.depth, s = n, o = 1; o < t.length; o++) {
      var h = -t[o].shift - s - t[o].elem.depth, c = h - (t[o - 1].elem.height + t[o - 1].elem.depth);
      s = s + h, a.push({
        type: "kern",
        size: c
      }), a.push(t[o]);
    }
    return {
      children: a,
      depth: n
    };
  }
  var v;
  if (e.positionType === "top") {
    for (var b = e.positionData, x = 0; x < e.children.length; x++) {
      var k = e.children[x];
      b -= k.type === "kern" ? k.size : k.elem.height + k.elem.depth;
    }
    v = b;
  } else if (e.positionType === "bottom") v = -e.positionData;
  else {
    var w = e.children[0];
    if (w.type !== "elem") throw new Error('First child must have type "elem".');
    if (e.positionType === "shift") v = -w.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline") v = -w.elem.depth;
    else throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: v
  };
}, "getVListChildrenAndDepth"), h1 = /* @__PURE__ */ m$1(function(e, t) {
  for (var { children: a, depth: n } = u1(e), s = 0, o = 0; o < a.length; o++) {
    var h = a[o];
    if (h.type === "elem") {
      var c = h.elem;
      s = /* @__PURE__ */ Math.max(s, c.maxFontSize, c.height);
    }
  }
  s += 2;
  var v = /* @__PURE__ */ o0([
    "pstrut"
  ], []);
  v.style.height = /* @__PURE__ */ T(s);
  for (var b = [], x = n, k = n, w = n, A = 0; A < a.length; A++) {
    var B = a[A];
    if (B.type === "kern") w += B.size;
    else {
      var q = B.elem, N = B.wrapperClasses || [], H = B.wrapperStyle || {}, F = /* @__PURE__ */ o0(N, [
        v,
        q
      ], void 0, H);
      F.style.top = /* @__PURE__ */ T(-s - w - q.depth), B.marginLeft && (F.style.marginLeft = B.marginLeft), B.marginRight && (F.style.marginRight = B.marginRight), b.push(F), w += q.height + q.depth;
    }
    x = /* @__PURE__ */ Math.min(x, w), k = /* @__PURE__ */ Math.max(k, w);
  }
  var U = /* @__PURE__ */ o0([
    "vlist"
  ], b);
  U.style.height = /* @__PURE__ */ T(k);
  var P;
  if (x < 0) {
    var Y = /* @__PURE__ */ o0([], []), V = /* @__PURE__ */ o0([
      "vlist"
    ], [
      Y
    ]);
    V.style.height = /* @__PURE__ */ T(-x);
    var Z = /* @__PURE__ */ o0([
      "vlist-s"
    ], [
      new h0("​")
    ]);
    P = [
      /* @__PURE__ */ o0([
        "vlist-r"
      ], [
        U,
        Z
      ]),
      /* @__PURE__ */ o0([
        "vlist-r"
      ], [
        V
      ])
    ];
  } else P = [
    /* @__PURE__ */ o0([
      "vlist-r"
    ], [
      U
    ])
  ];
  var X = /* @__PURE__ */ o0([
    "vlist-t"
  ], P);
  return P.length === 2 && X.classes.push("vlist-t2"), X.height = k, X.depth = -x, X;
}, "makeVList"), m1 = /* @__PURE__ */ m$1((r5, e) => {
  var t = /* @__PURE__ */ o0([
    "mspace"
  ], [], e), a = /* @__PURE__ */ Q(r5, e);
  return t.style.marginRight = /* @__PURE__ */ T(a), t;
}, "makeGlue"), Te = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = "";
  switch (e) {
    case "amsrm":
      n = "AMS";
      break;
    case "textrm":
      n = "Main";
      break;
    case "textsf":
      n = "SansSerif";
      break;
    case "texttt":
      n = "Typewriter";
      break;
    default:
      n = e;
  }
  var s;
  return t === "textbf" && a === "textit" ? s = "BoldItalic" : t === "textbf" ? s = "Bold" : t === "textit" ? s = "Italic" : s = "Regular", n + "-" + s;
}, "retrieveTextFontName"), Dr = {
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Cr = {
  vec: [
    "vec",
    0.471,
    0.714
  ],
  oiintSize1: [
    "oiintSize1",
    0.957,
    0.499
  ],
  oiintSize2: [
    "oiintSize2",
    1.472,
    0.659
  ],
  oiiintSize1: [
    "oiiintSize1",
    1.304,
    0.499
  ],
  oiiintSize2: [
    "oiiintSize2",
    1.98,
    0.659
  ]
}, c1 = /* @__PURE__ */ m$1(function(e, t) {
  var [a, n, s] = Cr[e], o = new M0(a), h = new x0([
    o
  ], {
    width: /* @__PURE__ */ T(n),
    height: /* @__PURE__ */ T(s),
    style: "width:" + T(n),
    viewBox: "0 0 " + 1e3 * n + " " + 1e3 * s,
    preserveAspectRatio: "xMinYMin"
  }), c = /* @__PURE__ */ Tr([
    "overlay"
  ], [
    h
  ], t);
  return c.height = s, c.style.height = /* @__PURE__ */ T(s), c.style.width = /* @__PURE__ */ T(n), c;
}, "staticSvg"), y = {
  fontMap: Dr,
  makeSymbol: y0,
  mathsym: t1,
  makeSpan: o0,
  makeSvgSpan: Tr,
  makeLineSpan: s1,
  makeAnchor: l1,
  makeFragment: Br,
  wrapFragment: o1,
  makeVList: h1,
  makeOrd: a1,
  makeGlue: m1,
  staticSvg: c1,
  svgData: Cr,
  tryCombineChars: i1
}, J = {
  number: 3,
  unit: "mu"
}, X0 = {
  number: 4,
  unit: "mu"
}, C0 = {
  number: 5,
  unit: "mu"
}, d1 = {
  mord: {
    mop: J,
    mbin: X0,
    mrel: C0,
    minner: J
  },
  mop: {
    mord: J,
    mop: J,
    mrel: C0,
    minner: J
  },
  mbin: {
    mord: X0,
    mop: X0,
    mopen: X0,
    minner: X0
  },
  mrel: {
    mord: C0,
    mop: C0,
    mopen: C0,
    minner: C0
  },
  mopen: {},
  mclose: {
    mop: J,
    mbin: X0,
    mrel: C0,
    minner: J
  },
  mpunct: {
    mord: J,
    mop: J,
    mrel: C0,
    mopen: J,
    mclose: J,
    mpunct: J,
    minner: J
  },
  minner: {
    mord: J,
    mop: J,
    mbin: X0,
    mrel: C0,
    mopen: J,
    mpunct: J,
    minner: J
  }
}, f1 = {
  mord: {
    mop: J
  },
  mop: {
    mord: J,
    mop: J
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: J
  },
  mpunct: {},
  minner: {
    mop: J
  }
}, qr = {}, He = {}, Fe = {};
function D(r5) {
  for (var { type: e, names: t, props: a, handler: n, htmlBuilder: s, mathmlBuilder: o } = r5, h = {
    type: e,
    numArgs: a.numArgs,
    argTypes: a.argTypes,
    allowedInArgument: !!a.allowedInArgument,
    allowedInText: !!a.allowedInText,
    allowedInMath: a.allowedInMath === void 0 ? true : a.allowedInMath,
    numOptionalArgs: a.numOptionalArgs || 0,
    infix: !!a.infix,
    primitive: !!a.primitive,
    handler: n
  }, c = 0; c < t.length; ++c) qr[t[c]] = h;
  e && (s && (He[e] = s), o && (Fe[e] = o));
}
m$1(D, "defineFunction");
function Z0(r5) {
  var { type: e, htmlBuilder: t, mathmlBuilder: a } = r5;
  D({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: a
  });
}
m$1(Z0, "defineFunctionBuilders");
var Le = /* @__PURE__ */ m$1(function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, "normalizeArgument"), _ = /* @__PURE__ */ m$1(function(e) {
  return e.type === "ordgroup" ? e.body : [
    e
  ];
}, "ordargument"), R0 = y.makeSpan, p1 = [
  "leftmost",
  "mbin",
  "mopen",
  "mrel",
  "mop",
  "mpunct"
], v1 = [
  "rightmost",
  "mrel",
  "mclose",
  "mpunct"
], g1 = {
  display: I.DISPLAY,
  text: I.TEXT,
  script: I.SCRIPT,
  scriptscript: I.SCRIPTSCRIPT
}, b1 = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, r0 = /* @__PURE__ */ m$1(function(e, t, a, n) {
  n === void 0 && (n = [
    null,
    null
  ]);
  for (var s = [], o = 0; o < e.length; o++) {
    var h = /* @__PURE__ */ G(e[o], t);
    if (h instanceof W0) {
      var c = h.children;
      s.push(...c);
    } else s.push(h);
  }
  if (y.tryCombineChars(s), !a) return s;
  var v = t;
  if (e.length === 1) {
    var b = e[0];
    b.type === "sizing" ? v = /* @__PURE__ */ t.havingSize(b.size) : b.type === "styling" && (v = /* @__PURE__ */ t.havingStyle(g1[b.style]));
  }
  var x = /* @__PURE__ */ R0([
    n[0] || "leftmost"
  ], [], t), k = /* @__PURE__ */ R0([
    n[1] || "rightmost"
  ], [], t), w = a === "root";
  return Jt(s, (A, B) => {
    var q = B.classes[0], N = A.classes[0];
    q === "mbin" && R.contains(v1, N) ? B.classes[0] = "mord" : N === "mbin" && R.contains(p1, q) && (A.classes[0] = "mord");
  }, {
    node: x
  }, k, w), Jt(s, (A, B) => {
    var q = /* @__PURE__ */ ft(B), N = /* @__PURE__ */ ft(A), H = q && N ? A.hasClass("mtight") ? f1[q][N] : d1[q][N] : null;
    if (H) return y.makeGlue(H, v);
  }, {
    node: x
  }, k, w), s;
}, "buildExpression"), Jt = /* @__PURE__ */ m$1(function r2(e, t, a, n, s) {
  n && e.push(n);
  for (var o = 0; o < e.length; o++) {
    var h = e[o], c = /* @__PURE__ */ Nr(h);
    if (c) {
      r2(c.children, t, a, null, s);
      continue;
    }
    var v = !h.hasClass("mspace");
    if (v) {
      var b = /* @__PURE__ */ t(h, a.node);
      b && (a.insertAfter ? a.insertAfter(b) : (e.unshift(b), o++));
    }
    v ? a.node = h : s && h.hasClass("newline") && (a.node = /* @__PURE__ */ R0([
      "leftmost"
    ])), a.insertAfter = /* @__PURE__ */ ((x) => (k) => {
      e.splice(x + 1, 0, k), o++;
    })(o);
  }
  n && e.pop();
}, "traverseNonSpaceNodes"), Nr = /* @__PURE__ */ m$1(function(e) {
  return e instanceof W0 || e instanceof de || e instanceof j0 && e.hasClass("enclosing") ? e : null;
}, "checkPartialGroup"), y1 = /* @__PURE__ */ m$1(function r3(e, t) {
  var a = /* @__PURE__ */ Nr(e);
  if (a) {
    var n = a.children;
    if (n.length) {
      if (t === "right") return r3(n[n.length - 1], "right");
      if (t === "left") return r3(n[0], "left");
    }
  }
  return e;
}, "getOutermostNode"), ft = /* @__PURE__ */ m$1(function(e, t) {
  return e ? (t && (e = /* @__PURE__ */ y1(e, t)), b1[e.classes[0]] || null) : null;
}, "getTypeOfDomTree"), pe = /* @__PURE__ */ m$1(function(e, t) {
  var a = /* @__PURE__ */ [
    "nulldelimiter"
  ].concat(/* @__PURE__ */ e.baseSizingClasses());
  return R0(/* @__PURE__ */ t.concat(a));
}, "makeNullDelimiter"), G = /* @__PURE__ */ m$1(function(e, t, a) {
  if (!e) return R0();
  if (He[e.type]) {
    var n = /* @__PURE__ */ He[e.type](e, t);
    if (a && t.size !== a.size) {
      n = /* @__PURE__ */ R0(/* @__PURE__ */ t.sizingClasses(a), [
        n
      ], t);
      var s = t.sizeMultiplier / a.sizeMultiplier;
      n.height *= s, n.depth *= s;
    }
    return n;
  } else throw new z("Got group of unknown type: '" + e.type + "'");
}, "buildGroup");
function Be(r5, e) {
  var t = /* @__PURE__ */ R0([
    "base"
  ], r5, e), a = /* @__PURE__ */ R0([
    "strut"
  ]);
  return a.style.height = /* @__PURE__ */ T(t.height + t.depth), t.depth && (a.style.verticalAlign = /* @__PURE__ */ T(-t.depth)), t.children.unshift(a), t;
}
m$1(Be, "buildHTMLUnbreakable");
function pt(r5, e) {
  var t = null;
  r5.length === 1 && r5[0].type === "tag" && (t = r5[0].tag, r5 = r5[0].body);
  var a = /* @__PURE__ */ r0(r5, e, "root"), n;
  a.length === 2 && a[1].hasClass("tag") && (n = /* @__PURE__ */ a.pop());
  for (var s = [], o = [], h = 0; h < a.length; h++) if (o.push(a[h]), a[h].hasClass("mbin") || a[h].hasClass("mrel") || a[h].hasClass("allowbreak")) {
    for (var c = false; h < a.length - 1 && a[h + 1].hasClass("mspace") && !a[h + 1].hasClass("newline"); ) h++, o.push(a[h]), a[h].hasClass("nobreak") && (c = true);
    c || (s.push(/* @__PURE__ */ Be(o, e)), o = []);
  } else a[h].hasClass("newline") && (o.pop(), o.length > 0 && (s.push(/* @__PURE__ */ Be(o, e)), o = []), s.push(a[h]));
  o.length > 0 && s.push(/* @__PURE__ */ Be(o, e));
  var v;
  t ? (v = /* @__PURE__ */ Be(/* @__PURE__ */ r0(t, e, true)), v.classes = [
    "tag"
  ], s.push(v)) : n && s.push(n);
  var b = /* @__PURE__ */ R0([
    "katex-html"
  ], s);
  if (b.setAttribute("aria-hidden", "true"), v) {
    var x = v.children[0];
    x.style.height = /* @__PURE__ */ T(b.height + b.depth), b.depth && (x.style.verticalAlign = /* @__PURE__ */ T(-b.depth));
  }
  return b;
}
m$1(pt, "buildHTML");
function Rr(r5) {
  return new W0(r5);
}
m$1(Rr, "newDocumentFragment");
var u0 = (_o = class {
  constructor(e, t, a) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = a || [];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  toNode() {
    var e = /* @__PURE__ */ document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = /* @__PURE__ */ G0(this.classes));
    for (var a = 0; a < this.children.length; a++) e.appendChild(/* @__PURE__ */ this.children[a].toNode());
    return e;
  }
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += /* @__PURE__ */ R.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + R.escape(/* @__PURE__ */ G0(this.classes)) + '"'), e += ">";
    for (var a = 0; a < this.children.length; a++) e += /* @__PURE__ */ this.children[a].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}, __15 = new WeakMap(), __privateAdd(_o, __15, m$1(_o, "MathNode")), _o), $0 = (_p = class {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  toNode() {
    return document.createTextNode(this.text);
  }
  toMarkup() {
    return R.escape(/* @__PURE__ */ this.toText());
  }
  toText() {
    return this.text;
  }
}, __16 = new WeakMap(), __privateAdd(_p, __16, m$1(_p, "TextNode")), _p), vt = (_q = class {
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  toNode() {
    if (this.character) return document.createTextNode(this.character);
    var e = /* @__PURE__ */ document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", /* @__PURE__ */ T(this.width)), e;
  }
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + T(this.width) + '"/>';
  }
  toText() {
    return this.character ? this.character : " ";
  }
}, __17 = new WeakMap(), __privateAdd(_q, __17, m$1(_q, "SpaceNode")), _q), M = {
  MathNode: u0,
  TextNode: $0,
  SpaceNode: vt,
  newDocumentFragment: Rr
}, g0 = /* @__PURE__ */ m$1(function(e, t, a) {
  return W[t][e] && W[t][e].replace && e.charCodeAt(0) !== 55349 && !(Ar.hasOwnProperty(e) && a && (a.fontFamily && a.fontFamily.slice(4, 6) === "tt" || a.font && a.font.slice(4, 6) === "tt")) && (e = W[t][e].replace), new M.TextNode(e);
}, "makeText"), zt = /* @__PURE__ */ m$1(function(e) {
  return e.length === 1 ? e[0] : new M.MathNode("mrow", e);
}, "makeRow"), At = /* @__PURE__ */ m$1(function(e, t) {
  if (t.fontFamily === "texttt") return "monospace";
  if (t.fontFamily === "textsf") return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf") return "bold-italic";
  if (t.fontShape === "textit") return "italic";
  if (t.fontWeight === "textbf") return "bold";
  var a = t.font;
  if (!a || a === "mathnormal") return null;
  var n = e.mode;
  if (a === "mathit") return "italic";
  if (a === "boldsymbol") return e.type === "textord" ? "bold" : "bold-italic";
  if (a === "mathbf") return "bold";
  if (a === "mathbb") return "double-struck";
  if (a === "mathfrak") return "fraktur";
  if (a === "mathscr" || a === "mathcal") return "script";
  if (a === "mathsf") return "sans-serif";
  if (a === "mathtt") return "monospace";
  var s = e.text;
  if (R.contains([
    "\\imath",
    "\\jmath"
  ], s)) return null;
  W[n][s] && W[n][s].replace && (s = W[n][s].replace);
  var o = y.fontMap[a].fontName;
  return St(s, o, n) ? y.fontMap[a].variant : null;
}, "getVariant"), m0 = /* @__PURE__ */ m$1(function(e, t, a) {
  if (e.length === 1) {
    var n = /* @__PURE__ */ $(e[0], t);
    return a && n instanceof u0 && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [
      n
    ];
  }
  for (var s = [], o, h = 0; h < e.length; h++) {
    var c = /* @__PURE__ */ $(e[h], t);
    if (c instanceof u0 && o instanceof u0) {
      if (c.type === "mtext" && o.type === "mtext" && c.getAttribute("mathvariant") === o.getAttribute("mathvariant")) {
        o.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && o.type === "mn") {
        o.children.push(...c.children);
        continue;
      } else if (c.type === "mi" && c.children.length === 1 && o.type === "mn") {
        var v = c.children[0];
        if (v instanceof $0 && v.text === ".") {
          o.children.push(...c.children);
          continue;
        }
      } else if (o.type === "mi" && o.children.length === 1) {
        var b = o.children[0];
        if (b instanceof $0 && b.text === "̸" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
          var x = c.children[0];
          x instanceof $0 && x.text.length > 0 && (x.text = x.text.slice(0, 1) + "̸" + x.text.slice(1), s.pop());
        }
      }
    }
    s.push(c), o = c;
  }
  return s;
}, "buildExpression"), V0 = /* @__PURE__ */ m$1(function(e, t, a) {
  return zt(/* @__PURE__ */ m0(e, t, a));
}, "buildExpressionRow"), $ = /* @__PURE__ */ m$1(function(e, t) {
  if (!e) return new M.MathNode("mrow");
  if (Fe[e.type]) {
    var a = /* @__PURE__ */ Fe[e.type](e, t);
    return a;
  } else throw new z("Got group of unknown type: '" + e.type + "'");
}, "buildGroup");
function Qt(r5, e, t, a, n) {
  var s = /* @__PURE__ */ m0(r5, t), o;
  s.length === 1 && s[0] instanceof u0 && R.contains([
    "mrow",
    "mtable"
  ], s[0].type) ? o = s[0] : o = new M.MathNode("mrow", s);
  var h = new M.MathNode("annotation", [
    new M.TextNode(e)
  ]);
  h.setAttribute("encoding", "application/x-tex");
  var c = new M.MathNode("semantics", [
    o,
    h
  ]), v = new M.MathNode("math", [
    c
  ]);
  v.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), a && v.setAttribute("display", "block");
  var b = n ? "katex" : "katex-mathml";
  return y.makeSpan([
    b
  ], [
    v
  ]);
}
m$1(Qt, "buildMathML");
var Er = /* @__PURE__ */ m$1(function(e) {
  return new Ie({
    style: e.displayMode ? I.DISPLAY : I.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, "optionsFromSettings"), Ir = /* @__PURE__ */ m$1(function(e, t) {
  if (t.displayMode) {
    var a = [
      "katex-display"
    ];
    t.leqno && a.push("leqno"), t.fleqn && a.push("fleqn"), e = /* @__PURE__ */ y.makeSpan(a, [
      e
    ]);
  }
  return e;
}, "displayWrap"), x1 = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = /* @__PURE__ */ Er(a), s;
  if (a.output === "mathml") return Qt(e, t, n, a.displayMode, true);
  if (a.output === "html") {
    var o = /* @__PURE__ */ pt(e, n);
    s = /* @__PURE__ */ y.makeSpan([
      "katex"
    ], [
      o
    ]);
  } else {
    var h = /* @__PURE__ */ Qt(e, t, n, a.displayMode, false), c = /* @__PURE__ */ pt(e, n);
    s = /* @__PURE__ */ y.makeSpan([
      "katex"
    ], [
      h,
      c
    ]);
  }
  return Ir(s, a);
}, "buildTree"), w1 = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = /* @__PURE__ */ Er(a), s = /* @__PURE__ */ pt(e, n), o = /* @__PURE__ */ y.makeSpan([
    "katex"
  ], [
    s
  ]);
  return Ir(o, a);
}, "buildHTMLTree"), k1 = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  xleftequilibrium: "⇋",
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, S1 = /* @__PURE__ */ m$1(function(e) {
  var t = new M.MathNode("mo", [
    new M.TextNode(k1[e.replace(/^\\/, "")])
  ]);
  return t.setAttribute("stretchy", "true"), t;
}, "mathMLnode"), M1 = {
  overrightarrow: [
    [
      "rightarrow"
    ],
    0.888,
    522,
    "xMaxYMin"
  ],
  overleftarrow: [
    [
      "leftarrow"
    ],
    0.888,
    522,
    "xMinYMin"
  ],
  underrightarrow: [
    [
      "rightarrow"
    ],
    0.888,
    522,
    "xMaxYMin"
  ],
  underleftarrow: [
    [
      "leftarrow"
    ],
    0.888,
    522,
    "xMinYMin"
  ],
  xrightarrow: [
    [
      "rightarrow"
    ],
    1.469,
    522,
    "xMaxYMin"
  ],
  "\\cdrightarrow": [
    [
      "rightarrow"
    ],
    3,
    522,
    "xMaxYMin"
  ],
  xleftarrow: [
    [
      "leftarrow"
    ],
    1.469,
    522,
    "xMinYMin"
  ],
  "\\cdleftarrow": [
    [
      "leftarrow"
    ],
    3,
    522,
    "xMinYMin"
  ],
  Overrightarrow: [
    [
      "doublerightarrow"
    ],
    0.888,
    560,
    "xMaxYMin"
  ],
  xRightarrow: [
    [
      "doublerightarrow"
    ],
    1.526,
    560,
    "xMaxYMin"
  ],
  xLeftarrow: [
    [
      "doubleleftarrow"
    ],
    1.526,
    560,
    "xMinYMin"
  ],
  overleftharpoon: [
    [
      "leftharpoon"
    ],
    0.888,
    522,
    "xMinYMin"
  ],
  xleftharpoonup: [
    [
      "leftharpoon"
    ],
    0.888,
    522,
    "xMinYMin"
  ],
  xleftharpoondown: [
    [
      "leftharpoondown"
    ],
    0.888,
    522,
    "xMinYMin"
  ],
  overrightharpoon: [
    [
      "rightharpoon"
    ],
    0.888,
    522,
    "xMaxYMin"
  ],
  xrightharpoonup: [
    [
      "rightharpoon"
    ],
    0.888,
    522,
    "xMaxYMin"
  ],
  xrightharpoondown: [
    [
      "rightharpoondown"
    ],
    0.888,
    522,
    "xMaxYMin"
  ],
  xlongequal: [
    [
      "longequal"
    ],
    0.888,
    334,
    "xMinYMin"
  ],
  "\\cdlongequal": [
    [
      "longequal"
    ],
    3,
    334,
    "xMinYMin"
  ],
  xtwoheadleftarrow: [
    [
      "twoheadleftarrow"
    ],
    0.888,
    334,
    "xMinYMin"
  ],
  xtwoheadrightarrow: [
    [
      "twoheadrightarrow"
    ],
    0.888,
    334,
    "xMaxYMin"
  ],
  overleftrightarrow: [
    [
      "leftarrow",
      "rightarrow"
    ],
    0.888,
    522
  ],
  overbrace: [
    [
      "leftbrace",
      "midbrace",
      "rightbrace"
    ],
    1.6,
    548
  ],
  underbrace: [
    [
      "leftbraceunder",
      "midbraceunder",
      "rightbraceunder"
    ],
    1.6,
    548
  ],
  underleftrightarrow: [
    [
      "leftarrow",
      "rightarrow"
    ],
    0.888,
    522
  ],
  xleftrightarrow: [
    [
      "leftarrow",
      "rightarrow"
    ],
    1.75,
    522
  ],
  xLeftrightarrow: [
    [
      "doubleleftarrow",
      "doublerightarrow"
    ],
    1.75,
    560
  ],
  xrightleftharpoons: [
    [
      "leftharpoondownplus",
      "rightharpoonplus"
    ],
    1.75,
    716
  ],
  xleftrightharpoons: [
    [
      "leftharpoonplus",
      "rightharpoondownplus"
    ],
    1.75,
    716
  ],
  xhookleftarrow: [
    [
      "leftarrow",
      "righthook"
    ],
    1.08,
    522
  ],
  xhookrightarrow: [
    [
      "lefthook",
      "rightarrow"
    ],
    1.08,
    522
  ],
  overlinesegment: [
    [
      "leftlinesegment",
      "rightlinesegment"
    ],
    0.888,
    522
  ],
  underlinesegment: [
    [
      "leftlinesegment",
      "rightlinesegment"
    ],
    0.888,
    522
  ],
  overgroup: [
    [
      "leftgroup",
      "rightgroup"
    ],
    0.888,
    342
  ],
  undergroup: [
    [
      "leftgroupunder",
      "rightgroupunder"
    ],
    0.888,
    342
  ],
  xmapsto: [
    [
      "leftmapsto",
      "rightarrow"
    ],
    1.5,
    522
  ],
  xtofrom: [
    [
      "leftToFrom",
      "rightToFrom"
    ],
    1.75,
    528
  ],
  xrightleftarrows: [
    [
      "baraboveleftarrow",
      "rightarrowabovebar"
    ],
    1.75,
    901
  ],
  xrightequilibrium: [
    [
      "baraboveshortleftharpoon",
      "rightharpoonaboveshortbar"
    ],
    1.75,
    716
  ],
  xleftequilibrium: [
    [
      "shortbaraboveleftharpoon",
      "shortrightharpoonabovebar"
    ],
    1.75,
    716
  ]
}, z1 = /* @__PURE__ */ m$1(function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, "groupLength"), A1 = /* @__PURE__ */ m$1(function(e, t) {
  function a() {
    var h = 4e5, c = /* @__PURE__ */ e.label.slice(1);
    if (R.contains([
      "widehat",
      "widecheck",
      "widetilde",
      "utilde"
    ], c)) {
      var v = e, b = /* @__PURE__ */ z1(v.base), x, k, w;
      if (b > 5) c === "widehat" || c === "widecheck" ? (x = 420, h = 2364, w = 0.42, k = c + "4") : (x = 312, h = 2340, w = 0.34, k = "tilde4");
      else {
        var A = [
          1,
          1,
          2,
          2,
          3,
          3
        ][b];
        c === "widehat" || c === "widecheck" ? (h = [
          0,
          1062,
          2364,
          2364,
          2364
        ][A], x = [
          0,
          239,
          300,
          360,
          420
        ][A], w = [
          0,
          0.24,
          0.3,
          0.3,
          0.36,
          0.42
        ][A], k = c + A) : (h = [
          0,
          600,
          1033,
          2339,
          2340
        ][A], x = [
          0,
          260,
          286,
          306,
          312
        ][A], w = [
          0,
          0.26,
          0.286,
          0.3,
          0.306,
          0.34
        ][A], k = "tilde" + A);
      }
      var B = new M0(k), q = new x0([
        B
      ], {
        width: "100%",
        height: /* @__PURE__ */ T(w),
        viewBox: "0 0 " + h + " " + x,
        preserveAspectRatio: "none"
      });
      return {
        span: /* @__PURE__ */ y.makeSvgSpan([], [
          q
        ], t),
        minWidth: 0,
        height: w
      };
    } else {
      var N = [], H = M1[c], [F, U, P] = H, Y = P / 1e3, V = F.length, Z, X;
      if (V === 1) {
        var B0 = H[3];
        Z = [
          "hide-tail"
        ], X = [
          B0
        ];
      } else if (V === 2) Z = [
        "halfarrow-left",
        "halfarrow-right"
      ], X = [
        "xMinYMin",
        "xMaxYMin"
      ];
      else if (V === 3) Z = [
        "brace-left",
        "brace-center",
        "brace-right"
      ], X = [
        "xMinYMin",
        "xMidYMin",
        "xMaxYMin"
      ];
      else throw new Error(`Correct katexImagesData or update code here to support
                    ` + V + " children.");
      for (var n0 = 0; n0 < V; n0++) {
        var t0 = new M0(F[n0]), Y0 = new x0([
          t0
        ], {
          width: "400em",
          height: /* @__PURE__ */ T(Y),
          viewBox: "0 0 " + h + " " + P,
          preserveAspectRatio: X[n0] + " slice"
        }), l0 = /* @__PURE__ */ y.makeSvgSpan([
          Z[n0]
        ], [
          Y0
        ], t);
        if (V === 1) return {
          span: l0,
          minWidth: U,
          height: Y
        };
        l0.style.height = /* @__PURE__ */ T(Y), N.push(l0);
      }
      return {
        span: /* @__PURE__ */ y.makeSpan([
          "stretchy"
        ], N, t),
        minWidth: U,
        height: Y
      };
    }
  }
  m$1(a, "buildSvgSpan_");
  var { span: n, minWidth: s, height: o } = a();
  return n.height = o, n.style.height = /* @__PURE__ */ T(o), s > 0 && (n.style.minWidth = /* @__PURE__ */ T(s)), n;
}, "svgSpan"), T1 = /* @__PURE__ */ m$1(function(e, t, a, n, s) {
  var o, h = e.height + e.depth + a + n;
  if (/fbox|color|angl/.test(t)) {
    if (o = /* @__PURE__ */ y.makeSpan([
      "stretchy",
      t
    ], [], s), t === "fbox") {
      var c = s.color && s.getColor();
      c && (o.style.borderColor = c);
    }
  } else {
    var v = [];
    /^[bx]cancel$/.test(t) && v.push(new fe({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && v.push(new fe({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var b = new x0(v, {
      width: "100%",
      height: /* @__PURE__ */ T(h)
    });
    o = /* @__PURE__ */ y.makeSvgSpan([], [
      b
    ], s);
  }
  return o.height = h, o.style.height = /* @__PURE__ */ T(h), o;
}, "encloseSpan"), E0 = {
  encloseSpan: T1,
  mathMLnode: S1,
  svgSpan: A1
};
function L(r5, e) {
  if (!r5 || r5.type !== e) throw new Error("Expected node of type " + e + ", but got " + (r5 ? "node of type " + r5.type : String(r5)));
  return r5;
}
m$1(L, "assertNodeType");
function Tt(r5) {
  var e = /* @__PURE__ */ Ye(r5);
  if (!e) throw new Error("Expected node of symbol group type, but got " + (r5 ? "node of type " + r5.type : String(r5)));
  return e;
}
m$1(Tt, "assertSymbolNodeType");
function Ye(r5) {
  return r5 && (r5.type === "atom" || _a2.hasOwnProperty(r5.type)) ? r5 : null;
}
m$1(Ye, "checkSymbolNodeType");
var Bt = /* @__PURE__ */ m$1((r5, e) => {
  var t, a, n;
  r5 && r5.type === "supsub" ? (a = /* @__PURE__ */ L(r5.base, "accent"), t = a.base, r5.base = t, n = /* @__PURE__ */ Ja(/* @__PURE__ */ G(r5, e)), r5.base = a) : (a = /* @__PURE__ */ L(r5, "accent"), t = a.base);
  var s = /* @__PURE__ */ G(t, /* @__PURE__ */ e.havingCrampedStyle()), o = a.isShifty && R.isCharacterBox(t), h = 0;
  if (o) {
    var c = /* @__PURE__ */ R.getBaseElem(t), v = /* @__PURE__ */ G(c, /* @__PURE__ */ e.havingCrampedStyle());
    h = Wt(v).skew;
  }
  var b = a.label === "\\c", x = b ? s.height + s.depth : Math.min(s.height, e.fontMetrics().xHeight), k;
  if (a.isStretchy) k = /* @__PURE__ */ E0.svgSpan(a, e), k = /* @__PURE__ */ y.makeVList({
    positionType: "firstBaseline",
    children: [
      {
        type: "elem",
        elem: s
      },
      {
        type: "elem",
        elem: k,
        wrapperClasses: [
          "svg-align"
        ],
        wrapperStyle: h > 0 ? {
          width: "calc(100% - " + T(2 * h) + ")",
          marginLeft: /* @__PURE__ */ T(2 * h)
        } : void 0
      }
    ]
  }, e);
  else {
    var w, A;
    a.label === "\\vec" ? (w = /* @__PURE__ */ y.staticSvg("vec", e), A = y.svgData.vec[1]) : (w = /* @__PURE__ */ y.makeOrd({
      mode: a.mode,
      text: a.label
    }, e, "textord"), w = /* @__PURE__ */ Wt(w), w.italic = 0, A = w.width, b && (x += w.depth)), k = /* @__PURE__ */ y.makeSpan([
      "accent-body"
    ], [
      w
    ]);
    var B = a.label === "\\textcircled";
    B && (k.classes.push("accent-full"), x = s.height);
    var q = h;
    B || (q -= A / 2), k.style.left = /* @__PURE__ */ T(q), a.label === "\\textcircled" && (k.style.top = ".2em"), k = /* @__PURE__ */ y.makeVList({
      positionType: "firstBaseline",
      children: [
        {
          type: "elem",
          elem: s
        },
        {
          type: "kern",
          size: -x
        },
        {
          type: "elem",
          elem: k
        }
      ]
    }, e);
  }
  var N = /* @__PURE__ */ y.makeSpan([
    "mord",
    "accent"
  ], [
    k
  ], e);
  return n ? (n.children[0] = N, n.height = /* @__PURE__ */ Math.max(N.height, n.height), n.classes[0] = "mord", n) : N;
}, "htmlBuilder$a"), Or = /* @__PURE__ */ m$1((r5, e) => {
  var t = r5.isStretchy ? E0.mathMLnode(r5.label) : new M.MathNode("mo", [
    /* @__PURE__ */ g0(r5.label, r5.mode)
  ]), a = new M.MathNode("mover", [
    /* @__PURE__ */ $(r5.base, e),
    t
  ]);
  return a.setAttribute("accent", "true"), a;
}, "mathmlBuilder$9"), B1 = new RegExp([
  "\\acute",
  "\\grave",
  "\\ddot",
  "\\tilde",
  "\\bar",
  "\\breve",
  "\\check",
  "\\hat",
  "\\vec",
  "\\dot",
  "\\mathring"
].map((r5) => "\\" + r5).join("|"));
D({
  type: "accent",
  names: [
    "\\acute",
    "\\grave",
    "\\ddot",
    "\\tilde",
    "\\bar",
    "\\breve",
    "\\check",
    "\\hat",
    "\\vec",
    "\\dot",
    "\\mathring",
    "\\widecheck",
    "\\widehat",
    "\\widetilde",
    "\\overrightarrow",
    "\\overleftarrow",
    "\\Overrightarrow",
    "\\overleftrightarrow",
    "\\overgroup",
    "\\overlinesegment",
    "\\overleftharpoon",
    "\\overrightharpoon"
  ],
  props: {
    numArgs: 1
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ Le(e[0]), a = !B1.test(r5.funcName), n = !a || r5.funcName === "\\widehat" || r5.funcName === "\\widetilde" || r5.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r5.parser.mode,
      label: r5.funcName,
      isStretchy: a,
      isShifty: n,
      base: t
    };
  }, "handler"),
  htmlBuilder: Bt,
  mathmlBuilder: Or
});
D({
  type: "accent",
  names: [
    "\\'",
    "\\`",
    "\\^",
    "\\~",
    "\\=",
    "\\u",
    "\\.",
    '\\"',
    "\\c",
    "\\r",
    "\\H",
    "\\v",
    "\\textcircled"
  ],
  props: {
    numArgs: 1,
    allowedInText: true,
    allowedInMath: true,
    argTypes: [
      "primitive"
    ]
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var t = e[0], a = r5.parser.mode;
    return a === "math" && (r5.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r5.funcName + " works only in text mode"), a = "text"), {
      type: "accent",
      mode: a,
      label: r5.funcName,
      isStretchy: false,
      isShifty: true,
      base: t
    };
  }, "handler"),
  htmlBuilder: Bt,
  mathmlBuilder: Or
});
D({
  type: "accentUnder",
  names: [
    "\\underleftarrow",
    "\\underrightarrow",
    "\\underleftrightarrow",
    "\\undergroup",
    "\\underlinesegment",
    "\\utilde"
  ],
  props: {
    numArgs: 1
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a } = r5, n = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: a,
      base: n
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ G(r5.base, e), a = /* @__PURE__ */ E0.svgSpan(r5, e), n = r5.label === "\\utilde" ? 0.12 : 0, s = /* @__PURE__ */ y.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [
        {
          type: "elem",
          elem: a,
          wrapperClasses: [
            "svg-align"
          ]
        },
        {
          type: "kern",
          size: n
        },
        {
          type: "elem",
          elem: t
        }
      ]
    }, e);
    return y.makeSpan([
      "mord",
      "accentunder"
    ], [
      s
    ], e);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ E0.mathMLnode(r5.label), a = new M.MathNode("munder", [
      /* @__PURE__ */ $(r5.base, e),
      t
    ]);
    return a.setAttribute("accentunder", "true"), a;
  }, "mathmlBuilder")
});
var De = /* @__PURE__ */ m$1((r5) => {
  var e = new M.MathNode("mpadded", r5 ? [
    r5
  ] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
}, "paddedNode");
D({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r5, e, t) {
    var { parser: a, funcName: n } = r5;
    return {
      type: "xArrow",
      mode: a.mode,
      label: n,
      body: e[0],
      below: t[0]
    };
  },
  htmlBuilder(r5, e) {
    var t = e.style, a = /* @__PURE__ */ e.havingStyle(/* @__PURE__ */ t.sup()), n = /* @__PURE__ */ y.wrapFragment(/* @__PURE__ */ G(r5.body, a, e), e), s = r5.label.slice(0, 2) === "\\x" ? "x" : "cd";
    n.classes.push(s + "-arrow-pad");
    var o;
    r5.below && (a = /* @__PURE__ */ e.havingStyle(/* @__PURE__ */ t.sub()), o = /* @__PURE__ */ y.wrapFragment(/* @__PURE__ */ G(r5.below, a, e), e), o.classes.push(s + "-arrow-pad"));
    var h = /* @__PURE__ */ E0.svgSpan(r5, e), c = -e.fontMetrics().axisHeight + 0.5 * h.height, v = -e.fontMetrics().axisHeight - 0.5 * h.height - 0.111;
    (n.depth > 0.25 || r5.label === "\\xleftequilibrium") && (v -= n.depth);
    var b;
    if (o) {
      var x = -e.fontMetrics().axisHeight + o.height + 0.5 * h.height + 0.111;
      b = /* @__PURE__ */ y.makeVList({
        positionType: "individualShift",
        children: [
          {
            type: "elem",
            elem: n,
            shift: v
          },
          {
            type: "elem",
            elem: h,
            shift: c
          },
          {
            type: "elem",
            elem: o,
            shift: x
          }
        ]
      }, e);
    } else b = /* @__PURE__ */ y.makeVList({
      positionType: "individualShift",
      children: [
        {
          type: "elem",
          elem: n,
          shift: v
        },
        {
          type: "elem",
          elem: h,
          shift: c
        }
      ]
    }, e);
    return b.children[0].children[0].children[1].classes.push("svg-align"), y.makeSpan([
      "mrel",
      "x-arrow"
    ], [
      b
    ], e);
  },
  mathmlBuilder(r5, e) {
    var t = /* @__PURE__ */ E0.mathMLnode(r5.label);
    t.setAttribute("minsize", r5.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var a;
    if (r5.body) {
      var n = /* @__PURE__ */ De(/* @__PURE__ */ $(r5.body, e));
      if (r5.below) {
        var s = /* @__PURE__ */ De(/* @__PURE__ */ $(r5.below, e));
        a = new M.MathNode("munderover", [
          t,
          s,
          n
        ]);
      } else a = new M.MathNode("mover", [
        t,
        n
      ]);
    } else if (r5.below) {
      var o = /* @__PURE__ */ De(/* @__PURE__ */ $(r5.below, e));
      a = new M.MathNode("munder", [
        t,
        o
      ]);
    } else a = /* @__PURE__ */ De(), a = new M.MathNode("mover", [
      t,
      a
    ]);
    return a;
  }
});
var D1 = y.makeSpan;
function Hr(r5, e) {
  var t = /* @__PURE__ */ r0(r5.body, e, true);
  return D1([
    r5.mclass
  ], t, e);
}
m$1(Hr, "htmlBuilder$9");
function Fr(r5, e) {
  var t, a = /* @__PURE__ */ m0(r5.body, e);
  return r5.mclass === "minner" ? t = new M.MathNode("mpadded", a) : r5.mclass === "mord" ? r5.isCharacterBox ? (t = a[0], t.type = "mi") : t = new M.MathNode("mi", a) : (r5.isCharacterBox ? (t = a[0], t.type = "mo") : t = new M.MathNode("mo", a), r5.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r5.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r5.mclass === "mopen" || r5.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r5.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
m$1(Fr, "mathmlBuilder$8");
D({
  type: "mclass",
  names: [
    "\\mathord",
    "\\mathbin",
    "\\mathrel",
    "\\mathopen",
    "\\mathclose",
    "\\mathpunct",
    "\\mathinner"
  ],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler(r5, e) {
    var { parser: t, funcName: a } = r5, n = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + a.slice(5),
      body: /* @__PURE__ */ _(n),
      isCharacterBox: /* @__PURE__ */ R.isCharacterBox(n)
    };
  },
  htmlBuilder: Hr,
  mathmlBuilder: Fr
});
var Xe = /* @__PURE__ */ m$1((r5) => {
  var e = r5.type === "ordgroup" && r5.body.length ? r5.body[0] : r5;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
}, "binrelClass");
D({
  type: "mclass",
  names: [
    "\\@binrel"
  ],
  props: {
    numArgs: 2
  },
  handler(r5, e) {
    var { parser: t } = r5;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: /* @__PURE__ */ Xe(e[0]),
      body: /* @__PURE__ */ _(e[1]),
      isCharacterBox: /* @__PURE__ */ R.isCharacterBox(e[1])
    };
  }
});
D({
  type: "mclass",
  names: [
    "\\stackrel",
    "\\overset",
    "\\underset"
  ],
  props: {
    numArgs: 2
  },
  handler(r5, e) {
    var { parser: t, funcName: a } = r5, n = e[1], s = e[0], o;
    a !== "\\stackrel" ? o = /* @__PURE__ */ Xe(n) : o = "mrel";
    var h = {
      type: "op",
      mode: n.mode,
      limits: true,
      alwaysHandleSupSub: true,
      parentIsSupSub: false,
      symbol: false,
      suppressBaseShift: a !== "\\stackrel",
      body: /* @__PURE__ */ _(n)
    }, c = {
      type: "supsub",
      mode: s.mode,
      base: h,
      sup: a === "\\underset" ? null : s,
      sub: a === "\\underset" ? s : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: o,
      body: [
        c
      ],
      isCharacterBox: /* @__PURE__ */ R.isCharacterBox(c)
    };
  },
  htmlBuilder: Hr,
  mathmlBuilder: Fr
});
D({
  type: "pmb",
  names: [
    "\\pmb"
  ],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(r5, e) {
    var { parser: t } = r5;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: /* @__PURE__ */ Xe(e[0]),
      body: /* @__PURE__ */ _(e[0])
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ r0(r5.body, e, true), a = /* @__PURE__ */ y.makeSpan([
      r5.mclass
    ], t, e);
    return a.style.textShadow = "0.02em 0.01em 0.04px", a;
  },
  mathmlBuilder(r5, e) {
    var t = /* @__PURE__ */ m0(r5.body, e), a = new M.MathNode("mstyle", t);
    return a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), a;
  }
});
var C1 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, _t = /* @__PURE__ */ m$1(() => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), "newCell"), er = /* @__PURE__ */ m$1((r5) => r5.type === "textord" && r5.text === "@", "isStartOfArrow"), q1 = /* @__PURE__ */ m$1((r5, e) => (r5.type === "mathord" || r5.type === "atom") && r5.text === e, "isLabelEnd");
function N1(r5, e, t) {
  var a = C1[r5];
  switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(a, [
        e[0]
      ], [
        e[1]
      ]);
    case "\\uparrow":
    case "\\downarrow": {
      var n = /* @__PURE__ */ t.callFunction("\\\\cdleft", [
        e[0]
      ], []), s = {
        type: "atom",
        text: a,
        mode: "math",
        family: "rel"
      }, o = /* @__PURE__ */ t.callFunction("\\Big", [
        s
      ], []), h = /* @__PURE__ */ t.callFunction("\\\\cdright", [
        e[1]
      ], []), c = {
        type: "ordgroup",
        mode: "math",
        body: [
          n,
          o,
          h
        ]
      };
      return t.callFunction("\\\\cdparent", [
        c
      ], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var v = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [
        v
      ], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
m$1(N1, "cdArrow");
function R1(r5) {
  var e = [];
  for (r5.gullet.beginGroup(), r5.gullet.macros.set("\\cr", "\\\\\\relax"), r5.gullet.beginGroup(); ; ) {
    e.push(/* @__PURE__ */ r5.parseExpression(false, "\\\\")), r5.gullet.endGroup(), r5.gullet.beginGroup();
    var t = r5.fetch().text;
    if (t === "&" || t === "\\\\") r5.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else throw new z("Expected \\\\ or \\cr or \\end", r5.nextToken);
  }
  for (var a = [], n = [
    a
  ], s = 0; s < e.length; s++) {
    for (var o = e[s], h = /* @__PURE__ */ _t(), c = 0; c < o.length; c++) if (!er(o[c])) h.body.push(o[c]);
    else {
      a.push(h), c += 1;
      var v = Tt(o[c]).text, b = new Array(2);
      if (b[0] = {
        type: "ordgroup",
        mode: "math",
        body: []
      }, b[1] = {
        type: "ordgroup",
        mode: "math",
        body: []
      }, !("=|.".indexOf(v) > -1)) if ("<>AV".indexOf(v) > -1) for (var x = 0; x < 2; x++) {
        for (var k = true, w = c + 1; w < o.length; w++) {
          if (q1(o[w], v)) {
            k = false, c = w;
            break;
          }
          if (er(o[w])) throw new z("Missing a " + v + " character to complete a CD arrow.", o[w]);
          b[x].body.push(o[w]);
        }
        if (k) throw new z("Missing a " + v + " character to complete a CD arrow.", o[c]);
      }
      else throw new z('Expected one of "<>AV=|." after @', o[c]);
      var A = /* @__PURE__ */ N1(v, b, r5), B = {
        type: "styling",
        body: [
          A
        ],
        mode: "math",
        style: "display"
      };
      a.push(B), h = /* @__PURE__ */ _t();
    }
    s % 2 === 0 ? a.push(h) : a.shift(), a = [], n.push(a);
  }
  r5.gullet.endGroup(), r5.gullet.endGroup();
  var q = /* @__PURE__ */ new Array(n[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    postgap: 0.25
  });
  return {
    type: "array",
    mode: "math",
    body: n,
    arraystretch: 1,
    addJot: true,
    rowGaps: [
      null
    ],
    cols: q,
    colSeparationType: "CD",
    hLinesBeforeRow: /* @__PURE__ */ new Array(n.length + 1).fill([])
  };
}
m$1(R1, "parseCD");
D({
  type: "cdlabel",
  names: [
    "\\\\cdleft",
    "\\\\cdright"
  ],
  props: {
    numArgs: 1
  },
  handler(r5, e) {
    var { parser: t, funcName: a } = r5;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: /* @__PURE__ */ a.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ e.havingStyle(/* @__PURE__ */ e.style.sup()), a = /* @__PURE__ */ y.wrapFragment(/* @__PURE__ */ G(r5.label, t, e), e);
    return a.classes.push("cd-label-" + r5.side), a.style.bottom = /* @__PURE__ */ T(0.8 - a.depth), a.height = 0, a.depth = 0, a;
  },
  mathmlBuilder(r5, e) {
    var t = new M.MathNode("mrow", [
      /* @__PURE__ */ $(r5.label, e)
    ]);
    return t = new M.MathNode("mpadded", [
      t
    ]), t.setAttribute("width", "0"), r5.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new M.MathNode("mstyle", [
      t
    ]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
D({
  type: "cdlabelparent",
  names: [
    "\\\\cdparent"
  ],
  props: {
    numArgs: 1
  },
  handler(r5, e) {
    var { parser: t } = r5;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ y.wrapFragment(/* @__PURE__ */ G(r5.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r5, e) {
    return new M.MathNode("mrow", [
      /* @__PURE__ */ $(r5.fragment, e)
    ]);
  }
});
D({
  type: "textord",
  names: [
    "\\@char"
  ],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(r5, e) {
    for (var { parser: t } = r5, a = /* @__PURE__ */ L(e[0], "ordgroup"), n = a.body, s = "", o = 0; o < n.length; o++) {
      var h = /* @__PURE__ */ L(n[o], "textord");
      s += h.text;
    }
    var c = /* @__PURE__ */ parseInt(s), v;
    if (isNaN(c)) throw new z("\\@char has non-numeric argument " + s);
    if (c < 0 || c >= 1114111) throw new z("\\@char with invalid code point " + s);
    return c <= 65535 ? v = /* @__PURE__ */ String.fromCharCode(c) : (c -= 65536, v = /* @__PURE__ */ String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: v
    };
  }
});
var Lr = /* @__PURE__ */ m$1((r5, e) => {
  var t = /* @__PURE__ */ r0(r5.body, /* @__PURE__ */ e.withColor(r5.color), false);
  return y.makeFragment(t);
}, "htmlBuilder$8"), Pr = /* @__PURE__ */ m$1((r5, e) => {
  var t = /* @__PURE__ */ m0(r5.body, /* @__PURE__ */ e.withColor(r5.color)), a = new M.MathNode("mstyle", t);
  return a.setAttribute("mathcolor", r5.color), a;
}, "mathmlBuilder$7");
D({
  type: "color",
  names: [
    "\\textcolor"
  ],
  props: {
    numArgs: 2,
    allowedInText: true,
    argTypes: [
      "color",
      "original"
    ]
  },
  handler(r5, e) {
    var { parser: t } = r5, a = L(e[0], "color-token").color, n = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: /* @__PURE__ */ _(n)
    };
  },
  htmlBuilder: Lr,
  mathmlBuilder: Pr
});
D({
  type: "color",
  names: [
    "\\color"
  ],
  props: {
    numArgs: 1,
    allowedInText: true,
    argTypes: [
      "color"
    ]
  },
  handler(r5, e) {
    var { parser: t, breakOnTokenText: a } = r5, n = L(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", n);
    var s = /* @__PURE__ */ t.parseExpression(true, a);
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: s
    };
  },
  htmlBuilder: Lr,
  mathmlBuilder: Pr
});
D({
  type: "cr",
  names: [
    "\\\\"
  ],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: true
  },
  handler(r5, e, t) {
    var { parser: a } = r5, n = a.gullet.future().text === "[" ? a.parseSizeGroup(true) : null, s = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: a.mode,
      newLine: s,
      size: n && L(n, "size").value
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ y.makeSpan([
      "mspace"
    ], [], e);
    return r5.newLine && (t.classes.push("newline"), r5.size && (t.style.marginTop = /* @__PURE__ */ T(/* @__PURE__ */ Q(r5.size, e)))), t;
  },
  mathmlBuilder(r5, e) {
    var t = new M.MathNode("mspace");
    return r5.newLine && (t.setAttribute("linebreak", "newline"), r5.size && t.setAttribute("height", /* @__PURE__ */ T(/* @__PURE__ */ Q(r5.size, e)))), t;
  }
});
var gt = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Gr = /* @__PURE__ */ m$1((r5) => {
  var e = r5.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e)) throw new z("Expected a control sequence", r5);
  return e;
}, "checkControlSequence"), E1 = /* @__PURE__ */ m$1((r5) => {
  var e = /* @__PURE__ */ r5.gullet.popToken();
  return e.text === "=" && (e = /* @__PURE__ */ r5.gullet.popToken(), e.text === " " && (e = /* @__PURE__ */ r5.gullet.popToken())), e;
}, "getRHS"), Vr = /* @__PURE__ */ m$1((r5, e, t, a) => {
  var n = /* @__PURE__ */ r5.gullet.macros.get(t.text);
  n == null && (t.noexpand = true, n = {
    tokens: [
      t
    ],
    numArgs: 0,
    unexpandable: !r5.gullet.isExpandable(t.text)
  }), r5.gullet.macros.set(e, n, a);
}, "letCommand");
D({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
  ],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler(r5) {
    var { parser: e, funcName: t } = r5;
    e.consumeSpaces();
    var a = /* @__PURE__ */ e.fetch();
    if (gt[a.text]) return (t === "\\global" || t === "\\\\globallong") && (a.text = gt[a.text]), L(/* @__PURE__ */ e.parseFunction(), "internal");
    throw new z("Invalid token after macro prefix", a);
  }
});
D({
  type: "internal",
  names: [
    "\\def",
    "\\gdef",
    "\\edef",
    "\\xdef"
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(r5) {
    var { parser: e, funcName: t } = r5, a = /* @__PURE__ */ e.gullet.popToken(), n = a.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(n)) throw new z("Expected a control sequence", a);
    for (var s = 0, o, h = [
      []
    ]; e.gullet.future().text !== "{"; ) if (a = /* @__PURE__ */ e.gullet.popToken(), a.text === "#") {
      if (e.gullet.future().text === "{") {
        o = /* @__PURE__ */ e.gullet.future(), h[s].push("{");
        break;
      }
      if (a = /* @__PURE__ */ e.gullet.popToken(), !/^[1-9]$/.test(a.text)) throw new z('Invalid argument number "' + a.text + '"');
      if (parseInt(a.text) !== s + 1) throw new z('Argument number "' + a.text + '" out of order');
      s++, h.push([]);
    } else {
      if (a.text === "EOF") throw new z("Expected a macro definition");
      h[s].push(a.text);
    }
    var { tokens: c } = e.gullet.consumeArg();
    return o && c.unshift(o), (t === "\\edef" || t === "\\xdef") && (c = /* @__PURE__ */ e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(n, {
      tokens: c,
      numArgs: s,
      delimiters: h
    }, t === gt[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
D({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(r5) {
    var { parser: e, funcName: t } = r5, a = /* @__PURE__ */ Gr(/* @__PURE__ */ e.gullet.popToken());
    e.gullet.consumeSpaces();
    var n = /* @__PURE__ */ E1(e);
    return Vr(e, a, n, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
D({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(r5) {
    var { parser: e, funcName: t } = r5, a = /* @__PURE__ */ Gr(/* @__PURE__ */ e.gullet.popToken()), n = /* @__PURE__ */ e.gullet.popToken(), s = /* @__PURE__ */ e.gullet.popToken();
    return Vr(e, a, s, t === "\\\\globalfuture"), e.gullet.pushToken(s), e.gullet.pushToken(n), {
      type: "internal",
      mode: e.mode
    };
  }
});
var ue = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = W.math[e] && W.math[e].replace, s = /* @__PURE__ */ St(n || e, t, a);
  if (!s) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return s;
}, "getMetrics"), Dt = /* @__PURE__ */ m$1(function(e, t, a, n) {
  var s = /* @__PURE__ */ a.havingBaseStyle(t), o = /* @__PURE__ */ y.makeSpan(/* @__PURE__ */ n.concat(/* @__PURE__ */ s.sizingClasses(a)), [
    e
  ], a), h = s.sizeMultiplier / a.sizeMultiplier;
  return o.height *= h, o.depth *= h, o.maxFontSize = s.sizeMultiplier, o;
}, "styleWrap"), Ur = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = /* @__PURE__ */ t.havingBaseStyle(a), s = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = /* @__PURE__ */ T(s), e.height -= s, e.depth += s;
}, "centerSpan"), I1 = /* @__PURE__ */ m$1(function(e, t, a, n, s, o) {
  var h = /* @__PURE__ */ y.makeSymbol(e, "Main-Regular", s, n), c = /* @__PURE__ */ Dt(h, t, n, o);
  return a && Ur(c, n, t), c;
}, "makeSmallDelim"), O1 = /* @__PURE__ */ m$1(function(e, t, a, n) {
  return y.makeSymbol(e, "Size" + t + "-Regular", a, n);
}, "mathrmSize"), Yr = /* @__PURE__ */ m$1(function(e, t, a, n, s, o) {
  var h = /* @__PURE__ */ O1(e, t, s, n), c = /* @__PURE__ */ Dt(/* @__PURE__ */ y.makeSpan([
    "delimsizing",
    "size" + t
  ], [
    h
  ], n), I.TEXT, n, o);
  return a && Ur(c, n, I.TEXT), c;
}, "makeLargeDelim"), tt = /* @__PURE__ */ m$1(function(e, t, a) {
  var n;
  t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
  var s = /* @__PURE__ */ y.makeSpan([
    "delimsizinginner",
    n
  ], [
    /* @__PURE__ */ y.makeSpan([], [
      /* @__PURE__ */ y.makeSymbol(e, t, a)
    ])
  ]);
  return {
    type: "elem",
    elem: s
  };
}, "makeGlyphSpan"), rt = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = S0["Size4-Regular"][e.charCodeAt(0)] ? S0["Size4-Regular"][e.charCodeAt(0)][4] : S0["Size1-Regular"][e.charCodeAt(0)][4], s = new M0("inner", Ya(e, /* @__PURE__ */ Math.round(1e3 * t))), o = new x0([
    s
  ], {
    width: /* @__PURE__ */ T(n),
    height: /* @__PURE__ */ T(t),
    style: "width:" + T(n),
    viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), h = /* @__PURE__ */ y.makeSvgSpan([], [
    o
  ], a);
  return h.height = t, h.style.height = /* @__PURE__ */ T(t), h.style.width = /* @__PURE__ */ T(n), {
    type: "elem",
    elem: h
  };
}, "makeInner"), bt = 8e-3, Ce = {
  type: "kern",
  size: -1 * bt
}, H1 = [
  "|",
  "\\lvert",
  "\\rvert",
  "\\vert"
], F1 = [
  "\\|",
  "\\lVert",
  "\\rVert",
  "\\Vert"
], Xr = /* @__PURE__ */ m$1(function(e, t, a, n, s, o) {
  var h, c, v, b, x = "", k = 0;
  h = v = b = e, c = null;
  var w = "Size1-Regular";
  e === "\\uparrow" ? v = b = "⏐" : e === "\\Uparrow" ? v = b = "‖" : e === "\\downarrow" ? h = v = "⏐" : e === "\\Downarrow" ? h = v = "‖" : e === "\\updownarrow" ? (h = "\\uparrow", v = "⏐", b = "\\downarrow") : e === "\\Updownarrow" ? (h = "\\Uparrow", v = "‖", b = "\\Downarrow") : R.contains(H1, e) ? (v = "∣", x = "vert", k = 333) : R.contains(F1, e) ? (v = "∥", x = "doublevert", k = 556) : e === "[" || e === "\\lbrack" ? (h = "⎡", v = "⎢", b = "⎣", w = "Size4-Regular", x = "lbrack", k = 667) : e === "]" || e === "\\rbrack" ? (h = "⎤", v = "⎥", b = "⎦", w = "Size4-Regular", x = "rbrack", k = 667) : e === "\\lfloor" || e === "⌊" ? (v = h = "⎢", b = "⎣", w = "Size4-Regular", x = "lfloor", k = 667) : e === "\\lceil" || e === "⌈" ? (h = "⎡", v = b = "⎢", w = "Size4-Regular", x = "lceil", k = 667) : e === "\\rfloor" || e === "⌋" ? (v = h = "⎥", b = "⎦", w = "Size4-Regular", x = "rfloor", k = 667) : e === "\\rceil" || e === "⌉" ? (h = "⎤", v = b = "⎥", w = "Size4-Regular", x = "rceil", k = 667) : e === "(" || e === "\\lparen" ? (h = "⎛", v = "⎜", b = "⎝", w = "Size4-Regular", x = "lparen", k = 875) : e === ")" || e === "\\rparen" ? (h = "⎞", v = "⎟", b = "⎠", w = "Size4-Regular", x = "rparen", k = 875) : e === "\\{" || e === "\\lbrace" ? (h = "⎧", c = "⎨", b = "⎩", v = "⎪", w = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (h = "⎫", c = "⎬", b = "⎭", v = "⎪", w = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (h = "⎧", b = "⎩", v = "⎪", w = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (h = "⎫", b = "⎭", v = "⎪", w = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (h = "⎧", b = "⎭", v = "⎪", w = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (h = "⎫", b = "⎩", v = "⎪", w = "Size4-Regular");
  var A = /* @__PURE__ */ ue(h, w, s), B = A.height + A.depth, q = /* @__PURE__ */ ue(v, w, s), N = q.height + q.depth, H = /* @__PURE__ */ ue(b, w, s), F = H.height + H.depth, U = 0, P = 1;
  if (c !== null) {
    var Y = /* @__PURE__ */ ue(c, w, s);
    U = Y.height + Y.depth, P = 2;
  }
  var V = B + F + U, Z = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.ceil((t - V) / (P * N))), X = V + Z * P * N, B0 = n.fontMetrics().axisHeight;
  a && (B0 *= n.sizeMultiplier);
  var n0 = X / 2 - B0, t0 = [];
  if (x.length > 0) {
    var Y0 = X - B - F, l0 = /* @__PURE__ */ Math.round(X * 1e3), b0 = /* @__PURE__ */ Xa(x, /* @__PURE__ */ Math.round(Y0 * 1e3)), O0 = new M0(x, b0), K0 = (k / 1e3).toFixed(3) + "em", J0 = (l0 / 1e3).toFixed(3) + "em", je = new x0([
      O0
    ], {
      width: K0,
      height: J0,
      viewBox: "0 0 " + k + " " + l0
    }), H0 = /* @__PURE__ */ y.makeSvgSpan([], [
      je
    ], n);
    H0.height = l0 / 1e3, H0.style.width = K0, H0.style.height = J0, t0.push({
      type: "elem",
      elem: H0
    });
  } else {
    if (t0.push(/* @__PURE__ */ tt(b, w, s)), t0.push(Ce), c === null) {
      var F0 = X - B - F + 2 * bt;
      t0.push(/* @__PURE__ */ rt(v, F0, n));
    } else {
      var f0 = (X - B - F - U) / 2 + 2 * bt;
      t0.push(/* @__PURE__ */ rt(v, f0, n)), t0.push(Ce), t0.push(/* @__PURE__ */ tt(c, w, s)), t0.push(Ce), t0.push(/* @__PURE__ */ rt(v, f0, n));
    }
    t0.push(Ce), t0.push(/* @__PURE__ */ tt(h, w, s));
  }
  var se = /* @__PURE__ */ n.havingBaseStyle(I.TEXT), Ze = /* @__PURE__ */ y.makeVList({
    positionType: "bottom",
    positionData: n0,
    children: t0
  }, se);
  return Dt(/* @__PURE__ */ y.makeSpan([
    "delimsizing",
    "mult"
  ], [
    Ze
  ], se), I.TEXT, n, o);
}, "makeStackedDelim"), at = 80, nt = 0.08, it = /* @__PURE__ */ m$1(function(e, t, a, n, s) {
  var o = /* @__PURE__ */ Ua(e, n, a), h = new M0(e, o), c = new x0([
    h
  ], {
    width: "400em",
    height: /* @__PURE__ */ T(t),
    viewBox: "0 0 400000 " + a,
    preserveAspectRatio: "xMinYMin slice"
  });
  return y.makeSvgSpan([
    "hide-tail"
  ], [
    c
  ], s);
}, "sqrtSvg"), L1 = /* @__PURE__ */ m$1(function(e, t) {
  var a = /* @__PURE__ */ t.havingBaseSizing(), n = /* @__PURE__ */ Zr("\\surd", e * a.sizeMultiplier, jr, a), s = a.sizeMultiplier, o = /* @__PURE__ */ Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), h, c = 0, v = 0, b = 0, x;
  return n.type === "small" ? (b = 1e3 + 1e3 * o + at, e < 1 ? s = 1 : e < 1.4 && (s = 0.7), c = (1 + o + nt) / s, v = (1 + o) / s, h = /* @__PURE__ */ it("sqrtMain", c, b, o, t), h.style.minWidth = "0.853em", x = 0.833 / s) : n.type === "large" ? (b = (1e3 + at) * he[n.size], v = (he[n.size] + o) / s, c = (he[n.size] + o + nt) / s, h = /* @__PURE__ */ it("sqrtSize" + n.size, c, b, o, t), h.style.minWidth = "1.02em", x = 1 / s) : (c = e + o + nt, v = e + o, b = Math.floor(1e3 * e + o) + at, h = /* @__PURE__ */ it("sqrtTall", c, b, o, t), h.style.minWidth = "0.742em", x = 1.056), h.height = v, h.style.height = /* @__PURE__ */ T(c), {
    span: h,
    advanceWidth: x,
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + o) * s
  };
}, "makeSqrtImage"), $r = [
  "(",
  "\\lparen",
  ")",
  "\\rparen",
  "[",
  "\\lbrack",
  "]",
  "\\rbrack",
  "\\{",
  "\\lbrace",
  "\\}",
  "\\rbrace",
  "\\lfloor",
  "\\rfloor",
  "⌊",
  "⌋",
  "\\lceil",
  "\\rceil",
  "⌈",
  "⌉",
  "\\surd"
], P1 = [
  "\\uparrow",
  "\\downarrow",
  "\\updownarrow",
  "\\Uparrow",
  "\\Downarrow",
  "\\Updownarrow",
  "|",
  "\\|",
  "\\vert",
  "\\Vert",
  "\\lvert",
  "\\rvert",
  "\\lVert",
  "\\rVert",
  "\\lgroup",
  "\\rgroup",
  "⟮",
  "⟯",
  "\\lmoustache",
  "\\rmoustache",
  "⎰",
  "⎱"
], Wr = [
  "<",
  ">",
  "\\langle",
  "\\rangle",
  "/",
  "\\backslash",
  "\\lt",
  "\\gt"
], he = [
  0,
  1.2,
  1.8,
  2.4,
  3
], G1 = /* @__PURE__ */ m$1(function(e, t, a, n, s) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), R.contains($r, e) || R.contains(Wr, e)) return Yr(e, t, false, a, n, s);
  if (R.contains(P1, e)) return Xr(e, he[t], false, a, n, s);
  throw new z("Illegal delimiter: '" + e + "'");
}, "makeSizedDelim"), V1 = [
  {
    type: "small",
    style: I.SCRIPTSCRIPT
  },
  {
    type: "small",
    style: I.SCRIPT
  },
  {
    type: "small",
    style: I.TEXT
  },
  {
    type: "large",
    size: 1
  },
  {
    type: "large",
    size: 2
  },
  {
    type: "large",
    size: 3
  },
  {
    type: "large",
    size: 4
  }
], U1 = [
  {
    type: "small",
    style: I.SCRIPTSCRIPT
  },
  {
    type: "small",
    style: I.SCRIPT
  },
  {
    type: "small",
    style: I.TEXT
  },
  {
    type: "stack"
  }
], jr = [
  {
    type: "small",
    style: I.SCRIPTSCRIPT
  },
  {
    type: "small",
    style: I.SCRIPT
  },
  {
    type: "small",
    style: I.TEXT
  },
  {
    type: "large",
    size: 1
  },
  {
    type: "large",
    size: 2
  },
  {
    type: "large",
    size: 3
  },
  {
    type: "large",
    size: 4
  },
  {
    type: "stack"
  }
], Y1 = /* @__PURE__ */ m$1(function(e) {
  if (e.type === "small") return "Main-Regular";
  if (e.type === "large") return "Size" + e.size + "-Regular";
  if (e.type === "stack") return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, "delimTypeToFont"), Zr = /* @__PURE__ */ m$1(function(e, t, a, n) {
  for (var s = /* @__PURE__ */ Math.min(2, 3 - n.style.size), o = s; o < a.length && a[o].type !== "stack"; o++) {
    var h = /* @__PURE__ */ ue(e, /* @__PURE__ */ Y1(a[o]), "math"), c = h.height + h.depth;
    if (a[o].type === "small") {
      var v = /* @__PURE__ */ n.havingBaseStyle(a[o].style);
      c *= v.sizeMultiplier;
    }
    if (c > t) return a[o];
  }
  return a[a.length - 1];
}, "traverseSequence"), Kr = /* @__PURE__ */ m$1(function(e, t, a, n, s, o) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var h;
  R.contains(Wr, e) ? h = V1 : R.contains($r, e) ? h = jr : h = U1;
  var c = /* @__PURE__ */ Zr(e, t, h, n);
  return c.type === "small" ? I1(e, c.style, a, n, s, o) : c.type === "large" ? Yr(e, c.size, a, n, s, o) : Xr(e, t, a, n, s, o);
}, "makeCustomSizedDelim"), X1 = /* @__PURE__ */ m$1(function(e, t, a, n, s, o) {
  var h = n.fontMetrics().axisHeight * n.sizeMultiplier, c = 901, v = 5 / n.fontMetrics().ptPerEm, b = /* @__PURE__ */ Math.max(t - h, a + h), x = /* @__PURE__ */ Math.max(b / 500 * c, 2 * b - v);
  return Kr(e, x, true, n, s, o);
}, "makeLeftRightDelim"), N0 = {
  sqrtImage: L1,
  sizedDelim: G1,
  sizeToMaxHeight: he,
  customSizedDelim: Kr,
  leftRightDelim: X1
}, tr = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, $1 = [
  "(",
  "\\lparen",
  ")",
  "\\rparen",
  "[",
  "\\lbrack",
  "]",
  "\\rbrack",
  "\\{",
  "\\lbrace",
  "\\}",
  "\\rbrace",
  "\\lfloor",
  "\\rfloor",
  "⌊",
  "⌋",
  "\\lceil",
  "\\rceil",
  "⌈",
  "⌉",
  "<",
  ">",
  "\\langle",
  "⟨",
  "\\rangle",
  "⟩",
  "\\lt",
  "\\gt",
  "\\lvert",
  "\\rvert",
  "\\lVert",
  "\\rVert",
  "\\lgroup",
  "\\rgroup",
  "⟮",
  "⟯",
  "\\lmoustache",
  "\\rmoustache",
  "⎰",
  "⎱",
  "/",
  "\\backslash",
  "|",
  "\\vert",
  "\\|",
  "\\Vert",
  "\\uparrow",
  "\\Uparrow",
  "\\downarrow",
  "\\Downarrow",
  "\\updownarrow",
  "\\Updownarrow",
  "."
];
function $e(r5, e) {
  var t = /* @__PURE__ */ Ye(r5);
  if (t && R.contains($1, t.text)) return t;
  throw t ? new z("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r5) : new z("Invalid delimiter type '" + r5.type + "'", r5);
}
m$1($e, "checkDelimiter");
D({
  type: "delimsizing",
  names: [
    "\\bigl",
    "\\Bigl",
    "\\biggl",
    "\\Biggl",
    "\\bigr",
    "\\Bigr",
    "\\biggr",
    "\\Biggr",
    "\\bigm",
    "\\Bigm",
    "\\biggm",
    "\\Biggm",
    "\\big",
    "\\Big",
    "\\bigg",
    "\\Bigg"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "primitive"
    ]
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ $e(e[0], r5);
    return {
      type: "delimsizing",
      mode: r5.parser.mode,
      size: tr[r5.funcName].size,
      mclass: tr[r5.funcName].mclass,
      delim: t.text
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => r5.delim === "." ? y.makeSpan([
    r5.mclass
  ]) : N0.sizedDelim(r5.delim, r5.size, e, r5.mode, [
    r5.mclass
  ]), "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5) => {
    var e = [];
    r5.delim !== "." && e.push(/* @__PURE__ */ g0(r5.delim, r5.mode));
    var t = new M.MathNode("mo", e);
    r5.mclass === "mopen" || r5.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var a = /* @__PURE__ */ T(N0.sizeToMaxHeight[r5.size]);
    return t.setAttribute("minsize", a), t.setAttribute("maxsize", a), t;
  }, "mathmlBuilder")
});
function rr(r5) {
  if (!r5.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
m$1(rr, "assertParsed");
D({
  type: "leftright-right",
  names: [
    "\\right"
  ],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ r5.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string") throw new z("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r5.parser.mode,
      delim: $e(e[0], r5).text,
      color: t
    };
  }, "handler")
});
D({
  type: "leftright",
  names: [
    "\\left"
  ],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ $e(e[0], r5), a = r5.parser;
    ++a.leftrightDepth;
    var n = /* @__PURE__ */ a.parseExpression(false);
    --a.leftrightDepth, a.expect("\\right", false);
    var s = /* @__PURE__ */ L(/* @__PURE__ */ a.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: a.mode,
      body: n,
      left: t.text,
      right: s.delim,
      rightColor: s.color
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    rr(r5);
    for (var t = /* @__PURE__ */ r0(r5.body, e, true, [
      "mopen",
      "mclose"
    ]), a = 0, n = 0, s = false, o = 0; o < t.length; o++) t[o].isMiddle ? s = true : (a = /* @__PURE__ */ Math.max(t[o].height, a), n = /* @__PURE__ */ Math.max(t[o].depth, n));
    a *= e.sizeMultiplier, n *= e.sizeMultiplier;
    var h;
    if (r5.left === "." ? h = /* @__PURE__ */ pe(e, [
      "mopen"
    ]) : h = /* @__PURE__ */ N0.leftRightDelim(r5.left, a, n, e, r5.mode, [
      "mopen"
    ]), t.unshift(h), s) for (var c = 1; c < t.length; c++) {
      var v = t[c], b = v.isMiddle;
      b && (t[c] = /* @__PURE__ */ N0.leftRightDelim(b.delim, a, n, b.options, r5.mode, []));
    }
    var x;
    if (r5.right === ".") x = /* @__PURE__ */ pe(e, [
      "mclose"
    ]);
    else {
      var k = r5.rightColor ? e.withColor(r5.rightColor) : e;
      x = /* @__PURE__ */ N0.leftRightDelim(r5.right, a, n, k, r5.mode, [
        "mclose"
      ]);
    }
    return t.push(x), y.makeSpan([
      "minner"
    ], t, e);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    rr(r5);
    var t = /* @__PURE__ */ m0(r5.body, e);
    if (r5.left !== ".") {
      var a = new M.MathNode("mo", [
        /* @__PURE__ */ g0(r5.left, r5.mode)
      ]);
      a.setAttribute("fence", "true"), t.unshift(a);
    }
    if (r5.right !== ".") {
      var n = new M.MathNode("mo", [
        /* @__PURE__ */ g0(r5.right, r5.mode)
      ]);
      n.setAttribute("fence", "true"), r5.rightColor && n.setAttribute("mathcolor", r5.rightColor), t.push(n);
    }
    return zt(t);
  }, "mathmlBuilder")
});
D({
  type: "middle",
  names: [
    "\\middle"
  ],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ $e(e[0], r5);
    if (!r5.parser.leftrightDepth) throw new z("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r5.parser.mode,
      delim: t.text
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t;
    if (r5.delim === ".") t = /* @__PURE__ */ pe(e, []);
    else {
      t = /* @__PURE__ */ N0.sizedDelim(r5.delim, 1, e, r5.mode, []);
      var a = {
        delim: r5.delim,
        options: e
      };
      t.isMiddle = a;
    }
    return t;
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = r5.delim === "\\vert" || r5.delim === "|" ? g0("|", "text") : g0(r5.delim, r5.mode), a = new M.MathNode("mo", [
      t
    ]);
    return a.setAttribute("fence", "true"), a.setAttribute("lspace", "0.05em"), a.setAttribute("rspace", "0.05em"), a;
  }, "mathmlBuilder")
});
var Ct = /* @__PURE__ */ m$1((r5, e) => {
  var t = /* @__PURE__ */ y.wrapFragment(/* @__PURE__ */ G(r5.body, e), e), a = /* @__PURE__ */ r5.label.slice(1), n = e.sizeMultiplier, s, o = 0, h = /* @__PURE__ */ R.isCharacterBox(r5.body);
  if (a === "sout") s = /* @__PURE__ */ y.makeSpan([
    "stretchy",
    "sout"
  ]), s.height = e.fontMetrics().defaultRuleThickness / n, o = -0.5 * e.fontMetrics().xHeight;
  else if (a === "phase") {
    var c = /* @__PURE__ */ Q({
      number: 0.6,
      unit: "pt"
    }, e), v = /* @__PURE__ */ Q({
      number: 0.35,
      unit: "ex"
    }, e), b = /* @__PURE__ */ e.havingBaseSizing();
    n = n / b.sizeMultiplier;
    var x = t.height + t.depth + c + v;
    t.style.paddingLeft = /* @__PURE__ */ T(x / 2 + c);
    var k = /* @__PURE__ */ Math.floor(1e3 * x * n), w = /* @__PURE__ */ Ga(k), A = new x0([
      new M0("phase", w)
    ], {
      width: "400em",
      height: /* @__PURE__ */ T(k / 1e3),
      viewBox: "0 0 400000 " + k,
      preserveAspectRatio: "xMinYMin slice"
    });
    s = /* @__PURE__ */ y.makeSvgSpan([
      "hide-tail"
    ], [
      A
    ], e), s.style.height = /* @__PURE__ */ T(x), o = t.depth + c + v;
  } else {
    /cancel/.test(a) ? h || t.classes.push("cancel-pad") : a === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var B = 0, q = 0, N = 0;
    /box/.test(a) ? (N = /* @__PURE__ */ Math.max(e.fontMetrics().fboxrule, e.minRuleThickness), B = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : N), q = B) : a === "angl" ? (N = /* @__PURE__ */ Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), B = 4 * N, q = /* @__PURE__ */ Math.max(0, 0.25 - t.depth)) : (B = h ? 0.2 : 0, q = B), s = /* @__PURE__ */ E0.encloseSpan(t, a, B, q, e), /fbox|boxed|fcolorbox/.test(a) ? (s.style.borderStyle = "solid", s.style.borderWidth = /* @__PURE__ */ T(N)) : a === "angl" && N !== 0.049 && (s.style.borderTopWidth = /* @__PURE__ */ T(N), s.style.borderRightWidth = /* @__PURE__ */ T(N)), o = t.depth + q, r5.backgroundColor && (s.style.backgroundColor = r5.backgroundColor, r5.borderColor && (s.style.borderColor = r5.borderColor));
  }
  var H;
  if (r5.backgroundColor) H = /* @__PURE__ */ y.makeVList({
    positionType: "individualShift",
    children: [
      {
        type: "elem",
        elem: s,
        shift: o
      },
      {
        type: "elem",
        elem: t,
        shift: 0
      }
    ]
  }, e);
  else {
    var F = /cancel|phase/.test(a) ? [
      "svg-align"
    ] : [];
    H = /* @__PURE__ */ y.makeVList({
      positionType: "individualShift",
      children: [
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: s,
          shift: o,
          wrapperClasses: F
        }
      ]
    }, e);
  }
  return /cancel/.test(a) && (H.height = t.height, H.depth = t.depth), /cancel/.test(a) && !h ? y.makeSpan([
    "mord",
    "cancel-lap"
  ], [
    H
  ], e) : y.makeSpan([
    "mord"
  ], [
    H
  ], e);
}, "htmlBuilder$7"), qt = /* @__PURE__ */ m$1((r5, e) => {
  var t = 0, a = new M.MathNode(r5.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [
    /* @__PURE__ */ $(r5.body, e)
  ]);
  switch (r5.label) {
    case "\\cancel":
      a.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      a.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      a.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      a.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      a.setAttribute("notation", "box");
      break;
    case "\\angl":
      a.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, a.setAttribute("width", "+" + 2 * t + "pt"), a.setAttribute("height", "+" + 2 * t + "pt"), a.setAttribute("lspace", t + "pt"), a.setAttribute("voffset", t + "pt"), r5.label === "\\fcolorbox") {
        var n = /* @__PURE__ */ Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
        a.setAttribute("style", "border: " + n + "em solid " + String(r5.borderColor));
      }
      break;
    case "\\xcancel":
      a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r5.backgroundColor && a.setAttribute("mathbackground", r5.backgroundColor), a;
}, "mathmlBuilder$6");
D({
  type: "enclose",
  names: [
    "\\colorbox"
  ],
  props: {
    numArgs: 2,
    allowedInText: true,
    argTypes: [
      "color",
      "text"
    ]
  },
  handler(r5, e, t) {
    var { parser: a, funcName: n } = r5, s = L(e[0], "color-token").color, o = e[1];
    return {
      type: "enclose",
      mode: a.mode,
      label: n,
      backgroundColor: s,
      body: o
    };
  },
  htmlBuilder: Ct,
  mathmlBuilder: qt
});
D({
  type: "enclose",
  names: [
    "\\fcolorbox"
  ],
  props: {
    numArgs: 3,
    allowedInText: true,
    argTypes: [
      "color",
      "color",
      "text"
    ]
  },
  handler(r5, e, t) {
    var { parser: a, funcName: n } = r5, s = L(e[0], "color-token").color, o = L(e[1], "color-token").color, h = e[2];
    return {
      type: "enclose",
      mode: a.mode,
      label: n,
      backgroundColor: o,
      borderColor: s,
      body: h
    };
  },
  htmlBuilder: Ct,
  mathmlBuilder: qt
});
D({
  type: "enclose",
  names: [
    "\\fbox"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "hbox"
    ],
    allowedInText: true
  },
  handler(r5, e) {
    var { parser: t } = r5;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
D({
  type: "enclose",
  names: [
    "\\cancel",
    "\\bcancel",
    "\\xcancel",
    "\\sout",
    "\\phase"
  ],
  props: {
    numArgs: 1
  },
  handler(r5, e) {
    var { parser: t, funcName: a } = r5, n = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: a,
      body: n
    };
  },
  htmlBuilder: Ct,
  mathmlBuilder: qt
});
D({
  type: "enclose",
  names: [
    "\\angl"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "hbox"
    ],
    allowedInText: false
  },
  handler(r5, e) {
    var { parser: t } = r5;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Jr = {};
function z0(r5) {
  for (var { type: e, names: t, props: a, handler: n, htmlBuilder: s, mathmlBuilder: o } = r5, h = {
    type: e,
    numArgs: a.numArgs || 0,
    allowedInText: false,
    numOptionalArgs: 0,
    handler: n
  }, c = 0; c < t.length; ++c) Jr[t[c]] = h;
  s && (He[e] = s), o && (Fe[e] = o);
}
m$1(z0, "defineEnvironment");
var Qr = {};
function m(r5, e) {
  Qr[r5] = e;
}
m$1(m, "defineMacro");
function ar(r5) {
  var e = [];
  r5.consumeSpaces();
  var t = r5.fetch().text;
  for (t === "\\relax" && (r5.consume(), r5.consumeSpaces(), t = r5.fetch().text); t === "\\hline" || t === "\\hdashline"; ) r5.consume(), e.push(t === "\\hdashline"), r5.consumeSpaces(), t = r5.fetch().text;
  return e;
}
m$1(ar, "getHLines");
var We = /* @__PURE__ */ m$1((r5) => {
  var e = r5.parser.settings;
  if (!e.displayMode) throw new z("{" + r5.envName + "} can be used only in display mode.");
}, "validateAmsEnvironmentContext");
function Nt(r5) {
  if (r5.indexOf("ed") === -1) return r5.indexOf("*") === -1;
}
m$1(Nt, "getAutoTag");
function U0(r5, e, t) {
  var { hskipBeforeAndAfter: a, addJot: n, cols: s, arraystretch: o, colSeparationType: h, autoTag: c, singleRow: v, emptySingleRow: b, maxNumCols: x, leqno: k } = e;
  if (r5.gullet.beginGroup(), v || r5.gullet.macros.set("\\cr", "\\\\\\relax"), !o) {
    var w = /* @__PURE__ */ r5.gullet.expandMacroAsText("\\arraystretch");
    if (w == null) o = 1;
    else if (o = /* @__PURE__ */ parseFloat(w), !o || o < 0) throw new z("Invalid \\arraystretch: " + w);
  }
  r5.gullet.beginGroup();
  var A = [], B = [
    A
  ], q = [], N = [], H = c != null ? [] : void 0;
  function F() {
    c && r5.gullet.macros.set("\\@eqnsw", "1", true);
  }
  m$1(F, "beginRow");
  function U() {
    H && (r5.gullet.macros.get("\\df@tag") ? (H.push(/* @__PURE__ */ r5.subparse([
      new v0("\\df@tag")
    ])), r5.gullet.macros.set("\\df@tag", void 0, true)) : H.push(!!c && r5.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (m$1(U, "endRow"), F(), N.push(/* @__PURE__ */ ar(r5)); ; ) {
    var P = /* @__PURE__ */ r5.parseExpression(false, v ? "\\end" : "\\\\");
    r5.gullet.endGroup(), r5.gullet.beginGroup(), P = {
      type: "ordgroup",
      mode: r5.mode,
      body: P
    }, t && (P = {
      type: "styling",
      mode: r5.mode,
      style: t,
      body: [
        P
      ]
    }), A.push(P);
    var Y = r5.fetch().text;
    if (Y === "&") {
      if (x && A.length === x) {
        if (v || h) throw new z("Too many tab characters: &", r5.nextToken);
        r5.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r5.consume();
    } else if (Y === "\\end") {
      U(), A.length === 1 && P.type === "styling" && P.body[0].body.length === 0 && (B.length > 1 || !b) && B.pop(), N.length < B.length + 1 && N.push([]);
      break;
    } else if (Y === "\\\\") {
      r5.consume();
      var V = void 0;
      r5.gullet.future().text !== " " && (V = /* @__PURE__ */ r5.parseSizeGroup(true)), q.push(V ? V.value : null), U(), N.push(/* @__PURE__ */ ar(r5)), A = [], B.push(A), F();
    } else throw new z("Expected & or \\\\ or \\cr or \\end", r5.nextToken);
  }
  return r5.gullet.endGroup(), r5.gullet.endGroup(), {
    type: "array",
    mode: r5.mode,
    addJot: n,
    arraystretch: o,
    body: B,
    cols: s,
    rowGaps: q,
    hskipBeforeAndAfter: a,
    hLinesBeforeRow: N,
    colSeparationType: h,
    tags: H,
    leqno: k
  };
}
m$1(U0, "parseArray");
function Rt(r5) {
  return r5.slice(0, 1) === "d" ? "display" : "text";
}
m$1(Rt, "dCellStyle");
var A0 = /* @__PURE__ */ m$1(function(e, t) {
  var a, n, s = e.body.length, o = e.hLinesBeforeRow, h = 0, c = new Array(s), v = [], b = /* @__PURE__ */ Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), x = 1 / t.fontMetrics().ptPerEm, k = 5 * x;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var w = t.havingStyle(I.SCRIPT).sizeMultiplier;
    k = 0.2778 * (w / t.sizeMultiplier);
  }
  var A = e.colSeparationType === "CD" ? Q({
    number: 3,
    unit: "ex"
  }, t) : 12 * x, B = 3 * x, q = e.arraystretch * A, N = 0.7 * q, H = 0.3 * q, F = 0;
  function U(ye) {
    for (var xe = 0; xe < ye.length; ++xe) xe > 0 && (F += 0.25), v.push({
      pos: F,
      isDashed: ye[xe]
    });
  }
  for (m$1(U, "setHLinePos"), U(o[0]), a = 0; a < e.body.length; ++a) {
    var P = e.body[a], Y = N, V = H;
    h < P.length && (h = P.length);
    var Z = new Array(P.length);
    for (n = 0; n < P.length; ++n) {
      var X = /* @__PURE__ */ G(P[n], t);
      V < X.depth && (V = X.depth), Y < X.height && (Y = X.height), Z[n] = X;
    }
    var B0 = e.rowGaps[a], n0 = 0;
    B0 && (n0 = /* @__PURE__ */ Q(B0, t), n0 > 0 && (n0 += H, V < n0 && (V = n0), n0 = 0)), e.addJot && (V += B), Z.height = Y, Z.depth = V, F += Y, Z.pos = F, F += V + n0, c[a] = Z, U(o[a + 1]);
  }
  var t0 = F / 2 + t.fontMetrics().axisHeight, Y0 = e.cols || [], l0 = [], b0, O0, K0 = [];
  if (e.tags && e.tags.some((ye) => ye)) for (a = 0; a < s; ++a) {
    var J0 = c[a], je = J0.pos - t0, H0 = e.tags[a], F0 = void 0;
    H0 === true ? F0 = /* @__PURE__ */ y.makeSpan([
      "eqn-num"
    ], [], t) : H0 === false ? F0 = /* @__PURE__ */ y.makeSpan([], [], t) : F0 = /* @__PURE__ */ y.makeSpan([], /* @__PURE__ */ r0(H0, t, true), t), F0.depth = J0.depth, F0.height = J0.height, K0.push({
      type: "elem",
      elem: F0,
      shift: je
    });
  }
  for (n = 0, O0 = 0; n < h || O0 < Y0.length; ++n, ++O0) {
    for (var f0 = Y0[O0] || {}, se = true; f0.type === "separator"; ) {
      if (se || (b0 = /* @__PURE__ */ y.makeSpan([
        "arraycolsep"
      ], []), b0.style.width = /* @__PURE__ */ T(t.fontMetrics().doubleRuleSep), l0.push(b0)), f0.separator === "|" || f0.separator === ":") {
        var Ze = f0.separator === "|" ? "solid" : "dashed", Q0 = /* @__PURE__ */ y.makeSpan([
          "vertical-separator"
        ], [], t);
        Q0.style.height = /* @__PURE__ */ T(F), Q0.style.borderRightWidth = /* @__PURE__ */ T(b), Q0.style.borderRightStyle = Ze, Q0.style.margin = "0 " + T(-b / 2);
        var Pt = F - t0;
        Pt && (Q0.style.verticalAlign = /* @__PURE__ */ T(-Pt)), l0.push(Q0);
      } else throw new z("Invalid separator type: " + f0.separator);
      O0++, f0 = Y0[O0] || {}, se = false;
    }
    if (!(n >= h)) {
      var _0 = void 0;
      (n > 0 || e.hskipBeforeAndAfter) && (_0 = /* @__PURE__ */ R.deflt(f0.pregap, k), _0 !== 0 && (b0 = /* @__PURE__ */ y.makeSpan([
        "arraycolsep"
      ], []), b0.style.width = /* @__PURE__ */ T(_0), l0.push(b0)));
      var ee = [];
      for (a = 0; a < s; ++a) {
        var ge = c[a], be = ge[n];
        if (be) {
          var pa = ge.pos - t0;
          be.depth = ge.depth, be.height = ge.height, ee.push({
            type: "elem",
            elem: be,
            shift: pa
          });
        }
      }
      ee = /* @__PURE__ */ y.makeVList({
        positionType: "individualShift",
        children: ee
      }, t), ee = /* @__PURE__ */ y.makeSpan([
        "col-align-" + (f0.align || "c")
      ], [
        ee
      ]), l0.push(ee), (n < h - 1 || e.hskipBeforeAndAfter) && (_0 = /* @__PURE__ */ R.deflt(f0.postgap, k), _0 !== 0 && (b0 = /* @__PURE__ */ y.makeSpan([
        "arraycolsep"
      ], []), b0.style.width = /* @__PURE__ */ T(_0), l0.push(b0)));
    }
  }
  if (c = /* @__PURE__ */ y.makeSpan([
    "mtable"
  ], l0), v.length > 0) {
    for (var va = /* @__PURE__ */ y.makeLineSpan("hline", t, b), ga = /* @__PURE__ */ y.makeLineSpan("hdashline", t, b), Ke = [
      {
        type: "elem",
        elem: c,
        shift: 0
      }
    ]; v.length > 0; ) {
      var Gt = /* @__PURE__ */ v.pop(), Vt = Gt.pos - t0;
      Gt.isDashed ? Ke.push({
        type: "elem",
        elem: ga,
        shift: Vt
      }) : Ke.push({
        type: "elem",
        elem: va,
        shift: Vt
      });
    }
    c = /* @__PURE__ */ y.makeVList({
      positionType: "individualShift",
      children: Ke
    }, t);
  }
  if (K0.length === 0) return y.makeSpan([
    "mord"
  ], [
    c
  ], t);
  var Je = /* @__PURE__ */ y.makeVList({
    positionType: "individualShift",
    children: K0
  }, t);
  return Je = /* @__PURE__ */ y.makeSpan([
    "tag"
  ], [
    Je
  ], t), y.makeFragment([
    c,
    Je
  ]);
}, "htmlBuilder"), W1 = {
  c: "center ",
  l: "left ",
  r: "right "
}, T0 = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = [], n = new M.MathNode("mtd", [], [
    "mtr-glue"
  ]), s = new M.MathNode("mtd", [], [
    "mml-eqn-num"
  ]), o = 0; o < e.body.length; o++) {
    for (var h = e.body[o], c = [], v = 0; v < h.length; v++) c.push(new M.MathNode("mtd", [
      /* @__PURE__ */ $(h[v], t)
    ]));
    e.tags && e.tags[o] && (c.unshift(n), c.push(n), e.leqno ? c.unshift(s) : c.push(s)), a.push(new M.MathNode("mtr", c));
  }
  var b = new M.MathNode("mtable", a), x = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  b.setAttribute("rowspacing", /* @__PURE__ */ T(x));
  var k = "", w = "";
  if (e.cols && e.cols.length > 0) {
    var A = e.cols, B = "", q = false, N = 0, H = A.length;
    A[0].type === "separator" && (k += "top ", N = 1), A[A.length - 1].type === "separator" && (k += "bottom ", H -= 1);
    for (var F = N; F < H; F++) A[F].type === "align" ? (w += W1[A[F].align], q && (B += "none "), q = true) : A[F].type === "separator" && q && (B += A[F].separator === "|" ? "solid " : "dashed ", q = false);
    b.setAttribute("columnalign", /* @__PURE__ */ w.trim()), /[sd]/.test(B) && b.setAttribute("columnlines", /* @__PURE__ */ B.trim());
  }
  if (e.colSeparationType === "align") {
    for (var U = e.cols || [], P = "", Y = 1; Y < U.length; Y++) P += Y % 2 ? "0em " : "1em ";
    b.setAttribute("columnspacing", /* @__PURE__ */ P.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? b.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? b.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? b.setAttribute("columnspacing", "0.5em") : b.setAttribute("columnspacing", "1em");
  var V = "", Z = e.hLinesBeforeRow;
  k += Z[0].length > 0 ? "left " : "", k += Z[Z.length - 1].length > 0 ? "right " : "";
  for (var X = 1; X < Z.length - 1; X++) V += Z[X].length === 0 ? "none " : Z[X][0] ? "dashed " : "solid ";
  return /[sd]/.test(V) && b.setAttribute("rowlines", /* @__PURE__ */ V.trim()), k !== "" && (b = new M.MathNode("menclose", [
    b
  ]), b.setAttribute("notation", /* @__PURE__ */ k.trim())), e.arraystretch && e.arraystretch < 1 && (b = new M.MathNode("mstyle", [
    b
  ]), b.setAttribute("scriptlevel", "1")), b;
}, "mathmlBuilder"), _r = /* @__PURE__ */ m$1(function(e, t) {
  e.envName.indexOf("ed") === -1 && We(e);
  var a = [], n = e.envName.indexOf("at") > -1 ? "alignat" : "align", s = e.envName === "split", o = /* @__PURE__ */ U0(e.parser, {
    cols: a,
    addJot: true,
    autoTag: s ? void 0 : Nt(e.envName),
    emptySingleRow: true,
    colSeparationType: n,
    maxNumCols: s ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), h, c = 0, v = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var b = "", x = 0; x < t[0].body.length; x++) {
      var k = /* @__PURE__ */ L(t[0].body[x], "textord");
      b += k.text;
    }
    h = /* @__PURE__ */ Number(b), c = h * 2;
  }
  var w = !c;
  o.body.forEach(function(N) {
    for (var H = 1; H < N.length; H += 2) {
      var F = /* @__PURE__ */ L(N[H], "styling"), U = /* @__PURE__ */ L(F.body[0], "ordgroup");
      U.body.unshift(v);
    }
    if (w) c < N.length && (c = N.length);
    else {
      var P = N.length / 2;
      if (h < P) throw new z("Too many math in a row: " + ("expected " + h + ", but got " + P), N[0]);
    }
  });
  for (var A = 0; A < c; ++A) {
    var B = "r", q = 0;
    A % 2 === 1 ? B = "l" : A > 0 && w && (q = 1), a[A] = {
      type: "align",
      align: B,
      pregap: q,
      postgap: 0
    };
  }
  return o.colSeparationType = w ? "align" : "alignat", o;
}, "alignedHandler");
z0({
  type: "array",
  names: [
    "array",
    "darray"
  ],
  props: {
    numArgs: 1
  },
  handler(r5, e) {
    var t = /* @__PURE__ */ Ye(e[0]), a = t ? [
      e[0]
    ] : L(e[0], "ordgroup").body, n = /* @__PURE__ */ a.map(function(o) {
      var h = /* @__PURE__ */ Tt(o), c = h.text;
      if ("lcr".indexOf(c) !== -1) return {
        type: "align",
        align: c
      };
      if (c === "|") return {
        type: "separator",
        separator: "|"
      };
      if (c === ":") return {
        type: "separator",
        separator: ":"
      };
      throw new z("Unknown column alignment: " + c, o);
    }), s = {
      cols: n,
      hskipBeforeAndAfter: true,
      maxNumCols: n.length
    };
    return U0(r5.parser, s, /* @__PURE__ */ Rt(r5.envName));
  },
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "matrix",
    "pmatrix",
    "bmatrix",
    "Bmatrix",
    "vmatrix",
    "Vmatrix",
    "matrix*",
    "pmatrix*",
    "bmatrix*",
    "Bmatrix*",
    "vmatrix*",
    "Vmatrix*"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    var e = {
      matrix: null,
      pmatrix: [
        "(",
        ")"
      ],
      bmatrix: [
        "[",
        "]"
      ],
      Bmatrix: [
        "\\{",
        "\\}"
      ],
      vmatrix: [
        "|",
        "|"
      ],
      Vmatrix: [
        "\\Vert",
        "\\Vert"
      ]
    }[r5.envName.replace("*", "")], t = "c", a = {
      hskipBeforeAndAfter: false,
      cols: [
        {
          type: "align",
          align: t
        }
      ]
    };
    if (r5.envName.charAt(r5.envName.length - 1) === "*") {
      var n = r5.parser;
      if (n.consumeSpaces(), n.fetch().text === "[") {
        if (n.consume(), n.consumeSpaces(), t = n.fetch().text, "lcr".indexOf(t) === -1) throw new z("Expected l or c or r", n.nextToken);
        n.consume(), n.consumeSpaces(), n.expect("]"), n.consume(), a.cols = [
          {
            type: "align",
            align: t
          }
        ];
      }
    }
    var s = /* @__PURE__ */ U0(r5.parser, a, /* @__PURE__ */ Rt(r5.envName)), o = /* @__PURE__ */ Math.max(0, .../* @__PURE__ */ s.body.map((h) => h.length));
    return s.cols = /* @__PURE__ */ new Array(o).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r5.mode,
      body: [
        s
      ],
      left: e[0],
      right: e[1],
      rightColor: void 0
    } : s;
  },
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "smallmatrix"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    var e = {
      arraystretch: 0.5
    }, t = /* @__PURE__ */ U0(r5.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "subarray"
  ],
  props: {
    numArgs: 1
  },
  handler(r5, e) {
    var t = /* @__PURE__ */ Ye(e[0]), a = t ? [
      e[0]
    ] : L(e[0], "ordgroup").body, n = /* @__PURE__ */ a.map(function(o) {
      var h = /* @__PURE__ */ Tt(o), c = h.text;
      if ("lc".indexOf(c) !== -1) return {
        type: "align",
        align: c
      };
      throw new z("Unknown column alignment: " + c, o);
    });
    if (n.length > 1) throw new z("{subarray} can contain only one column");
    var s = {
      cols: n,
      hskipBeforeAndAfter: false,
      arraystretch: 0.5
    };
    if (s = /* @__PURE__ */ U0(r5.parser, s, "script"), s.body.length > 0 && s.body[0].length > 1) throw new z("{subarray} can contain only one column");
    return s;
  },
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "cases",
    "dcases",
    "rcases",
    "drcases"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    var e = {
      arraystretch: 1.2,
      cols: [
        {
          type: "align",
          align: "l",
          pregap: 0,
          postgap: 1
        },
        {
          type: "align",
          align: "l",
          pregap: 0,
          postgap: 0
        }
      ]
    }, t = /* @__PURE__ */ U0(r5.parser, e, /* @__PURE__ */ Rt(r5.envName));
    return {
      type: "leftright",
      mode: r5.mode,
      body: [
        t
      ],
      left: r5.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r5.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "align",
    "align*",
    "aligned",
    "split"
  ],
  props: {
    numArgs: 0
  },
  handler: _r,
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "gathered",
    "gather",
    "gather*"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    R.contains([
      "gather",
      "gather*"
    ], r5.envName) && We(r5);
    var e = {
      cols: [
        {
          type: "align",
          align: "c"
        }
      ],
      addJot: true,
      colSeparationType: "gather",
      autoTag: /* @__PURE__ */ Nt(r5.envName),
      emptySingleRow: true,
      leqno: r5.parser.settings.leqno
    };
    return U0(r5.parser, e, "display");
  },
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "alignat",
    "alignat*",
    "alignedat"
  ],
  props: {
    numArgs: 1
  },
  handler: _r,
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "equation",
    "equation*"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    We(r5);
    var e = {
      autoTag: /* @__PURE__ */ Nt(r5.envName),
      emptySingleRow: true,
      singleRow: true,
      maxNumCols: 1,
      leqno: r5.parser.settings.leqno
    };
    return U0(r5.parser, e, "display");
  },
  htmlBuilder: A0,
  mathmlBuilder: T0
});
z0({
  type: "array",
  names: [
    "CD"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    return We(r5), R1(r5.parser);
  },
  htmlBuilder: A0,
  mathmlBuilder: T0
});
m("\\nonumber", "\\gdef\\@eqnsw{0}");
m("\\notag", "\\nonumber");
D({
  type: "text",
  names: [
    "\\hline",
    "\\hdashline"
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: true
  },
  handler(r5, e) {
    throw new z(r5.funcName + " valid only within array environment");
  }
});
var nr = Jr;
D({
  type: "environment",
  names: [
    "\\begin",
    "\\end"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "text"
    ]
  },
  handler(r5, e) {
    var { parser: t, funcName: a } = r5, n = e[0];
    if (n.type !== "ordgroup") throw new z("Invalid environment name", n);
    for (var s = "", o = 0; o < n.body.length; ++o) s += L(n.body[o], "textord").text;
    if (a === "\\begin") {
      if (!nr.hasOwnProperty(s)) throw new z("No such environment: " + s, n);
      var h = nr[s], { args: c, optArgs: v } = t.parseArguments("\\begin{" + s + "}", h), b = {
        mode: t.mode,
        envName: s,
        parser: t
      }, x = /* @__PURE__ */ h.handler(b, c, v);
      t.expect("\\end", false);
      var k = t.nextToken, w = /* @__PURE__ */ L(/* @__PURE__ */ t.parseFunction(), "environment");
      if (w.name !== s) throw new z("Mismatch: \\begin{" + s + "} matched by \\end{" + w.name + "}", k);
      return x;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: s,
      nameGroup: n
    };
  }
});
var ea = /* @__PURE__ */ m$1((r5, e) => {
  var t = r5.font, a = /* @__PURE__ */ e.withFont(t);
  return G(r5.body, a);
}, "htmlBuilder$5"), ta = /* @__PURE__ */ m$1((r5, e) => {
  var t = r5.font, a = /* @__PURE__ */ e.withFont(t);
  return $(r5.body, a);
}, "mathmlBuilder$4"), ir = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
D({
  type: "font",
  names: [
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a } = r5, n = /* @__PURE__ */ Le(e[0]), s = a;
    return s in ir && (s = ir[s]), {
      type: "font",
      mode: t.mode,
      font: /* @__PURE__ */ s.slice(1),
      body: n
    };
  }, "handler"),
  htmlBuilder: ea,
  mathmlBuilder: ta
});
D({
  type: "mclass",
  names: [
    "\\boldsymbol",
    "\\bm"
  ],
  props: {
    numArgs: 1
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5, a = e[0], n = /* @__PURE__ */ R.isCharacterBox(a);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: /* @__PURE__ */ Xe(a),
      body: [
        {
          type: "font",
          mode: t.mode,
          font: "boldsymbol",
          body: a
        }
      ],
      isCharacterBox: n
    };
  }, "handler")
});
D({
  type: "font",
  names: [
    "\\rm",
    "\\sf",
    "\\tt",
    "\\bf",
    "\\it",
    "\\cal"
  ],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a, breakOnTokenText: n } = r5, { mode: s } = t, o = /* @__PURE__ */ t.parseExpression(true, n), h = "math" + a.slice(1);
    return {
      type: "font",
      mode: s,
      font: h,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: o
      }
    };
  }, "handler"),
  htmlBuilder: ea,
  mathmlBuilder: ta
});
var ra = /* @__PURE__ */ m$1((r5, e) => {
  var t = e;
  return r5 === "display" ? t = t.id >= I.SCRIPT.id ? t.text() : I.DISPLAY : r5 === "text" && t.size === I.DISPLAY.size ? t = I.TEXT : r5 === "script" ? t = I.SCRIPT : r5 === "scriptscript" && (t = I.SCRIPTSCRIPT), t;
}, "adjustStyle"), Et = /* @__PURE__ */ m$1((r5, e) => {
  var t = /* @__PURE__ */ ra(r5.size, e.style), a = /* @__PURE__ */ t.fracNum(), n = /* @__PURE__ */ t.fracDen(), s;
  s = /* @__PURE__ */ e.havingStyle(a);
  var o = /* @__PURE__ */ G(r5.numer, s, e);
  if (r5.continued) {
    var h = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
    o.height = o.height < h ? h : o.height, o.depth = o.depth < c ? c : o.depth;
  }
  s = /* @__PURE__ */ e.havingStyle(n);
  var v = /* @__PURE__ */ G(r5.denom, s, e), b, x, k;
  r5.hasBarLine ? (r5.barSize ? (x = /* @__PURE__ */ Q(r5.barSize, e), b = /* @__PURE__ */ y.makeLineSpan("frac-line", e, x)) : b = /* @__PURE__ */ y.makeLineSpan("frac-line", e), x = b.height, k = b.height) : (b = null, x = 0, k = e.fontMetrics().defaultRuleThickness);
  var w, A, B;
  t.size === I.DISPLAY.size || r5.size === "display" ? (w = e.fontMetrics().num1, x > 0 ? A = 3 * k : A = 7 * k, B = e.fontMetrics().denom1) : (x > 0 ? (w = e.fontMetrics().num2, A = k) : (w = e.fontMetrics().num3, A = 3 * k), B = e.fontMetrics().denom2);
  var q;
  if (b) {
    var H = e.fontMetrics().axisHeight;
    w - o.depth - (H + 0.5 * x) < A && (w += A - (w - o.depth - (H + 0.5 * x))), H - 0.5 * x - (v.height - B) < A && (B += A - (H - 0.5 * x - (v.height - B)));
    var F = -(H - 0.5 * x);
    q = /* @__PURE__ */ y.makeVList({
      positionType: "individualShift",
      children: [
        {
          type: "elem",
          elem: v,
          shift: B
        },
        {
          type: "elem",
          elem: b,
          shift: F
        },
        {
          type: "elem",
          elem: o,
          shift: -w
        }
      ]
    }, e);
  } else {
    var N = w - o.depth - (v.height - B);
    N < A && (w += 0.5 * (A - N), B += 0.5 * (A - N)), q = /* @__PURE__ */ y.makeVList({
      positionType: "individualShift",
      children: [
        {
          type: "elem",
          elem: v,
          shift: B
        },
        {
          type: "elem",
          elem: o,
          shift: -w
        }
      ]
    }, e);
  }
  s = /* @__PURE__ */ e.havingStyle(t), q.height *= s.sizeMultiplier / e.sizeMultiplier, q.depth *= s.sizeMultiplier / e.sizeMultiplier;
  var U;
  t.size === I.DISPLAY.size ? U = e.fontMetrics().delim1 : t.size === I.SCRIPTSCRIPT.size ? U = e.havingStyle(I.SCRIPT).fontMetrics().delim2 : U = e.fontMetrics().delim2;
  var P, Y;
  return r5.leftDelim == null ? P = /* @__PURE__ */ pe(e, [
    "mopen"
  ]) : P = /* @__PURE__ */ N0.customSizedDelim(r5.leftDelim, U, true, /* @__PURE__ */ e.havingStyle(t), r5.mode, [
    "mopen"
  ]), r5.continued ? Y = /* @__PURE__ */ y.makeSpan([]) : r5.rightDelim == null ? Y = /* @__PURE__ */ pe(e, [
    "mclose"
  ]) : Y = /* @__PURE__ */ N0.customSizedDelim(r5.rightDelim, U, true, /* @__PURE__ */ e.havingStyle(t), r5.mode, [
    "mclose"
  ]), y.makeSpan(/* @__PURE__ */ [
    "mord"
  ].concat(/* @__PURE__ */ s.sizingClasses(e)), [
    P,
    /* @__PURE__ */ y.makeSpan([
      "mfrac"
    ], [
      q
    ]),
    Y
  ], e);
}, "htmlBuilder$4"), It = /* @__PURE__ */ m$1((r5, e) => {
  var t = new M.MathNode("mfrac", [
    /* @__PURE__ */ $(r5.numer, e),
    /* @__PURE__ */ $(r5.denom, e)
  ]);
  if (!r5.hasBarLine) t.setAttribute("linethickness", "0px");
  else if (r5.barSize) {
    var a = /* @__PURE__ */ Q(r5.barSize, e);
    t.setAttribute("linethickness", /* @__PURE__ */ T(a));
  }
  var n = /* @__PURE__ */ ra(r5.size, e.style);
  if (n.size !== e.style.size) {
    t = new M.MathNode("mstyle", [
      t
    ]);
    var s = n.size === I.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", s), t.setAttribute("scriptlevel", "0");
  }
  if (r5.leftDelim != null || r5.rightDelim != null) {
    var o = [];
    if (r5.leftDelim != null) {
      var h = new M.MathNode("mo", [
        new M.TextNode(r5.leftDelim.replace("\\", ""))
      ]);
      h.setAttribute("fence", "true"), o.push(h);
    }
    if (o.push(t), r5.rightDelim != null) {
      var c = new M.MathNode("mo", [
        new M.TextNode(r5.rightDelim.replace("\\", ""))
      ]);
      c.setAttribute("fence", "true"), o.push(c);
    }
    return zt(o);
  }
  return t;
}, "mathmlBuilder$3");
D({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    "\\\\bracefrac",
    "\\\\brackfrac"
  ],
  props: {
    numArgs: 2,
    allowedInArgument: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a } = r5, n = e[0], s = e[1], o, h = null, c = null, v = "auto";
    switch (a) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        o = true;
        break;
      case "\\\\atopfrac":
        o = false;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        o = false, h = "(", c = ")";
        break;
      case "\\\\bracefrac":
        o = false, h = "\\{", c = "\\}";
        break;
      case "\\\\brackfrac":
        o = false, h = "[", c = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (a) {
      case "\\dfrac":
      case "\\dbinom":
        v = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        v = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: false,
      numer: n,
      denom: s,
      hasBarLine: o,
      leftDelim: h,
      rightDelim: c,
      size: v,
      barSize: null
    };
  }, "handler"),
  htmlBuilder: Et,
  mathmlBuilder: It
});
D({
  type: "genfrac",
  names: [
    "\\cfrac"
  ],
  props: {
    numArgs: 2
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a } = r5, n = e[0], s = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: true,
      numer: n,
      denom: s,
      hasBarLine: true,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }, "handler")
});
D({
  type: "infix",
  names: [
    "\\over",
    "\\choose",
    "\\atop",
    "\\brace",
    "\\brack"
  ],
  props: {
    numArgs: 0,
    infix: true
  },
  handler(r5) {
    var { parser: e, funcName: t, token: a } = r5, n;
    switch (t) {
      case "\\over":
        n = "\\frac";
        break;
      case "\\choose":
        n = "\\binom";
        break;
      case "\\atop":
        n = "\\\\atopfrac";
        break;
      case "\\brace":
        n = "\\\\bracefrac";
        break;
      case "\\brack":
        n = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: n,
      token: a
    };
  }
});
var sr = [
  "display",
  "text",
  "script",
  "scriptscript"
], lr = /* @__PURE__ */ m$1(function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
}, "delimFromValue");
D({
  type: "genfrac",
  names: [
    "\\genfrac"
  ],
  props: {
    numArgs: 6,
    allowedInArgument: true,
    argTypes: [
      "math",
      "math",
      "size",
      "text",
      "math",
      "math"
    ]
  },
  handler(r5, e) {
    var { parser: t } = r5, a = e[4], n = e[5], s = /* @__PURE__ */ Le(e[0]), o = s.type === "atom" && s.family === "open" ? lr(s.text) : null, h = /* @__PURE__ */ Le(e[1]), c = h.type === "atom" && h.family === "close" ? lr(h.text) : null, v = /* @__PURE__ */ L(e[2], "size"), b, x = null;
    v.isBlank ? b = true : (x = v.value, b = x.number > 0);
    var k = "auto", w = e[3];
    if (w.type === "ordgroup") {
      if (w.body.length > 0) {
        var A = /* @__PURE__ */ L(w.body[0], "textord");
        k = sr[Number(A.text)];
      }
    } else w = /* @__PURE__ */ L(w, "textord"), k = sr[Number(w.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: n,
      continued: false,
      hasBarLine: b,
      barSize: x,
      leftDelim: o,
      rightDelim: c,
      size: k
    };
  },
  htmlBuilder: Et,
  mathmlBuilder: It
});
D({
  type: "infix",
  names: [
    "\\above"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "size"
    ],
    infix: true
  },
  handler(r5, e) {
    var { parser: t, funcName: a, token: n } = r5;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: L(e[0], "size").value,
      token: n
    };
  }
});
D({
  type: "genfrac",
  names: [
    "\\\\abovefrac"
  ],
  props: {
    numArgs: 3,
    argTypes: [
      "math",
      "size",
      "math"
    ]
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a } = r5, n = e[0], s = /* @__PURE__ */ Aa(L(e[1], "infix").size), o = e[2], h = s.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: o,
      continued: false,
      hasBarLine: h,
      barSize: s,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  }, "handler"),
  htmlBuilder: Et,
  mathmlBuilder: It
});
var aa = /* @__PURE__ */ m$1((r5, e) => {
  var t = e.style, a, n;
  r5.type === "supsub" ? (a = r5.sup ? G(r5.sup, /* @__PURE__ */ e.havingStyle(/* @__PURE__ */ t.sup()), e) : G(r5.sub, /* @__PURE__ */ e.havingStyle(/* @__PURE__ */ t.sub()), e), n = /* @__PURE__ */ L(r5.base, "horizBrace")) : n = /* @__PURE__ */ L(r5, "horizBrace");
  var s = /* @__PURE__ */ G(n.base, /* @__PURE__ */ e.havingBaseStyle(I.DISPLAY)), o = /* @__PURE__ */ E0.svgSpan(n, e), h;
  if (n.isOver ? (h = /* @__PURE__ */ y.makeVList({
    positionType: "firstBaseline",
    children: [
      {
        type: "elem",
        elem: s
      },
      {
        type: "kern",
        size: 0.1
      },
      {
        type: "elem",
        elem: o
      }
    ]
  }, e), h.children[0].children[0].children[1].classes.push("svg-align")) : (h = /* @__PURE__ */ y.makeVList({
    positionType: "bottom",
    positionData: s.depth + 0.1 + o.height,
    children: [
      {
        type: "elem",
        elem: o
      },
      {
        type: "kern",
        size: 0.1
      },
      {
        type: "elem",
        elem: s
      }
    ]
  }, e), h.children[0].children[0].children[0].classes.push("svg-align")), a) {
    var c = /* @__PURE__ */ y.makeSpan([
      "mord",
      n.isOver ? "mover" : "munder"
    ], [
      h
    ], e);
    n.isOver ? h = /* @__PURE__ */ y.makeVList({
      positionType: "firstBaseline",
      children: [
        {
          type: "elem",
          elem: c
        },
        {
          type: "kern",
          size: 0.2
        },
        {
          type: "elem",
          elem: a
        }
      ]
    }, e) : h = /* @__PURE__ */ y.makeVList({
      positionType: "bottom",
      positionData: c.depth + 0.2 + a.height + a.depth,
      children: [
        {
          type: "elem",
          elem: a
        },
        {
          type: "kern",
          size: 0.2
        },
        {
          type: "elem",
          elem: c
        }
      ]
    }, e);
  }
  return y.makeSpan([
    "mord",
    n.isOver ? "mover" : "munder"
  ], [
    h
  ], e);
}, "htmlBuilder$3"), j1 = /* @__PURE__ */ m$1((r5, e) => {
  var t = /* @__PURE__ */ E0.mathMLnode(r5.label);
  return new M.MathNode(r5.isOver ? "mover" : "munder", [
    /* @__PURE__ */ $(r5.base, e),
    t
  ]);
}, "mathmlBuilder$2");
D({
  type: "horizBrace",
  names: [
    "\\overbrace",
    "\\underbrace"
  ],
  props: {
    numArgs: 1
  },
  handler(r5, e) {
    var { parser: t, funcName: a } = r5;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: a,
      isOver: /* @__PURE__ */ /^\\over/.test(a),
      base: e[0]
    };
  },
  htmlBuilder: aa,
  mathmlBuilder: j1
});
D({
  type: "href",
  names: [
    "\\href"
  ],
  props: {
    numArgs: 2,
    argTypes: [
      "url",
      "original"
    ],
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5, a = e[1], n = L(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: n
    }) ? {
      type: "href",
      mode: t.mode,
      href: n,
      body: /* @__PURE__ */ _(a)
    } : t.formatUnsupportedCmd("\\href");
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ r0(r5.body, e, false);
    return y.makeAnchor(r5.href, [], t, e);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ V0(r5.body, e);
    return t instanceof u0 || (t = new u0("mrow", [
      t
    ])), t.setAttribute("href", r5.href), t;
  }, "mathmlBuilder")
});
D({
  type: "href",
  names: [
    "\\url"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "url"
    ],
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5, a = L(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: a
    })) return t.formatUnsupportedCmd("\\url");
    for (var n = [], s = 0; s < a.length; s++) {
      var o = a[s];
      o === "~" && (o = "\\textasciitilde"), n.push({
        type: "textord",
        mode: "text",
        text: o
      });
    }
    var h = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: n
    };
    return {
      type: "href",
      mode: t.mode,
      href: a,
      body: /* @__PURE__ */ _(h)
    };
  }, "handler")
});
D({
  type: "hbox",
  names: [
    "\\hbox"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "text"
    ],
    allowedInText: true,
    primitive: true
  },
  handler(r5, e) {
    var { parser: t } = r5;
    return {
      type: "hbox",
      mode: t.mode,
      body: /* @__PURE__ */ _(e[0])
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ r0(r5.body, e, false);
    return y.makeFragment(t);
  },
  mathmlBuilder(r5, e) {
    return new M.MathNode("mrow", m0(r5.body, e));
  }
});
D({
  type: "html",
  names: [
    "\\htmlClass",
    "\\htmlId",
    "\\htmlStyle",
    "\\htmlData"
  ],
  props: {
    numArgs: 2,
    argTypes: [
      "raw",
      "original"
    ],
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a, token: n } = r5, s = L(e[0], "raw").string, o = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var h, c = {};
    switch (a) {
      case "\\htmlClass":
        c.class = s, h = {
          command: "\\htmlClass",
          class: s
        };
        break;
      case "\\htmlId":
        c.id = s, h = {
          command: "\\htmlId",
          id: s
        };
        break;
      case "\\htmlStyle":
        c.style = s, h = {
          command: "\\htmlStyle",
          style: s
        };
        break;
      case "\\htmlData": {
        for (var v = /* @__PURE__ */ s.split(","), b = 0; b < v.length; b++) {
          var x = /* @__PURE__ */ v[b].split("=");
          if (x.length !== 2) throw new z("Error parsing key-value for \\htmlData");
          c["data-" + x[0].trim()] = /* @__PURE__ */ x[1].trim();
        }
        h = {
          command: "\\htmlData",
          attributes: c
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(h) ? {
      type: "html",
      mode: t.mode,
      attributes: c,
      body: /* @__PURE__ */ _(o)
    } : t.formatUnsupportedCmd(a);
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ r0(r5.body, e, false), a = [
      "enclosing"
    ];
    r5.attributes.class && a.push(.../* @__PURE__ */ r5.attributes.class.trim().split(/\s+/));
    var n = /* @__PURE__ */ y.makeSpan(a, t, e);
    for (var s in r5.attributes) s !== "class" && r5.attributes.hasOwnProperty(s) && n.setAttribute(s, r5.attributes[s]);
    return n;
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => V0(r5.body, e), "mathmlBuilder")
});
D({
  type: "htmlmathml",
  names: [
    "\\html@mathml"
  ],
  props: {
    numArgs: 2,
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: /* @__PURE__ */ _(e[0]),
      mathml: /* @__PURE__ */ _(e[1])
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ r0(r5.html, e, false);
    return y.makeFragment(t);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => V0(r5.mathml, e), "mathmlBuilder")
});
var st = /* @__PURE__ */ m$1(function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return {
    number: +e,
    unit: "bp"
  };
  var t = /* @__PURE__ */ /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t) throw new z("Invalid size: '" + e + "' in \\includegraphics");
  var a = {
    number: +(t[1] + t[2]),
    unit: t[3]
  };
  if (!kr(a)) throw new z("Invalid unit: '" + a.unit + "' in \\includegraphics.");
  return a;
}, "sizeData");
D({
  type: "includegraphics",
  names: [
    "\\includegraphics"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: [
      "raw",
      "url"
    ],
    allowedInText: false
  },
  handler: /* @__PURE__ */ m$1((r5, e, t) => {
    var { parser: a } = r5, n = {
      number: 0,
      unit: "em"
    }, s = {
      number: 0.9,
      unit: "em"
    }, o = {
      number: 0,
      unit: "em"
    }, h = "";
    if (t[0]) for (var c = L(t[0], "raw").string, v = /* @__PURE__ */ c.split(","), b = 0; b < v.length; b++) {
      var x = /* @__PURE__ */ v[b].split("=");
      if (x.length === 2) {
        var k = /* @__PURE__ */ x[1].trim();
        switch (x[0].trim()) {
          case "alt":
            h = k;
            break;
          case "width":
            n = /* @__PURE__ */ st(k);
            break;
          case "height":
            s = /* @__PURE__ */ st(k);
            break;
          case "totalheight":
            o = /* @__PURE__ */ st(k);
            break;
          default:
            throw new z("Invalid key: '" + x[0] + "' in \\includegraphics.");
        }
      }
    }
    var w = L(e[0], "url").url;
    return h === "" && (h = w, h = /* @__PURE__ */ h.replace(/^.*[\\/]/, ""), h = /* @__PURE__ */ h.substring(0, /* @__PURE__ */ h.lastIndexOf("."))), a.settings.isTrusted({
      command: "\\includegraphics",
      url: w
    }) ? {
      type: "includegraphics",
      mode: a.mode,
      alt: h,
      width: n,
      height: s,
      totalheight: o,
      src: w
    } : a.formatUnsupportedCmd("\\includegraphics");
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ Q(r5.height, e), a = 0;
    r5.totalheight.number > 0 && (a = Q(r5.totalheight, e) - t);
    var n = 0;
    r5.width.number > 0 && (n = /* @__PURE__ */ Q(r5.width, e));
    var s = {
      height: /* @__PURE__ */ T(t + a)
    };
    n > 0 && (s.width = /* @__PURE__ */ T(n)), a > 0 && (s.verticalAlign = /* @__PURE__ */ T(-a));
    var o = new ct(r5.src, r5.alt, s);
    return o.height = t, o.depth = a, o;
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = new M.MathNode("mglyph", []);
    t.setAttribute("alt", r5.alt);
    var a = /* @__PURE__ */ Q(r5.height, e), n = 0;
    if (r5.totalheight.number > 0 && (n = Q(r5.totalheight, e) - a, t.setAttribute("valign", /* @__PURE__ */ T(-n))), t.setAttribute("height", /* @__PURE__ */ T(a + n)), r5.width.number > 0) {
      var s = /* @__PURE__ */ Q(r5.width, e);
      t.setAttribute("width", /* @__PURE__ */ T(s));
    }
    return t.setAttribute("src", r5.src), t;
  }, "mathmlBuilder")
});
D({
  type: "kern",
  names: [
    "\\kern",
    "\\mkern",
    "\\hskip",
    "\\mskip"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "size"
    ],
    primitive: true,
    allowedInText: true
  },
  handler(r5, e) {
    var { parser: t, funcName: a } = r5, n = /* @__PURE__ */ L(e[0], "size");
    if (t.settings.strict) {
      var s = a[1] === "m", o = n.value.unit === "mu";
      s ? (o || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + n.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode")) : o && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: n.value
    };
  },
  htmlBuilder(r5, e) {
    return y.makeGlue(r5.dimension, e);
  },
  mathmlBuilder(r5, e) {
    var t = /* @__PURE__ */ Q(r5.dimension, e);
    return new M.SpaceNode(t);
  }
});
D({
  type: "lap",
  names: [
    "\\mathllap",
    "\\mathrlap",
    "\\mathclap"
  ],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a } = r5, n = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: /* @__PURE__ */ a.slice(5),
      body: n
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t;
    r5.alignment === "clap" ? (t = /* @__PURE__ */ y.makeSpan([], [
      /* @__PURE__ */ G(r5.body, e)
    ]), t = /* @__PURE__ */ y.makeSpan([
      "inner"
    ], [
      t
    ], e)) : t = /* @__PURE__ */ y.makeSpan([
      "inner"
    ], [
      /* @__PURE__ */ G(r5.body, e)
    ]);
    var a = /* @__PURE__ */ y.makeSpan([
      "fix"
    ], []), n = /* @__PURE__ */ y.makeSpan([
      r5.alignment
    ], [
      t,
      a
    ], e), s = /* @__PURE__ */ y.makeSpan([
      "strut"
    ]);
    return s.style.height = /* @__PURE__ */ T(n.height + n.depth), n.depth && (s.style.verticalAlign = /* @__PURE__ */ T(-n.depth)), n.children.unshift(s), n = /* @__PURE__ */ y.makeSpan([
      "thinbox"
    ], [
      n
    ], e), y.makeSpan([
      "mord",
      "vbox"
    ], [
      n
    ], e);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = new M.MathNode("mpadded", [
      /* @__PURE__ */ $(r5.body, e)
    ]);
    if (r5.alignment !== "rlap") {
      var a = r5.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", a + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }, "mathmlBuilder")
});
D({
  type: "styling",
  names: [
    "\\(",
    "$"
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: false
  },
  handler(r5, e) {
    var { funcName: t, parser: a } = r5, n = a.mode;
    a.switchMode("math");
    var s = t === "\\(" ? "\\)" : "$", o = /* @__PURE__ */ a.parseExpression(false, s);
    return a.expect(s), a.switchMode(n), {
      type: "styling",
      mode: a.mode,
      style: "text",
      body: o
    };
  }
});
D({
  type: "text",
  names: [
    "\\)",
    "\\]"
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: false
  },
  handler(r5, e) {
    throw new z("Mismatched " + r5.funcName);
  }
});
var or = /* @__PURE__ */ m$1((r5, e) => {
  switch (e.style.size) {
    case I.DISPLAY.size:
      return r5.display;
    case I.TEXT.size:
      return r5.text;
    case I.SCRIPT.size:
      return r5.script;
    case I.SCRIPTSCRIPT.size:
      return r5.scriptscript;
    default:
      return r5.text;
  }
}, "chooseMathStyle");
D({
  type: "mathchoice",
  names: [
    "\\mathchoice"
  ],
  props: {
    numArgs: 4,
    primitive: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: /* @__PURE__ */ _(e[0]),
      text: /* @__PURE__ */ _(e[1]),
      script: /* @__PURE__ */ _(e[2]),
      scriptscript: /* @__PURE__ */ _(e[3])
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ or(r5, e), a = /* @__PURE__ */ r0(t, e, false);
    return y.makeFragment(a);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ or(r5, e);
    return V0(t, e);
  }, "mathmlBuilder")
});
var na = /* @__PURE__ */ m$1((r5, e, t, a, n, s, o) => {
  r5 = /* @__PURE__ */ y.makeSpan([], [
    r5
  ]);
  var h = t && R.isCharacterBox(t), c, v;
  if (e) {
    var b = /* @__PURE__ */ G(e, /* @__PURE__ */ a.havingStyle(/* @__PURE__ */ n.sup()), a);
    v = {
      elem: b,
      kern: /* @__PURE__ */ Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - b.depth)
    };
  }
  if (t) {
    var x = /* @__PURE__ */ G(t, /* @__PURE__ */ a.havingStyle(/* @__PURE__ */ n.sub()), a);
    c = {
      elem: x,
      kern: /* @__PURE__ */ Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - x.height)
    };
  }
  var k;
  if (v && c) {
    var w = a.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + r5.depth + o;
    k = /* @__PURE__ */ y.makeVList({
      positionType: "bottom",
      positionData: w,
      children: [
        {
          type: "kern",
          size: a.fontMetrics().bigOpSpacing5
        },
        {
          type: "elem",
          elem: c.elem,
          marginLeft: /* @__PURE__ */ T(-s)
        },
        {
          type: "kern",
          size: c.kern
        },
        {
          type: "elem",
          elem: r5
        },
        {
          type: "kern",
          size: v.kern
        },
        {
          type: "elem",
          elem: v.elem,
          marginLeft: /* @__PURE__ */ T(s)
        },
        {
          type: "kern",
          size: a.fontMetrics().bigOpSpacing5
        }
      ]
    }, a);
  } else if (c) {
    var A = r5.height - o;
    k = /* @__PURE__ */ y.makeVList({
      positionType: "top",
      positionData: A,
      children: [
        {
          type: "kern",
          size: a.fontMetrics().bigOpSpacing5
        },
        {
          type: "elem",
          elem: c.elem,
          marginLeft: /* @__PURE__ */ T(-s)
        },
        {
          type: "kern",
          size: c.kern
        },
        {
          type: "elem",
          elem: r5
        }
      ]
    }, a);
  } else if (v) {
    var B = r5.depth + o;
    k = /* @__PURE__ */ y.makeVList({
      positionType: "bottom",
      positionData: B,
      children: [
        {
          type: "elem",
          elem: r5
        },
        {
          type: "kern",
          size: v.kern
        },
        {
          type: "elem",
          elem: v.elem,
          marginLeft: /* @__PURE__ */ T(s)
        },
        {
          type: "kern",
          size: a.fontMetrics().bigOpSpacing5
        }
      ]
    }, a);
  } else return r5;
  var q = [
    k
  ];
  if (c && s !== 0 && !h) {
    var N = /* @__PURE__ */ y.makeSpan([
      "mspace"
    ], [], a);
    N.style.marginRight = /* @__PURE__ */ T(s), q.unshift(N);
  }
  return y.makeSpan([
    "mop",
    "op-limits"
  ], q, a);
}, "assembleSupSub"), ia = [
  "\\smallint"
], ie = /* @__PURE__ */ m$1((r5, e) => {
  var t, a, n = false, s;
  r5.type === "supsub" ? (t = r5.sup, a = r5.sub, s = /* @__PURE__ */ L(r5.base, "op"), n = true) : s = /* @__PURE__ */ L(r5, "op");
  var o = e.style, h = false;
  o.size === I.DISPLAY.size && s.symbol && !R.contains(ia, s.name) && (h = true);
  var c;
  if (s.symbol) {
    var v = h ? "Size2-Regular" : "Size1-Regular", b = "";
    if ((s.name === "\\oiint" || s.name === "\\oiiint") && (b = /* @__PURE__ */ s.name.slice(1), s.name = b === "oiint" ? "\\iint" : "\\iiint"), c = /* @__PURE__ */ y.makeSymbol(s.name, v, "math", e, [
      "mop",
      "op-symbol",
      h ? "large-op" : "small-op"
    ]), b.length > 0) {
      var x = c.italic, k = /* @__PURE__ */ y.staticSvg(b + "Size" + (h ? "2" : "1"), e);
      c = /* @__PURE__ */ y.makeVList({
        positionType: "individualShift",
        children: [
          {
            type: "elem",
            elem: c,
            shift: 0
          },
          {
            type: "elem",
            elem: k,
            shift: h ? 0.08 : 0
          }
        ]
      }, e), s.name = "\\" + b, c.classes.unshift("mop"), c.italic = x;
    }
  } else if (s.body) {
    var w = /* @__PURE__ */ r0(s.body, e, true);
    w.length === 1 && w[0] instanceof h0 ? (c = w[0], c.classes[0] = "mop") : c = /* @__PURE__ */ y.makeSpan([
      "mop"
    ], w, e);
  } else {
    for (var A = [], B = 1; B < s.name.length; B++) A.push(/* @__PURE__ */ y.mathsym(s.name[B], s.mode, e));
    c = /* @__PURE__ */ y.makeSpan([
      "mop"
    ], A, e);
  }
  var q = 0, N = 0;
  return (c instanceof h0 || s.name === "\\oiint" || s.name === "\\oiiint") && !s.suppressBaseShift && (q = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, N = c.italic), n ? na(c, t, a, e, o, N, q) : (q && (c.style.position = "relative", c.style.top = /* @__PURE__ */ T(q)), c);
}, "htmlBuilder$2"), ve = /* @__PURE__ */ m$1((r5, e) => {
  var t;
  if (r5.symbol) t = new u0("mo", [
    /* @__PURE__ */ g0(r5.name, r5.mode)
  ]), R.contains(ia, r5.name) && t.setAttribute("largeop", "false");
  else if (r5.body) t = new u0("mo", m0(r5.body, e));
  else {
    t = new u0("mi", [
      new $0(r5.name.slice(1))
    ]);
    var a = new u0("mo", [
      /* @__PURE__ */ g0("⁡", "text")
    ]);
    r5.parentIsSupSub ? t = new u0("mrow", [
      t,
      a
    ]) : t = /* @__PURE__ */ Rr([
      t,
      a
    ]);
  }
  return t;
}, "mathmlBuilder$1"), Z1 = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
D({
  type: "op",
  names: [
    "\\coprod",
    "\\bigvee",
    "\\bigwedge",
    "\\biguplus",
    "\\bigcap",
    "\\bigcup",
    "\\intop",
    "\\prod",
    "\\sum",
    "\\bigotimes",
    "\\bigoplus",
    "\\bigodot",
    "\\bigsqcup",
    "\\smallint",
    "∏",
    "∐",
    "∑",
    "⋀",
    "⋁",
    "⋂",
    "⋃",
    "⨀",
    "⨁",
    "⨂",
    "⨄",
    "⨆"
  ],
  props: {
    numArgs: 0
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a } = r5, n = a;
    return n.length === 1 && (n = Z1[n]), {
      type: "op",
      mode: t.mode,
      limits: true,
      parentIsSupSub: false,
      symbol: true,
      name: n
    };
  }, "handler"),
  htmlBuilder: ie,
  mathmlBuilder: ve
});
D({
  type: "op",
  names: [
    "\\mathop"
  ],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5, a = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: false,
      body: /* @__PURE__ */ _(a)
    };
  }, "handler"),
  htmlBuilder: ie,
  mathmlBuilder: ve
});
var K1 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
D({
  type: "op",
  names: [
    "\\arcsin",
    "\\arccos",
    "\\arctan",
    "\\arctg",
    "\\arcctg",
    "\\arg",
    "\\ch",
    "\\cos",
    "\\cosec",
    "\\cosh",
    "\\cot",
    "\\cotg",
    "\\coth",
    "\\csc",
    "\\ctg",
    "\\cth",
    "\\deg",
    "\\dim",
    "\\exp",
    "\\hom",
    "\\ker",
    "\\lg",
    "\\ln",
    "\\log",
    "\\sec",
    "\\sin",
    "\\sinh",
    "\\sh",
    "\\tan",
    "\\tanh",
    "\\tg",
    "\\th"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    var { parser: e, funcName: t } = r5;
    return {
      type: "op",
      mode: e.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: false,
      name: t
    };
  },
  htmlBuilder: ie,
  mathmlBuilder: ve
});
D({
  type: "op",
  names: [
    "\\det",
    "\\gcd",
    "\\inf",
    "\\lim",
    "\\max",
    "\\min",
    "\\Pr",
    "\\sup"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    var { parser: e, funcName: t } = r5;
    return {
      type: "op",
      mode: e.mode,
      limits: true,
      parentIsSupSub: false,
      symbol: false,
      name: t
    };
  },
  htmlBuilder: ie,
  mathmlBuilder: ve
});
D({
  type: "op",
  names: [
    "\\int",
    "\\iint",
    "\\iiint",
    "\\oint",
    "\\oiint",
    "\\oiiint",
    "∫",
    "∬",
    "∭",
    "∮",
    "∯",
    "∰"
  ],
  props: {
    numArgs: 0
  },
  handler(r5) {
    var { parser: e, funcName: t } = r5, a = t;
    return a.length === 1 && (a = K1[a]), {
      type: "op",
      mode: e.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: true,
      name: a
    };
  },
  htmlBuilder: ie,
  mathmlBuilder: ve
});
var sa = /* @__PURE__ */ m$1((r5, e) => {
  var t, a, n = false, s;
  r5.type === "supsub" ? (t = r5.sup, a = r5.sub, s = /* @__PURE__ */ L(r5.base, "operatorname"), n = true) : s = /* @__PURE__ */ L(r5, "operatorname");
  var o;
  if (s.body.length > 0) {
    for (var h = /* @__PURE__ */ s.body.map((x) => {
      var k = x.text;
      return typeof k == "string" ? {
        type: "textord",
        mode: x.mode,
        text: k
      } : x;
    }), c = /* @__PURE__ */ r0(h, /* @__PURE__ */ e.withFont("mathrm"), true), v = 0; v < c.length; v++) {
      var b = c[v];
      b instanceof h0 && (b.text = /* @__PURE__ */ b.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    o = /* @__PURE__ */ y.makeSpan([
      "mop"
    ], c, e);
  } else o = /* @__PURE__ */ y.makeSpan([
    "mop"
  ], [], e);
  return n ? na(o, t, a, e, e.style, 0, 0) : o;
}, "htmlBuilder$1"), J1 = /* @__PURE__ */ m$1((r5, e) => {
  for (var t = /* @__PURE__ */ m0(r5.body, /* @__PURE__ */ e.withFont("mathrm")), a = true, n = 0; n < t.length; n++) {
    var s = t[n];
    if (!(s instanceof M.SpaceNode)) if (s instanceof M.MathNode) switch (s.type) {
      case "mi":
      case "mn":
      case "ms":
      case "mspace":
      case "mtext":
        break;
      case "mo": {
        var o = s.children[0];
        s.children.length === 1 && o instanceof M.TextNode ? o.text = /* @__PURE__ */ o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = false;
        break;
      }
      default:
        a = false;
    }
    else a = false;
  }
  if (a) {
    var h = /* @__PURE__ */ t.map((b) => b.toText()).join("");
    t = [
      new M.TextNode(h)
    ];
  }
  var c = new M.MathNode("mi", t);
  c.setAttribute("mathvariant", "normal");
  var v = new M.MathNode("mo", [
    /* @__PURE__ */ g0("⁡", "text")
  ]);
  return r5.parentIsSupSub ? new M.MathNode("mrow", [
    c,
    v
  ]) : M.newDocumentFragment([
    c,
    v
  ]);
}, "mathmlBuilder");
D({
  type: "operatorname",
  names: [
    "\\operatorname@",
    "\\operatornamewithlimits"
  ],
  props: {
    numArgs: 1
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t, funcName: a } = r5, n = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: /* @__PURE__ */ _(n),
      alwaysHandleSupSub: a === "\\operatornamewithlimits",
      limits: false,
      parentIsSupSub: false
    };
  }, "handler"),
  htmlBuilder: sa,
  mathmlBuilder: J1
});
m("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Z0({
  type: "ordgroup",
  htmlBuilder(r5, e) {
    return r5.semisimple ? y.makeFragment(/* @__PURE__ */ r0(r5.body, e, false)) : y.makeSpan([
      "mord"
    ], /* @__PURE__ */ r0(r5.body, e, true), e);
  },
  mathmlBuilder(r5, e) {
    return V0(r5.body, e, true);
  }
});
D({
  type: "overline",
  names: [
    "\\overline"
  ],
  props: {
    numArgs: 1
  },
  handler(r5, e) {
    var { parser: t } = r5, a = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: a
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ G(r5.body, /* @__PURE__ */ e.havingCrampedStyle()), a = /* @__PURE__ */ y.makeLineSpan("overline-line", e), n = e.fontMetrics().defaultRuleThickness, s = /* @__PURE__ */ y.makeVList({
      positionType: "firstBaseline",
      children: [
        {
          type: "elem",
          elem: t
        },
        {
          type: "kern",
          size: 3 * n
        },
        {
          type: "elem",
          elem: a
        },
        {
          type: "kern",
          size: n
        }
      ]
    }, e);
    return y.makeSpan([
      "mord",
      "overline"
    ], [
      s
    ], e);
  },
  mathmlBuilder(r5, e) {
    var t = new M.MathNode("mo", [
      new M.TextNode("‾")
    ]);
    t.setAttribute("stretchy", "true");
    var a = new M.MathNode("mover", [
      /* @__PURE__ */ $(r5.body, e),
      t
    ]);
    return a.setAttribute("accent", "true"), a;
  }
});
D({
  type: "phantom",
  names: [
    "\\phantom"
  ],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5, a = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: /* @__PURE__ */ _(a)
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ r0(r5.body, /* @__PURE__ */ e.withPhantom(), false);
    return y.makeFragment(t);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ m0(r5.body, e);
    return new M.MathNode("mphantom", t);
  }, "mathmlBuilder")
});
D({
  type: "hphantom",
  names: [
    "\\hphantom"
  ],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5, a = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: a
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ y.makeSpan([], [
      /* @__PURE__ */ G(r5.body, /* @__PURE__ */ e.withPhantom())
    ]);
    if (t.height = 0, t.depth = 0, t.children) for (var a = 0; a < t.children.length; a++) t.children[a].height = 0, t.children[a].depth = 0;
    return t = /* @__PURE__ */ y.makeVList({
      positionType: "firstBaseline",
      children: [
        {
          type: "elem",
          elem: t
        }
      ]
    }, e), y.makeSpan([
      "mord"
    ], [
      t
    ], e);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ m0(/* @__PURE__ */ _(r5.body), e), a = new M.MathNode("mphantom", t), n = new M.MathNode("mpadded", [
      a
    ]);
    return n.setAttribute("height", "0px"), n.setAttribute("depth", "0px"), n;
  }, "mathmlBuilder")
});
D({
  type: "vphantom",
  names: [
    "\\vphantom"
  ],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { parser: t } = r5, a = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: a
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ y.makeSpan([
      "inner"
    ], [
      /* @__PURE__ */ G(r5.body, /* @__PURE__ */ e.withPhantom())
    ]), a = /* @__PURE__ */ y.makeSpan([
      "fix"
    ], []);
    return y.makeSpan([
      "mord",
      "rlap"
    ], [
      t,
      a
    ], e);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ m0(/* @__PURE__ */ _(r5.body), e), a = new M.MathNode("mphantom", t), n = new M.MathNode("mpadded", [
      a
    ]);
    return n.setAttribute("width", "0px"), n;
  }, "mathmlBuilder")
});
D({
  type: "raisebox",
  names: [
    "\\raisebox"
  ],
  props: {
    numArgs: 2,
    argTypes: [
      "size",
      "hbox"
    ],
    allowedInText: true
  },
  handler(r5, e) {
    var { parser: t } = r5, a = L(e[0], "size").value, n = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: a,
      body: n
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ G(r5.body, e), a = /* @__PURE__ */ Q(r5.dy, e);
    return y.makeVList({
      positionType: "shift",
      positionData: -a,
      children: [
        {
          type: "elem",
          elem: t
        }
      ]
    }, e);
  },
  mathmlBuilder(r5, e) {
    var t = new M.MathNode("mpadded", [
      /* @__PURE__ */ $(r5.body, e)
    ]), a = r5.dy.number + r5.dy.unit;
    return t.setAttribute("voffset", a), t;
  }
});
D({
  type: "internal",
  names: [
    "\\relax"
  ],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler(r5) {
    var { parser: e } = r5;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
D({
  type: "rule",
  names: [
    "\\rule"
  ],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: [
      "size",
      "size",
      "size"
    ]
  },
  handler(r5, e, t) {
    var { parser: a } = r5, n = t[0], s = /* @__PURE__ */ L(e[0], "size"), o = /* @__PURE__ */ L(e[1], "size");
    return {
      type: "rule",
      mode: a.mode,
      shift: n && L(n, "size").value,
      width: s.value,
      height: o.value
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ y.makeSpan([
      "mord",
      "rule"
    ], [], e), a = /* @__PURE__ */ Q(r5.width, e), n = /* @__PURE__ */ Q(r5.height, e), s = r5.shift ? Q(r5.shift, e) : 0;
    return t.style.borderRightWidth = /* @__PURE__ */ T(a), t.style.borderTopWidth = /* @__PURE__ */ T(n), t.style.bottom = /* @__PURE__ */ T(s), t.width = a, t.height = n + s, t.depth = -s, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r5, e) {
    var t = /* @__PURE__ */ Q(r5.width, e), a = /* @__PURE__ */ Q(r5.height, e), n = r5.shift ? Q(r5.shift, e) : 0, s = e.color && e.getColor() || "black", o = new M.MathNode("mspace");
    o.setAttribute("mathbackground", s), o.setAttribute("width", /* @__PURE__ */ T(t)), o.setAttribute("height", /* @__PURE__ */ T(a));
    var h = new M.MathNode("mpadded", [
      o
    ]);
    return n >= 0 ? h.setAttribute("height", /* @__PURE__ */ T(n)) : (h.setAttribute("height", /* @__PURE__ */ T(n)), h.setAttribute("depth", /* @__PURE__ */ T(-n))), h.setAttribute("voffset", /* @__PURE__ */ T(n)), h;
  }
});
function la(r5, e, t) {
  for (var a = /* @__PURE__ */ r0(r5, e, false), n = e.sizeMultiplier / t.sizeMultiplier, s = 0; s < a.length; s++) {
    var o = /* @__PURE__ */ a[s].classes.indexOf("sizing");
    o < 0 ? Array.prototype.push.apply(a[s].classes, /* @__PURE__ */ e.sizingClasses(t)) : a[s].classes[o + 1] === "reset-size" + e.size && (a[s].classes[o + 1] = "reset-size" + t.size), a[s].height *= n, a[s].depth *= n;
  }
  return y.makeFragment(a);
}
m$1(la, "sizingGroup");
var ur = [
  "\\tiny",
  "\\sixptsize",
  "\\scriptsize",
  "\\footnotesize",
  "\\small",
  "\\normalsize",
  "\\large",
  "\\Large",
  "\\LARGE",
  "\\huge",
  "\\Huge"
], Q1 = /* @__PURE__ */ m$1((r5, e) => {
  var t = /* @__PURE__ */ e.havingSize(r5.size);
  return la(r5.body, t, e);
}, "htmlBuilder");
D({
  type: "sizing",
  names: ur,
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e) => {
    var { breakOnTokenText: t, funcName: a, parser: n } = r5, s = /* @__PURE__ */ n.parseExpression(false, t);
    return {
      type: "sizing",
      mode: n.mode,
      size: ur.indexOf(a) + 1,
      body: s
    };
  }, "handler"),
  htmlBuilder: Q1,
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ e.havingSize(r5.size), a = /* @__PURE__ */ m0(r5.body, t), n = new M.MathNode("mstyle", a);
    return n.setAttribute("mathsize", /* @__PURE__ */ T(t.sizeMultiplier)), n;
  }, "mathmlBuilder")
});
D({
  type: "smash",
  names: [
    "\\smash"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: true
  },
  handler: /* @__PURE__ */ m$1((r5, e, t) => {
    var { parser: a } = r5, n = false, s = false, o = t[0] && L(t[0], "ordgroup");
    if (o) for (var h = "", c = 0; c < o.body.length; ++c) {
      var v = o.body[c];
      if (h = v.text, h === "t") n = true;
      else if (h === "b") s = true;
      else {
        n = false, s = false;
        break;
      }
    }
    else n = true, s = true;
    var b = e[0];
    return {
      type: "smash",
      mode: a.mode,
      body: b,
      smashHeight: n,
      smashDepth: s
    };
  }, "handler"),
  htmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = /* @__PURE__ */ y.makeSpan([], [
      /* @__PURE__ */ G(r5.body, e)
    ]);
    if (!r5.smashHeight && !r5.smashDepth) return t;
    if (r5.smashHeight && (t.height = 0, t.children)) for (var a = 0; a < t.children.length; a++) t.children[a].height = 0;
    if (r5.smashDepth && (t.depth = 0, t.children)) for (var n = 0; n < t.children.length; n++) t.children[n].depth = 0;
    var s = /* @__PURE__ */ y.makeVList({
      positionType: "firstBaseline",
      children: [
        {
          type: "elem",
          elem: t
        }
      ]
    }, e);
    return y.makeSpan([
      "mord"
    ], [
      s
    ], e);
  }, "htmlBuilder"),
  mathmlBuilder: /* @__PURE__ */ m$1((r5, e) => {
    var t = new M.MathNode("mpadded", [
      /* @__PURE__ */ $(r5.body, e)
    ]);
    return r5.smashHeight && t.setAttribute("height", "0px"), r5.smashDepth && t.setAttribute("depth", "0px"), t;
  }, "mathmlBuilder")
});
D({
  type: "sqrt",
  names: [
    "\\sqrt"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r5, e, t) {
    var { parser: a } = r5, n = t[0], s = e[0];
    return {
      type: "sqrt",
      mode: a.mode,
      body: s,
      index: n
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ G(r5.body, /* @__PURE__ */ e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = /* @__PURE__ */ y.wrapFragment(t, e);
    var a = /* @__PURE__ */ e.fontMetrics(), n = a.defaultRuleThickness, s = n;
    e.style.id < I.TEXT.id && (s = e.fontMetrics().xHeight);
    var o = n + s / 4, h = t.height + t.depth + o + n, { span: c, ruleWidth: v, advanceWidth: b } = N0.sqrtImage(h, e), x = c.height - v;
    x > t.height + t.depth + o && (o = (o + x - t.height - t.depth) / 2);
    var k = c.height - t.height - o - v;
    t.style.paddingLeft = /* @__PURE__ */ T(b);
    var w = /* @__PURE__ */ y.makeVList({
      positionType: "firstBaseline",
      children: [
        {
          type: "elem",
          elem: t,
          wrapperClasses: [
            "svg-align"
          ]
        },
        {
          type: "kern",
          size: -(t.height + k)
        },
        {
          type: "elem",
          elem: c
        },
        {
          type: "kern",
          size: v
        }
      ]
    }, e);
    if (r5.index) {
      var A = /* @__PURE__ */ e.havingStyle(I.SCRIPTSCRIPT), B = /* @__PURE__ */ G(r5.index, A, e), q = 0.6 * (w.height - w.depth), N = /* @__PURE__ */ y.makeVList({
        positionType: "shift",
        positionData: -q,
        children: [
          {
            type: "elem",
            elem: B
          }
        ]
      }, e), H = /* @__PURE__ */ y.makeSpan([
        "root"
      ], [
        N
      ]);
      return y.makeSpan([
        "mord",
        "sqrt"
      ], [
        H,
        w
      ], e);
    } else return y.makeSpan([
      "mord",
      "sqrt"
    ], [
      w
    ], e);
  },
  mathmlBuilder(r5, e) {
    var { body: t, index: a } = r5;
    return a ? new M.MathNode("mroot", [
      /* @__PURE__ */ $(t, e),
      /* @__PURE__ */ $(a, e)
    ]) : new M.MathNode("msqrt", [
      /* @__PURE__ */ $(t, e)
    ]);
  }
});
var hr = {
  display: I.DISPLAY,
  text: I.TEXT,
  script: I.SCRIPT,
  scriptscript: I.SCRIPTSCRIPT
};
D({
  type: "styling",
  names: [
    "\\displaystyle",
    "\\textstyle",
    "\\scriptstyle",
    "\\scriptscriptstyle"
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(r5, e) {
    var { breakOnTokenText: t, funcName: a, parser: n } = r5, s = /* @__PURE__ */ n.parseExpression(true, t), o = /* @__PURE__ */ a.slice(1, a.length - 5);
    return {
      type: "styling",
      mode: n.mode,
      style: o,
      body: s
    };
  },
  htmlBuilder(r5, e) {
    var t = hr[r5.style], a = /* @__PURE__ */ e.havingStyle(t).withFont("");
    return la(r5.body, a, e);
  },
  mathmlBuilder(r5, e) {
    var t = hr[r5.style], a = /* @__PURE__ */ e.havingStyle(t), n = /* @__PURE__ */ m0(r5.body, a), s = new M.MathNode("mstyle", n), o = {
      display: [
        "0",
        "true"
      ],
      text: [
        "0",
        "false"
      ],
      script: [
        "1",
        "false"
      ],
      scriptscript: [
        "2",
        "false"
      ]
    }, h = o[r5.style];
    return s.setAttribute("scriptlevel", h[0]), s.setAttribute("displaystyle", h[1]), s;
  }
});
var _1 = /* @__PURE__ */ m$1(function(e, t) {
  var a = e.base;
  if (a) if (a.type === "op") {
    var n = a.limits && (t.style.size === I.DISPLAY.size || a.alwaysHandleSupSub);
    return n ? ie : null;
  } else if (a.type === "operatorname") {
    var s = a.alwaysHandleSupSub && (t.style.size === I.DISPLAY.size || a.limits);
    return s ? sa : null;
  } else {
    if (a.type === "accent") return R.isCharacterBox(a.base) ? Bt : null;
    if (a.type === "horizBrace") {
      var o = !e.sub;
      return o === a.isOver ? aa : null;
    } else return null;
  }
  else return null;
}, "htmlBuilderDelegate");
Z0({
  type: "supsub",
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ _1(r5, e);
    if (t) return t(r5, e);
    var { base: a, sup: n, sub: s } = r5, o = /* @__PURE__ */ G(a, e), h, c, v = /* @__PURE__ */ e.fontMetrics(), b = 0, x = 0, k = a && R.isCharacterBox(a);
    if (n) {
      var w = /* @__PURE__ */ e.havingStyle(/* @__PURE__ */ e.style.sup());
      h = /* @__PURE__ */ G(n, w, e), k || (b = o.height - w.fontMetrics().supDrop * w.sizeMultiplier / e.sizeMultiplier);
    }
    if (s) {
      var A = /* @__PURE__ */ e.havingStyle(/* @__PURE__ */ e.style.sub());
      c = /* @__PURE__ */ G(s, A, e), k || (x = o.depth + A.fontMetrics().subDrop * A.sizeMultiplier / e.sizeMultiplier);
    }
    var B;
    e.style === I.DISPLAY ? B = v.sup1 : e.style.cramped ? B = v.sup3 : B = v.sup2;
    var q = e.sizeMultiplier, N = /* @__PURE__ */ T(0.5 / v.ptPerEm / q), H = null;
    if (c) {
      var F = r5.base && r5.base.type === "op" && r5.base.name && (r5.base.name === "\\oiint" || r5.base.name === "\\oiiint");
      (o instanceof h0 || F) && (H = /* @__PURE__ */ T(-o.italic));
    }
    var U;
    if (h && c) {
      b = /* @__PURE__ */ Math.max(b, B, h.depth + 0.25 * v.xHeight), x = /* @__PURE__ */ Math.max(x, v.sub2);
      var P = v.defaultRuleThickness, Y = 4 * P;
      if (b - h.depth - (c.height - x) < Y) {
        x = Y - (b - h.depth) + c.height;
        var V = 0.8 * v.xHeight - (b - h.depth);
        V > 0 && (b += V, x -= V);
      }
      var Z = [
        {
          type: "elem",
          elem: c,
          shift: x,
          marginRight: N,
          marginLeft: H
        },
        {
          type: "elem",
          elem: h,
          shift: -b,
          marginRight: N
        }
      ];
      U = /* @__PURE__ */ y.makeVList({
        positionType: "individualShift",
        children: Z
      }, e);
    } else if (c) {
      x = /* @__PURE__ */ Math.max(x, v.sub1, c.height - 0.8 * v.xHeight);
      var X = [
        {
          type: "elem",
          elem: c,
          marginLeft: H,
          marginRight: N
        }
      ];
      U = /* @__PURE__ */ y.makeVList({
        positionType: "shift",
        positionData: x,
        children: X
      }, e);
    } else if (h) b = /* @__PURE__ */ Math.max(b, B, h.depth + 0.25 * v.xHeight), U = /* @__PURE__ */ y.makeVList({
      positionType: "shift",
      positionData: -b,
      children: [
        {
          type: "elem",
          elem: h,
          marginRight: N
        }
      ]
    }, e);
    else throw new Error("supsub must have either sup or sub.");
    var B0 = ft(o, "right") || "mord";
    return y.makeSpan([
      B0
    ], [
      o,
      /* @__PURE__ */ y.makeSpan([
        "msupsub"
      ], [
        U
      ])
    ], e);
  },
  mathmlBuilder(r5, e) {
    var t = false, a, n;
    r5.base && r5.base.type === "horizBrace" && (n = !!r5.sup, n === r5.base.isOver && (t = true, a = r5.base.isOver)), r5.base && (r5.base.type === "op" || r5.base.type === "operatorname") && (r5.base.parentIsSupSub = true);
    var s = [
      /* @__PURE__ */ $(r5.base, e)
    ];
    r5.sub && s.push(/* @__PURE__ */ $(r5.sub, e)), r5.sup && s.push(/* @__PURE__ */ $(r5.sup, e));
    var o;
    if (t) o = a ? "mover" : "munder";
    else if (r5.sub) if (r5.sup) {
      var v = r5.base;
      v && v.type === "op" && v.limits && e.style === I.DISPLAY || v && v.type === "operatorname" && v.alwaysHandleSupSub && (e.style === I.DISPLAY || v.limits) ? o = "munderover" : o = "msubsup";
    } else {
      var c = r5.base;
      c && c.type === "op" && c.limits && (e.style === I.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === I.DISPLAY) ? o = "munder" : o = "msub";
    }
    else {
      var h = r5.base;
      h && h.type === "op" && h.limits && (e.style === I.DISPLAY || h.alwaysHandleSupSub) || h && h.type === "operatorname" && h.alwaysHandleSupSub && (h.limits || e.style === I.DISPLAY) ? o = "mover" : o = "msup";
    }
    return new M.MathNode(o, s);
  }
});
Z0({
  type: "atom",
  htmlBuilder(r5, e) {
    return y.mathsym(r5.text, r5.mode, e, [
      "m" + r5.family
    ]);
  },
  mathmlBuilder(r5, e) {
    var t = new M.MathNode("mo", [
      /* @__PURE__ */ g0(r5.text, r5.mode)
    ]);
    if (r5.family === "bin") {
      var a = /* @__PURE__ */ At(r5, e);
      a === "bold-italic" && t.setAttribute("mathvariant", a);
    } else r5.family === "punct" ? t.setAttribute("separator", "true") : (r5.family === "open" || r5.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var oa = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Z0({
  type: "mathord",
  htmlBuilder(r5, e) {
    return y.makeOrd(r5, e, "mathord");
  },
  mathmlBuilder(r5, e) {
    var t = new M.MathNode("mi", [
      /* @__PURE__ */ g0(r5.text, r5.mode, e)
    ]), a = At(r5, e) || "italic";
    return a !== oa[t.type] && t.setAttribute("mathvariant", a), t;
  }
});
Z0({
  type: "textord",
  htmlBuilder(r5, e) {
    return y.makeOrd(r5, e, "textord");
  },
  mathmlBuilder(r5, e) {
    var t = /* @__PURE__ */ g0(r5.text, r5.mode, e), a = At(r5, e) || "normal", n;
    return r5.mode === "text" ? n = new M.MathNode("mtext", [
      t
    ]) : /[0-9]/.test(r5.text) ? n = new M.MathNode("mn", [
      t
    ]) : r5.text === "\\prime" ? n = new M.MathNode("mo", [
      t
    ]) : n = new M.MathNode("mi", [
      t
    ]), a !== oa[n.type] && n.setAttribute("mathvariant", a), n;
  }
});
var lt = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, ot = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
Z0({
  type: "spacing",
  htmlBuilder(r5, e) {
    if (ot.hasOwnProperty(r5.text)) {
      var t = ot[r5.text].className || "";
      if (r5.mode === "text") {
        var a = /* @__PURE__ */ y.makeOrd(r5, e, "textord");
        return a.classes.push(t), a;
      } else return y.makeSpan([
        "mspace",
        t
      ], [
        /* @__PURE__ */ y.mathsym(r5.text, r5.mode, e)
      ], e);
    } else {
      if (lt.hasOwnProperty(r5.text)) return y.makeSpan([
        "mspace",
        lt[r5.text]
      ], [], e);
      throw new z('Unknown type of space "' + r5.text + '"');
    }
  },
  mathmlBuilder(r5, e) {
    var t;
    if (ot.hasOwnProperty(r5.text)) t = new M.MathNode("mtext", [
      new M.TextNode(" ")
    ]);
    else {
      if (lt.hasOwnProperty(r5.text)) return new M.MathNode("mspace");
      throw new z('Unknown type of space "' + r5.text + '"');
    }
    return t;
  }
});
var mr = /* @__PURE__ */ m$1(() => {
  var r5 = new M.MathNode("mtd", []);
  return r5.setAttribute("width", "50%"), r5;
}, "pad");
Z0({
  type: "tag",
  mathmlBuilder(r5, e) {
    var t = new M.MathNode("mtable", [
      new M.MathNode("mtr", [
        /* @__PURE__ */ mr(),
        new M.MathNode("mtd", [
          /* @__PURE__ */ V0(r5.body, e)
        ]),
        /* @__PURE__ */ mr(),
        new M.MathNode("mtd", [
          /* @__PURE__ */ V0(r5.tag, e)
        ])
      ])
    ]);
    return t.setAttribute("width", "100%"), t;
  }
});
var cr = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, dr = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, e4 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, fr = /* @__PURE__ */ m$1((r5, e) => {
  var t = r5.font;
  if (t) {
    if (cr[t]) return e.withTextFontFamily(cr[t]);
    if (dr[t]) return e.withTextFontWeight(dr[t]);
    if (t === "\\emph") return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(e4[t]);
}, "optionsWithFont");
D({
  type: "text",
  names: [
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    "\\textbf",
    "\\textmd",
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "text"
    ],
    allowedInArgument: true,
    allowedInText: true
  },
  handler(r5, e) {
    var { parser: t, funcName: a } = r5, n = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: /* @__PURE__ */ _(n),
      font: a
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ fr(r5, e), a = /* @__PURE__ */ r0(r5.body, t, true);
    return y.makeSpan([
      "mord",
      "text"
    ], a, t);
  },
  mathmlBuilder(r5, e) {
    var t = /* @__PURE__ */ fr(r5, e);
    return V0(r5.body, t);
  }
});
D({
  type: "underline",
  names: [
    "\\underline"
  ],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(r5, e) {
    var { parser: t } = r5;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ G(r5.body, e), a = /* @__PURE__ */ y.makeLineSpan("underline-line", e), n = e.fontMetrics().defaultRuleThickness, s = /* @__PURE__ */ y.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [
        {
          type: "kern",
          size: n
        },
        {
          type: "elem",
          elem: a
        },
        {
          type: "kern",
          size: 3 * n
        },
        {
          type: "elem",
          elem: t
        }
      ]
    }, e);
    return y.makeSpan([
      "mord",
      "underline"
    ], [
      s
    ], e);
  },
  mathmlBuilder(r5, e) {
    var t = new M.MathNode("mo", [
      new M.TextNode("‾")
    ]);
    t.setAttribute("stretchy", "true");
    var a = new M.MathNode("munder", [
      /* @__PURE__ */ $(r5.body, e),
      t
    ]);
    return a.setAttribute("accentunder", "true"), a;
  }
});
D({
  type: "vcenter",
  names: [
    "\\vcenter"
  ],
  props: {
    numArgs: 1,
    argTypes: [
      "original"
    ],
    allowedInText: false
  },
  handler(r5, e) {
    var { parser: t } = r5;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r5, e) {
    var t = /* @__PURE__ */ G(r5.body, e), a = e.fontMetrics().axisHeight, n = 0.5 * (t.height - a - (t.depth + a));
    return y.makeVList({
      positionType: "shift",
      positionData: n,
      children: [
        {
          type: "elem",
          elem: t
        }
      ]
    }, e);
  },
  mathmlBuilder(r5, e) {
    return new M.MathNode("mpadded", [
      /* @__PURE__ */ $(r5.body, e)
    ], [
      "vcenter"
    ]);
  }
});
D({
  type: "verb",
  names: [
    "\\verb"
  ],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler(r5, e, t) {
    throw new z("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r5, e) {
    for (var t = /* @__PURE__ */ pr(r5), a = [], n = /* @__PURE__ */ e.havingStyle(/* @__PURE__ */ e.style.text()), s = 0; s < t.length; s++) {
      var o = t[s];
      o === "~" && (o = "\\textasciitilde"), a.push(/* @__PURE__ */ y.makeSymbol(o, "Typewriter-Regular", r5.mode, n, [
        "mord",
        "texttt"
      ]));
    }
    return y.makeSpan(/* @__PURE__ */ [
      "mord",
      "text"
    ].concat(/* @__PURE__ */ n.sizingClasses(e)), /* @__PURE__ */ y.tryCombineChars(a), n);
  },
  mathmlBuilder(r5, e) {
    var t = new M.TextNode(pr(r5)), a = new M.MathNode("mtext", [
      t
    ]);
    return a.setAttribute("mathvariant", "monospace"), a;
  }
});
var pr = /* @__PURE__ */ m$1((r5) => r5.body.replace(/ /g, r5.star ? "␣" : " "), "makeVerb"), P0 = qr, ua = `[ \r
	]`, t4 = "\\\\[a-zA-Z@]+", r4 = "\\\\[^\uD800-\uDFFF]", a4 = "(" + t4 + ")" + ua + "*", n4 = `\\\\(
|[ \r	]+
?)[ \r	]*`, yt = "[̀-ͯ]", i4 = new RegExp(yt + "+$"), s4 = "(" + ua + "+)|" + (n4 + "|") + "([!-\\[\\]-‧‪-퟿豈-￿]" + (yt + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (yt + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + a4) + ("|" + r4 + ")"), Pe = (_r2 = class {
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(s4, "g"), this.catcodes = {
      "%": 14,
      "~": 13
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length) return new v0("EOF", new c0(this, t, t));
    var a = /* @__PURE__ */ this.tokenRegex.exec(e);
    if (a === null || a.index !== t) throw new z("Unexpected character: '" + e[t] + "'", new v0(e[t], new c0(this, t, t + 1)));
    var n = a[6] || a[3] || (a[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var s = /* @__PURE__ */ e.indexOf(`
`, this.tokenRegex.lastIndex);
      return s === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = s + 1, this.lex();
    }
    return new v0(n, new c0(this, t, this.tokenRegex.lastIndex));
  }
}, __18 = new WeakMap(), __privateAdd(_r2, __18, m$1(_r2, "Lexer")), _r2), xt = (_s = class {
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  beginGroup() {
    this.undefStack.push({});
  }
  endGroup() {
    if (this.undefStack.length === 0) throw new z("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = /* @__PURE__ */ this.undefStack.pop();
    for (var t in e) e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  endGroups() {
    for (; this.undefStack.length > 0; ) this.endGroup();
  }
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  set(e, t, a) {
    if (a === void 0 && (a = false), a) {
      for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var s = this.undefStack[this.undefStack.length - 1];
      s && !s.hasOwnProperty(e) && (s[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}, __19 = new WeakMap(), __privateAdd(_s, __19, m$1(_s, "Namespace")), _s), l4 = Qr;
m("\\noexpand", function(r5) {
  var e = /* @__PURE__ */ r5.popToken();
  return r5.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), {
    tokens: [
      e
    ],
    numArgs: 0
  };
});
m("\\expandafter", function(r5) {
  var e = /* @__PURE__ */ r5.popToken();
  return r5.expandOnce(true), {
    tokens: [
      e
    ],
    numArgs: 0
  };
});
m("\\@firstoftwo", function(r5) {
  var e = /* @__PURE__ */ r5.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
m("\\@secondoftwo", function(r5) {
  var e = /* @__PURE__ */ r5.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
m("\\@ifnextchar", function(r5) {
  var e = /* @__PURE__ */ r5.consumeArgs(3);
  r5.consumeSpaces();
  var t = /* @__PURE__ */ r5.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
m("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
m("\\TextOrMath", function(r5) {
  var e = /* @__PURE__ */ r5.consumeArgs(2);
  return r5.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var vr = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
m("\\char", function(r5) {
  var e = /* @__PURE__ */ r5.popToken(), t, a = "";
  if (e.text === "'") t = 8, e = /* @__PURE__ */ r5.popToken();
  else if (e.text === '"') t = 16, e = /* @__PURE__ */ r5.popToken();
  else if (e.text === "`") if (e = /* @__PURE__ */ r5.popToken(), e.text[0] === "\\") a = /* @__PURE__ */ e.text.charCodeAt(1);
  else {
    if (e.text === "EOF") throw new z("\\char` missing argument");
    a = /* @__PURE__ */ e.text.charCodeAt(0);
  }
  else t = 10;
  if (t) {
    if (a = vr[e.text], a == null || a >= t) throw new z("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = vr[r5.future().text]) != null && n < t; ) a *= t, a += n, r5.popToken();
  }
  return "\\@char{" + a + "}";
});
var Ot = /* @__PURE__ */ m$1((r5, e, t) => {
  var a = r5.consumeArg().tokens;
  if (a.length !== 1) throw new z("\\newcommand's first argument must be a macro name");
  var n = a[0].text, s = /* @__PURE__ */ r5.isDefined(n);
  if (s && !e) throw new z("\\newcommand{" + n + "} attempting to redefine " + (n + "; use \\renewcommand"));
  if (!s && !t) throw new z("\\renewcommand{" + n + "} when command " + n + " does not yet exist; use \\newcommand");
  var o = 0;
  if (a = r5.consumeArg().tokens, a.length === 1 && a[0].text === "[") {
    for (var h = "", c = /* @__PURE__ */ r5.expandNextToken(); c.text !== "]" && c.text !== "EOF"; ) h += c.text, c = /* @__PURE__ */ r5.expandNextToken();
    if (!h.match(/^\s*[0-9]+\s*$/)) throw new z("Invalid number of arguments: " + h);
    o = /* @__PURE__ */ parseInt(h), a = r5.consumeArg().tokens;
  }
  return r5.macros.set(n, {
    tokens: a,
    numArgs: o
  }), "";
}, "newcommand");
m("\\newcommand", (r5) => Ot(r5, false, true));
m("\\renewcommand", (r5) => Ot(r5, true, false));
m("\\providecommand", (r5) => Ot(r5, true, true));
m("\\message", (r5) => {
  var e = r5.consumeArgs(1)[0];
  return console.log(/* @__PURE__ */ e.reverse().map((t) => t.text).join("")), "";
});
m("\\errmessage", (r5) => {
  var e = r5.consumeArgs(1)[0];
  return console.error(/* @__PURE__ */ e.reverse().map((t) => t.text).join("")), "";
});
m("\\show", (r5) => {
  var e = /* @__PURE__ */ r5.popToken(), t = e.text;
  return console.log(e, /* @__PURE__ */ r5.macros.get(t), P0[t], W.math[t], W.text[t]), "";
});
m("\\bgroup", "{");
m("\\egroup", "}");
m("~", "\\nobreakspace");
m("\\lq", "`");
m("\\rq", "'");
m("\\aa", "\\r a");
m("\\AA", "\\r A");
m("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
m("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
m("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
m("ℬ", "\\mathscr{B}");
m("ℰ", "\\mathscr{E}");
m("ℱ", "\\mathscr{F}");
m("ℋ", "\\mathscr{H}");
m("ℐ", "\\mathscr{I}");
m("ℒ", "\\mathscr{L}");
m("ℳ", "\\mathscr{M}");
m("ℛ", "\\mathscr{R}");
m("ℭ", "\\mathfrak{C}");
m("ℌ", "\\mathfrak{H}");
m("ℨ", "\\mathfrak{Z}");
m("\\Bbbk", "\\Bbb{k}");
m("·", "\\cdotp");
m("\\llap", "\\mathllap{\\textrm{#1}}");
m("\\rlap", "\\mathrlap{\\textrm{#1}}");
m("\\clap", "\\mathclap{\\textrm{#1}}");
m("\\mathstrut", "\\vphantom{(}");
m("\\underbar", "\\underline{\\text{#1}}");
m("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
m("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
m("\\ne", "\\neq");
m("≠", "\\neq");
m("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
m("∉", "\\notin");
m("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
m("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
m("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
m("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
m("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
m("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
m("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
m("⟂", "\\perp");
m("‼", "\\mathclose{!\\mkern-0.8mu!}");
m("∌", "\\notni");
m("⌜", "\\ulcorner");
m("⌝", "\\urcorner");
m("⌞", "\\llcorner");
m("⌟", "\\lrcorner");
m("©", "\\copyright");
m("®", "\\textregistered");
m("️", "\\textregistered");
m("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
m("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
m("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
m("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
m("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
m("⋮", "\\vdots");
m("\\varGamma", "\\mathit{\\Gamma}");
m("\\varDelta", "\\mathit{\\Delta}");
m("\\varTheta", "\\mathit{\\Theta}");
m("\\varLambda", "\\mathit{\\Lambda}");
m("\\varXi", "\\mathit{\\Xi}");
m("\\varPi", "\\mathit{\\Pi}");
m("\\varSigma", "\\mathit{\\Sigma}");
m("\\varUpsilon", "\\mathit{\\Upsilon}");
m("\\varPhi", "\\mathit{\\Phi}");
m("\\varPsi", "\\mathit{\\Psi}");
m("\\varOmega", "\\mathit{\\Omega}");
m("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
m("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
m("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
m("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
m("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
m("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var gr = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  "\\mathbin": "\\dotsb",
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  "\\DOTSX": "\\dotsx"
};
m("\\dots", function(r5) {
  var e = "\\dotso", t = r5.expandAfterFuture().text;
  return t in gr ? e = gr[t] : (t.slice(0, 4) === "\\not" || t in W.math && R.contains([
    "bin",
    "rel"
  ], W.math[t].group)) && (e = "\\dotsb"), e;
});
var Ht = {
  ")": true,
  "]": true,
  "\\rbrack": true,
  "\\}": true,
  "\\rbrace": true,
  "\\rangle": true,
  "\\rceil": true,
  "\\rfloor": true,
  "\\rgroup": true,
  "\\rmoustache": true,
  "\\right": true,
  "\\bigr": true,
  "\\biggr": true,
  "\\Bigr": true,
  "\\Biggr": true,
  $: true,
  ";": true,
  ".": true,
  ",": true
};
m("\\dotso", function(r5) {
  var e = r5.future().text;
  return e in Ht ? "\\ldots\\," : "\\ldots";
});
m("\\dotsc", function(r5) {
  var e = r5.future().text;
  return e in Ht && e !== "," ? "\\ldots\\," : "\\ldots";
});
m("\\cdots", function(r5) {
  var e = r5.future().text;
  return e in Ht ? "\\@cdots\\," : "\\@cdots";
});
m("\\dotsb", "\\cdots");
m("\\dotsm", "\\cdots");
m("\\dotsi", "\\!\\cdots");
m("\\dotsx", "\\ldots\\,");
m("\\DOTSI", "\\relax");
m("\\DOTSB", "\\relax");
m("\\DOTSX", "\\relax");
m("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
m("\\,", "\\tmspace+{3mu}{.1667em}");
m("\\thinspace", "\\,");
m("\\>", "\\mskip{4mu}");
m("\\:", "\\tmspace+{4mu}{.2222em}");
m("\\medspace", "\\:");
m("\\;", "\\tmspace+{5mu}{.2777em}");
m("\\thickspace", "\\;");
m("\\!", "\\tmspace-{3mu}{.1667em}");
m("\\negthinspace", "\\!");
m("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
m("\\negthickspace", "\\tmspace-{5mu}{.277em}");
m("\\enspace", "\\kern.5em ");
m("\\enskip", "\\hskip.5em\\relax");
m("\\quad", "\\hskip1em\\relax");
m("\\qquad", "\\hskip2em\\relax");
m("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
m("\\tag@paren", "\\tag@literal{({#1})}");
m("\\tag@literal", (r5) => {
  if (r5.macros.get("\\df@tag")) throw new z("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
m("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
m("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
m("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
m("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
m("\\newline", "\\\\\\relax");
m("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var ha = /* @__PURE__ */ T(S0["Main-Regular"][84][1] - 0.7 * S0["Main-Regular"][65][1]);
m("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + ha + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
m("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + ha + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
m("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
m("\\@hspace", "\\hskip #1\\relax");
m("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
m("\\ordinarycolon", ":");
m("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
m("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
m("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
m("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
m("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
m("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
m("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
m("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
m("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
m("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
m("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
m("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
m("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
m("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
m("∷", "\\dblcolon");
m("∹", "\\eqcolon");
m("≔", "\\coloneqq");
m("≕", "\\eqqcolon");
m("⩴", "\\Coloneqq");
m("\\ratio", "\\vcentcolon");
m("\\coloncolon", "\\dblcolon");
m("\\colonequals", "\\coloneqq");
m("\\coloncolonequals", "\\Coloneqq");
m("\\equalscolon", "\\eqqcolon");
m("\\equalscoloncolon", "\\Eqqcolon");
m("\\colonminus", "\\coloneq");
m("\\coloncolonminus", "\\Coloneq");
m("\\minuscolon", "\\eqcolon");
m("\\minuscoloncolon", "\\Eqcolon");
m("\\coloncolonapprox", "\\Colonapprox");
m("\\coloncolonsim", "\\Colonsim");
m("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
m("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
m("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
m("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
m("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
m("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
m("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
m("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
m("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
m("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
m("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
m("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
m("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
m("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
m("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
m("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
m("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
m("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
m("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
m("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
m("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
m("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
m("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
m("\\imath", "\\html@mathml{\\@imath}{ı}");
m("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
m("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
m("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
m("⟦", "\\llbracket");
m("⟧", "\\rrbracket");
m("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
m("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
m("⦃", "\\lBrace");
m("⦄", "\\rBrace");
m("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
m("⦵", "\\minuso");
m("\\darr", "\\downarrow");
m("\\dArr", "\\Downarrow");
m("\\Darr", "\\Downarrow");
m("\\lang", "\\langle");
m("\\rang", "\\rangle");
m("\\uarr", "\\uparrow");
m("\\uArr", "\\Uparrow");
m("\\Uarr", "\\Uparrow");
m("\\N", "\\mathbb{N}");
m("\\R", "\\mathbb{R}");
m("\\Z", "\\mathbb{Z}");
m("\\alef", "\\aleph");
m("\\alefsym", "\\aleph");
m("\\Alpha", "\\mathrm{A}");
m("\\Beta", "\\mathrm{B}");
m("\\bull", "\\bullet");
m("\\Chi", "\\mathrm{X}");
m("\\clubs", "\\clubsuit");
m("\\cnums", "\\mathbb{C}");
m("\\Complex", "\\mathbb{C}");
m("\\Dagger", "\\ddagger");
m("\\diamonds", "\\diamondsuit");
m("\\empty", "\\emptyset");
m("\\Epsilon", "\\mathrm{E}");
m("\\Eta", "\\mathrm{H}");
m("\\exist", "\\exists");
m("\\harr", "\\leftrightarrow");
m("\\hArr", "\\Leftrightarrow");
m("\\Harr", "\\Leftrightarrow");
m("\\hearts", "\\heartsuit");
m("\\image", "\\Im");
m("\\infin", "\\infty");
m("\\Iota", "\\mathrm{I}");
m("\\isin", "\\in");
m("\\Kappa", "\\mathrm{K}");
m("\\larr", "\\leftarrow");
m("\\lArr", "\\Leftarrow");
m("\\Larr", "\\Leftarrow");
m("\\lrarr", "\\leftrightarrow");
m("\\lrArr", "\\Leftrightarrow");
m("\\Lrarr", "\\Leftrightarrow");
m("\\Mu", "\\mathrm{M}");
m("\\natnums", "\\mathbb{N}");
m("\\Nu", "\\mathrm{N}");
m("\\Omicron", "\\mathrm{O}");
m("\\plusmn", "\\pm");
m("\\rarr", "\\rightarrow");
m("\\rArr", "\\Rightarrow");
m("\\Rarr", "\\Rightarrow");
m("\\real", "\\Re");
m("\\reals", "\\mathbb{R}");
m("\\Reals", "\\mathbb{R}");
m("\\Rho", "\\mathrm{P}");
m("\\sdot", "\\cdot");
m("\\sect", "\\S");
m("\\spades", "\\spadesuit");
m("\\sub", "\\subset");
m("\\sube", "\\subseteq");
m("\\supe", "\\supseteq");
m("\\Tau", "\\mathrm{T}");
m("\\thetasym", "\\vartheta");
m("\\weierp", "\\wp");
m("\\Zeta", "\\mathrm{Z}");
m("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
m("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
m("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
m("\\bra", "\\mathinner{\\langle{#1}|}");
m("\\ket", "\\mathinner{|{#1}\\rangle}");
m("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
m("\\Bra", "\\left\\langle#1\\right|");
m("\\Ket", "\\left|#1\\right\\rangle");
var ma = /* @__PURE__ */ m$1((r5) => (e) => {
  var t = e.consumeArg().tokens, a = e.consumeArg().tokens, n = e.consumeArg().tokens, s = e.consumeArg().tokens, o = /* @__PURE__ */ e.macros.get("|"), h = /* @__PURE__ */ e.macros.get("\\|");
  e.macros.beginGroup();
  var c = /* @__PURE__ */ m$1((x) => (k) => {
    r5 && (k.macros.set("|", o), n.length && k.macros.set("\\|", h));
    var w = x;
    if (!x && n.length) {
      var A = /* @__PURE__ */ k.future();
      A.text === "|" && (k.popToken(), w = true);
    }
    return {
      tokens: w ? n : a,
      numArgs: 0
    };
  }, "midMacro");
  e.macros.set("|", /* @__PURE__ */ c(false)), n.length && e.macros.set("\\|", /* @__PURE__ */ c(true));
  var v = e.consumeArg().tokens, b = /* @__PURE__ */ e.expandTokens([
    ...s,
    ...v,
    ...t
  ]);
  return e.macros.endGroup(), {
    tokens: /* @__PURE__ */ b.reverse(),
    numArgs: 0
  };
}, "braketHelper");
m("\\bra@ket", /* @__PURE__ */ ma(false));
m("\\bra@set", /* @__PURE__ */ ma(true));
m("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
m("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
m("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
m("\\angln", "{\\angl n}");
m("\\blue", "\\textcolor{##6495ed}{#1}");
m("\\orange", "\\textcolor{##ffa500}{#1}");
m("\\pink", "\\textcolor{##ff00af}{#1}");
m("\\red", "\\textcolor{##df0030}{#1}");
m("\\green", "\\textcolor{##28ae7b}{#1}");
m("\\gray", "\\textcolor{gray}{#1}");
m("\\purple", "\\textcolor{##9d38bd}{#1}");
m("\\blueA", "\\textcolor{##ccfaff}{#1}");
m("\\blueB", "\\textcolor{##80f6ff}{#1}");
m("\\blueC", "\\textcolor{##63d9ea}{#1}");
m("\\blueD", "\\textcolor{##11accd}{#1}");
m("\\blueE", "\\textcolor{##0c7f99}{#1}");
m("\\tealA", "\\textcolor{##94fff5}{#1}");
m("\\tealB", "\\textcolor{##26edd5}{#1}");
m("\\tealC", "\\textcolor{##01d1c1}{#1}");
m("\\tealD", "\\textcolor{##01a995}{#1}");
m("\\tealE", "\\textcolor{##208170}{#1}");
m("\\greenA", "\\textcolor{##b6ffb0}{#1}");
m("\\greenB", "\\textcolor{##8af281}{#1}");
m("\\greenC", "\\textcolor{##74cf70}{#1}");
m("\\greenD", "\\textcolor{##1fab54}{#1}");
m("\\greenE", "\\textcolor{##0d923f}{#1}");
m("\\goldA", "\\textcolor{##ffd0a9}{#1}");
m("\\goldB", "\\textcolor{##ffbb71}{#1}");
m("\\goldC", "\\textcolor{##ff9c39}{#1}");
m("\\goldD", "\\textcolor{##e07d10}{#1}");
m("\\goldE", "\\textcolor{##a75a05}{#1}");
m("\\redA", "\\textcolor{##fca9a9}{#1}");
m("\\redB", "\\textcolor{##ff8482}{#1}");
m("\\redC", "\\textcolor{##f9685d}{#1}");
m("\\redD", "\\textcolor{##e84d39}{#1}");
m("\\redE", "\\textcolor{##bc2612}{#1}");
m("\\maroonA", "\\textcolor{##ffbde0}{#1}");
m("\\maroonB", "\\textcolor{##ff92c6}{#1}");
m("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
m("\\maroonD", "\\textcolor{##ca337c}{#1}");
m("\\maroonE", "\\textcolor{##9e034e}{#1}");
m("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
m("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
m("\\purpleC", "\\textcolor{##aa87ff}{#1}");
m("\\purpleD", "\\textcolor{##7854ab}{#1}");
m("\\purpleE", "\\textcolor{##543b78}{#1}");
m("\\mintA", "\\textcolor{##f5f9e8}{#1}");
m("\\mintB", "\\textcolor{##edf2df}{#1}");
m("\\mintC", "\\textcolor{##e0e5cc}{#1}");
m("\\grayA", "\\textcolor{##f6f7f7}{#1}");
m("\\grayB", "\\textcolor{##f0f1f2}{#1}");
m("\\grayC", "\\textcolor{##e3e5e6}{#1}");
m("\\grayD", "\\textcolor{##d6d8da}{#1}");
m("\\grayE", "\\textcolor{##babec2}{#1}");
m("\\grayF", "\\textcolor{##888d93}{#1}");
m("\\grayG", "\\textcolor{##626569}{#1}");
m("\\grayH", "\\textcolor{##3b3e40}{#1}");
m("\\grayI", "\\textcolor{##21242c}{#1}");
m("\\kaBlue", "\\textcolor{##314453}{#1}");
m("\\kaGreen", "\\textcolor{##71B307}{#1}");
var ca = {
  "^": true,
  _: true,
  "\\limits": true,
  "\\nolimits": true
}, wt = (_t2 = class {
  constructor(e, t, a) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new xt(l4, t.macros), this.mode = a, this.stack = [];
  }
  feed(e) {
    this.lexer = new Pe(e, this.settings);
  }
  switchMode(e) {
    this.mode = e;
  }
  beginGroup() {
    this.macros.beginGroup();
  }
  endGroup() {
    this.macros.endGroup();
  }
  endGroups() {
    this.macros.endGroups();
  }
  future() {
    return this.stack.length === 0 && this.pushToken(/* @__PURE__ */ this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  popToken() {
    return this.future(), this.stack.pop();
  }
  pushToken(e) {
    this.stack.push(e);
  }
  pushTokens(e) {
    this.stack.push(...e);
  }
  scanArgument(e) {
    var t, a, n;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[") return null;
      t = /* @__PURE__ */ this.popToken(), { tokens: n, end: a } = /* @__PURE__ */ this.consumeArg([
        "]"
      ]);
    } else ({ tokens: n, start: t, end: a } = /* @__PURE__ */ this.consumeArg());
    return this.pushToken(new v0("EOF", a.loc)), this.pushTokens(n), t.range(a, "");
  }
  consumeSpaces() {
    for (; ; ) {
      var e = /* @__PURE__ */ this.future();
      if (e.text === " ") this.stack.pop();
      else break;
    }
  }
  consumeArg(e) {
    var t = [], a = e && e.length > 0;
    a || this.consumeSpaces();
    var n = /* @__PURE__ */ this.future(), s, o = 0, h = 0;
    do {
      if (s = /* @__PURE__ */ this.popToken(), t.push(s), s.text === "{") ++o;
      else if (s.text === "}") {
        if (--o, o === -1) throw new z("Extra }", s);
      } else if (s.text === "EOF") throw new z("Unexpected end of input in a macro argument, expected '" + (e && a ? e[h] : "}") + "'", s);
      if (e && a) if ((o === 0 || o === 1 && e[h] === "{") && s.text === e[h]) {
        if (++h, h === e.length) {
          t.splice(-h, h);
          break;
        }
      } else h = 0;
    } while (o !== 0 || a);
    return n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: n,
      end: s
    };
  }
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1) throw new z("The length of delimiters doesn't match the number of args!");
      for (var a = t[0], n = 0; n < a.length; n++) {
        var s = /* @__PURE__ */ this.popToken();
        if (a[n] !== s.text) throw new z("Use of the macro doesn't match its definition", s);
      }
    }
    for (var o = [], h = 0; h < e; h++) o.push(this.consumeArg(t && t[h + 1]).tokens);
    return o;
  }
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand) throw new z("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  expandOnce(e) {
    var t = /* @__PURE__ */ this.popToken(), a = t.text, n = t.noexpand ? null : this._getExpansion(a);
    if (n == null || e && n.unexpandable) {
      if (e && n == null && a[0] === "\\" && !this.isDefined(a)) throw new z("Undefined control sequence: " + a);
      return this.pushToken(t), false;
    }
    this.countExpansion(1);
    var s = n.tokens, o = /* @__PURE__ */ this.consumeArgs(n.numArgs, n.delimiters);
    if (n.numArgs) {
      s = /* @__PURE__ */ s.slice();
      for (var h = s.length - 1; h >= 0; --h) {
        var c = s[h];
        if (c.text === "#") {
          if (h === 0) throw new z("Incomplete placeholder at end of macro body", c);
          if (c = s[--h], c.text === "#") s.splice(h + 1, 1);
          else if (/^[1-9]$/.test(c.text)) s.splice(h, 2, ...o[+c.text - 1]);
          else throw new z("Not a valid argument number", c);
        }
      }
    }
    return this.pushTokens(s), s.length;
  }
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  expandNextToken() {
    for (; ; ) if (this.expandOnce() === false) {
      var e = /* @__PURE__ */ this.stack.pop();
      return e.treatAsRelax && (e.text = "\\relax"), e;
    }
    throw new Error();
  }
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([
      new v0(e)
    ]) : void 0;
  }
  expandTokens(e) {
    var t = [], a = this.stack.length;
    for (this.pushTokens(e); this.stack.length > a; ) if (this.expandOnce(true) === false) {
      var n = /* @__PURE__ */ this.stack.pop();
      n.treatAsRelax && (n.noexpand = false, n.treatAsRelax = false), t.push(n);
    }
    return this.countExpansion(t.length), t;
  }
  expandMacroAsText(e) {
    var t = /* @__PURE__ */ this.expandMacro(e);
    return t && t.map((a) => a.text).join("");
  }
  _getExpansion(e) {
    var t = /* @__PURE__ */ this.macros.get(e);
    if (t == null) return t;
    if (e.length === 1) {
      var a = this.lexer.catcodes[e];
      if (a != null && a !== 13) return;
    }
    var n = typeof t == "function" ? t(this) : t;
    if (typeof n == "string") {
      var s = 0;
      if (n.indexOf("#") !== -1) for (var o = /* @__PURE__ */ n.replace(/##/g, ""); o.indexOf("#" + (s + 1)) !== -1; ) ++s;
      for (var h = new Pe(n, this.settings), c = [], v = /* @__PURE__ */ h.lex(); v.text !== "EOF"; ) c.push(v), v = /* @__PURE__ */ h.lex();
      c.reverse();
      var b = {
        tokens: c,
        numArgs: s
      };
      return b;
    }
    return n;
  }
  isDefined(e) {
    return this.macros.has(e) || P0.hasOwnProperty(e) || W.math.hasOwnProperty(e) || W.text.hasOwnProperty(e) || ca.hasOwnProperty(e);
  }
  isExpandable(e) {
    var t = /* @__PURE__ */ this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : P0.hasOwnProperty(e) && !P0[e].primitive;
  }
}, __20 = new WeakMap(), __privateAdd(_t2, __20, m$1(_t2, "MacroExpander")), _t2), br = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, qe = /* @__PURE__ */ Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), ut = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, yr = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
}, Ge = (_u = class {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new wt(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  expect(e, t) {
    if (t === void 0 && (t = true), this.fetch().text !== e) throw new z("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  consume() {
    this.nextToken = null;
  }
  fetch() {
    return this.nextToken == null && (this.nextToken = /* @__PURE__ */ this.gullet.expandNextToken()), this.nextToken;
  }
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = /* @__PURE__ */ this.parseExpression(false);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new v0("}")), this.gullet.pushTokens(e);
    var a = /* @__PURE__ */ this.parseExpression(false);
    return this.expect("}"), this.nextToken = t, a;
  }
  parseExpression(e, t) {
    for (var a = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var n = /* @__PURE__ */ this.fetch();
      if (_u.endOfExpression.indexOf(n.text) !== -1 || t && n.text === t || e && P0[n.text] && P0[n.text].infix) break;
      var s = /* @__PURE__ */ this.parseAtom(t);
      if (s) {
        if (s.type === "internal") continue;
      } else break;
      a.push(s);
    }
    return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
  }
  handleInfixNodes(e) {
    for (var t = -1, a, n = 0; n < e.length; n++) if (e[n].type === "infix") {
      if (t !== -1) throw new z("only one infix operator per group", e[n].token);
      t = n, a = e[n].replaceWith;
    }
    if (t !== -1 && a) {
      var s, o, h = /* @__PURE__ */ e.slice(0, t), c = /* @__PURE__ */ e.slice(t + 1);
      h.length === 1 && h[0].type === "ordgroup" ? s = h[0] : s = {
        type: "ordgroup",
        mode: this.mode,
        body: h
      }, c.length === 1 && c[0].type === "ordgroup" ? o = c[0] : o = {
        type: "ordgroup",
        mode: this.mode,
        body: c
      };
      var v;
      return a === "\\\\abovefrac" ? v = /* @__PURE__ */ this.callFunction(a, [
        s,
        e[t],
        o
      ], []) : v = /* @__PURE__ */ this.callFunction(a, [
        s,
        o
      ], []), [
        v
      ];
    } else return e;
  }
  handleSupSubscript(e) {
    var t = /* @__PURE__ */ this.fetch(), a = t.text;
    this.consume(), this.consumeSpaces();
    var n = /* @__PURE__ */ this.parseGroup(e);
    if (!n) throw new z("Expected group after '" + a + "'", t);
    return n;
  }
  formatUnsupportedCmd(e) {
    for (var t = [], a = 0; a < e.length; a++) t.push({
      type: "textord",
      mode: "text",
      text: e[a]
    });
    var n = {
      type: "text",
      mode: this.mode,
      body: t
    }, s = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [
        n
      ]
    };
    return s;
  }
  parseAtom(e) {
    var t = /* @__PURE__ */ this.parseGroup("atom", e);
    if (this.mode === "text") return t;
    for (var a, n; ; ) {
      this.consumeSpaces();
      var s = /* @__PURE__ */ this.fetch();
      if (s.text === "\\limits" || s.text === "\\nolimits") {
        if (t && t.type === "op") {
          var o = s.text === "\\limits";
          t.limits = o, t.alwaysHandleSupSub = true;
        } else if (t && t.type === "operatorname") t.alwaysHandleSupSub && (t.limits = s.text === "\\limits");
        else throw new z("Limit controls must follow a math operator", s);
        this.consume();
      } else if (s.text === "^") {
        if (a) throw new z("Double superscript", s);
        a = /* @__PURE__ */ this.handleSupSubscript("superscript");
      } else if (s.text === "_") {
        if (n) throw new z("Double subscript", s);
        n = /* @__PURE__ */ this.handleSupSubscript("subscript");
      } else if (s.text === "'") {
        if (a) throw new z("Double superscript", s);
        var h = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, c = [
          h
        ];
        for (this.consume(); this.fetch().text === "'"; ) c.push(h), this.consume();
        this.fetch().text === "^" && c.push(/* @__PURE__ */ this.handleSupSubscript("superscript")), a = {
          type: "ordgroup",
          mode: this.mode,
          body: c
        };
      } else if (qe[s.text]) {
        var v = /* @__PURE__ */ br.test(s.text), b = [];
        for (b.push(new v0(qe[s.text])), this.consume(); ; ) {
          var x = this.fetch().text;
          if (!qe[x] || br.test(x) !== v) break;
          b.unshift(new v0(qe[x])), this.consume();
        }
        var k = /* @__PURE__ */ this.subparse(b);
        v ? n = {
          type: "ordgroup",
          mode: "math",
          body: k
        } : a = {
          type: "ordgroup",
          mode: "math",
          body: k
        };
      } else break;
    }
    return a || n ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: a,
      sub: n
    } : t;
  }
  parseFunction(e, t) {
    var a = /* @__PURE__ */ this.fetch(), n = a.text, s = P0[n];
    if (!s) return null;
    if (this.consume(), t && t !== "atom" && !s.allowedInArgument) throw new z("Got function '" + n + "' with no arguments" + (t ? " as " + t : ""), a);
    if (this.mode === "text" && !s.allowedInText) throw new z("Can't use function '" + n + "' in text mode", a);
    if (this.mode === "math" && s.allowedInMath === false) throw new z("Can't use function '" + n + "' in math mode", a);
    var { args: o, optArgs: h } = this.parseArguments(n, s);
    return this.callFunction(n, o, h, a, e);
  }
  callFunction(e, t, a, n, s) {
    var o = {
      funcName: e,
      parser: this,
      token: n,
      breakOnTokenText: s
    }, h = P0[e];
    if (h && h.handler) return h.handler(o, t, a);
    throw new z("No function handler for " + e);
  }
  parseArguments(e, t) {
    var a = t.numArgs + t.numOptionalArgs;
    if (a === 0) return {
      args: [],
      optArgs: []
    };
    for (var n = [], s = [], o = 0; o < a; o++) {
      var h = t.argTypes && t.argTypes[o], c = o < t.numOptionalArgs;
      (t.primitive && h == null || t.type === "sqrt" && o === 1 && s[0] == null) && (h = "primitive");
      var v = /* @__PURE__ */ this.parseGroupOfType("argument to '" + e + "'", h, c);
      if (c) s.push(v);
      else if (v != null) n.push(v);
      else throw new z("Null argument, please report this as a bug");
    }
    return {
      args: n,
      optArgs: s
    };
  }
  parseGroupOfType(e, t, a) {
    switch (t) {
      case "color":
        return this.parseColorGroup(a);
      case "size":
        return this.parseSizeGroup(a);
      case "url":
        return this.parseUrlGroup(a);
      case "math":
      case "text":
        return this.parseArgumentGroup(a, t);
      case "hbox": {
        var n = /* @__PURE__ */ this.parseArgumentGroup(a, "text");
        return n != null ? {
          type: "styling",
          mode: n.mode,
          body: [
            n
          ],
          style: "text"
        } : null;
      }
      case "raw": {
        var s = /* @__PURE__ */ this.parseStringGroup("raw", a);
        return s != null ? {
          type: "raw",
          mode: "text",
          string: s.text
        } : null;
      }
      case "primitive": {
        if (a) throw new z("A primitive argument cannot be optional");
        var o = /* @__PURE__ */ this.parseGroup(e);
        if (o == null) throw new z("Expected group as " + e, this.fetch());
        return o;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(a);
      default:
        throw new z("Unknown group type as " + e, this.fetch());
    }
  }
  consumeSpaces() {
    for (; this.fetch().text === " "; ) this.consume();
  }
  parseStringGroup(e, t) {
    var a = /* @__PURE__ */ this.gullet.scanArgument(t);
    if (a == null) return null;
    for (var n = "", s; (s = /* @__PURE__ */ this.fetch()).text !== "EOF"; ) n += s.text, this.consume();
    return this.consume(), a.text = n, a;
  }
  parseRegexGroup(e, t) {
    for (var a = /* @__PURE__ */ this.fetch(), n = a, s = "", o; (o = /* @__PURE__ */ this.fetch()).text !== "EOF" && e.test(s + o.text); ) n = o, s += n.text, this.consume();
    if (s === "") throw new z("Invalid " + t + ": '" + a.text + "'", a);
    return a.range(n, s);
  }
  parseColorGroup(e) {
    var t = /* @__PURE__ */ this.parseStringGroup("color", e);
    if (t == null) return null;
    var a = /* @__PURE__ */ /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!a) throw new z("Invalid color: '" + t.text + "'", t);
    var n = a[0];
    return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), {
      type: "color-token",
      mode: this.mode,
      color: n
    };
  }
  parseSizeGroup(e) {
    var t, a = false;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = /* @__PURE__ */ this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = /* @__PURE__ */ this.parseStringGroup("size", e), !t) return null;
    !e && t.text.length === 0 && (t.text = "0pt", a = true);
    var n = /* @__PURE__ */ /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!n) throw new z("Invalid size: '" + t.text + "'", t);
    var s = {
      number: +(n[1] + n[2]),
      unit: n[3]
    };
    if (!kr(s)) throw new z("Invalid unit: '" + s.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: s,
      isBlank: a
    };
  }
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = /* @__PURE__ */ this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null) return null;
    var a = /* @__PURE__ */ t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: a
    };
  }
  parseArgumentGroup(e, t) {
    var a = /* @__PURE__ */ this.gullet.scanArgument(e);
    if (a == null) return null;
    var n = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var s = /* @__PURE__ */ this.parseExpression(false, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var o = {
      type: "ordgroup",
      mode: this.mode,
      loc: a.loc,
      body: s
    };
    return t && this.switchMode(n), o;
  }
  parseGroup(e, t) {
    var a = /* @__PURE__ */ this.fetch(), n = a.text, s;
    if (n === "{" || n === "\\begingroup") {
      this.consume();
      var o = n === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var h = /* @__PURE__ */ this.parseExpression(false, o), c = /* @__PURE__ */ this.fetch();
      this.expect(o), this.gullet.endGroup(), s = {
        type: "ordgroup",
        mode: this.mode,
        loc: /* @__PURE__ */ c0.range(a, c),
        body: h,
        semisimple: n === "\\begingroup" || void 0
      };
    } else if (s = this.parseFunction(t, e) || this.parseSymbol(), s == null && n[0] === "\\" && !ca.hasOwnProperty(n)) {
      if (this.settings.throwOnError) throw new z("Undefined control sequence: " + n, a);
      s = /* @__PURE__ */ this.formatUnsupportedCmd(n), this.consume();
    }
    return s;
  }
  formLigatures(e) {
    for (var t = e.length - 1, a = 0; a < t; ++a) {
      var n = e[a], s = n.text;
      s === "-" && e[a + 1].text === "-" && (a + 1 < t && e[a + 2].text === "-" ? (e.splice(a, 3, {
        type: "textord",
        mode: "text",
        loc: /* @__PURE__ */ c0.range(n, e[a + 2]),
        text: "---"
      }), t -= 2) : (e.splice(a, 2, {
        type: "textord",
        mode: "text",
        loc: /* @__PURE__ */ c0.range(n, e[a + 1]),
        text: "--"
      }), t -= 1)), (s === "'" || s === "`") && e[a + 1].text === s && (e.splice(a, 2, {
        type: "textord",
        mode: "text",
        loc: /* @__PURE__ */ c0.range(n, e[a + 1]),
        text: s + s
      }), t -= 1);
    }
  }
  parseSymbol() {
    var e = /* @__PURE__ */ this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var a = /* @__PURE__ */ t.slice(5), n = a.charAt(0) === "*";
      if (n && (a = /* @__PURE__ */ a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1)) throw new z(`\\verb assertion failed --
                    please report what input caused this bug`);
      return a = /* @__PURE__ */ a.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: a,
        star: n
      };
    }
    yr.hasOwnProperty(t[0]) && !W[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = yr[t[0]] + t.slice(1));
    var s = /* @__PURE__ */ i4.exec(t);
    s && (t = /* @__PURE__ */ t.substring(0, s.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var o;
    if (W[this.mode][t]) {
      this.settings.strict && this.mode === "math" && dt.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var h = W[this.mode][t].group, c = /* @__PURE__ */ c0.range(e), v;
      if (Qa.hasOwnProperty(h)) {
        var b = h;
        v = {
          type: "atom",
          mode: this.mode,
          family: b,
          loc: c,
          text: t
        };
      } else v = {
        type: h,
        mode: this.mode,
        loc: c,
        text: t
      };
      o = v;
    } else if (t.charCodeAt(0) >= 128) this.settings.strict && (wr(/* @__PURE__ */ t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), o = {
      type: "textord",
      mode: "text",
      loc: /* @__PURE__ */ c0.range(e),
      text: t
    };
    else return null;
    if (this.consume(), s) for (var x = 0; x < s[0].length; x++) {
      var k = s[0][x];
      if (!ut[k]) throw new z("Unknown accent ' " + k + "'", e);
      var w = ut[k][this.mode] || ut[k].text;
      if (!w) throw new z("Accent " + k + " unsupported in " + this.mode + " mode", e);
      o = {
        type: "accent",
        mode: this.mode,
        loc: /* @__PURE__ */ c0.range(e),
        label: w,
        isStretchy: false,
        isShifty: true,
        base: o
      };
    }
    return o;
  }
}, __21 = new WeakMap(), __privateAdd(_u, __21, m$1(_u, "Parser")), _u);
Ge.endOfExpression = [
  "}",
  "\\endgroup",
  "\\end",
  "\\right",
  "&"
];
var Ft = /* @__PURE__ */ m$1(function(e, t) {
  if (!(typeof e == "string" || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
  var a = new Ge(e, t);
  delete a.gullet.macros.current["\\df@tag"];
  var n = /* @__PURE__ */ a.parse();
  if (delete a.gullet.macros.current["\\current@color"], delete a.gullet.macros.current["\\color"], a.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode) throw new z("\\tag works only in display equations");
    n = [
      {
        type: "tag",
        mode: "text",
        body: n,
        tag: /* @__PURE__ */ a.subparse([
          new v0("\\df@tag")
        ])
      }
    ];
  }
  return n;
}, "parseTree"), da = /* @__PURE__ */ m$1(function(e, t, a) {
  t.textContent = "";
  var n = /* @__PURE__ */ Lt(e, a).toNode();
  t.appendChild(n);
}, "render");
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), da = /* @__PURE__ */ m$1(function() {
  throw new z("KaTeX doesn't work in quirks mode.");
}, "render"));
var o4 = /* @__PURE__ */ m$1(function(e, t) {
  var a = /* @__PURE__ */ Lt(e, t).toMarkup();
  return a;
}, "renderToString"), u4 = /* @__PURE__ */ m$1(function(e, t) {
  var a = new me(t);
  return Ft(e, a);
}, "generateParseTree"), fa = /* @__PURE__ */ m$1(function(e, t, a) {
  if (a.throwOnError || !(e instanceof z)) throw e;
  var n = /* @__PURE__ */ y.makeSpan([
    "katex-error"
  ], [
    new h0(t)
  ]);
  return n.setAttribute("title", /* @__PURE__ */ e.toString()), n.setAttribute("style", "color:" + a.errorColor), n;
}, "renderError"), Lt = /* @__PURE__ */ m$1(function(e, t) {
  var a = new me(t);
  try {
    var n = /* @__PURE__ */ Ft(e, a);
    return x1(n, e, a);
  } catch (s) {
    return fa(s, e, a);
  }
}, "renderToDomTree"), h4 = /* @__PURE__ */ m$1(function(e, t) {
  var a = new me(t);
  try {
    var n = /* @__PURE__ */ Ft(e, a);
    return w1(n, e, a);
  } catch (s) {
    return fa(s, e, a);
  }
}, "renderToHTMLTree"), m4 = {
  version: "0.16.11",
  render: da,
  renderToString: o4,
  ParseError: z,
  SETTINGS_SCHEMA: Ne,
  __parse: u4,
  __renderToDomTree: Lt,
  __renderToHTMLTree: h4,
  __setFontMetrics: $a,
  __defineSymbol: i,
  __defineFunction: D,
  __defineMacro: m,
  __domTree: {
    Span: j0,
    Anchor: de,
    SymbolNode: h0,
    SvgNode: x0,
    PathNode: M0,
    LineNode: fe
  }
};
export {
  m4 as default
};
