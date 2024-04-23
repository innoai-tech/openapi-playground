import { c as r } from "./lib--nodepkg-vuemarkdown.Cjmx74zb.chunk.js";
var e, t, n, o, a, i, c, u, f, s, l, p, y, h, d, v, g, b, m = "object" == typeof document && document.all, w = void 0 === m && void 0 !== m ? function(r2) {
  return "function" == typeof r2 || r2 === m;
} : function(r2) {
  return "function" == typeof r2;
}, E = {}, A = function(r2) {
  try {
    return !!r2();
  } catch (r4) {
    return true;
  }
}, O = !A(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), R = function(r2) {
  return r2 && r2.Math === Math && r2;
}, S = R("object" == typeof globalThis && globalThis) || R("object" == typeof window && window) || R("object" == typeof self && self) || R("object" == typeof r && r) || R("object" == typeof r && r) || /* @__PURE__ */ function() {
  return this;
}() || Function("return this")(), T = function(r2) {
  return "object" == typeof r2 ? null !== r2 : w(r2);
}, I = S.document, _ = T(I) && T(I.createElement), k = function(r2) {
  return _ ? I.createElement(r2) : {};
}, j = !O && !A(function() {
  return 7 !== Object.defineProperty(k("div"), "a", { get: function() {
    return 7;
  } }).a;
}), D = O && A(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), M = String, C = TypeError, P = function(r2) {
  if (T(r2))
    return r2;
  throw new C(M(r2) + " is not an object");
}, x = !A(function() {
  var r2 = (function() {
  }).bind();
  return "function" != typeof r2 || r2.hasOwnProperty("prototype");
}), L = Function.prototype.call, N = x ? L.bind(L) : function() {
  return L.apply(L, arguments);
}, F = function(r2, e10) {
  var t10;
  return arguments.length < 2 ? w(t10 = S[r2]) ? t10 : void 0 : S[r2] && S[r2][e10];
}, U = Function.prototype, B = U.call, V = x && U.bind.bind(B, B), W = x ? V : function(r2) {
  return function() {
    return B.apply(r2, arguments);
  };
}, z = W({}.isPrototypeOf), H = "undefined" != typeof navigator && String(navigator.userAgent) || "", Y = S.process, G = S.Deno, $ = Y && Y.versions || G && G.version, Q = $ && $.v8;
Q && (c = (i = Q.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !c && H && (!(i = H.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = H.match(/Chrome\/(\d+)/)) && (c = +i[1]);
var X = c, q = S.String, K = !!Object.getOwnPropertySymbols && !A(function() {
  var r2 = Symbol("symbol detection");
  return !q(r2) || !(Object(r2) instanceof Symbol) || !Symbol.sham && X && X < 41;
}), Z = K && !Symbol.sham && "symbol" == typeof Symbol.iterator, J = Object, rr = Z ? function(r2) {
  return "symbol" == typeof r2;
} : function(r2) {
  var e10 = F("Symbol");
  return w(e10) && z(e10.prototype, J(r2));
}, re = String, rt = function(r2) {
  try {
    return re(r2);
  } catch (r4) {
    return "Object";
  }
}, rn = TypeError, ro = function(r2) {
  if (w(r2))
    return r2;
  throw new rn(rt(r2) + " is not a function");
}, ra = function(r2) {
  return null == r2;
}, ri = function(r2, e10) {
  var t10 = r2[e10];
  return ra(t10) ? void 0 : ro(t10);
}, rc = TypeError, ru = { exports: {} }, rf = Object.defineProperty, rs = function(r2, e10) {
  try {
    rf(S, r2, { value: e10, configurable: true, writable: true });
  } catch (t10) {
    S[r2] = e10;
  }
  return e10;
}, rl = "__core-js_shared__", rp = ru.exports = S[rl] || rs(rl, {});
(rp.versions || (rp.versions = [])).push({ version: "3.37.0", mode: "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var ry = ru.exports, rh = function(r2, e10) {
  return ry[r2] || (ry[r2] = e10 || {});
}, rd = TypeError, rv = function(r2) {
  if (ra(r2))
    throw new rd("Can't call method on " + r2);
  return r2;
}, rg = Object, rb = function(r2) {
  return rg(rv(r2));
}, rm = W({}.hasOwnProperty), rw = Object.hasOwn || function(r2, e10) {
  return rm(rb(r2), e10);
}, rE = 0, rA = Math.random(), rO = W(1 .toString), rR = function(r2) {
  return "Symbol(" + (void 0 === r2 ? "" : r2) + ")_" + rO(++rE + rA, 36);
}, rS = S.Symbol, rT = rh("wks"), rI = Z ? rS.for || rS : rS && rS.withoutSetter || rR, r_ = function(r2) {
  return rw(rT, r2) || (rT[r2] = K && rw(rS, r2) ? rS[r2] : rI("Symbol." + r2)), rT[r2];
}, rk = function(r2, e10) {
  var t10, n10;
  if ("string" === e10 && w(t10 = r2.toString) && !T(n10 = N(t10, r2)) || w(t10 = r2.valueOf) && !T(n10 = N(t10, r2)) || "string" !== e10 && w(t10 = r2.toString) && !T(n10 = N(t10, r2)))
    return n10;
  throw new rc("Can't convert object to primitive value");
}, rj = TypeError, rD = r_("toPrimitive"), rM = function(r2, e10) {
  if (!T(r2) || rr(r2))
    return r2;
  var t10, n10 = ri(r2, rD);
  if (n10) {
    if (void 0 === e10 && (e10 = "default"), !T(t10 = N(n10, r2, e10)) || rr(t10))
      return t10;
    throw new rj("Can't convert object to primitive value");
  }
  return void 0 === e10 && (e10 = "number"), rk(r2, e10);
}, rC = function(r2) {
  var e10 = rM(r2, "string");
  return rr(e10) ? e10 : e10 + "";
}, rP = TypeError, rx = Object.defineProperty, rL = Object.getOwnPropertyDescriptor, rN = "enumerable", rF = "configurable", rU = "writable";
E.f = O ? D ? function(r2, e10, t10) {
  if (P(r2), e10 = rC(e10), P(t10), "function" == typeof r2 && "prototype" === e10 && "value" in t10 && rU in t10 && !t10[rU]) {
    var n10 = rL(r2, e10);
    n10 && n10[rU] && (r2[e10] = t10.value, t10 = { configurable: rF in t10 ? t10[rF] : n10[rF], enumerable: rN in t10 ? t10[rN] : n10[rN], writable: false });
  }
  return rx(r2, e10, t10);
} : rx : function(r2, e10, t10) {
  if (P(r2), e10 = rC(e10), P(t10), j)
    try {
      return rx(r2, e10, t10);
    } catch (r4) {
    }
  if ("get" in t10 || "set" in t10)
    throw new rP("Accessors not supported");
  return "value" in t10 && (r2[e10] = t10.value), r2;
};
var rB = { exports: {} }, rV = Function.prototype, rW = O && Object.getOwnPropertyDescriptor, rz = rw(rV, "name") && (!O || O && rW(rV, "name").configurable), rH = W(Function.toString);
w(ry.inspectSource) || (ry.inspectSource = function(r2) {
  return rH(r2);
});
var rY = ry.inspectSource, rG = S.WeakMap, r$ = w(rG) && /native code/.test(String(rG)), rQ = function(r2, e10) {
  return { enumerable: !(1 & r2), configurable: !(2 & r2), writable: !(4 & r2), value: e10 };
}, rX = O ? function(r2, e10, t10) {
  return E.f(r2, e10, rQ(1, t10));
} : function(r2, e10, t10) {
  return r2[e10] = t10, r2;
}, rq = rh("keys"), rK = function(r2) {
  return rq[r2] || (rq[r2] = rR(r2));
}, rZ = {}, rJ = "Object already initialized", r0 = S.TypeError, r1 = S.WeakMap;
if (r$ || ry.state) {
  var r2 = ry.state || (ry.state = new r1());
  r2.get = r2.get, r2.has = r2.has, r2.set = r2.set, u = function(r4, e10) {
    if (r2.has(r4))
      throw new r0(rJ);
    return e10.facade = r4, r2.set(r4, e10), e10;
  }, f = function(r4) {
    return r2.get(r4) || {};
  }, s = function(r4) {
    return r2.has(r4);
  };
} else {
  var r4 = rK("state");
  rZ[r4] = true, u = function(r2, e10) {
    if (rw(r2, r4))
      throw new r0(rJ);
    return e10.facade = r2, rX(r2, r4, e10), e10;
  }, f = function(r2) {
    return rw(r2, r4) ? r2[r4] : {};
  }, s = function(r2) {
    return rw(r2, r4);
  };
}
var r8 = f, r7 = function(r2) {
  return s(r2) ? f(r2) : u(r2, {});
}, r9 = String, r3 = Object.defineProperty, r6 = W("".slice), r5 = W("".replace), er = W([].join), ee = O && !A(function() {
  return 8 !== r3(function() {
  }, "length", { value: 8 }).length;
}), et = String(String).split("String"), en = rB.exports = function(r2, e10, t10) {
  "Symbol(" === r6(r9(e10), 0, 7) && (e10 = "[" + r5(r9(e10), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t10 && t10.getter && (e10 = "get " + e10), t10 && t10.setter && (e10 = "set " + e10), (!rw(r2, "name") || rz && r2.name !== e10) && (O ? r3(r2, "name", { value: e10, configurable: true }) : r2.name = e10), ee && t10 && rw(t10, "arity") && r2.length !== t10.arity && r3(r2, "length", { value: t10.arity });
  try {
    t10 && rw(t10, "constructor") && t10.constructor ? O && r3(r2, "prototype", { writable: false }) : r2.prototype && (r2.prototype = void 0);
  } catch (r4) {
  }
  var n10 = r7(r2);
  return rw(n10, "source") || (n10.source = er(et, "string" == typeof e10 ? e10 : "")), r2;
};
Function.prototype.toString = en(function() {
  return w(this) && r8(this).source || rY(this);
}, "toString");
var eo = rB.exports, ea = function(r2, e10, t10, n10) {
  n10 || (n10 = {});
  var o10 = n10.enumerable, a3 = void 0 !== n10.name ? n10.name : e10;
  if (w(t10) && eo(t10, a3, n10), n10.global)
    o10 ? r2[e10] = t10 : rs(e10, t10);
  else {
    try {
      n10.unsafe ? r2[e10] && (o10 = true) : delete r2[e10];
    } catch (r4) {
    }
    o10 ? r2[e10] = t10 : E.f(r2, e10, { value: t10, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return r2;
}, ei = r_("toStringTag"), ec = {};
ec[ei] = "z";
var eu = "[object z]" === String(ec), ef = W({}.toString), es = W("".slice), el = function(r2) {
  return es(ef(r2), 8, -1);
}, ep = r_("toStringTag"), ey = Object, eh = "Arguments" === el(/* @__PURE__ */ function() {
  return arguments;
}()), ed = function(r2, e10) {
  try {
    return r2[e10];
  } catch (r4) {
  }
}, ev = eu ? el : function(r2) {
  var e10, t10, n10;
  return void 0 === r2 ? "Undefined" : null === r2 ? "Null" : "string" == typeof (t10 = ed(e10 = ey(r2), ep)) ? t10 : eh ? el(e10) : "Object" === (n10 = el(e10)) && w(e10.callee) ? "Arguments" : n10;
}, eg = String, eb = function(r2) {
  if ("Symbol" === ev(r2))
    throw TypeError("Cannot convert a Symbol value to a string");
  return eg(r2);
}, em = TypeError, ew = function(r2, e10) {
  if (r2 < e10)
    throw new em("Not enough arguments");
  return r2;
}, eE = URLSearchParams, eA = eE.prototype, eO = W(eA.append), eR = W(eA.delete), eS = W(eA.forEach), eT = W([].push), eI = new eE("a=1&a=2&b=3");
eI.delete("a", 1), eI.delete("b", void 0), eI + "" != "a=2" && ea(eA, "delete", function(r2) {
  var e10, t10 = arguments.length, n10 = t10 < 2 ? void 0 : arguments[1];
  if (t10 && void 0 === n10)
    return eR(this, r2);
  var o10 = [];
  eS(this, function(r4, e11) {
    eT(o10, { key: e11, value: r4 });
  }), ew(t10, 1);
  for (var a3 = eb(r2), i2 = eb(n10), c2 = 0, u2 = 0, f2 = false, s2 = o10.length; c2 < s2; )
    e10 = o10[c2++], f2 || e10.key === a3 ? (f2 = true, eR(this, e10.key)) : u2++;
  for (; u2 < s2; )
    (e10 = o10[u2++]).key === a3 && e10.value === i2 || eO(this, e10.key, e10.value);
}, { enumerable: true, unsafe: true });
var e_ = URLSearchParams, ek = e_.prototype, ej = W(ek.getAll), eD = W(ek.has), eM = new e_("a=1");
(eM.has("a", 2) || !eM.has("a", void 0)) && ea(ek, "has", function(r2) {
  var e10 = arguments.length, t10 = e10 < 2 ? void 0 : arguments[1];
  if (e10 && void 0 === t10)
    return eD(this, r2);
  var n10 = ej(this, r2);
  ew(e10, 1);
  for (var o10 = eb(t10), a3 = 0; a3 < n10.length; )
    if (n10[a3++] === o10)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var eC = function(r2, e10, t10) {
  return t10.get && eo(t10.get, e10, { getter: true }), t10.set && eo(t10.set, e10, { setter: true }), E.f(r2, e10, t10);
}, eP = URLSearchParams.prototype, ex = W(eP.forEach);
!O || "size" in eP || eC(eP, "size", { get: function() {
  var r2 = 0;
  return ex(this, function() {
    r2++;
  }), r2;
}, configurable: true, enumerable: true });
var eL = {}, eN = {}, eF = {}.propertyIsEnumerable, eU = Object.getOwnPropertyDescriptor, eB = eU && !eF.call({ 1: 2 }, 1);
eN.f = eB ? function(r2) {
  var e10 = eU(this, r2);
  return !!e10 && e10.enumerable;
} : eF;
var eV = Object, eW = W("".split), ez = A(function() {
  return !eV("z").propertyIsEnumerable(0);
}) ? function(r2) {
  return "String" === el(r2) ? eW(r2, "") : eV(r2);
} : eV, eH = function(r2) {
  return ez(rv(r2));
}, eY = Object.getOwnPropertyDescriptor;
eL.f = O ? eY : function(r2, e10) {
  if (r2 = eH(r2), e10 = rC(e10), j)
    try {
      return eY(r2, e10);
    } catch (r4) {
    }
  if (rw(r2, e10))
    return rQ(!N(eN.f, r2, e10), r2[e10]);
};
var eG = {}, e$ = Math.ceil, eQ = Math.floor, eX = Math.trunc || function(r2) {
  var e10 = +r2;
  return (e10 > 0 ? eQ : e$)(e10);
}, eq = function(r2) {
  var e10 = +r2;
  return e10 != e10 || 0 === e10 ? 0 : eX(e10);
}, eK = Math.max, eZ = Math.min, eJ = Math.min, e0 = function(r2) {
  var e10 = eq(r2);
  return e10 > 0 ? eJ(e10, 9007199254740991) : 0;
}, e1 = function(r2) {
  return e0(r2.length);
}, e2 = function(r2, e10) {
  var t10 = eq(r2);
  return t10 < 0 ? eK(t10 + e10, 0) : eZ(t10, e10);
}, e4 = function(r2) {
  return function(e10, t10, n10) {
    var o10, a3 = eH(e10), i2 = e1(a3);
    if (0 === i2)
      return !r2 && -1;
    var c2 = e2(n10, i2);
    if (r2 && t10 != t10) {
      for (; i2 > c2; )
        if ((o10 = a3[c2++]) != o10)
          return true;
    } else
      for (; i2 > c2; c2++)
        if ((r2 || c2 in a3) && a3[c2] === t10)
          return r2 || c2 || 0;
    return !r2 && -1;
  };
}, e8 = { includes: e4(true), indexOf: e4(false) }.indexOf, e7 = W([].push), e9 = function(r2, e10) {
  var t10, n10 = eH(r2), o10 = 0, a3 = [];
  for (t10 in n10)
    !rw(rZ, t10) && rw(n10, t10) && e7(a3, t10);
  for (; e10.length > o10; )
    rw(n10, t10 = e10[o10++]) && (~e8(a3, t10) || e7(a3, t10));
  return a3;
}, e3 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], e6 = e3.concat("length", "prototype");
eG.f = Object.getOwnPropertyNames || function(r2) {
  return e9(r2, e6);
};
var e5 = {};
e5.f = Object.getOwnPropertySymbols;
var tr = W([].concat), te = F("Reflect", "ownKeys") || function(r2) {
  var e10 = eG.f(P(r2)), t10 = e5.f;
  return t10 ? tr(e10, t10(r2)) : e10;
}, tt = function(r2, e10, t10) {
  for (var n10 = te(e10), o10 = E.f, a3 = eL.f, i2 = 0; i2 < n10.length; i2++) {
    var c2 = n10[i2];
    rw(r2, c2) || t10 && rw(t10, c2) || o10(r2, c2, a3(e10, c2));
  }
}, tn = /#|\.prototype\./, to = function(r2, e10) {
  var t10 = ti[ta(r2)];
  return t10 === tu || t10 !== tc && (w(e10) ? A(e10) : !!e10);
}, ta = to.normalize = function(r2) {
  return String(r2).replace(tn, ".").toLowerCase();
}, ti = to.data = {}, tc = to.NATIVE = "N", tu = to.POLYFILL = "P", tf = eL.f, ts = function(r2, e10) {
  var t10, n10, o10, a3, i2, c2 = r2.target, u2 = r2.global, f2 = r2.stat;
  if (t10 = u2 ? S : f2 ? S[c2] || rs(c2, {}) : S[c2] && S[c2].prototype)
    for (n10 in e10) {
      if (a3 = e10[n10], o10 = r2.dontCallGetSet ? (i2 = tf(t10, n10)) && i2.value : t10[n10], !to(u2 ? n10 : c2 + (f2 ? "." : "#") + n10, r2.forced) && void 0 !== o10) {
        if (typeof a3 == typeof o10)
          continue;
        tt(a3, o10);
      }
      (r2.sham || o10 && o10.sham) && rX(a3, "sham", true), ea(t10, n10, a3, r2);
    }
}, tl = TypeError, tp = "Reduce of empty array with no initial value", ty = function(r2) {
  return function(e10, t10, n10, o10) {
    var a3 = rb(e10), i2 = ez(a3), c2 = e1(a3);
    if (ro(t10), 0 === c2 && n10 < 2)
      throw new tl(tp);
    var u2 = r2 ? c2 - 1 : 0, f2 = r2 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (u2 in i2) {
          o10 = i2[u2], u2 += f2;
          break;
        }
        if (u2 += f2, r2 ? u2 < 0 : c2 <= u2)
          throw new tl(tp);
      }
    for (; r2 ? u2 >= 0 : c2 > u2; u2 += f2)
      u2 in i2 && (o10 = t10(o10, i2[u2], u2, a3));
    return o10;
  };
}, th = { left: ty(false), right: ty(true) }, td = "process" === el(S.process), tv = th.left;
ts({ target: "Array", proto: true, forced: !td && X > 79 && X < 83 || !((e = [].reduce) && A(function() {
  e.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(r2) {
  var e10 = arguments.length;
  return tv(this, r2, e10, e10 > 1 ? arguments[1] : void 0);
} });
var tg = TypeError, tb = Object.defineProperty, tm = S.self !== S;
try {
  if (O) {
    var tw = Object.getOwnPropertyDescriptor(S, "self");
    !tm && tw && tw.get && tw.enumerable || eC(S, "self", { get: function() {
      return S;
    }, set: function(r2) {
      if (this !== S)
        throw new tg("Illegal invocation");
      tb(S, "self", { value: r2, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    ts({ global: true, simple: true, forced: tm }, { self: S });
} catch (r2) {
}
var tE = Function.prototype, tA = tE.apply, tO = tE.call, tR = "object" == typeof Reflect && Reflect.apply || (x ? tO.bind(tA) : function() {
  return tO.apply(tA, arguments);
}), tS = String, tT = TypeError, tI = function(r2, e10, t10) {
  try {
    return W(ro(Object.getOwnPropertyDescriptor(r2, e10)[t10]));
  } catch (r4) {
  }
}, t_ = function(r2) {
  if (T(r2) || null === r2)
    return r2;
  throw new tT("Can't set " + tS(r2) + " as a prototype");
}, tk = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r2, e10 = false, t10 = {};
  try {
    (r2 = tI(Object.prototype, "__proto__", "set"))(t10, []), e10 = t10 instanceof Array;
  } catch (r4) {
  }
  return function(t11, n10) {
    return rv(t11), t_(n10), T(t11) && (e10 ? r2(t11, n10) : t11.__proto__ = n10), t11;
  };
}() : void 0), tj = E.f, tD = function(r2, e10, t10) {
  var n10, o10;
  return tk && w(n10 = e10.constructor) && n10 !== t10 && T(o10 = n10.prototype) && o10 !== t10.prototype && tk(r2, o10), r2;
}, tM = function(r2, e10) {
  return void 0 === r2 ? arguments.length < 2 ? "" : e10 : eb(r2);
}, tC = Error, tP = W("".replace), tx = String(new tC("zxcasd").stack), tL = /\n\s*at [^:]*:[^\n]*/, tN = tL.test(tx), tF = function(r2, e10) {
  if (tN && "string" == typeof r2 && !tC.prepareStackTrace)
    for (; e10--; )
      r2 = tP(r2, tL, "");
  return r2;
}, tU = !A(function() {
  var r2 = Error("a");
  return !("stack" in r2) || (Object.defineProperty(r2, "stack", rQ(1, 7)), 7 !== r2.stack);
}), tB = Error.captureStackTrace, tV = function(r2, e10, t10) {
  t10 in r2 || tj(r2, t10, { configurable: true, get: function() {
    return e10[t10];
  }, set: function(r4) {
    e10[t10] = r4;
  } });
}, tW = function(r2, e10) {
  T(e10) && "cause" in e10 && rX(r2, "cause", e10.cause);
}, tz = function(r2, e10, t10, n10) {
  tU && (tB ? tB(r2, e10) : rX(r2, "stack", tF(t10, n10)));
}, tH = function(r2, e10, t10, n10) {
  var o10 = "stackTraceLimit", a3 = n10 ? 2 : 1, i2 = r2.split("."), c2 = i2[i2.length - 1], u2 = F.apply(null, i2);
  if (u2) {
    var f2 = u2.prototype;
    if (rw(f2, "cause") && delete f2.cause, !t10)
      return u2;
    var s2 = F("Error"), l2 = e10(function(r4, e11) {
      var t11 = tM(n10 ? e11 : r4, void 0), o11 = n10 ? new u2(r4) : new u2();
      return void 0 !== t11 && rX(o11, "message", t11), tz(o11, l2, o11.stack, 2), this && z(f2, this) && tD(o11, this, l2), arguments.length > a3 && tW(o11, arguments[a3]), o11;
    });
    l2.prototype = f2, "Error" !== c2 ? tk ? tk(l2, s2) : tt(l2, s2, { name: true }) : O && o10 in u2 && (tV(l2, u2, o10), tV(l2, u2, "prepareStackTrace")), tt(l2, u2);
    try {
      f2.name !== c2 && rX(f2, "name", c2), f2.constructor = l2;
    } catch (r4) {
    }
    return l2;
  }
}, tY = "WebAssembly", tG = S[tY], t$ = 7 !== Error("e", { cause: 7 }).cause, tQ = function(r2, e10) {
  var t10 = {};
  t10[r2] = tH(r2, e10, t$), ts({ global: true, constructor: true, arity: 1, forced: t$ }, t10);
}, tX = function(r2, e10) {
  if (tG && tG[r2]) {
    var t10 = {};
    t10[r2] = tH(tY + "." + r2, e10, t$), ts({ target: tY, stat: true, constructor: true, arity: 1, forced: t$ }, t10);
  }
};
tQ("Error", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tQ("EvalError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tQ("RangeError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tQ("ReferenceError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tQ("SyntaxError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tQ("TypeError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tQ("URIError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tX("CompileError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tX("LinkError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
}), tX("RuntimeError", function(r2) {
  return function(e10) {
    return tR(r2, this, arguments);
  };
});
var tq = Array.isArray || function(r2) {
  return "Array" === el(r2);
}, tK = TypeError, tZ = Object.getOwnPropertyDescriptor, tJ = O && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (r2) {
    return r2 instanceof TypeError;
  }
}() ? function(r2, e10) {
  if (tq(r2) && !tZ(r2, "length").writable)
    throw new tK("Cannot set read only .length");
  return r2.length = e10;
} : function(r2, e10) {
  return r2.length = e10;
}, t0 = TypeError, t1 = function(r2) {
  if (r2 > 9007199254740991)
    throw t0("Maximum allowed index exceeded");
  return r2;
};
ts({ target: "Array", proto: true, arity: 1, forced: A(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (r2) {
    return r2 instanceof TypeError;
  }
}() }, { push: function(r2) {
  var e10 = rb(this), t10 = e1(e10), n10 = arguments.length;
  t1(t10 + n10);
  for (var o10 = 0; o10 < n10; o10++)
    e10[t10] = arguments[o10], t10++;
  return tJ(e10, t10), t10;
} });
var t2 = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, t4 = !A(function() {
  function r2() {
  }
  return r2.prototype.constructor = null, Object.getPrototypeOf(new r2()) !== r2.prototype;
}), t8 = rK("IE_PROTO"), t7 = Object, t9 = t7.prototype, t3 = t4 ? t7.getPrototypeOf : function(r2) {
  var e10 = rb(r2);
  if (rw(e10, t8))
    return e10[t8];
  var t10 = e10.constructor;
  return w(t10) && e10 instanceof t10 ? t10.prototype : e10 instanceof t7 ? t9 : null;
}, t6 = S.Int8Array, t5 = t6 && t6.prototype, nr = S.Uint8ClampedArray, ne = nr && nr.prototype, nt = t6 && t3(t6), nn = t5 && t3(t5), no = Object.prototype, na = S.TypeError, ni = r_("toStringTag"), nc = rR("TYPED_ARRAY_TAG"), nu = "TypedArrayConstructor", nf = t2 && !!tk && "Opera" !== ev(S.opera), ns = false, nl = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, np = { BigInt64Array: 8, BigUint64Array: 8 }, ny = function(r2) {
  var e10 = t3(r2);
  if (T(e10)) {
    var t10 = r8(e10);
    return t10 && rw(t10, nu) ? t10[nu] : ny(e10);
  }
}, nh = function(r2) {
  if (!T(r2))
    return false;
  var e10 = ev(r2);
  return rw(nl, e10) || rw(np, e10);
};
for (l in nl)
  (y = (p = S[l]) && p.prototype) ? r7(y)[nu] = p : nf = false;
for (l in np)
  (y = (p = S[l]) && p.prototype) && (r7(y)[nu] = p);
if ((!nf || !w(nt) || nt === Function.prototype) && (nt = function() {
  throw new na("Incorrect invocation");
}, nf))
  for (l in nl)
    S[l] && tk(S[l], nt);
if ((!nf || !nn || nn === no) && (nn = nt.prototype, nf))
  for (l in nl)
    S[l] && tk(S[l].prototype, nn);
if (nf && t3(ne) !== nn && tk(ne, nn), O && !rw(nn, ni))
  for (l in eC(nn, ni, { configurable: true, get: function() {
    return T(this) ? this[nc] : void 0;
  } }), nl)
    S[l] && rX(S[l], nc, l);
var nd = { NATIVE_ARRAY_BUFFER_VIEWS: nf, aTypedArray: function(r2) {
  if (nh(r2))
    return r2;
  throw new na("Target is not a typed array");
}, exportTypedArrayMethod: function(r2, e10, t10, n10) {
  if (O) {
    if (t10)
      for (var o10 in nl) {
        var a3 = S[o10];
        if (a3 && rw(a3.prototype, r2))
          try {
            delete a3.prototype[r2];
          } catch (t11) {
            try {
              a3.prototype[r2] = e10;
            } catch (r4) {
            }
          }
      }
    (!nn[r2] || t10) && ea(nn, r2, t10 ? e10 : nf && t5[r2] || e10, n10);
  }
}, getTypedArrayConstructor: ny, TypedArrayPrototype: nn }, nv = nd.aTypedArray;
(0, nd.exportTypedArrayMethod)("at", function(r2) {
  var e10 = nv(this), t10 = e1(e10), n10 = eq(r2), o10 = n10 >= 0 ? n10 : t10 + n10;
  return o10 < 0 || o10 >= t10 ? void 0 : e10[o10];
});
var ng = function(r2) {
  if ("Function" === el(r2))
    return W(r2);
}, nb = ng(ng.bind), nm = function(r2, e10) {
  return ro(r2), void 0 === e10 ? r2 : x ? nb(r2, e10) : function() {
    return r2.apply(e10, arguments);
  };
}, nw = function(r2) {
  var e10 = 1 === r2;
  return function(t10, n10, o10) {
    for (var a3, i2 = rb(t10), c2 = ez(i2), u2 = e1(c2), f2 = nm(n10, o10); u2-- > 0; )
      if (f2(a3 = c2[u2], u2, i2))
        switch (r2) {
          case 0:
            return a3;
          case 1:
            return u2;
        }
    return e10 ? -1 : void 0;
  };
}, nE = { findLast: nw(0), findLastIndex: nw(1) }, nA = nE.findLast, nO = nd.aTypedArray;
(0, nd.exportTypedArrayMethod)("findLast", function(r2) {
  return nA(nO(this), r2, arguments.length > 1 ? arguments[1] : void 0);
});
var nR = nE.findLastIndex, nS = nd.aTypedArray;
(0, nd.exportTypedArrayMethod)("findLastIndex", function(r2) {
  return nR(nS(this), r2, arguments.length > 1 ? arguments[1] : void 0);
});
var nT = RangeError, nI = function(r2) {
  var e10 = eq(r2);
  if (e10 < 0)
    throw new nT("The argument can't be less than 0");
  return e10;
}, n_ = RangeError, nk = function(r2, e10) {
  var t10 = nI(r2);
  if (t10 % e10)
    throw new n_("Wrong offset");
  return t10;
}, nj = S.RangeError, nD = S.Int8Array, nM = nD && nD.prototype, nC = nM && nM.set, nP = nd.aTypedArray, nx = nd.exportTypedArrayMethod, nL = !A(function() {
  var r2 = new Uint8ClampedArray(2);
  return N(nC, r2, { length: 1, 0: 3 }, 1), 3 !== r2[1];
}), nN = nL && nd.NATIVE_ARRAY_BUFFER_VIEWS && A(function() {
  var r2 = new nD(2);
  return r2.set(1), r2.set("2", 1), 0 !== r2[0] || 2 !== r2[1];
});
nx("set", function(r2) {
  nP(this);
  var e10 = nk(arguments.length > 1 ? arguments[1] : void 0, 1), t10 = rb(r2);
  if (nL)
    return N(nC, this, t10, e10);
  var n10 = this.length, o10 = e1(t10), a3 = 0;
  if (o10 + e10 > n10)
    throw new nj("Wrong length");
  for (; a3 < o10; )
    this[e10 + a3] = t10[a3++];
}, !nL || nN);
var nF = function(r2, e10) {
  for (var t10 = e1(r2), n10 = new e10(t10), o10 = 0; o10 < t10; o10++)
    n10[o10] = r2[t10 - o10 - 1];
  return n10;
}, nU = nd.aTypedArray, nB = nd.exportTypedArrayMethod, nV = nd.getTypedArrayConstructor;
nB("toReversed", function() {
  return nF(nU(this), nV(this));
});
var nW = function(r2, e10, t10) {
  for (var n10 = 0, o10 = arguments.length > 2 ? t10 : e1(e10), a3 = new r2(o10); o10 > n10; )
    a3[n10] = e10[n10++];
  return a3;
}, nz = nd.aTypedArray, nH = nd.getTypedArrayConstructor, nY = nd.exportTypedArrayMethod, nG = W(nd.TypedArrayPrototype.sort);
nY("toSorted", function(r2) {
  void 0 !== r2 && ro(r2);
  var e10 = nz(this);
  return nG(nW(nH(e10), e10), r2);
});
var n$ = RangeError, nQ = TypeError, nX = function(r2, e10, t10, n10) {
  var o10 = e1(r2), a3 = eq(t10), i2 = a3 < 0 ? o10 + a3 : a3;
  if (i2 >= o10 || i2 < 0)
    throw new n$("Incorrect index");
  for (var c2 = new e10(o10), u2 = 0; u2 < o10; u2++)
    c2[u2] = u2 === i2 ? n10 : r2[u2];
  return c2;
}, nq = function(r2) {
  var e10 = ev(r2);
  return "BigInt64Array" === e10 || "BigUint64Array" === e10;
}, nK = function(r2) {
  var e10 = rM(r2, "number");
  if ("number" == typeof e10)
    throw new nQ("Can't convert number to bigint");
  return BigInt(e10);
}, nZ = nd.aTypedArray, nJ = nd.getTypedArrayConstructor;
(0, nd.exportTypedArrayMethod)("with", { with: function(r2, e10) {
  var t10 = nZ(this), n10 = eq(r2), o10 = nq(t10) ? nK(e10) : +e10;
  return nX(t10, nJ(t10), n10, o10);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (r2) {
    return 8 === r2;
  }
}());
var n0 = W("".charAt);
ts({ target: "String", proto: true, forced: A(function() {
  return "\uD842" !== "𠮷".at(-2);
}) }, { at: function(r2) {
  var e10 = eb(rv(this)), t10 = e10.length, n10 = eq(r2), o10 = n10 >= 0 ? n10 : t10 + n10;
  return o10 < 0 || o10 >= t10 ? void 0 : n0(e10, o10);
} });
var n1 = {}, n2 = Object.keys || function(r2) {
  return e9(r2, e3);
};
n1.f = O && !D ? Object.defineProperties : function(r2, e10) {
  P(r2);
  for (var t10, n10 = eH(e10), o10 = n2(e10), a3 = o10.length, i2 = 0; a3 > i2; )
    E.f(r2, t10 = o10[i2++], n10[t10]);
  return r2;
};
var n4 = F("document", "documentElement"), n8 = "prototype", n7 = "script", n9 = rK("IE_PROTO"), n3 = function() {
}, n6 = function(r2) {
  return "<" + n7 + ">" + r2 + "</" + n7 + ">";
}, n5 = function(r2) {
  r2.write(n6("")), r2.close();
  var e10 = r2.parentWindow.Object;
  return r2 = null, e10;
}, or = function() {
  var r2, e10 = k("iframe");
  return e10.style.display = "none", n4.appendChild(e10), e10.src = String("java" + n7 + ":"), (r2 = e10.contentWindow.document).open(), r2.write(n6("document.F=Object")), r2.close(), r2.F;
}, oe = function() {
  try {
    h = new ActiveXObject("htmlfile");
  } catch (r4) {
  }
  oe = "undefined" != typeof document ? document.domain && h ? n5(h) : or() : n5(h);
  for (var r2 = e3.length; r2--; )
    delete oe[n8][e3[r2]];
  return oe();
};
rZ[n9] = true;
var ot = Object.create || function(r2, e10) {
  var t10;
  return null !== r2 ? (n3[n8] = P(r2), t10 = new n3(), n3[n8] = null, t10[n9] = r2) : t10 = oe(), void 0 === e10 ? t10 : n1.f(t10, e10);
}, on = E.f, oo = r_("unscopables"), oa = Array.prototype;
void 0 === oa[oo] && on(oa, oo, { configurable: true, value: ot(null) });
var oi = function(r2) {
  oa[oo][r2] = true;
};
ts({ target: "Array", proto: true }, { at: function(r2) {
  var e10 = rb(this), t10 = e1(e10), n10 = eq(r2), o10 = n10 >= 0 ? n10 : t10 + n10;
  return o10 < 0 || o10 >= t10 ? void 0 : e10[o10];
} }), oi("at");
var oc = E.f, ou = r_("toStringTag");
ts({ global: true }, { Reflect: {} }), t = S.Reflect, n = "Reflect", t && !rw(t, ou) && oc(t, ou, { configurable: true, value: n });
var of = function() {
}, os = F("Reflect", "construct"), ol = /^\s*(?:class|function)\b/, op = W(ol.exec), oy = !ol.test(of), oh = function(r2) {
  if (!w(r2))
    return false;
  try {
    return os(of, [], r2), true;
  } catch (r4) {
    return false;
  }
}, od = function(r2) {
  if (!w(r2))
    return false;
  switch (ev(r2)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return oy || !!op(ol, rY(r2));
  } catch (r4) {
    return true;
  }
};
od.sham = true;
var ov = !os || A(function() {
  var r2;
  return oh(oh.call) || !oh(Object) || !oh(function() {
    r2 = true;
  }) || r2;
}) ? od : oh, og = {}, ob = r_("iterator"), om = Array.prototype, ow = r_("iterator"), oE = function(r2) {
  if (!ra(r2))
    return ri(r2, ow) || ri(r2, "@@iterator") || og[ev(r2)];
}, oA = TypeError, oO = function(r2, e10) {
  var t10 = arguments.length < 2 ? oE(r2) : e10;
  if (ro(t10))
    return P(N(t10, r2));
  throw new oA(rt(r2) + " is not iterable");
}, oR = function(r2, e10, t10) {
  var n10, o10;
  P(r2);
  try {
    if (!(n10 = ri(r2, "return"))) {
      if ("throw" === e10)
        throw t10;
      return t10;
    }
    n10 = N(n10, r2);
  } catch (r4) {
    o10 = true, n10 = r4;
  }
  if ("throw" === e10)
    throw t10;
  if (o10)
    throw n10;
  return P(n10), t10;
}, oS = TypeError, oT = function(r2, e10) {
  this.stopped = r2, this.result = e10;
}, oI = oT.prototype, o_ = function() {
  var r2 = P(this), e10 = "";
  return r2.hasIndices && (e10 += "d"), r2.global && (e10 += "g"), r2.ignoreCase && (e10 += "i"), r2.multiline && (e10 += "m"), r2.dotAll && (e10 += "s"), r2.unicode && (e10 += "u"), r2.unicodeSets && (e10 += "v"), r2.sticky && (e10 += "y"), e10;
}, ok = RegExp.prototype, oj = function(r2) {
  var e10 = r2.flags;
  return void 0 === e10 && !("flags" in ok) && !rw(r2, "flags") && z(ok, r2) ? N(o_, r2) : e10;
}, oD = Map.prototype, oM = { Map, set: W(oD.set), get: W(oD.get), has: W(oD.has), remove: W(oD.delete), proto: oD }, oC = Set.prototype, oP = { Set, add: W(oC.add), has: W(oC.has), remove: W(oC.delete), proto: oC }, ox = oP.Set, oL = oP.proto, oN = W(oL.forEach), oF = (W(oL.keys)(new ox()).next, "object" == typeof Deno && Deno && "object" == typeof Deno.version), oU = !oF && !td && "object" == typeof window && "object" == typeof document, oB = S.structuredClone, oV = !!oB && !A(function() {
  if (oF && X > 92 || td && X > 94 || oU && X > 97)
    return false;
  var r2 = new ArrayBuffer(8), e10 = oB(r2, { transfer: [r2] });
  return 0 !== r2.byteLength || 8 !== e10.byteLength;
}), oW = S.structuredClone, oz = S.ArrayBuffer, oH = S.MessageChannel, oY = false;
if (oV)
  oY = function(r2) {
    oW(r2, { transfer: [r2] });
  };
else if (oz)
  try {
    !oH && (d = function(r2) {
      try {
        if (td)
          return Function('return require("' + r2 + '")')();
      } catch (r4) {
      }
    }("worker_threads")) && (oH = d.MessageChannel), oH && (v = new oH(), g = new oz(2), b = function(r2) {
      v.port1.postMessage(null, [r2]);
    }, 2 === g.byteLength && (b(g), 0 === g.byteLength && (oY = b)));
  } catch (r2) {
  }
var oG = oY, o$ = function(r2, e10, t10) {
  var n10, o10, a3, i2, c2, u2, f2, s2 = t10 && t10.that, l2 = !!(t10 && t10.AS_ENTRIES), p2 = !!(t10 && t10.IS_RECORD), y2 = !!(t10 && t10.IS_ITERATOR), h2 = !!(t10 && t10.INTERRUPTED), d2 = nm(e10, s2), v2 = function(r4) {
    return n10 && oR(n10, "normal", r4), new oT(true, r4);
  }, g2 = function(r4) {
    return l2 ? (P(r4), h2 ? d2(r4[0], r4[1], v2) : d2(r4[0], r4[1])) : h2 ? d2(r4, v2) : d2(r4);
  };
  if (p2)
    n10 = r2.iterator;
  else if (y2)
    n10 = r2;
  else {
    if (!(o10 = oE(r2)))
      throw new oS(rt(r2) + " is not iterable");
    if (void 0 !== o10 && (og.Array === o10 || om[ob] === o10)) {
      for (a3 = 0, i2 = e1(r2); i2 > a3; a3++)
        if ((c2 = g2(r2[a3])) && z(oI, c2))
          return c2;
      return new oT(false);
    }
    n10 = oO(r2, o10);
  }
  for (u2 = p2 ? r2.next : n10.next; !(f2 = N(u2, n10)).done; ) {
    try {
      c2 = g2(f2.value);
    } catch (r4) {
      oR(n10, "throw", r4);
    }
    if ("object" == typeof c2 && c2 && z(oI, c2))
      return c2;
  }
  return new oT(false);
}, oQ = function(r2, e10, t10) {
  O ? E.f(r2, e10, rQ(0, t10)) : r2[e10] = t10;
}, oX = S.Object, oq = S.Array, oK = S.Date, oZ = S.Error, oJ = S.TypeError, o0 = S.PerformanceMark, o1 = F("DOMException"), o2 = oM.Map, o4 = oM.has, o8 = oM.get, o7 = oM.set, o9 = oP.Set, o3 = oP.add, o6 = oP.has, o5 = F("Object", "keys"), ar = W([].push), ae = W(true.valueOf), at = W(1 .valueOf), an = W("".valueOf), ao = W(oK.prototype.getTime), aa = rR("structuredClone"), ai = "DataCloneError", ac = "Transferring", au = function(r2) {
  return !A(function() {
    var e10 = new S.Set([7]), t10 = r2(e10), n10 = r2(oX(7));
    return t10 === e10 || !t10.has(7) || !T(n10) || 7 != +n10;
  }) && r2;
}, af = function(r2, e10) {
  return !A(function() {
    var t10 = new e10(), n10 = r2({ a: t10, b: t10 });
    return !(n10 && n10.a === n10.b && n10.a instanceof e10 && n10.a.stack === t10.stack);
  });
}, as = S.structuredClone, al = !af(as, oZ) || !af(as, o1) || !!A(function() {
  var r2 = as(new S.AggregateError([1], aa, { cause: 3 }));
  return "AggregateError" !== r2.name || 1 !== r2.errors[0] || r2.message !== aa || 3 !== r2.cause;
}), ap = !as && au(function(r2) {
  return new o0(aa, { detail: r2 }).detail;
}), ay = au(as) || ap, ah = function(r2) {
  throw new o1("Uncloneable type: " + r2, ai);
}, ad = function(r2, e10) {
  throw new o1((e10 || "Cloning") + " of " + r2 + " cannot be properly polyfilled in this engine", ai);
}, av = function(r2, e10) {
  return ay || ad(e10), ay(r2);
}, ag = function() {
  var r2;
  try {
    r2 = new S.DataTransfer();
  } catch (e10) {
    try {
      r2 = new S.ClipboardEvent("").clipboardData;
    } catch (r4) {
    }
  }
  return r2 && r2.items && r2.files ? r2 : null;
}, ab = function(r2, e10, t10) {
  if (o4(e10, r2))
    return o8(e10, r2);
  if ("SharedArrayBuffer" === (t10 || ev(r2)))
    n10 = ay ? ay(r2) : r2;
  else {
    var n10, o10, a3, i2, c2, u2, f2 = S.DataView;
    f2 || w(r2.slice) || ad("ArrayBuffer");
    try {
      if (w(r2.slice) && !r2.resizable)
        n10 = r2.slice(0);
      else
        for (u2 = 0, o10 = r2.byteLength, a3 = ("maxByteLength" in r2) ? { maxByteLength: r2.maxByteLength } : void 0, n10 = new ArrayBuffer(o10, a3), i2 = new f2(r2), c2 = new f2(n10); u2 < o10; u2++)
          c2.setUint8(u2, i2.getUint8(u2));
    } catch (r4) {
      throw new o1("ArrayBuffer is detached", ai);
    }
  }
  return o7(e10, r2, n10), n10;
}, am = function(r2, e10, t10, n10, o10) {
  var a3 = S[e10];
  return T(a3) || ad(e10), new a3(ab(r2.buffer, o10), t10, n10);
}, aw = function(r2, e10) {
  if (rr(r2) && ah("Symbol"), !T(r2))
    return r2;
  if (e10) {
    if (o4(e10, r2))
      return o8(e10, r2);
  } else
    e10 = new o2();
  var t10, n10, o10, a3, i2, c2, u2, f2, s2 = ev(r2);
  switch (s2) {
    case "Array":
      o10 = oq(e1(r2));
      break;
    case "Object":
      o10 = {};
      break;
    case "Map":
      o10 = new o2();
      break;
    case "Set":
      o10 = new o9();
      break;
    case "RegExp":
      o10 = new RegExp(r2.source, oj(r2));
      break;
    case "Error":
      switch (n10 = r2.name) {
        case "AggregateError":
          o10 = new (F(n10))([]);
          break;
        case "EvalError":
        case "RangeError":
        case "ReferenceError":
        case "SuppressedError":
        case "SyntaxError":
        case "TypeError":
        case "URIError":
          o10 = new (F(n10))();
          break;
        case "CompileError":
        case "LinkError":
        case "RuntimeError":
          o10 = new (F("WebAssembly", n10))();
          break;
        default:
          o10 = new oZ();
      }
      break;
    case "DOMException":
      o10 = new o1(r2.message, r2.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      o10 = ab(r2, e10, s2);
      break;
    case "DataView":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float16Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      c2 = "DataView" === s2 ? r2.byteLength : r2.length, o10 = am(r2, s2, r2.byteOffset, c2, e10);
      break;
    case "DOMQuad":
      try {
        o10 = new DOMQuad(aw(r2.p1, e10), aw(r2.p2, e10), aw(r2.p3, e10), aw(r2.p4, e10));
      } catch (e11) {
        o10 = av(r2, s2);
      }
      break;
    case "File":
      if (ay)
        try {
          o10 = ay(r2), ev(o10) !== s2 && (o10 = void 0);
        } catch (r4) {
        }
      if (!o10)
        try {
          o10 = new File([r2], r2.name, r2);
        } catch (r4) {
        }
      o10 || ad(s2);
      break;
    case "FileList":
      if (a3 = ag()) {
        for (i2 = 0, c2 = e1(r2); i2 < c2; i2++)
          a3.items.add(aw(r2[i2], e10));
        o10 = a3.files;
      } else
        o10 = av(r2, s2);
      break;
    case "ImageData":
      try {
        o10 = new ImageData(aw(r2.data, e10), r2.width, r2.height, { colorSpace: r2.colorSpace });
      } catch (e11) {
        o10 = av(r2, s2);
      }
      break;
    default:
      if (ay)
        o10 = ay(r2);
      else
        switch (s2) {
          case "BigInt":
            o10 = oX(r2.valueOf());
            break;
          case "Boolean":
            o10 = oX(ae(r2));
            break;
          case "Number":
            o10 = oX(at(r2));
            break;
          case "String":
            o10 = oX(an(r2));
            break;
          case "Date":
            o10 = new oK(ao(r2));
            break;
          case "Blob":
            try {
              o10 = r2.slice(0, r2.size, r2.type);
            } catch (r4) {
              ad(s2);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            t10 = S[s2];
            try {
              o10 = t10.fromPoint ? t10.fromPoint(r2) : new t10(r2.x, r2.y, r2.z, r2.w);
            } catch (r4) {
              ad(s2);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            t10 = S[s2];
            try {
              o10 = t10.fromRect ? t10.fromRect(r2) : new t10(r2.x, r2.y, r2.width, r2.height);
            } catch (r4) {
              ad(s2);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            t10 = S[s2];
            try {
              o10 = t10.fromMatrix ? t10.fromMatrix(r2) : new t10(r2);
            } catch (r4) {
              ad(s2);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            w(r2.clone) || ad(s2);
            try {
              o10 = r2.clone();
            } catch (r4) {
              ah(s2);
            }
            break;
          case "CropTarget":
          case "CryptoKey":
          case "FileSystemDirectoryHandle":
          case "FileSystemFileHandle":
          case "FileSystemHandle":
          case "GPUCompilationInfo":
          case "GPUCompilationMessage":
          case "ImageBitmap":
          case "RTCCertificate":
          case "WebAssembly.Module":
            ad(s2);
          default:
            ah(s2);
        }
  }
  switch (o7(e10, r2, o10), s2) {
    case "Array":
    case "Object":
      for (i2 = 0, c2 = e1(u2 = o5(r2)); i2 < c2; i2++)
        f2 = u2[i2], oQ(o10, f2, aw(r2[f2], e10));
      break;
    case "Map":
      r2.forEach(function(r4, t11) {
        o7(o10, aw(t11, e10), aw(r4, e10));
      });
      break;
    case "Set":
      r2.forEach(function(r4) {
        o3(o10, aw(r4, e10));
      });
      break;
    case "Error":
      rX(o10, "message", aw(r2.message, e10)), rw(r2, "cause") && rX(o10, "cause", aw(r2.cause, e10)), "AggregateError" === n10 ? o10.errors = aw(r2.errors, e10) : "SuppressedError" === n10 && (o10.error = aw(r2.error, e10), o10.suppressed = aw(r2.suppressed, e10));
    case "DOMException":
      tU && rX(o10, "stack", aw(r2.stack, e10));
  }
  return o10;
}, aE = function(r2, e10) {
  if (!T(r2))
    throw new oJ("Transfer option cannot be converted to a sequence");
  var t10, n10, o10, a3, i2, c2 = [];
  o$(r2, function(r4) {
    ar(c2, P(r4));
  });
  for (var u2 = 0, f2 = e1(c2), s2 = new o9(); u2 < f2; ) {
    if ("ArrayBuffer" === (n10 = ev(t10 = c2[u2++])) ? o6(s2, t10) : o4(e10, t10))
      throw new o1("Duplicate transferable", ai);
    if ("ArrayBuffer" === n10) {
      o3(s2, t10);
      continue;
    }
    if (oV)
      a3 = as(t10, { transfer: [t10] });
    else
      switch (n10) {
        case "ImageBitmap":
          ov(o10 = S.OffscreenCanvas) || ad(n10, ac);
          try {
            (i2 = new o10(t10.width, t10.height)).getContext("bitmaprenderer").transferFromImageBitmap(t10), a3 = i2.transferToImageBitmap();
          } catch (r4) {
          }
          break;
        case "AudioData":
        case "VideoFrame":
          w(t10.clone) && w(t10.close) || ad(n10, ac);
          try {
            a3 = t10.clone(), t10.close();
          } catch (r4) {
          }
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          ad(n10, ac);
      }
    if (void 0 === a3)
      throw new o1("This object cannot be transferred: " + n10, ai);
    o7(e10, t10, a3);
  }
  return s2;
}, aA = function(r2) {
  oN(r2, function(r4) {
    oV ? ay(r4, { transfer: [r4] }) : w(r4.transfer) ? r4.transfer() : oG ? oG(r4) : ad("ArrayBuffer", ac);
  });
};
ts({ global: true, enumerable: true, sham: !oV, forced: al }, { structuredClone: function(r2) {
  var e10, t10, n10 = ew(arguments.length, 1) > 1 && !ra(arguments[1]) ? P(arguments[1]) : void 0, o10 = n10 ? n10.transfer : void 0;
  void 0 !== o10 && (t10 = aE(o10, e10 = new o2()));
  var a3 = aw(r2, e10);
  return t10 && aA(t10), a3;
} });
var aO = TypeError, aR = E.f, aS = function(r2, e10) {
  if (z(e10, r2))
    return r2;
  throw new aO("Incorrect invocation");
}, aT = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } }, aI = "DOMException", a_ = F("Error"), ak = F(aI), aj = function() {
  aS(this, aD);
  var r2 = arguments.length, e10 = tM(r2 < 1 ? void 0 : arguments[0]), t10 = tM(r2 < 2 ? void 0 : arguments[1], "Error"), n10 = new ak(e10, t10), o10 = new a_(e10);
  return o10.name = aI, aR(n10, "stack", rQ(1, tF(o10.stack, 1))), tD(n10, this, aj), n10;
}, aD = aj.prototype = ak.prototype, aM = "stack" in new a_(aI), aC = "stack" in new ak(1, 2), aP = ak && O && Object.getOwnPropertyDescriptor(S, aI), ax = !!aP && !(aP.writable && aP.configurable), aL = aM && !ax && !aC;
ts({ global: true, constructor: true, forced: aL }, { DOMException: aL ? aj : ak });
var aN = F(aI), aF = aN.prototype;
if (aF.constructor !== aN) {
  for (var aU in aR(aF, "constructor", rQ(1, aN)), aT)
    if (rw(aT, aU)) {
      var aB = aT[aU], aV = aB.s;
      rw(aN, aV) || aR(aN, aV, rQ(6, aB.c));
    }
}
var aW = r_("match"), az = Math.floor, aH = W("".charAt), aY = W("".replace), aG = W("".slice), a$ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, aQ = /\$([$&'`]|\d{1,2})/g, aX = function(r2) {
  var e10;
  return T(r2) && (void 0 !== (e10 = r2[aW]) ? !!e10 : "RegExp" === el(r2));
}, aq = function(r2, e10, t10, n10, o10, a3) {
  var i2 = t10 + r2.length, c2 = n10.length, u2 = aQ;
  return void 0 !== o10 && (o10 = rb(o10), u2 = a$), aY(a3, u2, function(a5, u3) {
    var f2;
    switch (aH(u3, 0)) {
      case "$":
        return "$";
      case "&":
        return r2;
      case "`":
        return aG(e10, 0, t10);
      case "'":
        return aG(e10, i2);
      case "<":
        f2 = o10[aG(u3, 1, -1)];
        break;
      default:
        var s2 = +u3;
        if (0 === s2)
          return a5;
        if (s2 > c2) {
          var l2 = az(s2 / 10);
          if (0 === l2)
            return a5;
          if (l2 <= c2)
            return void 0 === n10[l2 - 1] ? aH(u3, 1) : n10[l2 - 1] + aH(u3, 1);
          return a5;
        }
        f2 = n10[s2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, aK = r_("replace"), aZ = TypeError, aJ = W("".indexOf);
W("".replace);
var a0 = W("".slice), a1 = Math.max;
ts({ target: "String", proto: true }, { replaceAll: function(r2, e10) {
  var t10, n10, o10, a3, i2, c2, u2, f2 = rv(this), s2 = 0, l2 = 0, p2 = "";
  if (!ra(r2)) {
    if (aX(r2) && !~aJ(eb(rv(oj(r2))), "g"))
      throw new aZ("`.replaceAll` does not allow non-global regexes");
    if (t10 = ri(r2, aK))
      return N(t10, r2, f2, e10);
  }
  for (n10 = eb(f2), o10 = eb(r2), (a3 = w(e10)) || (e10 = eb(e10)), c2 = a1(1, i2 = o10.length), s2 = aJ(n10, o10); -1 !== s2; )
    u2 = a3 ? eb(e10(o10, s2, n10)) : aq(o10, n10, s2, [], void 0, e10), p2 += a0(n10, l2, s2) + u2, l2 = s2 + i2, s2 = s2 + c2 > n10.length ? -1 : aJ(n10, o10, s2 + c2);
  return l2 < n10.length && (p2 += a0(n10, l2)), p2;
} });
var a2 = Array, a4 = W((a = (o = S.Array) && o.prototype) && a.sort);
ts({ target: "Array", proto: true }, { toSorted: function(r2) {
  return void 0 !== r2 && ro(r2), a4(nW(a2, eH(this)), r2);
} }), oi("toSorted");
var a8 = S.RegExp, a7 = a8.prototype;
O && A(function() {
  var r2 = true;
  try {
    a8(".", "d");
  } catch (e11) {
    r2 = false;
  }
  var e10 = {}, t10 = "", n10 = r2 ? "dgimsy" : "gimsy", o10 = function(r4, n11) {
    Object.defineProperty(e10, r4, { get: function() {
      return t10 += n11, true;
    } });
  }, a3 = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
  for (var i2 in r2 && (a3.hasIndices = "d"), a3)
    o10(i2, a3[i2]);
  return Object.getOwnPropertyDescriptor(a7, "flags").get.call(e10) !== n10 || t10 !== n10;
}) && eC(a7, "flags", { configurable: true, get: o_ });
