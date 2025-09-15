const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~katex-RV2QPRKB.DmDZHRCw.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.JfBGL8NS.chunk.js';
import { p as pt, W as Wh } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
import { m as m$1, o } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var yi = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, bi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Ti = /\s*%%.*\n/gm;
var Gt = class extends Error {
    static{
        m$1(this, "UnknownDiagramError");
    }
    constructor(t){
        super(t), this.name = "UnknownDiagramError";
    }
};
var $t = {}, rs = /*#__PURE__*/ m$1(function(e, t) {
    e = /*#__PURE__*/ e.replace(yi, "").replace(bi, "").replace(Ti, `
`);
    for (let [i, { detector: s }] of Object.entries($t))if (s(e, t)) return i;
    throw new Gt(`No diagram type detected matching given configuration for text: ${e}`);
}, "detectType"), os = /*#__PURE__*/ m$1((...e)=>{
    for (let { id: t, detector: i, loader: s } of e)Be(t, i, s);
}, "registerLazyLoadedDiagrams"), Be = /*#__PURE__*/ m$1((e, t, i)=>{
    $t[e] && pt.warn(`Detector with key ${e} already exists. Overwriting.`), $t[e] = {
        detector: t,
        loader: i
    }, pt.debug(`Detector with key ${e} added${i ? " with loader" : ""}`);
}, "addDetector"), ss = /*#__PURE__*/ m$1((e)=>$t[e].loader, "getDiagramLoader");
var Se = m$1((e, t, { depth: i = 2, clobber: s = false } = {})=>{
    let l = {
        depth: i,
        clobber: s
    };
    return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((d)=>Se(e, d, l)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((d)=>{
        e.includes(d) || e.push(d);
    }), e) : e === void 0 || i <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((d)=>{
        typeof t[d] == "object" && (e[d] === void 0 || typeof e[d] == "object") ? (e[d] === void 0 && (e[d] = Array.isArray(t[d]) ? [] : {}), e[d] = /*#__PURE__*/ Se(e[d], t[d], {
            depth: i - 1,
            clobber: s
        })) : (s || typeof e[d] != "object" && typeof t[d] != "object") && (e[d] = t[d]);
    }), e);
}, "assignWithDepth"), v = Se;
var jt = {
    min: {
        r: 0,
        g: 0,
        b: 0,
        s: 0,
        l: 0,
        a: 0
    },
    max: {
        r: 255,
        g: 255,
        b: 255,
        h: 360,
        s: 100,
        l: 100,
        a: 1
    },
    clamp: {
        r: /*#__PURE__*/ m$1((e)=>e >= 255 ? 255 : e < 0 ? 0 : e, "r"),
        g: /*#__PURE__*/ m$1((e)=>e >= 255 ? 255 : e < 0 ? 0 : e, "g"),
        b: /*#__PURE__*/ m$1((e)=>e >= 255 ? 255 : e < 0 ? 0 : e, "b"),
        h: /*#__PURE__*/ m$1((e)=>e % 360, "h"),
        s: /*#__PURE__*/ m$1((e)=>e >= 100 ? 100 : e < 0 ? 0 : e, "s"),
        l: /*#__PURE__*/ m$1((e)=>e >= 100 ? 100 : e < 0 ? 0 : e, "l"),
        a: /*#__PURE__*/ m$1((e)=>e >= 1 ? 1 : e < 0 ? 0 : e, "a")
    },
    toLinear: /*#__PURE__*/ m$1((e)=>{
        let t = e / 255;
        return e > .03928 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92;
    }, "toLinear"),
    hue2rgb: /*#__PURE__*/ m$1((e, t, i)=>(i < 0 && (i += 1), i > 1 && (i -= 1), i < .16666666666666666 ? e + (t - e) * 6 * i : i < .5 ? t : i < .6666666666666666 ? e + (t - e) * (.6666666666666666 - i) * 6 : e), "hue2rgb"),
    hsl2rgb: /*#__PURE__*/ m$1(({ h: e, s: t, l: i }, s)=>{
        if (!t) return i * 2.55;
        e /= 360, t /= 100, i /= 100;
        let l = i < .5 ? i * (1 + t) : i + t - i * t, d = 2 * i - l;
        switch(s){
            case "r":
                return jt.hue2rgb(d, l, e + .3333333333333333) * 255;
            case "g":
                return jt.hue2rgb(d, l, e) * 255;
            case "b":
                return jt.hue2rgb(d, l, e - .3333333333333333) * 255;
        }
    }, "hsl2rgb"),
    rgb2hsl: /*#__PURE__*/ m$1(({ r: e, g: t, b: i }, s)=>{
        e /= 255, t /= 255, i /= 255;
        let l = /*#__PURE__*/ Math.max(e, t, i), d = /*#__PURE__*/ Math.min(e, t, i), f = (l + d) / 2;
        if (s === "l") return f * 100;
        if (l === d) return 0;
        let x = l - d, _ = f > .5 ? x / (2 - l - d) : x / (l + d);
        if (s === "s") return _ * 100;
        switch(l){
            case e:
                return ((t - i) / x + (t < i ? 6 : 0)) * 60;
            case t:
                return ((i - e) / x + 2) * 60;
            case i:
                return ((e - t) / x + 4) * 60;
            default:
                return -1;
        }
    }, "rgb2hsl")
}, ki = jt;
var Or = {
    clamp: /*#__PURE__*/ m$1((e, t, i)=>t > i ? Math.min(t, /*#__PURE__*/ Math.max(i, e)) : Math.min(i, /*#__PURE__*/ Math.max(t, e)), "clamp"),
    round: /*#__PURE__*/ m$1((e)=>Math.round(e * 1e10) / 1e10, "round")
}, Bi = Or;
var vr = {
    dec2hex: /*#__PURE__*/ m$1((e)=>{
        let t = /*#__PURE__*/ Math.round(e).toString(16);
        return t.length > 1 ? t : `0${t}`;
    }, "dec2hex")
}, Si = vr;
var wr = {
    channel: ki,
    lang: Bi,
    unit: Si
}, m = wr;
var K = {};
for(let e = 0; e <= 255; e++)K[e] = /*#__PURE__*/ m.unit.dec2hex(e);
var B = {
    ALL: 0,
    RGB: 1,
    HSL: 2
};
var Fe = class {
    static{
        m$1(this, "Type");
    }
    constructor(){
        this.type = B.ALL;
    }
    get() {
        return this.type;
    }
    set(t) {
        if (this.type && this.type !== t) throw new Error("Cannot change both RGB and HSL channels at the same time");
        this.type = t;
    }
    reset() {
        this.type = B.ALL;
    }
    is(t) {
        return this.type === t;
    }
}, Fi = Fe;
var Le = class {
    static{
        m$1(this, "Channels");
    }
    constructor(t, i){
        this.color = i, this.changed = false, this.data = t, this.type = new Fi;
    }
    set(t, i) {
        return this.color = i, this.changed = false, this.data = t, this.type.type = B.ALL, this;
    }
    _ensureHSL() {
        let t = this.data, { h: i, s, l } = t;
        i === void 0 && (t.h = /*#__PURE__*/ m.channel.rgb2hsl(t, "h")), s === void 0 && (t.s = /*#__PURE__*/ m.channel.rgb2hsl(t, "s")), l === void 0 && (t.l = /*#__PURE__*/ m.channel.rgb2hsl(t, "l"));
    }
    _ensureRGB() {
        let t = this.data, { r: i, g: s, b: l } = t;
        i === void 0 && (t.r = /*#__PURE__*/ m.channel.hsl2rgb(t, "r")), s === void 0 && (t.g = /*#__PURE__*/ m.channel.hsl2rgb(t, "g")), l === void 0 && (t.b = /*#__PURE__*/ m.channel.hsl2rgb(t, "b"));
    }
    get r() {
        let t = this.data, i = t.r;
        return !this.type.is(B.HSL) && i !== void 0 ? i : (this._ensureHSL(), m.channel.hsl2rgb(t, "r"));
    }
    get g() {
        let t = this.data, i = t.g;
        return !this.type.is(B.HSL) && i !== void 0 ? i : (this._ensureHSL(), m.channel.hsl2rgb(t, "g"));
    }
    get b() {
        let t = this.data, i = t.b;
        return !this.type.is(B.HSL) && i !== void 0 ? i : (this._ensureHSL(), m.channel.hsl2rgb(t, "b"));
    }
    get h() {
        let t = this.data, i = t.h;
        return !this.type.is(B.RGB) && i !== void 0 ? i : (this._ensureRGB(), m.channel.rgb2hsl(t, "h"));
    }
    get s() {
        let t = this.data, i = t.s;
        return !this.type.is(B.RGB) && i !== void 0 ? i : (this._ensureRGB(), m.channel.rgb2hsl(t, "s"));
    }
    get l() {
        let t = this.data, i = t.l;
        return !this.type.is(B.RGB) && i !== void 0 ? i : (this._ensureRGB(), m.channel.rgb2hsl(t, "l"));
    }
    get a() {
        return this.data.a;
    }
    set r(t) {
        this.type.set(B.RGB), this.changed = true, this.data.r = t;
    }
    set g(t) {
        this.type.set(B.RGB), this.changed = true, this.data.g = t;
    }
    set b(t) {
        this.type.set(B.RGB), this.changed = true, this.data.b = t;
    }
    set h(t) {
        this.type.set(B.HSL), this.changed = true, this.data.h = t;
    }
    set s(t) {
        this.type.set(B.HSL), this.changed = true, this.data.s = t;
    }
    set l(t) {
        this.type.set(B.HSL), this.changed = true, this.data.l = t;
    }
    set a(t) {
        this.changed = true, this.data.a = t;
    }
}, Li = Le;
var Dr = new Li({
    r: 0,
    g: 0,
    b: 0,
    a: 0
}, "transparent"), Q = Dr;
var _i = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: /*#__PURE__*/ m$1((e)=>{
        if (e.charCodeAt(0) !== 35) return;
        let t = /*#__PURE__*/ e.match(_i.re);
        if (!t) return;
        let i = t[1], s = /*#__PURE__*/ parseInt(i, 16), l = i.length, d = l % 4 === 0, f = l > 4, x = f ? 1 : 17, _ = f ? 8 : 4, E = d ? 0 : -1, H = f ? 255 : 15;
        return Q.set({
            r: (s >> _ * (E + 3) & H) * x,
            g: (s >> _ * (E + 2) & H) * x,
            b: (s >> _ * (E + 1) & H) * x,
            a: d ? (s & H) * x / 255 : 1
        }, e);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((e)=>{
        let { r: t, g: i, b: s, a: l } = e;
        return l < 1 ? `#${K[Math.round(t)]}${K[Math.round(i)]}${K[Math.round(s)]}${K[Math.round(l * 255)]}` : `#${K[Math.round(t)]}${K[Math.round(i)]}${K[Math.round(s)]}`;
    }, "stringify")
}, st = _i;
var Vt = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: /*#__PURE__*/ m$1((e)=>{
        let t = /*#__PURE__*/ e.match(Vt.hueRe);
        if (t) {
            let [, i, s] = t;
            switch(s){
                case "grad":
                    return m.channel.clamp.h(parseFloat(i) * .9);
                case "rad":
                    return m.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
                case "turn":
                    return m.channel.clamp.h(parseFloat(i) * 360);
            }
        }
        return m.channel.clamp.h(/*#__PURE__*/ parseFloat(e));
    }, "_hue2deg"),
    parse: /*#__PURE__*/ m$1((e)=>{
        let t = /*#__PURE__*/ e.charCodeAt(0);
        if (t !== 104 && t !== 72) return;
        let i = /*#__PURE__*/ e.match(Vt.re);
        if (!i) return;
        let [, s, l, d, f, x] = i;
        return Q.set({
            h: /*#__PURE__*/ Vt._hue2deg(s),
            s: /*#__PURE__*/ m.channel.clamp.s(/*#__PURE__*/ parseFloat(l)),
            l: /*#__PURE__*/ m.channel.clamp.l(/*#__PURE__*/ parseFloat(d)),
            a: f ? m.channel.clamp.a(x ? parseFloat(f) / 100 : parseFloat(f)) : 1
        }, e);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((e)=>{
        let { h: t, s: i, l: s, a: l } = e;
        return l < 1 ? `hsla(${m.lang.round(t)}, ${m.lang.round(i)}%, ${m.lang.round(s)}%, ${l})` : `hsl(${m.lang.round(t)}, ${m.lang.round(i)}%, ${m.lang.round(s)}%)`;
    }, "stringify")
}, Lt = Vt;
var Yt = {
    colors: {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyanaqua: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        transparent: "#00000000",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    },
    parse: /*#__PURE__*/ m$1((e)=>{
        e = /*#__PURE__*/ e.toLowerCase();
        let t = Yt.colors[e];
        if (t) return st.parse(t);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((e)=>{
        let t = /*#__PURE__*/ st.stringify(e);
        for(let i in Yt.colors)if (Yt.colors[i] === t) return i;
    }, "stringify")
}, _e = Yt;
var Ei = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: /*#__PURE__*/ m$1((e)=>{
        let t = /*#__PURE__*/ e.charCodeAt(0);
        if (t !== 114 && t !== 82) return;
        let i = /*#__PURE__*/ e.match(Ei.re);
        if (!i) return;
        let [, s, l, d, f, x, _, E, H] = i;
        return Q.set({
            r: /*#__PURE__*/ m.channel.clamp.r(l ? parseFloat(s) * 2.55 : parseFloat(s)),
            g: /*#__PURE__*/ m.channel.clamp.g(f ? parseFloat(d) * 2.55 : parseFloat(d)),
            b: /*#__PURE__*/ m.channel.clamp.b(_ ? parseFloat(x) * 2.55 : parseFloat(x)),
            a: E ? m.channel.clamp.a(H ? parseFloat(E) / 100 : parseFloat(E)) : 1
        }, e);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((e)=>{
        let { r: t, g: i, b: s, a: l } = e;
        return l < 1 ? `rgba(${m.lang.round(t)}, ${m.lang.round(i)}, ${m.lang.round(s)}, ${m.lang.round(l)})` : `rgb(${m.lang.round(t)}, ${m.lang.round(i)}, ${m.lang.round(s)})`;
    }, "stringify")
}, _t = Ei;
var Ir = {
    format: {
        keyword: _e,
        hex: st,
        rgb: _t,
        rgba: _t,
        hsl: Lt,
        hsla: Lt
    },
    parse: /*#__PURE__*/ m$1((e)=>{
        if (typeof e != "string") return e;
        let t = st.parse(e) || _t.parse(e) || Lt.parse(e) || _e.parse(e);
        if (t) return t;
        throw new Error(`Unsupported color format: "${e}"`);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((e)=>!e.changed && e.color ? e.color : e.type.is(B.HSL) || e.data.r === void 0 ? Lt.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? _t.stringify(e) : st.stringify(e), "stringify")
}, S = Ir;
var qr = /*#__PURE__*/ m$1((e, t)=>{
    let i = /*#__PURE__*/ S.parse(e);
    for(let s in t)i[s] = /*#__PURE__*/ m.channel.clamp[s](t[s]);
    return S.stringify(i);
}, "change"), Xt = qr;
var zr = /*#__PURE__*/ m$1((e, t, i = 0, s = 1)=>{
    if (typeof e != "number") return Xt(e, {
        a: t
    });
    let l = /*#__PURE__*/ Q.set({
        r: /*#__PURE__*/ m.channel.clamp.r(e),
        g: /*#__PURE__*/ m.channel.clamp.g(t),
        b: /*#__PURE__*/ m.channel.clamp.b(i),
        a: /*#__PURE__*/ m.channel.clamp.a(s)
    });
    return S.stringify(l);
}, "rgba"), Z = zr;
var Rr = /*#__PURE__*/ m$1((e, t)=>m.lang.round(S.parse(e)[t]), "channel"), Wr = Rr;
var Pr = /*#__PURE__*/ m$1((e)=>{
    let { r: t, g: i, b: s } = S.parse(e), l = .2126 * m.channel.toLinear(t) + .7152 * m.channel.toLinear(i) + .0722 * m.channel.toLinear(s);
    return m.lang.round(l);
}, "luminance"), Ai = Pr;
var Nr = /*#__PURE__*/ m$1((e)=>Ai(e) >= .5, "isLight"), Mi = Nr;
var Hr = /*#__PURE__*/ m$1((e)=>!Mi(e), "isDark"), U = Hr;
var Ur = /*#__PURE__*/ m$1((e, t, i)=>{
    let s = /*#__PURE__*/ S.parse(e), l = s[t], d = /*#__PURE__*/ m.channel.clamp[t](l + i);
    return l !== d && (s[t] = d), S.stringify(s);
}, "adjustChannel"), Kt = Ur;
var Gr = /*#__PURE__*/ m$1((e, t)=>Kt(e, "l", t), "lighten"), c = Gr;
var $r = /*#__PURE__*/ m$1((e, t)=>Kt(e, "l", -t), "darken"), g = $r;
var jr = /*#__PURE__*/ m$1((e, t)=>{
    let i = /*#__PURE__*/ S.parse(e), s = {};
    for(let l in t)t[l] && (s[l] = i[l] + t[l]);
    return Xt(e, s);
}, "adjust"), a = jr;
var Vr = /*#__PURE__*/ m$1((e, t, i = 50)=>{
    let { r: s, g: l, b: d, a: f } = S.parse(e), { r: x, g: _, b: E, a: H } = S.parse(t), yt = i / 100, nt = yt * 2 - 1, J = f - H, ct = ((nt * J === -1 ? nt : (nt + J) / (1 + nt * J)) + 1) / 2, bt = 1 - ct, ae = s * ct + x * bt, le = l * ct + _ * bt, dt = d * ct + E * bt, A = f * yt + H * (1 - yt);
    return Z(ae, le, dt, A);
}, "mix"), Oi = Vr;
var Yr = /*#__PURE__*/ m$1((e, t = 100)=>{
    let i = /*#__PURE__*/ S.parse(e);
    return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, Oi(i, e, t);
}, "invert"), h = Yr;
var tt = "#ffffff", et = "#f2f2f2";
var k = /*#__PURE__*/ m$1((e, t)=>t ? a(e, {
        s: -40,
        l: 10
    }) : a(e, {
        s: -40,
        l: -10
    }), "mkBorder");
var Ee = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
    }
    updateColors() {
        if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || a(this.primaryColor, {
            h: -120
        }), this.tertiaryColor = this.tertiaryColor || a(this.primaryColor, {
            h: 180,
            l: 5
        }), this.primaryBorderColor = this.primaryBorderColor || k(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || k(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || k(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || h(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || h(this.tertiaryColor), this.lineColor = this.lineColor || h(this.background), this.arrowheadColor = this.arrowheadColor || h(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? g(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || g(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || h(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || c(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || g(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || g(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || c(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || c(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || a(this.primaryColor, {
            h: 30
        }), this.cScale4 = this.cScale4 || a(this.primaryColor, {
            h: 60
        }), this.cScale5 = this.cScale5 || a(this.primaryColor, {
            h: 90
        }), this.cScale6 = this.cScale6 || a(this.primaryColor, {
            h: 120
        }), this.cScale7 = this.cScale7 || a(this.primaryColor, {
            h: 150
        }), this.cScale8 = this.cScale8 || a(this.primaryColor, {
            h: 210,
            l: 150
        }), this.cScale9 = this.cScale9 || a(this.primaryColor, {
            h: 270
        }), this.cScale10 = this.cScale10 || a(this.primaryColor, {
            h: 300
        }), this.cScale11 = this.cScale11 || a(this.primaryColor, {
            h: 330
        }), this.darkMode) for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScale" + i] = /*#__PURE__*/ g(this["cScale" + i], 75);
        else for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScale" + i] = /*#__PURE__*/ g(this["cScale" + i], 25);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleInv" + i] = this["cScaleInv" + i] || h(this["cScale" + i]);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this.darkMode ? this["cScalePeer" + i] = this["cScalePeer" + i] || c(this["cScale" + i], 10) : this["cScalePeer" + i] = this["cScalePeer" + i] || g(this["cScale" + i], 10);
        this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        let t = this.darkMode ? -4 : -1;
        for(let i = 0; i < 5; i++)this["surface" + i] = this["surface" + i] || a(this.mainBkg, {
            h: 180,
            s: -15,
            l: t * (5 + i * 3)
        }), this["surfacePeer" + i] = this["surfacePeer" + i] || a(this.mainBkg, {
            h: 180,
            s: -15,
            l: t * (8 + i * 3)
        });
        this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || a(this.primaryColor, {
            h: 64
        }), this.fillType3 = this.fillType3 || a(this.secondaryColor, {
            h: 64
        }), this.fillType4 = this.fillType4 || a(this.primaryColor, {
            h: -64
        }), this.fillType5 = this.fillType5 || a(this.secondaryColor, {
            h: -64
        }), this.fillType6 = this.fillType6 || a(this.primaryColor, {
            h: 128
        }), this.fillType7 = this.fillType7 || a(this.secondaryColor, {
            h: 128
        }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || a(this.primaryColor, {
            l: -10
        }), this.pie5 = this.pie5 || a(this.secondaryColor, {
            l: -10
        }), this.pie6 = this.pie6 || a(this.tertiaryColor, {
            l: -10
        }), this.pie7 = this.pie7 || a(this.primaryColor, {
            h: 60,
            l: -10
        }), this.pie8 = this.pie8 || a(this.primaryColor, {
            h: -60,
            l: -10
        }), this.pie9 = this.pie9 || a(this.primaryColor, {
            h: 120,
            l: 0
        }), this.pie10 = this.pie10 || a(this.primaryColor, {
            h: 60,
            l: -20
        }), this.pie11 = this.pie11 || a(this.primaryColor, {
            h: -60,
            l: -20
        }), this.pie12 = this.pie12 || a(this.primaryColor, {
            h: 120,
            l: -10
        }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? g(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || a(this.primaryColor, {
            h: -30
        }), this.git4 = this.git4 || a(this.primaryColor, {
            h: -60
        }), this.git5 = this.git5 || a(this.primaryColor, {
            h: -90
        }), this.git6 = this.git6 || a(this.primaryColor, {
            h: 60
        }), this.git7 = this.git7 || a(this.primaryColor, {
            h: 120
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ c(this.git0, 25), this.git1 = /*#__PURE__*/ c(this.git1, 25), this.git2 = /*#__PURE__*/ c(this.git2, 25), this.git3 = /*#__PURE__*/ c(this.git3, 25), this.git4 = /*#__PURE__*/ c(this.git4, 25), this.git5 = /*#__PURE__*/ c(this.git5, 25), this.git6 = /*#__PURE__*/ c(this.git6, 25), this.git7 = /*#__PURE__*/ c(this.git7, 25)) : (this.git0 = /*#__PURE__*/ g(this.git0, 25), this.git1 = /*#__PURE__*/ g(this.git1, 25), this.git2 = /*#__PURE__*/ g(this.git2, 25), this.git3 = /*#__PURE__*/ g(this.git3, 25), this.git4 = /*#__PURE__*/ g(this.git4, 25), this.git5 = /*#__PURE__*/ g(this.git5, 25), this.git6 = /*#__PURE__*/ g(this.git6, 25), this.git7 = /*#__PURE__*/ g(this.git7, 25)), this.gitInv0 = this.gitInv0 || h(this.git0), this.gitInv1 = this.gitInv1 || h(this.git1), this.gitInv2 = this.gitInv2 || h(this.git2), this.gitInv3 = this.gitInv3 || h(this.git3), this.gitInv4 = this.gitInv4 || h(this.git4), this.gitInv5 = this.gitInv5 || h(this.git5), this.gitInv6 = this.gitInv6 || h(this.git6), this.gitInv7 = this.gitInv7 || h(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || tt, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || et;
    }
    calculate(t) {
        if (typeof t != "object") {
            this.updateColors();
            return;
        }
        let i = /*#__PURE__*/ Object.keys(t);
        i.forEach((s)=>{
            this[s] = t[s];
        }), this.updateColors(), i.forEach((s)=>{
            this[s] = t[s];
        });
    }
}, vi = /*#__PURE__*/ m$1((e)=>{
    let t = new Ee;
    return t.calculate(e), t;
}, "getThemeVariables");
var Ae = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = /*#__PURE__*/ c(this.primaryColor, 16), this.tertiaryColor = /*#__PURE__*/ a(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ h(this.background), this.secondaryBorderColor = /*#__PURE__*/ k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ k(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ h(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ h(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ h(this.tertiaryColor), this.lineColor = /*#__PURE__*/ h(this.background), this.textColor = /*#__PURE__*/ h(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = /*#__PURE__*/ c(/*#__PURE__*/ h("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = /*#__PURE__*/ Z(255, 255, 255, .25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = /*#__PURE__*/ g("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = /*#__PURE__*/ g(this.sectionBkgColor, 10), this.taskBorderColor = /*#__PURE__*/ Z(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = /*#__PURE__*/ Z(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || c(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || g(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
    }
    updateColors() {
        this.secondBkg = /*#__PURE__*/ c(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = /*#__PURE__*/ c(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = /*#__PURE__*/ c(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ a(this.primaryColor, {
            h: 64
        }), this.fillType3 = /*#__PURE__*/ a(this.secondaryColor, {
            h: 64
        }), this.fillType4 = /*#__PURE__*/ a(this.primaryColor, {
            h: -64
        }), this.fillType5 = /*#__PURE__*/ a(this.secondaryColor, {
            h: -64
        }), this.fillType6 = /*#__PURE__*/ a(this.primaryColor, {
            h: 128
        }), this.fillType7 = /*#__PURE__*/ a(this.secondaryColor, {
            h: 128
        }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || a(this.primaryColor, {
            h: 30
        }), this.cScale4 = this.cScale4 || a(this.primaryColor, {
            h: 60
        }), this.cScale5 = this.cScale5 || a(this.primaryColor, {
            h: 90
        }), this.cScale6 = this.cScale6 || a(this.primaryColor, {
            h: 120
        }), this.cScale7 = this.cScale7 || a(this.primaryColor, {
            h: 150
        }), this.cScale8 = this.cScale8 || a(this.primaryColor, {
            h: 210
        }), this.cScale9 = this.cScale9 || a(this.primaryColor, {
            h: 270
        }), this.cScale10 = this.cScale10 || a(this.primaryColor, {
            h: 300
        }), this.cScale11 = this.cScale11 || a(this.primaryColor, {
            h: 330
        });
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScaleInv" + t] = this["cScaleInv" + t] || h(this["cScale" + t]);
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScalePeer" + t] = this["cScalePeer" + t] || c(this["cScale" + t], 10);
        for(let t = 0; t < 5; t++)this["surface" + t] = this["surface" + t] || a(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(-10 + t * 4)
        }), this["surfacePeer" + t] = this["surfacePeer" + t] || a(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(-7 + t * 4)
        });
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["pie" + t] = this["cScale" + t];
        this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
        }, this.packet = {
            startByteColor: this.primaryTextColor,
            endByteColor: this.primaryTextColor,
            labelColor: this.primaryTextColor,
            titleColor: this.primaryTextColor,
            blockStrokeColor: this.primaryTextColor,
            blockFillColor: this.background
        }, this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? g(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = /*#__PURE__*/ c(this.secondaryColor, 20), this.git1 = /*#__PURE__*/ c(this.pie2 || this.secondaryColor, 20), this.git2 = /*#__PURE__*/ c(this.pie3 || this.tertiaryColor, 20), this.git3 = /*#__PURE__*/ c(this.pie4 || a(this.primaryColor, {
            h: -30
        }), 20), this.git4 = /*#__PURE__*/ c(this.pie5 || a(this.primaryColor, {
            h: -60
        }), 20), this.git5 = /*#__PURE__*/ c(this.pie6 || a(this.primaryColor, {
            h: -90
        }), 10), this.git6 = /*#__PURE__*/ c(this.pie7 || a(this.primaryColor, {
            h: 60
        }), 10), this.git7 = /*#__PURE__*/ c(this.pie8 || a(this.primaryColor, {
            h: 120
        }), 20), this.gitInv0 = this.gitInv0 || h(this.git0), this.gitInv1 = this.gitInv1 || h(this.git1), this.gitInv2 = this.gitInv2 || h(this.git2), this.gitInv3 = this.gitInv3 || h(this.git3), this.gitInv4 = this.gitInv4 || h(this.git4), this.gitInv5 = this.gitInv5 || h(this.git5), this.gitInv6 = this.gitInv6 || h(this.git6), this.gitInv7 = this.gitInv7 || h(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || h(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || h(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || c(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || c(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
    }
    calculate(t) {
        if (typeof t != "object") {
            this.updateColors();
            return;
        }
        let i = /*#__PURE__*/ Object.keys(t);
        i.forEach((s)=>{
            this[s] = t[s];
        }), this.updateColors(), i.forEach((s)=>{
            this[s] = t[s];
        });
    }
}, wi = /*#__PURE__*/ m$1((e)=>{
    let t = new Ae;
    return t.calculate(e), t;
}, "getThemeVariables");
var Me = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = /*#__PURE__*/ a(this.primaryColor, {
            h: 120
        }), this.secondaryColor = "#ffffde", this.tertiaryColor = /*#__PURE__*/ a(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ k(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ k(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ h(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ h(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ h(this.tertiaryColor), this.lineColor = /*#__PURE__*/ h(this.background), this.textColor = /*#__PURE__*/ h(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = /*#__PURE__*/ Z(102, 102, 255, .49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
    }
    updateColors() {
        this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || a(this.primaryColor, {
            h: 30
        }), this.cScale4 = this.cScale4 || a(this.primaryColor, {
            h: 60
        }), this.cScale5 = this.cScale5 || a(this.primaryColor, {
            h: 90
        }), this.cScale6 = this.cScale6 || a(this.primaryColor, {
            h: 120
        }), this.cScale7 = this.cScale7 || a(this.primaryColor, {
            h: 150
        }), this.cScale8 = this.cScale8 || a(this.primaryColor, {
            h: 210
        }), this.cScale9 = this.cScale9 || a(this.primaryColor, {
            h: 270
        }), this.cScale10 = this.cScale10 || a(this.primaryColor, {
            h: 300
        }), this.cScale11 = this.cScale11 || a(this.primaryColor, {
            h: 330
        }), this.cScalePeer1 = this.cScalePeer1 || g(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || g(this.tertiaryColor, 40);
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScale" + t] = /*#__PURE__*/ g(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || g(this["cScale" + t], 25);
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScaleInv" + t] = this["cScaleInv" + t] || a(this["cScale" + t], {
            h: 180
        });
        for(let t = 0; t < 5; t++)this["surface" + t] = this["surface" + t] || a(this.mainBkg, {
            h: 30,
            l: -(5 + t * 5)
        }), this["surfacePeer" + t] = this["surfacePeer" + t] || a(this.mainBkg, {
            h: 30,
            l: -(7 + t * 5)
        });
        if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
            this.cScaleLabel0 = this.cScaleLabel0 || h(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || h(this.labelTextColor);
            for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.labelTextColor;
        }
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = /*#__PURE__*/ c(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || c(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || c(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ a(this.primaryColor, {
            h: 64
        }), this.fillType3 = /*#__PURE__*/ a(this.secondaryColor, {
            h: 64
        }), this.fillType4 = /*#__PURE__*/ a(this.primaryColor, {
            h: -64
        }), this.fillType5 = /*#__PURE__*/ a(this.secondaryColor, {
            h: -64
        }), this.fillType6 = /*#__PURE__*/ a(this.primaryColor, {
            h: 128
        }), this.fillType7 = /*#__PURE__*/ a(this.secondaryColor, {
            h: 128
        }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || a(this.tertiaryColor, {
            l: -40
        }), this.pie4 = this.pie4 || a(this.primaryColor, {
            l: -10
        }), this.pie5 = this.pie5 || a(this.secondaryColor, {
            l: -30
        }), this.pie6 = this.pie6 || a(this.tertiaryColor, {
            l: -20
        }), this.pie7 = this.pie7 || a(this.primaryColor, {
            h: 60,
            l: -20
        }), this.pie8 = this.pie8 || a(this.primaryColor, {
            h: -60,
            l: -40
        }), this.pie9 = this.pie9 || a(this.primaryColor, {
            h: 120,
            l: -40
        }), this.pie10 = this.pie10 || a(this.primaryColor, {
            h: 60,
            l: -40
        }), this.pie11 = this.pie11 || a(this.primaryColor, {
            h: -90,
            l: -40
        }), this.pie12 = this.pie12 || a(this.primaryColor, {
            h: 120,
            l: -30
        }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || a(this.primaryColor, {
            h: -30
        }), this.git4 = this.git4 || a(this.primaryColor, {
            h: -60
        }), this.git5 = this.git5 || a(this.primaryColor, {
            h: -90
        }), this.git6 = this.git6 || a(this.primaryColor, {
            h: 60
        }), this.git7 = this.git7 || a(this.primaryColor, {
            h: 120
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ c(this.git0, 25), this.git1 = /*#__PURE__*/ c(this.git1, 25), this.git2 = /*#__PURE__*/ c(this.git2, 25), this.git3 = /*#__PURE__*/ c(this.git3, 25), this.git4 = /*#__PURE__*/ c(this.git4, 25), this.git5 = /*#__PURE__*/ c(this.git5, 25), this.git6 = /*#__PURE__*/ c(this.git6, 25), this.git7 = /*#__PURE__*/ c(this.git7, 25)) : (this.git0 = /*#__PURE__*/ g(this.git0, 25), this.git1 = /*#__PURE__*/ g(this.git1, 25), this.git2 = /*#__PURE__*/ g(this.git2, 25), this.git3 = /*#__PURE__*/ g(this.git3, 25), this.git4 = /*#__PURE__*/ g(this.git4, 25), this.git5 = /*#__PURE__*/ g(this.git5, 25), this.git6 = /*#__PURE__*/ g(this.git6, 25), this.git7 = /*#__PURE__*/ g(this.git7, 25)), this.gitInv0 = this.gitInv0 || g(/*#__PURE__*/ h(this.git0), 25), this.gitInv1 = this.gitInv1 || h(this.git1), this.gitInv2 = this.gitInv2 || h(this.git2), this.gitInv3 = this.gitInv3 || h(this.git3), this.gitInv4 = this.gitInv4 || h(this.git4), this.gitInv5 = this.gitInv5 || h(this.git5), this.gitInv6 = this.gitInv6 || h(this.git6), this.gitInv7 = this.gitInv7 || h(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || h(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || h(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || tt, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || et;
    }
    calculate(t) {
        if (Object.keys(this).forEach((s)=>{
            this[s] === "calculated" && (this[s] = void 0);
        }), typeof t != "object") {
            this.updateColors();
            return;
        }
        let i = /*#__PURE__*/ Object.keys(t);
        i.forEach((s)=>{
            this[s] = t[s];
        }), this.updateColors(), i.forEach((s)=>{
            this[s] = t[s];
        });
    }
}, Di = /*#__PURE__*/ m$1((e)=>{
    let t = new Me;
    return t.calculate(e), t;
}, "getThemeVariables");
var Oe = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = /*#__PURE__*/ c("#cde498", 10), this.primaryBorderColor = /*#__PURE__*/ k(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ k(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ h(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ h(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ h(this.primaryColor), this.lineColor = /*#__PURE__*/ h(this.background), this.textColor = /*#__PURE__*/ h(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
        this.actorBorder = /*#__PURE__*/ g(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || a(this.primaryColor, {
            h: 30
        }), this.cScale4 = this.cScale4 || a(this.primaryColor, {
            h: 60
        }), this.cScale5 = this.cScale5 || a(this.primaryColor, {
            h: 90
        }), this.cScale6 = this.cScale6 || a(this.primaryColor, {
            h: 120
        }), this.cScale7 = this.cScale7 || a(this.primaryColor, {
            h: 150
        }), this.cScale8 = this.cScale8 || a(this.primaryColor, {
            h: 210
        }), this.cScale9 = this.cScale9 || a(this.primaryColor, {
            h: 270
        }), this.cScale10 = this.cScale10 || a(this.primaryColor, {
            h: 300
        }), this.cScale11 = this.cScale11 || a(this.primaryColor, {
            h: 330
        }), this.cScalePeer1 = this.cScalePeer1 || g(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || g(this.tertiaryColor, 40);
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScale" + t] = /*#__PURE__*/ g(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || g(this["cScale" + t], 25);
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScaleInv" + t] = this["cScaleInv" + t] || a(this["cScale" + t], {
            h: 180
        });
        this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
        for(let t = 0; t < 5; t++)this["surface" + t] = this["surface" + t] || a(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(5 + t * 5)
        }), this["surfacePeer" + t] = this["surfacePeer" + t] || a(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(8 + t * 5)
        });
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || c(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || c(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ a(this.primaryColor, {
            h: 64
        }), this.fillType3 = /*#__PURE__*/ a(this.secondaryColor, {
            h: 64
        }), this.fillType4 = /*#__PURE__*/ a(this.primaryColor, {
            h: -64
        }), this.fillType5 = /*#__PURE__*/ a(this.secondaryColor, {
            h: -64
        }), this.fillType6 = /*#__PURE__*/ a(this.primaryColor, {
            h: 128
        }), this.fillType7 = /*#__PURE__*/ a(this.secondaryColor, {
            h: 128
        }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || a(this.primaryColor, {
            l: -30
        }), this.pie5 = this.pie5 || a(this.secondaryColor, {
            l: -30
        }), this.pie6 = this.pie6 || a(this.tertiaryColor, {
            h: 40,
            l: -40
        }), this.pie7 = this.pie7 || a(this.primaryColor, {
            h: 60,
            l: -10
        }), this.pie8 = this.pie8 || a(this.primaryColor, {
            h: -60,
            l: -10
        }), this.pie9 = this.pie9 || a(this.primaryColor, {
            h: 120,
            l: 0
        }), this.pie10 = this.pie10 || a(this.primaryColor, {
            h: 60,
            l: -50
        }), this.pie11 = this.pie11 || a(this.primaryColor, {
            h: -60,
            l: -50
        }), this.pie12 = this.pie12 || a(this.primaryColor, {
            h: 120,
            l: -50
        }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
            startByteColor: this.primaryTextColor,
            endByteColor: this.primaryTextColor,
            labelColor: this.primaryTextColor,
            titleColor: this.primaryTextColor,
            blockStrokeColor: this.primaryTextColor,
            blockFillColor: this.mainBkg
        }, this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || a(this.primaryColor, {
            h: -30
        }), this.git4 = this.git4 || a(this.primaryColor, {
            h: -60
        }), this.git5 = this.git5 || a(this.primaryColor, {
            h: -90
        }), this.git6 = this.git6 || a(this.primaryColor, {
            h: 60
        }), this.git7 = this.git7 || a(this.primaryColor, {
            h: 120
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ c(this.git0, 25), this.git1 = /*#__PURE__*/ c(this.git1, 25), this.git2 = /*#__PURE__*/ c(this.git2, 25), this.git3 = /*#__PURE__*/ c(this.git3, 25), this.git4 = /*#__PURE__*/ c(this.git4, 25), this.git5 = /*#__PURE__*/ c(this.git5, 25), this.git6 = /*#__PURE__*/ c(this.git6, 25), this.git7 = /*#__PURE__*/ c(this.git7, 25)) : (this.git0 = /*#__PURE__*/ g(this.git0, 25), this.git1 = /*#__PURE__*/ g(this.git1, 25), this.git2 = /*#__PURE__*/ g(this.git2, 25), this.git3 = /*#__PURE__*/ g(this.git3, 25), this.git4 = /*#__PURE__*/ g(this.git4, 25), this.git5 = /*#__PURE__*/ g(this.git5, 25), this.git6 = /*#__PURE__*/ g(this.git6, 25), this.git7 = /*#__PURE__*/ g(this.git7, 25)), this.gitInv0 = this.gitInv0 || h(this.git0), this.gitInv1 = this.gitInv1 || h(this.git1), this.gitInv2 = this.gitInv2 || h(this.git2), this.gitInv3 = this.gitInv3 || h(this.git3), this.gitInv4 = this.gitInv4 || h(this.git4), this.gitInv5 = this.gitInv5 || h(this.git5), this.gitInv6 = this.gitInv6 || h(this.git6), this.gitInv7 = this.gitInv7 || h(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || h(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || h(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || tt, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || et;
    }
    calculate(t) {
        if (typeof t != "object") {
            this.updateColors();
            return;
        }
        let i = /*#__PURE__*/ Object.keys(t);
        i.forEach((s)=>{
            this[s] = t[s];
        }), this.updateColors(), i.forEach((s)=>{
            this[s] = t[s];
        });
    }
}, Ii = /*#__PURE__*/ m$1((e)=>{
    let t = new Oe;
    return t.calculate(e), t;
}, "getThemeVariables");
var ve = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = /*#__PURE__*/ c(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = /*#__PURE__*/ a(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ k(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ k(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ h(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ h(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ h(this.tertiaryColor), this.lineColor = /*#__PURE__*/ h(this.background), this.textColor = /*#__PURE__*/ h(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || c(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
        this.secondBkg = /*#__PURE__*/ c(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = /*#__PURE__*/ c(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScaleInv" + t] = this["cScaleInv" + t] || h(this["cScale" + t]);
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || c(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || g(this["cScale" + t], 10);
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
        for(let t = 0; t < 5; t++)this["surface" + t] = this["surface" + t] || a(this.mainBkg, {
            l: -(5 + t * 5)
        }), this["surfacePeer" + t] = this["surfacePeer" + t] || a(this.mainBkg, {
            l: -(8 + t * 5)
        });
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = /*#__PURE__*/ c(this.contrast, 30), this.sectionBkgColor2 = /*#__PURE__*/ c(this.contrast, 30), this.taskBorderColor = /*#__PURE__*/ g(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = /*#__PURE__*/ c(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = /*#__PURE__*/ g(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ a(this.primaryColor, {
            h: 64
        }), this.fillType3 = /*#__PURE__*/ a(this.secondaryColor, {
            h: 64
        }), this.fillType4 = /*#__PURE__*/ a(this.primaryColor, {
            h: -64
        }), this.fillType5 = /*#__PURE__*/ a(this.secondaryColor, {
            h: -64
        }), this.fillType6 = /*#__PURE__*/ a(this.primaryColor, {
            h: 128
        }), this.fillType7 = /*#__PURE__*/ a(this.secondaryColor, {
            h: 128
        });
        for(let t = 0; t < this.THEME_COLOR_LIMIT; t++)this["pie" + t] = this["cScale" + t];
        this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
        }, this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = g(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || a(this.primaryColor, {
            h: -30
        }), this.git4 = this.pie5 || a(this.primaryColor, {
            h: -60
        }), this.git5 = this.pie6 || a(this.primaryColor, {
            h: -90
        }), this.git6 = this.pie7 || a(this.primaryColor, {
            h: 60
        }), this.git7 = this.pie8 || a(this.primaryColor, {
            h: 120
        }), this.gitInv0 = this.gitInv0 || h(this.git0), this.gitInv1 = this.gitInv1 || h(this.git1), this.gitInv2 = this.gitInv2 || h(this.git2), this.gitInv3 = this.gitInv3 || h(this.git3), this.gitInv4 = this.gitInv4 || h(this.git4), this.gitInv5 = this.gitInv5 || h(this.git5), this.gitInv6 = this.gitInv6 || h(this.git6), this.gitInv7 = this.gitInv7 || h(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || tt, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || et;
    }
    calculate(t) {
        if (typeof t != "object") {
            this.updateColors();
            return;
        }
        let i = /*#__PURE__*/ Object.keys(t);
        i.forEach((s)=>{
            this[s] = t[s];
        }), this.updateColors(), i.forEach((s)=>{
            this[s] = t[s];
        });
    }
}, qi = /*#__PURE__*/ m$1((e)=>{
    let t = new ve;
    return t.calculate(e), t;
}, "getThemeVariables");
var it = {
    base: {
        getThemeVariables: vi
    },
    dark: {
        getThemeVariables: wi
    },
    default: {
        getThemeVariables: Di
    },
    forest: {
        getThemeVariables: Ii
    },
    neutral: {
        getThemeVariables: qi
    }
};
var G = {
    flowchart: {
        useMaxWidth: true,
        titleTopMargin: 25,
        subGraphTitleMargin: {
            top: 0,
            bottom: 0
        },
        diagramPadding: 8,
        htmlLabels: true,
        nodeSpacing: 50,
        rankSpacing: 50,
        curve: "basis",
        padding: 15,
        defaultRenderer: "dagre-wrapper",
        wrappingWidth: 200,
        inheritDir: false
    },
    sequence: {
        useMaxWidth: true,
        hideUnusedParticipants: false,
        activationWidth: 10,
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        messageAlign: "center",
        mirrorActors: true,
        forceMenus: false,
        bottomMarginAdj: 1,
        rightAngles: false,
        showSequenceNumbers: false,
        actorFontSize: 14,
        actorFontFamily: '"Open Sans", sans-serif',
        actorFontWeight: 400,
        noteFontSize: 14,
        noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
        noteFontWeight: 400,
        noteAlign: "center",
        messageFontSize: 16,
        messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
        messageFontWeight: 400,
        wrap: false,
        wrapPadding: 10,
        labelBoxWidth: 50,
        labelBoxHeight: 20
    },
    gantt: {
        useMaxWidth: true,
        titleTopMargin: 25,
        barHeight: 20,
        barGap: 4,
        topPadding: 50,
        rightPadding: 75,
        leftPadding: 75,
        gridLineStartPadding: 35,
        fontSize: 11,
        sectionFontSize: 11,
        numberSectionStyles: 4,
        axisFormat: "%Y-%m-%d",
        topAxis: false,
        displayMode: "",
        weekday: "sunday"
    },
    journey: {
        useMaxWidth: true,
        diagramMarginX: 50,
        diagramMarginY: 10,
        leftMargin: 150,
        maxLabelWidth: 360,
        width: 150,
        height: 50,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        messageAlign: "center",
        bottomMarginAdj: 1,
        rightAngles: false,
        taskFontSize: 14,
        taskFontFamily: '"Open Sans", sans-serif',
        taskMargin: 50,
        activationWidth: 10,
        textPlacement: "fo",
        actorColours: [
            "#8FBC8F",
            "#7CFC00",
            "#00FFFF",
            "#20B2AA",
            "#B0E0E6",
            "#FFFFE0"
        ],
        sectionFills: [
            "#191970",
            "#8B008B",
            "#4B0082",
            "#2F4F4F",
            "#800000",
            "#8B4513",
            "#00008B"
        ],
        sectionColours: [
            "#fff"
        ],
        titleColor: "",
        titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
        titleFontSize: "4ex"
    },
    class: {
        useMaxWidth: true,
        titleTopMargin: 25,
        arrowMarkerAbsolute: false,
        dividerMargin: 10,
        padding: 5,
        textHeight: 10,
        defaultRenderer: "dagre-wrapper",
        htmlLabels: false,
        hideEmptyMembersBox: false
    },
    state: {
        useMaxWidth: true,
        titleTopMargin: 25,
        dividerMargin: 10,
        sizeUnit: 5,
        padding: 8,
        textHeight: 10,
        titleShift: -15,
        noteMargin: 10,
        forkWidth: 70,
        forkHeight: 7,
        miniPadding: 2,
        fontSizeFactor: 5.02,
        fontSize: 24,
        labelHeight: 16,
        edgeLengthFactor: "20",
        compositTitleSize: 35,
        radius: 5,
        defaultRenderer: "dagre-wrapper"
    },
    er: {
        useMaxWidth: true,
        titleTopMargin: 25,
        diagramPadding: 20,
        layoutDirection: "TB",
        minEntityWidth: 100,
        minEntityHeight: 75,
        entityPadding: 15,
        nodeSpacing: 140,
        rankSpacing: 80,
        stroke: "gray",
        fill: "honeydew",
        fontSize: 12
    },
    pie: {
        useMaxWidth: true,
        textPosition: .75
    },
    quadrantChart: {
        useMaxWidth: true,
        chartWidth: 500,
        chartHeight: 500,
        titleFontSize: 20,
        titlePadding: 10,
        quadrantPadding: 5,
        xAxisLabelPadding: 5,
        yAxisLabelPadding: 5,
        xAxisLabelFontSize: 16,
        yAxisLabelFontSize: 16,
        quadrantLabelFontSize: 16,
        quadrantTextTopPadding: 5,
        pointTextPadding: 5,
        pointLabelFontSize: 12,
        pointRadius: 5,
        xAxisPosition: "top",
        yAxisPosition: "left",
        quadrantInternalBorderStrokeWidth: 1,
        quadrantExternalBorderStrokeWidth: 2
    },
    xyChart: {
        useMaxWidth: true,
        width: 700,
        height: 500,
        titleFontSize: 20,
        titlePadding: 10,
        showDataLabel: false,
        showTitle: true,
        xAxis: {
            $ref: "#/$defs/XYChartAxisConfig",
            showLabel: true,
            labelFontSize: 14,
            labelPadding: 5,
            showTitle: true,
            titleFontSize: 16,
            titlePadding: 5,
            showTick: true,
            tickLength: 5,
            tickWidth: 2,
            showAxisLine: true,
            axisLineWidth: 2
        },
        yAxis: {
            $ref: "#/$defs/XYChartAxisConfig",
            showLabel: true,
            labelFontSize: 14,
            labelPadding: 5,
            showTitle: true,
            titleFontSize: 16,
            titlePadding: 5,
            showTick: true,
            tickLength: 5,
            tickWidth: 2,
            showAxisLine: true,
            axisLineWidth: 2
        },
        chartOrientation: "vertical",
        plotReservedSpacePercent: 50
    },
    requirement: {
        useMaxWidth: true,
        rect_fill: "#f9f9f9",
        text_color: "#333",
        rect_border_size: "0.5px",
        rect_border_color: "#bbb",
        rect_min_width: 200,
        rect_min_height: 200,
        fontSize: 14,
        rect_padding: 10,
        line_height: 20
    },
    mindmap: {
        useMaxWidth: true,
        padding: 10,
        maxNodeWidth: 200,
        layoutAlgorithm: "cose-bilkent"
    },
    kanban: {
        useMaxWidth: true,
        padding: 8,
        sectionWidth: 200,
        ticketBaseUrl: ""
    },
    timeline: {
        useMaxWidth: true,
        diagramMarginX: 50,
        diagramMarginY: 10,
        leftMargin: 150,
        width: 150,
        height: 50,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        messageAlign: "center",
        bottomMarginAdj: 1,
        rightAngles: false,
        taskFontSize: 14,
        taskFontFamily: '"Open Sans", sans-serif',
        taskMargin: 50,
        activationWidth: 10,
        textPlacement: "fo",
        actorColours: [
            "#8FBC8F",
            "#7CFC00",
            "#00FFFF",
            "#20B2AA",
            "#B0E0E6",
            "#FFFFE0"
        ],
        sectionFills: [
            "#191970",
            "#8B008B",
            "#4B0082",
            "#2F4F4F",
            "#800000",
            "#8B4513",
            "#00008B"
        ],
        sectionColours: [
            "#fff"
        ],
        disableMulticolor: false
    },
    gitGraph: {
        useMaxWidth: true,
        titleTopMargin: 25,
        diagramPadding: 8,
        nodeLabel: {
            width: 75,
            height: 100,
            x: -25,
            y: 0
        },
        mainBranchName: "main",
        mainBranchOrder: 0,
        showCommitLabel: true,
        showBranches: true,
        rotateCommitLabel: true,
        parallelCommits: false,
        arrowMarkerAbsolute: false
    },
    c4: {
        useMaxWidth: true,
        diagramMarginX: 50,
        diagramMarginY: 10,
        c4ShapeMargin: 50,
        c4ShapePadding: 20,
        width: 216,
        height: 60,
        boxMargin: 10,
        c4ShapeInRow: 4,
        nextLinePaddingX: 0,
        c4BoundaryInRow: 2,
        personFontSize: 14,
        personFontFamily: '"Open Sans", sans-serif',
        personFontWeight: "normal",
        external_personFontSize: 14,
        external_personFontFamily: '"Open Sans", sans-serif',
        external_personFontWeight: "normal",
        systemFontSize: 14,
        systemFontFamily: '"Open Sans", sans-serif',
        systemFontWeight: "normal",
        external_systemFontSize: 14,
        external_systemFontFamily: '"Open Sans", sans-serif',
        external_systemFontWeight: "normal",
        system_dbFontSize: 14,
        system_dbFontFamily: '"Open Sans", sans-serif',
        system_dbFontWeight: "normal",
        external_system_dbFontSize: 14,
        external_system_dbFontFamily: '"Open Sans", sans-serif',
        external_system_dbFontWeight: "normal",
        system_queueFontSize: 14,
        system_queueFontFamily: '"Open Sans", sans-serif',
        system_queueFontWeight: "normal",
        external_system_queueFontSize: 14,
        external_system_queueFontFamily: '"Open Sans", sans-serif',
        external_system_queueFontWeight: "normal",
        boundaryFontSize: 14,
        boundaryFontFamily: '"Open Sans", sans-serif',
        boundaryFontWeight: "normal",
        messageFontSize: 12,
        messageFontFamily: '"Open Sans", sans-serif',
        messageFontWeight: "normal",
        containerFontSize: 14,
        containerFontFamily: '"Open Sans", sans-serif',
        containerFontWeight: "normal",
        external_containerFontSize: 14,
        external_containerFontFamily: '"Open Sans", sans-serif',
        external_containerFontWeight: "normal",
        container_dbFontSize: 14,
        container_dbFontFamily: '"Open Sans", sans-serif',
        container_dbFontWeight: "normal",
        external_container_dbFontSize: 14,
        external_container_dbFontFamily: '"Open Sans", sans-serif',
        external_container_dbFontWeight: "normal",
        container_queueFontSize: 14,
        container_queueFontFamily: '"Open Sans", sans-serif',
        container_queueFontWeight: "normal",
        external_container_queueFontSize: 14,
        external_container_queueFontFamily: '"Open Sans", sans-serif',
        external_container_queueFontWeight: "normal",
        componentFontSize: 14,
        componentFontFamily: '"Open Sans", sans-serif',
        componentFontWeight: "normal",
        external_componentFontSize: 14,
        external_componentFontFamily: '"Open Sans", sans-serif',
        external_componentFontWeight: "normal",
        component_dbFontSize: 14,
        component_dbFontFamily: '"Open Sans", sans-serif',
        component_dbFontWeight: "normal",
        external_component_dbFontSize: 14,
        external_component_dbFontFamily: '"Open Sans", sans-serif',
        external_component_dbFontWeight: "normal",
        component_queueFontSize: 14,
        component_queueFontFamily: '"Open Sans", sans-serif',
        component_queueFontWeight: "normal",
        external_component_queueFontSize: 14,
        external_component_queueFontFamily: '"Open Sans", sans-serif',
        external_component_queueFontWeight: "normal",
        wrap: true,
        wrapPadding: 10,
        person_bg_color: "#08427B",
        person_border_color: "#073B6F",
        external_person_bg_color: "#686868",
        external_person_border_color: "#8A8A8A",
        system_bg_color: "#1168BD",
        system_border_color: "#3C7FC0",
        system_db_bg_color: "#1168BD",
        system_db_border_color: "#3C7FC0",
        system_queue_bg_color: "#1168BD",
        system_queue_border_color: "#3C7FC0",
        external_system_bg_color: "#999999",
        external_system_border_color: "#8A8A8A",
        external_system_db_bg_color: "#999999",
        external_system_db_border_color: "#8A8A8A",
        external_system_queue_bg_color: "#999999",
        external_system_queue_border_color: "#8A8A8A",
        container_bg_color: "#438DD5",
        container_border_color: "#3C7FC0",
        container_db_bg_color: "#438DD5",
        container_db_border_color: "#3C7FC0",
        container_queue_bg_color: "#438DD5",
        container_queue_border_color: "#3C7FC0",
        external_container_bg_color: "#B3B3B3",
        external_container_border_color: "#A6A6A6",
        external_container_db_bg_color: "#B3B3B3",
        external_container_db_border_color: "#A6A6A6",
        external_container_queue_bg_color: "#B3B3B3",
        external_container_queue_border_color: "#A6A6A6",
        component_bg_color: "#85BBF0",
        component_border_color: "#78A8D8",
        component_db_bg_color: "#85BBF0",
        component_db_border_color: "#78A8D8",
        component_queue_bg_color: "#85BBF0",
        component_queue_border_color: "#78A8D8",
        external_component_bg_color: "#CCCCCC",
        external_component_border_color: "#BFBFBF",
        external_component_db_bg_color: "#CCCCCC",
        external_component_db_border_color: "#BFBFBF",
        external_component_queue_bg_color: "#CCCCCC",
        external_component_queue_border_color: "#BFBFBF"
    },
    sankey: {
        useMaxWidth: true,
        width: 600,
        height: 400,
        linkColor: "gradient",
        nodeAlignment: "justify",
        showValues: true,
        prefix: "",
        suffix: ""
    },
    block: {
        useMaxWidth: true,
        padding: 8
    },
    packet: {
        useMaxWidth: true,
        rowHeight: 32,
        bitWidth: 32,
        bitsPerRow: 32,
        showBits: true,
        paddingX: 5,
        paddingY: 5
    },
    architecture: {
        useMaxWidth: true,
        padding: 40,
        iconSize: 80,
        fontSize: 16
    },
    radar: {
        useMaxWidth: true,
        width: 600,
        height: 600,
        marginTop: 50,
        marginRight: 50,
        marginBottom: 50,
        marginLeft: 50,
        axisScaleFactor: 1,
        axisLabelFactor: 1.05,
        curveTension: .17
    },
    theme: "default",
    look: "classic",
    handDrawnSeed: 0,
    layout: "dagre",
    maxTextSize: 5e4,
    maxEdges: 500,
    darkMode: false,
    fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
    logLevel: 5,
    securityLevel: "strict",
    startOnLoad: true,
    arrowMarkerAbsolute: false,
    secure: [
        "secure",
        "securityLevel",
        "startOnLoad",
        "maxTextSize",
        "suppressErrorRendering",
        "maxEdges"
    ],
    legacyMathML: false,
    forceLegacyMathML: false,
    deterministicIds: false,
    fontSize: 16,
    markdownAutoWrap: true,
    suppressErrorRendering: false
};
var zi = {
    ...G,
    deterministicIDSeed: void 0,
    elk: {
        mergeEdges: false,
        nodePlacementStrategy: "BRANDES_KOEPF",
        forceNodeModelOrder: false,
        considerModelOrder: "NODES_AND_EDGES"
    },
    themeCSS: void 0,
    themeVariables: /*#__PURE__*/ it.default.getThemeVariables(),
    sequence: {
        ...G.sequence,
        messageFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.messageFontFamily,
                fontSize: this.messageFontSize,
                fontWeight: this.messageFontWeight
            };
        }, "messageFont"),
        noteFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.noteFontFamily,
                fontSize: this.noteFontSize,
                fontWeight: this.noteFontWeight
            };
        }, "noteFont"),
        actorFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.actorFontFamily,
                fontSize: this.actorFontSize,
                fontWeight: this.actorFontWeight
            };
        }, "actorFont")
    },
    class: {
        hideEmptyMembersBox: false
    },
    gantt: {
        ...G.gantt,
        tickInterval: void 0,
        useWidth: void 0
    },
    c4: {
        ...G.c4,
        useWidth: void 0,
        personFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.personFontFamily,
                fontSize: this.personFontSize,
                fontWeight: this.personFontWeight
            };
        }, "personFont"),
        flowchart: {
            ...G.flowchart,
            inheritDir: false
        },
        external_personFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_personFontFamily,
                fontSize: this.external_personFontSize,
                fontWeight: this.external_personFontWeight
            };
        }, "external_personFont"),
        systemFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.systemFontFamily,
                fontSize: this.systemFontSize,
                fontWeight: this.systemFontWeight
            };
        }, "systemFont"),
        external_systemFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_systemFontFamily,
                fontSize: this.external_systemFontSize,
                fontWeight: this.external_systemFontWeight
            };
        }, "external_systemFont"),
        system_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.system_dbFontFamily,
                fontSize: this.system_dbFontSize,
                fontWeight: this.system_dbFontWeight
            };
        }, "system_dbFont"),
        external_system_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_system_dbFontFamily,
                fontSize: this.external_system_dbFontSize,
                fontWeight: this.external_system_dbFontWeight
            };
        }, "external_system_dbFont"),
        system_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.system_queueFontFamily,
                fontSize: this.system_queueFontSize,
                fontWeight: this.system_queueFontWeight
            };
        }, "system_queueFont"),
        external_system_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_system_queueFontFamily,
                fontSize: this.external_system_queueFontSize,
                fontWeight: this.external_system_queueFontWeight
            };
        }, "external_system_queueFont"),
        containerFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.containerFontFamily,
                fontSize: this.containerFontSize,
                fontWeight: this.containerFontWeight
            };
        }, "containerFont"),
        external_containerFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_containerFontFamily,
                fontSize: this.external_containerFontSize,
                fontWeight: this.external_containerFontWeight
            };
        }, "external_containerFont"),
        container_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.container_dbFontFamily,
                fontSize: this.container_dbFontSize,
                fontWeight: this.container_dbFontWeight
            };
        }, "container_dbFont"),
        external_container_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_container_dbFontFamily,
                fontSize: this.external_container_dbFontSize,
                fontWeight: this.external_container_dbFontWeight
            };
        }, "external_container_dbFont"),
        container_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.container_queueFontFamily,
                fontSize: this.container_queueFontSize,
                fontWeight: this.container_queueFontWeight
            };
        }, "container_queueFont"),
        external_container_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_container_queueFontFamily,
                fontSize: this.external_container_queueFontSize,
                fontWeight: this.external_container_queueFontWeight
            };
        }, "external_container_queueFont"),
        componentFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.componentFontFamily,
                fontSize: this.componentFontSize,
                fontWeight: this.componentFontWeight
            };
        }, "componentFont"),
        external_componentFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_componentFontFamily,
                fontSize: this.external_componentFontSize,
                fontWeight: this.external_componentFontWeight
            };
        }, "external_componentFont"),
        component_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.component_dbFontFamily,
                fontSize: this.component_dbFontSize,
                fontWeight: this.component_dbFontWeight
            };
        }, "component_dbFont"),
        external_component_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_component_dbFontFamily,
                fontSize: this.external_component_dbFontSize,
                fontWeight: this.external_component_dbFontWeight
            };
        }, "external_component_dbFont"),
        component_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.component_queueFontFamily,
                fontSize: this.component_queueFontSize,
                fontWeight: this.component_queueFontWeight
            };
        }, "component_queueFont"),
        external_component_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_component_queueFontFamily,
                fontSize: this.external_component_queueFontSize,
                fontWeight: this.external_component_queueFontWeight
            };
        }, "external_component_queueFont"),
        boundaryFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.boundaryFontFamily,
                fontSize: this.boundaryFontSize,
                fontWeight: this.boundaryFontWeight
            };
        }, "boundaryFont"),
        messageFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.messageFontFamily,
                fontSize: this.messageFontSize,
                fontWeight: this.messageFontWeight
            };
        }, "messageFont")
    },
    pie: {
        ...G.pie,
        useWidth: 984
    },
    xyChart: {
        ...G.xyChart,
        useWidth: void 0
    },
    requirement: {
        ...G.requirement,
        useWidth: void 0
    },
    packet: {
        ...G.packet
    },
    radar: {
        ...G.radar
    },
    treemap: {
        useMaxWidth: true,
        padding: 10,
        diagramPadding: 8,
        showValues: true,
        nodeWidth: 100,
        nodeHeight: 40,
        borderWidth: 1,
        valueFontSize: 12,
        labelFontSize: 14,
        valueFormat: ","
    }
}, Ri = m$1((e, t = "")=>Object.keys(e).reduce((i, s)=>Array.isArray(e[s]) ? i : typeof e[s] == "object" && e[s] !== null ? [
            ...i,
            t + s,
            .../*#__PURE__*/ Ri(e[s], "")
        ] : [
            ...i,
            t + s
        ], []), "keyify"), Wi = new Set(Ri(zi, "")), Pi = zi;
