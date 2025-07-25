import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var c0 = class r {
    static{
        m$1(this, "SourceLocation");
    }
    constructor(e, t, a){
        this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = a;
    }
    static range(e, t) {
        return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new r(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
    }
}, g0 = class r {
    static{
        m$1(this, "Token");
    }
    constructor(e, t){
        this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
    }
    range(e, t) {
        return new r(t, c0.range(this, e));
    }
}, z = class r {
    static{
        m$1(this, "ParseError");
    }
    constructor(e, t){
        this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
        var a = "KaTeX parse error: " + e, n, s, o = t && t.loc;
        if (o && o.start <= o.end) {
            var h = o.lexer.input;
            n = o.start, s = o.end, n === h.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
            var c = /*#__PURE__*/ h.slice(n, s).replace(/[^]/g, "$&\u0332"), v;
            n > 15 ? v = "\u2026" + h.slice(n - 15, n) : v = /*#__PURE__*/ h.slice(0, n);
            var b;
            s + 15 < h.length ? b = h.slice(s, s + 15) + "\u2026" : b = /*#__PURE__*/ h.slice(s), a += v + c + b;
        }
        var x = new Error(a);
        return x.name = "ParseError", x.__proto__ = r.prototype, x.position = n, n != null && s != null && (x.length = s - n), x.rawMessage = e, x;
    }
};
z.prototype.__proto__ = Error.prototype;
var ya = /*#__PURE__*/ m$1(function(e, t) {
    return e.indexOf(t) !== -1;
}, "contains"), xa = /*#__PURE__*/ m$1(function(e, t) {
    return e === void 0 ? t : e;
}, "deflt"), wa = /([A-Z])/g, ka = /*#__PURE__*/ m$1(function(e) {
    return e.replace(wa, "-$1").toLowerCase();
}, "hyphenate"), Sa = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&#x27;"
}, Ma = /[&><"']/g;
function za(r) {
    return String(r).replace(Ma, (e)=>Sa[e]);
}
m$1(za, "escape");
var wr = /*#__PURE__*/ m$1(function r(e) {
    return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, "getBaseElem"), Aa = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ wr(e);
    return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, "isCharacterBox"), Ta = /*#__PURE__*/ m$1(function(e) {
    if (!e) throw new Error("Expected non-null, but got " + String(e));
    return e;
}, "assert"), Ba = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
    return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, "protocolFromUrl"), R = {
    contains: ya,
    deflt: xa,
    escape: za,
    hyphenate: ka,
    getBaseElem: wr,
    isCharacterBox: Aa,
    protocolFromUrl: Ba
}, qe = {
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
        cliProcessor: /*#__PURE__*/ m$1((r)=>"#" + r, "cliProcessor")
    },
    macros: {
        type: "object",
        cli: "-m, --macro <def>",
        cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
        cliDefault: [],
        cliProcessor: /*#__PURE__*/ m$1((r, e)=>(e.push(r), e), "cliProcessor")
    },
    minRuleThickness: {
        type: "number",
        description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
        processor: /*#__PURE__*/ m$1((r)=>Math.max(0, r), "processor"),
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
        processor: /*#__PURE__*/ m$1((r)=>Math.max(0, r), "processor"),
        cli: "-s, --max-size <n>",
        cliProcessor: parseInt
    },
    maxExpand: {
        type: "number",
        default: 1e3,
        description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
        processor: /*#__PURE__*/ m$1((r)=>Math.max(0, r), "processor"),
        cli: "-e, --max-expand <n>",
        cliProcessor: /*#__PURE__*/ m$1((r)=>r === "Infinity" ? 1 / 0 : parseInt(r), "cliProcessor")
    },
    globalGroup: {
        type: "boolean",
        cli: false
    }
};
function Da(r) {
    if (r.default) return r.default;
    var e = r.type, t = Array.isArray(e) ? e[0] : e;
    if (typeof t != "string") return t.enum[0];
    switch(t){
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
m$1(Da, "getDefaultValue");
var me = class {
    static{
        m$1(this, "Settings");
    }
    constructor(e){
        this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
        for(var t in qe)if (qe.hasOwnProperty(t)) {
            var a = qe[t];
            this[t] = e[t] !== void 0 ? a.processor ? a.processor(e[t]) : e[t] : Da(a);
        }
    }
    reportNonstrict(e, t, a) {
        var n = this.strict;
        if (typeof n == "function" && (n = /*#__PURE__*/ n(e, t, a)), !(!n || n === "ignore")) {
            if (n === true || n === "error") throw new z("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), a);
            n === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]"));
        }
    }
    useStrictBehavior(e, t, a) {
        var n = this.strict;
        if (typeof n == "function") try {
            n = /*#__PURE__*/ n(e, t, a);
        } catch  {
            n = "error";
        }
        return !n || n === "ignore" ? false : n === true || n === "error" ? true : n === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]")), false);
    }
    isTrusted(e) {
        if (e.url && !e.protocol) {
            var t = /*#__PURE__*/ R.protocolFromUrl(e.url);
            if (t == null) return false;
            e.protocol = t;
        }
        var a = typeof this.trust == "function" ? this.trust(e) : this.trust;
        return !!a;
    }
}, k0 = class {
    static{
        m$1(this, "Style");
    }
    constructor(e, t, a){
        this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = a;
    }
    sup() {
        return S0[Ca[this.id]];
    }
    sub() {
        return S0[Na[this.id]];
    }
    fracNum() {
        return S0[qa[this.id]];
    }
    fracDen() {
        return S0[Ra[this.id]];
    }
    cramp() {
        return S0[Ea[this.id]];
    }
    text() {
        return S0[Ia[this.id]];
    }
    isTight() {
        return this.size >= 2;
    }
}, St = 0, Ee = 1, re = 2, q0 = 3, ce = 4, p0 = 5, ae = 6, s0 = 7, S0 = [
    new k0(St, 0, false),
    new k0(Ee, 0, true),
    new k0(re, 1, false),
    new k0(q0, 1, true),
    new k0(ce, 2, false),
    new k0(p0, 2, true),
    new k0(ae, 3, false),
    new k0(s0, 3, true)
], Ca = [
    ce,
    p0,
    ce,
    p0,
    ae,
    s0,
    ae,
    s0
], Na = [
    p0,
    p0,
    p0,
    p0,
    s0,
    s0,
    s0,
    s0
], qa = [
    re,
    q0,
    ce,
    p0,
    ae,
    s0,
    ae,
    s0
], Ra = [
    q0,
    q0,
    p0,
    p0,
    s0,
    s0,
    s0,
    s0
], Ea = [
    Ee,
    Ee,
    q0,
    q0,
    p0,
    p0,
    s0,
    s0
], Ia = [
    St,
    Ee,
    re,
    q0,
    re,
    q0,
    re,
    q0
], I = {
    DISPLAY: S0[St],
    TEXT: S0[re],
    SCRIPT: S0[ce],
    SCRIPTSCRIPT: S0[ae]
}, mt = [
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
function Oa(r) {
    for(var e = 0; e < mt.length; e++)for(var t = mt[e], a = 0; a < t.blocks.length; a++){
        var n = t.blocks[a];
        if (r >= n[0] && r <= n[1]) return t.name;
    }
    return null;
}
m$1(Oa, "scriptFromCodepoint");
var Re = [];
mt.forEach((r)=>r.blocks.forEach((e)=>Re.push(...e)));
function kr(r) {
    for(var e = 0; e < Re.length; e += 2)if (r >= Re[e] && r <= Re[e + 1]) return true;
    return false;
}
m$1(kr, "supportedCodepoint");
var te = 80, Fa = /*#__PURE__*/ m$1(function(e, t) {
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
}, "sqrtMain"), Ha = /*#__PURE__*/ m$1(function(e, t) {
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
}, "sqrtSize1"), La = /*#__PURE__*/ m$1(function(e, t) {
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
}, "sqrtSize2"), Pa = /*#__PURE__*/ m$1(function(e, t) {
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
}, "sqrtSize3"), Ga = /*#__PURE__*/ m$1(function(e, t) {
    return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, "sqrtSize4"), Va = /*#__PURE__*/ m$1(function(e) {
    var t = e / 2;
    return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, "phasePath"), Ua = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = a - 54 - t - e;
    return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, "sqrtTall"), Ya = /*#__PURE__*/ m$1(function(e, t, a) {
    t = 1e3 * t;
    var n = "";
    switch(e){
        case "sqrtMain":
            n = /*#__PURE__*/ Fa(t, te);
            break;
        case "sqrtSize1":
            n = /*#__PURE__*/ Ha(t, te);
            break;
        case "sqrtSize2":
            n = /*#__PURE__*/ La(t, te);
            break;
        case "sqrtSize3":
            n = /*#__PURE__*/ Pa(t, te);
            break;
        case "sqrtSize4":
            n = /*#__PURE__*/ Ga(t, te);
            break;
        case "sqrtTall":
            n = /*#__PURE__*/ Ua(t, te, a);
    }
    return n;
}, "sqrtPath"), Xa = /*#__PURE__*/ m$1(function(e, t) {
    switch(e){
        case "\u239C":
            return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
        case "\u2223":
            return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
        case "\u2225":
            return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
        case "\u239F":
            return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
        case "\u23A2":
            return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
        case "\u23A5":
            return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
        case "\u23AA":
            return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
        case "\u23D0":
            return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
        case "\u2016":
            return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
        default:
            return "";
    }
}, "innerPath"), Yt = {
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
}, $a = /*#__PURE__*/ m$1(function(e, t) {
    switch(e){
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
}, "tallDelim"), W0 = class {
    static{
        m$1(this, "DocumentFragment");
    }
    constructor(e){
        this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
    }
    hasClass(e) {
        return R.contains(this.classes, e);
    }
    toNode() {
        for(var e = /*#__PURE__*/ document.createDocumentFragment(), t = 0; t < this.children.length; t++)e.appendChild(/*#__PURE__*/ this.children[t].toNode());
        return e;
    }
    toMarkup() {
        for(var e = "", t = 0; t < this.children.length; t++)e += /*#__PURE__*/ this.children[t].toMarkup();
        return e;
    }
    toText() {
        var e = /*#__PURE__*/ m$1((t)=>t.toText(), "toText");
        return this.children.map(e).join("");
    }
}, M0 = {
    "AMS-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        65: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        66: [
            0,
            .68889,
            0,
            0,
            .66667
        ],
        67: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        68: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        69: [
            0,
            .68889,
            0,
            0,
            .66667
        ],
        70: [
            0,
            .68889,
            0,
            0,
            .61111
        ],
        71: [
            0,
            .68889,
            0,
            0,
            .77778
        ],
        72: [
            0,
            .68889,
            0,
            0,
            .77778
        ],
        73: [
            0,
            .68889,
            0,
            0,
            .38889
        ],
        74: [
            .16667,
            .68889,
            0,
            0,
            .5
        ],
        75: [
            0,
            .68889,
            0,
            0,
            .77778
        ],
        76: [
            0,
            .68889,
            0,
            0,
            .66667
        ],
        77: [
            0,
            .68889,
            0,
            0,
            .94445
        ],
        78: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        79: [
            .16667,
            .68889,
            0,
            0,
            .77778
        ],
        80: [
            0,
            .68889,
            0,
            0,
            .61111
        ],
        81: [
            .16667,
            .68889,
            0,
            0,
            .77778
        ],
        82: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        83: [
            0,
            .68889,
            0,
            0,
            .55556
        ],
        84: [
            0,
            .68889,
            0,
            0,
            .66667
        ],
        85: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        86: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        87: [
            0,
            .68889,
            0,
            0,
            1
        ],
        88: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        89: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        90: [
            0,
            .68889,
            0,
            0,
            .66667
        ],
        107: [
            0,
            .68889,
            0,
            0,
            .55556
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        165: [
            0,
            .675,
            .025,
            0,
            .75
        ],
        174: [
            .15559,
            .69224,
            0,
            0,
            .94666
        ],
        240: [
            0,
            .68889,
            0,
            0,
            .55556
        ],
        295: [
            0,
            .68889,
            0,
            0,
            .54028
        ],
        710: [
            0,
            .825,
            0,
            0,
            2.33334
        ],
        732: [
            0,
            .9,
            0,
            0,
            2.33334
        ],
        770: [
            0,
            .825,
            0,
            0,
            2.33334
        ],
        771: [
            0,
            .9,
            0,
            0,
            2.33334
        ],
        989: [
            .08167,
            .58167,
            0,
            0,
            .77778
        ],
        1008: [
            0,
            .43056,
            .04028,
            0,
            .66667
        ],
        8245: [
            0,
            .54986,
            0,
            0,
            .275
        ],
        8463: [
            0,
            .68889,
            0,
            0,
            .54028
        ],
        8487: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        8498: [
            0,
            .68889,
            0,
            0,
            .55556
        ],
        8502: [
            0,
            .68889,
            0,
            0,
            .66667
        ],
        8503: [
            0,
            .68889,
            0,
            0,
            .44445
        ],
        8504: [
            0,
            .68889,
            0,
            0,
            .66667
        ],
        8513: [
            0,
            .68889,
            0,
            0,
            .63889
        ],
        8592: [
            -0.03598,
            .46402,
            0,
            0,
            .5
        ],
        8594: [
            -0.03598,
            .46402,
            0,
            0,
            .5
        ],
        8602: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8603: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8606: [
            .01354,
            .52239,
            0,
            0,
            1
        ],
        8608: [
            .01354,
            .52239,
            0,
            0,
            1
        ],
        8610: [
            .01354,
            .52239,
            0,
            0,
            1.11111
        ],
        8611: [
            .01354,
            .52239,
            0,
            0,
            1.11111
        ],
        8619: [
            0,
            .54986,
            0,
            0,
            1
        ],
        8620: [
            0,
            .54986,
            0,
            0,
            1
        ],
        8621: [
            -0.13313,
            .37788,
            0,
            0,
            1.38889
        ],
        8622: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8624: [
            0,
            .69224,
            0,
            0,
            .5
        ],
        8625: [
            0,
            .69224,
            0,
            0,
            .5
        ],
        8630: [
            0,
            .43056,
            0,
            0,
            1
        ],
        8631: [
            0,
            .43056,
            0,
            0,
            1
        ],
        8634: [
            .08198,
            .58198,
            0,
            0,
            .77778
        ],
        8635: [
            .08198,
            .58198,
            0,
            0,
            .77778
        ],
        8638: [
            .19444,
            .69224,
            0,
            0,
            .41667
        ],
        8639: [
            .19444,
            .69224,
            0,
            0,
            .41667
        ],
        8642: [
            .19444,
            .69224,
            0,
            0,
            .41667
        ],
        8643: [
            .19444,
            .69224,
            0,
            0,
            .41667
        ],
        8644: [
            .1808,
            .675,
            0,
            0,
            1
        ],
        8646: [
            .1808,
            .675,
            0,
            0,
            1
        ],
        8647: [
            .1808,
            .675,
            0,
            0,
            1
        ],
        8648: [
            .19444,
            .69224,
            0,
            0,
            .83334
        ],
        8649: [
            .1808,
            .675,
            0,
            0,
            1
        ],
        8650: [
            .19444,
            .69224,
            0,
            0,
            .83334
        ],
        8651: [
            .01354,
            .52239,
            0,
            0,
            1
        ],
        8652: [
            .01354,
            .52239,
            0,
            0,
            1
        ],
        8653: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8654: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8655: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8666: [
            .13667,
            .63667,
            0,
            0,
            1
        ],
        8667: [
            .13667,
            .63667,
            0,
            0,
            1
        ],
        8669: [
            -0.13313,
            .37788,
            0,
            0,
            1
        ],
        8672: [
            -0.064,
            .437,
            0,
            0,
            1.334
        ],
        8674: [
            -0.064,
            .437,
            0,
            0,
            1.334
        ],
        8705: [
            0,
            .825,
            0,
            0,
            .5
        ],
        8708: [
            0,
            .68889,
            0,
            0,
            .55556
        ],
        8709: [
            .08167,
            .58167,
            0,
            0,
            .77778
        ],
        8717: [
            0,
            .43056,
            0,
            0,
            .42917
        ],
        8722: [
            -0.03598,
            .46402,
            0,
            0,
            .5
        ],
        8724: [
            .08198,
            .69224,
            0,
            0,
            .77778
        ],
        8726: [
            .08167,
            .58167,
            0,
            0,
            .77778
        ],
        8733: [
            0,
            .69224,
            0,
            0,
            .77778
        ],
        8736: [
            0,
            .69224,
            0,
            0,
            .72222
        ],
        8737: [
            0,
            .69224,
            0,
            0,
            .72222
        ],
        8738: [
            .03517,
            .52239,
            0,
            0,
            .72222
        ],
        8739: [
            .08167,
            .58167,
            0,
            0,
            .22222
        ],
        8740: [
            .25142,
            .74111,
            0,
            0,
            .27778
        ],
        8741: [
            .08167,
            .58167,
            0,
            0,
            .38889
        ],
        8742: [
            .25142,
            .74111,
            0,
            0,
            .5
        ],
        8756: [
            0,
            .69224,
            0,
            0,
            .66667
        ],
        8757: [
            0,
            .69224,
            0,
            0,
            .66667
        ],
        8764: [
            -0.13313,
            .36687,
            0,
            0,
            .77778
        ],
        8765: [
            -0.13313,
            .37788,
            0,
            0,
            .77778
        ],
        8769: [
            -0.13313,
            .36687,
            0,
            0,
            .77778
        ],
        8770: [
            -0.03625,
            .46375,
            0,
            0,
            .77778
        ],
        8774: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8776: [
            -0.01688,
            .48312,
            0,
            0,
            .77778
        ],
        8778: [
            .08167,
            .58167,
            0,
            0,
            .77778
        ],
        8782: [
            .06062,
            .54986,
            0,
            0,
            .77778
        ],
        8783: [
            .06062,
            .54986,
            0,
            0,
            .77778
        ],
        8785: [
            .08198,
            .58198,
            0,
            0,
            .77778
        ],
        8786: [
            .08198,
            .58198,
            0,
            0,
            .77778
        ],
        8787: [
            .08198,
            .58198,
            0,
            0,
            .77778
        ],
        8790: [
            0,
            .69224,
            0,
            0,
            .77778
        ],
        8791: [
            .22958,
            .72958,
            0,
            0,
            .77778
        ],
        8796: [
            .08198,
            .91667,
            0,
            0,
            .77778
        ],
        8806: [
            .25583,
            .75583,
            0,
            0,
            .77778
        ],
        8807: [
            .25583,
            .75583,
            0,
            0,
            .77778
        ],
        8808: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        8809: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        8812: [
            .25583,
            .75583,
            0,
            0,
            .5
        ],
        8814: [
            .20576,
            .70576,
            0,
            0,
            .77778
        ],
        8815: [
            .20576,
            .70576,
            0,
            0,
            .77778
        ],
        8816: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8817: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8818: [
            .22958,
            .72958,
            0,
            0,
            .77778
        ],
        8819: [
            .22958,
            .72958,
            0,
            0,
            .77778
        ],
        8822: [
            .1808,
            .675,
            0,
            0,
            .77778
        ],
        8823: [
            .1808,
            .675,
            0,
            0,
            .77778
        ],
        8828: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        8829: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        8830: [
            .22958,
            .72958,
            0,
            0,
            .77778
        ],
        8831: [
            .22958,
            .72958,
            0,
            0,
            .77778
        ],
        8832: [
            .20576,
            .70576,
            0,
            0,
            .77778
        ],
        8833: [
            .20576,
            .70576,
            0,
            0,
            .77778
        ],
        8840: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8841: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8842: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        8843: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        8847: [
            .03517,
            .54986,
            0,
            0,
            .77778
        ],
        8848: [
            .03517,
            .54986,
            0,
            0,
            .77778
        ],
        8858: [
            .08198,
            .58198,
            0,
            0,
            .77778
        ],
        8859: [
            .08198,
            .58198,
            0,
            0,
            .77778
        ],
        8861: [
            .08198,
            .58198,
            0,
            0,
            .77778
        ],
        8862: [
            0,
            .675,
            0,
            0,
            .77778
        ],
        8863: [
            0,
            .675,
            0,
            0,
            .77778
        ],
        8864: [
            0,
            .675,
            0,
            0,
            .77778
        ],
        8865: [
            0,
            .675,
            0,
            0,
            .77778
        ],
        8872: [
            0,
            .69224,
            0,
            0,
            .61111
        ],
        8873: [
            0,
            .69224,
            0,
            0,
            .72222
        ],
        8874: [
            0,
            .69224,
            0,
            0,
            .88889
        ],
        8876: [
            0,
            .68889,
            0,
            0,
            .61111
        ],
        8877: [
            0,
            .68889,
            0,
            0,
            .61111
        ],
        8878: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        8879: [
            0,
            .68889,
            0,
            0,
            .72222
        ],
        8882: [
            .03517,
            .54986,
            0,
            0,
            .77778
        ],
        8883: [
            .03517,
            .54986,
            0,
            0,
            .77778
        ],
        8884: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        8885: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        8888: [
            0,
            .54986,
            0,
            0,
            1.11111
        ],
        8890: [
            .19444,
            .43056,
            0,
            0,
            .55556
        ],
        8891: [
            .19444,
            .69224,
            0,
            0,
            .61111
        ],
        8892: [
            .19444,
            .69224,
            0,
            0,
            .61111
        ],
        8901: [
            0,
            .54986,
            0,
            0,
            .27778
        ],
        8903: [
            .08167,
            .58167,
            0,
            0,
            .77778
        ],
        8905: [
            .08167,
            .58167,
            0,
            0,
            .77778
        ],
        8906: [
            .08167,
            .58167,
            0,
            0,
            .77778
        ],
        8907: [
            0,
            .69224,
            0,
            0,
            .77778
        ],
        8908: [
            0,
            .69224,
            0,
            0,
            .77778
        ],
        8909: [
            -0.03598,
            .46402,
            0,
            0,
            .77778
        ],
        8910: [
            0,
            .54986,
            0,
            0,
            .76042
        ],
        8911: [
            0,
            .54986,
            0,
            0,
            .76042
        ],
        8912: [
            .03517,
            .54986,
            0,
            0,
            .77778
        ],
        8913: [
            .03517,
            .54986,
            0,
            0,
            .77778
        ],
        8914: [
            0,
            .54986,
            0,
            0,
            .66667
        ],
        8915: [
            0,
            .54986,
            0,
            0,
            .66667
        ],
        8916: [
            0,
            .69224,
            0,
            0,
            .66667
        ],
        8918: [
            .0391,
            .5391,
            0,
            0,
            .77778
        ],
        8919: [
            .0391,
            .5391,
            0,
            0,
            .77778
        ],
        8920: [
            .03517,
            .54986,
            0,
            0,
            1.33334
        ],
        8921: [
            .03517,
            .54986,
            0,
            0,
            1.33334
        ],
        8922: [
            .38569,
            .88569,
            0,
            0,
            .77778
        ],
        8923: [
            .38569,
            .88569,
            0,
            0,
            .77778
        ],
        8926: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        8927: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        8928: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8929: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8934: [
            .23222,
            .74111,
            0,
            0,
            .77778
        ],
        8935: [
            .23222,
            .74111,
            0,
            0,
            .77778
        ],
        8936: [
            .23222,
            .74111,
            0,
            0,
            .77778
        ],
        8937: [
            .23222,
            .74111,
            0,
            0,
            .77778
        ],
        8938: [
            .20576,
            .70576,
            0,
            0,
            .77778
        ],
        8939: [
            .20576,
            .70576,
            0,
            0,
            .77778
        ],
        8940: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8941: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        8994: [
            .19444,
            .69224,
            0,
            0,
            .77778
        ],
        8995: [
            .19444,
            .69224,
            0,
            0,
            .77778
        ],
        9416: [
            .15559,
            .69224,
            0,
            0,
            .90222
        ],
        9484: [
            0,
            .69224,
            0,
            0,
            .5
        ],
        9488: [
            0,
            .69224,
            0,
            0,
            .5
        ],
        9492: [
            0,
            .37788,
            0,
            0,
            .5
        ],
        9496: [
            0,
            .37788,
            0,
            0,
            .5
        ],
        9585: [
            .19444,
            .68889,
            0,
            0,
            .88889
        ],
        9586: [
            .19444,
            .74111,
            0,
            0,
            .88889
        ],
        9632: [
            0,
            .675,
            0,
            0,
            .77778
        ],
        9633: [
            0,
            .675,
            0,
            0,
            .77778
        ],
        9650: [
            0,
            .54986,
            0,
            0,
            .72222
        ],
        9651: [
            0,
            .54986,
            0,
            0,
            .72222
        ],
        9654: [
            .03517,
            .54986,
            0,
            0,
            .77778
        ],
        9660: [
            0,
            .54986,
            0,
            0,
            .72222
        ],
        9661: [
            0,
            .54986,
            0,
            0,
            .72222
        ],
        9664: [
            .03517,
            .54986,
            0,
            0,
            .77778
        ],
        9674: [
            .11111,
            .69224,
            0,
            0,
            .66667
        ],
        9733: [
            .19444,
            .69224,
            0,
            0,
            .94445
        ],
        10003: [
            0,
            .69224,
            0,
            0,
            .83334
        ],
        10016: [
            0,
            .69224,
            0,
            0,
            .83334
        ],
        10731: [
            .11111,
            .69224,
            0,
            0,
            .66667
        ],
        10846: [
            .19444,
            .75583,
            0,
            0,
            .61111
        ],
        10877: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        10878: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        10885: [
            .25583,
            .75583,
            0,
            0,
            .77778
        ],
        10886: [
            .25583,
            .75583,
            0,
            0,
            .77778
        ],
        10887: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        10888: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        10889: [
            .26167,
            .75726,
            0,
            0,
            .77778
        ],
        10890: [
            .26167,
            .75726,
            0,
            0,
            .77778
        ],
        10891: [
            .48256,
            .98256,
            0,
            0,
            .77778
        ],
        10892: [
            .48256,
            .98256,
            0,
            0,
            .77778
        ],
        10901: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        10902: [
            .13667,
            .63667,
            0,
            0,
            .77778
        ],
        10933: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        10934: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        10935: [
            .26167,
            .75726,
            0,
            0,
            .77778
        ],
        10936: [
            .26167,
            .75726,
            0,
            0,
            .77778
        ],
        10937: [
            .26167,
            .75726,
            0,
            0,
            .77778
        ],
        10938: [
            .26167,
            .75726,
            0,
            0,
            .77778
        ],
        10949: [
            .25583,
            .75583,
            0,
            0,
            .77778
        ],
        10950: [
            .25583,
            .75583,
            0,
            0,
            .77778
        ],
        10955: [
            .28481,
            .79383,
            0,
            0,
            .77778
        ],
        10956: [
            .28481,
            .79383,
            0,
            0,
            .77778
        ],
        57350: [
            .08167,
            .58167,
            0,
            0,
            .22222
        ],
        57351: [
            .08167,
            .58167,
            0,
            0,
            .38889
        ],
        57352: [
            .08167,
            .58167,
            0,
            0,
            .77778
        ],
        57353: [
            0,
            .43056,
            .04028,
            0,
            .66667
        ],
        57356: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        57357: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        57358: [
            .41951,
            .91951,
            0,
            0,
            .77778
        ],
        57359: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        57360: [
            .30274,
            .79383,
            0,
            0,
            .77778
        ],
        57361: [
            .41951,
            .91951,
            0,
            0,
            .77778
        ],
        57366: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        57367: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        57368: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        57369: [
            .25142,
            .75726,
            0,
            0,
            .77778
        ],
        57370: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        57371: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ]
    },
    "Caligraphic-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        65: [
            0,
            .68333,
            0,
            .19445,
            .79847
        ],
        66: [
            0,
            .68333,
            .03041,
            .13889,
            .65681
        ],
        67: [
            0,
            .68333,
            .05834,
            .13889,
            .52653
        ],
        68: [
            0,
            .68333,
            .02778,
            .08334,
            .77139
        ],
        69: [
            0,
            .68333,
            .08944,
            .11111,
            .52778
        ],
        70: [
            0,
            .68333,
            .09931,
            .11111,
            .71875
        ],
        71: [
            .09722,
            .68333,
            .0593,
            .11111,
            .59487
        ],
        72: [
            0,
            .68333,
            .00965,
            .11111,
            .84452
        ],
        73: [
            0,
            .68333,
            .07382,
            0,
            .54452
        ],
        74: [
            .09722,
            .68333,
            .18472,
            .16667,
            .67778
        ],
        75: [
            0,
            .68333,
            .01445,
            .05556,
            .76195
        ],
        76: [
            0,
            .68333,
            0,
            .13889,
            .68972
        ],
        77: [
            0,
            .68333,
            0,
            .13889,
            1.2009
        ],
        78: [
            0,
            .68333,
            .14736,
            .08334,
            .82049
        ],
        79: [
            0,
            .68333,
            .02778,
            .11111,
            .79611
        ],
        80: [
            0,
            .68333,
            .08222,
            .08334,
            .69556
        ],
        81: [
            .09722,
            .68333,
            0,
            .11111,
            .81667
        ],
        82: [
            0,
            .68333,
            0,
            .08334,
            .8475
        ],
        83: [
            0,
            .68333,
            .075,
            .13889,
            .60556
        ],
        84: [
            0,
            .68333,
            .25417,
            0,
            .54464
        ],
        85: [
            0,
            .68333,
            .09931,
            .08334,
            .62583
        ],
        86: [
            0,
            .68333,
            .08222,
            0,
            .61278
        ],
        87: [
            0,
            .68333,
            .08222,
            .08334,
            .98778
        ],
        88: [
            0,
            .68333,
            .14643,
            .13889,
            .7133
        ],
        89: [
            .09722,
            .68333,
            .08222,
            .08334,
            .66834
        ],
        90: [
            0,
            .68333,
            .07944,
            .13889,
            .72473
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ]
    },
    "Fraktur-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        33: [
            0,
            .69141,
            0,
            0,
            .29574
        ],
        34: [
            0,
            .69141,
            0,
            0,
            .21471
        ],
        38: [
            0,
            .69141,
            0,
            0,
            .73786
        ],
        39: [
            0,
            .69141,
            0,
            0,
            .21201
        ],
        40: [
            .24982,
            .74947,
            0,
            0,
            .38865
        ],
        41: [
            .24982,
            .74947,
            0,
            0,
            .38865
        ],
        42: [
            0,
            .62119,
            0,
            0,
            .27764
        ],
        43: [
            .08319,
            .58283,
            0,
            0,
            .75623
        ],
        44: [
            0,
            .10803,
            0,
            0,
            .27764
        ],
        45: [
            .08319,
            .58283,
            0,
            0,
            .75623
        ],
        46: [
            0,
            .10803,
            0,
            0,
            .27764
        ],
        47: [
            .24982,
            .74947,
            0,
            0,
            .50181
        ],
        48: [
            0,
            .47534,
            0,
            0,
            .50181
        ],
        49: [
            0,
            .47534,
            0,
            0,
            .50181
        ],
        50: [
            0,
            .47534,
            0,
            0,
            .50181
        ],
        51: [
            .18906,
            .47534,
            0,
            0,
            .50181
        ],
        52: [
            .18906,
            .47534,
            0,
            0,
            .50181
        ],
        53: [
            .18906,
            .47534,
            0,
            0,
            .50181
        ],
        54: [
            0,
            .69141,
            0,
            0,
            .50181
        ],
        55: [
            .18906,
            .47534,
            0,
            0,
            .50181
        ],
        56: [
            0,
            .69141,
            0,
            0,
            .50181
        ],
        57: [
            .18906,
            .47534,
            0,
            0,
            .50181
        ],
        58: [
            0,
            .47534,
            0,
            0,
            .21606
        ],
        59: [
            .12604,
            .47534,
            0,
            0,
            .21606
        ],
        61: [
            -0.13099,
            .36866,
            0,
            0,
            .75623
        ],
        63: [
            0,
            .69141,
            0,
            0,
            .36245
        ],
        65: [
            0,
            .69141,
            0,
            0,
            .7176
        ],
        66: [
            0,
            .69141,
            0,
            0,
            .88397
        ],
        67: [
            0,
            .69141,
            0,
            0,
            .61254
        ],
        68: [
            0,
            .69141,
            0,
            0,
            .83158
        ],
        69: [
            0,
            .69141,
            0,
            0,
            .66278
        ],
        70: [
            .12604,
            .69141,
            0,
            0,
            .61119
        ],
        71: [
            0,
            .69141,
            0,
            0,
            .78539
        ],
        72: [
            .06302,
            .69141,
            0,
            0,
            .7203
        ],
        73: [
            0,
            .69141,
            0,
            0,
            .55448
        ],
        74: [
            .12604,
            .69141,
            0,
            0,
            .55231
        ],
        75: [
            0,
            .69141,
            0,
            0,
            .66845
        ],
        76: [
            0,
            .69141,
            0,
            0,
            .66602
        ],
        77: [
            0,
            .69141,
            0,
            0,
            1.04953
        ],
        78: [
            0,
            .69141,
            0,
            0,
            .83212
        ],
        79: [
            0,
            .69141,
            0,
            0,
            .82699
        ],
        80: [
            .18906,
            .69141,
            0,
            0,
            .82753
        ],
        81: [
            .03781,
            .69141,
            0,
            0,
            .82699
        ],
        82: [
            0,
            .69141,
            0,
            0,
            .82807
        ],
        83: [
            0,
            .69141,
            0,
            0,
            .82861
        ],
        84: [
            0,
            .69141,
            0,
            0,
            .66899
        ],
        85: [
            0,
            .69141,
            0,
            0,
            .64576
        ],
        86: [
            0,
            .69141,
            0,
            0,
            .83131
        ],
        87: [
            0,
            .69141,
            0,
            0,
            1.04602
        ],
        88: [
            0,
            .69141,
            0,
            0,
            .71922
        ],
        89: [
            .18906,
            .69141,
            0,
            0,
            .83293
        ],
        90: [
            .12604,
            .69141,
            0,
            0,
            .60201
        ],
        91: [
            .24982,
            .74947,
            0,
            0,
            .27764
        ],
        93: [
            .24982,
            .74947,
            0,
            0,
            .27764
        ],
        94: [
            0,
            .69141,
            0,
            0,
            .49965
        ],
        97: [
            0,
            .47534,
            0,
            0,
            .50046
        ],
        98: [
            0,
            .69141,
            0,
            0,
            .51315
        ],
        99: [
            0,
            .47534,
            0,
            0,
            .38946
        ],
        100: [
            0,
            .62119,
            0,
            0,
            .49857
        ],
        101: [
            0,
            .47534,
            0,
            0,
            .40053
        ],
        102: [
            .18906,
            .69141,
            0,
            0,
            .32626
        ],
        103: [
            .18906,
            .47534,
            0,
            0,
            .5037
        ],
        104: [
            .18906,
            .69141,
            0,
            0,
            .52126
        ],
        105: [
            0,
            .69141,
            0,
            0,
            .27899
        ],
        106: [
            0,
            .69141,
            0,
            0,
            .28088
        ],
        107: [
            0,
            .69141,
            0,
            0,
            .38946
        ],
        108: [
            0,
            .69141,
            0,
            0,
            .27953
        ],
        109: [
            0,
            .47534,
            0,
            0,
            .76676
        ],
        110: [
            0,
            .47534,
            0,
            0,
            .52666
        ],
        111: [
            0,
            .47534,
            0,
            0,
            .48885
        ],
        112: [
            .18906,
            .52396,
            0,
            0,
            .50046
        ],
        113: [
            .18906,
            .47534,
            0,
            0,
            .48912
        ],
        114: [
            0,
            .47534,
            0,
            0,
            .38919
        ],
        115: [
            0,
            .47534,
            0,
            0,
            .44266
        ],
        116: [
            0,
            .62119,
            0,
            0,
            .33301
        ],
        117: [
            0,
            .47534,
            0,
            0,
            .5172
        ],
        118: [
            0,
            .52396,
            0,
            0,
            .5118
        ],
        119: [
            0,
            .52396,
            0,
            0,
            .77351
        ],
        120: [
            .18906,
            .47534,
            0,
            0,
            .38865
        ],
        121: [
            .18906,
            .47534,
            0,
            0,
            .49884
        ],
        122: [
            .18906,
            .47534,
            0,
            0,
            .39054
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        8216: [
            0,
            .69141,
            0,
            0,
            .21471
        ],
        8217: [
            0,
            .69141,
            0,
            0,
            .21471
        ],
        58112: [
            0,
            .62119,
            0,
            0,
            .49749
        ],
        58113: [
            0,
            .62119,
            0,
            0,
            .4983
        ],
        58114: [
            .18906,
            .69141,
            0,
            0,
            .33328
        ],
        58115: [
            .18906,
            .69141,
            0,
            0,
            .32923
        ],
        58116: [
            .18906,
            .47534,
            0,
            0,
            .50343
        ],
        58117: [
            0,
            .69141,
            0,
            0,
            .33301
        ],
        58118: [
            0,
            .62119,
            0,
            0,
            .33409
        ],
        58119: [
            0,
            .47534,
            0,
            0,
            .50073
        ]
    },
    "Main-Bold": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        33: [
            0,
            .69444,
            0,
            0,
            .35
        ],
        34: [
            0,
            .69444,
            0,
            0,
            .60278
        ],
        35: [
            .19444,
            .69444,
            0,
            0,
            .95833
        ],
        36: [
            .05556,
            .75,
            0,
            0,
            .575
        ],
        37: [
            .05556,
            .75,
            0,
            0,
            .95833
        ],
        38: [
            0,
            .69444,
            0,
            0,
            .89444
        ],
        39: [
            0,
            .69444,
            0,
            0,
            .31944
        ],
        40: [
            .25,
            .75,
            0,
            0,
            .44722
        ],
        41: [
            .25,
            .75,
            0,
            0,
            .44722
        ],
        42: [
            0,
            .75,
            0,
            0,
            .575
        ],
        43: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        44: [
            .19444,
            .15556,
            0,
            0,
            .31944
        ],
        45: [
            0,
            .44444,
            0,
            0,
            .38333
        ],
        46: [
            0,
            .15556,
            0,
            0,
            .31944
        ],
        47: [
            .25,
            .75,
            0,
            0,
            .575
        ],
        48: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        49: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        50: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        51: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        52: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        53: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        54: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        55: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        56: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        57: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        58: [
            0,
            .44444,
            0,
            0,
            .31944
        ],
        59: [
            .19444,
            .44444,
            0,
            0,
            .31944
        ],
        60: [
            .08556,
            .58556,
            0,
            0,
            .89444
        ],
        61: [
            -0.10889,
            .39111,
            0,
            0,
            .89444
        ],
        62: [
            .08556,
            .58556,
            0,
            0,
            .89444
        ],
        63: [
            0,
            .69444,
            0,
            0,
            .54305
        ],
        64: [
            0,
            .69444,
            0,
            0,
            .89444
        ],
        65: [
            0,
            .68611,
            0,
            0,
            .86944
        ],
        66: [
            0,
            .68611,
            0,
            0,
            .81805
        ],
        67: [
            0,
            .68611,
            0,
            0,
            .83055
        ],
        68: [
            0,
            .68611,
            0,
            0,
            .88194
        ],
        69: [
            0,
            .68611,
            0,
            0,
            .75555
        ],
        70: [
            0,
            .68611,
            0,
            0,
            .72361
        ],
        71: [
            0,
            .68611,
            0,
            0,
            .90416
        ],
        72: [
            0,
            .68611,
            0,
            0,
            .9
        ],
        73: [
            0,
            .68611,
            0,
            0,
            .43611
        ],
        74: [
            0,
            .68611,
            0,
            0,
            .59444
        ],
        75: [
            0,
            .68611,
            0,
            0,
            .90138
        ],
        76: [
            0,
            .68611,
            0,
            0,
            .69166
        ],
        77: [
            0,
            .68611,
            0,
            0,
            1.09166
        ],
        78: [
            0,
            .68611,
            0,
            0,
            .9
        ],
        79: [
            0,
            .68611,
            0,
            0,
            .86388
        ],
        80: [
            0,
            .68611,
            0,
            0,
            .78611
        ],
        81: [
            .19444,
            .68611,
            0,
            0,
            .86388
        ],
        82: [
            0,
            .68611,
            0,
            0,
            .8625
        ],
        83: [
            0,
            .68611,
            0,
            0,
            .63889
        ],
        84: [
            0,
            .68611,
            0,
            0,
            .8
        ],
        85: [
            0,
            .68611,
            0,
            0,
            .88472
        ],
        86: [
            0,
            .68611,
            .01597,
            0,
            .86944
        ],
        87: [
            0,
            .68611,
            .01597,
            0,
            1.18888
        ],
        88: [
            0,
            .68611,
            0,
            0,
            .86944
        ],
        89: [
            0,
            .68611,
            .02875,
            0,
            .86944
        ],
        90: [
            0,
            .68611,
            0,
            0,
            .70277
        ],
        91: [
            .25,
            .75,
            0,
            0,
            .31944
        ],
        92: [
            .25,
            .75,
            0,
            0,
            .575
        ],
        93: [
            .25,
            .75,
            0,
            0,
            .31944
        ],
        94: [
            0,
            .69444,
            0,
            0,
            .575
        ],
        95: [
            .31,
            .13444,
            .03194,
            0,
            .575
        ],
        97: [
            0,
            .44444,
            0,
            0,
            .55902
        ],
        98: [
            0,
            .69444,
            0,
            0,
            .63889
        ],
        99: [
            0,
            .44444,
            0,
            0,
            .51111
        ],
        100: [
            0,
            .69444,
            0,
            0,
            .63889
        ],
        101: [
            0,
            .44444,
            0,
            0,
            .52708
        ],
        102: [
            0,
            .69444,
            .10903,
            0,
            .35139
        ],
        103: [
            .19444,
            .44444,
            .01597,
            0,
            .575
        ],
        104: [
            0,
            .69444,
            0,
            0,
            .63889
        ],
        105: [
            0,
            .69444,
            0,
            0,
            .31944
        ],
        106: [
            .19444,
            .69444,
            0,
            0,
            .35139
        ],
        107: [
            0,
            .69444,
            0,
            0,
            .60694
        ],
        108: [
            0,
            .69444,
            0,
            0,
            .31944
        ],
        109: [
            0,
            .44444,
            0,
            0,
            .95833
        ],
        110: [
            0,
            .44444,
            0,
            0,
            .63889
        ],
        111: [
            0,
            .44444,
            0,
            0,
            .575
        ],
        112: [
            .19444,
            .44444,
            0,
            0,
            .63889
        ],
        113: [
            .19444,
            .44444,
            0,
            0,
            .60694
        ],
        114: [
            0,
            .44444,
            0,
            0,
            .47361
        ],
        115: [
            0,
            .44444,
            0,
            0,
            .45361
        ],
        116: [
            0,
            .63492,
            0,
            0,
            .44722
        ],
        117: [
            0,
            .44444,
            0,
            0,
            .63889
        ],
        118: [
            0,
            .44444,
            .01597,
            0,
            .60694
        ],
        119: [
            0,
            .44444,
            .01597,
            0,
            .83055
        ],
        120: [
            0,
            .44444,
            0,
            0,
            .60694
        ],
        121: [
            .19444,
            .44444,
            .01597,
            0,
            .60694
        ],
        122: [
            0,
            .44444,
            0,
            0,
            .51111
        ],
        123: [
            .25,
            .75,
            0,
            0,
            .575
        ],
        124: [
            .25,
            .75,
            0,
            0,
            .31944
        ],
        125: [
            .25,
            .75,
            0,
            0,
            .575
        ],
        126: [
            .35,
            .34444,
            0,
            0,
            .575
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        163: [
            0,
            .69444,
            0,
            0,
            .86853
        ],
        168: [
            0,
            .69444,
            0,
            0,
            .575
        ],
        172: [
            0,
            .44444,
            0,
            0,
            .76666
        ],
        176: [
            0,
            .69444,
            0,
            0,
            .86944
        ],
        177: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        184: [
            .17014,
            0,
            0,
            0,
            .51111
        ],
        198: [
            0,
            .68611,
            0,
            0,
            1.04166
        ],
        215: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        216: [
            .04861,
            .73472,
            0,
            0,
            .89444
        ],
        223: [
            0,
            .69444,
            0,
            0,
            .59722
        ],
        230: [
            0,
            .44444,
            0,
            0,
            .83055
        ],
        247: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        248: [
            .09722,
            .54167,
            0,
            0,
            .575
        ],
        305: [
            0,
            .44444,
            0,
            0,
            .31944
        ],
        338: [
            0,
            .68611,
            0,
            0,
            1.16944
        ],
        339: [
            0,
            .44444,
            0,
            0,
            .89444
        ],
        567: [
            .19444,
            .44444,
            0,
            0,
            .35139
        ],
        710: [
            0,
            .69444,
            0,
            0,
            .575
        ],
        711: [
            0,
            .63194,
            0,
            0,
            .575
        ],
        713: [
            0,
            .59611,
            0,
            0,
            .575
        ],
        714: [
            0,
            .69444,
            0,
            0,
            .575
        ],
        715: [
            0,
            .69444,
            0,
            0,
            .575
        ],
        728: [
            0,
            .69444,
            0,
            0,
            .575
        ],
        729: [
            0,
            .69444,
            0,
            0,
            .31944
        ],
        730: [
            0,
            .69444,
            0,
            0,
            .86944
        ],
        732: [
            0,
            .69444,
            0,
            0,
            .575
        ],
        733: [
            0,
            .69444,
            0,
            0,
            .575
        ],
        915: [
            0,
            .68611,
            0,
            0,
            .69166
        ],
        916: [
            0,
            .68611,
            0,
            0,
            .95833
        ],
        920: [
            0,
            .68611,
            0,
            0,
            .89444
        ],
        923: [
            0,
            .68611,
            0,
            0,
            .80555
        ],
        926: [
            0,
            .68611,
            0,
            0,
            .76666
        ],
        928: [
            0,
            .68611,
            0,
            0,
            .9
        ],
        931: [
            0,
            .68611,
            0,
            0,
            .83055
        ],
        933: [
            0,
            .68611,
            0,
            0,
            .89444
        ],
        934: [
            0,
            .68611,
            0,
            0,
            .83055
        ],
        936: [
            0,
            .68611,
            0,
            0,
            .89444
        ],
        937: [
            0,
            .68611,
            0,
            0,
            .83055
        ],
        8211: [
            0,
            .44444,
            .03194,
            0,
            .575
        ],
        8212: [
            0,
            .44444,
            .03194,
            0,
            1.14999
        ],
        8216: [
            0,
            .69444,
            0,
            0,
            .31944
        ],
        8217: [
            0,
            .69444,
            0,
            0,
            .31944
        ],
        8220: [
            0,
            .69444,
            0,
            0,
            .60278
        ],
        8221: [
            0,
            .69444,
            0,
            0,
            .60278
        ],
        8224: [
            .19444,
            .69444,
            0,
            0,
            .51111
        ],
        8225: [
            .19444,
            .69444,
            0,
            0,
            .51111
        ],
        8242: [
            0,
            .55556,
            0,
            0,
            .34444
        ],
        8407: [
            0,
            .72444,
            .15486,
            0,
            .575
        ],
        8463: [
            0,
            .69444,
            0,
            0,
            .66759
        ],
        8465: [
            0,
            .69444,
            0,
            0,
            .83055
        ],
        8467: [
            0,
            .69444,
            0,
            0,
            .47361
        ],
        8472: [
            .19444,
            .44444,
            0,
            0,
            .74027
        ],
        8476: [
            0,
            .69444,
            0,
            0,
            .83055
        ],
        8501: [
            0,
            .69444,
            0,
            0,
            .70277
        ],
        8592: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8593: [
            .19444,
            .69444,
            0,
            0,
            .575
        ],
        8594: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8595: [
            .19444,
            .69444,
            0,
            0,
            .575
        ],
        8596: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8597: [
            .25,
            .75,
            0,
            0,
            .575
        ],
        8598: [
            .19444,
            .69444,
            0,
            0,
            1.14999
        ],
        8599: [
            .19444,
            .69444,
            0,
            0,
            1.14999
        ],
        8600: [
            .19444,
            .69444,
            0,
            0,
            1.14999
        ],
        8601: [
            .19444,
            .69444,
            0,
            0,
            1.14999
        ],
        8636: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8637: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8640: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8641: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8656: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8657: [
            .19444,
            .69444,
            0,
            0,
            .70277
        ],
        8658: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8659: [
            .19444,
            .69444,
            0,
            0,
            .70277
        ],
        8660: [
            -0.10889,
            .39111,
            0,
            0,
            1.14999
        ],
        8661: [
            .25,
            .75,
            0,
            0,
            .70277
        ],
        8704: [
            0,
            .69444,
            0,
            0,
            .63889
        ],
        8706: [
            0,
            .69444,
            .06389,
            0,
            .62847
        ],
        8707: [
            0,
            .69444,
            0,
            0,
            .63889
        ],
        8709: [
            .05556,
            .75,
            0,
            0,
            .575
        ],
        8711: [
            0,
            .68611,
            0,
            0,
            .95833
        ],
        8712: [
            .08556,
            .58556,
            0,
            0,
            .76666
        ],
        8715: [
            .08556,
            .58556,
            0,
            0,
            .76666
        ],
        8722: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        8723: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        8725: [
            .25,
            .75,
            0,
            0,
            .575
        ],
        8726: [
            .25,
            .75,
            0,
            0,
            .575
        ],
        8727: [
            -0.02778,
            .47222,
            0,
            0,
            .575
        ],
        8728: [
            -0.02639,
            .47361,
            0,
            0,
            .575
        ],
        8729: [
            -0.02639,
            .47361,
            0,
            0,
            .575
        ],
        8730: [
            .18,
            .82,
            0,
            0,
            .95833
        ],
        8733: [
            0,
            .44444,
            0,
            0,
            .89444
        ],
        8734: [
            0,
            .44444,
            0,
            0,
            1.14999
        ],
        8736: [
            0,
            .69224,
            0,
            0,
            .72222
        ],
        8739: [
            .25,
            .75,
            0,
            0,
            .31944
        ],
        8741: [
            .25,
            .75,
            0,
            0,
            .575
        ],
        8743: [
            0,
            .55556,
            0,
            0,
            .76666
        ],
        8744: [
            0,
            .55556,
            0,
            0,
            .76666
        ],
        8745: [
            0,
            .55556,
            0,
            0,
            .76666
        ],
        8746: [
            0,
            .55556,
            0,
            0,
            .76666
        ],
        8747: [
            .19444,
            .69444,
            .12778,
            0,
            .56875
        ],
        8764: [
            -0.10889,
            .39111,
            0,
            0,
            .89444
        ],
        8768: [
            .19444,
            .69444,
            0,
            0,
            .31944
        ],
        8771: [
            .00222,
            .50222,
            0,
            0,
            .89444
        ],
        8773: [
            .027,
            .638,
            0,
            0,
            .894
        ],
        8776: [
            .02444,
            .52444,
            0,
            0,
            .89444
        ],
        8781: [
            .00222,
            .50222,
            0,
            0,
            .89444
        ],
        8801: [
            .00222,
            .50222,
            0,
            0,
            .89444
        ],
        8804: [
            .19667,
            .69667,
            0,
            0,
            .89444
        ],
        8805: [
            .19667,
            .69667,
            0,
            0,
            .89444
        ],
        8810: [
            .08556,
            .58556,
            0,
            0,
            1.14999
        ],
        8811: [
            .08556,
            .58556,
            0,
            0,
            1.14999
        ],
        8826: [
            .08556,
            .58556,
            0,
            0,
            .89444
        ],
        8827: [
            .08556,
            .58556,
            0,
            0,
            .89444
        ],
        8834: [
            .08556,
            .58556,
            0,
            0,
            .89444
        ],
        8835: [
            .08556,
            .58556,
            0,
            0,
            .89444
        ],
        8838: [
            .19667,
            .69667,
            0,
            0,
            .89444
        ],
        8839: [
            .19667,
            .69667,
            0,
            0,
            .89444
        ],
        8846: [
            0,
            .55556,
            0,
            0,
            .76666
        ],
        8849: [
            .19667,
            .69667,
            0,
            0,
            .89444
        ],
        8850: [
            .19667,
            .69667,
            0,
            0,
            .89444
        ],
        8851: [
            0,
            .55556,
            0,
            0,
            .76666
        ],
        8852: [
            0,
            .55556,
            0,
            0,
            .76666
        ],
        8853: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        8854: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        8855: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        8856: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        8857: [
            .13333,
            .63333,
            0,
            0,
            .89444
        ],
        8866: [
            0,
            .69444,
            0,
            0,
            .70277
        ],
        8867: [
            0,
            .69444,
            0,
            0,
            .70277
        ],
        8868: [
            0,
            .69444,
            0,
            0,
            .89444
        ],
        8869: [
            0,
            .69444,
            0,
            0,
            .89444
        ],
        8900: [
            -0.02639,
            .47361,
            0,
            0,
            .575
        ],
        8901: [
            -0.02639,
            .47361,
            0,
            0,
            .31944
        ],
        8902: [
            -0.02778,
            .47222,
            0,
            0,
            .575
        ],
        8968: [
            .25,
            .75,
            0,
            0,
            .51111
        ],
        8969: [
            .25,
            .75,
            0,
            0,
            .51111
        ],
        8970: [
            .25,
            .75,
            0,
            0,
            .51111
        ],
        8971: [
            .25,
            .75,
            0,
            0,
            .51111
        ],
        8994: [
            -0.13889,
            .36111,
            0,
            0,
            1.14999
        ],
        8995: [
            -0.13889,
            .36111,
            0,
            0,
            1.14999
        ],
        9651: [
            .19444,
            .69444,
            0,
            0,
            1.02222
        ],
        9657: [
            -0.02778,
            .47222,
            0,
            0,
            .575
        ],
        9661: [
            .19444,
            .69444,
            0,
            0,
            1.02222
        ],
        9667: [
            -0.02778,
            .47222,
            0,
            0,
            .575
        ],
        9711: [
            .19444,
            .69444,
            0,
            0,
            1.14999
        ],
        9824: [
            .12963,
            .69444,
            0,
            0,
            .89444
        ],
        9825: [
            .12963,
            .69444,
            0,
            0,
            .89444
        ],
        9826: [
            .12963,
            .69444,
            0,
            0,
            .89444
        ],
        9827: [
            .12963,
            .69444,
            0,
            0,
            .89444
        ],
        9837: [
            0,
            .75,
            0,
            0,
            .44722
        ],
        9838: [
            .19444,
            .69444,
            0,
            0,
            .44722
        ],
        9839: [
            .19444,
            .69444,
            0,
            0,
            .44722
        ],
        10216: [
            .25,
            .75,
            0,
            0,
            .44722
        ],
        10217: [
            .25,
            .75,
            0,
            0,
            .44722
        ],
        10815: [
            0,
            .68611,
            0,
            0,
            .9
        ],
        10927: [
            .19667,
            .69667,
            0,
            0,
            .89444
        ],
        10928: [
            .19667,
            .69667,
            0,
            0,
            .89444
        ],
        57376: [
            .19444,
            .69444,
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
            .25
        ],
        33: [
            0,
            .69444,
            .11417,
            0,
            .38611
        ],
        34: [
            0,
            .69444,
            .07939,
            0,
            .62055
        ],
        35: [
            .19444,
            .69444,
            .06833,
            0,
            .94444
        ],
        37: [
            .05556,
            .75,
            .12861,
            0,
            .94444
        ],
        38: [
            0,
            .69444,
            .08528,
            0,
            .88555
        ],
        39: [
            0,
            .69444,
            .12945,
            0,
            .35555
        ],
        40: [
            .25,
            .75,
            .15806,
            0,
            .47333
        ],
        41: [
            .25,
            .75,
            .03306,
            0,
            .47333
        ],
        42: [
            0,
            .75,
            .14333,
            0,
            .59111
        ],
        43: [
            .10333,
            .60333,
            .03306,
            0,
            .88555
        ],
        44: [
            .19444,
            .14722,
            0,
            0,
            .35555
        ],
        45: [
            0,
            .44444,
            .02611,
            0,
            .41444
        ],
        46: [
            0,
            .14722,
            0,
            0,
            .35555
        ],
        47: [
            .25,
            .75,
            .15806,
            0,
            .59111
        ],
        48: [
            0,
            .64444,
            .13167,
            0,
            .59111
        ],
        49: [
            0,
            .64444,
            .13167,
            0,
            .59111
        ],
        50: [
            0,
            .64444,
            .13167,
            0,
            .59111
        ],
        51: [
            0,
            .64444,
            .13167,
            0,
            .59111
        ],
        52: [
            .19444,
            .64444,
            .13167,
            0,
            .59111
        ],
        53: [
            0,
            .64444,
            .13167,
            0,
            .59111
        ],
        54: [
            0,
            .64444,
            .13167,
            0,
            .59111
        ],
        55: [
            .19444,
            .64444,
            .13167,
            0,
            .59111
        ],
        56: [
            0,
            .64444,
            .13167,
            0,
            .59111
        ],
        57: [
            0,
            .64444,
            .13167,
            0,
            .59111
        ],
        58: [
            0,
            .44444,
            .06695,
            0,
            .35555
        ],
        59: [
            .19444,
            .44444,
            .06695,
            0,
            .35555
        ],
        61: [
            -0.10889,
            .39111,
            .06833,
            0,
            .88555
        ],
        63: [
            0,
            .69444,
            .11472,
            0,
            .59111
        ],
        64: [
            0,
            .69444,
            .09208,
            0,
            .88555
        ],
        65: [
            0,
            .68611,
            0,
            0,
            .86555
        ],
        66: [
            0,
            .68611,
            .0992,
            0,
            .81666
        ],
        67: [
            0,
            .68611,
            .14208,
            0,
            .82666
        ],
        68: [
            0,
            .68611,
            .09062,
            0,
            .87555
        ],
        69: [
            0,
            .68611,
            .11431,
            0,
            .75666
        ],
        70: [
            0,
            .68611,
            .12903,
            0,
            .72722
        ],
        71: [
            0,
            .68611,
            .07347,
            0,
            .89527
        ],
        72: [
            0,
            .68611,
            .17208,
            0,
            .8961
        ],
        73: [
            0,
            .68611,
            .15681,
            0,
            .47166
        ],
        74: [
            0,
            .68611,
            .145,
            0,
            .61055
        ],
        75: [
            0,
            .68611,
            .14208,
            0,
            .89499
        ],
        76: [
            0,
            .68611,
            0,
            0,
            .69777
        ],
        77: [
            0,
            .68611,
            .17208,
            0,
            1.07277
        ],
        78: [
            0,
            .68611,
            .17208,
            0,
            .8961
        ],
        79: [
            0,
            .68611,
            .09062,
            0,
            .85499
        ],
        80: [
            0,
            .68611,
            .0992,
            0,
            .78721
        ],
        81: [
            .19444,
            .68611,
            .09062,
            0,
            .85499
        ],
        82: [
            0,
            .68611,
            .02559,
            0,
            .85944
        ],
        83: [
            0,
            .68611,
            .11264,
            0,
            .64999
        ],
        84: [
            0,
            .68611,
            .12903,
            0,
            .7961
        ],
        85: [
            0,
            .68611,
            .17208,
            0,
            .88083
        ],
        86: [
            0,
            .68611,
            .18625,
            0,
            .86555
        ],
        87: [
            0,
            .68611,
            .18625,
            0,
            1.15999
        ],
        88: [
            0,
            .68611,
            .15681,
            0,
            .86555
        ],
        89: [
            0,
            .68611,
            .19803,
            0,
            .86555
        ],
        90: [
            0,
            .68611,
            .14208,
            0,
            .70888
        ],
        91: [
            .25,
            .75,
            .1875,
            0,
            .35611
        ],
        93: [
            .25,
            .75,
            .09972,
            0,
            .35611
        ],
        94: [
            0,
            .69444,
            .06709,
            0,
            .59111
        ],
        95: [
            .31,
            .13444,
            .09811,
            0,
            .59111
        ],
        97: [
            0,
            .44444,
            .09426,
            0,
            .59111
        ],
        98: [
            0,
            .69444,
            .07861,
            0,
            .53222
        ],
        99: [
            0,
            .44444,
            .05222,
            0,
            .53222
        ],
        100: [
            0,
            .69444,
            .10861,
            0,
            .59111
        ],
        101: [
            0,
            .44444,
            .085,
            0,
            .53222
        ],
        102: [
            .19444,
            .69444,
            .21778,
            0,
            .4
        ],
        103: [
            .19444,
            .44444,
            .105,
            0,
            .53222
        ],
        104: [
            0,
            .69444,
            .09426,
            0,
            .59111
        ],
        105: [
            0,
            .69326,
            .11387,
            0,
            .35555
        ],
        106: [
            .19444,
            .69326,
            .1672,
            0,
            .35555
        ],
        107: [
            0,
            .69444,
            .11111,
            0,
            .53222
        ],
        108: [
            0,
            .69444,
            .10861,
            0,
            .29666
        ],
        109: [
            0,
            .44444,
            .09426,
            0,
            .94444
        ],
        110: [
            0,
            .44444,
            .09426,
            0,
            .64999
        ],
        111: [
            0,
            .44444,
            .07861,
            0,
            .59111
        ],
        112: [
            .19444,
            .44444,
            .07861,
            0,
            .59111
        ],
        113: [
            .19444,
            .44444,
            .105,
            0,
            .53222
        ],
        114: [
            0,
            .44444,
            .11111,
            0,
            .50167
        ],
        115: [
            0,
            .44444,
            .08167,
            0,
            .48694
        ],
        116: [
            0,
            .63492,
            .09639,
            0,
            .385
        ],
        117: [
            0,
            .44444,
            .09426,
            0,
            .62055
        ],
        118: [
            0,
            .44444,
            .11111,
            0,
            .53222
        ],
        119: [
            0,
            .44444,
            .11111,
            0,
            .76777
        ],
        120: [
            0,
            .44444,
            .12583,
            0,
            .56055
        ],
        121: [
            .19444,
            .44444,
            .105,
            0,
            .56166
        ],
        122: [
            0,
            .44444,
            .13889,
            0,
            .49055
        ],
        126: [
            .35,
            .34444,
            .11472,
            0,
            .59111
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        168: [
            0,
            .69444,
            .11473,
            0,
            .59111
        ],
        176: [
            0,
            .69444,
            0,
            0,
            .94888
        ],
        184: [
            .17014,
            0,
            0,
            0,
            .53222
        ],
        198: [
            0,
            .68611,
            .11431,
            0,
            1.02277
        ],
        216: [
            .04861,
            .73472,
            .09062,
            0,
            .88555
        ],
        223: [
            .19444,
            .69444,
            .09736,
            0,
            .665
        ],
        230: [
            0,
            .44444,
            .085,
            0,
            .82666
        ],
        248: [
            .09722,
            .54167,
            .09458,
            0,
            .59111
        ],
        305: [
            0,
            .44444,
            .09426,
            0,
            .35555
        ],
        338: [
            0,
            .68611,
            .11431,
            0,
            1.14054
        ],
        339: [
            0,
            .44444,
            .085,
            0,
            .82666
        ],
        567: [
            .19444,
            .44444,
            .04611,
            0,
            .385
        ],
        710: [
            0,
            .69444,
            .06709,
            0,
            .59111
        ],
        711: [
            0,
            .63194,
            .08271,
            0,
            .59111
        ],
        713: [
            0,
            .59444,
            .10444,
            0,
            .59111
        ],
        714: [
            0,
            .69444,
            .08528,
            0,
            .59111
        ],
        715: [
            0,
            .69444,
            0,
            0,
            .59111
        ],
        728: [
            0,
            .69444,
            .10333,
            0,
            .59111
        ],
        729: [
            0,
            .69444,
            .12945,
            0,
            .35555
        ],
        730: [
            0,
            .69444,
            0,
            0,
            .94888
        ],
        732: [
            0,
            .69444,
            .11472,
            0,
            .59111
        ],
        733: [
            0,
            .69444,
            .11472,
            0,
            .59111
        ],
        915: [
            0,
            .68611,
            .12903,
            0,
            .69777
        ],
        916: [
            0,
            .68611,
            0,
            0,
            .94444
        ],
        920: [
            0,
            .68611,
            .09062,
            0,
            .88555
        ],
        923: [
            0,
            .68611,
            0,
            0,
            .80666
        ],
        926: [
            0,
            .68611,
            .15092,
            0,
            .76777
        ],
        928: [
            0,
            .68611,
            .17208,
            0,
            .8961
        ],
        931: [
            0,
            .68611,
            .11431,
            0,
            .82666
        ],
        933: [
            0,
            .68611,
            .10778,
            0,
            .88555
        ],
        934: [
            0,
            .68611,
            .05632,
            0,
            .82666
        ],
        936: [
            0,
            .68611,
            .10778,
            0,
            .88555
        ],
        937: [
            0,
            .68611,
            .0992,
            0,
            .82666
        ],
        8211: [
            0,
            .44444,
            .09811,
            0,
            .59111
        ],
        8212: [
            0,
            .44444,
            .09811,
            0,
            1.18221
        ],
        8216: [
            0,
            .69444,
            .12945,
            0,
            .35555
        ],
        8217: [
            0,
            .69444,
            .12945,
            0,
            .35555
        ],
        8220: [
            0,
            .69444,
            .16772,
            0,
            .62055
        ],
        8221: [
            0,
            .69444,
            .07939,
            0,
            .62055
        ]
    },
    "Main-Italic": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        33: [
            0,
            .69444,
            .12417,
            0,
            .30667
        ],
        34: [
            0,
            .69444,
            .06961,
            0,
            .51444
        ],
        35: [
            .19444,
            .69444,
            .06616,
            0,
            .81777
        ],
        37: [
            .05556,
            .75,
            .13639,
            0,
            .81777
        ],
        38: [
            0,
            .69444,
            .09694,
            0,
            .76666
        ],
        39: [
            0,
            .69444,
            .12417,
            0,
            .30667
        ],
        40: [
            .25,
            .75,
            .16194,
            0,
            .40889
        ],
        41: [
            .25,
            .75,
            .03694,
            0,
            .40889
        ],
        42: [
            0,
            .75,
            .14917,
            0,
            .51111
        ],
        43: [
            .05667,
            .56167,
            .03694,
            0,
            .76666
        ],
        44: [
            .19444,
            .10556,
            0,
            0,
            .30667
        ],
        45: [
            0,
            .43056,
            .02826,
            0,
            .35778
        ],
        46: [
            0,
            .10556,
            0,
            0,
            .30667
        ],
        47: [
            .25,
            .75,
            .16194,
            0,
            .51111
        ],
        48: [
            0,
            .64444,
            .13556,
            0,
            .51111
        ],
        49: [
            0,
            .64444,
            .13556,
            0,
            .51111
        ],
        50: [
            0,
            .64444,
            .13556,
            0,
            .51111
        ],
        51: [
            0,
            .64444,
            .13556,
            0,
            .51111
        ],
        52: [
            .19444,
            .64444,
            .13556,
            0,
            .51111
        ],
        53: [
            0,
            .64444,
            .13556,
            0,
            .51111
        ],
        54: [
            0,
            .64444,
            .13556,
            0,
            .51111
        ],
        55: [
            .19444,
            .64444,
            .13556,
            0,
            .51111
        ],
        56: [
            0,
            .64444,
            .13556,
            0,
            .51111
        ],
        57: [
            0,
            .64444,
            .13556,
            0,
            .51111
        ],
        58: [
            0,
            .43056,
            .0582,
            0,
            .30667
        ],
        59: [
            .19444,
            .43056,
            .0582,
            0,
            .30667
        ],
        61: [
            -0.13313,
            .36687,
            .06616,
            0,
            .76666
        ],
        63: [
            0,
            .69444,
            .1225,
            0,
            .51111
        ],
        64: [
            0,
            .69444,
            .09597,
            0,
            .76666
        ],
        65: [
            0,
            .68333,
            0,
            0,
            .74333
        ],
        66: [
            0,
            .68333,
            .10257,
            0,
            .70389
        ],
        67: [
            0,
            .68333,
            .14528,
            0,
            .71555
        ],
        68: [
            0,
            .68333,
            .09403,
            0,
            .755
        ],
        69: [
            0,
            .68333,
            .12028,
            0,
            .67833
        ],
        70: [
            0,
            .68333,
            .13305,
            0,
            .65277
        ],
        71: [
            0,
            .68333,
            .08722,
            0,
            .77361
        ],
        72: [
            0,
            .68333,
            .16389,
            0,
            .74333
        ],
        73: [
            0,
            .68333,
            .15806,
            0,
            .38555
        ],
        74: [
            0,
            .68333,
            .14028,
            0,
            .525
        ],
        75: [
            0,
            .68333,
            .14528,
            0,
            .76888
        ],
        76: [
            0,
            .68333,
            0,
            0,
            .62722
        ],
        77: [
            0,
            .68333,
            .16389,
            0,
            .89666
        ],
        78: [
            0,
            .68333,
            .16389,
            0,
            .74333
        ],
        79: [
            0,
            .68333,
            .09403,
            0,
            .76666
        ],
        80: [
            0,
            .68333,
            .10257,
            0,
            .67833
        ],
        81: [
            .19444,
            .68333,
            .09403,
            0,
            .76666
        ],
        82: [
            0,
            .68333,
            .03868,
            0,
            .72944
        ],
        83: [
            0,
            .68333,
            .11972,
            0,
            .56222
        ],
        84: [
            0,
            .68333,
            .13305,
            0,
            .71555
        ],
        85: [
            0,
            .68333,
            .16389,
            0,
            .74333
        ],
        86: [
            0,
            .68333,
            .18361,
            0,
            .74333
        ],
        87: [
            0,
            .68333,
            .18361,
            0,
            .99888
        ],
        88: [
            0,
            .68333,
            .15806,
            0,
            .74333
        ],
        89: [
            0,
            .68333,
            .19383,
            0,
            .74333
        ],
        90: [
            0,
            .68333,
            .14528,
            0,
            .61333
        ],
        91: [
            .25,
            .75,
            .1875,
            0,
            .30667
        ],
        93: [
            .25,
            .75,
            .10528,
            0,
            .30667
        ],
        94: [
            0,
            .69444,
            .06646,
            0,
            .51111
        ],
        95: [
            .31,
            .12056,
            .09208,
            0,
            .51111
        ],
        97: [
            0,
            .43056,
            .07671,
            0,
            .51111
        ],
        98: [
            0,
            .69444,
            .06312,
            0,
            .46
        ],
        99: [
            0,
            .43056,
            .05653,
            0,
            .46
        ],
        100: [
            0,
            .69444,
            .10333,
            0,
            .51111
        ],
        101: [
            0,
            .43056,
            .07514,
            0,
            .46
        ],
        102: [
            .19444,
            .69444,
            .21194,
            0,
            .30667
        ],
        103: [
            .19444,
            .43056,
            .08847,
            0,
            .46
        ],
        104: [
            0,
            .69444,
            .07671,
            0,
            .51111
        ],
        105: [
            0,
            .65536,
            .1019,
            0,
            .30667
        ],
        106: [
            .19444,
            .65536,
            .14467,
            0,
            .30667
        ],
        107: [
            0,
            .69444,
            .10764,
            0,
            .46
        ],
        108: [
            0,
            .69444,
            .10333,
            0,
            .25555
        ],
        109: [
            0,
            .43056,
            .07671,
            0,
            .81777
        ],
        110: [
            0,
            .43056,
            .07671,
            0,
            .56222
        ],
        111: [
            0,
            .43056,
            .06312,
            0,
            .51111
        ],
        112: [
            .19444,
            .43056,
            .06312,
            0,
            .51111
        ],
        113: [
            .19444,
            .43056,
            .08847,
            0,
            .46
        ],
        114: [
            0,
            .43056,
            .10764,
            0,
            .42166
        ],
        115: [
            0,
            .43056,
            .08208,
            0,
            .40889
        ],
        116: [
            0,
            .61508,
            .09486,
            0,
            .33222
        ],
        117: [
            0,
            .43056,
            .07671,
            0,
            .53666
        ],
        118: [
            0,
            .43056,
            .10764,
            0,
            .46
        ],
        119: [
            0,
            .43056,
            .10764,
            0,
            .66444
        ],
        120: [
            0,
            .43056,
            .12042,
            0,
            .46389
        ],
        121: [
            .19444,
            .43056,
            .08847,
            0,
            .48555
        ],
        122: [
            0,
            .43056,
            .12292,
            0,
            .40889
        ],
        126: [
            .35,
            .31786,
            .11585,
            0,
            .51111
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        168: [
            0,
            .66786,
            .10474,
            0,
            .51111
        ],
        176: [
            0,
            .69444,
            0,
            0,
            .83129
        ],
        184: [
            .17014,
            0,
            0,
            0,
            .46
        ],
        198: [
            0,
            .68333,
            .12028,
            0,
            .88277
        ],
        216: [
            .04861,
            .73194,
            .09403,
            0,
            .76666
        ],
        223: [
            .19444,
            .69444,
            .10514,
            0,
            .53666
        ],
        230: [
            0,
            .43056,
            .07514,
            0,
            .71555
        ],
        248: [
            .09722,
            .52778,
            .09194,
            0,
            .51111
        ],
        338: [
            0,
            .68333,
            .12028,
            0,
            .98499
        ],
        339: [
            0,
            .43056,
            .07514,
            0,
            .71555
        ],
        710: [
            0,
            .69444,
            .06646,
            0,
            .51111
        ],
        711: [
            0,
            .62847,
            .08295,
            0,
            .51111
        ],
        713: [
            0,
            .56167,
            .10333,
            0,
            .51111
        ],
        714: [
            0,
            .69444,
            .09694,
            0,
            .51111
        ],
        715: [
            0,
            .69444,
            0,
            0,
            .51111
        ],
        728: [
            0,
            .69444,
            .10806,
            0,
            .51111
        ],
        729: [
            0,
            .66786,
            .11752,
            0,
            .30667
        ],
        730: [
            0,
            .69444,
            0,
            0,
            .83129
        ],
        732: [
            0,
            .66786,
            .11585,
            0,
            .51111
        ],
        733: [
            0,
            .69444,
            .1225,
            0,
            .51111
        ],
        915: [
            0,
            .68333,
            .13305,
            0,
            .62722
        ],
        916: [
            0,
            .68333,
            0,
            0,
            .81777
        ],
        920: [
            0,
            .68333,
            .09403,
            0,
            .76666
        ],
        923: [
            0,
            .68333,
            0,
            0,
            .69222
        ],
        926: [
            0,
            .68333,
            .15294,
            0,
            .66444
        ],
        928: [
            0,
            .68333,
            .16389,
            0,
            .74333
        ],
        931: [
            0,
            .68333,
            .12028,
            0,
            .71555
        ],
        933: [
            0,
            .68333,
            .11111,
            0,
            .76666
        ],
        934: [
            0,
            .68333,
            .05986,
            0,
            .71555
        ],
        936: [
            0,
            .68333,
            .11111,
            0,
            .76666
        ],
        937: [
            0,
            .68333,
            .10257,
            0,
            .71555
        ],
        8211: [
            0,
            .43056,
            .09208,
            0,
            .51111
        ],
        8212: [
            0,
            .43056,
            .09208,
            0,
            1.02222
        ],
        8216: [
            0,
            .69444,
            .12417,
            0,
            .30667
        ],
        8217: [
            0,
            .69444,
            .12417,
            0,
            .30667
        ],
        8220: [
            0,
            .69444,
            .1685,
            0,
            .51444
        ],
        8221: [
            0,
            .69444,
            .06961,
            0,
            .51444
        ],
        8463: [
            0,
            .68889,
            0,
            0,
            .54028
        ]
    },
    "Main-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        33: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        34: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        35: [
            .19444,
            .69444,
            0,
            0,
            .83334
        ],
        36: [
            .05556,
            .75,
            0,
            0,
            .5
        ],
        37: [
            .05556,
            .75,
            0,
            0,
            .83334
        ],
        38: [
            0,
            .69444,
            0,
            0,
            .77778
        ],
        39: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        40: [
            .25,
            .75,
            0,
            0,
            .38889
        ],
        41: [
            .25,
            .75,
            0,
            0,
            .38889
        ],
        42: [
            0,
            .75,
            0,
            0,
            .5
        ],
        43: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        44: [
            .19444,
            .10556,
            0,
            0,
            .27778
        ],
        45: [
            0,
            .43056,
            0,
            0,
            .33333
        ],
        46: [
            0,
            .10556,
            0,
            0,
            .27778
        ],
        47: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        48: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        49: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        50: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        51: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        52: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        53: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        54: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        55: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        56: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        57: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        58: [
            0,
            .43056,
            0,
            0,
            .27778
        ],
        59: [
            .19444,
            .43056,
            0,
            0,
            .27778
        ],
        60: [
            .0391,
            .5391,
            0,
            0,
            .77778
        ],
        61: [
            -0.13313,
            .36687,
            0,
            0,
            .77778
        ],
        62: [
            .0391,
            .5391,
            0,
            0,
            .77778
        ],
        63: [
            0,
            .69444,
            0,
            0,
            .47222
        ],
        64: [
            0,
            .69444,
            0,
            0,
            .77778
        ],
        65: [
            0,
            .68333,
            0,
            0,
            .75
        ],
        66: [
            0,
            .68333,
            0,
            0,
            .70834
        ],
        67: [
            0,
            .68333,
            0,
            0,
            .72222
        ],
        68: [
            0,
            .68333,
            0,
            0,
            .76389
        ],
        69: [
            0,
            .68333,
            0,
            0,
            .68056
        ],
        70: [
            0,
            .68333,
            0,
            0,
            .65278
        ],
        71: [
            0,
            .68333,
            0,
            0,
            .78472
        ],
        72: [
            0,
            .68333,
            0,
            0,
            .75
        ],
        73: [
            0,
            .68333,
            0,
            0,
            .36111
        ],
        74: [
            0,
            .68333,
            0,
            0,
            .51389
        ],
        75: [
            0,
            .68333,
            0,
            0,
            .77778
        ],
        76: [
            0,
            .68333,
            0,
            0,
            .625
        ],
        77: [
            0,
            .68333,
            0,
            0,
            .91667
        ],
        78: [
            0,
            .68333,
            0,
            0,
            .75
        ],
        79: [
            0,
            .68333,
            0,
            0,
            .77778
        ],
        80: [
            0,
            .68333,
            0,
            0,
            .68056
        ],
        81: [
            .19444,
            .68333,
            0,
            0,
            .77778
        ],
        82: [
            0,
            .68333,
            0,
            0,
            .73611
        ],
        83: [
            0,
            .68333,
            0,
            0,
            .55556
        ],
        84: [
            0,
            .68333,
            0,
            0,
            .72222
        ],
        85: [
            0,
            .68333,
            0,
            0,
            .75
        ],
        86: [
            0,
            .68333,
            .01389,
            0,
            .75
        ],
        87: [
            0,
            .68333,
            .01389,
            0,
            1.02778
        ],
        88: [
            0,
            .68333,
            0,
            0,
            .75
        ],
        89: [
            0,
            .68333,
            .025,
            0,
            .75
        ],
        90: [
            0,
            .68333,
            0,
            0,
            .61111
        ],
        91: [
            .25,
            .75,
            0,
            0,
            .27778
        ],
        92: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        93: [
            .25,
            .75,
            0,
            0,
            .27778
        ],
        94: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        95: [
            .31,
            .12056,
            .02778,
            0,
            .5
        ],
        97: [
            0,
            .43056,
            0,
            0,
            .5
        ],
        98: [
            0,
            .69444,
            0,
            0,
            .55556
        ],
        99: [
            0,
            .43056,
            0,
            0,
            .44445
        ],
        100: [
            0,
            .69444,
            0,
            0,
            .55556
        ],
        101: [
            0,
            .43056,
            0,
            0,
            .44445
        ],
        102: [
            0,
            .69444,
            .07778,
            0,
            .30556
        ],
        103: [
            .19444,
            .43056,
            .01389,
            0,
            .5
        ],
        104: [
            0,
            .69444,
            0,
            0,
            .55556
        ],
        105: [
            0,
            .66786,
            0,
            0,
            .27778
        ],
        106: [
            .19444,
            .66786,
            0,
            0,
            .30556
        ],
        107: [
            0,
            .69444,
            0,
            0,
            .52778
        ],
        108: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        109: [
            0,
            .43056,
            0,
            0,
            .83334
        ],
        110: [
            0,
            .43056,
            0,
            0,
            .55556
        ],
        111: [
            0,
            .43056,
            0,
            0,
            .5
        ],
        112: [
            .19444,
            .43056,
            0,
            0,
            .55556
        ],
        113: [
            .19444,
            .43056,
            0,
            0,
            .52778
        ],
        114: [
            0,
            .43056,
            0,
            0,
            .39167
        ],
        115: [
            0,
            .43056,
            0,
            0,
            .39445
        ],
        116: [
            0,
            .61508,
            0,
            0,
            .38889
        ],
        117: [
            0,
            .43056,
            0,
            0,
            .55556
        ],
        118: [
            0,
            .43056,
            .01389,
            0,
            .52778
        ],
        119: [
            0,
            .43056,
            .01389,
            0,
            .72222
        ],
        120: [
            0,
            .43056,
            0,
            0,
            .52778
        ],
        121: [
            .19444,
            .43056,
            .01389,
            0,
            .52778
        ],
        122: [
            0,
            .43056,
            0,
            0,
            .44445
        ],
        123: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        124: [
            .25,
            .75,
            0,
            0,
            .27778
        ],
        125: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        126: [
            .35,
            .31786,
            0,
            0,
            .5
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        163: [
            0,
            .69444,
            0,
            0,
            .76909
        ],
        167: [
            .19444,
            .69444,
            0,
            0,
            .44445
        ],
        168: [
            0,
            .66786,
            0,
            0,
            .5
        ],
        172: [
            0,
            .43056,
            0,
            0,
            .66667
        ],
        176: [
            0,
            .69444,
            0,
            0,
            .75
        ],
        177: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        182: [
            .19444,
            .69444,
            0,
            0,
            .61111
        ],
        184: [
            .17014,
            0,
            0,
            0,
            .44445
        ],
        198: [
            0,
            .68333,
            0,
            0,
            .90278
        ],
        215: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        216: [
            .04861,
            .73194,
            0,
            0,
            .77778
        ],
        223: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        230: [
            0,
            .43056,
            0,
            0,
            .72222
        ],
        247: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        248: [
            .09722,
            .52778,
            0,
            0,
            .5
        ],
        305: [
            0,
            .43056,
            0,
            0,
            .27778
        ],
        338: [
            0,
            .68333,
            0,
            0,
            1.01389
        ],
        339: [
            0,
            .43056,
            0,
            0,
            .77778
        ],
        567: [
            .19444,
            .43056,
            0,
            0,
            .30556
        ],
        710: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        711: [
            0,
            .62847,
            0,
            0,
            .5
        ],
        713: [
            0,
            .56778,
            0,
            0,
            .5
        ],
        714: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        715: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        728: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        729: [
            0,
            .66786,
            0,
            0,
            .27778
        ],
        730: [
            0,
            .69444,
            0,
            0,
            .75
        ],
        732: [
            0,
            .66786,
            0,
            0,
            .5
        ],
        733: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        915: [
            0,
            .68333,
            0,
            0,
            .625
        ],
        916: [
            0,
            .68333,
            0,
            0,
            .83334
        ],
        920: [
            0,
            .68333,
            0,
            0,
            .77778
        ],
        923: [
            0,
            .68333,
            0,
            0,
            .69445
        ],
        926: [
            0,
            .68333,
            0,
            0,
            .66667
        ],
        928: [
            0,
            .68333,
            0,
            0,
            .75
        ],
        931: [
            0,
            .68333,
            0,
            0,
            .72222
        ],
        933: [
            0,
            .68333,
            0,
            0,
            .77778
        ],
        934: [
            0,
            .68333,
            0,
            0,
            .72222
        ],
        936: [
            0,
            .68333,
            0,
            0,
            .77778
        ],
        937: [
            0,
            .68333,
            0,
            0,
            .72222
        ],
        8211: [
            0,
            .43056,
            .02778,
            0,
            .5
        ],
        8212: [
            0,
            .43056,
            .02778,
            0,
            1
        ],
        8216: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        8217: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        8220: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        8221: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        8224: [
            .19444,
            .69444,
            0,
            0,
            .44445
        ],
        8225: [
            .19444,
            .69444,
            0,
            0,
            .44445
        ],
        8230: [
            0,
            .123,
            0,
            0,
            1.172
        ],
        8242: [
            0,
            .55556,
            0,
            0,
            .275
        ],
        8407: [
            0,
            .71444,
            .15382,
            0,
            .5
        ],
        8463: [
            0,
            .68889,
            0,
            0,
            .54028
        ],
        8465: [
            0,
            .69444,
            0,
            0,
            .72222
        ],
        8467: [
            0,
            .69444,
            0,
            .11111,
            .41667
        ],
        8472: [
            .19444,
            .43056,
            0,
            .11111,
            .63646
        ],
        8476: [
            0,
            .69444,
            0,
            0,
            .72222
        ],
        8501: [
            0,
            .69444,
            0,
            0,
            .61111
        ],
        8592: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8593: [
            .19444,
            .69444,
            0,
            0,
            .5
        ],
        8594: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8595: [
            .19444,
            .69444,
            0,
            0,
            .5
        ],
        8596: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8597: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        8598: [
            .19444,
            .69444,
            0,
            0,
            1
        ],
        8599: [
            .19444,
            .69444,
            0,
            0,
            1
        ],
        8600: [
            .19444,
            .69444,
            0,
            0,
            1
        ],
        8601: [
            .19444,
            .69444,
            0,
            0,
            1
        ],
        8614: [
            .011,
            .511,
            0,
            0,
            1
        ],
        8617: [
            .011,
            .511,
            0,
            0,
            1.126
        ],
        8618: [
            .011,
            .511,
            0,
            0,
            1.126
        ],
        8636: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8637: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8640: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8641: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8652: [
            .011,
            .671,
            0,
            0,
            1
        ],
        8656: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8657: [
            .19444,
            .69444,
            0,
            0,
            .61111
        ],
        8658: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8659: [
            .19444,
            .69444,
            0,
            0,
            .61111
        ],
        8660: [
            -0.13313,
            .36687,
            0,
            0,
            1
        ],
        8661: [
            .25,
            .75,
            0,
            0,
            .61111
        ],
        8704: [
            0,
            .69444,
            0,
            0,
            .55556
        ],
        8706: [
            0,
            .69444,
            .05556,
            .08334,
            .5309
        ],
        8707: [
            0,
            .69444,
            0,
            0,
            .55556
        ],
        8709: [
            .05556,
            .75,
            0,
            0,
            .5
        ],
        8711: [
            0,
            .68333,
            0,
            0,
            .83334
        ],
        8712: [
            .0391,
            .5391,
            0,
            0,
            .66667
        ],
        8715: [
            .0391,
            .5391,
            0,
            0,
            .66667
        ],
        8722: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        8723: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        8725: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        8726: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        8727: [
            -0.03472,
            .46528,
            0,
            0,
            .5
        ],
        8728: [
            -0.05555,
            .44445,
            0,
            0,
            .5
        ],
        8729: [
            -0.05555,
            .44445,
            0,
            0,
            .5
        ],
        8730: [
            .2,
            .8,
            0,
            0,
            .83334
        ],
        8733: [
            0,
            .43056,
            0,
            0,
            .77778
        ],
        8734: [
            0,
            .43056,
            0,
            0,
            1
        ],
        8736: [
            0,
            .69224,
            0,
            0,
            .72222
        ],
        8739: [
            .25,
            .75,
            0,
            0,
            .27778
        ],
        8741: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        8743: [
            0,
            .55556,
            0,
            0,
            .66667
        ],
        8744: [
            0,
            .55556,
            0,
            0,
            .66667
        ],
        8745: [
            0,
            .55556,
            0,
            0,
            .66667
        ],
        8746: [
            0,
            .55556,
            0,
            0,
            .66667
        ],
        8747: [
            .19444,
            .69444,
            .11111,
            0,
            .41667
        ],
        8764: [
            -0.13313,
            .36687,
            0,
            0,
            .77778
        ],
        8768: [
            .19444,
            .69444,
            0,
            0,
            .27778
        ],
        8771: [
            -0.03625,
            .46375,
            0,
            0,
            .77778
        ],
        8773: [
            -0.022,
            .589,
            0,
            0,
            .778
        ],
        8776: [
            -0.01688,
            .48312,
            0,
            0,
            .77778
        ],
        8781: [
            -0.03625,
            .46375,
            0,
            0,
            .77778
        ],
        8784: [
            -0.133,
            .673,
            0,
            0,
            .778
        ],
        8801: [
            -0.03625,
            .46375,
            0,
            0,
            .77778
        ],
        8804: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        8805: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        8810: [
            .0391,
            .5391,
            0,
            0,
            1
        ],
        8811: [
            .0391,
            .5391,
            0,
            0,
            1
        ],
        8826: [
            .0391,
            .5391,
            0,
            0,
            .77778
        ],
        8827: [
            .0391,
            .5391,
            0,
            0,
            .77778
        ],
        8834: [
            .0391,
            .5391,
            0,
            0,
            .77778
        ],
        8835: [
            .0391,
            .5391,
            0,
            0,
            .77778
        ],
        8838: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        8839: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        8846: [
            0,
            .55556,
            0,
            0,
            .66667
        ],
        8849: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        8850: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        8851: [
            0,
            .55556,
            0,
            0,
            .66667
        ],
        8852: [
            0,
            .55556,
            0,
            0,
            .66667
        ],
        8853: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        8854: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        8855: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        8856: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        8857: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        8866: [
            0,
            .69444,
            0,
            0,
            .61111
        ],
        8867: [
            0,
            .69444,
            0,
            0,
            .61111
        ],
        8868: [
            0,
            .69444,
            0,
            0,
            .77778
        ],
        8869: [
            0,
            .69444,
            0,
            0,
            .77778
        ],
        8872: [
            .249,
            .75,
            0,
            0,
            .867
        ],
        8900: [
            -0.05555,
            .44445,
            0,
            0,
            .5
        ],
        8901: [
            -0.05555,
            .44445,
            0,
            0,
            .27778
        ],
        8902: [
            -0.03472,
            .46528,
            0,
            0,
            .5
        ],
        8904: [
            .005,
            .505,
            0,
            0,
            .9
        ],
        8942: [
            .03,
            .903,
            0,
            0,
            .278
        ],
        8943: [
            -0.19,
            .313,
            0,
            0,
            1.172
        ],
        8945: [
            -0.1,
            .823,
            0,
            0,
            1.282
        ],
        8968: [
            .25,
            .75,
            0,
            0,
            .44445
        ],
        8969: [
            .25,
            .75,
            0,
            0,
            .44445
        ],
        8970: [
            .25,
            .75,
            0,
            0,
            .44445
        ],
        8971: [
            .25,
            .75,
            0,
            0,
            .44445
        ],
        8994: [
            -0.14236,
            .35764,
            0,
            0,
            1
        ],
        8995: [
            -0.14236,
            .35764,
            0,
            0,
            1
        ],
        9136: [
            .244,
            .744,
            0,
            0,
            .412
        ],
        9137: [
            .244,
            .745,
            0,
            0,
            .412
        ],
        9651: [
            .19444,
            .69444,
            0,
            0,
            .88889
        ],
        9657: [
            -0.03472,
            .46528,
            0,
            0,
            .5
        ],
        9661: [
            .19444,
            .69444,
            0,
            0,
            .88889
        ],
        9667: [
            -0.03472,
            .46528,
            0,
            0,
            .5
        ],
        9711: [
            .19444,
            .69444,
            0,
            0,
            1
        ],
        9824: [
            .12963,
            .69444,
            0,
            0,
            .77778
        ],
        9825: [
            .12963,
            .69444,
            0,
            0,
            .77778
        ],
        9826: [
            .12963,
            .69444,
            0,
            0,
            .77778
        ],
        9827: [
            .12963,
            .69444,
            0,
            0,
            .77778
        ],
        9837: [
            0,
            .75,
            0,
            0,
            .38889
        ],
        9838: [
            .19444,
            .69444,
            0,
            0,
            .38889
        ],
        9839: [
            .19444,
            .69444,
            0,
            0,
            .38889
        ],
        10216: [
            .25,
            .75,
            0,
            0,
            .38889
        ],
        10217: [
            .25,
            .75,
            0,
            0,
            .38889
        ],
        10222: [
            .244,
            .744,
            0,
            0,
            .412
        ],
        10223: [
            .244,
            .745,
            0,
            0,
            .412
        ],
        10229: [
            .011,
            .511,
            0,
            0,
            1.609
        ],
        10230: [
            .011,
            .511,
            0,
            0,
            1.638
        ],
        10231: [
            .011,
            .511,
            0,
            0,
            1.859
        ],
        10232: [
            .024,
            .525,
            0,
            0,
            1.609
        ],
        10233: [
            .024,
            .525,
            0,
            0,
            1.638
        ],
        10234: [
            .024,
            .525,
            0,
            0,
            1.858
        ],
        10236: [
            .011,
            .511,
            0,
            0,
            1.638
        ],
        10815: [
            0,
            .68333,
            0,
            0,
            .75
        ],
        10927: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        10928: [
            .13597,
            .63597,
            0,
            0,
            .77778
        ],
        57376: [
            .19444,
            .69444,
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
            .25
        ],
        48: [
            0,
            .44444,
            0,
            0,
            .575
        ],
        49: [
            0,
            .44444,
            0,
            0,
            .575
        ],
        50: [
            0,
            .44444,
            0,
            0,
            .575
        ],
        51: [
            .19444,
            .44444,
            0,
            0,
            .575
        ],
        52: [
            .19444,
            .44444,
            0,
            0,
            .575
        ],
        53: [
            .19444,
            .44444,
            0,
            0,
            .575
        ],
        54: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        55: [
            .19444,
            .44444,
            0,
            0,
            .575
        ],
        56: [
            0,
            .64444,
            0,
            0,
            .575
        ],
        57: [
            .19444,
            .44444,
            0,
            0,
            .575
        ],
        65: [
            0,
            .68611,
            0,
            0,
            .86944
        ],
        66: [
            0,
            .68611,
            .04835,
            0,
            .8664
        ],
        67: [
            0,
            .68611,
            .06979,
            0,
            .81694
        ],
        68: [
            0,
            .68611,
            .03194,
            0,
            .93812
        ],
        69: [
            0,
            .68611,
            .05451,
            0,
            .81007
        ],
        70: [
            0,
            .68611,
            .15972,
            0,
            .68889
        ],
        71: [
            0,
            .68611,
            0,
            0,
            .88673
        ],
        72: [
            0,
            .68611,
            .08229,
            0,
            .98229
        ],
        73: [
            0,
            .68611,
            .07778,
            0,
            .51111
        ],
        74: [
            0,
            .68611,
            .10069,
            0,
            .63125
        ],
        75: [
            0,
            .68611,
            .06979,
            0,
            .97118
        ],
        76: [
            0,
            .68611,
            0,
            0,
            .75555
        ],
        77: [
            0,
            .68611,
            .11424,
            0,
            1.14201
        ],
        78: [
            0,
            .68611,
            .11424,
            0,
            .95034
        ],
        79: [
            0,
            .68611,
            .03194,
            0,
            .83666
        ],
        80: [
            0,
            .68611,
            .15972,
            0,
            .72309
        ],
        81: [
            .19444,
            .68611,
            0,
            0,
            .86861
        ],
        82: [
            0,
            .68611,
            .00421,
            0,
            .87235
        ],
        83: [
            0,
            .68611,
            .05382,
            0,
            .69271
        ],
        84: [
            0,
            .68611,
            .15972,
            0,
            .63663
        ],
        85: [
            0,
            .68611,
            .11424,
            0,
            .80027
        ],
        86: [
            0,
            .68611,
            .25555,
            0,
            .67778
        ],
        87: [
            0,
            .68611,
            .15972,
            0,
            1.09305
        ],
        88: [
            0,
            .68611,
            .07778,
            0,
            .94722
        ],
        89: [
            0,
            .68611,
            .25555,
            0,
            .67458
        ],
        90: [
            0,
            .68611,
            .06979,
            0,
            .77257
        ],
        97: [
            0,
            .44444,
            0,
            0,
            .63287
        ],
        98: [
            0,
            .69444,
            0,
            0,
            .52083
        ],
        99: [
            0,
            .44444,
            0,
            0,
            .51342
        ],
        100: [
            0,
            .69444,
            0,
            0,
            .60972
        ],
        101: [
            0,
            .44444,
            0,
            0,
            .55361
        ],
        102: [
            .19444,
            .69444,
            .11042,
            0,
            .56806
        ],
        103: [
            .19444,
            .44444,
            .03704,
            0,
            .5449
        ],
        104: [
            0,
            .69444,
            0,
            0,
            .66759
        ],
        105: [
            0,
            .69326,
            0,
            0,
            .4048
        ],
        106: [
            .19444,
            .69326,
            .0622,
            0,
            .47083
        ],
        107: [
            0,
            .69444,
            .01852,
            0,
            .6037
        ],
        108: [
            0,
            .69444,
            .0088,
            0,
            .34815
        ],
        109: [
            0,
            .44444,
            0,
            0,
            1.0324
        ],
        110: [
            0,
            .44444,
            0,
            0,
            .71296
        ],
        111: [
            0,
            .44444,
            0,
            0,
            .58472
        ],
        112: [
            .19444,
            .44444,
            0,
            0,
            .60092
        ],
        113: [
            .19444,
            .44444,
            .03704,
            0,
            .54213
        ],
        114: [
            0,
            .44444,
            .03194,
            0,
            .5287
        ],
        115: [
            0,
            .44444,
            0,
            0,
            .53125
        ],
        116: [
            0,
            .63492,
            0,
            0,
            .41528
        ],
        117: [
            0,
            .44444,
            0,
            0,
            .68102
        ],
        118: [
            0,
            .44444,
            .03704,
            0,
            .56666
        ],
        119: [
            0,
            .44444,
            .02778,
            0,
            .83148
        ],
        120: [
            0,
            .44444,
            0,
            0,
            .65903
        ],
        121: [
            .19444,
            .44444,
            .03704,
            0,
            .59028
        ],
        122: [
            0,
            .44444,
            .04213,
            0,
            .55509
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        915: [
            0,
            .68611,
            .15972,
            0,
            .65694
        ],
        916: [
            0,
            .68611,
            0,
            0,
            .95833
        ],
        920: [
            0,
            .68611,
            .03194,
            0,
            .86722
        ],
        923: [
            0,
            .68611,
            0,
            0,
            .80555
        ],
        926: [
            0,
            .68611,
            .07458,
            0,
            .84125
        ],
        928: [
            0,
            .68611,
            .08229,
            0,
            .98229
        ],
        931: [
            0,
            .68611,
            .05451,
            0,
            .88507
        ],
        933: [
            0,
            .68611,
            .15972,
            0,
            .67083
        ],
        934: [
            0,
            .68611,
            0,
            0,
            .76666
        ],
        936: [
            0,
            .68611,
            .11653,
            0,
            .71402
        ],
        937: [
            0,
            .68611,
            .04835,
            0,
            .8789
        ],
        945: [
            0,
            .44444,
            0,
            0,
            .76064
        ],
        946: [
            .19444,
            .69444,
            .03403,
            0,
            .65972
        ],
        947: [
            .19444,
            .44444,
            .06389,
            0,
            .59003
        ],
        948: [
            0,
            .69444,
            .03819,
            0,
            .52222
        ],
        949: [
            0,
            .44444,
            0,
            0,
            .52882
        ],
        950: [
            .19444,
            .69444,
            .06215,
            0,
            .50833
        ],
        951: [
            .19444,
            .44444,
            .03704,
            0,
            .6
        ],
        952: [
            0,
            .69444,
            .03194,
            0,
            .5618
        ],
        953: [
            0,
            .44444,
            0,
            0,
            .41204
        ],
        954: [
            0,
            .44444,
            0,
            0,
            .66759
        ],
        955: [
            0,
            .69444,
            0,
            0,
            .67083
        ],
        956: [
            .19444,
            .44444,
            0,
            0,
            .70787
        ],
        957: [
            0,
            .44444,
            .06898,
            0,
            .57685
        ],
        958: [
            .19444,
            .69444,
            .03021,
            0,
            .50833
        ],
        959: [
            0,
            .44444,
            0,
            0,
            .58472
        ],
        960: [
            0,
            .44444,
            .03704,
            0,
            .68241
        ],
        961: [
            .19444,
            .44444,
            0,
            0,
            .6118
        ],
        962: [
            .09722,
            .44444,
            .07917,
            0,
            .42361
        ],
        963: [
            0,
            .44444,
            .03704,
            0,
            .68588
        ],
        964: [
            0,
            .44444,
            .13472,
            0,
            .52083
        ],
        965: [
            0,
            .44444,
            .03704,
            0,
            .63055
        ],
        966: [
            .19444,
            .44444,
            0,
            0,
            .74722
        ],
        967: [
            .19444,
            .44444,
            0,
            0,
            .71805
        ],
        968: [
            .19444,
            .69444,
            .03704,
            0,
            .75833
        ],
        969: [
            0,
            .44444,
            .03704,
            0,
            .71782
        ],
        977: [
            0,
            .69444,
            0,
            0,
            .69155
        ],
        981: [
            .19444,
            .69444,
            0,
            0,
            .7125
        ],
        982: [
            0,
            .44444,
            .03194,
            0,
            .975
        ],
        1009: [
            .19444,
            .44444,
            0,
            0,
            .6118
        ],
        1013: [
            0,
            .44444,
            0,
            0,
            .48333
        ],
        57649: [
            0,
            .44444,
            0,
            0,
            .39352
        ],
        57911: [
            .19444,
            .44444,
            0,
            0,
            .43889
        ]
    },
    "Math-Italic": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        48: [
            0,
            .43056,
            0,
            0,
            .5
        ],
        49: [
            0,
            .43056,
            0,
            0,
            .5
        ],
        50: [
            0,
            .43056,
            0,
            0,
            .5
        ],
        51: [
            .19444,
            .43056,
            0,
            0,
            .5
        ],
        52: [
            .19444,
            .43056,
            0,
            0,
            .5
        ],
        53: [
            .19444,
            .43056,
            0,
            0,
            .5
        ],
        54: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        55: [
            .19444,
            .43056,
            0,
            0,
            .5
        ],
        56: [
            0,
            .64444,
            0,
            0,
            .5
        ],
        57: [
            .19444,
            .43056,
            0,
            0,
            .5
        ],
        65: [
            0,
            .68333,
            0,
            .13889,
            .75
        ],
        66: [
            0,
            .68333,
            .05017,
            .08334,
            .75851
        ],
        67: [
            0,
            .68333,
            .07153,
            .08334,
            .71472
        ],
        68: [
            0,
            .68333,
            .02778,
            .05556,
            .82792
        ],
        69: [
            0,
            .68333,
            .05764,
            .08334,
            .7382
        ],
        70: [
            0,
            .68333,
            .13889,
            .08334,
            .64306
        ],
        71: [
            0,
            .68333,
            0,
            .08334,
            .78625
        ],
        72: [
            0,
            .68333,
            .08125,
            .05556,
            .83125
        ],
        73: [
            0,
            .68333,
            .07847,
            .11111,
            .43958
        ],
        74: [
            0,
            .68333,
            .09618,
            .16667,
            .55451
        ],
        75: [
            0,
            .68333,
            .07153,
            .05556,
            .84931
        ],
        76: [
            0,
            .68333,
            0,
            .02778,
            .68056
        ],
        77: [
            0,
            .68333,
            .10903,
            .08334,
            .97014
        ],
        78: [
            0,
            .68333,
            .10903,
            .08334,
            .80347
        ],
        79: [
            0,
            .68333,
            .02778,
            .08334,
            .76278
        ],
        80: [
            0,
            .68333,
            .13889,
            .08334,
            .64201
        ],
        81: [
            .19444,
            .68333,
            0,
            .08334,
            .79056
        ],
        82: [
            0,
            .68333,
            .00773,
            .08334,
            .75929
        ],
        83: [
            0,
            .68333,
            .05764,
            .08334,
            .6132
        ],
        84: [
            0,
            .68333,
            .13889,
            .08334,
            .58438
        ],
        85: [
            0,
            .68333,
            .10903,
            .02778,
            .68278
        ],
        86: [
            0,
            .68333,
            .22222,
            0,
            .58333
        ],
        87: [
            0,
            .68333,
            .13889,
            0,
            .94445
        ],
        88: [
            0,
            .68333,
            .07847,
            .08334,
            .82847
        ],
        89: [
            0,
            .68333,
            .22222,
            0,
            .58056
        ],
        90: [
            0,
            .68333,
            .07153,
            .08334,
            .68264
        ],
        97: [
            0,
            .43056,
            0,
            0,
            .52859
        ],
        98: [
            0,
            .69444,
            0,
            0,
            .42917
        ],
        99: [
            0,
            .43056,
            0,
            .05556,
            .43276
        ],
        100: [
            0,
            .69444,
            0,
            .16667,
            .52049
        ],
        101: [
            0,
            .43056,
            0,
            .05556,
            .46563
        ],
        102: [
            .19444,
            .69444,
            .10764,
            .16667,
            .48959
        ],
        103: [
            .19444,
            .43056,
            .03588,
            .02778,
            .47697
        ],
        104: [
            0,
            .69444,
            0,
            0,
            .57616
        ],
        105: [
            0,
            .65952,
            0,
            0,
            .34451
        ],
        106: [
            .19444,
            .65952,
            .05724,
            0,
            .41181
        ],
        107: [
            0,
            .69444,
            .03148,
            0,
            .5206
        ],
        108: [
            0,
            .69444,
            .01968,
            .08334,
            .29838
        ],
        109: [
            0,
            .43056,
            0,
            0,
            .87801
        ],
        110: [
            0,
            .43056,
            0,
            0,
            .60023
        ],
        111: [
            0,
            .43056,
            0,
            .05556,
            .48472
        ],
        112: [
            .19444,
            .43056,
            0,
            .08334,
            .50313
        ],
        113: [
            .19444,
            .43056,
            .03588,
            .08334,
            .44641
        ],
        114: [
            0,
            .43056,
            .02778,
            .05556,
            .45116
        ],
        115: [
            0,
            .43056,
            0,
            .05556,
            .46875
        ],
        116: [
            0,
            .61508,
            0,
            .08334,
            .36111
        ],
        117: [
            0,
            .43056,
            0,
            .02778,
            .57246
        ],
        118: [
            0,
            .43056,
            .03588,
            .02778,
            .48472
        ],
        119: [
            0,
            .43056,
            .02691,
            .08334,
            .71592
        ],
        120: [
            0,
            .43056,
            0,
            .02778,
            .57153
        ],
        121: [
            .19444,
            .43056,
            .03588,
            .05556,
            .49028
        ],
        122: [
            0,
            .43056,
            .04398,
            .05556,
            .46505
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        915: [
            0,
            .68333,
            .13889,
            .08334,
            .61528
        ],
        916: [
            0,
            .68333,
            0,
            .16667,
            .83334
        ],
        920: [
            0,
            .68333,
            .02778,
            .08334,
            .76278
        ],
        923: [
            0,
            .68333,
            0,
            .16667,
            .69445
        ],
        926: [
            0,
            .68333,
            .07569,
            .08334,
            .74236
        ],
        928: [
            0,
            .68333,
            .08125,
            .05556,
            .83125
        ],
        931: [
            0,
            .68333,
            .05764,
            .08334,
            .77986
        ],
        933: [
            0,
            .68333,
            .13889,
            .05556,
            .58333
        ],
        934: [
            0,
            .68333,
            0,
            .08334,
            .66667
        ],
        936: [
            0,
            .68333,
            .11,
            .05556,
            .61222
        ],
        937: [
            0,
            .68333,
            .05017,
            .08334,
            .7724
        ],
        945: [
            0,
            .43056,
            .0037,
            .02778,
            .6397
        ],
        946: [
            .19444,
            .69444,
            .05278,
            .08334,
            .56563
        ],
        947: [
            .19444,
            .43056,
            .05556,
            0,
            .51773
        ],
        948: [
            0,
            .69444,
            .03785,
            .05556,
            .44444
        ],
        949: [
            0,
            .43056,
            0,
            .08334,
            .46632
        ],
        950: [
            .19444,
            .69444,
            .07378,
            .08334,
            .4375
        ],
        951: [
            .19444,
            .43056,
            .03588,
            .05556,
            .49653
        ],
        952: [
            0,
            .69444,
            .02778,
            .08334,
            .46944
        ],
        953: [
            0,
            .43056,
            0,
            .05556,
            .35394
        ],
        954: [
            0,
            .43056,
            0,
            0,
            .57616
        ],
        955: [
            0,
            .69444,
            0,
            0,
            .58334
        ],
        956: [
            .19444,
            .43056,
            0,
            .02778,
            .60255
        ],
        957: [
            0,
            .43056,
            .06366,
            .02778,
            .49398
        ],
        958: [
            .19444,
            .69444,
            .04601,
            .11111,
            .4375
        ],
        959: [
            0,
            .43056,
            0,
            .05556,
            .48472
        ],
        960: [
            0,
            .43056,
            .03588,
            0,
            .57003
        ],
        961: [
            .19444,
            .43056,
            0,
            .08334,
            .51702
        ],
        962: [
            .09722,
            .43056,
            .07986,
            .08334,
            .36285
        ],
        963: [
            0,
            .43056,
            .03588,
            0,
            .57141
        ],
        964: [
            0,
            .43056,
            .1132,
            .02778,
            .43715
        ],
        965: [
            0,
            .43056,
            .03588,
            .02778,
            .54028
        ],
        966: [
            .19444,
            .43056,
            0,
            .08334,
            .65417
        ],
        967: [
            .19444,
            .43056,
            0,
            .05556,
            .62569
        ],
        968: [
            .19444,
            .69444,
            .03588,
            .11111,
            .65139
        ],
        969: [
            0,
            .43056,
            .03588,
            0,
            .62245
        ],
        977: [
            0,
            .69444,
            0,
            .08334,
            .59144
        ],
        981: [
            .19444,
            .69444,
            0,
            .08334,
            .59583
        ],
        982: [
            0,
            .43056,
            .02778,
            0,
            .82813
        ],
        1009: [
            .19444,
            .43056,
            0,
            .08334,
            .51702
        ],
        1013: [
            0,
            .43056,
            0,
            .05556,
            .4059
        ],
        57649: [
            0,
            .43056,
            0,
            .02778,
            .32246
        ],
        57911: [
            .19444,
            .43056,
            0,
            .08334,
            .38403
        ]
    },
    "SansSerif-Bold": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        33: [
            0,
            .69444,
            0,
            0,
            .36667
        ],
        34: [
            0,
            .69444,
            0,
            0,
            .55834
        ],
        35: [
            .19444,
            .69444,
            0,
            0,
            .91667
        ],
        36: [
            .05556,
            .75,
            0,
            0,
            .55
        ],
        37: [
            .05556,
            .75,
            0,
            0,
            1.02912
        ],
        38: [
            0,
            .69444,
            0,
            0,
            .83056
        ],
        39: [
            0,
            .69444,
            0,
            0,
            .30556
        ],
        40: [
            .25,
            .75,
            0,
            0,
            .42778
        ],
        41: [
            .25,
            .75,
            0,
            0,
            .42778
        ],
        42: [
            0,
            .75,
            0,
            0,
            .55
        ],
        43: [
            .11667,
            .61667,
            0,
            0,
            .85556
        ],
        44: [
            .10556,
            .13056,
            0,
            0,
            .30556
        ],
        45: [
            0,
            .45833,
            0,
            0,
            .36667
        ],
        46: [
            0,
            .13056,
            0,
            0,
            .30556
        ],
        47: [
            .25,
            .75,
            0,
            0,
            .55
        ],
        48: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        49: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        50: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        51: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        52: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        53: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        54: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        55: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        56: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        57: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        58: [
            0,
            .45833,
            0,
            0,
            .30556
        ],
        59: [
            .10556,
            .45833,
            0,
            0,
            .30556
        ],
        61: [
            -0.09375,
            .40625,
            0,
            0,
            .85556
        ],
        63: [
            0,
            .69444,
            0,
            0,
            .51945
        ],
        64: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        65: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        66: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        67: [
            0,
            .69444,
            0,
            0,
            .70278
        ],
        68: [
            0,
            .69444,
            0,
            0,
            .79445
        ],
        69: [
            0,
            .69444,
            0,
            0,
            .64167
        ],
        70: [
            0,
            .69444,
            0,
            0,
            .61111
        ],
        71: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        72: [
            0,
            .69444,
            0,
            0,
            .79445
        ],
        73: [
            0,
            .69444,
            0,
            0,
            .33056
        ],
        74: [
            0,
            .69444,
            0,
            0,
            .51945
        ],
        75: [
            0,
            .69444,
            0,
            0,
            .76389
        ],
        76: [
            0,
            .69444,
            0,
            0,
            .58056
        ],
        77: [
            0,
            .69444,
            0,
            0,
            .97778
        ],
        78: [
            0,
            .69444,
            0,
            0,
            .79445
        ],
        79: [
            0,
            .69444,
            0,
            0,
            .79445
        ],
        80: [
            0,
            .69444,
            0,
            0,
            .70278
        ],
        81: [
            .10556,
            .69444,
            0,
            0,
            .79445
        ],
        82: [
            0,
            .69444,
            0,
            0,
            .70278
        ],
        83: [
            0,
            .69444,
            0,
            0,
            .61111
        ],
        84: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        85: [
            0,
            .69444,
            0,
            0,
            .76389
        ],
        86: [
            0,
            .69444,
            .01528,
            0,
            .73334
        ],
        87: [
            0,
            .69444,
            .01528,
            0,
            1.03889
        ],
        88: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        89: [
            0,
            .69444,
            .0275,
            0,
            .73334
        ],
        90: [
            0,
            .69444,
            0,
            0,
            .67223
        ],
        91: [
            .25,
            .75,
            0,
            0,
            .34306
        ],
        93: [
            .25,
            .75,
            0,
            0,
            .34306
        ],
        94: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        95: [
            .35,
            .10833,
            .03056,
            0,
            .55
        ],
        97: [
            0,
            .45833,
            0,
            0,
            .525
        ],
        98: [
            0,
            .69444,
            0,
            0,
            .56111
        ],
        99: [
            0,
            .45833,
            0,
            0,
            .48889
        ],
        100: [
            0,
            .69444,
            0,
            0,
            .56111
        ],
        101: [
            0,
            .45833,
            0,
            0,
            .51111
        ],
        102: [
            0,
            .69444,
            .07639,
            0,
            .33611
        ],
        103: [
            .19444,
            .45833,
            .01528,
            0,
            .55
        ],
        104: [
            0,
            .69444,
            0,
            0,
            .56111
        ],
        105: [
            0,
            .69444,
            0,
            0,
            .25556
        ],
        106: [
            .19444,
            .69444,
            0,
            0,
            .28611
        ],
        107: [
            0,
            .69444,
            0,
            0,
            .53056
        ],
        108: [
            0,
            .69444,
            0,
            0,
            .25556
        ],
        109: [
            0,
            .45833,
            0,
            0,
            .86667
        ],
        110: [
            0,
            .45833,
            0,
            0,
            .56111
        ],
        111: [
            0,
            .45833,
            0,
            0,
            .55
        ],
        112: [
            .19444,
            .45833,
            0,
            0,
            .56111
        ],
        113: [
            .19444,
            .45833,
            0,
            0,
            .56111
        ],
        114: [
            0,
            .45833,
            .01528,
            0,
            .37222
        ],
        115: [
            0,
            .45833,
            0,
            0,
            .42167
        ],
        116: [
            0,
            .58929,
            0,
            0,
            .40417
        ],
        117: [
            0,
            .45833,
            0,
            0,
            .56111
        ],
        118: [
            0,
            .45833,
            .01528,
            0,
            .5
        ],
        119: [
            0,
            .45833,
            .01528,
            0,
            .74445
        ],
        120: [
            0,
            .45833,
            0,
            0,
            .5
        ],
        121: [
            .19444,
            .45833,
            .01528,
            0,
            .5
        ],
        122: [
            0,
            .45833,
            0,
            0,
            .47639
        ],
        126: [
            .35,
            .34444,
            0,
            0,
            .55
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        168: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        176: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        180: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        184: [
            .17014,
            0,
            0,
            0,
            .48889
        ],
        305: [
            0,
            .45833,
            0,
            0,
            .25556
        ],
        567: [
            .19444,
            .45833,
            0,
            0,
            .28611
        ],
        710: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        711: [
            0,
            .63542,
            0,
            0,
            .55
        ],
        713: [
            0,
            .63778,
            0,
            0,
            .55
        ],
        728: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        729: [
            0,
            .69444,
            0,
            0,
            .30556
        ],
        730: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        732: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        733: [
            0,
            .69444,
            0,
            0,
            .55
        ],
        915: [
            0,
            .69444,
            0,
            0,
            .58056
        ],
        916: [
            0,
            .69444,
            0,
            0,
            .91667
        ],
        920: [
            0,
            .69444,
            0,
            0,
            .85556
        ],
        923: [
            0,
            .69444,
            0,
            0,
            .67223
        ],
        926: [
            0,
            .69444,
            0,
            0,
            .73334
        ],
        928: [
            0,
            .69444,
            0,
            0,
            .79445
        ],
        931: [
            0,
            .69444,
            0,
            0,
            .79445
        ],
        933: [
            0,
            .69444,
            0,
            0,
            .85556
        ],
        934: [
            0,
            .69444,
            0,
            0,
            .79445
        ],
        936: [
            0,
            .69444,
            0,
            0,
            .85556
        ],
        937: [
            0,
            .69444,
            0,
            0,
            .79445
        ],
        8211: [
            0,
            .45833,
            .03056,
            0,
            .55
        ],
        8212: [
            0,
            .45833,
            .03056,
            0,
            1.10001
        ],
        8216: [
            0,
            .69444,
            0,
            0,
            .30556
        ],
        8217: [
            0,
            .69444,
            0,
            0,
            .30556
        ],
        8220: [
            0,
            .69444,
            0,
            0,
            .55834
        ],
        8221: [
            0,
            .69444,
            0,
            0,
            .55834
        ]
    },
    "SansSerif-Italic": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        33: [
            0,
            .69444,
            .05733,
            0,
            .31945
        ],
        34: [
            0,
            .69444,
            .00316,
            0,
            .5
        ],
        35: [
            .19444,
            .69444,
            .05087,
            0,
            .83334
        ],
        36: [
            .05556,
            .75,
            .11156,
            0,
            .5
        ],
        37: [
            .05556,
            .75,
            .03126,
            0,
            .83334
        ],
        38: [
            0,
            .69444,
            .03058,
            0,
            .75834
        ],
        39: [
            0,
            .69444,
            .07816,
            0,
            .27778
        ],
        40: [
            .25,
            .75,
            .13164,
            0,
            .38889
        ],
        41: [
            .25,
            .75,
            .02536,
            0,
            .38889
        ],
        42: [
            0,
            .75,
            .11775,
            0,
            .5
        ],
        43: [
            .08333,
            .58333,
            .02536,
            0,
            .77778
        ],
        44: [
            .125,
            .08333,
            0,
            0,
            .27778
        ],
        45: [
            0,
            .44444,
            .01946,
            0,
            .33333
        ],
        46: [
            0,
            .08333,
            0,
            0,
            .27778
        ],
        47: [
            .25,
            .75,
            .13164,
            0,
            .5
        ],
        48: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        49: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        50: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        51: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        52: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        53: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        54: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        55: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        56: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        57: [
            0,
            .65556,
            .11156,
            0,
            .5
        ],
        58: [
            0,
            .44444,
            .02502,
            0,
            .27778
        ],
        59: [
            .125,
            .44444,
            .02502,
            0,
            .27778
        ],
        61: [
            -0.13,
            .37,
            .05087,
            0,
            .77778
        ],
        63: [
            0,
            .69444,
            .11809,
            0,
            .47222
        ],
        64: [
            0,
            .69444,
            .07555,
            0,
            .66667
        ],
        65: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        66: [
            0,
            .69444,
            .08293,
            0,
            .66667
        ],
        67: [
            0,
            .69444,
            .11983,
            0,
            .63889
        ],
        68: [
            0,
            .69444,
            .07555,
            0,
            .72223
        ],
        69: [
            0,
            .69444,
            .11983,
            0,
            .59722
        ],
        70: [
            0,
            .69444,
            .13372,
            0,
            .56945
        ],
        71: [
            0,
            .69444,
            .11983,
            0,
            .66667
        ],
        72: [
            0,
            .69444,
            .08094,
            0,
            .70834
        ],
        73: [
            0,
            .69444,
            .13372,
            0,
            .27778
        ],
        74: [
            0,
            .69444,
            .08094,
            0,
            .47222
        ],
        75: [
            0,
            .69444,
            .11983,
            0,
            .69445
        ],
        76: [
            0,
            .69444,
            0,
            0,
            .54167
        ],
        77: [
            0,
            .69444,
            .08094,
            0,
            .875
        ],
        78: [
            0,
            .69444,
            .08094,
            0,
            .70834
        ],
        79: [
            0,
            .69444,
            .07555,
            0,
            .73611
        ],
        80: [
            0,
            .69444,
            .08293,
            0,
            .63889
        ],
        81: [
            .125,
            .69444,
            .07555,
            0,
            .73611
        ],
        82: [
            0,
            .69444,
            .08293,
            0,
            .64584
        ],
        83: [
            0,
            .69444,
            .09205,
            0,
            .55556
        ],
        84: [
            0,
            .69444,
            .13372,
            0,
            .68056
        ],
        85: [
            0,
            .69444,
            .08094,
            0,
            .6875
        ],
        86: [
            0,
            .69444,
            .1615,
            0,
            .66667
        ],
        87: [
            0,
            .69444,
            .1615,
            0,
            .94445
        ],
        88: [
            0,
            .69444,
            .13372,
            0,
            .66667
        ],
        89: [
            0,
            .69444,
            .17261,
            0,
            .66667
        ],
        90: [
            0,
            .69444,
            .11983,
            0,
            .61111
        ],
        91: [
            .25,
            .75,
            .15942,
            0,
            .28889
        ],
        93: [
            .25,
            .75,
            .08719,
            0,
            .28889
        ],
        94: [
            0,
            .69444,
            .0799,
            0,
            .5
        ],
        95: [
            .35,
            .09444,
            .08616,
            0,
            .5
        ],
        97: [
            0,
            .44444,
            .00981,
            0,
            .48056
        ],
        98: [
            0,
            .69444,
            .03057,
            0,
            .51667
        ],
        99: [
            0,
            .44444,
            .08336,
            0,
            .44445
        ],
        100: [
            0,
            .69444,
            .09483,
            0,
            .51667
        ],
        101: [
            0,
            .44444,
            .06778,
            0,
            .44445
        ],
        102: [
            0,
            .69444,
            .21705,
            0,
            .30556
        ],
        103: [
            .19444,
            .44444,
            .10836,
            0,
            .5
        ],
        104: [
            0,
            .69444,
            .01778,
            0,
            .51667
        ],
        105: [
            0,
            .67937,
            .09718,
            0,
            .23889
        ],
        106: [
            .19444,
            .67937,
            .09162,
            0,
            .26667
        ],
        107: [
            0,
            .69444,
            .08336,
            0,
            .48889
        ],
        108: [
            0,
            .69444,
            .09483,
            0,
            .23889
        ],
        109: [
            0,
            .44444,
            .01778,
            0,
            .79445
        ],
        110: [
            0,
            .44444,
            .01778,
            0,
            .51667
        ],
        111: [
            0,
            .44444,
            .06613,
            0,
            .5
        ],
        112: [
            .19444,
            .44444,
            .0389,
            0,
            .51667
        ],
        113: [
            .19444,
            .44444,
            .04169,
            0,
            .51667
        ],
        114: [
            0,
            .44444,
            .10836,
            0,
            .34167
        ],
        115: [
            0,
            .44444,
            .0778,
            0,
            .38333
        ],
        116: [
            0,
            .57143,
            .07225,
            0,
            .36111
        ],
        117: [
            0,
            .44444,
            .04169,
            0,
            .51667
        ],
        118: [
            0,
            .44444,
            .10836,
            0,
            .46111
        ],
        119: [
            0,
            .44444,
            .10836,
            0,
            .68334
        ],
        120: [
            0,
            .44444,
            .09169,
            0,
            .46111
        ],
        121: [
            .19444,
            .44444,
            .10836,
            0,
            .46111
        ],
        122: [
            0,
            .44444,
            .08752,
            0,
            .43472
        ],
        126: [
            .35,
            .32659,
            .08826,
            0,
            .5
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        168: [
            0,
            .67937,
            .06385,
            0,
            .5
        ],
        176: [
            0,
            .69444,
            0,
            0,
            .73752
        ],
        184: [
            .17014,
            0,
            0,
            0,
            .44445
        ],
        305: [
            0,
            .44444,
            .04169,
            0,
            .23889
        ],
        567: [
            .19444,
            .44444,
            .04169,
            0,
            .26667
        ],
        710: [
            0,
            .69444,
            .0799,
            0,
            .5
        ],
        711: [
            0,
            .63194,
            .08432,
            0,
            .5
        ],
        713: [
            0,
            .60889,
            .08776,
            0,
            .5
        ],
        714: [
            0,
            .69444,
            .09205,
            0,
            .5
        ],
        715: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        728: [
            0,
            .69444,
            .09483,
            0,
            .5
        ],
        729: [
            0,
            .67937,
            .07774,
            0,
            .27778
        ],
        730: [
            0,
            .69444,
            0,
            0,
            .73752
        ],
        732: [
            0,
            .67659,
            .08826,
            0,
            .5
        ],
        733: [
            0,
            .69444,
            .09205,
            0,
            .5
        ],
        915: [
            0,
            .69444,
            .13372,
            0,
            .54167
        ],
        916: [
            0,
            .69444,
            0,
            0,
            .83334
        ],
        920: [
            0,
            .69444,
            .07555,
            0,
            .77778
        ],
        923: [
            0,
            .69444,
            0,
            0,
            .61111
        ],
        926: [
            0,
            .69444,
            .12816,
            0,
            .66667
        ],
        928: [
            0,
            .69444,
            .08094,
            0,
            .70834
        ],
        931: [
            0,
            .69444,
            .11983,
            0,
            .72222
        ],
        933: [
            0,
            .69444,
            .09031,
            0,
            .77778
        ],
        934: [
            0,
            .69444,
            .04603,
            0,
            .72222
        ],
        936: [
            0,
            .69444,
            .09031,
            0,
            .77778
        ],
        937: [
            0,
            .69444,
            .08293,
            0,
            .72222
        ],
        8211: [
            0,
            .44444,
            .08616,
            0,
            .5
        ],
        8212: [
            0,
            .44444,
            .08616,
            0,
            1
        ],
        8216: [
            0,
            .69444,
            .07816,
            0,
            .27778
        ],
        8217: [
            0,
            .69444,
            .07816,
            0,
            .27778
        ],
        8220: [
            0,
            .69444,
            .14205,
            0,
            .5
        ],
        8221: [
            0,
            .69444,
            .00316,
            0,
            .5
        ]
    },
    "SansSerif-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        33: [
            0,
            .69444,
            0,
            0,
            .31945
        ],
        34: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        35: [
            .19444,
            .69444,
            0,
            0,
            .83334
        ],
        36: [
            .05556,
            .75,
            0,
            0,
            .5
        ],
        37: [
            .05556,
            .75,
            0,
            0,
            .83334
        ],
        38: [
            0,
            .69444,
            0,
            0,
            .75834
        ],
        39: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        40: [
            .25,
            .75,
            0,
            0,
            .38889
        ],
        41: [
            .25,
            .75,
            0,
            0,
            .38889
        ],
        42: [
            0,
            .75,
            0,
            0,
            .5
        ],
        43: [
            .08333,
            .58333,
            0,
            0,
            .77778
        ],
        44: [
            .125,
            .08333,
            0,
            0,
            .27778
        ],
        45: [
            0,
            .44444,
            0,
            0,
            .33333
        ],
        46: [
            0,
            .08333,
            0,
            0,
            .27778
        ],
        47: [
            .25,
            .75,
            0,
            0,
            .5
        ],
        48: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        49: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        50: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        51: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        52: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        53: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        54: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        55: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        56: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        57: [
            0,
            .65556,
            0,
            0,
            .5
        ],
        58: [
            0,
            .44444,
            0,
            0,
            .27778
        ],
        59: [
            .125,
            .44444,
            0,
            0,
            .27778
        ],
        61: [
            -0.13,
            .37,
            0,
            0,
            .77778
        ],
        63: [
            0,
            .69444,
            0,
            0,
            .47222
        ],
        64: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        65: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        66: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        67: [
            0,
            .69444,
            0,
            0,
            .63889
        ],
        68: [
            0,
            .69444,
            0,
            0,
            .72223
        ],
        69: [
            0,
            .69444,
            0,
            0,
            .59722
        ],
        70: [
            0,
            .69444,
            0,
            0,
            .56945
        ],
        71: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        72: [
            0,
            .69444,
            0,
            0,
            .70834
        ],
        73: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        74: [
            0,
            .69444,
            0,
            0,
            .47222
        ],
        75: [
            0,
            .69444,
            0,
            0,
            .69445
        ],
        76: [
            0,
            .69444,
            0,
            0,
            .54167
        ],
        77: [
            0,
            .69444,
            0,
            0,
            .875
        ],
        78: [
            0,
            .69444,
            0,
            0,
            .70834
        ],
        79: [
            0,
            .69444,
            0,
            0,
            .73611
        ],
        80: [
            0,
            .69444,
            0,
            0,
            .63889
        ],
        81: [
            .125,
            .69444,
            0,
            0,
            .73611
        ],
        82: [
            0,
            .69444,
            0,
            0,
            .64584
        ],
        83: [
            0,
            .69444,
            0,
            0,
            .55556
        ],
        84: [
            0,
            .69444,
            0,
            0,
            .68056
        ],
        85: [
            0,
            .69444,
            0,
            0,
            .6875
        ],
        86: [
            0,
            .69444,
            .01389,
            0,
            .66667
        ],
        87: [
            0,
            .69444,
            .01389,
            0,
            .94445
        ],
        88: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        89: [
            0,
            .69444,
            .025,
            0,
            .66667
        ],
        90: [
            0,
            .69444,
            0,
            0,
            .61111
        ],
        91: [
            .25,
            .75,
            0,
            0,
            .28889
        ],
        93: [
            .25,
            .75,
            0,
            0,
            .28889
        ],
        94: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        95: [
            .35,
            .09444,
            .02778,
            0,
            .5
        ],
        97: [
            0,
            .44444,
            0,
            0,
            .48056
        ],
        98: [
            0,
            .69444,
            0,
            0,
            .51667
        ],
        99: [
            0,
            .44444,
            0,
            0,
            .44445
        ],
        100: [
            0,
            .69444,
            0,
            0,
            .51667
        ],
        101: [
            0,
            .44444,
            0,
            0,
            .44445
        ],
        102: [
            0,
            .69444,
            .06944,
            0,
            .30556
        ],
        103: [
            .19444,
            .44444,
            .01389,
            0,
            .5
        ],
        104: [
            0,
            .69444,
            0,
            0,
            .51667
        ],
        105: [
            0,
            .67937,
            0,
            0,
            .23889
        ],
        106: [
            .19444,
            .67937,
            0,
            0,
            .26667
        ],
        107: [
            0,
            .69444,
            0,
            0,
            .48889
        ],
        108: [
            0,
            .69444,
            0,
            0,
            .23889
        ],
        109: [
            0,
            .44444,
            0,
            0,
            .79445
        ],
        110: [
            0,
            .44444,
            0,
            0,
            .51667
        ],
        111: [
            0,
            .44444,
            0,
            0,
            .5
        ],
        112: [
            .19444,
            .44444,
            0,
            0,
            .51667
        ],
        113: [
            .19444,
            .44444,
            0,
            0,
            .51667
        ],
        114: [
            0,
            .44444,
            .01389,
            0,
            .34167
        ],
        115: [
            0,
            .44444,
            0,
            0,
            .38333
        ],
        116: [
            0,
            .57143,
            0,
            0,
            .36111
        ],
        117: [
            0,
            .44444,
            0,
            0,
            .51667
        ],
        118: [
            0,
            .44444,
            .01389,
            0,
            .46111
        ],
        119: [
            0,
            .44444,
            .01389,
            0,
            .68334
        ],
        120: [
            0,
            .44444,
            0,
            0,
            .46111
        ],
        121: [
            .19444,
            .44444,
            .01389,
            0,
            .46111
        ],
        122: [
            0,
            .44444,
            0,
            0,
            .43472
        ],
        126: [
            .35,
            .32659,
            0,
            0,
            .5
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        168: [
            0,
            .67937,
            0,
            0,
            .5
        ],
        176: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        184: [
            .17014,
            0,
            0,
            0,
            .44445
        ],
        305: [
            0,
            .44444,
            0,
            0,
            .23889
        ],
        567: [
            .19444,
            .44444,
            0,
            0,
            .26667
        ],
        710: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        711: [
            0,
            .63194,
            0,
            0,
            .5
        ],
        713: [
            0,
            .60889,
            0,
            0,
            .5
        ],
        714: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        715: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        728: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        729: [
            0,
            .67937,
            0,
            0,
            .27778
        ],
        730: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        732: [
            0,
            .67659,
            0,
            0,
            .5
        ],
        733: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        915: [
            0,
            .69444,
            0,
            0,
            .54167
        ],
        916: [
            0,
            .69444,
            0,
            0,
            .83334
        ],
        920: [
            0,
            .69444,
            0,
            0,
            .77778
        ],
        923: [
            0,
            .69444,
            0,
            0,
            .61111
        ],
        926: [
            0,
            .69444,
            0,
            0,
            .66667
        ],
        928: [
            0,
            .69444,
            0,
            0,
            .70834
        ],
        931: [
            0,
            .69444,
            0,
            0,
            .72222
        ],
        933: [
            0,
            .69444,
            0,
            0,
            .77778
        ],
        934: [
            0,
            .69444,
            0,
            0,
            .72222
        ],
        936: [
            0,
            .69444,
            0,
            0,
            .77778
        ],
        937: [
            0,
            .69444,
            0,
            0,
            .72222
        ],
        8211: [
            0,
            .44444,
            .02778,
            0,
            .5
        ],
        8212: [
            0,
            .44444,
            .02778,
            0,
            1
        ],
        8216: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        8217: [
            0,
            .69444,
            0,
            0,
            .27778
        ],
        8220: [
            0,
            .69444,
            0,
            0,
            .5
        ],
        8221: [
            0,
            .69444,
            0,
            0,
            .5
        ]
    },
    "Script-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        65: [
            0,
            .7,
            .22925,
            0,
            .80253
        ],
        66: [
            0,
            .7,
            .04087,
            0,
            .90757
        ],
        67: [
            0,
            .7,
            .1689,
            0,
            .66619
        ],
        68: [
            0,
            .7,
            .09371,
            0,
            .77443
        ],
        69: [
            0,
            .7,
            .18583,
            0,
            .56162
        ],
        70: [
            0,
            .7,
            .13634,
            0,
            .89544
        ],
        71: [
            0,
            .7,
            .17322,
            0,
            .60961
        ],
        72: [
            0,
            .7,
            .29694,
            0,
            .96919
        ],
        73: [
            0,
            .7,
            .19189,
            0,
            .80907
        ],
        74: [
            .27778,
            .7,
            .19189,
            0,
            1.05159
        ],
        75: [
            0,
            .7,
            .31259,
            0,
            .91364
        ],
        76: [
            0,
            .7,
            .19189,
            0,
            .87373
        ],
        77: [
            0,
            .7,
            .15981,
            0,
            1.08031
        ],
        78: [
            0,
            .7,
            .3525,
            0,
            .9015
        ],
        79: [
            0,
            .7,
            .08078,
            0,
            .73787
        ],
        80: [
            0,
            .7,
            .08078,
            0,
            1.01262
        ],
        81: [
            0,
            .7,
            .03305,
            0,
            .88282
        ],
        82: [
            0,
            .7,
            .06259,
            0,
            .85
        ],
        83: [
            0,
            .7,
            .19189,
            0,
            .86767
        ],
        84: [
            0,
            .7,
            .29087,
            0,
            .74697
        ],
        85: [
            0,
            .7,
            .25815,
            0,
            .79996
        ],
        86: [
            0,
            .7,
            .27523,
            0,
            .62204
        ],
        87: [
            0,
            .7,
            .27523,
            0,
            .80532
        ],
        88: [
            0,
            .7,
            .26006,
            0,
            .94445
        ],
        89: [
            0,
            .7,
            .2939,
            0,
            .70961
        ],
        90: [
            0,
            .7,
            .24037,
            0,
            .8212
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ]
    },
    "Size1-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        40: [
            .35001,
            .85,
            0,
            0,
            .45834
        ],
        41: [
            .35001,
            .85,
            0,
            0,
            .45834
        ],
        47: [
            .35001,
            .85,
            0,
            0,
            .57778
        ],
        91: [
            .35001,
            .85,
            0,
            0,
            .41667
        ],
        92: [
            .35001,
            .85,
            0,
            0,
            .57778
        ],
        93: [
            .35001,
            .85,
            0,
            0,
            .41667
        ],
        123: [
            .35001,
            .85,
            0,
            0,
            .58334
        ],
        125: [
            .35001,
            .85,
            0,
            0,
            .58334
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        710: [
            0,
            .72222,
            0,
            0,
            .55556
        ],
        732: [
            0,
            .72222,
            0,
            0,
            .55556
        ],
        770: [
            0,
            .72222,
            0,
            0,
            .55556
        ],
        771: [
            0,
            .72222,
            0,
            0,
            .55556
        ],
        8214: [
            -99e-5,
            .601,
            0,
            0,
            .77778
        ],
        8593: [
            1e-5,
            .6,
            0,
            0,
            .66667
        ],
        8595: [
            1e-5,
            .6,
            0,
            0,
            .66667
        ],
        8657: [
            1e-5,
            .6,
            0,
            0,
            .77778
        ],
        8659: [
            1e-5,
            .6,
            0,
            0,
            .77778
        ],
        8719: [
            .25001,
            .75,
            0,
            0,
            .94445
        ],
        8720: [
            .25001,
            .75,
            0,
            0,
            .94445
        ],
        8721: [
            .25001,
            .75,
            0,
            0,
            1.05556
        ],
        8730: [
            .35001,
            .85,
            0,
            0,
            1
        ],
        8739: [
            -599e-5,
            .606,
            0,
            0,
            .33333
        ],
        8741: [
            -599e-5,
            .606,
            0,
            0,
            .55556
        ],
        8747: [
            .30612,
            .805,
            .19445,
            0,
            .47222
        ],
        8748: [
            .306,
            .805,
            .19445,
            0,
            .47222
        ],
        8749: [
            .306,
            .805,
            .19445,
            0,
            .47222
        ],
        8750: [
            .30612,
            .805,
            .19445,
            0,
            .47222
        ],
        8896: [
            .25001,
            .75,
            0,
            0,
            .83334
        ],
        8897: [
            .25001,
            .75,
            0,
            0,
            .83334
        ],
        8898: [
            .25001,
            .75,
            0,
            0,
            .83334
        ],
        8899: [
            .25001,
            .75,
            0,
            0,
            .83334
        ],
        8968: [
            .35001,
            .85,
            0,
            0,
            .47222
        ],
        8969: [
            .35001,
            .85,
            0,
            0,
            .47222
        ],
        8970: [
            .35001,
            .85,
            0,
            0,
            .47222
        ],
        8971: [
            .35001,
            .85,
            0,
            0,
            .47222
        ],
        9168: [
            -99e-5,
            .601,
            0,
            0,
            .66667
        ],
        10216: [
            .35001,
            .85,
            0,
            0,
            .47222
        ],
        10217: [
            .35001,
            .85,
            0,
            0,
            .47222
        ],
        10752: [
            .25001,
            .75,
            0,
            0,
            1.11111
        ],
        10753: [
            .25001,
            .75,
            0,
            0,
            1.11111
        ],
        10754: [
            .25001,
            .75,
            0,
            0,
            1.11111
        ],
        10756: [
            .25001,
            .75,
            0,
            0,
            .83334
        ],
        10758: [
            .25001,
            .75,
            0,
            0,
            .83334
        ]
    },
    "Size2-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        40: [
            .65002,
            1.15,
            0,
            0,
            .59722
        ],
        41: [
            .65002,
            1.15,
            0,
            0,
            .59722
        ],
        47: [
            .65002,
            1.15,
            0,
            0,
            .81111
        ],
        91: [
            .65002,
            1.15,
            0,
            0,
            .47222
        ],
        92: [
            .65002,
            1.15,
            0,
            0,
            .81111
        ],
        93: [
            .65002,
            1.15,
            0,
            0,
            .47222
        ],
        123: [
            .65002,
            1.15,
            0,
            0,
            .66667
        ],
        125: [
            .65002,
            1.15,
            0,
            0,
            .66667
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        710: [
            0,
            .75,
            0,
            0,
            1
        ],
        732: [
            0,
            .75,
            0,
            0,
            1
        ],
        770: [
            0,
            .75,
            0,
            0,
            1
        ],
        771: [
            0,
            .75,
            0,
            0,
            1
        ],
        8719: [
            .55001,
            1.05,
            0,
            0,
            1.27778
        ],
        8720: [
            .55001,
            1.05,
            0,
            0,
            1.27778
        ],
        8721: [
            .55001,
            1.05,
            0,
            0,
            1.44445
        ],
        8730: [
            .65002,
            1.15,
            0,
            0,
            1
        ],
        8747: [
            .86225,
            1.36,
            .44445,
            0,
            .55556
        ],
        8748: [
            .862,
            1.36,
            .44445,
            0,
            .55556
        ],
        8749: [
            .862,
            1.36,
            .44445,
            0,
            .55556
        ],
        8750: [
            .86225,
            1.36,
            .44445,
            0,
            .55556
        ],
        8896: [
            .55001,
            1.05,
            0,
            0,
            1.11111
        ],
        8897: [
            .55001,
            1.05,
            0,
            0,
            1.11111
        ],
        8898: [
            .55001,
            1.05,
            0,
            0,
            1.11111
        ],
        8899: [
            .55001,
            1.05,
            0,
            0,
            1.11111
        ],
        8968: [
            .65002,
            1.15,
            0,
            0,
            .52778
        ],
        8969: [
            .65002,
            1.15,
            0,
            0,
            .52778
        ],
        8970: [
            .65002,
            1.15,
            0,
            0,
            .52778
        ],
        8971: [
            .65002,
            1.15,
            0,
            0,
            .52778
        ],
        10216: [
            .65002,
            1.15,
            0,
            0,
            .61111
        ],
        10217: [
            .65002,
            1.15,
            0,
            0,
            .61111
        ],
        10752: [
            .55001,
            1.05,
            0,
            0,
            1.51112
        ],
        10753: [
            .55001,
            1.05,
            0,
            0,
            1.51112
        ],
        10754: [
            .55001,
            1.05,
            0,
            0,
            1.51112
        ],
        10756: [
            .55001,
            1.05,
            0,
            0,
            1.11111
        ],
        10758: [
            .55001,
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
            .25
        ],
        40: [
            .95003,
            1.45,
            0,
            0,
            .73611
        ],
        41: [
            .95003,
            1.45,
            0,
            0,
            .73611
        ],
        47: [
            .95003,
            1.45,
            0,
            0,
            1.04445
        ],
        91: [
            .95003,
            1.45,
            0,
            0,
            .52778
        ],
        92: [
            .95003,
            1.45,
            0,
            0,
            1.04445
        ],
        93: [
            .95003,
            1.45,
            0,
            0,
            .52778
        ],
        123: [
            .95003,
            1.45,
            0,
            0,
            .75
        ],
        125: [
            .95003,
            1.45,
            0,
            0,
            .75
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        710: [
            0,
            .75,
            0,
            0,
            1.44445
        ],
        732: [
            0,
            .75,
            0,
            0,
            1.44445
        ],
        770: [
            0,
            .75,
            0,
            0,
            1.44445
        ],
        771: [
            0,
            .75,
            0,
            0,
            1.44445
        ],
        8730: [
            .95003,
            1.45,
            0,
            0,
            1
        ],
        8968: [
            .95003,
            1.45,
            0,
            0,
            .58334
        ],
        8969: [
            .95003,
            1.45,
            0,
            0,
            .58334
        ],
        8970: [
            .95003,
            1.45,
            0,
            0,
            .58334
        ],
        8971: [
            .95003,
            1.45,
            0,
            0,
            .58334
        ],
        10216: [
            .95003,
            1.45,
            0,
            0,
            .75
        ],
        10217: [
            .95003,
            1.45,
            0,
            0,
            .75
        ]
    },
    "Size4-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .25
        ],
        40: [
            1.25003,
            1.75,
            0,
            0,
            .79167
        ],
        41: [
            1.25003,
            1.75,
            0,
            0,
            .79167
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
            .58334
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
            .58334
        ],
        123: [
            1.25003,
            1.75,
            0,
            0,
            .80556
        ],
        125: [
            1.25003,
            1.75,
            0,
            0,
            .80556
        ],
        160: [
            0,
            0,
            0,
            0,
            .25
        ],
        710: [
            0,
            .825,
            0,
            0,
            1.8889
        ],
        732: [
            0,
            .825,
            0,
            0,
            1.8889
        ],
        770: [
            0,
            .825,
            0,
            0,
            1.8889
        ],
        771: [
            0,
            .825,
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
            .63889
        ],
        8969: [
            1.25003,
            1.75,
            0,
            0,
            .63889
        ],
        8970: [
            1.25003,
            1.75,
            0,
            0,
            .63889
        ],
        8971: [
            1.25003,
            1.75,
            0,
            0,
            .63889
        ],
        9115: [
            .64502,
            1.155,
            0,
            0,
            .875
        ],
        9116: [
            1e-5,
            .6,
            0,
            0,
            .875
        ],
        9117: [
            .64502,
            1.155,
            0,
            0,
            .875
        ],
        9118: [
            .64502,
            1.155,
            0,
            0,
            .875
        ],
        9119: [
            1e-5,
            .6,
            0,
            0,
            .875
        ],
        9120: [
            .64502,
            1.155,
            0,
            0,
            .875
        ],
        9121: [
            .64502,
            1.155,
            0,
            0,
            .66667
        ],
        9122: [
            -99e-5,
            .601,
            0,
            0,
            .66667
        ],
        9123: [
            .64502,
            1.155,
            0,
            0,
            .66667
        ],
        9124: [
            .64502,
            1.155,
            0,
            0,
            .66667
        ],
        9125: [
            -99e-5,
            .601,
            0,
            0,
            .66667
        ],
        9126: [
            .64502,
            1.155,
            0,
            0,
            .66667
        ],
        9127: [
            1e-5,
            .9,
            0,
            0,
            .88889
        ],
        9128: [
            .65002,
            1.15,
            0,
            0,
            .88889
        ],
        9129: [
            .90001,
            0,
            0,
            0,
            .88889
        ],
        9130: [
            0,
            .3,
            0,
            0,
            .88889
        ],
        9131: [
            1e-5,
            .9,
            0,
            0,
            .88889
        ],
        9132: [
            .65002,
            1.15,
            0,
            0,
            .88889
        ],
        9133: [
            .90001,
            0,
            0,
            0,
            .88889
        ],
        9143: [
            .88502,
            .915,
            0,
            0,
            1.05556
        ],
        10216: [
            1.25003,
            1.75,
            0,
            0,
            .80556
        ],
        10217: [
            1.25003,
            1.75,
            0,
            0,
            .80556
        ],
        57344: [
            -499e-5,
            .605,
            0,
            0,
            1.05556
        ],
        57345: [
            -499e-5,
            .605,
            0,
            0,
            1.05556
        ],
        57680: [
            0,
            .12,
            0,
            0,
            .45
        ],
        57681: [
            0,
            .12,
            0,
            0,
            .45
        ],
        57682: [
            0,
            .12,
            0,
            0,
            .45
        ],
        57683: [
            0,
            .12,
            0,
            0,
            .45
        ]
    },
    "Typewriter-Regular": {
        32: [
            0,
            0,
            0,
            0,
            .525
        ],
        33: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        34: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        35: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        36: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        37: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        38: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        39: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        40: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        41: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        42: [
            0,
            .52083,
            0,
            0,
            .525
        ],
        43: [
            -0.08056,
            .53055,
            0,
            0,
            .525
        ],
        44: [
            .13889,
            .125,
            0,
            0,
            .525
        ],
        45: [
            -0.08056,
            .53055,
            0,
            0,
            .525
        ],
        46: [
            0,
            .125,
            0,
            0,
            .525
        ],
        47: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        48: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        49: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        50: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        51: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        52: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        53: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        54: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        55: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        56: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        57: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        58: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        59: [
            .13889,
            .43056,
            0,
            0,
            .525
        ],
        60: [
            -0.05556,
            .55556,
            0,
            0,
            .525
        ],
        61: [
            -0.19549,
            .41562,
            0,
            0,
            .525
        ],
        62: [
            -0.05556,
            .55556,
            0,
            0,
            .525
        ],
        63: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        64: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        65: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        66: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        67: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        68: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        69: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        70: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        71: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        72: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        73: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        74: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        75: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        76: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        77: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        78: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        79: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        80: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        81: [
            .13889,
            .61111,
            0,
            0,
            .525
        ],
        82: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        83: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        84: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        85: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        86: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        87: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        88: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        89: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        90: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        91: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        92: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        93: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        94: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        95: [
            .09514,
            0,
            0,
            0,
            .525
        ],
        96: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        97: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        98: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        99: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        100: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        101: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        102: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        103: [
            .22222,
            .43056,
            0,
            0,
            .525
        ],
        104: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        105: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        106: [
            .22222,
            .61111,
            0,
            0,
            .525
        ],
        107: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        108: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        109: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        110: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        111: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        112: [
            .22222,
            .43056,
            0,
            0,
            .525
        ],
        113: [
            .22222,
            .43056,
            0,
            0,
            .525
        ],
        114: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        115: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        116: [
            0,
            .55358,
            0,
            0,
            .525
        ],
        117: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        118: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        119: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        120: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        121: [
            .22222,
            .43056,
            0,
            0,
            .525
        ],
        122: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        123: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        124: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        125: [
            .08333,
            .69444,
            0,
            0,
            .525
        ],
        126: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        127: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        160: [
            0,
            0,
            0,
            0,
            .525
        ],
        176: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        184: [
            .19445,
            0,
            0,
            0,
            .525
        ],
        305: [
            0,
            .43056,
            0,
            0,
            .525
        ],
        567: [
            .22222,
            .43056,
            0,
            0,
            .525
        ],
        711: [
            0,
            .56597,
            0,
            0,
            .525
        ],
        713: [
            0,
            .56555,
            0,
            0,
            .525
        ],
        714: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        715: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        728: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        730: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        770: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        771: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        776: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        915: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        916: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        920: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        923: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        926: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        928: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        931: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        933: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        934: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        936: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        937: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        8216: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        8217: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        8242: [
            0,
            .61111,
            0,
            0,
            .525
        ],
        9251: [
            .11111,
            .21944,
            0,
            0,
            .525
        ]
    }
}, we = {
    slant: [
        .25,
        .25,
        .25
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
        .431,
        .431,
        .431
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
        .677,
        .732,
        .925
    ],
    num2: [
        .394,
        .384,
        .387
    ],
    num3: [
        .444,
        .471,
        .504
    ],
    denom1: [
        .686,
        .752,
        1.025
    ],
    denom2: [
        .345,
        .344,
        .532
    ],
    sup1: [
        .413,
        .503,
        .504
    ],
    sup2: [
        .363,
        .431,
        .404
    ],
    sup3: [
        .289,
        .286,
        .294
    ],
    sub1: [
        .15,
        .143,
        .2
    ],
    sub2: [
        .247,
        .286,
        .4
    ],
    supDrop: [
        .386,
        .353,
        .494
    ],
    subDrop: [
        .05,
        .071,
        .1
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
        .25,
        .25,
        .25
    ],
    defaultRuleThickness: [
        .04,
        .049,
        .049
    ],
    bigOpSpacing1: [
        .111,
        .111,
        .111
    ],
    bigOpSpacing2: [
        .166,
        .166,
        .166
    ],
    bigOpSpacing3: [
        .2,
        .2,
        .2
    ],
    bigOpSpacing4: [
        .6,
        .611,
        .611
    ],
    bigOpSpacing5: [
        .1,
        .143,
        .143
    ],
    sqrtRuleThickness: [
        .04,
        .04,
        .04
    ],
    ptPerEm: [
        10,
        10,
        10
    ],
    doubleRuleSep: [
        .2,
        .2,
        .2
    ],
    arrayRuleWidth: [
        .04,
        .04,
        .04
    ],
    fboxsep: [
        .3,
        .3,
        .3
    ],
    fboxrule: [
        .04,
        .04,
        .04
    ]
}, Xt = {
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
function Wa(r, e) {
    M0[r] = e;
}
m$1(Wa, "setFontMetrics");
function Mt(r, e, t) {
    if (!M0[e]) throw new Error("Font metrics not found for font: " + e + ".");
    var a = /*#__PURE__*/ r.charCodeAt(0), n = M0[e][a];
    if (!n && r[0] in Xt && (a = /*#__PURE__*/ Xt[r[0]].charCodeAt(0), n = M0[e][a]), !n && t === "text" && kr(a) && (n = M0[e][77]), n) return {
        depth: n[0],
        height: n[1],
        italic: n[2],
        skew: n[3],
        width: n[4]
    };
}
m$1(Mt, "getCharacterMetrics");
var Qe = {};
function ja(r) {
    var e;
    if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Qe[e]) {
        var t = Qe[e] = {
            cssEmPerMu: we.quad[e] / 18
        };
        for(var a in we)we.hasOwnProperty(a) && (t[a] = we[a][e]);
    }
    return Qe[e];
}
m$1(ja, "getGlobalMetrics");
var Za = [
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
], $t = [
    .5,
    .6,
    .7,
    .8,
    .9,
    1,
    1.2,
    1.44,
    1.728,
    2.074,
    2.488
], Wt = /*#__PURE__*/ m$1(function(e, t) {
    return t.size < 2 ? e : Za[e - 1][t.size - 1];
}, "sizeAtStyle"), Ie = class r {
    static{
        m$1(this, "Options");
    }
    constructor(e){
        this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || r.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = $t[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
        for(var a in e)e.hasOwnProperty(a) && (t[a] = e[a]);
        return new r(t);
    }
    havingStyle(e) {
        return this.style === e ? this : this.extend({
            style: e,
            size: /*#__PURE__*/ Wt(this.textSize, e)
        });
    }
    havingCrampedStyle() {
        return this.havingStyle(/*#__PURE__*/ this.style.cramp());
    }
    havingSize(e) {
        return this.size === e && this.textSize === e ? this : this.extend({
            style: /*#__PURE__*/ this.style.text(),
            size: e,
            textSize: e,
            sizeMultiplier: $t[e - 1]
        });
    }
    havingBaseStyle(e) {
        e = e || this.style.text();
        var t = /*#__PURE__*/ Wt(r.BASESIZE, e);
        return this.size === t && this.textSize === r.BASESIZE && this.style === e ? this : this.extend({
            style: e,
            size: t
        });
    }
    havingBaseSizing() {
        var e;
        switch(this.style.id){
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
            style: /*#__PURE__*/ this.style.text(),
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
        return this.size !== r.BASESIZE ? [
            "sizing",
            "reset-size" + this.size,
            "size" + r.BASESIZE
        ] : [];
    }
    fontMetrics() {
        return this._fontMetrics || (this._fontMetrics = /*#__PURE__*/ ja(this.size)), this._fontMetrics;
    }
    getColor() {
        return this.phantom ? "transparent" : this.color;
    }
};
Ie.BASESIZE = 6;
var ct = {
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
}, Ka = {
    ex: true,
    em: true,
    mu: true
}, Sr = /*#__PURE__*/ m$1(function(e) {
    return typeof e != "string" && (e = e.unit), e in ct || e in Ka || e === "ex";
}, "validUnit"), Q = /*#__PURE__*/ m$1(function(e, t) {
    var a;
    if (e.unit in ct) a = ct[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
    else if (e.unit === "mu") a = t.fontMetrics().cssEmPerMu;
    else {
        var n;
        if (t.style.isTight() ? n = /*#__PURE__*/ t.havingStyle(/*#__PURE__*/ t.style.text()) : n = t, e.unit === "ex") a = n.fontMetrics().xHeight;
        else if (e.unit === "em") a = n.fontMetrics().quad;
        else throw new z("Invalid unit: '" + e.unit + "'");
        n !== t && (a *= n.sizeMultiplier / t.sizeMultiplier);
    }
    return Math.min(e.number * a, t.maxSize);
}, "calculateSize"), T = /*#__PURE__*/ m$1(function(e) {
    return +e.toFixed(4) + "em";
}, "makeEm"), V0 = /*#__PURE__*/ m$1(function(e) {
    return e.filter((t)=>t).join(" ");
}, "createClass"), Mr = /*#__PURE__*/ m$1(function(e, t, a) {
    if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a || {}, t) {
        t.style.isTight() && this.classes.push("mtight");
        var n = /*#__PURE__*/ t.getColor();
        n && (this.style.color = n);
    }
}, "initNode"), zr = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ document.createElement(e);
    t.className = /*#__PURE__*/ V0(this.classes);
    for(var a in this.style)this.style.hasOwnProperty(a) && (t.style[a] = this.style[a]);
    for(var n in this.attributes)this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
    for(var s = 0; s < this.children.length; s++)t.appendChild(/*#__PURE__*/ this.children[s].toNode());
    return t;
}, "toNode"), Ja = /[\s"'>/=\x00-\x1f]/, Ar = /*#__PURE__*/ m$1(function(e) {
    var t = "<" + e;
    this.classes.length && (t += ' class="' + R.escape(/*#__PURE__*/ V0(this.classes)) + '"');
    var a = "";
    for(var n in this.style)this.style.hasOwnProperty(n) && (a += R.hyphenate(n) + ":" + this.style[n] + ";");
    a && (t += ' style="' + R.escape(a) + '"');
    for(var s in this.attributes)if (this.attributes.hasOwnProperty(s)) {
        if (Ja.test(s)) throw new z("Invalid attribute name '" + s + "'");
        t += " " + s + '="' + R.escape(this.attributes[s]) + '"';
    }
    t += ">";
    for(var o = 0; o < this.children.length; o++)t += /*#__PURE__*/ this.children[o].toMarkup();
    return t += "</" + e + ">", t;
}, "toMarkup"), j0 = class {
    static{
        m$1(this, "Span");
    }
    constructor(e, t, a, n){
        this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Mr.call(this, e, a, n), this.children = t || [];
    }
    setAttribute(e, t) {
        this.attributes[e] = t;
    }
    hasClass(e) {
        return R.contains(this.classes, e);
    }
    toNode() {
        return zr.call(this, "span");
    }
    toMarkup() {
        return Ar.call(this, "span");
    }
}, de = class {
    static{
        m$1(this, "Anchor");
    }
    constructor(e, t, a, n){
        this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Mr.call(this, t, n), this.children = a || [], this.setAttribute("href", e);
    }
    setAttribute(e, t) {
        this.attributes[e] = t;
    }
    hasClass(e) {
        return R.contains(this.classes, e);
    }
    toNode() {
        return zr.call(this, "a");
    }
    toMarkup() {
        return Ar.call(this, "a");
    }
}, dt = class {
    static{
        m$1(this, "Img");
    }
    constructor(e, t, a){
        this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = [
            "mord"
        ], this.style = a;
    }
    hasClass(e) {
        return R.contains(this.classes, e);
    }
    toNode() {
        var e = /*#__PURE__*/ document.createElement("img");
        e.src = this.src, e.alt = this.alt, e.className = "mord";
        for(var t in this.style)this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
        return e;
    }
    toMarkup() {
        var e = '<img src="' + R.escape(this.src) + '"' + (' alt="' + R.escape(this.alt) + '"'), t = "";
        for(var a in this.style)this.style.hasOwnProperty(a) && (t += R.hyphenate(a) + ":" + this.style[a] + ";");
        return t && (e += ' style="' + R.escape(t) + '"'), e += "'/>", e;
    }
}, Qa = {
    î: "\u0131\u0302",
    ï: "\u0131\u0308",
    í: "\u0131\u0301",
    ì: "\u0131\u0300"
}, h0 = class {
    static{
        m$1(this, "SymbolNode");
    }
    constructor(e, t, a, n, s, o, h, c){
        this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = a || 0, this.italic = n || 0, this.skew = s || 0, this.width = o || 0, this.classes = h || [], this.style = c || {}, this.maxFontSize = 0;
        var v = /*#__PURE__*/ Oa(/*#__PURE__*/ this.text.charCodeAt(0));
        v && this.classes.push(v + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Qa[this.text]);
    }
    hasClass(e) {
        return R.contains(this.classes, e);
    }
    toNode() {
        var e = /*#__PURE__*/ document.createTextNode(this.text), t = null;
        this.italic > 0 && (t = /*#__PURE__*/ document.createElement("span"), t.style.marginRight = /*#__PURE__*/ T(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = /*#__PURE__*/ V0(this.classes));
        for(var a in this.style)this.style.hasOwnProperty(a) && (t = t || document.createElement("span"), t.style[a] = this.style[a]);
        return t ? (t.appendChild(e), t) : e;
    }
    toMarkup() {
        var e = false, t = "<span";
        this.classes.length && (e = true, t += ' class="', t += /*#__PURE__*/ R.escape(/*#__PURE__*/ V0(this.classes)), t += '"');
        var a = "";
        this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
        for(var n in this.style)this.style.hasOwnProperty(n) && (a += R.hyphenate(n) + ":" + this.style[n] + ";");
        a && (e = true, t += ' style="' + R.escape(a) + '"');
        var s = /*#__PURE__*/ R.escape(this.text);
        return e ? (t += ">", t += s, t += "</span>", t) : s;
    }
}, w0 = class {
    static{
        m$1(this, "SvgNode");
    }
    constructor(e, t){
        this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
    }
    toNode() {
        var e = "http://www.w3.org/2000/svg", t = /*#__PURE__*/ document.createElementNS(e, "svg");
        for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
        for(var n = 0; n < this.children.length; n++)t.appendChild(/*#__PURE__*/ this.children[n].toNode());
        return t;
    }
    toMarkup() {
        var e = '<svg xmlns="http://www.w3.org/2000/svg"';
        for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + R.escape(this.attributes[t]) + '"');
        e += ">";
        for(var a = 0; a < this.children.length; a++)e += /*#__PURE__*/ this.children[a].toMarkup();
        return e += "</svg>", e;
    }
}, z0 = class {
    static{
        m$1(this, "PathNode");
    }
    constructor(e, t){
        this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
    }
    toNode() {
        var e = "http://www.w3.org/2000/svg", t = /*#__PURE__*/ document.createElementNS(e, "path");
        return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Yt[this.pathName]), t;
    }
    toMarkup() {
        return this.alternate ? '<path d="' + R.escape(this.alternate) + '"/>' : '<path d="' + R.escape(Yt[this.pathName]) + '"/>';
    }
}, fe = class {
    static{
        m$1(this, "LineNode");
    }
    constructor(e){
        this.attributes = void 0, this.attributes = e || {};
    }
    toNode() {
        var e = "http://www.w3.org/2000/svg", t = /*#__PURE__*/ document.createElementNS(e, "line");
        for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
        return t;
    }
    toMarkup() {
        var e = "<line";
        for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + R.escape(this.attributes[t]) + '"');
        return e += "/>", e;
    }
};
function jt(r) {
    if (r instanceof h0) return r;
    throw new Error("Expected symbolNode but got " + String(r) + ".");
}
m$1(jt, "assertSymbolDomNode");
function _a(r) {
    if (r instanceof j0) return r;
    throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
m$1(_a, "assertSpan");
var e1 = {
    bin: 1,
    close: 1,
    inner: 1,
    open: 1,
    punct: 1,
    rel: 1
}, t1 = {
    "accent-token": 1,
    mathord: 1,
    "op-token": 1,
    spacing: 1,
    textord: 1
}, W = {
    math: {},
    text: {}
};
function i(r, e, t, a, n, s) {
    W[r][n] = {
        font: e,
        group: t,
        replace: a
    }, s && a && (W[r][a] = W[r][n]);
}
m$1(i, "defineSymbol");
var l = "math", S = "text", u = "main", f = "ams", j = "accent-token", C = "bin", l0 = "close", ne = "inner", E = "mathord", e0 = "op-token", d0 = "open", Ve = "punct", p = "rel", O0 = "spacing", g = "textord";
i(l, u, p, "\u2261", "\\equiv", true);
i(l, u, p, "\u227A", "\\prec", true);
i(l, u, p, "\u227B", "\\succ", true);
i(l, u, p, "\u223C", "\\sim", true);
i(l, u, p, "\u22A5", "\\perp");
i(l, u, p, "\u2AAF", "\\preceq", true);
i(l, u, p, "\u2AB0", "\\succeq", true);
i(l, u, p, "\u2243", "\\simeq", true);
i(l, u, p, "\u2223", "\\mid", true);
i(l, u, p, "\u226A", "\\ll", true);
i(l, u, p, "\u226B", "\\gg", true);
i(l, u, p, "\u224D", "\\asymp", true);
i(l, u, p, "\u2225", "\\parallel");
i(l, u, p, "\u22C8", "\\bowtie", true);
i(l, u, p, "\u2323", "\\smile", true);
i(l, u, p, "\u2291", "\\sqsubseteq", true);
i(l, u, p, "\u2292", "\\sqsupseteq", true);
i(l, u, p, "\u2250", "\\doteq", true);
i(l, u, p, "\u2322", "\\frown", true);
i(l, u, p, "\u220B", "\\ni", true);
i(l, u, p, "\u221D", "\\propto", true);
i(l, u, p, "\u22A2", "\\vdash", true);
i(l, u, p, "\u22A3", "\\dashv", true);
i(l, u, p, "\u220B", "\\owns");
i(l, u, Ve, ".", "\\ldotp");
i(l, u, Ve, "\u22C5", "\\cdotp");
i(l, u, g, "#", "\\#");
i(S, u, g, "#", "\\#");
i(l, u, g, "&", "\\&");
i(S, u, g, "&", "\\&");
i(l, u, g, "\u2135", "\\aleph", true);
i(l, u, g, "\u2200", "\\forall", true);
i(l, u, g, "\u210F", "\\hbar", true);
i(l, u, g, "\u2203", "\\exists", true);
i(l, u, g, "\u2207", "\\nabla", true);
i(l, u, g, "\u266D", "\\flat", true);
i(l, u, g, "\u2113", "\\ell", true);
i(l, u, g, "\u266E", "\\natural", true);
i(l, u, g, "\u2663", "\\clubsuit", true);
i(l, u, g, "\u2118", "\\wp", true);
i(l, u, g, "\u266F", "\\sharp", true);
i(l, u, g, "\u2662", "\\diamondsuit", true);
i(l, u, g, "\u211C", "\\Re", true);
i(l, u, g, "\u2661", "\\heartsuit", true);
i(l, u, g, "\u2111", "\\Im", true);
i(l, u, g, "\u2660", "\\spadesuit", true);
i(l, u, g, "\xA7", "\\S", true);
i(S, u, g, "\xA7", "\\S");
i(l, u, g, "\xB6", "\\P", true);
i(S, u, g, "\xB6", "\\P");
i(l, u, g, "\u2020", "\\dag");
i(S, u, g, "\u2020", "\\dag");
i(S, u, g, "\u2020", "\\textdagger");
i(l, u, g, "\u2021", "\\ddag");
i(S, u, g, "\u2021", "\\ddag");
i(S, u, g, "\u2021", "\\textdaggerdbl");
i(l, u, l0, "\u23B1", "\\rmoustache", true);
i(l, u, d0, "\u23B0", "\\lmoustache", true);
i(l, u, l0, "\u27EF", "\\rgroup", true);
i(l, u, d0, "\u27EE", "\\lgroup", true);
i(l, u, C, "\u2213", "\\mp", true);
i(l, u, C, "\u2296", "\\ominus", true);
i(l, u, C, "\u228E", "\\uplus", true);
i(l, u, C, "\u2293", "\\sqcap", true);
i(l, u, C, "\u2217", "\\ast");
i(l, u, C, "\u2294", "\\sqcup", true);
i(l, u, C, "\u25EF", "\\bigcirc", true);
i(l, u, C, "\u2219", "\\bullet", true);
i(l, u, C, "\u2021", "\\ddagger");
i(l, u, C, "\u2240", "\\wr", true);
i(l, u, C, "\u2A3F", "\\amalg");
i(l, u, C, "&", "\\And");
i(l, u, p, "\u27F5", "\\longleftarrow", true);
i(l, u, p, "\u21D0", "\\Leftarrow", true);
i(l, u, p, "\u27F8", "\\Longleftarrow", true);
i(l, u, p, "\u27F6", "\\longrightarrow", true);
i(l, u, p, "\u21D2", "\\Rightarrow", true);
i(l, u, p, "\u27F9", "\\Longrightarrow", true);
i(l, u, p, "\u2194", "\\leftrightarrow", true);
i(l, u, p, "\u27F7", "\\longleftrightarrow", true);
i(l, u, p, "\u21D4", "\\Leftrightarrow", true);
i(l, u, p, "\u27FA", "\\Longleftrightarrow", true);
i(l, u, p, "\u21A6", "\\mapsto", true);
i(l, u, p, "\u27FC", "\\longmapsto", true);
i(l, u, p, "\u2197", "\\nearrow", true);
i(l, u, p, "\u21A9", "\\hookleftarrow", true);
i(l, u, p, "\u21AA", "\\hookrightarrow", true);
i(l, u, p, "\u2198", "\\searrow", true);
i(l, u, p, "\u21BC", "\\leftharpoonup", true);
i(l, u, p, "\u21C0", "\\rightharpoonup", true);
i(l, u, p, "\u2199", "\\swarrow", true);
i(l, u, p, "\u21BD", "\\leftharpoondown", true);
i(l, u, p, "\u21C1", "\\rightharpoondown", true);
i(l, u, p, "\u2196", "\\nwarrow", true);
i(l, u, p, "\u21CC", "\\rightleftharpoons", true);
i(l, f, p, "\u226E", "\\nless", true);
i(l, f, p, "\uE010", "\\@nleqslant");
i(l, f, p, "\uE011", "\\@nleqq");
i(l, f, p, "\u2A87", "\\lneq", true);
i(l, f, p, "\u2268", "\\lneqq", true);
i(l, f, p, "\uE00C", "\\@lvertneqq");
i(l, f, p, "\u22E6", "\\lnsim", true);
i(l, f, p, "\u2A89", "\\lnapprox", true);
i(l, f, p, "\u2280", "\\nprec", true);
i(l, f, p, "\u22E0", "\\npreceq", true);
i(l, f, p, "\u22E8", "\\precnsim", true);
i(l, f, p, "\u2AB9", "\\precnapprox", true);
i(l, f, p, "\u2241", "\\nsim", true);
i(l, f, p, "\uE006", "\\@nshortmid");
i(l, f, p, "\u2224", "\\nmid", true);
i(l, f, p, "\u22AC", "\\nvdash", true);
i(l, f, p, "\u22AD", "\\nvDash", true);
i(l, f, p, "\u22EA", "\\ntriangleleft");
i(l, f, p, "\u22EC", "\\ntrianglelefteq", true);
i(l, f, p, "\u228A", "\\subsetneq", true);
i(l, f, p, "\uE01A", "\\@varsubsetneq");
i(l, f, p, "\u2ACB", "\\subsetneqq", true);
i(l, f, p, "\uE017", "\\@varsubsetneqq");
i(l, f, p, "\u226F", "\\ngtr", true);
i(l, f, p, "\uE00F", "\\@ngeqslant");
i(l, f, p, "\uE00E", "\\@ngeqq");
i(l, f, p, "\u2A88", "\\gneq", true);
i(l, f, p, "\u2269", "\\gneqq", true);
i(l, f, p, "\uE00D", "\\@gvertneqq");
i(l, f, p, "\u22E7", "\\gnsim", true);
i(l, f, p, "\u2A8A", "\\gnapprox", true);
i(l, f, p, "\u2281", "\\nsucc", true);
i(l, f, p, "\u22E1", "\\nsucceq", true);
i(l, f, p, "\u22E9", "\\succnsim", true);
i(l, f, p, "\u2ABA", "\\succnapprox", true);
i(l, f, p, "\u2246", "\\ncong", true);
i(l, f, p, "\uE007", "\\@nshortparallel");
i(l, f, p, "\u2226", "\\nparallel", true);
i(l, f, p, "\u22AF", "\\nVDash", true);
i(l, f, p, "\u22EB", "\\ntriangleright");
i(l, f, p, "\u22ED", "\\ntrianglerighteq", true);
i(l, f, p, "\uE018", "\\@nsupseteqq");
i(l, f, p, "\u228B", "\\supsetneq", true);
i(l, f, p, "\uE01B", "\\@varsupsetneq");
i(l, f, p, "\u2ACC", "\\supsetneqq", true);
i(l, f, p, "\uE019", "\\@varsupsetneqq");
i(l, f, p, "\u22AE", "\\nVdash", true);
i(l, f, p, "\u2AB5", "\\precneqq", true);
i(l, f, p, "\u2AB6", "\\succneqq", true);
i(l, f, p, "\uE016", "\\@nsubseteqq");
i(l, f, C, "\u22B4", "\\unlhd");
i(l, f, C, "\u22B5", "\\unrhd");
i(l, f, p, "\u219A", "\\nleftarrow", true);
i(l, f, p, "\u219B", "\\nrightarrow", true);
i(l, f, p, "\u21CD", "\\nLeftarrow", true);
i(l, f, p, "\u21CF", "\\nRightarrow", true);
i(l, f, p, "\u21AE", "\\nleftrightarrow", true);
i(l, f, p, "\u21CE", "\\nLeftrightarrow", true);
i(l, f, p, "\u25B3", "\\vartriangle");
i(l, f, g, "\u210F", "\\hslash");
i(l, f, g, "\u25BD", "\\triangledown");
i(l, f, g, "\u25CA", "\\lozenge");
i(l, f, g, "\u24C8", "\\circledS");
i(l, f, g, "\xAE", "\\circledR");
i(S, f, g, "\xAE", "\\circledR");
i(l, f, g, "\u2221", "\\measuredangle", true);
i(l, f, g, "\u2204", "\\nexists");
i(l, f, g, "\u2127", "\\mho");
i(l, f, g, "\u2132", "\\Finv", true);
i(l, f, g, "\u2141", "\\Game", true);
i(l, f, g, "\u2035", "\\backprime");
i(l, f, g, "\u25B2", "\\blacktriangle");
i(l, f, g, "\u25BC", "\\blacktriangledown");
i(l, f, g, "\u25A0", "\\blacksquare");
i(l, f, g, "\u29EB", "\\blacklozenge");
i(l, f, g, "\u2605", "\\bigstar");
i(l, f, g, "\u2222", "\\sphericalangle", true);
i(l, f, g, "\u2201", "\\complement", true);
i(l, f, g, "\xF0", "\\eth", true);
i(S, u, g, "\xF0", "\xF0");
i(l, f, g, "\u2571", "\\diagup");
i(l, f, g, "\u2572", "\\diagdown");
i(l, f, g, "\u25A1", "\\square");
i(l, f, g, "\u25A1", "\\Box");
i(l, f, g, "\u25CA", "\\Diamond");
i(l, f, g, "\xA5", "\\yen", true);
i(S, f, g, "\xA5", "\\yen", true);
i(l, f, g, "\u2713", "\\checkmark", true);
i(S, f, g, "\u2713", "\\checkmark");
i(l, f, g, "\u2136", "\\beth", true);
i(l, f, g, "\u2138", "\\daleth", true);
i(l, f, g, "\u2137", "\\gimel", true);
i(l, f, g, "\u03DD", "\\digamma", true);
i(l, f, g, "\u03F0", "\\varkappa");
i(l, f, d0, "\u250C", "\\@ulcorner", true);
i(l, f, l0, "\u2510", "\\@urcorner", true);
i(l, f, d0, "\u2514", "\\@llcorner", true);
i(l, f, l0, "\u2518", "\\@lrcorner", true);
i(l, f, p, "\u2266", "\\leqq", true);
i(l, f, p, "\u2A7D", "\\leqslant", true);
i(l, f, p, "\u2A95", "\\eqslantless", true);
i(l, f, p, "\u2272", "\\lesssim", true);
i(l, f, p, "\u2A85", "\\lessapprox", true);
i(l, f, p, "\u224A", "\\approxeq", true);
i(l, f, C, "\u22D6", "\\lessdot");
i(l, f, p, "\u22D8", "\\lll", true);
i(l, f, p, "\u2276", "\\lessgtr", true);
i(l, f, p, "\u22DA", "\\lesseqgtr", true);
i(l, f, p, "\u2A8B", "\\lesseqqgtr", true);
i(l, f, p, "\u2251", "\\doteqdot");
i(l, f, p, "\u2253", "\\risingdotseq", true);
i(l, f, p, "\u2252", "\\fallingdotseq", true);
i(l, f, p, "\u223D", "\\backsim", true);
i(l, f, p, "\u22CD", "\\backsimeq", true);
i(l, f, p, "\u2AC5", "\\subseteqq", true);
i(l, f, p, "\u22D0", "\\Subset", true);
i(l, f, p, "\u228F", "\\sqsubset", true);
i(l, f, p, "\u227C", "\\preccurlyeq", true);
i(l, f, p, "\u22DE", "\\curlyeqprec", true);
i(l, f, p, "\u227E", "\\precsim", true);
i(l, f, p, "\u2AB7", "\\precapprox", true);
i(l, f, p, "\u22B2", "\\vartriangleleft");
i(l, f, p, "\u22B4", "\\trianglelefteq");
i(l, f, p, "\u22A8", "\\vDash", true);
i(l, f, p, "\u22AA", "\\Vvdash", true);
i(l, f, p, "\u2323", "\\smallsmile");
i(l, f, p, "\u2322", "\\smallfrown");
i(l, f, p, "\u224F", "\\bumpeq", true);
i(l, f, p, "\u224E", "\\Bumpeq", true);
i(l, f, p, "\u2267", "\\geqq", true);
i(l, f, p, "\u2A7E", "\\geqslant", true);
i(l, f, p, "\u2A96", "\\eqslantgtr", true);
i(l, f, p, "\u2273", "\\gtrsim", true);
i(l, f, p, "\u2A86", "\\gtrapprox", true);
i(l, f, C, "\u22D7", "\\gtrdot");
i(l, f, p, "\u22D9", "\\ggg", true);
i(l, f, p, "\u2277", "\\gtrless", true);
i(l, f, p, "\u22DB", "\\gtreqless", true);
i(l, f, p, "\u2A8C", "\\gtreqqless", true);
i(l, f, p, "\u2256", "\\eqcirc", true);
i(l, f, p, "\u2257", "\\circeq", true);
i(l, f, p, "\u225C", "\\triangleq", true);
i(l, f, p, "\u223C", "\\thicksim");
i(l, f, p, "\u2248", "\\thickapprox");
i(l, f, p, "\u2AC6", "\\supseteqq", true);
i(l, f, p, "\u22D1", "\\Supset", true);
i(l, f, p, "\u2290", "\\sqsupset", true);
i(l, f, p, "\u227D", "\\succcurlyeq", true);
i(l, f, p, "\u22DF", "\\curlyeqsucc", true);
i(l, f, p, "\u227F", "\\succsim", true);
i(l, f, p, "\u2AB8", "\\succapprox", true);
i(l, f, p, "\u22B3", "\\vartriangleright");
i(l, f, p, "\u22B5", "\\trianglerighteq");
i(l, f, p, "\u22A9", "\\Vdash", true);
i(l, f, p, "\u2223", "\\shortmid");
i(l, f, p, "\u2225", "\\shortparallel");
i(l, f, p, "\u226C", "\\between", true);
i(l, f, p, "\u22D4", "\\pitchfork", true);
i(l, f, p, "\u221D", "\\varpropto");
i(l, f, p, "\u25C0", "\\blacktriangleleft");
i(l, f, p, "\u2234", "\\therefore", true);
i(l, f, p, "\u220D", "\\backepsilon");
i(l, f, p, "\u25B6", "\\blacktriangleright");
i(l, f, p, "\u2235", "\\because", true);
i(l, f, p, "\u22D8", "\\llless");
i(l, f, p, "\u22D9", "\\gggtr");
i(l, f, C, "\u22B2", "\\lhd");
i(l, f, C, "\u22B3", "\\rhd");
i(l, f, p, "\u2242", "\\eqsim", true);
i(l, u, p, "\u22C8", "\\Join");
i(l, f, p, "\u2251", "\\Doteq", true);
i(l, f, C, "\u2214", "\\dotplus", true);
i(l, f, C, "\u2216", "\\smallsetminus");
i(l, f, C, "\u22D2", "\\Cap", true);
i(l, f, C, "\u22D3", "\\Cup", true);
i(l, f, C, "\u2A5E", "\\doublebarwedge", true);
i(l, f, C, "\u229F", "\\boxminus", true);
i(l, f, C, "\u229E", "\\boxplus", true);
i(l, f, C, "\u22C7", "\\divideontimes", true);
i(l, f, C, "\u22C9", "\\ltimes", true);
i(l, f, C, "\u22CA", "\\rtimes", true);
i(l, f, C, "\u22CB", "\\leftthreetimes", true);
i(l, f, C, "\u22CC", "\\rightthreetimes", true);
i(l, f, C, "\u22CF", "\\curlywedge", true);
i(l, f, C, "\u22CE", "\\curlyvee", true);
i(l, f, C, "\u229D", "\\circleddash", true);
i(l, f, C, "\u229B", "\\circledast", true);
i(l, f, C, "\u22C5", "\\centerdot");
i(l, f, C, "\u22BA", "\\intercal", true);
i(l, f, C, "\u22D2", "\\doublecap");
i(l, f, C, "\u22D3", "\\doublecup");
i(l, f, C, "\u22A0", "\\boxtimes", true);
i(l, f, p, "\u21E2", "\\dashrightarrow", true);
i(l, f, p, "\u21E0", "\\dashleftarrow", true);
i(l, f, p, "\u21C7", "\\leftleftarrows", true);
i(l, f, p, "\u21C6", "\\leftrightarrows", true);
i(l, f, p, "\u21DA", "\\Lleftarrow", true);
i(l, f, p, "\u219E", "\\twoheadleftarrow", true);
i(l, f, p, "\u21A2", "\\leftarrowtail", true);
i(l, f, p, "\u21AB", "\\looparrowleft", true);
i(l, f, p, "\u21CB", "\\leftrightharpoons", true);
i(l, f, p, "\u21B6", "\\curvearrowleft", true);
i(l, f, p, "\u21BA", "\\circlearrowleft", true);
i(l, f, p, "\u21B0", "\\Lsh", true);
i(l, f, p, "\u21C8", "\\upuparrows", true);
i(l, f, p, "\u21BF", "\\upharpoonleft", true);
i(l, f, p, "\u21C3", "\\downharpoonleft", true);
i(l, u, p, "\u22B6", "\\origof", true);
i(l, u, p, "\u22B7", "\\imageof", true);
i(l, f, p, "\u22B8", "\\multimap", true);
i(l, f, p, "\u21AD", "\\leftrightsquigarrow", true);
i(l, f, p, "\u21C9", "\\rightrightarrows", true);
i(l, f, p, "\u21C4", "\\rightleftarrows", true);
i(l, f, p, "\u21A0", "\\twoheadrightarrow", true);
i(l, f, p, "\u21A3", "\\rightarrowtail", true);
i(l, f, p, "\u21AC", "\\looparrowright", true);
i(l, f, p, "\u21B7", "\\curvearrowright", true);
i(l, f, p, "\u21BB", "\\circlearrowright", true);
i(l, f, p, "\u21B1", "\\Rsh", true);
i(l, f, p, "\u21CA", "\\downdownarrows", true);
i(l, f, p, "\u21BE", "\\upharpoonright", true);
i(l, f, p, "\u21C2", "\\downharpoonright", true);
i(l, f, p, "\u21DD", "\\rightsquigarrow", true);
i(l, f, p, "\u21DD", "\\leadsto");
i(l, f, p, "\u21DB", "\\Rrightarrow", true);
i(l, f, p, "\u21BE", "\\restriction");
i(l, u, g, "\u2018", "`");
i(l, u, g, "$", "\\$");
i(S, u, g, "$", "\\$");
i(S, u, g, "$", "\\textdollar");
i(l, u, g, "%", "\\%");
i(S, u, g, "%", "\\%");
i(l, u, g, "_", "\\_");
i(S, u, g, "_", "\\_");
i(S, u, g, "_", "\\textunderscore");
i(l, u, g, "\u2220", "\\angle", true);
i(l, u, g, "\u221E", "\\infty", true);
i(l, u, g, "\u2032", "\\prime");
i(l, u, g, "\u25B3", "\\triangle");
i(l, u, g, "\u0393", "\\Gamma", true);
i(l, u, g, "\u0394", "\\Delta", true);
i(l, u, g, "\u0398", "\\Theta", true);
i(l, u, g, "\u039B", "\\Lambda", true);
i(l, u, g, "\u039E", "\\Xi", true);
i(l, u, g, "\u03A0", "\\Pi", true);
i(l, u, g, "\u03A3", "\\Sigma", true);
i(l, u, g, "\u03A5", "\\Upsilon", true);
i(l, u, g, "\u03A6", "\\Phi", true);
i(l, u, g, "\u03A8", "\\Psi", true);
i(l, u, g, "\u03A9", "\\Omega", true);
i(l, u, g, "A", "\u0391");
i(l, u, g, "B", "\u0392");
i(l, u, g, "E", "\u0395");
i(l, u, g, "Z", "\u0396");
i(l, u, g, "H", "\u0397");
i(l, u, g, "I", "\u0399");
i(l, u, g, "K", "\u039A");
i(l, u, g, "M", "\u039C");
i(l, u, g, "N", "\u039D");
i(l, u, g, "O", "\u039F");
i(l, u, g, "P", "\u03A1");
i(l, u, g, "T", "\u03A4");
i(l, u, g, "X", "\u03A7");
i(l, u, g, "\xAC", "\\neg", true);
i(l, u, g, "\xAC", "\\lnot");
i(l, u, g, "\u22A4", "\\top");
i(l, u, g, "\u22A5", "\\bot");
i(l, u, g, "\u2205", "\\emptyset");
i(l, f, g, "\u2205", "\\varnothing");
i(l, u, E, "\u03B1", "\\alpha", true);
i(l, u, E, "\u03B2", "\\beta", true);
i(l, u, E, "\u03B3", "\\gamma", true);
i(l, u, E, "\u03B4", "\\delta", true);
i(l, u, E, "\u03F5", "\\epsilon", true);
i(l, u, E, "\u03B6", "\\zeta", true);
i(l, u, E, "\u03B7", "\\eta", true);
i(l, u, E, "\u03B8", "\\theta", true);
i(l, u, E, "\u03B9", "\\iota", true);
i(l, u, E, "\u03BA", "\\kappa", true);
i(l, u, E, "\u03BB", "\\lambda", true);
i(l, u, E, "\u03BC", "\\mu", true);
i(l, u, E, "\u03BD", "\\nu", true);
i(l, u, E, "\u03BE", "\\xi", true);
i(l, u, E, "\u03BF", "\\omicron", true);
i(l, u, E, "\u03C0", "\\pi", true);
i(l, u, E, "\u03C1", "\\rho", true);
i(l, u, E, "\u03C3", "\\sigma", true);
i(l, u, E, "\u03C4", "\\tau", true);
i(l, u, E, "\u03C5", "\\upsilon", true);
i(l, u, E, "\u03D5", "\\phi", true);
i(l, u, E, "\u03C7", "\\chi", true);
i(l, u, E, "\u03C8", "\\psi", true);
i(l, u, E, "\u03C9", "\\omega", true);
i(l, u, E, "\u03B5", "\\varepsilon", true);
i(l, u, E, "\u03D1", "\\vartheta", true);
i(l, u, E, "\u03D6", "\\varpi", true);
i(l, u, E, "\u03F1", "\\varrho", true);
i(l, u, E, "\u03C2", "\\varsigma", true);
i(l, u, E, "\u03C6", "\\varphi", true);
i(l, u, C, "\u2217", "*", true);
i(l, u, C, "+", "+");
i(l, u, C, "\u2212", "-", true);
i(l, u, C, "\u22C5", "\\cdot", true);
i(l, u, C, "\u2218", "\\circ", true);
i(l, u, C, "\xF7", "\\div", true);
i(l, u, C, "\xB1", "\\pm", true);
i(l, u, C, "\xD7", "\\times", true);
i(l, u, C, "\u2229", "\\cap", true);
i(l, u, C, "\u222A", "\\cup", true);
i(l, u, C, "\u2216", "\\setminus", true);
i(l, u, C, "\u2227", "\\land");
i(l, u, C, "\u2228", "\\lor");
i(l, u, C, "\u2227", "\\wedge", true);
i(l, u, C, "\u2228", "\\vee", true);
i(l, u, g, "\u221A", "\\surd");
i(l, u, d0, "\u27E8", "\\langle", true);
i(l, u, d0, "\u2223", "\\lvert");
i(l, u, d0, "\u2225", "\\lVert");
i(l, u, l0, "?", "?");
i(l, u, l0, "!", "!");
i(l, u, l0, "\u27E9", "\\rangle", true);
i(l, u, l0, "\u2223", "\\rvert");
i(l, u, l0, "\u2225", "\\rVert");
i(l, u, p, "=", "=");
i(l, u, p, ":", ":");
i(l, u, p, "\u2248", "\\approx", true);
i(l, u, p, "\u2245", "\\cong", true);
i(l, u, p, "\u2265", "\\ge");
i(l, u, p, "\u2265", "\\geq", true);
i(l, u, p, "\u2190", "\\gets");
i(l, u, p, ">", "\\gt", true);
i(l, u, p, "\u2208", "\\in", true);
i(l, u, p, "\uE020", "\\@not");
i(l, u, p, "\u2282", "\\subset", true);
i(l, u, p, "\u2283", "\\supset", true);
i(l, u, p, "\u2286", "\\subseteq", true);
i(l, u, p, "\u2287", "\\supseteq", true);
i(l, f, p, "\u2288", "\\nsubseteq", true);
i(l, f, p, "\u2289", "\\nsupseteq", true);
i(l, u, p, "\u22A8", "\\models");
i(l, u, p, "\u2190", "\\leftarrow", true);
i(l, u, p, "\u2264", "\\le");
i(l, u, p, "\u2264", "\\leq", true);
i(l, u, p, "<", "\\lt", true);
i(l, u, p, "\u2192", "\\rightarrow", true);
i(l, u, p, "\u2192", "\\to");
i(l, f, p, "\u2271", "\\ngeq", true);
i(l, f, p, "\u2270", "\\nleq", true);
i(l, u, O0, "\xA0", "\\ ");
i(l, u, O0, "\xA0", "\\space");
i(l, u, O0, "\xA0", "\\nobreakspace");
i(S, u, O0, "\xA0", "\\ ");
i(S, u, O0, "\xA0", " ");
i(S, u, O0, "\xA0", "\\space");
i(S, u, O0, "\xA0", "\\nobreakspace");
i(l, u, O0, null, "\\nobreak");
i(l, u, O0, null, "\\allowbreak");
i(l, u, Ve, ",", ",");
i(l, u, Ve, ";", ";");
i(l, f, C, "\u22BC", "\\barwedge", true);
i(l, f, C, "\u22BB", "\\veebar", true);
i(l, u, C, "\u2299", "\\odot", true);
i(l, u, C, "\u2295", "\\oplus", true);
i(l, u, C, "\u2297", "\\otimes", true);
i(l, u, g, "\u2202", "\\partial", true);
i(l, u, C, "\u2298", "\\oslash", true);
i(l, f, C, "\u229A", "\\circledcirc", true);
i(l, f, C, "\u22A1", "\\boxdot", true);
i(l, u, C, "\u25B3", "\\bigtriangleup");
i(l, u, C, "\u25BD", "\\bigtriangledown");
i(l, u, C, "\u2020", "\\dagger");
i(l, u, C, "\u22C4", "\\diamond");
i(l, u, C, "\u22C6", "\\star");
i(l, u, C, "\u25C3", "\\triangleleft");
i(l, u, C, "\u25B9", "\\triangleright");
i(l, u, d0, "{", "\\{");
i(S, u, g, "{", "\\{");
i(S, u, g, "{", "\\textbraceleft");
i(l, u, l0, "}", "\\}");
i(S, u, g, "}", "\\}");
i(S, u, g, "}", "\\textbraceright");
i(l, u, d0, "{", "\\lbrace");
i(l, u, l0, "}", "\\rbrace");
i(l, u, d0, "[", "\\lbrack", true);
i(S, u, g, "[", "\\lbrack", true);
i(l, u, l0, "]", "\\rbrack", true);
i(S, u, g, "]", "\\rbrack", true);
i(l, u, d0, "(", "\\lparen", true);
i(l, u, l0, ")", "\\rparen", true);
i(S, u, g, "<", "\\textless", true);
i(S, u, g, ">", "\\textgreater", true);
i(l, u, d0, "\u230A", "\\lfloor", true);
i(l, u, l0, "\u230B", "\\rfloor", true);
i(l, u, d0, "\u2308", "\\lceil", true);
i(l, u, l0, "\u2309", "\\rceil", true);
i(l, u, g, "\\", "\\backslash");
i(l, u, g, "\u2223", "|");
i(l, u, g, "\u2223", "\\vert");
i(S, u, g, "|", "\\textbar", true);
i(l, u, g, "\u2225", "\\|");
i(l, u, g, "\u2225", "\\Vert");
i(S, u, g, "\u2225", "\\textbardbl");
i(S, u, g, "~", "\\textasciitilde");
i(S, u, g, "\\", "\\textbackslash");
i(S, u, g, "^", "\\textasciicircum");
i(l, u, p, "\u2191", "\\uparrow", true);
i(l, u, p, "\u21D1", "\\Uparrow", true);
i(l, u, p, "\u2193", "\\downarrow", true);
i(l, u, p, "\u21D3", "\\Downarrow", true);
i(l, u, p, "\u2195", "\\updownarrow", true);
i(l, u, p, "\u21D5", "\\Updownarrow", true);
i(l, u, e0, "\u2210", "\\coprod");
i(l, u, e0, "\u22C1", "\\bigvee");
i(l, u, e0, "\u22C0", "\\bigwedge");
i(l, u, e0, "\u2A04", "\\biguplus");
i(l, u, e0, "\u22C2", "\\bigcap");
i(l, u, e0, "\u22C3", "\\bigcup");
i(l, u, e0, "\u222B", "\\int");
i(l, u, e0, "\u222B", "\\intop");
i(l, u, e0, "\u222C", "\\iint");
i(l, u, e0, "\u222D", "\\iiint");
i(l, u, e0, "\u220F", "\\prod");
i(l, u, e0, "\u2211", "\\sum");
i(l, u, e0, "\u2A02", "\\bigotimes");
i(l, u, e0, "\u2A01", "\\bigoplus");
i(l, u, e0, "\u2A00", "\\bigodot");
i(l, u, e0, "\u222E", "\\oint");
i(l, u, e0, "\u222F", "\\oiint");
i(l, u, e0, "\u2230", "\\oiiint");
i(l, u, e0, "\u2A06", "\\bigsqcup");
i(l, u, e0, "\u222B", "\\smallint");
i(S, u, ne, "\u2026", "\\textellipsis");
i(l, u, ne, "\u2026", "\\mathellipsis");
i(S, u, ne, "\u2026", "\\ldots", true);
i(l, u, ne, "\u2026", "\\ldots", true);
i(l, u, ne, "\u22EF", "\\@cdots", true);
i(l, u, ne, "\u22F1", "\\ddots", true);
i(l, u, g, "\u22EE", "\\varvdots");
i(S, u, g, "\u22EE", "\\varvdots");
i(l, u, j, "\u02CA", "\\acute");
i(l, u, j, "\u02CB", "\\grave");
i(l, u, j, "\xA8", "\\ddot");
i(l, u, j, "~", "\\tilde");
i(l, u, j, "\u02C9", "\\bar");
i(l, u, j, "\u02D8", "\\breve");
i(l, u, j, "\u02C7", "\\check");
i(l, u, j, "^", "\\hat");
i(l, u, j, "\u20D7", "\\vec");
i(l, u, j, "\u02D9", "\\dot");
i(l, u, j, "\u02DA", "\\mathring");
i(l, u, E, "\uE131", "\\@imath");
i(l, u, E, "\uE237", "\\@jmath");
i(l, u, g, "\u0131", "\u0131");
i(l, u, g, "\u0237", "\u0237");
i(S, u, g, "\u0131", "\\i", true);
i(S, u, g, "\u0237", "\\j", true);
i(S, u, g, "\xDF", "\\ss", true);
i(S, u, g, "\xE6", "\\ae", true);
i(S, u, g, "\u0153", "\\oe", true);
i(S, u, g, "\xF8", "\\o", true);
i(S, u, g, "\xC6", "\\AE", true);
i(S, u, g, "\u0152", "\\OE", true);
i(S, u, g, "\xD8", "\\O", true);
i(S, u, j, "\u02CA", "\\'");
i(S, u, j, "\u02CB", "\\`");
i(S, u, j, "\u02C6", "\\^");
i(S, u, j, "\u02DC", "\\~");
i(S, u, j, "\u02C9", "\\=");
i(S, u, j, "\u02D8", "\\u");
i(S, u, j, "\u02D9", "\\.");
i(S, u, j, "\xB8", "\\c");
i(S, u, j, "\u02DA", "\\r");
i(S, u, j, "\u02C7", "\\v");
i(S, u, j, "\xA8", '\\"');
i(S, u, j, "\u02DD", "\\H");
i(S, u, j, "\u25EF", "\\textcircled");
var Tr = {
    "--": true,
    "---": true,
    "``": true,
    "''": true
};
i(S, u, g, "\u2013", "--", true);
i(S, u, g, "\u2013", "\\textendash");
i(S, u, g, "\u2014", "---", true);
i(S, u, g, "\u2014", "\\textemdash");
i(S, u, g, "\u2018", "`", true);
i(S, u, g, "\u2018", "\\textquoteleft");
i(S, u, g, "\u2019", "'", true);
i(S, u, g, "\u2019", "\\textquoteright");
i(S, u, g, "\u201C", "``", true);
i(S, u, g, "\u201C", "\\textquotedblleft");
i(S, u, g, "\u201D", "''", true);
i(S, u, g, "\u201D", "\\textquotedblright");
i(l, u, g, "\xB0", "\\degree", true);
i(S, u, g, "\xB0", "\\degree");
i(S, u, g, "\xB0", "\\textdegree", true);
i(l, u, g, "\xA3", "\\pounds");
i(l, u, g, "\xA3", "\\mathsterling", true);
i(S, u, g, "\xA3", "\\pounds");
i(S, u, g, "\xA3", "\\textsterling", true);
i(l, f, g, "\u2720", "\\maltese");
i(S, f, g, "\u2720", "\\maltese");
var Zt = '0123456789/@."';
for(ke = 0; ke < Zt.length; ke++)_e = /*#__PURE__*/ Zt.charAt(ke), i(l, u, g, _e, _e);
var _e, ke, Kt = '0123456789!@*()-=+";:?/.,';
for(Se = 0; Se < Kt.length; Se++)et = /*#__PURE__*/ Kt.charAt(Se), i(S, u, g, et, et);
var et, Se, Oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for(Me = 0; Me < Oe.length; Me++)le = /*#__PURE__*/ Oe.charAt(Me), i(l, u, E, le, le), i(S, u, g, le, le);
var le, Me;
i(l, f, g, "C", "\u2102");
i(S, f, g, "C", "\u2102");
i(l, f, g, "H", "\u210D");
i(S, f, g, "H", "\u210D");
i(l, f, g, "N", "\u2115");
i(S, f, g, "N", "\u2115");
i(l, f, g, "P", "\u2119");
i(S, f, g, "P", "\u2119");
i(l, f, g, "Q", "\u211A");
i(S, f, g, "Q", "\u211A");
i(l, f, g, "R", "\u211D");
i(S, f, g, "R", "\u211D");
i(l, f, g, "Z", "\u2124");
i(S, f, g, "Z", "\u2124");
i(l, u, E, "h", "\u210E");
i(S, u, E, "h", "\u210E");
var O = "";
for(a0 = 0; a0 < Oe.length; a0++)K = /*#__PURE__*/ Oe.charAt(a0), O = /*#__PURE__*/ String.fromCharCode(55349, 56320 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56372 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56424 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56580 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56684 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56736 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56788 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56840 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56944 + a0), i(l, u, E, K, O), i(S, u, g, K, O), a0 < 26 && (O = /*#__PURE__*/ String.fromCharCode(55349, 56632 + a0), i(l, u, E, K, O), i(S, u, g, K, O), O = /*#__PURE__*/ String.fromCharCode(55349, 56476 + a0), i(l, u, E, K, O), i(S, u, g, K, O));
var K, a0;
O = "\uD835\uDD5C";
i(l, u, E, "k", O);
i(S, u, g, "k", O);
for(P0 = 0; P0 < 10; P0++)C0 = /*#__PURE__*/ P0.toString(), O = /*#__PURE__*/ String.fromCharCode(55349, 57294 + P0), i(l, u, E, C0, O), i(S, u, g, C0, O), O = /*#__PURE__*/ String.fromCharCode(55349, 57314 + P0), i(l, u, E, C0, O), i(S, u, g, C0, O), O = /*#__PURE__*/ String.fromCharCode(55349, 57324 + P0), i(l, u, E, C0, O), i(S, u, g, C0, O), O = /*#__PURE__*/ String.fromCharCode(55349, 57334 + P0), i(l, u, E, C0, O), i(S, u, g, C0, O);
var C0, P0, ft = "\xD0\xDE\xFE";
for(ze = 0; ze < ft.length; ze++)oe = /*#__PURE__*/ ft.charAt(ze), i(l, u, E, oe, oe), i(S, u, g, oe, oe);
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
], Jt = [
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
], r1 = /*#__PURE__*/ m$1(function(e, t) {
    var a = /*#__PURE__*/ e.charCodeAt(0), n = /*#__PURE__*/ e.charCodeAt(1), s = (a - 55296) * 1024 + (n - 56320) + 65536, o = t === "math" ? 0 : 1;
    if (119808 <= s && s < 120484) {
        var h = /*#__PURE__*/ Math.floor((s - 119808) / 26);
        return [
            Ae[h][2],
            Ae[h][o]
        ];
    } else if (120782 <= s && s <= 120831) {
        var c = /*#__PURE__*/ Math.floor((s - 120782) / 10);
        return [
            Jt[c][2],
            Jt[c][o]
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
}, "wideCharacterFont"), Ue = /*#__PURE__*/ m$1(function(e, t, a) {
    return W[a][e] && W[a][e].replace && (e = W[a][e].replace), {
        value: e,
        metrics: /*#__PURE__*/ Mt(e, t, a)
    };
}, "lookupSymbol"), x0 = /*#__PURE__*/ m$1(function(e, t, a, n, s) {
    var o = /*#__PURE__*/ Ue(e, t, a), h = o.metrics;
    e = o.value;
    var c;
    if (h) {
        var v = h.italic;
        (a === "text" || n && n.font === "mathit") && (v = 0), c = new h0(e, h.height, h.depth, v, h.skew, h.width, s);
    } else typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + a + "'")), c = new h0(e, 0, 0, 0, 0, 0, s);
    if (n) {
        c.maxFontSize = n.sizeMultiplier, n.style.isTight() && c.classes.push("mtight");
        var b = /*#__PURE__*/ n.getColor();
        b && (c.style.color = b);
    }
    return c;
}, "makeSymbol"), a1 = /*#__PURE__*/ m$1(function(e, t, a, n) {
    return n === void 0 && (n = []), a.font === "boldsymbol" && Ue(e, "Main-Bold", t).metrics ? x0(e, "Main-Bold", t, a, /*#__PURE__*/ n.concat([
        "mathbf"
    ])) : e === "\\" || W[t][e].font === "main" ? x0(e, "Main-Regular", t, a, n) : x0(e, "AMS-Regular", t, a, /*#__PURE__*/ n.concat([
        "amsrm"
    ]));
}, "mathsym"), n1 = /*#__PURE__*/ m$1(function(e, t, a, n, s) {
    return s !== "textord" && Ue(e, "Math-BoldItalic", t).metrics ? {
        fontName: "Math-BoldItalic",
        fontClass: "boldsymbol"
    } : {
        fontName: "Main-Bold",
        fontClass: "mathbf"
    };
}, "boldsymbol"), i1 = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = e.mode, s = e.text, o = [
        "mord"
    ], h = n === "math" || n === "text" && t.font, c = h ? t.font : t.fontFamily, v = "", b = "";
    if (s.charCodeAt(0) === 55349 && ([v, b] = /*#__PURE__*/ r1(s, n)), v.length > 0) return x0(s, v, n, t, /*#__PURE__*/ o.concat(b));
    if (c) {
        var x, k;
        if (c === "boldsymbol") {
            var w = /*#__PURE__*/ n1(s, n, t, o, a);
            x = w.fontName, k = [
                w.fontClass
            ];
        } else h ? (x = Cr[c].fontName, k = [
            c
        ]) : (x = /*#__PURE__*/ Te(c, t.fontWeight, t.fontShape), k = [
            c,
            t.fontWeight,
            t.fontShape
        ]);
        if (Ue(s, x, n).metrics) return x0(s, x, n, t, /*#__PURE__*/ o.concat(k));
        if (Tr.hasOwnProperty(s) && x.slice(0, 10) === "Typewriter") {
            for(var A = [], B = 0; B < s.length; B++)A.push(/*#__PURE__*/ x0(s[B], x, n, t, /*#__PURE__*/ o.concat(k)));
            return Dr(A);
        }
    }
    if (a === "mathord") return x0(s, "Math-Italic", n, t, /*#__PURE__*/ o.concat([
        "mathnormal"
    ]));
    if (a === "textord") {
        var N = W[n][s] && W[n][s].font;
        if (N === "ams") {
            var q = /*#__PURE__*/ Te("amsrm", t.fontWeight, t.fontShape);
            return x0(s, q, n, t, /*#__PURE__*/ o.concat("amsrm", t.fontWeight, t.fontShape));
        } else if (N === "main" || !N) {
            var F = /*#__PURE__*/ Te("textrm", t.fontWeight, t.fontShape);
            return x0(s, F, n, t, /*#__PURE__*/ o.concat(t.fontWeight, t.fontShape));
        } else {
            var H = /*#__PURE__*/ Te(N, t.fontWeight, t.fontShape);
            return x0(s, H, n, t, /*#__PURE__*/ o.concat(H, t.fontWeight, t.fontShape));
        }
    } else throw new Error("unexpected type: " + a + " in makeOrd");
}, "makeOrd"), s1 = /*#__PURE__*/ m$1((r, e)=>{
    if (V0(r.classes) !== V0(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize) return false;
    if (r.classes.length === 1) {
        var t = r.classes[0];
        if (t === "mbin" || t === "mord") return false;
    }
    for(var a in r.style)if (r.style.hasOwnProperty(a) && r.style[a] !== e.style[a]) return false;
    for(var n in e.style)if (e.style.hasOwnProperty(n) && r.style[n] !== e.style[n]) return false;
    return true;
}, "canCombine"), l1 = /*#__PURE__*/ m$1((r)=>{
    for(var e = 0; e < r.length - 1; e++){
        var t = r[e], a = r[e + 1];
        t instanceof h0 && a instanceof h0 && s1(t, a) && (t.text += a.text, t.height = /*#__PURE__*/ Math.max(t.height, a.height), t.depth = /*#__PURE__*/ Math.max(t.depth, a.depth), t.italic = a.italic, r.splice(e + 1, 1), e--);
    }
    return r;
}, "tryCombineChars"), zt = /*#__PURE__*/ m$1(function(e) {
    for(var t = 0, a = 0, n = 0, s = 0; s < e.children.length; s++){
        var o = e.children[s];
        o.height > t && (t = o.height), o.depth > a && (a = o.depth), o.maxFontSize > n && (n = o.maxFontSize);
    }
    e.height = t, e.depth = a, e.maxFontSize = n;
}, "sizeElementFromChildren"), u0 = /*#__PURE__*/ m$1(function(e, t, a, n) {
    var s = new j0(e, t, a, n);
    return zt(s), s;
}, "makeSpan"), Br = /*#__PURE__*/ m$1((r, e, t, a)=>new j0(r, e, t, a), "makeSvgSpan"), o1 = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = /*#__PURE__*/ u0([
        e
    ], [], t);
    return n.height = /*#__PURE__*/ Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = /*#__PURE__*/ T(n.height), n.maxFontSize = 1, n;
}, "makeLineSpan"), u1 = /*#__PURE__*/ m$1(function(e, t, a, n) {
    var s = new de(e, t, a, n);
    return zt(s), s;
}, "makeAnchor"), Dr = /*#__PURE__*/ m$1(function(e) {
    var t = new W0(e);
    return zt(t), t;
}, "makeFragment"), h1 = /*#__PURE__*/ m$1(function(e, t) {
    return e instanceof W0 ? u0([], [
        e
    ], t) : e;
}, "wrapFragment"), m1 = /*#__PURE__*/ m$1(function(e) {
    if (e.positionType === "individualShift") {
        for(var t = e.children, a = [
            t[0]
        ], n = -t[0].shift - t[0].elem.depth, s = n, o = 1; o < t.length; o++){
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
        for(var b = e.positionData, x = 0; x < e.children.length; x++){
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
}, "getVListChildrenAndDepth"), c1 = /*#__PURE__*/ m$1(function(e, t) {
    for(var { children: a, depth: n } = m1(e), s = 0, o = 0; o < a.length; o++){
        var h = a[o];
        if (h.type === "elem") {
            var c = h.elem;
            s = /*#__PURE__*/ Math.max(s, c.maxFontSize, c.height);
        }
    }
    s += 2;
    var v = /*#__PURE__*/ u0([
        "pstrut"
    ], []);
    v.style.height = /*#__PURE__*/ T(s);
    for(var b = [], x = n, k = n, w = n, A = 0; A < a.length; A++){
        var B = a[A];
        if (B.type === "kern") w += B.size;
        else {
            var N = B.elem, q = B.wrapperClasses || [], F = B.wrapperStyle || {}, H = /*#__PURE__*/ u0(q, [
                v,
                N
            ], void 0, F);
            H.style.top = /*#__PURE__*/ T(-s - w - N.depth), B.marginLeft && (H.style.marginLeft = B.marginLeft), B.marginRight && (H.style.marginRight = B.marginRight), b.push(H), w += N.height + N.depth;
        }
        x = /*#__PURE__*/ Math.min(x, w), k = /*#__PURE__*/ Math.max(k, w);
    }
    var U = /*#__PURE__*/ u0([
        "vlist"
    ], b);
    U.style.height = /*#__PURE__*/ T(k);
    var P;
    if (x < 0) {
        var Y = /*#__PURE__*/ u0([], []), V = /*#__PURE__*/ u0([
            "vlist"
        ], [
            Y
        ]);
        V.style.height = /*#__PURE__*/ T(-x);
        var Z = /*#__PURE__*/ u0([
            "vlist-s"
        ], [
            new h0("\u200B")
        ]);
        P = [
            /*#__PURE__*/ u0([
                "vlist-r"
            ], [
                U,
                Z
            ]),
            /*#__PURE__*/ u0([
                "vlist-r"
            ], [
                V
            ])
        ];
    } else P = [
        /*#__PURE__*/ u0([
            "vlist-r"
        ], [
            U
        ])
    ];
    var X = /*#__PURE__*/ u0([
        "vlist-t"
    ], P);
    return P.length === 2 && X.classes.push("vlist-t2"), X.height = k, X.depth = -x, X;
}, "makeVList"), d1 = /*#__PURE__*/ m$1((r, e)=>{
    var t = /*#__PURE__*/ u0([
        "mspace"
    ], [], e), a = /*#__PURE__*/ Q(r, e);
    return t.style.marginRight = /*#__PURE__*/ T(a), t;
}, "makeGlue"), Te = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = "";
    switch(e){
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
}, "retrieveTextFontName"), Cr = {
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
    mathsfit: {
        variant: "sans-serif-italic",
        fontName: "SansSerif-Italic"
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
}, Nr = {
    vec: [
        "vec",
        .471,
        .714
    ],
    oiintSize1: [
        "oiintSize1",
        .957,
        .499
    ],
    oiintSize2: [
        "oiintSize2",
        1.472,
        .659
    ],
    oiiintSize1: [
        "oiiintSize1",
        1.304,
        .499
    ],
    oiiintSize2: [
        "oiiintSize2",
        1.98,
        .659
    ]
}, f1 = /*#__PURE__*/ m$1(function(e, t) {
    var [a, n, s] = Nr[e], o = new z0(a), h = new w0([
        o
    ], {
        width: /*#__PURE__*/ T(n),
        height: /*#__PURE__*/ T(s),
        style: "width:" + T(n),
        viewBox: "0 0 " + 1e3 * n + " " + 1e3 * s,
        preserveAspectRatio: "xMinYMin"
    }), c = /*#__PURE__*/ Br([
        "overlay"
    ], [
        h
    ], t);
    return c.height = s, c.style.height = /*#__PURE__*/ T(s), c.style.width = /*#__PURE__*/ T(n), c;
}, "staticSvg"), y = {
    fontMap: Cr,
    makeSymbol: x0,
    mathsym: a1,
    makeSpan: u0,
    makeSvgSpan: Br,
    makeLineSpan: o1,
    makeAnchor: u1,
    makeFragment: Dr,
    wrapFragment: h1,
    makeVList: c1,
    makeOrd: i1,
    makeGlue: d1,
    staticSvg: f1,
    svgData: Nr,
    tryCombineChars: l1
}, J = {
    number: 3,
    unit: "mu"
}, $0 = {
    number: 4,
    unit: "mu"
}, N0 = {
    number: 5,
    unit: "mu"
}, p1 = {
    mord: {
        mop: J,
        mbin: $0,
        mrel: N0,
        minner: J
    },
    mop: {
        mord: J,
        mop: J,
        mrel: N0,
        minner: J
    },
    mbin: {
        mord: $0,
        mop: $0,
        mopen: $0,
        minner: $0
    },
    mrel: {
        mord: N0,
        mop: N0,
        mopen: N0,
        minner: N0
    },
    mopen: {},
    mclose: {
        mop: J,
        mbin: $0,
        mrel: N0,
        minner: J
    },
    mpunct: {
        mord: J,
        mop: J,
        mrel: N0,
        mopen: J,
        mclose: J,
        mpunct: J,
        minner: J
    },
    minner: {
        mord: J,
        mop: J,
        mbin: $0,
        mrel: N0,
        mopen: J,
        mpunct: J,
        minner: J
    }
}, v1 = {
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
}, qr = {}, Fe = {}, He = {};
function D(r) {
    for(var { type: e, names: t, props: a, handler: n, htmlBuilder: s, mathmlBuilder: o } = r, h = {
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
    }, c = 0; c < t.length; ++c)qr[t[c]] = h;
    e && (s && (Fe[e] = s), o && (He[e] = o));
}
m$1(D, "defineFunction");
function Z0(r) {
    var { type: e, htmlBuilder: t, mathmlBuilder: a } = r;
    D({
        type: e,
        names: [],
        props: {
            numArgs: 0
        },
        handler () {
            throw new Error("Should never be called.");
        },
        htmlBuilder: t,
        mathmlBuilder: a
    });
}
m$1(Z0, "defineFunctionBuilders");
var Le = /*#__PURE__*/ m$1(function(e) {
    return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, "normalizeArgument"), _ = /*#__PURE__*/ m$1(function(e) {
    return e.type === "ordgroup" ? e.body : [
        e
    ];
}, "ordargument"), E0 = y.makeSpan, g1 = [
    "leftmost",
    "mbin",
    "mopen",
    "mrel",
    "mop",
    "mpunct"
], b1 = [
    "rightmost",
    "mrel",
    "mclose",
    "mpunct"
], y1 = {
    display: I.DISPLAY,
    text: I.TEXT,
    script: I.SCRIPT,
    scriptscript: I.SCRIPTSCRIPT
}, x1 = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner"
}, r0 = /*#__PURE__*/ m$1(function(e, t, a, n) {
    n === void 0 && (n = [
        null,
        null
    ]);
    for(var s = [], o = 0; o < e.length; o++){
        var h = /*#__PURE__*/ G(e[o], t);
        if (h instanceof W0) {
            var c = h.children;
            s.push(...c);
        } else s.push(h);
    }
    if (y.tryCombineChars(s), !a) return s;
    var v = t;
    if (e.length === 1) {
        var b = e[0];
        b.type === "sizing" ? v = /*#__PURE__*/ t.havingSize(b.size) : b.type === "styling" && (v = /*#__PURE__*/ t.havingStyle(y1[b.style]));
    }
    var x = /*#__PURE__*/ E0([
        n[0] || "leftmost"
    ], [], t), k = /*#__PURE__*/ E0([
        n[1] || "rightmost"
    ], [], t), w = a === "root";
    return Qt(s, (A, B)=>{
        var N = B.classes[0], q = A.classes[0];
        N === "mbin" && R.contains(b1, q) ? B.classes[0] = "mord" : q === "mbin" && R.contains(g1, N) && (A.classes[0] = "mord");
    }, {
        node: x
    }, k, w), Qt(s, (A, B)=>{
        var N = /*#__PURE__*/ pt(B), q = /*#__PURE__*/ pt(A), F = N && q ? A.hasClass("mtight") ? v1[N][q] : p1[N][q] : null;
        if (F) return y.makeGlue(F, v);
    }, {
        node: x
    }, k, w), s;
}, "buildExpression"), Qt = /*#__PURE__*/ m$1(function r(e, t, a, n, s) {
    n && e.push(n);
    for(var o = 0; o < e.length; o++){
        var h = e[o], c = /*#__PURE__*/ Rr(h);
        if (c) {
            r(c.children, t, a, null, s);
            continue;
        }
        var v = !h.hasClass("mspace");
        if (v) {
            var b = /*#__PURE__*/ t(h, a.node);
            b && (a.insertAfter ? a.insertAfter(b) : (e.unshift(b), o++));
        }
        v ? a.node = h : s && h.hasClass("newline") && (a.node = /*#__PURE__*/ E0([
            "leftmost"
        ])), a.insertAfter = /*#__PURE__*/ ((x)=>(k)=>{
                e.splice(x + 1, 0, k), o++;
            })(o);
    }
    n && e.pop();
}, "traverseNonSpaceNodes"), Rr = /*#__PURE__*/ m$1(function(e) {
    return e instanceof W0 || e instanceof de || e instanceof j0 && e.hasClass("enclosing") ? e : null;
}, "checkPartialGroup"), w1 = /*#__PURE__*/ m$1(function r(e, t) {
    var a = /*#__PURE__*/ Rr(e);
    if (a) {
        var n = a.children;
        if (n.length) {
            if (t === "right") return r(n[n.length - 1], "right");
            if (t === "left") return r(n[0], "left");
        }
    }
    return e;
}, "getOutermostNode"), pt = /*#__PURE__*/ m$1(function(e, t) {
    return e ? (t && (e = /*#__PURE__*/ w1(e, t)), x1[e.classes[0]] || null) : null;
}, "getTypeOfDomTree"), pe = /*#__PURE__*/ m$1(function(e, t) {
    var a = /*#__PURE__*/ [
        "nulldelimiter"
    ].concat(/*#__PURE__*/ e.baseSizingClasses());
    return E0(/*#__PURE__*/ t.concat(a));
}, "makeNullDelimiter"), G = /*#__PURE__*/ m$1(function(e, t, a) {
    if (!e) return E0();
    if (Fe[e.type]) {
        var n = /*#__PURE__*/ Fe[e.type](e, t);
        if (a && t.size !== a.size) {
            n = /*#__PURE__*/ E0(/*#__PURE__*/ t.sizingClasses(a), [
                n
            ], t);
            var s = t.sizeMultiplier / a.sizeMultiplier;
            n.height *= s, n.depth *= s;
        }
        return n;
    } else throw new z("Got group of unknown type: '" + e.type + "'");
}, "buildGroup");
function Be(r, e) {
    var t = /*#__PURE__*/ E0([
        "base"
    ], r, e), a = /*#__PURE__*/ E0([
        "strut"
    ]);
    return a.style.height = /*#__PURE__*/ T(t.height + t.depth), t.depth && (a.style.verticalAlign = /*#__PURE__*/ T(-t.depth)), t.children.unshift(a), t;
}
m$1(Be, "buildHTMLUnbreakable");
function vt(r, e) {
    var t = null;
    r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
    var a = /*#__PURE__*/ r0(r, e, "root"), n;
    a.length === 2 && a[1].hasClass("tag") && (n = /*#__PURE__*/ a.pop());
    for(var s = [], o = [], h = 0; h < a.length; h++)if (o.push(a[h]), a[h].hasClass("mbin") || a[h].hasClass("mrel") || a[h].hasClass("allowbreak")) {
        for(var c = false; h < a.length - 1 && a[h + 1].hasClass("mspace") && !a[h + 1].hasClass("newline");)h++, o.push(a[h]), a[h].hasClass("nobreak") && (c = true);
        c || (s.push(/*#__PURE__*/ Be(o, e)), o = []);
    } else a[h].hasClass("newline") && (o.pop(), o.length > 0 && (s.push(/*#__PURE__*/ Be(o, e)), o = []), s.push(a[h]));
    o.length > 0 && s.push(/*#__PURE__*/ Be(o, e));
    var v;
    t ? (v = /*#__PURE__*/ Be(/*#__PURE__*/ r0(t, e, true)), v.classes = [
        "tag"
    ], s.push(v)) : n && s.push(n);
    var b = /*#__PURE__*/ E0([
        "katex-html"
    ], s);
    if (b.setAttribute("aria-hidden", "true"), v) {
        var x = v.children[0];
        x.style.height = /*#__PURE__*/ T(b.height + b.depth), b.depth && (x.style.verticalAlign = /*#__PURE__*/ T(-b.depth));
    }
    return b;
}
m$1(vt, "buildHTML");
function Er(r) {
    return new W0(r);
}
m$1(Er, "newDocumentFragment");
var i0 = class {
    static{
        m$1(this, "MathNode");
    }
    constructor(e, t, a){
        this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = a || [];
    }
    setAttribute(e, t) {
        this.attributes[e] = t;
    }
    getAttribute(e) {
        return this.attributes[e];
    }
    toNode() {
        var e = /*#__PURE__*/ document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
        for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
        this.classes.length > 0 && (e.className = /*#__PURE__*/ V0(this.classes));
        for(var a = 0; a < this.children.length; a++)if (this.children[a] instanceof v0 && this.children[a + 1] instanceof v0) {
            for(var n = this.children[a].toText() + this.children[++a].toText(); this.children[a + 1] instanceof v0;)n += /*#__PURE__*/ this.children[++a].toText();
            e.appendChild(/*#__PURE__*/ new v0(n).toNode());
        } else e.appendChild(/*#__PURE__*/ this.children[a].toNode());
        return e;
    }
    toMarkup() {
        var e = "<" + this.type;
        for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += /*#__PURE__*/ R.escape(this.attributes[t]), e += '"');
        this.classes.length > 0 && (e += ' class ="' + R.escape(/*#__PURE__*/ V0(this.classes)) + '"'), e += ">";
        for(var a = 0; a < this.children.length; a++)e += /*#__PURE__*/ this.children[a].toMarkup();
        return e += "</" + this.type + ">", e;
    }
    toText() {
        return this.children.map((e)=>e.toText()).join("");
    }
}, v0 = class {
    static{
        m$1(this, "TextNode");
    }
    constructor(e){
        this.text = void 0, this.text = e;
    }
    toNode() {
        return document.createTextNode(this.text);
    }
    toMarkup() {
        return R.escape(/*#__PURE__*/ this.toText());
    }
    toText() {
        return this.text;
    }
}, gt = class {
    static{
        m$1(this, "SpaceNode");
    }
    constructor(e){
        this.width = void 0, this.character = void 0, this.width = e, e >= .05555 && e <= .05556 ? this.character = "\u200A" : e >= .1666 && e <= .1667 ? this.character = "\u2009" : e >= .2222 && e <= .2223 ? this.character = "\u2005" : e >= .2777 && e <= .2778 ? this.character = "\u2005\u200A" : e >= -0.05556 && e <= -0.05555 ? this.character = "\u200A\u2063" : e >= -0.1667 && e <= -0.1666 ? this.character = "\u2009\u2063" : e >= -0.2223 && e <= -0.2222 ? this.character = "\u205F\u2063" : e >= -0.2778 && e <= -0.2777 ? this.character = "\u2005\u2063" : this.character = null;
    }
    toNode() {
        if (this.character) return document.createTextNode(this.character);
        var e = /*#__PURE__*/ document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
        return e.setAttribute("width", /*#__PURE__*/ T(this.width)), e;
    }
    toMarkup() {
        return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + T(this.width) + '"/>';
    }
    toText() {
        return this.character ? this.character : " ";
    }
}, M = {
    MathNode: i0,
    TextNode: v0,
    SpaceNode: gt,
    newDocumentFragment: Er
}, b0 = /*#__PURE__*/ m$1(function(e, t, a) {
    return W[t][e] && W[t][e].replace && e.charCodeAt(0) !== 55349 && !(Tr.hasOwnProperty(e) && a && (a.fontFamily && a.fontFamily.slice(4, 6) === "tt" || a.font && a.font.slice(4, 6) === "tt")) && (e = W[t][e].replace), new M.TextNode(e);
}, "makeText"), At = /*#__PURE__*/ m$1(function(e) {
    return e.length === 1 ? e[0] : new M.MathNode("mrow", e);
}, "makeRow"), Tt = /*#__PURE__*/ m$1(function(e, t) {
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
    if (a === "mathsfit") return "sans-serif-italic";
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
    return Mt(s, o, n) ? y.fontMap[a].variant : null;
}, "getVariant");
function tt(r) {
    if (!r) return false;
    if (r.type === "mi" && r.children.length === 1) {
        var e = r.children[0];
        return e instanceof v0 && e.text === ".";
    } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
        var t = r.children[0];
        return t instanceof v0 && t.text === ",";
    } else return false;
}
m$1(tt, "isNumberPunctuation");
var m0 = /*#__PURE__*/ m$1(function(e, t, a) {
    if (e.length === 1) {
        var n = /*#__PURE__*/ $(e[0], t);
        return a && n instanceof i0 && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [
            n
        ];
    }
    for(var s = [], o, h = 0; h < e.length; h++){
        var c = /*#__PURE__*/ $(e[h], t);
        if (c instanceof i0 && o instanceof i0) {
            if (c.type === "mtext" && o.type === "mtext" && c.getAttribute("mathvariant") === o.getAttribute("mathvariant")) {
                o.children.push(...c.children);
                continue;
            } else if (c.type === "mn" && o.type === "mn") {
                o.children.push(...c.children);
                continue;
            } else if (tt(c) && o.type === "mn") {
                o.children.push(...c.children);
                continue;
            } else if (c.type === "mn" && tt(o)) c.children = [
                ...o.children,
                ...c.children
            ], s.pop();
            else if ((c.type === "msup" || c.type === "msub") && c.children.length >= 1 && (o.type === "mn" || tt(o))) {
                var v = c.children[0];
                v instanceof i0 && v.type === "mn" && (v.children = [
                    ...o.children,
                    ...v.children
                ], s.pop());
            } else if (o.type === "mi" && o.children.length === 1) {
                var b = o.children[0];
                if (b instanceof v0 && b.text === "\u0338" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
                    var x = c.children[0];
                    x instanceof v0 && x.text.length > 0 && (x.text = x.text.slice(0, 1) + "\u0338" + x.text.slice(1), s.pop());
                }
            }
        }
        s.push(c), o = c;
    }
    return s;
}, "buildExpression"), U0 = /*#__PURE__*/ m$1(function(e, t, a) {
    return At(/*#__PURE__*/ m0(e, t, a));
}, "buildExpressionRow"), $ = /*#__PURE__*/ m$1(function(e, t) {
    if (!e) return new M.MathNode("mrow");
    if (He[e.type]) {
        var a = /*#__PURE__*/ He[e.type](e, t);
        return a;
    } else throw new z("Got group of unknown type: '" + e.type + "'");
}, "buildGroup");
function _t(r, e, t, a, n) {
    var s = /*#__PURE__*/ m0(r, t), o;
    s.length === 1 && s[0] instanceof i0 && R.contains([
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
m$1(_t, "buildMathML");
var Ir = /*#__PURE__*/ m$1(function(e) {
    return new Ie({
        style: e.displayMode ? I.DISPLAY : I.TEXT,
        maxSize: e.maxSize,
        minRuleThickness: e.minRuleThickness
    });
}, "optionsFromSettings"), Or = /*#__PURE__*/ m$1(function(e, t) {
    if (t.displayMode) {
        var a = [
            "katex-display"
        ];
        t.leqno && a.push("leqno"), t.fleqn && a.push("fleqn"), e = /*#__PURE__*/ y.makeSpan(a, [
            e
        ]);
    }
    return e;
}, "displayWrap"), k1 = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = /*#__PURE__*/ Ir(a), s;
    if (a.output === "mathml") return _t(e, t, n, a.displayMode, true);
    if (a.output === "html") {
        var o = /*#__PURE__*/ vt(e, n);
        s = /*#__PURE__*/ y.makeSpan([
            "katex"
        ], [
            o
        ]);
    } else {
        var h = /*#__PURE__*/ _t(e, t, n, a.displayMode, false), c = /*#__PURE__*/ vt(e, n);
        s = /*#__PURE__*/ y.makeSpan([
            "katex"
        ], [
            h,
            c
        ]);
    }
    return Or(s, a);
}, "buildTree"), S1 = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = /*#__PURE__*/ Ir(a), s = /*#__PURE__*/ vt(e, n), o = /*#__PURE__*/ y.makeSpan([
        "katex"
    ], [
        s
    ]);
    return Or(o, a);
}, "buildHTMLTree"), M1 = {
    widehat: "^",
    widecheck: "\u02C7",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "\u2190",
    underleftarrow: "\u2190",
    xleftarrow: "\u2190",
    overrightarrow: "\u2192",
    underrightarrow: "\u2192",
    xrightarrow: "\u2192",
    underbrace: "\u23DF",
    overbrace: "\u23DE",
    overgroup: "\u23E0",
    undergroup: "\u23E1",
    overleftrightarrow: "\u2194",
    underleftrightarrow: "\u2194",
    xleftrightarrow: "\u2194",
    Overrightarrow: "\u21D2",
    xRightarrow: "\u21D2",
    overleftharpoon: "\u21BC",
    xleftharpoonup: "\u21BC",
    overrightharpoon: "\u21C0",
    xrightharpoonup: "\u21C0",
    xLeftarrow: "\u21D0",
    xLeftrightarrow: "\u21D4",
    xhookleftarrow: "\u21A9",
    xhookrightarrow: "\u21AA",
    xmapsto: "\u21A6",
    xrightharpoondown: "\u21C1",
    xleftharpoondown: "\u21BD",
    xrightleftharpoons: "\u21CC",
    xleftrightharpoons: "\u21CB",
    xtwoheadleftarrow: "\u219E",
    xtwoheadrightarrow: "\u21A0",
    xlongequal: "=",
    xtofrom: "\u21C4",
    xrightleftarrows: "\u21C4",
    xrightequilibrium: "\u21CC",
    xleftequilibrium: "\u21CB",
    "\\cdrightarrow": "\u2192",
    "\\cdleftarrow": "\u2190",
    "\\cdlongequal": "="
}, z1 = /*#__PURE__*/ m$1(function(e) {
    var t = new M.MathNode("mo", [
        new M.TextNode(M1[e.replace(/^\\/, "")])
    ]);
    return t.setAttribute("stretchy", "true"), t;
}, "mathMLnode"), A1 = {
    overrightarrow: [
        [
            "rightarrow"
        ],
        .888,
        522,
        "xMaxYMin"
    ],
    overleftarrow: [
        [
            "leftarrow"
        ],
        .888,
        522,
        "xMinYMin"
    ],
    underrightarrow: [
        [
            "rightarrow"
        ],
        .888,
        522,
        "xMaxYMin"
    ],
    underleftarrow: [
        [
            "leftarrow"
        ],
        .888,
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
        .888,
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
        .888,
        522,
        "xMinYMin"
    ],
    xleftharpoonup: [
        [
            "leftharpoon"
        ],
        .888,
        522,
        "xMinYMin"
    ],
    xleftharpoondown: [
        [
            "leftharpoondown"
        ],
        .888,
        522,
        "xMinYMin"
    ],
    overrightharpoon: [
        [
            "rightharpoon"
        ],
        .888,
        522,
        "xMaxYMin"
    ],
    xrightharpoonup: [
        [
            "rightharpoon"
        ],
        .888,
        522,
        "xMaxYMin"
    ],
    xrightharpoondown: [
        [
            "rightharpoondown"
        ],
        .888,
        522,
        "xMaxYMin"
    ],
    xlongequal: [
        [
            "longequal"
        ],
        .888,
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
        .888,
        334,
        "xMinYMin"
    ],
    xtwoheadrightarrow: [
        [
            "twoheadrightarrow"
        ],
        .888,
        334,
        "xMaxYMin"
    ],
    overleftrightarrow: [
        [
            "leftarrow",
            "rightarrow"
        ],
        .888,
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
        .888,
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
        .888,
        522
    ],
    underlinesegment: [
        [
            "leftlinesegment",
            "rightlinesegment"
        ],
        .888,
        522
    ],
    overgroup: [
        [
            "leftgroup",
            "rightgroup"
        ],
        .888,
        342
    ],
    undergroup: [
        [
            "leftgroupunder",
            "rightgroupunder"
        ],
        .888,
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
}, T1 = /*#__PURE__*/ m$1(function(e) {
    return e.type === "ordgroup" ? e.body.length : 1;
}, "groupLength"), B1 = /*#__PURE__*/ m$1(function(e, t) {
    function a() {
        var h = 4e5, c = /*#__PURE__*/ e.label.slice(1);
        if (R.contains([
            "widehat",
            "widecheck",
            "widetilde",
            "utilde"
        ], c)) {
            var v = e, b = /*#__PURE__*/ T1(v.base), x, k, w;
            if (b > 5) c === "widehat" || c === "widecheck" ? (x = 420, h = 2364, w = .42, k = c + "4") : (x = 312, h = 2340, w = .34, k = "tilde4");
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
                    .24,
                    .3,
                    .3,
                    .36,
                    .42
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
                    .26,
                    .286,
                    .3,
                    .306,
                    .34
                ][A], k = "tilde" + A);
            }
            var B = new z0(k), N = new w0([
                B
            ], {
                width: "100%",
                height: /*#__PURE__*/ T(w),
                viewBox: "0 0 " + h + " " + x,
                preserveAspectRatio: "none"
            });
            return {
                span: /*#__PURE__*/ y.makeSvgSpan([], [
                    N
                ], t),
                minWidth: 0,
                height: w
            };
        } else {
            var q = [], F = A1[c], [H, U, P] = F, Y = P / 1e3, V = H.length, Z, X;
            if (V === 1) {
                var D0 = F[3];
                Z = [
                    "hide-tail"
                ], X = [
                    D0
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
            for(var n0 = 0; n0 < V; n0++){
                var t0 = new z0(H[n0]), X0 = new w0([
                    t0
                ], {
                    width: "400em",
                    height: /*#__PURE__*/ T(Y),
                    viewBox: "0 0 " + h + " " + P,
                    preserveAspectRatio: X[n0] + " slice"
                }), o0 = /*#__PURE__*/ y.makeSvgSpan([
                    Z[n0]
                ], [
                    X0
                ], t);
                if (V === 1) return {
                    span: o0,
                    minWidth: U,
                    height: Y
                };
                o0.style.height = /*#__PURE__*/ T(Y), q.push(o0);
            }
            return {
                span: /*#__PURE__*/ y.makeSpan([
                    "stretchy"
                ], q, t),
                minWidth: U,
                height: Y
            };
        }
    }
    m$1(a, "buildSvgSpan_");
    var { span: n, minWidth: s, height: o } = a();
    return n.height = o, n.style.height = /*#__PURE__*/ T(o), s > 0 && (n.style.minWidth = /*#__PURE__*/ T(s)), n;
}, "svgSpan"), D1 = /*#__PURE__*/ m$1(function(e, t, a, n, s) {
    var o, h = e.height + e.depth + a + n;
    if (/fbox|color|angl/.test(t)) {
        if (o = /*#__PURE__*/ y.makeSpan([
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
        var b = new w0(v, {
            width: "100%",
            height: /*#__PURE__*/ T(h)
        });
        o = /*#__PURE__*/ y.makeSvgSpan([], [
            b
        ], s);
    }
    return o.height = h, o.style.height = /*#__PURE__*/ T(h), o;
}, "encloseSpan"), I0 = {
    encloseSpan: D1,
    mathMLnode: z1,
    svgSpan: B1
};
function L(r, e) {
    if (!r || r.type !== e) throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
    return r;
}
m$1(L, "assertNodeType");
function Bt(r) {
    var e = /*#__PURE__*/ Ye(r);
    if (!e) throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
    return e;
}
m$1(Bt, "assertSymbolNodeType");
function Ye(r) {
    return r && (r.type === "atom" || t1.hasOwnProperty(r.type)) ? r : null;
}
m$1(Ye, "checkSymbolNodeType");
var Dt = /*#__PURE__*/ m$1((r, e)=>{
    var t, a, n;
    r && r.type === "supsub" ? (a = /*#__PURE__*/ L(r.base, "accent"), t = a.base, r.base = t, n = /*#__PURE__*/ _a(/*#__PURE__*/ G(r, e)), r.base = a) : (a = /*#__PURE__*/ L(r, "accent"), t = a.base);
    var s = /*#__PURE__*/ G(t, /*#__PURE__*/ e.havingCrampedStyle()), o = a.isShifty && R.isCharacterBox(t), h = 0;
    if (o) {
        var c = /*#__PURE__*/ R.getBaseElem(t), v = /*#__PURE__*/ G(c, /*#__PURE__*/ e.havingCrampedStyle());
        h = jt(v).skew;
    }
    var b = a.label === "\\c", x = b ? s.height + s.depth : Math.min(s.height, e.fontMetrics().xHeight), k;
    if (a.isStretchy) k = /*#__PURE__*/ I0.svgSpan(a, e), k = /*#__PURE__*/ y.makeVList({
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
                    marginLeft: /*#__PURE__*/ T(2 * h)
                } : void 0
            }
        ]
    }, e);
    else {
        var w, A;
        a.label === "\\vec" ? (w = /*#__PURE__*/ y.staticSvg("vec", e), A = y.svgData.vec[1]) : (w = /*#__PURE__*/ y.makeOrd({
            mode: a.mode,
            text: a.label
        }, e, "textord"), w = /*#__PURE__*/ jt(w), w.italic = 0, A = w.width, b && (x += w.depth)), k = /*#__PURE__*/ y.makeSpan([
            "accent-body"
        ], [
            w
        ]);
        var B = a.label === "\\textcircled";
        B && (k.classes.push("accent-full"), x = s.height);
        var N = h;
        B || (N -= A / 2), k.style.left = /*#__PURE__*/ T(N), a.label === "\\textcircled" && (k.style.top = ".2em"), k = /*#__PURE__*/ y.makeVList({
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
    var q = /*#__PURE__*/ y.makeSpan([
        "mord",
        "accent"
    ], [
        k
    ], e);
    return n ? (n.children[0] = q, n.height = /*#__PURE__*/ Math.max(q.height, n.height), n.classes[0] = "mord", n) : q;
}, "htmlBuilder$a"), Fr = /*#__PURE__*/ m$1((r, e)=>{
    var t = r.isStretchy ? I0.mathMLnode(r.label) : new M.MathNode("mo", [
        /*#__PURE__*/ b0(r.label, r.mode)
    ]), a = new M.MathNode("mover", [
        /*#__PURE__*/ $(r.base, e),
        t
    ]);
    return a.setAttribute("accent", "true"), a;
}, "mathmlBuilder$9"), C1 = new RegExp([
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
].map((r)=>"\\" + r).join("|"));
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ Le(e[0]), a = !C1.test(r.funcName), n = !a || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
        return {
            type: "accent",
            mode: r.parser.mode,
            label: r.funcName,
            isStretchy: a,
            isShifty: n,
            base: t
        };
    }, "handler"),
    htmlBuilder: Dt,
    mathmlBuilder: Fr
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var t = e[0], a = r.parser.mode;
        return a === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), a = "text"), {
            type: "accent",
            mode: a,
            label: r.funcName,
            isStretchy: false,
            isShifty: true,
            base: t
        };
    }, "handler"),
    htmlBuilder: Dt,
    mathmlBuilder: Fr
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a } = r, n = e[0];
        return {
            type: "accentUnder",
            mode: t.mode,
            label: a,
            base: n
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ G(r.base, e), a = /*#__PURE__*/ I0.svgSpan(r, e), n = r.label === "\\utilde" ? .12 : 0, s = /*#__PURE__*/ y.makeVList({
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
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ I0.mathMLnode(r.label), a = new M.MathNode("munder", [
            /*#__PURE__*/ $(r.base, e),
            t
        ]);
        return a.setAttribute("accentunder", "true"), a;
    }, "mathmlBuilder")
});
var De = /*#__PURE__*/ m$1((r)=>{
    var e = new M.MathNode("mpadded", r ? [
        r
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
    handler (r, e, t) {
        var { parser: a, funcName: n } = r;
        return {
            type: "xArrow",
            mode: a.mode,
            label: n,
            body: e[0],
            below: t[0]
        };
    },
    htmlBuilder (r, e) {
        var t = e.style, a = /*#__PURE__*/ e.havingStyle(/*#__PURE__*/ t.sup()), n = /*#__PURE__*/ y.wrapFragment(/*#__PURE__*/ G(r.body, a, e), e), s = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
        n.classes.push(s + "-arrow-pad");
        var o;
        r.below && (a = /*#__PURE__*/ e.havingStyle(/*#__PURE__*/ t.sub()), o = /*#__PURE__*/ y.wrapFragment(/*#__PURE__*/ G(r.below, a, e), e), o.classes.push(s + "-arrow-pad"));
        var h = /*#__PURE__*/ I0.svgSpan(r, e), c = -e.fontMetrics().axisHeight + .5 * h.height, v = -e.fontMetrics().axisHeight - .5 * h.height - .111;
        (n.depth > .25 || r.label === "\\xleftequilibrium") && (v -= n.depth);
        var b;
        if (o) {
            var x = -e.fontMetrics().axisHeight + o.height + .5 * h.height + .111;
            b = /*#__PURE__*/ y.makeVList({
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
        } else b = /*#__PURE__*/ y.makeVList({
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
    mathmlBuilder (r, e) {
        var t = /*#__PURE__*/ I0.mathMLnode(r.label);
        t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
        var a;
        if (r.body) {
            var n = /*#__PURE__*/ De(/*#__PURE__*/ $(r.body, e));
            if (r.below) {
                var s = /*#__PURE__*/ De(/*#__PURE__*/ $(r.below, e));
                a = new M.MathNode("munderover", [
                    t,
                    s,
                    n
                ]);
            } else a = new M.MathNode("mover", [
                t,
                n
            ]);
        } else if (r.below) {
            var o = /*#__PURE__*/ De(/*#__PURE__*/ $(r.below, e));
            a = new M.MathNode("munder", [
                t,
                o
            ]);
        } else a = /*#__PURE__*/ De(), a = new M.MathNode("mover", [
            t,
            a
        ]);
        return a;
    }
});
var N1 = y.makeSpan;
function Hr(r, e) {
    var t = /*#__PURE__*/ r0(r.body, e, true);
    return N1([
        r.mclass
    ], t, e);
}
m$1(Hr, "htmlBuilder$9");
function Lr(r, e) {
    var t, a = /*#__PURE__*/ m0(r.body, e);
    return r.mclass === "minner" ? t = new M.MathNode("mpadded", a) : r.mclass === "mord" ? r.isCharacterBox ? (t = a[0], t.type = "mi") : t = new M.MathNode("mi", a) : (r.isCharacterBox ? (t = a[0], t.type = "mo") : t = new M.MathNode("mo", a), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
m$1(Lr, "mathmlBuilder$8");
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
    handler (r, e) {
        var { parser: t, funcName: a } = r, n = e[0];
        return {
            type: "mclass",
            mode: t.mode,
            mclass: "m" + a.slice(5),
            body: /*#__PURE__*/ _(n),
            isCharacterBox: /*#__PURE__*/ R.isCharacterBox(n)
        };
    },
    htmlBuilder: Hr,
    mathmlBuilder: Lr
});
var Xe = /*#__PURE__*/ m$1((r)=>{
    var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
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
    handler (r, e) {
        var { parser: t } = r;
        return {
            type: "mclass",
            mode: t.mode,
            mclass: /*#__PURE__*/ Xe(e[0]),
            body: /*#__PURE__*/ _(e[1]),
            isCharacterBox: /*#__PURE__*/ R.isCharacterBox(e[1])
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
    handler (r, e) {
        var { parser: t, funcName: a } = r, n = e[1], s = e[0], o;
        a !== "\\stackrel" ? o = /*#__PURE__*/ Xe(n) : o = "mrel";
        var h = {
            type: "op",
            mode: n.mode,
            limits: true,
            alwaysHandleSupSub: true,
            parentIsSupSub: false,
            symbol: false,
            suppressBaseShift: a !== "\\stackrel",
            body: /*#__PURE__*/ _(n)
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
            isCharacterBox: /*#__PURE__*/ R.isCharacterBox(c)
        };
    },
    htmlBuilder: Hr,
    mathmlBuilder: Lr
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
    handler (r, e) {
        var { parser: t } = r;
        return {
            type: "pmb",
            mode: t.mode,
            mclass: /*#__PURE__*/ Xe(e[0]),
            body: /*#__PURE__*/ _(e[0])
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ r0(r.body, e, true), a = /*#__PURE__*/ y.makeSpan([
            r.mclass
        ], t, e);
        return a.style.textShadow = "0.02em 0.01em 0.04px", a;
    },
    mathmlBuilder (r, e) {
        var t = /*#__PURE__*/ m0(r.body, e), a = new M.MathNode("mstyle", t);
        return a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), a;
    }
});
var q1 = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    A: "\\uparrow",
    V: "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow"
}, er = /*#__PURE__*/ m$1(()=>({
        type: "styling",
        body: [],
        mode: "math",
        style: "display"
    }), "newCell"), tr = /*#__PURE__*/ m$1((r)=>r.type === "textord" && r.text === "@", "isStartOfArrow"), R1 = /*#__PURE__*/ m$1((r, e)=>(r.type === "mathord" || r.type === "atom") && r.text === e, "isLabelEnd");
function E1(r, e, t) {
    var a = q1[r];
    switch(a){
        case "\\\\cdrightarrow":
        case "\\\\cdleftarrow":
            return t.callFunction(a, [
                e[0]
            ], [
                e[1]
            ]);
        case "\\uparrow":
        case "\\downarrow":
            {
                var n = /*#__PURE__*/ t.callFunction("\\\\cdleft", [
                    e[0]
                ], []), s = {
                    type: "atom",
                    text: a,
                    mode: "math",
                    family: "rel"
                }, o = /*#__PURE__*/ t.callFunction("\\Big", [
                    s
                ], []), h = /*#__PURE__*/ t.callFunction("\\\\cdright", [
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
        case "\\Vert":
            {
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
m$1(E1, "cdArrow");
function I1(r) {
    var e = [];
    for(r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup();;){
        e.push(/*#__PURE__*/ r.parseExpression(false, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
        var t = r.fetch().text;
        if (t === "&" || t === "\\\\") r.consume();
        else if (t === "\\end") {
            e[e.length - 1].length === 0 && e.pop();
            break;
        } else throw new z("Expected \\\\ or \\cr or \\end", r.nextToken);
    }
    for(var a = [], n = [
        a
    ], s = 0; s < e.length; s++){
        for(var o = e[s], h = /*#__PURE__*/ er(), c = 0; c < o.length; c++)if (!tr(o[c])) h.body.push(o[c]);
        else {
            a.push(h), c += 1;
            var v = Bt(o[c]).text, b = new Array(2);
            if (b[0] = {
                type: "ordgroup",
                mode: "math",
                body: []
            }, b[1] = {
                type: "ordgroup",
                mode: "math",
                body: []
            }, !("=|.".indexOf(v) > -1)) if ("<>AV".indexOf(v) > -1) for(var x = 0; x < 2; x++){
                for(var k = true, w = c + 1; w < o.length; w++){
                    if (R1(o[w], v)) {
                        k = false, c = w;
                        break;
                    }
                    if (tr(o[w])) throw new z("Missing a " + v + " character to complete a CD arrow.", o[w]);
                    b[x].body.push(o[w]);
                }
                if (k) throw new z("Missing a " + v + " character to complete a CD arrow.", o[c]);
            }
            else throw new z('Expected one of "<>AV=|." after @', o[c]);
            var A = /*#__PURE__*/ E1(v, b, r), B = {
                type: "styling",
                body: [
                    A
                ],
                mode: "math",
                style: "display"
            };
            a.push(B), h = /*#__PURE__*/ er();
        }
        s % 2 === 0 ? a.push(h) : a.shift(), a = [], n.push(a);
    }
    r.gullet.endGroup(), r.gullet.endGroup();
    var N = /*#__PURE__*/ new Array(n[0].length).fill({
        type: "align",
        align: "c",
        pregap: .25,
        postgap: .25
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
        cols: N,
        colSeparationType: "CD",
        hLinesBeforeRow: /*#__PURE__*/ new Array(n.length + 1).fill([])
    };
}
m$1(I1, "parseCD");
D({
    type: "cdlabel",
    names: [
        "\\\\cdleft",
        "\\\\cdright"
    ],
    props: {
        numArgs: 1
    },
    handler (r, e) {
        var { parser: t, funcName: a } = r;
        return {
            type: "cdlabel",
            mode: t.mode,
            side: /*#__PURE__*/ a.slice(4),
            label: e[0]
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ e.havingStyle(/*#__PURE__*/ e.style.sup()), a = /*#__PURE__*/ y.wrapFragment(/*#__PURE__*/ G(r.label, t, e), e);
        return a.classes.push("cd-label-" + r.side), a.style.bottom = /*#__PURE__*/ T(.8 - a.depth), a.height = 0, a.depth = 0, a;
    },
    mathmlBuilder (r, e) {
        var t = new M.MathNode("mrow", [
            /*#__PURE__*/ $(r.label, e)
        ]);
        return t = new M.MathNode("mpadded", [
            t
        ]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new M.MathNode("mstyle", [
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
    handler (r, e) {
        var { parser: t } = r;
        return {
            type: "cdlabelparent",
            mode: t.mode,
            fragment: e[0]
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ y.wrapFragment(/*#__PURE__*/ G(r.fragment, e), e);
        return t.classes.push("cd-vert-arrow"), t;
    },
    mathmlBuilder (r, e) {
        return new M.MathNode("mrow", [
            /*#__PURE__*/ $(r.fragment, e)
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
    handler (r, e) {
        for(var { parser: t } = r, a = /*#__PURE__*/ L(e[0], "ordgroup"), n = a.body, s = "", o = 0; o < n.length; o++){
            var h = /*#__PURE__*/ L(n[o], "textord");
            s += h.text;
        }
        var c = /*#__PURE__*/ parseInt(s), v;
        if (isNaN(c)) throw new z("\\@char has non-numeric argument " + s);
        if (c < 0 || c >= 1114111) throw new z("\\@char with invalid code point " + s);
        return c <= 65535 ? v = /*#__PURE__*/ String.fromCharCode(c) : (c -= 65536, v = /*#__PURE__*/ String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), {
            type: "textord",
            mode: t.mode,
            text: v
        };
    }
});
var Pr = /*#__PURE__*/ m$1((r, e)=>{
    var t = /*#__PURE__*/ r0(r.body, /*#__PURE__*/ e.withColor(r.color), false);
    return y.makeFragment(t);
}, "htmlBuilder$8"), Gr = /*#__PURE__*/ m$1((r, e)=>{
    var t = /*#__PURE__*/ m0(r.body, /*#__PURE__*/ e.withColor(r.color)), a = new M.MathNode("mstyle", t);
    return a.setAttribute("mathcolor", r.color), a;
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
    handler (r, e) {
        var { parser: t } = r, a = L(e[0], "color-token").color, n = e[1];
        return {
            type: "color",
            mode: t.mode,
            color: a,
            body: /*#__PURE__*/ _(n)
        };
    },
    htmlBuilder: Pr,
    mathmlBuilder: Gr
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
    handler (r, e) {
        var { parser: t, breakOnTokenText: a } = r, n = L(e[0], "color-token").color;
        t.gullet.macros.set("\\current@color", n);
        var s = /*#__PURE__*/ t.parseExpression(true, a);
        return {
            type: "color",
            mode: t.mode,
            color: n,
            body: s
        };
    },
    htmlBuilder: Pr,
    mathmlBuilder: Gr
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
    handler (r, e, t) {
        var { parser: a } = r, n = a.gullet.future().text === "[" ? a.parseSizeGroup(true) : null, s = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
        return {
            type: "cr",
            mode: a.mode,
            newLine: s,
            size: n && L(n, "size").value
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ y.makeSpan([
            "mspace"
        ], [], e);
        return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = /*#__PURE__*/ T(/*#__PURE__*/ Q(r.size, e)))), t;
    },
    mathmlBuilder (r, e) {
        var t = new M.MathNode("mspace");
        return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", /*#__PURE__*/ T(/*#__PURE__*/ Q(r.size, e)))), t;
    }
});
var bt = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture"
}, Vr = /*#__PURE__*/ m$1((r)=>{
    var e = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(e)) throw new z("Expected a control sequence", r);
    return e;
}, "checkControlSequence"), O1 = /*#__PURE__*/ m$1((r)=>{
    var e = /*#__PURE__*/ r.gullet.popToken();
    return e.text === "=" && (e = /*#__PURE__*/ r.gullet.popToken(), e.text === " " && (e = /*#__PURE__*/ r.gullet.popToken())), e;
}, "getRHS"), Ur = /*#__PURE__*/ m$1((r, e, t, a)=>{
    var n = /*#__PURE__*/ r.gullet.macros.get(t.text);
    n == null && (t.noexpand = true, n = {
        tokens: [
            t
        ],
        numArgs: 0,
        unexpandable: !r.gullet.isExpandable(t.text)
    }), r.gullet.macros.set(e, n, a);
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
    handler (r) {
        var { parser: e, funcName: t } = r;
        e.consumeSpaces();
        var a = /*#__PURE__*/ e.fetch();
        if (bt[a.text]) return (t === "\\global" || t === "\\\\globallong") && (a.text = bt[a.text]), L(/*#__PURE__*/ e.parseFunction(), "internal");
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
    handler (r) {
        var { parser: e, funcName: t } = r, a = /*#__PURE__*/ e.gullet.popToken(), n = a.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(n)) throw new z("Expected a control sequence", a);
        for(var s = 0, o, h = [
            []
        ]; e.gullet.future().text !== "{";)if (a = /*#__PURE__*/ e.gullet.popToken(), a.text === "#") {
            if (e.gullet.future().text === "{") {
                o = /*#__PURE__*/ e.gullet.future(), h[s].push("{");
                break;
            }
            if (a = /*#__PURE__*/ e.gullet.popToken(), !/^[1-9]$/.test(a.text)) throw new z('Invalid argument number "' + a.text + '"');
            if (parseInt(a.text) !== s + 1) throw new z('Argument number "' + a.text + '" out of order');
            s++, h.push([]);
        } else {
            if (a.text === "EOF") throw new z("Expected a macro definition");
            h[s].push(a.text);
        }
        var { tokens: c } = e.gullet.consumeArg();
        return o && c.unshift(o), (t === "\\edef" || t === "\\xdef") && (c = /*#__PURE__*/ e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(n, {
            tokens: c,
            numArgs: s,
            delimiters: h
        }, t === bt[t]), {
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
    handler (r) {
        var { parser: e, funcName: t } = r, a = /*#__PURE__*/ Vr(/*#__PURE__*/ e.gullet.popToken());
        e.gullet.consumeSpaces();
        var n = /*#__PURE__*/ O1(e);
        return Ur(e, a, n, t === "\\\\globallet"), {
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
    handler (r) {
        var { parser: e, funcName: t } = r, a = /*#__PURE__*/ Vr(/*#__PURE__*/ e.gullet.popToken()), n = /*#__PURE__*/ e.gullet.popToken(), s = /*#__PURE__*/ e.gullet.popToken();
        return Ur(e, a, s, t === "\\\\globalfuture"), e.gullet.pushToken(s), e.gullet.pushToken(n), {
            type: "internal",
            mode: e.mode
        };
    }
});
var ue = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = W.math[e] && W.math[e].replace, s = /*#__PURE__*/ Mt(n || e, t, a);
    if (!s) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
    return s;
}, "getMetrics"), Ct = /*#__PURE__*/ m$1(function(e, t, a, n) {
    var s = /*#__PURE__*/ a.havingBaseStyle(t), o = /*#__PURE__*/ y.makeSpan(/*#__PURE__*/ n.concat(/*#__PURE__*/ s.sizingClasses(a)), [
        e
    ], a), h = s.sizeMultiplier / a.sizeMultiplier;
    return o.height *= h, o.depth *= h, o.maxFontSize = s.sizeMultiplier, o;
}, "styleWrap"), Yr = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = /*#__PURE__*/ t.havingBaseStyle(a), s = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
    e.classes.push("delimcenter"), e.style.top = /*#__PURE__*/ T(s), e.height -= s, e.depth += s;
}, "centerSpan"), F1 = /*#__PURE__*/ m$1(function(e, t, a, n, s, o) {
    var h = /*#__PURE__*/ y.makeSymbol(e, "Main-Regular", s, n), c = /*#__PURE__*/ Ct(h, t, n, o);
    return a && Yr(c, n, t), c;
}, "makeSmallDelim"), H1 = /*#__PURE__*/ m$1(function(e, t, a, n) {
    return y.makeSymbol(e, "Size" + t + "-Regular", a, n);
}, "mathrmSize"), Xr = /*#__PURE__*/ m$1(function(e, t, a, n, s, o) {
    var h = /*#__PURE__*/ H1(e, t, s, n), c = /*#__PURE__*/ Ct(/*#__PURE__*/ y.makeSpan([
        "delimsizing",
        "size" + t
    ], [
        h
    ], n), I.TEXT, n, o);
    return a && Yr(c, n, I.TEXT), c;
}, "makeLargeDelim"), rt = /*#__PURE__*/ m$1(function(e, t, a) {
    var n;
    t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
    var s = /*#__PURE__*/ y.makeSpan([
        "delimsizinginner",
        n
    ], [
        /*#__PURE__*/ y.makeSpan([], [
            /*#__PURE__*/ y.makeSymbol(e, t, a)
        ])
    ]);
    return {
        type: "elem",
        elem: s
    };
}, "makeGlyphSpan"), at = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = M0["Size4-Regular"][e.charCodeAt(0)] ? M0["Size4-Regular"][e.charCodeAt(0)][4] : M0["Size1-Regular"][e.charCodeAt(0)][4], s = new z0("inner", Xa(e, /*#__PURE__*/ Math.round(1e3 * t))), o = new w0([
        s
    ], {
        width: /*#__PURE__*/ T(n),
        height: /*#__PURE__*/ T(t),
        style: "width:" + T(n),
        viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
        preserveAspectRatio: "xMinYMin"
    }), h = /*#__PURE__*/ y.makeSvgSpan([], [
        o
    ], a);
    return h.height = t, h.style.height = /*#__PURE__*/ T(t), h.style.width = /*#__PURE__*/ T(n), {
        type: "elem",
        elem: h
    };
}, "makeInner"), yt = .008, Ce = {
    type: "kern",
    size: -1 * yt
}, L1 = [
    "|",
    "\\lvert",
    "\\rvert",
    "\\vert"
], P1 = [
    "\\|",
    "\\lVert",
    "\\rVert",
    "\\Vert"
], $r = /*#__PURE__*/ m$1(function(e, t, a, n, s, o) {
    var h, c, v, b, x = "", k = 0;
    h = v = b = e, c = null;
    var w = "Size1-Regular";
    e === "\\uparrow" ? v = b = "\u23D0" : e === "\\Uparrow" ? v = b = "\u2016" : e === "\\downarrow" ? h = v = "\u23D0" : e === "\\Downarrow" ? h = v = "\u2016" : e === "\\updownarrow" ? (h = "\\uparrow", v = "\u23D0", b = "\\downarrow") : e === "\\Updownarrow" ? (h = "\\Uparrow", v = "\u2016", b = "\\Downarrow") : R.contains(L1, e) ? (v = "\u2223", x = "vert", k = 333) : R.contains(P1, e) ? (v = "\u2225", x = "doublevert", k = 556) : e === "[" || e === "\\lbrack" ? (h = "\u23A1", v = "\u23A2", b = "\u23A3", w = "Size4-Regular", x = "lbrack", k = 667) : e === "]" || e === "\\rbrack" ? (h = "\u23A4", v = "\u23A5", b = "\u23A6", w = "Size4-Regular", x = "rbrack", k = 667) : e === "\\lfloor" || e === "\u230A" ? (v = h = "\u23A2", b = "\u23A3", w = "Size4-Regular", x = "lfloor", k = 667) : e === "\\lceil" || e === "\u2308" ? (h = "\u23A1", v = b = "\u23A2", w = "Size4-Regular", x = "lceil", k = 667) : e === "\\rfloor" || e === "\u230B" ? (v = h = "\u23A5", b = "\u23A6", w = "Size4-Regular", x = "rfloor", k = 667) : e === "\\rceil" || e === "\u2309" ? (h = "\u23A4", v = b = "\u23A5", w = "Size4-Regular", x = "rceil", k = 667) : e === "(" || e === "\\lparen" ? (h = "\u239B", v = "\u239C", b = "\u239D", w = "Size4-Regular", x = "lparen", k = 875) : e === ")" || e === "\\rparen" ? (h = "\u239E", v = "\u239F", b = "\u23A0", w = "Size4-Regular", x = "rparen", k = 875) : e === "\\{" || e === "\\lbrace" ? (h = "\u23A7", c = "\u23A8", b = "\u23A9", v = "\u23AA", w = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (h = "\u23AB", c = "\u23AC", b = "\u23AD", v = "\u23AA", w = "Size4-Regular") : e === "\\lgroup" || e === "\u27EE" ? (h = "\u23A7", b = "\u23A9", v = "\u23AA", w = "Size4-Regular") : e === "\\rgroup" || e === "\u27EF" ? (h = "\u23AB", b = "\u23AD", v = "\u23AA", w = "Size4-Regular") : e === "\\lmoustache" || e === "\u23B0" ? (h = "\u23A7", b = "\u23AD", v = "\u23AA", w = "Size4-Regular") : (e === "\\rmoustache" || e === "\u23B1") && (h = "\u23AB", b = "\u23A9", v = "\u23AA", w = "Size4-Regular");
    var A = /*#__PURE__*/ ue(h, w, s), B = A.height + A.depth, N = /*#__PURE__*/ ue(v, w, s), q = N.height + N.depth, F = /*#__PURE__*/ ue(b, w, s), H = F.height + F.depth, U = 0, P = 1;
    if (c !== null) {
        var Y = /*#__PURE__*/ ue(c, w, s);
        U = Y.height + Y.depth, P = 2;
    }
    var V = B + H + U, Z = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.ceil((t - V) / (P * q))), X = V + Z * P * q, D0 = n.fontMetrics().axisHeight;
    a && (D0 *= n.sizeMultiplier);
    var n0 = X / 2 - D0, t0 = [];
    if (x.length > 0) {
        var X0 = X - B - H, o0 = /*#__PURE__*/ Math.round(X * 1e3), y0 = /*#__PURE__*/ $a(x, /*#__PURE__*/ Math.round(X0 * 1e3)), F0 = new z0(x, y0), K0 = (k / 1e3).toFixed(3) + "em", J0 = (o0 / 1e3).toFixed(3) + "em", je = new w0([
            F0
        ], {
            width: K0,
            height: J0,
            viewBox: "0 0 " + k + " " + o0
        }), H0 = /*#__PURE__*/ y.makeSvgSpan([], [
            je
        ], n);
        H0.height = o0 / 1e3, H0.style.width = K0, H0.style.height = J0, t0.push({
            type: "elem",
            elem: H0
        });
    } else {
        if (t0.push(/*#__PURE__*/ rt(b, w, s)), t0.push(Ce), c === null) {
            var L0 = X - B - H + 2 * yt;
            t0.push(/*#__PURE__*/ at(v, L0, n));
        } else {
            var f0 = (X - B - H - U) / 2 + 2 * yt;
            t0.push(/*#__PURE__*/ at(v, f0, n)), t0.push(Ce), t0.push(/*#__PURE__*/ rt(c, w, s)), t0.push(Ce), t0.push(/*#__PURE__*/ at(v, f0, n));
        }
        t0.push(Ce), t0.push(/*#__PURE__*/ rt(h, w, s));
    }
    var se = /*#__PURE__*/ n.havingBaseStyle(I.TEXT), Ze = /*#__PURE__*/ y.makeVList({
        positionType: "bottom",
        positionData: n0,
        children: t0
    }, se);
    return Ct(/*#__PURE__*/ y.makeSpan([
        "delimsizing",
        "mult"
    ], [
        Ze
    ], se), I.TEXT, n, o);
}, "makeStackedDelim"), nt = 80, it = .08, st = /*#__PURE__*/ m$1(function(e, t, a, n, s) {
    var o = /*#__PURE__*/ Ya(e, n, a), h = new z0(e, o), c = new w0([
        h
    ], {
        width: "400em",
        height: /*#__PURE__*/ T(t),
        viewBox: "0 0 400000 " + a,
        preserveAspectRatio: "xMinYMin slice"
    });
    return y.makeSvgSpan([
        "hide-tail"
    ], [
        c
    ], s);
}, "sqrtSvg"), G1 = /*#__PURE__*/ m$1(function(e, t) {
    var a = /*#__PURE__*/ t.havingBaseSizing(), n = /*#__PURE__*/ Kr("\\surd", e * a.sizeMultiplier, Zr, a), s = a.sizeMultiplier, o = /*#__PURE__*/ Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), h, c = 0, v = 0, b = 0, x;
    return n.type === "small" ? (b = 1e3 + 1e3 * o + nt, e < 1 ? s = 1 : e < 1.4 && (s = .7), c = (1 + o + it) / s, v = (1 + o) / s, h = /*#__PURE__*/ st("sqrtMain", c, b, o, t), h.style.minWidth = "0.853em", x = .833 / s) : n.type === "large" ? (b = (1e3 + nt) * he[n.size], v = (he[n.size] + o) / s, c = (he[n.size] + o + it) / s, h = /*#__PURE__*/ st("sqrtSize" + n.size, c, b, o, t), h.style.minWidth = "1.02em", x = 1 / s) : (c = e + o + it, v = e + o, b = Math.floor(1e3 * e + o) + nt, h = /*#__PURE__*/ st("sqrtTall", c, b, o, t), h.style.minWidth = "0.742em", x = 1.056), h.height = v, h.style.height = /*#__PURE__*/ T(c), {
        span: h,
        advanceWidth: x,
        ruleWidth: (t.fontMetrics().sqrtRuleThickness + o) * s
    };
}, "makeSqrtImage"), Wr = [
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
    "\u230A",
    "\u230B",
    "\\lceil",
    "\\rceil",
    "\u2308",
    "\u2309",
    "\\surd"
], V1 = [
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
    "\u27EE",
    "\u27EF",
    "\\lmoustache",
    "\\rmoustache",
    "\u23B0",
    "\u23B1"
], jr = [
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
], U1 = /*#__PURE__*/ m$1(function(e, t, a, n, s) {
    if (e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle"), R.contains(Wr, e) || R.contains(jr, e)) return Xr(e, t, false, a, n, s);
    if (R.contains(V1, e)) return $r(e, he[t], false, a, n, s);
    throw new z("Illegal delimiter: '" + e + "'");
}, "makeSizedDelim"), Y1 = [
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
], X1 = [
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
], Zr = [
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
], $1 = /*#__PURE__*/ m$1(function(e) {
    if (e.type === "small") return "Main-Regular";
    if (e.type === "large") return "Size" + e.size + "-Regular";
    if (e.type === "stack") return "Size4-Regular";
    throw new Error("Add support for delim type '" + e.type + "' here.");
}, "delimTypeToFont"), Kr = /*#__PURE__*/ m$1(function(e, t, a, n) {
    for(var s = /*#__PURE__*/ Math.min(2, 3 - n.style.size), o = s; o < a.length && a[o].type !== "stack"; o++){
        var h = /*#__PURE__*/ ue(e, /*#__PURE__*/ $1(a[o]), "math"), c = h.height + h.depth;
        if (a[o].type === "small") {
            var v = /*#__PURE__*/ n.havingBaseStyle(a[o].style);
            c *= v.sizeMultiplier;
        }
        if (c > t) return a[o];
    }
    return a[a.length - 1];
}, "traverseSequence"), Jr = /*#__PURE__*/ m$1(function(e, t, a, n, s, o) {
    e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle");
    var h;
    R.contains(jr, e) ? h = Y1 : R.contains(Wr, e) ? h = Zr : h = X1;
    var c = /*#__PURE__*/ Kr(e, t, h, n);
    return c.type === "small" ? F1(e, c.style, a, n, s, o) : c.type === "large" ? Xr(e, c.size, a, n, s, o) : $r(e, t, a, n, s, o);
}, "makeCustomSizedDelim"), W1 = /*#__PURE__*/ m$1(function(e, t, a, n, s, o) {
    var h = n.fontMetrics().axisHeight * n.sizeMultiplier, c = 901, v = 5 / n.fontMetrics().ptPerEm, b = /*#__PURE__*/ Math.max(t - h, a + h), x = /*#__PURE__*/ Math.max(b / 500 * c, 2 * b - v);
    return Jr(e, x, true, n, s, o);
}, "makeLeftRightDelim"), R0 = {
    sqrtImage: G1,
    sizedDelim: U1,
    sizeToMaxHeight: he,
    customSizedDelim: Jr,
    leftRightDelim: W1
}, rr = {
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
}, j1 = [
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
    "\u230A",
    "\u230B",
    "\\lceil",
    "\\rceil",
    "\u2308",
    "\u2309",
    "<",
    ">",
    "\\langle",
    "\u27E8",
    "\\rangle",
    "\u27E9",
    "\\lt",
    "\\gt",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "\u27EE",
    "\u27EF",
    "\\lmoustache",
    "\\rmoustache",
    "\u23B0",
    "\u23B1",
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
function $e(r, e) {
    var t = /*#__PURE__*/ Ye(r);
    if (t && R.contains(j1, t.text)) return t;
    throw t ? new z("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new z("Invalid delimiter type '" + r.type + "'", r);
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ $e(e[0], r);
        return {
            type: "delimsizing",
            mode: r.parser.mode,
            size: rr[r.funcName].size,
            mclass: rr[r.funcName].mclass,
            delim: t.text
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>r.delim === "." ? y.makeSpan([
            r.mclass
        ]) : R0.sizedDelim(r.delim, r.size, e, r.mode, [
            r.mclass
        ]), "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r)=>{
        var e = [];
        r.delim !== "." && e.push(/*#__PURE__*/ b0(r.delim, r.mode));
        var t = new M.MathNode("mo", e);
        r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
        var a = /*#__PURE__*/ T(R0.sizeToMaxHeight[r.size]);
        return t.setAttribute("minsize", a), t.setAttribute("maxsize", a), t;
    }, "mathmlBuilder")
});
function ar(r) {
    if (!r.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
m$1(ar, "assertParsed");
D({
    type: "leftright-right",
    names: [
        "\\right"
    ],
    props: {
        numArgs: 1,
        primitive: true
    },
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ r.parser.gullet.macros.get("\\current@color");
        if (t && typeof t != "string") throw new z("\\current@color set to non-string in \\right");
        return {
            type: "leftright-right",
            mode: r.parser.mode,
            delim: $e(e[0], r).text,
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ $e(e[0], r), a = r.parser;
        ++a.leftrightDepth;
        var n = /*#__PURE__*/ a.parseExpression(false);
        --a.leftrightDepth, a.expect("\\right", false);
        var s = /*#__PURE__*/ L(/*#__PURE__*/ a.parseFunction(), "leftright-right");
        return {
            type: "leftright",
            mode: a.mode,
            body: n,
            left: t.text,
            right: s.delim,
            rightColor: s.color
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        ar(r);
        for(var t = /*#__PURE__*/ r0(r.body, e, true, [
            "mopen",
            "mclose"
        ]), a = 0, n = 0, s = false, o = 0; o < t.length; o++)t[o].isMiddle ? s = true : (a = /*#__PURE__*/ Math.max(t[o].height, a), n = /*#__PURE__*/ Math.max(t[o].depth, n));
        a *= e.sizeMultiplier, n *= e.sizeMultiplier;
        var h;
        if (r.left === "." ? h = /*#__PURE__*/ pe(e, [
            "mopen"
        ]) : h = /*#__PURE__*/ R0.leftRightDelim(r.left, a, n, e, r.mode, [
            "mopen"
        ]), t.unshift(h), s) for(var c = 1; c < t.length; c++){
            var v = t[c], b = v.isMiddle;
            b && (t[c] = /*#__PURE__*/ R0.leftRightDelim(b.delim, a, n, b.options, r.mode, []));
        }
        var x;
        if (r.right === ".") x = /*#__PURE__*/ pe(e, [
            "mclose"
        ]);
        else {
            var k = r.rightColor ? e.withColor(r.rightColor) : e;
            x = /*#__PURE__*/ R0.leftRightDelim(r.right, a, n, k, r.mode, [
                "mclose"
            ]);
        }
        return t.push(x), y.makeSpan([
            "minner"
        ], t, e);
    }, "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        ar(r);
        var t = /*#__PURE__*/ m0(r.body, e);
        if (r.left !== ".") {
            var a = new M.MathNode("mo", [
                /*#__PURE__*/ b0(r.left, r.mode)
            ]);
            a.setAttribute("fence", "true"), t.unshift(a);
        }
        if (r.right !== ".") {
            var n = new M.MathNode("mo", [
                /*#__PURE__*/ b0(r.right, r.mode)
            ]);
            n.setAttribute("fence", "true"), r.rightColor && n.setAttribute("mathcolor", r.rightColor), t.push(n);
        }
        return At(t);
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ $e(e[0], r);
        if (!r.parser.leftrightDepth) throw new z("\\middle without preceding \\left", t);
        return {
            type: "middle",
            mode: r.parser.mode,
            delim: t.text
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t;
        if (r.delim === ".") t = /*#__PURE__*/ pe(e, []);
        else {
            t = /*#__PURE__*/ R0.sizedDelim(r.delim, 1, e, r.mode, []);
            var a = {
                delim: r.delim,
                options: e
            };
            t.isMiddle = a;
        }
        return t;
    }, "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = r.delim === "\\vert" || r.delim === "|" ? b0("|", "text") : b0(r.delim, r.mode), a = new M.MathNode("mo", [
            t
        ]);
        return a.setAttribute("fence", "true"), a.setAttribute("lspace", "0.05em"), a.setAttribute("rspace", "0.05em"), a;
    }, "mathmlBuilder")
});
var Nt = /*#__PURE__*/ m$1((r, e)=>{
    var t = /*#__PURE__*/ y.wrapFragment(/*#__PURE__*/ G(r.body, e), e), a = /*#__PURE__*/ r.label.slice(1), n = e.sizeMultiplier, s, o = 0, h = /*#__PURE__*/ R.isCharacterBox(r.body);
    if (a === "sout") s = /*#__PURE__*/ y.makeSpan([
        "stretchy",
        "sout"
    ]), s.height = e.fontMetrics().defaultRuleThickness / n, o = -0.5 * e.fontMetrics().xHeight;
    else if (a === "phase") {
        var c = /*#__PURE__*/ Q({
            number: .6,
            unit: "pt"
        }, e), v = /*#__PURE__*/ Q({
            number: .35,
            unit: "ex"
        }, e), b = /*#__PURE__*/ e.havingBaseSizing();
        n = n / b.sizeMultiplier;
        var x = t.height + t.depth + c + v;
        t.style.paddingLeft = /*#__PURE__*/ T(x / 2 + c);
        var k = /*#__PURE__*/ Math.floor(1e3 * x * n), w = /*#__PURE__*/ Va(k), A = new w0([
            new z0("phase", w)
        ], {
            width: "400em",
            height: /*#__PURE__*/ T(k / 1e3),
            viewBox: "0 0 400000 " + k,
            preserveAspectRatio: "xMinYMin slice"
        });
        s = /*#__PURE__*/ y.makeSvgSpan([
            "hide-tail"
        ], [
            A
        ], e), s.style.height = /*#__PURE__*/ T(x), o = t.depth + c + v;
    } else {
        /cancel/.test(a) ? h || t.classes.push("cancel-pad") : a === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
        var B = 0, N = 0, q = 0;
        /box/.test(a) ? (q = /*#__PURE__*/ Math.max(e.fontMetrics().fboxrule, e.minRuleThickness), B = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : q), N = B) : a === "angl" ? (q = /*#__PURE__*/ Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), B = 4 * q, N = /*#__PURE__*/ Math.max(0, .25 - t.depth)) : (B = h ? .2 : 0, N = B), s = /*#__PURE__*/ I0.encloseSpan(t, a, B, N, e), /fbox|boxed|fcolorbox/.test(a) ? (s.style.borderStyle = "solid", s.style.borderWidth = /*#__PURE__*/ T(q)) : a === "angl" && q !== .049 && (s.style.borderTopWidth = /*#__PURE__*/ T(q), s.style.borderRightWidth = /*#__PURE__*/ T(q)), o = t.depth + N, r.backgroundColor && (s.style.backgroundColor = r.backgroundColor, r.borderColor && (s.style.borderColor = r.borderColor));
    }
    var F;
    if (r.backgroundColor) F = /*#__PURE__*/ y.makeVList({
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
        var H = /cancel|phase/.test(a) ? [
            "svg-align"
        ] : [];
        F = /*#__PURE__*/ y.makeVList({
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
                    wrapperClasses: H
                }
            ]
        }, e);
    }
    return /cancel/.test(a) && (F.height = t.height, F.depth = t.depth), /cancel/.test(a) && !h ? y.makeSpan([
        "mord",
        "cancel-lap"
    ], [
        F
    ], e) : y.makeSpan([
        "mord"
    ], [
        F
    ], e);
}, "htmlBuilder$7"), qt = /*#__PURE__*/ m$1((r, e)=>{
    var t = 0, a = new M.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [
        /*#__PURE__*/ $(r.body, e)
    ]);
    switch(r.label){
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
            if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, a.setAttribute("width", "+" + 2 * t + "pt"), a.setAttribute("height", "+" + 2 * t + "pt"), a.setAttribute("lspace", t + "pt"), a.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
                var n = /*#__PURE__*/ Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
                a.setAttribute("style", "border: " + n + "em solid " + String(r.borderColor));
            }
            break;
        case "\\xcancel":
            a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
            break;
    }
    return r.backgroundColor && a.setAttribute("mathbackground", r.backgroundColor), a;
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
    handler (r, e, t) {
        var { parser: a, funcName: n } = r, s = L(e[0], "color-token").color, o = e[1];
        return {
            type: "enclose",
            mode: a.mode,
            label: n,
            backgroundColor: s,
            body: o
        };
    },
    htmlBuilder: Nt,
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
    handler (r, e, t) {
        var { parser: a, funcName: n } = r, s = L(e[0], "color-token").color, o = L(e[1], "color-token").color, h = e[2];
        return {
            type: "enclose",
            mode: a.mode,
            label: n,
            backgroundColor: o,
            borderColor: s,
            body: h
        };
    },
    htmlBuilder: Nt,
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
    handler (r, e) {
        var { parser: t } = r;
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
    handler (r, e) {
        var { parser: t, funcName: a } = r, n = e[0];
        return {
            type: "enclose",
            mode: t.mode,
            label: a,
            body: n
        };
    },
    htmlBuilder: Nt,
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
    handler (r, e) {
        var { parser: t } = r;
        return {
            type: "enclose",
            mode: t.mode,
            label: "\\angl",
            body: e[0]
        };
    }
});
var Qr = {};
function A0(r) {
    for(var { type: e, names: t, props: a, handler: n, htmlBuilder: s, mathmlBuilder: o } = r, h = {
        type: e,
        numArgs: a.numArgs || 0,
        allowedInText: false,
        numOptionalArgs: 0,
        handler: n
    }, c = 0; c < t.length; ++c)Qr[t[c]] = h;
    s && (Fe[e] = s), o && (He[e] = o);
}
m$1(A0, "defineEnvironment");
var _r = {};
function m(r, e) {
    _r[r] = e;
}
m$1(m, "defineMacro");
function nr(r) {
    var e = [];
    r.consumeSpaces();
    var t = r.fetch().text;
    for(t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline";)r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
    return e;
}
m$1(nr, "getHLines");
var We = /*#__PURE__*/ m$1((r)=>{
    var e = r.parser.settings;
    if (!e.displayMode) throw new z("{" + r.envName + "} can be used only in display mode.");
}, "validateAmsEnvironmentContext");
function Rt(r) {
    if (r.indexOf("ed") === -1) return r.indexOf("*") === -1;
}
m$1(Rt, "getAutoTag");
function Y0(r, e, t) {
    var { hskipBeforeAndAfter: a, addJot: n, cols: s, arraystretch: o, colSeparationType: h, autoTag: c, singleRow: v, emptySingleRow: b, maxNumCols: x, leqno: k } = e;
    if (r.gullet.beginGroup(), v || r.gullet.macros.set("\\cr", "\\\\\\relax"), !o) {
        var w = /*#__PURE__*/ r.gullet.expandMacroAsText("\\arraystretch");
        if (w == null) o = 1;
        else if (o = /*#__PURE__*/ parseFloat(w), !o || o < 0) throw new z("Invalid \\arraystretch: " + w);
    }
    r.gullet.beginGroup();
    var A = [], B = [
        A
    ], N = [], q = [], F = c != null ? [] : void 0;
    function H() {
        c && r.gullet.macros.set("\\@eqnsw", "1", true);
    }
    m$1(H, "beginRow");
    function U() {
        F && (r.gullet.macros.get("\\df@tag") ? (F.push(/*#__PURE__*/ r.subparse([
            new g0("\\df@tag")
        ])), r.gullet.macros.set("\\df@tag", void 0, true)) : F.push(!!c && r.gullet.macros.get("\\@eqnsw") === "1"));
    }
    for(m$1(U, "endRow"), H(), q.push(/*#__PURE__*/ nr(r));;){
        var P = /*#__PURE__*/ r.parseExpression(false, v ? "\\end" : "\\\\");
        r.gullet.endGroup(), r.gullet.beginGroup(), P = {
            type: "ordgroup",
            mode: r.mode,
            body: P
        }, t && (P = {
            type: "styling",
            mode: r.mode,
            style: t,
            body: [
                P
            ]
        }), A.push(P);
        var Y = r.fetch().text;
        if (Y === "&") {
            if (x && A.length === x) {
                if (v || h) throw new z("Too many tab characters: &", r.nextToken);
                r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
            }
            r.consume();
        } else if (Y === "\\end") {
            U(), A.length === 1 && P.type === "styling" && P.body[0].body.length === 0 && (B.length > 1 || !b) && B.pop(), q.length < B.length + 1 && q.push([]);
            break;
        } else if (Y === "\\\\") {
            r.consume();
            var V = void 0;
            r.gullet.future().text !== " " && (V = /*#__PURE__*/ r.parseSizeGroup(true)), N.push(V ? V.value : null), U(), q.push(/*#__PURE__*/ nr(r)), A = [], B.push(A), H();
        } else throw new z("Expected & or \\\\ or \\cr or \\end", r.nextToken);
    }
    return r.gullet.endGroup(), r.gullet.endGroup(), {
        type: "array",
        mode: r.mode,
        addJot: n,
        arraystretch: o,
        body: B,
        cols: s,
        rowGaps: N,
        hskipBeforeAndAfter: a,
        hLinesBeforeRow: q,
        colSeparationType: h,
        tags: F,
        leqno: k
    };
}
m$1(Y0, "parseArray");
function Et(r) {
    return r.slice(0, 1) === "d" ? "display" : "text";
}
m$1(Et, "dCellStyle");
var T0 = /*#__PURE__*/ m$1(function(e, t) {
    var a, n, s = e.body.length, o = e.hLinesBeforeRow, h = 0, c = new Array(s), v = [], b = /*#__PURE__*/ Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), x = 1 / t.fontMetrics().ptPerEm, k = 5 * x;
    if (e.colSeparationType && e.colSeparationType === "small") {
        var w = t.havingStyle(I.SCRIPT).sizeMultiplier;
        k = .2778 * (w / t.sizeMultiplier);
    }
    var A = e.colSeparationType === "CD" ? Q({
        number: 3,
        unit: "ex"
    }, t) : 12 * x, B = 3 * x, N = e.arraystretch * A, q = .7 * N, F = .3 * N, H = 0;
    function U(ye) {
        for(var xe = 0; xe < ye.length; ++xe)xe > 0 && (H += .25), v.push({
            pos: H,
            isDashed: ye[xe]
        });
    }
    for(m$1(U, "setHLinePos"), U(o[0]), a = 0; a < e.body.length; ++a){
        var P = e.body[a], Y = q, V = F;
        h < P.length && (h = P.length);
        var Z = new Array(P.length);
        for(n = 0; n < P.length; ++n){
            var X = /*#__PURE__*/ G(P[n], t);
            V < X.depth && (V = X.depth), Y < X.height && (Y = X.height), Z[n] = X;
        }
        var D0 = e.rowGaps[a], n0 = 0;
        D0 && (n0 = /*#__PURE__*/ Q(D0, t), n0 > 0 && (n0 += F, V < n0 && (V = n0), n0 = 0)), e.addJot && (V += B), Z.height = Y, Z.depth = V, H += Y, Z.pos = H, H += V + n0, c[a] = Z, U(o[a + 1]);
    }
    var t0 = H / 2 + t.fontMetrics().axisHeight, X0 = e.cols || [], o0 = [], y0, F0, K0 = [];
    if (e.tags && e.tags.some((ye)=>ye)) for(a = 0; a < s; ++a){
        var J0 = c[a], je = J0.pos - t0, H0 = e.tags[a], L0 = void 0;
        H0 === true ? L0 = /*#__PURE__*/ y.makeSpan([
            "eqn-num"
        ], [], t) : H0 === false ? L0 = /*#__PURE__*/ y.makeSpan([], [], t) : L0 = /*#__PURE__*/ y.makeSpan([], /*#__PURE__*/ r0(H0, t, true), t), L0.depth = J0.depth, L0.height = J0.height, K0.push({
            type: "elem",
            elem: L0,
            shift: je
        });
    }
    for(n = 0, F0 = 0; n < h || F0 < X0.length; ++n, ++F0){
        for(var f0 = X0[F0] || {}, se = true; f0.type === "separator";){
            if (se || (y0 = /*#__PURE__*/ y.makeSpan([
                "arraycolsep"
            ], []), y0.style.width = /*#__PURE__*/ T(t.fontMetrics().doubleRuleSep), o0.push(y0)), f0.separator === "|" || f0.separator === ":") {
                var Ze = f0.separator === "|" ? "solid" : "dashed", Q0 = /*#__PURE__*/ y.makeSpan([
                    "vertical-separator"
                ], [], t);
                Q0.style.height = /*#__PURE__*/ T(H), Q0.style.borderRightWidth = /*#__PURE__*/ T(b), Q0.style.borderRightStyle = Ze, Q0.style.margin = "0 " + T(-b / 2);
                var Gt = H - t0;
                Gt && (Q0.style.verticalAlign = /*#__PURE__*/ T(-Gt)), o0.push(Q0);
            } else throw new z("Invalid separator type: " + f0.separator);
            F0++, f0 = X0[F0] || {}, se = false;
        }
        if (!(n >= h)) {
            var _0 = void 0;
            (n > 0 || e.hskipBeforeAndAfter) && (_0 = /*#__PURE__*/ R.deflt(f0.pregap, k), _0 !== 0 && (y0 = /*#__PURE__*/ y.makeSpan([
                "arraycolsep"
            ], []), y0.style.width = /*#__PURE__*/ T(_0), o0.push(y0)));
            var ee = [];
            for(a = 0; a < s; ++a){
                var ge = c[a], be = ge[n];
                if (be) {
                    var va = ge.pos - t0;
                    be.depth = ge.depth, be.height = ge.height, ee.push({
                        type: "elem",
                        elem: be,
                        shift: va
                    });
                }
            }
            ee = /*#__PURE__*/ y.makeVList({
                positionType: "individualShift",
                children: ee
            }, t), ee = /*#__PURE__*/ y.makeSpan([
                "col-align-" + (f0.align || "c")
            ], [
                ee
            ]), o0.push(ee), (n < h - 1 || e.hskipBeforeAndAfter) && (_0 = /*#__PURE__*/ R.deflt(f0.postgap, k), _0 !== 0 && (y0 = /*#__PURE__*/ y.makeSpan([
                "arraycolsep"
            ], []), y0.style.width = /*#__PURE__*/ T(_0), o0.push(y0)));
        }
    }
    if (c = /*#__PURE__*/ y.makeSpan([
        "mtable"
    ], o0), v.length > 0) {
        for(var ga = /*#__PURE__*/ y.makeLineSpan("hline", t, b), ba = /*#__PURE__*/ y.makeLineSpan("hdashline", t, b), Ke = [
            {
                type: "elem",
                elem: c,
                shift: 0
            }
        ]; v.length > 0;){
            var Vt = /*#__PURE__*/ v.pop(), Ut = Vt.pos - t0;
            Vt.isDashed ? Ke.push({
                type: "elem",
                elem: ba,
                shift: Ut
            }) : Ke.push({
                type: "elem",
                elem: ga,
                shift: Ut
            });
        }
        c = /*#__PURE__*/ y.makeVList({
            positionType: "individualShift",
            children: Ke
        }, t);
    }
    if (K0.length === 0) return y.makeSpan([
        "mord"
    ], [
        c
    ], t);
    var Je = /*#__PURE__*/ y.makeVList({
        positionType: "individualShift",
        children: K0
    }, t);
    return Je = /*#__PURE__*/ y.makeSpan([
        "tag"
    ], [
        Je
    ], t), y.makeFragment([
        c,
        Je
    ]);
}, "htmlBuilder"), Z1 = {
    c: "center ",
    l: "left ",
    r: "right "
}, B0 = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = [], n = new M.MathNode("mtd", [], [
        "mtr-glue"
    ]), s = new M.MathNode("mtd", [], [
        "mml-eqn-num"
    ]), o = 0; o < e.body.length; o++){
        for(var h = e.body[o], c = [], v = 0; v < h.length; v++)c.push(new M.MathNode("mtd", [
            /*#__PURE__*/ $(h[v], t)
        ]));
        e.tags && e.tags[o] && (c.unshift(n), c.push(n), e.leqno ? c.unshift(s) : c.push(s)), a.push(new M.MathNode("mtr", c));
    }
    var b = new M.MathNode("mtable", a), x = e.arraystretch === .5 ? .1 : .16 + e.arraystretch - 1 + (e.addJot ? .09 : 0);
    b.setAttribute("rowspacing", /*#__PURE__*/ T(x));
    var k = "", w = "";
    if (e.cols && e.cols.length > 0) {
        var A = e.cols, B = "", N = false, q = 0, F = A.length;
        A[0].type === "separator" && (k += "top ", q = 1), A[A.length - 1].type === "separator" && (k += "bottom ", F -= 1);
        for(var H = q; H < F; H++)A[H].type === "align" ? (w += Z1[A[H].align], N && (B += "none "), N = true) : A[H].type === "separator" && N && (B += A[H].separator === "|" ? "solid " : "dashed ", N = false);
        b.setAttribute("columnalign", /*#__PURE__*/ w.trim()), /[sd]/.test(B) && b.setAttribute("columnlines", /*#__PURE__*/ B.trim());
    }
    if (e.colSeparationType === "align") {
        for(var U = e.cols || [], P = "", Y = 1; Y < U.length; Y++)P += Y % 2 ? "0em " : "1em ";
        b.setAttribute("columnspacing", /*#__PURE__*/ P.trim());
    } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? b.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? b.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? b.setAttribute("columnspacing", "0.5em") : b.setAttribute("columnspacing", "1em");
    var V = "", Z = e.hLinesBeforeRow;
    k += Z[0].length > 0 ? "left " : "", k += Z[Z.length - 1].length > 0 ? "right " : "";
    for(var X = 1; X < Z.length - 1; X++)V += Z[X].length === 0 ? "none " : Z[X][0] ? "dashed " : "solid ";
    return /[sd]/.test(V) && b.setAttribute("rowlines", /*#__PURE__*/ V.trim()), k !== "" && (b = new M.MathNode("menclose", [
        b
    ]), b.setAttribute("notation", /*#__PURE__*/ k.trim())), e.arraystretch && e.arraystretch < 1 && (b = new M.MathNode("mstyle", [
        b
    ]), b.setAttribute("scriptlevel", "1")), b;
}, "mathmlBuilder"), ea = /*#__PURE__*/ m$1(function(e, t) {
    e.envName.indexOf("ed") === -1 && We(e);
    var a = [], n = e.envName.indexOf("at") > -1 ? "alignat" : "align", s = e.envName === "split", o = /*#__PURE__*/ Y0(e.parser, {
        cols: a,
        addJot: true,
        autoTag: s ? void 0 : Rt(e.envName),
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
        for(var b = "", x = 0; x < t[0].body.length; x++){
            var k = /*#__PURE__*/ L(t[0].body[x], "textord");
            b += k.text;
        }
        h = /*#__PURE__*/ Number(b), c = h * 2;
    }
    var w = !c;
    o.body.forEach(function(q) {
        for(var F = 1; F < q.length; F += 2){
            var H = /*#__PURE__*/ L(q[F], "styling"), U = /*#__PURE__*/ L(H.body[0], "ordgroup");
            U.body.unshift(v);
        }
        if (w) c < q.length && (c = q.length);
        else {
            var P = q.length / 2;
            if (h < P) throw new z("Too many math in a row: " + ("expected " + h + ", but got " + P), q[0]);
        }
    });
    for(var A = 0; A < c; ++A){
        var B = "r", N = 0;
        A % 2 === 1 ? B = "l" : A > 0 && w && (N = 1), a[A] = {
            type: "align",
            align: B,
            pregap: N,
            postgap: 0
        };
    }
    return o.colSeparationType = w ? "align" : "alignat", o;
}, "alignedHandler");
A0({
    type: "array",
    names: [
        "array",
        "darray"
    ],
    props: {
        numArgs: 1
    },
    handler (r, e) {
        var t = /*#__PURE__*/ Ye(e[0]), a = t ? [
            e[0]
        ] : L(e[0], "ordgroup").body, n = /*#__PURE__*/ a.map(function(o) {
            var h = /*#__PURE__*/ Bt(o), c = h.text;
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
        return Y0(r.parser, s, /*#__PURE__*/ Et(r.envName));
    },
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
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
    handler (r) {
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
        }[r.envName.replace("*", "")], t = "c", a = {
            hskipBeforeAndAfter: false,
            cols: [
                {
                    type: "align",
                    align: t
                }
            ]
        };
        if (r.envName.charAt(r.envName.length - 1) === "*") {
            var n = r.parser;
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
        var s = /*#__PURE__*/ Y0(r.parser, a, /*#__PURE__*/ Et(r.envName)), o = /*#__PURE__*/ Math.max(0, .../*#__PURE__*/ s.body.map((h)=>h.length));
        return s.cols = /*#__PURE__*/ new Array(o).fill({
            type: "align",
            align: t
        }), e ? {
            type: "leftright",
            mode: r.mode,
            body: [
                s
            ],
            left: e[0],
            right: e[1],
            rightColor: void 0
        } : s;
    },
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
    type: "array",
    names: [
        "smallmatrix"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        var e = {
            arraystretch: .5
        }, t = /*#__PURE__*/ Y0(r.parser, e, "script");
        return t.colSeparationType = "small", t;
    },
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
    type: "array",
    names: [
        "subarray"
    ],
    props: {
        numArgs: 1
    },
    handler (r, e) {
        var t = /*#__PURE__*/ Ye(e[0]), a = t ? [
            e[0]
        ] : L(e[0], "ordgroup").body, n = /*#__PURE__*/ a.map(function(o) {
            var h = /*#__PURE__*/ Bt(o), c = h.text;
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
            arraystretch: .5
        };
        if (s = /*#__PURE__*/ Y0(r.parser, s, "script"), s.body.length > 0 && s.body[0].length > 1) throw new z("{subarray} can contain only one column");
        return s;
    },
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
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
    handler (r) {
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
        }, t = /*#__PURE__*/ Y0(r.parser, e, /*#__PURE__*/ Et(r.envName));
        return {
            type: "leftright",
            mode: r.mode,
            body: [
                t
            ],
            left: r.envName.indexOf("r") > -1 ? "." : "\\{",
            right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
            rightColor: void 0
        };
    },
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
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
    handler: ea,
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
    type: "array",
    names: [
        "gathered",
        "gather",
        "gather*"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        R.contains([
            "gather",
            "gather*"
        ], r.envName) && We(r);
        var e = {
            cols: [
                {
                    type: "align",
                    align: "c"
                }
            ],
            addJot: true,
            colSeparationType: "gather",
            autoTag: /*#__PURE__*/ Rt(r.envName),
            emptySingleRow: true,
            leqno: r.parser.settings.leqno
        };
        return Y0(r.parser, e, "display");
    },
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
    type: "array",
    names: [
        "alignat",
        "alignat*",
        "alignedat"
    ],
    props: {
        numArgs: 1
    },
    handler: ea,
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
    type: "array",
    names: [
        "equation",
        "equation*"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        We(r);
        var e = {
            autoTag: /*#__PURE__*/ Rt(r.envName),
            emptySingleRow: true,
            singleRow: true,
            maxNumCols: 1,
            leqno: r.parser.settings.leqno
        };
        return Y0(r.parser, e, "display");
    },
    htmlBuilder: T0,
    mathmlBuilder: B0
});
A0({
    type: "array",
    names: [
        "CD"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        return We(r), I1(r.parser);
    },
    htmlBuilder: T0,
    mathmlBuilder: B0
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
    handler (r, e) {
        throw new z(r.funcName + " valid only within array environment");
    }
});
var ir = Qr;
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
    handler (r, e) {
        var { parser: t, funcName: a } = r, n = e[0];
        if (n.type !== "ordgroup") throw new z("Invalid environment name", n);
        for(var s = "", o = 0; o < n.body.length; ++o)s += L(n.body[o], "textord").text;
        if (a === "\\begin") {
            if (!ir.hasOwnProperty(s)) throw new z("No such environment: " + s, n);
            var h = ir[s], { args: c, optArgs: v } = t.parseArguments("\\begin{" + s + "}", h), b = {
                mode: t.mode,
                envName: s,
                parser: t
            }, x = /*#__PURE__*/ h.handler(b, c, v);
            t.expect("\\end", false);
            var k = t.nextToken, w = /*#__PURE__*/ L(/*#__PURE__*/ t.parseFunction(), "environment");
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
var ta = /*#__PURE__*/ m$1((r, e)=>{
    var t = r.font, a = /*#__PURE__*/ e.withFont(t);
    return G(r.body, a);
}, "htmlBuilder$5"), ra = /*#__PURE__*/ m$1((r, e)=>{
    var t = r.font, a = /*#__PURE__*/ e.withFont(t);
    return $(r.body, a);
}, "mathmlBuilder$4"), sr = {
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
        "\\mathsfit",
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a } = r, n = /*#__PURE__*/ Le(e[0]), s = a;
        return s in sr && (s = sr[s]), {
            type: "font",
            mode: t.mode,
            font: /*#__PURE__*/ s.slice(1),
            body: n
        };
    }, "handler"),
    htmlBuilder: ta,
    mathmlBuilder: ra
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r, a = e[0], n = /*#__PURE__*/ R.isCharacterBox(a);
        return {
            type: "mclass",
            mode: t.mode,
            mclass: /*#__PURE__*/ Xe(a),
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a, breakOnTokenText: n } = r, { mode: s } = t, o = /*#__PURE__*/ t.parseExpression(true, n), h = "math" + a.slice(1);
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
    htmlBuilder: ta,
    mathmlBuilder: ra
});
var aa = /*#__PURE__*/ m$1((r, e)=>{
    var t = e;
    return r === "display" ? t = t.id >= I.SCRIPT.id ? t.text() : I.DISPLAY : r === "text" && t.size === I.DISPLAY.size ? t = I.TEXT : r === "script" ? t = I.SCRIPT : r === "scriptscript" && (t = I.SCRIPTSCRIPT), t;
}, "adjustStyle"), It = /*#__PURE__*/ m$1((r, e)=>{
    var t = /*#__PURE__*/ aa(r.size, e.style), a = /*#__PURE__*/ t.fracNum(), n = /*#__PURE__*/ t.fracDen(), s;
    s = /*#__PURE__*/ e.havingStyle(a);
    var o = /*#__PURE__*/ G(r.numer, s, e);
    if (r.continued) {
        var h = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
        o.height = o.height < h ? h : o.height, o.depth = o.depth < c ? c : o.depth;
    }
    s = /*#__PURE__*/ e.havingStyle(n);
    var v = /*#__PURE__*/ G(r.denom, s, e), b, x, k;
    r.hasBarLine ? (r.barSize ? (x = /*#__PURE__*/ Q(r.barSize, e), b = /*#__PURE__*/ y.makeLineSpan("frac-line", e, x)) : b = /*#__PURE__*/ y.makeLineSpan("frac-line", e), x = b.height, k = b.height) : (b = null, x = 0, k = e.fontMetrics().defaultRuleThickness);
    var w, A, B;
    t.size === I.DISPLAY.size || r.size === "display" ? (w = e.fontMetrics().num1, x > 0 ? A = 3 * k : A = 7 * k, B = e.fontMetrics().denom1) : (x > 0 ? (w = e.fontMetrics().num2, A = k) : (w = e.fontMetrics().num3, A = 3 * k), B = e.fontMetrics().denom2);
    var N;
    if (b) {
        var F = e.fontMetrics().axisHeight;
        w - o.depth - (F + .5 * x) < A && (w += A - (w - o.depth - (F + .5 * x))), F - .5 * x - (v.height - B) < A && (B += A - (F - .5 * x - (v.height - B)));
        var H = -(F - .5 * x);
        N = /*#__PURE__*/ y.makeVList({
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
                    shift: H
                },
                {
                    type: "elem",
                    elem: o,
                    shift: -w
                }
            ]
        }, e);
    } else {
        var q = w - o.depth - (v.height - B);
        q < A && (w += .5 * (A - q), B += .5 * (A - q)), N = /*#__PURE__*/ y.makeVList({
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
    s = /*#__PURE__*/ e.havingStyle(t), N.height *= s.sizeMultiplier / e.sizeMultiplier, N.depth *= s.sizeMultiplier / e.sizeMultiplier;
    var U;
    t.size === I.DISPLAY.size ? U = e.fontMetrics().delim1 : t.size === I.SCRIPTSCRIPT.size ? U = e.havingStyle(I.SCRIPT).fontMetrics().delim2 : U = e.fontMetrics().delim2;
    var P, Y;
    return r.leftDelim == null ? P = /*#__PURE__*/ pe(e, [
        "mopen"
    ]) : P = /*#__PURE__*/ R0.customSizedDelim(r.leftDelim, U, true, /*#__PURE__*/ e.havingStyle(t), r.mode, [
        "mopen"
    ]), r.continued ? Y = /*#__PURE__*/ y.makeSpan([]) : r.rightDelim == null ? Y = /*#__PURE__*/ pe(e, [
        "mclose"
    ]) : Y = /*#__PURE__*/ R0.customSizedDelim(r.rightDelim, U, true, /*#__PURE__*/ e.havingStyle(t), r.mode, [
        "mclose"
    ]), y.makeSpan(/*#__PURE__*/ [
        "mord"
    ].concat(/*#__PURE__*/ s.sizingClasses(e)), [
        P,
        /*#__PURE__*/ y.makeSpan([
            "mfrac"
        ], [
            N
        ]),
        Y
    ], e);
}, "htmlBuilder$4"), Ot = /*#__PURE__*/ m$1((r, e)=>{
    var t = new M.MathNode("mfrac", [
        /*#__PURE__*/ $(r.numer, e),
        /*#__PURE__*/ $(r.denom, e)
    ]);
    if (!r.hasBarLine) t.setAttribute("linethickness", "0px");
    else if (r.barSize) {
        var a = /*#__PURE__*/ Q(r.barSize, e);
        t.setAttribute("linethickness", /*#__PURE__*/ T(a));
    }
    var n = /*#__PURE__*/ aa(r.size, e.style);
    if (n.size !== e.style.size) {
        t = new M.MathNode("mstyle", [
            t
        ]);
        var s = n.size === I.DISPLAY.size ? "true" : "false";
        t.setAttribute("displaystyle", s), t.setAttribute("scriptlevel", "0");
    }
    if (r.leftDelim != null || r.rightDelim != null) {
        var o = [];
        if (r.leftDelim != null) {
            var h = new M.MathNode("mo", [
                new M.TextNode(r.leftDelim.replace("\\", ""))
            ]);
            h.setAttribute("fence", "true"), o.push(h);
        }
        if (o.push(t), r.rightDelim != null) {
            var c = new M.MathNode("mo", [
                new M.TextNode(r.rightDelim.replace("\\", ""))
            ]);
            c.setAttribute("fence", "true"), o.push(c);
        }
        return At(o);
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a } = r, n = e[0], s = e[1], o, h = null, c = null, v = "auto";
        switch(a){
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
        switch(a){
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
    htmlBuilder: It,
    mathmlBuilder: Ot
});
D({
    type: "genfrac",
    names: [
        "\\cfrac"
    ],
    props: {
        numArgs: 2
    },
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a } = r, n = e[0], s = e[1];
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
    handler (r) {
        var { parser: e, funcName: t, token: a } = r, n;
        switch(t){
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
var lr = [
    "display",
    "text",
    "script",
    "scriptscript"
], or = /*#__PURE__*/ m$1(function(e) {
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
    handler (r, e) {
        var { parser: t } = r, a = e[4], n = e[5], s = /*#__PURE__*/ Le(e[0]), o = s.type === "atom" && s.family === "open" ? or(s.text) : null, h = /*#__PURE__*/ Le(e[1]), c = h.type === "atom" && h.family === "close" ? or(h.text) : null, v = /*#__PURE__*/ L(e[2], "size"), b, x = null;
        v.isBlank ? b = true : (x = v.value, b = x.number > 0);
        var k = "auto", w = e[3];
        if (w.type === "ordgroup") {
            if (w.body.length > 0) {
                var A = /*#__PURE__*/ L(w.body[0], "textord");
                k = lr[Number(A.text)];
            }
        } else w = /*#__PURE__*/ L(w, "textord"), k = lr[Number(w.text)];
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
    htmlBuilder: It,
    mathmlBuilder: Ot
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
    handler (r, e) {
        var { parser: t, funcName: a, token: n } = r;
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a } = r, n = e[0], s = /*#__PURE__*/ Ta(L(e[1], "infix").size), o = e[2], h = s.number > 0;
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
    htmlBuilder: It,
    mathmlBuilder: Ot
});
var na = /*#__PURE__*/ m$1((r, e)=>{
    var t = e.style, a, n;
    r.type === "supsub" ? (a = r.sup ? G(r.sup, /*#__PURE__*/ e.havingStyle(/*#__PURE__*/ t.sup()), e) : G(r.sub, /*#__PURE__*/ e.havingStyle(/*#__PURE__*/ t.sub()), e), n = /*#__PURE__*/ L(r.base, "horizBrace")) : n = /*#__PURE__*/ L(r, "horizBrace");
    var s = /*#__PURE__*/ G(n.base, /*#__PURE__*/ e.havingBaseStyle(I.DISPLAY)), o = /*#__PURE__*/ I0.svgSpan(n, e), h;
    if (n.isOver ? (h = /*#__PURE__*/ y.makeVList({
        positionType: "firstBaseline",
        children: [
            {
                type: "elem",
                elem: s
            },
            {
                type: "kern",
                size: .1
            },
            {
                type: "elem",
                elem: o
            }
        ]
    }, e), h.children[0].children[0].children[1].classes.push("svg-align")) : (h = /*#__PURE__*/ y.makeVList({
        positionType: "bottom",
        positionData: s.depth + .1 + o.height,
        children: [
            {
                type: "elem",
                elem: o
            },
            {
                type: "kern",
                size: .1
            },
            {
                type: "elem",
                elem: s
            }
        ]
    }, e), h.children[0].children[0].children[0].classes.push("svg-align")), a) {
        var c = /*#__PURE__*/ y.makeSpan([
            "mord",
            n.isOver ? "mover" : "munder"
        ], [
            h
        ], e);
        n.isOver ? h = /*#__PURE__*/ y.makeVList({
            positionType: "firstBaseline",
            children: [
                {
                    type: "elem",
                    elem: c
                },
                {
                    type: "kern",
                    size: .2
                },
                {
                    type: "elem",
                    elem: a
                }
            ]
        }, e) : h = /*#__PURE__*/ y.makeVList({
            positionType: "bottom",
            positionData: c.depth + .2 + a.height + a.depth,
            children: [
                {
                    type: "elem",
                    elem: a
                },
                {
                    type: "kern",
                    size: .2
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
}, "htmlBuilder$3"), K1 = /*#__PURE__*/ m$1((r, e)=>{
    var t = /*#__PURE__*/ I0.mathMLnode(r.label);
    return new M.MathNode(r.isOver ? "mover" : "munder", [
        /*#__PURE__*/ $(r.base, e),
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
    handler (r, e) {
        var { parser: t, funcName: a } = r;
        return {
            type: "horizBrace",
            mode: t.mode,
            label: a,
            isOver: /*#__PURE__*/ /^\\over/.test(a),
            base: e[0]
        };
    },
    htmlBuilder: na,
    mathmlBuilder: K1
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r, a = e[1], n = L(e[0], "url").url;
        return t.settings.isTrusted({
            command: "\\href",
            url: n
        }) ? {
            type: "href",
            mode: t.mode,
            href: n,
            body: /*#__PURE__*/ _(a)
        } : t.formatUnsupportedCmd("\\href");
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ r0(r.body, e, false);
        return y.makeAnchor(r.href, [], t, e);
    }, "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ U0(r.body, e);
        return t instanceof i0 || (t = new i0("mrow", [
            t
        ])), t.setAttribute("href", r.href), t;
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r, a = L(e[0], "url").url;
        if (!t.settings.isTrusted({
            command: "\\url",
            url: a
        })) return t.formatUnsupportedCmd("\\url");
        for(var n = [], s = 0; s < a.length; s++){
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
            body: /*#__PURE__*/ _(h)
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
    handler (r, e) {
        var { parser: t } = r;
        return {
            type: "hbox",
            mode: t.mode,
            body: /*#__PURE__*/ _(e[0])
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ r0(r.body, e, false);
        return y.makeFragment(t);
    },
    mathmlBuilder (r, e) {
        return new M.MathNode("mrow", m0(r.body, e));
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a, token: n } = r, s = L(e[0], "raw").string, o = e[1];
        t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
        var h, c = {};
        switch(a){
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
            case "\\htmlData":
                {
                    for(var v = /*#__PURE__*/ s.split(","), b = 0; b < v.length; b++){
                        var x = /*#__PURE__*/ v[b].split("=");
                        if (x.length !== 2) throw new z("Error parsing key-value for \\htmlData");
                        c["data-" + x[0].trim()] = /*#__PURE__*/ x[1].trim();
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
            body: /*#__PURE__*/ _(o)
        } : t.formatUnsupportedCmd(a);
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ r0(r.body, e, false), a = [
            "enclosing"
        ];
        r.attributes.class && a.push(.../*#__PURE__*/ r.attributes.class.trim().split(/\s+/));
        var n = /*#__PURE__*/ y.makeSpan(a, t, e);
        for(var s in r.attributes)s !== "class" && r.attributes.hasOwnProperty(s) && n.setAttribute(s, r.attributes[s]);
        return n;
    }, "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>U0(r.body, e), "mathmlBuilder")
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r;
        return {
            type: "htmlmathml",
            mode: t.mode,
            html: /*#__PURE__*/ _(e[0]),
            mathml: /*#__PURE__*/ _(e[1])
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ r0(r.html, e, false);
        return y.makeFragment(t);
    }, "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>U0(r.mathml, e), "mathmlBuilder")
});
var lt = /*#__PURE__*/ m$1(function(e) {
    if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return {
        number: +e,
        unit: "bp"
    };
    var t = /*#__PURE__*/ /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
    if (!t) throw new z("Invalid size: '" + e + "' in \\includegraphics");
    var a = {
        number: +(t[1] + t[2]),
        unit: t[3]
    };
    if (!Sr(a)) throw new z("Invalid unit: '" + a.unit + "' in \\includegraphics.");
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
    handler: /*#__PURE__*/ m$1((r, e, t)=>{
        var { parser: a } = r, n = {
            number: 0,
            unit: "em"
        }, s = {
            number: .9,
            unit: "em"
        }, o = {
            number: 0,
            unit: "em"
        }, h = "";
        if (t[0]) for(var c = L(t[0], "raw").string, v = /*#__PURE__*/ c.split(","), b = 0; b < v.length; b++){
            var x = /*#__PURE__*/ v[b].split("=");
            if (x.length === 2) {
                var k = /*#__PURE__*/ x[1].trim();
                switch(x[0].trim()){
                    case "alt":
                        h = k;
                        break;
                    case "width":
                        n = /*#__PURE__*/ lt(k);
                        break;
                    case "height":
                        s = /*#__PURE__*/ lt(k);
                        break;
                    case "totalheight":
                        o = /*#__PURE__*/ lt(k);
                        break;
                    default:
                        throw new z("Invalid key: '" + x[0] + "' in \\includegraphics.");
                }
            }
        }
        var w = L(e[0], "url").url;
        return h === "" && (h = w, h = /*#__PURE__*/ h.replace(/^.*[\\/]/, ""), h = /*#__PURE__*/ h.substring(0, /*#__PURE__*/ h.lastIndexOf("."))), a.settings.isTrusted({
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
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ Q(r.height, e), a = 0;
        r.totalheight.number > 0 && (a = Q(r.totalheight, e) - t);
        var n = 0;
        r.width.number > 0 && (n = /*#__PURE__*/ Q(r.width, e));
        var s = {
            height: /*#__PURE__*/ T(t + a)
        };
        n > 0 && (s.width = /*#__PURE__*/ T(n)), a > 0 && (s.verticalAlign = /*#__PURE__*/ T(-a));
        var o = new dt(r.src, r.alt, s);
        return o.height = t, o.depth = a, o;
    }, "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = new M.MathNode("mglyph", []);
        t.setAttribute("alt", r.alt);
        var a = /*#__PURE__*/ Q(r.height, e), n = 0;
        if (r.totalheight.number > 0 && (n = Q(r.totalheight, e) - a, t.setAttribute("valign", /*#__PURE__*/ T(-n))), t.setAttribute("height", /*#__PURE__*/ T(a + n)), r.width.number > 0) {
            var s = /*#__PURE__*/ Q(r.width, e);
            t.setAttribute("width", /*#__PURE__*/ T(s));
        }
        return t.setAttribute("src", r.src), t;
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
    handler (r, e) {
        var { parser: t, funcName: a } = r, n = /*#__PURE__*/ L(e[0], "size");
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
    htmlBuilder (r, e) {
        return y.makeGlue(r.dimension, e);
    },
    mathmlBuilder (r, e) {
        var t = /*#__PURE__*/ Q(r.dimension, e);
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a } = r, n = e[0];
        return {
            type: "lap",
            mode: t.mode,
            alignment: /*#__PURE__*/ a.slice(5),
            body: n
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t;
        r.alignment === "clap" ? (t = /*#__PURE__*/ y.makeSpan([], [
            /*#__PURE__*/ G(r.body, e)
        ]), t = /*#__PURE__*/ y.makeSpan([
            "inner"
        ], [
            t
        ], e)) : t = /*#__PURE__*/ y.makeSpan([
            "inner"
        ], [
            /*#__PURE__*/ G(r.body, e)
        ]);
        var a = /*#__PURE__*/ y.makeSpan([
            "fix"
        ], []), n = /*#__PURE__*/ y.makeSpan([
            r.alignment
        ], [
            t,
            a
        ], e), s = /*#__PURE__*/ y.makeSpan([
            "strut"
        ]);
        return s.style.height = /*#__PURE__*/ T(n.height + n.depth), n.depth && (s.style.verticalAlign = /*#__PURE__*/ T(-n.depth)), n.children.unshift(s), n = /*#__PURE__*/ y.makeSpan([
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
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = new M.MathNode("mpadded", [
            /*#__PURE__*/ $(r.body, e)
        ]);
        if (r.alignment !== "rlap") {
            var a = r.alignment === "llap" ? "-1" : "-0.5";
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
    handler (r, e) {
        var { funcName: t, parser: a } = r, n = a.mode;
        a.switchMode("math");
        var s = t === "\\(" ? "\\)" : "$", o = /*#__PURE__*/ a.parseExpression(false, s);
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
    handler (r, e) {
        throw new z("Mismatched " + r.funcName);
    }
});
var ur = /*#__PURE__*/ m$1((r, e)=>{
    switch(e.style.size){
        case I.DISPLAY.size:
            return r.display;
        case I.TEXT.size:
            return r.text;
        case I.SCRIPT.size:
            return r.script;
        case I.SCRIPTSCRIPT.size:
            return r.scriptscript;
        default:
            return r.text;
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r;
        return {
            type: "mathchoice",
            mode: t.mode,
            display: /*#__PURE__*/ _(e[0]),
            text: /*#__PURE__*/ _(e[1]),
            script: /*#__PURE__*/ _(e[2]),
            scriptscript: /*#__PURE__*/ _(e[3])
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ ur(r, e), a = /*#__PURE__*/ r0(t, e, false);
        return y.makeFragment(a);
    }, "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ ur(r, e);
        return U0(t, e);
    }, "mathmlBuilder")
});
var ia = /*#__PURE__*/ m$1((r, e, t, a, n, s, o)=>{
    r = /*#__PURE__*/ y.makeSpan([], [
        r
    ]);
    var h = t && R.isCharacterBox(t), c, v;
    if (e) {
        var b = /*#__PURE__*/ G(e, /*#__PURE__*/ a.havingStyle(/*#__PURE__*/ n.sup()), a);
        v = {
            elem: b,
            kern: /*#__PURE__*/ Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - b.depth)
        };
    }
    if (t) {
        var x = /*#__PURE__*/ G(t, /*#__PURE__*/ a.havingStyle(/*#__PURE__*/ n.sub()), a);
        c = {
            elem: x,
            kern: /*#__PURE__*/ Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - x.height)
        };
    }
    var k;
    if (v && c) {
        var w = a.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + r.depth + o;
        k = /*#__PURE__*/ y.makeVList({
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
                    marginLeft: /*#__PURE__*/ T(-s)
                },
                {
                    type: "kern",
                    size: c.kern
                },
                {
                    type: "elem",
                    elem: r
                },
                {
                    type: "kern",
                    size: v.kern
                },
                {
                    type: "elem",
                    elem: v.elem,
                    marginLeft: /*#__PURE__*/ T(s)
                },
                {
                    type: "kern",
                    size: a.fontMetrics().bigOpSpacing5
                }
            ]
        }, a);
    } else if (c) {
        var A = r.height - o;
        k = /*#__PURE__*/ y.makeVList({
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
                    marginLeft: /*#__PURE__*/ T(-s)
                },
                {
                    type: "kern",
                    size: c.kern
                },
                {
                    type: "elem",
                    elem: r
                }
            ]
        }, a);
    } else if (v) {
        var B = r.depth + o;
        k = /*#__PURE__*/ y.makeVList({
            positionType: "bottom",
            positionData: B,
            children: [
                {
                    type: "elem",
                    elem: r
                },
                {
                    type: "kern",
                    size: v.kern
                },
                {
                    type: "elem",
                    elem: v.elem,
                    marginLeft: /*#__PURE__*/ T(s)
                },
                {
                    type: "kern",
                    size: a.fontMetrics().bigOpSpacing5
                }
            ]
        }, a);
    } else return r;
    var N = [
        k
    ];
    if (c && s !== 0 && !h) {
        var q = /*#__PURE__*/ y.makeSpan([
            "mspace"
        ], [], a);
        q.style.marginRight = /*#__PURE__*/ T(s), N.unshift(q);
    }
    return y.makeSpan([
        "mop",
        "op-limits"
    ], N, a);
}, "assembleSupSub"), sa = [
    "\\smallint"
], ie = /*#__PURE__*/ m$1((r, e)=>{
    var t, a, n = false, s;
    r.type === "supsub" ? (t = r.sup, a = r.sub, s = /*#__PURE__*/ L(r.base, "op"), n = true) : s = /*#__PURE__*/ L(r, "op");
    var o = e.style, h = false;
    o.size === I.DISPLAY.size && s.symbol && !R.contains(sa, s.name) && (h = true);
    var c;
    if (s.symbol) {
        var v = h ? "Size2-Regular" : "Size1-Regular", b = "";
        if ((s.name === "\\oiint" || s.name === "\\oiiint") && (b = /*#__PURE__*/ s.name.slice(1), s.name = b === "oiint" ? "\\iint" : "\\iiint"), c = /*#__PURE__*/ y.makeSymbol(s.name, v, "math", e, [
            "mop",
            "op-symbol",
            h ? "large-op" : "small-op"
        ]), b.length > 0) {
            var x = c.italic, k = /*#__PURE__*/ y.staticSvg(b + "Size" + (h ? "2" : "1"), e);
            c = /*#__PURE__*/ y.makeVList({
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
                        shift: h ? .08 : 0
                    }
                ]
            }, e), s.name = "\\" + b, c.classes.unshift("mop"), c.italic = x;
        }
    } else if (s.body) {
        var w = /*#__PURE__*/ r0(s.body, e, true);
        w.length === 1 && w[0] instanceof h0 ? (c = w[0], c.classes[0] = "mop") : c = /*#__PURE__*/ y.makeSpan([
            "mop"
        ], w, e);
    } else {
        for(var A = [], B = 1; B < s.name.length; B++)A.push(/*#__PURE__*/ y.mathsym(s.name[B], s.mode, e));
        c = /*#__PURE__*/ y.makeSpan([
            "mop"
        ], A, e);
    }
    var N = 0, q = 0;
    return (c instanceof h0 || s.name === "\\oiint" || s.name === "\\oiiint") && !s.suppressBaseShift && (N = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, q = c.italic), n ? ia(c, t, a, e, o, q, N) : (N && (c.style.position = "relative", c.style.top = /*#__PURE__*/ T(N)), c);
}, "htmlBuilder$2"), ve = /*#__PURE__*/ m$1((r, e)=>{
    var t;
    if (r.symbol) t = new i0("mo", [
        /*#__PURE__*/ b0(r.name, r.mode)
    ]), R.contains(sa, r.name) && t.setAttribute("largeop", "false");
    else if (r.body) t = new i0("mo", m0(r.body, e));
    else {
        t = new i0("mi", [
            new v0(r.name.slice(1))
        ]);
        var a = new i0("mo", [
            /*#__PURE__*/ b0("\u2061", "text")
        ]);
        r.parentIsSupSub ? t = new i0("mrow", [
            t,
            a
        ]) : t = /*#__PURE__*/ Er([
            t,
            a
        ]);
    }
    return t;
}, "mathmlBuilder$1"), J1 = {
    "\u220F": "\\prod",
    "\u2210": "\\coprod",
    "\u2211": "\\sum",
    "\u22C0": "\\bigwedge",
    "\u22C1": "\\bigvee",
    "\u22C2": "\\bigcap",
    "\u22C3": "\\bigcup",
    "\u2A00": "\\bigodot",
    "\u2A01": "\\bigoplus",
    "\u2A02": "\\bigotimes",
    "\u2A04": "\\biguplus",
    "\u2A06": "\\bigsqcup"
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
        "\u220F",
        "\u2210",
        "\u2211",
        "\u22C0",
        "\u22C1",
        "\u22C2",
        "\u22C3",
        "\u2A00",
        "\u2A01",
        "\u2A02",
        "\u2A04",
        "\u2A06"
    ],
    props: {
        numArgs: 0
    },
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a } = r, n = a;
        return n.length === 1 && (n = J1[n]), {
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r, a = e[0];
        return {
            type: "op",
            mode: t.mode,
            limits: false,
            parentIsSupSub: false,
            symbol: false,
            body: /*#__PURE__*/ _(a)
        };
    }, "handler"),
    htmlBuilder: ie,
    mathmlBuilder: ve
});
var Q1 = {
    "\u222B": "\\int",
    "\u222C": "\\iint",
    "\u222D": "\\iiint",
    "\u222E": "\\oint",
    "\u222F": "\\oiint",
    "\u2230": "\\oiiint"
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
    handler (r) {
        var { parser: e, funcName: t } = r;
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
    handler (r) {
        var { parser: e, funcName: t } = r;
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
        "\u222B",
        "\u222C",
        "\u222D",
        "\u222E",
        "\u222F",
        "\u2230"
    ],
    props: {
        numArgs: 0
    },
    handler (r) {
        var { parser: e, funcName: t } = r, a = t;
        return a.length === 1 && (a = Q1[a]), {
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
var la = /*#__PURE__*/ m$1((r, e)=>{
    var t, a, n = false, s;
    r.type === "supsub" ? (t = r.sup, a = r.sub, s = /*#__PURE__*/ L(r.base, "operatorname"), n = true) : s = /*#__PURE__*/ L(r, "operatorname");
    var o;
    if (s.body.length > 0) {
        for(var h = /*#__PURE__*/ s.body.map((x)=>{
            var k = x.text;
            return typeof k == "string" ? {
                type: "textord",
                mode: x.mode,
                text: k
            } : x;
        }), c = /*#__PURE__*/ r0(h, /*#__PURE__*/ e.withFont("mathrm"), true), v = 0; v < c.length; v++){
            var b = c[v];
            b instanceof h0 && (b.text = /*#__PURE__*/ b.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
        }
        o = /*#__PURE__*/ y.makeSpan([
            "mop"
        ], c, e);
    } else o = /*#__PURE__*/ y.makeSpan([
        "mop"
    ], [], e);
    return n ? ia(o, t, a, e, e.style, 0, 0) : o;
}, "htmlBuilder$1"), _1 = /*#__PURE__*/ m$1((r, e)=>{
    for(var t = /*#__PURE__*/ m0(r.body, /*#__PURE__*/ e.withFont("mathrm")), a = true, n = 0; n < t.length; n++){
        var s = t[n];
        if (!(s instanceof M.SpaceNode)) if (s instanceof M.MathNode) switch(s.type){
            case "mi":
            case "mn":
            case "ms":
            case "mspace":
            case "mtext":
                break;
            case "mo":
                {
                    var o = s.children[0];
                    s.children.length === 1 && o instanceof M.TextNode ? o.text = /*#__PURE__*/ o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = false;
                    break;
                }
            default:
                a = false;
        }
        else a = false;
    }
    if (a) {
        var h = /*#__PURE__*/ t.map((b)=>b.toText()).join("");
        t = [
            new M.TextNode(h)
        ];
    }
    var c = new M.MathNode("mi", t);
    c.setAttribute("mathvariant", "normal");
    var v = new M.MathNode("mo", [
        /*#__PURE__*/ b0("\u2061", "text")
    ]);
    return r.parentIsSupSub ? new M.MathNode("mrow", [
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t, funcName: a } = r, n = e[0];
        return {
            type: "operatorname",
            mode: t.mode,
            body: /*#__PURE__*/ _(n),
            alwaysHandleSupSub: a === "\\operatornamewithlimits",
            limits: false,
            parentIsSupSub: false
        };
    }, "handler"),
    htmlBuilder: la,
    mathmlBuilder: _1
});
m("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Z0({
    type: "ordgroup",
    htmlBuilder (r, e) {
        return r.semisimple ? y.makeFragment(/*#__PURE__*/ r0(r.body, e, false)) : y.makeSpan([
            "mord"
        ], /*#__PURE__*/ r0(r.body, e, true), e);
    },
    mathmlBuilder (r, e) {
        return U0(r.body, e, true);
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
    handler (r, e) {
        var { parser: t } = r, a = e[0];
        return {
            type: "overline",
            mode: t.mode,
            body: a
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ G(r.body, /*#__PURE__*/ e.havingCrampedStyle()), a = /*#__PURE__*/ y.makeLineSpan("overline-line", e), n = e.fontMetrics().defaultRuleThickness, s = /*#__PURE__*/ y.makeVList({
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
    mathmlBuilder (r, e) {
        var t = new M.MathNode("mo", [
            new M.TextNode("\u203E")
        ]);
        t.setAttribute("stretchy", "true");
        var a = new M.MathNode("mover", [
            /*#__PURE__*/ $(r.body, e),
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r, a = e[0];
        return {
            type: "phantom",
            mode: t.mode,
            body: /*#__PURE__*/ _(a)
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ r0(r.body, /*#__PURE__*/ e.withPhantom(), false);
        return y.makeFragment(t);
    }, "htmlBuilder"),
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ m0(r.body, e);
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r, a = e[0];
        return {
            type: "hphantom",
            mode: t.mode,
            body: a
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ y.makeSpan([], [
            /*#__PURE__*/ G(r.body, /*#__PURE__*/ e.withPhantom())
        ]);
        if (t.height = 0, t.depth = 0, t.children) for(var a = 0; a < t.children.length; a++)t.children[a].height = 0, t.children[a].depth = 0;
        return t = /*#__PURE__*/ y.makeVList({
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
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ m0(/*#__PURE__*/ _(r.body), e), a = new M.MathNode("mphantom", t), n = new M.MathNode("mpadded", [
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
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { parser: t } = r, a = e[0];
        return {
            type: "vphantom",
            mode: t.mode,
            body: a
        };
    }, "handler"),
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ y.makeSpan([
            "inner"
        ], [
            /*#__PURE__*/ G(r.body, /*#__PURE__*/ e.withPhantom())
        ]), a = /*#__PURE__*/ y.makeSpan([
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
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ m0(/*#__PURE__*/ _(r.body), e), a = new M.MathNode("mphantom", t), n = new M.MathNode("mpadded", [
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
    handler (r, e) {
        var { parser: t } = r, a = L(e[0], "size").value, n = e[1];
        return {
            type: "raisebox",
            mode: t.mode,
            dy: a,
            body: n
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ G(r.body, e), a = /*#__PURE__*/ Q(r.dy, e);
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
    mathmlBuilder (r, e) {
        var t = new M.MathNode("mpadded", [
            /*#__PURE__*/ $(r.body, e)
        ]), a = r.dy.number + r.dy.unit;
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
        allowedInText: true,
        allowedInArgument: true
    },
    handler (r) {
        var { parser: e } = r;
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
        allowedInText: true,
        allowedInMath: true,
        argTypes: [
            "size",
            "size",
            "size"
        ]
    },
    handler (r, e, t) {
        var { parser: a } = r, n = t[0], s = /*#__PURE__*/ L(e[0], "size"), o = /*#__PURE__*/ L(e[1], "size");
        return {
            type: "rule",
            mode: a.mode,
            shift: n && L(n, "size").value,
            width: s.value,
            height: o.value
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ y.makeSpan([
            "mord",
            "rule"
        ], [], e), a = /*#__PURE__*/ Q(r.width, e), n = /*#__PURE__*/ Q(r.height, e), s = r.shift ? Q(r.shift, e) : 0;
        return t.style.borderRightWidth = /*#__PURE__*/ T(a), t.style.borderTopWidth = /*#__PURE__*/ T(n), t.style.bottom = /*#__PURE__*/ T(s), t.width = a, t.height = n + s, t.depth = -s, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
    },
    mathmlBuilder (r, e) {
        var t = /*#__PURE__*/ Q(r.width, e), a = /*#__PURE__*/ Q(r.height, e), n = r.shift ? Q(r.shift, e) : 0, s = e.color && e.getColor() || "black", o = new M.MathNode("mspace");
        o.setAttribute("mathbackground", s), o.setAttribute("width", /*#__PURE__*/ T(t)), o.setAttribute("height", /*#__PURE__*/ T(a));
        var h = new M.MathNode("mpadded", [
            o
        ]);
        return n >= 0 ? h.setAttribute("height", /*#__PURE__*/ T(n)) : (h.setAttribute("height", /*#__PURE__*/ T(n)), h.setAttribute("depth", /*#__PURE__*/ T(-n))), h.setAttribute("voffset", /*#__PURE__*/ T(n)), h;
    }
});
function oa(r, e, t) {
    for(var a = /*#__PURE__*/ r0(r, e, false), n = e.sizeMultiplier / t.sizeMultiplier, s = 0; s < a.length; s++){
        var o = /*#__PURE__*/ a[s].classes.indexOf("sizing");
        o < 0 ? Array.prototype.push.apply(a[s].classes, /*#__PURE__*/ e.sizingClasses(t)) : a[s].classes[o + 1] === "reset-size" + e.size && (a[s].classes[o + 1] = "reset-size" + t.size), a[s].height *= n, a[s].depth *= n;
    }
    return y.makeFragment(a);
}
m$1(oa, "sizingGroup");
var hr = [
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
], e4 = /*#__PURE__*/ m$1((r, e)=>{
    var t = /*#__PURE__*/ e.havingSize(r.size);
    return oa(r.body, t, e);
}, "htmlBuilder");
D({
    type: "sizing",
    names: hr,
    props: {
        numArgs: 0,
        allowedInText: true
    },
    handler: /*#__PURE__*/ m$1((r, e)=>{
        var { breakOnTokenText: t, funcName: a, parser: n } = r, s = /*#__PURE__*/ n.parseExpression(false, t);
        return {
            type: "sizing",
            mode: n.mode,
            size: hr.indexOf(a) + 1,
            body: s
        };
    }, "handler"),
    htmlBuilder: e4,
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ e.havingSize(r.size), a = /*#__PURE__*/ m0(r.body, t), n = new M.MathNode("mstyle", a);
        return n.setAttribute("mathsize", /*#__PURE__*/ T(t.sizeMultiplier)), n;
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
    handler: /*#__PURE__*/ m$1((r, e, t)=>{
        var { parser: a } = r, n = false, s = false, o = t[0] && L(t[0], "ordgroup");
        if (o) for(var h = "", c = 0; c < o.body.length; ++c){
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
    htmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = /*#__PURE__*/ y.makeSpan([], [
            /*#__PURE__*/ G(r.body, e)
        ]);
        if (!r.smashHeight && !r.smashDepth) return t;
        if (r.smashHeight && (t.height = 0, t.children)) for(var a = 0; a < t.children.length; a++)t.children[a].height = 0;
        if (r.smashDepth && (t.depth = 0, t.children)) for(var n = 0; n < t.children.length; n++)t.children[n].depth = 0;
        var s = /*#__PURE__*/ y.makeVList({
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
    mathmlBuilder: /*#__PURE__*/ m$1((r, e)=>{
        var t = new M.MathNode("mpadded", [
            /*#__PURE__*/ $(r.body, e)
        ]);
        return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
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
    handler (r, e, t) {
        var { parser: a } = r, n = t[0], s = e[0];
        return {
            type: "sqrt",
            mode: a.mode,
            body: s,
            index: n
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ G(r.body, /*#__PURE__*/ e.havingCrampedStyle());
        t.height === 0 && (t.height = e.fontMetrics().xHeight), t = /*#__PURE__*/ y.wrapFragment(t, e);
        var a = /*#__PURE__*/ e.fontMetrics(), n = a.defaultRuleThickness, s = n;
        e.style.id < I.TEXT.id && (s = e.fontMetrics().xHeight);
        var o = n + s / 4, h = t.height + t.depth + o + n, { span: c, ruleWidth: v, advanceWidth: b } = R0.sqrtImage(h, e), x = c.height - v;
        x > t.height + t.depth + o && (o = (o + x - t.height - t.depth) / 2);
        var k = c.height - t.height - o - v;
        t.style.paddingLeft = /*#__PURE__*/ T(b);
        var w = /*#__PURE__*/ y.makeVList({
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
        if (r.index) {
            var A = /*#__PURE__*/ e.havingStyle(I.SCRIPTSCRIPT), B = /*#__PURE__*/ G(r.index, A, e), N = .6 * (w.height - w.depth), q = /*#__PURE__*/ y.makeVList({
                positionType: "shift",
                positionData: -N,
                children: [
                    {
                        type: "elem",
                        elem: B
                    }
                ]
            }, e), F = /*#__PURE__*/ y.makeSpan([
                "root"
            ], [
                q
            ]);
            return y.makeSpan([
                "mord",
                "sqrt"
            ], [
                F,
                w
            ], e);
        } else return y.makeSpan([
            "mord",
            "sqrt"
        ], [
            w
        ], e);
    },
    mathmlBuilder (r, e) {
        var { body: t, index: a } = r;
        return a ? new M.MathNode("mroot", [
            /*#__PURE__*/ $(t, e),
            /*#__PURE__*/ $(a, e)
        ]) : new M.MathNode("msqrt", [
            /*#__PURE__*/ $(t, e)
        ]);
    }
});
var mr = {
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
    handler (r, e) {
        var { breakOnTokenText: t, funcName: a, parser: n } = r, s = /*#__PURE__*/ n.parseExpression(true, t), o = /*#__PURE__*/ a.slice(1, a.length - 5);
        return {
            type: "styling",
            mode: n.mode,
            style: o,
            body: s
        };
    },
    htmlBuilder (r, e) {
        var t = mr[r.style], a = /*#__PURE__*/ e.havingStyle(t).withFont("");
        return oa(r.body, a, e);
    },
    mathmlBuilder (r, e) {
        var t = mr[r.style], a = /*#__PURE__*/ e.havingStyle(t), n = /*#__PURE__*/ m0(r.body, a), s = new M.MathNode("mstyle", n), o = {
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
        }, h = o[r.style];
        return s.setAttribute("scriptlevel", h[0]), s.setAttribute("displaystyle", h[1]), s;
    }
});
var t4 = /*#__PURE__*/ m$1(function(e, t) {
    var a = e.base;
    if (a) if (a.type === "op") {
        var n = a.limits && (t.style.size === I.DISPLAY.size || a.alwaysHandleSupSub);
        return n ? ie : null;
    } else if (a.type === "operatorname") {
        var s = a.alwaysHandleSupSub && (t.style.size === I.DISPLAY.size || a.limits);
        return s ? la : null;
    } else {
        if (a.type === "accent") return R.isCharacterBox(a.base) ? Dt : null;
        if (a.type === "horizBrace") {
            var o = !e.sub;
            return o === a.isOver ? na : null;
        } else return null;
    }
    else return null;
}, "htmlBuilderDelegate");
Z0({
    type: "supsub",
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ t4(r, e);
        if (t) return t(r, e);
        var { base: a, sup: n, sub: s } = r, o = /*#__PURE__*/ G(a, e), h, c, v = /*#__PURE__*/ e.fontMetrics(), b = 0, x = 0, k = a && R.isCharacterBox(a);
        if (n) {
            var w = /*#__PURE__*/ e.havingStyle(/*#__PURE__*/ e.style.sup());
            h = /*#__PURE__*/ G(n, w, e), k || (b = o.height - w.fontMetrics().supDrop * w.sizeMultiplier / e.sizeMultiplier);
        }
        if (s) {
            var A = /*#__PURE__*/ e.havingStyle(/*#__PURE__*/ e.style.sub());
            c = /*#__PURE__*/ G(s, A, e), k || (x = o.depth + A.fontMetrics().subDrop * A.sizeMultiplier / e.sizeMultiplier);
        }
        var B;
        e.style === I.DISPLAY ? B = v.sup1 : e.style.cramped ? B = v.sup3 : B = v.sup2;
        var N = e.sizeMultiplier, q = /*#__PURE__*/ T(.5 / v.ptPerEm / N), F = null;
        if (c) {
            var H = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
            (o instanceof h0 || H) && (F = /*#__PURE__*/ T(-o.italic));
        }
        var U;
        if (h && c) {
            b = /*#__PURE__*/ Math.max(b, B, h.depth + .25 * v.xHeight), x = /*#__PURE__*/ Math.max(x, v.sub2);
            var P = v.defaultRuleThickness, Y = 4 * P;
            if (b - h.depth - (c.height - x) < Y) {
                x = Y - (b - h.depth) + c.height;
                var V = .8 * v.xHeight - (b - h.depth);
                V > 0 && (b += V, x -= V);
            }
            var Z = [
                {
                    type: "elem",
                    elem: c,
                    shift: x,
                    marginRight: q,
                    marginLeft: F
                },
                {
                    type: "elem",
                    elem: h,
                    shift: -b,
                    marginRight: q
                }
            ];
            U = /*#__PURE__*/ y.makeVList({
                positionType: "individualShift",
                children: Z
            }, e);
        } else if (c) {
            x = /*#__PURE__*/ Math.max(x, v.sub1, c.height - .8 * v.xHeight);
            var X = [
                {
                    type: "elem",
                    elem: c,
                    marginLeft: F,
                    marginRight: q
                }
            ];
            U = /*#__PURE__*/ y.makeVList({
                positionType: "shift",
                positionData: x,
                children: X
            }, e);
        } else if (h) b = /*#__PURE__*/ Math.max(b, B, h.depth + .25 * v.xHeight), U = /*#__PURE__*/ y.makeVList({
            positionType: "shift",
            positionData: -b,
            children: [
                {
                    type: "elem",
                    elem: h,
                    marginRight: q
                }
            ]
        }, e);
        else throw new Error("supsub must have either sup or sub.");
        var D0 = pt(o, "right") || "mord";
        return y.makeSpan([
            D0
        ], [
            o,
            /*#__PURE__*/ y.makeSpan([
                "msupsub"
            ], [
                U
            ])
        ], e);
    },
    mathmlBuilder (r, e) {
        var t = false, a, n;
        r.base && r.base.type === "horizBrace" && (n = !!r.sup, n === r.base.isOver && (t = true, a = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = true);
        var s = [
            /*#__PURE__*/ $(r.base, e)
        ];
        r.sub && s.push(/*#__PURE__*/ $(r.sub, e)), r.sup && s.push(/*#__PURE__*/ $(r.sup, e));
        var o;
        if (t) o = a ? "mover" : "munder";
        else if (r.sub) if (r.sup) {
            var v = r.base;
            v && v.type === "op" && v.limits && e.style === I.DISPLAY || v && v.type === "operatorname" && v.alwaysHandleSupSub && (e.style === I.DISPLAY || v.limits) ? o = "munderover" : o = "msubsup";
        } else {
            var c = r.base;
            c && c.type === "op" && c.limits && (e.style === I.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === I.DISPLAY) ? o = "munder" : o = "msub";
        }
        else {
            var h = r.base;
            h && h.type === "op" && h.limits && (e.style === I.DISPLAY || h.alwaysHandleSupSub) || h && h.type === "operatorname" && h.alwaysHandleSupSub && (h.limits || e.style === I.DISPLAY) ? o = "mover" : o = "msup";
        }
        return new M.MathNode(o, s);
    }
});
Z0({
    type: "atom",
    htmlBuilder (r, e) {
        return y.mathsym(r.text, r.mode, e, [
            "m" + r.family
        ]);
    },
    mathmlBuilder (r, e) {
        var t = new M.MathNode("mo", [
            /*#__PURE__*/ b0(r.text, r.mode)
        ]);
        if (r.family === "bin") {
            var a = /*#__PURE__*/ Tt(r, e);
            a === "bold-italic" && t.setAttribute("mathvariant", a);
        } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
        return t;
    }
});
var ua = {
    mi: "italic",
    mn: "normal",
    mtext: "normal"
};
Z0({
    type: "mathord",
    htmlBuilder (r, e) {
        return y.makeOrd(r, e, "mathord");
    },
    mathmlBuilder (r, e) {
        var t = new M.MathNode("mi", [
            /*#__PURE__*/ b0(r.text, r.mode, e)
        ]), a = Tt(r, e) || "italic";
        return a !== ua[t.type] && t.setAttribute("mathvariant", a), t;
    }
});
Z0({
    type: "textord",
    htmlBuilder (r, e) {
        return y.makeOrd(r, e, "textord");
    },
    mathmlBuilder (r, e) {
        var t = /*#__PURE__*/ b0(r.text, r.mode, e), a = Tt(r, e) || "normal", n;
        return r.mode === "text" ? n = new M.MathNode("mtext", [
            t
        ]) : /[0-9]/.test(r.text) ? n = new M.MathNode("mn", [
            t
        ]) : r.text === "\\prime" ? n = new M.MathNode("mo", [
            t
        ]) : n = new M.MathNode("mi", [
            t
        ]), a !== ua[n.type] && n.setAttribute("mathvariant", a), n;
    }
});
var ot = {
    "\\nobreak": "nobreak",
    "\\allowbreak": "allowbreak"
}, ut = {
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
    htmlBuilder (r, e) {
        if (ut.hasOwnProperty(r.text)) {
            var t = ut[r.text].className || "";
            if (r.mode === "text") {
                var a = /*#__PURE__*/ y.makeOrd(r, e, "textord");
                return a.classes.push(t), a;
            } else return y.makeSpan([
                "mspace",
                t
            ], [
                /*#__PURE__*/ y.mathsym(r.text, r.mode, e)
            ], e);
        } else {
            if (ot.hasOwnProperty(r.text)) return y.makeSpan([
                "mspace",
                ot[r.text]
            ], [], e);
            throw new z('Unknown type of space "' + r.text + '"');
        }
    },
    mathmlBuilder (r, e) {
        var t;
        if (ut.hasOwnProperty(r.text)) t = new M.MathNode("mtext", [
            new M.TextNode("\xA0")
        ]);
        else {
            if (ot.hasOwnProperty(r.text)) return new M.MathNode("mspace");
            throw new z('Unknown type of space "' + r.text + '"');
        }
        return t;
    }
});
var cr = /*#__PURE__*/ m$1(()=>{
    var r = new M.MathNode("mtd", []);
    return r.setAttribute("width", "50%"), r;
}, "pad");
Z0({
    type: "tag",
    mathmlBuilder (r, e) {
        var t = new M.MathNode("mtable", [
            new M.MathNode("mtr", [
                /*#__PURE__*/ cr(),
                new M.MathNode("mtd", [
                    /*#__PURE__*/ U0(r.body, e)
                ]),
                /*#__PURE__*/ cr(),
                new M.MathNode("mtd", [
                    /*#__PURE__*/ U0(r.tag, e)
                ])
            ])
        ]);
        return t.setAttribute("width", "100%"), t;
    }
});
var dr = {
    "\\text": void 0,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm"
}, fr = {
    "\\textbf": "textbf",
    "\\textmd": "textmd"
}, r4 = {
    "\\textit": "textit",
    "\\textup": "textup"
}, pr = /*#__PURE__*/ m$1((r, e)=>{
    var t = r.font;
    if (t) {
        if (dr[t]) return e.withTextFontFamily(dr[t]);
        if (fr[t]) return e.withTextFontWeight(fr[t]);
        if (t === "\\emph") return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
    } else return e;
    return e.withTextFontShape(r4[t]);
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
    handler (r, e) {
        var { parser: t, funcName: a } = r, n = e[0];
        return {
            type: "text",
            mode: t.mode,
            body: /*#__PURE__*/ _(n),
            font: a
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ pr(r, e), a = /*#__PURE__*/ r0(r.body, t, true);
        return y.makeSpan([
            "mord",
            "text"
        ], a, t);
    },
    mathmlBuilder (r, e) {
        var t = /*#__PURE__*/ pr(r, e);
        return U0(r.body, t);
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
    handler (r, e) {
        var { parser: t } = r;
        return {
            type: "underline",
            mode: t.mode,
            body: e[0]
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ G(r.body, e), a = /*#__PURE__*/ y.makeLineSpan("underline-line", e), n = e.fontMetrics().defaultRuleThickness, s = /*#__PURE__*/ y.makeVList({
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
    mathmlBuilder (r, e) {
        var t = new M.MathNode("mo", [
            new M.TextNode("\u203E")
        ]);
        t.setAttribute("stretchy", "true");
        var a = new M.MathNode("munder", [
            /*#__PURE__*/ $(r.body, e),
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
    handler (r, e) {
        var { parser: t } = r;
        return {
            type: "vcenter",
            mode: t.mode,
            body: e[0]
        };
    },
    htmlBuilder (r, e) {
        var t = /*#__PURE__*/ G(r.body, e), a = e.fontMetrics().axisHeight, n = .5 * (t.height - a - (t.depth + a));
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
    mathmlBuilder (r, e) {
        return new M.MathNode("mpadded", [
            /*#__PURE__*/ $(r.body, e)
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
    handler (r, e, t) {
        throw new z("\\verb ended by end of line instead of matching delimiter");
    },
    htmlBuilder (r, e) {
        for(var t = /*#__PURE__*/ vr(r), a = [], n = /*#__PURE__*/ e.havingStyle(/*#__PURE__*/ e.style.text()), s = 0; s < t.length; s++){
            var o = t[s];
            o === "~" && (o = "\\textasciitilde"), a.push(/*#__PURE__*/ y.makeSymbol(o, "Typewriter-Regular", r.mode, n, [
                "mord",
                "texttt"
            ]));
        }
        return y.makeSpan(/*#__PURE__*/ [
            "mord",
            "text"
        ].concat(/*#__PURE__*/ n.sizingClasses(e)), /*#__PURE__*/ y.tryCombineChars(a), n);
    },
    mathmlBuilder (r, e) {
        var t = new M.TextNode(vr(r)), a = new M.MathNode("mtext", [
            t
        ]);
        return a.setAttribute("mathvariant", "monospace"), a;
    }
});
var vr = /*#__PURE__*/ m$1((r)=>r.body.replace(/ /g, r.star ? "\u2423" : "\xA0"), "makeVerb"), G0 = qr, ha = `[ \r
	]`, a4 = "\\\\[a-zA-Z@]+", n4 = "\\\\[^\uD800-\uDFFF]", i4 = "(" + a4 + ")" + ha + "*", s4 = `\\\\(
|[ \r	]+
?)[ \r	]*`, xt = "[\u0300-\u036F]", l4 = new RegExp(xt + "+$"), o4 = "(" + ha + "+)|" + (s4 + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (xt + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (xt + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + i4) + ("|" + n4 + ")"), Pe = class {
    static{
        m$1(this, "Lexer");
    }
    constructor(e, t){
        this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(o4, "g"), this.catcodes = {
            "%": 14,
            "~": 13
        };
    }
    setCatcode(e, t) {
        this.catcodes[e] = t;
    }
    lex() {
        var e = this.input, t = this.tokenRegex.lastIndex;
        if (t === e.length) return new g0("EOF", new c0(this, t, t));
        var a = /*#__PURE__*/ this.tokenRegex.exec(e);
        if (a === null || a.index !== t) throw new z("Unexpected character: '" + e[t] + "'", new g0(e[t], new c0(this, t, t + 1)));
        var n = a[6] || a[3] || (a[2] ? "\\ " : " ");
        if (this.catcodes[n] === 14) {
            var s = /*#__PURE__*/ e.indexOf(`
`, this.tokenRegex.lastIndex);
            return s === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = s + 1, this.lex();
        }
        return new g0(n, new c0(this, t, this.tokenRegex.lastIndex));
    }
}, wt = class {
    static{
        m$1(this, "Namespace");
    }
    constructor(e, t){
        e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
    }
    beginGroup() {
        this.undefStack.push({});
    }
    endGroup() {
        if (this.undefStack.length === 0) throw new z("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
        var e = /*#__PURE__*/ this.undefStack.pop();
        for(var t in e)e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
    }
    endGroups() {
        for(; this.undefStack.length > 0;)this.endGroup();
    }
    has(e) {
        return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
    }
    get(e) {
        return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
    }
    set(e, t, a) {
        if (a === void 0 && (a = false), a) {
            for(var n = 0; n < this.undefStack.length; n++)delete this.undefStack[n][e];
            this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
        } else {
            var s = this.undefStack[this.undefStack.length - 1];
            s && !s.hasOwnProperty(e) && (s[e] = this.current[e]);
        }
        t == null ? delete this.current[e] : this.current[e] = t;
    }
}, u4 = _r;
m("\\noexpand", function(r) {
    var e = /*#__PURE__*/ r.popToken();
    return r.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), {
        tokens: [
            e
        ],
        numArgs: 0
    };
});
m("\\expandafter", function(r) {
    var e = /*#__PURE__*/ r.popToken();
    return r.expandOnce(true), {
        tokens: [
            e
        ],
        numArgs: 0
    };
});
m("\\@firstoftwo", function(r) {
    var e = /*#__PURE__*/ r.consumeArgs(2);
    return {
        tokens: e[0],
        numArgs: 0
    };
});
m("\\@secondoftwo", function(r) {
    var e = /*#__PURE__*/ r.consumeArgs(2);
    return {
        tokens: e[1],
        numArgs: 0
    };
});
m("\\@ifnextchar", function(r) {
    var e = /*#__PURE__*/ r.consumeArgs(3);
    r.consumeSpaces();
    var t = /*#__PURE__*/ r.future();
    return e[0].length === 1 && e[0][0].text === t.text ? {
        tokens: e[1],
        numArgs: 0
    } : {
        tokens: e[2],
        numArgs: 0
    };
});
m("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
m("\\TextOrMath", function(r) {
    var e = /*#__PURE__*/ r.consumeArgs(2);
    return r.mode === "text" ? {
        tokens: e[0],
        numArgs: 0
    } : {
        tokens: e[1],
        numArgs: 0
    };
});
var gr = {
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
m("\\char", function(r) {
    var e = /*#__PURE__*/ r.popToken(), t, a = "";
    if (e.text === "'") t = 8, e = /*#__PURE__*/ r.popToken();
    else if (e.text === '"') t = 16, e = /*#__PURE__*/ r.popToken();
    else if (e.text === "`") if (e = /*#__PURE__*/ r.popToken(), e.text[0] === "\\") a = /*#__PURE__*/ e.text.charCodeAt(1);
    else {
        if (e.text === "EOF") throw new z("\\char` missing argument");
        a = /*#__PURE__*/ e.text.charCodeAt(0);
    }
    else t = 10;
    if (t) {
        if (a = gr[e.text], a == null || a >= t) throw new z("Invalid base-" + t + " digit " + e.text);
        for(var n; (n = gr[r.future().text]) != null && n < t;)a *= t, a += n, r.popToken();
    }
    return "\\@char{" + a + "}";
});
var Ft = /*#__PURE__*/ m$1((r, e, t, a)=>{
    var n = r.consumeArg().tokens;
    if (n.length !== 1) throw new z("\\newcommand's first argument must be a macro name");
    var s = n[0].text, o = /*#__PURE__*/ r.isDefined(s);
    if (o && !e) throw new z("\\newcommand{" + s + "} attempting to redefine " + (s + "; use \\renewcommand"));
    if (!o && !t) throw new z("\\renewcommand{" + s + "} when command " + s + " does not yet exist; use \\newcommand");
    var h = 0;
    if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
        for(var c = "", v = /*#__PURE__*/ r.expandNextToken(); v.text !== "]" && v.text !== "EOF";)c += v.text, v = /*#__PURE__*/ r.expandNextToken();
        if (!c.match(/^\s*[0-9]+\s*$/)) throw new z("Invalid number of arguments: " + c);
        h = /*#__PURE__*/ parseInt(c), n = r.consumeArg().tokens;
    }
    return o && a || r.macros.set(s, {
        tokens: n,
        numArgs: h
    }), "";
}, "newcommand");
m("\\newcommand", (r)=>Ft(r, false, true, false));
m("\\renewcommand", (r)=>Ft(r, true, false, false));
m("\\providecommand", (r)=>Ft(r, true, true, true));
m("\\message", (r)=>{
    var e = r.consumeArgs(1)[0];
    return console.log(/*#__PURE__*/ e.reverse().map((t)=>t.text).join("")), "";
});
m("\\errmessage", (r)=>{
    var e = r.consumeArgs(1)[0];
    return console.error(/*#__PURE__*/ e.reverse().map((t)=>t.text).join("")), "";
});
m("\\show", (r)=>{
    var e = /*#__PURE__*/ r.popToken(), t = e.text;
    return console.log(e, /*#__PURE__*/ r.macros.get(t), G0[t], W.math[t], W.text[t]), "";
});
m("\\bgroup", "{");
m("\\egroup", "}");
m("~", "\\nobreakspace");
m("\\lq", "`");
m("\\rq", "'");
m("\\aa", "\\r a");
m("\\AA", "\\r A");
m("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}");
m("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
m("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}");
m("\u212C", "\\mathscr{B}");
m("\u2130", "\\mathscr{E}");
m("\u2131", "\\mathscr{F}");
m("\u210B", "\\mathscr{H}");
m("\u2110", "\\mathscr{I}");
m("\u2112", "\\mathscr{L}");
m("\u2133", "\\mathscr{M}");
m("\u211B", "\\mathscr{R}");
m("\u212D", "\\mathfrak{C}");
m("\u210C", "\\mathfrak{H}");
m("\u2128", "\\mathfrak{Z}");
m("\\Bbbk", "\\Bbb{k}");
m("\xB7", "\\cdotp");
m("\\llap", "\\mathllap{\\textrm{#1}}");
m("\\rlap", "\\mathrlap{\\textrm{#1}}");
m("\\clap", "\\mathclap{\\textrm{#1}}");
m("\\mathstrut", "\\vphantom{(}");
m("\\underbar", "\\underline{\\text{#1}}");
m("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
m("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}");
m("\\ne", "\\neq");
m("\u2260", "\\neq");
m("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}");
m("\u2209", "\\notin");
m("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}");
m("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
m("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
m("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}");
m("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}");
m("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}");
m("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");
m("\u27C2", "\\perp");
m("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
m("\u220C", "\\notni");
m("\u231C", "\\ulcorner");
m("\u231D", "\\urcorner");
m("\u231E", "\\llcorner");
m("\u231F", "\\lrcorner");
m("\xA9", "\\copyright");
m("\xAE", "\\textregistered");
m("\uFE0F", "\\textregistered");
m("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
m("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
m("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
m("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
m("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
m("\u22EE", "\\vdots");
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
m("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
m("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var br = {
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
m("\\dots", function(r) {
    var e = "\\dotso", t = r.expandAfterFuture().text;
    return t in br ? e = br[t] : (t.slice(0, 4) === "\\not" || t in W.math && R.contains([
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
m("\\dotso", function(r) {
    var e = r.future().text;
    return e in Ht ? "\\ldots\\," : "\\ldots";
});
m("\\dotsc", function(r) {
    var e = r.future().text;
    return e in Ht && e !== "," ? "\\ldots\\," : "\\ldots";
});
m("\\cdots", function(r) {
    var e = r.future().text;
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
m("\\tag@literal", (r)=>{
    if (r.macros.get("\\df@tag")) throw new z("Multiple \\tag");
    return "\\gdef\\df@tag{\\text{#1}}";
});
m("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
m("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
m("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
m("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
m("\\newline", "\\\\\\relax");
m("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var ma = /*#__PURE__*/ T(M0["Main-Regular"][84][1] - .7 * M0["Main-Regular"][65][1]);
m("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + ma + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
m("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + ma + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
m("\u2237", "\\dblcolon");
m("\u2239", "\\eqcolon");
m("\u2254", "\\coloneqq");
m("\u2255", "\\eqqcolon");
m("\u2A74", "\\Coloneqq");
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
m("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
m("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
m("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
m("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
m("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
m("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
m("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
m("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
m("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
m("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
m("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
m("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
m("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
m("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
m("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
m("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}");
m("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}");
m("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
m("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
m("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}");
m("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}");
m("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}");
m("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}");
m("\\imath", "\\html@mathml{\\@imath}{\u0131}");
m("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");
m("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}");
m("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}");
m("\u27E6", "\\llbracket");
m("\u27E7", "\\rrbracket");
m("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}");
m("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}");
m("\u2983", "\\lBrace");
m("\u2984", "\\rBrace");
m("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}");
m("\u29B5", "\\minuso");
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
var ca = /*#__PURE__*/ m$1((r)=>(e)=>{
        var t = e.consumeArg().tokens, a = e.consumeArg().tokens, n = e.consumeArg().tokens, s = e.consumeArg().tokens, o = /*#__PURE__*/ e.macros.get("|"), h = /*#__PURE__*/ e.macros.get("\\|");
        e.macros.beginGroup();
        var c = /*#__PURE__*/ m$1((x)=>(k)=>{
                r && (k.macros.set("|", o), n.length && k.macros.set("\\|", h));
                var w = x;
                if (!x && n.length) {
                    var A = /*#__PURE__*/ k.future();
                    A.text === "|" && (k.popToken(), w = true);
                }
                return {
                    tokens: w ? n : a,
                    numArgs: 0
                };
            }, "midMacro");
        e.macros.set("|", /*#__PURE__*/ c(false)), n.length && e.macros.set("\\|", /*#__PURE__*/ c(true));
        var v = e.consumeArg().tokens, b = /*#__PURE__*/ e.expandTokens([
            ...s,
            ...v,
            ...t
        ]);
        return e.macros.endGroup(), {
            tokens: /*#__PURE__*/ b.reverse(),
            numArgs: 0
        };
    }, "braketHelper");
m("\\bra@ket", /*#__PURE__*/ ca(false));
m("\\bra@set", /*#__PURE__*/ ca(true));
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
var da = {
    "^": true,
    _: true,
    "\\limits": true,
    "\\nolimits": true
}, kt = class {
    static{
        m$1(this, "MacroExpander");
    }
    constructor(e, t, a){
        this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new wt(u4, t.macros), this.mode = a, this.stack = [];
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
        return this.stack.length === 0 && this.pushToken(/*#__PURE__*/ this.lexer.lex()), this.stack[this.stack.length - 1];
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
            t = /*#__PURE__*/ this.popToken(), { tokens: n, end: a } = /*#__PURE__*/ this.consumeArg([
                "]"
            ]);
        } else ({ tokens: n, start: t, end: a } = /*#__PURE__*/ this.consumeArg());
        return this.pushToken(new g0("EOF", a.loc)), this.pushTokens(n), t.range(a, "");
    }
    consumeSpaces() {
        for(;;){
            var e = /*#__PURE__*/ this.future();
            if (e.text === " ") this.stack.pop();
            else break;
        }
    }
    consumeArg(e) {
        var t = [], a = e && e.length > 0;
        a || this.consumeSpaces();
        var n = /*#__PURE__*/ this.future(), s, o = 0, h = 0;
        do {
            if (s = /*#__PURE__*/ this.popToken(), t.push(s), s.text === "{") ++o;
            else if (s.text === "}") {
                if (--o, o === -1) throw new z("Extra }", s);
            } else if (s.text === "EOF") throw new z("Unexpected end of input in a macro argument, expected '" + (e && a ? e[h] : "}") + "'", s);
            if (e && a) if ((o === 0 || o === 1 && e[h] === "{") && s.text === e[h]) {
                if (++h, h === e.length) {
                    t.splice(-h, h);
                    break;
                }
            } else h = 0;
        }while (o !== 0 || a);
        return n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
            tokens: t,
            start: n,
            end: s
        };
    }
    consumeArgs(e, t) {
        if (t) {
            if (t.length !== e + 1) throw new z("The length of delimiters doesn't match the number of args!");
            for(var a = t[0], n = 0; n < a.length; n++){
                var s = /*#__PURE__*/ this.popToken();
                if (a[n] !== s.text) throw new z("Use of the macro doesn't match its definition", s);
            }
        }
        for(var o = [], h = 0; h < e; h++)o.push(this.consumeArg(t && t[h + 1]).tokens);
        return o;
    }
    countExpansion(e) {
        if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand) throw new z("Too many expansions: infinite loop or need to increase maxExpand setting");
    }
    expandOnce(e) {
        var t = /*#__PURE__*/ this.popToken(), a = t.text, n = t.noexpand ? null : this._getExpansion(a);
        if (n == null || e && n.unexpandable) {
            if (e && n == null && a[0] === "\\" && !this.isDefined(a)) throw new z("Undefined control sequence: " + a);
            return this.pushToken(t), false;
        }
        this.countExpansion(1);
        var s = n.tokens, o = /*#__PURE__*/ this.consumeArgs(n.numArgs, n.delimiters);
        if (n.numArgs) {
            s = /*#__PURE__*/ s.slice();
            for(var h = s.length - 1; h >= 0; --h){
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
        for(;;)if (this.expandOnce() === false) {
            var e = /*#__PURE__*/ this.stack.pop();
            return e.treatAsRelax && (e.text = "\\relax"), e;
        }
        throw new Error;
    }
    expandMacro(e) {
        return this.macros.has(e) ? this.expandTokens([
            new g0(e)
        ]) : void 0;
    }
    expandTokens(e) {
        var t = [], a = this.stack.length;
        for(this.pushTokens(e); this.stack.length > a;)if (this.expandOnce(true) === false) {
            var n = /*#__PURE__*/ this.stack.pop();
            n.treatAsRelax && (n.noexpand = false, n.treatAsRelax = false), t.push(n);
        }
        return this.countExpansion(t.length), t;
    }
    expandMacroAsText(e) {
        var t = /*#__PURE__*/ this.expandMacro(e);
        return t && t.map((a)=>a.text).join("");
    }
    _getExpansion(e) {
        var t = /*#__PURE__*/ this.macros.get(e);
        if (t == null) return t;
        if (e.length === 1) {
            var a = this.lexer.catcodes[e];
            if (a != null && a !== 13) return;
        }
        var n = typeof t == "function" ? t(this) : t;
        if (typeof n == "string") {
            var s = 0;
            if (n.indexOf("#") !== -1) for(var o = /*#__PURE__*/ n.replace(/##/g, ""); o.indexOf("#" + (s + 1)) !== -1;)++s;
            for(var h = new Pe(n, this.settings), c = [], v = /*#__PURE__*/ h.lex(); v.text !== "EOF";)c.push(v), v = /*#__PURE__*/ h.lex();
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
        return this.macros.has(e) || G0.hasOwnProperty(e) || W.math.hasOwnProperty(e) || W.text.hasOwnProperty(e) || da.hasOwnProperty(e);
    }
    isExpandable(e) {
        var t = /*#__PURE__*/ this.macros.get(e);
        return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : G0.hasOwnProperty(e) && !G0[e].primitive;
    }
}, yr = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Ne = /*#__PURE__*/ Object.freeze({
    "\u208A": "+",
    "\u208B": "-",
    "\u208C": "=",
    "\u208D": "(",
    "\u208E": ")",
    "\u2080": "0",
    "\u2081": "1",
    "\u2082": "2",
    "\u2083": "3",
    "\u2084": "4",
    "\u2085": "5",
    "\u2086": "6",
    "\u2087": "7",
    "\u2088": "8",
    "\u2089": "9",
    "\u2090": "a",
    "\u2091": "e",
    "\u2095": "h",
    "\u1D62": "i",
    "\u2C7C": "j",
    "\u2096": "k",
    "\u2097": "l",
    "\u2098": "m",
    "\u2099": "n",
    "\u2092": "o",
    "\u209A": "p",
    "\u1D63": "r",
    "\u209B": "s",
    "\u209C": "t",
    "\u1D64": "u",
    "\u1D65": "v",
    "\u2093": "x",
    "\u1D66": "\u03B2",
    "\u1D67": "\u03B3",
    "\u1D68": "\u03C1",
    "\u1D69": "\u03D5",
    "\u1D6A": "\u03C7",
    "\u207A": "+",
    "\u207B": "-",
    "\u207C": "=",
    "\u207D": "(",
    "\u207E": ")",
    "\u2070": "0",
    "\xB9": "1",
    "\xB2": "2",
    "\xB3": "3",
    "\u2074": "4",
    "\u2075": "5",
    "\u2076": "6",
    "\u2077": "7",
    "\u2078": "8",
    "\u2079": "9",
    "\u1D2C": "A",
    "\u1D2E": "B",
    "\u1D30": "D",
    "\u1D31": "E",
    "\u1D33": "G",
    "\u1D34": "H",
    "\u1D35": "I",
    "\u1D36": "J",
    "\u1D37": "K",
    "\u1D38": "L",
    "\u1D39": "M",
    "\u1D3A": "N",
    "\u1D3C": "O",
    "\u1D3E": "P",
    "\u1D3F": "R",
    "\u1D40": "T",
    "\u1D41": "U",
    "\u2C7D": "V",
    "\u1D42": "W",
    "\u1D43": "a",
    "\u1D47": "b",
    "\u1D9C": "c",
    "\u1D48": "d",
    "\u1D49": "e",
    "\u1DA0": "f",
    "\u1D4D": "g",
    ʰ: "h",
    "\u2071": "i",
    ʲ: "j",
    "\u1D4F": "k",
    ˡ: "l",
    "\u1D50": "m",
    ⁿ: "n",
    "\u1D52": "o",
    "\u1D56": "p",
    ʳ: "r",
    ˢ: "s",
    "\u1D57": "t",
    "\u1D58": "u",
    "\u1D5B": "v",
    ʷ: "w",
    ˣ: "x",
    ʸ: "y",
    "\u1DBB": "z",
    "\u1D5D": "\u03B2",
    "\u1D5E": "\u03B3",
    "\u1D5F": "\u03B4",
    "\u1D60": "\u03D5",
    "\u1D61": "\u03C7",
    "\u1DBF": "\u03B8"
}), ht = {
    "\u0301": {
        text: "\\'",
        math: "\\acute"
    },
    "\u0300": {
        text: "\\`",
        math: "\\grave"
    },
    "\u0308": {
        text: '\\"',
        math: "\\ddot"
    },
    "\u0303": {
        text: "\\~",
        math: "\\tilde"
    },
    "\u0304": {
        text: "\\=",
        math: "\\bar"
    },
    "\u0306": {
        text: "\\u",
        math: "\\breve"
    },
    "\u030C": {
        text: "\\v",
        math: "\\check"
    },
    "\u0302": {
        text: "\\^",
        math: "\\hat"
    },
    "\u0307": {
        text: "\\.",
        math: "\\dot"
    },
    "\u030A": {
        text: "\\r",
        math: "\\mathring"
    },
    "\u030B": {
        text: "\\H"
    },
    "\u0327": {
        text: "\\c"
    }
}, xr = {
    á: "a\u0301",
    à: "a\u0300",
    ä: "a\u0308",
    ǟ: "a\u0308\u0304",
    ã: "a\u0303",
    ā: "a\u0304",
    ă: "a\u0306",
    ắ: "a\u0306\u0301",
    ằ: "a\u0306\u0300",
    ẵ: "a\u0306\u0303",
    ǎ: "a\u030C",
    â: "a\u0302",
    ấ: "a\u0302\u0301",
    ầ: "a\u0302\u0300",
    ẫ: "a\u0302\u0303",
    ȧ: "a\u0307",
    ǡ: "a\u0307\u0304",
    å: "a\u030A",
    ǻ: "a\u030A\u0301",
    ḃ: "b\u0307",
    ć: "c\u0301",
    ḉ: "c\u0327\u0301",
    č: "c\u030C",
    ĉ: "c\u0302",
    ċ: "c\u0307",
    ç: "c\u0327",
    ď: "d\u030C",
    ḋ: "d\u0307",
    ḑ: "d\u0327",
    é: "e\u0301",
    è: "e\u0300",
    ë: "e\u0308",
    ẽ: "e\u0303",
    ē: "e\u0304",
    ḗ: "e\u0304\u0301",
    ḕ: "e\u0304\u0300",
    ĕ: "e\u0306",
    ḝ: "e\u0327\u0306",
    ě: "e\u030C",
    ê: "e\u0302",
    ế: "e\u0302\u0301",
    ề: "e\u0302\u0300",
    ễ: "e\u0302\u0303",
    ė: "e\u0307",
    ȩ: "e\u0327",
    ḟ: "f\u0307",
    ǵ: "g\u0301",
    ḡ: "g\u0304",
    ğ: "g\u0306",
    ǧ: "g\u030C",
    ĝ: "g\u0302",
    ġ: "g\u0307",
    ģ: "g\u0327",
    ḧ: "h\u0308",
    ȟ: "h\u030C",
    ĥ: "h\u0302",
    ḣ: "h\u0307",
    ḩ: "h\u0327",
    í: "i\u0301",
    ì: "i\u0300",
    ï: "i\u0308",
    ḯ: "i\u0308\u0301",
    ĩ: "i\u0303",
    ī: "i\u0304",
    ĭ: "i\u0306",
    ǐ: "i\u030C",
    î: "i\u0302",
    ǰ: "j\u030C",
    ĵ: "j\u0302",
    ḱ: "k\u0301",
    ǩ: "k\u030C",
    ķ: "k\u0327",
    ĺ: "l\u0301",
    ľ: "l\u030C",
    ļ: "l\u0327",
    ḿ: "m\u0301",
    ṁ: "m\u0307",
    ń: "n\u0301",
    ǹ: "n\u0300",
    ñ: "n\u0303",
    ň: "n\u030C",
    ṅ: "n\u0307",
    ņ: "n\u0327",
    ó: "o\u0301",
    ò: "o\u0300",
    ö: "o\u0308",
    ȫ: "o\u0308\u0304",
    õ: "o\u0303",
    ṍ: "o\u0303\u0301",
    ṏ: "o\u0303\u0308",
    ȭ: "o\u0303\u0304",
    ō: "o\u0304",
    ṓ: "o\u0304\u0301",
    ṑ: "o\u0304\u0300",
    ŏ: "o\u0306",
    ǒ: "o\u030C",
    ô: "o\u0302",
    ố: "o\u0302\u0301",
    ồ: "o\u0302\u0300",
    ỗ: "o\u0302\u0303",
    ȯ: "o\u0307",
    ȱ: "o\u0307\u0304",
    ő: "o\u030B",
    ṕ: "p\u0301",
    ṗ: "p\u0307",
    ŕ: "r\u0301",
    ř: "r\u030C",
    ṙ: "r\u0307",
    ŗ: "r\u0327",
    ś: "s\u0301",
    ṥ: "s\u0301\u0307",
    š: "s\u030C",
    ṧ: "s\u030C\u0307",
    ŝ: "s\u0302",
    ṡ: "s\u0307",
    ş: "s\u0327",
    ẗ: "t\u0308",
    ť: "t\u030C",
    ṫ: "t\u0307",
    ţ: "t\u0327",
    ú: "u\u0301",
    ù: "u\u0300",
    ü: "u\u0308",
    ǘ: "u\u0308\u0301",
    ǜ: "u\u0308\u0300",
    ǖ: "u\u0308\u0304",
    ǚ: "u\u0308\u030C",
    ũ: "u\u0303",
    ṹ: "u\u0303\u0301",
    ū: "u\u0304",
    ṻ: "u\u0304\u0308",
    ŭ: "u\u0306",
    ǔ: "u\u030C",
    û: "u\u0302",
    ů: "u\u030A",
    ű: "u\u030B",
    ṽ: "v\u0303",
    ẃ: "w\u0301",
    ẁ: "w\u0300",
    ẅ: "w\u0308",
    ŵ: "w\u0302",
    ẇ: "w\u0307",
    ẘ: "w\u030A",
    ẍ: "x\u0308",
    ẋ: "x\u0307",
    ý: "y\u0301",
    ỳ: "y\u0300",
    ÿ: "y\u0308",
    ỹ: "y\u0303",
    ȳ: "y\u0304",
    ŷ: "y\u0302",
    ẏ: "y\u0307",
    ẙ: "y\u030A",
    ź: "z\u0301",
    ž: "z\u030C",
    ẑ: "z\u0302",
    ż: "z\u0307",
    Á: "A\u0301",
    À: "A\u0300",
    Ä: "A\u0308",
    Ǟ: "A\u0308\u0304",
    Ã: "A\u0303",
    Ā: "A\u0304",
    Ă: "A\u0306",
    Ắ: "A\u0306\u0301",
    Ằ: "A\u0306\u0300",
    Ẵ: "A\u0306\u0303",
    Ǎ: "A\u030C",
    Â: "A\u0302",
    Ấ: "A\u0302\u0301",
    Ầ: "A\u0302\u0300",
    Ẫ: "A\u0302\u0303",
    Ȧ: "A\u0307",
    Ǡ: "A\u0307\u0304",
    Å: "A\u030A",
    Ǻ: "A\u030A\u0301",
    Ḃ: "B\u0307",
    Ć: "C\u0301",
    Ḉ: "C\u0327\u0301",
    Č: "C\u030C",
    Ĉ: "C\u0302",
    Ċ: "C\u0307",
    Ç: "C\u0327",
    Ď: "D\u030C",
    Ḋ: "D\u0307",
    Ḑ: "D\u0327",
    É: "E\u0301",
    È: "E\u0300",
    Ë: "E\u0308",
    Ẽ: "E\u0303",
    Ē: "E\u0304",
    Ḗ: "E\u0304\u0301",
    Ḕ: "E\u0304\u0300",
    Ĕ: "E\u0306",
    Ḝ: "E\u0327\u0306",
    Ě: "E\u030C",
    Ê: "E\u0302",
    Ế: "E\u0302\u0301",
    Ề: "E\u0302\u0300",
    Ễ: "E\u0302\u0303",
    Ė: "E\u0307",
    Ȩ: "E\u0327",
    Ḟ: "F\u0307",
    Ǵ: "G\u0301",
    Ḡ: "G\u0304",
    Ğ: "G\u0306",
    Ǧ: "G\u030C",
    Ĝ: "G\u0302",
    Ġ: "G\u0307",
    Ģ: "G\u0327",
    Ḧ: "H\u0308",
    Ȟ: "H\u030C",
    Ĥ: "H\u0302",
    Ḣ: "H\u0307",
    Ḩ: "H\u0327",
    Í: "I\u0301",
    Ì: "I\u0300",
    Ï: "I\u0308",
    Ḯ: "I\u0308\u0301",
    Ĩ: "I\u0303",
    Ī: "I\u0304",
    Ĭ: "I\u0306",
    Ǐ: "I\u030C",
    Î: "I\u0302",
    İ: "I\u0307",
    Ĵ: "J\u0302",
    Ḱ: "K\u0301",
    Ǩ: "K\u030C",
    Ķ: "K\u0327",
    Ĺ: "L\u0301",
    Ľ: "L\u030C",
    Ļ: "L\u0327",
    Ḿ: "M\u0301",
    Ṁ: "M\u0307",
    Ń: "N\u0301",
    Ǹ: "N\u0300",
    Ñ: "N\u0303",
    Ň: "N\u030C",
    Ṅ: "N\u0307",
    Ņ: "N\u0327",
    Ó: "O\u0301",
    Ò: "O\u0300",
    Ö: "O\u0308",
    Ȫ: "O\u0308\u0304",
    Õ: "O\u0303",
    Ṍ: "O\u0303\u0301",
    Ṏ: "O\u0303\u0308",
    Ȭ: "O\u0303\u0304",
    Ō: "O\u0304",
    Ṓ: "O\u0304\u0301",
    Ṑ: "O\u0304\u0300",
    Ŏ: "O\u0306",
    Ǒ: "O\u030C",
    Ô: "O\u0302",
    Ố: "O\u0302\u0301",
    Ồ: "O\u0302\u0300",
    Ỗ: "O\u0302\u0303",
    Ȯ: "O\u0307",
    Ȱ: "O\u0307\u0304",
    Ő: "O\u030B",
    Ṕ: "P\u0301",
    Ṗ: "P\u0307",
    Ŕ: "R\u0301",
    Ř: "R\u030C",
    Ṙ: "R\u0307",
    Ŗ: "R\u0327",
    Ś: "S\u0301",
    Ṥ: "S\u0301\u0307",
    Š: "S\u030C",
    Ṧ: "S\u030C\u0307",
    Ŝ: "S\u0302",
    Ṡ: "S\u0307",
    Ş: "S\u0327",
    Ť: "T\u030C",
    Ṫ: "T\u0307",
    Ţ: "T\u0327",
    Ú: "U\u0301",
    Ù: "U\u0300",
    Ü: "U\u0308",
    Ǘ: "U\u0308\u0301",
    Ǜ: "U\u0308\u0300",
    Ǖ: "U\u0308\u0304",
    Ǚ: "U\u0308\u030C",
    Ũ: "U\u0303",
    Ṹ: "U\u0303\u0301",
    Ū: "U\u0304",
    Ṻ: "U\u0304\u0308",
    Ŭ: "U\u0306",
    Ǔ: "U\u030C",
    Û: "U\u0302",
    Ů: "U\u030A",
    Ű: "U\u030B",
    Ṽ: "V\u0303",
    Ẃ: "W\u0301",
    Ẁ: "W\u0300",
    Ẅ: "W\u0308",
    Ŵ: "W\u0302",
    Ẇ: "W\u0307",
    Ẍ: "X\u0308",
    Ẋ: "X\u0307",
    Ý: "Y\u0301",
    Ỳ: "Y\u0300",
    Ÿ: "Y\u0308",
    Ỹ: "Y\u0303",
    Ȳ: "Y\u0304",
    Ŷ: "Y\u0302",
    Ẏ: "Y\u0307",
    Ź: "Z\u0301",
    Ž: "Z\u030C",
    Ẑ: "Z\u0302",
    Ż: "Z\u0307",
    ά: "\u03B1\u0301",
    ὰ: "\u03B1\u0300",
    ᾱ: "\u03B1\u0304",
    ᾰ: "\u03B1\u0306",
    έ: "\u03B5\u0301",
    ὲ: "\u03B5\u0300",
    ή: "\u03B7\u0301",
    ὴ: "\u03B7\u0300",
    ί: "\u03B9\u0301",
    ὶ: "\u03B9\u0300",
    ϊ: "\u03B9\u0308",
    ΐ: "\u03B9\u0308\u0301",
    ῒ: "\u03B9\u0308\u0300",
    ῑ: "\u03B9\u0304",
    ῐ: "\u03B9\u0306",
    ό: "\u03BF\u0301",
    ὸ: "\u03BF\u0300",
    ύ: "\u03C5\u0301",
    ὺ: "\u03C5\u0300",
    ϋ: "\u03C5\u0308",
    ΰ: "\u03C5\u0308\u0301",
    ῢ: "\u03C5\u0308\u0300",
    ῡ: "\u03C5\u0304",
    ῠ: "\u03C5\u0306",
    ώ: "\u03C9\u0301",
    ὼ: "\u03C9\u0300",
    Ύ: "\u03A5\u0301",
    Ὺ: "\u03A5\u0300",
    Ϋ: "\u03A5\u0308",
    Ῡ: "\u03A5\u0304",
    Ῠ: "\u03A5\u0306",
    Ώ: "\u03A9\u0301",
    Ὼ: "\u03A9\u0300"
}, Ge = class r {
    static{
        m$1(this, "Parser");
    }
    constructor(e, t){
        this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new kt(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
    }
    expect(e, t) {
        if (t === void 0 && (t = true), this.fetch().text !== e) throw new z("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
        t && this.consume();
    }
    consume() {
        this.nextToken = null;
    }
    fetch() {
        return this.nextToken == null && (this.nextToken = /*#__PURE__*/ this.gullet.expandNextToken()), this.nextToken;
    }
    switchMode(e) {
        this.mode = e, this.gullet.switchMode(e);
    }
    parse() {
        this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
        try {
            var e = /*#__PURE__*/ this.parseExpression(!1);
            return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
        } finally{
            this.gullet.endGroups();
        }
    }
    subparse(e) {
        var t = this.nextToken;
        this.consume(), this.gullet.pushToken(new g0("}")), this.gullet.pushTokens(e);
        var a = /*#__PURE__*/ this.parseExpression(false);
        return this.expect("}"), this.nextToken = t, a;
    }
    parseExpression(e, t) {
        for(var a = [];;){
            this.mode === "math" && this.consumeSpaces();
            var n = /*#__PURE__*/ this.fetch();
            if (r.endOfExpression.indexOf(n.text) !== -1 || t && n.text === t || e && G0[n.text] && G0[n.text].infix) break;
            var s = /*#__PURE__*/ this.parseAtom(t);
            if (s) {
                if (s.type === "internal") continue;
            } else break;
            a.push(s);
        }
        return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
    }
    handleInfixNodes(e) {
        for(var t = -1, a, n = 0; n < e.length; n++)if (e[n].type === "infix") {
            if (t !== -1) throw new z("only one infix operator per group", e[n].token);
            t = n, a = e[n].replaceWith;
        }
        if (t !== -1 && a) {
            var s, o, h = /*#__PURE__*/ e.slice(0, t), c = /*#__PURE__*/ e.slice(t + 1);
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
            return a === "\\\\abovefrac" ? v = /*#__PURE__*/ this.callFunction(a, [
                s,
                e[t],
                o
            ], []) : v = /*#__PURE__*/ this.callFunction(a, [
                s,
                o
            ], []), [
                v
            ];
        } else return e;
    }
    handleSupSubscript(e) {
        var t = /*#__PURE__*/ this.fetch(), a = t.text;
        this.consume(), this.consumeSpaces();
        var n;
        do {
            var s;
            n = /*#__PURE__*/ this.parseGroup(e);
        }while (((s = n) == null ? void 0 : s.type) === "internal");
        if (!n) throw new z("Expected group after '" + a + "'", t);
        return n;
    }
    formatUnsupportedCmd(e) {
        for(var t = [], a = 0; a < e.length; a++)t.push({
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
        var t = /*#__PURE__*/ this.parseGroup("atom", e);
        if (t?.type === "internal" || this.mode === "text") return t;
        for(var a, n;;){
            this.consumeSpaces();
            var s = /*#__PURE__*/ this.fetch();
            if (s.text === "\\limits" || s.text === "\\nolimits") {
                if (t && t.type === "op") {
                    var o = s.text === "\\limits";
                    t.limits = o, t.alwaysHandleSupSub = true;
                } else if (t && t.type === "operatorname") t.alwaysHandleSupSub && (t.limits = s.text === "\\limits");
                else throw new z("Limit controls must follow a math operator", s);
                this.consume();
            } else if (s.text === "^") {
                if (a) throw new z("Double superscript", s);
                a = /*#__PURE__*/ this.handleSupSubscript("superscript");
            } else if (s.text === "_") {
                if (n) throw new z("Double subscript", s);
                n = /*#__PURE__*/ this.handleSupSubscript("subscript");
            } else if (s.text === "'") {
                if (a) throw new z("Double superscript", s);
                var h = {
                    type: "textord",
                    mode: this.mode,
                    text: "\\prime"
                }, c = [
                    h
                ];
                for(this.consume(); this.fetch().text === "'";)c.push(h), this.consume();
                this.fetch().text === "^" && c.push(/*#__PURE__*/ this.handleSupSubscript("superscript")), a = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: c
                };
            } else if (Ne[s.text]) {
                var v = /*#__PURE__*/ yr.test(s.text), b = [];
                for(b.push(new g0(Ne[s.text])), this.consume();;){
                    var x = this.fetch().text;
                    if (!Ne[x] || yr.test(x) !== v) break;
                    b.unshift(new g0(Ne[x])), this.consume();
                }
                var k = /*#__PURE__*/ this.subparse(b);
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
        var a = /*#__PURE__*/ this.fetch(), n = a.text, s = G0[n];
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
        }, h = G0[e];
        if (h && h.handler) return h.handler(o, t, a);
        throw new z("No function handler for " + e);
    }
    parseArguments(e, t) {
        var a = t.numArgs + t.numOptionalArgs;
        if (a === 0) return {
            args: [],
            optArgs: []
        };
        for(var n = [], s = [], o = 0; o < a; o++){
            var h = t.argTypes && t.argTypes[o], c = o < t.numOptionalArgs;
            (t.primitive && h == null || t.type === "sqrt" && o === 1 && s[0] == null) && (h = "primitive");
            var v = /*#__PURE__*/ this.parseGroupOfType("argument to '" + e + "'", h, c);
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
        switch(t){
            case "color":
                return this.parseColorGroup(a);
            case "size":
                return this.parseSizeGroup(a);
            case "url":
                return this.parseUrlGroup(a);
            case "math":
            case "text":
                return this.parseArgumentGroup(a, t);
            case "hbox":
                {
                    var n = /*#__PURE__*/ this.parseArgumentGroup(a, "text");
                    return n != null ? {
                        type: "styling",
                        mode: n.mode,
                        body: [
                            n
                        ],
                        style: "text"
                    } : null;
                }
            case "raw":
                {
                    var s = /*#__PURE__*/ this.parseStringGroup("raw", a);
                    return s != null ? {
                        type: "raw",
                        mode: "text",
                        string: s.text
                    } : null;
                }
            case "primitive":
                {
                    if (a) throw new z("A primitive argument cannot be optional");
                    var o = /*#__PURE__*/ this.parseGroup(e);
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
        for(; this.fetch().text === " ";)this.consume();
    }
    parseStringGroup(e, t) {
        var a = /*#__PURE__*/ this.gullet.scanArgument(t);
        if (a == null) return null;
        for(var n = "", s; (s = /*#__PURE__*/ this.fetch()).text !== "EOF";)n += s.text, this.consume();
        return this.consume(), a.text = n, a;
    }
    parseRegexGroup(e, t) {
        for(var a = /*#__PURE__*/ this.fetch(), n = a, s = "", o; (o = /*#__PURE__*/ this.fetch()).text !== "EOF" && e.test(s + o.text);)n = o, s += n.text, this.consume();
        if (s === "") throw new z("Invalid " + t + ": '" + a.text + "'", a);
        return a.range(n, s);
    }
    parseColorGroup(e) {
        var t = /*#__PURE__*/ this.parseStringGroup("color", e);
        if (t == null) return null;
        var a = /*#__PURE__*/ /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
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
        if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = /*#__PURE__*/ this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = /*#__PURE__*/ this.parseStringGroup("size", e), !t) return null;
        !e && t.text.length === 0 && (t.text = "0pt", a = true);
        var n = /*#__PURE__*/ /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
        if (!n) throw new z("Invalid size: '" + t.text + "'", t);
        var s = {
            number: +(n[1] + n[2]),
            unit: n[3]
        };
        if (!Sr(s)) throw new z("Invalid unit: '" + s.unit + "'", t);
        return {
            type: "size",
            mode: this.mode,
            value: s,
            isBlank: a
        };
    }
    parseUrlGroup(e) {
        this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
        var t = /*#__PURE__*/ this.parseStringGroup("url", e);
        if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null) return null;
        var a = /*#__PURE__*/ t.text.replace(/\\([#$%&~_^{}])/g, "$1");
        return {
            type: "url",
            mode: this.mode,
            url: a
        };
    }
    parseArgumentGroup(e, t) {
        var a = /*#__PURE__*/ this.gullet.scanArgument(e);
        if (a == null) return null;
        var n = this.mode;
        t && this.switchMode(t), this.gullet.beginGroup();
        var s = /*#__PURE__*/ this.parseExpression(false, "EOF");
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
        var a = /*#__PURE__*/ this.fetch(), n = a.text, s;
        if (n === "{" || n === "\\begingroup") {
            this.consume();
            var o = n === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            var h = /*#__PURE__*/ this.parseExpression(false, o), c = /*#__PURE__*/ this.fetch();
            this.expect(o), this.gullet.endGroup(), s = {
                type: "ordgroup",
                mode: this.mode,
                loc: /*#__PURE__*/ c0.range(a, c),
                body: h,
                semisimple: n === "\\begingroup" || void 0
            };
        } else if (s = this.parseFunction(t, e) || this.parseSymbol(), s == null && n[0] === "\\" && !da.hasOwnProperty(n)) {
            if (this.settings.throwOnError) throw new z("Undefined control sequence: " + n, a);
            s = /*#__PURE__*/ this.formatUnsupportedCmd(n), this.consume();
        }
        return s;
    }
    formLigatures(e) {
        for(var t = e.length - 1, a = 0; a < t; ++a){
            var n = e[a], s = n.text;
            s === "-" && e[a + 1].text === "-" && (a + 1 < t && e[a + 2].text === "-" ? (e.splice(a, 3, {
                type: "textord",
                mode: "text",
                loc: /*#__PURE__*/ c0.range(n, e[a + 2]),
                text: "---"
            }), t -= 2) : (e.splice(a, 2, {
                type: "textord",
                mode: "text",
                loc: /*#__PURE__*/ c0.range(n, e[a + 1]),
                text: "--"
            }), t -= 1)), (s === "'" || s === "`") && e[a + 1].text === s && (e.splice(a, 2, {
                type: "textord",
                mode: "text",
                loc: /*#__PURE__*/ c0.range(n, e[a + 1]),
                text: s + s
            }), t -= 1);
        }
    }
    parseSymbol() {
        var e = /*#__PURE__*/ this.fetch(), t = e.text;
        if (/^\\verb[^a-zA-Z]/.test(t)) {
            this.consume();
            var a = /*#__PURE__*/ t.slice(5), n = a.charAt(0) === "*";
            if (n && (a = /*#__PURE__*/ a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1)) throw new z(`\\verb assertion failed --
                    please report what input caused this bug`);
            return a = /*#__PURE__*/ a.slice(1, -1), {
                type: "verb",
                mode: "text",
                body: a,
                star: n
            };
        }
        xr.hasOwnProperty(t[0]) && !W[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = xr[t[0]] + t.slice(1));
        var s = /*#__PURE__*/ l4.exec(t);
        s && (t = /*#__PURE__*/ t.substring(0, s.index), t === "i" ? t = "\u0131" : t === "j" && (t = "\u0237"));
        var o;
        if (W[this.mode][t]) {
            this.settings.strict && this.mode === "math" && ft.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
            var h = W[this.mode][t].group, c = /*#__PURE__*/ c0.range(e), v;
            if (e1.hasOwnProperty(h)) {
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
        } else if (t.charCodeAt(0) >= 128) this.settings.strict && (kr(/*#__PURE__*/ t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), o = {
            type: "textord",
            mode: "text",
            loc: /*#__PURE__*/ c0.range(e),
            text: t
        };
        else return null;
        if (this.consume(), s) for(var x = 0; x < s[0].length; x++){
            var k = s[0][x];
            if (!ht[k]) throw new z("Unknown accent ' " + k + "'", e);
            var w = ht[k][this.mode] || ht[k].text;
            if (!w) throw new z("Accent " + k + " unsupported in " + this.mode + " mode", e);
            o = {
                type: "accent",
                mode: this.mode,
                loc: /*#__PURE__*/ c0.range(e),
                label: w,
                isStretchy: false,
                isShifty: true,
                base: o
            };
        }
        return o;
    }
};
Ge.endOfExpression = [
    "}",
    "\\endgroup",
    "\\end",
    "\\right",
    "&"
];
var Lt = /*#__PURE__*/ m$1(function(e, t) {
    if (!(typeof e == "string" || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
    var a = new Ge(e, t);
    delete a.gullet.macros.current["\\df@tag"];
    var n = /*#__PURE__*/ a.parse();
    if (delete a.gullet.macros.current["\\current@color"], delete a.gullet.macros.current["\\color"], a.gullet.macros.get("\\df@tag")) {
        if (!t.displayMode) throw new z("\\tag works only in display equations");
        n = [
            {
                type: "tag",
                mode: "text",
                body: n,
                tag: /*#__PURE__*/ a.subparse([
                    new g0("\\df@tag")
                ])
            }
        ];
    }
    return n;
}, "parseTree"), fa = /*#__PURE__*/ m$1(function(e, t, a) {
    t.textContent = "";
    var n = /*#__PURE__*/ Pt(e, a).toNode();
    t.appendChild(n);
}, "render");
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), fa = /*#__PURE__*/ m$1(function() {
    throw new z("KaTeX doesn't work in quirks mode.");
}, "render"));
var h4 = /*#__PURE__*/ m$1(function(e, t) {
    var a = /*#__PURE__*/ Pt(e, t).toMarkup();
    return a;
}, "renderToString"), m4 = /*#__PURE__*/ m$1(function(e, t) {
    var a = new me(t);
    return Lt(e, a);
}, "generateParseTree"), pa = /*#__PURE__*/ m$1(function(e, t, a) {
    if (a.throwOnError || !(e instanceof z)) throw e;
    var n = /*#__PURE__*/ y.makeSpan([
        "katex-error"
    ], [
        new h0(t)
    ]);
    return n.setAttribute("title", /*#__PURE__*/ e.toString()), n.setAttribute("style", "color:" + a.errorColor), n;
}, "renderError"), Pt = /*#__PURE__*/ m$1(function(e, t) {
    var a = new me(t);
    try {
        var n = /*#__PURE__*/ Lt(e, a);
        return k1(n, e, a);
    } catch (s) {
        return pa(s, e, a);
    }
}, "renderToDomTree"), c4 = /*#__PURE__*/ m$1(function(e, t) {
    var a = new me(t);
    try {
        var n = /*#__PURE__*/ Lt(e, a);
        return S1(n, e, a);
    } catch (s) {
        return pa(s, e, a);
    }
}, "renderToHTMLTree"), d4 = "0.16.22", f4 = {
    Span: j0,
    Anchor: de,
    SymbolNode: h0,
    SvgNode: w0,
    PathNode: z0,
    LineNode: fe
}, p4 = {
    version: d4,
    render: fa,
    renderToString: h4,
    ParseError: z,
    SETTINGS_SCHEMA: qe,
    __parse: m4,
    __renderToDomTree: Pt,
    __renderToHTMLTree: c4,
    __setFontMetrics: Wa,
    __defineSymbol: i,
    __defineFunction: D,
    __defineMacro: m,
    __domTree: f4
};
export { z as ParseError, qe as SETTINGS_SCHEMA, D as __defineFunction, m as __defineMacro, i as __defineSymbol, f4 as __domTree, m4 as __parse, Pt as __renderToDomTree, c4 as __renderToHTMLTree, Wa as __setFontMetrics, p4 as default, fa as render, h4 as renderToString, d4 as version };
