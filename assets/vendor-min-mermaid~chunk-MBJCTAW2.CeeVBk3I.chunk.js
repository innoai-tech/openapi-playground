import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
function Ye(t) {
    "@babel/helpers - typeof";
    return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Ye(t);
}
m$1(Ye, "_typeof");
function ur(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
m$1(ur, "_classCallCheck");
function Zi(t, e) {
    for(var r = 0; r < e.length; r++){
        var a = e[r];
        a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(t, a.key, a);
    }
}
m$1(Zi, "_defineProperties");
function lr(t, e, r) {
    return e && Zi(t.prototype, e), r && Zi(t, r), Object.defineProperty(t, "prototype", {
        writable: false
    }), t;
}
m$1(lr, "_createClass");
function po(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
    }) : t[e] = r, t;
}
m$1(po, "_defineProperty$1");
function We(t, e) {
    return bl(t) || xl(t, e) || xi(t, e) || Tl();
}
m$1(We, "_slicedToArray");
function yo(t) {
    return ml(t) || wl(t) || xi(t) || El();
}
m$1(yo, "_toConsumableArray");
function ml(t) {
    if (Array.isArray(t)) return ni(t);
}
m$1(ml, "_arrayWithoutHoles");
function bl(t) {
    if (Array.isArray(t)) return t;
}
m$1(bl, "_arrayWithHoles");
function wl(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
m$1(wl, "_iterableToArray");
function xl(t, e) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
        var a = [], n = true, i = false, s, o;
        try {
            for(r = /*#__PURE__*/ r.call(t); !(n = (s = /*#__PURE__*/ r.next()).done) && (a.push(s.value), !(e && a.length === e)); n = !0);
        } catch (l) {
            i = true, o = l;
        } finally{
            try {
                !n && r.return != null && r.return();
            } finally{
                if (i) throw o;
            }
        }
        return a;
    }
}
m$1(xl, "_iterableToArrayLimit");
function xi(t, e) {
    if (t) {
        if (typeof t == "string") return ni(t, e);
        var r = /*#__PURE__*/ Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ni(t, e);
    }
}
m$1(xi, "_unsupportedIterableToArray");
function ni(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for(var r = 0, a = new Array(e); r < e; r++)a[r] = t[r];
    return a;
}
m$1(ni, "_arrayLikeToArray");
function El() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
m$1(El, "_nonIterableSpread");
function Tl() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
m$1(Tl, "_nonIterableRest");
function xt(t, e) {
    var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (!r) {
        if (Array.isArray(t) || (r = /*#__PURE__*/ xi(t)) || e && t && typeof t.length == "number") {
            r && (t = r);
            var a = 0, n = /*#__PURE__*/ m$1(function() {}, "F");
            return {
                s: n,
                n: /*#__PURE__*/ m$1(function() {
                    return a >= t.length ? {
                        done: true
                    } : {
                        done: false,
                        value: t[a++]
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
    var i = true, s = false, o;
    return {
        s: /*#__PURE__*/ m$1(function() {
            r = /*#__PURE__*/ r.call(t);
        }, "s"),
        n: /*#__PURE__*/ m$1(function() {
            var l = /*#__PURE__*/ r.next();
            return i = l.done, l;
        }, "n"),
        e: /*#__PURE__*/ m$1(function(l) {
            s = true, o = l;
        }, "e"),
        f: /*#__PURE__*/ m$1(function() {
            try {
                !i && r.return != null && r.return();
            } finally{
                if (s) throw o;
            }
        }, "f")
    };
}
m$1(xt, "_createForOfIteratorHelper");
var Ue = typeof window > "u" ? null : window, Qi = Ue ? Ue.navigator : null;
Ue && Ue.document;
var Cl = /*#__PURE__*/ Ye(""), mo = /*#__PURE__*/ Ye({}), Sl = /*#__PURE__*/ Ye(function() {}), Dl = typeof HTMLElement > "u" ? "undefined" : Ye(HTMLElement), Ba = /*#__PURE__*/ m$1(function(e) {
    return e && e.instanceString && Ke(e.instanceString) ? e.instanceString() : null;
}, "instanceStr"), ce = /*#__PURE__*/ m$1(function(e) {
    return e != null && Ye(e) == Cl;
}, "string"), Ke = /*#__PURE__*/ m$1(function(e) {
    return e != null && Ye(e) === Sl;
}, "fn"), Oe = /*#__PURE__*/ m$1(function(e) {
    return !Et(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, "array"), Pe = /*#__PURE__*/ m$1(function(e) {
    return e != null && Ye(e) === mo && !Oe(e) && e.constructor === Object;
}, "plainObject"), kl = /*#__PURE__*/ m$1(function(e) {
    return e != null && Ye(e) === mo;
}, "object"), ae = /*#__PURE__*/ m$1(function(e) {
    return e != null && Ye(e) === Ye(1) && !isNaN(e);
}, "number"), Pl = /*#__PURE__*/ m$1(function(e) {
    return ae(e) && Math.floor(e) === e;
}, "integer"), fn = /*#__PURE__*/ m$1(function(e) {
    if (Dl !== "undefined") return e != null && e instanceof HTMLElement;
}, "htmlElement"), Et = /*#__PURE__*/ m$1(function(e) {
    return Aa(e) || bo(e);
}, "elementOrCollection"), Aa = /*#__PURE__*/ m$1(function(e) {
    return Ba(e) === "collection" && e._private.single;
}, "element"), bo = /*#__PURE__*/ m$1(function(e) {
    return Ba(e) === "collection" && !e._private.single;
}, "collection"), Ei = /*#__PURE__*/ m$1(function(e) {
    return Ba(e) === "core";
}, "core"), wo = /*#__PURE__*/ m$1(function(e) {
    return Ba(e) === "stylesheet";
}, "stylesheet"), Bl = /*#__PURE__*/ m$1(function(e) {
    return Ba(e) === "event";
}, "event"), rr = /*#__PURE__*/ m$1(function(e) {
    return e == null ? true : !!(e === "" || e.match(/^\s+$/));
}, "emptyString"), Al = /*#__PURE__*/ m$1(function(e) {
    return typeof HTMLElement > "u" ? false : e instanceof HTMLElement;
}, "domElement"), Rl = /*#__PURE__*/ m$1(function(e) {
    return Pe(e) && ae(e.x1) && ae(e.x2) && ae(e.y1) && ae(e.y2);
}, "boundingBox"), Ml = /*#__PURE__*/ m$1(function(e) {
    return kl(e) && Ke(e.then);
}, "promise"), Ll = /*#__PURE__*/ m$1(function() {
    return Qi && Qi.userAgent.match(/msie|trident|edge/i);
}, "ms"), ma = /*#__PURE__*/ m$1(function(e, r) {
    r || (r = /*#__PURE__*/ m$1(function() {
        if (arguments.length === 1) return arguments[0];
        if (arguments.length === 0) return "undefined";
        for(var i = [], s = 0; s < arguments.length; s++)i.push(arguments[s]);
        return i.join("$");
    }, "keyFn"));
    var a = /*#__PURE__*/ m$1(function n() {
        var i = this, s = arguments, o, l = /*#__PURE__*/ r.apply(i, s), u = n.cache;
        return (o = u[l]) || (o = u[l] = /*#__PURE__*/ e.apply(i, s)), o;
    }, "memoizedFn");
    return a.cache = {}, a;
}, "memoize"), Ti = /*#__PURE__*/ ma(function(t) {
    return t.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase();
    });
}), Tn = /*#__PURE__*/ ma(function(t) {
    return t.replace(/(-\w)/g, function(e) {
        return e[1].toUpperCase();
    });
}), xo = /*#__PURE__*/ ma(function(t, e) {
    return t + e[0].toUpperCase() + e.substring(1);
}, function(t, e) {
    return t + "$" + e;
}), Ji = /*#__PURE__*/ m$1(function(e) {
    return rr(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, "capitalize"), Xe = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", Il = "rgb[a]?\\((" + Xe + "[%]?)\\s*,\\s*(" + Xe + "[%]?)\\s*,\\s*(" + Xe + "[%]?)(?:\\s*,\\s*(" + Xe + "))?\\)", Ol = "rgb[a]?\\((?:" + Xe + "[%]?)\\s*,\\s*(?:" + Xe + "[%]?)\\s*,\\s*(?:" + Xe + "[%]?)(?:\\s*,\\s*(?:" + Xe + "))?\\)", Nl = "hsl[a]?\\((" + Xe + ")\\s*,\\s*(" + Xe + "[%])\\s*,\\s*(" + Xe + "[%])(?:\\s*,\\s*(" + Xe + "))?\\)", zl = "hsl[a]?\\((?:" + Xe + ")\\s*,\\s*(?:" + Xe + "[%])\\s*,\\s*(?:" + Xe + "[%])(?:\\s*,\\s*(?:" + Xe + "))?\\)", Fl = "\\#[0-9a-fA-F]{3}", Vl = "\\#[0-9a-fA-F]{6}", Eo = /*#__PURE__*/ m$1(function(e, r) {
    return e < r ? -1 : e > r ? 1 : 0;
}, "ascending"), ql = /*#__PURE__*/ m$1(function(e, r) {
    return -1 * Eo(e, r);
}, "descending"), he = Object.assign != null ? Object.assign.bind(Object) : function(t) {
    for(var e = arguments, r = 1; r < e.length; r++){
        var a = e[r];
        if (a != null) for(var n = /*#__PURE__*/ Object.keys(a), i = 0; i < n.length; i++){
            var s = n[i];
            t[s] = a[s];
        }
    }
    return t;
}, $l = /*#__PURE__*/ m$1(function(e) {
    if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
        var r = e.length === 4, a, n, i, s = 16;
        return r ? (a = /*#__PURE__*/ parseInt(e[1] + e[1], s), n = /*#__PURE__*/ parseInt(e[2] + e[2], s), i = /*#__PURE__*/ parseInt(e[3] + e[3], s)) : (a = /*#__PURE__*/ parseInt(e[1] + e[2], s), n = /*#__PURE__*/ parseInt(e[3] + e[4], s), i = /*#__PURE__*/ parseInt(e[5] + e[6], s)), [
            a,
            n,
            i
        ];
    }
}, "hex2tuple"), Kl = /*#__PURE__*/ m$1(function(e) {
    var r, a, n, i, s, o, l, u;
    function f(h, m, y) {
        return y < 0 && (y += 1), y > 1 && (y -= 1), y < 1 / 6 ? h + (m - h) * 6 * y : y < 1 / 2 ? m : y < 2 / 3 ? h + (m - h) * (2 / 3 - y) * 6 : h;
    }
    m$1(f, "hue2rgb");
    var c = /*#__PURE__*/ new RegExp("^" + Nl + "$").exec(e);
    if (c) {
        if (a = /*#__PURE__*/ parseInt(c[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = /*#__PURE__*/ parseFloat(c[2]), n < 0 || n > 100 || (n = n / 100, i = /*#__PURE__*/ parseFloat(c[3]), i < 0 || i > 100) || (i = i / 100, s = c[4], s !== void 0 && (s = /*#__PURE__*/ parseFloat(s), s < 0 || s > 1))) return;
        if (n === 0) o = l = u = /*#__PURE__*/ Math.round(i * 255);
        else {
            var d = i < .5 ? i * (1 + n) : i + n - i * n, g = 2 * i - d;
            o = /*#__PURE__*/ Math.round(255 * f(g, d, a + 1 / 3)), l = /*#__PURE__*/ Math.round(255 * f(g, d, a)), u = /*#__PURE__*/ Math.round(255 * f(g, d, a - 1 / 3));
        }
        r = [
            o,
            l,
            u,
            s
        ];
    }
    return r;
}, "hsl2tuple"), Gl = /*#__PURE__*/ m$1(function(e) {
    var r, a = /*#__PURE__*/ new RegExp("^" + Il + "$").exec(e);
    if (a) {
        r = [];
        for(var n = [], i = 1; i <= 3; i++){
            var s = a[i];
            if (s[s.length - 1] === "%" && (n[i] = true), s = /*#__PURE__*/ parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255) return;
            r.push(/*#__PURE__*/ Math.floor(s));
        }
        var o = n[1] || n[2] || n[3], l = n[1] && n[2] && n[3];
        if (o && !l) return;
        var u = a[4];
        if (u !== void 0) {
            if (u = /*#__PURE__*/ parseFloat(u), u < 0 || u > 1) return;
            r.push(u);
        }
    }
    return r;
}, "rgb2tuple"), Wl = /*#__PURE__*/ m$1(function(e) {
    return Hl[e.toLowerCase()];
}, "colorname2tuple"), To = /*#__PURE__*/ m$1(function(e) {
    return (Oe(e) ? e : null) || Wl(e) || $l(e) || Gl(e) || Kl(e);
}, "color2tuple"), Hl = {
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
}, Co = /*#__PURE__*/ m$1(function(e) {
    for(var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++){
        var s = a[i];
        if (Pe(s)) throw Error("Tried to set map with object key");
        i < a.length - 1 ? (r[s] == null && (r[s] = {}), r = r[s]) : r[s] = e.value;
    }
}, "setMap"), So = /*#__PURE__*/ m$1(function(e) {
    for(var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++){
        var s = a[i];
        if (Pe(s)) throw Error("Tried to get map with object key");
        if (r = r[s], r == null) return r;
    }
    return r;
}, "getMap");
function Ul(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
}
m$1(Ul, "isObject");
var br = Ul, la = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xl(t, e) {
    return e = {
        exports: {}
    }, t(e, e.exports), e.exports;
}
m$1(Xl, "createCommonjsModule");
var Yl = typeof la == "object" && la && la.Object === Object && la, _l = Yl, Zl = typeof self == "object" && self && self.Object === Object && self, Ql = _l || Zl || Function("return this")(), Cn = Ql, Jl = /*#__PURE__*/ m$1(function() {
    return Cn.Date.now();
}, "now"), Kn = Jl, jl = /\s/;
function ev(t) {
    for(var e = t.length; e-- && jl.test(/*#__PURE__*/ t.charAt(e)););
    return e;
}
m$1(ev, "trimmedEndIndex");
var tv = ev, rv = /^\s+/;
function av(t) {
    return t && t.slice(0, tv(t) + 1).replace(rv, "");
}
m$1(av, "baseTrim");
var nv = av, iv = Cn.Symbol, Vr = iv, Do = Object.prototype, sv = Do.hasOwnProperty, ov = Do.toString, ra = Vr ? Vr.toStringTag : void 0;
function uv(t) {
    var e = /*#__PURE__*/ sv.call(t, ra), r = t[ra];
    try {
        t[ra] = void 0;
        var a = !0;
    } catch  {}
    var n = /*#__PURE__*/ ov.call(t);
    return a && (e ? t[ra] = r : delete t[ra]), n;
}
m$1(uv, "getRawTag");
var lv = uv, vv = Object.prototype, fv = vv.toString;
function cv(t) {
    return fv.call(t);
}
m$1(cv, "objectToString");
var dv = cv, hv = "[object Null]", gv = "[object Undefined]", ji = Vr ? Vr.toStringTag : void 0;
function pv(t) {
    return t == null ? t === void 0 ? gv : hv : ji && ji in Object(t) ? lv(t) : dv(t);
}
m$1(pv, "baseGetTag");
var ko = pv;
function yv(t) {
    return t != null && typeof t == "object";
}
m$1(yv, "isObjectLike");
var mv = yv, bv = "[object Symbol]";
function wv(t) {
    return typeof t == "symbol" || mv(t) && ko(t) == bv;
}
m$1(wv, "isSymbol");
var Ra = wv, es = NaN, xv = /^[-+]0x[0-9a-f]+$/i, Ev = /^0b[01]+$/i, Tv = /^0o[0-7]+$/i, Cv = parseInt;
function Sv(t) {
    if (typeof t == "number") return t;
    if (Ra(t)) return es;
    if (br(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = br(e) ? e + "" : e;
    }
    if (typeof t != "string") return t === 0 ? t : +t;
    t = /*#__PURE__*/ nv(t);
    var r = /*#__PURE__*/ Ev.test(t);
    return r || Tv.test(t) ? Cv(/*#__PURE__*/ t.slice(2), r ? 2 : 8) : xv.test(t) ? es : +t;
}
m$1(Sv, "toNumber");
var ts = Sv, Dv = "Expected a function", kv = Math.max, Pv = Math.min;
function Bv(t, e, r) {
    var a, n, i, s, o, l, u = 0, f = false, c = false, d = true;
    if (typeof t != "function") throw new TypeError(Dv);
    e = ts(e) || 0, br(r) && (f = !!r.leading, c = "maxWait" in r, i = c ? kv(ts(r.maxWait) || 0, e) : i, d = "trailing" in r ? !!r.trailing : d);
    function g(T) {
        var E = a, D = n;
        return a = n = void 0, u = T, s = /*#__PURE__*/ t.apply(D, E), s;
    }
    m$1(g, "invokeFunc");
    function h(T) {
        return u = T, o = /*#__PURE__*/ setTimeout(p, e), f ? g(T) : s;
    }
    m$1(h, "leadingEdge");
    function m(T) {
        var E = T - l, D = T - u, C = e - E;
        return c ? Pv(C, i - D) : C;
    }
    m$1(m, "remainingWait");
    function y(T) {
        var E = T - l, D = T - u;
        return l === void 0 || E >= e || E < 0 || c && D >= i;
    }
    m$1(y, "shouldInvoke");
    function p() {
        var T = /*#__PURE__*/ Kn();
        if (y(T)) return b1(T);
        o = /*#__PURE__*/ setTimeout(p, /*#__PURE__*/ m(T));
    }
    m$1(p, "timerExpired");
    function b1(T) {
        return o = void 0, d && a ? g(T) : (a = n = void 0, s);
    }
    m$1(b1, "trailingEdge");
    function w() {
        o !== void 0 && clearTimeout(o), u = 0, a = l = n = o = void 0;
    }
    m$1(w, "cancel");
    function x() {
        return o === void 0 ? s : b1(/*#__PURE__*/ Kn());
    }
    m$1(x, "flush");
    function S() {
        var T = /*#__PURE__*/ Kn(), E = /*#__PURE__*/ y(T);
        if (a = arguments, n = this, l = T, E) {
            if (o === void 0) return h(l);
            if (c) return clearTimeout(o), o = /*#__PURE__*/ setTimeout(p, e), g(l);
        }
        return o === void 0 && (o = /*#__PURE__*/ setTimeout(p, e)), s;
    }
    return m$1(S, "debounced"), S.cancel = w, S.flush = x, S;
}
m$1(Bv, "debounce");
var Ma = Bv, Gn = Ue ? Ue.performance : null, Po = Gn && Gn.now ? function() {
    return Gn.now();
} : function() {
    return Date.now();
}, Av = /*#__PURE__*/ function() {
    if (Ue) {
        if (Ue.requestAnimationFrame) return function(t) {
            Ue.requestAnimationFrame(t);
        };
        if (Ue.mozRequestAnimationFrame) return function(t) {
            Ue.mozRequestAnimationFrame(t);
        };
        if (Ue.webkitRequestAnimationFrame) return function(t) {
            Ue.webkitRequestAnimationFrame(t);
        };
        if (Ue.msRequestAnimationFrame) return function(t) {
            Ue.msRequestAnimationFrame(t);
        };
    }
    return function(t) {
        t && setTimeout(function() {
            t(/*#__PURE__*/ Po());
        }, 1e3 / 60);
    };
}(), cn = /*#__PURE__*/ m$1(function(e) {
    return Av(e);
}, "requestAnimationFrame"), Ht = Po, Mr = 9261, Bo = 65599, va = 5381, Ao = /*#__PURE__*/ m$1(function(e) {
    for(var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mr, a = r, n; n = /*#__PURE__*/ e.next(), !n.done;)a = a * Bo + n.value | 0;
    return a;
}, "hashIterableInts"), ba = /*#__PURE__*/ m$1(function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mr;
    return r * Bo + e | 0;
}, "hashInt"), wa = /*#__PURE__*/ m$1(function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : va;
    return (r << 5) + r + e | 0;
}, "hashIntAlt"), Rv = /*#__PURE__*/ m$1(function(e, r) {
    return e * 2097152 + r;
}, "combineHashes"), Zt = /*#__PURE__*/ m$1(function(e) {
    return e[0] * 2097152 + e[1];
}, "combineHashesArray"), $a = /*#__PURE__*/ m$1(function(e, r) {
    return [
        /*#__PURE__*/ ba(e[0], r[0]),
        /*#__PURE__*/ wa(e[1], r[1])
    ];
}, "hashArrays"), Mv = /*#__PURE__*/ m$1(function(e, r) {
    var a = {
        value: 0,
        done: false
    }, n = 0, i = e.length, s = {
        next: /*#__PURE__*/ m$1(function() {
            return n < i ? a.value = e[n++] : a.done = true, a;
        }, "next")
    };
    return Ao(s, r);
}, "hashIntsArray"), ar = /*#__PURE__*/ m$1(function(e, r) {
    var a = {
        value: 0,
        done: false
    }, n = 0, i = e.length, s = {
        next: /*#__PURE__*/ m$1(function() {
            return n < i ? a.value = /*#__PURE__*/ e.charCodeAt(n++) : a.done = true, a;
        }, "next")
    };
    return Ao(s, r);
}, "hashString"), Ro = /*#__PURE__*/ m$1(function() {
    return Lv(arguments);
}, "hashStrings"), Lv = /*#__PURE__*/ m$1(function(e) {
    for(var r, a = 0; a < e.length; a++){
        var n = e[a];
        a === 0 ? r = /*#__PURE__*/ ar(n) : r = /*#__PURE__*/ ar(n, r);
    }
    return r;
}, "hashStringsArray"), rs = true, Iv = console.warn != null, Ov = console.trace != null, Ci = Number.MAX_SAFE_INTEGER || 9007199254740991, Mo = /*#__PURE__*/ m$1(function() {
    return true;
}, "trueify"), dn = /*#__PURE__*/ m$1(function() {
    return false;
}, "falsify"), as = /*#__PURE__*/ m$1(function() {
    return 0;
}, "zeroify"), Si = /*#__PURE__*/ m$1(function() {}, "noop"), $e = /*#__PURE__*/ m$1(function(e) {
    throw new Error(e);
}, "error"), Lo = /*#__PURE__*/ m$1(function(e) {
    if (e !== void 0) rs = !!e;
    else return rs;
}, "warnings"), Re = /*#__PURE__*/ m$1(function(e) {
    Lo() && (Iv ? console.warn(e) : (console.log(e), Ov && console.trace()));
}, "warn"), Nv = /*#__PURE__*/ m$1(function(e) {
    return he({}, e);
}, "clone"), zt = /*#__PURE__*/ m$1(function(e) {
    return e == null ? e : Oe(e) ? e.slice() : Pe(e) ? Nv(e) : e;
}, "copy"), zv = /*#__PURE__*/ m$1(function(e) {
    return e.slice();
}, "copyArray"), Io = /*#__PURE__*/ m$1(function(e, r) {
    for(r = e = ""; e++ < 36; r += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-");
    return r;
}, "uuid"), Fv = {}, Oo = /*#__PURE__*/ m$1(function() {
    return Fv;
}, "staticEmptyObject"), et = /*#__PURE__*/ m$1(function(e) {
    var r = /*#__PURE__*/ Object.keys(e);
    return function(a) {
        for(var n = {}, i = 0; i < r.length; i++){
            var s = r[i], o = a?.[s];
            n[s] = o === void 0 ? e[s] : o;
        }
        return n;
    };
}, "defaults"), nr = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = e.length - 1; n >= 0 && !(e[n] === r && (e.splice(n, 1), a)); n--);
}, "removeFromArray"), Di = /*#__PURE__*/ m$1(function(e) {
    e.splice(0, e.length);
}, "clearArray"), Vv = /*#__PURE__*/ m$1(function(e, r) {
    for(var a = 0; a < r.length; a++){
        var n = r[a];
        e.push(n);
    }
}, "push"), At = /*#__PURE__*/ m$1(function(e, r, a) {
    return a && (r = /*#__PURE__*/ xo(a, r)), e[r];
}, "getPrefixedProperty"), Jt = /*#__PURE__*/ m$1(function(e, r, a, n) {
    a && (r = /*#__PURE__*/ xo(a, r)), e[r] = n;
}, "setPrefixedProperty"), qv = /*#__PURE__*/ function() {
    function t() {
        ur(this, t), this._obj = {};
    }
    return m$1(t, "ObjectMap"), lr(t, [
        {
            key: "set",
            value: /*#__PURE__*/ m$1(function(r, a) {
                return this._obj[r] = a, this;
            }, "set")
        },
        {
            key: "delete",
            value: /*#__PURE__*/ m$1(function(r) {
                return this._obj[r] = void 0, this;
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
            value: /*#__PURE__*/ m$1(function(r) {
                return this._obj[r] !== void 0;
            }, "has")
        },
        {
            key: "get",
            value: /*#__PURE__*/ m$1(function(r) {
                return this._obj[r];
            }, "get")
        }
    ]), t;
}(), Ft = typeof Map < "u" ? Map : qv, $v = "undefined", Kv = /*#__PURE__*/ function() {
    function t(e) {
        if (ur(this, t), this._obj = /*#__PURE__*/ Object.create(null), this.size = 0, e != null) {
            var r;
            e.instanceString != null && e.instanceString() === this.instanceString() ? r = /*#__PURE__*/ e.toArray() : r = e;
            for(var a = 0; a < r.length; a++)this.add(r[a]);
        }
    }
    return m$1(t, "ObjectSet"), lr(t, [
        {
            key: "instanceString",
            value: /*#__PURE__*/ m$1(function() {
                return "set";
            }, "instanceString")
        },
        {
            key: "add",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = this._obj;
                a[r] !== 1 && (a[r] = 1, this.size++);
            }, "add")
        },
        {
            key: "delete",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = this._obj;
                a[r] === 1 && (a[r] = 0, this.size--);
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
            value: /*#__PURE__*/ m$1(function(r) {
                return this._obj[r] === 1;
            }, "has")
        },
        {
            key: "toArray",
            value: /*#__PURE__*/ m$1(function() {
                var r = this;
                return Object.keys(this._obj).filter(function(a) {
                    return r.has(a);
                });
            }, "toArray")
        },
        {
            key: "forEach",
            value: /*#__PURE__*/ m$1(function(r, a) {
                return this.toArray().forEach(r, a);
            }, "forEach")
        }
    ]), t;
}(), Wr = (typeof Set > "u" ? "undefined" : Ye(Set)) !== $v ? Set : Kv, Sn = /*#__PURE__*/ m$1(function(e, r) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (e === void 0 || r === void 0 || !Ei(e)) {
        $e("An element must have a core reference and parameters set");
        return;
    }
    var n = r.group;
    if (n == null && (r.data && r.data.source != null && r.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
        $e("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
        return;
    }
    this.length = 1, this[0] = this;
    var i = this._private = {
        cy: e,
        single: true,
        data: r.data || {},
        position: r.position || {
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
        selected: !!r.selected,
        selectable: r.selectable === void 0 ? true : !!r.selectable,
        locked: !!r.locked,
        grabbed: false,
        grabbable: r.grabbable === void 0 ? true : !!r.grabbable,
        pannable: r.pannable === void 0 ? n === "edges" : !!r.pannable,
        active: false,
        classes: new Wr,
        animation: {
            current: [],
            queue: []
        },
        rscratch: {},
        scratch: r.scratch || {},
        edges: [],
        children: [],
        parent: r.parent && r.parent.isNode() ? r.parent : null,
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
    if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
        var s = r.renderedPosition, o = /*#__PURE__*/ e.pan(), l = /*#__PURE__*/ e.zoom();
        i.position = {
            x: (s.x - o.x) / l,
            y: (s.y - o.y) / l
        };
    }
    var u = [];
    Oe(r.classes) ? u = r.classes : ce(r.classes) && (u = /*#__PURE__*/ r.classes.split(/\s+/));
    for(var f = 0, c = u.length; f < c; f++){
        var d = u[f];
        !d || d === "" || i.classes.add(d);
    }
    this.createEmitter();
    var g = r.style || r.css;
    g && (Re("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(g)), (a === void 0 || a) && this.restore();
}, "Element"), ns = /*#__PURE__*/ m$1(function(e) {
    return e = {
        bfs: e.bfs || !e.dfs,
        dfs: e.dfs || !e.bfs
    }, m$1(function(a, n, i) {
        var s;
        Pe(a) && !Et(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !Ke(n) ? n : i, n = Ke(n) ? n : function() {};
        for(var o = this._private.cy, l = a = ce(a) ? this.filter(a) : a, u = [], f = [], c = {}, d = {}, g = {}, h = 0, m, y = /*#__PURE__*/ this.byGroup(), p = y.nodes, b1 = y.edges, w = 0; w < l.length; w++){
            var x = l[w], S = /*#__PURE__*/ x.id();
            x.isNode() && (u.unshift(x), e.bfs && (g[S] = true, f.push(x)), d[S] = 0);
        }
        for(var T = /*#__PURE__*/ m$1(function() {
            var M = e.bfs ? u.shift() : u.pop(), R = /*#__PURE__*/ M.id();
            if (e.dfs) {
                if (g[R]) return "continue";
                g[R] = true, f.push(M);
            }
            var I = d[R], L = c[R], O = L != null ? L.source() : null, N = L != null ? L.target() : null, $ = L == null ? void 0 : M.same(O) ? N[0] : O[0], H = void 0;
            if (H = /*#__PURE__*/ n(M, L, $, h++, I), H === true) return m = M, "break";
            if (H === false) return "break";
            for(var q = /*#__PURE__*/ M.connectedEdges().filter(function(Q) {
                return (!i || Q.source().same(M)) && b1.has(Q);
            }), K = 0; K < q.length; K++){
                var Y = q[K], Z = /*#__PURE__*/ Y.connectedNodes().filter(function(Q) {
                    return !Q.same(M) && p.has(Q);
                }), J = /*#__PURE__*/ Z.id();
                Z.length !== 0 && !g[J] && (Z = Z[0], u.push(Z), e.bfs && (g[J] = true, f.push(Z)), c[J] = Y, d[J] = d[R] + 1);
            }
        }, "_loop"); u.length !== 0;){
            var E = /*#__PURE__*/ T();
            if (E !== "continue" && E === "break") break;
        }
        for(var D = /*#__PURE__*/ o.collection(), C = 0; C < f.length; C++){
            var B = f[C], A = c[B.id()];
            A != null && D.push(A), D.push(B);
        }
        return {
            path: /*#__PURE__*/ o.collection(D),
            found: /*#__PURE__*/ o.collection(m)
        };
    }, "searchFn");
}, "defineSearch"), xa = {
    breadthFirstSearch: /*#__PURE__*/ ns({
        bfs: true
    }),
    depthFirstSearch: /*#__PURE__*/ ns({
        dfs: true
    })
};
xa.bfs = xa.breadthFirstSearch;
xa.dfs = xa.depthFirstSearch;
var Gv = /*#__PURE__*/ Xl(function(t, e) {
    (function() {
        var r, a, n, i, s, o, l, u, f, c, d, g, h, m, y;
        n = Math.floor, c = Math.min, a = /*#__PURE__*/ m$1(function(p, b1) {
            return p < b1 ? -1 : p > b1 ? 1 : 0;
        }, "defaultCmp"), f = /*#__PURE__*/ m$1(function(p, b1, w, x, S) {
            var T;
            if (w == null && (w = 0), S == null && (S = a), w < 0) throw new Error("lo must be non-negative");
            for(x == null && (x = p.length); w < x;)T = /*#__PURE__*/ n((w + x) / 2), S(b1, p[T]) < 0 ? x = T : w = T + 1;
            return [].splice.apply(p, /*#__PURE__*/ [
                w,
                w - w
            ].concat(b1)), b1;
        }, "insort"), o = /*#__PURE__*/ m$1(function(p, b1, w) {
            return w == null && (w = a), p.push(b1), m(p, 0, p.length - 1, w);
        }, "heappush"), s = /*#__PURE__*/ m$1(function(p, b1) {
            var w, x;
            return b1 == null && (b1 = a), w = /*#__PURE__*/ p.pop(), p.length ? (x = p[0], p[0] = w, y(p, 0, b1)) : x = w, x;
        }, "heappop"), u = /*#__PURE__*/ m$1(function(p, b1, w) {
            var x;
            return w == null && (w = a), x = p[0], p[0] = b1, y(p, 0, w), x;
        }, "heapreplace"), l = /*#__PURE__*/ m$1(function(p, b1, w) {
            var x;
            return w == null && (w = a), p.length && w(p[0], b1) < 0 && (x = [
                p[0],
                b1
            ], b1 = x[0], p[0] = x[1], y(p, 0, w)), b1;
        }, "heappushpop"), i = /*#__PURE__*/ m$1(function(p, b1) {
            var w, x, S, T, E, D;
            for(b1 == null && (b1 = a), T = /*#__PURE__*/ (function() {
                D = [];
                for(var C = 0, B = /*#__PURE__*/ n(p.length / 2); 0 <= B ? C < B : C > B; 0 <= B ? C++ : C--)D.push(C);
                return D;
            }).apply(this).reverse(), E = [], x = 0, S = T.length; x < S; x++)w = T[x], E.push(/*#__PURE__*/ y(p, w, b1));
            return E;
        }, "heapify"), h = /*#__PURE__*/ m$1(function(p, b1, w) {
            var x;
            if (w == null && (w = a), x = /*#__PURE__*/ p.indexOf(b1), x !== -1) return m(p, 0, x, w), y(p, x, w);
        }, "updateItem"), d = /*#__PURE__*/ m$1(function(p, b1, w) {
            var x, S, T, E, D;
            if (w == null && (w = a), S = /*#__PURE__*/ p.slice(0, b1), !S.length) return S;
            for(i(S, w), D = /*#__PURE__*/ p.slice(b1), T = 0, E = D.length; T < E; T++)x = D[T], l(S, x, w);
            return S.sort(w).reverse();
        }, "nlargest"), g = /*#__PURE__*/ m$1(function(p, b1, w) {
            var x, S, T, E, D, C, B, A, P;
            if (w == null && (w = a), b1 * 10 <= p.length) {
                if (T = /*#__PURE__*/ p.slice(0, b1).sort(w), !T.length) return T;
                for(S = T[T.length - 1], B = /*#__PURE__*/ p.slice(b1), E = 0, C = B.length; E < C; E++)x = B[E], w(x, S) < 0 && (f(T, x, 0, null, w), T.pop(), S = T[T.length - 1]);
                return T;
            }
            for(i(p, w), P = [], D = 0, A = /*#__PURE__*/ c(b1, p.length); 0 <= A ? D < A : D > A; 0 <= A ? ++D : --D)P.push(/*#__PURE__*/ s(p, w));
            return P;
        }, "nsmallest"), m = /*#__PURE__*/ m$1(function(p, b1, w, x) {
            var S, T, E;
            for(x == null && (x = a), S = p[w]; w > b1;){
                if (E = w - 1 >> 1, T = p[E], x(S, T) < 0) {
                    p[w] = T, w = E;
                    continue;
                }
                break;
            }
            return p[w] = S;
        }, "_siftdown"), y = /*#__PURE__*/ m$1(function(p, b1, w) {
            var x, S, T, E, D;
            for(w == null && (w = a), S = p.length, D = b1, T = p[b1], x = 2 * b1 + 1; x < S;)E = x + 1, E < S && !(w(p[x], p[E]) < 0) && (x = E), p[b1] = p[x], b1 = x, x = 2 * b1 + 1;
            return p[b1] = T, m(p, D, b1, w);
        }, "_siftup"), r = /*#__PURE__*/ function() {
            p.push = o, p.pop = s, p.replace = u, p.pushpop = l, p.heapify = i, p.updateItem = h, p.nlargest = d, p.nsmallest = g;
            function p(b1) {
                this.cmp = b1 ?? a, this.nodes = [];
            }
            return m$1(p, "Heap"), p.prototype.push = function(b1) {
                return o(this.nodes, b1, this.cmp);
            }, p.prototype.pop = function() {
                return s(this.nodes, this.cmp);
            }, p.prototype.peek = function() {
                return this.nodes[0];
            }, p.prototype.contains = function(b1) {
                return this.nodes.indexOf(b1) !== -1;
            }, p.prototype.replace = function(b1) {
                return u(this.nodes, b1, this.cmp);
            }, p.prototype.pushpop = function(b1) {
                return l(this.nodes, b1, this.cmp);
            }, p.prototype.heapify = function() {
                return i(this.nodes, this.cmp);
            }, p.prototype.updateItem = function(b1) {
                return h(this.nodes, b1, this.cmp);
            }, p.prototype.clear = function() {
                return this.nodes = [];
            }, p.prototype.empty = function() {
                return this.nodes.length === 0;
            }, p.prototype.size = function() {
                return this.nodes.length;
            }, p.prototype.clone = function() {
                var b1;
                return b1 = new p, b1.nodes = /*#__PURE__*/ this.nodes.slice(0), b1;
            }, p.prototype.toArray = function() {
                return this.nodes.slice(0);
            }, p.prototype.insert = p.prototype.push, p.prototype.top = p.prototype.peek, p.prototype.front = p.prototype.peek, p.prototype.has = p.prototype.contains, p.prototype.copy = p.prototype.clone, p;
        }(), function(p, b1) {
            return t.exports = /*#__PURE__*/ b1();
        }(this, function() {
            return r;
        });
    }).call(la);
}), La = Gv, Wv = /*#__PURE__*/ et({
    root: null,
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    directed: false
}), Hv = {
    dijkstra: /*#__PURE__*/ m$1(function(e) {
        if (!Pe(e)) {
            var r = arguments;
            e = {
                root: r[0],
                weight: r[1],
                directed: r[2]
            };
        }
        var a = /*#__PURE__*/ Wv(e), n = a.root, i = a.weight, s = a.directed, o = this, l = i, u = ce(n) ? this.filter(n)[0] : n[0], f = {}, c = {}, d = {}, g = /*#__PURE__*/ this.byGroup(), h = g.nodes, m = g.edges;
        m.unmergeBy(function(I) {
            return I.isLoop();
        });
        for(var y = /*#__PURE__*/ m$1(function(L) {
            return f[L.id()];
        }, "getDist"), p = /*#__PURE__*/ m$1(function(L, O) {
            f[L.id()] = O, b1.updateItem(L);
        }, "setDist"), b1 = new La(function(I, L) {
            return y(I) - y(L);
        }), w = 0; w < h.length; w++){
            var x = h[w];
            f[x.id()] = x.same(u) ? 0 : 1 / 0, b1.push(x);
        }
        for(var S = /*#__PURE__*/ m$1(function(L, O) {
            for(var N = /*#__PURE__*/ (s ? L.edgesTo(O) : L.edgesWith(O)).intersect(m), $ = 1 / 0, H, q = 0; q < N.length; q++){
                var K = N[q], Y = /*#__PURE__*/ l(K);
                (Y < $ || !H) && ($ = Y, H = K);
            }
            return {
                edge: H,
                dist: $
            };
        }, "distBetween"); b1.size() > 0;){
            var T = /*#__PURE__*/ b1.pop(), E = /*#__PURE__*/ y(T), D = /*#__PURE__*/ T.id();
            if (d[D] = E, E !== 1 / 0) for(var C = /*#__PURE__*/ T.neighborhood().intersect(h), B = 0; B < C.length; B++){
                var A = C[B], P = /*#__PURE__*/ A.id(), M = /*#__PURE__*/ S(T, A), R = E + M.dist;
                R < y(A) && (p(A, R), c[P] = {
                    node: T,
                    edge: M.edge
                });
            }
        }
        return {
            distanceTo: /*#__PURE__*/ m$1(function(L) {
                var O = ce(L) ? h.filter(L)[0] : L[0];
                return d[O.id()];
            }, "distanceTo"),
            pathTo: /*#__PURE__*/ m$1(function(L) {
                var O = ce(L) ? h.filter(L)[0] : L[0], N = [], $ = O, H = /*#__PURE__*/ $.id();
                if (O.length > 0) for(N.unshift(O); c[H];){
                    var q = c[H];
                    N.unshift(q.edge), N.unshift(q.node), $ = q.node, H = /*#__PURE__*/ $.id();
                }
                return o.spawn(N);
            }, "pathTo")
        };
    }, "dijkstra")
}, Uv = {
    kruskal: /*#__PURE__*/ m$1(function(e) {
        e = e || function(w) {
            return 1;
        };
        for(var r = /*#__PURE__*/ this.byGroup(), a = r.nodes, n = r.edges, i = a.length, s = new Array(i), o = a, l = /*#__PURE__*/ m$1(function(x) {
            for(var S = 0; S < s.length; S++){
                var T = s[S];
                if (T.has(x)) return S;
            }
        }, "findSetIndex"), u = 0; u < i; u++)s[u] = /*#__PURE__*/ this.spawn(a[u]);
        for(var f = /*#__PURE__*/ n.sort(function(w, x) {
            return e(w) - e(x);
        }), c = 0; c < f.length; c++){
            var d = f[c], g = d.source()[0], h = d.target()[0], m = /*#__PURE__*/ l(g), y = /*#__PURE__*/ l(h), p = s[m], b1 = s[y];
            m !== y && (o.merge(d), p.merge(b1), s.splice(y, 1));
        }
        return o;
    }, "kruskal")
}, Xv = /*#__PURE__*/ et({
    root: null,
    goal: null,
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    heuristic: /*#__PURE__*/ m$1(function(e) {
        return 0;
    }, "heuristic"),
    directed: false
}), Yv = {
    aStar: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ Xv(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, l = a.weight;
        n = r.collection(n)[0], i = r.collection(i)[0];
        var u = /*#__PURE__*/ n.id(), f = /*#__PURE__*/ i.id(), c = {}, d = {}, g = {}, h = new La(function(H, q) {
            return d[H.id()] - d[q.id()];
        }), m = new Wr, y = {}, p = {}, b1 = /*#__PURE__*/ m$1(function(q, K) {
            h.push(q), m.add(K);
        }, "addToOpenSet"), w, x, S = /*#__PURE__*/ m$1(function() {
            w = /*#__PURE__*/ h.pop(), x = /*#__PURE__*/ w.id(), m.delete(x);
        }, "popFromOpenSet"), T = /*#__PURE__*/ m$1(function(q) {
            return m.has(q);
        }, "isInOpenSet");
        b1(n, u), c[u] = 0, d[u] = /*#__PURE__*/ s(n);
        for(var E = 0; h.size() > 0;){
            if (S(), E++, x === f) {
                for(var D = [], C = i, B = f, A = p[B]; D.unshift(C), A != null && D.unshift(A), C = y[B], C != null;)B = /*#__PURE__*/ C.id(), A = p[B];
                return {
                    found: true,
                    distance: c[x],
                    path: /*#__PURE__*/ this.spawn(D),
                    steps: E
                };
            }
            g[x] = true;
            for(var P = w._private.edges, M = 0; M < P.length; M++){
                var R = P[M];
                if (this.hasElementWithId(/*#__PURE__*/ R.id()) && !(o && R.data("source") !== x)) {
                    var I = /*#__PURE__*/ R.source(), L = /*#__PURE__*/ R.target(), O = I.id() !== x ? I : L, N = /*#__PURE__*/ O.id();
                    if (this.hasElementWithId(N) && !g[N]) {
                        var $ = c[x] + l(R);
                        if (!T(N)) {
                            c[N] = $, d[N] = $ + s(O), b1(O, N), y[N] = w, p[N] = R;
                            continue;
                        }
                        $ < c[N] && (c[N] = $, d[N] = $ + s(O), y[N] = w, p[N] = R);
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
}, _v = /*#__PURE__*/ et({
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    directed: false
}), Zv = {
    floydWarshall: /*#__PURE__*/ m$1(function(e) {
        for(var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ _v(e), n = a.weight, i = a.directed, s = n, o = /*#__PURE__*/ this.byGroup(), l = o.nodes, u = o.edges, f = l.length, c = f * f, d = /*#__PURE__*/ m$1(function(Y) {
            return l.indexOf(Y);
        }, "indexOf"), g = /*#__PURE__*/ m$1(function(Y) {
            return l[Y];
        }, "atIndex"), h = new Array(c), m = 0; m < c; m++){
            var y = m % f, p = (m - y) / f;
            p === y ? h[m] = 0 : h[m] = 1 / 0;
        }
        for(var b1 = new Array(c), w = new Array(c), x = 0; x < u.length; x++){
            var S = u[x], T = S.source()[0], E = S.target()[0];
            if (T !== E) {
                var D = /*#__PURE__*/ d(T), C = /*#__PURE__*/ d(E), B = D * f + C, A = /*#__PURE__*/ s(S);
                if (h[B] > A && (h[B] = A, b1[B] = C, w[B] = S), !i) {
                    var P = C * f + D;
                    !i && h[P] > A && (h[P] = A, b1[P] = D, w[P] = S);
                }
            }
        }
        for(var M = 0; M < f; M++)for(var R = 0; R < f; R++)for(var I = R * f + M, L = 0; L < f; L++){
            var O = R * f + L, N = M * f + L;
            h[I] + h[N] < h[O] && (h[O] = h[I] + h[N], b1[O] = b1[I]);
        }
        var $ = /*#__PURE__*/ m$1(function(Y) {
            return (ce(Y) ? r.filter(Y) : Y)[0];
        }, "getArgEle"), H = /*#__PURE__*/ m$1(function(Y) {
            return d(/*#__PURE__*/ $(Y));
        }, "indexOfArgEle"), q = {
            distance: /*#__PURE__*/ m$1(function(Y, Z) {
                var J = /*#__PURE__*/ H(Y), Q = /*#__PURE__*/ H(Z);
                return h[J * f + Q];
            }, "distance"),
            path: /*#__PURE__*/ m$1(function(Y, Z) {
                var J = /*#__PURE__*/ H(Y), Q = /*#__PURE__*/ H(Z), ee = /*#__PURE__*/ g(J);
                if (J === Q) return ee.collection();
                if (b1[J * f + Q] == null) return r.collection();
                var re = /*#__PURE__*/ r.collection(), W = J, z;
                for(re.merge(ee); J !== Q;)W = J, J = b1[J * f + Q], z = w[W * f + J], re.merge(z), re.merge(/*#__PURE__*/ g(J));
                return re;
            }, "path")
        };
        return q;
    }, "floydWarshall")
}, Qv = /*#__PURE__*/ et({
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    directed: false,
    root: null
}), Jv = {
    bellmanFord: /*#__PURE__*/ m$1(function(e) {
        var r = this, a = /*#__PURE__*/ Qv(e), n = a.weight, i = a.directed, s = a.root, o = n, l = this, u = /*#__PURE__*/ this.cy(), f = /*#__PURE__*/ this.byGroup(), c = f.edges, d = f.nodes, g = d.length, h = new Ft, m = false, y = [];
        s = u.collection(s)[0], c.unmergeBy(function(Le) {
            return Le.isLoop();
        });
        for(var p = c.length, b1 = /*#__PURE__*/ m$1(function(ve) {
            var ue = /*#__PURE__*/ h.get(/*#__PURE__*/ ve.id());
            return ue || (ue = {}, h.set(/*#__PURE__*/ ve.id(), ue)), ue;
        }, "getInfo"), w = /*#__PURE__*/ m$1(function(ve) {
            return (ce(ve) ? u.$(ve) : ve)[0];
        }, "getNodeFromTo"), x = /*#__PURE__*/ m$1(function(ve) {
            return b1(/*#__PURE__*/ w(ve)).dist;
        }, "distanceTo"), S = /*#__PURE__*/ m$1(function(ve) {
            for(var ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, ye = /*#__PURE__*/ w(ve), me = [], ge = ye;;){
                if (ge == null) return r.spawn();
                var be = /*#__PURE__*/ b1(ge), Te = be.edge, De = be.pred;
                if (me.unshift(ge[0]), ge.same(ue) && me.length > 0) break;
                Te != null && me.unshift(Te), ge = De;
            }
            return l.spawn(me);
        }, "pathTo"), T = 0; T < g; T++){
            var E = d[T], D = /*#__PURE__*/ b1(E);
            E.same(s) ? D.dist = 0 : D.dist = 1 / 0, D.pred = null, D.edge = null;
        }
        for(var C = false, B = /*#__PURE__*/ m$1(function(ve, ue, ye, me, ge, be) {
            var Te = me.dist + be;
            Te < ge.dist && !ye.same(me.edge) && (ge.dist = Te, ge.pred = ve, ge.edge = ye, C = true);
        }, "checkForEdgeReplacement"), A = 1; A < g; A++){
            C = false;
            for(var P = 0; P < p; P++){
                var M = c[P], R = /*#__PURE__*/ M.source(), I = /*#__PURE__*/ M.target(), L = /*#__PURE__*/ o(M), O = /*#__PURE__*/ b1(R), N = /*#__PURE__*/ b1(I);
                B(R, I, M, O, N, L), i || B(I, R, M, N, O, L);
            }
            if (!C) break;
        }
        if (C) for(var $ = [], H = 0; H < p; H++){
            var q = c[H], K = /*#__PURE__*/ q.source(), Y = /*#__PURE__*/ q.target(), Z = /*#__PURE__*/ o(q), J = b1(K).dist, Q = b1(Y).dist;
            if (J + Z < Q || !i && Q + Z < J) if (m || (Re("Graph contains a negative weight cycle for Bellman-Ford"), m = true), e.findNegativeWeightCycles !== false) {
                var ee = [];
                J + Z < Q && ee.push(K), !i && Q + Z < J && ee.push(Y);
                for(var re = ee.length, W = 0; W < re; W++){
                    var z = ee[W], U = [
                        z
                    ];
                    U.push(b1(z).edge);
                    for(var te = b1(z).pred; U.indexOf(te) === -1;)U.push(te), U.push(b1(te).edge), te = b1(te).pred;
                    U = /*#__PURE__*/ U.slice(/*#__PURE__*/ U.indexOf(te));
                    for(var se = /*#__PURE__*/ U[0].id(), le = 0, Se = 2; Se < U.length; Se += 2)U[Se].id() < se && (se = /*#__PURE__*/ U[Se].id(), le = Se);
                    U = /*#__PURE__*/ U.slice(le).concat(/*#__PURE__*/ U.slice(0, le)), U.push(U[0]);
                    var Me = /*#__PURE__*/ U.map(function(Le) {
                        return Le.id();
                    }).join(",");
                    $.indexOf(Me) === -1 && (y.push(/*#__PURE__*/ l.spawn(U)), $.push(Me));
                }
            } else break;
        }
        return {
            distanceTo: x,
            pathTo: S,
            hasNegativeWeightCycle: m,
            negativeWeightCycles: y
        };
    }, "bellmanFord")
}, jv = /*#__PURE__*/ Math.sqrt(2), ef = /*#__PURE__*/ m$1(function(e, r, a) {
    a.length === 0 && $e("Karger-Stein must be run on a connected (sub)graph");
    for(var n = a[e], i = n[1], s = n[2], o = r[i], l = r[s], u = a, f = u.length - 1; f >= 0; f--){
        var c = u[f], d = c[1], g = c[2];
        (r[d] === o && r[g] === l || r[d] === l && r[g] === o) && u.splice(f, 1);
    }
    for(var h = 0; h < u.length; h++){
        var m = u[h];
        m[1] === l ? (u[h] = /*#__PURE__*/ m.slice(), u[h][1] = o) : m[2] === l && (u[h] = /*#__PURE__*/ m.slice(), u[h][2] = o);
    }
    for(var y = 0; y < r.length; y++)r[y] === l && (r[y] = o);
    return u;
}, "collapse"), Wn = /*#__PURE__*/ m$1(function(e, r, a, n) {
    for(; a > n;){
        var i = /*#__PURE__*/ Math.floor(Math.random() * r.length);
        r = /*#__PURE__*/ ef(i, e, r), a--;
    }
    return r;
}, "contractUntil"), tf = {
    kargerStein: /*#__PURE__*/ m$1(function() {
        var e = this, r = /*#__PURE__*/ this.byGroup(), a = r.nodes, n = r.edges;
        n.unmergeBy(function(N) {
            return N.isLoop();
        });
        var i = a.length, s = n.length, o = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ Math.pow(Math.log(i) / Math.LN2, 2)), l = /*#__PURE__*/ Math.floor(i / jv);
        if (i < 2) {
            $e("At least 2 nodes are required for Karger-Stein algorithm");
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
        for(var d = 1 / 0, g = [], h = new Array(i), m = new Array(i), y = new Array(i), p = /*#__PURE__*/ m$1(function($, H) {
            for(var q = 0; q < i; q++)H[q] = $[q];
        }, "copyNodesMap"), b1 = 0; b1 <= o; b1++){
            for(var w = 0; w < i; w++)m[w] = w;
            var x = /*#__PURE__*/ Wn(m, /*#__PURE__*/ u.slice(), i, l), S = /*#__PURE__*/ x.slice();
            p(m, y);
            var T = /*#__PURE__*/ Wn(m, x, l, 2), E = /*#__PURE__*/ Wn(y, S, l, 2);
            T.length <= E.length && T.length < d ? (d = T.length, g = T, p(m, h)) : E.length <= T.length && E.length < d && (d = E.length, g = E, p(y, h));
        }
        for(var D = /*#__PURE__*/ this.spawn(/*#__PURE__*/ g.map(function(N) {
            return n[N[0]];
        })), C = /*#__PURE__*/ this.spawn(), B = /*#__PURE__*/ this.spawn(), A = h[0], P = 0; P < h.length; P++){
            var M = h[P], R = a[P];
            M === A ? C.merge(R) : B.merge(R);
        }
        var I = /*#__PURE__*/ m$1(function($) {
            var H = /*#__PURE__*/ e.spawn();
            return $.forEach(function(q) {
                H.merge(q), q.connectedEdges().forEach(function(K) {
                    e.contains(K) && !D.contains(K) && H.merge(K);
                });
            }), H;
        }, "constructComponent"), L = [
            /*#__PURE__*/ I(C),
            /*#__PURE__*/ I(B)
        ], O = {
            cut: D,
            components: L,
            partition1: C,
            partition2: B
        };
        return O;
    }, "kargerStein")
}, rf = /*#__PURE__*/ m$1(function(e) {
    return {
        x: e.x,
        y: e.y
    };
}, "copyPosition"), Dn = /*#__PURE__*/ m$1(function(e, r, a) {
    return {
        x: e.x * r + a.x,
        y: e.y * r + a.y
    };
}, "modelToRenderedPosition"), No = /*#__PURE__*/ m$1(function(e, r, a) {
    return {
        x: (e.x - a.x) / r,
        y: (e.y - a.y) / r
    };
}, "renderedToModelPosition"), Lr = /*#__PURE__*/ m$1(function(e) {
    return {
        x: e[0],
        y: e[1]
    };
}, "array2point"), af = /*#__PURE__*/ m$1(function(e) {
    for(var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = r; i < a; i++){
        var s = e[i];
        isFinite(s) && (n = /*#__PURE__*/ Math.min(s, n));
    }
    return n;
}, "min"), nf = /*#__PURE__*/ m$1(function(e) {
    for(var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = r; i < a; i++){
        var s = e[i];
        isFinite(s) && (n = /*#__PURE__*/ Math.max(s, n));
    }
    return n;
}, "max"), sf = /*#__PURE__*/ m$1(function(e) {
    for(var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = r; s < a; s++){
        var o = e[s];
        isFinite(o) && (n += o, i++);
    }
    return n / i;
}, "mean"), of = /*#__PURE__*/ m$1(function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
    n ? e = /*#__PURE__*/ e.slice(r, a) : (a < e.length && e.splice(a, e.length - a), r > 0 && e.splice(0, r));
    for(var o = 0, l = e.length - 1; l >= 0; l--){
        var u = e[l];
        s ? isFinite(u) || (e[l] = -1 / 0, o++) : e.splice(l, 1);
    }
    i && e.sort(function(d, g) {
        return d - g;
    });
    var f = e.length, c = /*#__PURE__*/ Math.floor(f / 2);
    return f % 2 !== 0 ? e[c + 1 + o] : (e[c - 1 + o] + e[c + o]) / 2;
}, "median"), uf = /*#__PURE__*/ m$1(function(e) {
    return Math.PI * e / 180;
}, "deg2rad"), Ka = /*#__PURE__*/ m$1(function(e, r) {
    return Math.atan2(r, e) - Math.PI / 2;
}, "getAngleFromDisp"), ki = Math.log2 || function(t) {
    return Math.log(t) / Math.log(2);
}, zo = /*#__PURE__*/ m$1(function(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0;
}, "signum"), wr = /*#__PURE__*/ m$1(function(e, r) {
    return Math.sqrt(/*#__PURE__*/ hr(e, r));
}, "dist"), hr = /*#__PURE__*/ m$1(function(e, r) {
    var a = r.x - e.x, n = r.y - e.y;
    return a * a + n * n;
}, "sqdist"), lf = /*#__PURE__*/ m$1(function(e) {
    for(var r = e.length, a = 0, n = 0; n < r; n++)a += e[n];
    for(var i = 0; i < r; i++)e[i] = e[i] / a;
    return e;
}, "inPlaceSumNormalize"), je = /*#__PURE__*/ m$1(function(e, r, a, n) {
    return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * r + n * n * a;
}, "qbezierAt"), Or = /*#__PURE__*/ m$1(function(e, r, a, n) {
    return {
        x: /*#__PURE__*/ je(e.x, r.x, a.x, n),
        y: /*#__PURE__*/ je(e.y, r.y, a.y, n)
    };
}, "qbezierPtAt"), vf = /*#__PURE__*/ m$1(function(e, r, a, n) {
    var i = {
        x: r.x - e.x,
        y: r.y - e.y
    }, s = /*#__PURE__*/ wr(e, r), o = {
        x: i.x / s,
        y: i.y / s
    };
    return a = a ?? 0, n = n ?? a * s, {
        x: e.x + o.x * n,
        y: e.y + o.y * n
    };
}, "lineAt"), Ea = /*#__PURE__*/ m$1(function(e, r, a) {
    return Math.max(e, /*#__PURE__*/ Math.min(a, r));
}, "bound"), yt = /*#__PURE__*/ m$1(function(e) {
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
}, "makeBoundingBox"), ff = /*#__PURE__*/ m$1(function(e) {
    return {
        x1: e.x1,
        x2: e.x2,
        w: e.w,
        y1: e.y1,
        y2: e.y2,
        h: e.h
    };
}, "copyBoundingBox"), cf = /*#__PURE__*/ m$1(function(e) {
    e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, "clearBoundingBox"), df = /*#__PURE__*/ m$1(function(e, r, a) {
    return {
        x1: e.x1 + r,
        x2: e.x2 + r,
        y1: e.y1 + a,
        y2: e.y2 + a,
        w: e.w,
        h: e.h
    };
}, "shiftBoundingBox"), Fo = /*#__PURE__*/ m$1(function(e, r) {
    e.x1 = /*#__PURE__*/ Math.min(e.x1, r.x1), e.x2 = /*#__PURE__*/ Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = /*#__PURE__*/ Math.min(e.y1, r.y1), e.y2 = /*#__PURE__*/ Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
}, "updateBoundingBox"), hf = /*#__PURE__*/ m$1(function(e, r, a) {
    e.x1 = /*#__PURE__*/ Math.min(e.x1, r), e.x2 = /*#__PURE__*/ Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = /*#__PURE__*/ Math.min(e.y1, a), e.y2 = /*#__PURE__*/ Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, "expandBoundingBoxByPoint"), tn = /*#__PURE__*/ m$1(function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, "expandBoundingBox"), rn = /*#__PURE__*/ m$1(function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [
        0
    ], a, n, i, s;
    if (r.length === 1) a = n = i = s = r[0];
    else if (r.length === 2) a = i = r[0], s = n = r[1];
    else if (r.length === 4) {
        var o = /*#__PURE__*/ We(r, 4);
        a = o[0], n = o[1], i = o[2], s = o[3];
    }
    return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, "expandBoundingBoxSides"), is = /*#__PURE__*/ m$1(function(e, r) {
    e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, "assignBoundingBox"), Pi = /*#__PURE__*/ m$1(function(e, r) {
    return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
}, "boundingBoxesIntersect"), qr = /*#__PURE__*/ m$1(function(e, r, a) {
    return e.x1 <= r && r <= e.x2 && e.y1 <= a && a <= e.y2;
}, "inBoundingBox"), gf = /*#__PURE__*/ m$1(function(e, r) {
    return qr(e, r.x, r.y);
}, "pointInBoundingBox"), Vo = /*#__PURE__*/ m$1(function(e, r) {
    return qr(e, r.x1, r.y1) && qr(e, r.x2, r.y2);
}, "boundingBoxInBoundingBox"), qo = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o) {
    var l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", u = l === "auto" ? xr(i, s) : l, f = i / 2, c = s / 2;
    u = /*#__PURE__*/ Math.min(u, f, c);
    var d = u !== f, g = u !== c, h;
    if (d) {
        var m = a - f + u - o, y = n - c - o, p = a + f - u + o, b1 = y;
        if (h = /*#__PURE__*/ jt(e, r, a, n, m, y, p, b1, false), h.length > 0) return h;
    }
    if (g) {
        var w = a + f + o, x = n - c + u - o, S = w, T = n + c - u + o;
        if (h = /*#__PURE__*/ jt(e, r, a, n, w, x, S, T, false), h.length > 0) return h;
    }
    if (d) {
        var E = a - f + u - o, D = n + c + o, C = a + f - u + o, B = D;
        if (h = /*#__PURE__*/ jt(e, r, a, n, E, D, C, B, false), h.length > 0) return h;
    }
    if (g) {
        var A = a - f - o, P = n - c + u - o, M = A, R = n + c - u + o;
        if (h = /*#__PURE__*/ jt(e, r, a, n, A, P, M, R, false), h.length > 0) return h;
    }
    var I;
    {
        var L = a - f + u, O = n - c + u;
        if (I = /*#__PURE__*/ fa(e, r, a, n, L, O, u + o), I.length > 0 && I[0] <= L && I[1] <= O) return [
            I[0],
            I[1]
        ];
    }
    {
        var N = a + f - u, $ = n - c + u;
        if (I = /*#__PURE__*/ fa(e, r, a, n, N, $, u + o), I.length > 0 && I[0] >= N && I[1] <= $) return [
            I[0],
            I[1]
        ];
    }
    {
        var H = a + f - u, q = n + c - u;
        if (I = /*#__PURE__*/ fa(e, r, a, n, H, q, u + o), I.length > 0 && I[0] >= H && I[1] >= q) return [
            I[0],
            I[1]
        ];
    }
    {
        var K = a - f + u, Y = n + c - u;
        if (I = /*#__PURE__*/ fa(e, r, a, n, K, Y, u + o), I.length > 0 && I[0] <= K && I[1] >= Y) return [
            I[0],
            I[1]
        ];
    }
    return [];
}, "roundRectangleIntersectLine"), pf = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o) {
    var l = o, u = /*#__PURE__*/ Math.min(a, i), f = /*#__PURE__*/ Math.max(a, i), c = /*#__PURE__*/ Math.min(n, s), d = /*#__PURE__*/ Math.max(n, s);
    return u - l <= e && e <= f + l && c - l <= r && r <= d + l;
}, "inLineVicinity"), yf = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l, u) {
    var f = {
        x1: Math.min(a, o, i) - u,
        x2: Math.max(a, o, i) + u,
        y1: Math.min(n, l, s) - u,
        y2: Math.max(n, l, s) + u
    };
    return !(e < f.x1 || e > f.x2 || r < f.y1 || r > f.y2);
}, "inBezierVicinity"), mf = /*#__PURE__*/ m$1(function(e, r, a, n) {
    a -= n;
    var i = r * r - 4 * e * a;
    if (i < 0) return [];
    var s = /*#__PURE__*/ Math.sqrt(i), o = 2 * e, l = (-r + s) / o, u = (-r - s) / o;
    return [
        l,
        u
    ];
}, "solveQuadratic"), bf = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    var s = 1e-5;
    e === 0 && (e = s), r /= e, a /= e, n /= e;
    var o, l, u, f, c, d, g, h;
    if (l = (3 * a - r * r) / 9, u = -(27 * n) + r * (9 * a - 2 * (r * r)), u /= 54, o = l * l * l + u * u, i[1] = 0, g = r / 3, o > 0) {
        c = u + Math.sqrt(o), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), d = u - Math.sqrt(o), d = d < 0 ? -Math.pow(-d, 1 / 3) : Math.pow(d, 1 / 3), i[0] = -g + c + d, g += (c + d) / 2, i[4] = i[2] = -g, g = Math.sqrt(3) * (-d + c) / 2, i[3] = g, i[5] = -g;
        return;
    }
    if (i[5] = i[3] = 0, o === 0) {
        h = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), i[0] = -g + 2 * h, i[4] = i[2] = -(h + g);
        return;
    }
    l = -l, f = l * l * l, f = /*#__PURE__*/ Math.acos(u / Math.sqrt(f)), h = 2 * Math.sqrt(l), i[0] = -g + h * Math.cos(f / 3), i[2] = -g + h * Math.cos((f + 2 * Math.PI) / 3), i[4] = -g + h * Math.cos((f + 4 * Math.PI) / 3);
}, "solveCubic"), wf = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
    var u = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * l + 4 * s * s - 4 * s * l + l * l, f = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * l - 6 * s * s + 3 * s * l, c = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * l - n * r + 2 * s * s + 2 * s * r - l * r, d = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * r - s * r, g = [];
    bf(u, f, c, d, g);
    for(var h = 1e-7, m = [], y = 0; y < 6; y += 2)Math.abs(g[y + 1]) < h && g[y] >= 0 && g[y] <= 1 && m.push(g[y]);
    m.push(1), m.push(0);
    for(var p = -1, b1, w, x, S = 0; S < m.length; S++)b1 = Math.pow(1 - m[S], 2) * a + 2 * (1 - m[S]) * m[S] * i + m[S] * m[S] * o, w = Math.pow(1 - m[S], 2) * n + 2 * (1 - m[S]) * m[S] * s + m[S] * m[S] * l, x = Math.pow(b1 - e, 2) + Math.pow(w - r, 2), p >= 0 ? x < p && (p = x) : p = x;
    return p;
}, "sqdistToQuadraticBezier"), xf = /*#__PURE__*/ m$1(function(e, r, a, n, i, s) {
    var o = [
        e - a,
        r - n
    ], l = [
        i - a,
        s - n
    ], u = l[0] * l[0] + l[1] * l[1], f = o[0] * o[0] + o[1] * o[1], c = o[0] * l[0] + o[1] * l[1], d = c * c / u;
    return c < 0 ? f : d > u ? (e - i) * (e - i) + (r - s) * (r - s) : f - d;
}, "sqdistToFiniteLine"), pt = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n, i, s, o, l, u = 0, f = 0; f < a.length / 2; f++)if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e)) if (n >= e && e >= s || n <= e && e <= s) l = (e - n) / (s - n) * (o - i) + i, l > r && u++;
    else continue;
    return u % 2 !== 0;
}, "pointInsidePolygonPoints"), Ut = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l, u) {
    var f = new Array(a.length), c;
    l[0] != null ? (c = /*#__PURE__*/ Math.atan(l[1] / l[0]), l[0] < 0 ? c = c + Math.PI / 2 : c = -c - Math.PI / 2) : c = l;
    for(var d = /*#__PURE__*/ Math.cos(-c), g = /*#__PURE__*/ Math.sin(-c), h = 0; h < f.length / 2; h++)f[h * 2] = s / 2 * (a[h * 2] * d - a[h * 2 + 1] * g), f[h * 2 + 1] = o / 2 * (a[h * 2 + 1] * d + a[h * 2] * g), f[h * 2] += n, f[h * 2 + 1] += i;
    var m;
    if (u > 0) {
        var y = /*#__PURE__*/ gn(f, -u);
        m = /*#__PURE__*/ hn(y);
    } else m = f;
    return pt(e, r, m);
}, "pointInsidePolygon"), Ef = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
    for(var u = new Array(a.length * 2), f = 0; f < l.length; f++){
        var c = l[f];
        u[f * 4 + 0] = c.startX, u[f * 4 + 1] = c.startY, u[f * 4 + 2] = c.stopX, u[f * 4 + 3] = c.stopY;
        var d = Math.pow(c.cx - e, 2) + Math.pow(c.cy - r, 2);
        if (d <= Math.pow(c.radius, 2)) return true;
    }
    return pt(e, r, u);
}, "pointInsideRoundPolygon"), hn = /*#__PURE__*/ m$1(function(e) {
    for(var r = new Array(e.length / 2), a, n, i, s, o, l, u, f, c = 0; c < e.length / 4; c++){
        a = e[c * 4], n = e[c * 4 + 1], i = e[c * 4 + 2], s = e[c * 4 + 3], c < e.length / 4 - 1 ? (o = e[(c + 1) * 4], l = e[(c + 1) * 4 + 1], u = e[(c + 1) * 4 + 2], f = e[(c + 1) * 4 + 3]) : (o = e[0], l = e[1], u = e[2], f = e[3]);
        var d = /*#__PURE__*/ jt(a, n, i, s, o, l, u, f, true);
        r[c * 2] = d[0], r[c * 2 + 1] = d[1];
    }
    return r;
}, "joinLines"), gn = /*#__PURE__*/ m$1(function(e, r) {
    for(var a = new Array(e.length * 2), n, i, s, o, l = 0; l < e.length / 2; l++){
        n = e[l * 2], i = e[l * 2 + 1], l < e.length / 2 - 1 ? (s = e[(l + 1) * 2], o = e[(l + 1) * 2 + 1]) : (s = e[0], o = e[1]);
        var u = o - i, f = -(s - n), c = /*#__PURE__*/ Math.sqrt(u * u + f * f), d = u / c, g = f / c;
        a[l * 4] = n + d * r, a[l * 4 + 1] = i + g * r, a[l * 4 + 2] = s + d * r, a[l * 4 + 3] = o + g * r;
    }
    return a;
}, "expandPolygon"), Tf = /*#__PURE__*/ m$1(function(e, r, a, n, i, s) {
    var o = a - e, l = n - r;
    o /= i, l /= s;
    var u = /*#__PURE__*/ Math.sqrt(o * o + l * l), f = u - 1;
    if (f < 0) return [];
    var c = f / u;
    return [
        (a - e) * c + e,
        (n - r) * c + r
    ];
}, "intersectLineEllipse"), mr = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o) {
    return e -= i, r -= s, e /= a / 2 + o, r /= n / 2 + o, e * e + r * r <= 1;
}, "checkInEllipse"), fa = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o) {
    var l = [
        a - e,
        n - r
    ], u = [
        e - i,
        r - s
    ], f = l[0] * l[0] + l[1] * l[1], c = 2 * (u[0] * l[0] + u[1] * l[1]), d = u[0] * u[0] + u[1] * u[1] - o * o, g = c * c - 4 * f * d;
    if (g < 0) return [];
    var h = (-c + Math.sqrt(g)) / (2 * f), m = (-c - Math.sqrt(g)) / (2 * f), y = /*#__PURE__*/ Math.min(h, m), p = /*#__PURE__*/ Math.max(h, m), b1 = [];
    if (y >= 0 && y <= 1 && b1.push(y), p >= 0 && p <= 1 && b1.push(p), b1.length === 0) return [];
    var w = b1[0] * l[0] + e, x = b1[0] * l[1] + r;
    if (b1.length > 1) {
        if (b1[0] == b1[1]) return [
            w,
            x
        ];
        var S = b1[1] * l[0] + e, T = b1[1] * l[1] + r;
        return [
            w,
            x,
            S,
            T
        ];
    } else return [
        w,
        x
    ];
}, "intersectLineCircle"), Hn = /*#__PURE__*/ m$1(function(e, r, a) {
    return r <= e && e <= a || a <= e && e <= r ? e : e <= r && r <= a || a <= r && r <= e ? r : a;
}, "midOfThree"), jt = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l, u) {
    var f = e - i, c = a - e, d = o - i, g = r - s, h = n - r, m = l - s, y = d * g - m * f, p = c * g - h * f, b1 = m * c - d * h;
    if (b1 !== 0) {
        var w = y / b1, x = p / b1, S = .001, T = 0 - S, E = 1 + S;
        return T <= w && w <= E && T <= x && x <= E ? [
            e + w * c,
            r + w * h
        ] : u ? [
            e + w * c,
            r + w * h
        ] : [];
    } else return y === 0 || p === 0 ? Hn(e, a, o) === o ? [
        o,
        l
    ] : Hn(e, a, i) === i ? [
        i,
        s
    ] : Hn(i, o, a) === a ? [
        a,
        n
    ] : [] : [];
}, "finiteLinesIntersect"), Ta = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
    var u = [], f, c = new Array(a.length), d = true;
    s == null && (d = false);
    var g;
    if (d) {
        for(var h = 0; h < c.length / 2; h++)c[h * 2] = a[h * 2] * s + n, c[h * 2 + 1] = a[h * 2 + 1] * o + i;
        if (l > 0) {
            var m = /*#__PURE__*/ gn(c, -l);
            g = /*#__PURE__*/ hn(m);
        } else g = c;
    } else g = a;
    for(var y, p, b1, w, x = 0; x < g.length / 2; x++)y = g[x * 2], p = g[x * 2 + 1], x < g.length / 2 - 1 ? (b1 = g[(x + 1) * 2], w = g[(x + 1) * 2 + 1]) : (b1 = g[0], w = g[1]), f = /*#__PURE__*/ jt(e, r, n, i, y, p, b1, w), f.length !== 0 && u.push(f[0], f[1]);
    return u;
}, "polygonIntersectLine"), Cf = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l, u) {
    var f = [], c, d = new Array(a.length * 2);
    u.forEach(function(b1, w) {
        w === 0 ? (d[d.length - 2] = b1.startX, d[d.length - 1] = b1.startY) : (d[w * 4 - 2] = b1.startX, d[w * 4 - 1] = b1.startY), d[w * 4] = b1.stopX, d[w * 4 + 1] = b1.stopY, c = /*#__PURE__*/ fa(e, r, n, i, b1.cx, b1.cy, b1.radius), c.length !== 0 && f.push(c[0], c[1]);
    });
    for(var g = 0; g < d.length / 4; g++)c = /*#__PURE__*/ jt(e, r, n, i, d[g * 4], d[g * 4 + 1], d[g * 4 + 2], d[g * 4 + 3], false), c.length !== 0 && f.push(c[0], c[1]);
    if (f.length > 2) {
        for(var h = [
            f[0],
            f[1]
        ], m = Math.pow(h[0] - e, 2) + Math.pow(h[1] - r, 2), y = 1; y < f.length / 2; y++){
            var p = Math.pow(f[y * 2] - e, 2) + Math.pow(f[y * 2 + 1] - r, 2);
            p <= m && (h[0] = f[y * 2], h[1] = f[y * 2 + 1], m = p);
        }
        return h;
    }
    return f;
}, "roundPolygonIntersectLine"), Ga = /*#__PURE__*/ m$1(function(e, r, a) {
    var n = [
        e[0] - r[0],
        e[1] - r[1]
    ], i = /*#__PURE__*/ Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
    return s < 0 && (s = 1e-5), [
        r[0] + s * n[0],
        r[1] + s * n[1]
    ];
}, "shortenIntersection"), dt = /*#__PURE__*/ m$1(function(e, r) {
    var a = /*#__PURE__*/ ii(e, r);
    return a = /*#__PURE__*/ $o(a), a;
}, "generateUnitNgonPointsFitToSquare"), $o = /*#__PURE__*/ m$1(function(e) {
    for(var r, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, l = -1 / 0, u = 0; u < n; u++)r = e[2 * u], a = e[2 * u + 1], i = /*#__PURE__*/ Math.min(i, r), o = /*#__PURE__*/ Math.max(o, r), s = /*#__PURE__*/ Math.min(s, a), l = /*#__PURE__*/ Math.max(l, a);
    for(var f = 2 / (o - i), c = 2 / (l - s), d = 0; d < n; d++)r = e[2 * d] = e[2 * d] * f, a = e[2 * d + 1] = e[2 * d + 1] * c, i = /*#__PURE__*/ Math.min(i, r), o = /*#__PURE__*/ Math.max(o, r), s = /*#__PURE__*/ Math.min(s, a), l = /*#__PURE__*/ Math.max(l, a);
    if (s < -1) for(var g = 0; g < n; g++)a = e[2 * g + 1] = e[2 * g + 1] + (-1 - s);
    return e;
}, "fitPolygonToSquare"), ii = /*#__PURE__*/ m$1(function(e, r) {
    var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
    n += r;
    for(var i = new Array(e * 2), s, o = 0; o < e; o++)s = o * a + n, i[2 * o] = /*#__PURE__*/ Math.cos(s), i[2 * o + 1] = /*#__PURE__*/ Math.sin(-s);
    return i;
}, "generateUnitNgonPoints"), xr = /*#__PURE__*/ m$1(function(e, r) {
    return Math.min(e / 4, r / 4, 8);
}, "getRoundRectangleRadius"), Ko = /*#__PURE__*/ m$1(function(e, r) {
    return Math.min(e / 10, r / 10, 8);
}, "getRoundPolygonRadius"), Bi = /*#__PURE__*/ m$1(function() {
    return 8;
}, "getCutRectangleCornerLength"), Sf = /*#__PURE__*/ m$1(function(e, r, a) {
    return [
        e - 2 * r + a,
        2 * (r - e),
        e
    ];
}, "bezierPtsToQuadCoeff"), si = /*#__PURE__*/ m$1(function(e, r) {
    return {
        heightOffset: /*#__PURE__*/ Math.min(15, .05 * r),
        widthOffset: /*#__PURE__*/ Math.min(100, .25 * e),
        ctrlPtOffsetPct: .05
    };
}, "getBarrelCurveConstants"), Df = /*#__PURE__*/ et({
    dampingFactor: .8,
    precision: 1e-6,
    iterations: 200,
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight")
}), kf = {
    pageRank: /*#__PURE__*/ m$1(function(e) {
        for(var r = /*#__PURE__*/ Df(e), a = r.dampingFactor, n = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, l = /*#__PURE__*/ this.byGroup(), u = l.nodes, f = l.edges, c = u.length, d = c * c, g = f.length, h = new Array(d), m = new Array(c), y = (1 - a) / c, p = 0; p < c; p++){
            for(var b1 = 0; b1 < c; b1++){
                var w = p * c + b1;
                h[w] = 0;
            }
            m[p] = 0;
        }
        for(var x = 0; x < g; x++){
            var S = f[x], T = /*#__PURE__*/ S.data("source"), E = /*#__PURE__*/ S.data("target");
            if (T !== E) {
                var D = /*#__PURE__*/ u.indexOfId(T), C = /*#__PURE__*/ u.indexOfId(E), B = /*#__PURE__*/ s(S), A = C * c + D;
                h[A] += B, m[D] += B;
            }
        }
        for(var P = 1 / c + y, M = 0; M < c; M++)if (m[M] === 0) for(var R = 0; R < c; R++){
            var I = R * c + M;
            h[I] = P;
        }
        else for(var L = 0; L < c; L++){
            var O = L * c + M;
            h[O] = h[O] / m[M] + y;
        }
        for(var N = new Array(c), $ = new Array(c), H, q = 0; q < c; q++)N[q] = 1;
        for(var K = 0; K < i; K++){
            for(var Y = 0; Y < c; Y++)$[Y] = 0;
            for(var Z = 0; Z < c; Z++)for(var J = 0; J < c; J++){
                var Q = Z * c + J;
                $[Z] += h[Q] * N[J];
            }
            lf($), H = N, N = $, $ = H;
            for(var ee = 0, re = 0; re < c; re++){
                var W = H[re] - N[re];
                ee += W * W;
            }
            if (ee < n) break;
        }
        var z = {
            rank: /*#__PURE__*/ m$1(function(te) {
                return te = o.collection(te)[0], N[u.indexOf(te)];
            }, "rank")
        };
        return z;
    }, "pageRank")
}, ss = /*#__PURE__*/ et({
    root: null,
    weight: /*#__PURE__*/ m$1(function(e) {
        return 1;
    }, "weight"),
    directed: false,
    alpha: 0
}), Nr = {
    degreeCentralityNormalized: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ ss(e);
        var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = a.length;
        if (e.directed) {
            for(var f = {}, c = {}, d = 0, g = 0, h = 0; h < n; h++){
                var m = a[h], y = /*#__PURE__*/ m.id();
                e.root = m;
                var p = /*#__PURE__*/ this.degreeCentrality(e);
                d < p.indegree && (d = p.indegree), g < p.outdegree && (g = p.outdegree), f[y] = p.indegree, c[y] = p.outdegree;
            }
            return {
                indegree: /*#__PURE__*/ m$1(function(w) {
                    return d == 0 ? 0 : (ce(w) && (w = /*#__PURE__*/ r.filter(w)), f[w.id()] / d);
                }, "indegree"),
                outdegree: /*#__PURE__*/ m$1(function(w) {
                    return g === 0 ? 0 : (ce(w) && (w = /*#__PURE__*/ r.filter(w)), c[w.id()] / g);
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
                    return s === 0 ? 0 : (ce(w) && (w = /*#__PURE__*/ r.filter(w)), i[w.id()] / s);
                }, "degree")
            };
        }
    }, "degreeCentralityNormalized"),
    degreeCentrality: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ ss(e);
        var r = /*#__PURE__*/ this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, l = n.alpha;
        if (i = r.collection(i)[0], o) {
            for(var g = /*#__PURE__*/ i.connectedEdges(), h = /*#__PURE__*/ g.filter(function(T) {
                return T.target().same(i) && a.has(T);
            }), m = /*#__PURE__*/ g.filter(function(T) {
                return T.source().same(i) && a.has(T);
            }), y = h.length, p = m.length, b1 = 0, w = 0, x = 0; x < h.length; x++)b1 += /*#__PURE__*/ s(h[x]);
            for(var S = 0; S < m.length; S++)w += /*#__PURE__*/ s(m[S]);
            return {
                indegree: Math.pow(y, 1 - l) * Math.pow(b1, l),
                outdegree: Math.pow(p, 1 - l) * Math.pow(w, l)
            };
        } else {
            for(var u = /*#__PURE__*/ i.connectedEdges().intersection(a), f = u.length, c = 0, d = 0; d < u.length; d++)c += /*#__PURE__*/ s(u[d]);
            return {
                degree: Math.pow(f, 1 - l) * Math.pow(c, l)
            };
        }
    }, "degreeCentrality")
};
Nr.dc = Nr.degreeCentrality;
Nr.dcn = Nr.degreeCentralityNormalised = Nr.degreeCentralityNormalized;
var os = /*#__PURE__*/ et({
    harmonic: true,
    weight: /*#__PURE__*/ m$1(function() {
        return 1;
    }, "weight"),
    directed: false,
    root: null
}), zr = {
    closenessCentralityNormalized: /*#__PURE__*/ m$1(function(e) {
        for(var r = /*#__PURE__*/ os(e), a = r.harmonic, n = r.weight, i = r.directed, s = /*#__PURE__*/ this.cy(), o = {}, l = 0, u = /*#__PURE__*/ this.nodes(), f = /*#__PURE__*/ this.floydWarshall({
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
            closeness: /*#__PURE__*/ m$1(function(p) {
                return l == 0 ? 0 : (ce(p) ? p = /*#__PURE__*/ s.filter(p)[0].id() : p = /*#__PURE__*/ p.id(), o[p] / l);
            }, "closeness")
        };
    }, "closenessCentralityNormalized"),
    closenessCentrality: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ os(e), a = r.root, n = r.weight, i = r.directed, s = r.harmonic;
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
zr.cc = zr.closenessCentrality;
zr.ccn = zr.closenessCentralityNormalised = zr.closenessCentralityNormalized;
var Pf = /*#__PURE__*/ et({
    weight: null,
    directed: false
}), oi = {
    betweennessCentrality: /*#__PURE__*/ m$1(function(e) {
        for(var r = /*#__PURE__*/ Pf(e), a = r.directed, n = r.weight, i = n != null, s = /*#__PURE__*/ this.cy(), o = /*#__PURE__*/ this.nodes(), l = {}, u = {}, f = 0, c = {
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
        for(var m = /*#__PURE__*/ m$1(function(w) {
            for(var x = /*#__PURE__*/ o[w].id(), S = [], T = {}, E = {}, D = {}, C = new La(function(J, Q) {
                return D[J] - D[Q];
            }), B = 0; B < o.length; B++){
                var A = /*#__PURE__*/ o[B].id();
                T[A] = [], E[A] = 0, D[A] = 1 / 0;
            }
            for(E[x] = 1, D[x] = 0, C.push(x); !C.empty();){
                var P = /*#__PURE__*/ C.pop();
                if (S.push(P), i) for(var M = 0; M < l[P].length; M++){
                    var R = l[P][M], I = /*#__PURE__*/ s.getElementById(P), L = void 0;
                    I.edgesTo(R).length > 0 ? L = I.edgesTo(R)[0] : L = R.edgesTo(I)[0];
                    var O = /*#__PURE__*/ n(L);
                    R = /*#__PURE__*/ R.id(), D[R] > D[P] + O && (D[R] = D[P] + O, C.nodes.indexOf(R) < 0 ? C.push(R) : C.updateItem(R), E[R] = 0, T[R] = []), D[R] == D[P] + O && (E[R] = E[R] + E[P], T[R].push(P));
                }
                else for(var N = 0; N < l[P].length; N++){
                    var $ = /*#__PURE__*/ l[P][N].id();
                    D[$] == 1 / 0 && (C.push($), D[$] = D[P] + 1), D[$] == D[P] + 1 && (E[$] = E[$] + E[P], T[$].push(P));
                }
            }
            for(var H = {}, q = 0; q < o.length; q++)H[o[q].id()] = 0;
            for(; S.length > 0;){
                for(var K = /*#__PURE__*/ S.pop(), Y = 0; Y < T[K].length; Y++){
                    var Z = T[K][Y];
                    H[Z] = H[Z] + E[Z] / E[K] * (1 + H[K]);
                }
                K != o[w].id() && c.set(K, c.get(K) + H[K]);
            }
        }, "_loop"), y = 0; y < o.length; y++)m(y);
        var p = {
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
        return p.betweennessNormalised = p.betweennessNormalized, p;
    }, "betweennessCentrality")
};
oi.bc = oi.betweennessCentrality;
var Bf = /*#__PURE__*/ et({
    expandFactor: 2,
    inflateFactor: 2,
    multFactor: 1,
    maxIterations: 20,
    attributes: [
        function(t) {
            return 1;
        }
    ]
}), Af = /*#__PURE__*/ m$1(function(e) {
    return Bf(e);
}, "setOptions"), Rf = /*#__PURE__*/ m$1(function(e, r) {
    for(var a = 0, n = 0; n < r.length; n++)a += /*#__PURE__*/ r[n](e);
    return a;
}, "getSimilarity"), Mf = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = 0; n < r; n++)e[n * r + n] = a;
}, "addLoops"), Go = /*#__PURE__*/ m$1(function(e, r) {
    for(var a, n = 0; n < r; n++){
        a = 0;
        for(var i = 0; i < r; i++)a += e[i * r + n];
        for(var s = 0; s < r; s++)e[s * r + n] = e[s * r + n] / a;
    }
}, "normalize"), Lf = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = new Array(a * a), i = 0; i < a; i++){
        for(var s = 0; s < a; s++)n[i * a + s] = 0;
        for(var o = 0; o < a; o++)for(var l = 0; l < a; l++)n[i * a + l] += e[i * a + o] * r[o * a + l];
    }
    return n;
}, "mmult"), If = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = /*#__PURE__*/ e.slice(0), i = 1; i < a; i++)e = /*#__PURE__*/ Lf(e, n, r);
    return e;
}, "expand"), Of = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = new Array(r * r), i = 0; i < r * r; i++)n[i] = /*#__PURE__*/ Math.pow(e[i], a);
    return Go(n, r), n;
}, "inflate"), Nf = /*#__PURE__*/ m$1(function(e, r, a, n) {
    for(var i = 0; i < a; i++){
        var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(r[i] * Math.pow(10, n)) / Math.pow(10, n);
        if (s !== o) return false;
    }
    return true;
}, "hasConverged"), zf = /*#__PURE__*/ m$1(function(e, r, a, n) {
    for(var i = [], s = 0; s < r; s++){
        for(var o = [], l = 0; l < r; l++)Math.round(e[s * r + l] * 1e3) / 1e3 > 0 && o.push(a[l]);
        o.length !== 0 && i.push(/*#__PURE__*/ n.collection(o));
    }
    return i;
}, "assign"), Ff = /*#__PURE__*/ m$1(function(e, r) {
    for(var a = 0; a < e.length; a++)if (!r[a] || e[a].id() !== r[a].id()) return false;
    return true;
}, "isDuplicate"), Vf = /*#__PURE__*/ m$1(function(e) {
    for(var r = 0; r < e.length; r++)for(var a = 0; a < e.length; a++)r != a && Ff(e[r], e[a]) && e.splice(a, 1);
    return e;
}, "removeDuplicates"), us = /*#__PURE__*/ m$1(function(e) {
    for(var r = /*#__PURE__*/ this.nodes(), a = /*#__PURE__*/ this.edges(), n = /*#__PURE__*/ this.cy(), i = /*#__PURE__*/ Af(e), s = {}, o = 0; o < r.length; o++)s[r[o].id()] = o;
    for(var l = r.length, u = l * l, f = new Array(u), c, d = 0; d < u; d++)f[d] = 0;
    for(var g = 0; g < a.length; g++){
        var h = a[g], m = s[h.source().id()], y = s[h.target().id()], p = /*#__PURE__*/ Rf(h, i.attributes);
        f[m * l + y] += p, f[y * l + m] += p;
    }
    Mf(f, l, i.multFactor), Go(f, l);
    for(var b1 = true, w = 0; b1 && w < i.maxIterations;)b1 = false, c = /*#__PURE__*/ If(f, l, i.expandFactor), f = /*#__PURE__*/ Of(c, l, i.inflateFactor), Nf(f, c, u, 4) || (b1 = true), w++;
    var x = /*#__PURE__*/ zf(f, l, r, n);
    return x = /*#__PURE__*/ Vf(x), x;
}, "markovClustering"), qf = {
    markovClustering: us,
    mcl: us
}, $f = /*#__PURE__*/ m$1(function(e) {
    return e;
}, "identity"), Wo = /*#__PURE__*/ m$1(function(e, r) {
    return Math.abs(r - e);
}, "absDiff"), ls = /*#__PURE__*/ m$1(function(e, r, a) {
    return e + Wo(r, a);
}, "addAbsDiff"), vs = /*#__PURE__*/ m$1(function(e, r, a) {
    return e + Math.pow(a - r, 2);
}, "addSquaredDiff"), Kf = /*#__PURE__*/ m$1(function(e) {
    return Math.sqrt(e);
}, "sqrt"), Gf = /*#__PURE__*/ m$1(function(e, r, a) {
    return Math.max(e, /*#__PURE__*/ Wo(r, a));
}, "maxAbsDiff"), aa = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    for(var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : $f, o = n, l, u, f = 0; f < e; f++)l = /*#__PURE__*/ r(f), u = /*#__PURE__*/ a(f), o = /*#__PURE__*/ i(o, l, u);
    return s(o);
}, "getDistance"), $r = {
    euclidean: /*#__PURE__*/ m$1(function(e, r, a) {
        return e >= 2 ? aa(e, r, a, 0, vs, Kf) : aa(e, r, a, 0, ls);
    }, "euclidean"),
    squaredEuclidean: /*#__PURE__*/ m$1(function(e, r, a) {
        return aa(e, r, a, 0, vs);
    }, "squaredEuclidean"),
    manhattan: /*#__PURE__*/ m$1(function(e, r, a) {
        return aa(e, r, a, 0, ls);
    }, "manhattan"),
    max: /*#__PURE__*/ m$1(function(e, r, a) {
        return aa(e, r, a, -1 / 0, Gf);
    }, "max")
};
$r["squared-euclidean"] = $r.squaredEuclidean;
$r.squaredeuclidean = $r.squaredEuclidean;
function kn(t, e, r, a, n, i) {
    var s;
    return Ke(t) ? s = t : s = $r[t] || $r.euclidean, e === 0 && Ke(t) ? s(n, i) : s(e, r, a, n, i);
}
m$1(kn, "clusteringDistance");
var Wf = /*#__PURE__*/ et({
    k: 2,
    m: 2,
    sensitivityThreshold: 1e-4,
    distance: "euclidean",
    maxIterations: 10,
    attributes: [],
    testMode: false,
    testCentroids: null
}), Ai = /*#__PURE__*/ m$1(function(e) {
    return Wf(e);
}, "setOptions"), pn = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    var s = i !== "kMedoids", o = s ? function(c) {
        return a[c];
    } : function(c) {
        return n[c](a);
    }, l = /*#__PURE__*/ m$1(function(d) {
        return n[d](r);
    }, "getQ"), u = a, f = r;
    return kn(e, n.length, o, l, u, f);
}, "getDist"), Un = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = a.length, i = new Array(n), s = new Array(n), o = new Array(r), l = null, u = 0; u < n; u++)i[u] = e.min(a[u]).value, s[u] = e.max(a[u]).value;
    for(var f = 0; f < r; f++){
        l = [];
        for(var c = 0; c < n; c++)l[c] = Math.random() * (s[c] - i[c]) + i[c];
        o[f] = l;
    }
    return o;
}, "randomCentroids"), Ho = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    for(var s = 1 / 0, o = 0, l = 0; l < r.length; l++){
        var u = /*#__PURE__*/ pn(a, e, r[l], n, i);
        u < s && (s = u, o = l);
    }
    return o;
}, "classify"), Uo = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = [], i = null, s = 0; s < r.length; s++)i = r[s], a[i.id()] === e && n.push(i);
    return n;
}, "buildCluster"), Hf = /*#__PURE__*/ m$1(function(e, r, a) {
    return Math.abs(r - e) <= a;
}, "haveValuesConverged"), Uf = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = 0; n < e.length; n++)for(var i = 0; i < e[n].length; i++){
        var s = /*#__PURE__*/ Math.abs(e[n][i] - r[n][i]);
        if (s > a) return false;
    }
    return true;
}, "haveMatricesConverged"), Xf = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = 0; n < a; n++)if (e === r[n]) return true;
    return false;
}, "seenBefore"), fs = /*#__PURE__*/ m$1(function(e, r) {
    var a = new Array(r);
    if (e.length < 50) for(var n = 0; n < r; n++){
        for(var i = e[Math.floor(Math.random() * e.length)]; Xf(i, a, n);)i = e[Math.floor(Math.random() * e.length)];
        a[n] = i;
    }
    else for(var s = 0; s < r; s++)a[s] = e[Math.floor(Math.random() * e.length)];
    return a;
}, "randomMedoids"), cs = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = 0, i = 0; i < r.length; i++)n += /*#__PURE__*/ pn("manhattan", r[i], e, a, "kMedoids");
    return n;
}, "findCost"), Yf = /*#__PURE__*/ m$1(function(e) {
    var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = null, i = /*#__PURE__*/ Ai(e), s = new Array(i.k), o = {}, l;
    i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, l = /*#__PURE__*/ Un(a, i.k, i.attributes)) : Ye(i.testCentroids) === "object" ? l = i.testCentroids : l = /*#__PURE__*/ Un(a, i.k, i.attributes) : l = /*#__PURE__*/ Un(a, i.k, i.attributes);
    for(var u = true, f = 0; u && f < i.maxIterations;){
        for(var c = 0; c < a.length; c++)n = a[c], o[n.id()] = /*#__PURE__*/ Ho(n, l, i.distance, i.attributes, "kMeans");
        u = false;
        for(var d = 0; d < i.k; d++){
            var g = /*#__PURE__*/ Uo(d, a, o);
            if (g.length !== 0) {
                for(var h = i.attributes.length, m = l[d], y = new Array(h), p = new Array(h), b1 = 0; b1 < h; b1++){
                    p[b1] = 0;
                    for(var w = 0; w < g.length; w++)n = g[w], p[b1] += /*#__PURE__*/ i.attributes[b1](n);
                    y[b1] = p[b1] / g.length, Hf(y[b1], m[b1], i.sensitivityThreshold) || (u = true);
                }
                l[d] = y, s[d] = /*#__PURE__*/ r.collection(g);
            }
        }
        f++;
    }
    return s;
}, "kMeans"), _f = /*#__PURE__*/ m$1(function(e) {
    var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = null, i = /*#__PURE__*/ Ai(e), s = new Array(i.k), o, l = {}, u, f = new Array(i.k);
    i.testMode ? typeof i.testCentroids == "number" || (Ye(i.testCentroids) === "object" ? o = i.testCentroids : o = /*#__PURE__*/ fs(a, i.k)) : o = /*#__PURE__*/ fs(a, i.k);
    for(var c = true, d = 0; c && d < i.maxIterations;){
        for(var g = 0; g < a.length; g++)n = a[g], l[n.id()] = /*#__PURE__*/ Ho(n, o, i.distance, i.attributes, "kMedoids");
        c = false;
        for(var h = 0; h < o.length; h++){
            var m = /*#__PURE__*/ Uo(h, a, l);
            if (m.length !== 0) {
                f[h] = /*#__PURE__*/ cs(o[h], m, i.attributes);
                for(var y = 0; y < m.length; y++)u = /*#__PURE__*/ cs(m[y], m, i.attributes), u < f[h] && (f[h] = u, o[h] = m[y], c = true);
                s[h] = /*#__PURE__*/ r.collection(m);
            }
        }
        d++;
    }
    return s;
}, "kMedoids"), Zf = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    for(var s, o, l = 0; l < r.length; l++)for(var u = 0; u < e.length; u++)n[l][u] = /*#__PURE__*/ Math.pow(a[l][u], i.m);
    for(var f = 0; f < e.length; f++)for(var c = 0; c < i.attributes.length; c++){
        s = 0, o = 0;
        for(var d = 0; d < r.length; d++)s += n[d][f] * i.attributes[c](r[d]), o += n[d][f];
        e[f][c] = s / o;
    }
}, "updateCentroids"), Qf = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    for(var s = 0; s < e.length; s++)r[s] = /*#__PURE__*/ e[s].slice();
    for(var o, l, u, f = 2 / (i.m - 1), c = 0; c < a.length; c++)for(var d = 0; d < n.length; d++){
        o = 0;
        for(var g = 0; g < a.length; g++)l = /*#__PURE__*/ pn(i.distance, n[d], a[c], i.attributes, "cmeans"), u = /*#__PURE__*/ pn(i.distance, n[d], a[g], i.attributes, "cmeans"), o += /*#__PURE__*/ Math.pow(l / u, f);
        e[d][c] = 1 / o;
    }
}, "updateMembership"), Jf = /*#__PURE__*/ m$1(function(e, r, a, n) {
    for(var i = new Array(a.k), s = 0; s < i.length; s++)i[s] = [];
    for(var o, l, u = 0; u < r.length; u++){
        o = -1 / 0, l = -1;
        for(var f = 0; f < r[0].length; f++)r[u][f] > o && (o = r[u][f], l = f);
        i[l].push(e[u]);
    }
    for(var c = 0; c < i.length; c++)i[c] = /*#__PURE__*/ n.collection(i[c]);
    return i;
}, "assign"), ds = /*#__PURE__*/ m$1(function(e) {
    var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = /*#__PURE__*/ Ai(e), i, s, o, l, u;
    l = new Array(a.length);
    for(var f = 0; f < a.length; f++)l[f] = new Array(n.k);
    o = new Array(a.length);
    for(var c = 0; c < a.length; c++)o[c] = new Array(n.k);
    for(var d = 0; d < a.length; d++){
        for(var g = 0, h = 0; h < n.k; h++)o[d][h] = /*#__PURE__*/ Math.random(), g += o[d][h];
        for(var m = 0; m < n.k; m++)o[d][m] = o[d][m] / g;
    }
    s = new Array(n.k);
    for(var y = 0; y < n.k; y++)s[y] = new Array(n.attributes.length);
    u = new Array(a.length);
    for(var p = 0; p < a.length; p++)u[p] = new Array(n.k);
    for(var b1 = true, w = 0; b1 && w < n.maxIterations;)b1 = false, Zf(s, a, o, u, n), Qf(o, l, s, a, n), Uf(o, l, n.sensitivityThreshold) || (b1 = true), w++;
    return i = /*#__PURE__*/ Jf(a, o, n, r), {
        clusters: i,
        degreeOfMembership: o
    };
}, "fuzzyCMeans"), jf = {
    kMeans: Yf,
    kMedoids: _f,
    fuzzyCMeans: ds,
    fcm: ds
}, ec = /*#__PURE__*/ et({
    distance: "euclidean",
    linkage: "min",
    mode: "threshold",
    threshold: 1 / 0,
    addDendrogram: false,
    dendrogramDepth: 0,
    attributes: []
}), tc = {
    single: "min",
    complete: "max"
}, rc = /*#__PURE__*/ m$1(function(e) {
    var r = /*#__PURE__*/ ec(e), a = tc[r.linkage];
    return a != null && (r.linkage = a), r;
}, "setOptions"), hs = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    for(var s = 0, o = 1 / 0, l, u = i.attributes, f = /*#__PURE__*/ m$1(function(C, B) {
        return kn(i.distance, u.length, function(A) {
            return u[A](C);
        }, function(A) {
            return u[A](B);
        }, C, B);
    }, "getDist"), c = 0; c < e.length; c++){
        var d = e[c].key, g = a[d][n[d]];
        g < o && (s = d, o = g);
    }
    if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1) return false;
    var h = r[s], m = r[n[s]], y;
    i.mode === "dendrogram" ? y = {
        left: h,
        right: m,
        key: h.key
    } : y = {
        value: /*#__PURE__*/ h.value.concat(m.value),
        key: h.key
    }, e[h.index] = y, e.splice(m.index, 1), r[h.key] = y;
    for(var p = 0; p < e.length; p++){
        var b1 = e[p];
        h.key === b1.key ? l = 1 / 0 : i.linkage === "min" ? (l = a[h.key][b1.key], a[h.key][b1.key] > a[m.key][b1.key] && (l = a[m.key][b1.key])) : i.linkage === "max" ? (l = a[h.key][b1.key], a[h.key][b1.key] < a[m.key][b1.key] && (l = a[m.key][b1.key])) : i.linkage === "mean" ? l = (a[h.key][b1.key] * h.size + a[m.key][b1.key] * m.size) / (h.size + m.size) : i.mode === "dendrogram" ? l = /*#__PURE__*/ f(b1.value, h.value) : l = /*#__PURE__*/ f(b1.value[0], h.value[0]), a[h.key][b1.key] = a[b1.key][h.key] = l;
    }
    for(var w = 0; w < e.length; w++){
        var x = e[w].key;
        if (n[x] === h.key || n[x] === m.key) {
            for(var S = x, T = 0; T < e.length; T++){
                var E = e[T].key;
                a[x][E] < a[x][S] && (S = E);
            }
            n[x] = S;
        }
        e[w].index = w;
    }
    return h.key = m.key = h.index = m.index = null, true;
}, "mergeClosest"), Wa = /*#__PURE__*/ m$1(function t(e, r, a) {
    e && (e.value ? r.push(e.value) : (e.left && t(e.left, r), e.right && t(e.right, r)));
}, "getAllChildren"), ac = /*#__PURE__*/ m$1(function t(e, r) {
    if (!e) return "";
    if (e.left && e.right) {
        var a = /*#__PURE__*/ t(e.left, r), n = /*#__PURE__*/ t(e.right, r), i = /*#__PURE__*/ r.add({
            group: "nodes",
            data: {
                id: a + "," + n
            }
        });
        return r.add({
            group: "edges",
            data: {
                source: a,
                target: /*#__PURE__*/ i.id()
            }
        }), r.add({
            group: "edges",
            data: {
                source: n,
                target: /*#__PURE__*/ i.id()
            }
        }), i.id();
    } else if (e.value) return e.value.id();
}, "buildDendrogram"), nc = /*#__PURE__*/ m$1(function t(e, r, a) {
    if (!e) return [];
    var n = [], i = [], s = [];
    return r === 0 ? (e.left && Wa(e.left, n), e.right && Wa(e.right, i), s = /*#__PURE__*/ n.concat(i), [
        /*#__PURE__*/ a.collection(s)
    ]) : r === 1 ? e.value ? [
        /*#__PURE__*/ a.collection(e.value)
    ] : (e.left && Wa(e.left, n), e.right && Wa(e.right, i), [
        /*#__PURE__*/ a.collection(n),
        /*#__PURE__*/ a.collection(i)
    ]) : e.value ? [
        /*#__PURE__*/ a.collection(e.value)
    ] : (e.left && (n = /*#__PURE__*/ t(e.left, r - 1, a)), e.right && (i = /*#__PURE__*/ t(e.right, r - 1, a)), n.concat(i));
}, "buildClustersFromTree"), gs = /*#__PURE__*/ m$1(function(e) {
    for(var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = /*#__PURE__*/ rc(e), i = n.attributes, s = /*#__PURE__*/ m$1(function(w, x) {
        return kn(n.distance, i.length, function(S) {
            return i[S](w);
        }, function(S) {
            return i[S](x);
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
    for(var y = /*#__PURE__*/ hs(o, f, l, u, n); y;)y = /*#__PURE__*/ hs(o, f, l, u, n);
    var p;
    return n.mode === "dendrogram" ? (p = /*#__PURE__*/ nc(o[0], n.dendrogramDepth, r), n.addDendrogram && ac(o[0], r)) : (p = new Array(o.length), o.forEach(function(b1, w) {
        b1.key = b1.index = null, p[w] = /*#__PURE__*/ r.collection(b1.value);
    })), p;
}, "hierarchicalClustering"), ic = {
    hierarchicalClustering: gs,
    hca: gs
}, sc = /*#__PURE__*/ et({
    distance: "euclidean",
    preference: "median",
    damping: .8,
    maxIterations: 1e3,
    minIterations: 100,
    attributes: []
}), oc = /*#__PURE__*/ m$1(function(e) {
    var r = e.damping, a = e.preference;
    .5 <= r && r < 1 || $e(/*#__PURE__*/ "Damping must range on [0.5, 1).  Got: ".concat(r));
    var n = [
        "median",
        "mean",
        "min",
        "max"
    ];
    return n.some(function(i) {
        return i === a;
    }) || ae(a) || $e(/*#__PURE__*/ "Preference must be one of [".concat(/*#__PURE__*/ n.map(function(i) {
        return "'".concat(i, "'");
    }).join(", "), "] or a number.  Got: ").concat(a)), sc(e);
}, "setOptions"), uc = /*#__PURE__*/ m$1(function(e, r, a, n) {
    var i = /*#__PURE__*/ m$1(function(o, l) {
        return n[l](o);
    }, "attr");
    return -kn(e, n.length, function(s) {
        return i(r, s);
    }, function(s) {
        return i(a, s);
    }, r, a);
}, "getSimilarity"), lc = /*#__PURE__*/ m$1(function(e, r) {
    var a = null;
    return r === "median" ? a = /*#__PURE__*/ of(e) : r === "mean" ? a = /*#__PURE__*/ sf(e) : r === "min" ? a = /*#__PURE__*/ af(e) : r === "max" ? a = /*#__PURE__*/ nf(e) : a = r, a;
}, "getPreference"), vc = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = [], i = 0; i < e; i++)r[i * e + i] + a[i * e + i] > 0 && n.push(i);
    return n;
}, "findExemplars"), ps = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = [], i = 0; i < e; i++){
        for(var s = -1, o = -1 / 0, l = 0; l < a.length; l++){
            var u = a[l];
            r[i * e + u] > o && (s = u, o = r[i * e + u]);
        }
        s > 0 && n.push(s);
    }
    for(var f = 0; f < a.length; f++)n[a[f]] = a[f];
    return n;
}, "assignClusters"), fc = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = /*#__PURE__*/ ps(e, r, a), i = 0; i < a.length; i++){
        for(var s = [], o = 0; o < n.length; o++)n[o] === a[i] && s.push(o);
        for(var l = -1, u = -1 / 0, f = 0; f < s.length; f++){
            for(var c = 0, d = 0; d < s.length; d++)c += r[s[d] * e + s[f]];
            c > u && (l = f, u = c);
        }
        a[i] = s[l];
    }
    return n = /*#__PURE__*/ ps(e, r, a), n;
}, "assign"), ys = /*#__PURE__*/ m$1(function(e) {
    for(var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ this.nodes(), n = /*#__PURE__*/ oc(e), i = {}, s = 0; s < a.length; s++)i[a[s].id()] = s;
    var o, l, u, f, c, d;
    o = a.length, l = o * o, u = new Array(l);
    for(var g = 0; g < l; g++)u[g] = -1 / 0;
    for(var h = 0; h < o; h++)for(var m = 0; m < o; m++)h !== m && (u[h * o + m] = /*#__PURE__*/ uc(n.distance, a[h], a[m], n.attributes));
    f = /*#__PURE__*/ lc(u, n.preference);
    for(var y = 0; y < o; y++)u[y * o + y] = f;
    c = new Array(l);
    for(var p = 0; p < l; p++)c[p] = 0;
    d = new Array(l);
    for(var b1 = 0; b1 < l; b1++)d[b1] = 0;
    for(var w = new Array(o), x = new Array(o), S = new Array(o), T = 0; T < o; T++)w[T] = 0, x[T] = 0, S[T] = 0;
    for(var E = new Array(o * n.minIterations), D = 0; D < E.length; D++)E[D] = 0;
    var C;
    for(C = 0; C < n.maxIterations; C++){
        for(var B = 0; B < o; B++){
            for(var A = -1 / 0, P = -1 / 0, M = -1, R = 0, I = 0; I < o; I++)w[I] = c[B * o + I], R = d[B * o + I] + u[B * o + I], R >= A ? (P = A, A = R, M = I) : R > P && (P = R);
            for(var L = 0; L < o; L++)c[B * o + L] = (1 - n.damping) * (u[B * o + L] - A) + n.damping * w[L];
            c[B * o + M] = (1 - n.damping) * (u[B * o + M] - P) + n.damping * w[M];
        }
        for(var O = 0; O < o; O++){
            for(var N = 0, $ = 0; $ < o; $++)w[$] = d[$ * o + O], x[$] = /*#__PURE__*/ Math.max(0, c[$ * o + O]), N += x[$];
            N -= x[O], x[O] = c[O * o + O], N += x[O];
            for(var H = 0; H < o; H++)d[H * o + O] = (1 - n.damping) * Math.min(0, N - x[H]) + n.damping * w[H];
            d[O * o + O] = (1 - n.damping) * (N - x[O]) + n.damping * w[O];
        }
        for(var q = 0, K = 0; K < o; K++){
            var Y = d[K * o + K] + c[K * o + K] > 0 ? 1 : 0;
            E[C % n.minIterations * o + K] = Y, q += Y;
        }
        if (q > 0 && (C >= n.minIterations - 1 || C == n.maxIterations - 1)) {
            for(var Z = 0, J = 0; J < o; J++){
                S[J] = 0;
                for(var Q = 0; Q < n.minIterations; Q++)S[J] += E[Q * o + J];
                (S[J] === 0 || S[J] === n.minIterations) && Z++;
            }
            if (Z === o) break;
        }
    }
    for(var ee = /*#__PURE__*/ vc(o, c, d), re = /*#__PURE__*/ fc(o, u, ee), W = {}, z = 0; z < ee.length; z++)W[ee[z]] = [];
    for(var U = 0; U < a.length; U++){
        var te = i[a[U].id()], se = re[te];
        se != null && W[se].push(a[U]);
    }
    for(var le = new Array(ee.length), Se = 0; Se < ee.length; Se++)le[Se] = /*#__PURE__*/ r.collection(W[ee[Se]]);
    return le;
}, "affinityPropagation"), cc = {
    affinityPropagation: ys,
    ap: ys
}, dc = /*#__PURE__*/ et({
    root: void 0,
    directed: false
}), hc = {
    hierholzer: /*#__PURE__*/ m$1(function(e) {
        if (!Pe(e)) {
            var r = arguments;
            e = {
                root: r[0],
                directed: r[1]
            };
        }
        var a = /*#__PURE__*/ dc(e), n = a.root, i = a.directed, s = this, o = false, l, u, f;
        n && (f = ce(n) ? this.filter(n)[0].id() : n[0].id());
        var c = {}, d = {};
        i ? s.forEach(function(b1) {
            var w = /*#__PURE__*/ b1.id();
            if (b1.isNode()) {
                var x = /*#__PURE__*/ b1.indegree(true), S = /*#__PURE__*/ b1.outdegree(true), T = x - S, E = S - x;
                T == 1 ? l ? o = true : l = w : E == 1 ? u ? o = true : u = w : (E > 1 || T > 1) && (o = true), c[w] = [], b1.outgoers().forEach(function(D) {
                    D.isEdge() && c[w].push(/*#__PURE__*/ D.id());
                });
            } else d[w] = [
                void 0,
                /*#__PURE__*/ b1.target().id()
            ];
        }) : s.forEach(function(b1) {
            var w = /*#__PURE__*/ b1.id();
            if (b1.isNode()) {
                var x = /*#__PURE__*/ b1.degree(true);
                x % 2 && (l ? u ? o = true : u = w : l = w), c[w] = [], b1.connectedEdges().forEach(function(S) {
                    return c[w].push(/*#__PURE__*/ S.id());
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
            for(var x = w, S = [
                w
            ], T, E, D; c[x].length;)T = /*#__PURE__*/ c[x].shift(), E = d[T][0], D = d[T][1], x != D ? (c[D] = /*#__PURE__*/ c[D].filter(function(C) {
                return C != T;
            }), x = D) : !i && x != E && (c[E] = /*#__PURE__*/ c[E].filter(function(C) {
                return C != T;
            }), x = E), S.unshift(T), S.unshift(x);
            return S;
        }, "walk"), m = [], y = [];
        for(y = /*#__PURE__*/ h(f); y.length != 1;)c[y[0]].length == 0 ? (m.unshift(/*#__PURE__*/ s.getElementById(/*#__PURE__*/ y.shift())), m.unshift(/*#__PURE__*/ s.getElementById(/*#__PURE__*/ y.shift()))) : y = /*#__PURE__*/ h(/*#__PURE__*/ y.shift()).concat(y);
        m.unshift(/*#__PURE__*/ s.getElementById(/*#__PURE__*/ y.shift()));
        for(var p in c)if (c[p].length) return g;
        return g.found = true, g.trail = /*#__PURE__*/ this.spawn(m, true), g;
    }, "hierholzer")
}, Ha = /*#__PURE__*/ m$1(function() {
    var e = this, r = {}, a = 0, n = 0, i = [], s = [], o = {}, l = /*#__PURE__*/ m$1(function(d, g) {
        for(var h = s.length - 1, m = [], y = /*#__PURE__*/ e.spawn(); s[h].x != d || s[h].y != g;)m.push(s.pop().edge), h--;
        m.push(s.pop().edge), m.forEach(function(p) {
            var b1 = /*#__PURE__*/ p.connectedNodes().intersection(e);
            y.merge(p), b1.forEach(function(w) {
                var x = /*#__PURE__*/ w.id(), S = /*#__PURE__*/ w.connectedEdges().intersection(e);
                y.merge(w), r[x].cutVertex ? y.merge(/*#__PURE__*/ S.filter(function(T) {
                    return T.isLoop();
                })) : y.merge(S);
            });
        }), i.push(y);
    }, "buildComponent"), u = /*#__PURE__*/ m$1(function c(d, g, h) {
        d === h && (n += 1), r[g] = {
            id: a,
            low: a++,
            cutVertex: false
        };
        var m = /*#__PURE__*/ e.getElementById(g).connectedEdges().intersection(e);
        if (m.size() === 0) i.push(/*#__PURE__*/ e.spawn(/*#__PURE__*/ e.getElementById(g)));
        else {
            var y, p, b1, w;
            m.forEach(function(x) {
                y = /*#__PURE__*/ x.source().id(), p = /*#__PURE__*/ x.target().id(), b1 = y === g ? p : y, b1 !== h && (w = /*#__PURE__*/ x.id(), o[w] || (o[w] = true, s.push({
                    x: g,
                    y: b1,
                    edge: x
                })), b1 in r ? r[g].low = /*#__PURE__*/ Math.min(r[g].low, r[b1].id) : (c(d, b1, g), r[g].low = /*#__PURE__*/ Math.min(r[g].low, r[b1].low), r[g].id <= r[b1].low && (r[g].cutVertex = true, l(g, b1))));
            });
        }
    }, "biconnectedSearch");
    e.forEach(function(c) {
        if (c.isNode()) {
            var d = /*#__PURE__*/ c.id();
            d in r || (n = 0, u(d, d), r[d].cutVertex = n > 1);
        }
    });
    var f = /*#__PURE__*/ Object.keys(r).filter(function(c) {
        return r[c].cutVertex;
    }).map(function(c) {
        return e.getElementById(c);
    });
    return {
        cut: /*#__PURE__*/ e.spawn(f),
        components: i
    };
}, "hopcroftTarjanBiconnected"), gc = {
    hopcroftTarjanBiconnected: Ha,
    htbc: Ha,
    htb: Ha,
    hopcroftTarjanBiconnectedComponents: Ha
}, Ua = /*#__PURE__*/ m$1(function() {
    var e = this, r = {}, a = 0, n = [], i = [], s = /*#__PURE__*/ e.spawn(e), o = /*#__PURE__*/ m$1(function l(u) {
        i.push(u), r[u] = {
            index: a,
            low: a++,
            explored: false
        };
        var f = /*#__PURE__*/ e.getElementById(u).connectedEdges().intersection(e);
        if (f.forEach(function(m) {
            var y = /*#__PURE__*/ m.target().id();
            y !== u && (y in r || l(y), r[y].explored || (r[u].low = /*#__PURE__*/ Math.min(r[u].low, r[y].low)));
        }), r[u].index === r[u].low) {
            for(var c = /*#__PURE__*/ e.spawn();;){
                var d = /*#__PURE__*/ i.pop();
                if (c.merge(/*#__PURE__*/ e.getElementById(d)), r[d].low = r[u].index, r[d].explored = true, d === u) break;
            }
            var g = /*#__PURE__*/ c.edgesWith(c), h = /*#__PURE__*/ c.merge(g);
            n.push(h), s = /*#__PURE__*/ s.difference(h);
        }
    }, "stronglyConnectedSearch");
    return e.forEach(function(l) {
        if (l.isNode()) {
            var u = /*#__PURE__*/ l.id();
            u in r || o(u);
        }
    }), {
        cut: s,
        components: n
    };
}, "tarjanStronglyConnected"), pc = {
    tarjanStronglyConnected: Ua,
    tsc: Ua,
    tscc: Ua,
    tarjanStronglyConnectedComponents: Ua
}, Xo = {};
[
    xa,
    Hv,
    Uv,
    Yv,
    Zv,
    Jv,
    tf,
    kf,
    Nr,
    zr,
    oi,
    qf,
    jf,
    ic,
    cc,
    hc,
    gc,
    pc
].forEach(function(t) {
    he(Xo, t);
});
var Yo = 0, _o = 1, Zo = 2, Xt = /*#__PURE__*/ m$1(function t(e) {
    if (!(this instanceof t)) return new t(e);
    this.id = "Thenable/1.0.7", this.state = Yo, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
        then: /*#__PURE__*/ this.then.bind(this)
    }, typeof e == "function" && e.call(this, /*#__PURE__*/ this.fulfill.bind(this), /*#__PURE__*/ this.reject.bind(this));
}, "api");
Xt.prototype = {
    fulfill: /*#__PURE__*/ m$1(function(e) {
        return ms(this, _o, "fulfillValue", e);
    }, "fulfill"),
    reject: /*#__PURE__*/ m$1(function(e) {
        return ms(this, Zo, "rejectReason", e);
    }, "reject"),
    then: /*#__PURE__*/ m$1(function(e, r) {
        var a = this, n = new Xt;
        return a.onFulfilled.push(/*#__PURE__*/ ws(e, n, "fulfill")), a.onRejected.push(/*#__PURE__*/ ws(r, n, "reject")), Qo(a), n.proxy;
    }, "then")
};
var ms = /*#__PURE__*/ m$1(function(e, r, a, n) {
    return e.state === Yo && (e.state = r, e[a] = n, Qo(e)), e;
}, "deliver"), Qo = /*#__PURE__*/ m$1(function(e) {
    e.state === _o ? bs(e, "onFulfilled", e.fulfillValue) : e.state === Zo && bs(e, "onRejected", e.rejectReason);
}, "execute"), bs = /*#__PURE__*/ m$1(function(e, r, a) {
    if (e[r].length !== 0) {
        var n = e[r];
        e[r] = [];
        var i = /*#__PURE__*/ m$1(function() {
            for(var o = 0; o < n.length; o++)n[o](a);
        }, "func");
        typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
    }
}, "execute_handlers"), ws = /*#__PURE__*/ m$1(function(e, r, a) {
    return function(n) {
        if (typeof e != "function") r[a].call(r, n);
        else {
            var i;
            try {
                i = /*#__PURE__*/ e(n);
            } catch (s) {
                r.reject(s);
                return;
            }
            yc(r, i);
        }
    };
}, "resolver"), yc = /*#__PURE__*/ m$1(function t(e, r) {
    if (e === r || e.proxy === r) {
        e.reject(new TypeError("cannot resolve promise with itself"));
        return;
    }
    var a;
    if (Ye(r) === "object" && r !== null || typeof r == "function") try {
        a = r.then;
    } catch (i) {
        e.reject(i);
        return;
    }
    if (typeof a == "function") {
        var n = false;
        try {
            a.call(r, function(i) {
                n || (n = !0, i === r ? e.reject(new TypeError("circular thenable chain")) : t(e, i));
            }, function(i) {
                n || (n = !0, e.reject(i));
            });
        } catch (i) {
            n || e.reject(i);
        }
        return;
    }
    e.fulfill(r);
}, "resolve");
Xt.all = function(t) {
    return new Xt(function(e, r) {
        for(var a = new Array(t.length), n = 0, i = /*#__PURE__*/ m$1(function(l, u) {
            a[l] = u, n++, n === t.length && e(a);
        }, "fulfill"), s = 0; s < t.length; s++)(function(o) {
            var l = t[o], u = l != null && l.then != null;
            if (u) l.then(function(c) {
                i(o, c);
            }, function(c) {
                r(c);
            });
            else {
                var f = l;
                i(o, f);
            }
        })(s);
    });
};
Xt.resolve = function(t) {
    return new Xt(function(e, r) {
        e(t);
    });
};
Xt.reject = function(t) {
    return new Xt(function(e, r) {
        r(t);
    });
};
var Hr = typeof Promise < "u" ? Promise : Xt, ui = /*#__PURE__*/ m$1(function(e, r, a) {
    var n = /*#__PURE__*/ Ei(e), i = !n, s = this._private = /*#__PURE__*/ he({
        duration: 1e3
    }, r, a);
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
}, "Animation"), Er = ui.prototype;
he(Er, {
    instanceString: /*#__PURE__*/ m$1(function() {
        return "animation";
    }, "instanceString"),
    hook: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        if (!e.hooked) {
            var r, a = e.target._private.animation;
            e.queue ? r = a.queue : r = a.current, r.push(this), Et(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = true;
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
        var r = this._private;
        return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
    }, "time"),
    progress: /*#__PURE__*/ m$1(function(e) {
        var r = this._private, a = r.playing;
        return e === void 0 ? r.progress : (a && this.pause(), r.progress = e, r.started = false, a && this.play(), this);
    }, "progress"),
    completed: /*#__PURE__*/ m$1(function() {
        return this._private.progress === 1;
    }, "completed"),
    reverse: /*#__PURE__*/ m$1(function() {
        var e = this._private, r = e.playing;
        r && this.pause(), e.progress = 1 - e.progress, e.started = false;
        var a = /*#__PURE__*/ m$1(function(u, f) {
            var c = e[u];
            c != null && (e[u] = e[f], e[f] = c);
        }, "swap");
        if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style) for(var n = 0; n < e.style.length; n++){
            var i = e.style[n], s = i.name, o = e.startStyle[s];
            e.startStyle[s] = i, e.style[n] = o;
        }
        return r && this.play(), this;
    }, "reverse"),
    promise: /*#__PURE__*/ m$1(function(e) {
        var r = this._private, a;
        switch(e){
            case "frame":
                a = r.frames;
                break;
            default:
            case "complete":
            case "completed":
                a = r.completes;
        }
        return new Hr(function(n, i) {
            a.push(function() {
                n();
            });
        });
    }, "promise")
});
Er.complete = Er.completed;
Er.run = Er.play;
Er.running = Er.playing;
var mc = {
    animated: /*#__PURE__*/ m$1(function() {
        return m$1(function() {
            var r = this, a = r.length !== void 0, n = a ? r : [
                r
            ], i = this._private.cy || this;
            if (!i.styleEnabled()) return false;
            var s = n[0];
            if (s) return s._private.animation.current.length > 0;
        }, "animatedImpl");
    }, "animated"),
    clearQueue: /*#__PURE__*/ m$1(function() {
        return m$1(function() {
            var r = this, a = r.length !== void 0, n = a ? r : [
                r
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
        return m$1(function(r, a) {
            var n = this._private.cy || this;
            return n.styleEnabled() ? this.animate({
                delay: r,
                duration: r,
                complete: a
            }) : this;
        }, "delayImpl");
    }, "delay"),
    delayAnimation: /*#__PURE__*/ m$1(function() {
        return m$1(function(r, a) {
            var n = this._private.cy || this;
            return n.styleEnabled() ? this.animation({
                delay: r,
                duration: r,
                complete: a
            }) : this;
        }, "delayAnimationImpl");
    }, "delayAnimation"),
    animation: /*#__PURE__*/ m$1(function() {
        return m$1(function(r, a) {
            var n = this, i = n.length !== void 0, s = i ? n : [
                n
            ], o = this._private.cy || this, l = !i, u = !l;
            if (!o.styleEnabled()) return this;
            var f = /*#__PURE__*/ o.style();
            r = /*#__PURE__*/ he({}, r, a);
            var c = Object.keys(r).length === 0;
            if (c) return new ui(s[0], r);
            switch(r.duration === void 0 && (r.duration = 400), r.duration){
                case "slow":
                    r.duration = 600;
                    break;
                case "fast":
                    r.duration = 200;
                    break;
            }
            if (u && (r.style = /*#__PURE__*/ f.getPropsList(r.style || r.css), r.css = void 0), u && r.renderedPosition != null) {
                var d = r.renderedPosition, g = /*#__PURE__*/ o.pan(), h = /*#__PURE__*/ o.zoom();
                r.position = /*#__PURE__*/ No(d, h, g);
            }
            if (l && r.panBy != null) {
                var m = r.panBy, y = /*#__PURE__*/ o.pan();
                r.pan = {
                    x: y.x + m.x,
                    y: y.y + m.y
                };
            }
            var p = r.center || r.centre;
            if (l && p != null) {
                var b1 = /*#__PURE__*/ o.getCenterPan(p.eles, r.zoom);
                b1 != null && (r.pan = b1);
            }
            if (l && r.fit != null) {
                var w = r.fit, x = /*#__PURE__*/ o.getFitViewport(w.eles || w.boundingBox, w.padding);
                x != null && (r.pan = x.pan, r.zoom = x.zoom);
            }
            if (l && Pe(r.zoom)) {
                var S = /*#__PURE__*/ o.getZoomedViewport(r.zoom);
                S != null ? (S.zoomed && (r.zoom = S.zoom), S.panned && (r.pan = S.pan)) : r.zoom = null;
            }
            return new ui(s[0], r);
        }, "animationImpl");
    }, "animation"),
    animate: /*#__PURE__*/ m$1(function() {
        return m$1(function(r, a) {
            var n = this, i = n.length !== void 0, s = i ? n : [
                n
            ], o = this._private.cy || this;
            if (!o.styleEnabled()) return this;
            a && (r = /*#__PURE__*/ he({}, r, a));
            for(var l = 0; l < s.length; l++){
                var u = s[l], f = u.animated() && (r.queue === void 0 || r.queue), c = /*#__PURE__*/ u.animation(r, f ? {
                    queue: true
                } : void 0);
                c.play();
            }
            return this;
        }, "animateImpl");
    }, "animate"),
    stop: /*#__PURE__*/ m$1(function() {
        return m$1(function(r, a) {
            var n = this, i = n.length !== void 0, s = i ? n : [
                n
            ], o = this._private.cy || this;
            if (!o.styleEnabled()) return this;
            for(var l = 0; l < s.length; l++){
                for(var u = s[l], f = u._private, c = f.animation.current, d = 0; d < c.length; d++){
                    var g = c[d], h = g._private;
                    a && (h.duration = 0);
                }
                r && (f.animation.queue = []), a || (f.animation.current = []);
            }
            return o.notify("draw"), this;
        }, "stopImpl");
    }, "stop")
}, bc = Array.isArray, Pn = bc, wc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xc = /^\w*$/;
function Ec(t, e) {
    if (Pn(t)) return false;
    var r = typeof t;
    return r == "number" || r == "symbol" || r == "boolean" || t == null || Ra(t) ? true : xc.test(t) || !wc.test(t) || e != null && t in Object(e);
}
m$1(Ec, "isKey");
var Tc = Ec, Cc = "[object AsyncFunction]", Sc = "[object Function]", Dc = "[object GeneratorFunction]", kc = "[object Proxy]";
function Pc(t) {
    if (!br(t)) return false;
    var e = /*#__PURE__*/ ko(t);
    return e == Sc || e == Dc || e == Cc || e == kc;
}
m$1(Pc, "isFunction");
var Bc = Pc, Ac = Cn["__core-js_shared__"], Xn = Ac, xs = /*#__PURE__*/ function() {
    var t = /*#__PURE__*/ /[^.]+$/.exec(Xn && Xn.keys && Xn.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
}();
function Rc(t) {
    return !!xs && xs in t;
}
m$1(Rc, "isMasked");
var Mc = Rc, Lc = Function.prototype, Ic = Lc.toString;
function Oc(t) {
    if (t != null) {
        try {
            return Ic.call(t);
        } catch  {}
        try {
            return t + "";
        } catch  {}
    }
    return "";
}
m$1(Oc, "toSource");
var Nc = Oc, zc = /[\\^$.*+?()[\]{}|]/g, Fc = /^\[object .+?Constructor\]$/, Vc = Function.prototype, qc = Object.prototype, $c = Vc.toString, Kc = qc.hasOwnProperty, Gc = /*#__PURE__*/ RegExp("^" + $c.call(Kc).replace(zc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Wc(t) {
    if (!br(t) || Mc(t)) return false;
    var e = Bc(t) ? Gc : Fc;
    return e.test(/*#__PURE__*/ Nc(t));
}
m$1(Wc, "baseIsNative");
var Hc = Wc;
function Uc(t, e) {
    return t?.[e];
}
m$1(Uc, "getValue$1");
var Xc = Uc;
function Yc(t, e) {
    var r = /*#__PURE__*/ Xc(t, e);
    return Hc(r) ? r : void 0;
}
m$1(Yc, "getNative");
var Ri = Yc, _c = /*#__PURE__*/ Ri(Object, "create"), Ca = _c;
function Zc() {
    this.__data__ = Ca ? Ca(null) : {}, this.size = 0;
}
m$1(Zc, "hashClear");
var Qc = Zc;
function Jc(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
}
m$1(Jc, "hashDelete");
var jc = Jc, ed = "__lodash_hash_undefined__", td = Object.prototype, rd = td.hasOwnProperty;
function ad(t) {
    var e = this.__data__;
    if (Ca) {
        var r = e[t];
        return r === ed ? void 0 : r;
    }
    return rd.call(e, t) ? e[t] : void 0;
}
m$1(ad, "hashGet");
var nd = ad, id = Object.prototype, sd = id.hasOwnProperty;
function od(t) {
    var e = this.__data__;
    return Ca ? e[t] !== void 0 : sd.call(e, t);
}
m$1(od, "hashHas");
var ud = od, ld = "__lodash_hash_undefined__";
function vd(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = Ca && e === void 0 ? ld : e, this;
}
m$1(vd, "hashSet");
var fd = vd;
function Ur(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for(this.clear(); ++e < r;){
        var a = t[e];
        this.set(a[0], a[1]);
    }
}
m$1(Ur, "Hash");
Ur.prototype.clear = Qc;
Ur.prototype.delete = jc;
Ur.prototype.get = nd;
Ur.prototype.has = ud;
Ur.prototype.set = fd;
var Es = Ur;
function cd() {
    this.__data__ = [], this.size = 0;
}
m$1(cd, "listCacheClear");
var dd = cd;
function hd(t, e) {
    return t === e || t !== t && e !== e;
}
m$1(hd, "eq");
var Jo = hd;
function gd(t, e) {
    for(var r = t.length; r--;)if (Jo(t[r][0], e)) return r;
    return -1;
}
m$1(gd, "assocIndexOf");
var Bn = gd, pd = Array.prototype, yd = pd.splice;
function md(t) {
    var e = this.__data__, r = /*#__PURE__*/ Bn(e, t);
    if (r < 0) return false;
    var a = e.length - 1;
    return r == a ? e.pop() : yd.call(e, r, 1), --this.size, true;
}
m$1(md, "listCacheDelete");
var bd = md;
function wd(t) {
    var e = this.__data__, r = /*#__PURE__*/ Bn(e, t);
    return r < 0 ? void 0 : e[r][1];
}
m$1(wd, "listCacheGet");
var xd = wd;
function Ed(t) {
    return Bn(this.__data__, t) > -1;
}
m$1(Ed, "listCacheHas");
var Td = Ed;
function Cd(t, e) {
    var r = this.__data__, a = /*#__PURE__*/ Bn(r, t);
    return a < 0 ? (++this.size, r.push([
        t,
        e
    ])) : r[a][1] = e, this;
}
m$1(Cd, "listCacheSet");
var Sd = Cd;
function Xr(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for(this.clear(); ++e < r;){
        var a = t[e];
        this.set(a[0], a[1]);
    }
}
m$1(Xr, "ListCache");
Xr.prototype.clear = dd;
Xr.prototype.delete = bd;
Xr.prototype.get = xd;
Xr.prototype.has = Td;
Xr.prototype.set = Sd;
var Dd = Xr, kd = /*#__PURE__*/ Ri(Cn, "Map"), Pd = kd;
function Bd() {
    this.size = 0, this.__data__ = {
        hash: new Es,
        map: new (Pd || Dd),
        string: new Es
    };
}
m$1(Bd, "mapCacheClear");
var Ad = Bd;
function Rd(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
m$1(Rd, "isKeyable");
var Md = Rd;
function Ld(t, e) {
    var r = t.__data__;
    return Md(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
m$1(Ld, "getMapData");
var An = Ld;
function Id(t) {
    var e = /*#__PURE__*/ An(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
}
m$1(Id, "mapCacheDelete");
var Od = Id;
function Nd(t) {
    return An(this, t).get(t);
}
m$1(Nd, "mapCacheGet");
var zd = Nd;
function Fd(t) {
    return An(this, t).has(t);
}
m$1(Fd, "mapCacheHas");
var Vd = Fd;
function qd(t, e) {
    var r = /*#__PURE__*/ An(this, t), a = r.size;
    return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
}
m$1(qd, "mapCacheSet");
var $d = qd;
function Yr(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for(this.clear(); ++e < r;){
        var a = t[e];
        this.set(a[0], a[1]);
    }
}
m$1(Yr, "MapCache");
Yr.prototype.clear = Ad;
Yr.prototype.delete = Od;
Yr.prototype.get = zd;
Yr.prototype.has = Vd;
Yr.prototype.set = $d;
var jo = Yr, Kd = "Expected a function";
function Mi(t, e) {
    if (typeof t != "function" || e != null && typeof e != "function") throw new TypeError(Kd);
    var r = m$1(function() {
        var a = arguments, n = e ? e.apply(this, a) : a[0], i = r.cache;
        if (i.has(n)) return i.get(n);
        var s = /*#__PURE__*/ t.apply(this, a);
        return r.cache = i.set(n, s) || i, s;
    }, "memoized");
    return r.cache = new (Mi.Cache || jo), r;
}
m$1(Mi, "memoize");
Mi.Cache = jo;
var Gd = Mi, Wd = 500;
function Hd(t) {
    var e = /*#__PURE__*/ Gd(t, function(a) {
        return r.size === Wd && r.clear(), a;
    }), r = e.cache;
    return e;
}
m$1(Hd, "memoizeCapped");
var Ud = Hd, Xd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yd = /\\(\\)?/g, _d = /*#__PURE__*/ Ud(function(t) {
    var e = [];
    return t.charCodeAt(0) === 46 && e.push(""), t.replace(Xd, function(r, a, n, i) {
        e.push(n ? i.replace(Yd, "$1") : a || r);
    }), e;
}), eu = _d;
function Zd(t, e) {
    for(var r = -1, a = t == null ? 0 : t.length, n = /*#__PURE__*/ Array(a); ++r < a;)n[r] = /*#__PURE__*/ e(t[r], r, t);
    return n;
}
m$1(Zd, "arrayMap");
var tu = Zd, Ts = Vr ? Vr.prototype : void 0, Cs = Ts ? Ts.toString : void 0;
function ru(t) {
    if (typeof t == "string") return t;
    if (Pn(t)) return tu(t, ru) + "";
    if (Ra(t)) return Cs ? Cs.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -Infinity ? "-0" : e;
}
m$1(ru, "baseToString");
var Jd = ru;
function jd(t) {
    return t == null ? "" : Jd(t);
}
m$1(jd, "toString$1");
var au = jd;
function eh(t, e) {
    return Pn(t) ? t : Tc(t, e) ? [
        t
    ] : eu(/*#__PURE__*/ au(t));
}
m$1(eh, "castPath");
var nu = eh;
function rh(t) {
    if (typeof t == "string" || Ra(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -Infinity ? "-0" : e;
}
m$1(rh, "toKey");
var Li = rh;
function ah(t, e) {
    e = /*#__PURE__*/ nu(e, t);
    for(var r = 0, a = e.length; t != null && r < a;)t = t[Li(e[r++])];
    return r && r == a ? t : void 0;
}
m$1(ah, "baseGet");
var nh = ah;
function ih(t, e, r) {
    var a = t == null ? void 0 : nh(t, e);
    return a === void 0 ? r : a;
}
m$1(ih, "get");
var sh = ih, oh = /*#__PURE__*/ function() {
    try {
        var t = /*#__PURE__*/ Ri(Object, "defineProperty");
        return t({}, "", {}), t;
    } catch  {}
}(), Ss = oh;
function uh(t, e, r) {
    e == "__proto__" && Ss ? Ss(t, e, {
        configurable: true,
        enumerable: true,
        value: r,
        writable: true
    }) : t[e] = r;
}
m$1(uh, "baseAssignValue");
var lh = uh, vh = Object.prototype, fh = vh.hasOwnProperty;
function ch(t, e, r) {
    var a = t[e];
    (!(fh.call(t, e) && Jo(a, r)) || r === void 0 && !(e in t)) && lh(t, e, r);
}
m$1(ch, "assignValue");
var dh = ch, hh = 9007199254740991, gh = /^(?:0|[1-9]\d*)$/;
function ph(t, e) {
    var r = typeof t;
    return e = e ?? hh, !!e && (r == "number" || r != "symbol" && gh.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
m$1(ph, "isIndex");
var yh = ph;
function mh(t, e, r, a) {
    if (!br(t)) return t;
    e = /*#__PURE__*/ nu(e, t);
    for(var n = -1, i = e.length, s = i - 1, o = t; o != null && ++n < i;){
        var l = /*#__PURE__*/ Li(e[n]), u = r;
        if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
        if (n != s) {
            var f = o[l];
            u = a ? a(f, l, o) : void 0, u === void 0 && (u = br(f) ? f : yh(e[n + 1]) ? [] : {});
        }
        dh(o, l, u), o = o[l];
    }
    return t;
}
m$1(mh, "baseSet");
var bh = mh;
function wh(t, e, r) {
    return t == null ? t : bh(t, e, r);
}
m$1(wh, "set");
var xh = wh;
function Eh(t, e) {
    var r = -1, a = t.length;
    for(e || (e = /*#__PURE__*/ Array(a)); ++r < a;)e[r] = t[r];
    return e;
}
m$1(Eh, "copyArray");
var Th = Eh;
function Ch(t) {
    return Pn(t) ? tu(t, Li) : Ra(t) ? [
        t
    ] : Th(/*#__PURE__*/ eu(/*#__PURE__*/ au(t)));
}
m$1(Ch, "toPath");
var Sh = Ch, Dh = {
    data: /*#__PURE__*/ m$1(function(e) {
        var r = {
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
        return e = /*#__PURE__*/ he({}, r, e), m$1(function(n, i) {
            var s = e, o = this, l = o.length !== void 0, u = l ? o : [
                o
            ], f = l ? o[0] : o;
            if (ce(n)) {
                var c = n.indexOf(".") !== -1, d = c && Sh(n);
                if (s.allowGetting && i === void 0) {
                    var g;
                    return f && (s.beforeGet(f), d && f._private[s.field][n] === void 0 ? g = /*#__PURE__*/ sh(f._private[s.field], d) : g = f._private[s.field][n]), g;
                } else if (s.allowSetting && i !== void 0) {
                    var h = !s.immutableKeys[n];
                    if (h) {
                        var m = /*#__PURE__*/ po({}, n, i);
                        s.beforeSet(o, m);
                        for(var y = 0, p = u.length; y < p; y++){
                            var b1 = u[y];
                            s.canSet(b1) && (d && f._private[s.field][n] === void 0 ? xh(b1._private[s.field], d, i) : b1._private[s.field][n] = i);
                        }
                        s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
                    }
                }
            } else if (s.allowSetting && Pe(n)) {
                var w = n, x, S, T = /*#__PURE__*/ Object.keys(w);
                s.beforeSet(o, w);
                for(var E = 0; E < T.length; E++){
                    x = T[E], S = w[x];
                    var D = !s.immutableKeys[x];
                    if (D) for(var C = 0; C < u.length; C++){
                        var B = u[C];
                        s.canSet(B) && (B._private[s.field][x] = S);
                    }
                }
                s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
            } else if (s.allowBinding && Ke(n)) {
                var A = n;
                o.on(s.bindingEvent, A);
            } else if (s.allowGetting && n === void 0) {
                var P;
                return f && (s.beforeGet(f), P = f._private[s.field]), P;
            }
            return o;
        }, "dataImpl");
    }, "data"),
    removeData: /*#__PURE__*/ m$1(function(e) {
        var r = {
            field: "data",
            event: "data",
            triggerFnName: "trigger",
            triggerEvent: false,
            immutableKeys: {}
        };
        return e = /*#__PURE__*/ he({}, r, e), m$1(function(n) {
            var i = e, s = this, o = s.length !== void 0, l = o ? s : [
                s
            ];
            if (ce(n)) {
                for(var u = /*#__PURE__*/ n.split(/\s+/), f = u.length, c = 0; c < f; c++){
                    var d = u[c];
                    if (!rr(d)) {
                        var g = !i.immutableKeys[d];
                        if (g) for(var h = 0, m = l.length; h < m; h++)l[h]._private[i.field][d] = void 0;
                    }
                }
                i.triggerEvent && s[i.triggerFnName](i.event);
            } else if (n === void 0) {
                for(var y = 0, p = l.length; y < p; y++)for(var b1 = l[y]._private[i.field], w = /*#__PURE__*/ Object.keys(b1), x = 0; x < w.length; x++){
                    var S = w[x], T = !i.immutableKeys[S];
                    T && (b1[S] = void 0);
                }
                i.triggerEvent && s[i.triggerFnName](i.event);
            }
            return s;
        }, "removeDataImpl");
    }, "removeData")
}, kh = {
    eventAliasesOn: /*#__PURE__*/ m$1(function(e) {
        var r = e;
        r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(a, n) {
            var i = this, s = /*#__PURE__*/ Array.prototype.slice.call(arguments, 0);
            return new Hr(function(o, l) {
                var u = /*#__PURE__*/ m$1(function(g) {
                    i.off.apply(i, c), o(g);
                }, "callback"), f = /*#__PURE__*/ s.concat([
                    u
                ]), c = /*#__PURE__*/ f.concat([]);
                i.on.apply(i, f);
            });
        };
    }, "eventAliasesOn")
}, Ae = {};
[
    mc,
    Dh,
    kh
].forEach(function(t) {
    he(Ae, t);
});
var Ph = {
    animate: /*#__PURE__*/ Ae.animate(),
    animation: /*#__PURE__*/ Ae.animation(),
    animated: /*#__PURE__*/ Ae.animated(),
    clearQueue: /*#__PURE__*/ Ae.clearQueue(),
    delay: /*#__PURE__*/ Ae.delay(),
    delayAnimation: /*#__PURE__*/ Ae.delayAnimation(),
    stop: /*#__PURE__*/ Ae.stop()
}, an = {
    classes: /*#__PURE__*/ m$1(function(e) {
        var r = this;
        if (e === void 0) {
            var a = [];
            return r[0]._private.classes.forEach(function(h) {
                return a.push(h);
            }), a;
        } else Oe(e) || (e = (e || "").match(/\S+/g) || []);
        for(var n = [], i = new Wr(e), s = 0; s < r.length; s++){
            for(var o = r[s], l = o._private, u = l.classes, f = false, c = 0; c < e.length; c++){
                var d = e[c], g = /*#__PURE__*/ u.has(d);
                if (!g) {
                    f = true;
                    break;
                }
            }
            f || (f = u.size !== e.length), f && (l.classes = i, n.push(o));
        }
        return n.length > 0 && this.spawn(n).updateStyle().emit("class"), r;
    }, "classes"),
    addClass: /*#__PURE__*/ m$1(function(e) {
        return this.toggleClass(e, true);
    }, "addClass"),
    hasClass: /*#__PURE__*/ m$1(function(e) {
        var r = this[0];
        return r != null && r._private.classes.has(e);
    }, "hasClass"),
    toggleClass: /*#__PURE__*/ m$1(function(e, r) {
        Oe(e) || (e = e.match(/\S+/g) || []);
        for(var a = this, n = r === void 0, i = [], s = 0, o = a.length; s < o; s++)for(var l = a[s], u = l._private.classes, f = false, c = 0; c < e.length; c++){
            var d = e[c], g = /*#__PURE__*/ u.has(d), h = false;
            r || n && !g ? (u.add(d), h = true) : (!r || n && g) && (u.delete(d), h = true), !f && h && (i.push(l), f = true);
        }
        return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
    }, "toggleClass"),
    removeClass: /*#__PURE__*/ m$1(function(e) {
        return this.toggleClass(e, false);
    }, "removeClass"),
    flashClass: /*#__PURE__*/ m$1(function(e, r) {
        var a = this;
        if (r == null) r = 250;
        else if (r === 0) return a;
        return a.addClass(e), setTimeout(function() {
            a.removeClass(e);
        }, r), a;
    }, "flashClass")
};
an.className = an.classNames = an.classes;
var ke = {
    metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
    comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
    boolOp: "\\?|\\!|\\^",
    string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
    number: Xe,
    meta: "degree|indegree|outdegree",
    separator: "\\s*,\\s*",
    descendant: "\\s+",
    child: "\\s+>\\s+",
    subject: "\\$",
    group: "node|edge|\\*",
    directedEdge: "\\s+->\\s+",
    undirectedEdge: "\\s+<->\\s+"
};
ke.variable = "(?:[\\w-.]|(?:\\\\" + ke.metaChar + "))+";
ke.className = "(?:[\\w-]|(?:\\\\" + ke.metaChar + "))+";
ke.value = ke.string + "|" + ke.number;
ke.id = ke.variable;
(function() {
    var t, e, r;
    for(t = /*#__PURE__*/ ke.comparatorOp.split("|"), r = 0; r < t.length; r++)e = t[r], ke.comparatorOp += "|@" + e;
    for(t = /*#__PURE__*/ ke.comparatorOp.split("|"), r = 0; r < t.length; r++)e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (ke.comparatorOp += "|\\!" + e);
})();
var Ie = /*#__PURE__*/ m$1(function() {
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
}, li = /*#__PURE__*/ [
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
].sort(function(t, e) {
    return ql(t.selector, e.selector);
}), Bh = /*#__PURE__*/ function() {
    for(var t = {}, e, r = 0; r < li.length; r++)e = li[r], t[e.selector] = e.matches;
    return t;
}(), Ah = /*#__PURE__*/ m$1(function(e, r) {
    return Bh[e](r);
}, "stateSelectorMatches"), Rh = "(" + li.map(function(t) {
    return t.selector;
}).join("|") + ")", kr = /*#__PURE__*/ m$1(function(e) {
    return e.replace(new RegExp("\\\\(" + ke.metaChar + ")", "g"), function(r, a) {
        return a;
    });
}, "cleanMetaChars"), Qt = /*#__PURE__*/ m$1(function(e, r, a) {
    e[e.length - 1] = a;
}, "replaceLastQuery"), vi = [
    {
        name: "group",
        query: true,
        regex: "(" + ke.group + ")",
        populate: /*#__PURE__*/ m$1(function(e, r, a) {
            var n = /*#__PURE__*/ We(a, 1), i = n[0];
            r.checks.push({
                type: oe.GROUP,
                value: i === "*" ? i : i + "s"
            });
        }, "populate")
    },
    {
        name: "state",
        query: true,
        regex: Rh,
        populate: /*#__PURE__*/ m$1(function(e, r, a) {
            var n = /*#__PURE__*/ We(a, 1), i = n[0];
            r.checks.push({
                type: oe.STATE,
                value: i
            });
        }, "populate")
    },
    {
        name: "id",
        query: true,
        regex: "\\#(" + ke.id + ")",
        populate: /*#__PURE__*/ m$1(function(e, r, a) {
            var n = /*#__PURE__*/ We(a, 1), i = n[0];
            r.checks.push({
                type: oe.ID,
                value: /*#__PURE__*/ kr(i)
            });
        }, "populate")
    },
    {
        name: "className",
        query: true,
        regex: "\\.(" + ke.className + ")",
        populate: /*#__PURE__*/ m$1(function(e, r, a) {
            var n = /*#__PURE__*/ We(a, 1), i = n[0];
            r.checks.push({
                type: oe.CLASS,
                value: /*#__PURE__*/ kr(i)
            });
        }, "populate")
    },
    {
        name: "dataExists",
        query: true,
        regex: "\\[\\s*(" + ke.variable + ")\\s*\\]",
        populate: /*#__PURE__*/ m$1(function(e, r, a) {
            var n = /*#__PURE__*/ We(a, 1), i = n[0];
            r.checks.push({
                type: oe.DATA_EXIST,
                field: /*#__PURE__*/ kr(i)
            });
        }, "populate")
    },
    {
        name: "dataCompare",
        query: true,
        regex: "\\[\\s*(" + ke.variable + ")\\s*(" + ke.comparatorOp + ")\\s*(" + ke.value + ")\\s*\\]",
        populate: /*#__PURE__*/ m$1(function(e, r, a) {
            var n = /*#__PURE__*/ We(a, 3), i = n[0], s = n[1], o = n[2], l = new RegExp("^" + ke.string + "$").exec(o) != null;
            l ? o = /*#__PURE__*/ o.substring(1, o.length - 1) : o = /*#__PURE__*/ parseFloat(o), r.checks.push({
                type: oe.DATA_COMPARE,
                field: /*#__PURE__*/ kr(i),
                operator: s,
                value: o
            });
        }, "populate")
    },
    {
        name: "dataBool",
        query: true,
        regex: "\\[\\s*(" + ke.boolOp + ")\\s*(" + ke.variable + ")\\s*\\]",
        populate: /*#__PURE__*/ m$1(function(e, r, a) {
            var n = /*#__PURE__*/ We(a, 2), i = n[0], s = n[1];
            r.checks.push({
                type: oe.DATA_BOOL,
                field: /*#__PURE__*/ kr(s),
                operator: i
            });
        }, "populate")
    },
    {
        name: "metaCompare",
        query: true,
        regex: "\\[\\[\\s*(" + ke.meta + ")\\s*(" + ke.comparatorOp + ")\\s*(" + ke.number + ")\\s*\\]\\]",
        populate: /*#__PURE__*/ m$1(function(e, r, a) {
            var n = /*#__PURE__*/ We(a, 3), i = n[0], s = n[1], o = n[2];
            r.checks.push({
                type: oe.META_COMPARE,
                field: /*#__PURE__*/ kr(i),
                operator: s,
                value: /*#__PURE__*/ parseFloat(o)
            });
        }, "populate")
    },
    {
        name: "nextQuery",
        separator: true,
        regex: ke.separator,
        populate: /*#__PURE__*/ m$1(function(e, r) {
            var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
            a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
            var o = e[e.length++] = /*#__PURE__*/ Ie();
            return o;
        }, "populate")
    },
    {
        name: "directedEdge",
        separator: true,
        regex: ke.directedEdge,
        populate: /*#__PURE__*/ m$1(function(e, r) {
            if (e.currentSubject == null) {
                var a = /*#__PURE__*/ Ie(), n = r, i = /*#__PURE__*/ Ie();
                return a.checks.push({
                    type: oe.DIRECTED_EDGE,
                    source: n,
                    target: i
                }), Qt(e, r, a), e.edgeCount++, i;
            } else {
                var s = /*#__PURE__*/ Ie(), o = r, l = /*#__PURE__*/ Ie();
                return s.checks.push({
                    type: oe.NODE_SOURCE,
                    source: o,
                    target: l
                }), Qt(e, r, s), e.edgeCount++, l;
            }
        }, "populate")
    },
    {
        name: "undirectedEdge",
        separator: true,
        regex: ke.undirectedEdge,
        populate: /*#__PURE__*/ m$1(function(e, r) {
            if (e.currentSubject == null) {
                var a = /*#__PURE__*/ Ie(), n = r, i = /*#__PURE__*/ Ie();
                return a.checks.push({
                    type: oe.UNDIRECTED_EDGE,
                    nodes: [
                        n,
                        i
                    ]
                }), Qt(e, r, a), e.edgeCount++, i;
            } else {
                var s = /*#__PURE__*/ Ie(), o = r, l = /*#__PURE__*/ Ie();
                return s.checks.push({
                    type: oe.NODE_NEIGHBOR,
                    node: o,
                    neighbor: l
                }), Qt(e, r, s), l;
            }
        }, "populate")
    },
    {
        name: "child",
        separator: true,
        regex: ke.child,
        populate: /*#__PURE__*/ m$1(function(e, r) {
            if (e.currentSubject == null) {
                var a = /*#__PURE__*/ Ie(), n = /*#__PURE__*/ Ie(), i = e[e.length - 1];
                return a.checks.push({
                    type: oe.CHILD,
                    parent: i,
                    child: n
                }), Qt(e, r, a), e.compoundCount++, n;
            } else if (e.currentSubject === r) {
                var s = /*#__PURE__*/ Ie(), o = e[e.length - 1], l = /*#__PURE__*/ Ie(), u = /*#__PURE__*/ Ie(), f = /*#__PURE__*/ Ie(), c = /*#__PURE__*/ Ie();
                return s.checks.push({
                    type: oe.COMPOUND_SPLIT,
                    left: o,
                    right: l,
                    subject: u
                }), u.checks = r.checks, r.checks = [
                    {
                        type: oe.TRUE
                    }
                ], c.checks.push({
                    type: oe.TRUE
                }), l.checks.push({
                    type: oe.PARENT,
                    parent: c,
                    child: f
                }), Qt(e, o, s), e.currentSubject = u, e.compoundCount++, f;
            } else {
                var d = /*#__PURE__*/ Ie(), g = /*#__PURE__*/ Ie(), h = [
                    {
                        type: oe.PARENT,
                        parent: d,
                        child: g
                    }
                ];
                return d.checks = r.checks, r.checks = h, e.compoundCount++, g;
            }
        }, "populate")
    },
    {
        name: "descendant",
        separator: true,
        regex: ke.descendant,
        populate: /*#__PURE__*/ m$1(function(e, r) {
            if (e.currentSubject == null) {
                var a = /*#__PURE__*/ Ie(), n = /*#__PURE__*/ Ie(), i = e[e.length - 1];
                return a.checks.push({
                    type: oe.DESCENDANT,
                    ancestor: i,
                    descendant: n
                }), Qt(e, r, a), e.compoundCount++, n;
            } else if (e.currentSubject === r) {
                var s = /*#__PURE__*/ Ie(), o = e[e.length - 1], l = /*#__PURE__*/ Ie(), u = /*#__PURE__*/ Ie(), f = /*#__PURE__*/ Ie(), c = /*#__PURE__*/ Ie();
                return s.checks.push({
                    type: oe.COMPOUND_SPLIT,
                    left: o,
                    right: l,
                    subject: u
                }), u.checks = r.checks, r.checks = [
                    {
                        type: oe.TRUE
                    }
                ], c.checks.push({
                    type: oe.TRUE
                }), l.checks.push({
                    type: oe.ANCESTOR,
                    ancestor: c,
                    descendant: f
                }), Qt(e, o, s), e.currentSubject = u, e.compoundCount++, f;
            } else {
                var d = /*#__PURE__*/ Ie(), g = /*#__PURE__*/ Ie(), h = [
                    {
                        type: oe.ANCESTOR,
                        ancestor: d,
                        descendant: g
                    }
                ];
                return d.checks = r.checks, r.checks = h, e.compoundCount++, g;
            }
        }, "populate")
    },
    {
        name: "subject",
        modifier: true,
        regex: ke.subject,
        populate: /*#__PURE__*/ m$1(function(e, r) {
            if (e.currentSubject != null && e.currentSubject !== r) return Re("Redefinition of subject in selector `" + e.toString() + "`"), false;
            e.currentSubject = r;
            var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
            i === oe.DIRECTED_EDGE ? n.type = oe.NODE_TARGET : i === oe.UNDIRECTED_EDGE && (n.type = oe.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
        }, "populate")
    }
];
vi.forEach(function(t) {
    return t.regexObj = new RegExp("^" + t.regex);
});
var Mh = /*#__PURE__*/ m$1(function(e) {
    for(var r, a, n, i = 0; i < vi.length; i++){
        var s = vi[i], o = s.name, l = /*#__PURE__*/ e.match(s.regexObj);
        if (l != null) {
            a = l, r = s, n = o;
            var u = l[0];
            e = /*#__PURE__*/ e.substring(u.length);
            break;
        }
    }
    return {
        expr: r,
        match: a,
        name: n,
        remaining: e
    };
}, "consumeExpr"), Lh = /*#__PURE__*/ m$1(function(e) {
    var r = /*#__PURE__*/ e.match(/^\s+/);
    if (r) {
        var a = r[0];
        e = /*#__PURE__*/ e.substring(a.length);
    }
    return e;
}, "consumeWhitespace"), Ih = /*#__PURE__*/ m$1(function(e) {
    var r = this, a = r.inputText = e, n = r[0] = /*#__PURE__*/ Ie();
    for(r.length = 1, a = /*#__PURE__*/ Lh(a);;){
        var i = /*#__PURE__*/ Mh(a);
        if (i.expr == null) return Re("The selector `" + e + "`is invalid"), false;
        var s = /*#__PURE__*/ i.match.slice(1), o = /*#__PURE__*/ i.expr.populate(r, n, s);
        if (o === false) return false;
        if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/)) break;
    }
    var l = r[r.length - 1];
    r.currentSubject != null && (l.subject = r.currentSubject), l.edgeCount = r.edgeCount, l.compoundCount = r.compoundCount;
    for(var u = 0; u < r.length; u++){
        var f = r[u];
        if (f.compoundCount > 0 && f.edgeCount > 0) return Re("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), false;
        if (f.edgeCount > 1) return Re("The selector `" + e + "` is invalid because it uses multiple edge selectors"), false;
        f.edgeCount === 1 && Re("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
    }
    return true;
}, "parse"), Oh = /*#__PURE__*/ m$1(function() {
    if (this.toStringCache != null) return this.toStringCache;
    for(var e = /*#__PURE__*/ m$1(function(f) {
        return f ?? "";
    }, "clean"), r = /*#__PURE__*/ m$1(function(f) {
        return ce(f) ? '"' + f + '"' : e(f);
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
                    var m = f.field, y = f.operator;
                    return "[" + m + a(/*#__PURE__*/ e(y)) + r(g) + "]";
                }
            case oe.DATA_BOOL:
                {
                    var p = f.operator, b1 = f.field;
                    return "[" + e(p) + b1 + "]";
                }
            case oe.DATA_EXIST:
                {
                    var w = f.field;
                    return "[" + w + "]";
                }
            case oe.META_COMPARE:
                {
                    var x = f.operator, S = f.field;
                    return "[[" + S + a(/*#__PURE__*/ e(x)) + r(g) + "]]";
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
                    var T = /*#__PURE__*/ i(f.left, c), E = /*#__PURE__*/ i(f.subject, c), D = /*#__PURE__*/ i(f.right, c);
                    return T + (T.length > 0 ? " " : "") + E + D;
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
}, "toString"), Nh = {
    parse: Ih,
    toString: Oh
}, iu = /*#__PURE__*/ m$1(function(e, r, a) {
    var n, i = /*#__PURE__*/ ce(e), s = /*#__PURE__*/ ae(e), o = /*#__PURE__*/ ce(a), l, u, f = false, c = false, d = false;
    switch(r.indexOf("!") >= 0 && (r = /*#__PURE__*/ r.replace("!", ""), c = true), r.indexOf("@") >= 0 && (r = /*#__PURE__*/ r.replace("@", ""), f = true), (i || o || f) && (l = !i && !s ? "" : "" + e, u = "" + a), f && (e = l = /*#__PURE__*/ l.toLowerCase(), a = u = /*#__PURE__*/ u.toLowerCase()), r){
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
}, "valCmp"), zh = /*#__PURE__*/ m$1(function(e, r) {
    switch(r){
        case "?":
            return !!e;
        case "!":
            return !e;
        case "^":
            return e === void 0;
    }
}, "boolCmp"), Fh = /*#__PURE__*/ m$1(function(e) {
    return e !== void 0;
}, "existCmp"), Ii = /*#__PURE__*/ m$1(function(e, r) {
    return e.data(r);
}, "data"), Vh = /*#__PURE__*/ m$1(function(e, r) {
    return e[r]();
}, "meta"), Ge = [], Ve = /*#__PURE__*/ m$1(function(e, r) {
    return e.checks.every(function(a) {
        return Ge[a.type](a, r);
    });
}, "matches");
Ge[oe.GROUP] = function(t, e) {
    var r = t.value;
    return r === "*" || r === e.group();
};
Ge[oe.STATE] = function(t, e) {
    var r = t.value;
    return Ah(r, e);
};
Ge[oe.ID] = function(t, e) {
    var r = t.value;
    return e.id() === r;
};
Ge[oe.CLASS] = function(t, e) {
    var r = t.value;
    return e.hasClass(r);
};
Ge[oe.META_COMPARE] = function(t, e) {
    var r = t.field, a = t.operator, n = t.value;
    return iu(/*#__PURE__*/ Vh(e, r), a, n);
};
Ge[oe.DATA_COMPARE] = function(t, e) {
    var r = t.field, a = t.operator, n = t.value;
    return iu(/*#__PURE__*/ Ii(e, r), a, n);
};
Ge[oe.DATA_BOOL] = function(t, e) {
    var r = t.field, a = t.operator;
    return zh(/*#__PURE__*/ Ii(e, r), a);
};
Ge[oe.DATA_EXIST] = function(t, e) {
    var r = t.field;
    return t.operator, Fh(/*#__PURE__*/ Ii(e, r));
};
Ge[oe.UNDIRECTED_EDGE] = function(t, e) {
    var r = t.nodes[0], a = t.nodes[1], n = /*#__PURE__*/ e.source(), i = /*#__PURE__*/ e.target();
    return Ve(r, n) && Ve(a, i) || Ve(a, n) && Ve(r, i);
};
Ge[oe.NODE_NEIGHBOR] = function(t, e) {
    return Ve(t.node, e) && e.neighborhood().some(function(r) {
        return r.isNode() && Ve(t.neighbor, r);
    });
};
Ge[oe.DIRECTED_EDGE] = function(t, e) {
    return Ve(t.source, /*#__PURE__*/ e.source()) && Ve(t.target, /*#__PURE__*/ e.target());
};
Ge[oe.NODE_SOURCE] = function(t, e) {
    return Ve(t.source, e) && e.outgoers().some(function(r) {
        return r.isNode() && Ve(t.target, r);
    });
};
Ge[oe.NODE_TARGET] = function(t, e) {
    return Ve(t.target, e) && e.incomers().some(function(r) {
        return r.isNode() && Ve(t.source, r);
    });
};
Ge[oe.CHILD] = function(t, e) {
    return Ve(t.child, e) && Ve(t.parent, /*#__PURE__*/ e.parent());
};
Ge[oe.PARENT] = function(t, e) {
    return Ve(t.parent, e) && e.children().some(function(r) {
        return Ve(t.child, r);
    });
};
Ge[oe.DESCENDANT] = function(t, e) {
    return Ve(t.descendant, e) && e.ancestors().some(function(r) {
        return Ve(t.ancestor, r);
    });
};
Ge[oe.ANCESTOR] = function(t, e) {
    return Ve(t.ancestor, e) && e.descendants().some(function(r) {
        return Ve(t.descendant, r);
    });
};
Ge[oe.COMPOUND_SPLIT] = function(t, e) {
    return Ve(t.subject, e) && Ve(t.left, e) && Ve(t.right, e);
};
Ge[oe.TRUE] = function() {
    return true;
};
Ge[oe.COLLECTION] = function(t, e) {
    var r = t.value;
    return r.has(e);
};
Ge[oe.FILTER] = function(t, e) {
    var r = t.value;
    return r(e);
};
var qh = /*#__PURE__*/ m$1(function(e) {
    var r = this;
    if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === oe.ID) return e.getElementById(r[0].checks[0].value).collection();
    var a = /*#__PURE__*/ m$1(function(i) {
        for(var s = 0; s < r.length; s++){
            var o = r[s];
            if (Ve(o, i)) return true;
        }
        return false;
    }, "selectorFunction");
    return r.text() == null && (a = /*#__PURE__*/ m$1(function() {
        return true;
    }, "selectorFunction")), e.filter(a);
}, "filter"), $h = /*#__PURE__*/ m$1(function(e) {
    for(var r = this, a = 0; a < r.length; a++){
        var n = r[a];
        if (Ve(n, e)) return true;
    }
    return false;
}, "matches"), Kh = {
    matches: $h,
    filter: qh
}, ir = /*#__PURE__*/ m$1(function(e) {
    this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || ce(e) && e.match(/^\s*$/) || (Et(e) ? this.addQuery({
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
    }) : ce(e) ? this.parse(e) || (this.invalid = true) : $e("A selector must be created from a string; found "));
}, "Selector"), sr = ir.prototype;
[
    Nh,
    Kh
].forEach(function(t) {
    return he(sr, t);
});
sr.text = function() {
    return this.inputText;
};
sr.size = function() {
    return this.length;
};
sr.eq = function(t) {
    return this[t];
};
sr.sameText = function(t) {
    return !this.invalid && !t.invalid && this.text() === t.text();
};
sr.addQuery = function(t) {
    this[this.length++] = t;
};
sr.selector = sr.toString;
var er = {
    allAre: /*#__PURE__*/ m$1(function(e) {
        var r = new ir(e);
        return this.every(function(a) {
            return r.matches(a);
        });
    }, "allAre"),
    is: /*#__PURE__*/ m$1(function(e) {
        var r = new ir(e);
        return this.some(function(a) {
            return r.matches(a);
        });
    }, "is"),
    some: /*#__PURE__*/ m$1(function(e, r) {
        for(var a = 0; a < this.length; a++){
            var n = r ? e.apply(r, [
                this[a],
                a,
                this
            ]) : e(this[a], a, this);
            if (n) return true;
        }
        return false;
    }, "some"),
    every: /*#__PURE__*/ m$1(function(e, r) {
        for(var a = 0; a < this.length; a++){
            var n = r ? e.apply(r, [
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
        var r = this.length, a = e.length;
        return r !== a ? false : r === 1 ? this[0] === e[0] : this.every(function(n) {
            return e.hasElementWithId(/*#__PURE__*/ n.id());
        });
    }, "same"),
    anySame: /*#__PURE__*/ m$1(function(e) {
        return e = /*#__PURE__*/ this.cy().collection(e), this.some(function(r) {
            return e.hasElementWithId(/*#__PURE__*/ r.id());
        });
    }, "anySame"),
    allAreNeighbors: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ this.cy().collection(e);
        var r = /*#__PURE__*/ this.neighborhood();
        return e.every(function(a) {
            return r.hasElementWithId(/*#__PURE__*/ a.id());
        });
    }, "allAreNeighbors"),
    contains: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ this.cy().collection(e);
        var r = this;
        return e.every(function(a) {
            return r.hasElementWithId(/*#__PURE__*/ a.id());
        });
    }, "contains")
};
er.allAreNeighbours = er.allAreNeighbors;
er.has = er.contains;
er.equal = er.equals = er.same;
var Dt = /*#__PURE__*/ m$1(function(e, r) {
    return m$1(function(n, i, s, o) {
        var l = n, u = this, f;
        if (l == null ? f = "" : Et(l) && l.length === 1 && (f = /*#__PURE__*/ l.id()), u.length === 1 && f) {
            var c = u[0]._private, d = c.traversalCache = c.traversalCache || {}, g = d[r] = d[r] || [], h = /*#__PURE__*/ ar(f), m = g[h];
            return m || (g[h] = /*#__PURE__*/ e.call(u, n, i, s, o));
        } else return e.call(u, n, i, s, o);
    }, "traversalCache");
}, "cache"), Kr = {
    parent: /*#__PURE__*/ m$1(function(e) {
        var r = [];
        if (this.length === 1) {
            var a = this[0]._private.parent;
            if (a) return a;
        }
        for(var n = 0; n < this.length; n++){
            var i = this[n], s = i._private.parent;
            s && r.push(s);
        }
        return this.spawn(r, true).filter(e);
    }, "parent"),
    parents: /*#__PURE__*/ m$1(function(e) {
        for(var r = [], a = /*#__PURE__*/ this.parent(); a.nonempty();){
            for(var n = 0; n < a.length; n++){
                var i = a[n];
                r.push(i);
            }
            a = /*#__PURE__*/ a.parent();
        }
        return this.spawn(r, true).filter(e);
    }, "parents"),
    commonAncestors: /*#__PURE__*/ m$1(function(e) {
        for(var r, a = 0; a < this.length; a++){
            var n = this[a], i = /*#__PURE__*/ n.parents();
            r = r || i, r = /*#__PURE__*/ r.intersect(i);
        }
        return r.filter(e);
    }, "commonAncestors"),
    orphans: /*#__PURE__*/ m$1(function(e) {
        return this.stdFilter(function(r) {
            return r.isOrphan();
        }).filter(e);
    }, "orphans"),
    nonorphans: /*#__PURE__*/ m$1(function(e) {
        return this.stdFilter(function(r) {
            return r.isChild();
        }).filter(e);
    }, "nonorphans"),
    children: /*#__PURE__*/ Dt(function(t) {
        for(var e = [], r = 0; r < this.length; r++)for(var a = this[r], n = a._private.children, i = 0; i < n.length; i++)e.push(n[i]);
        return this.spawn(e, true).filter(t);
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
        var r = [];
        function a(n) {
            for(var i = 0; i < n.length; i++){
                var s = n[i];
                r.push(s), s.children().nonempty() && a(/*#__PURE__*/ s.children());
            }
        }
        return m$1(a, "add"), a(/*#__PURE__*/ this.children()), this.spawn(r, true).filter(e);
    }, "descendants")
};
function Oi(t, e, r, a) {
    for(var n = [], i = new Wr, s = /*#__PURE__*/ t.cy(), o = /*#__PURE__*/ s.hasCompoundNodes(), l = 0; l < t.length; l++){
        var u = t[l];
        r ? n.push(u) : o && a(n, i, u);
    }
    for(; n.length > 0;){
        var f = /*#__PURE__*/ n.shift();
        e(f), i.add(/*#__PURE__*/ f.id()), o && a(n, i, f);
    }
    return t;
}
m$1(Oi, "forEachCompound");
function su(t, e, r) {
    if (r.isParent()) for(var a = r._private.children, n = 0; n < a.length; n++){
        var i = a[n];
        e.has(/*#__PURE__*/ i.id()) || t.push(i);
    }
}
m$1(su, "addChildren");
Kr.forEachDown = function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return Oi(this, t, e, su);
};
function ou(t, e, r) {
    if (r.isChild()) {
        var a = r._private.parent;
        e.has(/*#__PURE__*/ a.id()) || t.push(a);
    }
}
m$1(ou, "addParent");
Kr.forEachUp = function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return Oi(this, t, e, ou);
};
function Gh(t, e, r) {
    ou(t, e, r), su(t, e, r);
}
m$1(Gh, "addParentAndChildren");
Kr.forEachUpAndDown = function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return Oi(this, t, e, Gh);
};
Kr.ancestors = Kr.parents;
var Sa, uu;
Sa = uu = {
    data: /*#__PURE__*/ Ae.data({
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
    removeData: /*#__PURE__*/ Ae.removeData({
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
    scratch: /*#__PURE__*/ Ae.data({
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
    removeScratch: /*#__PURE__*/ Ae.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    }),
    rscratch: /*#__PURE__*/ Ae.data({
        field: "rscratch",
        allowBinding: false,
        allowSetting: true,
        settingTriggersEvent: false,
        allowGetting: true
    }),
    removeRscratch: /*#__PURE__*/ Ae.removeData({
        field: "rscratch",
        triggerEvent: false
    }),
    id: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) return e._private.data.id;
    }, "id")
};
Sa.attr = Sa.data;
Sa.removeAttr = Sa.removeData;
var Wh = uu, Rn = {};
function Yn(t) {
    return function(e) {
        var r = this;
        if (e === void 0 && (e = true), r.length !== 0) if (r.isNode() && !r.removed()) {
            for(var a = 0, n = r[0], i = n._private.edges, s = 0; s < i.length; s++){
                var o = i[s];
                !e && o.isLoop() || (a += /*#__PURE__*/ t(n, o));
            }
            return a;
        } else return;
    };
}
m$1(Yn, "defineDegreeFunction");
he(Rn, {
    degree: /*#__PURE__*/ Yn(function(t, e) {
        return e.source().same(/*#__PURE__*/ e.target()) ? 2 : 1;
    }),
    indegree: /*#__PURE__*/ Yn(function(t, e) {
        return e.target().same(t) ? 1 : 0;
    }),
    outdegree: /*#__PURE__*/ Yn(function(t, e) {
        return e.source().same(t) ? 1 : 0;
    })
});
function Pr(t, e) {
    return function(r) {
        for(var a, n = /*#__PURE__*/ this.nodes(), i = 0; i < n.length; i++){
            var s = n[i], o = /*#__PURE__*/ s[t](r);
            o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
        }
        return a;
    };
}
m$1(Pr, "defineDegreeBoundsFunction");
he(Rn, {
    minDegree: /*#__PURE__*/ Pr("degree", function(t, e) {
        return t < e;
    }),
    maxDegree: /*#__PURE__*/ Pr("degree", function(t, e) {
        return t > e;
    }),
    minIndegree: /*#__PURE__*/ Pr("indegree", function(t, e) {
        return t < e;
    }),
    maxIndegree: /*#__PURE__*/ Pr("indegree", function(t, e) {
        return t > e;
    }),
    minOutdegree: /*#__PURE__*/ Pr("outdegree", function(t, e) {
        return t < e;
    }),
    maxOutdegree: /*#__PURE__*/ Pr("outdegree", function(t, e) {
        return t > e;
    })
});
he(Rn, {
    totalDegree: /*#__PURE__*/ m$1(function(e) {
        for(var r = 0, a = /*#__PURE__*/ this.nodes(), n = 0; n < a.length; n++)r += /*#__PURE__*/ a[n].degree(e);
        return r;
    }, "totalDegree")
});
var Rt, lu, vu = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = 0; n < e.length; n++){
        var i = e[n];
        if (!i.locked()) {
            var s = i._private.position, o = {
                x: r.x != null ? r.x - s.x : 0,
                y: r.y != null ? r.y - s.y : 0
            };
            i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
        }
    }
}, "beforePositionSet"), Ds = {
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
    beforeSet: /*#__PURE__*/ m$1(function(e, r) {
        vu(e, r, false);
    }, "beforeSet"),
    onSet: /*#__PURE__*/ m$1(function(e) {
        e.dirtyCompoundBoundsCache();
    }, "onSet"),
    canSet: /*#__PURE__*/ m$1(function(e) {
        return !e.locked();
    }, "canSet")
};
Rt = lu = {
    position: /*#__PURE__*/ Ae.data(Ds),
    silentPosition: /*#__PURE__*/ Ae.data(/*#__PURE__*/ he({}, Ds, {
        allowBinding: false,
        allowSetting: true,
        settingTriggersEvent: false,
        allowGetting: false,
        beforeSet: /*#__PURE__*/ m$1(function(e, r) {
            vu(e, r, true);
        }, "beforeSet"),
        onSet: /*#__PURE__*/ m$1(function(e) {
            e.dirtyCompoundBoundsCache();
        }, "onSet")
    })),
    positions: /*#__PURE__*/ m$1(function(e, r) {
        if (Pe(e)) r ? this.silentPosition(e) : this.position(e);
        else if (Ke(e)) {
            var a = e, n = /*#__PURE__*/ this.cy();
            n.startBatch();
            for(var i = 0; i < this.length; i++){
                var s = this[i], o = void 0;
                (o = /*#__PURE__*/ a(s, i)) && (r ? s.silentPosition(o) : s.position(o));
            }
            n.endBatch();
        }
        return this;
    }, "positions"),
    silentPositions: /*#__PURE__*/ m$1(function(e) {
        return this.positions(e, true);
    }, "silentPositions"),
    shift: /*#__PURE__*/ m$1(function(e, r, a) {
        var n;
        if (Pe(e) ? (n = {
            x: ae(e.x) ? e.x : 0,
            y: ae(e.y) ? e.y : 0
        }, a = r) : ce(e) && ae(r) && (n = {
            x: 0,
            y: 0
        }, n[e] = r), n != null) {
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
    silentShift: /*#__PURE__*/ m$1(function(e, r) {
        return Pe(e) ? this.shift(e, true) : ce(e) && ae(r) && this.shift(e, r, true), this;
    }, "silentShift"),
    renderedPosition: /*#__PURE__*/ m$1(function(e, r) {
        var a = this[0], n = /*#__PURE__*/ this.cy(), i = /*#__PURE__*/ n.zoom(), s = /*#__PURE__*/ n.pan(), o = Pe(e) ? e : void 0, l = o !== void 0 || r !== void 0 && ce(e);
        if (a && a.isNode()) if (l) for(var u = 0; u < this.length; u++){
            var f = this[u];
            r !== void 0 ? f.position(e, (r - s[e]) / i) : o !== void 0 && f.position(/*#__PURE__*/ No(o, i, s));
        }
        else {
            var c = /*#__PURE__*/ a.position();
            return o = /*#__PURE__*/ Dn(c, i, s), e === void 0 ? o : o[e];
        }
        else if (!l) return;
        return this;
    }, "renderedPosition"),
    relativePosition: /*#__PURE__*/ m$1(function(e, r) {
        var a = this[0], n = /*#__PURE__*/ this.cy(), i = Pe(e) ? e : void 0, s = i !== void 0 || r !== void 0 && ce(e), o = /*#__PURE__*/ n.hasCompoundNodes();
        if (a && a.isNode()) if (s) for(var l = 0; l < this.length; l++){
            var u = this[l], f = o ? u.parent() : null, c = f && f.length > 0, d = c;
            c && (f = f[0]);
            var g = d ? f.position() : {
                x: 0,
                y: 0
            };
            r !== void 0 ? u.position(e, r + g[e]) : i !== void 0 && u.position({
                x: i.x + g.x,
                y: i.y + g.y
            });
        }
        else {
            var h = /*#__PURE__*/ a.position(), m = o ? a.parent() : null, y = m && m.length > 0, p = y;
            y && (m = m[0]);
            var b1 = p ? m.position() : {
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
Rt.modelPosition = Rt.point = Rt.position;
Rt.modelPositions = Rt.points = Rt.positions;
Rt.renderedPoint = Rt.renderedPosition;
Rt.relativePoint = Rt.relativePosition;
var Hh = lu, Fr, vr;
Fr = vr = {};
vr.renderedBoundingBox = function(t) {
    var e = /*#__PURE__*/ this.boundingBox(t), r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ r.zoom(), n = /*#__PURE__*/ r.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, l = e.y2 * a + n.y;
    return {
        x1: i,
        x2: s,
        y1: o,
        y2: l,
        w: s - i,
        h: l - o
    };
};
vr.dirtyCompoundBoundsCache = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = /*#__PURE__*/ this.cy();
    return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
        if (r.isParent()) {
            var a = r._private;
            a.compoundBoundsClean = false, a.bbCache = null, t || r.emitAndNotify("bounds");
        }
    }), this);
};
vr.updateCompoundBounds = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = /*#__PURE__*/ this.cy();
    if (!e.styleEnabled() || !e.hasCompoundNodes()) return this;
    if (!t && e.batching()) return this;
    function r(s) {
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
        function g(C, B, A) {
            var P = 0, M = 0, R = B + A;
            return C > 0 && R > 0 && (P = B / R * C, M = A / R * C), {
                biasDiff: P,
                biasComplementDiff: M
            };
        }
        m$1(g, "computeBiasValues");
        function h(C, B, A, P) {
            if (A.units === "%") switch(P){
                case "width":
                    return C > 0 ? A.pfValue * C : 0;
                case "height":
                    return B > 0 ? A.pfValue * B : 0;
                case "average":
                    return C > 0 && B > 0 ? A.pfValue * (C + B) / 2 : 0;
                case "min":
                    return C > 0 && B > 0 ? C > B ? A.pfValue * B : A.pfValue * C : 0;
                case "max":
                    return C > 0 && B > 0 ? C > B ? A.pfValue * C : A.pfValue * B : 0;
                default:
                    return 0;
            }
            else return A.units === "px" ? A.pfValue : 0;
        }
        m$1(h, "computePaddingValues");
        var m = f.width.left.value;
        f.width.left.units === "px" && f.width.val > 0 && (m = m * 100 / f.width.val);
        var y = f.width.right.value;
        f.width.right.units === "px" && f.width.val > 0 && (y = y * 100 / f.width.val);
        var p = f.height.top.value;
        f.height.top.units === "px" && f.height.val > 0 && (p = p * 100 / f.height.val);
        var b1 = f.height.bottom.value;
        f.height.bottom.units === "px" && f.height.val > 0 && (b1 = b1 * 100 / f.height.val);
        var w = /*#__PURE__*/ g(f.width.val - c.w, m, y), x = w.biasDiff, S = w.biasComplementDiff, T = /*#__PURE__*/ g(f.height.val - c.h, p, b1), E = T.biasDiff, D = T.biasComplementDiff;
        o.autoPadding = /*#__PURE__*/ h(c.w, c.h, /*#__PURE__*/ s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = /*#__PURE__*/ Math.max(c.w, f.width.val), d.x = (-x + c.x1 + c.x2 + S) / 2, o.autoHeight = /*#__PURE__*/ Math.max(c.h, f.height.val), d.y = (-E + c.y1 + c.y2 + D) / 2;
    }
    m$1(r, "update");
    for(var a = 0; a < this.length; a++){
        var n = this[a], i = n._private;
        (!i.compoundBoundsClean || t) && (r(n), e.batching() || (i.compoundBoundsClean = true));
    }
    return this;
};
var St = /*#__PURE__*/ m$1(function(e) {
    return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, "noninf"), Bt = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    n - r === 0 || i - a === 0 || r == null || a == null || n == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, "updateBounds"), gr = /*#__PURE__*/ m$1(function(e, r) {
    return r == null ? e : Bt(e, r.x1, r.y1, r.x2, r.y2);
}, "updateBoundsFromBox"), na = /*#__PURE__*/ m$1(function(e, r, a) {
    return At(e, r, a);
}, "prefixedProperty"), Xa = /*#__PURE__*/ m$1(function(e, r, a) {
    if (!r.cy().headless()) {
        var n = r._private, i = n.rstyle, s = i.arrowWidth / 2, o = r.pstyle(a + "-arrow-shape").value, l, u;
        if (o !== "none") {
            a === "source" ? (l = i.srcX, u = i.srcY) : a === "target" ? (l = i.tgtX, u = i.tgtY) : (l = i.midX, u = i.midY);
            var f = n.arrowBounds = n.arrowBounds || {}, c = f[a] = f[a] || {};
            c.x1 = l - s, c.y1 = u - s, c.x2 = l + s, c.y2 = u + s, c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, tn(c, 1), Bt(e, c.x1, c.y1, c.x2, c.y2);
        }
    }
}, "updateBoundsFromArrow"), _n = /*#__PURE__*/ m$1(function(e, r, a) {
    if (!r.cy().headless()) {
        var n;
        a ? n = a + "-" : n = "";
        var i = r._private, s = i.rstyle, o = r.pstyle(n + "label").strValue;
        if (o) {
            var l = /*#__PURE__*/ r.pstyle("text-halign"), u = /*#__PURE__*/ r.pstyle("text-valign"), f = /*#__PURE__*/ na(s, "labelWidth", a), c = /*#__PURE__*/ na(s, "labelHeight", a), d = /*#__PURE__*/ na(s, "labelX", a), g = /*#__PURE__*/ na(s, "labelY", a), h = r.pstyle(n + "text-margin-x").pfValue, m = r.pstyle(n + "text-margin-y").pfValue, y = /*#__PURE__*/ r.isEdge(), p = /*#__PURE__*/ r.pstyle(n + "text-rotation"), b1 = r.pstyle("text-outline-width").pfValue, w = r.pstyle("text-border-width").pfValue, x = w / 2, S = r.pstyle("text-background-padding").pfValue, T = 2, E = c, D = f, C = D / 2, B = E / 2, A, P, M, R;
            if (y) A = d - C, P = d + C, M = g - B, R = g + B;
            else {
                switch(l.value){
                    case "left":
                        A = d - D, P = d;
                        break;
                    case "center":
                        A = d - C, P = d + C;
                        break;
                    case "right":
                        A = d, P = d + D;
                        break;
                }
                switch(u.value){
                    case "top":
                        M = g - E, R = g;
                        break;
                    case "center":
                        M = g - B, R = g + B;
                        break;
                    case "bottom":
                        M = g, R = g + E;
                        break;
                }
            }
            var I = h - Math.max(b1, x) - S - T, L = h + Math.max(b1, x) + S + T, O = m - Math.max(b1, x) - S - T, N = m + Math.max(b1, x) + S + T;
            A += I, P += L, M += O, R += N;
            var $ = a || "main", H = i.labelBounds, q = H[$] = H[$] || {};
            q.x1 = A, q.y1 = M, q.x2 = P, q.y2 = R, q.w = P - A, q.h = R - M, q.leftPad = I, q.rightPad = L, q.topPad = O, q.botPad = N;
            var K = y && p.strValue === "autorotate", Y = p.pfValue != null && p.pfValue !== 0;
            if (K || Y) {
                var Z = K ? na(i.rstyle, "labelAngle", a) : p.pfValue, J = /*#__PURE__*/ Math.cos(Z), Q = /*#__PURE__*/ Math.sin(Z), ee = (A + P) / 2, re = (M + R) / 2;
                if (!y) {
                    switch(l.value){
                        case "left":
                            ee = P;
                            break;
                        case "right":
                            ee = A;
                            break;
                    }
                    switch(u.value){
                        case "top":
                            re = R;
                            break;
                        case "bottom":
                            re = M;
                            break;
                    }
                }
                var W = /*#__PURE__*/ m$1(function(Le, ve) {
                    return Le = Le - ee, ve = ve - re, {
                        x: Le * J - ve * Q + ee,
                        y: Le * Q + ve * J + re
                    };
                }, "rotate"), z = /*#__PURE__*/ W(A, M), U = /*#__PURE__*/ W(A, R), te = /*#__PURE__*/ W(P, M), se = /*#__PURE__*/ W(P, R);
                A = /*#__PURE__*/ Math.min(z.x, U.x, te.x, se.x), P = /*#__PURE__*/ Math.max(z.x, U.x, te.x, se.x), M = /*#__PURE__*/ Math.min(z.y, U.y, te.y, se.y), R = /*#__PURE__*/ Math.max(z.y, U.y, te.y, se.y);
            }
            var le = $ + "Rot", Se = H[le] = H[le] || {};
            Se.x1 = A, Se.y1 = M, Se.x2 = P, Se.y2 = R, Se.w = P - A, Se.h = R - M, Bt(e, A, M, P, R), Bt(i.labelBounds.all, A, M, P, R);
        }
        return e;
    }
}, "updateBoundsFromLabel"), Uh = /*#__PURE__*/ m$1(function(e, r) {
    if (!r.cy().headless()) {
        var a = r.pstyle("outline-opacity").value, n = r.pstyle("outline-width").value;
        if (a > 0 && n > 0) {
            var i = r.pstyle("outline-offset").value, s = r.pstyle("shape").value, o = n + i, l = (e.w + o * 2) / e.w, u = (e.h + o * 2) / e.h, f = 0, c = 0;
            [
                "diamond",
                "pentagon",
                "round-triangle"
            ].includes(s) ? (l = (e.w + o * 2.4) / e.w, c = -o / 3.6) : [
                "concave-hexagon",
                "rhomboid",
                "right-rhomboid"
            ].includes(s) ? l = (e.w + o * 2.4) / e.w : s === "star" ? (l = (e.w + o * 2.8) / e.w, u = (e.h + o * 2.6) / e.h, c = -o / 3.8) : s === "triangle" ? (l = (e.w + o * 2.8) / e.w, u = (e.h + o * 2.4) / e.h, c = -o / 1.4) : s === "vee" && (l = (e.w + o * 4.4) / e.w, u = (e.h + o * 3.8) / e.h, c = -o * .5);
            var d = e.h * u - e.h, g = e.w * l - e.w;
            if (rn(e, [
                /*#__PURE__*/ Math.ceil(d / 2),
                /*#__PURE__*/ Math.ceil(g / 2)
            ]), f != 0 || c !== 0) {
                var h = /*#__PURE__*/ df(e, f, c);
                Fo(e, h);
            }
        }
    }
}, "updateBoundsFromOutline"), Xh = /*#__PURE__*/ m$1(function(e, r) {
    var a = e._private.cy, n = /*#__PURE__*/ a.styleEnabled(), i = /*#__PURE__*/ a.headless(), s = /*#__PURE__*/ yt(), o = e._private, l = /*#__PURE__*/ e.isNode(), u = /*#__PURE__*/ e.isEdge(), f, c, d, g, h, m, y = o.rstyle, p = l && n ? e.pstyle("bounds-expansion").pfValue : [
        0
    ], b1 = /*#__PURE__*/ m$1(function(Me) {
        return Me.pstyle("display").value !== "none";
    }, "isDisplayed"), w = !n || b1(e) && (!u || b1(/*#__PURE__*/ e.source()) && b1(/*#__PURE__*/ e.target()));
    if (w) {
        var x = 0, S = 0;
        n && r.includeOverlays && (x = e.pstyle("overlay-opacity").value, x !== 0 && (S = e.pstyle("overlay-padding").value));
        var T = 0, E = 0;
        n && r.includeUnderlays && (T = e.pstyle("underlay-opacity").value, T !== 0 && (E = e.pstyle("underlay-padding").value));
        var D = /*#__PURE__*/ Math.max(S, E), C = 0, B = 0;
        if (n && (C = e.pstyle("width").pfValue, B = C / 2), l && r.includeNodes) {
            var A = /*#__PURE__*/ e.position();
            h = A.x, m = A.y;
            var P = /*#__PURE__*/ e.outerWidth(), M = P / 2, R = /*#__PURE__*/ e.outerHeight(), I = R / 2;
            f = h - M, c = h + M, d = m - I, g = m + I, Bt(s, f, d, c, g), n && r.includeOutlines && Uh(s, e);
        } else if (u && r.includeEdges) if (n && !i) {
            var L = e.pstyle("curve-style").strValue;
            if (f = /*#__PURE__*/ Math.min(y.srcX, y.midX, y.tgtX), c = /*#__PURE__*/ Math.max(y.srcX, y.midX, y.tgtX), d = /*#__PURE__*/ Math.min(y.srcY, y.midY, y.tgtY), g = /*#__PURE__*/ Math.max(y.srcY, y.midY, y.tgtY), f -= B, c += B, d -= B, g += B, Bt(s, f, d, c, g), L === "haystack") {
                var O = y.haystackPts;
                if (O && O.length === 2) {
                    if (f = O[0].x, d = O[0].y, c = O[1].x, g = O[1].y, f > c) {
                        var N = f;
                        f = c, c = N;
                    }
                    if (d > g) {
                        var $ = d;
                        d = g, g = $;
                    }
                    Bt(s, f - B, d - B, c + B, g + B);
                }
            } else if (L === "bezier" || L === "unbundled-bezier" || L.endsWith("segments") || L.endsWith("taxi")) {
                var H;
                switch(L){
                    case "bezier":
                    case "unbundled-bezier":
                        H = y.bezierPts;
                        break;
                    case "segments":
                    case "taxi":
                    case "round-segments":
                    case "round-taxi":
                        H = y.linePts;
                        break;
                }
                if (H != null) for(var q = 0; q < H.length; q++){
                    var K = H[q];
                    f = K.x - B, c = K.x + B, d = K.y - B, g = K.y + B, Bt(s, f, d, c, g);
                }
            }
        } else {
            var Y = /*#__PURE__*/ e.source(), Z = /*#__PURE__*/ Y.position(), J = /*#__PURE__*/ e.target(), Q = /*#__PURE__*/ J.position();
            if (f = Z.x, c = Q.x, d = Z.y, g = Q.y, f > c) {
                var ee = f;
                f = c, c = ee;
            }
            if (d > g) {
                var re = d;
                d = g, g = re;
            }
            f -= B, c += B, d -= B, g += B, Bt(s, f, d, c, g);
        }
        if (n && r.includeEdges && u && (Xa(s, e, "mid-source"), Xa(s, e, "mid-target"), Xa(s, e, "source"), Xa(s, e, "target")), n) {
            var W = e.pstyle("ghost").value === "yes";
            if (W) {
                var z = e.pstyle("ghost-offset-x").pfValue, U = e.pstyle("ghost-offset-y").pfValue;
                Bt(s, s.x1 + z, s.y1 + U, s.x2 + z, s.y2 + U);
            }
        }
        var te = o.bodyBounds = o.bodyBounds || {};
        is(te, s), rn(te, p), tn(te, 1), n && (f = s.x1, c = s.x2, d = s.y1, g = s.y2, Bt(s, f - D, d - D, c + D, g + D));
        var se = o.overlayBounds = o.overlayBounds || {};
        is(se, s), rn(se, p), tn(se, 1);
        var le = o.labelBounds = o.labelBounds || {};
        le.all != null ? cf(le.all) : le.all = /*#__PURE__*/ yt(), n && r.includeLabels && (r.includeMainLabels && _n(s, e, null), u && (r.includeSourceLabels && _n(s, e, "source"), r.includeTargetLabels && _n(s, e, "target")));
    }
    return s.x1 = /*#__PURE__*/ St(s.x1), s.y1 = /*#__PURE__*/ St(s.y1), s.x2 = /*#__PURE__*/ St(s.x2), s.y2 = /*#__PURE__*/ St(s.y2), s.w = /*#__PURE__*/ St(s.x2 - s.x1), s.h = /*#__PURE__*/ St(s.y2 - s.y1), s.w > 0 && s.h > 0 && w && (rn(s, p), tn(s, 1)), s;
}, "boundingBoxImpl"), fu = /*#__PURE__*/ m$1(function(e) {
    var r = 0, a = /*#__PURE__*/ m$1(function(s) {
        return (s ? 1 : 0) << r++;
    }, "tf"), n = 0;
    return n += /*#__PURE__*/ a(e.incudeNodes), n += /*#__PURE__*/ a(e.includeEdges), n += /*#__PURE__*/ a(e.includeLabels), n += /*#__PURE__*/ a(e.includeMainLabels), n += /*#__PURE__*/ a(e.includeSourceLabels), n += /*#__PURE__*/ a(e.includeTargetLabels), n += /*#__PURE__*/ a(e.includeOverlays), n += /*#__PURE__*/ a(e.includeOutlines), n;
}, "getKey"), cu = /*#__PURE__*/ m$1(function(e) {
    if (e.isEdge()) {
        var r = /*#__PURE__*/ e.source().position(), a = /*#__PURE__*/ e.target().position(), n = /*#__PURE__*/ m$1(function(s) {
            return Math.round(s);
        }, "r");
        return Mv([
            /*#__PURE__*/ n(r.x),
            /*#__PURE__*/ n(r.y),
            /*#__PURE__*/ n(a.x),
            /*#__PURE__*/ n(a.y)
        ]);
    } else return 0;
}, "getBoundingBoxPosKey"), ks = /*#__PURE__*/ m$1(function(e, r) {
    var a = e._private, n, i = /*#__PURE__*/ e.isEdge(), s = r == null ? Ps : fu(r), o = s === Ps, l = /*#__PURE__*/ cu(e), u = a.bbCachePosKey === l, f = r.useCache && u, c = /*#__PURE__*/ m$1(function(m) {
        return m._private.bbCache == null || m._private.styleDirty;
    }, "isDirty"), d = !f || c(e) || i && (c(/*#__PURE__*/ e.source()) || c(/*#__PURE__*/ e.target()));
    if (d ? (u || e.recalculateRenderedStyle(f), n = /*#__PURE__*/ Xh(e, Da), a.bbCache = n, a.bbCachePosKey = l) : n = a.bbCache, !o) {
        var g = /*#__PURE__*/ e.isNode();
        n = /*#__PURE__*/ yt(), (r.includeNodes && g || r.includeEdges && !g) && (r.includeOverlays ? gr(n, a.overlayBounds) : gr(n, a.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? gr(n, a.labelBounds.all) : (r.includeMainLabels && gr(n, a.labelBounds.mainRot), r.includeSourceLabels && gr(n, a.labelBounds.sourceRot), r.includeTargetLabels && gr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
    }
    return n;
}, "cachedBoundingBoxImpl"), Da = {
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
}, Ps = /*#__PURE__*/ fu(Da), Bs = /*#__PURE__*/ et(Da);
vr.boundingBox = function(t) {
    var e;
    if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (t === void 0 || t.useCache === void 0 || t.useCache === true)) t === void 0 ? t = Da : t = /*#__PURE__*/ Bs(t), e = /*#__PURE__*/ ks(this[0], t);
    else {
        e = /*#__PURE__*/ yt(), t = t || Da;
        var r = /*#__PURE__*/ Bs(t), a = this, n = /*#__PURE__*/ a.cy(), i = /*#__PURE__*/ n.styleEnabled();
        if (i) for(var s = 0; s < a.length; s++){
            var o = a[s], l = o._private, u = /*#__PURE__*/ cu(o), f = l.bbCachePosKey === u, c = r.useCache && f && !l.styleDirty;
            o.recalculateRenderedStyle(c);
        }
        this.updateCompoundBounds(!t.useCache);
        for(var d = 0; d < a.length; d++){
            var g = a[d];
            gr(e, /*#__PURE__*/ ks(g, r));
        }
    }
    return e.x1 = /*#__PURE__*/ St(e.x1), e.y1 = /*#__PURE__*/ St(e.y1), e.x2 = /*#__PURE__*/ St(e.x2), e.y2 = /*#__PURE__*/ St(e.y2), e.w = /*#__PURE__*/ St(e.x2 - e.x1), e.h = /*#__PURE__*/ St(e.y2 - e.y1), e;
};
vr.dirtyBoundingBoxCache = function() {
    for(var t = 0; t < this.length; t++){
        var e = this[t]._private;
        e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
    }
    return this.emitAndNotify("bounds"), this;
};
vr.boundingBoxAt = function(t) {
    var e = /*#__PURE__*/ this.nodes(), r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ r.hasCompoundNodes(), n = /*#__PURE__*/ r.collection();
    if (a && (n = /*#__PURE__*/ e.filter(function(u) {
        return u.isParent();
    }), e = /*#__PURE__*/ e.not(n)), Pe(t)) {
        var i = t;
        t = /*#__PURE__*/ m$1(function() {
            return i;
        }, "fn");
    }
    var s = /*#__PURE__*/ m$1(function(f, c) {
        return f._private.bbAtOldPos = /*#__PURE__*/ t(f, c);
    }, "storeOldPos"), o = /*#__PURE__*/ m$1(function(f) {
        return f._private.bbAtOldPos;
    }, "getOldPos");
    r.startBatch(), e.forEach(s).silentPositions(t), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(true));
    var l = /*#__PURE__*/ ff(/*#__PURE__*/ this.boundingBox({
        useCache: false
    }));
    return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(true)), r.endBatch(), l;
};
Fr.boundingbox = Fr.bb = Fr.boundingBox;
Fr.renderedBoundingbox = Fr.renderedBoundingBox;
var Yh = vr, ca, Ia;
ca = Ia = {};
var du = /*#__PURE__*/ m$1(function(e) {
    e.uppercaseName = /*#__PURE__*/ Ji(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = /*#__PURE__*/ Ji(e.outerName), ca[e.name] = /*#__PURE__*/ m$1(function() {
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
    }, "dimImpl"), ca["outer" + e.uppercaseName] = /*#__PURE__*/ m$1(function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a) if (s) {
            var o = /*#__PURE__*/ a[e.name](), l = a.pstyle("border-width").pfValue, u = 2 * a.padding();
            return o + l + u;
        } else return 1;
    }, "outerDimImpl"), ca["rendered" + e.uppercaseName] = /*#__PURE__*/ m$1(function() {
        var a = this[0];
        if (a) {
            var n = /*#__PURE__*/ a[e.name]();
            return n * this.cy().zoom();
        }
    }, "renderedDimImpl"), ca["rendered" + e.uppercaseOuterName] = /*#__PURE__*/ m$1(function() {
        var a = this[0];
        if (a) {
            var n = /*#__PURE__*/ a[e.outerName]();
            return n * this.cy().zoom();
        }
    }, "renderedOuterDimImpl");
}, "defineDimFns");
du({
    name: "width"
});
du({
    name: "height"
});
Ia.padding = function() {
    var t = this[0], e = t._private;
    return t.isParent() ? (t.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t.pstyle("padding").pfValue) : t.pstyle("padding").pfValue;
};
Ia.paddedHeight = function() {
    var t = this[0];
    return t.height() + 2 * t.padding();
};
Ia.paddedWidth = function() {
    var t = this[0];
    return t.width() + 2 * t.padding();
};
var _h = Ia, Zh = /*#__PURE__*/ m$1(function(e, r) {
    if (e.isEdge()) return r(e);
}, "ifEdge"), Qh = /*#__PURE__*/ m$1(function(e, r) {
    if (e.isEdge()) {
        var a = /*#__PURE__*/ e.cy();
        return Dn(/*#__PURE__*/ r(e), /*#__PURE__*/ a.zoom(), /*#__PURE__*/ a.pan());
    }
}, "ifEdgeRenderedPosition"), Jh = /*#__PURE__*/ m$1(function(e, r) {
    if (e.isEdge()) {
        var a = /*#__PURE__*/ e.cy(), n = /*#__PURE__*/ a.pan(), i = /*#__PURE__*/ a.zoom();
        return r(e).map(function(s) {
            return Dn(s, i, n);
        });
    }
}, "ifEdgeRenderedPositions"), jh = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getControlPoints(e);
}, "controlPoints"), eg = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getSegmentPoints(e);
}, "segmentPoints"), tg = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getSourceEndpoint(e);
}, "sourceEndpoint"), rg = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getTargetEndpoint(e);
}, "targetEndpoint"), ag = /*#__PURE__*/ m$1(function(e) {
    return e.renderer().getEdgeMidpoint(e);
}, "midpoint"), As = {
    controlPoints: {
        get: jh,
        mult: true
    },
    segmentPoints: {
        get: eg,
        mult: true
    },
    sourceEndpoint: {
        get: tg
    },
    targetEndpoint: {
        get: rg
    },
    midpoint: {
        get: ag
    }
}, ng = /*#__PURE__*/ m$1(function(e) {
    return "rendered" + e[0].toUpperCase() + e.substr(1);
}, "renderedName"), ig = /*#__PURE__*/ Object.keys(As).reduce(function(t, e) {
    var r = As[e], a = /*#__PURE__*/ ng(e);
    return t[e] = function() {
        return Zh(this, r.get);
    }, r.mult ? t[a] = function() {
        return Jh(this, r.get);
    } : t[a] = function() {
        return Qh(this, r.get);
    }, t;
}, {}), sg = /*#__PURE__*/ he({}, Hh, Yh, _h, ig);
var hu = /*#__PURE__*/ m$1(function(e, r) {
    this.recycle(e, r);
}, "Event");
function ia() {
    return false;
}
m$1(ia, "returnFalse");
function Ya() {
    return true;
}
m$1(Ya, "returnTrue");
hu.prototype = {
    instanceString: /*#__PURE__*/ m$1(function() {
        return "event";
    }, "instanceString"),
    recycle: /*#__PURE__*/ m$1(function(e, r) {
        if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = ia, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Ya : ia) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
            var a = this.position, n = /*#__PURE__*/ this.cy.zoom(), i = /*#__PURE__*/ this.cy.pan();
            this.renderedPosition = {
                x: a.x * n + i.x,
                y: a.y * n + i.y
            };
        }
        this.timeStamp = e && e.timeStamp || Date.now();
    }, "recycle"),
    preventDefault: /*#__PURE__*/ m$1(function() {
        this.isDefaultPrevented = Ya;
        var e = this.originalEvent;
        e && e.preventDefault && e.preventDefault();
    }, "preventDefault"),
    stopPropagation: /*#__PURE__*/ m$1(function() {
        this.isPropagationStopped = Ya;
        var e = this.originalEvent;
        e && e.stopPropagation && e.stopPropagation();
    }, "stopPropagation"),
    stopImmediatePropagation: /*#__PURE__*/ m$1(function() {
        this.isImmediatePropagationStopped = Ya, this.stopPropagation();
    }, "stopImmediatePropagation"),
    isDefaultPrevented: ia,
    isPropagationStopped: ia,
    isImmediatePropagationStopped: ia
};
var gu = /^([^.]+)(\.(?:[^.]+))?$/, og = ".*", pu = {
    qualifierCompare: /*#__PURE__*/ m$1(function(e, r) {
        return e === r;
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
}, Rs = /*#__PURE__*/ Object.keys(pu), ug = {};
function Mn() {
    for(var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ug, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < Rs.length; r++){
        var a = Rs[r];
        this[a] = t[a] || pu[a];
    }
    this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
m$1(Mn, "Emitter");
var or = Mn.prototype, yu = /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o) {
    Ke(n) && (i = n, n = null), o && (s == null ? s = o : s = /*#__PURE__*/ he({}, s, o));
    for(var l = Oe(a) ? a : a.split(/\s+/), u = 0; u < l.length; u++){
        var f = l[u];
        if (!rr(f)) {
            var c = /*#__PURE__*/ f.match(gu);
            if (c) {
                var d = c[1], g = c[2] ? c[2] : null, h = /*#__PURE__*/ r(e, f, d, g, n, i, s);
                if (h === false) break;
            }
        }
    }
}, "forEachEvent"), Ms = /*#__PURE__*/ m$1(function(e, r) {
    return e.addEventFields(e.context, r), new hu(r.type, r);
}, "makeEventObj"), lg = /*#__PURE__*/ m$1(function(e, r, a) {
    if (Bl(a)) {
        r(e, a);
        return;
    } else if (Pe(a)) {
        r(e, /*#__PURE__*/ Ms(e, a));
        return;
    }
    for(var n = Oe(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++){
        var s = n[i];
        if (!rr(s)) {
            var o = /*#__PURE__*/ s.match(gu);
            if (o) {
                var l = o[1], u = o[2] ? o[2] : null, f = /*#__PURE__*/ Ms(e, {
                    type: l,
                    namespace: u,
                    target: e.context
                });
                r(e, f);
            }
        }
    }
}, "forEachEventObj");
or.on = or.addListener = function(t, e, r, a, n) {
    return yu(this, function(i, s, o, l, u, f, c) {
        Ke(f) && i.listeners.push({
            event: s,
            callback: f,
            type: o,
            namespace: l,
            qualifier: u,
            conf: c
        });
    }, t, e, r, a, n), this;
};
or.one = function(t, e, r, a) {
    return this.on(t, e, r, a, {
        one: true
    });
};
or.removeListener = or.off = function(t, e, r, a) {
    var n = this;
    this.emitting !== 0 && (this.listeners = /*#__PURE__*/ zv(this.listeners));
    for(var i = this.listeners, s = /*#__PURE__*/ m$1(function(u) {
        var f = i[u];
        yu(n, function(c, d, g, h, m, y) {
            if ((f.type === g || t === "*") && (!h && f.namespace !== ".*" || f.namespace === h) && (!m || c.qualifierCompare(f.qualifier, m)) && (!y || f.callback === y)) return i.splice(u, 1), false;
        }, t, e, r, a);
    }, "_loop"), o = i.length - 1; o >= 0; o--)s(o);
    return this;
};
or.removeAllListeners = function() {
    return this.removeListener("*");
};
or.emit = or.trigger = function(t, e, r) {
    var a = this.listeners, n = a.length;
    return this.emitting++, Oe(e) || (e = [
        e
    ]), lg(this, function(i, s) {
        r != null && (a = [
            {
                event: s.event,
                type: s.type,
                namespace: s.namespace,
                callback: r
            }
        ], n = a.length);
        for(var o = /*#__PURE__*/ m$1(function(f) {
            var c = a[f];
            if (c.type === s.type && (!c.namespace || c.namespace === s.namespace || c.namespace === og) && i.eventMatches(i.context, c, s)) {
                var d = [
                    s
                ];
                e != null && Vv(d, e), i.beforeEmit(i.context, c, s), c.conf && c.conf.one && (i.listeners = /*#__PURE__*/ i.listeners.filter(function(m) {
                    return m !== c;
                }));
                var g = /*#__PURE__*/ i.callbackContext(i.context, c, s), h = /*#__PURE__*/ c.callback.apply(g, d);
                i.afterEmit(i.context, c, s), h === false && (s.stopPropagation(), s.preventDefault());
            }
        }, "_loop2"), l = 0; l < n; l++)o(l);
        i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
    }, t), this.emitting--, this;
};
var vg = {
    qualifierCompare: /*#__PURE__*/ m$1(function(e, r) {
        return e == null || r == null ? e == null && r == null : e.sameText(r);
    }, "qualifierCompare"),
    eventMatches: /*#__PURE__*/ m$1(function(e, r, a) {
        var n = r.qualifier;
        return n != null ? e !== a.target && Aa(a.target) && n.matches(a.target) : true;
    }, "eventMatches"),
    addEventFields: /*#__PURE__*/ m$1(function(e, r) {
        r.cy = /*#__PURE__*/ e.cy(), r.target = e;
    }, "addEventFields"),
    callbackContext: /*#__PURE__*/ m$1(function(e, r, a) {
        return r.qualifier != null ? a.target : e;
    }, "callbackContext"),
    beforeEmit: /*#__PURE__*/ m$1(function(e, r) {
        r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
    }, "beforeEmit"),
    bubble: /*#__PURE__*/ m$1(function() {
        return true;
    }, "bubble"),
    parent: /*#__PURE__*/ m$1(function(e) {
        return e.isChild() ? e.parent() : e.cy();
    }, "parent")
}, _a = /*#__PURE__*/ m$1(function(e) {
    return ce(e) ? new ir(e) : e;
}, "argSelector"), mu = {
    createEmitter: /*#__PURE__*/ m$1(function() {
        for(var e = 0; e < this.length; e++){
            var r = this[e], a = r._private;
            a.emitter || (a.emitter = new Mn(vg, r));
        }
        return this;
    }, "createEmitter"),
    emitter: /*#__PURE__*/ m$1(function() {
        return this._private.emitter;
    }, "emitter"),
    on: /*#__PURE__*/ m$1(function(e, r, a) {
        for(var n = /*#__PURE__*/ _a(r), i = 0; i < this.length; i++){
            var s = this[i];
            s.emitter().on(e, n, a);
        }
        return this;
    }, "on"),
    removeListener: /*#__PURE__*/ m$1(function(e, r, a) {
        for(var n = /*#__PURE__*/ _a(r), i = 0; i < this.length; i++){
            var s = this[i];
            s.emitter().removeListener(e, n, a);
        }
        return this;
    }, "removeListener"),
    removeAllListeners: /*#__PURE__*/ m$1(function() {
        for(var e = 0; e < this.length; e++){
            var r = this[e];
            r.emitter().removeAllListeners();
        }
        return this;
    }, "removeAllListeners"),
    one: /*#__PURE__*/ m$1(function(e, r, a) {
        for(var n = /*#__PURE__*/ _a(r), i = 0; i < this.length; i++){
            var s = this[i];
            s.emitter().one(e, n, a);
        }
        return this;
    }, "one"),
    once: /*#__PURE__*/ m$1(function(e, r, a) {
        for(var n = /*#__PURE__*/ _a(r), i = 0; i < this.length; i++){
            var s = this[i];
            s.emitter().on(e, n, a, {
                once: true,
                onceCollection: this
            });
        }
    }, "once"),
    emit: /*#__PURE__*/ m$1(function(e, r) {
        for(var a = 0; a < this.length; a++){
            var n = this[a];
            n.emitter().emit(e, r);
        }
        return this;
    }, "emit"),
    emitAndNotify: /*#__PURE__*/ m$1(function(e, r) {
        if (this.length !== 0) return this.cy().notify(e, this), this.emit(e, r), this;
    }, "emitAndNotify")
};
Ae.eventAliasesOn(mu);
var bu = {
    nodes: /*#__PURE__*/ m$1(function(e) {
        return this.filter(function(r) {
            return r.isNode();
        }).filter(e);
    }, "nodes"),
    edges: /*#__PURE__*/ m$1(function(e) {
        return this.filter(function(r) {
            return r.isEdge();
        }).filter(e);
    }, "edges"),
    byGroup: /*#__PURE__*/ m$1(function() {
        for(var e = /*#__PURE__*/ this.spawn(), r = /*#__PURE__*/ this.spawn(), a = 0; a < this.length; a++){
            var n = this[a];
            n.isNode() ? e.push(n) : r.push(n);
        }
        return {
            nodes: e,
            edges: r
        };
    }, "byGroup"),
    filter: /*#__PURE__*/ m$1(function(e, r) {
        if (e === void 0) return this;
        if (ce(e) || Et(e)) return new ir(e).filter(this);
        if (Ke(e)) {
            for(var a = /*#__PURE__*/ this.spawn(), n = this, i = 0; i < n.length; i++){
                var s = n[i], o = r ? e.apply(r, [
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
            ce(e) && (e = /*#__PURE__*/ this.filter(e));
            for(var r = /*#__PURE__*/ this.spawn(), a = 0; a < this.length; a++){
                var n = this[a], i = /*#__PURE__*/ e.has(n);
                i || r.push(n);
            }
            return r;
        } else return this;
    }, "not"),
    absoluteComplement: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy();
        return e.mutableElements().not(this);
    }, "absoluteComplement"),
    intersect: /*#__PURE__*/ m$1(function(e) {
        if (ce(e)) {
            var r = e;
            return this.filter(r);
        }
        for(var a = /*#__PURE__*/ this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, l = s ? i : n, u = 0; u < o.length; u++){
            var f = o[u];
            l.has(f) && a.push(f);
        }
        return a;
    }, "intersect"),
    xor: /*#__PURE__*/ m$1(function(e) {
        var r = this._private.cy;
        ce(e) && (e = /*#__PURE__*/ r.$(e));
        var a = /*#__PURE__*/ this.spawn(), n = this, i = e, s = /*#__PURE__*/ m$1(function(l, u) {
            for(var f = 0; f < l.length; f++){
                var c = l[f], d = c._private.data.id, g = /*#__PURE__*/ u.hasElementWithId(d);
                g || a.push(c);
            }
        }, "add");
        return s(n, i), s(i, n), a;
    }, "xor"),
    diff: /*#__PURE__*/ m$1(function(e) {
        var r = this._private.cy;
        ce(e) && (e = /*#__PURE__*/ r.$(e));
        var a = /*#__PURE__*/ this.spawn(), n = /*#__PURE__*/ this.spawn(), i = /*#__PURE__*/ this.spawn(), s = this, o = e, l = /*#__PURE__*/ m$1(function(f, c, d) {
            for(var g = 0; g < f.length; g++){
                var h = f[g], m = h._private.data.id, y = /*#__PURE__*/ c.hasElementWithId(m);
                y ? i.merge(h) : d.push(h);
            }
        }, "add");
        return l(s, o, a), l(o, s, n), {
            left: a,
            right: n,
            both: i
        };
    }, "diff"),
    add: /*#__PURE__*/ m$1(function(e) {
        var r = this._private.cy;
        if (!e) return this;
        if (ce(e)) {
            var a = e;
            e = /*#__PURE__*/ r.mutableElements().filter(a);
        }
        for(var n = /*#__PURE__*/ this.spawnSelf(), i = 0; i < e.length; i++){
            var s = e[i], o = !this.has(s);
            o && n.push(s);
        }
        return n;
    }, "add"),
    merge: /*#__PURE__*/ m$1(function(e) {
        var r = this._private, a = r.cy;
        if (!e) return this;
        if (e && ce(e)) {
            var n = e;
            e = /*#__PURE__*/ a.mutableElements().filter(n);
        }
        for(var i = r.map, s = 0; s < e.length; s++){
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
        var r = this[e], a = /*#__PURE__*/ r.id(), n = this._private, i = n.map;
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
        var r = this._private, a = e._private.data.id, n = r.map, i = /*#__PURE__*/ n.get(a);
        if (!i) return this;
        var s = i.index;
        return this.unmergeAt(s), this;
    }, "unmergeOne"),
    unmerge: /*#__PURE__*/ m$1(function(e) {
        var r = this._private.cy;
        if (!e) return this;
        if (e && ce(e)) {
            var a = e;
            e = /*#__PURE__*/ r.mutableElements().filter(a);
        }
        for(var n = 0; n < e.length; n++)this.unmergeOne(e[n]);
        return this;
    }, "unmerge"),
    unmergeBy: /*#__PURE__*/ m$1(function(e) {
        for(var r = this.length - 1; r >= 0; r--){
            var a = this[r];
            e(a) && this.unmergeAt(r);
        }
        return this;
    }, "unmergeBy"),
    map: /*#__PURE__*/ m$1(function(e, r) {
        for(var a = [], n = this, i = 0; i < n.length; i++){
            var s = n[i], o = r ? e.apply(r, [
                s,
                i,
                n
            ]) : e(s, i, n);
            a.push(o);
        }
        return a;
    }, "map"),
    reduce: /*#__PURE__*/ m$1(function(e, r) {
        for(var a = r, n = this, i = 0; i < n.length; i++)a = /*#__PURE__*/ e(a, n[i], i, n);
        return a;
    }, "reduce"),
    max: /*#__PURE__*/ m$1(function(e, r) {
        for(var a = -1 / 0, n, i = this, s = 0; s < i.length; s++){
            var o = i[s], l = r ? e.apply(r, [
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
    min: /*#__PURE__*/ m$1(function(e, r) {
        for(var a = 1 / 0, n, i = this, s = 0; s < i.length; s++){
            var o = i[s], l = r ? e.apply(r, [
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
}, Be = bu;
Be.u = Be["|"] = Be["+"] = Be.union = Be.or = Be.add;
Be["\\"] = Be["!"] = Be["-"] = Be.difference = Be.relativeComplement = Be.subtract = Be.not;
Be.n = Be["&"] = Be["."] = Be.and = Be.intersection = Be.intersect;
Be["^"] = Be["(+)"] = Be["(-)"] = Be.symmetricDifference = Be.symdiff = Be.xor;
Be.fnFilter = Be.filterFn = Be.stdFilter = Be.filter;
Be.complement = Be.abscomp = Be.absoluteComplement;
var fg = {
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
}, wu = /*#__PURE__*/ m$1(function(e, r) {
    var a = /*#__PURE__*/ e.cy(), n = /*#__PURE__*/ a.hasCompoundNodes();
    function i(f) {
        var c = /*#__PURE__*/ f.pstyle("z-compound-depth");
        return c.value === "auto" ? n ? f.zDepth() : 0 : c.value === "bottom" ? -1 : c.value === "top" ? Ci : 0;
    }
    m$1(i, "getDepth");
    var s = i(e) - i(r);
    if (s !== 0) return s;
    function o(f) {
        var c = /*#__PURE__*/ f.pstyle("z-index-compare");
        return c.value === "auto" && f.isNode() ? 1 : 0;
    }
    m$1(o, "getEleDepth");
    var l = o(e) - o(r);
    if (l !== 0) return l;
    var u = e.pstyle("z-index").value - r.pstyle("z-index").value;
    return u !== 0 ? u : e.poolIndex() - r.poolIndex();
}, "zIndexSort"), yn = {
    forEach: /*#__PURE__*/ m$1(function(e, r) {
        if (Ke(e)) for(var a = this.length, n = 0; n < a; n++){
            var i = this[n], s = r ? e.apply(r, [
                i,
                n,
                this
            ]) : e(i, n, this);
            if (s === false) break;
        }
        return this;
    }, "forEach"),
    toArray: /*#__PURE__*/ m$1(function() {
        for(var e = [], r = 0; r < this.length; r++)e.push(this[r]);
        return e;
    }, "toArray"),
    slice: /*#__PURE__*/ m$1(function(e, r) {
        var a = [], n = this.length;
        r == null && (r = n), e == null && (e = 0), e < 0 && (e = n + e), r < 0 && (r = n + r);
        for(var i = e; i >= 0 && i < r && i < n; i++)a.push(this[i]);
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
        var r = /*#__PURE__*/ this.toArray().sort(e);
        return this.spawn(r);
    }, "sort"),
    sortByZIndex: /*#__PURE__*/ m$1(function() {
        return this.sort(wu);
    }, "sortByZIndex"),
    zDepth: /*#__PURE__*/ m$1(function() {
        var e = this[0];
        if (e) {
            var r = e._private, a = r.group;
            if (a === "nodes") {
                var n = r.data.parent ? e.parents().size() : 0;
                return e.isParent() ? n : Ci - 1;
            } else {
                var i = r.source, s = r.target, o = /*#__PURE__*/ i.zDepth(), l = /*#__PURE__*/ s.zDepth();
                return Math.max(o, l, 0);
            }
        }
    }, "zDepth")
};
yn.each = yn.forEach;
var cg = /*#__PURE__*/ m$1(function() {
    var e = "undefined", r = (typeof Symbol > "u" ? "undefined" : Ye(Symbol)) != e && Ye(Symbol.iterator) != e;
    r && (yn[Symbol.iterator] = function() {
        var a = this, n = {
            value: void 0,
            done: false
        }, i = 0, s = this.length;
        return po({
            next: /*#__PURE__*/ m$1(function() {
                return i < s ? n.value = a[i++] : (n.value = void 0, n.done = true), n;
            }, "next")
        }, Symbol.iterator, function() {
            return this;
        });
    });
}, "defineSymbolIterator");
cg();
var dg = /*#__PURE__*/ et({
    nodeDimensionsIncludeLabels: false
}), nn = {
    layoutDimensions: /*#__PURE__*/ m$1(function(e) {
        e = /*#__PURE__*/ dg(e);
        var r;
        if (!this.takesUpSpace()) r = {
            w: 0,
            h: 0
        };
        else if (e.nodeDimensionsIncludeLabels) {
            var a = /*#__PURE__*/ this.boundingBox();
            r = {
                w: a.w,
                h: a.h
            };
        } else r = {
            w: /*#__PURE__*/ this.outerWidth(),
            h: /*#__PURE__*/ this.outerHeight()
        };
        return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
    }, "layoutDimensions"),
    layoutPositions: /*#__PURE__*/ m$1(function(e, r, a) {
        var n = /*#__PURE__*/ this.nodes().filter(function(S) {
            return !S.isParent();
        }), i = /*#__PURE__*/ this.cy(), s = r.eles, o = /*#__PURE__*/ m$1(function(T) {
            return T.id();
        }, "getMemoizeKey"), l = /*#__PURE__*/ ma(a, o);
        e.emit({
            type: "layoutstart",
            layout: e
        }), e.animations = [];
        var u = /*#__PURE__*/ m$1(function(T, E, D) {
            var C = {
                x: E.x1 + E.w / 2,
                y: E.y1 + E.h / 2
            }, B = {
                x: (D.x - C.x) * T,
                y: (D.y - C.y) * T
            };
            return {
                x: C.x + B.x,
                y: C.y + B.y
            };
        }, "calculateSpacing"), f = r.spacingFactor && r.spacingFactor !== 1, c = /*#__PURE__*/ m$1(function() {
            if (!f) return null;
            for(var T = /*#__PURE__*/ yt(), E = 0; E < n.length; E++){
                var D = n[E], C = /*#__PURE__*/ l(D, E);
                hf(T, C.x, C.y);
            }
            return T;
        }, "spacingBb"), d = /*#__PURE__*/ c(), g = /*#__PURE__*/ ma(function(S, T) {
            var E = /*#__PURE__*/ l(S, T);
            if (f) {
                var D = /*#__PURE__*/ Math.abs(r.spacingFactor);
                E = /*#__PURE__*/ u(D, d, E);
            }
            return r.transform != null && (E = /*#__PURE__*/ r.transform(S, E)), E;
        }, o);
        if (r.animate) {
            for(var h = 0; h < n.length; h++){
                var m = n[h], y = /*#__PURE__*/ g(m, h), p = r.animateFilter == null || r.animateFilter(m, h);
                if (p) {
                    var b1 = /*#__PURE__*/ m.animation({
                        position: y,
                        duration: r.animationDuration,
                        easing: r.animationEasing
                    });
                    e.animations.push(b1);
                } else m.position(y);
            }
            if (r.fit) {
                var w = /*#__PURE__*/ i.animation({
                    fit: {
                        boundingBox: /*#__PURE__*/ s.boundingBoxAt(g),
                        padding: r.padding
                    },
                    duration: r.animationDuration,
                    easing: r.animationEasing
                });
                e.animations.push(w);
            } else if (r.zoom !== void 0 && r.pan !== void 0) {
                var x = /*#__PURE__*/ i.animation({
                    zoom: r.zoom,
                    pan: r.pan,
                    duration: r.animationDuration,
                    easing: r.animationEasing
                });
                e.animations.push(x);
            }
            e.animations.forEach(function(S) {
                return S.play();
            }), e.one("layoutready", r.ready), e.emit({
                type: "layoutready",
                layout: e
            }), Hr.all(/*#__PURE__*/ e.animations.map(function(S) {
                return S.promise();
            })).then(function() {
                e.one("layoutstop", r.stop), e.emit({
                    type: "layoutstop",
                    layout: e
                });
            });
        } else n.positions(g), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
            type: "layoutready",
            layout: e
        }), e.one("layoutstop", r.stop), e.emit({
            type: "layoutstop",
            layout: e
        });
        return this;
    }, "layoutPositions"),
    layout: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ this.cy();
        return r.makeLayout(/*#__PURE__*/ he({}, e, {
            eles: this
        }));
    }, "layout")
};
nn.createLayout = nn.makeLayout = nn.layout;
function xu(t, e, r) {
    var a = r._private, n = a.styleCache = a.styleCache || [], i;
    return (i = n[t]) != null || (i = n[t] = /*#__PURE__*/ e(r)), i;
}
m$1(xu, "styleCache");
function Ln(t, e) {
    return t = /*#__PURE__*/ ar(t), m$1(function(a) {
        return xu(t, e, a);
    }, "cachedStyleFunction");
}
m$1(Ln, "cacheStyleFunction");
function In(t, e) {
    t = /*#__PURE__*/ ar(t);
    var r = /*#__PURE__*/ m$1(function(n) {
        return e.call(n);
    }, "selfFn");
    return m$1(function() {
        var n = this[0];
        if (n) return xu(t, r, n);
    }, "cachedPrototypeStyleFunction");
}
m$1(In, "cachePrototypeStyleFunction");
var rt = {
    recalculateRenderedStyle: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ this.cy(), a = /*#__PURE__*/ r.renderer(), n = /*#__PURE__*/ r.styleEnabled();
        return a && n && a.recalculateRenderedStyle(this, e), this;
    }, "recalculateRenderedStyle"),
    dirtyStyleCache: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy(), r = /*#__PURE__*/ m$1(function(i) {
            return i._private.styleCache = null;
        }, "dirty");
        if (e.hasCompoundNodes()) {
            var a;
            a = /*#__PURE__*/ this.spawnSelf().merge(/*#__PURE__*/ this.descendants()).merge(/*#__PURE__*/ this.parents()), a.merge(/*#__PURE__*/ a.connectedEdges()), a.forEach(r);
        } else this.forEach(function(n) {
            r(n), n.connectedEdges().forEach(r);
        });
        return this;
    }, "dirtyStyleCache"),
    updateStyle: /*#__PURE__*/ m$1(function(e) {
        var r = this._private.cy;
        if (!r.styleEnabled()) return this;
        if (r.batching()) {
            var a = r._private.batchStyleEles;
            return a.merge(this), this;
        }
        var n = /*#__PURE__*/ r.hasCompoundNodes(), i = this;
        e = !!(e || e === void 0), n && (i = /*#__PURE__*/ this.spawnSelf().merge(/*#__PURE__*/ this.descendants()).merge(/*#__PURE__*/ this.parents()));
        var s = i;
        return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
            return o._private.styleDirty = true;
        }), this;
    }, "updateStyle"),
    cleanStyle: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy();
        if (e.styleEnabled()) for(var r = 0; r < this.length; r++){
            var a = this[r];
            a._private.styleDirty && (a._private.styleDirty = false, e.style().apply(a));
        }
    }, "cleanStyle"),
    parsedStyle: /*#__PURE__*/ m$1(function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, a = this[0], n = /*#__PURE__*/ a.cy();
        if (n.styleEnabled() && a) {
            a._private.styleDirty && (a._private.styleDirty = false, n.style().apply(a));
            var i = a._private.style[e];
            return i ?? (r ? n.style().getDefaultProperty(e) : null);
        }
    }, "parsedStyle"),
    numericStyle: /*#__PURE__*/ m$1(function(e) {
        var r = this[0];
        if (r.cy().styleEnabled() && r) {
            var a = /*#__PURE__*/ r.pstyle(e);
            return a.pfValue !== void 0 ? a.pfValue : a.value;
        }
    }, "numericStyle"),
    numericStyleUnits: /*#__PURE__*/ m$1(function(e) {
        var r = this[0];
        if (r.cy().styleEnabled() && r) return r.pstyle(e).units;
    }, "numericStyleUnits"),
    renderedStyle: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ this.cy();
        if (!r.styleEnabled()) return this;
        var a = this[0];
        if (a) return r.style().getRenderedStyle(a, e);
    }, "renderedStyle"),
    style: /*#__PURE__*/ m$1(function(e, r) {
        var a = /*#__PURE__*/ this.cy();
        if (!a.styleEnabled()) return this;
        var n = false, i = /*#__PURE__*/ a.style();
        if (Pe(e)) {
            var s = e;
            i.applyBypass(this, s, n), this.emitAndNotify("style");
        } else if (ce(e)) if (r === void 0) {
            var o = this[0];
            return o ? i.getStylePropertyValue(o, e) : void 0;
        } else i.applyBypass(this, e, r, n), this.emitAndNotify("style");
        else if (e === void 0) {
            var l = this[0];
            return l ? i.getRawStyle(l) : void 0;
        }
        return this;
    }, "style"),
    removeStyle: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ this.cy();
        if (!r.styleEnabled()) return this;
        var a = false, n = /*#__PURE__*/ r.style(), i = this;
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
        var r = /*#__PURE__*/ e.hasCompoundNodes(), a = this[0];
        if (a) {
            var n = a._private, i = a.pstyle("opacity").value;
            if (!r) return i;
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
        var r = this[0], a = /*#__PURE__*/ r.cy().hasCompoundNodes();
        if (r) return a ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
    }, "transparent"),
    backgrounding: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.cy();
        if (!e.styleEnabled()) return false;
        var r = this[0];
        return !!r._private.backgrounding;
    }, "backgrounding")
};
function Zn(t, e) {
    var r = t._private, a = r.data.parent ? t.parents() : null;
    if (a) for(var n = 0; n < a.length; n++){
        var i = a[n];
        if (!e(i)) return false;
    }
    return true;
}
m$1(Zn, "checkCompound");
function Ni(t) {
    var e = t.ok, r = t.edgeOkViaNode || t.ok, a = t.parentOk || t.ok;
    return function() {
        var n = /*#__PURE__*/ this.cy();
        if (!n.styleEnabled()) return true;
        var i = this[0], s = /*#__PURE__*/ n.hasCompoundNodes();
        if (i) {
            var o = i._private;
            if (!e(i)) return false;
            if (i.isNode()) return !s || Zn(i, a);
            var l = o.source, u = o.target;
            return r(l) && (!s || Zn(l, r)) && (l === u || r(u) && (!s || Zn(u, r)));
        }
    };
}
m$1(Ni, "defineDerivedStateFunction");
var _r = /*#__PURE__*/ Ln("eleTakesUpSpace", function(t) {
    return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : true);
});
rt.takesUpSpace = /*#__PURE__*/ In("takesUpSpace", /*#__PURE__*/ Ni({
    ok: _r
}));
var hg = /*#__PURE__*/ Ln("eleInteractive", function(t) {
    return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && _r(t);
}), gg = /*#__PURE__*/ Ln("parentInteractive", function(t) {
    return t.pstyle("visibility").value === "visible" && _r(t);
});
rt.interactive = /*#__PURE__*/ In("interactive", /*#__PURE__*/ Ni({
    ok: hg,
    parentOk: gg,
    edgeOkViaNode: _r
}));
rt.noninteractive = function() {
    var t = this[0];
    if (t) return !t.interactive();
};
var pg = /*#__PURE__*/ Ln("eleVisible", function(t) {
    return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && _r(t);
}), yg = _r;
rt.visible = /*#__PURE__*/ In("visible", /*#__PURE__*/ Ni({
    ok: pg,
    edgeOkViaNode: yg
}));
rt.hidden = function() {
    var t = this[0];
    if (t) return !t.visible();
};
rt.isBundledBezier = /*#__PURE__*/ In("isBundledBezier", function() {
    return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : false;
});
rt.bypass = rt.css = rt.style;
rt.renderedCss = rt.renderedStyle;
rt.removeBypass = rt.removeCss = rt.removeStyle;
rt.pstyle = rt.parsedStyle;
var tr = {};
function Ls(t) {
    return function() {
        var e = arguments, r = [];
        if (e.length === 2) {
            var a = e[0], n = e[1];
            this.on(t.event, a, n);
        } else if (e.length === 1 && Ke(e[0])) {
            var i = e[0];
            this.on(t.event, i);
        } else if (e.length === 0 || e.length === 1 && Oe(e[0])) {
            for(var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++){
                var l = this[o], u = !t.ableField || l._private[t.ableField], f = l._private[t.field] != t.value;
                if (t.overrideAble) {
                    var c = /*#__PURE__*/ t.overrideAble(l);
                    if (c !== void 0 && (u = c, !c)) return this;
                }
                u && (l._private[t.field] = t.value, f && r.push(l));
            }
            var d = /*#__PURE__*/ this.spawn(r);
            d.updateStyle(), d.emit(t.event), s && d.emit(s);
        }
        return this;
    };
}
m$1(Ls, "defineSwitchFunction");
function Zr(t) {
    tr[t.field] = function() {
        var e = this[0];
        if (e) {
            if (t.overrideField) {
                var r = /*#__PURE__*/ t.overrideField(e);
                if (r !== void 0) return r;
            }
            return e._private[t.field];
        }
    }, tr[t.on] = /*#__PURE__*/ Ls({
        event: t.on,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: true
    }), tr[t.off] = /*#__PURE__*/ Ls({
        event: t.off,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: false
    });
}
m$1(Zr, "defineSwitchSet");
Zr({
    field: "locked",
    overrideField: /*#__PURE__*/ m$1(function(e) {
        return e.cy().autolock() ? true : void 0;
    }, "overrideField"),
    on: "lock",
    off: "unlock"
});
Zr({
    field: "grabbable",
    overrideField: /*#__PURE__*/ m$1(function(e) {
        return e.cy().autoungrabify() || e.pannable() ? false : void 0;
    }, "overrideField"),
    on: "grabify",
    off: "ungrabify"
});
Zr({
    field: "selected",
    ableField: "selectable",
    overrideAble: /*#__PURE__*/ m$1(function(e) {
        return e.cy().autounselectify() ? false : void 0;
    }, "overrideAble"),
    on: "select",
    off: "unselect"
});
Zr({
    field: "selectable",
    overrideField: /*#__PURE__*/ m$1(function(e) {
        return e.cy().autounselectify() ? false : void 0;
    }, "overrideField"),
    on: "selectify",
    off: "unselectify"
});
tr.deselect = tr.unselect;
tr.grabbed = function() {
    var t = this[0];
    if (t) return t._private.grabbed;
};
Zr({
    field: "active",
    on: "activate",
    off: "unactivate"
});
Zr({
    field: "pannable",
    on: "panify",
    off: "unpanify"
});
tr.inactive = function() {
    var t = this[0];
    if (t) return !t._private.active;
};
var ot = {}, Is = /*#__PURE__*/ m$1(function(e) {
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
}, "defineDagExtremity"), Os = /*#__PURE__*/ m$1(function(e) {
    return function(r) {
        for(var a = this, n = [], i = 0; i < a.length; i++){
            var s = a[i];
            if (s.isNode()) for(var o = /*#__PURE__*/ s.connectedEdges(), l = 0; l < o.length; l++){
                var u = o[l], f = /*#__PURE__*/ u.source(), c = /*#__PURE__*/ u.target();
                e.outgoing && f === s ? (n.push(u), n.push(c)) : e.incoming && c === s && (n.push(u), n.push(f));
            }
        }
        return this.spawn(n, true).filter(r);
    };
}, "defineDagOneHop"), Ns = /*#__PURE__*/ m$1(function(e) {
    return function(r) {
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
        return this.spawn(n, true).filter(r);
    };
}, "defineDagAllHops");
ot.clearTraversalCache = function() {
    for(var t = 0; t < this.length; t++)this[t]._private.traversalCache = null;
};
he(ot, {
    roots: /*#__PURE__*/ Is({
        noIncomingEdges: true
    }),
    leaves: /*#__PURE__*/ Is({
        noOutgoingEdges: true
    }),
    outgoers: /*#__PURE__*/ Dt(/*#__PURE__*/ Os({
        outgoing: true
    }), "outgoers"),
    successors: /*#__PURE__*/ Ns({
        outgoing: true
    }),
    incomers: /*#__PURE__*/ Dt(/*#__PURE__*/ Os({
        incoming: true
    }), "incomers"),
    predecessors: /*#__PURE__*/ Ns({
        incoming: true
    })
});
he(ot, {
    neighborhood: /*#__PURE__*/ Dt(function(t) {
        for(var e = [], r = /*#__PURE__*/ this.nodes(), a = 0; a < r.length; a++)for(var n = r[a], i = /*#__PURE__*/ n.connectedEdges(), s = 0; s < i.length; s++){
            var o = i[s], l = /*#__PURE__*/ o.source(), u = /*#__PURE__*/ o.target(), f = n === l ? u : l;
            f.length > 0 && e.push(f[0]), e.push(o[0]);
        }
        return this.spawn(e, true).filter(t);
    }, "neighborhood"),
    closedNeighborhood: /*#__PURE__*/ m$1(function(e) {
        return this.neighborhood().add(this).filter(e);
    }, "closedNeighborhood"),
    openNeighborhood: /*#__PURE__*/ m$1(function(e) {
        return this.neighborhood(e);
    }, "openNeighborhood")
});
ot.neighbourhood = ot.neighborhood;
ot.closedNeighbourhood = ot.closedNeighborhood;
ot.openNeighbourhood = ot.openNeighborhood;
he(ot, {
    source: /*#__PURE__*/ Dt(/*#__PURE__*/ m$1(function(e) {
        var r = this[0], a;
        return r && (a = r._private.source || r.cy().collection()), a && e ? a.filter(e) : a;
    }, "sourceImpl"), "source"),
    target: /*#__PURE__*/ Dt(/*#__PURE__*/ m$1(function(e) {
        var r = this[0], a;
        return r && (a = r._private.target || r.cy().collection()), a && e ? a.filter(e) : a;
    }, "targetImpl"), "target"),
    sources: /*#__PURE__*/ zs({
        attr: "source"
    }),
    targets: /*#__PURE__*/ zs({
        attr: "target"
    })
});
function zs(t) {
    return m$1(function(r) {
        for(var a = [], n = 0; n < this.length; n++){
            var i = this[n], s = i._private[t.attr];
            s && a.push(s);
        }
        return this.spawn(a, true).filter(r);
    }, "sourceImpl");
}
m$1(zs, "defineSourceFunction");
he(ot, {
    edgesWith: /*#__PURE__*/ Dt(/*#__PURE__*/ Fs(), "edgesWith"),
    edgesTo: /*#__PURE__*/ Dt(/*#__PURE__*/ Fs({
        thisIsSrc: true
    }), "edgesTo")
});
function Fs(t) {
    return m$1(function(r) {
        var a = [], n = this._private.cy, i = t || {};
        ce(r) && (r = /*#__PURE__*/ n.$(r));
        for(var s = 0; s < r.length; s++)for(var o = r[s]._private.edges, l = 0; l < o.length; l++){
            var u = o[l], f = u._private.data, c = this.hasElementWithId(f.source) && r.hasElementWithId(f.target), d = r.hasElementWithId(f.source) && this.hasElementWithId(f.target), g = c || d;
            g && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !c || i.thisIsTgt && !d) || a.push(u));
        }
        return this.spawn(a, true);
    }, "edgesWithImpl");
}
m$1(Fs, "defineEdgesWithFunction");
he(ot, {
    connectedEdges: /*#__PURE__*/ Dt(function(t) {
        for(var e = [], r = this, a = 0; a < r.length; a++){
            var n = r[a];
            if (n.isNode()) for(var i = n._private.edges, s = 0; s < i.length; s++){
                var o = i[s];
                e.push(o);
            }
        }
        return this.spawn(e, true).filter(t);
    }, "connectedEdges"),
    connectedNodes: /*#__PURE__*/ Dt(function(t) {
        for(var e = [], r = this, a = 0; a < r.length; a++){
            var n = r[a];
            n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
        }
        return this.spawn(e, true).filter(t);
    }, "connectedNodes"),
    parallelEdges: /*#__PURE__*/ Dt(/*#__PURE__*/ Vs(), "parallelEdges"),
    codirectedEdges: /*#__PURE__*/ Dt(/*#__PURE__*/ Vs({
        codirected: true
    }), "codirectedEdges")
});
function Vs(t) {
    var e = {
        codirected: false
    };
    return t = /*#__PURE__*/ he({}, e, t), m$1(function(a) {
        for(var n = [], i = /*#__PURE__*/ this.edges(), s = t, o = 0; o < i.length; o++)for(var l = i[o], u = l._private, f = u.source, c = f._private.data.id, d = u.data.target, g = f._private.edges, h = 0; h < g.length; h++){
            var m = g[h], y = m._private.data, p = y.target, b1 = y.source, w = p === d && b1 === c, x = c === p && d === b1;
            (s.codirected && w || !s.codirected && (w || x)) && n.push(m);
        }
        return this.spawn(n, true).filter(a);
    }, "parallelEdgesImpl");
}
m$1(Vs, "defineParallelEdgesFunction");
he(ot, {
    components: /*#__PURE__*/ m$1(function(e) {
        var r = this, a = /*#__PURE__*/ r.cy(), n = /*#__PURE__*/ a.collection(), i = e == null ? r.nodes() : e.nodes(), s = [];
        e != null && i.empty() && (i = /*#__PURE__*/ e.sources());
        var o = /*#__PURE__*/ m$1(function(f, c) {
            n.merge(f), i.unmerge(f), c.merge(f);
        }, "visitInComponent");
        if (i.empty()) return r.spawn();
        var l = /*#__PURE__*/ m$1(function() {
            var f = /*#__PURE__*/ a.collection();
            s.push(f);
            var c = i[0];
            o(c, f), r.bfs({
                directed: false,
                roots: c,
                visit: /*#__PURE__*/ m$1(function(g) {
                    return o(g, f);
                }, "visit")
            }), f.forEach(function(d) {
                d.connectedEdges().forEach(function(g) {
                    r.has(g) && f.has(/*#__PURE__*/ g.source()) && f.has(/*#__PURE__*/ g.target()) && f.merge(g);
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
ot.componentsOf = ot.components;
var at = /*#__PURE__*/ m$1(function(e, r) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (e === void 0) {
        $e("A collection must have a reference to the core");
        return;
    }
    var i = new Ft, s = false;
    if (!r) r = [];
    else if (r.length > 0 && Pe(r[0]) && !Aa(r[0])) {
        s = true;
        for(var o = [], l = new Wr, u = 0, f = r.length; u < f; u++){
            var c = r[u];
            c.data == null && (c.data = {});
            var d = c.data;
            if (d.id == null) d.id = /*#__PURE__*/ Io();
            else if (e.hasElementWithId(d.id) || l.has(d.id)) continue;
            var g = new Sn(e, c, false);
            o.push(g), l.add(d.id);
        }
        r = o;
    }
    this.length = 0;
    for(var h = 0, m = r.length; h < m; h++){
        var y = r[h][0];
        if (y != null) {
            var p = y._private.data.id;
            (!a || !i.has(p)) && (a && i.set(p, {
                index: this.length,
                ele: y
            }), this[this.length] = y, this.length++);
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
            for(var w = this.lazyMap = new Ft, x = this.eles, S = 0; S < x.length; S++){
                var T = x[S];
                w.set(/*#__PURE__*/ T.id(), {
                    index: S,
                    ele: T
                });
            }
        }, "rebuildMap")
    }, a && (this._private.map = i), s && !n && this.restore();
}, "Collection"), Fe = Sn.prototype = at.prototype = /*#__PURE__*/ Object.create(Array.prototype);
Fe.instanceString = function() {
    return "collection";
};
Fe.spawn = function(t, e) {
    return new at(this.cy(), t, e);
};
Fe.spawnSelf = function() {
    return this.spawn(this);
};
Fe.cy = function() {
    return this._private.cy;
};
Fe.renderer = function() {
    return this._private.cy.renderer();
};
Fe.element = function() {
    return this[0];
};
Fe.collection = function() {
    return bo(this) ? this : new at(this._private.cy, [
        this
    ]);
};
Fe.unique = function() {
    return new at(this._private.cy, this, true);
};
Fe.hasElementWithId = function(t) {
    return t = "" + t, this._private.map.has(t);
};
Fe.getElementById = function(t) {
    t = "" + t;
    var e = this._private.cy, r = /*#__PURE__*/ this._private.map.get(t);
    return r ? r.ele : new at(e);
};
Fe.$id = Fe.getElementById;
Fe.poolIndex = function() {
    var t = this._private.cy, e = t._private.elements, r = this[0]._private.data.id;
    return e._private.map.get(r).index;
};
Fe.indexOf = function(t) {
    var e = t[0]._private.data.id;
    return this._private.map.get(e).index;
};
Fe.indexOfId = function(t) {
    return t = "" + t, this._private.map.get(t).index;
};
Fe.json = function(t) {
    var e = /*#__PURE__*/ this.element(), r = /*#__PURE__*/ this.cy();
    if (e == null && t) return this;
    if (e != null) {
        var a = e._private;
        if (Pe(t)) {
            if (r.startBatch(), t.data) {
                e.data(t.data);
                var n = a.data;
                if (e.isEdge()) {
                    var i = false, s = {}, o = t.data.source, l = t.data.target;
                    o != null && o != n.source && (s.source = "" + o, i = true), l != null && l != n.target && (s.target = "" + l, i = true), i && (e = /*#__PURE__*/ e.move(s));
                } else {
                    var u = "parent" in t.data, f = t.data.parent;
                    u && (f != null || n.parent != null) && f != n.parent && (f === void 0 && (f = null), f != null && (f = "" + f), e = /*#__PURE__*/ e.move({
                        parent: f
                    }));
                }
            }
            t.position && e.position(t.position);
            var c = /*#__PURE__*/ m$1(function(m, y, p) {
                var b1 = t[m];
                b1 != null && b1 !== a[m] && (b1 ? e[y]() : e[p]());
            }, "checkSwitch");
            return c("removed", "remove", "restore"), c("selected", "select", "unselect"), c("selectable", "selectify", "unselectify"), c("locked", "lock", "unlock"), c("grabbable", "grabify", "ungrabify"), c("pannable", "panify", "unpanify"), t.classes != null && e.classes(t.classes), r.endBatch(), this;
        } else if (t === void 0) {
            var d = {
                data: /*#__PURE__*/ zt(a.data),
                position: /*#__PURE__*/ zt(a.position),
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
Fe.jsons = function() {
    for(var t = [], e = 0; e < this.length; e++){
        var r = this[e], a = /*#__PURE__*/ r.json();
        t.push(a);
    }
    return t;
};
Fe.clone = function() {
    for(var t = /*#__PURE__*/ this.cy(), e = [], r = 0; r < this.length; r++){
        var a = this[r], n = /*#__PURE__*/ a.json(), i = new Sn(t, n, false);
        e.push(i);
    }
    return new at(t, e);
};
Fe.copy = Fe.clone;
Fe.restore = function() {
    for(var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, r = this, a = /*#__PURE__*/ r.cy(), n = a._private, i = [], s = [], o, l = 0, u = r.length; l < u; l++){
        var f = r[l];
        e && !f.removed() || (f.isNode() ? i.push(f) : s.push(f));
    }
    o = /*#__PURE__*/ i.concat(s);
    var c, d = /*#__PURE__*/ m$1(function() {
        o.splice(c, 1), c--;
    }, "removeFromElements");
    for(c = 0; c < o.length; c++){
        var g = o[c], h = g._private, m = h.data;
        if (g.clearTraversalCache(), !(!e && !h.removed)) {
            if (m.id === void 0) m.id = /*#__PURE__*/ Io();
            else if (ae(m.id)) m.id = "" + m.id;
            else if (rr(m.id) || !ce(m.id)) {
                $e("Can not create element with invalid string ID `" + m.id + "`"), d();
                continue;
            } else if (a.hasElementWithId(m.id)) {
                $e("Can not create second element with ID `" + m.id + "`"), d();
                continue;
            }
        }
        var y = m.id;
        if (g.isNode()) {
            var p = h.position;
            p.x == null && (p.x = 0), p.y == null && (p.y = 0);
        }
        if (g.isEdge()) {
            for(var b1 = g, w = [
                "source",
                "target"
            ], x = w.length, S = false, T = 0; T < x; T++){
                var E = w[T], D = m[E];
                ae(D) && (D = m[E] = "" + m[E]), D == null || D === "" ? ($e("Can not create edge `" + y + "` with unspecified " + E), S = true) : a.hasElementWithId(D) || ($e("Can not create edge `" + y + "` with nonexistant " + E + " `" + D + "`"), S = true);
            }
            if (S) {
                d();
                continue;
            }
            var C = /*#__PURE__*/ a.getElementById(m.source), B = /*#__PURE__*/ a.getElementById(m.target);
            C.same(B) ? C._private.edges.push(b1) : (C._private.edges.push(b1), B._private.edges.push(b1)), b1._private.source = C, b1._private.target = B;
        }
        h.map = new Ft, h.map.set(y, {
            ele: g,
            index: 0
        }), h.removed = false, e && a.addToPool(g);
    }
    for(var A = 0; A < i.length; A++){
        var P = i[A], M = P._private.data;
        ae(M.parent) && (M.parent = "" + M.parent);
        var R = M.parent, I = R != null;
        if (I || P._private.parent) {
            var L = P._private.parent ? a.collection().merge(P._private.parent) : a.getElementById(R);
            if (L.empty()) M.parent = void 0;
            else if (L[0].removed()) Re("Node added with missing parent, reference to parent removed"), M.parent = void 0, P._private.parent = null;
            else {
                for(var O = false, N = L; !N.empty();){
                    if (P.same(N)) {
                        O = true, M.parent = void 0;
                        break;
                    }
                    N = /*#__PURE__*/ N.parent();
                }
                O || (L[0]._private.children.push(P), P._private.parent = L[0], n.hasCompoundNodes = true);
            }
        }
    }
    if (o.length > 0) {
        for(var $ = o.length === r.length ? r : new at(a, o), H = 0; H < $.length; H++){
            var q = $[H];
            q.isNode() || (q.parallelEdges().clearTraversalCache(), q.source().clearTraversalCache(), q.target().clearTraversalCache());
        }
        var K;
        n.hasCompoundNodes ? K = /*#__PURE__*/ a.collection().merge($).merge(/*#__PURE__*/ $.connectedNodes()).merge(/*#__PURE__*/ $.parent()) : K = $, K.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t), t ? $.emitAndNotify("add") : e && $.emit("add");
    }
    return r;
};
Fe.removed = function() {
    var t = this[0];
    return t && t._private.removed;
};
Fe.inside = function() {
    var t = this[0];
    return t && !t._private.removed;
};
Fe.remove = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, r = this, a = [], n = {}, i = r._private.cy;
    function s(R) {
        for(var I = R._private.edges, L = 0; L < I.length; L++)l(I[L]);
    }
    m$1(s, "addConnectedEdges");
    function o(R) {
        for(var I = R._private.children, L = 0; L < I.length; L++)l(I[L]);
    }
    m$1(o, "addChildren");
    function l(R) {
        var I = n[R.id()];
        e && R.removed() || I || (n[R.id()] = true, R.isNode() ? (a.push(R), s(R), o(R)) : a.unshift(R));
    }
    m$1(l, "add");
    for(var u = 0, f = r.length; u < f; u++){
        var c = r[u];
        l(c);
    }
    function d(R, I) {
        var L = R._private.edges;
        nr(L, I), R.clearTraversalCache();
    }
    m$1(d, "removeEdgeRef");
    function g(R) {
        R.clearTraversalCache();
    }
    m$1(g, "removeParallelRef");
    var h = [];
    h.ids = {};
    function m(R, I) {
        I = I[0], R = R[0];
        var L = R._private.children, O = /*#__PURE__*/ R.id();
        nr(L, I), I._private.parent = null, h.ids[O] || (h.ids[O] = true, h.push(R));
    }
    m$1(m, "removeChildRef"), r.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
    for(var y = 0; y < a.length; y++){
        var p = a[y];
        if (p.isEdge()) {
            var b1 = p.source()[0], w = p.target()[0];
            d(b1, p), d(w, p);
            for(var x = /*#__PURE__*/ p.parallelEdges(), S = 0; S < x.length; S++){
                var T = x[S];
                g(T), T.isBundledBezier() && T.dirtyBoundingBoxCache();
            }
        } else {
            var E = /*#__PURE__*/ p.parent();
            E.length !== 0 && m(E, p);
        }
        e && (p._private.removed = true);
    }
    var D = i._private.elements;
    i._private.hasCompoundNodes = false;
    for(var C = 0; C < D.length; C++){
        var B = D[C];
        if (B.isParent()) {
            i._private.hasCompoundNodes = true;
            break;
        }
    }
    var A = new at(this.cy(), a);
    A.size() > 0 && (t ? A.emitAndNotify("remove") : e && A.emit("remove"));
    for(var P = 0; P < h.length; P++){
        var M = h[P];
        (!e || !M.removed()) && M.updateStyle();
    }
    return A;
};
Fe.move = function(t) {
    var e = this._private.cy, r = this, a = false, n = false, i = /*#__PURE__*/ m$1(function(h) {
        return h == null ? h : "" + h;
    }, "toString");
    if (t.source !== void 0 || t.target !== void 0) {
        var s = /*#__PURE__*/ i(t.source), o = /*#__PURE__*/ i(t.target), l = s != null && e.hasElementWithId(s), u = o != null && e.hasElementWithId(o);
        (l || u) && (e.batch(function() {
            r.remove(a, n), r.emitAndNotify("moveout");
            for(var g = 0; g < r.length; g++){
                var h = r[g], m = h._private.data;
                h.isEdge() && (l && (m.source = s), u && (m.target = o));
            }
            r.restore(a, n);
        }), r.emitAndNotify("move"));
    } else if (t.parent !== void 0) {
        var f = /*#__PURE__*/ i(t.parent), c = f === null || e.hasElementWithId(f);
        if (c) {
            var d = f === null ? void 0 : f;
            e.batch(function() {
                var g = /*#__PURE__*/ r.remove(a, n);
                g.emitAndNotify("moveout");
                for(var h = 0; h < r.length; h++){
                    var m = r[h], y = m._private.data;
                    m.isNode() && (y.parent = d);
                }
                g.restore(a, n);
            }), r.emitAndNotify("move");
        }
    }
    return this;
};
[
    Xo,
    Ph,
    an,
    er,
    Kr,
    Wh,
    Rn,
    sg,
    mu,
    bu,
    fg,
    yn,
    nn,
    rt,
    tr,
    ot
].forEach(function(t) {
    he(Fe, t);
});
var mg = {
    add: /*#__PURE__*/ m$1(function(e) {
        var r, a = this;
        if (Et(e)) {
            var n = e;
            if (n._private.cy === a) r = /*#__PURE__*/ n.restore();
            else {
                for(var i = [], s = 0; s < n.length; s++){
                    var o = n[s];
                    i.push(/*#__PURE__*/ o.json());
                }
                r = new at(a, i);
            }
        } else if (Oe(e)) {
            var l = e;
            r = new at(a, l);
        } else if (Pe(e) && (Oe(e.nodes) || Oe(e.edges))) {
            for(var u = e, f = [], c = [
                "nodes",
                "edges"
            ], d = 0, g = c.length; d < g; d++){
                var h = c[d], m = u[h];
                if (Oe(m)) for(var y = 0, p = m.length; y < p; y++){
                    var b1 = /*#__PURE__*/ he({
                        group: h
                    }, m[y]);
                    f.push(b1);
                }
            }
            r = new at(a, f);
        } else {
            var w = e;
            r = /*#__PURE__*/ new Sn(a, w).collection();
        }
        return r;
    }, "add"),
    remove: /*#__PURE__*/ m$1(function(e) {
        if (!Et(e)) {
            if (ce(e)) {
                var r = e;
                e = /*#__PURE__*/ this.$(r);
            }
        }
        return e.remove();
    }, "remove")
};
function bg(t, e, r, a) {
    var n = 4, i = .001, s = 1e-7, o = 10, l = 11, u = 1 / (l - 1), f = typeof Float32Array < "u";
    if (arguments.length !== 4) return false;
    for(var c = 0; c < 4; ++c)if (typeof arguments[c] != "number" || isNaN(arguments[c]) || !isFinite(arguments[c])) return false;
    t = /*#__PURE__*/ Math.min(t, 1), r = /*#__PURE__*/ Math.min(r, 1), t = /*#__PURE__*/ Math.max(t, 0), r = /*#__PURE__*/ Math.max(r, 0);
    var d = f ? new Float32Array(l) : new Array(l);
    function g(B, A) {
        return 1 - 3 * A + 3 * B;
    }
    m$1(g, "A");
    function h(B, A) {
        return 3 * A - 6 * B;
    }
    m$1(h, "B");
    function m(B) {
        return 3 * B;
    }
    m$1(m, "C");
    function y(B, A, P) {
        return ((g(A, P) * B + h(A, P)) * B + m(A)) * B;
    }
    m$1(y, "calcBezier");
    function p(B, A, P) {
        return 3 * g(A, P) * B * B + 2 * h(A, P) * B + m(A);
    }
    m$1(p, "getSlope");
    function b1(B, A) {
        for(var P = 0; P < n; ++P){
            var M = /*#__PURE__*/ p(A, t, r);
            if (M === 0) return A;
            var R = y(A, t, r) - B;
            A -= R / M;
        }
        return A;
    }
    m$1(b1, "newtonRaphsonIterate");
    function w() {
        for(var B = 0; B < l; ++B)d[B] = /*#__PURE__*/ y(B * u, t, r);
    }
    m$1(w, "calcSampleValues");
    function x(B, A, P) {
        var M, R, I = 0;
        do R = A + (P - A) / 2, M = y(R, t, r) - B, M > 0 ? P = R : A = R;
        while (Math.abs(M) > s && ++I < o);
        return R;
    }
    m$1(x, "binarySubdivide");
    function S(B) {
        for(var A = 0, P = 1, M = l - 1; P !== M && d[P] <= B; ++P)A += u;
        --P;
        var R = (B - d[P]) / (d[P + 1] - d[P]), I = A + R * u, L = /*#__PURE__*/ p(I, t, r);
        return L >= i ? b1(B, I) : L === 0 ? I : x(B, A, A + u);
    }
    m$1(S, "getTForX");
    var T = false;
    function E() {
        T = true, (t !== e || r !== a) && w();
    }
    m$1(E, "precompute");
    var D = /*#__PURE__*/ m$1(function(A) {
        return T || E(), t === e && r === a ? A : A === 0 ? 0 : A === 1 ? 1 : y(/*#__PURE__*/ S(A), e, a);
    }, "f");
    D.getControlPoints = function() {
        return [
            {
                x: t,
                y: e
            },
            {
                x: r,
                y: a
            }
        ];
    };
    var C = "generateBezier(" + [
        t,
        e,
        r,
        a
    ] + ")";
    return D.toString = function() {
        return C;
    }, D;
}
m$1(bg, "generateCubicBezier");
var wg = /*#__PURE__*/ function() {
    function t(a) {
        return -a.tension * a.x - a.friction * a.v;
    }
    m$1(t, "springAccelerationForState");
    function e(a, n, i) {
        var s = {
            x: a.x + i.dx * n,
            v: a.v + i.dv * n,
            tension: a.tension,
            friction: a.friction
        };
        return {
            dx: s.v,
            dv: /*#__PURE__*/ t(s)
        };
    }
    m$1(e, "springEvaluateStateWithDerivative");
    function r(a, n) {
        var i = {
            dx: a.v,
            dv: /*#__PURE__*/ t(a)
        }, s = /*#__PURE__*/ e(a, n * .5, i), o = /*#__PURE__*/ e(a, n * .5, s), l = /*#__PURE__*/ e(a, n, o), u = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + l.dx), f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + l.dv);
        return a.x = a.x + u * n, a.v = a.v + f * n, a;
    }
    return m$1(r, "springIntegrateState"), m$1(function a(n, i, s) {
        var o = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
        }, l = [
            0
        ], u = 0, f = 1 / 1e4, c = 16 / 1e3, d, g, h;
        for(n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, d = s !== null, d ? (u = /*#__PURE__*/ a(n, i), g = u / s * c) : g = c; h = /*#__PURE__*/ r(h || o, g), l.push(1 + h.x), u += 16, Math.abs(h.x) > f && Math.abs(h.v) > f;);
        return d ? function(m) {
            return l[m * (l.length - 1) | 0];
        } : u;
    }, "springRK4Factory");
}(), ze = /*#__PURE__*/ m$1(function(e, r, a, n) {
    var i = /*#__PURE__*/ bg(e, r, a, n);
    return function(s, o, l) {
        return s + (o - s) * i(l);
    };
}, "cubicBezier"), sn = {
    linear: /*#__PURE__*/ m$1(function(e, r, a) {
        return e + (r - e) * a;
    }, "linear"),
    ease: /*#__PURE__*/ ze(.25, .1, .25, 1),
    "ease-in": /*#__PURE__*/ ze(.42, 0, 1, 1),
    "ease-out": /*#__PURE__*/ ze(0, 0, .58, 1),
    "ease-in-out": /*#__PURE__*/ ze(.42, 0, .58, 1),
    "ease-in-sine": /*#__PURE__*/ ze(.47, 0, .745, .715),
    "ease-out-sine": /*#__PURE__*/ ze(.39, .575, .565, 1),
    "ease-in-out-sine": /*#__PURE__*/ ze(.445, .05, .55, .95),
    "ease-in-quad": /*#__PURE__*/ ze(.55, .085, .68, .53),
    "ease-out-quad": /*#__PURE__*/ ze(.25, .46, .45, .94),
    "ease-in-out-quad": /*#__PURE__*/ ze(.455, .03, .515, .955),
    "ease-in-cubic": /*#__PURE__*/ ze(.55, .055, .675, .19),
    "ease-out-cubic": /*#__PURE__*/ ze(.215, .61, .355, 1),
    "ease-in-out-cubic": /*#__PURE__*/ ze(.645, .045, .355, 1),
    "ease-in-quart": /*#__PURE__*/ ze(.895, .03, .685, .22),
    "ease-out-quart": /*#__PURE__*/ ze(.165, .84, .44, 1),
    "ease-in-out-quart": /*#__PURE__*/ ze(.77, 0, .175, 1),
    "ease-in-quint": /*#__PURE__*/ ze(.755, .05, .855, .06),
    "ease-out-quint": /*#__PURE__*/ ze(.23, 1, .32, 1),
    "ease-in-out-quint": /*#__PURE__*/ ze(.86, 0, .07, 1),
    "ease-in-expo": /*#__PURE__*/ ze(.95, .05, .795, .035),
    "ease-out-expo": /*#__PURE__*/ ze(.19, 1, .22, 1),
    "ease-in-out-expo": /*#__PURE__*/ ze(1, 0, 0, 1),
    "ease-in-circ": /*#__PURE__*/ ze(.6, .04, .98, .335),
    "ease-out-circ": /*#__PURE__*/ ze(.075, .82, .165, 1),
    "ease-in-out-circ": /*#__PURE__*/ ze(.785, .135, .15, .86),
    spring: /*#__PURE__*/ m$1(function(e, r, a) {
        if (a === 0) return sn.linear;
        var n = /*#__PURE__*/ wg(e, r, a);
        return function(i, s, o) {
            return i + (s - i) * n(o);
        };
    }, "spring"),
    "cubic-bezier": ze
};
function qs(t, e, r, a, n) {
    if (a === 1 || e === r) return r;
    var i = /*#__PURE__*/ n(e, r, a);
    return t == null || ((t.roundValue || t.color) && (i = /*#__PURE__*/ Math.round(i)), t.min !== void 0 && (i = /*#__PURE__*/ Math.max(i, t.min)), t.max !== void 0 && (i = /*#__PURE__*/ Math.min(i, t.max))), i;
}
m$1(qs, "getEasedValue");
function $s(t, e) {
    return t.pfValue != null || t.value != null ? t.pfValue != null && (e == null || e.type.units !== "%") ? t.pfValue : t.value : t;
}
m$1($s, "getValue");
function Br(t, e, r, a, n) {
    var i = n != null ? n.type : null;
    r < 0 ? r = 0 : r > 1 && (r = 1);
    var s = /*#__PURE__*/ $s(t, n), o = /*#__PURE__*/ $s(e, n);
    if (ae(s) && ae(o)) return qs(i, s, o, r, a);
    if (Oe(s) && Oe(o)) {
        for(var l = [], u = 0; u < o.length; u++){
            var f = s[u], c = o[u];
            if (f != null && c != null) {
                var d = /*#__PURE__*/ qs(i, f, c, r, a);
                l.push(d);
            } else l.push(c);
        }
        return l;
    }
}
m$1(Br, "ease");
function xg(t, e, r, a) {
    var n = !a, i = t._private, s = e._private, o = s.easing, l = s.startTime, u = a ? t : t.cy(), f = /*#__PURE__*/ u.style();
    if (!s.easingImpl) if (o == null) s.easingImpl = sn.linear;
    else {
        var c;
        if (ce(o)) {
            var d = /*#__PURE__*/ f.parse("transition-timing-function", o);
            c = d.value;
        } else c = o;
        var g, h;
        ce(c) ? (g = c, h = []) : (g = c[1], h = /*#__PURE__*/ c.slice(2).map(function($) {
            return +$;
        })), h.length > 0 ? (g === "spring" && h.push(s.duration), s.easingImpl = /*#__PURE__*/ sn[g].apply(null, h)) : s.easingImpl = sn[g];
    }
    var m = s.easingImpl, y;
    if (s.duration === 0 ? y = 1 : y = (r - l) / s.duration, s.applying && (y = s.progress), y < 0 ? y = 0 : y > 1 && (y = 1), s.delay == null) {
        var p = s.startPosition, b1 = s.position;
        if (b1 && n && !t.locked()) {
            var w = {};
            sa(p.x, b1.x) && (w.x = /*#__PURE__*/ Br(p.x, b1.x, y, m)), sa(p.y, b1.y) && (w.y = /*#__PURE__*/ Br(p.y, b1.y, y, m)), t.position(w);
        }
        var x = s.startPan, S = s.pan, T = i.pan, E = S != null && a;
        E && (sa(x.x, S.x) && (T.x = /*#__PURE__*/ Br(x.x, S.x, y, m)), sa(x.y, S.y) && (T.y = /*#__PURE__*/ Br(x.y, S.y, y, m)), t.emit("pan"));
        var D = s.startZoom, C = s.zoom, B = C != null && a;
        B && (sa(D, C) && (i.zoom = /*#__PURE__*/ Ea(i.minZoom, /*#__PURE__*/ Br(D, C, y, m), i.maxZoom)), t.emit("zoom")), (E || B) && t.emit("viewport");
        var A = s.style;
        if (A && A.length > 0 && n) {
            for(var P = 0; P < A.length; P++){
                var M = A[P], R = M.name, I = M, L = s.startStyle[R], O = f.properties[L.name], N = /*#__PURE__*/ Br(L, I, y, m, O);
                f.overrideBypass(t, R, N);
            }
            t.emit("style");
        }
    }
    return s.progress = y, y;
}
m$1(xg, "step$1");
function sa(t, e) {
    return t == null || e == null ? false : ae(t) && ae(e) ? true : !!(t && e);
}
m$1(sa, "valid");
function Eg(t, e, r, a) {
    var n = e._private;
    n.started = true, n.startTime = r - n.progress * n.duration;
}
m$1(Eg, "startAnimation");
function Ks(t, e) {
    var r = e._private.aniEles, a = [];
    function n(f, c) {
        var d = f._private, g = d.animation.current, h = d.animation.queue, m = false;
        if (g.length === 0) {
            var y = /*#__PURE__*/ h.shift();
            y && g.push(y);
        }
        for(var p = /*#__PURE__*/ m$1(function(T) {
            for(var E = T.length - 1; E >= 0; E--){
                var D = T[E];
                D();
            }
            T.splice(0, T.length);
        }, "callbacks"), b1 = g.length - 1; b1 >= 0; b1--){
            var w = g[b1], x = w._private;
            if (x.stopped) {
                g.splice(b1, 1), x.hooked = false, x.playing = false, x.started = false, p(x.frames);
                continue;
            }
            !x.playing && !x.applying || (x.playing && x.applying && (x.applying = false), x.started || Eg(f, w, t), xg(f, w, t, c), x.applying && (x.applying = false), p(x.frames), x.step != null && x.step(t), w.completed() && (g.splice(b1, 1), x.hooked = false, x.playing = false, x.started = false, p(x.completes)), m = true);
        }
        return !c && g.length === 0 && h.length === 0 && a.push(f), m;
    }
    m$1(n, "stepOne");
    for(var i = false, s = 0; s < r.length; s++){
        var o = r[s], l = /*#__PURE__*/ n(o);
        i = i || l;
    }
    var u = /*#__PURE__*/ n(e, true);
    (i || u) && (r.length > 0 ? e.notify("draw", r) : e.notify("draw")), r.unmerge(a), e.emit("step");
}
m$1(Ks, "stepAll");
var Tg = {
    animate: /*#__PURE__*/ Ae.animate(),
    animation: /*#__PURE__*/ Ae.animation(),
    animated: /*#__PURE__*/ Ae.animated(),
    clearQueue: /*#__PURE__*/ Ae.clearQueue(),
    delay: /*#__PURE__*/ Ae.delay(),
    delayAnimation: /*#__PURE__*/ Ae.delayAnimation(),
    stop: /*#__PURE__*/ Ae.stop(),
    addToAnimationPool: /*#__PURE__*/ m$1(function(e) {
        var r = this;
        r.styleEnabled() && r._private.aniEles.merge(e);
    }, "addToAnimationPool"),
    stopAnimationLoop: /*#__PURE__*/ m$1(function() {
        this._private.animationsRunning = false;
    }, "stopAnimationLoop"),
    startAnimationLoop: /*#__PURE__*/ m$1(function() {
        var e = this;
        if (e._private.animationsRunning = true, !e.styleEnabled()) return;
        function r() {
            e._private.animationsRunning && cn(/*#__PURE__*/ m$1(function(i) {
                Ks(i, e), r();
            }, "animationStep"));
        }
        m$1(r, "headlessStep");
        var a = /*#__PURE__*/ e.renderer();
        a && a.beforeRender ? a.beforeRender(/*#__PURE__*/ m$1(function(i, s) {
            Ks(s, e);
        }, "rendererAnimationStep"), a.beforeRenderPriorities.animations) : r();
    }, "startAnimationLoop")
}, Cg = {
    qualifierCompare: /*#__PURE__*/ m$1(function(e, r) {
        return e == null || r == null ? e == null && r == null : e.sameText(r);
    }, "qualifierCompare"),
    eventMatches: /*#__PURE__*/ m$1(function(e, r, a) {
        var n = r.qualifier;
        return n != null ? e !== a.target && Aa(a.target) && n.matches(a.target) : true;
    }, "eventMatches"),
    addEventFields: /*#__PURE__*/ m$1(function(e, r) {
        r.cy = e, r.target = e;
    }, "addEventFields"),
    callbackContext: /*#__PURE__*/ m$1(function(e, r, a) {
        return r.qualifier != null ? a.target : e;
    }, "callbackContext")
}, Za = /*#__PURE__*/ m$1(function(e) {
    return ce(e) ? new ir(e) : e;
}, "argSelector"), Eu = {
    createEmitter: /*#__PURE__*/ m$1(function() {
        var e = this._private;
        return e.emitter || (e.emitter = new Mn(Cg, this)), this;
    }, "createEmitter"),
    emitter: /*#__PURE__*/ m$1(function() {
        return this._private.emitter;
    }, "emitter"),
    on: /*#__PURE__*/ m$1(function(e, r, a) {
        return this.emitter().on(e, /*#__PURE__*/ Za(r), a), this;
    }, "on"),
    removeListener: /*#__PURE__*/ m$1(function(e, r, a) {
        return this.emitter().removeListener(e, /*#__PURE__*/ Za(r), a), this;
    }, "removeListener"),
    removeAllListeners: /*#__PURE__*/ m$1(function() {
        return this.emitter().removeAllListeners(), this;
    }, "removeAllListeners"),
    one: /*#__PURE__*/ m$1(function(e, r, a) {
        return this.emitter().one(e, /*#__PURE__*/ Za(r), a), this;
    }, "one"),
    once: /*#__PURE__*/ m$1(function(e, r, a) {
        return this.emitter().one(e, /*#__PURE__*/ Za(r), a), this;
    }, "once"),
    emit: /*#__PURE__*/ m$1(function(e, r) {
        return this.emitter().emit(e, r), this;
    }, "emit"),
    emitAndNotify: /*#__PURE__*/ m$1(function(e, r) {
        return this.emit(e), this.notify(e, r), this;
    }, "emitAndNotify")
};
Ae.eventAliasesOn(Eu);
var fi = {
    png: /*#__PURE__*/ m$1(function(e) {
        var r = this._private.renderer;
        return e = e || {}, r.png(e);
    }, "png"),
    jpg: /*#__PURE__*/ m$1(function(e) {
        var r = this._private.renderer;
        return e = e || {}, e.bg = e.bg || "#fff", r.jpg(e);
    }, "jpg")
};
fi.jpeg = fi.jpg;
var on = {
    layout: /*#__PURE__*/ m$1(function(e) {
        var r = this;
        if (e == null) {
            $e("Layout options must be specified to make a layout");
            return;
        }
        if (e.name == null) {
            $e("A `name` must be specified to make a layout");
            return;
        }
        var a = e.name, n = /*#__PURE__*/ r.extension("layout", a);
        if (n == null) {
            $e("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
            return;
        }
        var i;
        ce(e.eles) ? i = /*#__PURE__*/ r.$(e.eles) : i = e.eles != null ? e.eles : r.$();
        var s = new n(he({}, e, {
            cy: r,
            eles: i
        }));
        return s;
    }, "layout")
};
on.createLayout = on.makeLayout = on.layout;
var Sg = {
    notify: /*#__PURE__*/ m$1(function(e, r) {
        var a = this._private;
        if (this.batching()) {
            a.batchNotifications = a.batchNotifications || {};
            var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
            r != null && n.merge(r);
            return;
        }
        if (a.notificationsEnabled) {
            var i = /*#__PURE__*/ this.renderer();
            this.destroyed() || !i || i.notify(e, r);
        }
    }, "notify"),
    notifications: /*#__PURE__*/ m$1(function(e) {
        var r = this._private;
        return e === void 0 ? r.notificationsEnabled : (r.notificationsEnabled = !!e, this);
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
            var r = /*#__PURE__*/ this.renderer();
            Object.keys(e.batchNotifications).forEach(function(a) {
                var n = e.batchNotifications[a];
                n.empty() ? r.notify(a) : r.notify(a, n);
            });
        }
        return this;
    }, "endBatch"),
    batch: /*#__PURE__*/ m$1(function(e) {
        return this.startBatch(), e(), this.endBatch(), this;
    }, "batch"),
    batchData: /*#__PURE__*/ m$1(function(e) {
        var r = this;
        return this.batch(function() {
            for(var a = /*#__PURE__*/ Object.keys(e), n = 0; n < a.length; n++){
                var i = a[n], s = e[i], o = /*#__PURE__*/ r.getElementById(i);
                o.data(s);
            }
        });
    }, "batchData")
}, Dg = /*#__PURE__*/ et({
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
    webglTexRows: 12,
    webglBatchSize: 2048,
    webglTexPerBatch: 14,
    webglBgColor: [
        255,
        255,
        255
    ]
}), ci = {
    renderTo: /*#__PURE__*/ m$1(function(e, r, a, n) {
        var i = this._private.renderer;
        return i.renderTo(e, r, a, n), this;
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
        var r = this, a = /*#__PURE__*/ r.extension("renderer", e.name);
        if (a == null) {
            $e(/*#__PURE__*/ "Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
            return;
        }
        e.wheelSensitivity !== void 0 && Re("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
        var n = /*#__PURE__*/ Dg(e);
        n.cy = r, r._private.renderer = new a(n), this.notify("init");
    }, "initRenderer"),
    destroyRenderer: /*#__PURE__*/ m$1(function() {
        var e = this;
        e.notify("destroy");
        var r = /*#__PURE__*/ e.container();
        if (r) for(r._cyreg = null; r.childNodes.length > 0;)r.removeChild(r.childNodes[0]);
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
ci.invalidateDimensions = ci.resize;
var un = {
    collection: /*#__PURE__*/ m$1(function(e, r) {
        return ce(e) ? this.$(e) : Et(e) ? e.collection() : Oe(e) ? (r || (r = {}), new at(this, e, r.unique, r.removed)) : new at(this);
    }, "collection"),
    nodes: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ this.$(function(a) {
            return a.isNode();
        });
        return e ? r.filter(e) : r;
    }, "nodes"),
    edges: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ this.$(function(a) {
            return a.isEdge();
        });
        return e ? r.filter(e) : r;
    }, "edges"),
    $: /*#__PURE__*/ m$1(function(e) {
        var r = this._private.elements;
        return e ? r.filter(e) : r.spawnSelf();
    }, "$"),
    mutableElements: /*#__PURE__*/ m$1(function() {
        return this._private.elements;
    }, "mutableElements")
};
un.elements = un.filter = un.$;
var lt = {}, ha = "t", kg = "f";
lt.apply = function(t) {
    for(var e = this, r = e._private, a = r.cy, n = /*#__PURE__*/ a.collection(), i = 0; i < t.length; i++){
        var s = t[i], o = /*#__PURE__*/ e.getContextMeta(s);
        if (!o.empty) {
            var l = /*#__PURE__*/ e.getContextStyle(o), u = /*#__PURE__*/ e.applyContextStyle(o, l, s);
            s._private.appliedInitStyle ? e.updateTransitions(s, u.diffProps) : s._private.appliedInitStyle = true;
            var f = /*#__PURE__*/ e.updateStyleHints(s);
            f && n.push(s);
        }
    }
    return n;
};
lt.getPropertiesDiff = function(t, e) {
    var r = this, a = r._private.propDiffs = r._private.propDiffs || {}, n = t + "-" + e, i = a[n];
    if (i) return i;
    for(var s = [], o = {}, l = 0; l < r.length; l++){
        var u = r[l], f = t[l] === ha, c = e[l] === ha, d = f !== c, g = u.mappedProperties.length > 0;
        if (d || c && g) {
            var h = void 0;
            d && g || d ? h = u.properties : g && (h = u.mappedProperties);
            for(var m = 0; m < h.length; m++){
                for(var y = h[m], p = y.name, b1 = false, w = l + 1; w < r.length; w++){
                    var x = r[w], S = e[w] === ha;
                    if (S && (b1 = x.properties[y.name] != null, b1)) break;
                }
                !o[p] && !b1 && (o[p] = true, s.push(p));
            }
        }
    }
    return a[n] = s, s;
};
lt.getContextMeta = function(t) {
    for(var e = this, r = "", a, n = t._private.styleCxtKey || "", i = 0; i < e.length; i++){
        var s = e[i], o = s.selector && s.selector.matches(t);
        o ? r += ha : r += kg;
    }
    return a = /*#__PURE__*/ e.getPropertiesDiff(n, r), t._private.styleCxtKey = r, {
        key: r,
        diffPropNames: a,
        empty: a.length === 0
    };
};
lt.getContextStyle = function(t) {
    var e = t.key, r = this, a = this._private.contextStyles = this._private.contextStyles || {};
    if (a[e]) return a[e];
    for(var n = {
        _private: {
            key: e
        }
    }, i = 0; i < r.length; i++){
        var s = r[i], o = e[i] === ha;
        if (o) for(var l = 0; l < s.properties.length; l++){
            var u = s.properties[l];
            n[u.name] = u;
        }
    }
    return a[e] = n, n;
};
lt.applyContextStyle = function(t, e, r) {
    for(var a = this, n = t.diffPropNames, i = {}, s = a.types, o = 0; o < n.length; o++){
        var l = n[o], u = e[l], f = /*#__PURE__*/ r.pstyle(l);
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
                var c = f.mapping, d = c.fnValue = /*#__PURE__*/ u.value(r);
                if (d === c.prevFnValue) continue;
            }
            var g = i[l] = {
                prev: f
            };
            a.applyParsedProperty(r, u), g.next = /*#__PURE__*/ r.pstyle(l), g.next && g.next.bypass && (g.next = g.next.bypassed);
        }
    }
    return {
        diffProps: i
    };
};
lt.updateStyleHints = function(t) {
    var e = t._private, r = this, a = r.propertyGroupNames, n = r.propertyGroupKeys, i = /*#__PURE__*/ m$1(function(U, te, se) {
        return r.getPropertiesHash(U, te, se);
    }, "propHash"), s = e.styleKey;
    if (t.removed()) return false;
    var o = e.group === "nodes", l = t._private.style;
    a = /*#__PURE__*/ Object.keys(l);
    for(var u = 0; u < n.length; u++){
        var f = n[u];
        e.styleKeys[f] = [
            Mr,
            va
        ];
    }
    for(var c = /*#__PURE__*/ m$1(function(U, te) {
        return e.styleKeys[te][0] = /*#__PURE__*/ ba(U, e.styleKeys[te][0]);
    }, "updateGrKey1"), d = /*#__PURE__*/ m$1(function(U, te) {
        return e.styleKeys[te][1] = /*#__PURE__*/ wa(U, e.styleKeys[te][1]);
    }, "updateGrKey2"), g = /*#__PURE__*/ m$1(function(U, te) {
        c(U, te), d(U, te);
    }, "updateGrKey"), h = /*#__PURE__*/ m$1(function(U, te) {
        for(var se = 0; se < U.length; se++){
            var le = /*#__PURE__*/ U.charCodeAt(se);
            c(le, te), d(le, te);
        }
    }, "updateGrKeyWStr"), m = 2e9, y = /*#__PURE__*/ m$1(function(U) {
        return -128 < U && U < 128 && Math.floor(U) !== U ? m - (U * 1024 | 0) : U;
    }, "cleanNum"), p = 0; p < a.length; p++){
        var b1 = a[p], w = l[b1];
        if (w != null) {
            var x = this.properties[b1], S = x.type, T = x.groupKey, E = void 0;
            x.hashOverride != null ? E = /*#__PURE__*/ x.hashOverride(t, w) : w.pfValue != null && (E = w.pfValue);
            var D = x.enums == null ? w.value : null, C = E != null, B = D != null, A = C || B, P = w.units;
            if (S.number && A && !S.multiple) {
                var M = C ? E : D;
                g(/*#__PURE__*/ y(M), T), !C && P != null && h(P, T);
            } else h(w.strValue, T);
        }
    }
    for(var R = [
        Mr,
        va
    ], I = 0; I < n.length; I++){
        var L = n[I], O = e.styleKeys[L];
        R[0] = /*#__PURE__*/ ba(O[0], R[0]), R[1] = /*#__PURE__*/ wa(O[1], R[1]);
    }
    e.styleKey = /*#__PURE__*/ Rv(R[0], R[1]);
    var N = e.styleKeys;
    e.labelDimsKey = /*#__PURE__*/ Zt(N.labelDimensions);
    var $ = /*#__PURE__*/ i(t, [
        "label"
    ], N.labelDimensions);
    if (e.labelKey = /*#__PURE__*/ Zt($), e.labelStyleKey = /*#__PURE__*/ Zt(/*#__PURE__*/ $a(N.commonLabel, $)), !o) {
        var H = /*#__PURE__*/ i(t, [
            "source-label"
        ], N.labelDimensions);
        e.sourceLabelKey = /*#__PURE__*/ Zt(H), e.sourceLabelStyleKey = /*#__PURE__*/ Zt(/*#__PURE__*/ $a(N.commonLabel, H));
        var q = /*#__PURE__*/ i(t, [
            "target-label"
        ], N.labelDimensions);
        e.targetLabelKey = /*#__PURE__*/ Zt(q), e.targetLabelStyleKey = /*#__PURE__*/ Zt(/*#__PURE__*/ $a(N.commonLabel, q));
    }
    if (o) {
        var K = e.styleKeys, Y = K.nodeBody, Z = K.nodeBorder, J = K.nodeOutline, Q = K.backgroundImage, ee = K.compound, re = K.pie, W = /*#__PURE__*/ [
            Y,
            Z,
            J,
            Q,
            ee,
            re
        ].filter(function(z) {
            return z != null;
        }).reduce($a, [
            Mr,
            va
        ]);
        e.nodeKey = /*#__PURE__*/ Zt(W), e.hasPie = re != null && re[0] !== Mr && re[1] !== va;
    }
    return s !== e.styleKey;
};
lt.clearStyleHints = function(t) {
    var e = t._private;
    e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
};
lt.applyParsedProperty = function(t, e) {
    var r = this, a = e, n = t._private.style, i, s = r.types, o = r.properties[a.name].type, l = a.bypass, u = n[a.name], f = u && u.bypass, c = t._private, d = "mapping", g = /*#__PURE__*/ m$1(function(Y) {
        return Y == null ? null : Y.pfValue != null ? Y.pfValue : Y.value;
    }, "getVal"), h = /*#__PURE__*/ m$1(function() {
        var Y = /*#__PURE__*/ g(u), Z = /*#__PURE__*/ g(a);
        r.checkTriggers(t, a.name, Y, Z);
    }, "checkTriggers");
    if (e.name === "curve-style" && t.isEdge() && (e.value !== "bezier" && t.isLoop() || e.value === "haystack" && (t.source().isParent() || t.target().isParent())) && (a = e = /*#__PURE__*/ this.parse(e.name, "bezier", l)), a.delete) return n[a.name] = void 0, h(), true;
    if (a.deleteBypassed) return u ? u.bypass ? (u.bypassed = void 0, h(), true) : false : (h(), true);
    if (a.deleteBypass) return u ? u.bypass ? (n[a.name] = u.bypassed, h(), true) : false : (h(), true);
    var m = /*#__PURE__*/ m$1(function() {
        Re("Do not assign mappings to elements without corresponding data (i.e. ele `" + t.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
    }, "printMappingErr");
    switch(a.mapped){
        case s.mapData:
            {
                for(var y = /*#__PURE__*/ a.field.split("."), p = c.data, b1 = 0; b1 < y.length && p; b1++){
                    var w = y[b1];
                    p = p[w];
                }
                if (p == null) return m(), false;
                var x;
                if (ae(p)) {
                    var S = a.fieldMax - a.fieldMin;
                    S === 0 ? x = 0 : x = (p - a.fieldMin) / S;
                } else return Re("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + p + "` for `" + t.id() + "` is non-numeric)"), false;
                if (x < 0 ? x = 0 : x > 1 && (x = 1), o.color) {
                    var T = a.valueMin[0], E = a.valueMax[0], D = a.valueMin[1], C = a.valueMax[1], B = a.valueMin[2], A = a.valueMax[2], P = a.valueMin[3] == null ? 1 : a.valueMin[3], M = a.valueMax[3] == null ? 1 : a.valueMax[3], R = [
                        /*#__PURE__*/ Math.round(T + (E - T) * x),
                        /*#__PURE__*/ Math.round(D + (C - D) * x),
                        /*#__PURE__*/ Math.round(B + (A - B) * x),
                        /*#__PURE__*/ Math.round(P + (M - P) * x)
                    ];
                    i = {
                        bypass: a.bypass,
                        name: a.name,
                        value: R,
                        strValue: "rgb(" + R[0] + ", " + R[1] + ", " + R[2] + ")"
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
                for(var L = /*#__PURE__*/ a.field.split("."), O = c.data, N = 0; N < L.length && O; N++){
                    var $ = L[N];
                    O = O[$];
                }
                if (O != null && (i = /*#__PURE__*/ this.parse(a.name, O, a.bypass, d)), !i) return m(), false;
                i.mapping = a, a = i;
                break;
            }
        case s.fn:
            {
                var H = a.value, q = a.fnValue != null ? a.fnValue : H(t);
                if (a.prevFnValue = q, q == null) return Re("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + t.id() + "` is null)"), false;
                if (i = /*#__PURE__*/ this.parse(a.name, q, a.bypass, d), !i) return Re("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + t.id() + "` is invalid)"), false;
                i.mapping = /*#__PURE__*/ zt(a), a = i;
                break;
            }
        case void 0:
            break;
        default:
            return false;
    }
    return l ? (f ? a.bypassed = u.bypassed : a.bypassed = u, n[a.name] = a) : f ? u.bypassed = a : n[a.name] = a, h(), true;
};
lt.cleanElements = function(t, e) {
    for(var r = 0; r < t.length; r++){
        var a = t[r];
        if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e) a._private.style = {};
        else for(var n = a._private.style, i = /*#__PURE__*/ Object.keys(n), s = 0; s < i.length; s++){
            var o = i[s], l = n[o];
            l != null && (l.bypass ? l.bypassed = null : n[o] = null);
        }
    }
};
lt.update = function() {
    var t = this._private.cy, e = /*#__PURE__*/ t.mutableElements();
    e.updateStyle();
};
lt.updateTransitions = function(t, e) {
    var r = this, a = t._private, n = t.pstyle("transition-property").value, i = t.pstyle("transition-duration").pfValue, s = t.pstyle("transition-delay").pfValue;
    if (n.length > 0 && i > 0) {
        for(var o = {}, l = false, u = 0; u < n.length; u++){
            var f = n[u], c = /*#__PURE__*/ t.pstyle(f), d = e[f];
            if (d) {
                var g = d.prev, h = g, m = d.next != null ? d.next : c, y = false, p = void 0, b1 = 1e-6;
                h && (ae(h.pfValue) && ae(m.pfValue) ? (y = m.pfValue - h.pfValue, p = h.pfValue + b1 * y) : ae(h.value) && ae(m.value) ? (y = m.value - h.value, p = h.value + b1 * y) : Oe(h.value) && Oe(m.value) && (y = h.value[0] !== m.value[0] || h.value[1] !== m.value[1] || h.value[2] !== m.value[2], p = h.strValue), y && (o[f] = m.strValue, this.applyBypass(t, f, p), l = true));
            }
        }
        if (!l) return;
        a.transitioning = true, new Hr(function(w) {
            s > 0 ? t.delayAnimation(s).play().promise().then(w) : w();
        }).then(function() {
            return t.animation({
                style: o,
                duration: i,
                easing: t.pstyle("transition-timing-function").value,
                queue: false
            }).play().promise();
        }).then(function() {
            r.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = false;
        });
    } else a.transitioning && (this.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = false);
};
lt.checkTrigger = function(t, e, r, a, n, i) {
    var s = this.properties[e], o = /*#__PURE__*/ n(s);
    o != null && o(r, a) && i(s);
};
lt.checkZOrderTrigger = function(t, e, r, a) {
    var n = this;
    this.checkTrigger(t, e, r, a, function(i) {
        return i.triggersZOrder;
    }, function() {
        n._private.cy.notify("zorder", t);
    });
};
lt.checkBoundsTrigger = function(t, e, r, a) {
    this.checkTrigger(t, e, r, a, function(n) {
        return n.triggersBounds;
    }, function(n) {
        t.dirtyCompoundBoundsCache(), t.dirtyBoundingBoxCache(), n.triggersBoundsOfParallelBeziers && e === "curve-style" && (r === "bezier" || a === "bezier") && t.parallelEdges().forEach(function(i) {
            i.dirtyBoundingBoxCache();
        }), n.triggersBoundsOfConnectedEdges && e === "display" && (r === "none" || a === "none") && t.connectedEdges().forEach(function(i) {
            i.dirtyBoundingBoxCache();
        });
    });
};
lt.checkTriggers = function(t, e, r, a) {
    t.dirtyStyleCache(), this.checkZOrderTrigger(t, e, r, a), this.checkBoundsTrigger(t, e, r, a);
};
var Oa = {};
Oa.applyBypass = function(t, e, r, a) {
    var n = this, i = [], s = true;
    if (e === "*" || e === "**") {
        if (r !== void 0) for(var o = 0; o < n.properties.length; o++){
            var l = n.properties[o], u = l.name, f = /*#__PURE__*/ this.parse(u, r, true);
            f && i.push(f);
        }
    } else if (ce(e)) {
        var c = /*#__PURE__*/ this.parse(e, r, true);
        c && i.push(c);
    } else if (Pe(e)) {
        var d = e;
        a = r;
        for(var g = /*#__PURE__*/ Object.keys(d), h = 0; h < g.length; h++){
            var m = g[h], y = d[m];
            if (y === void 0 && (y = d[Tn(m)]), y !== void 0) {
                var p = /*#__PURE__*/ this.parse(m, y, true);
                p && i.push(p);
            }
        }
    } else return false;
    if (i.length === 0) return false;
    for(var b1 = false, w = 0; w < t.length; w++){
        for(var x = t[w], S = {}, T = void 0, E = 0; E < i.length; E++){
            var D = i[E];
            if (a) {
                var C = /*#__PURE__*/ x.pstyle(D.name);
                T = S[D.name] = {
                    prev: C
                };
            }
            b1 = this.applyParsedProperty(x, /*#__PURE__*/ zt(D)) || b1, a && (T.next = /*#__PURE__*/ x.pstyle(D.name));
        }
        b1 && this.updateStyleHints(x), a && this.updateTransitions(x, S, s);
    }
    return b1;
};
Oa.overrideBypass = function(t, e, r) {
    e = /*#__PURE__*/ Ti(e);
    for(var a = 0; a < t.length; a++){
        var n = t[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, l = s.mutiple, u = i ? i.pfValue != null ? i.pfValue : i.value : null;
        !i || !i.bypass ? this.applyBypass(n, e, r) : (i.value = r, i.pfValue != null && (i.pfValue = r), o ? i.strValue = "rgb(" + r.join(",") + ")" : l ? i.strValue = /*#__PURE__*/ r.join(" ") : i.strValue = "" + r, this.updateStyleHints(n)), this.checkTriggers(n, e, u, r);
    }
};
Oa.removeAllBypasses = function(t, e) {
    return this.removeBypasses(t, this.propertyNames, e);
};
Oa.removeBypasses = function(t, e, r) {
    for(var a = true, n = 0; n < t.length; n++){
        for(var i = t[n], s = {}, o = 0; o < e.length; o++){
            var l = e[o], u = this.properties[l], f = /*#__PURE__*/ i.pstyle(u.name);
            if (!(!f || !f.bypass)) {
                var c = "", d = /*#__PURE__*/ this.parse(l, c, true), g = s[u.name] = {
                    prev: f
                };
                this.applyParsedProperty(i, d), g.next = /*#__PURE__*/ i.pstyle(u.name);
            }
        }
        this.updateStyleHints(i), r && this.updateTransitions(i, s, a);
    }
};
var zi = {};
zi.getEmSizeInPixels = function() {
    var t = /*#__PURE__*/ this.containerCss("font-size");
    return t != null ? parseFloat(t) : 1;
};
zi.containerCss = function(t) {
    var e = this._private.cy, r = /*#__PURE__*/ e.container(), a = /*#__PURE__*/ e.window();
    if (a && r && a.getComputedStyle) return a.getComputedStyle(r).getPropertyValue(t);
};
var Vt = {};
Vt.getRenderedStyle = function(t, e) {
    return e ? this.getStylePropertyValue(t, e, true) : this.getRawStyle(t, true);
};
Vt.getRawStyle = function(t, e) {
    var r = this;
    if (t = t[0], t) {
        for(var a = {}, n = 0; n < r.properties.length; n++){
            var i = r.properties[n], s = /*#__PURE__*/ r.getStylePropertyValue(t, i.name, e);
            s != null && (a[i.name] = s, a[Tn(i.name)] = s);
        }
        return a;
    }
};
Vt.getIndexedStyle = function(t, e, r, a) {
    var n = t.pstyle(e)[r][a];
    return n ?? t.cy().style().getDefaultProperty(e)[r][0];
};
Vt.getStylePropertyValue = function(t, e, r) {
    var a = this;
    if (t = t[0], t) {
        var n = a.properties[e];
        n.alias && (n = n.pointsTo);
        var i = n.type, s = /*#__PURE__*/ t.pstyle(n.name);
        if (s) {
            var o = s.value, l = s.units, u = s.strValue;
            if (r && i.number && o != null && ae(o)) {
                var f = /*#__PURE__*/ t.cy().zoom(), c = /*#__PURE__*/ m$1(function(y) {
                    return y * f;
                }, "getRenderedValue"), d = /*#__PURE__*/ m$1(function(y, p) {
                    return c(y) + p;
                }, "getValueStringWithUnits"), g = /*#__PURE__*/ Oe(o), h = g ? l.every(function(m) {
                    return m != null;
                }) : l != null;
                return h ? g ? o.map(function(m, y) {
                    return d(m, l[y]);
                }).join(" ") : d(o, l) : g ? o.map(function(m) {
                    return ce(m) ? m : "" + c(m);
                }).join(" ") : "" + c(o);
            } else if (u != null) return u;
        }
        return null;
    }
};
Vt.getAnimationStartStyle = function(t, e) {
    for(var r = {}, a = 0; a < e.length; a++){
        var n = e[a], i = n.name, s = /*#__PURE__*/ t.pstyle(i);
        s !== void 0 && (Pe(s) ? s = /*#__PURE__*/ this.parse(i, s.strValue) : s = /*#__PURE__*/ this.parse(i, s)), s && (r[i] = s);
    }
    return r;
};
Vt.getPropsList = function(t) {
    var e = this, r = [], a = t, n = e.properties;
    if (a) for(var i = /*#__PURE__*/ Object.keys(a), s = 0; s < i.length; s++){
        var o = i[s], l = a[o], u = n[o] || n[Ti(o)], f = /*#__PURE__*/ this.parse(u.name, l);
        f && r.push(f);
    }
    return r;
};
Vt.getNonDefaultPropertiesHash = function(t, e, r) {
    var a = /*#__PURE__*/ r.slice(), n, i, s, o, l, u;
    for(l = 0; l < e.length; l++)if (n = e[l], i = /*#__PURE__*/ t.pstyle(n, false), i != null) if (i.pfValue != null) a[0] = /*#__PURE__*/ ba(o, a[0]), a[1] = /*#__PURE__*/ wa(o, a[1]);
    else for(s = i.strValue, u = 0; u < s.length; u++)o = /*#__PURE__*/ s.charCodeAt(u), a[0] = /*#__PURE__*/ ba(o, a[0]), a[1] = /*#__PURE__*/ wa(o, a[1]);
    return a;
};
Vt.getPropertiesHash = Vt.getNonDefaultPropertiesHash;
var On = {};
On.appendFromJson = function(t) {
    for(var e = this, r = 0; r < t.length; r++){
        var a = t[r], n = a.selector, i = a.style || a.css, s = /*#__PURE__*/ Object.keys(i);
        e.selector(n);
        for(var o = 0; o < s.length; o++){
            var l = s[o], u = i[l];
            e.css(l, u);
        }
    }
    return e;
};
On.fromJson = function(t) {
    var e = this;
    return e.resetToDefault(), e.appendFromJson(t), e;
};
On.json = function() {
    for(var t = [], e = this.defaultLength; e < this.length; e++){
        for(var r = this[e], a = r.selector, n = r.properties, i = {}, s = 0; s < n.length; s++){
            var o = n[s];
            i[o.name] = o.strValue;
        }
        t.push({
            selector: a ? a.toString() : "core",
            style: i
        });
    }
    return t;
};
var Fi = {};
Fi.appendFromString = function(t) {
    var e = this, r = this, a = "" + t, n, i, s;
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
            Re("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
            break;
        }
        n = f[0];
        var c = f[1];
        if (c !== "core") {
            var d = new ir(c);
            if (d.invalid) {
                Re("Skipping parsing of block: Invalid selector found in string stylesheet: " + c), o();
                continue;
            }
        }
        var g = f[2], h = false;
        i = g;
        for(var m = [];;){
            var y = /*#__PURE__*/ i.match(/^\s*$/);
            if (y) break;
            var p = /*#__PURE__*/ i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
            if (!p) {
                Re("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + g), h = true;
                break;
            }
            s = p[0];
            var b1 = p[1], w = p[2], x = e.properties[b1];
            if (!x) {
                Re("Skipping property: Invalid property name in: " + s), l();
                continue;
            }
            var S = /*#__PURE__*/ r.parse(b1, w);
            if (!S) {
                Re("Skipping property: Invalid property definition in: " + s), l();
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
        r.selector(c);
        for(var T = 0; T < m.length; T++){
            var E = m[T];
            r.css(E.name, E.val);
        }
        o();
    }
    return r;
};
Fi.fromString = function(t) {
    var e = this;
    return e.resetToDefault(), e.appendFromString(t), e;
};
var tt = {};
(function() {
    var t = Xe, e = Ol, r = zl, a = Fl, n = Vl, i = /*#__PURE__*/ m$1(function(W) {
        return "^" + W + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
    }, "data"), s = /*#__PURE__*/ m$1(function(W) {
        var z = t + "|\\w+|" + e + "|" + r + "|" + a + "|" + n;
        return "^" + W + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\s*,\\s*(" + z + ")\\s*\\,\\s*(" + z + ")\\)$";
    }, "mapData"), o = [
        `^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`,
        "^(none)$",
        "^(.+)$"
    ];
    tt.types = {
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
                "round-rectangle"
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
            validate: /*#__PURE__*/ m$1(function(W, z) {
                switch(W.length){
                    case 2:
                        return z[0] !== "deg" && z[0] !== "rad" && z[1] !== "deg" && z[1] !== "rad";
                    case 1:
                        return ce(W[0]) || z[0] === "deg" || z[0] === "rad";
                    default:
                        return false;
                }
            }, "validate")
        },
        easing: {
            regexes: [
                "^(spring)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$",
                "^(cubic-bezier)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$"
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
            validate: /*#__PURE__*/ m$1(function(W) {
                var z = W.length;
                return z === 1 || z === 2 || z === 4;
            }, "validate")
        }
    };
    var l = {
        zeroNonZero: /*#__PURE__*/ m$1(function(W, z) {
            return (W == null || z == null) && W !== z || W == 0 && z != 0 ? true : W != 0 && z == 0;
        }, "zeroNonZero"),
        any: /*#__PURE__*/ m$1(function(W, z) {
            return W != z;
        }, "any"),
        emptyNonEmpty: /*#__PURE__*/ m$1(function(W, z) {
            var U = /*#__PURE__*/ rr(W), te = /*#__PURE__*/ rr(z);
            return U && !te || !U && te;
        }, "emptyNonEmpty")
    }, u = tt.types, f = [
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
        }
    ], y = [
        {
            name: "display",
            type: u.display,
            triggersZOrder: l.any,
            triggersBounds: l.any,
            triggersBoundsOfConnectedEdges: true
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
    ], p = [
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
    ], x = /*#__PURE__*/ m$1(function(W, z) {
        return z.value === "label" ? -W.poolIndex() : z.pfValue;
    }, "nodeSizeHashOverride"), S = [
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
    ], D = [
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
    ], C = [
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
            triggersBoundsOfParallelBeziers: true
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
    ], A = [
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
    ], P = [
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
    ], M = [];
    tt.pieBackgroundN = 16, M.push({
        name: "pie-size",
        type: u.sizeMaybePercent
    });
    for(var R = 1; R <= tt.pieBackgroundN; R++)M.push({
        name: "pie-" + R + "-background-color",
        type: u.color
    }), M.push({
        name: "pie-" + R + "-background-size",
        type: u.percent
    }), M.push({
        name: "pie-" + R + "-background-opacity",
        type: u.zeroOneNumber
    });
    var I = [], L = tt.arrowPrefixes = [
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
    ].forEach(function(re) {
        L.forEach(function(W) {
            var z = W + "-" + re.name, U = re.type, te = re.triggersBounds;
            I.push({
                name: z,
                type: U,
                triggersBounds: te
            });
        });
    }, {});
    var O = tt.properties = /*#__PURE__*/ [].concat(m, w, y, p, b1, A, h, g, f, c, d, S, T, E, D, M, C, B, I, P), N = tt.propertyGroups = {
        behavior: m,
        transition: w,
        visibility: y,
        overlay: p,
        underlay: b1,
        ghost: A,
        commonLabel: h,
        labelDimensions: g,
        mainLabel: f,
        sourceLabel: c,
        targetLabel: d,
        nodeBody: S,
        nodeBorder: T,
        nodeOutline: E,
        backgroundImage: D,
        pie: M,
        compound: C,
        edgeLine: B,
        edgeArrow: I,
        core: P
    }, $ = tt.propertyGroupNames = {}, H = tt.propertyGroupKeys = /*#__PURE__*/ Object.keys(N);
    H.forEach(function(re) {
        $[re] = /*#__PURE__*/ N[re].map(function(W) {
            return W.name;
        }), N[re].forEach(function(W) {
            return W.groupKey = re;
        });
    });
    var q = tt.aliases = [
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
    tt.propertyNames = /*#__PURE__*/ O.map(function(re) {
        return re.name;
    });
    for(var K = 0; K < O.length; K++){
        var Y = O[K];
        O[Y.name] = Y;
    }
    for(var Z = 0; Z < q.length; Z++){
        var J = q[Z], Q = O[J.pointsTo], ee = {
            name: J.name,
            alias: true,
            pointsTo: Q
        };
        O.push(ee), O[J.name] = ee;
    }
})();
tt.getDefaultProperty = function(t) {
    return this.getDefaultProperties()[t];
};
tt.getDefaultProperties = function() {
    var t = this._private;
    if (t.defaultProperties != null) return t.defaultProperties;
    for(var e = /*#__PURE__*/ he({
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
        "pie-size": "100%"
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
        for(var f = 1; f <= tt.pieBackgroundN; f++){
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
        return tt.arrowPrefixes.forEach(function(f) {
            var c = f + "-" + u.name, d = u.value;
            l[c] = d;
        }), l;
    }, {})), r = {}, a = 0; a < this.properties.length; a++){
        var n = this.properties[a];
        if (!n.pointsTo) {
            var i = n.name, s = e[i], o = /*#__PURE__*/ this.parse(i, s);
            r[i] = o;
        }
    }
    return t.defaultProperties = r, t.defaultProperties;
};
tt.addDefaultStylesheet = function() {
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
var Nn = {};
Nn.parse = function(t, e, r, a) {
    var n = this;
    if (Ke(e)) return n.parseImplWarn(t, e, r, a);
    var i = a === "mapping" || a === true || a === false || a == null ? "dontcare" : a, s = r ? "t" : "f", o = "" + e, l = /*#__PURE__*/ Ro(t, o, s, i), u = n.propCache = n.propCache || [], f;
    return (f = u[l]) || (f = u[l] = /*#__PURE__*/ n.parseImplWarn(t, e, r, a)), (r || a === "mapping") && (f = /*#__PURE__*/ zt(f), f && (f.value = /*#__PURE__*/ zt(f.value))), f;
};
Nn.parseImplWarn = function(t, e, r, a) {
    var n = /*#__PURE__*/ this.parseImpl(t, e, r, a);
    return !n && e != null && Re(/*#__PURE__*/ "The style property `".concat(t, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && Re("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
Nn.parseImpl = function(t, e, r, a) {
    var n = this;
    t = /*#__PURE__*/ Ti(t);
    var i = n.properties[t], s = e, o = n.types;
    if (!i || e === void 0) return null;
    i.alias && (i = i.pointsTo, t = i.name);
    var l = /*#__PURE__*/ ce(e);
    l && (e = /*#__PURE__*/ e.trim());
    var u = i.type;
    if (!u) return null;
    if (r && (e === "" || e === null)) return {
        name: t,
        value: e,
        bypass: true,
        deleteBypass: true
    };
    if (Ke(e)) return {
        name: t,
        value: e,
        strValue: "fn",
        mapped: o.fn,
        bypass: r
    };
    var f, c;
    if (!(!l || a || e.length < 7 || e[1] !== "a")) {
        if (e.length >= 7 && e[0] === "d" && (f = /*#__PURE__*/ new RegExp(o.data.regex).exec(e))) {
            if (r) return false;
            var d = o.data;
            return {
                name: t,
                value: f,
                strValue: "" + e,
                mapped: d,
                field: f[1],
                bypass: r
            };
        } else if (e.length >= 10 && e[0] === "m" && (c = /*#__PURE__*/ new RegExp(o.mapData.regex).exec(e))) {
            if (r || u.multiple) return false;
            var g = o.mapData;
            if (!(u.color || u.number)) return false;
            var h = /*#__PURE__*/ this.parse(t, c[4]);
            if (!h || h.mapped) return false;
            var m = /*#__PURE__*/ this.parse(t, c[5]);
            if (!m || m.mapped) return false;
            if (h.pfValue === m.pfValue || h.strValue === m.strValue) return Re("`" + t + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + t + ": " + h.strValue + "`"), this.parse(t, h.strValue);
            if (u.color) {
                var y = h.value, p = m.value, b1 = y[0] === p[0] && y[1] === p[1] && y[2] === p[2] && (y[3] === p[3] || (y[3] == null || y[3] === 1) && (p[3] == null || p[3] === 1));
                if (b1) return false;
            }
            return {
                name: t,
                value: c,
                strValue: "" + e,
                mapped: g,
                field: c[1],
                fieldMin: /*#__PURE__*/ parseFloat(c[2]),
                fieldMax: /*#__PURE__*/ parseFloat(c[3]),
                valueMin: h.value,
                valueMax: m.value,
                bypass: r
            };
        }
    }
    if (u.multiple && a !== "multiple") {
        var w;
        if (l ? w = /*#__PURE__*/ e.split(/\s+/) : Oe(e) ? w = e : w = [
            e
        ], u.evenMultiple && w.length % 2 !== 0) return null;
        for(var x = [], S = [], T = [], E = "", D = false, C = 0; C < w.length; C++){
            var B = /*#__PURE__*/ n.parse(t, w[C], r, "multiple");
            D = D || ce(B.value), x.push(B.value), T.push(B.pfValue != null ? B.pfValue : B.value), S.push(B.units), E += (C > 0 ? " " : "") + B.strValue;
        }
        return u.validate && !u.validate(x, S) ? null : u.singleEnum && D ? x.length === 1 && ce(x[0]) ? {
            name: t,
            value: x[0],
            strValue: x[0],
            bypass: r
        } : null : {
            name: t,
            value: x,
            pfValue: T,
            strValue: E,
            bypass: r,
            units: S
        };
    }
    var A = /*#__PURE__*/ m$1(function() {
        for(var W = 0; W < u.enums.length; W++){
            var z = u.enums[W];
            if (z === e) return {
                name: t,
                value: e,
                strValue: "" + e,
                bypass: r
            };
        }
        return null;
    }, "checkEnums");
    if (u.number) {
        var P, M = "px";
        if (u.units && (P = u.units), u.implicitUnits && (M = u.implicitUnits), !u.unitless) if (l) {
            var R = "px|em" + (u.allowPercent ? "|\\%" : "");
            P && (R = P);
            var I = /*#__PURE__*/ e.match("^(" + Xe + ")(" + R + ")?$");
            I && (e = I[1], P = I[2] || M);
        } else (!P || u.implicitUnits) && (P = M);
        if (e = /*#__PURE__*/ parseFloat(e), isNaN(e) && u.enums === void 0) return null;
        if (isNaN(e) && u.enums !== void 0) return e = s, A();
        if (u.integer && !Pl(e) || u.min !== void 0 && (e < u.min || u.strictMin && e === u.min) || u.max !== void 0 && (e > u.max || u.strictMax && e === u.max)) return null;
        var L = {
            name: t,
            value: e,
            strValue: "" + e + (P || ""),
            units: P,
            bypass: r
        };
        return u.unitless || P !== "px" && P !== "em" ? L.pfValue = e : L.pfValue = P === "px" || !P ? e : this.getEmSizeInPixels() * e, (P === "ms" || P === "s") && (L.pfValue = P === "ms" ? e : 1e3 * e), (P === "deg" || P === "rad") && (L.pfValue = P === "rad" ? e : uf(e)), P === "%" && (L.pfValue = e / 100), L;
    } else if (u.propList) {
        var O = [], N = "" + e;
        if (N !== "none") {
            for(var $ = /*#__PURE__*/ N.split(/\s*,\s*|\s+/), H = 0; H < $.length; H++){
                var q = /*#__PURE__*/ $[H].trim();
                n.properties[q] ? O.push(q) : Re("`" + q + "` is not a valid property name");
            }
            if (O.length === 0) return null;
        }
        return {
            name: t,
            value: O,
            strValue: O.length === 0 ? "none" : O.join(" "),
            bypass: r
        };
    } else if (u.color) {
        var K = /*#__PURE__*/ To(e);
        return K ? {
            name: t,
            value: K,
            pfValue: K,
            strValue: "rgb(" + K[0] + "," + K[1] + "," + K[2] + ")",
            bypass: r
        } : null;
    } else if (u.regex || u.regexes) {
        if (u.enums) {
            var Y = /*#__PURE__*/ A();
            if (Y) return Y;
        }
        for(var Z = u.regexes ? u.regexes : [
            u.regex
        ], J = 0; J < Z.length; J++){
            var Q = new RegExp(Z[J]), ee = /*#__PURE__*/ Q.exec(e);
            if (ee) return {
                name: t,
                value: u.singleRegexMatchValue ? ee[1] : ee,
                strValue: "" + e,
                bypass: r
            };
        }
        return null;
    } else return u.string ? {
        name: t,
        value: "" + e,
        strValue: "" + e,
        bypass: r
    } : u.enums ? A() : null;
};
var st = /*#__PURE__*/ m$1(function t(e) {
    if (!(this instanceof t)) return new t(e);
    if (!Ei(e)) {
        $e("A style must have a core reference");
        return;
    }
    this._private = {
        cy: e,
        coreStyle: {}
    }, this.length = 0, this.resetToDefault();
}, "Style"), ut = st.prototype;
ut.instanceString = function() {
    return "style";
};
ut.clear = function() {
    for(var t = this._private, e = t.cy, r = /*#__PURE__*/ e.elements(), a = 0; a < this.length; a++)this[a] = void 0;
    return this.length = 0, t.contextStyles = {}, t.propDiffs = {}, this.cleanElements(r, true), r.forEach(function(n) {
        var i = n[0]._private;
        i.styleDirty = true, i.appliedInitStyle = false;
    }), this;
};
ut.resetToDefault = function() {
    return this.clear(), this.addDefaultStylesheet(), this;
};
ut.core = function(t) {
    return this._private.coreStyle[t] || this.getDefaultProperty(t);
};
ut.selector = function(t) {
    var e = t === "core" ? null : new ir(t), r = this.length++;
    return this[r] = {
        selector: e,
        properties: [],
        mappedProperties: [],
        index: r
    }, this;
};
ut.css = function() {
    var t = this, e = arguments;
    if (e.length === 1) for(var r = e[0], a = 0; a < t.properties.length; a++){
        var n = t.properties[a], i = r[n.name];
        i === void 0 && (i = r[Tn(n.name)]), i !== void 0 && this.cssRule(n.name, i);
    }
    else e.length === 2 && this.cssRule(e[0], e[1]);
    return this;
};
ut.style = ut.css;
ut.cssRule = function(t, e) {
    var r = /*#__PURE__*/ this.parse(t, e);
    if (r) {
        var a = this.length - 1;
        this[a].properties.push(r), this[a].properties[r.name] = r, r.name.match(/pie-(\d+)-background-size/) && r.value && (this._private.hasPie = true), r.mapped && this[a].mappedProperties.push(r);
        var n = !this[a].selector;
        n && (this._private.coreStyle[r.name] = r);
    }
    return this;
};
ut.append = function(t) {
    return wo(t) ? t.appendToStyle(this) : Oe(t) ? this.appendFromJson(t) : ce(t) && this.appendFromString(t), this;
};
st.fromJson = function(t, e) {
    var r = new st(t);
    return r.fromJson(e), r;
};
st.fromString = function(t, e) {
    return new st(t).fromString(e);
};
[
    lt,
    Oa,
    zi,
    Vt,
    On,
    Fi,
    tt,
    Nn
].forEach(function(t) {
    he(ut, t);
});
st.types = ut.types;
st.properties = ut.properties;
st.propertyGroups = ut.propertyGroups;
st.propertyGroupNames = ut.propertyGroupNames;
st.propertyGroupKeys = ut.propertyGroupKeys;
var Pg = {
    style: /*#__PURE__*/ m$1(function(e) {
        if (e) {
            var r = /*#__PURE__*/ this.setStyle(e);
            r.update();
        }
        return this._private.style;
    }, "style"),
    setStyle: /*#__PURE__*/ m$1(function(e) {
        var r = this._private;
        return wo(e) ? r.style = /*#__PURE__*/ e.generateStyle(this) : Oe(e) ? r.style = /*#__PURE__*/ st.fromJson(this, e) : ce(e) ? r.style = /*#__PURE__*/ st.fromString(this, e) : r.style = /*#__PURE__*/ st(this), r.style;
    }, "setStyle"),
    updateStyle: /*#__PURE__*/ m$1(function() {
        this.mutableElements().updateStyle();
    }, "updateStyle")
}, Bg = "single", Tr = {
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
        var r = this._private;
        if (r.selectionType == null && (r.selectionType = Bg), e !== void 0) (e === "additive" || e === "single") && (r.selectionType = e);
        else return r.selectionType;
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
        var e = arguments, r = this._private.pan, a, n, i, s, o;
        switch(e.length){
            case 0:
                return r;
            case 1:
                if (ce(e[0])) return a = e[0], r[a];
                if (Pe(e[0])) {
                    if (!this._private.panningEnabled) return this;
                    i = e[0], s = i.x, o = i.y, ae(s) && (r.x = s), ae(o) && (r.y = o), this.emit("pan viewport");
                }
                break;
            case 2:
                if (!this._private.panningEnabled) return this;
                a = e[0], n = e[1], (a === "x" || a === "y") && ae(n) && (r[a] = n), this.emit("pan viewport");
                break;
        }
        return this.notify("viewport"), this;
    }, "pan"),
    panBy: /*#__PURE__*/ m$1(function(e, r) {
        var a = arguments, n = this._private.pan, i, s, o, l, u;
        if (!this._private.panningEnabled) return this;
        switch(a.length){
            case 1:
                Pe(e) && (o = a[0], l = o.x, u = o.y, ae(l) && (n.x += l), ae(u) && (n.y += u), this.emit("pan viewport"));
                break;
            case 2:
                i = e, s = r, (i === "x" || i === "y") && ae(s) && (n[i] += s), this.emit("pan viewport");
                break;
        }
        return this.notify("viewport"), this;
    }, "panBy"),
    gc: /*#__PURE__*/ m$1(function() {
        this.notify("gc");
    }, "gc"),
    fit: /*#__PURE__*/ m$1(function(e, r) {
        var a = /*#__PURE__*/ this.getFitViewport(e, r);
        if (a) {
            var n = this._private;
            n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
        }
        return this;
    }, "fit"),
    getFitViewport: /*#__PURE__*/ m$1(function(e, r) {
        if (ae(e) && r === void 0 && (r = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
            var a;
            if (ce(e)) {
                var n = e;
                e = /*#__PURE__*/ this.$(n);
            } else if (Rl(e)) {
                var i = e;
                a = {
                    x1: i.x1,
                    y1: i.y1,
                    x2: i.x2,
                    y2: i.y2
                }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
            } else Et(e) || (e = /*#__PURE__*/ this.mutableElements());
            if (!(Et(e) && e.empty())) {
                a = a || e.boundingBox();
                var s = /*#__PURE__*/ this.width(), o = /*#__PURE__*/ this.height(), l;
                if (r = ae(r) ? r : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
                    l = /*#__PURE__*/ Math.min((s - 2 * r) / a.w, (o - 2 * r) / a.h), l = l > this._private.maxZoom ? this._private.maxZoom : l, l = l < this._private.minZoom ? this._private.minZoom : l;
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
    zoomRange: /*#__PURE__*/ m$1(function(e, r) {
        var a = this._private;
        if (r == null) {
            var n = e;
            e = n.min, r = n.max;
        }
        return ae(e) && ae(r) && e <= r ? (a.minZoom = e, a.maxZoom = r) : ae(e) && r === void 0 && e <= a.maxZoom ? a.minZoom = e : ae(r) && e === void 0 && r >= a.minZoom && (a.maxZoom = r), this;
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
        var r = this._private, a = r.pan, n = r.zoom, i, s, o = false;
        if (r.zoomingEnabled || (o = true), ae(e) ? s = e : Pe(e) && (s = e.level, e.position != null ? i = /*#__PURE__*/ Dn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !r.panningEnabled && (o = true)), s = s > r.maxZoom ? r.maxZoom : s, s = s < r.minZoom ? r.minZoom : s, o || !ae(s) || s === n || i != null && (!ae(i.x) || !ae(i.y))) return null;
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
        var r = /*#__PURE__*/ this.getZoomedViewport(e), a = this._private;
        return r == null || !r.zoomed ? this : (a.zoom = r.zoom, r.panned && (a.pan.x = r.pan.x, a.pan.y = r.pan.y), this.emit("zoom" + (r.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
    }, "zoom"),
    viewport: /*#__PURE__*/ m$1(function(e) {
        var r = this._private, a = true, n = true, i = [], s = false, o = false;
        if (!e) return this;
        if (ae(e.zoom) || (a = false), Pe(e.pan) || (n = false), !a && !n) return this;
        if (a) {
            var l = e.zoom;
            l < r.minZoom || l > r.maxZoom || !r.zoomingEnabled ? s = true : (r.zoom = l, i.push("zoom"));
        }
        if (n && (!s || !e.cancelOnFailedZoom) && r.panningEnabled) {
            var u = e.pan;
            ae(u.x) && (r.pan.x = u.x, o = false), ae(u.y) && (r.pan.y = u.y, o = false), o || i.push("pan");
        }
        return i.length > 0 && (i.push("viewport"), this.emit(/*#__PURE__*/ i.join(" ")), this.notify("viewport")), this;
    }, "viewport"),
    center: /*#__PURE__*/ m$1(function(e) {
        var r = /*#__PURE__*/ this.getCenterPan(e);
        return r && (this._private.pan = r, this.emit("pan viewport"), this.notify("viewport")), this;
    }, "center"),
    getCenterPan: /*#__PURE__*/ m$1(function(e, r) {
        if (this._private.panningEnabled) {
            if (ce(e)) {
                var a = e;
                e = /*#__PURE__*/ this.mutableElements().filter(a);
            } else Et(e) || (e = /*#__PURE__*/ this.mutableElements());
            if (e.length !== 0) {
                var n = /*#__PURE__*/ e.boundingBox(), i = /*#__PURE__*/ this.width(), s = /*#__PURE__*/ this.height();
                r = r === void 0 ? this._private.zoom : r;
                var o = {
                    x: (i - r * (n.x1 + n.x2)) / 2,
                    y: (s - r * (n.y1 + n.y2)) / 2
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
        var e = this._private, r = e.container, a = this;
        return e.sizeCache = e.sizeCache || (r ? function() {
            var n = /*#__PURE__*/ a.window().getComputedStyle(r), i = /*#__PURE__*/ m$1(function(o) {
                return parseFloat(/*#__PURE__*/ n.getPropertyValue(o));
            }, "val");
            return {
                width: r.clientWidth - i("padding-left") - i("padding-right"),
                height: r.clientHeight - i("padding-top") - i("padding-bottom")
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
        var e = this._private.pan, r = this._private.zoom, a = /*#__PURE__*/ this.renderedExtent(), n = {
            x1: (a.x1 - e.x) / r,
            x2: (a.x2 - e.x) / r,
            y1: (a.y1 - e.y) / r,
            y2: (a.y2 - e.y) / r
        };
        return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
    }, "extent"),
    renderedExtent: /*#__PURE__*/ m$1(function() {
        var e = /*#__PURE__*/ this.width(), r = /*#__PURE__*/ this.height();
        return {
            x1: 0,
            y1: 0,
            x2: e,
            y2: r,
            w: e,
            h: r
        };
    }, "renderedExtent"),
    multiClickDebounceTime: /*#__PURE__*/ m$1(function(e) {
        if (e) this._private.multiClickDebounceTime = e;
        else return this._private.multiClickDebounceTime;
        return this;
    }, "multiClickDebounceTime")
};
Tr.centre = Tr.center;
Tr.autolockNodes = Tr.autolock;
Tr.autoungrabifyNodes = Tr.autoungrabify;
var ka = {
    data: /*#__PURE__*/ Ae.data({
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
    removeData: /*#__PURE__*/ Ae.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    }),
    scratch: /*#__PURE__*/ Ae.data({
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
    removeScratch: /*#__PURE__*/ Ae.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: true,
        updateStyle: true
    })
};
ka.attr = ka.data;
ka.removeAttr = ka.removeData;
var Pa = /*#__PURE__*/ m$1(function(e) {
    var r = this;
    e = /*#__PURE__*/ he({}, e);
    var a = e.container;
    a && !fn(a) && fn(a[0]) && (a = a[0]);
    var n = a ? a._cyreg : null;
    n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
    var i = n.readies = n.readies || [];
    a && (a._cyreg = n), n.cy = r;
    var s = Ue !== void 0 && a !== void 0 && !e.headless, o = e;
    o.layout = /*#__PURE__*/ he({
        name: s ? "grid" : "null"
    }, o.layout), o.renderer = /*#__PURE__*/ he({
        name: s ? "canvas" : "null"
    }, o.renderer);
    var l = /*#__PURE__*/ m$1(function(h, m, y) {
        return m !== void 0 ? m : y !== void 0 ? y : h;
    }, "defVal"), u = this._private = {
        container: a,
        ready: false,
        options: o,
        elements: new at(this),
        listeners: [],
        aniEles: new at(this),
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
        zoom: ae(o.zoom) ? o.zoom : 1,
        pan: {
            x: Pe(o.pan) && ae(o.pan.x) ? o.pan.x : 0,
            y: Pe(o.pan) && ae(o.pan.y) ? o.pan.y : 0
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
        var y = /*#__PURE__*/ h.some(Ml);
        if (y) return Hr.all(h).then(m);
        m(h);
    }, "loadExtData");
    u.styleEnabled && r.setStyle([]);
    var c = /*#__PURE__*/ he({}, o, o.renderer);
    r.initRenderer(c);
    var d = /*#__PURE__*/ m$1(function(h, m, y) {
        r.notifications(false);
        var p = /*#__PURE__*/ r.mutableElements();
        p.length > 0 && p.remove(), h != null && (Pe(h) || Oe(h)) && r.add(h), r.one("layoutready", function(w) {
            r.notifications(true), r.emit(w), r.one("load", m), r.emitAndNotify("load");
        }).one("layoutstop", function() {
            r.one("done", y), r.emit("done");
        });
        var b1 = /*#__PURE__*/ he({}, r._private.options.layout);
        b1.eles = /*#__PURE__*/ r.elements(), r.layout(b1).run();
    }, "setElesAndLayout");
    f([
        o.style,
        o.elements
    ], function(g) {
        var h = g[0], m = g[1];
        u.styleEnabled && r.style().append(h), d(m, function() {
            r.startAnimationLoop(), u.ready = true, Ke(o.ready) && r.on("ready", o.ready);
            for(var y = 0; y < i.length; y++){
                var p = i[y];
                r.on("ready", p);
            }
            n && (n.readies = []), r.emit("ready");
        }, o.done);
    });
}, "Core"), mn = Pa.prototype;
he(mn, {
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
        if (e == null) return Ue;
        var r = this._private.container.ownerDocument;
        return r === void 0 || r == null ? Ue : r.defaultView || Ue;
    }, "window"),
    mount: /*#__PURE__*/ m$1(function(e) {
        if (e != null) {
            var r = this, a = r._private, n = a.options;
            return !fn(e) && fn(e[0]) && (e = e[0]), r.stopAnimationLoop(), r.destroyRenderer(), a.container = e, a.styleEnabled = true, r.invalidateSize(), r.initRenderer(/*#__PURE__*/ he({}, n, n.renderer, {
                name: n.renderer.name === "null" ? "canvas" : n.renderer.name
            })), r.startAnimationLoop(), r.style(n.style), r.emit("mount"), r;
        }
    }, "mount"),
    unmount: /*#__PURE__*/ m$1(function() {
        var e = this;
        return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
            name: "null"
        }), e.emit("unmount"), e;
    }, "unmount"),
    options: /*#__PURE__*/ m$1(function() {
        return zt(this._private.options);
    }, "options"),
    json: /*#__PURE__*/ m$1(function(e) {
        var r = this, a = r._private, n = /*#__PURE__*/ r.mutableElements(), i = /*#__PURE__*/ m$1(function(x) {
            return r.getElementById(/*#__PURE__*/ x.id());
        }, "getFreshRef");
        if (Pe(e)) {
            if (r.startBatch(), e.elements) {
                var s = {}, o = /*#__PURE__*/ m$1(function(x, S) {
                    for(var T = [], E = [], D = 0; D < x.length; D++){
                        var C = x[D];
                        if (!C.data.id) {
                            Re("cy.json() cannot handle elements without an ID attribute");
                            continue;
                        }
                        var B = "" + C.data.id, A = /*#__PURE__*/ r.getElementById(B);
                        s[B] = true, A.length !== 0 ? E.push({
                            ele: A,
                            json: C
                        }) : (S && (C.group = S), T.push(C));
                    }
                    r.add(T);
                    for(var P = 0; P < E.length; P++){
                        var M = E[P], R = M.ele, I = M.json;
                        R.json(I);
                    }
                }, "updateEles");
                if (Oe(e.elements)) o(e.elements);
                else for(var l = [
                    "nodes",
                    "edges"
                ], u = 0; u < l.length; u++){
                    var f = l[u], c = e.elements[f];
                    Oe(c) && o(c, f);
                }
                var d = /*#__PURE__*/ r.collection();
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
            e.style && r.style(e.style), e.zoom != null && e.zoom !== a.zoom && r.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && r.pan(e.pan), e.data && r.data(e.data);
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
                e[m] != null && r[m](e[m]);
            }
            return r.endBatch(), this;
        } else {
            var y = !!e, p = {};
            y ? p.elements = /*#__PURE__*/ this.elements().map(function(w) {
                return w.json();
            }) : (p.elements = {}, n.forEach(function(w) {
                var x = /*#__PURE__*/ w.group();
                p.elements[x] || (p.elements[x] = []), p.elements[x].push(/*#__PURE__*/ w.json());
            })), this._private.styleEnabled && (p.style = /*#__PURE__*/ r.style().json()), p.data = /*#__PURE__*/ zt(/*#__PURE__*/ r.data());
            var b1 = a.options;
            return p.zoomingEnabled = a.zoomingEnabled, p.userZoomingEnabled = a.userZoomingEnabled, p.zoom = a.zoom, p.minZoom = a.minZoom, p.maxZoom = a.maxZoom, p.panningEnabled = a.panningEnabled, p.userPanningEnabled = a.userPanningEnabled, p.pan = /*#__PURE__*/ zt(a.pan), p.boxSelectionEnabled = a.boxSelectionEnabled, p.renderer = /*#__PURE__*/ zt(b1.renderer), p.hideEdgesOnViewport = b1.hideEdgesOnViewport, p.textureOnViewport = b1.textureOnViewport, p.wheelSensitivity = b1.wheelSensitivity, p.motionBlur = b1.motionBlur, p.multiClickDebounceTime = b1.multiClickDebounceTime, p;
        }
    }, "json")
});
mn.$id = mn.getElementById;
[
    mg,
    Tg,
    Eu,
    fi,
    on,
    Sg,
    ci,
    un,
    Pg,
    Tr,
    ka
].forEach(function(t) {
    he(mn, t);
});
var Ag = {
    fit: true,
    directed: false,
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
    animateFilter: /*#__PURE__*/ m$1(function(e, r) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, r) {
        return r;
    }, "transform")
}, Rg = {
    maximal: false,
    acyclic: false
}, Ar = /*#__PURE__*/ m$1(function(e) {
    return e.scratch("breadthfirst");
}, "getInfo"), Gs = /*#__PURE__*/ m$1(function(e, r) {
    return e.scratch("breadthfirst", r);
}, "setInfo");
function Tu(t) {
    this.options = /*#__PURE__*/ he({}, Ag, Rg, t);
}
m$1(Tu, "BreadthFirstLayout");
Tu.prototype.run = function() {
    var t = this.options, e = t.cy, r = t.eles, a = /*#__PURE__*/ r.nodes().filter(function(ve) {
        return ve.isChildless();
    }), n = r, i = t.directed, s = t.acyclic || t.maximal || t.maximalAdjustments > 0, o = !!t.boundingBox, l = /*#__PURE__*/ e.extent(), u = /*#__PURE__*/ yt(o ? t.boundingBox : {
        x1: l.x1,
        y1: l.y1,
        w: l.w,
        h: l.h
    }), f;
    if (Et(t.roots)) f = t.roots;
    else if (Oe(t.roots)) {
        for(var c = [], d = 0; d < t.roots.length; d++){
            var g = t.roots[d], h = /*#__PURE__*/ e.getElementById(g);
            c.push(h);
        }
        f = /*#__PURE__*/ e.collection(c);
    } else if (ce(t.roots)) f = /*#__PURE__*/ e.$(t.roots);
    else if (i) f = /*#__PURE__*/ a.roots();
    else {
        var m = /*#__PURE__*/ r.components();
        f = /*#__PURE__*/ e.collection();
        for(var y = /*#__PURE__*/ m$1(function(ue) {
            var ye = m[ue], me = /*#__PURE__*/ ye.maxDegree(false), ge = /*#__PURE__*/ ye.filter(function(be) {
                return be.degree(false) === me;
            });
            f = /*#__PURE__*/ f.add(ge);
        }, "_loop"), p = 0; p < m.length; p++)y(p);
    }
    var b1 = [], w = {}, x = /*#__PURE__*/ m$1(function(ue, ye) {
        b1[ye] == null && (b1[ye] = []);
        var me = b1[ye].length;
        b1[ye].push(ue), Gs(ue, {
            index: me,
            depth: ye
        });
    }, "addToDepth"), S = /*#__PURE__*/ m$1(function(ue, ye) {
        var me = /*#__PURE__*/ Ar(ue), ge = me.depth, be = me.index;
        b1[ge][be] = null, ue.isChildless() && x(ue, ye);
    }, "changeDepth");
    n.bfs({
        roots: f,
        directed: t.directed,
        visit: /*#__PURE__*/ m$1(function(ue, ye, me, ge, be) {
            var Te = ue[0], De = /*#__PURE__*/ Te.id();
            Te.isChildless() && x(Te, be), w[De] = true;
        }, "visit")
    });
    for(var T = [], E = 0; E < a.length; E++){
        var D = a[E];
        w[D.id()] || T.push(D);
    }
    var C = /*#__PURE__*/ m$1(function(ue) {
        for(var ye = b1[ue], me = 0; me < ye.length; me++){
            var ge = ye[me];
            if (ge == null) {
                ye.splice(me, 1), me--;
                continue;
            }
            Gs(ge, {
                depth: ue,
                index: me
            });
        }
    }, "assignDepthsAt"), B = /*#__PURE__*/ m$1(function(ue, ye) {
        for(var me = /*#__PURE__*/ Ar(ue), ge = /*#__PURE__*/ ue.incomers().filter(function(X) {
            return X.isNode() && r.has(X);
        }), be = -1, Te = /*#__PURE__*/ ue.id(), De = 0; De < ge.length; De++){
            var j = ge[De], k = /*#__PURE__*/ Ar(j);
            be = /*#__PURE__*/ Math.max(be, k.depth);
        }
        if (me.depth <= be) {
            if (!t.acyclic && ye[Te]) return null;
            var F = be + 1;
            return S(ue, F), ye[Te] = F, true;
        }
        return false;
    }, "adjustMaximally");
    if (i && s) {
        var A = [], P = {}, M = /*#__PURE__*/ m$1(function(ue) {
            return A.push(ue);
        }, "enqueue"), R = /*#__PURE__*/ m$1(function() {
            return A.shift();
        }, "dequeue");
        for(a.forEach(function(ve) {
            return A.push(ve);
        }); A.length > 0;){
            var I = /*#__PURE__*/ R(), L = /*#__PURE__*/ B(I, P);
            if (L) I.outgoers().filter(function(ve) {
                return ve.isNode() && r.has(ve);
            }).forEach(M);
            else if (L === null) {
                Re("Detected double maximal shift for node `" + I.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
                break;
            }
        }
    }
    var O = 0;
    if (t.avoidOverlap) for(var N = 0; N < a.length; N++){
        var $ = a[N], H = /*#__PURE__*/ $.layoutDimensions(t), q = H.w, K = H.h;
        O = /*#__PURE__*/ Math.max(O, q, K);
    }
    var Y = {}, Z = /*#__PURE__*/ m$1(function(ue) {
        if (Y[ue.id()]) return Y[ue.id()];
        for(var ye = Ar(ue).depth, me = /*#__PURE__*/ ue.neighborhood(), ge = 0, be = 0, Te = 0; Te < me.length; Te++){
            var De = me[Te];
            if (!(De.isEdge() || De.isParent() || !a.has(De))) {
                var j = /*#__PURE__*/ Ar(De);
                if (j != null) {
                    var k = j.index, F = j.depth;
                    if (!(k == null || F == null)) {
                        var X = b1[F].length;
                        F < ye && (ge += k / X, be++);
                    }
                }
            }
        }
        return be = /*#__PURE__*/ Math.max(1, be), ge = ge / be, be === 0 && (ge = 0), Y[ue.id()] = ge, ge;
    }, "getWeightedPercent"), J = /*#__PURE__*/ m$1(function(ue, ye) {
        var me = /*#__PURE__*/ Z(ue), ge = /*#__PURE__*/ Z(ye), be = me - ge;
        return be === 0 ? Eo(/*#__PURE__*/ ue.id(), /*#__PURE__*/ ye.id()) : be;
    }, "sortFn");
    t.depthSort !== void 0 && (J = t.depthSort);
    for(var Q = b1.length, ee = 0; ee < Q; ee++)b1[ee].sort(J), C(ee);
    for(var re = [], W = 0; W < T.length; W++)re.push(T[W]);
    var z = /*#__PURE__*/ m$1(function() {
        for(var ue = 0; ue < Q; ue++)C(ue);
    }, "assignDepths");
    re.length && (b1.unshift(re), Q = b1.length, z());
    for(var U = 0, te = 0; te < Q; te++)U = /*#__PURE__*/ Math.max(b1[te].length, U);
    var se = {
        x: u.x1 + u.w / 2,
        y: u.y1 + u.h / 2
    }, le = /*#__PURE__*/ a.reduce(function(ve, ue) {
        return function(ye) {
            return {
                w: ve.w === -1 ? ye.w : (ve.w + ye.w) / 2,
                h: ve.h === -1 ? ye.h : (ve.h + ye.h) / 2
            };
        }(/*#__PURE__*/ ue.boundingBox({
            includeLabels: t.nodeDimensionsIncludeLabels
        }));
    }, {
        w: -1,
        h: -1
    }), Se = /*#__PURE__*/ Math.max(Q === 1 ? 0 : o ? (u.h - t.padding * 2 - le.h) / (Q - 1) : (u.h - t.padding * 2 - le.h) / (Q + 1), O), Me = /*#__PURE__*/ b1.reduce(function(ve, ue) {
        return Math.max(ve, ue.length);
    }, 0), Le = /*#__PURE__*/ m$1(function(ue) {
        var ye = /*#__PURE__*/ Ar(ue), me = ye.depth, ge = ye.index;
        if (t.circle) {
            var be = /*#__PURE__*/ Math.min(u.w / 2 / Q, u.h / 2 / Q);
            be = /*#__PURE__*/ Math.max(be, O);
            var Te = be * me + be - (Q > 0 && b1[0].length <= 3 ? be / 2 : 0), De = 2 * Math.PI / b1[me].length * ge;
            return me === 0 && b1[0].length === 1 && (Te = 1), {
                x: se.x + Te * Math.cos(De),
                y: se.y + Te * Math.sin(De)
            };
        } else {
            var j = b1[me].length, k = /*#__PURE__*/ Math.max(j === 1 ? 0 : o ? (u.w - t.padding * 2 - le.w) / ((t.grid ? Me : j) - 1) : (u.w - t.padding * 2 - le.w) / ((t.grid ? Me : j) + 1), O), F = {
                x: se.x + (ge + 1 - (j + 1) / 2) * k,
                y: se.y + (me + 1 - (Q + 1) / 2) * Se
            };
            return F;
        }
    }, "getPosition");
    return r.nodes().layoutPositions(this, t, Le), this;
};
var Mg = {
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
    animateFilter: /*#__PURE__*/ m$1(function(e, r) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, r) {
        return r;
    }, "transform")
};
function Cu(t) {
    this.options = /*#__PURE__*/ he({}, Mg, t);
}
m$1(Cu, "CircleLayout");
Cu.prototype.run = function() {
    var t = this.options, e = t, r = t.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = /*#__PURE__*/ a.nodes().not(":parent");
    e.sort && (i = /*#__PURE__*/ i.sort(e.sort));
    for(var s = /*#__PURE__*/ yt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: /*#__PURE__*/ r.width(),
        h: /*#__PURE__*/ r.height()
    }), o = {
        x: s.x1 + s.w / 2,
        y: s.y1 + s.h / 2
    }, l = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, u = l / Math.max(1, i.length - 1), f, c = 0, d = 0; d < i.length; d++){
        var g = i[d], h = /*#__PURE__*/ g.layoutDimensions(e), m = h.w, y = h.h;
        c = /*#__PURE__*/ Math.max(c, m, y);
    }
    if (ae(e.radius) ? f = e.radius : i.length <= 1 ? f = 0 : f = Math.min(s.h, s.w) / 2 - c, i.length > 1 && e.avoidOverlap) {
        c *= 1.75;
        var p = Math.cos(u) - Math.cos(0), b1 = Math.sin(u) - Math.sin(0), w = /*#__PURE__*/ Math.sqrt(c * c / (p * p + b1 * b1));
        f = /*#__PURE__*/ Math.max(w, f);
    }
    var x = /*#__PURE__*/ m$1(function(T, E) {
        var D = e.startAngle + E * u * (n ? 1 : -1), C = f * Math.cos(D), B = f * Math.sin(D), A = {
            x: o.x + C,
            y: o.y + B
        };
        return A;
    }, "getPos");
    return a.nodes().layoutPositions(this, e, x), this;
};
var Lg = {
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
    animateFilter: /*#__PURE__*/ m$1(function(e, r) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, r) {
        return r;
    }, "transform")
};
function Su(t) {
    this.options = /*#__PURE__*/ he({}, Lg, t);
}
m$1(Su, "ConcentricLayout");
Su.prototype.run = function() {
    for(var t = this.options, e = t, r = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = t.cy, n = e.eles, i = /*#__PURE__*/ n.nodes().not(":parent"), s = /*#__PURE__*/ yt(e.boundingBox ? e.boundingBox : {
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
    l.sort(function(le, Se) {
        return Se.value - le.value;
    });
    for(var y = /*#__PURE__*/ e.levelWidth(i), p = [
        []
    ], b1 = p[0], w = 0; w < l.length; w++){
        var x = l[w];
        if (b1.length > 0) {
            var S = /*#__PURE__*/ Math.abs(b1[0].value - x.value);
            S >= y && (b1 = [], p.push(b1));
        }
        b1.push(x);
    }
    var T = u + e.minNodeSpacing;
    if (!e.avoidOverlap) {
        var E = p.length > 0 && p[0].length > 1, D = Math.min(s.w, s.h) / 2 - T, C = D / (p.length + E ? 1 : 0);
        T = /*#__PURE__*/ Math.min(T, C);
    }
    for(var B = 0, A = 0; A < p.length; A++){
        var P = p[A], M = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / P.length : e.sweep, R = P.dTheta = M / Math.max(1, P.length - 1);
        if (P.length > 1 && e.avoidOverlap) {
            var I = Math.cos(R) - Math.cos(0), L = Math.sin(R) - Math.sin(0), O = /*#__PURE__*/ Math.sqrt(T * T / (I * I + L * L));
            B = /*#__PURE__*/ Math.max(O, B);
        }
        P.r = B, B += T;
    }
    if (e.equidistant) {
        for(var N = 0, $ = 0, H = 0; H < p.length; H++){
            var q = p[H], K = q.r - $;
            N = /*#__PURE__*/ Math.max(N, K);
        }
        $ = 0;
        for(var Y = 0; Y < p.length; Y++){
            var Z = p[Y];
            Y === 0 && ($ = Z.r), Z.r = $, $ += N;
        }
    }
    for(var J = {}, Q = 0; Q < p.length; Q++)for(var ee = p[Q], re = ee.dTheta, W = ee.r, z = 0; z < ee.length; z++){
        var U = ee[z], te = e.startAngle + (r ? 1 : -1) * re * z, se = {
            x: o.x + W * Math.cos(te),
            y: o.y + W * Math.sin(te)
        };
        J[U.node.id()] = se;
    }
    return n.nodes().layoutPositions(this, e, function(le) {
        var Se = /*#__PURE__*/ le.id();
        return J[Se];
    }), this;
};
var Qn, Ig = {
    ready: /*#__PURE__*/ m$1(function() {}, "ready"),
    stop: /*#__PURE__*/ m$1(function() {}, "stop"),
    animate: true,
    animationEasing: void 0,
    animationDuration: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, r) {
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
function zn(t) {
    this.options = /*#__PURE__*/ he({}, Ig, t), this.options.layout = this;
    var e = /*#__PURE__*/ this.options.eles.nodes(), r = /*#__PURE__*/ this.options.eles.edges(), a = /*#__PURE__*/ r.filter(function(n) {
        var i = /*#__PURE__*/ n.source().data("id"), s = /*#__PURE__*/ n.target().data("id"), o = /*#__PURE__*/ e.some(function(u) {
            return u.data("id") === i;
        }), l = /*#__PURE__*/ e.some(function(u) {
            return u.data("id") === s;
        });
        return !o || !l;
    });
    this.options.eles = /*#__PURE__*/ this.options.eles.not(a);
}
m$1(zn, "CoseLayout");
zn.prototype.run = function() {
    var t = this.options, e = t.cy, r = this;
    r.stopped = false, (t.animate === true || t.animate === false) && r.emit({
        type: "layoutstart",
        layout: r
    }), t.debug === true ? Qn = true : Qn = false;
    var a = /*#__PURE__*/ Og(e, r, t);
    Qn && Fg(a), t.randomize && Vg(a);
    var n = /*#__PURE__*/ Ht(), i = /*#__PURE__*/ m$1(function() {
        qg(a, e, t), t.fit === true && e.fit(t.padding);
    }, "refresh"), s = /*#__PURE__*/ m$1(function(d) {
        return !(r.stopped || d >= t.numIter || ($g(a, t), a.temperature = a.temperature * t.coolingFactor, a.temperature < t.minTemp));
    }, "mainLoop"), o = /*#__PURE__*/ m$1(function() {
        if (t.animate === true || t.animate === false) i(), r.one("layoutstop", t.stop), r.emit({
            type: "layoutstop",
            layout: r
        });
        else {
            var d = /*#__PURE__*/ t.eles.nodes(), g = /*#__PURE__*/ Du(a, t, d);
            d.layoutPositions(r, t, g);
        }
    }, "done"), l = 0, u = true;
    if (t.animate === true) {
        var f = /*#__PURE__*/ m$1(function c() {
            for(var d = 0; u && d < t.refresh;)u = /*#__PURE__*/ s(l), l++, d++;
            if (!u) Hs(a, t), o();
            else {
                var g = /*#__PURE__*/ Ht();
                g - n >= t.animationThreshold && i(), cn(c);
            }
        }, "frame");
        f();
    } else {
        for(; u;)u = /*#__PURE__*/ s(l), l++;
        Hs(a, t), o();
    }
    return this;
};
zn.prototype.stop = function() {
    return this.stopped = true, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
zn.prototype.destroy = function() {
    return this.thread && this.thread.stop(), this;
};
var Og = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = /*#__PURE__*/ a.eles.edges(), i = /*#__PURE__*/ a.eles.nodes(), s = /*#__PURE__*/ yt(a.boundingBox ? a.boundingBox : {
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
        var h = i[f], m = /*#__PURE__*/ h.layoutDimensions(a), y = {};
        y.isLocked = /*#__PURE__*/ h.locked(), y.id = /*#__PURE__*/ h.data("id"), y.parentId = /*#__PURE__*/ h.data("parent"), y.cmptId = u[h.id()], y.children = [], y.positionX = /*#__PURE__*/ h.position("x"), y.positionY = /*#__PURE__*/ h.position("y"), y.offsetX = 0, y.offsetY = 0, y.height = m.w, y.width = m.h, y.maxX = y.positionX + y.width / 2, y.minX = y.positionX - y.width / 2, y.maxY = y.positionY + y.height / 2, y.minY = y.positionY - y.height / 2, y.padLeft = /*#__PURE__*/ parseFloat(/*#__PURE__*/ h.style("padding")), y.padRight = /*#__PURE__*/ parseFloat(/*#__PURE__*/ h.style("padding")), y.padTop = /*#__PURE__*/ parseFloat(/*#__PURE__*/ h.style("padding")), y.padBottom = /*#__PURE__*/ parseFloat(/*#__PURE__*/ h.style("padding")), y.nodeRepulsion = Ke(a.nodeRepulsion) ? a.nodeRepulsion(h) : a.nodeRepulsion, o.layoutNodes.push(y), o.idToIndex[y.id] = f;
    }
    for(var p = [], b1 = 0, w = -1, x = [], f = 0; f < o.nodeSize; f++){
        var h = o.layoutNodes[f], S = h.parentId;
        S != null ? o.layoutNodes[o.idToIndex[S]].children.push(h.id) : (p[++w] = h.id, x.push(h.id));
    }
    for(o.graphSet.push(x); b1 <= w;){
        var T = p[b1++], E = o.idToIndex[T], g = o.layoutNodes[E], D = g.children;
        if (D.length > 0) {
            o.graphSet.push(D);
            for(var f = 0; f < D.length; f++)p[++w] = D[f];
        }
    }
    for(var f = 0; f < o.graphSet.length; f++)for(var C = o.graphSet[f], d = 0; d < C.length; d++){
        var B = o.idToIndex[C[d]];
        o.indexToGraph[B] = f;
    }
    for(var f = 0; f < o.edgeSize; f++){
        var A = n[f], P = {};
        P.id = /*#__PURE__*/ A.data("id"), P.sourceId = /*#__PURE__*/ A.data("source"), P.targetId = /*#__PURE__*/ A.data("target");
        var M = Ke(a.idealEdgeLength) ? a.idealEdgeLength(A) : a.idealEdgeLength, R = Ke(a.edgeElasticity) ? a.edgeElasticity(A) : a.edgeElasticity, I = o.idToIndex[P.sourceId], L = o.idToIndex[P.targetId], O = o.indexToGraph[I], N = o.indexToGraph[L];
        if (O != N) {
            for(var $ = /*#__PURE__*/ Ng(P.sourceId, P.targetId, o), H = o.graphSet[$], q = 0, y = o.layoutNodes[I]; H.indexOf(y.id) === -1;)y = o.layoutNodes[o.idToIndex[y.parentId]], q++;
            for(y = o.layoutNodes[L]; H.indexOf(y.id) === -1;)y = o.layoutNodes[o.idToIndex[y.parentId]], q++;
            M *= q * a.nestingFactor;
        }
        P.idealLength = M, P.elasticity = R, o.layoutEdges.push(P);
    }
    return o;
}, "createLayoutInfo"), Ng = /*#__PURE__*/ m$1(function(e, r, a) {
    var n = /*#__PURE__*/ zg(e, r, 0, a);
    return 2 > n.count ? 0 : n.graph;
}, "findLCA"), zg = /*#__PURE__*/ m$1(function t(e, r, a, n) {
    var i = n.graphSet[a];
    if (-1 < i.indexOf(e) && -1 < i.indexOf(r)) return {
        count: 2,
        graph: a
    };
    for(var s = 0, o = 0; o < i.length; o++){
        var l = i[o], u = n.idToIndex[l], f = n.layoutNodes[u].children;
        if (f.length !== 0) {
            var c = n.indexToGraph[n.idToIndex[f[0]]], d = /*#__PURE__*/ t(e, r, c, n);
            if (d.count !== 0) if (d.count === 1) {
                if (s++, s === 2) break;
            } else return d;
        }
    }
    return {
        count: s,
        graph: a
    };
}, "findLCA_aux"), Fg, Vg = /*#__PURE__*/ m$1(function(e, r) {
    for(var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++){
        var s = e.layoutNodes[i];
        s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
    }
}, "randomizePositions"), Du = /*#__PURE__*/ m$1(function(e, r, a) {
    var n = e.boundingBox, i = {
        x1: 1 / 0,
        x2: -1 / 0,
        y1: 1 / 0,
        y2: -1 / 0
    };
    return r.boundingBox && (a.forEach(function(s) {
        var o = e.layoutNodes[e.idToIndex[s.data("id")]];
        i.x1 = /*#__PURE__*/ Math.min(i.x1, o.positionX), i.x2 = /*#__PURE__*/ Math.max(i.x2, o.positionX), i.y1 = /*#__PURE__*/ Math.min(i.y1, o.positionY), i.y2 = /*#__PURE__*/ Math.max(i.y2, o.positionY);
    }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
        var l = e.layoutNodes[e.idToIndex[s.data("id")]];
        if (r.boundingBox) {
            var u = (l.positionX - i.x1) / i.w, f = (l.positionY - i.y1) / i.h;
            return {
                x: n.x1 + u * n.w,
                y: n.y1 + f * n.h
            };
        } else return {
            x: l.positionX,
            y: l.positionY
        };
    };
}, "getScaleInBoundsFn"), qg = /*#__PURE__*/ m$1(function(e, r, a) {
    var n = a.layout, i = /*#__PURE__*/ a.eles.nodes(), s = /*#__PURE__*/ Du(e, a, i);
    i.positions(s), e.ready !== true && (e.ready = true, n.one("layoutready", a.ready), n.emit({
        type: "layoutready",
        layout: this
    }));
}, "refreshPositions"), $g = /*#__PURE__*/ m$1(function(e, r, a) {
    Kg(e, r), Hg(e), Ug(e, r), Xg(e), Yg(e);
}, "step"), Kg = /*#__PURE__*/ m$1(function(e, r) {
    for(var a = 0; a < e.graphSet.length; a++)for(var n = e.graphSet[a], i = n.length, s = 0; s < i; s++)for(var o = e.layoutNodes[e.idToIndex[n[s]]], l = s + 1; l < i; l++){
        var u = e.layoutNodes[e.idToIndex[n[l]]];
        Gg(o, u, e, r);
    }
}, "calculateNodeForces"), Ws = /*#__PURE__*/ m$1(function(e) {
    return -e + 2 * e * Math.random();
}, "randomDistance"), Gg = /*#__PURE__*/ m$1(function(e, r, a, n) {
    var i = e.cmptId, s = r.cmptId;
    if (!(i !== s && !a.isCompound)) {
        var o = r.positionX - e.positionX, l = r.positionY - e.positionY, u = 1;
        o === 0 && l === 0 && (o = /*#__PURE__*/ Ws(u), l = /*#__PURE__*/ Ws(u));
        var f = /*#__PURE__*/ Wg(e, r, o, l);
        if (f > 0) var c = n.nodeOverlap * f, d = /*#__PURE__*/ Math.sqrt(o * o + l * l), g = c * o / d, h = c * l / d;
        else var m = /*#__PURE__*/ bn(e, o, l), y = /*#__PURE__*/ bn(r, -1 * o, -1 * l), p = y.x - m.x, b1 = y.y - m.y, w = p * p + b1 * b1, d = /*#__PURE__*/ Math.sqrt(w), c = (e.nodeRepulsion + r.nodeRepulsion) / w, g = c * p / d, h = c * b1 / d;
        e.isLocked || (e.offsetX -= g, e.offsetY -= h), r.isLocked || (r.offsetX += g, r.offsetY += h);
    }
}, "nodeRepulsion"), Wg = /*#__PURE__*/ m$1(function(e, r, a, n) {
    if (a > 0) var i = e.maxX - r.minX;
    else var i = r.maxX - e.minX;
    if (n > 0) var s = e.maxY - r.minY;
    else var s = r.maxY - e.minY;
    return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
}, "nodesOverlap"), bn = /*#__PURE__*/ m$1(function(e, r, a) {
    var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, l = a / r, u = s / o, f = {};
    return r === 0 && 0 < a || r === 0 && 0 > a ? (f.x = n, f.y = i + s / 2, f) : 0 < r && -1 * u <= l && l <= u ? (f.x = n + o / 2, f.y = i + o * a / 2 / r, f) : 0 > r && -1 * u <= l && l <= u ? (f.x = n - o / 2, f.y = i - o * a / 2 / r, f) : 0 < a && (l <= -1 * u || l >= u) ? (f.x = n + s * r / 2 / a, f.y = i + s / 2, f) : (0 > a && (l <= -1 * u || l >= u) && (f.x = n - s * r / 2 / a, f.y = i - s / 2), f);
}, "findClippingPoint"), Hg = /*#__PURE__*/ m$1(function(e, r) {
    for(var a = 0; a < e.edgeSize; a++){
        var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], l = e.layoutNodes[o], u = l.positionX - s.positionX, f = l.positionY - s.positionY;
        if (!(u === 0 && f === 0)) {
            var c = /*#__PURE__*/ bn(s, u, f), d = /*#__PURE__*/ bn(l, -1 * u, -1 * f), g = d.x - c.x, h = d.y - c.y, m = /*#__PURE__*/ Math.sqrt(g * g + h * h), y = Math.pow(n.idealLength - m, 2) / n.elasticity;
            if (m !== 0) var p = y * g / m, b1 = y * h / m;
            else var p = 0, b1 = 0;
            s.isLocked || (s.offsetX += p, s.offsetY += b1), l.isLocked || (l.offsetX -= p, l.offsetY -= b1);
        }
    }
}, "calculateEdgeForces"), Ug = /*#__PURE__*/ m$1(function(e, r) {
    if (r.gravity !== 0) for(var a = 1, n = 0; n < e.graphSet.length; n++){
        var i = e.graphSet[n], s = i.length;
        if (n === 0) var o = e.clientHeight / 2, l = e.clientWidth / 2;
        else var u = e.layoutNodes[e.idToIndex[i[0]]], f = e.layoutNodes[e.idToIndex[u.parentId]], o = f.positionX, l = f.positionY;
        for(var c = 0; c < s; c++){
            var d = e.layoutNodes[e.idToIndex[i[c]]];
            if (!d.isLocked) {
                var g = o - d.positionX, h = l - d.positionY, m = /*#__PURE__*/ Math.sqrt(g * g + h * h);
                if (m > a) {
                    var y = r.gravity * g / m, p = r.gravity * h / m;
                    d.offsetX += y, d.offsetY += p;
                }
            }
        }
    }
}, "calculateGravityForces"), Xg = /*#__PURE__*/ m$1(function(e, r) {
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
}, "propagateForces"), Yg = /*#__PURE__*/ m$1(function(e, r) {
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
    }
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        if (!(0 < n.children.length || n.isLocked)) {
            var i = /*#__PURE__*/ _g(n.offsetX, n.offsetY, e.temperature);
            n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, Zg(n, e);
        }
    }
    for(var a = 0; a < e.nodeSize; a++){
        var n = e.layoutNodes[a];
        0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
    }
}, "updatePositions"), _g = /*#__PURE__*/ m$1(function(e, r, a) {
    var n = /*#__PURE__*/ Math.sqrt(e * e + r * r);
    if (n > a) var i = {
        x: a * e / n,
        y: a * r / n
    };
    else var i = {
        x: e,
        y: r
    };
    return i;
}, "limitForce"), Zg = /*#__PURE__*/ m$1(function t(e, r) {
    var a = e.parentId;
    if (a != null) {
        var n = r.layoutNodes[r.idToIndex[a]], i = false;
        if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = true), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = true), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = true), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = true), i) return t(n, r);
    }
}, "updateAncestryBoundaries"), Hs = /*#__PURE__*/ m$1(function(e, r) {
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
    for(var g = 0, h = 0, m = 0, y = 0, p = Math.sqrt(u) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++){
        var f = n[i];
        if (f) {
            for(var c = 0; c < f.length; c++){
                var d = f[c];
                d.isLocked || (d.positionX += g - f.x1, d.positionY += h - f.y1);
            }
            g += f.w + r.componentSpacing, m += f.w + r.componentSpacing, y = /*#__PURE__*/ Math.max(y, f.h), m > p && (h += y + r.componentSpacing, g = 0, m = 0, y = 0);
        }
    }
}, "separateComponents"), Qg = {
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
    animateFilter: /*#__PURE__*/ m$1(function(e, r) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, r) {
        return r;
    }, "transform")
};
function ku(t) {
    this.options = /*#__PURE__*/ he({}, Qg, t);
}
m$1(ku, "GridLayout");
ku.prototype.run = function() {
    var t = this.options, e = t, r = t.cy, a = e.eles, n = /*#__PURE__*/ a.nodes().not(":parent");
    e.sort && (n = /*#__PURE__*/ n.sort(e.sort));
    var i = /*#__PURE__*/ yt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: /*#__PURE__*/ r.width(),
        h: /*#__PURE__*/ r.height()
    });
    if (i.h === 0 || i.w === 0) a.nodes().layoutPositions(this, e, function(Y) {
        return {
            x: i.x1,
            y: i.y1
        };
    });
    else {
        var s = /*#__PURE__*/ n.size(), o = /*#__PURE__*/ Math.sqrt(s * i.h / i.w), l = /*#__PURE__*/ Math.round(o), u = /*#__PURE__*/ Math.round(i.w / i.h * o), f = /*#__PURE__*/ m$1(function(Z) {
            if (Z == null) return Math.min(l, u);
            var J = /*#__PURE__*/ Math.min(l, u);
            J == l ? l = Z : u = Z;
        }, "small"), c = /*#__PURE__*/ m$1(function(Z) {
            if (Z == null) return Math.max(l, u);
            var J = /*#__PURE__*/ Math.max(l, u);
            J == l ? l = Z : u = Z;
        }, "large"), d = e.rows, g = e.cols != null ? e.cols : e.columns;
        if (d != null && g != null) l = d, u = g;
        else if (d != null && g == null) l = d, u = /*#__PURE__*/ Math.ceil(s / l);
        else if (d == null && g != null) u = g, l = /*#__PURE__*/ Math.ceil(s / u);
        else if (u * l > s) {
            var h = /*#__PURE__*/ f(), m = /*#__PURE__*/ c();
            (h - 1) * m >= s ? f(h - 1) : (m - 1) * h >= s && c(m - 1);
        } else for(; u * l < s;){
            var y = /*#__PURE__*/ f(), p = /*#__PURE__*/ c();
            (p + 1) * y >= s ? c(p + 1) : f(y + 1);
        }
        var b1 = i.w / u, w = i.h / l;
        if (e.condense && (b1 = 0, w = 0), e.avoidOverlap) for(var x = 0; x < n.length; x++){
            var S = n[x], T = S._private.position;
            (T.x == null || T.y == null) && (T.x = 0, T.y = 0);
            var E = /*#__PURE__*/ S.layoutDimensions(e), D = e.avoidOverlapPadding, C = E.w + D, B = E.h + D;
            b1 = /*#__PURE__*/ Math.max(b1, C), w = /*#__PURE__*/ Math.max(w, B);
        }
        for(var A = {}, P = /*#__PURE__*/ m$1(function(Z, J) {
            return !!A["c-" + Z + "-" + J];
        }, "used"), M = /*#__PURE__*/ m$1(function(Z, J) {
            A["c-" + Z + "-" + J] = true;
        }, "use"), R = 0, I = 0, L = /*#__PURE__*/ m$1(function() {
            I++, I >= u && (I = 0, R++);
        }, "moveToNextCell"), O = {}, N = 0; N < n.length; N++){
            var $ = n[N], H = /*#__PURE__*/ e.position($);
            if (H && (H.row !== void 0 || H.col !== void 0)) {
                var q = {
                    row: H.row,
                    col: H.col
                };
                if (q.col === void 0) for(q.col = 0; P(q.row, q.col);)q.col++;
                else if (q.row === void 0) for(q.row = 0; P(q.row, q.col);)q.row++;
                O[$.id()] = q, M(q.row, q.col);
            }
        }
        var K = /*#__PURE__*/ m$1(function(Z, J) {
            var Q, ee;
            if (Z.locked() || Z.isParent()) return false;
            var re = O[Z.id()];
            if (re) Q = re.col * b1 + b1 / 2 + i.x1, ee = re.row * w + w / 2 + i.y1;
            else {
                for(; P(R, I);)L();
                Q = I * b1 + b1 / 2 + i.x1, ee = R * w + w / 2 + i.y1, M(R, I), L();
            }
            return {
                x: Q,
                y: ee
            };
        }, "getPos");
        n.layoutPositions(this, e, K);
    }
    return this;
};
var Jg = {
    ready: /*#__PURE__*/ m$1(function() {}, "ready"),
    stop: /*#__PURE__*/ m$1(function() {}, "stop")
};
function Vi(t) {
    this.options = /*#__PURE__*/ he({}, Jg, t);
}
m$1(Vi, "NullLayout");
Vi.prototype.run = function() {
    var t = this.options, e = t.eles, r = this;
    return t.cy, r.emit("layoutstart"), e.nodes().positions(function() {
        return {
            x: 0,
            y: 0
        };
    }), r.one("layoutready", t.ready), r.emit("layoutready"), r.one("layoutstop", t.stop), r.emit("layoutstop"), this;
};
Vi.prototype.stop = function() {
    return this;
};
var jg = {
    positions: void 0,
    zoom: void 0,
    pan: void 0,
    fit: true,
    padding: 30,
    spacingFactor: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, r) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, r) {
        return r;
    }, "transform")
};
function Pu(t) {
    this.options = /*#__PURE__*/ he({}, jg, t);
}
m$1(Pu, "PresetLayout");
Pu.prototype.run = function() {
    var t = this.options, e = t.eles, r = /*#__PURE__*/ e.nodes(), a = /*#__PURE__*/ Ke(t.positions);
    function n(i) {
        if (t.positions == null) return rf(/*#__PURE__*/ i.position());
        if (a) return t.positions(i);
        var s = t.positions[i._private.data.id];
        return s ?? null;
    }
    return m$1(n, "getPosition"), r.layoutPositions(this, t, function(i, s) {
        var o = /*#__PURE__*/ n(i);
        return i.locked() || o == null ? false : o;
    }), this;
};
var ep = {
    fit: true,
    padding: 30,
    boundingBox: void 0,
    animate: false,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: /*#__PURE__*/ m$1(function(e, r) {
        return true;
    }, "animateFilter"),
    ready: void 0,
    stop: void 0,
    transform: /*#__PURE__*/ m$1(function(e, r) {
        return r;
    }, "transform")
};
function Bu(t) {
    this.options = /*#__PURE__*/ he({}, ep, t);
}
m$1(Bu, "RandomLayout");
Bu.prototype.run = function() {
    var t = this.options, e = t.cy, r = t.eles, a = /*#__PURE__*/ yt(t.boundingBox ? t.boundingBox : {
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
    return r.nodes().layoutPositions(this, t, n), this;
};
var tp = [
    {
        name: "breadthfirst",
        impl: Tu
    },
    {
        name: "circle",
        impl: Cu
    },
    {
        name: "concentric",
        impl: Su
    },
    {
        name: "cose",
        impl: zn
    },
    {
        name: "grid",
        impl: ku
    },
    {
        name: "null",
        impl: Vi
    },
    {
        name: "preset",
        impl: Pu
    },
    {
        name: "random",
        impl: Bu
    }
];
function Au(t) {
    this.options = t, this.notifications = 0;
}
m$1(Au, "NullRenderer");
var Us = /*#__PURE__*/ m$1(function() {}, "noop"), Xs = /*#__PURE__*/ m$1(function() {
    throw new Error("A headless instance can not render images");
}, "throwImgErr");
Au.prototype = {
    recalculateRenderedStyle: Us,
    notify: /*#__PURE__*/ m$1(function() {
        this.notifications++;
    }, "notify"),
    init: Us,
    isHeadless: /*#__PURE__*/ m$1(function() {
        return true;
    }, "isHeadless"),
    png: Xs,
    jpg: Xs
};
var qi = {};
qi.arrowShapeWidth = .3;
qi.registerArrowShapes = function() {
    var t = this.arrowShapes = {}, e = this, r = /*#__PURE__*/ m$1(function(u, f, c, d, g, h, m) {
        var y = g.x - c / 2 - m, p = g.x + c / 2 + m, b1 = g.y - c / 2 - m, w = g.y + c / 2 + m, x = y <= u && u <= p && b1 <= f && f <= w;
        return x;
    }, "bbCollide"), a = /*#__PURE__*/ m$1(function(u, f, c, d, g) {
        var h = u * Math.cos(d) - f * Math.sin(d), m = u * Math.sin(d) + f * Math.cos(d), y = h * c, p = m * c, b1 = y + g.x, w = p + g.y;
        return {
            x: b1,
            y: w
        };
    }, "transform"), n = /*#__PURE__*/ m$1(function(u, f, c, d) {
        for(var g = [], h = 0; h < u.length; h += 2){
            var m = u[h], y = u[h + 1];
            g.push(/*#__PURE__*/ a(m, y, f, c, d));
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
        ce(f) && (f = t[f]), t[u] = /*#__PURE__*/ he({
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
            collide: /*#__PURE__*/ m$1(function(d, g, h, m, y, p) {
                var b1 = /*#__PURE__*/ i(/*#__PURE__*/ n(this.points, h + 2 * p, m, y)), w = /*#__PURE__*/ pt(d, g, b1);
                return w;
            }, "collide"),
            roughCollide: r,
            draw: /*#__PURE__*/ m$1(function(d, g, h, m) {
                var y = /*#__PURE__*/ n(this.points, g, h, m);
                e.arrowShapeImpl("polygon")(d, y);
            }, "draw"),
            spacing: /*#__PURE__*/ m$1(function(d) {
                return 0;
            }, "spacing"),
            gap: s
        }, f);
    }, "defineArrowShape");
    o("none", {
        collide: dn,
        roughCollide: dn,
        draw: Si,
        spacing: as,
        gap: as
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
        points: t.triangle.points,
        controlPoint: [
            0,
            -0.15
        ],
        roughCollide: r,
        draw: /*#__PURE__*/ m$1(function(u, f, c, d, g) {
            var h = /*#__PURE__*/ n(this.points, f, c, d), m = this.controlPoint, y = /*#__PURE__*/ a(m[0], m[1], f, c, d);
            e.arrowShapeImpl(this.name)(u, h, y);
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
            var y = /*#__PURE__*/ i(/*#__PURE__*/ n(this.points, c + 2 * m, d, g)), p = /*#__PURE__*/ i(/*#__PURE__*/ n(this.pointsTee, c + 2 * m, d, g)), b1 = pt(u, f, y) || pt(u, f, p);
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
            var y = g, p = Math.pow(y.x - u, 2) + Math.pow(y.y - f, 2) <= Math.pow((c + 2 * m) * this.radius, 2), b1 = /*#__PURE__*/ i(/*#__PURE__*/ n(this.points, c + 2 * m, d, g));
            return pt(u, f, b1) || p;
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
            var y = /*#__PURE__*/ i(/*#__PURE__*/ n(this.points, c + 2 * m, d, g)), p = /*#__PURE__*/ i(/*#__PURE__*/ n(/*#__PURE__*/ this.crossLinePts(c, h), c + 2 * m, d, g)), b1 = pt(u, f, y) || pt(u, f, p);
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
            var y = g, p = Math.pow(y.x - u, 2) + Math.pow(y.y - f, 2) <= Math.pow((c + 2 * m) * this.radius, 2);
            return p;
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
var Sr = {};
Sr.projectIntoViewport = function(t, e) {
    var r = this.cy, a = /*#__PURE__*/ this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = /*#__PURE__*/ r.pan(), l = /*#__PURE__*/ r.zoom(), u = ((t - n) / s - o.x) / l, f = ((e - i) / s - o.y) / l;
    return [
        u,
        f
    ];
};
Sr.findContainerClientCoords = function() {
    if (this.containerBB) return this.containerBB;
    var t = this.container, e = /*#__PURE__*/ t.getBoundingClientRect(), r = /*#__PURE__*/ this.cy.window().getComputedStyle(t), a = /*#__PURE__*/ m$1(function(p) {
        return parseFloat(/*#__PURE__*/ r.getPropertyValue(p));
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
    }, s = t.clientWidth, o = t.clientHeight, l = n.left + n.right, u = n.top + n.bottom, f = i.left + i.right, c = e.width / (s + f), d = s - l, g = o - u, h = e.left + n.left + i.left, m = e.top + n.top + i.top;
    return this.containerBB = [
        h,
        m,
        d,
        g,
        c
    ];
};
Sr.invalidateContainerClientCoordsCache = function() {
    this.containerBB = null;
};
Sr.findNearestElement = function(t, e, r, a) {
    return this.findNearestElements(t, e, r, a)[0];
};
Sr.findNearestElements = function(t, e, r, a) {
    var n = this, i = this, s = /*#__PURE__*/ i.getCachedZSortedEles(), o = [], l = /*#__PURE__*/ i.cy.zoom(), u = /*#__PURE__*/ i.cy.hasCompoundNodes(), f = (a ? 24 : 8) / l, c = (a ? 8 : 2) / l, d = (a ? 8 : 2) / l, g = 1 / 0, h, m;
    r && (s = s.interactive);
    function y(E, D) {
        if (E.isNode()) {
            if (m) return;
            m = E, o.push(E);
        }
        if (E.isEdge() && (D == null || D < g)) if (h) {
            if (h.pstyle("z-compound-depth").value === E.pstyle("z-compound-depth").value && h.pstyle("z-compound-depth").value === E.pstyle("z-compound-depth").value) {
                for(var C = 0; C < o.length; C++)if (o[C].isEdge()) {
                    o[C] = E, h = E, g = D ?? g;
                    break;
                }
            }
        } else o.push(E), h = E, g = D ?? g;
    }
    m$1(y, "addEle");
    function p(E) {
        var D = E.outerWidth() + 2 * c, C = E.outerHeight() + 2 * c, B = D / 2, A = C / 2, P = /*#__PURE__*/ E.position(), M = E.pstyle("corner-radius").value === "auto" ? "auto" : E.pstyle("corner-radius").pfValue, R = E._private.rscratch;
        if (P.x - B <= t && t <= P.x + B && P.y - A <= e && e <= P.y + A) {
            var I = i.nodeShapes[n.getNodeShape(E)];
            if (I.checkPoint(t, e, 0, D, C, P.x, P.y, M, R)) return y(E, 0), true;
        }
    }
    m$1(p, "checkNode");
    function b1(E) {
        var D = E._private, C = D.rscratch, B = E.pstyle("width").pfValue, A = E.pstyle("arrow-scale").value, P = B / 2 + f, M = P * P, R = P * 2, N = D.source, $ = D.target, I;
        if (C.edgeType === "segments" || C.edgeType === "straight" || C.edgeType === "haystack") {
            for(var L = C.allpts, O = 0; O + 3 < L.length; O += 2)if (pf(t, e, L[O], L[O + 1], L[O + 2], L[O + 3], R) && M > (I = /*#__PURE__*/ xf(t, e, L[O], L[O + 1], L[O + 2], L[O + 3]))) return y(E, I), true;
        } else if (C.edgeType === "bezier" || C.edgeType === "multibezier" || C.edgeType === "self" || C.edgeType === "compound") {
            for(var L = C.allpts, O = 0; O + 5 < C.allpts.length; O += 4)if (yf(t, e, L[O], L[O + 1], L[O + 2], L[O + 3], L[O + 4], L[O + 5], R) && M > (I = /*#__PURE__*/ wf(t, e, L[O], L[O + 1], L[O + 2], L[O + 3], L[O + 4], L[O + 5]))) return y(E, I), true;
        }
        for(var N = N || D.source, $ = $ || D.target, H = /*#__PURE__*/ n.getArrowWidth(B, A), q = [
            {
                name: "source",
                x: C.arrowStartX,
                y: C.arrowStartY,
                angle: C.srcArrowAngle
            },
            {
                name: "target",
                x: C.arrowEndX,
                y: C.arrowEndY,
                angle: C.tgtArrowAngle
            },
            {
                name: "mid-source",
                x: C.midX,
                y: C.midY,
                angle: C.midsrcArrowAngle
            },
            {
                name: "mid-target",
                x: C.midX,
                y: C.midY,
                angle: C.midtgtArrowAngle
            }
        ], O = 0; O < q.length; O++){
            var K = q[O], Y = i.arrowShapes[E.pstyle(K.name + "-arrow-shape").value], Z = E.pstyle("width").pfValue;
            if (Y.roughCollide(t, e, H, K.angle, {
                x: K.x,
                y: K.y
            }, Z, f) && Y.collide(t, e, H, K.angle, {
                x: K.x,
                y: K.y
            }, Z, f)) return y(E), true;
        }
        u && o.length > 0 && (p(N), p($));
    }
    m$1(b1, "checkEdge");
    function w(E, D, C) {
        return At(E, D, C);
    }
    m$1(w, "preprop");
    function x(E, D) {
        var C = E._private, B = d, A;
        D ? A = D + "-" : A = "", E.boundingBox();
        var P = C.labelBounds[D || "main"], M = E.pstyle(A + "label").value, R = E.pstyle("text-events").strValue === "yes";
        if (!(!R || !M)) {
            var I = /*#__PURE__*/ w(C.rscratch, "labelX", D), L = /*#__PURE__*/ w(C.rscratch, "labelY", D), O = /*#__PURE__*/ w(C.rscratch, "labelAngle", D), N = E.pstyle(A + "text-margin-x").pfValue, $ = E.pstyle(A + "text-margin-y").pfValue, H = P.x1 - B - N, q = P.x2 + B - N, K = P.y1 - B - $, Y = P.y2 + B - $;
            if (O) {
                var Z = /*#__PURE__*/ Math.cos(O), J = /*#__PURE__*/ Math.sin(O), Q = /*#__PURE__*/ m$1(function(se, le) {
                    return se = se - I, le = le - L, {
                        x: se * Z - le * J + I,
                        y: se * J + le * Z + L
                    };
                }, "rotate"), ee = /*#__PURE__*/ Q(H, K), re = /*#__PURE__*/ Q(H, Y), W = /*#__PURE__*/ Q(q, K), z = /*#__PURE__*/ Q(q, Y), U = [
                    ee.x + N,
                    ee.y + $,
                    W.x + N,
                    W.y + $,
                    z.x + N,
                    z.y + $,
                    re.x + N,
                    re.y + $
                ];
                if (pt(t, e, U)) return y(E), true;
            } else if (qr(P, t, e)) return y(E), true;
        }
    }
    m$1(x, "checkLabel");
    for(var S = s.length - 1; S >= 0; S--){
        var T = s[S];
        T.isNode() ? p(T) || x(T) : b1(T) || x(T) || x(T, "source") || x(T, "target");
    }
    return o;
};
Sr.getAllInBox = function(t, e, r, a) {
    var n = this.getCachedZSortedEles().interactive, i = [], s = /*#__PURE__*/ Math.min(t, r), o = /*#__PURE__*/ Math.max(t, r), l = /*#__PURE__*/ Math.min(e, a), u = /*#__PURE__*/ Math.max(e, a);
    t = s, r = o, e = l, a = u;
    for(var f = /*#__PURE__*/ yt({
        x1: t,
        y1: e,
        x2: r,
        y2: a
    }), c = 0; c < n.length; c++){
        var d = n[c];
        if (d.isNode()) {
            var g = d, h = /*#__PURE__*/ g.boundingBox({
                includeNodes: true,
                includeEdges: false,
                includeLabels: false
            });
            Pi(f, h) && !Vo(h, f) && i.push(g);
        } else {
            var m = d, y = m._private, p = y.rscratch;
            if (p.startX != null && p.startY != null && !qr(f, p.startX, p.startY) || p.endX != null && p.endY != null && !qr(f, p.endX, p.endY)) continue;
            if (p.edgeType === "bezier" || p.edgeType === "multibezier" || p.edgeType === "self" || p.edgeType === "compound" || p.edgeType === "segments" || p.edgeType === "haystack") {
                for(var b1 = y.rstyle.bezierPts || y.rstyle.linePts || y.rstyle.haystackPts, w = true, x = 0; x < b1.length; x++)if (!gf(f, b1[x])) {
                    w = false;
                    break;
                }
                w && i.push(m);
            } else (p.edgeType === "haystack" || p.edgeType === "straight") && i.push(m);
        }
    }
    return i;
};
var wn = {};
wn.calculateArrowAngles = function(t) {
    var e = t._private.rscratch, r = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", l, u, f, c, d, g, p, b1;
    if (r ? (f = e.haystackPts[0], c = e.haystackPts[1], d = e.haystackPts[2], g = e.haystackPts[3]) : (f = e.arrowStartX, c = e.arrowStartY, d = e.arrowEndX, g = e.arrowEndY), p = e.midX, b1 = e.midY, i) l = f - e.segpts[0], u = c - e.segpts[1];
    else if (n || s || o || a) {
        var h = e.allpts, m = /*#__PURE__*/ je(h[0], h[2], h[4], .1), y = /*#__PURE__*/ je(h[1], h[3], h[5], .1);
        l = f - m, u = c - y;
    } else l = f - p, u = c - b1;
    e.srcArrowAngle = /*#__PURE__*/ Ka(l, u);
    var p = e.midX, b1 = e.midY;
    if (r && (p = (f + d) / 2, b1 = (c + g) / 2), l = d - f, u = g - c, i) {
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
        var h = e.allpts, S = e.ctrlpts, T, E, D, C;
        if (S.length / 2 % 2 === 0) {
            var B = h.length / 2 - 1, A = B + 2, P = A + 2;
            T = /*#__PURE__*/ je(h[B], h[A], h[P], 0), E = /*#__PURE__*/ je(h[B + 1], h[A + 1], h[P + 1], 0), D = /*#__PURE__*/ je(h[B], h[A], h[P], 1e-4), C = /*#__PURE__*/ je(h[B + 1], h[A + 1], h[P + 1], 1e-4);
        } else {
            var A = h.length / 2 - 1, B = A - 2, P = A + 2;
            T = /*#__PURE__*/ je(h[B], h[A], h[P], .4999), E = /*#__PURE__*/ je(h[B + 1], h[A + 1], h[P + 1], .4999), D = /*#__PURE__*/ je(h[B], h[A], h[P], .5), C = /*#__PURE__*/ je(h[B + 1], h[A + 1], h[P + 1], .5);
        }
        l = D - T, u = C - E;
    }
    if (e.midtgtArrowAngle = /*#__PURE__*/ Ka(l, u), e.midDispX = l, e.midDispY = u, l *= -1, u *= -1, i) {
        var h = e.allpts;
        if (h.length / 2 % 2 !== 0) {
            if (!e.isRound) {
                var w = h.length / 2 - 1, M = w + 2;
                l = -(h[M] - h[w]), u = -(h[M + 1] - h[w + 1]);
            }
        }
    }
    if (e.midsrcArrowAngle = /*#__PURE__*/ Ka(l, u), i) l = d - e.segpts[e.segpts.length - 2], u = g - e.segpts[e.segpts.length - 1];
    else if (n || s || o || a) {
        var h = e.allpts, R = h.length, m = /*#__PURE__*/ je(h[R - 6], h[R - 4], h[R - 2], .9), y = /*#__PURE__*/ je(h[R - 5], h[R - 3], h[R - 1], .9);
        l = d - m, u = g - y;
    } else l = d - p, u = g - b1;
    e.tgtArrowAngle = /*#__PURE__*/ Ka(l, u);
};
wn.getArrowWidth = wn.getArrowHeight = function(t, e) {
    var r = this.arrowWidthCache = this.arrowWidthCache || {}, a = r[t + ", " + e];
    return a || (a = Math.max(/*#__PURE__*/ Math.pow(t * 13.37, .9), 29) * e, r[t + ", " + e] = a, a);
};
var di, hi, Nt = {}, Ct = {}, Ys, _s, yr, ln, Wt, cr, pr, Ot, Rr, Qa, Ru, Mu, gi, pi, Zs, Qs = /*#__PURE__*/ m$1(function(e, r, a) {
    a.x = r.x - e.x, a.y = r.y - e.y, a.len = /*#__PURE__*/ Math.sqrt(a.x * a.x + a.y * a.y), a.nx = a.x / a.len, a.ny = a.y / a.len, a.ang = /*#__PURE__*/ Math.atan2(a.ny, a.nx);
}, "asVec"), rp = /*#__PURE__*/ m$1(function(e, r) {
    r.x = e.x * -1, r.y = e.y * -1, r.nx = e.nx * -1, r.ny = e.ny * -1, r.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, "invertVec"), ap = /*#__PURE__*/ m$1(function(e, r, a, n, i) {
    if (e !== Zs ? Qs(r, e, Nt) : rp(Ct, Nt), Qs(r, a, Ct), Ys = Nt.nx * Ct.ny - Nt.ny * Ct.nx, _s = Nt.nx * Ct.nx - Nt.ny * -Ct.ny, Wt = /*#__PURE__*/ Math.asin(/*#__PURE__*/ Math.max(-1, /*#__PURE__*/ Math.min(1, Ys))), Math.abs(Wt) < 1e-6) {
        di = r.x, hi = r.y, pr = Rr = 0;
        return;
    }
    yr = 1, ln = false, _s < 0 ? Wt < 0 ? Wt = Math.PI + Wt : (Wt = Math.PI - Wt, yr = -1, ln = true) : Wt > 0 && (yr = -1, ln = true), r.radius !== void 0 ? Rr = r.radius : Rr = n, cr = Wt / 2, Qa = /*#__PURE__*/ Math.min(Nt.len / 2, Ct.len / 2), i ? (Ot = /*#__PURE__*/ Math.abs(Math.cos(cr) * Rr / Math.sin(cr)), Ot > Qa ? (Ot = Qa, pr = /*#__PURE__*/ Math.abs(Ot * Math.sin(cr) / Math.cos(cr))) : pr = Rr) : (Ot = /*#__PURE__*/ Math.min(Qa, Rr), pr = /*#__PURE__*/ Math.abs(Ot * Math.sin(cr) / Math.cos(cr))), gi = r.x + Ct.nx * Ot, pi = r.y + Ct.ny * Ot, di = gi - Ct.ny * pr * yr, hi = pi + Ct.nx * pr * yr, Ru = r.x + Nt.nx * Ot, Mu = r.y + Nt.ny * Ot, Zs = r;
}, "calcCornerArc");
function Lu(t, e) {
    e.radius === 0 ? t.lineTo(e.cx, e.cy) : t.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
}
m$1(Lu, "drawPreparedRoundCorner");
function $i(t, e, r, a) {
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
    } : (ap(t, e, r, a, n), {
        cx: di,
        cy: hi,
        radius: pr,
        startX: Ru,
        startY: Mu,
        stopX: gi,
        stopY: pi,
        startAngle: Nt.ang + Math.PI / 2 * yr,
        endAngle: Ct.ang - Math.PI / 2 * yr,
        counterClockwise: ln
    });
}
m$1($i, "getRoundCorner");
var vt = {};
vt.findMidptPtsEtc = function(t, e) {
    var r = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = /*#__PURE__*/ t.pstyle("source-endpoint"), o = /*#__PURE__*/ t.pstyle("target-endpoint"), l = s.units != null && o.units != null, u = /*#__PURE__*/ m$1(function(S, T, E, D) {
        var C = D - T, B = E - S, A = /*#__PURE__*/ Math.sqrt(B * B + C * C);
        return {
            x: -C / A,
            y: B / A
        };
    }, "recalcVectorNormInverse"), f = t.pstyle("edge-distances").value;
    switch(f){
        case "node-position":
            i = r;
            break;
        case "intersection":
            i = a;
            break;
        case "endpoints":
            {
                if (l) {
                    var c = /*#__PURE__*/ this.manualEndptToPx(t.source()[0], s), d = /*#__PURE__*/ We(c, 2), g = d[0], h = d[1], m = /*#__PURE__*/ this.manualEndptToPx(t.target()[0], o), y = /*#__PURE__*/ We(m, 2), p = y[0], b1 = y[1], w = {
                        x1: g,
                        y1: h,
                        x2: p,
                        y2: b1
                    };
                    n = /*#__PURE__*/ u(g, h, p, b1), i = w;
                } else Re(/*#__PURE__*/ "Edge ".concat(/*#__PURE__*/ t.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
                break;
            }
    }
    return {
        midptPts: i,
        vectorNormInverse: n
    };
};
vt.findHaystackPoints = function(t) {
    for(var e = 0; e < t.length; e++){
        var r = t[e], a = r._private, n = a.rscratch;
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
        var s = a.source, o = a.target, l = /*#__PURE__*/ s.position(), u = /*#__PURE__*/ o.position(), f = /*#__PURE__*/ s.width(), c = /*#__PURE__*/ o.width(), d = /*#__PURE__*/ s.height(), g = /*#__PURE__*/ o.height(), h = r.pstyle("haystack-radius").value, m = h / 2;
        n.haystackPts = n.allpts = [
            n.source.x * f * m + l.x,
            n.source.y * d * m + l.y,
            n.target.x * c * m + u.x,
            n.target.y * g * m + u.y
        ], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = true, this.storeEdgeProjections(r), this.calculateArrowAngles(r), this.recalculateEdgeLabelProjections(r), this.calculateLabelAngles(r);
    }
};
vt.findSegmentsPoints = function(t, e) {
    var r = t._private.rscratch, a = /*#__PURE__*/ t.pstyle("segment-weights"), n = /*#__PURE__*/ t.pstyle("segment-distances"), i = /*#__PURE__*/ t.pstyle("segment-radii"), s = /*#__PURE__*/ t.pstyle("radius-type"), o = /*#__PURE__*/ Math.min(a.pfValue.length, n.pfValue.length), l = i.pfValue[i.pfValue.length - 1], u = s.pfValue[s.pfValue.length - 1];
    r.edgeType = "segments", r.segpts = [], r.radii = [], r.isArcRadius = [];
    for(var f = 0; f < o; f++){
        var c = a.pfValue[f], d = n.pfValue[f], g = 1 - c, h = c, m = /*#__PURE__*/ this.findMidptPtsEtc(t, e), y = m.midptPts, p = m.vectorNormInverse, b1 = {
            x: y.x1 * g + y.x2 * h,
            y: y.y1 * g + y.y2 * h
        };
        r.segpts.push(b1.x + p.x * d, b1.y + p.y * d), r.radii.push(i.pfValue[f] !== void 0 ? i.pfValue[f] : l), r.isArcRadius.push((s.pfValue[f] !== void 0 ? s.pfValue[f] : u) === "arc-radius");
    }
};
vt.findLoopPoints = function(t, e, r, a) {
    var n = t._private.rscratch, i = e.dirCounts, s = e.srcPos, o = /*#__PURE__*/ t.pstyle("control-point-distances"), l = o ? o.pfValue[0] : void 0, u = t.pstyle("loop-direction").pfValue, f = t.pstyle("loop-sweep").pfValue, c = t.pstyle("control-point-step-size").pfValue;
    n.edgeType = "self";
    var d = r, g = c;
    a && (d = 0, g = l);
    var h = u - Math.PI / 2, m = h - f / 2, y = h + f / 2, p = u + "_" + f;
    d = i[p] === void 0 ? i[p] = 0 : ++i[p], n.ctrlpts = [
        s.x + Math.cos(m) * 1.4 * g * (d / 3 + 1),
        s.y + Math.sin(m) * 1.4 * g * (d / 3 + 1),
        s.x + Math.cos(y) * 1.4 * g * (d / 3 + 1),
        s.y + Math.sin(y) * 1.4 * g * (d / 3 + 1)
    ];
};
vt.findCompoundLoopPoints = function(t, e, r, a) {
    var n = t._private.rscratch;
    n.edgeType = "compound";
    var i = e.srcPos, s = e.tgtPos, o = e.srcW, l = e.srcH, u = e.tgtW, f = e.tgtH, c = t.pstyle("control-point-step-size").pfValue, d = /*#__PURE__*/ t.pstyle("control-point-distances"), g = d ? d.pfValue[0] : void 0, h = r, m = c;
    a && (h = 0, m = g);
    var y = 50, p = {
        x: i.x - o / 2,
        y: i.y - l / 2
    }, b1 = {
        x: s.x - u / 2,
        y: s.y - f / 2
    }, w = {
        x: /*#__PURE__*/ Math.min(p.x, b1.x),
        y: /*#__PURE__*/ Math.min(p.y, b1.y)
    }, x = .5, S = /*#__PURE__*/ Math.max(x, /*#__PURE__*/ Math.log(o * .01)), T = /*#__PURE__*/ Math.max(x, /*#__PURE__*/ Math.log(u * .01));
    n.ctrlpts = [
        w.x,
        w.y - (1 + Math.pow(y, 1.12) / 100) * m * (h / 3 + 1) * S,
        w.x - (1 + Math.pow(y, 1.12) / 100) * m * (h / 3 + 1) * T,
        w.y
    ];
};
vt.findStraightEdgePoints = function(t) {
    t._private.rscratch.edgeType = "straight";
};
vt.findBezierPoints = function(t, e, r, a, n) {
    var i = t._private.rscratch, s = t.pstyle("control-point-step-size").pfValue, o = /*#__PURE__*/ t.pstyle("control-point-distances"), l = /*#__PURE__*/ t.pstyle("control-point-weights"), u = o && l ? Math.min(o.value.length, l.value.length) : 1, f = o ? o.pfValue[0] : void 0, c = l.value[0], d = a;
    i.edgeType = d ? "multibezier" : "bezier", i.ctrlpts = [];
    for(var g = 0; g < u; g++){
        var h = (.5 - e.eles.length / 2 + r) * s * (n ? -1 : 1), m = void 0, y = /*#__PURE__*/ zo(h);
        d && (f = o ? o.pfValue[g] : s, c = l.value[g]), a ? m = f : m = f !== void 0 ? y * f : void 0;
        var p = m !== void 0 ? m : h, b1 = 1 - c, w = c, x = /*#__PURE__*/ this.findMidptPtsEtc(t, e), S = x.midptPts, T = x.vectorNormInverse, E = {
            x: S.x1 * b1 + S.x2 * w,
            y: S.y1 * b1 + S.y2 * w
        };
        i.ctrlpts.push(E.x + T.x * p, E.y + T.y * p);
    }
};
vt.findTaxiPoints = function(t, e) {
    var r = t._private.rscratch;
    r.edgeType = "segments";
    var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", l = "upward", u = "auto", f = e.posPts, c = e.srcW, d = e.srcH, g = e.tgtW, h = e.tgtH, m = t.pstyle("edge-distances").value, y = m !== "node-position", p = t.pstyle("taxi-direction").value, b1 = p, w = /*#__PURE__*/ t.pstyle("taxi-turn"), x = w.units === "%", S = w.pfValue, T = S < 0, E = t.pstyle("taxi-turn-min-distance").pfValue, D = y ? (c + g) / 2 : 0, C = y ? (d + h) / 2 : 0, B = f.x2 - f.x1, A = f.y2 - f.y1, P = /*#__PURE__*/ m$1(function(_, ie) {
        return _ > 0 ? Math.max(_ - ie, 0) : Math.min(_ + ie, 0);
    }, "subDWH"), M = /*#__PURE__*/ P(B, D), R = /*#__PURE__*/ P(A, C), I = false;
    b1 === u ? p = Math.abs(M) > Math.abs(R) ? n : a : b1 === l || b1 === o ? (p = a, I = true) : (b1 === i || b1 === s) && (p = n, I = true);
    var L = p === a, O = L ? R : M, N = L ? A : B, $ = /*#__PURE__*/ zo(N), H = false;
    !(I && (x || T)) && (b1 === o && N < 0 || b1 === l && N > 0 || b1 === i && N > 0 || b1 === s && N < 0) && ($ *= -1, O = $ * Math.abs(O), H = true);
    var q;
    if (x) {
        var K = S < 0 ? 1 + S : S;
        q = K * O;
    } else {
        var Y = S < 0 ? O : 0;
        q = Y + S * $;
    }
    var Z = /*#__PURE__*/ m$1(function(_) {
        return Math.abs(_) < E || Math.abs(_) >= Math.abs(O);
    }, "getIsTooClose"), J = /*#__PURE__*/ Z(q), Q = /*#__PURE__*/ Z(Math.abs(O) - Math.abs(q)), ee = J || Q;
    if (ee && !H) if (L) {
        var re = Math.abs(N) <= d / 2, W = Math.abs(B) <= g / 2;
        if (re) {
            var z = (f.x1 + f.x2) / 2, U = f.y1, te = f.y2;
            r.segpts = [
                z,
                U,
                z,
                te
            ];
        } else if (W) {
            var se = (f.y1 + f.y2) / 2, le = f.x1, Se = f.x2;
            r.segpts = [
                le,
                se,
                Se,
                se
            ];
        } else r.segpts = [
            f.x1,
            f.y2
        ];
    } else {
        var Me = Math.abs(N) <= c / 2, Le = Math.abs(A) <= h / 2;
        if (Me) {
            var ve = (f.y1 + f.y2) / 2, ue = f.x1, ye = f.x2;
            r.segpts = [
                ue,
                ve,
                ye,
                ve
            ];
        } else if (Le) {
            var me = (f.x1 + f.x2) / 2, ge = f.y1, be = f.y2;
            r.segpts = [
                me,
                ge,
                me,
                be
            ];
        } else r.segpts = [
            f.x2,
            f.y1
        ];
    }
    else if (L) {
        var Te = f.y1 + q + (y ? d / 2 * $ : 0), De = f.x1, j = f.x2;
        r.segpts = [
            De,
            Te,
            j,
            Te
        ];
    } else {
        var k = f.x1 + q + (y ? c / 2 * $ : 0), F = f.y1, X = f.y2;
        r.segpts = [
            k,
            F,
            k,
            X
        ];
    }
    if (r.isRound) {
        var V = t.pstyle("taxi-radius").value, G = t.pstyle("radius-type").value[0] === "arc-radius";
        r.radii = /*#__PURE__*/ new Array(r.segpts.length / 2).fill(V), r.isArcRadius = /*#__PURE__*/ new Array(r.segpts.length / 2).fill(G);
    }
};
vt.tryToCorrectInvalidPoints = function(t, e) {
    var r = t._private.rscratch;
    if (r.edgeType === "bezier") {
        var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, l = e.tgtH, u = e.srcShape, f = e.tgtShape, c = e.srcCornerRadius, d = e.tgtCornerRadius, g = e.srcRs, h = e.tgtRs, m = !ae(r.startX) || !ae(r.startY), y = !ae(r.arrowStartX) || !ae(r.arrowStartY), p = !ae(r.endX) || !ae(r.endY), b1 = !ae(r.arrowEndX) || !ae(r.arrowEndY), w = 3, x = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth, S = w * x, T = /*#__PURE__*/ wr({
            x: r.ctrlpts[0],
            y: r.ctrlpts[1]
        }, {
            x: r.startX,
            y: r.startY
        }), E = T < S, D = /*#__PURE__*/ wr({
            x: r.ctrlpts[0],
            y: r.ctrlpts[1]
        }, {
            x: r.endX,
            y: r.endY
        }), C = D < S, B = false;
        if (m || y || E) {
            B = true;
            var A = {
                x: r.ctrlpts[0] - a.x,
                y: r.ctrlpts[1] - a.y
            }, P = /*#__PURE__*/ Math.sqrt(A.x * A.x + A.y * A.y), M = {
                x: A.x / P,
                y: A.y / P
            }, R = /*#__PURE__*/ Math.max(i, s), I = {
                x: r.ctrlpts[0] + M.x * 2 * R,
                y: r.ctrlpts[1] + M.y * 2 * R
            }, L = /*#__PURE__*/ u.intersectLine(a.x, a.y, i, s, I.x, I.y, 0, c, g);
            E ? (r.ctrlpts[0] = r.ctrlpts[0] + M.x * (S - T), r.ctrlpts[1] = r.ctrlpts[1] + M.y * (S - T)) : (r.ctrlpts[0] = L[0] + M.x * S, r.ctrlpts[1] = L[1] + M.y * S);
        }
        if (p || b1 || C) {
            B = true;
            var O = {
                x: r.ctrlpts[0] - n.x,
                y: r.ctrlpts[1] - n.y
            }, N = /*#__PURE__*/ Math.sqrt(O.x * O.x + O.y * O.y), $ = {
                x: O.x / N,
                y: O.y / N
            }, H = /*#__PURE__*/ Math.max(i, s), q = {
                x: r.ctrlpts[0] + $.x * 2 * H,
                y: r.ctrlpts[1] + $.y * 2 * H
            }, K = /*#__PURE__*/ f.intersectLine(n.x, n.y, o, l, q.x, q.y, 0, d, h);
            C ? (r.ctrlpts[0] = r.ctrlpts[0] + $.x * (S - D), r.ctrlpts[1] = r.ctrlpts[1] + $.y * (S - D)) : (r.ctrlpts[0] = K[0] + $.x * S, r.ctrlpts[1] = K[1] + $.y * S);
        }
        B && this.findEndpoints(t);
    }
};
vt.storeAllpts = function(t) {
    var e = t._private.rscratch;
    if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
        e.allpts = [], e.allpts.push(e.startX, e.startY);
        for(var r = 0; r + 1 < e.ctrlpts.length; r += 2)e.allpts.push(e.ctrlpts[r], e.ctrlpts[r + 1]), r + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[r] + e.ctrlpts[r + 2]) / 2, (e.ctrlpts[r + 1] + e.ctrlpts[r + 3]) / 2);
        e.allpts.push(e.endX, e.endY);
        var a, n;
        e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = .5, e.midX = /*#__PURE__*/ je(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = /*#__PURE__*/ je(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
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
                e.roundCorners.push(/*#__PURE__*/ $i({
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
                }, d = e.roundCorners[f / 2], g = [
                    c.x - d.cx,
                    c.y - d.cy
                ], h = d.radius / Math.sqrt(Math.pow(g[0], 2) + Math.pow(g[1], 2));
                g = /*#__PURE__*/ g.map(function(m) {
                    return m * h;
                }), e.midX = d.cx + g[0], e.midY = d.cy + g[1], e.midVector = g;
            }
        }
    }
};
vt.checkForInvalidEdgeWarning = function(t) {
    var e = t[0]._private.rscratch;
    e.nodesOverlap || ae(e.startX) && ae(e.startY) && ae(e.endX) && ae(e.endY) ? e.loggedErr = false : e.loggedErr || (e.loggedErr = true, Re("Edge `" + t.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
vt.findEdgeControlPoints = function(t) {
    var e = this;
    if (!(!t || t.length === 0)) {
        for(var r = this, a = r.cy, n = /*#__PURE__*/ a.hasCompoundNodes(), i = {
            map: new Ft,
            get: /*#__PURE__*/ m$1(function(E) {
                var D = /*#__PURE__*/ this.map.get(E[0]);
                return D != null ? D.get(E[1]) : null;
            }, "get"),
            set: /*#__PURE__*/ m$1(function(E, D) {
                var C = /*#__PURE__*/ this.map.get(E[0]);
                C == null && (C = new Ft, this.map.set(E[0], C)), C.set(E[1], D);
            }, "set")
        }, s = [], o = [], l = 0; l < t.length; l++){
            var u = t[l], f = u._private, c = u.pstyle("curve-style").value;
            if (!(u.removed() || !u.takesUpSpace())) {
                if (c === "haystack") {
                    o.push(u);
                    continue;
                }
                var d = c === "unbundled-bezier" || c.endsWith("segments") || c === "straight" || c === "straight-triangle" || c.endsWith("taxi"), g = c === "unbundled-bezier" || c === "bezier", h = f.source, m = f.target, y = /*#__PURE__*/ h.poolIndex(), p = /*#__PURE__*/ m.poolIndex(), b1 = /*#__PURE__*/ [
                    y,
                    p
                ].sort(), w = /*#__PURE__*/ i.get(b1);
                w == null && (w = {
                    eles: []
                }, i.set(b1, w), s.push(b1)), w.eles.push(u), d && (w.hasUnbundled = true), g && (w.hasBezier = true);
            }
        }
        for(var x = /*#__PURE__*/ m$1(function(E) {
            var D = s[E], C = /*#__PURE__*/ i.get(D), B = void 0;
            if (!C.hasUnbundled) {
                var A = /*#__PURE__*/ C.eles[0].parallelEdges().filter(function(k) {
                    return k.isBundledBezier();
                });
                Di(C.eles), A.forEach(function(k) {
                    return C.eles.push(k);
                }), C.eles.sort(function(k, F) {
                    return k.poolIndex() - F.poolIndex();
                });
            }
            var P = C.eles[0], M = /*#__PURE__*/ P.source(), R = /*#__PURE__*/ P.target();
            if (M.poolIndex() > R.poolIndex()) {
                var I = M;
                M = R, R = I;
            }
            var L = C.srcPos = /*#__PURE__*/ M.position(), O = C.tgtPos = /*#__PURE__*/ R.position(), N = C.srcW = /*#__PURE__*/ M.outerWidth(), $ = C.srcH = /*#__PURE__*/ M.outerHeight(), H = C.tgtW = /*#__PURE__*/ R.outerWidth(), q = C.tgtH = /*#__PURE__*/ R.outerHeight(), K = C.srcShape = r.nodeShapes[e.getNodeShape(M)], Y = C.tgtShape = r.nodeShapes[e.getNodeShape(R)], Z = C.srcCornerRadius = M.pstyle("corner-radius").value === "auto" ? "auto" : M.pstyle("corner-radius").pfValue, J = C.tgtCornerRadius = R.pstyle("corner-radius").value === "auto" ? "auto" : R.pstyle("corner-radius").pfValue, Q = C.tgtRs = R._private.rscratch, ee = C.srcRs = M._private.rscratch;
            C.dirCounts = {
                north: 0,
                west: 0,
                south: 0,
                east: 0,
                northwest: 0,
                southwest: 0,
                northeast: 0,
                southeast: 0
            };
            for(var re = 0; re < C.eles.length; re++){
                var W = C.eles[re], z = W[0]._private.rscratch, U = W.pstyle("curve-style").value, te = U === "unbundled-bezier" || U.endsWith("segments") || U.endsWith("taxi"), se = !M.same(/*#__PURE__*/ W.source());
                if (!C.calculatedIntersection && M !== R && (C.hasBezier || C.hasUnbundled)) {
                    C.calculatedIntersection = true;
                    var le = /*#__PURE__*/ K.intersectLine(L.x, L.y, N, $, O.x, O.y, 0, Z, ee), Se = C.srcIntn = le, Me = /*#__PURE__*/ Y.intersectLine(O.x, O.y, H, q, L.x, L.y, 0, J, Q), Le = C.tgtIntn = Me, ve = C.intersectionPts = {
                        x1: le[0],
                        x2: Me[0],
                        y1: le[1],
                        y2: Me[1]
                    }, ue = C.posPts = {
                        x1: L.x,
                        x2: O.x,
                        y1: L.y,
                        y2: O.y
                    }, ye = Me[1] - le[1], me = Me[0] - le[0], ge = /*#__PURE__*/ Math.sqrt(me * me + ye * ye), be = C.vector = {
                        x: me,
                        y: ye
                    }, Te = C.vectorNorm = {
                        x: be.x / ge,
                        y: be.y / ge
                    }, De = {
                        x: -Te.y,
                        y: Te.x
                    };
                    C.nodesOverlap = !ae(ge) || Y.checkPoint(le[0], le[1], 0, H, q, O.x, O.y, J, Q) || K.checkPoint(Me[0], Me[1], 0, N, $, L.x, L.y, Z, ee), C.vectorNormInverse = De, B = {
                        nodesOverlap: C.nodesOverlap,
                        dirCounts: C.dirCounts,
                        calculatedIntersection: true,
                        hasBezier: C.hasBezier,
                        hasUnbundled: C.hasUnbundled,
                        eles: C.eles,
                        srcPos: O,
                        srcRs: Q,
                        tgtPos: L,
                        tgtRs: ee,
                        srcW: H,
                        srcH: q,
                        tgtW: N,
                        tgtH: $,
                        srcIntn: Le,
                        tgtIntn: Se,
                        srcShape: Y,
                        tgtShape: K,
                        posPts: {
                            x1: ue.x2,
                            y1: ue.y2,
                            x2: ue.x1,
                            y2: ue.y1
                        },
                        intersectionPts: {
                            x1: ve.x2,
                            y1: ve.y2,
                            x2: ve.x1,
                            y2: ve.y1
                        },
                        vector: {
                            x: -be.x,
                            y: -be.y
                        },
                        vectorNorm: {
                            x: -Te.x,
                            y: -Te.y
                        },
                        vectorNormInverse: {
                            x: -De.x,
                            y: -De.y
                        }
                    };
                }
                var j = se ? B : C;
                z.nodesOverlap = j.nodesOverlap, z.srcIntn = j.srcIntn, z.tgtIntn = j.tgtIntn, z.isRound = /*#__PURE__*/ U.startsWith("round"), n && (M.isParent() || M.isChild() || R.isParent() || R.isChild()) && (M.parents().anySame(R) || R.parents().anySame(M) || M.same(R) && M.isParent()) ? e.findCompoundLoopPoints(W, j, re, te) : M === R ? e.findLoopPoints(W, j, re, te) : U.endsWith("segments") ? e.findSegmentsPoints(W, j) : U.endsWith("taxi") ? e.findTaxiPoints(W, j) : U === "straight" || !te && C.eles.length % 2 === 1 && re === Math.floor(C.eles.length / 2) ? e.findStraightEdgePoints(W) : e.findBezierPoints(W, j, re, te, se), e.findEndpoints(W), e.tryToCorrectInvalidPoints(W, j), e.checkForInvalidEdgeWarning(W), e.storeAllpts(W), e.storeEdgeProjections(W), e.calculateArrowAngles(W), e.recalculateEdgeLabelProjections(W), e.calculateLabelAngles(W);
            }
        }, "_loop"), S = 0; S < s.length; S++)x(S);
        this.findHaystackPoints(o);
    }
};
function Iu(t) {
    var e = [];
    if (t != null) {
        for(var r = 0; r < t.length; r += 2){
            var a = t[r], n = t[r + 1];
            e.push({
                x: a,
                y: n
            });
        }
        return e;
    }
}
m$1(Iu, "getPts");
vt.getSegmentPoints = function(t) {
    var e = t[0]._private.rscratch;
    this.recalculateRenderedStyle(t);
    var r = e.edgeType;
    if (r === "segments") return Iu(e.segpts);
};
vt.getControlPoints = function(t) {
    var e = t[0]._private.rscratch;
    this.recalculateRenderedStyle(t);
    var r = e.edgeType;
    if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound") return Iu(e.ctrlpts);
};
vt.getEdgeMidpoint = function(t) {
    var e = t[0]._private.rscratch;
    return this.recalculateRenderedStyle(t), {
        x: e.midX,
        y: e.midY
    };
};
var Na = {};
Na.manualEndptToPx = function(t, e) {
    var r = this, a = /*#__PURE__*/ t.position(), n = /*#__PURE__*/ t.outerWidth(), i = /*#__PURE__*/ t.outerHeight(), s = t._private.rscratch;
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
        return r.nodeShapes[this.getNodeShape(t)].intersectLine(a.x, a.y, n, i, f[0], f[1], 0, t.pstyle("corner-radius").value === "auto" ? "auto" : t.pstyle("corner-radius").pfValue, s);
    }
};
Na.findEndpoints = function(t) {
    var e = this, r, a = t.source()[0], n = t.target()[0], i = /*#__PURE__*/ a.position(), s = /*#__PURE__*/ n.position(), o = t.pstyle("target-arrow-shape").value, l = t.pstyle("source-arrow-shape").value, u = t.pstyle("target-distance-from-node").pfValue, f = t.pstyle("source-distance-from-node").pfValue, c = a._private.rscratch, d = n._private.rscratch, g = t.pstyle("curve-style").value, h = t._private.rscratch, m = h.edgeType, y = g === "taxi", p = m === "self" || m === "compound", b1 = m === "bezier" || m === "multibezier" || p, w = m !== "bezier", x = m === "straight" || m === "segments", S = m === "segments", T = b1 || w || x, E = p || y, D = /*#__PURE__*/ t.pstyle("source-endpoint"), C = E ? "outside-to-node" : D.value, B = a.pstyle("corner-radius").value === "auto" ? "auto" : a.pstyle("corner-radius").pfValue, A = /*#__PURE__*/ t.pstyle("target-endpoint"), P = E ? "outside-to-node" : A.value, M = n.pstyle("corner-radius").value === "auto" ? "auto" : n.pstyle("corner-radius").pfValue;
    h.srcManEndpt = D, h.tgtManEndpt = A;
    var R, I, L, O;
    if (b1) {
        var N = [
            h.ctrlpts[0],
            h.ctrlpts[1]
        ], $ = w ? [
            h.ctrlpts[h.ctrlpts.length - 2],
            h.ctrlpts[h.ctrlpts.length - 1]
        ] : N;
        R = $, I = N;
    } else if (x) {
        var H = S ? h.segpts.slice(0, 2) : [
            s.x,
            s.y
        ], q = S ? h.segpts.slice(h.segpts.length - 2) : [
            i.x,
            i.y
        ];
        R = q, I = H;
    }
    if (P === "inside-to-node") r = [
        s.x,
        s.y
    ];
    else if (A.units) r = /*#__PURE__*/ this.manualEndptToPx(n, A);
    else if (P === "outside-to-line") r = h.tgtIntn;
    else if (P === "outside-to-node" || P === "outside-to-node-or-label" ? L = R : (P === "outside-to-line" || P === "outside-to-line-or-label") && (L = [
        i.x,
        i.y
    ]), r = /*#__PURE__*/ e.nodeShapes[this.getNodeShape(n)].intersectLine(s.x, s.y, /*#__PURE__*/ n.outerWidth(), /*#__PURE__*/ n.outerHeight(), L[0], L[1], 0, M, d), P === "outside-to-node-or-label" || P === "outside-to-line-or-label") {
        var K = n._private.rscratch, Y = K.labelWidth, Z = K.labelHeight, J = K.labelX, Q = K.labelY, ee = Y / 2, re = Z / 2, W = n.pstyle("text-valign").value;
        W === "top" ? Q -= re : W === "bottom" && (Q += re);
        var z = n.pstyle("text-halign").value;
        z === "left" ? J -= ee : z === "right" && (J += ee);
        var U = /*#__PURE__*/ Ta(L[0], L[1], [
            J - ee,
            Q - re,
            J + ee,
            Q - re,
            J + ee,
            Q + re,
            J - ee,
            Q + re
        ], s.x, s.y);
        if (U.length > 0) {
            var te = i, se = /*#__PURE__*/ hr(te, /*#__PURE__*/ Lr(r)), le = /*#__PURE__*/ hr(te, /*#__PURE__*/ Lr(U)), Se = se;
            if (le < se && (r = U, Se = le), U.length > 2) {
                var Me = /*#__PURE__*/ hr(te, {
                    x: U[2],
                    y: U[3]
                });
                Me < Se && (r = [
                    U[2],
                    U[3]
                ]);
            }
        }
    }
    var Le = /*#__PURE__*/ Ga(r, R, e.arrowShapes[o].spacing(t) + u), ve = /*#__PURE__*/ Ga(r, R, e.arrowShapes[o].gap(t) + u);
    if (h.endX = ve[0], h.endY = ve[1], h.arrowEndX = Le[0], h.arrowEndY = Le[1], C === "inside-to-node") r = [
        i.x,
        i.y
    ];
    else if (D.units) r = /*#__PURE__*/ this.manualEndptToPx(a, D);
    else if (C === "outside-to-line") r = h.srcIntn;
    else if (C === "outside-to-node" || C === "outside-to-node-or-label" ? O = I : (C === "outside-to-line" || C === "outside-to-line-or-label") && (O = [
        s.x,
        s.y
    ]), r = /*#__PURE__*/ e.nodeShapes[this.getNodeShape(a)].intersectLine(i.x, i.y, /*#__PURE__*/ a.outerWidth(), /*#__PURE__*/ a.outerHeight(), O[0], O[1], 0, B, c), C === "outside-to-node-or-label" || C === "outside-to-line-or-label") {
        var ue = a._private.rscratch, ye = ue.labelWidth, me = ue.labelHeight, ge = ue.labelX, be = ue.labelY, Te = ye / 2, De = me / 2, j = a.pstyle("text-valign").value;
        j === "top" ? be -= De : j === "bottom" && (be += De);
        var k = a.pstyle("text-halign").value;
        k === "left" ? ge -= Te : k === "right" && (ge += Te);
        var F = /*#__PURE__*/ Ta(O[0], O[1], [
            ge - Te,
            be - De,
            ge + Te,
            be - De,
            ge + Te,
            be + De,
            ge - Te,
            be + De
        ], i.x, i.y);
        if (F.length > 0) {
            var X = s, V = /*#__PURE__*/ hr(X, /*#__PURE__*/ Lr(r)), G = /*#__PURE__*/ hr(X, /*#__PURE__*/ Lr(F)), ne = V;
            if (G < V && (r = [
                F[0],
                F[1]
            ], ne = G), F.length > 2) {
                var _ = /*#__PURE__*/ hr(X, {
                    x: F[2],
                    y: F[3]
                });
                _ < ne && (r = [
                    F[2],
                    F[3]
                ]);
            }
        }
    }
    var ie = /*#__PURE__*/ Ga(r, I, e.arrowShapes[l].spacing(t) + f), de = /*#__PURE__*/ Ga(r, I, e.arrowShapes[l].gap(t) + f);
    h.startX = de[0], h.startY = de[1], h.arrowStartX = ie[0], h.arrowStartY = ie[1], T && (!ae(h.startX) || !ae(h.startY) || !ae(h.endX) || !ae(h.endY) ? h.badLine = true : h.badLine = false);
};
Na.getSourceEndpoint = function(t) {
    var e = t[0]._private.rscratch;
    switch(this.recalculateRenderedStyle(t), e.edgeType){
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
Na.getTargetEndpoint = function(t) {
    var e = t[0]._private.rscratch;
    switch(this.recalculateRenderedStyle(t), e.edgeType){
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
var Ki = {};
function np(t, e, r) {
    for(var a = /*#__PURE__*/ m$1(function(u, f, c, d) {
        return je(u, f, c, d);
    }, "qbezierAt$1"), n = e._private, i = n.rstyle.bezierPts, s = 0; s < t.bezierProjPcts.length; s++){
        var o = t.bezierProjPcts[s];
        i.push({
            x: /*#__PURE__*/ a(r[0], r[2], r[4], o),
            y: /*#__PURE__*/ a(r[1], r[3], r[5], o)
        });
    }
}
m$1(np, "pushBezierPts");
Ki.storeEdgeProjections = function(t) {
    var e = t._private, r = e.rscratch, a = r.edgeType;
    if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
        e.rstyle.bezierPts = [];
        for(var n = 0; n + 5 < r.allpts.length; n += 4)np(this, t, /*#__PURE__*/ r.allpts.slice(n, n + 6));
    } else if (a === "segments") for(var i = e.rstyle.linePts = [], n = 0; n + 1 < r.allpts.length; n += 2)i.push({
        x: r.allpts[n],
        y: r.allpts[n + 1]
    });
    else if (a === "haystack") {
        var s = r.haystackPts;
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
    e.rstyle.arrowWidth = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
Ki.recalculateEdgeProjections = function(t) {
    this.findEdgeControlPoints(t);
};
var qt = {};
qt.recalculateNodeLabelProjection = function(t) {
    var e = t.pstyle("label").strValue;
    if (!rr(e)) {
        var r, a, n = t._private, i = /*#__PURE__*/ t.width(), s = /*#__PURE__*/ t.height(), o = /*#__PURE__*/ t.padding(), l = /*#__PURE__*/ t.position(), u = t.pstyle("text-halign").strValue, f = t.pstyle("text-valign").strValue, c = n.rscratch, d = n.rstyle;
        switch(u){
            case "left":
                r = l.x - i / 2 - o;
                break;
            case "right":
                r = l.x + i / 2 + o;
                break;
            default:
                r = l.x;
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
        c.labelX = r, c.labelY = a, d.labelX = r, d.labelY = a, this.calculateLabelAngles(t), this.applyLabelDimensions(t);
    }
};
var Ou = /*#__PURE__*/ m$1(function(e, r) {
    var a = /*#__PURE__*/ Math.atan(r / e);
    return e === 0 && a < 0 && (a = a * -1), a;
}, "lineAngleFromDelta"), Nu = /*#__PURE__*/ m$1(function(e, r) {
    var a = r.x - e.x, n = r.y - e.y;
    return Ou(a, n);
}, "lineAngle"), ip = /*#__PURE__*/ m$1(function(e, r, a, n) {
    var i = /*#__PURE__*/ Ea(0, n - .001, 1), s = /*#__PURE__*/ Ea(0, n + .001, 1), o = /*#__PURE__*/ Or(e, r, a, i), l = /*#__PURE__*/ Or(e, r, a, s);
    return Nu(o, l);
}, "bezierAngle");
qt.recalculateEdgeLabelProjections = function(t) {
    var e, r = t._private, a = r.rscratch, n = this, i = {
        mid: t.pstyle("label").strValue,
        source: t.pstyle("source-label").strValue,
        target: t.pstyle("target-label").strValue
    };
    if (i.mid || i.source || i.target) {
        e = {
            x: a.midX,
            y: a.midY
        };
        var s = /*#__PURE__*/ m$1(function(c, d, g) {
            Jt(r.rscratch, c, d, g), Jt(r.rstyle, c, d, g);
        }, "setRs");
        s("labelX", null, e.x), s("labelY", null, e.y);
        var o = /*#__PURE__*/ Ou(a.midDispX, a.midDispY);
        s("labelAutoAngle", null, o);
        var l = /*#__PURE__*/ m$1(function f() {
            if (f.cache) return f.cache;
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
            var y = r.rstyle.bezierPts, p = n.bezierProjPcts.length;
            function b1(E, D, C, B, A) {
                var P = /*#__PURE__*/ wr(D, C), M = E.segments[E.segments.length - 1], R = {
                    p0: D,
                    p1: C,
                    t0: B,
                    t1: A,
                    startDist: M ? M.startDist + M.length : 0,
                    length: P
                };
                E.segments.push(R), E.length += P;
            }
            m$1(b1, "addSegment");
            for(var w = 0; w < c.length; w++){
                var x = c[w], S = c[w - 1];
                S && (x.startDist = S.startDist + S.length), b1(x, x.p0, y[w * p], 0, n.bezierProjPcts[0]);
                for(var T = 0; T < p - 1; T++)b1(x, y[w * p + T], y[w * p + T + 1], n.bezierProjPcts[T], n.bezierProjPcts[T + 1]);
                b1(x, y[w * p + p - 1], x.p2, n.bezierProjPcts[p - 1], 1);
            }
            return f.cache = c;
        }, "createControlPointInfo"), u = /*#__PURE__*/ m$1(function(c) {
            var d, g = c === "source";
            if (i[c]) {
                var h = t.pstyle(c + "-text-offset").pfValue;
                switch(a.edgeType){
                    case "self":
                    case "compound":
                    case "bezier":
                    case "multibezier":
                        {
                            for(var m = /*#__PURE__*/ l(), y, p = 0, b1 = 0, w = 0; w < m.length; w++){
                                for(var x = m[g ? w : m.length - 1 - w], S = 0; S < x.segments.length; S++){
                                    var T = x.segments[g ? S : x.segments.length - 1 - S], E = w === m.length - 1 && S === x.segments.length - 1;
                                    if (p = b1, b1 += T.length, b1 >= h || E) {
                                        y = {
                                            cp: x,
                                            segment: T
                                        };
                                        break;
                                    }
                                }
                                if (y) break;
                            }
                            var D = y.cp, C = y.segment, B = (h - p) / C.length, A = C.t1 - C.t0, P = g ? C.t0 + A * B : C.t1 - A * B;
                            P = /*#__PURE__*/ Ea(0, P, 1), e = /*#__PURE__*/ Or(D.p0, D.p1, D.p2, P), d = /*#__PURE__*/ ip(D.p0, D.p1, D.p2, P);
                            break;
                        }
                    case "straight":
                    case "segments":
                    case "haystack":
                        {
                            for(var M = 0, R, I, L, O, N = a.allpts.length, $ = 0; $ + 3 < N && (g ? (L = {
                                x: a.allpts[$],
                                y: a.allpts[$ + 1]
                            }, O = {
                                x: a.allpts[$ + 2],
                                y: a.allpts[$ + 3]
                            }) : (L = {
                                x: a.allpts[N - 2 - $],
                                y: a.allpts[N - 1 - $]
                            }, O = {
                                x: a.allpts[N - 4 - $],
                                y: a.allpts[N - 3 - $]
                            }), R = /*#__PURE__*/ wr(L, O), I = M, M += R, !(M >= h)); $ += 2);
                            var H = h - I, q = H / R;
                            q = /*#__PURE__*/ Ea(0, q, 1), e = /*#__PURE__*/ vf(L, O, q), d = /*#__PURE__*/ Nu(L, O);
                            break;
                        }
                }
                s("labelX", c, e.x), s("labelY", c, e.y), s("labelAutoAngle", c, d);
            }
        }, "calculateEndProjection");
        u("source"), u("target"), this.applyLabelDimensions(t);
    }
};
qt.applyLabelDimensions = function(t) {
    this.applyPrefixedLabelDimensions(t), t.isEdge() && (this.applyPrefixedLabelDimensions(t, "source"), this.applyPrefixedLabelDimensions(t, "target"));
};
qt.applyPrefixedLabelDimensions = function(t, e) {
    var r = t._private, a = /*#__PURE__*/ this.getLabelText(t, e), n = /*#__PURE__*/ this.calculateLabelDimensions(t, a), i = t.pstyle("line-height").pfValue, s = t.pstyle("text-wrap").strValue, o = At(r.rscratch, "labelWrapCachedLines", e) || [], l = s !== "wrap" ? 1 : Math.max(o.length, 1), u = n.height / l, f = u * i, c = n.width, d = n.height + (l - 1) * (i - 1) * u;
    Jt(r.rstyle, "labelWidth", e, c), Jt(r.rscratch, "labelWidth", e, c), Jt(r.rstyle, "labelHeight", e, d), Jt(r.rscratch, "labelHeight", e, d), Jt(r.rscratch, "labelLineHeight", e, f);
};
qt.getLabelText = function(t, e) {
    var r = t._private, a = e ? e + "-" : "", n = t.pstyle(a + "label").strValue, i = t.pstyle("text-transform").value, s = /*#__PURE__*/ m$1(function(Y, Z) {
        return Z ? (Jt(r.rscratch, Y, e, Z), Z) : At(r.rscratch, Y, e);
    }, "rscratch");
    if (!n) return "";
    i == "none" || (i == "uppercase" ? n = /*#__PURE__*/ n.toUpperCase() : i == "lowercase" && (n = /*#__PURE__*/ n.toLowerCase()));
    var o = t.pstyle("text-wrap").value;
    if (o === "wrap") {
        var l = /*#__PURE__*/ s("labelKey");
        if (l != null && s("labelWrapKey") === l) return s("labelWrapCachedText");
        for(var u = "\u200B", f = /*#__PURE__*/ n.split(`
`), c = t.pstyle("text-max-width").pfValue, d = t.pstyle("text-overflow-wrap").value, g = d === "anywhere", h = [], m = /[\s\u200b]+|$/g, y = 0; y < f.length; y++){
            var p = f[y], b1 = /*#__PURE__*/ this.calculateLabelDimensions(t, p), w = b1.width;
            if (g) {
                var x = /*#__PURE__*/ p.split("").join(u);
                p = x;
            }
            if (w > c) {
                var S = /*#__PURE__*/ p.matchAll(m), T = "", E = 0, D = /*#__PURE__*/ xt(S), C;
                try {
                    for(D.s(); !(C = /*#__PURE__*/ D.n()).done;){
                        var B = C.value, A = B[0], P = /*#__PURE__*/ p.substring(E, B.index);
                        E = B.index + A.length;
                        var M = T.length === 0 ? P : T + P + A, R = /*#__PURE__*/ this.calculateLabelDimensions(t, M), I = R.width;
                        I <= c ? T += P + A : (T && h.push(T), T = P + A);
                    }
                } catch (K) {
                    D.e(K);
                } finally{
                    D.f();
                }
                T.match(/^[\s\u200b]+$/) || h.push(T);
            } else h.push(p);
        }
        s("labelWrapCachedLines", h), n = /*#__PURE__*/ s("labelWrapCachedText", /*#__PURE__*/ h.join(`
`)), s("labelWrapKey", l);
    } else if (o === "ellipsis") {
        var L = t.pstyle("text-max-width").pfValue, O = "", N = "\u2026", $ = false;
        if (this.calculateLabelDimensions(t, n).width < L) return n;
        for(var H = 0; H < n.length; H++){
            var q = this.calculateLabelDimensions(t, O + n[H] + N).width;
            if (q > L) break;
            O += n[H], H === n.length - 1 && ($ = true);
        }
        return $ || (O += N), O;
    }
    return n;
};
qt.getLabelJustification = function(t) {
    var e = t.pstyle("text-justification").strValue, r = t.pstyle("text-halign").strValue;
    if (e === "auto") if (t.isNode()) switch(r){
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
qt.calculateLabelDimensions = function(t, e) {
    var r = this, a = /*#__PURE__*/ r.cy.window(), n = a.document, i = /*#__PURE__*/ ar(e, t._private.labelDimsKey), s = r.labelDimCache || (r.labelDimCache = []), o = s[i];
    if (o != null) return o;
    var l = 0, u = t.pstyle("font-style").strValue, f = t.pstyle("font-size").pfValue, c = t.pstyle("font-family").strValue, d = t.pstyle("font-weight").strValue, g = this.labelCalcCanvas, h = this.labelCalcCanvasContext;
    if (!g) {
        g = this.labelCalcCanvas = /*#__PURE__*/ n.createElement("canvas"), h = this.labelCalcCanvasContext = /*#__PURE__*/ g.getContext("2d");
        var m = g.style;
        m.position = "absolute", m.left = "-9999px", m.top = "-9999px", m.zIndex = "-1", m.visibility = "hidden", m.pointerEvents = "none";
    }
    h.font = /*#__PURE__*/ "".concat(u, " ").concat(d, " ").concat(f, "px ").concat(c);
    for(var y = 0, p = 0, b1 = /*#__PURE__*/ e.split(`
`), w = 0; w < b1.length; w++){
        var x = b1[w], S = /*#__PURE__*/ h.measureText(x), T = /*#__PURE__*/ Math.ceil(S.width), E = f;
        y = /*#__PURE__*/ Math.max(T, y), p += E;
    }
    return y += l, p += l, s[i] = {
        width: y,
        height: p
    };
};
qt.calculateLabelAngle = function(t, e) {
    var r = t._private, a = r.rscratch, n = /*#__PURE__*/ t.isEdge(), i = e ? e + "-" : "", s = /*#__PURE__*/ t.pstyle(i + "text-rotation"), o = s.strValue;
    return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
};
qt.calculateLabelAngles = function(t) {
    var e = this, r = /*#__PURE__*/ t.isEdge(), a = t._private, n = a.rscratch;
    n.labelAngle = /*#__PURE__*/ e.calculateLabelAngle(t), r && (n.sourceLabelAngle = /*#__PURE__*/ e.calculateLabelAngle(t, "source"), n.targetLabelAngle = /*#__PURE__*/ e.calculateLabelAngle(t, "target"));
};
var zu = {}, Js = 28, js = false;
zu.getNodeShape = function(t) {
    var e = this, r = t.pstyle("shape").value;
    if (r === "cutrectangle" && (t.width() < Js || t.height() < Js)) return js || (Re("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), js = true), "rectangle";
    if (t.isParent()) return r === "rectangle" || r === "roundrectangle" || r === "round-rectangle" || r === "cutrectangle" || r === "cut-rectangle" || r === "barrel" ? r : "rectangle";
    if (r === "polygon") {
        var a = t.pstyle("shape-polygon-points").value;
        return e.nodeShapes.makePolygon(a).name;
    }
    return r;
};
var Fn = {};
Fn.registerCalculationListeners = function() {
    var t = this.cy, e = /*#__PURE__*/ t.collection(), r = this, a = /*#__PURE__*/ m$1(function(s) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (e.merge(s), o) for(var l = 0; l < s.length; l++){
            var u = s[l], f = u._private, c = f.rstyle;
            c.clean = false, c.cleanConnected = false;
        }
    }, "enqueue");
    r.binder(t).on("bounds.* dirty.*", /*#__PURE__*/ m$1(function(s) {
        var o = s.target;
        a(o);
    }, "onDirtyBounds")).on("style.* background.*", /*#__PURE__*/ m$1(function(s) {
        var o = s.target;
        a(o, false);
    }, "onDirtyStyle"));
    var n = /*#__PURE__*/ m$1(function(s) {
        if (s) {
            var o = r.onUpdateEleCalcsFns;
            e.cleanStyle();
            for(var l = 0; l < e.length; l++){
                var u = e[l], f = u._private.rstyle;
                u.isNode() && !f.cleanConnected && (a(/*#__PURE__*/ u.connectedEdges()), f.cleanConnected = true);
            }
            if (o) for(var c = 0; c < o.length; c++){
                var d = o[c];
                d(s, e);
            }
            r.recalculateRenderedStyle(e), e = /*#__PURE__*/ t.collection();
        }
    }, "updateEleCalcs");
    r.flushRenderedStyleQueue = function() {
        n(true);
    }, r.beforeRender(n, r.beforeRenderPriorities.eleCalcs);
};
Fn.onUpdateEleCalcs = function(t) {
    var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
    e.push(t);
};
Fn.recalculateRenderedStyle = function(t, e) {
    var r = /*#__PURE__*/ m$1(function(x) {
        return x._private.rstyle.cleanConnected;
    }, "isCleanConnected"), a = [], n = [];
    if (!this.destroyed) {
        e === void 0 && (e = true);
        for(var i = 0; i < t.length; i++){
            var s = t[i], o = s._private, l = o.rstyle;
            s.isEdge() && (!r(/*#__PURE__*/ s.source()) || !r(/*#__PURE__*/ s.target())) && (l.clean = false), !(e && l.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? n.push(s) : a.push(s), l.clean = true);
        }
        for(var u = 0; u < n.length; u++){
            var f = n[u], c = f._private, d = c.rstyle, g = /*#__PURE__*/ f.position();
            this.recalculateNodeLabelProjection(f), d.nodeX = g.x, d.nodeY = g.y, d.nodeW = f.pstyle("width").pfValue, d.nodeH = f.pstyle("height").pfValue;
        }
        this.recalculateEdgeProjections(a);
        for(var h = 0; h < a.length; h++){
            var m = a[h], y = m._private, p = y.rstyle, b1 = y.rscratch;
            p.srcX = b1.arrowStartX, p.srcY = b1.arrowStartY, p.tgtX = b1.arrowEndX, p.tgtY = b1.arrowEndY, p.midX = b1.midX, p.midY = b1.midY, p.labelAngle = b1.labelAngle, p.sourceLabelAngle = b1.sourceLabelAngle, p.targetLabelAngle = b1.targetLabelAngle;
        }
    }
};
var Vn = {};
Vn.updateCachedGrabbedEles = function() {
    var t = this.cachedZSortedEles;
    if (t) {
        t.drag = [], t.nondrag = [];
        for(var e = [], r = 0; r < t.length; r++){
            var a = t[r], n = a._private.rscratch;
            a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? t.drag.push(a) : t.nondrag.push(a);
        }
        for(var r = 0; r < e.length; r++){
            var a = e[r];
            t.drag.push(a);
        }
    }
};
Vn.invalidateCachedZSortedEles = function() {
    this.cachedZSortedEles = null;
};
Vn.getCachedZSortedEles = function(t) {
    if (t || !this.cachedZSortedEles) {
        var e = /*#__PURE__*/ this.cy.mutableElements().toArray();
        e.sort(wu), e.interactive = /*#__PURE__*/ e.filter(function(r) {
            return r.interactive();
        }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
    } else e = this.cachedZSortedEles;
    return e;
};
var Fu = {};
[
    Sr,
    wn,
    vt,
    Na,
    Ki,
    qt,
    zu,
    Fn,
    Vn
].forEach(function(t) {
    he(Fu, t);
});
var Vu = {};
Vu.getCachedImage = function(t, e, r) {
    var a = this, n = a.imageCache = a.imageCache || {}, i = n[t];
    if (i) return i.image.complete || i.image.addEventListener("load", r), i.image;
    i = n[t] = n[t] || {};
    var s = i.image = new Image;
    s.addEventListener("load", r), s.addEventListener("error", function() {
        s.error = true;
    });
    var o = "data:", l = t.substring(0, o.length).toLowerCase() === o;
    return l || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = t, s;
};
var Qr = {};
Qr.registerBinding = function(t, e, r, a) {
    var n = /*#__PURE__*/ Array.prototype.slice.apply(arguments, [
        1
    ]);
    if (Array.isArray(t)) {
        for(var i = [], s = 0; s < t.length; s++){
            var o = t[s];
            if (o !== void 0) {
                var l = /*#__PURE__*/ this.binder(o);
                i.push(/*#__PURE__*/ l.on.apply(l, n));
            }
        }
        return i;
    }
    var l = /*#__PURE__*/ this.binder(t);
    return l.on.apply(l, n);
};
Qr.binder = function(t) {
    var e = this, r = /*#__PURE__*/ e.cy.window(), a = t === r || t === r.document || t === r.document.body || Al(t);
    if (e.supportsPassiveEvents == null) {
        var n = false;
        try {
            var i = /*#__PURE__*/ Object.defineProperty({}, "passive", {
                get: /*#__PURE__*/ m$1(function() {
                    return n = !0, !0;
                }, "get")
            });
            r.addEventListener("test", null, i);
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
            target: t,
            args: c
        }), (t.addEventListener || t.on).apply(t, c), this;
    }, "on");
    return {
        on: s,
        addEventListener: s,
        addListener: s,
        bind: s
    };
};
Qr.nodeIsDraggable = function(t) {
    return t && t.isNode() && !t.locked() && t.grabbable();
};
Qr.nodeIsGrabbable = function(t) {
    return this.nodeIsDraggable(t) && t.interactive();
};
Qr.load = function() {
    var t = this, e = /*#__PURE__*/ t.cy.window(), r = /*#__PURE__*/ m$1(function(k) {
        return k.selected();
    }, "isSelected"), a = /*#__PURE__*/ m$1(function(k) {
        var F = /*#__PURE__*/ k.getRootNode();
        if (F && F.nodeType === 11 && F.host !== void 0) return F;
    }, "getShadowRoot"), n = /*#__PURE__*/ m$1(function(k, F, X, V) {
        k == null && (k = t.cy);
        for(var G = 0; G < F.length; G++){
            var ne = F[G];
            k.emit({
                originalEvent: X,
                type: ne,
                position: V
            });
        }
    }, "triggerEvents"), i = /*#__PURE__*/ m$1(function(k) {
        return k.shiftKey || k.metaKey || k.ctrlKey;
    }, "isMultSelKeyDown"), s = /*#__PURE__*/ m$1(function(k, F) {
        var X = true;
        if (t.cy.hasCompoundNodes() && k && k.pannable()) for(var V = 0; F && V < F.length; V++){
            var k = F[V];
            if (k.isNode() && k.isParent() && !k.pannable()) {
                X = false;
                break;
            }
        }
        else X = true;
        return X;
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
    }, "removeGrabTarget"), g = /*#__PURE__*/ m$1(function(k, F) {
        var X = F.addToList, V = /*#__PURE__*/ X.has(k);
        !V && k.grabbable() && !k.locked() && (X.merge(k), o(k));
    }, "addToDragList"), h = /*#__PURE__*/ m$1(function(k, F) {
        if (k.cy().hasCompoundNodes() && !(F.inDragLayer == null && F.addToList == null)) {
            var X = /*#__PURE__*/ k.descendants();
            F.inDragLayer && (X.forEach(u), X.connectedEdges().forEach(u)), F.addToList && g(X, F);
        }
    }, "addDescendantsToDrag"), m = /*#__PURE__*/ m$1(function(k, F) {
        F = F || {};
        var X = /*#__PURE__*/ k.cy().hasCompoundNodes();
        F.inDragLayer && (k.forEach(u), k.neighborhood().stdFilter(function(V) {
            return !X || V.isEdge();
        }).forEach(u)), F.addToList && k.forEach(function(V) {
            g(V, F);
        }), h(k, F), b1(k, {
            inDragLayer: F.inDragLayer
        }), t.updateCachedGrabbedEles();
    }, "addNodesToDrag"), y = m, p = /*#__PURE__*/ m$1(function(k) {
        k && (t.getCachedZSortedEles().forEach(function(F) {
            l(F), f(F), d(F);
        }), t.updateCachedGrabbedEles());
    }, "freeDraggedElements"), b1 = /*#__PURE__*/ m$1(function(k, F) {
        if (!(F.inDragLayer == null && F.addToList == null) && k.cy().hasCompoundNodes()) {
            var X = /*#__PURE__*/ k.ancestors().orphans();
            if (!X.same(k)) {
                var V = /*#__PURE__*/ X.descendants().spawnSelf().merge(X).unmerge(k).unmerge(/*#__PURE__*/ k.descendants()), G = /*#__PURE__*/ V.connectedEdges();
                F.inDragLayer && (G.forEach(u), V.forEach(u)), F.addToList && V.forEach(function(ne) {
                    g(ne, F);
                });
            }
        }
    }, "updateAncestorsInDragLayer"), w = /*#__PURE__*/ m$1(function() {
        document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
    }, "blurActiveDomElement"), x = typeof MutationObserver < "u", S = typeof ResizeObserver < "u";
    x ? (t.removeObserver = new MutationObserver(function(j) {
        for(var k = 0; k < j.length; k++){
            var F = j[k], X = F.removedNodes;
            if (X) for(var V = 0; V < X.length; V++){
                var G = X[V];
                if (G === t.container) {
                    t.destroy();
                    break;
                }
            }
        }
    }), t.container.parentNode && t.removeObserver.observe(t.container.parentNode, {
        childList: true
    })) : t.registerBinding(t.container, "DOMNodeRemoved", function(j) {
        t.destroy();
    });
    var T = /*#__PURE__*/ Ma(function() {
        t.cy.resize();
    }, 100);
    x && (t.styleObserver = new MutationObserver(T), t.styleObserver.observe(t.container, {
        attributes: true
    })), t.registerBinding(e, "resize", T), S && (t.resizeObserver = new ResizeObserver(T), t.resizeObserver.observe(t.container));
    var E = /*#__PURE__*/ m$1(function(k, F) {
        for(; k != null;)F(k), k = k.parentNode;
    }, "forEachUp"), D = /*#__PURE__*/ m$1(function() {
        t.invalidateContainerClientCoordsCache();
    }, "invalidateCoords");
    E(t.container, function(j) {
        t.registerBinding(j, "transitionend", D), t.registerBinding(j, "animationend", D), t.registerBinding(j, "scroll", D);
    }), t.registerBinding(t.container, "contextmenu", function(j) {
        j.preventDefault();
    });
    var C = /*#__PURE__*/ m$1(function() {
        return t.selection[4] !== 0;
    }, "inBoxSelection"), B = /*#__PURE__*/ m$1(function(k) {
        for(var F = /*#__PURE__*/ t.findContainerClientCoords(), X = F[0], V = F[1], G = F[2], ne = F[3], _ = k.touches ? k.touches : [
            k
        ], ie = false, de = 0; de < _.length; de++){
            var Ee = _[de];
            if (X <= Ee.clientX && Ee.clientX <= X + G && V <= Ee.clientY && Ee.clientY <= V + ne) {
                ie = true;
                break;
            }
        }
        if (!ie) return false;
        for(var fe = t.container, we = k.target, xe = we.parentNode, pe = false; xe;){
            if (xe === fe) {
                pe = true;
                break;
            }
            xe = xe.parentNode;
        }
        return !!pe;
    }, "eventInContainer");
    t.registerBinding(t.container, "mousedown", /*#__PURE__*/ m$1(function(k) {
        if (B(k) && !(t.hoverData.which === 1 && k.which !== 1)) {
            k.preventDefault(), w(), t.hoverData.capture = true, t.hoverData.which = k.which;
            var F = t.cy, X = [
                k.clientX,
                k.clientY
            ], V = /*#__PURE__*/ t.projectIntoViewport(X[0], X[1]), G = t.selection, ne = /*#__PURE__*/ t.findNearestElements(V[0], V[1], true, false), _ = ne[0], ie = t.dragData.possibleDragElements;
            t.hoverData.mdownPos = V, t.hoverData.mdownGPos = X;
            var de = /*#__PURE__*/ m$1(function() {
                t.hoverData.tapholdCancelled = false, clearTimeout(t.hoverData.tapholdTimeout), t.hoverData.tapholdTimeout = /*#__PURE__*/ setTimeout(function() {
                    if (!t.hoverData.tapholdCancelled) {
                        var Ne = t.hoverData.down;
                        Ne ? Ne.emit({
                            originalEvent: k,
                            type: "taphold",
                            position: {
                                x: V[0],
                                y: V[1]
                            }
                        }) : F.emit({
                            originalEvent: k,
                            type: "taphold",
                            position: {
                                x: V[0],
                                y: V[1]
                            }
                        });
                    }
                }, t.tapholdDuration);
            }, "checkForTaphold");
            if (k.which == 3) {
                t.hoverData.cxtStarted = true;
                var Ee = {
                    originalEvent: k,
                    type: "cxttapstart",
                    position: {
                        x: V[0],
                        y: V[1]
                    }
                };
                _ ? (_.activate(), _.emit(Ee), t.hoverData.down = _) : F.emit(Ee), t.hoverData.downTime = /*#__PURE__*/ new Date().getTime(), t.hoverData.cxtDragged = false;
            } else if (k.which == 1) {
                _ && _.activate();
                {
                    if (_ != null && t.nodeIsGrabbable(_)) {
                        var fe = /*#__PURE__*/ m$1(function(Ne) {
                            return {
                                originalEvent: k,
                                type: Ne,
                                position: {
                                    x: V[0],
                                    y: V[1]
                                }
                            };
                        }, "makeEvent"), we = /*#__PURE__*/ m$1(function(Ne) {
                            Ne.emit(/*#__PURE__*/ fe("grab"));
                        }, "triggerGrab");
                        if (c(_), !_.selected()) ie = t.dragData.possibleDragElements = /*#__PURE__*/ F.collection(), y(_, {
                            addToList: ie
                        }), _.emit(/*#__PURE__*/ fe("grabon")).emit(/*#__PURE__*/ fe("grab"));
                        else {
                            ie = t.dragData.possibleDragElements = /*#__PURE__*/ F.collection();
                            var xe = /*#__PURE__*/ F.$(function(pe) {
                                return pe.isNode() && pe.selected() && t.nodeIsGrabbable(pe);
                            });
                            m(xe, {
                                addToList: ie
                            }), _.emit(/*#__PURE__*/ fe("grabon")), xe.forEach(we);
                        }
                        t.redrawHint("eles", true), t.redrawHint("drag", true);
                    }
                    t.hoverData.down = _, t.hoverData.downs = ne, t.hoverData.downTime = /*#__PURE__*/ new Date().getTime();
                }
                n(_, [
                    "mousedown",
                    "tapstart",
                    "vmousedown"
                ], k, {
                    x: V[0],
                    y: V[1]
                }), _ == null ? (G[4] = 1, t.data.bgActivePosistion = {
                    x: V[0],
                    y: V[1]
                }, t.redrawHint("select", true), t.redraw()) : _.pannable() && (G[4] = 1), de();
            }
            G[0] = G[2] = V[0], G[1] = G[3] = V[1];
        }
    }, "mousedownHandler"), false);
    var A = /*#__PURE__*/ a(t.container);
    t.registerBinding([
        e,
        A
    ], "mousemove", /*#__PURE__*/ m$1(function(k) {
        var F = t.hoverData.capture;
        if (!(!F && !B(k))) {
            var X = false, V = t.cy, G = /*#__PURE__*/ V.zoom(), ne = [
                k.clientX,
                k.clientY
            ], _ = /*#__PURE__*/ t.projectIntoViewport(ne[0], ne[1]), ie = t.hoverData.mdownPos, de = t.hoverData.mdownGPos, Ee = t.selection, fe = null;
            !t.hoverData.draggingEles && !t.hoverData.dragging && !t.hoverData.selecting && (fe = /*#__PURE__*/ t.findNearestElement(_[0], _[1], true, false));
            var we = t.hoverData.last, xe = t.hoverData.down, pe = [
                _[0] - Ee[2],
                _[1] - Ee[3]
            ], Ne = t.dragData.possibleDragElements, qe;
            if (de) {
                var mt = ne[0] - de[0], bt = mt * mt, He = ne[1] - de[1], Ze = He * He, Qe = bt + Ze;
                t.hoverData.isOverThresholdDrag = qe = Qe >= t.desktopTapThreshold2;
            }
            var ft = /*#__PURE__*/ i(k);
            qe && (t.hoverData.tapholdCancelled = true);
            var ct = /*#__PURE__*/ m$1(function() {
                var It = t.hoverData.dragDelta = t.hoverData.dragDelta || [];
                It.length === 0 ? (It.push(pe[0]), It.push(pe[1])) : (It[0] += pe[0], It[1] += pe[1]);
            }, "updateDragDelta");
            X = true, n(fe, [
                "mousemove",
                "vmousemove",
                "tapdrag"
            ], k, {
                x: _[0],
                y: _[1]
            });
            var Mt = /*#__PURE__*/ m$1(function() {
                t.data.bgActivePosistion = void 0, t.hoverData.selecting || V.emit({
                    originalEvent: k,
                    type: "boxstart",
                    position: {
                        x: _[0],
                        y: _[1]
                    }
                }), Ee[4] = 1, t.hoverData.selecting = true, t.redrawHint("select", true), t.redraw();
            }, "goIntoBoxMode");
            if (t.hoverData.which === 3) {
                if (qe) {
                    var Tt = {
                        originalEvent: k,
                        type: "cxtdrag",
                        position: {
                            x: _[0],
                            y: _[1]
                        }
                    };
                    xe ? xe.emit(Tt) : V.emit(Tt), t.hoverData.cxtDragged = true, (!t.hoverData.cxtOver || fe !== t.hoverData.cxtOver) && (t.hoverData.cxtOver && t.hoverData.cxtOver.emit({
                        originalEvent: k,
                        type: "cxtdragout",
                        position: {
                            x: _[0],
                            y: _[1]
                        }
                    }), t.hoverData.cxtOver = fe, fe && fe.emit({
                        originalEvent: k,
                        type: "cxtdragover",
                        position: {
                            x: _[0],
                            y: _[1]
                        }
                    }));
                }
            } else if (t.hoverData.dragging) {
                if (X = true, V.panningEnabled() && V.userPanningEnabled()) {
                    var Lt;
                    if (t.hoverData.justStartedPan) {
                        var Kt = t.hoverData.mdownPos;
                        Lt = {
                            x: (_[0] - Kt[0]) * G,
                            y: (_[1] - Kt[1]) * G
                        }, t.hoverData.justStartedPan = false;
                    } else Lt = {
                        x: pe[0] * G,
                        y: pe[1] * G
                    };
                    V.panBy(Lt), V.emit("dragpan"), t.hoverData.dragged = true;
                }
                _ = /*#__PURE__*/ t.projectIntoViewport(k.clientX, k.clientY);
            } else if (Ee[4] == 1 && (xe == null || xe.pannable())) {
                if (qe) {
                    if (!t.hoverData.dragging && V.boxSelectionEnabled() && (ft || !V.panningEnabled() || !V.userPanningEnabled())) Mt();
                    else if (!t.hoverData.selecting && V.panningEnabled() && V.userPanningEnabled()) {
                        var Gt = /*#__PURE__*/ s(xe, t.hoverData.downs);
                        Gt && (t.hoverData.dragging = true, t.hoverData.justStartedPan = true, Ee[4] = 0, t.data.bgActivePosistion = /*#__PURE__*/ Lr(ie), t.redrawHint("select", true), t.redraw());
                    }
                    xe && xe.pannable() && xe.active() && xe.unactivate();
                }
            } else {
                if (xe && xe.pannable() && xe.active() && xe.unactivate(), (!xe || !xe.grabbed()) && fe != we && (we && n(we, [
                    "mouseout",
                    "tapdragout"
                ], k, {
                    x: _[0],
                    y: _[1]
                }), fe && n(fe, [
                    "mouseover",
                    "tapdragover"
                ], k, {
                    x: _[0],
                    y: _[1]
                }), t.hoverData.last = fe), xe) if (qe) {
                    if (V.boxSelectionEnabled() && ft) xe && xe.grabbed() && (p(Ne), xe.emit("freeon"), Ne.emit("free"), t.dragData.didDrag && (xe.emit("dragfreeon"), Ne.emit("dragfree"))), Mt();
                    else if (xe && xe.grabbed() && t.nodeIsDraggable(xe)) {
                        var it = !t.dragData.didDrag;
                        it && t.redrawHint("eles", true), t.dragData.didDrag = true, t.hoverData.draggingEles || m(Ne, {
                            inDragLayer: true
                        });
                        var Je = {
                            x: 0,
                            y: 0
                        };
                        if (ae(pe[0]) && ae(pe[1]) && (Je.x += pe[0], Je.y += pe[1], it)) {
                            var gt = t.hoverData.dragDelta;
                            gt && ae(gt[0]) && ae(gt[1]) && (Je.x += gt[0], Je.y += gt[1]);
                        }
                        t.hoverData.draggingEles = true, Ne.silentShift(Je).emit("position drag"), t.redrawHint("drag", true), t.redraw();
                    }
                } else ct();
                X = true;
            }
            if (Ee[2] = _[0], Ee[3] = _[1], X) return k.stopPropagation && k.stopPropagation(), k.preventDefault && k.preventDefault(), false;
        }
    }, "mousemoveHandler"), false);
    var P, M, R;
    t.registerBinding(e, "mouseup", /*#__PURE__*/ m$1(function(k) {
        if (!(t.hoverData.which === 1 && k.which !== 1 && t.hoverData.capture)) {
            var F = t.hoverData.capture;
            if (F) {
                t.hoverData.capture = false;
                var X = t.cy, V = /*#__PURE__*/ t.projectIntoViewport(k.clientX, k.clientY), G = t.selection, ne = /*#__PURE__*/ t.findNearestElement(V[0], V[1], true, false), _ = t.dragData.possibleDragElements, ie = t.hoverData.down, de = /*#__PURE__*/ i(k);
                if (t.data.bgActivePosistion && (t.redrawHint("select", true), t.redraw()), t.hoverData.tapholdCancelled = true, t.data.bgActivePosistion = void 0, ie && ie.unactivate(), t.hoverData.which === 3) {
                    var Ee = {
                        originalEvent: k,
                        type: "cxttapend",
                        position: {
                            x: V[0],
                            y: V[1]
                        }
                    };
                    if (ie ? ie.emit(Ee) : X.emit(Ee), !t.hoverData.cxtDragged) {
                        var fe = {
                            originalEvent: k,
                            type: "cxttap",
                            position: {
                                x: V[0],
                                y: V[1]
                            }
                        };
                        ie ? ie.emit(fe) : X.emit(fe);
                    }
                    t.hoverData.cxtDragged = false, t.hoverData.which = null;
                } else if (t.hoverData.which === 1) {
                    if (n(ne, [
                        "mouseup",
                        "tapend",
                        "vmouseup"
                    ], k, {
                        x: V[0],
                        y: V[1]
                    }), !t.dragData.didDrag && !t.hoverData.dragged && !t.hoverData.selecting && !t.hoverData.isOverThresholdDrag && (n(ie, [
                        "click",
                        "tap",
                        "vclick"
                    ], k, {
                        x: V[0],
                        y: V[1]
                    }), M = false, k.timeStamp - R <= X.multiClickDebounceTime() ? (P && clearTimeout(P), M = true, R = null, n(ie, [
                        "dblclick",
                        "dbltap",
                        "vdblclick"
                    ], k, {
                        x: V[0],
                        y: V[1]
                    })) : (P = /*#__PURE__*/ setTimeout(function() {
                        M || n(ie, [
                            "oneclick",
                            "onetap",
                            "voneclick"
                        ], k, {
                            x: V[0],
                            y: V[1]
                        });
                    }, /*#__PURE__*/ X.multiClickDebounceTime()), R = k.timeStamp)), ie == null && !t.dragData.didDrag && !t.hoverData.selecting && !t.hoverData.dragged && !i(k) && (X.$(r).unselect([
                        "tapunselect"
                    ]), _.length > 0 && t.redrawHint("eles", true), t.dragData.possibleDragElements = _ = /*#__PURE__*/ X.collection()), ne == ie && !t.dragData.didDrag && !t.hoverData.selecting && ne != null && ne._private.selectable && (t.hoverData.dragging || (X.selectionType() === "additive" || de ? ne.selected() ? ne.unselect([
                        "tapunselect"
                    ]) : ne.select([
                        "tapselect"
                    ]) : de || (X.$(r).unmerge(ne).unselect([
                        "tapunselect"
                    ]), ne.select([
                        "tapselect"
                    ]))), t.redrawHint("eles", true)), t.hoverData.selecting) {
                        var we = /*#__PURE__*/ X.collection(/*#__PURE__*/ t.getAllInBox(G[0], G[1], G[2], G[3]));
                        t.redrawHint("select", true), we.length > 0 && t.redrawHint("eles", true), X.emit({
                            type: "boxend",
                            originalEvent: k,
                            position: {
                                x: V[0],
                                y: V[1]
                            }
                        });
                        var xe = /*#__PURE__*/ m$1(function(qe) {
                            return qe.selectable() && !qe.selected();
                        }, "eleWouldBeSelected");
                        X.selectionType() === "additive" || de || X.$(r).unmerge(we).unselect(), we.emit("box").stdFilter(xe).select().emit("boxselect"), t.redraw();
                    }
                    if (t.hoverData.dragging && (t.hoverData.dragging = false, t.redrawHint("select", true), t.redrawHint("eles", true), t.redraw()), !G[4]) {
                        t.redrawHint("drag", true), t.redrawHint("eles", true);
                        var pe = ie && ie.grabbed();
                        p(_), pe && (ie.emit("freeon"), _.emit("free"), t.dragData.didDrag && (ie.emit("dragfreeon"), _.emit("dragfree")));
                    }
                }
                G[4] = 0, t.hoverData.down = null, t.hoverData.cxtStarted = false, t.hoverData.draggingEles = false, t.hoverData.selecting = false, t.hoverData.isOverThresholdDrag = false, t.dragData.didDrag = false, t.hoverData.dragged = false, t.hoverData.dragDelta = [], t.hoverData.mdownPos = null, t.hoverData.mdownGPos = null, t.hoverData.which = null;
            }
        }
    }, "mouseupHandler"), false);
    var I = /*#__PURE__*/ m$1(function(k) {
        if (!t.scrollingPage) {
            var F = t.cy, X = /*#__PURE__*/ F.zoom(), V = /*#__PURE__*/ F.pan(), G = /*#__PURE__*/ t.projectIntoViewport(k.clientX, k.clientY), ne = [
                G[0] * X + V.x,
                G[1] * X + V.y
            ];
            if (t.hoverData.draggingEles || t.hoverData.dragging || t.hoverData.cxtStarted || C()) {
                k.preventDefault();
                return;
            }
            if (F.panningEnabled() && F.userPanningEnabled() && F.zoomingEnabled() && F.userZoomingEnabled()) {
                k.preventDefault(), t.data.wheelZooming = true, clearTimeout(t.data.wheelTimeout), t.data.wheelTimeout = /*#__PURE__*/ setTimeout(function() {
                    t.data.wheelZooming = false, t.redrawHint("eles", true), t.redraw();
                }, 150);
                var _;
                k.deltaY != null ? _ = k.deltaY / -250 : k.wheelDeltaY != null ? _ = k.wheelDeltaY / 1e3 : _ = k.wheelDelta / 1e3, _ = _ * t.wheelSensitivity;
                var ie = k.deltaMode === 1;
                ie && (_ *= 33);
                var de = F.zoom() * Math.pow(10, _);
                k.type === "gesturechange" && (de = t.gestureStartZoom * k.scale), F.zoom({
                    level: de,
                    renderedPosition: {
                        x: ne[0],
                        y: ne[1]
                    }
                }), F.emit(k.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
            }
        }
    }, "wheelHandler");
    t.registerBinding(t.container, "wheel", I, true), t.registerBinding(e, "scroll", /*#__PURE__*/ m$1(function(k) {
        t.scrollingPage = true, clearTimeout(t.scrollingPageTimeout), t.scrollingPageTimeout = /*#__PURE__*/ setTimeout(function() {
            t.scrollingPage = false;
        }, 250);
    }, "scrollHandler"), true), t.registerBinding(t.container, "gesturestart", /*#__PURE__*/ m$1(function(k) {
        t.gestureStartZoom = /*#__PURE__*/ t.cy.zoom(), t.hasTouchStarted || k.preventDefault();
    }, "gestureStartHandler"), true), t.registerBinding(t.container, "gesturechange", function(j) {
        t.hasTouchStarted || I(j);
    }, true), t.registerBinding(t.container, "mouseout", /*#__PURE__*/ m$1(function(k) {
        var F = /*#__PURE__*/ t.projectIntoViewport(k.clientX, k.clientY);
        t.cy.emit({
            originalEvent: k,
            type: "mouseout",
            position: {
                x: F[0],
                y: F[1]
            }
        });
    }, "mouseOutHandler"), false), t.registerBinding(t.container, "mouseover", /*#__PURE__*/ m$1(function(k) {
        var F = /*#__PURE__*/ t.projectIntoViewport(k.clientX, k.clientY);
        t.cy.emit({
            originalEvent: k,
            type: "mouseover",
            position: {
                x: F[0],
                y: F[1]
            }
        });
    }, "mouseOverHandler"), false);
    var L, O, N, $, H, q, K, Y, Z, J, Q, ee, re, W = /*#__PURE__*/ m$1(function(k, F, X, V) {
        return Math.sqrt((X - k) * (X - k) + (V - F) * (V - F));
    }, "distance"), z = /*#__PURE__*/ m$1(function(k, F, X, V) {
        return (X - k) * (X - k) + (V - F) * (V - F);
    }, "distanceSq"), U;
    t.registerBinding(t.container, "touchstart", U = /*#__PURE__*/ m$1(function(k) {
        if (t.hasTouchStarted = true, !!B(k)) {
            w(), t.touchData.capture = true, t.data.bgActivePosistion = void 0;
            var F = t.cy, X = t.touchData.now, V = t.touchData.earlier;
            if (k.touches[0]) {
                var G = /*#__PURE__*/ t.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
                X[0] = G[0], X[1] = G[1];
            }
            if (k.touches[1]) {
                var G = /*#__PURE__*/ t.projectIntoViewport(k.touches[1].clientX, k.touches[1].clientY);
                X[2] = G[0], X[3] = G[1];
            }
            if (k.touches[2]) {
                var G = /*#__PURE__*/ t.projectIntoViewport(k.touches[2].clientX, k.touches[2].clientY);
                X[4] = G[0], X[5] = G[1];
            }
            if (k.touches[1]) {
                t.touchData.singleTouchMoved = true, p(t.dragData.touchDragEles);
                var ne = /*#__PURE__*/ t.findContainerClientCoords();
                Z = ne[0], J = ne[1], Q = ne[2], ee = ne[3], L = k.touches[0].clientX - Z, O = k.touches[0].clientY - J, N = k.touches[1].clientX - Z, $ = k.touches[1].clientY - J, re = 0 <= L && L <= Q && 0 <= N && N <= Q && 0 <= O && O <= ee && 0 <= $ && $ <= ee;
                var _ = /*#__PURE__*/ F.pan(), ie = /*#__PURE__*/ F.zoom();
                H = /*#__PURE__*/ W(L, O, N, $), q = /*#__PURE__*/ z(L, O, N, $), K = [
                    (L + N) / 2,
                    (O + $) / 2
                ], Y = [
                    (K[0] - _.x) / ie,
                    (K[1] - _.y) / ie
                ];
                var de = 200, Ee = de * de;
                if (q < Ee && !k.touches[2]) {
                    var fe = /*#__PURE__*/ t.findNearestElement(X[0], X[1], true, true), we = /*#__PURE__*/ t.findNearestElement(X[2], X[3], true, true);
                    fe && fe.isNode() ? (fe.activate().emit({
                        originalEvent: k,
                        type: "cxttapstart",
                        position: {
                            x: X[0],
                            y: X[1]
                        }
                    }), t.touchData.start = fe) : we && we.isNode() ? (we.activate().emit({
                        originalEvent: k,
                        type: "cxttapstart",
                        position: {
                            x: X[0],
                            y: X[1]
                        }
                    }), t.touchData.start = we) : F.emit({
                        originalEvent: k,
                        type: "cxttapstart",
                        position: {
                            x: X[0],
                            y: X[1]
                        }
                    }), t.touchData.start && (t.touchData.start._private.grabbed = false), t.touchData.cxt = true, t.touchData.cxtDragged = false, t.data.bgActivePosistion = void 0, t.redraw();
                    return;
                }
            }
            if (k.touches[2]) F.boxSelectionEnabled() && k.preventDefault();
            else if (!k.touches[1]) {
                if (k.touches[0]) {
                    var xe = /*#__PURE__*/ t.findNearestElements(X[0], X[1], true, true), pe = xe[0];
                    if (pe != null && (pe.activate(), t.touchData.start = pe, t.touchData.starts = xe, t.nodeIsGrabbable(pe))) {
                        var Ne = t.dragData.touchDragEles = /*#__PURE__*/ F.collection(), qe = null;
                        t.redrawHint("eles", true), t.redrawHint("drag", true), pe.selected() ? (qe = /*#__PURE__*/ F.$(function(Qe) {
                            return Qe.selected() && t.nodeIsGrabbable(Qe);
                        }), m(qe, {
                            addToList: Ne
                        })) : y(pe, {
                            addToList: Ne
                        }), c(pe);
                        var mt = /*#__PURE__*/ m$1(function(ft) {
                            return {
                                originalEvent: k,
                                type: ft,
                                position: {
                                    x: X[0],
                                    y: X[1]
                                }
                            };
                        }, "makeEvent");
                        pe.emit(/*#__PURE__*/ mt("grabon")), qe ? qe.forEach(function(Qe) {
                            Qe.emit(/*#__PURE__*/ mt("grab"));
                        }) : pe.emit(/*#__PURE__*/ mt("grab"));
                    }
                    n(pe, [
                        "touchstart",
                        "tapstart",
                        "vmousedown"
                    ], k, {
                        x: X[0],
                        y: X[1]
                    }), pe == null && (t.data.bgActivePosistion = {
                        x: G[0],
                        y: G[1]
                    }, t.redrawHint("select", true), t.redraw()), t.touchData.singleTouchMoved = false, t.touchData.singleTouchStartTime = +new Date, clearTimeout(t.touchData.tapholdTimeout), t.touchData.tapholdTimeout = /*#__PURE__*/ setTimeout(function() {
                        t.touchData.singleTouchMoved === false && !t.pinching && !t.touchData.selecting && n(t.touchData.start, [
                            "taphold"
                        ], k, {
                            x: X[0],
                            y: X[1]
                        });
                    }, t.tapholdDuration);
                }
            }
            if (k.touches.length >= 1) {
                for(var bt = t.touchData.startPosition = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ], He = 0; He < X.length; He++)bt[He] = V[He] = X[He];
                var Ze = k.touches[0];
                t.touchData.startGPosition = [
                    Ze.clientX,
                    Ze.clientY
                ];
            }
        }
    }, "touchstartHandler"), false);
    var te;
    t.registerBinding(e, "touchmove", te = /*#__PURE__*/ m$1(function(k) {
        var F = t.touchData.capture;
        if (!(!F && !B(k))) {
            var X = t.selection, V = t.cy, G = t.touchData.now, ne = t.touchData.earlier, _ = /*#__PURE__*/ V.zoom();
            if (k.touches[0]) {
                var ie = /*#__PURE__*/ t.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
                G[0] = ie[0], G[1] = ie[1];
            }
            if (k.touches[1]) {
                var ie = /*#__PURE__*/ t.projectIntoViewport(k.touches[1].clientX, k.touches[1].clientY);
                G[2] = ie[0], G[3] = ie[1];
            }
            if (k.touches[2]) {
                var ie = /*#__PURE__*/ t.projectIntoViewport(k.touches[2].clientX, k.touches[2].clientY);
                G[4] = ie[0], G[5] = ie[1];
            }
            var de = t.touchData.startGPosition, Ee;
            if (F && k.touches[0] && de) {
                for(var fe = [], we = 0; we < G.length; we++)fe[we] = G[we] - ne[we];
                var xe = k.touches[0].clientX - de[0], pe = xe * xe, Ne = k.touches[0].clientY - de[1], qe = Ne * Ne, mt = pe + qe;
                Ee = mt >= t.touchTapThreshold2;
            }
            if (F && t.touchData.cxt) {
                k.preventDefault();
                var bt = k.touches[0].clientX - Z, He = k.touches[0].clientY - J, Ze = k.touches[1].clientX - Z, Qe = k.touches[1].clientY - J, ft = /*#__PURE__*/ z(bt, He, Ze, Qe), ct = ft / q, Mt = 150, Tt = Mt * Mt, Lt = 1.5, Kt = Lt * Lt;
                if (ct >= Kt || ft >= Tt) {
                    t.touchData.cxt = false, t.data.bgActivePosistion = void 0, t.redrawHint("select", true);
                    var Gt = {
                        originalEvent: k,
                        type: "cxttapend",
                        position: {
                            x: G[0],
                            y: G[1]
                        }
                    };
                    t.touchData.start ? (t.touchData.start.unactivate().emit(Gt), t.touchData.start = null) : V.emit(Gt);
                }
            }
            if (F && t.touchData.cxt) {
                var Gt = {
                    originalEvent: k,
                    type: "cxtdrag",
                    position: {
                        x: G[0],
                        y: G[1]
                    }
                };
                t.data.bgActivePosistion = void 0, t.redrawHint("select", true), t.touchData.start ? t.touchData.start.emit(Gt) : V.emit(Gt), t.touchData.start && (t.touchData.start._private.grabbed = false), t.touchData.cxtDragged = true;
                var it = /*#__PURE__*/ t.findNearestElement(G[0], G[1], true, true);
                (!t.touchData.cxtOver || it !== t.touchData.cxtOver) && (t.touchData.cxtOver && t.touchData.cxtOver.emit({
                    originalEvent: k,
                    type: "cxtdragout",
                    position: {
                        x: G[0],
                        y: G[1]
                    }
                }), t.touchData.cxtOver = it, it && it.emit({
                    originalEvent: k,
                    type: "cxtdragover",
                    position: {
                        x: G[0],
                        y: G[1]
                    }
                }));
            } else if (F && k.touches[2] && V.boxSelectionEnabled()) k.preventDefault(), t.data.bgActivePosistion = void 0, this.lastThreeTouch = +new Date, t.touchData.selecting || V.emit({
                originalEvent: k,
                type: "boxstart",
                position: {
                    x: G[0],
                    y: G[1]
                }
            }), t.touchData.selecting = true, t.touchData.didSelect = true, X[4] = 1, !X || X.length === 0 || X[0] === void 0 ? (X[0] = (G[0] + G[2] + G[4]) / 3, X[1] = (G[1] + G[3] + G[5]) / 3, X[2] = (G[0] + G[2] + G[4]) / 3 + 1, X[3] = (G[1] + G[3] + G[5]) / 3 + 1) : (X[2] = (G[0] + G[2] + G[4]) / 3, X[3] = (G[1] + G[3] + G[5]) / 3), t.redrawHint("select", true), t.redraw();
            else if (F && k.touches[1] && !t.touchData.didSelect && V.zoomingEnabled() && V.panningEnabled() && V.userZoomingEnabled() && V.userPanningEnabled()) {
                k.preventDefault(), t.data.bgActivePosistion = void 0, t.redrawHint("select", true);
                var Je = t.dragData.touchDragEles;
                if (Je) {
                    t.redrawHint("drag", true);
                    for(var gt = 0; gt < Je.length; gt++){
                        var Va = Je[gt]._private;
                        Va.grabbed = false, Va.rscratch.inDragLayer = false;
                    }
                }
                var It = t.touchData.start, bt = k.touches[0].clientX - Z, He = k.touches[0].clientY - J, Ze = k.touches[1].clientX - Z, Qe = k.touches[1].clientY - J, Ui = /*#__PURE__*/ W(bt, He, Ze, Qe), ll = Ui / H;
                if (re) {
                    var vl = bt - L, fl = He - O, cl = Ze - N, dl = Qe - $, hl = (vl + cl) / 2, gl = (fl + dl) / 2, ea = /*#__PURE__*/ V.zoom(), qn = ea * ll, qa = /*#__PURE__*/ V.pan(), Xi = Y[0] * ea + qa.x, Yi = Y[1] * ea + qa.y, pl = {
                        x: -qn / ea * (Xi - qa.x - hl) + Xi,
                        y: -qn / ea * (Yi - qa.y - gl) + Yi
                    };
                    if (It && It.active()) {
                        var Je = t.dragData.touchDragEles;
                        p(Je), t.redrawHint("drag", true), t.redrawHint("eles", true), It.unactivate().emit("freeon"), Je.emit("free"), t.dragData.didDrag && (It.emit("dragfreeon"), Je.emit("dragfree"));
                    }
                    V.viewport({
                        zoom: qn,
                        pan: pl,
                        cancelOnFailedZoom: true
                    }), V.emit("pinchzoom"), H = Ui, L = bt, O = He, N = Ze, $ = Qe, t.pinching = true;
                }
                if (k.touches[0]) {
                    var ie = /*#__PURE__*/ t.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
                    G[0] = ie[0], G[1] = ie[1];
                }
                if (k.touches[1]) {
                    var ie = /*#__PURE__*/ t.projectIntoViewport(k.touches[1].clientX, k.touches[1].clientY);
                    G[2] = ie[0], G[3] = ie[1];
                }
                if (k.touches[2]) {
                    var ie = /*#__PURE__*/ t.projectIntoViewport(k.touches[2].clientX, k.touches[2].clientY);
                    G[4] = ie[0], G[5] = ie[1];
                }
            } else if (k.touches[0] && !t.touchData.didSelect) {
                var kt = t.touchData.start, $n = t.touchData.last, it;
                if (!t.hoverData.draggingEles && !t.swipePanning && (it = /*#__PURE__*/ t.findNearestElement(G[0], G[1], true, true)), F && kt != null && k.preventDefault(), F && kt != null && t.nodeIsDraggable(kt)) if (Ee) {
                    var Je = t.dragData.touchDragEles, _i = !t.dragData.didDrag;
                    _i && m(Je, {
                        inDragLayer: true
                    }), t.dragData.didDrag = true;
                    var ta = {
                        x: 0,
                        y: 0
                    };
                    if (ae(fe[0]) && ae(fe[1]) && (ta.x += fe[0], ta.y += fe[1], _i)) {
                        t.redrawHint("eles", true);
                        var Pt = t.touchData.dragDelta;
                        Pt && ae(Pt[0]) && ae(Pt[1]) && (ta.x += Pt[0], ta.y += Pt[1]);
                    }
                    t.hoverData.draggingEles = true, Je.silentShift(ta).emit("position drag"), t.redrawHint("drag", true), t.touchData.startPosition[0] == ne[0] && t.touchData.startPosition[1] == ne[1] && t.redrawHint("eles", true), t.redraw();
                } else {
                    var Pt = t.touchData.dragDelta = t.touchData.dragDelta || [];
                    Pt.length === 0 ? (Pt.push(fe[0]), Pt.push(fe[1])) : (Pt[0] += fe[0], Pt[1] += fe[1]);
                }
                if (n(kt || it, [
                    "touchmove",
                    "tapdrag",
                    "vmousemove"
                ], k, {
                    x: G[0],
                    y: G[1]
                }), (!kt || !kt.grabbed()) && it != $n && ($n && $n.emit({
                    originalEvent: k,
                    type: "tapdragout",
                    position: {
                        x: G[0],
                        y: G[1]
                    }
                }), it && it.emit({
                    originalEvent: k,
                    type: "tapdragover",
                    position: {
                        x: G[0],
                        y: G[1]
                    }
                })), t.touchData.last = it, F) for(var gt = 0; gt < G.length; gt++)G[gt] && t.touchData.startPosition[gt] && Ee && (t.touchData.singleTouchMoved = true);
                if (F && (kt == null || kt.pannable()) && V.panningEnabled() && V.userPanningEnabled()) {
                    var yl = /*#__PURE__*/ s(kt, t.touchData.starts);
                    yl && (k.preventDefault(), t.data.bgActivePosistion || (t.data.bgActivePosistion = /*#__PURE__*/ Lr(t.touchData.startPosition)), t.swipePanning ? (V.panBy({
                        x: fe[0] * _,
                        y: fe[1] * _
                    }), V.emit("dragpan")) : Ee && (t.swipePanning = true, V.panBy({
                        x: xe * _,
                        y: Ne * _
                    }), V.emit("dragpan"), kt && (kt.unactivate(), t.redrawHint("select", true), t.touchData.start = null)));
                    var ie = /*#__PURE__*/ t.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
                    G[0] = ie[0], G[1] = ie[1];
                }
            }
            for(var we = 0; we < G.length; we++)ne[we] = G[we];
            F && k.touches.length > 0 && !t.hoverData.draggingEles && !t.swipePanning && t.data.bgActivePosistion != null && (t.data.bgActivePosistion = void 0, t.redrawHint("select", true), t.redraw());
        }
    }, "touchmoveHandler"), false);
    var se;
    t.registerBinding(e, "touchcancel", se = /*#__PURE__*/ m$1(function(k) {
        var F = t.touchData.start;
        t.touchData.capture = false, F && F.unactivate();
    }, "touchcancelHandler"));
    var le, Se, Me, Le;
    if (t.registerBinding(e, "touchend", le = /*#__PURE__*/ m$1(function(k) {
        var F = t.touchData.start, X = t.touchData.capture;
        if (X) k.touches.length === 0 && (t.touchData.capture = false), k.preventDefault();
        else return;
        var V = t.selection;
        t.swipePanning = false, t.hoverData.draggingEles = false;
        var G = t.cy, ne = /*#__PURE__*/ G.zoom(), _ = t.touchData.now, ie = t.touchData.earlier;
        if (k.touches[0]) {
            var de = /*#__PURE__*/ t.projectIntoViewport(k.touches[0].clientX, k.touches[0].clientY);
            _[0] = de[0], _[1] = de[1];
        }
        if (k.touches[1]) {
            var de = /*#__PURE__*/ t.projectIntoViewport(k.touches[1].clientX, k.touches[1].clientY);
            _[2] = de[0], _[3] = de[1];
        }
        if (k.touches[2]) {
            var de = /*#__PURE__*/ t.projectIntoViewport(k.touches[2].clientX, k.touches[2].clientY);
            _[4] = de[0], _[5] = de[1];
        }
        F && F.unactivate();
        var Ee;
        if (t.touchData.cxt) {
            if (Ee = {
                originalEvent: k,
                type: "cxttapend",
                position: {
                    x: _[0],
                    y: _[1]
                }
            }, F ? F.emit(Ee) : G.emit(Ee), !t.touchData.cxtDragged) {
                var fe = {
                    originalEvent: k,
                    type: "cxttap",
                    position: {
                        x: _[0],
                        y: _[1]
                    }
                };
                F ? F.emit(fe) : G.emit(fe);
            }
            t.touchData.start && (t.touchData.start._private.grabbed = false), t.touchData.cxt = false, t.touchData.start = null, t.redraw();
            return;
        }
        if (!k.touches[2] && G.boxSelectionEnabled() && t.touchData.selecting) {
            t.touchData.selecting = false;
            var we = /*#__PURE__*/ G.collection(/*#__PURE__*/ t.getAllInBox(V[0], V[1], V[2], V[3]));
            V[0] = void 0, V[1] = void 0, V[2] = void 0, V[3] = void 0, V[4] = 0, t.redrawHint("select", true), G.emit({
                type: "boxend",
                originalEvent: k,
                position: {
                    x: _[0],
                    y: _[1]
                }
            });
            var xe = /*#__PURE__*/ m$1(function(Tt) {
                return Tt.selectable() && !Tt.selected();
            }, "eleWouldBeSelected");
            we.emit("box").stdFilter(xe).select().emit("boxselect"), we.nonempty() && t.redrawHint("eles", true), t.redraw();
        }
        if (F?.unactivate(), k.touches[2]) t.data.bgActivePosistion = void 0, t.redrawHint("select", true);
        else if (!k.touches[1]) {
            if (!k.touches[0]) {
                if (!k.touches[0]) {
                    t.data.bgActivePosistion = void 0, t.redrawHint("select", true);
                    var pe = t.dragData.touchDragEles;
                    if (F != null) {
                        var Ne = F._private.grabbed;
                        p(pe), t.redrawHint("drag", true), t.redrawHint("eles", true), Ne && (F.emit("freeon"), pe.emit("free"), t.dragData.didDrag && (F.emit("dragfreeon"), pe.emit("dragfree"))), n(F, [
                            "touchend",
                            "tapend",
                            "vmouseup",
                            "tapdragout"
                        ], k, {
                            x: _[0],
                            y: _[1]
                        }), F.unactivate(), t.touchData.start = null;
                    } else {
                        var qe = /*#__PURE__*/ t.findNearestElement(_[0], _[1], true, true);
                        n(qe, [
                            "touchend",
                            "tapend",
                            "vmouseup",
                            "tapdragout"
                        ], k, {
                            x: _[0],
                            y: _[1]
                        });
                    }
                    var mt = t.touchData.startPosition[0] - _[0], bt = mt * mt, He = t.touchData.startPosition[1] - _[1], Ze = He * He, Qe = bt + Ze, ft = Qe * ne * ne;
                    t.touchData.singleTouchMoved || (F || G.$(":selected").unselect([
                        "tapunselect"
                    ]), n(F, [
                        "tap",
                        "vclick"
                    ], k, {
                        x: _[0],
                        y: _[1]
                    }), Se = false, k.timeStamp - Le <= G.multiClickDebounceTime() ? (Me && clearTimeout(Me), Se = true, Le = null, n(F, [
                        "dbltap",
                        "vdblclick"
                    ], k, {
                        x: _[0],
                        y: _[1]
                    })) : (Me = /*#__PURE__*/ setTimeout(function() {
                        Se || n(F, [
                            "onetap",
                            "voneclick"
                        ], k, {
                            x: _[0],
                            y: _[1]
                        });
                    }, /*#__PURE__*/ G.multiClickDebounceTime()), Le = k.timeStamp)), F != null && !t.dragData.didDrag && F._private.selectable && ft < t.touchTapThreshold2 && !t.pinching && (G.selectionType() === "single" ? (G.$(r).unmerge(F).unselect([
                        "tapunselect"
                    ]), F.select([
                        "tapselect"
                    ])) : F.selected() ? F.unselect([
                        "tapunselect"
                    ]) : F.select([
                        "tapselect"
                    ]), t.redrawHint("eles", true)), t.touchData.singleTouchMoved = true;
                }
            }
        }
        for(var ct = 0; ct < _.length; ct++)ie[ct] = _[ct];
        t.dragData.didDrag = false, k.touches.length === 0 && (t.touchData.dragDelta = [], t.touchData.startPosition = [
            null,
            null,
            null,
            null,
            null,
            null
        ], t.touchData.startGPosition = null, t.touchData.didSelect = false), k.touches.length < 2 && (k.touches.length === 1 && (t.touchData.startGPosition = [
            k.touches[0].clientX,
            k.touches[0].clientY
        ]), t.pinching = false, t.redrawHint("eles", true), t.redraw());
    }, "touchendHandler"), false), typeof TouchEvent > "u") {
        var ve = [], ue = /*#__PURE__*/ m$1(function(k) {
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
        }, "makeTouch"), ye = /*#__PURE__*/ m$1(function(k) {
            return {
                event: k,
                touch: /*#__PURE__*/ ue(k)
            };
        }, "makePointer"), me = /*#__PURE__*/ m$1(function(k) {
            ve.push(/*#__PURE__*/ ye(k));
        }, "addPointer"), ge = /*#__PURE__*/ m$1(function(k) {
            for(var F = 0; F < ve.length; F++){
                var X = ve[F];
                if (X.event.pointerId === k.pointerId) {
                    ve.splice(F, 1);
                    return;
                }
            }
        }, "removePointer"), be = /*#__PURE__*/ m$1(function(k) {
            var F = ve.filter(function(X) {
                return X.event.pointerId === k.pointerId;
            })[0];
            F.event = k, F.touch = /*#__PURE__*/ ue(k);
        }, "updatePointer"), Te = /*#__PURE__*/ m$1(function(k) {
            k.touches = /*#__PURE__*/ ve.map(function(F) {
                return F.touch;
            });
        }, "addTouchesToEvent"), De = /*#__PURE__*/ m$1(function(k) {
            return k.pointerType === "mouse" || k.pointerType === 4;
        }, "pointerIsMouse");
        t.registerBinding(t.container, "pointerdown", function(j) {
            De(j) || (j.preventDefault(), me(j), Te(j), U(j));
        }), t.registerBinding(t.container, "pointerup", function(j) {
            De(j) || (ge(j), Te(j), le(j));
        }), t.registerBinding(t.container, "pointercancel", function(j) {
            De(j) || (ge(j), Te(j), se(j));
        }), t.registerBinding(t.container, "pointermove", function(j) {
            De(j) || (j.preventDefault(), be(j), Te(j), te(j));
        });
    }
};
var Yt = {};
Yt.generatePolygon = function(t, e) {
    return this.nodeShapes[t] = {
        renderer: this,
        name: t,
        points: e,
        draw: /*#__PURE__*/ m$1(function(a, n, i, s, o, l) {
            this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u, f) {
            return Ta(o, l, this.points, a, n, i / 2, s / 2, u);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u, f) {
            return Ut(a, n, this.points, l, u, s, o, [
                0,
                -1
            ], i);
        }, "checkPoint")
    };
};
Yt.generateEllipse = function() {
    return this.nodeShapes.ellipse = {
        renderer: this,
        name: "ellipse",
        draw: /*#__PURE__*/ m$1(function(e, r, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            return Tf(i, s, e, r, a / 2 + o, n / 2 + o);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            return mr(e, r, n, i, s, o, a);
        }, "checkPoint")
    };
};
Yt.generateRoundPolygon = function(t, e) {
    return this.nodeShapes[t] = {
        renderer: this,
        name: t,
        points: e,
        getOrCreateCorners: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u) {
            if (l[u] !== void 0 && l[u + "-cx"] === a && l[u + "-cy"] === n) return l[u];
            l[u] = new Array(e.length / 2), l[u + "-cx"] = a, l[u + "-cy"] = n;
            var f = i / 2, c = s / 2;
            o = o === "auto" ? Ko(i, s) : o;
            for(var d = new Array(e.length / 2), g = 0; g < e.length / 2; g++)d[g] = {
                x: a + f * e[g * 2],
                y: n + c * e[g * 2 + 1]
            };
            var h, m, y, p, b1 = d.length;
            for(m = d[b1 - 1], h = 0; h < b1; h++)y = d[h % b1], p = d[(h + 1) % b1], l[u][h] = /*#__PURE__*/ $i(m, y, p, o), m = y, y = p;
            return l[u];
        }, "getOrCreateCorners"),
        draw: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u) {
            this.renderer.nodeShapeImpl("round-polygon", a, n, i, s, o, this.points, /*#__PURE__*/ this.getOrCreateCorners(n, i, s, o, l, u, "drawCorners"));
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u, f, c) {
            return Cf(o, l, this.points, a, n, i, s, u, /*#__PURE__*/ this.getOrCreateCorners(a, n, i, s, f, c, "corners"));
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(a, n, i, s, o, l, u, f, c) {
            return Ef(a, n, this.points, l, u, s, o, /*#__PURE__*/ this.getOrCreateCorners(l, u, s, o, f, c, "corners"));
        }, "checkPoint")
    };
};
Yt.generateRoundRectangle = function() {
    return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
        renderer: this,
        name: "round-rectangle",
        points: /*#__PURE__*/ dt(4, 0),
        draw: /*#__PURE__*/ m$1(function(e, r, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, this.points, s);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            return qo(i, s, e, r, a, n, o, l);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            var u = n / 2, f = i / 2;
            l = l === "auto" ? xr(n, i) : l, l = /*#__PURE__*/ Math.min(u, f, l);
            var c = l * 2;
            return !!(Ut(e, r, this.points, s, o, n, i - c, [
                0,
                -1
            ], a) || Ut(e, r, this.points, s, o, n - c, i, [
                0,
                -1
            ], a) || mr(e, r, c, c, s - u + l, o - f + l, a) || mr(e, r, c, c, s + u - l, o - f + l, a) || mr(e, r, c, c, s + u - l, o + f - l, a) || mr(e, r, c, c, s - u + l, o + f - l, a));
        }, "checkPoint")
    };
};
Yt.generateCutRectangle = function() {
    return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
        renderer: this,
        name: "cut-rectangle",
        cornerLength: /*#__PURE__*/ Bi(),
        points: /*#__PURE__*/ dt(4, 0),
        draw: /*#__PURE__*/ m$1(function(e, r, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, null, s);
        }, "draw"),
        generateCutTrianglePts: /*#__PURE__*/ m$1(function(e, r, a, n, i) {
            var s = i === "auto" ? this.cornerLength : i, o = r / 2, l = e / 2, u = a - l, f = a + l, c = n - o, d = n + o;
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
        intersectLine: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            var u = /*#__PURE__*/ this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, r, l), f = /*#__PURE__*/ [].concat.apply([], [
                /*#__PURE__*/ u.topLeft.splice(0, 4),
                /*#__PURE__*/ u.topRight.splice(0, 4),
                /*#__PURE__*/ u.bottomRight.splice(0, 4),
                /*#__PURE__*/ u.bottomLeft.splice(0, 4)
            ]);
            return Ta(i, s, f, e, r);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            var u = l === "auto" ? this.cornerLength : l;
            if (Ut(e, r, this.points, s, o, n, i - 2 * u, [
                0,
                -1
            ], a) || Ut(e, r, this.points, s, o, n - 2 * u, i, [
                0,
                -1
            ], a)) return true;
            var f = /*#__PURE__*/ this.generateCutTrianglePts(n, i, s, o);
            return pt(e, r, f.topLeft) || pt(e, r, f.topRight) || pt(e, r, f.bottomRight) || pt(e, r, f.bottomLeft);
        }, "checkPoint")
    };
};
Yt.generateBarrel = function() {
    return this.nodeShapes.barrel = {
        renderer: this,
        name: "barrel",
        points: /*#__PURE__*/ dt(4, 0),
        draw: /*#__PURE__*/ m$1(function(e, r, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            var u = .15, f = .5, c = .85, d = /*#__PURE__*/ this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, r), g = /*#__PURE__*/ m$1(function(y) {
                var p = /*#__PURE__*/ Or({
                    x: y[0],
                    y: y[1]
                }, {
                    x: y[2],
                    y: y[3]
                }, {
                    x: y[4],
                    y: y[5]
                }, u), b1 = /*#__PURE__*/ Or({
                    x: y[0],
                    y: y[1]
                }, {
                    x: y[2],
                    y: y[3]
                }, {
                    x: y[4],
                    y: y[5]
                }, f), w = /*#__PURE__*/ Or({
                    x: y[0],
                    y: y[1]
                }, {
                    x: y[2],
                    y: y[3]
                }, {
                    x: y[4],
                    y: y[5]
                }, c);
                return [
                    y[0],
                    y[1],
                    p.x,
                    p.y,
                    b1.x,
                    b1.y,
                    w.x,
                    w.y,
                    y[4],
                    y[5]
                ];
            }, "approximateBarrelCurvePts"), h = /*#__PURE__*/ [].concat(/*#__PURE__*/ g(d.topLeft), /*#__PURE__*/ g(d.topRight), /*#__PURE__*/ g(d.bottomRight), /*#__PURE__*/ g(d.bottomLeft));
            return Ta(i, s, h, e, r);
        }, "intersectLine"),
        generateBarrelBezierPts: /*#__PURE__*/ m$1(function(e, r, a, n) {
            var i = r / 2, s = e / 2, o = a - s, l = a + s, u = n - i, f = n + i, c = /*#__PURE__*/ si(e, r), d = c.heightOffset, g = c.widthOffset, h = c.ctrlPtOffsetPct * e, m = {
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
        checkPoint: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            var u = /*#__PURE__*/ si(n, i), f = u.heightOffset, c = u.widthOffset;
            if (Ut(e, r, this.points, s, o, n, i - 2 * f, [
                0,
                -1
            ], a) || Ut(e, r, this.points, s, o, n - 2 * c, i, [
                0,
                -1
            ], a)) return true;
            for(var d = /*#__PURE__*/ this.generateBarrelBezierPts(n, i, s, o), g = /*#__PURE__*/ m$1(function(D, C, B) {
                var A = B[4], P = B[2], M = B[0], R = B[5], I = B[1], L = /*#__PURE__*/ Math.min(A, M), O = /*#__PURE__*/ Math.max(A, M), N = /*#__PURE__*/ Math.min(R, I), $ = /*#__PURE__*/ Math.max(R, I);
                if (L <= D && D <= O && N <= C && C <= $) {
                    var H = /*#__PURE__*/ Sf(A, P, M), q = /*#__PURE__*/ mf(H[0], H[1], H[2], D), K = /*#__PURE__*/ q.filter(function(Y) {
                        return 0 <= Y && Y <= 1;
                    });
                    if (K.length > 0) return K[0];
                }
                return null;
            }, "getCurveT"), h = /*#__PURE__*/ Object.keys(d), m = 0; m < h.length; m++){
                var y = h[m], p = d[y], b1 = /*#__PURE__*/ g(e, r, p);
                if (b1 != null) {
                    var w = p[5], x = p[3], S = p[1], T = /*#__PURE__*/ je(w, x, S, b1);
                    if (p.isTop && T <= r || p.isBottom && r <= T) return true;
                }
            }
            return false;
        }, "checkPoint")
    };
};
Yt.generateBottomRoundrectangle = function() {
    return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
        renderer: this,
        name: "bottom-round-rectangle",
        points: /*#__PURE__*/ dt(4, 0),
        draw: /*#__PURE__*/ m$1(function(e, r, a, n, i, s) {
            this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, this.points, s);
        }, "draw"),
        intersectLine: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            var u = e - (a / 2 + o), f = r - (n / 2 + o), c = f, d = e + (a / 2 + o), g = /*#__PURE__*/ jt(i, s, e, r, u, f, d, c, false);
            return g.length > 0 ? g : qo(i, s, e, r, a, n, o, l);
        }, "intersectLine"),
        checkPoint: /*#__PURE__*/ m$1(function(e, r, a, n, i, s, o, l) {
            l = l === "auto" ? xr(n, i) : l;
            var u = 2 * l;
            if (Ut(e, r, this.points, s, o, n, i - u, [
                0,
                -1
            ], a) || Ut(e, r, this.points, s, o, n - u, i, [
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
            return !!(pt(e, r, d) || mr(e, r, u, u, s + n / 2 - l, o + i / 2 - l, a) || mr(e, r, u, u, s - n / 2 + l, o + i / 2 - l, a));
        }, "checkPoint")
    };
};
Yt.registerNodeShapes = function() {
    var t = this.nodeShapes = {}, e = this;
    this.generateEllipse(), this.generatePolygon("triangle", /*#__PURE__*/ dt(3, 0)), this.generateRoundPolygon("round-triangle", /*#__PURE__*/ dt(3, 0)), this.generatePolygon("rectangle", /*#__PURE__*/ dt(4, 0)), t.square = t.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
    {
        var r = [
            0,
            1,
            1,
            0,
            0,
            -1,
            -1,
            0
        ];
        this.generatePolygon("diamond", r), this.generateRoundPolygon("round-diamond", r);
    }
    this.generatePolygon("pentagon", /*#__PURE__*/ dt(5, 0)), this.generateRoundPolygon("round-pentagon", /*#__PURE__*/ dt(5, 0)), this.generatePolygon("hexagon", /*#__PURE__*/ dt(6, 0)), this.generateRoundPolygon("round-hexagon", /*#__PURE__*/ dt(6, 0)), this.generatePolygon("heptagon", /*#__PURE__*/ dt(7, 0)), this.generateRoundPolygon("round-heptagon", /*#__PURE__*/ dt(7, 0)), this.generatePolygon("octagon", /*#__PURE__*/ dt(8, 0)), this.generateRoundPolygon("round-octagon", /*#__PURE__*/ dt(8, 0));
    var a = new Array(20);
    {
        var n = /*#__PURE__*/ ii(5, 0), i = /*#__PURE__*/ ii(5, Math.PI / 5), s = .5 * (3 - Math.sqrt(5));
        s *= 1.57;
        for(var o = 0; o < i.length / 2; o++)i[o * 2] *= s, i[o * 2 + 1] *= s;
        for(var o = 0; o < 20 / 4; o++)a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
    }
    a = /*#__PURE__*/ $o(a), this.generatePolygon("star", a), this.generatePolygon("vee", [
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
    t.makePolygon = function(u) {
        var f = /*#__PURE__*/ u.join("$"), c = "polygon-" + f, d;
        return (d = this[c]) ? d : e.generatePolygon(c, u);
    };
};
var za = {};
za.timeToRender = function() {
    return this.redrawTotalTime / this.redrawCount;
};
za.redraw = function(t) {
    t = t || Oo();
    var e = this;
    e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = true, e.renderOptions = t;
};
za.beforeRender = function(t, e) {
    if (!this.destroyed) {
        e == null && $e("Priority is not optional for beforeRender");
        var r = this.beforeRenderCallbacks;
        r.push({
            fn: t,
            priority: e
        }), r.sort(function(a, n) {
            return n.priority - a.priority;
        });
    }
};
var eo = /*#__PURE__*/ m$1(function(e, r, a) {
    for(var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)n[i].fn(r, a);
}, "beforeRenderCallbacks");
za.startRenderLoop = function() {
    var t = this, e = t.cy;
    if (!t.renderLoopStarted) {
        t.renderLoopStarted = true;
        var r = /*#__PURE__*/ m$1(function a(n) {
            if (!t.destroyed) {
                if (!e.batching()) if (t.requestedFrame && !t.skipFrame) {
                    eo(t, true, n);
                    var i = /*#__PURE__*/ Ht();
                    t.render(t.renderOptions);
                    var s = t.lastDrawTime = /*#__PURE__*/ Ht();
                    t.averageRedrawTime === void 0 && (t.averageRedrawTime = s - i), t.redrawCount === void 0 && (t.redrawCount = 0), t.redrawCount++, t.redrawTotalTime === void 0 && (t.redrawTotalTime = 0);
                    var o = s - i;
                    t.redrawTotalTime += o, t.lastRedrawTime = o, t.averageRedrawTime = t.averageRedrawTime / 2 + o / 2, t.requestedFrame = false;
                } else eo(t, false, n);
                t.skipFrame = false, cn(a);
            }
        }, "renderFn");
        cn(r);
    }
};
var sp = /*#__PURE__*/ m$1(function(e) {
    this.init(e);
}, "BaseRenderer"), qu = sp, Jr = qu.prototype;
Jr.clientFunctions = [
    "redrawHint",
    "render",
    "renderTo",
    "matchCanvasSize",
    "nodeShapeImpl",
    "arrowShapeImpl"
];
Jr.init = function(t) {
    var e = this;
    e.options = t, e.cy = t.cy;
    var r = e.container = /*#__PURE__*/ t.cy.container(), a = /*#__PURE__*/ e.cy.window();
    if (a) {
        var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", l = n.getElementById(s) != null;
        if (r.className.indexOf(o) < 0 && (r.className = (r.className || "") + " " + o), !l) {
            var u = /*#__PURE__*/ n.createElement("style");
            u.id = s, u.textContent = "." + o + " { position: relative; }", i.insertBefore(u, i.children[0]);
        }
        var f = /*#__PURE__*/ a.getComputedStyle(r), c = /*#__PURE__*/ f.getPropertyValue("position");
        c === "static" && Re("A Cytoscape container has style position:static and so can not use UI extensions properly");
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
    }, e.redraws = 0, e.showFps = t.showFps, e.debug = t.debug, e.webgl = t.webgl, e.hideEdgesOnViewport = t.hideEdgesOnViewport, e.textureOnViewport = t.textureOnViewport, e.wheelSensitivity = t.wheelSensitivity, e.motionBlurEnabled = t.motionBlur, e.forcedPixelRatio = ae(t.pixelRatio) ? t.pixelRatio : null, e.motionBlur = t.motionBlur, e.motionBlurOpacity = t.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = false, e.clearedForMotionBlur = [], e.desktopTapThreshold = t.desktopTapThreshold, e.desktopTapThreshold2 = t.desktopTapThreshold * t.desktopTapThreshold, e.touchTapThreshold = t.touchTapThreshold, e.touchTapThreshold2 = t.touchTapThreshold * t.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
        animations: 400,
        eleCalcs: 300,
        eleTxrDeq: 200,
        lyrTxrDeq: 150,
        lyrTxrSkip: 100
    }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
Jr.notify = function(t, e) {
    var r = this, a = r.cy;
    if (!this.destroyed) {
        if (t === "init") {
            r.load();
            return;
        }
        if (t === "destroy") {
            r.destroy();
            return;
        }
        (t === "add" || t === "remove" || t === "move" && a.hasCompoundNodes() || t === "load" || t === "zorder" || t === "mount") && r.invalidateCachedZSortedEles(), t === "viewport" && r.redrawHint("select", true), t === "gc" && r.redrawHint("gc", true), (t === "load" || t === "resize" || t === "mount") && (r.invalidateContainerClientCoordsCache(), r.matchCanvasSize(r.container)), r.redrawHint("eles", true), r.redrawHint("drag", true), this.startRenderLoop(), this.redraw();
    }
};
Jr.destroy = function() {
    var t = this;
    t.destroyed = true, t.cy.stopAnimationLoop();
    for(var e = 0; e < t.bindings.length; e++){
        var r = t.bindings[e], a = r, n = a.target;
        (n.off || n.removeEventListener).apply(n, a.args);
    }
    if (t.bindings = [], t.beforeRenderCallbacks = [], t.onUpdateEleCalcsFns = [], t.removeObserver && t.removeObserver.disconnect(), t.styleObserver && t.styleObserver.disconnect(), t.resizeObserver && t.resizeObserver.disconnect(), t.labelCalcDiv) try {
        document.body.removeChild(t.labelCalcDiv);
    } catch  {}
};
Jr.isHeadless = function() {
    return false;
};
[
    qi,
    Fu,
    Vu,
    Qr,
    Yt,
    za
].forEach(function(t) {
    he(Jr, t);
});
var Jn = 1e3 / 60, $u = {
    setupDequeueing: /*#__PURE__*/ m$1(function(e) {
        return m$1(function() {
            var a = this, n = this.renderer;
            if (!a.dequeueingSetup) {
                a.dequeueingSetup = true;
                var i = /*#__PURE__*/ Ma(function() {
                    n.redrawHint("eles", true), n.redrawHint("drag", true), n.redraw();
                }, e.deqRedrawThreshold), s = /*#__PURE__*/ m$1(function(u, f) {
                    var c = /*#__PURE__*/ Ht(), d = n.averageRedrawTime, g = n.lastRedrawTime, h = [], m = /*#__PURE__*/ n.cy.extent(), y = /*#__PURE__*/ n.getPixelRatio();
                    for(u || n.flushRenderedStyleQueue();;){
                        var p = /*#__PURE__*/ Ht(), b1 = p - c, w = p - f;
                        if (g < Jn) {
                            var x = Jn - (u ? d : 0);
                            if (w >= e.deqFastCost * x) break;
                        } else if (u) {
                            if (b1 >= e.deqCost * g || b1 >= e.deqAvgCost * d) break;
                        } else if (w >= e.deqNoDrawCost * Jn) break;
                        var S = /*#__PURE__*/ e.deq(a, y, m);
                        if (S.length > 0) for(var T = 0; T < S.length; T++)h.push(S[T]);
                        else break;
                    }
                    h.length > 0 && (e.onDeqd(a, h), !u && e.shouldRedraw(a, h, y, m) && i());
                }, "dequeue"), o = e.priority || Si;
                n.beforeRender(s, /*#__PURE__*/ o(a));
            }
        }, "setupDequeueingImpl");
    }, "setupDequeueing")
}, op = /*#__PURE__*/ function() {
    function t(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dn;
        ur(this, t), this.idsByKey = new Ft, this.keyForId = new Ft, this.cachesByLvl = new Ft, this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = r;
    }
    return m$1(t, "ElementTextureCacheLookup"), lr(t, [
        {
            key: "getIdsFor",
            value: /*#__PURE__*/ m$1(function(r) {
                r == null && $e("Can not get id list for null key");
                var a = this.idsByKey, n = /*#__PURE__*/ this.idsByKey.get(r);
                return n || (n = new Wr, a.set(r, n)), n;
            }, "getIdsFor")
        },
        {
            key: "addIdForKey",
            value: /*#__PURE__*/ m$1(function(r, a) {
                r != null && this.getIdsFor(r).add(a);
            }, "addIdForKey")
        },
        {
            key: "deleteIdForKey",
            value: /*#__PURE__*/ m$1(function(r, a) {
                r != null && this.getIdsFor(r).delete(a);
            }, "deleteIdForKey")
        },
        {
            key: "getNumberOfIdsForKey",
            value: /*#__PURE__*/ m$1(function(r) {
                return r == null ? 0 : this.getIdsFor(r).size;
            }, "getNumberOfIdsForKey")
        },
        {
            key: "updateKeyMappingFor",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = /*#__PURE__*/ r.id(), n = /*#__PURE__*/ this.keyForId.get(a), i = /*#__PURE__*/ this.getKey(r);
                this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
            }, "updateKeyMappingFor")
        },
        {
            key: "deleteKeyMappingFor",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = /*#__PURE__*/ r.id(), n = /*#__PURE__*/ this.keyForId.get(a);
                this.deleteIdForKey(n, a), this.keyForId.delete(a);
            }, "deleteKeyMappingFor")
        },
        {
            key: "keyHasChangedFor",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = /*#__PURE__*/ r.id(), n = /*#__PURE__*/ this.keyForId.get(a), i = /*#__PURE__*/ this.getKey(r);
                return n !== i;
            }, "keyHasChangedFor")
        },
        {
            key: "isInvalid",
            value: /*#__PURE__*/ m$1(function(r) {
                return this.keyHasChangedFor(r) || this.doesEleInvalidateKey(r);
            }, "isInvalid")
        },
        {
            key: "getCachesAt",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = this.cachesByLvl, n = this.lvls, i = /*#__PURE__*/ a.get(r);
                return i || (i = new Ft, a.set(r, i), n.push(r)), i;
            }, "getCachesAt")
        },
        {
            key: "getCache",
            value: /*#__PURE__*/ m$1(function(r, a) {
                return this.getCachesAt(a).get(r);
            }, "getCache")
        },
        {
            key: "get",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = /*#__PURE__*/ this.getKey(r), i = /*#__PURE__*/ this.getCache(n, a);
                return i != null && this.updateKeyMappingFor(r), i;
            }, "get")
        },
        {
            key: "getForCachedKey",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = /*#__PURE__*/ this.keyForId.get(/*#__PURE__*/ r.id()), i = /*#__PURE__*/ this.getCache(n, a);
                return i;
            }, "getForCachedKey")
        },
        {
            key: "hasCache",
            value: /*#__PURE__*/ m$1(function(r, a) {
                return this.getCachesAt(a).has(r);
            }, "hasCache")
        },
        {
            key: "has",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = /*#__PURE__*/ this.getKey(r);
                return this.hasCache(n, a);
            }, "has")
        },
        {
            key: "setCache",
            value: /*#__PURE__*/ m$1(function(r, a, n) {
                n.key = r, this.getCachesAt(a).set(r, n);
            }, "setCache")
        },
        {
            key: "set",
            value: /*#__PURE__*/ m$1(function(r, a, n) {
                var i = /*#__PURE__*/ this.getKey(r);
                this.setCache(i, a, n), this.updateKeyMappingFor(r);
            }, "set")
        },
        {
            key: "deleteCache",
            value: /*#__PURE__*/ m$1(function(r, a) {
                this.getCachesAt(a).delete(r);
            }, "deleteCache")
        },
        {
            key: "delete",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = /*#__PURE__*/ this.getKey(r);
                this.deleteCache(n, a);
            }, "_delete")
        },
        {
            key: "invalidateKey",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = this;
                this.lvls.forEach(function(n) {
                    return a.deleteCache(r, n);
                });
            }, "invalidateKey")
        },
        {
            key: "invalidate",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = /*#__PURE__*/ r.id(), n = /*#__PURE__*/ this.keyForId.get(a);
                this.deleteKeyMappingFor(r);
                var i = /*#__PURE__*/ this.doesEleInvalidateKey(r);
                return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
            }, "invalidate")
        }
    ]), t;
}(), to = 25, Ja = 50, vn = -4, yi = 3, Ku = 7.99, up = 8, lp = 1024, vp = 1024, fp = 1024, cp = .2, dp = .8, hp = 10, gp = .15, pp = .1, yp = .9, mp = .9, bp = 100, wp = 1, Ir = {
    dequeue: "dequeue",
    downscale: "downscale",
    highQuality: "highQuality"
}, xp = /*#__PURE__*/ et({
    getKey: null,
    doesEleInvalidateKey: dn,
    drawElement: null,
    getBoundingBox: null,
    getRotationPoint: null,
    getRotationOffset: null,
    isVisible: Mo,
    allowEdgeTxrCaching: true,
    allowParentTxrCaching: true
}), da = /*#__PURE__*/ m$1(function(e, r) {
    var a = this;
    a.renderer = e, a.onDequeues = [];
    var n = /*#__PURE__*/ xp(r);
    he(a, n), a.lookup = new op(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, "ElementTextureCache"), _e = da.prototype;
_e.reasons = Ir;
_e.getTextureQueue = function(t) {
    var e = this;
    return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[t] = e.eleImgCaches[t] || [];
};
_e.getRetiredTextureQueue = function(t) {
    var e = this, r = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = r[t] = r[t] || [];
    return a;
};
_e.getElementQueue = function() {
    var t = this, e = t.eleCacheQueue = t.eleCacheQueue || new La(function(r, a) {
        return a.reqs - r.reqs;
    });
    return e;
};
_e.getElementKeyToQueue = function() {
    var t = this, e = t.eleKeyToCacheQueue = t.eleKeyToCacheQueue || {};
    return e;
};
_e.getElement = function(t, e, r, a, n) {
    var i = this, s = this.renderer, o = /*#__PURE__*/ s.cy.zoom(), l = this.lookup;
    if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !t.visible() || t.removed() || !i.allowEdgeTxrCaching && t.isEdge() || !i.allowParentTxrCaching && t.isParent()) return null;
    if (a == null && (a = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ ki(o * r))), a < vn) a = vn;
    else if (o >= Ku || a > yi) return null;
    var u = /*#__PURE__*/ Math.pow(2, a), f = e.h * u, c = e.w * u, d = /*#__PURE__*/ s.eleTextBiggerThanMin(t, u);
    if (!this.isVisible(t, d)) return null;
    var g = /*#__PURE__*/ l.get(t, a);
    if (g && g.invalidated && (g.invalidated = false, g.texture.invalidatedWidth -= g.width), g) return g;
    var h;
    if (f <= to ? h = to : f <= Ja ? h = Ja : h = Math.ceil(f / Ja) * Ja, f > fp || c > vp) return null;
    var m = /*#__PURE__*/ i.getTextureQueue(h), y = m[m.length - 2], p = /*#__PURE__*/ m$1(function() {
        return i.recycleTexture(h, c) || i.addTexture(h, c);
    }, "addNewTxr");
    y || (y = m[m.length - 1]), y || (y = /*#__PURE__*/ p()), y.width - y.usedWidth < c && (y = /*#__PURE__*/ p());
    for(var b1 = /*#__PURE__*/ m$1(function(L) {
        return L && L.scaledLabelShown === d;
    }, "scalableFrom"), w = n && n === Ir.dequeue, x = n && n === Ir.highQuality, S = n && n === Ir.downscale, T, E = a + 1; E <= yi; E++){
        var D = /*#__PURE__*/ l.get(t, E);
        if (D) {
            T = D;
            break;
        }
    }
    var C = T && T.level === a + 1 ? T : null, B = /*#__PURE__*/ m$1(function() {
        y.context.drawImage(C.texture.canvas, C.x, 0, C.width, C.height, y.usedWidth, 0, c, f);
    }, "downscale");
    if (y.context.setTransform(1, 0, 0, 1, 0, 0), y.context.clearRect(y.usedWidth, 0, c, h), b1(C)) B();
    else if (b1(T)) if (x) {
        for(var A = T.level; A > a; A--)C = /*#__PURE__*/ i.getElement(t, e, r, A, Ir.downscale);
        B();
    } else return i.queueElement(t, T.level - 1), T;
    else {
        var P;
        if (!w && !x && !S) for(var M = a - 1; M >= vn; M--){
            var R = /*#__PURE__*/ l.get(t, M);
            if (R) {
                P = R;
                break;
            }
        }
        if (b1(P)) return i.queueElement(t, a), P;
        y.context.translate(y.usedWidth, 0), y.context.scale(u, u), this.drawElement(y.context, t, e, d, false), y.context.scale(1 / u, 1 / u), y.context.translate(-y.usedWidth, 0);
    }
    return g = {
        x: y.usedWidth,
        texture: y,
        level: a,
        scale: u,
        width: c,
        height: f,
        scaledLabelShown: d
    }, y.usedWidth += /*#__PURE__*/ Math.ceil(c + up), y.eleCaches.push(g), l.set(t, a, g), i.checkTextureFullness(y), g;
};
_e.invalidateElements = function(t) {
    for(var e = 0; e < t.length; e++)this.invalidateElement(t[e]);
};
_e.invalidateElement = function(t) {
    var e = this, r = e.lookup, a = [], n = /*#__PURE__*/ r.isInvalid(t);
    if (n) {
        for(var i = vn; i <= yi; i++){
            var s = /*#__PURE__*/ r.getForCachedKey(t, i);
            s && a.push(s);
        }
        var o = /*#__PURE__*/ r.invalidate(t);
        if (o) for(var l = 0; l < a.length; l++){
            var u = a[l], f = u.texture;
            f.invalidatedWidth += u.width, u.invalidated = true, e.checkTextureUtility(f);
        }
        e.removeFromQueue(t);
    }
};
_e.checkTextureUtility = function(t) {
    t.invalidatedWidth >= cp * t.width && this.retireTexture(t);
};
_e.checkTextureFullness = function(t) {
    var e = this, r = /*#__PURE__*/ e.getTextureQueue(t.height);
    t.usedWidth / t.width > dp && t.fullnessChecks >= hp ? nr(r, t) : t.fullnessChecks++;
};
_e.retireTexture = function(t) {
    var e = this, r = t.height, a = /*#__PURE__*/ e.getTextureQueue(r), n = this.lookup;
    nr(a, t), t.retired = true;
    for(var i = t.eleCaches, s = 0; s < i.length; s++){
        var o = i[s];
        n.deleteCache(o.key, o.level);
    }
    Di(i);
    var l = /*#__PURE__*/ e.getRetiredTextureQueue(r);
    l.push(t);
};
_e.addTexture = function(t, e) {
    var r = this, a = /*#__PURE__*/ r.getTextureQueue(t), n = {};
    return a.push(n), n.eleCaches = [], n.height = t, n.width = /*#__PURE__*/ Math.max(lp, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = /*#__PURE__*/ r.renderer.makeOffscreenCanvas(n.width, n.height), n.context = /*#__PURE__*/ n.canvas.getContext("2d"), n;
};
_e.recycleTexture = function(t, e) {
    for(var r = this, a = /*#__PURE__*/ r.getTextureQueue(t), n = /*#__PURE__*/ r.getRetiredTextureQueue(t), i = 0; i < n.length; i++){
        var s = n[i];
        if (s.width >= e) return s.retired = false, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, Di(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), nr(n, s), a.push(s), s;
    }
};
_e.queueElement = function(t, e) {
    var r = this, a = /*#__PURE__*/ r.getElementQueue(), n = /*#__PURE__*/ r.getElementKeyToQueue(), i = /*#__PURE__*/ this.getKey(t), s = n[i];
    if (s) s.level = /*#__PURE__*/ Math.max(s.level, e), s.eles.merge(t), s.reqs++, a.updateItem(s);
    else {
        var o = {
            eles: /*#__PURE__*/ t.spawn().merge(t),
            level: e,
            reqs: 1,
            key: i
        };
        a.push(o), n[i] = o;
    }
};
_e.dequeue = function(t) {
    for(var e = this, r = /*#__PURE__*/ e.getElementQueue(), a = /*#__PURE__*/ e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < wp && r.size() > 0; s++){
        var o = /*#__PURE__*/ r.pop(), l = o.key, u = o.eles[0], f = /*#__PURE__*/ i.hasCache(u, o.level);
        if (a[l] = null, f) continue;
        n.push(o);
        var c = /*#__PURE__*/ e.getBoundingBox(u);
        e.getElement(u, c, t, o.level, Ir.dequeue);
    }
    return n;
};
_e.removeFromQueue = function(t) {
    var e = this, r = /*#__PURE__*/ e.getElementQueue(), a = /*#__PURE__*/ e.getElementKeyToQueue(), n = /*#__PURE__*/ this.getKey(t), i = a[n];
    i != null && (i.eles.length === 1 ? (i.reqs = Ci, r.updateItem(i), r.pop(), a[n] = null) : i.eles.unmerge(t));
};
_e.onDequeue = function(t) {
    this.onDequeues.push(t);
};
_e.offDequeue = function(t) {
    nr(this.onDequeues, t);
};
_e.setupDequeueing = /*#__PURE__*/ $u.setupDequeueing({
    deqRedrawThreshold: bp,
    deqCost: gp,
    deqAvgCost: pp,
    deqNoDrawCost: yp,
    deqFastCost: mp,
    deq: /*#__PURE__*/ m$1(function(e, r, a) {
        return e.dequeue(r, a);
    }, "deq"),
    onDeqd: /*#__PURE__*/ m$1(function(e, r) {
        for(var a = 0; a < e.onDequeues.length; a++){
            var n = e.onDequeues[a];
            n(r);
        }
    }, "onDeqd"),
    shouldRedraw: /*#__PURE__*/ m$1(function(e, r, a, n) {
        for(var i = 0; i < r.length; i++)for(var s = r[i].eles, o = 0; o < s.length; o++){
            var l = /*#__PURE__*/ s[o].boundingBox();
            if (Pi(l, n)) return true;
        }
        return false;
    }, "shouldRedraw"),
    priority: /*#__PURE__*/ m$1(function(e) {
        return e.renderer.beforeRenderPriorities.eleTxrDeq;
    }, "priority")
});
var Ep = 1, ga = -4, xn = 2, Tp = 3.99, Cp = 50, Sp = 50, Dp = .15, kp = .1, Pp = .9, Bp = .9, Ap = 1, ro = 250, Rp = 4e3 * 4e3, ao = 32767, Mp = true, Gu = /*#__PURE__*/ m$1(function(e) {
    var r = this, a = r.renderer = e, n = a.cy;
    r.layersByLevel = {}, r.firstGet = true, r.lastInvalidationTime = Ht() - 2 * ro, r.skipping = false, r.eleTxrDeqs = /*#__PURE__*/ n.collection(), r.scheduleElementRefinement = /*#__PURE__*/ Ma(function() {
        r.refineElementTextures(r.eleTxrDeqs), r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
    }, Sp), a.beforeRender(function(s, o) {
        o - r.lastInvalidationTime <= ro ? r.skipping = true : r.skipping = false;
    }, a.beforeRenderPriorities.lyrTxrSkip);
    var i = /*#__PURE__*/ m$1(function(o, l) {
        return l.reqs - o.reqs;
    }, "qSort");
    r.layersQueue = new La(i), r.setupDequeueing();
}, "LayeredTextureCache"), nt = Gu.prototype, no = 0, Lp = Math.pow(2, 53) - 1;
nt.makeLayer = function(t, e) {
    var r = /*#__PURE__*/ Math.pow(2, e), a = /*#__PURE__*/ Math.ceil(t.w * r), n = /*#__PURE__*/ Math.ceil(t.h * r), i = /*#__PURE__*/ this.renderer.makeOffscreenCanvas(a, n), s = {
        id: no = ++no % Lp,
        bb: t,
        level: e,
        width: a,
        height: n,
        canvas: i,
        context: /*#__PURE__*/ i.getContext("2d"),
        eles: [],
        elesQueue: [],
        reqs: 0
    }, o = s.context, l = -s.bb.x1, u = -s.bb.y1;
    return o.scale(r, r), o.translate(l, u), s;
};
nt.getLayers = function(t, e, r) {
    var a = this, n = a.renderer, i = n.cy, s = /*#__PURE__*/ i.zoom(), o = a.firstGet;
    if (a.firstGet = false, r == null) {
        if (r = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ ki(s * e)), r < ga) r = ga;
        else if (s >= Tp || r > xn) return null;
    }
    a.validateLayersElesOrdering(r, t);
    var l = a.layersByLevel, u = /*#__PURE__*/ Math.pow(2, r), f = l[r] = l[r] || [], c, d = /*#__PURE__*/ a.levelIsComplete(r, t), g, h = /*#__PURE__*/ m$1(function() {
        var B = /*#__PURE__*/ m$1(function(I) {
            if (a.validateLayersElesOrdering(I, t), a.levelIsComplete(I, t)) return g = l[I], true;
        }, "canUseAsTmpLvl"), A = /*#__PURE__*/ m$1(function(I) {
            if (!g) for(var L = r + I; ga <= L && L <= xn && !B(L); L += I);
        }, "checkLvls");
        A(1), A(-1);
        for(var P = f.length - 1; P >= 0; P--){
            var M = f[P];
            M.invalid && nr(f, M);
        }
    }, "checkTempLevels");
    if (!d) h();
    else return f;
    var m = /*#__PURE__*/ m$1(function() {
        if (!c) {
            c = /*#__PURE__*/ yt();
            for(var B = 0; B < t.length; B++)Fo(c, /*#__PURE__*/ t[B].boundingBox());
        }
        return c;
    }, "getBb"), y = /*#__PURE__*/ m$1(function(B) {
        B = B || {};
        var A = B.after;
        m();
        var P = /*#__PURE__*/ Math.ceil(c.w * u), M = /*#__PURE__*/ Math.ceil(c.h * u);
        if (P > ao || M > ao) return null;
        var R = P * M;
        if (R > Rp) return null;
        var I = /*#__PURE__*/ a.makeLayer(c, r);
        if (A != null) {
            var L = f.indexOf(A) + 1;
            f.splice(L, 0, I);
        } else (B.insert === void 0 || B.insert) && f.unshift(I);
        return I;
    }, "makeLayer");
    if (a.skipping && !o) return null;
    for(var p = null, b1 = t.length / Ep, w = !o, x = 0; x < t.length; x++){
        var S = t[x], T = S._private.rscratch, E = T.imgLayerCaches = T.imgLayerCaches || {}, D = E[r];
        if (D) {
            p = D;
            continue;
        }
        if ((!p || p.eles.length >= b1 || !Vo(p.bb, /*#__PURE__*/ S.boundingBox())) && (p = /*#__PURE__*/ y({
            insert: true,
            after: p
        }), !p)) return null;
        g || w ? a.queueLayer(p, S) : a.drawEleInLayer(p, S, r, e), p.eles.push(S), E[r] = p;
    }
    return g || (w ? null : f);
};
nt.getEleLevelForLayerLevel = function(t, e) {
    return t;
};
nt.drawEleInLayer = function(t, e, r, a) {
    var n = this, i = this.renderer, s = t.context, o = /*#__PURE__*/ e.boundingBox();
    o.w === 0 || o.h === 0 || !e.visible() || (r = /*#__PURE__*/ n.getEleLevelForLayerLevel(r, a), i.setImgSmoothing(s, false), i.drawCachedElement(s, e, null, null, r, Mp), i.setImgSmoothing(s, true));
};
nt.levelIsComplete = function(t, e) {
    var r = this, a = r.layersByLevel[t];
    if (!a || a.length === 0) return false;
    for(var n = 0, i = 0; i < a.length; i++){
        var s = a[i];
        if (s.reqs > 0 || s.invalid) return false;
        n += s.eles.length;
    }
    return n === e.length;
};
nt.validateLayersElesOrdering = function(t, e) {
    var r = this.layersByLevel[t];
    if (r) for(var a = 0; a < r.length; a++){
        for(var n = r[a], i = -1, s = 0; s < e.length; s++)if (n.eles[0] === e[s]) {
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
nt.updateElementsInLayers = function(t, e) {
    for(var r = this, a = /*#__PURE__*/ Aa(t[0]), n = 0; n < t.length; n++)for(var i = a ? null : t[n], s = a ? t[n] : t[n].ele, o = s._private.rscratch, l = o.imgLayerCaches = o.imgLayerCaches || {}, u = ga; u <= xn; u++){
        var f = l[u];
        f && (i && r.getEleLevelForLayerLevel(f.level) !== i.level || e(f, s, i));
    }
};
nt.haveLayers = function() {
    for(var t = this, e = false, r = ga; r <= xn; r++){
        var a = t.layersByLevel[r];
        if (a && a.length > 0) {
            e = true;
            break;
        }
    }
    return e;
};
nt.invalidateElements = function(t) {
    var e = this;
    t.length !== 0 && (e.lastInvalidationTime = /*#__PURE__*/ Ht(), !(t.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(t, /*#__PURE__*/ m$1(function(a, n, i) {
        e.invalidateLayer(a);
    }, "invalAssocLayers")));
};
nt.invalidateLayer = function(t) {
    if (this.lastInvalidationTime = /*#__PURE__*/ Ht(), !t.invalid) {
        var e = t.level, r = t.eles, a = this.layersByLevel[e];
        nr(a, t), t.elesQueue = [], t.invalid = true, t.replacement && (t.replacement.invalid = true);
        for(var n = 0; n < r.length; n++){
            var i = r[n]._private.rscratch.imgLayerCaches;
            i && (i[e] = null);
        }
    }
};
nt.refineElementTextures = function(t) {
    var e = this;
    e.updateElementsInLayers(t, /*#__PURE__*/ m$1(function(a, n, i) {
        var s = a.replacement;
        if (s || (s = a.replacement = /*#__PURE__*/ e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs) for(var o = 0; o < s.eles.length; o++)e.queueLayer(s, s.eles[o]);
    }, "refineEachEle"));
};
nt.enqueueElementRefinement = function(t) {
    this.eleTxrDeqs.merge(t), this.scheduleElementRefinement();
};
nt.queueLayer = function(t, e) {
    var r = this, a = r.layersQueue, n = t.elesQueue, i = n.hasId = n.hasId || {};
    if (!t.replacement) {
        if (e) {
            if (i[e.id()]) return;
            n.push(e), i[e.id()] = true;
        }
        t.reqs ? (t.reqs++, a.updateItem(t)) : (t.reqs = 1, a.push(t));
    }
};
nt.dequeue = function(t) {
    for(var e = this, r = e.layersQueue, a = [], n = 0; n < Ap && r.size() !== 0;){
        var i = /*#__PURE__*/ r.peek();
        if (i.replacement) {
            r.pop();
            continue;
        }
        if (i.replaces && i !== i.replaces.replacement) {
            r.pop();
            continue;
        }
        if (i.invalid) {
            r.pop();
            continue;
        }
        var s = /*#__PURE__*/ i.elesQueue.shift();
        s && (e.drawEleInLayer(i, s, i.level, t), n++), a.length === 0 && a.push(true), i.elesQueue.length === 0 && (r.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
    }
    return a;
};
nt.applyLayerReplacement = function(t) {
    var e = this, r = e.layersByLevel[t.level], a = t.replaces, n = /*#__PURE__*/ r.indexOf(a);
    if (!(n < 0 || a.invalid)) {
        r[n] = t;
        for(var i = 0; i < t.eles.length; i++){
            var s = t.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
            o && (o[t.level] = t);
        }
        e.requestRedraw();
    }
};
nt.requestRedraw = /*#__PURE__*/ Ma(function() {
    var t = this.renderer;
    t.redrawHint("eles", true), t.redrawHint("drag", true), t.redraw();
}, 100);
nt.setupDequeueing = /*#__PURE__*/ $u.setupDequeueing({
    deqRedrawThreshold: Cp,
    deqCost: Dp,
    deqAvgCost: kp,
    deqNoDrawCost: Pp,
    deqFastCost: Bp,
    deq: /*#__PURE__*/ m$1(function(e, r) {
        return e.dequeue(r);
    }, "deq"),
    onDeqd: Si,
    shouldRedraw: Mo,
    priority: /*#__PURE__*/ m$1(function(e) {
        return e.renderer.beforeRenderPriorities.lyrTxrDeq;
    }, "priority")
});
var Wu = {}, io;
function Ip(t, e) {
    for(var r = 0; r < e.length; r++){
        var a = e[r];
        t.lineTo(a.x, a.y);
    }
}
m$1(Ip, "polygon");
function Op(t, e, r) {
    for(var a, n = 0; n < e.length; n++){
        var i = e[n];
        n === 0 && (a = i), t.lineTo(i.x, i.y);
    }
    t.quadraticCurveTo(r.x, r.y, a.x, a.y);
}
m$1(Op, "triangleBackcurve");
function so(t, e, r) {
    t.beginPath && t.beginPath();
    for(var a = e, n = 0; n < a.length; n++){
        var i = a[n];
        t.lineTo(i.x, i.y);
    }
    var s = r, o = r[0];
    t.moveTo(o.x, o.y);
    for(var n = 1; n < s.length; n++){
        var i = s[n];
        t.lineTo(i.x, i.y);
    }
    t.closePath && t.closePath();
}
m$1(so, "triangleTee");
function Np(t, e, r, a, n) {
    t.beginPath && t.beginPath(), t.arc(r, a, n, 0, Math.PI * 2, false);
    var i = e, s = i[0];
    t.moveTo(s.x, s.y);
    for(var o = 0; o < i.length; o++){
        var l = i[o];
        t.lineTo(l.x, l.y);
    }
    t.closePath && t.closePath();
}
m$1(Np, "circleTriangle");
function zp(t, e, r, a) {
    t.arc(e, r, a, 0, Math.PI * 2, false);
}
m$1(zp, "circle");
Wu.arrowShapeImpl = function(t) {
    return (io || (io = {
        polygon: Ip,
        "triangle-backcurve": Op,
        "triangle-tee": so,
        "circle-triangle": Np,
        "triangle-cross": so,
        circle: zp
    }))[t];
};
var $t = {};
$t.drawElement = function(t, e, r, a, n, i) {
    var s = this;
    e.isNode() ? s.drawNode(t, e, r, a, n, i) : s.drawEdge(t, e, r, a, n, i);
};
$t.drawElementOverlay = function(t, e) {
    var r = this;
    e.isNode() ? r.drawNodeOverlay(t, e) : r.drawEdgeOverlay(t, e);
};
$t.drawElementUnderlay = function(t, e) {
    var r = this;
    e.isNode() ? r.drawNodeUnderlay(t, e) : r.drawEdgeUnderlay(t, e);
};
$t.drawCachedElementPortion = function(t, e, r, a, n, i, s, o) {
    var l = this, u = /*#__PURE__*/ r.getBoundingBox(e);
    if (!(u.w === 0 || u.h === 0)) {
        var f = /*#__PURE__*/ r.getElement(e, u, a, n, i);
        if (f != null) {
            var c = /*#__PURE__*/ o(l, e);
            if (c === 0) return;
            var d = /*#__PURE__*/ s(l, e), g = u.x1, h = u.y1, m = u.w, y = u.h, p, b1, w, x, S;
            if (d !== 0) {
                var T = /*#__PURE__*/ r.getRotationPoint(e);
                w = T.x, x = T.y, t.translate(w, x), t.rotate(d), S = /*#__PURE__*/ l.getImgSmoothing(t), S || l.setImgSmoothing(t, true);
                var E = /*#__PURE__*/ r.getRotationOffset(e);
                p = E.x, b1 = E.y;
            } else p = g, b1 = h;
            var D;
            c !== 1 && (D = t.globalAlpha, t.globalAlpha = D * c), t.drawImage(f.texture.canvas, f.x, 0, f.width, f.height, p, b1, m, y), c !== 1 && (t.globalAlpha = D), d !== 0 && (t.rotate(-d), t.translate(-w, -x), S || l.setImgSmoothing(t, false));
        } else r.drawElement(t, e);
    }
};
var Fp = /*#__PURE__*/ m$1(function() {
    return 0;
}, "getZeroRotation"), Vp = /*#__PURE__*/ m$1(function(e, r) {
    return e.getTextAngle(r, null);
}, "getLabelRotation"), qp = /*#__PURE__*/ m$1(function(e, r) {
    return e.getTextAngle(r, "source");
}, "getSourceLabelRotation"), $p = /*#__PURE__*/ m$1(function(e, r) {
    return e.getTextAngle(r, "target");
}, "getTargetLabelRotation"), Kp = /*#__PURE__*/ m$1(function(e, r) {
    return r.effectiveOpacity();
}, "getOpacity"), jn = /*#__PURE__*/ m$1(function(e, r) {
    return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
}, "getTextOpacity");
$t.drawCachedElement = function(t, e, r, a, n, i) {
    var s = this, o = s.data, l = o.eleTxrCache, u = o.lblTxrCache, f = o.slbTxrCache, c = o.tlbTxrCache, d = /*#__PURE__*/ e.boundingBox(), g = i === true ? l.reasons.highQuality : null;
    if (!(d.w === 0 || d.h === 0 || !e.visible()) && (!a || Pi(d, a))) {
        var h = /*#__PURE__*/ e.isEdge(), m = e.element()._private.rscratch.badLine;
        s.drawElementUnderlay(t, e), s.drawCachedElementPortion(t, e, l, r, n, g, Fp, Kp), (!h || !m) && s.drawCachedElementPortion(t, e, u, r, n, g, Vp, jn), h && !m && (s.drawCachedElementPortion(t, e, f, r, n, g, qp, jn), s.drawCachedElementPortion(t, e, c, r, n, g, $p, jn)), s.drawElementOverlay(t, e);
    }
};
$t.drawElements = function(t, e) {
    for(var r = this, a = 0; a < e.length; a++){
        var n = e[a];
        r.drawElement(t, n);
    }
};
$t.drawCachedElements = function(t, e, r, a) {
    for(var n = this, i = 0; i < e.length; i++){
        var s = e[i];
        n.drawCachedElement(t, s, r, a);
    }
};
$t.drawCachedNodes = function(t, e, r, a) {
    for(var n = this, i = 0; i < e.length; i++){
        var s = e[i];
        s.isNode() && n.drawCachedElement(t, s, r, a);
    }
};
$t.drawLayeredElements = function(t, e, r, a) {
    var n = this, i = /*#__PURE__*/ n.data.lyrTxrCache.getLayers(e, r);
    if (i) for(var s = 0; s < i.length; s++){
        var o = i[s], l = o.bb;
        l.w === 0 || l.h === 0 || t.drawImage(o.canvas, l.x1, l.y1, l.w, l.h);
    }
    else n.drawCachedElements(t, e, r, a);
};
var _t = {};
_t.drawEdge = function(t, e, r) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o = e._private.rscratch;
    if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
        var l;
        r && (l = r, t.translate(-l.x1, -l.y1));
        var u = i ? e.pstyle("opacity").value : 1, f = i ? e.pstyle("line-opacity").value : 1, c = e.pstyle("curve-style").value, d = e.pstyle("line-style").value, g = e.pstyle("width").pfValue, h = e.pstyle("line-cap").value, m = e.pstyle("line-outline-width").value, y = e.pstyle("line-outline-color").value, p = u * f, b1 = u * f, w = /*#__PURE__*/ m$1(function() {
            var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
            c === "straight-triangle" ? (s.eleStrokeStyle(t, e, I), s.drawEdgeTrianglePath(e, t, o.allpts)) : (t.lineWidth = g, t.lineCap = h, s.eleStrokeStyle(t, e, I), s.drawEdgePath(e, t, o.allpts, d), t.lineCap = "butt");
        }, "drawLine"), x = /*#__PURE__*/ m$1(function() {
            var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
            if (t.lineWidth = g + m, t.lineCap = h, m > 0) s.colorStrokeStyle(t, y[0], y[1], y[2], I);
            else {
                t.lineCap = "butt";
                return;
            }
            c === "straight-triangle" ? s.drawEdgeTrianglePath(e, t, o.allpts) : (s.drawEdgePath(e, t, o.allpts, d), t.lineCap = "butt");
        }, "drawLineOutline"), S = /*#__PURE__*/ m$1(function() {
            n && s.drawEdgeOverlay(t, e);
        }, "drawOverlay"), T = /*#__PURE__*/ m$1(function() {
            n && s.drawEdgeUnderlay(t, e);
        }, "drawUnderlay"), E = /*#__PURE__*/ m$1(function() {
            var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b1;
            s.drawArrowheads(t, e, I);
        }, "drawArrows"), D = /*#__PURE__*/ m$1(function() {
            s.drawElementText(t, e, null, a);
        }, "drawText");
        t.lineJoin = "round";
        var C = e.pstyle("ghost").value === "yes";
        if (C) {
            var B = e.pstyle("ghost-offset-x").pfValue, A = e.pstyle("ghost-offset-y").pfValue, P = e.pstyle("ghost-opacity").value, M = p * P;
            t.translate(B, A), w(M), E(M), t.translate(-B, -A);
        } else x();
        T(), w(), E(), S(), D(), r && t.translate(l.x1, l.y1);
    }
};
var Hu = /*#__PURE__*/ m$1(function(e) {
    if (![
        "overlay",
        "underlay"
    ].includes(e)) throw new Error("Invalid state");
    return function(r, a) {
        if (a.visible()) {
            var n = a.pstyle(/*#__PURE__*/ "".concat(e, "-opacity")).value;
            if (n !== 0) {
                var i = this, s = /*#__PURE__*/ i.usePaths(), o = a._private.rscratch, l = a.pstyle(/*#__PURE__*/ "".concat(e, "-padding")).pfValue, u = 2 * l, f = a.pstyle(/*#__PURE__*/ "".concat(e, "-color")).value;
                r.lineWidth = u, o.edgeType === "self" && !s ? r.lineCap = "butt" : r.lineCap = "round", i.colorStrokeStyle(r, f[0], f[1], f[2], n), i.drawEdgePath(a, r, o.allpts, "solid");
            }
        }
    };
}, "drawEdgeOverlayUnderlay");
_t.drawEdgeOverlay = /*#__PURE__*/ Hu("overlay");
_t.drawEdgeUnderlay = /*#__PURE__*/ Hu("underlay");
_t.drawEdgePath = function(t, e, r, a) {
    var n = t._private.rscratch, i = e, s, o = false, l = /*#__PURE__*/ this.usePaths(), u = t.pstyle("line-dash-pattern").pfValue, f = t.pstyle("line-dash-offset").pfValue;
    if (l) {
        var c = /*#__PURE__*/ r.join("$"), d = n.pathCacheKey && n.pathCacheKey === c;
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
    if (!o && !n.badLine) switch(e.beginPath && e.beginPath(), e.moveTo(r[0], r[1]), n.edgeType){
        case "bezier":
        case "self":
        case "compound":
        case "multibezier":
            for(var g = 2; g + 3 < r.length; g += 4)e.quadraticCurveTo(r[g], r[g + 1], r[g + 2], r[g + 3]);
            break;
        case "straight":
        case "haystack":
            for(var h = 2; h + 1 < r.length; h += 2)e.lineTo(r[h], r[h + 1]);
            break;
        case "segments":
            if (n.isRound) {
                var m = /*#__PURE__*/ xt(n.roundCorners), y;
                try {
                    for(m.s(); !(y = /*#__PURE__*/ m.n()).done;){
                        var p = y.value;
                        Lu(e, p);
                    }
                } catch (w) {
                    m.e(w);
                } finally{
                    m.f();
                }
                e.lineTo(r[r.length - 2], r[r.length - 1]);
            } else for(var b1 = 2; b1 + 1 < r.length; b1 += 2)e.lineTo(r[b1], r[b1 + 1]);
            break;
    }
    e = i, l ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
_t.drawEdgeTrianglePath = function(t, e, r) {
    e.fillStyle = e.strokeStyle;
    for(var a = t.pstyle("width").pfValue, n = 0; n + 1 < r.length; n += 2){
        var i = [
            r[n + 2] - r[n],
            r[n + 3] - r[n + 1]
        ], s = /*#__PURE__*/ Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [
            i[1] / s,
            -i[0] / s
        ], l = [
            o[0] * a / 2,
            o[1] * a / 2
        ];
        e.beginPath(), e.moveTo(r[n] - l[0], r[n + 1] - l[1]), e.lineTo(r[n] + l[0], r[n + 1] + l[1]), e.lineTo(r[n + 2], r[n + 3]), e.closePath(), e.fill();
    }
};
_t.drawArrowheads = function(t, e, r) {
    var a = e._private.rscratch, n = a.edgeType === "haystack";
    n || this.drawArrowhead(t, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, r), this.drawArrowhead(t, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, r), this.drawArrowhead(t, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, r), n || this.drawArrowhead(t, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, r);
};
_t.drawArrowhead = function(t, e, r, a, n, i, s) {
    if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
        var o = this, l = e.pstyle(r + "-arrow-shape").value;
        if (l !== "none") {
            var u = e.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled", f = e.pstyle(r + "-arrow-fill").value, c = e.pstyle("width").pfValue, d = /*#__PURE__*/ e.pstyle(r + "-arrow-width"), g = d.value === "match-line" ? c : d.pfValue;
            d.units === "%" && (g *= c);
            var h = e.pstyle("opacity").value;
            s === void 0 && (s = h);
            var m = t.globalCompositeOperation;
            (s !== 1 || f === "hollow") && (t.globalCompositeOperation = "destination-out", o.colorFillStyle(t, 255, 255, 255, 1), o.colorStrokeStyle(t, 255, 255, 255, 1), o.drawArrowShape(e, t, u, c, l, g, a, n, i), t.globalCompositeOperation = m);
            var y = e.pstyle(r + "-arrow-color").value;
            o.colorFillStyle(t, y[0], y[1], y[2], s), o.colorStrokeStyle(t, y[0], y[1], y[2], s), o.drawArrowShape(e, t, f, c, l, g, a, n, i);
        }
    }
};
_t.drawArrowShape = function(t, e, r, a, n, i, s, o, l) {
    var u = this, f = this.usePaths() && n !== "triangle-cross", c = false, d, g = e, h = {
        x: s,
        y: o
    }, m = t.pstyle("arrow-scale").value, y = /*#__PURE__*/ this.getArrowWidth(a, m), p = u.arrowShapes[n];
    if (f) {
        var b1 = u.arrowPathCache = u.arrowPathCache || [], w = /*#__PURE__*/ ar(n), x = b1[w];
        x != null ? (d = e = x, c = true) : (d = e = new Path2D, b1[w] = d);
    }
    c || (e.beginPath && e.beginPath(), f ? p.draw(e, 1, 0, {
        x: 0,
        y: 0
    }, 1) : p.draw(e, y, l, h, a), e.closePath && e.closePath()), e = g, f && (e.translate(s, o), e.rotate(l), e.scale(y, y)), (r === "filled" || r === "both") && (f ? e.fill(d) : e.fill()), (r === "hollow" || r === "both") && (e.lineWidth = i / (f ? y : 1), e.lineJoin = "miter", f ? e.stroke(d) : e.stroke()), f && (e.scale(1 / y, 1 / y), e.rotate(-l), e.translate(-s, -o));
};
var Gi = {};
Gi.safeDrawImage = function(t, e, r, a, n, i, s, o, l, u) {
    if (!(n <= 0 || i <= 0 || l <= 0 || u <= 0)) try {
        t.drawImage(e, r, a, n, i, s, o, l, u);
    } catch (f) {
        Re(f);
    }
};
Gi.drawInscribedImage = function(t, e, r, a, n) {
    var i = this, s = /*#__PURE__*/ r.position(), o = s.x, l = s.y, u = /*#__PURE__*/ r.cy().style(), f = /*#__PURE__*/ u.getIndexedStyle.bind(u), c = /*#__PURE__*/ f(r, "background-fit", "value", a), d = /*#__PURE__*/ f(r, "background-repeat", "value", a), g = /*#__PURE__*/ r.width(), h = /*#__PURE__*/ r.height(), m = r.padding() * 2, y = g + (f(r, "background-width-relative-to", "value", a) === "inner" ? 0 : m), p = h + (f(r, "background-height-relative-to", "value", a) === "inner" ? 0 : m), b1 = r._private.rscratch, w = /*#__PURE__*/ f(r, "background-clip", "value", a), x = w === "node", S = f(r, "background-image-opacity", "value", a) * n, T = /*#__PURE__*/ f(r, "background-image-smoothing", "value", a), E = r.pstyle("corner-radius").value;
    E !== "auto" && (E = r.pstyle("corner-radius").pfValue);
    var D = e.width || e.cachedW, C = e.height || e.cachedH;
    (D == null || C == null) && (document.body.appendChild(e), D = e.cachedW = e.width || e.offsetWidth, C = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
    var B = D, A = C;
    if (f(r, "background-width", "value", a) !== "auto" && (f(r, "background-width", "units", a) === "%" ? B = f(r, "background-width", "pfValue", a) * y : B = /*#__PURE__*/ f(r, "background-width", "pfValue", a)), f(r, "background-height", "value", a) !== "auto" && (f(r, "background-height", "units", a) === "%" ? A = f(r, "background-height", "pfValue", a) * p : A = /*#__PURE__*/ f(r, "background-height", "pfValue", a)), !(B === 0 || A === 0)) {
        if (c === "contain") {
            var P = /*#__PURE__*/ Math.min(y / B, p / A);
            B *= P, A *= P;
        } else if (c === "cover") {
            var P = /*#__PURE__*/ Math.max(y / B, p / A);
            B *= P, A *= P;
        }
        var M = o - y / 2, R = /*#__PURE__*/ f(r, "background-position-x", "units", a), I = /*#__PURE__*/ f(r, "background-position-x", "pfValue", a);
        R === "%" ? M += (y - B) * I : M += I;
        var L = /*#__PURE__*/ f(r, "background-offset-x", "units", a), O = /*#__PURE__*/ f(r, "background-offset-x", "pfValue", a);
        L === "%" ? M += (y - B) * O : M += O;
        var N = l - p / 2, $ = /*#__PURE__*/ f(r, "background-position-y", "units", a), H = /*#__PURE__*/ f(r, "background-position-y", "pfValue", a);
        $ === "%" ? N += (p - A) * H : N += H;
        var q = /*#__PURE__*/ f(r, "background-offset-y", "units", a), K = /*#__PURE__*/ f(r, "background-offset-y", "pfValue", a);
        q === "%" ? N += (p - A) * K : N += K, b1.pathCache && (M -= o, N -= l, o = 0, l = 0);
        var Y = t.globalAlpha;
        t.globalAlpha = S;
        var Z = /*#__PURE__*/ i.getImgSmoothing(t), J = false;
        if (T === "no" && Z ? (i.setImgSmoothing(t, false), J = true) : T === "yes" && !Z && (i.setImgSmoothing(t, true), J = true), d === "no-repeat") x && (t.save(), b1.pathCache ? t.clip(b1.pathCache) : (i.nodeShapes[i.getNodeShape(r)].draw(t, o, l, y, p, E, b1), t.clip())), i.safeDrawImage(t, e, 0, 0, D, C, M, N, B, A), x && t.restore();
        else {
            var Q = /*#__PURE__*/ t.createPattern(e, d);
            t.fillStyle = Q, i.nodeShapes[i.getNodeShape(r)].draw(t, o, l, y, p, E, b1), t.translate(M, N), t.fill(), t.translate(-M, -N);
        }
        t.globalAlpha = Y, J && i.setImgSmoothing(t, Z);
    }
};
var Dr = {};
Dr.eleTextBiggerThanMin = function(t, e) {
    if (!e) {
        var r = /*#__PURE__*/ t.cy().zoom(), a = /*#__PURE__*/ this.getPixelRatio(), n = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ ki(r * a));
        e = /*#__PURE__*/ Math.pow(2, n);
    }
    var i = t.pstyle("font-size").pfValue * e, s = t.pstyle("min-zoomed-font-size").pfValue;
    return !(i < s);
};
Dr.drawElementText = function(t, e, r, a, n) {
    var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this;
    if (a == null) {
        if (i && !s.eleTextBiggerThanMin(e)) return;
    } else if (a === false) return;
    if (e.isNode()) {
        var o = /*#__PURE__*/ e.pstyle("label");
        if (!o || !o.value) return;
        var l = /*#__PURE__*/ s.getLabelJustification(e);
        t.textAlign = l, t.textBaseline = "bottom";
    } else {
        var u = e.element()._private.rscratch.badLine, f = /*#__PURE__*/ e.pstyle("label"), c = /*#__PURE__*/ e.pstyle("source-label"), d = /*#__PURE__*/ e.pstyle("target-label");
        if (u || (!f || !f.value) && (!c || !c.value) && (!d || !d.value)) return;
        t.textAlign = "center", t.textBaseline = "bottom";
    }
    var g = !r, h;
    r && (h = r, t.translate(-h.x1, -h.y1)), n == null ? (s.drawText(t, e, null, g, i), e.isEdge() && (s.drawText(t, e, "source", g, i), s.drawText(t, e, "target", g, i))) : s.drawText(t, e, n, g, i), r && t.translate(h.x1, h.y1);
};
Dr.getFontCache = function(t) {
    var e;
    this.fontCaches = this.fontCaches || [];
    for(var r = 0; r < this.fontCaches.length; r++)if (e = this.fontCaches[r], e.context === t) return e;
    return e = {
        context: t
    }, this.fontCaches.push(e), e;
};
Dr.setupTextStyle = function(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = r ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, l = e.pstyle("text-outline-opacity").value * o, u = e.pstyle("color").value, f = e.pstyle("text-outline-color").value;
    t.font = a + " " + s + " " + n + " " + i, t.lineJoin = "round", this.colorFillStyle(t, u[0], u[1], u[2], o), this.colorStrokeStyle(t, f[0], f[1], f[2], l);
};
function ei(t, e, r, a, n) {
    var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = arguments.length > 6 ? arguments[6] : void 0;
    t.beginPath(), t.moveTo(e + i, r), t.lineTo(e + a - i, r), t.quadraticCurveTo(e + a, r, e + a, r + i), t.lineTo(e + a, r + n - i), t.quadraticCurveTo(e + a, r + n, e + a - i, r + n), t.lineTo(e + i, r + n), t.quadraticCurveTo(e, r + n, e, r + n - i), t.lineTo(e, r + i), t.quadraticCurveTo(e, r, e + i, r), t.closePath(), s ? t.stroke() : t.fill();
}
m$1(ei, "roundRect");
Dr.getTextAngle = function(t, e) {
    var r, a = t._private, n = a.rscratch, i = e ? e + "-" : "", s = /*#__PURE__*/ t.pstyle(i + "text-rotation");
    if (s.strValue === "autorotate") {
        var o = /*#__PURE__*/ At(n, "labelAngle", e);
        r = t.isEdge() ? o : 0;
    } else s.strValue === "none" ? r = 0 : r = s.pfValue;
    return r;
};
Dr.drawText = function(t, e, r) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
    if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
        r === "main" && (r = null);
        var l = /*#__PURE__*/ At(s, "labelX", r), u = /*#__PURE__*/ At(s, "labelY", r), f, c, d = /*#__PURE__*/ this.getLabelText(e, r);
        if (d != null && d !== "" && !isNaN(l) && !isNaN(u)) {
            this.setupTextStyle(t, e, n);
            var g = r ? r + "-" : "", h = /*#__PURE__*/ At(s, "labelWidth", r), m = /*#__PURE__*/ At(s, "labelHeight", r), y = e.pstyle(g + "text-margin-x").pfValue, p = e.pstyle(g + "text-margin-y").pfValue, b1 = /*#__PURE__*/ e.isEdge(), w = e.pstyle("text-halign").value, x = e.pstyle("text-valign").value;
            b1 && (w = "center", x = "center"), l += y, u += p;
            var S;
            switch(a ? S = /*#__PURE__*/ this.getTextAngle(e, r) : S = 0, S !== 0 && (f = l, c = u, t.translate(f, c), t.rotate(S), l = 0, u = 0), x){
                case "top":
                    break;
                case "center":
                    u += m / 2;
                    break;
                case "bottom":
                    u += m;
                    break;
            }
            var T = e.pstyle("text-background-opacity").value, E = e.pstyle("text-border-opacity").value, D = e.pstyle("text-border-width").pfValue, C = e.pstyle("text-background-padding").pfValue, B = e.pstyle("text-background-shape").strValue, A = B.indexOf("round") === 0, P = 2;
            if (T > 0 || D > 0 && E > 0) {
                var M = l - C;
                switch(w){
                    case "left":
                        M -= h;
                        break;
                    case "center":
                        M -= h / 2;
                        break;
                }
                var R = u - m - C, I = h + 2 * C, L = m + 2 * C;
                if (T > 0) {
                    var O = t.fillStyle, N = e.pstyle("text-background-color").value;
                    t.fillStyle = "rgba(" + N[0] + "," + N[1] + "," + N[2] + "," + T * o + ")", A ? ei(t, M, R, I, L, P) : t.fillRect(M, R, I, L), t.fillStyle = O;
                }
                if (D > 0 && E > 0) {
                    var $ = t.strokeStyle, H = t.lineWidth, q = e.pstyle("text-border-color").value, K = e.pstyle("text-border-style").value;
                    if (t.strokeStyle = "rgba(" + q[0] + "," + q[1] + "," + q[2] + "," + E * o + ")", t.lineWidth = D, t.setLineDash) switch(K){
                        case "dotted":
                            t.setLineDash([
                                1,
                                1
                            ]);
                            break;
                        case "dashed":
                            t.setLineDash([
                                4,
                                2
                            ]);
                            break;
                        case "double":
                            t.lineWidth = D / 4, t.setLineDash([]);
                            break;
                        case "solid":
                            t.setLineDash([]);
                            break;
                    }
                    if (A ? ei(t, M, R, I, L, P, "stroke") : t.strokeRect(M, R, I, L), K === "double") {
                        var Y = D / 2;
                        A ? ei(t, M + Y, R + Y, I - Y * 2, L - Y * 2, P, "stroke") : t.strokeRect(M + Y, R + Y, I - Y * 2, L - Y * 2);
                    }
                    t.setLineDash && t.setLineDash([]), t.lineWidth = H, t.strokeStyle = $;
                }
            }
            var Z = 2 * e.pstyle("text-outline-width").pfValue;
            if (Z > 0 && (t.lineWidth = Z), e.pstyle("text-wrap").value === "wrap") {
                var J = /*#__PURE__*/ At(s, "labelWrapCachedLines", r), Q = /*#__PURE__*/ At(s, "labelLineHeight", r), ee = h / 2, re = /*#__PURE__*/ this.getLabelJustification(e);
                switch(re === "auto" || (w === "left" ? re === "left" ? l += -h : re === "center" && (l += -ee) : w === "center" ? re === "left" ? l += -ee : re === "right" && (l += ee) : w === "right" && (re === "center" ? l += ee : re === "right" && (l += h))), x){
                    case "top":
                        u -= (J.length - 1) * Q;
                        break;
                    case "center":
                    case "bottom":
                        u -= (J.length - 1) * Q;
                        break;
                }
                for(var W = 0; W < J.length; W++)Z > 0 && t.strokeText(J[W], l, u), t.fillText(J[W], l, u), u += Q;
            } else Z > 0 && t.strokeText(d, l, u), t.fillText(d, l, u);
            S !== 0 && (t.rotate(-S), t.translate(-f, -c));
        }
    }
};
var jr = {};
jr.drawNode = function(t, e, r) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o, l, u = e._private, f = u.rscratch, c = /*#__PURE__*/ e.position();
    if (!(!ae(c.x) || !ae(c.y)) && !(i && !e.visible())) {
        var d = i ? e.effectiveOpacity() : 1, g = /*#__PURE__*/ s.usePaths(), h, m = false, y = /*#__PURE__*/ e.padding();
        o = e.width() + 2 * y, l = e.height() + 2 * y;
        var p;
        r && (p = r, t.translate(-p.x1, -p.y1));
        for(var b1 = /*#__PURE__*/ e.pstyle("background-image"), w = b1.value, x = new Array(w.length), S = new Array(w.length), T = 0, E = 0; E < w.length; E++){
            var D = w[E], C = x[E] = D != null && D !== "none";
            if (C) {
                var B = /*#__PURE__*/ e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", E);
                T++, S[E] = /*#__PURE__*/ s.getCachedImage(D, B, function() {
                    u.backgroundTimestamp = /*#__PURE__*/ Date.now(), e.emitAndNotify("background");
                });
            }
        }
        var A = e.pstyle("background-blacken").value, P = e.pstyle("border-width").pfValue, M = e.pstyle("background-opacity").value * d, R = e.pstyle("border-color").value, I = e.pstyle("border-style").value, L = e.pstyle("border-join").value, O = e.pstyle("border-cap").value, N = e.pstyle("border-position").value, $ = e.pstyle("border-dash-pattern").pfValue, H = e.pstyle("border-dash-offset").pfValue, q = e.pstyle("border-opacity").value * d, K = e.pstyle("outline-width").pfValue, Y = e.pstyle("outline-color").value, Z = e.pstyle("outline-style").value, J = e.pstyle("outline-opacity").value * d, Q = e.pstyle("outline-offset").value, ee = e.pstyle("corner-radius").value;
        ee !== "auto" && (ee = e.pstyle("corner-radius").pfValue);
        var re = /*#__PURE__*/ m$1(function() {
            var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M;
            s.eleFillStyle(t, e, V);
        }, "setupShapeColor"), W = /*#__PURE__*/ m$1(function() {
            var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q;
            s.colorStrokeStyle(t, R[0], R[1], R[2], V);
        }, "setupBorderColor"), z = /*#__PURE__*/ m$1(function() {
            var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : J;
            s.colorStrokeStyle(t, Y[0], Y[1], Y[2], V);
        }, "setupOutlineColor"), U = /*#__PURE__*/ m$1(function(V, G, ne, _) {
            var ie = s.nodePathCache = s.nodePathCache || [], de = /*#__PURE__*/ Ro(ne === "polygon" ? ne + "," + _.join(",") : ne, "" + G, "" + V, "" + ee), Ee = ie[de], fe, we = false;
            return Ee != null ? (fe = Ee, we = true, f.pathCache = fe) : (fe = new Path2D, ie[de] = f.pathCache = fe), {
                path: fe,
                cacheHit: we
            };
        }, "getPath"), te = e.pstyle("shape").strValue, se = e.pstyle("shape-polygon-points").pfValue;
        if (g) {
            t.translate(c.x, c.y);
            var le = /*#__PURE__*/ U(o, l, te, se);
            h = le.path, m = le.cacheHit;
        }
        var Se = /*#__PURE__*/ m$1(function() {
            if (!m) {
                var V = c;
                g && (V = {
                    x: 0,
                    y: 0
                }), s.nodeShapes[s.getNodeShape(e)].draw(h || t, V.x, V.y, o, l, ee, f);
            }
            g ? t.fill(h) : t.fill();
        }, "drawShape"), Me = /*#__PURE__*/ m$1(function() {
            for(var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, ne = u.backgrounding, _ = 0, ie = 0; ie < S.length; ie++){
                var de = /*#__PURE__*/ e.cy().style().getIndexedStyle(e, "background-image-containment", "value", ie);
                if (G && de === "over" || !G && de === "inside") {
                    _++;
                    continue;
                }
                x[ie] && S[ie].complete && !S[ie].error && (_++, s.drawInscribedImage(t, S[ie], e, ie, V));
            }
            u.backgrounding = _ !== T, ne !== u.backgrounding && e.updateStyle(false);
        }, "drawImages"), Le = /*#__PURE__*/ m$1(function() {
            var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
            s.hasPie(e) && (s.drawPie(t, e, G), V && (g || s.nodeShapes[s.getNodeShape(e)].draw(t, c.x, c.y, o, l, ee, f)));
        }, "drawPie"), ve = /*#__PURE__*/ m$1(function() {
            var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, G = (A > 0 ? A : -A) * V, ne = A > 0 ? 0 : 255;
            A !== 0 && (s.colorFillStyle(t, ne, ne, ne, G), g ? t.fill(h) : t.fill());
        }, "darken"), ue = /*#__PURE__*/ m$1(function() {
            if (P > 0) {
                if (t.lineWidth = P, t.lineCap = O, t.lineJoin = L, t.setLineDash) switch(I){
                    case "dotted":
                        t.setLineDash([
                            1,
                            1
                        ]);
                        break;
                    case "dashed":
                        t.setLineDash($), t.lineDashOffset = H;
                        break;
                    case "solid":
                    case "double":
                        t.setLineDash([]);
                        break;
                }
                if (N !== "center") {
                    if (t.save(), t.lineWidth *= 2, N === "inside") g ? t.clip(h) : t.clip();
                    else {
                        var V = new Path2D;
                        V.rect(-o / 2 - P, -l / 2 - P, o + 2 * P, l + 2 * P), V.addPath(h), t.clip(V, "evenodd");
                    }
                    g ? t.stroke(h) : t.stroke(), t.restore();
                } else g ? t.stroke(h) : t.stroke();
                if (I === "double") {
                    t.lineWidth = P / 3;
                    var G = t.globalCompositeOperation;
                    t.globalCompositeOperation = "destination-out", g ? t.stroke(h) : t.stroke(), t.globalCompositeOperation = G;
                }
                t.setLineDash && t.setLineDash([]);
            }
        }, "drawBorder"), ye = /*#__PURE__*/ m$1(function() {
            if (K > 0) {
                if (t.lineWidth = K, t.lineCap = "butt", t.setLineDash) switch(Z){
                    case "dotted":
                        t.setLineDash([
                            1,
                            1
                        ]);
                        break;
                    case "dashed":
                        t.setLineDash([
                            4,
                            2
                        ]);
                        break;
                    case "solid":
                    case "double":
                        t.setLineDash([]);
                        break;
                }
                var V = c;
                g && (V = {
                    x: 0,
                    y: 0
                });
                var G = /*#__PURE__*/ s.getNodeShape(e), ne = P;
                N === "inside" && (ne = 0), N === "outside" && (ne *= 2);
                var _ = (o + ne + (K + Q)) / o, ie = (l + ne + (K + Q)) / l, de = o * _, Ee = l * ie, fe = s.nodeShapes[G].points, we;
                if (g) {
                    var xe = /*#__PURE__*/ U(de, Ee, G, fe);
                    we = xe.path;
                }
                if (G === "ellipse") s.drawEllipsePath(we || t, V.x, V.y, de, Ee);
                else if ([
                    "round-diamond",
                    "round-heptagon",
                    "round-hexagon",
                    "round-octagon",
                    "round-pentagon",
                    "round-polygon",
                    "round-triangle",
                    "round-tag"
                ].includes(G)) {
                    var pe = 0, Ne = 0, qe = 0;
                    G === "round-diamond" ? pe = (ne + Q + K) * 1.4 : G === "round-heptagon" ? (pe = (ne + Q + K) * 1.075, qe = -(ne / 2 + Q + K) / 35) : G === "round-hexagon" ? pe = (ne + Q + K) * 1.12 : G === "round-pentagon" ? (pe = (ne + Q + K) * 1.13, qe = -(ne / 2 + Q + K) / 15) : G === "round-tag" ? (pe = (ne + Q + K) * 1.12, Ne = (ne / 2 + K + Q) * .07) : G === "round-triangle" && (pe = (ne + Q + K) * (Math.PI / 2), qe = -(ne + Q / 2 + K) / Math.PI), pe !== 0 && (_ = (o + pe) / o, de = o * _, [
                        "round-hexagon",
                        "round-tag"
                    ].includes(G) || (ie = (l + pe) / l, Ee = l * ie)), ee = ee === "auto" ? Ko(de, Ee) : ee;
                    for(var mt = de / 2, bt = Ee / 2, He = ee + (ne + K + Q) / 2, Ze = new Array(fe.length / 2), Qe = new Array(fe.length / 2), ft = 0; ft < fe.length / 2; ft++)Ze[ft] = {
                        x: V.x + Ne + mt * fe[ft * 2],
                        y: V.y + qe + bt * fe[ft * 2 + 1]
                    };
                    var ct, Mt, Tt, Lt, Kt = Ze.length;
                    for(Mt = Ze[Kt - 1], ct = 0; ct < Kt; ct++)Tt = Ze[ct % Kt], Lt = Ze[(ct + 1) % Kt], Qe[ct] = /*#__PURE__*/ $i(Mt, Tt, Lt, He), Mt = Tt, Tt = Lt;
                    s.drawRoundPolygonPath(we || t, V.x + Ne, V.y + qe, o * _, l * ie, fe, Qe);
                } else if ([
                    "roundrectangle",
                    "round-rectangle"
                ].includes(G)) ee = ee === "auto" ? xr(de, Ee) : ee, s.drawRoundRectanglePath(we || t, V.x, V.y, de, Ee, ee + (ne + K + Q) / 2);
                else if ([
                    "cutrectangle",
                    "cut-rectangle"
                ].includes(G)) ee = ee === "auto" ? Bi() : ee, s.drawCutRectanglePath(we || t, V.x, V.y, de, Ee, null, ee + (ne + K + Q) / 4);
                else if ([
                    "bottomroundrectangle",
                    "bottom-round-rectangle"
                ].includes(G)) ee = ee === "auto" ? xr(de, Ee) : ee, s.drawBottomRoundRectanglePath(we || t, V.x, V.y, de, Ee, ee + (ne + K + Q) / 2);
                else if (G === "barrel") s.drawBarrelPath(we || t, V.x, V.y, de, Ee);
                else if (G.startsWith("polygon") || [
                    "rhomboid",
                    "right-rhomboid",
                    "round-tag",
                    "tag",
                    "vee"
                ].includes(G)) {
                    var Gt = (ne + K + Q) / o;
                    fe = /*#__PURE__*/ hn(/*#__PURE__*/ gn(fe, Gt)), s.drawPolygonPath(we || t, V.x, V.y, o, l, fe);
                } else {
                    var it = (ne + K + Q) / o;
                    fe = /*#__PURE__*/ hn(/*#__PURE__*/ gn(fe, -it)), s.drawPolygonPath(we || t, V.x, V.y, o, l, fe);
                }
                if (g ? t.stroke(we) : t.stroke(), Z === "double") {
                    t.lineWidth = ne / 3;
                    var Je = t.globalCompositeOperation;
                    t.globalCompositeOperation = "destination-out", g ? t.stroke(we) : t.stroke(), t.globalCompositeOperation = Je;
                }
                t.setLineDash && t.setLineDash([]);
            }
        }, "drawOutline"), me = /*#__PURE__*/ m$1(function() {
            n && s.drawNodeOverlay(t, e, c, o, l);
        }, "drawOverlay"), ge = /*#__PURE__*/ m$1(function() {
            n && s.drawNodeUnderlay(t, e, c, o, l);
        }, "drawUnderlay"), be = /*#__PURE__*/ m$1(function() {
            s.drawElementText(t, e, null, a);
        }, "drawText"), Te = e.pstyle("ghost").value === "yes";
        if (Te) {
            var De = e.pstyle("ghost-offset-x").pfValue, j = e.pstyle("ghost-offset-y").pfValue, k = e.pstyle("ghost-opacity").value, F = k * d;
            t.translate(De, j), z(), ye(), re(k * M), Se(), Me(F, true), W(k * q), ue(), Le(A !== 0 || P !== 0), Me(F, false), ve(F), t.translate(-De, -j);
        }
        g && t.translate(-c.x, -c.y), ge(), g && t.translate(c.x, c.y), z(), ye(), re(), Se(), Me(d, true), W(), ue(), Le(A !== 0 || P !== 0), Me(d, false), ve(), g && t.translate(-c.x, -c.y), be(), me(), r && t.translate(p.x1, p.y1);
    }
};
var Uu = /*#__PURE__*/ m$1(function(e) {
    if (![
        "overlay",
        "underlay"
    ].includes(e)) throw new Error("Invalid state");
    return function(r, a, n, i, s) {
        var o = this;
        if (a.visible()) {
            var l = a.pstyle(/*#__PURE__*/ "".concat(e, "-padding")).pfValue, u = a.pstyle(/*#__PURE__*/ "".concat(e, "-opacity")).value, f = a.pstyle(/*#__PURE__*/ "".concat(e, "-color")).value, c = a.pstyle(/*#__PURE__*/ "".concat(e, "-shape")).value, d = a.pstyle(/*#__PURE__*/ "".concat(e, "-corner-radius")).value;
            if (u > 0) {
                if (n = n || a.position(), i == null || s == null) {
                    var g = /*#__PURE__*/ a.padding();
                    i = a.width() + 2 * g, s = a.height() + 2 * g;
                }
                o.colorFillStyle(r, f[0], f[1], f[2], u), o.nodeShapes[c].draw(r, n.x, n.y, i + l * 2, s + l * 2, d), r.fill();
            }
        }
    };
}, "drawNodeOverlayUnderlay");
jr.drawNodeOverlay = /*#__PURE__*/ Uu("overlay");
jr.drawNodeUnderlay = /*#__PURE__*/ Uu("underlay");
jr.hasPie = function(t) {
    return t = t[0], t._private.hasPie;
};
jr.drawPie = function(t, e, r, a) {
    e = e[0], a = a || e.position();
    var n = /*#__PURE__*/ e.cy().style(), i = /*#__PURE__*/ e.pstyle("pie-size"), s = a.x, o = a.y, l = /*#__PURE__*/ e.width(), u = /*#__PURE__*/ e.height(), f = Math.min(l, u) / 2, c = 0, d = /*#__PURE__*/ this.usePaths();
    d && (s = 0, o = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2);
    for(var g = 1; g <= n.pieBackgroundN; g++){
        var h = e.pstyle("pie-" + g + "-background-size").value, m = e.pstyle("pie-" + g + "-background-color").value, y = e.pstyle("pie-" + g + "-background-opacity").value * r, p = h / 100;
        p + c > 1 && (p = 1 - c);
        var b1 = 1.5 * Math.PI + 2 * Math.PI * c, w = 2 * Math.PI * p, x = b1 + w;
        h === 0 || c >= 1 || c + p > 1 || (t.beginPath(), t.moveTo(s, o), t.arc(s, o, f, b1, x), t.closePath(), this.colorFillStyle(t, m[0], m[1], m[2], y), t.fill(), c += p);
    }
};
var ht = {}, Gp = 100;
ht.getPixelRatio = function() {
    var t = this.data.contexts[0];
    if (this.forcedPixelRatio != null) return this.forcedPixelRatio;
    var e = /*#__PURE__*/ this.cy.window(), r = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
    return (e.devicePixelRatio || 1) / r;
};
ht.paintCache = function(t) {
    for(var e = this.paintCaches = this.paintCaches || [], r = true, a, n = 0; n < e.length; n++)if (a = e[n], a.context === t) {
        r = false;
        break;
    }
    return r && (a = {
        context: t
    }, e.push(a)), a;
};
ht.createGradientStyleFor = function(t, e, r, a, n) {
    var i, s = /*#__PURE__*/ this.usePaths(), o = r.pstyle(e + "-gradient-stop-colors").value, l = r.pstyle(e + "-gradient-stop-positions").pfValue;
    if (a === "radial-gradient") if (r.isEdge()) {
        var u = /*#__PURE__*/ r.sourceEndpoint(), f = /*#__PURE__*/ r.targetEndpoint(), c = /*#__PURE__*/ r.midpoint(), d = /*#__PURE__*/ wr(u, c), g = /*#__PURE__*/ wr(f, c);
        i = /*#__PURE__*/ t.createRadialGradient(c.x, c.y, 0, c.x, c.y, /*#__PURE__*/ Math.max(d, g));
    } else {
        var h = s ? {
            x: 0,
            y: 0
        } : r.position(), m = /*#__PURE__*/ r.paddedWidth(), y = /*#__PURE__*/ r.paddedHeight();
        i = /*#__PURE__*/ t.createRadialGradient(h.x, h.y, 0, h.x, h.y, /*#__PURE__*/ Math.max(m, y));
    }
    else if (r.isEdge()) {
        var p = /*#__PURE__*/ r.sourceEndpoint(), b1 = /*#__PURE__*/ r.targetEndpoint();
        i = /*#__PURE__*/ t.createLinearGradient(p.x, p.y, b1.x, b1.y);
    } else {
        var w = s ? {
            x: 0,
            y: 0
        } : r.position(), x = /*#__PURE__*/ r.paddedWidth(), S = /*#__PURE__*/ r.paddedHeight(), T = x / 2, E = S / 2, D = r.pstyle("background-gradient-direction").value;
        switch(D){
            case "to-bottom":
                i = /*#__PURE__*/ t.createLinearGradient(w.x, w.y - E, w.x, w.y + E);
                break;
            case "to-top":
                i = /*#__PURE__*/ t.createLinearGradient(w.x, w.y + E, w.x, w.y - E);
                break;
            case "to-left":
                i = /*#__PURE__*/ t.createLinearGradient(w.x + T, w.y, w.x - T, w.y);
                break;
            case "to-right":
                i = /*#__PURE__*/ t.createLinearGradient(w.x - T, w.y, w.x + T, w.y);
                break;
            case "to-bottom-right":
            case "to-right-bottom":
                i = /*#__PURE__*/ t.createLinearGradient(w.x - T, w.y - E, w.x + T, w.y + E);
                break;
            case "to-top-right":
            case "to-right-top":
                i = /*#__PURE__*/ t.createLinearGradient(w.x - T, w.y + E, w.x + T, w.y - E);
                break;
            case "to-bottom-left":
            case "to-left-bottom":
                i = /*#__PURE__*/ t.createLinearGradient(w.x + T, w.y - E, w.x - T, w.y + E);
                break;
            case "to-top-left":
            case "to-left-top":
                i = /*#__PURE__*/ t.createLinearGradient(w.x + T, w.y + E, w.x - T, w.y - E);
                break;
        }
    }
    if (!i) return null;
    for(var C = l.length === o.length, B = o.length, A = 0; A < B; A++)i.addColorStop(C ? l[A] : A / (B - 1), "rgba(" + o[A][0] + "," + o[A][1] + "," + o[A][2] + "," + n + ")");
    return i;
};
ht.gradientFillStyle = function(t, e, r, a) {
    var n = /*#__PURE__*/ this.createGradientStyleFor(t, "background", e, r, a);
    if (!n) return null;
    t.fillStyle = n;
};
ht.colorFillStyle = function(t, e, r, a, n) {
    t.fillStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
};
ht.eleFillStyle = function(t, e, r) {
    var a = e.pstyle("background-fill").value;
    if (a === "linear-gradient" || a === "radial-gradient") this.gradientFillStyle(t, e, a, r);
    else {
        var n = e.pstyle("background-color").value;
        this.colorFillStyle(t, n[0], n[1], n[2], r);
    }
};
ht.gradientStrokeStyle = function(t, e, r, a) {
    var n = /*#__PURE__*/ this.createGradientStyleFor(t, "line", e, r, a);
    if (!n) return null;
    t.strokeStyle = n;
};
ht.colorStrokeStyle = function(t, e, r, a, n) {
    t.strokeStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
};
ht.eleStrokeStyle = function(t, e, r) {
    var a = e.pstyle("line-fill").value;
    if (a === "linear-gradient" || a === "radial-gradient") this.gradientStrokeStyle(t, e, a, r);
    else {
        var n = e.pstyle("line-color").value;
        this.colorStrokeStyle(t, n[0], n[1], n[2], r);
    }
};
ht.matchCanvasSize = function(t) {
    var e = this, r = e.data, a = /*#__PURE__*/ e.findContainerClientCoords(), n = a[2], i = a[3], s = /*#__PURE__*/ e.getPixelRatio(), o = e.motionBlurPxRatio;
    (t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
    var l = n * s, u = i * s, f;
    if (!(l === e.canvasWidth && u === e.canvasHeight)) {
        e.fontCaches = null;
        var c = r.canvasContainer;
        c.style.width = n + "px", c.style.height = i + "px";
        for(var d = 0; d < e.CANVAS_LAYERS; d++)f = r.canvases[d], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
        for(var d = 0; d < e.BUFFER_COUNT; d++)f = r.bufferCanvases[d], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
        e.textureMult = 1, s <= 1 && (f = r.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, f.width = l * e.textureMult, f.height = u * e.textureMult), e.canvasWidth = l, e.canvasHeight = u, e.pixelRatio = s;
    }
};
ht.renderTo = function(t, e, r, a) {
    this.render({
        forcedContext: t,
        forcedZoom: e,
        forcedPan: r,
        drawAllLayers: true,
        forcedPxRatio: a
    });
};
ht.clearCanvas = function() {
    var t = this, e = t.data;
    function r(a) {
        a.clearRect(0, 0, t.canvasWidth, t.canvasHeight);
    }
    m$1(r, "clear"), r(e.contexts[t.NODE]), r(e.contexts[t.DRAG]);
};
ht.render = function(t) {
    var e = this;
    t = t || Oo();
    var r = e.cy, a = t.forcedContext, n = t.drawAllLayers, i = t.drawOnlyNodeLayer, s = t.forcedZoom, o = t.forcedPan, l = t.forcedPxRatio === void 0 ? this.getPixelRatio() : t.forcedPxRatio, u = e.data, f = u.canvasNeedsRedraw, c = e.textureOnViewport && !a && (e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming), d = t.motionBlur !== void 0 ? t.motionBlur : e.motionBlur, g = e.motionBlurPxRatio, h = /*#__PURE__*/ r.hasCompoundNodes(), m = e.hoverData.draggingEles, y = !!(e.hoverData.selecting || e.touchData.selecting);
    d = d && !a && e.motionBlurEnabled && !y;
    var p = d;
    a || (e.prevPxRatio !== l && (e.invalidateContainerClientCoordsCache(), e.matchCanvasSize(e.container), e.redrawHint("eles", true), e.redrawHint("drag", true)), e.prevPxRatio = l), !a && e.motionBlurTimeout && clearTimeout(e.motionBlurTimeout), d && (e.mbFrames == null && (e.mbFrames = 0), e.mbFrames++, e.mbFrames < 3 && (p = false), e.mbFrames > e.minMbLowQualFrames && (e.motionBlurPxRatio = e.mbPxRBlurry)), e.clearingMotionBlur && (e.motionBlurPxRatio = 1), e.textureDrawLastFrame && !c && (f[e.NODE] = true, f[e.SELECT_BOX] = true);
    var b1 = /*#__PURE__*/ r.style(), w = /*#__PURE__*/ r.zoom(), x = s !== void 0 ? s : w, S = /*#__PURE__*/ r.pan(), T = {
        x: S.x,
        y: S.y
    }, E = {
        zoom: w,
        pan: {
            x: S.x,
            y: S.y
        }
    }, D = e.prevViewport, C = D === void 0 || E.zoom !== D.zoom || E.pan.x !== D.pan.x || E.pan.y !== D.pan.y;
    !C && !(m && !h) && (e.motionBlurPxRatio = 1), o && (T = o), x *= l, T.x *= l, T.y *= l;
    var B = /*#__PURE__*/ e.getCachedZSortedEles();
    function A(W, z, U, te, se) {
        var le = W.globalCompositeOperation;
        W.globalCompositeOperation = "destination-out", e.colorFillStyle(W, 255, 255, 255, e.motionBlurTransparency), W.fillRect(z, U, te, se), W.globalCompositeOperation = le;
    }
    m$1(A, "mbclear");
    function P(W, z) {
        var U, te, se, le;
        !e.clearingMotionBlur && (W === u.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] || W === u.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG]) ? (U = {
            x: S.x * g,
            y: S.y * g
        }, te = w * g, se = e.canvasWidth * g, le = e.canvasHeight * g) : (U = T, te = x, se = e.canvasWidth, le = e.canvasHeight), W.setTransform(1, 0, 0, 1, 0, 0), z === "motionBlur" ? A(W, 0, 0, se, le) : !a && (z === void 0 || z) && W.clearRect(0, 0, se, le), n || (W.translate(U.x, U.y), W.scale(te, te)), o && W.translate(o.x, o.y), s && W.scale(s, s);
    }
    if (m$1(P, "setContextTransform"), c || (e.textureDrawLastFrame = false), c) {
        if (e.textureDrawLastFrame = true, !e.textureCache) {
            e.textureCache = {}, e.textureCache.bb = /*#__PURE__*/ r.mutableElements().boundingBox(), e.textureCache.texture = e.data.bufferCanvases[e.TEXTURE_BUFFER];
            var M = e.data.bufferContexts[e.TEXTURE_BUFFER];
            M.setTransform(1, 0, 0, 1, 0, 0), M.clearRect(0, 0, e.canvasWidth * e.textureMult, e.canvasHeight * e.textureMult), e.render({
                forcedContext: M,
                drawOnlyNodeLayer: true,
                forcedPxRatio: l * e.textureMult
            });
            var E = e.textureCache.viewport = {
                zoom: /*#__PURE__*/ r.zoom(),
                pan: /*#__PURE__*/ r.pan(),
                width: e.canvasWidth,
                height: e.canvasHeight
            };
            E.mpan = {
                x: (0 - E.pan.x) / E.zoom,
                y: (0 - E.pan.y) / E.zoom
            };
        }
        f[e.DRAG] = false, f[e.NODE] = false;
        var R = u.contexts[e.NODE], I = e.textureCache.texture, E = e.textureCache.viewport;
        R.setTransform(1, 0, 0, 1, 0, 0), d ? A(R, 0, 0, E.width, E.height) : R.clearRect(0, 0, E.width, E.height);
        var L = b1.core("outside-texture-bg-color").value, O = b1.core("outside-texture-bg-opacity").value;
        e.colorFillStyle(R, L[0], L[1], L[2], O), R.fillRect(0, 0, E.width, E.height);
        var w = /*#__PURE__*/ r.zoom();
        P(R, false), R.clearRect(E.mpan.x, E.mpan.y, E.width / E.zoom / l, E.height / E.zoom / l), R.drawImage(I, E.mpan.x, E.mpan.y, E.width / E.zoom / l, E.height / E.zoom / l);
    } else e.textureOnViewport && !a && (e.textureCache = null);
    var N = /*#__PURE__*/ r.extent(), $ = e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming || e.hoverData.draggingEles || e.cy.animated(), H = e.hideEdgesOnViewport && $, q = [];
    if (q[e.NODE] = !f[e.NODE] && d && !e.clearedForMotionBlur[e.NODE] || e.clearingMotionBlur, q[e.NODE] && (e.clearedForMotionBlur[e.NODE] = true), q[e.DRAG] = !f[e.DRAG] && d && !e.clearedForMotionBlur[e.DRAG] || e.clearingMotionBlur, q[e.DRAG] && (e.clearedForMotionBlur[e.DRAG] = true), f[e.NODE] || n || i || q[e.NODE]) {
        var K = d && !q[e.NODE] && g !== 1, R = a || (K ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] : u.contexts[e.NODE]), Y = d && !K ? "motionBlur" : void 0;
        P(R, Y), H ? e.drawCachedNodes(R, B.nondrag, l, N) : e.drawLayeredElements(R, B.nondrag, l, N), e.debug && e.drawDebugPoints(R, B.nondrag), !n && !d && (f[e.NODE] = false);
    }
    if (!i && (f[e.DRAG] || n || q[e.DRAG])) {
        var K = d && !q[e.DRAG] && g !== 1, R = a || (K ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG] : u.contexts[e.DRAG]);
        P(R, d && !K ? "motionBlur" : void 0), H ? e.drawCachedNodes(R, B.drag, l, N) : e.drawCachedElements(R, B.drag, l, N), e.debug && e.drawDebugPoints(R, B.drag), !n && !d && (f[e.DRAG] = false);
    }
    if (this.drawSelectionRectangle(t, P), d && g !== 1) {
        var Z = u.contexts[e.NODE], J = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE], Q = u.contexts[e.DRAG], ee = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG], re = /*#__PURE__*/ m$1(function(z, U, te) {
            z.setTransform(1, 0, 0, 1, 0, 0), te || !p ? z.clearRect(0, 0, e.canvasWidth, e.canvasHeight) : A(z, 0, 0, e.canvasWidth, e.canvasHeight);
            var se = g;
            z.drawImage(U, 0, 0, e.canvasWidth * se, e.canvasHeight * se, 0, 0, e.canvasWidth, e.canvasHeight);
        }, "drawMotionBlur");
        (f[e.NODE] || q[e.NODE]) && (re(Z, J, q[e.NODE]), f[e.NODE] = false), (f[e.DRAG] || q[e.DRAG]) && (re(Q, ee, q[e.DRAG]), f[e.DRAG] = false);
    }
    e.prevViewport = E, e.clearingMotionBlur && (e.clearingMotionBlur = false, e.motionBlurCleared = true, e.motionBlur = true), d && (e.motionBlurTimeout = /*#__PURE__*/ setTimeout(function() {
        e.motionBlurTimeout = null, e.clearedForMotionBlur[e.NODE] = false, e.clearedForMotionBlur[e.DRAG] = false, e.motionBlur = false, e.clearingMotionBlur = !c, e.mbFrames = 0, f[e.NODE] = true, f[e.DRAG] = true, e.redraw();
    }, Gp)), a || r.emit("render");
};
var oa;
ht.drawSelectionRectangle = function(t, e) {
    var r = this, a = r.cy, n = r.data, i = /*#__PURE__*/ a.style(), s = t.drawOnlyNodeLayer, o = t.drawAllLayers, l = n.canvasNeedsRedraw, u = t.forcedContext;
    if (r.showFps || !s && l[r.SELECT_BOX] && !o) {
        var f = u || n.contexts[r.SELECT_BOX];
        if (e(f), r.selection[4] == 1 && (r.hoverData.selecting || r.touchData.selecting)) {
            var c = /*#__PURE__*/ r.cy.zoom(), d = i.core("selection-box-border-width").value / c;
            f.lineWidth = d, f.fillStyle = "rgba(" + i.core("selection-box-color").value[0] + "," + i.core("selection-box-color").value[1] + "," + i.core("selection-box-color").value[2] + "," + i.core("selection-box-opacity").value + ")", f.fillRect(r.selection[0], r.selection[1], r.selection[2] - r.selection[0], r.selection[3] - r.selection[1]), d > 0 && (f.strokeStyle = "rgba(" + i.core("selection-box-border-color").value[0] + "," + i.core("selection-box-border-color").value[1] + "," + i.core("selection-box-border-color").value[2] + "," + i.core("selection-box-opacity").value + ")", f.strokeRect(r.selection[0], r.selection[1], r.selection[2] - r.selection[0], r.selection[3] - r.selection[1]));
        }
        if (n.bgActivePosistion && !r.hoverData.selecting) {
            var c = /*#__PURE__*/ r.cy.zoom(), g = n.bgActivePosistion;
            f.fillStyle = "rgba(" + i.core("active-bg-color").value[0] + "," + i.core("active-bg-color").value[1] + "," + i.core("active-bg-color").value[2] + "," + i.core("active-bg-opacity").value + ")", f.beginPath(), f.arc(g.x, g.y, i.core("active-bg-size").pfValue / c, 0, 2 * Math.PI), f.fill();
        }
        var h = r.lastRedrawTime;
        if (r.showFps && h) {
            h = /*#__PURE__*/ Math.round(h);
            var m = /*#__PURE__*/ Math.round(1e3 / h), y = "1 frame = " + h + " ms = " + m + " fps";
            if (f.setTransform(1, 0, 0, 1, 0, 0), f.fillStyle = "rgba(255, 0, 0, 0.75)", f.strokeStyle = "rgba(255, 0, 0, 0.75)", f.font = "30px Arial", !oa) {
                var p = /*#__PURE__*/ f.measureText(y);
                oa = p.actualBoundingBoxAscent;
            }
            f.fillText(y, 0, oa);
            var b1 = 60;
            f.strokeRect(0, oa + 10, 250, 20), f.fillRect(0, oa + 10, 250 * Math.min(m / b1, 1), 20);
        }
        o || (l[r.SELECT_BOX] = false);
    }
};
function oo(t, e, r) {
    var a = /*#__PURE__*/ t.createShader(e);
    if (t.shaderSource(a, r), t.compileShader(a), !t.getShaderParameter(a, t.COMPILE_STATUS)) throw new Error(t.getShaderInfoLog(a));
    return a;
}
m$1(oo, "compileShader");
function Wp(t, e, r) {
    var a = /*#__PURE__*/ oo(t, t.VERTEX_SHADER, e), n = /*#__PURE__*/ oo(t, t.FRAGMENT_SHADER, r), i = /*#__PURE__*/ t.createProgram();
    if (t.attachShader(i, a), t.attachShader(i, n), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS)) throw new Error("Could not initialize shaders");
    return i;
}
m$1(Wp, "createProgram");
function Hp(t, e, r) {
    r === void 0 && (r = e);
    var a = /*#__PURE__*/ t.makeOffscreenCanvas(e, r), n = a.context = /*#__PURE__*/ a.getContext("2d");
    return a.clear = function() {
        return n.clearRect(0, 0, a.width, a.height);
    }, a.clear(), a;
}
m$1(Hp, "createTextureCanvas");
function Wi(t) {
    var e = t.pixelRatio, r = /*#__PURE__*/ t.cy.zoom(), a = /*#__PURE__*/ t.cy.pan();
    return {
        zoom: r * e,
        pan: {
            x: a.x * e,
            y: a.y * e
        }
    };
}
m$1(Wi, "getEffectivePanZoom");
function ti(t, e, r, a, n) {
    var i = a * r + e.x, s = n * r + e.y;
    return s = /*#__PURE__*/ Math.round(t.canvasHeight - s), [
        i,
        s
    ];
}
m$1(ti, "modelToRenderedPosition");
function ja(t, e, r) {
    var a = t[0] / 255, n = t[1] / 255, i = t[2] / 255, s = e, o = r || new Array(4);
    return o[0] = a * s, o[1] = n * s, o[2] = i * s, o[3] = s, o;
}
m$1(ja, "toWebGLColor");
function en(t, e) {
    var r = e || new Array(4);
    return r[0] = (t >> 0 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (t >> 16 & 255) / 255, r[3] = (t >> 24 & 255) / 255, r;
}
m$1(en, "indexToVec4");
function Up(t) {
    return t[0] + (t[1] << 8) + (t[2] << 16) + (t[3] << 24);
}
m$1(Up, "vec4ToIndex");
function Xp(t, e) {
    var r = /*#__PURE__*/ t.createTexture();
    return r.buffer = function(a) {
        t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_NEAREST), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, a), t.generateMipmap(t.TEXTURE_2D), t.bindTexture(t.TEXTURE_2D, null);
    }, r.deleteTexture = function() {
        t.deleteTexture(r);
    }, r;
}
m$1(Xp, "createTexture");
function Xu(t, e) {
    switch(e){
        case "float":
            return [
                1,
                t.FLOAT,
                4
            ];
        case "vec2":
            return [
                2,
                t.FLOAT,
                4
            ];
        case "vec3":
            return [
                3,
                t.FLOAT,
                4
            ];
        case "vec4":
            return [
                4,
                t.FLOAT,
                4
            ];
        case "int":
            return [
                1,
                t.INT,
                4
            ];
        case "ivec2":
            return [
                2,
                t.INT,
                4
            ];
    }
}
m$1(Xu, "getTypeInfo");
function Yu(t, e, r) {
    switch(e){
        case t.FLOAT:
            return new Float32Array(r);
        case t.INT:
            return new Int32Array(r);
    }
}
m$1(Yu, "createTypedArray");
function Yp(t, e, r, a, n, i) {
    switch(e){
        case t.FLOAT:
            return new Float32Array(r.buffer, i * a, n);
        case t.INT:
            return new Int32Array(r.buffer, i * a, n);
    }
}
m$1(Yp, "createTypedArrayView");
function _p(t, e, r, a) {
    var n = /*#__PURE__*/ Xu(t, e), i = /*#__PURE__*/ We(n, 2), s = i[0], o = i[1], l = /*#__PURE__*/ Yu(t, o, a), u = /*#__PURE__*/ t.createBuffer();
    return t.bindBuffer(t.ARRAY_BUFFER, u), t.bufferData(t.ARRAY_BUFFER, l, t.STATIC_DRAW), o === t.FLOAT ? t.vertexAttribPointer(r, s, o, false, 0, 0) : o === t.INT && t.vertexAttribIPointer(r, s, o, 0, 0), t.enableVertexAttribArray(r), t.bindBuffer(t.ARRAY_BUFFER, null), u;
}
m$1(_p, "createBufferStaticDraw");
function wt(t, e, r, a) {
    var n = /*#__PURE__*/ Xu(t, r), i = /*#__PURE__*/ We(n, 3), s = i[0], o = i[1], l = i[2], u = /*#__PURE__*/ Yu(t, o, e * s), f = s * l, c = /*#__PURE__*/ t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, c), t.bufferData(t.ARRAY_BUFFER, e * f, t.DYNAMIC_DRAW), t.enableVertexAttribArray(a), o === t.FLOAT ? t.vertexAttribPointer(a, s, o, false, f, 0) : o === t.INT && t.vertexAttribIPointer(a, s, o, f, 0), t.vertexAttribDivisor(a, 1), t.bindBuffer(t.ARRAY_BUFFER, null);
    for(var d = new Array(e), g = 0; g < e; g++)d[g] = /*#__PURE__*/ Yp(t, o, u, f, s, g);
    return c.dataArray = u, c.stride = f, c.size = s, c.getView = function(h) {
        return d[h];
    }, c.setPoint = function(h, m, y) {
        var p = d[h];
        p[0] = m, p[1] = y;
    }, c.bufferSubData = function(h) {
        t.bindBuffer(t.ARRAY_BUFFER, c), h ? t.bufferSubData(t.ARRAY_BUFFER, 0, u, 0, h * s) : t.bufferSubData(t.ARRAY_BUFFER, 0, u);
    }, c;
}
m$1(wt, "createBufferDynamicDraw");
function Zp(t) {
    var e = /*#__PURE__*/ t.createFramebuffer();
    t.bindFramebuffer(t.FRAMEBUFFER, e);
    var r = /*#__PURE__*/ t.createTexture();
    return t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0), t.bindFramebuffer(t.FRAMEBUFFER, null), e.setFramebufferAttachmentSizes = function(a, n) {
        t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, a, n, 0, t.RGBA, t.UNSIGNED_BYTE, null);
    }, e;
}
m$1(Zp, "createPickingFrameBuffer");
var uo = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
    for(var t = 0, e = arguments.length; e--;)t += arguments[e] * arguments[e];
    return Math.sqrt(t);
});
function pa() {
    var t = new uo(9);
    return uo != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t;
}
m$1(pa, "create");
function _u(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
}
m$1(_u, "identity");
function Qp(t, e, r) {
    var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], l = e[5], u = e[6], f = e[7], c = e[8], d = r[0], g = r[1], h = r[2], m = r[3], y = r[4], p = r[5], b1 = r[6], w = r[7], x = r[8];
    return t[0] = d * a + g * s + h * u, t[1] = d * n + g * o + h * f, t[2] = d * i + g * l + h * c, t[3] = m * a + y * s + p * u, t[4] = m * n + y * o + p * f, t[5] = m * i + y * l + p * c, t[6] = b1 * a + w * s + x * u, t[7] = b1 * n + w * o + x * f, t[8] = b1 * i + w * l + x * c, t;
}
m$1(Qp, "multiply");
function En(t, e, r) {
    var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], l = e[5], u = e[6], f = e[7], c = e[8], d = r[0], g = r[1];
    return t[0] = a, t[1] = n, t[2] = i, t[3] = s, t[4] = o, t[5] = l, t[6] = d * a + g * s + u, t[7] = d * n + g * o + f, t[8] = d * i + g * l + c, t;
}
m$1(En, "translate");
function Zu(t, e, r) {
    var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], l = e[5], u = e[6], f = e[7], c = e[8], d = /*#__PURE__*/ Math.sin(r), g = /*#__PURE__*/ Math.cos(r);
    return t[0] = g * a + d * s, t[1] = g * n + d * o, t[2] = g * i + d * l, t[3] = g * s - d * a, t[4] = g * o - d * n, t[5] = g * l - d * i, t[6] = u, t[7] = f, t[8] = c, t;
}
m$1(Zu, "rotate");
function Hi(t, e, r) {
    var a = r[0], n = r[1];
    return t[0] = a * e[0], t[1] = a * e[1], t[2] = a * e[2], t[3] = n * e[3], t[4] = n * e[4], t[5] = n * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
}
m$1(Hi, "scale");
function Jp(t, e, r) {
    return t[0] = 2 / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / r, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t;
}
m$1(Jp, "projection");
var ya = {
    SCREEN: {
        name: "screen",
        screen: true
    },
    PICKING: {
        name: "picking",
        picking: true
    }
}, ua = /*#__PURE__*/ et({
    getKey: null,
    drawElement: null,
    getBoundingBox: null,
    getRotation: null,
    getRotationPoint: null,
    getRotationOffset: null,
    isVisible: null,
    getPadding: null
}), jp = /*#__PURE__*/ function() {
    function t(e, r) {
        ur(this, t), this.debugID = /*#__PURE__*/ Math.floor(Math.random() * 1e4), this.r = e, this.atlasSize = r.webglTexSize, this.rows = r.webglTexRows, this.enableWrapping = r.enableWrapping, this.texHeight = /*#__PURE__*/ Math.floor(this.atlasSize / this.rows), this.maxTexWidth = this.atlasSize, this.texture = null, this.canvas = null, this.needsBuffer = true, this.freePointer = {
            x: 0,
            row: 0
        }, this.keyToLocation = new Map, this.canvas = /*#__PURE__*/ r.createTextureCanvas(e, this.atlasSize, this.atlasSize), this.scratch = /*#__PURE__*/ r.createTextureCanvas(e, this.atlasSize, this.texHeight, "scratch");
    }
    return m$1(t, "Atlas"), lr(t, [
        {
            key: "getKeys",
            value: /*#__PURE__*/ m$1(function() {
                return new Set(this.keyToLocation.keys());
            }, "getKeys")
        },
        {
            key: "getScale",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = r.w, n = r.h, i = this.texHeight, s = this.maxTexWidth, o = i / n, l = a * o, u = n * o;
                return l > s && (o = s / a, l = a * o, u = n * o), {
                    scale: o,
                    texW: l,
                    texH: u
                };
            }, "getScale")
        },
        {
            key: "draw",
            value: /*#__PURE__*/ m$1(function(r, a, n) {
                var i = this, s = this.atlasSize, o = this.rows, l = this.texHeight, u = /*#__PURE__*/ this.getScale(a), f = u.scale, c = u.texW, d = u.texH, g = [
                    null,
                    null
                ], h = /*#__PURE__*/ m$1(function(w, x) {
                    if (n && x) {
                        var S = x.context, T = w.x, E = w.row, D = T, C = l * E;
                        S.save(), S.translate(D, C), S.scale(f, f), n(S, a), S.restore();
                    }
                }, "drawAt"), m = /*#__PURE__*/ m$1(function() {
                    h(i.freePointer, i.canvas), g[0] = {
                        x: i.freePointer.x,
                        y: i.freePointer.row * l,
                        w: c,
                        h: d
                    }, g[1] = {
                        x: i.freePointer.x + c,
                        y: i.freePointer.row * l,
                        w: 0,
                        h: d
                    }, i.freePointer.x += c, i.freePointer.x == s && (i.freePointer.x = 0, i.freePointer.row++);
                }, "drawNormal"), y = /*#__PURE__*/ m$1(function() {
                    var w = i.scratch, x = i.canvas;
                    w.clear(), h({
                        x: 0,
                        row: 0
                    }, w);
                    var S = s - i.freePointer.x, T = c - S, E = l;
                    {
                        var D = i.freePointer.x, C = i.freePointer.row * l, B = S;
                        x.context.drawImage(w, 0, 0, B, E, D, C, B, E), g[0] = {
                            x: D,
                            y: C,
                            w: B,
                            h: d
                        };
                    }
                    {
                        var A = S, P = (i.freePointer.row + 1) * l, M = T;
                        x && x.context.drawImage(w, A, 0, M, E, 0, P, M, E), g[1] = {
                            x: 0,
                            y: P,
                            w: M,
                            h: d
                        };
                    }
                    i.freePointer.x = T, i.freePointer.row++;
                }, "drawWrapped"), p = /*#__PURE__*/ m$1(function() {
                    i.freePointer.x = 0, i.freePointer.row++;
                }, "moveToStartOfNextRow");
                if (this.freePointer.x + c <= s) m();
                else {
                    if (this.freePointer.row >= o - 1) return false;
                    this.freePointer.x === s ? (p(), m()) : this.enableWrapping ? y() : (p(), m());
                }
                return this.keyToLocation.set(r, g), this.needsBuffer = true, g;
            }, "draw")
        },
        {
            key: "getOffsets",
            value: /*#__PURE__*/ m$1(function(r) {
                return this.keyToLocation.get(r);
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
            value: /*#__PURE__*/ m$1(function(r) {
                var a = this.atlasSize, n = this.rows, i = /*#__PURE__*/ this.getScale(r), s = i.texW;
                return this.freePointer.x + s > a ? this.freePointer.row < n - 1 : true;
            }, "canFit")
        },
        {
            key: "bufferIfNeeded",
            value: /*#__PURE__*/ m$1(function(r) {
                this.texture || (this.texture = /*#__PURE__*/ Xp(r, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = false);
            }, "bufferIfNeeded")
        },
        {
            key: "dispose",
            value: /*#__PURE__*/ m$1(function() {
                this.texture && (this.texture.deleteTexture(), this.texture = null, this.needsBuffer = true);
            }, "dispose")
        }
    ]), t;
}(), ey = /*#__PURE__*/ function() {
    function t(e, r) {
        ur(this, t), this.r = e, this.opts = r, this.keyToIds = new Map, this.idToKey = new Map, this.atlases = [], this.styleKeyToAtlas = new Map, this.styleKeyNeedsRedraw = new Set, this.forceGC = false;
    }
    return m$1(t, "AtlasCollection"), lr(t, [
        {
            key: "getKeys",
            value: /*#__PURE__*/ m$1(function() {
                return new Set(this.styleKeyToAtlas.keys());
            }, "getKeys")
        },
        {
            key: "getIdsFor",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = /*#__PURE__*/ this.keyToIds.get(r);
                return a || (a = new Set, this.keyToIds.set(r, a)), a;
            }, "getIdsFor")
        },
        {
            key: "_createAtlas",
            value: /*#__PURE__*/ m$1(function() {
                var r = this.r, a = this.opts;
                return new jp(r, a);
            }, "_createAtlas")
        },
        {
            key: "_getScratchCanvas",
            value: /*#__PURE__*/ m$1(function() {
                if (!this.scratch) {
                    var r = this.r, a = this.opts, n = a.webglTexSize, i = /*#__PURE__*/ Math.floor(n / a.webglTexRows);
                    this.scratch = /*#__PURE__*/ a.createTextureCanvas(r, n, i, "scratch");
                }
                return this.scratch;
            }, "_getScratchCanvas")
        },
        {
            key: "draw",
            value: /*#__PURE__*/ m$1(function(r, a, n, i) {
                if (this.styleKeyNeedsRedraw.has(a)) {
                    this.styleKeyNeedsRedraw.delete(a), this.deleteKey(r, a);
                    var s = /*#__PURE__*/ this.styleKeyToAtlas.get(a);
                    s && (s.forceGC = true), this.styleKeyToAtlas.delete(a);
                }
                var o = /*#__PURE__*/ this.styleKeyToAtlas.get(a);
                return o || (o = this.atlases[this.atlases.length - 1], (!o || !o.canFit(n)) && (o = /*#__PURE__*/ this._createAtlas(), this.atlases.push(o)), o.draw(a, n, i), this.styleKeyToAtlas.set(a, o), this.getIdsFor(a).add(r), this.idToKey.set(r, a)), o;
            }, "draw")
        },
        {
            key: "getAtlas",
            value: /*#__PURE__*/ m$1(function(r) {
                return this.styleKeyToAtlas.get(r);
            }, "getAtlas")
        },
        {
            key: "hasAtlas",
            value: /*#__PURE__*/ m$1(function(r) {
                return this.styleKeyToAtlas.has(r);
            }, "hasAtlas")
        },
        {
            key: "deleteKey",
            value: /*#__PURE__*/ m$1(function(r, a) {
                this.idToKey.delete(r), this.getIdsFor(a).delete(r);
            }, "deleteKey")
        },
        {
            key: "checkKeyIsInvalid",
            value: /*#__PURE__*/ m$1(function(r, a) {
                if (!this.idToKey.has(r)) return false;
                var n = /*#__PURE__*/ this.idToKey.get(r);
                return n != a ? (this.deleteKey(r, n), true) : false;
            }, "checkKeyIsInvalid")
        },
        {
            key: "_getKeysToCollect",
            value: /*#__PURE__*/ m$1(function() {
                var r = new Set, a = /*#__PURE__*/ xt(/*#__PURE__*/ this.styleKeyToAtlas.keys()), n;
                try {
                    for(a.s(); !(n = /*#__PURE__*/ a.n()).done;){
                        var i = n.value;
                        this.getIdsFor(i).size == 0 && r.add(i);
                    }
                } catch (s) {
                    a.e(s);
                } finally{
                    a.f();
                }
                return r;
            }, "_getKeysToCollect")
        },
        {
            key: "gc",
            value: /*#__PURE__*/ m$1(function() {
                var r = this, a = /*#__PURE__*/ this.atlases.some(function(d) {
                    return d.forceGC;
                }), n = /*#__PURE__*/ this._getKeysToCollect();
                if (n.size === 0 && !a) {
                    console.log("nothing to garbage collect");
                    return;
                }
                var i = [], s = new Map, o = null, l = /*#__PURE__*/ xt(this.atlases), u;
                try {
                    var f = /*#__PURE__*/ m$1(function() {
                        var g = u.value, h = /*#__PURE__*/ g.getKeys(), m = /*#__PURE__*/ ty(n, h);
                        if (m.size === 0 && !g.forceGC) return i.push(g), h.forEach(function(E) {
                            return s.set(E, g);
                        }), "continue";
                        o || (o = /*#__PURE__*/ r._createAtlas(), i.push(o));
                        var y = /*#__PURE__*/ xt(h), p;
                        try {
                            for(y.s(); !(p = /*#__PURE__*/ y.n()).done;){
                                var b1 = p.value;
                                if (!m.has(b1)) {
                                    var w = /*#__PURE__*/ g.getOffsets(b1), x = /*#__PURE__*/ We(w, 2), S = x[0], T = x[1];
                                    o.canFit({
                                        w: S.w + T.w,
                                        h: S.h
                                    }) || (o = /*#__PURE__*/ r._createAtlas(), i.push(o)), r._copyTextureToNewAtlas(b1, g, o), s.set(b1, o);
                                }
                            }
                        } catch (E) {
                            y.e(E);
                        } finally{
                            y.f();
                        }
                    }, "_loop");
                    for(l.s(); !(u = /*#__PURE__*/ l.n()).done;)var c = /*#__PURE__*/ f();
                } catch (d) {
                    l.e(d);
                } finally{
                    l.f();
                }
                this.atlases = i, this.styleKeyToAtlas = s;
            }, "gc")
        },
        {
            key: "_copyTextureToNewAtlas",
            value: /*#__PURE__*/ m$1(function(r, a, n) {
                var i = /*#__PURE__*/ a.getOffsets(r), s = /*#__PURE__*/ We(i, 2), o = s[0], l = s[1];
                if (l.w === 0) n.draw(r, o, function(d) {
                    d.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h);
                });
                else {
                    var u = /*#__PURE__*/ this._getScratchCanvas();
                    u.clear(), u.context.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h), u.context.drawImage(a.canvas, l.x, l.y, l.w, l.h, o.w, 0, l.w, l.h);
                    var f = o.w + l.w, c = o.h;
                    n.draw(r, {
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
    ]), t;
}();
function ty(t, e) {
    return t.intersection ? t.intersection(e) : new Set(yo(t).filter(function(r) {
        return e.has(r);
    }));
}
m$1(ty, "intersection");
var ry = /*#__PURE__*/ function() {
    function t(e, r) {
        ur(this, t), this.r = e;
        var a = r;
        this.globalOptions = a, this.maxAtlases = a.webglTexPerBatch, this.atlasSize = a.webglTexSize, this.renderTypes = new Map, this.maxAtlasesPerBatch = r.webglTexPerBatch, this.batchAtlases = [], this._cacheScratchCanvas(a);
    }
    return m$1(t, "AtlasManager"), lr(t, [
        {
            key: "_cacheScratchCanvas",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = -1, n = -1, i = null, s = r.createTextureCanvas;
                r.createTextureCanvas = function(o, l, u, f) {
                    return f ? ((!i || l != a || u != n) && (a = l, n = u, i = /*#__PURE__*/ s(o, l, u)), i) : s(o, l, u);
                };
            }, "_cacheScratchCanvas")
        },
        {
            key: "addRenderType",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = new ey(this.r, this.globalOptions), i = a;
                this.renderTypes.set(r, /*#__PURE__*/ he({
                    type: r,
                    atlasCollection: n
                }, i));
            }, "addRenderType")
        },
        {
            key: "getRenderTypes",
            value: /*#__PURE__*/ m$1(function() {
                return yo(/*#__PURE__*/ this.renderTypes.values());
            }, "getRenderTypes")
        },
        {
            key: "getRenderTypeOpts",
            value: /*#__PURE__*/ m$1(function(r) {
                return this.renderTypes.get(r);
            }, "getRenderTypeOpts")
        },
        {
            key: "invalidate",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.forceRedraw, i = n === void 0 ? false : n, s = a.filterEle, o = s === void 0 ? function() {
                    return true;
                } : s, l = a.filterType, u = l === void 0 ? function() {
                    return true;
                } : l, f = false, c = /*#__PURE__*/ xt(r), d;
                try {
                    for(c.s(); !(d = /*#__PURE__*/ c.n()).done;){
                        var g = d.value;
                        if (o(g)) {
                            var h = /*#__PURE__*/ g.id(), m = /*#__PURE__*/ xt(/*#__PURE__*/ this.getRenderTypes()), y;
                            try {
                                for(m.s(); !(y = /*#__PURE__*/ m.n()).done;){
                                    var p = y.value;
                                    if (u(p.type)) {
                                        var b1 = /*#__PURE__*/ p.getKey(g);
                                        i ? (p.atlasCollection.deleteKey(h, b1), p.atlasCollection.styleKeyNeedsRedraw.add(b1), f = !0) : f |= /*#__PURE__*/ p.atlasCollection.checkKeyIsInvalid(h, b1);
                                    }
                                }
                            } catch (w) {
                                m.e(w);
                            } finally{
                                m.f();
                            }
                        }
                    }
                } catch (w) {
                    c.e(w);
                } finally{
                    c.f();
                }
                return f;
            }, "invalidate")
        },
        {
            key: "gc",
            value: /*#__PURE__*/ m$1(function() {
                var r = /*#__PURE__*/ xt(/*#__PURE__*/ this.getRenderTypes()), a;
                try {
                    for(r.s(); !(a = /*#__PURE__*/ r.n()).done;){
                        var n = a.value;
                        n.atlasCollection.gc();
                    }
                } catch (i) {
                    r.e(i);
                } finally{
                    r.f();
                }
            }, "gc")
        },
        {
            key: "isRenderable",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = /*#__PURE__*/ this.getRenderTypeOpts(a);
                return n && n.isVisible(r);
            }, "isRenderable")
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
            key: "getOrCreateAtlas",
            value: /*#__PURE__*/ m$1(function(r, a, n) {
                var i = /*#__PURE__*/ this.renderTypes.get(n), s = /*#__PURE__*/ i.getKey(r), o = /*#__PURE__*/ r.id();
                return i.atlasCollection.draw(o, s, a, function(l) {
                    i.drawElement(l, r, a, true, true);
                });
            }, "getOrCreateAtlas")
        },
        {
            key: "getAtlasIndexForBatch",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = /*#__PURE__*/ this.batchAtlases.indexOf(r);
                if (a < 0) {
                    if (this.batchAtlases.length === this.maxAtlasesPerBatch) return;
                    this.batchAtlases.push(r), a = this.batchAtlases.length - 1;
                }
                return a;
            }, "getAtlasIndexForBatch")
        },
        {
            key: "getIndexArray",
            value: /*#__PURE__*/ m$1(function() {
                return Array.from({
                    length: this.maxAtlases
                }, function(r, a) {
                    return a;
                });
            }, "getIndexArray")
        },
        {
            key: "getAtlasInfo",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = /*#__PURE__*/ this.renderTypes.get(a), i = /*#__PURE__*/ n.getBoundingBox(r), s = /*#__PURE__*/ this.getOrCreateAtlas(r, i, a), o = /*#__PURE__*/ this.getAtlasIndexForBatch(s);
                if (o !== void 0) {
                    var l = /*#__PURE__*/ n.getKey(r), u = /*#__PURE__*/ s.getOffsets(l), f = /*#__PURE__*/ We(u, 2), c = f[0], d = f[1];
                    return {
                        atlasID: o,
                        tex: c,
                        tex1: c,
                        tex2: d,
                        bb: i,
                        type: a,
                        styleKey: l
                    };
                }
            }, "getAtlasInfo")
        },
        {
            key: "canAddToCurrentBatch",
            value: /*#__PURE__*/ m$1(function(r, a) {
                if (this.batchAtlases.length === this.maxAtlasesPerBatch) {
                    var n = /*#__PURE__*/ this.renderTypes.get(a), i = /*#__PURE__*/ n.getKey(r), s = /*#__PURE__*/ n.atlasCollection.getAtlas(i);
                    return s && this.batchAtlases.includes(s);
                }
                return true;
            }, "canAddToCurrentBatch")
        },
        {
            key: "setTransformMatrix",
            value: /*#__PURE__*/ m$1(function(r, a, n) {
                var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, s = a.bb, o = a.type, l = a.tex1, u = a.tex2, f = /*#__PURE__*/ this.getRenderTypeOpts(o), c = f.getPadding ? f.getPadding(n) : 0, d = l.w / (l.w + u.w);
                i || (d = 1 - d);
                var g = /*#__PURE__*/ this.getAdjustedBB(s, c, i, d), h, m;
                _u(r);
                var y = f.getRotation ? f.getRotation(n) : 0;
                if (y !== 0) {
                    var p = /*#__PURE__*/ f.getRotationPoint(n), b1 = p.x, w = p.y;
                    En(r, r, [
                        b1,
                        w
                    ]), Zu(r, r, y);
                    var x = /*#__PURE__*/ f.getRotationOffset(n);
                    h = x.x + g.xOffset, m = x.y;
                } else h = g.x1, m = g.y1;
                En(r, r, [
                    h,
                    m
                ]), Hi(r, r, [
                    g.w,
                    g.h
                ]);
            }, "setTransformMatrix")
        },
        {
            key: "getTransformMatrix",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, i = /*#__PURE__*/ pa();
                return this.setTransformMatrix(i, r, a, n), i;
            }, "getTransformMatrix")
        },
        {
            key: "getAdjustedBB",
            value: /*#__PURE__*/ m$1(function(r, a, n, i) {
                var s = r.x1, o = r.y1, l = r.w, u = r.h;
                a && (s -= a, o -= a, l += 2 * a, u += 2 * a);
                var f = 0, c = l * i;
                return n && i < 1 ? l = c : !n && i < 1 && (f = l - c, s += f, l = c), {
                    x1: s,
                    y1: o,
                    w: l,
                    h: u,
                    xOffset: f
                };
            }, "getAdjustedBB")
        },
        {
            key: "getDebugInfo",
            value: /*#__PURE__*/ m$1(function() {
                var r = [], a = /*#__PURE__*/ xt(this.renderTypes), n;
                try {
                    for(a.s(); !(n = /*#__PURE__*/ a.n()).done;){
                        var i = /*#__PURE__*/ We(n.value, 2), s = i[0], o = i[1], l = /*#__PURE__*/ o.atlasCollection.getCounts(), u = l.keyCount, f = l.atlasCount;
                        r.push({
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
                return r;
            }, "getDebugInfo")
        }
    ]), t;
}(), ri = 0, lo = 1, vo = 2, ai = 3, ay = /*#__PURE__*/ function() {
    function t(e, r, a) {
        ur(this, t), this.r = e, this.gl = r, this.maxInstances = a.webglBatchSize, this.maxAtlases = a.webglTexPerBatch, this.atlasSize = a.webglTexSize, this.bgColor = a.bgColor, a.enableWrapping = true, a.createTextureCanvas = Hp, this.atlasManager = new ry(e, a), this.program = /*#__PURE__*/ this.createShaderProgram(ya.SCREEN), this.pickingProgram = /*#__PURE__*/ this.createShaderProgram(ya.PICKING), this.vao = /*#__PURE__*/ this.createVAO(), this.debugInfo = [];
    }
    return m$1(t, "ElementDrawingWebGL"), lr(t, [
        {
            key: "addTextureRenderType",
            value: /*#__PURE__*/ m$1(function(r, a) {
                this.atlasManager.addRenderType(r, a);
            }, "addTextureRenderType")
        },
        {
            key: "invalidate",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.type, i = this.atlasManager;
                return n ? i.invalidate(r, {
                    filterType: /*#__PURE__*/ m$1(function(o) {
                        return o === n;
                    }, "filterType"),
                    forceRedraw: true
                }) : i.invalidate(r);
            }, "invalidate")
        },
        {
            key: "gc",
            value: /*#__PURE__*/ m$1(function() {
                this.atlasManager.gc();
            }, "gc")
        },
        {
            key: "createShaderProgram",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = this.gl, n = /*#__PURE__*/ `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; 

      // what are we rendering?
      in int aVertType;

      // for picking
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex1; // x/y/w/h of texture in atlas
      in vec4 aTex2; 

      // for any transforms that are needed
      in vec4 aScaleRotate1;  // vectors use fewer attributes than matrices
      in vec2 aTranslate1;
      in vec4 aScaleRotate2;
      in vec2 aTranslate2;

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in float aLineWidth;
      in vec4 aEdgeColor;

      out vec2 vTexCoord;
      out vec4 vEdgeColor;
      flat out int vAtlasId;
      flat out vec4 vIndex;
      flat out int vVertType;

      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition;

        if(aVertType == `.concat(ri, `) {
          float texX;
          float texY;
          float texW;
          float texH;
          mat3  texMatrix;

          int vid = gl_VertexID;
          if(vid <= 5) {
            texX = aTex1.x;
            texY = aTex1.y;
            texW = aTex1.z;
            texH = aTex1.w;
            texMatrix = mat3(
              vec3(aScaleRotate1.xy, 0.0),
              vec3(aScaleRotate2.zw, 0.0),
              vec3(aTranslate1,      1.0)
            );
          } else {
            texX = aTex2.x;
            texY = aTex2.y;
            texW = aTex2.z;
            texH = aTex2.w;
            texMatrix = mat3(
              vec3(aScaleRotate2.xy, 0.0),
              vec3(aScaleRotate2.zw, 0.0),
              vec3(aTranslate2,      1.0)
            );
          }

          if(vid == 1 || vid == 2 || vid == 4 || vid == 7 || vid == 8 || vid == 10) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5 || vid == 8 || vid == 10 || vid == 11) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * texMatrix * vec3(position, 1.0), 1.0);
        } 
        else if(aVertType == `).concat(lo, ` && vid < 6) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vEdgeColor = aEdgeColor;
        } 
        else if(aVertType == `).concat(vo, ` && vid < 6) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0 = pointA;
          vec2 p1 = pointB;
          vec2 p2 = pointC;
          vec2 pos = position;
          if(position.x == 1.0) {
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
          float width = aLineWidth;

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vEdgeColor = aEdgeColor;
        } 
        else if(aVertType == `).concat(ai, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2( 0.0,   0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          mat3 transform = mat3(
            vec3(aScaleRotate1.xy, 0.0),
            vec3(aScaleRotate1.zw, 0.0),
            vec3(aTranslate1,      1.0)
          );
          gl_Position = vec4(uPanZoomMatrix * transform * vec3(position, 1.0), 1.0);
          vEdgeColor = aEdgeColor;
        } else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vIndex = aIndex;
        vVertType = aVertType;
      }
    `), i = /*#__PURE__*/ this.atlasManager.getIndexArray(), s = /*#__PURE__*/ `#version 300 es
      precision highp float;

      // define texture unit for each node in the batch
      `.concat(/*#__PURE__*/ i.map(function(u) {
                    return "uniform sampler2D uTexture".concat(u, ";");
                }).join(`
	`), `

      uniform vec4 uBGColor;

      in vec2 vTexCoord;
      in vec4 vEdgeColor;
      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;

      out vec4 outColor;

      void main(void) {
        if(vVertType == `).concat(ri, `) {
          `).concat(/*#__PURE__*/ i.map(function(u) {
                    return "if(vAtlasId == ".concat(u, ") outColor = texture(uTexture").concat(u, ", vTexCoord);");
                }).join(`
	else `), `
        } else if(vVertType == `).concat(ai, `) {
          // blend arrow color with background (using premultiplied alpha)
          outColor.rgb = vEdgeColor.rgb + (uBGColor.rgb * (1.0 - vEdgeColor.a)); 
          outColor.a = 1.0; // make opaque, masks out line under arrow
        } else {
          outColor = vEdgeColor;
        }

        `).concat(r.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `), o = /*#__PURE__*/ Wp(a, n, s);
                o.aPosition = /*#__PURE__*/ a.getAttribLocation(o, "aPosition"), o.aIndex = /*#__PURE__*/ a.getAttribLocation(o, "aIndex"), o.aVertType = /*#__PURE__*/ a.getAttribLocation(o, "aVertType"), o.aAtlasId = /*#__PURE__*/ a.getAttribLocation(o, "aAtlasId"), o.aTex1 = /*#__PURE__*/ a.getAttribLocation(o, "aTex1"), o.aTex2 = /*#__PURE__*/ a.getAttribLocation(o, "aTex2"), o.aScaleRotate1 = /*#__PURE__*/ a.getAttribLocation(o, "aScaleRotate1"), o.aTranslate1 = /*#__PURE__*/ a.getAttribLocation(o, "aTranslate1"), o.aScaleRotate2 = /*#__PURE__*/ a.getAttribLocation(o, "aScaleRotate2"), o.aTranslate2 = /*#__PURE__*/ a.getAttribLocation(o, "aTranslate2"), o.aPointAPointB = /*#__PURE__*/ a.getAttribLocation(o, "aPointAPointB"), o.aPointCPointD = /*#__PURE__*/ a.getAttribLocation(o, "aPointCPointD"), o.aLineWidth = /*#__PURE__*/ a.getAttribLocation(o, "aLineWidth"), o.aEdgeColor = /*#__PURE__*/ a.getAttribLocation(o, "aEdgeColor"), o.uPanZoomMatrix = /*#__PURE__*/ a.getUniformLocation(o, "uPanZoomMatrix"), o.uAtlasSize = /*#__PURE__*/ a.getUniformLocation(o, "uAtlasSize"), o.uBGColor = /*#__PURE__*/ a.getUniformLocation(o, "uBGColor"), o.uTextures = [];
                for(var l = 0; l < this.atlasManager.maxAtlases; l++)o.uTextures.push(/*#__PURE__*/ a.getUniformLocation(o, /*#__PURE__*/ "uTexture".concat(l)));
                return o;
            }, "createShaderProgram")
        },
        {
            key: "createVAO",
            value: /*#__PURE__*/ m$1(function() {
                var r = [
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
                ], a = /*#__PURE__*/ [].concat(r, r);
                this.vertexCount = a.length / 2;
                var n = this.maxInstances, i = this.gl, s = this.program, o = /*#__PURE__*/ i.createVertexArray();
                return i.bindVertexArray(o), _p(i, "vec2", s.aPosition, a), this.indexBuffer = /*#__PURE__*/ wt(i, n, "vec4", s.aIndex), this.vertTypeBuffer = /*#__PURE__*/ wt(i, n, "int", s.aVertType), this.atlasIdBuffer = /*#__PURE__*/ wt(i, n, "int", s.aAtlasId), this.tex1Buffer = /*#__PURE__*/ wt(i, n, "vec4", s.aTex1), this.tex2Buffer = /*#__PURE__*/ wt(i, n, "vec4", s.aTex2), this.scaleRotate1Buffer = /*#__PURE__*/ wt(i, n, "vec4", s.aScaleRotate1), this.translate1Buffer = /*#__PURE__*/ wt(i, n, "vec2", s.aTranslate1), this.scaleRotate2Buffer = /*#__PURE__*/ wt(i, n, "vec4", s.aScaleRotate2), this.translate2Buffer = /*#__PURE__*/ wt(i, n, "vec2", s.aTranslate2), this.pointAPointBBuffer = /*#__PURE__*/ wt(i, n, "vec4", s.aPointAPointB), this.pointCPointDBuffer = /*#__PURE__*/ wt(i, n, "vec4", s.aPointCPointD), this.lineWidthBuffer = /*#__PURE__*/ wt(i, n, "float", s.aLineWidth), this.edgeColorBuffer = /*#__PURE__*/ wt(i, n, "vec4", s.aEdgeColor), i.bindVertexArray(null), o;
            }, "createVAO")
        },
        {
            key: "buffers",
            get: /*#__PURE__*/ m$1(function() {
                var r = this;
                return this._buffers || (this._buffers = /*#__PURE__*/ Object.keys(this).filter(function(a) {
                    return a.endsWith("Buffer");
                }).map(function(a) {
                    return r[a];
                })), this._buffers;
            }, "get")
        },
        {
            key: "startFrame",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ya.SCREEN;
                this.panZoomMatrix = r, this.debugInfo = a, this.renderTarget = n, this.startBatch();
            }, "startFrame")
        },
        {
            key: "startBatch",
            value: /*#__PURE__*/ m$1(function() {
                this.instanceCount = 0, this.atlasManager.startBatch();
            }, "startBatch")
        },
        {
            key: "endFrame",
            value: /*#__PURE__*/ m$1(function() {
                this.endBatch();
            }, "endFrame")
        },
        {
            key: "getTempMatrix",
            value: /*#__PURE__*/ m$1(function() {
                return this.tempMatrix = this.tempMatrix || pa();
            }, "getTempMatrix")
        },
        {
            key: "drawTexture",
            value: /*#__PURE__*/ m$1(function(r, a, n) {
                var i = this.atlasManager;
                if (i.isRenderable(r, n)) {
                    i.canAddToCurrentBatch(r, n) || this.endBatch();
                    var s = this.instanceCount;
                    this.vertTypeBuffer.getView(s)[0] = ri;
                    var o = /*#__PURE__*/ this.indexBuffer.getView(s);
                    en(a, o);
                    var l = i.getAtlasInfo(r, n, l), u = l.atlasID, f = l.tex1, c = l.tex2, d = /*#__PURE__*/ this.atlasIdBuffer.getView(s);
                    d[0] = u;
                    var g = /*#__PURE__*/ this.tex1Buffer.getView(s);
                    g[0] = f.x, g[1] = f.y, g[2] = f.w, g[3] = f.h;
                    var h = /*#__PURE__*/ this.tex2Buffer.getView(s);
                    h[0] = c.x, h[1] = c.y, h[2] = c.w, h[3] = c.h;
                    for(var m = /*#__PURE__*/ this.getTempMatrix(), y = 0, p = [
                        1,
                        2
                    ]; y < p.length; y++){
                        var b1 = p[y];
                        i.setTransformMatrix(m, l, r, b1 === 1);
                        var w = /*#__PURE__*/ this["scaleRotate".concat(b1, "Buffer")].getView(s);
                        w[0] = m[0], w[1] = m[1], w[2] = m[3], w[3] = m[4];
                        var x = /*#__PURE__*/ this["translate".concat(b1, "Buffer")].getView(s);
                        x[0] = m[6], x[1] = m[7];
                    }
                    this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                }
            }, "drawTexture")
        },
        {
            key: "drawEdgeArrow",
            value: /*#__PURE__*/ m$1(function(r, a, n) {
                var i = r._private.rscratch, s, o, l;
                if (n === "source" ? (s = i.arrowStartX, o = i.arrowStartY, l = i.srcArrowAngle) : (s = i.arrowEndX, o = i.arrowEndY, l = i.tgtArrowAngle), !(isNaN(s) || s == null || isNaN(o) || o == null || isNaN(l) || l == null)) {
                    var u = r.pstyle(n + "-arrow-shape").value;
                    if (u !== "none") {
                        var f = r.pstyle(n + "-arrow-color").value, c = r.pstyle("opacity").value, d = r.pstyle("line-opacity").value, g = c * d, h = r.pstyle("width").pfValue, m = r.pstyle("arrow-scale").value, y = /*#__PURE__*/ this.r.getArrowWidth(h, m), p = /*#__PURE__*/ this.getTempMatrix();
                        _u(p), En(p, p, [
                            s,
                            o
                        ]), Hi(p, p, [
                            y,
                            y
                        ]), Zu(p, p, l);
                        var b1 = this.instanceCount;
                        this.vertTypeBuffer.getView(b1)[0] = ai;
                        var w = /*#__PURE__*/ this.indexBuffer.getView(b1);
                        en(a, w);
                        var x = /*#__PURE__*/ this.edgeColorBuffer.getView(b1);
                        ja(f, g, x);
                        var S = /*#__PURE__*/ this.scaleRotate1Buffer.getView(b1);
                        S[0] = p[0], S[1] = p[1], S[2] = p[3], S[3] = p[4];
                        var T = /*#__PURE__*/ this.translate1Buffer.getView(b1);
                        T[0] = p[6], T[1] = p[7], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                    }
                }
            }, "drawEdgeArrow")
        },
        {
            key: "drawEdgeLine",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = r.pstyle("opacity").value, i = r.pstyle("line-opacity").value, s = r.pstyle("width").pfValue, o = r.pstyle("line-color").value, l = n * i, u = /*#__PURE__*/ this.getEdgePoints(r);
                if (u.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), u.length == 4) {
                    var f = this.instanceCount;
                    this.vertTypeBuffer.getView(f)[0] = lo;
                    var c = /*#__PURE__*/ this.indexBuffer.getView(f);
                    en(a, c);
                    var d = /*#__PURE__*/ this.edgeColorBuffer.getView(f);
                    ja(o, l, d);
                    var g = /*#__PURE__*/ this.lineWidthBuffer.getView(f);
                    g[0] = s;
                    var h = /*#__PURE__*/ this.pointAPointBBuffer.getView(f);
                    h[0] = u[0], h[1] = u[1], h[2] = u[2], h[3] = u[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                } else for(var m = 0; m < u.length - 2; m += 2){
                    var y = this.instanceCount;
                    this.vertTypeBuffer.getView(y)[0] = vo;
                    var p = /*#__PURE__*/ this.indexBuffer.getView(y);
                    en(a, p);
                    var b1 = /*#__PURE__*/ this.edgeColorBuffer.getView(y);
                    ja(o, l, b1);
                    var w = /*#__PURE__*/ this.lineWidthBuffer.getView(y);
                    w[0] = s;
                    var x = u[m - 2], S = u[m - 1], T = u[m], E = u[m + 1], D = u[m + 2], C = u[m + 3], B = u[m + 4], A = u[m + 5];
                    m == 0 && (x = 2 * T - D + .001, S = 2 * E - C + .001), m == u.length - 4 && (B = 2 * D - T + .001, A = 2 * C - E + .001);
                    var P = /*#__PURE__*/ this.pointAPointBBuffer.getView(y);
                    P[0] = x, P[1] = S, P[2] = T, P[3] = E;
                    var M = /*#__PURE__*/ this.pointCPointDBuffer.getView(y);
                    M[0] = D, M[1] = C, M[2] = B, M[3] = A, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                }
            }, "drawEdgeLine")
        },
        {
            key: "getEdgePoints",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = r._private.rscratch, n = a.allpts;
                if (n.length == 4) return n;
                var i = /*#__PURE__*/ this.getNumSegments(r);
                return this.getCurveSegmentPoints(n, i);
            }, "getEdgePoints")
        },
        {
            key: "getNumSegments",
            value: /*#__PURE__*/ m$1(function(r) {
                var a = 15;
                return Math.min(/*#__PURE__*/ Math.max(a, 5), this.maxInstances);
            }, "getNumSegments")
        },
        {
            key: "getCurveSegmentPoints",
            value: /*#__PURE__*/ m$1(function(r, a) {
                if (r.length == 4) return r;
                for(var n = /*#__PURE__*/ Array((a + 1) * 2), i = 0; i <= a; i++)if (i == 0) n[0] = r[0], n[1] = r[1];
                else if (i == a) n[i * 2] = r[r.length - 2], n[i * 2 + 1] = r[r.length - 1];
                else {
                    var s = i / a;
                    this.setCurvePoint(r, s, n, i * 2);
                }
                return n;
            }, "getCurveSegmentPoints")
        },
        {
            key: "setCurvePoint",
            value: /*#__PURE__*/ m$1(function(r, a, n, i) {
                if (r.length <= 2) n[i] = r[0], n[i + 1] = r[1];
                else {
                    for(var s = /*#__PURE__*/ Array(r.length - 2), o = 0; o < s.length; o += 2){
                        var l = (1 - a) * r[o] + a * r[o + 2], u = (1 - a) * r[o + 1] + a * r[o + 3];
                        s[o] = l, s[o + 1] = u;
                    }
                    return this.setCurvePoint(s, a, n, i);
                }
            }, "setCurvePoint")
        },
        {
            key: "endBatch",
            value: /*#__PURE__*/ m$1(function() {
                var r = this.gl, a = this.vao, n = this.vertexCount, i = this.instanceCount;
                if (i !== 0) {
                    var s = this.renderTarget.picking ? this.pickingProgram : this.program;
                    r.useProgram(s), r.bindVertexArray(a);
                    var o = /*#__PURE__*/ xt(this.buffers), l;
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
                    for(var f = /*#__PURE__*/ this.atlasManager.getAtlases(), c = 0; c < f.length; c++)f[c].bufferIfNeeded(r);
                    for(var d = 0; d < f.length; d++)r.activeTexture(r.TEXTURE0 + d), r.bindTexture(r.TEXTURE_2D, f[d].texture), r.uniform1i(s.uTextures[d], d);
                    r.uniformMatrix3fv(s.uPanZoomMatrix, false, this.panZoomMatrix), r.uniform1i(s.uAtlasSize, this.atlasManager.atlasSize);
                    var g = /*#__PURE__*/ ja(this.bgColor, 1);
                    r.uniform4fv(s.uBGColor, g), r.drawArraysInstanced(r.TRIANGLES, 0, n, i), r.bindVertexArray(null), r.bindTexture(r.TEXTURE_2D, null), this.debugInfo && this.debugInfo.push({
                        count: i,
                        atlasCount: f.length
                    }), this.startBatch();
                }
            }, "endBatch")
        },
        {
            key: "getDebugInfo",
            value: /*#__PURE__*/ m$1(function() {
                return this.debugInfo;
            }, "getDebugInfo")
        },
        {
            key: "getAtlasDebugInfo",
            value: /*#__PURE__*/ m$1(function() {
                return this.atlasManager.getDebugInfo();
            }, "getAtlasDebugInfo")
        }
    ]), t;
}();
function fo(t, e) {
    return "rgba(".concat(t[0], ", ").concat(t[1], ", ").concat(t[2], ", ").concat(e, ")");
}
m$1(fo, "fillStyle");
var ny = /*#__PURE__*/ function() {
    function t(e) {
        ur(this, t), this.r = e;
    }
    return m$1(t, "OverlayUnderlayRenderer"), lr(t, [
        {
            key: "getStyleKey",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = /*#__PURE__*/ this.getStyle(r, a), i = n.shape, s = n.opacity, o = n.color;
                if (!i) return null;
                var l = /*#__PURE__*/ a.width(), u = /*#__PURE__*/ a.height(), f = /*#__PURE__*/ fo(o, s);
                return ar(/*#__PURE__*/ "".concat(i, "-").concat(l, "-").concat(u, "-").concat(f));
            }, "getStyleKey")
        },
        {
            key: "isVisible",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = a.pstyle(/*#__PURE__*/ "".concat(r, "-opacity")).value;
                return n > 0;
            }, "isVisible")
        },
        {
            key: "getStyle",
            value: /*#__PURE__*/ m$1(function(r, a) {
                var n = a.pstyle(/*#__PURE__*/ "".concat(r, "-opacity")).value, i = a.pstyle(/*#__PURE__*/ "".concat(r, "-color")).value, s = a.pstyle(/*#__PURE__*/ "".concat(r, "-shape")).value;
                return {
                    opacity: n,
                    color: i,
                    shape: s
                };
            }, "getStyle")
        },
        {
            key: "getPadding",
            value: /*#__PURE__*/ m$1(function(r, a) {
                return a.pstyle(/*#__PURE__*/ "".concat(r, "-padding")).pfValue;
            }, "getPadding")
        },
        {
            key: "draw",
            value: /*#__PURE__*/ m$1(function(r, a, n, i) {
                if (this.isVisible(r, n)) {
                    var s = this.r, o = i.w, l = i.h, u = o / 2, f = l / 2, c = /*#__PURE__*/ this.getStyle(r, n), d = c.shape, g = c.color, h = c.opacity;
                    a.save(), a.fillStyle = /*#__PURE__*/ fo(g, h), d === "round-rectangle" || d === "roundrectangle" ? s.drawRoundRectanglePath(a, u, f, o, l, "auto") : d === "ellipse" && s.drawEllipsePath(a, u, f, o, l), a.fill(), a.restore();
                }
            }, "draw")
        }
    ]), t;
}();
function iy(t) {
    var e = t && t.style && t.style.backgroundColor || "white";
    return To(e);
}
m$1(iy, "getBGColor");
var Qu = {};
Qu.initWebgl = function(t, e) {
    var r = this, a = r.data.contexts[r.WEBGL], n = /*#__PURE__*/ t.cy.container();
    t.bgColor = /*#__PURE__*/ iy(n), t.webglTexSize = /*#__PURE__*/ Math.min(t.webglTexSize, /*#__PURE__*/ a.getParameter(a.MAX_TEXTURE_SIZE)), t.webglTexRows = /*#__PURE__*/ Math.min(t.webglTexRows, 54), t.webglBatchSize = /*#__PURE__*/ Math.min(t.webglBatchSize, 16384), t.webglTexPerBatch = /*#__PURE__*/ Math.min(t.webglTexPerBatch, /*#__PURE__*/ a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), r.webglDebug = t.webglDebug, r.webglDebugShowAtlases = t.webglDebugShowAtlases, console.log("max texture units", /*#__PURE__*/ a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), console.log("max texture size", /*#__PURE__*/ a.getParameter(a.MAX_TEXTURE_SIZE)), console.log("webgl options", t), r.pickingFrameBuffer = /*#__PURE__*/ Zp(a), r.pickingFrameBuffer.needsDraw = true;
    var i = /*#__PURE__*/ m$1(function(f) {
        return r.getTextAngle(f, null);
    }, "getLabelRotation"), s = /*#__PURE__*/ m$1(function(f) {
        var c = /*#__PURE__*/ f.pstyle("label");
        return c && c.value;
    }, "isLabelVisible");
    r.eleDrawing = new ay(r, a, t);
    var o = new ny(r);
    r.eleDrawing.addTextureRenderType("node-body", /*#__PURE__*/ ua({
        getKey: e.getStyleKey,
        getBoundingBox: e.getElementBox,
        drawElement: e.drawElement,
        isVisible: /*#__PURE__*/ m$1(function(f) {
            return f.visible();
        }, "isVisible")
    })), r.eleDrawing.addTextureRenderType("node-label", /*#__PURE__*/ ua({
        getKey: e.getLabelKey,
        getBoundingBox: e.getLabelBox,
        drawElement: e.drawLabel,
        getRotation: i,
        getRotationPoint: e.getLabelRotationPoint,
        getRotationOffset: e.getLabelRotationOffset,
        isVisible: s
    })), r.eleDrawing.addTextureRenderType("node-overlay", /*#__PURE__*/ ua({
        getBoundingBox: e.getElementBox,
        getKey: /*#__PURE__*/ m$1(function(f) {
            return o.getStyleKey("overlay", f);
        }, "getKey"),
        drawElement: /*#__PURE__*/ m$1(function(f, c, d) {
            return o.draw("overlay", f, c, d);
        }, "drawElement"),
        isVisible: /*#__PURE__*/ m$1(function(f) {
            return o.isVisible("overlay", f);
        }, "isVisible"),
        getPadding: /*#__PURE__*/ m$1(function(f) {
            return o.getPadding("overlay", f);
        }, "getPadding")
    })), r.eleDrawing.addTextureRenderType("node-underlay", /*#__PURE__*/ ua({
        getBoundingBox: e.getElementBox,
        getKey: /*#__PURE__*/ m$1(function(f) {
            return o.getStyleKey("underlay", f);
        }, "getKey"),
        drawElement: /*#__PURE__*/ m$1(function(f, c, d) {
            return o.draw("underlay", f, c, d);
        }, "drawElement"),
        isVisible: /*#__PURE__*/ m$1(function(f) {
            return o.isVisible("underlay", f);
        }, "isVisible"),
        getPadding: /*#__PURE__*/ m$1(function(f) {
            return o.getPadding("underlay", f);
        }, "getPadding")
    })), r.eleDrawing.addTextureRenderType("edge-label", /*#__PURE__*/ ua({
        getKey: e.getLabelKey,
        getBoundingBox: e.getLabelBox,
        drawElement: e.drawLabel,
        getRotation: i,
        getRotationPoint: e.getLabelRotationPoint,
        getRotationOffset: e.getLabelRotationOffset,
        isVisible: s
    }));
    var l = /*#__PURE__*/ Ma(function() {
        console.log("garbage collect flag set"), r.data.gc = true;
    }, 1e4);
    r.onUpdateEleCalcs(function(u, f) {
        var c = false;
        f && f.length > 0 && (c |= /*#__PURE__*/ r.eleDrawing.invalidate(f)), c && l();
    }), sy(r);
};
function sy(t) {
    {
        var e = t.render;
        t.render = function(i) {
            i = i || {};
            var s = t.cy;
            t.webgl && (s.zoom() > Ku ? (oy(t), e.call(t, i)) : (uy(t), ju(t, i, ya.SCREEN)));
        };
    }
    {
        var r = t.matchCanvasSize;
        t.matchCanvasSize = function(i) {
            r.call(t, i), t.pickingFrameBuffer.setFramebufferAttachmentSizes(t.canvasWidth, t.canvasHeight), t.pickingFrameBuffer.needsDraw = true;
        };
    }
    t.findNearestElements = function(i, s, o, l) {
        return hy(t, i, s);
    };
    {
        var a = t.invalidateCachedZSortedEles;
        t.invalidateCachedZSortedEles = function() {
            a.call(t), t.pickingFrameBuffer.needsDraw = true;
        };
    }
    {
        var n = t.notify;
        t.notify = function(i, s) {
            n.call(t, i, s), i === "viewport" || i === "bounds" ? t.pickingFrameBuffer.needsDraw = true : i === "background" && t.eleDrawing.invalidate(s, {
                type: "node-body"
            });
        };
    }
}
m$1(sy, "overrideCanvasRendererFunctions");
function oy(t) {
    var e = t.data.contexts[t.WEBGL];
    e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
}
m$1(oy, "clearWebgl");
function uy(t) {
    var e = /*#__PURE__*/ m$1(function(a) {
        a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, t.canvasWidth, t.canvasHeight), a.restore();
    }, "clear");
    e(t.data.contexts[t.NODE]), e(t.data.contexts[t.DRAG]);
}
m$1(uy, "clearCanvas");
function ly(t) {
    var e = t.canvasWidth, r = t.canvasHeight, a = /*#__PURE__*/ Wi(t), n = a.pan, i = a.zoom, s = /*#__PURE__*/ pa();
    En(s, s, [
        n.x,
        n.y
    ]), Hi(s, s, [
        i,
        i
    ]);
    var o = /*#__PURE__*/ pa();
    Jp(o, e, r);
    var l = /*#__PURE__*/ pa();
    return Qp(l, o, s), l;
}
m$1(ly, "createPanZoomMatrix");
function Ju(t, e) {
    var r = t.canvasWidth, a = t.canvasHeight, n = /*#__PURE__*/ Wi(t), i = n.pan, s = n.zoom;
    e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, r, a), e.translate(i.x, i.y), e.scale(s, s);
}
m$1(Ju, "setContextTransform");
function vy(t, e) {
    t.drawSelectionRectangle(e, function(r) {
        return Ju(t, r);
    });
}
m$1(vy, "drawSelectionRectangle");
function fy(t) {
    var e = t.data.contexts[t.NODE];
    e.save(), Ju(t, e), e.strokeStyle = "rgba(0, 0, 0, 0.3)", e.beginPath(), e.moveTo(-1e3, 0), e.lineTo(1e3, 0), e.stroke(), e.beginPath(), e.moveTo(0, -1e3), e.lineTo(0, 1e3), e.stroke(), e.restore();
}
m$1(fy, "drawAxes");
function cy(t) {
    var e = /*#__PURE__*/ m$1(function(n, i, s) {
        for(var o = /*#__PURE__*/ n.atlasManager.getRenderTypeOpts(i), l = t.data.contexts[t.NODE], u = .125, f = o.atlasCollection.atlases, c = 0; c < f.length; c++){
            var d = f[c], g = d.canvas, h = g.width, m = g.height, y = h * c, p = g.height * s;
            l.save(), l.scale(u, u), l.drawImage(g, y, p), l.strokeStyle = "black", l.rect(y, p, h, m), l.stroke(), l.restore();
        }
    }, "draw"), r = 0;
    e(t.eleDrawing, "node-body", r++), e(t.eleDrawing, "node-label", r++);
}
m$1(cy, "drawAtlases");
function dy(t, e, r, a, n) {
    var i, s, o, l, u = /*#__PURE__*/ Wi(t), f = u.pan, c = u.zoom;
    if (a === void 0 || n === void 0) {
        var d = /*#__PURE__*/ ti(t, f, c, e, r), g = /*#__PURE__*/ We(d, 2), h = g[0], m = g[1], y = 6;
        i = h - y / 2, s = m - y / 2, o = y, l = y;
    } else {
        var p = /*#__PURE__*/ ti(t, f, c, e, r), b1 = /*#__PURE__*/ We(p, 2), w = b1[0], x = b1[1], S = /*#__PURE__*/ ti(t, f, c, a, n), T = /*#__PURE__*/ We(S, 2), E = T[0], D = T[1];
        i = w, s = D, o = /*#__PURE__*/ Math.abs(E - w), l = /*#__PURE__*/ Math.abs(D - x);
    }
    if (o === 0 || l === 0) return [];
    var C = t.data.contexts[t.WEBGL];
    C.bindFramebuffer(C.FRAMEBUFFER, t.pickingFrameBuffer), t.pickingFrameBuffer.needsDraw && (C.viewport(0, 0, C.canvas.width, C.canvas.height), ju(t, null, ya.PICKING), t.pickingFrameBuffer.needsDraw = false);
    var B = o * l, A = new Uint8Array(B * 4);
    C.readPixels(i, s, o, l, C.RGBA, C.UNSIGNED_BYTE, A), C.bindFramebuffer(C.FRAMEBUFFER, null);
    for(var P = new Set, M = 0; M < B; M++){
        var R = /*#__PURE__*/ A.slice(M * 4, M * 4 + 4), I = Up(R) - 1;
        I >= 0 && P.add(I);
    }
    return P;
}
m$1(dy, "getPickingIndexes");
function hy(t, e, r) {
    var a = /*#__PURE__*/ dy(t, e, r), n = /*#__PURE__*/ t.getCachedZSortedEles(), i, s, o = /*#__PURE__*/ xt(a), l;
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
m$1(hy, "findNearestElementsWebgl");
function ju(t, e, r) {
    var a, n;
    t.webglDebug && (n = [], a = /*#__PURE__*/ performance.now());
    var i = t.eleDrawing, s = 0;
    if (r.screen && t.data.canvasNeedsRedraw[t.SELECT_BOX] && vy(t, e), t.data.canvasNeedsRedraw[t.NODE] || r.picking) {
        var o = /*#__PURE__*/ m$1(function(P, M) {
            M += 1, P.isNode() ? (i.drawTexture(P, M, "node-underlay"), i.drawTexture(P, M, "node-body"), i.drawTexture(P, M, "node-label"), i.drawTexture(P, M, "node-overlay")) : (i.drawEdgeLine(P, M), i.drawEdgeArrow(P, M, "source"), i.drawEdgeArrow(P, M, "target"), i.drawTexture(P, M, "edge-label"));
        }, "draw"), l = t.data.contexts[t.WEBGL];
        r.screen ? (l.clearColor(0, 0, 0, 0), l.enable(l.BLEND), l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA)) : l.disable(l.BLEND), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT), l.viewport(0, 0, l.canvas.width, l.canvas.height);
        var u = /*#__PURE__*/ ly(t), f = /*#__PURE__*/ t.getCachedZSortedEles();
        if (s = f.length, i.startFrame(u, n, r), r.screen) {
            for(var c = 0; c < f.nondrag.length; c++)o(f.nondrag[c], c);
            for(var d = 0; d < f.drag.length; d++)o(f.drag[d], -1);
        } else if (r.picking) for(var g = 0; g < f.length; g++)o(f[g], g);
        i.endFrame(), t.data.gc && (console.log("Garbage Collect!"), t.data.gc = false, i.gc()), r.screen && t.webglDebugShowAtlases && (fy(t), cy(t)), t.data.canvasNeedsRedraw[t.NODE] = false, t.data.canvasNeedsRedraw[t.DRAG] = false;
    }
    if (t.webglDebug) {
        var h = /*#__PURE__*/ performance.now(), m = true, y = 0, p = 0, b1 = /*#__PURE__*/ xt(n), w;
        try {
            for(b1.s(); !(w = /*#__PURE__*/ b1.n()).done;){
                var x = w.value;
                y++, p += x.count;
            }
        } catch (A) {
            b1.e(A);
        } finally{
            b1.f();
        }
        var S = /*#__PURE__*/ Math.ceil(h - a), T = /*#__PURE__*/ "".concat(s, " elements, ").concat(p, " rectangles, ").concat(y, " batches");
        if (m) console.log(/*#__PURE__*/ "WebGL (".concat(r.name, ") - ").concat(T));
        else {
            console.log(/*#__PURE__*/ "WebGL render (".concat(r.name, ") - frame time ").concat(S, "ms")), console.log(/*#__PURE__*/ "  ".concat(T)), console.log("Texture Atlases Used:");
            var E = /*#__PURE__*/ i.getAtlasDebugInfo(), D = /*#__PURE__*/ xt(E), C;
            try {
                for(D.s(); !(C = /*#__PURE__*/ D.n()).done;){
                    var B = C.value;
                    console.log(/*#__PURE__*/ "  ".concat(B.type, ": ").concat(B.keyCount, " keys, ").concat(B.atlasCount, " atlases"));
                }
            } catch (A) {
                D.e(A);
            } finally{
                D.f();
            }
            console.log("");
        }
    }
}
m$1(ju, "renderWebgl");
var fr = {};
fr.drawPolygonPath = function(t, e, r, a, n, i) {
    var s = a / 2, o = n / 2;
    t.beginPath && t.beginPath(), t.moveTo(e + s * i[0], r + o * i[1]);
    for(var l = 1; l < i.length / 2; l++)t.lineTo(e + s * i[l * 2], r + o * i[l * 2 + 1]);
    t.closePath();
};
fr.drawRoundPolygonPath = function(t, e, r, a, n, i, s) {
    s.forEach(function(o) {
        return Lu(t, o);
    }), t.closePath();
};
fr.drawRoundRectanglePath = function(t, e, r, a, n, i) {
    var s = a / 2, o = n / 2, l = i === "auto" ? xr(a, n) : Math.min(i, o, s);
    t.beginPath && t.beginPath(), t.moveTo(e, r - o), t.arcTo(e + s, r - o, e + s, r, l), t.arcTo(e + s, r + o, e, r + o, l), t.arcTo(e - s, r + o, e - s, r, l), t.arcTo(e - s, r - o, e, r - o, l), t.lineTo(e, r - o), t.closePath();
};
fr.drawBottomRoundRectanglePath = function(t, e, r, a, n, i) {
    var s = a / 2, o = n / 2, l = i === "auto" ? xr(a, n) : i;
    t.beginPath && t.beginPath(), t.moveTo(e, r - o), t.lineTo(e + s, r - o), t.lineTo(e + s, r), t.arcTo(e + s, r + o, e, r + o, l), t.arcTo(e - s, r + o, e - s, r, l), t.lineTo(e - s, r - o), t.lineTo(e, r - o), t.closePath();
};
fr.drawCutRectanglePath = function(t, e, r, a, n, i, s) {
    var o = a / 2, l = n / 2, u = s === "auto" ? Bi() : s;
    t.beginPath && t.beginPath(), t.moveTo(e - o + u, r - l), t.lineTo(e + o - u, r - l), t.lineTo(e + o, r - l + u), t.lineTo(e + o, r + l - u), t.lineTo(e + o - u, r + l), t.lineTo(e - o + u, r + l), t.lineTo(e - o, r + l - u), t.lineTo(e - o, r - l + u), t.closePath();
};
fr.drawBarrelPath = function(t, e, r, a, n) {
    var i = a / 2, s = n / 2, o = e - i, l = e + i, u = r - s, f = r + s, c = /*#__PURE__*/ si(a, n), d = c.widthOffset, g = c.heightOffset, h = c.ctrlPtOffsetPct * d;
    t.beginPath && t.beginPath(), t.moveTo(o, u + g), t.lineTo(o, f - g), t.quadraticCurveTo(o + h, f, o + d, f), t.lineTo(l - d, f), t.quadraticCurveTo(l - h, f, l, f - g), t.lineTo(l, u + g), t.quadraticCurveTo(l - h, u, l - d, u), t.lineTo(o + d, u), t.quadraticCurveTo(o + h, u, o, u + g), t.closePath();
};
var co = /*#__PURE__*/ Math.sin(0), ho = /*#__PURE__*/ Math.cos(0), mi = {}, bi = {}, el = Math.PI / 40;
for(dr = 0 * Math.PI; dr < 2 * Math.PI; dr += el)mi[dr] = /*#__PURE__*/ Math.sin(dr), bi[dr] = /*#__PURE__*/ Math.cos(dr);
var dr;
fr.drawEllipsePath = function(t, e, r, a, n) {
    if (t.beginPath && t.beginPath(), t.ellipse) t.ellipse(e, r, a / 2, n / 2, 0, 0, 2 * Math.PI);
    else for(var i, s, o = a / 2, l = n / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += el)i = e - o * mi[u] * co + o * bi[u] * ho, s = r + l * bi[u] * co + l * mi[u] * ho, u === 0 ? t.moveTo(i, s) : t.lineTo(i, s);
    t.closePath();
};
var Fa = {};
Fa.createBuffer = function(t, e) {
    var r = /*#__PURE__*/ document.createElement("canvas");
    return r.width = t, r.height = e, [
        r,
        /*#__PURE__*/ r.getContext("2d")
    ];
};
Fa.bufferCanvasImage = function(t) {
    var e = this.cy, r = /*#__PURE__*/ e.mutableElements(), a = /*#__PURE__*/ r.boundingBox(), n = /*#__PURE__*/ this.findContainerClientCoords(), i = t.full ? Math.ceil(a.w) : n[2], s = t.full ? Math.ceil(a.h) : n[3], o = ae(t.maxWidth) || ae(t.maxHeight), l = /*#__PURE__*/ this.getPixelRatio(), u = 1;
    if (t.scale !== void 0) i *= t.scale, s *= t.scale, u = t.scale;
    else if (o) {
        var f = 1 / 0, c = 1 / 0;
        ae(t.maxWidth) && (f = u * t.maxWidth / i), ae(t.maxHeight) && (c = u * t.maxHeight / s), u = /*#__PURE__*/ Math.min(f, c), i *= u, s *= u;
    }
    o || (i *= l, s *= l, u *= l);
    var d = /*#__PURE__*/ document.createElement("canvas");
    d.width = i, d.height = s, d.style.width = i + "px", d.style.height = s + "px";
    var g = /*#__PURE__*/ d.getContext("2d");
    if (i > 0 && s > 0) {
        g.clearRect(0, 0, i, s), g.globalCompositeOperation = "source-over";
        var h = /*#__PURE__*/ this.getCachedZSortedEles();
        if (t.full) g.translate(-a.x1 * u, -a.y1 * u), g.scale(u, u), this.drawElements(g, h), g.scale(1 / u, 1 / u), g.translate(a.x1 * u, a.y1 * u);
        else {
            var m = /*#__PURE__*/ e.pan(), y = {
                x: m.x * u,
                y: m.y * u
            };
            u *= /*#__PURE__*/ e.zoom(), g.translate(y.x, y.y), g.scale(u, u), this.drawElements(g, h), g.scale(1 / u, 1 / u), g.translate(-y.x, -y.y);
        }
        t.bg && (g.globalCompositeOperation = "destination-over", g.fillStyle = t.bg, g.rect(0, 0, i, s), g.fill());
    }
    return d;
};
function gy(t, e) {
    for(var r = /*#__PURE__*/ atob(t), a = new ArrayBuffer(r.length), n = new Uint8Array(a), i = 0; i < r.length; i++)n[i] = /*#__PURE__*/ r.charCodeAt(i);
    return new Blob([
        a
    ], {
        type: e
    });
}
m$1(gy, "b64ToBlob");
function go(t) {
    var e = /*#__PURE__*/ t.indexOf(",");
    return t.substr(e + 1);
}
m$1(go, "b64UriToB64");
function tl(t, e, r) {
    var a = /*#__PURE__*/ m$1(function() {
        return e.toDataURL(r, t.quality);
    }, "getB64Uri");
    switch(t.output){
        case "blob-promise":
            return new Hr(function(n, i) {
                try {
                    e.toBlob(function(s) {
                        s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
                    }, r, t.quality);
                } catch (s) {
                    i(s);
                }
            });
        case "blob":
            return gy(/*#__PURE__*/ go(/*#__PURE__*/ a()), r);
        case "base64":
            return go(/*#__PURE__*/ a());
        case "base64uri":
        default:
            return a();
    }
}
m$1(tl, "output");
Fa.png = function(t) {
    return tl(t, /*#__PURE__*/ this.bufferCanvasImage(t), "image/png");
};
Fa.jpg = function(t) {
    return tl(t, /*#__PURE__*/ this.bufferCanvasImage(t), "image/jpeg");
};
var rl = {};
rl.nodeShapeImpl = function(t, e, r, a, n, i, s, o) {
    switch(t){
        case "ellipse":
            return this.drawEllipsePath(e, r, a, n, i);
        case "polygon":
            return this.drawPolygonPath(e, r, a, n, i, s);
        case "round-polygon":
            return this.drawRoundPolygonPath(e, r, a, n, i, s, o);
        case "roundrectangle":
        case "round-rectangle":
            return this.drawRoundRectanglePath(e, r, a, n, i, o);
        case "cutrectangle":
        case "cut-rectangle":
            return this.drawCutRectanglePath(e, r, a, n, i, s, o);
        case "bottomroundrectangle":
        case "bottom-round-rectangle":
            return this.drawBottomRoundRectanglePath(e, r, a, n, i, o);
        case "barrel":
            return this.drawBarrelPath(e, r, a, n, i);
    }
};
var py = al, Ce = al.prototype;
Ce.CANVAS_LAYERS = 3;
Ce.SELECT_BOX = 0;
Ce.DRAG = 1;
Ce.NODE = 2;
Ce.WEBGL = 3;
Ce.CANVAS_TYPES = [
    "2d",
    "2d",
    "2d",
    "webgl2"
];
Ce.BUFFER_COUNT = 3;
Ce.TEXTURE_BUFFER = 0;
Ce.MOTIONBLUR_BUFFER_NODE = 1;
Ce.MOTIONBLUR_BUFFER_DRAG = 2;
function al(t) {
    var e = this, r = /*#__PURE__*/ e.cy.window(), a = r.document;
    t.webgl && (Ce.CANVAS_LAYERS = e.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), e.data = {
        canvases: new Array(Ce.CANVAS_LAYERS),
        contexts: new Array(Ce.CANVAS_LAYERS),
        canvasNeedsRedraw: new Array(Ce.CANVAS_LAYERS),
        bufferCanvases: new Array(Ce.BUFFER_COUNT),
        bufferContexts: new Array(Ce.CANVAS_LAYERS)
    };
    var n = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
    e.data.canvasContainer = /*#__PURE__*/ a.createElement("div");
    var s = e.data.canvasContainer.style;
    e.data.canvasContainer.style[n] = i, s.position = "relative", s.zIndex = "0", s.overflow = "hidden";
    var o = /*#__PURE__*/ t.cy.container();
    o.appendChild(e.data.canvasContainer), o.style[n] = i;
    var l = {
        "-webkit-user-select": "none",
        "-moz-user-select": "-moz-none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        "outline-style": "none"
    };
    Ll() && (l["-ms-touch-action"] = "none", l["touch-action"] = "none");
    for(var u = 0; u < Ce.CANVAS_LAYERS; u++){
        var f = e.data.canvases[u] = /*#__PURE__*/ a.createElement("canvas"), c = Ce.CANVAS_TYPES[u];
        e.data.contexts[u] = /*#__PURE__*/ f.getContext(c), e.data.contexts[u] || $e("Could not create canvas of type " + c), Object.keys(l).forEach(function(W) {
            f.style[W] = l[W];
        }), f.style.position = "absolute", f.setAttribute("data-id", "layer" + u), f.style.zIndex = /*#__PURE__*/ String(Ce.CANVAS_LAYERS - u), e.data.canvasContainer.appendChild(f), e.data.canvasNeedsRedraw[u] = false;
    }
    e.data.topCanvas = e.data.canvases[0], e.data.canvases[Ce.NODE].setAttribute("data-id", "layer" + Ce.NODE + "-node"), e.data.canvases[Ce.SELECT_BOX].setAttribute("data-id", "layer" + Ce.SELECT_BOX + "-selectbox"), e.data.canvases[Ce.DRAG].setAttribute("data-id", "layer" + Ce.DRAG + "-drag"), e.data.canvases[Ce.WEBGL] && e.data.canvases[Ce.WEBGL].setAttribute("data-id", "layer" + Ce.WEBGL + "-webgl");
    for(var u = 0; u < Ce.BUFFER_COUNT; u++)e.data.bufferCanvases[u] = /*#__PURE__*/ a.createElement("canvas"), e.data.bufferContexts[u] = /*#__PURE__*/ e.data.bufferCanvases[u].getContext("2d"), e.data.bufferCanvases[u].style.position = "absolute", e.data.bufferCanvases[u].setAttribute("data-id", "buffer" + u), e.data.bufferCanvases[u].style.zIndex = /*#__PURE__*/ String(-u - 1), e.data.bufferCanvases[u].style.visibility = "hidden";
    e.pathsEnabled = true;
    var d = /*#__PURE__*/ yt(), g = /*#__PURE__*/ m$1(function(z) {
        return {
            x: (z.x1 + z.x2) / 2,
            y: (z.y1 + z.y2) / 2
        };
    }, "getBoxCenter"), h = /*#__PURE__*/ m$1(function(z) {
        return {
            x: -z.w / 2,
            y: -z.h / 2
        };
    }, "getCenterOffset"), m = /*#__PURE__*/ m$1(function(z) {
        var U = z[0]._private, te = U.oldBackgroundTimestamp === U.backgroundTimestamp;
        return !te;
    }, "backgroundTimestampHasChanged"), y = /*#__PURE__*/ m$1(function(z) {
        return z[0]._private.nodeKey;
    }, "getStyleKey"), p = /*#__PURE__*/ m$1(function(z) {
        return z[0]._private.labelStyleKey;
    }, "getLabelKey"), b1 = /*#__PURE__*/ m$1(function(z) {
        return z[0]._private.sourceLabelStyleKey;
    }, "getSourceLabelKey"), w = /*#__PURE__*/ m$1(function(z) {
        return z[0]._private.targetLabelStyleKey;
    }, "getTargetLabelKey"), x = /*#__PURE__*/ m$1(function(z, U, te, se, le) {
        return e.drawElement(z, U, te, false, false, le);
    }, "drawElement"), S = /*#__PURE__*/ m$1(function(z, U, te, se, le) {
        return e.drawElementText(z, U, te, se, "main", le);
    }, "drawLabel"), T = /*#__PURE__*/ m$1(function(z, U, te, se, le) {
        return e.drawElementText(z, U, te, se, "source", le);
    }, "drawSourceLabel"), E = /*#__PURE__*/ m$1(function(z, U, te, se, le) {
        return e.drawElementText(z, U, te, se, "target", le);
    }, "drawTargetLabel"), D = /*#__PURE__*/ m$1(function(z) {
        return z.boundingBox(), z[0]._private.bodyBounds;
    }, "getElementBox"), C = /*#__PURE__*/ m$1(function(z) {
        return z.boundingBox(), z[0]._private.labelBounds.main || d;
    }, "getLabelBox"), B = /*#__PURE__*/ m$1(function(z) {
        return z.boundingBox(), z[0]._private.labelBounds.source || d;
    }, "getSourceLabelBox"), A = /*#__PURE__*/ m$1(function(z) {
        return z.boundingBox(), z[0]._private.labelBounds.target || d;
    }, "getTargetLabelBox"), P = /*#__PURE__*/ m$1(function(z, U) {
        return U;
    }, "isLabelVisibleAtScale"), M = /*#__PURE__*/ m$1(function(z) {
        return g(/*#__PURE__*/ D(z));
    }, "getElementRotationPoint"), R = /*#__PURE__*/ m$1(function(z, U, te) {
        var se = z ? z + "-" : "";
        return {
            x: U.x + te.pstyle(se + "text-margin-x").pfValue,
            y: U.y + te.pstyle(se + "text-margin-y").pfValue
        };
    }, "addTextMargin"), I = /*#__PURE__*/ m$1(function(z, U, te) {
        var se = z[0]._private.rscratch;
        return {
            x: se[U],
            y: se[te]
        };
    }, "getRsPt"), L = /*#__PURE__*/ m$1(function(z) {
        return R("", /*#__PURE__*/ I(z, "labelX", "labelY"), z);
    }, "getLabelRotationPoint"), O = /*#__PURE__*/ m$1(function(z) {
        return R("source", /*#__PURE__*/ I(z, "sourceLabelX", "sourceLabelY"), z);
    }, "getSourceLabelRotationPoint"), N = /*#__PURE__*/ m$1(function(z) {
        return R("target", /*#__PURE__*/ I(z, "targetLabelX", "targetLabelY"), z);
    }, "getTargetLabelRotationPoint"), $ = /*#__PURE__*/ m$1(function(z) {
        return h(/*#__PURE__*/ D(z));
    }, "getElementRotationOffset"), H = /*#__PURE__*/ m$1(function(z) {
        return h(/*#__PURE__*/ B(z));
    }, "getSourceLabelRotationOffset"), q = /*#__PURE__*/ m$1(function(z) {
        return h(/*#__PURE__*/ A(z));
    }, "getTargetLabelRotationOffset"), K = /*#__PURE__*/ m$1(function(z) {
        var U = /*#__PURE__*/ C(z), te = /*#__PURE__*/ h(/*#__PURE__*/ C(z));
        if (z.isNode()) {
            switch(z.pstyle("text-halign").value){
                case "left":
                    te.x = -U.w - (U.leftPad || 0);
                    break;
                case "right":
                    te.x = -(U.rightPad || 0);
                    break;
            }
            switch(z.pstyle("text-valign").value){
                case "top":
                    te.y = -U.h - (U.topPad || 0);
                    break;
                case "bottom":
                    te.y = -(U.botPad || 0);
                    break;
            }
        }
        return te;
    }, "getLabelRotationOffset"), Y = e.data.eleTxrCache = new da(e, {
        getKey: y,
        doesEleInvalidateKey: m,
        drawElement: x,
        getBoundingBox: D,
        getRotationPoint: M,
        getRotationOffset: $,
        allowEdgeTxrCaching: false,
        allowParentTxrCaching: false
    }), Z = e.data.lblTxrCache = new da(e, {
        getKey: p,
        drawElement: S,
        getBoundingBox: C,
        getRotationPoint: L,
        getRotationOffset: K,
        isVisible: P
    }), J = e.data.slbTxrCache = new da(e, {
        getKey: b1,
        drawElement: T,
        getBoundingBox: B,
        getRotationPoint: O,
        getRotationOffset: H,
        isVisible: P
    }), Q = e.data.tlbTxrCache = new da(e, {
        getKey: w,
        drawElement: E,
        getBoundingBox: A,
        getRotationPoint: N,
        getRotationOffset: q,
        isVisible: P
    }), ee = e.data.lyrTxrCache = new Gu(e);
    e.onUpdateEleCalcs(/*#__PURE__*/ m$1(function(z, U) {
        Y.invalidateElements(U), Z.invalidateElements(U), J.invalidateElements(U), Q.invalidateElements(U), ee.invalidateElements(U);
        for(var te = 0; te < U.length; te++){
            var se = U[te]._private;
            se.oldBackgroundTimestamp = se.backgroundTimestamp;
        }
    }, "invalidateTextureCaches"));
    var re = /*#__PURE__*/ m$1(function(z) {
        for(var U = 0; U < z.length; U++)ee.enqueueElementRefinement(z[U].ele);
    }, "refineInLayers");
    Y.onDequeue(re), Z.onDequeue(re), J.onDequeue(re), Q.onDequeue(re), t.webgl && e.initWebgl(t, {
        getStyleKey: y,
        getLabelKey: p,
        drawElement: x,
        drawLabel: S,
        getElementBox: D,
        getLabelBox: C,
        getElementRotationPoint: M,
        getElementRotationOffset: $,
        getLabelRotationPoint: L,
        getLabelRotationOffset: K
    });
}
m$1(al, "CanvasRenderer");
Ce.redrawHint = function(t, e) {
    var r = this;
    switch(t){
        case "eles":
            r.data.canvasNeedsRedraw[Ce.NODE] = e;
            break;
        case "drag":
            r.data.canvasNeedsRedraw[Ce.DRAG] = e;
            break;
        case "select":
            r.data.canvasNeedsRedraw[Ce.SELECT_BOX] = e;
            break;
        case "gc":
            r.data.gc = true;
            break;
    }
};
var yy = typeof Path2D < "u";
Ce.path2dEnabled = function(t) {
    if (t === void 0) return this.pathsEnabled;
    this.pathsEnabled = !!t;
};
Ce.usePaths = function() {
    return yy && this.pathsEnabled;
};
Ce.setImgSmoothing = function(t, e) {
    t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e);
};
Ce.getImgSmoothing = function(t) {
    return t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled : t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled;
};
Ce.makeOffscreenCanvas = function(t, e) {
    var r;
    if ((typeof OffscreenCanvas > "u" ? "undefined" : Ye(OffscreenCanvas)) !== "undefined") r = new OffscreenCanvas(t, e);
    else {
        var a = /*#__PURE__*/ this.cy.window(), n = a.document;
        r = /*#__PURE__*/ n.createElement("canvas"), r.width = t, r.height = e;
    }
    return r;
};
[
    Wu,
    $t,
    _t,
    Gi,
    Dr,
    jr,
    ht,
    Qu,
    fr,
    Fa,
    rl
].forEach(function(t) {
    he(Ce, t);
});
var my = [
    {
        name: "null",
        impl: Au
    },
    {
        name: "base",
        impl: qu
    },
    {
        name: "canvas",
        impl: py
    }
], by = [
    {
        type: "layout",
        extensions: tp
    },
    {
        type: "renderer",
        extensions: my
    }
], nl = {}, il = {};
function sl(t, e, r) {
    var a = r, n = /*#__PURE__*/ m$1(function(D) {
        Re("Can not register `" + e + "` for `" + t + "` since `" + D + "` already exists in the prototype and can not be overridden");
    }, "overrideErr");
    if (t === "core") {
        if (Pa.prototype[e]) return n(e);
        Pa.prototype[e] = r;
    } else if (t === "collection") {
        if (at.prototype[e]) return n(e);
        at.prototype[e] = r;
    } else if (t === "layout") {
        for(var i = /*#__PURE__*/ m$1(function(D) {
            this.options = D, r.call(this, D), Pe(this._private) || (this._private = {}), this._private.cy = D.cy, this._private.listeners = [], this.createEmitter();
        }, "Layout"), s = i.prototype = /*#__PURE__*/ Object.create(r.prototype), o = [], l = 0; l < o.length; l++){
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
        var f = r.prototype.stop;
        s.stop = function() {
            var E = this.options;
            if (E && E.animate) {
                var D = this.animations;
                if (D) for(var C = 0; C < D.length; C++)D[C].stop();
            }
            return f ? f.call(this) : this.emit("layoutstop"), this;
        }, s.destroy || (s.destroy = function() {
            return this;
        }), s.cy = function() {
            return this._private.cy;
        };
        var c = /*#__PURE__*/ m$1(function(D) {
            return D._private.cy;
        }, "getCy"), d = {
            addEventFields: /*#__PURE__*/ m$1(function(D, C) {
                C.layout = D, C.cy = /*#__PURE__*/ c(D), C.target = D;
            }, "addEventFields"),
            bubble: /*#__PURE__*/ m$1(function() {
                return true;
            }, "bubble"),
            parent: /*#__PURE__*/ m$1(function(D) {
                return c(D);
            }, "parent")
        };
        he(s, {
            createEmitter: /*#__PURE__*/ m$1(function() {
                return this._private.emitter = new Mn(d, this), this;
            }, "createEmitter"),
            emitter: /*#__PURE__*/ m$1(function() {
                return this._private.emitter;
            }, "emitter"),
            on: /*#__PURE__*/ m$1(function(D, C) {
                return this.emitter().on(D, C), this;
            }, "on"),
            one: /*#__PURE__*/ m$1(function(D, C) {
                return this.emitter().one(D, C), this;
            }, "one"),
            once: /*#__PURE__*/ m$1(function(D, C) {
                return this.emitter().one(D, C), this;
            }, "once"),
            removeListener: /*#__PURE__*/ m$1(function(D, C) {
                return this.emitter().removeListener(D, C), this;
            }, "removeListener"),
            removeAllListeners: /*#__PURE__*/ m$1(function() {
                return this.emitter().removeAllListeners(), this;
            }, "removeAllListeners"),
            emit: /*#__PURE__*/ m$1(function(D, C) {
                return this.emitter().emit(D, C), this;
            }, "emit")
        }), Ae.eventAliasesOn(s), a = i;
    } else if (t === "renderer" && e !== "null" && e !== "base") {
        var g = /*#__PURE__*/ ol("renderer", "base"), h = g.prototype, m = r, y = r.prototype, p = /*#__PURE__*/ m$1(function() {
            g.apply(this, arguments), m.apply(this, arguments);
        }, "Renderer"), b1 = p.prototype;
        for(var w in h){
            var x = h[w], S = y[w] != null;
            if (S) return n(w);
            b1[w] = x;
        }
        for(var T in y)b1[T] = y[T];
        h.clientFunctions.forEach(function(E) {
            b1[E] = b1[E] || function() {
                $e("Renderer does not implement `renderer." + E + "()` on its prototype");
            };
        }), a = p;
    } else if (t === "__proto__" || t === "constructor" || t === "prototype") return $e(t + " is an illegal type to be registered, possibly lead to prototype pollutions");
    return Co({
        map: nl,
        keys: [
            t,
            e
        ],
        value: a
    });
}
m$1(sl, "setExtension");
function ol(t, e) {
    return So({
        map: nl,
        keys: [
            t,
            e
        ]
    });
}
m$1(ol, "getExtension");
function wy(t, e, r, a, n) {
    return Co({
        map: il,
        keys: [
            t,
            e,
            r,
            a
        ],
        value: n
    });
}
m$1(wy, "setModule");
function xy(t, e, r, a) {
    return So({
        map: il,
        keys: [
            t,
            e,
            r,
            a
        ]
    });
}
m$1(xy, "getModule");
var wi = /*#__PURE__*/ m$1(function() {
    if (arguments.length === 2) return ol.apply(null, arguments);
    if (arguments.length === 3) return sl.apply(null, arguments);
    if (arguments.length === 4) return xy.apply(null, arguments);
    if (arguments.length === 5) return wy.apply(null, arguments);
    $e("Invalid extension access syntax");
}, "extension");
Pa.prototype.extension = wi;
by.forEach(function(t) {
    t.extensions.forEach(function(e) {
        sl(t.type, e.name, e.impl);
    });
});
var ul = /*#__PURE__*/ m$1(function t() {
    if (!(this instanceof t)) return new t;
    this.length = 0;
}, "Stylesheet"), Cr = ul.prototype;
Cr.instanceString = function() {
    return "stylesheet";
};
Cr.selector = function(t) {
    var e = this.length++;
    return this[e] = {
        selector: t,
        properties: []
    }, this;
};
Cr.css = function(t, e) {
    var r = this.length - 1;
    if (ce(t)) this[r].properties.push({
        name: t,
        value: e
    });
    else if (Pe(t)) for(var a = t, n = /*#__PURE__*/ Object.keys(a), i = 0; i < n.length; i++){
        var s = n[i], o = a[s];
        if (o != null) {
            var l = st.properties[s] || st.properties[Tn(s)];
            if (l != null) {
                var u = l.name, f = o;
                this[r].properties.push({
                    name: u,
                    value: f
                });
            }
        }
    }
    return this;
};
Cr.style = Cr.css;
Cr.generateStyle = function(t) {
    var e = new st(t);
    return this.appendToStyle(e);
};
Cr.appendToStyle = function(t) {
    for(var e = 0; e < this.length; e++){
        var r = this[e], a = r.selector, n = r.properties;
        t.selector(a);
        for(var i = 0; i < n.length; i++){
            var s = n[i];
            t.css(s.name, s.value);
        }
    }
    return t;
};
var Ey = "3.31.0", Gr = /*#__PURE__*/ m$1(function(e) {
    if (e === void 0 && (e = {}), Pe(e)) return new Pa(e);
    if (ce(e)) return wi.apply(wi, arguments);
}, "cytoscape");
Gr.use = function(t) {
    var e = /*#__PURE__*/ Array.prototype.slice.call(arguments, 1);
    return e.unshift(Gr), t.apply(null, e), this;
};
Gr.warnings = function(t) {
    return Lo(t);
};
Gr.version = Ey;
Gr.stylesheet = Gr.Stylesheet = ul;
export { Gr as G };