var Zt = m$1((e)=>{
    if (pt.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
        if (Array.isArray(e)) {
            e.forEach((t)=>Zt(t));
            return;
        }
        for (let t of Object.keys(e)){
            if (pt.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !Wi.has(t) || e[t] == null) {
                pt.debug("sanitize deleting key: ", t), delete e[t];
                continue;
            }
            if (typeof e[t] == "object") {
                pt.debug("sanitizing object", t), Zt(e[t]);
                continue;
            }
            let i = [
                "themeCSS",
                "fontFamily",
                "altFontFamily"
            ];
            for (let s of i)t.includes(s) && (pt.debug("sanitizing css option", t), e[t] = /*#__PURE__*/ Xr(e[t]));
        }
        if (e.themeVariables) for (let t of Object.keys(e.themeVariables)){
            let i = e.themeVariables[t];
            i?.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
        }
        pt.debug("After sanitization", e);
    }
}, "sanitizeDirective"), Xr = /*#__PURE__*/ m$1((e)=>{
    let t = 0, i = 0;
    for (let s of e){
        if (t < i) return "{ /* ERROR: Unbalanced CSS */ }";
        s === "{" ? t++ : s === "}" && i++;
    }
    return t !== i ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss");
var At = /*#__PURE__*/ Object.freeze(Pi), P = /*#__PURE__*/ v({}, At), Jt, at = [], Et = /*#__PURE__*/ v({}, At), Qt = /*#__PURE__*/ m$1((e, t)=>{
    let i = /*#__PURE__*/ v({}, e), s = {};
    for (let l of t)Ui(l), s = /*#__PURE__*/ v(s, l);
    if (i = /*#__PURE__*/ v(i, s), s.theme && s.theme in it) {
        let l = /*#__PURE__*/ v({}, Jt), d = /*#__PURE__*/ v(l.themeVariables || {}, s.themeVariables);
        i.theme && i.theme in it && (i.themeVariables = /*#__PURE__*/ it[i.theme].getThemeVariables(d));
    }
    return Et = i, Gi(Et), Et;
}, "updateCurrentConfig"), Kr = /*#__PURE__*/ m$1((e)=>(P = /*#__PURE__*/ v({}, At), P = /*#__PURE__*/ v(P, e), e.theme && it[e.theme] && (P.themeVariables = /*#__PURE__*/ it[e.theme].getThemeVariables(e.themeVariables)), Qt(P, at), P), "setSiteConfig"), Yl = /*#__PURE__*/ m$1((e)=>{
    Jt = /*#__PURE__*/ v({}, e);
}, "saveConfigFromInitialize"), Xl = /*#__PURE__*/ m$1((e)=>(P = /*#__PURE__*/ v(P, e), Qt(P, at), P), "updateSiteConfig"), Kl = /*#__PURE__*/ m$1(()=>v({}, P), "getSiteConfig"), Hi = /*#__PURE__*/ m$1((e)=>(Gi(e), v(Et, e), Mt()), "setConfig"), Mt = /*#__PURE__*/ m$1(()=>v({}, Et), "getConfig"), Ui = m$1((e)=>{
    e && ([
        "secure",
        ...P.secure ?? []
    ].forEach((t)=>{
        Object.hasOwn(e, t) && (pt.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
    }), Object.keys(e).forEach((t)=>{
        t.startsWith("__") && delete e[t];
    }), Object.keys(e).forEach((t)=>{
        typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && Ui(e[t]);
    }));
}, "sanitize"), Zl = /*#__PURE__*/ m$1((e)=>{
    Zt(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
        ...e.themeVariables,
        fontFamily: e.fontFamily
    }), at.push(e), Qt(P, at);
}, "addDirective"), Jl = /*#__PURE__*/ m$1((e = P)=>{
    at = [], Qt(e, at);
}, "reset"), Zr = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, Ni = {}, Jr = /*#__PURE__*/ m$1((e)=>{
    Ni[e] || (pt.warn(Zr[e]), Ni[e] = true);
}, "issueWarning"), Gi = /*#__PURE__*/ m$1((e)=>{
    e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && Jr("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), Ql = /*#__PURE__*/ m$1(()=>{
    let e = {};
    Jt && (e = /*#__PURE__*/ v(e, Jt));
    for (let t of at)e = /*#__PURE__*/ v(e, t);
    return e;
}, "getUserDefinedConfig");
var { entries: tr, setPrototypeOf: $i, isFrozen: Qr, getPrototypeOf: to, getOwnPropertyDescriptor: eo } = Object, { freeze: z, seal: N, create: er } = Object, { apply: Re, construct: We } = typeof Reflect < "u" && Reflect;
z || (z = /*#__PURE__*/ m$1(function(t) {
    return t;
}, "freeze"));
N || (N = /*#__PURE__*/ m$1(function(t) {
    return t;
}, "seal"));
Re || (Re = /*#__PURE__*/ m$1(function(t, i, s) {
    return t.apply(i, s);
}, "apply"));
We || (We = /*#__PURE__*/ m$1(function(t, i) {
    return new t(...i);
}, "construct"));
var te = /*#__PURE__*/ R(Array.prototype.forEach), io = /*#__PURE__*/ R(Array.prototype.lastIndexOf), ji = /*#__PURE__*/ R(Array.prototype.pop), Ot = /*#__PURE__*/ R(Array.prototype.push), ro = /*#__PURE__*/ R(Array.prototype.splice), ie = /*#__PURE__*/ R(String.prototype.toLowerCase), we = /*#__PURE__*/ R(String.prototype.toString), Vi = /*#__PURE__*/ R(String.prototype.match), vt = /*#__PURE__*/ R(String.prototype.replace), oo = /*#__PURE__*/ R(String.prototype.indexOf), so = /*#__PURE__*/ R(String.prototype.trim), $ = /*#__PURE__*/ R(Object.prototype.hasOwnProperty), q = /*#__PURE__*/ R(RegExp.prototype.test), wt = /*#__PURE__*/ ao(TypeError);
function R(e) {
    return function(t) {
        t instanceof RegExp && (t.lastIndex = 0);
        for(var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)s[l - 1] = arguments[l];
        return Re(e, t, s);
    };
}
m$1(R, "unapply");
function ao(e) {
    return function() {
        for(var t = arguments.length, i = new Array(t), s = 0; s < t; s++)i[s] = arguments[s];
        return We(e, i);
    };
}
m$1(ao, "unconstruct");
function p(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ie;
    $i && $i(e, null);
    let s = t.length;
    for(; s--;){
        let l = t[s];
        if (typeof l == "string") {
            let d = /*#__PURE__*/ i(l);
            d !== l && (Qr(t) || (t[s] = d), l = d);
        }
        e[l] = true;
    }
    return e;
}
m$1(p, "addToSet");
function lo(e) {
    for(let t = 0; t < e.length; t++)$(e, t) || (e[t] = null);
    return e;
}
m$1(lo, "cleanArray");
function lt(e) {
    let t = /*#__PURE__*/ er(null);
    for (let [i, s] of tr(e))$(e, i) && (Array.isArray(s) ? t[i] = /*#__PURE__*/ lo(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = /*#__PURE__*/ lt(s) : t[i] = s);
    return t;
}
m$1(lt, "clone");
function Dt(e, t) {
    for(; e !== null;){
        let s = /*#__PURE__*/ eo(e, t);
        if (s) {
            if (s.get) return R(s.get);
            if (typeof s.value == "function") return R(s.value);
        }
        e = /*#__PURE__*/ to(e);
    }
    function i() {
        return null;
    }
    return m$1(i, "fallbackValue"), i;
}
m$1(Dt, "lookupGetter");
var Yi = /*#__PURE__*/ z([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
]), De = /*#__PURE__*/ z([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern"
]), Ie = /*#__PURE__*/ z([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence"
]), no = /*#__PURE__*/ z([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use"
]), qe = /*#__PURE__*/ z([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts"
]), ho = /*#__PURE__*/ z([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none"
]), Xi = /*#__PURE__*/ z([
    "#text"
]), Ki = /*#__PURE__*/ z([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns",
    "slot"
]), ze = /*#__PURE__*/ z([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan"
]), Zi = /*#__PURE__*/ z([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns"
]), ee = /*#__PURE__*/ z([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink"
]), co = /*#__PURE__*/ N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), go = /*#__PURE__*/ N(/<%[\w\W]*|[\w\W]*%>/gm), uo = /*#__PURE__*/ N(/\$\{[\w\W]*/gm), mo = /*#__PURE__*/ N(/^data-[\-\w.\u00B7-\uFFFF]+$/), Co = /*#__PURE__*/ N(/^aria-[\-\w]+$/), ir = /*#__PURE__*/ N(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), po = /*#__PURE__*/ N(/^(?:\w+script|data):/i), fo = /*#__PURE__*/ N(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), rr = /*#__PURE__*/ N(/^html$/i), xo = /*#__PURE__*/ N(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ARIA_ATTR: Co,
    ATTR_WHITESPACE: fo,
    CUSTOM_ELEMENT: xo,
    DATA_ATTR: mo,
    DOCTYPE_NAME: rr,
    ERB_EXPR: go,
    IS_ALLOWED_URI: ir,
    IS_SCRIPT_OR_DATA: po,
    MUSTACHE_EXPR: co,
    TMPLIT_EXPR: uo
}), It = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
}, yo = /*#__PURE__*/ m$1(function() {
    return typeof window > "u" ? null : window;
}, "getGlobal"), bo = /*#__PURE__*/ m$1(function(t, i) {
    if (typeof t != "object" || typeof t.createPolicy != "function") return null;
    let s = null, l = "data-tt-policy-suffix";
    i && i.hasAttribute(l) && (s = /*#__PURE__*/ i.getAttribute(l));
    let d = "dompurify" + (s ? "#" + s : "");
    try {
        return t.createPolicy(d, {
            createHTML (f) {
                return f;
            },
            createScriptURL (f) {
                return f;
            }
        });
    } catch  {
        return console.warn("TrustedTypes policy " + d + " could not be created."), null;
    }
}, "_createTrustedTypesPolicy"), Qi = /*#__PURE__*/ m$1(function() {
    return {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: []
    };
}, "_createHooksMap");
function or() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yo(), t = /*#__PURE__*/ m$1((C)=>or(C), "DOMPurify");
    if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== It.document || !e.Element) return t.isSupported = false, t;
    let { document: i } = e, s = i, l = s.currentScript, { DocumentFragment: d, HTMLTemplateElement: f, Node: x, Element: _, NodeFilter: E, NamedNodeMap: H = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: yt, DOMParser: nt, trustedTypes: J } = e, ht = _.prototype, ct = /*#__PURE__*/ Dt(ht, "cloneNode"), bt = /*#__PURE__*/ Dt(ht, "remove"), ae = /*#__PURE__*/ Dt(ht, "nextSibling"), le = /*#__PURE__*/ Dt(ht, "childNodes"), dt = /*#__PURE__*/ Dt(ht, "parentNode");
    if (typeof f == "function") {
        let C = /*#__PURE__*/ i.createElement("template");
        C.content && C.content.ownerDocument && (i = C.content.ownerDocument);
    }
    let A, Tt = "", { implementation: ne, createNodeIterator: mr, createDocumentFragment: Cr, getElementsByTagName: pr } = i, { importNode: fr } = s, D = /*#__PURE__*/ Qi();
    t.isSupported = typeof tr == "function" && typeof dt == "function" && ne && ne.createHTMLDocument !== void 0;
    let { MUSTACHE_EXPR: he, ERB_EXPR: ce, TMPLIT_EXPR: de, DATA_ATTR: xr, ARIA_ATTR: yr, IS_SCRIPT_OR_DATA: br, ATTR_WHITESPACE: Ve, CUSTOM_ELEMENT: Tr } = Ji, { IS_ALLOWED_URI: Ye } = Ji, F = null, Xe = /*#__PURE__*/ p({}, [
        ...Yi,
        ...De,
        ...Ie,
        ...qe,
        ...Xi
    ]), M = null, Ke = /*#__PURE__*/ p({}, [
        ...Ki,
        ...ze,
        ...Zi,
        ...ee
    ]), b = /*#__PURE__*/ Object.seal(/*#__PURE__*/ er(null, {
        tagNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        attributeNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        allowCustomizedBuiltInElements: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: false
        }
    })), kt = null, ge = null, Ze = true, ue = true, Je = false, Qe = true, gt = false, me = true, ot = false, Ce = false, pe = false, ut = false, zt = false, Rt = false, ti = true, ei = false, kr = "user-content-", fe = true, Bt = false, mt = {}, Ct = null, ii = /*#__PURE__*/ p({}, [
        "annotation-xml",
        "audio",
        "colgroup",
        "desc",
        "foreignobject",
        "head",
        "iframe",
        "math",
        "mi",
        "mn",
        "mo",
        "ms",
        "mtext",
        "noembed",
        "noframes",
        "noscript",
        "plaintext",
        "script",
        "style",
        "svg",
        "template",
        "thead",
        "title",
        "video",
        "xmp"
    ]), ri = null, oi = /*#__PURE__*/ p({}, [
        "audio",
        "video",
        "img",
        "source",
        "image",
        "track"
    ]), xe = null, si = /*#__PURE__*/ p({}, [
        "alt",
        "class",
        "for",
        "id",
        "label",
        "name",
        "pattern",
        "placeholder",
        "role",
        "summary",
        "title",
        "value",
        "style",
        "xmlns"
    ]), Wt = "http://www.w3.org/1998/Math/MathML", Pt = "http://www.w3.org/2000/svg", Y = "http://www.w3.org/1999/xhtml", pt = Y, ye = false, be = null, Br = /*#__PURE__*/ p({}, [
        Wt,
        Pt,
        Y
    ], we), Nt = /*#__PURE__*/ p({}, [
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext"
    ]), Ht = /*#__PURE__*/ p({}, [
        "annotation-xml"
    ]), Sr = /*#__PURE__*/ p({}, [
        "title",
        "style",
        "font",
        "a",
        "script"
    ]), St = null, Fr = [
        "application/xhtml+xml",
        "text/html"
    ], Lr = "text/html", L = null, ft = null, _r = /*#__PURE__*/ i.createElement("form"), ai = /*#__PURE__*/ m$1(function(o) {
        return o instanceof RegExp || o instanceof Function;
    }, "isRegexOrFunction"), Te = /*#__PURE__*/ m$1(function() {
        let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!(ft && ft === o)) {
            if ((!o || typeof o != "object") && (o = {}), o = /*#__PURE__*/ lt(o), St = Fr.indexOf(o.PARSER_MEDIA_TYPE) === -1 ? Lr : o.PARSER_MEDIA_TYPE, L = St === "application/xhtml+xml" ? we : ie, F = $(o, "ALLOWED_TAGS") ? p({}, o.ALLOWED_TAGS, L) : Xe, M = $(o, "ALLOWED_ATTR") ? p({}, o.ALLOWED_ATTR, L) : Ke, be = $(o, "ALLOWED_NAMESPACES") ? p({}, o.ALLOWED_NAMESPACES, we) : Br, xe = $(o, "ADD_URI_SAFE_ATTR") ? p(/*#__PURE__*/ lt(si), o.ADD_URI_SAFE_ATTR, L) : si, ri = $(o, "ADD_DATA_URI_TAGS") ? p(/*#__PURE__*/ lt(oi), o.ADD_DATA_URI_TAGS, L) : oi, Ct = $(o, "FORBID_CONTENTS") ? p({}, o.FORBID_CONTENTS, L) : ii, kt = $(o, "FORBID_TAGS") ? p({}, o.FORBID_TAGS, L) : {}, ge = $(o, "FORBID_ATTR") ? p({}, o.FORBID_ATTR, L) : {}, mt = $(o, "USE_PROFILES") ? o.USE_PROFILES : false, Ze = o.ALLOW_ARIA_ATTR !== false, ue = o.ALLOW_DATA_ATTR !== false, Je = o.ALLOW_UNKNOWN_PROTOCOLS || false, Qe = o.ALLOW_SELF_CLOSE_IN_ATTR !== false, gt = o.SAFE_FOR_TEMPLATES || false, me = o.SAFE_FOR_XML !== false, ot = o.WHOLE_DOCUMENT || false, ut = o.RETURN_DOM || false, zt = o.RETURN_DOM_FRAGMENT || false, Rt = o.RETURN_TRUSTED_TYPE || false, pe = o.FORCE_BODY || false, ti = o.SANITIZE_DOM !== false, ei = o.SANITIZE_NAMED_PROPS || false, fe = o.KEEP_CONTENT !== false, Bt = o.IN_PLACE || false, Ye = o.ALLOWED_URI_REGEXP || ir, pt = o.NAMESPACE || Y, Nt = o.MATHML_TEXT_INTEGRATION_POINTS || Nt, Ht = o.HTML_INTEGRATION_POINTS || Ht, b = o.CUSTOM_ELEMENT_HANDLING || {}, o.CUSTOM_ELEMENT_HANDLING && ai(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (b.tagNameCheck = o.CUSTOM_ELEMENT_HANDLING.tagNameCheck), o.CUSTOM_ELEMENT_HANDLING && ai(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (b.attributeNameCheck = o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), o.CUSTOM_ELEMENT_HANDLING && typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (b.allowCustomizedBuiltInElements = o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), gt && (ue = false), zt && (ut = true), mt && (F = /*#__PURE__*/ p({}, Xi), M = [], mt.html === true && (p(F, Yi), p(M, Ki)), mt.svg === true && (p(F, De), p(M, ze), p(M, ee)), mt.svgFilters === true && (p(F, Ie), p(M, ze), p(M, ee)), mt.mathMl === true && (p(F, qe), p(M, Zi), p(M, ee))), o.ADD_TAGS && (F === Xe && (F = /*#__PURE__*/ lt(F)), p(F, o.ADD_TAGS, L)), o.ADD_ATTR && (M === Ke && (M = /*#__PURE__*/ lt(M)), p(M, o.ADD_ATTR, L)), o.ADD_URI_SAFE_ATTR && p(xe, o.ADD_URI_SAFE_ATTR, L), o.FORBID_CONTENTS && (Ct === ii && (Ct = /*#__PURE__*/ lt(Ct)), p(Ct, o.FORBID_CONTENTS, L)), fe && (F["#text"] = true), ot && p(F, [
                "html",
                "head",
                "body"
            ]), F.table && (p(F, [
                "tbody"
            ]), delete kt.tbody), o.TRUSTED_TYPES_POLICY) {
                if (typeof o.TRUSTED_TYPES_POLICY.createHTML != "function") throw wt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                if (typeof o.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw wt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                A = o.TRUSTED_TYPES_POLICY, Tt = /*#__PURE__*/ A.createHTML("");
            } else A === void 0 && (A = /*#__PURE__*/ bo(J, l)), A !== null && typeof Tt == "string" && (Tt = /*#__PURE__*/ A.createHTML(""));
            z && z(o), ft = o;
        }
    }, "_parseConfig"), li = /*#__PURE__*/ p({}, [
        ...De,
        ...Ie,
        ...no
    ]), ni = /*#__PURE__*/ p({}, [
        ...qe,
        ...ho
    ]), Er = /*#__PURE__*/ m$1(function(o) {
        let n = /*#__PURE__*/ dt(o);
        (!n || !n.tagName) && (n = {
            namespaceURI: pt,
            tagName: "template"
        });
        let u = /*#__PURE__*/ ie(o.tagName), y = /*#__PURE__*/ ie(n.tagName);
        return be[o.namespaceURI] ? o.namespaceURI === Pt ? n.namespaceURI === Y ? u === "svg" : n.namespaceURI === Wt ? u === "svg" && (y === "annotation-xml" || Nt[y]) : !!li[u] : o.namespaceURI === Wt ? n.namespaceURI === Y ? u === "math" : n.namespaceURI === Pt ? u === "math" && Ht[y] : !!ni[u] : o.namespaceURI === Y ? n.namespaceURI === Pt && !Ht[y] || n.namespaceURI === Wt && !Nt[y] ? false : !ni[u] && (Sr[u] || !li[u]) : !!(St === "application/xhtml+xml" && be[o.namespaceURI]) : false;
    }, "_checkValidNamespace"), j = /*#__PURE__*/ m$1(function(o) {
        Ot(t.removed, {
            element: o
        });
        try {
            dt(o).removeChild(o);
        } catch  {
            bt(o);
        }
    }, "_forceRemove"), Ut = /*#__PURE__*/ m$1(function(o, n) {
        try {
            Ot(t.removed, {
                attribute: /*#__PURE__*/ n.getAttributeNode(o),
                from: n
            });
        } catch  {
            Ot(t.removed, {
                attribute: null,
                from: n
            });
        }
        if (n.removeAttribute(o), o === "is") if (ut || zt) try {
            j(n);
        } catch  {}
        else try {
            n.setAttribute(o, "");
        } catch  {}
    }, "_removeAttribute"), hi = /*#__PURE__*/ m$1(function(o) {
        let n = null, u = null;
        if (pe) o = "<remove></remove>" + o;
        else {
            let O = /*#__PURE__*/ Vi(o, /^[\r\n\t ]+/);
            u = O && O[0];
        }
        St === "application/xhtml+xml" && pt === Y && (o = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + o + "</body></html>");
        let y = A ? A.createHTML(o) : o;
        if (pt === Y) try {
            n = /*#__PURE__*/ new nt().parseFromString(y, St);
        } catch  {}
        if (!n || !n.documentElement) {
            n = /*#__PURE__*/ ne.createDocument(pt, "template", null);
            try {
                n.documentElement.innerHTML = ye ? Tt : y;
            } catch  {}
        }
        let w = n.body || n.documentElement;
        return o && u && w.insertBefore(/*#__PURE__*/ i.createTextNode(u), w.childNodes[0] || null), pt === Y ? pr.call(n, ot ? "html" : "body")[0] : ot ? n.documentElement : w;
    }, "_initDocument"), ci = /*#__PURE__*/ m$1(function(o) {
        return mr.call(o.ownerDocument || o, o, E.SHOW_ELEMENT | E.SHOW_COMMENT | E.SHOW_TEXT | E.SHOW_PROCESSING_INSTRUCTION | E.SHOW_CDATA_SECTION, null);
    }, "_createNodeIterator"), ke = /*#__PURE__*/ m$1(function(o) {
        return o instanceof yt && (typeof o.nodeName != "string" || typeof o.textContent != "string" || typeof o.removeChild != "function" || !(o.attributes instanceof H) || typeof o.removeAttribute != "function" || typeof o.setAttribute != "function" || typeof o.namespaceURI != "string" || typeof o.insertBefore != "function" || typeof o.hasChildNodes != "function");
    }, "_isClobbered"), di = /*#__PURE__*/ m$1(function(o) {
        return typeof x == "function" && o instanceof x;
    }, "_isNode");
    function X(C, o, n) {
        te(C, (u)=>{
            u.call(t, o, n, ft);
        });
    }
    m$1(X, "_executeHooks");
    let gi = /*#__PURE__*/ m$1(function(o) {
        let n = null;
        if (X(D.beforeSanitizeElements, o, null), ke(o)) return j(o), true;
        let u = /*#__PURE__*/ L(o.nodeName);
        if (X(D.uponSanitizeElement, o, {
            tagName: u,
            allowedTags: F
        }), o.hasChildNodes() && !di(o.firstElementChild) && q(/<[/\w!]/g, o.innerHTML) && q(/<[/\w!]/g, o.textContent) || o.nodeType === It.progressingInstruction || me && o.nodeType === It.comment && q(/<[/\w]/g, o.data)) return j(o), true;
        if (!F[u] || kt[u]) {
            if (!kt[u] && mi(u) && (b.tagNameCheck instanceof RegExp && q(b.tagNameCheck, u) || b.tagNameCheck instanceof Function && b.tagNameCheck(u))) return false;
            if (fe && !Ct[u]) {
                let y = dt(o) || o.parentNode, w = le(o) || o.childNodes;
                if (w && y) {
                    let O = w.length;
                    for(let W = O - 1; W >= 0; --W){
                        let V = /*#__PURE__*/ ct(w[W], true);
                        V.__removalCount = (o.__removalCount || 0) + 1, y.insertBefore(V, /*#__PURE__*/ ae(o));
                    }
                }
            }
            return j(o), true;
        }
        return o instanceof _ && !Er(o) || (u === "noscript" || u === "noembed" || u === "noframes") && q(/<\/no(script|embed|frames)/i, o.innerHTML) ? (j(o), true) : (gt && o.nodeType === It.text && (n = o.textContent, te([
            he,
            ce,
            de
        ], (y)=>{
            n = /*#__PURE__*/ vt(n, y, " ");
        }), o.textContent !== n && (Ot(t.removed, {
            element: /*#__PURE__*/ o.cloneNode()
        }), o.textContent = n)), X(D.afterSanitizeElements, o, null), false);
    }, "_sanitizeElements"), ui = /*#__PURE__*/ m$1(function(o, n, u) {
        if (ti && (n === "id" || n === "name") && (u in i || u in _r)) return false;
        if (!(ue && !ge[n] && q(xr, n))) {
            if (!(Ze && q(yr, n))) {
                if (!M[n] || ge[n]) {
                    if (!(mi(o) && (b.tagNameCheck instanceof RegExp && q(b.tagNameCheck, o) || b.tagNameCheck instanceof Function && b.tagNameCheck(o)) && (b.attributeNameCheck instanceof RegExp && q(b.attributeNameCheck, n) || b.attributeNameCheck instanceof Function && b.attributeNameCheck(n)) || n === "is" && b.allowCustomizedBuiltInElements && (b.tagNameCheck instanceof RegExp && q(b.tagNameCheck, u) || b.tagNameCheck instanceof Function && b.tagNameCheck(u)))) return false;
                } else if (!xe[n]) {
                    if (!q(Ye, /*#__PURE__*/ vt(u, Ve, ""))) {
                        if (!((n === "src" || n === "xlink:href" || n === "href") && o !== "script" && oo(u, "data:") === 0 && ri[o])) {
                            if (!(Je && !q(br, /*#__PURE__*/ vt(u, Ve, "")))) {
                                if (u) return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }, "_isValidAttribute"), mi = /*#__PURE__*/ m$1(function(o) {
        return o !== "annotation-xml" && Vi(o, Tr);
    }, "_isBasicCustomElement"), Ci = /*#__PURE__*/ m$1(function(o) {
        X(D.beforeSanitizeAttributes, o, null);
        let { attributes: n } = o;
        if (!n || ke(o)) return;
        let u = {
            attrName: "",
            attrValue: "",
            keepAttr: true,
            allowedAttributes: M,
            forceKeepAttr: void 0
        }, y = n.length;
        for(; y--;){
            let w = n[y], { name: O, namespaceURI: W, value: V } = w, Ft = /*#__PURE__*/ L(O), I = O === "value" ? V : so(V);
            if (u.attrName = Ft, u.attrValue = I, u.keepAttr = true, u.forceKeepAttr = void 0, X(D.uponSanitizeAttribute, o, u), I = u.attrValue, ei && (Ft === "id" || Ft === "name") && (Ut(O, o), I = kr + I), me && q(/((--!?|])>)|<\/(style|title)/i, I)) {
                Ut(O, o);
                continue;
            }
            if (u.forceKeepAttr || (Ut(O, o), !u.keepAttr)) continue;
            if (!Qe && q(/\/>/i, I)) {
                Ut(O, o);
                continue;
            }
            gt && te([
                he,
                ce,
                de
            ], (fi)=>{
                I = /*#__PURE__*/ vt(I, fi, " ");
            });
            let pi = /*#__PURE__*/ L(o.nodeName);
            if (ui(pi, Ft, I)) {
                if (A && typeof J == "object" && typeof J.getAttributeType == "function" && !W) switch(J.getAttributeType(pi, Ft)){
                    case "TrustedHTML":
                        {
                            I = /*#__PURE__*/ A.createHTML(I);
                            break;
                        }
                    case "TrustedScriptURL":
                        {
                            I = /*#__PURE__*/ A.createScriptURL(I);
                            break;
                        }
                }
                try {
                    W ? o.setAttributeNS(W, O, I) : o.setAttribute(O, I), ke(o) ? j(o) : ji(t.removed);
                } catch  {}
            }
        }
        X(D.afterSanitizeAttributes, o, null);
    }, "_sanitizeAttributes"), Ar = /*#__PURE__*/ m$1(function C(o) {
        let n = null, u = /*#__PURE__*/ ci(o);
        for(X(D.beforeSanitizeShadowDOM, o, null); n = /*#__PURE__*/ u.nextNode();)X(D.uponSanitizeShadowNode, n, null), gi(n), Ci(n), n.content instanceof d && C(n.content);
        X(D.afterSanitizeShadowDOM, o, null);
    }, "_sanitizeShadowDOM");
    return t.sanitize = function(C) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = null, u = null, y = null, w = null;
        if (ye = !C, ye && (C = "<!-->"), typeof C != "string" && !di(C)) if (typeof C.toString == "function") {
            if (C = /*#__PURE__*/ C.toString(), typeof C != "string") throw wt("dirty is not a string, aborting");
        } else throw wt("toString is not a function");
        if (!t.isSupported) return C;
        if (Ce || Te(o), t.removed = [], typeof C == "string" && (Bt = false), Bt) {
            if (C.nodeName) {
                let V = /*#__PURE__*/ L(C.nodeName);
                if (!F[V] || kt[V]) throw wt("root node is forbidden and cannot be sanitized in-place");
            }
        } else if (C instanceof x) n = /*#__PURE__*/ hi("<!---->"), u = /*#__PURE__*/ n.ownerDocument.importNode(C, true), u.nodeType === It.element && u.nodeName === "BODY" || u.nodeName === "HTML" ? n = u : n.appendChild(u);
        else {
            if (!ut && !gt && !ot && C.indexOf("<") === -1) return A && Rt ? A.createHTML(C) : C;
            if (n = /*#__PURE__*/ hi(C), !n) return ut ? null : Rt ? Tt : "";
        }
        n && pe && j(n.firstChild);
        let O = /*#__PURE__*/ ci(Bt ? C : n);
        for(; y = /*#__PURE__*/ O.nextNode();)gi(y), Ci(y), y.content instanceof d && Ar(y.content);
        if (Bt) return C;
        if (ut) {
            if (zt) for(w = /*#__PURE__*/ Cr.call(n.ownerDocument); n.firstChild;)w.appendChild(n.firstChild);
            else w = n;
            return (M.shadowroot || M.shadowrootmode) && (w = /*#__PURE__*/ fr.call(s, w, true)), w;
        }
        let W = ot ? n.outerHTML : n.innerHTML;
        return ot && F["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && q(rr, n.ownerDocument.doctype.name) && (W = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + W), gt && te([
            he,
            ce,
            de
        ], (V)=>{
            W = /*#__PURE__*/ vt(W, V, " ");
        }), A && Rt ? A.createHTML(W) : W;
    }, t.setConfig = function() {
        let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Te(C), Ce = true;
    }, t.clearConfig = function() {
        ft = null, Ce = false;
    }, t.isValidAttribute = function(C, o, n) {
        ft || Te({});
        let u = /*#__PURE__*/ L(C), y = /*#__PURE__*/ L(o);
        return ui(u, y, n);
    }, t.addHook = function(C, o) {
        typeof o == "function" && Ot(D[C], o);
    }, t.removeHook = function(C, o) {
        if (o !== void 0) {
            let n = /*#__PURE__*/ io(D[C], o);
            return n === -1 ? void 0 : ro(D[C], n, 1)[0];
        }
        return ji(D[C]);
    }, t.removeHooks = function(C) {
        D[C] = [];
    }, t.removeAllHooks = function() {
        D = /*#__PURE__*/ Qi();
    }, t;
}
m$1(or, "createDOMPurify");
var xt = /*#__PURE__*/ or();
var qt = /<br\s*\/?>/gi, To = /*#__PURE__*/ m$1((e)=>e ? hr(e).replace(/\\n/g, "#br#").split("#br#") : [
        ""
    ], "getRows"), ko = /*#__PURE__*/ (()=>{
    let e = false;
    return ()=>{
        e || (Bo(), e = true);
    };
})();
function Bo() {
    let e = "data-temp-href-target";
    xt.addHook("beforeSanitizeAttributes", (t)=>{
        t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
    }), xt.addHook("afterSanitizeAttributes", (t)=>{
        t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
    });
}
m$1(Bo, "setupDompurifyHooks");
var nr = /*#__PURE__*/ m$1((e)=>(ko(), xt.sanitize(e)), "removeScript"), sr = /*#__PURE__*/ m$1((e, t)=>{
    if (t.flowchart?.htmlLabels !== false) {
        let i = t.securityLevel;
        i === "antiscript" || i === "strict" ? e = /*#__PURE__*/ nr(e) : i !== "loose" && (e = /*#__PURE__*/ hr(e), e = /*#__PURE__*/ e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = /*#__PURE__*/ e.replace(/=/g, "&equals;"), e = /*#__PURE__*/ _o(e));
    }
    return e;
}, "sanitizeMore"), rt = /*#__PURE__*/ m$1((e, t)=>e && (t.dompurifyConfig ? e = /*#__PURE__*/ xt.sanitize(/*#__PURE__*/ sr(e, t), t.dompurifyConfig).toString() : e = /*#__PURE__*/ xt.sanitize(/*#__PURE__*/ sr(e, t), {
        FORBID_TAGS: [
            "style"
        ]
    }).toString(), e), "sanitizeText"), So = /*#__PURE__*/ m$1((e, t)=>typeof e == "string" ? rt(e, t) : e.flat().map((i)=>rt(i, t)), "sanitizeTextOrArray"), Fo = /*#__PURE__*/ m$1((e)=>qt.test(e), "hasBreaks"), Lo = /*#__PURE__*/ m$1((e)=>e.split(qt), "splitBreaks"), _o = /*#__PURE__*/ m$1((e)=>e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), hr = /*#__PURE__*/ m$1((e)=>e.replace(qt, "#br#"), "breakToPlaceholder"), Eo = /*#__PURE__*/ m$1((e)=>{
    let t = "";
    return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = /*#__PURE__*/ CSS.escape(t)), t;
}, "getUrl"), Ao = /*#__PURE__*/ m$1((e)=>!(e === false || [
        "false",
        "null",
        "0"
    ].includes(/*#__PURE__*/ String(e).trim().toLowerCase())), "evaluate"), Mo = /*#__PURE__*/ m$1(function(...e) {
    let t = /*#__PURE__*/ e.filter((i)=>!isNaN(i));
    return Math.max(...t);
}, "getMax"), Oo = /*#__PURE__*/ m$1(function(...e) {
    let t = /*#__PURE__*/ e.filter((i)=>!isNaN(i));
    return Math.min(...t);
}, "getMin"), an = /*#__PURE__*/ m$1(function(e) {
    let t = /*#__PURE__*/ e.split(/(,)/), i = [];
    for(let s = 0; s < t.length; s++){
        let l = t[s];
        if (l === "," && s > 0 && s + 1 < t.length) {
            let d = t[s - 1], f = t[s + 1];
            vo(d, f) && (l = d + "," + f, s++, i.pop());
        }
        i.push(/*#__PURE__*/ wo(l));
    }
    return i.join("");
}, "parseGenericTypes"), Pe = /*#__PURE__*/ m$1((e, t)=>Math.max(0, e.split(t).length - 1), "countOccurrence"), vo = /*#__PURE__*/ m$1((e, t)=>{
    let i = /*#__PURE__*/ Pe(e, "~"), s = /*#__PURE__*/ Pe(t, "~");
    return i === 1 && s === 1;
}, "shouldCombineSets"), wo = /*#__PURE__*/ m$1((e)=>{
    let t = /*#__PURE__*/ Pe(e, "~"), i = false;
    if (t <= 1) return e;
    t % 2 !== 0 && e.startsWith("~") && (e = /*#__PURE__*/ e.substring(1), i = true);
    let s = [
        ...e
    ], l = /*#__PURE__*/ s.indexOf("~"), d = /*#__PURE__*/ s.lastIndexOf("~");
    for(; l !== -1 && d !== -1 && l !== d;)s[l] = "<", s[d] = ">", l = /*#__PURE__*/ s.indexOf("~"), d = /*#__PURE__*/ s.lastIndexOf("~");
    return i && s.unshift("~"), s.join("");
}, "processSet"), ar = /*#__PURE__*/ m$1(()=>window.MathMLElement !== void 0, "isMathMLSupported"), re = /\$\$(.*)\$\$/g, lr = /*#__PURE__*/ m$1((e)=>(e.match(re)?.length ?? 0) > 0, "hasKatex"), ln = /*#__PURE__*/ m$1(async (e, t)=>{
    let i = /*#__PURE__*/ document.createElement("div");
    i.innerHTML = await Io(e, t), i.id = "katex-temp", i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", i);
    let l = {
        width: i.clientWidth,
        height: i.clientHeight
    };
    return i.remove(), l;
}, "calculateMathMLDimensions"), Do = /*#__PURE__*/ m$1(async (e, t)=>{
    if (!lr(e)) return e;
    if (!(ar() || t.legacyMathML || t.forceLegacyMathML)) return e.replace(re, "MathML is unsupported in this environment.");
    {
        let { default: i } = await __vitePreload(async ()=>{
            const { default: i } = await import('./vendor-min-mermaid~katex-RV2QPRKB.DmDZHRCw.chunk.js');
            return {
                default: i
            };
        }, true               ? __vite__mapDeps([0,1]) : void 0), s = t.forceLegacyMathML || !ar() && t.legacyMathML ? "htmlAndMathml" : "mathml";
        return e.split(qt).map((l)=>lr(l) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${l}</div>` : `<div>${l}</div>`).join("").replace(re, (l, d)=>i.renderToString(d, {
                throwOnError: true,
                displayMode: true,
                output: s
            }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
    }
}, "renderKatexUnsanitized"), Io = /*#__PURE__*/ m$1(async (e, t)=>rt(await Do(e, t), t), "renderKatexSanitized"), nn = {
    getRows: To,
    sanitizeText: rt,
    sanitizeTextOrArray: So,
    hasBreaks: Fo,
    splitBreaks: Lo,
    lineBreakRegex: qt,
    removeScript: nr,
    getUrl: Eo,
    evaluate: Ao,
    getMax: Mo,
    getMin: Oo
};
var qo = /*#__PURE__*/ m$1(function(e, t) {
    for (let i of t)e.attr(i[0], i[1]);
}, "d3Attrs"), zo = /*#__PURE__*/ m$1(function(e, t, i) {
    let s = new Map;
    return i ? (s.set("width", "100%"), s.set("style", `max-width: ${t}px;`)) : (s.set("height", e), s.set("width", t)), s;
}, "calculateSvgSizeAttrs"), Ro = /*#__PURE__*/ m$1(function(e, t, i, s) {
    let l = /*#__PURE__*/ zo(t, i, s);
    qo(e, l);
}, "configureSvgSize"), cr = /*#__PURE__*/ m$1(function(e, t, i, s) {
    let l = /*#__PURE__*/ t.node().getBBox(), d = l.width, f = l.height;
    pt.info(`SVG bounds: ${d}x${f}`, l);
    let x = 0, _ = 0;
    pt.info(`Graph bounds: ${x}x${_}`, e), x = d + i * 2, _ = f + i * 2, pt.info(`Calculated bounds: ${x}x${_}`), Ro(t, _, x, s);
    let E = `${l.x - i} ${l.y - i} ${l.width + 2 * i} ${l.height + 2 * i}`;
    t.attr("viewBox", E);
}, "setupGraphViewbox");
var oe = {}, Wo = /*#__PURE__*/ m$1((e, t, i)=>{
    let s = "";
    return e in oe && oe[e] ? s = /*#__PURE__*/ oe[e](i) : pt.warn(`No theme found for ${e}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }
   & p {
    margin: 0
   }

  ${s}

  ${t}
`;
}, "getStyles"), dr = /*#__PURE__*/ m$1((e, t)=>{
    t !== void 0 && (oe[e] = t);
}, "addStylesForDiagram"), Cn = Wo;
var $e = {};
o($e, {
    clear: ()=>Po,
    getAccDescription: ()=>Go,
    getAccTitle: ()=>Ho,
    getDiagramTitle: ()=>jo,
    setAccDescription: ()=>Uo,
    setAccTitle: ()=>No,
    setDiagramTitle: ()=>$o
});
var Ne = "", He = "", Ue = "", Ge = /*#__PURE__*/ m$1((e)=>rt(e, /*#__PURE__*/ Mt()), "sanitizeText"), Po = /*#__PURE__*/ m$1(()=>{
    Ne = "", Ue = "", He = "";
}, "clear"), No = /*#__PURE__*/ m$1((e)=>{
    Ne = /*#__PURE__*/ Ge(e).replace(/^\s+/g, "");
}, "setAccTitle"), Ho = /*#__PURE__*/ m$1(()=>Ne, "getAccTitle"), Uo = /*#__PURE__*/ m$1((e)=>{
    Ue = /*#__PURE__*/ Ge(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), Go = /*#__PURE__*/ m$1(()=>Ue, "getAccDescription"), $o = /*#__PURE__*/ m$1((e)=>{
    He = /*#__PURE__*/ Ge(e);
}, "setDiagramTitle"), jo = /*#__PURE__*/ m$1(()=>He, "getDiagramTitle");
var gr = pt, Vo = Wh, ur = Mt, _n = Hi, En = At;
var Yo = /*#__PURE__*/ m$1((e)=>rt(e, /*#__PURE__*/ ur()), "sanitizeText"), Xo = cr, Ko = /*#__PURE__*/ m$1(()=>$e, "getCommonDb"), se = {}, An = /*#__PURE__*/ m$1((e, t, i)=>{
    se[e] && gr.warn(`Diagram with id ${e} already registered. Overwriting.`), se[e] = t, i && Be(e, i), dr(e, t.styles), t.injectUtils?.(gr, Vo, ur, Yo, Xo, Ko(), ()=>{});
}, "registerDiagram"), Mn = /*#__PURE__*/ m$1((e)=>{
    if (e in se) return se[e];
    throw new je(e);
}, "getDiagram"), je = class extends Error {
    static{
        m$1(this, "DiagramNotFoundError");
    }
    constructor(t){
        super(`Diagram ${t} not found.`);
    }
};
export { $o as $, Ao as A, Kr as B, xt as C, Di as D, Eo as E, ss as F, Go as G, Ho as H, Io as I, Jl as J, Kl as K, Gt as L, Mt as M, No as N, Zl as O, Po as P, Cn as Q, Ro as R, yi as S, Ql as T, Uo as U, ln as V, Wr as W, Xo as X, Yo as Y, Z, _n as _, Pi as a, $e as a0, an as b, cr as c, bi as d, Zt as e, rs as f, En as g, U as h, c as i, jo as j, g as k, lr as l, At as m, nn as n, os as o, Xl as p, qt as q, rt as r, Hi as s, An as t, ur as u, v, $t as w, Mn as x, Yl as y, it as z };
