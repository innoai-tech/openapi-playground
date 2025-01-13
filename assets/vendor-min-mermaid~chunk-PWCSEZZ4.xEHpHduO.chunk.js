import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
function Ue(r10) {
  "@babel/helpers - typeof";
  return Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ue(r10);
}
m$1(Ue, "_typeof");
function ni(r10, e) {
  if (!(r10 instanceof e)) throw new TypeError("Cannot call a class as a function");
}
m$1(ni, "_classCallCheck");
function Ai(r10, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(r10, a.key, a);
  }
}
m$1(Ai, "_defineProperties");
function ii(r10, e, t) {
  return e && Ai(r10.prototype, e), t && Ai(r10, t), Object.defineProperty(r10, "prototype", {
    writable: false
  }), r10;
}
m$1(ii, "_createClass");
function Us(r10, e, t) {
  return e in r10 ? Object.defineProperty(r10, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : r10[e] = t, r10;
}
m$1(Us, "_defineProperty$1");
function Dr(r10, e) {
  return $u(r10) || Hu(r10, e) || Ys(r10, e) || Gu();
}
m$1(Dr, "_slicedToArray");
function $u(r10) {
  if (Array.isArray(r10)) return r10;
}
m$1($u, "_arrayWithHoles");
function Hu(r10, e) {
  var t = r10 == null ? null : typeof Symbol < "u" && r10[Symbol.iterator] || r10["@@iterator"];
  if (t != null) {
    var a = [], n = true, i = false, s, o;
    try {
      for (t = /* @__PURE__ */ t.call(r10); !(n = (s = /* @__PURE__ */ t.next()).done) && (a.push(s.value), !(e && a.length === e)); n = true) ;
    } catch (l) {
      i = true, o = l;
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (i) throw o;
      }
    }
    return a;
  }
}
m$1(Hu, "_iterableToArrayLimit");
function Ys(r10, e) {
  if (r10) {
    if (typeof r10 == "string") return Ri(r10, e);
    var t = /* @__PURE__ */ Object.prototype.toString.call(r10).slice(8, -1);
    if (t === "Object" && r10.constructor && (t = r10.constructor.name), t === "Map" || t === "Set") return Array.from(r10);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ri(r10, e);
  }
}
m$1(Ys, "_unsupportedIterableToArray");
function Ri(r10, e) {
  (e == null || e > r10.length) && (e = r10.length);
  for (var t = 0, a = new Array(e); t < e; t++) a[t] = r10[t];
  return a;
}
m$1(Ri, "_arrayLikeToArray");
function Gu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
m$1(Gu, "_nonIterableRest");
function Xs(r10, e) {
  var t = typeof Symbol < "u" && r10[Symbol.iterator] || r10["@@iterator"];
  if (!t) {
    if (Array.isArray(r10) || (t = /* @__PURE__ */ Ys(r10)) || e && r10 && typeof r10.length == "number") {
      t && (r10 = t);
      var a = 0, n = /* @__PURE__ */ m$1(function() {
      }, "F");
      return {
        s: n,
        n: /* @__PURE__ */ m$1(function() {
          return a >= r10.length ? {
            done: true
          } : {
            done: false,
            value: r10[a++]
          };
        }, "n"),
        e: /* @__PURE__ */ m$1(function(l) {
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
    s: /* @__PURE__ */ m$1(function() {
      t = /* @__PURE__ */ t.call(r10);
    }, "s"),
    n: /* @__PURE__ */ m$1(function() {
      var l = /* @__PURE__ */ t.next();
      return i = l.done, l;
    }, "n"),
    e: /* @__PURE__ */ m$1(function(l) {
      s = true, o = l;
    }, "e"),
    f: /* @__PURE__ */ m$1(function() {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (s) throw o;
      }
    }, "f")
  };
}
m$1(Xs, "_createForOfIteratorHelper");
var Ke = typeof window > "u" ? null : window, Oi = Ke ? Ke.navigator : null;
Ke && Ke.document;
var Ku = /* @__PURE__ */ Ue(""), Zs = /* @__PURE__ */ Ue({}), Wu = /* @__PURE__ */ Ue(function() {
}), Uu = typeof HTMLElement > "u" ? "undefined" : Ue(HTMLElement), wa = /* @__PURE__ */ m$1(function(e) {
  return e && e.instanceString && Ve(e.instanceString) ? e.instanceString() : null;
}, "instanceStr"), he = /* @__PURE__ */ m$1(function(e) {
  return e != null && Ue(e) == Ku;
}, "string"), Ve = /* @__PURE__ */ m$1(function(e) {
  return e != null && Ue(e) === Wu;
}, "fn"), Oe = /* @__PURE__ */ m$1(function(e) {
  return !pr(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, "array"), Te = /* @__PURE__ */ m$1(function(e) {
  return e != null && Ue(e) === Zs && !Oe(e) && e.constructor === Object;
}, "plainObject"), Yu = /* @__PURE__ */ m$1(function(e) {
  return e != null && Ue(e) === Zs;
}, "object"), ie = /* @__PURE__ */ m$1(function(e) {
  return e != null && Ue(e) === Ue(1) && !isNaN(e);
}, "number"), Xu = /* @__PURE__ */ m$1(function(e) {
  return ie(e) && Math.floor(e) === e;
}, "integer"), Ja = /* @__PURE__ */ m$1(function(e) {
  if (Uu !== "undefined") return e != null && e instanceof HTMLElement;
}, "htmlElement"), pr = /* @__PURE__ */ m$1(function(e) {
  return xa(e) || Qs(e);
}, "elementOrCollection"), xa = /* @__PURE__ */ m$1(function(e) {
  return wa(e) === "collection" && e._private.single;
}, "element"), Qs = /* @__PURE__ */ m$1(function(e) {
  return wa(e) === "collection" && !e._private.single;
}, "collection"), si = /* @__PURE__ */ m$1(function(e) {
  return wa(e) === "core";
}, "core"), Js = /* @__PURE__ */ m$1(function(e) {
  return wa(e) === "stylesheet";
}, "stylesheet"), Zu = /* @__PURE__ */ m$1(function(e) {
  return wa(e) === "event";
}, "event"), _r = /* @__PURE__ */ m$1(function(e) {
  return e == null ? true : !!(e === "" || e.match(/^\s+$/));
}, "emptyString"), Qu = /* @__PURE__ */ m$1(function(e) {
  return typeof HTMLElement > "u" ? false : e instanceof HTMLElement;
}, "domElement"), Ju = /* @__PURE__ */ m$1(function(e) {
  return Te(e) && ie(e.x1) && ie(e.x2) && ie(e.y1) && ie(e.y2);
}, "boundingBox"), _u = /* @__PURE__ */ m$1(function(e) {
  return Yu(e) && Ve(e.then);
}, "promise"), ju = /* @__PURE__ */ m$1(function() {
  return Oi && Oi.userAgent.match(/msie|trident|edge/i);
}, "ms"), la = /* @__PURE__ */ m$1(function(e, t) {
  t || (t = /* @__PURE__ */ m$1(function() {
    if (arguments.length === 1) return arguments[0];
    if (arguments.length === 0) return "undefined";
    for (var i = [], s = 0; s < arguments.length; s++) i.push(arguments[s]);
    return i.join("$");
  }, "keyFn"));
  var a = /* @__PURE__ */ m$1(function n() {
    var i = this, s = arguments, o, l = /* @__PURE__ */ t.apply(i, s), u = n.cache;
    return (o = u[l]) || (o = u[l] = /* @__PURE__ */ e.apply(i, s)), o;
  }, "memoizedFn");
  return a.cache = {}, a;
}, "memoize"), oi = /* @__PURE__ */ la(function(r10) {
  return r10.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase();
  });
}), ln = /* @__PURE__ */ la(function(r10) {
  return r10.replace(/(-\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}), _s = /* @__PURE__ */ la(function(r10, e) {
  return r10 + e[0].toUpperCase() + e.substring(1);
}, function(r10, e) {
  return r10 + "$" + e;
}), Ii = /* @__PURE__ */ m$1(function(e) {
  return _r(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, "capitalize"), We = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", el = "rgb[a]?\\((" + We + "[%]?)\\s*,\\s*(" + We + "[%]?)\\s*,\\s*(" + We + "[%]?)(?:\\s*,\\s*(" + We + "))?\\)", rl = "rgb[a]?\\((?:" + We + "[%]?)\\s*,\\s*(?:" + We + "[%]?)\\s*,\\s*(?:" + We + "[%]?)(?:\\s*,\\s*(?:" + We + "))?\\)", tl = "hsl[a]?\\((" + We + ")\\s*,\\s*(" + We + "[%])\\s*,\\s*(" + We + "[%])(?:\\s*,\\s*(" + We + "))?\\)", al = "hsl[a]?\\((?:" + We + ")\\s*,\\s*(?:" + We + "[%])\\s*,\\s*(?:" + We + "[%])(?:\\s*,\\s*(?:" + We + "))?\\)", nl = "\\#[0-9a-fA-F]{3}", il = "\\#[0-9a-fA-F]{6}", js = /* @__PURE__ */ m$1(function(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}, "ascending"), sl = /* @__PURE__ */ m$1(function(e, t) {
  return -1 * js(e, t);
}, "descending"), we = Object.assign != null ? Object.assign.bind(Object) : function(r10) {
  for (var e = arguments, t = 1; t < e.length; t++) {
    var a = e[t];
    if (a != null) for (var n = /* @__PURE__ */ Object.keys(a), i = 0; i < n.length; i++) {
      var s = n[i];
      r10[s] = a[s];
    }
  }
  return r10;
}, ol = /* @__PURE__ */ m$1(function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var t = e.length === 4, a, n, i, s = 16;
    return t ? (a = /* @__PURE__ */ parseInt(e[1] + e[1], s), n = /* @__PURE__ */ parseInt(e[2] + e[2], s), i = /* @__PURE__ */ parseInt(e[3] + e[3], s)) : (a = /* @__PURE__ */ parseInt(e[1] + e[2], s), n = /* @__PURE__ */ parseInt(e[3] + e[4], s), i = /* @__PURE__ */ parseInt(e[5] + e[6], s)), [
      a,
      n,
      i
    ];
  }
}, "hex2tuple"), ul = /* @__PURE__ */ m$1(function(e) {
  var t, a, n, i, s, o, l, u;
  function f(h, m, y) {
    return y < 0 && (y += 1), y > 1 && (y -= 1), y < 1 / 6 ? h + (m - h) * 6 * y : y < 1 / 2 ? m : y < 2 / 3 ? h + (m - h) * (2 / 3 - y) * 6 : h;
  }
  m$1(f, "hue2rgb");
  var c = /* @__PURE__ */ new RegExp("^" + tl + "$").exec(e);
  if (c) {
    if (a = /* @__PURE__ */ parseInt(c[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = /* @__PURE__ */ parseFloat(c[2]), n < 0 || n > 100 || (n = n / 100, i = /* @__PURE__ */ parseFloat(c[3]), i < 0 || i > 100) || (i = i / 100, s = c[4], s !== void 0 && (s = /* @__PURE__ */ parseFloat(s), s < 0 || s > 1))) return;
    if (n === 0) o = l = u = /* @__PURE__ */ Math.round(i * 255);
    else {
      var d = i < 0.5 ? i * (1 + n) : i + n - i * n, g = 2 * i - d;
      o = /* @__PURE__ */ Math.round(255 * f(g, d, a + 1 / 3)), l = /* @__PURE__ */ Math.round(255 * f(g, d, a)), u = /* @__PURE__ */ Math.round(255 * f(g, d, a - 1 / 3));
    }
    t = [
      o,
      l,
      u,
      s
    ];
  }
  return t;
}, "hsl2tuple"), ll = /* @__PURE__ */ m$1(function(e) {
  var t, a = /* @__PURE__ */ new RegExp("^" + el + "$").exec(e);
  if (a) {
    t = [];
    for (var n = [], i = 1; i <= 3; i++) {
      var s = a[i];
      if (s[s.length - 1] === "%" && (n[i] = true), s = /* @__PURE__ */ parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255) return;
      t.push(/* @__PURE__ */ Math.floor(s));
    }
    var o = n[1] || n[2] || n[3], l = n[1] && n[2] && n[3];
    if (o && !l) return;
    var u = a[4];
    if (u !== void 0) {
      if (u = /* @__PURE__ */ parseFloat(u), u < 0 || u > 1) return;
      t.push(u);
    }
  }
  return t;
}, "rgb2tuple"), vl = /* @__PURE__ */ m$1(function(e) {
  return cl[e.toLowerCase()];
}, "colorname2tuple"), fl = /* @__PURE__ */ m$1(function(e) {
  return (Oe(e) ? e : null) || vl(e) || ol(e) || ll(e) || ul(e);
}, "color2tuple"), cl = {
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
}, eo = /* @__PURE__ */ m$1(function(e) {
  for (var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (Te(s)) throw Error("Tried to set map with object key");
    i < a.length - 1 ? (t[s] == null && (t[s] = {}), t = t[s]) : t[s] = e.value;
  }
}, "setMap"), ro = /* @__PURE__ */ m$1(function(e) {
  for (var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (Te(s)) throw Error("Tried to get map with object key");
    if (t = t[s], t == null) return t;
  }
  return t;
}, "getMap");
function dl(r10) {
  var e = typeof r10;
  return r10 != null && (e == "object" || e == "function");
}
m$1(dl, "isObject");
var ct = dl, ta = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hl(r10, e) {
  return e = {
    exports: {}
  }, r10(e, e.exports), e.exports;
}
m$1(hl, "createCommonjsModule");
var gl = typeof ta == "object" && ta && ta.Object === Object && ta, pl = gl, yl = typeof self == "object" && self && self.Object === Object && self, ml = pl || yl || Function("return this")(), vn = ml, bl = /* @__PURE__ */ m$1(function() {
  return vn.Date.now();
}, "now"), Bn = bl, wl = /\s/;
function xl(r10) {
  for (var e = r10.length; e-- && wl.test(/* @__PURE__ */ r10.charAt(e)); ) ;
  return e;
}
m$1(xl, "trimmedEndIndex");
var El = xl, Cl = /^\s+/;
function Sl(r10) {
  return r10 && r10.slice(0, El(r10) + 1).replace(Cl, "");
}
m$1(Sl, "baseTrim");
var Tl = Sl, Dl = vn.Symbol, Ot = Dl, to = Object.prototype, kl = to.hasOwnProperty, Pl = to.toString, Jt = Ot ? Ot.toStringTag : void 0;
function Bl(r10) {
  var e = /* @__PURE__ */ kl.call(r10, Jt), t = r10[Jt];
  try {
    r10[Jt] = void 0;
    var a = true;
  } catch {
  }
  var n = /* @__PURE__ */ Pl.call(r10);
  return a && (e ? r10[Jt] = t : delete r10[Jt]), n;
}
m$1(Bl, "getRawTag");
var Ml = Bl, Ll = Object.prototype, Al = Ll.toString;
function Rl(r10) {
  return Al.call(r10);
}
m$1(Rl, "objectToString");
var Ol = Rl, Il = "[object Null]", zl = "[object Undefined]", zi = Ot ? Ot.toStringTag : void 0;
function Nl(r10) {
  return r10 == null ? r10 === void 0 ? zl : Il : zi && zi in Object(r10) ? Ml(r10) : Ol(r10);
}
m$1(Nl, "baseGetTag");
var ao = Nl;
function Fl(r10) {
  return r10 != null && typeof r10 == "object";
}
m$1(Fl, "isObjectLike");
var Vl = Fl, ql = "[object Symbol]";
function $l(r10) {
  return typeof r10 == "symbol" || Vl(r10) && ao(r10) == ql;
}
m$1($l, "isSymbol");
var Ea = $l, Ni = NaN, Hl = /^[-+]0x[0-9a-f]+$/i, Gl = /^0b[01]+$/i, Kl = /^0o[0-7]+$/i, Wl = parseInt;
function Ul(r10) {
  if (typeof r10 == "number") return r10;
  if (Ea(r10)) return Ni;
  if (ct(r10)) {
    var e = typeof r10.valueOf == "function" ? r10.valueOf() : r10;
    r10 = ct(e) ? e + "" : e;
  }
  if (typeof r10 != "string") return r10 === 0 ? r10 : +r10;
  r10 = /* @__PURE__ */ Tl(r10);
  var t = /* @__PURE__ */ Gl.test(r10);
  return t || Kl.test(r10) ? Wl(/* @__PURE__ */ r10.slice(2), t ? 2 : 8) : Hl.test(r10) ? Ni : +r10;
}
m$1(Ul, "toNumber");
var Fi = Ul, Yl = "Expected a function", Xl = Math.max, Zl = Math.min;
function Ql(r10, e, t) {
  var a, n, i, s, o, l, u = 0, f = false, c = false, d = true;
  if (typeof r10 != "function") throw new TypeError(Yl);
  e = Fi(e) || 0, ct(t) && (f = !!t.leading, c = "maxWait" in t, i = c ? Xl(Fi(t.maxWait) || 0, e) : i, d = "trailing" in t ? !!t.trailing : d);
  function g(C) {
    var E = a, k = n;
    return a = n = void 0, u = C, s = /* @__PURE__ */ r10.apply(k, E), s;
  }
  m$1(g, "invokeFunc");
  function h(C) {
    return u = C, o = /* @__PURE__ */ setTimeout(p, e), f ? g(C) : s;
  }
  m$1(h, "leadingEdge");
  function m(C) {
    var E = C - l, k = C - u, S = e - E;
    return c ? Zl(S, i - k) : S;
  }
  m$1(m, "remainingWait");
  function y(C) {
    var E = C - l, k = C - u;
    return l === void 0 || E >= e || E < 0 || c && k >= i;
  }
  m$1(y, "shouldInvoke");
  function p() {
    var C = /* @__PURE__ */ Bn();
    if (y(C)) return b1(C);
    o = /* @__PURE__ */ setTimeout(p, /* @__PURE__ */ m(C));
  }
  m$1(p, "timerExpired");
  function b1(C) {
    return o = void 0, d && a ? g(C) : (a = n = void 0, s);
  }
  m$1(b1, "trailingEdge");
  function w() {
    o !== void 0 && clearTimeout(o), u = 0, a = l = n = o = void 0;
  }
  m$1(w, "cancel");
  function x() {
    return o === void 0 ? s : b1(/* @__PURE__ */ Bn());
  }
  m$1(x, "flush");
  function T() {
    var C = /* @__PURE__ */ Bn(), E = /* @__PURE__ */ y(C);
    if (a = arguments, n = this, l = C, E) {
      if (o === void 0) return h(l);
      if (c) return clearTimeout(o), o = /* @__PURE__ */ setTimeout(p, e), g(l);
    }
    return o === void 0 && (o = /* @__PURE__ */ setTimeout(p, e)), s;
  }
  return m$1(T, "debounced"), T.cancel = w, T.flush = x, T;
}
m$1(Ql, "debounce");
var fn = Ql, Mn = Ke ? Ke.performance : null, no = Mn && Mn.now ? function() {
  return Mn.now();
} : function() {
  return Date.now();
}, Jl = /* @__PURE__ */ function() {
  if (Ke) {
    if (Ke.requestAnimationFrame) return function(r10) {
      Ke.requestAnimationFrame(r10);
    };
    if (Ke.mozRequestAnimationFrame) return function(r10) {
      Ke.mozRequestAnimationFrame(r10);
    };
    if (Ke.webkitRequestAnimationFrame) return function(r10) {
      Ke.webkitRequestAnimationFrame(r10);
    };
    if (Ke.msRequestAnimationFrame) return function(r10) {
      Ke.msRequestAnimationFrame(r10);
    };
  }
  return function(r10) {
    r10 && setTimeout(function() {
      r10(/* @__PURE__ */ no());
    }, 1e3 / 60);
  };
}(), _a = /* @__PURE__ */ m$1(function(e) {
  return Jl(e);
}, "requestAnimationFrame"), $r = no, kt = 9261, io = 65599, aa = 5381, so = /* @__PURE__ */ m$1(function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kt, a = t, n; n = /* @__PURE__ */ e.next(), !n.done; ) a = a * io + n.value | 0;
  return a;
}, "hashIterableInts"), va = /* @__PURE__ */ m$1(function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kt;
  return t * io + e | 0;
}, "hashInt"), fa = /* @__PURE__ */ m$1(function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : aa;
  return (t << 5) + t + e | 0;
}, "hashIntAlt"), _l = /* @__PURE__ */ m$1(function(e, t) {
  return e * 2097152 + t;
}, "combineHashes"), Ur = /* @__PURE__ */ m$1(function(e) {
  return e[0] * 2097152 + e[1];
}, "combineHashesArray"), Ma = /* @__PURE__ */ m$1(function(e, t) {
  return [
    /* @__PURE__ */ va(e[0], t[0]),
    /* @__PURE__ */ fa(e[1], t[1])
  ];
}, "hashArrays"), jl = /* @__PURE__ */ m$1(function(e, t) {
  var a = {
    value: 0,
    done: false
  }, n = 0, i = e.length, s = {
    next: /* @__PURE__ */ m$1(function() {
      return n < i ? a.value = e[n++] : a.done = true, a;
    }, "next")
  };
  return so(s, t);
}, "hashIntsArray"), dt = /* @__PURE__ */ m$1(function(e, t) {
  var a = {
    value: 0,
    done: false
  }, n = 0, i = e.length, s = {
    next: /* @__PURE__ */ m$1(function() {
      return n < i ? a.value = /* @__PURE__ */ e.charCodeAt(n++) : a.done = true, a;
    }, "next")
  };
  return so(s, t);
}, "hashString"), oo = /* @__PURE__ */ m$1(function() {
  return ev(arguments);
}, "hashStrings"), ev = /* @__PURE__ */ m$1(function(e) {
  for (var t, a = 0; a < e.length; a++) {
    var n = e[a];
    a === 0 ? t = /* @__PURE__ */ dt(n) : t = /* @__PURE__ */ dt(n, t);
  }
  return t;
}, "hashStringsArray"), Vi = true, rv = console.warn != null, tv = console.trace != null, ui = Number.MAX_SAFE_INTEGER || 9007199254740991, uo = /* @__PURE__ */ m$1(function() {
  return true;
}, "trueify"), ja = /* @__PURE__ */ m$1(function() {
  return false;
}, "falsify"), qi = /* @__PURE__ */ m$1(function() {
  return 0;
}, "zeroify"), li = /* @__PURE__ */ m$1(function() {
}, "noop"), qe = /* @__PURE__ */ m$1(function(e) {
  throw new Error(e);
}, "error"), lo = /* @__PURE__ */ m$1(function(e) {
  if (e !== void 0) Vi = !!e;
  else return Vi;
}, "warnings"), Le = /* @__PURE__ */ m$1(function(e) {
  lo() && (rv ? console.warn(e) : (console.log(e), tv && console.trace()));
}, "warn"), av = /* @__PURE__ */ m$1(function(e) {
  return we({}, e);
}, "clone"), Or = /* @__PURE__ */ m$1(function(e) {
  return e == null ? e : Oe(e) ? e.slice() : Te(e) ? av(e) : e;
}, "copy"), nv = /* @__PURE__ */ m$1(function(e) {
  return e.slice();
}, "copyArray"), vo = /* @__PURE__ */ m$1(function(e, t) {
  for (t = e = ""; e++ < 36; t += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-") ;
  return t;
}, "uuid"), iv = {}, fo = /* @__PURE__ */ m$1(function() {
  return iv;
}, "staticEmptyObject"), rr = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ Object.keys(e);
  return function(a) {
    for (var n = {}, i = 0; i < t.length; i++) {
      var s = t[i], o = a == null ? void 0 : a[s];
      n[s] = o === void 0 ? e[s] : o;
    }
    return n;
  };
}, "defaults"), jr = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = e.length - 1; n >= 0 && !(e[n] === t && (e.splice(n, 1), a)); n--) ;
}, "removeFromArray"), vi = /* @__PURE__ */ m$1(function(e) {
  e.splice(0, e.length);
}, "clearArray"), sv = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    e.push(n);
  }
}, "push"), Pr = /* @__PURE__ */ m$1(function(e, t, a) {
  return a && (t = /* @__PURE__ */ _s(a, t)), e[t];
}, "getPrefixedProperty"), Xr = /* @__PURE__ */ m$1(function(e, t, a, n) {
  a && (t = /* @__PURE__ */ _s(a, t)), e[t] = n;
}, "setPrefixedProperty"), ov = /* @__PURE__ */ function() {
  function r10() {
    ni(this, r10), this._obj = {};
  }
  return m$1(r10, "ObjectMap"), ii(r10, [
    {
      key: "set",
      value: /* @__PURE__ */ m$1(function(t, a) {
        return this._obj[t] = a, this;
      }, "set")
    },
    {
      key: "delete",
      value: /* @__PURE__ */ m$1(function(t) {
        return this._obj[t] = void 0, this;
      }, "_delete")
    },
    {
      key: "clear",
      value: /* @__PURE__ */ m$1(function() {
        this._obj = {};
      }, "clear")
    },
    {
      key: "has",
      value: /* @__PURE__ */ m$1(function(t) {
        return this._obj[t] !== void 0;
      }, "has")
    },
    {
      key: "get",
      value: /* @__PURE__ */ m$1(function(t) {
        return this._obj[t];
      }, "get")
    }
  ]), r10;
}(), Ir = typeof Map < "u" ? Map : ov, uv = "undefined", lv = /* @__PURE__ */ function() {
  function r10(e) {
    if (ni(this, r10), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
      var t;
      e.instanceString != null && e.instanceString() === this.instanceString() ? t = /* @__PURE__ */ e.toArray() : t = e;
      for (var a = 0; a < t.length; a++) this.add(t[a]);
    }
  }
  return m$1(r10, "ObjectSet"), ii(r10, [
    {
      key: "instanceString",
      value: /* @__PURE__ */ m$1(function() {
        return "set";
      }, "instanceString")
    },
    {
      key: "add",
      value: /* @__PURE__ */ m$1(function(t) {
        var a = this._obj;
        a[t] !== 1 && (a[t] = 1, this.size++);
      }, "add")
    },
    {
      key: "delete",
      value: /* @__PURE__ */ m$1(function(t) {
        var a = this._obj;
        a[t] === 1 && (a[t] = 0, this.size--);
      }, "_delete")
    },
    {
      key: "clear",
      value: /* @__PURE__ */ m$1(function() {
        this._obj = /* @__PURE__ */ Object.create(null);
      }, "clear")
    },
    {
      key: "has",
      value: /* @__PURE__ */ m$1(function(t) {
        return this._obj[t] === 1;
      }, "has")
    },
    {
      key: "toArray",
      value: /* @__PURE__ */ m$1(function() {
        var t = this;
        return Object.keys(this._obj).filter(function(a) {
          return t.has(a);
        });
      }, "toArray")
    },
    {
      key: "forEach",
      value: /* @__PURE__ */ m$1(function(t, a) {
        return this.toArray().forEach(t, a);
      }, "forEach")
    }
  ]), r10;
}(), Vt = (typeof Set > "u" ? "undefined" : Ue(Set)) !== uv ? Set : lv, cn = /* @__PURE__ */ m$1(function(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (e === void 0 || t === void 0 || !si(e)) {
    qe("An element must have a core reference and parameters set");
    return;
  }
  var n = t.group;
  if (n == null && (t.data && t.data.source != null && t.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
    qe("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
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
    classes: new Vt(),
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
    var s = t.renderedPosition, o = /* @__PURE__ */ e.pan(), l = /* @__PURE__ */ e.zoom();
    i.position = {
      x: (s.x - o.x) / l,
      y: (s.y - o.y) / l
    };
  }
  var u = [];
  Oe(t.classes) ? u = t.classes : he(t.classes) && (u = /* @__PURE__ */ t.classes.split(/\s+/));
  for (var f = 0, c = u.length; f < c; f++) {
    var d = u[f];
    !d || d === "" || i.classes.add(d);
  }
  this.createEmitter();
  var g = t.style || t.css;
  g && (Le("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(g)), (a === void 0 || a) && this.restore();
}, "Element"), $i = /* @__PURE__ */ m$1(function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, m$1(function(a, n, i) {
    var s;
    Te(a) && !pr(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !Ve(n) ? n : i, n = Ve(n) ? n : function() {
    };
    for (var o = this._private.cy, l = a = he(a) ? this.filter(a) : a, u = [], f = [], c = {}, d = {}, g = {}, h = 0, m, y = /* @__PURE__ */ this.byGroup(), p = y.nodes, b1 = y.edges, w = 0; w < l.length; w++) {
      var x = l[w], T = /* @__PURE__ */ x.id();
      x.isNode() && (u.unshift(x), e.bfs && (g[T] = true, f.push(x)), d[T] = 0);
    }
    for (var C = /* @__PURE__ */ m$1(function() {
      var A = e.bfs ? u.shift() : u.pop(), P = /* @__PURE__ */ A.id();
      if (e.dfs) {
        if (g[P]) return "continue";
        g[P] = true, f.push(A);
      }
      var I = d[P], R = c[P], O = R != null ? R.source() : null, z = R != null ? R.target() : null, $ = R == null ? void 0 : A.same(O) ? z[0] : O[0], H = void 0;
      if (H = /* @__PURE__ */ n(A, R, $, h++, I), H === true) return m = A, "break";
      if (H === false) return "break";
      for (var V = /* @__PURE__ */ A.connectedEdges().filter(function(ee) {
        return (!i || ee.source().same(A)) && b1.has(ee);
      }), F = 0; F < V.length; F++) {
        var U = V[F], J = /* @__PURE__ */ U.connectedNodes().filter(function(ee) {
          return !ee.same(A) && p.has(ee);
        }), j = /* @__PURE__ */ J.id();
        J.length !== 0 && !g[j] && (J = J[0], u.push(J), e.bfs && (g[j] = true, f.push(J)), c[j] = U, d[j] = d[P] + 1);
      }
    }, "_loop"); u.length !== 0; ) {
      var E = /* @__PURE__ */ C();
      if (E !== "continue" && E === "break") break;
    }
    for (var k = /* @__PURE__ */ o.collection(), S = 0; S < f.length; S++) {
      var L = f[S], B = c[L.id()];
      B != null && k.push(B), k.push(L);
    }
    return {
      path: /* @__PURE__ */ o.collection(k),
      found: /* @__PURE__ */ o.collection(m)
    };
  }, "searchFn");
}, "defineSearch"), ca = {
  breadthFirstSearch: /* @__PURE__ */ $i({
    bfs: true
  }),
  depthFirstSearch: /* @__PURE__ */ $i({
    dfs: true
  })
};
ca.bfs = ca.breadthFirstSearch;
ca.dfs = ca.depthFirstSearch;
var vv = /* @__PURE__ */ hl(function(r10, e) {
  (function() {
    var t, a, n, i, s, o, l, u, f, c, d, g, h, m, y;
    n = Math.floor, c = Math.min, a = /* @__PURE__ */ m$1(function(p, b1) {
      return p < b1 ? -1 : p > b1 ? 1 : 0;
    }, "defaultCmp"), f = /* @__PURE__ */ m$1(function(p, b1, w, x, T) {
      var C;
      if (w == null && (w = 0), T == null && (T = a), w < 0) throw new Error("lo must be non-negative");
      for (x == null && (x = p.length); w < x; ) C = /* @__PURE__ */ n((w + x) / 2), T(b1, p[C]) < 0 ? x = C : w = C + 1;
      return [].splice.apply(p, /* @__PURE__ */ [
        w,
        w - w
      ].concat(b1)), b1;
    }, "insort"), o = /* @__PURE__ */ m$1(function(p, b1, w) {
      return w == null && (w = a), p.push(b1), m(p, 0, p.length - 1, w);
    }, "heappush"), s = /* @__PURE__ */ m$1(function(p, b1) {
      var w, x;
      return b1 == null && (b1 = a), w = /* @__PURE__ */ p.pop(), p.length ? (x = p[0], p[0] = w, y(p, 0, b1)) : x = w, x;
    }, "heappop"), u = /* @__PURE__ */ m$1(function(p, b1, w) {
      var x;
      return w == null && (w = a), x = p[0], p[0] = b1, y(p, 0, w), x;
    }, "heapreplace"), l = /* @__PURE__ */ m$1(function(p, b1, w) {
      var x;
      return w == null && (w = a), p.length && w(p[0], b1) < 0 && (x = [
        p[0],
        b1
      ], b1 = x[0], p[0] = x[1], y(p, 0, w)), b1;
    }, "heappushpop"), i = /* @__PURE__ */ m$1(function(p, b1) {
      var w, x, T, C, E, k;
      for (b1 == null && (b1 = a), C = /* @__PURE__ */ (function() {
        k = [];
        for (var S = 0, L = /* @__PURE__ */ n(p.length / 2); 0 <= L ? S < L : S > L; 0 <= L ? S++ : S--) k.push(S);
        return k;
      }).apply(this).reverse(), E = [], x = 0, T = C.length; x < T; x++) w = C[x], E.push(/* @__PURE__ */ y(p, w, b1));
      return E;
    }, "heapify"), h = /* @__PURE__ */ m$1(function(p, b1, w) {
      var x;
      if (w == null && (w = a), x = /* @__PURE__ */ p.indexOf(b1), x !== -1) return m(p, 0, x, w), y(p, x, w);
    }, "updateItem"), d = /* @__PURE__ */ m$1(function(p, b1, w) {
      var x, T, C, E, k;
      if (w == null && (w = a), T = /* @__PURE__ */ p.slice(0, b1), !T.length) return T;
      for (i(T, w), k = /* @__PURE__ */ p.slice(b1), C = 0, E = k.length; C < E; C++) x = k[C], l(T, x, w);
      return T.sort(w).reverse();
    }, "nlargest"), g = /* @__PURE__ */ m$1(function(p, b1, w) {
      var x, T, C, E, k, S, L, B, M;
      if (w == null && (w = a), b1 * 10 <= p.length) {
        if (C = /* @__PURE__ */ p.slice(0, b1).sort(w), !C.length) return C;
        for (T = C[C.length - 1], L = /* @__PURE__ */ p.slice(b1), E = 0, S = L.length; E < S; E++) x = L[E], w(x, T) < 0 && (f(C, x, 0, null, w), C.pop(), T = C[C.length - 1]);
        return C;
      }
      for (i(p, w), M = [], k = 0, B = /* @__PURE__ */ c(b1, p.length); 0 <= B ? k < B : k > B; 0 <= B ? ++k : --k) M.push(/* @__PURE__ */ s(p, w));
      return M;
    }, "nsmallest"), m = /* @__PURE__ */ m$1(function(p, b1, w, x) {
      var T, C, E;
      for (x == null && (x = a), T = p[w]; w > b1; ) {
        if (E = w - 1 >> 1, C = p[E], x(T, C) < 0) {
          p[w] = C, w = E;
          continue;
        }
        break;
      }
      return p[w] = T;
    }, "_siftdown"), y = /* @__PURE__ */ m$1(function(p, b1, w) {
      var x, T, C, E, k;
      for (w == null && (w = a), T = p.length, k = b1, C = p[b1], x = 2 * b1 + 1; x < T; ) E = x + 1, E < T && !(w(p[x], p[E]) < 0) && (x = E), p[b1] = p[x], b1 = x, x = 2 * b1 + 1;
      return p[b1] = C, m(p, k, b1, w);
    }, "_siftup"), t = /* @__PURE__ */ function() {
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
        return b1 = new p(), b1.nodes = /* @__PURE__ */ this.nodes.slice(0), b1;
      }, p.prototype.toArray = function() {
        return this.nodes.slice(0);
      }, p.prototype.insert = p.prototype.push, p.prototype.top = p.prototype.peek, p.prototype.front = p.prototype.peek, p.prototype.has = p.prototype.contains, p.prototype.copy = p.prototype.clone, p;
    }(), function(p, b1) {
      return r10.exports = /* @__PURE__ */ b1();
    }(this, function() {
      return t;
    });
  }).call(ta);
}), Ca = vv, fv = /* @__PURE__ */ rr({
  root: null,
  weight: /* @__PURE__ */ m$1(function(e) {
    return 1;
  }, "weight"),
  directed: false
}), cv = {
  dijkstra: /* @__PURE__ */ m$1(function(e) {
    if (!Te(e)) {
      var t = arguments;
      e = {
        root: t[0],
        weight: t[1],
        directed: t[2]
      };
    }
    var a = /* @__PURE__ */ fv(e), n = a.root, i = a.weight, s = a.directed, o = this, l = i, u = he(n) ? this.filter(n)[0] : n[0], f = {}, c = {}, d = {}, g = /* @__PURE__ */ this.byGroup(), h = g.nodes, m = g.edges;
    m.unmergeBy(function(I) {
      return I.isLoop();
    });
    for (var y = /* @__PURE__ */ m$1(function(R) {
      return f[R.id()];
    }, "getDist"), p = /* @__PURE__ */ m$1(function(R, O) {
      f[R.id()] = O, b1.updateItem(R);
    }, "setDist"), b1 = new Ca(function(I, R) {
      return y(I) - y(R);
    }), w = 0; w < h.length; w++) {
      var x = h[w];
      f[x.id()] = x.same(u) ? 0 : 1 / 0, b1.push(x);
    }
    for (var T = /* @__PURE__ */ m$1(function(R, O) {
      for (var z = /* @__PURE__ */ (s ? R.edgesTo(O) : R.edgesWith(O)).intersect(m), $ = 1 / 0, H, V = 0; V < z.length; V++) {
        var F = z[V], U = /* @__PURE__ */ l(F);
        (U < $ || !H) && ($ = U, H = F);
      }
      return {
        edge: H,
        dist: $
      };
    }, "distBetween"); b1.size() > 0; ) {
      var C = /* @__PURE__ */ b1.pop(), E = /* @__PURE__ */ y(C), k = /* @__PURE__ */ C.id();
      if (d[k] = E, E !== 1 / 0) for (var S = /* @__PURE__ */ C.neighborhood().intersect(h), L = 0; L < S.length; L++) {
        var B = S[L], M = /* @__PURE__ */ B.id(), A = /* @__PURE__ */ T(C, B), P = E + A.dist;
        P < y(B) && (p(B, P), c[M] = {
          node: C,
          edge: A.edge
        });
      }
    }
    return {
      distanceTo: /* @__PURE__ */ m$1(function(R) {
        var O = he(R) ? h.filter(R)[0] : R[0];
        return d[O.id()];
      }, "distanceTo"),
      pathTo: /* @__PURE__ */ m$1(function(R) {
        var O = he(R) ? h.filter(R)[0] : R[0], z = [], $ = O, H = /* @__PURE__ */ $.id();
        if (O.length > 0) for (z.unshift(O); c[H]; ) {
          var V = c[H];
          z.unshift(V.edge), z.unshift(V.node), $ = V.node, H = /* @__PURE__ */ $.id();
        }
        return o.spawn(z);
      }, "pathTo")
    };
  }, "dijkstra")
}, dv = {
  kruskal: /* @__PURE__ */ m$1(function(e) {
    e = e || function(w) {
      return 1;
    };
    for (var t = /* @__PURE__ */ this.byGroup(), a = t.nodes, n = t.edges, i = a.length, s = new Array(i), o = a, l = /* @__PURE__ */ m$1(function(x) {
      for (var T = 0; T < s.length; T++) {
        var C = s[T];
        if (C.has(x)) return T;
      }
    }, "findSetIndex"), u = 0; u < i; u++) s[u] = /* @__PURE__ */ this.spawn(a[u]);
    for (var f = /* @__PURE__ */ n.sort(function(w, x) {
      return e(w) - e(x);
    }), c = 0; c < f.length; c++) {
      var d = f[c], g = d.source()[0], h = d.target()[0], m = /* @__PURE__ */ l(g), y = /* @__PURE__ */ l(h), p = s[m], b1 = s[y];
      m !== y && (o.merge(d), p.merge(b1), s.splice(y, 1));
    }
    return o;
  }, "kruskal")
}, hv = /* @__PURE__ */ rr({
  root: null,
  goal: null,
  weight: /* @__PURE__ */ m$1(function(e) {
    return 1;
  }, "weight"),
  heuristic: /* @__PURE__ */ m$1(function(e) {
    return 0;
  }, "heuristic"),
  directed: false
}), gv = {
  aStar: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ hv(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, l = a.weight;
    n = t.collection(n)[0], i = t.collection(i)[0];
    var u = /* @__PURE__ */ n.id(), f = /* @__PURE__ */ i.id(), c = {}, d = {}, g = {}, h = new Ca(function(H, V) {
      return d[H.id()] - d[V.id()];
    }), m = new Vt(), y = {}, p = {}, b1 = /* @__PURE__ */ m$1(function(V, F) {
      h.push(V), m.add(F);
    }, "addToOpenSet"), w, x, T = /* @__PURE__ */ m$1(function() {
      w = /* @__PURE__ */ h.pop(), x = /* @__PURE__ */ w.id(), m.delete(x);
    }, "popFromOpenSet"), C = /* @__PURE__ */ m$1(function(V) {
      return m.has(V);
    }, "isInOpenSet");
    b1(n, u), c[u] = 0, d[u] = /* @__PURE__ */ s(n);
    for (var E = 0; h.size() > 0; ) {
      if (T(), E++, x === f) {
        for (var k = [], S = i, L = f, B = p[L]; k.unshift(S), B != null && k.unshift(B), S = y[L], S != null; ) L = /* @__PURE__ */ S.id(), B = p[L];
        return {
          found: true,
          distance: c[x],
          path: /* @__PURE__ */ this.spawn(k),
          steps: E
        };
      }
      g[x] = true;
      for (var M = w._private.edges, A = 0; A < M.length; A++) {
        var P = M[A];
        if (this.hasElementWithId(/* @__PURE__ */ P.id()) && !(o && P.data("source") !== x)) {
          var I = /* @__PURE__ */ P.source(), R = /* @__PURE__ */ P.target(), O = I.id() !== x ? I : R, z = /* @__PURE__ */ O.id();
          if (this.hasElementWithId(z) && !g[z]) {
            var $ = c[x] + l(P);
            if (!C(z)) {
              c[z] = $, d[z] = $ + s(O), b1(O, z), y[z] = w, p[z] = P;
              continue;
            }
            $ < c[z] && (c[z] = $, d[z] = $ + s(O), y[z] = w, p[z] = P);
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
}, pv = /* @__PURE__ */ rr({
  weight: /* @__PURE__ */ m$1(function(e) {
    return 1;
  }, "weight"),
  directed: false
}), yv = {
  floydWarshall: /* @__PURE__ */ m$1(function(e) {
    for (var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ pv(e), n = a.weight, i = a.directed, s = n, o = /* @__PURE__ */ this.byGroup(), l = o.nodes, u = o.edges, f = l.length, c = f * f, d = /* @__PURE__ */ m$1(function(U) {
      return l.indexOf(U);
    }, "indexOf"), g = /* @__PURE__ */ m$1(function(U) {
      return l[U];
    }, "atIndex"), h = new Array(c), m = 0; m < c; m++) {
      var y = m % f, p = (m - y) / f;
      p === y ? h[m] = 0 : h[m] = 1 / 0;
    }
    for (var b1 = new Array(c), w = new Array(c), x = 0; x < u.length; x++) {
      var T = u[x], C = T.source()[0], E = T.target()[0];
      if (C !== E) {
        var k = /* @__PURE__ */ d(C), S = /* @__PURE__ */ d(E), L = k * f + S, B = /* @__PURE__ */ s(T);
        if (h[L] > B && (h[L] = B, b1[L] = S, w[L] = T), !i) {
          var M = S * f + k;
          !i && h[M] > B && (h[M] = B, b1[M] = k, w[M] = T);
        }
      }
    }
    for (var A = 0; A < f; A++) for (var P = 0; P < f; P++) for (var I = P * f + A, R = 0; R < f; R++) {
      var O = P * f + R, z = A * f + R;
      h[I] + h[z] < h[O] && (h[O] = h[I] + h[z], b1[O] = b1[I]);
    }
    var $ = /* @__PURE__ */ m$1(function(U) {
      return (he(U) ? t.filter(U) : U)[0];
    }, "getArgEle"), H = /* @__PURE__ */ m$1(function(U) {
      return d(/* @__PURE__ */ $(U));
    }, "indexOfArgEle"), V = {
      distance: /* @__PURE__ */ m$1(function(U, J) {
        var j = /* @__PURE__ */ H(U), ee = /* @__PURE__ */ H(J);
        return h[j * f + ee];
      }, "distance"),
      path: /* @__PURE__ */ m$1(function(U, J) {
        var j = /* @__PURE__ */ H(U), ee = /* @__PURE__ */ H(J), re = /* @__PURE__ */ g(j);
        if (j === ee) return re.collection();
        if (b1[j * f + ee] == null) return t.collection();
        var Y = /* @__PURE__ */ t.collection(), N = j, X;
        for (Y.merge(re); j !== ee; ) N = j, j = b1[j * f + ee], X = w[N * f + j], Y.merge(X), Y.merge(/* @__PURE__ */ g(j));
        return Y;
      }, "path")
    };
    return V;
  }, "floydWarshall")
}, mv = /* @__PURE__ */ rr({
  weight: /* @__PURE__ */ m$1(function(e) {
    return 1;
  }, "weight"),
  directed: false,
  root: null
}), bv = {
  bellmanFord: /* @__PURE__ */ m$1(function(e) {
    var t = this, a = /* @__PURE__ */ mv(e), n = a.weight, i = a.directed, s = a.root, o = n, l = this, u = /* @__PURE__ */ this.cy(), f = /* @__PURE__ */ this.byGroup(), c = f.edges, d = f.nodes, g = d.length, h = new Ir(), m = false, y = [];
    s = u.collection(s)[0], c.unmergeBy(function(de) {
      return de.isLoop();
    });
    for (var p = c.length, b1 = /* @__PURE__ */ m$1(function(fe) {
      var ye = /* @__PURE__ */ h.get(/* @__PURE__ */ fe.id());
      return ye || (ye = {}, h.set(/* @__PURE__ */ fe.id(), ye)), ye;
    }, "getInfo"), w = /* @__PURE__ */ m$1(function(fe) {
      return (he(fe) ? u.$(fe) : fe)[0];
    }, "getNodeFromTo"), x = /* @__PURE__ */ m$1(function(fe) {
      return b1(/* @__PURE__ */ w(fe)).dist;
    }, "distanceTo"), T = /* @__PURE__ */ m$1(function(fe) {
      for (var ye = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, Be = /* @__PURE__ */ w(fe), Ce = [], Ee = Be; ; ) {
        if (Ee == null) return t.spawn();
        var De = /* @__PURE__ */ b1(Ee), _ = De.edge, D = De.pred;
        if (Ce.unshift(Ee[0]), Ee.same(ye) && Ce.length > 0) break;
        _ != null && Ce.unshift(_), Ee = D;
      }
      return l.spawn(Ce);
    }, "pathTo"), C = 0; C < g; C++) {
      var E = d[C], k = /* @__PURE__ */ b1(E);
      E.same(s) ? k.dist = 0 : k.dist = 1 / 0, k.pred = null, k.edge = null;
    }
    for (var S = false, L = /* @__PURE__ */ m$1(function(fe, ye, Be, Ce, Ee, De) {
      var _ = Ce.dist + De;
      _ < Ee.dist && !Be.same(Ce.edge) && (Ee.dist = _, Ee.pred = fe, Ee.edge = Be, S = true);
    }, "checkForEdgeReplacement"), B = 1; B < g; B++) {
      S = false;
      for (var M = 0; M < p; M++) {
        var A = c[M], P = /* @__PURE__ */ A.source(), I = /* @__PURE__ */ A.target(), R = /* @__PURE__ */ o(A), O = /* @__PURE__ */ b1(P), z = /* @__PURE__ */ b1(I);
        L(P, I, A, O, z, R), i || L(I, P, A, z, O, R);
      }
      if (!S) break;
    }
    if (S) for (var $ = [], H = 0; H < p; H++) {
      var V = c[H], F = /* @__PURE__ */ V.source(), U = /* @__PURE__ */ V.target(), J = /* @__PURE__ */ o(V), j = b1(F).dist, ee = b1(U).dist;
      if (j + J < ee || !i && ee + J < j) if (m || (Le("Graph contains a negative weight cycle for Bellman-Ford"), m = true), e.findNegativeWeightCycles !== false) {
        var re = [];
        j + J < ee && re.push(F), !i && ee + J < j && re.push(U);
        for (var Y = re.length, N = 0; N < Y; N++) {
          var X = re[N], Z = [
            X
          ];
          Z.push(b1(X).edge);
          for (var oe = b1(X).pred; Z.indexOf(oe) === -1; ) Z.push(oe), Z.push(b1(oe).edge), oe = b1(oe).pred;
          Z = /* @__PURE__ */ Z.slice(/* @__PURE__ */ Z.indexOf(oe));
          for (var ge = /* @__PURE__ */ Z[0].id(), ne = 0, se = 2; se < Z.length; se += 2) Z[se].id() < ge && (ge = /* @__PURE__ */ Z[se].id(), ne = se);
          Z = /* @__PURE__ */ Z.slice(ne).concat(/* @__PURE__ */ Z.slice(0, ne)), Z.push(Z[0]);
          var le = /* @__PURE__ */ Z.map(function(de) {
            return de.id();
          }).join(",");
          $.indexOf(le) === -1 && (y.push(/* @__PURE__ */ l.spawn(Z)), $.push(le));
        }
      } else break;
    }
    return {
      distanceTo: x,
      pathTo: T,
      hasNegativeWeightCycle: m,
      negativeWeightCycles: y
    };
  }, "bellmanFord")
}, wv = /* @__PURE__ */ Math.sqrt(2), xv = /* @__PURE__ */ m$1(function(e, t, a) {
  a.length === 0 && qe("Karger-Stein must be run on a connected (sub)graph");
  for (var n = a[e], i = n[1], s = n[2], o = t[i], l = t[s], u = a, f = u.length - 1; f >= 0; f--) {
    var c = u[f], d = c[1], g = c[2];
    (t[d] === o && t[g] === l || t[d] === l && t[g] === o) && u.splice(f, 1);
  }
  for (var h = 0; h < u.length; h++) {
    var m = u[h];
    m[1] === l ? (u[h] = /* @__PURE__ */ m.slice(), u[h][1] = o) : m[2] === l && (u[h] = /* @__PURE__ */ m.slice(), u[h][2] = o);
  }
  for (var y = 0; y < t.length; y++) t[y] === l && (t[y] = o);
  return u;
}, "collapse"), Ln = /* @__PURE__ */ m$1(function(e, t, a, n) {
  for (; a > n; ) {
    var i = /* @__PURE__ */ Math.floor(Math.random() * t.length);
    t = /* @__PURE__ */ xv(i, e, t), a--;
  }
  return t;
}, "contractUntil"), Ev = {
  kargerStein: /* @__PURE__ */ m$1(function() {
    var e = this, t = /* @__PURE__ */ this.byGroup(), a = t.nodes, n = t.edges;
    n.unmergeBy(function(z) {
      return z.isLoop();
    });
    var i = a.length, s = n.length, o = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ Math.pow(Math.log(i) / Math.LN2, 2)), l = /* @__PURE__ */ Math.floor(i / wv);
    if (i < 2) {
      qe("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var u = [], f = 0; f < s; f++) {
      var c = n[f];
      u.push([
        f,
        /* @__PURE__ */ a.indexOf(/* @__PURE__ */ c.source()),
        /* @__PURE__ */ a.indexOf(/* @__PURE__ */ c.target())
      ]);
    }
    for (var d = 1 / 0, g = [], h = new Array(i), m = new Array(i), y = new Array(i), p = /* @__PURE__ */ m$1(function($, H) {
      for (var V = 0; V < i; V++) H[V] = $[V];
    }, "copyNodesMap"), b1 = 0; b1 <= o; b1++) {
      for (var w = 0; w < i; w++) m[w] = w;
      var x = /* @__PURE__ */ Ln(m, /* @__PURE__ */ u.slice(), i, l), T = /* @__PURE__ */ x.slice();
      p(m, y);
      var C = /* @__PURE__ */ Ln(m, x, l, 2), E = /* @__PURE__ */ Ln(y, T, l, 2);
      C.length <= E.length && C.length < d ? (d = C.length, g = C, p(m, h)) : E.length <= C.length && E.length < d && (d = E.length, g = E, p(y, h));
    }
    for (var k = /* @__PURE__ */ this.spawn(/* @__PURE__ */ g.map(function(z) {
      return n[z[0]];
    })), S = /* @__PURE__ */ this.spawn(), L = /* @__PURE__ */ this.spawn(), B = h[0], M = 0; M < h.length; M++) {
      var A = h[M], P = a[M];
      A === B ? S.merge(P) : L.merge(P);
    }
    var I = /* @__PURE__ */ m$1(function($) {
      var H = /* @__PURE__ */ e.spawn();
      return $.forEach(function(V) {
        H.merge(V), V.connectedEdges().forEach(function(F) {
          e.contains(F) && !k.contains(F) && H.merge(F);
        });
      }), H;
    }, "constructComponent"), R = [
      /* @__PURE__ */ I(S),
      /* @__PURE__ */ I(L)
    ], O = {
      cut: k,
      components: R,
      partition1: S,
      partition2: L
    };
    return O;
  }, "kargerStein")
}, Cv = /* @__PURE__ */ m$1(function(e) {
  return {
    x: e.x,
    y: e.y
  };
}, "copyPosition"), dn = /* @__PURE__ */ m$1(function(e, t, a) {
  return {
    x: e.x * t + a.x,
    y: e.y * t + a.y
  };
}, "modelToRenderedPosition"), co = /* @__PURE__ */ m$1(function(e, t, a) {
  return {
    x: (e.x - a.x) / t,
    y: (e.y - a.y) / t
  };
}, "renderedToModelPosition"), Pt = /* @__PURE__ */ m$1(function(e) {
  return {
    x: e[0],
    y: e[1]
  };
}, "array2point"), Sv = /* @__PURE__ */ m$1(function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = t; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = /* @__PURE__ */ Math.min(s, n));
  }
  return n;
}, "min"), Tv = /* @__PURE__ */ m$1(function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = t; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = /* @__PURE__ */ Math.max(s, n));
  }
  return n;
}, "max"), Dv = /* @__PURE__ */ m$1(function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = t; s < a; s++) {
    var o = e[s];
    isFinite(o) && (n += o, i++);
  }
  return n / i;
}, "mean"), kv = /* @__PURE__ */ m$1(function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  n ? e = /* @__PURE__ */ e.slice(t, a) : (a < e.length && e.splice(a, e.length - a), t > 0 && e.splice(0, t));
  for (var o = 0, l = e.length - 1; l >= 0; l--) {
    var u = e[l];
    s ? isFinite(u) || (e[l] = -1 / 0, o++) : e.splice(l, 1);
  }
  i && e.sort(function(d, g) {
    return d - g;
  });
  var f = e.length, c = /* @__PURE__ */ Math.floor(f / 2);
  return f % 2 !== 0 ? e[c + 1 + o] : (e[c - 1 + o] + e[c + o]) / 2;
}, "median"), Pv = /* @__PURE__ */ m$1(function(e) {
  return Math.PI * e / 180;
}, "deg2rad"), La = /* @__PURE__ */ m$1(function(e, t) {
  return Math.atan2(t, e) - Math.PI / 2;
}, "getAngleFromDisp"), fi = Math.log2 || function(r10) {
  return Math.log(r10) / Math.log(2);
}, ho = /* @__PURE__ */ m$1(function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, "signum"), ht = /* @__PURE__ */ m$1(function(e, t) {
  return Math.sqrt(/* @__PURE__ */ ot(e, t));
}, "dist"), ot = /* @__PURE__ */ m$1(function(e, t) {
  var a = t.x - e.x, n = t.y - e.y;
  return a * a + n * n;
}, "sqdist"), Bv = /* @__PURE__ */ m$1(function(e) {
  for (var t = e.length, a = 0, n = 0; n < t; n++) a += e[n];
  for (var i = 0; i < t; i++) e[i] = e[i] / a;
  return e;
}, "inPlaceSumNormalize"), Ze = /* @__PURE__ */ m$1(function(e, t, a, n) {
  return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * t + n * n * a;
}, "qbezierAt"), Mt = /* @__PURE__ */ m$1(function(e, t, a, n) {
  return {
    x: /* @__PURE__ */ Ze(e.x, t.x, a.x, n),
    y: /* @__PURE__ */ Ze(e.y, t.y, a.y, n)
  };
}, "qbezierPtAt"), Mv = /* @__PURE__ */ m$1(function(e, t, a, n) {
  var i = {
    x: t.x - e.x,
    y: t.y - e.y
  }, s = /* @__PURE__ */ ht(e, t), o = {
    x: i.x / s,
    y: i.y / s
  };
  return a = a ?? 0, n = n ?? a * s, {
    x: e.x + o.x * n,
    y: e.y + o.y * n
  };
}, "lineAt"), da = /* @__PURE__ */ m$1(function(e, t, a) {
  return Math.max(e, /* @__PURE__ */ Math.min(a, t));
}, "bound"), gr = /* @__PURE__ */ m$1(function(e) {
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
}, "makeBoundingBox"), Lv = /* @__PURE__ */ m$1(function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
}, "copyBoundingBox"), Av = /* @__PURE__ */ m$1(function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, "clearBoundingBox"), Rv = /* @__PURE__ */ m$1(function(e, t, a) {
  return {
    x1: e.x1 + t,
    x2: e.x2 + t,
    y1: e.y1 + a,
    y2: e.y2 + a,
    w: e.w,
    h: e.h
  };
}, "shiftBoundingBox"), go = /* @__PURE__ */ m$1(function(e, t) {
  e.x1 = /* @__PURE__ */ Math.min(e.x1, t.x1), e.x2 = /* @__PURE__ */ Math.max(e.x2, t.x2), e.w = e.x2 - e.x1, e.y1 = /* @__PURE__ */ Math.min(e.y1, t.y1), e.y2 = /* @__PURE__ */ Math.max(e.y2, t.y2), e.h = e.y2 - e.y1;
}, "updateBoundingBox"), Ov = /* @__PURE__ */ m$1(function(e, t, a) {
  e.x1 = /* @__PURE__ */ Math.min(e.x1, t), e.x2 = /* @__PURE__ */ Math.max(e.x2, t), e.w = e.x2 - e.x1, e.y1 = /* @__PURE__ */ Math.min(e.y1, a), e.y2 = /* @__PURE__ */ Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, "expandBoundingBoxByPoint"), Ha = /* @__PURE__ */ m$1(function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= t, e.x2 += t, e.y1 -= t, e.y2 += t, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, "expandBoundingBox"), Ga = /* @__PURE__ */ m$1(function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [
    0
  ], a, n, i, s;
  if (t.length === 1) a = n = i = s = t[0];
  else if (t.length === 2) a = i = t[0], s = n = t[1];
  else if (t.length === 4) {
    var o = /* @__PURE__ */ Dr(t, 4);
    a = o[0], n = o[1], i = o[2], s = o[3];
  }
  return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, "expandBoundingBoxSides"), Hi = /* @__PURE__ */ m$1(function(e, t) {
  e.x1 = t.x1, e.y1 = t.y1, e.x2 = t.x2, e.y2 = t.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, "assignBoundingBox"), ci = /* @__PURE__ */ m$1(function(e, t) {
  return !(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
}, "boundingBoxesIntersect"), It = /* @__PURE__ */ m$1(function(e, t, a) {
  return e.x1 <= t && t <= e.x2 && e.y1 <= a && a <= e.y2;
}, "inBoundingBox"), Iv = /* @__PURE__ */ m$1(function(e, t) {
  return It(e, t.x, t.y);
}, "pointInBoundingBox"), po = /* @__PURE__ */ m$1(function(e, t) {
  return It(e, t.x1, t.y1) && It(e, t.x2, t.y2);
}, "boundingBoxInBoundingBox"), yo = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o) {
  var l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", u = l === "auto" ? gt(i, s) : l, f = i / 2, c = s / 2;
  u = /* @__PURE__ */ Math.min(u, f, c);
  var d = u !== f, g = u !== c, h;
  if (d) {
    var m = a - f + u - o, y = n - c - o, p = a + f - u + o, b1 = y;
    if (h = /* @__PURE__ */ Zr(e, t, a, n, m, y, p, b1, false), h.length > 0) return h;
  }
  if (g) {
    var w = a + f + o, x = n - c + u - o, T = w, C = n + c - u + o;
    if (h = /* @__PURE__ */ Zr(e, t, a, n, w, x, T, C, false), h.length > 0) return h;
  }
  if (d) {
    var E = a - f + u - o, k = n + c + o, S = a + f - u + o, L = k;
    if (h = /* @__PURE__ */ Zr(e, t, a, n, E, k, S, L, false), h.length > 0) return h;
  }
  if (g) {
    var B = a - f - o, M = n - c + u - o, A = B, P = n + c - u + o;
    if (h = /* @__PURE__ */ Zr(e, t, a, n, B, M, A, P, false), h.length > 0) return h;
  }
  var I;
  {
    var R = a - f + u, O = n - c + u;
    if (I = /* @__PURE__ */ na(e, t, a, n, R, O, u + o), I.length > 0 && I[0] <= R && I[1] <= O) return [
      I[0],
      I[1]
    ];
  }
  {
    var z = a + f - u, $ = n - c + u;
    if (I = /* @__PURE__ */ na(e, t, a, n, z, $, u + o), I.length > 0 && I[0] >= z && I[1] <= $) return [
      I[0],
      I[1]
    ];
  }
  {
    var H = a + f - u, V = n + c - u;
    if (I = /* @__PURE__ */ na(e, t, a, n, H, V, u + o), I.length > 0 && I[0] >= H && I[1] >= V) return [
      I[0],
      I[1]
    ];
  }
  {
    var F = a - f + u, U = n + c - u;
    if (I = /* @__PURE__ */ na(e, t, a, n, F, U, u + o), I.length > 0 && I[0] <= F && I[1] >= U) return [
      I[0],
      I[1]
    ];
  }
  return [];
}, "roundRectangleIntersectLine"), zv = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o) {
  var l = o, u = /* @__PURE__ */ Math.min(a, i), f = /* @__PURE__ */ Math.max(a, i), c = /* @__PURE__ */ Math.min(n, s), d = /* @__PURE__ */ Math.max(n, s);
  return u - l <= e && e <= f + l && c - l <= t && t <= d + l;
}, "inLineVicinity"), Nv = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l, u) {
  var f = {
    x1: Math.min(a, o, i) - u,
    x2: Math.max(a, o, i) + u,
    y1: Math.min(n, l, s) - u,
    y2: Math.max(n, l, s) + u
  };
  return !(e < f.x1 || e > f.x2 || t < f.y1 || t > f.y2);
}, "inBezierVicinity"), Fv = /* @__PURE__ */ m$1(function(e, t, a, n) {
  a -= n;
  var i = t * t - 4 * e * a;
  if (i < 0) return [];
  var s = /* @__PURE__ */ Math.sqrt(i), o = 2 * e, l = (-t + s) / o, u = (-t - s) / o;
  return [
    l,
    u
  ];
}, "solveQuadratic"), Vv = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
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
  l = -l, f = l * l * l, f = /* @__PURE__ */ Math.acos(u / Math.sqrt(f)), h = 2 * Math.sqrt(l), i[0] = -g + h * Math.cos(f / 3), i[2] = -g + h * Math.cos((f + 2 * Math.PI) / 3), i[4] = -g + h * Math.cos((f + 4 * Math.PI) / 3);
}, "solveCubic"), qv = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
  var u = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * l + 4 * s * s - 4 * s * l + l * l, f = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * l - 6 * s * s + 3 * s * l, c = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * l - n * t + 2 * s * s + 2 * s * t - l * t, d = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * t - s * t, g = [];
  Vv(u, f, c, d, g);
  for (var h = 1e-7, m = [], y = 0; y < 6; y += 2) Math.abs(g[y + 1]) < h && g[y] >= 0 && g[y] <= 1 && m.push(g[y]);
  m.push(1), m.push(0);
  for (var p = -1, b1, w, x, T = 0; T < m.length; T++) b1 = Math.pow(1 - m[T], 2) * a + 2 * (1 - m[T]) * m[T] * i + m[T] * m[T] * o, w = Math.pow(1 - m[T], 2) * n + 2 * (1 - m[T]) * m[T] * s + m[T] * m[T] * l, x = Math.pow(b1 - e, 2) + Math.pow(w - t, 2), p >= 0 ? x < p && (p = x) : p = x;
  return p;
}, "sqdistToQuadraticBezier"), $v = /* @__PURE__ */ m$1(function(e, t, a, n, i, s) {
  var o = [
    e - a,
    t - n
  ], l = [
    i - a,
    s - n
  ], u = l[0] * l[0] + l[1] * l[1], f = o[0] * o[0] + o[1] * o[1], c = o[0] * l[0] + o[1] * l[1], d = c * c / u;
  return c < 0 ? f : d > u ? (e - i) * (e - i) + (t - s) * (t - s) : f - d;
}, "sqdistToFiniteLine"), hr = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n, i, s, o, l, u = 0, f = 0; f < a.length / 2; f++) if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e)) if (n >= e && e >= s || n <= e && e <= s) l = (e - n) / (s - n) * (o - i) + i, l > t && u++;
  else continue;
  return u % 2 !== 0;
}, "pointInsidePolygonPoints"), Hr = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l, u) {
  var f = new Array(a.length), c;
  l[0] != null ? (c = /* @__PURE__ */ Math.atan(l[1] / l[0]), l[0] < 0 ? c = c + Math.PI / 2 : c = -c - Math.PI / 2) : c = l;
  for (var d = /* @__PURE__ */ Math.cos(-c), g = /* @__PURE__ */ Math.sin(-c), h = 0; h < f.length / 2; h++) f[h * 2] = s / 2 * (a[h * 2] * d - a[h * 2 + 1] * g), f[h * 2 + 1] = o / 2 * (a[h * 2 + 1] * d + a[h * 2] * g), f[h * 2] += n, f[h * 2 + 1] += i;
  var m;
  if (u > 0) {
    var y = /* @__PURE__ */ rn(f, -u);
    m = /* @__PURE__ */ en(y);
  } else m = f;
  return hr(e, t, m);
}, "pointInsidePolygon"), Hv = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
  for (var u = new Array(a.length * 2), f = 0; f < l.length; f++) {
    var c = l[f];
    u[f * 4 + 0] = c.startX, u[f * 4 + 1] = c.startY, u[f * 4 + 2] = c.stopX, u[f * 4 + 3] = c.stopY;
    var d = Math.pow(c.cx - e, 2) + Math.pow(c.cy - t, 2);
    if (d <= Math.pow(c.radius, 2)) return true;
  }
  return hr(e, t, u);
}, "pointInsideRoundPolygon"), en = /* @__PURE__ */ m$1(function(e) {
  for (var t = new Array(e.length / 2), a, n, i, s, o, l, u, f, c = 0; c < e.length / 4; c++) {
    a = e[c * 4], n = e[c * 4 + 1], i = e[c * 4 + 2], s = e[c * 4 + 3], c < e.length / 4 - 1 ? (o = e[(c + 1) * 4], l = e[(c + 1) * 4 + 1], u = e[(c + 1) * 4 + 2], f = e[(c + 1) * 4 + 3]) : (o = e[0], l = e[1], u = e[2], f = e[3]);
    var d = /* @__PURE__ */ Zr(a, n, i, s, o, l, u, f, true);
    t[c * 2] = d[0], t[c * 2 + 1] = d[1];
  }
  return t;
}, "joinLines"), rn = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = new Array(e.length * 2), n, i, s, o, l = 0; l < e.length / 2; l++) {
    n = e[l * 2], i = e[l * 2 + 1], l < e.length / 2 - 1 ? (s = e[(l + 1) * 2], o = e[(l + 1) * 2 + 1]) : (s = e[0], o = e[1]);
    var u = o - i, f = -(s - n), c = /* @__PURE__ */ Math.sqrt(u * u + f * f), d = u / c, g = f / c;
    a[l * 4] = n + d * t, a[l * 4 + 1] = i + g * t, a[l * 4 + 2] = s + d * t, a[l * 4 + 3] = o + g * t;
  }
  return a;
}, "expandPolygon"), Gv = /* @__PURE__ */ m$1(function(e, t, a, n, i, s) {
  var o = a - e, l = n - t;
  o /= i, l /= s;
  var u = /* @__PURE__ */ Math.sqrt(o * o + l * l), f = u - 1;
  if (f < 0) return [];
  var c = f / u;
  return [
    (a - e) * c + e,
    (n - t) * c + t
  ];
}, "intersectLineEllipse"), ft = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o) {
  return e -= i, t -= s, e /= a / 2 + o, t /= n / 2 + o, e * e + t * t <= 1;
}, "checkInEllipse"), na = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o) {
  var l = [
    a - e,
    n - t
  ], u = [
    e - i,
    t - s
  ], f = l[0] * l[0] + l[1] * l[1], c = 2 * (u[0] * l[0] + u[1] * l[1]), d = u[0] * u[0] + u[1] * u[1] - o * o, g = c * c - 4 * f * d;
  if (g < 0) return [];
  var h = (-c + Math.sqrt(g)) / (2 * f), m = (-c - Math.sqrt(g)) / (2 * f), y = /* @__PURE__ */ Math.min(h, m), p = /* @__PURE__ */ Math.max(h, m), b1 = [];
  if (y >= 0 && y <= 1 && b1.push(y), p >= 0 && p <= 1 && b1.push(p), b1.length === 0) return [];
  var w = b1[0] * l[0] + e, x = b1[0] * l[1] + t;
  if (b1.length > 1) {
    if (b1[0] == b1[1]) return [
      w,
      x
    ];
    var T = b1[1] * l[0] + e, C = b1[1] * l[1] + t;
    return [
      w,
      x,
      T,
      C
    ];
  } else return [
    w,
    x
  ];
}, "intersectLineCircle"), An = /* @__PURE__ */ m$1(function(e, t, a) {
  return t <= e && e <= a || a <= e && e <= t ? e : e <= t && t <= a || a <= t && t <= e ? t : a;
}, "midOfThree"), Zr = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l, u) {
  var f = e - i, c = a - e, d = o - i, g = t - s, h = n - t, m = l - s, y = d * g - m * f, p = c * g - h * f, b1 = m * c - d * h;
  if (b1 !== 0) {
    var w = y / b1, x = p / b1, T = 1e-3, C = 0 - T, E = 1 + T;
    return C <= w && w <= E && C <= x && x <= E ? [
      e + w * c,
      t + w * h
    ] : u ? [
      e + w * c,
      t + w * h
    ] : [];
  } else return y === 0 || p === 0 ? An(e, a, o) === o ? [
    o,
    l
  ] : An(e, a, i) === i ? [
    i,
    s
  ] : An(i, o, a) === a ? [
    a,
    n
  ] : [] : [];
}, "finiteLinesIntersect"), ha = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
  var u = [], f, c = new Array(a.length), d = true;
  s == null && (d = false);
  var g;
  if (d) {
    for (var h = 0; h < c.length / 2; h++) c[h * 2] = a[h * 2] * s + n, c[h * 2 + 1] = a[h * 2 + 1] * o + i;
    if (l > 0) {
      var m = /* @__PURE__ */ rn(c, -l);
      g = /* @__PURE__ */ en(m);
    } else g = c;
  } else g = a;
  for (var y, p, b1, w, x = 0; x < g.length / 2; x++) y = g[x * 2], p = g[x * 2 + 1], x < g.length / 2 - 1 ? (b1 = g[(x + 1) * 2], w = g[(x + 1) * 2 + 1]) : (b1 = g[0], w = g[1]), f = /* @__PURE__ */ Zr(e, t, n, i, y, p, b1, w), f.length !== 0 && u.push(f[0], f[1]);
  return u;
}, "polygonIntersectLine"), Kv = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l, u) {
  var f = [], c, d = new Array(a.length * 2);
  u.forEach(function(b1, w) {
    w === 0 ? (d[d.length - 2] = b1.startX, d[d.length - 1] = b1.startY) : (d[w * 4 - 2] = b1.startX, d[w * 4 - 1] = b1.startY), d[w * 4] = b1.stopX, d[w * 4 + 1] = b1.stopY, c = /* @__PURE__ */ na(e, t, n, i, b1.cx, b1.cy, b1.radius), c.length !== 0 && f.push(c[0], c[1]);
  });
  for (var g = 0; g < d.length / 4; g++) c = /* @__PURE__ */ Zr(e, t, n, i, d[g * 4], d[g * 4 + 1], d[g * 4 + 2], d[g * 4 + 3], false), c.length !== 0 && f.push(c[0], c[1]);
  if (f.length > 2) {
    for (var h = [
      f[0],
      f[1]
    ], m = Math.pow(h[0] - e, 2) + Math.pow(h[1] - t, 2), y = 1; y < f.length / 2; y++) {
      var p = Math.pow(f[y * 2] - e, 2) + Math.pow(f[y * 2 + 1] - t, 2);
      p <= m && (h[0] = f[y * 2], h[1] = f[y * 2 + 1], m = p);
    }
    return h;
  }
  return f;
}, "roundPolygonIntersectLine"), Aa = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = [
    e[0] - t[0],
    e[1] - t[1]
  ], i = /* @__PURE__ */ Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
  return s < 0 && (s = 1e-5), [
    t[0] + s * n[0],
    t[1] + s * n[1]
  ];
}, "shortenIntersection"), fr = /* @__PURE__ */ m$1(function(e, t) {
  var a = /* @__PURE__ */ Hn(e, t);
  return a = /* @__PURE__ */ mo(a), a;
}, "generateUnitNgonPointsFitToSquare"), mo = /* @__PURE__ */ m$1(function(e) {
  for (var t, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, l = -1 / 0, u = 0; u < n; u++) t = e[2 * u], a = e[2 * u + 1], i = /* @__PURE__ */ Math.min(i, t), o = /* @__PURE__ */ Math.max(o, t), s = /* @__PURE__ */ Math.min(s, a), l = /* @__PURE__ */ Math.max(l, a);
  for (var f = 2 / (o - i), c = 2 / (l - s), d = 0; d < n; d++) t = e[2 * d] = e[2 * d] * f, a = e[2 * d + 1] = e[2 * d + 1] * c, i = /* @__PURE__ */ Math.min(i, t), o = /* @__PURE__ */ Math.max(o, t), s = /* @__PURE__ */ Math.min(s, a), l = /* @__PURE__ */ Math.max(l, a);
  if (s < -1) for (var g = 0; g < n; g++) a = e[2 * g + 1] = e[2 * g + 1] + (-1 - s);
  return e;
}, "fitPolygonToSquare"), Hn = /* @__PURE__ */ m$1(function(e, t) {
  var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
  n += t;
  for (var i = new Array(e * 2), s, o = 0; o < e; o++) s = o * a + n, i[2 * o] = /* @__PURE__ */ Math.cos(s), i[2 * o + 1] = /* @__PURE__ */ Math.sin(-s);
  return i;
}, "generateUnitNgonPoints"), gt = /* @__PURE__ */ m$1(function(e, t) {
  return Math.min(e / 4, t / 4, 8);
}, "getRoundRectangleRadius"), bo = /* @__PURE__ */ m$1(function(e, t) {
  return Math.min(e / 10, t / 10, 8);
}, "getRoundPolygonRadius"), di = /* @__PURE__ */ m$1(function() {
  return 8;
}, "getCutRectangleCornerLength"), Wv = /* @__PURE__ */ m$1(function(e, t, a) {
  return [
    e - 2 * t + a,
    2 * (t - e),
    e
  ];
}, "bezierPtsToQuadCoeff"), Gn = /* @__PURE__ */ m$1(function(e, t) {
  return {
    heightOffset: /* @__PURE__ */ Math.min(15, 0.05 * t),
    widthOffset: /* @__PURE__ */ Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
}, "getBarrelCurveConstants"), Uv = /* @__PURE__ */ rr({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: /* @__PURE__ */ m$1(function(e) {
    return 1;
  }, "weight")
}), Yv = {
  pageRank: /* @__PURE__ */ m$1(function(e) {
    for (var t = /* @__PURE__ */ Uv(e), a = t.dampingFactor, n = t.precision, i = t.iterations, s = t.weight, o = this._private.cy, l = /* @__PURE__ */ this.byGroup(), u = l.nodes, f = l.edges, c = u.length, d = c * c, g = f.length, h = new Array(d), m = new Array(c), y = (1 - a) / c, p = 0; p < c; p++) {
      for (var b1 = 0; b1 < c; b1++) {
        var w = p * c + b1;
        h[w] = 0;
      }
      m[p] = 0;
    }
    for (var x = 0; x < g; x++) {
      var T = f[x], C = /* @__PURE__ */ T.data("source"), E = /* @__PURE__ */ T.data("target");
      if (C !== E) {
        var k = /* @__PURE__ */ u.indexOfId(C), S = /* @__PURE__ */ u.indexOfId(E), L = /* @__PURE__ */ s(T), B = S * c + k;
        h[B] += L, m[k] += L;
      }
    }
    for (var M = 1 / c + y, A = 0; A < c; A++) if (m[A] === 0) for (var P = 0; P < c; P++) {
      var I = P * c + A;
      h[I] = M;
    }
    else for (var R = 0; R < c; R++) {
      var O = R * c + A;
      h[O] = h[O] / m[A] + y;
    }
    for (var z = new Array(c), $ = new Array(c), H, V = 0; V < c; V++) z[V] = 1;
    for (var F = 0; F < i; F++) {
      for (var U = 0; U < c; U++) $[U] = 0;
      for (var J = 0; J < c; J++) for (var j = 0; j < c; j++) {
        var ee = J * c + j;
        $[J] += h[ee] * z[j];
      }
      Bv($), H = z, z = $, $ = H;
      for (var re = 0, Y = 0; Y < c; Y++) {
        var N = H[Y] - z[Y];
        re += N * N;
      }
      if (re < n) break;
    }
    var X = {
      rank: /* @__PURE__ */ m$1(function(oe) {
        return oe = o.collection(oe)[0], z[u.indexOf(oe)];
      }, "rank")
    };
    return X;
  }, "pageRank")
}, Gi = /* @__PURE__ */ rr({
  root: null,
  weight: /* @__PURE__ */ m$1(function(e) {
    return 1;
  }, "weight"),
  directed: false,
  alpha: 0
}), Lt = {
  degreeCentralityNormalized: /* @__PURE__ */ m$1(function(e) {
    e = /* @__PURE__ */ Gi(e);
    var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ this.nodes(), n = a.length;
    if (e.directed) {
      for (var f = {}, c = {}, d = 0, g = 0, h = 0; h < n; h++) {
        var m = a[h], y = /* @__PURE__ */ m.id();
        e.root = m;
        var p = /* @__PURE__ */ this.degreeCentrality(e);
        d < p.indegree && (d = p.indegree), g < p.outdegree && (g = p.outdegree), f[y] = p.indegree, c[y] = p.outdegree;
      }
      return {
        indegree: /* @__PURE__ */ m$1(function(w) {
          return d == 0 ? 0 : (he(w) && (w = /* @__PURE__ */ t.filter(w)), f[w.id()] / d);
        }, "indegree"),
        outdegree: /* @__PURE__ */ m$1(function(w) {
          return g === 0 ? 0 : (he(w) && (w = /* @__PURE__ */ t.filter(w)), c[w.id()] / g);
        }, "outdegree")
      };
    } else {
      for (var i = {}, s = 0, o = 0; o < n; o++) {
        var l = a[o];
        e.root = l;
        var u = /* @__PURE__ */ this.degreeCentrality(e);
        s < u.degree && (s = u.degree), i[l.id()] = u.degree;
      }
      return {
        degree: /* @__PURE__ */ m$1(function(w) {
          return s === 0 ? 0 : (he(w) && (w = /* @__PURE__ */ t.filter(w)), i[w.id()] / s);
        }, "degree")
      };
    }
  }, "degreeCentralityNormalized"),
  degreeCentrality: /* @__PURE__ */ m$1(function(e) {
    e = /* @__PURE__ */ Gi(e);
    var t = /* @__PURE__ */ this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, l = n.alpha;
    if (i = t.collection(i)[0], o) {
      for (var g = /* @__PURE__ */ i.connectedEdges(), h = /* @__PURE__ */ g.filter(function(C) {
        return C.target().same(i) && a.has(C);
      }), m = /* @__PURE__ */ g.filter(function(C) {
        return C.source().same(i) && a.has(C);
      }), y = h.length, p = m.length, b1 = 0, w = 0, x = 0; x < h.length; x++) b1 += /* @__PURE__ */ s(h[x]);
      for (var T = 0; T < m.length; T++) w += /* @__PURE__ */ s(m[T]);
      return {
        indegree: Math.pow(y, 1 - l) * Math.pow(b1, l),
        outdegree: Math.pow(p, 1 - l) * Math.pow(w, l)
      };
    } else {
      for (var u = /* @__PURE__ */ i.connectedEdges().intersection(a), f = u.length, c = 0, d = 0; d < u.length; d++) c += /* @__PURE__ */ s(u[d]);
      return {
        degree: Math.pow(f, 1 - l) * Math.pow(c, l)
      };
    }
  }, "degreeCentrality")
};
Lt.dc = Lt.degreeCentrality;
Lt.dcn = Lt.degreeCentralityNormalised = Lt.degreeCentralityNormalized;
var Ki = /* @__PURE__ */ rr({
  harmonic: true,
  weight: /* @__PURE__ */ m$1(function() {
    return 1;
  }, "weight"),
  directed: false,
  root: null
}), At = {
  closenessCentralityNormalized: /* @__PURE__ */ m$1(function(e) {
    for (var t = /* @__PURE__ */ Ki(e), a = t.harmonic, n = t.weight, i = t.directed, s = /* @__PURE__ */ this.cy(), o = {}, l = 0, u = /* @__PURE__ */ this.nodes(), f = /* @__PURE__ */ this.floydWarshall({
      weight: n,
      directed: i
    }), c = 0; c < u.length; c++) {
      for (var d = 0, g = u[c], h = 0; h < u.length; h++) if (c !== h) {
        var m = /* @__PURE__ */ f.distance(g, u[h]);
        a ? d += 1 / m : d += m;
      }
      a || (d = 1 / d), l < d && (l = d), o[g.id()] = d;
    }
    return {
      closeness: /* @__PURE__ */ m$1(function(p) {
        return l == 0 ? 0 : (he(p) ? p = /* @__PURE__ */ s.filter(p)[0].id() : p = /* @__PURE__ */ p.id(), o[p] / l);
      }, "closeness")
    };
  }, "closenessCentralityNormalized"),
  closenessCentrality: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ Ki(e), a = t.root, n = t.weight, i = t.directed, s = t.harmonic;
    a = this.filter(a)[0];
    for (var o = /* @__PURE__ */ this.dijkstra({
      root: a,
      weight: n,
      directed: i
    }), l = 0, u = /* @__PURE__ */ this.nodes(), f = 0; f < u.length; f++) {
      var c = u[f];
      if (!c.same(a)) {
        var d = /* @__PURE__ */ o.distanceTo(c);
        s ? l += 1 / d : l += d;
      }
    }
    return s ? l : 1 / l;
  }, "closenessCentrality")
};
At.cc = At.closenessCentrality;
At.ccn = At.closenessCentralityNormalised = At.closenessCentralityNormalized;
var Xv = /* @__PURE__ */ rr({
  weight: null,
  directed: false
}), Kn = {
  betweennessCentrality: /* @__PURE__ */ m$1(function(e) {
    for (var t = /* @__PURE__ */ Xv(e), a = t.directed, n = t.weight, i = n != null, s = /* @__PURE__ */ this.cy(), o = /* @__PURE__ */ this.nodes(), l = {}, u = {}, f = 0, c = {
      set: /* @__PURE__ */ m$1(function(w, x) {
        u[w] = x, x > f && (f = x);
      }, "set"),
      get: /* @__PURE__ */ m$1(function(w) {
        return u[w];
      }, "get")
    }, d = 0; d < o.length; d++) {
      var g = o[d], h = /* @__PURE__ */ g.id();
      a ? l[h] = /* @__PURE__ */ g.outgoers().nodes() : l[h] = /* @__PURE__ */ g.openNeighborhood().nodes(), c.set(h, 0);
    }
    for (var m = /* @__PURE__ */ m$1(function(w) {
      for (var x = /* @__PURE__ */ o[w].id(), T = [], C = {}, E = {}, k = {}, S = new Ca(function(j, ee) {
        return k[j] - k[ee];
      }), L = 0; L < o.length; L++) {
        var B = /* @__PURE__ */ o[L].id();
        C[B] = [], E[B] = 0, k[B] = 1 / 0;
      }
      for (E[x] = 1, k[x] = 0, S.push(x); !S.empty(); ) {
        var M = /* @__PURE__ */ S.pop();
        if (T.push(M), i) for (var A = 0; A < l[M].length; A++) {
          var P = l[M][A], I = /* @__PURE__ */ s.getElementById(M), R = void 0;
          I.edgesTo(P).length > 0 ? R = I.edgesTo(P)[0] : R = P.edgesTo(I)[0];
          var O = /* @__PURE__ */ n(R);
          P = /* @__PURE__ */ P.id(), k[P] > k[M] + O && (k[P] = k[M] + O, S.nodes.indexOf(P) < 0 ? S.push(P) : S.updateItem(P), E[P] = 0, C[P] = []), k[P] == k[M] + O && (E[P] = E[P] + E[M], C[P].push(M));
        }
        else for (var z = 0; z < l[M].length; z++) {
          var $ = /* @__PURE__ */ l[M][z].id();
          k[$] == 1 / 0 && (S.push($), k[$] = k[M] + 1), k[$] == k[M] + 1 && (E[$] = E[$] + E[M], C[$].push(M));
        }
      }
      for (var H = {}, V = 0; V < o.length; V++) H[o[V].id()] = 0;
      for (; T.length > 0; ) {
        for (var F = /* @__PURE__ */ T.pop(), U = 0; U < C[F].length; U++) {
          var J = C[F][U];
          H[J] = H[J] + E[J] / E[F] * (1 + H[F]);
        }
        F != o[w].id() && c.set(F, c.get(F) + H[F]);
      }
    }, "_loop"), y = 0; y < o.length; y++) m(y);
    var p = {
      betweenness: /* @__PURE__ */ m$1(function(w) {
        var x = /* @__PURE__ */ s.collection(w).id();
        return c.get(x);
      }, "betweenness"),
      betweennessNormalized: /* @__PURE__ */ m$1(function(w) {
        if (f == 0) return 0;
        var x = /* @__PURE__ */ s.collection(w).id();
        return c.get(x) / f;
      }, "betweennessNormalized")
    };
    return p.betweennessNormalised = p.betweennessNormalized, p;
  }, "betweennessCentrality")
};
Kn.bc = Kn.betweennessCentrality;
var Zv = /* @__PURE__ */ rr({
  expandFactor: 2,
  inflateFactor: 2,
  multFactor: 1,
  maxIterations: 20,
  attributes: [
    function(r10) {
      return 1;
    }
  ]
}), Qv = /* @__PURE__ */ m$1(function(e) {
  return Zv(e);
}, "setOptions"), Jv = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = 0, n = 0; n < t.length; n++) a += /* @__PURE__ */ t[n](e);
  return a;
}, "getSimilarity"), _v = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = 0; n < t; n++) e[n * t + n] = a;
}, "addLoops"), wo = /* @__PURE__ */ m$1(function(e, t) {
  for (var a, n = 0; n < t; n++) {
    a = 0;
    for (var i = 0; i < t; i++) a += e[i * t + n];
    for (var s = 0; s < t; s++) e[s * t + n] = e[s * t + n] / a;
  }
}, "normalize"), jv = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = new Array(a * a), i = 0; i < a; i++) {
    for (var s = 0; s < a; s++) n[i * a + s] = 0;
    for (var o = 0; o < a; o++) for (var l = 0; l < a; l++) n[i * a + l] += e[i * a + o] * t[o * a + l];
  }
  return n;
}, "mmult"), ef = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = /* @__PURE__ */ e.slice(0), i = 1; i < a; i++) e = /* @__PURE__ */ jv(e, n, t);
  return e;
}, "expand"), rf = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = new Array(t * t), i = 0; i < t * t; i++) n[i] = /* @__PURE__ */ Math.pow(e[i], a);
  return wo(n, t), n;
}, "inflate"), tf = /* @__PURE__ */ m$1(function(e, t, a, n) {
  for (var i = 0; i < a; i++) {
    var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(t[i] * Math.pow(10, n)) / Math.pow(10, n);
    if (s !== o) return false;
  }
  return true;
}, "hasConverged"), af = /* @__PURE__ */ m$1(function(e, t, a, n) {
  for (var i = [], s = 0; s < t; s++) {
    for (var o = [], l = 0; l < t; l++) Math.round(e[s * t + l] * 1e3) / 1e3 > 0 && o.push(a[l]);
    o.length !== 0 && i.push(/* @__PURE__ */ n.collection(o));
  }
  return i;
}, "assign"), nf = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = 0; a < e.length; a++) if (!t[a] || e[a].id() !== t[a].id()) return false;
  return true;
}, "isDuplicate"), sf = /* @__PURE__ */ m$1(function(e) {
  for (var t = 0; t < e.length; t++) for (var a = 0; a < e.length; a++) t != a && nf(e[t], e[a]) && e.splice(a, 1);
  return e;
}, "removeDuplicates"), Wi = /* @__PURE__ */ m$1(function(e) {
  for (var t = /* @__PURE__ */ this.nodes(), a = /* @__PURE__ */ this.edges(), n = /* @__PURE__ */ this.cy(), i = /* @__PURE__ */ Qv(e), s = {}, o = 0; o < t.length; o++) s[t[o].id()] = o;
  for (var l = t.length, u = l * l, f = new Array(u), c, d = 0; d < u; d++) f[d] = 0;
  for (var g = 0; g < a.length; g++) {
    var h = a[g], m = s[h.source().id()], y = s[h.target().id()], p = /* @__PURE__ */ Jv(h, i.attributes);
    f[m * l + y] += p, f[y * l + m] += p;
  }
  _v(f, l, i.multFactor), wo(f, l);
  for (var b1 = true, w = 0; b1 && w < i.maxIterations; ) b1 = false, c = /* @__PURE__ */ ef(f, l, i.expandFactor), f = /* @__PURE__ */ rf(c, l, i.inflateFactor), tf(f, c, u, 4) || (b1 = true), w++;
  var x = /* @__PURE__ */ af(f, l, t, n);
  return x = /* @__PURE__ */ sf(x), x;
}, "markovClustering"), of = {
  markovClustering: Wi,
  mcl: Wi
}, uf = /* @__PURE__ */ m$1(function(e) {
  return e;
}, "identity"), xo = /* @__PURE__ */ m$1(function(e, t) {
  return Math.abs(t - e);
}, "absDiff"), Ui = /* @__PURE__ */ m$1(function(e, t, a) {
  return e + xo(t, a);
}, "addAbsDiff"), Yi = /* @__PURE__ */ m$1(function(e, t, a) {
  return e + Math.pow(a - t, 2);
}, "addSquaredDiff"), lf = /* @__PURE__ */ m$1(function(e) {
  return Math.sqrt(e);
}, "sqrt"), vf = /* @__PURE__ */ m$1(function(e, t, a) {
  return Math.max(e, /* @__PURE__ */ xo(t, a));
}, "maxAbsDiff"), _t = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
  for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : uf, o = n, l, u, f = 0; f < e; f++) l = /* @__PURE__ */ t(f), u = /* @__PURE__ */ a(f), o = /* @__PURE__ */ i(o, l, u);
  return s(o);
}, "getDistance"), zt = {
  euclidean: /* @__PURE__ */ m$1(function(e, t, a) {
    return e >= 2 ? _t(e, t, a, 0, Yi, lf) : _t(e, t, a, 0, Ui);
  }, "euclidean"),
  squaredEuclidean: /* @__PURE__ */ m$1(function(e, t, a) {
    return _t(e, t, a, 0, Yi);
  }, "squaredEuclidean"),
  manhattan: /* @__PURE__ */ m$1(function(e, t, a) {
    return _t(e, t, a, 0, Ui);
  }, "manhattan"),
  max: /* @__PURE__ */ m$1(function(e, t, a) {
    return _t(e, t, a, -1 / 0, vf);
  }, "max")
};
zt["squared-euclidean"] = zt.squaredEuclidean;
zt.squaredeuclidean = zt.squaredEuclidean;
function hn(r10, e, t, a, n, i) {
  var s;
  return Ve(r10) ? s = r10 : s = zt[r10] || zt.euclidean, e === 0 && Ve(r10) ? s(n, i) : s(e, t, a, n, i);
}
m$1(hn, "clusteringDistance");
var ff = /* @__PURE__ */ rr({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: false,
  testCentroids: null
}), hi = /* @__PURE__ */ m$1(function(e) {
  return ff(e);
}, "setOptions"), tn = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
  var s = i !== "kMedoids", o = s ? function(c) {
    return a[c];
  } : function(c) {
    return n[c](a);
  }, l = /* @__PURE__ */ m$1(function(d) {
    return n[d](t);
  }, "getQ"), u = a, f = t;
  return hn(e, n.length, o, l, u, f);
}, "getDist"), Rn = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(t), l = null, u = 0; u < n; u++) i[u] = e.min(a[u]).value, s[u] = e.max(a[u]).value;
  for (var f = 0; f < t; f++) {
    l = [];
    for (var c = 0; c < n; c++) l[c] = Math.random() * (s[c] - i[c]) + i[c];
    o[f] = l;
  }
  return o;
}, "randomCentroids"), Eo = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
  for (var s = 1 / 0, o = 0, l = 0; l < t.length; l++) {
    var u = /* @__PURE__ */ tn(a, e, t[l], n, i);
    u < s && (s = u, o = l);
  }
  return o;
}, "classify"), Co = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = [], i = null, s = 0; s < t.length; s++) i = t[s], a[i.id()] === e && n.push(i);
  return n;
}, "buildCluster"), cf = /* @__PURE__ */ m$1(function(e, t, a) {
  return Math.abs(t - e) <= a;
}, "haveValuesConverged"), df = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = 0; n < e.length; n++) for (var i = 0; i < e[n].length; i++) {
    var s = /* @__PURE__ */ Math.abs(e[n][i] - t[n][i]);
    if (s > a) return false;
  }
  return true;
}, "haveMatricesConverged"), hf = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = 0; n < a; n++) if (e === t[n]) return true;
  return false;
}, "seenBefore"), Xi = /* @__PURE__ */ m$1(function(e, t) {
  var a = new Array(t);
  if (e.length < 50) for (var n = 0; n < t; n++) {
    for (var i = e[Math.floor(Math.random() * e.length)]; hf(i, a, n); ) i = e[Math.floor(Math.random() * e.length)];
    a[n] = i;
  }
  else for (var s = 0; s < t; s++) a[s] = e[Math.floor(Math.random() * e.length)];
  return a;
}, "randomMedoids"), Zi = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = 0, i = 0; i < t.length; i++) n += /* @__PURE__ */ tn("manhattan", t[i], e, a, "kMedoids");
  return n;
}, "findCost"), gf = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ this.nodes(), n = null, i = /* @__PURE__ */ hi(e), s = new Array(i.k), o = {}, l;
  i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, l = /* @__PURE__ */ Rn(a, i.k, i.attributes)) : Ue(i.testCentroids) === "object" ? l = i.testCentroids : l = /* @__PURE__ */ Rn(a, i.k, i.attributes) : l = /* @__PURE__ */ Rn(a, i.k, i.attributes);
  for (var u = true, f = 0; u && f < i.maxIterations; ) {
    for (var c = 0; c < a.length; c++) n = a[c], o[n.id()] = /* @__PURE__ */ Eo(n, l, i.distance, i.attributes, "kMeans");
    u = false;
    for (var d = 0; d < i.k; d++) {
      var g = /* @__PURE__ */ Co(d, a, o);
      if (g.length !== 0) {
        for (var h = i.attributes.length, m = l[d], y = new Array(h), p = new Array(h), b1 = 0; b1 < h; b1++) {
          p[b1] = 0;
          for (var w = 0; w < g.length; w++) n = g[w], p[b1] += /* @__PURE__ */ i.attributes[b1](n);
          y[b1] = p[b1] / g.length, cf(y[b1], m[b1], i.sensitivityThreshold) || (u = true);
        }
        l[d] = y, s[d] = /* @__PURE__ */ t.collection(g);
      }
    }
    f++;
  }
  return s;
}, "kMeans"), pf = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ this.nodes(), n = null, i = /* @__PURE__ */ hi(e), s = new Array(i.k), o, l = {}, u, f = new Array(i.k);
  i.testMode ? typeof i.testCentroids == "number" || (Ue(i.testCentroids) === "object" ? o = i.testCentroids : o = /* @__PURE__ */ Xi(a, i.k)) : o = /* @__PURE__ */ Xi(a, i.k);
  for (var c = true, d = 0; c && d < i.maxIterations; ) {
    for (var g = 0; g < a.length; g++) n = a[g], l[n.id()] = /* @__PURE__ */ Eo(n, o, i.distance, i.attributes, "kMedoids");
    c = false;
    for (var h = 0; h < o.length; h++) {
      var m = /* @__PURE__ */ Co(h, a, l);
      if (m.length !== 0) {
        f[h] = /* @__PURE__ */ Zi(o[h], m, i.attributes);
        for (var y = 0; y < m.length; y++) u = /* @__PURE__ */ Zi(m[y], m, i.attributes), u < f[h] && (f[h] = u, o[h] = m[y], c = true);
        s[h] = /* @__PURE__ */ t.collection(m);
      }
    }
    d++;
  }
  return s;
}, "kMedoids"), yf = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
  for (var s, o, l = 0; l < t.length; l++) for (var u = 0; u < e.length; u++) n[l][u] = /* @__PURE__ */ Math.pow(a[l][u], i.m);
  for (var f = 0; f < e.length; f++) for (var c = 0; c < i.attributes.length; c++) {
    s = 0, o = 0;
    for (var d = 0; d < t.length; d++) s += n[d][f] * i.attributes[c](t[d]), o += n[d][f];
    e[f][c] = s / o;
  }
}, "updateCentroids"), mf = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
  for (var s = 0; s < e.length; s++) t[s] = /* @__PURE__ */ e[s].slice();
  for (var o, l, u, f = 2 / (i.m - 1), c = 0; c < a.length; c++) for (var d = 0; d < n.length; d++) {
    o = 0;
    for (var g = 0; g < a.length; g++) l = /* @__PURE__ */ tn(i.distance, n[d], a[c], i.attributes, "cmeans"), u = /* @__PURE__ */ tn(i.distance, n[d], a[g], i.attributes, "cmeans"), o += /* @__PURE__ */ Math.pow(l / u, f);
    e[d][c] = 1 / o;
  }
}, "updateMembership"), bf = /* @__PURE__ */ m$1(function(e, t, a, n) {
  for (var i = new Array(a.k), s = 0; s < i.length; s++) i[s] = [];
  for (var o, l, u = 0; u < t.length; u++) {
    o = -1 / 0, l = -1;
    for (var f = 0; f < t[0].length; f++) t[u][f] > o && (o = t[u][f], l = f);
    i[l].push(e[u]);
  }
  for (var c = 0; c < i.length; c++) i[c] = /* @__PURE__ */ n.collection(i[c]);
  return i;
}, "assign"), Qi = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ this.nodes(), n = /* @__PURE__ */ hi(e), i, s, o, l, u;
  l = new Array(a.length);
  for (var f = 0; f < a.length; f++) l[f] = new Array(n.k);
  o = new Array(a.length);
  for (var c = 0; c < a.length; c++) o[c] = new Array(n.k);
  for (var d = 0; d < a.length; d++) {
    for (var g = 0, h = 0; h < n.k; h++) o[d][h] = /* @__PURE__ */ Math.random(), g += o[d][h];
    for (var m = 0; m < n.k; m++) o[d][m] = o[d][m] / g;
  }
  s = new Array(n.k);
  for (var y = 0; y < n.k; y++) s[y] = new Array(n.attributes.length);
  u = new Array(a.length);
  for (var p = 0; p < a.length; p++) u[p] = new Array(n.k);
  for (var b1 = true, w = 0; b1 && w < n.maxIterations; ) b1 = false, yf(s, a, o, u, n), mf(o, l, s, a, n), df(o, l, n.sensitivityThreshold) || (b1 = true), w++;
  return i = /* @__PURE__ */ bf(a, o, n, t), {
    clusters: i,
    degreeOfMembership: o
  };
}, "fuzzyCMeans"), wf = {
  kMeans: gf,
  kMedoids: pf,
  fuzzyCMeans: Qi,
  fcm: Qi
}, xf = /* @__PURE__ */ rr({
  distance: "euclidean",
  linkage: "min",
  mode: "threshold",
  threshold: 1 / 0,
  addDendrogram: false,
  dendrogramDepth: 0,
  attributes: []
}), Ef = {
  single: "min",
  complete: "max"
}, Cf = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ xf(e), a = Ef[t.linkage];
  return a != null && (t.linkage = a), t;
}, "setOptions"), Ji = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
  for (var s = 0, o = 1 / 0, l, u = i.attributes, f = /* @__PURE__ */ m$1(function(S, L) {
    return hn(i.distance, u.length, function(B) {
      return u[B](S);
    }, function(B) {
      return u[B](L);
    }, S, L);
  }, "getDist"), c = 0; c < e.length; c++) {
    var d = e[c].key, g = a[d][n[d]];
    g < o && (s = d, o = g);
  }
  if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1) return false;
  var h = t[s], m = t[n[s]], y;
  i.mode === "dendrogram" ? y = {
    left: h,
    right: m,
    key: h.key
  } : y = {
    value: /* @__PURE__ */ h.value.concat(m.value),
    key: h.key
  }, e[h.index] = y, e.splice(m.index, 1), t[h.key] = y;
  for (var p = 0; p < e.length; p++) {
    var b1 = e[p];
    h.key === b1.key ? l = 1 / 0 : i.linkage === "min" ? (l = a[h.key][b1.key], a[h.key][b1.key] > a[m.key][b1.key] && (l = a[m.key][b1.key])) : i.linkage === "max" ? (l = a[h.key][b1.key], a[h.key][b1.key] < a[m.key][b1.key] && (l = a[m.key][b1.key])) : i.linkage === "mean" ? l = (a[h.key][b1.key] * h.size + a[m.key][b1.key] * m.size) / (h.size + m.size) : i.mode === "dendrogram" ? l = /* @__PURE__ */ f(b1.value, h.value) : l = /* @__PURE__ */ f(b1.value[0], h.value[0]), a[h.key][b1.key] = a[b1.key][h.key] = l;
  }
  for (var w = 0; w < e.length; w++) {
    var x = e[w].key;
    if (n[x] === h.key || n[x] === m.key) {
      for (var T = x, C = 0; C < e.length; C++) {
        var E = e[C].key;
        a[x][E] < a[x][T] && (T = E);
      }
      n[x] = T;
    }
    e[w].index = w;
  }
  return h.key = m.key = h.index = m.index = null, true;
}, "mergeClosest"), Ra = /* @__PURE__ */ m$1(function r(e, t, a) {
  e && (e.value ? t.push(e.value) : (e.left && r(e.left, t), e.right && r(e.right, t)));
}, "getAllChildren"), Sf = /* @__PURE__ */ m$1(function r2(e, t) {
  if (!e) return "";
  if (e.left && e.right) {
    var a = /* @__PURE__ */ r2(e.left, t), n = /* @__PURE__ */ r2(e.right, t), i = /* @__PURE__ */ t.add({
      group: "nodes",
      data: {
        id: a + "," + n
      }
    });
    return t.add({
      group: "edges",
      data: {
        source: a,
        target: /* @__PURE__ */ i.id()
      }
    }), t.add({
      group: "edges",
      data: {
        source: n,
        target: /* @__PURE__ */ i.id()
      }
    }), i.id();
  } else if (e.value) return e.value.id();
}, "buildDendrogram"), Tf = /* @__PURE__ */ m$1(function r3(e, t, a) {
  if (!e) return [];
  var n = [], i = [], s = [];
  return t === 0 ? (e.left && Ra(e.left, n), e.right && Ra(e.right, i), s = /* @__PURE__ */ n.concat(i), [
    /* @__PURE__ */ a.collection(s)
  ]) : t === 1 ? e.value ? [
    /* @__PURE__ */ a.collection(e.value)
  ] : (e.left && Ra(e.left, n), e.right && Ra(e.right, i), [
    /* @__PURE__ */ a.collection(n),
    /* @__PURE__ */ a.collection(i)
  ]) : e.value ? [
    /* @__PURE__ */ a.collection(e.value)
  ] : (e.left && (n = /* @__PURE__ */ r3(e.left, t - 1, a)), e.right && (i = /* @__PURE__ */ r3(e.right, t - 1, a)), n.concat(i));
}, "buildClustersFromTree"), _i = /* @__PURE__ */ m$1(function(e) {
  for (var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ this.nodes(), n = /* @__PURE__ */ Cf(e), i = n.attributes, s = /* @__PURE__ */ m$1(function(w, x) {
    return hn(n.distance, i.length, function(T) {
      return i[T](w);
    }, function(T) {
      return i[T](x);
    }, w, x);
  }, "getDist"), o = [], l = [], u = [], f = [], c = 0; c < a.length; c++) {
    var d = {
      value: n.mode === "dendrogram" ? a[c] : [
        a[c]
      ],
      key: c,
      index: c
    };
    o[c] = d, f[c] = d, l[c] = [], u[c] = 0;
  }
  for (var g = 0; g < o.length; g++) for (var h = 0; h <= g; h++) {
    var m = void 0;
    n.mode === "dendrogram" ? m = g === h ? 1 / 0 : s(o[g].value, o[h].value) : m = g === h ? 1 / 0 : s(o[g].value[0], o[h].value[0]), l[g][h] = m, l[h][g] = m, m < l[g][u[g]] && (u[g] = h);
  }
  for (var y = /* @__PURE__ */ Ji(o, f, l, u, n); y; ) y = /* @__PURE__ */ Ji(o, f, l, u, n);
  var p;
  return n.mode === "dendrogram" ? (p = /* @__PURE__ */ Tf(o[0], n.dendrogramDepth, t), n.addDendrogram && Sf(o[0], t)) : (p = new Array(o.length), o.forEach(function(b1, w) {
    b1.key = b1.index = null, p[w] = /* @__PURE__ */ t.collection(b1.value);
  })), p;
}, "hierarchicalClustering"), Df = {
  hierarchicalClustering: _i,
  hca: _i
}, kf = /* @__PURE__ */ rr({
  distance: "euclidean",
  preference: "median",
  damping: 0.8,
  maxIterations: 1e3,
  minIterations: 100,
  attributes: []
}), Pf = /* @__PURE__ */ m$1(function(e) {
  var t = e.damping, a = e.preference;
  0.5 <= t && t < 1 || qe(/* @__PURE__ */ "Damping must range on [0.5, 1).  Got: ".concat(t));
  var n = [
    "median",
    "mean",
    "min",
    "max"
  ];
  return n.some(function(i) {
    return i === a;
  }) || ie(a) || qe(/* @__PURE__ */ "Preference must be one of [".concat(/* @__PURE__ */ n.map(function(i) {
    return "'".concat(i, "'");
  }).join(", "), "] or a number.  Got: ").concat(a)), kf(e);
}, "setOptions"), Bf = /* @__PURE__ */ m$1(function(e, t, a, n) {
  var i = /* @__PURE__ */ m$1(function(o, l) {
    return n[l](o);
  }, "attr");
  return -hn(e, n.length, function(s) {
    return i(t, s);
  }, function(s) {
    return i(a, s);
  }, t, a);
}, "getSimilarity"), Mf = /* @__PURE__ */ m$1(function(e, t) {
  var a = null;
  return t === "median" ? a = /* @__PURE__ */ kv(e) : t === "mean" ? a = /* @__PURE__ */ Dv(e) : t === "min" ? a = /* @__PURE__ */ Sv(e) : t === "max" ? a = /* @__PURE__ */ Tv(e) : a = t, a;
}, "getPreference"), Lf = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = [], i = 0; i < e; i++) t[i * e + i] + a[i * e + i] > 0 && n.push(i);
  return n;
}, "findExemplars"), ji = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = [], i = 0; i < e; i++) {
    for (var s = -1, o = -1 / 0, l = 0; l < a.length; l++) {
      var u = a[l];
      t[i * e + u] > o && (s = u, o = t[i * e + u]);
    }
    s > 0 && n.push(s);
  }
  for (var f = 0; f < a.length; f++) n[a[f]] = a[f];
  return n;
}, "assignClusters"), Af = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = /* @__PURE__ */ ji(e, t, a), i = 0; i < a.length; i++) {
    for (var s = [], o = 0; o < n.length; o++) n[o] === a[i] && s.push(o);
    for (var l = -1, u = -1 / 0, f = 0; f < s.length; f++) {
      for (var c = 0, d = 0; d < s.length; d++) c += t[s[d] * e + s[f]];
      c > u && (l = f, u = c);
    }
    a[i] = s[l];
  }
  return n = /* @__PURE__ */ ji(e, t, a), n;
}, "assign"), es = /* @__PURE__ */ m$1(function(e) {
  for (var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ this.nodes(), n = /* @__PURE__ */ Pf(e), i = {}, s = 0; s < a.length; s++) i[a[s].id()] = s;
  var o, l, u, f, c, d;
  o = a.length, l = o * o, u = new Array(l);
  for (var g = 0; g < l; g++) u[g] = -1 / 0;
  for (var h = 0; h < o; h++) for (var m = 0; m < o; m++) h !== m && (u[h * o + m] = /* @__PURE__ */ Bf(n.distance, a[h], a[m], n.attributes));
  f = /* @__PURE__ */ Mf(u, n.preference);
  for (var y = 0; y < o; y++) u[y * o + y] = f;
  c = new Array(l);
  for (var p = 0; p < l; p++) c[p] = 0;
  d = new Array(l);
  for (var b1 = 0; b1 < l; b1++) d[b1] = 0;
  for (var w = new Array(o), x = new Array(o), T = new Array(o), C = 0; C < o; C++) w[C] = 0, x[C] = 0, T[C] = 0;
  for (var E = new Array(o * n.minIterations), k = 0; k < E.length; k++) E[k] = 0;
  var S;
  for (S = 0; S < n.maxIterations; S++) {
    for (var L = 0; L < o; L++) {
      for (var B = -1 / 0, M = -1 / 0, A = -1, P = 0, I = 0; I < o; I++) w[I] = c[L * o + I], P = d[L * o + I] + u[L * o + I], P >= B ? (M = B, B = P, A = I) : P > M && (M = P);
      for (var R = 0; R < o; R++) c[L * o + R] = (1 - n.damping) * (u[L * o + R] - B) + n.damping * w[R];
      c[L * o + A] = (1 - n.damping) * (u[L * o + A] - M) + n.damping * w[A];
    }
    for (var O = 0; O < o; O++) {
      for (var z = 0, $ = 0; $ < o; $++) w[$] = d[$ * o + O], x[$] = /* @__PURE__ */ Math.max(0, c[$ * o + O]), z += x[$];
      z -= x[O], x[O] = c[O * o + O], z += x[O];
      for (var H = 0; H < o; H++) d[H * o + O] = (1 - n.damping) * Math.min(0, z - x[H]) + n.damping * w[H];
      d[O * o + O] = (1 - n.damping) * (z - x[O]) + n.damping * w[O];
    }
    for (var V = 0, F = 0; F < o; F++) {
      var U = d[F * o + F] + c[F * o + F] > 0 ? 1 : 0;
      E[S % n.minIterations * o + F] = U, V += U;
    }
    if (V > 0 && (S >= n.minIterations - 1 || S == n.maxIterations - 1)) {
      for (var J = 0, j = 0; j < o; j++) {
        T[j] = 0;
        for (var ee = 0; ee < n.minIterations; ee++) T[j] += E[ee * o + j];
        (T[j] === 0 || T[j] === n.minIterations) && J++;
      }
      if (J === o) break;
    }
  }
  for (var re = /* @__PURE__ */ Lf(o, c, d), Y = /* @__PURE__ */ Af(o, u, re), N = {}, X = 0; X < re.length; X++) N[re[X]] = [];
  for (var Z = 0; Z < a.length; Z++) {
    var oe = i[a[Z].id()], ge = Y[oe];
    ge != null && N[ge].push(a[Z]);
  }
  for (var ne = new Array(re.length), se = 0; se < re.length; se++) ne[se] = /* @__PURE__ */ t.collection(N[re[se]]);
  return ne;
}, "affinityPropagation"), Rf = {
  affinityPropagation: es,
  ap: es
}, Of = /* @__PURE__ */ rr({
  root: void 0,
  directed: false
}), If = {
  hierholzer: /* @__PURE__ */ m$1(function(e) {
    if (!Te(e)) {
      var t = arguments;
      e = {
        root: t[0],
        directed: t[1]
      };
    }
    var a = /* @__PURE__ */ Of(e), n = a.root, i = a.directed, s = this, o = false, l, u, f;
    n && (f = he(n) ? this.filter(n)[0].id() : n[0].id());
    var c = {}, d = {};
    i ? s.forEach(function(b1) {
      var w = /* @__PURE__ */ b1.id();
      if (b1.isNode()) {
        var x = /* @__PURE__ */ b1.indegree(true), T = /* @__PURE__ */ b1.outdegree(true), C = x - T, E = T - x;
        C == 1 ? l ? o = true : l = w : E == 1 ? u ? o = true : u = w : (E > 1 || C > 1) && (o = true), c[w] = [], b1.outgoers().forEach(function(k) {
          k.isEdge() && c[w].push(/* @__PURE__ */ k.id());
        });
      } else d[w] = [
        void 0,
        /* @__PURE__ */ b1.target().id()
      ];
    }) : s.forEach(function(b1) {
      var w = /* @__PURE__ */ b1.id();
      if (b1.isNode()) {
        var x = /* @__PURE__ */ b1.degree(true);
        x % 2 && (l ? u ? o = true : u = w : l = w), c[w] = [], b1.connectedEdges().forEach(function(T) {
          return c[w].push(/* @__PURE__ */ T.id());
        });
      } else d[w] = [
        /* @__PURE__ */ b1.source().id(),
        /* @__PURE__ */ b1.target().id()
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
    else f || (f = /* @__PURE__ */ s[0].id());
    var h = /* @__PURE__ */ m$1(function(w) {
      for (var x = w, T = [
        w
      ], C, E, k; c[x].length; ) C = /* @__PURE__ */ c[x].shift(), E = d[C][0], k = d[C][1], x != k ? (c[k] = /* @__PURE__ */ c[k].filter(function(S) {
        return S != C;
      }), x = k) : !i && x != E && (c[E] = /* @__PURE__ */ c[E].filter(function(S) {
        return S != C;
      }), x = E), T.unshift(C), T.unshift(x);
      return T;
    }, "walk"), m = [], y = [];
    for (y = /* @__PURE__ */ h(f); y.length != 1; ) c[y[0]].length == 0 ? (m.unshift(/* @__PURE__ */ s.getElementById(/* @__PURE__ */ y.shift())), m.unshift(/* @__PURE__ */ s.getElementById(/* @__PURE__ */ y.shift()))) : y = /* @__PURE__ */ h(/* @__PURE__ */ y.shift()).concat(y);
    m.unshift(/* @__PURE__ */ s.getElementById(/* @__PURE__ */ y.shift()));
    for (var p in c) if (c[p].length) return g;
    return g.found = true, g.trail = /* @__PURE__ */ this.spawn(m, true), g;
  }, "hierholzer")
}, Oa = /* @__PURE__ */ m$1(function() {
  var e = this, t = {}, a = 0, n = 0, i = [], s = [], o = {}, l = /* @__PURE__ */ m$1(function(d, g) {
    for (var h = s.length - 1, m = [], y = /* @__PURE__ */ e.spawn(); s[h].x != d || s[h].y != g; ) m.push(s.pop().edge), h--;
    m.push(s.pop().edge), m.forEach(function(p) {
      var b1 = /* @__PURE__ */ p.connectedNodes().intersection(e);
      y.merge(p), b1.forEach(function(w) {
        var x = /* @__PURE__ */ w.id(), T = /* @__PURE__ */ w.connectedEdges().intersection(e);
        y.merge(w), t[x].cutVertex ? y.merge(/* @__PURE__ */ T.filter(function(C) {
          return C.isLoop();
        })) : y.merge(T);
      });
    }), i.push(y);
  }, "buildComponent"), u = /* @__PURE__ */ m$1(function c(d, g, h) {
    d === h && (n += 1), t[g] = {
      id: a,
      low: a++,
      cutVertex: false
    };
    var m = /* @__PURE__ */ e.getElementById(g).connectedEdges().intersection(e);
    if (m.size() === 0) i.push(/* @__PURE__ */ e.spawn(/* @__PURE__ */ e.getElementById(g)));
    else {
      var y, p, b1, w;
      m.forEach(function(x) {
        y = /* @__PURE__ */ x.source().id(), p = /* @__PURE__ */ x.target().id(), b1 = y === g ? p : y, b1 !== h && (w = /* @__PURE__ */ x.id(), o[w] || (o[w] = true, s.push({
          x: g,
          y: b1,
          edge: x
        })), b1 in t ? t[g].low = /* @__PURE__ */ Math.min(t[g].low, t[b1].id) : (c(d, b1, g), t[g].low = /* @__PURE__ */ Math.min(t[g].low, t[b1].low), t[g].id <= t[b1].low && (t[g].cutVertex = true, l(g, b1))));
      });
    }
  }, "biconnectedSearch");
  e.forEach(function(c) {
    if (c.isNode()) {
      var d = /* @__PURE__ */ c.id();
      d in t || (n = 0, u(d, d), t[d].cutVertex = n > 1);
    }
  });
  var f = /* @__PURE__ */ Object.keys(t).filter(function(c) {
    return t[c].cutVertex;
  }).map(function(c) {
    return e.getElementById(c);
  });
  return {
    cut: /* @__PURE__ */ e.spawn(f),
    components: i
  };
}, "hopcroftTarjanBiconnected"), zf = {
  hopcroftTarjanBiconnected: Oa,
  htbc: Oa,
  htb: Oa,
  hopcroftTarjanBiconnectedComponents: Oa
}, Ia = /* @__PURE__ */ m$1(function() {
  var e = this, t = {}, a = 0, n = [], i = [], s = /* @__PURE__ */ e.spawn(e), o = /* @__PURE__ */ m$1(function l(u) {
    i.push(u), t[u] = {
      index: a,
      low: a++,
      explored: false
    };
    var f = /* @__PURE__ */ e.getElementById(u).connectedEdges().intersection(e);
    if (f.forEach(function(m) {
      var y = /* @__PURE__ */ m.target().id();
      y !== u && (y in t || l(y), t[y].explored || (t[u].low = /* @__PURE__ */ Math.min(t[u].low, t[y].low)));
    }), t[u].index === t[u].low) {
      for (var c = /* @__PURE__ */ e.spawn(); ; ) {
        var d = /* @__PURE__ */ i.pop();
        if (c.merge(/* @__PURE__ */ e.getElementById(d)), t[d].low = t[u].index, t[d].explored = true, d === u) break;
      }
      var g = /* @__PURE__ */ c.edgesWith(c), h = /* @__PURE__ */ c.merge(g);
      n.push(h), s = /* @__PURE__ */ s.difference(h);
    }
  }, "stronglyConnectedSearch");
  return e.forEach(function(l) {
    if (l.isNode()) {
      var u = /* @__PURE__ */ l.id();
      u in t || o(u);
    }
  }), {
    cut: s,
    components: n
  };
}, "tarjanStronglyConnected"), Nf = {
  tarjanStronglyConnected: Ia,
  tsc: Ia,
  tscc: Ia,
  tarjanStronglyConnectedComponents: Ia
}, So = {};
[
  ca,
  cv,
  dv,
  gv,
  yv,
  bv,
  Ev,
  Yv,
  Lt,
  At,
  Kn,
  of,
  wf,
  Df,
  Rf,
  If,
  zf,
  Nf
].forEach(function(r10) {
  we(So, r10);
});
var To = 0, Do = 1, ko = 2, Gr = /* @__PURE__ */ m$1(function r4(e) {
  if (!(this instanceof r4)) return new r4(e);
  this.id = "Thenable/1.0.7", this.state = To, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: /* @__PURE__ */ this.then.bind(this)
  }, typeof e == "function" && e.call(this, /* @__PURE__ */ this.fulfill.bind(this), /* @__PURE__ */ this.reject.bind(this));
}, "api");
Gr.prototype = {
  fulfill: /* @__PURE__ */ m$1(function(e) {
    return rs(this, Do, "fulfillValue", e);
  }, "fulfill"),
  reject: /* @__PURE__ */ m$1(function(e) {
    return rs(this, ko, "rejectReason", e);
  }, "reject"),
  then: /* @__PURE__ */ m$1(function(e, t) {
    var a = this, n = new Gr();
    return a.onFulfilled.push(/* @__PURE__ */ as(e, n, "fulfill")), a.onRejected.push(/* @__PURE__ */ as(t, n, "reject")), Po(a), n.proxy;
  }, "then")
};
var rs = /* @__PURE__ */ m$1(function(e, t, a, n) {
  return e.state === To && (e.state = t, e[a] = n, Po(e)), e;
}, "deliver"), Po = /* @__PURE__ */ m$1(function(e) {
  e.state === Do ? ts(e, "onFulfilled", e.fulfillValue) : e.state === ko && ts(e, "onRejected", e.rejectReason);
}, "execute"), ts = /* @__PURE__ */ m$1(function(e, t, a) {
  if (e[t].length !== 0) {
    var n = e[t];
    e[t] = [];
    var i = /* @__PURE__ */ m$1(function() {
      for (var o = 0; o < n.length; o++) n[o](a);
    }, "func");
    typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
  }
}, "execute_handlers"), as = /* @__PURE__ */ m$1(function(e, t, a) {
  return function(n) {
    if (typeof e != "function") t[a].call(t, n);
    else {
      var i;
      try {
        i = /* @__PURE__ */ e(n);
      } catch (s) {
        t.reject(s);
        return;
      }
      Ff(t, i);
    }
  };
}, "resolver"), Ff = /* @__PURE__ */ m$1(function r5(e, t) {
  if (e === t || e.proxy === t) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var a;
  if (Ue(t) === "object" && t !== null || typeof t == "function") try {
    a = t.then;
  } catch (i) {
    e.reject(i);
    return;
  }
  if (typeof a == "function") {
    var n = false;
    try {
      a.call(t, function(i) {
        n || (n = true, i === t ? e.reject(new TypeError("circular thenable chain")) : r5(e, i));
      }, function(i) {
        n || (n = true, e.reject(i));
      });
    } catch (i) {
      n || e.reject(i);
    }
    return;
  }
  e.fulfill(t);
}, "resolve");
Gr.all = function(r10) {
  return new Gr(function(e, t) {
    for (var a = new Array(r10.length), n = 0, i = /* @__PURE__ */ m$1(function(l, u) {
      a[l] = u, n++, n === r10.length && e(a);
    }, "fulfill"), s = 0; s < r10.length; s++) (function(o) {
      var l = r10[o], u = l != null && l.then != null;
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
Gr.resolve = function(r10) {
  return new Gr(function(e, t) {
    e(r10);
  });
};
Gr.reject = function(r10) {
  return new Gr(function(e, t) {
    t(r10);
  });
};
var qt = typeof Promise < "u" ? Promise : Gr, Wn = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = /* @__PURE__ */ si(e), i = !n, s = this._private = /* @__PURE__ */ we({
    duration: 1e3
  }, t, a);
  if (s.target = e, s.style = s.style || s.css, s.started = false, s.playing = false, s.hooked = false, s.applying = false, s.progress = 0, s.completes = [], s.frames = [], s.complete && Ve(s.complete) && s.completes.push(s.complete), i) {
    var o = /* @__PURE__ */ e.position();
    s.startPosition = s.startPosition || {
      x: o.x,
      y: o.y
    }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
  }
  if (n) {
    var l = /* @__PURE__ */ e.pan();
    s.startPan = {
      x: l.x,
      y: l.y
    }, s.startZoom = /* @__PURE__ */ e.zoom();
  }
  this.length = 1, this[0] = this;
}, "Animation"), pt = Wn.prototype;
we(pt, {
  instanceString: /* @__PURE__ */ m$1(function() {
    return "animation";
  }, "instanceString"),
  hook: /* @__PURE__ */ m$1(function() {
    var e = this._private;
    if (!e.hooked) {
      var t, a = e.target._private.animation;
      e.queue ? t = a.queue : t = a.current, t.push(this), pr(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = true;
    }
    return this;
  }, "hook"),
  play: /* @__PURE__ */ m$1(function() {
    var e = this._private;
    return e.progress === 1 && (e.progress = 0), e.playing = true, e.started = false, e.stopped = false, this.hook(), this;
  }, "play"),
  playing: /* @__PURE__ */ m$1(function() {
    return this._private.playing;
  }, "playing"),
  apply: /* @__PURE__ */ m$1(function() {
    var e = this._private;
    return e.applying = true, e.started = false, e.stopped = false, this.hook(), this;
  }, "apply"),
  applying: /* @__PURE__ */ m$1(function() {
    return this._private.applying;
  }, "applying"),
  pause: /* @__PURE__ */ m$1(function() {
    var e = this._private;
    return e.playing = false, e.started = false, this;
  }, "pause"),
  stop: /* @__PURE__ */ m$1(function() {
    var e = this._private;
    return e.playing = false, e.started = false, e.stopped = true, this;
  }, "stop"),
  rewind: /* @__PURE__ */ m$1(function() {
    return this.progress(0);
  }, "rewind"),
  fastforward: /* @__PURE__ */ m$1(function() {
    return this.progress(1);
  }, "fastforward"),
  time: /* @__PURE__ */ m$1(function(e) {
    var t = this._private;
    return e === void 0 ? t.progress * t.duration : this.progress(e / t.duration);
  }, "time"),
  progress: /* @__PURE__ */ m$1(function(e) {
    var t = this._private, a = t.playing;
    return e === void 0 ? t.progress : (a && this.pause(), t.progress = e, t.started = false, a && this.play(), this);
  }, "progress"),
  completed: /* @__PURE__ */ m$1(function() {
    return this._private.progress === 1;
  }, "completed"),
  reverse: /* @__PURE__ */ m$1(function() {
    var e = this._private, t = e.playing;
    t && this.pause(), e.progress = 1 - e.progress, e.started = false;
    var a = /* @__PURE__ */ m$1(function(u, f) {
      var c = e[u];
      c != null && (e[u] = e[f], e[f] = c);
    }, "swap");
    if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style) for (var n = 0; n < e.style.length; n++) {
      var i = e.style[n], s = i.name, o = e.startStyle[s];
      e.startStyle[s] = i, e.style[n] = o;
    }
    return t && this.play(), this;
  }, "reverse"),
  promise: /* @__PURE__ */ m$1(function(e) {
    var t = this._private, a;
    switch (e) {
      case "frame":
        a = t.frames;
        break;
      default:
      case "complete":
      case "completed":
        a = t.completes;
    }
    return new qt(function(n, i) {
      a.push(function() {
        n();
      });
    });
  }, "promise")
});
pt.complete = pt.completed;
pt.run = pt.play;
pt.running = pt.playing;
var Vf = {
  animated: /* @__PURE__ */ m$1(function() {
    return m$1(function() {
      var t = this, a = t.length !== void 0, n = a ? t : [
        t
      ], i = this._private.cy || this;
      if (!i.styleEnabled()) return false;
      var s = n[0];
      if (s) return s._private.animation.current.length > 0;
    }, "animatedImpl");
  }, "animated"),
  clearQueue: /* @__PURE__ */ m$1(function() {
    return m$1(function() {
      var t = this, a = t.length !== void 0, n = a ? t : [
        t
      ], i = this._private.cy || this;
      if (!i.styleEnabled()) return this;
      for (var s = 0; s < n.length; s++) {
        var o = n[s];
        o._private.animation.queue = [];
      }
      return this;
    }, "clearQueueImpl");
  }, "clearQueue"),
  delay: /* @__PURE__ */ m$1(function() {
    return m$1(function(t, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animate({
        delay: t,
        duration: t,
        complete: a
      }) : this;
    }, "delayImpl");
  }, "delay"),
  delayAnimation: /* @__PURE__ */ m$1(function() {
    return m$1(function(t, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animation({
        delay: t,
        duration: t,
        complete: a
      }) : this;
    }, "delayAnimationImpl");
  }, "delayAnimation"),
  animation: /* @__PURE__ */ m$1(function() {
    return m$1(function(t, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [
        n
      ], o = this._private.cy || this, l = !i, u = !l;
      if (!o.styleEnabled()) return this;
      var f = /* @__PURE__ */ o.style();
      t = /* @__PURE__ */ we({}, t, a);
      var c = Object.keys(t).length === 0;
      if (c) return new Wn(s[0], t);
      switch (t.duration === void 0 && (t.duration = 400), t.duration) {
        case "slow":
          t.duration = 600;
          break;
        case "fast":
          t.duration = 200;
          break;
      }
      if (u && (t.style = /* @__PURE__ */ f.getPropsList(t.style || t.css), t.css = void 0), u && t.renderedPosition != null) {
        var d = t.renderedPosition, g = /* @__PURE__ */ o.pan(), h = /* @__PURE__ */ o.zoom();
        t.position = /* @__PURE__ */ co(d, h, g);
      }
      if (l && t.panBy != null) {
        var m = t.panBy, y = /* @__PURE__ */ o.pan();
        t.pan = {
          x: y.x + m.x,
          y: y.y + m.y
        };
      }
      var p = t.center || t.centre;
      if (l && p != null) {
        var b1 = /* @__PURE__ */ o.getCenterPan(p.eles, t.zoom);
        b1 != null && (t.pan = b1);
      }
      if (l && t.fit != null) {
        var w = t.fit, x = /* @__PURE__ */ o.getFitViewport(w.eles || w.boundingBox, w.padding);
        x != null && (t.pan = x.pan, t.zoom = x.zoom);
      }
      if (l && Te(t.zoom)) {
        var T = /* @__PURE__ */ o.getZoomedViewport(t.zoom);
        T != null ? (T.zoomed && (t.zoom = T.zoom), T.panned && (t.pan = T.pan)) : t.zoom = null;
      }
      return new Wn(s[0], t);
    }, "animationImpl");
  }, "animation"),
  animate: /* @__PURE__ */ m$1(function() {
    return m$1(function(t, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [
        n
      ], o = this._private.cy || this;
      if (!o.styleEnabled()) return this;
      a && (t = /* @__PURE__ */ we({}, t, a));
      for (var l = 0; l < s.length; l++) {
        var u = s[l], f = u.animated() && (t.queue === void 0 || t.queue), c = /* @__PURE__ */ u.animation(t, f ? {
          queue: true
        } : void 0);
        c.play();
      }
      return this;
    }, "animateImpl");
  }, "animate"),
  stop: /* @__PURE__ */ m$1(function() {
    return m$1(function(t, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [
        n
      ], o = this._private.cy || this;
      if (!o.styleEnabled()) return this;
      for (var l = 0; l < s.length; l++) {
        for (var u = s[l], f = u._private, c = f.animation.current, d = 0; d < c.length; d++) {
          var g = c[d], h = g._private;
          a && (h.duration = 0);
        }
        t && (f.animation.queue = []), a || (f.animation.current = []);
      }
      return o.notify("draw"), this;
    }, "stopImpl");
  }, "stop")
}, qf = Array.isArray, gn = qf, $f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hf = /^\w*$/;
function Gf(r10, e) {
  if (gn(r10)) return false;
  var t = typeof r10;
  return t == "number" || t == "symbol" || t == "boolean" || r10 == null || Ea(r10) ? true : Hf.test(r10) || !$f.test(r10) || e != null && r10 in Object(e);
}
m$1(Gf, "isKey");
var Kf = Gf, Wf = "[object AsyncFunction]", Uf = "[object Function]", Yf = "[object GeneratorFunction]", Xf = "[object Proxy]";
function Zf(r10) {
  if (!ct(r10)) return false;
  var e = /* @__PURE__ */ ao(r10);
  return e == Uf || e == Yf || e == Wf || e == Xf;
}
m$1(Zf, "isFunction");
var Qf = Zf, Jf = vn["__core-js_shared__"], On = Jf, ns = /* @__PURE__ */ function() {
  var r10 = /* @__PURE__ */ /[^.]+$/.exec(On && On.keys && On.keys.IE_PROTO || "");
  return r10 ? "Symbol(src)_1." + r10 : "";
}();
function _f(r10) {
  return !!ns && ns in r10;
}
m$1(_f, "isMasked");
var jf = _f, ec = Function.prototype, rc = ec.toString;
function tc(r10) {
  if (r10 != null) {
    try {
      return rc.call(r10);
    } catch {
    }
    try {
      return r10 + "";
    } catch {
    }
  }
  return "";
}
m$1(tc, "toSource");
var ac = tc, nc = /[\\^$.*+?()[\]{}|]/g, ic = /^\[object .+?Constructor\]$/, sc = Function.prototype, oc = Object.prototype, uc = sc.toString, lc = oc.hasOwnProperty, vc = /* @__PURE__ */ RegExp("^" + uc.call(lc).replace(nc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function fc(r10) {
  if (!ct(r10) || jf(r10)) return false;
  var e = Qf(r10) ? vc : ic;
  return e.test(/* @__PURE__ */ ac(r10));
}
m$1(fc, "baseIsNative");
var cc = fc;
function dc(r10, e) {
  return r10 == null ? void 0 : r10[e];
}
m$1(dc, "getValue$1");
var hc = dc;
function gc(r10, e) {
  var t = /* @__PURE__ */ hc(r10, e);
  return cc(t) ? t : void 0;
}
m$1(gc, "getNative");
var gi = gc, pc = /* @__PURE__ */ gi(Object, "create"), ga = pc;
function yc() {
  this.__data__ = ga ? ga(null) : {}, this.size = 0;
}
m$1(yc, "hashClear");
var mc = yc;
function bc(r10) {
  var e = this.has(r10) && delete this.__data__[r10];
  return this.size -= e ? 1 : 0, e;
}
m$1(bc, "hashDelete");
var wc = bc, xc = "__lodash_hash_undefined__", Ec = Object.prototype, Cc = Ec.hasOwnProperty;
function Sc(r10) {
  var e = this.__data__;
  if (ga) {
    var t = e[r10];
    return t === xc ? void 0 : t;
  }
  return Cc.call(e, r10) ? e[r10] : void 0;
}
m$1(Sc, "hashGet");
var Tc = Sc, Dc = Object.prototype, kc = Dc.hasOwnProperty;
function Pc(r10) {
  var e = this.__data__;
  return ga ? e[r10] !== void 0 : kc.call(e, r10);
}
m$1(Pc, "hashHas");
var Bc = Pc, Mc = "__lodash_hash_undefined__";
function Lc(r10, e) {
  var t = this.__data__;
  return this.size += this.has(r10) ? 0 : 1, t[r10] = ga && e === void 0 ? Mc : e, this;
}
m$1(Lc, "hashSet");
var Ac = Lc;
function $t(r10) {
  var e = -1, t = r10 == null ? 0 : r10.length;
  for (this.clear(); ++e < t; ) {
    var a = r10[e];
    this.set(a[0], a[1]);
  }
}
m$1($t, "Hash");
$t.prototype.clear = mc;
$t.prototype.delete = wc;
$t.prototype.get = Tc;
$t.prototype.has = Bc;
$t.prototype.set = Ac;
var is = $t;
function Rc() {
  this.__data__ = [], this.size = 0;
}
m$1(Rc, "listCacheClear");
var Oc = Rc;
function Ic(r10, e) {
  return r10 === e || r10 !== r10 && e !== e;
}
m$1(Ic, "eq");
var Bo = Ic;
function zc(r10, e) {
  for (var t = r10.length; t--; ) if (Bo(r10[t][0], e)) return t;
  return -1;
}
m$1(zc, "assocIndexOf");
var pn = zc, Nc = Array.prototype, Fc = Nc.splice;
function Vc(r10) {
  var e = this.__data__, t = /* @__PURE__ */ pn(e, r10);
  if (t < 0) return false;
  var a = e.length - 1;
  return t == a ? e.pop() : Fc.call(e, t, 1), --this.size, true;
}
m$1(Vc, "listCacheDelete");
var qc = Vc;
function $c(r10) {
  var e = this.__data__, t = /* @__PURE__ */ pn(e, r10);
  return t < 0 ? void 0 : e[t][1];
}
m$1($c, "listCacheGet");
var Hc = $c;
function Gc(r10) {
  return pn(this.__data__, r10) > -1;
}
m$1(Gc, "listCacheHas");
var Kc = Gc;
function Wc(r10, e) {
  var t = this.__data__, a = /* @__PURE__ */ pn(t, r10);
  return a < 0 ? (++this.size, t.push([
    r10,
    e
  ])) : t[a][1] = e, this;
}
m$1(Wc, "listCacheSet");
var Uc = Wc;
function Ht(r10) {
  var e = -1, t = r10 == null ? 0 : r10.length;
  for (this.clear(); ++e < t; ) {
    var a = r10[e];
    this.set(a[0], a[1]);
  }
}
m$1(Ht, "ListCache");
Ht.prototype.clear = Oc;
Ht.prototype.delete = qc;
Ht.prototype.get = Hc;
Ht.prototype.has = Kc;
Ht.prototype.set = Uc;
var Yc = Ht, Xc = /* @__PURE__ */ gi(vn, "Map"), Zc = Xc;
function Qc() {
  this.size = 0, this.__data__ = {
    hash: new is(),
    map: new (Zc || Yc)(),
    string: new is()
  };
}
m$1(Qc, "mapCacheClear");
var Jc = Qc;
function _c(r10) {
  var e = typeof r10;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r10 !== "__proto__" : r10 === null;
}
m$1(_c, "isKeyable");
var jc = _c;
function ed(r10, e) {
  var t = r10.__data__;
  return jc(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
m$1(ed, "getMapData");
var yn = ed;
function rd(r10) {
  var e = /* @__PURE__ */ yn(this, r10).delete(r10);
  return this.size -= e ? 1 : 0, e;
}
m$1(rd, "mapCacheDelete");
var td = rd;
function ad(r10) {
  return yn(this, r10).get(r10);
}
m$1(ad, "mapCacheGet");
var nd = ad;
function id(r10) {
  return yn(this, r10).has(r10);
}
m$1(id, "mapCacheHas");
var sd = id;
function od(r10, e) {
  var t = /* @__PURE__ */ yn(this, r10), a = t.size;
  return t.set(r10, e), this.size += t.size == a ? 0 : 1, this;
}
m$1(od, "mapCacheSet");
var ud = od;
function Gt(r10) {
  var e = -1, t = r10 == null ? 0 : r10.length;
  for (this.clear(); ++e < t; ) {
    var a = r10[e];
    this.set(a[0], a[1]);
  }
}
m$1(Gt, "MapCache");
Gt.prototype.clear = Jc;
Gt.prototype.delete = td;
Gt.prototype.get = nd;
Gt.prototype.has = sd;
Gt.prototype.set = ud;
var Mo = Gt, ld = "Expected a function";
function pi(r10, e) {
  if (typeof r10 != "function" || e != null && typeof e != "function") throw new TypeError(ld);
  var t = m$1(function() {
    var a = arguments, n = e ? e.apply(this, a) : a[0], i = t.cache;
    if (i.has(n)) return i.get(n);
    var s = /* @__PURE__ */ r10.apply(this, a);
    return t.cache = i.set(n, s) || i, s;
  }, "memoized");
  return t.cache = new (pi.Cache || Mo)(), t;
}
m$1(pi, "memoize");
pi.Cache = Mo;
var vd = pi, fd = 500;
function cd(r10) {
  var e = /* @__PURE__ */ vd(r10, function(a) {
    return t.size === fd && t.clear(), a;
  }), t = e.cache;
  return e;
}
m$1(cd, "memoizeCapped");
var dd = cd, hd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gd = /\\(\\)?/g, pd = /* @__PURE__ */ dd(function(r10) {
  var e = [];
  return r10.charCodeAt(0) === 46 && e.push(""), r10.replace(hd, function(t, a, n, i) {
    e.push(n ? i.replace(gd, "$1") : a || t);
  }), e;
}), Lo = pd;
function yd(r10, e) {
  for (var t = -1, a = r10 == null ? 0 : r10.length, n = /* @__PURE__ */ Array(a); ++t < a; ) n[t] = /* @__PURE__ */ e(r10[t], t, r10);
  return n;
}
m$1(yd, "arrayMap");
var Ao = yd, ss = Ot ? Ot.prototype : void 0, os = ss ? ss.toString : void 0;
function Ro(r10) {
  if (typeof r10 == "string") return r10;
  if (gn(r10)) return Ao(r10, Ro) + "";
  if (Ea(r10)) return os ? os.call(r10) : "";
  var e = r10 + "";
  return e == "0" && 1 / r10 == -Infinity ? "-0" : e;
}
m$1(Ro, "baseToString");
var bd = Ro;
function wd(r10) {
  return r10 == null ? "" : bd(r10);
}
m$1(wd, "toString$1");
var Oo = wd;
function xd(r10, e) {
  return gn(r10) ? r10 : Kf(r10, e) ? [
    r10
  ] : Lo(/* @__PURE__ */ Oo(r10));
}
m$1(xd, "castPath");
var Io = xd;
function Cd(r10) {
  if (typeof r10 == "string" || Ea(r10)) return r10;
  var e = r10 + "";
  return e == "0" && 1 / r10 == -Infinity ? "-0" : e;
}
m$1(Cd, "toKey");
var yi = Cd;
function Sd(r10, e) {
  e = /* @__PURE__ */ Io(e, r10);
  for (var t = 0, a = e.length; r10 != null && t < a; ) r10 = r10[yi(e[t++])];
  return t && t == a ? r10 : void 0;
}
m$1(Sd, "baseGet");
var Td = Sd;
function Dd(r10, e, t) {
  var a = r10 == null ? void 0 : Td(r10, e);
  return a === void 0 ? t : a;
}
m$1(Dd, "get");
var kd = Dd, Pd = /* @__PURE__ */ function() {
  try {
    var r10 = /* @__PURE__ */ gi(Object, "defineProperty");
    return r10({}, "", {}), r10;
  } catch {
  }
}(), us = Pd;
function Bd(r10, e, t) {
  e == "__proto__" && us ? us(r10, e, {
    configurable: true,
    enumerable: true,
    value: t,
    writable: true
  }) : r10[e] = t;
}
m$1(Bd, "baseAssignValue");
var Md = Bd, Ld = Object.prototype, Ad = Ld.hasOwnProperty;
function Rd(r10, e, t) {
  var a = r10[e];
  (!(Ad.call(r10, e) && Bo(a, t)) || t === void 0 && !(e in r10)) && Md(r10, e, t);
}
m$1(Rd, "assignValue");
var Od = Rd, Id = 9007199254740991, zd = /^(?:0|[1-9]\d*)$/;
function Nd(r10, e) {
  var t = typeof r10;
  return e = e ?? Id, !!e && (t == "number" || t != "symbol" && zd.test(r10)) && r10 > -1 && r10 % 1 == 0 && r10 < e;
}
m$1(Nd, "isIndex");
var Fd = Nd;
function Vd(r10, e, t, a) {
  if (!ct(r10)) return r10;
  e = /* @__PURE__ */ Io(e, r10);
  for (var n = -1, i = e.length, s = i - 1, o = r10; o != null && ++n < i; ) {
    var l = /* @__PURE__ */ yi(e[n]), u = t;
    if (l === "__proto__" || l === "constructor" || l === "prototype") return r10;
    if (n != s) {
      var f = o[l];
      u = a ? a(f, l, o) : void 0, u === void 0 && (u = ct(f) ? f : Fd(e[n + 1]) ? [] : {});
    }
    Od(o, l, u), o = o[l];
  }
  return r10;
}
m$1(Vd, "baseSet");
var qd = Vd;
function $d(r10, e, t) {
  return r10 == null ? r10 : qd(r10, e, t);
}
m$1($d, "set");
var Hd = $d;
function Gd(r10, e) {
  var t = -1, a = r10.length;
  for (e || (e = /* @__PURE__ */ Array(a)); ++t < a; ) e[t] = r10[t];
  return e;
}
m$1(Gd, "copyArray");
var Kd = Gd;
function Wd(r10) {
  return gn(r10) ? Ao(r10, yi) : Ea(r10) ? [
    r10
  ] : Kd(/* @__PURE__ */ Lo(/* @__PURE__ */ Oo(r10)));
}
m$1(Wd, "toPath");
var Ud = Wd, Yd = {
  data: /* @__PURE__ */ m$1(function(e) {
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
      beforeGet: /* @__PURE__ */ m$1(function(n) {
      }, "beforeGet"),
      beforeSet: /* @__PURE__ */ m$1(function(n, i) {
      }, "beforeSet"),
      onSet: /* @__PURE__ */ m$1(function(n) {
      }, "onSet"),
      canSet: /* @__PURE__ */ m$1(function(n) {
        return true;
      }, "canSet")
    };
    return e = /* @__PURE__ */ we({}, t, e), m$1(function(n, i) {
      var s = e, o = this, l = o.length !== void 0, u = l ? o : [
        o
      ], f = l ? o[0] : o;
      if (he(n)) {
        var c = n.indexOf(".") !== -1, d = c && Ud(n);
        if (s.allowGetting && i === void 0) {
          var g;
          return f && (s.beforeGet(f), d && f._private[s.field][n] === void 0 ? g = /* @__PURE__ */ kd(f._private[s.field], d) : g = f._private[s.field][n]), g;
        } else if (s.allowSetting && i !== void 0) {
          var h = !s.immutableKeys[n];
          if (h) {
            var m = /* @__PURE__ */ Us({}, n, i);
            s.beforeSet(o, m);
            for (var y = 0, p = u.length; y < p; y++) {
              var b1 = u[y];
              s.canSet(b1) && (d && f._private[s.field][n] === void 0 ? Hd(b1._private[s.field], d, i) : b1._private[s.field][n] = i);
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          }
        }
      } else if (s.allowSetting && Te(n)) {
        var w = n, x, T, C = /* @__PURE__ */ Object.keys(w);
        s.beforeSet(o, w);
        for (var E = 0; E < C.length; E++) {
          x = C[E], T = w[x];
          var k = !s.immutableKeys[x];
          if (k) for (var S = 0; S < u.length; S++) {
            var L = u[S];
            s.canSet(L) && (L._private[s.field][x] = T);
          }
        }
        s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
      } else if (s.allowBinding && Ve(n)) {
        var B = n;
        o.on(s.bindingEvent, B);
      } else if (s.allowGetting && n === void 0) {
        var M;
        return f && (s.beforeGet(f), M = f._private[s.field]), M;
      }
      return o;
    }, "dataImpl");
  }, "data"),
  removeData: /* @__PURE__ */ m$1(function(e) {
    var t = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: false,
      immutableKeys: {}
    };
    return e = /* @__PURE__ */ we({}, t, e), m$1(function(n) {
      var i = e, s = this, o = s.length !== void 0, l = o ? s : [
        s
      ];
      if (he(n)) {
        for (var u = /* @__PURE__ */ n.split(/\s+/), f = u.length, c = 0; c < f; c++) {
          var d = u[c];
          if (!_r(d)) {
            var g = !i.immutableKeys[d];
            if (g) for (var h = 0, m = l.length; h < m; h++) l[h]._private[i.field][d] = void 0;
          }
        }
        i.triggerEvent && s[i.triggerFnName](i.event);
      } else if (n === void 0) {
        for (var y = 0, p = l.length; y < p; y++) for (var b1 = l[y]._private[i.field], w = /* @__PURE__ */ Object.keys(b1), x = 0; x < w.length; x++) {
          var T = w[x], C = !i.immutableKeys[T];
          C && (b1[T] = void 0);
        }
        i.triggerEvent && s[i.triggerFnName](i.event);
      }
      return s;
    }, "removeDataImpl");
  }, "removeData")
}, Xd = {
  eventAliasesOn: /* @__PURE__ */ m$1(function(e) {
    var t = e;
    t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(a, n) {
      var i = this, s = /* @__PURE__ */ Array.prototype.slice.call(arguments, 0);
      return new qt(function(o, l) {
        var u = /* @__PURE__ */ m$1(function(g) {
          i.off.apply(i, c), o(g);
        }, "callback"), f = /* @__PURE__ */ s.concat([
          u
        ]), c = /* @__PURE__ */ f.concat([]);
        i.on.apply(i, f);
      });
    };
  }, "eventAliasesOn")
}, Me = {};
[
  Vf,
  Yd,
  Xd
].forEach(function(r10) {
  we(Me, r10);
});
var Zd = {
  animate: /* @__PURE__ */ Me.animate(),
  animation: /* @__PURE__ */ Me.animation(),
  animated: /* @__PURE__ */ Me.animated(),
  clearQueue: /* @__PURE__ */ Me.clearQueue(),
  delay: /* @__PURE__ */ Me.delay(),
  delayAnimation: /* @__PURE__ */ Me.delayAnimation(),
  stop: /* @__PURE__ */ Me.stop()
}, Ka = {
  classes: /* @__PURE__ */ m$1(function(e) {
    var t = this;
    if (e === void 0) {
      var a = [];
      return t[0]._private.classes.forEach(function(h) {
        return a.push(h);
      }), a;
    } else Oe(e) || (e = (e || "").match(/\S+/g) || []);
    for (var n = [], i = new Vt(e), s = 0; s < t.length; s++) {
      for (var o = t[s], l = o._private, u = l.classes, f = false, c = 0; c < e.length; c++) {
        var d = e[c], g = /* @__PURE__ */ u.has(d);
        if (!g) {
          f = true;
          break;
        }
      }
      f || (f = u.size !== e.length), f && (l.classes = i, n.push(o));
    }
    return n.length > 0 && this.spawn(n).updateStyle().emit("class"), t;
  }, "classes"),
  addClass: /* @__PURE__ */ m$1(function(e) {
    return this.toggleClass(e, true);
  }, "addClass"),
  hasClass: /* @__PURE__ */ m$1(function(e) {
    var t = this[0];
    return t != null && t._private.classes.has(e);
  }, "hasClass"),
  toggleClass: /* @__PURE__ */ m$1(function(e, t) {
    Oe(e) || (e = e.match(/\S+/g) || []);
    for (var a = this, n = t === void 0, i = [], s = 0, o = a.length; s < o; s++) for (var l = a[s], u = l._private.classes, f = false, c = 0; c < e.length; c++) {
      var d = e[c], g = /* @__PURE__ */ u.has(d), h = false;
      t || n && !g ? (u.add(d), h = true) : (!t || n && g) && (u.delete(d), h = true), !f && h && (i.push(l), f = true);
    }
    return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
  }, "toggleClass"),
  removeClass: /* @__PURE__ */ m$1(function(e) {
    return this.toggleClass(e, false);
  }, "removeClass"),
  flashClass: /* @__PURE__ */ m$1(function(e, t) {
    var a = this;
    if (t == null) t = 250;
    else if (t === 0) return a;
    return a.addClass(e), setTimeout(function() {
      a.removeClass(e);
    }, t), a;
  }, "flashClass")
};
Ka.className = Ka.classNames = Ka.classes;
var Se = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  boolOp: "\\?|\\!|\\^",
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  number: We,
  meta: "degree|indegree|outdegree",
  separator: "\\s*,\\s*",
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
Se.variable = "(?:[\\w-.]|(?:\\\\" + Se.metaChar + "))+";
Se.className = "(?:[\\w-]|(?:\\\\" + Se.metaChar + "))+";
Se.value = Se.string + "|" + Se.number;
Se.id = Se.variable;
(function() {
  var r10, e, t;
  for (r10 = /* @__PURE__ */ Se.comparatorOp.split("|"), t = 0; t < r10.length; t++) e = r10[t], Se.comparatorOp += "|@" + e;
  for (r10 = /* @__PURE__ */ Se.comparatorOp.split("|"), t = 0; t < r10.length; t++) e = r10[t], !(e.indexOf("!") >= 0) && e !== "=" && (Se.comparatorOp += "|\\!" + e);
})();
var Ae = /* @__PURE__ */ m$1(function() {
  return {
    checks: []
  };
}, "newQuery"), ue = {
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
}, Un = /* @__PURE__ */ [
  {
    selector: ":selected",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.selected();
    }, "matches")
  },
  {
    selector: ":unselected",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.selected();
    }, "matches")
  },
  {
    selector: ":selectable",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.selectable();
    }, "matches")
  },
  {
    selector: ":unselectable",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.selectable();
    }, "matches")
  },
  {
    selector: ":locked",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.locked();
    }, "matches")
  },
  {
    selector: ":unlocked",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.locked();
    }, "matches")
  },
  {
    selector: ":visible",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.visible();
    }, "matches")
  },
  {
    selector: ":hidden",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.visible();
    }, "matches")
  },
  {
    selector: ":transparent",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.transparent();
    }, "matches")
  },
  {
    selector: ":grabbed",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.grabbed();
    }, "matches")
  },
  {
    selector: ":free",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.grabbed();
    }, "matches")
  },
  {
    selector: ":removed",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.removed();
    }, "matches")
  },
  {
    selector: ":inside",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.removed();
    }, "matches")
  },
  {
    selector: ":grabbable",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.grabbable();
    }, "matches")
  },
  {
    selector: ":ungrabbable",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.grabbable();
    }, "matches")
  },
  {
    selector: ":animated",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.animated();
    }, "matches")
  },
  {
    selector: ":unanimated",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.animated();
    }, "matches")
  },
  {
    selector: ":parent",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.isParent();
    }, "matches")
  },
  {
    selector: ":childless",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.isChildless();
    }, "matches")
  },
  {
    selector: ":child",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.isChild();
    }, "matches")
  },
  {
    selector: ":orphan",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.isOrphan();
    }, "matches")
  },
  {
    selector: ":nonorphan",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.isChild();
    }, "matches")
  },
  {
    selector: ":compound",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
    }, "matches")
  },
  {
    selector: ":loop",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.isLoop();
    }, "matches")
  },
  {
    selector: ":simple",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.isSimple();
    }, "matches")
  },
  {
    selector: ":active",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.active();
    }, "matches")
  },
  {
    selector: ":inactive",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.active();
    }, "matches")
  },
  {
    selector: ":backgrounding",
    matches: /* @__PURE__ */ m$1(function(e) {
      return e.backgrounding();
    }, "matches")
  },
  {
    selector: ":nonbackgrounding",
    matches: /* @__PURE__ */ m$1(function(e) {
      return !e.backgrounding();
    }, "matches")
  }
].sort(function(r10, e) {
  return sl(r10.selector, e.selector);
}), Qd = /* @__PURE__ */ function() {
  for (var r10 = {}, e, t = 0; t < Un.length; t++) e = Un[t], r10[e.selector] = e.matches;
  return r10;
}(), Jd = /* @__PURE__ */ m$1(function(e, t) {
  return Qd[e](t);
}, "stateSelectorMatches"), _d = "(" + Un.map(function(r10) {
  return r10.selector;
}).join("|") + ")", Et = /* @__PURE__ */ m$1(function(e) {
  return e.replace(new RegExp("\\\\(" + Se.metaChar + ")", "g"), function(t, a) {
    return a;
  });
}, "cleanMetaChars"), Yr = /* @__PURE__ */ m$1(function(e, t, a) {
  e[e.length - 1] = a;
}, "replaceLastQuery"), Yn = [
  {
    name: "group",
    query: true,
    regex: "(" + Se.group + ")",
    populate: /* @__PURE__ */ m$1(function(e, t, a) {
      var n = /* @__PURE__ */ Dr(a, 1), i = n[0];
      t.checks.push({
        type: ue.GROUP,
        value: i === "*" ? i : i + "s"
      });
    }, "populate")
  },
  {
    name: "state",
    query: true,
    regex: _d,
    populate: /* @__PURE__ */ m$1(function(e, t, a) {
      var n = /* @__PURE__ */ Dr(a, 1), i = n[0];
      t.checks.push({
        type: ue.STATE,
        value: i
      });
    }, "populate")
  },
  {
    name: "id",
    query: true,
    regex: "\\#(" + Se.id + ")",
    populate: /* @__PURE__ */ m$1(function(e, t, a) {
      var n = /* @__PURE__ */ Dr(a, 1), i = n[0];
      t.checks.push({
        type: ue.ID,
        value: /* @__PURE__ */ Et(i)
      });
    }, "populate")
  },
  {
    name: "className",
    query: true,
    regex: "\\.(" + Se.className + ")",
    populate: /* @__PURE__ */ m$1(function(e, t, a) {
      var n = /* @__PURE__ */ Dr(a, 1), i = n[0];
      t.checks.push({
        type: ue.CLASS,
        value: /* @__PURE__ */ Et(i)
      });
    }, "populate")
  },
  {
    name: "dataExists",
    query: true,
    regex: "\\[\\s*(" + Se.variable + ")\\s*\\]",
    populate: /* @__PURE__ */ m$1(function(e, t, a) {
      var n = /* @__PURE__ */ Dr(a, 1), i = n[0];
      t.checks.push({
        type: ue.DATA_EXIST,
        field: /* @__PURE__ */ Et(i)
      });
    }, "populate")
  },
  {
    name: "dataCompare",
    query: true,
    regex: "\\[\\s*(" + Se.variable + ")\\s*(" + Se.comparatorOp + ")\\s*(" + Se.value + ")\\s*\\]",
    populate: /* @__PURE__ */ m$1(function(e, t, a) {
      var n = /* @__PURE__ */ Dr(a, 3), i = n[0], s = n[1], o = n[2], l = new RegExp("^" + Se.string + "$").exec(o) != null;
      l ? o = /* @__PURE__ */ o.substring(1, o.length - 1) : o = /* @__PURE__ */ parseFloat(o), t.checks.push({
        type: ue.DATA_COMPARE,
        field: /* @__PURE__ */ Et(i),
        operator: s,
        value: o
      });
    }, "populate")
  },
  {
    name: "dataBool",
    query: true,
    regex: "\\[\\s*(" + Se.boolOp + ")\\s*(" + Se.variable + ")\\s*\\]",
    populate: /* @__PURE__ */ m$1(function(e, t, a) {
      var n = /* @__PURE__ */ Dr(a, 2), i = n[0], s = n[1];
      t.checks.push({
        type: ue.DATA_BOOL,
        field: /* @__PURE__ */ Et(s),
        operator: i
      });
    }, "populate")
  },
  {
    name: "metaCompare",
    query: true,
    regex: "\\[\\[\\s*(" + Se.meta + ")\\s*(" + Se.comparatorOp + ")\\s*(" + Se.number + ")\\s*\\]\\]",
    populate: /* @__PURE__ */ m$1(function(e, t, a) {
      var n = /* @__PURE__ */ Dr(a, 3), i = n[0], s = n[1], o = n[2];
      t.checks.push({
        type: ue.META_COMPARE,
        field: /* @__PURE__ */ Et(i),
        operator: s,
        value: /* @__PURE__ */ parseFloat(o)
      });
    }, "populate")
  },
  {
    name: "nextQuery",
    separator: true,
    regex: Se.separator,
    populate: /* @__PURE__ */ m$1(function(e, t) {
      var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
      a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
      var o = e[e.length++] = /* @__PURE__ */ Ae();
      return o;
    }, "populate")
  },
  {
    name: "directedEdge",
    separator: true,
    regex: Se.directedEdge,
    populate: /* @__PURE__ */ m$1(function(e, t) {
      if (e.currentSubject == null) {
        var a = /* @__PURE__ */ Ae(), n = t, i = /* @__PURE__ */ Ae();
        return a.checks.push({
          type: ue.DIRECTED_EDGE,
          source: n,
          target: i
        }), Yr(e, t, a), e.edgeCount++, i;
      } else {
        var s = /* @__PURE__ */ Ae(), o = t, l = /* @__PURE__ */ Ae();
        return s.checks.push({
          type: ue.NODE_SOURCE,
          source: o,
          target: l
        }), Yr(e, t, s), e.edgeCount++, l;
      }
    }, "populate")
  },
  {
    name: "undirectedEdge",
    separator: true,
    regex: Se.undirectedEdge,
    populate: /* @__PURE__ */ m$1(function(e, t) {
      if (e.currentSubject == null) {
        var a = /* @__PURE__ */ Ae(), n = t, i = /* @__PURE__ */ Ae();
        return a.checks.push({
          type: ue.UNDIRECTED_EDGE,
          nodes: [
            n,
            i
          ]
        }), Yr(e, t, a), e.edgeCount++, i;
      } else {
        var s = /* @__PURE__ */ Ae(), o = t, l = /* @__PURE__ */ Ae();
        return s.checks.push({
          type: ue.NODE_NEIGHBOR,
          node: o,
          neighbor: l
        }), Yr(e, t, s), l;
      }
    }, "populate")
  },
  {
    name: "child",
    separator: true,
    regex: Se.child,
    populate: /* @__PURE__ */ m$1(function(e, t) {
      if (e.currentSubject == null) {
        var a = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ Ae(), i = e[e.length - 1];
        return a.checks.push({
          type: ue.CHILD,
          parent: i,
          child: n
        }), Yr(e, t, a), e.compoundCount++, n;
      } else if (e.currentSubject === t) {
        var s = /* @__PURE__ */ Ae(), o = e[e.length - 1], l = /* @__PURE__ */ Ae(), u = /* @__PURE__ */ Ae(), f = /* @__PURE__ */ Ae(), c = /* @__PURE__ */ Ae();
        return s.checks.push({
          type: ue.COMPOUND_SPLIT,
          left: o,
          right: l,
          subject: u
        }), u.checks = t.checks, t.checks = [
          {
            type: ue.TRUE
          }
        ], c.checks.push({
          type: ue.TRUE
        }), l.checks.push({
          type: ue.PARENT,
          parent: c,
          child: f
        }), Yr(e, o, s), e.currentSubject = u, e.compoundCount++, f;
      } else {
        var d = /* @__PURE__ */ Ae(), g = /* @__PURE__ */ Ae(), h = [
          {
            type: ue.PARENT,
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
    regex: Se.descendant,
    populate: /* @__PURE__ */ m$1(function(e, t) {
      if (e.currentSubject == null) {
        var a = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ Ae(), i = e[e.length - 1];
        return a.checks.push({
          type: ue.DESCENDANT,
          ancestor: i,
          descendant: n
        }), Yr(e, t, a), e.compoundCount++, n;
      } else if (e.currentSubject === t) {
        var s = /* @__PURE__ */ Ae(), o = e[e.length - 1], l = /* @__PURE__ */ Ae(), u = /* @__PURE__ */ Ae(), f = /* @__PURE__ */ Ae(), c = /* @__PURE__ */ Ae();
        return s.checks.push({
          type: ue.COMPOUND_SPLIT,
          left: o,
          right: l,
          subject: u
        }), u.checks = t.checks, t.checks = [
          {
            type: ue.TRUE
          }
        ], c.checks.push({
          type: ue.TRUE
        }), l.checks.push({
          type: ue.ANCESTOR,
          ancestor: c,
          descendant: f
        }), Yr(e, o, s), e.currentSubject = u, e.compoundCount++, f;
      } else {
        var d = /* @__PURE__ */ Ae(), g = /* @__PURE__ */ Ae(), h = [
          {
            type: ue.ANCESTOR,
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
    regex: Se.subject,
    populate: /* @__PURE__ */ m$1(function(e, t) {
      if (e.currentSubject != null && e.currentSubject !== t) return Le("Redefinition of subject in selector `" + e.toString() + "`"), false;
      e.currentSubject = t;
      var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
      i === ue.DIRECTED_EDGE ? n.type = ue.NODE_TARGET : i === ue.UNDIRECTED_EDGE && (n.type = ue.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
    }, "populate")
  }
];
Yn.forEach(function(r10) {
  return r10.regexObj = new RegExp("^" + r10.regex);
});
var jd = /* @__PURE__ */ m$1(function(e) {
  for (var t, a, n, i = 0; i < Yn.length; i++) {
    var s = Yn[i], o = s.name, l = /* @__PURE__ */ e.match(s.regexObj);
    if (l != null) {
      a = l, t = s, n = o;
      var u = l[0];
      e = /* @__PURE__ */ e.substring(u.length);
      break;
    }
  }
  return {
    expr: t,
    match: a,
    name: n,
    remaining: e
  };
}, "consumeExpr"), eh = /* @__PURE__ */ m$1(function(e) {
  var t = /* @__PURE__ */ e.match(/^\s+/);
  if (t) {
    var a = t[0];
    e = /* @__PURE__ */ e.substring(a.length);
  }
  return e;
}, "consumeWhitespace"), rh = /* @__PURE__ */ m$1(function(e) {
  var t = this, a = t.inputText = e, n = t[0] = /* @__PURE__ */ Ae();
  for (t.length = 1, a = /* @__PURE__ */ eh(a); ; ) {
    var i = /* @__PURE__ */ jd(a);
    if (i.expr == null) return Le("The selector `" + e + "`is invalid"), false;
    var s = /* @__PURE__ */ i.match.slice(1), o = /* @__PURE__ */ i.expr.populate(t, n, s);
    if (o === false) return false;
    if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/)) break;
  }
  var l = t[t.length - 1];
  t.currentSubject != null && (l.subject = t.currentSubject), l.edgeCount = t.edgeCount, l.compoundCount = t.compoundCount;
  for (var u = 0; u < t.length; u++) {
    var f = t[u];
    if (f.compoundCount > 0 && f.edgeCount > 0) return Le("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), false;
    if (f.edgeCount > 1) return Le("The selector `" + e + "` is invalid because it uses multiple edge selectors"), false;
    f.edgeCount === 1 && Le("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return true;
}, "parse"), th = /* @__PURE__ */ m$1(function() {
  if (this.toStringCache != null) return this.toStringCache;
  for (var e = /* @__PURE__ */ m$1(function(f) {
    return f ?? "";
  }, "clean"), t = /* @__PURE__ */ m$1(function(f) {
    return he(f) ? '"' + f + '"' : e(f);
  }, "cleanVal"), a = /* @__PURE__ */ m$1(function(f) {
    return " " + f + " ";
  }, "space"), n = /* @__PURE__ */ m$1(function(f, c) {
    var d = f.type, g = f.value;
    switch (d) {
      case ue.GROUP: {
        var h = /* @__PURE__ */ e(g);
        return h.substring(0, h.length - 1);
      }
      case ue.DATA_COMPARE: {
        var m = f.field, y = f.operator;
        return "[" + m + a(/* @__PURE__ */ e(y)) + t(g) + "]";
      }
      case ue.DATA_BOOL: {
        var p = f.operator, b1 = f.field;
        return "[" + e(p) + b1 + "]";
      }
      case ue.DATA_EXIST: {
        var w = f.field;
        return "[" + w + "]";
      }
      case ue.META_COMPARE: {
        var x = f.operator, T = f.field;
        return "[[" + T + a(/* @__PURE__ */ e(x)) + t(g) + "]]";
      }
      case ue.STATE:
        return g;
      case ue.ID:
        return "#" + g;
      case ue.CLASS:
        return "." + g;
      case ue.PARENT:
      case ue.CHILD:
        return i(f.parent, c) + a(">") + i(f.child, c);
      case ue.ANCESTOR:
      case ue.DESCENDANT:
        return i(f.ancestor, c) + " " + i(f.descendant, c);
      case ue.COMPOUND_SPLIT: {
        var C = /* @__PURE__ */ i(f.left, c), E = /* @__PURE__ */ i(f.subject, c), k = /* @__PURE__ */ i(f.right, c);
        return C + (C.length > 0 ? " " : "") + E + k;
      }
      case ue.TRUE:
        return "";
    }
  }, "checkToString"), i = /* @__PURE__ */ m$1(function(f, c) {
    return f.checks.reduce(function(d, g, h) {
      return d + (c === f && h === 0 ? "$" : "") + n(g, c);
    }, "");
  }, "queryToString"), s = "", o = 0; o < this.length; o++) {
    var l = this[o];
    s += /* @__PURE__ */ i(l, l.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
  }
  return this.toStringCache = s, s;
}, "toString"), ah = {
  parse: rh,
  toString: th
}, zo = /* @__PURE__ */ m$1(function(e, t, a) {
  var n, i = /* @__PURE__ */ he(e), s = /* @__PURE__ */ ie(e), o = /* @__PURE__ */ he(a), l, u, f = false, c = false, d = false;
  switch (t.indexOf("!") >= 0 && (t = /* @__PURE__ */ t.replace("!", ""), c = true), t.indexOf("@") >= 0 && (t = /* @__PURE__ */ t.replace("@", ""), f = true), (i || o || f) && (l = !i && !s ? "" : "" + e, u = "" + a), f && (e = l = /* @__PURE__ */ l.toLowerCase(), a = u = /* @__PURE__ */ u.toLowerCase()), t) {
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
}, "valCmp"), nh = /* @__PURE__ */ m$1(function(e, t) {
  switch (t) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
}, "boolCmp"), ih = /* @__PURE__ */ m$1(function(e) {
  return e !== void 0;
}, "existCmp"), mi = /* @__PURE__ */ m$1(function(e, t) {
  return e.data(t);
}, "data"), sh = /* @__PURE__ */ m$1(function(e, t) {
  return e[t]();
}, "meta"), $e = [], Ne = /* @__PURE__ */ m$1(function(e, t) {
  return e.checks.every(function(a) {
    return $e[a.type](a, t);
  });
}, "matches");
$e[ue.GROUP] = function(r10, e) {
  var t = r10.value;
  return t === "*" || t === e.group();
};
$e[ue.STATE] = function(r10, e) {
  var t = r10.value;
  return Jd(t, e);
};
$e[ue.ID] = function(r10, e) {
  var t = r10.value;
  return e.id() === t;
};
$e[ue.CLASS] = function(r10, e) {
  var t = r10.value;
  return e.hasClass(t);
};
$e[ue.META_COMPARE] = function(r10, e) {
  var t = r10.field, a = r10.operator, n = r10.value;
  return zo(/* @__PURE__ */ sh(e, t), a, n);
};
$e[ue.DATA_COMPARE] = function(r10, e) {
  var t = r10.field, a = r10.operator, n = r10.value;
  return zo(/* @__PURE__ */ mi(e, t), a, n);
};
$e[ue.DATA_BOOL] = function(r10, e) {
  var t = r10.field, a = r10.operator;
  return nh(/* @__PURE__ */ mi(e, t), a);
};
$e[ue.DATA_EXIST] = function(r10, e) {
  var t = r10.field;
  return r10.operator, ih(/* @__PURE__ */ mi(e, t));
};
$e[ue.UNDIRECTED_EDGE] = function(r10, e) {
  var t = r10.nodes[0], a = r10.nodes[1], n = /* @__PURE__ */ e.source(), i = /* @__PURE__ */ e.target();
  return Ne(t, n) && Ne(a, i) || Ne(a, n) && Ne(t, i);
};
$e[ue.NODE_NEIGHBOR] = function(r10, e) {
  return Ne(r10.node, e) && e.neighborhood().some(function(t) {
    return t.isNode() && Ne(r10.neighbor, t);
  });
};
$e[ue.DIRECTED_EDGE] = function(r10, e) {
  return Ne(r10.source, /* @__PURE__ */ e.source()) && Ne(r10.target, /* @__PURE__ */ e.target());
};
$e[ue.NODE_SOURCE] = function(r10, e) {
  return Ne(r10.source, e) && e.outgoers().some(function(t) {
    return t.isNode() && Ne(r10.target, t);
  });
};
$e[ue.NODE_TARGET] = function(r10, e) {
  return Ne(r10.target, e) && e.incomers().some(function(t) {
    return t.isNode() && Ne(r10.source, t);
  });
};
$e[ue.CHILD] = function(r10, e) {
  return Ne(r10.child, e) && Ne(r10.parent, /* @__PURE__ */ e.parent());
};
$e[ue.PARENT] = function(r10, e) {
  return Ne(r10.parent, e) && e.children().some(function(t) {
    return Ne(r10.child, t);
  });
};
$e[ue.DESCENDANT] = function(r10, e) {
  return Ne(r10.descendant, e) && e.ancestors().some(function(t) {
    return Ne(r10.ancestor, t);
  });
};
$e[ue.ANCESTOR] = function(r10, e) {
  return Ne(r10.ancestor, e) && e.descendants().some(function(t) {
    return Ne(r10.descendant, t);
  });
};
$e[ue.COMPOUND_SPLIT] = function(r10, e) {
  return Ne(r10.subject, e) && Ne(r10.left, e) && Ne(r10.right, e);
};
$e[ue.TRUE] = function() {
  return true;
};
$e[ue.COLLECTION] = function(r10, e) {
  var t = r10.value;
  return t.has(e);
};
$e[ue.FILTER] = function(r10, e) {
  var t = r10.value;
  return t(e);
};
var oh = /* @__PURE__ */ m$1(function(e) {
  var t = this;
  if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === ue.ID) return e.getElementById(t[0].checks[0].value).collection();
  var a = /* @__PURE__ */ m$1(function(i) {
    for (var s = 0; s < t.length; s++) {
      var o = t[s];
      if (Ne(o, i)) return true;
    }
    return false;
  }, "selectorFunction");
  return t.text() == null && (a = /* @__PURE__ */ m$1(function() {
    return true;
  }, "selectorFunction")), e.filter(a);
}, "filter"), uh = /* @__PURE__ */ m$1(function(e) {
  for (var t = this, a = 0; a < t.length; a++) {
    var n = t[a];
    if (Ne(n, e)) return true;
  }
  return false;
}, "matches"), lh = {
  matches: uh,
  filter: oh
}, et = /* @__PURE__ */ m$1(function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || he(e) && e.match(/^\s*$/) || (pr(e) ? this.addQuery({
    checks: [
      {
        type: ue.COLLECTION,
        value: /* @__PURE__ */ e.collection()
      }
    ]
  }) : Ve(e) ? this.addQuery({
    checks: [
      {
        type: ue.FILTER,
        value: e
      }
    ]
  }) : he(e) ? this.parse(e) || (this.invalid = true) : qe("A selector must be created from a string; found "));
}, "Selector"), rt = et.prototype;
[
  ah,
  lh
].forEach(function(r10) {
  return we(rt, r10);
});
rt.text = function() {
  return this.inputText;
};
rt.size = function() {
  return this.length;
};
rt.eq = function(r10) {
  return this[r10];
};
rt.sameText = function(r10) {
  return !this.invalid && !r10.invalid && this.text() === r10.text();
};
rt.addQuery = function(r10) {
  this[this.length++] = r10;
};
rt.selector = rt.toString;
var Qr = {
  allAre: /* @__PURE__ */ m$1(function(e) {
    var t = new et(e);
    return this.every(function(a) {
      return t.matches(a);
    });
  }, "allAre"),
  is: /* @__PURE__ */ m$1(function(e) {
    var t = new et(e);
    return this.some(function(a) {
      return t.matches(a);
    });
  }, "is"),
  some: /* @__PURE__ */ m$1(function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = t ? e.apply(t, [
        this[a],
        a,
        this
      ]) : e(this[a], a, this);
      if (n) return true;
    }
    return false;
  }, "some"),
  every: /* @__PURE__ */ m$1(function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = t ? e.apply(t, [
        this[a],
        a,
        this
      ]) : e(this[a], a, this);
      if (!n) return false;
    }
    return true;
  }, "every"),
  same: /* @__PURE__ */ m$1(function(e) {
    if (this === e) return true;
    e = /* @__PURE__ */ this.cy().collection(e);
    var t = this.length, a = e.length;
    return t !== a ? false : t === 1 ? this[0] === e[0] : this.every(function(n) {
      return e.hasElementWithId(/* @__PURE__ */ n.id());
    });
  }, "same"),
  anySame: /* @__PURE__ */ m$1(function(e) {
    return e = /* @__PURE__ */ this.cy().collection(e), this.some(function(t) {
      return e.hasElementWithId(/* @__PURE__ */ t.id());
    });
  }, "anySame"),
  allAreNeighbors: /* @__PURE__ */ m$1(function(e) {
    e = /* @__PURE__ */ this.cy().collection(e);
    var t = /* @__PURE__ */ this.neighborhood();
    return e.every(function(a) {
      return t.hasElementWithId(/* @__PURE__ */ a.id());
    });
  }, "allAreNeighbors"),
  contains: /* @__PURE__ */ m$1(function(e) {
    e = /* @__PURE__ */ this.cy().collection(e);
    var t = this;
    return e.every(function(a) {
      return t.hasElementWithId(/* @__PURE__ */ a.id());
    });
  }, "contains")
};
Qr.allAreNeighbours = Qr.allAreNeighbors;
Qr.has = Qr.contains;
Qr.equal = Qr.equals = Qr.same;
var xr = /* @__PURE__ */ m$1(function(e, t) {
  return m$1(function(n, i, s, o) {
    var l = n, u = this, f;
    if (l == null ? f = "" : pr(l) && l.length === 1 && (f = /* @__PURE__ */ l.id()), u.length === 1 && f) {
      var c = u[0]._private, d = c.traversalCache = c.traversalCache || {}, g = d[t] = d[t] || [], h = /* @__PURE__ */ dt(f), m = g[h];
      return m || (g[h] = /* @__PURE__ */ e.call(u, n, i, s, o));
    } else return e.call(u, n, i, s, o);
  }, "traversalCache");
}, "cache"), Nt = {
  parent: /* @__PURE__ */ m$1(function(e) {
    var t = [];
    if (this.length === 1) {
      var a = this[0]._private.parent;
      if (a) return a;
    }
    for (var n = 0; n < this.length; n++) {
      var i = this[n], s = i._private.parent;
      s && t.push(s);
    }
    return this.spawn(t, true).filter(e);
  }, "parent"),
  parents: /* @__PURE__ */ m$1(function(e) {
    for (var t = [], a = /* @__PURE__ */ this.parent(); a.nonempty(); ) {
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        t.push(i);
      }
      a = /* @__PURE__ */ a.parent();
    }
    return this.spawn(t, true).filter(e);
  }, "parents"),
  commonAncestors: /* @__PURE__ */ m$1(function(e) {
    for (var t, a = 0; a < this.length; a++) {
      var n = this[a], i = /* @__PURE__ */ n.parents();
      t = t || i, t = /* @__PURE__ */ t.intersect(i);
    }
    return t.filter(e);
  }, "commonAncestors"),
  orphans: /* @__PURE__ */ m$1(function(e) {
    return this.stdFilter(function(t) {
      return t.isOrphan();
    }).filter(e);
  }, "orphans"),
  nonorphans: /* @__PURE__ */ m$1(function(e) {
    return this.stdFilter(function(t) {
      return t.isChild();
    }).filter(e);
  }, "nonorphans"),
  children: /* @__PURE__ */ xr(function(r10) {
    for (var e = [], t = 0; t < this.length; t++) for (var a = this[t], n = a._private.children, i = 0; i < n.length; i++) e.push(n[i]);
    return this.spawn(e, true).filter(r10);
  }, "children"),
  siblings: /* @__PURE__ */ m$1(function(e) {
    return this.parent().children().not(this).filter(e);
  }, "siblings"),
  isParent: /* @__PURE__ */ m$1(function() {
    var e = this[0];
    if (e) return e.isNode() && e._private.children.length !== 0;
  }, "isParent"),
  isChildless: /* @__PURE__ */ m$1(function() {
    var e = this[0];
    if (e) return e.isNode() && e._private.children.length === 0;
  }, "isChildless"),
  isChild: /* @__PURE__ */ m$1(function() {
    var e = this[0];
    if (e) return e.isNode() && e._private.parent != null;
  }, "isChild"),
  isOrphan: /* @__PURE__ */ m$1(function() {
    var e = this[0];
    if (e) return e.isNode() && e._private.parent == null;
  }, "isOrphan"),
  descendants: /* @__PURE__ */ m$1(function(e) {
    var t = [];
    function a(n) {
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        t.push(s), s.children().nonempty() && a(/* @__PURE__ */ s.children());
      }
    }
    return m$1(a, "add"), a(/* @__PURE__ */ this.children()), this.spawn(t, true).filter(e);
  }, "descendants")
};
function bi(r10, e, t, a) {
  for (var n = [], i = new Vt(), s = /* @__PURE__ */ r10.cy(), o = /* @__PURE__ */ s.hasCompoundNodes(), l = 0; l < r10.length; l++) {
    var u = r10[l];
    t ? n.push(u) : o && a(n, i, u);
  }
  for (; n.length > 0; ) {
    var f = /* @__PURE__ */ n.shift();
    e(f), i.add(/* @__PURE__ */ f.id()), o && a(n, i, f);
  }
  return r10;
}
m$1(bi, "forEachCompound");
function No(r10, e, t) {
  if (t.isParent()) for (var a = t._private.children, n = 0; n < a.length; n++) {
    var i = a[n];
    e.has(/* @__PURE__ */ i.id()) || r10.push(i);
  }
}
m$1(No, "addChildren");
Nt.forEachDown = function(r10) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return bi(this, r10, e, No);
};
function Fo(r10, e, t) {
  if (t.isChild()) {
    var a = t._private.parent;
    e.has(/* @__PURE__ */ a.id()) || r10.push(a);
  }
}
m$1(Fo, "addParent");
Nt.forEachUp = function(r10) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return bi(this, r10, e, Fo);
};
function vh(r10, e, t) {
  Fo(r10, e, t), No(r10, e, t);
}
m$1(vh, "addParentAndChildren");
Nt.forEachUpAndDown = function(r10) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return bi(this, r10, e, vh);
};
Nt.ancestors = Nt.parents;
var pa, Vo;
pa = Vo = {
  data: /* @__PURE__ */ Me.data({
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
  removeData: /* @__PURE__ */ Me.removeData({
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
  scratch: /* @__PURE__ */ Me.data({
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
  removeScratch: /* @__PURE__ */ Me.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  }),
  rscratch: /* @__PURE__ */ Me.data({
    field: "rscratch",
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: true
  }),
  removeRscratch: /* @__PURE__ */ Me.removeData({
    field: "rscratch",
    triggerEvent: false
  }),
  id: /* @__PURE__ */ m$1(function() {
    var e = this[0];
    if (e) return e._private.data.id;
  }, "id")
};
pa.attr = pa.data;
pa.removeAttr = pa.removeData;
var fh = Vo, mn = {};
function In(r10) {
  return function(e) {
    var t = this;
    if (e === void 0 && (e = true), t.length !== 0) if (t.isNode() && !t.removed()) {
      for (var a = 0, n = t[0], i = n._private.edges, s = 0; s < i.length; s++) {
        var o = i[s];
        !e && o.isLoop() || (a += /* @__PURE__ */ r10(n, o));
      }
      return a;
    } else return;
  };
}
m$1(In, "defineDegreeFunction");
we(mn, {
  degree: /* @__PURE__ */ In(function(r10, e) {
    return e.source().same(/* @__PURE__ */ e.target()) ? 2 : 1;
  }),
  indegree: /* @__PURE__ */ In(function(r10, e) {
    return e.target().same(r10) ? 1 : 0;
  }),
  outdegree: /* @__PURE__ */ In(function(r10, e) {
    return e.source().same(r10) ? 1 : 0;
  })
});
function Ct(r10, e) {
  return function(t) {
    for (var a, n = /* @__PURE__ */ this.nodes(), i = 0; i < n.length; i++) {
      var s = n[i], o = /* @__PURE__ */ s[r10](t);
      o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
    }
    return a;
  };
}
m$1(Ct, "defineDegreeBoundsFunction");
we(mn, {
  minDegree: /* @__PURE__ */ Ct("degree", function(r10, e) {
    return r10 < e;
  }),
  maxDegree: /* @__PURE__ */ Ct("degree", function(r10, e) {
    return r10 > e;
  }),
  minIndegree: /* @__PURE__ */ Ct("indegree", function(r10, e) {
    return r10 < e;
  }),
  maxIndegree: /* @__PURE__ */ Ct("indegree", function(r10, e) {
    return r10 > e;
  }),
  minOutdegree: /* @__PURE__ */ Ct("outdegree", function(r10, e) {
    return r10 < e;
  }),
  maxOutdegree: /* @__PURE__ */ Ct("outdegree", function(r10, e) {
    return r10 > e;
  })
});
we(mn, {
  totalDegree: /* @__PURE__ */ m$1(function(e) {
    for (var t = 0, a = /* @__PURE__ */ this.nodes(), n = 0; n < a.length; n++) t += /* @__PURE__ */ a[n].degree(e);
    return t;
  }, "totalDegree")
});
var Br, qo, $o = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    if (!i.locked()) {
      var s = i._private.position, o = {
        x: t.x != null ? t.x - s.x : 0,
        y: t.y != null ? t.y - s.y : 0
      };
      i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
    }
  }
}, "beforePositionSet"), ls = {
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
  beforeGet: /* @__PURE__ */ m$1(function(e) {
    e.updateCompoundBounds();
  }, "beforeGet"),
  beforeSet: /* @__PURE__ */ m$1(function(e, t) {
    $o(e, t, false);
  }, "beforeSet"),
  onSet: /* @__PURE__ */ m$1(function(e) {
    e.dirtyCompoundBoundsCache();
  }, "onSet"),
  canSet: /* @__PURE__ */ m$1(function(e) {
    return !e.locked();
  }, "canSet")
};
Br = qo = {
  position: /* @__PURE__ */ Me.data(ls),
  silentPosition: /* @__PURE__ */ Me.data(/* @__PURE__ */ we({}, ls, {
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: false,
    beforeSet: /* @__PURE__ */ m$1(function(e, t) {
      $o(e, t, true);
    }, "beforeSet"),
    onSet: /* @__PURE__ */ m$1(function(e) {
      e.dirtyCompoundBoundsCache();
    }, "onSet")
  })),
  positions: /* @__PURE__ */ m$1(function(e, t) {
    if (Te(e)) t ? this.silentPosition(e) : this.position(e);
    else if (Ve(e)) {
      var a = e, n = /* @__PURE__ */ this.cy();
      n.startBatch();
      for (var i = 0; i < this.length; i++) {
        var s = this[i], o = void 0;
        (o = /* @__PURE__ */ a(s, i)) && (t ? s.silentPosition(o) : s.position(o));
      }
      n.endBatch();
    }
    return this;
  }, "positions"),
  silentPositions: /* @__PURE__ */ m$1(function(e) {
    return this.positions(e, true);
  }, "silentPositions"),
  shift: /* @__PURE__ */ m$1(function(e, t, a) {
    var n;
    if (Te(e) ? (n = {
      x: ie(e.x) ? e.x : 0,
      y: ie(e.y) ? e.y : 0
    }, a = t) : he(e) && ie(t) && (n = {
      x: 0,
      y: 0
    }, n[e] = t), n != null) {
      var i = /* @__PURE__ */ this.cy();
      i.startBatch();
      for (var s = 0; s < this.length; s++) {
        var o = this[s];
        if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
          var l = /* @__PURE__ */ o.position(), u = {
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
  silentShift: /* @__PURE__ */ m$1(function(e, t) {
    return Te(e) ? this.shift(e, true) : he(e) && ie(t) && this.shift(e, t, true), this;
  }, "silentShift"),
  renderedPosition: /* @__PURE__ */ m$1(function(e, t) {
    var a = this[0], n = /* @__PURE__ */ this.cy(), i = /* @__PURE__ */ n.zoom(), s = /* @__PURE__ */ n.pan(), o = Te(e) ? e : void 0, l = o !== void 0 || t !== void 0 && he(e);
    if (a && a.isNode()) if (l) for (var u = 0; u < this.length; u++) {
      var f = this[u];
      t !== void 0 ? f.position(e, (t - s[e]) / i) : o !== void 0 && f.position(/* @__PURE__ */ co(o, i, s));
    }
    else {
      var c = /* @__PURE__ */ a.position();
      return o = /* @__PURE__ */ dn(c, i, s), e === void 0 ? o : o[e];
    }
    else if (!l) return;
    return this;
  }, "renderedPosition"),
  relativePosition: /* @__PURE__ */ m$1(function(e, t) {
    var a = this[0], n = /* @__PURE__ */ this.cy(), i = Te(e) ? e : void 0, s = i !== void 0 || t !== void 0 && he(e), o = /* @__PURE__ */ n.hasCompoundNodes();
    if (a && a.isNode()) if (s) for (var l = 0; l < this.length; l++) {
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
      var h = /* @__PURE__ */ a.position(), m = o ? a.parent() : null, y = m && m.length > 0, p = y;
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
Br.modelPosition = Br.point = Br.position;
Br.modelPositions = Br.points = Br.positions;
Br.renderedPoint = Br.renderedPosition;
Br.relativePoint = Br.relativePosition;
var ch = qo, Rt, at;
Rt = at = {};
at.renderedBoundingBox = function(r10) {
  var e = /* @__PURE__ */ this.boundingBox(r10), t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ t.zoom(), n = /* @__PURE__ */ t.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, l = e.y2 * a + n.y;
  return {
    x1: i,
    x2: s,
    y1: o,
    y2: l,
    w: s - i,
    h: l - o
  };
};
at.dirtyCompoundBoundsCache = function() {
  var r10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = /* @__PURE__ */ this.cy();
  return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(t) {
    if (t.isParent()) {
      var a = t._private;
      a.compoundBoundsClean = false, a.bbCache = null, r10 || t.emitAndNotify("bounds");
    }
  }), this);
};
at.updateCompoundBounds = function() {
  var r10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = /* @__PURE__ */ this.cy();
  if (!e.styleEnabled() || !e.hasCompoundNodes()) return this;
  if (!r10 && e.batching()) return this;
  function t(s) {
    if (!s.isParent()) return;
    var o = s._private, l = /* @__PURE__ */ s.children(), u = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
      width: {
        val: s.pstyle("min-width").pfValue,
        left: /* @__PURE__ */ s.pstyle("min-width-bias-left"),
        right: /* @__PURE__ */ s.pstyle("min-width-bias-right")
      },
      height: {
        val: s.pstyle("min-height").pfValue,
        top: /* @__PURE__ */ s.pstyle("min-height-bias-top"),
        bottom: /* @__PURE__ */ s.pstyle("min-height-bias-bottom")
      }
    }, c = /* @__PURE__ */ l.boundingBox({
      includeLabels: u,
      includeOverlays: false,
      useCache: false
    }), d = o.position;
    (c.w === 0 || c.h === 0) && (c = {
      w: s.pstyle("width").pfValue,
      h: s.pstyle("height").pfValue
    }, c.x1 = d.x - c.w / 2, c.x2 = d.x + c.w / 2, c.y1 = d.y - c.h / 2, c.y2 = d.y + c.h / 2);
    function g(S, L, B) {
      var M = 0, A = 0, P = L + B;
      return S > 0 && P > 0 && (M = L / P * S, A = B / P * S), {
        biasDiff: M,
        biasComplementDiff: A
      };
    }
    m$1(g, "computeBiasValues");
    function h(S, L, B, M) {
      if (B.units === "%") switch (M) {
        case "width":
          return S > 0 ? B.pfValue * S : 0;
        case "height":
          return L > 0 ? B.pfValue * L : 0;
        case "average":
          return S > 0 && L > 0 ? B.pfValue * (S + L) / 2 : 0;
        case "min":
          return S > 0 && L > 0 ? S > L ? B.pfValue * L : B.pfValue * S : 0;
        case "max":
          return S > 0 && L > 0 ? S > L ? B.pfValue * S : B.pfValue * L : 0;
        default:
          return 0;
      }
      else return B.units === "px" ? B.pfValue : 0;
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
    var w = /* @__PURE__ */ g(f.width.val - c.w, m, y), x = w.biasDiff, T = w.biasComplementDiff, C = /* @__PURE__ */ g(f.height.val - c.h, p, b1), E = C.biasDiff, k = C.biasComplementDiff;
    o.autoPadding = /* @__PURE__ */ h(c.w, c.h, /* @__PURE__ */ s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = /* @__PURE__ */ Math.max(c.w, f.width.val), d.x = (-x + c.x1 + c.x2 + T) / 2, o.autoHeight = /* @__PURE__ */ Math.max(c.h, f.height.val), d.y = (-E + c.y1 + c.y2 + k) / 2;
  }
  m$1(t, "update");
  for (var a = 0; a < this.length; a++) {
    var n = this[a], i = n._private;
    (!i.compoundBoundsClean || r10) && (t(n), e.batching() || (i.compoundBoundsClean = true));
  }
  return this;
};
var wr = /* @__PURE__ */ m$1(function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, "noninf"), kr = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
  n - t === 0 || i - a === 0 || t == null || a == null || n == null || i == null || (e.x1 = t < e.x1 ? t : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, "updateBounds"), ut = /* @__PURE__ */ m$1(function(e, t) {
  return t == null ? e : kr(e, t.x1, t.y1, t.x2, t.y2);
}, "updateBoundsFromBox"), jt = /* @__PURE__ */ m$1(function(e, t, a) {
  return Pr(e, t, a);
}, "prefixedProperty"), za = /* @__PURE__ */ m$1(function(e, t, a) {
  if (!t.cy().headless()) {
    var n = t._private, i = n.rstyle, s = i.arrowWidth / 2, o = t.pstyle(a + "-arrow-shape").value, l, u;
    if (o !== "none") {
      a === "source" ? (l = i.srcX, u = i.srcY) : a === "target" ? (l = i.tgtX, u = i.tgtY) : (l = i.midX, u = i.midY);
      var f = n.arrowBounds = n.arrowBounds || {}, c = f[a] = f[a] || {};
      c.x1 = l - s, c.y1 = u - s, c.x2 = l + s, c.y2 = u + s, c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, Ha(c, 1), kr(e, c.x1, c.y1, c.x2, c.y2);
    }
  }
}, "updateBoundsFromArrow"), zn = /* @__PURE__ */ m$1(function(e, t, a) {
  if (!t.cy().headless()) {
    var n;
    a ? n = a + "-" : n = "";
    var i = t._private, s = i.rstyle, o = t.pstyle(n + "label").strValue;
    if (o) {
      var l = /* @__PURE__ */ t.pstyle("text-halign"), u = /* @__PURE__ */ t.pstyle("text-valign"), f = /* @__PURE__ */ jt(s, "labelWidth", a), c = /* @__PURE__ */ jt(s, "labelHeight", a), d = /* @__PURE__ */ jt(s, "labelX", a), g = /* @__PURE__ */ jt(s, "labelY", a), h = t.pstyle(n + "text-margin-x").pfValue, m = t.pstyle(n + "text-margin-y").pfValue, y = /* @__PURE__ */ t.isEdge(), p = /* @__PURE__ */ t.pstyle(n + "text-rotation"), b1 = t.pstyle("text-outline-width").pfValue, w = t.pstyle("text-border-width").pfValue, x = w / 2, T = t.pstyle("text-background-padding").pfValue, C = 2, E = c, k = f, S = k / 2, L = E / 2, B, M, A, P;
      if (y) B = d - S, M = d + S, A = g - L, P = g + L;
      else {
        switch (l.value) {
          case "left":
            B = d - k, M = d;
            break;
          case "center":
            B = d - S, M = d + S;
            break;
          case "right":
            B = d, M = d + k;
            break;
        }
        switch (u.value) {
          case "top":
            A = g - E, P = g;
            break;
          case "center":
            A = g - L, P = g + L;
            break;
          case "bottom":
            A = g, P = g + E;
            break;
        }
      }
      B += h - Math.max(b1, x) - T - C, M += h + Math.max(b1, x) + T + C, A += m - Math.max(b1, x) - T - C, P += m + Math.max(b1, x) + T + C;
      var I = a || "main", R = i.labelBounds, O = R[I] = R[I] || {};
      O.x1 = B, O.y1 = A, O.x2 = M, O.y2 = P, O.w = M - B, O.h = P - A;
      var z = y && p.strValue === "autorotate", $ = p.pfValue != null && p.pfValue !== 0;
      if (z || $) {
        var H = z ? jt(i.rstyle, "labelAngle", a) : p.pfValue, V = /* @__PURE__ */ Math.cos(H), F = /* @__PURE__ */ Math.sin(H), U = (B + M) / 2, J = (A + P) / 2;
        if (!y) {
          switch (l.value) {
            case "left":
              U = M;
              break;
            case "right":
              U = B;
              break;
          }
          switch (u.value) {
            case "top":
              J = P;
              break;
            case "bottom":
              J = A;
              break;
          }
        }
        var j = /* @__PURE__ */ m$1(function(ge, ne) {
          return ge = ge - U, ne = ne - J, {
            x: ge * V - ne * F + U,
            y: ge * F + ne * V + J
          };
        }, "rotate"), ee = /* @__PURE__ */ j(B, A), re = /* @__PURE__ */ j(B, P), Y = /* @__PURE__ */ j(M, A), N = /* @__PURE__ */ j(M, P);
        B = /* @__PURE__ */ Math.min(ee.x, re.x, Y.x, N.x), M = /* @__PURE__ */ Math.max(ee.x, re.x, Y.x, N.x), A = /* @__PURE__ */ Math.min(ee.y, re.y, Y.y, N.y), P = /* @__PURE__ */ Math.max(ee.y, re.y, Y.y, N.y);
      }
      var X = I + "Rot", Z = R[X] = R[X] || {};
      Z.x1 = B, Z.y1 = A, Z.x2 = M, Z.y2 = P, Z.w = M - B, Z.h = P - A, kr(e, B, A, M, P), kr(i.labelBounds.all, B, A, M, P);
    }
    return e;
  }
}, "updateBoundsFromLabel"), dh = /* @__PURE__ */ m$1(function(e, t) {
  if (!t.cy().headless()) {
    var a = t.pstyle("outline-opacity").value, n = t.pstyle("outline-width").value;
    if (a > 0 && n > 0) {
      var i = t.pstyle("outline-offset").value, s = t.pstyle("shape").value, o = n + i, l = (e.w + o * 2) / e.w, u = (e.h + o * 2) / e.h, f = 0, c = 0;
      [
        "diamond",
        "pentagon",
        "round-triangle"
      ].includes(s) ? (l = (e.w + o * 2.4) / e.w, c = -o / 3.6) : [
        "concave-hexagon",
        "rhomboid",
        "right-rhomboid"
      ].includes(s) ? l = (e.w + o * 2.4) / e.w : s === "star" ? (l = (e.w + o * 2.8) / e.w, u = (e.h + o * 2.6) / e.h, c = -o / 3.8) : s === "triangle" ? (l = (e.w + o * 2.8) / e.w, u = (e.h + o * 2.4) / e.h, c = -o / 1.4) : s === "vee" && (l = (e.w + o * 4.4) / e.w, u = (e.h + o * 3.8) / e.h, c = -o * 0.5);
      var d = e.h * u - e.h, g = e.w * l - e.w;
      if (Ga(e, [
        /* @__PURE__ */ Math.ceil(d / 2),
        /* @__PURE__ */ Math.ceil(g / 2)
      ]), f != 0 || c !== 0) {
        var h = /* @__PURE__ */ Rv(e, f, c);
        go(e, h);
      }
    }
  }
}, "updateBoundsFromOutline"), hh = /* @__PURE__ */ m$1(function(e, t) {
  var a = e._private.cy, n = /* @__PURE__ */ a.styleEnabled(), i = /* @__PURE__ */ a.headless(), s = /* @__PURE__ */ gr(), o = e._private, l = /* @__PURE__ */ e.isNode(), u = /* @__PURE__ */ e.isEdge(), f, c, d, g, h, m, y = o.rstyle, p = l && n ? e.pstyle("bounds-expansion").pfValue : [
    0
  ], b1 = /* @__PURE__ */ m$1(function(le) {
    return le.pstyle("display").value !== "none";
  }, "isDisplayed"), w = !n || b1(e) && (!u || b1(/* @__PURE__ */ e.source()) && b1(/* @__PURE__ */ e.target()));
  if (w) {
    var x = 0, T = 0;
    n && t.includeOverlays && (x = e.pstyle("overlay-opacity").value, x !== 0 && (T = e.pstyle("overlay-padding").value));
    var C = 0, E = 0;
    n && t.includeUnderlays && (C = e.pstyle("underlay-opacity").value, C !== 0 && (E = e.pstyle("underlay-padding").value));
    var k = /* @__PURE__ */ Math.max(T, E), S = 0, L = 0;
    if (n && (S = e.pstyle("width").pfValue, L = S / 2), l && t.includeNodes) {
      var B = /* @__PURE__ */ e.position();
      h = B.x, m = B.y;
      var M = /* @__PURE__ */ e.outerWidth(), A = M / 2, P = /* @__PURE__ */ e.outerHeight(), I = P / 2;
      f = h - A, c = h + A, d = m - I, g = m + I, kr(s, f, d, c, g), n && t.includeOutlines && dh(s, e);
    } else if (u && t.includeEdges) if (n && !i) {
      var R = e.pstyle("curve-style").strValue;
      if (f = /* @__PURE__ */ Math.min(y.srcX, y.midX, y.tgtX), c = /* @__PURE__ */ Math.max(y.srcX, y.midX, y.tgtX), d = /* @__PURE__ */ Math.min(y.srcY, y.midY, y.tgtY), g = /* @__PURE__ */ Math.max(y.srcY, y.midY, y.tgtY), f -= L, c += L, d -= L, g += L, kr(s, f, d, c, g), R === "haystack") {
        var O = y.haystackPts;
        if (O && O.length === 2) {
          if (f = O[0].x, d = O[0].y, c = O[1].x, g = O[1].y, f > c) {
            var z = f;
            f = c, c = z;
          }
          if (d > g) {
            var $ = d;
            d = g, g = $;
          }
          kr(s, f - L, d - L, c + L, g + L);
        }
      } else if (R === "bezier" || R === "unbundled-bezier" || R.endsWith("segments") || R.endsWith("taxi")) {
        var H;
        switch (R) {
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
        if (H != null) for (var V = 0; V < H.length; V++) {
          var F = H[V];
          f = F.x - L, c = F.x + L, d = F.y - L, g = F.y + L, kr(s, f, d, c, g);
        }
      }
    } else {
      var U = /* @__PURE__ */ e.source(), J = /* @__PURE__ */ U.position(), j = /* @__PURE__ */ e.target(), ee = /* @__PURE__ */ j.position();
      if (f = J.x, c = ee.x, d = J.y, g = ee.y, f > c) {
        var re = f;
        f = c, c = re;
      }
      if (d > g) {
        var Y = d;
        d = g, g = Y;
      }
      f -= L, c += L, d -= L, g += L, kr(s, f, d, c, g);
    }
    if (n && t.includeEdges && u && (za(s, e, "mid-source"), za(s, e, "mid-target"), za(s, e, "source"), za(s, e, "target")), n) {
      var N = e.pstyle("ghost").value === "yes";
      if (N) {
        var X = e.pstyle("ghost-offset-x").pfValue, Z = e.pstyle("ghost-offset-y").pfValue;
        kr(s, s.x1 + X, s.y1 + Z, s.x2 + X, s.y2 + Z);
      }
    }
    var oe = o.bodyBounds = o.bodyBounds || {};
    Hi(oe, s), Ga(oe, p), Ha(oe, 1), n && (f = s.x1, c = s.x2, d = s.y1, g = s.y2, kr(s, f - k, d - k, c + k, g + k));
    var ge = o.overlayBounds = o.overlayBounds || {};
    Hi(ge, s), Ga(ge, p), Ha(ge, 1);
    var ne = o.labelBounds = o.labelBounds || {};
    ne.all != null ? Av(ne.all) : ne.all = /* @__PURE__ */ gr(), n && t.includeLabels && (t.includeMainLabels && zn(s, e, null), u && (t.includeSourceLabels && zn(s, e, "source"), t.includeTargetLabels && zn(s, e, "target")));
  }
  return s.x1 = /* @__PURE__ */ wr(s.x1), s.y1 = /* @__PURE__ */ wr(s.y1), s.x2 = /* @__PURE__ */ wr(s.x2), s.y2 = /* @__PURE__ */ wr(s.y2), s.w = /* @__PURE__ */ wr(s.x2 - s.x1), s.h = /* @__PURE__ */ wr(s.y2 - s.y1), s.w > 0 && s.h > 0 && w && (Ga(s, p), Ha(s, 1)), s;
}, "boundingBoxImpl"), Ho = /* @__PURE__ */ m$1(function(e) {
  var t = 0, a = /* @__PURE__ */ m$1(function(s) {
    return (s ? 1 : 0) << t++;
  }, "tf"), n = 0;
  return n += /* @__PURE__ */ a(e.incudeNodes), n += /* @__PURE__ */ a(e.includeEdges), n += /* @__PURE__ */ a(e.includeLabels), n += /* @__PURE__ */ a(e.includeMainLabels), n += /* @__PURE__ */ a(e.includeSourceLabels), n += /* @__PURE__ */ a(e.includeTargetLabels), n += /* @__PURE__ */ a(e.includeOverlays), n += /* @__PURE__ */ a(e.includeOutlines), n;
}, "getKey"), Go = /* @__PURE__ */ m$1(function(e) {
  if (e.isEdge()) {
    var t = /* @__PURE__ */ e.source().position(), a = /* @__PURE__ */ e.target().position(), n = /* @__PURE__ */ m$1(function(s) {
      return Math.round(s);
    }, "r");
    return jl([
      /* @__PURE__ */ n(t.x),
      /* @__PURE__ */ n(t.y),
      /* @__PURE__ */ n(a.x),
      /* @__PURE__ */ n(a.y)
    ]);
  } else return 0;
}, "getBoundingBoxPosKey"), vs = /* @__PURE__ */ m$1(function(e, t) {
  var a = e._private, n, i = /* @__PURE__ */ e.isEdge(), s = t == null ? fs : Ho(t), o = s === fs, l = /* @__PURE__ */ Go(e), u = a.bbCachePosKey === l, f = t.useCache && u, c = /* @__PURE__ */ m$1(function(m) {
    return m._private.bbCache == null || m._private.styleDirty;
  }, "isDirty"), d = !f || c(e) || i && c(/* @__PURE__ */ e.source()) || c(/* @__PURE__ */ e.target());
  if (d ? (u || e.recalculateRenderedStyle(f), n = /* @__PURE__ */ hh(e, ya), a.bbCache = n, a.bbCachePosKey = l) : n = a.bbCache, !o) {
    var g = /* @__PURE__ */ e.isNode();
    n = /* @__PURE__ */ gr(), (t.includeNodes && g || t.includeEdges && !g) && (t.includeOverlays ? ut(n, a.overlayBounds) : ut(n, a.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!i || t.includeSourceLabels && t.includeTargetLabels) ? ut(n, a.labelBounds.all) : (t.includeMainLabels && ut(n, a.labelBounds.mainRot), t.includeSourceLabels && ut(n, a.labelBounds.sourceRot), t.includeTargetLabels && ut(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
  }
  return n;
}, "cachedBoundingBoxImpl"), ya = {
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
}, fs = /* @__PURE__ */ Ho(ya), cs = /* @__PURE__ */ rr(ya);
at.boundingBox = function(r10) {
  var e;
  if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (r10 === void 0 || r10.useCache === void 0 || r10.useCache === true)) r10 === void 0 ? r10 = ya : r10 = /* @__PURE__ */ cs(r10), e = /* @__PURE__ */ vs(this[0], r10);
  else {
    e = /* @__PURE__ */ gr(), r10 = r10 || ya;
    var t = /* @__PURE__ */ cs(r10), a = this, n = /* @__PURE__ */ a.cy(), i = /* @__PURE__ */ n.styleEnabled();
    if (i) for (var s = 0; s < a.length; s++) {
      var o = a[s], l = o._private, u = /* @__PURE__ */ Go(o), f = l.bbCachePosKey === u, c = t.useCache && f && !l.styleDirty;
      o.recalculateRenderedStyle(c);
    }
    this.updateCompoundBounds(!r10.useCache);
    for (var d = 0; d < a.length; d++) {
      var g = a[d];
      ut(e, /* @__PURE__ */ vs(g, t));
    }
  }
  return e.x1 = /* @__PURE__ */ wr(e.x1), e.y1 = /* @__PURE__ */ wr(e.y1), e.x2 = /* @__PURE__ */ wr(e.x2), e.y2 = /* @__PURE__ */ wr(e.y2), e.w = /* @__PURE__ */ wr(e.x2 - e.x1), e.h = /* @__PURE__ */ wr(e.y2 - e.y1), e;
};
at.dirtyBoundingBoxCache = function() {
  for (var r10 = 0; r10 < this.length; r10++) {
    var e = this[r10]._private;
    e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
at.boundingBoxAt = function(r10) {
  var e = /* @__PURE__ */ this.nodes(), t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ t.hasCompoundNodes(), n = /* @__PURE__ */ t.collection();
  if (a && (n = /* @__PURE__ */ e.filter(function(u) {
    return u.isParent();
  }), e = /* @__PURE__ */ e.not(n)), Te(r10)) {
    var i = r10;
    r10 = /* @__PURE__ */ m$1(function() {
      return i;
    }, "fn");
  }
  var s = /* @__PURE__ */ m$1(function(f, c) {
    return f._private.bbAtOldPos = /* @__PURE__ */ r10(f, c);
  }, "storeOldPos"), o = /* @__PURE__ */ m$1(function(f) {
    return f._private.bbAtOldPos;
  }, "getOldPos");
  t.startBatch(), e.forEach(s).silentPositions(r10), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(true));
  var l = /* @__PURE__ */ Lv(/* @__PURE__ */ this.boundingBox({
    useCache: false
  }));
  return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(true)), t.endBatch(), l;
};
Rt.boundingbox = Rt.bb = Rt.boundingBox;
Rt.renderedBoundingbox = Rt.renderedBoundingBox;
var gh = at, ia, Sa;
ia = Sa = {};
var Ko = /* @__PURE__ */ m$1(function(e) {
  e.uppercaseName = /* @__PURE__ */ Ii(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = /* @__PURE__ */ Ii(e.outerName), ia[e.name] = /* @__PURE__ */ m$1(function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a) if (s) {
      if (a.isParent()) return a.updateCompoundBounds(), n[e.autoName] || 0;
      var o = /* @__PURE__ */ a.pstyle(e.name);
      switch (o.strValue) {
        case "label":
          return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
        default:
          return o.pfValue;
      }
    } else return 1;
  }, "dimImpl"), ia["outer" + e.uppercaseName] = /* @__PURE__ */ m$1(function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a) if (s) {
      var o = /* @__PURE__ */ a[e.name](), l = a.pstyle("border-width").pfValue, u = 2 * a.padding();
      return o + l + u;
    } else return 1;
  }, "outerDimImpl"), ia["rendered" + e.uppercaseName] = /* @__PURE__ */ m$1(function() {
    var a = this[0];
    if (a) {
      var n = /* @__PURE__ */ a[e.name]();
      return n * this.cy().zoom();
    }
  }, "renderedDimImpl"), ia["rendered" + e.uppercaseOuterName] = /* @__PURE__ */ m$1(function() {
    var a = this[0];
    if (a) {
      var n = /* @__PURE__ */ a[e.outerName]();
      return n * this.cy().zoom();
    }
  }, "renderedOuterDimImpl");
}, "defineDimFns");
Ko({
  name: "width"
});
Ko({
  name: "height"
});
Sa.padding = function() {
  var r10 = this[0], e = r10._private;
  return r10.isParent() ? (r10.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : r10.pstyle("padding").pfValue) : r10.pstyle("padding").pfValue;
};
Sa.paddedHeight = function() {
  var r10 = this[0];
  return r10.height() + 2 * r10.padding();
};
Sa.paddedWidth = function() {
  var r10 = this[0];
  return r10.width() + 2 * r10.padding();
};
var ph = Sa, yh = /* @__PURE__ */ m$1(function(e, t) {
  if (e.isEdge()) return t(e);
}, "ifEdge"), mh = /* @__PURE__ */ m$1(function(e, t) {
  if (e.isEdge()) {
    var a = /* @__PURE__ */ e.cy();
    return dn(/* @__PURE__ */ t(e), /* @__PURE__ */ a.zoom(), /* @__PURE__ */ a.pan());
  }
}, "ifEdgeRenderedPosition"), bh = /* @__PURE__ */ m$1(function(e, t) {
  if (e.isEdge()) {
    var a = /* @__PURE__ */ e.cy(), n = /* @__PURE__ */ a.pan(), i = /* @__PURE__ */ a.zoom();
    return t(e).map(function(s) {
      return dn(s, i, n);
    });
  }
}, "ifEdgeRenderedPositions"), wh = /* @__PURE__ */ m$1(function(e) {
  return e.renderer().getControlPoints(e);
}, "controlPoints"), xh = /* @__PURE__ */ m$1(function(e) {
  return e.renderer().getSegmentPoints(e);
}, "segmentPoints"), Eh = /* @__PURE__ */ m$1(function(e) {
  return e.renderer().getSourceEndpoint(e);
}, "sourceEndpoint"), Ch = /* @__PURE__ */ m$1(function(e) {
  return e.renderer().getTargetEndpoint(e);
}, "targetEndpoint"), Sh = /* @__PURE__ */ m$1(function(e) {
  return e.renderer().getEdgeMidpoint(e);
}, "midpoint"), ds = {
  controlPoints: {
    get: wh,
    mult: true
  },
  segmentPoints: {
    get: xh,
    mult: true
  },
  sourceEndpoint: {
    get: Eh
  },
  targetEndpoint: {
    get: Ch
  },
  midpoint: {
    get: Sh
  }
}, Th = /* @__PURE__ */ m$1(function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
}, "renderedName"), Dh = /* @__PURE__ */ Object.keys(ds).reduce(function(r10, e) {
  var t = ds[e], a = /* @__PURE__ */ Th(e);
  return r10[e] = function() {
    return yh(this, t.get);
  }, t.mult ? r10[a] = function() {
    return bh(this, t.get);
  } : r10[a] = function() {
    return mh(this, t.get);
  }, r10;
}, {}), kh = /* @__PURE__ */ we({}, ch, gh, ph, Dh);
var Wo = /* @__PURE__ */ m$1(function(e, t) {
  this.recycle(e, t);
}, "Event");
function ea() {
  return false;
}
m$1(ea, "returnFalse");
function Na() {
  return true;
}
m$1(Na, "returnTrue");
Wo.prototype = {
  instanceString: /* @__PURE__ */ m$1(function() {
    return "event";
  }, "instanceString"),
  recycle: /* @__PURE__ */ m$1(function(e, t) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = ea, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Na : ea) : e != null && e.type ? t = e : this.type = e, t != null && (this.originalEvent = t.originalEvent, this.type = t.type != null ? t.type : this.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var a = this.position, n = /* @__PURE__ */ this.cy.zoom(), i = /* @__PURE__ */ this.cy.pan();
      this.renderedPosition = {
        x: a.x * n + i.x,
        y: a.y * n + i.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  }, "recycle"),
  preventDefault: /* @__PURE__ */ m$1(function() {
    this.isDefaultPrevented = Na;
    var e = this.originalEvent;
    e && e.preventDefault && e.preventDefault();
  }, "preventDefault"),
  stopPropagation: /* @__PURE__ */ m$1(function() {
    this.isPropagationStopped = Na;
    var e = this.originalEvent;
    e && e.stopPropagation && e.stopPropagation();
  }, "stopPropagation"),
  stopImmediatePropagation: /* @__PURE__ */ m$1(function() {
    this.isImmediatePropagationStopped = Na, this.stopPropagation();
  }, "stopImmediatePropagation"),
  isDefaultPrevented: ea,
  isPropagationStopped: ea,
  isImmediatePropagationStopped: ea
};
var Uo = /^([^.]+)(\.(?:[^.]+))?$/, Ph = ".*", Yo = {
  qualifierCompare: /* @__PURE__ */ m$1(function(e, t) {
    return e === t;
  }, "qualifierCompare"),
  eventMatches: /* @__PURE__ */ m$1(function() {
    return true;
  }, "eventMatches"),
  addEventFields: /* @__PURE__ */ m$1(function() {
  }, "addEventFields"),
  callbackContext: /* @__PURE__ */ m$1(function(e) {
    return e;
  }, "callbackContext"),
  beforeEmit: /* @__PURE__ */ m$1(function() {
  }, "beforeEmit"),
  afterEmit: /* @__PURE__ */ m$1(function() {
  }, "afterEmit"),
  bubble: /* @__PURE__ */ m$1(function() {
    return false;
  }, "bubble"),
  parent: /* @__PURE__ */ m$1(function() {
    return null;
  }, "parent"),
  context: null
}, hs = /* @__PURE__ */ Object.keys(Yo), Bh = {};
function bn() {
  for (var r10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bh, e = arguments.length > 1 ? arguments[1] : void 0, t = 0; t < hs.length; t++) {
    var a = hs[t];
    this[a] = r10[a] || Yo[a];
  }
  this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
m$1(bn, "Emitter");
var tt = bn.prototype, Xo = /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o) {
  Ve(n) && (i = n, n = null), o && (s == null ? s = o : s = /* @__PURE__ */ we({}, s, o));
  for (var l = Oe(a) ? a : a.split(/\s+/), u = 0; u < l.length; u++) {
    var f = l[u];
    if (!_r(f)) {
      var c = /* @__PURE__ */ f.match(Uo);
      if (c) {
        var d = c[1], g = c[2] ? c[2] : null, h = /* @__PURE__ */ t(e, f, d, g, n, i, s);
        if (h === false) break;
      }
    }
  }
}, "forEachEvent"), gs = /* @__PURE__ */ m$1(function(e, t) {
  return e.addEventFields(e.context, t), new Wo(t.type, t);
}, "makeEventObj"), Mh = /* @__PURE__ */ m$1(function(e, t, a) {
  if (Zu(a)) {
    t(e, a);
    return;
  } else if (Te(a)) {
    t(e, /* @__PURE__ */ gs(e, a));
    return;
  }
  for (var n = Oe(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
    var s = n[i];
    if (!_r(s)) {
      var o = /* @__PURE__ */ s.match(Uo);
      if (o) {
        var l = o[1], u = o[2] ? o[2] : null, f = /* @__PURE__ */ gs(e, {
          type: l,
          namespace: u,
          target: e.context
        });
        t(e, f);
      }
    }
  }
}, "forEachEventObj");
tt.on = tt.addListener = function(r10, e, t, a, n) {
  return Xo(this, function(i, s, o, l, u, f, c) {
    Ve(f) && i.listeners.push({
      event: s,
      callback: f,
      type: o,
      namespace: l,
      qualifier: u,
      conf: c
    });
  }, r10, e, t, a, n), this;
};
tt.one = function(r10, e, t, a) {
  return this.on(r10, e, t, a, {
    one: true
  });
};
tt.removeListener = tt.off = function(r10, e, t, a) {
  var n = this;
  this.emitting !== 0 && (this.listeners = /* @__PURE__ */ nv(this.listeners));
  for (var i = this.listeners, s = /* @__PURE__ */ m$1(function(u) {
    var f = i[u];
    Xo(n, function(c, d, g, h, m, y) {
      if ((f.type === g || r10 === "*") && (!h && f.namespace !== ".*" || f.namespace === h) && (!m || c.qualifierCompare(f.qualifier, m)) && (!y || f.callback === y)) return i.splice(u, 1), false;
    }, r10, e, t, a);
  }, "_loop"), o = i.length - 1; o >= 0; o--) s(o);
  return this;
};
tt.removeAllListeners = function() {
  return this.removeListener("*");
};
tt.emit = tt.trigger = function(r10, e, t) {
  var a = this.listeners, n = a.length;
  return this.emitting++, Oe(e) || (e = [
    e
  ]), Mh(this, function(i, s) {
    t != null && (a = [
      {
        event: s.event,
        type: s.type,
        namespace: s.namespace,
        callback: t
      }
    ], n = a.length);
    for (var o = /* @__PURE__ */ m$1(function(f) {
      var c = a[f];
      if (c.type === s.type && (!c.namespace || c.namespace === s.namespace || c.namespace === Ph) && i.eventMatches(i.context, c, s)) {
        var d = [
          s
        ];
        e != null && sv(d, e), i.beforeEmit(i.context, c, s), c.conf && c.conf.one && (i.listeners = /* @__PURE__ */ i.listeners.filter(function(m) {
          return m !== c;
        }));
        var g = /* @__PURE__ */ i.callbackContext(i.context, c, s), h = /* @__PURE__ */ c.callback.apply(g, d);
        i.afterEmit(i.context, c, s), h === false && (s.stopPropagation(), s.preventDefault());
      }
    }, "_loop2"), l = 0; l < n; l++) o(l);
    i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
  }, r10), this.emitting--, this;
};
var Lh = {
  qualifierCompare: /* @__PURE__ */ m$1(function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  }, "qualifierCompare"),
  eventMatches: /* @__PURE__ */ m$1(function(e, t, a) {
    var n = t.qualifier;
    return n != null ? e !== a.target && xa(a.target) && n.matches(a.target) : true;
  }, "eventMatches"),
  addEventFields: /* @__PURE__ */ m$1(function(e, t) {
    t.cy = /* @__PURE__ */ e.cy(), t.target = e;
  }, "addEventFields"),
  callbackContext: /* @__PURE__ */ m$1(function(e, t, a) {
    return t.qualifier != null ? a.target : e;
  }, "callbackContext"),
  beforeEmit: /* @__PURE__ */ m$1(function(e, t) {
    t.conf && t.conf.once && t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
  }, "beforeEmit"),
  bubble: /* @__PURE__ */ m$1(function() {
    return true;
  }, "bubble"),
  parent: /* @__PURE__ */ m$1(function(e) {
    return e.isChild() ? e.parent() : e.cy();
  }, "parent")
}, Fa = /* @__PURE__ */ m$1(function(e) {
  return he(e) ? new et(e) : e;
}, "argSelector"), Zo = {
  createEmitter: /* @__PURE__ */ m$1(function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e], a = t._private;
      a.emitter || (a.emitter = new bn(Lh, t));
    }
    return this;
  }, "createEmitter"),
  emitter: /* @__PURE__ */ m$1(function() {
    return this._private.emitter;
  }, "emitter"),
  on: /* @__PURE__ */ m$1(function(e, t, a) {
    for (var n = /* @__PURE__ */ Fa(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a);
    }
    return this;
  }, "on"),
  removeListener: /* @__PURE__ */ m$1(function(e, t, a) {
    for (var n = /* @__PURE__ */ Fa(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().removeListener(e, n, a);
    }
    return this;
  }, "removeListener"),
  removeAllListeners: /* @__PURE__ */ m$1(function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e];
      t.emitter().removeAllListeners();
    }
    return this;
  }, "removeAllListeners"),
  one: /* @__PURE__ */ m$1(function(e, t, a) {
    for (var n = /* @__PURE__ */ Fa(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().one(e, n, a);
    }
    return this;
  }, "one"),
  once: /* @__PURE__ */ m$1(function(e, t, a) {
    for (var n = /* @__PURE__ */ Fa(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a, {
        once: true,
        onceCollection: this
      });
    }
  }, "once"),
  emit: /* @__PURE__ */ m$1(function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = this[a];
      n.emitter().emit(e, t);
    }
    return this;
  }, "emit"),
  emitAndNotify: /* @__PURE__ */ m$1(function(e, t) {
    if (this.length !== 0) return this.cy().notify(e, this), this.emit(e, t), this;
  }, "emitAndNotify")
};
Me.eventAliasesOn(Zo);
var Qo = {
  nodes: /* @__PURE__ */ m$1(function(e) {
    return this.filter(function(t) {
      return t.isNode();
    }).filter(e);
  }, "nodes"),
  edges: /* @__PURE__ */ m$1(function(e) {
    return this.filter(function(t) {
      return t.isEdge();
    }).filter(e);
  }, "edges"),
  byGroup: /* @__PURE__ */ m$1(function() {
    for (var e = /* @__PURE__ */ this.spawn(), t = /* @__PURE__ */ this.spawn(), a = 0; a < this.length; a++) {
      var n = this[a];
      n.isNode() ? e.push(n) : t.push(n);
    }
    return {
      nodes: e,
      edges: t
    };
  }, "byGroup"),
  filter: /* @__PURE__ */ m$1(function(e, t) {
    if (e === void 0) return this;
    if (he(e) || pr(e)) return new et(e).filter(this);
    if (Ve(e)) {
      for (var a = /* @__PURE__ */ this.spawn(), n = this, i = 0; i < n.length; i++) {
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
  not: /* @__PURE__ */ m$1(function(e) {
    if (e) {
      he(e) && (e = /* @__PURE__ */ this.filter(e));
      for (var t = /* @__PURE__ */ this.spawn(), a = 0; a < this.length; a++) {
        var n = this[a], i = /* @__PURE__ */ e.has(n);
        i || t.push(n);
      }
      return t;
    } else return this;
  }, "not"),
  absoluteComplement: /* @__PURE__ */ m$1(function() {
    var e = /* @__PURE__ */ this.cy();
    return e.mutableElements().not(this);
  }, "absoluteComplement"),
  intersect: /* @__PURE__ */ m$1(function(e) {
    if (he(e)) {
      var t = e;
      return this.filter(t);
    }
    for (var a = /* @__PURE__ */ this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, l = s ? i : n, u = 0; u < o.length; u++) {
      var f = o[u];
      l.has(f) && a.push(f);
    }
    return a;
  }, "intersect"),
  xor: /* @__PURE__ */ m$1(function(e) {
    var t = this._private.cy;
    he(e) && (e = /* @__PURE__ */ t.$(e));
    var a = /* @__PURE__ */ this.spawn(), n = this, i = e, s = /* @__PURE__ */ m$1(function(l, u) {
      for (var f = 0; f < l.length; f++) {
        var c = l[f], d = c._private.data.id, g = /* @__PURE__ */ u.hasElementWithId(d);
        g || a.push(c);
      }
    }, "add");
    return s(n, i), s(i, n), a;
  }, "xor"),
  diff: /* @__PURE__ */ m$1(function(e) {
    var t = this._private.cy;
    he(e) && (e = /* @__PURE__ */ t.$(e));
    var a = /* @__PURE__ */ this.spawn(), n = /* @__PURE__ */ this.spawn(), i = /* @__PURE__ */ this.spawn(), s = this, o = e, l = /* @__PURE__ */ m$1(function(f, c, d) {
      for (var g = 0; g < f.length; g++) {
        var h = f[g], m = h._private.data.id, y = /* @__PURE__ */ c.hasElementWithId(m);
        y ? i.merge(h) : d.push(h);
      }
    }, "add");
    return l(s, o, a), l(o, s, n), {
      left: a,
      right: n,
      both: i
    };
  }, "diff"),
  add: /* @__PURE__ */ m$1(function(e) {
    var t = this._private.cy;
    if (!e) return this;
    if (he(e)) {
      var a = e;
      e = /* @__PURE__ */ t.mutableElements().filter(a);
    }
    for (var n = /* @__PURE__ */ this.spawnSelf(), i = 0; i < e.length; i++) {
      var s = e[i], o = !this.has(s);
      o && n.push(s);
    }
    return n;
  }, "add"),
  merge: /* @__PURE__ */ m$1(function(e) {
    var t = this._private, a = t.cy;
    if (!e) return this;
    if (e && he(e)) {
      var n = e;
      e = /* @__PURE__ */ a.mutableElements().filter(n);
    }
    for (var i = t.map, s = 0; s < e.length; s++) {
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
  unmergeAt: /* @__PURE__ */ m$1(function(e) {
    var t = this[e], a = /* @__PURE__ */ t.id(), n = this._private, i = n.map;
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
  unmergeOne: /* @__PURE__ */ m$1(function(e) {
    e = e[0];
    var t = this._private, a = e._private.data.id, n = t.map, i = /* @__PURE__ */ n.get(a);
    if (!i) return this;
    var s = i.index;
    return this.unmergeAt(s), this;
  }, "unmergeOne"),
  unmerge: /* @__PURE__ */ m$1(function(e) {
    var t = this._private.cy;
    if (!e) return this;
    if (e && he(e)) {
      var a = e;
      e = /* @__PURE__ */ t.mutableElements().filter(a);
    }
    for (var n = 0; n < e.length; n++) this.unmergeOne(e[n]);
    return this;
  }, "unmerge"),
  unmergeBy: /* @__PURE__ */ m$1(function(e) {
    for (var t = this.length - 1; t >= 0; t--) {
      var a = this[t];
      e(a) && this.unmergeAt(t);
    }
    return this;
  }, "unmergeBy"),
  map: /* @__PURE__ */ m$1(function(e, t) {
    for (var a = [], n = this, i = 0; i < n.length; i++) {
      var s = n[i], o = t ? e.apply(t, [
        s,
        i,
        n
      ]) : e(s, i, n);
      a.push(o);
    }
    return a;
  }, "map"),
  reduce: /* @__PURE__ */ m$1(function(e, t) {
    for (var a = t, n = this, i = 0; i < n.length; i++) a = /* @__PURE__ */ e(a, n[i], i, n);
    return a;
  }, "reduce"),
  max: /* @__PURE__ */ m$1(function(e, t) {
    for (var a = -1 / 0, n, i = this, s = 0; s < i.length; s++) {
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
  min: /* @__PURE__ */ m$1(function(e, t) {
    for (var a = 1 / 0, n, i = this, s = 0; s < i.length; s++) {
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
}, Pe = Qo;
Pe.u = Pe["|"] = Pe["+"] = Pe.union = Pe.or = Pe.add;
Pe["\\"] = Pe["!"] = Pe["-"] = Pe.difference = Pe.relativeComplement = Pe.subtract = Pe.not;
Pe.n = Pe["&"] = Pe["."] = Pe.and = Pe.intersection = Pe.intersect;
Pe["^"] = Pe["(+)"] = Pe["(-)"] = Pe.symmetricDifference = Pe.symdiff = Pe.xor;
Pe.fnFilter = Pe.filterFn = Pe.stdFilter = Pe.filter;
Pe.complement = Pe.abscomp = Pe.absoluteComplement;
var Ah = {
  isNode: /* @__PURE__ */ m$1(function() {
    return this.group() === "nodes";
  }, "isNode"),
  isEdge: /* @__PURE__ */ m$1(function() {
    return this.group() === "edges";
  }, "isEdge"),
  isLoop: /* @__PURE__ */ m$1(function() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  }, "isLoop"),
  isSimple: /* @__PURE__ */ m$1(function() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  }, "isSimple"),
  group: /* @__PURE__ */ m$1(function() {
    var e = this[0];
    if (e) return e._private.group;
  }, "group")
}, Jo = /* @__PURE__ */ m$1(function(e, t) {
  var a = /* @__PURE__ */ e.cy(), n = /* @__PURE__ */ a.hasCompoundNodes();
  function i(f) {
    var c = /* @__PURE__ */ f.pstyle("z-compound-depth");
    return c.value === "auto" ? n ? f.zDepth() : 0 : c.value === "bottom" ? -1 : c.value === "top" ? ui : 0;
  }
  m$1(i, "getDepth");
  var s = i(e) - i(t);
  if (s !== 0) return s;
  function o(f) {
    var c = /* @__PURE__ */ f.pstyle("z-index-compare");
    return c.value === "auto" && f.isNode() ? 1 : 0;
  }
  m$1(o, "getEleDepth");
  var l = o(e) - o(t);
  if (l !== 0) return l;
  var u = e.pstyle("z-index").value - t.pstyle("z-index").value;
  return u !== 0 ? u : e.poolIndex() - t.poolIndex();
}, "zIndexSort"), an = {
  forEach: /* @__PURE__ */ m$1(function(e, t) {
    if (Ve(e)) for (var a = this.length, n = 0; n < a; n++) {
      var i = this[n], s = t ? e.apply(t, [
        i,
        n,
        this
      ]) : e(i, n, this);
      if (s === false) break;
    }
    return this;
  }, "forEach"),
  toArray: /* @__PURE__ */ m$1(function() {
    for (var e = [], t = 0; t < this.length; t++) e.push(this[t]);
    return e;
  }, "toArray"),
  slice: /* @__PURE__ */ m$1(function(e, t) {
    var a = [], n = this.length;
    t == null && (t = n), e == null && (e = 0), e < 0 && (e = n + e), t < 0 && (t = n + t);
    for (var i = e; i >= 0 && i < t && i < n; i++) a.push(this[i]);
    return this.spawn(a);
  }, "slice"),
  size: /* @__PURE__ */ m$1(function() {
    return this.length;
  }, "size"),
  eq: /* @__PURE__ */ m$1(function(e) {
    return this[e] || this.spawn();
  }, "eq"),
  first: /* @__PURE__ */ m$1(function() {
    return this[0] || this.spawn();
  }, "first"),
  last: /* @__PURE__ */ m$1(function() {
    return this[this.length - 1] || this.spawn();
  }, "last"),
  empty: /* @__PURE__ */ m$1(function() {
    return this.length === 0;
  }, "empty"),
  nonempty: /* @__PURE__ */ m$1(function() {
    return !this.empty();
  }, "nonempty"),
  sort: /* @__PURE__ */ m$1(function(e) {
    if (!Ve(e)) return this;
    var t = /* @__PURE__ */ this.toArray().sort(e);
    return this.spawn(t);
  }, "sort"),
  sortByZIndex: /* @__PURE__ */ m$1(function() {
    return this.sort(Jo);
  }, "sortByZIndex"),
  zDepth: /* @__PURE__ */ m$1(function() {
    var e = this[0];
    if (e) {
      var t = e._private, a = t.group;
      if (a === "nodes") {
        var n = t.data.parent ? e.parents().size() : 0;
        return e.isParent() ? n : ui - 1;
      } else {
        var i = t.source, s = t.target, o = /* @__PURE__ */ i.zDepth(), l = /* @__PURE__ */ s.zDepth();
        return Math.max(o, l, 0);
      }
    }
  }, "zDepth")
};
an.each = an.forEach;
var Rh = /* @__PURE__ */ m$1(function() {
  var e = "undefined", t = (typeof Symbol > "u" ? "undefined" : Ue(Symbol)) != e && Ue(Symbol.iterator) != e;
  t && (an[Symbol.iterator] = function() {
    var a = this, n = {
      value: void 0,
      done: false
    }, i = 0, s = this.length;
    return Us({
      next: /* @__PURE__ */ m$1(function() {
        return i < s ? n.value = a[i++] : (n.value = void 0, n.done = true), n;
      }, "next")
    }, Symbol.iterator, function() {
      return this;
    });
  });
}, "defineSymbolIterator");
Rh();
var Oh = /* @__PURE__ */ rr({
  nodeDimensionsIncludeLabels: false
}), Wa = {
  layoutDimensions: /* @__PURE__ */ m$1(function(e) {
    e = /* @__PURE__ */ Oh(e);
    var t;
    if (!this.takesUpSpace()) t = {
      w: 0,
      h: 0
    };
    else if (e.nodeDimensionsIncludeLabels) {
      var a = /* @__PURE__ */ this.boundingBox();
      t = {
        w: a.w,
        h: a.h
      };
    } else t = {
      w: /* @__PURE__ */ this.outerWidth(),
      h: /* @__PURE__ */ this.outerHeight()
    };
    return (t.w === 0 || t.h === 0) && (t.w = t.h = 1), t;
  }, "layoutDimensions"),
  layoutPositions: /* @__PURE__ */ m$1(function(e, t, a) {
    var n = /* @__PURE__ */ this.nodes().filter(function(T) {
      return !T.isParent();
    }), i = /* @__PURE__ */ this.cy(), s = t.eles, o = /* @__PURE__ */ m$1(function(C) {
      return C.id();
    }, "getMemoizeKey"), l = /* @__PURE__ */ la(a, o);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var u = /* @__PURE__ */ m$1(function(C, E, k) {
      var S = {
        x: E.x1 + E.w / 2,
        y: E.y1 + E.h / 2
      }, L = {
        x: (k.x - S.x) * C,
        y: (k.y - S.y) * C
      };
      return {
        x: S.x + L.x,
        y: S.y + L.y
      };
    }, "calculateSpacing"), f = t.spacingFactor && t.spacingFactor !== 1, c = /* @__PURE__ */ m$1(function() {
      if (!f) return null;
      for (var C = /* @__PURE__ */ gr(), E = 0; E < n.length; E++) {
        var k = n[E], S = /* @__PURE__ */ l(k, E);
        Ov(C, S.x, S.y);
      }
      return C;
    }, "spacingBb"), d = /* @__PURE__ */ c(), g = /* @__PURE__ */ la(function(T, C) {
      var E = /* @__PURE__ */ l(T, C);
      if (f) {
        var k = /* @__PURE__ */ Math.abs(t.spacingFactor);
        E = /* @__PURE__ */ u(k, d, E);
      }
      return t.transform != null && (E = /* @__PURE__ */ t.transform(T, E)), E;
    }, o);
    if (t.animate) {
      for (var h = 0; h < n.length; h++) {
        var m = n[h], y = /* @__PURE__ */ g(m, h), p = t.animateFilter == null || t.animateFilter(m, h);
        if (p) {
          var b1 = /* @__PURE__ */ m.animation({
            position: y,
            duration: t.animationDuration,
            easing: t.animationEasing
          });
          e.animations.push(b1);
        } else m.position(y);
      }
      if (t.fit) {
        var w = /* @__PURE__ */ i.animation({
          fit: {
            boundingBox: /* @__PURE__ */ s.boundingBoxAt(g),
            padding: t.padding
          },
          duration: t.animationDuration,
          easing: t.animationEasing
        });
        e.animations.push(w);
      } else if (t.zoom !== void 0 && t.pan !== void 0) {
        var x = /* @__PURE__ */ i.animation({
          zoom: t.zoom,
          pan: t.pan,
          duration: t.animationDuration,
          easing: t.animationEasing
        });
        e.animations.push(x);
      }
      e.animations.forEach(function(T) {
        return T.play();
      }), e.one("layoutready", t.ready), e.emit({
        type: "layoutready",
        layout: e
      }), qt.all(/* @__PURE__ */ e.animations.map(function(T) {
        return T.promise();
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
  layout: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ this.cy();
    return t.makeLayout(/* @__PURE__ */ we({}, e, {
      eles: this
    }));
  }, "layout")
};
Wa.createLayout = Wa.makeLayout = Wa.layout;
function _o(r10, e, t) {
  var a = t._private, n = a.styleCache = a.styleCache || [], i;
  return (i = n[r10]) != null || (i = n[r10] = /* @__PURE__ */ e(t)), i;
}
m$1(_o, "styleCache");
function wn(r10, e) {
  return r10 = /* @__PURE__ */ dt(r10), m$1(function(a) {
    return _o(r10, e, a);
  }, "cachedStyleFunction");
}
m$1(wn, "cacheStyleFunction");
function xn(r10, e) {
  r10 = /* @__PURE__ */ dt(r10);
  var t = /* @__PURE__ */ m$1(function(n) {
    return e.call(n);
  }, "selfFn");
  return m$1(function() {
    var n = this[0];
    if (n) return _o(r10, t, n);
  }, "cachedPrototypeStyleFunction");
}
m$1(xn, "cachePrototypeStyleFunction");
var je = {
  recalculateRenderedStyle: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ this.cy(), a = /* @__PURE__ */ t.renderer(), n = /* @__PURE__ */ t.styleEnabled();
    return a && n && a.recalculateRenderedStyle(this, e), this;
  }, "recalculateRenderedStyle"),
  dirtyStyleCache: /* @__PURE__ */ m$1(function() {
    var e = /* @__PURE__ */ this.cy(), t = /* @__PURE__ */ m$1(function(i) {
      return i._private.styleCache = null;
    }, "dirty");
    if (e.hasCompoundNodes()) {
      var a;
      a = /* @__PURE__ */ this.spawnSelf().merge(/* @__PURE__ */ this.descendants()).merge(/* @__PURE__ */ this.parents()), a.merge(/* @__PURE__ */ a.connectedEdges()), a.forEach(t);
    } else this.forEach(function(n) {
      t(n), n.connectedEdges().forEach(t);
    });
    return this;
  }, "dirtyStyleCache"),
  updateStyle: /* @__PURE__ */ m$1(function(e) {
    var t = this._private.cy;
    if (!t.styleEnabled()) return this;
    if (t.batching()) {
      var a = t._private.batchStyleEles;
      return a.merge(this), this;
    }
    var n = /* @__PURE__ */ t.hasCompoundNodes(), i = this;
    e = !!(e || e === void 0), n && (i = /* @__PURE__ */ this.spawnSelf().merge(/* @__PURE__ */ this.descendants()).merge(/* @__PURE__ */ this.parents()));
    var s = i;
    return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
      return o._private.styleDirty = true;
    }), this;
  }, "updateStyle"),
  cleanStyle: /* @__PURE__ */ m$1(function() {
    var e = /* @__PURE__ */ this.cy();
    if (e.styleEnabled()) for (var t = 0; t < this.length; t++) {
      var a = this[t];
      a._private.styleDirty && (a._private.styleDirty = false, e.style().apply(a));
    }
  }, "cleanStyle"),
  parsedStyle: /* @__PURE__ */ m$1(function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, a = this[0], n = /* @__PURE__ */ a.cy();
    if (n.styleEnabled() && a) {
      this.cleanStyle();
      var i = a._private.style[e];
      return i ?? (t ? n.style().getDefaultProperty(e) : null);
    }
  }, "parsedStyle"),
  numericStyle: /* @__PURE__ */ m$1(function(e) {
    var t = this[0];
    if (t.cy().styleEnabled() && t) {
      var a = /* @__PURE__ */ t.pstyle(e);
      return a.pfValue !== void 0 ? a.pfValue : a.value;
    }
  }, "numericStyle"),
  numericStyleUnits: /* @__PURE__ */ m$1(function(e) {
    var t = this[0];
    if (t.cy().styleEnabled() && t) return t.pstyle(e).units;
  }, "numericStyleUnits"),
  renderedStyle: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ this.cy();
    if (!t.styleEnabled()) return this;
    var a = this[0];
    if (a) return t.style().getRenderedStyle(a, e);
  }, "renderedStyle"),
  style: /* @__PURE__ */ m$1(function(e, t) {
    var a = /* @__PURE__ */ this.cy();
    if (!a.styleEnabled()) return this;
    var n = false, i = /* @__PURE__ */ a.style();
    if (Te(e)) {
      var s = e;
      i.applyBypass(this, s, n), this.emitAndNotify("style");
    } else if (he(e)) if (t === void 0) {
      var o = this[0];
      return o ? i.getStylePropertyValue(o, e) : void 0;
    } else i.applyBypass(this, e, t, n), this.emitAndNotify("style");
    else if (e === void 0) {
      var l = this[0];
      return l ? i.getRawStyle(l) : void 0;
    }
    return this;
  }, "style"),
  removeStyle: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ this.cy();
    if (!t.styleEnabled()) return this;
    var a = false, n = /* @__PURE__ */ t.style(), i = this;
    if (e === void 0) for (var s = 0; s < i.length; s++) {
      var o = i[s];
      n.removeAllBypasses(o, a);
    }
    else {
      e = /* @__PURE__ */ e.split(/\s+/);
      for (var l = 0; l < i.length; l++) {
        var u = i[l];
        n.removeBypasses(u, e, a);
      }
    }
    return this.emitAndNotify("style"), this;
  }, "removeStyle"),
  show: /* @__PURE__ */ m$1(function() {
    return this.css("display", "element"), this;
  }, "show"),
  hide: /* @__PURE__ */ m$1(function() {
    return this.css("display", "none"), this;
  }, "hide"),
  effectiveOpacity: /* @__PURE__ */ m$1(function() {
    var e = /* @__PURE__ */ this.cy();
    if (!e.styleEnabled()) return 1;
    var t = /* @__PURE__ */ e.hasCompoundNodes(), a = this[0];
    if (a) {
      var n = a._private, i = a.pstyle("opacity").value;
      if (!t) return i;
      var s = n.data.parent ? a.parents() : null;
      if (s) for (var o = 0; o < s.length; o++) {
        var l = s[o], u = l.pstyle("opacity").value;
        i = u * i;
      }
      return i;
    }
  }, "effectiveOpacity"),
  transparent: /* @__PURE__ */ m$1(function() {
    var e = /* @__PURE__ */ this.cy();
    if (!e.styleEnabled()) return false;
    var t = this[0], a = /* @__PURE__ */ t.cy().hasCompoundNodes();
    if (t) return a ? t.effectiveOpacity() === 0 : t.pstyle("opacity").value === 0;
  }, "transparent"),
  backgrounding: /* @__PURE__ */ m$1(function() {
    var e = /* @__PURE__ */ this.cy();
    if (!e.styleEnabled()) return false;
    var t = this[0];
    return !!t._private.backgrounding;
  }, "backgrounding")
};
function Nn(r10, e) {
  var t = r10._private, a = t.data.parent ? r10.parents() : null;
  if (a) for (var n = 0; n < a.length; n++) {
    var i = a[n];
    if (!e(i)) return false;
  }
  return true;
}
m$1(Nn, "checkCompound");
function wi(r10) {
  var e = r10.ok, t = r10.edgeOkViaNode || r10.ok, a = r10.parentOk || r10.ok;
  return function() {
    var n = /* @__PURE__ */ this.cy();
    if (!n.styleEnabled()) return true;
    var i = this[0], s = /* @__PURE__ */ n.hasCompoundNodes();
    if (i) {
      var o = i._private;
      if (!e(i)) return false;
      if (i.isNode()) return !s || Nn(i, a);
      var l = o.source, u = o.target;
      return t(l) && (!s || Nn(l, t)) && (l === u || t(u) && (!s || Nn(u, t)));
    }
  };
}
m$1(wi, "defineDerivedStateFunction");
var Kt = /* @__PURE__ */ wn("eleTakesUpSpace", function(r10) {
  return r10.pstyle("display").value === "element" && r10.width() !== 0 && (r10.isNode() ? r10.height() !== 0 : true);
});
je.takesUpSpace = /* @__PURE__ */ xn("takesUpSpace", /* @__PURE__ */ wi({
  ok: Kt
}));
var Ih = /* @__PURE__ */ wn("eleInteractive", function(r10) {
  return r10.pstyle("events").value === "yes" && r10.pstyle("visibility").value === "visible" && Kt(r10);
}), zh = /* @__PURE__ */ wn("parentInteractive", function(r10) {
  return r10.pstyle("visibility").value === "visible" && Kt(r10);
});
je.interactive = /* @__PURE__ */ xn("interactive", /* @__PURE__ */ wi({
  ok: Ih,
  parentOk: zh,
  edgeOkViaNode: Kt
}));
je.noninteractive = function() {
  var r10 = this[0];
  if (r10) return !r10.interactive();
};
var Nh = /* @__PURE__ */ wn("eleVisible", function(r10) {
  return r10.pstyle("visibility").value === "visible" && r10.pstyle("opacity").pfValue !== 0 && Kt(r10);
}), Fh = Kt;
je.visible = /* @__PURE__ */ xn("visible", /* @__PURE__ */ wi({
  ok: Nh,
  edgeOkViaNode: Fh
}));
je.hidden = function() {
  var r10 = this[0];
  if (r10) return !r10.visible();
};
je.isBundledBezier = /* @__PURE__ */ xn("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : false;
});
je.bypass = je.css = je.style;
je.renderedCss = je.renderedStyle;
je.removeBypass = je.removeCss = je.removeStyle;
je.pstyle = je.parsedStyle;
var Jr = {};
function ps(r10) {
  return function() {
    var e = arguments, t = [];
    if (e.length === 2) {
      var a = e[0], n = e[1];
      this.on(r10.event, a, n);
    } else if (e.length === 1 && Ve(e[0])) {
      var i = e[0];
      this.on(r10.event, i);
    } else if (e.length === 0 || e.length === 1 && Oe(e[0])) {
      for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
        var l = this[o], u = !r10.ableField || l._private[r10.ableField], f = l._private[r10.field] != r10.value;
        if (r10.overrideAble) {
          var c = /* @__PURE__ */ r10.overrideAble(l);
          if (c !== void 0 && (u = c, !c)) return this;
        }
        u && (l._private[r10.field] = r10.value, f && t.push(l));
      }
      var d = /* @__PURE__ */ this.spawn(t);
      d.updateStyle(), d.emit(r10.event), s && d.emit(s);
    }
    return this;
  };
}
m$1(ps, "defineSwitchFunction");
function Wt(r10) {
  Jr[r10.field] = function() {
    var e = this[0];
    if (e) {
      if (r10.overrideField) {
        var t = /* @__PURE__ */ r10.overrideField(e);
        if (t !== void 0) return t;
      }
      return e._private[r10.field];
    }
  }, Jr[r10.on] = /* @__PURE__ */ ps({
    event: r10.on,
    field: r10.field,
    ableField: r10.ableField,
    overrideAble: r10.overrideAble,
    value: true
  }), Jr[r10.off] = /* @__PURE__ */ ps({
    event: r10.off,
    field: r10.field,
    ableField: r10.ableField,
    overrideAble: r10.overrideAble,
    value: false
  });
}
m$1(Wt, "defineSwitchSet");
Wt({
  field: "locked",
  overrideField: /* @__PURE__ */ m$1(function(e) {
    return e.cy().autolock() ? true : void 0;
  }, "overrideField"),
  on: "lock",
  off: "unlock"
});
Wt({
  field: "grabbable",
  overrideField: /* @__PURE__ */ m$1(function(e) {
    return e.cy().autoungrabify() || e.pannable() ? false : void 0;
  }, "overrideField"),
  on: "grabify",
  off: "ungrabify"
});
Wt({
  field: "selected",
  ableField: "selectable",
  overrideAble: /* @__PURE__ */ m$1(function(e) {
    return e.cy().autounselectify() ? false : void 0;
  }, "overrideAble"),
  on: "select",
  off: "unselect"
});
Wt({
  field: "selectable",
  overrideField: /* @__PURE__ */ m$1(function(e) {
    return e.cy().autounselectify() ? false : void 0;
  }, "overrideField"),
  on: "selectify",
  off: "unselectify"
});
Jr.deselect = Jr.unselect;
Jr.grabbed = function() {
  var r10 = this[0];
  if (r10) return r10._private.grabbed;
};
Wt({
  field: "active",
  on: "activate",
  off: "unactivate"
});
Wt({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
Jr.inactive = function() {
  var r10 = this[0];
  if (r10) return !r10._private.active;
};
var ir = {}, ys = /* @__PURE__ */ m$1(function(e) {
  return m$1(function(a) {
    for (var n = this, i = [], s = 0; s < n.length; s++) {
      var o = n[s];
      if (o.isNode()) {
        for (var l = false, u = /* @__PURE__ */ o.connectedEdges(), f = 0; f < u.length; f++) {
          var c = u[f], d = /* @__PURE__ */ c.source(), g = /* @__PURE__ */ c.target();
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
}, "defineDagExtremity"), ms = /* @__PURE__ */ m$1(function(e) {
  return function(t) {
    for (var a = this, n = [], i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.isNode()) for (var o = /* @__PURE__ */ s.connectedEdges(), l = 0; l < o.length; l++) {
        var u = o[l], f = /* @__PURE__ */ u.source(), c = /* @__PURE__ */ u.target();
        e.outgoing && f === s ? (n.push(u), n.push(c)) : e.incoming && c === s && (n.push(u), n.push(f));
      }
    }
    return this.spawn(n, true).filter(t);
  };
}, "defineDagOneHop"), bs = /* @__PURE__ */ m$1(function(e) {
  return function(t) {
    for (var a = this, n = [], i = {}; ; ) {
      var s = e.outgoing ? a.outgoers() : a.incomers();
      if (s.length === 0) break;
      for (var o = false, l = 0; l < s.length; l++) {
        var u = s[l], f = /* @__PURE__ */ u.id();
        i[f] || (i[f] = true, n.push(u), o = true);
      }
      if (!o) break;
      a = s;
    }
    return this.spawn(n, true).filter(t);
  };
}, "defineDagAllHops");
ir.clearTraversalCache = function() {
  for (var r10 = 0; r10 < this.length; r10++) this[r10]._private.traversalCache = null;
};
we(ir, {
  roots: /* @__PURE__ */ ys({
    noIncomingEdges: true
  }),
  leaves: /* @__PURE__ */ ys({
    noOutgoingEdges: true
  }),
  outgoers: /* @__PURE__ */ xr(/* @__PURE__ */ ms({
    outgoing: true
  }), "outgoers"),
  successors: /* @__PURE__ */ bs({
    outgoing: true
  }),
  incomers: /* @__PURE__ */ xr(/* @__PURE__ */ ms({
    incoming: true
  }), "incomers"),
  predecessors: /* @__PURE__ */ bs({
    incoming: true
  })
});
we(ir, {
  neighborhood: /* @__PURE__ */ xr(function(r10) {
    for (var e = [], t = /* @__PURE__ */ this.nodes(), a = 0; a < t.length; a++) for (var n = t[a], i = /* @__PURE__ */ n.connectedEdges(), s = 0; s < i.length; s++) {
      var o = i[s], l = /* @__PURE__ */ o.source(), u = /* @__PURE__ */ o.target(), f = n === l ? u : l;
      f.length > 0 && e.push(f[0]), e.push(o[0]);
    }
    return this.spawn(e, true).filter(r10);
  }, "neighborhood"),
  closedNeighborhood: /* @__PURE__ */ m$1(function(e) {
    return this.neighborhood().add(this).filter(e);
  }, "closedNeighborhood"),
  openNeighborhood: /* @__PURE__ */ m$1(function(e) {
    return this.neighborhood(e);
  }, "openNeighborhood")
});
ir.neighbourhood = ir.neighborhood;
ir.closedNeighbourhood = ir.closedNeighborhood;
ir.openNeighbourhood = ir.openNeighborhood;
we(ir, {
  source: /* @__PURE__ */ xr(/* @__PURE__ */ m$1(function(e) {
    var t = this[0], a;
    return t && (a = t._private.source || t.cy().collection()), a && e ? a.filter(e) : a;
  }, "sourceImpl"), "source"),
  target: /* @__PURE__ */ xr(/* @__PURE__ */ m$1(function(e) {
    var t = this[0], a;
    return t && (a = t._private.target || t.cy().collection()), a && e ? a.filter(e) : a;
  }, "targetImpl"), "target"),
  sources: /* @__PURE__ */ ws({
    attr: "source"
  }),
  targets: /* @__PURE__ */ ws({
    attr: "target"
  })
});
function ws(r10) {
  return m$1(function(t) {
    for (var a = [], n = 0; n < this.length; n++) {
      var i = this[n], s = i._private[r10.attr];
      s && a.push(s);
    }
    return this.spawn(a, true).filter(t);
  }, "sourceImpl");
}
m$1(ws, "defineSourceFunction");
we(ir, {
  edgesWith: /* @__PURE__ */ xr(/* @__PURE__ */ xs(), "edgesWith"),
  edgesTo: /* @__PURE__ */ xr(/* @__PURE__ */ xs({
    thisIsSrc: true
  }), "edgesTo")
});
function xs(r10) {
  return m$1(function(t) {
    var a = [], n = this._private.cy, i = r10 || {};
    he(t) && (t = /* @__PURE__ */ n.$(t));
    for (var s = 0; s < t.length; s++) for (var o = t[s]._private.edges, l = 0; l < o.length; l++) {
      var u = o[l], f = u._private.data, c = this.hasElementWithId(f.source) && t.hasElementWithId(f.target), d = t.hasElementWithId(f.source) && this.hasElementWithId(f.target), g = c || d;
      g && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !c || i.thisIsTgt && !d) || a.push(u));
    }
    return this.spawn(a, true);
  }, "edgesWithImpl");
}
m$1(xs, "defineEdgesWithFunction");
we(ir, {
  connectedEdges: /* @__PURE__ */ xr(function(r10) {
    for (var e = [], t = this, a = 0; a < t.length; a++) {
      var n = t[a];
      if (n.isNode()) for (var i = n._private.edges, s = 0; s < i.length; s++) {
        var o = i[s];
        e.push(o);
      }
    }
    return this.spawn(e, true).filter(r10);
  }, "connectedEdges"),
  connectedNodes: /* @__PURE__ */ xr(function(r10) {
    for (var e = [], t = this, a = 0; a < t.length; a++) {
      var n = t[a];
      n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
    }
    return this.spawn(e, true).filter(r10);
  }, "connectedNodes"),
  parallelEdges: /* @__PURE__ */ xr(/* @__PURE__ */ Es(), "parallelEdges"),
  codirectedEdges: /* @__PURE__ */ xr(/* @__PURE__ */ Es({
    codirected: true
  }), "codirectedEdges")
});
function Es(r10) {
  var e = {
    codirected: false
  };
  return r10 = /* @__PURE__ */ we({}, e, r10), m$1(function(a) {
    for (var n = [], i = /* @__PURE__ */ this.edges(), s = r10, o = 0; o < i.length; o++) for (var l = i[o], u = l._private, f = u.source, c = f._private.data.id, d = u.data.target, g = f._private.edges, h = 0; h < g.length; h++) {
      var m = g[h], y = m._private.data, p = y.target, b1 = y.source, w = p === d && b1 === c, x = c === p && d === b1;
      (s.codirected && w || !s.codirected && (w || x)) && n.push(m);
    }
    return this.spawn(n, true).filter(a);
  }, "parallelEdgesImpl");
}
m$1(Es, "defineParallelEdgesFunction");
we(ir, {
  components: /* @__PURE__ */ m$1(function(e) {
    var t = this, a = /* @__PURE__ */ t.cy(), n = /* @__PURE__ */ a.collection(), i = e == null ? t.nodes() : e.nodes(), s = [];
    e != null && i.empty() && (i = /* @__PURE__ */ e.sources());
    var o = /* @__PURE__ */ m$1(function(f, c) {
      n.merge(f), i.unmerge(f), c.merge(f);
    }, "visitInComponent");
    if (i.empty()) return t.spawn();
    var l = /* @__PURE__ */ m$1(function() {
      var f = /* @__PURE__ */ a.collection();
      s.push(f);
      var c = i[0];
      o(c, f), t.bfs({
        directed: false,
        roots: c,
        visit: /* @__PURE__ */ m$1(function(g) {
          return o(g, f);
        }, "visit")
      }), f.forEach(function(d) {
        d.connectedEdges().forEach(function(g) {
          t.has(g) && f.has(/* @__PURE__ */ g.source()) && f.has(/* @__PURE__ */ g.target()) && f.merge(g);
        });
      });
    }, "_loop");
    do
      l();
    while (i.length > 0);
    return s;
  }, "components"),
  component: /* @__PURE__ */ m$1(function() {
    var e = this[0];
    return e.cy().mutableElements().components(e)[0];
  }, "component")
});
ir.componentsOf = ir.components;
var er = /* @__PURE__ */ m$1(function(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (e === void 0) {
    qe("A collection must have a reference to the core");
    return;
  }
  var i = new Ir(), s = false;
  if (!t) t = [];
  else if (t.length > 0 && Te(t[0]) && !xa(t[0])) {
    s = true;
    for (var o = [], l = new Vt(), u = 0, f = t.length; u < f; u++) {
      var c = t[u];
      c.data == null && (c.data = {});
      var d = c.data;
      if (d.id == null) d.id = /* @__PURE__ */ vo();
      else if (e.hasElementWithId(d.id) || l.has(d.id)) continue;
      var g = new cn(e, c, false);
      o.push(g), l.add(d.id);
    }
    t = o;
  }
  this.length = 0;
  for (var h = 0, m = t.length; h < m; h++) {
    var y = t[h][0];
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
    get map() {
      return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
    },
    set map(b) {
      this.lazyMap = b;
    },
    rebuildMap: /* @__PURE__ */ m$1(function() {
      for (var w = this.lazyMap = new Ir(), x = this.eles, T = 0; T < x.length; T++) {
        var C = x[T];
        w.set(/* @__PURE__ */ C.id(), {
          index: T,
          ele: C
        });
      }
    }, "rebuildMap")
  }, a && (this._private.map = i), s && !n && this.restore();
}, "Collection"), ze = cn.prototype = er.prototype = /* @__PURE__ */ Object.create(Array.prototype);
ze.instanceString = function() {
  return "collection";
};
ze.spawn = function(r10, e) {
  return new er(this.cy(), r10, e);
};
ze.spawnSelf = function() {
  return this.spawn(this);
};
ze.cy = function() {
  return this._private.cy;
};
ze.renderer = function() {
  return this._private.cy.renderer();
};
ze.element = function() {
  return this[0];
};
ze.collection = function() {
  return Qs(this) ? this : new er(this._private.cy, [
    this
  ]);
};
ze.unique = function() {
  return new er(this._private.cy, this, true);
};
ze.hasElementWithId = function(r10) {
  return r10 = "" + r10, this._private.map.has(r10);
};
ze.getElementById = function(r10) {
  r10 = "" + r10;
  var e = this._private.cy, t = /* @__PURE__ */ this._private.map.get(r10);
  return t ? t.ele : new er(e);
};
ze.$id = ze.getElementById;
ze.poolIndex = function() {
  var r10 = this._private.cy, e = r10._private.elements, t = this[0]._private.data.id;
  return e._private.map.get(t).index;
};
ze.indexOf = function(r10) {
  var e = r10[0]._private.data.id;
  return this._private.map.get(e).index;
};
ze.indexOfId = function(r10) {
  return r10 = "" + r10, this._private.map.get(r10).index;
};
ze.json = function(r10) {
  var e = /* @__PURE__ */ this.element(), t = /* @__PURE__ */ this.cy();
  if (e == null && r10) return this;
  if (e != null) {
    var a = e._private;
    if (Te(r10)) {
      if (t.startBatch(), r10.data) {
        e.data(r10.data);
        var n = a.data;
        if (e.isEdge()) {
          var i = false, s = {}, o = r10.data.source, l = r10.data.target;
          o != null && o != n.source && (s.source = "" + o, i = true), l != null && l != n.target && (s.target = "" + l, i = true), i && (e = /* @__PURE__ */ e.move(s));
        } else {
          var u = "parent" in r10.data, f = r10.data.parent;
          u && (f != null || n.parent != null) && f != n.parent && (f === void 0 && (f = null), f != null && (f = "" + f), e = /* @__PURE__ */ e.move({
            parent: f
          }));
        }
      }
      r10.position && e.position(r10.position);
      var c = /* @__PURE__ */ m$1(function(m, y, p) {
        var b1 = r10[m];
        b1 != null && b1 !== a[m] && (b1 ? e[y]() : e[p]());
      }, "checkSwitch");
      return c("removed", "remove", "restore"), c("selected", "select", "unselect"), c("selectable", "selectify", "unselectify"), c("locked", "lock", "unlock"), c("grabbable", "grabify", "ungrabify"), c("pannable", "panify", "unpanify"), r10.classes != null && e.classes(r10.classes), t.endBatch(), this;
    } else if (r10 === void 0) {
      var d = {
        data: /* @__PURE__ */ Or(a.data),
        position: /* @__PURE__ */ Or(a.position),
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
ze.jsons = function() {
  for (var r10 = [], e = 0; e < this.length; e++) {
    var t = this[e], a = /* @__PURE__ */ t.json();
    r10.push(a);
  }
  return r10;
};
ze.clone = function() {
  for (var r10 = /* @__PURE__ */ this.cy(), e = [], t = 0; t < this.length; t++) {
    var a = this[t], n = /* @__PURE__ */ a.json(), i = new cn(r10, n, false);
    e.push(i);
  }
  return new er(r10, e);
};
ze.copy = ze.clone;
ze.restore = function() {
  for (var r10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, t = this, a = /* @__PURE__ */ t.cy(), n = a._private, i = [], s = [], o, l = 0, u = t.length; l < u; l++) {
    var f = t[l];
    e && !f.removed() || (f.isNode() ? i.push(f) : s.push(f));
  }
  o = /* @__PURE__ */ i.concat(s);
  var c, d = /* @__PURE__ */ m$1(function() {
    o.splice(c, 1), c--;
  }, "removeFromElements");
  for (c = 0; c < o.length; c++) {
    var g = o[c], h = g._private, m = h.data;
    if (g.clearTraversalCache(), !(!e && !h.removed)) {
      if (m.id === void 0) m.id = /* @__PURE__ */ vo();
      else if (ie(m.id)) m.id = "" + m.id;
      else if (_r(m.id) || !he(m.id)) {
        qe("Can not create element with invalid string ID `" + m.id + "`"), d();
        continue;
      } else if (a.hasElementWithId(m.id)) {
        qe("Can not create second element with ID `" + m.id + "`"), d();
        continue;
      }
    }
    var y = m.id;
    if (g.isNode()) {
      var p = h.position;
      p.x == null && (p.x = 0), p.y == null && (p.y = 0);
    }
    if (g.isEdge()) {
      for (var b1 = g, w = [
        "source",
        "target"
      ], x = w.length, T = false, C = 0; C < x; C++) {
        var E = w[C], k = m[E];
        ie(k) && (k = m[E] = "" + m[E]), k == null || k === "" ? (qe("Can not create edge `" + y + "` with unspecified " + E), T = true) : a.hasElementWithId(k) || (qe("Can not create edge `" + y + "` with nonexistant " + E + " `" + k + "`"), T = true);
      }
      if (T) {
        d();
        continue;
      }
      var S = /* @__PURE__ */ a.getElementById(m.source), L = /* @__PURE__ */ a.getElementById(m.target);
      S.same(L) ? S._private.edges.push(b1) : (S._private.edges.push(b1), L._private.edges.push(b1)), b1._private.source = S, b1._private.target = L;
    }
    h.map = new Ir(), h.map.set(y, {
      ele: g,
      index: 0
    }), h.removed = false, e && a.addToPool(g);
  }
  for (var B = 0; B < i.length; B++) {
    var M = i[B], A = M._private.data;
    ie(A.parent) && (A.parent = "" + A.parent);
    var P = A.parent, I = P != null;
    if (I || M._private.parent) {
      var R = M._private.parent ? a.collection().merge(M._private.parent) : a.getElementById(P);
      if (R.empty()) A.parent = void 0;
      else if (R[0].removed()) Le("Node added with missing parent, reference to parent removed"), A.parent = void 0, M._private.parent = null;
      else {
        for (var O = false, z = R; !z.empty(); ) {
          if (M.same(z)) {
            O = true, A.parent = void 0;
            break;
          }
          z = /* @__PURE__ */ z.parent();
        }
        O || (R[0]._private.children.push(M), M._private.parent = R[0], n.hasCompoundNodes = true);
      }
    }
  }
  if (o.length > 0) {
    for (var $ = o.length === t.length ? t : new er(a, o), H = 0; H < $.length; H++) {
      var V = $[H];
      V.isNode() || (V.parallelEdges().clearTraversalCache(), V.source().clearTraversalCache(), V.target().clearTraversalCache());
    }
    var F;
    n.hasCompoundNodes ? F = /* @__PURE__ */ a.collection().merge($).merge(/* @__PURE__ */ $.connectedNodes()).merge(/* @__PURE__ */ $.parent()) : F = $, F.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(r10), r10 ? $.emitAndNotify("add") : e && $.emit("add");
  }
  return t;
};
ze.removed = function() {
  var r10 = this[0];
  return r10 && r10._private.removed;
};
ze.inside = function() {
  var r10 = this[0];
  return r10 && !r10._private.removed;
};
ze.remove = function() {
  var r10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, t = this, a = [], n = {}, i = t._private.cy;
  function s(P) {
    for (var I = P._private.edges, R = 0; R < I.length; R++) l(I[R]);
  }
  m$1(s, "addConnectedEdges");
  function o(P) {
    for (var I = P._private.children, R = 0; R < I.length; R++) l(I[R]);
  }
  m$1(o, "addChildren");
  function l(P) {
    var I = n[P.id()];
    e && P.removed() || I || (n[P.id()] = true, P.isNode() ? (a.push(P), s(P), o(P)) : a.unshift(P));
  }
  m$1(l, "add");
  for (var u = 0, f = t.length; u < f; u++) {
    var c = t[u];
    l(c);
  }
  function d(P, I) {
    var R = P._private.edges;
    jr(R, I), P.clearTraversalCache();
  }
  m$1(d, "removeEdgeRef");
  function g(P) {
    P.clearTraversalCache();
  }
  m$1(g, "removeParallelRef");
  var h = [];
  h.ids = {};
  function m(P, I) {
    I = I[0], P = P[0];
    var R = P._private.children, O = /* @__PURE__ */ P.id();
    jr(R, I), I._private.parent = null, h.ids[O] || (h.ids[O] = true, h.push(P));
  }
  m$1(m, "removeChildRef"), t.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
  for (var y = 0; y < a.length; y++) {
    var p = a[y];
    if (p.isEdge()) {
      var b1 = p.source()[0], w = p.target()[0];
      d(b1, p), d(w, p);
      for (var x = /* @__PURE__ */ p.parallelEdges(), T = 0; T < x.length; T++) {
        var C = x[T];
        g(C), C.isBundledBezier() && C.dirtyBoundingBoxCache();
      }
    } else {
      var E = /* @__PURE__ */ p.parent();
      E.length !== 0 && m(E, p);
    }
    e && (p._private.removed = true);
  }
  var k = i._private.elements;
  i._private.hasCompoundNodes = false;
  for (var S = 0; S < k.length; S++) {
    var L = k[S];
    if (L.isParent()) {
      i._private.hasCompoundNodes = true;
      break;
    }
  }
  var B = new er(this.cy(), a);
  B.size() > 0 && (r10 ? B.emitAndNotify("remove") : e && B.emit("remove"));
  for (var M = 0; M < h.length; M++) {
    var A = h[M];
    (!e || !A.removed()) && A.updateStyle();
  }
  return B;
};
ze.move = function(r10) {
  var e = this._private.cy, t = this, a = false, n = false, i = /* @__PURE__ */ m$1(function(h) {
    return h == null ? h : "" + h;
  }, "toString");
  if (r10.source !== void 0 || r10.target !== void 0) {
    var s = /* @__PURE__ */ i(r10.source), o = /* @__PURE__ */ i(r10.target), l = s != null && e.hasElementWithId(s), u = o != null && e.hasElementWithId(o);
    (l || u) && (e.batch(function() {
      t.remove(a, n), t.emitAndNotify("moveout");
      for (var g = 0; g < t.length; g++) {
        var h = t[g], m = h._private.data;
        h.isEdge() && (l && (m.source = s), u && (m.target = o));
      }
      t.restore(a, n);
    }), t.emitAndNotify("move"));
  } else if (r10.parent !== void 0) {
    var f = /* @__PURE__ */ i(r10.parent), c = f === null || e.hasElementWithId(f);
    if (c) {
      var d = f === null ? void 0 : f;
      e.batch(function() {
        var g = /* @__PURE__ */ t.remove(a, n);
        g.emitAndNotify("moveout");
        for (var h = 0; h < t.length; h++) {
          var m = t[h], y = m._private.data;
          m.isNode() && (y.parent = d);
        }
        g.restore(a, n);
      }), t.emitAndNotify("move");
    }
  }
  return this;
};
[
  So,
  Zd,
  Ka,
  Qr,
  Nt,
  fh,
  mn,
  kh,
  Zo,
  Qo,
  Ah,
  an,
  Wa,
  je,
  Jr,
  ir
].forEach(function(r10) {
  we(ze, r10);
});
var Vh = {
  add: /* @__PURE__ */ m$1(function(e) {
    var t, a = this;
    if (pr(e)) {
      var n = e;
      if (n._private.cy === a) t = /* @__PURE__ */ n.restore();
      else {
        for (var i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          i.push(/* @__PURE__ */ o.json());
        }
        t = new er(a, i);
      }
    } else if (Oe(e)) {
      var l = e;
      t = new er(a, l);
    } else if (Te(e) && (Oe(e.nodes) || Oe(e.edges))) {
      for (var u = e, f = [], c = [
        "nodes",
        "edges"
      ], d = 0, g = c.length; d < g; d++) {
        var h = c[d], m = u[h];
        if (Oe(m)) for (var y = 0, p = m.length; y < p; y++) {
          var b1 = /* @__PURE__ */ we({
            group: h
          }, m[y]);
          f.push(b1);
        }
      }
      t = new er(a, f);
    } else {
      var w = e;
      t = /* @__PURE__ */ new cn(a, w).collection();
    }
    return t;
  }, "add"),
  remove: /* @__PURE__ */ m$1(function(e) {
    if (!pr(e)) {
      if (he(e)) {
        var t = e;
        e = /* @__PURE__ */ this.$(t);
      }
    }
    return e.remove();
  }, "remove")
};
function qh(r10, e, t, a) {
  var n = 4, i = 1e-3, s = 1e-7, o = 10, l = 11, u = 1 / (l - 1), f = typeof Float32Array < "u";
  if (arguments.length !== 4) return false;
  for (var c = 0; c < 4; ++c) if (typeof arguments[c] != "number" || isNaN(arguments[c]) || !isFinite(arguments[c])) return false;
  r10 = /* @__PURE__ */ Math.min(r10, 1), t = /* @__PURE__ */ Math.min(t, 1), r10 = /* @__PURE__ */ Math.max(r10, 0), t = /* @__PURE__ */ Math.max(t, 0);
  var d = f ? new Float32Array(l) : new Array(l);
  function g(L, B) {
    return 1 - 3 * B + 3 * L;
  }
  m$1(g, "A");
  function h(L, B) {
    return 3 * B - 6 * L;
  }
  m$1(h, "B");
  function m(L) {
    return 3 * L;
  }
  m$1(m, "C");
  function y(L, B, M) {
    return ((g(B, M) * L + h(B, M)) * L + m(B)) * L;
  }
  m$1(y, "calcBezier");
  function p(L, B, M) {
    return 3 * g(B, M) * L * L + 2 * h(B, M) * L + m(B);
  }
  m$1(p, "getSlope");
  function b1(L, B) {
    for (var M = 0; M < n; ++M) {
      var A = /* @__PURE__ */ p(B, r10, t);
      if (A === 0) return B;
      var P = y(B, r10, t) - L;
      B -= P / A;
    }
    return B;
  }
  m$1(b1, "newtonRaphsonIterate");
  function w() {
    for (var L = 0; L < l; ++L) d[L] = /* @__PURE__ */ y(L * u, r10, t);
  }
  m$1(w, "calcSampleValues");
  function x(L, B, M) {
    var A, P, I = 0;
    do
      P = B + (M - B) / 2, A = y(P, r10, t) - L, A > 0 ? M = P : B = P;
    while (Math.abs(A) > s && ++I < o);
    return P;
  }
  m$1(x, "binarySubdivide");
  function T(L) {
    for (var B = 0, M = 1, A = l - 1; M !== A && d[M] <= L; ++M) B += u;
    --M;
    var P = (L - d[M]) / (d[M + 1] - d[M]), I = B + P * u, R = /* @__PURE__ */ p(I, r10, t);
    return R >= i ? b1(L, I) : R === 0 ? I : x(L, B, B + u);
  }
  m$1(T, "getTForX");
  var C = false;
  function E() {
    C = true, (r10 !== e || t !== a) && w();
  }
  m$1(E, "precompute");
  var k = /* @__PURE__ */ m$1(function(B) {
    return C || E(), r10 === e && t === a ? B : B === 0 ? 0 : B === 1 ? 1 : y(/* @__PURE__ */ T(B), e, a);
  }, "f");
  k.getControlPoints = function() {
    return [
      {
        x: r10,
        y: e
      },
      {
        x: t,
        y: a
      }
    ];
  };
  var S = "generateBezier(" + [
    r10,
    e,
    t,
    a
  ] + ")";
  return k.toString = function() {
    return S;
  }, k;
}
m$1(qh, "generateCubicBezier");
var $h = /* @__PURE__ */ function() {
  function r10(a) {
    return -a.tension * a.x - a.friction * a.v;
  }
  m$1(r10, "springAccelerationForState");
  function e(a, n, i) {
    var s = {
      x: a.x + i.dx * n,
      v: a.v + i.dv * n,
      tension: a.tension,
      friction: a.friction
    };
    return {
      dx: s.v,
      dv: /* @__PURE__ */ r10(s)
    };
  }
  m$1(e, "springEvaluateStateWithDerivative");
  function t(a, n) {
    var i = {
      dx: a.v,
      dv: /* @__PURE__ */ r10(a)
    }, s = /* @__PURE__ */ e(a, n * 0.5, i), o = /* @__PURE__ */ e(a, n * 0.5, s), l = /* @__PURE__ */ e(a, n, o), u = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + l.dx), f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + l.dv);
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
    for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, d = s !== null, d ? (u = /* @__PURE__ */ a(n, i), g = u / s * c) : g = c; h = /* @__PURE__ */ t(h || o, g), l.push(1 + h.x), u += 16, Math.abs(h.x) > f && Math.abs(h.v) > f; ) ;
    return d ? function(m) {
      return l[m * (l.length - 1) | 0];
    } : u;
  }, "springRK4Factory");
}(), Ie = /* @__PURE__ */ m$1(function(e, t, a, n) {
  var i = /* @__PURE__ */ qh(e, t, a, n);
  return function(s, o, l) {
    return s + (o - s) * i(l);
  };
}, "cubicBezier"), Ua = {
  linear: /* @__PURE__ */ m$1(function(e, t, a) {
    return e + (t - e) * a;
  }, "linear"),
  ease: /* @__PURE__ */ Ie(0.25, 0.1, 0.25, 1),
  "ease-in": /* @__PURE__ */ Ie(0.42, 0, 1, 1),
  "ease-out": /* @__PURE__ */ Ie(0, 0, 0.58, 1),
  "ease-in-out": /* @__PURE__ */ Ie(0.42, 0, 0.58, 1),
  "ease-in-sine": /* @__PURE__ */ Ie(0.47, 0, 0.745, 0.715),
  "ease-out-sine": /* @__PURE__ */ Ie(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": /* @__PURE__ */ Ie(0.445, 0.05, 0.55, 0.95),
  "ease-in-quad": /* @__PURE__ */ Ie(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": /* @__PURE__ */ Ie(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": /* @__PURE__ */ Ie(0.455, 0.03, 0.515, 0.955),
  "ease-in-cubic": /* @__PURE__ */ Ie(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": /* @__PURE__ */ Ie(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": /* @__PURE__ */ Ie(0.645, 0.045, 0.355, 1),
  "ease-in-quart": /* @__PURE__ */ Ie(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": /* @__PURE__ */ Ie(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": /* @__PURE__ */ Ie(0.77, 0, 0.175, 1),
  "ease-in-quint": /* @__PURE__ */ Ie(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": /* @__PURE__ */ Ie(0.23, 1, 0.32, 1),
  "ease-in-out-quint": /* @__PURE__ */ Ie(0.86, 0, 0.07, 1),
  "ease-in-expo": /* @__PURE__ */ Ie(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": /* @__PURE__ */ Ie(0.19, 1, 0.22, 1),
  "ease-in-out-expo": /* @__PURE__ */ Ie(1, 0, 0, 1),
  "ease-in-circ": /* @__PURE__ */ Ie(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": /* @__PURE__ */ Ie(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": /* @__PURE__ */ Ie(0.785, 0.135, 0.15, 0.86),
  spring: /* @__PURE__ */ m$1(function(e, t, a) {
    if (a === 0) return Ua.linear;
    var n = /* @__PURE__ */ $h(e, t, a);
    return function(i, s, o) {
      return i + (s - i) * n(o);
    };
  }, "spring"),
  "cubic-bezier": Ie
};
function Cs(r10, e, t, a, n) {
  if (a === 1 || e === t) return t;
  var i = /* @__PURE__ */ n(e, t, a);
  return r10 == null || ((r10.roundValue || r10.color) && (i = /* @__PURE__ */ Math.round(i)), r10.min !== void 0 && (i = /* @__PURE__ */ Math.max(i, r10.min)), r10.max !== void 0 && (i = /* @__PURE__ */ Math.min(i, r10.max))), i;
}
m$1(Cs, "getEasedValue");
function Ss(r10, e) {
  return r10.pfValue != null || r10.value != null ? r10.pfValue != null && (e == null || e.type.units !== "%") ? r10.pfValue : r10.value : r10;
}
m$1(Ss, "getValue");
function St(r10, e, t, a, n) {
  var i = n != null ? n.type : null;
  t < 0 ? t = 0 : t > 1 && (t = 1);
  var s = /* @__PURE__ */ Ss(r10, n), o = /* @__PURE__ */ Ss(e, n);
  if (ie(s) && ie(o)) return Cs(i, s, o, t, a);
  if (Oe(s) && Oe(o)) {
    for (var l = [], u = 0; u < o.length; u++) {
      var f = s[u], c = o[u];
      if (f != null && c != null) {
        var d = /* @__PURE__ */ Cs(i, f, c, t, a);
        l.push(d);
      } else l.push(c);
    }
    return l;
  }
}
m$1(St, "ease");
function Hh(r10, e, t, a) {
  var n = !a, i = r10._private, s = e._private, o = s.easing, l = s.startTime, u = a ? r10 : r10.cy(), f = /* @__PURE__ */ u.style();
  if (!s.easingImpl) if (o == null) s.easingImpl = Ua.linear;
  else {
    var c;
    if (he(o)) {
      var d = /* @__PURE__ */ f.parse("transition-timing-function", o);
      c = d.value;
    } else c = o;
    var g, h;
    he(c) ? (g = c, h = []) : (g = c[1], h = /* @__PURE__ */ c.slice(2).map(function($) {
      return +$;
    })), h.length > 0 ? (g === "spring" && h.push(s.duration), s.easingImpl = /* @__PURE__ */ Ua[g].apply(null, h)) : s.easingImpl = Ua[g];
  }
  var m = s.easingImpl, y;
  if (s.duration === 0 ? y = 1 : y = (t - l) / s.duration, s.applying && (y = s.progress), y < 0 ? y = 0 : y > 1 && (y = 1), s.delay == null) {
    var p = s.startPosition, b1 = s.position;
    if (b1 && n && !r10.locked()) {
      var w = {};
      ra(p.x, b1.x) && (w.x = /* @__PURE__ */ St(p.x, b1.x, y, m)), ra(p.y, b1.y) && (w.y = /* @__PURE__ */ St(p.y, b1.y, y, m)), r10.position(w);
    }
    var x = s.startPan, T = s.pan, C = i.pan, E = T != null && a;
    E && (ra(x.x, T.x) && (C.x = /* @__PURE__ */ St(x.x, T.x, y, m)), ra(x.y, T.y) && (C.y = /* @__PURE__ */ St(x.y, T.y, y, m)), r10.emit("pan"));
    var k = s.startZoom, S = s.zoom, L = S != null && a;
    L && (ra(k, S) && (i.zoom = /* @__PURE__ */ da(i.minZoom, /* @__PURE__ */ St(k, S, y, m), i.maxZoom)), r10.emit("zoom")), (E || L) && r10.emit("viewport");
    var B = s.style;
    if (B && B.length > 0 && n) {
      for (var M = 0; M < B.length; M++) {
        var A = B[M], P = A.name, I = A, R = s.startStyle[P], O = f.properties[R.name], z = /* @__PURE__ */ St(R, I, y, m, O);
        f.overrideBypass(r10, P, z);
      }
      r10.emit("style");
    }
  }
  return s.progress = y, y;
}
m$1(Hh, "step$1");
function ra(r10, e) {
  return r10 == null || e == null ? false : ie(r10) && ie(e) ? true : !!(r10 && e);
}
m$1(ra, "valid");
function Gh(r10, e, t, a) {
  var n = e._private;
  n.started = true, n.startTime = t - n.progress * n.duration;
}
m$1(Gh, "startAnimation");
function Ts(r10, e) {
  var t = e._private.aniEles, a = [];
  function n(f, c) {
    var d = f._private, g = d.animation.current, h = d.animation.queue, m = false;
    if (g.length === 0) {
      var y = /* @__PURE__ */ h.shift();
      y && g.push(y);
    }
    for (var p = /* @__PURE__ */ m$1(function(C) {
      for (var E = C.length - 1; E >= 0; E--) {
        var k = C[E];
        k();
      }
      C.splice(0, C.length);
    }, "callbacks"), b1 = g.length - 1; b1 >= 0; b1--) {
      var w = g[b1], x = w._private;
      if (x.stopped) {
        g.splice(b1, 1), x.hooked = false, x.playing = false, x.started = false, p(x.frames);
        continue;
      }
      !x.playing && !x.applying || (x.playing && x.applying && (x.applying = false), x.started || Gh(f, w, r10), Hh(f, w, r10, c), x.applying && (x.applying = false), p(x.frames), x.step != null && x.step(r10), w.completed() && (g.splice(b1, 1), x.hooked = false, x.playing = false, x.started = false, p(x.completes)), m = true);
    }
    return !c && g.length === 0 && h.length === 0 && a.push(f), m;
  }
  m$1(n, "stepOne");
  for (var i = false, s = 0; s < t.length; s++) {
    var o = t[s], l = /* @__PURE__ */ n(o);
    i = i || l;
  }
  var u = /* @__PURE__ */ n(e, true);
  (i || u) && (t.length > 0 ? e.notify("draw", t) : e.notify("draw")), t.unmerge(a), e.emit("step");
}
m$1(Ts, "stepAll");
var Kh = {
  animate: /* @__PURE__ */ Me.animate(),
  animation: /* @__PURE__ */ Me.animation(),
  animated: /* @__PURE__ */ Me.animated(),
  clearQueue: /* @__PURE__ */ Me.clearQueue(),
  delay: /* @__PURE__ */ Me.delay(),
  delayAnimation: /* @__PURE__ */ Me.delayAnimation(),
  stop: /* @__PURE__ */ Me.stop(),
  addToAnimationPool: /* @__PURE__ */ m$1(function(e) {
    var t = this;
    t.styleEnabled() && t._private.aniEles.merge(e);
  }, "addToAnimationPool"),
  stopAnimationLoop: /* @__PURE__ */ m$1(function() {
    this._private.animationsRunning = false;
  }, "stopAnimationLoop"),
  startAnimationLoop: /* @__PURE__ */ m$1(function() {
    var e = this;
    if (e._private.animationsRunning = true, !e.styleEnabled()) return;
    function t() {
      e._private.animationsRunning && _a(/* @__PURE__ */ m$1(function(i) {
        Ts(i, e), t();
      }, "animationStep"));
    }
    m$1(t, "headlessStep");
    var a = /* @__PURE__ */ e.renderer();
    a && a.beforeRender ? a.beforeRender(/* @__PURE__ */ m$1(function(i, s) {
      Ts(s, e);
    }, "rendererAnimationStep"), a.beforeRenderPriorities.animations) : t();
  }, "startAnimationLoop")
}, Wh = {
  qualifierCompare: /* @__PURE__ */ m$1(function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  }, "qualifierCompare"),
  eventMatches: /* @__PURE__ */ m$1(function(e, t, a) {
    var n = t.qualifier;
    return n != null ? e !== a.target && xa(a.target) && n.matches(a.target) : true;
  }, "eventMatches"),
  addEventFields: /* @__PURE__ */ m$1(function(e, t) {
    t.cy = e, t.target = e;
  }, "addEventFields"),
  callbackContext: /* @__PURE__ */ m$1(function(e, t, a) {
    return t.qualifier != null ? a.target : e;
  }, "callbackContext")
}, Va = /* @__PURE__ */ m$1(function(e) {
  return he(e) ? new et(e) : e;
}, "argSelector"), jo = {
  createEmitter: /* @__PURE__ */ m$1(function() {
    var e = this._private;
    return e.emitter || (e.emitter = new bn(Wh, this)), this;
  }, "createEmitter"),
  emitter: /* @__PURE__ */ m$1(function() {
    return this._private.emitter;
  }, "emitter"),
  on: /* @__PURE__ */ m$1(function(e, t, a) {
    return this.emitter().on(e, /* @__PURE__ */ Va(t), a), this;
  }, "on"),
  removeListener: /* @__PURE__ */ m$1(function(e, t, a) {
    return this.emitter().removeListener(e, /* @__PURE__ */ Va(t), a), this;
  }, "removeListener"),
  removeAllListeners: /* @__PURE__ */ m$1(function() {
    return this.emitter().removeAllListeners(), this;
  }, "removeAllListeners"),
  one: /* @__PURE__ */ m$1(function(e, t, a) {
    return this.emitter().one(e, /* @__PURE__ */ Va(t), a), this;
  }, "one"),
  once: /* @__PURE__ */ m$1(function(e, t, a) {
    return this.emitter().one(e, /* @__PURE__ */ Va(t), a), this;
  }, "once"),
  emit: /* @__PURE__ */ m$1(function(e, t) {
    return this.emitter().emit(e, t), this;
  }, "emit"),
  emitAndNotify: /* @__PURE__ */ m$1(function(e, t) {
    return this.emit(e), this.notify(e, t), this;
  }, "emitAndNotify")
};
Me.eventAliasesOn(jo);
var Xn = {
  png: /* @__PURE__ */ m$1(function(e) {
    var t = this._private.renderer;
    return e = e || {}, t.png(e);
  }, "png"),
  jpg: /* @__PURE__ */ m$1(function(e) {
    var t = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", t.jpg(e);
  }, "jpg")
};
Xn.jpeg = Xn.jpg;
var Ya = {
  layout: /* @__PURE__ */ m$1(function(e) {
    var t = this;
    if (e == null) {
      qe("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      qe("A `name` must be specified to make a layout");
      return;
    }
    var a = e.name, n = /* @__PURE__ */ t.extension("layout", a);
    if (n == null) {
      qe("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var i;
    he(e.eles) ? i = /* @__PURE__ */ t.$(e.eles) : i = e.eles != null ? e.eles : t.$();
    var s = new n(we({}, e, {
      cy: t,
      eles: i
    }));
    return s;
  }, "layout")
};
Ya.createLayout = Ya.makeLayout = Ya.layout;
var Uh = {
  notify: /* @__PURE__ */ m$1(function(e, t) {
    var a = this._private;
    if (this.batching()) {
      a.batchNotifications = a.batchNotifications || {};
      var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
      t != null && n.merge(t);
      return;
    }
    if (a.notificationsEnabled) {
      var i = /* @__PURE__ */ this.renderer();
      this.destroyed() || !i || i.notify(e, t);
    }
  }, "notify"),
  notifications: /* @__PURE__ */ m$1(function(e) {
    var t = this._private;
    return e === void 0 ? t.notificationsEnabled : (t.notificationsEnabled = !!e, this);
  }, "notifications"),
  noNotifications: /* @__PURE__ */ m$1(function(e) {
    this.notifications(false), e(), this.notifications(true);
  }, "noNotifications"),
  batching: /* @__PURE__ */ m$1(function() {
    return this._private.batchCount > 0;
  }, "batching"),
  startBatch: /* @__PURE__ */ m$1(function() {
    var e = this._private;
    return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = /* @__PURE__ */ this.collection(), e.batchNotifications = {}), e.batchCount++, this;
  }, "startBatch"),
  endBatch: /* @__PURE__ */ m$1(function() {
    var e = this._private;
    if (e.batchCount === 0) return this;
    if (e.batchCount--, e.batchCount === 0) {
      e.batchStyleEles.updateStyle();
      var t = /* @__PURE__ */ this.renderer();
      Object.keys(e.batchNotifications).forEach(function(a) {
        var n = e.batchNotifications[a];
        n.empty() ? t.notify(a) : t.notify(a, n);
      });
    }
    return this;
  }, "endBatch"),
  batch: /* @__PURE__ */ m$1(function(e) {
    return this.startBatch(), e(), this.endBatch(), this;
  }, "batch"),
  batchData: /* @__PURE__ */ m$1(function(e) {
    var t = this;
    return this.batch(function() {
      for (var a = /* @__PURE__ */ Object.keys(e), n = 0; n < a.length; n++) {
        var i = a[n], s = e[i], o = /* @__PURE__ */ t.getElementById(i);
        o.data(s);
      }
    });
  }, "batchData")
}, Yh = /* @__PURE__ */ rr({
  hideEdgesOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: false,
  showFps: false
}), Zn = {
  renderTo: /* @__PURE__ */ m$1(function(e, t, a, n) {
    var i = this._private.renderer;
    return i.renderTo(e, t, a, n), this;
  }, "renderTo"),
  renderer: /* @__PURE__ */ m$1(function() {
    return this._private.renderer;
  }, "renderer"),
  forceRender: /* @__PURE__ */ m$1(function() {
    return this.notify("draw"), this;
  }, "forceRender"),
  resize: /* @__PURE__ */ m$1(function() {
    return this.invalidateSize(), this.emitAndNotify("resize"), this;
  }, "resize"),
  initRenderer: /* @__PURE__ */ m$1(function(e) {
    var t = this, a = /* @__PURE__ */ t.extension("renderer", e.name);
    if (a == null) {
      qe(/* @__PURE__ */ "Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Le("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var n = /* @__PURE__ */ Yh(e);
    n.cy = t, t._private.renderer = new a(n), this.notify("init");
  }, "initRenderer"),
  destroyRenderer: /* @__PURE__ */ m$1(function() {
    var e = this;
    e.notify("destroy");
    var t = /* @__PURE__ */ e.container();
    if (t) for (t._cyreg = null; t.childNodes.length > 0; ) t.removeChild(t.childNodes[0]);
    e._private.renderer = null, e.mutableElements().forEach(function(a) {
      var n = a._private;
      n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
    });
  }, "destroyRenderer"),
  onRender: /* @__PURE__ */ m$1(function(e) {
    return this.on("render", e);
  }, "onRender"),
  offRender: /* @__PURE__ */ m$1(function(e) {
    return this.off("render", e);
  }, "offRender")
};
Zn.invalidateDimensions = Zn.resize;
var Xa = {
  collection: /* @__PURE__ */ m$1(function(e, t) {
    return he(e) ? this.$(e) : pr(e) ? e.collection() : Oe(e) ? (t || (t = {}), new er(this, e, t.unique, t.removed)) : new er(this);
  }, "collection"),
  nodes: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ this.$(function(a) {
      return a.isNode();
    });
    return e ? t.filter(e) : t;
  }, "nodes"),
  edges: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ this.$(function(a) {
      return a.isEdge();
    });
    return e ? t.filter(e) : t;
  }, "edges"),
  $: /* @__PURE__ */ m$1(function(e) {
    var t = this._private.elements;
    return e ? t.filter(e) : t.spawnSelf();
  }, "$"),
  mutableElements: /* @__PURE__ */ m$1(function() {
    return this._private.elements;
  }, "mutableElements")
};
Xa.elements = Xa.filter = Xa.$;
var or = {}, oa = "t", Xh = "f";
or.apply = function(r10) {
  for (var e = this, t = e._private, a = t.cy, n = /* @__PURE__ */ a.collection(), i = 0; i < r10.length; i++) {
    var s = r10[i], o = /* @__PURE__ */ e.getContextMeta(s);
    if (!o.empty) {
      var l = /* @__PURE__ */ e.getContextStyle(o), u = /* @__PURE__ */ e.applyContextStyle(o, l, s);
      s._private.appliedInitStyle ? e.updateTransitions(s, u.diffProps) : s._private.appliedInitStyle = true;
      var f = /* @__PURE__ */ e.updateStyleHints(s);
      f && n.push(s);
    }
  }
  return n;
};
or.getPropertiesDiff = function(r10, e) {
  var t = this, a = t._private.propDiffs = t._private.propDiffs || {}, n = r10 + "-" + e, i = a[n];
  if (i) return i;
  for (var s = [], o = {}, l = 0; l < t.length; l++) {
    var u = t[l], f = r10[l] === oa, c = e[l] === oa, d = f !== c, g = u.mappedProperties.length > 0;
    if (d || c && g) {
      var h = void 0;
      d && g || d ? h = u.properties : g && (h = u.mappedProperties);
      for (var m = 0; m < h.length; m++) {
        for (var y = h[m], p = y.name, b1 = false, w = l + 1; w < t.length; w++) {
          var x = t[w], T = e[w] === oa;
          if (T && (b1 = x.properties[y.name] != null, b1)) break;
        }
        !o[p] && !b1 && (o[p] = true, s.push(p));
      }
    }
  }
  return a[n] = s, s;
};
or.getContextMeta = function(r10) {
  for (var e = this, t = "", a, n = r10._private.styleCxtKey || "", i = 0; i < e.length; i++) {
    var s = e[i], o = s.selector && s.selector.matches(r10);
    o ? t += oa : t += Xh;
  }
  return a = /* @__PURE__ */ e.getPropertiesDiff(n, t), r10._private.styleCxtKey = t, {
    key: t,
    diffPropNames: a,
    empty: a.length === 0
  };
};
or.getContextStyle = function(r10) {
  var e = r10.key, t = this, a = this._private.contextStyles = this._private.contextStyles || {};
  if (a[e]) return a[e];
  for (var n = {
    _private: {
      key: e
    }
  }, i = 0; i < t.length; i++) {
    var s = t[i], o = e[i] === oa;
    if (o) for (var l = 0; l < s.properties.length; l++) {
      var u = s.properties[l];
      n[u.name] = u;
    }
  }
  return a[e] = n, n;
};
or.applyContextStyle = function(r10, e, t) {
  for (var a = this, n = r10.diffPropNames, i = {}, s = a.types, o = 0; o < n.length; o++) {
    var l = n[o], u = e[l], f = /* @__PURE__ */ t.pstyle(l);
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
        var c = f.mapping, d = c.fnValue = /* @__PURE__ */ u.value(t);
        if (d === c.prevFnValue) continue;
      }
      var g = i[l] = {
        prev: f
      };
      a.applyParsedProperty(t, u), g.next = /* @__PURE__ */ t.pstyle(l), g.next && g.next.bypass && (g.next = g.next.bypassed);
    }
  }
  return {
    diffProps: i
  };
};
or.updateStyleHints = function(r10) {
  var e = r10._private, t = this, a = t.propertyGroupNames, n = t.propertyGroupKeys, i = /* @__PURE__ */ m$1(function(Z, oe, ge) {
    return t.getPropertiesHash(Z, oe, ge);
  }, "propHash"), s = e.styleKey;
  if (r10.removed()) return false;
  var o = e.group === "nodes", l = r10._private.style;
  a = /* @__PURE__ */ Object.keys(l);
  for (var u = 0; u < n.length; u++) {
    var f = n[u];
    e.styleKeys[f] = [
      kt,
      aa
    ];
  }
  for (var c = /* @__PURE__ */ m$1(function(Z, oe) {
    return e.styleKeys[oe][0] = /* @__PURE__ */ va(Z, e.styleKeys[oe][0]);
  }, "updateGrKey1"), d = /* @__PURE__ */ m$1(function(Z, oe) {
    return e.styleKeys[oe][1] = /* @__PURE__ */ fa(Z, e.styleKeys[oe][1]);
  }, "updateGrKey2"), g = /* @__PURE__ */ m$1(function(Z, oe) {
    c(Z, oe), d(Z, oe);
  }, "updateGrKey"), h = /* @__PURE__ */ m$1(function(Z, oe) {
    for (var ge = 0; ge < Z.length; ge++) {
      var ne = /* @__PURE__ */ Z.charCodeAt(ge);
      c(ne, oe), d(ne, oe);
    }
  }, "updateGrKeyWStr"), m = 2e9, y = /* @__PURE__ */ m$1(function(Z) {
    return -128 < Z && Z < 128 && Math.floor(Z) !== Z ? m - (Z * 1024 | 0) : Z;
  }, "cleanNum"), p = 0; p < a.length; p++) {
    var b1 = a[p], w = l[b1];
    if (w != null) {
      var x = this.properties[b1], T = x.type, C = x.groupKey, E = void 0;
      x.hashOverride != null ? E = /* @__PURE__ */ x.hashOverride(r10, w) : w.pfValue != null && (E = w.pfValue);
      var k = x.enums == null ? w.value : null, S = E != null, L = k != null, B = S || L, M = w.units;
      if (T.number && B && !T.multiple) {
        var A = S ? E : k;
        g(/* @__PURE__ */ y(A), C), !S && M != null && h(M, C);
      } else h(w.strValue, C);
    }
  }
  for (var P = [
    kt,
    aa
  ], I = 0; I < n.length; I++) {
    var R = n[I], O = e.styleKeys[R];
    P[0] = /* @__PURE__ */ va(O[0], P[0]), P[1] = /* @__PURE__ */ fa(O[1], P[1]);
  }
  e.styleKey = /* @__PURE__ */ _l(P[0], P[1]);
  var z = e.styleKeys;
  e.labelDimsKey = /* @__PURE__ */ Ur(z.labelDimensions);
  var $ = /* @__PURE__ */ i(r10, [
    "label"
  ], z.labelDimensions);
  if (e.labelKey = /* @__PURE__ */ Ur($), e.labelStyleKey = /* @__PURE__ */ Ur(/* @__PURE__ */ Ma(z.commonLabel, $)), !o) {
    var H = /* @__PURE__ */ i(r10, [
      "source-label"
    ], z.labelDimensions);
    e.sourceLabelKey = /* @__PURE__ */ Ur(H), e.sourceLabelStyleKey = /* @__PURE__ */ Ur(/* @__PURE__ */ Ma(z.commonLabel, H));
    var V = /* @__PURE__ */ i(r10, [
      "target-label"
    ], z.labelDimensions);
    e.targetLabelKey = /* @__PURE__ */ Ur(V), e.targetLabelStyleKey = /* @__PURE__ */ Ur(/* @__PURE__ */ Ma(z.commonLabel, V));
  }
  if (o) {
    var F = e.styleKeys, U = F.nodeBody, J = F.nodeBorder, j = F.nodeOutline, ee = F.backgroundImage, re = F.compound, Y = F.pie, N = /* @__PURE__ */ [
      U,
      J,
      j,
      ee,
      re,
      Y
    ].filter(function(X) {
      return X != null;
    }).reduce(Ma, [
      kt,
      aa
    ]);
    e.nodeKey = /* @__PURE__ */ Ur(N), e.hasPie = Y != null && Y[0] !== kt && Y[1] !== aa;
  }
  return s !== e.styleKey;
};
or.clearStyleHints = function(r10) {
  var e = r10._private;
  e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
};
or.applyParsedProperty = function(r10, e) {
  var t = this, a = e, n = r10._private.style, i, s = t.types, o = t.properties[a.name].type, l = a.bypass, u = n[a.name], f = u && u.bypass, c = r10._private, d = "mapping", g = /* @__PURE__ */ m$1(function(U) {
    return U == null ? null : U.pfValue != null ? U.pfValue : U.value;
  }, "getVal"), h = /* @__PURE__ */ m$1(function() {
    var U = /* @__PURE__ */ g(u), J = /* @__PURE__ */ g(a);
    t.checkTriggers(r10, a.name, U, J);
  }, "checkTriggers");
  if (e.name === "curve-style" && r10.isEdge() && (e.value !== "bezier" && r10.isLoop() || e.value === "haystack" && (r10.source().isParent() || r10.target().isParent())) && (a = e = /* @__PURE__ */ this.parse(e.name, "bezier", l)), a.delete) return n[a.name] = void 0, h(), true;
  if (a.deleteBypassed) return u ? u.bypass ? (u.bypassed = void 0, h(), true) : false : (h(), true);
  if (a.deleteBypass) return u ? u.bypass ? (n[a.name] = u.bypassed, h(), true) : false : (h(), true);
  var m = /* @__PURE__ */ m$1(function() {
    Le("Do not assign mappings to elements without corresponding data (i.e. ele `" + r10.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
  }, "printMappingErr");
  switch (a.mapped) {
    case s.mapData: {
      for (var y = /* @__PURE__ */ a.field.split("."), p = c.data, b1 = 0; b1 < y.length && p; b1++) {
        var w = y[b1];
        p = p[w];
      }
      if (p == null) return m(), false;
      var x;
      if (ie(p)) {
        var T = a.fieldMax - a.fieldMin;
        T === 0 ? x = 0 : x = (p - a.fieldMin) / T;
      } else return Le("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + p + "` for `" + r10.id() + "` is non-numeric)"), false;
      if (x < 0 ? x = 0 : x > 1 && (x = 1), o.color) {
        var C = a.valueMin[0], E = a.valueMax[0], k = a.valueMin[1], S = a.valueMax[1], L = a.valueMin[2], B = a.valueMax[2], M = a.valueMin[3] == null ? 1 : a.valueMin[3], A = a.valueMax[3] == null ? 1 : a.valueMax[3], P = [
          /* @__PURE__ */ Math.round(C + (E - C) * x),
          /* @__PURE__ */ Math.round(k + (S - k) * x),
          /* @__PURE__ */ Math.round(L + (B - L) * x),
          /* @__PURE__ */ Math.round(M + (A - M) * x)
        ];
        i = {
          bypass: a.bypass,
          name: a.name,
          value: P,
          strValue: "rgb(" + P[0] + ", " + P[1] + ", " + P[2] + ")"
        };
      } else if (o.number) {
        var I = a.valueMin + (a.valueMax - a.valueMin) * x;
        i = /* @__PURE__ */ this.parse(a.name, I, a.bypass, d);
      } else return false;
      if (!i) return m(), false;
      i.mapping = a, a = i;
      break;
    }
    case s.data: {
      for (var R = /* @__PURE__ */ a.field.split("."), O = c.data, z = 0; z < R.length && O; z++) {
        var $ = R[z];
        O = O[$];
      }
      if (O != null && (i = /* @__PURE__ */ this.parse(a.name, O, a.bypass, d)), !i) return m(), false;
      i.mapping = a, a = i;
      break;
    }
    case s.fn: {
      var H = a.value, V = a.fnValue != null ? a.fnValue : H(r10);
      if (a.prevFnValue = V, V == null) return Le("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + r10.id() + "` is null)"), false;
      if (i = /* @__PURE__ */ this.parse(a.name, V, a.bypass, d), !i) return Le("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + r10.id() + "` is invalid)"), false;
      i.mapping = /* @__PURE__ */ Or(a), a = i;
      break;
    }
    case void 0:
      break;
    default:
      return false;
  }
  return l ? (f ? a.bypassed = u.bypassed : a.bypassed = u, n[a.name] = a) : f ? u.bypassed = a : n[a.name] = a, h(), true;
};
or.cleanElements = function(r10, e) {
  for (var t = 0; t < r10.length; t++) {
    var a = r10[t];
    if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e) a._private.style = {};
    else for (var n = a._private.style, i = /* @__PURE__ */ Object.keys(n), s = 0; s < i.length; s++) {
      var o = i[s], l = n[o];
      l != null && (l.bypass ? l.bypassed = null : n[o] = null);
    }
  }
};
or.update = function() {
  var r10 = this._private.cy, e = /* @__PURE__ */ r10.mutableElements();
  e.updateStyle();
};
or.updateTransitions = function(r10, e) {
  var t = this, a = r10._private, n = r10.pstyle("transition-property").value, i = r10.pstyle("transition-duration").pfValue, s = r10.pstyle("transition-delay").pfValue;
  if (n.length > 0 && i > 0) {
    for (var o = {}, l = false, u = 0; u < n.length; u++) {
      var f = n[u], c = /* @__PURE__ */ r10.pstyle(f), d = e[f];
      if (d) {
        var g = d.prev, h = g, m = d.next != null ? d.next : c, y = false, p = void 0, b1 = 1e-6;
        h && (ie(h.pfValue) && ie(m.pfValue) ? (y = m.pfValue - h.pfValue, p = h.pfValue + b1 * y) : ie(h.value) && ie(m.value) ? (y = m.value - h.value, p = h.value + b1 * y) : Oe(h.value) && Oe(m.value) && (y = h.value[0] !== m.value[0] || h.value[1] !== m.value[1] || h.value[2] !== m.value[2], p = h.strValue), y && (o[f] = m.strValue, this.applyBypass(r10, f, p), l = true));
      }
    }
    if (!l) return;
    a.transitioning = true, new qt(function(w) {
      s > 0 ? r10.delayAnimation(s).play().promise().then(w) : w();
    }).then(function() {
      return r10.animation({
        style: o,
        duration: i,
        easing: r10.pstyle("transition-timing-function").value,
        queue: false
      }).play().promise();
    }).then(function() {
      t.removeBypasses(r10, n), r10.emitAndNotify("style"), a.transitioning = false;
    });
  } else a.transitioning && (this.removeBypasses(r10, n), r10.emitAndNotify("style"), a.transitioning = false);
};
or.checkTrigger = function(r10, e, t, a, n, i) {
  var s = this.properties[e], o = /* @__PURE__ */ n(s);
  o != null && o(t, a) && i(s);
};
or.checkZOrderTrigger = function(r10, e, t, a) {
  var n = this;
  this.checkTrigger(r10, e, t, a, function(i) {
    return i.triggersZOrder;
  }, function() {
    n._private.cy.notify("zorder", r10);
  });
};
or.checkBoundsTrigger = function(r10, e, t, a) {
  this.checkTrigger(r10, e, t, a, function(n) {
    return n.triggersBounds;
  }, function(n) {
    r10.dirtyCompoundBoundsCache(), r10.dirtyBoundingBoxCache(), n.triggersBoundsOfParallelBeziers && e === "curve-style" && (t === "bezier" || a === "bezier") && r10.parallelEdges().forEach(function(i) {
      i.isBundledBezier() && i.dirtyBoundingBoxCache();
    }), n.triggersBoundsOfConnectedEdges && e === "display" && (t === "none" || a === "none") && r10.connectedEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
or.checkTriggers = function(r10, e, t, a) {
  r10.dirtyStyleCache(), this.checkZOrderTrigger(r10, e, t, a), this.checkBoundsTrigger(r10, e, t, a);
};
var Ta = {};
Ta.applyBypass = function(r10, e, t, a) {
  var n = this, i = [], s = true;
  if (e === "*" || e === "**") {
    if (t !== void 0) for (var o = 0; o < n.properties.length; o++) {
      var l = n.properties[o], u = l.name, f = /* @__PURE__ */ this.parse(u, t, true);
      f && i.push(f);
    }
  } else if (he(e)) {
    var c = /* @__PURE__ */ this.parse(e, t, true);
    c && i.push(c);
  } else if (Te(e)) {
    var d = e;
    a = t;
    for (var g = /* @__PURE__ */ Object.keys(d), h = 0; h < g.length; h++) {
      var m = g[h], y = d[m];
      if (y === void 0 && (y = d[ln(m)]), y !== void 0) {
        var p = /* @__PURE__ */ this.parse(m, y, true);
        p && i.push(p);
      }
    }
  } else return false;
  if (i.length === 0) return false;
  for (var b1 = false, w = 0; w < r10.length; w++) {
    for (var x = r10[w], T = {}, C = void 0, E = 0; E < i.length; E++) {
      var k = i[E];
      if (a) {
        var S = /* @__PURE__ */ x.pstyle(k.name);
        C = T[k.name] = {
          prev: S
        };
      }
      b1 = this.applyParsedProperty(x, /* @__PURE__ */ Or(k)) || b1, a && (C.next = /* @__PURE__ */ x.pstyle(k.name));
    }
    b1 && this.updateStyleHints(x), a && this.updateTransitions(x, T, s);
  }
  return b1;
};
Ta.overrideBypass = function(r10, e, t) {
  e = /* @__PURE__ */ oi(e);
  for (var a = 0; a < r10.length; a++) {
    var n = r10[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, l = s.mutiple, u = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(n, e, t) : (i.value = t, i.pfValue != null && (i.pfValue = t), o ? i.strValue = "rgb(" + t.join(",") + ")" : l ? i.strValue = /* @__PURE__ */ t.join(" ") : i.strValue = "" + t, this.updateStyleHints(n)), this.checkTriggers(n, e, u, t);
  }
};
Ta.removeAllBypasses = function(r10, e) {
  return this.removeBypasses(r10, this.propertyNames, e);
};
Ta.removeBypasses = function(r10, e, t) {
  for (var a = true, n = 0; n < r10.length; n++) {
    for (var i = r10[n], s = {}, o = 0; o < e.length; o++) {
      var l = e[o], u = this.properties[l], f = /* @__PURE__ */ i.pstyle(u.name);
      if (!(!f || !f.bypass)) {
        var c = "", d = /* @__PURE__ */ this.parse(l, c, true), g = s[u.name] = {
          prev: f
        };
        this.applyParsedProperty(i, d), g.next = /* @__PURE__ */ i.pstyle(u.name);
      }
    }
    this.updateStyleHints(i), t && this.updateTransitions(i, s, a);
  }
};
var xi = {};
xi.getEmSizeInPixels = function() {
  var r10 = /* @__PURE__ */ this.containerCss("font-size");
  return r10 != null ? parseFloat(r10) : 1;
};
xi.containerCss = function(r10) {
  var e = this._private.cy, t = /* @__PURE__ */ e.container(), a = /* @__PURE__ */ e.window();
  if (a && t && a.getComputedStyle) return a.getComputedStyle(t).getPropertyValue(r10);
};
var zr = {};
zr.getRenderedStyle = function(r10, e) {
  return e ? this.getStylePropertyValue(r10, e, true) : this.getRawStyle(r10, true);
};
zr.getRawStyle = function(r10, e) {
  var t = this;
  if (r10 = r10[0], r10) {
    for (var a = {}, n = 0; n < t.properties.length; n++) {
      var i = t.properties[n], s = /* @__PURE__ */ t.getStylePropertyValue(r10, i.name, e);
      s != null && (a[i.name] = s, a[ln(i.name)] = s);
    }
    return a;
  }
};
zr.getIndexedStyle = function(r10, e, t, a) {
  var n = r10.pstyle(e)[t][a];
  return n ?? r10.cy().style().getDefaultProperty(e)[t][0];
};
zr.getStylePropertyValue = function(r10, e, t) {
  var a = this;
  if (r10 = r10[0], r10) {
    var n = a.properties[e];
    n.alias && (n = n.pointsTo);
    var i = n.type, s = /* @__PURE__ */ r10.pstyle(n.name);
    if (s) {
      var o = s.value, l = s.units, u = s.strValue;
      if (t && i.number && o != null && ie(o)) {
        var f = /* @__PURE__ */ r10.cy().zoom(), c = /* @__PURE__ */ m$1(function(y) {
          return y * f;
        }, "getRenderedValue"), d = /* @__PURE__ */ m$1(function(y, p) {
          return c(y) + p;
        }, "getValueStringWithUnits"), g = /* @__PURE__ */ Oe(o), h = g ? l.every(function(m) {
          return m != null;
        }) : l != null;
        return h ? g ? o.map(function(m, y) {
          return d(m, l[y]);
        }).join(" ") : d(o, l) : g ? o.map(function(m) {
          return he(m) ? m : "" + c(m);
        }).join(" ") : "" + c(o);
      } else if (u != null) return u;
    }
    return null;
  }
};
zr.getAnimationStartStyle = function(r10, e) {
  for (var t = {}, a = 0; a < e.length; a++) {
    var n = e[a], i = n.name, s = /* @__PURE__ */ r10.pstyle(i);
    s !== void 0 && (Te(s) ? s = /* @__PURE__ */ this.parse(i, s.strValue) : s = /* @__PURE__ */ this.parse(i, s)), s && (t[i] = s);
  }
  return t;
};
zr.getPropsList = function(r10) {
  var e = this, t = [], a = r10, n = e.properties;
  if (a) for (var i = /* @__PURE__ */ Object.keys(a), s = 0; s < i.length; s++) {
    var o = i[s], l = a[o], u = n[o] || n[oi(o)], f = /* @__PURE__ */ this.parse(u.name, l);
    f && t.push(f);
  }
  return t;
};
zr.getNonDefaultPropertiesHash = function(r10, e, t) {
  var a = /* @__PURE__ */ t.slice(), n, i, s, o, l, u;
  for (l = 0; l < e.length; l++) if (n = e[l], i = /* @__PURE__ */ r10.pstyle(n, false), i != null) if (i.pfValue != null) a[0] = /* @__PURE__ */ va(o, a[0]), a[1] = /* @__PURE__ */ fa(o, a[1]);
  else for (s = i.strValue, u = 0; u < s.length; u++) o = /* @__PURE__ */ s.charCodeAt(u), a[0] = /* @__PURE__ */ va(o, a[0]), a[1] = /* @__PURE__ */ fa(o, a[1]);
  return a;
};
zr.getPropertiesHash = zr.getNonDefaultPropertiesHash;
var En = {};
En.appendFromJson = function(r10) {
  for (var e = this, t = 0; t < r10.length; t++) {
    var a = r10[t], n = a.selector, i = a.style || a.css, s = /* @__PURE__ */ Object.keys(i);
    e.selector(n);
    for (var o = 0; o < s.length; o++) {
      var l = s[o], u = i[l];
      e.css(l, u);
    }
  }
  return e;
};
En.fromJson = function(r10) {
  var e = this;
  return e.resetToDefault(), e.appendFromJson(r10), e;
};
En.json = function() {
  for (var r10 = [], e = this.defaultLength; e < this.length; e++) {
    for (var t = this[e], a = t.selector, n = t.properties, i = {}, s = 0; s < n.length; s++) {
      var o = n[s];
      i[o.name] = o.strValue;
    }
    r10.push({
      selector: a ? a.toString() : "core",
      style: i
    });
  }
  return r10;
};
var Ei = {};
Ei.appendFromString = function(r10) {
  var e = this, t = this, a = "" + r10, n, i, s;
  a = /* @__PURE__ */ a.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function o() {
    a.length > n.length ? a = /* @__PURE__ */ a.substr(n.length) : a = "";
  }
  m$1(o, "removeSelAndBlockFromRemaining");
  function l() {
    i.length > s.length ? i = /* @__PURE__ */ i.substr(s.length) : i = "";
  }
  for (m$1(l, "removePropAndValFromRem"); ; ) {
    var u = /* @__PURE__ */ a.match(/^\s*$/);
    if (u) break;
    var f = /* @__PURE__ */ a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!f) {
      Le("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
      break;
    }
    n = f[0];
    var c = f[1];
    if (c !== "core") {
      var d = new et(c);
      if (d.invalid) {
        Le("Skipping parsing of block: Invalid selector found in string stylesheet: " + c), o();
        continue;
      }
    }
    var g = f[2], h = false;
    i = g;
    for (var m = []; ; ) {
      var y = /* @__PURE__ */ i.match(/^\s*$/);
      if (y) break;
      var p = /* @__PURE__ */ i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!p) {
        Le("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + g), h = true;
        break;
      }
      s = p[0];
      var b1 = p[1], w = p[2], x = e.properties[b1];
      if (!x) {
        Le("Skipping property: Invalid property name in: " + s), l();
        continue;
      }
      var T = /* @__PURE__ */ t.parse(b1, w);
      if (!T) {
        Le("Skipping property: Invalid property definition in: " + s), l();
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
    for (var C = 0; C < m.length; C++) {
      var E = m[C];
      t.css(E.name, E.val);
    }
    o();
  }
  return t;
};
Ei.fromString = function(r10) {
  var e = this;
  return e.resetToDefault(), e.appendFromString(r10), e;
};
var _e = {};
(function() {
  var r10 = We, e = rl, t = al, a = nl, n = il, i = /* @__PURE__ */ m$1(function(N) {
    return "^" + N + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, "data"), s = /* @__PURE__ */ m$1(function(N) {
    var X = r10 + "|\\w+|" + e + "|" + t + "|" + a + "|" + n;
    return "^" + N + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + r10 + ")\\s*\\,\\s*(" + r10 + ")\\s*,\\s*(" + X + ")\\s*\\,\\s*(" + X + ")\\)$";
  }, "mapData"), o = [
    `^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`,
    "^(none)$",
    "^(.+)$"
  ];
  _e.types = {
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
      regex: /* @__PURE__ */ i("data")
    },
    layoutData: {
      mapping: true,
      regex: /* @__PURE__ */ i("layoutData")
    },
    scratch: {
      mapping: true,
      regex: /* @__PURE__ */ i("scratch")
    },
    mapData: {
      mapping: true,
      regex: /* @__PURE__ */ s("mapData")
    },
    mapLayoutData: {
      mapping: true,
      regex: /* @__PURE__ */ s("mapLayoutData")
    },
    mapScratch: {
      mapping: true,
      regex: /* @__PURE__ */ s("mapScratch")
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
      validate: /* @__PURE__ */ m$1(function(N, X) {
        switch (N.length) {
          case 2:
            return X[0] !== "deg" && X[0] !== "rad" && X[1] !== "deg" && X[1] !== "rad";
          case 1:
            return he(N[0]) || X[0] === "deg" || X[0] === "rad";
          default:
            return false;
        }
      }, "validate")
    },
    easing: {
      regexes: [
        "^(spring)\\s*\\(\\s*(" + r10 + ")\\s*,\\s*(" + r10 + ")\\s*\\)$",
        "^(cubic-bezier)\\s*\\(\\s*(" + r10 + ")\\s*,\\s*(" + r10 + ")\\s*,\\s*(" + r10 + ")\\s*,\\s*(" + r10 + ")\\s*\\)$"
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
      validate: /* @__PURE__ */ m$1(function(N) {
        var X = N.length;
        return X === 1 || X === 2 || X === 4;
      }, "validate")
    }
  };
  var l = {
    zeroNonZero: /* @__PURE__ */ m$1(function(N, X) {
      return (N == null || X == null) && N !== X || N == 0 && X != 0 ? true : N != 0 && X == 0;
    }, "zeroNonZero"),
    any: /* @__PURE__ */ m$1(function(N, X) {
      return N != X;
    }, "any"),
    emptyNonEmpty: /* @__PURE__ */ m$1(function(N, X) {
      var Z = /* @__PURE__ */ _r(N), oe = /* @__PURE__ */ _r(X);
      return Z && !oe || !Z && oe;
    }, "emptyNonEmpty")
  }, u = _e.types, f = [
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
  ], x = /* @__PURE__ */ m$1(function(N, X) {
    return X.value === "label" ? -N.poolIndex() : X.pfValue;
  }, "nodeSizeHashOverride"), T = [
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
  ], C = [
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
  ], k = [
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
  ], S = [
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
  ], L = [
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
  ], B = [
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
  ], M = [
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
  ], A = [];
  _e.pieBackgroundN = 16, A.push({
    name: "pie-size",
    type: u.sizeMaybePercent
  });
  for (var P = 1; P <= _e.pieBackgroundN; P++) A.push({
    name: "pie-" + P + "-background-color",
    type: u.color
  }), A.push({
    name: "pie-" + P + "-background-size",
    type: u.percent
  }), A.push({
    name: "pie-" + P + "-background-opacity",
    type: u.zeroOneNumber
  });
  var I = [], R = _e.arrowPrefixes = [
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
  ].forEach(function(Y) {
    R.forEach(function(N) {
      var X = N + "-" + Y.name, Z = Y.type, oe = Y.triggersBounds;
      I.push({
        name: X,
        type: Z,
        triggersBounds: oe
      });
    });
  }, {});
  var O = _e.properties = /* @__PURE__ */ [].concat(m, w, y, p, b1, B, h, g, f, c, d, T, C, E, k, A, S, L, I, M), z = _e.propertyGroups = {
    behavior: m,
    transition: w,
    visibility: y,
    overlay: p,
    underlay: b1,
    ghost: B,
    commonLabel: h,
    labelDimensions: g,
    mainLabel: f,
    sourceLabel: c,
    targetLabel: d,
    nodeBody: T,
    nodeBorder: C,
    nodeOutline: E,
    backgroundImage: k,
    pie: A,
    compound: S,
    edgeLine: L,
    edgeArrow: I,
    core: M
  }, $ = _e.propertyGroupNames = {}, H = _e.propertyGroupKeys = /* @__PURE__ */ Object.keys(z);
  H.forEach(function(Y) {
    $[Y] = /* @__PURE__ */ z[Y].map(function(N) {
      return N.name;
    }), z[Y].forEach(function(N) {
      return N.groupKey = Y;
    });
  });
  var V = _e.aliases = [
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
  _e.propertyNames = /* @__PURE__ */ O.map(function(Y) {
    return Y.name;
  });
  for (var F = 0; F < O.length; F++) {
    var U = O[F];
    O[U.name] = U;
  }
  for (var J = 0; J < V.length; J++) {
    var j = V[J], ee = O[j.pointsTo], re = {
      name: j.name,
      alias: true,
      pointsTo: ee
    };
    O.push(re), O[j.name] = re;
  }
})();
_e.getDefaultProperty = function(r10) {
  return this.getDefaultProperties()[r10];
};
_e.getDefaultProperties = function() {
  var r10 = this._private;
  if (r10.defaultProperties != null) return r10.defaultProperties;
  for (var e = /* @__PURE__ */ we({
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
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
  }, /* @__PURE__ */ [
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
    for (var f = 1; f <= _e.pieBackgroundN; f++) {
      var c = /* @__PURE__ */ u.name.replace("{{i}}", f), d = u.value;
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
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
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
  }, /* @__PURE__ */ [
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
    return _e.arrowPrefixes.forEach(function(f) {
      var c = f + "-" + u.name, d = u.value;
      l[c] = d;
    }), l;
  }, {})), t = {}, a = 0; a < this.properties.length; a++) {
    var n = this.properties[a];
    if (!n.pointsTo) {
      var i = n.name, s = e[i], o = /* @__PURE__ */ this.parse(i, s);
      t[i] = o;
    }
  }
  return r10.defaultProperties = t, r10.defaultProperties;
};
_e.addDefaultStylesheet = function() {
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
    "overlay-opacity": 0.25
  }), this.defaultLength = this.length;
};
var Cn = {};
Cn.parse = function(r10, e, t, a) {
  var n = this;
  if (Ve(e)) return n.parseImplWarn(r10, e, t, a);
  var i = a === "mapping" || a === true || a === false || a == null ? "dontcare" : a, s = t ? "t" : "f", o = "" + e, l = /* @__PURE__ */ oo(r10, o, s, i), u = n.propCache = n.propCache || [], f;
  return (f = u[l]) || (f = u[l] = /* @__PURE__ */ n.parseImplWarn(r10, e, t, a)), (t || a === "mapping") && (f = /* @__PURE__ */ Or(f), f && (f.value = /* @__PURE__ */ Or(f.value))), f;
};
Cn.parseImplWarn = function(r10, e, t, a) {
  var n = /* @__PURE__ */ this.parseImpl(r10, e, t, a);
  return !n && e != null && Le(/* @__PURE__ */ "The style property `".concat(r10, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && Le("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
Cn.parseImpl = function(r10, e, t, a) {
  var n = this;
  r10 = /* @__PURE__ */ oi(r10);
  var i = n.properties[r10], s = e, o = n.types;
  if (!i || e === void 0) return null;
  i.alias && (i = i.pointsTo, r10 = i.name);
  var l = /* @__PURE__ */ he(e);
  l && (e = /* @__PURE__ */ e.trim());
  var u = i.type;
  if (!u) return null;
  if (t && (e === "" || e === null)) return {
    name: r10,
    value: e,
    bypass: true,
    deleteBypass: true
  };
  if (Ve(e)) return {
    name: r10,
    value: e,
    strValue: "fn",
    mapped: o.fn,
    bypass: t
  };
  var f, c;
  if (!(!l || a || e.length < 7 || e[1] !== "a")) {
    if (e.length >= 7 && e[0] === "d" && (f = /* @__PURE__ */ new RegExp(o.data.regex).exec(e))) {
      if (t) return false;
      var d = o.data;
      return {
        name: r10,
        value: f,
        strValue: "" + e,
        mapped: d,
        field: f[1],
        bypass: t
      };
    } else if (e.length >= 10 && e[0] === "m" && (c = /* @__PURE__ */ new RegExp(o.mapData.regex).exec(e))) {
      if (t || u.multiple) return false;
      var g = o.mapData;
      if (!(u.color || u.number)) return false;
      var h = /* @__PURE__ */ this.parse(r10, c[4]);
      if (!h || h.mapped) return false;
      var m = /* @__PURE__ */ this.parse(r10, c[5]);
      if (!m || m.mapped) return false;
      if (h.pfValue === m.pfValue || h.strValue === m.strValue) return Le("`" + r10 + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + r10 + ": " + h.strValue + "`"), this.parse(r10, h.strValue);
      if (u.color) {
        var y = h.value, p = m.value, b1 = y[0] === p[0] && y[1] === p[1] && y[2] === p[2] && (y[3] === p[3] || (y[3] == null || y[3] === 1) && (p[3] == null || p[3] === 1));
        if (b1) return false;
      }
      return {
        name: r10,
        value: c,
        strValue: "" + e,
        mapped: g,
        field: c[1],
        fieldMin: /* @__PURE__ */ parseFloat(c[2]),
        fieldMax: /* @__PURE__ */ parseFloat(c[3]),
        valueMin: h.value,
        valueMax: m.value,
        bypass: t
      };
    }
  }
  if (u.multiple && a !== "multiple") {
    var w;
    if (l ? w = /* @__PURE__ */ e.split(/\s+/) : Oe(e) ? w = e : w = [
      e
    ], u.evenMultiple && w.length % 2 !== 0) return null;
    for (var x = [], T = [], C = [], E = "", k = false, S = 0; S < w.length; S++) {
      var L = /* @__PURE__ */ n.parse(r10, w[S], t, "multiple");
      k = k || he(L.value), x.push(L.value), C.push(L.pfValue != null ? L.pfValue : L.value), T.push(L.units), E += (S > 0 ? " " : "") + L.strValue;
    }
    return u.validate && !u.validate(x, T) ? null : u.singleEnum && k ? x.length === 1 && he(x[0]) ? {
      name: r10,
      value: x[0],
      strValue: x[0],
      bypass: t
    } : null : {
      name: r10,
      value: x,
      pfValue: C,
      strValue: E,
      bypass: t,
      units: T
    };
  }
  var B = /* @__PURE__ */ m$1(function() {
    for (var N = 0; N < u.enums.length; N++) {
      var X = u.enums[N];
      if (X === e) return {
        name: r10,
        value: e,
        strValue: "" + e,
        bypass: t
      };
    }
    return null;
  }, "checkEnums");
  if (u.number) {
    var M, A = "px";
    if (u.units && (M = u.units), u.implicitUnits && (A = u.implicitUnits), !u.unitless) if (l) {
      var P = "px|em" + (u.allowPercent ? "|\\%" : "");
      M && (P = M);
      var I = /* @__PURE__ */ e.match("^(" + We + ")(" + P + ")?$");
      I && (e = I[1], M = I[2] || A);
    } else (!M || u.implicitUnits) && (M = A);
    if (e = /* @__PURE__ */ parseFloat(e), isNaN(e) && u.enums === void 0) return null;
    if (isNaN(e) && u.enums !== void 0) return e = s, B();
    if (u.integer && !Xu(e) || u.min !== void 0 && (e < u.min || u.strictMin && e === u.min) || u.max !== void 0 && (e > u.max || u.strictMax && e === u.max)) return null;
    var R = {
      name: r10,
      value: e,
      strValue: "" + e + (M || ""),
      units: M,
      bypass: t
    };
    return u.unitless || M !== "px" && M !== "em" ? R.pfValue = e : R.pfValue = M === "px" || !M ? e : this.getEmSizeInPixels() * e, (M === "ms" || M === "s") && (R.pfValue = M === "ms" ? e : 1e3 * e), (M === "deg" || M === "rad") && (R.pfValue = M === "rad" ? e : Pv(e)), M === "%" && (R.pfValue = e / 100), R;
  } else if (u.propList) {
    var O = [], z = "" + e;
    if (z !== "none") {
      for (var $ = /* @__PURE__ */ z.split(/\s*,\s*|\s+/), H = 0; H < $.length; H++) {
        var V = /* @__PURE__ */ $[H].trim();
        n.properties[V] ? O.push(V) : Le("`" + V + "` is not a valid property name");
      }
      if (O.length === 0) return null;
    }
    return {
      name: r10,
      value: O,
      strValue: O.length === 0 ? "none" : O.join(" "),
      bypass: t
    };
  } else if (u.color) {
    var F = /* @__PURE__ */ fl(e);
    return F ? {
      name: r10,
      value: F,
      pfValue: F,
      strValue: "rgb(" + F[0] + "," + F[1] + "," + F[2] + ")",
      bypass: t
    } : null;
  } else if (u.regex || u.regexes) {
    if (u.enums) {
      var U = /* @__PURE__ */ B();
      if (U) return U;
    }
    for (var J = u.regexes ? u.regexes : [
      u.regex
    ], j = 0; j < J.length; j++) {
      var ee = new RegExp(J[j]), re = /* @__PURE__ */ ee.exec(e);
      if (re) return {
        name: r10,
        value: u.singleRegexMatchValue ? re[1] : re,
        strValue: "" + e,
        bypass: t
      };
    }
    return null;
  } else return u.string ? {
    name: r10,
    value: "" + e,
    strValue: "" + e,
    bypass: t
  } : u.enums ? B() : null;
};
var nr = /* @__PURE__ */ m$1(function r6(e) {
  if (!(this instanceof r6)) return new r6(e);
  if (!si(e)) {
    qe("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
}, "Style"), sr = nr.prototype;
sr.instanceString = function() {
  return "style";
};
sr.clear = function() {
  for (var r10 = this._private, e = r10.cy, t = /* @__PURE__ */ e.elements(), a = 0; a < this.length; a++) this[a] = void 0;
  return this.length = 0, r10.contextStyles = {}, r10.propDiffs = {}, this.cleanElements(t, true), t.forEach(function(n) {
    var i = n[0]._private;
    i.styleDirty = true, i.appliedInitStyle = false;
  }), this;
};
sr.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
sr.core = function(r10) {
  return this._private.coreStyle[r10] || this.getDefaultProperty(r10);
};
sr.selector = function(r10) {
  var e = r10 === "core" ? null : new et(r10), t = this.length++;
  return this[t] = {
    selector: e,
    properties: [],
    mappedProperties: [],
    index: t
  }, this;
};
sr.css = function() {
  var r10 = this, e = arguments;
  if (e.length === 1) for (var t = e[0], a = 0; a < r10.properties.length; a++) {
    var n = r10.properties[a], i = t[n.name];
    i === void 0 && (i = t[ln(n.name)]), i !== void 0 && this.cssRule(n.name, i);
  }
  else e.length === 2 && this.cssRule(e[0], e[1]);
  return this;
};
sr.style = sr.css;
sr.cssRule = function(r10, e) {
  var t = /* @__PURE__ */ this.parse(r10, e);
  if (t) {
    var a = this.length - 1;
    this[a].properties.push(t), this[a].properties[t.name] = t, t.name.match(/pie-(\d+)-background-size/) && t.value && (this._private.hasPie = true), t.mapped && this[a].mappedProperties.push(t);
    var n = !this[a].selector;
    n && (this._private.coreStyle[t.name] = t);
  }
  return this;
};
sr.append = function(r10) {
  return Js(r10) ? r10.appendToStyle(this) : Oe(r10) ? this.appendFromJson(r10) : he(r10) && this.appendFromString(r10), this;
};
nr.fromJson = function(r10, e) {
  var t = new nr(r10);
  return t.fromJson(e), t;
};
nr.fromString = function(r10, e) {
  return new nr(r10).fromString(e);
};
[
  or,
  Ta,
  xi,
  zr,
  En,
  Ei,
  _e,
  Cn
].forEach(function(r10) {
  we(sr, r10);
});
nr.types = sr.types;
nr.properties = sr.properties;
nr.propertyGroups = sr.propertyGroups;
nr.propertyGroupNames = sr.propertyGroupNames;
nr.propertyGroupKeys = sr.propertyGroupKeys;
var Zh = {
  style: /* @__PURE__ */ m$1(function(e) {
    if (e) {
      var t = /* @__PURE__ */ this.setStyle(e);
      t.update();
    }
    return this._private.style;
  }, "style"),
  setStyle: /* @__PURE__ */ m$1(function(e) {
    var t = this._private;
    return Js(e) ? t.style = /* @__PURE__ */ e.generateStyle(this) : Oe(e) ? t.style = /* @__PURE__ */ nr.fromJson(this, e) : he(e) ? t.style = /* @__PURE__ */ nr.fromString(this, e) : t.style = /* @__PURE__ */ nr(this), t.style;
  }, "setStyle"),
  updateStyle: /* @__PURE__ */ m$1(function() {
    this.mutableElements().updateStyle();
  }, "updateStyle")
}, Qh = "single", yt = {
  autolock: /* @__PURE__ */ m$1(function(e) {
    if (e !== void 0) this._private.autolock = !!e;
    else return this._private.autolock;
    return this;
  }, "autolock"),
  autoungrabify: /* @__PURE__ */ m$1(function(e) {
    if (e !== void 0) this._private.autoungrabify = !!e;
    else return this._private.autoungrabify;
    return this;
  }, "autoungrabify"),
  autounselectify: /* @__PURE__ */ m$1(function(e) {
    if (e !== void 0) this._private.autounselectify = !!e;
    else return this._private.autounselectify;
    return this;
  }, "autounselectify"),
  selectionType: /* @__PURE__ */ m$1(function(e) {
    var t = this._private;
    if (t.selectionType == null && (t.selectionType = Qh), e !== void 0) (e === "additive" || e === "single") && (t.selectionType = e);
    else return t.selectionType;
    return this;
  }, "selectionType"),
  panningEnabled: /* @__PURE__ */ m$1(function(e) {
    if (e !== void 0) this._private.panningEnabled = !!e;
    else return this._private.panningEnabled;
    return this;
  }, "panningEnabled"),
  userPanningEnabled: /* @__PURE__ */ m$1(function(e) {
    if (e !== void 0) this._private.userPanningEnabled = !!e;
    else return this._private.userPanningEnabled;
    return this;
  }, "userPanningEnabled"),
  zoomingEnabled: /* @__PURE__ */ m$1(function(e) {
    if (e !== void 0) this._private.zoomingEnabled = !!e;
    else return this._private.zoomingEnabled;
    return this;
  }, "zoomingEnabled"),
  userZoomingEnabled: /* @__PURE__ */ m$1(function(e) {
    if (e !== void 0) this._private.userZoomingEnabled = !!e;
    else return this._private.userZoomingEnabled;
    return this;
  }, "userZoomingEnabled"),
  boxSelectionEnabled: /* @__PURE__ */ m$1(function(e) {
    if (e !== void 0) this._private.boxSelectionEnabled = !!e;
    else return this._private.boxSelectionEnabled;
    return this;
  }, "boxSelectionEnabled"),
  pan: /* @__PURE__ */ m$1(function() {
    var e = arguments, t = this._private.pan, a, n, i, s, o;
    switch (e.length) {
      case 0:
        return t;
      case 1:
        if (he(e[0])) return a = e[0], t[a];
        if (Te(e[0])) {
          if (!this._private.panningEnabled) return this;
          i = e[0], s = i.x, o = i.y, ie(s) && (t.x = s), ie(o) && (t.y = o), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled) return this;
        a = e[0], n = e[1], (a === "x" || a === "y") && ie(n) && (t[a] = n), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  }, "pan"),
  panBy: /* @__PURE__ */ m$1(function(e, t) {
    var a = arguments, n = this._private.pan, i, s, o, l, u;
    if (!this._private.panningEnabled) return this;
    switch (a.length) {
      case 1:
        Te(e) && (o = a[0], l = o.x, u = o.y, ie(l) && (n.x += l), ie(u) && (n.y += u), this.emit("pan viewport"));
        break;
      case 2:
        i = e, s = t, (i === "x" || i === "y") && ie(s) && (n[i] += s), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  }, "panBy"),
  fit: /* @__PURE__ */ m$1(function(e, t) {
    var a = /* @__PURE__ */ this.getFitViewport(e, t);
    if (a) {
      var n = this._private;
      n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
    }
    return this;
  }, "fit"),
  getFitViewport: /* @__PURE__ */ m$1(function(e, t) {
    if (ie(e) && t === void 0 && (t = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var a;
      if (he(e)) {
        var n = e;
        e = /* @__PURE__ */ this.$(n);
      } else if (Ju(e)) {
        var i = e;
        a = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
      } else pr(e) || (e = /* @__PURE__ */ this.mutableElements());
      if (!(pr(e) && e.empty())) {
        a = a || e.boundingBox();
        var s = /* @__PURE__ */ this.width(), o = /* @__PURE__ */ this.height(), l;
        if (t = ie(t) ? t : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
          l = /* @__PURE__ */ Math.min((s - 2 * t) / a.w, (o - 2 * t) / a.h), l = l > this._private.maxZoom ? this._private.maxZoom : l, l = l < this._private.minZoom ? this._private.minZoom : l;
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
  zoomRange: /* @__PURE__ */ m$1(function(e, t) {
    var a = this._private;
    if (t == null) {
      var n = e;
      e = n.min, t = n.max;
    }
    return ie(e) && ie(t) && e <= t ? (a.minZoom = e, a.maxZoom = t) : ie(e) && t === void 0 && e <= a.maxZoom ? a.minZoom = e : ie(t) && e === void 0 && t >= a.minZoom && (a.maxZoom = t), this;
  }, "zoomRange"),
  minZoom: /* @__PURE__ */ m$1(function(e) {
    return e === void 0 ? this._private.minZoom : this.zoomRange({
      min: e
    });
  }, "minZoom"),
  maxZoom: /* @__PURE__ */ m$1(function(e) {
    return e === void 0 ? this._private.maxZoom : this.zoomRange({
      max: e
    });
  }, "maxZoom"),
  getZoomedViewport: /* @__PURE__ */ m$1(function(e) {
    var t = this._private, a = t.pan, n = t.zoom, i, s, o = false;
    if (t.zoomingEnabled || (o = true), ie(e) ? s = e : Te(e) && (s = e.level, e.position != null ? i = /* @__PURE__ */ dn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !t.panningEnabled && (o = true)), s = s > t.maxZoom ? t.maxZoom : s, s = s < t.minZoom ? t.minZoom : s, o || !ie(s) || s === n || i != null && (!ie(i.x) || !ie(i.y))) return null;
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
  zoom: /* @__PURE__ */ m$1(function(e) {
    if (e === void 0) return this._private.zoom;
    var t = /* @__PURE__ */ this.getZoomedViewport(e), a = this._private;
    return t == null || !t.zoomed ? this : (a.zoom = t.zoom, t.panned && (a.pan.x = t.pan.x, a.pan.y = t.pan.y), this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
  }, "zoom"),
  viewport: /* @__PURE__ */ m$1(function(e) {
    var t = this._private, a = true, n = true, i = [], s = false, o = false;
    if (!e) return this;
    if (ie(e.zoom) || (a = false), Te(e.pan) || (n = false), !a && !n) return this;
    if (a) {
      var l = e.zoom;
      l < t.minZoom || l > t.maxZoom || !t.zoomingEnabled ? s = true : (t.zoom = l, i.push("zoom"));
    }
    if (n && (!s || !e.cancelOnFailedZoom) && t.panningEnabled) {
      var u = e.pan;
      ie(u.x) && (t.pan.x = u.x, o = false), ie(u.y) && (t.pan.y = u.y, o = false), o || i.push("pan");
    }
    return i.length > 0 && (i.push("viewport"), this.emit(/* @__PURE__ */ i.join(" ")), this.notify("viewport")), this;
  }, "viewport"),
  center: /* @__PURE__ */ m$1(function(e) {
    var t = /* @__PURE__ */ this.getCenterPan(e);
    return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
  }, "center"),
  getCenterPan: /* @__PURE__ */ m$1(function(e, t) {
    if (this._private.panningEnabled) {
      if (he(e)) {
        var a = e;
        e = /* @__PURE__ */ this.mutableElements().filter(a);
      } else pr(e) || (e = /* @__PURE__ */ this.mutableElements());
      if (e.length !== 0) {
        var n = /* @__PURE__ */ e.boundingBox(), i = /* @__PURE__ */ this.width(), s = /* @__PURE__ */ this.height();
        t = t === void 0 ? this._private.zoom : t;
        var o = {
          x: (i - t * (n.x1 + n.x2)) / 2,
          y: (s - t * (n.y1 + n.y2)) / 2
        };
        return o;
      }
    }
  }, "getCenterPan"),
  reset: /* @__PURE__ */ m$1(function() {
    return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    }), this);
  }, "reset"),
  invalidateSize: /* @__PURE__ */ m$1(function() {
    this._private.sizeCache = null;
  }, "invalidateSize"),
  size: /* @__PURE__ */ m$1(function() {
    var e = this._private, t = e.container, a = this;
    return e.sizeCache = e.sizeCache || (t ? function() {
      var n = /* @__PURE__ */ a.window().getComputedStyle(t), i = /* @__PURE__ */ m$1(function(o) {
        return parseFloat(/* @__PURE__ */ n.getPropertyValue(o));
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
  width: /* @__PURE__ */ m$1(function() {
    return this.size().width;
  }, "width"),
  height: /* @__PURE__ */ m$1(function() {
    return this.size().height;
  }, "height"),
  extent: /* @__PURE__ */ m$1(function() {
    var e = this._private.pan, t = this._private.zoom, a = /* @__PURE__ */ this.renderedExtent(), n = {
      x1: (a.x1 - e.x) / t,
      x2: (a.x2 - e.x) / t,
      y1: (a.y1 - e.y) / t,
      y2: (a.y2 - e.y) / t
    };
    return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
  }, "extent"),
  renderedExtent: /* @__PURE__ */ m$1(function() {
    var e = /* @__PURE__ */ this.width(), t = /* @__PURE__ */ this.height();
    return {
      x1: 0,
      y1: 0,
      x2: e,
      y2: t,
      w: e,
      h: t
    };
  }, "renderedExtent"),
  multiClickDebounceTime: /* @__PURE__ */ m$1(function(e) {
    if (e) this._private.multiClickDebounceTime = e;
    else return this._private.multiClickDebounceTime;
    return this;
  }, "multiClickDebounceTime")
};
yt.centre = yt.center;
yt.autolockNodes = yt.autolock;
yt.autoungrabifyNodes = yt.autoungrabify;
var ma = {
  data: /* @__PURE__ */ Me.data({
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
  removeData: /* @__PURE__ */ Me.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  }),
  scratch: /* @__PURE__ */ Me.data({
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
  removeScratch: /* @__PURE__ */ Me.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  })
};
ma.attr = ma.data;
ma.removeAttr = ma.removeData;
var ba = /* @__PURE__ */ m$1(function(e) {
  var t = this;
  e = /* @__PURE__ */ we({}, e);
  var a = e.container;
  a && !Ja(a) && Ja(a[0]) && (a = a[0]);
  var n = a ? a._cyreg : null;
  n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
  var i = n.readies = n.readies || [];
  a && (a._cyreg = n), n.cy = t;
  var s = Ke !== void 0 && a !== void 0 && !e.headless, o = e;
  o.layout = /* @__PURE__ */ we({
    name: s ? "grid" : "null"
  }, o.layout), o.renderer = /* @__PURE__ */ we({
    name: s ? "canvas" : "null"
  }, o.renderer);
  var l = /* @__PURE__ */ m$1(function(h, m, y) {
    return m !== void 0 ? m : y !== void 0 ? y : h;
  }, "defVal"), u = this._private = {
    container: a,
    ready: false,
    options: o,
    elements: new er(this),
    listeners: [],
    aniEles: new er(this),
    data: o.data || {},
    scratch: {},
    layout: null,
    renderer: null,
    destroyed: false,
    notificationsEnabled: true,
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: /* @__PURE__ */ l(true, o.zoomingEnabled),
    userZoomingEnabled: /* @__PURE__ */ l(true, o.userZoomingEnabled),
    panningEnabled: /* @__PURE__ */ l(true, o.panningEnabled),
    userPanningEnabled: /* @__PURE__ */ l(true, o.userPanningEnabled),
    boxSelectionEnabled: /* @__PURE__ */ l(true, o.boxSelectionEnabled),
    autolock: /* @__PURE__ */ l(false, o.autolock, o.autolockNodes),
    autoungrabify: /* @__PURE__ */ l(false, o.autoungrabify, o.autoungrabifyNodes),
    autounselectify: /* @__PURE__ */ l(false, o.autounselectify),
    styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
    zoom: ie(o.zoom) ? o.zoom : 1,
    pan: {
      x: Te(o.pan) && ie(o.pan.x) ? o.pan.x : 0,
      y: Te(o.pan) && ie(o.pan.y) ? o.pan.y : 0
    },
    animation: {
      current: [],
      queue: []
    },
    hasCompoundNodes: false,
    multiClickDebounceTime: /* @__PURE__ */ l(250, o.multiClickDebounceTime)
  };
  this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
    min: o.minZoom,
    max: o.maxZoom
  });
  var f = /* @__PURE__ */ m$1(function(h, m) {
    var y = /* @__PURE__ */ h.some(_u);
    if (y) return qt.all(h).then(m);
    m(h);
  }, "loadExtData");
  u.styleEnabled && t.setStyle([]);
  var c = /* @__PURE__ */ we({}, o, o.renderer);
  t.initRenderer(c);
  var d = /* @__PURE__ */ m$1(function(h, m, y) {
    t.notifications(false);
    var p = /* @__PURE__ */ t.mutableElements();
    p.length > 0 && p.remove(), h != null && (Te(h) || Oe(h)) && t.add(h), t.one("layoutready", function(w) {
      t.notifications(true), t.emit(w), t.one("load", m), t.emitAndNotify("load");
    }).one("layoutstop", function() {
      t.one("done", y), t.emit("done");
    });
    var b1 = /* @__PURE__ */ we({}, t._private.options.layout);
    b1.eles = /* @__PURE__ */ t.elements(), t.layout(b1).run();
  }, "setElesAndLayout");
  f([
    o.style,
    o.elements
  ], function(g) {
    var h = g[0], m = g[1];
    u.styleEnabled && t.style().append(h), d(m, function() {
      t.startAnimationLoop(), u.ready = true, Ve(o.ready) && t.on("ready", o.ready);
      for (var y = 0; y < i.length; y++) {
        var p = i[y];
        t.on("ready", p);
      }
      n && (n.readies = []), t.emit("ready");
    }, o.done);
  });
}, "Core"), nn = ba.prototype;
we(nn, {
  instanceString: /* @__PURE__ */ m$1(function() {
    return "core";
  }, "instanceString"),
  isReady: /* @__PURE__ */ m$1(function() {
    return this._private.ready;
  }, "isReady"),
  destroyed: /* @__PURE__ */ m$1(function() {
    return this._private.destroyed;
  }, "destroyed"),
  ready: /* @__PURE__ */ m$1(function(e) {
    return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
  }, "ready"),
  destroy: /* @__PURE__ */ m$1(function() {
    var e = this;
    if (!e.destroyed()) return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = true, e;
  }, "destroy"),
  hasElementWithId: /* @__PURE__ */ m$1(function(e) {
    return this._private.elements.hasElementWithId(e);
  }, "hasElementWithId"),
  getElementById: /* @__PURE__ */ m$1(function(e) {
    return this._private.elements.getElementById(e);
  }, "getElementById"),
  hasCompoundNodes: /* @__PURE__ */ m$1(function() {
    return this._private.hasCompoundNodes;
  }, "hasCompoundNodes"),
  headless: /* @__PURE__ */ m$1(function() {
    return this._private.renderer.isHeadless();
  }, "headless"),
  styleEnabled: /* @__PURE__ */ m$1(function() {
    return this._private.styleEnabled;
  }, "styleEnabled"),
  addToPool: /* @__PURE__ */ m$1(function(e) {
    return this._private.elements.merge(e), this;
  }, "addToPool"),
  removeFromPool: /* @__PURE__ */ m$1(function(e) {
    return this._private.elements.unmerge(e), this;
  }, "removeFromPool"),
  container: /* @__PURE__ */ m$1(function() {
    return this._private.container || null;
  }, "container"),
  window: /* @__PURE__ */ m$1(function() {
    var e = this._private.container;
    if (e == null) return Ke;
    var t = this._private.container.ownerDocument;
    return t === void 0 || t == null ? Ke : t.defaultView || Ke;
  }, "window"),
  mount: /* @__PURE__ */ m$1(function(e) {
    if (e != null) {
      var t = this, a = t._private, n = a.options;
      return !Ja(e) && Ja(e[0]) && (e = e[0]), t.stopAnimationLoop(), t.destroyRenderer(), a.container = e, a.styleEnabled = true, t.invalidateSize(), t.initRenderer(/* @__PURE__ */ we({}, n, n.renderer, {
        name: n.renderer.name === "null" ? "canvas" : n.renderer.name
      })), t.startAnimationLoop(), t.style(n.style), t.emit("mount"), t;
    }
  }, "mount"),
  unmount: /* @__PURE__ */ m$1(function() {
    var e = this;
    return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
      name: "null"
    }), e.emit("unmount"), e;
  }, "unmount"),
  options: /* @__PURE__ */ m$1(function() {
    return Or(this._private.options);
  }, "options"),
  json: /* @__PURE__ */ m$1(function(e) {
    var t = this, a = t._private, n = /* @__PURE__ */ t.mutableElements(), i = /* @__PURE__ */ m$1(function(x) {
      return t.getElementById(/* @__PURE__ */ x.id());
    }, "getFreshRef");
    if (Te(e)) {
      if (t.startBatch(), e.elements) {
        var s = {}, o = /* @__PURE__ */ m$1(function(x, T) {
          for (var C = [], E = [], k = 0; k < x.length; k++) {
            var S = x[k];
            if (!S.data.id) {
              Le("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var L = "" + S.data.id, B = /* @__PURE__ */ t.getElementById(L);
            s[L] = true, B.length !== 0 ? E.push({
              ele: B,
              json: S
            }) : (T && (S.group = T), C.push(S));
          }
          t.add(C);
          for (var M = 0; M < E.length; M++) {
            var A = E[M], P = A.ele, I = A.json;
            P.json(I);
          }
        }, "updateEles");
        if (Oe(e.elements)) o(e.elements);
        else for (var l = [
          "nodes",
          "edges"
        ], u = 0; u < l.length; u++) {
          var f = l[u], c = e.elements[f];
          Oe(c) && o(c, f);
        }
        var d = /* @__PURE__ */ t.collection();
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
      for (var g = [
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
      ], h = 0; h < g.length; h++) {
        var m = g[h];
        e[m] != null && t[m](e[m]);
      }
      return t.endBatch(), this;
    } else {
      var y = !!e, p = {};
      y ? p.elements = /* @__PURE__ */ this.elements().map(function(w) {
        return w.json();
      }) : (p.elements = {}, n.forEach(function(w) {
        var x = /* @__PURE__ */ w.group();
        p.elements[x] || (p.elements[x] = []), p.elements[x].push(/* @__PURE__ */ w.json());
      })), this._private.styleEnabled && (p.style = /* @__PURE__ */ t.style().json()), p.data = /* @__PURE__ */ Or(/* @__PURE__ */ t.data());
      var b1 = a.options;
      return p.zoomingEnabled = a.zoomingEnabled, p.userZoomingEnabled = a.userZoomingEnabled, p.zoom = a.zoom, p.minZoom = a.minZoom, p.maxZoom = a.maxZoom, p.panningEnabled = a.panningEnabled, p.userPanningEnabled = a.userPanningEnabled, p.pan = /* @__PURE__ */ Or(a.pan), p.boxSelectionEnabled = a.boxSelectionEnabled, p.renderer = /* @__PURE__ */ Or(b1.renderer), p.hideEdgesOnViewport = b1.hideEdgesOnViewport, p.textureOnViewport = b1.textureOnViewport, p.wheelSensitivity = b1.wheelSensitivity, p.motionBlur = b1.motionBlur, p.multiClickDebounceTime = b1.multiClickDebounceTime, p;
    }
  }, "json")
});
nn.$id = nn.getElementById;
[
  Vh,
  Kh,
  jo,
  Xn,
  Ya,
  Uh,
  Zn,
  Xa,
  Zh,
  yt,
  ma
].forEach(function(r10) {
  we(nn, r10);
});
var Jh = {
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
  animateFilter: /* @__PURE__ */ m$1(function(e, t) {
    return true;
  }, "animateFilter"),
  ready: void 0,
  stop: void 0,
  transform: /* @__PURE__ */ m$1(function(e, t) {
    return t;
  }, "transform")
}, _h = {
  maximal: false,
  acyclic: false
}, Tt = /* @__PURE__ */ m$1(function(e) {
  return e.scratch("breadthfirst");
}, "getInfo"), Ds = /* @__PURE__ */ m$1(function(e, t) {
  return e.scratch("breadthfirst", t);
}, "setInfo");
function eu(r10) {
  this.options = /* @__PURE__ */ we({}, Jh, _h, r10);
}
m$1(eu, "BreadthFirstLayout");
eu.prototype.run = function() {
  var r10 = this.options, e = r10, t = r10.cy, a = e.eles, n = /* @__PURE__ */ a.nodes().filter(function(ne) {
    return !ne.isParent();
  }), i = a, s = e.directed, o = e.acyclic || e.maximal || e.maximalAdjustments > 0, l = /* @__PURE__ */ gr(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: /* @__PURE__ */ t.width(),
    h: /* @__PURE__ */ t.height()
  }), u;
  if (pr(e.roots)) u = e.roots;
  else if (Oe(e.roots)) {
    for (var f = [], c = 0; c < e.roots.length; c++) {
      var d = e.roots[c], g = /* @__PURE__ */ t.getElementById(d);
      f.push(g);
    }
    u = /* @__PURE__ */ t.collection(f);
  } else if (he(e.roots)) u = /* @__PURE__ */ t.$(e.roots);
  else if (s) u = /* @__PURE__ */ n.roots();
  else {
    var h = /* @__PURE__ */ a.components();
    u = /* @__PURE__ */ t.collection();
    for (var m = /* @__PURE__ */ m$1(function(se) {
      var le = h[se], de = /* @__PURE__ */ le.maxDegree(false), fe = /* @__PURE__ */ le.filter(function(ye) {
        return ye.degree(false) === de;
      });
      u = /* @__PURE__ */ u.add(fe);
    }, "_loop"), y = 0; y < h.length; y++) m(y);
  }
  var p = [], b1 = {}, w = /* @__PURE__ */ m$1(function(se, le) {
    p[le] == null && (p[le] = []);
    var de = p[le].length;
    p[le].push(se), Ds(se, {
      index: de,
      depth: le
    });
  }, "addToDepth"), x = /* @__PURE__ */ m$1(function(se, le) {
    var de = /* @__PURE__ */ Tt(se), fe = de.depth, ye = de.index;
    p[fe][ye] = null, w(se, le);
  }, "changeDepth");
  i.bfs({
    roots: u,
    directed: e.directed,
    visit: /* @__PURE__ */ m$1(function(se, le, de, fe, ye) {
      var Be = se[0], Ce = /* @__PURE__ */ Be.id();
      w(Be, ye), b1[Ce] = true;
    }, "visit")
  });
  for (var T = [], C = 0; C < n.length; C++) {
    var E = n[C];
    b1[E.id()] || T.push(E);
  }
  var k = /* @__PURE__ */ m$1(function(se) {
    for (var le = p[se], de = 0; de < le.length; de++) {
      var fe = le[de];
      if (fe == null) {
        le.splice(de, 1), de--;
        continue;
      }
      Ds(fe, {
        depth: se,
        index: de
      });
    }
  }, "assignDepthsAt"), S = /* @__PURE__ */ m$1(function() {
    for (var se = 0; se < p.length; se++) k(se);
  }, "assignDepths"), L = /* @__PURE__ */ m$1(function(se, le) {
    for (var de = /* @__PURE__ */ Tt(se), fe = /* @__PURE__ */ se.incomers().filter(function(D) {
      return D.isNode() && a.has(D);
    }), ye = -1, Be = /* @__PURE__ */ se.id(), Ce = 0; Ce < fe.length; Ce++) {
      var Ee = fe[Ce], De = /* @__PURE__ */ Tt(Ee);
      ye = /* @__PURE__ */ Math.max(ye, De.depth);
    }
    if (de.depth <= ye) {
      if (!e.acyclic && le[Be]) return null;
      var _ = ye + 1;
      return x(se, _), le[Be] = _, true;
    }
    return false;
  }, "adjustMaximally");
  if (s && o) {
    var B = [], M = {}, A = /* @__PURE__ */ m$1(function(se) {
      return B.push(se);
    }, "enqueue"), P = /* @__PURE__ */ m$1(function() {
      return B.shift();
    }, "dequeue");
    for (n.forEach(function(ne) {
      return B.push(ne);
    }); B.length > 0; ) {
      var I = /* @__PURE__ */ P(), R = /* @__PURE__ */ L(I, M);
      if (R) I.outgoers().filter(function(ne) {
        return ne.isNode() && a.has(ne);
      }).forEach(A);
      else if (R === null) {
        Le("Detected double maximal shift for node `" + I.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  S();
  var O = 0;
  if (e.avoidOverlap) for (var z = 0; z < n.length; z++) {
    var $ = n[z], H = /* @__PURE__ */ $.layoutDimensions(e), V = H.w, F = H.h;
    O = /* @__PURE__ */ Math.max(O, V, F);
  }
  var U = {}, J = /* @__PURE__ */ m$1(function(se) {
    if (U[se.id()]) return U[se.id()];
    for (var le = Tt(se).depth, de = /* @__PURE__ */ se.neighborhood(), fe = 0, ye = 0, Be = 0; Be < de.length; Be++) {
      var Ce = de[Be];
      if (!(Ce.isEdge() || Ce.isParent() || !n.has(Ce))) {
        var Ee = /* @__PURE__ */ Tt(Ce);
        if (Ee != null) {
          var De = Ee.index, _ = Ee.depth;
          if (!(De == null || _ == null)) {
            var D = p[_].length;
            _ < le && (fe += De / D, ye++);
          }
        }
      }
    }
    return ye = /* @__PURE__ */ Math.max(1, ye), fe = fe / ye, ye === 0 && (fe = 0), U[se.id()] = fe, fe;
  }, "getWeightedPercent"), j = /* @__PURE__ */ m$1(function(se, le) {
    var de = /* @__PURE__ */ J(se), fe = /* @__PURE__ */ J(le), ye = de - fe;
    return ye === 0 ? js(/* @__PURE__ */ se.id(), /* @__PURE__ */ le.id()) : ye;
  }, "sortFn");
  e.depthSort !== void 0 && (j = e.depthSort);
  for (var ee = 0; ee < p.length; ee++) p[ee].sort(j), k(ee);
  for (var re = [], Y = 0; Y < T.length; Y++) re.push(T[Y]);
  p.unshift(re), S();
  for (var N = 0, X = 0; X < p.length; X++) N = /* @__PURE__ */ Math.max(p[X].length, N);
  var Z = {
    x: l.x1 + l.w / 2,
    y: l.x1 + l.h / 2
  }, oe = /* @__PURE__ */ p.reduce(function(ne, se) {
    return Math.max(ne, se.length);
  }, 0), ge = /* @__PURE__ */ m$1(function(se) {
    var le = /* @__PURE__ */ Tt(se), de = le.depth, fe = le.index, ye = p[de].length, Be = /* @__PURE__ */ Math.max(l.w / ((e.grid ? oe : ye) + 1), O), Ce = /* @__PURE__ */ Math.max(l.h / (p.length + 1), O), Ee = /* @__PURE__ */ Math.min(l.w / 2 / p.length, l.h / 2 / p.length);
    if (Ee = /* @__PURE__ */ Math.max(Ee, O), e.circle) {
      var _ = Ee * de + Ee - (p.length > 0 && p[0].length <= 3 ? Ee / 2 : 0), D = 2 * Math.PI / p[de].length * fe;
      return de === 0 && p[0].length === 1 && (_ = 1), {
        x: Z.x + _ * Math.cos(D),
        y: Z.y + _ * Math.sin(D)
      };
    } else {
      var De = {
        x: Z.x + (fe + 1 - (ye + 1) / 2) * Be,
        y: (de + 1) * Ce
      };
      return De;
    }
  }, "getPosition");
  return a.nodes().layoutPositions(this, e, ge), this;
};
var jh = {
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
  animateFilter: /* @__PURE__ */ m$1(function(e, t) {
    return true;
  }, "animateFilter"),
  ready: void 0,
  stop: void 0,
  transform: /* @__PURE__ */ m$1(function(e, t) {
    return t;
  }, "transform")
};
function ru(r10) {
  this.options = /* @__PURE__ */ we({}, jh, r10);
}
m$1(ru, "CircleLayout");
ru.prototype.run = function() {
  var r10 = this.options, e = r10, t = r10.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = /* @__PURE__ */ a.nodes().not(":parent");
  e.sort && (i = /* @__PURE__ */ i.sort(e.sort));
  for (var s = /* @__PURE__ */ gr(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: /* @__PURE__ */ t.width(),
    h: /* @__PURE__ */ t.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, l = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, u = l / Math.max(1, i.length - 1), f, c = 0, d = 0; d < i.length; d++) {
    var g = i[d], h = /* @__PURE__ */ g.layoutDimensions(e), m = h.w, y = h.h;
    c = /* @__PURE__ */ Math.max(c, m, y);
  }
  if (ie(e.radius) ? f = e.radius : i.length <= 1 ? f = 0 : f = Math.min(s.h, s.w) / 2 - c, i.length > 1 && e.avoidOverlap) {
    c *= 1.75;
    var p = Math.cos(u) - Math.cos(0), b1 = Math.sin(u) - Math.sin(0), w = /* @__PURE__ */ Math.sqrt(c * c / (p * p + b1 * b1));
    f = /* @__PURE__ */ Math.max(w, f);
  }
  var x = /* @__PURE__ */ m$1(function(C, E) {
    var k = e.startAngle + E * u * (n ? 1 : -1), S = f * Math.cos(k), L = f * Math.sin(k), B = {
      x: o.x + S,
      y: o.y + L
    };
    return B;
  }, "getPos");
  return a.nodes().layoutPositions(this, e, x), this;
};
var eg = {
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
  concentric: /* @__PURE__ */ m$1(function(e) {
    return e.degree();
  }, "concentric"),
  levelWidth: /* @__PURE__ */ m$1(function(e) {
    return e.maxDegree() / 4;
  }, "levelWidth"),
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: /* @__PURE__ */ m$1(function(e, t) {
    return true;
  }, "animateFilter"),
  ready: void 0,
  stop: void 0,
  transform: /* @__PURE__ */ m$1(function(e, t) {
    return t;
  }, "transform")
};
function tu(r10) {
  this.options = /* @__PURE__ */ we({}, eg, r10);
}
m$1(tu, "ConcentricLayout");
tu.prototype.run = function() {
  for (var r10 = this.options, e = r10, t = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = r10.cy, n = e.eles, i = /* @__PURE__ */ n.nodes().not(":parent"), s = /* @__PURE__ */ gr(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: /* @__PURE__ */ a.width(),
    h: /* @__PURE__ */ a.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, l = [], u = 0, f = 0; f < i.length; f++) {
    var c = i[f], d = void 0;
    d = /* @__PURE__ */ e.concentric(c), l.push({
      value: d,
      node: c
    }), c._private.scratch.concentric = d;
  }
  i.updateStyle();
  for (var g = 0; g < i.length; g++) {
    var h = i[g], m = /* @__PURE__ */ h.layoutDimensions(e);
    u = /* @__PURE__ */ Math.max(u, m.w, m.h);
  }
  l.sort(function(ne, se) {
    return se.value - ne.value;
  });
  for (var y = /* @__PURE__ */ e.levelWidth(i), p = [
    []
  ], b1 = p[0], w = 0; w < l.length; w++) {
    var x = l[w];
    if (b1.length > 0) {
      var T = /* @__PURE__ */ Math.abs(b1[0].value - x.value);
      T >= y && (b1 = [], p.push(b1));
    }
    b1.push(x);
  }
  var C = u + e.minNodeSpacing;
  if (!e.avoidOverlap) {
    var E = p.length > 0 && p[0].length > 1, k = Math.min(s.w, s.h) / 2 - C, S = k / (p.length + E ? 1 : 0);
    C = /* @__PURE__ */ Math.min(C, S);
  }
  for (var L = 0, B = 0; B < p.length; B++) {
    var M = p[B], A = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / M.length : e.sweep, P = M.dTheta = A / Math.max(1, M.length - 1);
    if (M.length > 1 && e.avoidOverlap) {
      var I = Math.cos(P) - Math.cos(0), R = Math.sin(P) - Math.sin(0), O = /* @__PURE__ */ Math.sqrt(C * C / (I * I + R * R));
      L = /* @__PURE__ */ Math.max(O, L);
    }
    M.r = L, L += C;
  }
  if (e.equidistant) {
    for (var z = 0, $ = 0, H = 0; H < p.length; H++) {
      var V = p[H], F = V.r - $;
      z = /* @__PURE__ */ Math.max(z, F);
    }
    $ = 0;
    for (var U = 0; U < p.length; U++) {
      var J = p[U];
      U === 0 && ($ = J.r), J.r = $, $ += z;
    }
  }
  for (var j = {}, ee = 0; ee < p.length; ee++) for (var re = p[ee], Y = re.dTheta, N = re.r, X = 0; X < re.length; X++) {
    var Z = re[X], oe = e.startAngle + (t ? 1 : -1) * Y * X, ge = {
      x: o.x + N * Math.cos(oe),
      y: o.y + N * Math.sin(oe)
    };
    j[Z.node.id()] = ge;
  }
  return n.nodes().layoutPositions(this, e, function(ne) {
    var se = /* @__PURE__ */ ne.id();
    return j[se];
  }), this;
};
var Fn, rg = {
  ready: /* @__PURE__ */ m$1(function() {
  }, "ready"),
  stop: /* @__PURE__ */ m$1(function() {
  }, "stop"),
  animate: true,
  animationEasing: void 0,
  animationDuration: void 0,
  animateFilter: /* @__PURE__ */ m$1(function(e, t) {
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
  nodeRepulsion: /* @__PURE__ */ m$1(function(e) {
    return 2048;
  }, "nodeRepulsion"),
  nodeOverlap: 4,
  idealEdgeLength: /* @__PURE__ */ m$1(function(e) {
    return 32;
  }, "idealEdgeLength"),
  edgeElasticity: /* @__PURE__ */ m$1(function(e) {
    return 32;
  }, "edgeElasticity"),
  nestingFactor: 1.2,
  gravity: 1,
  numIter: 1e3,
  initialTemp: 1e3,
  coolingFactor: 0.99,
  minTemp: 1
};
function Sn(r10) {
  this.options = /* @__PURE__ */ we({}, rg, r10), this.options.layout = this;
  var e = /* @__PURE__ */ this.options.eles.nodes(), t = /* @__PURE__ */ this.options.eles.edges(), a = /* @__PURE__ */ t.filter(function(n) {
    var i = /* @__PURE__ */ n.source().data("id"), s = /* @__PURE__ */ n.target().data("id"), o = /* @__PURE__ */ e.some(function(u) {
      return u.data("id") === i;
    }), l = /* @__PURE__ */ e.some(function(u) {
      return u.data("id") === s;
    });
    return !o || !l;
  });
  this.options.eles = /* @__PURE__ */ this.options.eles.not(a);
}
m$1(Sn, "CoseLayout");
Sn.prototype.run = function() {
  var r10 = this.options, e = r10.cy, t = this;
  t.stopped = false, (r10.animate === true || r10.animate === false) && t.emit({
    type: "layoutstart",
    layout: t
  }), r10.debug === true ? Fn = true : Fn = false;
  var a = /* @__PURE__ */ tg(e, t, r10);
  Fn && ig(a), r10.randomize && sg(a);
  var n = /* @__PURE__ */ $r(), i = /* @__PURE__ */ m$1(function() {
    og(a, e, r10), r10.fit === true && e.fit(r10.padding);
  }, "refresh"), s = /* @__PURE__ */ m$1(function(d) {
    return !(t.stopped || d >= r10.numIter || (ug(a, r10), a.temperature = a.temperature * r10.coolingFactor, a.temperature < r10.minTemp));
  }, "mainLoop"), o = /* @__PURE__ */ m$1(function() {
    if (r10.animate === true || r10.animate === false) i(), t.one("layoutstop", r10.stop), t.emit({
      type: "layoutstop",
      layout: t
    });
    else {
      var d = /* @__PURE__ */ r10.eles.nodes(), g = /* @__PURE__ */ au(a, r10, d);
      d.layoutPositions(t, r10, g);
    }
  }, "done"), l = 0, u = true;
  if (r10.animate === true) {
    var f = /* @__PURE__ */ m$1(function c() {
      for (var d = 0; u && d < r10.refresh; ) u = /* @__PURE__ */ s(l), l++, d++;
      if (!u) Ps(a, r10), o();
      else {
        var g = /* @__PURE__ */ $r();
        g - n >= r10.animationThreshold && i(), _a(c);
      }
    }, "frame");
    f();
  } else {
    for (; u; ) u = /* @__PURE__ */ s(l), l++;
    Ps(a, r10), o();
  }
  return this;
};
Sn.prototype.stop = function() {
  return this.stopped = true, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
Sn.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var tg = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = /* @__PURE__ */ a.eles.edges(), i = /* @__PURE__ */ a.eles.nodes(), s = /* @__PURE__ */ gr(a.boundingBox ? a.boundingBox : {
    x1: 0,
    y1: 0,
    w: /* @__PURE__ */ e.width(),
    h: /* @__PURE__ */ e.height()
  }), o = {
    isCompound: /* @__PURE__ */ e.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: /* @__PURE__ */ i.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: /* @__PURE__ */ n.size(),
    temperature: a.initialTemp,
    clientWidth: s.w,
    clientHeight: s.h,
    boundingBox: s
  }, l = /* @__PURE__ */ a.eles.components(), u = {}, f = 0; f < l.length; f++) for (var c = l[f], d = 0; d < c.length; d++) {
    var g = c[d];
    u[g.id()] = f;
  }
  for (var f = 0; f < o.nodeSize; f++) {
    var h = i[f], m = /* @__PURE__ */ h.layoutDimensions(a), y = {};
    y.isLocked = /* @__PURE__ */ h.locked(), y.id = /* @__PURE__ */ h.data("id"), y.parentId = /* @__PURE__ */ h.data("parent"), y.cmptId = u[h.id()], y.children = [], y.positionX = /* @__PURE__ */ h.position("x"), y.positionY = /* @__PURE__ */ h.position("y"), y.offsetX = 0, y.offsetY = 0, y.height = m.w, y.width = m.h, y.maxX = y.positionX + y.width / 2, y.minX = y.positionX - y.width / 2, y.maxY = y.positionY + y.height / 2, y.minY = y.positionY - y.height / 2, y.padLeft = /* @__PURE__ */ parseFloat(/* @__PURE__ */ h.style("padding")), y.padRight = /* @__PURE__ */ parseFloat(/* @__PURE__ */ h.style("padding")), y.padTop = /* @__PURE__ */ parseFloat(/* @__PURE__ */ h.style("padding")), y.padBottom = /* @__PURE__ */ parseFloat(/* @__PURE__ */ h.style("padding")), y.nodeRepulsion = Ve(a.nodeRepulsion) ? a.nodeRepulsion(h) : a.nodeRepulsion, o.layoutNodes.push(y), o.idToIndex[y.id] = f;
  }
  for (var p = [], b1 = 0, w = -1, x = [], f = 0; f < o.nodeSize; f++) {
    var h = o.layoutNodes[f], T = h.parentId;
    T != null ? o.layoutNodes[o.idToIndex[T]].children.push(h.id) : (p[++w] = h.id, x.push(h.id));
  }
  for (o.graphSet.push(x); b1 <= w; ) {
    var C = p[b1++], E = o.idToIndex[C], g = o.layoutNodes[E], k = g.children;
    if (k.length > 0) {
      o.graphSet.push(k);
      for (var f = 0; f < k.length; f++) p[++w] = k[f];
    }
  }
  for (var f = 0; f < o.graphSet.length; f++) for (var S = o.graphSet[f], d = 0; d < S.length; d++) {
    var L = o.idToIndex[S[d]];
    o.indexToGraph[L] = f;
  }
  for (var f = 0; f < o.edgeSize; f++) {
    var B = n[f], M = {};
    M.id = /* @__PURE__ */ B.data("id"), M.sourceId = /* @__PURE__ */ B.data("source"), M.targetId = /* @__PURE__ */ B.data("target");
    var A = Ve(a.idealEdgeLength) ? a.idealEdgeLength(B) : a.idealEdgeLength, P = Ve(a.edgeElasticity) ? a.edgeElasticity(B) : a.edgeElasticity, I = o.idToIndex[M.sourceId], R = o.idToIndex[M.targetId], O = o.indexToGraph[I], z = o.indexToGraph[R];
    if (O != z) {
      for (var $ = /* @__PURE__ */ ag(M.sourceId, M.targetId, o), H = o.graphSet[$], V = 0, y = o.layoutNodes[I]; H.indexOf(y.id) === -1; ) y = o.layoutNodes[o.idToIndex[y.parentId]], V++;
      for (y = o.layoutNodes[R]; H.indexOf(y.id) === -1; ) y = o.layoutNodes[o.idToIndex[y.parentId]], V++;
      A *= V * a.nestingFactor;
    }
    M.idealLength = A, M.elasticity = P, o.layoutEdges.push(M);
  }
  return o;
}, "createLayoutInfo"), ag = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = /* @__PURE__ */ ng(e, t, 0, a);
  return 2 > n.count ? 0 : n.graph;
}, "findLCA"), ng = /* @__PURE__ */ m$1(function r7(e, t, a, n) {
  var i = n.graphSet[a];
  if (-1 < i.indexOf(e) && -1 < i.indexOf(t)) return {
    count: 2,
    graph: a
  };
  for (var s = 0, o = 0; o < i.length; o++) {
    var l = i[o], u = n.idToIndex[l], f = n.layoutNodes[u].children;
    if (f.length !== 0) {
      var c = n.indexToGraph[n.idToIndex[f[0]]], d = /* @__PURE__ */ r7(e, t, c, n);
      if (d.count !== 0) if (d.count === 1) {
        if (s++, s === 2) break;
      } else return d;
    }
  }
  return {
    count: s,
    graph: a
  };
}, "findLCA_aux"), ig, sg = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
    var s = e.layoutNodes[i];
    s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
  }
}, "randomizePositions"), au = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = e.boundingBox, i = {
    x1: 1 / 0,
    x2: -1 / 0,
    y1: 1 / 0,
    y2: -1 / 0
  };
  return t.boundingBox && (a.forEach(function(s) {
    var o = e.layoutNodes[e.idToIndex[s.data("id")]];
    i.x1 = /* @__PURE__ */ Math.min(i.x1, o.positionX), i.x2 = /* @__PURE__ */ Math.max(i.x2, o.positionX), i.y1 = /* @__PURE__ */ Math.min(i.y1, o.positionY), i.y2 = /* @__PURE__ */ Math.max(i.y2, o.positionY);
  }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
    var l = e.layoutNodes[e.idToIndex[s.data("id")]];
    if (t.boundingBox) {
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
}, "getScaleInBoundsFn"), og = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = a.layout, i = /* @__PURE__ */ a.eles.nodes(), s = /* @__PURE__ */ au(e, a, i);
  i.positions(s), e.ready !== true && (e.ready = true, n.one("layoutready", a.ready), n.emit({
    type: "layoutready",
    layout: this
  }));
}, "refreshPositions"), ug = /* @__PURE__ */ m$1(function(e, t, a) {
  lg(e, t), cg(e), dg(e, t), hg(e), gg(e);
}, "step"), lg = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = 0; a < e.graphSet.length; a++) for (var n = e.graphSet[a], i = n.length, s = 0; s < i; s++) for (var o = e.layoutNodes[e.idToIndex[n[s]]], l = s + 1; l < i; l++) {
    var u = e.layoutNodes[e.idToIndex[n[l]]];
    vg(o, u, e, t);
  }
}, "calculateNodeForces"), ks = /* @__PURE__ */ m$1(function(e) {
  return -e + 2 * e * Math.random();
}, "randomDistance"), vg = /* @__PURE__ */ m$1(function(e, t, a, n) {
  var i = e.cmptId, s = t.cmptId;
  if (!(i !== s && !a.isCompound)) {
    var o = t.positionX - e.positionX, l = t.positionY - e.positionY, u = 1;
    o === 0 && l === 0 && (o = /* @__PURE__ */ ks(u), l = /* @__PURE__ */ ks(u));
    var f = /* @__PURE__ */ fg(e, t, o, l);
    if (f > 0) var c = n.nodeOverlap * f, d = /* @__PURE__ */ Math.sqrt(o * o + l * l), g = c * o / d, h = c * l / d;
    else var m = /* @__PURE__ */ sn(e, o, l), y = /* @__PURE__ */ sn(t, -1 * o, -1 * l), p = y.x - m.x, b1 = y.y - m.y, w = p * p + b1 * b1, d = /* @__PURE__ */ Math.sqrt(w), c = (e.nodeRepulsion + t.nodeRepulsion) / w, g = c * p / d, h = c * b1 / d;
    e.isLocked || (e.offsetX -= g, e.offsetY -= h), t.isLocked || (t.offsetX += g, t.offsetY += h);
  }
}, "nodeRepulsion"), fg = /* @__PURE__ */ m$1(function(e, t, a, n) {
  if (a > 0) var i = e.maxX - t.minX;
  else var i = t.maxX - e.minX;
  if (n > 0) var s = e.maxY - t.minY;
  else var s = t.maxY - e.minY;
  return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
}, "nodesOverlap"), sn = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, l = a / t, u = s / o, f = {};
  return t === 0 && 0 < a || t === 0 && 0 > a ? (f.x = n, f.y = i + s / 2, f) : 0 < t && -1 * u <= l && l <= u ? (f.x = n + o / 2, f.y = i + o * a / 2 / t, f) : 0 > t && -1 * u <= l && l <= u ? (f.x = n - o / 2, f.y = i - o * a / 2 / t, f) : 0 < a && (l <= -1 * u || l >= u) ? (f.x = n + s * t / 2 / a, f.y = i + s / 2, f) : (0 > a && (l <= -1 * u || l >= u) && (f.x = n - s * t / 2 / a, f.y = i - s / 2), f);
}, "findClippingPoint"), cg = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = 0; a < e.edgeSize; a++) {
    var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], l = e.layoutNodes[o], u = l.positionX - s.positionX, f = l.positionY - s.positionY;
    if (!(u === 0 && f === 0)) {
      var c = /* @__PURE__ */ sn(s, u, f), d = /* @__PURE__ */ sn(l, -1 * u, -1 * f), g = d.x - c.x, h = d.y - c.y, m = /* @__PURE__ */ Math.sqrt(g * g + h * h), y = Math.pow(n.idealLength - m, 2) / n.elasticity;
      if (m !== 0) var p = y * g / m, b1 = y * h / m;
      else var p = 0, b1 = 0;
      s.isLocked || (s.offsetX += p, s.offsetY += b1), l.isLocked || (l.offsetX -= p, l.offsetY -= b1);
    }
  }
}, "calculateEdgeForces"), dg = /* @__PURE__ */ m$1(function(e, t) {
  if (t.gravity !== 0) for (var a = 1, n = 0; n < e.graphSet.length; n++) {
    var i = e.graphSet[n], s = i.length;
    if (n === 0) var o = e.clientHeight / 2, l = e.clientWidth / 2;
    else var u = e.layoutNodes[e.idToIndex[i[0]]], f = e.layoutNodes[e.idToIndex[u.parentId]], o = f.positionX, l = f.positionY;
    for (var c = 0; c < s; c++) {
      var d = e.layoutNodes[e.idToIndex[i[c]]];
      if (!d.isLocked) {
        var g = o - d.positionX, h = l - d.positionY, m = /* @__PURE__ */ Math.sqrt(g * g + h * h);
        if (m > a) {
          var y = t.gravity * g / m, p = t.gravity * h / m;
          d.offsetX += y, d.offsetY += p;
        }
      }
    }
  }
}, "calculateGravityForces"), hg = /* @__PURE__ */ m$1(function(e, t) {
  var a = [], n = 0, i = -1;
  for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
    var s = a[n++], o = e.idToIndex[s], l = e.layoutNodes[o], u = l.children;
    if (0 < u.length && !l.isLocked) {
      for (var f = l.offsetX, c = l.offsetY, d = 0; d < u.length; d++) {
        var g = e.layoutNodes[e.idToIndex[u[d]]];
        g.offsetX += f, g.offsetY += c, a[++i] = u[d];
      }
      l.offsetX = 0, l.offsetY = 0;
    }
  }
}, "propagateForces"), gg = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    if (!(0 < n.children.length || n.isLocked)) {
      var i = /* @__PURE__ */ pg(n.offsetX, n.offsetY, e.temperature);
      n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, yg(n, e);
    }
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
  }
}, "updatePositions"), pg = /* @__PURE__ */ m$1(function(e, t, a) {
  var n = /* @__PURE__ */ Math.sqrt(e * e + t * t);
  if (n > a) var i = {
    x: a * e / n,
    y: a * t / n
  };
  else var i = {
    x: e,
    y: t
  };
  return i;
}, "limitForce"), yg = /* @__PURE__ */ m$1(function r8(e, t) {
  var a = e.parentId;
  if (a != null) {
    var n = t.layoutNodes[t.idToIndex[a]], i = false;
    if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = true), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = true), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = true), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = true), i) return r8(n, t);
  }
}, "updateAncestryBoundaries"), Ps = /* @__PURE__ */ m$1(function(e, t) {
  for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
    var s = a[i], o = s.cmptId, l = n[o] = n[o] || [];
    l.push(s);
  }
  for (var u = 0, i = 0; i < n.length; i++) {
    var f = n[i];
    if (f) {
      f.x1 = 1 / 0, f.x2 = -1 / 0, f.y1 = 1 / 0, f.y2 = -1 / 0;
      for (var c = 0; c < f.length; c++) {
        var d = f[c];
        f.x1 = /* @__PURE__ */ Math.min(f.x1, d.positionX - d.width / 2), f.x2 = /* @__PURE__ */ Math.max(f.x2, d.positionX + d.width / 2), f.y1 = /* @__PURE__ */ Math.min(f.y1, d.positionY - d.height / 2), f.y2 = /* @__PURE__ */ Math.max(f.y2, d.positionY + d.height / 2);
      }
      f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, u += f.w * f.h;
    }
  }
  n.sort(function(b1, w) {
    return w.w * w.h - b1.w * b1.h;
  });
  for (var g = 0, h = 0, m = 0, y = 0, p = Math.sqrt(u) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++) {
    var f = n[i];
    if (f) {
      for (var c = 0; c < f.length; c++) {
        var d = f[c];
        d.isLocked || (d.positionX += g - f.x1, d.positionY += h - f.y1);
      }
      g += f.w + t.componentSpacing, m += f.w + t.componentSpacing, y = /* @__PURE__ */ Math.max(y, f.h), m > p && (h += y + t.componentSpacing, g = 0, m = 0, y = 0);
    }
  }
}, "separateComponents"), mg = {
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
  position: /* @__PURE__ */ m$1(function(e) {
  }, "position"),
  sort: void 0,
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: /* @__PURE__ */ m$1(function(e, t) {
    return true;
  }, "animateFilter"),
  ready: void 0,
  stop: void 0,
  transform: /* @__PURE__ */ m$1(function(e, t) {
    return t;
  }, "transform")
};
function nu(r10) {
  this.options = /* @__PURE__ */ we({}, mg, r10);
}
m$1(nu, "GridLayout");
nu.prototype.run = function() {
  var r10 = this.options, e = r10, t = r10.cy, a = e.eles, n = /* @__PURE__ */ a.nodes().not(":parent");
  e.sort && (n = /* @__PURE__ */ n.sort(e.sort));
  var i = /* @__PURE__ */ gr(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: /* @__PURE__ */ t.width(),
    h: /* @__PURE__ */ t.height()
  });
  if (i.h === 0 || i.w === 0) a.nodes().layoutPositions(this, e, function(U) {
    return {
      x: i.x1,
      y: i.y1
    };
  });
  else {
    var s = /* @__PURE__ */ n.size(), o = /* @__PURE__ */ Math.sqrt(s * i.h / i.w), l = /* @__PURE__ */ Math.round(o), u = /* @__PURE__ */ Math.round(i.w / i.h * o), f = /* @__PURE__ */ m$1(function(J) {
      if (J == null) return Math.min(l, u);
      var j = /* @__PURE__ */ Math.min(l, u);
      j == l ? l = J : u = J;
    }, "small"), c = /* @__PURE__ */ m$1(function(J) {
      if (J == null) return Math.max(l, u);
      var j = /* @__PURE__ */ Math.max(l, u);
      j == l ? l = J : u = J;
    }, "large"), d = e.rows, g = e.cols != null ? e.cols : e.columns;
    if (d != null && g != null) l = d, u = g;
    else if (d != null && g == null) l = d, u = /* @__PURE__ */ Math.ceil(s / l);
    else if (d == null && g != null) u = g, l = /* @__PURE__ */ Math.ceil(s / u);
    else if (u * l > s) {
      var h = /* @__PURE__ */ f(), m = /* @__PURE__ */ c();
      (h - 1) * m >= s ? f(h - 1) : (m - 1) * h >= s && c(m - 1);
    } else for (; u * l < s; ) {
      var y = /* @__PURE__ */ f(), p = /* @__PURE__ */ c();
      (p + 1) * y >= s ? c(p + 1) : f(y + 1);
    }
    var b1 = i.w / u, w = i.h / l;
    if (e.condense && (b1 = 0, w = 0), e.avoidOverlap) for (var x = 0; x < n.length; x++) {
      var T = n[x], C = T._private.position;
      (C.x == null || C.y == null) && (C.x = 0, C.y = 0);
      var E = /* @__PURE__ */ T.layoutDimensions(e), k = e.avoidOverlapPadding, S = E.w + k, L = E.h + k;
      b1 = /* @__PURE__ */ Math.max(b1, S), w = /* @__PURE__ */ Math.max(w, L);
    }
    for (var B = {}, M = /* @__PURE__ */ m$1(function(J, j) {
      return !!B["c-" + J + "-" + j];
    }, "used"), A = /* @__PURE__ */ m$1(function(J, j) {
      B["c-" + J + "-" + j] = true;
    }, "use"), P = 0, I = 0, R = /* @__PURE__ */ m$1(function() {
      I++, I >= u && (I = 0, P++);
    }, "moveToNextCell"), O = {}, z = 0; z < n.length; z++) {
      var $ = n[z], H = /* @__PURE__ */ e.position($);
      if (H && (H.row !== void 0 || H.col !== void 0)) {
        var V = {
          row: H.row,
          col: H.col
        };
        if (V.col === void 0) for (V.col = 0; M(V.row, V.col); ) V.col++;
        else if (V.row === void 0) for (V.row = 0; M(V.row, V.col); ) V.row++;
        O[$.id()] = V, A(V.row, V.col);
      }
    }
    var F = /* @__PURE__ */ m$1(function(J, j) {
      var ee, re;
      if (J.locked() || J.isParent()) return false;
      var Y = O[J.id()];
      if (Y) ee = Y.col * b1 + b1 / 2 + i.x1, re = Y.row * w + w / 2 + i.y1;
      else {
        for (; M(P, I); ) R();
        ee = I * b1 + b1 / 2 + i.x1, re = P * w + w / 2 + i.y1, A(P, I), R();
      }
      return {
        x: ee,
        y: re
      };
    }, "getPos");
    n.layoutPositions(this, e, F);
  }
  return this;
};
var bg = {
  ready: /* @__PURE__ */ m$1(function() {
  }, "ready"),
  stop: /* @__PURE__ */ m$1(function() {
  }, "stop")
};
function Ci(r10) {
  this.options = /* @__PURE__ */ we({}, bg, r10);
}
m$1(Ci, "NullLayout");
Ci.prototype.run = function() {
  var r10 = this.options, e = r10.eles, t = this;
  return r10.cy, t.emit("layoutstart"), e.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), t.one("layoutready", r10.ready), t.emit("layoutready"), t.one("layoutstop", r10.stop), t.emit("layoutstop"), this;
};
Ci.prototype.stop = function() {
  return this;
};
var wg = {
  positions: void 0,
  zoom: void 0,
  pan: void 0,
  fit: true,
  padding: 30,
  spacingFactor: void 0,
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: /* @__PURE__ */ m$1(function(e, t) {
    return true;
  }, "animateFilter"),
  ready: void 0,
  stop: void 0,
  transform: /* @__PURE__ */ m$1(function(e, t) {
    return t;
  }, "transform")
};
function iu(r10) {
  this.options = /* @__PURE__ */ we({}, wg, r10);
}
m$1(iu, "PresetLayout");
iu.prototype.run = function() {
  var r10 = this.options, e = r10.eles, t = /* @__PURE__ */ e.nodes(), a = /* @__PURE__ */ Ve(r10.positions);
  function n(i) {
    if (r10.positions == null) return Cv(/* @__PURE__ */ i.position());
    if (a) return r10.positions(i);
    var s = r10.positions[i._private.data.id];
    return s ?? null;
  }
  return m$1(n, "getPosition"), t.layoutPositions(this, r10, function(i, s) {
    var o = /* @__PURE__ */ n(i);
    return i.locked() || o == null ? false : o;
  }), this;
};
var xg = {
  fit: true,
  padding: 30,
  boundingBox: void 0,
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: /* @__PURE__ */ m$1(function(e, t) {
    return true;
  }, "animateFilter"),
  ready: void 0,
  stop: void 0,
  transform: /* @__PURE__ */ m$1(function(e, t) {
    return t;
  }, "transform")
};
function su(r10) {
  this.options = /* @__PURE__ */ we({}, xg, r10);
}
m$1(su, "RandomLayout");
su.prototype.run = function() {
  var r10 = this.options, e = r10.cy, t = r10.eles, a = /* @__PURE__ */ gr(r10.boundingBox ? r10.boundingBox : {
    x1: 0,
    y1: 0,
    w: /* @__PURE__ */ e.width(),
    h: /* @__PURE__ */ e.height()
  }), n = /* @__PURE__ */ m$1(function(s, o) {
    return {
      x: a.x1 + Math.round(Math.random() * a.w),
      y: a.y1 + Math.round(Math.random() * a.h)
    };
  }, "getPos");
  return t.nodes().layoutPositions(this, r10, n), this;
};
var Eg = [
  {
    name: "breadthfirst",
    impl: eu
  },
  {
    name: "circle",
    impl: ru
  },
  {
    name: "concentric",
    impl: tu
  },
  {
    name: "cose",
    impl: Sn
  },
  {
    name: "grid",
    impl: nu
  },
  {
    name: "null",
    impl: Ci
  },
  {
    name: "preset",
    impl: iu
  },
  {
    name: "random",
    impl: su
  }
];
function ou(r10) {
  this.options = r10, this.notifications = 0;
}
m$1(ou, "NullRenderer");
var Bs = /* @__PURE__ */ m$1(function() {
}, "noop"), Ms = /* @__PURE__ */ m$1(function() {
  throw new Error("A headless instance can not render images");
}, "throwImgErr");
ou.prototype = {
  recalculateRenderedStyle: Bs,
  notify: /* @__PURE__ */ m$1(function() {
    this.notifications++;
  }, "notify"),
  init: Bs,
  isHeadless: /* @__PURE__ */ m$1(function() {
    return true;
  }, "isHeadless"),
  png: Ms,
  jpg: Ms
};
var Si = {};
Si.arrowShapeWidth = 0.3;
Si.registerArrowShapes = function() {
  var r10 = this.arrowShapes = {}, e = this, t = /* @__PURE__ */ m$1(function(u, f, c, d, g, h, m) {
    var y = g.x - c / 2 - m, p = g.x + c / 2 + m, b1 = g.y - c / 2 - m, w = g.y + c / 2 + m, x = y <= u && u <= p && b1 <= f && f <= w;
    return x;
  }, "bbCollide"), a = /* @__PURE__ */ m$1(function(u, f, c, d, g) {
    var h = u * Math.cos(d) - f * Math.sin(d), m = u * Math.sin(d) + f * Math.cos(d), y = h * c, p = m * c, b1 = y + g.x, w = p + g.y;
    return {
      x: b1,
      y: w
    };
  }, "transform"), n = /* @__PURE__ */ m$1(function(u, f, c, d) {
    for (var g = [], h = 0; h < u.length; h += 2) {
      var m = u[h], y = u[h + 1];
      g.push(/* @__PURE__ */ a(m, y, f, c, d));
    }
    return g;
  }, "transformPoints"), i = /* @__PURE__ */ m$1(function(u) {
    for (var f = [], c = 0; c < u.length; c++) {
      var d = u[c];
      f.push(d.x, d.y);
    }
    return f;
  }, "pointsToArr"), s = /* @__PURE__ */ m$1(function(u) {
    return u.pstyle("width").pfValue * u.pstyle("arrow-scale").pfValue * 2;
  }, "standardGap"), o = /* @__PURE__ */ m$1(function(u, f) {
    he(f) && (f = r10[f]), r10[u] = /* @__PURE__ */ we({
      name: u,
      points: [
        -0.15,
        -0.3,
        0.15,
        -0.3,
        0.15,
        0.3,
        -0.15,
        0.3
      ],
      collide: /* @__PURE__ */ m$1(function(d, g, h, m, y, p) {
        var b1 = /* @__PURE__ */ i(/* @__PURE__ */ n(this.points, h + 2 * p, m, y)), w = /* @__PURE__ */ hr(d, g, b1);
        return w;
      }, "collide"),
      roughCollide: t,
      draw: /* @__PURE__ */ m$1(function(d, g, h, m) {
        var y = /* @__PURE__ */ n(this.points, g, h, m);
        e.arrowShapeImpl("polygon")(d, y);
      }, "draw"),
      spacing: /* @__PURE__ */ m$1(function(d) {
        return 0;
      }, "spacing"),
      gap: s
    }, f);
  }, "defineArrowShape");
  o("none", {
    collide: ja,
    roughCollide: ja,
    draw: li,
    spacing: qi,
    gap: qi
  }), o("triangle", {
    points: [
      -0.15,
      -0.3,
      0,
      0,
      0.15,
      -0.3
    ]
  }), o("arrow", "triangle"), o("triangle-backcurve", {
    points: r10.triangle.points,
    controlPoint: [
      0,
      -0.15
    ],
    roughCollide: t,
    draw: /* @__PURE__ */ m$1(function(u, f, c, d, g) {
      var h = /* @__PURE__ */ n(this.points, f, c, d), m = this.controlPoint, y = /* @__PURE__ */ a(m[0], m[1], f, c, d);
      e.arrowShapeImpl(this.name)(u, h, y);
    }, "draw"),
    gap: /* @__PURE__ */ m$1(function(u) {
      return s(u) * 0.8;
    }, "gap")
  }), o("triangle-tee", {
    points: [
      0,
      0,
      0.15,
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
      0.15,
      -0.5,
      0.15,
      -0.4
    ],
    collide: /* @__PURE__ */ m$1(function(u, f, c, d, g, h, m) {
      var y = /* @__PURE__ */ i(/* @__PURE__ */ n(this.points, c + 2 * m, d, g)), p = /* @__PURE__ */ i(/* @__PURE__ */ n(this.pointsTee, c + 2 * m, d, g)), b1 = hr(u, f, y) || hr(u, f, p);
      return b1;
    }, "collide"),
    draw: /* @__PURE__ */ m$1(function(u, f, c, d, g) {
      var h = /* @__PURE__ */ n(this.points, f, c, d), m = /* @__PURE__ */ n(this.pointsTee, f, c, d);
      e.arrowShapeImpl(this.name)(u, h, m);
    }, "draw")
  }), o("circle-triangle", {
    radius: 0.15,
    pointsTr: [
      0,
      -0.15,
      0.15,
      -0.45,
      -0.15,
      -0.45,
      0,
      -0.15
    ],
    collide: /* @__PURE__ */ m$1(function(u, f, c, d, g, h, m) {
      var y = g, p = Math.pow(y.x - u, 2) + Math.pow(y.y - f, 2) <= Math.pow((c + 2 * m) * this.radius, 2), b1 = /* @__PURE__ */ i(/* @__PURE__ */ n(this.points, c + 2 * m, d, g));
      return hr(u, f, b1) || p;
    }, "collide"),
    draw: /* @__PURE__ */ m$1(function(u, f, c, d, g) {
      var h = /* @__PURE__ */ n(this.pointsTr, f, c, d);
      e.arrowShapeImpl(this.name)(u, h, d.x, d.y, this.radius * f);
    }, "draw"),
    spacing: /* @__PURE__ */ m$1(function(u) {
      return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
    }, "spacing")
  }), o("triangle-cross", {
    points: [
      0,
      0,
      0.15,
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
      0.15,
      -0.4,
      0.15,
      -0.4
    ],
    crossLinePts: /* @__PURE__ */ m$1(function(u, f) {
      var c = /* @__PURE__ */ this.baseCrossLinePts.slice(), d = f / u, g = 3, h = 5;
      return c[g] = c[g] - d, c[h] = c[h] - d, c;
    }, "crossLinePts"),
    collide: /* @__PURE__ */ m$1(function(u, f, c, d, g, h, m) {
      var y = /* @__PURE__ */ i(/* @__PURE__ */ n(this.points, c + 2 * m, d, g)), p = /* @__PURE__ */ i(/* @__PURE__ */ n(/* @__PURE__ */ this.crossLinePts(c, h), c + 2 * m, d, g)), b1 = hr(u, f, y) || hr(u, f, p);
      return b1;
    }, "collide"),
    draw: /* @__PURE__ */ m$1(function(u, f, c, d, g) {
      var h = /* @__PURE__ */ n(this.points, f, c, d), m = /* @__PURE__ */ n(/* @__PURE__ */ this.crossLinePts(f, g), f, c, d);
      e.arrowShapeImpl(this.name)(u, h, m);
    }, "draw")
  }), o("vee", {
    points: [
      -0.15,
      -0.3,
      0,
      0,
      0.15,
      -0.3,
      0,
      -0.15
    ],
    gap: /* @__PURE__ */ m$1(function(u) {
      return s(u) * 0.525;
    }, "gap")
  }), o("circle", {
    radius: 0.15,
    collide: /* @__PURE__ */ m$1(function(u, f, c, d, g, h, m) {
      var y = g, p = Math.pow(y.x - u, 2) + Math.pow(y.y - f, 2) <= Math.pow((c + 2 * m) * this.radius, 2);
      return p;
    }, "collide"),
    draw: /* @__PURE__ */ m$1(function(u, f, c, d, g) {
      e.arrowShapeImpl(this.name)(u, d.x, d.y, this.radius * f);
    }, "draw"),
    spacing: /* @__PURE__ */ m$1(function(u) {
      return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
    }, "spacing")
  }), o("tee", {
    points: [
      -0.15,
      0,
      -0.15,
      -0.1,
      0.15,
      -0.1,
      0.15,
      0
    ],
    spacing: /* @__PURE__ */ m$1(function(u) {
      return 1;
    }, "spacing"),
    gap: /* @__PURE__ */ m$1(function(u) {
      return 1;
    }, "gap")
  }), o("square", {
    points: [
      -0.15,
      0,
      0.15,
      0,
      0.15,
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
      0.15,
      -0.15,
      0,
      0
    ],
    gap: /* @__PURE__ */ m$1(function(u) {
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
      0.1,
      -0.2,
      0.15,
      -0.15
    ],
    gap: /* @__PURE__ */ m$1(function(u) {
      return 0.95 * u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
    }, "gap")
  });
};
var bt = {};
bt.projectIntoViewport = function(r10, e) {
  var t = this.cy, a = /* @__PURE__ */ this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = /* @__PURE__ */ t.pan(), l = /* @__PURE__ */ t.zoom(), u = ((r10 - n) / s - o.x) / l, f = ((e - i) / s - o.y) / l;
  return [
    u,
    f
  ];
};
bt.findContainerClientCoords = function() {
  if (this.containerBB) return this.containerBB;
  var r10 = this.container, e = /* @__PURE__ */ r10.getBoundingClientRect(), t = /* @__PURE__ */ this.cy.window().getComputedStyle(r10), a = /* @__PURE__ */ m$1(function(p) {
    return parseFloat(/* @__PURE__ */ t.getPropertyValue(p));
  }, "styleValue"), n = {
    left: /* @__PURE__ */ a("padding-left"),
    right: /* @__PURE__ */ a("padding-right"),
    top: /* @__PURE__ */ a("padding-top"),
    bottom: /* @__PURE__ */ a("padding-bottom")
  }, i = {
    left: /* @__PURE__ */ a("border-left-width"),
    right: /* @__PURE__ */ a("border-right-width"),
    top: /* @__PURE__ */ a("border-top-width"),
    bottom: /* @__PURE__ */ a("border-bottom-width")
  }, s = r10.clientWidth, o = r10.clientHeight, l = n.left + n.right, u = n.top + n.bottom, f = i.left + i.right, c = e.width / (s + f), d = s - l, g = o - u, h = e.left + n.left + i.left, m = e.top + n.top + i.top;
  return this.containerBB = [
    h,
    m,
    d,
    g,
    c
  ];
};
bt.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
bt.findNearestElement = function(r10, e, t, a) {
  return this.findNearestElements(r10, e, t, a)[0];
};
bt.findNearestElements = function(r10, e, t, a) {
  var n = this, i = this, s = /* @__PURE__ */ i.getCachedZSortedEles(), o = [], l = /* @__PURE__ */ i.cy.zoom(), u = /* @__PURE__ */ i.cy.hasCompoundNodes(), f = (a ? 24 : 8) / l, c = (a ? 8 : 2) / l, d = (a ? 8 : 2) / l, g = 1 / 0, h, m;
  t && (s = s.interactive);
  function y(E, k) {
    if (E.isNode()) {
      if (m) return;
      m = E, o.push(E);
    }
    if (E.isEdge() && (k == null || k < g)) if (h) {
      if (h.pstyle("z-compound-depth").value === E.pstyle("z-compound-depth").value && h.pstyle("z-compound-depth").value === E.pstyle("z-compound-depth").value) {
        for (var S = 0; S < o.length; S++) if (o[S].isEdge()) {
          o[S] = E, h = E, g = k ?? g;
          break;
        }
      }
    } else o.push(E), h = E, g = k ?? g;
  }
  m$1(y, "addEle");
  function p(E) {
    var k = E.outerWidth() + 2 * c, S = E.outerHeight() + 2 * c, L = k / 2, B = S / 2, M = /* @__PURE__ */ E.position(), A = E.pstyle("corner-radius").value === "auto" ? "auto" : E.pstyle("corner-radius").pfValue, P = E._private.rscratch;
    if (M.x - L <= r10 && r10 <= M.x + L && M.y - B <= e && e <= M.y + B) {
      var I = i.nodeShapes[n.getNodeShape(E)];
      if (I.checkPoint(r10, e, 0, k, S, M.x, M.y, A, P)) return y(E, 0), true;
    }
  }
  m$1(p, "checkNode");
  function b1(E) {
    var k = E._private, S = k.rscratch, L = E.pstyle("width").pfValue, B = E.pstyle("arrow-scale").value, M = L / 2 + f, A = M * M, P = M * 2, z = k.source, $ = k.target, I;
    if (S.edgeType === "segments" || S.edgeType === "straight" || S.edgeType === "haystack") {
      for (var R = S.allpts, O = 0; O + 3 < R.length; O += 2) if (zv(r10, e, R[O], R[O + 1], R[O + 2], R[O + 3], P) && A > (I = /* @__PURE__ */ $v(r10, e, R[O], R[O + 1], R[O + 2], R[O + 3]))) return y(E, I), true;
    } else if (S.edgeType === "bezier" || S.edgeType === "multibezier" || S.edgeType === "self" || S.edgeType === "compound") {
      for (var R = S.allpts, O = 0; O + 5 < S.allpts.length; O += 4) if (Nv(r10, e, R[O], R[O + 1], R[O + 2], R[O + 3], R[O + 4], R[O + 5], P) && A > (I = /* @__PURE__ */ qv(r10, e, R[O], R[O + 1], R[O + 2], R[O + 3], R[O + 4], R[O + 5]))) return y(E, I), true;
    }
    for (var z = z || k.source, $ = $ || k.target, H = /* @__PURE__ */ n.getArrowWidth(L, B), V = [
      {
        name: "source",
        x: S.arrowStartX,
        y: S.arrowStartY,
        angle: S.srcArrowAngle
      },
      {
        name: "target",
        x: S.arrowEndX,
        y: S.arrowEndY,
        angle: S.tgtArrowAngle
      },
      {
        name: "mid-source",
        x: S.midX,
        y: S.midY,
        angle: S.midsrcArrowAngle
      },
      {
        name: "mid-target",
        x: S.midX,
        y: S.midY,
        angle: S.midtgtArrowAngle
      }
    ], O = 0; O < V.length; O++) {
      var F = V[O], U = i.arrowShapes[E.pstyle(F.name + "-arrow-shape").value], J = E.pstyle("width").pfValue;
      if (U.roughCollide(r10, e, H, F.angle, {
        x: F.x,
        y: F.y
      }, J, f) && U.collide(r10, e, H, F.angle, {
        x: F.x,
        y: F.y
      }, J, f)) return y(E), true;
    }
    u && o.length > 0 && (p(z), p($));
  }
  m$1(b1, "checkEdge");
  function w(E, k, S) {
    return Pr(E, k, S);
  }
  m$1(w, "preprop");
  function x(E, k) {
    var S = E._private, L = d, B;
    k ? B = k + "-" : B = "", E.boundingBox();
    var M = S.labelBounds[k || "main"], A = E.pstyle(B + "label").value, P = E.pstyle("text-events").strValue === "yes";
    if (!(!P || !A)) {
      var I = /* @__PURE__ */ w(S.rscratch, "labelX", k), R = /* @__PURE__ */ w(S.rscratch, "labelY", k), O = /* @__PURE__ */ w(S.rscratch, "labelAngle", k), z = E.pstyle(B + "text-margin-x").pfValue, $ = E.pstyle(B + "text-margin-y").pfValue, H = M.x1 - L - z, V = M.x2 + L - z, F = M.y1 - L - $, U = M.y2 + L - $;
      if (O) {
        var J = /* @__PURE__ */ Math.cos(O), j = /* @__PURE__ */ Math.sin(O), ee = /* @__PURE__ */ m$1(function(ge, ne) {
          return ge = ge - I, ne = ne - R, {
            x: ge * J - ne * j + I,
            y: ge * j + ne * J + R
          };
        }, "rotate"), re = /* @__PURE__ */ ee(H, F), Y = /* @__PURE__ */ ee(H, U), N = /* @__PURE__ */ ee(V, F), X = /* @__PURE__ */ ee(V, U), Z = [
          re.x + z,
          re.y + $,
          N.x + z,
          N.y + $,
          X.x + z,
          X.y + $,
          Y.x + z,
          Y.y + $
        ];
        if (hr(r10, e, Z)) return y(E), true;
      } else if (It(M, r10, e)) return y(E), true;
    }
  }
  m$1(x, "checkLabel");
  for (var T = s.length - 1; T >= 0; T--) {
    var C = s[T];
    C.isNode() ? p(C) || x(C) : b1(C) || x(C) || x(C, "source") || x(C, "target");
  }
  return o;
};
bt.getAllInBox = function(r10, e, t, a) {
  var n = this.getCachedZSortedEles().interactive, i = [], s = /* @__PURE__ */ Math.min(r10, t), o = /* @__PURE__ */ Math.max(r10, t), l = /* @__PURE__ */ Math.min(e, a), u = /* @__PURE__ */ Math.max(e, a);
  r10 = s, t = o, e = l, a = u;
  for (var f = /* @__PURE__ */ gr({
    x1: r10,
    y1: e,
    x2: t,
    y2: a
  }), c = 0; c < n.length; c++) {
    var d = n[c];
    if (d.isNode()) {
      var g = d, h = /* @__PURE__ */ g.boundingBox({
        includeNodes: true,
        includeEdges: false,
        includeLabels: false
      });
      ci(f, h) && !po(h, f) && i.push(g);
    } else {
      var m = d, y = m._private, p = y.rscratch;
      if (p.startX != null && p.startY != null && !It(f, p.startX, p.startY) || p.endX != null && p.endY != null && !It(f, p.endX, p.endY)) continue;
      if (p.edgeType === "bezier" || p.edgeType === "multibezier" || p.edgeType === "self" || p.edgeType === "compound" || p.edgeType === "segments" || p.edgeType === "haystack") {
        for (var b1 = y.rstyle.bezierPts || y.rstyle.linePts || y.rstyle.haystackPts, w = true, x = 0; x < b1.length; x++) if (!Iv(f, b1[x])) {
          w = false;
          break;
        }
        w && i.push(m);
      } else (p.edgeType === "haystack" || p.edgeType === "straight") && i.push(m);
    }
  }
  return i;
};
var on = {};
on.calculateArrowAngles = function(r10) {
  var e = r10._private.rscratch, t = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", l, u, f, c, d, g, p, b1;
  if (t ? (f = e.haystackPts[0], c = e.haystackPts[1], d = e.haystackPts[2], g = e.haystackPts[3]) : (f = e.arrowStartX, c = e.arrowStartY, d = e.arrowEndX, g = e.arrowEndY), p = e.midX, b1 = e.midY, i) l = f - e.segpts[0], u = c - e.segpts[1];
  else if (n || s || o || a) {
    var h = e.allpts, m = /* @__PURE__ */ Ze(h[0], h[2], h[4], 0.1), y = /* @__PURE__ */ Ze(h[1], h[3], h[5], 0.1);
    l = f - m, u = c - y;
  } else l = f - p, u = c - b1;
  e.srcArrowAngle = /* @__PURE__ */ La(l, u);
  var p = e.midX, b1 = e.midY;
  if (t && (p = (f + d) / 2, b1 = (c + g) / 2), l = d - f, u = g - c, i) {
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
    var h = e.allpts, T = e.ctrlpts, C, E, k, S;
    if (T.length / 2 % 2 === 0) {
      var L = h.length / 2 - 1, B = L + 2, M = B + 2;
      C = /* @__PURE__ */ Ze(h[L], h[B], h[M], 0), E = /* @__PURE__ */ Ze(h[L + 1], h[B + 1], h[M + 1], 0), k = /* @__PURE__ */ Ze(h[L], h[B], h[M], 1e-4), S = /* @__PURE__ */ Ze(h[L + 1], h[B + 1], h[M + 1], 1e-4);
    } else {
      var B = h.length / 2 - 1, L = B - 2, M = B + 2;
      C = /* @__PURE__ */ Ze(h[L], h[B], h[M], 0.4999), E = /* @__PURE__ */ Ze(h[L + 1], h[B + 1], h[M + 1], 0.4999), k = /* @__PURE__ */ Ze(h[L], h[B], h[M], 0.5), S = /* @__PURE__ */ Ze(h[L + 1], h[B + 1], h[M + 1], 0.5);
    }
    l = k - C, u = S - E;
  }
  if (e.midtgtArrowAngle = /* @__PURE__ */ La(l, u), e.midDispX = l, e.midDispY = u, l *= -1, u *= -1, i) {
    var h = e.allpts;
    if (h.length / 2 % 2 !== 0) {
      if (!e.isRound) {
        var w = h.length / 2 - 1, A = w + 2;
        l = -(h[A] - h[w]), u = -(h[A + 1] - h[w + 1]);
      }
    }
  }
  if (e.midsrcArrowAngle = /* @__PURE__ */ La(l, u), i) l = d - e.segpts[e.segpts.length - 2], u = g - e.segpts[e.segpts.length - 1];
  else if (n || s || o || a) {
    var h = e.allpts, P = h.length, m = /* @__PURE__ */ Ze(h[P - 6], h[P - 4], h[P - 2], 0.9), y = /* @__PURE__ */ Ze(h[P - 5], h[P - 3], h[P - 1], 0.9);
    l = d - m, u = g - y;
  } else l = d - p, u = g - b1;
  e.tgtArrowAngle = /* @__PURE__ */ La(l, u);
};
on.getArrowWidth = on.getArrowHeight = function(r10, e) {
  var t = this.arrowWidthCache = this.arrowWidthCache || {}, a = t[r10 + ", " + e];
  return a || (a = Math.max(/* @__PURE__ */ Math.pow(r10 * 13.37, 0.9), 29) * e, t[r10 + ", " + e] = a, a);
};
var Qn, Jn, Rr = {}, br = {}, Ls, As, vt, Za, qr, it, lt, Ar, Dt, qa, uu, lu, _n, jn, Rs, Os = /* @__PURE__ */ m$1(function(e, t, a) {
  a.x = t.x - e.x, a.y = t.y - e.y, a.len = /* @__PURE__ */ Math.sqrt(a.x * a.x + a.y * a.y), a.nx = a.x / a.len, a.ny = a.y / a.len, a.ang = /* @__PURE__ */ Math.atan2(a.ny, a.nx);
}, "asVec"), Cg = /* @__PURE__ */ m$1(function(e, t) {
  t.x = e.x * -1, t.y = e.y * -1, t.nx = e.nx * -1, t.ny = e.ny * -1, t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, "invertVec"), Sg = /* @__PURE__ */ m$1(function(e, t, a, n, i) {
  if (e !== Rs ? Os(t, e, Rr) : Cg(br, Rr), Os(t, a, br), Ls = Rr.nx * br.ny - Rr.ny * br.nx, As = Rr.nx * br.nx - Rr.ny * -br.ny, qr = /* @__PURE__ */ Math.asin(/* @__PURE__ */ Math.max(-1, /* @__PURE__ */ Math.min(1, Ls))), Math.abs(qr) < 1e-6) {
    Qn = t.x, Jn = t.y, lt = Dt = 0;
    return;
  }
  vt = 1, Za = false, As < 0 ? qr < 0 ? qr = Math.PI + qr : (qr = Math.PI - qr, vt = -1, Za = true) : qr > 0 && (vt = -1, Za = true), t.radius !== void 0 ? Dt = t.radius : Dt = n, it = qr / 2, qa = /* @__PURE__ */ Math.min(Rr.len / 2, br.len / 2), i ? (Ar = /* @__PURE__ */ Math.abs(Math.cos(it) * Dt / Math.sin(it)), Ar > qa ? (Ar = qa, lt = /* @__PURE__ */ Math.abs(Ar * Math.sin(it) / Math.cos(it))) : lt = Dt) : (Ar = /* @__PURE__ */ Math.min(qa, Dt), lt = /* @__PURE__ */ Math.abs(Ar * Math.sin(it) / Math.cos(it))), _n = t.x + br.nx * Ar, jn = t.y + br.ny * Ar, Qn = _n - br.ny * lt * vt, Jn = jn + br.nx * lt * vt, uu = t.x + Rr.nx * Ar, lu = t.y + Rr.ny * Ar, Rs = t;
}, "calcCornerArc");
function vu(r10, e) {
  e.radius === 0 ? r10.lineTo(e.cx, e.cy) : r10.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
}
m$1(vu, "drawPreparedRoundCorner");
function Ti(r10, e, t, a) {
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
  } : (Sg(r10, e, t, a, n), {
    cx: Qn,
    cy: Jn,
    radius: lt,
    startX: uu,
    startY: lu,
    stopX: _n,
    stopY: jn,
    startAngle: Rr.ang + Math.PI / 2 * vt,
    endAngle: br.ang - Math.PI / 2 * vt,
    counterClockwise: Za
  });
}
m$1(Ti, "getRoundCorner");
var ur = {};
ur.findMidptPtsEtc = function(r10, e) {
  var t = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = /* @__PURE__ */ r10.pstyle("source-endpoint"), o = /* @__PURE__ */ r10.pstyle("target-endpoint"), l = s.units != null && o.units != null, u = /* @__PURE__ */ m$1(function(T, C, E, k) {
    var S = k - C, L = E - T, B = /* @__PURE__ */ Math.sqrt(L * L + S * S);
    return {
      x: -S / B,
      y: L / B
    };
  }, "recalcVectorNormInverse"), f = r10.pstyle("edge-distances").value;
  switch (f) {
    case "node-position":
      i = t;
      break;
    case "intersection":
      i = a;
      break;
    case "endpoints": {
      if (l) {
        var c = /* @__PURE__ */ this.manualEndptToPx(r10.source()[0], s), d = /* @__PURE__ */ Dr(c, 2), g = d[0], h = d[1], m = /* @__PURE__ */ this.manualEndptToPx(r10.target()[0], o), y = /* @__PURE__ */ Dr(m, 2), p = y[0], b1 = y[1], w = {
          x1: g,
          y1: h,
          x2: p,
          y2: b1
        };
        n = /* @__PURE__ */ u(g, h, p, b1), i = w;
      } else Le(/* @__PURE__ */ "Edge ".concat(/* @__PURE__ */ r10.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
      break;
    }
  }
  return {
    midptPts: i,
    vectorNormInverse: n
  };
};
ur.findHaystackPoints = function(r10) {
  for (var e = 0; e < r10.length; e++) {
    var t = r10[e], a = t._private, n = a.rscratch;
    if (!n.haystack) {
      var i = Math.random() * 2 * Math.PI;
      n.source = {
        x: /* @__PURE__ */ Math.cos(i),
        y: /* @__PURE__ */ Math.sin(i)
      }, i = Math.random() * 2 * Math.PI, n.target = {
        x: /* @__PURE__ */ Math.cos(i),
        y: /* @__PURE__ */ Math.sin(i)
      };
    }
    var s = a.source, o = a.target, l = /* @__PURE__ */ s.position(), u = /* @__PURE__ */ o.position(), f = /* @__PURE__ */ s.width(), c = /* @__PURE__ */ o.width(), d = /* @__PURE__ */ s.height(), g = /* @__PURE__ */ o.height(), h = t.pstyle("haystack-radius").value, m = h / 2;
    n.haystackPts = n.allpts = [
      n.source.x * f * m + l.x,
      n.source.y * d * m + l.y,
      n.target.x * c * m + u.x,
      n.target.y * g * m + u.y
    ], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = true, this.storeEdgeProjections(t), this.calculateArrowAngles(t), this.recalculateEdgeLabelProjections(t), this.calculateLabelAngles(t);
  }
};
ur.findSegmentsPoints = function(r10, e) {
  var t = r10._private.rscratch, a = /* @__PURE__ */ r10.pstyle("segment-weights"), n = /* @__PURE__ */ r10.pstyle("segment-distances"), i = /* @__PURE__ */ r10.pstyle("segment-radii"), s = /* @__PURE__ */ r10.pstyle("radius-type"), o = /* @__PURE__ */ Math.min(a.pfValue.length, n.pfValue.length), l = i.pfValue[i.pfValue.length - 1], u = s.pfValue[s.pfValue.length - 1];
  t.edgeType = "segments", t.segpts = [], t.radii = [], t.isArcRadius = [];
  for (var f = 0; f < o; f++) {
    var c = a.pfValue[f], d = n.pfValue[f], g = 1 - c, h = c, m = /* @__PURE__ */ this.findMidptPtsEtc(r10, e), y = m.midptPts, p = m.vectorNormInverse, b1 = {
      x: y.x1 * g + y.x2 * h,
      y: y.y1 * g + y.y2 * h
    };
    t.segpts.push(b1.x + p.x * d, b1.y + p.y * d), t.radii.push(i.pfValue[f] !== void 0 ? i.pfValue[f] : l), t.isArcRadius.push((s.pfValue[f] !== void 0 ? s.pfValue[f] : u) === "arc-radius");
  }
};
ur.findLoopPoints = function(r10, e, t, a) {
  var n = r10._private.rscratch, i = e.dirCounts, s = e.srcPos, o = /* @__PURE__ */ r10.pstyle("control-point-distances"), l = o ? o.pfValue[0] : void 0, u = r10.pstyle("loop-direction").pfValue, f = r10.pstyle("loop-sweep").pfValue, c = r10.pstyle("control-point-step-size").pfValue;
  n.edgeType = "self";
  var d = t, g = c;
  a && (d = 0, g = l);
  var h = u - Math.PI / 2, m = h - f / 2, y = h + f / 2, p = u + "_" + f;
  d = i[p] === void 0 ? i[p] = 0 : ++i[p], n.ctrlpts = [
    s.x + Math.cos(m) * 1.4 * g * (d / 3 + 1),
    s.y + Math.sin(m) * 1.4 * g * (d / 3 + 1),
    s.x + Math.cos(y) * 1.4 * g * (d / 3 + 1),
    s.y + Math.sin(y) * 1.4 * g * (d / 3 + 1)
  ];
};
ur.findCompoundLoopPoints = function(r10, e, t, a) {
  var n = r10._private.rscratch;
  n.edgeType = "compound";
  var i = e.srcPos, s = e.tgtPos, o = e.srcW, l = e.srcH, u = e.tgtW, f = e.tgtH, c = r10.pstyle("control-point-step-size").pfValue, d = /* @__PURE__ */ r10.pstyle("control-point-distances"), g = d ? d.pfValue[0] : void 0, h = t, m = c;
  a && (h = 0, m = g);
  var y = 50, p = {
    x: i.x - o / 2,
    y: i.y - l / 2
  }, b1 = {
    x: s.x - u / 2,
    y: s.y - f / 2
  }, w = {
    x: /* @__PURE__ */ Math.min(p.x, b1.x),
    y: /* @__PURE__ */ Math.min(p.y, b1.y)
  }, x = 0.5, T = /* @__PURE__ */ Math.max(x, /* @__PURE__ */ Math.log(o * 0.01)), C = /* @__PURE__ */ Math.max(x, /* @__PURE__ */ Math.log(u * 0.01));
  n.ctrlpts = [
    w.x,
    w.y - (1 + Math.pow(y, 1.12) / 100) * m * (h / 3 + 1) * T,
    w.x - (1 + Math.pow(y, 1.12) / 100) * m * (h / 3 + 1) * C,
    w.y
  ];
};
ur.findStraightEdgePoints = function(r10) {
  r10._private.rscratch.edgeType = "straight";
};
ur.findBezierPoints = function(r10, e, t, a, n) {
  var i = r10._private.rscratch, s = r10.pstyle("control-point-step-size").pfValue, o = /* @__PURE__ */ r10.pstyle("control-point-distances"), l = /* @__PURE__ */ r10.pstyle("control-point-weights"), u = o && l ? Math.min(o.value.length, l.value.length) : 1, f = o ? o.pfValue[0] : void 0, c = l.value[0], d = a;
  i.edgeType = d ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var g = 0; g < u; g++) {
    var h = (0.5 - e.eles.length / 2 + t) * s * (n ? -1 : 1), m = void 0, y = /* @__PURE__ */ ho(h);
    d && (f = o ? o.pfValue[g] : s, c = l.value[g]), a ? m = f : m = f !== void 0 ? y * f : void 0;
    var p = m !== void 0 ? m : h, b1 = 1 - c, w = c, x = /* @__PURE__ */ this.findMidptPtsEtc(r10, e), T = x.midptPts, C = x.vectorNormInverse, E = {
      x: T.x1 * b1 + T.x2 * w,
      y: T.y1 * b1 + T.y2 * w
    };
    i.ctrlpts.push(E.x + C.x * p, E.y + C.y * p);
  }
};
ur.findTaxiPoints = function(r10, e) {
  var t = r10._private.rscratch;
  t.edgeType = "segments";
  var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", l = "upward", u = "auto", f = e.posPts, c = e.srcW, d = e.srcH, g = e.tgtW, h = e.tgtH, m = r10.pstyle("edge-distances").value, y = m !== "node-position", p = r10.pstyle("taxi-direction").value, b1 = p, w = /* @__PURE__ */ r10.pstyle("taxi-turn"), x = w.units === "%", T = w.pfValue, C = T < 0, E = r10.pstyle("taxi-turn-min-distance").pfValue, k = y ? (c + g) / 2 : 0, S = y ? (d + h) / 2 : 0, L = f.x2 - f.x1, B = f.y2 - f.y1, M = /* @__PURE__ */ m$1(function(me, be) {
    return me > 0 ? Math.max(me - be, 0) : Math.min(me + be, 0);
  }, "subDWH"), A = /* @__PURE__ */ M(L, k), P = /* @__PURE__ */ M(B, S), I = false;
  b1 === u ? p = Math.abs(A) > Math.abs(P) ? n : a : b1 === l || b1 === o ? (p = a, I = true) : (b1 === i || b1 === s) && (p = n, I = true);
  var R = p === a, O = R ? P : A, z = R ? B : L, $ = /* @__PURE__ */ ho(z), H = false;
  !(I && (x || C)) && (b1 === o && z < 0 || b1 === l && z > 0 || b1 === i && z > 0 || b1 === s && z < 0) && ($ *= -1, O = $ * Math.abs(O), H = true);
  var V;
  if (x) {
    var F = T < 0 ? 1 + T : T;
    V = F * O;
  } else {
    var U = T < 0 ? O : 0;
    V = U + T * $;
  }
  var J = /* @__PURE__ */ m$1(function(me) {
    return Math.abs(me) < E || Math.abs(me) >= Math.abs(O);
  }, "getIsTooClose"), j = /* @__PURE__ */ J(V), ee = /* @__PURE__ */ J(Math.abs(O) - Math.abs(V)), re = j || ee;
  if (re && !H) if (R) {
    var Y = Math.abs(z) <= d / 2, N = Math.abs(L) <= g / 2;
    if (Y) {
      var X = (f.x1 + f.x2) / 2, Z = f.y1, oe = f.y2;
      t.segpts = [
        X,
        Z,
        X,
        oe
      ];
    } else if (N) {
      var ge = (f.y1 + f.y2) / 2, ne = f.x1, se = f.x2;
      t.segpts = [
        ne,
        ge,
        se,
        ge
      ];
    } else t.segpts = [
      f.x1,
      f.y2
    ];
  } else {
    var le = Math.abs(z) <= c / 2, de = Math.abs(B) <= h / 2;
    if (le) {
      var fe = (f.y1 + f.y2) / 2, ye = f.x1, Be = f.x2;
      t.segpts = [
        ye,
        fe,
        Be,
        fe
      ];
    } else if (de) {
      var Ce = (f.x1 + f.x2) / 2, Ee = f.y1, De = f.y2;
      t.segpts = [
        Ce,
        Ee,
        Ce,
        De
      ];
    } else t.segpts = [
      f.x2,
      f.y1
    ];
  }
  else if (R) {
    var _ = f.y1 + V + (y ? d / 2 * $ : 0), D = f.x1, q = f.x2;
    t.segpts = [
      D,
      _,
      q,
      _
    ];
  } else {
    var Q = f.x1 + V + (y ? c / 2 * $ : 0), K = f.y1, G = f.y2;
    t.segpts = [
      Q,
      K,
      Q,
      G
    ];
  }
  if (t.isRound) {
    var ae = r10.pstyle("taxi-radius").value, W = r10.pstyle("radius-type").value[0] === "arc-radius";
    t.radii = /* @__PURE__ */ new Array(t.segpts.length / 2).fill(ae), t.isArcRadius = /* @__PURE__ */ new Array(t.segpts.length / 2).fill(W);
  }
};
ur.tryToCorrectInvalidPoints = function(r10, e) {
  var t = r10._private.rscratch;
  if (t.edgeType === "bezier") {
    var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, l = e.tgtH, u = e.srcShape, f = e.tgtShape, c = e.srcCornerRadius, d = e.tgtCornerRadius, g = e.srcRs, h = e.tgtRs, m = !ie(t.startX) || !ie(t.startY), y = !ie(t.arrowStartX) || !ie(t.arrowStartY), p = !ie(t.endX) || !ie(t.endY), b1 = !ie(t.arrowEndX) || !ie(t.arrowEndY), w = 3, x = this.getArrowWidth(r10.pstyle("width").pfValue, r10.pstyle("arrow-scale").value) * this.arrowShapeWidth, T = w * x, C = /* @__PURE__ */ ht({
      x: t.ctrlpts[0],
      y: t.ctrlpts[1]
    }, {
      x: t.startX,
      y: t.startY
    }), E = C < T, k = /* @__PURE__ */ ht({
      x: t.ctrlpts[0],
      y: t.ctrlpts[1]
    }, {
      x: t.endX,
      y: t.endY
    }), S = k < T, L = false;
    if (m || y || E) {
      L = true;
      var B = {
        x: t.ctrlpts[0] - a.x,
        y: t.ctrlpts[1] - a.y
      }, M = /* @__PURE__ */ Math.sqrt(B.x * B.x + B.y * B.y), A = {
        x: B.x / M,
        y: B.y / M
      }, P = /* @__PURE__ */ Math.max(i, s), I = {
        x: t.ctrlpts[0] + A.x * 2 * P,
        y: t.ctrlpts[1] + A.y * 2 * P
      }, R = /* @__PURE__ */ u.intersectLine(a.x, a.y, i, s, I.x, I.y, 0, c, g);
      E ? (t.ctrlpts[0] = t.ctrlpts[0] + A.x * (T - C), t.ctrlpts[1] = t.ctrlpts[1] + A.y * (T - C)) : (t.ctrlpts[0] = R[0] + A.x * T, t.ctrlpts[1] = R[1] + A.y * T);
    }
    if (p || b1 || S) {
      L = true;
      var O = {
        x: t.ctrlpts[0] - n.x,
        y: t.ctrlpts[1] - n.y
      }, z = /* @__PURE__ */ Math.sqrt(O.x * O.x + O.y * O.y), $ = {
        x: O.x / z,
        y: O.y / z
      }, H = /* @__PURE__ */ Math.max(i, s), V = {
        x: t.ctrlpts[0] + $.x * 2 * H,
        y: t.ctrlpts[1] + $.y * 2 * H
      }, F = /* @__PURE__ */ f.intersectLine(n.x, n.y, o, l, V.x, V.y, 0, d, h);
      S ? (t.ctrlpts[0] = t.ctrlpts[0] + $.x * (T - k), t.ctrlpts[1] = t.ctrlpts[1] + $.y * (T - k)) : (t.ctrlpts[0] = F[0] + $.x * T, t.ctrlpts[1] = F[1] + $.y * T);
    }
    L && this.findEndpoints(r10);
  }
};
ur.storeAllpts = function(r10) {
  var e = r10._private.rscratch;
  if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
    e.allpts = [], e.allpts.push(e.startX, e.startY);
    for (var t = 0; t + 1 < e.ctrlpts.length; t += 2) e.allpts.push(e.ctrlpts[t], e.ctrlpts[t + 1]), t + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[t] + e.ctrlpts[t + 2]) / 2, (e.ctrlpts[t + 1] + e.ctrlpts[t + 3]) / 2);
    e.allpts.push(e.endX, e.endY);
    var a, n;
    e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = /* @__PURE__ */ Ze(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = /* @__PURE__ */ Ze(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
  } else if (e.edgeType === "straight") e.allpts = [
    e.startX,
    e.startY,
    e.endX,
    e.endY
  ], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
  else if (e.edgeType === "segments") {
    if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.isRound) {
      e.roundCorners = [];
      for (var i = 2; i + 3 < e.allpts.length; i += 2) {
        var s = e.radii[i / 2 - 1], o = e.isArcRadius[i / 2 - 1];
        e.roundCorners.push(/* @__PURE__ */ Ti({
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
        g = /* @__PURE__ */ g.map(function(m) {
          return m * h;
        }), e.midX = d.cx + g[0], e.midY = d.cy + g[1], e.midVector = g;
      }
    }
  }
};
ur.checkForInvalidEdgeWarning = function(r10) {
  var e = r10[0]._private.rscratch;
  e.nodesOverlap || ie(e.startX) && ie(e.startY) && ie(e.endX) && ie(e.endY) ? e.loggedErr = false : e.loggedErr || (e.loggedErr = true, Le("Edge `" + r10.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
ur.findEdgeControlPoints = function(r10) {
  var e = this;
  if (!(!r10 || r10.length === 0)) {
    for (var t = this, a = t.cy, n = /* @__PURE__ */ a.hasCompoundNodes(), i = {
      map: new Ir(),
      get: /* @__PURE__ */ m$1(function(E) {
        var k = /* @__PURE__ */ this.map.get(E[0]);
        return k != null ? k.get(E[1]) : null;
      }, "get"),
      set: /* @__PURE__ */ m$1(function(E, k) {
        var S = /* @__PURE__ */ this.map.get(E[0]);
        S == null && (S = new Ir(), this.map.set(E[0], S)), S.set(E[1], k);
      }, "set")
    }, s = [], o = [], l = 0; l < r10.length; l++) {
      var u = r10[l], f = u._private, c = u.pstyle("curve-style").value;
      if (!(u.removed() || !u.takesUpSpace())) {
        if (c === "haystack") {
          o.push(u);
          continue;
        }
        var d = c === "unbundled-bezier" || c.endsWith("segments") || c === "straight" || c === "straight-triangle" || c.endsWith("taxi"), g = c === "unbundled-bezier" || c === "bezier", h = f.source, m = f.target, y = /* @__PURE__ */ h.poolIndex(), p = /* @__PURE__ */ m.poolIndex(), b1 = /* @__PURE__ */ [
          y,
          p
        ].sort(), w = /* @__PURE__ */ i.get(b1);
        w == null && (w = {
          eles: []
        }, i.set(b1, w), s.push(b1)), w.eles.push(u), d && (w.hasUnbundled = true), g && (w.hasBezier = true);
      }
    }
    for (var x = /* @__PURE__ */ m$1(function(E) {
      var k = s[E], S = /* @__PURE__ */ i.get(k), L = void 0;
      if (!S.hasUnbundled) {
        var B = /* @__PURE__ */ S.eles[0].parallelEdges().filter(function(Q) {
          return Q.isBundledBezier();
        });
        vi(S.eles), B.forEach(function(Q) {
          return S.eles.push(Q);
        }), S.eles.sort(function(Q, K) {
          return Q.poolIndex() - K.poolIndex();
        });
      }
      var M = S.eles[0], A = /* @__PURE__ */ M.source(), P = /* @__PURE__ */ M.target();
      if (A.poolIndex() > P.poolIndex()) {
        var I = A;
        A = P, P = I;
      }
      var R = S.srcPos = /* @__PURE__ */ A.position(), O = S.tgtPos = /* @__PURE__ */ P.position(), z = S.srcW = /* @__PURE__ */ A.outerWidth(), $ = S.srcH = /* @__PURE__ */ A.outerHeight(), H = S.tgtW = /* @__PURE__ */ P.outerWidth(), V = S.tgtH = /* @__PURE__ */ P.outerHeight(), F = S.srcShape = t.nodeShapes[e.getNodeShape(A)], U = S.tgtShape = t.nodeShapes[e.getNodeShape(P)], J = S.srcCornerRadius = A.pstyle("corner-radius").value === "auto" ? "auto" : A.pstyle("corner-radius").pfValue, j = S.tgtCornerRadius = P.pstyle("corner-radius").value === "auto" ? "auto" : P.pstyle("corner-radius").pfValue, ee = S.tgtRs = P._private.rscratch, re = S.srcRs = A._private.rscratch;
      S.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var Y = 0; Y < S.eles.length; Y++) {
        var N = S.eles[Y], X = N[0]._private.rscratch, Z = N.pstyle("curve-style").value, oe = Z === "unbundled-bezier" || Z.endsWith("segments") || Z.endsWith("taxi"), ge = !A.same(/* @__PURE__ */ N.source());
        if (!S.calculatedIntersection && A !== P && (S.hasBezier || S.hasUnbundled)) {
          S.calculatedIntersection = true;
          var ne = /* @__PURE__ */ F.intersectLine(R.x, R.y, z, $, O.x, O.y, 0, J, re), se = S.srcIntn = ne, le = /* @__PURE__ */ U.intersectLine(O.x, O.y, H, V, R.x, R.y, 0, j, ee), de = S.tgtIntn = le, fe = S.intersectionPts = {
            x1: ne[0],
            x2: le[0],
            y1: ne[1],
            y2: le[1]
          }, ye = S.posPts = {
            x1: R.x,
            x2: O.x,
            y1: R.y,
            y2: O.y
          }, Be = le[1] - ne[1], Ce = le[0] - ne[0], Ee = /* @__PURE__ */ Math.sqrt(Ce * Ce + Be * Be), De = S.vector = {
            x: Ce,
            y: Be
          }, _ = S.vectorNorm = {
            x: De.x / Ee,
            y: De.y / Ee
          }, D = {
            x: -_.y,
            y: _.x
          };
          S.nodesOverlap = !ie(Ee) || U.checkPoint(ne[0], ne[1], 0, H, V, O.x, O.y, j, ee) || F.checkPoint(le[0], le[1], 0, z, $, R.x, R.y, J, re), S.vectorNormInverse = D, L = {
            nodesOverlap: S.nodesOverlap,
            dirCounts: S.dirCounts,
            calculatedIntersection: true,
            hasBezier: S.hasBezier,
            hasUnbundled: S.hasUnbundled,
            eles: S.eles,
            srcPos: O,
            tgtPos: R,
            srcW: H,
            srcH: V,
            tgtW: z,
            tgtH: $,
            srcIntn: de,
            tgtIntn: se,
            srcShape: U,
            tgtShape: F,
            posPts: {
              x1: ye.x2,
              y1: ye.y2,
              x2: ye.x1,
              y2: ye.y1
            },
            intersectionPts: {
              x1: fe.x2,
              y1: fe.y2,
              x2: fe.x1,
              y2: fe.y1
            },
            vector: {
              x: -De.x,
              y: -De.y
            },
            vectorNorm: {
              x: -_.x,
              y: -_.y
            },
            vectorNormInverse: {
              x: -D.x,
              y: -D.y
            }
          };
        }
        var q = ge ? L : S;
        X.nodesOverlap = q.nodesOverlap, X.srcIntn = q.srcIntn, X.tgtIntn = q.tgtIntn, X.isRound = /* @__PURE__ */ Z.startsWith("round"), n && (A.isParent() || A.isChild() || P.isParent() || P.isChild()) && (A.parents().anySame(P) || P.parents().anySame(A) || A.same(P) && A.isParent()) ? e.findCompoundLoopPoints(N, q, Y, oe) : A === P ? e.findLoopPoints(N, q, Y, oe) : Z.endsWith("segments") ? e.findSegmentsPoints(N, q) : Z.endsWith("taxi") ? e.findTaxiPoints(N, q) : Z === "straight" || !oe && S.eles.length % 2 === 1 && Y === Math.floor(S.eles.length / 2) ? e.findStraightEdgePoints(N) : e.findBezierPoints(N, q, Y, oe, ge), e.findEndpoints(N), e.tryToCorrectInvalidPoints(N, q), e.checkForInvalidEdgeWarning(N), e.storeAllpts(N), e.storeEdgeProjections(N), e.calculateArrowAngles(N), e.recalculateEdgeLabelProjections(N), e.calculateLabelAngles(N);
      }
    }, "_loop"), T = 0; T < s.length; T++) x(T);
    this.findHaystackPoints(o);
  }
};
function fu(r10) {
  var e = [];
  if (r10 != null) {
    for (var t = 0; t < r10.length; t += 2) {
      var a = r10[t], n = r10[t + 1];
      e.push({
        x: a,
        y: n
      });
    }
    return e;
  }
}
m$1(fu, "getPts");
ur.getSegmentPoints = function(r10) {
  var e = r10[0]._private.rscratch, t = e.edgeType;
  if (t === "segments") return this.recalculateRenderedStyle(r10), fu(e.segpts);
};
ur.getControlPoints = function(r10) {
  var e = r10[0]._private.rscratch, t = e.edgeType;
  if (t === "bezier" || t === "multibezier" || t === "self" || t === "compound") return this.recalculateRenderedStyle(r10), fu(e.ctrlpts);
};
ur.getEdgeMidpoint = function(r10) {
  var e = r10[0]._private.rscratch;
  return this.recalculateRenderedStyle(r10), {
    x: e.midX,
    y: e.midY
  };
};
var Da = {};
Da.manualEndptToPx = function(r10, e) {
  var t = this, a = /* @__PURE__ */ r10.position(), n = /* @__PURE__ */ r10.outerWidth(), i = /* @__PURE__ */ r10.outerHeight(), s = r10._private.rscratch;
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
    return t.nodeShapes[this.getNodeShape(r10)].intersectLine(a.x, a.y, n, i, f[0], f[1], 0, r10.pstyle("corner-radius").value === "auto" ? "auto" : r10.pstyle("corner-radius").pfValue, s);
  }
};
Da.findEndpoints = function(r10) {
  var e = this, t, a = r10.source()[0], n = r10.target()[0], i = /* @__PURE__ */ a.position(), s = /* @__PURE__ */ n.position(), o = r10.pstyle("target-arrow-shape").value, l = r10.pstyle("source-arrow-shape").value, u = r10.pstyle("target-distance-from-node").pfValue, f = r10.pstyle("source-distance-from-node").pfValue, c = a._private.rscratch, d = n._private.rscratch, g = r10.pstyle("curve-style").value, h = r10._private.rscratch, m = h.edgeType, y = g === "taxi", p = m === "self" || m === "compound", b1 = m === "bezier" || m === "multibezier" || p, w = m !== "bezier", x = m === "straight" || m === "segments", T = m === "segments", C = b1 || w || x, E = p || y, k = /* @__PURE__ */ r10.pstyle("source-endpoint"), S = E ? "outside-to-node" : k.value, L = a.pstyle("corner-radius").value === "auto" ? "auto" : a.pstyle("corner-radius").pfValue, B = /* @__PURE__ */ r10.pstyle("target-endpoint"), M = E ? "outside-to-node" : B.value, A = n.pstyle("corner-radius").value === "auto" ? "auto" : n.pstyle("corner-radius").pfValue;
  h.srcManEndpt = k, h.tgtManEndpt = B;
  var P, I, R, O;
  if (b1) {
    var z = [
      h.ctrlpts[0],
      h.ctrlpts[1]
    ], $ = w ? [
      h.ctrlpts[h.ctrlpts.length - 2],
      h.ctrlpts[h.ctrlpts.length - 1]
    ] : z;
    P = $, I = z;
  } else if (x) {
    var H = T ? h.segpts.slice(0, 2) : [
      s.x,
      s.y
    ], V = T ? h.segpts.slice(h.segpts.length - 2) : [
      i.x,
      i.y
    ];
    P = V, I = H;
  }
  if (M === "inside-to-node") t = [
    s.x,
    s.y
  ];
  else if (B.units) t = /* @__PURE__ */ this.manualEndptToPx(n, B);
  else if (M === "outside-to-line") t = h.tgtIntn;
  else if (M === "outside-to-node" || M === "outside-to-node-or-label" ? R = P : (M === "outside-to-line" || M === "outside-to-line-or-label") && (R = [
    i.x,
    i.y
  ]), t = /* @__PURE__ */ e.nodeShapes[this.getNodeShape(n)].intersectLine(s.x, s.y, /* @__PURE__ */ n.outerWidth(), /* @__PURE__ */ n.outerHeight(), R[0], R[1], 0, A, d), M === "outside-to-node-or-label" || M === "outside-to-line-or-label") {
    var F = n._private.rscratch, U = F.labelWidth, J = F.labelHeight, j = F.labelX, ee = F.labelY, re = U / 2, Y = J / 2, N = n.pstyle("text-valign").value;
    N === "top" ? ee -= Y : N === "bottom" && (ee += Y);
    var X = n.pstyle("text-halign").value;
    X === "left" ? j -= re : X === "right" && (j += re);
    var Z = /* @__PURE__ */ ha(R[0], R[1], [
      j - re,
      ee - Y,
      j + re,
      ee - Y,
      j + re,
      ee + Y,
      j - re,
      ee + Y
    ], s.x, s.y);
    if (Z.length > 0) {
      var oe = i, ge = /* @__PURE__ */ ot(oe, /* @__PURE__ */ Pt(t)), ne = /* @__PURE__ */ ot(oe, /* @__PURE__ */ Pt(Z)), se = ge;
      if (ne < ge && (t = Z, se = ne), Z.length > 2) {
        var le = /* @__PURE__ */ ot(oe, {
          x: Z[2],
          y: Z[3]
        });
        le < se && (t = [
          Z[2],
          Z[3]
        ]);
      }
    }
  }
  var de = /* @__PURE__ */ Aa(t, P, e.arrowShapes[o].spacing(r10) + u), fe = /* @__PURE__ */ Aa(t, P, e.arrowShapes[o].gap(r10) + u);
  if (h.endX = fe[0], h.endY = fe[1], h.arrowEndX = de[0], h.arrowEndY = de[1], S === "inside-to-node") t = [
    i.x,
    i.y
  ];
  else if (k.units) t = /* @__PURE__ */ this.manualEndptToPx(a, k);
  else if (S === "outside-to-line") t = h.srcIntn;
  else if (S === "outside-to-node" || S === "outside-to-node-or-label" ? O = I : (S === "outside-to-line" || S === "outside-to-line-or-label") && (O = [
    s.x,
    s.y
  ]), t = /* @__PURE__ */ e.nodeShapes[this.getNodeShape(a)].intersectLine(i.x, i.y, /* @__PURE__ */ a.outerWidth(), /* @__PURE__ */ a.outerHeight(), O[0], O[1], 0, L, c), S === "outside-to-node-or-label" || S === "outside-to-line-or-label") {
    var ye = a._private.rscratch, Be = ye.labelWidth, Ce = ye.labelHeight, Ee = ye.labelX, De = ye.labelY, _ = Be / 2, D = Ce / 2, q = a.pstyle("text-valign").value;
    q === "top" ? De -= D : q === "bottom" && (De += D);
    var Q = a.pstyle("text-halign").value;
    Q === "left" ? Ee -= _ : Q === "right" && (Ee += _);
    var K = /* @__PURE__ */ ha(O[0], O[1], [
      Ee - _,
      De - D,
      Ee + _,
      De - D,
      Ee + _,
      De + D,
      Ee - _,
      De + D
    ], i.x, i.y);
    if (K.length > 0) {
      var G = s, ae = /* @__PURE__ */ ot(G, /* @__PURE__ */ Pt(t)), W = /* @__PURE__ */ ot(G, /* @__PURE__ */ Pt(K)), te = ae;
      if (W < ae && (t = [
        K[0],
        K[1]
      ], te = W), K.length > 2) {
        var me = /* @__PURE__ */ ot(G, {
          x: K[2],
          y: K[3]
        });
        me < te && (t = [
          K[2],
          K[3]
        ]);
      }
    }
  }
  var be = /* @__PURE__ */ Aa(t, I, e.arrowShapes[l].spacing(r10) + f), ce = /* @__PURE__ */ Aa(t, I, e.arrowShapes[l].gap(r10) + f);
  h.startX = ce[0], h.startY = ce[1], h.arrowStartX = be[0], h.arrowStartY = be[1], C && (!ie(h.startX) || !ie(h.startY) || !ie(h.endX) || !ie(h.endY) ? h.badLine = true : h.badLine = false);
};
Da.getSourceEndpoint = function(r10) {
  var e = r10[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(r10), e.edgeType) {
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
Da.getTargetEndpoint = function(r10) {
  var e = r10[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(r10), e.edgeType) {
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
var Di = {};
function Tg(r10, e, t) {
  for (var a = /* @__PURE__ */ m$1(function(u, f, c, d) {
    return Ze(u, f, c, d);
  }, "qbezierAt$1"), n = e._private, i = n.rstyle.bezierPts, s = 0; s < r10.bezierProjPcts.length; s++) {
    var o = r10.bezierProjPcts[s];
    i.push({
      x: /* @__PURE__ */ a(t[0], t[2], t[4], o),
      y: /* @__PURE__ */ a(t[1], t[3], t[5], o)
    });
  }
}
m$1(Tg, "pushBezierPts");
Di.storeEdgeProjections = function(r10) {
  var e = r10._private, t = e.rscratch, a = t.edgeType;
  if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
    e.rstyle.bezierPts = [];
    for (var n = 0; n + 5 < t.allpts.length; n += 4) Tg(this, r10, /* @__PURE__ */ t.allpts.slice(n, n + 6));
  } else if (a === "segments") for (var i = e.rstyle.linePts = [], n = 0; n + 1 < t.allpts.length; n += 2) i.push({
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
  e.rstyle.arrowWidth = this.getArrowWidth(r10.pstyle("width").pfValue, r10.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
Di.recalculateEdgeProjections = function(r10) {
  this.findEdgeControlPoints(r10);
};
var Nr = {};
Nr.recalculateNodeLabelProjection = function(r10) {
  var e = r10.pstyle("label").strValue;
  if (!_r(e)) {
    var t, a, n = r10._private, i = /* @__PURE__ */ r10.width(), s = /* @__PURE__ */ r10.height(), o = /* @__PURE__ */ r10.padding(), l = /* @__PURE__ */ r10.position(), u = r10.pstyle("text-halign").strValue, f = r10.pstyle("text-valign").strValue, c = n.rscratch, d = n.rstyle;
    switch (u) {
      case "left":
        t = l.x - i / 2 - o;
        break;
      case "right":
        t = l.x + i / 2 + o;
        break;
      default:
        t = l.x;
    }
    switch (f) {
      case "top":
        a = l.y - s / 2 - o;
        break;
      case "bottom":
        a = l.y + s / 2 + o;
        break;
      default:
        a = l.y;
    }
    c.labelX = t, c.labelY = a, d.labelX = t, d.labelY = a, this.calculateLabelAngles(r10), this.applyLabelDimensions(r10);
  }
};
var cu = /* @__PURE__ */ m$1(function(e, t) {
  var a = /* @__PURE__ */ Math.atan(t / e);
  return e === 0 && a < 0 && (a = a * -1), a;
}, "lineAngleFromDelta"), du = /* @__PURE__ */ m$1(function(e, t) {
  var a = t.x - e.x, n = t.y - e.y;
  return cu(a, n);
}, "lineAngle"), Dg = /* @__PURE__ */ m$1(function(e, t, a, n) {
  var i = /* @__PURE__ */ da(0, n - 1e-3, 1), s = /* @__PURE__ */ da(0, n + 1e-3, 1), o = /* @__PURE__ */ Mt(e, t, a, i), l = /* @__PURE__ */ Mt(e, t, a, s);
  return du(o, l);
}, "bezierAngle");
Nr.recalculateEdgeLabelProjections = function(r10) {
  var e, t = r10._private, a = t.rscratch, n = this, i = {
    mid: r10.pstyle("label").strValue,
    source: r10.pstyle("source-label").strValue,
    target: r10.pstyle("target-label").strValue
  };
  if (i.mid || i.source || i.target) {
    e = {
      x: a.midX,
      y: a.midY
    };
    var s = /* @__PURE__ */ m$1(function(c, d, g) {
      Xr(t.rscratch, c, d, g), Xr(t.rstyle, c, d, g);
    }, "setRs");
    s("labelX", null, e.x), s("labelY", null, e.y);
    var o = /* @__PURE__ */ cu(a.midDispX, a.midDispY);
    s("labelAutoAngle", null, o);
    var l = /* @__PURE__ */ m$1(function f() {
      if (f.cache) return f.cache;
      for (var c = [], d = 0; d + 5 < a.allpts.length; d += 4) {
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
      var y = t.rstyle.bezierPts, p = n.bezierProjPcts.length;
      function b1(E, k, S, L, B) {
        var M = /* @__PURE__ */ ht(k, S), A = E.segments[E.segments.length - 1], P = {
          p0: k,
          p1: S,
          t0: L,
          t1: B,
          startDist: A ? A.startDist + A.length : 0,
          length: M
        };
        E.segments.push(P), E.length += M;
      }
      m$1(b1, "addSegment");
      for (var w = 0; w < c.length; w++) {
        var x = c[w], T = c[w - 1];
        T && (x.startDist = T.startDist + T.length), b1(x, x.p0, y[w * p], 0, n.bezierProjPcts[0]);
        for (var C = 0; C < p - 1; C++) b1(x, y[w * p + C], y[w * p + C + 1], n.bezierProjPcts[C], n.bezierProjPcts[C + 1]);
        b1(x, y[w * p + p - 1], x.p2, n.bezierProjPcts[p - 1], 1);
      }
      return f.cache = c;
    }, "createControlPointInfo"), u = /* @__PURE__ */ m$1(function(c) {
      var d, g = c === "source";
      if (i[c]) {
        var h = r10.pstyle(c + "-text-offset").pfValue;
        switch (a.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var m = /* @__PURE__ */ l(), y, p = 0, b1 = 0, w = 0; w < m.length; w++) {
              for (var x = m[g ? w : m.length - 1 - w], T = 0; T < x.segments.length; T++) {
                var C = x.segments[g ? T : x.segments.length - 1 - T], E = w === m.length - 1 && T === x.segments.length - 1;
                if (p = b1, b1 += C.length, b1 >= h || E) {
                  y = {
                    cp: x,
                    segment: C
                  };
                  break;
                }
              }
              if (y) break;
            }
            var k = y.cp, S = y.segment, L = (h - p) / S.length, B = S.t1 - S.t0, M = g ? S.t0 + B * L : S.t1 - B * L;
            M = /* @__PURE__ */ da(0, M, 1), e = /* @__PURE__ */ Mt(k.p0, k.p1, k.p2, M), d = /* @__PURE__ */ Dg(k.p0, k.p1, k.p2, M);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var A = 0, P, I, R, O, z = a.allpts.length, $ = 0; $ + 3 < z && (g ? (R = {
              x: a.allpts[$],
              y: a.allpts[$ + 1]
            }, O = {
              x: a.allpts[$ + 2],
              y: a.allpts[$ + 3]
            }) : (R = {
              x: a.allpts[z - 2 - $],
              y: a.allpts[z - 1 - $]
            }, O = {
              x: a.allpts[z - 4 - $],
              y: a.allpts[z - 3 - $]
            }), P = /* @__PURE__ */ ht(R, O), I = A, A += P, !(A >= h)); $ += 2) ;
            var H = h - I, V = H / P;
            V = /* @__PURE__ */ da(0, V, 1), e = /* @__PURE__ */ Mv(R, O, V), d = /* @__PURE__ */ du(R, O);
            break;
          }
        }
        s("labelX", c, e.x), s("labelY", c, e.y), s("labelAutoAngle", c, d);
      }
    }, "calculateEndProjection");
    u("source"), u("target"), this.applyLabelDimensions(r10);
  }
};
Nr.applyLabelDimensions = function(r10) {
  this.applyPrefixedLabelDimensions(r10), r10.isEdge() && (this.applyPrefixedLabelDimensions(r10, "source"), this.applyPrefixedLabelDimensions(r10, "target"));
};
Nr.applyPrefixedLabelDimensions = function(r10, e) {
  var t = r10._private, a = /* @__PURE__ */ this.getLabelText(r10, e), n = /* @__PURE__ */ this.calculateLabelDimensions(r10, a), i = r10.pstyle("line-height").pfValue, s = r10.pstyle("text-wrap").strValue, o = Pr(t.rscratch, "labelWrapCachedLines", e) || [], l = s !== "wrap" ? 1 : Math.max(o.length, 1), u = n.height / l, f = u * i, c = n.width, d = n.height + (l - 1) * (i - 1) * u;
  Xr(t.rstyle, "labelWidth", e, c), Xr(t.rscratch, "labelWidth", e, c), Xr(t.rstyle, "labelHeight", e, d), Xr(t.rscratch, "labelHeight", e, d), Xr(t.rscratch, "labelLineHeight", e, f);
};
Nr.getLabelText = function(r10, e) {
  var t = r10._private, a = e ? e + "-" : "", n = r10.pstyle(a + "label").strValue, i = r10.pstyle("text-transform").value, s = /* @__PURE__ */ m$1(function(U, J) {
    return J ? (Xr(t.rscratch, U, e, J), J) : Pr(t.rscratch, U, e);
  }, "rscratch");
  if (!n) return "";
  i == "none" || (i == "uppercase" ? n = /* @__PURE__ */ n.toUpperCase() : i == "lowercase" && (n = /* @__PURE__ */ n.toLowerCase()));
  var o = r10.pstyle("text-wrap").value;
  if (o === "wrap") {
    var l = /* @__PURE__ */ s("labelKey");
    if (l != null && s("labelWrapKey") === l) return s("labelWrapCachedText");
    for (var u = "​", f = /* @__PURE__ */ n.split(`
`), c = r10.pstyle("text-max-width").pfValue, d = r10.pstyle("text-overflow-wrap").value, g = d === "anywhere", h = [], m = /[\s\u200b]+|$/g, y = 0; y < f.length; y++) {
      var p = f[y], b1 = /* @__PURE__ */ this.calculateLabelDimensions(r10, p), w = b1.width;
      if (g) {
        var x = /* @__PURE__ */ p.split("").join(u);
        p = x;
      }
      if (w > c) {
        var T = /* @__PURE__ */ p.matchAll(m), C = "", E = 0, k = /* @__PURE__ */ Xs(T), S;
        try {
          for (k.s(); !(S = /* @__PURE__ */ k.n()).done; ) {
            var L = S.value, B = L[0], M = /* @__PURE__ */ p.substring(E, L.index);
            E = L.index + B.length;
            var A = C.length === 0 ? M : C + M + B, P = /* @__PURE__ */ this.calculateLabelDimensions(r10, A), I = P.width;
            I <= c ? C += M + B : (C && h.push(C), C = M + B);
          }
        } catch (F) {
          k.e(F);
        } finally {
          k.f();
        }
        C.match(/^[\s\u200b]+$/) || h.push(C);
      } else h.push(p);
    }
    s("labelWrapCachedLines", h), n = /* @__PURE__ */ s("labelWrapCachedText", /* @__PURE__ */ h.join(`
`)), s("labelWrapKey", l);
  } else if (o === "ellipsis") {
    var R = r10.pstyle("text-max-width").pfValue, O = "", z = "…", $ = false;
    if (this.calculateLabelDimensions(r10, n).width < R) return n;
    for (var H = 0; H < n.length; H++) {
      var V = this.calculateLabelDimensions(r10, O + n[H] + z).width;
      if (V > R) break;
      O += n[H], H === n.length - 1 && ($ = true);
    }
    return $ || (O += z), O;
  }
  return n;
};
Nr.getLabelJustification = function(r10) {
  var e = r10.pstyle("text-justification").strValue, t = r10.pstyle("text-halign").strValue;
  if (e === "auto") if (r10.isNode()) switch (t) {
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
Nr.calculateLabelDimensions = function(r10, e) {
  var t = this, a = /* @__PURE__ */ t.cy.window(), n = a.document, i = /* @__PURE__ */ dt(e, r10._private.labelDimsKey), s = t.labelDimCache || (t.labelDimCache = []), o = s[i];
  if (o != null) return o;
  var l = 0, u = r10.pstyle("font-style").strValue, f = r10.pstyle("font-size").pfValue, c = r10.pstyle("font-family").strValue, d = r10.pstyle("font-weight").strValue, g = this.labelCalcCanvas, h = this.labelCalcCanvasContext;
  if (!g) {
    g = this.labelCalcCanvas = /* @__PURE__ */ n.createElement("canvas"), h = this.labelCalcCanvasContext = /* @__PURE__ */ g.getContext("2d");
    var m = g.style;
    m.position = "absolute", m.left = "-9999px", m.top = "-9999px", m.zIndex = "-1", m.visibility = "hidden", m.pointerEvents = "none";
  }
  h.font = /* @__PURE__ */ "".concat(u, " ").concat(d, " ").concat(f, "px ").concat(c);
  for (var y = 0, p = 0, b1 = /* @__PURE__ */ e.split(`
`), w = 0; w < b1.length; w++) {
    var x = b1[w], T = /* @__PURE__ */ h.measureText(x), C = /* @__PURE__ */ Math.ceil(T.width), E = f;
    y = /* @__PURE__ */ Math.max(C, y), p += E;
  }
  return y += l, p += l, s[i] = {
    width: y,
    height: p
  };
};
Nr.calculateLabelAngle = function(r10, e) {
  var t = r10._private, a = t.rscratch, n = /* @__PURE__ */ r10.isEdge(), i = e ? e + "-" : "", s = /* @__PURE__ */ r10.pstyle(i + "text-rotation"), o = s.strValue;
  return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
};
Nr.calculateLabelAngles = function(r10) {
  var e = this, t = /* @__PURE__ */ r10.isEdge(), a = r10._private, n = a.rscratch;
  n.labelAngle = /* @__PURE__ */ e.calculateLabelAngle(r10), t && (n.sourceLabelAngle = /* @__PURE__ */ e.calculateLabelAngle(r10, "source"), n.targetLabelAngle = /* @__PURE__ */ e.calculateLabelAngle(r10, "target"));
};
var hu = {}, Is = 28, zs = false;
hu.getNodeShape = function(r10) {
  var e = this, t = r10.pstyle("shape").value;
  if (t === "cutrectangle" && (r10.width() < Is || r10.height() < Is)) return zs || (Le("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), zs = true), "rectangle";
  if (r10.isParent()) return t === "rectangle" || t === "roundrectangle" || t === "round-rectangle" || t === "cutrectangle" || t === "cut-rectangle" || t === "barrel" ? t : "rectangle";
  if (t === "polygon") {
    var a = r10.pstyle("shape-polygon-points").value;
    return e.nodeShapes.makePolygon(a).name;
  }
  return t;
};
var Tn = {};
Tn.registerCalculationListeners = function() {
  var r10 = this.cy, e = /* @__PURE__ */ r10.collection(), t = this, a = /* @__PURE__ */ m$1(function(s) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (e.merge(s), o) for (var l = 0; l < s.length; l++) {
      var u = s[l], f = u._private, c = f.rstyle;
      c.clean = false, c.cleanConnected = false;
    }
  }, "enqueue");
  t.binder(r10).on("bounds.* dirty.*", /* @__PURE__ */ m$1(function(s) {
    var o = s.target;
    a(o);
  }, "onDirtyBounds")).on("style.* background.*", /* @__PURE__ */ m$1(function(s) {
    var o = s.target;
    a(o, false);
  }, "onDirtyStyle"));
  var n = /* @__PURE__ */ m$1(function(s) {
    if (s) {
      var o = t.onUpdateEleCalcsFns;
      e.cleanStyle();
      for (var l = 0; l < e.length; l++) {
        var u = e[l], f = u._private.rstyle;
        u.isNode() && !f.cleanConnected && (a(/* @__PURE__ */ u.connectedEdges()), f.cleanConnected = true);
      }
      if (o) for (var c = 0; c < o.length; c++) {
        var d = o[c];
        d(s, e);
      }
      t.recalculateRenderedStyle(e), e = /* @__PURE__ */ r10.collection();
    }
  }, "updateEleCalcs");
  t.flushRenderedStyleQueue = function() {
    n(true);
  }, t.beforeRender(n, t.beforeRenderPriorities.eleCalcs);
};
Tn.onUpdateEleCalcs = function(r10) {
  var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  e.push(r10);
};
Tn.recalculateRenderedStyle = function(r10, e) {
  var t = /* @__PURE__ */ m$1(function(x) {
    return x._private.rstyle.cleanConnected;
  }, "isCleanConnected"), a = [], n = [];
  if (!this.destroyed) {
    e === void 0 && (e = true);
    for (var i = 0; i < r10.length; i++) {
      var s = r10[i], o = s._private, l = o.rstyle;
      s.isEdge() && (!t(/* @__PURE__ */ s.source()) || !t(/* @__PURE__ */ s.target())) && (l.clean = false), !(e && l.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? n.push(s) : a.push(s), l.clean = true);
    }
    for (var u = 0; u < n.length; u++) {
      var f = n[u], c = f._private, d = c.rstyle, g = /* @__PURE__ */ f.position();
      this.recalculateNodeLabelProjection(f), d.nodeX = g.x, d.nodeY = g.y, d.nodeW = f.pstyle("width").pfValue, d.nodeH = f.pstyle("height").pfValue;
    }
    this.recalculateEdgeProjections(a);
    for (var h = 0; h < a.length; h++) {
      var m = a[h], y = m._private, p = y.rstyle, b1 = y.rscratch;
      p.srcX = b1.arrowStartX, p.srcY = b1.arrowStartY, p.tgtX = b1.arrowEndX, p.tgtY = b1.arrowEndY, p.midX = b1.midX, p.midY = b1.midY, p.labelAngle = b1.labelAngle, p.sourceLabelAngle = b1.sourceLabelAngle, p.targetLabelAngle = b1.targetLabelAngle;
    }
  }
};
var Dn = {};
Dn.updateCachedGrabbedEles = function() {
  var r10 = this.cachedZSortedEles;
  if (r10) {
    r10.drag = [], r10.nondrag = [];
    for (var e = [], t = 0; t < r10.length; t++) {
      var a = r10[t], n = a._private.rscratch;
      a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? r10.drag.push(a) : r10.nondrag.push(a);
    }
    for (var t = 0; t < e.length; t++) {
      var a = e[t];
      r10.drag.push(a);
    }
  }
};
Dn.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
Dn.getCachedZSortedEles = function(r10) {
  if (r10 || !this.cachedZSortedEles) {
    var e = /* @__PURE__ */ this.cy.mutableElements().toArray();
    e.sort(Jo), e.interactive = /* @__PURE__ */ e.filter(function(t) {
      return t.interactive();
    }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
  } else e = this.cachedZSortedEles;
  return e;
};
var gu = {};
[
  bt,
  on,
  ur,
  Da,
  Di,
  Nr,
  hu,
  Tn,
  Dn
].forEach(function(r10) {
  we(gu, r10);
});
var pu = {};
pu.getCachedImage = function(r10, e, t) {
  var a = this, n = a.imageCache = a.imageCache || {}, i = n[r10];
  if (i) return i.image.complete || i.image.addEventListener("load", t), i.image;
  i = n[r10] = n[r10] || {};
  var s = i.image = new Image();
  s.addEventListener("load", t), s.addEventListener("error", function() {
    s.error = true;
  });
  var o = "data:", l = r10.substring(0, o.length).toLowerCase() === o;
  return l || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = r10, s;
};
var Ut = {};
Ut.registerBinding = function(r10, e, t, a) {
  var n = /* @__PURE__ */ Array.prototype.slice.apply(arguments, [
    1
  ]), i = /* @__PURE__ */ this.binder(r10);
  return i.on.apply(i, n);
};
Ut.binder = function(r10) {
  var e = this, t = /* @__PURE__ */ e.cy.window(), a = r10 === t || r10 === t.document || r10 === t.document.body || Qu(r10);
  if (e.supportsPassiveEvents == null) {
    var n = false;
    try {
      var i = /* @__PURE__ */ Object.defineProperty({}, "passive", {
        get: /* @__PURE__ */ m$1(function() {
          return n = true, true;
        }, "get")
      });
      t.addEventListener("test", null, i);
    } catch {
    }
    e.supportsPassiveEvents = n;
  }
  var s = /* @__PURE__ */ m$1(function(l, u, f) {
    var c = /* @__PURE__ */ Array.prototype.slice.call(arguments);
    return a && e.supportsPassiveEvents && (c[2] = {
      capture: f ?? false,
      passive: false,
      once: false
    }), e.bindings.push({
      target: r10,
      args: c
    }), (r10.addEventListener || r10.on).apply(r10, c), this;
  }, "on");
  return {
    on: s,
    addEventListener: s,
    addListener: s,
    bind: s
  };
};
Ut.nodeIsDraggable = function(r10) {
  return r10 && r10.isNode() && !r10.locked() && r10.grabbable();
};
Ut.nodeIsGrabbable = function(r10) {
  return this.nodeIsDraggable(r10) && r10.interactive();
};
Ut.load = function() {
  var r10 = this, e = /* @__PURE__ */ r10.cy.window(), t = /* @__PURE__ */ m$1(function(D) {
    return D.selected();
  }, "isSelected"), a = /* @__PURE__ */ m$1(function(D, q, Q, K) {
    D == null && (D = r10.cy);
    for (var G = 0; G < q.length; G++) {
      var ae = q[G];
      D.emit({
        originalEvent: Q,
        type: ae,
        position: K
      });
    }
  }, "triggerEvents"), n = /* @__PURE__ */ m$1(function(D) {
    return D.shiftKey || D.metaKey || D.ctrlKey;
  }, "isMultSelKeyDown"), i = /* @__PURE__ */ m$1(function(D, q) {
    var Q = true;
    if (r10.cy.hasCompoundNodes() && D && D.pannable()) for (var K = 0; q && K < q.length; K++) {
      var D = q[K];
      if (D.isNode() && D.isParent() && !D.pannable()) {
        Q = false;
        break;
      }
    }
    else Q = true;
    return Q;
  }, "allowPanningPassthrough"), s = /* @__PURE__ */ m$1(function(D) {
    D[0]._private.grabbed = true;
  }, "setGrabbed"), o = /* @__PURE__ */ m$1(function(D) {
    D[0]._private.grabbed = false;
  }, "setFreed"), l = /* @__PURE__ */ m$1(function(D) {
    D[0]._private.rscratch.inDragLayer = true;
  }, "setInDragLayer"), u = /* @__PURE__ */ m$1(function(D) {
    D[0]._private.rscratch.inDragLayer = false;
  }, "setOutDragLayer"), f = /* @__PURE__ */ m$1(function(D) {
    D[0]._private.rscratch.isGrabTarget = true;
  }, "setGrabTarget"), c = /* @__PURE__ */ m$1(function(D) {
    D[0]._private.rscratch.isGrabTarget = false;
  }, "removeGrabTarget"), d = /* @__PURE__ */ m$1(function(D, q) {
    var Q = q.addToList, K = /* @__PURE__ */ Q.has(D);
    !K && D.grabbable() && !D.locked() && (Q.merge(D), s(D));
  }, "addToDragList"), g = /* @__PURE__ */ m$1(function(D, q) {
    if (D.cy().hasCompoundNodes() && !(q.inDragLayer == null && q.addToList == null)) {
      var Q = /* @__PURE__ */ D.descendants();
      q.inDragLayer && (Q.forEach(l), Q.connectedEdges().forEach(l)), q.addToList && d(Q, q);
    }
  }, "addDescendantsToDrag"), h = /* @__PURE__ */ m$1(function(D, q) {
    q = q || {};
    var Q = /* @__PURE__ */ D.cy().hasCompoundNodes();
    q.inDragLayer && (D.forEach(l), D.neighborhood().stdFilter(function(K) {
      return !Q || K.isEdge();
    }).forEach(l)), q.addToList && D.forEach(function(K) {
      d(K, q);
    }), g(D, q), p(D, {
      inDragLayer: q.inDragLayer
    }), r10.updateCachedGrabbedEles();
  }, "addNodesToDrag"), m = h, y = /* @__PURE__ */ m$1(function(D) {
    D && (r10.getCachedZSortedEles().forEach(function(q) {
      o(q), u(q), c(q);
    }), r10.updateCachedGrabbedEles());
  }, "freeDraggedElements"), p = /* @__PURE__ */ m$1(function(D, q) {
    if (!(q.inDragLayer == null && q.addToList == null) && D.cy().hasCompoundNodes()) {
      var Q = /* @__PURE__ */ D.ancestors().orphans();
      if (!Q.same(D)) {
        var K = /* @__PURE__ */ Q.descendants().spawnSelf().merge(Q).unmerge(D).unmerge(/* @__PURE__ */ D.descendants()), G = /* @__PURE__ */ K.connectedEdges();
        q.inDragLayer && (G.forEach(l), K.forEach(l)), q.addToList && K.forEach(function(ae) {
          d(ae, q);
        });
      }
    }
  }, "updateAncestorsInDragLayer"), b1 = /* @__PURE__ */ m$1(function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, "blurActiveDomElement"), w = typeof MutationObserver < "u", x = typeof ResizeObserver < "u";
  w ? (r10.removeObserver = new MutationObserver(function(_) {
    for (var D = 0; D < _.length; D++) {
      var q = _[D], Q = q.removedNodes;
      if (Q) for (var K = 0; K < Q.length; K++) {
        var G = Q[K];
        if (G === r10.container) {
          r10.destroy();
          break;
        }
      }
    }
  }), r10.container.parentNode && r10.removeObserver.observe(r10.container.parentNode, {
    childList: true
  })) : r10.registerBinding(r10.container, "DOMNodeRemoved", function(_) {
    r10.destroy();
  });
  var T = /* @__PURE__ */ fn(function() {
    r10.cy.resize();
  }, 100);
  w && (r10.styleObserver = new MutationObserver(T), r10.styleObserver.observe(r10.container, {
    attributes: true
  })), r10.registerBinding(e, "resize", T), x && (r10.resizeObserver = new ResizeObserver(T), r10.resizeObserver.observe(r10.container));
  var C = /* @__PURE__ */ m$1(function(D, q) {
    for (; D != null; ) q(D), D = D.parentNode;
  }, "forEachUp"), E = /* @__PURE__ */ m$1(function() {
    r10.invalidateContainerClientCoordsCache();
  }, "invalidateCoords");
  C(r10.container, function(_) {
    r10.registerBinding(_, "transitionend", E), r10.registerBinding(_, "animationend", E), r10.registerBinding(_, "scroll", E);
  }), r10.registerBinding(r10.container, "contextmenu", function(_) {
    _.preventDefault();
  });
  var k = /* @__PURE__ */ m$1(function() {
    return r10.selection[4] !== 0;
  }, "inBoxSelection"), S = /* @__PURE__ */ m$1(function(D) {
    for (var q = /* @__PURE__ */ r10.findContainerClientCoords(), Q = q[0], K = q[1], G = q[2], ae = q[3], W = D.touches ? D.touches : [
      D
    ], te = false, me = 0; me < W.length; me++) {
      var be = W[me];
      if (Q <= be.clientX && be.clientX <= Q + G && K <= be.clientY && be.clientY <= K + ae) {
        te = true;
        break;
      }
    }
    if (!te) return false;
    for (var ce = r10.container, xe = D.target, ve = xe.parentNode, pe = false; ve; ) {
      if (ve === ce) {
        pe = true;
        break;
      }
      ve = ve.parentNode;
    }
    return !!pe;
  }, "eventInContainer");
  r10.registerBinding(r10.container, "mousedown", /* @__PURE__ */ m$1(function(D) {
    if (S(D) && !(r10.hoverData.which === 1 && D.which !== 1)) {
      D.preventDefault(), b1(), r10.hoverData.capture = true, r10.hoverData.which = D.which;
      var q = r10.cy, Q = [
        D.clientX,
        D.clientY
      ], K = /* @__PURE__ */ r10.projectIntoViewport(Q[0], Q[1]), G = r10.selection, ae = /* @__PURE__ */ r10.findNearestElements(K[0], K[1], true, false), W = ae[0], te = r10.dragData.possibleDragElements;
      r10.hoverData.mdownPos = K, r10.hoverData.mdownGPos = Q;
      var me = /* @__PURE__ */ m$1(function() {
        r10.hoverData.tapholdCancelled = false, clearTimeout(r10.hoverData.tapholdTimeout), r10.hoverData.tapholdTimeout = /* @__PURE__ */ setTimeout(function() {
          if (!r10.hoverData.tapholdCancelled) {
            var Fe = r10.hoverData.down;
            Fe ? Fe.emit({
              originalEvent: D,
              type: "taphold",
              position: {
                x: K[0],
                y: K[1]
              }
            }) : q.emit({
              originalEvent: D,
              type: "taphold",
              position: {
                x: K[0],
                y: K[1]
              }
            });
          }
        }, r10.tapholdDuration);
      }, "checkForTaphold");
      if (D.which == 3) {
        r10.hoverData.cxtStarted = true;
        var be = {
          originalEvent: D,
          type: "cxttapstart",
          position: {
            x: K[0],
            y: K[1]
          }
        };
        W ? (W.activate(), W.emit(be), r10.hoverData.down = W) : q.emit(be), r10.hoverData.downTime = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), r10.hoverData.cxtDragged = false;
      } else if (D.which == 1) {
        W && W.activate();
        {
          if (W != null && r10.nodeIsGrabbable(W)) {
            var ce = /* @__PURE__ */ m$1(function(Fe) {
              return {
                originalEvent: D,
                type: Fe,
                position: {
                  x: K[0],
                  y: K[1]
                }
              };
            }, "makeEvent"), xe = /* @__PURE__ */ m$1(function(Fe) {
              Fe.emit(/* @__PURE__ */ ce("grab"));
            }, "triggerGrab");
            if (f(W), !W.selected()) te = r10.dragData.possibleDragElements = /* @__PURE__ */ q.collection(), m(W, {
              addToList: te
            }), W.emit(/* @__PURE__ */ ce("grabon")).emit(/* @__PURE__ */ ce("grab"));
            else {
              te = r10.dragData.possibleDragElements = /* @__PURE__ */ q.collection();
              var ve = /* @__PURE__ */ q.$(function(pe) {
                return pe.isNode() && pe.selected() && r10.nodeIsGrabbable(pe);
              });
              h(ve, {
                addToList: te
              }), W.emit(/* @__PURE__ */ ce("grabon")), ve.forEach(xe);
            }
            r10.redrawHint("eles", true), r10.redrawHint("drag", true);
          }
          r10.hoverData.down = W, r10.hoverData.downs = ae, r10.hoverData.downTime = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime();
        }
        a(W, [
          "mousedown",
          "tapstart",
          "vmousedown"
        ], D, {
          x: K[0],
          y: K[1]
        }), W == null ? (G[4] = 1, r10.data.bgActivePosistion = {
          x: K[0],
          y: K[1]
        }, r10.redrawHint("select", true), r10.redraw()) : W.pannable() && (G[4] = 1), me();
      }
      G[0] = G[2] = K[0], G[1] = G[3] = K[1];
    }
  }, "mousedownHandler"), false), r10.registerBinding(e, "mousemove", /* @__PURE__ */ m$1(function(D) {
    var q = r10.hoverData.capture;
    if (!(!q && !S(D))) {
      var Q = false, K = r10.cy, G = /* @__PURE__ */ K.zoom(), ae = [
        D.clientX,
        D.clientY
      ], W = /* @__PURE__ */ r10.projectIntoViewport(ae[0], ae[1]), te = r10.hoverData.mdownPos, me = r10.hoverData.mdownGPos, be = r10.selection, ce = null;
      !r10.hoverData.draggingEles && !r10.hoverData.dragging && !r10.hoverData.selecting && (ce = /* @__PURE__ */ r10.findNearestElement(W[0], W[1], true, false));
      var xe = r10.hoverData.last, ve = r10.hoverData.down, pe = [
        W[0] - be[2],
        W[1] - be[3]
      ], Fe = r10.dragData.possibleDragElements, Re;
      if (me) {
        var lr = ae[0] - me[0], Qe = lr * lr, He = ae[1] - me[1], cr = He * He, Je = Qe + cr;
        r10.hoverData.isOverThresholdDrag = Re = Je >= r10.desktopTapThreshold2;
      }
      var vr = /* @__PURE__ */ n(D);
      Re && (r10.hoverData.tapholdCancelled = true);
      var Er = /* @__PURE__ */ m$1(function() {
        var Lr = r10.hoverData.dragDelta = r10.hoverData.dragDelta || [];
        Lr.length === 0 ? (Lr.push(pe[0]), Lr.push(pe[1])) : (Lr[0] += pe[0], Lr[1] += pe[1]);
      }, "updateDragDelta");
      Q = true, a(ce, [
        "mousemove",
        "vmousemove",
        "tapdrag"
      ], D, {
        x: W[0],
        y: W[1]
      });
      var mr = /* @__PURE__ */ m$1(function() {
        r10.data.bgActivePosistion = void 0, r10.hoverData.selecting || K.emit({
          originalEvent: D,
          type: "boxstart",
          position: {
            x: W[0],
            y: W[1]
          }
        }), be[4] = 1, r10.hoverData.selecting = true, r10.redrawHint("select", true), r10.redraw();
      }, "goIntoBoxMode");
      if (r10.hoverData.which === 3) {
        if (Re) {
          var dr = {
            originalEvent: D,
            type: "cxtdrag",
            position: {
              x: W[0],
              y: W[1]
            }
          };
          ve ? ve.emit(dr) : K.emit(dr), r10.hoverData.cxtDragged = true, (!r10.hoverData.cxtOver || ce !== r10.hoverData.cxtOver) && (r10.hoverData.cxtOver && r10.hoverData.cxtOver.emit({
            originalEvent: D,
            type: "cxtdragout",
            position: {
              x: W[0],
              y: W[1]
            }
          }), r10.hoverData.cxtOver = ce, ce && ce.emit({
            originalEvent: D,
            type: "cxtdragover",
            position: {
              x: W[0],
              y: W[1]
            }
          }));
        }
      } else if (r10.hoverData.dragging) {
        if (Q = true, K.panningEnabled() && K.userPanningEnabled()) {
          var Mr;
          if (r10.hoverData.justStartedPan) {
            var Vr = r10.hoverData.mdownPos;
            Mr = {
              x: (W[0] - Vr[0]) * G,
              y: (W[1] - Vr[1]) * G
            }, r10.hoverData.justStartedPan = false;
          } else Mr = {
            x: pe[0] * G,
            y: pe[1] * G
          };
          K.panBy(Mr), K.emit("dragpan"), r10.hoverData.dragged = true;
        }
        W = /* @__PURE__ */ r10.projectIntoViewport(D.clientX, D.clientY);
      } else if (be[4] == 1 && (ve == null || ve.pannable())) {
        if (Re) {
          if (!r10.hoverData.dragging && K.boxSelectionEnabled() && (vr || !K.panningEnabled() || !K.userPanningEnabled())) mr();
          else if (!r10.hoverData.selecting && K.panningEnabled() && K.userPanningEnabled()) {
            var Cr = /* @__PURE__ */ i(ve, r10.hoverData.downs);
            Cr && (r10.hoverData.dragging = true, r10.hoverData.justStartedPan = true, be[4] = 0, r10.data.bgActivePosistion = /* @__PURE__ */ Pt(te), r10.redrawHint("select", true), r10.redraw());
          }
          ve && ve.pannable() && ve.active() && ve.unactivate();
        }
      } else {
        if (ve && ve.pannable() && ve.active() && ve.unactivate(), (!ve || !ve.grabbed()) && ce != xe && (xe && a(xe, [
          "mouseout",
          "tapdragout"
        ], D, {
          x: W[0],
          y: W[1]
        }), ce && a(ce, [
          "mouseover",
          "tapdragover"
        ], D, {
          x: W[0],
          y: W[1]
        }), r10.hoverData.last = ce), ve) if (Re) {
          if (K.boxSelectionEnabled() && vr) ve && ve.grabbed() && (y(Fe), ve.emit("freeon"), Fe.emit("free"), r10.dragData.didDrag && (ve.emit("dragfreeon"), Fe.emit("dragfree"))), mr();
          else if (ve && ve.grabbed() && r10.nodeIsDraggable(ve)) {
            var Ge = !r10.dragData.didDrag;
            Ge && r10.redrawHint("eles", true), r10.dragData.didDrag = true, r10.hoverData.draggingEles || h(Fe, {
              inDragLayer: true
            });
            var Xe = {
              x: 0,
              y: 0
            };
            if (ie(pe[0]) && ie(pe[1]) && (Xe.x += pe[0], Xe.y += pe[1], Ge)) {
              var ar = r10.hoverData.dragDelta;
              ar && ie(ar[0]) && ie(ar[1]) && (Xe.x += ar[0], Xe.y += ar[1]);
            }
            r10.hoverData.draggingEles = true, Fe.silentShift(Xe).emit("position drag"), r10.redrawHint("drag", true), r10.redraw();
          }
        } else Er();
        Q = true;
      }
      if (be[2] = W[0], be[3] = W[1], Q) return D.stopPropagation && D.stopPropagation(), D.preventDefault && D.preventDefault(), false;
    }
  }, "mousemoveHandler"), false);
  var L, B, M;
  r10.registerBinding(e, "mouseup", /* @__PURE__ */ m$1(function(D) {
    if (!(r10.hoverData.which === 1 && D.which !== 1 && r10.hoverData.capture)) {
      var q = r10.hoverData.capture;
      if (q) {
        r10.hoverData.capture = false;
        var Q = r10.cy, K = /* @__PURE__ */ r10.projectIntoViewport(D.clientX, D.clientY), G = r10.selection, ae = /* @__PURE__ */ r10.findNearestElement(K[0], K[1], true, false), W = r10.dragData.possibleDragElements, te = r10.hoverData.down, me = /* @__PURE__ */ n(D);
        if (r10.data.bgActivePosistion && (r10.redrawHint("select", true), r10.redraw()), r10.hoverData.tapholdCancelled = true, r10.data.bgActivePosistion = void 0, te && te.unactivate(), r10.hoverData.which === 3) {
          var be = {
            originalEvent: D,
            type: "cxttapend",
            position: {
              x: K[0],
              y: K[1]
            }
          };
          if (te ? te.emit(be) : Q.emit(be), !r10.hoverData.cxtDragged) {
            var ce = {
              originalEvent: D,
              type: "cxttap",
              position: {
                x: K[0],
                y: K[1]
              }
            };
            te ? te.emit(ce) : Q.emit(ce);
          }
          r10.hoverData.cxtDragged = false, r10.hoverData.which = null;
        } else if (r10.hoverData.which === 1) {
          if (a(ae, [
            "mouseup",
            "tapend",
            "vmouseup"
          ], D, {
            x: K[0],
            y: K[1]
          }), !r10.dragData.didDrag && !r10.hoverData.dragged && !r10.hoverData.selecting && !r10.hoverData.isOverThresholdDrag && (a(te, [
            "click",
            "tap",
            "vclick"
          ], D, {
            x: K[0],
            y: K[1]
          }), B = false, D.timeStamp - M <= Q.multiClickDebounceTime() ? (L && clearTimeout(L), B = true, M = null, a(te, [
            "dblclick",
            "dbltap",
            "vdblclick"
          ], D, {
            x: K[0],
            y: K[1]
          })) : (L = /* @__PURE__ */ setTimeout(function() {
            B || a(te, [
              "oneclick",
              "onetap",
              "voneclick"
            ], D, {
              x: K[0],
              y: K[1]
            });
          }, /* @__PURE__ */ Q.multiClickDebounceTime()), M = D.timeStamp)), te == null && !r10.dragData.didDrag && !r10.hoverData.selecting && !r10.hoverData.dragged && !n(D) && (Q.$(t).unselect([
            "tapunselect"
          ]), W.length > 0 && r10.redrawHint("eles", true), r10.dragData.possibleDragElements = W = /* @__PURE__ */ Q.collection()), ae == te && !r10.dragData.didDrag && !r10.hoverData.selecting && ae != null && ae._private.selectable && (r10.hoverData.dragging || (Q.selectionType() === "additive" || me ? ae.selected() ? ae.unselect([
            "tapunselect"
          ]) : ae.select([
            "tapselect"
          ]) : me || (Q.$(t).unmerge(ae).unselect([
            "tapunselect"
          ]), ae.select([
            "tapselect"
          ]))), r10.redrawHint("eles", true)), r10.hoverData.selecting) {
            var xe = /* @__PURE__ */ Q.collection(/* @__PURE__ */ r10.getAllInBox(G[0], G[1], G[2], G[3]));
            r10.redrawHint("select", true), xe.length > 0 && r10.redrawHint("eles", true), Q.emit({
              type: "boxend",
              originalEvent: D,
              position: {
                x: K[0],
                y: K[1]
              }
            });
            var ve = /* @__PURE__ */ m$1(function(Re) {
              return Re.selectable() && !Re.selected();
            }, "eleWouldBeSelected");
            Q.selectionType() === "additive" || me || Q.$(t).unmerge(xe).unselect(), xe.emit("box").stdFilter(ve).select().emit("boxselect"), r10.redraw();
          }
          if (r10.hoverData.dragging && (r10.hoverData.dragging = false, r10.redrawHint("select", true), r10.redrawHint("eles", true), r10.redraw()), !G[4]) {
            r10.redrawHint("drag", true), r10.redrawHint("eles", true);
            var pe = te && te.grabbed();
            y(W), pe && (te.emit("freeon"), W.emit("free"), r10.dragData.didDrag && (te.emit("dragfreeon"), W.emit("dragfree")));
          }
        }
        G[4] = 0, r10.hoverData.down = null, r10.hoverData.cxtStarted = false, r10.hoverData.draggingEles = false, r10.hoverData.selecting = false, r10.hoverData.isOverThresholdDrag = false, r10.dragData.didDrag = false, r10.hoverData.dragged = false, r10.hoverData.dragDelta = [], r10.hoverData.mdownPos = null, r10.hoverData.mdownGPos = null, r10.hoverData.which = null;
      }
    }
  }, "mouseupHandler"), false);
  var A = /* @__PURE__ */ m$1(function(D) {
    if (!r10.scrollingPage) {
      var q = r10.cy, Q = /* @__PURE__ */ q.zoom(), K = /* @__PURE__ */ q.pan(), G = /* @__PURE__ */ r10.projectIntoViewport(D.clientX, D.clientY), ae = [
        G[0] * Q + K.x,
        G[1] * Q + K.y
      ];
      if (r10.hoverData.draggingEles || r10.hoverData.dragging || r10.hoverData.cxtStarted || k()) {
        D.preventDefault();
        return;
      }
      if (q.panningEnabled() && q.userPanningEnabled() && q.zoomingEnabled() && q.userZoomingEnabled()) {
        D.preventDefault(), r10.data.wheelZooming = true, clearTimeout(r10.data.wheelTimeout), r10.data.wheelTimeout = /* @__PURE__ */ setTimeout(function() {
          r10.data.wheelZooming = false, r10.redrawHint("eles", true), r10.redraw();
        }, 150);
        var W;
        D.deltaY != null ? W = D.deltaY / -250 : D.wheelDeltaY != null ? W = D.wheelDeltaY / 1e3 : W = D.wheelDelta / 1e3, W = W * r10.wheelSensitivity;
        var te = D.deltaMode === 1;
        te && (W *= 33);
        var me = q.zoom() * Math.pow(10, W);
        D.type === "gesturechange" && (me = r10.gestureStartZoom * D.scale), q.zoom({
          level: me,
          renderedPosition: {
            x: ae[0],
            y: ae[1]
          }
        }), q.emit(D.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
      }
    }
  }, "wheelHandler");
  r10.registerBinding(r10.container, "wheel", A, true), r10.registerBinding(e, "scroll", /* @__PURE__ */ m$1(function(D) {
    r10.scrollingPage = true, clearTimeout(r10.scrollingPageTimeout), r10.scrollingPageTimeout = /* @__PURE__ */ setTimeout(function() {
      r10.scrollingPage = false;
    }, 250);
  }, "scrollHandler"), true), r10.registerBinding(r10.container, "gesturestart", /* @__PURE__ */ m$1(function(D) {
    r10.gestureStartZoom = /* @__PURE__ */ r10.cy.zoom(), r10.hasTouchStarted || D.preventDefault();
  }, "gestureStartHandler"), true), r10.registerBinding(r10.container, "gesturechange", function(_) {
    r10.hasTouchStarted || A(_);
  }, true), r10.registerBinding(r10.container, "mouseout", /* @__PURE__ */ m$1(function(D) {
    var q = /* @__PURE__ */ r10.projectIntoViewport(D.clientX, D.clientY);
    r10.cy.emit({
      originalEvent: D,
      type: "mouseout",
      position: {
        x: q[0],
        y: q[1]
      }
    });
  }, "mouseOutHandler"), false), r10.registerBinding(r10.container, "mouseover", /* @__PURE__ */ m$1(function(D) {
    var q = /* @__PURE__ */ r10.projectIntoViewport(D.clientX, D.clientY);
    r10.cy.emit({
      originalEvent: D,
      type: "mouseover",
      position: {
        x: q[0],
        y: q[1]
      }
    });
  }, "mouseOverHandler"), false);
  var P, I, R, O, z, $, H, V, F, U, J, j, ee, re = /* @__PURE__ */ m$1(function(D, q, Q, K) {
    return Math.sqrt((Q - D) * (Q - D) + (K - q) * (K - q));
  }, "distance"), Y = /* @__PURE__ */ m$1(function(D, q, Q, K) {
    return (Q - D) * (Q - D) + (K - q) * (K - q);
  }, "distanceSq"), N;
  r10.registerBinding(r10.container, "touchstart", N = /* @__PURE__ */ m$1(function(D) {
    if (r10.hasTouchStarted = true, !!S(D)) {
      b1(), r10.touchData.capture = true, r10.data.bgActivePosistion = void 0;
      var q = r10.cy, Q = r10.touchData.now, K = r10.touchData.earlier;
      if (D.touches[0]) {
        var G = /* @__PURE__ */ r10.projectIntoViewport(D.touches[0].clientX, D.touches[0].clientY);
        Q[0] = G[0], Q[1] = G[1];
      }
      if (D.touches[1]) {
        var G = /* @__PURE__ */ r10.projectIntoViewport(D.touches[1].clientX, D.touches[1].clientY);
        Q[2] = G[0], Q[3] = G[1];
      }
      if (D.touches[2]) {
        var G = /* @__PURE__ */ r10.projectIntoViewport(D.touches[2].clientX, D.touches[2].clientY);
        Q[4] = G[0], Q[5] = G[1];
      }
      if (D.touches[1]) {
        r10.touchData.singleTouchMoved = true, y(r10.dragData.touchDragEles);
        var ae = /* @__PURE__ */ r10.findContainerClientCoords();
        F = ae[0], U = ae[1], J = ae[2], j = ae[3], P = D.touches[0].clientX - F, I = D.touches[0].clientY - U, R = D.touches[1].clientX - F, O = D.touches[1].clientY - U, ee = 0 <= P && P <= J && 0 <= R && R <= J && 0 <= I && I <= j && 0 <= O && O <= j;
        var W = /* @__PURE__ */ q.pan(), te = /* @__PURE__ */ q.zoom();
        z = /* @__PURE__ */ re(P, I, R, O), $ = /* @__PURE__ */ Y(P, I, R, O), H = [
          (P + R) / 2,
          (I + O) / 2
        ], V = [
          (H[0] - W.x) / te,
          (H[1] - W.y) / te
        ];
        var me = 200, be = me * me;
        if ($ < be && !D.touches[2]) {
          var ce = /* @__PURE__ */ r10.findNearestElement(Q[0], Q[1], true, true), xe = /* @__PURE__ */ r10.findNearestElement(Q[2], Q[3], true, true);
          ce && ce.isNode() ? (ce.activate().emit({
            originalEvent: D,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), r10.touchData.start = ce) : xe && xe.isNode() ? (xe.activate().emit({
            originalEvent: D,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), r10.touchData.start = xe) : q.emit({
            originalEvent: D,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), r10.touchData.start && (r10.touchData.start._private.grabbed = false), r10.touchData.cxt = true, r10.touchData.cxtDragged = false, r10.data.bgActivePosistion = void 0, r10.redraw();
          return;
        }
      }
      if (D.touches[2]) q.boxSelectionEnabled() && D.preventDefault();
      else if (!D.touches[1]) {
        if (D.touches[0]) {
          var ve = /* @__PURE__ */ r10.findNearestElements(Q[0], Q[1], true, true), pe = ve[0];
          if (pe != null && (pe.activate(), r10.touchData.start = pe, r10.touchData.starts = ve, r10.nodeIsGrabbable(pe))) {
            var Fe = r10.dragData.touchDragEles = /* @__PURE__ */ q.collection(), Re = null;
            r10.redrawHint("eles", true), r10.redrawHint("drag", true), pe.selected() ? (Re = /* @__PURE__ */ q.$(function(Je) {
              return Je.selected() && r10.nodeIsGrabbable(Je);
            }), h(Re, {
              addToList: Fe
            })) : m(pe, {
              addToList: Fe
            }), f(pe);
            var lr = /* @__PURE__ */ m$1(function(vr) {
              return {
                originalEvent: D,
                type: vr,
                position: {
                  x: Q[0],
                  y: Q[1]
                }
              };
            }, "makeEvent");
            pe.emit(/* @__PURE__ */ lr("grabon")), Re ? Re.forEach(function(Je) {
              Je.emit(/* @__PURE__ */ lr("grab"));
            }) : pe.emit(/* @__PURE__ */ lr("grab"));
          }
          a(pe, [
            "touchstart",
            "tapstart",
            "vmousedown"
          ], D, {
            x: Q[0],
            y: Q[1]
          }), pe == null && (r10.data.bgActivePosistion = {
            x: G[0],
            y: G[1]
          }, r10.redrawHint("select", true), r10.redraw()), r10.touchData.singleTouchMoved = false, r10.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(r10.touchData.tapholdTimeout), r10.touchData.tapholdTimeout = /* @__PURE__ */ setTimeout(function() {
            r10.touchData.singleTouchMoved === false && !r10.pinching && !r10.touchData.selecting && a(r10.touchData.start, [
              "taphold"
            ], D, {
              x: Q[0],
              y: Q[1]
            });
          }, r10.tapholdDuration);
        }
      }
      if (D.touches.length >= 1) {
        for (var Qe = r10.touchData.startPosition = [
          null,
          null,
          null,
          null,
          null,
          null
        ], He = 0; He < Q.length; He++) Qe[He] = K[He] = Q[He];
        var cr = D.touches[0];
        r10.touchData.startGPosition = [
          cr.clientX,
          cr.clientY
        ];
      }
    }
  }, "touchstartHandler"), false);
  var X;
  r10.registerBinding(e, "touchmove", X = /* @__PURE__ */ m$1(function(D) {
    var q = r10.touchData.capture;
    if (!(!q && !S(D))) {
      var Q = r10.selection, K = r10.cy, G = r10.touchData.now, ae = r10.touchData.earlier, W = /* @__PURE__ */ K.zoom();
      if (D.touches[0]) {
        var te = /* @__PURE__ */ r10.projectIntoViewport(D.touches[0].clientX, D.touches[0].clientY);
        G[0] = te[0], G[1] = te[1];
      }
      if (D.touches[1]) {
        var te = /* @__PURE__ */ r10.projectIntoViewport(D.touches[1].clientX, D.touches[1].clientY);
        G[2] = te[0], G[3] = te[1];
      }
      if (D.touches[2]) {
        var te = /* @__PURE__ */ r10.projectIntoViewport(D.touches[2].clientX, D.touches[2].clientY);
        G[4] = te[0], G[5] = te[1];
      }
      var me = r10.touchData.startGPosition, be;
      if (q && D.touches[0] && me) {
        for (var ce = [], xe = 0; xe < G.length; xe++) ce[xe] = G[xe] - ae[xe];
        var ve = D.touches[0].clientX - me[0], pe = ve * ve, Fe = D.touches[0].clientY - me[1], Re = Fe * Fe, lr = pe + Re;
        be = lr >= r10.touchTapThreshold2;
      }
      if (q && r10.touchData.cxt) {
        D.preventDefault();
        var Qe = D.touches[0].clientX - F, He = D.touches[0].clientY - U, cr = D.touches[1].clientX - F, Je = D.touches[1].clientY - U, vr = /* @__PURE__ */ Y(Qe, He, cr, Je), Er = vr / $, mr = 150, dr = mr * mr, Mr = 1.5, Vr = Mr * Mr;
        if (Er >= Vr || vr >= dr) {
          r10.touchData.cxt = false, r10.data.bgActivePosistion = void 0, r10.redrawHint("select", true);
          var Cr = {
            originalEvent: D,
            type: "cxttapend",
            position: {
              x: G[0],
              y: G[1]
            }
          };
          r10.touchData.start ? (r10.touchData.start.unactivate().emit(Cr), r10.touchData.start = null) : K.emit(Cr);
        }
      }
      if (q && r10.touchData.cxt) {
        var Cr = {
          originalEvent: D,
          type: "cxtdrag",
          position: {
            x: G[0],
            y: G[1]
          }
        };
        r10.data.bgActivePosistion = void 0, r10.redrawHint("select", true), r10.touchData.start ? r10.touchData.start.emit(Cr) : K.emit(Cr), r10.touchData.start && (r10.touchData.start._private.grabbed = false), r10.touchData.cxtDragged = true;
        var Ge = /* @__PURE__ */ r10.findNearestElement(G[0], G[1], true, true);
        (!r10.touchData.cxtOver || Ge !== r10.touchData.cxtOver) && (r10.touchData.cxtOver && r10.touchData.cxtOver.emit({
          originalEvent: D,
          type: "cxtdragout",
          position: {
            x: G[0],
            y: G[1]
          }
        }), r10.touchData.cxtOver = Ge, Ge && Ge.emit({
          originalEvent: D,
          type: "cxtdragover",
          position: {
            x: G[0],
            y: G[1]
          }
        }));
      } else if (q && D.touches[2] && K.boxSelectionEnabled()) D.preventDefault(), r10.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), r10.touchData.selecting || K.emit({
        originalEvent: D,
        type: "boxstart",
        position: {
          x: G[0],
          y: G[1]
        }
      }), r10.touchData.selecting = true, r10.touchData.didSelect = true, Q[4] = 1, !Q || Q.length === 0 || Q[0] === void 0 ? (Q[0] = (G[0] + G[2] + G[4]) / 3, Q[1] = (G[1] + G[3] + G[5]) / 3, Q[2] = (G[0] + G[2] + G[4]) / 3 + 1, Q[3] = (G[1] + G[3] + G[5]) / 3 + 1) : (Q[2] = (G[0] + G[2] + G[4]) / 3, Q[3] = (G[1] + G[3] + G[5]) / 3), r10.redrawHint("select", true), r10.redraw();
      else if (q && D.touches[1] && !r10.touchData.didSelect && K.zoomingEnabled() && K.panningEnabled() && K.userZoomingEnabled() && K.userPanningEnabled()) {
        D.preventDefault(), r10.data.bgActivePosistion = void 0, r10.redrawHint("select", true);
        var Xe = r10.dragData.touchDragEles;
        if (Xe) {
          r10.redrawHint("drag", true);
          for (var ar = 0; ar < Xe.length; ar++) {
            var xt = Xe[ar]._private;
            xt.grabbed = false, xt.rscratch.inDragLayer = false;
          }
        }
        var Lr = r10.touchData.start, Qe = D.touches[0].clientX - F, He = D.touches[0].clientY - U, cr = D.touches[1].clientX - F, Je = D.touches[1].clientY - U, Pi = /* @__PURE__ */ re(Qe, He, cr, Je), Au = Pi / z;
        if (ee) {
          var Ru = Qe - P, Ou = He - I, Iu = cr - R, zu = Je - O, Nu = (Ru + Iu) / 2, Fu = (Ou + zu) / 2, Zt = /* @__PURE__ */ K.zoom(), kn = Zt * Au, Ba = /* @__PURE__ */ K.pan(), Bi = V[0] * Zt + Ba.x, Mi = V[1] * Zt + Ba.y, Vu = {
            x: -kn / Zt * (Bi - Ba.x - Nu) + Bi,
            y: -kn / Zt * (Mi - Ba.y - Fu) + Mi
          };
          if (Lr && Lr.active()) {
            var Xe = r10.dragData.touchDragEles;
            y(Xe), r10.redrawHint("drag", true), r10.redrawHint("eles", true), Lr.unactivate().emit("freeon"), Xe.emit("free"), r10.dragData.didDrag && (Lr.emit("dragfreeon"), Xe.emit("dragfree"));
          }
          K.viewport({
            zoom: kn,
            pan: Vu,
            cancelOnFailedZoom: true
          }), K.emit("pinchzoom"), z = Pi, P = Qe, I = He, R = cr, O = Je, r10.pinching = true;
        }
        if (D.touches[0]) {
          var te = /* @__PURE__ */ r10.projectIntoViewport(D.touches[0].clientX, D.touches[0].clientY);
          G[0] = te[0], G[1] = te[1];
        }
        if (D.touches[1]) {
          var te = /* @__PURE__ */ r10.projectIntoViewport(D.touches[1].clientX, D.touches[1].clientY);
          G[2] = te[0], G[3] = te[1];
        }
        if (D.touches[2]) {
          var te = /* @__PURE__ */ r10.projectIntoViewport(D.touches[2].clientX, D.touches[2].clientY);
          G[4] = te[0], G[5] = te[1];
        }
      } else if (D.touches[0] && !r10.touchData.didSelect) {
        var Sr = r10.touchData.start, Pn = r10.touchData.last, Ge;
        if (!r10.hoverData.draggingEles && !r10.swipePanning && (Ge = /* @__PURE__ */ r10.findNearestElement(G[0], G[1], true, true)), q && Sr != null && D.preventDefault(), q && Sr != null && r10.nodeIsDraggable(Sr)) if (be) {
          var Xe = r10.dragData.touchDragEles, Li = !r10.dragData.didDrag;
          Li && h(Xe, {
            inDragLayer: true
          }), r10.dragData.didDrag = true;
          var Qt = {
            x: 0,
            y: 0
          };
          if (ie(ce[0]) && ie(ce[1]) && (Qt.x += ce[0], Qt.y += ce[1], Li)) {
            r10.redrawHint("eles", true);
            var Tr = r10.touchData.dragDelta;
            Tr && ie(Tr[0]) && ie(Tr[1]) && (Qt.x += Tr[0], Qt.y += Tr[1]);
          }
          r10.hoverData.draggingEles = true, Xe.silentShift(Qt).emit("position drag"), r10.redrawHint("drag", true), r10.touchData.startPosition[0] == ae[0] && r10.touchData.startPosition[1] == ae[1] && r10.redrawHint("eles", true), r10.redraw();
        } else {
          var Tr = r10.touchData.dragDelta = r10.touchData.dragDelta || [];
          Tr.length === 0 ? (Tr.push(ce[0]), Tr.push(ce[1])) : (Tr[0] += ce[0], Tr[1] += ce[1]);
        }
        if (a(Sr || Ge, [
          "touchmove",
          "tapdrag",
          "vmousemove"
        ], D, {
          x: G[0],
          y: G[1]
        }), (!Sr || !Sr.grabbed()) && Ge != Pn && (Pn && Pn.emit({
          originalEvent: D,
          type: "tapdragout",
          position: {
            x: G[0],
            y: G[1]
          }
        }), Ge && Ge.emit({
          originalEvent: D,
          type: "tapdragover",
          position: {
            x: G[0],
            y: G[1]
          }
        })), r10.touchData.last = Ge, q) for (var ar = 0; ar < G.length; ar++) G[ar] && r10.touchData.startPosition[ar] && be && (r10.touchData.singleTouchMoved = true);
        if (q && (Sr == null || Sr.pannable()) && K.panningEnabled() && K.userPanningEnabled()) {
          var qu = /* @__PURE__ */ i(Sr, r10.touchData.starts);
          qu && (D.preventDefault(), r10.data.bgActivePosistion || (r10.data.bgActivePosistion = /* @__PURE__ */ Pt(r10.touchData.startPosition)), r10.swipePanning ? (K.panBy({
            x: ce[0] * W,
            y: ce[1] * W
          }), K.emit("dragpan")) : be && (r10.swipePanning = true, K.panBy({
            x: ve * W,
            y: Fe * W
          }), K.emit("dragpan"), Sr && (Sr.unactivate(), r10.redrawHint("select", true), r10.touchData.start = null)));
          var te = /* @__PURE__ */ r10.projectIntoViewport(D.touches[0].clientX, D.touches[0].clientY);
          G[0] = te[0], G[1] = te[1];
        }
      }
      for (var xe = 0; xe < G.length; xe++) ae[xe] = G[xe];
      q && D.touches.length > 0 && !r10.hoverData.draggingEles && !r10.swipePanning && r10.data.bgActivePosistion != null && (r10.data.bgActivePosistion = void 0, r10.redrawHint("select", true), r10.redraw());
    }
  }, "touchmoveHandler"), false);
  var Z;
  r10.registerBinding(e, "touchcancel", Z = /* @__PURE__ */ m$1(function(D) {
    var q = r10.touchData.start;
    r10.touchData.capture = false, q && q.unactivate();
  }, "touchcancelHandler"));
  var oe, ge, ne, se;
  if (r10.registerBinding(e, "touchend", oe = /* @__PURE__ */ m$1(function(D) {
    var q = r10.touchData.start, Q = r10.touchData.capture;
    if (Q) D.touches.length === 0 && (r10.touchData.capture = false), D.preventDefault();
    else return;
    var K = r10.selection;
    r10.swipePanning = false, r10.hoverData.draggingEles = false;
    var G = r10.cy, ae = /* @__PURE__ */ G.zoom(), W = r10.touchData.now, te = r10.touchData.earlier;
    if (D.touches[0]) {
      var me = /* @__PURE__ */ r10.projectIntoViewport(D.touches[0].clientX, D.touches[0].clientY);
      W[0] = me[0], W[1] = me[1];
    }
    if (D.touches[1]) {
      var me = /* @__PURE__ */ r10.projectIntoViewport(D.touches[1].clientX, D.touches[1].clientY);
      W[2] = me[0], W[3] = me[1];
    }
    if (D.touches[2]) {
      var me = /* @__PURE__ */ r10.projectIntoViewport(D.touches[2].clientX, D.touches[2].clientY);
      W[4] = me[0], W[5] = me[1];
    }
    q && q.unactivate();
    var be;
    if (r10.touchData.cxt) {
      if (be = {
        originalEvent: D,
        type: "cxttapend",
        position: {
          x: W[0],
          y: W[1]
        }
      }, q ? q.emit(be) : G.emit(be), !r10.touchData.cxtDragged) {
        var ce = {
          originalEvent: D,
          type: "cxttap",
          position: {
            x: W[0],
            y: W[1]
          }
        };
        q ? q.emit(ce) : G.emit(ce);
      }
      r10.touchData.start && (r10.touchData.start._private.grabbed = false), r10.touchData.cxt = false, r10.touchData.start = null, r10.redraw();
      return;
    }
    if (!D.touches[2] && G.boxSelectionEnabled() && r10.touchData.selecting) {
      r10.touchData.selecting = false;
      var xe = /* @__PURE__ */ G.collection(/* @__PURE__ */ r10.getAllInBox(K[0], K[1], K[2], K[3]));
      K[0] = void 0, K[1] = void 0, K[2] = void 0, K[3] = void 0, K[4] = 0, r10.redrawHint("select", true), G.emit({
        type: "boxend",
        originalEvent: D,
        position: {
          x: W[0],
          y: W[1]
        }
      });
      var ve = /* @__PURE__ */ m$1(function(dr) {
        return dr.selectable() && !dr.selected();
      }, "eleWouldBeSelected");
      xe.emit("box").stdFilter(ve).select().emit("boxselect"), xe.nonempty() && r10.redrawHint("eles", true), r10.redraw();
    }
    if (q == null ? void 0 : q.unactivate(), D.touches[2]) r10.data.bgActivePosistion = void 0, r10.redrawHint("select", true);
    else if (!D.touches[1]) {
      if (!D.touches[0]) {
        if (!D.touches[0]) {
          r10.data.bgActivePosistion = void 0, r10.redrawHint("select", true);
          var pe = r10.dragData.touchDragEles;
          if (q != null) {
            var Fe = q._private.grabbed;
            y(pe), r10.redrawHint("drag", true), r10.redrawHint("eles", true), Fe && (q.emit("freeon"), pe.emit("free"), r10.dragData.didDrag && (q.emit("dragfreeon"), pe.emit("dragfree"))), a(q, [
              "touchend",
              "tapend",
              "vmouseup",
              "tapdragout"
            ], D, {
              x: W[0],
              y: W[1]
            }), q.unactivate(), r10.touchData.start = null;
          } else {
            var Re = /* @__PURE__ */ r10.findNearestElement(W[0], W[1], true, true);
            a(Re, [
              "touchend",
              "tapend",
              "vmouseup",
              "tapdragout"
            ], D, {
              x: W[0],
              y: W[1]
            });
          }
          var lr = r10.touchData.startPosition[0] - W[0], Qe = lr * lr, He = r10.touchData.startPosition[1] - W[1], cr = He * He, Je = Qe + cr, vr = Je * ae * ae;
          r10.touchData.singleTouchMoved || (q || G.$(":selected").unselect([
            "tapunselect"
          ]), a(q, [
            "tap",
            "vclick"
          ], D, {
            x: W[0],
            y: W[1]
          }), ge = false, D.timeStamp - se <= G.multiClickDebounceTime() ? (ne && clearTimeout(ne), ge = true, se = null, a(q, [
            "dbltap",
            "vdblclick"
          ], D, {
            x: W[0],
            y: W[1]
          })) : (ne = /* @__PURE__ */ setTimeout(function() {
            ge || a(q, [
              "onetap",
              "voneclick"
            ], D, {
              x: W[0],
              y: W[1]
            });
          }, /* @__PURE__ */ G.multiClickDebounceTime()), se = D.timeStamp)), q != null && !r10.dragData.didDrag && q._private.selectable && vr < r10.touchTapThreshold2 && !r10.pinching && (G.selectionType() === "single" ? (G.$(t).unmerge(q).unselect([
            "tapunselect"
          ]), q.select([
            "tapselect"
          ])) : q.selected() ? q.unselect([
            "tapunselect"
          ]) : q.select([
            "tapselect"
          ]), r10.redrawHint("eles", true)), r10.touchData.singleTouchMoved = true;
        }
      }
    }
    for (var Er = 0; Er < W.length; Er++) te[Er] = W[Er];
    r10.dragData.didDrag = false, D.touches.length === 0 && (r10.touchData.dragDelta = [], r10.touchData.startPosition = [
      null,
      null,
      null,
      null,
      null,
      null
    ], r10.touchData.startGPosition = null, r10.touchData.didSelect = false), D.touches.length < 2 && (D.touches.length === 1 && (r10.touchData.startGPosition = [
      D.touches[0].clientX,
      D.touches[0].clientY
    ]), r10.pinching = false, r10.redrawHint("eles", true), r10.redraw());
  }, "touchendHandler"), false), typeof TouchEvent > "u") {
    var le = [], de = /* @__PURE__ */ m$1(function(D) {
      return {
        clientX: D.clientX,
        clientY: D.clientY,
        force: 1,
        identifier: D.pointerId,
        pageX: D.pageX,
        pageY: D.pageY,
        radiusX: D.width / 2,
        radiusY: D.height / 2,
        screenX: D.screenX,
        screenY: D.screenY,
        target: D.target
      };
    }, "makeTouch"), fe = /* @__PURE__ */ m$1(function(D) {
      return {
        event: D,
        touch: /* @__PURE__ */ de(D)
      };
    }, "makePointer"), ye = /* @__PURE__ */ m$1(function(D) {
      le.push(/* @__PURE__ */ fe(D));
    }, "addPointer"), Be = /* @__PURE__ */ m$1(function(D) {
      for (var q = 0; q < le.length; q++) {
        var Q = le[q];
        if (Q.event.pointerId === D.pointerId) {
          le.splice(q, 1);
          return;
        }
      }
    }, "removePointer"), Ce = /* @__PURE__ */ m$1(function(D) {
      var q = le.filter(function(Q) {
        return Q.event.pointerId === D.pointerId;
      })[0];
      q.event = D, q.touch = /* @__PURE__ */ de(D);
    }, "updatePointer"), Ee = /* @__PURE__ */ m$1(function(D) {
      D.touches = /* @__PURE__ */ le.map(function(q) {
        return q.touch;
      });
    }, "addTouchesToEvent"), De = /* @__PURE__ */ m$1(function(D) {
      return D.pointerType === "mouse" || D.pointerType === 4;
    }, "pointerIsMouse");
    r10.registerBinding(r10.container, "pointerdown", function(_) {
      De(_) || (_.preventDefault(), ye(_), Ee(_), N(_));
    }), r10.registerBinding(r10.container, "pointerup", function(_) {
      De(_) || (Be(_), Ee(_), oe(_));
    }), r10.registerBinding(r10.container, "pointercancel", function(_) {
      De(_) || (Be(_), Ee(_), Z(_));
    }), r10.registerBinding(r10.container, "pointermove", function(_) {
      De(_) || (_.preventDefault(), Ce(_), Ee(_), X(_));
    });
  }
};
var Kr = {};
Kr.generatePolygon = function(r10, e) {
  return this.nodeShapes[r10] = {
    renderer: this,
    name: r10,
    points: e,
    draw: /* @__PURE__ */ m$1(function(a, n, i, s, o, l) {
      this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
    }, "draw"),
    intersectLine: /* @__PURE__ */ m$1(function(a, n, i, s, o, l, u, f) {
      return ha(o, l, this.points, a, n, i / 2, s / 2, u);
    }, "intersectLine"),
    checkPoint: /* @__PURE__ */ m$1(function(a, n, i, s, o, l, u, f) {
      return Hr(a, n, this.points, l, u, s, o, [
        0,
        -1
      ], i);
    }, "checkPoint")
  };
};
Kr.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: /* @__PURE__ */ m$1(function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    }, "draw"),
    intersectLine: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      return Gv(i, s, e, t, a / 2 + o, n / 2 + o);
    }, "intersectLine"),
    checkPoint: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      return ft(e, t, n, i, s, o, a);
    }, "checkPoint")
  };
};
Kr.generateRoundPolygon = function(r10, e) {
  return this.nodeShapes[r10] = {
    renderer: this,
    name: r10,
    points: e,
    getOrCreateCorners: /* @__PURE__ */ m$1(function(a, n, i, s, o, l, u) {
      if (l[u] !== void 0 && l[u + "-cx"] === a && l[u + "-cy"] === n) return l[u];
      l[u] = new Array(e.length / 2), l[u + "-cx"] = a, l[u + "-cy"] = n;
      var f = i / 2, c = s / 2;
      o = o === "auto" ? bo(i, s) : o;
      for (var d = new Array(e.length / 2), g = 0; g < e.length / 2; g++) d[g] = {
        x: a + f * e[g * 2],
        y: n + c * e[g * 2 + 1]
      };
      var h, m, y, p, b1 = d.length;
      for (m = d[b1 - 1], h = 0; h < b1; h++) y = d[h % b1], p = d[(h + 1) % b1], l[u][h] = /* @__PURE__ */ Ti(m, y, p, o), m = y, y = p;
      return l[u];
    }, "getOrCreateCorners"),
    draw: /* @__PURE__ */ m$1(function(a, n, i, s, o, l, u) {
      this.renderer.nodeShapeImpl("round-polygon", a, n, i, s, o, this.points, /* @__PURE__ */ this.getOrCreateCorners(n, i, s, o, l, u, "drawCorners"));
    }, "draw"),
    intersectLine: /* @__PURE__ */ m$1(function(a, n, i, s, o, l, u, f, c) {
      return Kv(o, l, this.points, a, n, i, s, u, /* @__PURE__ */ this.getOrCreateCorners(a, n, i, s, f, c, "corners"));
    }, "intersectLine"),
    checkPoint: /* @__PURE__ */ m$1(function(a, n, i, s, o, l, u, f, c) {
      return Hv(a, n, this.points, l, u, s, o, /* @__PURE__ */ this.getOrCreateCorners(l, u, s, o, f, c, "corners"));
    }, "checkPoint")
  };
};
Kr.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: /* @__PURE__ */ fr(4, 0),
    draw: /* @__PURE__ */ m$1(function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
    }, "draw"),
    intersectLine: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      return yo(i, s, e, t, a, n, o, l);
    }, "intersectLine"),
    checkPoint: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      var u = n / 2, f = i / 2;
      l = l === "auto" ? gt(n, i) : l, l = /* @__PURE__ */ Math.min(u, f, l);
      var c = l * 2;
      return !!(Hr(e, t, this.points, s, o, n, i - c, [
        0,
        -1
      ], a) || Hr(e, t, this.points, s, o, n - c, i, [
        0,
        -1
      ], a) || ft(e, t, c, c, s - u + l, o - f + l, a) || ft(e, t, c, c, s + u - l, o - f + l, a) || ft(e, t, c, c, s + u - l, o + f - l, a) || ft(e, t, c, c, s - u + l, o + f - l, a));
    }, "checkPoint")
  };
};
Kr.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: /* @__PURE__ */ di(),
    points: /* @__PURE__ */ fr(4, 0),
    draw: /* @__PURE__ */ m$1(function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, null, s);
    }, "draw"),
    generateCutTrianglePts: /* @__PURE__ */ m$1(function(e, t, a, n, i) {
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
    intersectLine: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      var u = /* @__PURE__ */ this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, t, l), f = /* @__PURE__ */ [].concat.apply([], [
        /* @__PURE__ */ u.topLeft.splice(0, 4),
        /* @__PURE__ */ u.topRight.splice(0, 4),
        /* @__PURE__ */ u.bottomRight.splice(0, 4),
        /* @__PURE__ */ u.bottomLeft.splice(0, 4)
      ]);
      return ha(i, s, f, e, t);
    }, "intersectLine"),
    checkPoint: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      var u = l === "auto" ? this.cornerLength : l;
      if (Hr(e, t, this.points, s, o, n, i - 2 * u, [
        0,
        -1
      ], a) || Hr(e, t, this.points, s, o, n - 2 * u, i, [
        0,
        -1
      ], a)) return true;
      var f = /* @__PURE__ */ this.generateCutTrianglePts(n, i, s, o);
      return hr(e, t, f.topLeft) || hr(e, t, f.topRight) || hr(e, t, f.bottomRight) || hr(e, t, f.bottomLeft);
    }, "checkPoint")
  };
};
Kr.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: /* @__PURE__ */ fr(4, 0),
    draw: /* @__PURE__ */ m$1(function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    }, "draw"),
    intersectLine: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      var u = 0.15, f = 0.5, c = 0.85, d = /* @__PURE__ */ this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, t), g = /* @__PURE__ */ m$1(function(y) {
        var p = /* @__PURE__ */ Mt({
          x: y[0],
          y: y[1]
        }, {
          x: y[2],
          y: y[3]
        }, {
          x: y[4],
          y: y[5]
        }, u), b1 = /* @__PURE__ */ Mt({
          x: y[0],
          y: y[1]
        }, {
          x: y[2],
          y: y[3]
        }, {
          x: y[4],
          y: y[5]
        }, f), w = /* @__PURE__ */ Mt({
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
      }, "approximateBarrelCurvePts"), h = /* @__PURE__ */ [].concat(/* @__PURE__ */ g(d.topLeft), /* @__PURE__ */ g(d.topRight), /* @__PURE__ */ g(d.bottomRight), /* @__PURE__ */ g(d.bottomLeft));
      return ha(i, s, h, e, t);
    }, "intersectLine"),
    generateBarrelBezierPts: /* @__PURE__ */ m$1(function(e, t, a, n) {
      var i = t / 2, s = e / 2, o = a - s, l = a + s, u = n - i, f = n + i, c = /* @__PURE__ */ Gn(e, t), d = c.heightOffset, g = c.widthOffset, h = c.ctrlPtOffsetPct * e, m = {
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
    checkPoint: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      var u = /* @__PURE__ */ Gn(n, i), f = u.heightOffset, c = u.widthOffset;
      if (Hr(e, t, this.points, s, o, n, i - 2 * f, [
        0,
        -1
      ], a) || Hr(e, t, this.points, s, o, n - 2 * c, i, [
        0,
        -1
      ], a)) return true;
      for (var d = /* @__PURE__ */ this.generateBarrelBezierPts(n, i, s, o), g = /* @__PURE__ */ m$1(function(k, S, L) {
        var B = L[4], M = L[2], A = L[0], P = L[5], I = L[1], R = /* @__PURE__ */ Math.min(B, A), O = /* @__PURE__ */ Math.max(B, A), z = /* @__PURE__ */ Math.min(P, I), $ = /* @__PURE__ */ Math.max(P, I);
        if (R <= k && k <= O && z <= S && S <= $) {
          var H = /* @__PURE__ */ Wv(B, M, A), V = /* @__PURE__ */ Fv(H[0], H[1], H[2], k), F = /* @__PURE__ */ V.filter(function(U) {
            return 0 <= U && U <= 1;
          });
          if (F.length > 0) return F[0];
        }
        return null;
      }, "getCurveT"), h = /* @__PURE__ */ Object.keys(d), m = 0; m < h.length; m++) {
        var y = h[m], p = d[y], b1 = /* @__PURE__ */ g(e, t, p);
        if (b1 != null) {
          var w = p[5], x = p[3], T = p[1], C = /* @__PURE__ */ Ze(w, x, T, b1);
          if (p.isTop && C <= t || p.isBottom && t <= C) return true;
        }
      }
      return false;
    }, "checkPoint")
  };
};
Kr.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: /* @__PURE__ */ fr(4, 0),
    draw: /* @__PURE__ */ m$1(function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
    }, "draw"),
    intersectLine: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      var u = e - (a / 2 + o), f = t - (n / 2 + o), c = f, d = e + (a / 2 + o), g = /* @__PURE__ */ Zr(i, s, e, t, u, f, d, c, false);
      return g.length > 0 ? g : yo(i, s, e, t, a, n, o, l);
    }, "intersectLine"),
    checkPoint: /* @__PURE__ */ m$1(function(e, t, a, n, i, s, o, l) {
      l = l === "auto" ? gt(n, i) : l;
      var u = 2 * l;
      if (Hr(e, t, this.points, s, o, n, i - u, [
        0,
        -1
      ], a) || Hr(e, t, this.points, s, o, n - u, i, [
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
      return !!(hr(e, t, d) || ft(e, t, u, u, s + n / 2 - l, o + i / 2 - l, a) || ft(e, t, u, u, s - n / 2 + l, o + i / 2 - l, a));
    }, "checkPoint")
  };
};
Kr.registerNodeShapes = function() {
  var r10 = this.nodeShapes = {}, e = this;
  this.generateEllipse(), this.generatePolygon("triangle", /* @__PURE__ */ fr(3, 0)), this.generateRoundPolygon("round-triangle", /* @__PURE__ */ fr(3, 0)), this.generatePolygon("rectangle", /* @__PURE__ */ fr(4, 0)), r10.square = r10.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
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
  this.generatePolygon("pentagon", /* @__PURE__ */ fr(5, 0)), this.generateRoundPolygon("round-pentagon", /* @__PURE__ */ fr(5, 0)), this.generatePolygon("hexagon", /* @__PURE__ */ fr(6, 0)), this.generateRoundPolygon("round-hexagon", /* @__PURE__ */ fr(6, 0)), this.generatePolygon("heptagon", /* @__PURE__ */ fr(7, 0)), this.generateRoundPolygon("round-heptagon", /* @__PURE__ */ fr(7, 0)), this.generatePolygon("octagon", /* @__PURE__ */ fr(8, 0)), this.generateRoundPolygon("round-octagon", /* @__PURE__ */ fr(8, 0));
  var a = new Array(20);
  {
    var n = /* @__PURE__ */ Hn(5, 0), i = /* @__PURE__ */ Hn(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
    s *= 1.57;
    for (var o = 0; o < i.length / 2; o++) i[o * 2] *= s, i[o * 2 + 1] *= s;
    for (var o = 0; o < 20 / 4; o++) a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
  }
  a = /* @__PURE__ */ mo(a), this.generatePolygon("star", a), this.generatePolygon("vee", [
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
    0.333,
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
    0.333,
    1,
    -1,
    1
  ]), this.nodeShapes.concavehexagon = /* @__PURE__ */ this.generatePolygon("concave-hexagon", [
    -1,
    -0.95,
    -0.75,
    0,
    -1,
    0.95,
    1,
    0.95,
    0.75,
    0,
    1,
    -0.95
  ]);
  {
    var l = [
      -1,
      -1,
      0.25,
      -1,
      1,
      0,
      0.25,
      1,
      -1,
      1
    ];
    this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l);
  }
  r10.makePolygon = function(u) {
    var f = /* @__PURE__ */ u.join("$"), c = "polygon-" + f, d;
    return (d = this[c]) ? d : e.generatePolygon(c, u);
  };
};
var ka = {};
ka.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
ka.redraw = function(r10) {
  r10 = r10 || fo();
  var e = this;
  e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = true, e.renderOptions = r10;
};
ka.beforeRender = function(r10, e) {
  if (!this.destroyed) {
    e == null && qe("Priority is not optional for beforeRender");
    var t = this.beforeRenderCallbacks;
    t.push({
      fn: r10,
      priority: e
    }), t.sort(function(a, n) {
      return n.priority - a.priority;
    });
  }
};
var Ns = /* @__PURE__ */ m$1(function(e, t, a) {
  for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++) n[i].fn(t, a);
}, "beforeRenderCallbacks");
ka.startRenderLoop = function() {
  var r10 = this, e = r10.cy;
  if (!r10.renderLoopStarted) {
    r10.renderLoopStarted = true;
    var t = /* @__PURE__ */ m$1(function a(n) {
      if (!r10.destroyed) {
        if (!e.batching()) if (r10.requestedFrame && !r10.skipFrame) {
          Ns(r10, true, n);
          var i = /* @__PURE__ */ $r();
          r10.render(r10.renderOptions);
          var s = r10.lastDrawTime = /* @__PURE__ */ $r();
          r10.averageRedrawTime === void 0 && (r10.averageRedrawTime = s - i), r10.redrawCount === void 0 && (r10.redrawCount = 0), r10.redrawCount++, r10.redrawTotalTime === void 0 && (r10.redrawTotalTime = 0);
          var o = s - i;
          r10.redrawTotalTime += o, r10.lastRedrawTime = o, r10.averageRedrawTime = r10.averageRedrawTime / 2 + o / 2, r10.requestedFrame = false;
        } else Ns(r10, false, n);
        r10.skipFrame = false, _a(a);
      }
    }, "renderFn");
    _a(t);
  }
};
var kg = /* @__PURE__ */ m$1(function(e) {
  this.init(e);
}, "BaseRenderer"), yu = kg, Yt = yu.prototype;
Yt.clientFunctions = [
  "redrawHint",
  "render",
  "renderTo",
  "matchCanvasSize",
  "nodeShapeImpl",
  "arrowShapeImpl"
];
Yt.init = function(r10) {
  var e = this;
  e.options = r10, e.cy = r10.cy;
  var t = e.container = /* @__PURE__ */ r10.cy.container(), a = /* @__PURE__ */ e.cy.window();
  if (a) {
    var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", l = n.getElementById(s) != null;
    if (t.className.indexOf(o) < 0 && (t.className = (t.className || "") + " " + o), !l) {
      var u = /* @__PURE__ */ n.createElement("style");
      u.id = s, u.textContent = "." + o + " { position: relative; }", i.insertBefore(u, i.children[0]);
    }
    var f = /* @__PURE__ */ a.getComputedStyle(t), c = /* @__PURE__ */ f.getPropertyValue("position");
    c === "static" && Le("A Cytoscape container has style position:static and so can not use UI extensions properly");
  }
  e.selection = [
    void 0,
    void 0,
    void 0,
    void 0,
    0
  ], e.bezierProjPcts = [
    0.05,
    0.225,
    0.4,
    0.5,
    0.6,
    0.775,
    0.95
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
  }, e.redraws = 0, e.showFps = r10.showFps, e.debug = r10.debug, e.hideEdgesOnViewport = r10.hideEdgesOnViewport, e.textureOnViewport = r10.textureOnViewport, e.wheelSensitivity = r10.wheelSensitivity, e.motionBlurEnabled = r10.motionBlur, e.forcedPixelRatio = ie(r10.pixelRatio) ? r10.pixelRatio : null, e.motionBlur = r10.motionBlur, e.motionBlurOpacity = r10.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = false, e.clearedForMotionBlur = [], e.desktopTapThreshold = r10.desktopTapThreshold, e.desktopTapThreshold2 = r10.desktopTapThreshold * r10.desktopTapThreshold, e.touchTapThreshold = r10.touchTapThreshold, e.touchTapThreshold2 = r10.touchTapThreshold * r10.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
Yt.notify = function(r10, e) {
  var t = this, a = t.cy;
  if (!this.destroyed) {
    if (r10 === "init") {
      t.load();
      return;
    }
    if (r10 === "destroy") {
      t.destroy();
      return;
    }
    (r10 === "add" || r10 === "remove" || r10 === "move" && a.hasCompoundNodes() || r10 === "load" || r10 === "zorder" || r10 === "mount") && t.invalidateCachedZSortedEles(), r10 === "viewport" && t.redrawHint("select", true), (r10 === "load" || r10 === "resize" || r10 === "mount") && (t.invalidateContainerClientCoordsCache(), t.matchCanvasSize(t.container)), t.redrawHint("eles", true), t.redrawHint("drag", true), this.startRenderLoop(), this.redraw();
  }
};
Yt.destroy = function() {
  var r10 = this;
  r10.destroyed = true, r10.cy.stopAnimationLoop();
  for (var e = 0; e < r10.bindings.length; e++) {
    var t = r10.bindings[e], a = t, n = a.target;
    (n.off || n.removeEventListener).apply(n, a.args);
  }
  if (r10.bindings = [], r10.beforeRenderCallbacks = [], r10.onUpdateEleCalcsFns = [], r10.removeObserver && r10.removeObserver.disconnect(), r10.styleObserver && r10.styleObserver.disconnect(), r10.resizeObserver && r10.resizeObserver.disconnect(), r10.labelCalcDiv) try {
    document.body.removeChild(r10.labelCalcDiv);
  } catch {
  }
};
Yt.isHeadless = function() {
  return false;
};
[
  Si,
  gu,
  pu,
  Ut,
  Kr,
  ka
].forEach(function(r10) {
  we(Yt, r10);
});
var Vn = 1e3 / 60, mu = {
  setupDequeueing: /* @__PURE__ */ m$1(function(e) {
    return m$1(function() {
      var a = this, n = this.renderer;
      if (!a.dequeueingSetup) {
        a.dequeueingSetup = true;
        var i = /* @__PURE__ */ fn(function() {
          n.redrawHint("eles", true), n.redrawHint("drag", true), n.redraw();
        }, e.deqRedrawThreshold), s = /* @__PURE__ */ m$1(function(u, f) {
          var c = /* @__PURE__ */ $r(), d = n.averageRedrawTime, g = n.lastRedrawTime, h = [], m = /* @__PURE__ */ n.cy.extent(), y = /* @__PURE__ */ n.getPixelRatio();
          for (u || n.flushRenderedStyleQueue(); ; ) {
            var p = /* @__PURE__ */ $r(), b1 = p - c, w = p - f;
            if (g < Vn) {
              var x = Vn - (u ? d : 0);
              if (w >= e.deqFastCost * x) break;
            } else if (u) {
              if (b1 >= e.deqCost * g || b1 >= e.deqAvgCost * d) break;
            } else if (w >= e.deqNoDrawCost * Vn) break;
            var T = /* @__PURE__ */ e.deq(a, y, m);
            if (T.length > 0) for (var C = 0; C < T.length; C++) h.push(T[C]);
            else break;
          }
          h.length > 0 && (e.onDeqd(a, h), !u && e.shouldRedraw(a, h, y, m) && i());
        }, "dequeue"), o = e.priority || li;
        n.beforeRender(s, /* @__PURE__ */ o(a));
      }
    }, "setupDequeueingImpl");
  }, "setupDequeueing")
}, Pg = /* @__PURE__ */ function() {
  function r10(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ja;
    ni(this, r10), this.idsByKey = new Ir(), this.keyForId = new Ir(), this.cachesByLvl = new Ir(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = t;
  }
  return m$1(r10, "ElementTextureCacheLookup"), ii(r10, [
    {
      key: "getIdsFor",
      value: /* @__PURE__ */ m$1(function(t) {
        t == null && qe("Can not get id list for null key");
        var a = this.idsByKey, n = /* @__PURE__ */ this.idsByKey.get(t);
        return n || (n = new Vt(), a.set(t, n)), n;
      }, "getIdsFor")
    },
    {
      key: "addIdForKey",
      value: /* @__PURE__ */ m$1(function(t, a) {
        t != null && this.getIdsFor(t).add(a);
      }, "addIdForKey")
    },
    {
      key: "deleteIdForKey",
      value: /* @__PURE__ */ m$1(function(t, a) {
        t != null && this.getIdsFor(t).delete(a);
      }, "deleteIdForKey")
    },
    {
      key: "getNumberOfIdsForKey",
      value: /* @__PURE__ */ m$1(function(t) {
        return t == null ? 0 : this.getIdsFor(t).size;
      }, "getNumberOfIdsForKey")
    },
    {
      key: "updateKeyMappingFor",
      value: /* @__PURE__ */ m$1(function(t) {
        var a = /* @__PURE__ */ t.id(), n = /* @__PURE__ */ this.keyForId.get(a), i = /* @__PURE__ */ this.getKey(t);
        this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
      }, "updateKeyMappingFor")
    },
    {
      key: "deleteKeyMappingFor",
      value: /* @__PURE__ */ m$1(function(t) {
        var a = /* @__PURE__ */ t.id(), n = /* @__PURE__ */ this.keyForId.get(a);
        this.deleteIdForKey(n, a), this.keyForId.delete(a);
      }, "deleteKeyMappingFor")
    },
    {
      key: "keyHasChangedFor",
      value: /* @__PURE__ */ m$1(function(t) {
        var a = /* @__PURE__ */ t.id(), n = /* @__PURE__ */ this.keyForId.get(a), i = /* @__PURE__ */ this.getKey(t);
        return n !== i;
      }, "keyHasChangedFor")
    },
    {
      key: "isInvalid",
      value: /* @__PURE__ */ m$1(function(t) {
        return this.keyHasChangedFor(t) || this.doesEleInvalidateKey(t);
      }, "isInvalid")
    },
    {
      key: "getCachesAt",
      value: /* @__PURE__ */ m$1(function(t) {
        var a = this.cachesByLvl, n = this.lvls, i = /* @__PURE__ */ a.get(t);
        return i || (i = new Ir(), a.set(t, i), n.push(t)), i;
      }, "getCachesAt")
    },
    {
      key: "getCache",
      value: /* @__PURE__ */ m$1(function(t, a) {
        return this.getCachesAt(a).get(t);
      }, "getCache")
    },
    {
      key: "get",
      value: /* @__PURE__ */ m$1(function(t, a) {
        var n = /* @__PURE__ */ this.getKey(t), i = /* @__PURE__ */ this.getCache(n, a);
        return i != null && this.updateKeyMappingFor(t), i;
      }, "get")
    },
    {
      key: "getForCachedKey",
      value: /* @__PURE__ */ m$1(function(t, a) {
        var n = /* @__PURE__ */ this.keyForId.get(/* @__PURE__ */ t.id()), i = /* @__PURE__ */ this.getCache(n, a);
        return i;
      }, "getForCachedKey")
    },
    {
      key: "hasCache",
      value: /* @__PURE__ */ m$1(function(t, a) {
        return this.getCachesAt(a).has(t);
      }, "hasCache")
    },
    {
      key: "has",
      value: /* @__PURE__ */ m$1(function(t, a) {
        var n = /* @__PURE__ */ this.getKey(t);
        return this.hasCache(n, a);
      }, "has")
    },
    {
      key: "setCache",
      value: /* @__PURE__ */ m$1(function(t, a, n) {
        n.key = t, this.getCachesAt(a).set(t, n);
      }, "setCache")
    },
    {
      key: "set",
      value: /* @__PURE__ */ m$1(function(t, a, n) {
        var i = /* @__PURE__ */ this.getKey(t);
        this.setCache(i, a, n), this.updateKeyMappingFor(t);
      }, "set")
    },
    {
      key: "deleteCache",
      value: /* @__PURE__ */ m$1(function(t, a) {
        this.getCachesAt(a).delete(t);
      }, "deleteCache")
    },
    {
      key: "delete",
      value: /* @__PURE__ */ m$1(function(t, a) {
        var n = /* @__PURE__ */ this.getKey(t);
        this.deleteCache(n, a);
      }, "_delete")
    },
    {
      key: "invalidateKey",
      value: /* @__PURE__ */ m$1(function(t) {
        var a = this;
        this.lvls.forEach(function(n) {
          return a.deleteCache(t, n);
        });
      }, "invalidateKey")
    },
    {
      key: "invalidate",
      value: /* @__PURE__ */ m$1(function(t) {
        var a = /* @__PURE__ */ t.id(), n = /* @__PURE__ */ this.keyForId.get(a);
        this.deleteKeyMappingFor(t);
        var i = /* @__PURE__ */ this.doesEleInvalidateKey(t);
        return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
      }, "invalidate")
    }
  ]), r10;
}(), Fs = 25, $a = 50, Qa = -4, ei = 3, Bg = 7.99, Mg = 8, Lg = 1024, Ag = 1024, Rg = 1024, Og = 0.2, Ig = 0.8, zg = 10, Ng = 0.15, Fg = 0.1, Vg = 0.9, qg = 0.9, $g = 100, Hg = 1, Bt = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
}, Gg = /* @__PURE__ */ rr({
  getKey: null,
  doesEleInvalidateKey: ja,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: uo,
  allowEdgeTxrCaching: true,
  allowParentTxrCaching: true
}), sa = /* @__PURE__ */ m$1(function(e, t) {
  var a = this;
  a.renderer = e, a.onDequeues = [];
  var n = /* @__PURE__ */ Gg(t);
  we(a, n), a.lookup = new Pg(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, "ElementTextureCache"), Ye = sa.prototype;
Ye.reasons = Bt;
Ye.getTextureQueue = function(r10) {
  var e = this;
  return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[r10] = e.eleImgCaches[r10] || [];
};
Ye.getRetiredTextureQueue = function(r10) {
  var e = this, t = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = t[r10] = t[r10] || [];
  return a;
};
Ye.getElementQueue = function() {
  var r10 = this, e = r10.eleCacheQueue = r10.eleCacheQueue || new Ca(function(t, a) {
    return a.reqs - t.reqs;
  });
  return e;
};
Ye.getElementKeyToQueue = function() {
  var r10 = this, e = r10.eleKeyToCacheQueue = r10.eleKeyToCacheQueue || {};
  return e;
};
Ye.getElement = function(r10, e, t, a, n) {
  var i = this, s = this.renderer, o = /* @__PURE__ */ s.cy.zoom(), l = this.lookup;
  if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !r10.visible() || r10.removed() || !i.allowEdgeTxrCaching && r10.isEdge() || !i.allowParentTxrCaching && r10.isParent()) return null;
  if (a == null && (a = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ fi(o * t))), a < Qa) a = Qa;
  else if (o >= Bg || a > ei) return null;
  var u = /* @__PURE__ */ Math.pow(2, a), f = e.h * u, c = e.w * u, d = /* @__PURE__ */ s.eleTextBiggerThanMin(r10, u);
  if (!this.isVisible(r10, d)) return null;
  var g = /* @__PURE__ */ l.get(r10, a);
  if (g && g.invalidated && (g.invalidated = false, g.texture.invalidatedWidth -= g.width), g) return g;
  var h;
  if (f <= Fs ? h = Fs : f <= $a ? h = $a : h = Math.ceil(f / $a) * $a, f > Rg || c > Ag) return null;
  var m = /* @__PURE__ */ i.getTextureQueue(h), y = m[m.length - 2], p = /* @__PURE__ */ m$1(function() {
    return i.recycleTexture(h, c) || i.addTexture(h, c);
  }, "addNewTxr");
  y || (y = m[m.length - 1]), y || (y = /* @__PURE__ */ p()), y.width - y.usedWidth < c && (y = /* @__PURE__ */ p());
  for (var b1 = /* @__PURE__ */ m$1(function(R) {
    return R && R.scaledLabelShown === d;
  }, "scalableFrom"), w = n && n === Bt.dequeue, x = n && n === Bt.highQuality, T = n && n === Bt.downscale, C, E = a + 1; E <= ei; E++) {
    var k = /* @__PURE__ */ l.get(r10, E);
    if (k) {
      C = k;
      break;
    }
  }
  var S = C && C.level === a + 1 ? C : null, L = /* @__PURE__ */ m$1(function() {
    y.context.drawImage(S.texture.canvas, S.x, 0, S.width, S.height, y.usedWidth, 0, c, f);
  }, "downscale");
  if (y.context.setTransform(1, 0, 0, 1, 0, 0), y.context.clearRect(y.usedWidth, 0, c, h), b1(S)) L();
  else if (b1(C)) if (x) {
    for (var B = C.level; B > a; B--) S = /* @__PURE__ */ i.getElement(r10, e, t, B, Bt.downscale);
    L();
  } else return i.queueElement(r10, C.level - 1), C;
  else {
    var M;
    if (!w && !x && !T) for (var A = a - 1; A >= Qa; A--) {
      var P = /* @__PURE__ */ l.get(r10, A);
      if (P) {
        M = P;
        break;
      }
    }
    if (b1(M)) return i.queueElement(r10, a), M;
    y.context.translate(y.usedWidth, 0), y.context.scale(u, u), this.drawElement(y.context, r10, e, d, false), y.context.scale(1 / u, 1 / u), y.context.translate(-y.usedWidth, 0);
  }
  return g = {
    x: y.usedWidth,
    texture: y,
    level: a,
    scale: u,
    width: c,
    height: f,
    scaledLabelShown: d
  }, y.usedWidth += /* @__PURE__ */ Math.ceil(c + Mg), y.eleCaches.push(g), l.set(r10, a, g), i.checkTextureFullness(y), g;
};
Ye.invalidateElements = function(r10) {
  for (var e = 0; e < r10.length; e++) this.invalidateElement(r10[e]);
};
Ye.invalidateElement = function(r10) {
  var e = this, t = e.lookup, a = [], n = /* @__PURE__ */ t.isInvalid(r10);
  if (n) {
    for (var i = Qa; i <= ei; i++) {
      var s = /* @__PURE__ */ t.getForCachedKey(r10, i);
      s && a.push(s);
    }
    var o = /* @__PURE__ */ t.invalidate(r10);
    if (o) for (var l = 0; l < a.length; l++) {
      var u = a[l], f = u.texture;
      f.invalidatedWidth += u.width, u.invalidated = true, e.checkTextureUtility(f);
    }
    e.removeFromQueue(r10);
  }
};
Ye.checkTextureUtility = function(r10) {
  r10.invalidatedWidth >= Og * r10.width && this.retireTexture(r10);
};
Ye.checkTextureFullness = function(r10) {
  var e = this, t = /* @__PURE__ */ e.getTextureQueue(r10.height);
  r10.usedWidth / r10.width > Ig && r10.fullnessChecks >= zg ? jr(t, r10) : r10.fullnessChecks++;
};
Ye.retireTexture = function(r10) {
  var e = this, t = r10.height, a = /* @__PURE__ */ e.getTextureQueue(t), n = this.lookup;
  jr(a, r10), r10.retired = true;
  for (var i = r10.eleCaches, s = 0; s < i.length; s++) {
    var o = i[s];
    n.deleteCache(o.key, o.level);
  }
  vi(i);
  var l = /* @__PURE__ */ e.getRetiredTextureQueue(t);
  l.push(r10);
};
Ye.addTexture = function(r10, e) {
  var t = this, a = /* @__PURE__ */ t.getTextureQueue(r10), n = {};
  return a.push(n), n.eleCaches = [], n.height = r10, n.width = /* @__PURE__ */ Math.max(Lg, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = /* @__PURE__ */ t.renderer.makeOffscreenCanvas(n.width, n.height), n.context = /* @__PURE__ */ n.canvas.getContext("2d"), n;
};
Ye.recycleTexture = function(r10, e) {
  for (var t = this, a = /* @__PURE__ */ t.getTextureQueue(r10), n = /* @__PURE__ */ t.getRetiredTextureQueue(r10), i = 0; i < n.length; i++) {
    var s = n[i];
    if (s.width >= e) return s.retired = false, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, vi(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), jr(n, s), a.push(s), s;
  }
};
Ye.queueElement = function(r10, e) {
  var t = this, a = /* @__PURE__ */ t.getElementQueue(), n = /* @__PURE__ */ t.getElementKeyToQueue(), i = /* @__PURE__ */ this.getKey(r10), s = n[i];
  if (s) s.level = /* @__PURE__ */ Math.max(s.level, e), s.eles.merge(r10), s.reqs++, a.updateItem(s);
  else {
    var o = {
      eles: /* @__PURE__ */ r10.spawn().merge(r10),
      level: e,
      reqs: 1,
      key: i
    };
    a.push(o), n[i] = o;
  }
};
Ye.dequeue = function(r10) {
  for (var e = this, t = /* @__PURE__ */ e.getElementQueue(), a = /* @__PURE__ */ e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < Hg && t.size() > 0; s++) {
    var o = /* @__PURE__ */ t.pop(), l = o.key, u = o.eles[0], f = /* @__PURE__ */ i.hasCache(u, o.level);
    if (a[l] = null, f) continue;
    n.push(o);
    var c = /* @__PURE__ */ e.getBoundingBox(u);
    e.getElement(u, c, r10, o.level, Bt.dequeue);
  }
  return n;
};
Ye.removeFromQueue = function(r10) {
  var e = this, t = /* @__PURE__ */ e.getElementQueue(), a = /* @__PURE__ */ e.getElementKeyToQueue(), n = /* @__PURE__ */ this.getKey(r10), i = a[n];
  i != null && (i.eles.length === 1 ? (i.reqs = ui, t.updateItem(i), t.pop(), a[n] = null) : i.eles.unmerge(r10));
};
Ye.onDequeue = function(r10) {
  this.onDequeues.push(r10);
};
Ye.offDequeue = function(r10) {
  jr(this.onDequeues, r10);
};
Ye.setupDequeueing = /* @__PURE__ */ mu.setupDequeueing({
  deqRedrawThreshold: $g,
  deqCost: Ng,
  deqAvgCost: Fg,
  deqNoDrawCost: Vg,
  deqFastCost: qg,
  deq: /* @__PURE__ */ m$1(function(e, t, a) {
    return e.dequeue(t, a);
  }, "deq"),
  onDeqd: /* @__PURE__ */ m$1(function(e, t) {
    for (var a = 0; a < e.onDequeues.length; a++) {
      var n = e.onDequeues[a];
      n(t);
    }
  }, "onDeqd"),
  shouldRedraw: /* @__PURE__ */ m$1(function(e, t, a, n) {
    for (var i = 0; i < t.length; i++) for (var s = t[i].eles, o = 0; o < s.length; o++) {
      var l = /* @__PURE__ */ s[o].boundingBox();
      if (ci(l, n)) return true;
    }
    return false;
  }, "shouldRedraw"),
  priority: /* @__PURE__ */ m$1(function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }, "priority")
});
var Kg = 1, ua = -4, un = 2, Wg = 3.99, Ug = 50, Yg = 50, Xg = 0.15, Zg = 0.1, Qg = 0.9, Jg = 0.9, _g = 1, Vs = 250, jg = 4e3 * 4e3, ep = true, bu = /* @__PURE__ */ m$1(function(e) {
  var t = this, a = t.renderer = e, n = a.cy;
  t.layersByLevel = {}, t.firstGet = true, t.lastInvalidationTime = $r() - 2 * Vs, t.skipping = false, t.eleTxrDeqs = /* @__PURE__ */ n.collection(), t.scheduleElementRefinement = /* @__PURE__ */ fn(function() {
    t.refineElementTextures(t.eleTxrDeqs), t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
  }, Yg), a.beforeRender(function(s, o) {
    o - t.lastInvalidationTime <= Vs ? t.skipping = true : t.skipping = false;
  }, a.beforeRenderPriorities.lyrTxrSkip);
  var i = /* @__PURE__ */ m$1(function(o, l) {
    return l.reqs - o.reqs;
  }, "qSort");
  t.layersQueue = new Ca(i), t.setupDequeueing();
}, "LayeredTextureCache"), tr = bu.prototype, qs = 0, rp = Math.pow(2, 53) - 1;
tr.makeLayer = function(r10, e) {
  var t = /* @__PURE__ */ Math.pow(2, e), a = /* @__PURE__ */ Math.ceil(r10.w * t), n = /* @__PURE__ */ Math.ceil(r10.h * t), i = /* @__PURE__ */ this.renderer.makeOffscreenCanvas(a, n), s = {
    id: qs = ++qs % rp,
    bb: r10,
    level: e,
    width: a,
    height: n,
    canvas: i,
    context: /* @__PURE__ */ i.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  }, o = s.context, l = -s.bb.x1, u = -s.bb.y1;
  return o.scale(t, t), o.translate(l, u), s;
};
tr.getLayers = function(r10, e, t) {
  var a = this, n = a.renderer, i = n.cy, s = /* @__PURE__ */ i.zoom(), o = a.firstGet;
  if (a.firstGet = false, t == null) {
    if (t = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ fi(s * e)), t < ua) t = ua;
    else if (s >= Wg || t > un) return null;
  }
  a.validateLayersElesOrdering(t, r10);
  var l = a.layersByLevel, u = /* @__PURE__ */ Math.pow(2, t), f = l[t] = l[t] || [], c, d = /* @__PURE__ */ a.levelIsComplete(t, r10), g, h = /* @__PURE__ */ m$1(function() {
    var L = /* @__PURE__ */ m$1(function(I) {
      if (a.validateLayersElesOrdering(I, r10), a.levelIsComplete(I, r10)) return g = l[I], true;
    }, "canUseAsTmpLvl"), B = /* @__PURE__ */ m$1(function(I) {
      if (!g) for (var R = t + I; ua <= R && R <= un && !L(R); R += I) ;
    }, "checkLvls");
    B(1), B(-1);
    for (var M = f.length - 1; M >= 0; M--) {
      var A = f[M];
      A.invalid && jr(f, A);
    }
  }, "checkTempLevels");
  if (!d) h();
  else return f;
  var m = /* @__PURE__ */ m$1(function() {
    if (!c) {
      c = /* @__PURE__ */ gr();
      for (var L = 0; L < r10.length; L++) go(c, /* @__PURE__ */ r10[L].boundingBox());
    }
    return c;
  }, "getBb"), y = /* @__PURE__ */ m$1(function(L) {
    L = L || {};
    var B = L.after;
    m();
    var M = c.w * u * (c.h * u);
    if (M > jg) return null;
    var A = /* @__PURE__ */ a.makeLayer(c, t);
    if (B != null) {
      var P = f.indexOf(B) + 1;
      f.splice(P, 0, A);
    } else (L.insert === void 0 || L.insert) && f.unshift(A);
    return A;
  }, "makeLayer");
  if (a.skipping && !o) return null;
  for (var p = null, b1 = r10.length / Kg, w = !o, x = 0; x < r10.length; x++) {
    var T = r10[x], C = T._private.rscratch, E = C.imgLayerCaches = C.imgLayerCaches || {}, k = E[t];
    if (k) {
      p = k;
      continue;
    }
    if ((!p || p.eles.length >= b1 || !po(p.bb, /* @__PURE__ */ T.boundingBox())) && (p = /* @__PURE__ */ y({
      insert: true,
      after: p
    }), !p)) return null;
    g || w ? a.queueLayer(p, T) : a.drawEleInLayer(p, T, t, e), p.eles.push(T), E[t] = p;
  }
  return g || (w ? null : f);
};
tr.getEleLevelForLayerLevel = function(r10, e) {
  return r10;
};
tr.drawEleInLayer = function(r10, e, t, a) {
  var n = this, i = this.renderer, s = r10.context, o = /* @__PURE__ */ e.boundingBox();
  o.w === 0 || o.h === 0 || !e.visible() || (t = /* @__PURE__ */ n.getEleLevelForLayerLevel(t, a), i.setImgSmoothing(s, false), i.drawCachedElement(s, e, null, null, t, ep), i.setImgSmoothing(s, true));
};
tr.levelIsComplete = function(r10, e) {
  var t = this, a = t.layersByLevel[r10];
  if (!a || a.length === 0) return false;
  for (var n = 0, i = 0; i < a.length; i++) {
    var s = a[i];
    if (s.reqs > 0 || s.invalid) return false;
    n += s.eles.length;
  }
  return n === e.length;
};
tr.validateLayersElesOrdering = function(r10, e) {
  var t = this.layersByLevel[r10];
  if (t) for (var a = 0; a < t.length; a++) {
    for (var n = t[a], i = -1, s = 0; s < e.length; s++) if (n.eles[0] === e[s]) {
      i = s;
      break;
    }
    if (i < 0) {
      this.invalidateLayer(n);
      continue;
    }
    for (var o = i, s = 0; s < n.eles.length; s++) if (n.eles[s] !== e[o + s]) {
      this.invalidateLayer(n);
      break;
    }
  }
};
tr.updateElementsInLayers = function(r10, e) {
  for (var t = this, a = /* @__PURE__ */ xa(r10[0]), n = 0; n < r10.length; n++) for (var i = a ? null : r10[n], s = a ? r10[n] : r10[n].ele, o = s._private.rscratch, l = o.imgLayerCaches = o.imgLayerCaches || {}, u = ua; u <= un; u++) {
    var f = l[u];
    f && (i && t.getEleLevelForLayerLevel(f.level) !== i.level || e(f, s, i));
  }
};
tr.haveLayers = function() {
  for (var r10 = this, e = false, t = ua; t <= un; t++) {
    var a = r10.layersByLevel[t];
    if (a && a.length > 0) {
      e = true;
      break;
    }
  }
  return e;
};
tr.invalidateElements = function(r10) {
  var e = this;
  r10.length !== 0 && (e.lastInvalidationTime = /* @__PURE__ */ $r(), !(r10.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(r10, /* @__PURE__ */ m$1(function(a, n, i) {
    e.invalidateLayer(a);
  }, "invalAssocLayers")));
};
tr.invalidateLayer = function(r10) {
  if (this.lastInvalidationTime = /* @__PURE__ */ $r(), !r10.invalid) {
    var e = r10.level, t = r10.eles, a = this.layersByLevel[e];
    jr(a, r10), r10.elesQueue = [], r10.invalid = true, r10.replacement && (r10.replacement.invalid = true);
    for (var n = 0; n < t.length; n++) {
      var i = t[n]._private.rscratch.imgLayerCaches;
      i && (i[e] = null);
    }
  }
};
tr.refineElementTextures = function(r10) {
  var e = this;
  e.updateElementsInLayers(r10, /* @__PURE__ */ m$1(function(a, n, i) {
    var s = a.replacement;
    if (s || (s = a.replacement = /* @__PURE__ */ e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs) for (var o = 0; o < s.eles.length; o++) e.queueLayer(s, s.eles[o]);
  }, "refineEachEle"));
};
tr.enqueueElementRefinement = function(r10) {
  this.eleTxrDeqs.merge(r10), this.scheduleElementRefinement();
};
tr.queueLayer = function(r10, e) {
  var t = this, a = t.layersQueue, n = r10.elesQueue, i = n.hasId = n.hasId || {};
  if (!r10.replacement) {
    if (e) {
      if (i[e.id()]) return;
      n.push(e), i[e.id()] = true;
    }
    r10.reqs ? (r10.reqs++, a.updateItem(r10)) : (r10.reqs = 1, a.push(r10));
  }
};
tr.dequeue = function(r10) {
  for (var e = this, t = e.layersQueue, a = [], n = 0; n < _g && t.size() !== 0; ) {
    var i = /* @__PURE__ */ t.peek();
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
    var s = /* @__PURE__ */ i.elesQueue.shift();
    s && (e.drawEleInLayer(i, s, i.level, r10), n++), a.length === 0 && a.push(true), i.elesQueue.length === 0 && (t.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
  }
  return a;
};
tr.applyLayerReplacement = function(r10) {
  var e = this, t = e.layersByLevel[r10.level], a = r10.replaces, n = /* @__PURE__ */ t.indexOf(a);
  if (!(n < 0 || a.invalid)) {
    t[n] = r10;
    for (var i = 0; i < r10.eles.length; i++) {
      var s = r10.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
      o && (o[r10.level] = r10);
    }
    e.requestRedraw();
  }
};
tr.requestRedraw = /* @__PURE__ */ fn(function() {
  var r10 = this.renderer;
  r10.redrawHint("eles", true), r10.redrawHint("drag", true), r10.redraw();
}, 100);
tr.setupDequeueing = /* @__PURE__ */ mu.setupDequeueing({
  deqRedrawThreshold: Ug,
  deqCost: Xg,
  deqAvgCost: Zg,
  deqNoDrawCost: Qg,
  deqFastCost: Jg,
  deq: /* @__PURE__ */ m$1(function(e, t) {
    return e.dequeue(t);
  }, "deq"),
  onDeqd: li,
  shouldRedraw: uo,
  priority: /* @__PURE__ */ m$1(function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }, "priority")
});
var wu = {}, $s;
function tp(r10, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    r10.lineTo(a.x, a.y);
  }
}
m$1(tp, "polygon");
function ap(r10, e, t) {
  for (var a, n = 0; n < e.length; n++) {
    var i = e[n];
    n === 0 && (a = i), r10.lineTo(i.x, i.y);
  }
  r10.quadraticCurveTo(t.x, t.y, a.x, a.y);
}
m$1(ap, "triangleBackcurve");
function Hs(r10, e, t) {
  r10.beginPath && r10.beginPath();
  for (var a = e, n = 0; n < a.length; n++) {
    var i = a[n];
    r10.lineTo(i.x, i.y);
  }
  var s = t, o = t[0];
  r10.moveTo(o.x, o.y);
  for (var n = 1; n < s.length; n++) {
    var i = s[n];
    r10.lineTo(i.x, i.y);
  }
  r10.closePath && r10.closePath();
}
m$1(Hs, "triangleTee");
function np(r10, e, t, a, n) {
  r10.beginPath && r10.beginPath(), r10.arc(t, a, n, 0, Math.PI * 2, false);
  var i = e, s = i[0];
  r10.moveTo(s.x, s.y);
  for (var o = 0; o < i.length; o++) {
    var l = i[o];
    r10.lineTo(l.x, l.y);
  }
  r10.closePath && r10.closePath();
}
m$1(np, "circleTriangle");
function ip(r10, e, t, a) {
  r10.arc(e, t, a, 0, Math.PI * 2, false);
}
m$1(ip, "circle");
wu.arrowShapeImpl = function(r10) {
  return ($s || ($s = {
    polygon: tp,
    "triangle-backcurve": ap,
    "triangle-tee": Hs,
    "circle-triangle": np,
    "triangle-cross": Hs,
    circle: ip
  }))[r10];
};
var Fr = {};
Fr.drawElement = function(r10, e, t, a, n, i) {
  var s = this;
  e.isNode() ? s.drawNode(r10, e, t, a, n, i) : s.drawEdge(r10, e, t, a, n, i);
};
Fr.drawElementOverlay = function(r10, e) {
  var t = this;
  e.isNode() ? t.drawNodeOverlay(r10, e) : t.drawEdgeOverlay(r10, e);
};
Fr.drawElementUnderlay = function(r10, e) {
  var t = this;
  e.isNode() ? t.drawNodeUnderlay(r10, e) : t.drawEdgeUnderlay(r10, e);
};
Fr.drawCachedElementPortion = function(r10, e, t, a, n, i, s, o) {
  var l = this, u = /* @__PURE__ */ t.getBoundingBox(e);
  if (!(u.w === 0 || u.h === 0)) {
    var f = /* @__PURE__ */ t.getElement(e, u, a, n, i);
    if (f != null) {
      var c = /* @__PURE__ */ o(l, e);
      if (c === 0) return;
      var d = /* @__PURE__ */ s(l, e), g = u.x1, h = u.y1, m = u.w, y = u.h, p, b1, w, x, T;
      if (d !== 0) {
        var C = /* @__PURE__ */ t.getRotationPoint(e);
        w = C.x, x = C.y, r10.translate(w, x), r10.rotate(d), T = /* @__PURE__ */ l.getImgSmoothing(r10), T || l.setImgSmoothing(r10, true);
        var E = /* @__PURE__ */ t.getRotationOffset(e);
        p = E.x, b1 = E.y;
      } else p = g, b1 = h;
      var k;
      c !== 1 && (k = r10.globalAlpha, r10.globalAlpha = k * c), r10.drawImage(f.texture.canvas, f.x, 0, f.width, f.height, p, b1, m, y), c !== 1 && (r10.globalAlpha = k), d !== 0 && (r10.rotate(-d), r10.translate(-w, -x), T || l.setImgSmoothing(r10, false));
    } else t.drawElement(r10, e);
  }
};
var sp = /* @__PURE__ */ m$1(function() {
  return 0;
}, "getZeroRotation"), op = /* @__PURE__ */ m$1(function(e, t) {
  return e.getTextAngle(t, null);
}, "getLabelRotation"), up = /* @__PURE__ */ m$1(function(e, t) {
  return e.getTextAngle(t, "source");
}, "getSourceLabelRotation"), lp = /* @__PURE__ */ m$1(function(e, t) {
  return e.getTextAngle(t, "target");
}, "getTargetLabelRotation"), vp = /* @__PURE__ */ m$1(function(e, t) {
  return t.effectiveOpacity();
}, "getOpacity"), qn = /* @__PURE__ */ m$1(function(e, t) {
  return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
}, "getTextOpacity");
Fr.drawCachedElement = function(r10, e, t, a, n, i) {
  var s = this, o = s.data, l = o.eleTxrCache, u = o.lblTxrCache, f = o.slbTxrCache, c = o.tlbTxrCache, d = /* @__PURE__ */ e.boundingBox(), g = i === true ? l.reasons.highQuality : null;
  if (!(d.w === 0 || d.h === 0 || !e.visible()) && (!a || ci(d, a))) {
    var h = /* @__PURE__ */ e.isEdge(), m = e.element()._private.rscratch.badLine;
    s.drawElementUnderlay(r10, e), s.drawCachedElementPortion(r10, e, l, t, n, g, sp, vp), (!h || !m) && s.drawCachedElementPortion(r10, e, u, t, n, g, op, qn), h && !m && (s.drawCachedElementPortion(r10, e, f, t, n, g, up, qn), s.drawCachedElementPortion(r10, e, c, t, n, g, lp, qn)), s.drawElementOverlay(r10, e);
  }
};
Fr.drawElements = function(r10, e) {
  for (var t = this, a = 0; a < e.length; a++) {
    var n = e[a];
    t.drawElement(r10, n);
  }
};
Fr.drawCachedElements = function(r10, e, t, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    n.drawCachedElement(r10, s, t, a);
  }
};
Fr.drawCachedNodes = function(r10, e, t, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    s.isNode() && n.drawCachedElement(r10, s, t, a);
  }
};
Fr.drawLayeredElements = function(r10, e, t, a) {
  var n = this, i = /* @__PURE__ */ n.data.lyrTxrCache.getLayers(e, t);
  if (i) for (var s = 0; s < i.length; s++) {
    var o = i[s], l = o.bb;
    l.w === 0 || l.h === 0 || r10.drawImage(o.canvas, l.x1, l.y1, l.w, l.h);
  }
  else n.drawCachedElements(r10, e, t, a);
};
var Wr = {};
Wr.drawEdge = function(r10, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o = e._private.rscratch;
  if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
    var l;
    t && (l = t, r10.translate(-l.x1, -l.y1));
    var u = i ? e.pstyle("opacity").value : 1, f = i ? e.pstyle("line-opacity").value : 1, c = e.pstyle("curve-style").value, d = e.pstyle("line-style").value, g = e.pstyle("width").pfValue, h = e.pstyle("line-cap").value, m = e.pstyle("line-outline-width").value, y = e.pstyle("line-outline-color").value, p = u * f, b1 = u * f, w = /* @__PURE__ */ m$1(function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
      c === "straight-triangle" ? (s.eleStrokeStyle(r10, e, I), s.drawEdgeTrianglePath(e, r10, o.allpts)) : (r10.lineWidth = g, r10.lineCap = h, s.eleStrokeStyle(r10, e, I), s.drawEdgePath(e, r10, o.allpts, d), r10.lineCap = "butt");
    }, "drawLine"), x = /* @__PURE__ */ m$1(function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
      if (r10.lineWidth = g + m, r10.lineCap = h, m > 0) s.colorStrokeStyle(r10, y[0], y[1], y[2], I);
      else {
        r10.lineCap = "butt";
        return;
      }
      c === "straight-triangle" ? s.drawEdgeTrianglePath(e, r10, o.allpts) : (s.drawEdgePath(e, r10, o.allpts, d), r10.lineCap = "butt");
    }, "drawLineOutline"), T = /* @__PURE__ */ m$1(function() {
      n && s.drawEdgeOverlay(r10, e);
    }, "drawOverlay"), C = /* @__PURE__ */ m$1(function() {
      n && s.drawEdgeUnderlay(r10, e);
    }, "drawUnderlay"), E = /* @__PURE__ */ m$1(function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b1;
      s.drawArrowheads(r10, e, I);
    }, "drawArrows"), k = /* @__PURE__ */ m$1(function() {
      s.drawElementText(r10, e, null, a);
    }, "drawText");
    r10.lineJoin = "round";
    var S = e.pstyle("ghost").value === "yes";
    if (S) {
      var L = e.pstyle("ghost-offset-x").pfValue, B = e.pstyle("ghost-offset-y").pfValue, M = e.pstyle("ghost-opacity").value, A = p * M;
      r10.translate(L, B), w(A), E(A), r10.translate(-L, -B);
    } else x();
    C(), w(), E(), T(), k(), t && r10.translate(l.x1, l.y1);
  }
};
var xu = /* @__PURE__ */ m$1(function(e) {
  if (![
    "overlay",
    "underlay"
  ].includes(e)) throw new Error("Invalid state");
  return function(t, a) {
    if (a.visible()) {
      var n = a.pstyle(/* @__PURE__ */ "".concat(e, "-opacity")).value;
      if (n !== 0) {
        var i = this, s = /* @__PURE__ */ i.usePaths(), o = a._private.rscratch, l = a.pstyle(/* @__PURE__ */ "".concat(e, "-padding")).pfValue, u = 2 * l, f = a.pstyle(/* @__PURE__ */ "".concat(e, "-color")).value;
        t.lineWidth = u, o.edgeType === "self" && !s ? t.lineCap = "butt" : t.lineCap = "round", i.colorStrokeStyle(t, f[0], f[1], f[2], n), i.drawEdgePath(a, t, o.allpts, "solid");
      }
    }
  };
}, "drawEdgeOverlayUnderlay");
Wr.drawEdgeOverlay = /* @__PURE__ */ xu("overlay");
Wr.drawEdgeUnderlay = /* @__PURE__ */ xu("underlay");
Wr.drawEdgePath = function(r10, e, t, a) {
  var n = r10._private.rscratch, i = e, s, o = false, l = /* @__PURE__ */ this.usePaths(), u = r10.pstyle("line-dash-pattern").pfValue, f = r10.pstyle("line-dash-offset").pfValue;
  if (l) {
    var c = /* @__PURE__ */ t.join("$"), d = n.pathCacheKey && n.pathCacheKey === c;
    d ? (s = e = n.pathCache, o = true) : (s = e = new Path2D(), n.pathCacheKey = c, n.pathCache = s);
  }
  if (i.setLineDash) switch (a) {
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
  if (!o && !n.badLine) switch (e.beginPath && e.beginPath(), e.moveTo(t[0], t[1]), n.edgeType) {
    case "bezier":
    case "self":
    case "compound":
    case "multibezier":
      for (var g = 2; g + 3 < t.length; g += 4) e.quadraticCurveTo(t[g], t[g + 1], t[g + 2], t[g + 3]);
      break;
    case "straight":
    case "haystack":
      for (var h = 2; h + 1 < t.length; h += 2) e.lineTo(t[h], t[h + 1]);
      break;
    case "segments":
      if (n.isRound) {
        var m = /* @__PURE__ */ Xs(n.roundCorners), y;
        try {
          for (m.s(); !(y = /* @__PURE__ */ m.n()).done; ) {
            var p = y.value;
            vu(e, p);
          }
        } catch (w) {
          m.e(w);
        } finally {
          m.f();
        }
        e.lineTo(t[t.length - 2], t[t.length - 1]);
      } else for (var b1 = 2; b1 + 1 < t.length; b1 += 2) e.lineTo(t[b1], t[b1 + 1]);
      break;
  }
  e = i, l ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
Wr.drawEdgeTrianglePath = function(r10, e, t) {
  e.fillStyle = e.strokeStyle;
  for (var a = r10.pstyle("width").pfValue, n = 0; n + 1 < t.length; n += 2) {
    var i = [
      t[n + 2] - t[n],
      t[n + 3] - t[n + 1]
    ], s = /* @__PURE__ */ Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [
      i[1] / s,
      -i[0] / s
    ], l = [
      o[0] * a / 2,
      o[1] * a / 2
    ];
    e.beginPath(), e.moveTo(t[n] - l[0], t[n + 1] - l[1]), e.lineTo(t[n] + l[0], t[n + 1] + l[1]), e.lineTo(t[n + 2], t[n + 3]), e.closePath(), e.fill();
  }
};
Wr.drawArrowheads = function(r10, e, t) {
  var a = e._private.rscratch, n = a.edgeType === "haystack";
  n || this.drawArrowhead(r10, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, t), this.drawArrowhead(r10, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, t), this.drawArrowhead(r10, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, t), n || this.drawArrowhead(r10, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, t);
};
Wr.drawArrowhead = function(r10, e, t, a, n, i, s) {
  if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
    var o = this, l = e.pstyle(t + "-arrow-shape").value;
    if (l !== "none") {
      var u = e.pstyle(t + "-arrow-fill").value === "hollow" ? "both" : "filled", f = e.pstyle(t + "-arrow-fill").value, c = e.pstyle("width").pfValue, d = /* @__PURE__ */ e.pstyle(t + "-arrow-width"), g = d.value === "match-line" ? c : d.pfValue;
      d.units === "%" && (g *= c);
      var h = e.pstyle("opacity").value;
      s === void 0 && (s = h);
      var m = r10.globalCompositeOperation;
      (s !== 1 || f === "hollow") && (r10.globalCompositeOperation = "destination-out", o.colorFillStyle(r10, 255, 255, 255, 1), o.colorStrokeStyle(r10, 255, 255, 255, 1), o.drawArrowShape(e, r10, u, c, l, g, a, n, i), r10.globalCompositeOperation = m);
      var y = e.pstyle(t + "-arrow-color").value;
      o.colorFillStyle(r10, y[0], y[1], y[2], s), o.colorStrokeStyle(r10, y[0], y[1], y[2], s), o.drawArrowShape(e, r10, f, c, l, g, a, n, i);
    }
  }
};
Wr.drawArrowShape = function(r10, e, t, a, n, i, s, o, l) {
  var u = this, f = this.usePaths() && n !== "triangle-cross", c = false, d, g = e, h = {
    x: s,
    y: o
  }, m = r10.pstyle("arrow-scale").value, y = /* @__PURE__ */ this.getArrowWidth(a, m), p = u.arrowShapes[n];
  if (f) {
    var b1 = u.arrowPathCache = u.arrowPathCache || [], w = /* @__PURE__ */ dt(n), x = b1[w];
    x != null ? (d = e = x, c = true) : (d = e = new Path2D(), b1[w] = d);
  }
  c || (e.beginPath && e.beginPath(), f ? p.draw(e, 1, 0, {
    x: 0,
    y: 0
  }, 1) : p.draw(e, y, l, h, a), e.closePath && e.closePath()), e = g, f && (e.translate(s, o), e.rotate(l), e.scale(y, y)), (t === "filled" || t === "both") && (f ? e.fill(d) : e.fill()), (t === "hollow" || t === "both") && (e.lineWidth = i / (f ? y : 1), e.lineJoin = "miter", f ? e.stroke(d) : e.stroke()), f && (e.scale(1 / y, 1 / y), e.rotate(-l), e.translate(-s, -o));
};
var ki = {};
ki.safeDrawImage = function(r10, e, t, a, n, i, s, o, l, u) {
  if (!(n <= 0 || i <= 0 || l <= 0 || u <= 0)) try {
    r10.drawImage(e, t, a, n, i, s, o, l, u);
  } catch (f) {
    Le(f);
  }
};
ki.drawInscribedImage = function(r10, e, t, a, n) {
  var i = this, s = /* @__PURE__ */ t.position(), o = s.x, l = s.y, u = /* @__PURE__ */ t.cy().style(), f = /* @__PURE__ */ u.getIndexedStyle.bind(u), c = /* @__PURE__ */ f(t, "background-fit", "value", a), d = /* @__PURE__ */ f(t, "background-repeat", "value", a), g = /* @__PURE__ */ t.width(), h = /* @__PURE__ */ t.height(), m = t.padding() * 2, y = g + (f(t, "background-width-relative-to", "value", a) === "inner" ? 0 : m), p = h + (f(t, "background-height-relative-to", "value", a) === "inner" ? 0 : m), b1 = t._private.rscratch, w = /* @__PURE__ */ f(t, "background-clip", "value", a), x = w === "node", T = f(t, "background-image-opacity", "value", a) * n, C = /* @__PURE__ */ f(t, "background-image-smoothing", "value", a), E = t.pstyle("corner-radius").value;
  E !== "auto" && (E = t.pstyle("corner-radius").pfValue);
  var k = e.width || e.cachedW, S = e.height || e.cachedH;
  (k == null || S == null) && (document.body.appendChild(e), k = e.cachedW = e.width || e.offsetWidth, S = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
  var L = k, B = S;
  if (f(t, "background-width", "value", a) !== "auto" && (f(t, "background-width", "units", a) === "%" ? L = f(t, "background-width", "pfValue", a) * y : L = /* @__PURE__ */ f(t, "background-width", "pfValue", a)), f(t, "background-height", "value", a) !== "auto" && (f(t, "background-height", "units", a) === "%" ? B = f(t, "background-height", "pfValue", a) * p : B = /* @__PURE__ */ f(t, "background-height", "pfValue", a)), !(L === 0 || B === 0)) {
    if (c === "contain") {
      var M = /* @__PURE__ */ Math.min(y / L, p / B);
      L *= M, B *= M;
    } else if (c === "cover") {
      var M = /* @__PURE__ */ Math.max(y / L, p / B);
      L *= M, B *= M;
    }
    var A = o - y / 2, P = /* @__PURE__ */ f(t, "background-position-x", "units", a), I = /* @__PURE__ */ f(t, "background-position-x", "pfValue", a);
    P === "%" ? A += (y - L) * I : A += I;
    var R = /* @__PURE__ */ f(t, "background-offset-x", "units", a), O = /* @__PURE__ */ f(t, "background-offset-x", "pfValue", a);
    R === "%" ? A += (y - L) * O : A += O;
    var z = l - p / 2, $ = /* @__PURE__ */ f(t, "background-position-y", "units", a), H = /* @__PURE__ */ f(t, "background-position-y", "pfValue", a);
    $ === "%" ? z += (p - B) * H : z += H;
    var V = /* @__PURE__ */ f(t, "background-offset-y", "units", a), F = /* @__PURE__ */ f(t, "background-offset-y", "pfValue", a);
    V === "%" ? z += (p - B) * F : z += F, b1.pathCache && (A -= o, z -= l, o = 0, l = 0);
    var U = r10.globalAlpha;
    r10.globalAlpha = T;
    var J = /* @__PURE__ */ i.getImgSmoothing(r10), j = false;
    if (C === "no" && J ? (i.setImgSmoothing(r10, false), j = true) : C === "yes" && !J && (i.setImgSmoothing(r10, true), j = true), d === "no-repeat") x && (r10.save(), b1.pathCache ? r10.clip(b1.pathCache) : (i.nodeShapes[i.getNodeShape(t)].draw(r10, o, l, y, p, E, b1), r10.clip())), i.safeDrawImage(r10, e, 0, 0, k, S, A, z, L, B), x && r10.restore();
    else {
      var ee = /* @__PURE__ */ r10.createPattern(e, d);
      r10.fillStyle = ee, i.nodeShapes[i.getNodeShape(t)].draw(r10, o, l, y, p, E, b1), r10.translate(A, z), r10.fill(), r10.translate(-A, -z);
    }
    r10.globalAlpha = U, j && i.setImgSmoothing(r10, J);
  }
};
var wt = {};
wt.eleTextBiggerThanMin = function(r10, e) {
  if (!e) {
    var t = /* @__PURE__ */ r10.cy().zoom(), a = /* @__PURE__ */ this.getPixelRatio(), n = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ fi(t * a));
    e = /* @__PURE__ */ Math.pow(2, n);
  }
  var i = r10.pstyle("font-size").pfValue * e, s = r10.pstyle("min-zoomed-font-size").pfValue;
  return !(i < s);
};
wt.drawElementText = function(r10, e, t, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this;
  if (a == null) {
    if (i && !s.eleTextBiggerThanMin(e)) return;
  } else if (a === false) return;
  if (e.isNode()) {
    var o = /* @__PURE__ */ e.pstyle("label");
    if (!o || !o.value) return;
    var l = /* @__PURE__ */ s.getLabelJustification(e);
    r10.textAlign = l, r10.textBaseline = "bottom";
  } else {
    var u = e.element()._private.rscratch.badLine, f = /* @__PURE__ */ e.pstyle("label"), c = /* @__PURE__ */ e.pstyle("source-label"), d = /* @__PURE__ */ e.pstyle("target-label");
    if (u || (!f || !f.value) && (!c || !c.value) && (!d || !d.value)) return;
    r10.textAlign = "center", r10.textBaseline = "bottom";
  }
  var g = !t, h;
  t && (h = t, r10.translate(-h.x1, -h.y1)), n == null ? (s.drawText(r10, e, null, g, i), e.isEdge() && (s.drawText(r10, e, "source", g, i), s.drawText(r10, e, "target", g, i))) : s.drawText(r10, e, n, g, i), t && r10.translate(h.x1, h.y1);
};
wt.getFontCache = function(r10) {
  var e;
  this.fontCaches = this.fontCaches || [];
  for (var t = 0; t < this.fontCaches.length; t++) if (e = this.fontCaches[t], e.context === r10) return e;
  return e = {
    context: r10
  }, this.fontCaches.push(e), e;
};
wt.setupTextStyle = function(r10, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = t ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, l = e.pstyle("text-outline-opacity").value * o, u = e.pstyle("color").value, f = e.pstyle("text-outline-color").value;
  r10.font = a + " " + s + " " + n + " " + i, r10.lineJoin = "round", this.colorFillStyle(r10, u[0], u[1], u[2], o), this.colorStrokeStyle(r10, f[0], f[1], f[2], l);
};
function $n(r10, e, t, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = arguments.length > 6 ? arguments[6] : void 0;
  r10.beginPath(), r10.moveTo(e + i, t), r10.lineTo(e + a - i, t), r10.quadraticCurveTo(e + a, t, e + a, t + i), r10.lineTo(e + a, t + n - i), r10.quadraticCurveTo(e + a, t + n, e + a - i, t + n), r10.lineTo(e + i, t + n), r10.quadraticCurveTo(e, t + n, e, t + n - i), r10.lineTo(e, t + i), r10.quadraticCurveTo(e, t, e + i, t), r10.closePath(), s ? r10.stroke() : r10.fill();
}
m$1($n, "roundRect");
wt.getTextAngle = function(r10, e) {
  var t, a = r10._private, n = a.rscratch, i = e ? e + "-" : "", s = /* @__PURE__ */ r10.pstyle(i + "text-rotation"), o = /* @__PURE__ */ Pr(n, "labelAngle", e);
  return s.strValue === "autorotate" ? t = r10.isEdge() ? o : 0 : s.strValue === "none" ? t = 0 : t = s.pfValue, t;
};
wt.drawText = function(r10, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
  if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
    t === "main" && (t = null);
    var l = /* @__PURE__ */ Pr(s, "labelX", t), u = /* @__PURE__ */ Pr(s, "labelY", t), f, c, d = /* @__PURE__ */ this.getLabelText(e, t);
    if (d != null && d !== "" && !isNaN(l) && !isNaN(u)) {
      this.setupTextStyle(r10, e, n);
      var g = t ? t + "-" : "", h = /* @__PURE__ */ Pr(s, "labelWidth", t), m = /* @__PURE__ */ Pr(s, "labelHeight", t), y = e.pstyle(g + "text-margin-x").pfValue, p = e.pstyle(g + "text-margin-y").pfValue, b1 = /* @__PURE__ */ e.isEdge(), w = e.pstyle("text-halign").value, x = e.pstyle("text-valign").value;
      b1 && (w = "center", x = "center"), l += y, u += p;
      var T;
      switch (a ? T = /* @__PURE__ */ this.getTextAngle(e, t) : T = 0, T !== 0 && (f = l, c = u, r10.translate(f, c), r10.rotate(T), l = 0, u = 0), x) {
        case "top":
          break;
        case "center":
          u += m / 2;
          break;
        case "bottom":
          u += m;
          break;
      }
      var C = e.pstyle("text-background-opacity").value, E = e.pstyle("text-border-opacity").value, k = e.pstyle("text-border-width").pfValue, S = e.pstyle("text-background-padding").pfValue, L = e.pstyle("text-background-shape").strValue, B = L.indexOf("round") === 0, M = 2;
      if (C > 0 || k > 0 && E > 0) {
        var A = l - S;
        switch (w) {
          case "left":
            A -= h;
            break;
          case "center":
            A -= h / 2;
            break;
        }
        var P = u - m - S, I = h + 2 * S, R = m + 2 * S;
        if (C > 0) {
          var O = r10.fillStyle, z = e.pstyle("text-background-color").value;
          r10.fillStyle = "rgba(" + z[0] + "," + z[1] + "," + z[2] + "," + C * o + ")", B ? $n(r10, A, P, I, R, M) : r10.fillRect(A, P, I, R), r10.fillStyle = O;
        }
        if (k > 0 && E > 0) {
          var $ = r10.strokeStyle, H = r10.lineWidth, V = e.pstyle("text-border-color").value, F = e.pstyle("text-border-style").value;
          if (r10.strokeStyle = "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + E * o + ")", r10.lineWidth = k, r10.setLineDash) switch (F) {
            case "dotted":
              r10.setLineDash([
                1,
                1
              ]);
              break;
            case "dashed":
              r10.setLineDash([
                4,
                2
              ]);
              break;
            case "double":
              r10.lineWidth = k / 4, r10.setLineDash([]);
              break;
            case "solid":
              r10.setLineDash([]);
              break;
          }
          if (B ? $n(r10, A, P, I, R, M, "stroke") : r10.strokeRect(A, P, I, R), F === "double") {
            var U = k / 2;
            B ? $n(r10, A + U, P + U, I - U * 2, R - U * 2, M, "stroke") : r10.strokeRect(A + U, P + U, I - U * 2, R - U * 2);
          }
          r10.setLineDash && r10.setLineDash([]), r10.lineWidth = H, r10.strokeStyle = $;
        }
      }
      var J = 2 * e.pstyle("text-outline-width").pfValue;
      if (J > 0 && (r10.lineWidth = J), e.pstyle("text-wrap").value === "wrap") {
        var j = /* @__PURE__ */ Pr(s, "labelWrapCachedLines", t), ee = /* @__PURE__ */ Pr(s, "labelLineHeight", t), re = h / 2, Y = /* @__PURE__ */ this.getLabelJustification(e);
        switch (Y === "auto" || (w === "left" ? Y === "left" ? l += -h : Y === "center" && (l += -re) : w === "center" ? Y === "left" ? l += -re : Y === "right" && (l += re) : w === "right" && (Y === "center" ? l += re : Y === "right" && (l += h))), x) {
          case "top":
            u -= (j.length - 1) * ee;
            break;
          case "center":
          case "bottom":
            u -= (j.length - 1) * ee;
            break;
        }
        for (var N = 0; N < j.length; N++) J > 0 && r10.strokeText(j[N], l, u), r10.fillText(j[N], l, u), u += ee;
      } else J > 0 && r10.strokeText(d, l, u), r10.fillText(d, l, u);
      T !== 0 && (r10.rotate(-T), r10.translate(-f, -c));
    }
  }
};
var Xt = {};
Xt.drawNode = function(r10, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o, l, u = e._private, f = u.rscratch, c = /* @__PURE__ */ e.position();
  if (!(!ie(c.x) || !ie(c.y)) && !(i && !e.visible())) {
    var d = i ? e.effectiveOpacity() : 1, g = /* @__PURE__ */ s.usePaths(), h, m = false, y = /* @__PURE__ */ e.padding();
    o = e.width() + 2 * y, l = e.height() + 2 * y;
    var p;
    t && (p = t, r10.translate(-p.x1, -p.y1));
    for (var b1 = /* @__PURE__ */ e.pstyle("background-image"), w = b1.value, x = new Array(w.length), T = new Array(w.length), C = 0, E = 0; E < w.length; E++) {
      var k = w[E], S = x[E] = k != null && k !== "none";
      if (S) {
        var L = /* @__PURE__ */ e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", E);
        C++, T[E] = /* @__PURE__ */ s.getCachedImage(k, L, function() {
          u.backgroundTimestamp = /* @__PURE__ */ Date.now(), e.emitAndNotify("background");
        });
      }
    }
    var B = e.pstyle("background-blacken").value, M = e.pstyle("border-width").pfValue, A = e.pstyle("background-opacity").value * d, P = e.pstyle("border-color").value, I = e.pstyle("border-style").value, R = e.pstyle("border-join").value, O = e.pstyle("border-cap").value, z = e.pstyle("border-position").value, $ = e.pstyle("border-dash-pattern").pfValue, H = e.pstyle("border-dash-offset").pfValue, V = e.pstyle("border-opacity").value * d, F = e.pstyle("outline-width").pfValue, U = e.pstyle("outline-color").value, J = e.pstyle("outline-style").value, j = e.pstyle("outline-opacity").value * d, ee = e.pstyle("outline-offset").value, re = e.pstyle("corner-radius").value;
    re !== "auto" && (re = e.pstyle("corner-radius").pfValue);
    var Y = /* @__PURE__ */ m$1(function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : A;
      s.eleFillStyle(r10, e, ae);
    }, "setupShapeColor"), N = /* @__PURE__ */ m$1(function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : V;
      s.colorStrokeStyle(r10, P[0], P[1], P[2], ae);
    }, "setupBorderColor"), X = /* @__PURE__ */ m$1(function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : j;
      s.colorStrokeStyle(r10, U[0], U[1], U[2], ae);
    }, "setupOutlineColor"), Z = /* @__PURE__ */ m$1(function(ae, W, te, me) {
      var be = s.nodePathCache = s.nodePathCache || [], ce = /* @__PURE__ */ oo(te === "polygon" ? te + "," + me.join(",") : te, "" + W, "" + ae, "" + re), xe = be[ce], ve, pe = false;
      return xe != null ? (ve = xe, pe = true, f.pathCache = ve) : (ve = new Path2D(), be[ce] = f.pathCache = ve), {
        path: ve,
        cacheHit: pe
      };
    }, "getPath"), oe = e.pstyle("shape").strValue, ge = e.pstyle("shape-polygon-points").pfValue;
    if (g) {
      r10.translate(c.x, c.y);
      var ne = /* @__PURE__ */ Z(o, l, oe, ge);
      h = ne.path, m = ne.cacheHit;
    }
    var se = /* @__PURE__ */ m$1(function() {
      if (!m) {
        var ae = c;
        g && (ae = {
          x: 0,
          y: 0
        }), s.nodeShapes[s.getNodeShape(e)].draw(h || r10, ae.x, ae.y, o, l, re, f);
      }
      g ? r10.fill(h) : r10.fill();
    }, "drawShape"), le = /* @__PURE__ */ m$1(function() {
      for (var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, te = u.backgrounding, me = 0, be = 0; be < T.length; be++) {
        var ce = /* @__PURE__ */ e.cy().style().getIndexedStyle(e, "background-image-containment", "value", be);
        if (W && ce === "over" || !W && ce === "inside") {
          me++;
          continue;
        }
        x[be] && T[be].complete && !T[be].error && (me++, s.drawInscribedImage(r10, T[be], e, be, ae));
      }
      u.backgrounding = me !== C, te !== u.backgrounding && e.updateStyle(false);
    }, "drawImages"), de = /* @__PURE__ */ m$1(function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
      s.hasPie(e) && (s.drawPie(r10, e, W), ae && (g || s.nodeShapes[s.getNodeShape(e)].draw(r10, c.x, c.y, o, l, re, f)));
    }, "drawPie"), fe = /* @__PURE__ */ m$1(function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, W = (B > 0 ? B : -B) * ae, te = B > 0 ? 0 : 255;
      B !== 0 && (s.colorFillStyle(r10, te, te, te, W), g ? r10.fill(h) : r10.fill());
    }, "darken"), ye = /* @__PURE__ */ m$1(function() {
      if (M > 0) {
        if (r10.lineWidth = M, r10.lineCap = O, r10.lineJoin = R, r10.setLineDash) switch (I) {
          case "dotted":
            r10.setLineDash([
              1,
              1
            ]);
            break;
          case "dashed":
            r10.setLineDash($), r10.lineDashOffset = H;
            break;
          case "solid":
          case "double":
            r10.setLineDash([]);
            break;
        }
        if (z !== "center") {
          if (r10.save(), r10.lineWidth *= 2, z === "inside") g ? r10.clip(h) : r10.clip();
          else {
            var ae = new Path2D();
            ae.rect(-o / 2 - M, -l / 2 - M, o + 2 * M, l + 2 * M), ae.addPath(h), r10.clip(ae, "evenodd");
          }
          g ? r10.stroke(h) : r10.stroke(), r10.restore();
        } else g ? r10.stroke(h) : r10.stroke();
        if (I === "double") {
          r10.lineWidth = M / 3;
          var W = r10.globalCompositeOperation;
          r10.globalCompositeOperation = "destination-out", g ? r10.stroke(h) : r10.stroke(), r10.globalCompositeOperation = W;
        }
        r10.setLineDash && r10.setLineDash([]);
      }
    }, "drawBorder"), Be = /* @__PURE__ */ m$1(function() {
      if (F > 0) {
        if (r10.lineWidth = F, r10.lineCap = "butt", r10.setLineDash) switch (J) {
          case "dotted":
            r10.setLineDash([
              1,
              1
            ]);
            break;
          case "dashed":
            r10.setLineDash([
              4,
              2
            ]);
            break;
          case "solid":
          case "double":
            r10.setLineDash([]);
            break;
        }
        var ae = c;
        g && (ae = {
          x: 0,
          y: 0
        });
        var W = /* @__PURE__ */ s.getNodeShape(e), te = M;
        z === "inside" && (te = 0), z === "outside" && (te *= 2);
        var me = (o + te + (F + ee)) / o, be = (l + te + (F + ee)) / l, ce = o * me, xe = l * be, ve = s.nodeShapes[W].points, pe;
        if (g) {
          var Fe = /* @__PURE__ */ Z(ce, xe, W, ve);
          pe = Fe.path;
        }
        if (W === "ellipse") s.drawEllipsePath(pe || r10, ae.x, ae.y, ce, xe);
        else if ([
          "round-diamond",
          "round-heptagon",
          "round-hexagon",
          "round-octagon",
          "round-pentagon",
          "round-polygon",
          "round-triangle",
          "round-tag"
        ].includes(W)) {
          var Re = 0, lr = 0, Qe = 0;
          W === "round-diamond" ? Re = (te + ee + F) * 1.4 : W === "round-heptagon" ? (Re = (te + ee + F) * 1.075, Qe = -(te / 2 + ee + F) / 35) : W === "round-hexagon" ? Re = (te + ee + F) * 1.12 : W === "round-pentagon" ? (Re = (te + ee + F) * 1.13, Qe = -(te / 2 + ee + F) / 15) : W === "round-tag" ? (Re = (te + ee + F) * 1.12, lr = (te / 2 + F + ee) * 0.07) : W === "round-triangle" && (Re = (te + ee + F) * (Math.PI / 2), Qe = -(te + ee / 2 + F) / Math.PI), Re !== 0 && (me = (o + Re) / o, ce = o * me, [
            "round-hexagon",
            "round-tag"
          ].includes(W) || (be = (l + Re) / l, xe = l * be)), re = re === "auto" ? bo(ce, xe) : re;
          for (var He = ce / 2, cr = xe / 2, Je = re + (te + F + ee) / 2, vr = new Array(ve.length / 2), Er = new Array(ve.length / 2), mr = 0; mr < ve.length / 2; mr++) vr[mr] = {
            x: ae.x + lr + He * ve[mr * 2],
            y: ae.y + Qe + cr * ve[mr * 2 + 1]
          };
          var dr, Mr, Vr, Cr, Ge = vr.length;
          for (Mr = vr[Ge - 1], dr = 0; dr < Ge; dr++) Vr = vr[dr % Ge], Cr = vr[(dr + 1) % Ge], Er[dr] = /* @__PURE__ */ Ti(Mr, Vr, Cr, Je), Mr = Vr, Vr = Cr;
          s.drawRoundPolygonPath(pe || r10, ae.x + lr, ae.y + Qe, o * me, l * be, ve, Er);
        } else if ([
          "roundrectangle",
          "round-rectangle"
        ].includes(W)) re = re === "auto" ? gt(ce, xe) : re, s.drawRoundRectanglePath(pe || r10, ae.x, ae.y, ce, xe, re + (te + F + ee) / 2);
        else if ([
          "cutrectangle",
          "cut-rectangle"
        ].includes(W)) re = re === "auto" ? di() : re, s.drawCutRectanglePath(pe || r10, ae.x, ae.y, ce, xe, null, re + (te + F + ee) / 4);
        else if ([
          "bottomroundrectangle",
          "bottom-round-rectangle"
        ].includes(W)) re = re === "auto" ? gt(ce, xe) : re, s.drawBottomRoundRectanglePath(pe || r10, ae.x, ae.y, ce, xe, re + (te + F + ee) / 2);
        else if (W === "barrel") s.drawBarrelPath(pe || r10, ae.x, ae.y, ce, xe);
        else if (W.startsWith("polygon") || [
          "rhomboid",
          "right-rhomboid",
          "round-tag",
          "tag",
          "vee"
        ].includes(W)) {
          var Xe = (te + F + ee) / o;
          ve = /* @__PURE__ */ en(/* @__PURE__ */ rn(ve, Xe)), s.drawPolygonPath(pe || r10, ae.x, ae.y, o, l, ve);
        } else {
          var ar = (te + F + ee) / o;
          ve = /* @__PURE__ */ en(/* @__PURE__ */ rn(ve, -ar)), s.drawPolygonPath(pe || r10, ae.x, ae.y, o, l, ve);
        }
        if (g ? r10.stroke(pe) : r10.stroke(), J === "double") {
          r10.lineWidth = te / 3;
          var xt = r10.globalCompositeOperation;
          r10.globalCompositeOperation = "destination-out", g ? r10.stroke(pe) : r10.stroke(), r10.globalCompositeOperation = xt;
        }
        r10.setLineDash && r10.setLineDash([]);
      }
    }, "drawOutline"), Ce = /* @__PURE__ */ m$1(function() {
      n && s.drawNodeOverlay(r10, e, c, o, l);
    }, "drawOverlay"), Ee = /* @__PURE__ */ m$1(function() {
      n && s.drawNodeUnderlay(r10, e, c, o, l);
    }, "drawUnderlay"), De = /* @__PURE__ */ m$1(function() {
      s.drawElementText(r10, e, null, a);
    }, "drawText"), _ = e.pstyle("ghost").value === "yes";
    if (_) {
      var D = e.pstyle("ghost-offset-x").pfValue, q = e.pstyle("ghost-offset-y").pfValue, Q = e.pstyle("ghost-opacity").value, K = Q * d;
      r10.translate(D, q), X(), Be(), Y(Q * A), se(), le(K, true), N(Q * V), ye(), de(B !== 0 || M !== 0), le(K, false), fe(K), r10.translate(-D, -q);
    }
    g && r10.translate(-c.x, -c.y), Ee(), g && r10.translate(c.x, c.y), X(), Be(), Y(), se(), le(d, true), N(), ye(), de(B !== 0 || M !== 0), le(d, false), fe(), g && r10.translate(-c.x, -c.y), De(), Ce(), t && r10.translate(p.x1, p.y1);
  }
};
var Eu = /* @__PURE__ */ m$1(function(e) {
  if (![
    "overlay",
    "underlay"
  ].includes(e)) throw new Error("Invalid state");
  return function(t, a, n, i, s) {
    var o = this;
    if (a.visible()) {
      var l = a.pstyle(/* @__PURE__ */ "".concat(e, "-padding")).pfValue, u = a.pstyle(/* @__PURE__ */ "".concat(e, "-opacity")).value, f = a.pstyle(/* @__PURE__ */ "".concat(e, "-color")).value, c = a.pstyle(/* @__PURE__ */ "".concat(e, "-shape")).value, d = a.pstyle(/* @__PURE__ */ "".concat(e, "-corner-radius")).value;
      if (u > 0) {
        if (n = n || a.position(), i == null || s == null) {
          var g = /* @__PURE__ */ a.padding();
          i = a.width() + 2 * g, s = a.height() + 2 * g;
        }
        o.colorFillStyle(t, f[0], f[1], f[2], u), o.nodeShapes[c].draw(t, n.x, n.y, i + l * 2, s + l * 2, d), t.fill();
      }
    }
  };
}, "drawNodeOverlayUnderlay");
Xt.drawNodeOverlay = /* @__PURE__ */ Eu("overlay");
Xt.drawNodeUnderlay = /* @__PURE__ */ Eu("underlay");
Xt.hasPie = function(r10) {
  return r10 = r10[0], r10._private.hasPie;
};
Xt.drawPie = function(r10, e, t, a) {
  e = e[0], a = a || e.position();
  var n = /* @__PURE__ */ e.cy().style(), i = /* @__PURE__ */ e.pstyle("pie-size"), s = a.x, o = a.y, l = /* @__PURE__ */ e.width(), u = /* @__PURE__ */ e.height(), f = Math.min(l, u) / 2, c = 0, d = /* @__PURE__ */ this.usePaths();
  d && (s = 0, o = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2);
  for (var g = 1; g <= n.pieBackgroundN; g++) {
    var h = e.pstyle("pie-" + g + "-background-size").value, m = e.pstyle("pie-" + g + "-background-color").value, y = e.pstyle("pie-" + g + "-background-opacity").value * t, p = h / 100;
    p + c > 1 && (p = 1 - c);
    var b1 = 1.5 * Math.PI + 2 * Math.PI * c, w = 2 * Math.PI * p, x = b1 + w;
    h === 0 || c >= 1 || c + p > 1 || (r10.beginPath(), r10.moveTo(s, o), r10.arc(s, o, f, b1, x), r10.closePath(), this.colorFillStyle(r10, m[0], m[1], m[2], y), r10.fill(), c += p);
  }
};
var yr = {}, fp = 100;
yr.getPixelRatio = function() {
  var r10 = this.data.contexts[0];
  if (this.forcedPixelRatio != null) return this.forcedPixelRatio;
  var e = /* @__PURE__ */ this.cy.window(), t = r10.backingStorePixelRatio || r10.webkitBackingStorePixelRatio || r10.mozBackingStorePixelRatio || r10.msBackingStorePixelRatio || r10.oBackingStorePixelRatio || r10.backingStorePixelRatio || 1;
  return (e.devicePixelRatio || 1) / t;
};
yr.paintCache = function(r10) {
  for (var e = this.paintCaches = this.paintCaches || [], t = true, a, n = 0; n < e.length; n++) if (a = e[n], a.context === r10) {
    t = false;
    break;
  }
  return t && (a = {
    context: r10
  }, e.push(a)), a;
};
yr.createGradientStyleFor = function(r10, e, t, a, n) {
  var i, s = /* @__PURE__ */ this.usePaths(), o = t.pstyle(e + "-gradient-stop-colors").value, l = t.pstyle(e + "-gradient-stop-positions").pfValue;
  if (a === "radial-gradient") if (t.isEdge()) {
    var u = /* @__PURE__ */ t.sourceEndpoint(), f = /* @__PURE__ */ t.targetEndpoint(), c = /* @__PURE__ */ t.midpoint(), d = /* @__PURE__ */ ht(u, c), g = /* @__PURE__ */ ht(f, c);
    i = /* @__PURE__ */ r10.createRadialGradient(c.x, c.y, 0, c.x, c.y, /* @__PURE__ */ Math.max(d, g));
  } else {
    var h = s ? {
      x: 0,
      y: 0
    } : t.position(), m = /* @__PURE__ */ t.paddedWidth(), y = /* @__PURE__ */ t.paddedHeight();
    i = /* @__PURE__ */ r10.createRadialGradient(h.x, h.y, 0, h.x, h.y, /* @__PURE__ */ Math.max(m, y));
  }
  else if (t.isEdge()) {
    var p = /* @__PURE__ */ t.sourceEndpoint(), b1 = /* @__PURE__ */ t.targetEndpoint();
    i = /* @__PURE__ */ r10.createLinearGradient(p.x, p.y, b1.x, b1.y);
  } else {
    var w = s ? {
      x: 0,
      y: 0
    } : t.position(), x = /* @__PURE__ */ t.paddedWidth(), T = /* @__PURE__ */ t.paddedHeight(), C = x / 2, E = T / 2, k = t.pstyle("background-gradient-direction").value;
    switch (k) {
      case "to-bottom":
        i = /* @__PURE__ */ r10.createLinearGradient(w.x, w.y - E, w.x, w.y + E);
        break;
      case "to-top":
        i = /* @__PURE__ */ r10.createLinearGradient(w.x, w.y + E, w.x, w.y - E);
        break;
      case "to-left":
        i = /* @__PURE__ */ r10.createLinearGradient(w.x + C, w.y, w.x - C, w.y);
        break;
      case "to-right":
        i = /* @__PURE__ */ r10.createLinearGradient(w.x - C, w.y, w.x + C, w.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = /* @__PURE__ */ r10.createLinearGradient(w.x - C, w.y - E, w.x + C, w.y + E);
        break;
      case "to-top-right":
      case "to-right-top":
        i = /* @__PURE__ */ r10.createLinearGradient(w.x - C, w.y + E, w.x + C, w.y - E);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = /* @__PURE__ */ r10.createLinearGradient(w.x + C, w.y - E, w.x - C, w.y + E);
        break;
      case "to-top-left":
      case "to-left-top":
        i = /* @__PURE__ */ r10.createLinearGradient(w.x + C, w.y + E, w.x - C, w.y - E);
        break;
    }
  }
  if (!i) return null;
  for (var S = l.length === o.length, L = o.length, B = 0; B < L; B++) i.addColorStop(S ? l[B] : B / (L - 1), "rgba(" + o[B][0] + "," + o[B][1] + "," + o[B][2] + "," + n + ")");
  return i;
};
yr.gradientFillStyle = function(r10, e, t, a) {
  var n = /* @__PURE__ */ this.createGradientStyleFor(r10, "background", e, t, a);
  if (!n) return null;
  r10.fillStyle = n;
};
yr.colorFillStyle = function(r10, e, t, a, n) {
  r10.fillStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
yr.eleFillStyle = function(r10, e, t) {
  var a = e.pstyle("background-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient") this.gradientFillStyle(r10, e, a, t);
  else {
    var n = e.pstyle("background-color").value;
    this.colorFillStyle(r10, n[0], n[1], n[2], t);
  }
};
yr.gradientStrokeStyle = function(r10, e, t, a) {
  var n = /* @__PURE__ */ this.createGradientStyleFor(r10, "line", e, t, a);
  if (!n) return null;
  r10.strokeStyle = n;
};
yr.colorStrokeStyle = function(r10, e, t, a, n) {
  r10.strokeStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
yr.eleStrokeStyle = function(r10, e, t) {
  var a = e.pstyle("line-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient") this.gradientStrokeStyle(r10, e, a, t);
  else {
    var n = e.pstyle("line-color").value;
    this.colorStrokeStyle(r10, n[0], n[1], n[2], t);
  }
};
yr.matchCanvasSize = function(r10) {
  var e = this, t = e.data, a = /* @__PURE__ */ e.findContainerClientCoords(), n = a[2], i = a[3], s = /* @__PURE__ */ e.getPixelRatio(), o = e.motionBlurPxRatio;
  (r10 === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || r10 === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
  var l = n * s, u = i * s, f;
  if (!(l === e.canvasWidth && u === e.canvasHeight)) {
    e.fontCaches = null;
    var c = t.canvasContainer;
    c.style.width = n + "px", c.style.height = i + "px";
    for (var d = 0; d < e.CANVAS_LAYERS; d++) f = t.canvases[d], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
    for (var d = 0; d < e.BUFFER_COUNT; d++) f = t.bufferCanvases[d], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
    e.textureMult = 1, s <= 1 && (f = t.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, f.width = l * e.textureMult, f.height = u * e.textureMult), e.canvasWidth = l, e.canvasHeight = u;
  }
};
yr.renderTo = function(r10, e, t, a) {
  this.render({
    forcedContext: r10,
    forcedZoom: e,
    forcedPan: t,
    drawAllLayers: true,
    forcedPxRatio: a
  });
};
yr.render = function(r10) {
  r10 = r10 || fo();
  var e = r10.forcedContext, t = r10.drawAllLayers, a = r10.drawOnlyNodeLayer, n = r10.forcedZoom, i = r10.forcedPan, s = this, o = r10.forcedPxRatio === void 0 ? this.getPixelRatio() : r10.forcedPxRatio, l = s.cy, u = s.data, f = u.canvasNeedsRedraw, c = s.textureOnViewport && !e && (s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming), d = r10.motionBlur !== void 0 ? r10.motionBlur : s.motionBlur, g = s.motionBlurPxRatio, h = /* @__PURE__ */ l.hasCompoundNodes(), m = s.hoverData.draggingEles, y = !!(s.hoverData.selecting || s.touchData.selecting);
  d = d && !e && s.motionBlurEnabled && !y;
  var p = d;
  e || (s.prevPxRatio !== o && (s.invalidateContainerClientCoordsCache(), s.matchCanvasSize(s.container), s.redrawHint("eles", true), s.redrawHint("drag", true)), s.prevPxRatio = o), !e && s.motionBlurTimeout && clearTimeout(s.motionBlurTimeout), d && (s.mbFrames == null && (s.mbFrames = 0), s.mbFrames++, s.mbFrames < 3 && (p = false), s.mbFrames > s.minMbLowQualFrames && (s.motionBlurPxRatio = s.mbPxRBlurry)), s.clearingMotionBlur && (s.motionBlurPxRatio = 1), s.textureDrawLastFrame && !c && (f[s.NODE] = true, f[s.SELECT_BOX] = true);
  var b1 = /* @__PURE__ */ l.style(), w = /* @__PURE__ */ l.zoom(), x = n !== void 0 ? n : w, T = /* @__PURE__ */ l.pan(), C = {
    x: T.x,
    y: T.y
  }, E = {
    zoom: w,
    pan: {
      x: T.x,
      y: T.y
    }
  }, k = s.prevViewport, S = k === void 0 || E.zoom !== k.zoom || E.pan.x !== k.pan.x || E.pan.y !== k.pan.y;
  !S && !(m && !h) && (s.motionBlurPxRatio = 1), i && (C = i), x *= o, C.x *= o, C.y *= o;
  var L = /* @__PURE__ */ s.getCachedZSortedEles();
  function B(ne, se, le, de, fe) {
    var ye = ne.globalCompositeOperation;
    ne.globalCompositeOperation = "destination-out", s.colorFillStyle(ne, 255, 255, 255, s.motionBlurTransparency), ne.fillRect(se, le, de, fe), ne.globalCompositeOperation = ye;
  }
  m$1(B, "mbclear");
  function M(ne, se) {
    var le, de, fe, ye;
    !s.clearingMotionBlur && (ne === u.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] || ne === u.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG]) ? (le = {
      x: T.x * g,
      y: T.y * g
    }, de = w * g, fe = s.canvasWidth * g, ye = s.canvasHeight * g) : (le = C, de = x, fe = s.canvasWidth, ye = s.canvasHeight), ne.setTransform(1, 0, 0, 1, 0, 0), se === "motionBlur" ? B(ne, 0, 0, fe, ye) : !e && (se === void 0 || se) && ne.clearRect(0, 0, fe, ye), t || (ne.translate(le.x, le.y), ne.scale(de, de)), i && ne.translate(i.x, i.y), n && ne.scale(n, n);
  }
  if (m$1(M, "setContextTransform"), c || (s.textureDrawLastFrame = false), c) {
    if (s.textureDrawLastFrame = true, !s.textureCache) {
      s.textureCache = {}, s.textureCache.bb = /* @__PURE__ */ l.mutableElements().boundingBox(), s.textureCache.texture = s.data.bufferCanvases[s.TEXTURE_BUFFER];
      var A = s.data.bufferContexts[s.TEXTURE_BUFFER];
      A.setTransform(1, 0, 0, 1, 0, 0), A.clearRect(0, 0, s.canvasWidth * s.textureMult, s.canvasHeight * s.textureMult), s.render({
        forcedContext: A,
        drawOnlyNodeLayer: true,
        forcedPxRatio: o * s.textureMult
      });
      var E = s.textureCache.viewport = {
        zoom: /* @__PURE__ */ l.zoom(),
        pan: /* @__PURE__ */ l.pan(),
        width: s.canvasWidth,
        height: s.canvasHeight
      };
      E.mpan = {
        x: (0 - E.pan.x) / E.zoom,
        y: (0 - E.pan.y) / E.zoom
      };
    }
    f[s.DRAG] = false, f[s.NODE] = false;
    var P = u.contexts[s.NODE], I = s.textureCache.texture, E = s.textureCache.viewport;
    P.setTransform(1, 0, 0, 1, 0, 0), d ? B(P, 0, 0, E.width, E.height) : P.clearRect(0, 0, E.width, E.height);
    var R = b1.core("outside-texture-bg-color").value, O = b1.core("outside-texture-bg-opacity").value;
    s.colorFillStyle(P, R[0], R[1], R[2], O), P.fillRect(0, 0, E.width, E.height);
    var w = /* @__PURE__ */ l.zoom();
    M(P, false), P.clearRect(E.mpan.x, E.mpan.y, E.width / E.zoom / o, E.height / E.zoom / o), P.drawImage(I, E.mpan.x, E.mpan.y, E.width / E.zoom / o, E.height / E.zoom / o);
  } else s.textureOnViewport && !e && (s.textureCache = null);
  var z = /* @__PURE__ */ l.extent(), $ = s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming || s.hoverData.draggingEles || s.cy.animated(), H = s.hideEdgesOnViewport && $, V = [];
  if (V[s.NODE] = !f[s.NODE] && d && !s.clearedForMotionBlur[s.NODE] || s.clearingMotionBlur, V[s.NODE] && (s.clearedForMotionBlur[s.NODE] = true), V[s.DRAG] = !f[s.DRAG] && d && !s.clearedForMotionBlur[s.DRAG] || s.clearingMotionBlur, V[s.DRAG] && (s.clearedForMotionBlur[s.DRAG] = true), f[s.NODE] || t || a || V[s.NODE]) {
    var F = d && !V[s.NODE] && g !== 1, P = e || (F ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] : u.contexts[s.NODE]), U = d && !F ? "motionBlur" : void 0;
    M(P, U), H ? s.drawCachedNodes(P, L.nondrag, o, z) : s.drawLayeredElements(P, L.nondrag, o, z), s.debug && s.drawDebugPoints(P, L.nondrag), !t && !d && (f[s.NODE] = false);
  }
  if (!a && (f[s.DRAG] || t || V[s.DRAG])) {
    var F = d && !V[s.DRAG] && g !== 1, P = e || (F ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG] : u.contexts[s.DRAG]);
    M(P, d && !F ? "motionBlur" : void 0), H ? s.drawCachedNodes(P, L.drag, o, z) : s.drawCachedElements(P, L.drag, o, z), s.debug && s.drawDebugPoints(P, L.drag), !t && !d && (f[s.DRAG] = false);
  }
  if (s.showFps || !a && f[s.SELECT_BOX] && !t) {
    var P = e || u.contexts[s.SELECT_BOX];
    if (M(P), s.selection[4] == 1 && (s.hoverData.selecting || s.touchData.selecting)) {
      var w = /* @__PURE__ */ s.cy.zoom(), J = b1.core("selection-box-border-width").value / w;
      P.lineWidth = J, P.fillStyle = "rgba(" + b1.core("selection-box-color").value[0] + "," + b1.core("selection-box-color").value[1] + "," + b1.core("selection-box-color").value[2] + "," + b1.core("selection-box-opacity").value + ")", P.fillRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]), J > 0 && (P.strokeStyle = "rgba(" + b1.core("selection-box-border-color").value[0] + "," + b1.core("selection-box-border-color").value[1] + "," + b1.core("selection-box-border-color").value[2] + "," + b1.core("selection-box-opacity").value + ")", P.strokeRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]));
    }
    if (u.bgActivePosistion && !s.hoverData.selecting) {
      var w = /* @__PURE__ */ s.cy.zoom(), j = u.bgActivePosistion;
      P.fillStyle = "rgba(" + b1.core("active-bg-color").value[0] + "," + b1.core("active-bg-color").value[1] + "," + b1.core("active-bg-color").value[2] + "," + b1.core("active-bg-opacity").value + ")", P.beginPath(), P.arc(j.x, j.y, b1.core("active-bg-size").pfValue / w, 0, 2 * Math.PI), P.fill();
    }
    var ee = s.lastRedrawTime;
    if (s.showFps && ee) {
      ee = /* @__PURE__ */ Math.round(ee);
      var re = /* @__PURE__ */ Math.round(1e3 / ee);
      P.setTransform(1, 0, 0, 1, 0, 0), P.fillStyle = "rgba(255, 0, 0, 0.75)", P.strokeStyle = "rgba(255, 0, 0, 0.75)", P.lineWidth = 1, P.fillText("1 frame = " + ee + " ms = " + re + " fps", 0, 20);
      var Y = 60;
      P.strokeRect(0, 30, 250, 20), P.fillRect(0, 30, 250 * Math.min(re / Y, 1), 20);
    }
    t || (f[s.SELECT_BOX] = false);
  }
  if (d && g !== 1) {
    var N = u.contexts[s.NODE], X = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_NODE], Z = u.contexts[s.DRAG], oe = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_DRAG], ge = /* @__PURE__ */ m$1(function(se, le, de) {
      se.setTransform(1, 0, 0, 1, 0, 0), de || !p ? se.clearRect(0, 0, s.canvasWidth, s.canvasHeight) : B(se, 0, 0, s.canvasWidth, s.canvasHeight);
      var fe = g;
      se.drawImage(le, 0, 0, s.canvasWidth * fe, s.canvasHeight * fe, 0, 0, s.canvasWidth, s.canvasHeight);
    }, "drawMotionBlur");
    (f[s.NODE] || V[s.NODE]) && (ge(N, X, V[s.NODE]), f[s.NODE] = false), (f[s.DRAG] || V[s.DRAG]) && (ge(Z, oe, V[s.DRAG]), f[s.DRAG] = false);
  }
  s.prevViewport = E, s.clearingMotionBlur && (s.clearingMotionBlur = false, s.motionBlurCleared = true, s.motionBlur = true), d && (s.motionBlurTimeout = /* @__PURE__ */ setTimeout(function() {
    s.motionBlurTimeout = null, s.clearedForMotionBlur[s.NODE] = false, s.clearedForMotionBlur[s.DRAG] = false, s.motionBlur = false, s.clearingMotionBlur = !c, s.mbFrames = 0, f[s.NODE] = true, f[s.DRAG] = true, s.redraw();
  }, fp)), e || l.emit("render");
};
var nt = {};
nt.drawPolygonPath = function(r10, e, t, a, n, i) {
  var s = a / 2, o = n / 2;
  r10.beginPath && r10.beginPath(), r10.moveTo(e + s * i[0], t + o * i[1]);
  for (var l = 1; l < i.length / 2; l++) r10.lineTo(e + s * i[l * 2], t + o * i[l * 2 + 1]);
  r10.closePath();
};
nt.drawRoundPolygonPath = function(r10, e, t, a, n, i, s) {
  s.forEach(function(o) {
    return vu(r10, o);
  }), r10.closePath();
};
nt.drawRoundRectanglePath = function(r10, e, t, a, n, i) {
  var s = a / 2, o = n / 2, l = i === "auto" ? gt(a, n) : Math.min(i, o, s);
  r10.beginPath && r10.beginPath(), r10.moveTo(e, t - o), r10.arcTo(e + s, t - o, e + s, t, l), r10.arcTo(e + s, t + o, e, t + o, l), r10.arcTo(e - s, t + o, e - s, t, l), r10.arcTo(e - s, t - o, e, t - o, l), r10.lineTo(e, t - o), r10.closePath();
};
nt.drawBottomRoundRectanglePath = function(r10, e, t, a, n, i) {
  var s = a / 2, o = n / 2, l = i === "auto" ? gt(a, n) : i;
  r10.beginPath && r10.beginPath(), r10.moveTo(e, t - o), r10.lineTo(e + s, t - o), r10.lineTo(e + s, t), r10.arcTo(e + s, t + o, e, t + o, l), r10.arcTo(e - s, t + o, e - s, t, l), r10.lineTo(e - s, t - o), r10.lineTo(e, t - o), r10.closePath();
};
nt.drawCutRectanglePath = function(r10, e, t, a, n, i, s) {
  var o = a / 2, l = n / 2, u = s === "auto" ? di() : s;
  r10.beginPath && r10.beginPath(), r10.moveTo(e - o + u, t - l), r10.lineTo(e + o - u, t - l), r10.lineTo(e + o, t - l + u), r10.lineTo(e + o, t + l - u), r10.lineTo(e + o - u, t + l), r10.lineTo(e - o + u, t + l), r10.lineTo(e - o, t + l - u), r10.lineTo(e - o, t - l + u), r10.closePath();
};
nt.drawBarrelPath = function(r10, e, t, a, n) {
  var i = a / 2, s = n / 2, o = e - i, l = e + i, u = t - s, f = t + s, c = /* @__PURE__ */ Gn(a, n), d = c.widthOffset, g = c.heightOffset, h = c.ctrlPtOffsetPct * d;
  r10.beginPath && r10.beginPath(), r10.moveTo(o, u + g), r10.lineTo(o, f - g), r10.quadraticCurveTo(o + h, f, o + d, f), r10.lineTo(l - d, f), r10.quadraticCurveTo(l - h, f, l, f - g), r10.lineTo(l, u + g), r10.quadraticCurveTo(l - h, u, l - d, u), r10.lineTo(o + d, u), r10.quadraticCurveTo(o + h, u, o, u + g), r10.closePath();
};
var Gs = /* @__PURE__ */ Math.sin(0), Ks = /* @__PURE__ */ Math.cos(0), ri = {}, ti = {}, Cu = Math.PI / 40;
for (st = 0 * Math.PI; st < 2 * Math.PI; st += Cu) ri[st] = /* @__PURE__ */ Math.sin(st), ti[st] = /* @__PURE__ */ Math.cos(st);
var st;
nt.drawEllipsePath = function(r10, e, t, a, n) {
  if (r10.beginPath && r10.beginPath(), r10.ellipse) r10.ellipse(e, t, a / 2, n / 2, 0, 0, 2 * Math.PI);
  else for (var i, s, o = a / 2, l = n / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += Cu) i = e - o * ri[u] * Gs + o * ti[u] * Ks, s = t + l * ti[u] * Gs + l * ri[u] * Ks, u === 0 ? r10.moveTo(i, s) : r10.lineTo(i, s);
  r10.closePath();
};
var Pa = {};
Pa.createBuffer = function(r10, e) {
  var t = /* @__PURE__ */ document.createElement("canvas");
  return t.width = r10, t.height = e, [
    t,
    /* @__PURE__ */ t.getContext("2d")
  ];
};
Pa.bufferCanvasImage = function(r10) {
  var e = this.cy, t = /* @__PURE__ */ e.mutableElements(), a = /* @__PURE__ */ t.boundingBox(), n = /* @__PURE__ */ this.findContainerClientCoords(), i = r10.full ? Math.ceil(a.w) : n[2], s = r10.full ? Math.ceil(a.h) : n[3], o = ie(r10.maxWidth) || ie(r10.maxHeight), l = /* @__PURE__ */ this.getPixelRatio(), u = 1;
  if (r10.scale !== void 0) i *= r10.scale, s *= r10.scale, u = r10.scale;
  else if (o) {
    var f = 1 / 0, c = 1 / 0;
    ie(r10.maxWidth) && (f = u * r10.maxWidth / i), ie(r10.maxHeight) && (c = u * r10.maxHeight / s), u = /* @__PURE__ */ Math.min(f, c), i *= u, s *= u;
  }
  o || (i *= l, s *= l, u *= l);
  var d = /* @__PURE__ */ document.createElement("canvas");
  d.width = i, d.height = s, d.style.width = i + "px", d.style.height = s + "px";
  var g = /* @__PURE__ */ d.getContext("2d");
  if (i > 0 && s > 0) {
    g.clearRect(0, 0, i, s), g.globalCompositeOperation = "source-over";
    var h = /* @__PURE__ */ this.getCachedZSortedEles();
    if (r10.full) g.translate(-a.x1 * u, -a.y1 * u), g.scale(u, u), this.drawElements(g, h), g.scale(1 / u, 1 / u), g.translate(a.x1 * u, a.y1 * u);
    else {
      var m = /* @__PURE__ */ e.pan(), y = {
        x: m.x * u,
        y: m.y * u
      };
      u *= /* @__PURE__ */ e.zoom(), g.translate(y.x, y.y), g.scale(u, u), this.drawElements(g, h), g.scale(1 / u, 1 / u), g.translate(-y.x, -y.y);
    }
    r10.bg && (g.globalCompositeOperation = "destination-over", g.fillStyle = r10.bg, g.rect(0, 0, i, s), g.fill());
  }
  return d;
};
function cp(r10, e) {
  for (var t = /* @__PURE__ */ atob(r10), a = new ArrayBuffer(t.length), n = new Uint8Array(a), i = 0; i < t.length; i++) n[i] = /* @__PURE__ */ t.charCodeAt(i);
  return new Blob([
    a
  ], {
    type: e
  });
}
m$1(cp, "b64ToBlob");
function Ws(r10) {
  var e = /* @__PURE__ */ r10.indexOf(",");
  return r10.substr(e + 1);
}
m$1(Ws, "b64UriToB64");
function Su(r10, e, t) {
  var a = /* @__PURE__ */ m$1(function() {
    return e.toDataURL(t, r10.quality);
  }, "getB64Uri");
  switch (r10.output) {
    case "blob-promise":
      return new qt(function(n, i) {
        try {
          e.toBlob(function(s) {
            s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, t, r10.quality);
        } catch (s) {
          i(s);
        }
      });
    case "blob":
      return cp(/* @__PURE__ */ Ws(/* @__PURE__ */ a()), t);
    case "base64":
      return Ws(/* @__PURE__ */ a());
    case "base64uri":
    default:
      return a();
  }
}
m$1(Su, "output");
Pa.png = function(r10) {
  return Su(r10, /* @__PURE__ */ this.bufferCanvasImage(r10), "image/png");
};
Pa.jpg = function(r10) {
  return Su(r10, /* @__PURE__ */ this.bufferCanvasImage(r10), "image/jpeg");
};
var Tu = {};
Tu.nodeShapeImpl = function(r10, e, t, a, n, i, s, o) {
  switch (r10) {
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
var dp = Du, ke = Du.prototype;
ke.CANVAS_LAYERS = 3;
ke.SELECT_BOX = 0;
ke.DRAG = 1;
ke.NODE = 2;
ke.BUFFER_COUNT = 3;
ke.TEXTURE_BUFFER = 0;
ke.MOTIONBLUR_BUFFER_NODE = 1;
ke.MOTIONBLUR_BUFFER_DRAG = 2;
function Du(r10) {
  var e = this, t = /* @__PURE__ */ e.cy.window(), a = t.document;
  e.data = {
    canvases: new Array(ke.CANVAS_LAYERS),
    contexts: new Array(ke.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(ke.CANVAS_LAYERS),
    bufferCanvases: new Array(ke.BUFFER_COUNT),
    bufferContexts: new Array(ke.CANVAS_LAYERS)
  };
  var n = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
  e.data.canvasContainer = /* @__PURE__ */ a.createElement("div");
  var s = e.data.canvasContainer.style;
  e.data.canvasContainer.style[n] = i, s.position = "relative", s.zIndex = "0", s.overflow = "hidden";
  var o = /* @__PURE__ */ r10.cy.container();
  o.appendChild(e.data.canvasContainer), o.style[n] = i;
  var l = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  ju() && (l["-ms-touch-action"] = "none", l["touch-action"] = "none");
  for (var u = 0; u < ke.CANVAS_LAYERS; u++) {
    var f = e.data.canvases[u] = /* @__PURE__ */ a.createElement("canvas");
    e.data.contexts[u] = /* @__PURE__ */ f.getContext("2d"), Object.keys(l).forEach(function(Y) {
      f.style[Y] = l[Y];
    }), f.style.position = "absolute", f.setAttribute("data-id", "layer" + u), f.style.zIndex = /* @__PURE__ */ String(ke.CANVAS_LAYERS - u), e.data.canvasContainer.appendChild(f), e.data.canvasNeedsRedraw[u] = false;
  }
  e.data.topCanvas = e.data.canvases[0], e.data.canvases[ke.NODE].setAttribute("data-id", "layer" + ke.NODE + "-node"), e.data.canvases[ke.SELECT_BOX].setAttribute("data-id", "layer" + ke.SELECT_BOX + "-selectbox"), e.data.canvases[ke.DRAG].setAttribute("data-id", "layer" + ke.DRAG + "-drag");
  for (var u = 0; u < ke.BUFFER_COUNT; u++) e.data.bufferCanvases[u] = /* @__PURE__ */ a.createElement("canvas"), e.data.bufferContexts[u] = /* @__PURE__ */ e.data.bufferCanvases[u].getContext("2d"), e.data.bufferCanvases[u].style.position = "absolute", e.data.bufferCanvases[u].setAttribute("data-id", "buffer" + u), e.data.bufferCanvases[u].style.zIndex = /* @__PURE__ */ String(-u - 1), e.data.bufferCanvases[u].style.visibility = "hidden";
  e.pathsEnabled = true;
  var c = /* @__PURE__ */ gr(), d = /* @__PURE__ */ m$1(function(N) {
    return {
      x: (N.x1 + N.x2) / 2,
      y: (N.y1 + N.y2) / 2
    };
  }, "getBoxCenter"), g = /* @__PURE__ */ m$1(function(N) {
    return {
      x: -N.w / 2,
      y: -N.h / 2
    };
  }, "getCenterOffset"), h = /* @__PURE__ */ m$1(function(N) {
    var X = N[0]._private, Z = X.oldBackgroundTimestamp === X.backgroundTimestamp;
    return !Z;
  }, "backgroundTimestampHasChanged"), m = /* @__PURE__ */ m$1(function(N) {
    return N[0]._private.nodeKey;
  }, "getStyleKey"), y = /* @__PURE__ */ m$1(function(N) {
    return N[0]._private.labelStyleKey;
  }, "getLabelKey"), p = /* @__PURE__ */ m$1(function(N) {
    return N[0]._private.sourceLabelStyleKey;
  }, "getSourceLabelKey"), b1 = /* @__PURE__ */ m$1(function(N) {
    return N[0]._private.targetLabelStyleKey;
  }, "getTargetLabelKey"), w = /* @__PURE__ */ m$1(function(N, X, Z, oe, ge) {
    return e.drawElement(N, X, Z, false, false, ge);
  }, "drawElement"), x = /* @__PURE__ */ m$1(function(N, X, Z, oe, ge) {
    return e.drawElementText(N, X, Z, oe, "main", ge);
  }, "drawLabel"), T = /* @__PURE__ */ m$1(function(N, X, Z, oe, ge) {
    return e.drawElementText(N, X, Z, oe, "source", ge);
  }, "drawSourceLabel"), C = /* @__PURE__ */ m$1(function(N, X, Z, oe, ge) {
    return e.drawElementText(N, X, Z, oe, "target", ge);
  }, "drawTargetLabel"), E = /* @__PURE__ */ m$1(function(N) {
    return N.boundingBox(), N[0]._private.bodyBounds;
  }, "getElementBox"), k = /* @__PURE__ */ m$1(function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.main || c;
  }, "getLabelBox"), S = /* @__PURE__ */ m$1(function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.source || c;
  }, "getSourceLabelBox"), L = /* @__PURE__ */ m$1(function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.target || c;
  }, "getTargetLabelBox"), B = /* @__PURE__ */ m$1(function(N, X) {
    return X;
  }, "isLabelVisibleAtScale"), M = /* @__PURE__ */ m$1(function(N) {
    return d(/* @__PURE__ */ E(N));
  }, "getElementRotationPoint"), A = /* @__PURE__ */ m$1(function(N, X, Z) {
    var oe = N ? N + "-" : "";
    return {
      x: X.x + Z.pstyle(oe + "text-margin-x").pfValue,
      y: X.y + Z.pstyle(oe + "text-margin-y").pfValue
    };
  }, "addTextMargin"), P = /* @__PURE__ */ m$1(function(N, X, Z) {
    var oe = N[0]._private.rscratch;
    return {
      x: oe[X],
      y: oe[Z]
    };
  }, "getRsPt"), I = /* @__PURE__ */ m$1(function(N) {
    return A("", /* @__PURE__ */ P(N, "labelX", "labelY"), N);
  }, "getLabelRotationPoint"), R = /* @__PURE__ */ m$1(function(N) {
    return A("source", /* @__PURE__ */ P(N, "sourceLabelX", "sourceLabelY"), N);
  }, "getSourceLabelRotationPoint"), O = /* @__PURE__ */ m$1(function(N) {
    return A("target", /* @__PURE__ */ P(N, "targetLabelX", "targetLabelY"), N);
  }, "getTargetLabelRotationPoint"), z = /* @__PURE__ */ m$1(function(N) {
    return g(/* @__PURE__ */ E(N));
  }, "getElementRotationOffset"), $ = /* @__PURE__ */ m$1(function(N) {
    return g(/* @__PURE__ */ S(N));
  }, "getSourceLabelRotationOffset"), H = /* @__PURE__ */ m$1(function(N) {
    return g(/* @__PURE__ */ L(N));
  }, "getTargetLabelRotationOffset"), V = /* @__PURE__ */ m$1(function(N) {
    var X = /* @__PURE__ */ k(N), Z = /* @__PURE__ */ g(/* @__PURE__ */ k(N));
    if (N.isNode()) {
      switch (N.pstyle("text-halign").value) {
        case "left":
          Z.x = -X.w;
          break;
        case "right":
          Z.x = 0;
          break;
      }
      switch (N.pstyle("text-valign").value) {
        case "top":
          Z.y = -X.h;
          break;
        case "bottom":
          Z.y = 0;
          break;
      }
    }
    return Z;
  }, "getLabelRotationOffset"), F = e.data.eleTxrCache = new sa(e, {
    getKey: m,
    doesEleInvalidateKey: h,
    drawElement: w,
    getBoundingBox: E,
    getRotationPoint: M,
    getRotationOffset: z,
    allowEdgeTxrCaching: false,
    allowParentTxrCaching: false
  }), U = e.data.lblTxrCache = new sa(e, {
    getKey: y,
    drawElement: x,
    getBoundingBox: k,
    getRotationPoint: I,
    getRotationOffset: V,
    isVisible: B
  }), J = e.data.slbTxrCache = new sa(e, {
    getKey: p,
    drawElement: T,
    getBoundingBox: S,
    getRotationPoint: R,
    getRotationOffset: $,
    isVisible: B
  }), j = e.data.tlbTxrCache = new sa(e, {
    getKey: b1,
    drawElement: C,
    getBoundingBox: L,
    getRotationPoint: O,
    getRotationOffset: H,
    isVisible: B
  }), ee = e.data.lyrTxrCache = new bu(e);
  e.onUpdateEleCalcs(/* @__PURE__ */ m$1(function(N, X) {
    F.invalidateElements(X), U.invalidateElements(X), J.invalidateElements(X), j.invalidateElements(X), ee.invalidateElements(X);
    for (var Z = 0; Z < X.length; Z++) {
      var oe = X[Z]._private;
      oe.oldBackgroundTimestamp = oe.backgroundTimestamp;
    }
  }, "invalidateTextureCaches"));
  var re = /* @__PURE__ */ m$1(function(N) {
    for (var X = 0; X < N.length; X++) ee.enqueueElementRefinement(N[X].ele);
  }, "refineInLayers");
  F.onDequeue(re), U.onDequeue(re), J.onDequeue(re), j.onDequeue(re);
}
m$1(Du, "CanvasRenderer");
ke.redrawHint = function(r10, e) {
  var t = this;
  switch (r10) {
    case "eles":
      t.data.canvasNeedsRedraw[ke.NODE] = e;
      break;
    case "drag":
      t.data.canvasNeedsRedraw[ke.DRAG] = e;
      break;
    case "select":
      t.data.canvasNeedsRedraw[ke.SELECT_BOX] = e;
      break;
  }
};
var hp = typeof Path2D < "u";
ke.path2dEnabled = function(r10) {
  if (r10 === void 0) return this.pathsEnabled;
  this.pathsEnabled = !!r10;
};
ke.usePaths = function() {
  return hp && this.pathsEnabled;
};
ke.setImgSmoothing = function(r10, e) {
  r10.imageSmoothingEnabled != null ? r10.imageSmoothingEnabled = e : (r10.webkitImageSmoothingEnabled = e, r10.mozImageSmoothingEnabled = e, r10.msImageSmoothingEnabled = e);
};
ke.getImgSmoothing = function(r10) {
  return r10.imageSmoothingEnabled != null ? r10.imageSmoothingEnabled : r10.webkitImageSmoothingEnabled || r10.mozImageSmoothingEnabled || r10.msImageSmoothingEnabled;
};
ke.makeOffscreenCanvas = function(r10, e) {
  var t;
  if ((typeof OffscreenCanvas > "u" ? "undefined" : Ue(OffscreenCanvas)) !== "undefined") t = new OffscreenCanvas(r10, e);
  else {
    var a = /* @__PURE__ */ this.cy.window(), n = a.document;
    t = /* @__PURE__ */ n.createElement("canvas"), t.width = r10, t.height = e;
  }
  return t;
};
[
  wu,
  Fr,
  Wr,
  ki,
  wt,
  Xt,
  yr,
  nt,
  Pa,
  Tu
].forEach(function(r10) {
  we(ke, r10);
});
var gp = [
  {
    name: "null",
    impl: ou
  },
  {
    name: "base",
    impl: yu
  },
  {
    name: "canvas",
    impl: dp
  }
], pp = [
  {
    type: "layout",
    extensions: Eg
  },
  {
    type: "renderer",
    extensions: gp
  }
], ku = {}, Pu = {};
function Bu(r10, e, t) {
  var a = t, n = /* @__PURE__ */ m$1(function(k) {
    Le("Can not register `" + e + "` for `" + r10 + "` since `" + k + "` already exists in the prototype and can not be overridden");
  }, "overrideErr");
  if (r10 === "core") {
    if (ba.prototype[e]) return n(e);
    ba.prototype[e] = t;
  } else if (r10 === "collection") {
    if (er.prototype[e]) return n(e);
    er.prototype[e] = t;
  } else if (r10 === "layout") {
    for (var i = /* @__PURE__ */ m$1(function(k) {
      this.options = k, t.call(this, k), Te(this._private) || (this._private = {}), this._private.cy = k.cy, this._private.listeners = [], this.createEmitter();
    }, "Layout"), s = i.prototype = /* @__PURE__ */ Object.create(t.prototype), o = [], l = 0; l < o.length; l++) {
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
        var k = this.animations;
        if (k) for (var S = 0; S < k.length; S++) k[S].stop();
      }
      return f ? f.call(this) : this.emit("layoutstop"), this;
    }, s.destroy || (s.destroy = function() {
      return this;
    }), s.cy = function() {
      return this._private.cy;
    };
    var c = /* @__PURE__ */ m$1(function(k) {
      return k._private.cy;
    }, "getCy"), d = {
      addEventFields: /* @__PURE__ */ m$1(function(k, S) {
        S.layout = k, S.cy = /* @__PURE__ */ c(k), S.target = k;
      }, "addEventFields"),
      bubble: /* @__PURE__ */ m$1(function() {
        return true;
      }, "bubble"),
      parent: /* @__PURE__ */ m$1(function(k) {
        return c(k);
      }, "parent")
    };
    we(s, {
      createEmitter: /* @__PURE__ */ m$1(function() {
        return this._private.emitter = new bn(d, this), this;
      }, "createEmitter"),
      emitter: /* @__PURE__ */ m$1(function() {
        return this._private.emitter;
      }, "emitter"),
      on: /* @__PURE__ */ m$1(function(k, S) {
        return this.emitter().on(k, S), this;
      }, "on"),
      one: /* @__PURE__ */ m$1(function(k, S) {
        return this.emitter().one(k, S), this;
      }, "one"),
      once: /* @__PURE__ */ m$1(function(k, S) {
        return this.emitter().one(k, S), this;
      }, "once"),
      removeListener: /* @__PURE__ */ m$1(function(k, S) {
        return this.emitter().removeListener(k, S), this;
      }, "removeListener"),
      removeAllListeners: /* @__PURE__ */ m$1(function() {
        return this.emitter().removeAllListeners(), this;
      }, "removeAllListeners"),
      emit: /* @__PURE__ */ m$1(function(k, S) {
        return this.emitter().emit(k, S), this;
      }, "emit")
    }), Me.eventAliasesOn(s), a = i;
  } else if (r10 === "renderer" && e !== "null" && e !== "base") {
    var g = /* @__PURE__ */ Mu("renderer", "base"), h = g.prototype, m = t, y = t.prototype, p = /* @__PURE__ */ m$1(function() {
      g.apply(this, arguments), m.apply(this, arguments);
    }, "Renderer"), b1 = p.prototype;
    for (var w in h) {
      var x = h[w], T = y[w] != null;
      if (T) return n(w);
      b1[w] = x;
    }
    for (var C in y) b1[C] = y[C];
    h.clientFunctions.forEach(function(E) {
      b1[E] = b1[E] || function() {
        qe("Renderer does not implement `renderer." + E + "()` on its prototype");
      };
    }), a = p;
  } else if (r10 === "__proto__" || r10 === "constructor" || r10 === "prototype") return qe(r10 + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return eo({
    map: ku,
    keys: [
      r10,
      e
    ],
    value: a
  });
}
m$1(Bu, "setExtension");
function Mu(r10, e) {
  return ro({
    map: ku,
    keys: [
      r10,
      e
    ]
  });
}
m$1(Mu, "getExtension");
function yp(r10, e, t, a, n) {
  return eo({
    map: Pu,
    keys: [
      r10,
      e,
      t,
      a
    ],
    value: n
  });
}
m$1(yp, "setModule");
function mp(r10, e, t, a) {
  return ro({
    map: Pu,
    keys: [
      r10,
      e,
      t,
      a
    ]
  });
}
m$1(mp, "getModule");
var ai = /* @__PURE__ */ m$1(function() {
  if (arguments.length === 2) return Mu.apply(null, arguments);
  if (arguments.length === 3) return Bu.apply(null, arguments);
  if (arguments.length === 4) return mp.apply(null, arguments);
  if (arguments.length === 5) return yp.apply(null, arguments);
  qe("Invalid extension access syntax");
}, "extension");
ba.prototype.extension = ai;
pp.forEach(function(r10) {
  r10.extensions.forEach(function(e) {
    Bu(r10.type, e.name, e.impl);
  });
});
var Lu = /* @__PURE__ */ m$1(function r9() {
  if (!(this instanceof r9)) return new r9();
  this.length = 0;
}, "Stylesheet"), mt = Lu.prototype;
mt.instanceString = function() {
  return "stylesheet";
};
mt.selector = function(r10) {
  var e = this.length++;
  return this[e] = {
    selector: r10,
    properties: []
  }, this;
};
mt.css = function(r10, e) {
  var t = this.length - 1;
  if (he(r10)) this[t].properties.push({
    name: r10,
    value: e
  });
  else if (Te(r10)) for (var a = r10, n = /* @__PURE__ */ Object.keys(a), i = 0; i < n.length; i++) {
    var s = n[i], o = a[s];
    if (o != null) {
      var l = nr.properties[s] || nr.properties[ln(s)];
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
mt.style = mt.css;
mt.generateStyle = function(r10) {
  var e = new nr(r10);
  return this.appendToStyle(e);
};
mt.appendToStyle = function(r10) {
  for (var e = 0; e < this.length; e++) {
    var t = this[e], a = t.selector, n = t.properties;
    r10.selector(a);
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      r10.css(s.name, s.value);
    }
  }
  return r10;
};
var bp = "3.30.2", Ft = /* @__PURE__ */ m$1(function(e) {
  if (e === void 0 && (e = {}), Te(e)) return new ba(e);
  if (he(e)) return ai.apply(ai, arguments);
}, "cytoscape");
Ft.use = function(r10) {
  var e = /* @__PURE__ */ Array.prototype.slice.call(arguments, 1);
  return e.unshift(Ft), r10.apply(null, e), this;
};
Ft.warnings = function(r10) {
  return lo(r10);
};
Ft.version = bp;
Ft.stylesheet = Ft.Stylesheet = Lu;
export {
  Ft as F
};
