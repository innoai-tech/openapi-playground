import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
function Ps(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for(var t = 0, a = /*#__PURE__*/ Array(e); t < e; t++)a[t] = r[t];
    return a;
}
m$1(Ps, "_arrayLikeToArray");
function rc(r) {
    if (Array.isArray(r)) return r;
}
m$1(rc, "_arrayWithHoles");
function tc(r) {
    if (Array.isArray(r)) return Ps(r);
}
m$1(tc, "_arrayWithoutHoles");
function gt(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
}
m$1(gt, "_classCallCheck");
function ac(r, e) {
    for(var t = 0; t < e.length; t++){
        var a = e[t];
        a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(r, /*#__PURE__*/ ev(a.key), a);
    }
}
m$1(ac, "_defineProperties");
function pt(r, e, t) {
    return e && ac(r.prototype, e), Object.defineProperty(r, "prototype", {
        writable: false
    }), r;
}
m$1(pt, "_createClass");
function Dr(r, e) {
    var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
        if (Array.isArray(r) || (t = /*#__PURE__*/ Ys(r)) || e) {
            t && (r = t);
            var a = 0, n = /*#__PURE__*/ m$1(function() {}, "F");
            return {
                s: n,
                n: /*#__PURE__*/ m$1(function() {
                    return a >= r.length ? {
                        done: true
                    } : {
                        done: false,
                        value: r[a++]
                    };
                }, "n"),
                e: /*#__PURE__*/ m$1(function(l) {
                    throw l;
                }, "e"),
                f: n
            };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var i, s = true, o = false;
    return {
        s: /*#__PURE__*/ m$1(function() {
            t = /*#__PURE__*/ t.call(r);
        }, "s"),
        n: /*#__PURE__*/ m$1(function() {
            var l = /*#__PURE__*/ t.next();
            return s = l.done, l;
        }, "n"),
        e: /*#__PURE__*/ m$1(function(l) {
            o = true, i = l;
        }, "e"),
        f: /*#__PURE__*/ m$1(function() {
            try {
                s || t.return == null || t.return();
            } finally{
                if (o) throw i;
            }
        }, "f")
    };
}
m$1(Dr, "_createForOfIteratorHelper");
function jl(r, e, t) {
    return (e = /*#__PURE__*/ ev(e)) in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
    }) : r[e] = t, r;
}
m$1(jl, "_defineProperty$1");
function nc(r) {
    if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
m$1(nc, "_iterableToArray");
function ic(r, e) {
    var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (t != null) {
        var a, n, i, s, o = [], l = true, u = false;
        try {
            if (i = (t = /*#__PURE__*/ t.call(r)).next, e === 0) {
                if (Object(t) !== t) return;
                l = !1;
            } else for(; !(l = (a = /*#__PURE__*/ i.call(t)).done) && (o.push(a.value), o.length !== e); l = !0);
        } catch (f) {
            u = true, n = f;
        } finally{
            try {
                if (!l && t.return != null && (s = /*#__PURE__*/ t.return(), Object(s) !== s)) return;
            } finally{
                if (u) throw n;
            }
        }
        return o;
    }
}
m$1(ic, "_iterableToArrayLimit");
function sc() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
m$1(sc, "_nonIterableRest");
function oc() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
m$1(oc, "_nonIterableSpread");
function je(r, e) {
    return rc(r) || ic(r, e) || Ys(r, e) || sc();
}
m$1(je, "_slicedToArray");
function bn(r) {
    return tc(r) || nc(r) || Ys(r) || oc();
}
m$1(bn, "_toConsumableArray");
function uc(r, e) {
    if (typeof r != "object" || !r) return r;
    var t = r[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = /*#__PURE__*/ t.call(r, e);
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(r);
}
m$1(uc, "_toPrimitive");
function ev(r) {
    var e = /*#__PURE__*/ uc(r, "string");
    return typeof e == "symbol" ? e : e + "";
}
m$1(ev, "_toPropertyKey");
function nr(r) {
    "@babel/helpers - typeof";
    return nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, nr(r);
}
m$1(nr, "_typeof");
function Ys(r, e) {
    if (r) {
        if (typeof r == "string") return Ps(r, e);
        var t = /*#__PURE__*/ ({}).toString.call(r).slice(8, -1);
        return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ps(r, e) : void 0;
    }
}
m$1(Ys, "_unsupportedIterableToArray");
var tr = typeof window > "u" ? null : window, So = tr ? tr.navigator : null;
tr && tr.document;
var lc = /*#__PURE__*/ nr(""), rv = /*#__PURE__*/ nr({}), vc = /*#__PURE__*/ nr(function() {}), fc = typeof HTMLElement > "u" ? "undefined" : nr(HTMLElement), Ia = /*#__PURE__*/ m$1(function(e) {
    return e && e.instanceString && Ke(e.instanceString) ? e.instanceString() : null;
}, "instanceStr"), pe = /*#__PURE__*/ m$1(function(e) {
    return e != null && nr(e) == lc;
}, "string"), Ke = /*#__PURE__*/ m$1(function(e) {
    return e != null && nr(e) === vc;
}, "fn"), Ge = /*#__PURE__*/ m$1(function(e) {
    return !Br(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, "array"), Ie = /*#__PURE__*/ m$1(function(e) {
    return e != null && nr(e) === rv && !Ge(e) && e.constructor === Object;
}, "plainObject"), cc = /*#__PURE__*/ m$1(function(e) {
    return e != null && nr(e) === rv;
}, "object"), ne = /*#__PURE__*/ m$1(function(e) {
    return e != null && nr(e) === nr(1) && !isNaN(e);
}, "number"), dc = /*#__PURE__*/ m$1(function(e) {
    return ne(e) && Math.floor(e) === e;
}, "integer"), wn = /*#__PURE__*/ m$1(function(e) {
    if (fc !== "undefined") return e != null && e instanceof HTMLElement;
}, "htmlElement"), Br = /*#__PURE__*/ m$1(function(e) {
    return Oa(e) || tv(e);
}, "elementOrCollection"), Oa = /*#__PURE__*/ m$1(function(e) {
    return Ia(e) === "collection" && e._private.single;
}, "element"), tv = /*#__PURE__*/ m$1(function(e) {
    return Ia(e) === "collection" && !e._private.single;
}, "collection"), Zs = /*#__PURE__*/ m$1(function(e) {
    return Ia(e) === "core";
}, "core"), av = /*#__PURE__*/ m$1(function(e) {
    return Ia(e) === "stylesheet";
}, "stylesheet"), hc = /*#__PURE__*/ m$1(function(e) {
    return Ia(e) === "event";
}, "event"), lt = /*#__PURE__*/ m$1(function(e) {
    return e == null ? true : !!(e === "" || e.match(/^\s+$/));
}, "emptyString"), gc = /*#__PURE__*/ m$1(function(e) {
    return typeof HTMLElement > "u" ? false : e instanceof HTMLElement;
}, "domElement"), pc = /*#__PURE__*/ m$1(function(e) {
    return Ie(e) && ne(e.x1) && ne(e.x2) && ne(e.y1) && ne(e.y2);
}, "boundingBox"), yc = /*#__PURE__*/ m$1(function(e) {
    return cc(e) && Ke(e.then);
}, "promise"), mc = /*#__PURE__*/ m$1(function() {
    return So && So.userAgent.match(/msie|trident|edge/i);
}, "ms"), Jt = /*#__PURE__*/ m$1(function(e, t) {
    t || (t = /*#__PURE__*/ m$1(function() {
        if (arguments.length === 1) return arguments[0];
        if (arguments.length === 0) return "undefined";
        for(var i = [], s = 0; s < arguments.length; s++)i.push(arguments[s]);
        return i.join("$");
    }, "keyFn"));
    var a = m$1(function() {
        var i = this, s = arguments, o, l = /*#__PURE__*/ t.apply(i, s), u = a.cache;
        return (o = u[l]) || (o = u[l] = /*#__PURE__*/ e.apply(i, s)), o;
    }, "memoizedFn");
    return a.cache = {}, a;
}, "memoize"), Qs = /*#__PURE__*/ Jt(function(r) {
    return r.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase();
    });
}), Ln = /*#__PURE__*/ Jt(function(r) {
    return r.replace(/(-\w)/g, function(e) {
        return e[1].toUpperCase();
    });
}), nv = /*#__PURE__*/ Jt(function(r, e) {
    return r + e[0].toUpperCase() + e.substring(1);
}, function(r, e) {
    return r + "$" + e;
}), ko = /*#__PURE__*/ m$1(function(e) {
    return lt(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, "capitalize"), nt = /*#__PURE__*/ m$1(function(e, t) {
    return e.slice(-1 * t.length) === t;
}, "endsWith"), ar = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", bc = "rgb[a]?\\((" + ar + "[%]?)\\s*,\\s*(" + ar + "[%]?)\\s*,\\s*(" + ar + "[%]?)(?:\\s*,\\s*(" + ar + "))?\\)", wc = "rgb[a]?\\((?:" + ar + "[%]?)\\s*,\\s*(?:" + ar + "[%]?)\\s*,\\s*(?:" + ar + "[%]?)(?:\\s*,\\s*(?:" + ar + "))?\\)", xc = "hsl[a]?\\((" + ar + ")\\s*,\\s*(" + ar + "[%])\\s*,\\s*(" + ar + "[%])(?:\\s*,\\s*(" + ar + "))?\\)", Ec = "hsl[a]?\\((?:" + ar + ")\\s*,\\s*(?:" + ar + "[%])\\s*,\\s*(?:" + ar + "[%])(?:\\s*,\\s*(?:" + ar + "))?\\)", Cc = "\\#[0-9a-fA-F]{3}", Tc = "\\#[0-9a-fA-F]{6}", iv = /*#__PURE__*/ m$1(function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}, "ascending"), Sc = /*#__PURE__*/ m$1(function(e, t) {
    return -1 * iv(e, t);
}, "descending"), we = Object.assign != null ? Object.assign.bind(Object) : function(r) {
    for(var e = arguments, t = 1; t < e.length; t++){
        var a = e[t];
        if (a != null) for(var n = /*#__PURE__*/ Object.keys(a), i = 0; i < n.length; i++){
            var s = n[i];
            r[s] = a[s];
        }
    }
    return r;
}, kc = /*#__PURE__*/ m$1(function(e) {
    if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
        var t = e.length === 4, a, n, i, s = 16;
        return t ? (a = /*#__PURE__*/ parseInt(e[1] + e[1], s), n = /*#__PURE__*/ parseInt(e[2] + e[2], s), i = /*#__PURE__*/ parseInt(e[3] + e[3], s)) : (a = /*#__PURE__*/ parseInt(e[1] + e[2], s), n = /*#__PURE__*/ parseInt(e[3] + e[4], s), i = /*#__PURE__*/ parseInt(e[5] + e[6], s)), [
            a,
            n,
            i
        ];
    }
}, "hex2tuple"), Dc = /*#__PURE__*/ m$1(function(e) {
    var t, a, n, i, s, o, l, u;
    function f(h, m, p) {
        return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? h + (m - h) * 6 * p : p < 1 / 2 ? m : p < 2 / 3 ? h + (m - h) * (2 / 3 - p) * 6 : h;
    }
    m$1(f, "hue2rgb");
    var c = /*#__PURE__*/ new RegExp("^" + xc + "$").exec(e);
    if (c) {
        if (a = /*#__PURE__*/ parseInt(c[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = /*#__PURE__*/ parseFloat(c[2]), n < 0 || n > 100 || (n = n / 100, i = /*#__PURE__*/ parseFloat(c[3]), i < 0 || i > 100) || (i = i / 100, s = c[4], s !== void 0 && (s = /*#__PURE__*/ parseFloat(s), s < 0 || s > 1))) return;
        if (n === 0) o = l = u = /*#__PURE__*/ Math.round(i * 255);
        else {
            var d = i < .5 ? i * (1 + n) : i + n - i * n, g = 2 * i - d;
            o = /*#__PURE__*/ Math.round(255 * f(g, d, a + 1 / 3)), l = /*#__PURE__*/ Math.round(255 * f(g, d, a)), u = /*#__PURE__*/ Math.round(255 * f(g, d, a - 1 / 3));
        }
        t = [
            o,
            l,
            u,
            s
        ];
    }
    return t;
}, "hsl2tuple"), Bc = /*#__PURE__*/ m$1(function(e) {
    var t, a = /*#__PURE__*/ new RegExp("^" + bc + "$").exec(e);
    if (a) {
        t = [];
        for(var n = [], i = 1; i <= 3; i++){
            var s = a[i];
            if (s[s.length - 1] === "%" && (n[i] = true), s = /*#__PURE__*/ parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255) return;
            t.push(/*#__PURE__*/ Math.floor(s));
        }
        var o = n[1] || n[2] || n[3], l = n[1] && n[2] && n[3];
        if (o && !l) return;
        var u = a[4];
        if (u !== void 0) {
            if (u = /*#__PURE__*/ parseFloat(u), u < 0 || u > 1) return;
            t.push(u);
        }
    }
    return t;
}, "rgb2tuple"), Pc = /*#__PURE__*/ m$1(function(e) {
    return Ac[e.toLowerCase()];
}, "colorname2tuple"), sv = /*#__PURE__*/ m$1(function(e) {
    return (Ge(e) ? e : null) || Pc(e) || kc(e) || Bc(e) || Dc(e);
}, "color2tuple"), Ac = {
    transparent: [
        0,
        0,
        0,
        0
    ],
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        134,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        250,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    grey: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        221
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        112,
        128,
        144
    ],
    slategrey: [
        112,
        128,
        144
    ],
    snow: [
        255,
        250,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        50
    ]
}, ov = /*#__PURE__*/ m$1(function(e) {
    for(var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++){
        var s = a[i];
        if (Ie(s)) throw Error("Tried to set map with object key");
        i < a.length - 1 ? (t[s] == null && (t[s] = {}), t = t[s]) : t[s] = e.value;
    }
}, "setMap"), uv = /*#__PURE__*/ m$1(function(e) {
    for(var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++){
        var s = a[i];
        if (Ie(s)) throw Error("Tried to get map with object key");
        if (t = t[s], t == null) return t;
    }
    return t;
}, "getMap"), Xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Na(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
m$1(Na, "getDefaultExportFromCjs");
var jn, Do;
function za() {
    if (Do) return jn;
    Do = 1;
    function r(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
    }
    return m$1(r, "isObject"), jn = r, jn;
}
m$1(za, "requireIsObject");
var ei, Bo;
function Rc() {
    if (Bo) return ei;
    Bo = 1;
    var r = typeof Xa == "object" && Xa && Xa.Object === Object && Xa;
    return ei = r, ei;
}
m$1(Rc, "require_freeGlobal");
var ri, Po;
function In() {
    if (Po) return ri;
    Po = 1;
    var r = /*#__PURE__*/ Rc(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
    return ri = t, ri;
}
m$1(In, "require_root");
var ti, Ao;
function Mc() {
    if (Ao) return ti;
    Ao = 1;
    var r = /*#__PURE__*/ In(), e = /*#__PURE__*/ m$1(function() {
        return r.Date.now();
    }, "now");
    return ti = e, ti;
}
m$1(Mc, "requireNow");
var ai, Ro;
function Lc() {
    if (Ro) return ai;
    Ro = 1;
    var r = /\s/;
    function e(t) {
        for(var a = t.length; a-- && r.test(/*#__PURE__*/ t.charAt(a)););
        return a;
    }
    return m$1(e, "trimmedEndIndex"), ai = e, ai;
}
m$1(Lc, "require_trimmedEndIndex");
var ni, Mo;
function Ic() {
    if (Mo) return ni;
    Mo = 1;
    var r = /*#__PURE__*/ Lc(), e = /^\s+/;
    function t(a) {
        return a && a.slice(0, r(a) + 1).replace(e, "");
    }
    return m$1(t, "baseTrim"), ni = t, ni;
}
m$1(Ic, "require_baseTrim");
var ii, Lo;
function Js() {
    if (Lo) return ii;
    Lo = 1;
    var r = /*#__PURE__*/ In(), e = r.Symbol;
    return ii = e, ii;
}
m$1(Js, "require_Symbol");
var si, Io;
function Oc() {
    if (Io) return si;
    Io = 1;
    var r = /*#__PURE__*/ Js(), e = Object.prototype, t = e.hasOwnProperty, a = e.toString, n = r ? r.toStringTag : void 0;
    function i(s) {
        var o = /*#__PURE__*/ t.call(s, n), l = s[n];
        try {
            s[n] = void 0;
            var u = !0;
        } catch  {}
        var f = /*#__PURE__*/ a.call(s);
        return u && (o ? s[n] = l : delete s[n]), f;
    }
    return m$1(i, "getRawTag"), si = i, si;
}
m$1(Oc, "require_getRawTag");
var oi, Oo;
function Nc() {
    if (Oo) return oi;
    Oo = 1;
    var r = Object.prototype, e = r.toString;
    function t(a) {
        return e.call(a);
    }
    return m$1(t, "objectToString"), oi = t, oi;
}
m$1(Nc, "require_objectToString");
var ui, No;
function lv() {
    if (No) return ui;
    No = 1;
    var r = /*#__PURE__*/ Js(), e = /*#__PURE__*/ Oc(), t = /*#__PURE__*/ Nc(), a = "[object Null]", n = "[object Undefined]", i = r ? r.toStringTag : void 0;
    function s(o) {
        return o == null ? o === void 0 ? n : a : i && i in Object(o) ? e(o) : t(o);
    }
    return m$1(s, "baseGetTag"), ui = s, ui;
}
m$1(lv, "require_baseGetTag");
var li, zo;
function zc() {
    if (zo) return li;
    zo = 1;
    function r(e) {
        return e != null && typeof e == "object";
    }
    return m$1(r, "isObjectLike"), li = r, li;
}
m$1(zc, "requireIsObjectLike");
var vi, Fo;
function Fa() {
    if (Fo) return vi;
    Fo = 1;
    var r = /*#__PURE__*/ lv(), e = /*#__PURE__*/ zc(), t = "[object Symbol]";
    function a(n) {
        return typeof n == "symbol" || e(n) && r(n) == t;
    }
    return m$1(a, "isSymbol"), vi = a, vi;
}
m$1(Fa, "requireIsSymbol");
var fi, Vo;
function Fc() {
    if (Vo) return fi;
    Vo = 1;
    var r = /*#__PURE__*/ Ic(), e = /*#__PURE__*/ za(), t = /*#__PURE__*/ Fa(), a = NaN, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, o = parseInt;
    function l(u) {
        if (typeof u == "number") return u;
        if (t(u)) return a;
        if (e(u)) {
            var f = typeof u.valueOf == "function" ? u.valueOf() : u;
            u = e(f) ? f + "" : f;
        }
        if (typeof u != "string") return u === 0 ? u : +u;
        u = /*#__PURE__*/ r(u);
        var c = /*#__PURE__*/ i.test(u);
        return c || s.test(u) ? o(/*#__PURE__*/ u.slice(2), c ? 2 : 8) : n.test(u) ? a : +u;
    }
    return m$1(l, "toNumber"), fi = l, fi;
}
m$1(Fc, "requireToNumber");
var ci, qo;
function Vc() {
    if (qo) return ci;
    qo = 1;
    var r = /*#__PURE__*/ za(), e = /*#__PURE__*/ Mc(), t = /*#__PURE__*/ Fc(), a = "Expected a function", n = Math.max, i = Math.min;
    function s(o, l, u) {
        var f, c, d, g, h, m, p = 0, y = false, b1 = false, w = true;
        if (typeof o != "function") throw new TypeError(a);
        l = t(l) || 0, r(u) && (y = !!u.leading, b1 = "maxWait" in u, d = b1 ? n(t(u.maxWait) || 0, l) : d, w = "trailing" in u ? !!u.trailing : w);
        function x(R) {
            var M = f, I = c;
            return f = c = void 0, p = R, g = /*#__PURE__*/ o.apply(I, M), g;
        }
        m$1(x, "invokeFunc");
        function C(R) {
            return p = R, h = /*#__PURE__*/ setTimeout(S, l), y ? x(R) : g;
        }
        m$1(C, "leadingEdge");
        function T(R) {
            var M = R - m, I = R - p, O = l - M;
            return b1 ? i(O, d - I) : O;
        }
        m$1(T, "remainingWait");
        function E(R) {
            var M = R - m, I = R - p;
            return m === void 0 || M >= l || M < 0 || b1 && I >= d;
        }
        m$1(E, "shouldInvoke");
        function S() {
            var R = /*#__PURE__*/ e();
            if (E(R)) return D(R);
            h = /*#__PURE__*/ setTimeout(S, /*#__PURE__*/ T(R));
        }
        m$1(S, "timerExpired");
        function D(R) {
            return h = void 0, w && f ? x(R) : (f = c = void 0, g);
        }
        m$1(D, "trailingEdge");
        function B() {
            h !== void 0 && clearTimeout(h), p = 0, f = m = c = h = void 0;
        }
        m$1(B, "cancel");
        function P() {
            return h === void 0 ? g : D(/*#__PURE__*/ e());
        }
        m$1(P, "flush");
        function A() {
            var R = /*#__PURE__*/ e(), M = /*#__PURE__*/ E(R);
            if (f = arguments, c = this, m = R, M) {
                if (h === void 0) return C(m);
                if (b1) return clearTimeout(h), h = /*#__PURE__*/ setTimeout(S, l), x(m);
            }
            return h === void 0 && (h = /*#__PURE__*/ setTimeout(S, l)), g;
        }
        return m$1(A, "debounced"), A.cancel = B, A.flush = P, A;
    }
    return m$1(s, "debounce"), ci = s, ci;
}
m$1(Vc, "requireDebounce");
var qc = /*#__PURE__*/ Vc(), Va = /*#__PURE__*/ Na(qc), di = tr ? tr.performance : null, vv = di && di.now ? function() {
    return di.now();
} : function() {
    return Date.now();
}, _c = /*#__PURE__*/ function() {
    if (tr) {
        if (tr.requestAnimationFrame) return function(r) {
            tr.requestAnimationFrame(r);
        };
        if (tr.mozRequestAnimationFrame) return function(r) {
            tr.mozRequestAnimationFrame(r);
        };
        if (tr.webkitRequestAnimationFrame) return function(r) {
            tr.webkitRequestAnimationFrame(r);
        };
        if (tr.msRequestAnimationFrame) return function(r) {
            tr.msRequestAnimationFrame(r);
        };
    }
    return function(r) {
        r && setTimeout(function() {
            r(/*#__PURE__*/ vv());
        }, 1e3 / 60);
    };
}(), xn = /*#__PURE__*/ m$1(function(e) {
    return _c(e);
}, "requestAnimationFrame"), Zr = vv, kt = 9261, fv = 65599, Wt = 5381, cv = /*#__PURE__*/ m$1(function(e) {
    for(var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kt, a = t, n; n = /*#__PURE__*/ e.next(), !n.done;)a = a * fv + n.value | 0;
    return a;
}, "hashIterableInts"), Ta = /*#__PURE__*/ m$1(function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kt;
    return t * fv + e | 0;
}, "hashInt"), Sa = /*#__PURE__*/ m$1(function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wt;
    return (t << 5) + t + e | 0;
}, "hashIntAlt"), Gc = /*#__PURE__*/ m$1(function(e, t) {
    return e * 2097152 + t;
}, "combineHashes"), rt = /*#__PURE__*/ m$1(function(e) {
    return e[0] * 2097152 + e[1];
}, "combineHashesArray"), Ya = /*#__PURE__*/ m$1(function(e, t) {
    return [
        /*#__PURE__*/ Ta(e[0], t[0]),
        /*#__PURE__*/ Sa(e[1], t[1])
    ];
}, "hashArrays"), _o = /*#__PURE__*/ m$1(function(e, t) {
    var a = {
        value: 0,
        done: false
    }, n = 0, i = e.length, s = {
        next: /*#__PURE__*/ m$1(function() {
            return n < i ? a.value = e[n++] : a.done = true, a;
        }, "next")
    };
    return cv(s, t);
}, "hashIntsArray"), Pt = /*#__PURE__*/ m$1(function(e, t) {
    var a = {
        value: 0,
        done: false
    }, n = 0, i = e.length, s = {
        next: /*#__PURE__*/ m$1(function() {
            return n < i ? a.value = /*#__PURE__*/ e.charCodeAt(n++) : a.done = true, a;
        }, "next")
    };
    return cv(s, t);
}, "hashString"), dv = /*#__PURE__*/ m$1(function() {
    return Hc(arguments);
}, "hashStrings"), Hc = /*#__PURE__*/ m$1(function(e) {
    for(var t, a = 0; a < e.length; a++){
        var n = e[a];
        a === 0 ? t = /*#__PURE__*/ Pt(n) : t = /*#__PURE__*/ Pt(n, t);
    }
    return t;
}, "hashStringsArray");
function Wc(r, e, t, a, n) {
    var i = n * Math.PI / 180, s = Math.cos(i) * (r - t) - Math.sin(i) * (e - a) + t, o = Math.sin(i) * (r - t) + Math.cos(i) * (e - a) + a;
    return {
        x: s,
        y: o
    };
}
m$1(Wc, "rotatePoint");
var $c = /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
    return {
        x: (e - a) * i + a,
        y: (t - n) * s + n
    };
}, "movePointByBoxAspect");
function Uc(r, e, t) {
    if (t === 0) return r;
    var a = (e.x1 + e.x2) / 2, n = (e.y1 + e.y2) / 2, i = e.w / e.h, s = 1 / i, o = /*#__PURE__*/ Wc(r.x, r.y, a, n, t), l = /*#__PURE__*/ $c(o.x, o.y, a, n, i, s);
    return {
        x: l.x,
        y: l.y
    };
}
m$1(Uc, "rotatePosAndSkewByBox");
var Go = true, Kc = console.warn != null, Xc = console.trace != null, js = Number.MAX_SAFE_INTEGER || 9007199254740991, hv = /*#__PURE__*/ m$1(function() {
    return true;
}, "trueify"), En = /*#__PURE__*/ m$1(function() {
    return false;
}, "falsify"), Ho = /*#__PURE__*/ m$1(function() {
    return 0;
}, "zeroify"), eo = /*#__PURE__*/ m$1(function() {}, "noop"), Ue = /*#__PURE__*/ m$1(function(e) {
    throw new Error(e);
}, "error"), gv = /*#__PURE__*/ m$1(function(e) {
    if (e !== void 0) Go = !!e;
    else return Go;
}, "warnings"), qe = /*#__PURE__*/ m$1(function(e) {
    gv() && (Kc ? console.warn(e) : (console.log(e), Xc && console.trace()));
}, "warn"), Yc = /*#__PURE__*/ m$1(function(e) {
    return we({}, e);
}, "clone"), _r = /*#__PURE__*/ m$1(function(e) {
    return e == null ? e : Ge(e) ? e.slice() : Ie(e) ? Yc(e) : e;
}, "copy"), Zc = /*#__PURE__*/ m$1(function(e) {
    return e.slice();
}, "copyArray"), pv = /*#__PURE__*/ m$1(function(e, t) {
    for(t = e = ""; e++ < 36; t += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-");
    return t;
}, "uuid"), Qc = {}, yv = /*#__PURE__*/ m$1(function() {
    return Qc;
}, "staticEmptyObject"), dr = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ Object.keys(e);
    return function(a) {
        for(var n = {}, i = 0; i < t.length; i++){
            var s = t[i], o = a?.[s];
            n[s] = o === void 0 ? e[s] : o;
        }
        return n;
    };
}, "defaults"), vt = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = e.length - 1; n >= 0; n--)e[n] === t && e.splice(n, 1);
}, "removeFromArray"), ro = /*#__PURE__*/ m$1(function(e) {
    e.splice(0, e.length);
}, "clearArray"), Jc = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = 0; a < t.length; a++){
        var n = t[a];
        e.push(n);
    }
}, "push"), Sr = /*#__PURE__*/ m$1(function(e, t, a) {
    return a && (t = /*#__PURE__*/ nv(a, t)), e[t];
}, "getPrefixedProperty"), Xr = /*#__PURE__*/ m$1(function(e, t, a, n) {
    a && (t = /*#__PURE__*/ nv(a, t)), e[t] = n;
}, "setPrefixedProperty"), jc = /*#__PURE__*/ function() {
    function r() {
        gt(this, r), this._obj = {};
    }
    return m$1(r, "ObjectMap"), pt(r, [
        {
            key: "set",
            value: /*#__PURE__*/ m$1(function(t, a) {
                return this._obj[t] = a, this;
            }, "set")
        },
        {
            key: "delete",
            value: /*#__PURE__*/ m$1(function(t) {
                return this._obj[t] = void 0, this;
            }, "_delete")
        },
        {
            key: "clear",
            value: /*#__PURE__*/ m$1(function() {
                this._obj = {};
            }, "clear")
        },
        {
            key: "has",
            value: /*#__PURE__*/ m$1(function(t) {
                return this._obj[t] !== void 0;
            }, "has")
        },
        {
            key: "get",
            value: /*#__PURE__*/ m$1(function(t) {
                return this._obj[t];
            }, "get")
        }
    ]);
}(), Yr = typeof Map < "u" ? Map : jc, ed = "undefined", rd = /*#__PURE__*/ function() {
    function r(e) {
        if (gt(this, r), this._obj = /*#__PURE__*/ Object.create(null), this.size = 0, e != null) {
            var t;
            e.instanceString != null && e.instanceString() === this.instanceString() ? t = /*#__PURE__*/ e.toArray() : t = e;
            for(var a = 0; a < t.length; a++)this.add(t[a]);
        }
    }
    return m$1(r, "ObjectSet"), pt(r, [
        {
            key: "instanceString",
            value: /*#__PURE__*/ m$1(function() {
                return "set";
            }, "instanceString")
        },
        {
            key: "add",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = this._obj;
                a[t] !== 1 && (a[t] = 1, this.size++);
            }, "add")
        },
        {
            key: "delete",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = this._obj;
                a[t] === 1 && (a[t] = 0, this.size--);
            }, "_delete")
        },
        {
            key: "clear",
            value: /*#__PURE__*/ m$1(function() {
                this._obj = /*#__PURE__*/ Object.create(null);
            }, "clear")
        },
        {
            key: "has",
            value: /*#__PURE__*/ m$1(function(t) {
                return this._obj[t] === 1;
            }, "has")
        },
        {
            key: "toArray",
            value: /*#__PURE__*/ m$1(function() {
                var t = this;
                return Object.keys(this._obj).filter(function(a) {
                    return t.has(a);
                });
            }, "toArray")
        },
        {
            key: "forEach",
            value: /*#__PURE__*/ m$1(function(t, a) {
                return this.toArray().forEach(t, a);
            }, "forEach")
        }
    ]);
}(), ta = (typeof Set > "u" ? "undefined" : nr(Set)) !== ed ? Set : rd, On = /*#__PURE__*/ m$1(function(e, t) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (e === void 0 || t === void 0 || !Zs(e)) {
        Ue("An element must have a core reference and parameters set");
        return;
    }
    var n = t.group;
    if (n == null && (t.data && t.data.source != null && t.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
        Ue("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
        return;
    }
    this.length = 1, this[0] = this;
    var i = this._private = {
        cy: e,
        single: true,
        data: t.data || {},
        position: t.position || {
            x: 0,
            y: 0
        },
        autoWidth: void 0,
        autoHeight: void 0,
        autoPadding: void 0,
        compoundBoundsClean: false,
        listeners: [],
        group: n,
        style: {},
        rstyle: {},
        styleCxts: [],
        styleKeys: {},
        removed: true,
        selected: !!t.selected,
        selectable: t.selectable === void 0 ? true : !!t.selectable,
        locked: !!t.locked,
        grabbed: false,
        grabbable: t.grabbable === void 0 ? true : !!t.grabbable,
        pannable: t.pannable === void 0 ? n === "edges" : !!t.pannable,
        active: false,
        classes: new ta,
        animation: {
            current: [],
            queue: []
        },
        rscratch: {},
        scratch: t.scratch || {},
        edges: [],
        children: [],
        parent: t.parent && t.parent.isNode() ? t.parent : null,
        traversalCache: {},
        backgrounding: false,
        bbCache: null,
        bbCacheShift: {
            x: 0,
            y: 0
        },
        bodyBounds: null,
        overlayBounds: null,
        labelBounds: {
            all: null,
            source: null,
            target: null,
            main: null
        },
        arrowBounds: {
            source: null,
            target: null,
            "mid-source": null,
            "mid-target": null
        }
    };
    if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), t.renderedPosition) {
        var s = t.renderedPosition, o = /*#__PURE__*/ e.pan(), l = /*#__PURE__*/ e.zoom();
        i.position = {
            x: (s.x - o.x) / l,
            y: (s.y - o.y) / l
        };
    }
    var u = [];
    Ge(t.classes) ? u = t.classes : pe(t.classes) && (u = /*#__PURE__*/ t.classes.split(/\s+/));
    for(var f = 0, c = u.length; f < c; f++){
        var d = u[f];
        !d || d === "" || i.classes.add(d);
    }
    this.createEmitter(), (a === void 0 || a) && this.restore();
    var g = t.style || t.css;
    g && (qe("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(g));
}, "Element"), Wo = /*#__PURE__*/ m$1(function(e) {
    return e = {
        bfs: e.bfs || !e.dfs,
        dfs: e.dfs || !e.bfs
    }, m$1(function(a, n, i) {
        var s;
        Ie(a) && !Br(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !Ke(n) ? n : i, n = Ke(n) ? n : function() {};
        for(var o = this._private.cy, l = a = pe(a) ? this.filter(a) : a, u = [], f = [], c = {}, d = {}, g = {}, h = 0, m, p = /*#__PURE__*/ this.byGroup(), y = p.nodes, b1 = p.edges, w = 0; w < l.length; w++){
            var x = l[w], C = /*#__PURE__*/ x.id();
            x.isNode() && (u.unshift(x), e.bfs && (g[C] = true, f.push(x)), d[C] = 0);
        }
        for(var T = /*#__PURE__*/ m$1(function() {
            var R = e.bfs ? u.shift() : u.pop(), M = /*#__PURE__*/ R.id();
            if (e.dfs) {
                if (g[M]) return 0;
                g[M] = true, f.push(R);
            }
            var I = d[M], O = c[M], L = O != null ? O.source() : null, N = O != null ? O.target() : null, q = O == null ? void 0 : R.same(L) ? N[0] : L[0], H;
            if (H = /*#__PURE__*/ n(R, O, q, h++, I), H === true) return m = R, 1;
            if (H === false) return 1;
            for(var z = /*#__PURE__*/ R.connectedEdges().filter(function(ee) {
                return (!i || ee.source().same(R)) && b1.has(ee);
            }), V = 0; V < z.length; V++){
                var K = z[V], J = /*#__PURE__*/ K.connectedNodes().filter(function(ee) {
                    return !ee.same(R) && y.has(ee);
                }), X = /*#__PURE__*/ J.id();
                J.length !== 0 && !g[X] && (J = J[0], u.push(J), e.bfs && (g[X] = true, f.push(J)), c[X] = K, d[X] = d[M] + 1);
            }
        }, "_loop"), E; u.length !== 0 && (E = /*#__PURE__*/ T(), !(E !== 0 && E === 1)););
        for(var S = /*#__PURE__*/ o.collection(), D = 0; D < f.length; D++){
            var B = f[D], P = c[B.id()];
            P != null && S.push(P), S.push(B);
        }
        return {
            path: /*#__PURE__*/ o.collection(S),
            found: /*#__PURE__*/ o.collection(m)
        };
    }, "searchFn");
}, "defineSearch"), ka = {
    breadthFirstSearch: /*#__PURE__*/ Wo({
        bfs: true
    }),
    depthFirstSearch: /*#__PURE__*/ Wo({
        dfs: true
    })
};
ka.bfs = ka.breadthFirstSearch;
ka.dfs = ka.depthFirstSearch;
var un = {
    exports: {}
}, td = un.exports, $o;
function ad() {
    return $o || ($o = 1, function(r, e) {
        (function() {
            var t, a, n, i, s, o, l, u, f, c, d, g, h, m, p;
            n = Math.floor, c = Math.min, a = /*#__PURE__*/ m$1(function(y, b1) {
                return y < b1 ? -1 : y > b1 ? 1 : 0;
            }, "defaultCmp"), f = /*#__PURE__*/ m$1(function(y, b1, w, x, C) {
                var T;
                if (w == null && (w = 0), C == null && (C = a), w < 0) throw new Error("lo must be non-negative");
                for(x == null && (x = y.length); w < x;)T = /*#__PURE__*/ n((w + x) / 2), C(b1, y[T]) < 0 ? x = T : w = T + 1;
                return [].splice.apply(y, /*#__PURE__*/ [
                    w,
                    w - w
                ].concat(b1)), b1;
            }, "insort"), o = /*#__PURE__*/ m$1(function(y, b1, w) {
                return w == null && (w = a), y.push(b1), m(y, 0, y.length - 1, w);
            }, "heappush"), s = /*#__PURE__*/ m$1(function(y, b1) {
                var w, x;
                return b1 == null && (b1 = a), w = /*#__PURE__*/ y.pop(), y.length ? (x = y[0], y[0] = w, p(y, 0, b1)) : x = w, x;
            }, "heappop"), u = /*#__PURE__*/ m$1(function(y, b1, w) {
                var x;
                return w == null && (w = a), x = y[0], y[0] = b1, p(y, 0, w), x;
            }, "heapreplace"), l = /*#__PURE__*/ m$1(function(y, b1, w) {
                var x;
                return w == null && (w = a), y.length && w(y[0], b1) < 0 && (x = [
                    y[0],
                    b1
                ], b1 = x[0], y[0] = x[1], p(y, 0, w)), b1;
            }, "heappushpop"), i = /*#__PURE__*/ m$1(function(y, b1) {
                var w, x, C, T, E, S;
                for(b1 == null && (b1 = a), T = /*#__PURE__*/ (function() {
                    S = [];
                    for(var D = 0, B = /*#__PURE__*/ n(y.length / 2); 0 <= B ? D < B : D > B; 0 <= B ? D++ : D--)S.push(D);
                    return S;
                }).apply(this).reverse(), E = [], x = 0, C = T.length; x < C; x++)w = T[x], E.push(/*#__PURE__*/ p(y, w, b1));
                return E;
            }, "heapify"), h = /*#__PURE__*/ m$1(function(y, b1, w) {
                var x;
                if (w == null && (w = a), x = /*#__PURE__*/ y.indexOf(b1), x !== -1) return m(y, 0, x, w), p(y, x, w);
            }, "updateItem"), d = /*#__PURE__*/ m$1(function(y, b1, w) {
                var x, C, T, E, S;
                if (w == null && (w = a), C = /*#__PURE__*/ y.slice(0, b1), !C.length) return C;
                for(i(C, w), S = /*#__PURE__*/ y.slice(b1), T = 0, E = S.length; T < E; T++)x = S[T], l(C, x, w);
                return C.sort(w).reverse();
            }, "nlargest"), g = /*#__PURE__*/ m$1(function(y, b1, w) {
                var x, C, T, E, S, D, B, P, A;
                if (w == null && (w = a), b1 * 10 <= y.length) {
                    if (T = /*#__PURE__*/ y.slice(0, b1).sort(w), !T.length) return T;
                    for(C = T[T.length - 1], B = /*#__PURE__*/ y.slice(b1), E = 0, D = B.length; E < D; E++)x = B[E], w(x, C) < 0 && (f(T, x, 0, null, w), T.pop(), C = T[T.length - 1]);
                    return T;
                }
                for(i(y, w), A = [], S = 0, P = /*#__PURE__*/ c(b1, y.length); 0 <= P ? S < P : S > P; 0 <= P ? ++S : --S)A.push(/*#__PURE__*/ s(y, w));
                return A;
            }, "nsmallest"), m = /*#__PURE__*/ m$1(function(y, b1, w, x) {
                var C, T, E;
                for(x == null && (x = a), C = y[w]; w > b1;){
                    if (E = w - 1 >> 1, T = y[E], x(C, T) < 0) {
                        y[w] = T, w = E;
                        continue;
                    }
                    break;
                }
                return y[w] = C;
            }, "_siftdown"), p = /*#__PURE__*/ m$1(function(y, b1, w) {
                var x, C, T, E, S;
                for(w == null && (w = a), C = y.length, S = b1, T = y[b1], x = 2 * b1 + 1; x < C;)E = x + 1, E < C && !(w(y[x], y[E]) < 0) && (x = E), y[b1] = y[x], b1 = x, x = 2 * b1 + 1;
                return y[b1] = T, m(y, S, b1, w);
            }, "_siftup"), t = /*#__PURE__*/ function() {
                y.push = o, y.pop = s, y.replace = u, y.pushpop = l, y.heapify = i, y.updateItem = h, y.nlargest = d, y.nsmallest = g;
                function y(b1) {
                    this.cmp = b1 ?? a, this.nodes = [];
                }
                return m$1(y, "Heap"), y.prototype.push = function(b1) {
                    return o(this.nodes, b1, this.cmp);
                }, y.prototype.pop = function() {
                    return s(this.nodes, this.cmp);
                }, y.prototype.peek = function() {
                    return this.nodes[0];
                }, y.prototype.contains = function(b1) {
                    return this.nodes.indexOf(b1) !== -1;
                }, y.prototype.replace = function(b1) {
                    return u(this.nodes, b1, this.cmp);
                }, y.prototype.pushpop = function(b1) {
                    return l(this.nodes, b1, this.cmp);
                }, y.prototype.heapify = function() {
                    return i(this.nodes, this.cmp);
                }, y.prototype.updateItem = function(b1) {
                    return h(this.nodes, b1, this.cmp);
                }, y.prototype.clear = function() {
                    return this.nodes = [];
                }, y.prototype.empty = function() {
                    return this.nodes.length === 0;
                }, y.prototype.size = function() {
                    return this.nodes.length;
                }, y.prototype.clone = function() {
                    var b1;
                    return b1 = new y, b1.nodes = /*#__PURE__*/ this.nodes.slice(0), b1;
                }, y.prototype.toArray = function() {
                    return this.nodes.slice(0);
                }, y.prototype.insert = y.prototype.push, y.prototype.top = y.prototype.peek, y.prototype.front = y.prototype.peek, y.prototype.has = y.prototype.contains, y.prototype.copy = y.prototype.clone, y;
            }(), function(y, b1) {
                return r.exports = /*#__PURE__*/ b1();
            }(this, function() {
                return t;
            });
        }).call(td);
    }(un)), un.exports;
}
m$1(ad, "requireHeap$1");
var hi, Uo;
function nd() {
    return Uo || (Uo = 1, hi = /*#__PURE__*/ ad()), hi;
}
m$1(nd, "requireHeap");
var id = /*#__PURE__*/ nd(), qa = /*#__PURE__*/ Na(id), sd = /*#__PURE__*/ dr({
    root: null,
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    directed: false
}), od = {
    dijkstra: /*#__PURE__*/ m$1(function(e) {
        if (!Ie(e)) {
            var t = arguments;
            e = {
                root: t[0],
                weight: t[1],
                directed: t[2]
            };
        }
        var a = /*#__PURE__*/ sd(e), n = a.root, i = a.weight, s = a.directed, o = this, l = i, u = pe(n) ? this.filter(n)[0] : n[0], f = {}, c = {}, d = {}, g = /*#__PURE__*/ this.byGroup(), h = g.nodes, m = g.edges;
        m.unmergeBy(function(I) {
            return I.isLoop();
        });
        for(var p = /*#__PURE__*/ m$1(function(O) {
            return f[O.id()];
        }, "getDist"), y = /*#__PURE__*/ m$1(function(O, L) {
            f[O.id()] = L, b1.updateItem(O);
        }, "setDist"), b1 = new qa(function(I, O) {
            return p(I) - p(O);
        }), w = 0; w < h.length; w++){
            var x = h[w];
            f[x.id()] = x.same(u) ? 0 : 1 / 0, b1.push(x);
        }
        for(var C = /*#__PURE__*/ m$1(function(O, L) {
            for(var N = /*#__PURE__*/ (s ? O.edgesTo(L) : O.edgesWith(L)).intersect(m), q = 1 / 0, H, z = 0; z < N.length; z++){
                var V = N[z], K = /*#__PURE__*/ l(V);
                (K < q || !H) && (q = K, H = V);
            }
            return {
                edge: H,
                dist: q
            };
        }, "distBetween"); b1.size() > 0;){
            var T = /*#__PURE__*/ b1.pop(), E = /*#__PURE__*/ p(T), S = /*#__PURE__*/ T.id();
            if (d[S] = E, E !== 1 / 0) for(var D = /*#__PURE__*/ T.neighborhood().intersect(h), B = 0; B < D.length; B++){
                var P = D[B], A = /*#__PURE__*/ P.id(), R = /*#__PURE__*/ C(T, P), M = E + R.dist;
                M < p(P) && (y(P, M), c[A] = {
                    node: T,
                    edge: R.edge
                });
            }
        }
        return {
            distanceTo: /*#__PURE__*/ m$1(function(O) {
                var L = pe(O) ? h.filter(O)[0] : O[0];
                return d[L.id()];
            }, "distanceTo"),
            pathTo: /*#__PURE__*/ m$1(function(O) {
                var L = pe(O) ? h.filter(O)[0] : O[0], N = [], q = L, H = /*#__PURE__*/ q.id();
                if (L.length > 0) for(N.unshift(L); c[H];){
                    var z = c[H];
                    N.unshift(z.edge), N.unshift(z.node), q = z.node, H = /*#__PURE__*/ q.id();
                }
                return o.spawn(N);
            }, "pathTo")
        };
    }, "dijkstra")
}, ud = {
    kruskal: /*#__PURE__*/ m$1(function(e) {
        e = e || function(w) {
            return 1;
        };
        for(var t = /*#__PURE__*/ this.byGroup(), a = t.nodes, n = t.edges, i = a.length, s = new Array(i), o = a, l = /*#__PURE__*/ m$1(function(x) {
            for(var C = 0; C < s.length; C++){
                var T = s[C];
                if (T.has(x)) return C;
            }
        }, "findSetIndex"), u = 0; u < i; u++)s[u] = /*#__PURE__*/ this.spawn(a[u]);
        for(var f = /*#__PURE__*/ n.sort(function(w, x) {
            return e(w) - e(x);
        }), c = 0; c < f.length; c++){
            var d = f[c], g = d.source()[0], h = d.target()[0], m = /*#__PURE__*/ l(g), p = /*#__PURE__*/ l(h), y = s[m], b1 = s[p];
            m !== p && (o.merge(d), y.merge(b1), s.splice(p, 1));
        }
        return o;
    }, "kruskal")
}, ld = /*#__PURE__*/ dr({
    root: null,
    goal: null,
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    heuristic: /*#__PURE__*/ m$1(function(e) {
        return 0;
    }, "heuristic"),
    directed: false
}), vd = {
    aStar: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ ld(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, l = a.weight;
        n = t.collection(n)[0], i = t.collection(i)[0];
        var u = /*#__PURE__*/ n.id(), f = /*#__PURE__*/ i.id(), c = {}, d = {}, g = {}, h = new qa(function(H, z) {
            return d[H.id()] - d[z.id()];
        }), m = new ta, p = {}, y = {}, b1 = /*#__PURE__*/ m$1(function(z, V) {
            h.push(z), m.add(V);
        }, "addToOpenSet"), w, x, C = /*#__PURE__*/ m$1(function() {
            w = /*#__PURE__*/ h.pop(), x = /*#__PURE__*/ w.id(), m.delete(x);
        }, "popFromOpenSet"), T = /*#__PURE__*/ m$1(function(z) {
            return m.has(z);
        }, "isInOpenSet");
        b1(n, u), c[u] = 0, d[u] = /*#__PURE__*/ s(n);
        for(var E = 0; h.size() > 0;){
            if (C(), E++, x === f) {
                for(var S = [], D = i, B = f, P = y[B]; S.unshift(D), P != null && S.unshift(P), D = p[B], D != null;)B = /*#__PURE__*/ D.id(), P = y[B];
                return {
                    found: true,
                    distance: c[x],
                    path: /*#__PURE__*/ this.spawn(S),
                    steps: E
                };
            }
            g[x] = true;
            for(var A = w._private.edges, R = 0; R < A.length; R++){
                var M = A[R];
                if (this.hasElementWithId(/*#__PURE__*/ M.id()) && !(o && M.data("source") !== x)) {
                    var I = /*#__PURE__*/ M.source(), O = /*#__PURE__*/ M.target(), L = I.id() !== x ? I : O, N = /*#__PURE__*/ L.id();
                    if (this.hasElementWithId(N) && !g[N]) {
                        var q = c[x] + l(M);
                        if (!T(N)) {
                            c[N] = q, d[N] = q + s(L), b1(L, N), p[N] = w, y[N] = M;
                            continue;
                        }
                        q < c[N] && (c[N] = q, d[N] = q + s(L), p[N] = w, y[N] = M);
                    }
                }
            }
        }
        return {
            found: false,
            distance: void 0,
            path: void 0,
            steps: E
        };
    }, "aStar")
}, fd = /*#__PURE__*/ dr({
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    directed: false
}), cd = {
    floydWarshall: /*#__PURE__*/ m$1(function(e) {
        for(var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ fd(e), n = a.weight, i = a.directed, s = n, o = /*#__PURE__*/ this.byGroup(), l = o.nodes, u = o.edges, f = l.length, c = f * f, d = /*#__PURE__*/ m$1(function(K) {
            return l.indexOf(K);
        }, "indexOf"), g = /*#__PURE__*/ m$1(function(K) {
            return l[K];
        }, "atIndex"), h = new Array(c), m = 0; m < c; m++){
            var p = m % f, y = (m - p) / f;
            y === p ? h[m] = 0 : h[m] = 1 / 0;
        }
        for(var b1 = new Array(c), w = new Array(c), x = 0; x < u.length; x++){
            var C = u[x], T = C.source()[0], E = C.target()[0];
            if (T !== E) {
                var S = /*#__PURE__*/ d(T), D = /*#__PURE__*/ d(E), B = S * f + D, P = /*#__PURE__*/ s(C);
                if (h[B] > P && (h[B] = P, b1[B] = D, w[B] = C), !i) {
                    var A = D * f + S;
                    !i && h[A] > P && (h[A] = P, b1[A] = S, w[A] = C);
                }
            }
        }
        for(var R = 0; R < f; R++)for(var M = 0; M < f; M++)for(var I = M * f + R, O = 0; O < f; O++){
            var L = M * f + O, N = R * f + O;
            h[I] + h[N] < h[L] && (h[L] = h[I] + h[N], b1[L] = b1[I]);
        }
        var q = /*#__PURE__*/ m$1(function(K) {
            return (pe(K) ? t.filter(K) : K)[0];
        }, "getArgEle"), H = /*#__PURE__*/ m$1(function(K) {
            return d(/*#__PURE__*/ q(K));
        }, "indexOfArgEle"), z = {
            distance: /*#__PURE__*/ m$1(function(K, J) {
                var X = /*#__PURE__*/ H(K), ee = /*#__PURE__*/ H(J);
                return h[X * f + ee];
            }, "distance"),
            path: /*#__PURE__*/ m$1(function(K, J) {
                var X = /*#__PURE__*/ H(K), ee = /*#__PURE__*/ H(J), te = /*#__PURE__*/ g(X);
                if (X === ee) return te.collection();
                if (b1[X * f + ee] == null) return t.collection();
                var ie = /*#__PURE__*/ t.collection(), j = X, F;
                for(ie.merge(te); X !== ee;)j = X, X = b1[X * f + ee], F = w[j * f + X], ie.merge(F), ie.merge(/*#__PURE__*/ g(X));
                return ie;
            }, "path")
        };
        return z;
    }, "floydWarshall")
}, dd = /*#__PURE__*/ dr({
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    directed: false,
    root: null
}), hd = {
    bellmanFord: /*#__PURE__*/ m$1(function(e) {
        var t = this, a = /*#__PURE__*/ dd(e), n = a.weight, i = a.directed, s = a.root, o = n, l = this, u = /*#__PURE__*/ this.cy(), f = /*#__PURE__*/ this.byGroup(), c = f.edges, d = f.nodes, g = d.length, h = new Yr, m = false, p = [];
        s = u.collection(s)[0], c.unmergeBy(function(Te) {
            return Te.isLoop();
        });
        for(var y = c.length, b1 = /*#__PURE__*/ m$1(function(xe) {
            var me = /*#__PURE__*/ h.get(/*#__PURE__*/ xe.id());
            return me || (me = {}, h.set(/*#__PURE__*/ xe.id(), me)), me;
        }, "getInfo"), w = /*#__PURE__*/ m$1(function(xe) {
            return (pe(xe) ? u.$(xe) : xe)[0];
        }, "getNodeFromTo"), x = /*#__PURE__*/ m$1(function(xe) {
            return b1(/*#__PURE__*/ w(xe)).dist;
        }, "distanceTo"), C = /*#__PURE__*/ m$1(function(xe) {
            for(var me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, se = /*#__PURE__*/ w(xe), he = [], ge = se;;){
                if (ge == null) return t.spawn();
                var Ce = /*#__PURE__*/ b1(ge), ye = Ce.edge, ke = Ce.pred;
                if (he.unshift(ge[0]), ge.same(me) && he.length > 0) break;
                ye != null && he.unshift(ye), ge = ke;
            }
            return l.spawn(he);
        }, "pathTo"), T = 0; T < g; T++){
            var E = d[T], S = /*#__PURE__*/ b1(E);
            E.same(s) ? S.dist = 0 : S.dist = 1 / 0, S.pred = null, S.edge = null;
        }
        for(var D = false, B = /*#__PURE__*/ m$1(function(xe, me, se, he, ge, Ce) {
            var ye = he.dist + Ce;
            ye < ge.dist && !se.same(he.edge) && (ge.dist = ye, ge.pred = xe, ge.edge = se, D = true);
        }, "checkForEdgeReplacement"), P = 1; P < g; P++){
            D = false;
            for(var A = 0; A < y; A++){
                var R = c[A], M = /*#__PURE__*/ R.source(), I = /*#__PURE__*/ R.target(), O = /*#__PURE__*/ o(R), L = /*#__PURE__*/ b1(M), N = /*#__PURE__*/ b1(I);
                B(M, I, R, L, N, O), i || B(I, M, R, N, L, O);
            }
            if (!D) break;
        }
        if (D) for(var q = [], H = 0; H < y; H++){
            var z = c[H], V = /*#__PURE__*/ z.source(), K = /*#__PURE__*/ z.target(), J = /*#__PURE__*/ o(z), X = b1(V).dist, ee = b1(K).dist;
            if (X + J < ee || !i && ee + J < X) if (m || (qe("Graph contains a negative weight cycle for Bellman-Ford"), m = true), e.findNegativeWeightCycles !== false) {
                var te = [];
                X + J < ee && te.push(V), !i && ee + J < X && te.push(K);
                for(var ie = te.length, j = 0; j < ie; j++){
                    var F = te[j], _ = [
                        F
                    ];
                    _.push(b1(F).edge);
                    for(var W = b1(F).pred; _.indexOf(W) === -1;)_.push(W), _.push(b1(W).edge), W = b1(W).pred;
                    _ = /*#__PURE__*/ _.slice(/*#__PURE__*/ _.indexOf(W));
                    for(var Z = /*#__PURE__*/ _[0].id(), ae = 0, de = 2; de < _.length; de += 2)_[de].id() < Z && (Z = /*#__PURE__*/ _[de].id(), ae = de);
                    _ = /*#__PURE__*/ _.slice(ae).concat(/*#__PURE__*/ _.slice(0, ae)), _.push(_[0]);
                    var Re = /*#__PURE__*/ _.map(function(Te) {
                        return Te.id();
                    }).join(",");
                    q.indexOf(Re) === -1 && (p.push(/*#__PURE__*/ l.spawn(_)), q.push(Re));
                }
            } else break;
        }
        return {
            distanceTo: x,
            pathTo: C,
            hasNegativeWeightCycle: m,
            negativeWeightCycles: p
        };
    }, "bellmanFord")
}, gd = /*#__PURE__*/ Math.sqrt(2), pd = /*#__PURE__*/ m$1(function(e, t, a) {
    a.length === 0 && Ue("Karger-Stein must be run on a connected (sub)graph");
    for(var n = a[e], i = n[1], s = n[2], o = t[i], l = t[s], u = a, f = u.length - 1; f >= 0; f--){
        var c = u[f], d = c[1], g = c[2];
        (t[d] === o && t[g] === l || t[d] === l && t[g] === o) && u.splice(f, 1);
    }
    for(var h = 0; h < u.length; h++){
        var m = u[h];
        m[1] === l ? (u[h] = /*#__PURE__*/ m.slice(), u[h][1] = o) : m[2] === l && (u[h] = /*#__PURE__*/ m.slice(), u[h][2] = o);
    }
    for(var p = 0; p < t.length; p++)t[p] === l && (t[p] = o);
    return u;
}, "collapse"), gi = /*#__PURE__*/ m$1(function(e, t, a, n) {
    for(; a > n;){
        var i = /*#__PURE__*/ Math.floor(Math.random() * t.length);
        t = /*#__PURE__*/ pd(i, e, t), a--;
    }
    return t;
}, "contractUntil"), yd = {
    kargerStein: /*#__PURE__*/ m$1(function() {
        var e = this, t = /*#__PURE__*/ this.byGroup(), a = t.nodes, n = t.edges;
        n.unmergeBy(function(N) {
            return N.isLoop();
        });
        var i = a.length, s = n.length, o = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ Math.pow(Math.log(i) / Math.LN2, 2)), l = /*#__PURE__*/ Math.floor(i / gd);
        if (i < 2) {
            Ue("At least 2 nodes are required for Karger-Stein algorithm");
            return;
        }
        for(var u = [], f = 0; f < s; f++){
            var c = n[f];
            u.push([
                f,
                /*#__PURE__*/ a.indexOf(/*#__PURE__*/ c.source()),
                /*#__PURE__*/ a.indexOf(/*#__PURE__*/ c.target())
            ]);
        }
        for(var d = 1 / 0, g = [], h = new Array(i), m = new Array(i), p = new Array(i), y = /*#__PURE__*/ m$1(function(q, H) {
            for(var z = 0; z < i; z++)H[z] = q[z];
        }, "copyNodesMap"), b1 = 0; b1 <= o; b1++){
            for(var w = 0; w < i; w++)m[w] = w;
            var x = /*#__PURE__*/ gi(m, /*#__PURE__*/ u.slice(), i, l), C = /*#__PURE__*/ x.slice();
            y(m, p);
            var T = /*#__PURE__*/ gi(m, x, l, 2), E = /*#__PURE__*/ gi(p, C, l, 2);
            T.length <= E.length && T.length < d ? (d = T.length, g = T, y(m, h)) : E.length <= T.length && E.length < d && (d = E.length, g = E, y(p, h));
        }
        for(var S = /*#__PURE__*/ this.spawn(/*#__PURE__*/ g.map(function(N) {
            return n[N[0]];
        })), D = /*#__PURE__*/ this.spawn(), B = /*#__PURE__*/ this.spawn(), P = h[0], A = 0; A < h.length; A++){
            var R = h[A], M = a[A];
            R === P ? D.merge(M) : B.merge(M);
        }
        var I = /*#__PURE__*/ m$1(function(q) {
            var H = /*#__PURE__*/ e.spawn();
            return q.forEach(function(z) {
                H.merge(z), z.connectedEdges().forEach(function(V) {
                    e.contains(V) && !S.contains(V) && H.merge(V);
                });
            }), H;
        }, "constructComponent"), O = [
            /*#__PURE__*/ I(D),
            /*#__PURE__*/ I(B)
        ], L = {
            cut: S,
            components: O,
            partition1: D,
            partition2: B
        };
        return L;
    }, "kargerStein")
}, pi, md = /*#__PURE__*/ m$1(function(e) {
    return {
        x: e.x,
        y: e.y
    };
}, "copyPosition"), Nn = /*#__PURE__*/ m$1(function(e, t, a) {
    return {
        x: e.x * t + a.x,
        y: e.y * t + a.y
    };
}, "modelToRenderedPosition"), mv = /*#__PURE__*/ m$1(function(e, t, a) {
    return {
        x: (e.x - a.x) / t,
        y: (e.y - a.y) / t
    };
}, "renderedToModelPosition"), $t = /*#__PURE__*/ m$1(function(e) {
    return {
        x: e[0],
        y: e[1]
    };
}, "array2point"), bd = /*#__PURE__*/ m$1(function(e) {
    for(var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = t; i < a; i++){
        var s = e[i];
        isFinite(s) && (n = /*#__PURE__*/ Math.min(s, n));
    }
    return n;
}, "min"), wd = /*#__PURE__*/ m$1(function(e) {
    for(var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = t; i < a; i++){
        var s = e[i];
        isFinite(s) && (n = /*#__PURE__*/ Math.max(s, n));
    }
    return n;
}, "max"), xd = /*#__PURE__*/ m$1(function(e) {
    for(var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = t; s < a; s++){
        var o = e[s];
        isFinite(o) && (n += o, i++);
    }
    return n / i;
}, "mean"), Ed = /*#__PURE__*/ m$1(function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
    n ? e = /*#__PURE__*/ e.slice(t, a) : (a < e.length && e.splice(a, e.length - a), t > 0 && e.splice(0, t));
    for(var o = 0, l = e.length - 1; l >= 0; l--){
        var u = e[l];
        s ? isFinite(u) || (e[l] = -1 / 0, o++) : e.splice(l, 1);
    }
    i && e.sort(function(d, g) {
        return d - g;
    });
    var f = e.length, c = /*#__PURE__*/ Math.floor(f / 2);
    return f % 2 !== 0 ? e[c + 1 + o] : (e[c - 1 + o] + e[c + o]) / 2;
}, "median"), Cd = /*#__PURE__*/ m$1(function(e) {
    return Math.PI * e / 180;
}, "deg2rad"), Za = /*#__PURE__*/ m$1(function(e, t) {
    return Math.atan2(t, e) - Math.PI / 2;
}, "getAngleFromDisp"), to = Math.log2 || function(r) {
    return Math.log(r) / Math.log(2);
}, ao = /*#__PURE__*/ m$1(function(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0;
}, "signum"), At = /*#__PURE__*/ m$1(function(e, t) {
    return Math.sqrt(/*#__PURE__*/ Tt(e, t));
}, "dist"), Tt = /*#__PURE__*/ m$1(function(e, t) {
    var a = t.x - e.x, n = t.y - e.y;
    return a * a + n * n;
}, "sqdist"), Td = /*#__PURE__*/ m$1(function(e) {
    for(var t = e.length, a = 0, n = 0; n < t; n++)a += e[n];
    for(var i = 0; i < t; i++)e[i] = e[i] / a;
    return e;
}, "inPlaceSumNormalize"), or = /*#__PURE__*/ m$1(function(e, t, a, n) {
    return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * t + n * n * a;
}, "qbezierAt"), Xt = /*#__PURE__*/ m$1(function(e, t, a, n) {
    return {
        x: /*#__PURE__*/ or(e.x, t.x, a.x, n),
        y: /*#__PURE__*/ or(e.y, t.y, a.y, n)
    };
}, "qbezierPtAt"), Sd = /*#__PURE__*/ m$1(function(e, t, a, n) {
    var i = {
        x: t.x - e.x,
        y: t.y - e.y
    }, s = /*#__PURE__*/ At(e, t), o = {
        x: i.x / s,
        y: i.y / s
    };
    return a = a ?? 0, n = n ?? a * s, {
        x: e.x + o.x * n,
        y: e.y + o.y * n
    };
}, "lineAt"), Da = /*#__PURE__*/ m$1(function(e, t, a) {
    return Math.max(e, /*#__PURE__*/ Math.min(a, t));
}, "bound"), xr = /*#__PURE__*/ m$1(function(e) {
    if (e == null) return {
        x1: 1 / 0,
        y1: 1 / 0,
        x2: -1 / 0,
        y2: -1 / 0,
        w: 0,
        h: 0
    };
    if (e.x1 != null && e.y1 != null) {
        if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1) return {
            x1: e.x1,
            y1: e.y1,
            x2: e.x2,
            y2: e.y2,
            w: e.x2 - e.x1,
            h: e.y2 - e.y1
        };
        if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0) return {
            x1: e.x1,
            y1: e.y1,
            x2: e.x1 + e.w,
            y2: e.y1 + e.h,
            w: e.w,
            h: e.h
        };
    }
}, "makeBoundingBox"), kd = /*#__PURE__*/ m$1(function(e) {
    return {
        x1: e.x1,
        x2: e.x2,
        w: e.w,
        y1: e.y1,
        y2: e.y2,
        h: e.h
    };
}, "copyBoundingBox"), Dd = /*#__PURE__*/ m$1(function(e) {
    e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, "clearBoundingBox"), Bd = /*#__PURE__*/ m$1(function(e, t) {
    e.x1 = /*#__PURE__*/ Math.min(e.x1, t.x1), e.x2 = /*#__PURE__*/ Math.max(e.x2, t.x2), e.w = e.x2 - e.x1, e.y1 = /*#__PURE__*/ Math.min(e.y1, t.y1), e.y2 = /*#__PURE__*/ Math.max(e.y2, t.y2), e.h = e.y2 - e.y1;
}, "updateBoundingBox"), bv = /*#__PURE__*/ m$1(function(e, t, a) {
    e.x1 = /*#__PURE__*/ Math.min(e.x1, t), e.x2 = /*#__PURE__*/ Math.max(e.x2, t), e.w = e.x2 - e.x1, e.y1 = /*#__PURE__*/ Math.min(e.y1, a), e.y2 = /*#__PURE__*/ Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, "expandBoundingBoxByPoint"), ln = /*#__PURE__*/ m$1(function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return e.x1 -= t, e.x2 += t, e.y1 -= t, e.y2 += t, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, "expandBoundingBox"), vn = /*#__PURE__*/ m$1(function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [
        0
    ], a, n, i, s;
    if (t.length === 1) a = n = i = s = t[0];
    else if (t.length === 2) a = i = t[0], s = n = t[1];
    else if (t.length === 4) {
        var o = /*#__PURE__*/ je(t, 4);
        a = o[0], n = o[1], i = o[2], s = o[3];
    }
    return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, "expandBoundingBoxSides"), Ko = /*#__PURE__*/ m$1(function(e, t) {
    e.x1 = t.x1, e.y1 = t.y1, e.x2 = t.x2, e.y2 = t.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, "assignBoundingBox"), no = /*#__PURE__*/ m$1(function(e, t) {
    return !(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
}, "boundingBoxesIntersect"), it = /*#__PURE__*/ m$1(function(e, t, a) {
    return e.x1 <= t && t <= e.x2 && e.y1 <= a && a <= e.y2;
}, "inBoundingBox"), Xo = /*#__PURE__*/ m$1(function(e, t) {
    return it(e, t.x, t.y);
}, "pointInBoundingBox"), wv = /*#__PURE__*/ m$1(function(e, t) {
    return it(e, t.x1, t.y1) && it(e, t.x2, t.y2);
}, "boundingBoxInBoundingBox"), Pd = (pi = Math.hypot) !== null && pi !== void 0 ? pi : function(r, e) {
    return Math.sqrt(r * r + e * e);
};
function Ad(r, e) {
    if (r.length < 3) throw new Error("Need at least 3 vertices");
    var t = /*#__PURE__*/ m$1(function(S, D) {
        return {
            x: S.x + D.x,
            y: S.y + D.y
        };
    }, "add"), a = /*#__PURE__*/ m$1(function(S, D) {
        return {
            x: S.x - D.x,
            y: S.y - D.y
        };
    }, "sub"), n = /*#__PURE__*/ m$1(function(S, D) {
        return {
            x: S.x * D,
            y: S.y * D
        };
    }, "scale"), i = /*#__PURE__*/ m$1(function(S, D) {
        return S.x * D.y - S.y * D.x;
    }, "cross"), s = /*#__PURE__*/ m$1(function(S) {
        var D = /*#__PURE__*/ Pd(S.x, S.y);
        return D === 0 ? {
            x: 0,
            y: 0
        } : {
            x: S.x / D,
            y: S.y / D
        };
    }, "normalize"), o = /*#__PURE__*/ m$1(function(S) {
        for(var D = 0, B = 0; B < S.length; B++){
            var P = S[B], A = S[(B + 1) % S.length];
            D += P.x * A.y - A.x * P.y;
        }
        return D / 2;
    }, "signedArea"), l = /*#__PURE__*/ m$1(function(S, D, B, P) {
        var A = /*#__PURE__*/ a(D, S), R = /*#__PURE__*/ a(P, B), M = /*#__PURE__*/ i(A, R);
        if (Math.abs(M) < 1e-9) return t(S, /*#__PURE__*/ n(A, .5));
        var I = i(/*#__PURE__*/ a(B, S), R) / M;
        return t(S, /*#__PURE__*/ n(A, I));
    }, "intersectLines"), u = /*#__PURE__*/ r.map(function(E) {
        return {
            x: E.x,
            y: E.y
        };
    });
    o(u) < 0 && u.reverse();
    for(var f = u.length, c = [], d = 0; d < f; d++){
        var g = u[d], h = u[(d + 1) % f], m = /*#__PURE__*/ a(h, g), p = /*#__PURE__*/ s({
            x: m.y,
            y: -m.x
        });
        c.push(p);
    }
    for(var y = /*#__PURE__*/ c.map(function(E, S) {
        var D = /*#__PURE__*/ t(u[S], /*#__PURE__*/ n(E, e)), B = /*#__PURE__*/ t(u[(S + 1) % f], /*#__PURE__*/ n(E, e));
        return {
            p1: D,
            p2: B
        };
    }), b1 = [], w = 0; w < f; w++){
        var x = y[(w - 1 + f) % f], C = y[w], T = /*#__PURE__*/ l(x.p1, x.p2, C.p1, C.p2);
        b1.push(T);
    }
    return b1;
}
m$1(Ad, "inflatePolygon");
function Rd(r, e, t, a, n, i) {
    var s = /*#__PURE__*/ qd(r, e, t, a, n), o = /*#__PURE__*/ Ad(s, i), l = /*#__PURE__*/ xr();
    return o.forEach(function(u) {
        return bv(l, u.x, u.y);
    }), l;
}
m$1(Rd, "miterBox");
var xv = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o) {
    var l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", u = l === "auto" ? ft(i, s) : l, f = i / 2, c = s / 2;
    u = /*#__PURE__*/ Math.min(u, f, c);
    var d = u !== f, g = u !== c, h;
    if (d) {
        var m = a - f + u - o, p = n - c - o, y = a + f - u + o, b1 = p;
        if (h = /*#__PURE__*/ st(e, t, a, n, m, p, y, b1, false), h.length > 0) return h;
    }
    if (g) {
        var w = a + f + o, x = n - c + u - o, C = w, T = n + c - u + o;
        if (h = /*#__PURE__*/ st(e, t, a, n, w, x, C, T, false), h.length > 0) return h;
    }
    if (d) {
        var E = a - f + u - o, S = n + c + o, D = a + f - u + o, B = S;
        if (h = /*#__PURE__*/ st(e, t, a, n, E, S, D, B, false), h.length > 0) return h;
    }
    if (g) {
        var P = a - f - o, A = n - c + u - o, R = P, M = n + c - u + o;
        if (h = /*#__PURE__*/ st(e, t, a, n, P, A, R, M, false), h.length > 0) return h;
    }
    var I;
    {
        var O = a - f + u, L = n - c + u;
        if (I = /*#__PURE__*/ ma(e, t, a, n, O, L, u + o), I.length > 0 && I[0] <= O && I[1] <= L) return [
            I[0],
            I[1]
        ];
    }
    {
        var N = a + f - u, q = n - c + u;
        if (I = /*#__PURE__*/ ma(e, t, a, n, N, q, u + o), I.length > 0 && I[0] >= N && I[1] <= q) return [
            I[0],
            I[1]
        ];
    }
    {
        var H = a + f - u, z = n + c - u;
        if (I = /*#__PURE__*/ ma(e, t, a, n, H, z, u + o), I.length > 0 && I[0] >= H && I[1] >= z) return [
            I[0],
            I[1]
        ];
    }
    {
        var V = a - f + u, K = n + c - u;
        if (I = /*#__PURE__*/ ma(e, t, a, n, V, K, u + o), I.length > 0 && I[0] <= V && I[1] >= K) return [
            I[0],
            I[1]
        ];
    }
    return [];
}, "roundRectangleIntersectLine"), Md = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o) {
    var l = o, u = /*#__PURE__*/ Math.min(a, i), f = /*#__PURE__*/ Math.max(a, i), c = /*#__PURE__*/ Math.min(n, s), d = /*#__PURE__*/ Math.max(n, s);
    return u - l <= e && e <= f + l && c - l <= t && t <= d + l;
}, "inLineVicinity"), Ld = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l, u) {
    var f = {
        x1: Math.min(a, o, i) - u,
        x2: Math.max(a, o, i) + u,
        y1: Math.min(n, l, s) - u,
        y2: Math.max(n, l, s) + u
    };
    return !(e < f.x1 || e > f.x2 || t < f.y1 || t > f.y2);
}, "inBezierVicinity"), Id = /*#__PURE__*/ m$1(function(e, t, a, n) {
    a -= n;
    var i = t * t - 4 * e * a;
    if (i < 0) return [];
    var s = /*#__PURE__*/ Math.sqrt(i), o = 2 * e, l = (-t + s) / o, u = (-t - s) / o;
    return [
        l,
        u
    ];
}, "solveQuadratic"), Od = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    var s = 1e-5;
    e === 0 && (e = s), t /= e, a /= e, n /= e;
    var o, l, u, f, c, d, g, h;
    if (l = (3 * a - t * t) / 9, u = -(27 * n) + t * (9 * a - 2 * (t * t)), u /= 54, o = l * l * l + u * u, i[1] = 0, g = t / 3, o > 0) {
        c = u + Math.sqrt(o), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), d = u - Math.sqrt(o), d = d < 0 ? -Math.pow(-d, 1 / 3) : Math.pow(d, 1 / 3), i[0] = -g + c + d, g += (c + d) / 2, i[4] = i[2] = -g, g = Math.sqrt(3) * (-d + c) / 2, i[3] = g, i[5] = -g;
        return;
    }
    if (i[5] = i[3] = 0, o === 0) {
        h = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), i[0] = -g + 2 * h, i[4] = i[2] = -(h + g);
        return;
    }
    l = -l, f = l * l * l, f = /*#__PURE__*/ Math.acos(u / Math.sqrt(f)), h = 2 * Math.sqrt(l), i[0] = -g + h * Math.cos(f / 3), i[2] = -g + h * Math.cos((f + 2 * Math.PI) / 3), i[4] = -g + h * Math.cos((f + 4 * Math.PI) / 3);
}, "solveCubic"), Nd = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
    var u = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * l + 4 * s * s - 4 * s * l + l * l, f = 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * l - 6 * s * s + 3 * s * l, c = 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * l - n * t + 2 * s * s + 2 * s * t - l * t, d = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * t - s * t, g = [];
    Od(u, f, c, d, g);
    for(var h = 1e-7, m = [], p = 0; p < 6; p += 2)Math.abs(g[p + 1]) < h && g[p] >= 0 && g[p] <= 1 && m.push(g[p]);
    m.push(1), m.push(0);
    for(var y = -1, b1, w, x, C = 0; C < m.length; C++)b1 = Math.pow(1 - m[C], 2) * a + 2 * (1 - m[C]) * m[C] * i + m[C] * m[C] * o, w = Math.pow(1 - m[C], 2) * n + 2 * (1 - m[C]) * m[C] * s + m[C] * m[C] * l, x = Math.pow(b1 - e, 2) + Math.pow(w - t, 2), y >= 0 ? x < y && (y = x) : y = x;
    return y;
}, "sqdistToQuadraticBezier"), zd = /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
    var o = [
        e - a,
        t - n
    ], l = [
        i - a,
        s - n
    ], u = l[0] * l[0] + l[1] * l[1], f = o[0] * o[0] + o[1] * o[1], c = o[0] * l[0] + o[1] * l[1], d = c * c / u;
    return c < 0 ? f : d > u ? (e - i) * (e - i) + (t - s) * (t - s) : f - d;
}, "sqdistToFiniteLine"), kr = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n, i, s, o, l, u = 0, f = 0; f < a.length / 2; f++)if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e)) if (n >= e && e >= s || n <= e && e <= s) l = (e - n) / (s - n) * (o - i) + i, l > t && u++;
    else continue;
    return u % 2 !== 0;
}, "pointInsidePolygonPoints"), Qr = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l, u) {
    var f = new Array(a.length), c;
    l[0] != null ? (c = /*#__PURE__*/ Math.atan(l[1] / l[0]), l[0] < 0 ? c = c + Math.PI / 2 : c = -c - Math.PI / 2) : c = l;
    for(var d = /*#__PURE__*/ Math.cos(-c), g = /*#__PURE__*/ Math.sin(-c), h = 0; h < f.length / 2; h++)f[h * 2] = s / 2 * (a[h * 2] * d - a[h * 2 + 1] * g), f[h * 2 + 1] = o / 2 * (a[h * 2 + 1] * d + a[h * 2] * g), f[h * 2] += n, f[h * 2 + 1] += i;
    var m;
    if (u > 0) {
        var p = /*#__PURE__*/ Tn(f, -u);
        m = /*#__PURE__*/ Cn(p);
    } else m = f;
    return kr(e, t, m);
}, "pointInsidePolygon"), Fd = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
    for(var u = new Array(a.length * 2), f = 0; f < l.length; f++){
        var c = l[f];
        u[f * 4 + 0] = c.startX, u[f * 4 + 1] = c.startY, u[f * 4 + 2] = c.stopX, u[f * 4 + 3] = c.stopY;
        var d = Math.pow(c.cx - e, 2) + Math.pow(c.cy - t, 2);
        if (d <= Math.pow(c.radius, 2)) return true;
    }
    return kr(e, t, u);
}, "pointInsideRoundPolygon"), Cn = /*#__PURE__*/ m$1(function(e) {
    for(var t = new Array(e.length / 2), a, n, i, s, o, l, u, f, c = 0; c < e.length / 4; c++){
        a = e[c * 4], n = e[c * 4 + 1], i = e[c * 4 + 2], s = e[c * 4 + 3], c < e.length / 4 - 1 ? (o = e[(c + 1) * 4], l = e[(c + 1) * 4 + 1], u = e[(c + 1) * 4 + 2], f = e[(c + 1) * 4 + 3]) : (o = e[0], l = e[1], u = e[2], f = e[3]);
        var d = /*#__PURE__*/ st(a, n, i, s, o, l, u, f, true);
        t[c * 2] = d[0], t[c * 2 + 1] = d[1];
    }
    return t;
}, "joinLines"), Tn = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = new Array(e.length * 2), n, i, s, o, l = 0; l < e.length / 2; l++){
        n = e[l * 2], i = e[l * 2 + 1], l < e.length / 2 - 1 ? (s = e[(l + 1) * 2], o = e[(l + 1) * 2 + 1]) : (s = e[0], o = e[1]);
        var u = o - i, f = -(s - n), c = /*#__PURE__*/ Math.sqrt(u * u + f * f), d = u / c, g = f / c;
        a[l * 4] = n + d * t, a[l * 4 + 1] = i + g * t, a[l * 4 + 2] = s + d * t, a[l * 4 + 3] = o + g * t;
    }
    return a;
}, "expandPolygon"), Vd = /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
    var o = a - e, l = n - t;
    o /= i, l /= s;
    var u = /*#__PURE__*/ Math.sqrt(o * o + l * l), f = u - 1;
    if (f < 0) return [];
    var c = f / u;
    return [
        (a - e) * c + e,
        (n - t) * c + t
    ];
}, "intersectLineEllipse"), Bt = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o) {
    return e -= i, t -= s, e /= a / 2 + o, t /= n / 2 + o, e * e + t * t <= 1;
}, "checkInEllipse"), ma = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o) {
    var l = [
        a - e,
        n - t
    ], u = [
        e - i,
        t - s
    ], f = l[0] * l[0] + l[1] * l[1], c = 2 * (u[0] * l[0] + u[1] * l[1]), d = u[0] * u[0] + u[1] * u[1] - o * o, g = c * c - 4 * f * d;
    if (g < 0) return [];
    var h = (-c + Math.sqrt(g)) / (2 * f), m = (-c - Math.sqrt(g)) / (2 * f), p = /*#__PURE__*/ Math.min(h, m), y = /*#__PURE__*/ Math.max(h, m), b1 = [];
    if (p >= 0 && p <= 1 && b1.push(p), y >= 0 && y <= 1 && b1.push(y), b1.length === 0) return [];
    var w = b1[0] * l[0] + e, x = b1[0] * l[1] + t;
    if (b1.length > 1) {
        if (b1[0] == b1[1]) return [
            w,
            x
        ];
        var C = b1[1] * l[0] + e, T = b1[1] * l[1] + t;
        return [
            w,
            x,
            C,
            T
        ];
    } else return [
        w,
        x
    ];
}, "intersectLineCircle"), yi = /*#__PURE__*/ m$1(function(e, t, a) {
    return t <= e && e <= a || a <= e && e <= t ? e : e <= t && t <= a || a <= t && t <= e ? t : a;
}, "midOfThree"), st = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l, u) {
    var f = e - i, c = a - e, d = o - i, g = t - s, h = n - t, m = l - s, p = d * g - m * f, y = c * g - h * f, b1 = m * c - d * h;
    if (b1 !== 0) {
        var w = p / b1, x = y / b1, C = .001, T = 0 - C, E = 1 + C;
        return T <= w && w <= E && T <= x && x <= E ? [
            e + w * c,
            t + w * h
        ] : u ? [
            e + w * c,
            t + w * h
        ] : [];
    } else return p === 0 || y === 0 ? yi(e, a, o) === o ? [
        o,
        l
    ] : yi(e, a, i) === i ? [
        i,
        s
    ] : yi(i, o, a) === a ? [
        a,
        n
    ] : [] : [];
}, "finiteLinesIntersect"), qd = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    var s = [], o = n / 2, l = i / 2, u = t, f = a;
    s.push({
        x: u + o * e[0],
        y: f + l * e[1]
    });
    for(var c = 1; c < e.length / 2; c++)s.push({
        x: u + o * e[c * 2],
        y: f + l * e[c * 2 + 1]
    });
    return s;
}, "transformPoints"), Ba = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
    var u = [], f, c = new Array(a.length), d = true;
    s == null && (d = false);
    var g;
    if (d) {
        for(var h = 0; h < c.length / 2; h++)c[h * 2] = a[h * 2] * s + n, c[h * 2 + 1] = a[h * 2 + 1] * o + i;
        if (l > 0) {
            var m = /*#__PURE__*/ Tn(c, -l);
            g = /*#__PURE__*/ Cn(m);
        } else g = c;
    } else g = a;
    for(var p, y, b1, w, x = 0; x < g.length / 2; x++)p = g[x * 2], y = g[x * 2 + 1], x < g.length / 2 - 1 ? (b1 = g[(x + 1) * 2], w = g[(x + 1) * 2 + 1]) : (b1 = g[0], w = g[1]), f = /*#__PURE__*/ st(e, t, n, i, p, y, b1, w), f.length !== 0 && u.push(f[0], f[1]);
    return u;
}, "polygonIntersectLine"), _d = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l, u) {
    var f = [], c, d = new Array(a.length * 2);
    u.forEach(function(b1, w) {
        w === 0 ? (d[d.length - 2] = b1.startX, d[d.length - 1] = b1.startY) : (d[w * 4 - 2] = b1.startX, d[w * 4 - 1] = b1.startY), d[w * 4] = b1.stopX, d[w * 4 + 1] = b1.stopY, c = /*#__PURE__*/ ma(e, t, n, i, b1.cx, b1.cy, b1.radius), c.length !== 0 && f.push(c[0], c[1]);
    });
    for(var g = 0; g < d.length / 4; g++)c = /*#__PURE__*/ st(e, t, n, i, d[g * 4], d[g * 4 + 1], d[g * 4 + 2], d[g * 4 + 3], false), c.length !== 0 && f.push(c[0], c[1]);
    if (f.length > 2) {
        for(var h = [
            f[0],
            f[1]
        ], m = Math.pow(h[0] - e, 2) + Math.pow(h[1] - t, 2), p = 1; p < f.length / 2; p++){
            var y = Math.pow(f[p * 2] - e, 2) + Math.pow(f[p * 2 + 1] - t, 2);
            y <= m && (h[0] = f[p * 2], h[1] = f[p * 2 + 1], m = y);
        }
        return h;
    }
    return f;
}, "roundPolygonIntersectLine"), Qa = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = [
        e[0] - t[0],
        e[1] - t[1]
    ], i = /*#__PURE__*/ Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
    return s < 0 && (s = 1e-5), [
        t[0] + s * n[0],
        t[1] + s * n[1]
    ];
}, "shortenIntersection"), wr = /*#__PURE__*/ m$1(function(e, t) {
    var a = /*#__PURE__*/ As(e, t);
    return a = /*#__PURE__*/ Ev(a), a;
}, "generateUnitNgonPointsFitToSquare"), Ev = /*#__PURE__*/ m$1(function(e) {
    for(var t, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, l = -1 / 0, u = 0; u < n; u++)t = e[2 * u], a = e[2 * u + 1], i = /*#__PURE__*/ Math.min(i, t), o = /*#__PURE__*/ Math.max(o, t), s = /*#__PURE__*/ Math.min(s, a), l = /*#__PURE__*/ Math.max(l, a);
    for(var f = 2 / (o - i), c = 2 / (l - s), d = 0; d < n; d++)t = e[2 * d] = e[2 * d] * f, a = e[2 * d + 1] = e[2 * d + 1] * c, i = /*#__PURE__*/ Math.min(i, t), o = /*#__PURE__*/ Math.max(o, t), s = /*#__PURE__*/ Math.min(s, a), l = /*#__PURE__*/ Math.max(l, a);
    if (s < -1) for(var g = 0; g < n; g++)a = e[2 * g + 1] = e[2 * g + 1] + (-1 - s);
    return e;
}, "fitPolygonToSquare"), As = /*#__PURE__*/ m$1(function(e, t) {
    var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
    n += t;
    for(var i = new Array(e * 2), s, o = 0; o < e; o++)s = o * a + n, i[2 * o] = /*#__PURE__*/ Math.cos(s), i[2 * o + 1] = /*#__PURE__*/ Math.sin(-s);
    return i;
}, "generateUnitNgonPoints"), ft = /*#__PURE__*/ m$1(function(e, t) {
    return Math.min(e / 4, t / 4, 8);
}, "getRoundRectangleRadius"), Cv = /*#__PURE__*/ m$1(function(e, t) {
    return Math.min(e / 10, t / 10, 8);
}, "getRoundPolygonRadius"), io = /*#__PURE__*/ m$1(function() {
    return 8;
}, "getCutRectangleCornerLength"), Gd = /*#__PURE__*/ m$1(function(e, t, a) {
    return [
        e - 2 * t + a,
        2 * (t - e),
        e
    ];
}, "bezierPtsToQuadCoeff"), Rs = /*#__PURE__*/ m$1(function(e, t) {
    return {
        heightOffset: /*#__PURE__*/ Math.min(15, .05 * t),
        widthOffset: /*#__PURE__*/ Math.min(100, .25 * e),
        ctrlPtOffsetPct: .05
    };
}, "getBarrelCurveConstants");
function mi(r, e) {
    function t(c) {
        for(var d = [], g = 0; g < c.length; g++){
            var h = c[g], m = c[(g + 1) % c.length], p = {
                x: m.x - h.x,
                y: m.y - h.y
            }, y = {
                x: -p.y,
                y: p.x
            }, b1 = /*#__PURE__*/ Math.sqrt(y.x * y.x + y.y * y.y);
            d.push({
                x: y.x / b1,
                y: y.y / b1
            });
        }
        return d;
    }
    m$1(t, "getAxes");
    function a(c, d) {
        var g = 1 / 0, h = -1 / 0, m = /*#__PURE__*/ Dr(c), p;
        try {
            for(m.s(); !(p = /*#__PURE__*/ m.n()).done;){
                var y = p.value, b1 = y.x * d.x + y.y * d.y;
                g = /*#__PURE__*/ Math.min(g, b1), h = /*#__PURE__*/ Math.max(h, b1);
            }
        } catch (w) {
            m.e(w);
        } finally{
            m.f();
        }
        return {
            min: g,
            max: h
        };
    }
    m$1(a, "project");
    function n(c, d) {
        return !(c.max < d.min || d.max < c.min);
    }
    m$1(n, "overlaps");
    var i = /*#__PURE__*/ [].concat(/*#__PURE__*/ bn(/*#__PURE__*/ t(r)), /*#__PURE__*/ bn(/*#__PURE__*/ t(e))), s = /*#__PURE__*/ Dr(i), o;
    try {
        for(s.s(); !(o = /*#__PURE__*/ s.n()).done;){
            var l = o.value, u = /*#__PURE__*/ a(r, l), f = /*#__PURE__*/ a(e, l);
            if (!n(u, f)) return !1;
        }
    } catch (c) {
        s.e(c);
    } finally{
        s.f();
    }
    return true;
}
m$1(mi, "satPolygonIntersection");
var Hd = /*#__PURE__*/ dr({
    dampingFactor: .8,
    precision: 1e-6,
    iterations: 200,
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight")
}), Wd = {
    pageRank: /*#__PURE__*/ m$1(function(e) {
        for(var t = /*#__PURE__*/ Hd(e), a = t.dampingFactor, n = t.precision, i = t.iterations, s = t.weight, o = this._private.cy, l = /*#__PURE__*/ this.byGroup(), u = l.nodes, f = l.edges, c = u.length, d = c * c, g = f.length, h = new Array(d), m = new Array(c), p = (1 - a) / c, y = 0; y < c; y++){
            for(var b1 = 0; b1 < c; b1++){
                var w = y * c + b1;
                h[w] = 0;
            }
            m[y] = 0;
        }
        for(var x = 0; x < g; x++){
            var C = f[x], T = /*#__PURE__*/ C.data("source"), E = /*#__PURE__*/ C.data("target");
            if (T !== E) {
                var S = /*#__PURE__*/ u.indexOfId(T), D = /*#__PURE__*/ u.indexOfId(E), B = /*#__PURE__*/ s(C), P = D * c + S;
                h[P] += B, m[S] += B;
            }
        }
        for(var A = 1 / c + p, R = 0; R < c; R++)if (m[R] === 0) for(var M = 0; M < c; M++){
            var I = M * c + R;
            h[I] = A;
        }
        else for(var O = 0; O < c; O++){
            var L = O * c + R;
            h[L] = h[L] / m[R] + p;
        }
        for(var N = new Array(c), q = new Array(c), H, z = 0; z < c; z++)N[z] = 1;
        for(var V = 0; V < i; V++){
            for(var K = 0; K < c; K++)q[K] = 0;
            for(var J = 0; J < c; J++)for(var X = 0; X < c; X++){
                var ee = J * c + X;
                q[J] += h[ee] * N[X];
            }
            Td(q), H = N, N = q, q = H;
            for(var te = 0, ie = 0; ie < c; ie++){
                var j = H[ie] - N[ie];
                te += j * j;
            }
            if (te < n) break;
        }
        var F = {
            rank: /*#__PURE__*/ m$1(function(W) {
                return W = o.collection(W)[0], N[u.indexOf(W)];
            }, "rank")
        };
        return F;
    }, "pageRank")
}, Yo = /*#__PURE__*/ dr({
    root: null,
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    directed: false,
    alpha: 0
}), Yt = {
    degreeCentralityNormalized: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ Yo(e);
        var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = a.length;
        if (e.directed) {
            for(var f = {}, c = {}, d = 0, g = 0, h = 0; h < n; h++){
                var m = a[h], p = /*#__PURE__*/ m.id();
                e.root = m;
                var y = /*#__PURE__*/ this.degreeCentrality(e);
                d < y.indegree && (d = y.indegree), g < y.outdegree && (g = y.outdegree), f[p] = y.indegree, c[p] = y.outdegree;
            }
            return {
                indegree: /*#__PURE__*/ m$1(function(w) {
                    return d == 0 ? 0 : (pe(w) && (w = /*#__PURE__*/ t.filter(w)), f[w.id()] / d);
                }, "indegree"),
                outdegree: /*#__PURE__*/ m$1(function(w) {
                    return g === 0 ? 0 : (pe(w) && (w = /*#__PURE__*/ t.filter(w)), c[w.id()] / g);
                }, "outdegree")
            };
        } else {
            for(var i = {}, s = 0, o = 0; o < n; o++){
                var l = a[o];
                e.root = l;
                var u = /*#__PURE__*/ this.degreeCentrality(e);
                s < u.degree && (s = u.degree), i[l.id()] = u.degree;
            }
            return {
                degree: /*#__PURE__*/ m$1(function(w) {
                    return s === 0 ? 0 : (pe(w) && (w = /*#__PURE__*/ t.filter(w)), i[w.id()] / s);
                }, "degree")
            };
        }
    }, "degreeCentralityNormalized"),
    degreeCentrality: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ Yo(e);
        var t = /*#__PURE__*/ this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, l = n.alpha;
        if (i = t.collection(i)[0], o) {
            for(var g = /*#__PURE__*/ i.connectedEdges(), h = /*#__PURE__*/ g.filter(function(T) {
                return T.target().same(i) && a.has(T);
            }), m = /*#__PURE__*/ g.filter(function(T) {
                return T.source().same(i) && a.has(T);
            }), p = h.length, y = m.length, b1 = 0, w = 0, x = 0; x < h.length; x++)b1 += /*#__PURE__*/ s(h[x]);
            for(var C = 0; C < m.length; C++)w += /*#__PURE__*/ s(m[C]);
            return {
                indegree: Math.pow(p, 1 - l) * Math.pow(b1, l),
                outdegree: Math.pow(y, 1 - l) * Math.pow(w, l)
            };
        } else {
            for(var u = /*#__PURE__*/ i.connectedEdges().intersection(a), f = u.length, c = 0, d = 0; d < u.length; d++)c += /*#__PURE__*/ s(u[d]);
            return {
                degree: Math.pow(f, 1 - l) * Math.pow(c, l)
            };
        }
    }, "degreeCentrality")
};
Yt.dc = Yt.degreeCentrality;
Yt.dcn = Yt.degreeCentralityNormalised = Yt.degreeCentralityNormalized;
var Zo = /*#__PURE__*/ dr({
    harmonic: true,
    weight: /*#__PURE__*/ m$1(function() {
        return 1;
    }, "weight"),
    directed: false,
    root: null
}), Zt = {
    closenessCentralityNormalized: /*#__PURE__*/ m$1(function(e) {
        for(var t = /*#__PURE__*/ Zo(e), a = t.harmonic, n = t.weight, i = t.directed, s = /*#__PURE__*/ this.cy(), o = {}, l = 0, u = /*#__PURE__*/ this.nodes(), f = /*#__PURE__*/ this.floydWarshall({
            weight: n,
            directed: i
        }), c = 0; c < u.length; c++){
            for(var d = 0, g = u[c], h = 0; h < u.length; h++)if (c !== h) {
                var m = /*#__PURE__*/ f.distance(g, u[h]);
                a ? d += 1 / m : d += m;
            }
            a || (d = 1 / d), l < d && (l = d), o[g.id()] = d;
        }
        return {
            closeness: /*#__PURE__*/ m$1(function(y) {
                return l == 0 ? 0 : (pe(y) ? y = /*#__PURE__*/ s.filter(y)[0].id() : y = /*#__PURE__*/ y.id(), o[y] / l);
            }, "closeness")
        };
    }, "closenessCentralityNormalized"),
    closenessCentrality: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ Zo(e), a = t.root, n = t.weight, i = t.directed, s = t.harmonic;
        a = this.filter(a)[0];
        for(var o = /*#__PURE__*/ this.dijkstra({
            root: a,
            weight: n,
            directed: i
        }), l = 0, u = /*#__PURE__*/ this.nodes(), f = 0; f < u.length; f++){
            var c = u[f];
            if (!c.same(a)) {
                var d = /*#__PURE__*/ o.distanceTo(c);
                s ? l += 1 / d : l += d;
            }
        }
        return s ? l : 1 / l;
    }, "closenessCentrality")
};
Zt.cc = Zt.closenessCentrality;
Zt.ccn = Zt.closenessCentralityNormalised = Zt.closenessCentralityNormalized;
var $d = /*#__PURE__*/ dr({
    weight: null,
    directed: false
}), Ms = {
    betweennessCentrality: /*#__PURE__*/ m$1(function(e) {
        for(var t = /*#__PURE__*/ $d(e), a = t.directed, n = t.weight, i = n != null, s = /*#__PURE__*/ this.cy(), o = /*#__PURE__*/ this.nodes(), l = {}, u = {}, f = 0, c = {
            set: /*#__PURE__*/ m$1(function(w, x) {
                u[w] = x, x > f && (f = x);
            }, "set"),
            get: /*#__PURE__*/ m$1(function(w) {
                return u[w];
            }, "get")
        }, d = 0; d < o.length; d++){
            var g = o[d], h = /*#__PURE__*/ g.id();
            a ? l[h] = /*#__PURE__*/ g.outgoers().nodes() : l[h] = /*#__PURE__*/ g.openNeighborhood().nodes(), c.set(h, 0);
        }
        for(var m = /*#__PURE__*/ m$1(function() {
            for(var w = /*#__PURE__*/ o[p].id(), x = [], C = {}, T = {}, E = {}, S = new qa(function(J, X) {
                return E[J] - E[X];
            }), D = 0; D < o.length; D++){
                var B = /*#__PURE__*/ o[D].id();
                C[B] = [], T[B] = 0, E[B] = 1 / 0;
            }
            for(T[w] = 1, E[w] = 0, S.push(w); !S.empty();){
                var P = /*#__PURE__*/ S.pop();
                if (x.push(P), i) for(var A = 0; A < l[P].length; A++){
                    var R = l[P][A], M = /*#__PURE__*/ s.getElementById(P), I = void 0;
                    M.edgesTo(R).length > 0 ? I = M.edgesTo(R)[0] : I = R.edgesTo(M)[0];
                    var O = /*#__PURE__*/ n(I);
                    R = /*#__PURE__*/ R.id(), E[R] > E[P] + O && (E[R] = E[P] + O, S.nodes.indexOf(R) < 0 ? S.push(R) : S.updateItem(R), T[R] = 0, C[R] = []), E[R] == E[P] + O && (T[R] = T[R] + T[P], C[R].push(P));
                }
                else for(var L = 0; L < l[P].length; L++){
                    var N = /*#__PURE__*/ l[P][L].id();
                    E[N] == 1 / 0 && (S.push(N), E[N] = E[P] + 1), E[N] == E[P] + 1 && (T[N] = T[N] + T[P], C[N].push(P));
                }
            }
            for(var q = {}, H = 0; H < o.length; H++)q[o[H].id()] = 0;
            for(; x.length > 0;){
                for(var z = /*#__PURE__*/ x.pop(), V = 0; V < C[z].length; V++){
                    var K = C[z][V];
                    q[K] = q[K] + T[K] / T[z] * (1 + q[z]);
                }
                z != o[p].id() && c.set(z, c.get(z) + q[z]);
            }
        }, "_loop"), p = 0; p < o.length; p++)m();
        var y = {
            betweenness: /*#__PURE__*/ m$1(function(w) {
                var x = /*#__PURE__*/ s.collection(w).id();
                return c.get(x);
            }, "betweenness"),
            betweennessNormalized: /*#__PURE__*/ m$1(function(w) {
                if (f == 0) return 0;
                var x = /*#__PURE__*/ s.collection(w).id();
                return c.get(x) / f;
            }, "betweennessNormalized")
        };
        return y.betweennessNormalised = y.betweennessNormalized, y;
    }, "betweennessCentrality")
};
Ms.bc = Ms.betweennessCentrality;
var Ud = /*#__PURE__*/ dr({
    expandFactor: 2,
    inflateFactor: 2,
    multFactor: 1,
    maxIterations: 20,
    attributes: [
        function(r) {
            return 1;
        }
    ]
}), Kd = /*#__PURE__*/ m$1(function(e) {
    return Ud(e);
}, "setOptions"), Xd = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = 0, n = 0; n < t.length; n++)a += /*#__PURE__*/ t[n](e);
    return a;
}, "getSimilarity"), Yd = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = 0; n < t; n++)e[n * t + n] = a;
}, "addLoops"), Tv = /*#__PURE__*/ m$1(function(e, t) {
    for(var a, n = 0; n < t; n++){
        a = 0;
        for(var i = 0; i < t; i++)a += e[i * t + n];
        for(var s = 0; s < t; s++)e[s * t + n] = e[s * t + n] / a;
    }
}, "normalize"), Zd = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = new Array(a * a), i = 0; i < a; i++){
        for(var s = 0; s < a; s++)n[i * a + s] = 0;
        for(var o = 0; o < a; o++)for(var l = 0; l < a; l++)n[i * a + l] += e[i * a + o] * t[o * a + l];
    }
    return n;
}, "mmult"), Qd = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = /*#__PURE__*/ e.slice(0), i = 1; i < a; i++)e = /*#__PURE__*/ Zd(e, n, t);
    return e;
}, "expand"), Jd = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = new Array(t * t), i = 0; i < t * t; i++)n[i] = /*#__PURE__*/ Math.pow(e[i], a);
    return Tv(n, t), n;
}, "inflate"), jd = /*#__PURE__*/ m$1(function(e, t, a, n) {
    for(var i = 0; i < a; i++){
        var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(t[i] * Math.pow(10, n)) / Math.pow(10, n);
        if (s !== o) return false;
    }
    return true;
}, "hasConverged"), eh = /*#__PURE__*/ m$1(function(e, t, a, n) {
    for(var i = [], s = 0; s < t; s++){
        for(var o = [], l = 0; l < t; l++)Math.round(e[s * t + l] * 1e3) / 1e3 > 0 && o.push(a[l]);
        o.length !== 0 && i.push(/*#__PURE__*/ n.collection(o));
    }
    return i;
}, "assign"), rh = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = 0; a < e.length; a++)if (!t[a] || e[a].id() !== t[a].id()) return false;
    return true;
}, "isDuplicate"), th = /*#__PURE__*/ m$1(function(e) {
    for(var t = 0; t < e.length; t++)for(var a = 0; a < e.length; a++)t != a && rh(e[t], e[a]) && e.splice(a, 1);
    return e;
}, "removeDuplicates"), Qo = /*#__PURE__*/ m$1(function(e) {
    for(var t = /*#__PURE__*/ this.nodes(), a = /*#__PURE__*/ this.edges(), n = /*#__PURE__*/ this.cy(), i = /*#__PURE__*/ Kd(e), s = {}, o = 0; o < t.length; o++)s[t[o].id()] = o;
    for(var l = t.length, u = l * l, f = new Array(u), c, d = 0; d < u; d++)f[d] = 0;
    for(var g = 0; g < a.length; g++){
        var h = a[g], m = s[h.source().id()], p = s[h.target().id()], y = /*#__PURE__*/ Xd(h, i.attributes);
        f[m * l + p] += y, f[p * l + m] += y;
    }
    Yd(f, l, i.multFactor), Tv(f, l);
    for(var b1 = true, w = 0; b1 && w < i.maxIterations;)b1 = false, c = /*#__PURE__*/ Qd(f, l, i.expandFactor), f = /*#__PURE__*/ Jd(c, l, i.inflateFactor), jd(f, c, u, 4) || (b1 = true), w++;
    var x = /*#__PURE__*/ eh(f, l, t, n);
    return x = /*#__PURE__*/ th(x), x;
}, "markovClustering"), ah = {
    markovClustering: Qo,
    mcl: Qo
}, nh = /*#__PURE__*/ m$1(function(e) {
    return e;
}, "identity"), Sv = /*#__PURE__*/ m$1(function(e, t) {
    return Math.abs(t - e);
}, "absDiff"), Jo = /*#__PURE__*/ m$1(function(e, t, a) {
    return e + Sv(t, a);
}, "addAbsDiff"), jo = /*#__PURE__*/ m$1(function(e, t, a) {
    return e + Math.pow(a - t, 2);
}, "addSquaredDiff"), ih = /*#__PURE__*/ m$1(function(e) {
    return Math.sqrt(e);
}, "sqrt"), sh = /*#__PURE__*/ m$1(function(e, t, a) {
    return Math.max(e, /*#__PURE__*/ Sv(t, a));
}, "maxAbsDiff"), fa = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    for(var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : nh, o = n, l, u, f = 0; f < e; f++)l = /*#__PURE__*/ t(f), u = /*#__PURE__*/ a(f), o = /*#__PURE__*/ i(o, l, u);
    return s(o);
}, "getDistance"), jt = {
    euclidean: /*#__PURE__*/ m$1(function(e, t, a) {
        return e >= 2 ? fa(e, t, a, 0, jo, ih) : fa(e, t, a, 0, Jo);
    }, "euclidean"),
    squaredEuclidean: /*#__PURE__*/ m$1(function(e, t, a) {
        return fa(e, t, a, 0, jo);
    }, "squaredEuclidean"),
    manhattan: /*#__PURE__*/ m$1(function(e, t, a) {
        return fa(e, t, a, 0, Jo);
    }, "manhattan"),
    max: /*#__PURE__*/ m$1(function(e, t, a) {
        return fa(e, t, a, -1 / 0, sh);
    }, "max")
};
jt["squared-euclidean"] = jt.squaredEuclidean;
jt.squaredeuclidean = jt.squaredEuclidean;
function zn(r, e, t, a, n, i) {
    var s;
    return Ke(r) ? s = r : s = jt[r] || jt.euclidean, e === 0 && Ke(r) ? s(n, i) : s(e, t, a, n, i);
}
m$1(zn, "clusteringDistance");
var oh = /*#__PURE__*/ dr({
    k: 2,
    m: 2,
    sensitivityThreshold: 1e-4,
    distance: "euclidean",
    maxIterations: 10,
    attributes: [],
    testMode: false,
    testCentroids: null
}), so = /*#__PURE__*/ m$1(function(e) {
    return oh(e);
}, "setOptions"), Sn = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    var s = i !== "kMedoids", o = s ? function(c) {
        return a[c];
    } : function(c) {
        return n[c](a);
    }, l = /*#__PURE__*/ m$1(function(d) {
        return n[d](t);
    }, "getQ"), u = a, f = t;
    return zn(e, n.length, o, l, u, f);
}, "getDist"), bi = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = a.length, i = new Array(n), s = new Array(n), o = new Array(t), l = null, u = 0; u < n; u++)i[u] = e.min(a[u]).value, s[u] = e.max(a[u]).value;
    for(var f = 0; f < t; f++){
        l = [];
        for(var c = 0; c < n; c++)l[c] = Math.random() * (s[c] - i[c]) + i[c];
        o[f] = l;
    }
    return o;
}, "randomCentroids"), kv = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    for(var s = 1 / 0, o = 0, l = 0; l < t.length; l++){
        var u = /*#__PURE__*/ Sn(a, e, t[l], n, i);
        u < s && (s = u, o = l);
    }
    return o;
}, "classify"), Dv = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = [], i = null, s = 0; s < t.length; s++)i = t[s], a[i.id()] === e && n.push(i);
    return n;
}, "buildCluster"), uh = /*#__PURE__*/ m$1(function(e, t, a) {
    return Math.abs(t - e) <= a;
}, "haveValuesConverged"), lh = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = 0; n < e.length; n++)for(var i = 0; i < e[n].length; i++){
        var s = /*#__PURE__*/ Math.abs(e[n][i] - t[n][i]);
        if (s > a) return false;
    }
    return true;
}, "haveMatricesConverged"), vh = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = 0; n < a; n++)if (e === t[n]) return true;
    return false;
}, "seenBefore"), eu = /*#__PURE__*/ m$1(function(e, t) {
    var a = new Array(t);
    if (e.length < 50) for(var n = 0; n < t; n++){
        for(var i = e[Math.floor(Math.random() * e.length)]; vh(i, a, n);)i = e[Math.floor(Math.random() * e.length)];
        a[n] = i;
    }
    else for(var s = 0; s < t; s++)a[s] = e[Math.floor(Math.random() * e.length)];
    return a;
}, "randomMedoids"), ru = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = 0, i = 0; i < t.length; i++)n += /*#__PURE__*/ Sn("manhattan", t[i], e, a, "kMedoids");
    return n;
}, "findCost"), fh = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = null, i = /*#__PURE__*/ so(e), s = new Array(i.k), o = {}, l;
    i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, l = /*#__PURE__*/ bi(a, i.k, i.attributes)) : nr(i.testCentroids) === "object" ? l = i.testCentroids : l = /*#__PURE__*/ bi(a, i.k, i.attributes) : l = /*#__PURE__*/ bi(a, i.k, i.attributes);
    for(var u = true, f = 0; u && f < i.maxIterations;){
        for(var c = 0; c < a.length; c++)n = a[c], o[n.id()] = /*#__PURE__*/ kv(n, l, i.distance, i.attributes, "kMeans");
        u = false;
        for(var d = 0; d < i.k; d++){
            var g = /*#__PURE__*/ Dv(d, a, o);
            if (g.length !== 0) {
                for(var h = i.attributes.length, m = l[d], p = new Array(h), y = new Array(h), b1 = 0; b1 < h; b1++){
                    y[b1] = 0;
                    for(var w = 0; w < g.length; w++)n = g[w], y[b1] += /*#__PURE__*/ i.attributes[b1](n);
                    p[b1] = y[b1] / g.length, uh(p[b1], m[b1], i.sensitivityThreshold) || (u = true);
                }
                l[d] = p, s[d] = /*#__PURE__*/ t.collection(g);
            }
        }
        f++;
    }
    return s;
}, "kMeans"), ch = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = null, i = /*#__PURE__*/ so(e), s = new Array(i.k), o, l = {}, u, f = new Array(i.k);
    i.testMode ? typeof i.testCentroids == "number" || (nr(i.testCentroids) === "object" ? o = i.testCentroids : o = /*#__PURE__*/ eu(a, i.k)) : o = /*#__PURE__*/ eu(a, i.k);
    for(var c = true, d = 0; c && d < i.maxIterations;){
        for(var g = 0; g < a.length; g++)n = a[g], l[n.id()] = /*#__PURE__*/ kv(n, o, i.distance, i.attributes, "kMedoids");
        c = false;
        for(var h = 0; h < o.length; h++){
            var m = /*#__PURE__*/ Dv(h, a, l);
            if (m.length !== 0) {
                f[h] = /*#__PURE__*/ ru(o[h], m, i.attributes);
                for(var p = 0; p < m.length; p++)u = /*#__PURE__*/ ru(m[p], m, i.attributes), u < f[h] && (f[h] = u, o[h] = m[p], c = true);
                s[h] = /*#__PURE__*/ t.collection(m);
            }
        }
        d++;
    }
    return s;
}, "kMedoids"), dh = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    for(var s, o, l = 0; l < t.length; l++)for(var u = 0; u < e.length; u++)n[l][u] = /*#__PURE__*/ Math.pow(a[l][u], i.m);
    for(var f = 0; f < e.length; f++)for(var c = 0; c < i.attributes.length; c++){
        s = 0, o = 0;
        for(var d = 0; d < t.length; d++)s += n[d][f] * i.attributes[c](t[d]), o += n[d][f];
        e[f][c] = s / o;
    }
}, "updateCentroids"), hh = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    for(var s = 0; s < e.length; s++)t[s] = /*#__PURE__*/ e[s].slice();
    for(var o, l, u, f = 2 / (i.m - 1), c = 0; c < a.length; c++)for(var d = 0; d < n.length; d++){
        o = 0;
        for(var g = 0; g < a.length; g++)l = /*#__PURE__*/ Sn(i.distance, n[d], a[c], i.attributes, "cmeans"), u = /*#__PURE__*/ Sn(i.distance, n[d], a[g], i.attributes, "cmeans"), o += /*#__PURE__*/ Math.pow(l / u, f);
        e[d][c] = 1 / o;
    }
}, "updateMembership"), gh = /*#__PURE__*/ m$1(function(e, t, a, n) {
    for(var i = new Array(a.k), s = 0; s < i.length; s++)i[s] = [];
    for(var o, l, u = 0; u < t.length; u++){
        o = -1 / 0, l = -1;
        for(var f = 0; f < t[0].length; f++)t[u][f] > o && (o = t[u][f], l = f);
        i[l].push(e[u]);
    }
    for(var c = 0; c < i.length; c++)i[c] = /*#__PURE__*/ n.collection(i[c]);
    return i;
}, "assign"), tu = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = /*#__PURE__*/ so(e), i, s, o, l, u;
    l = new Array(a.length);
    for(var f = 0; f < a.length; f++)l[f] = new Array(n.k);
    o = new Array(a.length);
    for(var c = 0; c < a.length; c++)o[c] = new Array(n.k);
    for(var d = 0; d < a.length; d++){
        for(var g = 0, h = 0; h < n.k; h++)o[d][h] = /*#__PURE__*/ Math.random(), g += o[d][h];
        for(var m = 0; m < n.k; m++)o[d][m] = o[d][m] / g;
    }
    s = new Array(n.k);
    for(var p = 0; p < n.k; p++)s[p] = new Array(n.attributes.length);
    u = new Array(a.length);
    for(var y = 0; y < a.length; y++)u[y] = new Array(n.k);
    for(var b1 = true, w = 0; b1 && w < n.maxIterations;)b1 = false, dh(s, a, o, u, n), hh(o, l, s, a, n), lh(o, l, n.sensitivityThreshold) || (b1 = true), w++;
    return i = /*#__PURE__*/ gh(a, o, n, t), {
        clusters: i,
        degreeOfMembership: o
    };
}, "fuzzyCMeans"), ph = {
    kMeans: fh,
    kMedoids: ch,
    fuzzyCMeans: tu,
    fcm: tu
}, yh = /*#__PURE__*/ dr({
    distance: "euclidean",
    linkage: "min",
    mode: "threshold",
    threshold: 1 / 0,
    addDendrogram: false,
    dendrogramDepth: 0,
    attributes: []
}), mh = {
    single: "min",
    complete: "max"
}, bh = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ yh(e), a = mh[t.linkage];
    return a != null && (t.linkage = a), t;
}, "setOptions"), au = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    for(var s = 0, o = 1 / 0, l, u = i.attributes, f = /*#__PURE__*/ m$1(function(D, B) {
        return zn(i.distance, u.length, function(P) {
            return u[P](D);
        }, function(P) {
            return u[P](B);
        }, D, B);
    }, "getDist"), c = 0; c < e.length; c++){
        var d = e[c].key, g = a[d][n[d]];
        g < o && (s = d, o = g);
    }
    if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1) return false;
    var h = t[s], m = t[n[s]], p;
    i.mode === "dendrogram" ? p = {
        left: h,
        right: m,
        key: h.key
    } : p = {
        value: /*#__PURE__*/ h.value.concat(m.value),
        key: h.key
    }, e[h.index] = p, e.splice(m.index, 1), t[h.key] = p;
    for(var y = 0; y < e.length; y++){
        var b1 = e[y];
        h.key === b1.key ? l = 1 / 0 : i.linkage === "min" ? (l = a[h.key][b1.key], a[h.key][b1.key] > a[m.key][b1.key] && (l = a[m.key][b1.key])) : i.linkage === "max" ? (l = a[h.key][b1.key], a[h.key][b1.key] < a[m.key][b1.key] && (l = a[m.key][b1.key])) : i.linkage === "mean" ? l = (a[h.key][b1.key] * h.size + a[m.key][b1.key] * m.size) / (h.size + m.size) : i.mode === "dendrogram" ? l = /*#__PURE__*/ f(b1.value, h.value) : l = /*#__PURE__*/ f(b1.value[0], h.value[0]), a[h.key][b1.key] = a[b1.key][h.key] = l;
    }
    for(var w = 0; w < e.length; w++){
        var x = e[w].key;
        if (n[x] === h.key || n[x] === m.key) {
            for(var C = x, T = 0; T < e.length; T++){
                var E = e[T].key;
                a[x][E] < a[x][C] && (C = E);
            }
            n[x] = C;
        }
        e[w].index = w;
    }
    return h.key = m.key = h.index = m.index = null, true;
}, "mergeClosest"), Ut = m$1(function(e, t, a) {
    e && (e.value ? t.push(e.value) : (e.left && Ut(e.left, t), e.right && Ut(e.right, t)));
}, "getAllChildren"), Ls = m$1(function(e, t) {
    if (!e) return "";
    if (e.left && e.right) {
        var a = /*#__PURE__*/ Ls(e.left, t), n = /*#__PURE__*/ Ls(e.right, t), i = /*#__PURE__*/ t.add({
            group: "nodes",
            data: {
                id: a + "," + n
            }
        });
        return t.add({
            group: "edges",
            data: {
                source: a,
                target: /*#__PURE__*/ i.id()
            }
        }), t.add({
            group: "edges",
            data: {
                source: n,
                target: /*#__PURE__*/ i.id()
            }
        }), i.id();
    } else if (e.value) return e.value.id();
}, "buildDendrogram"), Is = m$1(function(e, t, a) {
    if (!e) return [];
    var n = [], i = [], s = [];
    return t === 0 ? (e.left && Ut(e.left, n), e.right && Ut(e.right, i), s = /*#__PURE__*/ n.concat(i), [
        /*#__PURE__*/ a.collection(s)
    ]) : t === 1 ? e.value ? [
        /*#__PURE__*/ a.collection(e.value)
    ] : (e.left && Ut(e.left, n), e.right && Ut(e.right, i), [
        /*#__PURE__*/ a.collection(n),
        /*#__PURE__*/ a.collection(i)
    ]) : e.value ? [
        /*#__PURE__*/ a.collection(e.value)
    ] : (e.left && (n = /*#__PURE__*/ Is(e.left, t - 1, a)), e.right && (i = /*#__PURE__*/ Is(e.right, t - 1, a)), n.concat(i));
}, "buildClustersFromTree"), nu = /*#__PURE__*/ m$1(function(e) {
    for(var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = /*#__PURE__*/ bh(e), i = n.attributes, s = /*#__PURE__*/ m$1(function(w, x) {
        return zn(n.distance, i.length, function(C) {
            return i[C](w);
        }, function(C) {
            return i[C](x);
        }, w, x);
    }, "getDist"), o = [], l = [], u = [], f = [], c = 0; c < a.length; c++){
        var d = {
            value: n.mode === "dendrogram" ? a[c] : [
                a[c]
            ],
            key: c,
            index: c
        };
        o[c] = d, f[c] = d, l[c] = [], u[c] = 0;
    }
    for(var g = 0; g < o.length; g++)for(var h = 0; h <= g; h++){
        var m = void 0;
        n.mode === "dendrogram" ? m = g === h ? 1 / 0 : s(o[g].value, o[h].value) : m = g === h ? 1 / 0 : s(o[g].value[0], o[h].value[0]), l[g][h] = m, l[h][g] = m, m < l[g][u[g]] && (u[g] = h);
    }
    for(var p = /*#__PURE__*/ au(o, f, l, u, n); p;)p = /*#__PURE__*/ au(o, f, l, u, n);
    var y;
    return n.mode === "dendrogram" ? (y = /*#__PURE__*/ Is(o[0], n.dendrogramDepth, t), n.addDendrogram && Ls(o[0], t)) : (y = new Array(o.length), o.forEach(function(b1, w) {
        b1.key = b1.index = null, y[w] = /*#__PURE__*/ t.collection(b1.value);
    })), y;
}, "hierarchicalClustering"), wh = {
    hierarchicalClustering: nu,
    hca: nu
}, xh = /*#__PURE__*/ dr({
    distance: "euclidean",
    preference: "median",
    damping: .8,
    maxIterations: 1e3,
    minIterations: 100,
    attributes: []
}), Eh = /*#__PURE__*/ m$1(function(e) {
    var t = e.damping, a = e.preference;
    .5 <= t && t < 1 || Ue(/*#__PURE__*/ "Damping must range on [0.5, 1).  Got: ".concat(t));
    var n = [
        "median",
        "mean",
        "min",
        "max"
    ];
    return n.some(function(i) {
        return i === a;
    }) || ne(a) || Ue(/*#__PURE__*/ "Preference must be one of [".concat(/*#__PURE__*/ n.map(function(i) {
        return "'".concat(i, "'");
    }).join(", "), "] or a number.  Got: ").concat(a)), xh(e);
}, "setOptions"), Ch = /*#__PURE__*/ m$1(function(e, t, a, n) {
    var i = /*#__PURE__*/ m$1(function(o, l) {
        return n[l](o);
    }, "attr");
    return -zn(e, n.length, function(s) {
        return i(t, s);
    }, function(s) {
        return i(a, s);
    }, t, a);
}, "getSimilarity"), Th = /*#__PURE__*/ m$1(function(e, t) {
    var a = null;
    return t === "median" ? a = /*#__PURE__*/ Ed(e) : t === "mean" ? a = /*#__PURE__*/ xd(e) : t === "min" ? a = /*#__PURE__*/ bd(e) : t === "max" ? a = /*#__PURE__*/ wd(e) : a = t, a;
}, "getPreference"), Sh = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = [], i = 0; i < e; i++)t[i * e + i] + a[i * e + i] > 0 && n.push(i);
    return n;
}, "findExemplars"), iu = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = [], i = 0; i < e; i++){
        for(var s = -1, o = -1 / 0, l = 0; l < a.length; l++){
            var u = a[l];
            t[i * e + u] > o && (s = u, o = t[i * e + u]);
        }
        s > 0 && n.push(s);
    }
    for(var f = 0; f < a.length; f++)n[a[f]] = a[f];
    return n;
}, "assignClusters"), kh = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = /*#__PURE__*/ iu(e, t, a), i = 0; i < a.length; i++){
        for(var s = [], o = 0; o < n.length; o++)n[o] === a[i] && s.push(o);
        for(var l = -1, u = -1 / 0, f = 0; f < s.length; f++){
            for(var c = 0, d = 0; d < s.length; d++)c += t[s[d] * e + s[f]];
            c > u && (l = f, u = c);
        }
        a[i] = s[l];
    }
    return n = /*#__PURE__*/ iu(e, t, a), n;
}, "assign"), su = /*#__PURE__*/ m$1(function(e) {
    for(var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = /*#__PURE__*/ Eh(e), i = {}, s = 0; s < a.length; s++)i[a[s].id()] = s;
    var o, l, u, f, c, d;
    o = a.length, l = o * o, u = new Array(l);
    for(var g = 0; g < l; g++)u[g] = -1 / 0;
    for(var h = 0; h < o; h++)for(var m = 0; m < o; m++)h !== m && (u[h * o + m] = /*#__PURE__*/ Ch(n.distance, a[h], a[m], n.attributes));
    f = /*#__PURE__*/ Th(u, n.preference);
    for(var p = 0; p < o; p++)u[p * o + p] = f;
    c = new Array(l);
    for(var y = 0; y < l; y++)c[y] = 0;
    d = new Array(l);
    for(var b1 = 0; b1 < l; b1++)d[b1] = 0;
    for(var w = new Array(o), x = new Array(o), C = new Array(o), T = 0; T < o; T++)w[T] = 0, x[T] = 0, C[T] = 0;
    for(var E = new Array(o * n.minIterations), S = 0; S < E.length; S++)E[S] = 0;
    var D;
    for(D = 0; D < n.maxIterations; D++){
        for(var B = 0; B < o; B++){
            for(var P = -1 / 0, A = -1 / 0, R = -1, M = 0, I = 0; I < o; I++)w[I] = c[B * o + I], M = d[B * o + I] + u[B * o + I], M >= P ? (A = P, P = M, R = I) : M > A && (A = M);
            for(var O = 0; O < o; O++)c[B * o + O] = (1 - n.damping) * (u[B * o + O] - P) + n.damping * w[O];
            c[B * o + R] = (1 - n.damping) * (u[B * o + R] - A) + n.damping * w[R];
        }
        for(var L = 0; L < o; L++){
            for(var N = 0, q = 0; q < o; q++)w[q] = d[q * o + L], x[q] = /*#__PURE__*/ Math.max(0, c[q * o + L]), N += x[q];
            N -= x[L], x[L] = c[L * o + L], N += x[L];
            for(var H = 0; H < o; H++)d[H * o + L] = (1 - n.damping) * Math.min(0, N - x[H]) + n.damping * w[H];
            d[L * o + L] = (1 - n.damping) * (N - x[L]) + n.damping * w[L];
        }
        for(var z = 0, V = 0; V < o; V++){
            var K = d[V * o + V] + c[V * o + V] > 0 ? 1 : 0;
            E[D % n.minIterations * o + V] = K, z += K;
        }
        if (z > 0 && (D >= n.minIterations - 1 || D == n.maxIterations - 1)) {
            for(var J = 0, X = 0; X < o; X++){
                C[X] = 0;
                for(var ee = 0; ee < n.minIterations; ee++)C[X] += E[ee * o + X];
                (C[X] === 0 || C[X] === n.minIterations) && J++;
            }
            if (J === o) break;
        }
    }
    for(var te = /*#__PURE__*/ Sh(o, c, d), ie = /*#__PURE__*/ kh(o, u, te), j = {}, F = 0; F < te.length; F++)j[te[F]] = [];
    for(var _ = 0; _ < a.length; _++){
        var W = i[a[_].id()], Z = ie[W];
        Z != null && j[Z].push(a[_]);
    }
    for(var ae = new Array(te.length), de = 0; de < te.length; de++)ae[de] = /*#__PURE__*/ t.collection(j[te[de]]);
    return ae;
}, "affinityPropagation"), Dh = {
    affinityPropagation: su,
    ap: su
}, Bh = /*#__PURE__*/ dr({
    root: void 0,
    directed: false
}), Ph = {
    hierholzer: /*#__PURE__*/ m$1(function(e) {
        if (!Ie(e)) {
            var t = arguments;
            e = {
                root: t[0],
                directed: t[1]
            };
        }
        var a = /*#__PURE__*/ Bh(e), n = a.root, i = a.directed, s = this, o = false, l, u, f;
        n && (f = pe(n) ? this.filter(n)[0].id() : n[0].id());
        var c = {}, d = {};
        i ? s.forEach(function(b1) {
            var w = /*#__PURE__*/ b1.id();
            if (b1.isNode()) {
                var x = /*#__PURE__*/ b1.indegree(true), C = /*#__PURE__*/ b1.outdegree(true), T = x - C, E = C - x;
                T == 1 ? l ? o = true : l = w : E == 1 ? u ? o = true : u = w : (E > 1 || T > 1) && (o = true), c[w] = [], b1.outgoers().forEach(function(S) {
                    S.isEdge() && c[w].push(/*#__PURE__*/ S.id());
                });
            } else d[w] = [
                void 0,
                /*#__PURE__*/ b1.target().id()
            ];
        }) : s.forEach(function(b1) {
            var w = /*#__PURE__*/ b1.id();
            if (b1.isNode()) {
                var x = /*#__PURE__*/ b1.degree(true);
                x % 2 && (l ? u ? o = true : u = w : l = w), c[w] = [], b1.connectedEdges().forEach(function(C) {
                    return c[w].push(/*#__PURE__*/ C.id());
                });
            } else d[w] = [
                /*#__PURE__*/ b1.source().id(),
                /*#__PURE__*/ b1.target().id()
            ];
        });
        var g = {
            found: false,
            trail: void 0
        };
        if (o) return g;
        if (u && l) if (i) {
            if (f && u != f) return g;
            f = u;
        } else {
            if (f && u != f && l != f) return g;
            f || (f = u);
        }
        else f || (f = /*#__PURE__*/ s[0].id());
        var h = /*#__PURE__*/ m$1(function(w) {
            for(var x = w, C = [
                w
            ], T, E, S; c[x].length;)T = /*#__PURE__*/ c[x].shift(), E = d[T][0], S = d[T][1], x != S ? (c[S] = /*#__PURE__*/ c[S].filter(function(D) {
                return D != T;
            }), x = S) : !i && x != E && (c[E] = /*#__PURE__*/ c[E].filter(function(D) {
                return D != T;
            }), x = E), C.unshift(T), C.unshift(x);
            return C;
        }, "walk"), m = [], p = [];
        for(p = /*#__PURE__*/ h(f); p.length != 1;)c[p[0]].length == 0 ? (m.unshift(/*#__PURE__*/ s.getElementById(/*#__PURE__*/ p.shift())), m.unshift(/*#__PURE__*/ s.getElementById(/*#__PURE__*/ p.shift()))) : p = /*#__PURE__*/ h(/*#__PURE__*/ p.shift()).concat(p);
        m.unshift(/*#__PURE__*/ s.getElementById(/*#__PURE__*/ p.shift()));
        for(var y in c)if (c[y].length) return g;
        return g.found = true, g.trail = /*#__PURE__*/ this.spawn(m, true), g;
    }, "hierholzer")
}, Ja = /*#__PURE__*/ m$1(function() {
    var e = this, t = {}, a = 0, n = 0, i = [], s = [], o = {}, l = /*#__PURE__*/ m$1(function(d, g) {
        for(var h = s.length - 1, m = [], p = /*#__PURE__*/ e.spawn(); s[h].x != d || s[h].y != g;)m.push(s.pop().edge), h--;
        m.push(s.pop().edge), m.forEach(function(y) {
            var b1 = /*#__PURE__*/ y.connectedNodes().intersection(e);
            p.merge(y), b1.forEach(function(w) {
                var x = /*#__PURE__*/ w.id(), C = /*#__PURE__*/ w.connectedEdges().intersection(e);
                p.merge(w), t[x].cutVertex ? p.merge(/*#__PURE__*/ C.filter(function(T) {
                    return T.isLoop();
                })) : p.merge(C);
            });
        }), i.push(p);
    }, "buildComponent"), u = m$1(function(d, g, h) {
        d === h && (n += 1), t[g] = {
            id: a,
            low: a++,
            cutVertex: false
        };
        var m = /*#__PURE__*/ e.getElementById(g).connectedEdges().intersection(e);
        if (m.size() === 0) i.push(/*#__PURE__*/ e.spawn(/*#__PURE__*/ e.getElementById(g)));
        else {
            var p, y, b1, w;
            m.forEach(function(x) {
                p = /*#__PURE__*/ x.source().id(), y = /*#__PURE__*/ x.target().id(), b1 = p === g ? y : p, b1 !== h && (w = /*#__PURE__*/ x.id(), o[w] || (o[w] = true, s.push({
                    x: g,
                    y: b1,
                    edge: x
                })), b1 in t ? t[g].low = /*#__PURE__*/ Math.min(t[g].low, t[b1].id) : (u(d, b1, g), t[g].low = /*#__PURE__*/ Math.min(t[g].low, t[b1].low), t[g].id <= t[b1].low && (t[g].cutVertex = true, l(g, b1))));
            });
        }
    }, "biconnectedSearch");
    e.forEach(function(c) {
        if (c.isNode()) {
            var d = /*#__PURE__*/ c.id();
            d in t || (n = 0, u(d, d), t[d].cutVertex = n > 1);
        }
    });
    var f = /*#__PURE__*/ Object.keys(t).filter(function(c) {
        return t[c].cutVertex;
    }).map(function(c) {
        return e.getElementById(c);
    });
    return {
        cut: /*#__PURE__*/ e.spawn(f),
        components: i
    };
}, "hopcroftTarjanBiconnected"), Ah = {
    hopcroftTarjanBiconnected: Ja,
    htbc: Ja,
    htb: Ja,
    hopcroftTarjanBiconnectedComponents: Ja
}, ja = /*#__PURE__*/ m$1(function() {
    var e = this, t = {}, a = 0, n = [], i = [], s = /*#__PURE__*/ e.spawn(e), o = m$1(function(u) {
        i.push(u), t[u] = {
            index: a,
            low: a++,
            explored: false
        };
        var f = /*#__PURE__*/ e.getElementById(u).connectedEdges().intersection(e);
        if (f.forEach(function(m) {
            var p = /*#__PURE__*/ m.target().id();
            p !== u && (p in t || o(p), t[p].explored || (t[u].low = /*#__PURE__*/ Math.min(t[u].low, t[p].low)));
        }), t[u].index === t[u].low) {
            for(var c = /*#__PURE__*/ e.spawn();;){
                var d = /*#__PURE__*/ i.pop();
                if (c.merge(/*#__PURE__*/ e.getElementById(d)), t[d].low = t[u].index, t[d].explored = true, d === u) break;
            }
            var g = /*#__PURE__*/ c.edgesWith(c), h = /*#__PURE__*/ c.merge(g);
            n.push(h), s = /*#__PURE__*/ s.difference(h);
        }
    }, "stronglyConnectedSearch");
    return e.forEach(function(l) {
        if (l.isNode()) {
            var u = /*#__PURE__*/ l.id();
            u in t || o(u);
        }
    }), {
        cut: s,
        components: n
    };
}, "tarjanStronglyConnected"), Rh = {
    tarjanStronglyConnected: ja,
    tsc: ja,
    tscc: ja,
    tarjanStronglyConnectedComponents: ja
}, Bv = {};
[
    ka,
    od,
    ud,
    vd,
    cd,
    hd,
    yd,
    Wd,
    Yt,
    Zt,
    Ms,
    ah,
    ph,
    wh,
    Dh,
    Ph,
    Ah,
    Rh
].forEach(function(r) {
    we(Bv, r);
});
var Pv = 0, Av = 1, Rv = 2, zr = m$1(function(e) {
    if (!(this instanceof zr)) return new zr(e);
    this.id = "Thenable/1.0.7", this.state = Pv, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
        then: /*#__PURE__*/ this.then.bind(this)
    }, typeof e == "function" && e.call(this, /*#__PURE__*/ this.fulfill.bind(this), /*#__PURE__*/ this.reject.bind(this));
}, "api");
zr.prototype = {
    fulfill: /*#__PURE__*/ m$1(function(e) {
        return ou(this, Av, "fulfillValue", e);
    }, "fulfill"),
    reject: /*#__PURE__*/ m$1(function(e) {
        return ou(this, Rv, "rejectReason", e);
    }, "reject"),
    then: /*#__PURE__*/ m$1(function(e, t) {
        var a = this, n = new zr;
        return a.onFulfilled.push(/*#__PURE__*/ lu(e, n, "fulfill")), a.onRejected.push(/*#__PURE__*/ lu(t, n, "reject")), Mv(a), n.proxy;
    }, "then")
};
var ou = /*#__PURE__*/ m$1(function(e, t, a, n) {
    return e.state === Pv && (e.state = t, e[a] = n, Mv(e)), e;
}, "deliver"), Mv = /*#__PURE__*/ m$1(function(e) {
    e.state === Av ? uu(e, "onFulfilled", e.fulfillValue) : e.state === Rv && uu(e, "onRejected", e.rejectReason);
}, "execute"), uu = /*#__PURE__*/ m$1(function(e, t, a) {
    if (e[t].length !== 0) {
        var n = e[t];
        e[t] = [];
        var i = /*#__PURE__*/ m$1(function() {
            for(var o = 0; o < n.length; o++)n[o](a);
        }, "func");
        typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
    }
}, "execute_handlers"), lu = /*#__PURE__*/ m$1(function(e, t, a) {
    return function(n) {
        if (typeof e != "function") t[a].call(t, n);
        else {
            var i;
            try {
                i = /*#__PURE__*/ e(n);
            } catch (s) {
                t.reject(s);
                return;
            }
            Lv(t, i);
        }
    };
}, "resolver"), Lv = m$1(function(e, t) {
    if (e === t || e.proxy === t) {
        e.reject(new TypeError("cannot resolve promise with itself"));
        return;
    }
    var a;
    if (nr(t) === "object" && t !== null || typeof t == "function") try {
        a = t.then;
    } catch (i) {
        e.reject(i);
        return;
    }
    if (typeof a == "function") {
        var n = false;
        try {
            a.call(t, function(i) {
                n || (n = !0, i === t ? e.reject(new TypeError("circular thenable chain")) : Lv(e, i));
            }, function(i) {
                n || (n = !0, e.reject(i));
            });
        } catch (i) {
            n || e.reject(i);
        }
        return;
    }
    e.fulfill(t);
}, "resolve");
zr.all = function(r) {
    return new zr(function(e, t) {
        for(var a = new Array(r.length), n = 0, i = /*#__PURE__*/ m$1(function(l, u) {
            a[l] = u, n++, n === r.length && e(a);
        }, "fulfill"), s = 0; s < r.length; s++)(function(o) {
            var l = r[o], u = l != null && l.then != null;
            if (u) l.then(function(c) {
                i(o, c);
            }, function(c) {
                t(c);
            });
            else {
                var f = l;
                i(o, f);
            }
        })(s);
    });
};
zr.resolve = function(r) {
    return new zr(function(e, t) {
        e(r);
    });
};
zr.reject = function(r) {
    return new zr(function(e, t) {
        t(r);
    });
};
var aa = typeof Promise < "u" ? Promise : zr, Os = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = /*#__PURE__*/ Zs(e), i = !n, s = this._private = /*#__PURE__*/ we({
        duration: 1e3
    }, t, a);
    if (s.target = e, s.style = s.style || s.css, s.started = false, s.playing = false, s.hooked = false, s.applying = false, s.progress = 0, s.completes = [], s.frames = [], s.complete && Ke(s.complete) && s.completes.push(s.complete), i) {
        var o = /*#__PURE__*/ e.position();
        s.startPosition = s.startPosition || {
            x: o.x,
            y: o.y
        }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
    }
    if (n) {
        var l = /*#__PURE__*/ e.pan();
        s.startPan = {
            x: l.x,
            y: l.y
        }, s.startZoom = /*#__PURE__*/ e.zoom();
    }
    this.length = 1, this[0] = this;
}, "Animation"), Rt = Os.prototype;
we(Rt, {
    instanceString: /*#__PURE__*/ m$1(function() {
        return "animation";
    }, "instanceString"),
    hook: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        if (!e.hooked) {
            var t, a = e.target._private.animation;
            e.queue ? t = a.queue : t = a.current, t.push(this), Br(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = true;
        }
        return this;
    }, "hook"),
    play: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        return e.progress === 1 && (e.progress = 0), e.playing = true, e.started = false, e.stopped = false, this.hook(), this;
    }, "play"),
    playing: /*#__PURE__*/ m$1(function() {
        return this._private.playing;
    }, "playing"),
    apply: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        return e.applying = true, e.started = false, e.stopped = false, this.hook(), this;
    }, "apply"),
    applying: /*#__PURE__*/ m$1(function() {
        return this._private.applying;
    }, "applying"),
    pause: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        return e.playing = false, e.started = false, this;
    }, "pause"),
    stop: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        return e.playing = false, e.started = false, e.stopped = true, this;
    }, "stop"),
    rewind: /*#__PURE__*/ m$1(function() {
        return this.progress(0);
    }, "rewind"),
    fastforward: /*#__PURE__*/ m$1(function() {
        return this.progress(1);
    }, "fastforward"),
    time: /*#__PURE__*/ m$1(function(e) {
        var t = this._private;
        return e === void 0 ? t.progress * t.duration : this.progress(e / t.duration);
    }, "time"),
    progress: /*#__PURE__*/ m$1(function(e) {
        var t = this._private, a = t.playing;
        return e === void 0 ? t.progress : (a && this.pause(), t.progress = e, t.started = false, a && this.play(), this);
    }, "progress"),
    completed: /*#__PURE__*/ m$1(function() {
        return this._private.progress === 1;
    }, "completed"),
    reverse: /*#__PURE__*/ m$1(function() {
        var e = this._private, t = e.playing;
        t && this.pause(), e.progress = 1 - e.progress, e.started = false;
        var a = /*#__PURE__*/ m$1(function(u, f) {
            var c = e[u];
            c != null && (e[u] = e[f], e[f] = c);
        }, "swap");
        if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style) for(var n = 0; n < e.style.length; n++){
            var i = e.style[n], s = i.name, o = e.startStyle[s];
            e.startStyle[s] = i, e.style[n] = o;
        }
        return t && this.play(), this;
    }, "reverse"),
    promise: /*#__PURE__*/ m$1(function(e) {
        var t = this._private, a;
        switch(e){
            case "frame":
                a = t.frames;
                break;
            default:
            case "complete":
            case "completed":
                a = t.completes;
        }
        return new aa(function(n, i) {
            a.push(function() {
                n();
            });
        });
    }, "promise")
});
Rt.complete = Rt.completed;
Rt.run = Rt.play;
Rt.running = Rt.playing;
var Mh = {
    animated: /*#__PURE__*/ m$1(function() {
        return m$1(function() {
            var t = this, a = t.length !== void 0, n = a ? t : [
                t
            ], i = this._private.cy || this;
            if (!i.styleEnabled()) return false;
            var s = n[0];
            if (s) return s._private.animation.current.length > 0;
        }, "animatedImpl");
    }, "animated"),
    clearQueue: /*#__PURE__*/ m$1(function() {
        return m$1(function() {
            var t = this, a = t.length !== void 0, n = a ? t : [
                t
            ], i = this._private.cy || this;
            if (!i.styleEnabled()) return this;
            for(var s = 0; s < n.length; s++){
                var o = n[s];
                o._private.animation.queue = [];
            }
            return this;
        }, "clearQueueImpl");
    }, "clearQueue"),
    delay: /*#__PURE__*/ m$1(function() {
        return m$1(function(t, a) {
            var n = this._private.cy || this;
            return n.styleEnabled() ? this.animate({
                delay: t,
                duration: t,
                complete: a
            }) : this;
        }, "delayImpl");
    }, "delay"),
    delayAnimation: /*#__PURE__*/ m$1(function() {
        return m$1(function(t, a) {
            var n = this._private.cy || this;
            return n.styleEnabled() ? this.animation({
                delay: t,
                duration: t,
                complete: a
            }) : this;
        }, "delayAnimationImpl");
    }, "delayAnimation"),
    animation: /*#__PURE__*/ m$1(function() {
        return m$1(function(t, a) {
            var n = this, i = n.length !== void 0, s = i ? n : [
                n
            ], o = this._private.cy || this, l = !i, u = !l;
            if (!o.styleEnabled()) return this;
            var f = /*#__PURE__*/ o.style();
            t = /*#__PURE__*/ we({}, t, a);
            var c = Object.keys(t).length === 0;
            if (c) return new Os(s[0], t);
            switch(t.duration === void 0 && (t.duration = 400), t.duration){
                case "slow":
                    t.duration = 600;
                    break;
                case "fast":
                    t.duration = 200;
                    break;
            }
            if (u && (t.style = /*#__PURE__*/ f.getPropsList(t.style || t.css), t.css = void 0), u && t.renderedPosition != null) {
                var d = t.renderedPosition, g = /*#__PURE__*/ o.pan(), h = /*#__PURE__*/ o.zoom();
                t.position = /*#__PURE__*/ mv(d, h, g);
            }
            if (l && t.panBy != null) {
                var m = t.panBy, p = /*#__PURE__*/ o.pan();
                t.pan = {
                    x: p.x + m.x,
                    y: p.y + m.y
                };
            }
            var y = t.center || t.centre;
            if (l && y != null) {
                var b1 = /*#__PURE__*/ o.getCenterPan(y.eles, t.zoom);
                b1 != null && (t.pan = b1);
            }
            if (l && t.fit != null) {
                var w = t.fit, x = /*#__PURE__*/ o.getFitViewport(w.eles || w.boundingBox, w.padding);
                x != null && (t.pan = x.pan, t.zoom = x.zoom);
            }
            if (l && Ie(t.zoom)) {
                var C = /*#__PURE__*/ o.getZoomedViewport(t.zoom);
                C != null ? (C.zoomed && (t.zoom = C.zoom), C.panned && (t.pan = C.pan)) : t.zoom = null;
            }
            return new Os(s[0], t);
        }, "animationImpl");
    }, "animation"),
    animate: /*#__PURE__*/ m$1(function() {
        return m$1(function(t, a) {
            var n = this, i = n.length !== void 0, s = i ? n : [
                n
            ], o = this._private.cy || this;
            if (!o.styleEnabled()) return this;
            a && (t = /*#__PURE__*/ we({}, t, a));
            for(var l = 0; l < s.length; l++){
                var u = s[l], f = u.animated() && (t.queue === void 0 || t.queue), c = /*#__PURE__*/ u.animation(t, f ? {
                    queue: true
                } : void 0);
                c.play();
            }
            return this;
        }, "animateImpl");
    }, "animate"),
    stop: /*#__PURE__*/ m$1(function() {
        return m$1(function(t, a) {
            var n = this, i = n.length !== void 0, s = i ? n : [
                n
            ], o = this._private.cy || this;
            if (!o.styleEnabled()) return this;
            for(var l = 0; l < s.length; l++){
                for(var u = s[l], f = u._private, c = f.animation.current, d = 0; d < c.length; d++){
                    var g = c[d], h = g._private;
                    a && (h.duration = 0);
                }
                t && (f.animation.queue = []), a || (f.animation.current = []);
            }
            return o.notify("draw"), this;
        }, "stopImpl");
    }, "stop")
}, wi, vu;
function Fn() {
    if (vu) return wi;
    vu = 1;
    var r = Array.isArray;
    return wi = r, wi;
}
m$1(Fn, "requireIsArray");
var xi, fu;
function Lh() {
    if (fu) return xi;
    fu = 1;
    var r = /*#__PURE__*/ Fn(), e = /*#__PURE__*/ Fa(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
    function n(i, s) {
        if (r(i)) return false;
        var o = typeof i;
        return o == "number" || o == "symbol" || o == "boolean" || i == null || e(i) ? true : a.test(i) || !t.test(i) || s != null && i in Object(s);
    }
    return m$1(n, "isKey"), xi = n, xi;
}
m$1(Lh, "require_isKey");
var Ei, cu;
function Ih() {
    if (cu) return Ei;
    cu = 1;
    var r = /*#__PURE__*/ lv(), e = /*#__PURE__*/ za(), t = "[object AsyncFunction]", a = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
    function s(o) {
        if (!e(o)) return false;
        var l = /*#__PURE__*/ r(o);
        return l == a || l == n || l == t || l == i;
    }
    return m$1(s, "isFunction"), Ei = s, Ei;
}
m$1(Ih, "requireIsFunction");
var Ci, du;
function Oh() {
    if (du) return Ci;
    du = 1;
    var r = /*#__PURE__*/ In(), e = r["__core-js_shared__"];
    return Ci = e, Ci;
}
m$1(Oh, "require_coreJsData");
var Ti, hu;
function Nh() {
    if (hu) return Ti;
    hu = 1;
    var r = /*#__PURE__*/ Oh(), e = /*#__PURE__*/ function() {
        var a = /*#__PURE__*/ /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
    }();
    function t(a) {
        return !!e && e in a;
    }
    return m$1(t, "isMasked"), Ti = t, Ti;
}
m$1(Nh, "require_isMasked");
var Si, gu;
function zh() {
    if (gu) return Si;
    gu = 1;
    var r = Function.prototype, e = r.toString;
    function t(a) {
        if (a != null) {
            try {
                return e.call(a);
            } catch  {}
            try {
                return a + "";
            } catch  {}
        }
        return "";
    }
    return m$1(t, "toSource"), Si = t, Si;
}
m$1(zh, "require_toSource");
var ki, pu;
function Fh() {
    if (pu) return ki;
    pu = 1;
    var r = /*#__PURE__*/ Ih(), e = /*#__PURE__*/ Nh(), t = /*#__PURE__*/ za(), a = /*#__PURE__*/ zh(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, l = s.toString, u = o.hasOwnProperty, f = /*#__PURE__*/ RegExp("^" + l.call(u).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function c(d) {
        if (!t(d) || e(d)) return false;
        var g = r(d) ? f : i;
        return g.test(/*#__PURE__*/ a(d));
    }
    return m$1(c, "baseIsNative"), ki = c, ki;
}
m$1(Fh, "require_baseIsNative");
var Di, yu;
function Vh() {
    if (yu) return Di;
    yu = 1;
    function r(e, t) {
        return e?.[t];
    }
    return m$1(r, "getValue"), Di = r, Di;
}
m$1(Vh, "require_getValue");
var Bi, mu;
function oo() {
    if (mu) return Bi;
    mu = 1;
    var r = /*#__PURE__*/ Fh(), e = /*#__PURE__*/ Vh();
    function t(a, n) {
        var i = /*#__PURE__*/ e(a, n);
        return r(i) ? i : void 0;
    }
    return m$1(t, "getNative"), Bi = t, Bi;
}
m$1(oo, "require_getNative");
var Pi, bu;
function Vn() {
    if (bu) return Pi;
    bu = 1;
    var r = /*#__PURE__*/ oo(), e = /*#__PURE__*/ r(Object, "create");
    return Pi = e, Pi;
}
m$1(Vn, "require_nativeCreate");
var Ai, wu;
function qh() {
    if (wu) return Ai;
    wu = 1;
    var r = /*#__PURE__*/ Vn();
    function e() {
        this.__data__ = r ? r(null) : {}, this.size = 0;
    }
    return m$1(e, "hashClear"), Ai = e, Ai;
}
m$1(qh, "require_hashClear");
var Ri, xu;
function _h() {
    if (xu) return Ri;
    xu = 1;
    function r(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
    }
    return m$1(r, "hashDelete"), Ri = r, Ri;
}
m$1(_h, "require_hashDelete");
var Mi, Eu;
function Gh() {
    if (Eu) return Mi;
    Eu = 1;
    var r = /*#__PURE__*/ Vn(), e = "__lodash_hash_undefined__", t = Object.prototype, a = t.hasOwnProperty;
    function n(i) {
        var s = this.__data__;
        if (r) {
            var o = s[i];
            return o === e ? void 0 : o;
        }
        return a.call(s, i) ? s[i] : void 0;
    }
    return m$1(n, "hashGet"), Mi = n, Mi;
}
m$1(Gh, "require_hashGet");
var Li, Cu;
function Hh() {
    if (Cu) return Li;
    Cu = 1;
    var r = /*#__PURE__*/ Vn(), e = Object.prototype, t = e.hasOwnProperty;
    function a(n) {
        var i = this.__data__;
        return r ? i[n] !== void 0 : t.call(i, n);
    }
    return m$1(a, "hashHas"), Li = a, Li;
}
m$1(Hh, "require_hashHas");
var Ii, Tu;
function Wh() {
    if (Tu) return Ii;
    Tu = 1;
    var r = /*#__PURE__*/ Vn(), e = "__lodash_hash_undefined__";
    function t(a, n) {
        var i = this.__data__;
        return this.size += this.has(a) ? 0 : 1, i[a] = r && n === void 0 ? e : n, this;
    }
    return m$1(t, "hashSet"), Ii = t, Ii;
}
m$1(Wh, "require_hashSet");
var Oi, Su;
function $h() {
    if (Su) return Oi;
    Su = 1;
    var r = /*#__PURE__*/ qh(), e = /*#__PURE__*/ _h(), t = /*#__PURE__*/ Gh(), a = /*#__PURE__*/ Hh(), n = /*#__PURE__*/ Wh();
    function i(s) {
        var o = -1, l = s == null ? 0 : s.length;
        for(this.clear(); ++o < l;){
            var u = s[o];
            this.set(u[0], u[1]);
        }
    }
    return m$1(i, "Hash"), i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, Oi = i, Oi;
}
m$1($h, "require_Hash");
var Ni, ku;
function Uh() {
    if (ku) return Ni;
    ku = 1;
    function r() {
        this.__data__ = [], this.size = 0;
    }
    return m$1(r, "listCacheClear"), Ni = r, Ni;
}
m$1(Uh, "require_listCacheClear");
var zi, Du;
function Iv() {
    if (Du) return zi;
    Du = 1;
    function r(e, t) {
        return e === t || e !== e && t !== t;
    }
    return m$1(r, "eq"), zi = r, zi;
}
m$1(Iv, "requireEq");
var Fi, Bu;
function qn() {
    if (Bu) return Fi;
    Bu = 1;
    var r = /*#__PURE__*/ Iv();
    function e(t, a) {
        for(var n = t.length; n--;)if (r(t[n][0], a)) return n;
        return -1;
    }
    return m$1(e, "assocIndexOf"), Fi = e, Fi;
}
m$1(qn, "require_assocIndexOf");
var Vi, Pu;
function Kh() {
    if (Pu) return Vi;
    Pu = 1;
    var r = /*#__PURE__*/ qn(), e = Array.prototype, t = e.splice;
    function a(n) {
        var i = this.__data__, s = /*#__PURE__*/ r(i, n);
        if (s < 0) return false;
        var o = i.length - 1;
        return s == o ? i.pop() : t.call(i, s, 1), --this.size, true;
    }
    return m$1(a, "listCacheDelete"), Vi = a, Vi;
}
m$1(Kh, "require_listCacheDelete");
var qi, Au;
function Xh() {
    if (Au) return qi;
    Au = 1;
    var r = /*#__PURE__*/ qn();
    function e(t) {
        var a = this.__data__, n = /*#__PURE__*/ r(a, t);
        return n < 0 ? void 0 : a[n][1];
    }
    return m$1(e, "listCacheGet"), qi = e, qi;
}
m$1(Xh, "require_listCacheGet");
var _i, Ru;
function Yh() {
    if (Ru) return _i;
    Ru = 1;
    var r = /*#__PURE__*/ qn();
    function e(t) {
        return r(this.__data__, t) > -1;
    }
    return m$1(e, "listCacheHas"), _i = e, _i;
}
m$1(Yh, "require_listCacheHas");
var Gi, Mu;
function Zh() {
    if (Mu) return Gi;
    Mu = 1;
    var r = /*#__PURE__*/ qn();
    function e(t, a) {
        var n = this.__data__, i = /*#__PURE__*/ r(n, t);
        return i < 0 ? (++this.size, n.push([
            t,
            a
        ])) : n[i][1] = a, this;
    }
    return m$1(e, "listCacheSet"), Gi = e, Gi;
}
m$1(Zh, "require_listCacheSet");
var Hi, Lu;
function Qh() {
    if (Lu) return Hi;
    Lu = 1;
    var r = /*#__PURE__*/ Uh(), e = /*#__PURE__*/ Kh(), t = /*#__PURE__*/ Xh(), a = /*#__PURE__*/ Yh(), n = /*#__PURE__*/ Zh();
    function i(s) {
        var o = -1, l = s == null ? 0 : s.length;
        for(this.clear(); ++o < l;){
            var u = s[o];
            this.set(u[0], u[1]);
        }
    }
    return m$1(i, "ListCache"), i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, Hi = i, Hi;
}
m$1(Qh, "require_ListCache");
var Wi, Iu;
function Jh() {
    if (Iu) return Wi;
    Iu = 1;
    var r = /*#__PURE__*/ oo(), e = /*#__PURE__*/ In(), t = /*#__PURE__*/ r(e, "Map");
    return Wi = t, Wi;
}
m$1(Jh, "require_Map");
var $i, Ou;
function jh() {
    if (Ou) return $i;
    Ou = 1;
    var r = /*#__PURE__*/ $h(), e = /*#__PURE__*/ Qh(), t = /*#__PURE__*/ Jh();
    function a() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new (t || e),
            string: new r
        };
    }
    return m$1(a, "mapCacheClear"), $i = a, $i;
}
m$1(jh, "require_mapCacheClear");
var Ui, Nu;
function eg() {
    if (Nu) return Ui;
    Nu = 1;
    function r(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
    }
    return m$1(r, "isKeyable"), Ui = r, Ui;
}
m$1(eg, "require_isKeyable");
var Ki, zu;
function _n() {
    if (zu) return Ki;
    zu = 1;
    var r = /*#__PURE__*/ eg();
    function e(t, a) {
        var n = t.__data__;
        return r(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
    }
    return m$1(e, "getMapData"), Ki = e, Ki;
}
m$1(_n, "require_getMapData");
var Xi, Fu;
function rg() {
    if (Fu) return Xi;
    Fu = 1;
    var r = /*#__PURE__*/ _n();
    function e(t) {
        var a = /*#__PURE__*/ r(this, t).delete(t);
        return this.size -= a ? 1 : 0, a;
    }
    return m$1(e, "mapCacheDelete"), Xi = e, Xi;
}
m$1(rg, "require_mapCacheDelete");
var Yi, Vu;
function tg() {
    if (Vu) return Yi;
    Vu = 1;
    var r = /*#__PURE__*/ _n();
    function e(t) {
        return r(this, t).get(t);
    }
    return m$1(e, "mapCacheGet"), Yi = e, Yi;
}
m$1(tg, "require_mapCacheGet");
var Zi, qu;
function ag() {
    if (qu) return Zi;
    qu = 1;
    var r = /*#__PURE__*/ _n();
    function e(t) {
        return r(this, t).has(t);
    }
    return m$1(e, "mapCacheHas"), Zi = e, Zi;
}
m$1(ag, "require_mapCacheHas");
var Qi, _u;
function ng() {
    if (_u) return Qi;
    _u = 1;
    var r = /*#__PURE__*/ _n();
    function e(t, a) {
        var n = /*#__PURE__*/ r(this, t), i = n.size;
        return n.set(t, a), this.size += n.size == i ? 0 : 1, this;
    }
    return m$1(e, "mapCacheSet"), Qi = e, Qi;
}
m$1(ng, "require_mapCacheSet");
var Ji, Gu;
function ig() {
    if (Gu) return Ji;
    Gu = 1;
    var r = /*#__PURE__*/ jh(), e = /*#__PURE__*/ rg(), t = /*#__PURE__*/ tg(), a = /*#__PURE__*/ ag(), n = /*#__PURE__*/ ng();
    function i(s) {
        var o = -1, l = s == null ? 0 : s.length;
        for(this.clear(); ++o < l;){
            var u = s[o];
            this.set(u[0], u[1]);
        }
    }
    return m$1(i, "MapCache"), i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, Ji = i, Ji;
}
m$1(ig, "require_MapCache");
var ji, Hu;
function sg() {
    if (Hu) return ji;
    Hu = 1;
    var r = /*#__PURE__*/ ig(), e = "Expected a function";
    function t(a, n) {
        if (typeof a != "function" || n != null && typeof n != "function") throw new TypeError(e);
        var i = m$1(function() {
            var s = arguments, o = n ? n.apply(this, s) : s[0], l = i.cache;
            if (l.has(o)) return l.get(o);
            var u = /*#__PURE__*/ a.apply(this, s);
            return i.cache = l.set(o, u) || l, u;
        }, "memoized");
        return i.cache = new (t.Cache || r), i;
    }
    return m$1(t, "memoize"), t.Cache = r, ji = t, ji;
}
m$1(sg, "requireMemoize");
var es, Wu;
function og() {
    if (Wu) return es;
    Wu = 1;
    var r = /*#__PURE__*/ sg(), e = 500;
    function t(a) {
        var n = /*#__PURE__*/ r(a, function(s) {
            return i.size === e && i.clear(), s;
        }), i = n.cache;
        return n;
    }
    return m$1(t, "memoizeCapped"), es = t, es;
}
m$1(og, "require_memoizeCapped");
var rs, $u;
function Ov() {
    if ($u) return rs;
    $u = 1;
    var r = /*#__PURE__*/ og(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, a = /*#__PURE__*/ r(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(e, function(s, o, l, u) {
            i.push(l ? u.replace(t, "$1") : o || s);
        }), i;
    });
    return rs = a, rs;
}
m$1(Ov, "require_stringToPath");
var ts, Uu;
function Nv() {
    if (Uu) return ts;
    Uu = 1;
    function r(e, t) {
        for(var a = -1, n = e == null ? 0 : e.length, i = /*#__PURE__*/ Array(n); ++a < n;)i[a] = /*#__PURE__*/ t(e[a], a, e);
        return i;
    }
    return m$1(r, "arrayMap"), ts = r, ts;
}
m$1(Nv, "require_arrayMap");
var as, Ku;
function ug() {
    if (Ku) return as;
    Ku = 1;
    var r = /*#__PURE__*/ Js(), e = /*#__PURE__*/ Nv(), t = /*#__PURE__*/ Fn(), a = /*#__PURE__*/ Fa(), n = r ? r.prototype : void 0, i = n ? n.toString : void 0;
    function s(o) {
        if (typeof o == "string") return o;
        if (t(o)) return e(o, s) + "";
        if (a(o)) return i ? i.call(o) : "";
        var l = o + "";
        return l == "0" && 1 / o == -1 / 0 ? "-0" : l;
    }
    return m$1(s, "baseToString"), as = s, as;
}
m$1(ug, "require_baseToString");
var ns, Xu;
function zv() {
    if (Xu) return ns;
    Xu = 1;
    var r = /*#__PURE__*/ ug();
    function e(t) {
        return t == null ? "" : r(t);
    }
    return m$1(e, "toString"), ns = e, ns;
}
m$1(zv, "requireToString");
var is, Yu;
function Fv() {
    if (Yu) return is;
    Yu = 1;
    var r = /*#__PURE__*/ Fn(), e = /*#__PURE__*/ Lh(), t = /*#__PURE__*/ Ov(), a = /*#__PURE__*/ zv();
    function n(i, s) {
        return r(i) ? i : e(i, s) ? [
            i
        ] : t(/*#__PURE__*/ a(i));
    }
    return m$1(n, "castPath"), is = n, is;
}
m$1(Fv, "require_castPath");
var ss, Zu;
function uo() {
    if (Zu) return ss;
    Zu = 1;
    var r = /*#__PURE__*/ Fa();
    function e(t) {
        if (typeof t == "string" || r(t)) return t;
        var a = t + "";
        return a == "0" && 1 / t == -1 / 0 ? "-0" : a;
    }
    return m$1(e, "toKey"), ss = e, ss;
}
m$1(uo, "require_toKey");
var os, Qu;
function lg() {
    if (Qu) return os;
    Qu = 1;
    var r = /*#__PURE__*/ Fv(), e = /*#__PURE__*/ uo();
    function t(a, n) {
        n = /*#__PURE__*/ r(n, a);
        for(var i = 0, s = n.length; a != null && i < s;)a = a[e(n[i++])];
        return i && i == s ? a : void 0;
    }
    return m$1(t, "baseGet"), os = t, os;
}
m$1(lg, "require_baseGet");
var us, Ju;
function vg() {
    if (Ju) return us;
    Ju = 1;
    var r = /*#__PURE__*/ lg();
    function e(t, a, n) {
        var i = t == null ? void 0 : r(t, a);
        return i === void 0 ? n : i;
    }
    return m$1(e, "get"), us = e, us;
}
m$1(vg, "requireGet");
var fg = /*#__PURE__*/ vg(), cg = /*#__PURE__*/ Na(fg), ls, ju;
function dg() {
    if (ju) return ls;
    ju = 1;
    var r = /*#__PURE__*/ oo(), e = /*#__PURE__*/ function() {
        try {
            var t = /*#__PURE__*/ r(Object, "defineProperty");
            return t({}, "", {}), t;
        } catch  {}
    }();
    return ls = e, ls;
}
m$1(dg, "require_defineProperty");
var vs, el;
function hg() {
    if (el) return vs;
    el = 1;
    var r = /*#__PURE__*/ dg();
    function e(t, a, n) {
        a == "__proto__" && r ? r(t, a, {
            configurable: true,
            enumerable: true,
            value: n,
            writable: true
        }) : t[a] = n;
    }
    return m$1(e, "baseAssignValue"), vs = e, vs;
}
m$1(hg, "require_baseAssignValue");
var fs, rl;
function gg() {
    if (rl) return fs;
    rl = 1;
    var r = /*#__PURE__*/ hg(), e = /*#__PURE__*/ Iv(), t = Object.prototype, a = t.hasOwnProperty;
    function n(i, s, o) {
        var l = i[s];
        (!(a.call(i, s) && e(l, o)) || o === void 0 && !(s in i)) && r(i, s, o);
    }
    return m$1(n, "assignValue"), fs = n, fs;
}
m$1(gg, "require_assignValue");
var cs, tl;
function pg() {
    if (tl) return cs;
    tl = 1;
    var r = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
    function t(a, n) {
        var i = typeof a;
        return n = n ?? r, !!n && (i == "number" || i != "symbol" && e.test(a)) && a > -1 && a % 1 == 0 && a < n;
    }
    return m$1(t, "isIndex"), cs = t, cs;
}
m$1(pg, "require_isIndex");
var ds, al;
function yg() {
    if (al) return ds;
    al = 1;
    var r = /*#__PURE__*/ gg(), e = /*#__PURE__*/ Fv(), t = /*#__PURE__*/ pg(), a = /*#__PURE__*/ za(), n = /*#__PURE__*/ uo();
    function i(s, o, l, u) {
        if (!a(s)) return s;
        o = /*#__PURE__*/ e(o, s);
        for(var f = -1, c = o.length, d = c - 1, g = s; g != null && ++f < c;){
            var h = /*#__PURE__*/ n(o[f]), m = l;
            if (h === "__proto__" || h === "constructor" || h === "prototype") return s;
            if (f != d) {
                var p = g[h];
                m = u ? u(p, h, g) : void 0, m === void 0 && (m = a(p) ? p : t(o[f + 1]) ? [] : {});
            }
            r(g, h, m), g = g[h];
        }
        return s;
    }
    return m$1(i, "baseSet"), ds = i, ds;
}
m$1(yg, "require_baseSet");
var hs, nl;
function mg() {
    if (nl) return hs;
    nl = 1;
    var r = /*#__PURE__*/ yg();
    function e(t, a, n) {
        return t == null ? t : r(t, a, n);
    }
    return m$1(e, "set"), hs = e, hs;
}
m$1(mg, "requireSet");
var bg = /*#__PURE__*/ mg(), wg = /*#__PURE__*/ Na(bg), gs, il;
function xg() {
    if (il) return gs;
    il = 1;
    function r(e, t) {
        var a = -1, n = e.length;
        for(t || (t = /*#__PURE__*/ Array(n)); ++a < n;)t[a] = e[a];
        return t;
    }
    return m$1(r, "copyArray"), gs = r, gs;
}
m$1(xg, "require_copyArray");
var ps, sl;
function Eg() {
    if (sl) return ps;
    sl = 1;
    var r = /*#__PURE__*/ Nv(), e = /*#__PURE__*/ xg(), t = /*#__PURE__*/ Fn(), a = /*#__PURE__*/ Fa(), n = /*#__PURE__*/ Ov(), i = /*#__PURE__*/ uo(), s = /*#__PURE__*/ zv();
    function o(l) {
        return t(l) ? r(l, i) : a(l) ? [
            l
        ] : e(/*#__PURE__*/ n(/*#__PURE__*/ s(l)));
    }
    return m$1(o, "toPath"), ps = o, ps;
}
m$1(Eg, "requireToPath");
var Cg = /*#__PURE__*/ Eg(), Tg = /*#__PURE__*/ Na(Cg), Sg = {
    data: /*#__PURE__*/ m$1(function(e) {
        var t = {
            field: "data",
            bindingEvent: "data",
            allowBinding: false,
            allowSetting: false,
            allowGetting: false,
            settingEvent: "data",
            settingTriggersEvent: false,
            triggerFnName: "trigger",
            immutableKeys: {},
            updateStyle: false,
            beforeGet: /*#__PURE__*/ m$1(function(n) {}, "beforeGet"),
            beforeSet: /*#__PURE__*/ m$1(function(n, i) {}, "beforeSet"),
            onSet: /*#__PURE__*/ m$1(function(n) {}, "onSet"),
            canSet: /*#__PURE__*/ m$1(function(n) {
                return true;
            }, "canSet")
        };
        return e = /*#__PURE__*/ we({}, t, e), m$1(function(n, i) {
            var s = e, o = this, l = o.length !== void 0, u = l ? o : [
                o
            ], f = l ? o[0] : o;
            if (pe(n)) {
                var c = n.indexOf(".") !== -1, d = c && Tg(n);
                if (s.allowGetting && i === void 0) {
                    var g;
                    return f && (s.beforeGet(f), d && f._private[s.field][n] === void 0 ? g = /*#__PURE__*/ cg(f._private[s.field], d) : g = f._private[s.field][n]), g;
                } else if (s.allowSetting && i !== void 0) {
                    var h = !s.immutableKeys[n];
                    if (h) {
                        var m = /*#__PURE__*/ jl({}, n, i);
                        s.beforeSet(o, m);
                        for(var p = 0, y = u.length; p < y; p++){
                            var b1 = u[p];
                            s.canSet(b1) && (d && f._private[s.field][n] === void 0 ? wg(b1._private[s.field], d, i) : b1._private[s.field][n] = i);
                        }
                        s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
                    }
                }
            } else if (s.allowSetting && Ie(n)) {
                var w = n, x, C, T = /*#__PURE__*/ Object.keys(w);
                s.beforeSet(o, w);
                for(var E = 0; E < T.length; E++){
                    x = T[E], C = w[x];
                    var S = !s.immutableKeys[x];
                    if (S) for(var D = 0; D < u.length; D++){
                        var B = u[D];
                        s.canSet(B) && (B._private[s.field][x] = C);
                    }
                }
                s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
            } else if (s.allowBinding && Ke(n)) {
                var P = n;
                o.on(s.bindingEvent, P);
            } else if (s.allowGetting && n === void 0) {
                var A;
                return f && (s.beforeGet(f), A = f._private[s.field]), A;
            }
            return o;
        }, "dataImpl");
    }, "data"),
    removeData: /*#__PURE__*/ m$1(function(e) {
        var t = {
            field: "data",
            event: "data",
            triggerFnName: "trigger",
            triggerEvent: false,
            immutableKeys: {}
        };
        return e = /*#__PURE__*/ we({}, t, e), m$1(function(n) {
            var i = e, s = this, o = s.length !== void 0, l = o ? s : [
                s
            ];
            if (pe(n)) {
                for(var u = /*#__PURE__*/ n.split(/\s+/), f = u.length, c = 0; c < f; c++){
                    var d = u[c];
                    if (!lt(d)) {
                        var g = !i.immutableKeys[d];
                        if (g) for(var h = 0, m = l.length; h < m; h++)l[h]._private[i.field][d] = void 0;
                    }
                }
                i.triggerEvent && s[i.triggerFnName](i.event);
            } else if (n === void 0) {
                for(var p = 0, y = l.length; p < y; p++)for(var b1 = l[p]._private[i.field], w = /*#__PURE__*/ Object.keys(b1), x = 0; x < w.length; x++){
                    var C = w[x], T = !i.immutableKeys[C];
                    T && (b1[C] = void 0);
                }
                i.triggerEvent && s[i.triggerFnName](i.event);
            }
            return s;
        }, "removeDataImpl");
    }, "removeData")
}, kg = {
    eventAliasesOn: /*#__PURE__*/ m$1(function(e) {
        var t = e;
        t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(a, n) {
            var i = this, s = /*#__PURE__*/ Array.prototype.slice.call(arguments, 0);
            return new aa(function(o, l) {
                var u = /*#__PURE__*/ m$1(function(g) {
                    i.off.apply(i, c), o(g);
                }, "callback"), f = /*#__PURE__*/ s.concat([
                    u
                ]), c = /*#__PURE__*/ f.concat([]);
                i.on.apply(i, f);
            });
        };
    }, "eventAliasesOn")
}, Ve = {};
[
    Mh,
    Sg,
    kg
].forEach(function(r) {
    we(Ve, r);
});
var Dg = {
    animate: /*#__PURE__*/ Ve.animate(),
    animation: /*#__PURE__*/ Ve.animation(),
    animated: /*#__PURE__*/ Ve.animated(),
    clearQueue: /*#__PURE__*/ Ve.clearQueue(),
    delay: /*#__PURE__*/ Ve.delay(),
    delayAnimation: /*#__PURE__*/ Ve.delayAnimation(),
    stop: /*#__PURE__*/ Ve.stop()
}, fn = {
    classes: /*#__PURE__*/ m$1(function(e) {
        var t = this;
        if (e === void 0) {
            var a = [];
            return t[0]._private.classes.forEach(function(h) {
                return a.push(h);
            }), a;
        } else Ge(e) || (e = (e || "").match(/\S+/g) || []);
        for(var n = [], i = new ta(e), s = 0; s < t.length; s++){
            for(var o = t[s], l = o._private, u = l.classes, f = false, c = 0; c < e.length; c++){
                var d = e[c], g = /*#__PURE__*/ u.has(d);
                if (!g) {
                    f = true;
                    break;
                }
            }
            f || (f = u.size !== e.length), f && (l.classes = i, n.push(o));
        }
        return n.length > 0 && this.spawn(n).updateStyle().emit("class"), t;
    }, "classes"),
    addClass: /*#__PURE__*/ m$1(function(e) {
        return this.toggleClass(e, true);
    }, "addClass"),
    hasClass: /*#__PURE__*/ m$1(function(e) {
        var t = this[0];
        return t != null && t._private.classes.has(e);
    }, "hasClass"),
    toggleClass: /*#__PURE__*/ m$1(function(e, t) {
        Ge(e) || (e = e.match(/\S+/g) || []);
        for(var a = this, n = t === void 0, i = [], s = 0, o = a.length; s < o; s++)for(var l = a[s], u = l._private.classes, f = false, c = 0; c < e.length; c++){
            var d = e[c], g = /*#__PURE__*/ u.has(d), h = false;
            t || n && !g ? (u.add(d), h = true) : (!t || n && g) && (u.delete(d), h = true), !f && h && (i.push(l), f = true);
        }
        return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
    }, "toggleClass"),
    removeClass: /*#__PURE__*/ m$1(function(e) {
        return this.toggleClass(e, false);
    }, "removeClass"),
    flashClass: /*#__PURE__*/ m$1(function(e, t) {
        var a = this;
        if (t == null) t = 250;
        else if (t === 0) return a;
        return a.addClass(e), setTimeout(function() {
            a.removeClass(e);
        }, t), a;
    }, "flashClass")
};
fn.className = fn.classNames = fn.classes;
var Le = {
    metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
    comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
    boolOp: "\\?|\\!|\\^",
    string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
    number: ar,
    meta: "degree|indegree|outdegree",
    separator: "\\s*,\\s*",
    descendant: "\\s+",
    child: "\\s+>\\s+",
    subject: "\\$",
    group: "node|edge|\\*",
    directedEdge: "\\s+->\\s+",
    undirectedEdge: "\\s+<->\\s+"
};
Le.variable = "(?:[\\w-.]|(?:\\\\" + Le.metaChar + "))+";
Le.className = "(?:[\\w-]|(?:\\\\" + Le.metaChar + "))+";
Le.value = Le.string + "|" + Le.number;
Le.id = Le.variable;
(function() {
    var r, e, t;
    for(r = /*#__PURE__*/ Le.comparatorOp.split("|"), t = 0; t < r.length; t++)e = r[t], Le.comparatorOp += "|@" + e;
    for(r = /*#__PURE__*/ Le.comparatorOp.split("|"), t = 0; t < r.length; t++)e = r[t], !(e.indexOf("!") >= 0) && e !== "=" && (Le.comparatorOp += "|\\!" + e);
})();
var _e = /*#__PURE__*/ m$1(function() {
    return {
        checks: []
    };
}, "newQuery"), oe = {
    GROUP: 0,
    COLLECTION: 1,
    FILTER: 2,
    DATA_COMPARE: 3,
    DATA_EXIST: 4,
    DATA_BOOL: 5,
    META_COMPARE: 6,
    STATE: 7,
    ID: 8,
    CLASS: 9,
    UNDIRECTED_EDGE: 10,
    DIRECTED_EDGE: 11,
    NODE_SOURCE: 12,
    NODE_TARGET: 13,
    NODE_NEIGHBOR: 14,
    CHILD: 15,
    DESCENDANT: 16,
    PARENT: 17,
    ANCESTOR: 18,
    COMPOUND_SPLIT: 19,
    TRUE: 20
}, Ns = /*#__PURE__*/ [
    {
        selector: ":selected",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.selected();
        }, "matches")
    },
    {
        selector: ":unselected",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.selected();
        }, "matches")
    },
    {
        selector: ":selectable",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.selectable();
        }, "matches")
    },
    {
        selector: ":unselectable",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.selectable();
        }, "matches")
    },
    {
        selector: ":locked",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.locked();
        }, "matches")
    },
    {
        selector: ":unlocked",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.locked();
        }, "matches")
    },
    {
        selector: ":visible",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.visible();
        }, "matches")
    },
    {
        selector: ":hidden",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.visible();
        }, "matches")
    },
    {
        selector: ":transparent",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.transparent();
        }, "matches")
    },
    {
        selector: ":grabbed",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.grabbed();
        }, "matches")
    },
    {
        selector: ":free",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.grabbed();
        }, "matches")
    },
    {
        selector: ":removed",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.removed();
        }, "matches")
    },
    {
        selector: ":inside",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.removed();
        }, "matches")
    },
    {
        selector: ":grabbable",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.grabbable();
        }, "matches")
    },
    {
        selector: ":ungrabbable",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.grabbable();
        }, "matches")
    },
    {
        selector: ":animated",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.animated();
        }, "matches")
    },
    {
        selector: ":unanimated",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.animated();
        }, "matches")
    },
    {
        selector: ":parent",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.isParent();
        }, "matches")
    },
    {
        selector: ":childless",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.isChildless();
        }, "matches")
    },
    {
        selector: ":child",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.isChild();
        }, "matches")
    },
    {
        selector: ":orphan",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.isOrphan();
        }, "matches")
    },
    {
        selector: ":nonorphan",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.isChild();
        }, "matches")
    },
    {
        selector: ":compound",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
        }, "matches")
    },
    {
        selector: ":loop",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.isLoop();
        }, "matches")
    },
    {
        selector: ":simple",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.isSimple();
        }, "matches")
    },
    {
        selector: ":active",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.active();
        }, "matches")
    },
    {
        selector: ":inactive",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.active();
        }, "matches")
    },
    {
        selector: ":backgrounding",
        matches: /*#__PURE__*/ m$1(function(e) {
            return e.backgrounding();
        }, "matches")
    },
    {
        selector: ":nonbackgrounding",
        matches: /*#__PURE__*/ m$1(function(e) {
            return !e.backgrounding();
        }, "matches")
    }
].sort(function(r, e) {
    return Sc(r.selector, e.selector);
}), Bg = /*#__PURE__*/ function() {
    for(var r = {}, e, t = 0; t < Ns.length; t++)e = Ns[t], r[e.selector] = e.matches;
    return r;
}(), Pg = /*#__PURE__*/ m$1(function(e, t) {
    return Bg[e](t);
}, "stateSelectorMatches"), Ag = "(" + Ns.map(function(r) {
    return r.selector;
}).join("|") + ")", zt = /*#__PURE__*/ m$1(function(e) {
    return e.replace(new RegExp("\\\\(" + Le.metaChar + ")", "g"), function(t, a) {
        return a;
    });
}, "cleanMetaChars"), tt = /*#__PURE__*/ m$1(function(e, t, a) {
    e[e.length - 1] = a;
}, "replaceLastQuery"), zs = [
    {
        name: "group",
        query: true,
        regex: "(" + Le.group + ")",
        populate: /*#__PURE__*/ m$1(function(e, t, a) {
            var n = /*#__PURE__*/ je(a, 1), i = n[0];
            t.checks.push({
                type: oe.GROUP,
                value: i === "*" ? i : i + "s"
            });
        }, "populate")
    },
    {
        name: "state",
        query: true,
        regex: Ag,
        populate: /*#__PURE__*/ m$1(function(e, t, a) {
            var n = /*#__PURE__*/ je(a, 1), i = n[0];
            t.checks.push({
                type: oe.STATE,
                value: i
            });
        }, "populate")
    },
    {
        name: "id",
        query: true,
        regex: "\\#(" + Le.id + ")",
        populate: /*#__PURE__*/ m$1(function(e, t, a) {
            var n = /*#__PURE__*/ je(a, 1), i = n[0];
            t.checks.push({
                type: oe.ID,
                value: /*#__PURE__*/ zt(i)
            });
        }, "populate")
    },
    {
        name: "className",
        query: true,
        regex: "\\.(" + Le.className + ")",
        populate: /*#__PURE__*/ m$1(function(e, t, a) {
            var n = /*#__PURE__*/ je(a, 1), i = n[0];
            t.checks.push({
                type: oe.CLASS,
                value: /*#__PURE__*/ zt(i)
            });
        }, "populate")
    },
    {
        name: "dataExists",
        query: true,
        regex: "\\[\\s*(" + Le.variable + ")\\s*\\]",
        populate: /*#__PURE__*/ m$1(function(e, t, a) {
            var n = /*#__PURE__*/ je(a, 1), i = n[0];
            t.checks.push({
                type: oe.DATA_EXIST,
                field: /*#__PURE__*/ zt(i)
            });
        }, "populate")
    },
    {
        name: "dataCompare",
        query: true,
        regex: "\\[\\s*(" + Le.variable + ")\\s*(" + Le.comparatorOp + ")\\s*(" + Le.value + ")\\s*\\]",
        populate: /*#__PURE__*/ m$1(function(e, t, a) {
            var n = /*#__PURE__*/ je(a, 3), i = n[0], s = n[1], o = n[2], l = new RegExp("^" + Le.string + "$").exec(o) != null;
            l ? o = /*#__PURE__*/ o.substring(1, o.length - 1) : o = /*#__PURE__*/ parseFloat(o), t.checks.push({
                type: oe.DATA_COMPARE,
                field: /*#__PURE__*/ zt(i),
                operator: s,
                value: o
            });
        }, "populate")
    },
    {
        name: "dataBool",
        query: true,
        regex: "\\[\\s*(" + Le.boolOp + ")\\s*(" + Le.variable + ")\\s*\\]",
        populate: /*#__PURE__*/ m$1(function(e, t, a) {
            var n = /*#__PURE__*/ je(a, 2), i = n[0], s = n[1];
            t.checks.push({
                type: oe.DATA_BOOL,
                field: /*#__PURE__*/ zt(s),
                operator: i
            });
        }, "populate")
    },
    {
        name: "metaCompare",
        query: true,
        regex: "\\[\\[\\s*(" + Le.meta + ")\\s*(" + Le.comparatorOp + ")\\s*(" + Le.number + ")\\s*\\]\\]",
        populate: /*#__PURE__*/ m$1(function(e, t, a) {
            var n = /*#__PURE__*/ je(a, 3), i = n[0], s = n[1], o = n[2];
            t.checks.push({
                type: oe.META_COMPARE,
                field: /*#__PURE__*/ zt(i),
                operator: s,
                value: /*#__PURE__*/ parseFloat(o)
            });
        }, "populate")
    },
    {
        name: "nextQuery",
        separator: true,
        regex: Le.separator,
        populate: /*#__PURE__*/ m$1(function(e, t) {
            var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
            a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
            var o = e[e.length++] = /*#__PURE__*/ _e();
            return o;
        }, "populate")
    },
    {
        name: "directedEdge",
        separator: true,
        regex: Le.directedEdge,
        populate: /*#__PURE__*/ m$1(function(e, t) {
            if (e.currentSubject == null) {
                var a = /*#__PURE__*/ _e(), n = t, i = /*#__PURE__*/ _e();
                return a.checks.push({
                    type: oe.DIRECTED_EDGE,
                    source: n,
                    target: i
                }), tt(e, t, a), e.edgeCount++, i;
            } else {
                var s = /*#__PURE__*/ _e(), o = t, l = /*#__PURE__*/ _e();
                return s.checks.push({
                    type: oe.NODE_SOURCE,
                    source: o,
                    target: l
                }), tt(e, t, s), e.edgeCount++, l;
            }
        }, "populate")
    },
    {
        name: "undirectedEdge",
        separator: true,
        regex: Le.undirectedEdge,
        populate: /*#__PURE__*/ m$1(function(e, t) {
            if (e.currentSubject == null) {
                var a = /*#__PURE__*/ _e(), n = t, i = /*#__PURE__*/ _e();
                return a.checks.push({
                    type: oe.UNDIRECTED_EDGE,
                    nodes: [
                        n,
                        i
                    ]
                }), tt(e, t, a), e.edgeCount++, i;
            } else {
                var s = /*#__PURE__*/ _e(), o = t, l = /*#__PURE__*/ _e();
                return s.checks.push({
                    type: oe.NODE_NEIGHBOR,
                    node: o,
                    neighbor: l
                }), tt(e, t, s), l;
            }
        }, "populate")
    },
    {
        name: "child",
        separator: true,
        regex: Le.child,
        populate: /*#__PURE__*/ m$1(function(e, t) {
            if (e.currentSubject == null) {
                var a = /*#__PURE__*/ _e(), n = /*#__PURE__*/ _e(), i = e[e.length - 1];
                return a.checks.push({
                    type: oe.CHILD,
                    parent: i,
                    child: n
                }), tt(e, t, a), e.compoundCount++, n;
            } else if (e.currentSubject === t) {
                var s = /*#__PURE__*/ _e(), o = e[e.length - 1], l = /*#__PURE__*/ _e(), u = /*#__PURE__*/ _e(), f = /*#__PURE__*/ _e(), c = /*#__PURE__*/ _e();
                return s.checks.push({
                    type: oe.COMPOUND_SPLIT,
                    left: o,
                    right: l,
                    subject: u
                }), u.checks = t.checks, t.checks = [
                    {
                        type: oe.TRUE
                    }
                ], c.checks.push({
                    type: oe.TRUE
                }), l.checks.push({
                    type: oe.PARENT,
                    parent: c,
                    child: f
                }), tt(e, o, s), e.currentSubject = u, e.compoundCount++, f;
            } else {
                var d = /*#__PURE__*/ _e(), g = /*#__PURE__*/ _e(), h = [
                    {
                        type: oe.PARENT,
                        parent: d,
                        child: g
                    }
                ];
                return d.checks = t.checks, t.checks = h, e.compoundCount++, g;
            }
        }, "populate")
    },
    {
        name: "descendant",
        separator: true,
        regex: Le.descendant,
        populate: /*#__PURE__*/ m$1(function(e, t) {
            if (e.currentSubject == null) {
                var a = /*#__PURE__*/ _e(), n = /*#__PURE__*/ _e(), i = e[e.length - 1];
                return a.checks.push({
                    type: oe.DESCENDANT,
                    ancestor: i,
                    descendant: n
                }), tt(e, t, a), e.compoundCount++, n;
            } else if (e.currentSubject === t) {
                var s = /*#__PURE__*/ _e(), o = e[e.length - 1], l = /*#__PURE__*/ _e(), u = /*#__PURE__*/ _e(), f = /*#__PURE__*/ _e(), c = /*#__PURE__*/ _e();
                return s.checks.push({
                    type: oe.COMPOUND_SPLIT,
                    left: o,
                    right: l,
                    subject: u
                }), u.checks = t.checks, t.checks = [
                    {
                        type: oe.TRUE
                    }
                ], c.checks.push({
                    type: oe.TRUE
                }), l.checks.push({
                    type: oe.ANCESTOR,
                    ancestor: c,
                    descendant: f
                }), tt(e, o, s), e.currentSubject = u, e.compoundCount++, f;
            } else {
                var d = /*#__PURE__*/ _e(), g = /*#__PURE__*/ _e(), h = [
                    {
                        type: oe.ANCESTOR,
                        ancestor: d,
                        descendant: g
                    }
                ];
                return d.checks = t.checks, t.checks = h, e.compoundCount++, g;
            }
        }, "populate")
    },
    {
        name: "subject",
        modifier: true,
        regex: Le.subject,
        populate: /*#__PURE__*/ m$1(function(e, t) {
            if (e.currentSubject != null && e.currentSubject !== t) return qe("Redefinition of subject in selector `" + e.toString() + "`"), false;
            e.currentSubject = t;
            var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
            i === oe.DIRECTED_EDGE ? n.type = oe.NODE_TARGET : i === oe.UNDIRECTED_EDGE && (n.type = oe.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
        }, "populate")
    }
];
zs.forEach(function(r) {
    return r.regexObj = new RegExp("^" + r.regex);
});
var Rg = /*#__PURE__*/ m$1(function(e) {
    for(var t, a, n, i = 0; i < zs.length; i++){
        var s = zs[i], o = s.name, l = /*#__PURE__*/ e.match(s.regexObj);
        if (l != null) {
            a = l, t = s, n = o;
            var u = l[0];
            e = /*#__PURE__*/ e.substring(u.length);
            break;
        }
    }
    return {
        expr: t,
        match: a,
        name: n,
        remaining: e
    };
}, "consumeExpr"), Mg = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ e.match(/^\s+/);
    if (t) {
        var a = t[0];
        e = /*#__PURE__*/ e.substring(a.length);
    }
    return e;
}, "consumeWhitespace"), Lg = /*#__PURE__*/ m$1(function(e) {
    var t = this, a = t.inputText = e, n = t[0] = /*#__PURE__*/ _e();
    for(t.length = 1, a = /*#__PURE__*/ Mg(a);;){
        var i = /*#__PURE__*/ Rg(a);
        if (i.expr == null) return qe("The selector `" + e + "`is invalid"), false;
        var s = /*#__PURE__*/ i.match.slice(1), o = /*#__PURE__*/ i.expr.populate(t, n, s);
        if (o === false) return false;
        if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/)) break;
    }
    var l = t[t.length - 1];
    t.currentSubject != null && (l.subject = t.currentSubject), l.edgeCount = t.edgeCount, l.compoundCount = t.compoundCount;
    for(var u = 0; u < t.length; u++){
        var f = t[u];
        if (f.compoundCount > 0 && f.edgeCount > 0) return qe("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), false;
        if (f.edgeCount > 1) return qe("The selector `" + e + "` is invalid because it uses multiple edge selectors"), false;
        f.edgeCount === 1 && qe("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
    }
    return true;
}, "parse"), Ig = /*#__PURE__*/ m$1(function() {
    if (this.toStringCache != null) return this.toStringCache;
    for(var e = /*#__PURE__*/ m$1(function(f) {
        return f ?? "";
    }, "clean"), t = /*#__PURE__*/ m$1(function(f) {
        return pe(f) ? '"' + f + '"' : e(f);
    }, "cleanVal"), a = /*#__PURE__*/ m$1(function(f) {
        return " " + f + " ";
    }, "space"), n = /*#__PURE__*/ m$1(function(f, c) {
        var d = f.type, g = f.value;
        switch(d){
            case oe.GROUP:
                {
                    var h = /*#__PURE__*/ e(g);
                    return h.substring(0, h.length - 1);
                }
            case oe.DATA_COMPARE:
                {
                    var m = f.field, p = f.operator;
                    return "[" + m + a(/*#__PURE__*/ e(p)) + t(g) + "]";
                }
            case oe.DATA_BOOL:
                {
                    var y = f.operator, b1 = f.field;
                    return "[" + e(y) + b1 + "]";
                }
            case oe.DATA_EXIST:
                {
                    var w = f.field;
                    return "[" + w + "]";
                }
            case oe.META_COMPARE:
                {
                    var x = f.operator, C = f.field;
                    return "[[" + C + a(/*#__PURE__*/ e(x)) + t(g) + "]]";
                }
            case oe.STATE:
                return g;
            case oe.ID:
                return "#" + g;
            case oe.CLASS:
                return "." + g;
            case oe.PARENT:
            case oe.CHILD:
                return i(f.parent, c) + a(">") + i(f.child, c);
            case oe.ANCESTOR:
            case oe.DESCENDANT:
                return i(f.ancestor, c) + " " + i(f.descendant, c);
            case oe.COMPOUND_SPLIT:
                {
                    var T = /*#__PURE__*/ i(f.left, c), E = /*#__PURE__*/ i(f.subject, c), S = /*#__PURE__*/ i(f.right, c);
                    return T + (T.length > 0 ? " " : "") + E + S;
                }
            case oe.TRUE:
                return "";
        }
    }, "checkToString"), i = /*#__PURE__*/ m$1(function(f, c) {
        return f.checks.reduce(function(d, g, h) {
            return d + (c === f && h === 0 ? "$" : "") + n(g, c);
        }, "");
    }, "queryToString"), s = "", o = 0; o < this.length; o++){
        var l = this[o];
        s += /*#__PURE__*/ i(l, l.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
    }
    return this.toStringCache = s, s;
}, "toString"), Og = {
    parse: Lg,
    toString: Ig
}, Vv = /*#__PURE__*/ m$1(function(e, t, a) {
    var n, i = /*#__PURE__*/ pe(e), s = /*#__PURE__*/ ne(e), o = /*#__PURE__*/ pe(a), l, u, f = false, c = false, d = false;
    switch(t.indexOf("!") >= 0 && (t = /*#__PURE__*/ t.replace("!", ""), c = true), t.indexOf("@") >= 0 && (t = /*#__PURE__*/ t.replace("@", ""), f = true), (i || o || f) && (l = !i && !s ? "" : "" + e, u = "" + a), f && (e = l = /*#__PURE__*/ l.toLowerCase(), a = u = /*#__PURE__*/ u.toLowerCase()), t){
        case "*=":
            n = l.indexOf(u) >= 0;
            break;
        case "$=":
            n = l.indexOf(u, l.length - u.length) >= 0;
            break;
        case "^=":
            n = l.indexOf(u) === 0;
            break;
        case "=":
            n = e === a;
            break;
        case ">":
            d = true, n = e > a;
            break;
        case ">=":
            d = true, n = e >= a;
            break;
        case "<":
            d = true, n = e < a;
            break;
        case "<=":
            d = true, n = e <= a;
            break;
        default:
            n = false;
            break;
    }
    return c && (e != null || !d) && (n = !n), n;
}, "valCmp"), Ng = /*#__PURE__*/ m$1(function(e, t) {
    switch(t){
        case "?":
            return !!e;
        case "!":
            return !e;
        case "^":
            return e === void 0;
    }
}, "boolCmp"), zg = /*#__PURE__*/ m$1(function(e) {
    return e !== void 0;
}, "existCmp"), lo = /*#__PURE__*/ m$1(function(e, t) {
    return e.data(t);
}, "data"), Fg = /*#__PURE__*/ m$1(function(e, t) {
    return e[t]();
}, "meta"), Ye = [], $e = /*#__PURE__*/ m$1(function(e, t) {
    return e.checks.every(function(a) {
        return Ye[a.type](a, t);
    });
}, "matches");
Ye[oe.GROUP] = function(r, e) {
    var t = r.value;
    return t === "*" || t === e.group();
};
Ye[oe.STATE] = function(r, e) {
    var t = r.value;
    return Pg(t, e);
};
Ye[oe.ID] = function(r, e) {
    var t = r.value;
    return e.id() === t;
};
Ye[oe.CLASS] = function(r, e) {
    var t = r.value;
    return e.hasClass(t);
};
Ye[oe.META_COMPARE] = function(r, e) {
    var t = r.field, a = r.operator, n = r.value;
    return Vv(/*#__PURE__*/ Fg(e, t), a, n);
};
Ye[oe.DATA_COMPARE] = function(r, e) {
    var t = r.field, a = r.operator, n = r.value;
    return Vv(/*#__PURE__*/ lo(e, t), a, n);
};
Ye[oe.DATA_BOOL] = function(r, e) {
    var t = r.field, a = r.operator;
    return Ng(/*#__PURE__*/ lo(e, t), a);
};
Ye[oe.DATA_EXIST] = function(r, e) {
    var t = r.field;
    return r.operator, zg(/*#__PURE__*/ lo(e, t));
};
Ye[oe.UNDIRECTED_EDGE] = function(r, e) {
    var t = r.nodes[0], a = r.nodes[1], n = /*#__PURE__*/ e.source(), i = /*#__PURE__*/ e.target();
    return $e(t, n) && $e(a, i) || $e(a, n) && $e(t, i);
};
Ye[oe.NODE_NEIGHBOR] = function(r, e) {
    return $e(r.node, e) && e.neighborhood().some(function(t) {
        return t.isNode() && $e(r.neighbor, t);
    });
};
Ye[oe.DIRECTED_EDGE] = function(r, e) {
    return $e(r.source, /*#__PURE__*/ e.source()) && $e(r.target, /*#__PURE__*/ e.target());
};
Ye[oe.NODE_SOURCE] = function(r, e) {
    return $e(r.source, e) && e.outgoers().some(function(t) {
        return t.isNode() && $e(r.target, t);
    });
};
Ye[oe.NODE_TARGET] = function(r, e) {
    return $e(r.target, e) && e.incomers().some(function(t) {
        return t.isNode() && $e(r.source, t);
    });
};
Ye[oe.CHILD] = function(r, e) {
    return $e(r.child, e) && $e(r.parent, /*#__PURE__*/ e.parent());
};
Ye[oe.PARENT] = function(r, e) {
    return $e(r.parent, e) && e.children().some(function(t) {
        return $e(r.child, t);
    });
};
Ye[oe.DESCENDANT] = function(r, e) {
    return $e(r.descendant, e) && e.ancestors().some(function(t) {
        return $e(r.ancestor, t);
    });
};
Ye[oe.ANCESTOR] = function(r, e) {
    return $e(r.ancestor, e) && e.descendants().some(function(t) {
        return $e(r.descendant, t);
    });
};
Ye[oe.COMPOUND_SPLIT] = function(r, e) {
    return $e(r.subject, e) && $e(r.left, e) && $e(r.right, e);
};
Ye[oe.TRUE] = function() {
    return true;
};
Ye[oe.COLLECTION] = function(r, e) {
    var t = r.value;
    return t.has(e);
};
Ye[oe.FILTER] = function(r, e) {
    var t = r.value;
    return t(e);
};
var Vg = /*#__PURE__*/ m$1(function(e) {
    var t = this;
    if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === oe.ID) return e.getElementById(t[0].checks[0].value).collection();
    var a = /*#__PURE__*/ m$1(function(i) {
        for(var s = 0; s < t.length; s++){
            var o = t[s];
            if ($e(o, i)) return true;
        }
        return false;
    }, "selectorFunction");
    return t.text() == null && (a = /*#__PURE__*/ m$1(function() {
        return true;
    }, "selectorFunction")), e.filter(a);
}, "filter"), qg = /*#__PURE__*/ m$1(function(e) {
    for(var t = this, a = 0; a < t.length; a++){
        var n = t[a];
        if ($e(n, e)) return true;
    }
    return false;
}, "matches"), _g = {
    matches: qg,
    filter: Vg
}, ct = /*#__PURE__*/ m$1(function(e) {
    this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || pe(e) && e.match(/^\s*$/) || (Br(e) ? this.addQuery({
        checks: [
            {
                type: oe.COLLECTION,
                value: /*#__PURE__*/ e.collection()
            }
        ]
    }) : Ke(e) ? this.addQuery({
        checks: [
            {
                type: oe.FILTER,
                value: e
            }
        ]
    }) : pe(e) ? this.parse(e) || (this.invalid = true) : Ue("A selector must be created from a string; found "));
}, "Selector"), dt = ct.prototype;
[
    Og,
    _g
].forEach(function(r) {
    return we(dt, r);
});
dt.text = function() {
    return this.inputText;
};
dt.size = function() {
    return this.length;
};
dt.eq = function(r) {
    return this[r];
};
dt.sameText = function(r) {
    return !this.invalid && !r.invalid && this.text() === r.text();
};
dt.addQuery = function(r) {
    this[this.length++] = r;
};
dt.selector = dt.toString;
var ot = {
    allAre: /*#__PURE__*/ m$1(function(e) {
        var t = new ct(e);
        return this.every(function(a) {
            return t.matches(a);
        });
    }, "allAre"),
    is: /*#__PURE__*/ m$1(function(e) {
        var t = new ct(e);
        return this.some(function(a) {
            return t.matches(a);
        });
    }, "is"),
    some: /*#__PURE__*/ m$1(function(e, t) {
        for(var a = 0; a < this.length; a++){
            var n = t ? e.apply(t, [
                this[a],
                a,
                this
            ]) : e(this[a], a, this);
            if (n) return true;
        }
        return false;
    }, "some"),
    every: /*#__PURE__*/ m$1(function(e, t) {
        for(var a = 0; a < this.length; a++){
            var n = t ? e.apply(t, [
                this[a],
                a,
                this
            ]) : e(this[a], a, this);
            if (!n) return false;
        }
        return true;
    }, "every"),
    same: /*#__PURE__*/ m$1(function(e) {
        if (this === e) return true;
        e = /*#__PURE__*/ this.cy().collection(e);
        var t = this.length, a = e.length;
        return t !== a ? false : t === 1 ? this[0] === e[0] : this.every(function(n) {
            return e.hasElementWithId(/*#__PURE__*/ n.id());
        });
    }, "same"),
    anySame: /*#__PURE__*/ m$1(function(e) {
        return e = /*#__PURE__*/ this.cy().collection(e), this.some(function(t) {
            return e.hasElementWithId(/*#__PURE__*/ t.id());
        });
    }, "anySame"),
    allAreNeighbors: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ this.cy().collection(e);
        var t = /*#__PURE__*/ this.neighborhood();
        return e.every(function(a) {
            return t.hasElementWithId(/*#__PURE__*/ a.id());
        });
    }, "allAreNeighbors"),
    contains: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ this.cy().collection(e);
        var t = this;
        return e.every(function(a) {
            return t.hasElementWithId(/*#__PURE__*/ a.id());
        });
    }, "contains")
};
ot.allAreNeighbours = ot.allAreNeighbors;
ot.has = ot.contains;
ot.equal = ot.equals = ot.same;
var Mr = /*#__PURE__*/ m$1(function(e, t) {
    return m$1(function(n, i, s, o) {
        var l = n, u = this, f;
        if (l == null ? f = "" : Br(l) && l.length === 1 && (f = /*#__PURE__*/ l.id()), u.length === 1 && f) {
            var c = u[0]._private, d = c.traversalCache = c.traversalCache || {}, g = d[t] = d[t] || [], h = /*#__PURE__*/ Pt(f), m = g[h];
            return m || (g[h] = /*#__PURE__*/ e.call(u, n, i, s, o));
        } else return e.call(u, n, i, s, o);
    }, "traversalCache");
}, "cache"), ea = {
    parent: /*#__PURE__*/ m$1(function(e) {
        var t = [];
        if (this.length === 1) {
            var a = this[0]._private.parent;
            if (a) return a;
        }
        for(var n = 0; n < this.length; n++){
            var i = this[n], s = i._private.parent;
            s && t.push(s);
        }
        return this.spawn(t, true).filter(e);
    }, "parent"),
    parents: /*#__PURE__*/ m$1(function(e) {
        for(var t = [], a = /*#__PURE__*/ this.parent(); a.nonempty();){
            for(var n = 0; n < a.length; n++){
                var i = a[n];
                t.push(i);
            }
            a = /*#__PURE__*/ a.parent();
        }
        return this.spawn(t, true).filter(e);
    }, "parents"),
    commonAncestors: /*#__PURE__*/ m$1(function(e) {
        for(var t, a = 0; a < this.length; a++){
            var n = this[a], i = /*#__PURE__*/ n.parents();
            t = t || i, t = /*#__PURE__*/ t.intersect(i);
        }
        return t.filter(e);
    }, "commonAncestors"),
    orphans: /*#__PURE__*/ m$1(function(e) {
        return this.stdFilter(function(t) {
            return t.isOrphan();
        }).filter(e);
    }, "orphans"),
    nonorphans: /*#__PURE__*/ m$1(function(e) {
        return this.stdFilter(function(t) {
            return t.isChild();
        }).filter(e);
    }, "nonorphans"),
    children: /*#__PURE__*/ Mr(function(r) {
        for(var e = [], t = 0; t < this.length; t++)for(var a = this[t], n = a._private.children, i = 0; i < n.length; i++)e.push(n[i]);
        return this.spawn(e, true).filter(r);
    }, "children"),
    siblings: /*#__PURE__*/ m$1(function(e) {
        return this.parent().children().not(this).filter(e);
    }, "siblings"),
    isParent: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) return e.isNode() && e._private.children.length !== 0;
    }, "isParent"),
    isChildless: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) return e.isNode() && e._private.children.length === 0;
    }, "isChildless"),
    isChild: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) return e.isNode() && e._private.parent != null;
    }, "isChild"),
    isOrphan: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) return e.isNode() && e._private.parent == null;
    }, "isOrphan"),
    descendants: /*#__PURE__*/ m$1(function(e) {
        var t = [];
        function a(n) {
            for(var i = 0; i < n.length; i++){
                var s = n[i];
                t.push(s), s.children().nonempty() && a(/*#__PURE__*/ s.children());
            }
        }
        return m$1(a, "add"), a(/*#__PURE__*/ this.children()), this.spawn(t, true).filter(e);
    }, "descendants")
};
function vo(r, e, t, a) {
    for(var n = [], i = new ta, s = /*#__PURE__*/ r.cy(), o = /*#__PURE__*/ s.hasCompoundNodes(), l = 0; l < r.length; l++){
        var u = r[l];
        t ? n.push(u) : o && a(n, i, u);
    }
    for(; n.length > 0;){
        var f = /*#__PURE__*/ n.shift();
        e(f), i.add(/*#__PURE__*/ f.id()), o && a(n, i, f);
    }
    return r;
}
m$1(vo, "forEachCompound");
function qv(r, e, t) {
    if (t.isParent()) for(var a = t._private.children, n = 0; n < a.length; n++){
        var i = a[n];
        e.has(/*#__PURE__*/ i.id()) || r.push(i);
    }
}
m$1(qv, "addChildren");
ea.forEachDown = function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return vo(this, r, e, qv);
};
function _v(r, e, t) {
    if (t.isChild()) {
        var a = t._private.parent;
        e.has(/*#__PURE__*/ a.id()) || r.push(a);
    }
}
m$1(_v, "addParent");
ea.forEachUp = function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return vo(this, r, e, _v);
};
function Gg(r, e, t) {
    _v(r, e, t), qv(r, e, t);
}
m$1(Gg, "addParentAndChildren");
ea.forEachUpAndDown = function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return vo(this, r, e, Gg);
};
ea.ancestors = ea.parents;
var Pa, Gv;
Pa = Gv = {
    data: /*#__PURE__*/ Ve.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: true,
        allowSetting: true,
        settingEvent: "data",
        settingTriggersEvent: true,
        triggerFnName: "trigger",
        allowGetting: true,
        immutableKeys: {
            id: true,
            source: true,
            target: true,
            parent: true
        },
        updateStyle: true
    }),
    removeData: /*#__PURE__*/ Ve.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: true,
        immutableKeys: {
            id: true,
            source: true,
            target: true,
            parent: true
        },
        updateStyle: true
    }),
    scratch: /*#__PURE__*/ Ve.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: true,
        allowSetting: true,
        settingEvent: "scratch",
        settingTriggersEvent: true,
        triggerFnName: "trigger",
        allowGetting: true,
        updateStyle: true
    }),
    removeScratch: /*#__PURE__*/ Ve.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    }),
    rscratch: /*#__PURE__*/ Ve.data({
        field: "rscratch",
        allowBinding: false,
        allowSetting: true,
        settingTriggersEvent: false,
        allowGetting: true
    }),
    removeRscratch: /*#__PURE__*/ Ve.removeData({
        field: "rscratch",
        triggerEvent: false
    }),
    id: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) return e._private.data.id;
    }, "id")
};
Pa.attr = Pa.data;
Pa.removeAttr = Pa.removeData;
var Hg = Gv, Gn = {};
function ys(r) {
    return function(e) {
        var t = this;
        if (e === void 0 && (e = true), t.length !== 0) if (t.isNode() && !t.removed()) {
            for(var a = 0, n = t[0], i = n._private.edges, s = 0; s < i.length; s++){
                var o = i[s];
                !e && o.isLoop() || (a += /*#__PURE__*/ r(n, o));
            }
            return a;
        } else return;
    };
}
m$1(ys, "defineDegreeFunction");
we(Gn, {
    degree: /*#__PURE__*/ ys(function(r, e) {
        return e.source().same(/*#__PURE__*/ e.target()) ? 2 : 1;
    }),
    indegree: /*#__PURE__*/ ys(function(r, e) {
        return e.target().same(r) ? 1 : 0;
    }),
    outdegree: /*#__PURE__*/ ys(function(r, e) {
        return e.source().same(r) ? 1 : 0;
    })
});
function Ft(r, e) {
    return function(t) {
        for(var a, n = /*#__PURE__*/ this.nodes(), i = 0; i < n.length; i++){
            var s = n[i], o = /*#__PURE__*/ s[r](t);
            o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
        }
        return a;
    };
}
m$1(Ft, "defineDegreeBoundsFunction");
we(Gn, {
    minDegree: /*#__PURE__*/ Ft("degree", function(r, e) {
        return r < e;
    }),
    maxDegree: /*#__PURE__*/ Ft("degree", function(r, e) {
        return r > e;
    }),
    minIndegree: /*#__PURE__*/ Ft("indegree", function(r, e) {
        return r < e;
    }),
    maxIndegree: /*#__PURE__*/ Ft("indegree", function(r, e) {
        return r > e;
    }),
    minOutdegree: /*#__PURE__*/ Ft("outdegree", function(r, e) {
        return r < e;
    }),
    maxOutdegree: /*#__PURE__*/ Ft("outdegree", function(r, e) {
        return r > e;
    })
});
we(Gn, {
    totalDegree: /*#__PURE__*/ m$1(function(e) {
        for(var t = 0, a = /*#__PURE__*/ this.nodes(), n = 0; n < a.length; n++)t += /*#__PURE__*/ a[n].degree(e);
        return t;
    }, "totalDegree")
});
var Nr, Hv, Wv = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = 0; n < e.length; n++){
        var i = e[n];
        if (!i.locked()) {
            var s = i._private.position, o = {
                x: t.x != null ? t.x - s.x : 0,
                y: t.y != null ? t.y - s.y : 0
            };
            i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
        }
    }
}, "beforePositionSet"), ol = {
    field: "position",
    bindingEvent: "position",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "position",
    settingTriggersEvent: true,
    triggerFnName: "emitAndNotify",
    allowGetting: true,
    validKeys: [
        "x",
        "y"
    ],
    beforeGet: /*#__PURE__*/ m$1(function(e) {
        e.updateCompoundBounds();
    }, "beforeGet"),
    beforeSet: /*#__PURE__*/ m$1(function(e, t) {
        Wv(e, t, false);
    }, "beforeSet"),
    onSet: /*#__PURE__*/ m$1(function(e) {
        e.dirtyCompoundBoundsCache();
    }, "onSet"),
    canSet: /*#__PURE__*/ m$1(function(e) {
        return !e.locked();
    }, "canSet")
};
Nr = Hv = {
    position: /*#__PURE__*/ Ve.data(ol),
    silentPosition: /*#__PURE__*/ Ve.data(/*#__PURE__*/ we({}, ol, {
        allowBinding: false,
        allowSetting: true,
        settingTriggersEvent: false,
        allowGetting: false,
        beforeSet: /*#__PURE__*/ m$1(function(e, t) {
            Wv(e, t, true);
        }, "beforeSet"),
        onSet: /*#__PURE__*/ m$1(function(e) {
            e.dirtyCompoundBoundsCache();
        }, "onSet")
    })),
    positions: /*#__PURE__*/ m$1(function(e, t) {
        if (Ie(e)) t ? this.silentPosition(e) : this.position(e);
        else if (Ke(e)) {
            var a = e, n = /*#__PURE__*/ this.cy();
            n.startBatch();
            for(var i = 0; i < this.length; i++){
                var s = this[i], o = void 0;
                (o = /*#__PURE__*/ a(s, i)) && (t ? s.silentPosition(o) : s.position(o));
            }
            n.endBatch();
        }
        return this;
    }, "positions"),
    silentPositions: /*#__PURE__*/ m$1(function(e) {
        return this.positions(e, true);
    }, "silentPositions"),
    shift: /*#__PURE__*/ m$1(function(e, t, a) {
        var n;
        if (Ie(e) ? (n = {
            x: ne(e.x) ? e.x : 0,
            y: ne(e.y) ? e.y : 0
        }, a = t) : pe(e) && ne(t) && (n = {
            x: 0,
            y: 0
        }, n[e] = t), n != null) {
            var i = /*#__PURE__*/ this.cy();
            i.startBatch();
            for(var s = 0; s < this.length; s++){
                var o = this[s];
                if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
                    var l = /*#__PURE__*/ o.position(), u = {
                        x: l.x + n.x,
                        y: l.y + n.y
                    };
                    a ? o.silentPosition(u) : o.position(u);
                }
            }
            i.endBatch();
        }
        return this;
    }, "shift"),
    silentShift: /*#__PURE__*/ m$1(function(e, t) {
        return Ie(e) ? this.shift(e, true) : pe(e) && ne(t) && this.shift(e, t, true), this;
    }, "silentShift"),
    renderedPosition: /*#__PURE__*/ m$1(function(e, t) {
        var a = this[0], n = /*#__PURE__*/ this.cy(), i = /*#__PURE__*/ n.zoom(), s = /*#__PURE__*/ n.pan(), o = Ie(e) ? e : void 0, l = o !== void 0 || t !== void 0 && pe(e);
        if (a && a.isNode()) if (l) for(var u = 0; u < this.length; u++){
            var f = this[u];
            t !== void 0 ? f.position(e, (t - s[e]) / i) : o !== void 0 && f.position(/*#__PURE__*/ mv(o, i, s));
        }
        else {
            var c = /*#__PURE__*/ a.position();
            return o = /*#__PURE__*/ Nn(c, i, s), e === void 0 ? o : o[e];
        }
        else if (!l) return;
        return this;
    }, "renderedPosition"),
    relativePosition: /*#__PURE__*/ m$1(function(e, t) {
        var a = this[0], n = /*#__PURE__*/ this.cy(), i = Ie(e) ? e : void 0, s = i !== void 0 || t !== void 0 && pe(e), o = /*#__PURE__*/ n.hasCompoundNodes();
        if (a && a.isNode()) if (s) for(var l = 0; l < this.length; l++){
            var u = this[l], f = o ? u.parent() : null, c = f && f.length > 0, d = c;
            c && (f = f[0]);
            var g = d ? f.position() : {
                x: 0,
                y: 0
            };
            t !== void 0 ? u.position(e, t + g[e]) : i !== void 0 && u.position({
                x: i.x + g.x,
                y: i.y + g.y
            });
        }
        else {
            var h = /*#__PURE__*/ a.position(), m = o ? a.parent() : null, p = m && m.length > 0, y = p;
            p && (m = m[0]);
            var b1 = y ? m.position() : {
                x: 0,
                y: 0
            };
            return i = {
                x: h.x - b1.x,
                y: h.y - b1.y
            }, e === void 0 ? i : i[e];
        }
        else if (!s) return;
        return this;
    }, "relativePosition")
};
Nr.modelPosition = Nr.point = Nr.position;
Nr.modelPositions = Nr.points = Nr.positions;
Nr.renderedPoint = Nr.renderedPosition;
Nr.relativePoint = Nr.relativePosition;
var Wg = Hv, Qt, yt;
Qt = yt = {};
yt.renderedBoundingBox = function(r) {
    var e = /*#__PURE__*/ this.boundingBox(r), t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ t.zoom(), n = /*#__PURE__*/ t.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, l = e.y2 * a + n.y;
    return {
        x1: i,
        x2: s,
        y1: o,
        y2: l,
        w: s - i,
        h: l - o
    };
};
yt.dirtyCompoundBoundsCache = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = /*#__PURE__*/ this.cy();
    return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(t) {
        if (t.isParent()) {
            var a = t._private;
            a.compoundBoundsClean = false, a.bbCache = null, r || t.emitAndNotify("bounds");
        }
    }), this);
};
yt.updateCompoundBounds = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = /*#__PURE__*/ this.cy();
    if (!e.styleEnabled() || !e.hasCompoundNodes()) return this;
    if (!r && e.batching()) return this;
    function t(s) {
        if (!s.isParent()) return;
        var o = s._private, l = /*#__PURE__*/ s.children(), u = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
            width: {
                val: s.pstyle("min-width").pfValue,
                left: /*#__PURE__*/ s.pstyle("min-width-bias-left"),
                right: /*#__PURE__*/ s.pstyle("min-width-bias-right")
            },
            height: {
                val: s.pstyle("min-height").pfValue,
                top: /*#__PURE__*/ s.pstyle("min-height-bias-top"),
                bottom: /*#__PURE__*/ s.pstyle("min-height-bias-bottom")
            }
        }, c = /*#__PURE__*/ l.boundingBox({
            includeLabels: u,
            includeOverlays: false,
            useCache: false
        }), d = o.position;
        (c.w === 0 || c.h === 0) && (c = {
            w: s.pstyle("width").pfValue,
            h: s.pstyle("height").pfValue
        }, c.x1 = d.x - c.w / 2, c.x2 = d.x + c.w / 2, c.y1 = d.y - c.h / 2, c.y2 = d.y + c.h / 2);
        function g(D, B, P) {
            var A = 0, R = 0, M = B + P;
            return D > 0 && M > 0 && (A = B / M * D, R = P / M * D), {
                biasDiff: A,
                biasComplementDiff: R
            };
        }
        m$1(g, "computeBiasValues");
        function h(D, B, P, A) {
            if (P.units === "%") switch(A){
                case "width":
                    return D > 0 ? P.pfValue * D : 0;
                case "height":
                    return B > 0 ? P.pfValue * B : 0;
                case "average":
                    return D > 0 && B > 0 ? P.pfValue * (D + B) / 2 : 0;
                case "min":
                    return D > 0 && B > 0 ? D > B ? P.pfValue * B : P.pfValue * D : 0;
                case "max":
                    return D > 0 && B > 0 ? D > B ? P.pfValue * D : P.pfValue * B : 0;
                default:
                    return 0;
            }
            else return P.units === "px" ? P.pfValue : 0;
        }
        m$1(h, "computePaddingValues");
        var m = f.width.left.value;
        f.width.left.units === "px" && f.width.val > 0 && (m = m * 100 / f.width.val);
        var p = f.width.right.value;
        f.width.right.units === "px" && f.width.val > 0 && (p = p * 100 / f.width.val);
        var y = f.height.top.value;
        f.height.top.units === "px" && f.height.val > 0 && (y = y * 100 / f.height.val);
        var b1 = f.height.bottom.value;
        f.height.bottom.units === "px" && f.height.val > 0 && (b1 = b1 * 100 / f.height.val);
        var w = /*#__PURE__*/ g(f.width.val - c.w, m, p), x = w.biasDiff, C = w.biasComplementDiff, T = /*#__PURE__*/ g(f.height.val - c.h, y, b1), E = T.biasDiff, S = T.biasComplementDiff;
        o.autoPadding = /*#__PURE__*/ h(c.w, c.h, /*#__PURE__*/ s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = /*#__PURE__*/ Math.max(c.w, f.width.val), d.x = (-x + c.x1 + c.x2 + C) / 2, o.autoHeight = /*#__PURE__*/ Math.max(c.h, f.height.val), d.y = (-E + c.y1 + c.y2 + S) / 2;
    }
    m$1(t, "update");
    for(var a = 0; a < this.length; a++){
        var n = this[a], i = n._private;
        (!i.compoundBoundsClean || r) && (t(n), e.batching() || (i.compoundBoundsClean = true));
    }
    return this;
};
var Rr = /*#__PURE__*/ m$1(function(e) {
    return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, "noninf"), Or = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    n - t === 0 || i - a === 0 || t == null || a == null || n == null || i == null || (e.x1 = t < e.x1 ? t : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, "updateBounds"), at = /*#__PURE__*/ m$1(function(e, t) {
    return t == null ? e : Or(e, t.x1, t.y1, t.x2, t.y2);
}, "updateBoundsFromBox"), ca = /*#__PURE__*/ m$1(function(e, t, a) {
    return Sr(e, t, a);
}, "prefixedProperty"), en = /*#__PURE__*/ m$1(function(e, t, a) {
    if (!t.cy().headless()) {
        var n = t._private, i = n.rstyle, s = i.arrowWidth / 2, o = t.pstyle(a + "-arrow-shape").value, l, u;
        if (o !== "none") {
            a === "source" ? (l = i.srcX, u = i.srcY) : a === "target" ? (l = i.tgtX, u = i.tgtY) : (l = i.midX, u = i.midY);
            var f = n.arrowBounds = n.arrowBounds || {}, c = f[a] = f[a] || {};
            c.x1 = l - s, c.y1 = u - s, c.x2 = l + s, c.y2 = u + s, c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, ln(c, 1), Or(e, c.x1, c.y1, c.x2, c.y2);
        }
    }
}, "updateBoundsFromArrow"), ms = /*#__PURE__*/ m$1(function(e, t, a) {
    if (!t.cy().headless()) {
        var n;
        a ? n = a + "-" : n = "";
        var i = t._private, s = i.rstyle, o = t.pstyle(n + "label").strValue;
        if (o) {
            var l = /*#__PURE__*/ t.pstyle("text-halign"), u = /*#__PURE__*/ t.pstyle("text-valign"), f = /*#__PURE__*/ ca(s, "labelWidth", a), c = /*#__PURE__*/ ca(s, "labelHeight", a), d = /*#__PURE__*/ ca(s, "labelX", a), g = /*#__PURE__*/ ca(s, "labelY", a), h = t.pstyle(n + "text-margin-x").pfValue, m = t.pstyle(n + "text-margin-y").pfValue, p = /*#__PURE__*/ t.isEdge(), y = /*#__PURE__*/ t.pstyle(n + "text-rotation"), b1 = t.pstyle("text-outline-width").pfValue, w = t.pstyle("text-border-width").pfValue, x = w / 2, C = t.pstyle("text-background-padding").pfValue, T = 2, E = c, S = f, D = S / 2, B = E / 2, P, A, R, M;
            if (p) P = d - D, A = d + D, R = g - B, M = g + B;
            else {
                switch(l.value){
                    case "left":
                        P = d - S, A = d;
                        break;
                    case "center":
                        P = d - D, A = d + D;
                        break;
                    case "right":
                        P = d, A = d + S;
                        break;
                }
                switch(u.value){
                    case "top":
                        R = g - E, M = g;
                        break;
                    case "center":
                        R = g - B, M = g + B;
                        break;
                    case "bottom":
                        R = g, M = g + E;
                        break;
                }
            }
            var I = h - Math.max(b1, x) - C - T, O = h + Math.max(b1, x) + C + T, L = m - Math.max(b1, x) - C - T, N = m + Math.max(b1, x) + C + T;
            P += I, A += O, R += L, M += N;
            var q = a || "main", H = i.labelBounds, z = H[q] = H[q] || {};
            z.x1 = P, z.y1 = R, z.x2 = A, z.y2 = M, z.w = A - P, z.h = M - R, z.leftPad = I, z.rightPad = O, z.topPad = L, z.botPad = N;
            var V = p && y.strValue === "autorotate", K = y.pfValue != null && y.pfValue !== 0;
            if (V || K) {
                var J = V ? ca(i.rstyle, "labelAngle", a) : y.pfValue, X = /*#__PURE__*/ Math.cos(J), ee = /*#__PURE__*/ Math.sin(J), te = (P + A) / 2, ie = (R + M) / 2;
                if (!p) {
                    switch(l.value){
                        case "left":
                            te = A;
                            break;
                        case "right":
                            te = P;
                            break;
                    }
                    switch(u.value){
                        case "top":
                            ie = M;
                            break;
                        case "bottom":
                            ie = R;
                            break;
                    }
                }
                var j = /*#__PURE__*/ m$1(function(Te, xe) {
                    return Te = Te - te, xe = xe - ie, {
                        x: Te * X - xe * ee + te,
                        y: Te * ee + xe * X + ie
                    };
                }, "rotate"), F = /*#__PURE__*/ j(P, R), _ = /*#__PURE__*/ j(P, M), W = /*#__PURE__*/ j(A, R), Z = /*#__PURE__*/ j(A, M);
                P = /*#__PURE__*/ Math.min(F.x, _.x, W.x, Z.x), A = /*#__PURE__*/ Math.max(F.x, _.x, W.x, Z.x), R = /*#__PURE__*/ Math.min(F.y, _.y, W.y, Z.y), M = /*#__PURE__*/ Math.max(F.y, _.y, W.y, Z.y);
            }
            var ae = q + "Rot", de = H[ae] = H[ae] || {};
            de.x1 = P, de.y1 = R, de.x2 = A, de.y2 = M, de.w = A - P, de.h = M - R, Or(e, P, R, A, M), Or(i.labelBounds.all, P, R, A, M);
        }
        return e;
    }
}, "updateBoundsFromLabel"), ul = /*#__PURE__*/ m$1(function(e, t) {
    if (!t.cy().headless()) {
        var a = t.pstyle("outline-opacity").value, n = t.pstyle("outline-width").value, i = t.pstyle("outline-offset").value, s = n + i;
        $v(e, t, a, s, "outside", s / 2);
    }
}, "updateBoundsFromOutline"), $v = /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
    if (!(a === 0 || n <= 0 || i === "inside")) {
        var o = /*#__PURE__*/ t.cy(), l = t.pstyle("shape").value, u = o.renderer().nodeShapes[l], f = /*#__PURE__*/ t.position(), c = f.x, d = f.y, g = /*#__PURE__*/ t.width(), h = /*#__PURE__*/ t.height();
        if (u.hasMiterBounds) {
            i === "center" && (n /= 2);
            var m = /*#__PURE__*/ u.miterBounds(c, d, g, h, n);
            at(e, m);
        } else s != null && s > 0 && vn(e, [
            s,
            s,
            s,
            s
        ]);
    }
}, "updateBoundsFromMiter"), $g = /*#__PURE__*/ m$1(function(e, t) {
    if (!t.cy().headless()) {
        var a = t.pstyle("border-opacity").value, n = t.pstyle("border-width").pfValue, i = t.pstyle("border-position").value;
        $v(e, t, a, n, i);
    }
}, "updateBoundsFromMiterBorder"), Ug = /*#__PURE__*/ m$1(function(e, t) {
    var a = e._private.cy, n = /*#__PURE__*/ a.styleEnabled(), i = /*#__PURE__*/ a.headless(), s = /*#__PURE__*/ xr(), o = e._private, l = /*#__PURE__*/ e.isNode(), u = /*#__PURE__*/ e.isEdge(), f, c, d, g, h, m, p = o.rstyle, y = l && n ? e.pstyle("bounds-expansion").pfValue : [
        0
    ], b1 = /*#__PURE__*/ m$1(function(Re) {
        return Re.pstyle("display").value !== "none";
    }, "isDisplayed"), w = !n || b1(e) && (!u || b1(/*#__PURE__*/ e.source()) && b1(/*#__PURE__*/ e.target()));
    if (w) {
        var x = 0, C = 0;
        n && t.includeOverlays && (x = e.pstyle("overlay-opacity").value, x !== 0 && (C = e.pstyle("overlay-padding").value));
        var T = 0, E = 0;
        n && t.includeUnderlays && (T = e.pstyle("underlay-opacity").value, T !== 0 && (E = e.pstyle("underlay-padding").value));
        var S = /*#__PURE__*/ Math.max(C, E), D = 0, B = 0;
        if (n && (D = e.pstyle("width").pfValue, B = D / 2), l && t.includeNodes) {
            var P = /*#__PURE__*/ e.position();
            h = P.x, m = P.y;
            var A = /*#__PURE__*/ e.outerWidth(), R = A / 2, M = /*#__PURE__*/ e.outerHeight(), I = M / 2;
            f = h - R, c = h + R, d = m - I, g = m + I, Or(s, f, d, c, g), n && ul(s, e), n && t.includeOutlines && !i && ul(s, e), n && $g(s, e);
        } else if (u && t.includeEdges) if (n && !i) {
            var O = e.pstyle("curve-style").strValue;
            if (f = /*#__PURE__*/ Math.min(p.srcX, p.midX, p.tgtX), c = /*#__PURE__*/ Math.max(p.srcX, p.midX, p.tgtX), d = /*#__PURE__*/ Math.min(p.srcY, p.midY, p.tgtY), g = /*#__PURE__*/ Math.max(p.srcY, p.midY, p.tgtY), f -= B, c += B, d -= B, g += B, Or(s, f, d, c, g), O === "haystack") {
                var L = p.haystackPts;
                if (L && L.length === 2) {
                    if (f = L[0].x, d = L[0].y, c = L[1].x, g = L[1].y, f > c) {
                        var N = f;
                        f = c, c = N;
                    }
                    if (d > g) {
                        var q = d;
                        d = g, g = q;
                    }
                    Or(s, f - B, d - B, c + B, g + B);
                }
            } else if (O === "bezier" || O === "unbundled-bezier" || nt(O, "segments") || nt(O, "taxi")) {
                var H;
                switch(O){
                    case "bezier":
                    case "unbundled-bezier":
                        H = p.bezierPts;
                        break;
                    case "segments":
                    case "taxi":
                    case "round-segments":
                    case "round-taxi":
                        H = p.linePts;
                        break;
                }
                if (H != null) for(var z = 0; z < H.length; z++){
                    var V = H[z];
                    f = V.x - B, c = V.x + B, d = V.y - B, g = V.y + B, Or(s, f, d, c, g);
                }
            }
        } else {
            var K = /*#__PURE__*/ e.source(), J = /*#__PURE__*/ K.position(), X = /*#__PURE__*/ e.target(), ee = /*#__PURE__*/ X.position();
            if (f = J.x, c = ee.x, d = J.y, g = ee.y, f > c) {
                var te = f;
                f = c, c = te;
            }
            if (d > g) {
                var ie = d;
                d = g, g = ie;
            }
            f -= B, c += B, d -= B, g += B, Or(s, f, d, c, g);
        }
        if (n && t.includeEdges && u && (en(s, e, "mid-source"), en(s, e, "mid-target"), en(s, e, "source"), en(s, e, "target")), n) {
            var j = e.pstyle("ghost").value === "yes";
            if (j) {
                var F = e.pstyle("ghost-offset-x").pfValue, _ = e.pstyle("ghost-offset-y").pfValue;
                Or(s, s.x1 + F, s.y1 + _, s.x2 + F, s.y2 + _);
            }
        }
        var W = o.bodyBounds = o.bodyBounds || {};
        Ko(W, s), vn(W, y), ln(W, 1), n && (f = s.x1, c = s.x2, d = s.y1, g = s.y2, Or(s, f - S, d - S, c + S, g + S));
        var Z = o.overlayBounds = o.overlayBounds || {};
        Ko(Z, s), vn(Z, y), ln(Z, 1);
        var ae = o.labelBounds = o.labelBounds || {};
        ae.all != null ? Dd(ae.all) : ae.all = /*#__PURE__*/ xr(), n && t.includeLabels && (t.includeMainLabels && ms(s, e, null), u && (t.includeSourceLabels && ms(s, e, "source"), t.includeTargetLabels && ms(s, e, "target")));
    }
    return s.x1 = /*#__PURE__*/ Rr(s.x1), s.y1 = /*#__PURE__*/ Rr(s.y1), s.x2 = /*#__PURE__*/ Rr(s.x2), s.y2 = /*#__PURE__*/ Rr(s.y2), s.w = /*#__PURE__*/ Rr(s.x2 - s.x1), s.h = /*#__PURE__*/ Rr(s.y2 - s.y1), s.w > 0 && s.h > 0 && w && (vn(s, y), ln(s, 1)), s;
}, "boundingBoxImpl"), Uv = /*#__PURE__*/ m$1(function(e) {
    var t = 0, a = /*#__PURE__*/ m$1(function(s) {
        return (s ? 1 : 0) << t++;
    }, "tf"), n = 0;
    return n += /*#__PURE__*/ a(e.incudeNodes), n += /*#__PURE__*/ a(e.includeEdges), n += /*#__PURE__*/ a(e.includeLabels), n += /*#__PURE__*/ a(e.includeMainLabels), n += /*#__PURE__*/ a(e.includeSourceLabels), n += /*#__PURE__*/ a(e.includeTargetLabels), n += /*#__PURE__*/ a(e.includeOverlays), n += /*#__PURE__*/ a(e.includeOutlines), n;
}, "getKey"), Kv = /*#__PURE__*/ m$1(function(e) {
    var t = /*#__PURE__*/ m$1(function(o) {
        return Math.round(o);
    }, "r");
    if (e.isEdge()) {
        var a = /*#__PURE__*/ e.source().position(), n = /*#__PURE__*/ e.target().position();
        return _o([
            /*#__PURE__*/ t(a.x),
            /*#__PURE__*/ t(a.y),
            /*#__PURE__*/ t(n.x),
            /*#__PURE__*/ t(n.y)
        ]);
    } else {
        var i = /*#__PURE__*/ e.position();
        return _o([
            /*#__PURE__*/ t(i.x),
            /*#__PURE__*/ t(i.y)
        ]);
    }
}, "getBoundingBoxPosKey"), ll = /*#__PURE__*/ m$1(function(e, t) {
    var a = e._private, n, i = /*#__PURE__*/ e.isEdge(), s = t == null ? vl : Uv(t), o = s === vl;
    if (a.bbCache == null ? (n = /*#__PURE__*/ Ug(e, Aa), a.bbCache = n, a.bbCachePosKey = /*#__PURE__*/ Kv(e)) : n = a.bbCache, !o) {
        var l = /*#__PURE__*/ e.isNode();
        n = /*#__PURE__*/ xr(), (t.includeNodes && l || t.includeEdges && !l) && (t.includeOverlays ? at(n, a.overlayBounds) : at(n, a.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!i || t.includeSourceLabels && t.includeTargetLabels) ? at(n, a.labelBounds.all) : (t.includeMainLabels && at(n, a.labelBounds.mainRot), t.includeSourceLabels && at(n, a.labelBounds.sourceRot), t.includeTargetLabels && at(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
    }
    return n;
}, "cachedBoundingBoxImpl"), Aa = {
    includeNodes: true,
    includeEdges: true,
    includeLabels: true,
    includeMainLabels: true,
    includeSourceLabels: true,
    includeTargetLabels: true,
    includeOverlays: true,
    includeUnderlays: true,
    includeOutlines: true,
    useCache: true
}, vl = /*#__PURE__*/ Uv(Aa), fl = /*#__PURE__*/ dr(Aa);
yt.boundingBox = function(r) {
    var e, t = r === void 0 || r.useCache === void 0 || r.useCache === true, a = /*#__PURE__*/ Jt(function(f) {
        var c = f._private;
        return c.bbCache == null || c.styleDirty || c.bbCachePosKey !== Kv(f);
    }, function(f) {
        return f.id();
    });
    if (t && this.length === 1 && !a(this[0])) r === void 0 ? r = Aa : r = /*#__PURE__*/ fl(r), e = /*#__PURE__*/ ll(this[0], r);
    else {
        e = /*#__PURE__*/ xr(), r = r || Aa;
        var n = /*#__PURE__*/ fl(r), i = this, s = /*#__PURE__*/ i.cy(), o = /*#__PURE__*/ s.styleEnabled();
        this.edges().forEach(a), this.nodes().forEach(a), o && this.recalculateRenderedStyle(t), this.updateCompoundBounds(!t);
        for(var l = 0; l < i.length; l++){
            var u = i[l];
            a(u) && u.dirtyBoundingBoxCache(), at(e, /*#__PURE__*/ ll(u, n));
        }
    }
    return e.x1 = /*#__PURE__*/ Rr(e.x1), e.y1 = /*#__PURE__*/ Rr(e.y1), e.x2 = /*#__PURE__*/ Rr(e.x2), e.y2 = /*#__PURE__*/ Rr(e.y2), e.w = /*#__PURE__*/ Rr(e.x2 - e.x1), e.h = /*#__PURE__*/ Rr(e.y2 - e.y1), e;
};
yt.dirtyBoundingBoxCache = function() {
    for(var r = 0; r < this.length; r++){
        var e = this[r]._private;
        e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
    }
    return this.emitAndNotify("bounds"), this;
};
yt.boundingBoxAt = function(r) {
    var e = /*#__PURE__*/ this.nodes(), t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ t.hasCompoundNodes(), n = /*#__PURE__*/ t.collection();
    if (a && (n = /*#__PURE__*/ e.filter(function(u) {
        return u.isParent();
    }), e = /*#__PURE__*/ e.not(n)), Ie(r)) {
        var i = r;
        r = /*#__PURE__*/ m$1(function() {
            return i;
        }, "fn");
    }
    var s = /*#__PURE__*/ m$1(function(f, c) {
        return f._private.bbAtOldPos = /*#__PURE__*/ r(f, c);
    }, "storeOldPos"), o = /*#__PURE__*/ m$1(function(f) {
        return f._private.bbAtOldPos;
    }, "getOldPos");
    t.startBatch(), e.forEach(s).silentPositions(r), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(true));
    var l = /*#__PURE__*/ kd(/*#__PURE__*/ this.boundingBox({
        useCache: false
    }));
    return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(true)), t.endBatch(), l;
};
Qt.boundingbox = Qt.bb = Qt.boundingBox;
Qt.renderedBoundingbox = Qt.renderedBoundingBox;
var Kg = yt, ba, _a;
ba = _a = {};
var Xv = /*#__PURE__*/ m$1(function(e) {
    e.uppercaseName = /*#__PURE__*/ ko(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = /*#__PURE__*/ ko(e.outerName), ba[e.name] = /*#__PURE__*/ m$1(function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a) if (s) {
            if (a.isParent()) return a.updateCompoundBounds(), n[e.autoName] || 0;
            var o = /*#__PURE__*/ a.pstyle(e.name);
            switch(o.strValue){
                case "label":
                    return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
                default:
                    return o.pfValue;
            }
        } else return 1;
    }, "dimImpl"), ba["outer" + e.uppercaseName] = /*#__PURE__*/ m$1(function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a) if (s) {
            var o = /*#__PURE__*/ a[e.name](), l = a.pstyle("border-position").value, u;
            l === "center" ? u = a.pstyle("border-width").pfValue : l === "outside" ? u = 2 * a.pstyle("border-width").pfValue : u = 0;
            var f = 2 * a.padding();
            return o + u + f;
        } else return 1;
    }, "outerDimImpl"), ba["rendered" + e.uppercaseName] = /*#__PURE__*/ m$1(function() {
        var a = this[0];
        if (a) {
            var n = /*#__PURE__*/ a[e.name]();
            return n * this.cy().zoom();
        }
    }, "renderedDimImpl"), ba["rendered" + e.uppercaseOuterName] = /*#__PURE__*/ m$1(function() {
        var a = this[0];
        if (a) {
            var n = /*#__PURE__*/ a[e.outerName]();
            return n * this.cy().zoom();
        }
    }, "renderedOuterDimImpl");
}, "defineDimFns");
Xv({
    name: "width"
});
Xv({
    name: "height"
});
_a.padding = function() {
    var r = this[0], e = r._private;
    return r.isParent() ? (r.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : r.pstyle("padding").pfValue) : r.pstyle("padding").pfValue;
};
_a.paddedHeight = function() {
    var r = this[0];
    return r.height() + 2 * r.padding();
};
_a.paddedWidth = function() {
    var r = this[0];
    return r.width() + 2 * r.padding();
};
var Xg = _a, Yg = /*#__PURE__*/ m$1(function(e, t) {
    if (e.isEdge() && e.takesUpSpace()) return t(e);
}, "ifEdge"), Zg = /*#__PURE__*/ m$1(function(e, t) {
    if (e.isEdge() && e.takesUpSpace()) {
        var a = /*#__PURE__*/ e.cy();
        return Nn(/*#__PURE__*/ t(e), /*#__PURE__*/ a.zoom(), /*#__PURE__*/ a.pan());
    }
}, "ifEdgeRenderedPosition"), Qg = /*#__PURE__*/ m$1(function(e, t) {
    if (e.isEdge() && e.takesUpSpace()) {
        var a = /*#__PURE__*/ e.cy(), n = /*#__PURE__*/ a.pan(), i = /*#__PURE__*/ a.zoom();
        return t(e).map(function(s) {
            return Nn(s, i, n);
        });
    }
}, "ifEdgeRenderedPositions"), Jg = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getControlPoints(e);
}, "controlPoints"), jg = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getSegmentPoints(e);
}, "segmentPoints"), ep = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getSourceEndpoint(e);
}, "sourceEndpoint"), rp = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getTargetEndpoint(e);
}, "targetEndpoint"), tp = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getEdgeMidpoint(e);
}, "midpoint"), cl = {
    controlPoints: {
        get: Jg,
        mult: true
    },
    segmentPoints: {
        get: jg,
        mult: true
    },
    sourceEndpoint: {
        get: ep
    },
    targetEndpoint: {
        get: rp
    },
    midpoint: {
        get: tp
    }
}, ap = /*#__PURE__*/ m$1(function(e) {
    return "rendered" + e[0].toUpperCase() + e.substr(1);
}, "renderedName"), np = /*#__PURE__*/ Object.keys(cl).reduce(function(r, e) {
    var t = cl[e], a = /*#__PURE__*/ ap(e);
    return r[e] = function() {
        return Yg(this, t.get);
    }, t.mult ? r[a] = function() {
        return Qg(this, t.get);
    } : r[a] = function() {
        return Zg(this, t.get);
    }, r;
}, {}), ip = /*#__PURE__*/ we({}, Wg, Kg, Xg, np);
var Yv = /*#__PURE__*/ m$1(function(e, t) {
    this.recycle(e, t);
}, "Event");
function da() {
    return false;
}
m$1(da, "returnFalse");
function rn() {
    return true;
}
m$1(rn, "returnTrue");
Yv.prototype = {
    instanceString: /*#__PURE__*/ m$1(function() {
        return "event";
    }, "instanceString"),
    recycle: /*#__PURE__*/ m$1(function(e, t) {
        if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = da, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? rn : da) : e != null && e.type ? t = e : this.type = e, t != null && (this.originalEvent = t.originalEvent, this.type = t.type != null ? t.type : this.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
            var a = this.position, n = /*#__PURE__*/ this.cy.zoom(), i = /*#__PURE__*/ this.cy.pan();
            this.renderedPosition = {
                x: a.x * n + i.x,
                y: a.y * n + i.y
            };
        }
        this.timeStamp = e && e.timeStamp || Date.now();
    }, "recycle"),
    preventDefault: /*#__PURE__*/ m$1(function() {
        this.isDefaultPrevented = rn;
        var e = this.originalEvent;
        e && e.preventDefault && e.preventDefault();
    }, "preventDefault"),
    stopPropagation: /*#__PURE__*/ m$1(function() {
        this.isPropagationStopped = rn;
        var e = this.originalEvent;
        e && e.stopPropagation && e.stopPropagation();
    }, "stopPropagation"),
    stopImmediatePropagation: /*#__PURE__*/ m$1(function() {
        this.isImmediatePropagationStopped = rn, this.stopPropagation();
    }, "stopImmediatePropagation"),
    isDefaultPrevented: da,
    isPropagationStopped: da,
    isImmediatePropagationStopped: da
};
var Zv = /^([^.]+)(\.(?:[^.]+))?$/, sp = ".*", Qv = {
    qualifierCompare: /*#__PURE__*/ m$1(function(e, t) {
        return e === t;
    }, "qualifierCompare"),
    eventMatches: /*#__PURE__*/ m$1(function() {
        return true;
    }, "eventMatches"),
    addEventFields: /*#__PURE__*/ m$1(function() {}, "addEventFields"),
    callbackContext: /*#__PURE__*/ m$1(function(e) {
        return e;
    }, "callbackContext"),
    beforeEmit: /*#__PURE__*/ m$1(function() {}, "beforeEmit"),
    afterEmit: /*#__PURE__*/ m$1(function() {}, "afterEmit"),
    bubble: /*#__PURE__*/ m$1(function() {
        return false;
    }, "bubble"),
    parent: /*#__PURE__*/ m$1(function() {
        return null;
    }, "parent"),
    context: null
}, dl = /*#__PURE__*/ Object.keys(Qv), op = {};
function Hn() {
    for(var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : op, e = arguments.length > 1 ? arguments[1] : void 0, t = 0; t < dl.length; t++){
        var a = dl[t];
        this[a] = r[a] || Qv[a];
    }
    this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
m$1(Hn, "Emitter");
var ht = Hn.prototype, Jv = /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o) {
    Ke(n) && (i = n, n = null), o && (s == null ? s = o : s = /*#__PURE__*/ we({}, s, o));
    for(var l = Ge(a) ? a : a.split(/\s+/), u = 0; u < l.length; u++){
        var f = l[u];
        if (!lt(f)) {
            var c = /*#__PURE__*/ f.match(Zv);
            if (c) {
                var d = c[1], g = c[2] ? c[2] : null, h = /*#__PURE__*/ t(e, f, d, g, n, i, s);
                if (h === false) break;
            }
        }
    }
}, "forEachEvent"), hl = /*#__PURE__*/ m$1(function(e, t) {
    return e.addEventFields(e.context, t), new Yv(t.type, t);
}, "makeEventObj"), up = /*#__PURE__*/ m$1(function(e, t, a) {
    if (hc(a)) {
        t(e, a);
        return;
    } else if (Ie(a)) {
        t(e, /*#__PURE__*/ hl(e, a));
        return;
    }
    for(var n = Ge(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++){
        var s = n[i];
        if (!lt(s)) {
            var o = /*#__PURE__*/ s.match(Zv);
            if (o) {
                var l = o[1], u = o[2] ? o[2] : null, f = /*#__PURE__*/ hl(e, {
                    type: l,
                    namespace: u,
                    target: e.context
                });
                t(e, f);
            }
        }
    }
}, "forEachEventObj");
ht.on = ht.addListener = function(r, e, t, a, n) {
    return Jv(this, function(i, s, o, l, u, f, c) {
        Ke(f) && i.listeners.push({
            event: s,
            callback: f,
            type: o,
            namespace: l,
            qualifier: u,
            conf: c
        });
    }, r, e, t, a, n), this;
};
ht.one = function(r, e, t, a) {
    return this.on(r, e, t, a, {
        one: true
    });
};
ht.removeListener = ht.off = function(r, e, t, a) {
    var n = this;
    this.emitting !== 0 && (this.listeners = /*#__PURE__*/ Zc(this.listeners));
    for(var i = this.listeners, s = /*#__PURE__*/ m$1(function(u) {
        var f = i[u];
        Jv(n, function(c, d, g, h, m, p) {
            if ((f.type === g || r === "*") && (!h && f.namespace !== ".*" || f.namespace === h) && (!m || c.qualifierCompare(f.qualifier, m)) && (!p || f.callback === p)) return i.splice(u, 1), false;
        }, r, e, t, a);
    }, "_loop"), o = i.length - 1; o >= 0; o--)s(o);
    return this;
};
ht.removeAllListeners = function() {
    return this.removeListener("*");
};
ht.emit = ht.trigger = function(r, e, t) {
    var a = this.listeners, n = a.length;
    return this.emitting++, Ge(e) || (e = [
        e
    ]), up(this, function(i, s) {
        t != null && (a = [
            {
                event: s.event,
                type: s.type,
                namespace: s.namespace,
                callback: t
            }
        ], n = a.length);
        for(var o = /*#__PURE__*/ m$1(function() {
            var f = a[l];
            if (f.type === s.type && (!f.namespace || f.namespace === s.namespace || f.namespace === sp) && i.eventMatches(i.context, f, s)) {
                var c = [
                    s
                ];
                e != null && Jc(c, e), i.beforeEmit(i.context, f, s), f.conf && f.conf.one && (i.listeners = /*#__PURE__*/ i.listeners.filter(function(h) {
                    return h !== f;
                }));
                var d = /*#__PURE__*/ i.callbackContext(i.context, f, s), g = /*#__PURE__*/ f.callback.apply(d, c);
                i.afterEmit(i.context, f, s), g === false && (s.stopPropagation(), s.preventDefault());
            }
        }, "_loop2"), l = 0; l < n; l++)o();
        i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
    }, r), this.emitting--, this;
};
var lp = {
    qualifierCompare: /*#__PURE__*/ m$1(function(e, t) {
        return e == null || t == null ? e == null && t == null : e.sameText(t);
    }, "qualifierCompare"),
    eventMatches: /*#__PURE__*/ m$1(function(e, t, a) {
        var n = t.qualifier;
        return n != null ? e !== a.target && Oa(a.target) && n.matches(a.target) : true;
    }, "eventMatches"),
    addEventFields: /*#__PURE__*/ m$1(function(e, t) {
        t.cy = /*#__PURE__*/ e.cy(), t.target = e;
    }, "addEventFields"),
    callbackContext: /*#__PURE__*/ m$1(function(e, t, a) {
        return t.qualifier != null ? a.target : e;
    }, "callbackContext"),
    beforeEmit: /*#__PURE__*/ m$1(function(e, t) {
        t.conf && t.conf.once && t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
    }, "beforeEmit"),
    bubble: /*#__PURE__*/ m$1(function() {
        return true;
    }, "bubble"),
    parent: /*#__PURE__*/ m$1(function(e) {
        return e.isChild() ? e.parent() : e.cy();
    }, "parent")
}, tn = /*#__PURE__*/ m$1(function(e) {
    return pe(e) ? new ct(e) : e;
}, "argSelector"), jv = {
    createEmitter: /*#__PURE__*/ m$1(function() {
        for(var e = 0; e < this.length; e++){
            var t = this[e], a = t._private;
            a.emitter || (a.emitter = new Hn(lp, t));
        }
        return this;
    }, "createEmitter"),
    emitter: /*#__PURE__*/ m$1(function() {
        return this._private.emitter;
    }, "emitter"),
    on: /*#__PURE__*/ m$1(function(e, t, a) {
        for(var n = /*#__PURE__*/ tn(t), i = 0; i < this.length; i++){
            var s = this[i];
            s.emitter().on(e, n, a);
        }
        return this;
    }, "on"),
    removeListener: /*#__PURE__*/ m$1(function(e, t, a) {
        for(var n = /*#__PURE__*/ tn(t), i = 0; i < this.length; i++){
            var s = this[i];
            s.emitter().removeListener(e, n, a);
        }
        return this;
    }, "removeListener"),
    removeAllListeners: /*#__PURE__*/ m$1(function() {
        for(var e = 0; e < this.length; e++){
            var t = this[e];
            t.emitter().removeAllListeners();
        }
        return this;
    }, "removeAllListeners"),
    one: /*#__PURE__*/ m$1(function(e, t, a) {
        for(var n = /*#__PURE__*/ tn(t), i = 0; i < this.length; i++){
            var s = this[i];
            s.emitter().one(e, n, a);
        }
        return this;
    }, "one"),
    once: /*#__PURE__*/ m$1(function(e, t, a) {
        for(var n = /*#__PURE__*/ tn(t), i = 0; i < this.length; i++){
            var s = this[i];
            s.emitter().on(e, n, a, {
                once: true,
                onceCollection: this
            });
        }
    }, "once"),
    emit: /*#__PURE__*/ m$1(function(e, t) {
        for(var a = 0; a < this.length; a++){
            var n = this[a];
            n.emitter().emit(e, t);
        }
        return this;
    }, "emit"),
    emitAndNotify: /*#__PURE__*/ m$1(function(e, t) {
        if (this.length !== 0) return this.cy().notify(e, this), this.emit(e, t), this;
    }, "emitAndNotify")
};
Ve.eventAliasesOn(jv);
var ef = {
    nodes: /*#__PURE__*/ m$1(function(e) {
        return this.filter(function(t) {
            return t.isNode();
        }).filter(e);
    }, "nodes"),
    edges: /*#__PURE__*/ m$1(function(e) {
        return this.filter(function(t) {
            return t.isEdge();
        }).filter(e);
    }, "edges"),
    byGroup: /*#__PURE__*/ m$1(function() {
        for(var e = /*#__PURE__*/ this.spawn(), t = /*#__PURE__*/ this.spawn(), a = 0; a < this.length; a++){
            var n = this[a];
            n.isNode() ? e.push(n) : t.push(n);
        }
        return {
            nodes: e,
            edges: t
        };
    }, "byGroup"),
    filter: /*#__PURE__*/ m$1(function(e, t) {
        if (e === void 0) return this;
        if (pe(e) || Br(e)) return new ct(e).filter(this);
        if (Ke(e)) {
            for(var a = /*#__PURE__*/ this.spawn(), n = this, i = 0; i < n.length; i++){
                var s = n[i], o = t ? e.apply(t, [
                    s,
                    i,
                    n
                ]) : e(s, i, n);
                o && a.push(s);
            }
            return a;
        }
        return this.spawn();
    }, "filter"),
    not: /*#__PURE__*/ m$1(function(e) {
        if (e) {
            pe(e) && (e = /*#__PURE__*/ this.filter(e));
            for(var t = /*#__PURE__*/ this.spawn(), a = 0; a < this.length; a++){
                var n = this[a], i = /*#__PURE__*/ e.has(n);
                i || t.push(n);
            }
            return t;
        } else return this;
    }, "not"),
    absoluteComplement: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy();
        return e.mutableElements().not(this);
    }, "absoluteComplement"),
    intersect: /*#__PURE__*/ m$1(function(e) {
        if (pe(e)) {
            var t = e;
            return this.filter(t);
        }
        for(var a = /*#__PURE__*/ this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, l = s ? i : n, u = 0; u < o.length; u++){
            var f = o[u];
            l.has(f) && a.push(f);
        }
        return a;
    }, "intersect"),
    xor: /*#__PURE__*/ m$1(function(e) {
        var t = this._private.cy;
        pe(e) && (e = /*#__PURE__*/ t.$(e));
        var a = /*#__PURE__*/ this.spawn(), n = this, i = e, s = /*#__PURE__*/ m$1(function(l, u) {
            for(var f = 0; f < l.length; f++){
                var c = l[f], d = c._private.data.id, g = /*#__PURE__*/ u.hasElementWithId(d);
                g || a.push(c);
            }
        }, "add");
        return s(n, i), s(i, n), a;
    }, "xor"),
    diff: /*#__PURE__*/ m$1(function(e) {
        var t = this._private.cy;
        pe(e) && (e = /*#__PURE__*/ t.$(e));
        var a = /*#__PURE__*/ this.spawn(), n = /*#__PURE__*/ this.spawn(), i = /*#__PURE__*/ this.spawn(), s = this, o = e, l = /*#__PURE__*/ m$1(function(f, c, d) {
            for(var g = 0; g < f.length; g++){
                var h = f[g], m = h._private.data.id, p = /*#__PURE__*/ c.hasElementWithId(m);
                p ? i.merge(h) : d.push(h);
            }
        }, "add");
        return l(s, o, a), l(o, s, n), {
            left: a,
            right: n,
            both: i
        };
    }, "diff"),
    add: /*#__PURE__*/ m$1(function(e) {
        var t = this._private.cy;
        if (!e) return this;
        if (pe(e)) {
            var a = e;
            e = /*#__PURE__*/ t.mutableElements().filter(a);
        }
        for(var n = /*#__PURE__*/ this.spawnSelf(), i = 0; i < e.length; i++){
            var s = e[i], o = !this.has(s);
            o && n.push(s);
        }
        return n;
    }, "add"),
    merge: /*#__PURE__*/ m$1(function(e) {
        var t = this._private, a = t.cy;
        if (!e) return this;
        if (e && pe(e)) {
            var n = e;
            e = /*#__PURE__*/ a.mutableElements().filter(n);
        }
        for(var i = t.map, s = 0; s < e.length; s++){
            var o = e[s], l = o._private.data.id, u = !i.has(l);
            if (u) {
                var f = this.length++;
                this[f] = o, i.set(l, {
                    ele: o,
                    index: f
                });
            }
        }
        return this;
    }, "merge"),
    unmergeAt: /*#__PURE__*/ m$1(function(e) {
        var t = this[e], a = /*#__PURE__*/ t.id(), n = this._private, i = n.map;
        this[e] = void 0, i.delete(a);
        var s = e === this.length - 1;
        if (this.length > 1 && !s) {
            var o = this.length - 1, l = this[o], u = l._private.data.id;
            this[o] = void 0, this[e] = l, i.set(u, {
                ele: l,
                index: e
            });
        }
        return this.length--, this;
    }, "unmergeAt"),
    unmergeOne: /*#__PURE__*/ m$1(function(e) {
        e = e[0];
        var t = this._private, a = e._private.data.id, n = t.map, i = /*#__PURE__*/ n.get(a);
        if (!i) return this;
        var s = i.index;
        return this.unmergeAt(s), this;
    }, "unmergeOne"),
    unmerge: /*#__PURE__*/ m$1(function(e) {
        var t = this._private.cy;
        if (!e) return this;
        if (e && pe(e)) {
            var a = e;
            e = /*#__PURE__*/ t.mutableElements().filter(a);
        }
        for(var n = 0; n < e.length; n++)this.unmergeOne(e[n]);
        return this;
    }, "unmerge"),
    unmergeBy: /*#__PURE__*/ m$1(function(e) {
        for(var t = this.length - 1; t >= 0; t--){
            var a = this[t];
            e(a) && this.unmergeAt(t);
        }
        return this;
    }, "unmergeBy"),
    map: /*#__PURE__*/ m$1(function(e, t) {
        for(var a = [], n = this, i = 0; i < n.length; i++){
            var s = n[i], o = t ? e.apply(t, [
                s,
                i,
                n
            ]) : e(s, i, n);
            a.push(o);
        }
        return a;
    }, "map"),
    reduce: /*#__PURE__*/ m$1(function(e, t) {
        for(var a = t, n = this, i = 0; i < n.length; i++)a = /*#__PURE__*/ e(a, n[i], i, n);
        return a;
    }, "reduce"),
    max: /*#__PURE__*/ m$1(function(e, t) {
        for(var a = -1 / 0, n, i = this, s = 0; s < i.length; s++){
            var o = i[s], l = t ? e.apply(t, [
                o,
                s,
                i
            ]) : e(o, s, i);
            l > a && (a = l, n = o);
        }
        return {
            value: a,
            ele: n
        };
    }, "max"),
    min: /*#__PURE__*/ m$1(function(e, t) {
        for(var a = 1 / 0, n, i = this, s = 0; s < i.length; s++){
            var o = i[s], l = t ? e.apply(t, [
                o,
                s,
                i
            ]) : e(o, s, i);
            l < a && (a = l, n = o);
        }
        return {
            value: a,
            ele: n
        };
    }, "min")
}, Oe = ef;
Oe.u = Oe["|"] = Oe["+"] = Oe.union = Oe.or = Oe.add;
Oe["\\"] = Oe["!"] = Oe["-"] = Oe.difference = Oe.relativeComplement = Oe.subtract = Oe.not;
Oe.n = Oe["&"] = Oe["."] = Oe.and = Oe.intersection = Oe.intersect;
Oe["^"] = Oe["(+)"] = Oe["(-)"] = Oe.symmetricDifference = Oe.symdiff = Oe.xor;
Oe.fnFilter = Oe.filterFn = Oe.stdFilter = Oe.filter;
Oe.complement = Oe.abscomp = Oe.absoluteComplement;
var vp = {
    isNode: /*#__PURE__*/ m$1(function() {
        return this.group() === "nodes";
    }, "isNode"),
    isEdge: /*#__PURE__*/ m$1(function() {
        return this.group() === "edges";
    }, "isEdge"),
    isLoop: /*#__PURE__*/ m$1(function() {
        return this.isEdge() && this.source()[0] === this.target()[0];
    }, "isLoop"),
    isSimple: /*#__PURE__*/ m$1(function() {
        return this.isEdge() && this.source()[0] !== this.target()[0];
    }, "isSimple"),
    group: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) return e._private.group;
    }, "group")
}, rf = /*#__PURE__*/ m$1(function(e, t) {
    var a = /*#__PURE__*/ e.cy(), n = /*#__PURE__*/ a.hasCompoundNodes();
    function i(f) {
        var c = /*#__PURE__*/ f.pstyle("z-compound-depth");
        return c.value === "auto" ? n ? f.zDepth() : 0 : c.value === "bottom" ? -1 : c.value === "top" ? js : 0;
    }
    m$1(i, "getDepth");
    var s = i(e) - i(t);
    if (s !== 0) return s;
    function o(f) {
        var c = /*#__PURE__*/ f.pstyle("z-index-compare");
        return c.value === "auto" && f.isNode() ? 1 : 0;
    }
    m$1(o, "getEleDepth");
    var l = o(e) - o(t);
    if (l !== 0) return l;
    var u = e.pstyle("z-index").value - t.pstyle("z-index").value;
    return u !== 0 ? u : e.poolIndex() - t.poolIndex();
}, "zIndexSort"), kn = {
    forEach: /*#__PURE__*/ m$1(function(e, t) {
        if (Ke(e)) for(var a = this.length, n = 0; n < a; n++){
            var i = this[n], s = t ? e.apply(t, [
                i,
                n,
                this
            ]) : e(i, n, this);
            if (s === false) break;
        }
        return this;
    }, "forEach"),
    toArray: /*#__PURE__*/ m$1(function() {
        for(var e = [], t = 0; t < this.length; t++)e.push(this[t]);
        return e;
    }, "toArray"),
    slice: /*#__PURE__*/ m$1(function(e, t) {
        var a = [], n = this.length;
        t == null && (t = n), e == null && (e = 0), e < 0 && (e = n + e), t < 0 && (t = n + t);
        for(var i = e; i >= 0 && i < t && i < n; i++)a.push(this[i]);
        return this.spawn(a);
    }, "slice"),
    size: /*#__PURE__*/ m$1(function() {
        return this.length;
    }, "size"),
    eq: /*#__PURE__*/ m$1(function(e) {
        return this[e] || this.spawn();
    }, "eq"),
    first: /*#__PURE__*/ m$1(function() {
        return this[0] || this.spawn();
    }, "first"),
    last: /*#__PURE__*/ m$1(function() {
        return this[this.length - 1] || this.spawn();
    }, "last"),
    empty: /*#__PURE__*/ m$1(function() {
        return this.length === 0;
    }, "empty"),
    nonempty: /*#__PURE__*/ m$1(function() {
        return !this.empty();
    }, "nonempty"),
    sort: /*#__PURE__*/ m$1(function(e) {
        if (!Ke(e)) return this;
        var t = /*#__PURE__*/ this.toArray().sort(e);
        return this.spawn(t);
    }, "sort"),
    sortByZIndex: /*#__PURE__*/ m$1(function() {
        return this.sort(rf);
    }, "sortByZIndex"),
    zDepth: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) {
            var t = e._private, a = t.group;
            if (a === "nodes") {
                var n = t.data.parent ? e.parents().size() : 0;
                return e.isParent() ? n : js - 1;
            } else {
                var i = t.source, s = t.target, o = /*#__PURE__*/ i.zDepth(), l = /*#__PURE__*/ s.zDepth();
                return Math.max(o, l, 0);
            }
        }
    }, "zDepth")
};
kn.each = kn.forEach;
var fp = /*#__PURE__*/ m$1(function() {
    var e = "undefined", t = (typeof Symbol > "u" ? "undefined" : nr(Symbol)) != e && nr(Symbol.iterator) != e;
    t && (kn[Symbol.iterator] = function() {
        var a = this, n = {
            value: void 0,
            done: false
        }, i = 0, s = this.length;
        return jl({
            next: /*#__PURE__*/ m$1(function() {
                return i < s ? n.value = a[i++] : (n.value = void 0, n.done = true), n;
            }, "next")
        }, Symbol.iterator, function() {
            return this;
        });
    });
}, "defineSymbolIterator");
fp();
var cp = /*#__PURE__*/ dr({
    nodeDimensionsIncludeLabels: false
}), cn = {
    layoutDimensions: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ cp(e);
        var t;
        if (!this.takesUpSpace()) t = {
            w: 0,
            h: 0
        };
        else if (e.nodeDimensionsIncludeLabels) {
            var a = /*#__PURE__*/ this.boundingBox();
            t = {
                w: a.w,
                h: a.h
            };
        } else t = {
            w: /*#__PURE__*/ this.outerWidth(),
            h: /*#__PURE__*/ this.outerHeight()
        };
        return (t.w === 0 || t.h === 0) && (t.w = t.h = 1), t;
    }, "layoutDimensions"),
    layoutPositions: /*#__PURE__*/ m$1(function(e, t, a) {
        var n = /*#__PURE__*/ this.nodes().filter(function(C) {
            return !C.isParent();
        }), i = /*#__PURE__*/ this.cy(), s = t.eles, o = /*#__PURE__*/ m$1(function(T) {
            return T.id();
        }, "getMemoizeKey"), l = /*#__PURE__*/ Jt(a, o);
        e.emit({
            type: "layoutstart",
            layout: e
        }), e.animations = [];
        var u = /*#__PURE__*/ m$1(function(T, E, S) {
            var D = {
                x: E.x1 + E.w / 2,
                y: E.y1 + E.h / 2
            }, B = {
                x: (S.x - D.x) * T,
                y: (S.y - D.y) * T
            };
            return {
                x: D.x + B.x,
                y: D.y + B.y
            };
        }, "calculateSpacing"), f = t.spacingFactor && t.spacingFactor !== 1, c = /*#__PURE__*/ m$1(function() {
            if (!f) return null;
            for(var T = /*#__PURE__*/ xr(), E = 0; E < n.length; E++){
                var S = n[E], D = /*#__PURE__*/ l(S, E);
                bv(T, D.x, D.y);
            }
            return T;
        }, "spacingBb"), d = /*#__PURE__*/ c(), g = /*#__PURE__*/ Jt(function(C, T) {
            var E = /*#__PURE__*/ l(C, T);
            if (f) {
                var S = /*#__PURE__*/ Math.abs(t.spacingFactor);
                E = /*#__PURE__*/ u(S, d, E);
            }
            return t.transform != null && (E = /*#__PURE__*/ t.transform(C, E)), E;
        }, o);
        if (t.animate) {
            for(var h = 0; h < n.length; h++){
                var m = n[h], p = /*#__PURE__*/ g(m, h), y = t.animateFilter == null || t.animateFilter(m, h);
                if (y) {
                    var b1 = /*#__PURE__*/ m.animation({
                        position: p,
                        duration: t.animationDuration,
                        easing: t.animationEasing
                    });
                    e.animations.push(b1);
                } else m.position(p);
            }
            if (t.fit) {
                var w = /*#__PURE__*/ i.animation({
                    fit: {
                        boundingBox: /*#__PURE__*/ s.boundingBoxAt(g),
                        padding: t.padding
                    },
                    duration: t.animationDuration,
                    easing: t.animationEasing
                });
                e.animations.push(w);
            } else if (t.zoom !== void 0 && t.pan !== void 0) {
                var x = /*#__PURE__*/ i.animation({
                    zoom: t.zoom,
                    pan: t.pan,
                    duration: t.animationDuration,
                    easing: t.animationEasing
                });
                e.animations.push(x);
            }
            e.animations.forEach(function(C) {
                return C.play();
            }), e.one("layoutready", t.ready), e.emit({
                type: "layoutready",
                layout: e
            }), aa.all(/*#__PURE__*/ e.animations.map(function(C) {
                return C.promise();
            })).then(function() {
                e.one("layoutstop", t.stop), e.emit({
                    type: "layoutstop",
                    layout: e
                });
            });
        } else n.positions(g), t.fit && i.fit(t.eles, t.padding), t.zoom != null && i.zoom(t.zoom), t.pan && i.pan(t.pan), e.one("layoutready", t.ready), e.emit({
            type: "layoutready",
            layout: e
        }), e.one("layoutstop", t.stop), e.emit({
            type: "layoutstop",
            layout: e
        });
        return this;
    }, "layoutPositions"),
    layout: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ this.cy();
        return t.makeLayout(/*#__PURE__*/ we({}, e, {
            eles: this
        }));
    }, "layout")
};
cn.createLayout = cn.makeLayout = cn.layout;
function tf(r, e, t) {
    var a = t._private, n = a.styleCache = a.styleCache || [], i;
    return (i = n[r]) != null || (i = n[r] = /*#__PURE__*/ e(t)), i;
}
m$1(tf, "styleCache");
function Wn(r, e) {
    return r = /*#__PURE__*/ Pt(r), m$1(function(a) {
        return tf(r, e, a);
    }, "cachedStyleFunction");
}
m$1(Wn, "cacheStyleFunction");
function $n(r, e) {
    r = /*#__PURE__*/ Pt(r);
    var t = /*#__PURE__*/ m$1(function(n) {
        return e.call(n);
    }, "selfFn");
    return m$1(function() {
        var n = this[0];
        if (n) return tf(r, t, n);
    }, "cachedPrototypeStyleFunction");
}
m$1($n, "cachePrototypeStyleFunction");
var fr = {
    recalculateRenderedStyle: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ t.renderer(), n = /*#__PURE__*/ t.styleEnabled();
        return a && n && a.recalculateRenderedStyle(this, e), this;
    }, "recalculateRenderedStyle"),
    dirtyStyleCache: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy(), t = /*#__PURE__*/ m$1(function(i) {
            return i._private.styleCache = null;
        }, "dirty");
        if (e.hasCompoundNodes()) {
            var a;
            a = /*#__PURE__*/ this.spawnSelf().merge(/*#__PURE__*/ this.descendants()).merge(/*#__PURE__*/ this.parents()), a.merge(/*#__PURE__*/ a.connectedEdges()), a.forEach(t);
        } else this.forEach(function(n) {
            t(n), n.connectedEdges().forEach(t);
        });
        return this;
    }, "dirtyStyleCache"),
    updateStyle: /*#__PURE__*/ m$1(function(e) {
        var t = this._private.cy;
        if (!t.styleEnabled()) return this;
        if (t.batching()) {
            var a = t._private.batchStyleEles;
            return a.merge(this), this;
        }
        var n = /*#__PURE__*/ t.hasCompoundNodes(), i = this;
        e = !!(e || e === void 0), n && (i = /*#__PURE__*/ this.spawnSelf().merge(/*#__PURE__*/ this.descendants()).merge(/*#__PURE__*/ this.parents()));
        var s = i;
        return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
            return o._private.styleDirty = true;
        }), this;
    }, "updateStyle"),
    cleanStyle: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy();
        if (e.styleEnabled()) for(var t = 0; t < this.length; t++){
            var a = this[t];
            a._private.styleDirty && (a._private.styleDirty = false, e.style().apply(a));
        }
    }, "cleanStyle"),
    parsedStyle: /*#__PURE__*/ m$1(function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, a = this[0], n = /*#__PURE__*/ a.cy();
        if (n.styleEnabled() && a) {
            a._private.styleDirty && (a._private.styleDirty = false, n.style().apply(a));
            var i = a._private.style[e];
            return i ?? (t ? n.style().getDefaultProperty(e) : null);
        }
    }, "parsedStyle"),
    numericStyle: /*#__PURE__*/ m$1(function(e) {
        var t = this[0];
        if (t.cy().styleEnabled() && t) {
            var a = /*#__PURE__*/ t.pstyle(e);
            return a.pfValue !== void 0 ? a.pfValue : a.value;
        }
    }, "numericStyle"),
    numericStyleUnits: /*#__PURE__*/ m$1(function(e) {
        var t = this[0];
        if (t.cy().styleEnabled() && t) return t.pstyle(e).units;
    }, "numericStyleUnits"),
    renderedStyle: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ this.cy();
        if (!t.styleEnabled()) return this;
        var a = this[0];
        if (a) return t.style().getRenderedStyle(a, e);
    }, "renderedStyle"),
    style: /*#__PURE__*/ m$1(function(e, t) {
        var a = /*#__PURE__*/ this.cy();
        if (!a.styleEnabled()) return this;
        var n = false, i = /*#__PURE__*/ a.style();
        if (Ie(e)) {
            var s = e;
            i.applyBypass(this, s, n), this.emitAndNotify("style");
        } else if (pe(e)) if (t === void 0) {
            var o = this[0];
            return o ? i.getStylePropertyValue(o, e) : void 0;
        } else i.applyBypass(this, e, t, n), this.emitAndNotify("style");
        else if (e === void 0) {
            var l = this[0];
            return l ? i.getRawStyle(l) : void 0;
        }
        return this;
    }, "style"),
    removeStyle: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ this.cy();
        if (!t.styleEnabled()) return this;
        var a = false, n = /*#__PURE__*/ t.style(), i = this;
        if (e === void 0) for(var s = 0; s < i.length; s++){
            var o = i[s];
            n.removeAllBypasses(o, a);
        }
        else {
            e = /*#__PURE__*/ e.split(/\s+/);
            for(var l = 0; l < i.length; l++){
                var u = i[l];
                n.removeBypasses(u, e, a);
            }
        }
        return this.emitAndNotify("style"), this;
    }, "removeStyle"),
    show: /*#__PURE__*/ m$1(function() {
        return this.css("display", "element"), this;
    }, "show"),
    hide: /*#__PURE__*/ m$1(function() {
        return this.css("display", "none"), this;
    }, "hide"),
    effectiveOpacity: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy();
        if (!e.styleEnabled()) return 1;
        var t = /*#__PURE__*/ e.hasCompoundNodes(), a = this[0];
        if (a) {
            var n = a._private, i = a.pstyle("opacity").value;
            if (!t) return i;
            var s = n.data.parent ? a.parents() : null;
            if (s) for(var o = 0; o < s.length; o++){
                var l = s[o], u = l.pstyle("opacity").value;
                i = u * i;
            }
            return i;
        }
    }, "effectiveOpacity"),
    transparent: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy();
        if (!e.styleEnabled()) return false;
        var t = this[0], a = /*#__PURE__*/ t.cy().hasCompoundNodes();
        if (t) return a ? t.effectiveOpacity() === 0 : t.pstyle("opacity").value === 0;
    }, "transparent"),
    backgrounding: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy();
        if (!e.styleEnabled()) return false;
        var t = this[0];
        return !!t._private.backgrounding;
    }, "backgrounding")
};
function bs(r, e) {
    var t = r._private, a = t.data.parent ? r.parents() : null;
    if (a) for(var n = 0; n < a.length; n++){
        var i = a[n];
        if (!e(i)) return false;
    }
    return true;
}
m$1(bs, "checkCompound");
function fo(r) {
    var e = r.ok, t = r.edgeOkViaNode || r.ok, a = r.parentOk || r.ok;
    return function() {
        var n = /*#__PURE__*/ this.cy();
        if (!n.styleEnabled()) return true;
        var i = this[0], s = /*#__PURE__*/ n.hasCompoundNodes();
        if (i) {
            var o = i._private;
            if (!e(i)) return false;
            if (i.isNode()) return !s || bs(i, a);
            var l = o.source, u = o.target;
            return t(l) && (!s || bs(l, t)) && (l === u || t(u) && (!s || bs(u, t)));
        }
    };
}
m$1(fo, "defineDerivedStateFunction");
var na = /*#__PURE__*/ Wn("eleTakesUpSpace", function(r) {
    return r.pstyle("display").value === "element" && r.width() !== 0 && (r.isNode() ? r.height() !== 0 : true);
});
fr.takesUpSpace = /*#__PURE__*/ $n("takesUpSpace", /*#__PURE__*/ fo({
    ok: na
}));
var dp = /*#__PURE__*/ Wn("eleInteractive", function(r) {
    return r.pstyle("events").value === "yes" && r.pstyle("visibility").value === "visible" && na(r);
}), hp = /*#__PURE__*/ Wn("parentInteractive", function(r) {
    return r.pstyle("visibility").value === "visible" && na(r);
});
fr.interactive = /*#__PURE__*/ $n("interactive", /*#__PURE__*/ fo({
    ok: dp,
    parentOk: hp,
    edgeOkViaNode: na
}));
fr.noninteractive = function() {
    var r = this[0];
    if (r) return !r.interactive();
};
var gp = /*#__PURE__*/ Wn("eleVisible", function(r) {
    return r.pstyle("visibility").value === "visible" && r.pstyle("opacity").pfValue !== 0 && na(r);
}), pp = na;
fr.visible = /*#__PURE__*/ $n("visible", /*#__PURE__*/ fo({
    ok: gp,
    edgeOkViaNode: pp
}));
fr.hidden = function() {
    var r = this[0];
    if (r) return !r.visible();
};
fr.isBundledBezier = /*#__PURE__*/ $n("isBundledBezier", function() {
    return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : false;
});
fr.bypass = fr.css = fr.style;
fr.renderedCss = fr.renderedStyle;
fr.removeBypass = fr.removeCss = fr.removeStyle;
fr.pstyle = fr.parsedStyle;
var ut = {};
function gl(r) {
    return function() {
        var e = arguments, t = [];
        if (e.length === 2) {
            var a = e[0], n = e[1];
            this.on(r.event, a, n);
        } else if (e.length === 1 && Ke(e[0])) {
            var i = e[0];
            this.on(r.event, i);
        } else if (e.length === 0 || e.length === 1 && Ge(e[0])) {
            for(var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++){
                var l = this[o], u = !r.ableField || l._private[r.ableField], f = l._private[r.field] != r.value;
                if (r.overrideAble) {
                    var c = /*#__PURE__*/ r.overrideAble(l);
                    if (c !== void 0 && (u = c, !c)) return this;
                }
                u && (l._private[r.field] = r.value, f && t.push(l));
            }
            var d = /*#__PURE__*/ this.spawn(t);
            d.updateStyle(), d.emit(r.event), s && d.emit(s);
        }
        return this;
    };
}
m$1(gl, "defineSwitchFunction");
function ia(r) {
    ut[r.field] = function() {
        var e = this[0];
        if (e) {
            if (r.overrideField) {
                var t = /*#__PURE__*/ r.overrideField(e);
                if (t !== void 0) return t;
            }
            return e._private[r.field];
        }
    }, ut[r.on] = /*#__PURE__*/ gl({
        event: r.on,
        field: r.field,
        ableField: r.ableField,
        overrideAble: r.overrideAble,
        value: true
    }), ut[r.off] = /*#__PURE__*/ gl({
        event: r.off,
        field: r.field,
        ableField: r.ableField,
        overrideAble: r.overrideAble,
        value: false
    });
}
m$1(ia, "defineSwitchSet");
ia({
    field: "locked",
    overrideField: /*#__PURE__*/ m$1(function(e) {
        return e.cy().autolock() ? true : void 0;
    }, "overrideField"),
    on: "lock",
    off: "unlock"
});
ia({
    field: "grabbable",
    overrideField: /*#__PURE__*/ m$1(function(e) {
        return e.cy().autoungrabify() || e.pannable() ? false : void 0;
    }, "overrideField"),
    on: "grabify",
    off: "ungrabify"
});
ia({
    field: "selected",
    ableField: "selectable",
    overrideAble: /*#__PURE__*/ m$1(function(e) {
        return e.cy().autounselectify() ? false : void 0;
    }, "overrideAble"),
    on: "select",
    off: "unselect"
});
ia({
    field: "selectable",
    overrideField: /*#__PURE__*/ m$1(function(e) {
        return e.cy().autounselectify() ? false : void 0;
    }, "overrideField"),
    on: "selectify",
    off: "unselectify"
});
ut.deselect = ut.unselect;
ut.grabbed = function() {
    var r = this[0];
    if (r) return r._private.grabbed;
};
ia({
    field: "active",
    on: "activate",
    off: "unactivate"
});
ia({
    field: "pannable",
    on: "panify",
    off: "unpanify"
});
ut.inactive = function() {
    var r = this[0];
    if (r) return !r._private.active;
};
var pr = {}, pl = /*#__PURE__*/ m$1(function(e) {
    return m$1(function(a) {
        for(var n = this, i = [], s = 0; s < n.length; s++){
            var o = n[s];
            if (o.isNode()) {
                for(var l = false, u = /*#__PURE__*/ o.connectedEdges(), f = 0; f < u.length; f++){
                    var c = u[f], d = /*#__PURE__*/ c.source(), g = /*#__PURE__*/ c.target();
                    if (e.noIncomingEdges && g === o && d !== o || e.noOutgoingEdges && d === o && g !== o) {
                        l = true;
                        break;
                    }
                }
                l || i.push(o);
            }
        }
        return this.spawn(i, true).filter(a);
    }, "dagExtremityImpl");
}, "defineDagExtremity"), yl = /*#__PURE__*/ m$1(function(e) {
    return function(t) {
        for(var a = this, n = [], i = 0; i < a.length; i++){
            var s = a[i];
            if (s.isNode()) for(var o = /*#__PURE__*/ s.connectedEdges(), l = 0; l < o.length; l++){
                var u = o[l], f = /*#__PURE__*/ u.source(), c = /*#__PURE__*/ u.target();
                e.outgoing && f === s ? (n.push(u), n.push(c)) : e.incoming && c === s && (n.push(u), n.push(f));
            }
        }
        return this.spawn(n, true).filter(t);
    };
}, "defineDagOneHop"), ml = /*#__PURE__*/ m$1(function(e) {
    return function(t) {
        for(var a = this, n = [], i = {};;){
            var s = e.outgoing ? a.outgoers() : a.incomers();
            if (s.length === 0) break;
            for(var o = false, l = 0; l < s.length; l++){
                var u = s[l], f = /*#__PURE__*/ u.id();
                i[f] || (i[f] = true, n.push(u), o = true);
            }
            if (!o) break;
            a = s;
        }
        return this.spawn(n, true).filter(t);
    };
}, "defineDagAllHops");
pr.clearTraversalCache = function() {
    for(var r = 0; r < this.length; r++)this[r]._private.traversalCache = null;
};
we(pr, {
    roots: /*#__PURE__*/ pl({
        noIncomingEdges: true
    }),
    leaves: /*#__PURE__*/ pl({
        noOutgoingEdges: true
    }),
    outgoers: /*#__PURE__*/ Mr(/*#__PURE__*/ yl({
        outgoing: true
    }), "outgoers"),
    successors: /*#__PURE__*/ ml({
        outgoing: true
    }),
    incomers: /*#__PURE__*/ Mr(/*#__PURE__*/ yl({
        incoming: true
    }), "incomers"),
    predecessors: /*#__PURE__*/ ml({})
});
we(pr, {
    neighborhood: /*#__PURE__*/ Mr(function(r) {
        for(var e = [], t = /*#__PURE__*/ this.nodes(), a = 0; a < t.length; a++)for(var n = t[a], i = /*#__PURE__*/ n.connectedEdges(), s = 0; s < i.length; s++){
            var o = i[s], l = /*#__PURE__*/ o.source(), u = /*#__PURE__*/ o.target(), f = n === l ? u : l;
            f.length > 0 && e.push(f[0]), e.push(o[0]);
        }
        return this.spawn(e, true).filter(r);
    }, "neighborhood"),
    closedNeighborhood: /*#__PURE__*/ m$1(function(e) {
        return this.neighborhood().add(this).filter(e);
    }, "closedNeighborhood"),
    openNeighborhood: /*#__PURE__*/ m$1(function(e) {
        return this.neighborhood(e);
    }, "openNeighborhood")
});
pr.neighbourhood = pr.neighborhood;
pr.closedNeighbourhood = pr.closedNeighborhood;
pr.openNeighbourhood = pr.openNeighborhood;
we(pr, {
    source: /*#__PURE__*/ Mr(/*#__PURE__*/ m$1(function(e) {
        var t = this[0], a;
        return t && (a = t._private.source || t.cy().collection()), a && e ? a.filter(e) : a;
    }, "sourceImpl"), "source"),
    target: /*#__PURE__*/ Mr(/*#__PURE__*/ m$1(function(e) {
        var t = this[0], a;
        return t && (a = t._private.target || t.cy().collection()), a && e ? a.filter(e) : a;
    }, "targetImpl"), "target"),
    sources: /*#__PURE__*/ bl({
        attr: "source"
    }),
    targets: /*#__PURE__*/ bl({
        attr: "target"
    })
});
function bl(r) {
    return m$1(function(t) {
        for(var a = [], n = 0; n < this.length; n++){
            var i = this[n], s = i._private[r.attr];
            s && a.push(s);
        }
        return this.spawn(a, true).filter(t);
    }, "sourceImpl");
}
m$1(bl, "defineSourceFunction");
we(pr, {
    edgesWith: /*#__PURE__*/ Mr(/*#__PURE__*/ wl(), "edgesWith"),
    edgesTo: /*#__PURE__*/ Mr(/*#__PURE__*/ wl({
        thisIsSrc: true
    }), "edgesTo")
});
function wl(r) {
    return m$1(function(t) {
        var a = [], n = this._private.cy, i = r || {};
        pe(t) && (t = /*#__PURE__*/ n.$(t));
        for(var s = 0; s < t.length; s++)for(var o = t[s]._private.edges, l = 0; l < o.length; l++){
            var u = o[l], f = u._private.data, c = this.hasElementWithId(f.source) && t.hasElementWithId(f.target), d = t.hasElementWithId(f.source) && this.hasElementWithId(f.target), g = c || d;
            g && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !c || i.thisIsTgt && !d) || a.push(u));
        }
        return this.spawn(a, true);
    }, "edgesWithImpl");
}
m$1(wl, "defineEdgesWithFunction");
we(pr, {
    connectedEdges: /*#__PURE__*/ Mr(function(r) {
        for(var e = [], t = this, a = 0; a < t.length; a++){
            var n = t[a];
            if (n.isNode()) for(var i = n._private.edges, s = 0; s < i.length; s++){
                var o = i[s];
                e.push(o);
            }
        }
        return this.spawn(e, true).filter(r);
    }, "connectedEdges"),
    connectedNodes: /*#__PURE__*/ Mr(function(r) {
        for(var e = [], t = this, a = 0; a < t.length; a++){
            var n = t[a];
            n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
        }
        return this.spawn(e, true).filter(r);
    }, "connectedNodes"),
    parallelEdges: /*#__PURE__*/ Mr(/*#__PURE__*/ xl(), "parallelEdges"),
    codirectedEdges: /*#__PURE__*/ Mr(/*#__PURE__*/ xl({
        codirected: true
    }), "codirectedEdges")
});
function xl(r) {
    var e = {
        codirected: false
    };
    return r = /*#__PURE__*/ we({}, e, r), m$1(function(a) {
        for(var n = [], i = /*#__PURE__*/ this.edges(), s = r, o = 0; o < i.length; o++)for(var l = i[o], u = l._private, f = u.source, c = f._private.data.id, d = u.data.target, g = f._private.edges, h = 0; h < g.length; h++){
            var m = g[h], p = m._private.data, y = p.target, b1 = p.source, w = y === d && b1 === c, x = c === y && d === b1;
            (s.codirected && w || !s.codirected && (w || x)) && n.push(m);
        }
        return this.spawn(n, true).filter(a);
    }, "parallelEdgesImpl");
}
m$1(xl, "defineParallelEdgesFunction");
we(pr, {
    components: /*#__PURE__*/ m$1(function(e) {
        var t = this, a = /*#__PURE__*/ t.cy(), n = /*#__PURE__*/ a.collection(), i = e == null ? t.nodes() : e.nodes(), s = [];
        e != null && i.empty() && (i = /*#__PURE__*/ e.sources());
        var o = /*#__PURE__*/ m$1(function(f, c) {
            n.merge(f), i.unmerge(f), c.merge(f);
        }, "visitInComponent");
        if (i.empty()) return t.spawn();
        var l = /*#__PURE__*/ m$1(function() {
            var f = /*#__PURE__*/ a.collection();
            s.push(f);
            var c = i[0];
            o(c, f), t.bfs({
                directed: false,
                roots: c,
                visit: /*#__PURE__*/ m$1(function(g) {
                    return o(g, f);
                }, "visit")
            }), f.forEach(function(d) {
                d.connectedEdges().forEach(function(g) {
                    t.has(g) && f.has(/*#__PURE__*/ g.source()) && f.has(/*#__PURE__*/ g.target()) && f.merge(g);
                });
            });
        }, "_loop");
        do l();
        while (i.length > 0);
        return s;
    }, "components"),
    component: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        return e.cy().mutableElements().components(e)[0];
    }, "component")
});
pr.componentsOf = pr.components;
var cr = /*#__PURE__*/ m$1(function(e, t) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (e === void 0) {
        Ue("A collection must have a reference to the core");
        return;
    }
    var i = new Yr, s = false;
    if (!t) t = [];
    else if (t.length > 0 && Ie(t[0]) && !Oa(t[0])) {
        s = true;
        for(var o = [], l = new ta, u = 0, f = t.length; u < f; u++){
            var c = t[u];
            c.data == null && (c.data = {});
            var d = c.data;
            if (d.id == null) d.id = /*#__PURE__*/ pv();
            else if (e.hasElementWithId(d.id) || l.has(d.id)) continue;
            var g = new On(e, c, false);
            o.push(g), l.add(d.id);
        }
        t = o;
    }
    this.length = 0;
    for(var h = 0, m = t.length; h < m; h++){
        var p = t[h][0];
        if (p != null) {
            var y = p._private.data.id;
            (!a || !i.has(y)) && (a && i.set(y, {
                index: this.length,
                ele: p
            }), this[this.length] = p, this.length++);
        }
    }
    this._private = {
        eles: this,
        cy: e,
        get map () {
            return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
        },
        set map (b){
            this.lazyMap = b;
        },
        rebuildMap: /*#__PURE__*/ m$1(function() {
            for(var w = this.lazyMap = new Yr, x = this.eles, C = 0; C < x.length; C++){
                var T = x[C];
                w.set(/*#__PURE__*/ T.id(), {
                    index: C,
                    ele: T
                });
            }
        }, "rebuildMap")
    }, a && (this._private.map = i), s && !n && this.restore();
}, "Collection"), We = On.prototype = cr.prototype = /*#__PURE__*/ Object.create(Array.prototype);
We.instanceString = function() {
    return "collection";
};
We.spawn = function(r, e) {
    return new cr(this.cy(), r, e);
};
We.spawnSelf = function() {
    return this.spawn(this);
};
We.cy = function() {
    return this._private.cy;
};
We.renderer = function() {
    return this._private.cy.renderer();
};
We.element = function() {
    return this[0];
};
We.collection = function() {
    return tv(this) ? this : new cr(this._private.cy, [
        this
    ]);
};
We.unique = function() {
    return new cr(this._private.cy, this, true);
};
We.hasElementWithId = function(r) {
    return r = "" + r, this._private.map.has(r);
};
We.getElementById = function(r) {
    r = "" + r;
    var e = this._private.cy, t = /*#__PURE__*/ this._private.map.get(r);
    return t ? t.ele : new cr(e);
};
We.$id = We.getElementById;
We.poolIndex = function() {
    var r = this._private.cy, e = r._private.elements, t = this[0]._private.data.id;
    return e._private.map.get(t).index;
};
We.indexOf = function(r) {
    var e = r[0]._private.data.id;
    return this._private.map.get(e).index;
};
We.indexOfId = function(r) {
    return r = "" + r, this._private.map.get(r).index;
};
We.json = function(r) {
    var e = /*#__PURE__*/ this.element(), t = /*#__PURE__*/ this.cy();
    if (e == null && r) return this;
    if (e != null) {
        var a = e._private;
        if (Ie(r)) {
            if (t.startBatch(), r.data) {
                e.data(r.data);
                var n = a.data;
                if (e.isEdge()) {
                    var i = false, s = {}, o = r.data.source, l = r.data.target;
                    o != null && o != n.source && (s.source = "" + o, i = true), l != null && l != n.target && (s.target = "" + l, i = true), i && (e = /*#__PURE__*/ e.move(s));
                } else {
                    var u = "parent" in r.data, f = r.data.parent;
                    u && (f != null || n.parent != null) && f != n.parent && (f === void 0 && (f = null), f != null && (f = "" + f), e = /*#__PURE__*/ e.move({
                        parent: f
                    }));
                }
            }
            r.position && e.position(r.position);
            var c = /*#__PURE__*/ m$1(function(m, p, y) {
                var b1 = r[m];
                b1 != null && b1 !== a[m] && (b1 ? e[p]() : e[y]());
            }, "checkSwitch");
            return c("removed", "remove", "restore"), c("selected", "select", "unselect"), c("selectable", "selectify", "unselectify"), c("locked", "lock", "unlock"), c("grabbable", "grabify", "ungrabify"), c("pannable", "panify", "unpanify"), r.classes != null && e.classes(r.classes), t.endBatch(), this;
        } else if (r === void 0) {
            var d = {
                data: /*#__PURE__*/ _r(a.data),
                position: /*#__PURE__*/ _r(a.position),
                group: a.group,
                removed: a.removed,
                selected: a.selected,
                selectable: a.selectable,
                locked: a.locked,
                grabbable: a.grabbable,
                pannable: a.pannable,
                classes: null
            };
            d.classes = "";
            var g = 0;
            return a.classes.forEach(function(h) {
                return d.classes += g++ === 0 ? h : " " + h;
            }), d;
        }
    }
};
We.jsons = function() {
    for(var r = [], e = 0; e < this.length; e++){
        var t = this[e], a = /*#__PURE__*/ t.json();
        r.push(a);
    }
    return r;
};
We.clone = function() {
    for(var r = /*#__PURE__*/ this.cy(), e = [], t = 0; t < this.length; t++){
        var a = this[t], n = /*#__PURE__*/ a.json(), i = new On(r, n, false);
        e.push(i);
    }
    return new cr(r, e);
};
We.copy = We.clone;
We.restore = function() {
    for(var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, t = this, a = /*#__PURE__*/ t.cy(), n = a._private, i = [], s = [], o, l = 0, u = t.length; l < u; l++){
        var f = t[l];
        e && !f.removed() || (f.isNode() ? i.push(f) : s.push(f));
    }
    o = /*#__PURE__*/ i.concat(s);
    var c, d = /*#__PURE__*/ m$1(function() {
        o.splice(c, 1), c--;
    }, "removeFromElements");
    for(c = 0; c < o.length; c++){
        var g = o[c], h = g._private, m = h.data;
        if (g.clearTraversalCache(), !(!e && !h.removed)) {
            if (m.id === void 0) m.id = /*#__PURE__*/ pv();
            else if (ne(m.id)) m.id = "" + m.id;
            else if (lt(m.id) || !pe(m.id)) {
                Ue("Can not create element with invalid string ID `" + m.id + "`"), d();
                continue;
            } else if (a.hasElementWithId(m.id)) {
                Ue("Can not create second element with ID `" + m.id + "`"), d();
                continue;
            }
        }
        var p = m.id;
        if (g.isNode()) {
            var y = h.position;
            y.x == null && (y.x = 0), y.y == null && (y.y = 0);
        }
        if (g.isEdge()) {
            for(var b1 = g, w = [
                "source",
                "target"
            ], x = w.length, C = false, T = 0; T < x; T++){
                var E = w[T], S = m[E];
                ne(S) && (S = m[E] = "" + m[E]), S == null || S === "" ? (Ue("Can not create edge `" + p + "` with unspecified " + E), C = true) : a.hasElementWithId(S) || (Ue("Can not create edge `" + p + "` with nonexistant " + E + " `" + S + "`"), C = true);
            }
            if (C) {
                d();
                continue;
            }
            var D = /*#__PURE__*/ a.getElementById(m.source), B = /*#__PURE__*/ a.getElementById(m.target);
            D.same(B) ? D._private.edges.push(b1) : (D._private.edges.push(b1), B._private.edges.push(b1)), b1._private.source = D, b1._private.target = B;
        }
        h.map = new Yr, h.map.set(p, {
            ele: g,
            index: 0
        }), h.removed = false, e && a.addToPool(g);
    }
    for(var P = 0; P < i.length; P++){
        var A = i[P], R = A._private.data;
        ne(R.parent) && (R.parent = "" + R.parent);
        var M = R.parent, I = M != null;
        if (I || A._private.parent) {
            var O = A._private.parent ? a.collection().merge(A._private.parent) : a.getElementById(M);
            if (O.empty()) R.parent = void 0;
            else if (O[0].removed()) qe("Node added with missing parent, reference to parent removed"), R.parent = void 0, A._private.parent = null;
            else {
                for(var L = false, N = O; !N.empty();){
                    if (A.same(N)) {
                        L = true, R.parent = void 0;
                        break;
                    }
                    N = /*#__PURE__*/ N.parent();
                }
                L || (O[0]._private.children.push(A), A._private.parent = O[0], n.hasCompoundNodes = true);
            }
        }
    }
    if (o.length > 0) {
        for(var q = o.length === t.length ? t : new cr(a, o), H = 0; H < q.length; H++){
            var z = q[H];
            z.isNode() || (z.parallelEdges().clearTraversalCache(), z.source().clearTraversalCache(), z.target().clearTraversalCache());
        }
        var V;
        n.hasCompoundNodes ? V = /*#__PURE__*/ a.collection().merge(q).merge(/*#__PURE__*/ q.connectedNodes()).merge(/*#__PURE__*/ q.parent()) : V = q, V.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(r), r ? q.emitAndNotify("add") : e && q.emit("add");
    }
    return t;
};
We.removed = function() {
    var r = this[0];
    return r && r._private.removed;
};
We.inside = function() {
    var r = this[0];
    return r && !r._private.removed;
};
We.remove = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, t = this, a = [], n = {}, i = t._private.cy;
    function s(M) {
        for(var I = M._private.edges, O = 0; O < I.length; O++)l(I[O]);
    }
    m$1(s, "addConnectedEdges");
    function o(M) {
        for(var I = M._private.children, O = 0; O < I.length; O++)l(I[O]);
    }
    m$1(o, "addChildren");
    function l(M) {
        var I = n[M.id()];
        e && M.removed() || I || (n[M.id()] = true, M.isNode() ? (a.push(M), s(M), o(M)) : a.unshift(M));
    }
    m$1(l, "add");
    for(var u = 0, f = t.length; u < f; u++){
        var c = t[u];
        l(c);
    }
    function d(M, I) {
        var O = M._private.edges;
        vt(O, I), M.clearTraversalCache();
    }
    m$1(d, "removeEdgeRef");
    function g(M) {
        M.clearTraversalCache();
    }
    m$1(g, "removeParallelRef");
    var h = [];
    h.ids = {};
    function m(M, I) {
        I = I[0], M = M[0];
        var O = M._private.children, L = /*#__PURE__*/ M.id();
        vt(O, I), I._private.parent = null, h.ids[L] || (h.ids[L] = true, h.push(M));
    }
    m$1(m, "removeChildRef"), t.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
    for(var p = 0; p < a.length; p++){
        var y = a[p];
        if (y.isEdge()) {
            var b1 = y.source()[0], w = y.target()[0];
            d(b1, y), d(w, y);
            for(var x = /*#__PURE__*/ y.parallelEdges(), C = 0; C < x.length; C++){
                var T = x[C];
                g(T), T.isBundledBezier() && T.dirtyBoundingBoxCache();
            }
        } else {
            var E = /*#__PURE__*/ y.parent();
            E.length !== 0 && m(E, y);
        }
        e && (y._private.removed = true);
    }
    var S = i._private.elements;
    i._private.hasCompoundNodes = false;
    for(var D = 0; D < S.length; D++){
        var B = S[D];
        if (B.isParent()) {
            i._private.hasCompoundNodes = true;
            break;
        }
    }
    var P = new cr(this.cy(), a);
    P.size() > 0 && (r ? P.emitAndNotify("remove") : e && P.emit("remove"));
    for(var A = 0; A < h.length; A++){
        var R = h[A];
        (!e || !R.removed()) && R.updateStyle();
    }
    return P;
};
We.move = function(r) {
    var e = this._private.cy, t = this, a = false, n = false, i = /*#__PURE__*/ m$1(function(h) {
        return h == null ? h : "" + h;
    }, "toString");
    if (r.source !== void 0 || r.target !== void 0) {
        var s = /*#__PURE__*/ i(r.source), o = /*#__PURE__*/ i(r.target), l = s != null && e.hasElementWithId(s), u = o != null && e.hasElementWithId(o);
        (l || u) && (e.batch(function() {
            t.remove(a, n), t.emitAndNotify("moveout");
            for(var g = 0; g < t.length; g++){
                var h = t[g], m = h._private.data;
                h.isEdge() && (l && (m.source = s), u && (m.target = o));
            }
            t.restore(a, n);
        }), t.emitAndNotify("move"));
    } else if (r.parent !== void 0) {
        var f = /*#__PURE__*/ i(r.parent), c = f === null || e.hasElementWithId(f);
        if (c) {
            var d = f === null ? void 0 : f;
            e.batch(function() {
                var g = /*#__PURE__*/ t.remove(a, n);
                g.emitAndNotify("moveout");
                for(var h = 0; h < t.length; h++){
                    var m = t[h], p = m._private.data;
                    m.isNode() && (p.parent = d);
                }
                g.restore(a, n);
            }), t.emitAndNotify("move");
        }
    }
    return this;
};
[
    Bv,
    Dg,
    fn,
    ot,
    ea,
    Hg,
    Gn,
    ip,
    jv,
    ef,
    vp,
    kn,
    cn,
    fr,
    ut,
    pr
].forEach(function(r) {
    we(We, r);
});
var yp = {
    add: /*#__PURE__*/ m$1(function(e) {
        var t, a = this;
        if (Br(e)) {
            var n = e;
            if (n._private.cy === a) t = /*#__PURE__*/ n.restore();
            else {
                for(var i = [], s = 0; s < n.length; s++){
                    var o = n[s];
                    i.push(/*#__PURE__*/ o.json());
                }
                t = new cr(a, i);
            }
        } else if (Ge(e)) {
            var l = e;
            t = new cr(a, l);
        } else if (Ie(e) && (Ge(e.nodes) || Ge(e.edges))) {
            for(var u = e, f = [], c = [
                "nodes",
                "edges"
            ], d = 0, g = c.length; d < g; d++){
                var h = c[d], m = u[h];
                if (Ge(m)) for(var p = 0, y = m.length; p < y; p++){
                    var b1 = /*#__PURE__*/ we({
                        group: h
                    }, m[p]);
                    f.push(b1);
                }
            }
            t = new cr(a, f);
        } else {
            var w = e;
            t = /*#__PURE__*/ new On(a, w).collection();
        }
        return t;
    }, "add"),
    remove: /*#__PURE__*/ m$1(function(e) {
        if (!Br(e)) {
            if (pe(e)) {
                var t = e;
                e = /*#__PURE__*/ this.$(t);
            }
        }
        return e.remove();
    }, "remove")
};
function mp(r, e, t, a) {
    var n = 4, i = .001, s = 1e-7, o = 10, l = 11, u = 1 / (l - 1), f = typeof Float32Array < "u";
    if (arguments.length !== 4) return false;
    for(var c = 0; c < 4; ++c)if (typeof arguments[c] != "number" || isNaN(arguments[c]) || !isFinite(arguments[c])) return false;
    r = /*#__PURE__*/ Math.min(r, 1), t = /*#__PURE__*/ Math.min(t, 1), r = /*#__PURE__*/ Math.max(r, 0), t = /*#__PURE__*/ Math.max(t, 0);
    var d = f ? new Float32Array(l) : new Array(l);
    function g(B, P) {
        return 1 - 3 * P + 3 * B;
    }
    m$1(g, "A");
    function h(B, P) {
        return 3 * P - 6 * B;
    }
    m$1(h, "B");
    function m(B) {
        return 3 * B;
    }
    m$1(m, "C");
    function p(B, P, A) {
        return ((g(P, A) * B + h(P, A)) * B + m(P)) * B;
    }
    m$1(p, "calcBezier");
    function y(B, P, A) {
        return 3 * g(P, A) * B * B + 2 * h(P, A) * B + m(P);
    }
    m$1(y, "getSlope");
    function b1(B, P) {
        for(var A = 0; A < n; ++A){
            var R = /*#__PURE__*/ y(P, r, t);
            if (R === 0) return P;
            var M = p(P, r, t) - B;
            P -= M / R;
        }
        return P;
    }
    m$1(b1, "newtonRaphsonIterate");
    function w() {
        for(var B = 0; B < l; ++B)d[B] = /*#__PURE__*/ p(B * u, r, t);
    }
    m$1(w, "calcSampleValues");
    function x(B, P, A) {
        var R, M, I = 0;
        do M = P + (A - P) / 2, R = p(M, r, t) - B, R > 0 ? A = M : P = M;
        while (Math.abs(R) > s && ++I < o);
        return M;
    }
    m$1(x, "binarySubdivide");
    function C(B) {
        for(var P = 0, A = 1, R = l - 1; A !== R && d[A] <= B; ++A)P += u;
        --A;
        var M = (B - d[A]) / (d[A + 1] - d[A]), I = P + M * u, O = /*#__PURE__*/ y(I, r, t);
        return O >= i ? b1(B, I) : O === 0 ? I : x(B, P, P + u);
    }
    m$1(C, "getTForX");
    var T = false;
    function E() {
        T = true, (r !== e || t !== a) && w();
    }
    m$1(E, "precompute");
    var S = /*#__PURE__*/ m$1(function(P) {
        return T || E(), r === e && t === a ? P : P === 0 ? 0 : P === 1 ? 1 : p(/*#__PURE__*/ C(P), e, a);
    }, "f");
    S.getControlPoints = function() {
        return [
            {
                x: r,
                y: e
            },
            {
                x: t,
                y: a
            }
        ];
    };
    var D = "generateBezier(" + [
        r,
        e,
        t,
        a
    ] + ")";
    return S.toString = function() {
        return D;
    }, S;
}
m$1(mp, "generateCubicBezier");
var bp = /*#__PURE__*/ function() {
    function r(a) {
        return -a.tension * a.x - a.friction * a.v;
    }
    m$1(r, "springAccelerationForState");
    function e(a, n, i) {
        var s = {
            x: a.x + i.dx * n,
            v: a.v + i.dv * n,
            tension: a.tension,
            friction: a.friction
        };
        return {
            dx: s.v,
            dv: /*#__PURE__*/ r(s)
        };
    }
    m$1(e, "springEvaluateStateWithDerivative");
    function t(a, n) {
        var i = {
            dx: a.v,
            dv: /*#__PURE__*/ r(a)
        }, s = /*#__PURE__*/ e(a, n * .5, i), o = /*#__PURE__*/ e(a, n * .5, s), l = /*#__PURE__*/ e(a, n, o), u = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + l.dx), f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + l.dv);
        return a.x = a.x + u * n, a.v = a.v + f * n, a;
    }
    return m$1(t, "springIntegrateState"), m$1(function a(n, i, s) {
        var o = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
        }, l = [
            0
        ], u = 0, f = 1 / 1e4, c = 16 / 1e3, d, g, h;
        for(n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, d = s !== null, d ? (u = /*#__PURE__*/ a(n, i), g = u / s * c) : g = c; h = /*#__PURE__*/ t(h || o, g), l.push(1 + h.x), u += 16, Math.abs(h.x) > f && Math.abs(h.v) > f;);
        return d ? function(m) {
            return l[m * (l.length - 1) | 0];
        } : u;
    }, "springRK4Factory");
}(), He = /*#__PURE__*/ m$1(function(e, t, a, n) {
    var i = /*#__PURE__*/ mp(e, t, a, n);
    return function(s, o, l) {
        return s + (o - s) * i(l);
    };
}, "cubicBezier"), dn = {
    linear: /*#__PURE__*/ m$1(function(e, t, a) {
        return e + (t - e) * a;
    }, "linear"),
    ease: /*#__PURE__*/ He(.25, .1, .25, 1),
    "ease-in": /*#__PURE__*/ He(.42, 0, 1, 1),
    "ease-out": /*#__PURE__*/ He(0, 0, .58, 1),
    "ease-in-out": /*#__PURE__*/ He(.42, 0, .58, 1),
    "ease-in-sine": /*#__PURE__*/ He(.47, 0, .745, .715),
    "ease-out-sine": /*#__PURE__*/ He(.39, .575, .565, 1),
    "ease-in-out-sine": /*#__PURE__*/ He(.445, .05, .55, .95),
    "ease-in-quad": /*#__PURE__*/ He(.55, .085, .68, .53),
    "ease-out-quad": /*#__PURE__*/ He(.25, .46, .45, .94),
    "ease-in-out-quad": /*#__PURE__*/ He(.455, .03, .515, .955),
    "ease-in-cubic": /*#__PURE__*/ He(.55, .055, .675, .19),
    "ease-out-cubic": /*#__PURE__*/ He(.215, .61, .355, 1),
    "ease-in-out-cubic": /*#__PURE__*/ He(.645, .045, .355, 1),
    "ease-in-quart": /*#__PURE__*/ He(.895, .03, .685, .22),
    "ease-out-quart": /*#__PURE__*/ He(.165, .84, .44, 1),
    "ease-in-out-quart": /*#__PURE__*/ He(.77, 0, .175, 1),
    "ease-in-quint": /*#__PURE__*/ He(.755, .05, .855, .06),
    "ease-out-quint": /*#__PURE__*/ He(.23, 1, .32, 1),
    "ease-in-out-quint": /*#__PURE__*/ He(.86, 0, .07, 1),
    "ease-in-expo": /*#__PURE__*/ He(.95, .05, .795, .035),
    "ease-out-expo": /*#__PURE__*/ He(.19, 1, .22, 1),
    "ease-in-out-expo": /*#__PURE__*/ He(1, 0, 0, 1),
    "ease-in-circ": /*#__PURE__*/ He(.6, .04, .98, .335),
    "ease-out-circ": /*#__PURE__*/ He(.075, .82, .165, 1),
    "ease-in-out-circ": /*#__PURE__*/ He(.785, .135, .15, .86),
    spring: /*#__PURE__*/ m$1(function(e, t, a) {
        if (a === 0) return dn.linear;
        var n = /*#__PURE__*/ bp(e, t, a);
        return function(i, s, o) {
            return i + (s - i) * n(o);
        };
    }, "spring"),
    "cubic-bezier": He
};
function El(r, e, t, a, n) {
    if (a === 1 || e === t) return t;
    var i = /*#__PURE__*/ n(e, t, a);
    return r == null || ((r.roundValue || r.color) && (i = /*#__PURE__*/ Math.round(i)), r.min !== void 0 && (i = /*#__PURE__*/ Math.max(i, r.min)), r.max !== void 0 && (i = /*#__PURE__*/ Math.min(i, r.max))), i;
}
m$1(El, "getEasedValue");
function Cl(r, e) {
    return r.pfValue != null || r.value != null ? r.pfValue != null && (e == null || e.type.units !== "%") ? r.pfValue : r.value : r;
}
m$1(Cl, "getValue");
function Vt(r, e, t, a, n) {
    var i = n != null ? n.type : null;
    t < 0 ? t = 0 : t > 1 && (t = 1);
    var s = /*#__PURE__*/ Cl(r, n), o = /*#__PURE__*/ Cl(e, n);
    if (ne(s) && ne(o)) return El(i, s, o, t, a);
    if (Ge(s) && Ge(o)) {
        for(var l = [], u = 0; u < o.length; u++){
            var f = s[u], c = o[u];
            if (f != null && c != null) {
                var d = /*#__PURE__*/ El(i, f, c, t, a);
                l.push(d);
            } else l.push(c);
        }
        return l;
    }
}
m$1(Vt, "ease");
function wp(r, e, t, a) {
    var n = !a, i = r._private, s = e._private, o = s.easing, l = s.startTime, u = a ? r : r.cy(), f = /*#__PURE__*/ u.style();
    if (!s.easingImpl) if (o == null) s.easingImpl = dn.linear;
    else {
        var c;
        if (pe(o)) {
            var d = /*#__PURE__*/ f.parse("transition-timing-function", o);
            c = d.value;
        } else c = o;
        var g, h;
        pe(c) ? (g = c, h = []) : (g = c[1], h = /*#__PURE__*/ c.slice(2).map(function(q) {
            return +q;
        })), h.length > 0 ? (g === "spring" && h.push(s.duration), s.easingImpl = /*#__PURE__*/ dn[g].apply(null, h)) : s.easingImpl = dn[g];
    }
    var m = s.easingImpl, p;
    if (s.duration === 0 ? p = 1 : p = (t - l) / s.duration, s.applying && (p = s.progress), p < 0 ? p = 0 : p > 1 && (p = 1), s.delay == null) {
        var y = s.startPosition, b1 = s.position;
        if (b1 && n && !r.locked()) {
            var w = {};
            ha(y.x, b1.x) && (w.x = /*#__PURE__*/ Vt(y.x, b1.x, p, m)), ha(y.y, b1.y) && (w.y = /*#__PURE__*/ Vt(y.y, b1.y, p, m)), r.position(w);
        }
        var x = s.startPan, C = s.pan, T = i.pan, E = C != null && a;
        E && (ha(x.x, C.x) && (T.x = /*#__PURE__*/ Vt(x.x, C.x, p, m)), ha(x.y, C.y) && (T.y = /*#__PURE__*/ Vt(x.y, C.y, p, m)), r.emit("pan"));
        var S = s.startZoom, D = s.zoom, B = D != null && a;
        B && (ha(S, D) && (i.zoom = /*#__PURE__*/ Da(i.minZoom, /*#__PURE__*/ Vt(S, D, p, m), i.maxZoom)), r.emit("zoom")), (E || B) && r.emit("viewport");
        var P = s.style;
        if (P && P.length > 0 && n) {
            for(var A = 0; A < P.length; A++){
                var R = P[A], M = R.name, I = R, O = s.startStyle[M], L = f.properties[O.name], N = /*#__PURE__*/ Vt(O, I, p, m, L);
                f.overrideBypass(r, M, N);
            }
            r.emit("style");
        }
    }
    return s.progress = p, p;
}
m$1(wp, "step$1");
function ha(r, e) {
    return r == null || e == null ? false : ne(r) && ne(e) ? true : !!(r && e);
}
m$1(ha, "valid");
function xp(r, e, t, a) {
    var n = e._private;
    n.started = true, n.startTime = t - n.progress * n.duration;
}
m$1(xp, "startAnimation");
function Tl(r, e) {
    var t = e._private.aniEles, a = [];
    function n(f, c) {
        var d = f._private, g = d.animation.current, h = d.animation.queue, m = false;
        if (g.length === 0) {
            var p = /*#__PURE__*/ h.shift();
            p && g.push(p);
        }
        for(var y = /*#__PURE__*/ m$1(function(T) {
            for(var E = T.length - 1; E >= 0; E--){
                var S = T[E];
                S();
            }
            T.splice(0, T.length);
        }, "callbacks"), b1 = g.length - 1; b1 >= 0; b1--){
            var w = g[b1], x = w._private;
            if (x.stopped) {
                g.splice(b1, 1), x.hooked = false, x.playing = false, x.started = false, y(x.frames);
                continue;
            }
            !x.playing && !x.applying || (x.playing && x.applying && (x.applying = false), x.started || xp(f, w, r), wp(f, w, r, c), x.applying && (x.applying = false), y(x.frames), x.step != null && x.step(r), w.completed() && (g.splice(b1, 1), x.hooked = false, x.playing = false, x.started = false, y(x.completes)), m = true);
        }
        return !c && g.length === 0 && h.length === 0 && a.push(f), m;
    }
    m$1(n, "stepOne");
    for(var i = false, s = 0; s < t.length; s++){
        var o = t[s], l = /*#__PURE__*/ n(o);
        i = i || l;
    }
    var u = /*#__PURE__*/ n(e, true);
    (i || u) && (t.length > 0 ? e.notify("draw", t) : e.notify("draw")), t.unmerge(a), e.emit("step");
}
m$1(Tl, "stepAll");
var Ep = {
    animate: /*#__PURE__*/ Ve.animate(),
    animation: /*#__PURE__*/ Ve.animation(),
    animated: /*#__PURE__*/ Ve.animated(),
    clearQueue: /*#__PURE__*/ Ve.clearQueue(),
    delay: /*#__PURE__*/ Ve.delay(),
    delayAnimation: /*#__PURE__*/ Ve.delayAnimation(),
    stop: /*#__PURE__*/ Ve.stop(),
    addToAnimationPool: /*#__PURE__*/ m$1(function(e) {
        var t = this;
        t.styleEnabled() && t._private.aniEles.merge(e);
    }, "addToAnimationPool"),
    stopAnimationLoop: /*#__PURE__*/ m$1(function() {
        this._private.animationsRunning = false;
    }, "stopAnimationLoop"),
    startAnimationLoop: /*#__PURE__*/ m$1(function() {
        var e = this;
        if (e._private.animationsRunning = true, !e.styleEnabled()) return;
        function t() {
            e._private.animationsRunning && xn(/*#__PURE__*/ m$1(function(i) {
                Tl(i, e), t();
            }, "animationStep"));
        }
        m$1(t, "headlessStep");
        var a = /*#__PURE__*/ e.renderer();
        a && a.beforeRender ? a.beforeRender(/*#__PURE__*/ m$1(function(i, s) {
            Tl(s, e);
        }, "rendererAnimationStep"), a.beforeRenderPriorities.animations) : t();
    }, "startAnimationLoop")
}, Cp = {
    qualifierCompare: /*#__PURE__*/ m$1(function(e, t) {
        return e == null || t == null ? e == null && t == null : e.sameText(t);
    }, "qualifierCompare"),
    eventMatches: /*#__PURE__*/ m$1(function(e, t, a) {
        var n = t.qualifier;
        return n != null ? e !== a.target && Oa(a.target) && n.matches(a.target) : true;
    }, "eventMatches"),
    addEventFields: /*#__PURE__*/ m$1(function(e, t) {
        t.cy = e, t.target = e;
    }, "addEventFields"),
    callbackContext: /*#__PURE__*/ m$1(function(e, t, a) {
        return t.qualifier != null ? a.target : e;
    }, "callbackContext")
}, an = /*#__PURE__*/ m$1(function(e) {
    return pe(e) ? new ct(e) : e;
}, "argSelector"), af = {
    createEmitter: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        return e.emitter || (e.emitter = new Hn(Cp, this)), this;
    }, "createEmitter"),
    emitter: /*#__PURE__*/ m$1(function() {
        return this._private.emitter;
    }, "emitter"),
    on: /*#__PURE__*/ m$1(function(e, t, a) {
        return this.emitter().on(e, /*#__PURE__*/ an(t), a), this;
    }, "on"),
    removeListener: /*#__PURE__*/ m$1(function(e, t, a) {
        return this.emitter().removeListener(e, /*#__PURE__*/ an(t), a), this;
    }, "removeListener"),
    removeAllListeners: /*#__PURE__*/ m$1(function() {
        return this.emitter().removeAllListeners(), this;
    }, "removeAllListeners"),
    one: /*#__PURE__*/ m$1(function(e, t, a) {
        return this.emitter().one(e, /*#__PURE__*/ an(t), a), this;
    }, "one"),
    once: /*#__PURE__*/ m$1(function(e, t, a) {
        return this.emitter().one(e, /*#__PURE__*/ an(t), a), this;
    }, "once"),
    emit: /*#__PURE__*/ m$1(function(e, t) {
        return this.emitter().emit(e, t), this;
    }, "emit"),
    emitAndNotify: /*#__PURE__*/ m$1(function(e, t) {
        return this.emit(e), this.notify(e, t), this;
    }, "emitAndNotify")
};
Ve.eventAliasesOn(af);
var Fs = {
    png: /*#__PURE__*/ m$1(function(e) {
        var t = this._private.renderer;
        return e = e || {}, t.png(e);
    }, "png"),
    jpg: /*#__PURE__*/ m$1(function(e) {
        var t = this._private.renderer;
        return e = e || {}, e.bg = e.bg || "#fff", t.jpg(e);
    }, "jpg")
};
Fs.jpeg = Fs.jpg;
var hn = {
    layout: /*#__PURE__*/ m$1(function(e) {
        var t = this;
        if (e == null) {
            Ue("Layout options must be specified to make a layout");
            return;
        }
        if (e.name == null) {
            Ue("A `name` must be specified to make a layout");
            return;
        }
        var a = e.name, n = /*#__PURE__*/ t.extension("layout", a);
        if (n == null) {
            Ue("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
            return;
        }
        var i;
        pe(e.eles) ? i = /*#__PURE__*/ t.$(e.eles) : i = e.eles != null ? e.eles : t.$();
        var s = new n(we({}, e, {
            cy: t,
            eles: i
        }));
        return s;
    }, "layout")
};
hn.createLayout = hn.makeLayout = hn.layout;
var Tp = {
    notify: /*#__PURE__*/ m$1(function(e, t) {
        var a = this._private;
        if (this.batching()) {
            a.batchNotifications = a.batchNotifications || {};
            var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
            t != null && n.merge(t);
            return;
        }
        if (a.notificationsEnabled) {
            var i = /*#__PURE__*/ this.renderer();
            this.destroyed() || !i || i.notify(e, t);
        }
    }, "notify"),
    notifications: /*#__PURE__*/ m$1(function(e) {
        var t = this._private;
        return e === void 0 ? t.notificationsEnabled : (t.notificationsEnabled = !!e, this);
    }, "notifications"),
    noNotifications: /*#__PURE__*/ m$1(function(e) {
        this.notifications(false), e(), this.notifications(true);
    }, "noNotifications"),
    batching: /*#__PURE__*/ m$1(function() {
        return this._private.batchCount > 0;
    }, "batching"),
    startBatch: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = /*#__PURE__*/ this.collection(), e.batchNotifications = {}), e.batchCount++, this;
    }, "startBatch"),
    endBatch: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        if (e.batchCount === 0) return this;
        if (e.batchCount--, e.batchCount === 0) {
            e.batchStyleEles.updateStyle();
            var t = /*#__PURE__*/ this.renderer();
            Object.keys(e.batchNotifications).forEach(function(a) {
                var n = e.batchNotifications[a];
                n.empty() ? t.notify(a) : t.notify(a, n);
            });
        }
        return this;
    }, "endBatch"),
    batch: /*#__PURE__*/ m$1(function(e) {
        return this.startBatch(), e(), this.endBatch(), this;
    }, "batch"),
    batchData: /*#__PURE__*/ m$1(function(e) {
        var t = this;
        return this.batch(function() {
            for(var a = /*#__PURE__*/ Object.keys(e), n = 0; n < a.length; n++){
                var i = a[n], s = e[i], o = /*#__PURE__*/ t.getElementById(i);
                o.data(s);
            }
        });
    }, "batchData")
}, Sp = /*#__PURE__*/ dr({
    hideEdgesOnViewport: false,
    textureOnViewport: false,
    motionBlur: false,
    motionBlurOpacity: .05,
    pixelRatio: void 0,
    desktopTapThreshold: 4,
    touchTapThreshold: 8,
    wheelSensitivity: 1,
    debug: false,
    showFps: false,
    webgl: false,
    webglDebug: false,
    webglDebugShowAtlases: false,
    webglTexSize: 2048,
    webglTexRows: 36,
    webglTexRowsNodes: 18,
    webglBatchSize: 2048,
    webglTexPerBatch: 14,
    webglBgColor: [
        255,
        255,
        255
    ]
}), Vs = {
    renderTo: /*#__PURE__*/ m$1(function(e, t, a, n) {
        var i = this._private.renderer;
        return i.renderTo(e, t, a, n), this;
    }, "renderTo"),
    renderer: /*#__PURE__*/ m$1(function() {
        return this._private.renderer;
    }, "renderer"),
    forceRender: /*#__PURE__*/ m$1(function() {
        return this.notify("draw"), this;
    }, "forceRender"),
    resize: /*#__PURE__*/ m$1(function() {
        return this.invalidateSize(), this.emitAndNotify("resize"), this;
    }, "resize"),
    initRenderer: /*#__PURE__*/ m$1(function(e) {
        var t = this, a = /*#__PURE__*/ t.extension("renderer", e.name);
        if (a == null) {
            Ue(/*#__PURE__*/ "Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
            return;
        }
        e.wheelSensitivity !== void 0 && qe("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
        var n = /*#__PURE__*/ Sp(e);
        n.cy = t, t._private.renderer = new a(n), this.notify("init");
    }, "initRenderer"),
    destroyRenderer: /*#__PURE__*/ m$1(function() {
        var e = this;
        e.notify("destroy");
        var t = /*#__PURE__*/ e.container();
        if (t) for(t._cyreg = null; t.childNodes.length > 0;)t.removeChild(t.childNodes[0]);
        e._private.renderer = null, e.mutableElements().forEach(function(a) {
            var n = a._private;
            n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
        });
    }, "destroyRenderer"),
    onRender: /*#__PURE__*/ m$1(function(e) {
        return this.on("render", e);
    }, "onRender"),
    offRender: /*#__PURE__*/ m$1(function(e) {
        return this.off("render", e);
    }, "offRender")
};
Vs.invalidateDimensions = Vs.resize;
var gn = {
    collection: /*#__PURE__*/ m$1(function(e, t) {
        return pe(e) ? this.$(e) : Br(e) ? e.collection() : Ge(e) ? (t || (t = {}), new cr(this, e, t.unique, t.removed)) : new cr(this);
    }, "collection"),
    nodes: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ this.$(function(a) {
            return a.isNode();
        });
        return e ? t.filter(e) : t;
    }, "nodes"),
    edges: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ this.$(function(a) {
            return a.isEdge();
        });
        return e ? t.filter(e) : t;
    }, "edges"),
    $: /*#__PURE__*/ m$1(function(e) {
        var t = this._private.elements;
        return e ? t.filter(e) : t.spawnSelf();
    }, "$"),
    mutableElements: /*#__PURE__*/ m$1(function() {
        return this._private.elements;
    }, "mutableElements")
};
gn.elements = gn.filter = gn.$;
var lr = {}, xa = "t", kp = "f";
lr.apply = function(r) {
    for(var e = this, t = e._private, a = t.cy, n = /*#__PURE__*/ a.collection(), i = 0; i < r.length; i++){
        var s = r[i], o = /*#__PURE__*/ e.getContextMeta(s);
        if (!o.empty) {
            var l = /*#__PURE__*/ e.getContextStyle(o), u = /*#__PURE__*/ e.applyContextStyle(o, l, s);
            s._private.appliedInitStyle ? e.updateTransitions(s, u.diffProps) : s._private.appliedInitStyle = true;
            var f = /*#__PURE__*/ e.updateStyleHints(s);
            f && n.push(s);
        }
    }
    return n;
};
lr.getPropertiesDiff = function(r, e) {
    var t = this, a = t._private.propDiffs = t._private.propDiffs || {}, n = r + "-" + e, i = a[n];
    if (i) return i;
    for(var s = [], o = {}, l = 0; l < t.length; l++){
        var u = t[l], f = r[l] === xa, c = e[l] === xa, d = f !== c, g = u.mappedProperties.length > 0;
        if (d || c && g) {
            var h = void 0;
            d && g || d ? h = u.properties : g && (h = u.mappedProperties);
            for(var m = 0; m < h.length; m++){
                for(var p = h[m], y = p.name, b1 = false, w = l + 1; w < t.length; w++){
                    var x = t[w], C = e[w] === xa;
                    if (C && (b1 = x.properties[p.name] != null, b1)) break;
                }
                !o[y] && !b1 && (o[y] = true, s.push(y));
            }
        }
    }
    return a[n] = s, s;
};
lr.getContextMeta = function(r) {
    for(var e = this, t = "", a, n = r._private.styleCxtKey || "", i = 0; i < e.length; i++){
        var s = e[i], o = s.selector && s.selector.matches(r);
        o ? t += xa : t += kp;
    }
    return a = /*#__PURE__*/ e.getPropertiesDiff(n, t), r._private.styleCxtKey = t, {
        key: t,
        diffPropNames: a,
        empty: a.length === 0
    };
};
lr.getContextStyle = function(r) {
    var e = r.key, t = this, a = this._private.contextStyles = this._private.contextStyles || {};
    if (a[e]) return a[e];
    for(var n = {
        _private: {
            key: e
        }
    }, i = 0; i < t.length; i++){
        var s = t[i], o = e[i] === xa;
        if (o) for(var l = 0; l < s.properties.length; l++){
            var u = s.properties[l];
            n[u.name] = u;
        }
    }
    return a[e] = n, n;
};
lr.applyContextStyle = function(r, e, t) {
    for(var a = this, n = r.diffPropNames, i = {}, s = a.types, o = 0; o < n.length; o++){
        var l = n[o], u = e[l], f = /*#__PURE__*/ t.pstyle(l);
        if (!u) if (f) f.bypass ? u = {
            name: l,
            deleteBypassed: true
        } : u = {
            name: l,
            delete: true
        };
        else continue;
        if (f !== u) {
            if (u.mapped === s.fn && f != null && f.mapping != null && f.mapping.value === u.value) {
                var c = f.mapping, d = c.fnValue = /*#__PURE__*/ u.value(t);
                if (d === c.prevFnValue) continue;
            }
            var g = i[l] = {
                prev: f
            };
            a.applyParsedProperty(t, u), g.next = /*#__PURE__*/ t.pstyle(l), g.next && g.next.bypass && (g.next = g.next.bypassed);
        }
    }
    return {
        diffProps: i
    };
};
lr.updateStyleHints = function(r) {
    var e = r._private, t = this, a = t.propertyGroupNames, n = t.propertyGroupKeys, i = /*#__PURE__*/ m$1(function(W, Z, ae) {
        return t.getPropertiesHash(W, Z, ae);
    }, "propHash"), s = e.styleKey;
    if (r.removed()) return false;
    var o = e.group === "nodes", l = r._private.style;
    a = /*#__PURE__*/ Object.keys(l);
    for(var u = 0; u < n.length; u++){
        var f = n[u];
        e.styleKeys[f] = [
            kt,
            Wt
        ];
    }
    for(var c = /*#__PURE__*/ m$1(function(W, Z) {
        return e.styleKeys[Z][0] = /*#__PURE__*/ Ta(W, e.styleKeys[Z][0]);
    }, "updateGrKey1"), d = /*#__PURE__*/ m$1(function(W, Z) {
        return e.styleKeys[Z][1] = /*#__PURE__*/ Sa(W, e.styleKeys[Z][1]);
    }, "updateGrKey2"), g = /*#__PURE__*/ m$1(function(W, Z) {
        c(W, Z), d(W, Z);
    }, "updateGrKey"), h = /*#__PURE__*/ m$1(function(W, Z) {
        for(var ae = 0; ae < W.length; ae++){
            var de = /*#__PURE__*/ W.charCodeAt(ae);
            c(de, Z), d(de, Z);
        }
    }, "updateGrKeyWStr"), m = 2e9, p = /*#__PURE__*/ m$1(function(W) {
        return -128 < W && W < 128 && Math.floor(W) !== W ? m - (W * 1024 | 0) : W;
    }, "cleanNum"), y = 0; y < a.length; y++){
        var b1 = a[y], w = l[b1];
        if (w != null) {
            var x = this.properties[b1], C = x.type, T = x.groupKey, E = void 0;
            x.hashOverride != null ? E = /*#__PURE__*/ x.hashOverride(r, w) : w.pfValue != null && (E = w.pfValue);
            var S = x.enums == null ? w.value : null, D = E != null, B = S != null, P = D || B, A = w.units;
            if (C.number && P && !C.multiple) {
                var R = D ? E : S;
                g(/*#__PURE__*/ p(R), T), !D && A != null && h(A, T);
            } else h(w.strValue, T);
        }
    }
    for(var M = [
        kt,
        Wt
    ], I = 0; I < n.length; I++){
        var O = n[I], L = e.styleKeys[O];
        M[0] = /*#__PURE__*/ Ta(L[0], M[0]), M[1] = /*#__PURE__*/ Sa(L[1], M[1]);
    }
    e.styleKey = /*#__PURE__*/ Gc(M[0], M[1]);
    var N = e.styleKeys;
    e.labelDimsKey = /*#__PURE__*/ rt(N.labelDimensions);
    var q = /*#__PURE__*/ i(r, [
        "label"
    ], N.labelDimensions);
    if (e.labelKey = /*#__PURE__*/ rt(q), e.labelStyleKey = /*#__PURE__*/ rt(/*#__PURE__*/ Ya(N.commonLabel, q)), !o) {
        var H = /*#__PURE__*/ i(r, [
            "source-label"
        ], N.labelDimensions);
        e.sourceLabelKey = /*#__PURE__*/ rt(H), e.sourceLabelStyleKey = /*#__PURE__*/ rt(/*#__PURE__*/ Ya(N.commonLabel, H));
        var z = /*#__PURE__*/ i(r, [
            "target-label"
        ], N.labelDimensions);
        e.targetLabelKey = /*#__PURE__*/ rt(z), e.targetLabelStyleKey = /*#__PURE__*/ rt(/*#__PURE__*/ Ya(N.commonLabel, z));
    }
    if (o) {
        var V = e.styleKeys, K = V.nodeBody, J = V.nodeBorder, X = V.nodeOutline, ee = V.backgroundImage, te = V.compound, ie = V.pie, j = V.stripe, F = /*#__PURE__*/ [
            K,
            J,
            X,
            ee,
            te,
            ie,
            j
        ].filter(function(_) {
            return _ != null;
        }).reduce(Ya, [
            kt,
            Wt
        ]);
        e.nodeKey = /*#__PURE__*/ rt(F), e.hasPie = ie != null && ie[0] !== kt && ie[1] !== Wt, e.hasStripe = j != null && j[0] !== kt && j[1] !== Wt;
    }
    return s !== e.styleKey;
};
lr.clearStyleHints = function(r) {
    var e = r._private;
    e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null, e.hasStripe = null;
};
lr.applyParsedProperty = function(r, e) {
    var t = this, a = e, n = r._private.style, i, s = t.types, o = t.properties[a.name].type, l = a.bypass, u = n[a.name], f = u && u.bypass, c = r._private, d = "mapping", g = /*#__PURE__*/ m$1(function(K) {
        return K == null ? null : K.pfValue != null ? K.pfValue : K.value;
    }, "getVal"), h = /*#__PURE__*/ m$1(function() {
        var K = /*#__PURE__*/ g(u), J = /*#__PURE__*/ g(a);
        t.checkTriggers(r, a.name, K, J);
    }, "checkTriggers");
    if (e.name === "curve-style" && r.isEdge() && (e.value !== "bezier" && r.isLoop() || e.value === "haystack" && (r.source().isParent() || r.target().isParent())) && (a = e = /*#__PURE__*/ this.parse(e.name, "bezier", l)), a.delete) return n[a.name] = void 0, h(), true;
    if (a.deleteBypassed) return u ? u.bypass ? (u.bypassed = void 0, h(), true) : false : (h(), true);
    if (a.deleteBypass) return u ? u.bypass ? (n[a.name] = u.bypassed, h(), true) : false : (h(), true);
    var m = /*#__PURE__*/ m$1(function() {
        qe("Do not assign mappings to elements without corresponding data (i.e. ele `" + r.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
    }, "printMappingErr");
    switch(a.mapped){
        case s.mapData:
            {
                for(var p = /*#__PURE__*/ a.field.split("."), y = c.data, b1 = 0; b1 < p.length && y; b1++){
                    var w = p[b1];
                    y = y[w];
                }
                if (y == null) return m(), false;
                var x;
                if (ne(y)) {
                    var C = a.fieldMax - a.fieldMin;
                    C === 0 ? x = 0 : x = (y - a.fieldMin) / C;
                } else return qe("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + y + "` for `" + r.id() + "` is non-numeric)"), false;
                if (x < 0 ? x = 0 : x > 1 && (x = 1), o.color) {
                    var T = a.valueMin[0], E = a.valueMax[0], S = a.valueMin[1], D = a.valueMax[1], B = a.valueMin[2], P = a.valueMax[2], A = a.valueMin[3] == null ? 1 : a.valueMin[3], R = a.valueMax[3] == null ? 1 : a.valueMax[3], M = [
                        /*#__PURE__*/ Math.round(T + (E - T) * x),
                        /*#__PURE__*/ Math.round(S + (D - S) * x),
                        /*#__PURE__*/ Math.round(B + (P - B) * x),
                        /*#__PURE__*/ Math.round(A + (R - A) * x)
                    ];
                    i = {
                        bypass: a.bypass,
                        name: a.name,
                        value: M,
                        strValue: "rgb(" + M[0] + ", " + M[1] + ", " + M[2] + ")"
                    };
                } else if (o.number) {
                    var I = a.valueMin + (a.valueMax - a.valueMin) * x;
                    i = /*#__PURE__*/ this.parse(a.name, I, a.bypass, d);
                } else return false;
                if (!i) return m(), false;
                i.mapping = a, a = i;
                break;
            }
        case s.data:
            {
                for(var O = /*#__PURE__*/ a.field.split("."), L = c.data, N = 0; N < O.length && L; N++){
                    var q = O[N];
                    L = L[q];
                }
                if (L != null && (i = /*#__PURE__*/ this.parse(a.name, L, a.bypass, d)), !i) return m(), false;
                i.mapping = a, a = i;
                break;
            }
        case s.fn:
            {
                var H = a.value, z = a.fnValue != null ? a.fnValue : H(r);
                if (a.prevFnValue = z, z == null) return qe("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + r.id() + "` is null)"), false;
                if (i = /*#__PURE__*/ this.parse(a.name, z, a.bypass, d), !i) return qe("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + r.id() + "` is invalid)"), false;
                i.mapping = /*#__PURE__*/ _r(a), a = i;
                break;
            }
        case void 0:
            break;
        default:
            return false;
    }
    return l ? (f ? a.bypassed = u.bypassed : a.bypassed = u, n[a.name] = a) : f ? u.bypassed = a : n[a.name] = a, h(), true;
};
lr.cleanElements = function(r, e) {
    for(var t = 0; t < r.length; t++){
        var a = r[t];
        if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e) a._private.style = {};
        else for(var n = a._private.style, i = /*#__PURE__*/ Object.keys(n), s = 0; s < i.length; s++){
            var o = i[s], l = n[o];
            l != null && (l.bypass ? l.bypassed = null : n[o] = null);
        }
    }
};
lr.update = function() {
    var r = this._private.cy, e = /*#__PURE__*/ r.mutableElements();
    e.updateStyle();
};
lr.updateTransitions = function(r, e) {
    var t = this, a = r._private, n = r.pstyle("transition-property").value, i = r.pstyle("transition-duration").pfValue, s = r.pstyle("transition-delay").pfValue;
    if (n.length > 0 && i > 0) {
        for(var o = {}, l = false, u = 0; u < n.length; u++){
            var f = n[u], c = /*#__PURE__*/ r.pstyle(f), d = e[f];
            if (d) {
                var g = d.prev, h = g, m = d.next != null ? d.next : c, p = false, y = void 0, b1 = 1e-6;
                h && (ne(h.pfValue) && ne(m.pfValue) ? (p = m.pfValue - h.pfValue, y = h.pfValue + b1 * p) : ne(h.value) && ne(m.value) ? (p = m.value - h.value, y = h.value + b1 * p) : Ge(h.value) && Ge(m.value) && (p = h.value[0] !== m.value[0] || h.value[1] !== m.value[1] || h.value[2] !== m.value[2], y = h.strValue), p && (o[f] = m.strValue, this.applyBypass(r, f, y), l = true));
            }
        }
        if (!l) return;
        a.transitioning = true, new aa(function(w) {
            s > 0 ? r.delayAnimation(s).play().promise().then(w) : w();
        }).then(function() {
            return r.animation({
                style: o,
                duration: i,
                easing: r.pstyle("transition-timing-function").value,
                queue: false
            }).play().promise();
        }).then(function() {
            t.removeBypasses(r, n), r.emitAndNotify("style"), a.transitioning = false;
        });
    } else a.transitioning && (this.removeBypasses(r, n), r.emitAndNotify("style"), a.transitioning = false);
};
lr.checkTrigger = function(r, e, t, a, n, i) {
    var s = this.properties[e], o = /*#__PURE__*/ n(s);
    r.removed() || o != null && o(t, a, r) && i(s);
};
lr.checkZOrderTrigger = function(r, e, t, a) {
    var n = this;
    this.checkTrigger(r, e, t, a, function(i) {
        return i.triggersZOrder;
    }, function() {
        n._private.cy.notify("zorder", r);
    });
};
lr.checkBoundsTrigger = function(r, e, t, a) {
    this.checkTrigger(r, e, t, a, function(n) {
        return n.triggersBounds;
    }, function(n) {
        r.dirtyCompoundBoundsCache(), r.dirtyBoundingBoxCache();
    });
};
lr.checkConnectedEdgesBoundsTrigger = function(r, e, t, a) {
    this.checkTrigger(r, e, t, a, function(n) {
        return n.triggersBoundsOfConnectedEdges;
    }, function(n) {
        r.connectedEdges().forEach(function(i) {
            i.dirtyBoundingBoxCache();
        });
    });
};
lr.checkParallelEdgesBoundsTrigger = function(r, e, t, a) {
    this.checkTrigger(r, e, t, a, function(n) {
        return n.triggersBoundsOfParallelEdges;
    }, function(n) {
        r.parallelEdges().forEach(function(i) {
            i.dirtyBoundingBoxCache();
        });
    });
};
lr.checkTriggers = function(r, e, t, a) {
    r.dirtyStyleCache(), this.checkZOrderTrigger(r, e, t, a), this.checkBoundsTrigger(r, e, t, a), this.checkConnectedEdgesBoundsTrigger(r, e, t, a), this.checkParallelEdgesBoundsTrigger(r, e, t, a);
};
var Ga = {};
Ga.applyBypass = function(r, e, t, a) {
    var n = this, i = [], s = true;
    if (e === "*" || e === "**") {
        if (t !== void 0) for(var o = 0; o < n.properties.length; o++){
            var l = n.properties[o], u = l.name, f = /*#__PURE__*/ this.parse(u, t, true);
            f && i.push(f);
        }
    } else if (pe(e)) {
        var c = /*#__PURE__*/ this.parse(e, t, true);
        c && i.push(c);
    } else if (Ie(e)) {
        var d = e;
        a = t;
        for(var g = /*#__PURE__*/ Object.keys(d), h = 0; h < g.length; h++){
            var m = g[h], p = d[m];
            if (p === void 0 && (p = d[Ln(m)]), p !== void 0) {
                var y = /*#__PURE__*/ this.parse(m, p, true);
                y && i.push(y);
            }
        }
    } else return false;
    if (i.length === 0) return false;
    for(var b1 = false, w = 0; w < r.length; w++){
        for(var x = r[w], C = {}, T = void 0, E = 0; E < i.length; E++){
            var S = i[E];
            if (a) {
                var D = /*#__PURE__*/ x.pstyle(S.name);
                T = C[S.name] = {
                    prev: D
                };
            }
            b1 = this.applyParsedProperty(x, /*#__PURE__*/ _r(S)) || b1, a && (T.next = /*#__PURE__*/ x.pstyle(S.name));
        }
        b1 && this.updateStyleHints(x), a && this.updateTransitions(x, C, s);
    }
    return b1;
};
Ga.overrideBypass = function(r, e, t) {
    e = /*#__PURE__*/ Qs(e);
    for(var a = 0; a < r.length; a++){
        var n = r[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, l = s.mutiple, u = i ? i.pfValue != null ? i.pfValue : i.value : null;
        !i || !i.bypass ? this.applyBypass(n, e, t) : (i.value = t, i.pfValue != null && (i.pfValue = t), o ? i.strValue = "rgb(" + t.join(",") + ")" : l ? i.strValue = /*#__PURE__*/ t.join(" ") : i.strValue = "" + t, this.updateStyleHints(n)), this.checkTriggers(n, e, u, t);
    }
};
Ga.removeAllBypasses = function(r, e) {
    return this.removeBypasses(r, this.propertyNames, e);
};
Ga.removeBypasses = function(r, e, t) {
    for(var a = true, n = 0; n < r.length; n++){
        for(var i = r[n], s = {}, o = 0; o < e.length; o++){
            var l = e[o], u = this.properties[l], f = /*#__PURE__*/ i.pstyle(u.name);
            if (!(!f || !f.bypass)) {
                var c = "", d = /*#__PURE__*/ this.parse(l, c, true), g = s[u.name] = {
                    prev: f
                };
                this.applyParsedProperty(i, d), g.next = /*#__PURE__*/ i.pstyle(u.name);
            }
        }
        this.updateStyleHints(i), t && this.updateTransitions(i, s, a);
    }
};
var co = {};
co.getEmSizeInPixels = function() {
    var r = /*#__PURE__*/ this.containerCss("font-size");
    return r != null ? parseFloat(r) : 1;
};
co.containerCss = function(r) {
    var e = this._private.cy, t = /*#__PURE__*/ e.container(), a = /*#__PURE__*/ e.window();
    if (a && t && a.getComputedStyle) return a.getComputedStyle(t).getPropertyValue(r);
};
var Gr = {};
Gr.getRenderedStyle = function(r, e) {
    return e ? this.getStylePropertyValue(r, e, true) : this.getRawStyle(r, true);
};
Gr.getRawStyle = function(r, e) {
    var t = this;
    if (r = r[0], r) {
        for(var a = {}, n = 0; n < t.properties.length; n++){
            var i = t.properties[n], s = /*#__PURE__*/ t.getStylePropertyValue(r, i.name, e);
            s != null && (a[i.name] = s, a[Ln(i.name)] = s);
        }
        return a;
    }
};
Gr.getIndexedStyle = function(r, e, t, a) {
    var n = r.pstyle(e)[t][a];
    return n ?? r.cy().style().getDefaultProperty(e)[t][0];
};
Gr.getStylePropertyValue = function(r, e, t) {
    var a = this;
    if (r = r[0], r) {
        var n = a.properties[e];
        n.alias && (n = n.pointsTo);
        var i = n.type, s = /*#__PURE__*/ r.pstyle(n.name);
        if (s) {
            var o = s.value, l = s.units, u = s.strValue;
            if (t && i.number && o != null && ne(o)) {
                var f = /*#__PURE__*/ r.cy().zoom(), c = /*#__PURE__*/ m$1(function(p) {
                    return p * f;
                }, "getRenderedValue"), d = /*#__PURE__*/ m$1(function(p, y) {
                    return c(p) + y;
                }, "getValueStringWithUnits"), g = /*#__PURE__*/ Ge(o), h = g ? l.every(function(m) {
                    return m != null;
                }) : l != null;
                return h ? g ? o.map(function(m, p) {
                    return d(m, l[p]);
                }).join(" ") : d(o, l) : g ? o.map(function(m) {
                    return pe(m) ? m : "" + c(m);
                }).join(" ") : "" + c(o);
            } else if (u != null) return u;
        }
        return null;
    }
};
Gr.getAnimationStartStyle = function(r, e) {
    for(var t = {}, a = 0; a < e.length; a++){
        var n = e[a], i = n.name, s = /*#__PURE__*/ r.pstyle(i);
        s !== void 0 && (Ie(s) ? s = /*#__PURE__*/ this.parse(i, s.strValue) : s = /*#__PURE__*/ this.parse(i, s)), s && (t[i] = s);
    }
    return t;
};
Gr.getPropsList = function(r) {
    var e = this, t = [], a = r, n = e.properties;
    if (a) for(var i = /*#__PURE__*/ Object.keys(a), s = 0; s < i.length; s++){
        var o = i[s], l = a[o], u = n[o] || n[Qs(o)], f = /*#__PURE__*/ this.parse(u.name, l);
        f && t.push(f);
    }
    return t;
};
Gr.getNonDefaultPropertiesHash = function(r, e, t) {
    var a = /*#__PURE__*/ t.slice(), n, i, s, o, l, u;
    for(l = 0; l < e.length; l++)if (n = e[l], i = /*#__PURE__*/ r.pstyle(n, false), i != null) if (i.pfValue != null) a[0] = /*#__PURE__*/ Ta(o, a[0]), a[1] = /*#__PURE__*/ Sa(o, a[1]);
    else for(s = i.strValue, u = 0; u < s.length; u++)o = /*#__PURE__*/ s.charCodeAt(u), a[0] = /*#__PURE__*/ Ta(o, a[0]), a[1] = /*#__PURE__*/ Sa(o, a[1]);
    return a;
};
Gr.getPropertiesHash = Gr.getNonDefaultPropertiesHash;
var Un = {};
Un.appendFromJson = function(r) {
    for(var e = this, t = 0; t < r.length; t++){
        var a = r[t], n = a.selector, i = a.style || a.css, s = /*#__PURE__*/ Object.keys(i);
        e.selector(n);
        for(var o = 0; o < s.length; o++){
            var l = s[o], u = i[l];
            e.css(l, u);
        }
    }
    return e;
};
Un.fromJson = function(r) {
    var e = this;
    return e.resetToDefault(), e.appendFromJson(r), e;
};
Un.json = function() {
    for(var r = [], e = this.defaultLength; e < this.length; e++){
        for(var t = this[e], a = t.selector, n = t.properties, i = {}, s = 0; s < n.length; s++){
            var o = n[s];
            i[o.name] = o.strValue;
        }
        r.push({
            selector: a ? a.toString() : "core",
            style: i
        });
    }
    return r;
};
var ho = {};
ho.appendFromString = function(r) {
    var e = this, t = this, a = "" + r, n, i, s;
    a = /*#__PURE__*/ a.replace(/[/][*](\s|.)+?[*][/]/g, "");
    function o() {
        a.length > n.length ? a = /*#__PURE__*/ a.substr(n.length) : a = "";
    }
    m$1(o, "removeSelAndBlockFromRemaining");
    function l() {
        i.length > s.length ? i = /*#__PURE__*/ i.substr(s.length) : i = "";
    }
    for(m$1(l, "removePropAndValFromRem");;){
        var u = /*#__PURE__*/ a.match(/^\s*$/);
        if (u) break;
        var f = /*#__PURE__*/ a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
        if (!f) {
            qe("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
            break;
        }
        n = f[0];
        var c = f[1];
        if (c !== "core") {
            var d = new ct(c);
            if (d.invalid) {
                qe("Skipping parsing of block: Invalid selector found in string stylesheet: " + c), o();
                continue;
            }
        }
        var g = f[2], h = false;
        i = g;
        for(var m = [];;){
            var p = /*#__PURE__*/ i.match(/^\s*$/);
            if (p) break;
            var y = /*#__PURE__*/ i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
            if (!y) {
                qe("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + g), h = true;
                break;
            }
            s = y[0];
            var b1 = y[1], w = y[2], x = e.properties[b1];
            if (!x) {
                qe("Skipping property: Invalid property name in: " + s), l();
                continue;
            }
            var C = /*#__PURE__*/ t.parse(b1, w);
            if (!C) {
                qe("Skipping property: Invalid property definition in: " + s), l();
                continue;
            }
            m.push({
                name: b1,
                val: w
            }), l();
        }
        if (h) {
            o();
            break;
        }
        t.selector(c);
        for(var T = 0; T < m.length; T++){
            var E = m[T];
            t.css(E.name, E.val);
        }
        o();
    }
    return t;
};
ho.fromString = function(r) {
    var e = this;
    return e.resetToDefault(), e.appendFromString(r), e;
};
var Je = {};
(function() {
    var r = ar, e = wc, t = Ec, a = Cc, n = Tc, i = /*#__PURE__*/ m$1(function(_) {
        return "^" + _ + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
    }, "data"), s = /*#__PURE__*/ m$1(function(_) {
        var W = r + "|\\w+|" + e + "|" + t + "|" + a + "|" + n;
        return "^" + _ + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + r + ")\\s*\\,\\s*(" + r + ")\\s*,\\s*(" + W + ")\\s*\\,\\s*(" + W + ")\\)$";
    }, "mapData"), o = [
        `^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`,
        "^(none)$",
        "^(.+)$"
    ];
    Je.types = {
        time: {
            number: true,
            min: 0,
            units: "s|ms",
            implicitUnits: "ms"
        },
        percent: {
            number: true,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%"
        },
        percentages: {
            number: true,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%",
            multiple: true
        },
        zeroOneNumber: {
            number: true,
            min: 0,
            max: 1,
            unitless: true
        },
        zeroOneNumbers: {
            number: true,
            min: 0,
            max: 1,
            unitless: true,
            multiple: true
        },
        nOneOneNumber: {
            number: true,
            min: -1,
            max: 1,
            unitless: true
        },
        nonNegativeInt: {
            number: true,
            min: 0,
            integer: true,
            unitless: true
        },
        nonNegativeNumber: {
            number: true,
            min: 0,
            unitless: true
        },
        position: {
            enums: [
                "parent",
                "origin"
            ]
        },
        nodeSize: {
            number: true,
            min: 0,
            enums: [
                "label"
            ]
        },
        number: {
            number: true,
            unitless: true
        },
        numbers: {
            number: true,
            unitless: true,
            multiple: true
        },
        positiveNumber: {
            number: true,
            unitless: true,
            min: 0,
            strictMin: true
        },
        size: {
            number: true,
            min: 0
        },
        bidirectionalSize: {
            number: true
        },
        bidirectionalSizeMaybePercent: {
            number: true,
            allowPercent: true
        },
        bidirectionalSizes: {
            number: true,
            multiple: true
        },
        sizeMaybePercent: {
            number: true,
            min: 0,
            allowPercent: true
        },
        axisDirection: {
            enums: [
                "horizontal",
                "leftward",
                "rightward",
                "vertical",
                "upward",
                "downward",
                "auto"
            ]
        },
        axisDirectionExplicit: {
            enums: [
                "leftward",
                "rightward",
                "upward",
                "downward"
            ]
        },
        axisDirectionPrimary: {
            enums: [
                "horizontal",
                "vertical"
            ]
        },
        paddingRelativeTo: {
            enums: [
                "width",
                "height",
                "average",
                "min",
                "max"
            ]
        },
        bgWH: {
            number: true,
            min: 0,
            allowPercent: true,
            enums: [
                "auto"
            ],
            multiple: true
        },
        bgPos: {
            number: true,
            allowPercent: true,
            multiple: true
        },
        bgRelativeTo: {
            enums: [
                "inner",
                "include-padding"
            ],
            multiple: true
        },
        bgRepeat: {
            enums: [
                "repeat",
                "repeat-x",
                "repeat-y",
                "no-repeat"
            ],
            multiple: true
        },
        bgFit: {
            enums: [
                "none",
                "contain",
                "cover"
            ],
            multiple: true
        },
        bgCrossOrigin: {
            enums: [
                "anonymous",
                "use-credentials",
                "null"
            ],
            multiple: true
        },
        bgClip: {
            enums: [
                "none",
                "node"
            ],
            multiple: true
        },
        bgContainment: {
            enums: [
                "inside",
                "over"
            ],
            multiple: true
        },
        boxSelection: {
            enums: [
                "contain",
                "overlap",
                "none"
            ]
        },
        color: {
            color: true
        },
        colors: {
            color: true,
            multiple: true
        },
        fill: {
            enums: [
                "solid",
                "linear-gradient",
                "radial-gradient"
            ]
        },
        bool: {
            enums: [
                "yes",
                "no"
            ]
        },
        bools: {
            enums: [
                "yes",
                "no"
            ],
            multiple: true
        },
        lineStyle: {
            enums: [
                "solid",
                "dotted",
                "dashed"
            ]
        },
        lineCap: {
            enums: [
                "butt",
                "round",
                "square"
            ]
        },
        linePosition: {
            enums: [
                "center",
                "inside",
                "outside"
            ]
        },
        lineJoin: {
            enums: [
                "round",
                "bevel",
                "miter"
            ]
        },
        borderStyle: {
            enums: [
                "solid",
                "dotted",
                "dashed",
                "double"
            ]
        },
        curveStyle: {
            enums: [
                "bezier",
                "unbundled-bezier",
                "haystack",
                "segments",
                "straight",
                "straight-triangle",
                "taxi",
                "round-segments",
                "round-taxi"
            ]
        },
        radiusType: {
            enums: [
                "arc-radius",
                "influence-radius"
            ],
            multiple: true
        },
        fontFamily: {
            regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
        },
        fontStyle: {
            enums: [
                "italic",
                "normal",
                "oblique"
            ]
        },
        fontWeight: {
            enums: [
                "normal",
                "bold",
                "bolder",
                "lighter",
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "800",
                "900",
                100,
                200,
                300,
                400,
                500,
                600,
                700,
                800,
                900
            ]
        },
        textDecoration: {
            enums: [
                "none",
                "underline",
                "overline",
                "line-through"
            ]
        },
        textTransform: {
            enums: [
                "none",
                "uppercase",
                "lowercase"
            ]
        },
        textWrap: {
            enums: [
                "none",
                "wrap",
                "ellipsis"
            ]
        },
        textOverflowWrap: {
            enums: [
                "whitespace",
                "anywhere"
            ]
        },
        textBackgroundShape: {
            enums: [
                "rectangle",
                "roundrectangle",
                "round-rectangle",
                "circle"
            ]
        },
        nodeShape: {
            enums: [
                "rectangle",
                "roundrectangle",
                "round-rectangle",
                "cutrectangle",
                "cut-rectangle",
                "bottomroundrectangle",
                "bottom-round-rectangle",
                "barrel",
                "ellipse",
                "triangle",
                "round-triangle",
                "square",
                "pentagon",
                "round-pentagon",
                "hexagon",
                "round-hexagon",
                "concavehexagon",
                "concave-hexagon",
                "heptagon",
                "round-heptagon",
                "octagon",
                "round-octagon",
                "tag",
                "round-tag",
                "star",
                "diamond",
                "round-diamond",
                "vee",
                "rhomboid",
                "right-rhomboid",
                "polygon"
            ]
        },
        overlayShape: {
            enums: [
                "roundrectangle",
                "round-rectangle",
                "ellipse"
            ]
        },
        cornerRadius: {
            number: true,
            min: 0,
            units: "px|em",
            implicitUnits: "px",
            enums: [
                "auto"
            ]
        },
        compoundIncludeLabels: {
            enums: [
                "include",
                "exclude"
            ]
        },
        arrowShape: {
            enums: [
                "tee",
                "triangle",
                "triangle-tee",
                "circle-triangle",
                "triangle-cross",
                "triangle-backcurve",
                "vee",
                "square",
                "circle",
                "diamond",
                "chevron",
                "none"
            ]
        },
        arrowFill: {
            enums: [
                "filled",
                "hollow"
            ]
        },
        arrowWidth: {
            number: true,
            units: "%|px|em",
            implicitUnits: "px",
            enums: [
                "match-line"
            ]
        },
        display: {
            enums: [
                "element",
                "none"
            ]
        },
        visibility: {
            enums: [
                "hidden",
                "visible"
            ]
        },
        zCompoundDepth: {
            enums: [
                "bottom",
                "orphan",
                "auto",
                "top"
            ]
        },
        zIndexCompare: {
            enums: [
                "auto",
                "manual"
            ]
        },
        valign: {
            enums: [
                "top",
                "center",
                "bottom"
            ]
        },
        halign: {
            enums: [
                "left",
                "center",
                "right"
            ]
        },
        justification: {
            enums: [
                "left",
                "center",
                "right",
                "auto"
            ]
        },
        text: {
            string: true
        },
        data: {
            mapping: true,
            regex: /*#__PURE__*/ i("data")
        },
        layoutData: {
            mapping: true,
            regex: /*#__PURE__*/ i("layoutData")
        },
        scratch: {
            mapping: true,
            regex: /*#__PURE__*/ i("scratch")
        },
        mapData: {
            mapping: true,
            regex: /*#__PURE__*/ s("mapData")
        },
        mapLayoutData: {
            mapping: true,
            regex: /*#__PURE__*/ s("mapLayoutData")
        },
        mapScratch: {
            mapping: true,
            regex: /*#__PURE__*/ s("mapScratch")
        },
        fn: {
            mapping: true,
            fn: true
        },
        url: {
            regexes: o,
            singleRegexMatchValue: true
        },
        urls: {
            regexes: o,
            singleRegexMatchValue: true,
            multiple: true
        },
        propList: {
            propList: true
        },
        angle: {
            number: true,
            units: "deg|rad",
            implicitUnits: "rad"
        },
        textRotation: {
            number: true,
            units: "deg|rad",
            implicitUnits: "rad",
            enums: [
                "none",
                "autorotate"
            ]
        },
        polygonPointList: {
            number: true,
            multiple: true,
            evenMultiple: true,
            min: -1,
            max: 1,
            unitless: true
        },
        edgeDistances: {
            enums: [
                "intersection",
                "node-position",
                "endpoints"
            ]
        },
        edgeEndpoint: {
            number: true,
            multiple: true,
            units: "%|px|em|deg|rad",
            implicitUnits: "px",
            enums: [
                "inside-to-node",
                "outside-to-node",
                "outside-to-node-or-label",
                "outside-to-line",
                "outside-to-line-or-label"
            ],
            singleEnum: true,
            validate: /*#__PURE__*/ m$1(function(_, W) {
                switch(_.length){
                    case 2:
                        return W[0] !== "deg" && W[0] !== "rad" && W[1] !== "deg" && W[1] !== "rad";
                    case 1:
                        return pe(_[0]) || W[0] === "deg" || W[0] === "rad";
                    default:
                        return false;
                }
            }, "validate")
        },
        easing: {
            regexes: [
                "^(spring)\\s*\\(\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*\\)$",
                "^(cubic-bezier)\\s*\\(\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*\\)$"
            ],
            enums: [
                "linear",
                "ease",
                "ease-in",
                "ease-out",
                "ease-in-out",
                "ease-in-sine",
                "ease-out-sine",
                "ease-in-out-sine",
                "ease-in-quad",
                "ease-out-quad",
                "ease-in-out-quad",
                "ease-in-cubic",
                "ease-out-cubic",
                "ease-in-out-cubic",
                "ease-in-quart",
                "ease-out-quart",
                "ease-in-out-quart",
                "ease-in-quint",
                "ease-out-quint",
                "ease-in-out-quint",
                "ease-in-expo",
                "ease-out-expo",
                "ease-in-out-expo",
                "ease-in-circ",
                "ease-out-circ",
                "ease-in-out-circ"
            ]
        },
        gradientDirection: {
            enums: [
                "to-bottom",
                "to-top",
                "to-left",
                "to-right",
                "to-bottom-right",
                "to-bottom-left",
                "to-top-right",
                "to-top-left",
                "to-right-bottom",
                "to-left-bottom",
                "to-right-top",
                "to-left-top"
            ]
        },
        boundsExpansion: {
            number: true,
            multiple: true,
            min: 0,
            validate: /*#__PURE__*/ m$1(function(_) {
                var W = _.length;
                return W === 1 || W === 2 || W === 4;
            }, "validate")
        }
    };
    var l = {
        zeroNonZero: /*#__PURE__*/ m$1(function(_, W) {
            return (_ == null || W == null) && _ !== W || _ == 0 && W != 0 ? true : _ != 0 && W == 0;
        }, "zeroNonZero"),
        any: /*#__PURE__*/ m$1(function(_, W) {
            return _ != W;
        }, "any"),
        emptyNonEmpty: /*#__PURE__*/ m$1(function(_, W) {
            var Z = /*#__PURE__*/ lt(_), ae = /*#__PURE__*/ lt(W);
            return Z && !ae || !Z && ae;
        }, "emptyNonEmpty")
    }, u = Je.types, f = [
        {
            name: "label",
            type: u.text,
            triggersBounds: l.any,
            triggersZOrder: l.emptyNonEmpty
        },
        {
            name: "text-rotation",
            type: u.textRotation,
            triggersBounds: l.any
        },
        {
            name: "text-margin-x",
            type: u.bidirectionalSize,
            triggersBounds: l.any
        },
        {
            name: "text-margin-y",
            type: u.bidirectionalSize,
            triggersBounds: l.any
        }
    ], c = [
        {
            name: "source-label",
            type: u.text,
            triggersBounds: l.any
        },
        {
            name: "source-text-rotation",
            type: u.textRotation,
            triggersBounds: l.any
        },
        {
            name: "source-text-margin-x",
            type: u.bidirectionalSize,
            triggersBounds: l.any
        },
        {
            name: "source-text-margin-y",
            type: u.bidirectionalSize,
            triggersBounds: l.any
        },
        {
            name: "source-text-offset",
            type: u.size,
            triggersBounds: l.any
        }
    ], d = [
        {
            name: "target-label",
            type: u.text,
            triggersBounds: l.any
        },
        {
            name: "target-text-rotation",
            type: u.textRotation,
            triggersBounds: l.any
        },
        {
            name: "target-text-margin-x",
            type: u.bidirectionalSize,
            triggersBounds: l.any
        },
        {
            name: "target-text-margin-y",
            type: u.bidirectionalSize,
            triggersBounds: l.any
        },
        {
            name: "target-text-offset",
            type: u.size,
            triggersBounds: l.any
        }
    ], g = [
        {
            name: "font-family",
            type: u.fontFamily,
            triggersBounds: l.any
        },
        {
            name: "font-style",
            type: u.fontStyle,
            triggersBounds: l.any
        },
        {
            name: "font-weight",
            type: u.fontWeight,
            triggersBounds: l.any
        },
        {
            name: "font-size",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "text-transform",
            type: u.textTransform,
            triggersBounds: l.any
        },
        {
            name: "text-wrap",
            type: u.textWrap,
            triggersBounds: l.any
        },
        {
            name: "text-overflow-wrap",
            type: u.textOverflowWrap,
            triggersBounds: l.any
        },
        {
            name: "text-max-width",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "text-outline-width",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "line-height",
            type: u.positiveNumber,
            triggersBounds: l.any
        }
    ], h = [
        {
            name: "text-valign",
            type: u.valign,
            triggersBounds: l.any
        },
        {
            name: "text-halign",
            type: u.halign,
            triggersBounds: l.any
        },
        {
            name: "color",
            type: u.color
        },
        {
            name: "text-outline-color",
            type: u.color
        },
        {
            name: "text-outline-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "text-background-color",
            type: u.color
        },
        {
            name: "text-background-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "text-background-padding",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "text-border-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "text-border-color",
            type: u.color
        },
        {
            name: "text-border-width",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "text-border-style",
            type: u.borderStyle,
            triggersBounds: l.any
        },
        {
            name: "text-background-shape",
            type: u.textBackgroundShape,
            triggersBounds: l.any
        },
        {
            name: "text-justification",
            type: u.justification
        },
        {
            name: "box-select-labels",
            type: u.bool,
            triggersBounds: l.any
        }
    ], m = [
        {
            name: "events",
            type: u.bool,
            triggersZOrder: l.any
        },
        {
            name: "text-events",
            type: u.bool,
            triggersZOrder: l.any
        },
        {
            name: "box-selection",
            type: u.boxSelection,
            triggersZOrder: l.any
        }
    ], p = [
        {
            name: "display",
            type: u.display,
            triggersZOrder: l.any,
            triggersBounds: l.any,
            triggersBoundsOfConnectedEdges: l.any,
            triggersBoundsOfParallelEdges: /*#__PURE__*/ m$1(function(_, W, Z) {
                return _ === W ? false : Z.pstyle("curve-style").value === "bezier";
            }, "triggersBoundsOfParallelEdges")
        },
        {
            name: "visibility",
            type: u.visibility,
            triggersZOrder: l.any
        },
        {
            name: "opacity",
            type: u.zeroOneNumber,
            triggersZOrder: l.zeroNonZero
        },
        {
            name: "text-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "min-zoomed-font-size",
            type: u.size
        },
        {
            name: "z-compound-depth",
            type: u.zCompoundDepth,
            triggersZOrder: l.any
        },
        {
            name: "z-index-compare",
            type: u.zIndexCompare,
            triggersZOrder: l.any
        },
        {
            name: "z-index",
            type: u.number,
            triggersZOrder: l.any
        }
    ], y = [
        {
            name: "overlay-padding",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "overlay-color",
            type: u.color
        },
        {
            name: "overlay-opacity",
            type: u.zeroOneNumber,
            triggersBounds: l.zeroNonZero
        },
        {
            name: "overlay-shape",
            type: u.overlayShape,
            triggersBounds: l.any
        },
        {
            name: "overlay-corner-radius",
            type: u.cornerRadius
        }
    ], b1 = [
        {
            name: "underlay-padding",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "underlay-color",
            type: u.color
        },
        {
            name: "underlay-opacity",
            type: u.zeroOneNumber,
            triggersBounds: l.zeroNonZero
        },
        {
            name: "underlay-shape",
            type: u.overlayShape,
            triggersBounds: l.any
        },
        {
            name: "underlay-corner-radius",
            type: u.cornerRadius
        }
    ], w = [
        {
            name: "transition-property",
            type: u.propList
        },
        {
            name: "transition-duration",
            type: u.time
        },
        {
            name: "transition-delay",
            type: u.time
        },
        {
            name: "transition-timing-function",
            type: u.easing
        }
    ], x = /*#__PURE__*/ m$1(function(_, W) {
        return W.value === "label" ? -_.poolIndex() : W.pfValue;
    }, "nodeSizeHashOverride"), C = [
        {
            name: "height",
            type: u.nodeSize,
            triggersBounds: l.any,
            hashOverride: x
        },
        {
            name: "width",
            type: u.nodeSize,
            triggersBounds: l.any,
            hashOverride: x
        },
        {
            name: "shape",
            type: u.nodeShape,
            triggersBounds: l.any
        },
        {
            name: "shape-polygon-points",
            type: u.polygonPointList,
            triggersBounds: l.any
        },
        {
            name: "corner-radius",
            type: u.cornerRadius
        },
        {
            name: "background-color",
            type: u.color
        },
        {
            name: "background-fill",
            type: u.fill
        },
        {
            name: "background-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "background-blacken",
            type: u.nOneOneNumber
        },
        {
            name: "background-gradient-stop-colors",
            type: u.colors
        },
        {
            name: "background-gradient-stop-positions",
            type: u.percentages
        },
        {
            name: "background-gradient-direction",
            type: u.gradientDirection
        },
        {
            name: "padding",
            type: u.sizeMaybePercent,
            triggersBounds: l.any
        },
        {
            name: "padding-relative-to",
            type: u.paddingRelativeTo,
            triggersBounds: l.any
        },
        {
            name: "bounds-expansion",
            type: u.boundsExpansion,
            triggersBounds: l.any
        }
    ], T = [
        {
            name: "border-color",
            type: u.color
        },
        {
            name: "border-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "border-width",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "border-style",
            type: u.borderStyle
        },
        {
            name: "border-cap",
            type: u.lineCap
        },
        {
            name: "border-join",
            type: u.lineJoin
        },
        {
            name: "border-dash-pattern",
            type: u.numbers
        },
        {
            name: "border-dash-offset",
            type: u.number
        },
        {
            name: "border-position",
            type: u.linePosition
        }
    ], E = [
        {
            name: "outline-color",
            type: u.color
        },
        {
            name: "outline-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "outline-width",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "outline-style",
            type: u.borderStyle
        },
        {
            name: "outline-offset",
            type: u.size,
            triggersBounds: l.any
        }
    ], S = [
        {
            name: "background-image",
            type: u.urls
        },
        {
            name: "background-image-crossorigin",
            type: u.bgCrossOrigin
        },
        {
            name: "background-image-opacity",
            type: u.zeroOneNumbers
        },
        {
            name: "background-image-containment",
            type: u.bgContainment
        },
        {
            name: "background-image-smoothing",
            type: u.bools
        },
        {
            name: "background-position-x",
            type: u.bgPos
        },
        {
            name: "background-position-y",
            type: u.bgPos
        },
        {
            name: "background-width-relative-to",
            type: u.bgRelativeTo
        },
        {
            name: "background-height-relative-to",
            type: u.bgRelativeTo
        },
        {
            name: "background-repeat",
            type: u.bgRepeat
        },
        {
            name: "background-fit",
            type: u.bgFit
        },
        {
            name: "background-clip",
            type: u.bgClip
        },
        {
            name: "background-width",
            type: u.bgWH
        },
        {
            name: "background-height",
            type: u.bgWH
        },
        {
            name: "background-offset-x",
            type: u.bgPos
        },
        {
            name: "background-offset-y",
            type: u.bgPos
        }
    ], D = [
        {
            name: "position",
            type: u.position,
            triggersBounds: l.any
        },
        {
            name: "compound-sizing-wrt-labels",
            type: u.compoundIncludeLabels,
            triggersBounds: l.any
        },
        {
            name: "min-width",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "min-width-bias-left",
            type: u.sizeMaybePercent,
            triggersBounds: l.any
        },
        {
            name: "min-width-bias-right",
            type: u.sizeMaybePercent,
            triggersBounds: l.any
        },
        {
            name: "min-height",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "min-height-bias-top",
            type: u.sizeMaybePercent,
            triggersBounds: l.any
        },
        {
            name: "min-height-bias-bottom",
            type: u.sizeMaybePercent,
            triggersBounds: l.any
        }
    ], B = [
        {
            name: "line-style",
            type: u.lineStyle
        },
        {
            name: "line-color",
            type: u.color
        },
        {
            name: "line-fill",
            type: u.fill
        },
        {
            name: "line-cap",
            type: u.lineCap
        },
        {
            name: "line-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "line-dash-pattern",
            type: u.numbers
        },
        {
            name: "line-dash-offset",
            type: u.number
        },
        {
            name: "line-outline-width",
            type: u.size
        },
        {
            name: "line-outline-color",
            type: u.color
        },
        {
            name: "line-gradient-stop-colors",
            type: u.colors
        },
        {
            name: "line-gradient-stop-positions",
            type: u.percentages
        },
        {
            name: "curve-style",
            type: u.curveStyle,
            triggersBounds: l.any,
            triggersBoundsOfParallelEdges: /*#__PURE__*/ m$1(function(_, W) {
                return _ === W ? false : _ === "bezier" || W === "bezier";
            }, "triggersBoundsOfParallelEdges")
        },
        {
            name: "haystack-radius",
            type: u.zeroOneNumber,
            triggersBounds: l.any
        },
        {
            name: "source-endpoint",
            type: u.edgeEndpoint,
            triggersBounds: l.any
        },
        {
            name: "target-endpoint",
            type: u.edgeEndpoint,
            triggersBounds: l.any
        },
        {
            name: "control-point-step-size",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "control-point-distances",
            type: u.bidirectionalSizes,
            triggersBounds: l.any
        },
        {
            name: "control-point-weights",
            type: u.numbers,
            triggersBounds: l.any
        },
        {
            name: "segment-distances",
            type: u.bidirectionalSizes,
            triggersBounds: l.any
        },
        {
            name: "segment-weights",
            type: u.numbers,
            triggersBounds: l.any
        },
        {
            name: "segment-radii",
            type: u.numbers,
            triggersBounds: l.any
        },
        {
            name: "radius-type",
            type: u.radiusType,
            triggersBounds: l.any
        },
        {
            name: "taxi-turn",
            type: u.bidirectionalSizeMaybePercent,
            triggersBounds: l.any
        },
        {
            name: "taxi-turn-min-distance",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "taxi-direction",
            type: u.axisDirection,
            triggersBounds: l.any
        },
        {
            name: "taxi-radius",
            type: u.number,
            triggersBounds: l.any
        },
        {
            name: "edge-distances",
            type: u.edgeDistances,
            triggersBounds: l.any
        },
        {
            name: "arrow-scale",
            type: u.positiveNumber,
            triggersBounds: l.any
        },
        {
            name: "loop-direction",
            type: u.angle,
            triggersBounds: l.any
        },
        {
            name: "loop-sweep",
            type: u.angle,
            triggersBounds: l.any
        },
        {
            name: "source-distance-from-node",
            type: u.size,
            triggersBounds: l.any
        },
        {
            name: "target-distance-from-node",
            type: u.size,
            triggersBounds: l.any
        }
    ], P = [
        {
            name: "ghost",
            type: u.bool,
            triggersBounds: l.any
        },
        {
            name: "ghost-offset-x",
            type: u.bidirectionalSize,
            triggersBounds: l.any
        },
        {
            name: "ghost-offset-y",
            type: u.bidirectionalSize,
            triggersBounds: l.any
        },
        {
            name: "ghost-opacity",
            type: u.zeroOneNumber
        }
    ], A = [
        {
            name: "selection-box-color",
            type: u.color
        },
        {
            name: "selection-box-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "selection-box-border-color",
            type: u.color
        },
        {
            name: "selection-box-border-width",
            type: u.size
        },
        {
            name: "active-bg-color",
            type: u.color
        },
        {
            name: "active-bg-opacity",
            type: u.zeroOneNumber
        },
        {
            name: "active-bg-size",
            type: u.size
        },
        {
            name: "outside-texture-bg-color",
            type: u.color
        },
        {
            name: "outside-texture-bg-opacity",
            type: u.zeroOneNumber
        }
    ], R = [];
    Je.pieBackgroundN = 16, R.push({
        name: "pie-size",
        type: u.sizeMaybePercent
    }), R.push({
        name: "pie-hole",
        type: u.sizeMaybePercent
    }), R.push({
        name: "pie-start-angle",
        type: u.angle
    });
    for(var M = 1; M <= Je.pieBackgroundN; M++)R.push({
        name: "pie-" + M + "-background-color",
        type: u.color
    }), R.push({
        name: "pie-" + M + "-background-size",
        type: u.percent
    }), R.push({
        name: "pie-" + M + "-background-opacity",
        type: u.zeroOneNumber
    });
    var I = [];
    Je.stripeBackgroundN = 16, I.push({
        name: "stripe-size",
        type: u.sizeMaybePercent
    }), I.push({
        name: "stripe-direction",
        type: u.axisDirectionPrimary
    });
    for(var O = 1; O <= Je.stripeBackgroundN; O++)I.push({
        name: "stripe-" + O + "-background-color",
        type: u.color
    }), I.push({
        name: "stripe-" + O + "-background-size",
        type: u.percent
    }), I.push({
        name: "stripe-" + O + "-background-opacity",
        type: u.zeroOneNumber
    });
    var L = [], N = Je.arrowPrefixes = [
        "source",
        "mid-source",
        "target",
        "mid-target"
    ];
    [
        {
            name: "arrow-shape",
            type: u.arrowShape,
            triggersBounds: l.any
        },
        {
            name: "arrow-color",
            type: u.color
        },
        {
            name: "arrow-fill",
            type: u.arrowFill
        },
        {
            name: "arrow-width",
            type: u.arrowWidth
        }
    ].forEach(function(F) {
        N.forEach(function(_) {
            var W = _ + "-" + F.name, Z = F.type, ae = F.triggersBounds;
            L.push({
                name: W,
                type: Z,
                triggersBounds: ae
            });
        });
    }, {});
    var q = Je.properties = /*#__PURE__*/ [].concat(m, w, p, y, b1, P, h, g, f, c, d, C, T, E, S, R, I, D, B, L, A), H = Je.propertyGroups = {
        behavior: m,
        transition: w,
        visibility: p,
        overlay: y,
        underlay: b1,
        ghost: P,
        commonLabel: h,
        labelDimensions: g,
        mainLabel: f,
        sourceLabel: c,
        targetLabel: d,
        nodeBody: C,
        nodeBorder: T,
        nodeOutline: E,
        backgroundImage: S,
        pie: R,
        stripe: I,
        compound: D,
        edgeLine: B,
        edgeArrow: L,
        core: A
    }, z = Je.propertyGroupNames = {}, V = Je.propertyGroupKeys = /*#__PURE__*/ Object.keys(H);
    V.forEach(function(F) {
        z[F] = /*#__PURE__*/ H[F].map(function(_) {
            return _.name;
        }), H[F].forEach(function(_) {
            return _.groupKey = F;
        });
    });
    var K = Je.aliases = [
        {
            name: "content",
            pointsTo: "label"
        },
        {
            name: "control-point-distance",
            pointsTo: "control-point-distances"
        },
        {
            name: "control-point-weight",
            pointsTo: "control-point-weights"
        },
        {
            name: "segment-distance",
            pointsTo: "segment-distances"
        },
        {
            name: "segment-weight",
            pointsTo: "segment-weights"
        },
        {
            name: "segment-radius",
            pointsTo: "segment-radii"
        },
        {
            name: "edge-text-rotation",
            pointsTo: "text-rotation"
        },
        {
            name: "padding-left",
            pointsTo: "padding"
        },
        {
            name: "padding-right",
            pointsTo: "padding"
        },
        {
            name: "padding-top",
            pointsTo: "padding"
        },
        {
            name: "padding-bottom",
            pointsTo: "padding"
        }
    ];
    Je.propertyNames = /*#__PURE__*/ q.map(function(F) {
        return F.name;
    });
    for(var J = 0; J < q.length; J++){
        var X = q[J];
        q[X.name] = X;
    }
    for(var ee = 0; ee < K.length; ee++){
        var te = K[ee], ie = q[te.pointsTo], j = {
            name: te.name,
            alias: true,
            pointsTo: ie
        };
        q.push(j), q[te.name] = j;
    }
})();
Je.getDefaultProperty = function(r) {
    return this.getDefaultProperties()[r];
};
Je.getDefaultProperties = function() {
    var r = this._private;
    if (r.defaultProperties != null) return r.defaultProperties;
    for(var e = /*#__PURE__*/ we({
        "selection-box-color": "#ddd",
        "selection-box-opacity": .65,
        "selection-box-border-color": "#aaa",
        "selection-box-border-width": 1,
        "active-bg-color": "black",
        "active-bg-opacity": .15,
        "active-bg-size": 30,
        "outside-texture-bg-color": "#000",
        "outside-texture-bg-opacity": .125,
        events: "yes",
        "text-events": "no",
        "text-valign": "top",
        "text-halign": "center",
        "text-justification": "auto",
        "line-height": 1,
        color: "#000",
        "box-selection": "contain",
        "text-outline-color": "#000",
        "text-outline-width": 0,
        "text-outline-opacity": 1,
        "text-opacity": 1,
        "text-decoration": "none",
        "text-transform": "none",
        "text-wrap": "none",
        "text-overflow-wrap": "whitespace",
        "text-max-width": 9999,
        "text-background-color": "#000",
        "text-background-opacity": 0,
        "text-background-shape": "rectangle",
        "text-background-padding": 0,
        "text-border-opacity": 0,
        "text-border-width": 0,
        "text-border-style": "solid",
        "text-border-color": "#000",
        "font-family": "Helvetica Neue, Helvetica, sans-serif",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": 16,
        "min-zoomed-font-size": 0,
        "text-rotation": "none",
        "source-text-rotation": "none",
        "target-text-rotation": "none",
        visibility: "visible",
        display: "element",
        opacity: 1,
        "z-compound-depth": "auto",
        "z-index-compare": "auto",
        "z-index": 0,
        label: "",
        "text-margin-x": 0,
        "text-margin-y": 0,
        "source-label": "",
        "source-text-offset": 0,
        "source-text-margin-x": 0,
        "source-text-margin-y": 0,
        "target-label": "",
        "target-text-offset": 0,
        "target-text-margin-x": 0,
        "target-text-margin-y": 0,
        "overlay-opacity": 0,
        "overlay-color": "#000",
        "overlay-padding": 10,
        "overlay-shape": "round-rectangle",
        "overlay-corner-radius": "auto",
        "underlay-opacity": 0,
        "underlay-color": "#000",
        "underlay-padding": 10,
        "underlay-shape": "round-rectangle",
        "underlay-corner-radius": "auto",
        "transition-property": "none",
        "transition-duration": 0,
        "transition-delay": 0,
        "transition-timing-function": "linear",
        "box-select-labels": "no",
        "background-blacken": 0,
        "background-color": "#999",
        "background-fill": "solid",
        "background-opacity": 1,
        "background-image": "none",
        "background-image-crossorigin": "anonymous",
        "background-image-opacity": 1,
        "background-image-containment": "inside",
        "background-image-smoothing": "yes",
        "background-position-x": "50%",
        "background-position-y": "50%",
        "background-offset-x": 0,
        "background-offset-y": 0,
        "background-width-relative-to": "include-padding",
        "background-height-relative-to": "include-padding",
        "background-repeat": "no-repeat",
        "background-fit": "none",
        "background-clip": "node",
        "background-width": "auto",
        "background-height": "auto",
        "border-color": "#000",
        "border-opacity": 1,
        "border-width": 0,
        "border-style": "solid",
        "border-dash-pattern": [
            4,
            2
        ],
        "border-dash-offset": 0,
        "border-cap": "butt",
        "border-join": "miter",
        "border-position": "center",
        "outline-color": "#999",
        "outline-opacity": 1,
        "outline-width": 0,
        "outline-offset": 0,
        "outline-style": "solid",
        height: 30,
        width: 30,
        shape: "ellipse",
        "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
        "corner-radius": "auto",
        "bounds-expansion": 0,
        "background-gradient-direction": "to-bottom",
        "background-gradient-stop-colors": "#999",
        "background-gradient-stop-positions": "0%",
        ghost: "no",
        "ghost-offset-y": 0,
        "ghost-offset-x": 0,
        "ghost-opacity": 0,
        padding: 0,
        "padding-relative-to": "width",
        position: "origin",
        "compound-sizing-wrt-labels": "include",
        "min-width": 0,
        "min-width-bias-left": 0,
        "min-width-bias-right": 0,
        "min-height": 0,
        "min-height-bias-top": 0,
        "min-height-bias-bottom": 0
    }, {
        "pie-size": "100%",
        "pie-hole": 0,
        "pie-start-angle": "0deg"
    }, /*#__PURE__*/ [
        {
            name: "pie-{{i}}-background-color",
            value: "black"
        },
        {
            name: "pie-{{i}}-background-size",
            value: "0%"
        },
        {
            name: "pie-{{i}}-background-opacity",
            value: 1
        }
    ].reduce(function(l, u) {
        for(var f = 1; f <= Je.pieBackgroundN; f++){
            var c = /*#__PURE__*/ u.name.replace("{{i}}", f), d = u.value;
            l[c] = d;
        }
        return l;
    }, {}), {
        "stripe-size": "100%",
        "stripe-direction": "horizontal"
    }, /*#__PURE__*/ [
        {
            name: "stripe-{{i}}-background-color",
            value: "black"
        },
        {
            name: "stripe-{{i}}-background-size",
            value: "0%"
        },
        {
            name: "stripe-{{i}}-background-opacity",
            value: 1
        }
    ].reduce(function(l, u) {
        for(var f = 1; f <= Je.stripeBackgroundN; f++){
            var c = /*#__PURE__*/ u.name.replace("{{i}}", f), d = u.value;
            l[c] = d;
        }
        return l;
    }, {}), {
        "line-style": "solid",
        "line-color": "#999",
        "line-fill": "solid",
        "line-cap": "butt",
        "line-opacity": 1,
        "line-outline-width": 0,
        "line-outline-color": "#000",
        "line-gradient-stop-colors": "#999",
        "line-gradient-stop-positions": "0%",
        "control-point-step-size": 40,
        "control-point-weights": .5,
        "segment-weights": .5,
        "segment-distances": 20,
        "segment-radii": 15,
        "radius-type": "arc-radius",
        "taxi-turn": "50%",
        "taxi-radius": 15,
        "taxi-turn-min-distance": 10,
        "taxi-direction": "auto",
        "edge-distances": "intersection",
        "curve-style": "haystack",
        "haystack-radius": 0,
        "arrow-scale": 1,
        "loop-direction": "-45deg",
        "loop-sweep": "-90deg",
        "source-distance-from-node": 0,
        "target-distance-from-node": 0,
        "source-endpoint": "outside-to-node",
        "target-endpoint": "outside-to-node",
        "line-dash-pattern": [
            6,
            3
        ],
        "line-dash-offset": 0
    }, /*#__PURE__*/ [
        {
            name: "arrow-shape",
            value: "none"
        },
        {
            name: "arrow-color",
            value: "#999"
        },
        {
            name: "arrow-fill",
            value: "filled"
        },
        {
            name: "arrow-width",
            value: 1
        }
    ].reduce(function(l, u) {
        return Je.arrowPrefixes.forEach(function(f) {
            var c = f + "-" + u.name, d = u.value;
            l[c] = d;
        }), l;
    }, {})), t = {}, a = 0; a < this.properties.length; a++){
        var n = this.properties[a];
        if (!n.pointsTo) {
            var i = n.name, s = e[i], o = /*#__PURE__*/ this.parse(i, s);
            t[i] = o;
        }
    }
    return r.defaultProperties = t, r.defaultProperties;
};
Je.addDefaultStylesheet = function() {
    this.selector(":parent").css({
        shape: "rectangle",
        padding: 10,
        "background-color": "#eee",
        "border-color": "#ccc",
        "border-width": 1
    }).selector("edge").css({
        width: 3
    }).selector(":loop").css({
        "curve-style": "bezier"
    }).selector("edge:compound").css({
        "curve-style": "bezier",
        "source-endpoint": "outside-to-line",
        "target-endpoint": "outside-to-line"
    }).selector(":selected").css({
        "background-color": "#0169D9",
        "line-color": "#0169D9",
        "source-arrow-color": "#0169D9",
        "target-arrow-color": "#0169D9",
        "mid-source-arrow-color": "#0169D9",
        "mid-target-arrow-color": "#0169D9"
    }).selector(":parent:selected").css({
        "background-color": "#CCE1F9",
        "border-color": "#aec8e5"
    }).selector(":active").css({
        "overlay-color": "black",
        "overlay-padding": 10,
        "overlay-opacity": .25
    }), this.defaultLength = this.length;
};
var Kn = {};
Kn.parse = function(r, e, t, a) {
    var n = this;
    if (Ke(e)) return n.parseImplWarn(r, e, t, a);
    var i = a === "mapping" || a === true || a === false || a == null ? "dontcare" : a, s = t ? "t" : "f", o = "" + e, l = /*#__PURE__*/ dv(r, o, s, i), u = n.propCache = n.propCache || [], f;
    return (f = u[l]) || (f = u[l] = /*#__PURE__*/ n.parseImplWarn(r, e, t, a)), (t || a === "mapping") && (f = /*#__PURE__*/ _r(f), f && (f.value = /*#__PURE__*/ _r(f.value))), f;
};
Kn.parseImplWarn = function(r, e, t, a) {
    var n = /*#__PURE__*/ this.parseImpl(r, e, t, a);
    return !n && e != null && qe(/*#__PURE__*/ "The style property `".concat(r, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && qe("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
Kn.parseImpl = function(r, e, t, a) {
    var n = this;
    r = /*#__PURE__*/ Qs(r);
    var i = n.properties[r], s = e, o = n.types;
    if (!i || e === void 0) return null;
    i.alias && (i = i.pointsTo, r = i.name);
    var l = /*#__PURE__*/ pe(e);
    l && (e = /*#__PURE__*/ e.trim());
    var u = i.type;
    if (!u) return null;
    if (t && (e === "" || e === null)) return {
        name: r,
        value: e,
        bypass: true,
        deleteBypass: true
    };
    if (Ke(e)) return {
        name: r,
        value: e,
        strValue: "fn",
        mapped: o.fn,
        bypass: t
    };
    var f, c;
    if (!(!l || a || e.length < 7 || e[1] !== "a")) {
        if (e.length >= 7 && e[0] === "d" && (f = /*#__PURE__*/ new RegExp(o.data.regex).exec(e))) {
            if (t) return false;
            var d = o.data;
            return {
                name: r,
                value: f,
                strValue: "" + e,
                mapped: d,
                field: f[1],
                bypass: t
            };
        } else if (e.length >= 10 && e[0] === "m" && (c = /*#__PURE__*/ new RegExp(o.mapData.regex).exec(e))) {
            if (t || u.multiple) return false;
            var g = o.mapData;
            if (!(u.color || u.number)) return false;
            var h = /*#__PURE__*/ this.parse(r, c[4]);
            if (!h || h.mapped) return false;
            var m = /*#__PURE__*/ this.parse(r, c[5]);
            if (!m || m.mapped) return false;
            if (h.pfValue === m.pfValue || h.strValue === m.strValue) return qe("`" + r + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + r + ": " + h.strValue + "`"), this.parse(r, h.strValue);
            if (u.color) {
                var p = h.value, y = m.value, b1 = p[0] === y[0] && p[1] === y[1] && p[2] === y[2] && (p[3] === y[3] || (p[3] == null || p[3] === 1) && (y[3] == null || y[3] === 1));
                if (b1) return false;
            }
            return {
                name: r,
                value: c,
                strValue: "" + e,
                mapped: g,
                field: c[1],
                fieldMin: /*#__PURE__*/ parseFloat(c[2]),
                fieldMax: /*#__PURE__*/ parseFloat(c[3]),
                valueMin: h.value,
                valueMax: m.value,
                bypass: t
            };
        }
    }
    if (u.multiple && a !== "multiple") {
        var w;
        if (l ? w = /*#__PURE__*/ e.split(/\s+/) : Ge(e) ? w = e : w = [
            e
        ], u.evenMultiple && w.length % 2 !== 0) return null;
        for(var x = [], C = [], T = [], E = "", S = false, D = 0; D < w.length; D++){
            var B = /*#__PURE__*/ n.parse(r, w[D], t, "multiple");
            S = S || pe(B.value), x.push(B.value), T.push(B.pfValue != null ? B.pfValue : B.value), C.push(B.units), E += (D > 0 ? " " : "") + B.strValue;
        }
        return u.validate && !u.validate(x, C) ? null : u.singleEnum && S ? x.length === 1 && pe(x[0]) ? {
            name: r,
            value: x[0],
            strValue: x[0],
            bypass: t
        } : null : {
            name: r,
            value: x,
            pfValue: T,
            strValue: E,
            bypass: t,
            units: C
        };
    }
    var P = /*#__PURE__*/ m$1(function() {
        for(var j = 0; j < u.enums.length; j++){
            var F = u.enums[j];
            if (F === e) return {
                name: r,
                value: e,
                strValue: "" + e,
                bypass: t
            };
        }
        return null;
    }, "checkEnums");
    if (u.number) {
        var A, R = "px";
        if (u.units && (A = u.units), u.implicitUnits && (R = u.implicitUnits), !u.unitless) if (l) {
            var M = "px|em" + (u.allowPercent ? "|\\%" : "");
            A && (M = A);
            var I = /*#__PURE__*/ e.match("^(" + ar + ")(" + M + ")?$");
            I && (e = I[1], A = I[2] || R);
        } else (!A || u.implicitUnits) && (A = R);
        if (e = /*#__PURE__*/ parseFloat(e), isNaN(e) && u.enums === void 0) return null;
        if (isNaN(e) && u.enums !== void 0) return e = s, P();
        if (u.integer && !dc(e) || u.min !== void 0 && (e < u.min || u.strictMin && e === u.min) || u.max !== void 0 && (e > u.max || u.strictMax && e === u.max)) return null;
        var O = {
            name: r,
            value: e,
            strValue: "" + e + (A || ""),
            units: A,
            bypass: t
        };
        return u.unitless || A !== "px" && A !== "em" ? O.pfValue = e : O.pfValue = A === "px" || !A ? e : this.getEmSizeInPixels() * e, (A === "ms" || A === "s") && (O.pfValue = A === "ms" ? e : 1e3 * e), (A === "deg" || A === "rad") && (O.pfValue = A === "rad" ? e : Cd(e)), A === "%" && (O.pfValue = e / 100), O;
    } else if (u.propList) {
        var L = [], N = "" + e;
        if (N !== "none") {
            for(var q = /*#__PURE__*/ N.split(/\s*,\s*|\s+/), H = 0; H < q.length; H++){
                var z = /*#__PURE__*/ q[H].trim();
                n.properties[z] ? L.push(z) : qe("`" + z + "` is not a valid property name");
            }
            if (L.length === 0) return null;
        }
        return {
            name: r,
            value: L,
            strValue: L.length === 0 ? "none" : L.join(" "),
            bypass: t
        };
    } else if (u.color) {
        var V = /*#__PURE__*/ sv(e);
        return V ? {
            name: r,
            value: V,
            pfValue: V,
            strValue: "rgb(" + V[0] + "," + V[1] + "," + V[2] + ")",
            bypass: t
        } : null;
    } else if (u.regex || u.regexes) {
        if (u.enums) {
            var K = /*#__PURE__*/ P();
            if (K) return K;
        }
        for(var J = u.regexes ? u.regexes : [
            u.regex
        ], X = 0; X < J.length; X++){
            var ee = new RegExp(J[X]), te = /*#__PURE__*/ ee.exec(e);
            if (te) return {
                name: r,
                value: u.singleRegexMatchValue ? te[1] : te,
                strValue: "" + e,
                bypass: t
            };
        }
        return null;
    } else return u.string ? {
        name: r,
        value: "" + e,
        strValue: "" + e,
        bypass: t
    } : u.enums ? P() : null;
};
var ur = m$1(function(e) {
    if (!(this instanceof ur)) return new ur(e);
    if (!Zs(e)) {
        Ue("A style must have a core reference");
        return;
    }
    this._private = {
        cy: e,
        coreStyle: {}
    }, this.length = 0, this.resetToDefault();
}, "Style"), yr = ur.prototype;
yr.instanceString = function() {
    return "style";
};
yr.clear = function() {
    for(var r = this._private, e = r.cy, t = /*#__PURE__*/ e.elements(), a = 0; a < this.length; a++)this[a] = void 0;
    return this.length = 0, r.contextStyles = {}, r.propDiffs = {}, this.cleanElements(t, true), t.forEach(function(n) {
        var i = n[0]._private;
        i.styleDirty = true, i.appliedInitStyle = false;
    }), this;
};
yr.resetToDefault = function() {
    return this.clear(), this.addDefaultStylesheet(), this;
};
yr.core = function(r) {
    return this._private.coreStyle[r] || this.getDefaultProperty(r);
};
yr.selector = function(r) {
    var e = r === "core" ? null : new ct(r), t = this.length++;
    return this[t] = {
        selector: e,
        properties: [],
        mappedProperties: [],
        index: t
    }, this;
};
yr.css = function() {
    var r = this, e = arguments;
    if (e.length === 1) for(var t = e[0], a = 0; a < r.properties.length; a++){
        var n = r.properties[a], i = t[n.name];
        i === void 0 && (i = t[Ln(n.name)]), i !== void 0 && this.cssRule(n.name, i);
    }
    else e.length === 2 && this.cssRule(e[0], e[1]);
    return this;
};
yr.style = yr.css;
yr.cssRule = function(r, e) {
    var t = /*#__PURE__*/ this.parse(r, e);
    if (t) {
        var a = this.length - 1;
        this[a].properties.push(t), this[a].properties[t.name] = t, t.name.match(/pie-(\d+)-background-size/) && t.value && (this._private.hasPie = true), t.name.match(/stripe-(\d+)-background-size/) && t.value && (this._private.hasStripe = true), t.mapped && this[a].mappedProperties.push(t);
        var n = !this[a].selector;
        n && (this._private.coreStyle[t.name] = t);
    }
    return this;
};
yr.append = function(r) {
    return av(r) ? r.appendToStyle(this) : Ge(r) ? this.appendFromJson(r) : pe(r) && this.appendFromString(r), this;
};
ur.fromJson = function(r, e) {
    var t = new ur(r);
    return t.fromJson(e), t;
};
ur.fromString = function(r, e) {
    return new ur(r).fromString(e);
};
[
    lr,
    Ga,
    co,
    Gr,
    Un,
    ho,
    Je,
    Kn
].forEach(function(r) {
    we(yr, r);
});
ur.types = yr.types;
ur.properties = yr.properties;
ur.propertyGroups = yr.propertyGroups;
ur.propertyGroupNames = yr.propertyGroupNames;
ur.propertyGroupKeys = yr.propertyGroupKeys;
var Dp = {
    style: /*#__PURE__*/ m$1(function(e) {
        if (e) {
            var t = /*#__PURE__*/ this.setStyle(e);
            t.update();
        }
        return this._private.style;
    }, "style"),
    setStyle: /*#__PURE__*/ m$1(function(e) {
        var t = this._private;
        return av(e) ? t.style = /*#__PURE__*/ e.generateStyle(this) : Ge(e) ? t.style = /*#__PURE__*/ ur.fromJson(this, e) : pe(e) ? t.style = /*#__PURE__*/ ur.fromString(this, e) : t.style = /*#__PURE__*/ ur(this), t.style;
    }, "setStyle"),
    updateStyle: /*#__PURE__*/ m$1(function() {
        this.mutableElements().updateStyle();
    }, "updateStyle")
}, Bp = "single", Mt = {
    autolock: /*#__PURE__*/ m$1(function(e) {
        if (e !== void 0) this._private.autolock = !!e;
        else return this._private.autolock;
        return this;
    }, "autolock"),
    autoungrabify: /*#__PURE__*/ m$1(function(e) {
        if (e !== void 0) this._private.autoungrabify = !!e;
        else return this._private.autoungrabify;
        return this;
    }, "autoungrabify"),
    autounselectify: /*#__PURE__*/ m$1(function(e) {
        if (e !== void 0) this._private.autounselectify = !!e;
        else return this._private.autounselectify;
        return this;
    }, "autounselectify"),
    selectionType: /*#__PURE__*/ m$1(function(e) {
        var t = this._private;
        if (t.selectionType == null && (t.selectionType = Bp), e !== void 0) (e === "additive" || e === "single") && (t.selectionType = e);
        else return t.selectionType;
        return this;
    }, "selectionType"),
    panningEnabled: /*#__PURE__*/ m$1(function(e) {
        if (e !== void 0) this._private.panningEnabled = !!e;
        else return this._private.panningEnabled;
        return this;
    }, "panningEnabled"),
    userPanningEnabled: /*#__PURE__*/ m$1(function(e) {
        if (e !== void 0) this._private.userPanningEnabled = !!e;
        else return this._private.userPanningEnabled;
        return this;
    }, "userPanningEnabled"),
    zoomingEnabled: /*#__PURE__*/ m$1(function(e) {
        if (e !== void 0) this._private.zoomingEnabled = !!e;
        else return this._private.zoomingEnabled;
        return this;
    }, "zoomingEnabled"),
    userZoomingEnabled: /*#__PURE__*/ m$1(function(e) {
        if (e !== void 0) this._private.userZoomingEnabled = !!e;
        else return this._private.userZoomingEnabled;
        return this;
    }, "userZoomingEnabled"),
    boxSelectionEnabled: /*#__PURE__*/ m$1(function(e) {
        if (e !== void 0) this._private.boxSelectionEnabled = !!e;
        else return this._private.boxSelectionEnabled;
        return this;
    }, "boxSelectionEnabled"),
    pan: /*#__PURE__*/ m$1(function() {
        var e = arguments, t = this._private.pan, a, n, i, s, o;
        switch(e.length){
            case 0:
                return t;
            case 1:
                if (pe(e[0])) return a = e[0], t[a];
                if (Ie(e[0])) {
                    if (!this._private.panningEnabled) return this;
                    i = e[0], s = i.x, o = i.y, ne(s) && (t.x = s), ne(o) && (t.y = o), this.emit("pan viewport");
                }
                break;
            case 2:
                if (!this._private.panningEnabled) return this;
                a = e[0], n = e[1], (a === "x" || a === "y") && ne(n) && (t[a] = n), this.emit("pan viewport");
                break;
        }
        return this.notify("viewport"), this;
    }, "pan"),
    panBy: /*#__PURE__*/ m$1(function(e, t) {
        var a = arguments, n = this._private.pan, i, s, o, l, u;
        if (!this._private.panningEnabled) return this;
        switch(a.length){
            case 1:
                Ie(e) && (o = a[0], l = o.x, u = o.y, ne(l) && (n.x += l), ne(u) && (n.y += u), this.emit("pan viewport"));
                break;
            case 2:
                i = e, s = t, (i === "x" || i === "y") && ne(s) && (n[i] += s), this.emit("pan viewport");
                break;
        }
        return this.notify("viewport"), this;
    }, "panBy"),
    gc: /*#__PURE__*/ m$1(function() {
        this.notify("gc");
    }, "gc"),
    fit: /*#__PURE__*/ m$1(function(e, t) {
        var a = /*#__PURE__*/ this.getFitViewport(e, t);
        if (a) {
            var n = this._private;
            n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
        }
        return this;
    }, "fit"),
    getFitViewport: /*#__PURE__*/ m$1(function(e, t) {
        if (ne(e) && t === void 0 && (t = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
            var a;
            if (pe(e)) {
                var n = e;
                e = /*#__PURE__*/ this.$(n);
            } else if (pc(e)) {
                var i = e;
                a = {
                    x1: i.x1,
                    y1: i.y1,
                    x2: i.x2,
                    y2: i.y2
                }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
            } else Br(e) || (e = /*#__PURE__*/ this.mutableElements());
            if (!(Br(e) && e.empty())) {
                a = a || e.boundingBox();
                var s = /*#__PURE__*/ this.width(), o = /*#__PURE__*/ this.height(), l;
                if (t = ne(t) ? t : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
                    l = /*#__PURE__*/ Math.min((s - 2 * t) / a.w, (o - 2 * t) / a.h), l = l > this._private.maxZoom ? this._private.maxZoom : l, l = l < this._private.minZoom ? this._private.minZoom : l;
                    var u = {
                        x: (s - l * (a.x1 + a.x2)) / 2,
                        y: (o - l * (a.y1 + a.y2)) / 2
                    };
                    return {
                        zoom: l,
                        pan: u
                    };
                }
            }
        }
    }, "getFitViewport"),
    zoomRange: /*#__PURE__*/ m$1(function(e, t) {
        var a = this._private;
        if (t == null) {
            var n = e;
            e = n.min, t = n.max;
        }
        return ne(e) && ne(t) && e <= t ? (a.minZoom = e, a.maxZoom = t) : ne(e) && t === void 0 && e <= a.maxZoom ? a.minZoom = e : ne(t) && e === void 0 && t >= a.minZoom && (a.maxZoom = t), this;
    }, "zoomRange"),
    minZoom: /*#__PURE__*/ m$1(function(e) {
        return e === void 0 ? this._private.minZoom : this.zoomRange({
            min: e
        });
    }, "minZoom"),
    maxZoom: /*#__PURE__*/ m$1(function(e) {
        return e === void 0 ? this._private.maxZoom : this.zoomRange({
            max: e
        });
    }, "maxZoom"),
    getZoomedViewport: /*#__PURE__*/ m$1(function(e) {
        var t = this._private, a = t.pan, n = t.zoom, i, s, o = false;
        if (t.zoomingEnabled || (o = true), ne(e) ? s = e : Ie(e) && (s = e.level, e.position != null ? i = /*#__PURE__*/ Nn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !t.panningEnabled && (o = true)), s = s > t.maxZoom ? t.maxZoom : s, s = s < t.minZoom ? t.minZoom : s, o || !ne(s) || s === n || i != null && (!ne(i.x) || !ne(i.y))) return null;
        if (i != null) {
            var l = a, u = n, f = s, c = {
                x: -f / u * (i.x - l.x) + i.x,
                y: -f / u * (i.y - l.y) + i.y
            };
            return {
                zoomed: true,
                panned: true,
                zoom: f,
                pan: c
            };
        } else return {
            zoomed: true,
            panned: false,
            zoom: s,
            pan: a
        };
    }, "getZoomedViewport"),
    zoom: /*#__PURE__*/ m$1(function(e) {
        if (e === void 0) return this._private.zoom;
        var t = /*#__PURE__*/ this.getZoomedViewport(e), a = this._private;
        return t == null || !t.zoomed ? this : (a.zoom = t.zoom, t.panned && (a.pan.x = t.pan.x, a.pan.y = t.pan.y), this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
    }, "zoom"),
    viewport: /*#__PURE__*/ m$1(function(e) {
        var t = this._private, a = true, n = true, i = [], s = false, o = false;
        if (!e) return this;
        if (ne(e.zoom) || (a = false), Ie(e.pan) || (n = false), !a && !n) return this;
        if (a) {
            var l = e.zoom;
            l < t.minZoom || l > t.maxZoom || !t.zoomingEnabled ? s = true : (t.zoom = l, i.push("zoom"));
        }
        if (n && (!s || !e.cancelOnFailedZoom) && t.panningEnabled) {
            var u = e.pan;
            ne(u.x) && (t.pan.x = u.x, o = false), ne(u.y) && (t.pan.y = u.y, o = false), o || i.push("pan");
        }
        return i.length > 0 && (i.push("viewport"), this.emit(/*#__PURE__*/ i.join(" ")), this.notify("viewport")), this;
    }, "viewport"),
    center: /*#__PURE__*/ m$1(function(e) {
        var t = /*#__PURE__*/ this.getCenterPan(e);
        return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
    }, "center"),
    getCenterPan: /*#__PURE__*/ m$1(function(e, t) {
        if (this._private.panningEnabled) {
            if (pe(e)) {
                var a = e;
                e = /*#__PURE__*/ this.mutableElements().filter(a);
            } else Br(e) || (e = /*#__PURE__*/ this.mutableElements());
            if (e.length !== 0) {
                var n = /*#__PURE__*/ e.boundingBox(), i = /*#__PURE__*/ this.width(), s = /*#__PURE__*/ this.height();
                t = t === void 0 ? this._private.zoom : t;
                var o = {
                    x: (i - t * (n.x1 + n.x2)) / 2,
                    y: (s - t * (n.y1 + n.y2)) / 2
                };
                return o;
            }
        }
    }, "getCenterPan"),
    reset: /*#__PURE__*/ m$1(function() {
        return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
            pan: {
                x: 0,
                y: 0
            },
            zoom: 1
        }), this);
    }, "reset"),
    invalidateSize: /*#__PURE__*/ m$1(function() {
        this._private.sizeCache = null;
    }, "invalidateSize"),
    size: /*#__PURE__*/ m$1(function() {
        var e = this._private, t = e.container, a = this;
        return e.sizeCache = e.sizeCache || (t ? function() {
            var n = /*#__PURE__*/ a.window().getComputedStyle(t), i = /*#__PURE__*/ m$1(function(o) {
                return parseFloat(/*#__PURE__*/ n.getPropertyValue(o));
            }, "val");
            return {
                width: t.clientWidth - i("padding-left") - i("padding-right"),
                height: t.clientHeight - i("padding-top") - i("padding-bottom")
            };
        }() : {
            width: 1,
            height: 1
        });
    }, "size"),
    width: /*#__PURE__*/ m$1(function() {
        return this.size().width;
    }, "width"),
    height: /*#__PURE__*/ m$1(function() {
        return this.size().height;
    }, "height"),
    extent: /*#__PURE__*/ m$1(function() {
        var e = this._private.pan, t = this._private.zoom, a = /*#__PURE__*/ this.renderedExtent(), n = {
            x1: (a.x1 - e.x) / t,
            x2: (a.x2 - e.x) / t,
            y1: (a.y1 - e.y) / t,
            y2: (a.y2 - e.y) / t
        };
        return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
    }, "extent"),
    renderedExtent: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.width(), t = /*#__PURE__*/ this.height();
        return {
            x1: 0,
            y1: 0,
            x2: e,
            y2: t,
            w: e,
            h: t
        };
    }, "renderedExtent"),
    multiClickDebounceTime: /*#__PURE__*/ m$1(function(e) {
        if (e) this._private.multiClickDebounceTime = e;
        else return this._private.multiClickDebounceTime;
        return this;
    }, "multiClickDebounceTime")
};
Mt.centre = Mt.center;
Mt.autolockNodes = Mt.autolock;
Mt.autoungrabifyNodes = Mt.autoungrabify;
var Ra = {
    data: /*#__PURE__*/ Ve.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: true,
        allowSetting: true,
        settingEvent: "data",
        settingTriggersEvent: true,
        triggerFnName: "trigger",
        allowGetting: true,
        updateStyle: true
    }),
    removeData: /*#__PURE__*/ Ve.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    }),
    scratch: /*#__PURE__*/ Ve.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: true,
        allowSetting: true,
        settingEvent: "scratch",
        settingTriggersEvent: true,
        triggerFnName: "trigger",
        allowGetting: true,
        updateStyle: true
    }),
    removeScratch: /*#__PURE__*/ Ve.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    })
};
Ra.attr = Ra.data;
Ra.removeAttr = Ra.removeData;
var Ma = /*#__PURE__*/ m$1(function(e) {
    var t = this;
    e = /*#__PURE__*/ we({}, e);
    var a = e.container;
    a && !wn(a) && wn(a[0]) && (a = a[0]);
    var n = a ? a._cyreg : null;
    n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
    var i = n.readies = n.readies || [];
    a && (a._cyreg = n), n.cy = t;
    var s = tr !== void 0 && a !== void 0 && !e.headless, o = e;
    o.layout = /*#__PURE__*/ we({
        name: s ? "grid" : "null"
    }, o.layout), o.renderer = /*#__PURE__*/ we({
        name: s ? "canvas" : "null"
    }, o.renderer);
    var l = /*#__PURE__*/ m$1(function(h, m, p) {
        return m !== void 0 ? m : p !== void 0 ? p : h;
    }, "defVal"), u = this._private = {
        container: a,
        ready: false,
        options: o,
        elements: new cr(this),
        listeners: [],
        aniEles: new cr(this),
        data: o.data || {},
        scratch: {},
        layout: null,
        renderer: null,
        destroyed: false,
        notificationsEnabled: true,
        minZoom: 1e-50,
        maxZoom: 1e50,
        zoomingEnabled: /*#__PURE__*/ l(true, o.zoomingEnabled),
        userZoomingEnabled: /*#__PURE__*/ l(true, o.userZoomingEnabled),
        panningEnabled: /*#__PURE__*/ l(true, o.panningEnabled),
        userPanningEnabled: /*#__PURE__*/ l(true, o.userPanningEnabled),
        boxSelectionEnabled: /*#__PURE__*/ l(true, o.boxSelectionEnabled),
        autolock: /*#__PURE__*/ l(false, o.autolock, o.autolockNodes),
        autoungrabify: /*#__PURE__*/ l(false, o.autoungrabify, o.autoungrabifyNodes),
        autounselectify: /*#__PURE__*/ l(false, o.autounselectify),
        styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
        zoom: ne(o.zoom) ? o.zoom : 1,
        pan: {
            x: Ie(o.pan) && ne(o.pan.x) ? o.pan.x : 0,
            y: Ie(o.pan) && ne(o.pan.y) ? o.pan.y : 0
        },
        animation: {
            current: [],
            queue: []
        },
        hasCompoundNodes: false,
        multiClickDebounceTime: /*#__PURE__*/ l(250, o.multiClickDebounceTime)
    };
    this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
        min: o.minZoom,
        max: o.maxZoom
    });
    var f = /*#__PURE__*/ m$1(function(h, m) {
        var p = /*#__PURE__*/ h.some(yc);
        if (p) return aa.all(h).then(m);
        m(h);
    }, "loadExtData");
    u.styleEnabled && t.setStyle([]);
    var c = /*#__PURE__*/ we({}, o, o.renderer);
    t.initRenderer(c);
    var d = /*#__PURE__*/ m$1(function(h, m, p) {
        t.notifications(false);
        var y = /*#__PURE__*/ t.mutableElements();
        y.length > 0 && y.remove(), h != null && (Ie(h) || Ge(h)) && t.add(h), t.one("layoutready", function(w) {
            t.notifications(true), t.emit(w), t.one("load", m), t.emitAndNotify("load");
        }).one("layoutstop", function() {
            t.one("done", p), t.emit("done");
        });
        var b1 = /*#__PURE__*/ we({}, t._private.options.layout);
        b1.eles = /*#__PURE__*/ t.elements(), t.layout(b1).run();
    }, "setElesAndLayout");
    f([
        o.style,
        o.elements
    ], function(g) {
        var h = g[0], m = g[1];
        u.styleEnabled && t.style().append(h), d(m, function() {
            t.startAnimationLoop(), u.ready = true, Ke(o.ready) && t.on("ready", o.ready);
            for(var p = 0; p < i.length; p++){
                var y = i[p];
                t.on("ready", y);
            }
            n && (n.readies = []), t.emit("ready");
        }, o.done);
    });
}, "Core"), Dn = Ma.prototype;
we(Dn, {
    instanceString: /*#__PURE__*/ m$1(function() {
        return "core";
    }, "instanceString"),
    isReady: /*#__PURE__*/ m$1(function() {
        return this._private.ready;
    }, "isReady"),
    destroyed: /*#__PURE__*/ m$1(function() {
        return this._private.destroyed;
    }, "destroyed"),
    ready: /*#__PURE__*/ m$1(function(e) {
        return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
    }, "ready"),
    destroy: /*#__PURE__*/ m$1(function() {
        var e = this;
        if (!e.destroyed()) return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = true, e;
    }, "destroy"),
    hasElementWithId: /*#__PURE__*/ m$1(function(e) {
        return this._private.elements.hasElementWithId(e);
    }, "hasElementWithId"),
    getElementById: /*#__PURE__*/ m$1(function(e) {
        return this._private.elements.getElementById(e);
    }, "getElementById"),
    hasCompoundNodes: /*#__PURE__*/ m$1(function() {
        return this._private.hasCompoundNodes;
    }, "hasCompoundNodes"),
    headless: /*#__PURE__*/ m$1(function() {
        return this._private.renderer.isHeadless();
    }, "headless"),
    styleEnabled: /*#__PURE__*/ m$1(function() {
        return this._private.styleEnabled;
    }, "styleEnabled"),
    addToPool: /*#__PURE__*/ m$1(function(e) {
        return this._private.elements.merge(e), this;
    }, "addToPool"),
    removeFromPool: /*#__PURE__*/ m$1(function(e) {
        return this._private.elements.unmerge(e), this;
    }, "removeFromPool"),
    container: /*#__PURE__*/ m$1(function() {
        return this._private.container || null;
    }, "container"),
    window: /*#__PURE__*/ m$1(function() {
        var e = this._private.container;
        if (e == null) return tr;
        var t = this._private.container.ownerDocument;
        return t === void 0 || t == null ? tr : t.defaultView || tr;
    }, "window"),
    mount: /*#__PURE__*/ m$1(function(e) {
        if (e != null) {
            var t = this, a = t._private, n = a.options;
            return !wn(e) && wn(e[0]) && (e = e[0]), t.stopAnimationLoop(), t.destroyRenderer(), a.container = e, a.styleEnabled = true, t.invalidateSize(), t.initRenderer(/*#__PURE__*/ we({}, n, n.renderer, {
                name: n.renderer.name === "null" ? "canvas" : n.renderer.name
            })), t.startAnimationLoop(), t.style(n.style), t.emit("mount"), t;
        }
    }, "mount"),
    unmount: /*#__PURE__*/ m$1(function() {
        var e = this;
        return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
            name: "null"
        }), e.emit("unmount"), e;
    }, "unmount"),
    options: /*#__PURE__*/ m$1(function() {
        return _r(this._private.options);
    }, "options"),
    json: /*#__PURE__*/ m$1(function(e) {
        var t = this, a = t._private, n = /*#__PURE__*/ t.mutableElements(), i = /*#__PURE__*/ m$1(function(x) {
            return t.getElementById(/*#__PURE__*/ x.id());
        }, "getFreshRef");
        if (Ie(e)) {
            if (t.startBatch(), e.elements) {
                var s = {}, o = /*#__PURE__*/ m$1(function(x, C) {
                    for(var T = [], E = [], S = 0; S < x.length; S++){
                        var D = x[S];
                        if (!D.data.id) {
                            qe("cy.json() cannot handle elements without an ID attribute");
                            continue;
                        }
                        var B = "" + D.data.id, P = /*#__PURE__*/ t.getElementById(B);
                        s[B] = true, P.length !== 0 ? E.push({
                            ele: P,
                            json: D
                        }) : (C && (D.group = C), T.push(D));
                    }
                    t.add(T);
                    for(var A = 0; A < E.length; A++){
                        var R = E[A], M = R.ele, I = R.json;
                        M.json(I);
                    }
                }, "updateEles");
                if (Ge(e.elements)) o(e.elements);
                else for(var l = [
                    "nodes",
                    "edges"
                ], u = 0; u < l.length; u++){
                    var f = l[u], c = e.elements[f];
                    Ge(c) && o(c, f);
                }
                var d = /*#__PURE__*/ t.collection();
                n.filter(function(w) {
                    return !s[w.id()];
                }).forEach(function(w) {
                    w.isParent() ? d.merge(w) : w.remove();
                }), d.forEach(function(w) {
                    return w.children().move({
                        parent: null
                    });
                }), d.forEach(function(w) {
                    return i(w).remove();
                });
            }
            e.style && t.style(e.style), e.zoom != null && e.zoom !== a.zoom && t.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && t.pan(e.pan), e.data && t.data(e.data);
            for(var g = [
                "minZoom",
                "maxZoom",
                "zoomingEnabled",
                "userZoomingEnabled",
                "panningEnabled",
                "userPanningEnabled",
                "boxSelectionEnabled",
                "autolock",
                "autoungrabify",
                "autounselectify",
                "multiClickDebounceTime"
            ], h = 0; h < g.length; h++){
                var m = g[h];
                e[m] != null && t[m](e[m]);
            }
            return t.endBatch(), this;
        } else {
            var p = !!e, y = {};
            p ? y.elements = /*#__PURE__*/ this.elements().map(function(w) {
                return w.json();
            }) : (y.elements = {}, n.forEach(function(w) {
                var x = /*#__PURE__*/ w.group();
                y.elements[x] || (y.elements[x] = []), y.elements[x].push(/*#__PURE__*/ w.json());
            })), this._private.styleEnabled && (y.style = /*#__PURE__*/ t.style().json()), y.data = /*#__PURE__*/ _r(/*#__PURE__*/ t.data());
            var b1 = a.options;
            return y.zoomingEnabled = a.zoomingEnabled, y.userZoomingEnabled = a.userZoomingEnabled, y.zoom = a.zoom, y.minZoom = a.minZoom, y.maxZoom = a.maxZoom, y.panningEnabled = a.panningEnabled, y.userPanningEnabled = a.userPanningEnabled, y.pan = /*#__PURE__*/ _r(a.pan), y.boxSelectionEnabled = a.boxSelectionEnabled, y.renderer = /*#__PURE__*/ _r(b1.renderer), y.hideEdgesOnViewport = b1.hideEdgesOnViewport, y.textureOnViewport = b1.textureOnViewport, y.wheelSensitivity = b1.wheelSensitivity, y.motionBlur = b1.motionBlur, y.multiClickDebounceTime = b1.multiClickDebounceTime, y;
        }
    }, "json")
});
Dn.$id = Dn.getElementById;
[
    yp,
    Ep,
    af,
    Fs,
    hn,
    Tp,
    Vs,
    gn,
    Dp,
    Mt,
    Ra
].forEach(function(r) {
    we(Dn, r);
});
var Pp = {
    fit: true,
    directed: false,
    direction: "downward",
    padding: 30,
    circle: false,
    grid: false,
    spacingFactor: 1.75,
    boundingBox: void 0,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    roots: void 0,
    depthSort: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, t) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, t) {
        return t;
    }, "transform")
}, Ap = {
    maximal: false,
    acyclic: false
}, qt = /*#__PURE__*/ m$1(function(e) {
    return e.scratch("breadthfirst");
}, "getInfo"), Sl = /*#__PURE__*/ m$1(function(e, t) {
    return e.scratch("breadthfirst", t);
}, "setInfo");
function nf(r) {
    this.options = /*#__PURE__*/ we({}, Pp, Ap, r);
}
m$1(nf, "BreadthFirstLayout");
nf.prototype.run = function() {
    var r = this.options, e = r.cy, t = r.eles, a = /*#__PURE__*/ t.nodes().filter(function(me) {
        return me.isChildless();
    }), n = t, i = r.directed, s = r.acyclic || r.maximal || r.maximalAdjustments > 0, o = !!r.boundingBox, l = /*#__PURE__*/ xr(o ? r.boundingBox : structuredClone(/*#__PURE__*/ e.extent())), u;
    if (Br(r.roots)) u = r.roots;
    else if (Ge(r.roots)) {
        for(var f = [], c = 0; c < r.roots.length; c++){
            var d = r.roots[c], g = /*#__PURE__*/ e.getElementById(d);
            f.push(g);
        }
        u = /*#__PURE__*/ e.collection(f);
    } else if (pe(r.roots)) u = /*#__PURE__*/ e.$(r.roots);
    else if (i) u = /*#__PURE__*/ a.roots();
    else {
        var h = /*#__PURE__*/ t.components();
        u = /*#__PURE__*/ e.collection();
        for(var m = /*#__PURE__*/ m$1(function() {
            var se = h[p], he = /*#__PURE__*/ se.maxDegree(false), ge = /*#__PURE__*/ se.filter(function(Ce) {
                return Ce.degree(false) === he;
            });
            u = /*#__PURE__*/ u.add(ge);
        }, "_loop"), p = 0; p < h.length; p++)m();
    }
    var y = [], b1 = {}, w = /*#__PURE__*/ m$1(function(se, he) {
        y[he] == null && (y[he] = []);
        var ge = y[he].length;
        y[he].push(se), Sl(se, {
            index: ge,
            depth: he
        });
    }, "addToDepth"), x = /*#__PURE__*/ m$1(function(se, he) {
        var ge = /*#__PURE__*/ qt(se), Ce = ge.depth, ye = ge.index;
        y[Ce][ye] = null, se.isChildless() && w(se, he);
    }, "changeDepth");
    n.bfs({
        roots: u,
        directed: r.directed,
        visit: /*#__PURE__*/ m$1(function(se, he, ge, Ce, ye) {
            var ke = se[0], Me = /*#__PURE__*/ ke.id();
            ke.isChildless() && w(ke, ye), b1[Me] = true;
        }, "visit")
    });
    for(var C = [], T = 0; T < a.length; T++){
        var E = a[T];
        b1[E.id()] || C.push(E);
    }
    var S = /*#__PURE__*/ m$1(function(se) {
        for(var he = y[se], ge = 0; ge < he.length; ge++){
            var Ce = he[ge];
            if (Ce == null) {
                he.splice(ge, 1), ge--;
                continue;
            }
            Sl(Ce, {
                depth: se,
                index: ge
            });
        }
    }, "assignDepthsAt"), D = /*#__PURE__*/ m$1(function(se, he) {
        for(var ge = /*#__PURE__*/ qt(se), Ce = /*#__PURE__*/ se.incomers().filter(function(Ee) {
            return Ee.isNode() && t.has(Ee);
        }), ye = -1, ke = /*#__PURE__*/ se.id(), Me = 0; Me < Ce.length; Me++){
            var Ne = Ce[Me], ze = /*#__PURE__*/ qt(Ne);
            ye = /*#__PURE__*/ Math.max(ye, ze.depth);
        }
        if (ge.depth <= ye) {
            if (!r.acyclic && he[ke]) return null;
            var Fe = ye + 1;
            return x(se, Fe), he[ke] = Fe, true;
        }
        return false;
    }, "adjustMaximally");
    if (i && s) {
        var B = [], P = {}, A = /*#__PURE__*/ m$1(function(se) {
            return B.push(se);
        }, "enqueue"), R = /*#__PURE__*/ m$1(function() {
            return B.shift();
        }, "dequeue");
        for(a.forEach(function(me) {
            return B.push(me);
        }); B.length > 0;){
            var M = /*#__PURE__*/ R(), I = /*#__PURE__*/ D(M, P);
            if (I) M.outgoers().filter(function(me) {
                return me.isNode() && t.has(me);
            }).forEach(A);
            else if (I === null) {
                qe("Detected double maximal shift for node `" + M.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
                break;
            }
        }
    }
    var O = 0;
    if (r.avoidOverlap) for(var L = 0; L < a.length; L++){
        var N = a[L], q = /*#__PURE__*/ N.layoutDimensions(r), H = q.w, z = q.h;
        O = /*#__PURE__*/ Math.max(O, H, z);
    }
    var V = {}, K = /*#__PURE__*/ m$1(function(se) {
        if (V[se.id()]) return V[se.id()];
        for(var he = qt(se).depth, ge = /*#__PURE__*/ se.neighborhood(), Ce = 0, ye = 0, ke = 0; ke < ge.length; ke++){
            var Me = ge[ke];
            if (!(Me.isEdge() || Me.isParent() || !a.has(Me))) {
                var Ne = /*#__PURE__*/ qt(Me);
                if (Ne != null) {
                    var ze = Ne.index, Fe = Ne.depth;
                    if (!(ze == null || Fe == null)) {
                        var Ee = y[Fe].length;
                        Fe < he && (Ce += ze / Ee, ye++);
                    }
                }
            }
        }
        return ye = /*#__PURE__*/ Math.max(1, ye), Ce = Ce / ye, ye === 0 && (Ce = 0), V[se.id()] = Ce, Ce;
    }, "getWeightedPercent"), J = /*#__PURE__*/ m$1(function(se, he) {
        var ge = /*#__PURE__*/ K(se), Ce = /*#__PURE__*/ K(he), ye = ge - Ce;
        return ye === 0 ? iv(/*#__PURE__*/ se.id(), /*#__PURE__*/ he.id()) : ye;
    }, "sortFn");
    r.depthSort !== void 0 && (J = r.depthSort);
    for(var X = y.length, ee = 0; ee < X; ee++)y[ee].sort(J), S(ee);
    for(var te = [], ie = 0; ie < C.length; ie++)te.push(C[ie]);
    var j = /*#__PURE__*/ m$1(function() {
        for(var se = 0; se < X; se++)S(se);
    }, "assignDepths");
    te.length && (y.unshift(te), X = y.length, j());
    for(var F = 0, _ = 0; _ < X; _++)F = /*#__PURE__*/ Math.max(y[_].length, F);
    var W = {
        x: l.x1 + l.w / 2,
        y: l.y1 + l.h / 2
    }, Z = /*#__PURE__*/ a.reduce(function(me, se) {
        return function(he) {
            return {
                w: me.w === -1 ? he.w : (me.w + he.w) / 2,
                h: me.h === -1 ? he.h : (me.h + he.h) / 2
            };
        }(/*#__PURE__*/ se.boundingBox({
            includeLabels: r.nodeDimensionsIncludeLabels
        }));
    }, {
        w: -1,
        h: -1
    }), ae = /*#__PURE__*/ Math.max(X === 1 ? 0 : o ? (l.h - r.padding * 2 - Z.h) / (X - 1) : (l.h - r.padding * 2 - Z.h) / (X + 1), O), de = /*#__PURE__*/ y.reduce(function(me, se) {
        return Math.max(me, se.length);
    }, 0), Re = /*#__PURE__*/ m$1(function(se) {
        var he = /*#__PURE__*/ qt(se), ge = he.depth, Ce = he.index;
        if (r.circle) {
            var ye = /*#__PURE__*/ Math.min(l.w / 2 / X, l.h / 2 / X);
            ye = /*#__PURE__*/ Math.max(ye, O);
            var ke = ye * ge + ye - (X > 0 && y[0].length <= 3 ? ye / 2 : 0), Me = 2 * Math.PI / y[ge].length * Ce;
            return ge === 0 && y[0].length === 1 && (ke = 1), {
                x: W.x + ke * Math.cos(Me),
                y: W.y + ke * Math.sin(Me)
            };
        } else {
            var Ne = y[ge].length, ze = /*#__PURE__*/ Math.max(Ne === 1 ? 0 : o ? (l.w - r.padding * 2 - Z.w) / ((r.grid ? de : Ne) - 1) : (l.w - r.padding * 2 - Z.w) / ((r.grid ? de : Ne) + 1), O), Fe = {
                x: W.x + (Ce + 1 - (Ne + 1) / 2) * ze,
                y: W.y + (ge + 1 - (X + 1) / 2) * ae
            };
            return Fe;
        }
    }, "getPositionTopBottom"), Te = {
        downward: 0,
        leftward: 90,
        upward: 180,
        rightward: -90
    };
    Object.keys(Te).indexOf(r.direction) === -1 && Ue(/*#__PURE__*/ "Invalid direction '".concat(r.direction, "' specified for breadthfirst layout. Valid values are: ").concat(/*#__PURE__*/ Object.keys(Te).join(", ")));
    var xe = /*#__PURE__*/ m$1(function(se) {
        return Uc(/*#__PURE__*/ Re(se), l, Te[r.direction]);
    }, "getPosition");
    return t.nodes().layoutPositions(this, r, xe), this;
};
var Rp = {
    fit: true,
    padding: 30,
    boundingBox: void 0,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    spacingFactor: void 0,
    radius: void 0,
    startAngle: 3 / 2 * Math.PI,
    sweep: void 0,
    clockwise: true,
    sort: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, t) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, t) {
        return t;
    }, "transform")
};
function sf(r) {
    this.options = /*#__PURE__*/ we({}, Rp, r);
}
m$1(sf, "CircleLayout");
sf.prototype.run = function() {
    var r = this.options, e = r, t = r.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = /*#__PURE__*/ a.nodes().not(":parent");
    e.sort && (i = /*#__PURE__*/ i.sort(e.sort));
    for(var s = /*#__PURE__*/ xr(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: /*#__PURE__*/ t.width(),
        h: /*#__PURE__*/ t.height()
    }), o = {
        x: s.x1 + s.w / 2,
        y: s.y1 + s.h / 2
    }, l = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, u = l / Math.max(1, i.length - 1), f, c = 0, d = 0; d < i.length; d++){
        var g = i[d], h = /*#__PURE__*/ g.layoutDimensions(e), m = h.w, p = h.h;
        c = /*#__PURE__*/ Math.max(c, m, p);
    }
    if (ne(e.radius) ? f = e.radius : i.length <= 1 ? f = 0 : f = Math.min(s.h, s.w) / 2 - c, i.length > 1 && e.avoidOverlap) {
        c *= 1.75;
        var y = Math.cos(u) - Math.cos(0), b1 = Math.sin(u) - Math.sin(0), w = /*#__PURE__*/ Math.sqrt(c * c / (y * y + b1 * b1));
        f = /*#__PURE__*/ Math.max(w, f);
    }
    var x = /*#__PURE__*/ m$1(function(T, E) {
        var S = e.startAngle + E * u * (n ? 1 : -1), D = f * Math.cos(S), B = f * Math.sin(S), P = {
            x: o.x + D,
            y: o.y + B
        };
        return P;
    }, "getPos");
    return a.nodes().layoutPositions(this, e, x), this;
};
var Mp = {
    fit: true,
    padding: 30,
    startAngle: 3 / 2 * Math.PI,
    sweep: void 0,
    clockwise: true,
    equidistant: false,
    minNodeSpacing: 10,
    boundingBox: void 0,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    height: void 0,
    width: void 0,
    spacingFactor: void 0,
    concentric: /*#__PURE__*/ m$1(function(e) {
        return e.degree();
    }, "concentric"),
    levelWidth: /*#__PURE__*/ m$1(function(e) {
        return e.maxDegree() / 4;
    }, "levelWidth"),
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, t) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, t) {
        return t;
    }, "transform")
};
function of(r) {
    this.options = /*#__PURE__*/ we({}, Mp, r);
}
m$1(of, "ConcentricLayout");
of.prototype.run = function() {
    for(var r = this.options, e = r, t = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = r.cy, n = e.eles, i = /*#__PURE__*/ n.nodes().not(":parent"), s = /*#__PURE__*/ xr(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: /*#__PURE__*/ a.width(),
        h: /*#__PURE__*/ a.height()
    }), o = {
        x: s.x1 + s.w / 2,
        y: s.y1 + s.h / 2
    }, l = [], u = 0, f = 0; f < i.length; f++){
        var c = i[f], d = void 0;
        d = /*#__PURE__*/ e.concentric(c), l.push({
            value: d,
            node: c
        }), c._private.scratch.concentric = d;
    }
    i.updateStyle();
    for(var g = 0; g < i.length; g++){
        var h = i[g], m = /*#__PURE__*/ h.layoutDimensions(e);
        u = /*#__PURE__*/ Math.max(u, m.w, m.h);
    }
    l.sort(function(ae, de) {
        return de.value - ae.value;
    });
    for(var p = /*#__PURE__*/ e.levelWidth(i), y = [
        []
    ], b1 = y[0], w = 0; w < l.length; w++){
        var x = l[w];
        if (b1.length > 0) {
            var C = /*#__PURE__*/ Math.abs(b1[0].value - x.value);
            C >= p && (b1 = [], y.push(b1));
        }
        b1.push(x);
    }
    var T = u + e.minNodeSpacing;
    if (!e.avoidOverlap) {
        var E = y.length > 0 && y[0].length > 1, S = Math.min(s.w, s.h) / 2 - T, D = S / (y.length + E ? 1 : 0);
        T = /*#__PURE__*/ Math.min(T, D);
    }
    for(var B = 0, P = 0; P < y.length; P++){
        var A = y[P], R = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / A.length : e.sweep, M = A.dTheta = R / Math.max(1, A.length - 1);
        if (A.length > 1 && e.avoidOverlap) {
            var I = Math.cos(M) - Math.cos(0), O = Math.sin(M) - Math.sin(0), L = /*#__PURE__*/ Math.sqrt(T * T / (I * I + O * O));
            B = /*#__PURE__*/ Math.max(L, B);
        }
        A.r = B, B += T;
    }
    if (e.equidistant) {
        for(var N = 0, q = 0, H = 0; H < y.length; H++){
            var z = y[H], V = z.r - q;
            N = /*#__PURE__*/ Math.max(N, V);
        }
        q = 0;
        for(var K = 0; K < y.length; K++){
            var J = y[K];
            K === 0 && (q = J.r), J.r = q, q += N;
        }
    }
    for(var X = {}, ee = 0; ee < y.length; ee++)for(var te = y[ee], ie = te.dTheta, j = te.r, F = 0; F < te.length; F++){
        var _ = te[F], W = e.startAngle + (t ? 1 : -1) * ie * F, Z = {
            x: o.x + j * Math.cos(W),
            y: o.y + j * Math.sin(W)
        };
        X[_.node.id()] = Z;
    }
    return n.nodes().layoutPositions(this, e, function(ae) {
        var de = /*#__PURE__*/ ae.id();
        return X[de];
    }), this;
};
var ws, Lp = {
    ready: /*#__PURE__*/ m$1(function() {}, "ready"),
    stop: /*#__PURE__*/ m$1(function() {}, "stop"),
    animate: true,
    animationEasing: void 0,
    animationDuration: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, t) {
        return true;
    }, "animateFilter"),
    animationThreshold: 250,
    refresh: 20,
    fit: true,
    padding: 30,
    boundingBox: void 0,
    nodeDimensionsIncludeLabels: false,
    randomize: false,
    componentSpacing: 40,
    nodeRepulsion: /*#__PURE__*/ m$1(function(e) {
        return 2048;
    }, "nodeRepulsion"),
    nodeOverlap: 4,
    idealEdgeLength: /*#__PURE__*/ m$1(function(e) {
        return 32;
    }, "idealEdgeLength"),
    edgeElasticity: /*#__PURE__*/ m$1(function(e) {
        return 32;
    }, "edgeElasticity"),
    nestingFactor: 1.2,
    gravity: 1,
    numIter: 1e3,
    initialTemp: 1e3,
    coolingFactor: .99,
    minTemp: 1
};
function Xn(r) {
    this.options = /*#__PURE__*/ we({}, Lp, r), this.options.layout = this;
    var e = /*#__PURE__*/ this.options.eles.nodes(), t = /*#__PURE__*/ this.options.eles.edges(), a = /*#__PURE__*/ t.filter(function(n) {
        var i = /*#__PURE__*/ n.source().data("id"), s = /*#__PURE__*/ n.target().data("id"), o = /*#__PURE__*/ e.some(function(u) {
            return u.data("id") === i;
        }), l = /*#__PURE__*/ e.some(function(u) {
            return u.data("id") === s;
        });
        return !o || !l;
    });
    this.options.eles = /*#__PURE__*/ this.options.eles.not(a);
}
m$1(Xn, "CoseLayout");
Xn.prototype.run = function() {
    var r = this.options, e = r.cy, t = this;
    t.stopped = false, (r.animate === true || r.animate === false) && t.emit({
        type: "layoutstart",
        layout: t
    }), r.debug === true ? ws = true : ws = false;
    var a = /*#__PURE__*/ Ip(e, t, r);
    ws && Np(a), r.randomize && zp(a);
    var n = /*#__PURE__*/ Zr(), i = /*#__PURE__*/ m$1(function() {
        Fp(a, e, r), r.fit === true && e.fit(r.padding);
    }, "refresh"), s = /*#__PURE__*/ m$1(function(d) {
        return !(t.stopped || d >= r.numIter || (Vp(a, r), a.temperature = a.temperature * r.coolingFactor, a.temperature < r.minTemp));
    }, "mainLoop"), o = /*#__PURE__*/ m$1(function() {
        if (r.animate === true || r.animate === false) i(), t.one("layoutstop", r.stop), t.emit({
            type: "layoutstop",
            layout: t
        });
        else {
            var d = /*#__PURE__*/ r.eles.nodes(), g = /*#__PURE__*/ lf(a, r, d);
            d.layoutPositions(t, r, g);
        }
    }, "done"), l = 0, u = true;
    if (r.animate === true) {
        var f = m$1(function() {
            for(var d = 0; u && d < r.refresh;)u = /*#__PURE__*/ s(l), l++, d++;
            if (!u) Dl(a, r), o();
            else {
                var g = /*#__PURE__*/ Zr();
                g - n >= r.animationThreshold && i(), xn(f);
            }
        }, "frame");
        f();
    } else {
        for(; u;)u = /*#__PURE__*/ s(l), l++;
        Dl(a, r), o();
    }
    return this;
};
Xn.prototype.stop = function() {
    return this.stopped = true, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
Xn.prototype.destroy = function() {
    return this.thread && this.thread.stop(), this;
};
var Ip = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = /*#__PURE__*/ a.eles.edges(), i = /*#__PURE__*/ a.eles.nodes(), s = /*#__PURE__*/ xr(a.boundingBox ? a.boundingBox : {
        x1: 0,
        y1: 0,
        w: /*#__PURE__*/ e.width(),
        h: /*#__PURE__*/ e.height()
    }), o = {
        isCompound: /*#__PURE__*/ e.hasCompoundNodes(),
        layoutNodes: [],
        idToIndex: {},
        nodeSize: /*#__PURE__*/ i.size(),
        graphSet: [],
        indexToGraph: [],
        layoutEdges: [],
        edgeSize: /*#__PURE__*/ n.size(),
        temperature: a.initialTemp,
        clientWidth: s.w,
        clientHeight: s.h,
        boundingBox: s
    }, l = /*#__PURE__*/ a.eles.components(), u = {}, f = 0; f < l.length; f++)for(var c = l[f], d = 0; d < c.length; d++){
        var g = c[d];
        u[g.id()] = f;
    }
    for(var f = 0; f < o.nodeSize; f++){
        var h = i[f], m = /*#__PURE__*/ h.layoutDimensions(a), p = {};
        p.isLocked = /*#__PURE__*/ h.locked(), p.id = /*#__PURE__*/ h.data("id"), p.parentId = /*#__PURE__*/ h.data("parent"), p.cmptId = u[h.id()], p.children = [], p.positionX = /*#__PURE__*/ h.position("x"), p.positionY = /*#__PURE__*/ h.position("y"), p.offsetX = 0, p.offsetY = 0, p.height = m.w, p.width = m.h, p.maxX = p.positionX + p.width / 2, p.minX = p.positionX - p.width / 2, p.maxY = p.positionY + p.height / 2, p.minY = p.positionY - p.height / 2, p.padLeft = /*#__PURE__*/ parseFloat(/*#__PURE__*/ h.style("padding")), p.padRight = /*#__PURE__*/ parseFloat(/*#__PURE__*/ h.style("padding")), p.padTop = /*#__PURE__*/ parseFloat(/*#__PURE__*/ h.style("padding")), p.padBottom = /*#__PURE__*/ parseFloat(/*#__PURE__*/ h.style("padding")), p.nodeRepulsion = Ke(a.nodeRepulsion) ? a.nodeRepulsion(h) : a.nodeRepulsion, o.layoutNodes.push(p), o.idToIndex[p.id] = f;
    }
    for(var y = [], b1 = 0, w = -1, x = [], f = 0; f < o.nodeSize; f++){
        var h = o.layoutNodes[f], C = h.parentId;
        C != null ? o.layoutNodes[o.idToIndex[C]].children.push(h.id) : (y[++w] = h.id, x.push(h.id));
    }
    for(o.graphSet.push(x); b1 <= w;){
        var T = y[b1++], E = o.idToIndex[T], g = o.layoutNodes[E], S = g.children;
        if (S.length > 0) {
            o.graphSet.push(S);
            for(var f = 0; f < S.length; f++)y[++w] = S[f];
        }
    }
    for(var f = 0; f < o.graphSet.length; f++)for(var D = o.graphSet[f], d = 0; d < D.length; d++){
        var B = o.idToIndex[D[d]];
        o.indexToGraph[B] = f;
    }
    for(var f = 0; f < o.edgeSize; f++){
        var P = n[f], A = {};
        A.id = /*#__PURE__*/ P.data("id"), A.sourceId = /*#__PURE__*/ P.data("source"), A.targetId = /*#__PURE__*/ P.data("target");
        var R = Ke(a.idealEdgeLength) ? a.idealEdgeLength(P) : a.idealEdgeLength, M = Ke(a.edgeElasticity) ? a.edgeElasticity(P) : a.edgeElasticity, I = o.idToIndex[A.sourceId], O = o.idToIndex[A.targetId], L = o.indexToGraph[I], N = o.indexToGraph[O];
        if (L != N) {
            for(var q = /*#__PURE__*/ Op(A.sourceId, A.targetId, o), H = o.graphSet[q], z = 0, p = o.layoutNodes[I]; H.indexOf(p.id) === -1;)p = o.layoutNodes[o.idToIndex[p.parentId]], z++;
            for(p = o.layoutNodes[O]; H.indexOf(p.id) === -1;)p = o.layoutNodes[o.idToIndex[p.parentId]], z++;
            R *= z * a.nestingFactor;
        }
        A.idealLength = R, A.elasticity = M, o.layoutEdges.push(A);
    }
    return o;
}, "createLayoutInfo"), Op = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = /*#__PURE__*/ uf(e, t, 0, a);
    return 2 > n.count ? 0 : n.graph;
}, "findLCA"), uf = m$1(function(e, t, a, n) {
    var i = n.graphSet[a];
    if (-1 < i.indexOf(e) && -1 < i.indexOf(t)) return {
        count: 2,
        graph: a
    };
    for(var s = 0, o = 0; o < i.length; o++){
        var l = i[o], u = n.idToIndex[l], f = n.layoutNodes[u].children;
        if (f.length !== 0) {
            var c = n.indexToGraph[n.idToIndex[f[0]]], d = /*#__PURE__*/ uf(e, t, c, n);
            if (d.count !== 0) if (d.count === 1) {
                if (s++, s === 2) break;
            } else return d;
        }
    }
    return {
        count: s,
        graph: a
    };
}, "findLCA_aux"), Np, zp = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++){
        var s = e.layoutNodes[i];
        s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
    }
}, "randomizePositions"), lf = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = e.boundingBox, i = {
        x1: 1 / 0,
        x2: -1 / 0,
        y1: 1 / 0,
        y2: -1 / 0
    };
    return t.boundingBox && (a.forEach(function(s) {
        var o = e.layoutNodes[e.idToIndex[s.data("id")]];
        i.x1 = /*#__PURE__*/ Math.min(i.x1, o.positionX), i.x2 = /*#__PURE__*/ Math.max(i.x2, o.positionX), i.y1 = /*#__PURE__*/ Math.min(i.y1, o.positionY), i.y2 = /*#__PURE__*/ Math.max(i.y2, o.positionY);
    }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
        var l = e.layoutNodes[e.idToIndex[s.data("id")]];
        if (t.boundingBox) {
            var u = i.w === 0 ? .5 : (l.positionX - i.x1) / i.w, f = i.h === 0 ? .5 : (l.positionY - i.y1) / i.h;
            return {
                x: n.x1 + u * n.w,
                y: n.y1 + f * n.h
            };
        } else return {
            x: l.positionX,
            y: l.positionY
        };
    };
}, "getScaleInBoundsFn"), Fp = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = a.layout, i = /*#__PURE__*/ a.eles.nodes(), s = /*#__PURE__*/ lf(e, a, i);
    i.positions(s), e.ready !== true && (e.ready = true, n.one("layoutready", a.ready), n.emit({
        type: "layoutready",
        layout: this
    }));
}, "refreshPositions"), Vp = /*#__PURE__*/ m$1(function(e, t, a) {
    qp(e, t), Hp(e), Wp(e, t), $p(e), Up(e);
}, "step"), qp = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = 0; a < e.graphSet.length; a++)for(var n = e.graphSet[a], i = n.length, s = 0; s < i; s++)for(var o = e.layoutNodes[e.idToIndex[n[s]]], l = s + 1; l < i; l++){
        var u = e.layoutNodes[e.idToIndex[n[l]]];
        _p(o, u, e, t);
    }
}, "calculateNodeForces"), kl = /*#__PURE__*/ m$1(function(e) {
    return -1 + 2 * e * Math.random();
}, "randomDistance"), _p = /*#__PURE__*/ m$1(function(e, t, a, n) {
    var i = e.cmptId, s = t.cmptId;
    if (!(i !== s && !a.isCompound)) {
        var o = t.positionX - e.positionX, l = t.positionY - e.positionY, u = 1;
        o === 0 && l === 0 && (o = /*#__PURE__*/ kl(u), l = /*#__PURE__*/ kl(u));
        var f = /*#__PURE__*/ Gp(e, t, o, l);
        if (f > 0) var c = n.nodeOverlap * f, d = /*#__PURE__*/ Math.sqrt(o * o + l * l), g = c * o / d, h = c * l / d;
        else var m = /*#__PURE__*/ Bn(e, o, l), p = /*#__PURE__*/ Bn(t, -1 * o, -1 * l), y = p.x - m.x, b1 = p.y - m.y, w = y * y + b1 * b1, d = /*#__PURE__*/ Math.sqrt(w), c = (e.nodeRepulsion + t.nodeRepulsion) / w, g = c * y / d, h = c * b1 / d;
        e.isLocked || (e.offsetX -= g, e.offsetY -= h), t.isLocked || (t.offsetX += g, t.offsetY += h);
    }
}, "nodeRepulsion"), Gp = /*#__PURE__*/ m$1(function(e, t, a, n) {
    if (a > 0) var i = e.maxX - t.minX;
    else var i = t.maxX - e.minX;
    if (n > 0) var s = e.maxY - t.minY;
    else var s = t.maxY - e.minY;
    return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
}, "nodesOverlap"), Bn = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, l = a / t, u = s / o, f = {};
    return t === 0 && 0 < a || t === 0 && 0 > a ? (f.x = n, f.y = i + s / 2, f) : 0 < t && -1 * u <= l && l <= u ? (f.x = n + o / 2, f.y = i + o * a / 2 / t, f) : 0 > t && -1 * u <= l && l <= u ? (f.x = n - o / 2, f.y = i - o * a / 2 / t, f) : 0 < a && (l <= -1 * u || l >= u) ? (f.x = n + s * t / 2 / a, f.y = i + s / 2, f) : (0 > a && (l <= -1 * u || l >= u) && (f.x = n - s * t / 2 / a, f.y = i - s / 2), f);
}, "findClippingPoint"), Hp = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = 0; a < e.edgeSize; a++){
        var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], l = e.layoutNodes[o], u = l.positionX - s.positionX, f = l.positionY - s.positionY;
        if (!(u === 0 && f === 0)) {
            var c = /*#__PURE__*/ Bn(s, u, f), d = /*#__PURE__*/ Bn(l, -1 * u, -1 * f), g = d.x - c.x, h = d.y - c.y, m = /*#__PURE__*/ Math.sqrt(g * g + h * h), p = Math.pow(n.idealLength - m, 2) / n.elasticity;
            if (m !== 0) var y = p * g / m, b1 = p * h / m;
            else var y = 0, b1 = 0;
            s.isLocked || (s.offsetX += y, s.offsetY += b1), l.isLocked || (l.offsetX -= y, l.offsetY -= b1);
        }
    }
}, "calculateEdgeForces"), Wp = /*#__PURE__*/ m$1(function(e, t) {
    if (t.gravity !== 0) for(var a = 1, n = 0; n < e.graphSet.length; n++){
        var i = e.graphSet[n], s = i.length;
        if (n === 0) var o = e.clientHeight / 2, l = e.clientWidth / 2;
        else var u = e.layoutNodes[e.idToIndex[i[0]]], f = e.layoutNodes[e.idToIndex[u.parentId]], o = f.positionX, l = f.positionY;
        for(var c = 0; c < s; c++){
            var d = e.layoutNodes[e.idToIndex[i[c]]];
            if (!d.isLocked) {
                var g = o - d.positionX, h = l - d.positionY, m = /*#__PURE__*/ Math.sqrt(g * g + h * h);
                if (m > a) {
                    var p = t.gravity * g / m, y = t.gravity * h / m;
                    d.offsetX += p, d.offsetY += y;
                }
            }
        }
    }
}, "calculateGravityForces"), $p = /*#__PURE__*/ m$1(function(e, t) {
    var a = [], n = 0, i = -1;
    for(a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i;){
        var s = a[n++], o = e.idToIndex[s], l = e.layoutNodes[o], u = l.children;
        if (0 < u.length && !l.isLocked) {
            for(var f = l.offsetX, c = l.offsetY, d = 0; d < u.length; d++){
                var g = e.layoutNodes[e.idToIndex[u[d]]];
                g.offsetX += f, g.offsetY += c, a[++i] = u[d];
            }
            l.offsetX = 0, l.offsetY = 0;
        }
    }
}, "propagateForces"), Up = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
    }
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        if (!(0 < n.children.length || n.isLocked)) {
            var i = /*#__PURE__*/ Kp(n.offsetX, n.offsetY, e.temperature);
            n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, vf(n, e);
        }
    }
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
    }
}, "updatePositions"), Kp = /*#__PURE__*/ m$1(function(e, t, a) {
    var n = /*#__PURE__*/ Math.sqrt(e * e + t * t);
    if (n > a) var i = {
        x: a * e / n,
        y: a * t / n
    };
    else var i = {
        x: e,
        y: t
    };
    return i;
}, "limitForce"), vf = m$1(function(e, t) {
    var a = e.parentId;
    if (a != null) {
        var n = t.layoutNodes[t.idToIndex[a]], i = false;
        if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = true), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = true), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = true), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = true), i) return vf(n, t);
    }
}, "updateAncestryBoundaries"), Dl = /*#__PURE__*/ m$1(function(e, t) {
    for(var a = e.layoutNodes, n = [], i = 0; i < a.length; i++){
        var s = a[i], o = s.cmptId, l = n[o] = n[o] || [];
        l.push(s);
    }
    for(var u = 0, i = 0; i < n.length; i++){
        var f = n[i];
        if (f) {
            f.x1 = 1 / 0, f.x2 = -1 / 0, f.y1 = 1 / 0, f.y2 = -1 / 0;
            for(var c = 0; c < f.length; c++){
                var d = f[c];
                f.x1 = /*#__PURE__*/ Math.min(f.x1, d.positionX - d.width / 2), f.x2 = /*#__PURE__*/ Math.max(f.x2, d.positionX + d.width / 2), f.y1 = /*#__PURE__*/ Math.min(f.y1, d.positionY - d.height / 2), f.y2 = /*#__PURE__*/ Math.max(f.y2, d.positionY + d.height / 2);
            }
            f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, u += f.w * f.h;
        }
    }
    n.sort(function(b1, w) {
        return w.w * w.h - b1.w * b1.h;
    });
    for(var g = 0, h = 0, m = 0, p = 0, y = Math.sqrt(u) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++){
        var f = n[i];
        if (f) {
            for(var c = 0; c < f.length; c++){
                var d = f[c];
                d.isLocked || (d.positionX += g - f.x1, d.positionY += h - f.y1);
            }
            g += f.w + t.componentSpacing, m += f.w + t.componentSpacing, p = /*#__PURE__*/ Math.max(p, f.h), m > y && (h += p + t.componentSpacing, g = 0, m = 0, p = 0);
        }
    }
}, "separateComponents"), Xp = {
    fit: true,
    padding: 30,
    boundingBox: void 0,
    avoidOverlap: true,
    avoidOverlapPadding: 10,
    nodeDimensionsIncludeLabels: false,
    spacingFactor: void 0,
    condense: false,
    rows: void 0,
    cols: void 0,
    position: /*#__PURE__*/ m$1(function(e) {}, "position"),
    sort: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, t) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, t) {
        return t;
    }, "transform")
};
function ff(r) {
    this.options = /*#__PURE__*/ we({}, Xp, r);
}
m$1(ff, "GridLayout");
ff.prototype.run = function() {
    var r = this.options, e = r, t = r.cy, a = e.eles, n = /*#__PURE__*/ a.nodes().not(":parent");
    e.sort && (n = /*#__PURE__*/ n.sort(e.sort));
    var i = /*#__PURE__*/ xr(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: /*#__PURE__*/ t.width(),
        h: /*#__PURE__*/ t.height()
    });
    if (i.h === 0 || i.w === 0) a.nodes().layoutPositions(this, e, function(K) {
        return {
            x: i.x1,
            y: i.y1
        };
    });
    else {
        var s = /*#__PURE__*/ n.size(), o = /*#__PURE__*/ Math.sqrt(s * i.h / i.w), l = /*#__PURE__*/ Math.round(o), u = /*#__PURE__*/ Math.round(i.w / i.h * o), f = /*#__PURE__*/ m$1(function(J) {
            if (J == null) return Math.min(l, u);
            var X = /*#__PURE__*/ Math.min(l, u);
            X == l ? l = J : u = J;
        }, "small"), c = /*#__PURE__*/ m$1(function(J) {
            if (J == null) return Math.max(l, u);
            var X = /*#__PURE__*/ Math.max(l, u);
            X == l ? l = J : u = J;
        }, "large"), d = e.rows, g = e.cols != null ? e.cols : e.columns;
        if (d != null && g != null) l = d, u = g;
        else if (d != null && g == null) l = d, u = /*#__PURE__*/ Math.ceil(s / l);
        else if (d == null && g != null) u = g, l = /*#__PURE__*/ Math.ceil(s / u);
        else if (u * l > s) {
            var h = /*#__PURE__*/ f(), m = /*#__PURE__*/ c();
            (h - 1) * m >= s ? f(h - 1) : (m - 1) * h >= s && c(m - 1);
        } else for(; u * l < s;){
            var p = /*#__PURE__*/ f(), y = /*#__PURE__*/ c();
            (y + 1) * p >= s ? c(y + 1) : f(p + 1);
        }
        var b1 = i.w / u, w = i.h / l;
        if (e.condense && (b1 = 0, w = 0), e.avoidOverlap) for(var x = 0; x < n.length; x++){
            var C = n[x], T = C._private.position;
            (T.x == null || T.y == null) && (T.x = 0, T.y = 0);
            var E = /*#__PURE__*/ C.layoutDimensions(e), S = e.avoidOverlapPadding, D = E.w + S, B = E.h + S;
            b1 = /*#__PURE__*/ Math.max(b1, D), w = /*#__PURE__*/ Math.max(w, B);
        }
        for(var P = {}, A = /*#__PURE__*/ m$1(function(J, X) {
            return !!P["c-" + J + "-" + X];
        }, "used"), R = /*#__PURE__*/ m$1(function(J, X) {
            P["c-" + J + "-" + X] = true;
        }, "use"), M = 0, I = 0, O = /*#__PURE__*/ m$1(function() {
            I++, I >= u && (I = 0, M++);
        }, "moveToNextCell"), L = {}, N = 0; N < n.length; N++){
            var q = n[N], H = /*#__PURE__*/ e.position(q);
            if (H && (H.row !== void 0 || H.col !== void 0)) {
                var z = {
                    row: H.row,
                    col: H.col
                };
                if (z.col === void 0) for(z.col = 0; A(z.row, z.col);)z.col++;
                else if (z.row === void 0) for(z.row = 0; A(z.row, z.col);)z.row++;
                L[q.id()] = z, R(z.row, z.col);
            }
        }
        var V = /*#__PURE__*/ m$1(function(J, X) {
            var ee, te;
            if (J.locked() || J.isParent()) return false;
            var ie = L[J.id()];
            if (ie) ee = ie.col * b1 + b1 / 2 + i.x1, te = ie.row * w + w / 2 + i.y1;
            else {
                for(; A(M, I);)O();
                ee = I * b1 + b1 / 2 + i.x1, te = M * w + w / 2 + i.y1, R(M, I), O();
            }
            return {
                x: ee,
                y: te
            };
        }, "getPos");
        n.layoutPositions(this, e, V);
    }
    return this;
};
var Yp = {
    ready: /*#__PURE__*/ m$1(function() {}, "ready"),
    stop: /*#__PURE__*/ m$1(function() {}, "stop")
};
function go(r) {
    this.options = /*#__PURE__*/ we({}, Yp, r);
}
m$1(go, "NullLayout");
go.prototype.run = function() {
    var r = this.options, e = r.eles, t = this;
    return r.cy, t.emit("layoutstart"), e.nodes().positions(function() {
        return {
            x: 0,
            y: 0
        };
    }), t.one("layoutready", r.ready), t.emit("layoutready"), t.one("layoutstop", r.stop), t.emit("layoutstop"), this;
};
go.prototype.stop = function() {
    return this;
};
var Zp = {
    positions: void 0,
    zoom: void 0,
    pan: void 0,
    fit: true,
    padding: 30,
    spacingFactor: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, t) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, t) {
        return t;
    }, "transform")
};
function cf(r) {
    this.options = /*#__PURE__*/ we({}, Zp, r);
}
m$1(cf, "PresetLayout");
cf.prototype.run = function() {
    var r = this.options, e = r.eles, t = /*#__PURE__*/ e.nodes(), a = /*#__PURE__*/ Ke(r.positions);
    function n(i) {
        if (r.positions == null) return md(/*#__PURE__*/ i.position());
        if (a) return r.positions(i);
        var s = r.positions[i._private.data.id];
        return s ?? null;
    }
    return m$1(n, "getPosition"), t.layoutPositions(this, r, function(i, s) {
        var o = /*#__PURE__*/ n(i);
        return i.locked() || o == null ? false : o;
    }), this;
};
var Qp = {
    fit: true,
    padding: 30,
    boundingBox: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, t) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, t) {
        return t;
    }, "transform")
};
function df(r) {
    this.options = /*#__PURE__*/ we({}, Qp, r);
}
m$1(df, "RandomLayout");
df.prototype.run = function() {
    var r = this.options, e = r.cy, t = r.eles, a = /*#__PURE__*/ xr(r.boundingBox ? r.boundingBox : {
        x1: 0,
        y1: 0,
        w: /*#__PURE__*/ e.width(),
        h: /*#__PURE__*/ e.height()
    }), n = /*#__PURE__*/ m$1(function(s, o) {
        return {
            x: a.x1 + Math.round(Math.random() * a.w),
            y: a.y1 + Math.round(Math.random() * a.h)
        };
    }, "getPos");
    return t.nodes().layoutPositions(this, r, n), this;
};
var Jp = [
    {
        name: "breadthfirst",
        impl: nf
    },
    {
        name: "circle",
        impl: sf
    },
    {
        name: "concentric",
        impl: of
    },
    {
        name: "cose",
        impl: Xn
    },
    {
        name: "grid",
        impl: ff
    },
    {
        name: "null",
        impl: go
    },
    {
        name: "preset",
        impl: cf
    },
    {
        name: "random",
        impl: df
    }
];
function hf(r) {
    this.options = r, this.notifications = 0;
}
m$1(hf, "NullRenderer");
var Bl = /*#__PURE__*/ m$1(function() {}, "noop"), Pl = /*#__PURE__*/ m$1(function() {
    throw new Error("A headless instance can not render images");
}, "throwImgErr");
hf.prototype = {
    recalculateRenderedStyle: Bl,
    notify: /*#__PURE__*/ m$1(function() {
        this.notifications++;
    }, "notify"),
    init: Bl,
    isHeadless: /*#__PURE__*/ m$1(function() {
        return true;
    }, "isHeadless"),
    png: Pl,
    jpg: Pl
};
var po = {};
po.arrowShapeWidth = .3;
po.registerArrowShapes = function() {
    var r = this.arrowShapes = {}, e = this, t = /*#__PURE__*/ m$1(function(u, f, c, d, g, h, m) {
        var p = g.x - c / 2 - m, y = g.x + c / 2 + m, b1 = g.y - c / 2 - m, w = g.y + c / 2 + m, x = p <= u && u <= y && b1 <= f && f <= w;
        return x;
    }, "bbCollide"), a = /*#__PURE__*/ m$1(function(u, f, c, d, g) {
        var h = u * Math.cos(d) - f * Math.sin(d), m = u * Math.sin(d) + f * Math.cos(d), p = h * c, y = m * c, b1 = p + g.x, w = y + g.y;
        return {
            x: b1,
            y: w
        };
    }, "transform"), n = /*#__PURE__*/ m$1(function(u, f, c, d) {
        for(var g = [], h = 0; h < u.length; h += 2){
            var m = u[h], p = u[h + 1];
            g.push(/*#__PURE__*/ a(m, p, f, c, d));
        }
        return g;
    }, "transformPoints"), i = /*#__PURE__*/ m$1(function(u) {
        for(var f = [], c = 0; c < u.length; c++){
            var d = u[c];
            f.push(d.x, d.y);
        }
        return f;
    }, "pointsToArr"), s = /*#__PURE__*/ m$1(function(u) {
        return u.pstyle("width").pfValue * u.pstyle("arrow-scale").pfValue * 2;
    }, "standardGap"), o = /*#__PURE__*/ m$1(function(u, f) {
        pe(f) && (f = r[f]), r[u] = /*#__PURE__*/ we({
            name: u,
            points: [
                -0.15,
                -0.3,
                .15,
                -0.3,
                .15,
                .3,
                -0.15,
                .3
            ],
            collide: /*#__PURE__*/ m$1(function(d, g, h, m, p, y) {
                var b1 = /*#__PURE__*/ i(/*#__PURE__*/ n(this.points, h + 2 * y, m, p)), w = /*#__PURE__*/ kr(d, g, b1);
                return w;
            }, "collide"),
            roughCollide: t,
            draw: /*#__PURE__*/ m$1(function(d, g, h, m) {
                var p = /*#__PURE__*/ n(this.points, g, h, m);
                e.arrowShapeImpl("polygon")(d, p);
            }, "draw"),
            spacing: /*#__PURE__*/ m$1(function(d) {
                return 0;
            }, "spacing"),
            gap: s
        }, f);
    }, "defineArrowShape");
    o("none", {
        collide: En,
        roughCollide: En,
        draw: eo,
        spacing: Ho,
        gap: Ho
    }), o("triangle", {
        points: [
            -0.15,
            -0.3,
            0,
            0,
            .15,
            -0.3
        ]
    }), o("arrow", "triangle"), o("triangle-backcurve", {
        points: r.triangle.points,
        controlPoint: [
            0,
            -0.15
        ],
        roughCollide: t,
        draw: /*#__PURE__*/ m$1(function(u, f, c, d, g) {
            var h = /*#__PURE__*/ n(this.points, f, c, d), m = this.controlPoint, p = /*#__PURE__*/ a(m[0], m[1], f, c, d);
            e.arrowShapeImpl(this.name)(u, h, p);
        }, "draw"),
        gap: /*#__PURE__*/ m$1(function(u) {
            return s(u) * .8;
        }, "gap")
    }), o("triangle-tee", {
        points: [
            0,
            0,
            .15,
            -0.3,
            -0.15,
            -0.3,
            0,
            0
        ],
        pointsTee: [
            -0.15,
            -0.4,
            -0.15,
            -0.5,
            .15,
            -0.5,
            .15,
            -0.4
        ],
        collide: /*#__PURE__*/ m$1(function(u, f, c, d, g, h, m) {
            var p = /*#__PURE__*/ i(/*#__PURE__*/ n(this.points, c + 2 * m, d, g)), y = /*#__PURE__*/ i(/*#__PURE__*/ n(this.pointsTee, c + 2 * m, d, g)), b1 = kr(u, f, p) || kr(u, f, y);
            return b1;
        }, "collide"),
        draw: /*#__PURE__*/ m$1(function(u, f, c, d, g) {
            var h = /*#__PURE__*/ n(this.points, f, c, d), m = /*#__PURE__*/ n(this.pointsTee, f, c, d);
            e.arrowShapeImpl(this.name)(u, h, m);
        }, "draw")
    }), o("circle-triangle", {
        radius: .15,
        pointsTr: [
            0,
            -0.15,
            .15,
            -0.45,
            -0.15,
            -0.45,
            0,
            -0.15
        ],
        collide: /*#__PURE__*/ m$1(function(u, f, c, d, g, h, m) {
            var p = g, y = Math.pow(p.x - u, 2) + Math.pow(p.y - f, 2) <= Math.pow((c + 2 * m) * this.radius, 2), b1 = /*#__PURE__*/ i(/*#__PURE__*/ n(this.points, c + 2 * m, d, g));
            return kr(u, f, b1) || y;
        }, "collide"),
        draw: /*#__PURE__*/ m$1(function(u, f, c, d, g) {
            var h = /*#__PURE__*/ n(this.pointsTr, f, c, d);
            e.arrowShapeImpl(this.name)(u, h, d.x, d.y, this.radius * f);
        }, "draw"),
        spacing: /*#__PURE__*/ m$1(function(u) {
            return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
        }, "spacing")
    }), o("triangle-cross", {
        points: [
            0,
            0,
            .15,
            -0.3,
            -0.15,
            -0.3,
            0,
            0
        ],
        baseCrossLinePts: [
            -0.15,
            -0.4,
            -0.15,
            -0.4,
            .15,
            -0.4,
            .15,
            -0.4
        ],
        crossLinePts: /*#__PURE__*/ m$1(function(u, f) {
            var c = /*#__PURE__*/ this.baseCrossLinePts.slice(), d = f / u, g = 3, h = 5;
            return c[g] = c[g] - d, c[h] = c[h] - d, c;
        }, "crossLinePts"),
        collide: /*#__PURE__*/ m$1(function(u, f, c, d, g, h, m) {
            var p = /*#__PURE__*/ i(/*#__PURE__*/ n(this.points, c + 2 * m, d, g)), y = /*#__PURE__*/ i(/*#__PURE__*/ n(/*#__PURE__*/ this.crossLinePts(c, h), c + 2 * m, d, g)), b1 = kr(u, f, p) || kr(u, f, y);
            return b1;
        }, "collide"),
        draw: /*#__PURE__*/ m$1(function(u, f, c, d, g) {
            var h = /*#__PURE__*/ n(this.points, f, c, d), m = /*#__PURE__*/ n(/*#__PURE__*/ this.crossLinePts(f, g), f, c, d);
            e.arrowShapeImpl(this.name)(u, h, m);
        }, "draw")
    }), o("vee", {
        points: [
            -0.15,
            -0.3,
            0,
            0,
            .15,
            -0.3,
            0,
            -0.15
        ],
        gap: /*#__PURE__*/ m$1(function(u) {
            return s(u) * .525;
        }, "gap")
    }), o("circle", {
        radius: .15,
        collide: /*#__PURE__*/ m$1(function(u, f, c, d, g, h, m) {
            var p = g, y = Math.pow(p.x - u, 2) + Math.pow(p.y - f, 2) <= Math.pow((c + 2 * m) * this.radius, 2);
            return y;
        }, "collide"),
        draw: /*#__PURE__*/ m$1(function(u, f, c, d, g) {
            e.arrowShapeImpl(this.name)(u, d.x, d.y, this.radius * f);
        }, "draw"),
        spacing: /*#__PURE__*/ m$1(function(u) {
            return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
        }, "spacing")
    }), o("tee", {
        points: [
            -0.15,
            0,
            -0.15,
            -0.1,
            .15,
            -0.1,
            .15,
            0
        ],
        spacing: /*#__PURE__*/ m$1(function(u) {
            return 1;
        }, "spacing"),
        gap: /*#__PURE__*/ m$1(function(u) {
            return 1;
        }, "gap")
    }), o("square", {
        points: [
            -0.15,
            0,
            .15,
            0,
            .15,
            -0.3,
            -0.15,
            -0.3
        ]
    }), o("diamond", {
        points: [
            -0.15,
            -0.15,
            0,
            -0.3,
            .15,
            -0.15,
            0,
            0
        ],
        gap: /*#__PURE__*/ m$1(function(u) {
            return u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
        }, "gap")
    }), o("chevron", {
        points: [
            0,
            0,
            -0.15,
            -0.15,
            -0.1,
            -0.2,
            0,
            -0.1,
            .1,
            -0.2,
            .15,
            -0.15
        ],
        gap: /*#__PURE__*/ m$1(function(u) {
            return .95 * u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
        }, "gap")
    });
};
var It = {};
It.projectIntoViewport = function(r, e) {
    var t = this.cy, a = /*#__PURE__*/ this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = /*#__PURE__*/ t.pan(), l = /*#__PURE__*/ t.zoom(), u = ((r - n) / s - o.x) / l, f = ((e - i) / s - o.y) / l;
    return [
        u,
        f
    ];
};
It.findContainerClientCoords = function() {
    if (this.containerBB) return this.containerBB;
    var r = this.container, e = /*#__PURE__*/ r.getBoundingClientRect(), t = /*#__PURE__*/ this.cy.window().getComputedStyle(r), a = /*#__PURE__*/ m$1(function(y) {
        return parseFloat(/*#__PURE__*/ t.getPropertyValue(y));
    }, "styleValue"), n = {
        left: /*#__PURE__*/ a("padding-left"),
        right: /*#__PURE__*/ a("padding-right"),
        top: /*#__PURE__*/ a("padding-top"),
        bottom: /*#__PURE__*/ a("padding-bottom")
    }, i = {
        left: /*#__PURE__*/ a("border-left-width"),
        right: /*#__PURE__*/ a("border-right-width"),
        top: /*#__PURE__*/ a("border-top-width"),
        bottom: /*#__PURE__*/ a("border-bottom-width")
    }, s = r.clientWidth, o = r.clientHeight, l = n.left + n.right, u = n.top + n.bottom, f = i.left + i.right, c = e.width / (s + f), d = s - l, g = o - u, h = e.left + n.left + i.left, m = e.top + n.top + i.top;
    return this.containerBB = [
        h,
        m,
        d,
        g,
        c
    ];
};
It.invalidateContainerClientCoordsCache = function() {
    this.containerBB = null;
};
It.findNearestElement = function(r, e, t, a) {
    return this.findNearestElements(r, e, t, a)[0];
};
It.findNearestElements = function(r, e, t, a) {
    var n = this, i = this, s = /*#__PURE__*/ i.getCachedZSortedEles(), o = [], l = /*#__PURE__*/ i.cy.zoom(), u = /*#__PURE__*/ i.cy.hasCompoundNodes(), f = (a ? 24 : 8) / l, c = (a ? 8 : 2) / l, d = (a ? 8 : 2) / l, g = 1 / 0, h, m;
    t && (s = s.interactive);
    function p(E, S) {
        if (E.isNode()) {
            if (m) return;
            m = E, o.push(E);
        }
        if (E.isEdge() && (S == null || S < g)) if (h) {
            if (h.pstyle("z-compound-depth").value === E.pstyle("z-compound-depth").value && h.pstyle("z-compound-depth").value === E.pstyle("z-compound-depth").value) {
                for(var D = 0; D < o.length; D++)if (o[D].isEdge()) {
                    o[D] = E, h = E, g = S ?? g;
                    break;
                }
            }
        } else o.push(E), h = E, g = S ?? g;
    }
    m$1(p, "addEle");
    function y(E) {
        var S = E.outerWidth() + 2 * c, D = E.outerHeight() + 2 * c, B = S / 2, P = D / 2, A = /*#__PURE__*/ E.position(), R = E.pstyle("corner-radius").value === "auto" ? "auto" : E.pstyle("corner-radius").pfValue, M = E._private.rscratch;
        if (A.x - B <= r && r <= A.x + B && A.y - P <= e && e <= A.y + P) {
            var I = i.nodeShapes[n.getNodeShape(E)];
            if (I.checkPoint(r, e, 0, S, D, A.x, A.y, R, M)) return p(E, 0), true;
        }
    }
    m$1(y, "checkNode");
    function b1(E) {
        var S = E._private, D = S.rscratch, B = E.pstyle("width").pfValue, P = E.pstyle("arrow-scale").value, A = B / 2 + f, R = A * A, M = A * 2, N = S.source, q = S.target, I;
        if (D.edgeType === "segments" || D.edgeType === "straight" || D.edgeType === "haystack") {
            for(var O = D.allpts, L = 0; L + 3 < O.length; L += 2)if (Md(r, e, O[L], O[L + 1], O[L + 2], O[L + 3], M) && R > (I = /*#__PURE__*/ zd(r, e, O[L], O[L + 1], O[L + 2], O[L + 3]))) return p(E, I), true;
        } else if (D.edgeType === "bezier" || D.edgeType === "multibezier" || D.edgeType === "self" || D.edgeType === "compound") {
            for(var O = D.allpts, L = 0; L + 5 < D.allpts.length; L += 4)if (Ld(r, e, O[L], O[L + 1], O[L + 2], O[L + 3], O[L + 4], O[L + 5], M) && R > (I = /*#__PURE__*/ Nd(r, e, O[L], O[L + 1], O[L + 2], O[L + 3], O[L + 4], O[L + 5]))) return p(E, I), true;
        }
        for(var N = N || S.source, q = q || S.target, H = /*#__PURE__*/ n.getArrowWidth(B, P), z = [
            {
                name: "source",
                x: D.arrowStartX,
                y: D.arrowStartY,
                angle: D.srcArrowAngle
            },
            {
                name: "target",
                x: D.arrowEndX,
                y: D.arrowEndY,
                angle: D.tgtArrowAngle
            },
            {
                name: "mid-source",
                x: D.midX,
                y: D.midY,
                angle: D.midsrcArrowAngle
            },
            {
                name: "mid-target",
                x: D.midX,
                y: D.midY,
                angle: D.midtgtArrowAngle
            }
        ], L = 0; L < z.length; L++){
            var V = z[L], K = i.arrowShapes[E.pstyle(V.name + "-arrow-shape").value], J = E.pstyle("width").pfValue;
            if (K.roughCollide(r, e, H, V.angle, {
                x: V.x,
                y: V.y
            }, J, f) && K.collide(r, e, H, V.angle, {
                x: V.x,
                y: V.y
            }, J, f)) return p(E), true;
        }
        u && o.length > 0 && (y(N), y(q));
    }
    m$1(b1, "checkEdge");
    function w(E, S, D) {
        return Sr(E, S, D);
    }
    m$1(w, "preprop");
    function x(E, S) {
        var D = E._private, B = d, P;
        S ? P = S + "-" : P = "", E.boundingBox();
        var A = D.labelBounds[S || "main"], R = E.pstyle(P + "label").value, M = E.pstyle("text-events").strValue === "yes";
        if (!(!M || !R)) {
            var I = /*#__PURE__*/ w(D.rscratch, "labelX", S), O = /*#__PURE__*/ w(D.rscratch, "labelY", S), L = /*#__PURE__*/ w(D.rscratch, "labelAngle", S), N = E.pstyle(P + "text-margin-x").pfValue, q = E.pstyle(P + "text-margin-y").pfValue, H = A.x1 - B - N, z = A.x2 + B - N, V = A.y1 - B - q, K = A.y2 + B - q;
            if (L) {
                var J = /*#__PURE__*/ Math.cos(L), X = /*#__PURE__*/ Math.sin(L), ee = /*#__PURE__*/ m$1(function(Z, ae) {
                    return Z = Z - I, ae = ae - O, {
                        x: Z * J - ae * X + I,
                        y: Z * X + ae * J + O
                    };
                }, "rotate"), te = /*#__PURE__*/ ee(H, V), ie = /*#__PURE__*/ ee(H, K), j = /*#__PURE__*/ ee(z, V), F = /*#__PURE__*/ ee(z, K), _ = [
                    te.x + N,
                    te.y + q,
                    j.x + N,
                    j.y + q,
                    F.x + N,
                    F.y + q,
                    ie.x + N,
                    ie.y + q
                ];
                if (kr(r, e, _)) return p(E), true;
            } else if (it(A, r, e)) return p(E), true;
        }
    }
    m$1(x, "checkLabel");
    for(var C = s.length - 1; C >= 0; C--){
        var T = s[C];
        T.isNode() ? y(T) || x(T) : b1(T) || x(T) || x(T, "source") || x(T, "target");
    }
    return o;
};
It.getAllInBox = function(r, e, t, a) {
    var n = this.getCachedZSortedEles().interactive, i = /*#__PURE__*/ this.cy.zoom(), s = 2 / i, o = [], l = /*#__PURE__*/ Math.min(r, t), u = /*#__PURE__*/ Math.max(r, t), f = /*#__PURE__*/ Math.min(e, a), c = /*#__PURE__*/ Math.max(e, a);
    r = l, t = u, e = f, a = c;
    var d = /*#__PURE__*/ xr({
        x1: r,
        y1: e,
        x2: t,
        y2: a
    }), g = [
        {
            x: d.x1,
            y: d.y1
        },
        {
            x: d.x2,
            y: d.y1
        },
        {
            x: d.x2,
            y: d.y2
        },
        {
            x: d.x1,
            y: d.y2
        }
    ], h = [
        [
            g[0],
            g[1]
        ],
        [
            g[1],
            g[2]
        ],
        [
            g[2],
            g[3]
        ],
        [
            g[3],
            g[0]
        ]
    ];
    function m(Z, ae, de) {
        return Sr(Z, ae, de);
    }
    m$1(m, "preprop");
    function p(Z, ae) {
        var de = Z._private, Re = s, Te = "";
        Z.boundingBox();
        var xe = de.labelBounds.main;
        if (!xe) return null;
        var me = /*#__PURE__*/ m(de.rscratch, "labelX", ae), se = /*#__PURE__*/ m(de.rscratch, "labelY", ae), he = /*#__PURE__*/ m(de.rscratch, "labelAngle", ae), ge = Z.pstyle(Te + "text-margin-x").pfValue, Ce = Z.pstyle(Te + "text-margin-y").pfValue, ye = xe.x1 - Re - ge, ke = xe.x2 + Re - ge, Me = xe.y1 - Re - Ce, Ne = xe.y2 + Re - Ce;
        if (he) {
            var ze = /*#__PURE__*/ Math.cos(he), Fe = /*#__PURE__*/ Math.sin(he), Ee = /*#__PURE__*/ m$1(function(Y, k) {
                return Y = Y - me, k = k - se, {
                    x: Y * ze - k * Fe + me,
                    y: Y * Fe + k * ze + se
                };
            }, "rotate");
            return [
                /*#__PURE__*/ Ee(ye, Me),
                /*#__PURE__*/ Ee(ke, Me),
                /*#__PURE__*/ Ee(ke, Ne),
                /*#__PURE__*/ Ee(ye, Ne)
            ];
        } else return [
            {
                x: ye,
                y: Me
            },
            {
                x: ke,
                y: Me
            },
            {
                x: ke,
                y: Ne
            },
            {
                x: ye,
                y: Ne
            }
        ];
    }
    m$1(p, "getRotatedLabelBox");
    function y(Z, ae, de, Re) {
        function Te(xe, me, se) {
            return (se.y - xe.y) * (me.x - xe.x) > (me.y - xe.y) * (se.x - xe.x);
        }
        return m$1(Te, "ccw"), Te(Z, de, Re) !== Te(ae, de, Re) && Te(Z, ae, de) !== Te(Z, ae, Re);
    }
    m$1(y, "doLinesIntersect");
    for(var b1 = 0; b1 < n.length; b1++){
        var w = n[b1];
        if (w.isNode()) {
            var x = w, C = x.pstyle("text-events").strValue === "yes", T = x.pstyle("box-selection").strValue, E = x.pstyle("box-select-labels").strValue === "yes";
            if (T === "none") continue;
            var S = (T === "overlap" || E) && C, D = /*#__PURE__*/ x.boundingBox({
                includeNodes: true,
                includeEdges: false,
                includeLabels: S
            });
            if (T === "contain") {
                var B = false;
                if (E && C) {
                    var P = /*#__PURE__*/ p(x);
                    P && mi(P, g) && (o.push(x), B = true);
                }
                !B && wv(d, D) && o.push(x);
            } else if (T === "overlap" && no(d, D)) {
                var A = /*#__PURE__*/ x.boundingBox({
                    includeNodes: true,
                    includeEdges: true,
                    includeLabels: false,
                    includeMainLabels: false,
                    includeSourceLabels: false,
                    includeTargetLabels: false
                }), R = [
                    {
                        x: A.x1,
                        y: A.y1
                    },
                    {
                        x: A.x2,
                        y: A.y1
                    },
                    {
                        x: A.x2,
                        y: A.y2
                    },
                    {
                        x: A.x1,
                        y: A.y2
                    }
                ];
                if (mi(R, g)) o.push(x);
                else {
                    var M = /*#__PURE__*/ p(x);
                    M && mi(M, g) && o.push(x);
                }
            }
        } else {
            var I = w, O = I._private, L = O.rscratch, N = I.pstyle("box-selection").strValue;
            if (N === "none") continue;
            if (N === "contain") {
                if (L.startX != null && L.startY != null && !it(d, L.startX, L.startY) || L.endX != null && L.endY != null && !it(d, L.endX, L.endY)) continue;
                if (L.edgeType === "bezier" || L.edgeType === "multibezier" || L.edgeType === "self" || L.edgeType === "compound" || L.edgeType === "segments" || L.edgeType === "haystack") {
                    for(var q = O.rstyle.bezierPts || O.rstyle.linePts || O.rstyle.haystackPts, H = true, z = 0; z < q.length; z++)if (!Xo(d, q[z])) {
                        H = false;
                        break;
                    }
                    H && o.push(I);
                } else L.edgeType === "straight" && o.push(I);
            } else if (N === "overlap") {
                var V = false;
                if (L.startX != null && L.startY != null && L.endX != null && L.endY != null && (it(d, L.startX, L.startY) || it(d, L.endX, L.endY))) o.push(I), V = true;
                else if (!V && L.edgeType === "haystack") {
                    for(var K = O.rstyle.haystackPts, J = 0; J < K.length; J++)if (Xo(d, K[J])) {
                        o.push(I), V = true;
                        break;
                    }
                }
                if (!V) {
                    var X = O.rstyle.bezierPts || O.rstyle.linePts || O.rstyle.haystackPts;
                    if ((!X || X.length < 2) && L.edgeType === "straight" && L.startX != null && L.startY != null && L.endX != null && L.endY != null && (X = [
                        {
                            x: L.startX,
                            y: L.startY
                        },
                        {
                            x: L.endX,
                            y: L.endY
                        }
                    ]), !X || X.length < 2) continue;
                    for(var ee = 0; ee < X.length - 1; ee++){
                        for(var te = X[ee], ie = X[ee + 1], j = 0; j < h.length; j++){
                            var F = /*#__PURE__*/ je(h[j], 2), _ = F[0], W = F[1];
                            if (y(te, ie, _, W)) {
                                o.push(I), V = true;
                                break;
                            }
                        }
                        if (V) break;
                    }
                }
            }
        }
    }
    return o;
};
var Pn = {};
Pn.calculateArrowAngles = function(r) {
    var e = r._private.rscratch, t = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", l, u, f, c, d, g, y, b1;
    if (t ? (f = e.haystackPts[0], c = e.haystackPts[1], d = e.haystackPts[2], g = e.haystackPts[3]) : (f = e.arrowStartX, c = e.arrowStartY, d = e.arrowEndX, g = e.arrowEndY), y = e.midX, b1 = e.midY, i) l = f - e.segpts[0], u = c - e.segpts[1];
    else if (n || s || o || a) {
        var h = e.allpts, m = /*#__PURE__*/ or(h[0], h[2], h[4], .1), p = /*#__PURE__*/ or(h[1], h[3], h[5], .1);
        l = f - m, u = c - p;
    } else l = f - y, u = c - b1;
    e.srcArrowAngle = /*#__PURE__*/ Za(l, u);
    var y = e.midX, b1 = e.midY;
    if (t && (y = (f + d) / 2, b1 = (c + g) / 2), l = d - f, u = g - c, i) {
        var h = e.allpts;
        if (h.length / 2 % 2 === 0) {
            var w = h.length / 2, x = w - 2;
            l = h[w] - h[x], u = h[w + 1] - h[x + 1];
        } else if (e.isRound) l = e.midVector[1], u = -e.midVector[0];
        else {
            var w = h.length / 2 - 1, x = w - 2;
            l = h[w] - h[x], u = h[w + 1] - h[x + 1];
        }
    } else if (n || s || o) {
        var h = e.allpts, C = e.ctrlpts, T, E, S, D;
        if (C.length / 2 % 2 === 0) {
            var B = h.length / 2 - 1, P = B + 2, A = P + 2;
            T = /*#__PURE__*/ or(h[B], h[P], h[A], 0), E = /*#__PURE__*/ or(h[B + 1], h[P + 1], h[A + 1], 0), S = /*#__PURE__*/ or(h[B], h[P], h[A], 1e-4), D = /*#__PURE__*/ or(h[B + 1], h[P + 1], h[A + 1], 1e-4);
        } else {
            var P = h.length / 2 - 1, B = P - 2, A = P + 2;
            T = /*#__PURE__*/ or(h[B], h[P], h[A], .4999), E = /*#__PURE__*/ or(h[B + 1], h[P + 1], h[A + 1], .4999), S = /*#__PURE__*/ or(h[B], h[P], h[A], .5), D = /*#__PURE__*/ or(h[B + 1], h[P + 1], h[A + 1], .5);
        }
        l = S - T, u = D - E;
    }
    if (e.midtgtArrowAngle = /*#__PURE__*/ Za(l, u), e.midDispX = l, e.midDispY = u, l *= -1, u *= -1, i) {
        var h = e.allpts;
        if (h.length / 2 % 2 !== 0) {
            if (!e.isRound) {
                var w = h.length / 2 - 1, R = w + 2;
                l = -(h[R] - h[w]), u = -(h[R + 1] - h[w + 1]);
            }
        }
    }
    if (e.midsrcArrowAngle = /*#__PURE__*/ Za(l, u), i) l = d - e.segpts[e.segpts.length - 2], u = g - e.segpts[e.segpts.length - 1];
    else if (n || s || o || a) {
        var h = e.allpts, M = h.length, m = /*#__PURE__*/ or(h[M - 6], h[M - 4], h[M - 2], .9), p = /*#__PURE__*/ or(h[M - 5], h[M - 3], h[M - 1], .9);
        l = d - m, u = g - p;
    } else l = d - y, u = g - b1;
    e.tgtArrowAngle = /*#__PURE__*/ Za(l, u);
};
Pn.getArrowWidth = Pn.getArrowHeight = function(r, e) {
    var t = this.arrowWidthCache = this.arrowWidthCache || {}, a = t[r + ", " + e];
    return a || (a = Math.max(/*#__PURE__*/ Math.pow(r * 13.37, .9), 29) * e, t[r + ", " + e] = a, a);
};
var qs, _s, qr = {}, Ar = {}, Al, Rl, Dt, pn, Kr, xt, St, Fr, _t, nn, gf, pf, Gs, Hs, Ml, Ll = /*#__PURE__*/ m$1(function(e, t, a) {
    a.x = t.x - e.x, a.y = t.y - e.y, a.len = /*#__PURE__*/ Math.sqrt(a.x * a.x + a.y * a.y), a.nx = a.x / a.len, a.ny = a.y / a.len, a.ang = /*#__PURE__*/ Math.atan2(a.ny, a.nx);
}, "asVec"), jp = /*#__PURE__*/ m$1(function(e, t) {
    t.x = e.x * -1, t.y = e.y * -1, t.nx = e.nx * -1, t.ny = e.ny * -1, t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, "invertVec"), ey = /*#__PURE__*/ m$1(function(e, t, a, n, i) {
    if (e !== Ml ? Ll(t, e, qr) : jp(Ar, qr), Ll(t, a, Ar), Al = qr.nx * Ar.ny - qr.ny * Ar.nx, Rl = qr.nx * Ar.nx - qr.ny * -Ar.ny, Kr = /*#__PURE__*/ Math.asin(/*#__PURE__*/ Math.max(-1, /*#__PURE__*/ Math.min(1, Al))), Math.abs(Kr) < 1e-6) {
        qs = t.x, _s = t.y, St = _t = 0;
        return;
    }
    Dt = 1, pn = false, Rl < 0 ? Kr < 0 ? Kr = Math.PI + Kr : (Kr = Math.PI - Kr, Dt = -1, pn = true) : Kr > 0 && (Dt = -1, pn = true), t.radius !== void 0 ? _t = t.radius : _t = n, xt = Kr / 2, nn = /*#__PURE__*/ Math.min(qr.len / 2, Ar.len / 2), i ? (Fr = /*#__PURE__*/ Math.abs(Math.cos(xt) * _t / Math.sin(xt)), Fr > nn ? (Fr = nn, St = /*#__PURE__*/ Math.abs(Fr * Math.sin(xt) / Math.cos(xt))) : St = _t) : (Fr = /*#__PURE__*/ Math.min(nn, _t), St = /*#__PURE__*/ Math.abs(Fr * Math.sin(xt) / Math.cos(xt))), Gs = t.x + Ar.nx * Fr, Hs = t.y + Ar.ny * Fr, qs = Gs - Ar.ny * St * Dt, _s = Hs + Ar.nx * St * Dt, gf = t.x + qr.nx * Fr, pf = t.y + qr.ny * Fr, Ml = t;
}, "calcCornerArc");
function yf(r, e) {
    e.radius === 0 ? r.lineTo(e.cx, e.cy) : r.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
}
m$1(yf, "drawPreparedRoundCorner");
function yo(r, e, t, a) {
    var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    return a === 0 || e.radius === 0 ? {
        cx: e.x,
        cy: e.y,
        radius: 0,
        startX: e.x,
        startY: e.y,
        stopX: e.x,
        stopY: e.y,
        startAngle: void 0,
        endAngle: void 0,
        counterClockwise: void 0
    } : (ey(r, e, t, a, n), {
        cx: qs,
        cy: _s,
        radius: St,
        startX: gf,
        startY: pf,
        stopX: Gs,
        stopY: Hs,
        startAngle: qr.ang + Math.PI / 2 * Dt,
        endAngle: Ar.ang - Math.PI / 2 * Dt,
        counterClockwise: pn
    });
}
m$1(yo, "getRoundCorner");
var La = .01, ry = /*#__PURE__*/ Math.sqrt(2 * La), mr = {};
mr.findMidptPtsEtc = function(r, e) {
    var t = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = /*#__PURE__*/ r.pstyle("source-endpoint"), o = /*#__PURE__*/ r.pstyle("target-endpoint"), l = s.units != null && o.units != null, u = /*#__PURE__*/ m$1(function(C, T, E, S) {
        var D = S - T, B = E - C, P = /*#__PURE__*/ Math.sqrt(B * B + D * D);
        return {
            x: -D / P,
            y: B / P
        };
    }, "recalcVectorNormInverse"), f = r.pstyle("edge-distances").value;
    switch(f){
        case "node-position":
            i = t;
            break;
        case "intersection":
            i = a;
            break;
        case "endpoints":
            {
                if (l) {
                    var c = /*#__PURE__*/ this.manualEndptToPx(r.source()[0], s), d = /*#__PURE__*/ je(c, 2), g = d[0], h = d[1], m = /*#__PURE__*/ this.manualEndptToPx(r.target()[0], o), p = /*#__PURE__*/ je(m, 2), y = p[0], b1 = p[1], w = {
                        x1: g,
                        y1: h,
                        x2: y,
                        y2: b1
                    };
                    n = /*#__PURE__*/ u(g, h, y, b1), i = w;
                } else qe(/*#__PURE__*/ "Edge ".concat(/*#__PURE__*/ r.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
                break;
            }
    }
    return {
        midptPts: i,
        vectorNormInverse: n
    };
};
mr.findHaystackPoints = function(r) {
    for(var e = 0; e < r.length; e++){
        var t = r[e], a = t._private, n = a.rscratch;
        if (!n.haystack) {
            var i = Math.random() * 2 * Math.PI;
            n.source = {
                x: /*#__PURE__*/ Math.cos(i),
                y: /*#__PURE__*/ Math.sin(i)
            }, i = Math.random() * 2 * Math.PI, n.target = {
                x: /*#__PURE__*/ Math.cos(i),
                y: /*#__PURE__*/ Math.sin(i)
            };
        }
        var s = a.source, o = a.target, l = /*#__PURE__*/ s.position(), u = /*#__PURE__*/ o.position(), f = /*#__PURE__*/ s.width(), c = /*#__PURE__*/ o.width(), d = /*#__PURE__*/ s.height(), g = /*#__PURE__*/ o.height(), h = t.pstyle("haystack-radius").value, m = h / 2;
        n.haystackPts = n.allpts = [
            n.source.x * f * m + l.x,
            n.source.y * d * m + l.y,
            n.target.x * c * m + u.x,
            n.target.y * g * m + u.y
        ], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = true, this.storeEdgeProjections(t), this.calculateArrowAngles(t), this.recalculateEdgeLabelProjections(t), this.calculateLabelAngles(t);
    }
};
mr.findSegmentsPoints = function(r, e) {
    var t = r._private.rscratch, a = /*#__PURE__*/ r.pstyle("segment-weights"), n = /*#__PURE__*/ r.pstyle("segment-distances"), i = /*#__PURE__*/ r.pstyle("segment-radii"), s = /*#__PURE__*/ r.pstyle("radius-type"), o = /*#__PURE__*/ Math.min(a.pfValue.length, n.pfValue.length), l = i.pfValue[i.pfValue.length - 1], u = s.pfValue[s.pfValue.length - 1];
    t.edgeType = "segments", t.segpts = [], t.radii = [], t.isArcRadius = [];
    for(var f = 0; f < o; f++){
        var c = a.pfValue[f], d = n.pfValue[f], g = 1 - c, h = c, m = /*#__PURE__*/ this.findMidptPtsEtc(r, e), p = m.midptPts, y = m.vectorNormInverse, b1 = {
            x: p.x1 * g + p.x2 * h,
            y: p.y1 * g + p.y2 * h
        };
        t.segpts.push(b1.x + y.x * d, b1.y + y.y * d), t.radii.push(i.pfValue[f] !== void 0 ? i.pfValue[f] : l), t.isArcRadius.push((s.pfValue[f] !== void 0 ? s.pfValue[f] : u) === "arc-radius");
    }
};
mr.findLoopPoints = function(r, e, t, a) {
    var n = r._private.rscratch, i = e.dirCounts, s = e.srcPos, o = /*#__PURE__*/ r.pstyle("control-point-distances"), l = o ? o.pfValue[0] : void 0, u = r.pstyle("loop-direction").pfValue, f = r.pstyle("loop-sweep").pfValue, c = r.pstyle("control-point-step-size").pfValue;
    n.edgeType = "self";
    var d = t, g = c;
    a && (d = 0, g = l);
    var h = u - Math.PI / 2, m = h - f / 2, p = h + f / 2, y = u + "_" + f;
    d = i[y] === void 0 ? i[y] = 0 : ++i[y], n.ctrlpts = [
        s.x + Math.cos(m) * 1.4 * g * (d / 3 + 1),
        s.y + Math.sin(m) * 1.4 * g * (d / 3 + 1),
        s.x + Math.cos(p) * 1.4 * g * (d / 3 + 1),
        s.y + Math.sin(p) * 1.4 * g * (d / 3 + 1)
    ];
};
mr.findCompoundLoopPoints = function(r, e, t, a) {
    var n = r._private.rscratch;
    n.edgeType = "compound";
    var i = e.srcPos, s = e.tgtPos, o = e.srcW, l = e.srcH, u = e.tgtW, f = e.tgtH, c = r.pstyle("control-point-step-size").pfValue, d = /*#__PURE__*/ r.pstyle("control-point-distances"), g = d ? d.pfValue[0] : void 0, h = t, m = c;
    a && (h = 0, m = g);
    var p = 50, y = {
        x: i.x - o / 2,
        y: i.y - l / 2
    }, b1 = {
        x: s.x - u / 2,
        y: s.y - f / 2
    }, w = {
        x: /*#__PURE__*/ Math.min(y.x, b1.x),
        y: /*#__PURE__*/ Math.min(y.y, b1.y)
    }, x = .5, C = /*#__PURE__*/ Math.max(x, /*#__PURE__*/ Math.log(o * La)), T = /*#__PURE__*/ Math.max(x, /*#__PURE__*/ Math.log(u * La));
    n.ctrlpts = [
        w.x,
        w.y - (1 + Math.pow(p, 1.12) / 100) * m * (h / 3 + 1) * C,
        w.x - (1 + Math.pow(p, 1.12) / 100) * m * (h / 3 + 1) * T,
        w.y
    ];
};
mr.findStraightEdgePoints = function(r) {
    r._private.rscratch.edgeType = "straight";
};
mr.findBezierPoints = function(r, e, t, a, n) {
    var i = r._private.rscratch, s = r.pstyle("control-point-step-size").pfValue, o = /*#__PURE__*/ r.pstyle("control-point-distances"), l = /*#__PURE__*/ r.pstyle("control-point-weights"), u = o && l ? Math.min(o.value.length, l.value.length) : 1, f = o ? o.pfValue[0] : void 0, c = l.value[0], d = a;
    i.edgeType = d ? "multibezier" : "bezier", i.ctrlpts = [];
    for(var g = 0; g < u; g++){
        var h = (.5 - e.eles.length / 2 + t) * s * (n ? -1 : 1), m = void 0, p = /*#__PURE__*/ ao(h);
        d && (f = o ? o.pfValue[g] : s, c = l.value[g]), a ? m = f : m = f !== void 0 ? p * f : void 0;
        var y = m !== void 0 ? m : h, b1 = 1 - c, w = c, x = /*#__PURE__*/ this.findMidptPtsEtc(r, e), C = x.midptPts, T = x.vectorNormInverse, E = {
            x: C.x1 * b1 + C.x2 * w,
            y: C.y1 * b1 + C.y2 * w
        };
        i.ctrlpts.push(E.x + T.x * y, E.y + T.y * y);
    }
};
mr.findTaxiPoints = function(r, e) {
    var t = r._private.rscratch;
    t.edgeType = "segments";
    var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", l = "upward", u = "auto", f = e.posPts, c = e.srcW, d = e.srcH, g = e.tgtW, h = e.tgtH, m = r.pstyle("edge-distances").value, p = m !== "node-position", y = r.pstyle("taxi-direction").value, b1 = y, w = /*#__PURE__*/ r.pstyle("taxi-turn"), x = w.units === "%", C = w.pfValue, T = C < 0, E = r.pstyle("taxi-turn-min-distance").pfValue, S = p ? (c + g) / 2 : 0, D = p ? (d + h) / 2 : 0, B = f.x2 - f.x1, P = f.y2 - f.y1, A = /*#__PURE__*/ m$1(function(k, G) {
        return k > 0 ? Math.max(k - G, 0) : Math.min(k + G, 0);
    }, "subDWH"), R = /*#__PURE__*/ A(B, S), M = /*#__PURE__*/ A(P, D), I = false;
    b1 === u ? y = Math.abs(R) > Math.abs(M) ? n : a : b1 === l || b1 === o ? (y = a, I = true) : (b1 === i || b1 === s) && (y = n, I = true);
    var O = y === a, L = O ? M : R, N = O ? P : B, q = /*#__PURE__*/ ao(N), H = false;
    !(I && (x || T)) && (b1 === o && N < 0 || b1 === l && N > 0 || b1 === i && N > 0 || b1 === s && N < 0) && (q *= -1, L = q * Math.abs(L), H = true);
    var z;
    if (x) {
        var V = C < 0 ? 1 + C : C;
        z = V * L;
    } else {
        var K = C < 0 ? L : 0;
        z = K + C * q;
    }
    var J = /*#__PURE__*/ m$1(function(k) {
        return Math.abs(k) < E || Math.abs(k) >= Math.abs(L);
    }, "getIsTooClose"), X = /*#__PURE__*/ J(z), ee = /*#__PURE__*/ J(Math.abs(L) - Math.abs(z)), te = X || ee;
    if (te && !H) if (O) {
        var ie = Math.abs(N) <= d / 2, j = Math.abs(B) <= g / 2;
        if (ie) {
            var F = (f.x1 + f.x2) / 2, _ = f.y1, W = f.y2;
            t.segpts = [
                F,
                _,
                F,
                W
            ];
        } else if (j) {
            var Z = (f.y1 + f.y2) / 2, ae = f.x1, de = f.x2;
            t.segpts = [
                ae,
                Z,
                de,
                Z
            ];
        } else t.segpts = [
            f.x1,
            f.y2
        ];
    } else {
        var Re = Math.abs(N) <= c / 2, Te = Math.abs(P) <= h / 2;
        if (Re) {
            var xe = (f.y1 + f.y2) / 2, me = f.x1, se = f.x2;
            t.segpts = [
                me,
                xe,
                se,
                xe
            ];
        } else if (Te) {
            var he = (f.x1 + f.x2) / 2, ge = f.y1, Ce = f.y2;
            t.segpts = [
                he,
                ge,
                he,
                Ce
            ];
        } else t.segpts = [
            f.x2,
            f.y1
        ];
    }
    else if (O) {
        var ye = f.y1 + z + (p ? d / 2 * q : 0), ke = f.x1, Me = f.x2;
        t.segpts = [
            ke,
            ye,
            Me,
            ye
        ];
    } else {
        var Ne = f.x1 + z + (p ? c / 2 * q : 0), ze = f.y1, Fe = f.y2;
        t.segpts = [
            Ne,
            ze,
            Ne,
            Fe
        ];
    }
    if (t.isRound) {
        var Ee = r.pstyle("taxi-radius").value, le = r.pstyle("radius-type").value[0] === "arc-radius";
        t.radii = /*#__PURE__*/ new Array(t.segpts.length / 2).fill(Ee), t.isArcRadius = /*#__PURE__*/ new Array(t.segpts.length / 2).fill(le);
    }
};
mr.tryToCorrectInvalidPoints = function(r, e) {
    var t = r._private.rscratch;
    if (t.edgeType === "bezier") {
        var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, l = e.tgtH, u = e.srcShape, f = e.tgtShape, c = e.srcCornerRadius, d = e.tgtCornerRadius, g = e.srcRs, h = e.tgtRs, m = !ne(t.startX) || !ne(t.startY), p = !ne(t.arrowStartX) || !ne(t.arrowStartY), y = !ne(t.endX) || !ne(t.endY), b1 = !ne(t.arrowEndX) || !ne(t.arrowEndY), w = 3, x = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth, C = w * x, T = /*#__PURE__*/ At({
            x: t.ctrlpts[0],
            y: t.ctrlpts[1]
        }, {
            x: t.startX,
            y: t.startY
        }), E = T < C, S = /*#__PURE__*/ At({
            x: t.ctrlpts[0],
            y: t.ctrlpts[1]
        }, {
            x: t.endX,
            y: t.endY
        }), D = S < C, B = false;
        if (m || p || E) {
            B = true;
            var P = {
                x: t.ctrlpts[0] - a.x,
                y: t.ctrlpts[1] - a.y
            }, A = /*#__PURE__*/ Math.sqrt(P.x * P.x + P.y * P.y), R = {
                x: P.x / A,
                y: P.y / A
            }, M = /*#__PURE__*/ Math.max(i, s), I = {
                x: t.ctrlpts[0] + R.x * 2 * M,
                y: t.ctrlpts[1] + R.y * 2 * M
            }, O = /*#__PURE__*/ u.intersectLine(a.x, a.y, i, s, I.x, I.y, 0, c, g);
            E ? (t.ctrlpts[0] = t.ctrlpts[0] + R.x * (C - T), t.ctrlpts[1] = t.ctrlpts[1] + R.y * (C - T)) : (t.ctrlpts[0] = O[0] + R.x * C, t.ctrlpts[1] = O[1] + R.y * C);
        }
        if (y || b1 || D) {
            B = true;
            var L = {
                x: t.ctrlpts[0] - n.x,
                y: t.ctrlpts[1] - n.y
            }, N = /*#__PURE__*/ Math.sqrt(L.x * L.x + L.y * L.y), q = {
                x: L.x / N,
                y: L.y / N
            }, H = /*#__PURE__*/ Math.max(i, s), z = {
                x: t.ctrlpts[0] + q.x * 2 * H,
                y: t.ctrlpts[1] + q.y * 2 * H
            }, V = /*#__PURE__*/ f.intersectLine(n.x, n.y, o, l, z.x, z.y, 0, d, h);
            D ? (t.ctrlpts[0] = t.ctrlpts[0] + q.x * (C - S), t.ctrlpts[1] = t.ctrlpts[1] + q.y * (C - S)) : (t.ctrlpts[0] = V[0] + q.x * C, t.ctrlpts[1] = V[1] + q.y * C);
        }
        B && this.findEndpoints(r);
    }
};
mr.storeAllpts = function(r) {
    var e = r._private.rscratch;
    if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
        e.allpts = [], e.allpts.push(e.startX, e.startY);
        for(var t = 0; t + 1 < e.ctrlpts.length; t += 2)e.allpts.push(e.ctrlpts[t], e.ctrlpts[t + 1]), t + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[t] + e.ctrlpts[t + 2]) / 2, (e.ctrlpts[t + 1] + e.ctrlpts[t + 3]) / 2);
        e.allpts.push(e.endX, e.endY);
        var a, n;
        e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = .5, e.midX = /*#__PURE__*/ or(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = /*#__PURE__*/ or(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
    } else if (e.edgeType === "straight") e.allpts = [
        e.startX,
        e.startY,
        e.endX,
        e.endY
    ], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
    else if (e.edgeType === "segments") {
        if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.isRound) {
            e.roundCorners = [];
            for(var i = 2; i + 3 < e.allpts.length; i += 2){
                var s = e.radii[i / 2 - 1], o = e.isArcRadius[i / 2 - 1];
                e.roundCorners.push(/*#__PURE__*/ yo({
                    x: e.allpts[i - 2],
                    y: e.allpts[i - 1]
                }, {
                    x: e.allpts[i],
                    y: e.allpts[i + 1],
                    radius: s
                }, {
                    x: e.allpts[i + 2],
                    y: e.allpts[i + 3]
                }, s, o));
            }
        }
        if (e.segpts.length % 4 === 0) {
            var l = e.segpts.length / 2, u = l - 2;
            e.midX = (e.segpts[u] + e.segpts[l]) / 2, e.midY = (e.segpts[u + 1] + e.segpts[l + 1]) / 2;
        } else {
            var f = e.segpts.length / 2 - 1;
            if (!e.isRound) e.midX = e.segpts[f], e.midY = e.segpts[f + 1];
            else {
                var c = {
                    x: e.segpts[f],
                    y: e.segpts[f + 1]
                }, d = e.roundCorners[f / 2];
                if (d.radius === 0) {
                    var g = {
                        x: e.segpts[f + 2],
                        y: e.segpts[f + 3]
                    };
                    e.midX = c.x, e.midY = c.y, e.midVector = [
                        c.y - g.y,
                        g.x - c.x
                    ];
                } else {
                    var h = [
                        c.x - d.cx,
                        c.y - d.cy
                    ], m = d.radius / Math.sqrt(Math.pow(h[0], 2) + Math.pow(h[1], 2));
                    h = /*#__PURE__*/ h.map(function(p) {
                        return p * m;
                    }), e.midX = d.cx + h[0], e.midY = d.cy + h[1], e.midVector = h;
                }
            }
        }
    }
};
mr.checkForInvalidEdgeWarning = function(r) {
    var e = r[0]._private.rscratch;
    e.nodesOverlap || ne(e.startX) && ne(e.startY) && ne(e.endX) && ne(e.endY) ? e.loggedErr = false : e.loggedErr || (e.loggedErr = true, qe("Edge `" + r.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
mr.findEdgeControlPoints = function(r) {
    var e = this;
    if (!(!r || r.length === 0)) {
        for(var t = this, a = t.cy, n = /*#__PURE__*/ a.hasCompoundNodes(), i = new Yr, s = /*#__PURE__*/ m$1(function(D, B) {
            return [].concat(/*#__PURE__*/ bn(D), [
                B ? 1 : 0
            ]).join("-");
        }, "getKey"), o = [], l = [], u = 0; u < r.length; u++){
            var f = r[u], c = f._private, d = f.pstyle("curve-style").value;
            if (!(f.removed() || !f.takesUpSpace())) {
                if (d === "haystack") {
                    l.push(f);
                    continue;
                }
                var g = d === "unbundled-bezier" || nt(d, "segments") || d === "straight" || d === "straight-triangle" || nt(d, "taxi"), h = d === "unbundled-bezier" || d === "bezier", m = c.source, p = c.target, y = /*#__PURE__*/ m.poolIndex(), b1 = /*#__PURE__*/ p.poolIndex(), w = /*#__PURE__*/ [
                    y,
                    b1
                ].sort(), x = /*#__PURE__*/ s(w, g), C = /*#__PURE__*/ i.get(x);
                C == null && (C = {
                    eles: []
                }, o.push({
                    pairId: w,
                    edgeIsUnbundled: g
                }), i.set(x, C)), C.eles.push(f), g && (C.hasUnbundled = true), h && (C.hasBezier = true);
            }
        }
        for(var T = /*#__PURE__*/ m$1(function() {
            var D = o[E], B = D.pairId, P = D.edgeIsUnbundled, A = /*#__PURE__*/ s(B, P), R = /*#__PURE__*/ i.get(A), M;
            if (!R.hasUnbundled) {
                var I = /*#__PURE__*/ R.eles[0].parallelEdges().filter(function(le) {
                    return le.isBundledBezier();
                });
                ro(R.eles), I.forEach(function(le) {
                    return R.eles.push(le);
                }), R.eles.sort(function(le, Y) {
                    return le.poolIndex() - Y.poolIndex();
                });
            }
            var O = R.eles[0], L = /*#__PURE__*/ O.source(), N = /*#__PURE__*/ O.target();
            if (L.poolIndex() > N.poolIndex()) {
                var q = L;
                L = N, N = q;
            }
            var H = R.srcPos = /*#__PURE__*/ L.position(), z = R.tgtPos = /*#__PURE__*/ N.position(), V = R.srcW = /*#__PURE__*/ L.outerWidth(), K = R.srcH = /*#__PURE__*/ L.outerHeight(), J = R.tgtW = /*#__PURE__*/ N.outerWidth(), X = R.tgtH = /*#__PURE__*/ N.outerHeight(), ee = R.srcShape = t.nodeShapes[e.getNodeShape(L)], te = R.tgtShape = t.nodeShapes[e.getNodeShape(N)], ie = R.srcCornerRadius = L.pstyle("corner-radius").value === "auto" ? "auto" : L.pstyle("corner-radius").pfValue, j = R.tgtCornerRadius = N.pstyle("corner-radius").value === "auto" ? "auto" : N.pstyle("corner-radius").pfValue, F = R.tgtRs = N._private.rscratch, _ = R.srcRs = L._private.rscratch;
            R.dirCounts = {
                north: 0,
                west: 0,
                south: 0,
                east: 0,
                northwest: 0,
                southwest: 0,
                northeast: 0,
                southeast: 0
            };
            for(var W = 0; W < R.eles.length; W++){
                var Z = R.eles[W], ae = Z[0]._private.rscratch, de = Z.pstyle("curve-style").value, Re = de === "unbundled-bezier" || nt(de, "segments") || nt(de, "taxi"), Te = !L.same(/*#__PURE__*/ Z.source());
                if (!R.calculatedIntersection && L !== N && (R.hasBezier || R.hasUnbundled)) {
                    R.calculatedIntersection = true;
                    var xe = /*#__PURE__*/ ee.intersectLine(H.x, H.y, V, K, z.x, z.y, 0, ie, _), me = R.srcIntn = xe, se = /*#__PURE__*/ te.intersectLine(z.x, z.y, J, X, H.x, H.y, 0, j, F), he = R.tgtIntn = se, ge = R.intersectionPts = {
                        x1: xe[0],
                        x2: se[0],
                        y1: xe[1],
                        y2: se[1]
                    }, Ce = R.posPts = {
                        x1: H.x,
                        x2: z.x,
                        y1: H.y,
                        y2: z.y
                    }, ye = se[1] - xe[1], ke = se[0] - xe[0], Me = /*#__PURE__*/ Math.sqrt(ke * ke + ye * ye);
                    ne(Me) && Me >= ry || (Me = /*#__PURE__*/ Math.sqrt(Math.max(ke * ke, La) + Math.max(ye * ye, La)));
                    var Ne = R.vector = {
                        x: ke,
                        y: ye
                    }, ze = R.vectorNorm = {
                        x: Ne.x / Me,
                        y: Ne.y / Me
                    }, Fe = {
                        x: -ze.y,
                        y: ze.x
                    };
                    R.nodesOverlap = !ne(Me) || te.checkPoint(xe[0], xe[1], 0, J, X, z.x, z.y, j, F) || ee.checkPoint(se[0], se[1], 0, V, K, H.x, H.y, ie, _), R.vectorNormInverse = Fe, M = {
                        nodesOverlap: R.nodesOverlap,
                        dirCounts: R.dirCounts,
                        calculatedIntersection: true,
                        hasBezier: R.hasBezier,
                        hasUnbundled: R.hasUnbundled,
                        eles: R.eles,
                        srcPos: z,
                        srcRs: F,
                        tgtPos: H,
                        tgtRs: _,
                        srcW: J,
                        srcH: X,
                        tgtW: V,
                        tgtH: K,
                        srcIntn: he,
                        tgtIntn: me,
                        srcShape: te,
                        tgtShape: ee,
                        posPts: {
                            x1: Ce.x2,
                            y1: Ce.y2,
                            x2: Ce.x1,
                            y2: Ce.y1
                        },
                        intersectionPts: {
                            x1: ge.x2,
                            y1: ge.y2,
                            x2: ge.x1,
                            y2: ge.y1
                        },
                        vector: {
                            x: -Ne.x,
                            y: -Ne.y
                        },
                        vectorNorm: {
                            x: -ze.x,
                            y: -ze.y
                        },
                        vectorNormInverse: {
                            x: -Fe.x,
                            y: -Fe.y
                        }
                    };
                }
                var Ee = Te ? M : R;
                ae.nodesOverlap = Ee.nodesOverlap, ae.srcIntn = Ee.srcIntn, ae.tgtIntn = Ee.tgtIntn, ae.isRound = /*#__PURE__*/ de.startsWith("round"), n && (L.isParent() || L.isChild() || N.isParent() || N.isChild()) && (L.parents().anySame(N) || N.parents().anySame(L) || L.same(N) && L.isParent()) ? e.findCompoundLoopPoints(Z, Ee, W, Re) : L === N ? e.findLoopPoints(Z, Ee, W, Re) : de.endsWith("segments") ? e.findSegmentsPoints(Z, Ee) : de.endsWith("taxi") ? e.findTaxiPoints(Z, Ee) : de === "straight" || !Re && R.eles.length % 2 === 1 && W === Math.floor(R.eles.length / 2) ? e.findStraightEdgePoints(Z) : e.findBezierPoints(Z, Ee, W, Re, Te), e.findEndpoints(Z), e.tryToCorrectInvalidPoints(Z, Ee), e.checkForInvalidEdgeWarning(Z), e.storeAllpts(Z), e.storeEdgeProjections(Z), e.calculateArrowAngles(Z), e.recalculateEdgeLabelProjections(Z), e.calculateLabelAngles(Z);
            }
        }, "_loop"), E = 0; E < o.length; E++)T();
        this.findHaystackPoints(l);
    }
};
function mf(r) {
    var e = [];
    if (r != null) {
        for(var t = 0; t < r.length; t += 2){
            var a = r[t], n = r[t + 1];
            e.push({
                x: a,
                y: n
            });
        }
        return e;
    }
}
m$1(mf, "getPts");
mr.getSegmentPoints = function(r) {
    var e = r[0]._private.rscratch;
    this.recalculateRenderedStyle(r);
    var t = e.edgeType;
    if (t === "segments") return mf(e.segpts);
};
mr.getControlPoints = function(r) {
    var e = r[0]._private.rscratch;
    this.recalculateRenderedStyle(r);
    var t = e.edgeType;
    if (t === "bezier" || t === "multibezier" || t === "self" || t === "compound") return mf(e.ctrlpts);
};
mr.getEdgeMidpoint = function(r) {
    var e = r[0]._private.rscratch;
    return this.recalculateRenderedStyle(r), {
        x: e.midX,
        y: e.midY
    };
};
var Ha = {};
Ha.manualEndptToPx = function(r, e) {
    var t = this, a = /*#__PURE__*/ r.position(), n = /*#__PURE__*/ r.outerWidth(), i = /*#__PURE__*/ r.outerHeight(), s = r._private.rscratch;
    if (e.value.length === 2) {
        var o = [
            e.pfValue[0],
            e.pfValue[1]
        ];
        return e.units[0] === "%" && (o[0] = o[0] * n), e.units[1] === "%" && (o[1] = o[1] * i), o[0] += a.x, o[1] += a.y, o;
    } else {
        var l = e.pfValue[0];
        l = -Math.PI / 2 + l;
        var u = 2 * Math.max(n, i), f = [
            a.x + Math.cos(l) * u,
            a.y + Math.sin(l) * u
        ];
        return t.nodeShapes[this.getNodeShape(r)].intersectLine(a.x, a.y, n, i, f[0], f[1], 0, r.pstyle("corner-radius").value === "auto" ? "auto" : r.pstyle("corner-radius").pfValue, s);
    }
};
Ha.findEndpoints = function(r) {
    var e, t, a, n, i = this, s, o = r.source()[0], l = r.target()[0], u = /*#__PURE__*/ o.position(), f = /*#__PURE__*/ l.position(), c = r.pstyle("target-arrow-shape").value, d = r.pstyle("source-arrow-shape").value, g = r.pstyle("target-distance-from-node").pfValue, h = r.pstyle("source-distance-from-node").pfValue, m = o._private.rscratch, p = l._private.rscratch, y = r.pstyle("curve-style").value, b1 = r._private.rscratch, w = b1.edgeType, x = /*#__PURE__*/ nt(y, "taxi"), C = w === "self" || w === "compound", T = w === "bezier" || w === "multibezier" || C, E = w !== "bezier", S = w === "straight" || w === "segments", D = w === "segments", B = T || E || S, P = C || x, A = /*#__PURE__*/ r.pstyle("source-endpoint"), R = P ? "outside-to-node" : A.value, M = o.pstyle("corner-radius").value === "auto" ? "auto" : o.pstyle("corner-radius").pfValue, I = /*#__PURE__*/ r.pstyle("target-endpoint"), O = P ? "outside-to-node" : I.value, L = l.pstyle("corner-radius").value === "auto" ? "auto" : l.pstyle("corner-radius").pfValue;
    b1.srcManEndpt = A, b1.tgtManEndpt = I;
    var N, q, H, z, V = (e = (I == null || (t = I.pfValue) === null || t === void 0 ? void 0 : t.length) === 2 ? I.pfValue : null) !== null && e !== void 0 ? e : [
        0,
        0
    ], K = (a = (A == null || (n = A.pfValue) === null || n === void 0 ? void 0 : n.length) === 2 ? A.pfValue : null) !== null && a !== void 0 ? a : [
        0,
        0
    ];
    if (T) {
        var J = [
            b1.ctrlpts[0],
            b1.ctrlpts[1]
        ], X = E ? [
            b1.ctrlpts[b1.ctrlpts.length - 2],
            b1.ctrlpts[b1.ctrlpts.length - 1]
        ] : J;
        N = X, q = J;
    } else if (S) {
        var ee = D ? b1.segpts.slice(0, 2) : [
            f.x + V[0],
            f.y + V[1]
        ], te = D ? b1.segpts.slice(b1.segpts.length - 2) : [
            u.x + K[0],
            u.y + K[1]
        ];
        N = te, q = ee;
    }
    if (O === "inside-to-node") s = [
        f.x,
        f.y
    ];
    else if (I.units) s = /*#__PURE__*/ this.manualEndptToPx(l, I);
    else if (O === "outside-to-line") s = b1.tgtIntn;
    else if (O === "outside-to-node" || O === "outside-to-node-or-label" ? H = N : (O === "outside-to-line" || O === "outside-to-line-or-label") && (H = [
        u.x,
        u.y
    ]), s = /*#__PURE__*/ i.nodeShapes[this.getNodeShape(l)].intersectLine(f.x, f.y, /*#__PURE__*/ l.outerWidth(), /*#__PURE__*/ l.outerHeight(), H[0], H[1], 0, L, p), O === "outside-to-node-or-label" || O === "outside-to-line-or-label") {
        var ie = l._private.rscratch, j = ie.labelWidth, F = ie.labelHeight, _ = ie.labelX, W = ie.labelY, Z = j / 2, ae = F / 2, de = l.pstyle("text-valign").value;
        de === "top" ? W -= ae : de === "bottom" && (W += ae);
        var Re = l.pstyle("text-halign").value;
        Re === "left" ? _ -= Z : Re === "right" && (_ += Z);
        var Te = /*#__PURE__*/ Ba(H[0], H[1], [
            _ - Z,
            W - ae,
            _ + Z,
            W - ae,
            _ + Z,
            W + ae,
            _ - Z,
            W + ae
        ], f.x, f.y);
        if (Te.length > 0) {
            var xe = u, me = /*#__PURE__*/ Tt(xe, /*#__PURE__*/ $t(s)), se = /*#__PURE__*/ Tt(xe, /*#__PURE__*/ $t(Te)), he = me;
            if (se < me && (s = Te, he = se), Te.length > 2) {
                var ge = /*#__PURE__*/ Tt(xe, {
                    x: Te[2],
                    y: Te[3]
                });
                ge < he && (s = [
                    Te[2],
                    Te[3]
                ]);
            }
        }
    }
    var Ce = /*#__PURE__*/ Qa(s, N, i.arrowShapes[c].spacing(r) + g), ye = /*#__PURE__*/ Qa(s, N, i.arrowShapes[c].gap(r) + g);
    if (b1.endX = ye[0], b1.endY = ye[1], b1.arrowEndX = Ce[0], b1.arrowEndY = Ce[1], R === "inside-to-node") s = [
        u.x,
        u.y
    ];
    else if (A.units) s = /*#__PURE__*/ this.manualEndptToPx(o, A);
    else if (R === "outside-to-line") s = b1.srcIntn;
    else if (R === "outside-to-node" || R === "outside-to-node-or-label" ? z = q : (R === "outside-to-line" || R === "outside-to-line-or-label") && (z = [
        f.x,
        f.y
    ]), s = /*#__PURE__*/ i.nodeShapes[this.getNodeShape(o)].intersectLine(u.x, u.y, /*#__PURE__*/ o.outerWidth(), /*#__PURE__*/ o.outerHeight(), z[0], z[1], 0, M, m), R === "outside-to-node-or-label" || R === "outside-to-line-or-label") {
        var ke = o._private.rscratch, Me = ke.labelWidth, Ne = ke.labelHeight, ze = ke.labelX, Fe = ke.labelY, Ee = Me / 2, le = Ne / 2, Y = o.pstyle("text-valign").value;
        Y === "top" ? Fe -= le : Y === "bottom" && (Fe += le);
        var k = o.pstyle("text-halign").value;
        k === "left" ? ze -= Ee : k === "right" && (ze += Ee);
        var G = /*#__PURE__*/ Ba(z[0], z[1], [
            ze - Ee,
            Fe - le,
            ze + Ee,
            Fe - le,
            ze + Ee,
            Fe + le,
            ze - Ee,
            Fe + le
        ], u.x, u.y);
        if (G.length > 0) {
            var $ = f, U = /*#__PURE__*/ Tt($, /*#__PURE__*/ $t(s)), Q = /*#__PURE__*/ Tt($, /*#__PURE__*/ $t(G)), ue = U;
            if (Q < U && (s = [
                G[0],
                G[1]
            ], ue = Q), G.length > 2) {
                var re = /*#__PURE__*/ Tt($, {
                    x: G[2],
                    y: G[3]
                });
                re < ue && (s = [
                    G[2],
                    G[3]
                ]);
            }
        }
    }
    var fe = /*#__PURE__*/ Qa(s, q, i.arrowShapes[d].spacing(r) + h), ve = /*#__PURE__*/ Qa(s, q, i.arrowShapes[d].gap(r) + h);
    b1.startX = ve[0], b1.startY = ve[1], b1.arrowStartX = fe[0], b1.arrowStartY = fe[1], B && (!ne(b1.startX) || !ne(b1.startY) || !ne(b1.endX) || !ne(b1.endY) ? b1.badLine = true : b1.badLine = false);
};
Ha.getSourceEndpoint = function(r) {
    var e = r[0]._private.rscratch;
    switch(this.recalculateRenderedStyle(r), e.edgeType){
        case "haystack":
            return {
                x: e.haystackPts[0],
                y: e.haystackPts[1]
            };
        default:
            return {
                x: e.arrowStartX,
                y: e.arrowStartY
            };
    }
};
Ha.getTargetEndpoint = function(r) {
    var e = r[0]._private.rscratch;
    switch(this.recalculateRenderedStyle(r), e.edgeType){
        case "haystack":
            return {
                x: e.haystackPts[2],
                y: e.haystackPts[3]
            };
        default:
            return {
                x: e.arrowEndX,
                y: e.arrowEndY
            };
    }
};
var mo = {};
function ty(r, e, t) {
    for(var a = /*#__PURE__*/ m$1(function(u, f, c, d) {
        return or(u, f, c, d);
    }, "qbezierAt$1"), n = e._private, i = n.rstyle.bezierPts, s = 0; s < r.bezierProjPcts.length; s++){
        var o = r.bezierProjPcts[s];
        i.push({
            x: /*#__PURE__*/ a(t[0], t[2], t[4], o),
            y: /*#__PURE__*/ a(t[1], t[3], t[5], o)
        });
    }
}
m$1(ty, "pushBezierPts");
mo.storeEdgeProjections = function(r) {
    var e = r._private, t = e.rscratch, a = t.edgeType;
    if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
        e.rstyle.bezierPts = [];
        for(var n = 0; n + 5 < t.allpts.length; n += 4)ty(this, r, /*#__PURE__*/ t.allpts.slice(n, n + 6));
    } else if (a === "segments") for(var i = e.rstyle.linePts = [], n = 0; n + 1 < t.allpts.length; n += 2)i.push({
        x: t.allpts[n],
        y: t.allpts[n + 1]
    });
    else if (a === "haystack") {
        var s = t.haystackPts;
        e.rstyle.haystackPts = [
            {
                x: s[0],
                y: s[1]
            },
            {
                x: s[2],
                y: s[3]
            }
        ];
    }
    e.rstyle.arrowWidth = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
mo.recalculateEdgeProjections = function(r) {
    this.findEdgeControlPoints(r);
};
var Hr = {};
Hr.recalculateNodeLabelProjection = function(r) {
    var e = r.pstyle("label").strValue;
    if (!lt(e)) {
        var t, a, n = r._private, i = /*#__PURE__*/ r.width(), s = /*#__PURE__*/ r.height(), o = /*#__PURE__*/ r.padding(), l = /*#__PURE__*/ r.position(), u = r.pstyle("text-halign").strValue, f = r.pstyle("text-valign").strValue, c = n.rscratch, d = n.rstyle;
        switch(u){
            case "left":
                t = l.x - i / 2 - o;
                break;
            case "right":
                t = l.x + i / 2 + o;
                break;
            default:
                t = l.x;
        }
        switch(f){
            case "top":
                a = l.y - s / 2 - o;
                break;
            case "bottom":
                a = l.y + s / 2 + o;
                break;
            default:
                a = l.y;
        }
        c.labelX = t, c.labelY = a, d.labelX = t, d.labelY = a, this.calculateLabelAngles(r), this.applyLabelDimensions(r);
    }
};
var bf = /*#__PURE__*/ m$1(function(e, t) {
    var a = /*#__PURE__*/ Math.atan(t / e);
    return e === 0 && a < 0 && (a = a * -1), a;
}, "lineAngleFromDelta"), wf = /*#__PURE__*/ m$1(function(e, t) {
    var a = t.x - e.x, n = t.y - e.y;
    return bf(a, n);
}, "lineAngle"), ay = /*#__PURE__*/ m$1(function(e, t, a, n) {
    var i = /*#__PURE__*/ Da(0, n - .001, 1), s = /*#__PURE__*/ Da(0, n + .001, 1), o = /*#__PURE__*/ Xt(e, t, a, i), l = /*#__PURE__*/ Xt(e, t, a, s);
    return wf(o, l);
}, "bezierAngle");
Hr.recalculateEdgeLabelProjections = function(r) {
    var e, t = r._private, a = t.rscratch, n = this, i = {
        mid: r.pstyle("label").strValue,
        source: r.pstyle("source-label").strValue,
        target: r.pstyle("target-label").strValue
    };
    if (i.mid || i.source || i.target) {
        e = {
            x: a.midX,
            y: a.midY
        };
        var s = /*#__PURE__*/ m$1(function(c, d, g) {
            Xr(t.rscratch, c, d, g), Xr(t.rstyle, c, d, g);
        }, "setRs");
        s("labelX", null, e.x), s("labelY", null, e.y);
        var o = /*#__PURE__*/ bf(a.midDispX, a.midDispY);
        s("labelAutoAngle", null, o);
        var l = m$1(function() {
            if (l.cache) return l.cache;
            for(var c = [], d = 0; d + 5 < a.allpts.length; d += 4){
                var g = {
                    x: a.allpts[d],
                    y: a.allpts[d + 1]
                }, h = {
                    x: a.allpts[d + 2],
                    y: a.allpts[d + 3]
                }, m = {
                    x: a.allpts[d + 4],
                    y: a.allpts[d + 5]
                };
                c.push({
                    p0: g,
                    p1: h,
                    p2: m,
                    startDist: 0,
                    length: 0,
                    segments: []
                });
            }
            var p = t.rstyle.bezierPts, y = n.bezierProjPcts.length;
            function b1(E, S, D, B, P) {
                var A = /*#__PURE__*/ At(S, D), R = E.segments[E.segments.length - 1], M = {
                    p0: S,
                    p1: D,
                    t0: B,
                    t1: P,
                    startDist: R ? R.startDist + R.length : 0,
                    length: A
                };
                E.segments.push(M), E.length += A;
            }
            m$1(b1, "addSegment");
            for(var w = 0; w < c.length; w++){
                var x = c[w], C = c[w - 1];
                C && (x.startDist = C.startDist + C.length), b1(x, x.p0, p[w * y], 0, n.bezierProjPcts[0]);
                for(var T = 0; T < y - 1; T++)b1(x, p[w * y + T], p[w * y + T + 1], n.bezierProjPcts[T], n.bezierProjPcts[T + 1]);
                b1(x, p[w * y + y - 1], x.p2, n.bezierProjPcts[y - 1], 1);
            }
            return l.cache = c;
        }, "createControlPointInfo"), u = /*#__PURE__*/ m$1(function(c) {
            var d, g = c === "source";
            if (i[c]) {
                var h = r.pstyle(c + "-text-offset").pfValue;
                switch(a.edgeType){
                    case "self":
                    case "compound":
                    case "bezier":
                    case "multibezier":
                        {
                            for(var m = /*#__PURE__*/ l(), p, y = 0, b1 = 0, w = 0; w < m.length; w++){
                                for(var x = m[g ? w : m.length - 1 - w], C = 0; C < x.segments.length; C++){
                                    var T = x.segments[g ? C : x.segments.length - 1 - C], E = w === m.length - 1 && C === x.segments.length - 1;
                                    if (y = b1, b1 += T.length, b1 >= h || E) {
                                        p = {
                                            cp: x,
                                            segment: T
                                        };
                                        break;
                                    }
                                }
                                if (p) break;
                            }
                            var S = p.cp, D = p.segment, B = (h - y) / D.length, P = D.t1 - D.t0, A = g ? D.t0 + P * B : D.t1 - P * B;
                            A = /*#__PURE__*/ Da(0, A, 1), e = /*#__PURE__*/ Xt(S.p0, S.p1, S.p2, A), d = /*#__PURE__*/ ay(S.p0, S.p1, S.p2, A);
                            break;
                        }
                    case "straight":
                    case "segments":
                    case "haystack":
                        {
                            for(var R = 0, M, I, O, L, N = a.allpts.length, q = 0; q + 3 < N && (g ? (O = {
                                x: a.allpts[q],
                                y: a.allpts[q + 1]
                            }, L = {
                                x: a.allpts[q + 2],
                                y: a.allpts[q + 3]
                            }) : (O = {
                                x: a.allpts[N - 2 - q],
                                y: a.allpts[N - 1 - q]
                            }, L = {
                                x: a.allpts[N - 4 - q],
                                y: a.allpts[N - 3 - q]
                            }), M = /*#__PURE__*/ At(O, L), I = R, R += M, !(R >= h)); q += 2);
                            var H = h - I, z = H / M;
                            z = /*#__PURE__*/ Da(0, z, 1), e = /*#__PURE__*/ Sd(O, L, z), d = /*#__PURE__*/ wf(O, L);
                            break;
                        }
                }
                s("labelX", c, e.x), s("labelY", c, e.y), s("labelAutoAngle", c, d);
            }
        }, "calculateEndProjection");
        u("source"), u("target"), this.applyLabelDimensions(r);
    }
};
Hr.applyLabelDimensions = function(r) {
    this.applyPrefixedLabelDimensions(r), r.isEdge() && (this.applyPrefixedLabelDimensions(r, "source"), this.applyPrefixedLabelDimensions(r, "target"));
};
Hr.applyPrefixedLabelDimensions = function(r, e) {
    var t = r._private, a = /*#__PURE__*/ this.getLabelText(r, e), n = /*#__PURE__*/ Pt(a, r._private.labelDimsKey);
    if (Sr(t.rscratch, "prefixedLabelDimsKey", e) !== n) {
        Xr(t.rscratch, "prefixedLabelDimsKey", e, n);
        var i = /*#__PURE__*/ this.calculateLabelDimensions(r, a), s = r.pstyle("line-height").pfValue, o = r.pstyle("text-wrap").strValue, l = Sr(t.rscratch, "labelWrapCachedLines", e) || [], u = o !== "wrap" ? 1 : Math.max(l.length, 1), f = i.height / u, c = f * s, d = i.width, g = i.height + (u - 1) * (s - 1) * f;
        Xr(t.rstyle, "labelWidth", e, d), Xr(t.rscratch, "labelWidth", e, d), Xr(t.rstyle, "labelHeight", e, g), Xr(t.rscratch, "labelHeight", e, g), Xr(t.rscratch, "labelLineHeight", e, c);
    }
};
Hr.getLabelText = function(r, e) {
    var t = r._private, a = e ? e + "-" : "", n = r.pstyle(a + "label").strValue, i = r.pstyle("text-transform").value, s = /*#__PURE__*/ m$1(function(K, J) {
        return J ? (Xr(t.rscratch, K, e, J), J) : Sr(t.rscratch, K, e);
    }, "rscratch");
    if (!n) return "";
    i == "none" || (i == "uppercase" ? n = /*#__PURE__*/ n.toUpperCase() : i == "lowercase" && (n = /*#__PURE__*/ n.toLowerCase()));
    var o = r.pstyle("text-wrap").value;
    if (o === "wrap") {
        var l = /*#__PURE__*/ s("labelKey");
        if (l != null && s("labelWrapKey") === l) return s("labelWrapCachedText");
        for(var u = "\u200B", f = /*#__PURE__*/ n.split(`
`), c = r.pstyle("text-max-width").pfValue, d = r.pstyle("text-overflow-wrap").value, g = d === "anywhere", h = [], m = /[\s\u200b]+|$/g, p = 0; p < f.length; p++){
            var y = f[p], b1 = /*#__PURE__*/ this.calculateLabelDimensions(r, y), w = b1.width;
            if (g) {
                var x = /*#__PURE__*/ y.split("").join(u);
                y = x;
            }
            if (w > c) {
                var C = /*#__PURE__*/ y.matchAll(m), T = "", E = 0, S = /*#__PURE__*/ Dr(C), D;
                try {
                    for(S.s(); !(D = /*#__PURE__*/ S.n()).done;){
                        var B = D.value, P = B[0], A = /*#__PURE__*/ y.substring(E, B.index);
                        E = B.index + P.length;
                        var R = T.length === 0 ? A : T + A + P, M = /*#__PURE__*/ this.calculateLabelDimensions(r, R), I = M.width;
                        I <= c ? T += A + P : (T && h.push(T), T = A + P);
                    }
                } catch (V) {
                    S.e(V);
                } finally{
                    S.f();
                }
                T.match(/^[\s\u200b]+$/) || h.push(T);
            } else h.push(y);
        }
        s("labelWrapCachedLines", h), n = /*#__PURE__*/ s("labelWrapCachedText", /*#__PURE__*/ h.join(`
`)), s("labelWrapKey", l);
    } else if (o === "ellipsis") {
        var O = r.pstyle("text-max-width").pfValue, L = "", N = "\u2026", q = false;
        if (this.calculateLabelDimensions(r, n).width < O) return n;
        for(var H = 0; H < n.length; H++){
            var z = this.calculateLabelDimensions(r, L + n[H] + N).width;
            if (z > O) break;
            L += n[H], H === n.length - 1 && (q = true);
        }
        return q || (L += N), L;
    }
    return n;
};
Hr.getLabelJustification = function(r) {
    var e = r.pstyle("text-justification").strValue, t = r.pstyle("text-halign").strValue;
    if (e === "auto") if (r.isNode()) switch(t){
        case "left":
            return "right";
        case "right":
            return "left";
        default:
            return "center";
    }
    else return "center";
    else return e;
};
Hr.calculateLabelDimensions = function(r, e) {
    var t = this, a = /*#__PURE__*/ t.cy.window(), n = a.document, i = 0, s = r.pstyle("font-style").strValue, o = r.pstyle("font-size").pfValue, l = r.pstyle("font-family").strValue, u = r.pstyle("font-weight").strValue, f = this.labelCalcCanvas, c = this.labelCalcCanvasContext;
    if (!f) {
        f = this.labelCalcCanvas = /*#__PURE__*/ n.createElement("canvas"), c = this.labelCalcCanvasContext = /*#__PURE__*/ f.getContext("2d");
        var d = f.style;
        d.position = "absolute", d.left = "-9999px", d.top = "-9999px", d.zIndex = "-1", d.visibility = "hidden", d.pointerEvents = "none";
    }
    c.font = /*#__PURE__*/ "".concat(s, " ").concat(u, " ").concat(o, "px ").concat(l);
    for(var g = 0, h = 0, m = /*#__PURE__*/ e.split(`
`), p = 0; p < m.length; p++){
        var y = m[p], b1 = /*#__PURE__*/ c.measureText(y), w = /*#__PURE__*/ Math.ceil(b1.width), x = o;
        g = /*#__PURE__*/ Math.max(w, g), h += x;
    }
    return g += i, h += i, {
        width: g,
        height: h
    };
};
Hr.calculateLabelAngle = function(r, e) {
    var t = r._private, a = t.rscratch, n = /*#__PURE__*/ r.isEdge(), i = e ? e + "-" : "", s = /*#__PURE__*/ r.pstyle(i + "text-rotation"), o = s.strValue;
    return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
};
Hr.calculateLabelAngles = function(r) {
    var e = this, t = /*#__PURE__*/ r.isEdge(), a = r._private, n = a.rscratch;
    n.labelAngle = /*#__PURE__*/ e.calculateLabelAngle(r), t && (n.sourceLabelAngle = /*#__PURE__*/ e.calculateLabelAngle(r, "source"), n.targetLabelAngle = /*#__PURE__*/ e.calculateLabelAngle(r, "target"));
};
var xf = {}, Il = 28, Ol = false;
xf.getNodeShape = function(r) {
    var e = this, t = r.pstyle("shape").value;
    if (t === "cutrectangle" && (r.width() < Il || r.height() < Il)) return Ol || (qe("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Ol = true), "rectangle";
    if (r.isParent()) return t === "rectangle" || t === "roundrectangle" || t === "round-rectangle" || t === "cutrectangle" || t === "cut-rectangle" || t === "barrel" ? t : "rectangle";
    if (t === "polygon") {
        var a = r.pstyle("shape-polygon-points").value;
        return e.nodeShapes.makePolygon(a).name;
    }
    return t;
};
var Yn = {};
Yn.registerCalculationListeners = function() {
    var r = this.cy, e = /*#__PURE__*/ r.collection(), t = this, a = /*#__PURE__*/ m$1(function(s) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (e.merge(s), o) for(var l = 0; l < s.length; l++){
            var u = s[l], f = u._private, c = f.rstyle;
            c.clean = false, c.cleanConnected = false;
        }
    }, "enqueue");
    t.binder(r).on("bounds.* dirty.*", /*#__PURE__*/ m$1(function(s) {
        var o = s.target;
        a(o);
    }, "onDirtyBounds")).on("style.* background.*", /*#__PURE__*/ m$1(function(s) {
        var o = s.target;
        a(o, false);
    }, "onDirtyStyle"));
    var n = /*#__PURE__*/ m$1(function(s) {
        if (s) {
            var o = t.onUpdateEleCalcsFns;
            e.cleanStyle();
            for(var l = 0; l < e.length; l++){
                var u = e[l], f = u._private.rstyle;
                u.isNode() && !f.cleanConnected && (a(/*#__PURE__*/ u.connectedEdges()), f.cleanConnected = true);
            }
            if (o) for(var c = 0; c < o.length; c++){
                var d = o[c];
                d(s, e);
            }
            t.recalculateRenderedStyle(e), e = /*#__PURE__*/ r.collection();
        }
    }, "updateEleCalcs");
    t.flushRenderedStyleQueue = function() {
        n(true);
    }, t.beforeRender(n, t.beforeRenderPriorities.eleCalcs);
};
Yn.onUpdateEleCalcs = function(r) {
    var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
    e.push(r);
};
Yn.recalculateRenderedStyle = function(r, e) {
    var t = /*#__PURE__*/ m$1(function(x) {
        return x._private.rstyle.cleanConnected;
    }, "isCleanConnected");
    if (r.length !== 0) {
        var a = [], n = [];
        if (!this.destroyed) {
            e === void 0 && (e = true);
            for(var i = 0; i < r.length; i++){
                var s = r[i], o = s._private, l = o.rstyle;
                s.isEdge() && (!t(/*#__PURE__*/ s.source()) || !t(/*#__PURE__*/ s.target())) && (l.clean = false), s.isEdge() && s.isBundledBezier() && s.parallelEdges().some(function(w) {
                    return !w._private.rstyle.clean && w.isBundledBezier();
                }) && (l.clean = false), !(e && l.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? n.push(s) : a.push(s), l.clean = true);
            }
            for(var u = 0; u < n.length; u++){
                var f = n[u], c = f._private, d = c.rstyle, g = /*#__PURE__*/ f.position();
                this.recalculateNodeLabelProjection(f), d.nodeX = g.x, d.nodeY = g.y, d.nodeW = f.pstyle("width").pfValue, d.nodeH = f.pstyle("height").pfValue;
            }
            this.recalculateEdgeProjections(a);
            for(var h = 0; h < a.length; h++){
                var m = a[h], p = m._private, y = p.rstyle, b1 = p.rscratch;
                y.srcX = b1.arrowStartX, y.srcY = b1.arrowStartY, y.tgtX = b1.arrowEndX, y.tgtY = b1.arrowEndY, y.midX = b1.midX, y.midY = b1.midY, y.labelAngle = b1.labelAngle, y.sourceLabelAngle = b1.sourceLabelAngle, y.targetLabelAngle = b1.targetLabelAngle;
            }
        }
    }
};
var Zn = {};
Zn.updateCachedGrabbedEles = function() {
    var r = this.cachedZSortedEles;
    if (r) {
        r.drag = [], r.nondrag = [];
        for(var e = [], t = 0; t < r.length; t++){
            var a = r[t], n = a._private.rscratch;
            a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? r.drag.push(a) : r.nondrag.push(a);
        }
        for(var t = 0; t < e.length; t++){
            var a = e[t];
            r.drag.push(a);
        }
    }
};
Zn.invalidateCachedZSortedEles = function() {
    this.cachedZSortedEles = null;
};
Zn.getCachedZSortedEles = function(r) {
    if (r || !this.cachedZSortedEles) {
        var e = /*#__PURE__*/ this.cy.mutableElements().toArray();
        e.sort(rf), e.interactive = /*#__PURE__*/ e.filter(function(t) {
            return t.interactive();
        }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
    } else e = this.cachedZSortedEles;
    return e;
};
var Ef = {};
[
    It,
    Pn,
    mr,
    Ha,
    mo,
    Hr,
    xf,
    Yn,
    Zn
].forEach(function(r) {
    we(Ef, r);
});
var Cf = {};
Cf.getCachedImage = function(r, e, t) {
    var a = this, n = a.imageCache = a.imageCache || {}, i = n[r];
    if (i) return i.image.complete || i.image.addEventListener("load", t), i.image;
    i = n[r] = n[r] || {};
    var s = i.image = new Image;
    s.addEventListener("load", t), s.addEventListener("error", function() {
        s.error = true;
    });
    var o = "data:", l = r.substring(0, o.length).toLowerCase() === o;
    return l || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = r, s;
};
var sa = {};
sa.registerBinding = function(r, e, t, a) {
    var n = /*#__PURE__*/ Array.prototype.slice.apply(arguments, [
        1
    ]);
    if (Array.isArray(r)) {
        for(var i = [], s = 0; s < r.length; s++){
            var o = r[s];
            if (o !== void 0) {
                var l = /*#__PURE__*/ this.binder(o);
                i.push(/*#__PURE__*/ l.on.apply(l, n));
            }
        }
        return i;
    }
    var l = /*#__PURE__*/ this.binder(r);
    return l.on.apply(l, n);
};
sa.binder = function(r) {
    var e = this, t = /*#__PURE__*/ e.cy.window(), a = r === t || r === t.document || r === t.document.body || gc(r);
    if (e.supportsPassiveEvents == null) {
        var n = false;
        try {
            var i = /*#__PURE__*/ Object.defineProperty({}, "passive", {
                get: /*#__PURE__*/ m$1(function() {
                    return n = !0, !0;
                }, "get")
            });
            t.addEventListener("test", null, i);
        } catch  {}
        e.supportsPassiveEvents = n;
    }
    var s = /*#__PURE__*/ m$1(function(l, u, f) {
        var c = /*#__PURE__*/ Array.prototype.slice.call(arguments);
        return a && e.supportsPassiveEvents && (c[2] = {
            capture: f ?? false,
            passive: false,
            once: false
        }), e.bindings.push({
            target: r,
            args: c
        }), (r.addEventListener || r.on).apply(r, c), this;
    }, "on");
    return {
        on: s,
        addEventListener: s,
        addListener: s,
        bind: s
    };
};
sa.nodeIsDraggable = function(r) {
    return r && r.isNode() && !r.locked() && r.grabbable();
};
sa.nodeIsGrabbable = function(r) {
    return this.nodeIsDraggable(r) && r.interactive();
};
sa.load = function() {
    var r = this, e = /*#__PURE__*/ r.cy.window(), t = /*#__PURE__*/ m$1(function(k) {
        return k.selected();
    }, "isSelected"), a = /*#__PURE__*/ m$1(function(k) {
        var G = /*#__PURE__*/ k.getRootNode();
        if (G && G.nodeType === 11 && G.host !== void 0) return G;
    }, "getShadowRoot"), n = /*#__PURE__*/ m$1(function(k, G, $, U) {
        k == null && (k = r.cy);
        for(var Q = 0; Q < G.length; Q++){
            var ue = G[Q];
            k.emit({
                originalEvent: $,
                type: ue,
                position: U
            });
        }
    }, "triggerEvents"), i = /*#__PURE__*/ m$1(function(k) {
        return k.shiftKey || k.metaKey || k.ctrlKey;
    }, "isMultSelKeyDown"), s = /*#__PURE__*/ m$1(function(k, G) {
        var $ = true;
        if (r.cy.hasCompoundNodes() && k && k.pannable()) for(var U = 0; G && U < G.length; U++){
            var k = G[U];
            if (k.isNode() && k.isParent() && !k.pannable()) {
                $ = false;
                break;
            }
        }
        else $ = true;
        return $;
    }, "allowPanningPassthrough"), o = /*#__PURE__*/ m$1(function(k) {
        k[0]._private.grabbed = true;
    }, "setGrabbed"), l = /*#__PURE__*/ m$1(function(k) {
        k[0]._private.grabbed = false;
    }, "setFreed"), u = /*#__PURE__*/ m$1(function(k) {
        k[0]._private.rscratch.inDragLayer = true;
    }, "setInDragLayer"), f = /*#__PURE__*/ m$1(function(k) {
        k[0]._private.rscratch.inDragLayer = false;
    }, "setOutDragLayer"), c = /*#__PURE__*/ m$1(function(k) {
        k[0]._private.rscratch.isGrabTarget = true;
    }, "setGrabTarget"), d = /*#__PURE__*/ m$1(function(k) {
        k[0]._private.rscratch.isGrabTarget = false;
    }, "removeGrabTarget"), g = /*#__PURE__*/ m$1(function(k, G) {
        var $ = G.addToList, U = /*#__PURE__*/ $.has(k);
        !U && k.grabbable() && !k.locked() && ($.merge(k), o(k));
    }, "addToDragList"), h = /*#__PURE__*/ m$1(function(k, G) {
        if (k.cy().hasCompoundNodes() && !(G.inDragLayer == null && G.addToList == null)) {
            var $ = /*#__PURE__*/ k.descendants();
            G.inDragLayer && ($.forEach(u), $.connectedEdges().forEach(u)), G.addToList && g($, G);
        }
    }, "addDescendantsToDrag"), m = /*#__PURE__*/ m$1(function(k, G) {
        G = G || {};
        var $ = /*#__PURE__*/ k.cy().hasCompoundNodes();
        G.inDragLayer && (k.forEach(u), k.neighborhood().stdFilter(function(U) {
            return !$ || U.isEdge();
        }).forEach(u)), G.addToList && k.forEach(function(U) {
            g(U, G);
        }), h(k, G), b1(k, {
            inDragLayer: G.inDragLayer
        }), r.updateCachedGrabbedEles();
    }, "addNodesToDrag"), p = m, y = /*#__PURE__*/ m$1(function(k) {
        k && (r.getCachedZSortedEles().forEach(function(G) {
            l(G), f(G), d(G);
        }), r.updateCachedGrabbedEles());
    }, "freeDraggedElements"), b1 = /*#__PURE__*/ m$1(function(k, G) {
        if (!(G.inDragLayer == null && G.addToList == null) && k.cy().hasCompoundNodes()) {
            var $ = /*#__PURE__*/ k.ancestors().orphans();
            if (!$.same(k)) {
                var U = /*#__PURE__*/ $.descendants().spawnSelf().merge($).unmerge(k).unmerge(/*#__PURE__*/ k.descendants()), Q = /*#__PURE__*/ U.connectedEdges();
                G.inDragLayer && (Q.forEach(u), U.forEach(u)), G.addToList && U.forEach(function(ue) {
                    g(ue, G);
                });
            }
        }
    }, "updateAncestorsInDragLayer"), w = /*#__PURE__*/ m$1(function() {
        document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
    }, "blurActiveDomElement"), x = typeof MutationObserver < "u", C = typeof ResizeObserver < "u";
    x ? (r.removeObserver = new MutationObserver(function(Y) {
        for(var k = 0; k < Y.length; k++){
            var G = Y[k], $ = G.removedNodes;
            if ($) for(var U = 0; U < $.length; U++){
                var Q = $[U];
                if (Q === r.container) {
                    r.destroy();
                    break;
                }
            }
        }
    }), r.container.parentNode && r.removeObserver.observe(r.container.parentNode, {
        childList: true
    })) : r.registerBinding(r.container, "DOMNodeRemoved", function(Y) {
        r.destroy();
    });
    var T = /*#__PURE__*/ Va(function() {
        r.cy.resize();
    }, 100);
    x && (r.styleObserver = new MutationObserver(T), r.styleObserver.observe(r.container, {
        attributes: true
    })), r.registerBinding(e, "resize", T), C && (r.resizeObserver = new ResizeObserver(T), r.resizeObserver.observe(r.container));
    var E = /*#__PURE__*/ m$1(function(k, G) {
        for(; k != null;)G(k), k = k.parentNode;
    }, "forEachUp"), S = /*#__PURE__*/ m$1(function() {
        r.invalidateContainerClientCoordsCache();
    }, "invalidateCoords");
    E(r.container, function(Y) {
        r.registerBinding(Y, "transitionend", S), r.registerBinding(Y, "animationend", S), r.registerBinding(Y, "scroll", S);
    }), r.registerBinding(r.container, "contextmenu", function(Y) {
        Y.preventDefault();
    });
    var D = /*#__PURE__*/ m$1(function() {
        return r.selection[4] !== 0;
    }, "inBoxSelection"), B = /*#__PURE__*/ m$1(function(k) {
        for(var G = /*#__PURE__*/ r.findContainerClientCoords(), $ = G[0], U = G[1], Q = G[2], ue = G[3], re = k.touches ? k.touches : [
            k
        ], fe = false, ve = 0; ve < re.length; ve++){
            var be = re[ve];
            if ($ <= be.clientX && be.clientX <= $ + Q && U <= be.clientY && be.clientY <= U + ue) {
                fe = true;
                break;
            }
        }
        if (!fe) return false;
        for(var Be = r.container, Se = k.target, ce = Se.parentNode, Ae = false; ce;){
            if (ce === Be) {
                Ae = true;
                break;
            }
            ce = ce.parentNode;
        }
        return !!Ae;
    }, "eventInContainer");
    r.registerBinding(r.container, "mousedown", /*#__PURE__*/ m$1(function(k) {
        if (B(k) && !(r.hoverData.which === 1 && k.which !== 1)) {
            k.preventDefault(), w(), r.hoverData.capture = true, r.hoverData.which = k.which;
            var G = r.cy, $ = [
                k.clientX,
                k.clientY
            ], U = /*#__PURE__*/ r.projectIntoViewport($[0], $[1]), Q = r.selection, ue = /*#__PURE__*/ r.findNearestElements(U[0], U[1], true, false), re = ue[0], fe = r.dragData.possibleDragElements;
            r.hoverData.mdownPos = U, r.hoverData.mdownGPos = $;
            var ve = /*#__PURE__*/ m$1(function(Pe) {
                return {
                    originalEvent: k,
                    type: Pe,
                    position: {
                        x: U[0],
                        y: U[1]
                    }
                };
            }, "makeEvent"), be = /*#__PURE__*/ m$1(function() {
                r.hoverData.tapholdCancelled = false, clearTimeout(r.hoverData.tapholdTimeout), r.hoverData.tapholdTimeout = /*#__PURE__*/ setTimeout(function() {
                    if (!r.hoverData.tapholdCancelled) {
                        var Pe = r.hoverData.down;
                        Pe ? Pe.emit(/*#__PURE__*/ ve("taphold")) : G.emit(/*#__PURE__*/ ve("taphold"));
                    }
                }, r.tapholdDuration);
            }, "checkForTaphold");
            if (k.which == 3) {
                r.hoverData.cxtStarted = true;
                var Be = {
                    originalEvent: k,
                    type: "cxttapstart",
                    position: {
                        x: U[0],
                        y: U[1]
                    }
                };
                re ? (re.activate(), re.emit(Be), r.hoverData.down = re) : G.emit(Be), r.hoverData.downTime = /*#__PURE__*/ new Date().getTime(), r.hoverData.cxtDragged = false;
            } else if (k.which == 1) {
                re && re.activate();
                {
                    if (re != null && r.nodeIsGrabbable(re)) {
                        var Se = /*#__PURE__*/ m$1(function(Pe) {
                            Pe.emit(/*#__PURE__*/ ve("grab"));
                        }, "triggerGrab");
                        if (c(re), !re.selected()) fe = r.dragData.possibleDragElements = /*#__PURE__*/ G.collection(), p(re, {
                            addToList: fe
                        }), re.emit(/*#__PURE__*/ ve("grabon")).emit(/*#__PURE__*/ ve("grab"));
                        else {
                            fe = r.dragData.possibleDragElements = /*#__PURE__*/ G.collection();
                            var ce = /*#__PURE__*/ G.$(function(Ae) {
                                return Ae.isNode() && Ae.selected() && r.nodeIsGrabbable(Ae);
                            });
                            m(ce, {
                                addToList: fe
                            }), re.emit(/*#__PURE__*/ ve("grabon")), ce.forEach(Se);
                        }
                        r.redrawHint("eles", true), r.redrawHint("drag", true);
                    }
                    r.hoverData.down = re, r.hoverData.downs = ue, r.hoverData.downTime = /*#__PURE__*/ new Date().getTime();
                }
                n(re, [
                    "mousedown",
                    "tapstart",
                    "vmousedown"
                ], k, {
                    x: U[0],
                    y: U[1]
                }), re == null ? (Q[4] = 1, r.data.bgActivePosistion = {
                    x: U[0],
                    y: U[1]
                }, r.redrawHint("select", true), r.redraw()) : re.pannable() && (Q[4] = 1), be();
            }
            Q[0] = Q[2] = U[0], Q[1] = Q[3] = U[1];
        }
    }, "mousedownHandler"), false);
    var P = /*#__PURE__*/ a(r.container);
    r.registerBinding([
        e,
        P
    ], "mousemove", /*#__PURE__*/ m$1(function(k) {
        var G = r.hoverData.capture;
        if (!(!G && !B(k))) {
            var $ = false, U = r.cy, Q = /*#__PURE__*/ U.zoom(), ue = [
                k.clientX,
                k.clientY
            ], re = /*#__PURE__*/ r.projectIntoViewport(ue[0], ue[1]), fe = r.hoverData.mdownPos, ve = r.hoverData.mdownGPos, be = r.selection, Be = null;
            !r.hoverData.draggingEles && !r.hoverData.dragging && !r.hoverData.selecting && (Be = /*#__PURE__*/ r.findNearestElement(re[0], re[1], true, false));
            var Se = r.hoverData.last, ce = r.hoverData.down, Ae = [
                re[0] - be[2],
                re[1] - be[3]
            ], Pe = r.dragData.possibleDragElements, er;
            if (ve) {
                var Xe = ue[0] - ve[0], br = Xe * Xe, Ze = ue[1] - ve[1], sr = Ze * Ze, rr = br + sr;
                r.hoverData.isOverThresholdDrag = er = rr >= r.desktopTapThreshold2;
            }
            var vr = /*#__PURE__*/ i(k);
            er && (r.hoverData.tapholdCancelled = true);
            var et = /*#__PURE__*/ m$1(function() {
                var Pr = r.hoverData.dragDelta = r.hoverData.dragDelta || [];
                Pr.length === 0 ? (Pr.push(Ae[0]), Pr.push(Ae[1])) : (Pr[0] += Ae[0], Pr[1] += Ae[1]);
            }, "updateDragDelta");
            $ = true, n(Be, [
                "mousemove",
                "vmousemove",
                "tapdrag"
            ], k, {
                x: re[0],
                y: re[1]
            });
            var Qe = /*#__PURE__*/ m$1(function(Pr) {
                return {
                    originalEvent: k,
                    type: Pr,
                    position: {
                        x: re[0],
                        y: re[1]
                    }
                };
            }, "makeEvent"), $r = /*#__PURE__*/ m$1(function() {
                r.data.bgActivePosistion = void 0, r.hoverData.selecting || U.emit(/*#__PURE__*/ Qe("boxstart")), be[4] = 1, r.hoverData.selecting = true, r.redrawHint("select", true), r.redraw();
            }, "goIntoBoxMode");
            if (r.hoverData.which === 3) {
                if (er) {
                    var Ur = /*#__PURE__*/ Qe("cxtdrag");
                    ce ? ce.emit(Ur) : U.emit(Ur), r.hoverData.cxtDragged = true, (!r.hoverData.cxtOver || Be !== r.hoverData.cxtOver) && (r.hoverData.cxtOver && r.hoverData.cxtOver.emit(/*#__PURE__*/ Qe("cxtdragout")), r.hoverData.cxtOver = Be, Be && Be.emit(/*#__PURE__*/ Qe("cxtdragover")));
                }
            } else if (r.hoverData.dragging) {
                if ($ = true, U.panningEnabled() && U.userPanningEnabled()) {
                    var Nt;
                    if (r.hoverData.justStartedPan) {
                        var Ua = r.hoverData.mdownPos;
                        Nt = {
                            x: (re[0] - Ua[0]) * Q,
                            y: (re[1] - Ua[1]) * Q
                        }, r.hoverData.justStartedPan = false;
                    } else Nt = {
                        x: Ae[0] * Q,
                        y: Ae[1] * Q
                    };
                    U.panBy(Nt), U.emit(/*#__PURE__*/ Qe("dragpan")), r.hoverData.dragged = true;
                }
                re = /*#__PURE__*/ r.projectIntoViewport(k.clientX, k.clientY);
            } else if (be[4] == 1 && (ce == null || ce.pannable())) {
                if (er) {
                    if (!r.hoverData.dragging && U.boxSelectionEnabled() && (vr || !U.panningEnabled() || !U.userPanningEnabled())) $r();
                    else if (!r.hoverData.selecting && U.panningEnabled() && U.userPanningEnabled()) {
                        var wt = /*#__PURE__*/ s(ce, r.hoverData.downs);
                        wt && (r.hoverData.dragging = true, r.hoverData.justStartedPan = true, be[4] = 0, r.data.bgActivePosistion = /*#__PURE__*/ $t(fe), r.redrawHint("select", true), r.redraw());
                    }
                    ce && ce.pannable() && ce.active() && ce.unactivate();
                }
            } else {
                if (ce && ce.pannable() && ce.active() && ce.unactivate(), (!ce || !ce.grabbed()) && Be != Se && (Se && n(Se, [
                    "mouseout",
                    "tapdragout"
                ], k, {
                    x: re[0],
                    y: re[1]
                }), Be && n(Be, [
                    "mouseover",
                    "tapdragover"
                ], k, {
                    x: re[0],
                    y: re[1]
                }), r.hoverData.last = Be), ce) if (er) {
                    if (U.boxSelectionEnabled() && vr) ce && ce.grabbed() && (y(Pe), ce.emit(/*#__PURE__*/ Qe("freeon")), Pe.emit(/*#__PURE__*/ Qe("free")), r.dragData.didDrag && (ce.emit(/*#__PURE__*/ Qe("dragfreeon")), Pe.emit(/*#__PURE__*/ Qe("dragfree")))), $r();
                    else if (ce && ce.grabbed() && r.nodeIsDraggable(ce)) {
                        var Cr = !r.dragData.didDrag;
                        Cr && r.redrawHint("eles", true), r.dragData.didDrag = true, r.hoverData.draggingEles || m(Pe, {
                            inDragLayer: true
                        });
                        var gr = {
                            x: 0,
                            y: 0
                        };
                        if (ne(Ae[0]) && ne(Ae[1]) && (gr.x += Ae[0], gr.y += Ae[1], Cr)) {
                            var Tr = r.hoverData.dragDelta;
                            Tr && ne(Tr[0]) && ne(Tr[1]) && (gr.x += Tr[0], gr.y += Tr[1]);
                        }
                        r.hoverData.draggingEles = true, Pe.silentShift(gr).emit(/*#__PURE__*/ Qe("position")).emit(/*#__PURE__*/ Qe("drag")), r.redrawHint("drag", true), r.redraw();
                    }
                } else et();
                $ = true;
            }
            if (be[2] = re[0], be[3] = re[1], $) return k.stopPropagation && k.stopPropagation(), k.preventDefault && k.preventDefault(), false;
        }
    }, "mousemoveHandler"), false);
    var A, R, M;
    r.registerBinding(e, "mouseup", /*#__PURE__*/ m$1(function(k) {
        if (!(r.hoverData.which === 1 && k.which !== 1 && r.hoverData.capture)) {
            var G = r.hoverData.capture;
            if (G) {
                r.hoverData.capture = false;
                var $ = r.cy, U = /*#__PURE__*/ r.projectIntoViewport(k.clientX, k.clientY), Q = r.selection, ue = /*#__PURE__*/ r.findNearestElement(U[0], U[1], true, false), re = r.dragData.possibleDragElements, fe = r.hoverData.down, ve = /*#__PURE__*/ i(k);
                r.data.bgActivePosistion && (r.redrawHint("select", true), r.redraw()), r.hoverData.tapholdCancelled = true, r.data.bgActivePosistion = void 0, fe && fe.unactivate();
                var be = /*#__PURE__*/ m$1(function(Xe) {
                    return {
                        originalEvent: k,
                        type: Xe,
                        position: {
                            x: U[0],
                            y: U[1]
                        }
                    };
                }, "makeEvent");
                if (r.hoverData.which === 3) {
                    var Be = /*#__PURE__*/ be("cxttapend");
                    if (fe ? fe.emit(Be) : $.emit(Be), !r.hoverData.cxtDragged) {
                        var Se = /*#__PURE__*/ be("cxttap");
                        fe ? fe.emit(Se) : $.emit(Se);
                    }
                    r.hoverData.cxtDragged = false, r.hoverData.which = null;
                } else if (r.hoverData.which === 1) {
                    if (n(ue, [
                        "mouseup",
                        "tapend",
                        "vmouseup"
                    ], k, {
                        x: U[0],
                        y: U[1]
                    }), !r.dragData.didDrag && !r.hoverData.dragged && !r.hoverData.selecting && !r.hoverData.isOverThresholdDrag && (n(fe, [
                        "click",
                        "tap",
                        "vclick"
                    ], k, {
                        x: U[0],
                        y: U[1]
                    }), R = false, k.timeStamp - M <= $.multiClickDebounceTime() ? (A && clearTimeout(A), R = true, M = null, n(fe, [
                        "dblclick",
                        "dbltap",
                        "vdblclick"
                    ], k, {
                        x: U[0],
                        y: U[1]
                    })) : (A = /*#__PURE__*/ setTimeout(function() {
                        R || n(fe, [
                            "oneclick",
                            "onetap",
                            "voneclick"
                        ], k, {
                            x: U[0],
                            y: U[1]
                        });
                    }, /*#__PURE__*/ $.multiClickDebounceTime()), M = k.timeStamp)), fe == null && !r.dragData.didDrag && !r.hoverData.selecting && !r.hoverData.dragged && !i(k) && ($.$(t).unselect([
                        "tapunselect"
                    ]), re.length > 0 && r.redrawHint("eles", true), r.dragData.possibleDragElements = re = /*#__PURE__*/ $.collection()), ue == fe && !r.dragData.didDrag && !r.hoverData.selecting && ue != null && ue._private.selectable && (r.hoverData.dragging || ($.selectionType() === "additive" || ve ? ue.selected() ? ue.unselect([
                        "tapunselect"
                    ]) : ue.select([
                        "tapselect"
                    ]) : ve || ($.$(t).unmerge(ue).unselect([
                        "tapunselect"
                    ]), ue.select([
                        "tapselect"
                    ]))), r.redrawHint("eles", true)), r.hoverData.selecting) {
                        var ce = /*#__PURE__*/ $.collection(/*#__PURE__*/ r.getAllInBox(Q[0], Q[1], Q[2], Q[3]));
                        r.redrawHint("select", true), ce.length > 0 && r.redrawHint("eles", true), $.emit(/*#__PURE__*/ be("boxend"));
                        var Ae = /*#__PURE__*/ m$1(function(Xe) {
                            return Xe.selectable() && !Xe.selected();
                        }, "eleWouldBeSelected");
                        $.selectionType() === "additive" || ve || $.$(t).unmerge(ce).unselect(), ce.emit(/*#__PURE__*/ be("box")).stdFilter(Ae).select().emit(/*#__PURE__*/ be("boxselect")), r.redraw();
                    }
                    if (r.hoverData.dragging && (r.hoverData.dragging = false, r.redrawHint("select", true), r.redrawHint("eles", true), r.redraw()), !Q[4]) {
                        r.redrawHint("drag", true), r.redrawHint("eles", true);
                        var Pe = fe && fe.grabbed();
                        y(re), Pe && (fe.emit(/*#__PURE__*/ be("freeon")), re.emit(/*#__PURE__*/ be("free")), r.dragData.didDrag && (fe.emit(/*#__PURE__*/ be("dragfreeon")), re.emit(/*#__PURE__*/ be("dragfree"))));
                    }
                }
                Q[4] = 0, r.hoverData.down = null, r.hoverData.cxtStarted = false, r.hoverData.draggingEles = false, r.hoverData.selecting = false, r.hoverData.isOverThresholdDrag = false, r.dragData.didDrag = false, r.hoverData.dragged = false, r.hoverData.dragDelta = [], r.hoverData.mdownPos = null, r.hoverData.mdownGPos = null, r.hoverData.which = null;
            }
        }
    }, "mouseupHandler"), false);
    var I = [], O = 4, L, N = 1e5, q = /*#__PURE__*/ m$1(function(k, G) {
        for(var $ = 0; $ < k.length; $++)if (k[$] % G !== 0) return false;
        return true;
    }, "allAreDivisibleBy"), H = /*#__PURE__*/ m$1(function(k) {
        for(var G = /*#__PURE__*/ Math.abs(k[0]), $ = 1; $ < k.length; $++)if (Math.abs(k[$]) !== G) return false;
        return true;
    }, "allAreSameMagnitude"), z = /*#__PURE__*/ m$1(function(k) {
        var G = false, $ = k.deltaY;
        if ($ == null && (k.wheelDeltaY != null ? $ = k.wheelDeltaY / 4 : k.wheelDelta != null && ($ = k.wheelDelta / 4)), $ !== 0) {
            if (L == null) if (I.length >= O) {
                var U = I;
                if (L = /*#__PURE__*/ q(U, 5), !L) {
                    var Q = /*#__PURE__*/ Math.abs(U[0]);
                    L = H(U) && Q > 5;
                }
                if (L) for(var ue = 0; ue < U.length; ue++)N = /*#__PURE__*/ Math.min(/*#__PURE__*/ Math.abs(U[ue]), N);
            } else I.push($), G = true;
            else L && (N = /*#__PURE__*/ Math.min(/*#__PURE__*/ Math.abs($), N));
            if (!r.scrollingPage) {
                var re = r.cy, fe = /*#__PURE__*/ re.zoom(), ve = /*#__PURE__*/ re.pan(), be = /*#__PURE__*/ r.projectIntoViewport(k.clientX, k.clientY), Be = [
                    be[0] * fe + ve.x,
                    be[1] * fe + ve.y
                ];
                if (r.hoverData.draggingEles || r.hoverData.dragging || r.hoverData.cxtStarted || D()) {
                    k.preventDefault();
                    return;
                }
                if (re.panningEnabled() && re.userPanningEnabled() && re.zoomingEnabled() && re.userZoomingEnabled()) {
                    k.preventDefault(), r.data.wheelZooming = true, clearTimeout(r.data.wheelTimeout), r.data.wheelTimeout = /*#__PURE__*/ setTimeout(function() {
                        r.data.wheelZooming = false, r.redrawHint("eles", true), r.redraw();
                    }, 150);
                    var Se;
                    G && Math.abs($) > 5 && ($ = ao($) * 5), Se = $ / -250, L && (Se /= N, Se *= 3), Se = Se * r.wheelSensitivity;
                    var ce = k.deltaMode === 1;
                    ce && (Se *= 33);
                    var Ae = re.zoom() * Math.pow(10, Se);
                    k.type === "gesturechange" && (Ae = r.gestureStartZoom * k.scale), re.zoom({
                        level: Ae,
                        renderedPosition: {
                            x: Be[0],
                            y: Be[1]
                        }
                    }), re.emit({
                        type: k.type === "gesturechange" ? "pinchzoom" : "scrollzoom",
                        originalEvent: k,
                        position: {
                            x: be[0],
                            y: be[1]
                        }
                    });
                }
            }
        }
    }, "wheelHandler");
    r.registerBinding(r.container, "wheel", z, true), r.registerBinding(e, "scroll", /*#__PURE__*/ m$1(function(k) {
        r.scrollingPage = true, clearTimeout(r.scrollingPageTimeout), r.scrollingPageTimeout = /*#__PURE__*/ setTimeout(function() {
            r.scrollingPage = false;
        }, 250);
    }, "scrollHandler"), true), r.registerBinding(r.container, "gesturestart", /*#__PURE__*/ m$1(function(k) {
        r.gestureStartZoom = /*#__PURE__*/ r.cy.zoom(), r.hasTouchStarted || k.preventDefault();
    }, "gestureStartHandler"), true), r.registerBinding(r.container, "gesturechange", function(Y) {
        r.hasTouchStarted || z(Y);
    }, true), r.registerBinding(r.container, "mouseout", /*#__PURE__*/ m$1(function(k) {
        var G = /*#__PURE__*/ r.projectIntoViewport(k.clientX, k.clientY);
        r.cy.emit({
            originalEvent: k,
            type: "mouseout",
            position: {
                x: G[0],
                y: G[1]
            }
        });
    }, "mouseOutHandler"), false), r.registerBinding(r.container, "mouseover", /*#__PURE__*/ m$1(function(k) {
        var G = /*#__PURE__*/ r.projectIntoViewport(k.clientX, k.clientY);
        r.cy.emit({
            originalEvent: k,
            type: "mouseover",
            position: {
                x: G[0],
                y: G[1]
            }
        });
    }, "mouseOverHandler"), false);
    var V, K, J, X, ee, te, ie, j, F, _, W, Z, ae, de = /*#__PURE__*/ m$1(function(k, G, $, U) {
        return Math.sqrt(($ - k) * ($ - k) + (U - G) * (U - G));
    }, "distance"), Re = /*#__PURE__*/ m$1(function(k, G, $, U) {
        return ($ - k) * ($ - k) + (U - G) * (U - G);
    }, "distanceSq"), Te;
    r.registerBinding(r.container, "touchstart", Te = /*#__PURE__*/ m$1(function(k) {
        if (r.hasTouchStarted = true, !!B(k)) {
            w(), r.touchData.capture = true, r.data.bgActivePosistion = void 0;
            var G = r.cy, $ = r.touchData.now, U = r.touchData.earlier;
            if (k.touches[0]) {
                var Q = /*#__PURE__*/ r.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
                $[0] = Q[0], $[1] = Q[1];
            }
            if (k.touches[1]) {
                var Q = /*#__PURE__*/ r.projectIntoViewport(k.touches[1].clientX, k.touches[1].clientY);
                $[2] = Q[0], $[3] = Q[1];
            }
            if (k.touches[2]) {
                var Q = /*#__PURE__*/ r.projectIntoViewport(k.touches[2].clientX, k.touches[2].clientY);
                $[4] = Q[0], $[5] = Q[1];
            }
            var ue = /*#__PURE__*/ m$1(function(vr) {
                return {
                    originalEvent: k,
                    type: vr,
                    position: {
                        x: $[0],
                        y: $[1]
                    }
                };
            }, "makeEvent");
            if (k.touches[1]) {
                r.touchData.singleTouchMoved = true, y(r.dragData.touchDragEles);
                var re = /*#__PURE__*/ r.findContainerClientCoords();
                F = re[0], _ = re[1], W = re[2], Z = re[3], V = k.touches[0].clientX - F, K = k.touches[0].clientY - _, J = k.touches[1].clientX - F, X = k.touches[1].clientY - _, ae = 0 <= V && V <= W && 0 <= J && J <= W && 0 <= K && K <= Z && 0 <= X && X <= Z;
                var fe = /*#__PURE__*/ G.pan(), ve = /*#__PURE__*/ G.zoom();
                ee = /*#__PURE__*/ de(V, K, J, X), te = /*#__PURE__*/ Re(V, K, J, X), ie = [
                    (V + J) / 2,
                    (K + X) / 2
                ], j = [
                    (ie[0] - fe.x) / ve,
                    (ie[1] - fe.y) / ve
                ];
                var be = 200, Be = be * be;
                if (te < Be && !k.touches[2]) {
                    var Se = /*#__PURE__*/ r.findNearestElement($[0], $[1], true, true), ce = /*#__PURE__*/ r.findNearestElement($[2], $[3], true, true);
                    Se && Se.isNode() ? (Se.activate().emit(/*#__PURE__*/ ue("cxttapstart")), r.touchData.start = Se) : ce && ce.isNode() ? (ce.activate().emit(/*#__PURE__*/ ue("cxttapstart")), r.touchData.start = ce) : G.emit(/*#__PURE__*/ ue("cxttapstart")), r.touchData.start && (r.touchData.start._private.grabbed = false), r.touchData.cxt = true, r.touchData.cxtDragged = false, r.data.bgActivePosistion = void 0, r.redraw();
                    return;
                }
            }
            if (k.touches[2]) G.boxSelectionEnabled() && k.preventDefault();
            else if (!k.touches[1]) {
                if (k.touches[0]) {
                    var Ae = /*#__PURE__*/ r.findNearestElements($[0], $[1], true, true), Pe = Ae[0];
                    if (Pe != null && (Pe.activate(), r.touchData.start = Pe, r.touchData.starts = Ae, r.nodeIsGrabbable(Pe))) {
                        var er = r.dragData.touchDragEles = /*#__PURE__*/ G.collection(), Xe = null;
                        r.redrawHint("eles", true), r.redrawHint("drag", true), Pe.selected() ? (Xe = /*#__PURE__*/ G.$(function(rr) {
                            return rr.selected() && r.nodeIsGrabbable(rr);
                        }), m(Xe, {
                            addToList: er
                        })) : p(Pe, {
                            addToList: er
                        }), c(Pe), Pe.emit(/*#__PURE__*/ ue("grabon")), Xe ? Xe.forEach(function(rr) {
                            rr.emit(/*#__PURE__*/ ue("grab"));
                        }) : Pe.emit(/*#__PURE__*/ ue("grab"));
                    }
                    n(Pe, [
                        "touchstart",
                        "tapstart",
                        "vmousedown"
                    ], k, {
                        x: $[0],
                        y: $[1]
                    }), Pe == null && (r.data.bgActivePosistion = {
                        x: Q[0],
                        y: Q[1]
                    }, r.redrawHint("select", true), r.redraw()), r.touchData.singleTouchMoved = false, r.touchData.singleTouchStartTime = +new Date, clearTimeout(r.touchData.tapholdTimeout), r.touchData.tapholdTimeout = /*#__PURE__*/ setTimeout(function() {
                        r.touchData.singleTouchMoved === false && !r.pinching && !r.touchData.selecting && n(r.touchData.start, [
                            "taphold"
                        ], k, {
                            x: $[0],
                            y: $[1]
                        });
                    }, r.tapholdDuration);
                }
            }
            if (k.touches.length >= 1) {
                for(var br = r.touchData.startPosition = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ], Ze = 0; Ze < $.length; Ze++)br[Ze] = U[Ze] = $[Ze];
                var sr = k.touches[0];
                r.touchData.startGPosition = [
                    sr.clientX,
                    sr.clientY
                ];
            }
        }
    }, "touchstartHandler"), false);
    var xe;
    r.registerBinding(e, "touchmove", xe = /*#__PURE__*/ m$1(function(k) {
        var G = r.touchData.capture;
        if (!(!G && !B(k))) {
            var $ = r.selection, U = r.cy, Q = r.touchData.now, ue = r.touchData.earlier, re = /*#__PURE__*/ U.zoom();
            if (k.touches[0]) {
                var fe = /*#__PURE__*/ r.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
                Q[0] = fe[0], Q[1] = fe[1];
            }
            if (k.touches[1]) {
                var fe = /*#__PURE__*/ r.projectIntoViewport(k.touches[1].clientX, k.touches[1].clientY);
                Q[2] = fe[0], Q[3] = fe[1];
            }
            if (k.touches[2]) {
                var fe = /*#__PURE__*/ r.projectIntoViewport(k.touches[2].clientX, k.touches[2].clientY);
                Q[4] = fe[0], Q[5] = fe[1];
            }
            var ve = /*#__PURE__*/ m$1(function(ec) {
                return {
                    originalEvent: k,
                    type: ec,
                    position: {
                        x: Q[0],
                        y: Q[1]
                    }
                };
            }, "makeEvent"), be = r.touchData.startGPosition, Be;
            if (G && k.touches[0] && be) {
                for(var Se = [], ce = 0; ce < Q.length; ce++)Se[ce] = Q[ce] - ue[ce];
                var Ae = k.touches[0].clientX - be[0], Pe = Ae * Ae, er = k.touches[0].clientY - be[1], Xe = er * er, br = Pe + Xe;
                Be = br >= r.touchTapThreshold2;
            }
            if (G && r.touchData.cxt) {
                k.preventDefault();
                var Ze = k.touches[0].clientX - F, sr = k.touches[0].clientY - _, rr = k.touches[1].clientX - F, vr = k.touches[1].clientY - _, et = /*#__PURE__*/ Re(Ze, sr, rr, vr), Qe = et / te, $r = 150, Ur = $r * $r, Nt = 1.5, Ua = Nt * Nt;
                if (Qe >= Ua || et >= Ur) {
                    r.touchData.cxt = false, r.data.bgActivePosistion = void 0, r.redrawHint("select", true);
                    var wt = /*#__PURE__*/ ve("cxttapend");
                    r.touchData.start ? (r.touchData.start.unactivate().emit(wt), r.touchData.start = null) : U.emit(wt);
                }
            }
            if (G && r.touchData.cxt) {
                var wt = /*#__PURE__*/ ve("cxtdrag");
                r.data.bgActivePosistion = void 0, r.redrawHint("select", true), r.touchData.start ? r.touchData.start.emit(wt) : U.emit(wt), r.touchData.start && (r.touchData.start._private.grabbed = false), r.touchData.cxtDragged = true;
                var Cr = /*#__PURE__*/ r.findNearestElement(Q[0], Q[1], true, true);
                (!r.touchData.cxtOver || Cr !== r.touchData.cxtOver) && (r.touchData.cxtOver && r.touchData.cxtOver.emit(/*#__PURE__*/ ve("cxtdragout")), r.touchData.cxtOver = Cr, Cr && Cr.emit(/*#__PURE__*/ ve("cxtdragover")));
            } else if (G && k.touches[2] && U.boxSelectionEnabled()) k.preventDefault(), r.data.bgActivePosistion = void 0, this.lastThreeTouch = +new Date, r.touchData.selecting || U.emit(/*#__PURE__*/ ve("boxstart")), r.touchData.selecting = true, r.touchData.didSelect = true, $[4] = 1, !$ || $.length === 0 || $[0] === void 0 ? ($[0] = (Q[0] + Q[2] + Q[4]) / 3, $[1] = (Q[1] + Q[3] + Q[5]) / 3, $[2] = (Q[0] + Q[2] + Q[4]) / 3 + 1, $[3] = (Q[1] + Q[3] + Q[5]) / 3 + 1) : ($[2] = (Q[0] + Q[2] + Q[4]) / 3, $[3] = (Q[1] + Q[3] + Q[5]) / 3), r.redrawHint("select", true), r.redraw();
            else if (G && k.touches[1] && !r.touchData.didSelect && U.zoomingEnabled() && U.panningEnabled() && U.userZoomingEnabled() && U.userPanningEnabled()) {
                k.preventDefault(), r.data.bgActivePosistion = void 0, r.redrawHint("select", true);
                var gr = r.dragData.touchDragEles;
                if (gr) {
                    r.redrawHint("drag", true);
                    for(var Tr = 0; Tr < gr.length; Tr++){
                        var ua = gr[Tr]._private;
                        ua.grabbed = false, ua.rscratch.inDragLayer = false;
                    }
                }
                var Pr = r.touchData.start, Ze = k.touches[0].clientX - F, sr = k.touches[0].clientY - _, rr = k.touches[1].clientX - F, vr = k.touches[1].clientY - _, xo = /*#__PURE__*/ de(Ze, sr, rr, vr), $f = xo / ee;
                if (ae) {
                    var Uf = Ze - V, Kf = sr - K, Xf = rr - J, Yf = vr - X, Zf = (Uf + Xf) / 2, Qf = (Kf + Yf) / 2, la = /*#__PURE__*/ U.zoom(), Qn = la * $f, Ka = /*#__PURE__*/ U.pan(), Eo = j[0] * la + Ka.x, Co = j[1] * la + Ka.y, Jf = {
                        x: -Qn / la * (Eo - Ka.x - Zf) + Eo,
                        y: -Qn / la * (Co - Ka.y - Qf) + Co
                    };
                    if (Pr && Pr.active()) {
                        var gr = r.dragData.touchDragEles;
                        y(gr), r.redrawHint("drag", true), r.redrawHint("eles", true), Pr.unactivate().emit(/*#__PURE__*/ ve("freeon")), gr.emit(/*#__PURE__*/ ve("free")), r.dragData.didDrag && (Pr.emit(/*#__PURE__*/ ve("dragfreeon")), gr.emit(/*#__PURE__*/ ve("dragfree")));
                    }
                    U.viewport({
                        zoom: Qn,
                        pan: Jf,
                        cancelOnFailedZoom: true
                    }), U.emit(/*#__PURE__*/ ve("pinchzoom")), ee = xo, V = Ze, K = sr, J = rr, X = vr, r.pinching = true;
                }
                if (k.touches[0]) {
                    var fe = /*#__PURE__*/ r.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
                    Q[0] = fe[0], Q[1] = fe[1];
                }
                if (k.touches[1]) {
                    var fe = /*#__PURE__*/ r.projectIntoViewport(k.touches[1].clientX, k.touches[1].clientY);
                    Q[2] = fe[0], Q[3] = fe[1];
                }
                if (k.touches[2]) {
                    var fe = /*#__PURE__*/ r.projectIntoViewport(k.touches[2].clientX, k.touches[2].clientY);
                    Q[4] = fe[0], Q[5] = fe[1];
                }
            } else if (k.touches[0] && !r.touchData.didSelect) {
                var Lr = r.touchData.start, Jn = r.touchData.last, Cr;
                if (!r.hoverData.draggingEles && !r.swipePanning && (Cr = /*#__PURE__*/ r.findNearestElement(Q[0], Q[1], true, true)), G && Lr != null && k.preventDefault(), G && Lr != null && r.nodeIsDraggable(Lr)) if (Be) {
                    var gr = r.dragData.touchDragEles, To = !r.dragData.didDrag;
                    To && m(gr, {
                        inDragLayer: true
                    }), r.dragData.didDrag = true;
                    var va = {
                        x: 0,
                        y: 0
                    };
                    if (ne(Se[0]) && ne(Se[1]) && (va.x += Se[0], va.y += Se[1], To)) {
                        r.redrawHint("eles", true);
                        var Ir = r.touchData.dragDelta;
                        Ir && ne(Ir[0]) && ne(Ir[1]) && (va.x += Ir[0], va.y += Ir[1]);
                    }
                    r.hoverData.draggingEles = true, gr.silentShift(va).emit(/*#__PURE__*/ ve("position")).emit(/*#__PURE__*/ ve("drag")), r.redrawHint("drag", true), r.touchData.startPosition[0] == ue[0] && r.touchData.startPosition[1] == ue[1] && r.redrawHint("eles", true), r.redraw();
                } else {
                    var Ir = r.touchData.dragDelta = r.touchData.dragDelta || [];
                    Ir.length === 0 ? (Ir.push(Se[0]), Ir.push(Se[1])) : (Ir[0] += Se[0], Ir[1] += Se[1]);
                }
                if (n(Lr || Cr, [
                    "touchmove",
                    "tapdrag",
                    "vmousemove"
                ], k, {
                    x: Q[0],
                    y: Q[1]
                }), (!Lr || !Lr.grabbed()) && Cr != Jn && (Jn && Jn.emit(/*#__PURE__*/ ve("tapdragout")), Cr && Cr.emit(/*#__PURE__*/ ve("tapdragover"))), r.touchData.last = Cr, G) for(var Tr = 0; Tr < Q.length; Tr++)Q[Tr] && r.touchData.startPosition[Tr] && Be && (r.touchData.singleTouchMoved = true);
                if (G && (Lr == null || Lr.pannable()) && U.panningEnabled() && U.userPanningEnabled()) {
                    var jf = /*#__PURE__*/ s(Lr, r.touchData.starts);
                    jf && (k.preventDefault(), r.data.bgActivePosistion || (r.data.bgActivePosistion = /*#__PURE__*/ $t(r.touchData.startPosition)), r.swipePanning ? (U.panBy({
                        x: Se[0] * re,
                        y: Se[1] * re
                    }), U.emit(/*#__PURE__*/ ve("dragpan"))) : Be && (r.swipePanning = true, U.panBy({
                        x: Ae * re,
                        y: er * re
                    }), U.emit(/*#__PURE__*/ ve("dragpan")), Lr && (Lr.unactivate(), r.redrawHint("select", true), r.touchData.start = null)));
                    var fe = /*#__PURE__*/ r.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
                    Q[0] = fe[0], Q[1] = fe[1];
                }
            }
            for(var ce = 0; ce < Q.length; ce++)ue[ce] = Q[ce];
            G && k.touches.length > 0 && !r.hoverData.draggingEles && !r.swipePanning && r.data.bgActivePosistion != null && (r.data.bgActivePosistion = void 0, r.redrawHint("select", true), r.redraw());
        }
    }, "touchmoveHandler"), false);
    var me;
    r.registerBinding(e, "touchcancel", me = /*#__PURE__*/ m$1(function(k) {
        var G = r.touchData.start;
        r.touchData.capture = false, G && G.unactivate();
    }, "touchcancelHandler"));
    var se, he, ge, Ce;
    if (r.registerBinding(e, "touchend", se = /*#__PURE__*/ m$1(function(k) {
        var G = r.touchData.start, $ = r.touchData.capture;
        if ($) k.touches.length === 0 && (r.touchData.capture = false), k.preventDefault();
        else return;
        var U = r.selection;
        r.swipePanning = false, r.hoverData.draggingEles = false;
        var Q = r.cy, ue = /*#__PURE__*/ Q.zoom(), re = r.touchData.now, fe = r.touchData.earlier;
        if (k.touches[0]) {
            var ve = /*#__PURE__*/ r.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
            re[0] = ve[0], re[1] = ve[1];
        }
        if (k.touches[1]) {
            var ve = /*#__PURE__*/ r.projectIntoViewport(k.touches[1].clientX, k.touches[1].clientY);
            re[2] = ve[0], re[3] = ve[1];
        }
        if (k.touches[2]) {
            var ve = /*#__PURE__*/ r.projectIntoViewport(k.touches[2].clientX, k.touches[2].clientY);
            re[4] = ve[0], re[5] = ve[1];
        }
        var be = /*#__PURE__*/ m$1(function(Ur) {
            return {
                originalEvent: k,
                type: Ur,
                position: {
                    x: re[0],
                    y: re[1]
                }
            };
        }, "makeEvent");
        G && G.unactivate();
        var Be;
        if (r.touchData.cxt) {
            if (Be = /*#__PURE__*/ be("cxttapend"), G ? G.emit(Be) : Q.emit(Be), !r.touchData.cxtDragged) {
                var Se = /*#__PURE__*/ be("cxttap");
                G ? G.emit(Se) : Q.emit(Se);
            }
            r.touchData.start && (r.touchData.start._private.grabbed = false), r.touchData.cxt = false, r.touchData.start = null, r.redraw();
            return;
        }
        if (!k.touches[2] && Q.boxSelectionEnabled() && r.touchData.selecting) {
            r.touchData.selecting = false;
            var ce = /*#__PURE__*/ Q.collection(/*#__PURE__*/ r.getAllInBox(U[0], U[1], U[2], U[3]));
            U[0] = void 0, U[1] = void 0, U[2] = void 0, U[3] = void 0, U[4] = 0, r.redrawHint("select", true), Q.emit(/*#__PURE__*/ be("boxend"));
            var Ae = /*#__PURE__*/ m$1(function(Ur) {
                return Ur.selectable() && !Ur.selected();
            }, "eleWouldBeSelected");
            ce.emit(/*#__PURE__*/ be("box")).stdFilter(Ae).select().emit(/*#__PURE__*/ be("boxselect")), ce.nonempty() && r.redrawHint("eles", true), r.redraw();
        }
        if (G?.unactivate(), k.touches[2]) r.data.bgActivePosistion = void 0, r.redrawHint("select", true);
        else if (!k.touches[1]) {
            if (!k.touches[0]) {
                if (!k.touches[0]) {
                    r.data.bgActivePosistion = void 0, r.redrawHint("select", true);
                    var Pe = r.dragData.touchDragEles;
                    if (G != null) {
                        var er = G._private.grabbed;
                        y(Pe), r.redrawHint("drag", true), r.redrawHint("eles", true), er && (G.emit(/*#__PURE__*/ be("freeon")), Pe.emit(/*#__PURE__*/ be("free")), r.dragData.didDrag && (G.emit(/*#__PURE__*/ be("dragfreeon")), Pe.emit(/*#__PURE__*/ be("dragfree")))), n(G, [
                            "touchend",
                            "tapend",
                            "vmouseup",
                            "tapdragout"
                        ], k, {
                            x: re[0],
                            y: re[1]
                        }), G.unactivate(), r.touchData.start = null;
                    } else {
                        var Xe = /*#__PURE__*/ r.findNearestElement(re[0], re[1], true, true);
                        n(Xe, [
                            "touchend",
                            "tapend",
                            "vmouseup",
                            "tapdragout"
                        ], k, {
                            x: re[0],
                            y: re[1]
                        });
                    }
                    var br = r.touchData.startPosition[0] - re[0], Ze = br * br, sr = r.touchData.startPosition[1] - re[1], rr = sr * sr, vr = Ze + rr, et = vr * ue * ue;
                    r.touchData.singleTouchMoved || (G || Q.$(":selected").unselect([
                        "tapunselect"
                    ]), n(G, [
                        "tap",
                        "vclick"
                    ], k, {
                        x: re[0],
                        y: re[1]
                    }), he = false, k.timeStamp - Ce <= Q.multiClickDebounceTime() ? (ge && clearTimeout(ge), he = true, Ce = null, n(G, [
                        "dbltap",
                        "vdblclick"
                    ], k, {
                        x: re[0],
                        y: re[1]
                    })) : (ge = /*#__PURE__*/ setTimeout(function() {
                        he || n(G, [
                            "onetap",
                            "voneclick"
                        ], k, {
                            x: re[0],
                            y: re[1]
                        });
                    }, /*#__PURE__*/ Q.multiClickDebounceTime()), Ce = k.timeStamp)), G != null && !r.dragData.didDrag && G._private.selectable && et < r.touchTapThreshold2 && !r.pinching && (Q.selectionType() === "single" ? (Q.$(t).unmerge(G).unselect([
                        "tapunselect"
                    ]), G.select([
                        "tapselect"
                    ])) : G.selected() ? G.unselect([
                        "tapunselect"
                    ]) : G.select([
                        "tapselect"
                    ]), r.redrawHint("eles", true)), r.touchData.singleTouchMoved = true;
                }
            }
        }
        for(var Qe = 0; Qe < re.length; Qe++)fe[Qe] = re[Qe];
        r.dragData.didDrag = false, k.touches.length === 0 && (r.touchData.dragDelta = [], r.touchData.startPosition = [
            null,
            null,
            null,
            null,
            null,
            null
        ], r.touchData.startGPosition = null, r.touchData.didSelect = false), k.touches.length < 2 && (k.touches.length === 1 && (r.touchData.startGPosition = [
            k.touches[0].clientX,
            k.touches[0].clientY
        ]), r.pinching = false, r.redrawHint("eles", true), r.redraw());
    }, "touchendHandler"), false), typeof TouchEvent > "u") {
        var ye = [], ke = /*#__PURE__*/ m$1(function(k) {
            return {
                clientX: k.clientX,
                clientY: k.clientY,
                force: 1,
                identifier: k.pointerId,
                pageX: k.pageX,
                pageY: k.pageY,
                radiusX: k.width / 2,
                radiusY: k.height / 2,
                screenX: k.screenX,
                screenY: k.screenY,
                target: k.target
            };
        }, "makeTouch"), Me = /*#__PURE__*/ m$1(function(k) {
            return {
                event: k,
                touch: /*#__PURE__*/ ke(k)
            };
        }, "makePointer"), Ne = /*#__PURE__*/ m$1(function(k) {
            ye.push(/*#__PURE__*/ Me(k));
        }, "addPointer"), ze = /*#__PURE__*/ m$1(function(k) {
            for(var G = 0; G < ye.length; G++){
                var $ = ye[G];
                if ($.event.pointerId === k.pointerId) {
                    ye.splice(G, 1);
                    return;
                }
            }
        }, "removePointer"), Fe = /*#__PURE__*/ m$1(function(k) {
            var G = ye.filter(function($) {
                return $.event.pointerId === k.pointerId;
            })[0];
            G.event = k, G.touch = /*#__PURE__*/ ke(k);
        }, "updatePointer"), Ee = /*#__PURE__*/ m$1(function(k) {
            k.touches = /*#__PURE__*/ ye.map(function(G) {
                return G.touch;
            });
        }, "addTouchesToEvent"), le = /*#__PURE__*/ m$1(function(k) {
            return k.pointerType === "mouse" || k.pointerType === 4;
        }, "pointerIsMouse");
        r.registerBinding(r.container, "pointerdown", function(Y) {
            le(Y) || (Y.preventDefault(), Ne(Y), Ee(Y), Te(Y));
        }), r.registerBinding(r.container, "pointerup", function(Y) {
            le(Y) || (ze(Y), Ee(Y), se(Y));
        }), r.registerBinding(r.container, "pointercancel", function(Y) {
            le(Y) || (ze(Y), Ee(Y), me(Y));
        }), r.registerBinding(r.container, "pointermove", function(Y) {
            le(Y) || (Y.preventDefault(), Fe(Y), Ee(Y), xe(Y));
        });
    }
};
var Jr = {};
Jr.generatePolygon = function(r, e) {
    return this.nodeShapes[r] = {
        renderer: this,
        name: r,
        points: e,
        draw: /*#__PURE__*/ m$1(function(a, n, i, s, o, l) {
            this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u, f) {
            return Ba(o, l, this.points, a, n, i / 2, s / 2, u);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u, f) {
            return Qr(a, n, this.points, l, u, s, o, [
                0,
                -1
            ], i);
        }, "checkPoint"),
        hasMiterBounds: r !== "rectangle",
        miterBounds: /*#__PURE__*/ m$1(function(a, n, i, s, o, l) {
            return Rd(this.points, a, n, i, s, o);
        }, "miterBounds")
    };
};
Jr.generateEllipse = function() {
    return this.nodeShapes.ellipse = {
        renderer: this,
        name: "ellipse",
        draw: /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            return Vd(i, s, e, t, a / 2 + o, n / 2 + o);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            return Bt(e, t, n, i, s, o, a);
        }, "checkPoint")
    };
};
Jr.generateRoundPolygon = function(r, e) {
    return this.nodeShapes[r] = {
        renderer: this,
        name: r,
        points: e,
        getOrCreateCorners: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u) {
            if (l[u] !== void 0 && l[u + "-cx"] === a && l[u + "-cy"] === n) return l[u];
            l[u] = new Array(e.length / 2), l[u + "-cx"] = a, l[u + "-cy"] = n;
            var f = i / 2, c = s / 2;
            o = o === "auto" ? Cv(i, s) : o;
            for(var d = new Array(e.length / 2), g = 0; g < e.length / 2; g++)d[g] = {
                x: a + f * e[g * 2],
                y: n + c * e[g * 2 + 1]
            };
            var h, m, p, y, b1 = d.length;
            for(m = d[b1 - 1], h = 0; h < b1; h++)p = d[h % b1], y = d[(h + 1) % b1], l[u][h] = /*#__PURE__*/ yo(m, p, y, o), m = p, p = y;
            return l[u];
        }, "getOrCreateCorners"),
        draw: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u) {
            this.renderer.nodeShapeImpl("round-polygon", a, n, i, s, o, this.points, /*#__PURE__*/ this.getOrCreateCorners(n, i, s, o, l, u, "drawCorners"));
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u, f, c) {
            return _d(o, l, this.points, a, n, i, s, u, /*#__PURE__*/ this.getOrCreateCorners(a, n, i, s, f, c, "corners"));
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u, f, c) {
            return Fd(a, n, this.points, l, u, s, o, /*#__PURE__*/ this.getOrCreateCorners(l, u, s, o, f, c, "corners"));
        }, "checkPoint")
    };
};
Jr.generateRoundRectangle = function() {
    return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
        renderer: this,
        name: "round-rectangle",
        points: /*#__PURE__*/ wr(4, 0),
        draw: /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            return xv(i, s, e, t, a, n, o, l);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            var u = n / 2, f = i / 2;
            l = l === "auto" ? ft(n, i) : l, l = /*#__PURE__*/ Math.min(u, f, l);
            var c = l * 2;
            return !!(Qr(e, t, this.points, s, o, n, i - c, [
                0,
                -1
            ], a) || Qr(e, t, this.points, s, o, n - c, i, [
                0,
                -1
            ], a) || Bt(e, t, c, c, s - u + l, o - f + l, a) || Bt(e, t, c, c, s + u - l, o - f + l, a) || Bt(e, t, c, c, s + u - l, o + f - l, a) || Bt(e, t, c, c, s - u + l, o + f - l, a));
        }, "checkPoint")
    };
};
Jr.generateCutRectangle = function() {
    return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
        renderer: this,
        name: "cut-rectangle",
        cornerLength: /*#__PURE__*/ io(),
        points: /*#__PURE__*/ wr(4, 0),
        draw: /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, null, s);
        }, "draw"),
        generateCutTrianglePts: /*#__PURE__*/ m$1(function(e, t, a, n, i) {
            var s = i === "auto" ? this.cornerLength : i, o = t / 2, l = e / 2, u = a - l, f = a + l, c = n - o, d = n + o;
            return {
                topLeft: [
                    u,
                    c + s,
                    u + s,
                    c,
                    u + s,
                    c + s
                ],
                topRight: [
                    f - s,
                    c,
                    f,
                    c + s,
                    f - s,
                    c + s
                ],
                bottomRight: [
                    f,
                    d - s,
                    f - s,
                    d,
                    f - s,
                    d - s
                ],
                bottomLeft: [
                    u + s,
                    d,
                    u,
                    d - s,
                    u + s,
                    d - s
                ]
            };
        }, "generateCutTrianglePts"),
        intersectLine: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            var u = /*#__PURE__*/ this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, t, l), f = /*#__PURE__*/ [].concat.apply([], [
                /*#__PURE__*/ u.topLeft.splice(0, 4),
                /*#__PURE__*/ u.topRight.splice(0, 4),
                /*#__PURE__*/ u.bottomRight.splice(0, 4),
                /*#__PURE__*/ u.bottomLeft.splice(0, 4)
            ]);
            return Ba(i, s, f, e, t);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            var u = l === "auto" ? this.cornerLength : l;
            if (Qr(e, t, this.points, s, o, n, i - 2 * u, [
                0,
                -1
            ], a) || Qr(e, t, this.points, s, o, n - 2 * u, i, [
                0,
                -1
            ], a)) return true;
            var f = /*#__PURE__*/ this.generateCutTrianglePts(n, i, s, o);
            return kr(e, t, f.topLeft) || kr(e, t, f.topRight) || kr(e, t, f.bottomRight) || kr(e, t, f.bottomLeft);
        }, "checkPoint")
    };
};
Jr.generateBarrel = function() {
    return this.nodeShapes.barrel = {
        renderer: this,
        name: "barrel",
        points: /*#__PURE__*/ wr(4, 0),
        draw: /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            var u = .15, f = .5, c = .85, d = /*#__PURE__*/ this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, t), g = /*#__PURE__*/ m$1(function(p) {
                var y = /*#__PURE__*/ Xt({
                    x: p[0],
                    y: p[1]
                }, {
                    x: p[2],
                    y: p[3]
                }, {
                    x: p[4],
                    y: p[5]
                }, u), b1 = /*#__PURE__*/ Xt({
                    x: p[0],
                    y: p[1]
                }, {
                    x: p[2],
                    y: p[3]
                }, {
                    x: p[4],
                    y: p[5]
                }, f), w = /*#__PURE__*/ Xt({
                    x: p[0],
                    y: p[1]
                }, {
                    x: p[2],
                    y: p[3]
                }, {
                    x: p[4],
                    y: p[5]
                }, c);
                return [
                    p[0],
                    p[1],
                    y.x,
                    y.y,
                    b1.x,
                    b1.y,
                    w.x,
                    w.y,
                    p[4],
                    p[5]
                ];
            }, "approximateBarrelCurvePts"), h = /*#__PURE__*/ [].concat(/*#__PURE__*/ g(d.topLeft), /*#__PURE__*/ g(d.topRight), /*#__PURE__*/ g(d.bottomRight), /*#__PURE__*/ g(d.bottomLeft));
            return Ba(i, s, h, e, t);
        }, "intersectLine"),
        generateBarrelBezierPts: /*#__PURE__*/ m$1(function(e, t, a, n) {
            var i = t / 2, s = e / 2, o = a - s, l = a + s, u = n - i, f = n + i, c = /*#__PURE__*/ Rs(e, t), d = c.heightOffset, g = c.widthOffset, h = c.ctrlPtOffsetPct * e, m = {
                topLeft: [
                    o,
                    u + d,
                    o + h,
                    u,
                    o + g,
                    u
                ],
                topRight: [
                    l - g,
                    u,
                    l - h,
                    u,
                    l,
                    u + d
                ],
                bottomRight: [
                    l,
                    f - d,
                    l - h,
                    f,
                    l - g,
                    f
                ],
                bottomLeft: [
                    o + g,
                    f,
                    o + h,
                    f,
                    o,
                    f - d
                ]
            };
            return m.topLeft.isTop = true, m.topRight.isTop = true, m.bottomLeft.isBottom = true, m.bottomRight.isBottom = true, m;
        }, "generateBarrelBezierPts"),
        checkPoint: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            var u = /*#__PURE__*/ Rs(n, i), f = u.heightOffset, c = u.widthOffset;
            if (Qr(e, t, this.points, s, o, n, i - 2 * f, [
                0,
                -1
            ], a) || Qr(e, t, this.points, s, o, n - 2 * c, i, [
                0,
                -1
            ], a)) return true;
            for(var d = /*#__PURE__*/ this.generateBarrelBezierPts(n, i, s, o), g = /*#__PURE__*/ m$1(function(S, D, B) {
                var P = B[4], A = B[2], R = B[0], M = B[5], I = B[1], O = /*#__PURE__*/ Math.min(P, R), L = /*#__PURE__*/ Math.max(P, R), N = /*#__PURE__*/ Math.min(M, I), q = /*#__PURE__*/ Math.max(M, I);
                if (O <= S && S <= L && N <= D && D <= q) {
                    var H = /*#__PURE__*/ Gd(P, A, R), z = /*#__PURE__*/ Id(H[0], H[1], H[2], S), V = /*#__PURE__*/ z.filter(function(K) {
                        return 0 <= K && K <= 1;
                    });
                    if (V.length > 0) return V[0];
                }
                return null;
            }, "getCurveT"), h = /*#__PURE__*/ Object.keys(d), m = 0; m < h.length; m++){
                var p = h[m], y = d[p], b1 = /*#__PURE__*/ g(e, t, y);
                if (b1 != null) {
                    var w = y[5], x = y[3], C = y[1], T = /*#__PURE__*/ or(w, x, C, b1);
                    if (y.isTop && T <= t || y.isBottom && t <= T) return true;
                }
            }
            return false;
        }, "checkPoint")
    };
};
Jr.generateBottomRoundrectangle = function() {
    return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
        renderer: this,
        name: "bottom-round-rectangle",
        points: /*#__PURE__*/ wr(4, 0),
        draw: /*#__PURE__*/ m$1(function(e, t, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            var u = e - (a / 2 + o), f = t - (n / 2 + o), c = f, d = e + (a / 2 + o), g = /*#__PURE__*/ st(i, s, e, t, u, f, d, c, false);
            return g.length > 0 ? g : xv(i, s, e, t, a, n, o, l);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(e, t, a, n, i, s, o, l) {
            l = l === "auto" ? ft(n, i) : l;
            var u = 2 * l;
            if (Qr(e, t, this.points, s, o, n, i - u, [
                0,
                -1
            ], a) || Qr(e, t, this.points, s, o, n - u, i, [
                0,
                -1
            ], a)) return true;
            var f = n / 2 + 2 * a, c = i / 2 + 2 * a, d = [
                s - f,
                o - c,
                s - f,
                o,
                s + f,
                o,
                s + f,
                o - c
            ];
            return !!(kr(e, t, d) || Bt(e, t, u, u, s + n / 2 - l, o + i / 2 - l, a) || Bt(e, t, u, u, s - n / 2 + l, o + i / 2 - l, a));
        }, "checkPoint")
    };
};
Jr.registerNodeShapes = function() {
    var r = this.nodeShapes = {}, e = this;
    this.generateEllipse(), this.generatePolygon("triangle", /*#__PURE__*/ wr(3, 0)), this.generateRoundPolygon("round-triangle", /*#__PURE__*/ wr(3, 0)), this.generatePolygon("rectangle", /*#__PURE__*/ wr(4, 0)), r.square = r.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
    {
        var t = [
            0,
            1,
            1,
            0,
            0,
            -1,
            -1,
            0
        ];
        this.generatePolygon("diamond", t), this.generateRoundPolygon("round-diamond", t);
    }
    this.generatePolygon("pentagon", /*#__PURE__*/ wr(5, 0)), this.generateRoundPolygon("round-pentagon", /*#__PURE__*/ wr(5, 0)), this.generatePolygon("hexagon", /*#__PURE__*/ wr(6, 0)), this.generateRoundPolygon("round-hexagon", /*#__PURE__*/ wr(6, 0)), this.generatePolygon("heptagon", /*#__PURE__*/ wr(7, 0)), this.generateRoundPolygon("round-heptagon", /*#__PURE__*/ wr(7, 0)), this.generatePolygon("octagon", /*#__PURE__*/ wr(8, 0)), this.generateRoundPolygon("round-octagon", /*#__PURE__*/ wr(8, 0));
    var a = new Array(20);
    {
        var n = /*#__PURE__*/ As(5, 0), i = /*#__PURE__*/ As(5, Math.PI / 5), s = .5 * (3 - Math.sqrt(5));
        s *= 1.57;
        for(var o = 0; o < i.length / 2; o++)i[o * 2] *= s, i[o * 2 + 1] *= s;
        for(var o = 0; o < 20 / 4; o++)a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
    }
    a = /*#__PURE__*/ Ev(a), this.generatePolygon("star", a), this.generatePolygon("vee", [
        -1,
        -1,
        0,
        -0.333,
        1,
        -1,
        0,
        1
    ]), this.generatePolygon("rhomboid", [
        -1,
        -1,
        .333,
        -1,
        1,
        1,
        -0.333,
        1
    ]), this.generatePolygon("right-rhomboid", [
        -0.333,
        -1,
        1,
        -1,
        .333,
        1,
        -1,
        1
    ]), this.nodeShapes.concavehexagon = /*#__PURE__*/ this.generatePolygon("concave-hexagon", [
        -1,
        -0.95,
        -0.75,
        0,
        -1,
        .95,
        1,
        .95,
        .75,
        0,
        1,
        -0.95
    ]);
    {
        var l = [
            -1,
            -1,
            .25,
            -1,
            1,
            0,
            .25,
            1,
            -1,
            1
        ];
        this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l);
    }
    r.makePolygon = function(u) {
        var f = /*#__PURE__*/ u.join("$"), c = "polygon-" + f, d;
        return (d = this[c]) ? d : e.generatePolygon(c, u);
    };
};
var Wa = {};
Wa.timeToRender = function() {
    return this.redrawTotalTime / this.redrawCount;
};
Wa.redraw = function(r) {
    r = r || yv();
    var e = this;
    e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = true, e.renderOptions = r;
};
Wa.beforeRender = function(r, e) {
    if (!this.destroyed) {
        e == null && Ue("Priority is not optional for beforeRender");
        var t = this.beforeRenderCallbacks;
        t.push({
            fn: r,
            priority: e
        }), t.sort(function(a, n) {
            return n.priority - a.priority;
        });
    }
};
var Nl = /*#__PURE__*/ m$1(function(e, t, a) {
    for(var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)n[i].fn(t, a);
}, "beforeRenderCallbacks");
Wa.startRenderLoop = function() {
    var r = this, e = r.cy;
    if (!r.renderLoopStarted) {
        r.renderLoopStarted = true;
        var t = m$1(function(n) {
            if (!r.destroyed) {
                if (!e.batching()) if (r.requestedFrame && !r.skipFrame) {
                    Nl(r, true, n);
                    var i = /*#__PURE__*/ Zr();
                    r.render(r.renderOptions);
                    var s = r.lastDrawTime = /*#__PURE__*/ Zr();
                    r.averageRedrawTime === void 0 && (r.averageRedrawTime = s - i), r.redrawCount === void 0 && (r.redrawCount = 0), r.redrawCount++, r.redrawTotalTime === void 0 && (r.redrawTotalTime = 0);
                    var o = s - i;
                    r.redrawTotalTime += o, r.lastRedrawTime = o, r.averageRedrawTime = r.averageRedrawTime / 2 + o / 2, r.requestedFrame = false;
                } else Nl(r, false, n);
                r.skipFrame = false, xn(t);
            }
        }, "renderFn");
        xn(t);
    }
};
var ny = /*#__PURE__*/ m$1(function(e) {
    this.init(e);
}, "BaseRenderer"), Tf = ny, oa = Tf.prototype;
oa.clientFunctions = [
    "redrawHint",
    "render",
    "renderTo",
    "matchCanvasSize",
    "nodeShapeImpl",
    "arrowShapeImpl"
];
oa.init = function(r) {
    var e = this;
    e.options = r, e.cy = r.cy;
    var t = e.container = /*#__PURE__*/ r.cy.container(), a = /*#__PURE__*/ e.cy.window();
    if (a) {
        var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", l = n.getElementById(s) != null;
        if (t.className.indexOf(o) < 0 && (t.className = (t.className || "") + " " + o), !l) {
            var u = /*#__PURE__*/ n.createElement("style");
            u.id = s, u.textContent = "." + o + " { position: relative; }", i.insertBefore(u, i.children[0]);
        }
        var f = /*#__PURE__*/ a.getComputedStyle(t), c = /*#__PURE__*/ f.getPropertyValue("position");
        c === "static" && qe("A Cytoscape container has style position:static and so can not use UI extensions properly");
    }
    e.selection = [
        void 0,
        void 0,
        void 0,
        void 0,
        0
    ], e.bezierProjPcts = [
        .05,
        .225,
        .4,
        .5,
        .6,
        .775,
        .95
    ], e.hoverData = {
        down: null,
        last: null,
        downTime: null,
        triggerMode: null,
        dragging: false,
        initialPan: [
            null,
            null
        ],
        capture: false
    }, e.dragData = {
        possibleDragElements: []
    }, e.touchData = {
        start: null,
        capture: false,
        startPosition: [
            null,
            null,
            null,
            null,
            null,
            null
        ],
        singleTouchStartTime: null,
        singleTouchMoved: true,
        now: [
            null,
            null,
            null,
            null,
            null,
            null
        ],
        earlier: [
            null,
            null,
            null,
            null,
            null,
            null
        ]
    }, e.redraws = 0, e.showFps = r.showFps, e.debug = r.debug, e.webgl = r.webgl, e.hideEdgesOnViewport = r.hideEdgesOnViewport, e.textureOnViewport = r.textureOnViewport, e.wheelSensitivity = r.wheelSensitivity, e.motionBlurEnabled = r.motionBlur, e.forcedPixelRatio = ne(r.pixelRatio) ? r.pixelRatio : null, e.motionBlur = r.motionBlur, e.motionBlurOpacity = r.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = false, e.clearedForMotionBlur = [], e.desktopTapThreshold = r.desktopTapThreshold, e.desktopTapThreshold2 = r.desktopTapThreshold * r.desktopTapThreshold, e.touchTapThreshold = r.touchTapThreshold, e.touchTapThreshold2 = r.touchTapThreshold * r.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
        animations: 400,
        eleCalcs: 300,
        eleTxrDeq: 200,
        lyrTxrDeq: 150,
        lyrTxrSkip: 100
    }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
oa.notify = function(r, e) {
    var t = this, a = t.cy;
    if (!this.destroyed) {
        if (r === "init") {
            t.load();
            return;
        }
        if (r === "destroy") {
            t.destroy();
            return;
        }
        (r === "add" || r === "remove" || r === "move" && a.hasCompoundNodes() || r === "load" || r === "zorder" || r === "mount") && t.invalidateCachedZSortedEles(), r === "viewport" && t.redrawHint("select", true), r === "gc" && t.redrawHint("gc", true), (r === "load" || r === "resize" || r === "mount") && (t.invalidateContainerClientCoordsCache(), t.matchCanvasSize(t.container)), t.redrawHint("eles", true), t.redrawHint("drag", true), this.startRenderLoop(), this.redraw();
    }
};
oa.destroy = function() {
    var r = this;
    r.destroyed = true, r.cy.stopAnimationLoop();
    for(var e = 0; e < r.bindings.length; e++){
        var t = r.bindings[e], a = t, n = a.target;
        (n.off || n.removeEventListener).apply(n, a.args);
    }
    if (r.bindings = [], r.beforeRenderCallbacks = [], r.onUpdateEleCalcsFns = [], r.removeObserver && r.removeObserver.disconnect(), r.styleObserver && r.styleObserver.disconnect(), r.resizeObserver && r.resizeObserver.disconnect(), r.labelCalcDiv) try {
        document.body.removeChild(r.labelCalcDiv);
    } catch  {}
};
oa.isHeadless = function() {
    return false;
};
[
    po,
    Ef,
    Cf,
    sa,
    Jr,
    Wa
].forEach(function(r) {
    we(oa, r);
});
var xs = 1e3 / 60, Sf = {
    setupDequeueing: /*#__PURE__*/ m$1(function(e) {
        return m$1(function() {
            var a = this, n = this.renderer;
            if (!a.dequeueingSetup) {
                a.dequeueingSetup = true;
                var i = /*#__PURE__*/ Va(function() {
                    n.redrawHint("eles", true), n.redrawHint("drag", true), n.redraw();
                }, e.deqRedrawThreshold), s = /*#__PURE__*/ m$1(function(u, f) {
                    var c = /*#__PURE__*/ Zr(), d = n.averageRedrawTime, g = n.lastRedrawTime, h = [], m = /*#__PURE__*/ n.cy.extent(), p = /*#__PURE__*/ n.getPixelRatio();
                    for(u || n.flushRenderedStyleQueue();;){
                        var y = /*#__PURE__*/ Zr(), b1 = y - c, w = y - f;
                        if (g < xs) {
                            var x = xs - (u ? d : 0);
                            if (w >= e.deqFastCost * x) break;
                        } else if (u) {
                            if (b1 >= e.deqCost * g || b1 >= e.deqAvgCost * d) break;
                        } else if (w >= e.deqNoDrawCost * xs) break;
                        var C = /*#__PURE__*/ e.deq(a, p, m);
                        if (C.length > 0) for(var T = 0; T < C.length; T++)h.push(C[T]);
                        else break;
                    }
                    h.length > 0 && (e.onDeqd(a, h), !u && e.shouldRedraw(a, h, p, m) && i());
                }, "dequeue"), o = e.priority || eo;
                n.beforeRender(s, /*#__PURE__*/ o(a));
            }
        }, "setupDequeueingImpl");
    }, "setupDequeueing")
}, iy = /*#__PURE__*/ function() {
    function r(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : En;
        gt(this, r), this.idsByKey = new Yr, this.keyForId = new Yr, this.cachesByLvl = new Yr, this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = t;
    }
    return m$1(r, "ElementTextureCacheLookup"), pt(r, [
        {
            key: "getIdsFor",
            value: /*#__PURE__*/ m$1(function(t) {
                t == null && Ue("Can not get id list for null key");
                var a = this.idsByKey, n = /*#__PURE__*/ this.idsByKey.get(t);
                return n || (n = new ta, a.set(t, n)), n;
            }, "getIdsFor")
        },
        {
            key: "addIdForKey",
            value: /*#__PURE__*/ m$1(function(t, a) {
                t != null && this.getIdsFor(t).add(a);
            }, "addIdForKey")
        },
        {
            key: "deleteIdForKey",
            value: /*#__PURE__*/ m$1(function(t, a) {
                t != null && this.getIdsFor(t).delete(a);
            }, "deleteIdForKey")
        },
        {
            key: "getNumberOfIdsForKey",
            value: /*#__PURE__*/ m$1(function(t) {
                return t == null ? 0 : this.getIdsFor(t).size;
            }, "getNumberOfIdsForKey")
        },
        {
            key: "updateKeyMappingFor",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = /*#__PURE__*/ t.id(), n = /*#__PURE__*/ this.keyForId.get(a), i = /*#__PURE__*/ this.getKey(t);
                this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
            }, "updateKeyMappingFor")
        },
        {
            key: "deleteKeyMappingFor",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = /*#__PURE__*/ t.id(), n = /*#__PURE__*/ this.keyForId.get(a);
                this.deleteIdForKey(n, a), this.keyForId.delete(a);
            }, "deleteKeyMappingFor")
        },
        {
            key: "keyHasChangedFor",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = /*#__PURE__*/ t.id(), n = /*#__PURE__*/ this.keyForId.get(a), i = /*#__PURE__*/ this.getKey(t);
                return n !== i;
            }, "keyHasChangedFor")
        },
        {
            key: "isInvalid",
            value: /*#__PURE__*/ m$1(function(t) {
                return this.keyHasChangedFor(t) || this.doesEleInvalidateKey(t);
            }, "isInvalid")
        },
        {
            key: "getCachesAt",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = this.cachesByLvl, n = this.lvls, i = /*#__PURE__*/ a.get(t);
                return i || (i = new Yr, a.set(t, i), n.push(t)), i;
            }, "getCachesAt")
        },
        {
            key: "getCache",
            value: /*#__PURE__*/ m$1(function(t, a) {
                return this.getCachesAt(a).get(t);
            }, "getCache")
        },
        {
            key: "get",
            value: /*#__PURE__*/ m$1(function(t, a) {
                var n = /*#__PURE__*/ this.getKey(t), i = /*#__PURE__*/ this.getCache(n, a);
                return i != null && this.updateKeyMappingFor(t), i;
            }, "get")
        },
        {
            key: "getForCachedKey",
            value: /*#__PURE__*/ m$1(function(t, a) {
                var n = /*#__PURE__*/ this.keyForId.get(/*#__PURE__*/ t.id()), i = /*#__PURE__*/ this.getCache(n, a);
                return i;
            }, "getForCachedKey")
        },
        {
            key: "hasCache",
            value: /*#__PURE__*/ m$1(function(t, a) {
                return this.getCachesAt(a).has(t);
            }, "hasCache")
        },
        {
            key: "has",
            value: /*#__PURE__*/ m$1(function(t, a) {
                var n = /*#__PURE__*/ this.getKey(t);
                return this.hasCache(n, a);
            }, "has")
        },
        {
            key: "setCache",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                n.key = t, this.getCachesAt(a).set(t, n);
            }, "setCache")
        },
        {
            key: "set",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                var i = /*#__PURE__*/ this.getKey(t);
                this.setCache(i, a, n), this.updateKeyMappingFor(t);
            }, "set")
        },
        {
            key: "deleteCache",
            value: /*#__PURE__*/ m$1(function(t, a) {
                this.getCachesAt(a).delete(t);
            }, "deleteCache")
        },
        {
            key: "delete",
            value: /*#__PURE__*/ m$1(function(t, a) {
                var n = /*#__PURE__*/ this.getKey(t);
                this.deleteCache(n, a);
            }, "_delete")
        },
        {
            key: "invalidateKey",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = this;
                this.lvls.forEach(function(n) {
                    return a.deleteCache(t, n);
                });
            }, "invalidateKey")
        },
        {
            key: "invalidate",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = /*#__PURE__*/ t.id(), n = /*#__PURE__*/ this.keyForId.get(a);
                this.deleteKeyMappingFor(t);
                var i = /*#__PURE__*/ this.doesEleInvalidateKey(t);
                return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
            }, "invalidate")
        }
    ]);
}(), zl = 25, sn = 50, yn = -4, Ws = 3, kf = 7.99, sy = 8, oy = 1024, uy = 1024, ly = 1024, vy = .2, fy = .8, cy = 10, dy = .15, hy = .1, gy = .9, py = .9, yy = 100, my = 1, Kt = {
    dequeue: "dequeue",
    downscale: "downscale",
    highQuality: "highQuality"
}, by = /*#__PURE__*/ dr({
    getKey: null,
    doesEleInvalidateKey: En,
    drawElement: null,
    getBoundingBox: null,
    getRotationPoint: null,
    getRotationOffset: null,
    isVisible: hv,
    allowEdgeTxrCaching: true,
    allowParentTxrCaching: true
}), wa = /*#__PURE__*/ m$1(function(e, t) {
    var a = this;
    a.renderer = e, a.onDequeues = [];
    var n = /*#__PURE__*/ by(t);
    we(a, n), a.lookup = new iy(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, "ElementTextureCache"), ir = wa.prototype;
ir.reasons = Kt;
ir.getTextureQueue = function(r) {
    var e = this;
    return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[r] = e.eleImgCaches[r] || [];
};
ir.getRetiredTextureQueue = function(r) {
    var e = this, t = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = t[r] = t[r] || [];
    return a;
};
ir.getElementQueue = function() {
    var r = this, e = r.eleCacheQueue = r.eleCacheQueue || new qa(function(t, a) {
        return a.reqs - t.reqs;
    });
    return e;
};
ir.getElementKeyToQueue = function() {
    var r = this, e = r.eleKeyToCacheQueue = r.eleKeyToCacheQueue || {};
    return e;
};
ir.getElement = function(r, e, t, a, n) {
    var i = this, s = this.renderer, o = /*#__PURE__*/ s.cy.zoom(), l = this.lookup;
    if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !r.visible() || r.removed() || !i.allowEdgeTxrCaching && r.isEdge() || !i.allowParentTxrCaching && r.isParent()) return null;
    if (a == null && (a = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ to(o * t))), a < yn) a = yn;
    else if (o >= kf || a > Ws) return null;
    var u = /*#__PURE__*/ Math.pow(2, a), f = e.h * u, c = e.w * u, d = /*#__PURE__*/ s.eleTextBiggerThanMin(r, u);
    if (!this.isVisible(r, d)) return null;
    var g = /*#__PURE__*/ l.get(r, a);
    if (g && g.invalidated && (g.invalidated = false, g.texture.invalidatedWidth -= g.width), g) return g;
    var h;
    if (f <= zl ? h = zl : f <= sn ? h = sn : h = Math.ceil(f / sn) * sn, f > ly || c > uy) return null;
    var m = /*#__PURE__*/ i.getTextureQueue(h), p = m[m.length - 2], y = /*#__PURE__*/ m$1(function() {
        return i.recycleTexture(h, c) || i.addTexture(h, c);
    }, "addNewTxr");
    p || (p = m[m.length - 1]), p || (p = /*#__PURE__*/ y()), p.width - p.usedWidth < c && (p = /*#__PURE__*/ y());
    for(var b1 = /*#__PURE__*/ m$1(function(O) {
        return O && O.scaledLabelShown === d;
    }, "scalableFrom"), w = n && n === Kt.dequeue, x = n && n === Kt.highQuality, C = n && n === Kt.downscale, T, E = a + 1; E <= Ws; E++){
        var S = /*#__PURE__*/ l.get(r, E);
        if (S) {
            T = S;
            break;
        }
    }
    var D = T && T.level === a + 1 ? T : null, B = /*#__PURE__*/ m$1(function() {
        p.context.drawImage(D.texture.canvas, D.x, 0, D.width, D.height, p.usedWidth, 0, c, f);
    }, "downscale");
    if (p.context.setTransform(1, 0, 0, 1, 0, 0), p.context.clearRect(p.usedWidth, 0, c, h), b1(D)) B();
    else if (b1(T)) if (x) {
        for(var P = T.level; P > a; P--)D = /*#__PURE__*/ i.getElement(r, e, t, P, Kt.downscale);
        B();
    } else return i.queueElement(r, T.level - 1), T;
    else {
        var A;
        if (!w && !x && !C) for(var R = a - 1; R >= yn; R--){
            var M = /*#__PURE__*/ l.get(r, R);
            if (M) {
                A = M;
                break;
            }
        }
        if (b1(A)) return i.queueElement(r, a), A;
        p.context.translate(p.usedWidth, 0), p.context.scale(u, u), this.drawElement(p.context, r, e, d, false), p.context.scale(1 / u, 1 / u), p.context.translate(-p.usedWidth, 0);
    }
    return g = {
        x: p.usedWidth,
        texture: p,
        level: a,
        scale: u,
        width: c,
        height: f,
        scaledLabelShown: d
    }, p.usedWidth += /*#__PURE__*/ Math.ceil(c + sy), p.eleCaches.push(g), l.set(r, a, g), i.checkTextureFullness(p), g;
};
ir.invalidateElements = function(r) {
    for(var e = 0; e < r.length; e++)this.invalidateElement(r[e]);
};
ir.invalidateElement = function(r) {
    var e = this, t = e.lookup, a = [], n = /*#__PURE__*/ t.isInvalid(r);
    if (n) {
        for(var i = yn; i <= Ws; i++){
            var s = /*#__PURE__*/ t.getForCachedKey(r, i);
            s && a.push(s);
        }
        var o = /*#__PURE__*/ t.invalidate(r);
        if (o) for(var l = 0; l < a.length; l++){
            var u = a[l], f = u.texture;
            f.invalidatedWidth += u.width, u.invalidated = true, e.checkTextureUtility(f);
        }
        e.removeFromQueue(r);
    }
};
ir.checkTextureUtility = function(r) {
    r.invalidatedWidth >= vy * r.width && this.retireTexture(r);
};
ir.checkTextureFullness = function(r) {
    var e = this, t = /*#__PURE__*/ e.getTextureQueue(r.height);
    r.usedWidth / r.width > fy && r.fullnessChecks >= cy ? vt(t, r) : r.fullnessChecks++;
};
ir.retireTexture = function(r) {
    var e = this, t = r.height, a = /*#__PURE__*/ e.getTextureQueue(t), n = this.lookup;
    vt(a, r), r.retired = true;
    for(var i = r.eleCaches, s = 0; s < i.length; s++){
        var o = i[s];
        n.deleteCache(o.key, o.level);
    }
    ro(i);
    var l = /*#__PURE__*/ e.getRetiredTextureQueue(t);
    l.push(r);
};
ir.addTexture = function(r, e) {
    var t = this, a = /*#__PURE__*/ t.getTextureQueue(r), n = {};
    return a.push(n), n.eleCaches = [], n.height = r, n.width = /*#__PURE__*/ Math.max(oy, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = /*#__PURE__*/ t.renderer.makeOffscreenCanvas(n.width, n.height), n.context = /*#__PURE__*/ n.canvas.getContext("2d"), n;
};
ir.recycleTexture = function(r, e) {
    for(var t = this, a = /*#__PURE__*/ t.getTextureQueue(r), n = /*#__PURE__*/ t.getRetiredTextureQueue(r), i = 0; i < n.length; i++){
        var s = n[i];
        if (s.width >= e) return s.retired = false, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, ro(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), vt(n, s), a.push(s), s;
    }
};
ir.queueElement = function(r, e) {
    var t = this, a = /*#__PURE__*/ t.getElementQueue(), n = /*#__PURE__*/ t.getElementKeyToQueue(), i = /*#__PURE__*/ this.getKey(r), s = n[i];
    if (s) s.level = /*#__PURE__*/ Math.max(s.level, e), s.eles.merge(r), s.reqs++, a.updateItem(s);
    else {
        var o = {
            eles: /*#__PURE__*/ r.spawn().merge(r),
            level: e,
            reqs: 1,
            key: i
        };
        a.push(o), n[i] = o;
    }
};
ir.dequeue = function(r) {
    for(var e = this, t = /*#__PURE__*/ e.getElementQueue(), a = /*#__PURE__*/ e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < my && t.size() > 0; s++){
        var o = /*#__PURE__*/ t.pop(), l = o.key, u = o.eles[0], f = /*#__PURE__*/ i.hasCache(u, o.level);
        if (a[l] = null, f) continue;
        n.push(o);
        var c = /*#__PURE__*/ e.getBoundingBox(u);
        e.getElement(u, c, r, o.level, Kt.dequeue);
    }
    return n;
};
ir.removeFromQueue = function(r) {
    var e = this, t = /*#__PURE__*/ e.getElementQueue(), a = /*#__PURE__*/ e.getElementKeyToQueue(), n = /*#__PURE__*/ this.getKey(r), i = a[n];
    i != null && (i.eles.length === 1 ? (i.reqs = js, t.updateItem(i), t.pop(), a[n] = null) : i.eles.unmerge(r));
};
ir.onDequeue = function(r) {
    this.onDequeues.push(r);
};
ir.offDequeue = function(r) {
    vt(this.onDequeues, r);
};
ir.setupDequeueing = /*#__PURE__*/ Sf.setupDequeueing({
    deqRedrawThreshold: yy,
    deqCost: dy,
    deqAvgCost: hy,
    deqNoDrawCost: gy,
    deqFastCost: py,
    deq: /*#__PURE__*/ m$1(function(e, t, a) {
        return e.dequeue(t, a);
    }, "deq"),
    onDeqd: /*#__PURE__*/ m$1(function(e, t) {
        for(var a = 0; a < e.onDequeues.length; a++){
            var n = e.onDequeues[a];
            n(t);
        }
    }, "onDeqd"),
    shouldRedraw: /*#__PURE__*/ m$1(function(e, t, a, n) {
        for(var i = 0; i < t.length; i++)for(var s = t[i].eles, o = 0; o < s.length; o++){
            var l = /*#__PURE__*/ s[o].boundingBox();
            if (no(l, n)) return true;
        }
        return false;
    }, "shouldRedraw"),
    priority: /*#__PURE__*/ m$1(function(e) {
        return e.renderer.beforeRenderPriorities.eleTxrDeq;
    }, "priority")
});
var wy = 1, Ea = -4, An = 2, xy = 3.99, Ey = 50, Cy = 50, Ty = .15, Sy = .1, ky = .9, Dy = .9, By = 1, Fl = 250, Py = 4e3 * 4e3, Vl = 32767, Ay = true, Df = /*#__PURE__*/ m$1(function(e) {
    var t = this, a = t.renderer = e, n = a.cy;
    t.layersByLevel = {}, t.firstGet = true, t.lastInvalidationTime = Zr() - 2 * Fl, t.skipping = false, t.eleTxrDeqs = /*#__PURE__*/ n.collection(), t.scheduleElementRefinement = /*#__PURE__*/ Va(function() {
        t.refineElementTextures(t.eleTxrDeqs), t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
    }, Cy), a.beforeRender(function(s, o) {
        o - t.lastInvalidationTime <= Fl ? t.skipping = true : t.skipping = false;
    }, a.beforeRenderPriorities.lyrTxrSkip);
    var i = /*#__PURE__*/ m$1(function(o, l) {
        return l.reqs - o.reqs;
    }, "qSort");
    t.layersQueue = new qa(i), t.setupDequeueing();
}, "LayeredTextureCache"), hr = Df.prototype, ql = 0, Ry = Math.pow(2, 53) - 1;
hr.makeLayer = function(r, e) {
    var t = /*#__PURE__*/ Math.pow(2, e), a = /*#__PURE__*/ Math.ceil(r.w * t), n = /*#__PURE__*/ Math.ceil(r.h * t), i = /*#__PURE__*/ this.renderer.makeOffscreenCanvas(a, n), s = {
        id: ql = ++ql % Ry,
        bb: r,
        level: e,
        width: a,
        height: n,
        canvas: i,
        context: /*#__PURE__*/ i.getContext("2d"),
        eles: [],
        elesQueue: [],
        reqs: 0
    }, o = s.context, l = -s.bb.x1, u = -s.bb.y1;
    return o.scale(t, t), o.translate(l, u), s;
};
hr.getLayers = function(r, e, t) {
    var a = this, n = a.renderer, i = n.cy, s = /*#__PURE__*/ i.zoom(), o = a.firstGet;
    if (a.firstGet = false, t == null) {
        if (t = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ to(s * e)), t < Ea) t = Ea;
        else if (s >= xy || t > An) return null;
    }
    a.validateLayersElesOrdering(t, r);
    var l = a.layersByLevel, u = /*#__PURE__*/ Math.pow(2, t), f = l[t] = l[t] || [], c, d = /*#__PURE__*/ a.levelIsComplete(t, r), g, h = /*#__PURE__*/ m$1(function() {
        var B = /*#__PURE__*/ m$1(function(I) {
            if (a.validateLayersElesOrdering(I, r), a.levelIsComplete(I, r)) return g = l[I], true;
        }, "canUseAsTmpLvl"), P = /*#__PURE__*/ m$1(function(I) {
            if (!g) for(var O = t + I; Ea <= O && O <= An && !B(O); O += I);
        }, "checkLvls");
        P(1), P(-1);
        for(var A = f.length - 1; A >= 0; A--){
            var R = f[A];
            R.invalid && vt(f, R);
        }
    }, "checkTempLevels");
    if (!d) h();
    else return f;
    var m = /*#__PURE__*/ m$1(function() {
        if (!c) {
            c = /*#__PURE__*/ xr();
            for(var B = 0; B < r.length; B++)Bd(c, /*#__PURE__*/ r[B].boundingBox());
        }
        return c;
    }, "getBb"), p = /*#__PURE__*/ m$1(function(B) {
        B = B || {};
        var P = B.after;
        m();
        var A = /*#__PURE__*/ Math.ceil(c.w * u), R = /*#__PURE__*/ Math.ceil(c.h * u);
        if (A > Vl || R > Vl) return null;
        var M = A * R;
        if (M > Py) return null;
        var I = /*#__PURE__*/ a.makeLayer(c, t);
        if (P != null) {
            var O = f.indexOf(P) + 1;
            f.splice(O, 0, I);
        } else (B.insert === void 0 || B.insert) && f.unshift(I);
        return I;
    }, "makeLayer");
    if (a.skipping && !o) return null;
    for(var y = null, b1 = r.length / wy, w = !o, x = 0; x < r.length; x++){
        var C = r[x], T = C._private.rscratch, E = T.imgLayerCaches = T.imgLayerCaches || {}, S = E[t];
        if (S) {
            y = S;
            continue;
        }
        if ((!y || y.eles.length >= b1 || !wv(y.bb, /*#__PURE__*/ C.boundingBox())) && (y = /*#__PURE__*/ p({
            insert: true,
            after: y
        }), !y)) return null;
        g || w ? a.queueLayer(y, C) : a.drawEleInLayer(y, C, t, e), y.eles.push(C), E[t] = y;
    }
    return g || (w ? null : f);
};
hr.getEleLevelForLayerLevel = function(r, e) {
    return r;
};
hr.drawEleInLayer = function(r, e, t, a) {
    var n = this, i = this.renderer, s = r.context, o = /*#__PURE__*/ e.boundingBox();
    o.w === 0 || o.h === 0 || !e.visible() || (t = /*#__PURE__*/ n.getEleLevelForLayerLevel(t, a), i.setImgSmoothing(s, false), i.drawCachedElement(s, e, null, null, t, Ay), i.setImgSmoothing(s, true));
};
hr.levelIsComplete = function(r, e) {
    var t = this, a = t.layersByLevel[r];
    if (!a || a.length === 0) return false;
    for(var n = 0, i = 0; i < a.length; i++){
        var s = a[i];
        if (s.reqs > 0 || s.invalid) return false;
        n += s.eles.length;
    }
    return n === e.length;
};
hr.validateLayersElesOrdering = function(r, e) {
    var t = this.layersByLevel[r];
    if (t) for(var a = 0; a < t.length; a++){
        for(var n = t[a], i = -1, s = 0; s < e.length; s++)if (n.eles[0] === e[s]) {
            i = s;
            break;
        }
        if (i < 0) {
            this.invalidateLayer(n);
            continue;
        }
        for(var o = i, s = 0; s < n.eles.length; s++)if (n.eles[s] !== e[o + s]) {
            this.invalidateLayer(n);
            break;
        }
    }
};
hr.updateElementsInLayers = function(r, e) {
    for(var t = this, a = /*#__PURE__*/ Oa(r[0]), n = 0; n < r.length; n++)for(var i = a ? null : r[n], s = a ? r[n] : r[n].ele, o = s._private.rscratch, l = o.imgLayerCaches = o.imgLayerCaches || {}, u = Ea; u <= An; u++){
        var f = l[u];
        f && (i && t.getEleLevelForLayerLevel(f.level) !== i.level || e(f, s, i));
    }
};
hr.haveLayers = function() {
    for(var r = this, e = false, t = Ea; t <= An; t++){
        var a = r.layersByLevel[t];
        if (a && a.length > 0) {
            e = true;
            break;
        }
    }
    return e;
};
hr.invalidateElements = function(r) {
    var e = this;
    r.length !== 0 && (e.lastInvalidationTime = /*#__PURE__*/ Zr(), !(r.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(r, /*#__PURE__*/ m$1(function(a, n, i) {
        e.invalidateLayer(a);
    }, "invalAssocLayers")));
};
hr.invalidateLayer = function(r) {
    if (this.lastInvalidationTime = /*#__PURE__*/ Zr(), !r.invalid) {
        var e = r.level, t = r.eles, a = this.layersByLevel[e];
        vt(a, r), r.elesQueue = [], r.invalid = true, r.replacement && (r.replacement.invalid = true);
        for(var n = 0; n < t.length; n++){
            var i = t[n]._private.rscratch.imgLayerCaches;
            i && (i[e] = null);
        }
    }
};
hr.refineElementTextures = function(r) {
    var e = this;
    e.updateElementsInLayers(r, /*#__PURE__*/ m$1(function(a, n, i) {
        var s = a.replacement;
        if (s || (s = a.replacement = /*#__PURE__*/ e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs) for(var o = 0; o < s.eles.length; o++)e.queueLayer(s, s.eles[o]);
    }, "refineEachEle"));
};
hr.enqueueElementRefinement = function(r) {
    this.eleTxrDeqs.merge(r), this.scheduleElementRefinement();
};
hr.queueLayer = function(r, e) {
    var t = this, a = t.layersQueue, n = r.elesQueue, i = n.hasId = n.hasId || {};
    if (!r.replacement) {
        if (e) {
            if (i[e.id()]) return;
            n.push(e), i[e.id()] = true;
        }
        r.reqs ? (r.reqs++, a.updateItem(r)) : (r.reqs = 1, a.push(r));
    }
};
hr.dequeue = function(r) {
    for(var e = this, t = e.layersQueue, a = [], n = 0; n < By && t.size() !== 0;){
        var i = /*#__PURE__*/ t.peek();
        if (i.replacement) {
            t.pop();
            continue;
        }
        if (i.replaces && i !== i.replaces.replacement) {
            t.pop();
            continue;
        }
        if (i.invalid) {
            t.pop();
            continue;
        }
        var s = /*#__PURE__*/ i.elesQueue.shift();
        s && (e.drawEleInLayer(i, s, i.level, r), n++), a.length === 0 && a.push(true), i.elesQueue.length === 0 && (t.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
    }
    return a;
};
hr.applyLayerReplacement = function(r) {
    var e = this, t = e.layersByLevel[r.level], a = r.replaces, n = /*#__PURE__*/ t.indexOf(a);
    if (!(n < 0 || a.invalid)) {
        t[n] = r;
        for(var i = 0; i < r.eles.length; i++){
            var s = r.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
            o && (o[r.level] = r);
        }
        e.requestRedraw();
    }
};
hr.requestRedraw = /*#__PURE__*/ Va(function() {
    var r = this.renderer;
    r.redrawHint("eles", true), r.redrawHint("drag", true), r.redraw();
}, 100);
hr.setupDequeueing = /*#__PURE__*/ Sf.setupDequeueing({
    deqRedrawThreshold: Ey,
    deqCost: Ty,
    deqAvgCost: Sy,
    deqNoDrawCost: ky,
    deqFastCost: Dy,
    deq: /*#__PURE__*/ m$1(function(e, t) {
        return e.dequeue(t);
    }, "deq"),
    onDeqd: eo,
    shouldRedraw: hv,
    priority: /*#__PURE__*/ m$1(function(e) {
        return e.renderer.beforeRenderPriorities.lyrTxrDeq;
    }, "priority")
});
var Bf = {}, _l;
function My(r, e) {
    for(var t = 0; t < e.length; t++){
        var a = e[t];
        r.lineTo(a.x, a.y);
    }
}
m$1(My, "polygon");
function Ly(r, e, t) {
    for(var a, n = 0; n < e.length; n++){
        var i = e[n];
        n === 0 && (a = i), r.lineTo(i.x, i.y);
    }
    r.quadraticCurveTo(t.x, t.y, a.x, a.y);
}
m$1(Ly, "triangleBackcurve");
function Gl(r, e, t) {
    r.beginPath && r.beginPath();
    for(var a = e, n = 0; n < a.length; n++){
        var i = a[n];
        r.lineTo(i.x, i.y);
    }
    var s = t, o = t[0];
    r.moveTo(o.x, o.y);
    for(var n = 1; n < s.length; n++){
        var i = s[n];
        r.lineTo(i.x, i.y);
    }
    r.closePath && r.closePath();
}
m$1(Gl, "triangleTee");
function Iy(r, e, t, a, n) {
    r.beginPath && r.beginPath(), r.arc(t, a, n, 0, Math.PI * 2, false);
    var i = e, s = i[0];
    r.moveTo(s.x, s.y);
    for(var o = 0; o < i.length; o++){
        var l = i[o];
        r.lineTo(l.x, l.y);
    }
    r.closePath && r.closePath();
}
m$1(Iy, "circleTriangle");
function Oy(r, e, t, a) {
    r.arc(e, t, a, 0, Math.PI * 2, false);
}
m$1(Oy, "circle$1");
Bf.arrowShapeImpl = function(r) {
    return (_l || (_l = {
        polygon: My,
        "triangle-backcurve": Ly,
        "triangle-tee": Gl,
        "circle-triangle": Iy,
        "triangle-cross": Gl,
        circle: Oy
    }))[r];
};
var Wr = {};
Wr.drawElement = function(r, e, t, a, n, i) {
    var s = this;
    e.isNode() ? s.drawNode(r, e, t, a, n, i) : s.drawEdge(r, e, t, a, n, i);
};
Wr.drawElementOverlay = function(r, e) {
    var t = this;
    e.isNode() ? t.drawNodeOverlay(r, e) : t.drawEdgeOverlay(r, e);
};
Wr.drawElementUnderlay = function(r, e) {
    var t = this;
    e.isNode() ? t.drawNodeUnderlay(r, e) : t.drawEdgeUnderlay(r, e);
};
Wr.drawCachedElementPortion = function(r, e, t, a, n, i, s, o) {
    var l = this, u = /*#__PURE__*/ t.getBoundingBox(e);
    if (!(u.w === 0 || u.h === 0)) {
        var f = /*#__PURE__*/ t.getElement(e, u, a, n, i);
        if (f != null) {
            var c = /*#__PURE__*/ o(l, e);
            if (c === 0) return;
            var d = /*#__PURE__*/ s(l, e), g = u.x1, h = u.y1, m = u.w, p = u.h, y, b1, w, x, C;
            if (d !== 0) {
                var T = /*#__PURE__*/ t.getRotationPoint(e);
                w = T.x, x = T.y, r.translate(w, x), r.rotate(d), C = /*#__PURE__*/ l.getImgSmoothing(r), C || l.setImgSmoothing(r, true);
                var E = /*#__PURE__*/ t.getRotationOffset(e);
                y = E.x, b1 = E.y;
            } else y = g, b1 = h;
            var S;
            c !== 1 && (S = r.globalAlpha, r.globalAlpha = S * c), r.drawImage(f.texture.canvas, f.x, 0, f.width, f.height, y, b1, m, p), c !== 1 && (r.globalAlpha = S), d !== 0 && (r.rotate(-d), r.translate(-w, -x), C || l.setImgSmoothing(r, false));
        } else t.drawElement(r, e);
    }
};
var Ny = /*#__PURE__*/ m$1(function() {
    return 0;
}, "getZeroRotation"), zy = /*#__PURE__*/ m$1(function(e, t) {
    return e.getTextAngle(t, null);
}, "getLabelRotation"), Fy = /*#__PURE__*/ m$1(function(e, t) {
    return e.getTextAngle(t, "source");
}, "getSourceLabelRotation"), Vy = /*#__PURE__*/ m$1(function(e, t) {
    return e.getTextAngle(t, "target");
}, "getTargetLabelRotation"), qy = /*#__PURE__*/ m$1(function(e, t) {
    return t.effectiveOpacity();
}, "getOpacity"), Es = /*#__PURE__*/ m$1(function(e, t) {
    return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
}, "getTextOpacity");
Wr.drawCachedElement = function(r, e, t, a, n, i) {
    var s = this, o = s.data, l = o.eleTxrCache, u = o.lblTxrCache, f = o.slbTxrCache, c = o.tlbTxrCache, d = /*#__PURE__*/ e.boundingBox(), g = i === true ? l.reasons.highQuality : null;
    if (!(d.w === 0 || d.h === 0 || !e.visible()) && (!a || no(d, a))) {
        var h = /*#__PURE__*/ e.isEdge(), m = e.element()._private.rscratch.badLine;
        s.drawElementUnderlay(r, e), s.drawCachedElementPortion(r, e, l, t, n, g, Ny, qy), (!h || !m) && s.drawCachedElementPortion(r, e, u, t, n, g, zy, Es), h && !m && (s.drawCachedElementPortion(r, e, f, t, n, g, Fy, Es), s.drawCachedElementPortion(r, e, c, t, n, g, Vy, Es)), s.drawElementOverlay(r, e);
    }
};
Wr.drawElements = function(r, e) {
    for(var t = this, a = 0; a < e.length; a++){
        var n = e[a];
        t.drawElement(r, n);
    }
};
Wr.drawCachedElements = function(r, e, t, a) {
    for(var n = this, i = 0; i < e.length; i++){
        var s = e[i];
        n.drawCachedElement(r, s, t, a);
    }
};
Wr.drawCachedNodes = function(r, e, t, a) {
    for(var n = this, i = 0; i < e.length; i++){
        var s = e[i];
        s.isNode() && n.drawCachedElement(r, s, t, a);
    }
};
Wr.drawLayeredElements = function(r, e, t, a) {
    var n = this, i = /*#__PURE__*/ n.data.lyrTxrCache.getLayers(e, t);
    if (i) for(var s = 0; s < i.length; s++){
        var o = i[s], l = o.bb;
        l.w === 0 || l.h === 0 || r.drawImage(o.canvas, l.x1, l.y1, l.w, l.h);
    }
    else n.drawCachedElements(r, e, t, a);
};
var jr = {};
jr.drawEdge = function(r, e, t) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o = e._private.rscratch;
    if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
        var l;
        t && (l = t, r.translate(-l.x1, -l.y1));
        var u = i ? e.pstyle("opacity").value : 1, f = i ? e.pstyle("line-opacity").value : 1, c = e.pstyle("curve-style").value, d = e.pstyle("line-style").value, g = e.pstyle("width").pfValue, h = e.pstyle("line-cap").value, m = e.pstyle("line-outline-width").value, p = e.pstyle("line-outline-color").value, y = u * f, b1 = u * f, w = /*#__PURE__*/ m$1(function() {
            var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
            c === "straight-triangle" ? (s.eleStrokeStyle(r, e, I), s.drawEdgeTrianglePath(e, r, o.allpts)) : (r.lineWidth = g, r.lineCap = h, s.eleStrokeStyle(r, e, I), s.drawEdgePath(e, r, o.allpts, d), r.lineCap = "butt");
        }, "drawLine"), x = /*#__PURE__*/ m$1(function() {
            var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
            if (r.lineWidth = g + m, r.lineCap = h, m > 0) s.colorStrokeStyle(r, p[0], p[1], p[2], I);
            else {
                r.lineCap = "butt";
                return;
            }
            c === "straight-triangle" ? s.drawEdgeTrianglePath(e, r, o.allpts) : (s.drawEdgePath(e, r, o.allpts, d), r.lineCap = "butt");
        }, "drawLineOutline"), C = /*#__PURE__*/ m$1(function() {
            n && s.drawEdgeOverlay(r, e);
        }, "drawOverlay"), T = /*#__PURE__*/ m$1(function() {
            n && s.drawEdgeUnderlay(r, e);
        }, "drawUnderlay"), E = /*#__PURE__*/ m$1(function() {
            var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b1;
            s.drawArrowheads(r, e, I);
        }, "drawArrows"), S = /*#__PURE__*/ m$1(function() {
            s.drawElementText(r, e, null, a);
        }, "drawText");
        r.lineJoin = "round";
        var D = e.pstyle("ghost").value === "yes";
        if (D) {
            var B = e.pstyle("ghost-offset-x").pfValue, P = e.pstyle("ghost-offset-y").pfValue, A = e.pstyle("ghost-opacity").value, R = y * A;
            r.translate(B, P), w(R), E(R), r.translate(-B, -P);
        } else x();
        T(), w(), E(), C(), S(), t && r.translate(l.x1, l.y1);
    }
};
var Pf = /*#__PURE__*/ m$1(function(e) {
    if (![
        "overlay",
        "underlay"
    ].includes(e)) throw new Error("Invalid state");
    return function(t, a) {
        if (a.visible()) {
            var n = a.pstyle(/*#__PURE__*/ "".concat(e, "-opacity")).value;
            if (n !== 0) {
                var i = this, s = /*#__PURE__*/ i.usePaths(), o = a._private.rscratch, l = a.pstyle(/*#__PURE__*/ "".concat(e, "-padding")).pfValue, u = 2 * l, f = a.pstyle(/*#__PURE__*/ "".concat(e, "-color")).value;
                t.lineWidth = u, o.edgeType === "self" && !s ? t.lineCap = "butt" : t.lineCap = "round", i.colorStrokeStyle(t, f[0], f[1], f[2], n), i.drawEdgePath(a, t, o.allpts, "solid");
            }
        }
    };
}, "drawEdgeOverlayUnderlay");
jr.drawEdgeOverlay = /*#__PURE__*/ Pf("overlay");
jr.drawEdgeUnderlay = /*#__PURE__*/ Pf("underlay");
jr.drawEdgePath = function(r, e, t, a) {
    var n = r._private.rscratch, i = e, s, o = false, l = /*#__PURE__*/ this.usePaths(), u = r.pstyle("line-dash-pattern").pfValue, f = r.pstyle("line-dash-offset").pfValue;
    if (l) {
        var c = /*#__PURE__*/ t.join("$"), d = n.pathCacheKey && n.pathCacheKey === c;
        d ? (s = e = n.pathCache, o = true) : (s = e = new Path2D, n.pathCacheKey = c, n.pathCache = s);
    }
    if (i.setLineDash) switch(a){
        case "dotted":
            i.setLineDash([
                1,
                1
            ]);
            break;
        case "dashed":
            i.setLineDash(u), i.lineDashOffset = f;
            break;
        case "solid":
            i.setLineDash([]);
            break;
    }
    if (!o && !n.badLine) switch(e.beginPath && e.beginPath(), e.moveTo(t[0], t[1]), n.edgeType){
        case "bezier":
        case "self":
        case "compound":
        case "multibezier":
            for(var g = 2; g + 3 < t.length; g += 4)e.quadraticCurveTo(t[g], t[g + 1], t[g + 2], t[g + 3]);
            break;
        case "straight":
        case "haystack":
            for(var h = 2; h + 1 < t.length; h += 2)e.lineTo(t[h], t[h + 1]);
            break;
        case "segments":
            if (n.isRound) {
                var m = /*#__PURE__*/ Dr(n.roundCorners), p;
                try {
                    for(m.s(); !(p = /*#__PURE__*/ m.n()).done;){
                        var y = p.value;
                        yf(e, y);
                    }
                } catch (w) {
                    m.e(w);
                } finally{
                    m.f();
                }
                e.lineTo(t[t.length - 2], t[t.length - 1]);
            } else for(var b1 = 2; b1 + 1 < t.length; b1 += 2)e.lineTo(t[b1], t[b1 + 1]);
            break;
    }
    e = i, l ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
jr.drawEdgeTrianglePath = function(r, e, t) {
    e.fillStyle = e.strokeStyle;
    for(var a = r.pstyle("width").pfValue, n = 0; n + 1 < t.length; n += 2){
        var i = [
            t[n + 2] - t[n],
            t[n + 3] - t[n + 1]
        ], s = /*#__PURE__*/ Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [
            i[1] / s,
            -i[0] / s
        ], l = [
            o[0] * a / 2,
            o[1] * a / 2
        ];
        e.beginPath(), e.moveTo(t[n] - l[0], t[n + 1] - l[1]), e.lineTo(t[n] + l[0], t[n + 1] + l[1]), e.lineTo(t[n + 2], t[n + 3]), e.closePath(), e.fill();
    }
};
jr.drawArrowheads = function(r, e, t) {
    var a = e._private.rscratch, n = a.edgeType === "haystack";
    n || this.drawArrowhead(r, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, t), this.drawArrowhead(r, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, t), this.drawArrowhead(r, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, t), n || this.drawArrowhead(r, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, t);
};
jr.drawArrowhead = function(r, e, t, a, n, i, s) {
    if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
        var o = this, l = e.pstyle(t + "-arrow-shape").value;
        if (l !== "none") {
            var u = e.pstyle(t + "-arrow-fill").value === "hollow" ? "both" : "filled", f = e.pstyle(t + "-arrow-fill").value, c = e.pstyle("width").pfValue, d = /*#__PURE__*/ e.pstyle(t + "-arrow-width"), g = d.value === "match-line" ? c : d.pfValue;
            d.units === "%" && (g *= c);
            var h = e.pstyle("opacity").value;
            s === void 0 && (s = h);
            var m = r.globalCompositeOperation;
            (s !== 1 || f === "hollow") && (r.globalCompositeOperation = "destination-out", o.colorFillStyle(r, 255, 255, 255, 1), o.colorStrokeStyle(r, 255, 255, 255, 1), o.drawArrowShape(e, r, u, c, l, g, a, n, i), r.globalCompositeOperation = m);
            var p = e.pstyle(t + "-arrow-color").value;
            o.colorFillStyle(r, p[0], p[1], p[2], s), o.colorStrokeStyle(r, p[0], p[1], p[2], s), o.drawArrowShape(e, r, f, c, l, g, a, n, i);
        }
    }
};
jr.drawArrowShape = function(r, e, t, a, n, i, s, o, l) {
    var u = this, f = this.usePaths() && n !== "triangle-cross", c = false, d, g = e, h = {
        x: s,
        y: o
    }, m = r.pstyle("arrow-scale").value, p = /*#__PURE__*/ this.getArrowWidth(a, m), y = u.arrowShapes[n];
    if (f) {
        var b1 = u.arrowPathCache = u.arrowPathCache || [], w = /*#__PURE__*/ Pt(n), x = b1[w];
        x != null ? (d = e = x, c = true) : (d = e = new Path2D, b1[w] = d);
    }
    c || (e.beginPath && e.beginPath(), f ? y.draw(e, 1, 0, {
        x: 0,
        y: 0
    }, 1) : y.draw(e, p, l, h, a), e.closePath && e.closePath()), e = g, f && (e.translate(s, o), e.rotate(l), e.scale(p, p)), (t === "filled" || t === "both") && (f ? e.fill(d) : e.fill()), (t === "hollow" || t === "both") && (e.lineWidth = i / (f ? p : 1), e.lineJoin = "miter", f ? e.stroke(d) : e.stroke()), f && (e.scale(1 / p, 1 / p), e.rotate(-l), e.translate(-s, -o));
};
var bo = {};
bo.safeDrawImage = function(r, e, t, a, n, i, s, o, l, u) {
    if (!(n <= 0 || i <= 0 || l <= 0 || u <= 0)) try {
        r.drawImage(e, t, a, n, i, s, o, l, u);
    } catch (f) {
        qe(f);
    }
};
bo.drawInscribedImage = function(r, e, t, a, n) {
    var i = this, s = /*#__PURE__*/ t.position(), o = s.x, l = s.y, u = /*#__PURE__*/ t.cy().style(), f = /*#__PURE__*/ u.getIndexedStyle.bind(u), c = /*#__PURE__*/ f(t, "background-fit", "value", a), d = /*#__PURE__*/ f(t, "background-repeat", "value", a), g = /*#__PURE__*/ t.width(), h = /*#__PURE__*/ t.height(), m = t.padding() * 2, p = g + (f(t, "background-width-relative-to", "value", a) === "inner" ? 0 : m), y = h + (f(t, "background-height-relative-to", "value", a) === "inner" ? 0 : m), b1 = t._private.rscratch, w = /*#__PURE__*/ f(t, "background-clip", "value", a), x = w === "node", C = f(t, "background-image-opacity", "value", a) * n, T = /*#__PURE__*/ f(t, "background-image-smoothing", "value", a), E = t.pstyle("corner-radius").value;
    E !== "auto" && (E = t.pstyle("corner-radius").pfValue);
    var S = e.width || e.cachedW, D = e.height || e.cachedH;
    (S == null || D == null) && (document.body.appendChild(e), S = e.cachedW = e.width || e.offsetWidth, D = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
    var B = S, P = D;
    if (f(t, "background-width", "value", a) !== "auto" && (f(t, "background-width", "units", a) === "%" ? B = f(t, "background-width", "pfValue", a) * p : B = /*#__PURE__*/ f(t, "background-width", "pfValue", a)), f(t, "background-height", "value", a) !== "auto" && (f(t, "background-height", "units", a) === "%" ? P = f(t, "background-height", "pfValue", a) * y : P = /*#__PURE__*/ f(t, "background-height", "pfValue", a)), !(B === 0 || P === 0)) {
        if (c === "contain") {
            var A = /*#__PURE__*/ Math.min(p / B, y / P);
            B *= A, P *= A;
        } else if (c === "cover") {
            var A = /*#__PURE__*/ Math.max(p / B, y / P);
            B *= A, P *= A;
        }
        var R = o - p / 2, M = /*#__PURE__*/ f(t, "background-position-x", "units", a), I = /*#__PURE__*/ f(t, "background-position-x", "pfValue", a);
        M === "%" ? R += (p - B) * I : R += I;
        var O = /*#__PURE__*/ f(t, "background-offset-x", "units", a), L = /*#__PURE__*/ f(t, "background-offset-x", "pfValue", a);
        O === "%" ? R += (p - B) * L : R += L;
        var N = l - y / 2, q = /*#__PURE__*/ f(t, "background-position-y", "units", a), H = /*#__PURE__*/ f(t, "background-position-y", "pfValue", a);
        q === "%" ? N += (y - P) * H : N += H;
        var z = /*#__PURE__*/ f(t, "background-offset-y", "units", a), V = /*#__PURE__*/ f(t, "background-offset-y", "pfValue", a);
        z === "%" ? N += (y - P) * V : N += V, b1.pathCache && (R -= o, N -= l, o = 0, l = 0);
        var K = r.globalAlpha;
        r.globalAlpha = C;
        var J = /*#__PURE__*/ i.getImgSmoothing(r), X = false;
        if (T === "no" && J ? (i.setImgSmoothing(r, false), X = true) : T === "yes" && !J && (i.setImgSmoothing(r, true), X = true), d === "no-repeat") x && (r.save(), b1.pathCache ? r.clip(b1.pathCache) : (i.nodeShapes[i.getNodeShape(t)].draw(r, o, l, p, y, E, b1), r.clip())), i.safeDrawImage(r, e, 0, 0, S, D, R, N, B, P), x && r.restore();
        else {
            var ee = /*#__PURE__*/ r.createPattern(e, d);
            r.fillStyle = ee, i.nodeShapes[i.getNodeShape(t)].draw(r, o, l, p, y, E, b1), r.translate(R, N), r.fill(), r.translate(-R, -N);
        }
        r.globalAlpha = K, X && i.setImgSmoothing(r, J);
    }
};
var Ot = {};
Ot.eleTextBiggerThanMin = function(r, e) {
    if (!e) {
        var t = /*#__PURE__*/ r.cy().zoom(), a = /*#__PURE__*/ this.getPixelRatio(), n = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ to(t * a));
        e = /*#__PURE__*/ Math.pow(2, n);
    }
    var i = r.pstyle("font-size").pfValue * e, s = r.pstyle("min-zoomed-font-size").pfValue;
    return !(i < s);
};
Ot.drawElementText = function(r, e, t, a, n) {
    var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this;
    if (a == null) {
        if (i && !s.eleTextBiggerThanMin(e)) return;
    } else if (a === false) return;
    if (e.isNode()) {
        var o = /*#__PURE__*/ e.pstyle("label");
        if (!o || !o.value) return;
        var l = /*#__PURE__*/ s.getLabelJustification(e);
        r.textAlign = l, r.textBaseline = "bottom";
    } else {
        var u = e.element()._private.rscratch.badLine, f = /*#__PURE__*/ e.pstyle("label"), c = /*#__PURE__*/ e.pstyle("source-label"), d = /*#__PURE__*/ e.pstyle("target-label");
        if (u || (!f || !f.value) && (!c || !c.value) && (!d || !d.value)) return;
        r.textAlign = "center", r.textBaseline = "bottom";
    }
    var g = !t, h;
    t && (h = t, r.translate(-h.x1, -h.y1)), n == null ? (s.drawText(r, e, null, g, i), e.isEdge() && (s.drawText(r, e, "source", g, i), s.drawText(r, e, "target", g, i))) : s.drawText(r, e, n, g, i), t && r.translate(h.x1, h.y1);
};
Ot.getFontCache = function(r) {
    var e;
    this.fontCaches = this.fontCaches || [];
    for(var t = 0; t < this.fontCaches.length; t++)if (e = this.fontCaches[t], e.context === r) return e;
    return e = {
        context: r
    }, this.fontCaches.push(e), e;
};
Ot.setupTextStyle = function(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = t ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, l = e.pstyle("text-outline-opacity").value * o, u = e.pstyle("color").value, f = e.pstyle("text-outline-color").value;
    r.font = a + " " + s + " " + n + " " + i, r.lineJoin = "round", this.colorFillStyle(r, u[0], u[1], u[2], o), this.colorStrokeStyle(r, f[0], f[1], f[2], l);
};
function _y(r, e, t, a, n) {
    var i = /*#__PURE__*/ Math.min(a, n), s = i / 2, o = e + a / 2, l = t + n / 2;
    r.beginPath(), r.arc(o, l, s, 0, Math.PI * 2), r.closePath();
}
m$1(_y, "circle");
function Hl(r, e, t, a, n) {
    var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = /*#__PURE__*/ Math.min(i, a / 2, n / 2);
    r.beginPath(), r.moveTo(e + s, t), r.lineTo(e + a - s, t), r.quadraticCurveTo(e + a, t, e + a, t + s), r.lineTo(e + a, t + n - s), r.quadraticCurveTo(e + a, t + n, e + a - s, t + n), r.lineTo(e + s, t + n), r.quadraticCurveTo(e, t + n, e, t + n - s), r.lineTo(e, t + s), r.quadraticCurveTo(e, t, e + s, t), r.closePath();
}
m$1(Hl, "roundRect");
Ot.getTextAngle = function(r, e) {
    var t, a = r._private, n = a.rscratch, i = e ? e + "-" : "", s = /*#__PURE__*/ r.pstyle(i + "text-rotation");
    if (s.strValue === "autorotate") {
        var o = /*#__PURE__*/ Sr(n, "labelAngle", e);
        t = r.isEdge() ? o : 0;
    } else s.strValue === "none" ? t = 0 : t = s.pfValue;
    return t;
};
Ot.drawText = function(r, e, t) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
    if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
        t === "main" && (t = null);
        var l = /*#__PURE__*/ Sr(s, "labelX", t), u = /*#__PURE__*/ Sr(s, "labelY", t), f, c, d = /*#__PURE__*/ this.getLabelText(e, t);
        if (d != null && d !== "" && !isNaN(l) && !isNaN(u)) {
            this.setupTextStyle(r, e, n);
            var g = t ? t + "-" : "", h = /*#__PURE__*/ Sr(s, "labelWidth", t), m = /*#__PURE__*/ Sr(s, "labelHeight", t), p = e.pstyle(g + "text-margin-x").pfValue, y = e.pstyle(g + "text-margin-y").pfValue, b1 = /*#__PURE__*/ e.isEdge(), w = e.pstyle("text-halign").value, x = e.pstyle("text-valign").value;
            b1 && (w = "center", x = "center"), l += p, u += y;
            var C;
            switch(a ? C = /*#__PURE__*/ this.getTextAngle(e, t) : C = 0, C !== 0 && (f = l, c = u, r.translate(f, c), r.rotate(C), l = 0, u = 0), x){
                case "top":
                    break;
                case "center":
                    u += m / 2;
                    break;
                case "bottom":
                    u += m;
                    break;
            }
            var T = e.pstyle("text-background-opacity").value, E = e.pstyle("text-border-opacity").value, S = e.pstyle("text-border-width").pfValue, D = e.pstyle("text-background-padding").pfValue, B = e.pstyle("text-background-shape").strValue, P = B === "round-rectangle" || B === "roundrectangle", A = B === "circle", R = 2;
            if (T > 0 || S > 0 && E > 0) {
                var M = r.fillStyle, I = r.strokeStyle, O = r.lineWidth, L = e.pstyle("text-background-color").value, N = e.pstyle("text-border-color").value, q = e.pstyle("text-border-style").value, H = T > 0, z = S > 0 && E > 0, V = l - D;
                switch(w){
                    case "left":
                        V -= h;
                        break;
                    case "center":
                        V -= h / 2;
                        break;
                }
                var K = u - m - D, J = h + 2 * D, X = m + 2 * D;
                if (H && (r.fillStyle = /*#__PURE__*/ "rgba(".concat(L[0], ",").concat(L[1], ",").concat(L[2], ",").concat(T * o, ")")), z && (r.strokeStyle = /*#__PURE__*/ "rgba(".concat(N[0], ",").concat(N[1], ",").concat(N[2], ",").concat(E * o, ")"), r.lineWidth = S, r.setLineDash)) switch(q){
                    case "dotted":
                        r.setLineDash([
                            1,
                            1
                        ]);
                        break;
                    case "dashed":
                        r.setLineDash([
                            4,
                            2
                        ]);
                        break;
                    case "double":
                        r.lineWidth = S / 4, r.setLineDash([]);
                        break;
                    case "solid":
                    default:
                        r.setLineDash([]);
                        break;
                }
                if (P ? (r.beginPath(), Hl(r, V, K, J, X, R)) : A ? (r.beginPath(), _y(r, V, K, J, X)) : (r.beginPath(), r.rect(V, K, J, X)), H && r.fill(), z && r.stroke(), z && q === "double") {
                    var ee = S / 2;
                    r.beginPath(), P ? Hl(r, V + ee, K + ee, J - 2 * ee, X - 2 * ee, R) : r.rect(V + ee, K + ee, J - 2 * ee, X - 2 * ee), r.stroke();
                }
                r.fillStyle = M, r.strokeStyle = I, r.lineWidth = O, r.setLineDash && r.setLineDash([]);
            }
            var te = 2 * e.pstyle("text-outline-width").pfValue;
            if (te > 0 && (r.lineWidth = te), e.pstyle("text-wrap").value === "wrap") {
                var ie = /*#__PURE__*/ Sr(s, "labelWrapCachedLines", t), j = /*#__PURE__*/ Sr(s, "labelLineHeight", t), F = h / 2, _ = /*#__PURE__*/ this.getLabelJustification(e);
                switch(_ === "auto" || (w === "left" ? _ === "left" ? l += -h : _ === "center" && (l += -F) : w === "center" ? _ === "left" ? l += -F : _ === "right" && (l += F) : w === "right" && (_ === "center" ? l += F : _ === "right" && (l += h))), x){
                    case "top":
                        u -= (ie.length - 1) * j;
                        break;
                    case "center":
                    case "bottom":
                        u -= (ie.length - 1) * j;
                        break;
                }
                for(var W = 0; W < ie.length; W++)te > 0 && r.strokeText(ie[W], l, u), r.fillText(ie[W], l, u), u += j;
            } else te > 0 && r.strokeText(d, l, u), r.fillText(d, l, u);
            C !== 0 && (r.rotate(-C), r.translate(-f, -c));
        }
    }
};
var mt = {};
mt.drawNode = function(r, e, t) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o, l, u = e._private, f = u.rscratch, c = /*#__PURE__*/ e.position();
    if (!(!ne(c.x) || !ne(c.y)) && !(i && !e.visible())) {
        var d = i ? e.effectiveOpacity() : 1, g = /*#__PURE__*/ s.usePaths(), h, m = false, p = /*#__PURE__*/ e.padding();
        o = e.width() + 2 * p, l = e.height() + 2 * p;
        var y;
        t && (y = t, r.translate(-y.x1, -y.y1));
        for(var b1 = /*#__PURE__*/ e.pstyle("background-image"), w = b1.value, x = new Array(w.length), C = new Array(w.length), T = 0, E = 0; E < w.length; E++){
            var S = w[E], D = x[E] = S != null && S !== "none";
            if (D) {
                var B = /*#__PURE__*/ e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", E);
                T++, C[E] = /*#__PURE__*/ s.getCachedImage(S, B, function() {
                    u.backgroundTimestamp = /*#__PURE__*/ Date.now(), e.emitAndNotify("background");
                });
            }
        }
        var P = e.pstyle("background-blacken").value, A = e.pstyle("border-width").pfValue, R = e.pstyle("background-opacity").value * d, M = e.pstyle("border-color").value, I = e.pstyle("border-style").value, O = e.pstyle("border-join").value, L = e.pstyle("border-cap").value, N = e.pstyle("border-position").value, q = e.pstyle("border-dash-pattern").pfValue, H = e.pstyle("border-dash-offset").pfValue, z = e.pstyle("border-opacity").value * d, V = e.pstyle("outline-width").pfValue, K = e.pstyle("outline-color").value, J = e.pstyle("outline-style").value, X = e.pstyle("outline-opacity").value * d, ee = e.pstyle("outline-offset").value, te = e.pstyle("corner-radius").value;
        te !== "auto" && (te = e.pstyle("corner-radius").pfValue);
        var ie = /*#__PURE__*/ m$1(function() {
            var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R;
            s.eleFillStyle(r, e, le);
        }, "setupShapeColor"), j = /*#__PURE__*/ m$1(function() {
            var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z;
            s.colorStrokeStyle(r, M[0], M[1], M[2], le);
        }, "setupBorderColor"), F = /*#__PURE__*/ m$1(function() {
            var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : X;
            s.colorStrokeStyle(r, K[0], K[1], K[2], le);
        }, "setupOutlineColor"), _ = /*#__PURE__*/ m$1(function(le, Y, k, G) {
            var $ = s.nodePathCache = s.nodePathCache || [], U = /*#__PURE__*/ dv(k === "polygon" ? k + "," + G.join(",") : k, "" + Y, "" + le, "" + te), Q = $[U], ue, re = false;
            return Q != null ? (ue = Q, re = true, f.pathCache = ue) : (ue = new Path2D, $[U] = f.pathCache = ue), {
                path: ue,
                cacheHit: re
            };
        }, "getPath"), W = e.pstyle("shape").strValue, Z = e.pstyle("shape-polygon-points").pfValue;
        if (g) {
            r.translate(c.x, c.y);
            var ae = /*#__PURE__*/ _(o, l, W, Z);
            h = ae.path, m = ae.cacheHit;
        }
        var de = /*#__PURE__*/ m$1(function() {
            if (!m) {
                var le = c;
                g && (le = {
                    x: 0,
                    y: 0
                }), s.nodeShapes[s.getNodeShape(e)].draw(h || r, le.x, le.y, o, l, te, f);
            }
            g ? r.fill(h) : r.fill();
        }, "drawShape"), Re = /*#__PURE__*/ m$1(function() {
            for(var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, k = u.backgrounding, G = 0, $ = 0; $ < C.length; $++){
                var U = /*#__PURE__*/ e.cy().style().getIndexedStyle(e, "background-image-containment", "value", $);
                if (Y && U === "over" || !Y && U === "inside") {
                    G++;
                    continue;
                }
                x[$] && C[$].complete && !C[$].error && (G++, s.drawInscribedImage(r, C[$], e, $, le));
            }
            u.backgrounding = G !== T, k !== u.backgrounding && e.updateStyle(false);
        }, "drawImages"), Te = /*#__PURE__*/ m$1(function() {
            var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
            s.hasPie(e) && (s.drawPie(r, e, Y), le && (g || s.nodeShapes[s.getNodeShape(e)].draw(r, c.x, c.y, o, l, te, f)));
        }, "drawPie"), xe = /*#__PURE__*/ m$1(function() {
            var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
            s.hasStripe(e) && (r.save(), g ? r.clip(f.pathCache) : (s.nodeShapes[s.getNodeShape(e)].draw(r, c.x, c.y, o, l, te, f), r.clip()), s.drawStripe(r, e, Y), r.restore(), le && (g || s.nodeShapes[s.getNodeShape(e)].draw(r, c.x, c.y, o, l, te, f)));
        }, "drawStripe"), me = /*#__PURE__*/ m$1(function() {
            var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, Y = (P > 0 ? P : -P) * le, k = P > 0 ? 0 : 255;
            P !== 0 && (s.colorFillStyle(r, k, k, k, Y), g ? r.fill(h) : r.fill());
        }, "darken"), se = /*#__PURE__*/ m$1(function() {
            if (A > 0) {
                if (r.lineWidth = A, r.lineCap = L, r.lineJoin = O, r.setLineDash) switch(I){
                    case "dotted":
                        r.setLineDash([
                            1,
                            1
                        ]);
                        break;
                    case "dashed":
                        r.setLineDash(q), r.lineDashOffset = H;
                        break;
                    case "solid":
                    case "double":
                        r.setLineDash([]);
                        break;
                }
                if (N !== "center") {
                    if (r.save(), r.lineWidth *= 2, N === "inside") g ? r.clip(h) : r.clip();
                    else {
                        var le = new Path2D;
                        le.rect(-o / 2 - A, -l / 2 - A, o + 2 * A, l + 2 * A), le.addPath(h), r.clip(le, "evenodd");
                    }
                    g ? r.stroke(h) : r.stroke(), r.restore();
                } else g ? r.stroke(h) : r.stroke();
                if (I === "double") {
                    r.lineWidth = A / 3;
                    var Y = r.globalCompositeOperation;
                    r.globalCompositeOperation = "destination-out", g ? r.stroke(h) : r.stroke(), r.globalCompositeOperation = Y;
                }
                r.setLineDash && r.setLineDash([]);
            }
        }, "drawBorder"), he = /*#__PURE__*/ m$1(function() {
            if (V > 0) {
                if (r.lineWidth = V, r.lineCap = "butt", r.setLineDash) switch(J){
                    case "dotted":
                        r.setLineDash([
                            1,
                            1
                        ]);
                        break;
                    case "dashed":
                        r.setLineDash([
                            4,
                            2
                        ]);
                        break;
                    case "solid":
                    case "double":
                        r.setLineDash([]);
                        break;
                }
                var le = c;
                g && (le = {
                    x: 0,
                    y: 0
                });
                var Y = /*#__PURE__*/ s.getNodeShape(e), k = A;
                N === "inside" && (k = 0), N === "outside" && (k *= 2);
                var G = (o + k + (V + ee)) / o, $ = (l + k + (V + ee)) / l, U = o * G, Q = l * $, ue = s.nodeShapes[Y].points, re;
                if (g) {
                    var fe = /*#__PURE__*/ _(U, Q, Y, ue);
                    re = fe.path;
                }
                if (Y === "ellipse") s.drawEllipsePath(re || r, le.x, le.y, U, Q);
                else if ([
                    "round-diamond",
                    "round-heptagon",
                    "round-hexagon",
                    "round-octagon",
                    "round-pentagon",
                    "round-polygon",
                    "round-triangle",
                    "round-tag"
                ].includes(Y)) {
                    var ve = 0, be = 0, Be = 0;
                    Y === "round-diamond" ? ve = (k + ee + V) * 1.4 : Y === "round-heptagon" ? (ve = (k + ee + V) * 1.075, Be = -(k / 2 + ee + V) / 35) : Y === "round-hexagon" ? ve = (k + ee + V) * 1.12 : Y === "round-pentagon" ? (ve = (k + ee + V) * 1.13, Be = -(k / 2 + ee + V) / 15) : Y === "round-tag" ? (ve = (k + ee + V) * 1.12, be = (k / 2 + V + ee) * .07) : Y === "round-triangle" && (ve = (k + ee + V) * (Math.PI / 2), Be = -(k + ee / 2 + V) / Math.PI), ve !== 0 && (G = (o + ve) / o, U = o * G, [
                        "round-hexagon",
                        "round-tag"
                    ].includes(Y) || ($ = (l + ve) / l, Q = l * $)), te = te === "auto" ? Cv(U, Q) : te;
                    for(var Se = U / 2, ce = Q / 2, Ae = te + (k + V + ee) / 2, Pe = new Array(ue.length / 2), er = new Array(ue.length / 2), Xe = 0; Xe < ue.length / 2; Xe++)Pe[Xe] = {
                        x: le.x + be + Se * ue[Xe * 2],
                        y: le.y + Be + ce * ue[Xe * 2 + 1]
                    };
                    var br, Ze, sr, rr, vr = Pe.length;
                    for(Ze = Pe[vr - 1], br = 0; br < vr; br++)sr = Pe[br % vr], rr = Pe[(br + 1) % vr], er[br] = /*#__PURE__*/ yo(Ze, sr, rr, Ae), Ze = sr, sr = rr;
                    s.drawRoundPolygonPath(re || r, le.x + be, le.y + Be, o * G, l * $, ue, er);
                } else if ([
                    "roundrectangle",
                    "round-rectangle"
                ].includes(Y)) te = te === "auto" ? ft(U, Q) : te, s.drawRoundRectanglePath(re || r, le.x, le.y, U, Q, te + (k + V + ee) / 2);
                else if ([
                    "cutrectangle",
                    "cut-rectangle"
                ].includes(Y)) te = te === "auto" ? io() : te, s.drawCutRectanglePath(re || r, le.x, le.y, U, Q, null, te + (k + V + ee) / 4);
                else if ([
                    "bottomroundrectangle",
                    "bottom-round-rectangle"
                ].includes(Y)) te = te === "auto" ? ft(U, Q) : te, s.drawBottomRoundRectanglePath(re || r, le.x, le.y, U, Q, te + (k + V + ee) / 2);
                else if (Y === "barrel") s.drawBarrelPath(re || r, le.x, le.y, U, Q);
                else if (Y.startsWith("polygon") || [
                    "rhomboid",
                    "right-rhomboid",
                    "round-tag",
                    "tag",
                    "vee"
                ].includes(Y)) {
                    var et = (k + V + ee) / o;
                    ue = /*#__PURE__*/ Cn(/*#__PURE__*/ Tn(ue, et)), s.drawPolygonPath(re || r, le.x, le.y, o, l, ue);
                } else {
                    var Qe = (k + V + ee) / o;
                    ue = /*#__PURE__*/ Cn(/*#__PURE__*/ Tn(ue, -Qe)), s.drawPolygonPath(re || r, le.x, le.y, o, l, ue);
                }
                if (g ? r.stroke(re) : r.stroke(), J === "double") {
                    r.lineWidth = k / 3;
                    var $r = r.globalCompositeOperation;
                    r.globalCompositeOperation = "destination-out", g ? r.stroke(re) : r.stroke(), r.globalCompositeOperation = $r;
                }
                r.setLineDash && r.setLineDash([]);
            }
        }, "drawOutline"), ge = /*#__PURE__*/ m$1(function() {
            n && s.drawNodeOverlay(r, e, c, o, l);
        }, "drawOverlay"), Ce = /*#__PURE__*/ m$1(function() {
            n && s.drawNodeUnderlay(r, e, c, o, l);
        }, "drawUnderlay"), ye = /*#__PURE__*/ m$1(function() {
            s.drawElementText(r, e, null, a);
        }, "drawText"), ke = e.pstyle("ghost").value === "yes";
        if (ke) {
            var Me = e.pstyle("ghost-offset-x").pfValue, Ne = e.pstyle("ghost-offset-y").pfValue, ze = e.pstyle("ghost-opacity").value, Fe = ze * d;
            r.translate(Me, Ne), F(), he(), ie(ze * R), de(), Re(Fe, true), j(ze * z), se(), Te(P !== 0 || A !== 0), xe(P !== 0 || A !== 0), Re(Fe, false), me(Fe), r.translate(-Me, -Ne);
        }
        g && r.translate(-c.x, -c.y), Ce(), g && r.translate(c.x, c.y), F(), he(), ie(), de(), Re(d, true), j(), se(), Te(P !== 0 || A !== 0), xe(P !== 0 || A !== 0), Re(d, false), me(), g && r.translate(-c.x, -c.y), ye(), ge(), t && r.translate(y.x1, y.y1);
    }
};
var Af = /*#__PURE__*/ m$1(function(e) {
    if (![
        "overlay",
        "underlay"
    ].includes(e)) throw new Error("Invalid state");
    return function(t, a, n, i, s) {
        var o = this;
        if (a.visible()) {
            var l = a.pstyle(/*#__PURE__*/ "".concat(e, "-padding")).pfValue, u = a.pstyle(/*#__PURE__*/ "".concat(e, "-opacity")).value, f = a.pstyle(/*#__PURE__*/ "".concat(e, "-color")).value, c = a.pstyle(/*#__PURE__*/ "".concat(e, "-shape")).value, d = a.pstyle(/*#__PURE__*/ "".concat(e, "-corner-radius")).value;
            if (u > 0) {
                if (n = n || a.position(), i == null || s == null) {
                    var g = /*#__PURE__*/ a.padding();
                    i = a.width() + 2 * g, s = a.height() + 2 * g;
                }
                o.colorFillStyle(t, f[0], f[1], f[2], u), o.nodeShapes[c].draw(t, n.x, n.y, i + l * 2, s + l * 2, d), t.fill();
            }
        }
    };
}, "drawNodeOverlayUnderlay");
mt.drawNodeOverlay = /*#__PURE__*/ Af("overlay");
mt.drawNodeUnderlay = /*#__PURE__*/ Af("underlay");
mt.hasPie = function(r) {
    return r = r[0], r._private.hasPie;
};
mt.hasStripe = function(r) {
    return r = r[0], r._private.hasStripe;
};
mt.drawPie = function(r, e, t, a) {
    e = e[0], a = a || e.position();
    var n = /*#__PURE__*/ e.cy().style(), i = /*#__PURE__*/ e.pstyle("pie-size"), s = /*#__PURE__*/ e.pstyle("pie-hole"), o = e.pstyle("pie-start-angle").pfValue, l = a.x, u = a.y, f = /*#__PURE__*/ e.width(), c = /*#__PURE__*/ e.height(), d = Math.min(f, c) / 2, g, h = 0, m = /*#__PURE__*/ this.usePaths();
    if (m && (l = 0, u = 0), i.units === "%" ? d = d * i.pfValue : i.pfValue !== void 0 && (d = i.pfValue / 2), s.units === "%" ? g = d * s.pfValue : s.pfValue !== void 0 && (g = s.pfValue / 2), !(g >= d)) for(var p = 1; p <= n.pieBackgroundN; p++){
        var y = e.pstyle("pie-" + p + "-background-size").value, b1 = e.pstyle("pie-" + p + "-background-color").value, w = e.pstyle("pie-" + p + "-background-opacity").value * t, x = y / 100;
        x + h > 1 && (x = 1 - h);
        var C = 1.5 * Math.PI + 2 * Math.PI * h;
        C += o;
        var T = 2 * Math.PI * x, E = C + T;
        y === 0 || h >= 1 || h + x > 1 || (g === 0 ? (r.beginPath(), r.moveTo(l, u), r.arc(l, u, d, C, E), r.closePath()) : (r.beginPath(), r.arc(l, u, d, C, E), r.arc(l, u, g, E, C, true), r.closePath()), this.colorFillStyle(r, b1[0], b1[1], b1[2], w), r.fill(), h += x);
    }
};
mt.drawStripe = function(r, e, t, a) {
    e = e[0], a = a || e.position();
    var n = /*#__PURE__*/ e.cy().style(), i = a.x, s = a.y, o = /*#__PURE__*/ e.width(), l = /*#__PURE__*/ e.height(), u = 0, f = /*#__PURE__*/ this.usePaths();
    r.save();
    var c = e.pstyle("stripe-direction").value, d = /*#__PURE__*/ e.pstyle("stripe-size");
    switch(c){
        case "vertical":
            break;
        case "righward":
            r.rotate(-Math.PI / 2);
            break;
    }
    var g = o, h = l;
    d.units === "%" ? (g = g * d.pfValue, h = h * d.pfValue) : d.pfValue !== void 0 && (g = d.pfValue, h = d.pfValue), f && (i = 0, s = 0), s -= g / 2, i -= h / 2;
    for(var m = 1; m <= n.stripeBackgroundN; m++){
        var p = e.pstyle("stripe-" + m + "-background-size").value, y = e.pstyle("stripe-" + m + "-background-color").value, b1 = e.pstyle("stripe-" + m + "-background-opacity").value * t, w = p / 100;
        w + u > 1 && (w = 1 - u), !(p === 0 || u >= 1 || u + w > 1) && (r.beginPath(), r.rect(i, s + h * u, g, h * w), r.closePath(), this.colorFillStyle(r, y[0], y[1], y[2], b1), r.fill(), u += w);
    }
    r.restore();
};
var Er = {}, Gy = 100;
Er.getPixelRatio = function() {
    var r = this.data.contexts[0];
    if (this.forcedPixelRatio != null) return this.forcedPixelRatio;
    var e = /*#__PURE__*/ this.cy.window(), t = r.backingStorePixelRatio || r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
    return (e.devicePixelRatio || 1) / t;
};
Er.paintCache = function(r) {
    for(var e = this.paintCaches = this.paintCaches || [], t = true, a, n = 0; n < e.length; n++)if (a = e[n], a.context === r) {
        t = false;
        break;
    }
    return t && (a = {
        context: r
    }, e.push(a)), a;
};
Er.createGradientStyleFor = function(r, e, t, a, n) {
    var i, s = /*#__PURE__*/ this.usePaths(), o = t.pstyle(e + "-gradient-stop-colors").value, l = t.pstyle(e + "-gradient-stop-positions").pfValue;
    if (a === "radial-gradient") if (t.isEdge()) {
        var u = /*#__PURE__*/ t.sourceEndpoint(), f = /*#__PURE__*/ t.targetEndpoint(), c = /*#__PURE__*/ t.midpoint(), d = /*#__PURE__*/ At(u, c), g = /*#__PURE__*/ At(f, c);
        i = /*#__PURE__*/ r.createRadialGradient(c.x, c.y, 0, c.x, c.y, /*#__PURE__*/ Math.max(d, g));
    } else {
        var h = s ? {
            x: 0,
            y: 0
        } : t.position(), m = /*#__PURE__*/ t.paddedWidth(), p = /*#__PURE__*/ t.paddedHeight();
        i = /*#__PURE__*/ r.createRadialGradient(h.x, h.y, 0, h.x, h.y, /*#__PURE__*/ Math.max(m, p));
    }
    else if (t.isEdge()) {
        var y = /*#__PURE__*/ t.sourceEndpoint(), b1 = /*#__PURE__*/ t.targetEndpoint();
        i = /*#__PURE__*/ r.createLinearGradient(y.x, y.y, b1.x, b1.y);
    } else {
        var w = s ? {
            x: 0,
            y: 0
        } : t.position(), x = /*#__PURE__*/ t.paddedWidth(), C = /*#__PURE__*/ t.paddedHeight(), T = x / 2, E = C / 2, S = t.pstyle("background-gradient-direction").value;
        switch(S){
            case "to-bottom":
                i = /*#__PURE__*/ r.createLinearGradient(w.x, w.y - E, w.x, w.y + E);
                break;
            case "to-top":
                i = /*#__PURE__*/ r.createLinearGradient(w.x, w.y + E, w.x, w.y - E);
                break;
            case "to-left":
                i = /*#__PURE__*/ r.createLinearGradient(w.x + T, w.y, w.x - T, w.y);
                break;
            case "to-right":
                i = /*#__PURE__*/ r.createLinearGradient(w.x - T, w.y, w.x + T, w.y);
                break;
            case "to-bottom-right":
            case "to-right-bottom":
                i = /*#__PURE__*/ r.createLinearGradient(w.x - T, w.y - E, w.x + T, w.y + E);
                break;
            case "to-top-right":
            case "to-right-top":
                i = /*#__PURE__*/ r.createLinearGradient(w.x - T, w.y + E, w.x + T, w.y - E);
                break;
            case "to-bottom-left":
            case "to-left-bottom":
                i = /*#__PURE__*/ r.createLinearGradient(w.x + T, w.y - E, w.x - T, w.y + E);
                break;
            case "to-top-left":
            case "to-left-top":
                i = /*#__PURE__*/ r.createLinearGradient(w.x + T, w.y + E, w.x - T, w.y - E);
                break;
        }
    }
    if (!i) return null;
    for(var D = l.length === o.length, B = o.length, P = 0; P < B; P++)i.addColorStop(D ? l[P] : P / (B - 1), "rgba(" + o[P][0] + "," + o[P][1] + "," + o[P][2] + "," + n + ")");
    return i;
};
Er.gradientFillStyle = function(r, e, t, a) {
    var n = /*#__PURE__*/ this.createGradientStyleFor(r, "background", e, t, a);
    if (!n) return null;
    r.fillStyle = n;
};
Er.colorFillStyle = function(r, e, t, a, n) {
    r.fillStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
Er.eleFillStyle = function(r, e, t) {
    var a = e.pstyle("background-fill").value;
    if (a === "linear-gradient" || a === "radial-gradient") this.gradientFillStyle(r, e, a, t);
    else {
        var n = e.pstyle("background-color").value;
        this.colorFillStyle(r, n[0], n[1], n[2], t);
    }
};
Er.gradientStrokeStyle = function(r, e, t, a) {
    var n = /*#__PURE__*/ this.createGradientStyleFor(r, "line", e, t, a);
    if (!n) return null;
    r.strokeStyle = n;
};
Er.colorStrokeStyle = function(r, e, t, a, n) {
    r.strokeStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
Er.eleStrokeStyle = function(r, e, t) {
    var a = e.pstyle("line-fill").value;
    if (a === "linear-gradient" || a === "radial-gradient") this.gradientStrokeStyle(r, e, a, t);
    else {
        var n = e.pstyle("line-color").value;
        this.colorStrokeStyle(r, n[0], n[1], n[2], t);
    }
};
Er.matchCanvasSize = function(r) {
    var e = this, t = e.data, a = /*#__PURE__*/ e.findContainerClientCoords(), n = a[2], i = a[3], s = /*#__PURE__*/ e.getPixelRatio(), o = e.motionBlurPxRatio;
    (r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
    var l = n * s, u = i * s, f;
    if (!(l === e.canvasWidth && u === e.canvasHeight)) {
        e.fontCaches = null;
        var c = t.canvasContainer;
        c.style.width = n + "px", c.style.height = i + "px";
        for(var d = 0; d < e.CANVAS_LAYERS; d++)f = t.canvases[d], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
        for(var d = 0; d < e.BUFFER_COUNT; d++)f = t.bufferCanvases[d], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
        e.textureMult = 1, s <= 1 && (f = t.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, f.width = l * e.textureMult, f.height = u * e.textureMult), e.canvasWidth = l, e.canvasHeight = u, e.pixelRatio = s;
    }
};
Er.renderTo = function(r, e, t, a) {
    this.render({
        forcedContext: r,
        forcedZoom: e,
        forcedPan: t,
        drawAllLayers: true,
        forcedPxRatio: a
    });
};
Er.clearCanvas = function() {
    var r = this, e = r.data;
    function t(a) {
        a.clearRect(0, 0, r.canvasWidth, r.canvasHeight);
    }
    m$1(t, "clear"), t(e.contexts[r.NODE]), t(e.contexts[r.DRAG]);
};
Er.render = function(r) {
    var e = this;
    r = r || yv();
    var t = e.cy, a = r.forcedContext, n = r.drawAllLayers, i = r.drawOnlyNodeLayer, s = r.forcedZoom, o = r.forcedPan, l = r.forcedPxRatio === void 0 ? this.getPixelRatio() : r.forcedPxRatio, u = e.data, f = u.canvasNeedsRedraw, c = e.textureOnViewport && !a && (e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming), d = r.motionBlur !== void 0 ? r.motionBlur : e.motionBlur, g = e.motionBlurPxRatio, h = /*#__PURE__*/ t.hasCompoundNodes(), m = e.hoverData.draggingEles, p = !!(e.hoverData.selecting || e.touchData.selecting);
    d = d && !a && e.motionBlurEnabled && !p;
    var y = d;
    a || (e.prevPxRatio !== l && (e.invalidateContainerClientCoordsCache(), e.matchCanvasSize(e.container), e.redrawHint("eles", true), e.redrawHint("drag", true)), e.prevPxRatio = l), !a && e.motionBlurTimeout && clearTimeout(e.motionBlurTimeout), d && (e.mbFrames == null && (e.mbFrames = 0), e.mbFrames++, e.mbFrames < 3 && (y = false), e.mbFrames > e.minMbLowQualFrames && (e.motionBlurPxRatio = e.mbPxRBlurry)), e.clearingMotionBlur && (e.motionBlurPxRatio = 1), e.textureDrawLastFrame && !c && (f[e.NODE] = true, f[e.SELECT_BOX] = true);
    var b1 = /*#__PURE__*/ t.style(), w = /*#__PURE__*/ t.zoom(), x = s !== void 0 ? s : w, C = /*#__PURE__*/ t.pan(), T = {
        x: C.x,
        y: C.y
    }, E = {
        zoom: w,
        pan: {
            x: C.x,
            y: C.y
        }
    }, S = e.prevViewport, D = S === void 0 || E.zoom !== S.zoom || E.pan.x !== S.pan.x || E.pan.y !== S.pan.y;
    !D && !(m && !h) && (e.motionBlurPxRatio = 1), o && (T = o), x *= l, T.x *= l, T.y *= l;
    var B = /*#__PURE__*/ e.getCachedZSortedEles();
    function P(j, F, _, W, Z) {
        var ae = j.globalCompositeOperation;
        j.globalCompositeOperation = "destination-out", e.colorFillStyle(j, 255, 255, 255, e.motionBlurTransparency), j.fillRect(F, _, W, Z), j.globalCompositeOperation = ae;
    }
    m$1(P, "mbclear");
    function A(j, F) {
        var _, W, Z, ae;
        !e.clearingMotionBlur && (j === u.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] || j === u.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG]) ? (_ = {
            x: C.x * g,
            y: C.y * g
        }, W = w * g, Z = e.canvasWidth * g, ae = e.canvasHeight * g) : (_ = T, W = x, Z = e.canvasWidth, ae = e.canvasHeight), j.setTransform(1, 0, 0, 1, 0, 0), F === "motionBlur" ? P(j, 0, 0, Z, ae) : !a && (F === void 0 || F) && j.clearRect(0, 0, Z, ae), n || (j.translate(_.x, _.y), j.scale(W, W)), o && j.translate(o.x, o.y), s && j.scale(s, s);
    }
    if (m$1(A, "setContextTransform"), c || (e.textureDrawLastFrame = false), c) {
        if (e.textureDrawLastFrame = true, !e.textureCache) {
            e.textureCache = {}, e.textureCache.bb = /*#__PURE__*/ t.mutableElements().boundingBox(), e.textureCache.texture = e.data.bufferCanvases[e.TEXTURE_BUFFER];
            var R = e.data.bufferContexts[e.TEXTURE_BUFFER];
            R.setTransform(1, 0, 0, 1, 0, 0), R.clearRect(0, 0, e.canvasWidth * e.textureMult, e.canvasHeight * e.textureMult), e.render({
                forcedContext: R,
                drawOnlyNodeLayer: true,
                forcedPxRatio: l * e.textureMult
            });
            var E = e.textureCache.viewport = {
                zoom: /*#__PURE__*/ t.zoom(),
                pan: /*#__PURE__*/ t.pan(),
                width: e.canvasWidth,
                height: e.canvasHeight
            };
            E.mpan = {
                x: (0 - E.pan.x) / E.zoom,
                y: (0 - E.pan.y) / E.zoom
            };
        }
        f[e.DRAG] = false, f[e.NODE] = false;
        var M = u.contexts[e.NODE], I = e.textureCache.texture, E = e.textureCache.viewport;
        M.setTransform(1, 0, 0, 1, 0, 0), d ? P(M, 0, 0, E.width, E.height) : M.clearRect(0, 0, E.width, E.height);
        var O = b1.core("outside-texture-bg-color").value, L = b1.core("outside-texture-bg-opacity").value;
        e.colorFillStyle(M, O[0], O[1], O[2], L), M.fillRect(0, 0, E.width, E.height);
        var w = /*#__PURE__*/ t.zoom();
        A(M, false), M.clearRect(E.mpan.x, E.mpan.y, E.width / E.zoom / l, E.height / E.zoom / l), M.drawImage(I, E.mpan.x, E.mpan.y, E.width / E.zoom / l, E.height / E.zoom / l);
    } else e.textureOnViewport && !a && (e.textureCache = null);
    var N = /*#__PURE__*/ t.extent(), q = e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming || e.hoverData.draggingEles || e.cy.animated(), H = e.hideEdgesOnViewport && q, z = [];
    if (z[e.NODE] = !f[e.NODE] && d && !e.clearedForMotionBlur[e.NODE] || e.clearingMotionBlur, z[e.NODE] && (e.clearedForMotionBlur[e.NODE] = true), z[e.DRAG] = !f[e.DRAG] && d && !e.clearedForMotionBlur[e.DRAG] || e.clearingMotionBlur, z[e.DRAG] && (e.clearedForMotionBlur[e.DRAG] = true), f[e.NODE] || n || i || z[e.NODE]) {
        var V = d && !z[e.NODE] && g !== 1, M = a || (V ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] : u.contexts[e.NODE]), K = d && !V ? "motionBlur" : void 0;
        A(M, K), H ? e.drawCachedNodes(M, B.nondrag, l, N) : e.drawLayeredElements(M, B.nondrag, l, N), e.debug && e.drawDebugPoints(M, B.nondrag), !n && !d && (f[e.NODE] = false);
    }
    if (!i && (f[e.DRAG] || n || z[e.DRAG])) {
        var V = d && !z[e.DRAG] && g !== 1, M = a || (V ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG] : u.contexts[e.DRAG]);
        A(M, d && !V ? "motionBlur" : void 0), H ? e.drawCachedNodes(M, B.drag, l, N) : e.drawCachedElements(M, B.drag, l, N), e.debug && e.drawDebugPoints(M, B.drag), !n && !d && (f[e.DRAG] = false);
    }
    if (this.drawSelectionRectangle(r, A), d && g !== 1) {
        var J = u.contexts[e.NODE], X = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE], ee = u.contexts[e.DRAG], te = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG], ie = /*#__PURE__*/ m$1(function(F, _, W) {
            F.setTransform(1, 0, 0, 1, 0, 0), W || !y ? F.clearRect(0, 0, e.canvasWidth, e.canvasHeight) : P(F, 0, 0, e.canvasWidth, e.canvasHeight);
            var Z = g;
            F.drawImage(_, 0, 0, e.canvasWidth * Z, e.canvasHeight * Z, 0, 0, e.canvasWidth, e.canvasHeight);
        }, "drawMotionBlur");
        (f[e.NODE] || z[e.NODE]) && (ie(J, X, z[e.NODE]), f[e.NODE] = false), (f[e.DRAG] || z[e.DRAG]) && (ie(ee, te, z[e.DRAG]), f[e.DRAG] = false);
    }
    e.prevViewport = E, e.clearingMotionBlur && (e.clearingMotionBlur = false, e.motionBlurCleared = true, e.motionBlur = true), d && (e.motionBlurTimeout = /*#__PURE__*/ setTimeout(function() {
        e.motionBlurTimeout = null, e.clearedForMotionBlur[e.NODE] = false, e.clearedForMotionBlur[e.DRAG] = false, e.motionBlur = false, e.clearingMotionBlur = !c, e.mbFrames = 0, f[e.NODE] = true, f[e.DRAG] = true, e.redraw();
    }, Gy)), a || t.emit("render");
};
var ga;
Er.drawSelectionRectangle = function(r, e) {
    var t = this, a = t.cy, n = t.data, i = /*#__PURE__*/ a.style(), s = r.drawOnlyNodeLayer, o = r.drawAllLayers, l = n.canvasNeedsRedraw, u = r.forcedContext;
    if (t.showFps || !s && l[t.SELECT_BOX] && !o) {
        var f = u || n.contexts[t.SELECT_BOX];
        if (e(f), t.selection[4] == 1 && (t.hoverData.selecting || t.touchData.selecting)) {
            var c = /*#__PURE__*/ t.cy.zoom(), d = i.core("selection-box-border-width").value / c;
            f.lineWidth = d, f.fillStyle = "rgba(" + i.core("selection-box-color").value[0] + "," + i.core("selection-box-color").value[1] + "," + i.core("selection-box-color").value[2] + "," + i.core("selection-box-opacity").value + ")", f.fillRect(t.selection[0], t.selection[1], t.selection[2] - t.selection[0], t.selection[3] - t.selection[1]), d > 0 && (f.strokeStyle = "rgba(" + i.core("selection-box-border-color").value[0] + "," + i.core("selection-box-border-color").value[1] + "," + i.core("selection-box-border-color").value[2] + "," + i.core("selection-box-opacity").value + ")", f.strokeRect(t.selection[0], t.selection[1], t.selection[2] - t.selection[0], t.selection[3] - t.selection[1]));
        }
        if (n.bgActivePosistion && !t.hoverData.selecting) {
            var c = /*#__PURE__*/ t.cy.zoom(), g = n.bgActivePosistion;
            f.fillStyle = "rgba(" + i.core("active-bg-color").value[0] + "," + i.core("active-bg-color").value[1] + "," + i.core("active-bg-color").value[2] + "," + i.core("active-bg-opacity").value + ")", f.beginPath(), f.arc(g.x, g.y, i.core("active-bg-size").pfValue / c, 0, 2 * Math.PI), f.fill();
        }
        var h = t.lastRedrawTime;
        if (t.showFps && h) {
            h = /*#__PURE__*/ Math.round(h);
            var m = /*#__PURE__*/ Math.round(1e3 / h), p = "1 frame = " + h + " ms = " + m + " fps";
            if (f.setTransform(1, 0, 0, 1, 0, 0), f.fillStyle = "rgba(255, 0, 0, 0.75)", f.strokeStyle = "rgba(255, 0, 0, 0.75)", f.font = "30px Arial", !ga) {
                var y = /*#__PURE__*/ f.measureText(p);
                ga = y.actualBoundingBoxAscent;
            }
            f.fillText(p, 0, ga);
            var b1 = 60;
            f.strokeRect(0, ga + 10, 250, 20), f.fillRect(0, ga + 10, 250 * Math.min(m / b1, 1), 20);
        }
        o || (l[t.SELECT_BOX] = false);
    }
};
function Wl(r, e, t) {
    var a = /*#__PURE__*/ r.createShader(e);
    if (r.shaderSource(a, t), r.compileShader(a), !r.getShaderParameter(a, r.COMPILE_STATUS)) throw new Error(r.getShaderInfoLog(a));
    return a;
}
m$1(Wl, "compileShader");
function Hy(r, e, t) {
    var a = /*#__PURE__*/ Wl(r, r.VERTEX_SHADER, e), n = /*#__PURE__*/ Wl(r, r.FRAGMENT_SHADER, t), i = /*#__PURE__*/ r.createProgram();
    if (r.attachShader(i, a), r.attachShader(i, n), r.linkProgram(i), !r.getProgramParameter(i, r.LINK_STATUS)) throw new Error("Could not initialize shaders");
    return i;
}
m$1(Hy, "createProgram");
function Wy(r, e, t) {
    t === void 0 && (t = e);
    var a = /*#__PURE__*/ r.makeOffscreenCanvas(e, t), n = a.context = /*#__PURE__*/ a.getContext("2d");
    return a.clear = function() {
        return n.clearRect(0, 0, a.width, a.height);
    }, a.clear(), a;
}
m$1(Wy, "createTextureCanvas");
function wo(r) {
    var e = r.pixelRatio, t = /*#__PURE__*/ r.cy.zoom(), a = /*#__PURE__*/ r.cy.pan();
    return {
        zoom: t * e,
        pan: {
            x: a.x * e,
            y: a.y * e
        }
    };
}
m$1(wo, "getEffectivePanZoom");
function $y(r) {
    var e = r.pixelRatio, t = /*#__PURE__*/ r.cy.zoom();
    return t * e;
}
m$1($y, "getEffectiveZoom");
function Uy(r, e, t, a, n) {
    var i = a * t + e.x, s = n * t + e.y;
    return s = /*#__PURE__*/ Math.round(r.canvasHeight - s), [
        i,
        s
    ];
}
m$1(Uy, "modelToRenderedPosition");
function Ky(r) {
    return r.pstyle("background-fill").value !== "solid" || r.pstyle("background-image").strValue !== "none" ? false : r.pstyle("border-width").value === 0 || r.pstyle("border-opacity").value === 0 ? true : r.pstyle("border-style").value === "solid";
}
m$1(Ky, "isSimpleShape");
function Xy(r, e) {
    if (r.length !== e.length) return false;
    for(var t = 0; t < r.length; t++)if (r[t] !== e[t]) return false;
    return true;
}
m$1(Xy, "arrayEqual");
function Et(r, e, t) {
    var a = r[0] / 255, n = r[1] / 255, i = r[2] / 255, s = e, o = t || new Array(4);
    return o[0] = a * s, o[1] = n * s, o[2] = i * s, o[3] = s, o;
}
m$1(Et, "toWebGLColor");
function Gt(r, e) {
    var t = e || new Array(4);
    return t[0] = (r >> 0 & 255) / 255, t[1] = (r >> 8 & 255) / 255, t[2] = (r >> 16 & 255) / 255, t[3] = (r >> 24 & 255) / 255, t;
}
m$1(Gt, "indexToVec4");
function Yy(r) {
    return r[0] + (r[1] << 8) + (r[2] << 16) + (r[3] << 24);
}
m$1(Yy, "vec4ToIndex");
function Zy(r, e) {
    var t = /*#__PURE__*/ r.createTexture();
    return t.buffer = function(a) {
        r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_NEAREST), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, a), r.generateMipmap(r.TEXTURE_2D), r.bindTexture(r.TEXTURE_2D, null);
    }, t.deleteTexture = function() {
        r.deleteTexture(t);
    }, t;
}
m$1(Zy, "createTexture");
function Rf(r, e) {
    switch(e){
        case "float":
            return [
                1,
                r.FLOAT,
                4
            ];
        case "vec2":
            return [
                2,
                r.FLOAT,
                4
            ];
        case "vec3":
            return [
                3,
                r.FLOAT,
                4
            ];
        case "vec4":
            return [
                4,
                r.FLOAT,
                4
            ];
        case "int":
            return [
                1,
                r.INT,
                4
            ];
        case "ivec2":
            return [
                2,
                r.INT,
                4
            ];
    }
}
m$1(Rf, "getTypeInfo");
function Mf(r, e, t) {
    switch(e){
        case r.FLOAT:
            return new Float32Array(t);
        case r.INT:
            return new Int32Array(t);
    }
}
m$1(Mf, "createTypedArray");
function Qy(r, e, t, a, n, i) {
    switch(e){
        case r.FLOAT:
            return new Float32Array(t.buffer, i * a, n);
        case r.INT:
            return new Int32Array(t.buffer, i * a, n);
    }
}
m$1(Qy, "createTypedArrayView");
function Jy(r, e, t, a) {
    var n = /*#__PURE__*/ Rf(r, e), i = /*#__PURE__*/ je(n, 2), s = i[0], o = i[1], l = /*#__PURE__*/ Mf(r, o, a), u = /*#__PURE__*/ r.createBuffer();
    return r.bindBuffer(r.ARRAY_BUFFER, u), r.bufferData(r.ARRAY_BUFFER, l, r.STATIC_DRAW), o === r.FLOAT ? r.vertexAttribPointer(t, s, o, false, 0, 0) : o === r.INT && r.vertexAttribIPointer(t, s, o, 0, 0), r.enableVertexAttribArray(t), r.bindBuffer(r.ARRAY_BUFFER, null), u;
}
m$1(Jy, "createBufferStaticDraw");
function Vr(r, e, t, a) {
    var n = /*#__PURE__*/ Rf(r, t), i = /*#__PURE__*/ je(n, 3), s = i[0], o = i[1], l = i[2], u = /*#__PURE__*/ Mf(r, o, e * s), f = s * l, c = /*#__PURE__*/ r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, c), r.bufferData(r.ARRAY_BUFFER, e * f, r.DYNAMIC_DRAW), r.enableVertexAttribArray(a), o === r.FLOAT ? r.vertexAttribPointer(a, s, o, false, f, 0) : o === r.INT && r.vertexAttribIPointer(a, s, o, f, 0), r.vertexAttribDivisor(a, 1), r.bindBuffer(r.ARRAY_BUFFER, null);
    for(var d = new Array(e), g = 0; g < e; g++)d[g] = /*#__PURE__*/ Qy(r, o, u, f, s, g);
    return c.dataArray = u, c.stride = f, c.size = s, c.getView = function(h) {
        return d[h];
    }, c.setPoint = function(h, m, p) {
        var y = d[h];
        y[0] = m, y[1] = p;
    }, c.bufferSubData = function(h) {
        r.bindBuffer(r.ARRAY_BUFFER, c), h ? r.bufferSubData(r.ARRAY_BUFFER, 0, u, 0, h * s) : r.bufferSubData(r.ARRAY_BUFFER, 0, u);
    }, c;
}
m$1(Vr, "createBufferDynamicDraw");
function jy(r, e, t) {
    for(var a = 9, n = new Float32Array(e * a), i = new Array(e), s = 0; s < e; s++){
        var o = s * a * 4;
        i[s] = new Float32Array(n.buffer, o, a);
    }
    var l = /*#__PURE__*/ r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, l), r.bufferData(r.ARRAY_BUFFER, n.byteLength, r.DYNAMIC_DRAW);
    for(var u = 0; u < 3; u++){
        var f = t + u;
        r.enableVertexAttribArray(f), r.vertexAttribPointer(f, 3, r.FLOAT, false, 36, u * 12), r.vertexAttribDivisor(f, 1);
    }
    return r.bindBuffer(r.ARRAY_BUFFER, null), l.getMatrixView = function(c) {
        return i[c];
    }, l.setData = function(c, d) {
        i[d].set(c, 0);
    }, l.bufferSubData = function() {
        r.bindBuffer(r.ARRAY_BUFFER, l), r.bufferSubData(r.ARRAY_BUFFER, 0, n);
    }, l;
}
m$1(jy, "create3x3MatrixBufferDynamicDraw");
function em(r) {
    var e = /*#__PURE__*/ r.createFramebuffer();
    r.bindFramebuffer(r.FRAMEBUFFER, e);
    var t = /*#__PURE__*/ r.createTexture();
    return r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t, 0), r.bindFramebuffer(r.FRAMEBUFFER, null), e.setFramebufferAttachmentSizes = function(a, n) {
        r.bindTexture(r.TEXTURE_2D, t), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, a, n, 0, r.RGBA, r.UNSIGNED_BYTE, null);
    }, e;
}
m$1(em, "createPickingFrameBuffer");
var $l = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
    for(var r = 0, e = arguments.length; e--;)r += arguments[e] * arguments[e];
    return Math.sqrt(r);
});
function Cs() {
    var r = new $l(9);
    return $l != Float32Array && (r[1] = 0, r[2] = 0, r[3] = 0, r[5] = 0, r[6] = 0, r[7] = 0), r[0] = 1, r[4] = 1, r[8] = 1, r;
}
m$1(Cs, "create");
function Ul(r) {
    return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 1, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1, r;
}
m$1(Ul, "identity");
function rm(r, e, t) {
    var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], l = e[5], u = e[6], f = e[7], c = e[8], d = t[0], g = t[1], h = t[2], m = t[3], p = t[4], y = t[5], b1 = t[6], w = t[7], x = t[8];
    return r[0] = d * a + g * s + h * u, r[1] = d * n + g * o + h * f, r[2] = d * i + g * l + h * c, r[3] = m * a + p * s + y * u, r[4] = m * n + p * o + y * f, r[5] = m * i + p * l + y * c, r[6] = b1 * a + w * s + x * u, r[7] = b1 * n + w * o + x * f, r[8] = b1 * i + w * l + x * c, r;
}
m$1(rm, "multiply");
function mn(r, e, t) {
    var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], l = e[5], u = e[6], f = e[7], c = e[8], d = t[0], g = t[1];
    return r[0] = a, r[1] = n, r[2] = i, r[3] = s, r[4] = o, r[5] = l, r[6] = d * a + g * s + u, r[7] = d * n + g * o + f, r[8] = d * i + g * l + c, r;
}
m$1(mn, "translate");
function Kl(r, e, t) {
    var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], l = e[5], u = e[6], f = e[7], c = e[8], d = /*#__PURE__*/ Math.sin(t), g = /*#__PURE__*/ Math.cos(t);
    return r[0] = g * a + d * s, r[1] = g * n + d * o, r[2] = g * i + d * l, r[3] = g * s - d * a, r[4] = g * o - d * n, r[5] = g * l - d * i, r[6] = u, r[7] = f, r[8] = c, r;
}
m$1(Kl, "rotate");
function $s(r, e, t) {
    var a = t[0], n = t[1];
    return r[0] = a * e[0], r[1] = a * e[1], r[2] = a * e[2], r[3] = n * e[3], r[4] = n * e[4], r[5] = n * e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r;
}
m$1($s, "scale");
function tm(r, e, t) {
    return r[0] = 2 / e, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = -2 / t, r[5] = 0, r[6] = -1, r[7] = 1, r[8] = 1, r;
}
m$1(tm, "projection");
var am = /*#__PURE__*/ function() {
    function r(e, t, a, n) {
        gt(this, r), this.debugID = /*#__PURE__*/ Math.floor(Math.random() * 1e4), this.r = e, this.texSize = t, this.texRows = a, this.texHeight = /*#__PURE__*/ Math.floor(t / a), this.enableWrapping = true, this.locked = false, this.texture = null, this.needsBuffer = true, this.freePointer = {
            x: 0,
            row: 0
        }, this.keyToLocation = new Map, this.canvas = /*#__PURE__*/ n(e, t, t), this.scratch = /*#__PURE__*/ n(e, t, this.texHeight, "scratch");
    }
    return m$1(r, "Atlas"), pt(r, [
        {
            key: "lock",
            value: /*#__PURE__*/ m$1(function() {
                this.locked = true;
            }, "lock")
        },
        {
            key: "getKeys",
            value: /*#__PURE__*/ m$1(function() {
                return new Set(this.keyToLocation.keys());
            }, "getKeys")
        },
        {
            key: "getScale",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = t.w, n = t.h, i = this.texHeight, s = this.texSize, o = i / n, l = a * o, u = n * o;
                return l > s && (o = s / a, l = a * o, u = n * o), {
                    scale: o,
                    texW: l,
                    texH: u
                };
            }, "getScale")
        },
        {
            key: "draw",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                var i = this;
                if (this.locked) throw new Error("can't draw, atlas is locked");
                var s = this.texSize, o = this.texRows, l = this.texHeight, u = /*#__PURE__*/ this.getScale(a), f = u.scale, c = u.texW, d = u.texH, g = /*#__PURE__*/ m$1(function(w, x) {
                    if (n && x) {
                        var C = x.context, T = w.x, E = w.row, S = T, D = l * E;
                        C.save(), C.translate(S, D), C.scale(f, f), n(C, a), C.restore();
                    }
                }, "drawAt"), h = [
                    null,
                    null
                ], m = /*#__PURE__*/ m$1(function() {
                    g(i.freePointer, i.canvas), h[0] = {
                        x: i.freePointer.x,
                        y: i.freePointer.row * l,
                        w: c,
                        h: d
                    }, h[1] = {
                        x: i.freePointer.x + c,
                        y: i.freePointer.row * l,
                        w: 0,
                        h: d
                    }, i.freePointer.x += c, i.freePointer.x == s && (i.freePointer.x = 0, i.freePointer.row++);
                }, "drawNormal"), p = /*#__PURE__*/ m$1(function() {
                    var w = i.scratch, x = i.canvas;
                    w.clear(), g({
                        x: 0,
                        row: 0
                    }, w);
                    var C = s - i.freePointer.x, T = c - C, E = l;
                    {
                        var S = i.freePointer.x, D = i.freePointer.row * l, B = C;
                        x.context.drawImage(w, 0, 0, B, E, S, D, B, E), h[0] = {
                            x: S,
                            y: D,
                            w: B,
                            h: d
                        };
                    }
                    {
                        var P = C, A = (i.freePointer.row + 1) * l, R = T;
                        x && x.context.drawImage(w, P, 0, R, E, 0, A, R, E), h[1] = {
                            x: 0,
                            y: A,
                            w: R,
                            h: d
                        };
                    }
                    i.freePointer.x = T, i.freePointer.row++;
                }, "drawWrapped"), y = /*#__PURE__*/ m$1(function() {
                    i.freePointer.x = 0, i.freePointer.row++;
                }, "moveToStartOfNextRow");
                if (this.freePointer.x + c <= s) m();
                else {
                    if (this.freePointer.row >= o - 1) return false;
                    this.freePointer.x === s ? (y(), m()) : this.enableWrapping ? p() : (y(), m());
                }
                return this.keyToLocation.set(t, h), this.needsBuffer = true, h;
            }, "draw")
        },
        {
            key: "getOffsets",
            value: /*#__PURE__*/ m$1(function(t) {
                return this.keyToLocation.get(t);
            }, "getOffsets")
        },
        {
            key: "isEmpty",
            value: /*#__PURE__*/ m$1(function() {
                return this.freePointer.x === 0 && this.freePointer.row === 0;
            }, "isEmpty")
        },
        {
            key: "canFit",
            value: /*#__PURE__*/ m$1(function(t) {
                if (this.locked) return false;
                var a = this.texSize, n = this.texRows, i = /*#__PURE__*/ this.getScale(t), s = i.texW;
                return this.freePointer.x + s > a ? this.freePointer.row < n - 1 : true;
            }, "canFit")
        },
        {
            key: "bufferIfNeeded",
            value: /*#__PURE__*/ m$1(function(t) {
                this.texture || (this.texture = /*#__PURE__*/ Zy(t, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = false, this.locked && (this.canvas = null, this.scratch = null));
            }, "bufferIfNeeded")
        },
        {
            key: "dispose",
            value: /*#__PURE__*/ m$1(function() {
                this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = true;
            }, "dispose")
        }
    ]);
}(), nm = /*#__PURE__*/ function() {
    function r(e, t, a, n) {
        gt(this, r), this.r = e, this.texSize = t, this.texRows = a, this.createTextureCanvas = n, this.atlases = [], this.styleKeyToAtlas = new Map, this.markedKeys = new Set;
    }
    return m$1(r, "AtlasCollection"), pt(r, [
        {
            key: "getKeys",
            value: /*#__PURE__*/ m$1(function() {
                return new Set(this.styleKeyToAtlas.keys());
            }, "getKeys")
        },
        {
            key: "_createAtlas",
            value: /*#__PURE__*/ m$1(function() {
                var t = this.r, a = this.texSize, n = this.texRows, i = this.createTextureCanvas;
                return new am(t, a, n, i);
            }, "_createAtlas")
        },
        {
            key: "_getScratchCanvas",
            value: /*#__PURE__*/ m$1(function() {
                if (!this.scratch) {
                    var t = this.r, a = this.texSize, n = this.texRows, i = this.createTextureCanvas, s = /*#__PURE__*/ Math.floor(a / n);
                    this.scratch = /*#__PURE__*/ i(t, a, s, "scratch");
                }
                return this.scratch;
            }, "_getScratchCanvas")
        },
        {
            key: "draw",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                var i = /*#__PURE__*/ this.styleKeyToAtlas.get(t);
                return i || (i = this.atlases[this.atlases.length - 1], (!i || !i.canFit(a)) && (i && i.lock(), i = /*#__PURE__*/ this._createAtlas(), this.atlases.push(i)), i.draw(t, a, n), this.styleKeyToAtlas.set(t, i)), i;
            }, "draw")
        },
        {
            key: "getAtlas",
            value: /*#__PURE__*/ m$1(function(t) {
                return this.styleKeyToAtlas.get(t);
            }, "getAtlas")
        },
        {
            key: "hasAtlas",
            value: /*#__PURE__*/ m$1(function(t) {
                return this.styleKeyToAtlas.has(t);
            }, "hasAtlas")
        },
        {
            key: "markKeyForGC",
            value: /*#__PURE__*/ m$1(function(t) {
                this.markedKeys.add(t);
            }, "markKeyForGC")
        },
        {
            key: "gc",
            value: /*#__PURE__*/ m$1(function() {
                var t = this, a = this.markedKeys;
                if (a.size === 0) {
                    console.log("nothing to garbage collect");
                    return;
                }
                var n = [], i = new Map, s = null, o = /*#__PURE__*/ Dr(this.atlases), l;
                try {
                    var u = /*#__PURE__*/ m$1(function() {
                        var c = l.value, d = /*#__PURE__*/ c.getKeys(), g = /*#__PURE__*/ im(a, d);
                        if (g.size === 0) return n.push(c), d.forEach(function(C) {
                            return i.set(C, c);
                        }), 1;
                        s || (s = /*#__PURE__*/ t._createAtlas(), n.push(s));
                        var h = /*#__PURE__*/ Dr(d), m;
                        try {
                            for(h.s(); !(m = /*#__PURE__*/ h.n()).done;){
                                var p = m.value;
                                if (!g.has(p)) {
                                    var y = /*#__PURE__*/ c.getOffsets(p), b1 = /*#__PURE__*/ je(y, 2), w = b1[0], x = b1[1];
                                    s.canFit({
                                        w: w.w + x.w,
                                        h: w.h
                                    }) || (s.lock(), s = /*#__PURE__*/ t._createAtlas(), n.push(s)), c.canvas && (t._copyTextureToNewAtlas(p, c, s), i.set(p, s));
                                }
                            }
                        } catch (C) {
                            h.e(C);
                        } finally{
                            h.f();
                        }
                        c.dispose();
                    }, "_loop");
                    for(o.s(); !(l = /*#__PURE__*/ o.n()).done;)u();
                } catch (f) {
                    o.e(f);
                } finally{
                    o.f();
                }
                this.atlases = n, this.styleKeyToAtlas = i, this.markedKeys = new Set;
            }, "gc")
        },
        {
            key: "_copyTextureToNewAtlas",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                var i = /*#__PURE__*/ a.getOffsets(t), s = /*#__PURE__*/ je(i, 2), o = s[0], l = s[1];
                if (l.w === 0) n.draw(t, o, function(d) {
                    d.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h);
                });
                else {
                    var u = /*#__PURE__*/ this._getScratchCanvas();
                    u.clear(), u.context.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h), u.context.drawImage(a.canvas, l.x, l.y, l.w, l.h, o.w, 0, l.w, l.h);
                    var f = o.w + l.w, c = o.h;
                    n.draw(t, {
                        w: f,
                        h: c
                    }, function(d) {
                        d.drawImage(u, 0, 0, f, c, 0, 0, f, c);
                    });
                }
            }, "_copyTextureToNewAtlas")
        },
        {
            key: "getCounts",
            value: /*#__PURE__*/ m$1(function() {
                return {
                    keyCount: this.styleKeyToAtlas.size,
                    atlasCount: new Set(this.styleKeyToAtlas.values()).size
                };
            }, "getCounts")
        }
    ]);
}();
function im(r, e) {
    return r.intersection ? r.intersection(e) : new Set(bn(r).filter(function(t) {
        return e.has(t);
    }));
}
m$1(im, "intersection");
var sm = /*#__PURE__*/ function() {
    function r(e, t) {
        gt(this, r), this.r = e, this.globalOptions = t, this.atlasSize = t.webglTexSize, this.maxAtlasesPerBatch = t.webglTexPerBatch, this.renderTypes = new Map, this.collections = new Map, this.typeAndIdToKey = new Map;
    }
    return m$1(r, "AtlasManager"), pt(r, [
        {
            key: "getAtlasSize",
            value: /*#__PURE__*/ m$1(function() {
                return this.atlasSize;
            }, "getAtlasSize")
        },
        {
            key: "addAtlasCollection",
            value: /*#__PURE__*/ m$1(function(t, a) {
                var n = this.globalOptions, i = n.webglTexSize, s = n.createTextureCanvas, o = a.texRows, l = /*#__PURE__*/ this._cacheScratchCanvas(s), u = new nm(this.r, i, o, l);
                this.collections.set(t, u);
            }, "addAtlasCollection")
        },
        {
            key: "addRenderType",
            value: /*#__PURE__*/ m$1(function(t, a) {
                var n = a.collection;
                if (!this.collections.has(n)) throw new Error("invalid atlas collection name '".concat(n, "'"));
                var i = /*#__PURE__*/ this.collections.get(n), s = /*#__PURE__*/ we({
                    type: t,
                    atlasCollection: i
                }, a);
                this.renderTypes.set(t, s);
            }, "addRenderType")
        },
        {
            key: "getRenderTypeOpts",
            value: /*#__PURE__*/ m$1(function(t) {
                return this.renderTypes.get(t);
            }, "getRenderTypeOpts")
        },
        {
            key: "getAtlasCollection",
            value: /*#__PURE__*/ m$1(function(t) {
                return this.collections.get(t);
            }, "getAtlasCollection")
        },
        {
            key: "_cacheScratchCanvas",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = -1, n = -1, i = null;
                return function(s, o, l, u) {
                    return u ? ((!i || o != a || l != n) && (a = o, n = l, i = /*#__PURE__*/ t(s, o, l)), i) : t(s, o, l);
                };
            }, "_cacheScratchCanvas")
        },
        {
            key: "_key",
            value: /*#__PURE__*/ m$1(function(t, a) {
                return "".concat(t, "-").concat(a);
            }, "_key")
        },
        {
            key: "invalidate",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.forceRedraw, s = i === void 0 ? false : i, o = n.filterEle, l = o === void 0 ? function() {
                    return true;
                } : o, u = n.filterType, f = u === void 0 ? function() {
                    return true;
                } : u, c = false, d = false, g = /*#__PURE__*/ Dr(t), h;
                try {
                    for(g.s(); !(h = /*#__PURE__*/ g.n()).done;){
                        var m = h.value;
                        if (l(m)) {
                            var p = /*#__PURE__*/ Dr(/*#__PURE__*/ this.renderTypes.values()), y;
                            try {
                                var b1 = /*#__PURE__*/ m$1(function() {
                                    var x = y.value, C = x.type;
                                    if (f(C)) {
                                        var T = /*#__PURE__*/ a.collections.get(x.collection), E = /*#__PURE__*/ x.getKey(m), S = Array.isArray(E) ? E : [
                                            E
                                        ];
                                        if (s) S.forEach(function(A) {
                                            return T.markKeyForGC(A);
                                        }), d = !0;
                                        else {
                                            var D = x.getID ? x.getID(m) : m.id(), B = /*#__PURE__*/ a._key(C, D), P = /*#__PURE__*/ a.typeAndIdToKey.get(B);
                                            P !== void 0 && !Xy(S, P) && (c = !0, a.typeAndIdToKey.delete(B), P.forEach(function(A) {
                                                return T.markKeyForGC(A);
                                            }));
                                        }
                                    }
                                }, "_loop2");
                                for(p.s(); !(y = /*#__PURE__*/ p.n()).done;)b1();
                            } catch (w) {
                                p.e(w);
                            } finally{
                                p.f();
                            }
                        }
                    }
                } catch (w) {
                    g.e(w);
                } finally{
                    g.f();
                }
                return d && (this.gc(), c = false), c;
            }, "invalidate")
        },
        {
            key: "gc",
            value: /*#__PURE__*/ m$1(function() {
                var t = /*#__PURE__*/ Dr(/*#__PURE__*/ this.collections.values()), a;
                try {
                    for(t.s(); !(a = /*#__PURE__*/ t.n()).done;){
                        var n = a.value;
                        n.gc();
                    }
                } catch (i) {
                    t.e(i);
                } finally{
                    t.f();
                }
            }, "gc")
        },
        {
            key: "getOrCreateAtlas",
            value: /*#__PURE__*/ m$1(function(t, a, n, i) {
                var s = /*#__PURE__*/ this.renderTypes.get(a), o = /*#__PURE__*/ this.collections.get(s.collection), l = false, u = /*#__PURE__*/ o.draw(i, n, function(d) {
                    s.drawClipped ? (d.save(), d.beginPath(), d.rect(0, 0, n.w, n.h), d.clip(), s.drawElement(d, t, n, true, true), d.restore()) : s.drawElement(d, t, n, true, true), l = true;
                });
                if (l) {
                    var f = s.getID ? s.getID(t) : t.id(), c = /*#__PURE__*/ this._key(a, f);
                    this.typeAndIdToKey.has(c) ? this.typeAndIdToKey.get(c).push(i) : this.typeAndIdToKey.set(c, [
                        i
                    ]);
                }
                return u;
            }, "getOrCreateAtlas")
        },
        {
            key: "getAtlasInfo",
            value: /*#__PURE__*/ m$1(function(t, a) {
                var n = this, i = /*#__PURE__*/ this.renderTypes.get(a), s = /*#__PURE__*/ i.getKey(t), o = Array.isArray(s) ? s : [
                    s
                ];
                return o.map(function(l) {
                    var u = /*#__PURE__*/ i.getBoundingBox(t, l), f = /*#__PURE__*/ n.getOrCreateAtlas(t, a, u, l), c = /*#__PURE__*/ f.getOffsets(l), d = /*#__PURE__*/ je(c, 2), g = d[0], h = d[1];
                    return {
                        atlas: f,
                        tex: g,
                        tex1: g,
                        tex2: h,
                        bb: u
                    };
                });
            }, "getAtlasInfo")
        },
        {
            key: "getDebugInfo",
            value: /*#__PURE__*/ m$1(function() {
                var t = [], a = /*#__PURE__*/ Dr(this.collections), n;
                try {
                    for(a.s(); !(n = /*#__PURE__*/ a.n()).done;){
                        var i = /*#__PURE__*/ je(n.value, 2), s = i[0], o = i[1], l = /*#__PURE__*/ o.getCounts(), u = l.keyCount, f = l.atlasCount;
                        t.push({
                            type: s,
                            keyCount: u,
                            atlasCount: f
                        });
                    }
                } catch (c) {
                    a.e(c);
                } finally{
                    a.f();
                }
                return t;
            }, "getDebugInfo")
        }
    ]);
}(), om = /*#__PURE__*/ function() {
    function r(e) {
        gt(this, r), this.globalOptions = e, this.atlasSize = e.webglTexSize, this.maxAtlasesPerBatch = e.webglTexPerBatch, this.batchAtlases = [];
    }
    return m$1(r, "AtlasBatchManager"), pt(r, [
        {
            key: "getMaxAtlasesPerBatch",
            value: /*#__PURE__*/ m$1(function() {
                return this.maxAtlasesPerBatch;
            }, "getMaxAtlasesPerBatch")
        },
        {
            key: "getAtlasSize",
            value: /*#__PURE__*/ m$1(function() {
                return this.atlasSize;
            }, "getAtlasSize")
        },
        {
            key: "getIndexArray",
            value: /*#__PURE__*/ m$1(function() {
                return Array.from({
                    length: this.maxAtlasesPerBatch
                }, function(t, a) {
                    return a;
                });
            }, "getIndexArray")
        },
        {
            key: "startBatch",
            value: /*#__PURE__*/ m$1(function() {
                this.batchAtlases = [];
            }, "startBatch")
        },
        {
            key: "getAtlasCount",
            value: /*#__PURE__*/ m$1(function() {
                return this.batchAtlases.length;
            }, "getAtlasCount")
        },
        {
            key: "getAtlases",
            value: /*#__PURE__*/ m$1(function() {
                return this.batchAtlases;
            }, "getAtlases")
        },
        {
            key: "canAddToCurrentBatch",
            value: /*#__PURE__*/ m$1(function(t) {
                return this.batchAtlases.length === this.maxAtlasesPerBatch ? this.batchAtlases.includes(t) : true;
            }, "canAddToCurrentBatch")
        },
        {
            key: "getAtlasIndexForBatch",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = /*#__PURE__*/ this.batchAtlases.indexOf(t);
                if (a < 0) {
                    if (this.batchAtlases.length === this.maxAtlasesPerBatch) throw new Error("cannot add more atlases to batch");
                    this.batchAtlases.push(t), a = this.batchAtlases.length - 1;
                }
                return a;
            }, "getAtlasIndexForBatch")
        }
    ]);
}(), um = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`, lm = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`, vm = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`, fm = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`, Ca = {
    SCREEN: {
        name: "screen",
        screen: true
    },
    PICKING: {
        name: "picking",
        picking: true
    }
}, Rn = {
    IGNORE: 1,
    USE_BB: 2
}, Ts = 0, Xl = 1, Yl = 2, Ss = 3, Ht = 4, on = 5, pa = 6, ya = 7, cm = /*#__PURE__*/ function() {
    function r(e, t, a) {
        gt(this, r), this.r = e, this.gl = t, this.maxInstances = a.webglBatchSize, this.atlasSize = a.webglTexSize, this.bgColor = a.bgColor, this.debug = a.webglDebug, this.batchDebugInfo = [], a.enableWrapping = true, a.createTextureCanvas = Wy, this.atlasManager = new sm(e, a), this.batchManager = new om(a), this.simpleShapeOptions = new Map, this.program = /*#__PURE__*/ this._createShaderProgram(Ca.SCREEN), this.pickingProgram = /*#__PURE__*/ this._createShaderProgram(Ca.PICKING), this.vao = /*#__PURE__*/ this._createVAO();
    }
    return m$1(r, "ElementDrawingWebGL"), pt(r, [
        {
            key: "addAtlasCollection",
            value: /*#__PURE__*/ m$1(function(t, a) {
                this.atlasManager.addAtlasCollection(t, a);
            }, "addAtlasCollection")
        },
        {
            key: "addTextureAtlasRenderType",
            value: /*#__PURE__*/ m$1(function(t, a) {
                this.atlasManager.addRenderType(t, a);
            }, "addTextureAtlasRenderType")
        },
        {
            key: "addSimpleShapeRenderType",
            value: /*#__PURE__*/ m$1(function(t, a) {
                this.simpleShapeOptions.set(t, a);
            }, "addSimpleShapeRenderType")
        },
        {
            key: "invalidate",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.type, i = this.atlasManager;
                return n ? i.invalidate(t, {
                    filterType: /*#__PURE__*/ m$1(function(o) {
                        return o === n;
                    }, "filterType"),
                    forceRedraw: true
                }) : i.invalidate(t);
            }, "invalidate")
        },
        {
            key: "gc",
            value: /*#__PURE__*/ m$1(function() {
                this.atlasManager.gc();
            }, "gc")
        },
        {
            key: "_createShaderProgram",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = this.gl, n = /*#__PURE__*/ `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == `.concat(Ts, `) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(Ht, " || aVertType == ").concat(ya, ` 
             || aVertType == `).concat(on, " || aVertType == ").concat(pa, `) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(Xl, `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == `).concat(Yl, `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == `).concat(Ss, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `), i = /*#__PURE__*/ this.batchManager.getIndexArray(), s = /*#__PURE__*/ `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      `.concat(/*#__PURE__*/ i.map(function(u) {
                    return "uniform sampler2D uTexture".concat(u, ";");
                }).join(`
	`), `

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      `).concat(um, `
      `).concat(lm, `
      `).concat(vm, `
      `).concat(fm, `

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == `).concat(Ts, `) {
          // look up the texel from the texture unit
          `).concat(/*#__PURE__*/ i.map(function(u) {
                    return "if(vAtlasId == ".concat(u, ") outColor = texture(uTexture").concat(u, ", vTexCoord);");
                }).join(`
	else `), `
        } 
        else if(vVertType == `).concat(Ss, `) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == `).concat(Ht, ` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == `).concat(Ht, " || vVertType == ").concat(ya, ` 
          || vVertType == `).concat(on, " || vVertType == ").concat(pa, `) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == `).concat(Ht, `) {
            d = rectangleSD(p, b);
          } else if(vVertType == `).concat(ya, ` && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == `).concat(ya, `) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        `).concat(t.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `), o = /*#__PURE__*/ Hy(a, n, s);
                o.aPosition = /*#__PURE__*/ a.getAttribLocation(o, "aPosition"), o.aIndex = /*#__PURE__*/ a.getAttribLocation(o, "aIndex"), o.aVertType = /*#__PURE__*/ a.getAttribLocation(o, "aVertType"), o.aTransform = /*#__PURE__*/ a.getAttribLocation(o, "aTransform"), o.aAtlasId = /*#__PURE__*/ a.getAttribLocation(o, "aAtlasId"), o.aTex = /*#__PURE__*/ a.getAttribLocation(o, "aTex"), o.aPointAPointB = /*#__PURE__*/ a.getAttribLocation(o, "aPointAPointB"), o.aPointCPointD = /*#__PURE__*/ a.getAttribLocation(o, "aPointCPointD"), o.aLineWidth = /*#__PURE__*/ a.getAttribLocation(o, "aLineWidth"), o.aColor = /*#__PURE__*/ a.getAttribLocation(o, "aColor"), o.aCornerRadius = /*#__PURE__*/ a.getAttribLocation(o, "aCornerRadius"), o.aBorderColor = /*#__PURE__*/ a.getAttribLocation(o, "aBorderColor"), o.uPanZoomMatrix = /*#__PURE__*/ a.getUniformLocation(o, "uPanZoomMatrix"), o.uAtlasSize = /*#__PURE__*/ a.getUniformLocation(o, "uAtlasSize"), o.uBGColor = /*#__PURE__*/ a.getUniformLocation(o, "uBGColor"), o.uZoom = /*#__PURE__*/ a.getUniformLocation(o, "uZoom"), o.uTextures = [];
                for(var l = 0; l < this.batchManager.getMaxAtlasesPerBatch(); l++)o.uTextures.push(/*#__PURE__*/ a.getUniformLocation(o, /*#__PURE__*/ "uTexture".concat(l)));
                return o;
            }, "_createShaderProgram")
        },
        {
            key: "_createVAO",
            value: /*#__PURE__*/ m$1(function() {
                var t = [
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    0,
                    1
                ];
                this.vertexCount = t.length / 2;
                var a = this.maxInstances, n = this.gl, i = this.program, s = /*#__PURE__*/ n.createVertexArray();
                return n.bindVertexArray(s), Jy(n, "vec2", i.aPosition, t), this.transformBuffer = /*#__PURE__*/ jy(n, a, i.aTransform), this.indexBuffer = /*#__PURE__*/ Vr(n, a, "vec4", i.aIndex), this.vertTypeBuffer = /*#__PURE__*/ Vr(n, a, "int", i.aVertType), this.atlasIdBuffer = /*#__PURE__*/ Vr(n, a, "int", i.aAtlasId), this.texBuffer = /*#__PURE__*/ Vr(n, a, "vec4", i.aTex), this.pointAPointBBuffer = /*#__PURE__*/ Vr(n, a, "vec4", i.aPointAPointB), this.pointCPointDBuffer = /*#__PURE__*/ Vr(n, a, "vec4", i.aPointCPointD), this.lineWidthBuffer = /*#__PURE__*/ Vr(n, a, "vec2", i.aLineWidth), this.colorBuffer = /*#__PURE__*/ Vr(n, a, "vec4", i.aColor), this.cornerRadiusBuffer = /*#__PURE__*/ Vr(n, a, "vec4", i.aCornerRadius), this.borderColorBuffer = /*#__PURE__*/ Vr(n, a, "vec4", i.aBorderColor), n.bindVertexArray(null), s;
            }, "_createVAO")
        },
        {
            key: "buffers",
            get: /*#__PURE__*/ m$1(function() {
                var t = this;
                return this._buffers || (this._buffers = /*#__PURE__*/ Object.keys(this).filter(function(a) {
                    return nt(a, "Buffer");
                }).map(function(a) {
                    return t[a];
                })), this._buffers;
            }, "get")
        },
        {
            key: "startFrame",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ca.SCREEN;
                this.panZoomMatrix = t, this.renderTarget = a, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
            }, "startFrame")
        },
        {
            key: "startBatch",
            value: /*#__PURE__*/ m$1(function() {
                this.instanceCount = 0, this.batchManager.startBatch();
            }, "startBatch")
        },
        {
            key: "endFrame",
            value: /*#__PURE__*/ m$1(function() {
                this.endBatch();
            }, "endFrame")
        },
        {
            key: "_isVisible",
            value: /*#__PURE__*/ m$1(function(t, a) {
                return t.visible() ? a && a.isVisible ? a.isVisible(t) : true : false;
            }, "_isVisible")
        },
        {
            key: "drawTexture",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                var i = this.atlasManager, s = this.batchManager, o = /*#__PURE__*/ i.getRenderTypeOpts(n);
                if (this._isVisible(t, o) && !(t.isEdge() && !this._isValidEdge(t))) {
                    if (this.renderTarget.picking && o.getTexPickingMode) {
                        var l = /*#__PURE__*/ o.getTexPickingMode(t);
                        if (l === Rn.IGNORE) return;
                        if (l == Rn.USE_BB) {
                            this.drawPickingRectangle(t, a, n);
                            return;
                        }
                    }
                    var u = /*#__PURE__*/ i.getAtlasInfo(t, n), f = /*#__PURE__*/ Dr(u), c;
                    try {
                        for(f.s(); !(c = /*#__PURE__*/ f.n()).done;){
                            var d = c.value, g = d.atlas, h = d.tex1, m = d.tex2;
                            s.canAddToCurrentBatch(g) || this.endBatch();
                            for(var p = /*#__PURE__*/ s.getAtlasIndexForBatch(g), y = 0, b1 = [
                                [
                                    h,
                                    !0
                                ],
                                [
                                    m,
                                    !1
                                ]
                            ]; y < b1.length; y++){
                                var w = /*#__PURE__*/ je(b1[y], 2), x = w[0], C = w[1];
                                if (x.w != 0) {
                                    var T = this.instanceCount;
                                    this.vertTypeBuffer.getView(T)[0] = Ts;
                                    var E = /*#__PURE__*/ this.indexBuffer.getView(T);
                                    Gt(a, E);
                                    var S = /*#__PURE__*/ this.atlasIdBuffer.getView(T);
                                    S[0] = p;
                                    var D = /*#__PURE__*/ this.texBuffer.getView(T);
                                    D[0] = x.x, D[1] = x.y, D[2] = x.w, D[3] = x.h;
                                    var B = /*#__PURE__*/ this.transformBuffer.getMatrixView(T);
                                    this.setTransformMatrix(t, B, o, d, C), this.instanceCount++, C || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                                }
                            }
                        }
                    } catch (P) {
                        f.e(P);
                    } finally{
                        f.f();
                    }
                }
            }, "drawTexture")
        },
        {
            key: "setTransformMatrix",
            value: /*#__PURE__*/ m$1(function(t, a, n, i) {
                var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, o = 0;
                if (n.shapeProps && n.shapeProps.padding && (o = t.pstyle(n.shapeProps.padding).pfValue), i) {
                    var l = i.bb, u = i.tex1, f = i.tex2, c = u.w / (u.w + f.w);
                    s || (c = 1 - c);
                    var d = /*#__PURE__*/ this._getAdjustedBB(l, o, s, c);
                    this._applyTransformMatrix(a, d, n, t);
                } else {
                    var g = /*#__PURE__*/ n.getBoundingBox(t), h = /*#__PURE__*/ this._getAdjustedBB(g, o, true, 1);
                    this._applyTransformMatrix(a, h, n, t);
                }
            }, "setTransformMatrix")
        },
        {
            key: "_applyTransformMatrix",
            value: /*#__PURE__*/ m$1(function(t, a, n, i) {
                var s, o;
                Ul(t);
                var l = n.getRotation ? n.getRotation(i) : 0;
                if (l !== 0) {
                    var u = /*#__PURE__*/ n.getRotationPoint(i), f = u.x, c = u.y;
                    mn(t, t, [
                        f,
                        c
                    ]), Kl(t, t, l);
                    var d = /*#__PURE__*/ n.getRotationOffset(i);
                    s = d.x + (a.xOffset || 0), o = d.y + (a.yOffset || 0);
                } else s = a.x1, o = a.y1;
                mn(t, t, [
                    s,
                    o
                ]), $s(t, t, [
                    a.w,
                    a.h
                ]);
            }, "_applyTransformMatrix")
        },
        {
            key: "_getAdjustedBB",
            value: /*#__PURE__*/ m$1(function(t, a, n, i) {
                var s = t.x1, o = t.y1, l = t.w, u = t.h, f = t.yOffset;
                a && (s -= a, o -= a, l += 2 * a, u += 2 * a);
                var c = 0, d = l * i;
                return n && i < 1 ? l = d : !n && i < 1 && (c = l - d, s += c, l = d), {
                    x1: s,
                    y1: o,
                    w: l,
                    h: u,
                    xOffset: c,
                    yOffset: f
                };
            }, "_getAdjustedBB")
        },
        {
            key: "drawPickingRectangle",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                var i = /*#__PURE__*/ this.atlasManager.getRenderTypeOpts(n), s = this.instanceCount;
                this.vertTypeBuffer.getView(s)[0] = Ht;
                var o = /*#__PURE__*/ this.indexBuffer.getView(s);
                Gt(a, o);
                var l = /*#__PURE__*/ this.colorBuffer.getView(s);
                Et([
                    0,
                    0,
                    0
                ], 1, l);
                var u = /*#__PURE__*/ this.transformBuffer.getMatrixView(s);
                this.setTransformMatrix(t, u, i), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
            }, "drawPickingRectangle")
        },
        {
            key: "drawNode",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                var i = /*#__PURE__*/ this.simpleShapeOptions.get(n);
                if (this._isVisible(t, i)) {
                    var s = i.shapeProps, o = /*#__PURE__*/ this._getVertTypeForShape(t, s.shape);
                    if (o === void 0 || i.isSimple && !i.isSimple(t)) {
                        this.drawTexture(t, a, n);
                        return;
                    }
                    var l = this.instanceCount;
                    if (this.vertTypeBuffer.getView(l)[0] = o, o === on || o === pa) {
                        var u = /*#__PURE__*/ i.getBoundingBox(t), f = /*#__PURE__*/ this._getCornerRadius(t, s.radius, u), c = /*#__PURE__*/ this.cornerRadiusBuffer.getView(l);
                        c[0] = f, c[1] = f, c[2] = f, c[3] = f, o === pa && (c[0] = 0, c[2] = 0);
                    }
                    var d = /*#__PURE__*/ this.indexBuffer.getView(l);
                    Gt(a, d);
                    var g = t.pstyle(s.color).value, h = t.pstyle(s.opacity).value, m = /*#__PURE__*/ this.colorBuffer.getView(l);
                    Et(g, h, m);
                    var p = /*#__PURE__*/ this.lineWidthBuffer.getView(l);
                    if (p[0] = 0, p[1] = 0, s.border) {
                        var y = t.pstyle("border-width").value;
                        if (y > 0) {
                            var b1 = t.pstyle("border-color").value, w = t.pstyle("border-opacity").value, x = /*#__PURE__*/ this.borderColorBuffer.getView(l);
                            Et(b1, w, x);
                            var C = t.pstyle("border-position").value;
                            if (C === "inside") p[0] = 0, p[1] = -y;
                            else if (C === "outside") p[0] = y, p[1] = 0;
                            else {
                                var T = y / 2;
                                p[0] = T, p[1] = -T;
                            }
                        }
                    }
                    var E = /*#__PURE__*/ this.transformBuffer.getMatrixView(l);
                    this.setTransformMatrix(t, E, i), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                }
            }, "drawNode")
        },
        {
            key: "_getVertTypeForShape",
            value: /*#__PURE__*/ m$1(function(t, a) {
                var n = t.pstyle(a).value;
                switch(n){
                    case "rectangle":
                        return Ht;
                    case "ellipse":
                        return ya;
                    case "roundrectangle":
                    case "round-rectangle":
                        return on;
                    case "bottom-round-rectangle":
                        return pa;
                    default:
                        return;
                }
            }, "_getVertTypeForShape")
        },
        {
            key: "_getCornerRadius",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                var i = n.w, s = n.h;
                if (t.pstyle(a).value === "auto") return ft(i, s);
                var o = t.pstyle(a).pfValue, l = i / 2, u = s / 2;
                return Math.min(o, u, l);
            }, "_getCornerRadius")
        },
        {
            key: "drawEdgeArrow",
            value: /*#__PURE__*/ m$1(function(t, a, n) {
                if (t.visible()) {
                    var i = t._private.rscratch, s, o, l;
                    if (n === "source" ? (s = i.arrowStartX, o = i.arrowStartY, l = i.srcArrowAngle) : (s = i.arrowEndX, o = i.arrowEndY, l = i.tgtArrowAngle), !(isNaN(s) || s == null || isNaN(o) || o == null || isNaN(l) || l == null)) {
                        var u = t.pstyle(n + "-arrow-shape").value;
                        if (u !== "none") {
                            var f = t.pstyle(n + "-arrow-color").value, c = t.pstyle("opacity").value, d = t.pstyle("line-opacity").value, g = c * d, h = t.pstyle("width").pfValue, m = t.pstyle("arrow-scale").value, p = /*#__PURE__*/ this.r.getArrowWidth(h, m), y = this.instanceCount, b1 = /*#__PURE__*/ this.transformBuffer.getMatrixView(y);
                            Ul(b1), mn(b1, b1, [
                                s,
                                o
                            ]), $s(b1, b1, [
                                p,
                                p
                            ]), Kl(b1, b1, l), this.vertTypeBuffer.getView(y)[0] = Ss;
                            var w = /*#__PURE__*/ this.indexBuffer.getView(y);
                            Gt(a, w);
                            var x = /*#__PURE__*/ this.colorBuffer.getView(y);
                            Et(f, g, x), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                        }
                    }
                }
            }, "drawEdgeArrow")
        },
        {
            key: "drawEdgeLine",
            value: /*#__PURE__*/ m$1(function(t, a) {
                if (t.visible()) {
                    var n = /*#__PURE__*/ this._getEdgePoints(t);
                    if (n) {
                        var i = t.pstyle("opacity").value, s = t.pstyle("line-opacity").value, o = t.pstyle("width").pfValue, l = t.pstyle("line-color").value, u = i * s;
                        if (n.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), n.length == 4) {
                            var f = this.instanceCount;
                            this.vertTypeBuffer.getView(f)[0] = Xl;
                            var c = /*#__PURE__*/ this.indexBuffer.getView(f);
                            Gt(a, c);
                            var d = /*#__PURE__*/ this.colorBuffer.getView(f);
                            Et(l, u, d);
                            var g = /*#__PURE__*/ this.lineWidthBuffer.getView(f);
                            g[0] = o;
                            var h = /*#__PURE__*/ this.pointAPointBBuffer.getView(f);
                            h[0] = n[0], h[1] = n[1], h[2] = n[2], h[3] = n[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                        } else for(var m = 0; m < n.length - 2; m += 2){
                            var p = this.instanceCount;
                            this.vertTypeBuffer.getView(p)[0] = Yl;
                            var y = /*#__PURE__*/ this.indexBuffer.getView(p);
                            Gt(a, y);
                            var b1 = /*#__PURE__*/ this.colorBuffer.getView(p);
                            Et(l, u, b1);
                            var w = /*#__PURE__*/ this.lineWidthBuffer.getView(p);
                            w[0] = o;
                            var x = n[m - 2], C = n[m - 1], T = n[m], E = n[m + 1], S = n[m + 2], D = n[m + 3], B = n[m + 4], P = n[m + 5];
                            m == 0 && (x = 2 * T - S + .001, C = 2 * E - D + .001), m == n.length - 4 && (B = 2 * S - T + .001, P = 2 * D - E + .001);
                            var A = /*#__PURE__*/ this.pointAPointBBuffer.getView(p);
                            A[0] = x, A[1] = C, A[2] = T, A[3] = E;
                            var R = /*#__PURE__*/ this.pointCPointDBuffer.getView(p);
                            R[0] = S, R[1] = D, R[2] = B, R[3] = P, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                        }
                    }
                }
            }, "drawEdgeLine")
        },
        {
            key: "_isValidEdge",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = t._private.rscratch;
                return !(a.badLine || a.allpts == null || isNaN(a.allpts[0]));
            }, "_isValidEdge")
        },
        {
            key: "_getEdgePoints",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = t._private.rscratch;
                if (this._isValidEdge(t)) {
                    var n = a.allpts;
                    if (n.length == 4) return n;
                    var i = /*#__PURE__*/ this._getNumSegments(t);
                    return this._getCurveSegmentPoints(n, i);
                }
            }, "_getEdgePoints")
        },
        {
            key: "_getNumSegments",
            value: /*#__PURE__*/ m$1(function(t) {
                var a = 15;
                return Math.min(/*#__PURE__*/ Math.max(a, 5), this.maxInstances);
            }, "_getNumSegments")
        },
        {
            key: "_getCurveSegmentPoints",
            value: /*#__PURE__*/ m$1(function(t, a) {
                if (t.length == 4) return t;
                for(var n = /*#__PURE__*/ Array((a + 1) * 2), i = 0; i <= a; i++)if (i == 0) n[0] = t[0], n[1] = t[1];
                else if (i == a) n[i * 2] = t[t.length - 2], n[i * 2 + 1] = t[t.length - 1];
                else {
                    var s = i / a;
                    this._setCurvePoint(t, s, n, i * 2);
                }
                return n;
            }, "_getCurveSegmentPoints")
        },
        {
            key: "_setCurvePoint",
            value: /*#__PURE__*/ m$1(function(t, a, n, i) {
                if (t.length <= 2) n[i] = t[0], n[i + 1] = t[1];
                else {
                    for(var s = /*#__PURE__*/ Array(t.length - 2), o = 0; o < s.length; o += 2){
                        var l = (1 - a) * t[o] + a * t[o + 2], u = (1 - a) * t[o + 1] + a * t[o + 3];
                        s[o] = l, s[o + 1] = u;
                    }
                    return this._setCurvePoint(s, a, n, i);
                }
            }, "_setCurvePoint")
        },
        {
            key: "endBatch",
            value: /*#__PURE__*/ m$1(function() {
                var t = this.gl, a = this.vao, n = this.vertexCount, i = this.instanceCount;
                if (i !== 0) {
                    var s = this.renderTarget.picking ? this.pickingProgram : this.program;
                    t.useProgram(s), t.bindVertexArray(a);
                    var o = /*#__PURE__*/ Dr(this.buffers), l;
                    try {
                        for(o.s(); !(l = /*#__PURE__*/ o.n()).done;){
                            var u = l.value;
                            u.bufferSubData(i);
                        }
                    } catch (h) {
                        o.e(h);
                    } finally{
                        o.f();
                    }
                    for(var f = /*#__PURE__*/ this.batchManager.getAtlases(), c = 0; c < f.length; c++)f[c].bufferIfNeeded(t);
                    for(var d = 0; d < f.length; d++)t.activeTexture(t.TEXTURE0 + d), t.bindTexture(t.TEXTURE_2D, f[d].texture), t.uniform1i(s.uTextures[d], d);
                    t.uniform1f(s.uZoom, /*#__PURE__*/ $y(this.r)), t.uniformMatrix3fv(s.uPanZoomMatrix, false, this.panZoomMatrix), t.uniform1i(s.uAtlasSize, /*#__PURE__*/ this.batchManager.getAtlasSize());
                    var g = /*#__PURE__*/ Et(this.bgColor, 1);
                    t.uniform4fv(s.uBGColor, g), t.drawArraysInstanced(t.TRIANGLES, 0, n, i), t.bindVertexArray(null), t.bindTexture(t.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({
                        count: i,
                        atlasCount: f.length
                    }), this.startBatch();
                }
            }, "endBatch")
        },
        {
            key: "getDebugInfo",
            value: /*#__PURE__*/ m$1(function() {
                var t = /*#__PURE__*/ this.atlasManager.getDebugInfo(), a = /*#__PURE__*/ t.reduce(function(s, o) {
                    return s + o.atlasCount;
                }, 0), n = this.batchDebugInfo, i = /*#__PURE__*/ n.reduce(function(s, o) {
                    return s + o.count;
                }, 0);
                return {
                    atlasInfo: t,
                    totalAtlases: a,
                    wrappedCount: this.wrappedCount,
                    simpleCount: this.simpleCount,
                    batchCount: n.length,
                    batchInfo: n,
                    totalInstances: i
                };
            }, "getDebugInfo")
        }
    ]);
}(), Lf = {};
Lf.initWebgl = function(r, e) {
    var t = this, a = t.data.contexts[t.WEBGL];
    r.bgColor = /*#__PURE__*/ dm(t), r.webglTexSize = /*#__PURE__*/ Math.min(r.webglTexSize, /*#__PURE__*/ a.getParameter(a.MAX_TEXTURE_SIZE)), r.webglTexRows = /*#__PURE__*/ Math.min(r.webglTexRows, 54), r.webglTexRowsNodes = /*#__PURE__*/ Math.min(r.webglTexRowsNodes, 54), r.webglBatchSize = /*#__PURE__*/ Math.min(r.webglBatchSize, 16384), r.webglTexPerBatch = /*#__PURE__*/ Math.min(r.webglTexPerBatch, /*#__PURE__*/ a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), t.webglDebug = r.webglDebug, t.webglDebugShowAtlases = r.webglDebugShowAtlases, t.pickingFrameBuffer = /*#__PURE__*/ em(a), t.pickingFrameBuffer.needsDraw = true, t.drawing = new cm(t, a, r);
    var n = /*#__PURE__*/ m$1(function(c) {
        return function(d) {
            return t.getTextAngle(d, c);
        };
    }, "getLabelRotation"), i = /*#__PURE__*/ m$1(function(c) {
        return function(d) {
            var g = /*#__PURE__*/ d.pstyle(c);
            return g && g.value;
        };
    }, "isLabelVisible"), s = /*#__PURE__*/ m$1(function(c) {
        return function(d) {
            return d.pstyle(/*#__PURE__*/ "".concat(c, "-opacity")).value > 0;
        };
    }, "isLayerVisible"), o = /*#__PURE__*/ m$1(function(c) {
        var d = c.pstyle("text-events").strValue === "yes";
        return d ? Rn.USE_BB : Rn.IGNORE;
    }, "getTexPickingMode"), l = /*#__PURE__*/ m$1(function(c) {
        var d = /*#__PURE__*/ c.position(), g = d.x, h = d.y, m = /*#__PURE__*/ c.outerWidth(), p = /*#__PURE__*/ c.outerHeight();
        return {
            w: m,
            h: p,
            x1: g - m / 2,
            y1: h - p / 2
        };
    }, "getBBForSimpleShape");
    t.drawing.addAtlasCollection("node", {
        texRows: r.webglTexRowsNodes
    }), t.drawing.addAtlasCollection("label", {
        texRows: r.webglTexRows
    }), t.drawing.addTextureAtlasRenderType("node-body", {
        collection: "node",
        getKey: e.getStyleKey,
        getBoundingBox: e.getElementBox,
        drawElement: e.drawElement
    }), t.drawing.addSimpleShapeRenderType("node-body", {
        getBoundingBox: l,
        isSimple: Ky,
        shapeProps: {
            shape: "shape",
            color: "background-color",
            opacity: "background-opacity",
            radius: "corner-radius",
            border: true
        }
    }), t.drawing.addSimpleShapeRenderType("node-overlay", {
        getBoundingBox: l,
        isVisible: /*#__PURE__*/ s("overlay"),
        shapeProps: {
            shape: "overlay-shape",
            color: "overlay-color",
            opacity: "overlay-opacity",
            padding: "overlay-padding",
            radius: "overlay-corner-radius"
        }
    }), t.drawing.addSimpleShapeRenderType("node-underlay", {
        getBoundingBox: l,
        isVisible: /*#__PURE__*/ s("underlay"),
        shapeProps: {
            shape: "underlay-shape",
            color: "underlay-color",
            opacity: "underlay-opacity",
            padding: "underlay-padding",
            radius: "underlay-corner-radius"
        }
    }), t.drawing.addTextureAtlasRenderType("label", {
        collection: "label",
        getTexPickingMode: o,
        getKey: /*#__PURE__*/ ks(e.getLabelKey, null),
        getBoundingBox: /*#__PURE__*/ Ds(e.getLabelBox, null),
        drawClipped: true,
        drawElement: e.drawLabel,
        getRotation: /*#__PURE__*/ n(null),
        getRotationPoint: e.getLabelRotationPoint,
        getRotationOffset: e.getLabelRotationOffset,
        isVisible: /*#__PURE__*/ i("label")
    }), t.drawing.addTextureAtlasRenderType("edge-source-label", {
        collection: "label",
        getTexPickingMode: o,
        getKey: /*#__PURE__*/ ks(e.getSourceLabelKey, "source"),
        getBoundingBox: /*#__PURE__*/ Ds(e.getSourceLabelBox, "source"),
        drawClipped: true,
        drawElement: e.drawSourceLabel,
        getRotation: /*#__PURE__*/ n("source"),
        getRotationPoint: e.getSourceLabelRotationPoint,
        getRotationOffset: e.getSourceLabelRotationOffset,
        isVisible: /*#__PURE__*/ i("source-label")
    }), t.drawing.addTextureAtlasRenderType("edge-target-label", {
        collection: "label",
        getTexPickingMode: o,
        getKey: /*#__PURE__*/ ks(e.getTargetLabelKey, "target"),
        getBoundingBox: /*#__PURE__*/ Ds(e.getTargetLabelBox, "target"),
        drawClipped: true,
        drawElement: e.drawTargetLabel,
        getRotation: /*#__PURE__*/ n("target"),
        getRotationPoint: e.getTargetLabelRotationPoint,
        getRotationOffset: e.getTargetLabelRotationOffset,
        isVisible: /*#__PURE__*/ i("target-label")
    });
    var u = /*#__PURE__*/ Va(function() {
        console.log("garbage collect flag set"), t.data.gc = true;
    }, 1e4);
    t.onUpdateEleCalcs(function(f, c) {
        var d = false;
        c && c.length > 0 && (d |= /*#__PURE__*/ t.drawing.invalidate(c)), d && u();
    }), hm(t);
};
function dm(r) {
    var e = /*#__PURE__*/ r.cy.container(), t = e && e.style && e.style.backgroundColor || "white";
    return sv(t);
}
m$1(dm, "getBGColor");
function If(r, e) {
    var t = r._private.rscratch;
    return Sr(t, "labelWrapCachedLines", e) || [];
}
m$1(If, "getLabelLines");
var ks = /*#__PURE__*/ m$1(function(e, t) {
    return function(a) {
        var n = /*#__PURE__*/ e(a), i = /*#__PURE__*/ If(a, t);
        return i.length > 1 ? i.map(function(s, o) {
            return "".concat(n, "_").concat(o);
        }) : n;
    };
}, "getStyleKeysForLabel"), Ds = /*#__PURE__*/ m$1(function(e, t) {
    return function(a, n) {
        var i = /*#__PURE__*/ e(a);
        if (typeof n == "string") {
            var s = /*#__PURE__*/ n.indexOf("_");
            if (s > 0) {
                var o = /*#__PURE__*/ Number(/*#__PURE__*/ n.substring(s + 1)), l = /*#__PURE__*/ If(a, t), u = i.h / l.length, f = u * o, c = i.y1 + f;
                return {
                    x1: i.x1,
                    w: i.w,
                    y1: c,
                    h: u,
                    yOffset: f
                };
            }
        }
        return i;
    };
}, "getBoundingBoxForLabel");
function hm(r) {
    {
        var e = r.render;
        r.render = function(i) {
            i = i || {};
            var s = r.cy;
            r.webgl && (s.zoom() > kf ? (gm(r), e.call(r, i)) : (pm(r), Nf(r, i, Ca.SCREEN)));
        };
    }
    {
        var t = r.matchCanvasSize;
        r.matchCanvasSize = function(i) {
            t.call(r, i), r.pickingFrameBuffer.setFramebufferAttachmentSizes(r.canvasWidth, r.canvasHeight), r.pickingFrameBuffer.needsDraw = true;
        };
    }
    r.findNearestElements = function(i, s, o, l) {
        return Em(r, i, s);
    };
    {
        var a = r.invalidateCachedZSortedEles;
        r.invalidateCachedZSortedEles = function() {
            a.call(r), r.pickingFrameBuffer.needsDraw = true;
        };
    }
    {
        var n = r.notify;
        r.notify = function(i, s) {
            n.call(r, i, s), i === "viewport" || i === "bounds" ? r.pickingFrameBuffer.needsDraw = true : i === "background" && r.drawing.invalidate(s, {
                type: "node-body"
            });
        };
    }
}
m$1(hm, "overrideCanvasRendererFunctions");
function gm(r) {
    var e = r.data.contexts[r.WEBGL];
    e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
}
m$1(gm, "clearWebgl");
function pm(r) {
    var e = /*#__PURE__*/ m$1(function(a) {
        a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.canvasWidth, r.canvasHeight), a.restore();
    }, "clear");
    e(r.data.contexts[r.NODE]), e(r.data.contexts[r.DRAG]);
}
m$1(pm, "clearCanvas");
function ym(r) {
    var e = r.canvasWidth, t = r.canvasHeight, a = /*#__PURE__*/ wo(r), n = a.pan, i = a.zoom, s = /*#__PURE__*/ Cs();
    mn(s, s, [
        n.x,
        n.y
    ]), $s(s, s, [
        i,
        i
    ]);
    var o = /*#__PURE__*/ Cs();
    tm(o, e, t);
    var l = /*#__PURE__*/ Cs();
    return rm(l, o, s), l;
}
m$1(ym, "createPanZoomMatrix");
function Of(r, e) {
    var t = r.canvasWidth, a = r.canvasHeight, n = /*#__PURE__*/ wo(r), i = n.pan, s = n.zoom;
    e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t, a), e.translate(i.x, i.y), e.scale(s, s);
}
m$1(Of, "setContextTransform");
function mm(r, e) {
    r.drawSelectionRectangle(e, function(t) {
        return Of(r, t);
    });
}
m$1(mm, "drawSelectionRectangle");
function bm(r) {
    var e = r.data.contexts[r.NODE];
    e.save(), Of(r, e), e.strokeStyle = "rgba(0, 0, 0, 0.3)", e.beginPath(), e.moveTo(-1e3, 0), e.lineTo(1e3, 0), e.stroke(), e.beginPath(), e.moveTo(0, -1e3), e.lineTo(0, 1e3), e.stroke(), e.restore();
}
m$1(bm, "drawAxes");
function wm(r) {
    var e = /*#__PURE__*/ m$1(function(n, i, s) {
        for(var o = /*#__PURE__*/ n.atlasManager.getAtlasCollection(i), l = r.data.contexts[r.NODE], u = o.atlases, f = 0; f < u.length; f++){
            var c = u[f], d = c.canvas;
            if (d) {
                var g = d.width, h = d.height, m = g * f, p = d.height * s, y = .4;
                l.save(), l.scale(y, y), l.drawImage(d, m, p), l.strokeStyle = "black", l.rect(m, p, g, h), l.stroke(), l.restore();
            }
        }
    }, "draw"), t = 0;
    e(r.drawing, "node", t++), e(r.drawing, "label", t++);
}
m$1(wm, "drawAtlases");
function xm(r, e, t, a, n) {
    var i, s, o, l, u = /*#__PURE__*/ wo(r), f = u.pan, c = u.zoom;
    {
        var d = /*#__PURE__*/ Uy(r, f, c, e, t), g = /*#__PURE__*/ je(d, 2), h = g[0], m = g[1], p = 6;
        i = h - p / 2, s = m - p / 2, o = p, l = p;
    }
    if (o === 0 || l === 0) return [];
    var y = r.data.contexts[r.WEBGL];
    y.bindFramebuffer(y.FRAMEBUFFER, r.pickingFrameBuffer), r.pickingFrameBuffer.needsDraw && (y.viewport(0, 0, y.canvas.width, y.canvas.height), Nf(r, null, Ca.PICKING), r.pickingFrameBuffer.needsDraw = false);
    var b1 = o * l, w = new Uint8Array(b1 * 4);
    y.readPixels(i, s, o, l, y.RGBA, y.UNSIGNED_BYTE, w), y.bindFramebuffer(y.FRAMEBUFFER, null);
    for(var x = new Set, C = 0; C < b1; C++){
        var T = /*#__PURE__*/ w.slice(C * 4, C * 4 + 4), E = Yy(T) - 1;
        E >= 0 && x.add(E);
    }
    return x;
}
m$1(xm, "getPickingIndexes");
function Em(r, e, t) {
    var a = /*#__PURE__*/ xm(r, e, t), n = /*#__PURE__*/ r.getCachedZSortedEles(), i, s, o = /*#__PURE__*/ Dr(a), l;
    try {
        for(o.s(); !(l = /*#__PURE__*/ o.n()).done;){
            var u = l.value, f = n[u];
            if (!i && f.isNode() && (i = f), !s && f.isEdge() && (s = f), i && s) break;
        }
    } catch (c) {
        o.e(c);
    } finally{
        o.f();
    }
    return [
        i,
        s
    ].filter(Boolean);
}
m$1(Em, "findNearestElementsWebgl");
function Bs(r, e, t) {
    var a = r.drawing;
    e += 1, t.isNode() ? (a.drawNode(t, e, "node-underlay"), a.drawNode(t, e, "node-body"), a.drawTexture(t, e, "label"), a.drawNode(t, e, "node-overlay")) : (a.drawEdgeLine(t, e), a.drawEdgeArrow(t, e, "source"), a.drawEdgeArrow(t, e, "target"), a.drawTexture(t, e, "label"), a.drawTexture(t, e, "edge-source-label"), a.drawTexture(t, e, "edge-target-label"));
}
m$1(Bs, "drawEle");
function Nf(r, e, t) {
    var a;
    r.webglDebug && (a = /*#__PURE__*/ performance.now());
    var n = r.drawing, i = 0;
    if (t.screen && r.data.canvasNeedsRedraw[r.SELECT_BOX] && mm(r, e), r.data.canvasNeedsRedraw[r.NODE] || t.picking) {
        var s = r.data.contexts[r.WEBGL];
        t.screen ? (s.clearColor(0, 0, 0, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA)) : s.disable(s.BLEND), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.viewport(0, 0, s.canvas.width, s.canvas.height);
        var o = /*#__PURE__*/ ym(r), l = /*#__PURE__*/ r.getCachedZSortedEles();
        if (i = l.length, n.startFrame(o, t), t.screen) {
            for(var u = 0; u < l.nondrag.length; u++)Bs(r, u, l.nondrag[u]);
            for(var f = 0; f < l.drag.length; f++)Bs(r, f, l.drag[f]);
        } else if (t.picking) for(var c = 0; c < l.length; c++)Bs(r, c, l[c]);
        n.endFrame(), t.screen && r.webglDebugShowAtlases && (bm(r), wm(r)), r.data.canvasNeedsRedraw[r.NODE] = false, r.data.canvasNeedsRedraw[r.DRAG] = false;
    }
    if (r.webglDebug) {
        var d = /*#__PURE__*/ performance.now(), g = false, h = /*#__PURE__*/ Math.ceil(d - a), m = /*#__PURE__*/ n.getDebugInfo(), p = /*#__PURE__*/ [
            /*#__PURE__*/ "".concat(i, " elements"),
            /*#__PURE__*/ "".concat(m.totalInstances, " instances"),
            /*#__PURE__*/ "".concat(m.batchCount, " batches"),
            /*#__PURE__*/ "".concat(m.totalAtlases, " atlases"),
            /*#__PURE__*/ "".concat(m.wrappedCount, " wrapped textures"),
            /*#__PURE__*/ "".concat(m.simpleCount, " simple shapes")
        ].join(", ");
        if (g) console.log(/*#__PURE__*/ "WebGL (".concat(t.name, ") - time ").concat(h, "ms, ").concat(p));
        else {
            console.log(/*#__PURE__*/ "WebGL (".concat(t.name, ") - frame time ").concat(h, "ms")), console.log("Totals:"), console.log(/*#__PURE__*/ "  ".concat(p)), console.log("Texture Atlases Used:");
            var y = m.atlasInfo, b1 = /*#__PURE__*/ Dr(y), w;
            try {
                for(b1.s(); !(w = /*#__PURE__*/ b1.n()).done;){
                    var x = w.value;
                    console.log(/*#__PURE__*/ "  ".concat(x.type, ": ").concat(x.keyCount, " keys, ").concat(x.atlasCount, " atlases"));
                }
            } catch (C) {
                b1.e(C);
            } finally{
                b1.f();
            }
            console.log("");
        }
    }
    r.data.gc && (console.log("Garbage Collect!"), r.data.gc = false, n.gc());
}
m$1(Nf, "renderWebgl");
var bt = {};
bt.drawPolygonPath = function(r, e, t, a, n, i) {
    var s = a / 2, o = n / 2;
    r.beginPath && r.beginPath(), r.moveTo(e + s * i[0], t + o * i[1]);
    for(var l = 1; l < i.length / 2; l++)r.lineTo(e + s * i[l * 2], t + o * i[l * 2 + 1]);
    r.closePath();
};
bt.drawRoundPolygonPath = function(r, e, t, a, n, i, s) {
    s.forEach(function(o) {
        return yf(r, o);
    }), r.closePath();
};
bt.drawRoundRectanglePath = function(r, e, t, a, n, i) {
    var s = a / 2, o = n / 2, l = i === "auto" ? ft(a, n) : Math.min(i, o, s);
    r.beginPath && r.beginPath(), r.moveTo(e, t - o), r.arcTo(e + s, t - o, e + s, t, l), r.arcTo(e + s, t + o, e, t + o, l), r.arcTo(e - s, t + o, e - s, t, l), r.arcTo(e - s, t - o, e, t - o, l), r.lineTo(e, t - o), r.closePath();
};
bt.drawBottomRoundRectanglePath = function(r, e, t, a, n, i) {
    var s = a / 2, o = n / 2, l = i === "auto" ? ft(a, n) : i;
    r.beginPath && r.beginPath(), r.moveTo(e, t - o), r.lineTo(e + s, t - o), r.lineTo(e + s, t), r.arcTo(e + s, t + o, e, t + o, l), r.arcTo(e - s, t + o, e - s, t, l), r.lineTo(e - s, t - o), r.lineTo(e, t - o), r.closePath();
};
bt.drawCutRectanglePath = function(r, e, t, a, n, i, s) {
    var o = a / 2, l = n / 2, u = s === "auto" ? io() : s;
    r.beginPath && r.beginPath(), r.moveTo(e - o + u, t - l), r.lineTo(e + o - u, t - l), r.lineTo(e + o, t - l + u), r.lineTo(e + o, t + l - u), r.lineTo(e + o - u, t + l), r.lineTo(e - o + u, t + l), r.lineTo(e - o, t + l - u), r.lineTo(e - o, t - l + u), r.closePath();
};
bt.drawBarrelPath = function(r, e, t, a, n) {
    var i = a / 2, s = n / 2, o = e - i, l = e + i, u = t - s, f = t + s, c = /*#__PURE__*/ Rs(a, n), d = c.widthOffset, g = c.heightOffset, h = c.ctrlPtOffsetPct * d;
    r.beginPath && r.beginPath(), r.moveTo(o, u + g), r.lineTo(o, f - g), r.quadraticCurveTo(o + h, f, o + d, f), r.lineTo(l - d, f), r.quadraticCurveTo(l - h, f, l, f - g), r.lineTo(l, u + g), r.quadraticCurveTo(l - h, u, l - d, u), r.lineTo(o + d, u), r.quadraticCurveTo(o + h, u, o, u + g), r.closePath();
};
var Zl = /*#__PURE__*/ Math.sin(0), Ql = /*#__PURE__*/ Math.cos(0), Us = {}, Ks = {}, zf = Math.PI / 40;
for(Ct = 0 * Math.PI; Ct < 2 * Math.PI; Ct += zf)Us[Ct] = /*#__PURE__*/ Math.sin(Ct), Ks[Ct] = /*#__PURE__*/ Math.cos(Ct);
var Ct;
bt.drawEllipsePath = function(r, e, t, a, n) {
    if (r.beginPath && r.beginPath(), r.ellipse) r.ellipse(e, t, a / 2, n / 2, 0, 0, 2 * Math.PI);
    else for(var i, s, o = a / 2, l = n / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += zf)i = e - o * Us[u] * Zl + o * Ks[u] * Ql, s = t + l * Ks[u] * Zl + l * Us[u] * Ql, u === 0 ? r.moveTo(i, s) : r.lineTo(i, s);
    r.closePath();
};
var $a = {};
$a.createBuffer = function(r, e) {
    var t = /*#__PURE__*/ document.createElement("canvas");
    return t.width = r, t.height = e, [
        t,
        /*#__PURE__*/ t.getContext("2d")
    ];
};
$a.bufferCanvasImage = function(r) {
    var e = this.cy, t = /*#__PURE__*/ e.mutableElements(), a = /*#__PURE__*/ t.boundingBox(), n = /*#__PURE__*/ this.findContainerClientCoords(), i = r.full ? Math.ceil(a.w) : n[2], s = r.full ? Math.ceil(a.h) : n[3], o = ne(r.maxWidth) || ne(r.maxHeight), l = /*#__PURE__*/ this.getPixelRatio(), u = 1;
    if (r.scale !== void 0) i *= r.scale, s *= r.scale, u = r.scale;
    else if (o) {
        var f = 1 / 0, c = 1 / 0;
        ne(r.maxWidth) && (f = u * r.maxWidth / i), ne(r.maxHeight) && (c = u * r.maxHeight / s), u = /*#__PURE__*/ Math.min(f, c), i *= u, s *= u;
    }
    o || (i *= l, s *= l, u *= l);
    var d = /*#__PURE__*/ document.createElement("canvas");
    d.width = i, d.height = s, d.style.width = i + "px", d.style.height = s + "px";
    var g = /*#__PURE__*/ d.getContext("2d");
    if (i > 0 && s > 0) {
        g.clearRect(0, 0, i, s), g.globalCompositeOperation = "source-over";
        var h = /*#__PURE__*/ this.getCachedZSortedEles();
        if (r.full) g.translate(-a.x1 * u, -a.y1 * u), g.scale(u, u), this.drawElements(g, h), g.scale(1 / u, 1 / u), g.translate(a.x1 * u, a.y1 * u);
        else {
            var m = /*#__PURE__*/ e.pan(), p = {
                x: m.x * u,
                y: m.y * u
            };
            u *= /*#__PURE__*/ e.zoom(), g.translate(p.x, p.y), g.scale(u, u), this.drawElements(g, h), g.scale(1 / u, 1 / u), g.translate(-p.x, -p.y);
        }
        r.bg && (g.globalCompositeOperation = "destination-over", g.fillStyle = r.bg, g.rect(0, 0, i, s), g.fill());
    }
    return d;
};
function Cm(r, e) {
    for(var t = /*#__PURE__*/ atob(r), a = new ArrayBuffer(t.length), n = new Uint8Array(a), i = 0; i < t.length; i++)n[i] = /*#__PURE__*/ t.charCodeAt(i);
    return new Blob([
        a
    ], {
        type: e
    });
}
m$1(Cm, "b64ToBlob");
function Jl(r) {
    var e = /*#__PURE__*/ r.indexOf(",");
    return r.substr(e + 1);
}
m$1(Jl, "b64UriToB64");
function Ff(r, e, t) {
    var a = /*#__PURE__*/ m$1(function() {
        return e.toDataURL(t, r.quality);
    }, "getB64Uri");
    switch(r.output){
        case "blob-promise":
            return new aa(function(n, i) {
                try {
                    e.toBlob(function(s) {
                        s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
                    }, t, r.quality);
                } catch (s) {
                    i(s);
                }
            });
        case "blob":
            return Cm(/*#__PURE__*/ Jl(/*#__PURE__*/ a()), t);
        case "base64":
            return Jl(/*#__PURE__*/ a());
        case "base64uri":
        default:
            return a();
    }
}
m$1(Ff, "output");
$a.png = function(r) {
    return Ff(r, /*#__PURE__*/ this.bufferCanvasImage(r), "image/png");
};
$a.jpg = function(r) {
    return Ff(r, /*#__PURE__*/ this.bufferCanvasImage(r), "image/jpeg");
};
var Vf = {};
Vf.nodeShapeImpl = function(r, e, t, a, n, i, s, o) {
    switch(r){
        case "ellipse":
            return this.drawEllipsePath(e, t, a, n, i);
        case "polygon":
            return this.drawPolygonPath(e, t, a, n, i, s);
        case "round-polygon":
            return this.drawRoundPolygonPath(e, t, a, n, i, s, o);
        case "roundrectangle":
        case "round-rectangle":
            return this.drawRoundRectanglePath(e, t, a, n, i, o);
        case "cutrectangle":
        case "cut-rectangle":
            return this.drawCutRectanglePath(e, t, a, n, i, s, o);
        case "bottomroundrectangle":
        case "bottom-round-rectangle":
            return this.drawBottomRoundRectanglePath(e, t, a, n, i, o);
        case "barrel":
            return this.drawBarrelPath(e, t, a, n, i);
    }
};
var Tm = qf, De = qf.prototype;
De.CANVAS_LAYERS = 3;
De.SELECT_BOX = 0;
De.DRAG = 1;
De.NODE = 2;
De.WEBGL = 3;
De.CANVAS_TYPES = [
    "2d",
    "2d",
    "2d",
    "webgl2"
];
De.BUFFER_COUNT = 3;
De.TEXTURE_BUFFER = 0;
De.MOTIONBLUR_BUFFER_NODE = 1;
De.MOTIONBLUR_BUFFER_DRAG = 2;
function qf(r) {
    var e = this, t = /*#__PURE__*/ e.cy.window(), a = t.document;
    r.webgl && (De.CANVAS_LAYERS = e.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), e.data = {
        canvases: new Array(De.CANVAS_LAYERS),
        contexts: new Array(De.CANVAS_LAYERS),
        canvasNeedsRedraw: new Array(De.CANVAS_LAYERS),
        bufferCanvases: new Array(De.BUFFER_COUNT),
        bufferContexts: new Array(De.CANVAS_LAYERS)
    };
    var n = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
    e.data.canvasContainer = /*#__PURE__*/ a.createElement("div");
    var s = e.data.canvasContainer.style;
    e.data.canvasContainer.style[n] = i, s.position = "relative", s.zIndex = "0", s.overflow = "hidden";
    var o = /*#__PURE__*/ r.cy.container();
    o.appendChild(e.data.canvasContainer), o.style[n] = i;
    var l = {
        "-webkit-user-select": "none",
        "-moz-user-select": "-moz-none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        "outline-style": "none"
    };
    mc() && (l["-ms-touch-action"] = "none", l["touch-action"] = "none");
    for(var u = 0; u < De.CANVAS_LAYERS; u++){
        var f = e.data.canvases[u] = /*#__PURE__*/ a.createElement("canvas"), c = De.CANVAS_TYPES[u];
        e.data.contexts[u] = /*#__PURE__*/ f.getContext(c), e.data.contexts[u] || Ue("Could not create canvas of type " + c), Object.keys(l).forEach(function(j) {
            f.style[j] = l[j];
        }), f.style.position = "absolute", f.setAttribute("data-id", "layer" + u), f.style.zIndex = /*#__PURE__*/ String(De.CANVAS_LAYERS - u), e.data.canvasContainer.appendChild(f), e.data.canvasNeedsRedraw[u] = false;
    }
    e.data.topCanvas = e.data.canvases[0], e.data.canvases[De.NODE].setAttribute("data-id", "layer" + De.NODE + "-node"), e.data.canvases[De.SELECT_BOX].setAttribute("data-id", "layer" + De.SELECT_BOX + "-selectbox"), e.data.canvases[De.DRAG].setAttribute("data-id", "layer" + De.DRAG + "-drag"), e.data.canvases[De.WEBGL] && e.data.canvases[De.WEBGL].setAttribute("data-id", "layer" + De.WEBGL + "-webgl");
    for(var u = 0; u < De.BUFFER_COUNT; u++)e.data.bufferCanvases[u] = /*#__PURE__*/ a.createElement("canvas"), e.data.bufferContexts[u] = /*#__PURE__*/ e.data.bufferCanvases[u].getContext("2d"), e.data.bufferCanvases[u].style.position = "absolute", e.data.bufferCanvases[u].setAttribute("data-id", "buffer" + u), e.data.bufferCanvases[u].style.zIndex = /*#__PURE__*/ String(-u - 1), e.data.bufferCanvases[u].style.visibility = "hidden";
    e.pathsEnabled = true;
    var d = /*#__PURE__*/ xr(), g = /*#__PURE__*/ m$1(function(F) {
        return {
            x: (F.x1 + F.x2) / 2,
            y: (F.y1 + F.y2) / 2
        };
    }, "getBoxCenter"), h = /*#__PURE__*/ m$1(function(F) {
        return {
            x: -F.w / 2,
            y: -F.h / 2
        };
    }, "getCenterOffset"), m = /*#__PURE__*/ m$1(function(F) {
        var _ = F[0]._private, W = _.oldBackgroundTimestamp === _.backgroundTimestamp;
        return !W;
    }, "backgroundTimestampHasChanged"), p = /*#__PURE__*/ m$1(function(F) {
        return F[0]._private.nodeKey;
    }, "getStyleKey"), y = /*#__PURE__*/ m$1(function(F) {
        return F[0]._private.labelStyleKey;
    }, "getLabelKey"), b1 = /*#__PURE__*/ m$1(function(F) {
        return F[0]._private.sourceLabelStyleKey;
    }, "getSourceLabelKey"), w = /*#__PURE__*/ m$1(function(F) {
        return F[0]._private.targetLabelStyleKey;
    }, "getTargetLabelKey"), x = /*#__PURE__*/ m$1(function(F, _, W, Z, ae) {
        return e.drawElement(F, _, W, false, false, ae);
    }, "drawElement"), C = /*#__PURE__*/ m$1(function(F, _, W, Z, ae) {
        return e.drawElementText(F, _, W, Z, "main", ae);
    }, "drawLabel"), T = /*#__PURE__*/ m$1(function(F, _, W, Z, ae) {
        return e.drawElementText(F, _, W, Z, "source", ae);
    }, "drawSourceLabel"), E = /*#__PURE__*/ m$1(function(F, _, W, Z, ae) {
        return e.drawElementText(F, _, W, Z, "target", ae);
    }, "drawTargetLabel"), S = /*#__PURE__*/ m$1(function(F) {
        return F.boundingBox(), F[0]._private.bodyBounds;
    }, "getElementBox"), D = /*#__PURE__*/ m$1(function(F) {
        return F.boundingBox(), F[0]._private.labelBounds.main || d;
    }, "getLabelBox"), B = /*#__PURE__*/ m$1(function(F) {
        return F.boundingBox(), F[0]._private.labelBounds.source || d;
    }, "getSourceLabelBox"), P = /*#__PURE__*/ m$1(function(F) {
        return F.boundingBox(), F[0]._private.labelBounds.target || d;
    }, "getTargetLabelBox"), A = /*#__PURE__*/ m$1(function(F, _) {
        return _;
    }, "isLabelVisibleAtScale"), R = /*#__PURE__*/ m$1(function(F) {
        return g(/*#__PURE__*/ S(F));
    }, "getElementRotationPoint"), M = /*#__PURE__*/ m$1(function(F, _, W) {
        var Z = F ? F + "-" : "";
        return {
            x: _.x + W.pstyle(Z + "text-margin-x").pfValue,
            y: _.y + W.pstyle(Z + "text-margin-y").pfValue
        };
    }, "addTextMargin"), I = /*#__PURE__*/ m$1(function(F, _, W) {
        var Z = F[0]._private.rscratch;
        return {
            x: Z[_],
            y: Z[W]
        };
    }, "getRsPt"), O = /*#__PURE__*/ m$1(function(F) {
        return M("", /*#__PURE__*/ I(F, "labelX", "labelY"), F);
    }, "getLabelRotationPoint"), L = /*#__PURE__*/ m$1(function(F) {
        return M("source", /*#__PURE__*/ I(F, "sourceLabelX", "sourceLabelY"), F);
    }, "getSourceLabelRotationPoint"), N = /*#__PURE__*/ m$1(function(F) {
        return M("target", /*#__PURE__*/ I(F, "targetLabelX", "targetLabelY"), F);
    }, "getTargetLabelRotationPoint"), q = /*#__PURE__*/ m$1(function(F) {
        return h(/*#__PURE__*/ S(F));
    }, "getElementRotationOffset"), H = /*#__PURE__*/ m$1(function(F) {
        return h(/*#__PURE__*/ B(F));
    }, "getSourceLabelRotationOffset"), z = /*#__PURE__*/ m$1(function(F) {
        return h(/*#__PURE__*/ P(F));
    }, "getTargetLabelRotationOffset"), V = /*#__PURE__*/ m$1(function(F) {
        var _ = /*#__PURE__*/ D(F), W = /*#__PURE__*/ h(/*#__PURE__*/ D(F));
        if (F.isNode()) {
            switch(F.pstyle("text-halign").value){
                case "left":
                    W.x = -_.w - (_.leftPad || 0);
                    break;
                case "right":
                    W.x = -(_.rightPad || 0);
                    break;
            }
            switch(F.pstyle("text-valign").value){
                case "top":
                    W.y = -_.h - (_.topPad || 0);
                    break;
                case "bottom":
                    W.y = -(_.botPad || 0);
                    break;
            }
        }
        return W;
    }, "getLabelRotationOffset"), K = e.data.eleTxrCache = new wa(e, {
        getKey: p,
        doesEleInvalidateKey: m,
        drawElement: x,
        getBoundingBox: S,
        getRotationPoint: R,
        getRotationOffset: q,
        allowEdgeTxrCaching: false,
        allowParentTxrCaching: false
    }), J = e.data.lblTxrCache = new wa(e, {
        getKey: y,
        drawElement: C,
        getBoundingBox: D,
        getRotationPoint: O,
        getRotationOffset: V,
        isVisible: A
    }), X = e.data.slbTxrCache = new wa(e, {
        getKey: b1,
        drawElement: T,
        getBoundingBox: B,
        getRotationPoint: L,
        getRotationOffset: H,
        isVisible: A
    }), ee = e.data.tlbTxrCache = new wa(e, {
        getKey: w,
        drawElement: E,
        getBoundingBox: P,
        getRotationPoint: N,
        getRotationOffset: z,
        isVisible: A
    }), te = e.data.lyrTxrCache = new Df(e);
    e.onUpdateEleCalcs(/*#__PURE__*/ m$1(function(F, _) {
        K.invalidateElements(_), J.invalidateElements(_), X.invalidateElements(_), ee.invalidateElements(_), te.invalidateElements(_);
        for(var W = 0; W < _.length; W++){
            var Z = _[W]._private;
            Z.oldBackgroundTimestamp = Z.backgroundTimestamp;
        }
    }, "invalidateTextureCaches"));
    var ie = /*#__PURE__*/ m$1(function(F) {
        for(var _ = 0; _ < F.length; _++)te.enqueueElementRefinement(F[_].ele);
    }, "refineInLayers");
    K.onDequeue(ie), J.onDequeue(ie), X.onDequeue(ie), ee.onDequeue(ie), r.webgl && e.initWebgl(r, {
        getStyleKey: p,
        getLabelKey: y,
        getSourceLabelKey: b1,
        getTargetLabelKey: w,
        drawElement: x,
        drawLabel: C,
        drawSourceLabel: T,
        drawTargetLabel: E,
        getElementBox: S,
        getLabelBox: D,
        getSourceLabelBox: B,
        getTargetLabelBox: P,
        getElementRotationPoint: R,
        getElementRotationOffset: q,
        getLabelRotationPoint: O,
        getSourceLabelRotationPoint: L,
        getTargetLabelRotationPoint: N,
        getLabelRotationOffset: V,
        getSourceLabelRotationOffset: H,
        getTargetLabelRotationOffset: z
    });
}
m$1(qf, "CanvasRenderer");
De.redrawHint = function(r, e) {
    var t = this;
    switch(r){
        case "eles":
            t.data.canvasNeedsRedraw[De.NODE] = e;
            break;
        case "drag":
            t.data.canvasNeedsRedraw[De.DRAG] = e;
            break;
        case "select":
            t.data.canvasNeedsRedraw[De.SELECT_BOX] = e;
            break;
        case "gc":
            t.data.gc = true;
            break;
    }
};
var Sm = typeof Path2D < "u";
De.path2dEnabled = function(r) {
    if (r === void 0) return this.pathsEnabled;
    this.pathsEnabled = !!r;
};
De.usePaths = function() {
    return Sm && this.pathsEnabled;
};
De.setImgSmoothing = function(r, e) {
    r.imageSmoothingEnabled != null ? r.imageSmoothingEnabled = e : (r.webkitImageSmoothingEnabled = e, r.mozImageSmoothingEnabled = e, r.msImageSmoothingEnabled = e);
};
De.getImgSmoothing = function(r) {
    return r.imageSmoothingEnabled != null ? r.imageSmoothingEnabled : r.webkitImageSmoothingEnabled || r.mozImageSmoothingEnabled || r.msImageSmoothingEnabled;
};
De.makeOffscreenCanvas = function(r, e) {
    var t;
    if ((typeof OffscreenCanvas > "u" ? "undefined" : nr(OffscreenCanvas)) !== "undefined") t = new OffscreenCanvas(r, e);
    else {
        var a = /*#__PURE__*/ this.cy.window(), n = a.document;
        t = /*#__PURE__*/ n.createElement("canvas"), t.width = r, t.height = e;
    }
    return t;
};
[
    Bf,
    Wr,
    jr,
    bo,
    Ot,
    mt,
    Er,
    Lf,
    bt,
    $a,
    Vf
].forEach(function(r) {
    we(De, r);
});
var km = [
    {
        name: "null",
        impl: hf
    },
    {
        name: "base",
        impl: Tf
    },
    {
        name: "canvas",
        impl: Tm
    }
], Dm = [
    {
        type: "layout",
        extensions: Jp
    },
    {
        type: "renderer",
        extensions: km
    }
], _f = {}, Gf = {};
function Hf(r, e, t) {
    var a = t, n = /*#__PURE__*/ m$1(function(S) {
        qe("Can not register `" + e + "` for `" + r + "` since `" + S + "` already exists in the prototype and can not be overridden");
    }, "overrideErr");
    if (r === "core") {
        if (Ma.prototype[e]) return n(e);
        Ma.prototype[e] = t;
    } else if (r === "collection") {
        if (cr.prototype[e]) return n(e);
        cr.prototype[e] = t;
    } else if (r === "layout") {
        for(var i = /*#__PURE__*/ m$1(function(S) {
            this.options = S, t.call(this, S), Ie(this._private) || (this._private = {}), this._private.cy = S.cy, this._private.listeners = [], this.createEmitter();
        }, "Layout"), s = i.prototype = /*#__PURE__*/ Object.create(t.prototype), o = [], l = 0; l < o.length; l++){
            var u = o[l];
            s[u] = s[u] || function() {
                return this;
            };
        }
        s.start && !s.run ? s.run = function() {
            return this.start(), this;
        } : !s.start && s.run && (s.start = function() {
            return this.run(), this;
        });
        var f = t.prototype.stop;
        s.stop = function() {
            var E = this.options;
            if (E && E.animate) {
                var S = this.animations;
                if (S) for(var D = 0; D < S.length; D++)S[D].stop();
            }
            return f ? f.call(this) : this.emit("layoutstop"), this;
        }, s.destroy || (s.destroy = function() {
            return this;
        }), s.cy = function() {
            return this._private.cy;
        };
        var c = /*#__PURE__*/ m$1(function(S) {
            return S._private.cy;
        }, "getCy"), d = {
            addEventFields: /*#__PURE__*/ m$1(function(S, D) {
                D.layout = S, D.cy = /*#__PURE__*/ c(S), D.target = S;
            }, "addEventFields"),
            bubble: /*#__PURE__*/ m$1(function() {
                return true;
            }, "bubble"),
            parent: /*#__PURE__*/ m$1(function(S) {
                return c(S);
            }, "parent")
        };
        we(s, {
            createEmitter: /*#__PURE__*/ m$1(function() {
                return this._private.emitter = new Hn(d, this), this;
            }, "createEmitter"),
            emitter: /*#__PURE__*/ m$1(function() {
                return this._private.emitter;
            }, "emitter"),
            on: /*#__PURE__*/ m$1(function(S, D) {
                return this.emitter().on(S, D), this;
            }, "on"),
            one: /*#__PURE__*/ m$1(function(S, D) {
                return this.emitter().one(S, D), this;
            }, "one"),
            once: /*#__PURE__*/ m$1(function(S, D) {
                return this.emitter().one(S, D), this;
            }, "once"),
            removeListener: /*#__PURE__*/ m$1(function(S, D) {
                return this.emitter().removeListener(S, D), this;
            }, "removeListener"),
            removeAllListeners: /*#__PURE__*/ m$1(function() {
                return this.emitter().removeAllListeners(), this;
            }, "removeAllListeners"),
            emit: /*#__PURE__*/ m$1(function(S, D) {
                return this.emitter().emit(S, D), this;
            }, "emit")
        }), Ve.eventAliasesOn(s), a = i;
    } else if (r === "renderer" && e !== "null" && e !== "base") {
        var g = /*#__PURE__*/ Wf("renderer", "base"), h = g.prototype, m = t, p = t.prototype, y = /*#__PURE__*/ m$1(function() {
            g.apply(this, arguments), m.apply(this, arguments);
        }, "Renderer"), b1 = y.prototype;
        for(var w in h){
            var x = h[w], C = p[w] != null;
            if (C) return n(w);
            b1[w] = x;
        }
        for(var T in p)b1[T] = p[T];
        h.clientFunctions.forEach(function(E) {
            b1[E] = b1[E] || function() {
                Ue("Renderer does not implement `renderer." + E + "()` on its prototype");
            };
        }), a = y;
    } else if (r === "__proto__" || r === "constructor" || r === "prototype") return Ue(r + " is an illegal type to be registered, possibly lead to prototype pollutions");
    return ov({
        map: _f,
        keys: [
            r,
            e
        ],
        value: a
    });
}
m$1(Hf, "setExtension");
function Wf(r, e) {
    return uv({
        map: _f,
        keys: [
            r,
            e
        ]
    });
}
m$1(Wf, "getExtension");
function Bm(r, e, t, a, n) {
    return ov({
        map: Gf,
        keys: [
            r,
            e,
            t,
            a
        ],
        value: n
    });
}
m$1(Bm, "setModule");
function Pm(r, e, t, a) {
    return uv({
        map: Gf,
        keys: [
            r,
            e,
            t,
            a
        ]
    });
}
m$1(Pm, "getModule");
var Xs = /*#__PURE__*/ m$1(function() {
    if (arguments.length === 2) return Wf.apply(null, arguments);
    if (arguments.length === 3) return Hf.apply(null, arguments);
    if (arguments.length === 4) return Pm.apply(null, arguments);
    if (arguments.length === 5) return Bm.apply(null, arguments);
    Ue("Invalid extension access syntax");
}, "extension");
Ma.prototype.extension = Xs;
Dm.forEach(function(r) {
    r.extensions.forEach(function(e) {
        Hf(r.type, e.name, e.impl);
    });
});
var Mn = m$1(function() {
    if (!(this instanceof Mn)) return new Mn;
    this.length = 0;
}, "Stylesheet"), Lt = Mn.prototype;
Lt.instanceString = function() {
    return "stylesheet";
};
Lt.selector = function(r) {
    var e = this.length++;
    return this[e] = {
        selector: r,
        properties: []
    }, this;
};
Lt.css = function(r, e) {
    var t = this.length - 1;
    if (pe(r)) this[t].properties.push({
        name: r,
        value: e
    });
    else if (Ie(r)) for(var a = r, n = /*#__PURE__*/ Object.keys(a), i = 0; i < n.length; i++){
        var s = n[i], o = a[s];
        if (o != null) {
            var l = ur.properties[s] || ur.properties[Ln(s)];
            if (l != null) {
                var u = l.name, f = o;
                this[t].properties.push({
                    name: u,
                    value: f
                });
            }
        }
    }
    return this;
};
Lt.style = Lt.css;
Lt.generateStyle = function(r) {
    var e = new ur(r);
    return this.appendToStyle(e);
};
Lt.appendToStyle = function(r) {
    for(var e = 0; e < this.length; e++){
        var t = this[e], a = t.selector, n = t.properties;
        r.selector(a);
        for(var i = 0; i < n.length; i++){
            var s = n[i];
            r.css(s.name, s.value);
        }
    }
    return r;
};
var Am = "3.33.1", ra = /*#__PURE__*/ m$1(function(e) {
    if (e === void 0 && (e = {}), Ie(e)) return new Ma(e);
    if (pe(e)) return Xs.apply(Xs, arguments);
}, "cytoscape");
ra.use = function(r) {
    var e = /*#__PURE__*/ Array.prototype.slice.call(arguments, 1);
    return e.unshift(ra), r.apply(null, e), this;
};
ra.warnings = function(r) {
    return gv(r);
};
ra.version = Am;
ra.stylesheet = ra.Stylesheet = Mn;
export { ra as r };
