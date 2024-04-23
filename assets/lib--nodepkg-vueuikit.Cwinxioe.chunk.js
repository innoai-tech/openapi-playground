var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _e, _t, _r, r_get, _n, n_fn;
let e, t, r, n, a, i, o, l;
import { e as s, c, f as u, r as d, g as f, s as p, t as h, I as m, b as g, d as y, R as b, h as w, u as _, i as x, o as k, a as S } from "./lib--nodepkg-vuekit.GwyEMV02.chunk.js";
import { j as O, a as C } from "./lib--nodepkg-vue-jsx-runtime.CmBQ_T3E.chunk.js";
import { k as M, g as A, b as P, l as E, s as T, e as R, m as $, n as I, q as D, t as j, u as L, v as F, w as B, x as N, i as V, a as W, y as H, z as U, c as z, A as q, h as G, B as Y, f as J, C as K, J as X, D as Q, j as Z, d as ee, o as et } from "./lib--nodepkg-typedef.5X_Ny0jI.chunk.js";
import { c as er, a as en, p as ea, t as ei } from "./vendor--innoai-tech-fetcher.B3L5S2ar.chunk.js";
import { B as eo, s as el, m as es, a as ec, E as eu, o as ed, S as ef, t as ep, b as eh, c as em, e as eg } from "./vendor--rxjs.D2Za7iWR.chunk.js";
import { _ as ev } from "./vendor--tslib.kWYf_5KY.chunk.js";
import { M as ey } from "./lib--nodepkg-vuemarkdown.DakzufYN.chunk.js";
import { l as eb, i as ew, F as e_ } from "./lib--nodepkg-vueformdata.BxWjYDmW.chunk.js";
import { F as ex, m as ek, I as eS } from "./lib--nodepkg-vuematerial.Djlk33Dj.chunk.js";
import { j as eO, k as eC, u as eM, l as eA, m as eP, n as eE, o as eT, p as eR, q as e$, r as eI, v as eD, w as ej } from "./lib--nodepkg-codemirror.B9tdRH3C.chunk.js";
import { J as eL, j as eF, a as eB, b as eN } from "./lib--nodepkg-jsoncue.Cm_iMJI_.chunk.js";
(function() {
  let e10 = document.createElement("link").relList;
  if (!(e10 && e10.supports && e10.supports("modulepreload"))) {
    for (let e11 of document.querySelectorAll('link[rel="modulepreload"]'))
      t10(e11);
    new MutationObserver((e11) => {
      for (let r10 of e11)
        if ("childList" === r10.type)
          for (let e12 of r10.addedNodes)
            "LINK" === e12.tagName && "modulepreload" === e12.rel && t10(e12);
    }).observe(document, { childList: true, subtree: true });
  }
  function t10(e11) {
    if (e11.ep)
      return;
    e11.ep = true;
    let t11 = function(e12) {
      let t12 = {};
      return e12.integrity && (t12.integrity = e12.integrity), e12.referrerPolicy && (t12.referrerPolicy = e12.referrerPolicy), "use-credentials" === e12.crossOrigin ? t12.credentials = "include" : "anonymous" === e12.crossOrigin ? t12.credentials = "omit" : t12.credentials = "same-origin", t12;
    }(e11);
    fetch(e11.href, t11);
  }
})();
var eV, eW, eH, eU, ez, eq, eG, eY, eJ, eK, eX, eQ, eZ, e0, e1, e2, e4, e3, e5, e8, e6, e9, e7, te, tt, tr, tn, ta, ti, to = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, tl = "object" == typeof document && document.all, ts = void 0 === tl && void 0 !== tl ? function(e10) {
  return "function" == typeof e10 || e10 === tl;
} : function(e10) {
  return "function" == typeof e10;
}, tc = {}, tu = function(e10) {
  try {
    return !!e10();
  } catch (e11) {
    return true;
  }
}, td = !tu(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), tf = function(e10) {
  return e10 && e10.Math === Math && e10;
}, tp = tf("object" == typeof globalThis && globalThis) || tf("object" == typeof window && window) || tf("object" == typeof self && self) || tf("object" == typeof to && to) || tf("object" == typeof to && to) || /* @__PURE__ */ function() {
  return this;
}() || Function("return this")(), th = function(e10) {
  return "object" == typeof e10 ? null !== e10 : ts(e10);
}, tm = tp.document, tg = th(tm) && th(tm.createElement), tv = function(e10) {
  return tg ? tm.createElement(e10) : {};
}, ty = !td && !tu(function() {
  return 7 !== Object.defineProperty(tv("div"), "a", { get: function() {
    return 7;
  } }).a;
}), tb = td && tu(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), tw = String, t_ = TypeError, tx = function(e10) {
  if (th(e10))
    return e10;
  throw new t_(tw(e10) + " is not an object");
}, tk = !tu(function() {
  var e10 = (function() {
  }).bind();
  return "function" != typeof e10 || e10.hasOwnProperty("prototype");
}), tS = Function.prototype.call, tO = tk ? tS.bind(tS) : function() {
  return tS.apply(tS, arguments);
}, tC = function(e10, t10) {
  var r10;
  return arguments.length < 2 ? ts(r10 = tp[e10]) ? r10 : void 0 : tp[e10] && tp[e10][t10];
}, tM = Function.prototype, tA = tM.call, tP = tk && tM.bind.bind(tA, tA), tE = tk ? tP : function(e10) {
  return function() {
    return tA.apply(e10, arguments);
  };
}, tT = tE({}.isPrototypeOf), tR = "undefined" != typeof navigator && String(navigator.userAgent) || "", t$ = tp.process, tI = tp.Deno, tD = t$ && t$.versions || tI && tI.version, tj = tD && tD.v8;
tj && (e2 = (e1 = tj.split("."))[0] > 0 && e1[0] < 4 ? 1 : +(e1[0] + e1[1])), !e2 && tR && (!(e1 = tR.match(/Edge\/(\d+)/)) || e1[1] >= 74) && (e1 = tR.match(/Chrome\/(\d+)/)) && (e2 = +e1[1]);
var tL = e2, tF = tp.String, tB = !!Object.getOwnPropertySymbols && !tu(function() {
  var e10 = Symbol("symbol detection");
  return !tF(e10) || !(Object(e10) instanceof Symbol) || !Symbol.sham && tL && tL < 41;
}), tN = tB && !Symbol.sham && "symbol" == typeof Symbol.iterator, tV = Object, tW = tN ? function(e10) {
  return "symbol" == typeof e10;
} : function(e10) {
  var t10 = tC("Symbol");
  return ts(t10) && tT(t10.prototype, tV(e10));
}, tH = String, tU = function(e10) {
  try {
    return tH(e10);
  } catch (e11) {
    return "Object";
  }
}, tz = TypeError, tq = function(e10) {
  if (ts(e10))
    return e10;
  throw new tz(tU(e10) + " is not a function");
}, tG = function(e10) {
  return null == e10;
}, tY = function(e10, t10) {
  var r10 = e10[t10];
  return tG(r10) ? void 0 : tq(r10);
}, tJ = TypeError, tK = { exports: {} }, tX = Object.defineProperty, tQ = function(e10, t10) {
  try {
    tX(tp, e10, { value: t10, configurable: true, writable: true });
  } catch (r10) {
    tp[e10] = t10;
  }
  return t10;
}, tZ = "__core-js_shared__", t0 = tK.exports = tp[tZ] || tQ(tZ, {});
(t0.versions || (t0.versions = [])).push({ version: "3.37.0", mode: "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var t1 = tK.exports, t2 = function(e10, t10) {
  return t1[e10] || (t1[e10] = t10 || {});
}, t4 = TypeError, t3 = function(e10) {
  if (tG(e10))
    throw new t4("Can't call method on " + e10);
  return e10;
}, t5 = Object, t8 = function(e10) {
  return t5(t3(e10));
}, t6 = tE({}.hasOwnProperty), t9 = Object.hasOwn || function(e10, t10) {
  return t6(t8(e10), t10);
}, t7 = 0, re = Math.random(), rt = tE(1 .toString), rr = function(e10) {
  return "Symbol(" + (void 0 === e10 ? "" : e10) + ")_" + rt(++t7 + re, 36);
}, rn = tp.Symbol, ra = t2("wks"), ri = tN ? rn.for || rn : rn && rn.withoutSetter || rr, ro = function(e10) {
  return t9(ra, e10) || (ra[e10] = tB && t9(rn, e10) ? rn[e10] : ri("Symbol." + e10)), ra[e10];
}, rl = function(e10, t10) {
  var r10, n9;
  if ("string" === t10 && ts(r10 = e10.toString) && !th(n9 = tO(r10, e10)) || ts(r10 = e10.valueOf) && !th(n9 = tO(r10, e10)) || "string" !== t10 && ts(r10 = e10.toString) && !th(n9 = tO(r10, e10)))
    return n9;
  throw new tJ("Can't convert object to primitive value");
}, rs = TypeError, rc = ro("toPrimitive"), ru = function(e10, t10) {
  if (!th(e10) || tW(e10))
    return e10;
  var r10, n9 = tY(e10, rc);
  if (n9) {
    if (void 0 === t10 && (t10 = "default"), !th(r10 = tO(n9, e10, t10)) || tW(r10))
      return r10;
    throw new rs("Can't convert object to primitive value");
  }
  return void 0 === t10 && (t10 = "number"), rl(e10, t10);
}, rd = function(e10) {
  var t10 = ru(e10, "string");
  return tW(t10) ? t10 : t10 + "";
}, rf = TypeError, rp = Object.defineProperty, rh = Object.getOwnPropertyDescriptor, rm = "enumerable", rg = "configurable", rv = "writable";
tc.f = td ? tb ? function(e10, t10, r10) {
  if (tx(e10), t10 = rd(t10), tx(r10), "function" == typeof e10 && "prototype" === t10 && "value" in r10 && rv in r10 && !r10[rv]) {
    var n9 = rh(e10, t10);
    n9 && n9[rv] && (e10[t10] = r10.value, r10 = { configurable: rg in r10 ? r10[rg] : n9[rg], enumerable: rm in r10 ? r10[rm] : n9[rm], writable: false });
  }
  return rp(e10, t10, r10);
} : rp : function(e10, t10, r10) {
  if (tx(e10), t10 = rd(t10), tx(r10), ty)
    try {
      return rp(e10, t10, r10);
    } catch (e11) {
    }
  if ("get" in r10 || "set" in r10)
    throw new rf("Accessors not supported");
  return "value" in r10 && (e10[t10] = r10.value), e10;
};
var ry = { exports: {} }, rb = Function.prototype, rw = td && Object.getOwnPropertyDescriptor, r_ = t9(rb, "name") && (!td || td && rw(rb, "name").configurable), rx = tE(Function.toString);
ts(t1.inspectSource) || (t1.inspectSource = function(e10) {
  return rx(e10);
});
var rk = t1.inspectSource, rS = tp.WeakMap, rO = ts(rS) && /native code/.test(String(rS)), rC = function(e10, t10) {
  return { enumerable: !(1 & e10), configurable: !(2 & e10), writable: !(4 & e10), value: t10 };
}, rM = td ? function(e10, t10, r10) {
  return tc.f(e10, t10, rC(1, r10));
} : function(e10, t10, r10) {
  return e10[t10] = r10, e10;
}, rA = t2("keys"), rP = function(e10) {
  return rA[e10] || (rA[e10] = rr(e10));
}, rE = {}, rT = "Object already initialized", rR = tp.TypeError, r$ = tp.WeakMap;
if (rO || t1.state) {
  var rI = t1.state || (t1.state = new r$());
  rI.get = rI.get, rI.has = rI.has, rI.set = rI.set, e4 = function(e10, t10) {
    if (rI.has(e10))
      throw new rR(rT);
    return t10.facade = e10, rI.set(e10, t10), t10;
  }, e3 = function(e10) {
    return rI.get(e10) || {};
  }, e5 = function(e10) {
    return rI.has(e10);
  };
} else {
  var rD = rP("state");
  rE[rD] = true, e4 = function(e10, t10) {
    if (t9(e10, rD))
      throw new rR(rT);
    return t10.facade = e10, rM(e10, rD, t10), t10;
  }, e3 = function(e10) {
    return t9(e10, rD) ? e10[rD] : {};
  }, e5 = function(e10) {
    return t9(e10, rD);
  };
}
var rj = e3, rL = function(e10) {
  return e5(e10) ? e3(e10) : e4(e10, {});
}, rF = String, rB = Object.defineProperty, rN = tE("".slice), rV = tE("".replace), rW = tE([].join), rH = td && !tu(function() {
  return 8 !== rB(function() {
  }, "length", { value: 8 }).length;
}), rU = String(String).split("String"), rz = ry.exports = function(e10, t10, r10) {
  "Symbol(" === rN(rF(t10), 0, 7) && (t10 = "[" + rV(rF(t10), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r10 && r10.getter && (t10 = "get " + t10), r10 && r10.setter && (t10 = "set " + t10), (!t9(e10, "name") || r_ && e10.name !== t10) && (td ? rB(e10, "name", { value: t10, configurable: true }) : e10.name = t10), rH && r10 && t9(r10, "arity") && e10.length !== r10.arity && rB(e10, "length", { value: r10.arity });
  try {
    r10 && t9(r10, "constructor") && r10.constructor ? td && rB(e10, "prototype", { writable: false }) : e10.prototype && (e10.prototype = void 0);
  } catch (e11) {
  }
  var n9 = rL(e10);
  return t9(n9, "source") || (n9.source = rW(rU, "string" == typeof t10 ? t10 : "")), e10;
};
Function.prototype.toString = rz(function() {
  return ts(this) && rj(this).source || rk(this);
}, "toString");
var rq = ry.exports, rG = function(e10, t10, r10, n9) {
  n9 || (n9 = {});
  var a10 = n9.enumerable, i10 = void 0 !== n9.name ? n9.name : t10;
  if (ts(r10) && rq(r10, i10, n9), n9.global)
    a10 ? e10[t10] = r10 : tQ(t10, r10);
  else {
    try {
      n9.unsafe ? e10[t10] && (a10 = true) : delete e10[t10];
    } catch (e11) {
    }
    a10 ? e10[t10] = r10 : tc.f(e10, t10, { value: r10, enumerable: false, configurable: !n9.nonConfigurable, writable: !n9.nonWritable });
  }
  return e10;
}, rY = ro("toStringTag"), rJ = {};
rJ[rY] = "z";
var rK = "[object z]" === String(rJ), rX = tE({}.toString), rQ = tE("".slice), rZ = function(e10) {
  return rQ(rX(e10), 8, -1);
}, r0 = ro("toStringTag"), r1 = Object, r2 = "Arguments" === rZ(/* @__PURE__ */ function() {
  return arguments;
}()), r4 = function(e10, t10) {
  try {
    return e10[t10];
  } catch (e11) {
  }
}, r3 = rK ? rZ : function(e10) {
  var t10, r10, n9;
  return void 0 === e10 ? "Undefined" : null === e10 ? "Null" : "string" == typeof (r10 = r4(t10 = r1(e10), r0)) ? r10 : r2 ? rZ(t10) : "Object" === (n9 = rZ(t10)) && ts(t10.callee) ? "Arguments" : n9;
}, r5 = String, r8 = function(e10) {
  if ("Symbol" === r3(e10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return r5(e10);
}, r6 = TypeError, r9 = function(e10, t10) {
  if (e10 < t10)
    throw new r6("Not enough arguments");
  return e10;
}, r7 = URLSearchParams, ne = r7.prototype, nt = tE(ne.append), nr = tE(ne.delete), nn = tE(ne.forEach), na = tE([].push), ni = new r7("a=1&a=2&b=3");
ni.delete("a", 1), ni.delete("b", void 0), ni + "" != "a=2" && rG(ne, "delete", function(e10) {
  var t10, r10 = arguments.length, n9 = r10 < 2 ? void 0 : arguments[1];
  if (r10 && void 0 === n9)
    return nr(this, e10);
  var a10 = [];
  nn(this, function(e11, t11) {
    na(a10, { key: t11, value: e11 });
  }), r9(r10, 1);
  for (var i10 = r8(e10), o10 = r8(n9), l10 = 0, s10 = 0, c10 = false, u10 = a10.length; l10 < u10; )
    t10 = a10[l10++], c10 || t10.key === i10 ? (c10 = true, nr(this, t10.key)) : s10++;
  for (; s10 < u10; )
    (t10 = a10[s10++]).key === i10 && t10.value === o10 || nt(this, t10.key, t10.value);
}, { enumerable: true, unsafe: true });
var no = URLSearchParams, nl = no.prototype, ns = tE(nl.getAll), nc = tE(nl.has), nu = new no("a=1");
(nu.has("a", 2) || !nu.has("a", void 0)) && rG(nl, "has", function(e10) {
  var t10 = arguments.length, r10 = t10 < 2 ? void 0 : arguments[1];
  if (t10 && void 0 === r10)
    return nc(this, e10);
  var n9 = ns(this, e10);
  r9(t10, 1);
  for (var a10 = r8(r10), i10 = 0; i10 < n9.length; )
    if (n9[i10++] === a10)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var nd = function(e10, t10, r10) {
  return r10.get && rq(r10.get, t10, { getter: true }), r10.set && rq(r10.set, t10, { setter: true }), tc.f(e10, t10, r10);
}, nf = URLSearchParams.prototype, np = tE(nf.forEach);
!td || "size" in nf || nd(nf, "size", { get: function() {
  var e10 = 0;
  return np(this, function() {
    e10++;
  }), e10;
}, configurable: true, enumerable: true });
var nh = {}, nm = {}, ng = {}.propertyIsEnumerable, nv = Object.getOwnPropertyDescriptor, ny = nv && !ng.call({ 1: 2 }, 1);
nm.f = ny ? function(e10) {
  var t10 = nv(this, e10);
  return !!t10 && t10.enumerable;
} : ng;
var nb = Object, nw = tE("".split), n_ = tu(function() {
  return !nb("z").propertyIsEnumerable(0);
}) ? function(e10) {
  return "String" === rZ(e10) ? nw(e10, "") : nb(e10);
} : nb, nx = function(e10) {
  return n_(t3(e10));
}, nk = Object.getOwnPropertyDescriptor;
nh.f = td ? nk : function(e10, t10) {
  if (e10 = nx(e10), t10 = rd(t10), ty)
    try {
      return nk(e10, t10);
    } catch (e11) {
    }
  if (t9(e10, t10))
    return rC(!tO(nm.f, e10, t10), e10[t10]);
};
var nS = {}, nO = Math.ceil, nC = Math.floor, nM = Math.trunc || function(e10) {
  var t10 = +e10;
  return (t10 > 0 ? nC : nO)(t10);
}, nA = function(e10) {
  var t10 = +e10;
  return t10 != t10 || 0 === t10 ? 0 : nM(t10);
}, nP = Math.max, nE = Math.min, nT = Math.min, nR = function(e10) {
  var t10 = nA(e10);
  return t10 > 0 ? nT(t10, 9007199254740991) : 0;
}, n$ = function(e10) {
  return nR(e10.length);
}, nI = function(e10, t10) {
  var r10 = nA(e10);
  return r10 < 0 ? nP(r10 + t10, 0) : nE(r10, t10);
}, nD = function(e10) {
  return function(t10, r10, n9) {
    var a10, i10 = nx(t10), o10 = n$(i10);
    if (0 === o10)
      return !e10 && -1;
    var l10 = nI(n9, o10);
    if (e10 && r10 != r10) {
      for (; o10 > l10; )
        if ((a10 = i10[l10++]) != a10)
          return true;
    } else
      for (; o10 > l10; l10++)
        if ((e10 || l10 in i10) && i10[l10] === r10)
          return e10 || l10 || 0;
    return !e10 && -1;
  };
}, nj = { includes: nD(true), indexOf: nD(false) }.indexOf, nL = tE([].push), nF = function(e10, t10) {
  var r10, n9 = nx(e10), a10 = 0, i10 = [];
  for (r10 in n9)
    !t9(rE, r10) && t9(n9, r10) && nL(i10, r10);
  for (; t10.length > a10; )
    t9(n9, r10 = t10[a10++]) && (~nj(i10, r10) || nL(i10, r10));
  return i10;
}, nB = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], nN = nB.concat("length", "prototype");
nS.f = Object.getOwnPropertyNames || function(e10) {
  return nF(e10, nN);
};
var nV = {};
nV.f = Object.getOwnPropertySymbols;
var nW = tE([].concat), nH = tC("Reflect", "ownKeys") || function(e10) {
  var t10 = nS.f(tx(e10)), r10 = nV.f;
  return r10 ? nW(t10, r10(e10)) : t10;
}, nU = function(e10, t10, r10) {
  for (var n9 = nH(t10), a10 = tc.f, i10 = nh.f, o10 = 0; o10 < n9.length; o10++) {
    var l10 = n9[o10];
    t9(e10, l10) || r10 && t9(r10, l10) || a10(e10, l10, i10(t10, l10));
  }
}, nz = /#|\.prototype\./, nq = function(e10, t10) {
  var r10 = nY[nG(e10)];
  return r10 === nK || r10 !== nJ && (ts(t10) ? tu(t10) : !!t10);
}, nG = nq.normalize = function(e10) {
  return String(e10).replace(nz, ".").toLowerCase();
}, nY = nq.data = {}, nJ = nq.NATIVE = "N", nK = nq.POLYFILL = "P", nX = nh.f, nQ = function(e10, t10) {
  var r10, n9, a10, i10, o10, l10 = e10.target, s10 = e10.global, c10 = e10.stat;
  if (r10 = s10 ? tp : c10 ? tp[l10] || tQ(l10, {}) : tp[l10] && tp[l10].prototype)
    for (n9 in t10) {
      if (i10 = t10[n9], a10 = e10.dontCallGetSet ? (o10 = nX(r10, n9)) && o10.value : r10[n9], !nq(s10 ? n9 : l10 + (c10 ? "." : "#") + n9, e10.forced) && void 0 !== a10) {
        if (typeof i10 == typeof a10)
          continue;
        nU(i10, a10);
      }
      (e10.sham || a10 && a10.sham) && rM(i10, "sham", true), rG(r10, n9, i10, e10);
    }
}, nZ = TypeError, n0 = "Reduce of empty array with no initial value", n1 = function(e10) {
  return function(t10, r10, n9, a10) {
    var i10 = t8(t10), o10 = n_(i10), l10 = n$(i10);
    if (tq(r10), 0 === l10 && n9 < 2)
      throw new nZ(n0);
    var s10 = e10 ? l10 - 1 : 0, c10 = e10 ? -1 : 1;
    if (n9 < 2)
      for (; ; ) {
        if (s10 in o10) {
          a10 = o10[s10], s10 += c10;
          break;
        }
        if (s10 += c10, e10 ? s10 < 0 : l10 <= s10)
          throw new nZ(n0);
      }
    for (; e10 ? s10 >= 0 : l10 > s10; s10 += c10)
      s10 in o10 && (a10 = r10(a10, o10[s10], s10, i10));
    return a10;
  };
}, n2 = { left: n1(false), right: n1(true) }, n4 = "process" === rZ(tp.process), n3 = n2.left;
nQ({ target: "Array", proto: true, forced: !n4 && tL > 79 && tL < 83 || !((eV = [].reduce) && tu(function() {
  eV.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(e10) {
  var t10 = arguments.length;
  return n3(this, e10, t10, t10 > 1 ? arguments[1] : void 0);
} });
var n5 = TypeError, n8 = Object.defineProperty, n6 = tp.self !== tp;
try {
  if (td) {
    var n9 = Object.getOwnPropertyDescriptor(tp, "self");
    !n6 && n9 && n9.get && n9.enumerable || nd(tp, "self", { get: function() {
      return tp;
    }, set: function(e10) {
      if (this !== tp)
        throw new n5("Illegal invocation");
      n8(tp, "self", { value: e10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    nQ({ global: true, simple: true, forced: n6 }, { self: tp });
} catch (e10) {
}
var n7 = Function.prototype, ae = n7.apply, at = n7.call, ar = "object" == typeof Reflect && Reflect.apply || (tk ? at.bind(ae) : function() {
  return at.apply(ae, arguments);
}), an = String, aa = TypeError, ai = function(e10, t10, r10) {
  try {
    return tE(tq(Object.getOwnPropertyDescriptor(e10, t10)[r10]));
  } catch (e11) {
  }
}, ao = function(e10) {
  if (th(e10) || null === e10)
    return e10;
  throw new aa("Can't set " + an(e10) + " as a prototype");
}, al = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e10, t10 = false, r10 = {};
  try {
    (e10 = ai(Object.prototype, "__proto__", "set"))(r10, []), t10 = r10 instanceof Array;
  } catch (e11) {
  }
  return function(r11, n9) {
    return t3(r11), ao(n9), th(r11) && (t10 ? e10(r11, n9) : r11.__proto__ = n9), r11;
  };
}() : void 0), as = tc.f, ac = function(e10, t10, r10) {
  var n9, a10;
  return al && ts(n9 = t10.constructor) && n9 !== r10 && th(a10 = n9.prototype) && a10 !== r10.prototype && al(e10, a10), e10;
}, au = function(e10, t10) {
  return void 0 === e10 ? arguments.length < 2 ? "" : t10 : r8(e10);
}, ad = Error, af = tE("".replace), ap = String(new ad("zxcasd").stack), ah = /\n\s*at [^:]*:[^\n]*/, am = ah.test(ap), ag = function(e10, t10) {
  if (am && "string" == typeof e10 && !ad.prepareStackTrace)
    for (; t10--; )
      e10 = af(e10, ah, "");
  return e10;
}, av = !tu(function() {
  var e10 = Error("a");
  return !("stack" in e10) || (Object.defineProperty(e10, "stack", rC(1, 7)), 7 !== e10.stack);
}), ay = Error.captureStackTrace, ab = function(e10, t10, r10) {
  r10 in e10 || as(e10, r10, { configurable: true, get: function() {
    return t10[r10];
  }, set: function(e11) {
    t10[r10] = e11;
  } });
}, aw = function(e10, t10) {
  th(t10) && "cause" in t10 && rM(e10, "cause", t10.cause);
}, a_ = function(e10, t10, r10, n9) {
  av && (ay ? ay(e10, t10) : rM(e10, "stack", ag(r10, n9)));
}, ax = function(e10, t10, r10, n9) {
  var a10 = "stackTraceLimit", i10 = n9 ? 2 : 1, o10 = e10.split("."), l10 = o10[o10.length - 1], s10 = tC.apply(null, o10);
  if (s10) {
    var c10 = s10.prototype;
    if (t9(c10, "cause") && delete c10.cause, !r10)
      return s10;
    var u10 = tC("Error"), d7 = t10(function(e11, t11) {
      var r11 = au(n9 ? t11 : e11, void 0), a11 = n9 ? new s10(e11) : new s10();
      return void 0 !== r11 && rM(a11, "message", r11), a_(a11, d7, a11.stack, 2), this && tT(c10, this) && ac(a11, this, d7), arguments.length > i10 && aw(a11, arguments[i10]), a11;
    });
    d7.prototype = c10, "Error" !== l10 ? al ? al(d7, u10) : nU(d7, u10, { name: true }) : td && a10 in s10 && (ab(d7, s10, a10), ab(d7, s10, "prepareStackTrace")), nU(d7, s10);
    try {
      c10.name !== l10 && rM(c10, "name", l10), c10.constructor = d7;
    } catch (e11) {
    }
    return d7;
  }
}, ak = "WebAssembly", aS = tp[ak], aO = 7 !== Error("e", { cause: 7 }).cause, aC = function(e10, t10) {
  var r10 = {};
  r10[e10] = ax(e10, t10, aO), nQ({ global: true, constructor: true, arity: 1, forced: aO }, r10);
}, aM = function(e10, t10) {
  if (aS && aS[e10]) {
    var r10 = {};
    r10[e10] = ax(ak + "." + e10, t10, aO), nQ({ target: ak, stat: true, constructor: true, arity: 1, forced: aO }, r10);
  }
};
aC("Error", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aC("EvalError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aC("RangeError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aC("ReferenceError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aC("SyntaxError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aC("TypeError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aC("URIError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aM("CompileError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aM("LinkError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
}), aM("RuntimeError", function(e10) {
  return function(t10) {
    return ar(e10, this, arguments);
  };
});
var aA = Array.isArray || function(e10) {
  return "Array" === rZ(e10);
}, aP = TypeError, aE = Object.getOwnPropertyDescriptor, aT = td && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (e10) {
    return e10 instanceof TypeError;
  }
}() ? function(e10, t10) {
  if (aA(e10) && !aE(e10, "length").writable)
    throw new aP("Cannot set read only .length");
  return e10.length = t10;
} : function(e10, t10) {
  return e10.length = t10;
}, aR = TypeError, a$ = function(e10) {
  if (e10 > 9007199254740991)
    throw aR("Maximum allowed index exceeded");
  return e10;
};
nQ({ target: "Array", proto: true, arity: 1, forced: tu(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (e10) {
    return e10 instanceof TypeError;
  }
}() }, { push: function(e10) {
  var t10 = t8(this), r10 = n$(t10), n9 = arguments.length;
  a$(r10 + n9);
  for (var a10 = 0; a10 < n9; a10++)
    t10[r10] = arguments[a10], r10++;
  return aT(t10, r10), r10;
} });
var aI = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, aD = !tu(function() {
  function e10() {
  }
  return e10.prototype.constructor = null, Object.getPrototypeOf(new e10()) !== e10.prototype;
}), aj = rP("IE_PROTO"), aL = Object, aF = aL.prototype, aB = aD ? aL.getPrototypeOf : function(e10) {
  var t10 = t8(e10);
  if (t9(t10, aj))
    return t10[aj];
  var r10 = t10.constructor;
  return ts(r10) && t10 instanceof r10 ? r10.prototype : t10 instanceof aL ? aF : null;
}, aN = tp.Int8Array, aV = aN && aN.prototype, aW = tp.Uint8ClampedArray, aH = aW && aW.prototype, aU = aN && aB(aN), az = aV && aB(aV), aq = Object.prototype, aG = tp.TypeError, aY = ro("toStringTag"), aJ = rr("TYPED_ARRAY_TAG"), aK = "TypedArrayConstructor", aX = aI && !!al && "Opera" !== r3(tp.opera), aQ = false, aZ = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, a0 = { BigInt64Array: 8, BigUint64Array: 8 }, a1 = function(e10) {
  var t10 = aB(e10);
  if (th(t10)) {
    var r10 = rj(t10);
    return r10 && t9(r10, aK) ? r10[aK] : a1(t10);
  }
}, a2 = function(e10) {
  if (!th(e10))
    return false;
  var t10 = r3(e10);
  return t9(aZ, t10) || t9(a0, t10);
};
for (e8 in aZ)
  (e9 = (e6 = tp[e8]) && e6.prototype) ? rL(e9)[aK] = e6 : aX = false;
for (e8 in a0)
  (e9 = (e6 = tp[e8]) && e6.prototype) && (rL(e9)[aK] = e6);
if ((!aX || !ts(aU) || aU === Function.prototype) && (aU = function() {
  throw new aG("Incorrect invocation");
}, aX))
  for (e8 in aZ)
    tp[e8] && al(tp[e8], aU);
if ((!aX || !az || az === aq) && (az = aU.prototype, aX))
  for (e8 in aZ)
    tp[e8] && al(tp[e8].prototype, az);
if (aX && aB(aH) !== az && al(aH, az), td && !t9(az, aY))
  for (e8 in nd(az, aY, { configurable: true, get: function() {
    return th(this) ? this[aJ] : void 0;
  } }), aZ)
    tp[e8] && rM(tp[e8], aJ, e8);
var a4 = { NATIVE_ARRAY_BUFFER_VIEWS: aX, aTypedArray: function(e10) {
  if (a2(e10))
    return e10;
  throw new aG("Target is not a typed array");
}, exportTypedArrayMethod: function(e10, t10, r10, n9) {
  if (td) {
    if (r10)
      for (var a10 in aZ) {
        var i10 = tp[a10];
        if (i10 && t9(i10.prototype, e10))
          try {
            delete i10.prototype[e10];
          } catch (r11) {
            try {
              i10.prototype[e10] = t10;
            } catch (e11) {
            }
          }
      }
    (!az[e10] || r10) && rG(az, e10, r10 ? t10 : aX && aV[e10] || t10, n9);
  }
}, getTypedArrayConstructor: a1, TypedArrayPrototype: az }, a3 = a4.aTypedArray;
(0, a4.exportTypedArrayMethod)("at", function(e10) {
  var t10 = a3(this), r10 = n$(t10), n9 = nA(e10), a10 = n9 >= 0 ? n9 : r10 + n9;
  return a10 < 0 || a10 >= r10 ? void 0 : t10[a10];
});
var a5 = function(e10) {
  if ("Function" === rZ(e10))
    return tE(e10);
}, a8 = a5(a5.bind), a6 = function(e10, t10) {
  return tq(e10), void 0 === t10 ? e10 : tk ? a8(e10, t10) : function() {
    return e10.apply(t10, arguments);
  };
}, a9 = function(e10) {
  var t10 = 1 === e10;
  return function(r10, n9, a10) {
    for (var i10, o10 = t8(r10), l10 = n_(o10), s10 = n$(l10), c10 = a6(n9, a10); s10-- > 0; )
      if (c10(i10 = l10[s10], s10, o10))
        switch (e10) {
          case 0:
            return i10;
          case 1:
            return s10;
        }
    return t10 ? -1 : void 0;
  };
}, a7 = { findLast: a9(0), findLastIndex: a9(1) }, ie = a7.findLast, it = a4.aTypedArray;
(0, a4.exportTypedArrayMethod)("findLast", function(e10) {
  return ie(it(this), e10, arguments.length > 1 ? arguments[1] : void 0);
});
var ir = a7.findLastIndex, ia = a4.aTypedArray;
(0, a4.exportTypedArrayMethod)("findLastIndex", function(e10) {
  return ir(ia(this), e10, arguments.length > 1 ? arguments[1] : void 0);
});
var ii = RangeError, io = function(e10) {
  var t10 = nA(e10);
  if (t10 < 0)
    throw new ii("The argument can't be less than 0");
  return t10;
}, il = RangeError, is = function(e10, t10) {
  var r10 = io(e10);
  if (r10 % t10)
    throw new il("Wrong offset");
  return r10;
}, ic = tp.RangeError, iu = tp.Int8Array, id = iu && iu.prototype, ip = id && id.set, ih = a4.aTypedArray, im = a4.exportTypedArrayMethod, ig = !tu(function() {
  var e10 = new Uint8ClampedArray(2);
  return tO(ip, e10, { length: 1, 0: 3 }, 1), 3 !== e10[1];
}), iv = ig && a4.NATIVE_ARRAY_BUFFER_VIEWS && tu(function() {
  var e10 = new iu(2);
  return e10.set(1), e10.set("2", 1), 0 !== e10[0] || 2 !== e10[1];
});
im("set", function(e10) {
  ih(this);
  var t10 = is(arguments.length > 1 ? arguments[1] : void 0, 1), r10 = t8(e10);
  if (ig)
    return tO(ip, this, r10, t10);
  var n9 = this.length, a10 = n$(r10), i10 = 0;
  if (a10 + t10 > n9)
    throw new ic("Wrong length");
  for (; i10 < a10; )
    this[t10 + i10] = r10[i10++];
}, !ig || iv);
var iy = function(e10, t10) {
  for (var r10 = n$(e10), n9 = new t10(r10), a10 = 0; a10 < r10; a10++)
    n9[a10] = e10[r10 - a10 - 1];
  return n9;
}, ib = a4.aTypedArray, iw = a4.exportTypedArrayMethod, i_ = a4.getTypedArrayConstructor;
iw("toReversed", function() {
  return iy(ib(this), i_(this));
});
var ix = function(e10, t10, r10) {
  for (var n9 = 0, a10 = arguments.length > 2 ? r10 : n$(t10), i10 = new e10(a10); a10 > n9; )
    i10[n9] = t10[n9++];
  return i10;
}, ik = a4.aTypedArray, iS = a4.getTypedArrayConstructor, iO = a4.exportTypedArrayMethod, iC = tE(a4.TypedArrayPrototype.sort);
iO("toSorted", function(e10) {
  void 0 !== e10 && tq(e10);
  var t10 = ik(this);
  return iC(ix(iS(t10), t10), e10);
});
var iM = RangeError, iA = TypeError, iP = function(e10, t10, r10, n9) {
  var a10 = n$(e10), i10 = nA(r10), o10 = i10 < 0 ? a10 + i10 : i10;
  if (o10 >= a10 || o10 < 0)
    throw new iM("Incorrect index");
  for (var l10 = new t10(a10), s10 = 0; s10 < a10; s10++)
    l10[s10] = s10 === o10 ? n9 : e10[s10];
  return l10;
}, iE = function(e10) {
  var t10 = r3(e10);
  return "BigInt64Array" === t10 || "BigUint64Array" === t10;
}, iT = function(e10) {
  var t10 = ru(e10, "number");
  if ("number" == typeof t10)
    throw new iA("Can't convert number to bigint");
  return BigInt(t10);
}, iR = a4.aTypedArray, i$ = a4.getTypedArrayConstructor;
(0, a4.exportTypedArrayMethod)("with", { with: function(e10, t10) {
  var r10 = iR(this), n9 = nA(e10), a10 = iE(r10) ? iT(t10) : +t10;
  return iP(r10, i$(r10), n9, a10);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (e10) {
    return 8 === e10;
  }
}());
var iI = tE("".charAt);
nQ({ target: "String", proto: true, forced: tu(function() {
  return "\uD842" !== "𠮷".at(-2);
}) }, { at: function(e10) {
  var t10 = r8(t3(this)), r10 = t10.length, n9 = nA(e10), a10 = n9 >= 0 ? n9 : r10 + n9;
  return a10 < 0 || a10 >= r10 ? void 0 : iI(t10, a10);
} });
var iD = {}, ij = Object.keys || function(e10) {
  return nF(e10, nB);
};
iD.f = td && !tb ? Object.defineProperties : function(e10, t10) {
  tx(e10);
  for (var r10, n9 = nx(t10), a10 = ij(t10), i10 = a10.length, o10 = 0; i10 > o10; )
    tc.f(e10, r10 = a10[o10++], n9[r10]);
  return e10;
};
var iL = tC("document", "documentElement"), iF = "prototype", iB = "script", iN = rP("IE_PROTO"), iV = function() {
}, iW = function(e10) {
  return "<" + iB + ">" + e10 + "</" + iB + ">";
}, iH = function(e10) {
  e10.write(iW("")), e10.close();
  var t10 = e10.parentWindow.Object;
  return e10 = null, t10;
}, iU = function() {
  var e10, t10 = tv("iframe");
  return t10.style.display = "none", iL.appendChild(t10), t10.src = String("java" + iB + ":"), (e10 = t10.contentWindow.document).open(), e10.write(iW("document.F=Object")), e10.close(), e10.F;
}, iz = function() {
  try {
    e7 = new ActiveXObject("htmlfile");
  } catch (e11) {
  }
  iz = "undefined" != typeof document ? document.domain && e7 ? iH(e7) : iU() : iH(e7);
  for (var e10 = nB.length; e10--; )
    delete iz[iF][nB[e10]];
  return iz();
};
rE[iN] = true;
var iq = Object.create || function(e10, t10) {
  var r10;
  return null !== e10 ? (iV[iF] = tx(e10), r10 = new iV(), iV[iF] = null, r10[iN] = e10) : r10 = iz(), void 0 === t10 ? r10 : iD.f(r10, t10);
}, iG = tc.f, iY = ro("unscopables"), iJ = Array.prototype;
void 0 === iJ[iY] && iG(iJ, iY, { configurable: true, value: iq(null) });
var iK = function(e10) {
  iJ[iY][e10] = true;
};
nQ({ target: "Array", proto: true }, { at: function(e10) {
  var t10 = t8(this), r10 = n$(t10), n9 = nA(e10), a10 = n9 >= 0 ? n9 : r10 + n9;
  return a10 < 0 || a10 >= r10 ? void 0 : t10[a10];
} }), iK("at");
var iX = tc.f, iQ = ro("toStringTag");
/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function iZ(e10, t10) {
  let r10 = new Set(e10.split(","));
  return t10 ? (e11) => r10.has(e11.toLowerCase()) : (e11) => r10.has(e11);
}
nQ({ global: true }, { Reflect: {} }), eW = tp.Reflect, eH = "Reflect", eW && !t9(eW, iQ) && iX(eW, iQ, { configurable: true, value: eH });
let i0 = {}, i1 = [], i2 = () => {
}, i4 = () => false, i3 = (e10) => 111 === e10.charCodeAt(0) && 110 === e10.charCodeAt(1) && (e10.charCodeAt(2) > 122 || 97 > e10.charCodeAt(2)), i5 = (e10) => e10.startsWith("onUpdate:"), i8 = Object.assign, i6 = (e10, t10) => {
  let r10 = e10.indexOf(t10);
  r10 > -1 && e10.splice(r10, 1);
}, i9 = Object.prototype.hasOwnProperty, i7 = (e10, t10) => i9.call(e10, t10), oe = Array.isArray, ot = (e10) => "[object Map]" === oc(e10), or = (e10) => "[object Set]" === oc(e10), on = (e10) => "function" == typeof e10, oa = (e10) => "string" == typeof e10, oi = (e10) => "symbol" == typeof e10, oo = (e10) => null !== e10 && "object" == typeof e10, ol = (e10) => (oo(e10) || on(e10)) && on(e10.then) && on(e10.catch), os = Object.prototype.toString, oc = (e10) => os.call(e10), ou = (e10) => oc(e10).slice(8, -1), od = (e10) => "[object Object]" === oc(e10), of = (e10) => oa(e10) && "NaN" !== e10 && "-" !== e10[0] && "" + parseInt(e10, 10) === e10, op = iZ(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), oh = (e10) => {
  let t10 = /* @__PURE__ */ Object.create(null);
  return (r10) => t10[r10] || (t10[r10] = e10(r10));
}, om = /-(\w)/g, og = oh((e10) => e10.replace(om, (e11, t10) => t10 ? t10.toUpperCase() : "")), ov = /\B([A-Z])/g, oy = oh((e10) => e10.replace(ov, "-$1").toLowerCase()), ob = oh((e10) => e10.charAt(0).toUpperCase() + e10.slice(1)), ow = oh((e10) => e10 ? `on${ob(e10)}` : ""), o_ = (e10, t10) => !Object.is(e10, t10), ox = (e10, t10) => {
  for (let r10 = 0; r10 < e10.length; r10++)
    e10[r10](t10);
}, ok = (e10, t10, r10) => {
  Object.defineProperty(e10, t10, { configurable: true, enumerable: false, value: r10 });
}, oS = (e10) => {
  let t10 = parseFloat(e10);
  return isNaN(t10) ? e10 : t10;
}, oO = (e10) => {
  let t10 = oa(e10) ? Number(e10) : NaN;
  return isNaN(t10) ? e10 : t10;
}, oC = () => e || (e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function oM(e10) {
  if (oe(e10)) {
    let t10 = {};
    for (let r10 = 0; r10 < e10.length; r10++) {
      let n9 = e10[r10], a10 = oa(n9) ? function(e11) {
        let t11 = {};
        return e11.replace(oE, "").split(oA).forEach((e12) => {
          if (e12) {
            let r11 = e12.split(oP);
            r11.length > 1 && (t11[r11[0].trim()] = r11[1].trim());
          }
        }), t11;
      }(n9) : oM(n9);
      if (a10)
        for (let e11 in a10)
          t10[e11] = a10[e11];
    }
    return t10;
  }
  if (oa(e10) || oo(e10))
    return e10;
}
let oA = /;(?![^(]*\))/g, oP = /:([^]+)/, oE = /\/\*[^]*?\*\//g;
function oT(e10) {
  let t10 = "";
  if (oa(e10))
    t10 = e10;
  else if (oe(e10))
    for (let r10 = 0; r10 < e10.length; r10++) {
      let n9 = oT(e10[r10]);
      n9 && (t10 += n9 + " ");
    }
  else if (oo(e10))
    for (let r10 in e10)
      e10[r10] && (t10 += r10 + " ");
  return t10.trim();
}
let oR = iZ("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
class o$ {
  constructor(e10 = false) {
    this.detached = e10, this._active = true, this.effects = [], this.cleanups = [], this.parent = t, !e10 && t && (this.index = (t.scopes || (t.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e10) {
    if (this._active) {
      let r10 = t;
      try {
        return t = this, e10();
      } finally {
        t = r10;
      }
    }
  }
  on() {
    t = this;
  }
  off() {
    t = this.parent;
  }
  stop(e10) {
    if (this._active) {
      let t10, r10;
      for (t10 = 0, r10 = this.effects.length; t10 < r10; t10++)
        this.effects[t10].stop();
      for (t10 = 0, r10 = this.cleanups.length; t10 < r10; t10++)
        this.cleanups[t10]();
      if (this.scopes)
        for (t10 = 0, r10 = this.scopes.length; t10 < r10; t10++)
          this.scopes[t10].stop(true);
      if (!this.detached && this.parent && !e10) {
        let e11 = this.parent.scopes.pop();
        e11 && e11 !== this && (this.parent.scopes[this.index] = e11, e11.index = this.index);
      }
      this.parent = void 0, this._active = false;
    }
  }
}
class oI {
  constructor(e10, r10, n9, a10) {
    this.fn = e10, this.trigger = r10, this.scheduler = n9, this.active = true, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, function(e11) {
      let r11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
      r11 && r11.active && r11.effects.push(e11);
    }(this, a10);
  }
  get dirty() {
    if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
      this._dirtyLevel = 1, oV();
      for (let e10 = 0; e10 < this._depsLength; e10++) {
        let t10 = this.deps[e10];
        if (t10.computed && (t10.computed.value, this._dirtyLevel >= 4))
          break;
      }
      1 === this._dirtyLevel && (this._dirtyLevel = 0), oW();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e10) {
    this._dirtyLevel = e10 ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e10 = oF, t10 = r;
    try {
      return oF = true, r = this, this._runnings++, oD(this), this.fn();
    } finally {
      oj(this), this._runnings--, r = t10, oF = e10;
    }
  }
  stop() {
    var e10;
    this.active && (oD(this), oj(this), null == (e10 = this.onStop) || e10.call(this), this.active = false);
  }
}
function oD(e10) {
  e10._trackId++, e10._depsLength = 0;
}
function oj(e10) {
  if (e10.deps.length > e10._depsLength) {
    for (let t10 = e10._depsLength; t10 < e10.deps.length; t10++)
      oL(e10.deps[t10], e10);
    e10.deps.length = e10._depsLength;
  }
}
function oL(e10, t10) {
  let r10 = e10.get(t10);
  void 0 !== r10 && t10._trackId !== r10 && (e10.delete(t10), 0 === e10.size && e10.cleanup());
}
let oF = true, oB = 0, oN = [];
function oV() {
  oN.push(oF), oF = false;
}
function oW() {
  let e10 = oN.pop();
  oF = void 0 === e10 || e10;
}
function oH() {
  for (oB--; !oB && oz.length; )
    oz.shift()();
}
function oU(e10, t10, r10) {
  if (t10.get(e10) !== e10._trackId) {
    t10.set(e10, e10._trackId);
    let r11 = e10.deps[e10._depsLength];
    r11 !== t10 ? (r11 && oL(r11, e10), e10.deps[e10._depsLength++] = t10) : e10._depsLength++;
  }
}
let oz = [];
function oq(e10, t10, r10) {
  for (let r11 of (oB++, e10.keys())) {
    let n9;
    r11._dirtyLevel < t10 && (null != n9 ? n9 : n9 = e10.get(r11) === r11._trackId) && (r11._shouldSchedule || (r11._shouldSchedule = 0 === r11._dirtyLevel), r11._dirtyLevel = t10), r11._shouldSchedule && (null != n9 ? n9 : n9 = e10.get(r11) === r11._trackId) && (r11.trigger(), (!r11._runnings || r11.allowRecurse) && 2 !== r11._dirtyLevel && (r11._shouldSchedule = false, r11.scheduler && oz.push(r11.scheduler)));
  }
  oH();
}
let oG = (e10, t10) => {
  let r10 = /* @__PURE__ */ new Map();
  return r10.cleanup = e10, r10.computed = t10, r10;
}, oY = /* @__PURE__ */ new WeakMap(), oJ = Symbol(""), oK = Symbol("");
function oX(e10, t10, n9) {
  if (oF && r) {
    let t11 = oY.get(e10);
    t11 || oY.set(e10, t11 = /* @__PURE__ */ new Map());
    let a10 = t11.get(n9);
    a10 || t11.set(n9, a10 = oG(() => t11.delete(n9))), oU(r, a10);
  }
}
function oQ(e10, t10, r10, n9, a10, i10) {
  let o10 = oY.get(e10);
  if (!o10)
    return;
  let l10 = [];
  if ("clear" === t10)
    l10 = [...o10.values()];
  else if ("length" === r10 && oe(e10)) {
    let e11 = Number(n9);
    o10.forEach((t11, r11) => {
      ("length" === r11 || !oi(r11) && r11 >= e11) && l10.push(t11);
    });
  } else
    switch (void 0 !== r10 && l10.push(o10.get(r10)), t10) {
      case "add":
        oe(e10) ? of(r10) && l10.push(o10.get("length")) : (l10.push(o10.get(oJ)), ot(e10) && l10.push(o10.get(oK)));
        break;
      case "delete":
        !oe(e10) && (l10.push(o10.get(oJ)), ot(e10) && l10.push(o10.get(oK)));
        break;
      case "set":
        ot(e10) && l10.push(o10.get(oJ));
    }
  for (let e11 of (oB++, l10))
    e11 && oq(e11, 4);
  oH();
}
let oZ = iZ("__proto__,__v_isRef,__isVue"), o0 = new Set(Object.getOwnPropertyNames(Symbol).filter((e10) => "arguments" !== e10 && "caller" !== e10).map((e10) => Symbol[e10]).filter(oi)), o1 = function() {
  let e10 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t10) => {
    e10[t10] = function() {
      for (var e11 = arguments.length, r10 = Array(e11), n9 = 0; n9 < e11; n9++)
        r10[n9] = arguments[n9];
      let a10 = lE(this);
      for (let e12 = 0, t11 = this.length; e12 < t11; e12++)
        oX(a10, "get", e12 + "");
      let i10 = a10[t10](...r10);
      return -1 === i10 || false === i10 ? a10[t10](...r10.map(lE)) : i10;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t10) => {
    e10[t10] = function() {
      for (var e11 = arguments.length, r10 = Array(e11), n9 = 0; n9 < e11; n9++)
        r10[n9] = arguments[n9];
      oV(), oB++;
      let a10 = lE(this)[t10].apply(this, r10);
      return oH(), oW(), a10;
    };
  }), e10;
}();
function o2(e10) {
  oi(e10) || (e10 = String(e10));
  let t10 = lE(this);
  return oX(t10, "has", e10), t10.hasOwnProperty(e10);
}
class o4 {
  constructor(e10 = false, t10 = false) {
    this._isReadonly = e10, this._isShallow = t10;
  }
  get(e10, t10, r10) {
    let n9 = this._isReadonly, a10 = this._isShallow;
    if ("__v_isReactive" === t10)
      return !n9;
    if ("__v_isReadonly" === t10)
      return n9;
    if ("__v_isShallow" === t10)
      return a10;
    if ("__v_raw" === t10)
      return r10 === (n9 ? a10 ? l_ : lw : a10 ? lb : ly).get(e10) || Object.getPrototypeOf(e10) === Object.getPrototypeOf(r10) ? e10 : void 0;
    let i10 = oe(e10);
    if (!n9) {
      if (i10 && i7(o1, t10))
        return Reflect.get(o1, t10, r10);
      if ("hasOwnProperty" === t10)
        return o2;
    }
    let o10 = Reflect.get(e10, t10, r10);
    return (oi(t10) ? o0.has(t10) : oZ(t10)) ? o10 : (n9 || oX(e10, "get", t10), a10) ? o10 : lj(o10) ? i10 && of(t10) ? o10 : o10.value : oo(o10) ? n9 ? lS(o10) : lx(o10) : o10;
  }
}
class o3 extends o4 {
  constructor(e10 = false) {
    super(false, e10);
  }
  set(e10, t10, r10, n9) {
    let a10 = e10[t10];
    if (!this._isShallow) {
      let t11 = lM(a10);
      if (lA(r10) || lM(r10) || (a10 = lE(a10), r10 = lE(r10)), !oe(e10) && lj(a10) && !lj(r10))
        return !t11 && (a10.value = r10, true);
    }
    let i10 = oe(e10) && of(t10) ? Number(t10) < e10.length : i7(e10, t10), o10 = Reflect.set(e10, t10, r10, n9);
    return e10 === lE(n9) && (i10 ? o_(r10, a10) && oQ(e10, "set", t10, r10) : oQ(e10, "add", t10, r10)), o10;
  }
  deleteProperty(e10, t10) {
    let r10 = i7(e10, t10);
    e10[t10];
    let n9 = Reflect.deleteProperty(e10, t10);
    return n9 && r10 && oQ(e10, "delete", t10, void 0), n9;
  }
  has(e10, t10) {
    let r10 = Reflect.has(e10, t10);
    return oi(t10) && o0.has(t10) || oX(e10, "has", t10), r10;
  }
  ownKeys(e10) {
    return oX(e10, "iterate", oe(e10) ? "length" : oJ), Reflect.ownKeys(e10);
  }
}
let o5 = new o3(), o8 = new class extends o4 {
  constructor(e10 = false) {
    super(true, e10);
  }
  set(e10, t10) {
    return true;
  }
  deleteProperty(e10, t10) {
    return true;
  }
}(), o6 = new o3(true), o9 = (e10) => e10, o7 = (e10) => Reflect.getPrototypeOf(e10);
function le(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n9 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a10 = lE(e10 = e10.__v_raw), i10 = lE(t10);
  r10 || (o_(t10, i10) && oX(a10, "get", t10), oX(a10, "get", i10));
  let { has: o10 } = o7(a10), l10 = n9 ? o9 : r10 ? lR : lT;
  return o10.call(a10, t10) ? l10(e10.get(t10)) : o10.call(a10, i10) ? l10(e10.get(i10)) : void (e10 !== a10 && e10.get(t10));
}
function lt(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r10 = this.__v_raw, n9 = lE(r10), a10 = lE(e10);
  return t10 || (o_(e10, a10) && oX(n9, "has", e10), oX(n9, "has", a10)), e10 === a10 ? r10.has(e10) : r10.has(e10) || r10.has(a10);
}
function lr(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return e10 = e10.__v_raw, t10 || oX(lE(e10), "iterate", oJ), Reflect.get(e10, "size", e10);
}
function ln(e10) {
  e10 = lE(e10);
  let t10 = lE(this);
  return o7(t10).has.call(t10, e10) || (t10.add(e10), oQ(t10, "add", e10, e10)), this;
}
function la(e10, t10) {
  t10 = lE(t10);
  let r10 = lE(this), { has: n9, get: a10 } = o7(r10), i10 = n9.call(r10, e10);
  i10 || (e10 = lE(e10), i10 = n9.call(r10, e10));
  let o10 = a10.call(r10, e10);
  return r10.set(e10, t10), i10 ? o_(t10, o10) && oQ(r10, "set", e10, t10) : oQ(r10, "add", e10, t10), this;
}
function li(e10) {
  let t10 = lE(this), { has: r10, get: n9 } = o7(t10), a10 = r10.call(t10, e10);
  a10 || (e10 = lE(e10), a10 = r10.call(t10, e10)), n9 && n9.call(t10, e10);
  let i10 = t10.delete(e10);
  return a10 && oQ(t10, "delete", e10, void 0), i10;
}
function lo() {
  let e10 = lE(this), t10 = 0 !== e10.size, r10 = e10.clear();
  return t10 && oQ(e10, "clear", void 0, void 0), r10;
}
function ll(e10, t10) {
  return function(r10, n9) {
    let a10 = this, i10 = a10.__v_raw, o10 = lE(i10), l10 = t10 ? o9 : e10 ? lR : lT;
    return e10 || oX(o10, "iterate", oJ), i10.forEach((e11, t11) => r10.call(n9, l10(e11), l10(t11), a10));
  };
}
function ls(e10, t10, r10) {
  return function() {
    for (var n9 = arguments.length, a10 = Array(n9), i10 = 0; i10 < n9; i10++)
      a10[i10] = arguments[i10];
    let o10 = this.__v_raw, l10 = lE(o10), s10 = ot(l10), c10 = "entries" === e10 || e10 === Symbol.iterator && s10, u10 = o10[e10](...a10), d7 = r10 ? o9 : t10 ? lR : lT;
    return t10 || oX(l10, "iterate", "keys" === e10 && s10 ? oK : oJ), { next() {
      let { value: e11, done: t11 } = u10.next();
      return t11 ? { value: e11, done: t11 } : { value: c10 ? [d7(e11[0]), d7(e11[1])] : d7(e11), done: t11 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function lc(e10) {
  return function() {
    for (var t10 = arguments.length, r10 = Array(t10), n9 = 0; n9 < t10; n9++)
      r10[n9] = arguments[n9];
    return "delete" !== e10 && ("clear" === e10 ? void 0 : this);
  };
}
let [lu, ld, lf, lp] = function() {
  let e10 = { get(e11) {
    return le(this, e11);
  }, get size() {
    return lr(this);
  }, has: lt, add: ln, set: la, delete: li, clear: lo, forEach: ll(false, false) }, t10 = { get(e11) {
    return le(this, e11, false, true);
  }, get size() {
    return lr(this);
  }, has: lt, add: ln, set: la, delete: li, clear: lo, forEach: ll(false, true) }, r10 = { get(e11) {
    return le(this, e11, true);
  }, get size() {
    return lr(this, true);
  }, has(e11) {
    return lt.call(this, e11, true);
  }, add: lc("add"), set: lc("set"), delete: lc("delete"), clear: lc("clear"), forEach: ll(true, false) }, n9 = { get(e11) {
    return le(this, e11, true, true);
  }, get size() {
    return lr(this, true);
  }, has(e11) {
    return lt.call(this, e11, true);
  }, add: lc("add"), set: lc("set"), delete: lc("delete"), clear: lc("clear"), forEach: ll(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a10) => {
    e10[a10] = ls(a10, false, false), r10[a10] = ls(a10, true, false), t10[a10] = ls(a10, false, true), n9[a10] = ls(a10, true, true);
  }), [e10, r10, t10, n9];
}();
function lh(e10, t10) {
  let r10 = t10 ? e10 ? lp : lf : e10 ? ld : lu;
  return (t11, n9, a10) => "__v_isReactive" === n9 ? !e10 : "__v_isReadonly" === n9 ? e10 : "__v_raw" === n9 ? t11 : Reflect.get(i7(r10, n9) && n9 in t11 ? r10 : t11, n9, a10);
}
let lm = { get: lh(false, false) }, lg = { get: lh(false, true) }, lv = { get: lh(true, false) }, ly = /* @__PURE__ */ new WeakMap(), lb = /* @__PURE__ */ new WeakMap(), lw = /* @__PURE__ */ new WeakMap(), l_ = /* @__PURE__ */ new WeakMap();
function lx(e10) {
  return lM(e10) ? e10 : lO(e10, false, o5, lm, ly);
}
function lk(e10) {
  return lO(e10, false, o6, lg, lb);
}
function lS(e10) {
  return lO(e10, true, o8, lv, lw);
}
function lO(e10, t10, r10, n9, a10) {
  if (!oo(e10) || e10.__v_raw && !(t10 && e10.__v_isReactive))
    return e10;
  let i10 = a10.get(e10);
  if (i10)
    return i10;
  let o10 = e10.__v_skip || !Object.isExtensible(e10) ? 0 : function(e11) {
    switch (e11) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(ou(e10));
  if (0 === o10)
    return e10;
  let l10 = new Proxy(e10, 2 === o10 ? n9 : r10);
  return a10.set(e10, l10), l10;
}
function lC(e10) {
  return lM(e10) ? lC(e10.__v_raw) : !!(e10 && e10.__v_isReactive);
}
function lM(e10) {
  return !!(e10 && e10.__v_isReadonly);
}
function lA(e10) {
  return !!(e10 && e10.__v_isShallow);
}
function lP(e10) {
  return !!e10 && !!e10.__v_raw;
}
function lE(e10) {
  let t10 = e10 && e10.__v_raw;
  return t10 ? lE(t10) : e10;
}
let lT = (e10) => oo(e10) ? lx(e10) : e10, lR = (e10) => oo(e10) ? lS(e10) : e10;
class l$ {
  constructor(e10, t10, r10, n9) {
    this.getter = e10, this._setter = t10, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new oI(() => e10(this._value), () => lD(this, 2 === this.effect._dirtyLevel ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !n9, this.__v_isReadonly = r10;
  }
  get value() {
    let e10 = lE(this);
    return (!e10._cacheable || e10.effect.dirty) && o_(e10._value, e10._value = e10.effect.run()) && lD(e10, 4), lI(e10), e10.effect._dirtyLevel >= 2 && lD(e10, 2), e10._value;
  }
  set value(e10) {
    this._setter(e10);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e10) {
    this.effect.dirty = e10;
  }
}
function lI(e10) {
  var t10;
  oF && r && (e10 = lE(e10), oU(r, null != (t10 = e10.dep) ? t10 : e10.dep = oG(() => e10.dep = void 0, e10 instanceof l$ ? e10 : void 0)));
}
function lD(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
  arguments.length > 2 && arguments[2];
  let r10 = (e10 = lE(e10)).dep;
  r10 && oq(r10, t10);
}
function lj(e10) {
  return !!(e10 && true === e10.__v_isRef);
}
function lL(e10) {
  return lB(e10, false);
}
function lF(e10) {
  return lB(e10, true);
}
function lB(e10, t10) {
  return lj(e10) ? e10 : new lN(e10, t10);
}
class lN {
  constructor(e10, t10) {
    this.__v_isShallow = t10, this.dep = void 0, this.__v_isRef = true, this._rawValue = t10 ? e10 : lE(e10), this._value = t10 ? e10 : lT(e10);
  }
  get value() {
    return lI(this), this._value;
  }
  set value(e10) {
    let t10 = this.__v_isShallow || lA(e10) || lM(e10);
    o_(e10 = t10 ? e10 : lE(e10), this._rawValue) && (this._rawValue = e10, this._value = t10 ? e10 : lT(e10), lD(this, 4));
  }
}
function lV(e10) {
  return lj(e10) ? e10.value : e10;
}
let lW = { get: (e10, t10, r10) => lV(Reflect.get(e10, t10, r10)), set: (e10, t10, r10, n9) => {
  let a10 = e10[t10];
  return lj(a10) && !lj(r10) ? (a10.value = r10, true) : Reflect.set(e10, t10, r10, n9);
} };
function lH(e10) {
  return lC(e10) ? e10 : new Proxy(e10, lW);
}
class lU {
  constructor(e10) {
    this.dep = void 0, this.__v_isRef = true;
    let { get: t10, set: r10 } = e10(() => lI(this), () => lD(this));
    this._get = t10, this._set = r10;
  }
  get value() {
    return this._get();
  }
  set value(e10) {
    this._set(e10);
  }
}
function lz(e10) {
  return new lU(e10);
}
function lq(e10, t10, r10, n9) {
  try {
    return n9 ? e10(...n9) : e10();
  } catch (e11) {
    lY(e11, t10, r10);
  }
}
function lG(e10, t10, r10, n9) {
  if (on(e10)) {
    let a10 = lq(e10, t10, r10, n9);
    return a10 && ol(a10) && a10.catch((e11) => {
      lY(e11, t10, r10);
    }), a10;
  }
  if (oe(e10)) {
    let a10 = [];
    for (let i10 = 0; i10 < e10.length; i10++)
      a10.push(lG(e10[i10], t10, r10, n9));
    return a10;
  }
}
function lY(e10, t10, r10) {
  let n9 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], a10 = t10 ? t10.vnode : null;
  if (t10) {
    let n10 = t10.parent, a11 = t10.proxy, i10 = `https://vuejs.org/error-reference/#runtime-${r10}`;
    for (; n10; ) {
      let t11 = n10.ec;
      if (t11) {
        for (let r11 = 0; r11 < t11.length; r11++)
          if (false === t11[r11](e10, a11, i10))
            return;
      }
      n10 = n10.parent;
    }
    let o10 = t10.appContext.config.errorHandler;
    if (o10) {
      oV(), lq(o10, null, 10, [e10, a11, i10]), oW();
      return;
    }
  }
  !function(e11, t11, r11) {
    arguments.length > 3 && void 0 !== arguments[3] && arguments[3], console.error(e11);
  }(e10, r10, a10, n9);
}
let lJ = false, lK = false, lX = [], lQ = 0, lZ = [], l0 = null, l1 = 0, l2 = Promise.resolve(), l4 = null;
function l3(e10) {
  let t10 = l4 || l2;
  return e10 ? t10.then(this ? e10.bind(this) : e10) : t10;
}
function l5(e10) {
  lX.length && lX.includes(e10, lJ && e10.allowRecurse ? lQ + 1 : lQ) || (null == e10.id ? lX.push(e10) : lX.splice(function(e11) {
    let t10 = lQ + 1, r10 = lX.length;
    for (; t10 < r10; ) {
      let n9 = t10 + r10 >>> 1, a10 = lX[n9], i10 = l7(a10);
      i10 < e11 || i10 === e11 && a10.pre ? t10 = n9 + 1 : r10 = n9;
    }
    return t10;
  }(e10.id), 0, e10), l8());
}
function l8() {
  lJ || lK || (lK = true, l4 = l2.then(function e10(t10) {
    lK = false, lJ = true, lX.sort(se);
    try {
      for (lQ = 0; lQ < lX.length; lQ++) {
        let e11 = lX[lQ];
        e11 && false !== e11.active && lq(e11, null, 14);
      }
    } finally {
      lQ = 0, lX.length = 0, l9(), lJ = false, l4 = null, (lX.length || lZ.length) && e10();
    }
  }));
}
function l6(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lJ ? lQ + 1 : 0;
  for (; r10 < lX.length; r10++) {
    let t11 = lX[r10];
    if (t11 && t11.pre) {
      if (e10 && t11.id !== e10.uid)
        continue;
      lX.splice(r10, 1), r10--, t11();
    }
  }
}
function l9(e10) {
  if (lZ.length) {
    let e11 = [...new Set(lZ)].sort((e12, t10) => l7(e12) - l7(t10));
    if (lZ.length = 0, l0) {
      l0.push(...e11);
      return;
    }
    for (l1 = 0, l0 = e11; l1 < l0.length; l1++)
      l0[l1]();
    l0 = null, l1 = 0;
  }
}
let l7 = (e10) => null == e10.id ? 1 / 0 : e10.id, se = (e10, t10) => {
  let r10 = l7(e10) - l7(t10);
  if (0 === r10) {
    if (e10.pre && !t10.pre)
      return -1;
    if (t10.pre && !e10.pre)
      return 1;
  }
  return r10;
};
function st(e10, t10) {
  let r10;
  for (var n9 = arguments.length, a10 = Array(n9 > 2 ? n9 - 2 : 0), i10 = 2; i10 < n9; i10++)
    a10[i10 - 2] = arguments[i10];
  if (e10.isUnmounted)
    return;
  let o10 = e10.vnode.props || i0, l10 = a10, s10 = t10.startsWith("update:"), c10 = s10 && t10.slice(7);
  if (c10 && c10 in o10) {
    let { number: e11, trim: t11 } = o10[`${"modelValue" === c10 ? "model" : c10}Modifiers`] || i0;
    t11 && (l10 = a10.map((e12) => oa(e12) ? e12.trim() : e12)), e11 && (l10 = a10.map(oS));
  }
  let u10 = o10[r10 = ow(t10)] || o10[r10 = ow(og(t10))];
  !u10 && s10 && (u10 = o10[r10 = ow(oy(t10))]), u10 && lG(u10, e10, 6, l10);
  let d7 = o10[r10 + "Once"];
  if (d7) {
    if (e10.emitted) {
      if (e10.emitted[r10])
        return;
    } else
      e10.emitted = {};
    e10.emitted[r10] = true, lG(d7, e10, 6, l10);
  }
}
function sr(e10, t10) {
  return !!(e10 && i3(t10)) && (i7(e10, (t10 = t10.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t10.slice(1)) || i7(e10, oy(t10)) || i7(e10, t10));
}
let sn = null, sa = null;
function si(e10) {
  let t10 = sn;
  return sn = e10, sa = e10 && e10.type.__scopeId || null, t10;
}
function so(e10) {
  let t10, r10;
  let { type: n9, vnode: a10, proxy: i10, withProxy: o10, props: l10, propsOptions: [s10], slots: c10, attrs: u10, emit: d7, render: f10, renderCache: p10, data: h10, setupState: m10, ctx: g10, inheritAttrs: y2 } = e10, b2 = si(e10);
  try {
    if (4 & a10.shapeFlag) {
      let e11 = o10 || i10;
      t10 = cU(f10.call(e11, e11, p10, l10, m10, h10, g10)), r10 = u10;
    } else
      t10 = cU(n9.length > 1 ? n9(l10, { attrs: u10, slots: c10, emit: d7 }) : n9(l10, null)), r10 = n9.props ? u10 : sl(u10);
  } catch (r11) {
    lY(r11, e10, 1), t10 = cW(cD);
  }
  let w2 = t10;
  if (r10 && false !== y2) {
    let e11 = Object.keys(r10), { shapeFlag: t11 } = w2;
    e11.length && 7 & t11 && (s10 && e11.some(i5) && (r10 = ss(r10, s10)), w2 = cH(w2, r10));
  }
  return a10.dirs && ((w2 = cH(w2)).dirs = w2.dirs ? w2.dirs.concat(a10.dirs) : a10.dirs), a10.transition && (w2.transition = a10.transition), t10 = w2, si(b2), t10;
}
let sl = (e10) => {
  let t10;
  for (let r10 in e10)
    ("class" === r10 || "style" === r10 || i3(r10)) && ((t10 || (t10 = {}))[r10] = e10[r10]);
  return t10;
}, ss = (e10, t10) => {
  let r10 = {};
  for (let n9 in e10)
    i5(n9) && n9.slice(9) in t10 || (r10[n9] = e10[n9]);
  return r10;
};
function sc(e10, t10, r10) {
  let n9 = Object.keys(t10);
  if (n9.length !== Object.keys(e10).length)
    return true;
  for (let a10 = 0; a10 < n9.length; a10++) {
    let i10 = n9[a10];
    if (t10[i10] !== e10[i10] && !sr(r10, i10))
      return true;
  }
  return false;
}
let su = Symbol.for("v-ndc"), sd = (e10) => e10.__isSuspense, sf = Symbol.for("v-scx"), sp = () => ca(sf), sh = {};
function sm(e10, t10, r10) {
  return sg(e10, t10, r10);
}
function sg(e10, r10) {
  let n9, a10, i10, o10, { immediate: l10, deep: s10, flush: c10, once: u10, onTrack: d7, onTrigger: f10 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i0;
  if (r10 && u10) {
    let e11 = r10;
    r10 = function() {
      for (var t10 = arguments.length, r11 = Array(t10), n10 = 0; n10 < t10; n10++)
        r11[n10] = arguments[n10];
      e11(...r11), k2();
    };
  }
  let p10 = cK, h10 = (e11) => true === s10 ? e11 : sb(e11, false === s10 ? 1 : void 0), m10 = false, g10 = false;
  if (lj(e10) ? (n9 = () => e10.value, m10 = lA(e10)) : lC(e10) ? (n9 = () => h10(e10), m10 = true) : oe(e10) ? (g10 = true, m10 = e10.some((e11) => lC(e11) || lA(e11)), n9 = () => e10.map((e11) => lj(e11) ? e11.value : lC(e11) ? h10(e11) : on(e11) ? lq(e11, p10, 2) : void 0)) : n9 = on(e10) ? r10 ? () => lq(e10, p10, 2) : () => (a10 && a10(), lG(e10, p10, 3, [y2])) : i2, r10 && s10) {
    let e11 = n9;
    n9 = () => sb(e11());
  }
  let y2 = (e11) => {
    a10 = _2.onStop = () => {
      lq(e11, p10, 4), a10 = _2.onStop = void 0;
    };
  };
  if (c1) {
    if (y2 = i2, r10 ? l10 && lG(r10, p10, 3, [n9(), g10 ? [] : void 0, y2]) : n9(), "sync" !== c10)
      return i2;
    {
      let e11 = sp();
      i10 = e11.__watcherHandles || (e11.__watcherHandles = []);
    }
  }
  let b2 = g10 ? Array(e10.length).fill(sh) : sh, w2 = () => {
    if (_2.active && _2.dirty) {
      if (r10) {
        let e11 = _2.run();
        (s10 || m10 || (g10 ? e11.some((e12, t10) => o_(e12, b2[t10])) : o_(e11, b2))) && (a10 && a10(), lG(r10, p10, 3, [e11, b2 === sh ? void 0 : g10 && b2[0] === sh ? [] : b2, y2]), b2 = e11);
      } else
        _2.run();
    }
  };
  w2.allowRecurse = !!r10, "sync" === c10 ? o10 = w2 : "post" === c10 ? o10 = () => c_(w2, p10 && p10.suspense) : (w2.pre = true, p10 && (w2.id = p10.uid), o10 = () => l5(w2));
  let _2 = new oI(n9, i2, o10), x2 = t, k2 = () => {
    _2.stop(), x2 && i6(x2.effects, _2);
  };
  return r10 ? l10 ? w2() : b2 = _2.run() : "post" === c10 ? c_(_2.run.bind(_2), p10 && p10.suspense) : _2.run(), i10 && i10.push(k2), k2;
}
function sv(e10, t10, r10) {
  let n9;
  let a10 = this.proxy, i10 = oa(e10) ? e10.includes(".") ? sy(a10, e10) : () => a10[e10] : e10.bind(a10, a10);
  on(t10) ? n9 = t10 : (n9 = t10.handler, r10 = t10);
  let o10 = cQ(this), l10 = sg(i10, n9.bind(a10), r10);
  return o10(), l10;
}
function sy(e10, t10) {
  let r10 = t10.split(".");
  return () => {
    let t11 = e10;
    for (let e11 = 0; e11 < r10.length && t11; e11++)
      t11 = t11[r10[e11]];
    return t11;
  };
}
function sb(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n9 = arguments.length > 3 ? arguments[3] : void 0;
  if (!oo(e10) || e10.__v_skip)
    return e10;
  if (t10 && t10 > 0) {
    if (r10 >= t10)
      return e10;
    r10++;
  }
  if ((n9 = n9 || /* @__PURE__ */ new Set()).has(e10))
    return e10;
  if (n9.add(e10), lj(e10))
    sb(e10.value, t10, r10, n9);
  else if (oe(e10))
    for (let a10 = 0; a10 < e10.length; a10++)
      sb(e10[a10], t10, r10, n9);
  else if (or(e10) || ot(e10))
    e10.forEach((e11) => {
      sb(e11, t10, r10, n9);
    });
  else if (od(e10))
    for (let a10 in e10)
      sb(e10[a10], t10, r10, n9);
  return e10;
}
function sw(e10, t10, r10, n9) {
  let a10 = e10.dirs, i10 = t10 && t10.dirs;
  for (let o10 = 0; o10 < a10.length; o10++) {
    let l10 = a10[o10];
    i10 && (l10.oldValue = i10[o10].value);
    let s10 = l10.dir[n9];
    s10 && (oV(), lG(s10, r10, 8, [e10.el, l10, e10, t10]), oW());
  }
}
let s_ = Symbol("_leaveCb"), sx = Symbol("_enterCb"), sk = [Function, Array], sS = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: sk, onEnter: sk, onAfterEnter: sk, onEnterCancelled: sk, onBeforeLeave: sk, onLeave: sk, onAfterLeave: sk, onLeaveCancelled: sk, onBeforeAppear: sk, onAppear: sk, onAfterAppear: sk, onAppearCancelled: sk }, sO = { name: "BaseTransition", props: sS, setup(e10, t10) {
  let { slots: r10 } = t10, n9 = cX(), a10 = function() {
    let e11 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
    return sN(() => {
      e11.isMounted = true;
    }), sH(() => {
      e11.isUnmounting = true;
    }), e11;
  }();
  return () => {
    let t11 = r10.default && function e11(t12) {
      let r11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n10 = arguments.length > 2 ? arguments[2] : void 0, a11 = [], i11 = 0;
      for (let o11 = 0; o11 < t12.length; o11++) {
        let l11 = t12[o11], s11 = null == n10 ? l11.key : String(n10) + String(null != l11.key ? l11.key : o11);
        l11.type === c$ ? (128 & l11.patchFlag && i11++, a11 = a11.concat(e11(l11.children, r11, s11))) : (r11 || l11.type !== cD) && a11.push(null != s11 ? cH(l11, { key: s11 }) : l11);
      }
      if (i11 > 1)
        for (let e12 = 0; e12 < a11.length; e12++)
          a11[e12].patchFlag = -2;
      return a11;
    }(r10.default(), true);
    if (!t11 || !t11.length)
      return;
    let i10 = t11[0];
    if (t11.length > 1) {
      for (let e11 of t11)
        if (e11.type !== cD) {
          i10 = e11;
          break;
        }
    }
    let o10 = lE(e10), { mode: l10 } = o10;
    if (a10.isLeaving)
      return sA(i10);
    let s10 = sP(i10);
    if (!s10)
      return sA(i10);
    let c10 = sM(s10, o10, a10, n9);
    sE(s10, c10);
    let u10 = n9.subTree, d7 = u10 && sP(u10);
    if (d7 && d7.type !== cD && !cB(s10, d7)) {
      let e11 = sM(d7, o10, a10, n9);
      if (sE(d7, e11), "out-in" === l10)
        return a10.isLeaving = true, e11.afterLeave = () => {
          a10.isLeaving = false, false !== n9.update.active && (n9.effect.dirty = true, n9.update());
        }, sA(i10);
      "in-out" === l10 && s10.type !== cD && (e11.delayLeave = (e12, t12, r11) => {
        sC(a10, d7)[String(d7.key)] = d7, e12[s_] = () => {
          t12(), e12[s_] = void 0, delete c10.delayedLeave;
        }, c10.delayedLeave = r11;
      });
    }
    return i10;
  };
} };
function sC(e10, t10) {
  let { leavingVNodes: r10 } = e10, n9 = r10.get(t10.type);
  return n9 || (n9 = /* @__PURE__ */ Object.create(null), r10.set(t10.type, n9)), n9;
}
function sM(e10, t10, r10, n9) {
  let { appear: a10, mode: i10, persisted: o10 = false, onBeforeEnter: l10, onEnter: s10, onAfterEnter: c10, onEnterCancelled: u10, onBeforeLeave: d7, onLeave: f10, onAfterLeave: p10, onLeaveCancelled: h10, onBeforeAppear: m10, onAppear: g10, onAfterAppear: y2, onAppearCancelled: b2 } = t10, w2 = String(e10.key), _2 = sC(r10, e10), x2 = (e11, t11) => {
    e11 && lG(e11, n9, 9, t11);
  }, k2 = (e11, t11) => {
    let r11 = t11[1];
    x2(e11, t11), oe(e11) ? e11.every((e12) => e12.length <= 1) && r11() : e11.length <= 1 && r11();
  }, S2 = { mode: i10, persisted: o10, beforeEnter(t11) {
    let n10 = l10;
    if (!r10.isMounted) {
      if (!a10)
        return;
      n10 = m10 || l10;
    }
    t11[s_] && t11[s_](true);
    let i11 = _2[w2];
    i11 && cB(e10, i11) && i11.el[s_] && i11.el[s_](), x2(n10, [t11]);
  }, enter(e11) {
    let t11 = s10, n10 = c10, i11 = u10;
    if (!r10.isMounted) {
      if (!a10)
        return;
      t11 = g10 || s10, n10 = y2 || c10, i11 = b2 || u10;
    }
    let o11 = false, l11 = e11[sx] = (t12) => {
      o11 || (o11 = true, t12 ? x2(i11, [e11]) : x2(n10, [e11]), S2.delayedLeave && S2.delayedLeave(), e11[sx] = void 0);
    };
    t11 ? k2(t11, [e11, l11]) : l11();
  }, leave(t11, n10) {
    let a11 = String(e10.key);
    if (t11[sx] && t11[sx](true), r10.isUnmounting)
      return n10();
    x2(d7, [t11]);
    let i11 = false, o11 = t11[s_] = (r11) => {
      i11 || (i11 = true, n10(), r11 ? x2(h10, [t11]) : x2(p10, [t11]), t11[s_] = void 0, _2[a11] !== e10 || delete _2[a11]);
    };
    _2[a11] = e10, f10 ? k2(f10, [t11, o11]) : o11();
  }, clone: (e11) => sM(e11, t10, r10, n9) };
  return S2;
}
function sA(e10) {
  if (s$(e10))
    return (e10 = cH(e10)).children = null, e10;
}
function sP(e10) {
  return s$(e10) ? e10.children ? e10.children[0] : void 0 : e10;
}
function sE(e10, t10) {
  6 & e10.shapeFlag && e10.component ? sE(e10.component.subTree, t10) : 128 & e10.shapeFlag ? (e10.ssContent.transition = t10.clone(e10.ssContent), e10.ssFallback.transition = t10.clone(e10.ssFallback)) : e10.transition = t10;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function sT(e10, t10) {
  return on(e10) ? i8({ name: e10.name }, t10, { setup: e10 }) : e10;
}
let sR = (e10) => !!e10.type.__asyncLoader, s$ = (e10) => e10.type.__isKeepAlive;
function sI(e10, t10) {
  sj(e10, "a", t10);
}
function sD(e10, t10) {
  sj(e10, "da", t10);
}
function sj(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cK, n9 = e10.__wdc || (e10.__wdc = () => {
    let t11 = r10;
    for (; t11; ) {
      if (t11.isDeactivated)
        return;
      t11 = t11.parent;
    }
    return e10();
  });
  if (sL(t10, n9, r10), r10) {
    let e11 = r10.parent;
    for (; e11 && e11.parent; )
      s$(e11.parent.vnode) && function(e12, t11, r11, n10) {
        let a10 = sL(t11, e12, n10, true);
        sU(() => {
          i6(n10[t11], a10);
        }, r11);
      }(n9, t10, r10, e11), e11 = e11.parent;
  }
}
function sL(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cK, n9 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (r10) {
    let a10 = r10[e10] || (r10[e10] = []), i10 = t10.__weh || (t10.__weh = function() {
      for (var n10 = arguments.length, a11 = Array(n10), i11 = 0; i11 < n10; i11++)
        a11[i11] = arguments[i11];
      if (r10.isUnmounted)
        return;
      oV();
      let o10 = cQ(r10), l10 = lG(t10, r10, e10, a11);
      return o10(), oW(), l10;
    });
    return n9 ? a10.unshift(i10) : a10.push(i10), i10;
  }
}
let sF = (e10) => function(t10) {
  let r10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cK;
  return (!c1 || "sp" === e10) && sL(e10, function() {
    for (var e11 = arguments.length, r11 = Array(e11), n9 = 0; n9 < e11; n9++)
      r11[n9] = arguments[n9];
    return t10(...r11);
  }, r10);
}, sB = sF("bm"), sN = sF("m"), sV = sF("bu"), sW = sF("u"), sH = sF("bum"), sU = sF("um"), sz = sF("sp"), sq = sF("rtg"), sG = sF("rtc");
function sY(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cK;
  sL("ec", e10, t10);
}
let sJ = (e10) => e10 ? c0(e10) ? c5(e10) || e10.proxy : sJ(e10.parent) : null, sK = i8(/* @__PURE__ */ Object.create(null), { $: (e10) => e10, $el: (e10) => e10.vnode.el, $data: (e10) => e10.data, $props: (e10) => e10.props, $attrs: (e10) => e10.attrs, $slots: (e10) => e10.slots, $refs: (e10) => e10.refs, $parent: (e10) => sJ(e10.parent), $root: (e10) => sJ(e10.root), $emit: (e10) => e10.emit, $options: (e10) => s2(e10), $forceUpdate: (e10) => e10.f || (e10.f = () => {
  e10.effect.dirty = true, l5(e10.update);
}), $nextTick: (e10) => e10.n || (e10.n = l3.bind(e10.proxy)), $watch: (e10) => sv.bind(e10) }), sX = (e10, t10) => e10 !== i0 && !e10.__isScriptSetup && i7(e10, t10), sQ = { get(e10, t10) {
  let r10, n9, a10, { _: i10 } = e10;
  if ("__v_skip" === t10)
    return true;
  let { ctx: o10, setupState: l10, data: s10, props: c10, accessCache: u10, type: d7, appContext: f10 } = i10;
  if ("$" !== t10[0]) {
    let e11 = u10[t10];
    if (void 0 !== e11)
      switch (e11) {
        case 1:
          return l10[t10];
        case 2:
          return s10[t10];
        case 4:
          return o10[t10];
        case 3:
          return c10[t10];
      }
    else {
      if (sX(l10, t10))
        return u10[t10] = 1, l10[t10];
      if (s10 !== i0 && i7(s10, t10))
        return u10[t10] = 2, s10[t10];
      if ((r10 = i10.propsOptions[0]) && i7(r10, t10))
        return u10[t10] = 3, c10[t10];
      if (o10 !== i0 && i7(o10, t10))
        return u10[t10] = 4, o10[t10];
      s0 && (u10[t10] = 0);
    }
  }
  let p10 = sK[t10];
  return p10 ? ("$attrs" === t10 && oX(i10.attrs, "get", ""), p10(i10)) : (n9 = d7.__cssModules) && (n9 = n9[t10]) ? n9 : o10 !== i0 && i7(o10, t10) ? (u10[t10] = 4, o10[t10]) : i7(a10 = f10.config.globalProperties, t10) ? a10[t10] : void 0;
}, set(e10, t10, r10) {
  let { _: n9 } = e10, { data: a10, setupState: i10, ctx: o10 } = n9;
  return sX(i10, t10) ? (i10[t10] = r10, true) : a10 !== i0 && i7(a10, t10) ? (a10[t10] = r10, true) : !i7(n9.props, t10) && !("$" === t10[0] && t10.slice(1) in n9) && (o10[t10] = r10, true);
}, has(e10, t10) {
  let r10, { _: { data: n9, setupState: a10, accessCache: i10, ctx: o10, appContext: l10, propsOptions: s10 } } = e10;
  return !!i10[t10] || n9 !== i0 && i7(n9, t10) || sX(a10, t10) || (r10 = s10[0]) && i7(r10, t10) || i7(o10, t10) || i7(sK, t10) || i7(l10.config.globalProperties, t10);
}, defineProperty(e10, t10, r10) {
  return null != r10.get ? e10._.accessCache[t10] = 0 : i7(r10, "value") && this.set(e10, t10, r10.value, null), Reflect.defineProperty(e10, t10, r10);
} };
function sZ(e10) {
  return oe(e10) ? e10.reduce((e11, t10) => (e11[t10] = null, e11), {}) : e10;
}
let s0 = true;
function s1(e10, t10, r10) {
  lG(oe(e10) ? e10.map((e11) => e11.bind(t10.proxy)) : e10.bind(t10.proxy), t10, r10);
}
function s2(e10) {
  let t10;
  let r10 = e10.type, { mixins: n9, extends: a10 } = r10, { mixins: i10, optionsCache: o10, config: { optionMergeStrategies: l10 } } = e10.appContext, s10 = o10.get(r10);
  return s10 ? t10 = s10 : i10.length || n9 || a10 ? (t10 = {}, i10.length && i10.forEach((e11) => s4(t10, e11, l10, true)), s4(t10, r10, l10)) : t10 = r10, oo(r10) && o10.set(r10, t10), t10;
}
function s4(e10, t10, r10) {
  let n9 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], { mixins: a10, extends: i10 } = t10;
  for (let o10 in i10 && s4(e10, i10, r10, true), a10 && a10.forEach((t11) => s4(e10, t11, r10, true)), t10)
    if (n9 && "expose" === o10)
      ;
    else {
      let n10 = s3[o10] || r10 && r10[o10];
      e10[o10] = n10 ? n10(e10[o10], t10[o10]) : t10[o10];
    }
  return e10;
}
let s3 = { data: s5, props: s7, emits: s7, methods: s9, computed: s9, beforeCreate: s6, created: s6, beforeMount: s6, mounted: s6, beforeUpdate: s6, updated: s6, beforeDestroy: s6, beforeUnmount: s6, destroyed: s6, unmounted: s6, activated: s6, deactivated: s6, errorCaptured: s6, serverPrefetch: s6, components: s9, directives: s9, watch: function(e10, t10) {
  if (!e10)
    return t10;
  if (!t10)
    return e10;
  let r10 = i8(/* @__PURE__ */ Object.create(null), e10);
  for (let n9 in t10)
    r10[n9] = s6(e10[n9], t10[n9]);
  return r10;
}, provide: s5, inject: function(e10, t10) {
  return s9(s8(e10), s8(t10));
} };
function s5(e10, t10) {
  return t10 ? e10 ? function() {
    return i8(on(e10) ? e10.call(this, this) : e10, on(t10) ? t10.call(this, this) : t10);
  } : t10 : e10;
}
function s8(e10) {
  if (oe(e10)) {
    let t10 = {};
    for (let r10 = 0; r10 < e10.length; r10++)
      t10[e10[r10]] = e10[r10];
    return t10;
  }
  return e10;
}
function s6(e10, t10) {
  return e10 ? [...new Set([].concat(e10, t10))] : t10;
}
function s9(e10, t10) {
  return e10 ? i8(/* @__PURE__ */ Object.create(null), e10, t10) : t10;
}
function s7(e10, t10) {
  return e10 ? oe(e10) && oe(t10) ? [.../* @__PURE__ */ new Set([...e10, ...t10])] : i8(/* @__PURE__ */ Object.create(null), sZ(e10), sZ(null != t10 ? t10 : {})) : t10;
}
function ce() {
  return { app: null, config: { isNativeTag: i4, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let ct = 0, cr = null;
function cn(e10, t10) {
  if (cK) {
    let r10 = cK.provides, n9 = cK.parent && cK.parent.provides;
    n9 === r10 && (r10 = cK.provides = Object.create(n9)), r10[e10] = t10;
  }
}
function ca(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n9 = cK || sn;
  if (n9 || cr) {
    let a10 = n9 ? null == n9.parent ? n9.vnode.appContext && n9.vnode.appContext.provides : n9.parent.provides : cr._context.provides;
    if (a10 && e10 in a10)
      return a10[e10];
    if (arguments.length > 1)
      return r10 && on(t10) ? t10.call(n9 && n9.proxy) : t10;
  }
}
let ci = /* @__PURE__ */ Object.create(null), co = () => Object.create(ci), cl = (e10) => Object.getPrototypeOf(e10) === ci;
function cs(e10, t10, r10, n9) {
  let a10;
  let [i10, o10] = e10.propsOptions, l10 = false;
  if (t10)
    for (let s10 in t10) {
      let c10;
      if (op(s10))
        continue;
      let u10 = t10[s10];
      i10 && i7(i10, c10 = og(s10)) ? o10 && o10.includes(c10) ? (a10 || (a10 = {}))[c10] = u10 : r10[c10] = u10 : sr(e10.emitsOptions, s10) || s10 in n9 && u10 === n9[s10] || (n9[s10] = u10, l10 = true);
    }
  if (o10) {
    let t11 = lE(r10), n10 = a10 || i0;
    for (let a11 = 0; a11 < o10.length; a11++) {
      let l11 = o10[a11];
      r10[l11] = cc(i10, t11, l11, n10[l11], e10, !i7(n10, l11));
    }
  }
  return l10;
}
function cc(e10, t10, r10, n9, a10, i10) {
  let o10 = e10[r10];
  if (null != o10) {
    let e11 = i7(o10, "default");
    if (e11 && void 0 === n9) {
      let e12 = o10.default;
      if (o10.type !== Function && !o10.skipFactory && on(e12)) {
        let { propsDefaults: i11 } = a10;
        if (r10 in i11)
          n9 = i11[r10];
        else {
          let o11 = cQ(a10);
          n9 = i11[r10] = e12.call(null, t10), o11();
        }
      } else
        n9 = e12;
    }
    o10[0] && (i10 && !e11 ? n9 = false : o10[1] && ("" === n9 || n9 === oy(r10)) && (n9 = true));
  }
  return n9;
}
function cu(e10) {
  return !("$" === e10[0] || op(e10));
}
function cd(e10) {
  return null === e10 ? "null" : "function" == typeof e10 ? e10.name || "" : "object" == typeof e10 && e10.constructor && e10.constructor.name || "";
}
function cf(e10, t10) {
  return oe(t10) ? t10.findIndex((t11) => cd(t11) === cd(e10)) : on(t10) ? cd(t10) === cd(e10) ? 0 : -1 : -1;
}
let cp = (e10) => "_" === e10[0] || "$stable" === e10, ch = (e10) => oe(e10) ? e10.map(cU) : [cU(e10)], cm = (e10, t10, r10) => {
  if (t10._n)
    return t10;
  let n9 = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sn;
    if (arguments.length > 2 && arguments[2], !t11 || e11._n)
      return e11;
    let r11 = function() {
      let n10;
      for (var a10 = arguments.length, i10 = Array(a10), o10 = 0; o10 < a10; o10++)
        i10[o10] = arguments[o10];
      r11._d && (cL += -1);
      let l10 = si(t11);
      try {
        n10 = e11(...i10);
      } finally {
        si(l10), r11._d && (cL += 1);
      }
      return n10;
    };
    return r11._n = true, r11._c = true, r11._d = true, r11;
  }(function() {
    for (var e11 = arguments.length, r11 = Array(e11), n10 = 0; n10 < e11; n10++)
      r11[n10] = arguments[n10];
    return ch(t10(...r11));
  }, r10);
  return n9._c = false, n9;
}, cg = (e10, t10, r10) => {
  let n9 = e10._ctx;
  for (let r11 in e10) {
    if (cp(r11))
      continue;
    let a10 = e10[r11];
    if (on(a10))
      t10[r11] = cm(r11, a10, n9);
    else if (null != a10) {
      let e11 = ch(a10);
      t10[r11] = () => e11;
    }
  }
}, cv = (e10, t10) => {
  let r10 = ch(t10);
  e10.slots.default = () => r10;
}, cy = (e10, t10) => {
  if (32 & e10.vnode.shapeFlag) {
    let r10 = t10._;
    r10 ? (e10.slots = lE(t10), ok(e10.slots, "_", r10)) : cg(t10, e10.slots = co());
  } else
    e10.slots = co(), t10 && cv(e10, t10);
}, cb = (e10, t10, r10) => {
  let { vnode: n9, slots: a10 } = e10, i10 = true, o10 = i0;
  if (32 & n9.shapeFlag) {
    let e11 = t10._;
    e11 ? r10 && 1 === e11 ? i10 = false : (i8(a10, t10), r10 || 1 !== e11 || delete a10._) : (i10 = !t10.$stable, cg(t10, a10)), o10 = t10;
  } else
    t10 && (cv(e10, t10), o10 = { default: 1 });
  if (i10)
    for (let e11 in a10)
      cp(e11) || null != o10[e11] || delete a10[e11];
};
function cw(e10, t10, r10, n9) {
  let a10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (oe(e10)) {
    e10.forEach((e11, i11) => cw(e11, t10 && (oe(t10) ? t10[i11] : t10), r10, n9, a10));
    return;
  }
  if (sR(n9) && !a10)
    return;
  let i10 = 4 & n9.shapeFlag ? c5(n9.component) || n9.component.proxy : n9.el, o10 = a10 ? null : i10, { i: l10, r: s10 } = e10, c10 = t10 && t10.r, u10 = l10.refs === i0 ? l10.refs = {} : l10.refs, d7 = l10.setupState;
  if (null != c10 && c10 !== s10 && (oa(c10) ? (u10[c10] = null, i7(d7, c10) && (d7[c10] = null)) : lj(c10) && (c10.value = null)), on(s10))
    lq(s10, l10, 12, [o10, u10]);
  else {
    let t11 = oa(s10), n10 = lj(s10);
    if (t11 || n10) {
      let l11 = () => {
        if (e10.f) {
          let r11 = t11 ? i7(d7, s10) ? d7[s10] : u10[s10] : s10.value;
          a10 ? oe(r11) && i6(r11, i10) : oe(r11) ? r11.includes(i10) || r11.push(i10) : t11 ? (u10[s10] = [i10], i7(d7, s10) && (d7[s10] = u10[s10])) : (s10.value = [i10], e10.k && (u10[e10.k] = s10.value));
        } else
          t11 ? (u10[s10] = o10, i7(d7, s10) && (d7[s10] = o10)) : n10 && (s10.value = o10, e10.k && (u10[e10.k] = o10));
      };
      o10 ? (l11.id = -1, c_(l11, r10)) : l11();
    }
  }
}
let c_ = function(e10, t10) {
  t10 && t10.pendingBranch ? oe(e10) ? t10.effects.push(...e10) : t10.effects.push(e10) : (oe(e10) ? lZ.push(...e10) : l0 && l0.includes(e10, e10.allowRecurse ? l1 + 1 : l1) || lZ.push(e10), l8());
};
function cx(e10, t10) {
  let { type: r10, props: n9 } = e10;
  return "svg" === t10 && "foreignObject" === r10 || "mathml" === t10 && "annotation-xml" === r10 && n9 && n9.encoding && n9.encoding.includes("html") ? void 0 : t10;
}
function ck(e10, t10) {
  let { effect: r10, update: n9 } = e10;
  r10.allowRecurse = n9.allowRecurse = t10;
}
function cS(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n9 = e10.children, a10 = t10.children;
  if (oe(n9) && oe(a10))
    for (let e11 = 0; e11 < n9.length; e11++) {
      let t11 = n9[e11], i10 = a10[e11];
      !(1 & i10.shapeFlag) || i10.dynamicChildren || ((i10.patchFlag <= 0 || 32 === i10.patchFlag) && ((i10 = a10[e11] = cz(a10[e11])).el = t11.el), r10 || cS(t11, i10)), i10.type === cI && (i10.el = t11.el);
    }
}
let cO = (e10) => e10.__isTeleport, cC = (e10) => e10 && (e10.disabled || "" === e10.disabled), cM = (e10) => "undefined" != typeof SVGElement && e10 instanceof SVGElement, cA = (e10) => "function" == typeof MathMLElement && e10 instanceof MathMLElement, cP = (e10, t10) => {
  let r10 = e10 && e10.to;
  return oa(r10) ? t10 ? t10(r10) : null : r10;
};
function cE(e10, t10, r10, n9) {
  let { o: { insert: a10 }, m: i10 } = n9, o10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2;
  0 === o10 && a10(e10.targetAnchor, t10, r10);
  let { el: l10, anchor: s10, shapeFlag: c10, children: u10, props: d7 } = e10, f10 = 2 === o10;
  if (f10 && a10(l10, t10, r10), (!f10 || cC(d7)) && 16 & c10)
    for (let e11 = 0; e11 < u10.length; e11++)
      i10(u10[e11], t10, r10, 2);
  f10 && a10(s10, t10, r10);
}
let cT = { name: "Teleport", __isTeleport: true, process(e10, t10, r10, n9, a10, i10, o10, l10, s10, c10) {
  let { mc: u10, pc: d7, pbc: f10, o: { insert: p10, querySelector: h10, createText: m10, createComment: g10 } } = c10, y2 = cC(t10.props), { shapeFlag: b2, children: w2, dynamicChildren: _2 } = t10;
  if (null == e10) {
    let e11 = t10.el = m10(""), c11 = t10.anchor = m10("");
    p10(e11, r10, n9), p10(c11, r10, n9);
    let d10 = t10.target = cP(t10.props, h10), f11 = t10.targetAnchor = m10("");
    d10 && (p10(f11, d10), "svg" === o10 || cM(d10) ? o10 = "svg" : ("mathml" === o10 || cA(d10)) && (o10 = "mathml"));
    let g11 = (e12, t11) => {
      16 & b2 && u10(w2, e12, t11, a10, i10, o10, l10, s10);
    };
    y2 ? g11(r10, c11) : d10 && g11(d10, f11);
  } else {
    t10.el = e10.el;
    let n10 = t10.anchor = e10.anchor, u11 = t10.target = e10.target, p11 = t10.targetAnchor = e10.targetAnchor, m11 = cC(e10.props), g11 = m11 ? r10 : u11;
    if ("svg" === o10 || cM(u11) ? o10 = "svg" : ("mathml" === o10 || cA(u11)) && (o10 = "mathml"), _2 ? (f10(e10.dynamicChildren, _2, g11, a10, i10, o10, l10), cS(e10, t10, true)) : s10 || d7(e10, t10, g11, m11 ? n10 : p11, a10, i10, o10, l10, false), y2)
      m11 ? t10.props && e10.props && t10.props.to !== e10.props.to && (t10.props.to = e10.props.to) : cE(t10, r10, n10, c10, 1);
    else if ((t10.props && t10.props.to) !== (e10.props && e10.props.to)) {
      let e11 = t10.target = cP(t10.props, h10);
      e11 && cE(t10, e11, null, c10, 0);
    } else
      m11 && cE(t10, u11, p11, c10, 1);
  }
  cR(t10);
}, remove(e10, t10, r10, n9, a10, i10) {
  let { um: o10, o: { remove: l10 } } = a10, { shapeFlag: s10, children: c10, anchor: u10, targetAnchor: d7, target: f10, props: p10 } = e10;
  if (f10 && l10(d7), i10 && l10(u10), 16 & s10) {
    let e11 = i10 || !cC(p10);
    for (let n10 = 0; n10 < c10.length; n10++) {
      let a11 = c10[n10];
      o10(a11, t10, r10, e11, !!a11.dynamicChildren);
    }
  }
}, move: cE, hydrate: function(e10, t10, r10, n9, a10, i10, o10, l10) {
  let { o: { nextSibling: s10, parentNode: c10, querySelector: u10 } } = o10, d7 = t10.target = cP(t10.props, u10);
  if (d7) {
    let o11 = d7._lpa || d7.firstChild;
    if (16 & t10.shapeFlag) {
      if (cC(t10.props))
        t10.anchor = l10(s10(e10), t10, c10(e10), r10, n9, a10, i10), t10.targetAnchor = o11;
      else {
        t10.anchor = s10(e10);
        let c11 = o11;
        for (; c11; )
          if ((c11 = s10(c11)) && 8 === c11.nodeType && "teleport anchor" === c11.data) {
            t10.targetAnchor = c11, d7._lpa = t10.targetAnchor && s10(t10.targetAnchor);
            break;
          }
        l10(o11, t10, d7, r10, n9, a10, i10);
      }
    }
    cR(t10);
  }
  return t10.anchor && s10(t10.anchor);
} };
function cR(e10) {
  let t10 = e10.ctx;
  if (t10 && t10.ut) {
    let r10 = e10.children[0].el;
    for (; r10 && r10 !== e10.targetAnchor; )
      1 === r10.nodeType && r10.setAttribute("data-v-owner", t10.uid), r10 = r10.nextSibling;
    t10.ut();
  }
}
let c$ = Symbol.for("v-fgt"), cI = Symbol.for("v-txt"), cD = Symbol.for("v-cmt"), cj = Symbol.for("v-stc"), cL = 1;
function cF(e10) {
  return !!e10 && true === e10.__v_isVNode;
}
function cB(e10, t10) {
  return e10.type === t10.type && e10.key === t10.key;
}
let cN = (e10) => {
  let { key: t10 } = e10;
  return null != t10 ? t10 : null;
}, cV = (e10) => {
  let { ref: t10, ref_key: r10, ref_for: n9 } = e10;
  return "number" == typeof t10 && (t10 = "" + t10), null != t10 ? oa(t10) || lj(t10) || on(t10) ? { i: sn, r: t10, k: r10, f: !!n9 } : t10 : null;
}, cW = function(e10) {
  var t10, r10;
  let n9 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l10 = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
  if (e10 && e10 !== su || (e10 = cD), cF(e10)) {
    let t11 = cH(e10, n9, true);
    return a10 && cq(t11, a10), t11.patchFlag |= -2, t11;
  }
  if (on(t10 = e10) && "__vccOpts" in t10 && (e10 = e10.__vccOpts), n9) {
    let { class: e11, style: t11 } = n9 = (r10 = n9) ? lP(r10) || cl(r10) ? i8({}, r10) : r10 : null;
    e11 && !oa(e11) && (n9.class = oT(e11)), oo(t11) && (lP(t11) && !oe(t11) && (t11 = i8({}, t11)), n9.style = oM(t11));
  }
  let s10 = oa(e10) ? 1 : sd(e10) ? 128 : cO(e10) ? 64 : oo(e10) ? 4 : on(e10) ? 2 : 0;
  return function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, i11 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e11 === c$ ? 0 : 1, o11 = (arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7]), l11 = { __v_isVNode: true, __v_skip: true, type: e11, props: t11, key: t11 && cN(t11), ref: t11 && cV(t11), scopeId: sa, slotScopeIds: null, children: r11, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: i11, patchFlag: n10, dynamicProps: a11, dynamicChildren: null, appContext: null, ctx: sn };
    return o11 ? (cq(l11, r11), 128 & i11 && e11.normalize(l11)) : r11 && (l11.shapeFlag |= oa(r11) ? 8 : 16), l11;
  }(e10, n9, a10, i10, o10, s10, l10, true);
};
function cH(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], { props: n9, ref: a10, patchFlag: i10, children: o10 } = e10, l10 = t10 ? function() {
    for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++)
      t11[r11] = arguments[r11];
    let n10 = {};
    for (let e12 = 0; e12 < t11.length; e12++) {
      let r12 = t11[e12];
      for (let e13 in r12)
        if ("class" === e13)
          n10.class !== r12.class && (n10.class = oT([n10.class, r12.class]));
        else if ("style" === e13)
          n10.style = oM([n10.style, r12.style]);
        else if (i3(e13)) {
          let t12 = n10[e13], a11 = r12[e13];
          a11 && t12 !== a11 && !(oe(t12) && t12.includes(a11)) && (n10[e13] = t12 ? [].concat(t12, a11) : a11);
        } else
          "" !== e13 && (n10[e13] = r12[e13]);
    }
    return n10;
  }(n9 || {}, t10) : n9;
  return { __v_isVNode: true, __v_skip: true, type: e10.type, props: l10, key: l10 && cN(l10), ref: t10 && t10.ref ? r10 && a10 ? oe(a10) ? a10.concat(cV(t10)) : [a10, cV(t10)] : cV(t10) : a10, scopeId: e10.scopeId, slotScopeIds: e10.slotScopeIds, children: o10, target: e10.target, targetAnchor: e10.targetAnchor, staticCount: e10.staticCount, shapeFlag: e10.shapeFlag, patchFlag: t10 && e10.type !== c$ ? -1 === i10 ? 16 : 16 | i10 : i10, dynamicProps: e10.dynamicProps, dynamicChildren: e10.dynamicChildren, appContext: e10.appContext, dirs: e10.dirs, transition: e10.transition, component: e10.component, suspense: e10.suspense, ssContent: e10.ssContent && cH(e10.ssContent), ssFallback: e10.ssFallback && cH(e10.ssFallback), el: e10.el, anchor: e10.anchor, ctx: e10.ctx, ce: e10.ce };
}
function cU(e10) {
  return null == e10 || "boolean" == typeof e10 ? cW(cD) : oe(e10) ? cW(c$, null, e10.slice()) : "object" == typeof e10 ? cz(e10) : cW(cI, null, String(e10));
}
function cz(e10) {
  return null === e10.el && -1 !== e10.patchFlag || e10.memo ? e10 : cH(e10);
}
function cq(e10, t10) {
  let r10 = 0, { shapeFlag: n9 } = e10;
  if (null == t10)
    t10 = null;
  else if (oe(t10))
    r10 = 16;
  else if ("object" == typeof t10) {
    if (65 & n9) {
      let r11 = t10.default;
      r11 && (r11._c && (r11._d = false), cq(e10, r11()), r11._c && (r11._d = true));
      return;
    }
    {
      r10 = 32;
      let n10 = t10._;
      n10 || cl(t10) ? 3 === n10 && sn && (1 === sn.slots._ ? t10._ = 1 : (t10._ = 2, e10.patchFlag |= 1024)) : t10._ctx = sn;
    }
  } else
    on(t10) ? (t10 = { default: t10, _ctx: sn }, r10 = 32) : (t10 = String(t10), 64 & n9 ? (r10 = 16, t10 = [function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ", t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return cW(cI, null, e11, t11);
    }(t10)]) : r10 = 8);
  e10.children = t10, e10.shapeFlag |= r10;
}
function cG(e10, t10, r10) {
  let n9 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  lG(e10, t10, 7, [r10, n9]);
}
let cY = ce(), cJ = 0, cK = null, cX = () => cK || sn;
{
  let e10 = oC(), t10 = (t11, r10) => {
    let n9;
    return (n9 = e10[t11]) || (n9 = e10[t11] = []), n9.push(r10), (e11) => {
      n9.length > 1 ? n9.forEach((t12) => t12(e11)) : n9[0](e11);
    };
  };
  n = t10("__VUE_INSTANCE_SETTERS__", (e11) => cK = e11), a = t10("__VUE_SSR_SETTERS__", (e11) => c1 = e11);
}
let cQ = (e10) => {
  let t10 = cK;
  return n(e10), e10.scope.on(), () => {
    e10.scope.off(), n(t10);
  };
}, cZ = () => {
  cK && cK.scope.off(), n(null);
};
function c0(e10) {
  return 4 & e10.vnode.shapeFlag;
}
let c1 = false;
function c2(e10, t10, r10) {
  on(t10) ? e10.type.__ssrInlineRender ? e10.ssrRender = t10 : e10.render = t10 : oo(t10) && (e10.setupState = lH(t10)), c4(e10, r10);
}
function c4(e10, t10, r10) {
  let n9 = e10.type;
  if (!e10.render) {
    if (!t10 && i && !n9.render) {
      let t11 = n9.template || s2(e10).template;
      if (t11) {
        let { isCustomElement: r11, compilerOptions: a10 } = e10.appContext.config, { delimiters: o10, compilerOptions: l10 } = n9, s10 = i8(i8({ isCustomElement: r11, delimiters: o10 }, a10), l10);
        n9.render = i(t11, s10);
      }
    }
    e10.render = n9.render || i2;
  }
  {
    let t11 = cQ(e10);
    oV();
    try {
      !function(e11) {
        let t12 = s2(e11), r11 = e11.proxy, n10 = e11.ctx;
        s0 = false, t12.beforeCreate && s1(t12.beforeCreate, e11, "bc");
        let { data: a10, computed: i10, methods: o10, watch: l10, provide: s10, inject: c10, created: u10, beforeMount: d7, mounted: f10, beforeUpdate: p10, updated: h10, activated: m10, deactivated: g10, beforeDestroy: y2, beforeUnmount: b2, destroyed: w2, unmounted: _2, render: x2, renderTracked: k2, renderTriggered: S2, errorCaptured: O2, serverPrefetch: C2, expose: M2, inheritAttrs: A2, components: P2, directives: E2, filters: T2 } = t12;
        if (c10 && function(e12, t13) {
          for (let r12 in arguments.length > 2 && void 0 !== arguments[2] && arguments[2], oe(e12) && (e12 = s8(e12)), e12) {
            let n11;
            let a11 = e12[r12];
            lj(n11 = oo(a11) ? "default" in a11 ? ca(a11.from || r12, a11.default, true) : ca(a11.from || r12) : ca(a11)) ? Object.defineProperty(t13, r12, { enumerable: true, configurable: true, get: () => n11.value, set: (e13) => n11.value = e13 }) : t13[r12] = n11;
          }
        }(c10, n10, null), o10)
          for (let e12 in o10) {
            let t13 = o10[e12];
            on(t13) && (n10[e12] = t13.bind(r11));
          }
        if (a10) {
          let t13 = a10.call(r11, r11);
          oo(t13) && (e11.data = lx(t13));
        }
        if (s0 = true, i10)
          for (let e12 in i10) {
            let t13 = i10[e12], a11 = on(t13) ? t13.bind(r11, r11) : on(t13.get) ? t13.get.bind(r11, r11) : i2, o11 = c6({ get: a11, set: !on(t13) && on(t13.set) ? t13.set.bind(r11) : i2 });
            Object.defineProperty(n10, e12, { enumerable: true, configurable: true, get: () => o11.value, set: (e13) => o11.value = e13 });
          }
        if (l10)
          for (let e12 in l10)
            !function e13(t13, r12, n11, a11) {
              let i11 = a11.includes(".") ? sy(n11, a11) : () => n11[a11];
              if (oa(t13)) {
                let e14 = r12[t13];
                on(e14) && sm(i11, e14);
              } else if (on(t13))
                sm(i11, t13.bind(n11));
              else if (oo(t13)) {
                if (oe(t13))
                  t13.forEach((t14) => e13(t14, r12, n11, a11));
                else {
                  let e14 = on(t13.handler) ? t13.handler.bind(n11) : r12[t13.handler];
                  on(e14) && sm(i11, e14, t13);
                }
              }
            }(l10[e12], n10, r11, e12);
        if (s10) {
          let e12 = on(s10) ? s10.call(r11) : s10;
          Reflect.ownKeys(e12).forEach((t13) => {
            cn(t13, e12[t13]);
          });
        }
        function R2(e12, t13) {
          oe(t13) ? t13.forEach((t14) => e12(t14.bind(r11))) : t13 && e12(t13.bind(r11));
        }
        if (u10 && s1(u10, e11, "c"), R2(sB, d7), R2(sN, f10), R2(sV, p10), R2(sW, h10), R2(sI, m10), R2(sD, g10), R2(sY, O2), R2(sG, k2), R2(sq, S2), R2(sH, b2), R2(sU, _2), R2(sz, C2), oe(M2)) {
          if (M2.length) {
            let t13 = e11.exposed || (e11.exposed = {});
            M2.forEach((e12) => {
              Object.defineProperty(t13, e12, { get: () => r11[e12], set: (t14) => r11[e12] = t14 });
            });
          } else
            e11.exposed || (e11.exposed = {});
        }
        x2 && e11.render === i2 && (e11.render = x2), null != A2 && (e11.inheritAttrs = A2), P2 && (e11.components = P2), E2 && (e11.directives = E2);
      }(e10);
    } finally {
      oW(), t11();
    }
  }
}
let c3 = { get: (e10, t10) => (oX(e10, "get", ""), e10[t10]) };
function c5(e10) {
  if (e10.exposed) {
    var t10;
    return e10.exposeProxy || (e10.exposeProxy = new Proxy(lH((Object.isExtensible(t10 = e10.exposed) && ok(t10, "__v_skip", true), t10)), { get: (t11, r10) => r10 in t11 ? t11[r10] : r10 in sK ? sK[r10](e10) : void 0, has: (e11, t11) => t11 in e11 || t11 in sK }));
  }
}
let c8 = /(?:^|[-_])(\w)/g, c6 = (e10, t10) => function(e11, t11) {
  let r10, n9, a10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i10 = on(e11);
  return i10 ? (r10 = e11, n9 = i2) : (r10 = e11.get, n9 = e11.set), new l$(r10, n9, i10 || !n9, a10);
}(e10, t10, c1);
function c9(e10, t10, r10) {
  let n9 = arguments.length;
  return 2 !== n9 ? (n9 > 3 ? r10 = Array.prototype.slice.call(arguments, 2) : 3 === n9 && cF(r10) && (r10 = [r10]), cW(e10, t10, r10)) : !oo(t10) || oe(t10) ? cW(e10, null, t10) : cF(t10) ? cW(e10, null, [t10]) : cW(e10, t10);
}
let c7 = "undefined" != typeof document ? document : null, ue = c7 && c7.createElement("template"), ut = "transition", ur = "animation", un = Symbol("_vtc"), ua = (e10, t10) => {
  let { slots: r10 } = t10;
  return c9(sO, function(e11) {
    let t11 = {};
    for (let r12 in e11)
      r12 in ui || (t11[r12] = e11[r12]);
    if (false === e11.css)
      return t11;
    let { name: r11 = "v", type: n9, duration: a10, enterFromClass: i10 = `${r11}-enter-from`, enterActiveClass: o10 = `${r11}-enter-active`, enterToClass: l10 = `${r11}-enter-to`, appearFromClass: s10 = i10, appearActiveClass: c10 = o10, appearToClass: u10 = l10, leaveFromClass: d7 = `${r11}-leave-from`, leaveActiveClass: f10 = `${r11}-leave-active`, leaveToClass: p10 = `${r11}-leave-to` } = e11, h10 = function(e12) {
      if (null == e12)
        return null;
      if (oo(e12))
        return [oO(e12.enter), oO(e12.leave)];
      {
        let t12 = oO(e12);
        return [t12, t12];
      }
    }(a10), m10 = h10 && h10[0], g10 = h10 && h10[1], { onBeforeEnter: y2, onEnter: b2, onEnterCancelled: w2, onLeave: _2, onLeaveCancelled: x2, onBeforeAppear: k2 = y2, onAppear: S2 = b2, onAppearCancelled: O2 = w2 } = t11, C2 = (e12, t12, r12) => {
      uc(e12, t12 ? u10 : l10), uc(e12, t12 ? c10 : o10), r12 && r12();
    }, M2 = (e12, t12) => {
      e12._isLeaving = false, uc(e12, d7), uc(e12, p10), uc(e12, f10), t12 && t12();
    }, A2 = (e12) => (t12, r12) => {
      let a11 = e12 ? S2 : b2, o11 = () => C2(t12, e12, r12);
      uo(a11, [t12, o11]), uu(() => {
        uc(t12, e12 ? s10 : i10), us(t12, e12 ? u10 : l10), ul(a11) || uf(t12, n9, m10, o11);
      });
    };
    return i8(t11, { onBeforeEnter(e12) {
      uo(y2, [e12]), us(e12, i10), us(e12, o10);
    }, onBeforeAppear(e12) {
      uo(k2, [e12]), us(e12, s10), us(e12, c10);
    }, onEnter: A2(false), onAppear: A2(true), onLeave(e12, t12) {
      e12._isLeaving = true;
      let r12 = () => M2(e12, t12);
      us(e12, d7), document.body.offsetHeight, us(e12, f10), uu(() => {
        e12._isLeaving && (uc(e12, d7), us(e12, p10), ul(_2) || uf(e12, n9, g10, r12));
      }), uo(_2, [e12, r12]);
    }, onEnterCancelled(e12) {
      C2(e12, false), uo(w2, [e12]);
    }, onAppearCancelled(e12) {
      C2(e12, true), uo(O2, [e12]);
    }, onLeaveCancelled(e12) {
      M2(e12), uo(x2, [e12]);
    } });
  }(e10), r10);
};
ua.displayName = "Transition";
let ui = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
ua.props = i8({}, sS, ui);
let uo = function(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  oe(e10) ? e10.forEach((e11) => e11(...t10)) : e10 && e10(...t10);
}, ul = (e10) => !!e10 && (oe(e10) ? e10.some((e11) => e11.length > 1) : e10.length > 1);
function us(e10, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e10.classList.add(t11)), (e10[un] || (e10[un] = /* @__PURE__ */ new Set())).add(t10);
}
function uc(e10, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e10.classList.remove(t11));
  let r10 = e10[un];
  r10 && (r10.delete(t10), r10.size || (e10[un] = void 0));
}
function uu(e10) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e10);
  });
}
let ud = 0;
function uf(e10, t10, r10, n9) {
  let a10 = e10._endId = ++ud, i10 = () => {
    a10 === e10._endId && n9();
  };
  if (r10)
    return setTimeout(i10, r10);
  let { type: o10, timeout: l10, propCount: s10 } = function(e11, t11) {
    let r11 = window.getComputedStyle(e11), n10 = (e12) => (r11[e12] || "").split(", "), a11 = n10(`${ut}Delay`), i11 = n10(`${ut}Duration`), o11 = up(a11, i11), l11 = n10(`${ur}Delay`), s11 = n10(`${ur}Duration`), c11 = up(l11, s11), u11 = null, d10 = 0, f11 = 0;
    t11 === ut ? o11 > 0 && (u11 = ut, d10 = o11, f11 = i11.length) : t11 === ur ? c11 > 0 && (u11 = ur, d10 = c11, f11 = s11.length) : f11 = (u11 = (d10 = Math.max(o11, c11)) > 0 ? o11 > c11 ? ut : ur : null) ? u11 === ut ? i11.length : s11.length : 0;
    let p10 = u11 === ut && /\b(transform|all)(,|$)/.test(n10(`${ut}Property`).toString());
    return { type: u11, timeout: d10, propCount: f11, hasTransform: p10 };
  }(e10, t10);
  if (!o10)
    return n9();
  let c10 = o10 + "end", u10 = 0, d7 = () => {
    e10.removeEventListener(c10, f10), i10();
  }, f10 = (t11) => {
    t11.target === e10 && ++u10 >= s10 && d7();
  };
  setTimeout(() => {
    u10 < s10 && d7();
  }, l10 + 1), e10.addEventListener(c10, f10);
}
function up(e10, t10) {
  for (; e10.length < t10.length; )
    e10 = e10.concat(e10);
  return Math.max(...t10.map((t11, r10) => uh(t11) + uh(e10[r10])));
}
function uh(e10) {
  return "auto" === e10 ? 0 : 1e3 * Number(e10.slice(0, -1).replace(",", "."));
}
let um = Symbol("_vod"), ug = Symbol("_vsh"), uv = Symbol(""), uy = /(^|;)\s*display\s*:/, ub = /\s*!important$/;
function uw(e10, t10, r10) {
  if (oe(r10))
    r10.forEach((r11) => uw(e10, t10, r11));
  else if (null == r10 && (r10 = ""), t10.startsWith("--"))
    e10.setProperty(t10, r10);
  else {
    let n9 = function(e11, t11) {
      let r11 = ux[t11];
      if (r11)
        return r11;
      let n10 = og(t11);
      if ("filter" !== n10 && n10 in e11)
        return ux[t11] = n10;
      n10 = ob(n10);
      for (let r12 = 0; r12 < u_.length; r12++) {
        let a10 = u_[r12] + n10;
        if (a10 in e11)
          return ux[t11] = a10;
      }
      return t11;
    }(e10, t10);
    ub.test(r10) ? e10.setProperty(oy(n9), r10.replace(ub, ""), "important") : e10[n9] = r10;
  }
}
let u_ = ["Webkit", "Moz", "ms"], ux = {}, uk = "http://www.w3.org/1999/xlink", uS = Symbol("_vei"), uO = /(?:Once|Passive|Capture)$/, uC = 0, uM = Promise.resolve(), uA = () => uC || (uM.then(() => uC = 0), uC = Date.now()), uP = (e10) => 111 === e10.charCodeAt(0) && 110 === e10.charCodeAt(1) && e10.charCodeAt(2) > 96 && 123 > e10.charCodeAt(2), uE = i8({ patchProp: (e10, t10, r10, n9, a10, i10, o10, l10, s10) => {
  let c10 = "svg" === a10;
  "class" === t10 ? function(e11, t11, r11) {
    let n10 = e11[un];
    n10 && (t11 = (t11 ? [t11, ...n10] : [...n10]).join(" ")), null == t11 ? e11.removeAttribute("class") : r11 ? e11.setAttribute("class", t11) : e11.className = t11;
  }(e10, n9, c10) : "style" === t10 ? function(e11, t11, r11) {
    let n10 = e11.style, a11 = oa(r11), i11 = false;
    if (r11 && !a11) {
      if (t11) {
        if (oa(t11))
          for (let e12 of t11.split(";")) {
            let t12 = e12.slice(0, e12.indexOf(":")).trim();
            null == r11[t12] && uw(n10, t12, "");
          }
        else
          for (let e12 in t11)
            null == r11[e12] && uw(n10, e12, "");
      }
      for (let e12 in r11)
        "display" === e12 && (i11 = true), uw(n10, e12, r11[e12]);
    } else if (a11) {
      if (t11 !== r11) {
        let e12 = n10[uv];
        e12 && (r11 += ";" + e12), n10.cssText = r11, i11 = uy.test(r11);
      }
    } else
      t11 && e11.removeAttribute("style");
    um in e11 && (e11[um] = i11 ? n10.display : "", e11[ug] && (n10.display = "none"));
  }(e10, r10, n9) : i3(t10) ? i5(t10) || function(e11, t11, r11, n10) {
    let a11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, i11 = e11[uS] || (e11[uS] = {}), o11 = i11[t11];
    if (n10 && o11)
      o11.value = n10;
    else {
      let [r12, l11] = function(e12) {
        let t12;
        if (uO.test(e12)) {
          let r13;
          for (t12 = {}; r13 = e12.match(uO); )
            e12 = e12.slice(0, e12.length - r13[0].length), t12[r13[0].toLowerCase()] = true;
        }
        return [":" === e12[2] ? e12.slice(3) : oy(e12.slice(2)), t12];
      }(t11);
      n10 ? function(e12, t12, r13, n11) {
        e12.addEventListener(t12, r13, n11);
      }(e11, r12, i11[t11] = function(e12, t12) {
        let r13 = (e13) => {
          if (e13._vts) {
            if (e13._vts <= r13.attached)
              return;
          } else
            e13._vts = Date.now();
          lG(function(e14, t13) {
            if (!oe(t13))
              return t13;
            {
              let r14 = e14.stopImmediatePropagation;
              return e14.stopImmediatePropagation = () => {
                r14.call(e14), e14._stopped = true;
              }, t13.map((e15) => (t14) => !t14._stopped && e15 && e15(t14));
            }
          }(e13, r13.value), t12, 5, [e13]);
        };
        return r13.value = e12, r13.attached = uA(), r13;
      }(n10, a11), l11) : o11 && (!function(e12, t12, r13, n11) {
        e12.removeEventListener(t12, r13, n11);
      }(e11, r12, o11, l11), i11[t11] = void 0);
    }
  }(e10, t10, r10, n9, o10) : ("." === t10[0] ? (t10 = t10.slice(1), 0) : "^" === t10[0] ? (t10 = t10.slice(1), 1) : !function(e11, t11, r11, n10) {
    if (n10)
      return !!("innerHTML" === t11 || "textContent" === t11 || t11 in e11 && uP(t11) && on(r11));
    if ("spellcheck" === t11 || "draggable" === t11 || "translate" === t11 || "form" === t11 || "list" === t11 && "INPUT" === e11.tagName || "type" === t11 && "TEXTAREA" === e11.tagName)
      return false;
    if ("width" === t11 || "height" === t11) {
      let t12 = e11.tagName;
      if ("IMG" === t12 || "VIDEO" === t12 || "CANVAS" === t12 || "SOURCE" === t12)
        return false;
    }
    return !(uP(t11) && oa(r11)) && t11 in e11;
  }(e10, t10, n9, c10)) ? ("true-value" === t10 ? e10._trueValue = n9 : "false-value" === t10 && (e10._falseValue = n9), function(e11, t11, r11, n10, a11) {
    if (n10 && t11.startsWith("xlink:"))
      null == r11 ? e11.removeAttributeNS(uk, t11.slice(6, t11.length)) : e11.setAttributeNS(uk, t11, r11);
    else {
      let n11 = oR(t11);
      null == r11 || n11 && !(r11 || "" === r11) ? e11.removeAttribute(t11) : e11.setAttribute(t11, n11 ? "" : r11);
    }
  }(e10, t10, n9, c10)) : function(e11, t11, r11, n10, a11, i11, o11) {
    if ("innerHTML" === t11 || "textContent" === t11) {
      n10 && o11(n10, a11, i11), e11[t11] = null == r11 ? "" : r11;
      return;
    }
    let l11 = e11.tagName;
    if ("value" === t11 && "PROGRESS" !== l11 && !l11.includes("-")) {
      let n11 = "OPTION" === l11 ? e11.getAttribute("value") || "" : e11.value, a12 = null == r11 ? "" : r11;
      n11 === a12 && "_value" in e11 || (e11.value = a12), null == r11 && e11.removeAttribute(t11), e11._value = r11;
      return;
    }
    let s11 = false;
    if ("" === r11 || null == r11) {
      let n11 = typeof e11[t11];
      if ("boolean" === n11) {
        var c11;
        r11 = !!(c11 = r11) || "" === c11;
      } else
        null == r11 && "string" === n11 ? (r11 = "", s11 = true) : "number" === n11 && (r11 = 0, s11 = true);
    }
    try {
      e11[t11] = r11;
    } catch (e12) {
    }
    s11 && e11.removeAttribute(t11);
  }(e10, t10, n9, i10, o10, l10, s10);
} }, { insert: (e10, t10, r10) => {
  t10.insertBefore(e10, r10 || null);
}, remove: (e10) => {
  let t10 = e10.parentNode;
  t10 && t10.removeChild(e10);
}, createElement: (e10, t10, r10, n9) => {
  let a10 = "svg" === t10 ? c7.createElementNS("http://www.w3.org/2000/svg", e10) : "mathml" === t10 ? c7.createElementNS("http://www.w3.org/1998/Math/MathML", e10) : c7.createElement(e10, r10 ? { is: r10 } : void 0);
  return "select" === e10 && n9 && null != n9.multiple && a10.setAttribute("multiple", n9.multiple), a10;
}, createText: (e10) => c7.createTextNode(e10), createComment: (e10) => c7.createComment(e10), setText: (e10, t10) => {
  e10.nodeValue = t10;
}, setElementText: (e10, t10) => {
  e10.textContent = t10;
}, parentNode: (e10) => e10.parentNode, nextSibling: (e10) => e10.nextSibling, querySelector: (e10) => c7.querySelector(e10), setScopeId(e10, t10) {
  e10.setAttribute(t10, "");
}, insertStaticContent(e10, t10, r10, n9, a10, i10) {
  let o10 = r10 ? r10.previousSibling : t10.lastChild;
  if (a10 && (a10 === i10 || a10.nextSibling))
    for (; t10.insertBefore(a10.cloneNode(true), r10), a10 !== i10 && (a10 = a10.nextSibling); )
      ;
  else {
    ue.innerHTML = "svg" === n9 ? `<svg>${e10}</svg>` : "mathml" === n9 ? `<math>${e10}</math>` : e10;
    let a11 = ue.content;
    if ("svg" === n9 || "mathml" === n9) {
      let e11 = a11.firstChild;
      for (; e11.firstChild; )
        a11.appendChild(e11.firstChild);
      a11.removeChild(e11);
    }
    t10.insertBefore(a11, r10);
  }
  return [o10 ? o10.nextSibling : t10.firstChild, r10 ? r10.previousSibling : t10.lastChild];
} }), uT = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  let n9 = (o || (o = function(e11, t11) {
    var r11;
    let n10, i11;
    oC().__VUE__ = true;
    let { insert: o10, remove: l10, patchProp: s10, createElement: c10, createText: u10, createComment: d7, setText: f10, setElementText: p10, parentNode: h10, nextSibling: m10, setScopeId: g10 = i2, insertStaticContent: y2 } = e11, b2 = function(e12, t12, r12) {
      let n11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, a10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, i12 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, o11 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : void 0, l11 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, s11 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : !!t12.dynamicChildren;
      if (e12 === t12)
        return;
      e12 && !cB(e12, t12) && (n11 = G2(e12), W2(e12, a10, i12, true), e12 = null), -2 === t12.patchFlag && (s11 = false, t12.dynamicChildren = null);
      let { type: c11, ref: u11, shapeFlag: d10 } = t12;
      switch (c11) {
        case cI:
          w2(e12, t12, r12, n11);
          break;
        case cD:
          _2(e12, t12, r12, n11);
          break;
        case cj:
          null == e12 && x2(t12, r12, n11, o11);
          break;
        case c$:
          R2(e12, t12, r12, n11, a10, i12, o11, l11, s11);
          break;
        default:
          1 & d10 ? O2(e12, t12, r12, n11, a10, i12, o11, l11, s11) : 6 & d10 ? $2(e12, t12, r12, n11, a10, i12, o11, l11, s11) : 64 & d10 ? c11.process(e12, t12, r12, n11, a10, i12, o11, l11, s11, K2) : 128 & d10 && c11.process(e12, t12, r12, n11, a10, i12, o11, l11, s11, K2);
      }
      null != u11 && a10 && cw(u11, e12 && e12.ref, i12, t12 || e12, !t12);
    }, w2 = (e12, t12, r12, n11) => {
      if (null == e12)
        o10(t12.el = u10(t12.children), r12, n11);
      else {
        let r13 = t12.el = e12.el;
        t12.children !== e12.children && f10(r13, t12.children);
      }
    }, _2 = (e12, t12, r12, n11) => {
      null == e12 ? o10(t12.el = d7(t12.children || ""), r12, n11) : t12.el = e12.el;
    }, x2 = (e12, t12, r12, n11) => {
      [e12.el, e12.anchor] = y2(e12.children, t12, r12, n11, e12.el, e12.anchor);
    }, k2 = (e12, t12, r12) => {
      let n11, { el: a10, anchor: i12 } = e12;
      for (; a10 && a10 !== i12; )
        n11 = m10(a10), o10(a10, t12, r12), a10 = n11;
      o10(i12, t12, r12);
    }, S2 = (e12) => {
      let t12, { el: r12, anchor: n11 } = e12;
      for (; r12 && r12 !== n11; )
        t12 = m10(r12), l10(r12), r12 = t12;
      l10(n11);
    }, O2 = (e12, t12, r12, n11, a10, i12, o11, l11, s11) => {
      "svg" === t12.type ? o11 = "svg" : "math" === t12.type && (o11 = "mathml"), null == e12 ? C2(t12, r12, n11, a10, i12, o11, l11, s11) : P2(e12, t12, a10, i12, o11, l11, s11);
    }, C2 = (e12, t12, r12, n11, a10, i12, l11, u11) => {
      let d10, f11;
      let { props: h11, shapeFlag: m11, transition: g11, dirs: y3 } = e12;
      if (d10 = e12.el = c10(e12.type, i12, h11 && h11.is, h11), 8 & m11 ? p10(d10, e12.children) : 16 & m11 && A2(e12.children, d10, null, n11, a10, cx(e12, i12), l11, u11), y3 && sw(e12, null, n11, "created"), M2(d10, e12, e12.scopeId, l11, n11), h11) {
        for (let t13 in h11)
          "value" === t13 || op(t13) || s10(d10, t13, null, h11[t13], i12, e12.children, n11, a10, q2);
        "value" in h11 && s10(d10, "value", null, h11.value, i12), (f11 = h11.onVnodeBeforeMount) && cG(f11, n11, e12);
      }
      y3 && sw(e12, null, n11, "beforeMount");
      let b3 = (!a10 || a10 && !a10.pendingBranch) && g11 && !g11.persisted;
      b3 && g11.beforeEnter(d10), o10(d10, t12, r12), ((f11 = h11 && h11.onVnodeMounted) || b3 || y3) && c_(() => {
        f11 && cG(f11, n11, e12), b3 && g11.enter(d10), y3 && sw(e12, null, n11, "mounted");
      }, a10);
    }, M2 = (e12, t12, r12, n11, a10) => {
      if (r12 && g10(e12, r12), n11)
        for (let t13 = 0; t13 < n11.length; t13++)
          g10(e12, n11[t13]);
      if (a10 && t12 === a10.subTree) {
        let t13 = a10.vnode;
        M2(e12, t13, t13.scopeId, t13.slotScopeIds, a10.parent);
      }
    }, A2 = function(e12, t12, r12, n11, a10, i12, o11, l11) {
      let s11 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
      for (let c11 = s11; c11 < e12.length; c11++)
        b2(null, e12[c11] = l11 ? cz(e12[c11]) : cU(e12[c11]), t12, r12, n11, a10, i12, o11, l11);
    }, P2 = (e12, t12, r12, n11, a10, i12, o11) => {
      let l11;
      let c11 = t12.el = e12.el, { patchFlag: u11, dynamicChildren: d10, dirs: f11 } = t12;
      u11 |= 16 & e12.patchFlag;
      let h11 = e12.props || i0, m11 = t12.props || i0;
      if (r12 && ck(r12, false), (l11 = m11.onVnodeBeforeUpdate) && cG(l11, r12, t12, e12), f11 && sw(t12, e12, r12, "beforeUpdate"), r12 && ck(r12, true), d10 ? E2(e12.dynamicChildren, d10, c11, r12, n11, cx(t12, a10), i12) : o11 || F2(e12, t12, c11, null, r12, n11, cx(t12, a10), i12, false), u11 > 0) {
        if (16 & u11)
          T2(c11, t12, h11, m11, r12, n11, a10);
        else if (2 & u11 && h11.class !== m11.class && s10(c11, "class", null, m11.class, a10), 4 & u11 && s10(c11, "style", h11.style, m11.style, a10), 8 & u11) {
          let i13 = t12.dynamicProps;
          for (let t13 = 0; t13 < i13.length; t13++) {
            let o12 = i13[t13], l12 = h11[o12], u12 = m11[o12];
            (u12 !== l12 || "value" === o12) && s10(c11, o12, l12, u12, a10, e12.children, r12, n11, q2);
          }
        }
        1 & u11 && e12.children !== t12.children && p10(c11, t12.children);
      } else
        o11 || null != d10 || T2(c11, t12, h11, m11, r12, n11, a10);
      ((l11 = m11.onVnodeUpdated) || f11) && c_(() => {
        l11 && cG(l11, r12, t12, e12), f11 && sw(t12, e12, r12, "updated");
      }, n11);
    }, E2 = (e12, t12, r12, n11, a10, i12, o11) => {
      for (let l11 = 0; l11 < t12.length; l11++) {
        let s11 = e12[l11], c11 = t12[l11], u11 = s11.el && (s11.type === c$ || !cB(s11, c11) || 70 & s11.shapeFlag) ? h10(s11.el) : r12;
        b2(s11, c11, u11, null, n11, a10, i12, o11, true);
      }
    }, T2 = (e12, t12, r12, n11, a10, i12, o11) => {
      if (r12 !== n11) {
        if (r12 !== i0)
          for (let l11 in r12)
            op(l11) || l11 in n11 || s10(e12, l11, r12[l11], null, o11, t12.children, a10, i12, q2);
        for (let l11 in n11) {
          if (op(l11))
            continue;
          let c11 = n11[l11], u11 = r12[l11];
          c11 !== u11 && "value" !== l11 && s10(e12, l11, u11, c11, o11, t12.children, a10, i12, q2);
        }
        "value" in n11 && s10(e12, "value", r12.value, n11.value, o11);
      }
    }, R2 = (e12, t12, r12, n11, a10, i12, l11, s11, c11) => {
      let d10 = t12.el = e12 ? e12.el : u10(""), f11 = t12.anchor = e12 ? e12.anchor : u10(""), { patchFlag: p11, dynamicChildren: h11, slotScopeIds: m11 } = t12;
      m11 && (s11 = s11 ? s11.concat(m11) : m11), null == e12 ? (o10(d10, r12, n11), o10(f11, r12, n11), A2(t12.children || [], r12, f11, a10, i12, l11, s11, c11)) : p11 > 0 && 64 & p11 && h11 && e12.dynamicChildren ? (E2(e12.dynamicChildren, h11, r12, a10, i12, l11, s11), (null != t12.key || a10 && t12 === a10.subTree) && cS(e12, t12, true)) : F2(e12, t12, r12, f11, a10, i12, l11, s11, c11);
    }, $2 = (e12, t12, r12, n11, a10, i12, o11, l11, s11) => {
      t12.slotScopeIds = l11, null == e12 ? 512 & t12.shapeFlag ? a10.ctx.activate(t12, r12, n11, o11, s11) : I2(t12, r12, n11, a10, i12, o11, s11) : D2(e12, t12, s11);
    }, I2 = (e12, t12, r12, n11, i12, o11, l11) => {
      let s11 = e12.component = function(e13, t13, r13) {
        let n12 = e13.type, a10 = (t13 ? t13.appContext : e13.appContext) || cY, i13 = { uid: cJ++, vnode: e13, type: n12, parent: t13, appContext: a10, root: null, next: null, subTree: null, effect: null, update: null, scope: new o$(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t13 ? t13.provides : Object.create(a10.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: function e14(t14, r14) {
          let n13 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a11 = r14.propsCache, i14 = a11.get(t14);
          if (i14)
            return i14;
          let o12 = t14.props, l12 = {}, s12 = [], c11 = false;
          if (!on(t14)) {
            let a12 = (t15) => {
              c11 = true;
              let [n14, a13] = e14(t15, r14, true);
              i8(l12, n14), a13 && s12.push(...a13);
            };
            !n13 && r14.mixins.length && r14.mixins.forEach(a12), t14.extends && a12(t14.extends), t14.mixins && t14.mixins.forEach(a12);
          }
          if (!o12 && !c11)
            return oo(t14) && a11.set(t14, i1), i1;
          if (oe(o12))
            for (let e15 = 0; e15 < o12.length; e15++) {
              let t15 = og(o12[e15]);
              cu(t15) && (l12[t15] = i0);
            }
          else if (o12)
            for (let e15 in o12) {
              let t15 = og(e15);
              if (cu(t15)) {
                let r15 = o12[e15], n14 = l12[t15] = oe(r15) || on(r15) ? { type: r15 } : i8({}, r15);
                if (n14) {
                  let e16 = cf(Boolean, n14.type), r16 = cf(String, n14.type);
                  n14[0] = e16 > -1, n14[1] = r16 < 0 || e16 < r16, (e16 > -1 || i7(n14, "default")) && s12.push(t15);
                }
              }
            }
          let u11 = [l12, s12];
          return oo(t14) && a11.set(t14, u11), u11;
        }(n12, a10), emitsOptions: function e14(t14, r14) {
          let n13 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a11 = r14.emitsCache, i14 = a11.get(t14);
          if (void 0 !== i14)
            return i14;
          let o12 = t14.emits, l12 = {}, s12 = false;
          if (!on(t14)) {
            let a12 = (t15) => {
              let n14 = e14(t15, r14, true);
              n14 && (s12 = true, i8(l12, n14));
            };
            !n13 && r14.mixins.length && r14.mixins.forEach(a12), t14.extends && a12(t14.extends), t14.mixins && t14.mixins.forEach(a12);
          }
          return o12 || s12 ? (oe(o12) ? o12.forEach((e15) => l12[e15] = null) : i8(l12, o12), oo(t14) && a11.set(t14, l12), l12) : (oo(t14) && a11.set(t14, null), null);
        }(n12, a10), emit: null, emitted: null, propsDefaults: i0, inheritAttrs: n12.inheritAttrs, ctx: i0, data: i0, props: i0, attrs: i0, slots: i0, refs: i0, setupState: i0, setupContext: null, attrsProxy: null, slotsProxy: null, suspense: r13, suspenseId: r13 ? r13.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
        return i13.ctx = { _: i13 }, i13.root = t13 ? t13.root : i13, i13.emit = st.bind(null, i13), e13.ce && e13.ce(i13), i13;
      }(e12, n11, i12);
      s$(e12) && (s11.ctx.renderer = K2), function(e13) {
        let t13 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t13 && a(t13);
        let { props: r13, children: n12 } = e13.vnode, i13 = c0(e13);
        (function(e14, t14, r14) {
          let n13 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a10 = {}, i14 = co();
          for (let r15 in e14.propsDefaults = /* @__PURE__ */ Object.create(null), cs(e14, t14, a10, i14), e14.propsOptions[0])
            r15 in a10 || (a10[r15] = void 0);
          r14 ? e14.props = n13 ? a10 : lk(a10) : e14.type.props ? e14.props = a10 : e14.props = i14, e14.attrs = i14;
        })(e13, r13, i13, t13), cy(e13, n12), i13 && function(e14, t14) {
          let r14 = e14.type;
          e14.accessCache = /* @__PURE__ */ Object.create(null), e14.proxy = new Proxy(e14.ctx, sQ);
          let { setup: n13 } = r14;
          if (n13) {
            let r15 = e14.setupContext = n13.length > 1 ? { attrs: new Proxy(e14.attrs, c3), slots: e14.slots, emit: e14.emit, expose: (t15) => {
              e14.exposed = t15 || {};
            } } : null, a10 = cQ(e14);
            oV();
            let i14 = lq(n13, e14, 0, [e14.props, r15]);
            if (oW(), a10(), ol(i14)) {
              if (i14.then(cZ, cZ), t14)
                return i14.then((r16) => {
                  c2(e14, r16, t14);
                }).catch((t15) => {
                  lY(t15, e14, 0);
                });
              e14.asyncDep = i14;
            } else
              c2(e14, i14, t14);
          } else
            c4(e14, t14);
        }(e13, t13), t13 && a(false);
      }(s11), s11.asyncDep ? (i12 && i12.registerDep(s11, j2), e12.el || _2(null, s11.subTree = cW(cD), t12, r12)) : j2(s11, e12, t12, r12, i12, o11, l11);
    }, D2 = (e12, t12, r12) => {
      let n11 = t12.component = e12.component;
      if (function(e13, t13, r13) {
        let { props: n12, children: a10, component: i12 } = e13, { props: o11, children: l11, patchFlag: s11 } = t13, c11 = i12.emitsOptions;
        if (t13.dirs || t13.transition)
          return true;
        if (!r13 || !(s11 >= 0))
          return (!!a10 || !!l11) && (!l11 || !l11.$stable) || n12 !== o11 && (n12 ? !o11 || sc(n12, o11, c11) : !!o11);
        if (1024 & s11)
          return true;
        if (16 & s11)
          return n12 ? sc(n12, o11, c11) : !!o11;
        if (8 & s11) {
          let e14 = t13.dynamicProps;
          for (let t14 = 0; t14 < e14.length; t14++) {
            let r14 = e14[t14];
            if (o11[r14] !== n12[r14] && !sr(c11, r14))
              return true;
          }
        }
        return false;
      }(e12, t12, r12)) {
        if (n11.asyncDep && !n11.asyncResolved) {
          L2(n11, t12, r12);
          return;
        }
        n11.next = t12, function(e13) {
          let t13 = lX.indexOf(e13);
          t13 > lQ && lX.splice(t13, 1);
        }(n11.update), n11.effect.dirty = true, n11.update();
      } else
        t12.el = e12.el, n11.vnode = t12;
    }, j2 = (e12, t12, r12, n11, a10, o11, l11) => {
      let s11 = () => {
        if (e12.isMounted) {
          let t13, { next: r13, bu: n12, u: i12, parent: c12, vnode: u12 } = e12;
          {
            let t14 = function e13(t15) {
              let r14 = t15.subTree.component;
              if (r14)
                return r14.asyncDep && !r14.asyncResolved ? r14 : e13(r14);
            }(e12);
            if (t14) {
              r13 && (r13.el = u12.el, L2(e12, r13, l11)), t14.asyncDep.then(() => {
                e12.isUnmounted || s11();
              });
              return;
            }
          }
          let d10 = r13;
          ck(e12, false), r13 ? (r13.el = u12.el, L2(e12, r13, l11)) : r13 = u12, n12 && ox(n12), (t13 = r13.props && r13.props.onVnodeBeforeUpdate) && cG(t13, c12, r13, u12), ck(e12, true);
          let f11 = so(e12), p11 = e12.subTree;
          e12.subTree = f11, b2(p11, f11, h10(p11.el), G2(p11), e12, a10, o11), r13.el = f11.el, null === d10 && function(e13, t14) {
            let { vnode: r14, parent: n13 } = e13;
            for (; n13; ) {
              let e14 = n13.subTree;
              if (e14.suspense && e14.suspense.activeBranch === r14 && (e14.el = r14.el), e14 === r14)
                (r14 = n13.vnode).el = t14, n13 = n13.parent;
              else
                break;
            }
          }(e12, f11.el), i12 && c_(i12, a10), (t13 = r13.props && r13.props.onVnodeUpdated) && c_(() => cG(t13, c12, r13, u12), a10);
        } else {
          let l12;
          let { el: s12, props: c12 } = t12, { bm: u12, m: d10, parent: f11 } = e12, p11 = sR(t12);
          if (ck(e12, false), u12 && ox(u12), !p11 && (l12 = c12 && c12.onVnodeBeforeMount) && cG(l12, f11, t12), ck(e12, true), s12 && i11) {
            let r13 = () => {
              e12.subTree = so(e12), i11(s12, e12.subTree, e12, a10, null);
            };
            p11 ? t12.type.__asyncLoader().then(() => !e12.isUnmounted && r13()) : r13();
          } else {
            let i12 = e12.subTree = so(e12);
            b2(null, i12, r12, n11, e12, a10, o11), t12.el = i12.el;
          }
          if (d10 && c_(d10, a10), !p11 && (l12 = c12 && c12.onVnodeMounted)) {
            let e13 = t12;
            c_(() => cG(l12, f11, e13), a10);
          }
          (256 & t12.shapeFlag || f11 && sR(f11.vnode) && 256 & f11.vnode.shapeFlag) && e12.a && c_(e12.a, a10), e12.isMounted = true, t12 = r12 = n11 = null;
        }
      }, c11 = e12.effect = new oI(s11, i2, () => l5(u11), e12.scope), u11 = e12.update = () => {
        c11.dirty && c11.run();
      };
      u11.id = e12.uid, ck(e12, true), u11();
    }, L2 = (e12, t12, r12) => {
      t12.component = e12;
      let n11 = e12.vnode.props;
      e12.vnode = t12, e12.next = null, function(e13, t13, r13, n12) {
        let { props: a10, attrs: i12, vnode: { patchFlag: o11 } } = e13, l11 = lE(a10), [s11] = e13.propsOptions, c11 = false;
        if ((n12 || o11 > 0) && !(16 & o11)) {
          if (8 & o11) {
            let r14 = e13.vnode.dynamicProps;
            for (let n13 = 0; n13 < r14.length; n13++) {
              let o12 = r14[n13];
              if (sr(e13.emitsOptions, o12))
                continue;
              let u11 = t13[o12];
              if (s11) {
                if (i7(i12, o12))
                  u11 !== i12[o12] && (i12[o12] = u11, c11 = true);
                else {
                  let t14 = og(o12);
                  a10[t14] = cc(s11, l11, t14, u11, e13, false);
                }
              } else
                u11 !== i12[o12] && (i12[o12] = u11, c11 = true);
            }
          }
        } else {
          let n13;
          for (let o12 in cs(e13, t13, a10, i12) && (c11 = true), l11)
            t13 && (i7(t13, o12) || (n13 = oy(o12)) !== o12 && i7(t13, n13)) || (s11 ? r13 && (void 0 !== r13[o12] || void 0 !== r13[n13]) && (a10[o12] = cc(s11, l11, o12, void 0, e13, true)) : delete a10[o12]);
          if (i12 !== l11)
            for (let e14 in i12)
              t13 && i7(t13, e14) || (delete i12[e14], c11 = true);
        }
        c11 && oQ(e13.attrs, "set", "");
      }(e12, t12.props, n11, r12), cb(e12, t12.children, r12), oV(), l6(e12), oW();
    }, F2 = function(e12, t12, r12, n11, a10, i12, o11, l11) {
      let s11 = arguments.length > 8 && void 0 !== arguments[8] && arguments[8], c11 = e12 && e12.children, u11 = e12 ? e12.shapeFlag : 0, d10 = t12.children, { patchFlag: f11, shapeFlag: h11 } = t12;
      if (f11 > 0) {
        if (128 & f11) {
          N2(c11, d10, r12, n11, a10, i12, o11, l11, s11);
          return;
        }
        if (256 & f11) {
          B2(c11, d10, r12, n11, a10, i12, o11, l11, s11);
          return;
        }
      }
      8 & h11 ? (16 & u11 && q2(c11, a10, i12), d10 !== c11 && p10(r12, d10)) : 16 & u11 ? 16 & h11 ? N2(c11, d10, r12, n11, a10, i12, o11, l11, s11) : q2(c11, a10, i12, true) : (8 & u11 && p10(r12, ""), 16 & h11 && A2(d10, r12, n11, a10, i12, o11, l11, s11));
    }, B2 = (e12, t12, r12, n11, a10, i12, o11, l11, s11) => {
      let c11;
      e12 = e12 || i1, t12 = t12 || i1;
      let u11 = e12.length, d10 = t12.length, f11 = Math.min(u11, d10);
      for (c11 = 0; c11 < f11; c11++) {
        let n12 = t12[c11] = s11 ? cz(t12[c11]) : cU(t12[c11]);
        b2(e12[c11], n12, r12, null, a10, i12, o11, l11, s11);
      }
      u11 > d10 ? q2(e12, a10, i12, true, false, f11) : A2(t12, r12, n11, a10, i12, o11, l11, s11, f11);
    }, N2 = (e12, t12, r12, n11, a10, i12, o11, l11, s11) => {
      let c11 = 0, u11 = t12.length, d10 = e12.length - 1, f11 = u11 - 1;
      for (; c11 <= d10 && c11 <= f11; ) {
        let n12 = e12[c11], u12 = t12[c11] = s11 ? cz(t12[c11]) : cU(t12[c11]);
        if (cB(n12, u12))
          b2(n12, u12, r12, null, a10, i12, o11, l11, s11);
        else
          break;
        c11++;
      }
      for (; c11 <= d10 && c11 <= f11; ) {
        let n12 = e12[d10], c12 = t12[f11] = s11 ? cz(t12[f11]) : cU(t12[f11]);
        if (cB(n12, c12))
          b2(n12, c12, r12, null, a10, i12, o11, l11, s11);
        else
          break;
        d10--, f11--;
      }
      if (c11 > d10) {
        if (c11 <= f11) {
          let e13 = f11 + 1, d11 = e13 < u11 ? t12[e13].el : n11;
          for (; c11 <= f11; )
            b2(null, t12[c11] = s11 ? cz(t12[c11]) : cU(t12[c11]), r12, d11, a10, i12, o11, l11, s11), c11++;
        }
      } else if (c11 > f11)
        for (; c11 <= d10; )
          W2(e12[c11], a10, i12, true), c11++;
      else {
        let p11;
        let h11 = c11, m11 = c11, g11 = /* @__PURE__ */ new Map();
        for (c11 = m11; c11 <= f11; c11++) {
          let e13 = t12[c11] = s11 ? cz(t12[c11]) : cU(t12[c11]);
          null != e13.key && g11.set(e13.key, c11);
        }
        let y3 = 0, w3 = f11 - m11 + 1, _3 = false, x3 = 0, k3 = Array(w3);
        for (c11 = 0; c11 < w3; c11++)
          k3[c11] = 0;
        for (c11 = h11; c11 <= d10; c11++) {
          let n12;
          let u12 = e12[c11];
          if (y3 >= w3) {
            W2(u12, a10, i12, true);
            continue;
          }
          if (null != u12.key)
            n12 = g11.get(u12.key);
          else
            for (p11 = m11; p11 <= f11; p11++)
              if (0 === k3[p11 - m11] && cB(u12, t12[p11])) {
                n12 = p11;
                break;
              }
          void 0 === n12 ? W2(u12, a10, i12, true) : (k3[n12 - m11] = c11 + 1, n12 >= x3 ? x3 = n12 : _3 = true, b2(u12, t12[n12], r12, null, a10, i12, o11, l11, s11), y3++);
        }
        let S3 = _3 ? function(e13) {
          let t13, r13, n12, a11, i13;
          let o12 = e13.slice(), l12 = [0], s12 = e13.length;
          for (t13 = 0; t13 < s12; t13++) {
            let s13 = e13[t13];
            if (0 !== s13) {
              if (e13[r13 = l12[l12.length - 1]] < s13) {
                o12[t13] = r13, l12.push(t13);
                continue;
              }
              for (n12 = 0, a11 = l12.length - 1; n12 < a11; )
                e13[l12[i13 = n12 + a11 >> 1]] < s13 ? n12 = i13 + 1 : a11 = i13;
              s13 < e13[l12[n12]] && (n12 > 0 && (o12[t13] = l12[n12 - 1]), l12[n12] = t13);
            }
          }
          for (n12 = l12.length, a11 = l12[n12 - 1]; n12-- > 0; )
            l12[n12] = a11, a11 = o12[a11];
          return l12;
        }(k3) : i1;
        for (p11 = S3.length - 1, c11 = w3 - 1; c11 >= 0; c11--) {
          let e13 = m11 + c11, d11 = t12[e13], f12 = e13 + 1 < u11 ? t12[e13 + 1].el : n11;
          0 === k3[c11] ? b2(null, d11, r12, f12, a10, i12, o11, l11, s11) : _3 && (p11 < 0 || c11 !== S3[p11] ? V2(d11, r12, f12, 2) : p11--);
        }
      }
    }, V2 = function(e12, t12, r12, n11) {
      let a10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, { el: i12, type: l11, transition: s11, children: c11, shapeFlag: u11 } = e12;
      if (6 & u11) {
        V2(e12.component.subTree, t12, r12, n11);
        return;
      }
      if (128 & u11) {
        e12.suspense.move(t12, r12, n11);
        return;
      }
      if (64 & u11) {
        l11.move(e12, t12, r12, K2);
        return;
      }
      if (l11 === c$) {
        o10(i12, t12, r12);
        for (let e13 = 0; e13 < c11.length; e13++)
          V2(c11[e13], t12, r12, n11);
        o10(e12.anchor, t12, r12);
        return;
      }
      if (l11 === cj) {
        k2(e12, t12, r12);
        return;
      }
      if (2 !== n11 && 1 & u11 && s11) {
        if (0 === n11)
          s11.beforeEnter(i12), o10(i12, t12, r12), c_(() => s11.enter(i12), a10);
        else {
          let { leave: e13, delayLeave: n12, afterLeave: a11 } = s11, l12 = () => o10(i12, t12, r12), c12 = () => {
            e13(i12, () => {
              l12(), a11 && a11();
            });
          };
          n12 ? n12(i12, l12, c12) : c12();
        }
      } else
        o10(i12, t12, r12);
    }, W2 = function(e12, t12, r12) {
      let n11, a10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i12 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], { type: o11, props: l11, ref: s11, children: c11, dynamicChildren: u11, shapeFlag: d10, patchFlag: f11, dirs: p11 } = e12;
      if (null != s11 && cw(s11, null, r12, e12, true), 256 & d10) {
        t12.ctx.deactivate(e12);
        return;
      }
      let h11 = 1 & d10 && p11, m11 = !sR(e12);
      if (m11 && (n11 = l11 && l11.onVnodeBeforeUnmount) && cG(n11, t12, e12), 6 & d10)
        z2(e12.component, r12, a10);
      else {
        if (128 & d10) {
          e12.suspense.unmount(r12, a10);
          return;
        }
        h11 && sw(e12, null, t12, "beforeUnmount"), 64 & d10 ? e12.type.remove(e12, t12, r12, i12, K2, a10) : u11 && (o11 !== c$ || f11 > 0 && 64 & f11) ? q2(u11, t12, r12, false, true) : (o11 === c$ && 384 & f11 || !i12 && 16 & d10) && q2(c11, t12, r12), a10 && H2(e12);
      }
      (m11 && (n11 = l11 && l11.onVnodeUnmounted) || h11) && c_(() => {
        n11 && cG(n11, t12, e12), h11 && sw(e12, null, t12, "unmounted");
      }, r12);
    }, H2 = (e12) => {
      let { type: t12, el: r12, anchor: n11, transition: a10 } = e12;
      if (t12 === c$) {
        U2(r12, n11);
        return;
      }
      if (t12 === cj) {
        S2(e12);
        return;
      }
      let i12 = () => {
        l10(r12), a10 && !a10.persisted && a10.afterLeave && a10.afterLeave();
      };
      if (1 & e12.shapeFlag && a10 && !a10.persisted) {
        let { leave: t13, delayLeave: n12 } = a10, o11 = () => t13(r12, i12);
        n12 ? n12(e12.el, i12, o11) : o11();
      } else
        i12();
    }, U2 = (e12, t12) => {
      let r12;
      for (; e12 !== t12; )
        r12 = m10(e12), l10(e12), e12 = r12;
      l10(t12);
    }, z2 = (e12, t12, r12) => {
      let { bum: n11, scope: a10, update: i12, subTree: o11, um: l11 } = e12;
      n11 && ox(n11), a10.stop(), i12 && (i12.active = false, W2(o11, e12, t12, r12)), l11 && c_(l11, t12), c_(() => {
        e12.isUnmounted = true;
      }, t12), t12 && t12.pendingBranch && !t12.isUnmounted && e12.asyncDep && !e12.asyncResolved && e12.suspenseId === t12.pendingId && (t12.deps--, 0 === t12.deps && t12.resolve());
    }, q2 = function(e12, t12, r12) {
      let n11 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], i12 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      for (let o11 = i12; o11 < e12.length; o11++)
        W2(e12[o11], t12, r12, n11, a10);
    }, G2 = (e12) => 6 & e12.shapeFlag ? G2(e12.component.subTree) : 128 & e12.shapeFlag ? e12.suspense.next() : m10(e12.anchor || e12.el), Y2 = false, J2 = (e12, t12, r12) => {
      null == e12 ? t12._vnode && W2(t12._vnode, null, null, true) : b2(t12._vnode || null, e12, t12, null, null, null, r12), Y2 || (Y2 = true, l6(), l9(), Y2 = false), t12._vnode = e12;
    }, K2 = { p: b2, um: W2, m: V2, r: H2, mt: I2, mc: A2, pc: F2, pbc: E2, n: G2, o: e11 };
    return t11 && ([n10, i11] = t11(K2)), { render: J2, hydrate: n10, createApp: (r11 = n10, function(e12) {
      let t12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      on(e12) || (e12 = i8({}, e12)), null == t12 || oo(t12) || (t12 = null);
      let n11 = ce(), a10 = /* @__PURE__ */ new WeakSet(), i12 = false, o11 = n11.app = { _uid: ct++, _component: e12, _props: t12, _container: null, _context: n11, _instance: null, version: "3.4.23", get config() {
        return n11.config;
      }, set config(v) {
      }, use(e13) {
        for (var t13 = arguments.length, r12 = Array(t13 > 1 ? t13 - 1 : 0), n12 = 1; n12 < t13; n12++)
          r12[n12 - 1] = arguments[n12];
        return a10.has(e13) || (e13 && on(e13.install) ? (a10.add(e13), e13.install(o11, ...r12)) : on(e13) && (a10.add(e13), e13(o11, ...r12))), o11;
      }, mixin: (e13) => (n11.mixins.includes(e13) || n11.mixins.push(e13), o11), component: (e13, t13) => t13 ? (n11.components[e13] = t13, o11) : n11.components[e13], directive: (e13, t13) => t13 ? (n11.directives[e13] = t13, o11) : n11.directives[e13], mount(a11, l11, s11) {
        if (!i12) {
          let c11 = cW(e12, t12);
          return c11.appContext = n11, true === s11 ? s11 = "svg" : false === s11 && (s11 = void 0), l11 && r11 ? r11(c11, a11) : J2(c11, a11, s11), i12 = true, o11._container = a11, a11.__vue_app__ = o11, c5(c11.component) || c11.component.proxy;
        }
      }, unmount() {
        i12 && (J2(null, o11._container), delete o11._container.__vue_app__);
      }, provide: (e13, t13) => (n11.provides[e13] = t13, o11), runWithContext(e13) {
        let t13 = cr;
        cr = o11;
        try {
          return e13();
        } finally {
          cr = t13;
        }
      } };
      return o11;
    }) };
  }(uE))).createApp(...t10), { mount: i10 } = n9;
  return n9.mount = (e11) => {
    let t11 = oa(e11) ? document.querySelector(e11) : e11;
    if (!t11)
      return;
    let r11 = n9._component;
    on(r11) || r11.render || r11.template || (r11.template = t11.innerHTML), t11.innerHTML = "";
    let a10 = i10(t11, false, t11 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && t11 instanceof MathMLElement ? "mathml" : void 0);
    return t11 instanceof Element && (t11.removeAttribute("v-cloak"), t11.setAttribute("data-v-app", "")), a10;
  }, n9;
};
var uR = function() {
}, u$ = tC("Reflect", "construct"), uI = /^\s*(?:class|function)\b/, uD = tE(uI.exec), uj = !uI.test(uR), uL = function(e10) {
  if (!ts(e10))
    return false;
  try {
    return u$(uR, [], e10), true;
  } catch (e11) {
    return false;
  }
}, uF = function(e10) {
  if (!ts(e10))
    return false;
  switch (r3(e10)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return uj || !!uD(uI, rk(e10));
  } catch (e11) {
    return true;
  }
};
uF.sham = true;
var uB = !u$ || tu(function() {
  var e10;
  return uL(uL.call) || !uL(Object) || !uL(function() {
    e10 = true;
  }) || e10;
}) ? uF : uL, uN = {}, uV = ro("iterator"), uW = Array.prototype, uH = ro("iterator"), uU = function(e10) {
  if (!tG(e10))
    return tY(e10, uH) || tY(e10, "@@iterator") || uN[r3(e10)];
}, uz = TypeError, uq = function(e10, t10) {
  var r10 = arguments.length < 2 ? uU(e10) : t10;
  if (tq(r10))
    return tx(tO(r10, e10));
  throw new uz(tU(e10) + " is not iterable");
}, uG = function(e10, t10, r10) {
  var n9, a10;
  tx(e10);
  try {
    if (!(n9 = tY(e10, "return"))) {
      if ("throw" === t10)
        throw r10;
      return r10;
    }
    n9 = tO(n9, e10);
  } catch (e11) {
    a10 = true, n9 = e11;
  }
  if ("throw" === t10)
    throw r10;
  if (a10)
    throw n9;
  return tx(n9), r10;
}, uY = TypeError, uJ = function(e10, t10) {
  this.stopped = e10, this.result = t10;
}, uK = uJ.prototype, uX = function() {
  var e10 = tx(this), t10 = "";
  return e10.hasIndices && (t10 += "d"), e10.global && (t10 += "g"), e10.ignoreCase && (t10 += "i"), e10.multiline && (t10 += "m"), e10.dotAll && (t10 += "s"), e10.unicode && (t10 += "u"), e10.unicodeSets && (t10 += "v"), e10.sticky && (t10 += "y"), t10;
}, uQ = RegExp.prototype, uZ = function(e10) {
  var t10 = e10.flags;
  return !(void 0 === t10 && !("flags" in uQ) && !t9(e10, "flags") && tT(uQ, e10)) ? t10 : tO(uX, e10);
}, u0 = Map.prototype, u1 = { Map, set: tE(u0.set), get: tE(u0.get), has: tE(u0.has), remove: tE(u0.delete), proto: u0 }, u2 = Set.prototype, u4 = { Set, add: tE(u2.add), has: tE(u2.has), remove: tE(u2.delete), proto: u2 }, u3 = u4.Set, u5 = u4.proto, u8 = tE(u5.forEach), u6 = (tE(u5.keys)(new u3()).next, "object" == typeof Deno && Deno && "object" == typeof Deno.version), u9 = !u6 && !n4 && "object" == typeof window && "object" == typeof document, u7 = tp.structuredClone, de = !!u7 && !tu(function() {
  if (u6 && tL > 92 || n4 && tL > 94 || u9 && tL > 97)
    return false;
  var e10 = new ArrayBuffer(8), t10 = u7(e10, { transfer: [e10] });
  return 0 !== e10.byteLength || 8 !== t10.byteLength;
}), dt = tp.structuredClone, dr = tp.ArrayBuffer, dn = tp.MessageChannel, da = false;
if (de)
  da = function(e10) {
    dt(e10, { transfer: [e10] });
  };
else if (dr)
  try {
    !dn && (te = function(e10) {
      try {
        if (n4)
          return Function('return require("' + e10 + '")')();
      } catch (e11) {
      }
    }("worker_threads")) && (dn = te.MessageChannel), dn && (tt = new dn(), tr = new dr(2), tn = function(e10) {
      tt.port1.postMessage(null, [e10]);
    }, 2 === tr.byteLength && (tn(tr), 0 === tr.byteLength && (da = tn)));
  } catch (e10) {
  }
var di = da, dl = function(e10, t10, r10) {
  var n9, a10, i10, o10, l10, s10, c10, u10 = r10 && r10.that, d7 = !!(r10 && r10.AS_ENTRIES), f10 = !!(r10 && r10.IS_RECORD), p10 = !!(r10 && r10.IS_ITERATOR), h10 = !!(r10 && r10.INTERRUPTED), m10 = a6(t10, u10), g10 = function(e11) {
    return n9 && uG(n9, "normal", e11), new uJ(true, e11);
  }, y2 = function(e11) {
    return d7 ? (tx(e11), h10 ? m10(e11[0], e11[1], g10) : m10(e11[0], e11[1])) : h10 ? m10(e11, g10) : m10(e11);
  };
  if (f10)
    n9 = e10.iterator;
  else if (p10)
    n9 = e10;
  else {
    if (!(a10 = uU(e10)))
      throw new uY(tU(e10) + " is not iterable");
    if (void 0 !== a10 && (uN.Array === a10 || uW[uV] === a10)) {
      for (i10 = 0, o10 = n$(e10); o10 > i10; i10++)
        if ((l10 = y2(e10[i10])) && tT(uK, l10))
          return l10;
      return new uJ(false);
    }
    n9 = uq(e10, a10);
  }
  for (s10 = f10 ? e10.next : n9.next; !(c10 = tO(s10, n9)).done; ) {
    try {
      l10 = y2(c10.value);
    } catch (e11) {
      uG(n9, "throw", e11);
    }
    if ("object" == typeof l10 && l10 && tT(uK, l10))
      return l10;
  }
  return new uJ(false);
}, ds = function(e10, t10, r10) {
  td ? tc.f(e10, t10, rC(0, r10)) : e10[t10] = r10;
}, dc = tp.Object, du = tp.Array, dd = tp.Date, df = tp.Error, dp = tp.TypeError, dh = tp.PerformanceMark, dm = tC("DOMException"), dg = u1.Map, dv = u1.has, dy = u1.get, db = u1.set, dw = u4.Set, d_ = u4.add, dx = u4.has, dk = tC("Object", "keys"), dS = tE([].push), dO = tE(true.valueOf), dC = tE(1 .valueOf), dM = tE("".valueOf), dA = tE(dd.prototype.getTime), dP = rr("structuredClone"), dE = "DataCloneError", dT = "Transferring", dR = function(e10) {
  return !tu(function() {
    var t10 = new tp.Set([7]), r10 = e10(t10), n9 = e10(dc(7));
    return r10 === t10 || !r10.has(7) || !th(n9) || 7 != +n9;
  }) && e10;
}, d$ = function(e10, t10) {
  return !tu(function() {
    var r10 = new t10(), n9 = e10({ a: r10, b: r10 });
    return !(n9 && n9.a === n9.b && n9.a instanceof t10 && n9.a.stack === r10.stack);
  });
}, dI = tp.structuredClone, dD = !d$(dI, df) || !d$(dI, dm) || !!tu(function() {
  var e10 = dI(new tp.AggregateError([1], dP, { cause: 3 }));
  return "AggregateError" !== e10.name || 1 !== e10.errors[0] || e10.message !== dP || 3 !== e10.cause;
}), dj = !dI && dR(function(e10) {
  return new dh(dP, { detail: e10 }).detail;
}), dL = dR(dI) || dj, dF = function(e10) {
  throw new dm("Uncloneable type: " + e10, dE);
}, dB = function(e10, t10) {
  throw new dm((t10 || "Cloning") + " of " + e10 + " cannot be properly polyfilled in this engine", dE);
}, dN = function(e10, t10) {
  return dL || dB(t10), dL(e10);
}, dV = function() {
  var e10;
  try {
    e10 = new tp.DataTransfer();
  } catch (t10) {
    try {
      e10 = new tp.ClipboardEvent("").clipboardData;
    } catch (e11) {
    }
  }
  return e10 && e10.items && e10.files ? e10 : null;
}, dW = function(e10, t10, r10) {
  if (dv(t10, e10))
    return dy(t10, e10);
  if ("SharedArrayBuffer" === (r10 || r3(e10)))
    n9 = dL ? dL(e10) : e10;
  else {
    var n9, a10, i10, o10, l10, s10, c10 = tp.DataView;
    c10 || ts(e10.slice) || dB("ArrayBuffer");
    try {
      if (ts(e10.slice) && !e10.resizable)
        n9 = e10.slice(0);
      else
        for (s10 = 0, a10 = e10.byteLength, i10 = ("maxByteLength" in e10) ? { maxByteLength: e10.maxByteLength } : void 0, n9 = new ArrayBuffer(a10, i10), o10 = new c10(e10), l10 = new c10(n9); s10 < a10; s10++)
          l10.setUint8(s10, o10.getUint8(s10));
    } catch (e11) {
      throw new dm("ArrayBuffer is detached", dE);
    }
  }
  return db(t10, e10, n9), n9;
}, dH = function(e10, t10, r10, n9, a10) {
  var i10 = tp[t10];
  return th(i10) || dB(t10), new i10(dW(e10.buffer, a10), r10, n9);
}, dU = function(e10, t10) {
  if (tW(e10) && dF("Symbol"), !th(e10))
    return e10;
  if (t10) {
    if (dv(t10, e10))
      return dy(t10, e10);
  } else
    t10 = new dg();
  var r10, n9, a10, i10, o10, l10, s10, c10, u10 = r3(e10);
  switch (u10) {
    case "Array":
      a10 = du(n$(e10));
      break;
    case "Object":
      a10 = {};
      break;
    case "Map":
      a10 = new dg();
      break;
    case "Set":
      a10 = new dw();
      break;
    case "RegExp":
      a10 = new RegExp(e10.source, uZ(e10));
      break;
    case "Error":
      switch (n9 = e10.name) {
        case "AggregateError":
          a10 = new (tC(n9))([]);
          break;
        case "EvalError":
        case "RangeError":
        case "ReferenceError":
        case "SuppressedError":
        case "SyntaxError":
        case "TypeError":
        case "URIError":
          a10 = new (tC(n9))();
          break;
        case "CompileError":
        case "LinkError":
        case "RuntimeError":
          a10 = new (tC("WebAssembly", n9))();
          break;
        default:
          a10 = new df();
      }
      break;
    case "DOMException":
      a10 = new dm(e10.message, e10.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      a10 = dW(e10, t10, u10);
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
      l10 = "DataView" === u10 ? e10.byteLength : e10.length, a10 = dH(e10, u10, e10.byteOffset, l10, t10);
      break;
    case "DOMQuad":
      try {
        a10 = new DOMQuad(dU(e10.p1, t10), dU(e10.p2, t10), dU(e10.p3, t10), dU(e10.p4, t10));
      } catch (t11) {
        a10 = dN(e10, u10);
      }
      break;
    case "File":
      if (dL)
        try {
          a10 = dL(e10), r3(a10) !== u10 && (a10 = void 0);
        } catch (e11) {
        }
      if (!a10)
        try {
          a10 = new File([e10], e10.name, e10);
        } catch (e11) {
        }
      a10 || dB(u10);
      break;
    case "FileList":
      if (i10 = dV()) {
        for (o10 = 0, l10 = n$(e10); o10 < l10; o10++)
          i10.items.add(dU(e10[o10], t10));
        a10 = i10.files;
      } else
        a10 = dN(e10, u10);
      break;
    case "ImageData":
      try {
        a10 = new ImageData(dU(e10.data, t10), e10.width, e10.height, { colorSpace: e10.colorSpace });
      } catch (t11) {
        a10 = dN(e10, u10);
      }
      break;
    default:
      if (dL)
        a10 = dL(e10);
      else
        switch (u10) {
          case "BigInt":
            a10 = dc(e10.valueOf());
            break;
          case "Boolean":
            a10 = dc(dO(e10));
            break;
          case "Number":
            a10 = dc(dC(e10));
            break;
          case "String":
            a10 = dc(dM(e10));
            break;
          case "Date":
            a10 = new dd(dA(e10));
            break;
          case "Blob":
            try {
              a10 = e10.slice(0, e10.size, e10.type);
            } catch (e11) {
              dB(u10);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            r10 = tp[u10];
            try {
              a10 = r10.fromPoint ? r10.fromPoint(e10) : new r10(e10.x, e10.y, e10.z, e10.w);
            } catch (e11) {
              dB(u10);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            r10 = tp[u10];
            try {
              a10 = r10.fromRect ? r10.fromRect(e10) : new r10(e10.x, e10.y, e10.width, e10.height);
            } catch (e11) {
              dB(u10);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            r10 = tp[u10];
            try {
              a10 = r10.fromMatrix ? r10.fromMatrix(e10) : new r10(e10);
            } catch (e11) {
              dB(u10);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            ts(e10.clone) || dB(u10);
            try {
              a10 = e10.clone();
            } catch (e11) {
              dF(u10);
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
            dB(u10);
          default:
            dF(u10);
        }
  }
  switch (db(t10, e10, a10), u10) {
    case "Array":
    case "Object":
      for (o10 = 0, l10 = n$(s10 = dk(e10)); o10 < l10; o10++)
        c10 = s10[o10], ds(a10, c10, dU(e10[c10], t10));
      break;
    case "Map":
      e10.forEach(function(e11, r11) {
        db(a10, dU(r11, t10), dU(e11, t10));
      });
      break;
    case "Set":
      e10.forEach(function(e11) {
        d_(a10, dU(e11, t10));
      });
      break;
    case "Error":
      rM(a10, "message", dU(e10.message, t10)), t9(e10, "cause") && rM(a10, "cause", dU(e10.cause, t10)), "AggregateError" === n9 ? a10.errors = dU(e10.errors, t10) : "SuppressedError" === n9 && (a10.error = dU(e10.error, t10), a10.suppressed = dU(e10.suppressed, t10));
    case "DOMException":
      av && rM(a10, "stack", dU(e10.stack, t10));
  }
  return a10;
}, dz = function(e10, t10) {
  if (!th(e10))
    throw new dp("Transfer option cannot be converted to a sequence");
  var r10, n9, a10, i10, o10, l10 = [];
  dl(e10, function(e11) {
    dS(l10, tx(e11));
  });
  for (var s10 = 0, c10 = n$(l10), u10 = new dw(); s10 < c10; ) {
    if ("ArrayBuffer" === (n9 = r3(r10 = l10[s10++])) ? dx(u10, r10) : dv(t10, r10))
      throw new dm("Duplicate transferable", dE);
    if ("ArrayBuffer" === n9) {
      d_(u10, r10);
      continue;
    }
    if (de)
      i10 = dI(r10, { transfer: [r10] });
    else
      switch (n9) {
        case "ImageBitmap":
          uB(a10 = tp.OffscreenCanvas) || dB(n9, dT);
          try {
            (o10 = new a10(r10.width, r10.height)).getContext("bitmaprenderer").transferFromImageBitmap(r10), i10 = o10.transferToImageBitmap();
          } catch (e11) {
          }
          break;
        case "AudioData":
        case "VideoFrame":
          ts(r10.clone) && ts(r10.close) || dB(n9, dT);
          try {
            i10 = r10.clone(), r10.close();
          } catch (e11) {
          }
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          dB(n9, dT);
      }
    if (void 0 === i10)
      throw new dm("This object cannot be transferred: " + n9, dE);
    db(t10, r10, i10);
  }
  return u10;
}, dq = function(e10) {
  u8(e10, function(e11) {
    de ? dL(e11, { transfer: [e11] }) : ts(e11.transfer) ? e11.transfer() : di ? di(e11) : dB("ArrayBuffer", dT);
  });
};
nQ({ global: true, enumerable: true, sham: !de, forced: dD }, { structuredClone: function(e10) {
  var t10, r10, n9 = r9(arguments.length, 1) > 1 && !tG(arguments[1]) ? tx(arguments[1]) : void 0, a10 = n9 ? n9.transfer : void 0;
  void 0 !== a10 && (r10 = dz(a10, t10 = new dg()));
  var i10 = dU(e10, t10);
  return r10 && dq(r10), i10;
} });
var dG = TypeError, dY = tc.f, dJ = function(e10, t10) {
  if (tT(t10, e10))
    return e10;
  throw new dG("Incorrect invocation");
}, dK = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } }, dX = "DOMException", dQ = tC("Error"), dZ = tC(dX), d0 = function() {
  dJ(this, d1);
  var e10 = arguments.length, t10 = au(e10 < 1 ? void 0 : arguments[0]), r10 = au(e10 < 2 ? void 0 : arguments[1], "Error"), n9 = new dZ(t10, r10), a10 = new dQ(t10);
  return a10.name = dX, dY(n9, "stack", rC(1, ag(a10.stack, 1))), ac(n9, this, d0), n9;
}, d1 = d0.prototype = dZ.prototype, d2 = "stack" in new dQ(dX), d4 = "stack" in new dZ(1, 2), d3 = dZ && td && Object.getOwnPropertyDescriptor(tp, dX), d5 = !!d3 && !(d3.writable && d3.configurable), d8 = d2 && !d5 && !d4;
nQ({ global: true, constructor: true, forced: d8 }, { DOMException: d8 ? d0 : dZ });
var d6 = tC(dX), d9 = d6.prototype;
if (d9.constructor !== d6) {
  for (var d7 in dY(d9, "constructor", rC(1, d6)), dK)
    if (t9(dK, d7)) {
      var fe = dK[d7], ft = fe.s;
      t9(d6, ft) || dY(d6, ft, rC(6, fe.c));
    }
}
var fr = function() {
};
let fn = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function fa(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let fi = ["duration", "bounce"], fo = ["stiffness", "damping", "mass"];
function fl(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function fs(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n9 = 2, restDelta: a10 } = e10, i10 = ev(e10, ["from", "to", "restSpeed", "restDelta"]);
  let o10 = { done: false, value: t10 }, { stiffness: l10, damping: s10, mass: c10, velocity: u10, duration: d7, isResolvedFromDuration: f10 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!fl(e11, fo) && fl(e11, fi)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n10 = 800, bounce: a11 = 0.25, velocity: i11 = 0, mass: o11 = 1 } = e12, l11 = 1 - a11;
        l11 = fn(0.05, 1, l11), n10 = fn(0.01, 10, n10 / 1e3), l11 < 1 ? (t12 = (e13) => {
          let t13 = e13 * l11, r13 = t13 * n10;
          return 1e-3 - (t13 - i11) / fa(e13, l11) * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * l11 * n10, a12 = Math.pow(l11, 2) * Math.pow(e13, 2) * n10, o12 = fa(Math.pow(e13, 2), l11);
          return (r13 * i11 + i11 - a12) * Math.exp(-r13) * (-t12(e13) + 1e-3 > 0 ? -1 : 1) / o12;
        }) : (t12 = (e13) => -1e-3 + Math.exp(-e13 * n10) * ((e13 - i11) * n10 + 1), r12 = (e13) => n10 * n10 * (i11 - e13) * Math.exp(-e13 * n10));
        let s11 = function(e13, t13, r13) {
          let n11 = r13;
          for (let r14 = 1; r14 < 12; r14++)
            n11 -= e13(n11) / t13(n11);
          return n11;
        }(t12, r12, 5 / n10);
        if (n10 *= 1e3, isNaN(s11))
          return { stiffness: 100, damping: 10, duration: n10 };
        {
          let e13 = Math.pow(s11, 2) * o11;
          return { stiffness: e13, damping: 2 * l11 * Math.sqrt(o11 * e13), duration: n10 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(i10), p10 = fc, h10 = fc;
  function m10() {
    let e11 = u10 ? -(u10 / 1e3) : 0, n10 = r10 - t10, i11 = s10 / (2 * Math.sqrt(l10 * c10)), o11 = Math.sqrt(l10 / c10) / 1e3;
    if (void 0 === a10 && (a10 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), i11 < 1) {
      let t11 = fa(o11, i11);
      p10 = (a11) => r10 - Math.exp(-i11 * o11 * a11) * ((e11 + i11 * o11 * n10) / t11 * Math.sin(t11 * a11) + n10 * Math.cos(t11 * a11)), h10 = (r11) => {
        let a11 = Math.exp(-i11 * o11 * r11);
        return i11 * o11 * a11 * (Math.sin(t11 * r11) * (e11 + i11 * o11 * n10) / t11 + n10 * Math.cos(t11 * r11)) - a11 * (Math.cos(t11 * r11) * (e11 + i11 * o11 * n10) - t11 * n10 * Math.sin(t11 * r11));
      };
    } else if (1 === i11)
      p10 = (t11) => r10 - Math.exp(-o11 * t11) * (n10 + (e11 + o11 * n10) * t11);
    else {
      let t11 = o11 * Math.sqrt(i11 * i11 - 1);
      p10 = (a11) => {
        let l11 = Math.exp(-i11 * o11 * a11), s11 = Math.min(t11 * a11, 300);
        return r10 - l11 * ((e11 + i11 * o11 * n10) * Math.sinh(s11) + t11 * n10 * Math.cosh(s11)) / t11;
      };
    }
  }
  return m10(), { next: (e11) => {
    let t11 = p10(e11);
    if (f10)
      o10.done = e11 >= d7;
    else {
      let i11 = 1e3 * h10(e11), l11 = Math.abs(r10 - t11) <= a10;
      o10.done = Math.abs(i11) <= n9 && l11;
    }
    return o10.value = o10.done ? r10 : t11, o10;
  }, flipTarget: () => {
    u10 = -u10, [t10, r10] = [r10, t10], m10();
  } };
}
fs.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let fc = (e10) => 0, fu = (e10, t10, r10) => {
  let n9 = t10 - e10;
  return 0 === n9 ? 1 : (r10 - e10) / n9;
}, fd = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, ff = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), fp = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, fh = /(-)?([\d]*\.?[\d])+/g, fm = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, fg = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function fv(e10) {
  return "string" == typeof e10;
}
let fy = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, fb = Object.assign(Object.assign({}, fy), { transform: ff(0, 1) });
Object.assign(Object.assign({}, fy), { default: 1 });
let fw = { test: (e10) => fv(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, fw), { parse: (e10) => fw.parse(e10) / 100, transform: (e10) => fw.transform(100 * e10) });
let f_ = (e10, t10) => (r10) => !!(fv(r10) && fg.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), fx = (e10, t10, r10) => (n9) => {
  if (!fv(n9))
    return n9;
  let [a10, i10, o10, l10] = n9.match(fh);
  return { [e10]: parseFloat(a10), [t10]: parseFloat(i10), [r10]: parseFloat(o10), alpha: void 0 !== l10 ? parseFloat(l10) : 1 };
}, fk = { test: f_("hsl", "hue"), parse: fx("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n9, alpha: a10 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + fw.transform(fp(r10)) + ", " + fw.transform(fp(n9)) + ", " + fp(fb.transform(a10)) + ")";
} }, fS = ff(0, 255), fO = Object.assign(Object.assign({}, fy), { transform: (e10) => Math.round(fS(e10)) }), fC = { test: f_("rgb", "red"), parse: fx("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n9, alpha: a10 = 1 } = e10;
  return "rgba(" + fO.transform(t10) + ", " + fO.transform(r10) + ", " + fO.transform(n9) + ", " + fp(fb.transform(a10)) + ")";
} }, fM = { test: f_("#"), parse: function(e10) {
  let t10 = "", r10 = "", n9 = "", a10 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n9 = e10.substr(5, 2), a10 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n9 = e10.substr(3, 1), a10 = e10.substr(4, 1), t10 += t10, r10 += r10, n9 += n9, a10 += a10), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n9, 16), alpha: a10 ? parseInt(a10, 16) / 255 : 1 };
}, transform: fC.transform }, fA = { test: (e10) => fC.test(e10) || fM.test(e10) || fk.test(e10), parse: (e10) => fC.test(e10) ? fC.parse(e10) : fk.test(e10) ? fk.parse(e10) : fM.parse(e10), transform: (e10) => fv(e10) ? e10 : e10.hasOwnProperty("red") ? fC.transform(e10) : fk.transform(e10) }, fP = "${c}", fE = "${n}";
function fT(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n9 = e10.match(fm);
  n9 && (r10 = n9.length, e10 = e10.replace(fm, fP), t10.push(...n9.map(fA.parse)));
  let a10 = e10.match(fh);
  return a10 && (e10 = e10.replace(fh, fE), t10.push(...a10.map(fy.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
let fR = function(e10) {
  let { values: t10, numColors: r10, tokenised: n9 } = fT(e10), a10 = t10.length;
  return (e11) => {
    let t11 = n9;
    for (let n10 = 0; n10 < a10; n10++)
      t11 = t11.replace(n10 < r10 ? fP : fE, n10 < r10 ? fA.transform(e11[n10]) : fp(e11[n10]));
    return t11;
  };
};
function f$(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function fI(e10) {
  let { hue: t10, saturation: r10, lightness: n9, alpha: a10 } = e10;
  t10 /= 360, n9 /= 100;
  let i10 = 0, o10 = 0, l10 = 0;
  if (r10 /= 100) {
    let e11 = n9 < 0.5 ? n9 * (1 + r10) : n9 + r10 - n9 * r10, a11 = 2 * n9 - e11;
    i10 = f$(a11, e11, t10 + 1 / 3), o10 = f$(a11, e11, t10), l10 = f$(a11, e11, t10 - 1 / 3);
  } else
    i10 = o10 = l10 = n9;
  return { red: Math.round(255 * i10), green: Math.round(255 * o10), blue: Math.round(255 * l10), alpha: a10 };
}
let fD = (e10, t10, r10) => {
  let n9 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n9) + n9));
}, fj = [fM, fC, fk], fL = (e10) => fj.find((t10) => t10.test(e10)), fF = (e10, t10) => {
  let r10 = fL(e10), n9 = fL(t10), a10 = r10.parse(e10), i10 = n9.parse(t10);
  r10 === fk && (a10 = fI(a10), r10 = fC), n9 === fk && (i10 = fI(i10), n9 = fC);
  let o10 = Object.assign({}, a10);
  return (e11) => {
    for (let t11 in o10)
      "alpha" !== t11 && (o10[t11] = fD(a10[t11], i10[t11], e11));
    return o10.alpha = fd(a10.alpha, i10.alpha, e11), r10.transform(o10);
  };
}, fB = (e10) => "number" == typeof e10, fN = (e10, t10) => (r10) => t10(e10(r10)), fV = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(fN);
};
function fW(e10, t10) {
  return fB(e10) ? (r10) => fd(e10, t10, r10) : fA.test(e10) ? fF(e10, t10) : fq(e10, t10);
}
let fH = (e10, t10) => {
  let r10 = [...e10], n9 = r10.length, a10 = e10.map((e11, r11) => fW(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n9; t11++)
      r10[t11] = a10[t11](e11);
    return r10;
  };
}, fU = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n9 = {};
  for (let a10 in r10)
    void 0 !== e10[a10] && void 0 !== t10[a10] && (n9[a10] = fW(e10[a10], t10[a10]));
  return (e11) => {
    for (let t11 in n9)
      r10[t11] = n9[t11](e11);
    return r10;
  };
};
function fz(e10) {
  let t10 = fT(e10).values, r10 = t10.length, n9 = 0, a10 = 0, i10 = 0;
  for (let e11 = 0; e11 < r10; e11++)
    n9 || "number" == typeof t10[e11] ? n9++ : void 0 !== t10[e11].hue ? i10++ : a10++;
  return { parsed: t10, numNumbers: n9, numRGB: a10, numHSL: i10 };
}
let fq = (e10, t10) => {
  let r10 = fR(t10), n9 = fz(e10), a10 = fz(t10);
  return n9.numHSL === a10.numHSL && n9.numRGB === a10.numRGB && n9.numNumbers >= a10.numNumbers ? fV(fH(n9.parsed, a10.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, fG = (e10, t10) => (r10) => fd(e10, t10, r10);
function fY(e10, t10) {
  let { clamp: r10 = true, ease: n9, mixer: a10 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i10 = e10.length;
  fr(i10 === t10.length), fr(!n9 || !Array.isArray(n9) || n9.length === i10 - 1), e10[0] > e10[i10 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let o10 = function(e11, t11, r11) {
    var n10;
    let a11 = [], i11 = r11 || ("number" == typeof (n10 = e11[0]) ? fG : "string" == typeof n10 ? fA.test(n10) ? fF : fq : Array.isArray(n10) ? fH : "object" == typeof n10 ? fU : void 0), o11 = e11.length - 1;
    for (let r12 = 0; r12 < o11; r12++) {
      let n11 = i11(e11[r12], e11[r12 + 1]);
      t11 && (n11 = fV(Array.isArray(t11) ? t11[r12] : t11, n11)), a11.push(n11);
    }
    return a11;
  }(t10, n9, a10), l10 = 2 === i10 ? function(e11, t11) {
    let [r11, n10] = e11, [a11] = t11;
    return (e12) => a11(fu(r11, n10, e12));
  }(e10, o10) : function(e11, t11) {
    let r11 = e11.length, n10 = r11 - 1;
    return (a11) => {
      let i11 = 0, o11 = false;
      if (a11 <= e11[0] ? o11 = true : a11 >= e11[n10] && (i11 = n10 - 1, o11 = true), !o11) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a11) && t12 !== n10; t12++)
          ;
        i11 = t12 - 1;
      }
      let l11 = fu(e11[i11], e11[i11 + 1], a11);
      return t11[i11](l11);
    };
  }(e10, o10);
  return r10 ? (t11) => l10(fn(e10[0], e10[i10 - 1], t11)) : l10;
}
let fJ = (e10) => e10, fK = (l = (e10) => Math.pow(e10, 2), (e10) => e10 <= 0.5 ? l(2 * e10) / 2 : (2 - l(2 * (1 - e10))) / 2);
function fX(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n9, offset: a10, duration: i10 = 300 } = e10, o10 = { done: false, value: t10 }, l10 = Array.isArray(r10) ? r10 : [t10, r10], s10 = (a10 && a10.length === l10.length ? a10 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(l10)).map((e11) => e11 * i10);
  function c10() {
    return fY(s10, l10, { ease: Array.isArray(n9) ? n9 : l10.map(() => n9 || fK).splice(0, l10.length - 1) });
  }
  let u10 = c10();
  return { next: (e11) => (o10.value = u10(e11), o10.done = e11 >= i10, o10), flipTarget: () => {
    l10.reverse(), u10 = c10();
  } };
}
let fQ = { keyframes: fX, spring: fs, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n9 = 0.8, timeConstant: a10 = 350, restDelta: i10 = 0.5, modifyTarget: o10 } = e10, l10 = { done: false, value: r10 }, s10 = n9 * t10, c10 = r10 + s10, u10 = void 0 === o10 ? c10 : o10(c10);
  return u10 !== c10 && (s10 = u10 - r10), { next: (e11) => {
    let t11 = -s10 * Math.exp(-e11 / a10);
    return l10.done = !(t11 > i10 || t11 < -i10), l10.value = l10.done ? u10 : u10 + t11, l10;
  }, flipTarget: () => {
  } };
} }, fZ = 1 / 60 * 1e3, f0 = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), f1 = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(f0()), fZ), f2 = true, f4 = false, f3 = false, f5 = { delta: 0, timestamp: 0 }, f8 = ["read", "update", "preRender", "render", "postRender"], f6 = f8.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r10 = [], n9 = 0, a10 = false, i10 = false, o10 = /* @__PURE__ */ new WeakSet(), l10 = { schedule: function(e12) {
    let i11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], l11 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s10 = l11 && a10, c10 = s10 ? t11 : r10;
    return i11 && o10.add(e12), -1 === c10.indexOf(e12) && (c10.push(e12), s10 && a10 && (n9 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r10.indexOf(e12);
    -1 !== t12 && r10.splice(t12, 1), o10.delete(e12);
  }, process: (s10) => {
    if (a10) {
      i10 = true;
      return;
    }
    if (a10 = true, [t11, r10] = [r10, t11], r10.length = 0, n9 = t11.length)
      for (let r11 = 0; r11 < n9; r11++) {
        let n10 = t11[r11];
        n10(s10), o10.has(n10) && (l10.schedule(n10), e11());
      }
    a10 = false, i10 && (i10 = false, l10.process(s10));
  } };
  return l10;
}(() => f4 = true), e10), {}), f9 = f8.reduce((e10, t10) => {
  let r10 = f6[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n9 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return f4 || pr(), r10.schedule(e11, t11, n9);
  }, e10;
}, {}), f7 = f8.reduce((e10, t10) => (e10[t10] = f6[t10].cancel, e10), {});
f8.reduce((e10, t10) => (e10[t10] = () => f6[t10].process(f5), e10), {});
let pe = (e10) => f6[e10].process(f5), pt = (e10) => {
  f4 = false, f5.delta = f2 ? fZ : Math.max(Math.min(e10 - f5.timestamp, 40), 1), f5.timestamp = e10, f3 = true, f8.forEach(pe), f3 = false, f4 && (f2 = false, f1(pt));
}, pr = () => {
  f4 = true, f2 = true, f3 || f1(pt);
};
function pn(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let pa = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => f9.update(t10, true), stop: () => f7.update(t10) };
};
function pi(e10) {
  let t10, r10, n9;
  var a10, { from: i10, autoplay: o10 = true, driver: l10 = pa, elapsed: s10 = 0, repeat: c10 = 0, repeatType: u10 = "loop", repeatDelay: d7 = 0, onPlay: f10, onStop: p10, onComplete: h10, onRepeat: m10, onUpdate: g10 } = e10, y2 = ev(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: b2 } = y2, w2 = 0, _2 = y2.duration, x2 = false, k2 = true, S2 = function(e11) {
    if (Array.isArray(e11.to))
      return fX;
    if (fQ[e11.type])
      return fQ[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return fs;
    return fX;
  }(y2);
  (null === (a10 = S2.needsInterpolation) || void 0 === a10 ? void 0 : a10.call(S2, i10, b2)) && (n9 = fY([0, 100], [i10, b2], { clamp: false }), i10 = 0, b2 = 100);
  let O2 = S2(Object.assign(Object.assign({}, y2), { from: i10, to: b2 }));
  return o10 && (null == f10 || f10(), (t10 = l10(function(e11) {
    if (k2 || (e11 = -e11), s10 += e11, !x2) {
      let e12 = O2.next(Math.max(0, s10));
      r10 = e12.value, n9 && (r10 = n9(r10)), x2 = k2 ? e12.done : s10 <= 0;
    }
    if (null == g10 || g10(r10), x2) {
      if (0 === w2 && (null != _2 || (_2 = s10)), w2 < c10) {
        var a11, i11;
        a11 = s10, i11 = _2, (k2 ? a11 >= i11 + d7 : a11 <= -d7) && (w2++, "reverse" === u10 ? s10 = function(e12, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n10 ? pn(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(s10, _2, d7, k2 = w2 % 2 == 0) : (s10 = pn(s10, _2, d7), "mirror" === u10 && O2.flipTarget()), x2 = false, m10 && m10());
      } else
        t10.stop(), h10 && h10();
    }
  })).start()), { stop: () => {
    null == p10 || p10(), t10.stop();
  } };
}
let po = (e10, t10) => 1 - 3 * t10 + 3 * e10, pl = (e10, t10) => 3 * t10 - 6 * e10, ps = (e10) => 3 * e10, pc = (e10, t10, r10) => ((po(t10, r10) * e10 + pl(t10, r10)) * e10 + ps(t10)) * e10, pu = (e10, t10, r10) => 3 * po(t10, r10) * e10 * e10 + 2 * pl(t10, r10) * e10 + ps(t10);
var pd = ro("match"), pf = Math.floor, pp = tE("".charAt), ph = tE("".replace), pm = tE("".slice), pg = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, pv = /\$([$&'`]|\d{1,2})/g, py = function(e10) {
  var t10;
  return th(e10) && (void 0 !== (t10 = e10[pd]) ? !!t10 : "RegExp" === rZ(e10));
}, pb = function(e10, t10, r10, n9, a10, i10) {
  var o10 = r10 + e10.length, l10 = n9.length, s10 = pv;
  return void 0 !== a10 && (a10 = t8(a10), s10 = pg), ph(i10, s10, function(i11, s11) {
    var c10;
    switch (pp(s11, 0)) {
      case "$":
        return "$";
      case "&":
        return e10;
      case "`":
        return pm(t10, 0, r10);
      case "'":
        return pm(t10, o10);
      case "<":
        c10 = a10[pm(s11, 1, -1)];
        break;
      default:
        var u10 = +s11;
        if (0 === u10)
          return i11;
        if (u10 > l10) {
          var d7 = pf(u10 / 10);
          if (0 === d7)
            return i11;
          if (d7 <= l10)
            return void 0 === n9[d7 - 1] ? pp(s11, 1) : n9[d7 - 1] + pp(s11, 1);
          return i11;
        }
        c10 = n9[u10 - 1];
    }
    return void 0 === c10 ? "" : c10;
  });
}, pw = ro("replace"), p_ = TypeError, px = tE("".indexOf);
tE("".replace);
var pk = tE("".slice), pS = Math.max;
nQ({ target: "String", proto: true }, { replaceAll: function(e10, t10) {
  var r10, n9, a10, i10, o10, l10, s10, c10 = t3(this), u10 = 0, d7 = 0, f10 = "";
  if (!tG(e10)) {
    if (py(e10) && !~px(r8(t3(uZ(e10))), "g"))
      throw new p_("`.replaceAll` does not allow non-global regexes");
    if (r10 = tY(e10, pw))
      return tO(r10, e10, c10, t10);
  }
  for (n9 = r8(c10), a10 = r8(e10), (i10 = ts(t10)) || (t10 = r8(t10)), l10 = pS(1, o10 = a10.length), u10 = px(n9, a10); -1 !== u10; )
    s10 = i10 ? r8(t10(a10, u10, n9)) : pb(a10, n9, u10, [], void 0, t10), f10 += pk(n9, d7, u10) + s10, d7 = u10 + o10, u10 = u10 + l10 > n9.length ? -1 : px(n9, a10, u10 + l10);
  return d7 < n9.length && (f10 += pk(n9, d7)), f10;
} });
var pO = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, pC = /[A-Z]|^ms/g, pM = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pA = function(e10) {
  return 45 === e10.charCodeAt(1);
}, pP = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, pE = (eU = function(e10) {
  return pA(e10) ? e10 : e10.replace(pC, "-$&").toLowerCase();
}, ez = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === ez[e10] && (ez[e10] = eU(e10)), ez[e10];
}), pT = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(pM, function(e11, t11, r10) {
          return ta = { name: t11, styles: r10, next: ta }, t11;
        });
  }
  return 1 === pO[e10] || pA(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function pR(e10, t10, r10) {
  if (null == r10)
    return "";
  if (void 0 !== r10.__emotion_styles)
    return r10;
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim)
        return ta = { name: r10.name, styles: r10.styles, next: ta }, r10.name;
      if (void 0 !== r10.styles) {
        var n9 = r10.next;
        if (void 0 !== n9)
          for (; void 0 !== n9; )
            ta = { name: n9.name, styles: n9.styles, next: ta }, n9 = n9.next;
        return r10.styles + ";";
      }
      return function(e11, t11, r11) {
        var n10 = "";
        if (Array.isArray(r11))
          for (var a11 = 0; a11 < r11.length; a11++)
            n10 += pR(e11, t11, r11[a11]) + ";";
        else
          for (var i11 in r11) {
            var o11 = r11[i11];
            if ("object" != typeof o11)
              null != t11 && void 0 !== t11[o11] ? n10 += i11 + "{" + t11[o11] + "}" : pP(o11) && (n10 += pE(i11) + ":" + pT(i11, o11) + ";");
            else if (Array.isArray(o11) && "string" == typeof o11[0] && (null == t11 || void 0 === t11[o11[0]]))
              for (var l10 = 0; l10 < o11.length; l10++)
                pP(o11[l10]) && (n10 += pE(i11) + ":" + pT(i11, o11[l10]) + ";");
            else {
              var s10 = pR(e11, t11, o11);
              switch (i11) {
                case "animation":
                case "animationName":
                  n10 += pE(i11) + ":" + s10 + ";";
                  break;
                default:
                  n10 += i11 + "{" + s10 + "}";
              }
            }
          }
        return n10;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var a10 = ta, i10 = r10(e10);
        return ta = a10, pR(e10, t10, i10);
      }
  }
  if (null == t10)
    return r10;
  var o10 = t10[r10];
  return void 0 !== o10 ? o10 : r10;
}
var p$ = /label:\s*([^\s;\n{]+)\s*(;|$)/g, pI = function(e10, t10, r10) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles)
    return e10[0];
  var n9, a10 = true, i10 = "";
  ta = void 0;
  var o10 = e10[0];
  null == o10 || void 0 === o10.raw ? (a10 = false, i10 += pR(r10, t10, o10)) : i10 += o10[0];
  for (var l10 = 1; l10 < e10.length; l10++)
    i10 += pR(r10, t10, e10[l10]), a10 && (i10 += o10[l10]);
  p$.lastIndex = 0;
  for (var s10 = ""; null !== (n9 = p$.exec(i10)); )
    s10 += "-" + n9[1];
  return { name: function(e11) {
    for (var t11, r11 = 0, n10 = 0, a11 = e11.length; a11 >= 4; ++n10, a11 -= 4)
      t11 = (65535 & (t11 = 255 & e11.charCodeAt(n10) | (255 & e11.charCodeAt(++n10)) << 8 | (255 & e11.charCodeAt(++n10)) << 16 | (255 & e11.charCodeAt(++n10)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r11 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    switch (a11) {
      case 3:
        r11 ^= (255 & e11.charCodeAt(n10 + 2)) << 16;
      case 2:
        r11 ^= (255 & e11.charCodeAt(n10 + 1)) << 8;
      case 1:
        r11 ^= 255 & e11.charCodeAt(n10), r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    }
    return r11 ^= r11 >>> 13, (((r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36);
  }(i10) + s10, styles: i10, next: ta };
};
function pD() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let pj = pD(), pL = { paddingX: [pj.paddingLeft, pj.paddingRight], paddingY: [pj.paddingTop, pj.paddingBottom], marginX: [pj.marginInlineStart, pj.marginInlineEnd], marginY: [pj.marginTop, pj.marginBottom], borderX: [pj.borderLeft, pj.borderRight], borderY: [pj.borderTop, pj.borderBottom], color: [pj.color, pj.fill], borderTopRadius: [pj.borderTopLeftRadius, pj.borderTopRightRadius], borderBottomRadius: [pj.borderBottomLeftRadius, pj.borderBottomRightRadius], borderRightRadius: [pj.borderTopRightRadius, pj.borderBottomRightRadius], borderLeftRadius: [pj.borderTopLeftRadius, pj.borderBottomLeftRadius], backgroundGradient: [pj.backgroundImage], boxSize: [pj.width, pj.height] }, pF = pD(), pB = { font: pF.fontFamily, shadow: pF.boxShadow, rounded: pF.borderRadius, roundedTop: pF.borderTopRadius, roundedBottom: pF.borderBottomRadius, roundedLeft: pF.borderLeftRadius, roundedRight: pF.borderRightRadius, bg: pF.background, bgImage: pF.backgroundImage, bgSize: pF.backgroundSize, bgPosition: pF.backgroundPosition, bgRepeat: pF.backgroundRepeat, bgAttachment: pF.backgroundAttachment, bgColor: pF.backgroundColor, bgGradient: pF.backgroundGradient, bgClip: pF.backgroundClip, pos: pF.position, p: pF.padding, pt: pF.paddingTop, pr: pF.paddingRight, pl: pF.paddingLeft, pb: pF.paddingBottom, ps: pF.paddingInlineStart, pe: pF.paddingInlineEnd, px: pF.paddingX, py: pF.paddingY, m: pF.margin, mt: pF.marginTop, mr: pF.marginRight, ml: pF.marginLeft, mb: pF.marginBottom, ms: pF.marginInlineStart, me: pF.marginInlineEnd, mx: pF.marginX, my: pF.marginY, w: pF.width, minW: pF.minWidth, maxW: pF.maxWidth, h: pF.height, minH: pF.minHeight, maxH: pF.maxHeight }, pN = pD(), pV = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  let n9 = [...t10];
  for (let e11 of t10)
    pB[e11] && n9.push(pB[e11]);
  return n9;
}, pW = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _pH = class _pH {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n9, extends: a10, ...i10 } = e10;
    if (a10)
      for (let e11 of a10)
        r10.push(...this.processAll(e11, t10));
    if (n9) {
      let e11 = {}, t11 = {};
      _pH.walkStateValues(n9, (r11, n10, a11) => {
        var i11;
        let o10 = `--${this.opt.varPrefix}-state-${n10.join("-")}`, l10 = null !== (i11 = E(n10)) && void 0 !== i11 ? i11 : "", s10 = {};
        this.process(s10, l10, r11, false), e11[o10] = s10[l10], T(t11, [...a11, l10], `var(${o10})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!R(i10)) {
      let e11 = {};
      this.processTo(e11, i10, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n9 in t10)
      this.process(e10, n9, t10[n9], r10);
  }
  process(e10, t10, r10) {
    var n9, a10, i10, o10;
    let l10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a11 = null === (n9 = this.opt.mixins[t10]) || void 0 === n9 ? void 0 : n9.get(r10);
      if (a11)
        for (let t11 in a11)
          this.process(e10, t11, a11[t11], l10);
      return;
    }
    let s10 = t10;
    if (P(r10)) {
      e10[s10 = null !== (a10 = _pH.convertSelector(s10)) && void 0 !== a10 ? a10 : s10] = null !== (i10 = e10[s10]) && void 0 !== i10 ? i10 : {}, this.processTo(e10[s10], r10);
      return;
    }
    if (l10 && pL[s10 = null !== (o10 = pB[s10]) && void 0 !== o10 ? o10 : s10]) {
      for (let t11 of pL[s10])
        e10[t11] = this.opt.processValue(t11, r10);
      return;
    }
    e10[s10] = this.opt.processValue(s10, r10);
  }
};
__publicField(_pH, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_pH, "convertSelector", (e10) => {
  if (pW[e10])
    return pW[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (r10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [n9, a10] = t10.split("__");
      return a10 ? `${e11}[${M(n9)}='${M(a10)}']${r10}` : `${e11}[${M(n9)}]${r10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$"))
        return `${e11}::${t10.slice(1)}`;
      if (_pH.supportedPseudoClasses[t10]) {
        let r12 = _pH.supportedPseudoClasses[t10];
        return `${e11}:${r12}, ${e11}[data-${r12}]:not([data-${r12}='false']), ${e11}.${r12}`;
      }
      let [r11, n9] = t10.split("__"), a10 = M(r11);
      return n9 ? `${e11}[data-${a10}='${M(n9)}']` : `${e11}[data-${a10}]:not([data-${a10}='false'])`;
    }
  }
});
__publicField(_pH, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n9, ...a10 } = e10;
  for (let e11 in a10) {
    var i10;
    let o10 = a10[e11], l10 = null !== (i10 = a10.default) && void 0 !== i10 ? i10 : r10.default, s10 = null != n9 ? n9 : A(l10, [...r10.path.slice(1), "$"]), c10 = s10 ? [...r10.selectorPath, s10] : r10.selectorPath, u10 = [...r10.path, e11];
    if (P(o10)) {
      _pH.walkStateValues(o10, t10, { path: u10, selectorPath: c10, default: l10 });
      continue;
    }
    t10(o10, u10, c10);
  }
});
let pH = _pH;
var pU = ((eq = pU || {}).var = "var", eq.mixin = "mixin", eq);
class pz {
  static create(e10, t10) {
    let { value: r10, on: n9, transform: a10 } = t10;
    return { type: e10, value: r10, on: n9, transform: a10, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return pz.create("var", { value: e10, on: pV(pN.color, pN.bgColor, pN.outlineColor, pN.borderColor, pN.accentColor, pN.fill, pN.stroke), transform: (e11, t10) => $(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return pz.create("var", { value: e10, on: pV(pN.gap, pN.rowGap, pN.columnGap, pN.top, pN.right, pN.bottom, pN.left, pN.m, pN.ms, pN.me, pN.mt, pN.mr, pN.mb, pN.ml, pN.mx, pN.my, pN.p, pN.ps, pN.pe, pN.pt, pN.pr, pN.pb, pN.pl, pN.px, pN.py) });
  }
  static boxSize(e10) {
    return pz.create("var", { value: e10, on: pV(pN.w, pN.minW, pN.maxW, pN.h, pN.minH, pN.maxH, pN.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return pz.create("var", { value: e10, on: pV(pN.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return pz.create("var", { value: e10, on: pV(pN.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return pz.create("var", { value: e10, fallback: 0, on: pV(pN.rounded, pN.roundedTop, pN.roundedBottom, pN.roundedLeft, pN.roundedRight, pj.borderTopLeftRadius, pj.borderTopRightRadius, pj.borderBottomLeftRadius, pj.borderBottomRightRadius, pj.borderTopRightRadius, pj.borderBottomRightRadius, pj.borderTopLeftRadius, pj.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return pz.create("var", { value: e10, on: pV(pN.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return pz.create("var", { value: e10, on: pV(pN.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return pz.create("var", { value: e10, on: pV(pN.font) });
  }
  static fontWeight(e10) {
    return pz.create("var", { value: e10, on: pV(pN.fontWeight) });
  }
  static letterSpacing(e10) {
    return pz.create("var", { value: e10, on: pV(pN.letterSpacing) });
  }
  static shadow(e10) {
    return pz.create("var", { value: e10, on: pV(pN.shadow) });
  }
  static customMixin(e10, t10) {
    return pz.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let pq = (e10, t10, r10) => {
  let n9 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var a10;
    let i10 = t10[e11];
    if (e11 === t10.length - 1) {
      n9[i10] = r10;
      continue;
    }
    n9[i10] = null !== (a10 = n9[i10]) && void 0 !== a10 ? a10 : {}, n9 = n9[i10];
  }
};
const _pG = class _pG {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _pG.walkValues(e10.value, (n9, a10) => {
      let i10 = a10.join("."), o10 = (n10, a11) => {
        let i11 = e10.transform ? e10.transform(n10, t10) : r10(n10);
        if (j(i11))
          for (let e11 in i11)
            a11(i11[e11], "default" === e11 ? "" : e11);
        else
          a11(i11, "");
      };
      if (T(this._cssVarRefs, [i10], t10(i10)), P(n9))
        for (let e11 in n9)
          o10(n9[e11], (t11, r11) => {
            T(this._values, [`${i10}${r11 ? `/${r11}` : ""}`, e11], t11);
          });
      else
        o10(n9, (e11, t11) => {
          T(this._values, [`${i10}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
  get tokens() {
    return D(this._values);
  }
  get(e10, t10, r10) {
    let n9 = this._values[e10];
    if (j(n9)) {
      var a10;
      return r10 ? n9[t10] : null !== (a10 = n9[t10]) && void 0 !== a10 ? a10 : n9[_pG.defaultMode];
    }
    return r10 ? t10 === _pG.defaultMode ? n9 : void 0 : n9;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_pG, "defaultMode", "_default");
__publicField(_pG, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n9 in e10) {
    let a10 = e10[n9];
    if (P(a10)) {
      if (I(a10, "_default")) {
        t10(a10, [...r10, n9]);
        continue;
      }
      _pG.walkValues(a10, t10, [...r10, n9]);
      continue;
    }
    t10(a10, [...r10, n9]);
  }
});
let pG = _pG;
const _pY = class _pY {
  constructor(e10) {
    __publicField(this, "_values", {});
    _pY.walkValue(e10.value, (e11, t10) => {
      let r10 = t10.join(".");
      T(this._values, [r10], L(e11, "__mixin"));
    });
  }
  get tokens() {
    return D(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_pY, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n9 in e10) {
    let a10 = e10[n9];
    if (P(a10)) {
      if (I(a10, "__mixin")) {
        t10(a10, [...r10, n9]);
        continue;
      }
      _pY.walkValue(a10, t10, [...r10, n9]);
      continue;
    }
    t10(a10, [...r10, n9]);
  }
});
let pY = _pY;
let pJ = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, pK = (e10) => {
  let t10 = A(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: F(pJ, (e11) => B(t10, (t11, r10) => N(e11, (e12) => r10.indexOf(e12) > -1))) } };
}, pX = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, pQ = (e10) => V(e10) && I(e10, "token");
function pZ(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let p0 = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _p1 = class _p1 {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _p1.propsCanBaseDp[e10] && H(t10) ? _p1.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r10, n9;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.tokens[t10]) || void 0 === r11 ? void 0 : r11.get(e11, `_${this.mode}`);
      }, { tokens: null === (r10 = this.tokens[t10]) || void 0 === r10 ? void 0 : r10.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.mixins[t10]) || void 0 === r11 ? void 0 : r11.get(e11);
      }, { tokens: null === (n9 = this.mixins[t10]) || void 0 === n9 ? void 0 : n9.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r10, n9, a10;
      if (pQ(t10)) {
        let r11 = null === (n9 = this.propValues[e10]) || void 0 === n9 ? void 0 : n9.use(t10.token, true);
        return r11 ? t10(r11) : void 0;
      }
      return null !== (a10 = null === (r10 = this.propValues[e10]) || void 0 === r10 ? void 0 : r10.use(t10)) && void 0 !== a10 ? a10 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new pH({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r10, n9;
    for (let a10 in this.theme = e10, this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n9 = t10.mode) && void 0 !== n9 ? n9 : "light", T(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a10];
      if (t11) {
        if (t11.type === pU.var) {
          let e11 = new pG(t11, { cssVar: (e12) => this.cssVar(a10, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r11 of (this.tokens[a10] = e11, t11.on))
            this.propValues[r11] = e11;
          for (let t12 of e11.tokens)
            for (let r11 of ["light", "dark"]) {
              let n10 = r11 === this.mode ? "_default" : `_${r11}`, i10 = e11.get(t12, n10, true);
              W(i10) || ("_default" === n10 ? T(this.cssVars, [this.cssVar(a10, t12)], i10) : T(this.cssVars, [n10, this.cssVar(a10, t12)], i10));
            }
          continue;
        }
        if (t11.type === pU.mixin) {
          let e11 = new pY(t11);
          for (let r11 of t11.on)
            this.mixins[r11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _p1(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${M(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n9 = null != t10 ? t10 : {};
    return n9.__emotion_styles = null !== (r10 = n9.__emotion_styles) && void 0 !== r10 ? r10 : pI(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n9.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r10 = {}, n9 = (e11, t11) => j(t11) ? { $type: e11, $value: F(t11, (t12) => n9(e11, t12).$value) } : $(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, r11;
      let n10 = null !== (r11 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? U(e13) : e13).join(".")) && void 0 !== r11 ? r11 : "";
      return n10.startsWith("sys.") ? `{${n10}}` : `{seed.${n10}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let a10 in this.tokens) {
      let i10 = this.tokens[a10], o10 = (o11) => {
        for (let l10 of i10.tokens)
          if (!l10.includes("/")) {
            if (l10.startsWith("sys.")) {
              let e11 = i10.get(l10, "_default"), s10 = i10.get(l10, "_dark");
              pq(t10, [a10, ...l10.split(".")], n9(o11, e11)), e11 !== s10 && pq(r10, [a10, ...l10.split(".")], n9(o11, s10));
            } else
              pq(e10, [a10, ...l10.split(".")], n9(o11, i10.get(l10, "_default")));
          }
      };
      switch (a10) {
        case "color":
          o10("color");
          break;
        case "rounded":
          o10("borderRadius");
          break;
        case "shadow":
          o10("boxShadow");
          break;
        case "font":
          o10("fontFamily");
          break;
        case "fontWeight":
          o10("fontWeight");
      }
    }
    for (let e11 in this.mixins) {
      let r11 = this.mixins[e11];
      if (!r11)
        continue;
      let a10 = (a11) => {
        for (let i10 of r11.tokens) {
          let o10 = r11.get(i10);
          if (!o10)
            continue;
          let l10 = this.unstable_sx(o10)[0];
          pq(t10, [e11, ...i10.split(".")], n9(a11, l10));
        }
      };
      "textStyle" === e11 && a10("typography");
    }
    return { seed: e10, base: pK(t10), dark: pK(r10) };
  }
};
__publicField(_p1, "propsCanPercent", p0([...pz.boxSize({}).on]));
__publicField(_p1, "propsCanBaseDp", p0([...pz.boxSize({}).on, ...pz.space({}).on, ...pz.fontSize({}).on, ...pz.letterSpacing({}).on, ...pz.lineHeight({}).on, ...pz.rounded({}).on]));
let p1 = _p1;
let p2 = { shadow: pz.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: pz.customMixin("elevation", { 0: pz.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: pz.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: pz.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: pz.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: pz.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, p4 = (e10, t10, r10, n9) => Object.assign(function(e11, t11, r11, n10) {
  if (e11 === t11 && r11 === n10)
    return fJ;
  let a10 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12)
    a10[t12] = pc(0.1 * t12, e11, r11);
  return (i10) => 0 === i10 || 1 === i10 ? i10 : pc(function(t12) {
    let n11 = 0, i11 = 1;
    for (; 10 !== i11 && a10[i11] <= t12; ++i11)
      n11 += 0.1;
    let o10 = n11 + (t12 - a10[--i11]) / (a10[i11 + 1] - a10[i11]) * 0.1, l10 = pu(o10, e11, r11);
    return l10 >= 1e-3 ? function(e12, t13, r12, n12) {
      for (let a11 = 0; a11 < 8; ++a11) {
        let a12 = pu(t13, r12, n12);
        if (0 === a12)
          break;
        let i12 = pc(t13, r12, n12) - e12;
        t13 -= i12 / a12;
      }
      return t13;
    }(t12, o10, e11, r11) : 0 === l10 ? o10 : function(e12, t13, r12, n12, a11) {
      let i12, o11;
      let l11 = 0;
      do
        (i12 = pc(o11 = t13 + (r12 - t13) / 2, n12, a11) - e12) > 0 ? r12 = o11 : t13 = o11;
      while (Math.abs(i12) > 1e-7 && ++l11 < 10);
      return o11;
    }(t12, n11, n11 + 0.1, e11, r11);
  }(i10), t11, n10);
}(e10, t10, r10, n9), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n9})` }), p3 = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: p4(0, 0, 1, 1), standard: Object.assign(p4(0.2, 0, 0, 1), { accelerate: p4(0.3, 0, 1, 1), decelerate: p4(0, 0, 0, 1) }), emphasized: Object.assign(p4(0.2, 0, 0, 1), { accelerate: p4(0.3, 0, 0.8, 0.15), decelerate: p4(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(p4(0.4, 0, 0.2, 1), { decelerate: p4(0, 0, 0.2, 1), accelerate: p4(0.4, 0, 1, 1) }) } }, p5 = (e10, t10) => {
  let r10 = null != t10 ? t10 : { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return s({ onComplete: z(), $default: z() }, (t11, n9) => {
    let a10, { slots: i10, emit: o10 } = n9, l10 = (t12, r11) => {
      a10 = pi({ ...e10, autoplay: true, onComplete: () => {
        r11(), o10("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t12.style, e11);
      } });
    }, s10 = (e11, t12) => {
      a10 = pi({ ...r10, autoplay: true, onComplete: () => {
        t12(), o10("complete", "leave");
      }, onUpdate: (t13) => {
        Object.assign(e11.style, t13);
      } });
    }, c10 = () => {
      null == a10 || a10.stop();
    };
    return () => {
      var e11;
      return O(ua, { css: false, onEnter: l10, onEnterCancelled: c10, onLeave: s10, onLeaveCancelled: c10, children: null === (e11 = i10.default) || void 0 === e11 ? void 0 : e11.call(i10) });
    };
  }, { name: "Transition" });
}, p8 = { transitionDuration: pz.transitionDuration(p3.duration), transitionTimingFunction: pz.transitionTimingFunction({ linear: p3.easing.linear.toString(), standard: p3.easing.standard.toString(), "standard-accelerate": p3.easing.standard.accelerate.toString(), "standard-decelerate": p3.easing.standard.decelerate.toString(), emphasized: p3.easing.emphasized.toString(), "emphasized-decelerate": p3.easing.emphasized.decelerate.toString(), "emphasized-accelerate": p3.easing.emphasized.accelerate.toString(), legacy: p3.easing.legacy.toString(), "legacy-decelerate": p3.easing.legacy.decelerate.toString(), "legacy-accelerate": p3.easing.legacy.accelerate.toString() }) };
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function p6(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function p9(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function p7(e10, t10) {
  return [e10[0] * t10[0][0] + e10[1] * t10[0][1] + e10[2] * t10[0][2], e10[0] * t10[1][0] + e10[1] * t10[1][1] + e10[2] * t10[1][2], e10[0] * t10[2][0] + e10[1] * t10[2][1] + e10[2] * t10[2][2]];
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let he = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], ht = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], hr = [95.047, 100, 108.883];
function hn(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function ha(e10) {
  return hn(hc(e10[0]), hc(e10[1]), hc(e10[2]));
}
function hi(e10) {
  var t10;
  return 116 * hu(p7([hs((t10 = e10) >> 16 & 255), hs(t10 >> 8 & 255), hs(255 & t10)], he)[1] / 100) - 16;
}
function ho(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function hl(e10) {
  return 116 * hu(e10 / 100) - 16;
}
function hs(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function hc(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function hu(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class hd {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hr, n9 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * ho(50) / 100, a10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, i10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, o10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], l10 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], s10 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c10 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u10 = 0.8 + i10 / 10, d7 = u10 >= 0.9 ? (1 - (e10 = (u10 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u10 - 0.8) * 10)) * 0.525 + 0.59 * t10, f10 = o10 ? 1 : u10 * (1 - 1 / 3.6 * Math.exp((-n9 - 42) / 92)), p10 = [100 / l10 * (f10 = f10 > 1 ? 1 : f10 < 0 ? 0 : f10) + 1 - f10, 100 / s10 * f10 + 1 - f10, 100 / c10 * f10 + 1 - f10], h10 = 1 / (5 * n9 + 1), m10 = h10 * h10 * h10 * h10, g10 = 1 - m10, y2 = m10 * n9 + 0.1 * g10 * g10 * Math.cbrt(5 * n9), b2 = ho(a10) / r10[1], w2 = 1.48 + Math.sqrt(b2), _2 = 0.725 / Math.pow(b2, 0.2), x2 = [Math.pow(y2 * p10[0] * l10 / 100, 0.42), Math.pow(y2 * p10[1] * s10 / 100, 0.42), Math.pow(y2 * p10[2] * c10 / 100, 0.42)], k2 = [400 * x2[0] / (x2[0] + 27.13), 400 * x2[1] / (x2[1] + 27.13), 400 * x2[2] / (x2[2] + 27.13)];
    return new hd(b2, (2 * k2[0] + k2[1] + 0.05 * k2[2]) * _2, _2, _2, d7, u10, p10, y2, Math.pow(y2, 0.25), w2);
  }
  constructor(e10, t10, r10, n9, a10, i10, o10, l10, s10, c10) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n9, this.c = a10, this.nc = i10, this.rgbD = o10, this.fl = l10, this.fLRoot = s10, this.z = c10;
  }
}
hd.DEFAULT = hd.make();
class hf {
  constructor(e10, t10, r10, n9, a10, i10, o10, l10, s10) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n9, this.m = a10, this.s = i10, this.jstar = o10, this.astar = l10, this.bstar = s10;
  }
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n9 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n9 * n9), 0.63);
  }
  static fromInt(e10) {
    return hf.fromIntInViewingConditions(e10, hd.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = hs((16711680 & e10) >> 16), n9 = hs((65280 & e10) >> 8), a10 = hs(255 & e10), i10 = 0.41233895 * r10 + 0.35762064 * n9 + 0.18051042 * a10, o10 = 0.2126 * r10 + 0.7152 * n9 + 0.0722 * a10, l10 = 0.01932141 * r10 + 0.11916382 * n9 + 0.95034478 * a10, s10 = t10.rgbD[0] * (0.401288 * i10 + 0.650173 * o10 - 0.051461 * l10), c10 = t10.rgbD[1] * (-0.250268 * i10 + 1.204414 * o10 + 0.045854 * l10), u10 = t10.rgbD[2] * (-2079e-6 * i10 + 0.048952 * o10 + 0.953127 * l10), d7 = Math.pow(t10.fl * Math.abs(s10) / 100, 0.42), f10 = Math.pow(t10.fl * Math.abs(c10) / 100, 0.42), p10 = Math.pow(t10.fl * Math.abs(u10) / 100, 0.42), h10 = 400 * p6(s10) * d7 / (d7 + 27.13), m10 = 400 * p6(c10) * f10 / (f10 + 27.13), g10 = 400 * p6(u10) * p10 / (p10 + 27.13), y2 = (11 * h10 + -12 * m10 + g10) / 11, b2 = (h10 + m10 - 2 * g10) / 9, w2 = 180 * Math.atan2(b2, y2) / Math.PI, _2 = w2 < 0 ? w2 + 360 : w2 >= 360 ? w2 - 360 : w2, x2 = _2 * Math.PI / 180, k2 = 100 * Math.pow((40 * h10 + 20 * m10 + g10) / 20 * t10.nbb / t10.aw, t10.c * t10.z), S2 = 4 / t10.c * Math.sqrt(k2 / 100) * (t10.aw + 4) * t10.fLRoot, O2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((_2 < 20.14 ? _2 + 360 : _2) * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb * Math.sqrt(y2 * y2 + b2 * b2) / ((20 * h10 + 20 * m10 + 21 * g10) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), C2 = O2 * Math.sqrt(k2 / 100), M2 = C2 * t10.fLRoot, A2 = 50 * Math.sqrt(O2 * t10.c / (t10.aw + 4)), P2 = 1 / 0.0228 * Math.log(1 + 0.0228 * M2);
    return new hf(_2, C2, k2, S2, M2, A2, (1 + 100 * 7e-3) * k2 / (1 + 7e-3 * k2), P2 * Math.cos(x2), P2 * Math.sin(x2));
  }
  static fromJch(e10, t10, r10) {
    return hf.fromJchInViewingConditions(e10, t10, r10, hd.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n9) {
    let a10 = 4 / n9.c * Math.sqrt(e10 / 100) * (n9.aw + 4) * n9.fLRoot, i10 = t10 * n9.fLRoot, o10 = 50 * Math.sqrt(t10 / Math.sqrt(e10 / 100) * n9.c / (n9.aw + 4)), l10 = r10 * Math.PI / 180, s10 = 1 / 0.0228 * Math.log(1 + 0.0228 * i10);
    return new hf(r10, t10, e10, a10, i10, o10, (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), s10 * Math.cos(l10), s10 * Math.sin(l10));
  }
  static fromUcs(e10, t10, r10) {
    return hf.fromUcsInViewingConditions(e10, t10, r10, hd.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n9) {
    let a10 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n9.fLRoot, i10 = 180 / Math.PI * Math.atan2(r10, t10);
    return i10 < 0 && (i10 += 360), hf.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a10, i10, n9);
  }
  toInt() {
    return this.viewed(hd.DEFAULT);
  }
  viewed(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n9 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), a10 = 5e4 / 13 * (0.25 * (Math.cos(r10 + 2) + 3.8)) * e10.nc * e10.ncb, i10 = n9 / e10.nbb, o10 = Math.sin(r10), l10 = Math.cos(r10), s10 = 23 * (i10 + 0.305) * t10 / (23 * a10 + 11 * t10 * l10 + 108 * t10 * o10), c10 = s10 * l10, u10 = s10 * o10, d7 = (460 * i10 + 451 * c10 + 288 * u10) / 1403, f10 = (460 * i10 - 891 * c10 - 261 * u10) / 1403, p10 = (460 * i10 - 220 * c10 - 6300 * u10) / 1403, h10 = Math.max(0, 27.13 * Math.abs(d7) / (400 - Math.abs(d7))), m10 = p6(d7) * (100 / e10.fl) * Math.pow(h10, 1 / 0.42), g10 = Math.max(0, 27.13 * Math.abs(f10) / (400 - Math.abs(f10))), y2 = p6(f10) * (100 / e10.fl) * Math.pow(g10, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(p10) / (400 - Math.abs(p10))), w2 = p6(p10) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), _2 = m10 / e10.rgbD[0], x2 = y2 / e10.rgbD[1], k2 = w2 / e10.rgbD[2];
    return function(e11, t11, r11) {
      let n10 = ht[0][0] * e11 + ht[0][1] * t11 + ht[0][2] * r11, a11 = ht[1][0] * e11 + ht[1][1] * t11 + ht[1][2] * r11, i11 = ht[2][0] * e11 + ht[2][1] * t11 + ht[2][2] * r11;
      return hn(hc(n10), hc(a11), hc(i11));
    }(1.86206786 * _2 - 1.01125463 * x2 + 0.14918677 * k2, 0.38752654 * _2 + 0.62144744 * x2 - 897398e-8 * k2, -0.0158415 * _2 - 0.03412294 * x2 + 1.04996444 * k2);
  }
  static fromXyzInViewingConditions(e10, t10, r10, n9) {
    let a10 = n9.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), i10 = n9.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), o10 = n9.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), l10 = Math.pow(n9.fl * Math.abs(a10) / 100, 0.42), s10 = Math.pow(n9.fl * Math.abs(i10) / 100, 0.42), c10 = Math.pow(n9.fl * Math.abs(o10) / 100, 0.42), u10 = 400 * p6(a10) * l10 / (l10 + 27.13), d7 = 400 * p6(i10) * s10 / (s10 + 27.13), f10 = 400 * p6(o10) * c10 / (c10 + 27.13), p10 = (11 * u10 + -12 * d7 + f10) / 11, h10 = (u10 + d7 - 2 * f10) / 9, m10 = 180 * Math.atan2(h10, p10) / Math.PI, g10 = m10 < 0 ? m10 + 360 : m10 >= 360 ? m10 - 360 : m10, y2 = g10 * Math.PI / 180, b2 = 100 * Math.pow((40 * u10 + 20 * d7 + f10) / 20 * n9.nbb / n9.aw, n9.c * n9.z), w2 = 4 / n9.c * Math.sqrt(b2 / 100) * (n9.aw + 4) * n9.fLRoot, _2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((g10 < 20.14 ? g10 + 360 : g10) * Math.PI / 180 + 2) + 3.8)) * n9.nc * n9.ncb * Math.sqrt(p10 * p10 + h10 * h10) / ((20 * u10 + 20 * d7 + 21 * f10) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n9.n), 0.73), x2 = _2 * Math.sqrt(b2 / 100), k2 = x2 * n9.fLRoot, S2 = 50 * Math.sqrt(_2 * n9.c / (n9.aw + 4)), O2 = Math.log(1 + 0.0228 * k2) / 0.0228;
    return new hf(g10, x2, b2, w2, k2, S2, (1 + 100 * 7e-3) * b2 / (1 + 7e-3 * b2), O2 * Math.cos(y2), O2 * Math.sin(y2));
  }
  xyzInViewingConditions(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n9 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), a10 = 5e4 / 13 * (0.25 * (Math.cos(r10 + 2) + 3.8)) * e10.nc * e10.ncb, i10 = n9 / e10.nbb, o10 = Math.sin(r10), l10 = Math.cos(r10), s10 = 23 * (i10 + 0.305) * t10 / (23 * a10 + 11 * t10 * l10 + 108 * t10 * o10), c10 = s10 * l10, u10 = s10 * o10, d7 = (460 * i10 + 451 * c10 + 288 * u10) / 1403, f10 = (460 * i10 - 891 * c10 - 261 * u10) / 1403, p10 = (460 * i10 - 220 * c10 - 6300 * u10) / 1403, h10 = Math.max(0, 27.13 * Math.abs(d7) / (400 - Math.abs(d7))), m10 = p6(d7) * (100 / e10.fl) * Math.pow(h10, 1 / 0.42), g10 = Math.max(0, 27.13 * Math.abs(f10) / (400 - Math.abs(f10))), y2 = p6(f10) * (100 / e10.fl) * Math.pow(g10, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(p10) / (400 - Math.abs(p10))), w2 = p6(p10) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), _2 = m10 / e10.rgbD[0], x2 = y2 / e10.rgbD[1], k2 = w2 / e10.rgbD[2];
    return [1.86206786 * _2 - 1.01125463 * x2 + 0.14918677 * k2, 0.38752654 * _2 + 0.62144744 * x2 - 897398e-8 * k2, -0.0158415 * _2 - 0.03412294 * x2 + 1.04996444 * k2];
  }
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class hp {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * p6(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = p7(e10, hp.SCALED_DISCOUNT_FROM_LINRGB), r10 = hp.chromaticAdaptation(t10[0]), n9 = hp.chromaticAdaptation(t10[1]), a10 = hp.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n9 - 2 * a10) / 9, (11 * r10 + -12 * n9 + a10) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    return hp.sanitizeRadians(t10 - e10) < hp.sanitizeRadians(r10 - e10);
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n9) {
    let a10 = hp.intercept(e10[n9], t10, r10[n9]);
    return hp.lerpPoint(e10, a10, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = hp.Y_FROM_LINRGB[0], n9 = hp.Y_FROM_LINRGB[1], a10 = hp.Y_FROM_LINRGB[2], i10 = t10 % 4 <= 1 ? 0 : 100, o10 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - i10 * n9 - o10 * a10) / r10;
      return hp.isBounded(t11) ? [t11, i10, o10] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - o10 * r10 - i10 * a10) / n9;
      return hp.isBounded(t11) ? [o10, t11, i10] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - i10 * r10 - o10 * n9) / a10;
      return hp.isBounded(t11) ? [i10, o10, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n9 = r10, a10 = 0, i10 = 0, o10 = false, l10 = true;
    for (let s10 = 0; s10 < 12; s10++) {
      let c10 = hp.nthVertex(e10, s10);
      if (c10[0] < 0)
        continue;
      let u10 = hp.hueOf(c10);
      if (!o10) {
        r10 = c10, n9 = c10, a10 = u10, i10 = u10, o10 = true;
        continue;
      }
      (l10 || hp.areInCyclicOrder(a10, u10, i10)) && (l10 = false, hp.areInCyclicOrder(a10, t10, u10) ? (n9 = c10, i10 = u10) : (r10 = c10, a10 = u10));
    }
    return [r10, n9];
  }
  static midpoint(e10, t10) {
    return [(e10[0] + t10[0]) / 2, (e10[1] + t10[1]) / 2, (e10[2] + t10[2]) / 2];
  }
  static criticalPlaneBelow(e10) {
    return Math.floor(e10 - 0.5);
  }
  static criticalPlaneAbove(e10) {
    return Math.ceil(e10 - 0.5);
  }
  static bisectToLimit(e10, t10) {
    let r10 = hp.bisectToSegment(e10, t10), n9 = r10[0], a10 = hp.hueOf(n9), i10 = r10[1];
    for (let e11 = 0; e11 < 3; e11++)
      if (n9[e11] !== i10[e11]) {
        let r11 = -1, o10 = 255;
        n9[e11] < i10[e11] ? (r11 = hp.criticalPlaneBelow(hp.trueDelinearized(n9[e11])), o10 = hp.criticalPlaneAbove(hp.trueDelinearized(i10[e11]))) : (r11 = hp.criticalPlaneAbove(hp.trueDelinearized(n9[e11])), o10 = hp.criticalPlaneBelow(hp.trueDelinearized(i10[e11])));
        for (let l10 = 0; l10 < 8 && !(1 >= Math.abs(o10 - r11)); l10++) {
          let l11 = Math.floor((r11 + o10) / 2), s10 = hp.CRITICAL_PLANES[l11], c10 = hp.setCoordinate(n9, s10, i10, e11), u10 = hp.hueOf(c10);
          hp.areInCyclicOrder(a10, t10, u10) ? (i10 = c10, o10 = l11) : (n9 = c10, a10 = u10, r11 = l11);
        }
      }
    return hp.midpoint(n9, i10);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10);
    return p6(e10) * Math.pow(Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n9 = 11 * Math.sqrt(r10), a10 = hd.DEFAULT, i10 = 1 / Math.pow(1.64 - Math.pow(0.29, a10.n), 0.73), o10 = 5e4 / 13 * (0.25 * (Math.cos(e10 + 2) + 3.8)) * a10.nc * a10.ncb, l10 = Math.sin(e10), s10 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c10 = n9 / 100, u10 = Math.pow((0 === t10 || 0 === n9 ? 0 : t10 / Math.sqrt(c10)) * i10, 1 / 0.9), d7 = a10.aw * Math.pow(c10, 1 / a10.c / a10.z) / a10.nbb, f10 = 23 * (d7 + 0.305) * u10 / (23 * o10 + 11 * u10 * s10 + 108 * u10 * l10), p10 = f10 * s10, h10 = f10 * l10, m10 = (460 * d7 + 451 * p10 + 288 * h10) / 1403, g10 = (460 * d7 - 891 * p10 - 261 * h10) / 1403, y2 = (460 * d7 - 220 * p10 - 6300 * h10) / 1403, b2 = p7([hp.inverseChromaticAdaptation(m10), hp.inverseChromaticAdaptation(g10), hp.inverseChromaticAdaptation(y2)], hp.LINRGB_FROM_SCALED_DISCOUNT);
      if (b2[0] < 0 || b2[1] < 0 || b2[2] < 0)
        break;
      let w2 = hp.Y_FROM_LINRGB[0], _2 = hp.Y_FROM_LINRGB[1], x2 = hp.Y_FROM_LINRGB[2], k2 = w2 * b2[0] + _2 * b2[1] + x2 * b2[2];
      if (k2 <= 0)
        break;
      if (4 === e11 || 2e-3 > Math.abs(k2 - r10)) {
        if (b2[0] > 100.01 || b2[1] > 100.01 || b2[2] > 100.01)
          return 0;
        return ha(b2);
      }
      n9 -= (k2 - r10) * n9 / (2 * k2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n9;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return function(e11) {
        let t11 = hc(ho(e11));
        return hn(t11, t11, t11);
      }(r10);
    (n9 = e10 % 360) < 0 && (n9 += 360);
    let a10 = (e10 = n9) / 180 * Math.PI, i10 = ho(r10), o10 = hp.findResultByJ(a10, t10, i10);
    return 0 !== o10 ? o10 : ha(hp.bisectToLimit(i10, a10));
  }
  static solveToCam(e10, t10, r10) {
    return hf.fromInt(hp.solveToInt(e10, t10, r10));
  }
}
hp.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], hp.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], hp.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], hp.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class hh {
  static from(e10, t10, r10) {
    return new hh(hp.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new hh(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(hp.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(hp.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(hp.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = hf.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = hi(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = hf.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = hi(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = hf.fromInt(this.toInt()).xyzInViewingConditions(e10), r10 = hf.fromXyzInViewingConditions(t10[0], t10[1], t10[2], hd.make());
    return hh.from(r10.hue, r10.chroma, hl(t10[1]));
  }
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class hm {
  static ratioOfTones(e10, t10) {
    return e10 = p9(0, 100, e10), t10 = p9(0, 100, t10), hm.ratioOfYs(ho(e10), ho(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = ho(e10), n9 = t10 * (r10 + 5) - 5, a10 = hm.ratioOfYs(n9, r10);
    if (a10 < t10 && Math.abs(a10 - t10) > 0.04)
      return -1;
    let i10 = hl(n9) + 0.4;
    return i10 < 0 || i10 > 100 ? -1 : i10;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = ho(e10), n9 = (r10 + 5) / t10 - 5, a10 = hm.ratioOfYs(r10, n9);
    if (a10 < t10 && Math.abs(a10 - t10) > 0.04)
      return -1;
    let i10 = hl(n9) - 0.4;
    return i10 < 0 || i10 > 100 ? -1 : i10;
  }
  static lighterUnsafe(e10, t10) {
    let r10 = hm.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e10, t10) {
    let r10 = hm.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class hg {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n9 = 65 > Math.round(e10.tone);
    return t10 && r10 && n9;
  }
  static fixIfDisliked(e10) {
    return hg.isDisliked(e10) ? hh.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class hv {
  static fromPalette(e10) {
    var t10, r10;
    return new hv(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  constructor(e10, t10, r10, n9, a10, i10, o10, l10) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n9, this.background = a10, this.secondBackground = i10, this.contrastCurve = o10, this.toneDeltaPair = l10, this.hctCache = /* @__PURE__ */ new Map(), !a10 && i10)
      throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a10 && o10)
      throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a10 && !o10)
      throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10)
      return t10;
    let r10 = this.getTone(e10), n9 = this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n9), n9;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e10), n9 = r10.roleA, a10 = r10.roleB, i10 = r10.delta, o10 = r10.polarity, l10 = r10.stayTogether, s10 = this.background(e10).getTone(e10), c10 = "nearer" === o10 || "lighter" === o10 && !e10.isDark || "darker" === o10 && e10.isDark, u10 = c10 ? n9 : a10, d7 = c10 ? a10 : n9, f10 = this.name === u10.name, p10 = e10.isDark ? 1 : -1, h10 = u10.contrastCurve.getContrast(e10.contrastLevel), m10 = d7.contrastCurve.getContrast(e10.contrastLevel), g10 = u10.tone(e10), y2 = hm.ratioOfTones(s10, g10) >= h10 ? g10 : hv.foregroundTone(s10, h10), b2 = d7.tone(e10), w2 = hm.ratioOfTones(s10, b2) >= m10 ? b2 : hv.foregroundTone(s10, m10);
      return t10 && (y2 = hv.foregroundTone(s10, h10), w2 = hv.foregroundTone(s10, m10)), (w2 - y2) * p10 >= i10 || ((w2 = p9(0, 100, y2 + i10 * p10)) - y2) * p10 >= i10 || (y2 = p9(0, 100, w2 - i10 * p10)), 50 <= y2 && y2 < 60 ? w2 = p10 > 0 ? Math.max(w2, (y2 = 60) + i10 * p10) : Math.min(w2, (y2 = 49) + i10 * p10) : 50 <= w2 && w2 < 60 && (w2 = l10 ? p10 > 0 ? Math.max(w2, (y2 = 60) + i10 * p10) : Math.min(w2, (y2 = 49) + i10 * p10) : p10 > 0 ? 60 : 49), f10 ? y2 : w2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background)
        return r10;
      let n9 = this.background(e10).getTone(e10), a10 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (hm.ratioOfTones(n9, r10) >= a10 || (r10 = hv.foregroundTone(n9, a10)), t10 && (r10 = hv.foregroundTone(n9, a10)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = hm.ratioOfTones(49, n9) >= a10 ? 49 : 60), this.secondBackground) {
        let [t11, n10] = [this.background, this.secondBackground], [i10, o10] = [t11(e10).getTone(e10), n10(e10).getTone(e10)], [l10, s10] = [Math.max(i10, o10), Math.min(i10, o10)];
        if (hm.ratioOfTones(l10, r10) >= a10 && hm.ratioOfTones(s10, r10) >= a10)
          return r10;
        let c10 = hm.lighter(l10, a10), u10 = hm.darker(s10, a10), d7 = [];
        return (-1 !== c10 && d7.push(c10), -1 !== u10 && d7.push(u10), hv.tonePrefersLightForeground(i10) || hv.tonePrefersLightForeground(o10)) ? c10 < 0 ? 100 : c10 : 1 === d7.length ? d7[0] : u10 < 0 ? 0 : u10;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = hm.lighterUnsafe(e10, t10), n9 = hm.darkerUnsafe(e10, t10), a10 = hm.ratioOfTones(r10, e10), i10 = hm.ratioOfTones(n9, e10);
    if (!hv.tonePrefersLightForeground(e10))
      return i10 >= t10 || i10 >= a10 ? n9 : r10;
    {
      let e11 = 0.1 > Math.abs(a10 - i10) && a10 < t10 && i10 < t10;
      return a10 >= t10 || a10 >= i10 || e11 ? r10 : n9;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return hv.tonePrefersLightForeground(e10) && !hv.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
(eG = ti || (ti = {}))[eG.MONOCHROME = 0] = "MONOCHROME", eG[eG.NEUTRAL = 1] = "NEUTRAL", eG[eG.TONAL_SPOT = 2] = "TONAL_SPOT", eG[eG.VIBRANT = 3] = "VIBRANT", eG[eG.EXPRESSIVE = 4] = "EXPRESSIVE", eG[eG.FIDELITY = 5] = "FIDELITY", eG[eG.CONTENT = 6] = "CONTENT", eG[eG.RAINBOW = 7] = "RAINBOW", eG[eG.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class hy {
  constructor(e10, t10, r10, n9) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n9;
  }
  getContrast(e10) {
    var t10, r10, n9, a10, i10, o10, l10, s10, c10;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n9 = (e10 - -1) / 1)) * t10 + n9 * r10) : e10 < 0.5 ? (a10 = this.normal, i10 = this.medium, (1 - (o10 = (e10 - 0) / 0.5)) * a10 + o10 * i10) : e10 < 1 ? (l10 = this.medium, s10 = this.high, (1 - (c10 = (e10 - 0.5) / 0.5)) * l10 + c10 * s10) : this.high;
  }
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class hb {
  constructor(e10, t10, r10, n9, a10) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n9, this.stayTogether = a10;
  }
}
function hw(e10) {
  return e10.variant === ti.FIDELITY || e10.variant === ti.CONTENT;
}
function h_(e10) {
  return e10.variant === ti.MONOCHROME;
}
function hx(e10, t10) {
  let r10 = e10.inViewingConditions(hd.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return hv.tonePrefersLightForeground(e10.tone) && !hv.toneAllowsLightForeground(r10.tone) ? hv.enableLightForeground(e10.tone) : hv.enableLightForeground(r10.tone);
}
class hk {
  static highestSurface(e10) {
    return e10.isDark ? hk.surfaceBright : hk.surfaceDim;
  }
}
hk.contentAccentToneDelta = 15, hk.primaryPaletteKeyColor = hv.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), hk.secondaryPaletteKeyColor = hv.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), hk.tertiaryPaletteKeyColor = hv.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), hk.neutralPaletteKeyColor = hv.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), hk.neutralVariantPaletteKeyColor = hv.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), hk.background = hv.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), hk.onBackground = hv.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => hk.background, contrastCurve: new hy(3, 3, 4.5, 7) }), hk.surface = hv.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), hk.surfaceDim = hv.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), hk.surfaceBright = hv.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), hk.surfaceContainerLowest = hv.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), hk.surfaceContainerLow = hv.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), hk.surfaceContainer = hv.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), hk.surfaceContainerHigh = hv.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), hk.surfaceContainerHighest = hv.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), hk.onSurface = hv.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(4.5, 7, 11, 21) }), hk.surfaceVariant = hv.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), hk.onSurfaceVariant = hv.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(3, 4.5, 7, 11) }), hk.inverseSurface = hv.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), hk.inverseOnSurface = hv.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => hk.inverseSurface, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.outline = hv.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1.5, 3, 4.5, 7) }), hk.outlineVariant = hv.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7) }), hk.shadow = hv.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), hk.scrim = hv.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), hk.surfaceTint = hv.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), hk.primary = hv.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => h_(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(3, 4.5, 7, 11), toneDeltaPair: (e10) => new hb(hk.primaryContainer, hk.primary, 15, "nearer", false) }), hk.onPrimary = hv.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => h_(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => hk.primary, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.primaryContainer = hv.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => hw(e10) ? hx(e10.sourceColorHct, e10) : h_(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.primaryContainer, hk.primary, 15, "nearer", false) }), hk.onPrimaryContainer = hv.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => hw(e10) ? hv.foregroundTone(hk.primaryContainer.tone(e10), 4.5) : h_(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => hk.primaryContainer, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.inversePrimary = hv.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => hk.inverseSurface, contrastCurve: new hy(3, 4.5, 7, 11) }), hk.secondary = hv.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(3, 4.5, 7, 11), toneDeltaPair: (e10) => new hb(hk.secondaryContainer, hk.secondary, 15, "nearer", false) }), hk.onSecondary = hv.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => h_(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => hk.secondary, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.secondaryContainer = hv.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (h_(e10))
    return e10.isDark ? 30 : 85;
  if (!hw(e10))
    return t10;
  let r10 = function(e11, t11, r11, n9) {
    let a10 = r11, i10 = hh.from(e11, t11, r11);
    if (i10.chroma < t11) {
      let r12 = i10.chroma;
      for (; i10.chroma < t11; ) {
        a10 += n9 ? -1 : 1;
        let o10 = hh.from(e11, t11, a10);
        if (r12 > o10.chroma || 0.4 > Math.abs(o10.chroma - t11))
          break;
        Math.abs(o10.chroma - t11) < Math.abs(i10.chroma - t11) && (i10 = o10), r12 = Math.max(r12, o10.chroma);
      }
    }
    return a10;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return hx(e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.secondaryContainer, hk.secondary, 15, "nearer", false) }), hk.onSecondaryContainer = hv.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => hw(e10) ? hv.foregroundTone(hk.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => hk.secondaryContainer, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.tertiary = hv.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => h_(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(3, 4.5, 7, 11), toneDeltaPair: (e10) => new hb(hk.tertiaryContainer, hk.tertiary, 15, "nearer", false) }), hk.onTertiary = hv.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => h_(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => hk.tertiary, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.tertiaryContainer = hv.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (h_(e10))
    return e10.isDark ? 60 : 49;
  if (!hw(e10))
    return e10.isDark ? 30 : 90;
  let t10 = hx(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = e10.tertiaryPalette.getHct(t10);
  return hg.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.tertiaryContainer, hk.tertiary, 15, "nearer", false) }), hk.onTertiaryContainer = hv.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => h_(e10) ? e10.isDark ? 0 : 100 : hw(e10) ? hv.foregroundTone(hk.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => hk.tertiaryContainer, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.error = hv.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(3, 4.5, 7, 11), toneDeltaPair: (e10) => new hb(hk.errorContainer, hk.error, 15, "nearer", false) }), hk.onError = hv.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => hk.error, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.errorContainer = hv.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.errorContainer, hk.error, 15, "nearer", false) }), hk.onErrorContainer = hv.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => hk.errorContainer, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.primaryFixed = hv.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => h_(e10) ? 40 : 90, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.primaryFixed, hk.primaryFixedDim, 10, "lighter", true) }), hk.primaryFixedDim = hv.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => h_(e10) ? 30 : 80, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.primaryFixed, hk.primaryFixedDim, 10, "lighter", true) }), hk.onPrimaryFixed = hv.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => h_(e10) ? 100 : 10, background: (e10) => hk.primaryFixedDim, secondBackground: (e10) => hk.primaryFixed, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.onPrimaryFixedVariant = hv.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => h_(e10) ? 90 : 30, background: (e10) => hk.primaryFixedDim, secondBackground: (e10) => hk.primaryFixed, contrastCurve: new hy(3, 4.5, 7, 11) }), hk.secondaryFixed = hv.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => h_(e10) ? 80 : 90, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.secondaryFixed, hk.secondaryFixedDim, 10, "lighter", true) }), hk.secondaryFixedDim = hv.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => h_(e10) ? 70 : 80, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.secondaryFixed, hk.secondaryFixedDim, 10, "lighter", true) }), hk.onSecondaryFixed = hv.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => hk.secondaryFixedDim, secondBackground: (e10) => hk.secondaryFixed, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.onSecondaryFixedVariant = hv.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => h_(e10) ? 25 : 30, background: (e10) => hk.secondaryFixedDim, secondBackground: (e10) => hk.secondaryFixed, contrastCurve: new hy(3, 4.5, 7, 11) }), hk.tertiaryFixed = hv.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => h_(e10) ? 40 : 90, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.tertiaryFixed, hk.tertiaryFixedDim, 10, "lighter", true) }), hk.tertiaryFixedDim = hv.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => h_(e10) ? 30 : 80, isBackground: true, background: (e10) => hk.highestSurface(e10), contrastCurve: new hy(1, 1, 3, 7), toneDeltaPair: (e10) => new hb(hk.tertiaryFixed, hk.tertiaryFixedDim, 10, "lighter", true) }), hk.onTertiaryFixed = hv.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => h_(e10) ? 100 : 10, background: (e10) => hk.tertiaryFixedDim, secondBackground: (e10) => hk.tertiaryFixed, contrastCurve: new hy(4.5, 7, 11, 21) }), hk.onTertiaryFixedVariant = hv.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => h_(e10) ? 90 : 30, background: (e10) => hk.tertiaryFixedDim, secondBackground: (e10) => hk.tertiaryFixed, contrastCurve: new hy(3, 4.5, 7, 11) });
class hS {
  static fromInt(e10) {
    let t10 = hh.fromInt(e10);
    return hS.fromHct(t10);
  }
  static fromHct(e10) {
    return new hS(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new hS(e10, t10, hS.createKeyColor(e10, t10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e10, t10) {
    let r10 = hh.from(e10, t10, 50), n9 = Math.abs(r10.chroma - t10);
    for (let a10 = 1; a10 < 50 && Math.round(t10) !== Math.round(r10.chroma); a10 += 1) {
      let i10 = hh.from(e10, t10, 50 + a10), o10 = Math.abs(i10.chroma - t10);
      o10 < n9 && (n9 = o10, r10 = i10);
      let l10 = hh.from(e10, t10, 50 - a10), s10 = Math.abs(l10.chroma - t10);
      s10 < n9 && (n9 = s10, r10 = l10);
    }
    return r10;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = hh.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return hh.fromInt(this.tone(e10));
  }
}
class hO {
  static of(e10) {
    return new hO(e10, false);
  }
  static contentOf(e10) {
    return new hO(e10, true);
  }
  static fromColors(e10) {
    return hO.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return hO.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new hO(t10.primary, e10);
    if (t10.secondary) {
      let n9 = new hO(t10.secondary, e10);
      r10.a2 = n9.a1;
    }
    if (t10.tertiary) {
      let n9 = new hO(t10.tertiary, e10);
      r10.a3 = n9.a1;
    }
    if (t10.error) {
      let n9 = new hO(t10.error, e10);
      r10.error = n9.a1;
    }
    if (t10.neutral) {
      let n9 = new hO(t10.neutral, e10);
      r10.n1 = n9.n1;
    }
    if (t10.neutralVariant) {
      let n9 = new hO(t10.neutralVariant, e10);
      r10.n2 = n9.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = hh.fromInt(e10), n9 = r10.hue, a10 = r10.chroma;
    t10 ? (this.a1 = hS.fromHueAndChroma(n9, a10), this.a2 = hS.fromHueAndChroma(n9, a10 / 3), this.a3 = hS.fromHueAndChroma(n9 + 60, a10 / 2), this.n1 = hS.fromHueAndChroma(n9, Math.min(a10 / 12, 4)), this.n2 = hS.fromHueAndChroma(n9, Math.min(a10 / 6, 8))) : (this.a1 = hS.fromHueAndChroma(n9, Math.max(48, a10)), this.a2 = hS.fromHueAndChroma(n9, 16), this.a3 = hS.fromHueAndChroma(n9 + 60, 24), this.n1 = hS.fromHueAndChroma(n9, 4), this.n2 = hS.fromHueAndChroma(n9, 8)), this.error = hS.fromHueAndChroma(25, 84);
  }
}
function hC(e10) {
  let t10 = 3 === (e10 = e10.replace("#", "")).length, r10 = 6 === e10.length, n9 = 8 === e10.length;
  if (!t10 && !r10 && !n9)
    throw Error("unexpected hex " + e10);
  let a10 = 0, i10 = 0, o10 = 0;
  return t10 ? (a10 = hM(e10.slice(0, 1).repeat(2)), i10 = hM(e10.slice(1, 2).repeat(2)), o10 = hM(e10.slice(2, 3).repeat(2))) : r10 ? (a10 = hM(e10.slice(0, 2)), i10 = hM(e10.slice(2, 4)), o10 = hM(e10.slice(4, 6))) : n9 && (a10 = hM(e10.slice(2, 4)), i10 = hM(e10.slice(4, 6)), o10 = hM(e10.slice(6, 8))), (-16777216 | (255 & a10) << 16 | (255 & i10) << 8 | 255 & o10) >>> 0;
}
function hM(e10) {
  return parseInt(e10, 16);
}
let hA = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, hP = (e10) => {
  let t10 = { r: e10 >> 16 & 255, g: e10 >> 8 & 255, b: 255 & e10 };
  return [t10.r, t10.g, t10.b];
}, hE = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _hT = class _hT {
  constructor(e10) {
    this.seeds = e10;
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 87], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e11 in this.seeds)
      e11.startsWith("neutral") || (t10[e11] = [e11, 80, 40], t10[`on-${e11}`] = [e11, 20, 100], t10[`${e11}-container`] = [e11, 30, 90], t10[`on-${e11}-container`] = [e11, 90, 10]);
    return { ...t10, ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r10 = {};
    for (let i10 in e10) {
      let [o10, l10, s10] = A(e10, [i10], []);
      if (this.seeds[o10]) {
        var n9, a10;
        r10[i10] = hA[l10] ? `${o10}.${l10}` : null === (n9 = this.seeds[o10]) || void 0 === n9 ? void 0 : n9.tone(l10), t10[i10] = hA[s10] ? `${o10}.${s10}` : null === (a10 = this.seeds[o10]) || void 0 === a10 ? void 0 : a10.tone(s10);
      }
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r10] = this.getThemeRoleColors(this.normalizeRoleRules(e10)), n9 = {}, a10 = {};
    for (let e11 in t10)
      if (n9[`${e11}`] = { _default: H(t10[e11]) ? hP(t10[e11]) : t10[e11], _dark: H(r10[e11]) ? hP(r10[e11]) : r10[e11] }, hE(e11) && (a10[`${e11}`] = pz.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a10[`${e11}-container`] = pz.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          a10[`${e11}`] = pz.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        a10[`${e11}`] = pz.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a10[`on-${e11}`] = pz.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let i10 = (e11) => Object.keys(hA).reduce((t11, r11) => Object.assign(t11, { [r11]: hP(e11.tone(parseInt(r11))) }), {});
    return { color: pz.color({ ...F(this.seeds, (e11) => i10(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: n9 }), containerStyle: pz.customMixin("containerStyle", { sys: a10 }) };
  }
};
__publicField(_hT, "toHEX", (e10) => `#${hP(e10).map((e11) => q(e11.toString(16), 2, "0")).join("")}`);
__publicField(_hT, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: n9, neutral: a10, neutralVariant: i10, error: o10, ...l10 } = e10, s10 = hO.contentFromColors({ primary: hC(t10), secondary: r10 ? hC(r10) : void 0, tertiary: n9 ? hC(n9) : void 0, error: o10 ? hC(o10) : void 0 });
  return a10 && (s10.n1 = hS.fromHueAndChroma(hC(a10), 4)), i10 && (s10.n2 = hS.fromHueAndChroma(hC(i10), 8)), new _hT({ primary: s10.a1, secondary: s10.a2, tertiary: s10.a3, neutral: s10.n1, neutralVariant: s10.n2, error: s10.error, ...F(l10, (e11) => hS.fromInt(hC(e11))) });
});
let hT = _hT;
let hR = pz.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), h$ = { font: pz.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: pz.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: pz.customMixin("textStyle", { sys: { "display-large": pz.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": pz.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": pz.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": pz.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": pz.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": pz.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": pz.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": pz.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": pz.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": pz.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": pz.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": pz.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": pz.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": pz.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": pz.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, hI = hT.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), hD = { ...h$, ...p8, ...p2, rounded: hR, ...hI.toDesignTokens({ primary: ["primary", 80, 50] }) }, hj = p1.create(hD, { varPrefix: "vk" }), hL = c(() => hj, { name: "Theme" });
var hF = function() {
  function e10(e11) {
    var t11 = this;
    this._insertTag = function(e12) {
      var r10;
      r10 = 0 === t11.tags.length ? t11.insertionPoint ? t11.insertionPoint.nextSibling : t11.prepend ? t11.container.firstChild : t11.before : t11.tags[t11.tags.length - 1].nextSibling, t11.container.insertBefore(e12, r10), t11.tags.push(e12);
    }, this.isSpeedy = void 0 === e11.speedy || e11.speedy, this.tags = [], this.ctr = 0, this.nonce = e11.nonce, this.key = e11.key, this.container = e11.container, this.prepend = e11.prepend, this.insertionPoint = e11.insertionPoint, this.before = null;
  }
  var t10 = e10.prototype;
  return t10.hydrate = function(e11) {
    e11.forEach(this._insertTag);
  }, t10.insert = function(e11) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
      var t11;
      this._insertTag(((t11 = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t11.setAttribute("nonce", this.nonce), t11.appendChild(document.createTextNode("")), t11.setAttribute("data-s", ""), t11));
    }
    var r10 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var n9 = function(e12) {
        if (e12.sheet)
          return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++)
          if (document.styleSheets[t12].ownerNode === e12)
            return document.styleSheets[t12];
      }(r10);
      try {
        n9.insertRule(e11, n9.cssRules.length);
      } catch (e12) {
      }
    } else
      r10.appendChild(document.createTextNode(e11));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e11) {
      return e11.parentNode && e11.parentNode.removeChild(e11);
    }), this.tags = [], this.ctr = 0;
  }, e10;
}(), hB = "-ms-", hN = "-moz-", hV = "-webkit-", hW = "comm", hH = "rule", hU = "decl", hz = "@keyframes", hq = Math.abs, hG = String.fromCharCode, hY = Object.assign;
function hJ(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function hK(e10, t10) {
  return e10.indexOf(t10);
}
function hX(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function hQ(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function hZ(e10) {
  return e10.length;
}
function h0(e10, t10) {
  return t10.push(e10), e10;
}
var h1 = 1, h2 = 1, h4 = 0, h3 = 0, h5 = 0, h8 = "";
function h6(e10, t10, r10, n9, a10, i10, o10) {
  return { value: e10, root: t10, parent: r10, type: n9, props: a10, children: i10, line: h1, column: h2, length: o10, return: "" };
}
function h9(e10, t10) {
  return hY(h6("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function h7() {
  return h5 = h3 < h4 ? hX(h8, h3++) : 0, h2++, 10 === h5 && (h2 = 1, h1++), h5;
}
function me() {
  return hX(h8, h3);
}
function mt(e10) {
  switch (e10) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function mr(e10) {
  return h1 = h2 = 1, h4 = hZ(h8 = e10), h3 = 0, [];
}
function mn(e10) {
  var t10, r10;
  return (t10 = h3 - 1, r10 = function e11(t11) {
    for (; h7(); )
      switch (h5) {
        case t11:
          return h3;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e11(h5);
          break;
        case 40:
          41 === t11 && e11(t11);
          break;
        case 92:
          h7();
      }
    return h3;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), hQ(h8, t10, r10)).trim();
}
function ma(e10, t10, r10, n9, a10, i10, o10, l10, s10, c10, u10) {
  for (var d7 = a10 - 1, f10 = 0 === a10 ? i10 : [""], p10 = f10.length, h10 = 0, m10 = 0, g10 = 0; h10 < n9; ++h10)
    for (var y2 = 0, b2 = hQ(e10, d7 + 1, d7 = hq(m10 = o10[h10])), w2 = e10; y2 < p10; ++y2)
      (w2 = (m10 > 0 ? f10[y2] + " " + b2 : hJ(b2, /&\f/g, f10[y2])).trim()) && (s10[g10++] = w2);
  return h6(e10, t10, r10, 0 === a10 ? hH : l10, s10, c10, u10);
}
function mi(e10, t10, r10, n9) {
  return h6(e10, t10, r10, hU, hQ(e10, 0, n9), hQ(e10, n9 + 1, -1), n9);
}
function mo(e10, t10) {
  for (var r10 = "", n9 = e10.length, a10 = 0; a10 < n9; a10++)
    r10 += t10(e10[a10], a10, e10, t10) || "";
  return r10;
}
function ml(e10, t10, r10, n9) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length)
        break;
    case "@import":
    case hU:
      return e10.return = e10.return || e10.value;
    case hW:
      return "";
    case hz:
      return e10.return = e10.value + "{" + mo(e10.children, n9) + "}";
    case hH:
      e10.value = e10.props.join(",");
  }
  return hZ(r10 = mo(e10.children, n9)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var ms = function(e10, t10, r10) {
  for (var n9 = 0, a10 = 0; n9 = a10, a10 = me(), 38 === n9 && 12 === a10 && (t10[r10] = 1), !mt(a10); )
    h7();
  return hQ(h8, e10, h3);
}, mc = function(e10, t10) {
  var r10 = -1, n9 = 44;
  do
    switch (mt(n9)) {
      case 0:
        38 === n9 && 12 === me() && (t10[r10] = 1), e10[r10] += ms(h3 - 1, t10, r10);
        break;
      case 2:
        e10[r10] += mn(n9);
        break;
      case 4:
        if (44 === n9) {
          e10[++r10] = 58 === me() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += hG(n9);
    }
  while (n9 = h7());
  return e10;
}, mu = function(e10, t10) {
  var r10;
  return r10 = mc(mr(e10), t10), h8 = "", r10;
}, md = /* @__PURE__ */ new WeakMap(), mf = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n9 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; )
      if (!(r10 = r10.parent))
        return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || md.get(r10)) && !n9) {
      md.set(e10, true);
      for (var a10 = [], i10 = mu(t10, a10), o10 = r10.props, l10 = 0, s10 = 0; l10 < i10.length; l10++)
        for (var c10 = 0; c10 < o10.length; c10++, s10++)
          e10.props[s10] = a10[l10] ? i10[l10].replace(/&\f/g, o10[c10]) : o10[c10] + " " + i10[l10];
    }
  }
}, mp = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, mh = [function(e10, t10, r10, n9) {
  if (e10.length > -1 && !e10.return)
    switch (e10.type) {
      case hU:
        e10.return = function e11(t11, r11) {
          switch (45 ^ hX(t11, 0) ? (((r11 << 2 ^ hX(t11, 0)) << 2 ^ hX(t11, 1)) << 2 ^ hX(t11, 2)) << 2 ^ hX(t11, 3) : 0) {
            case 5103:
              return hV + "print-" + t11 + t11;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
              return hV + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return hV + t11 + hN + t11 + hB + t11 + t11;
            case 6828:
            case 4268:
              return hV + t11 + hB + t11 + t11;
            case 6165:
              return hV + t11 + hB + "flex-" + t11 + t11;
            case 5187:
              return hV + t11 + hJ(t11, /(\w+).+(:[^]+)/, hV + "box-$1$2" + hB + "flex-$1$2") + t11;
            case 5443:
              return hV + t11 + hB + "flex-item-" + hJ(t11, /flex-|-self/, "") + t11;
            case 4675:
              return hV + t11 + hB + "flex-line-pack" + hJ(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return hV + t11 + hB + hJ(t11, "shrink", "negative") + t11;
            case 5292:
              return hV + t11 + hB + hJ(t11, "basis", "preferred-size") + t11;
            case 6060:
              return hV + "box-" + hJ(t11, "-grow", "") + hV + t11 + hB + hJ(t11, "grow", "positive") + t11;
            case 4554:
              return hV + hJ(t11, /([^-])(transform)/g, "$1" + hV + "$2") + t11;
            case 6187:
              return hJ(hJ(hJ(t11, /(zoom-|grab)/, hV + "$1"), /(image-set)/, hV + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return hJ(t11, /(image-set\([^]*)/, hV + "$1$`$1");
            case 4968:
              return hJ(hJ(t11, /(.+:)(flex-)?(.*)/, hV + "box-pack:$3" + hB + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + hV + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return hJ(t11, /(.+)-inline(.+)/, hV + "$1$2") + t11;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
              if (hZ(t11) - 1 - r11 > 6)
                switch (hX(t11, r11 + 1)) {
                  case 109:
                    if (45 !== hX(t11, r11 + 4))
                      break;
                  case 102:
                    return hJ(t11, /(.+:)(.+)-([^]+)/, "$1" + hV + "$2-$3$1" + hN + (108 == hX(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~hK(t11, "stretch") ? e11(hJ(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== hX(t11, r11 + 1))
                break;
            case 6444:
              switch (hX(t11, hZ(t11) - 3 - (~hK(t11, "!important") && 10))) {
                case 107:
                  return hJ(t11, ":", ":" + hV) + t11;
                case 101:
                  return hJ(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + hV + (45 === hX(t11, 14) ? "inline-" : "") + "box$3$1" + hV + "$2$3$1" + hB + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (hX(t11, r11 + 11)) {
                case 114:
                  return hV + t11 + hB + hJ(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return hV + t11 + hB + hJ(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return hV + t11 + hB + hJ(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return hV + t11 + hB + t11 + t11;
          }
          return t11;
        }(e10.value, e10.length);
        break;
      case hz:
        return mo([h9(e10, { value: hJ(e10.value, "@", "@" + hV) })], n9);
      case hH:
        if (e10.length) {
          var a10, i10;
          return a10 = e10.props, i10 = function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return mo([h9(e10, { props: [hJ(t11, /:(read-\w+)/, ":" + hN + "$1")] })], n9);
              case "::placeholder":
                return mo([h9(e10, { props: [hJ(t11, /:(plac\w+)/, ":" + hV + "input-$1")] }), h9(e10, { props: [hJ(t11, /:(plac\w+)/, ":" + hN + "$1")] }), h9(e10, { props: [hJ(t11, /:(plac\w+)/, hB + "input-$1")] })], n9);
            }
            return "";
          }, a10.map(i10).join("");
        }
    }
}], mm = function(e10) {
  var t10, r10, n9, a10, i10, o10, l10 = e10.key;
  if ("css" === l10) {
    var s10 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s10, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var c10 = e10.stylisPlugins || mh, u10 = {}, d7 = [];
  a10 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + l10 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++)
      u10[t11[r11]] = true;
    d7.push(e11);
  });
  var f10 = (r10 = (t10 = [mf, mp].concat(c10, [ml, (n9 = function(e11) {
    o10.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n9(e11);
  })])).length, function(e11, n10, a11, i11) {
    for (var o11 = "", l11 = 0; l11 < r10; l11++)
      o11 += t10[l11](e11, n10, a11, i11) || "";
    return o11;
  }), p10 = function(e11) {
    var t11, r11;
    return mo((r11 = function e12(t12, r12, n10, a11, i11, o11, l11, s11, c11) {
      for (var u11, d10 = 0, f11 = 0, p11 = l11, h11 = 0, m10 = 0, g10 = 0, y2 = 1, b2 = 1, w2 = 1, _2 = 0, x2 = "", k2 = i11, S2 = o11, O2 = a11, C2 = x2; b2; )
        switch (g10 = _2, _2 = h7()) {
          case 40:
            if (108 != g10 && 58 == hX(C2, p11 - 1)) {
              -1 != hK(C2 += hJ(mn(_2), "&", "&\f"), "&\f") && (w2 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            C2 += mn(_2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            C2 += function(e13) {
              for (; h5 = me(); )
                if (h5 < 33)
                  h7();
                else
                  break;
              return mt(e13) > 2 || mt(h5) > 3 ? "" : " ";
            }(g10);
            break;
          case 92:
            C2 += function(e13, t13) {
              for (var r13; --t13 && h7() && !(h5 < 48) && !(h5 > 102) && (!(h5 > 57) || !(h5 < 65)) && (!(h5 > 70) || !(h5 < 97)); )
                ;
              return r13 = h3 + (t13 < 6 && 32 == me() && 32 == h7()), hQ(h8, e13, r13);
            }(h3 - 1, 7);
            continue;
          case 47:
            switch (me()) {
              case 42:
              case 47:
                h0(h6(u11 = function(e13, t13) {
                  for (; h7(); )
                    if (e13 + h5 === 57)
                      break;
                    else if (e13 + h5 === 84 && 47 === me())
                      break;
                  return "/*" + hQ(h8, t13, h3 - 1) + "*" + hG(47 === e13 ? e13 : h7());
                }(h7(), h3), r12, n10, hW, hG(h5), hQ(u11, 2, -2), 0), c11);
                break;
              default:
                C2 += "/";
            }
            break;
          case 123 * y2:
            s11[d10++] = hZ(C2) * w2;
          case 125 * y2:
          case 59:
          case 0:
            switch (_2) {
              case 0:
              case 125:
                b2 = 0;
              case 59 + f11:
                -1 == w2 && (C2 = hJ(C2, /\f/g, "")), m10 > 0 && hZ(C2) - p11 && h0(m10 > 32 ? mi(C2 + ";", a11, n10, p11 - 1) : mi(hJ(C2, " ", "") + ";", a11, n10, p11 - 2), c11);
                break;
              case 59:
                C2 += ";";
              default:
                if (h0(O2 = ma(C2, r12, n10, d10, f11, i11, s11, x2, k2 = [], S2 = [], p11), o11), 123 === _2) {
                  if (0 === f11)
                    e12(C2, r12, O2, O2, k2, o11, p11, s11, S2);
                  else
                    switch (99 === h11 && 110 === hX(C2, 3) ? 100 : h11) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e12(t12, O2, O2, a11 && h0(ma(t12, O2, O2, 0, 0, i11, s11, x2, i11, k2 = [], p11), S2), i11, S2, p11, s11, a11 ? k2 : S2);
                        break;
                      default:
                        e12(C2, O2, O2, O2, [""], S2, 0, s11, S2);
                    }
                }
            }
            d10 = f11 = m10 = 0, y2 = w2 = 1, x2 = C2 = "", p11 = l11;
            break;
          case 58:
            p11 = 1 + hZ(C2), m10 = g10;
          default:
            if (y2 < 1) {
              if (123 == _2)
                --y2;
              else if (125 == _2 && 0 == y2++ && 125 == (h5 = h3 > 0 ? hX(h8, --h3) : 0, h2--, 10 === h5 && (h2 = 1, h1--), h5))
                continue;
            }
            switch (C2 += hG(_2), _2 * y2) {
              case 38:
                w2 = f11 > 0 ? 1 : (C2 += "\f", -1);
                break;
              case 44:
                s11[d10++] = (hZ(C2) - 1) * w2, w2 = 1;
                break;
              case 64:
                45 === me() && (C2 += mn(h7())), h11 = me(), f11 = p11 = hZ(x2 = C2 += function(e13) {
                  for (; !mt(me()); )
                    h7();
                  return hQ(h8, e13, h3);
                }(h3)), _2++;
                break;
              case 45:
                45 === g10 && 2 == hZ(C2) && (y2 = 0);
            }
        }
      return o11;
    }("", null, null, null, [""], t11 = mr(t11 = e11), 0, [0], t11), h8 = "", r11), f10);
  };
  i10 = function(e11, t11, r11, n10) {
    o10 = r11, p10(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n10 && (h10.inserted[t11.name] = true);
  };
  var h10 = { key: l10, sheet: new hF({ key: l10, container: a10, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: u10, registered: {}, insert: i10 };
  return h10.sheet.hydrate(d7), h10;
}, mg = function(e10, t10, r10) {
  var n9 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n9] && (e10.registered[n9] = t10.styles);
}, mv = function(e10, t10, r10) {
  mg(e10, t10, r10);
  var n9 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a10 = t10;
    do
      e10.insert(t10 === a10 ? "." + n9 : "", a10, e10.sheet, true), a10 = a10.next;
    while (void 0 !== a10);
  }
};
let my = c(() => mm({ key: "css" }), { name: "Cache" }), mb = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      mv(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, mw = Object.assign(s({ sx: z(), component: z().optional().default("div") }, (e10, t10) => {
  var r10;
  let { slots: n9, expose: a10 } = t10, i10 = hL.use(), o10 = my.use(), l10 = i10.unstable_css(o10, null !== (r10 = e10.sx) && void 0 !== r10 ? r10 : {}), s10 = () => "0" !== l10.name ? `${o10.key}-${l10.name}` : "", c10 = mb(o10);
  sN(() => {
    c10({ serialized: l10, isStringTag: true });
  });
  let d7 = u();
  return a10({ $$forwardRef: d7 }), () => {
    var t11;
    return O(null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div", { ref: d7, class: s10(), children: n9 });
  };
}), { displayName: "Box" }), m_ = (e10, t10) => (r10) => {
  let n9 = {};
  for (let t11 in e10)
    "component" !== t11 && "sx" !== t11 && e10[t11] && (n9[`data-${t11}`] = e10[t11]);
  return O(r10, { ...n9, children: t10.slots });
};
function mx(e10, t10, r10) {
  var n9;
  let a10 = null !== (n9 = V(t10) ? t10 : r10) && void 0 !== n9 ? n9 : m_, i10 = P(t10) ? t10 : {};
  return (t11) => {
    let r11 = s({ ...i10, sx: z().optional(), component: z().optional() }, (n10, i11) => {
      let o10 = hL.use(), l10 = my.use(), s10 = mb(l10);
      t11.label = r11.name;
      let c10 = lL(""), u10 = o10.unstable_css(l10, t11), d7 = () => "0" !== u10.name ? `${l10.key}-${u10.name}${c10.value}` : `${c10.value}`;
      if (e10.__styled) {
        var f10;
        let e11 = o10.unstable_css(l10, null !== (f10 = n10.sx) && void 0 !== f10 ? f10 : {});
        "0" !== e11.name && (c10.value = ` ${l10.key}-${e11.name}`), sN(() => {
          s10({ serialized: u10, isStringTag: true }), s10({ serialized: e11, isStringTag: true });
        });
      } else
        sB(() => {
          s10({ serialized: u10, isStringTag: true });
        });
      let p10 = a10(n10, i11);
      return () => {
        if (e10.__styled) {
          let t13 = p10(e10);
          return t13 ? cH(t13, { component: n10.component, class: d7() }) : null;
        }
        let t12 = p10(mw);
        return t12 ? cH(t12, { component: n10.component || e10, sx: n10.sx, class: d7() }) : null;
      };
    });
    return r11.__styled = true, r11;
  };
}
let mk = Object.assign(s({ styles: z() }, (e10) => {
  let { styles: t10 } = e10, r10 = hL.use(), n9 = my.use(), a10 = mb(n9), i10 = r10.unstable_css(n9, $(t10) ? { "&": t10 } : t10);
  return sB(() => {
    a10({ serialized: i10, withoutScoping: true });
  }), () => null;
}), { displayName: "GlobalStyle" }), mS = Object.assign(s(() => {
  let e10 = hL.use().rootCSSVars;
  return () => O(mk, { styles: { ":host, :root, [data-theme]": e10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), { displayName: "CSSReset" }), mO = c(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), mC = c(() => new mM(lL(null), lL(null), () => false), { name: "Overlay" });
class mM {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children)
        if (t11.isClickInside(e10))
          return true;
      let t10 = lV(this.triggerRef), r10 = lV(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let mA = Object.assign(s({ isOpen: G().optional(), style: z().optional(), contentRef: z().optional(), triggerRef: z().optional(), onClickOutside: z(), onEscKeydown: z(), onContentBeforeMount: z(), $transition: z().optional(), $default: z().optional() }, (e10, t10) => {
  var r10;
  let { slots: n9, attrs: a10, emit: i10 } = t10, o10 = e10.contentRef || lL(null), l10 = new mM(null !== (r10 = e10.triggerRef) && void 0 !== r10 ? r10 : lL(null), o10, () => !!e10.isOpen), s10 = mO.use();
  return sH(mC.use().add(l10)), window && d(f(o10, "value"), h((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      l10.isClickInside(e12) || i10("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), h((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      "Escape" === e12.key && l10.topmost() && i10("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), p()), () => {
    var t11;
    let r11 = e10.isOpen ? cH(O("div", { ...a10, ref: o10, style: e10.style, children: O(mC, { value: l10, children: null === (t11 = n9.default) || void 0 === t11 ? void 0 : t11.call(n9) }) }), { onVnodeBeforeMount: () => {
      i10("content-before-mount");
    } }) : null;
    return O(cT, { to: s10.mountPoint(), children: n9.transition ? n9.transition({ content: r11 }) : r11 });
  };
}, { inheritAttrs: false, name: "Overlay" }), { displayName: "Overlay" });
var mP = "bottom", mE = "right", mT = "left", mR = "auto", m$ = ["top", mP, mE, mT], mI = "start", mD = "viewport", mj = "popper", mL = m$.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + mI, t10 + "-end"]);
}, []), mF = [].concat(m$, [mR]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + mI, t10 + "-end"]);
}, []), mB = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function mN(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function mV(e10) {
  if (null == e10)
    return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function mW(e10) {
  var t10 = mV(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function mH(e10) {
  var t10 = mV(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function mU(e10) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = mV(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function mz(e10) {
  return e10.split("-")[0];
}
var mq = Math.max, mG = Math.min, mY = Math.round;
function mJ() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function mK() {
  return !/^((?!chrome|android).)*safari/i.test(mJ());
}
function mX(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n9 = e10.getBoundingClientRect(), a10 = 1, i10 = 1;
  t10 && mH(e10) && (a10 = e10.offsetWidth > 0 && mY(n9.width) / e10.offsetWidth || 1, i10 = e10.offsetHeight > 0 && mY(n9.height) / e10.offsetHeight || 1);
  var o10 = (mW(e10) ? mV(e10) : window).visualViewport, l10 = !mK() && r10, s10 = (n9.left + (l10 && o10 ? o10.offsetLeft : 0)) / a10, c10 = (n9.top + (l10 && o10 ? o10.offsetTop : 0)) / i10, u10 = n9.width / a10, d7 = n9.height / i10;
  return { width: u10, height: d7, top: c10, right: s10 + u10, bottom: c10 + d7, left: s10, x: s10, y: c10 };
}
function mQ(e10) {
  return mV(e10).getComputedStyle(e10);
}
function mZ(e10) {
  return ((mW(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function m0(e10) {
  return "html" === mN(e10) ? e10 : e10.assignedSlot || e10.parentNode || (mU(e10) ? e10.host : null) || mZ(e10);
}
function m1(e10) {
  return mH(e10) && "fixed" !== mQ(e10).position ? e10.offsetParent : null;
}
function m2(e10) {
  for (var t10 = mV(e10), r10 = m1(e10); r10 && ["table", "td", "th"].indexOf(mN(r10)) >= 0 && "static" === mQ(r10).position; )
    r10 = m1(r10);
  return r10 && ("html" === mN(r10) || "body" === mN(r10) && "static" === mQ(r10).position) ? t10 : r10 || function(e11) {
    var t11 = /firefox/i.test(mJ());
    if (/Trident/i.test(mJ()) && mH(e11) && "fixed" === mQ(e11).position)
      return null;
    var r11 = m0(e11);
    for (mU(r11) && (r11 = r11.host); mH(r11) && 0 > ["html", "body"].indexOf(mN(r11)); ) {
      var n9 = mQ(r11);
      if ("none" !== n9.transform || "none" !== n9.perspective || "paint" === n9.contain || -1 !== ["transform", "perspective"].indexOf(n9.willChange) || t11 && "filter" === n9.willChange || t11 && n9.filter && "none" !== n9.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function m4(e10) {
  return e10.split("-")[1];
}
var m3 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function m5(e10) {
  var t10, r10, n9, a10, i10, o10, l10, s10 = e10.popper, c10 = e10.popperRect, u10 = e10.placement, d7 = e10.variation, f10 = e10.offsets, p10 = e10.position, h10 = e10.gpuAcceleration, m10 = e10.adaptive, g10 = e10.roundOffsets, y2 = e10.isFixed, b2 = f10.x, w2 = void 0 === b2 ? 0 : b2, _2 = f10.y, x2 = void 0 === _2 ? 0 : _2, k2 = "function" == typeof g10 ? g10({ x: w2, y: x2 }) : { x: w2, y: x2 };
  w2 = k2.x, x2 = k2.y;
  var S2 = f10.hasOwnProperty("x"), O2 = f10.hasOwnProperty("y"), C2 = mT, M2 = "top", A2 = window;
  if (m10) {
    var P2 = m2(s10), E2 = "clientHeight", T2 = "clientWidth";
    P2 === mV(s10) && "static" !== mQ(P2 = mZ(s10)).position && "absolute" === p10 && (E2 = "scrollHeight", T2 = "scrollWidth"), ("top" === u10 || (u10 === mT || u10 === mE) && "end" === d7) && (M2 = mP, x2 -= (y2 && P2 === A2 && A2.visualViewport ? A2.visualViewport.height : P2[E2]) - c10.height, x2 *= h10 ? 1 : -1), (u10 === mT || ("top" === u10 || u10 === mP) && "end" === d7) && (C2 = mE, w2 -= (y2 && P2 === A2 && A2.visualViewport ? A2.visualViewport.width : P2[T2]) - c10.width, w2 *= h10 ? 1 : -1);
  }
  var R2 = Object.assign({ position: p10 }, m10 && m3), $2 = true === g10 ? (t10 = { x: w2, y: x2 }, r10 = mV(s10), n9 = t10.x, a10 = t10.y, { x: mY(n9 * (i10 = r10.devicePixelRatio || 1)) / i10 || 0, y: mY(a10 * i10) / i10 || 0 }) : { x: w2, y: x2 };
  return (w2 = $2.x, x2 = $2.y, h10) ? Object.assign({}, R2, ((l10 = {})[M2] = O2 ? "0" : "", l10[C2] = S2 ? "0" : "", l10.transform = 1 >= (A2.devicePixelRatio || 1) ? "translate(" + w2 + "px, " + x2 + "px)" : "translate3d(" + w2 + "px, " + x2 + "px, 0)", l10)) : Object.assign({}, R2, ((o10 = {})[M2] = O2 ? x2 + "px" : "", o10[C2] = S2 ? w2 + "px" : "", o10.transform = "", o10));
}
var m8 = { passive: true }, m6 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function m9(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return m6[e11];
  });
}
var m7 = { start: "end", end: "start" };
function ge(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return m7[e11];
  });
}
function gt(e10) {
  var t10 = mV(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function gr(e10) {
  return mX(mZ(e10)).left + gt(e10).scrollLeft;
}
function gn(e10) {
  var t10 = mQ(e10), r10 = t10.overflow, n9 = t10.overflowX, a10 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a10 + n9);
}
function ga(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n9 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(mN(t11)) >= 0 ? t11.ownerDocument.body : mH(t11) && gn(t11) ? t11 : e11(m0(t11));
  }(e10), a10 = n9 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), i10 = mV(n9), o10 = a10 ? [i10].concat(i10.visualViewport || [], gn(n9) ? n9 : []) : n9, l10 = t10.concat(o10);
  return a10 ? l10 : l10.concat(ga(m0(o10)));
}
function gi(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function go(e10, t10, r10) {
  var n9, a10, i10, o10, l10, s10, c10, u10, d7, f10;
  return t10 === mD ? gi(function(e11, t11) {
    var r11 = mV(e11), n10 = mZ(e11), a11 = r11.visualViewport, i11 = n10.clientWidth, o11 = n10.clientHeight, l11 = 0, s11 = 0;
    if (a11) {
      i11 = a11.width, o11 = a11.height;
      var c11 = mK();
      (c11 || !c11 && "fixed" === t11) && (l11 = a11.offsetLeft, s11 = a11.offsetTop);
    }
    return { width: i11, height: o11, x: l11 + gr(e11), y: s11 };
  }(e10, r10)) : mW(t10) ? ((n9 = mX(t10, false, "fixed" === r10)).top = n9.top + t10.clientTop, n9.left = n9.left + t10.clientLeft, n9.bottom = n9.top + t10.clientHeight, n9.right = n9.left + t10.clientWidth, n9.width = t10.clientWidth, n9.height = t10.clientHeight, n9.x = n9.left, n9.y = n9.top, n9) : gi((a10 = mZ(e10), o10 = mZ(a10), l10 = gt(a10), s10 = null == (i10 = a10.ownerDocument) ? void 0 : i10.body, c10 = mq(o10.scrollWidth, o10.clientWidth, s10 ? s10.scrollWidth : 0, s10 ? s10.clientWidth : 0), u10 = mq(o10.scrollHeight, o10.clientHeight, s10 ? s10.scrollHeight : 0, s10 ? s10.clientHeight : 0), d7 = -l10.scrollLeft + gr(a10), f10 = -l10.scrollTop, "rtl" === mQ(s10 || o10).direction && (d7 += mq(o10.clientWidth, s10 ? s10.clientWidth : 0) - c10), { width: c10, height: u10, x: d7, y: f10 }));
}
function gl(e10) {
  var t10, r10 = e10.reference, n9 = e10.element, a10 = e10.placement, i10 = a10 ? mz(a10) : null, o10 = a10 ? m4(a10) : null, l10 = r10.x + r10.width / 2 - n9.width / 2, s10 = r10.y + r10.height / 2 - n9.height / 2;
  switch (i10) {
    case "top":
      t10 = { x: l10, y: r10.y - n9.height };
      break;
    case mP:
      t10 = { x: l10, y: r10.y + r10.height };
      break;
    case mE:
      t10 = { x: r10.x + r10.width, y: s10 };
      break;
    case mT:
      t10 = { x: r10.x - n9.width, y: s10 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c10 = i10 ? ["top", "bottom"].indexOf(i10) >= 0 ? "x" : "y" : null;
  if (null != c10) {
    var u10 = "y" === c10 ? "height" : "width";
    switch (o10) {
      case mI:
        t10[c10] = t10[c10] - (r10[u10] / 2 - n9[u10] / 2);
        break;
      case "end":
        t10[c10] = t10[c10] + (r10[u10] / 2 - n9[u10] / 2);
    }
  }
  return t10;
}
function gs(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n9, a10, i10, o10, l10, s10, c10, u10 = t10, d7 = u10.placement, f10 = void 0 === d7 ? e10.placement : d7, p10 = u10.strategy, h10 = void 0 === p10 ? e10.strategy : p10, m10 = u10.boundary, g10 = u10.rootBoundary, y2 = u10.elementContext, b2 = void 0 === y2 ? mj : y2, w2 = u10.altBoundary, _2 = u10.padding, x2 = void 0 === _2 ? 0 : _2, k2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof x2 ? x2 : m$.reduce(function(e11, t11) {
    return e11[t11] = x2, e11;
  }, {})), S2 = e10.rects.popper, O2 = e10.elements[void 0 !== w2 && w2 ? b2 === mj ? "reference" : mj : b2], C2 = (r10 = mW(O2) ? O2 : O2.contextElement || mZ(e10.elements.popper), n9 = void 0 === m10 ? "clippingParents" : m10, a10 = void 0 === g10 ? mD : g10, s10 = (l10 = [].concat("clippingParents" === n9 ? (i10 = ga(m0(r10)), mW(o10 = ["absolute", "fixed"].indexOf(mQ(r10).position) >= 0 && mH(r10) ? m2(r10) : r10) ? i10.filter(function(e11) {
    return mW(e11) && function(e12, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11))
        return true;
      if (r11 && mU(r11)) {
        var n10 = t11;
        do {
          if (n10 && e12.isSameNode(n10))
            return true;
          n10 = n10.parentNode || n10.host;
        } while (n10);
      }
      return false;
    }(e11, o10) && "body" !== mN(e11);
  }) : []) : [].concat(n9), [a10]))[0], (c10 = l10.reduce(function(e11, t11) {
    var n10 = go(r10, t11, h10);
    return e11.top = mq(n10.top, e11.top), e11.right = mG(n10.right, e11.right), e11.bottom = mG(n10.bottom, e11.bottom), e11.left = mq(n10.left, e11.left), e11;
  }, go(r10, s10, h10))).width = c10.right - c10.left, c10.height = c10.bottom - c10.top, c10.x = c10.left, c10.y = c10.top, c10), M2 = mX(e10.elements.reference), A2 = gl({ reference: M2, element: S2, strategy: "absolute", placement: f10 }), P2 = gi(Object.assign({}, S2, A2)), E2 = b2 === mj ? P2 : M2, T2 = { top: C2.top - E2.top + k2.top, bottom: E2.bottom - C2.bottom + k2.bottom, left: C2.left - E2.left + k2.left, right: E2.right - C2.right + k2.right }, R2 = e10.modifiersData.offset;
  if (b2 === mj && R2) {
    var $2 = R2[f10];
    Object.keys(T2).forEach(function(e11) {
      var t11 = [mE, mP].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", mP].indexOf(e11) >= 0 ? "y" : "x";
      T2[e11] += $2[r11] * t11;
    });
  }
  return T2;
}
let gc = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n9 = e10.name;
  if (!t10.modifiersData[n9]._skip) {
    for (var a10 = r10.mainAxis, i10 = void 0 === a10 || a10, o10 = r10.altAxis, l10 = void 0 === o10 || o10, s10 = r10.fallbackPlacements, c10 = r10.padding, u10 = r10.boundary, d7 = r10.rootBoundary, f10 = r10.altBoundary, p10 = r10.flipVariations, h10 = void 0 === p10 || p10, m10 = r10.allowedAutoPlacements, g10 = t10.options.placement, y2 = mz(g10) === g10, b2 = s10 || (y2 || !h10 ? [m9(g10)] : function(e11) {
      if (mz(e11) === mR)
        return [];
      var t11 = m9(e11);
      return [ge(e11), t11, ge(t11)];
    }(g10)), w2 = [g10].concat(b2).reduce(function(e11, r11) {
      var n10, a11, i11, o11, l11, s11, f11, p11, g11, y3, b3, w3;
      return e11.concat(mz(r11) === mR ? (a11 = (n10 = { placement: r11, boundary: u10, rootBoundary: d7, padding: c10, flipVariations: h10, allowedAutoPlacements: m10 }).placement, i11 = n10.boundary, o11 = n10.rootBoundary, l11 = n10.padding, s11 = n10.flipVariations, p11 = void 0 === (f11 = n10.allowedAutoPlacements) ? mF : f11, 0 === (b3 = (y3 = (g11 = m4(a11)) ? s11 ? mL : mL.filter(function(e12) {
        return m4(e12) === g11;
      }) : m$).filter(function(e12) {
        return p11.indexOf(e12) >= 0;
      })).length && (b3 = y3), Object.keys(w3 = b3.reduce(function(e12, r12) {
        return e12[r12] = gs(t10, { placement: r12, boundary: i11, rootBoundary: o11, padding: l11 })[mz(r12)], e12;
      }, {})).sort(function(e12, t11) {
        return w3[e12] - w3[t11];
      })) : r11);
    }, []), _2 = t10.rects.reference, x2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), S2 = true, O2 = w2[0], C2 = 0; C2 < w2.length; C2++) {
      var M2 = w2[C2], A2 = mz(M2), P2 = m4(M2) === mI, E2 = ["top", mP].indexOf(A2) >= 0, T2 = E2 ? "width" : "height", R2 = gs(t10, { placement: M2, boundary: u10, rootBoundary: d7, altBoundary: f10, padding: c10 }), $2 = E2 ? P2 ? mE : mT : P2 ? mP : "top";
      _2[T2] > x2[T2] && ($2 = m9($2));
      var I2 = m9($2), D2 = [];
      if (i10 && D2.push(R2[A2] <= 0), l10 && D2.push(R2[$2] <= 0, R2[I2] <= 0), D2.every(function(e11) {
        return e11;
      })) {
        O2 = M2, S2 = false;
        break;
      }
      k2.set(M2, D2);
    }
    if (S2)
      for (var j2 = h10 ? 3 : 1, L2 = function(e11) {
        var t11 = w2.find(function(t12) {
          var r11 = k2.get(t12);
          if (r11)
            return r11.slice(0, e11).every(function(e12) {
              return e12;
            });
        });
        if (t11)
          return O2 = t11, "break";
      }, F2 = j2; F2 > 0 && "break" !== L2(F2); F2--)
        ;
    t10.placement !== O2 && (t10.modifiersData[n9]._skip = true, t10.placement = O2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var gu = { placement: "bottom", modifiers: [], strategy: "absolute" };
function gd() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var gf = (eK = void 0 === (eJ = (eY = { defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e10) {
  var t10 = e10.state, r10 = e10.instance, n9 = e10.options, a10 = n9.scroll, i10 = void 0 === a10 || a10, o10 = n9.resize, l10 = void 0 === o10 || o10, s10 = mV(t10.elements.popper), c10 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return i10 && c10.forEach(function(e11) {
    e11.addEventListener("scroll", r10.update, m8);
  }), l10 && s10.addEventListener("resize", r10.update, m8), function() {
    i10 && c10.forEach(function(e11) {
      e11.removeEventListener("scroll", r10.update, m8);
    }), l10 && s10.removeEventListener("resize", r10.update, m8);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r10 = e10.name;
  t10.modifiersData[r10] = gl({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n9 = r10.gpuAcceleration, a10 = r10.adaptive, i10 = r10.roundOffsets, o10 = void 0 === i10 || i10, l10 = { placement: mz(t10.placement), variation: m4(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n9 || n9, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, m5(Object.assign({}, l10, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a10 || a10, roundOffsets: o10 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, m5(Object.assign({}, l10, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: o10 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r10 = t10.styles[e11] || {}, n9 = t10.attributes[e11] || {}, a10 = t10.elements[e11];
    mH(a10) && mN(a10) && (Object.assign(a10.style, r10), Object.keys(n9).forEach(function(e12) {
      var t11 = n9[e12];
      false === t11 ? a10.removeAttribute(e12) : a10.setAttribute(e12, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e10) {
  var t10 = e10.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
    Object.keys(t10.elements).forEach(function(e11) {
      var n9 = t10.elements[e11], a10 = t10.attributes[e11] || {}, i10 = Object.keys(t10.styles.hasOwnProperty(e11) ? t10.styles[e11] : r10[e11]).reduce(function(e12, t11) {
        return e12[t11] = "", e12;
      }, {});
      mH(n9) && mN(n9) && (Object.assign(n9.style, i10), Object.keys(a10).forEach(function(e12) {
        n9.removeAttribute(e12);
      }));
    });
  };
}, requires: ["computeStyles"] }] }).defaultModifiers) ? [] : eJ, eQ = void 0 === (eX = eY.defaultOptions) ? gu : eX, function(e10, t10, r10) {
  void 0 === r10 && (r10 = eQ);
  var n9, a10, i10 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, gu, eQ), modifiersData: {}, elements: { reference: e10, popper: t10 }, attributes: {}, styles: {} }, o10 = [], l10 = false, s10 = { state: i10, setOptions: function(r11) {
    var n10, a11, l11, u10, d7, f10 = "function" == typeof r11 ? r11(i10.options) : r11;
    c10(), i10.options = Object.assign({}, eQ, i10.options, f10), i10.scrollParents = { reference: mW(e10) ? ga(e10) : e10.contextElement ? ga(e10.contextElement) : [], popper: ga(t10) };
    var p10 = (a11 = Object.keys(n10 = [].concat(eK, i10.options.modifiers).reduce(function(e11, t11) {
      var r12 = e11[t11.name];
      return e11[t11.name] = r12 ? Object.assign({}, r12, t11, { options: Object.assign({}, r12.options, t11.options), data: Object.assign({}, r12.data, t11.data) }) : t11, e11;
    }, {})).map(function(e11) {
      return n10[e11];
    }), l11 = /* @__PURE__ */ new Map(), u10 = /* @__PURE__ */ new Set(), d7 = [], a11.forEach(function(e11) {
      l11.set(e11.name, e11);
    }), a11.forEach(function(e11) {
      u10.has(e11.name) || function e12(t11) {
        u10.add(t11.name), [].concat(t11.requires || [], t11.requiresIfExists || []).forEach(function(t12) {
          if (!u10.has(t12)) {
            var r12 = l11.get(t12);
            r12 && e12(r12);
          }
        }), d7.push(t11);
      }(e11);
    }), mB.reduce(function(e11, t11) {
      return e11.concat(d7.filter(function(e12) {
        return e12.phase === t11;
      }));
    }, []));
    return i10.orderedModifiers = p10.filter(function(e11) {
      return e11.enabled;
    }), i10.orderedModifiers.forEach(function(e11) {
      var t11 = e11.name, r12 = e11.options, n11 = e11.effect;
      if ("function" == typeof n11) {
        var a12 = n11({ state: i10, name: t11, instance: s10, options: void 0 === r12 ? {} : r12 });
        o10.push(a12 || function() {
        });
      }
    }), s10.update();
  }, forceUpdate: function() {
    if (!l10) {
      var e11, t11, r11, n10, a11, o11, c11, u10, d7, f10, p10, h10, m10, g10, y2, b2 = i10.elements, w2 = b2.reference, _2 = b2.popper;
      if (gd(w2, _2)) {
        i10.rects = { reference: (t11 = m2(_2), r11 = "fixed" === i10.options.strategy, n10 = mH(t11), u10 = mH(t11) && (o11 = mY((a11 = t11.getBoundingClientRect()).width) / t11.offsetWidth || 1, c11 = mY(a11.height) / t11.offsetHeight || 1, 1 !== o11 || 1 !== c11), d7 = mZ(t11), f10 = mX(w2, u10, r11), p10 = { scrollLeft: 0, scrollTop: 0 }, h10 = { x: 0, y: 0 }, (n10 || !n10 && !r11) && (("body" !== mN(t11) || gn(d7)) && (p10 = (e11 = t11) !== mV(e11) && mH(e11) ? { scrollLeft: e11.scrollLeft, scrollTop: e11.scrollTop } : gt(e11)), mH(t11) ? (h10 = mX(t11, true), h10.x += t11.clientLeft, h10.y += t11.clientTop) : d7 && (h10.x = gr(d7))), { x: f10.left + p10.scrollLeft - h10.x, y: f10.top + p10.scrollTop - h10.y, width: f10.width, height: f10.height }), popper: (m10 = mX(_2), g10 = _2.offsetWidth, y2 = _2.offsetHeight, 1 >= Math.abs(m10.width - g10) && (g10 = m10.width), 1 >= Math.abs(m10.height - y2) && (y2 = m10.height), { x: _2.offsetLeft, y: _2.offsetTop, width: g10, height: y2 }) }, i10.reset = false, i10.placement = i10.options.placement, i10.orderedModifiers.forEach(function(e12) {
          return i10.modifiersData[e12.name] = Object.assign({}, e12.data);
        });
        for (var x2 = 0; x2 < i10.orderedModifiers.length; x2++) {
          if (true === i10.reset) {
            i10.reset = false, x2 = -1;
            continue;
          }
          var k2 = i10.orderedModifiers[x2], S2 = k2.fn, O2 = k2.options, C2 = void 0 === O2 ? {} : O2, M2 = k2.name;
          "function" == typeof S2 && (i10 = S2({ state: i10, options: C2, name: M2, instance: s10 }) || i10);
        }
      }
    }
  }, update: (n9 = function() {
    return new Promise(function(e11) {
      s10.forceUpdate(), e11(i10);
    });
  }, function() {
    return a10 || (a10 = new Promise(function(e11) {
      Promise.resolve().then(function() {
        a10 = void 0, e11(n9());
      });
    })), a10;
  }), destroy: function() {
    c10(), l10 = true;
  } };
  if (!gd(e10, t10))
    return s10;
  function c10() {
    o10.forEach(function(e11) {
      return e11();
    }), o10 = [];
  }
  return s10.setOptions(r10).then(function(e11) {
    !l10 && r10.onFirstUpdate && r10.onFirstUpdate(e11);
  }), s10;
});
let gp = Object.assign(s({ isOpen: mA.propTypes.isOpen, onClickOutside: mA.propTypes.onClickOutside, placement: z().optional(), modifiers: z().optional(), $transition: mA.propTypes.$transition, $content: z(), $default: z() }, (e10, t10) => {
  let { slots: r10, emit: n9, attrs: a10 } = t10, i10 = lL(null), o10 = lL(null);
  return sm(() => o10.value, (t11) => {
    if (t11 && i10.value) {
      var r11, n10;
      gf(i10.value, t11, { placement: null !== (r11 = e10.placement) && void 0 !== r11 ? r11 : "bottom", modifiers: [...null !== (n10 = e10.modifiers) && void 0 !== n10 ? n10 : [], gc] });
    }
  }), () => {
    var t11, l10;
    let s10 = null === (t11 = r10.default) || void 0 === t11 ? void 0 : t11.call(r10)[0];
    return s10 ? C(c$, { children: [cH(s10, { ...a10, onVnodeMounted: (e11) => {
      i10.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement)
            return t12;
          if (t12 instanceof Text)
            return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), O(mA, { triggerRef: i10, contentRef: o10, isOpen: e10.isOpen, onClickOutside: (e11) => n9("click-outside", e11), style: { zIndex: 100 }, $transition: r10.transition, children: null === (l10 = r10.content) || void 0 === l10 ? void 0 : l10.call(r10) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), { displayName: "Popper" }), gh = (e10) => !!e10 && e10.constructor === Object, gm = (e10) => {
  try {
    return Number(e10) === e10;
  } catch {
    return false;
  }
}, gg = (e10) => void 0 === e10;
function gv(e10, t10) {
  if (0 == t10.length)
    return e10;
  if (Array.isArray(e10)) {
    let [r10, ...n9] = t10;
    return gm(r10) ? gv(e10[r10], n9) : void 0;
  }
  if (gh(e10)) {
    let [r10, ...n9] = t10;
    return gv(e10[r10], n9);
  }
}
let gy = (e10, t10) => {
  let r10 = {};
  for (let [n9, a10] of Object.entries(e10))
    t10.includes(n9) && (r10[n9] = a10);
  return r10;
};
const _gb = class _gb extends m {
  constructor() {
    super(...arguments);
    __privateAdd(this, _r);
    __privateAdd(this, _n);
    __privateAdd(this, _e, er({ paramsSerializer: ea, transformRequestBody: ei }));
    __privateAdd(this, _t, new eo(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _gb({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return d(__privateGet(this, _t), el((t10) => {
      let r10 = t10.get(e10);
      return r10 ? ec(r10, r10.error$) : eu;
    }));
  }
  requesting$(e10) {
    return d(__privateGet(this, _t), el((t10) => {
      var r10, n9;
      return null !== (n9 = null === (r10 = t10.get(e10)) || void 0 === r10 ? void 0 : r10.requesting$) && void 0 !== n9 ? n9 : ed(false);
    }));
  }
  asRequestConfigCreator(e10) {
    if (!__privateGet(this, _t).value.get(e10)) {
      var t10, r10;
      let n9 = __privateMethod(this, _n, n_fn).call(this, e10);
      if (!n9)
        return null;
      let a10 = Object.keys(null !== (r10 = null === (t10 = n9.requestBody) || void 0 === t10 ? void 0 : t10.content) && void 0 !== r10 ? r10 : {})[0];
      return (e11) => {
        var t11, r11;
        return { method: n9.method, url: __privateGet(this, _r, r_get) + g_(n9.path, e11), params: gy(e11, null === (t11 = n9.parameters) || void 0 === t11 ? void 0 : t11.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...gy(e11, null === (r11 = n9.parameters) || void 0 === r11 ? void 0 : r11.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...a10 ? { "Content-Type": a10 } : {} }, body: e11.body, inputs: e11 };
      };
    }
    return null;
  }
  request(e10, t10) {
    let r10 = __privateGet(this, _t).value.get(e10);
    if (!r10) {
      let t11 = this.asRequestConfigCreator(e10);
      if (!t11)
        return;
      r10 = en(Object.assign(t11, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r10), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r10.next(t10);
  }
  operation$(e10) {
    return d(this, el((t10) => {
      for (let r10 of gw(t10, { operationId: e10 }))
        if (r10)
          return ed(r10);
      return ed(null);
    }));
  }
  operations$(e10) {
    return d(this, el((t10) => ed([...gw(t10, e10)])));
  }
  schema$(e10) {
    var t10, r10;
    let n9 = null !== (r10 = null === (t10 = e10.split("#/")[1]) || void 0 === t10 ? void 0 : t10.split("/")) && void 0 !== r10 ? r10 : [];
    return d(this, el((e11) => {
      if (n9) {
        var t11;
        return ed(null !== (t11 = gv(e11, n9)) && void 0 !== t11 ? t11 : null);
      }
      return ed(null);
    }), es((e11) => e11 ? { ...e11, $id: n9[n9.length - 1] } : e11));
  }
  schema(e10) {
    var t10, r10, n9;
    let a10 = null !== (r10 = null === (t10 = e10.split("#/")[1]) || void 0 === t10 ? void 0 : t10.split("/")) && void 0 !== r10 ? r10 : [];
    if (a10)
      return null !== (n9 = gv(this.value, a10)) && void 0 !== n9 ? n9 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_r = new WeakSet();
r_get = function() {
  var e10, t10, r10;
  return null !== (r10 = null === (t10 = this.value.servers) || void 0 === t10 ? void 0 : null === (e10 = t10[0]) || void 0 === e10 ? void 0 : e10.url) && void 0 !== r10 ? r10 : "";
};
_n = new WeakSet();
n_fn = function(e10) {
  for (let t10 of gw(this.value, { operationId: e10 }))
    if (t10)
      return t10;
  return null;
};
let gb = _gb;
function* gw(e10, t10) {
  for (let [i10, o10] of Object.entries(e10.paths))
    for (let [e11, l10] of Object.entries(o10)) {
      var r10, n9, a10;
      if ("OpenAPI" != l10.operationId && "OpenAPIView" != l10.operationId && (!t10.tag || (null !== (n9 = l10.tags) && void 0 !== n9 ? n9 : []).includes(t10.tag))) {
        if (t10.operationId) {
          if (t10.operationId.startsWith("*")) {
            if (!l10.operationId.includes(t10.operationId.slice(1)))
              continue;
          } else if (l10.operationId != t10.operationId)
            continue;
        }
        yield { ...l10, method: e11, path: i10, group: null !== (a10 = null === (r10 = l10.tags) || void 0 === r10 ? void 0 : r10[0]) && void 0 !== a10 ? a10 : "" };
      }
    }
}
let g_ = function(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, r10) => [].concat(t10[r10] || e11).join(","));
}, gx = c(() => gb.empty(), { name: "OpenAPI" });
var gk = Array, gS = tE((e0 = (eZ = tp.Array) && eZ.prototype) && e0.sort);
nQ({ target: "Array", proto: true }, { toSorted: function(e10) {
  return void 0 !== e10 && tq(e10), gS(ix(gk, nx(this)), e10);
} }), iK("toSorted");
let gO = (e10) => (t10, r10) => t10[e10] == r10[e10] ? 0 : t10[e10] < r10[e10] ? -1 : 1, gC = g((e10, t10) => {
  let {} = e10, {} = t10, r10 = gx.use(), n9 = new m({ operationId: void 0 }), a10 = new ef();
  d(a10, eh(200), ep((e11) => {
    n9.next((t11) => {
      t11.operationId = `*${null != e11 ? e11 : ""}`;
    });
  }), p());
  let i10 = d(n9, el((e11) => r10.operations$(e11)), y((e11) => {
    let t11 = Object.groupBy(e11, (e12) => e12.group);
    return C(gA, { children: [O(gP, { children: O("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e12) => {
      a10.next(e12.target.value);
    } }) }), O(gE, { sx: { flex: 1, overflow: "scroll" }, children: Object.entries(t11).toSorted().map((e12) => {
      let [t12, r11] = e12;
      return C("div", { "data-nav-group": true, children: [O("div", { "data-nav-group-heading": true, children: t12 }), O("div", { "data-nav-group-contents": true, children: null == r11 ? void 0 : r11.toSorted(gO("operationId")).map((e13) => {
        var t13;
        return C(gR, { component: b, to: `/operations/${e13.operationId}`, children: [O(mw, { "data-operation-method": true, sx: { color: null !== (t13 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e13.method]) && void 0 !== t13 ? t13 : "sys.secondary" }, children: e13.method }), C("div", { "data-operation-desc": true, children: [O("div", { "data-operation-id": true, children: e13.operationId }), e13.summary ? O("div", { "data-operation-summary": true, children: e13.summary != e13.operationId ? e13.summary : O("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => C(gM, { children: [i10, O(gT, { children: O(w, {}) })] });
}), gM = mx("div")({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), gA = mx("aside")({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), gP = mx("div")({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), gE = mx("div")({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), gT = mx("main")({ flex: 1, overflow: "hidden" }), gR = mx("a")({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), g$ = Object.assign(gC, { displayName: "OpenAPIView" });
var gI = tp.RegExp, gD = gI.prototype;
td && tu(function() {
  var e10 = true;
  try {
    gI(".", "d");
  } catch (t11) {
    e10 = false;
  }
  var t10 = {}, r10 = "", n9 = e10 ? "dgimsy" : "gimsy", a10 = function(e11, n10) {
    Object.defineProperty(t10, e11, { get: function() {
      return r10 += n10, true;
    } });
  }, i10 = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
  for (var o10 in e10 && (i10.hasIndices = "d"), i10)
    a10(o10, i10[o10]);
  return Object.getOwnPropertyDescriptor(gD, "flags").get.call(t10) !== n9 || r10 !== n9;
}) && nd(gD, "flags", { configurable: true, get: uX });
let gj = mx("div")({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), gL = mx("div", { deprecated: G().optional(), optional: G().optional(), nullable: G().optional() })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), gF = mx("div", { spacing: Y().optional().default(0), $default: z().optional() }, (e10, t10) => {
  let { slots: r10 } = t10, n9 = gV.use();
  return (t11) => {
    var a10;
    return O(t11, { style: { paddingLeft: `${n9.indent}em`, marginTop: 0.5 * e10.spacing }, children: null === (a10 = r10.default) || void 0 === a10 ? void 0 : a10.call(r10) });
  };
})({ position: "relative", display: "block" }), gB = mx("div", { schema: z() }, (e10, t10) => {
  let {} = t10;
  return (t11) => {
    var r10;
    let n9 = null !== (r10 = e10.schema.getMeta("description")) && void 0 !== r10 ? r10 : "";
    return 0 == n9.length ? null : O(t11, { children: O(ey, { text: n9 }) });
  };
})({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), gN = (e10) => {
  let { name: t10, value: r10, extra: n9 } = e10;
  return "" == r10 ? null : O(gY, { children: C(gq, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [O(gq, { sx: { color: "sys.primary" }, children: `@${t10}(` }), `${r10}`, Object.entries(null != n9 ? n9 : {}).map((e11) => {
    let [t11, r11] = e11;
    return C(c$, { children: [C(gq, { sx: { opacity: 0.5 }, children: [",", " "] }), O(gq, { sx: { opacity: 0.5 }, children: t11 }), C(gq, { sx: { opacity: 0.5 }, children: [":", " "] }), O(gq, { sx: { opacity: 0.7 }, children: r11 })] });
  }), O(gq, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, gV = c(() => ({ indent: 0 }), { name: "IntentContext" }), gW = s({ $default: z().optional() }, (e10, t10) => {
  let {} = e10, { slots: r10 } = t10, n9 = gV.use();
  return () => {
    var e11;
    return O(gV, { value: { indent: n9.indent + 1 }, children: null === (e11 = r10.default) || void 0 === e11 ? void 0 : e11.call(r10) });
  };
}), gH = g({ schema: z() }, (e10) => () => O(c$, { children: O(gX, { schema: e10.schema }) })), gU = g({ schema: z() }, (e10) => {
  let t10 = e10.schema;
  return t10.getSchema("$ref") ? O(gH, { schema: t10.unwrap }) : () => {
    var e11, r10, n9, a10, i10, o10, l10, s10;
    switch (t10.type) {
      case "union":
        return O(c$, { children: null === (e11 = t10.getSchema("oneOf")) || void 0 === e11 ? void 0 : e11.map((e12, t11) => C(c$, { children: [t11 > 0 && C(gq, { children: [" ", " | ", " "] }), O(gX, { schema: e12 })] })) });
      case "intersection":
        return O(gq, { children: null === (r10 = t10.getSchema("allOf")) || void 0 === r10 ? void 0 : r10.filter((e12) => !Object.keys(e12).length).map((e12, t11) => C(c$, { children: [t11 > 0 && C(gq, { children: [" ", "&", " "] }), O(gX, { schema: e12 })] })) });
      case "array":
        return C(gq, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [O(gq, { children: "Array<" }), O(gX, { schema: null !== (n9 = t10.getSchema("items")) && void 0 !== n9 ? n9 : K() }), O(gq, { children: ">" })] });
      case "object":
        return C(c$, { children: [O(gq, { children: "{" }), O(gK, { children: O(c$, { children: Object.entries(null !== (a10 = t10.getSchema("properties")) && void 0 !== a10 ? a10 : {}).map((e12) => {
          var r11;
          let [n10, a11] = e12;
          return a11 ? O(c$, { children: C(gY, { spacing: 2, children: [O(gJ, { schema: a11 }), C(gq, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [O(gG, { nullable: a11.getSchema("nullable"), deprecated: a11.getSchema("deprecated"), optional: !(null !== (r11 = t10.getSchema("required")) && void 0 !== r11 ? r11 : []).includes(n10), children: n10 }), O(gq, { sx: { mr: "1em" }, children: ":" }), O(gX, { schema: a11 })] })] }) }) : null;
        }) }) }), O(gq, { children: "}" })] });
      case "record":
        return C(c$, { children: [O(gq, { children: "{" }), t10.getSchema("additionalProperties") && O(c$, { children: O(gK, { children: C(gY, { children: [C(gq, { sx: { mr: 1 }, children: ["[K:", " "] }), O(gX, { schema: null !== (i10 = t10.getSchema("propertyNames")) && void 0 !== i10 ? i10 : J() }), C(gq, { sx: { mr: 1 }, children: ["]:", " "] }), O(gX, { schema: null !== (o10 = t10.getSchema("additionalProperties")) && void 0 !== o10 ? o10 : K() })] }) }) }), O(gq, { children: "}" })] });
      case "enums": {
        let e12 = null !== (l10 = t10.getSchema("enum")) && void 0 !== l10 ? l10 : [];
        if (1 == e12.length)
          return O(gq, { children: JSON.stringify(e12[0]) });
        let r11 = "any";
        return e12.length > 0 && (r11 = typeof e12[0]), C(c$, { children: [O(gq, { sx: { fontWeight: "bold" }, children: r11 }), O(gK, { children: e12.map((e13, r12) => {
          var n10;
          return O(gN, { name: "enum", value: `${e13}`, extra: (null === (n10 = t10.getMeta("enumLabels")) || void 0 === n10 ? void 0 : n10[r12]) ? { label: JSON.stringify(t10.getMeta("enumLabels")[r12]) } : {} }, e13);
        }) })] });
      }
    }
    let [c10, u10, d7] = [t10.type, t10.getSchema("format"), t10.getSchema("default")];
    return C(c$, { children: [O(gq, { sx: { fontWeight: "bold" }, children: c10 || "any" }), C(gK, { children: [u10 && O(gN, { name: "format", value: u10 }), !W(d7) && O(gN, { name: "default", value: d7 }), !gz(t10) && O(gN, { name: "validate", value: (s10 = t10).getSchema("x-tag-validate") ? s10.getSchema("x-tag-validate") : gz(s10) ? s10.getSchema("pattern") ? `@r/${String(s10.getSchema("pattern"))}/` : `@${s10.getSchema("exclusiveMinimum")} ? "(" : "["}${s10.getSchema("minProperties") ? s10.getSchema("minProperties") : s10.getSchema("minItems") ? s10.getSchema("minItems") : s10.getSchema("minimum") ? s10.getSchema("minimum") : s10.getSchema("minLength") ? s10.getSchema("minLength") : "string" === s10.type ? "0" : ("number" === s10.type || "integer" === s10.type) && s10.getSchema("format") ? `${Math.pow(2, Number(s10.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${s10.getSchema("maxProperties") ? s10.getSchema("maxProperties") : s10.getSchema("maxItems") ? s10.getSchema("maxItems") : s10.getSchema("maximum") ? s10.getSchema("maximum") : s10.getSchema("maxLength") ? s10.getSchema("maxLength") : "string" === s10.type && "uint64" === s10.getSchema("format") ? "19" : ("number" === s10.type || "integer" === s10.type) && s10.getSchema("format") ? `${Math.pow(2, Number(s10.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${s10.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
});
function gz(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t10) => e10.getSchema(t10));
}
let gq = Object.assign(gj, { displayName: "Token" }), gG = Object.assign(gL, { displayName: "PropName" }), gY = Object.assign(gF, { displayName: "Line" }), gJ = Object.assign(gB, { displayName: "Description" }), gK = Object.assign(gW, { displayName: "Indent" }), gX = Object.assign(gU, { displayName: "SchemaView" }), gQ = g({ code: z(), response: z() }, (e10) => {
  let t10 = gx.use();
  return () => {
    var r10, n9;
    return C(gZ, { children: [O(g0, { "data-failed": function(e11) {
      try {
        return Number(e11) >= 400;
      } catch (e12) {
        return false;
      }
    }(e10.code), children: e10.code }), C(mw, { sx: { pl: "4em" }, children: [O(c$, { children: null === (r10 = e10.response["x-status-return-errors"]) || void 0 === r10 ? void 0 : r10.map((e11) => function() {
      let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e12.startsWith("StatusError{") ? e12.slice(12, e12.length - 1).split(",").reduce((e13, t11) => {
        let [r11, n10] = t11.split("=", 2);
        return gg(r11) || gg(n10) ? e13 : { ...e13, [r11]: n10 };
      }, {}) : null;
    }(e11)).map((e11) => e11 ? O(mw, { sx: { mb: 16 }, children: C(gY, { spacing: 0, children: [C(gq, { children: ["{", " "] }), O(gK, { children: Object.entries(e11).map((e12) => {
      let [t11, r11] = e12;
      return "code" === t11 ? null : C(gY, { children: [O(gG, { children: t11 }), O(gq, { children: ": " }), O(gq, { children: r11 })] });
    }) }), C(gq, { children: [" ", "}"] })] }) }) : null) }), O(c$, { children: Object.entries(null !== (n9 = e10.response.content) && void 0 !== n9 ? n9 : {}).map((e11) => {
      let [r11, { schema: n10 }] = e11;
      return C(g1, { children: [O(gY, { spacing: 0, children: O(gX, { schema: X.decode(n10, (e12) => {
        var r12;
        return [null !== (r12 = t10.schema(e12)) && void 0 !== r12 ? r12 : {}, Q(e12)];
      }) }) }), O("div", { "data-content-type": true, children: r11 })] });
    }) })] })] });
  };
}), gZ = mx("section")({}), g0 = mx("div")({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), g1 = mx("section")({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), g2 = Object.assign(gQ, { displayName: "ResponseView" }), g4 = mx("div", { valued: G().optional(), focus: G().optional(), invalid: G().optional(), disabled: G().optional(), $label: z().optional(), $hint: z().optional(), $supporting: z().optional(), $leading: z().optional(), $trailing: z().optional(), $default: z() }, (e10, t10) => {
  let { slots: r10 } = t10;
  return (t11) => {
    var n9, a10, i10, o10;
    let l10 = e10.valued, s10 = e10.invalid, c10 = e10.disabled, u10 = (null !== (o10 = null === (n9 = r10.default) || void 0 === n9 ? void 0 : n9.call(r10)) && void 0 !== o10 ? o10 : []).map((e11) => {
      if ("input" === e11.type) {
        var t12, r11, n10, a11, i11, o11;
        return l10 = !!(null !== (i11 = null !== (a11 = null === (t12 = e11.props) || void 0 === t12 ? void 0 : t12.value) && void 0 !== a11 ? a11 : null === (r11 = e11.props) || void 0 === r11 ? void 0 : r11.placeholder) && void 0 !== i11 ? i11 : l10), c10 = null !== (o11 = null === (n10 = e11.props) || void 0 === n10 ? void 0 : n10.disabled) && void 0 !== o11 ? o11 : c10, cH(e11, { disabled: c10 });
      }
      return cH(e11);
    });
    return C(t11, { "data-valued": l10, "data-invalid": s10, "data-disabled": c10, "data-focus-within": e10.focus, "data-has-leading": !!r10.leading, "data-has-trailing": !!r10.trailing, children: [C("div", { "data-input-container": true, children: [C("div", { "data-input-decorator-container": true, children: [O("div", { "data-input-decorator-leading": true }), O("div", { "data-input-decorator-label": true, children: O("div", { "data-input-label": true, children: null === (a10 = r10.label) || void 0 === a10 ? void 0 : a10.call(r10) }) }), O("div", { "data-input-decorator-trailing": true })] }), C("div", { "data-input-row": true, children: [r10.leading && O(g3, { role: "leading", children: r10.leading() }), u10, r10.trailing && O(g3, { role: "trailing", children: r10.trailing() })] })] }), r10.supporting && O("div", { "data-input-supporting": true, children: null === (i10 = r10.supporting) || void 0 === i10 ? void 0 : i10.call(r10) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), g3 = mx("div", { role: Z(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), g5 = Object.assign(g4, { displayName: "TextField" }), g8 = g({ field$: z(), readOnly: G().optional() }, (e10, t10) => {
  let {} = t10, r10 = eO(gg(e10.field$.input) ? "" : eL.stringify(e10.field$.input));
  return () => O(mw, { sx: { position: "relative", width: "100%", minHeight: "8em", overflow: "hidden", py: 8 }, children: O(eC, { value: r10, children: O(g6, { field$: e10.field$, schema: e10.field$.typedef }) }) });
}), g6 = g({ field$: z(), schema: z() }, (e10) => {
  let t10 = eC.use();
  return d(e10.schema$, h((e11) => t10.use(() => [eF(), eR({ override: [eB(e11)] }), e$.of([{ key: "Shift-Space", shift: eI }]), eD(eN(e11)), e$.of([ej])])), p()), eM(() => eP.updateListener.of((t11) => {
    if (t11.focusChanged) {
      eE(t11.view), e10.field$.next((e11) => {
        e11.error = 0 == eT(t11.state) ? null : ["配置有误"];
      });
      return;
    }
    if (t11.docChanged) {
      if (eE(t11.view), eT(t11.state) > 0)
        e10.field$.next((e11) => {
          e11.error = ["配置有误"];
        });
      else
        try {
          let r10 = t11.state.doc.sliceString(0), n9 = eL.parse(r10);
          e10.field$.update(n9), e10.field$.next((e11) => {
            e11.error = null;
          });
        } catch (t12) {
          e10.field$.next((e11) => {
            e11.error = ["格式错误"];
          });
        }
    }
  })), () => O(eA, {});
}), g9 = Object.assign(g8, { displayName: "JSONCueEditorInput" }), g7 = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), ve = (e10) => {
  let { field: t10, value: r10 } = e10;
  return C(mw, { component: "span", sx: { display: "block" }, children: [C(mw, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t10, ":"] }), O("span", { children: r10 })] });
}, vt = (e10) => {
  let { method: t10, url: r10, params: n9 } = e10, a10 = ea(n9);
  return C(mw, { component: "span", sx: { fontWeight: "bold" }, children: [t10.toUpperCase(), " ", C(mw, { component: "span", sx: { fontWeight: "medium" }, children: [r10, a10 ? `?${a10}` : ""] }), "  HTTP/*"] });
}, vr = (e10, t10) => {
  let r10 = (t11, n9) => n9 instanceof File || n9 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t11}"${n9.name ? `; filename="${n9.name}"` : ""}
Content-Type: ${n9.type}

[File Content]
` : ee(n9) ? n9.map((e11) => r10(t11, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t11}"

${j(n9) ? JSON.stringify(n9) : String(n9)}
`;
  return Object.entries(t10).map((e11) => {
    let [t11, n9] = e11;
    return r10(t11, n9);
  }).join("\n") + `${e10}--`;
}, vn = s({ $default: z().optional() }, (e10, t10) => {
  let {} = e10, { slots: r10 } = t10;
  return () => {
    var e11;
    return O(mw, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: O(mw, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: O("code", { children: null === (e11 = r10.default) || void 0 === e11 ? void 0 : e11.call(r10) }) }) });
  };
}), va = s({ request: z() }, (e10) => () => {
  let t10 = e10.request;
  return C(vn, { children: [O(vt, { ...t10 }), O(c$, { children: Object.entries({ ...g7(), ...t10.headers }).toSorted().map((e11) => {
    let [t11, r10] = e11;
    return O(ve, { field: t11, value: r10 }, t11);
  }) }), t10.body && C(c$, { children: [O("br", {}), function(e11) {
    if (vs(e11.headers).includes("multipart/form-data")) {
      let t11 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t11}` }, vr(t11, e11.body);
    }
    return vs(e11.headers).includes("application/x-www-form-urlencoded") ? ea(e11.body) : vc(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t10)] })] });
}), vi = (e10) => Buffer.from(e10).toString("utf8"), vo = (e10, t10) => {
  let r10 = new Uint8Array(e10), n9 = "";
  for (let e11 = r10.byteLength, t11 = 0; t11 < e11; t11++)
    n9 += String.fromCharCode(r10[t11]);
  return `data:${t10};base64,${btoa(n9)}`;
}, vl = s({ response: z() }, (e10, t10) => {
  let {} = t10;
  return () => {
    let t11 = e10.response;
    return vs(t11.headers).includes("image/") ? O("div", { children: O("img", { src: vo(t11.body, vs(t11.headers)), alt: "" }) }) : C(vn, { children: [C("span", { children: ["HTTP/* ", t11.status] }), O("br", {}), t11.headers && O(c$, { children: Object.entries(t11.headers).map((e11) => {
      let [t12, r10] = e11;
      return O(ve, { field: t12, value: r10 }, t12);
    }) }), O("br", {}), t11.body ? vc(t11.headers) ? JSON.stringify(t11.body, null, 2) : `${vi(t11.body)}` : null] });
  };
});
function vs() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t10, r10] of Object.entries(e10))
    if ("content-type" == t10.toLowerCase())
      return r10;
  return "";
}
let vc = (e10) => vs(e10).includes("application/json"), vu = Object.assign(va, { displayName: "HttpRequest" }), vd = Object.assign(vl, { displayName: "HTTPResponse" }), vf = g({ operationID: J() }, (e10) => d(gx.use().response$(e10.operationID), y((e11) => O(vp, { children: O(vd, { response: e11 }) })))), vp = mx("section")({ maxHeight: "40vh", overflow: "auto" }), vh = Object.assign(vf, { displayName: "ResponsePreview" }), vm = g({ operation: z(), $default: z() }, (e10, t10) => {
  var r10, n9, a10, i10;
  let { slots: o10 } = t10, l10 = gx.use(), s10 = {};
  for (let t11 of null !== (r10 = e10.operation.parameters) && void 0 !== r10 ? r10 : []) {
    let e11 = X.decode(t11.schema, (e12) => {
      var t12;
      return [null !== (t12 = l10.schema(e12)) && void 0 !== t12 ? t12 : {}, Q(e12)];
    }).use(eb(`${t11.name}, in=${JSON.stringify(t11.in)}`));
    t11.required || (e11 = e11.optional()), ["object", "array"].includes(null !== (n9 = t11.schema.type) && void 0 !== n9 ? n9 : "") ? s10[t11.name] = e11.use(ew(g9)) : s10[t11.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t11 = Object.entries(null !== (a10 = e10.operation.requestBody.content) && void 0 !== a10 ? a10 : {})[0];
    if (t11) {
      let [e11, r11] = t11, n10 = X.decode(null !== (i10 = r11.schema) && void 0 !== i10 ? i10 : {}, (e12) => {
        var t12;
        return [null !== (t12 = l10.schema(e12)) && void 0 !== t12 ? t12 : {}, Q(e12)];
      }).use(eb(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("json") ? s10.body = n10.use(ew(g9)) : e11.includes("octet-stream") ? s10.body = n10.use(ew(v_)) : s10.body = n10;
    }
  }
  let c10 = _(), u10 = x(), f10 = e_.of(et(s10), (() => {
    try {
      var e11;
      let t11 = u10.query.params;
      return JSON.parse(atob(null !== (e11 = Array.isArray(t11) ? t11[0] : t11) && void 0 !== e11 ? e11 : ""));
    } catch (e12) {
    }
    return {};
  })());
  d(f10, ep((t11) => {
    l10.request(e10.operation.operationId, t11);
  }), ep((e11) => {
    c10.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), p());
  let h10 = d(f10.inputs$, y((t11) => {
    let r11 = l10.asRequestConfigCreator(e10.operation.operationId);
    return r11 ? O(vu, { request: r11(t11) }) : null;
  }));
  return () => {
    var t11;
    return C(mw, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), f10.submit();
    }, children: [O(mw, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: [...f10.fields(f10.typedef)].map((e11) => O(vg, { field$: e11 })) }), O(mw, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: C(mw, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [h10, O(mw, { sx: { px: 8 }, children: O(ex, { type: "submit", children: "发起请求" }) }), O(vh, { operationID: e10.operation.operationId }), O(mw, { sx: { flex: 1, overflow: "auto" }, children: null === (t11 = o10.default) || void 0 === t11 ? void 0 : t11.call(o10) })] }) })] }, e10.operation.operationId);
  };
}), vg = g({ field$: z() }, (e10, t10) => {
  let { field$: r10 } = e10, { render: n9 } = t10;
  return sU(() => {
    r10.destroy();
  }), d(em([r10, r10.input$]), n9((e11) => {
    var t11, n10, a10, i10, o10;
    let [l10, s10] = e11, c10 = null !== (a10 = null === (t11 = r10.meta) || void 0 === t11 ? void 0 : t11.input) && void 0 !== a10 ? a10 : vw, u10 = null !== (i10 = null === (n10 = r10.meta) || void 0 === n10 ? void 0 : n10.readOnlyWhenInitialExist) && void 0 !== i10 && i10 && !!l10.initial;
    return O(g5, { valued: !gg(null != s10 ? s10 : l10.initial), invalid: !!l10.error, focus: !!l10.focus, $label: C("span", { children: [null !== (o10 = r10.meta.label) && void 0 !== o10 ? o10 : r10.name, r10.optional ? "（非必填）" : ""] }), $supporting: C(gY, { children: [O(gJ, { schema: r10.typedef }), O(gX, { schema: r10.typedef })] }), $trailing: c10.$trailing, children: O(c10, { field$: r10, readOnly: u10 }) });
  }));
}), vv = s({ readOnly: G().optional(), field$: z() }, (e10) => () => {
  let { readOnly: t10, field$: r10, ...n9 } = e10;
  return O("input", { ...n9, "data-input": true, type: "text", readonly: t10, name: r10.name, value: r10.input, onChange: (e11) => {
    r10.update(e11.target.value);
  }, onFocus: () => r10.focus(), onBlur: () => r10.blur() });
}), vy = g({ field$: z(), readOnly: G().optional(), accept: J().optional() }, (e10) => {
  let t10 = k(null);
  return d(t10, ep((t11) => {
    t11 && e10.field$.update(t11);
  }), S()), () => {
    var r10;
    let { readOnly: n9, accept: a10 } = e10;
    return C(mw, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [O("input", { type: "file", name: e10.field$.name, readonly: n9, accept: a10, "data-file-input": true, onChange: (e11) => {
      var r11;
      let n10 = null === (r11 = e11.target.files) || void 0 === r11 ? void 0 : r11[0];
      n10 && (t10.value = n10);
    } }), O(eS, { path: ek }), O("span", { children: null === (r10 = t10.value) || void 0 === r10 ? void 0 : r10.name })] });
  };
}), vb = Object.assign(vm, { displayName: "RequestBuilder" }), vw = Object.assign(vv, { displayName: "TextInput" }), v_ = Object.assign(vy, { displayName: "FileSelectInput" }), vx = g({ operationId: J() }, (e10, t10) => {
  let {} = t10, r10 = gx.use(), n9 = d(e10.operationId$, el((e11) => r10.operation$(e11))), a10 = d(n9, eg((e11) => !!e11)), i10 = d(a10, y((e11) => {
    var t11;
    return C(vS, { sx: { containerStyle: null !== (t11 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method]) && void 0 !== t11 ? t11 : "sys.secondary-container" }, children: [O("div", { "data-operation-method": true, children: e11.method }), C("div", { "data-operation-desc": true, children: [O("div", { "data-operation-path": true, children: e11.path }), C("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] })] });
  })), o10 = d(a10, y((e11) => O("span", { children: e11.description }))), l10 = d(a10, y((e11) => {
    var t11;
    return O(vb, { operation: e11, children: O(c$, { children: Object.entries(null !== (t11 = e11.responses) && void 0 !== t11 ? t11 : {}).map((e12) => {
      let [t12, r11] = e12;
      return O(g2, { code: t12, response: r11 }, t12);
    }) }) }, e11.operationId);
  }));
  return d(n9, y((e11) => e11 ? C(vk, { children: [i10, C(mw, { sx: { flex: 1, overflow: "hidden", py: 24, display: "flex", flexDirection: "column", alignItems: "stretch" }, children: [o10, O(mw, { sx: { flex: 1, overflow: "auto" }, children: l10 })] })] }, e11.operationId) : null));
}), vk = mx("div")({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), vS = mx("div")({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } }), vO = Object.assign(vx, { displayName: "OperationView" }), vC = {}, vM = function(e10, t10, r10) {
  let n9 = Promise.resolve();
  if (t10 && t10.length > 0) {
    let e11 = document.getElementsByTagName("link"), a10 = document.querySelector("meta[property=csp-nonce]"), i10 = (null == a10 ? void 0 : a10.nonce) || (null == a10 ? void 0 : a10.getAttribute("nonce"));
    n9 = Promise.all(t10.map((t11) => {
      if ((t11 = "/__APP_BASE_HREF__/" + t11) in vC)
        return;
      vC[t11] = true;
      let n10 = t11.endsWith(".css");
      if (r10)
        for (let r11 = e11.length - 1; r11 >= 0; r11--) {
          let a12 = e11[r11];
          if (a12.href === t11 && (!n10 || "stylesheet" === a12.rel))
            return;
        }
      else if (document.querySelector(`link[href="${t11}"]${n10 ? '[rel="stylesheet"]' : ""}`))
        return;
      let a11 = document.createElement("link");
      if (a11.rel = n10 ? "stylesheet" : "modulepreload", n10 || (a11.as = "script", a11.crossOrigin = ""), a11.href = t11, i10 && a11.setAttribute("nonce", i10), document.head.appendChild(a11), n10)
        return new Promise((e12, r11) => {
          a11.addEventListener("load", e12), a11.addEventListener("error", () => r11(Error(`Unable to preload CSS for ${t11}`)));
        });
    }));
  }
  return n9.then(() => e10()).catch((e11) => {
    let t11 = new Event("vite:preloadError", { cancelable: true });
    if (t11.payload = e11, window.dispatchEvent(t11), !t11.defaultPrevented)
      throw e11;
  });
}, vA = [{ name: "operations", path: "/operations", component: () => vM(() => Promise.resolve().then(() => vP), true ? void 0 : void 0), children: [{ name: "operations-operationId", path: ":operationId", component: () => vM(() => Promise.resolve().then(() => vE), true ? void 0 : void 0), props: true }], props: true }, { name: "index", path: "/", component: Object.assign(s(() => () => O(g$, {})), { displayName: "IndexDefault" }), props: true }], vP = Object.freeze(Object.defineProperty({ __proto__: null, default: Object.assign(s(() => () => O(g$, {})), { displayName: "OperationsDefault" }) }, Symbol.toStringTag, { value: "Module" })), vE = Object.freeze(Object.defineProperty({ __proto__: null, default: Object.assign(s({ operationId: J() }, (e10) => () => O(vO, { operationId: e10.operationId }, e10.operationId)), { displayName: "OperationIdDefault" }) }, Symbol.toStringTag, { value: "Module" }));
export {
  mS as C,
  c$ as F,
  mk as G,
  mA as O,
  gp as P,
  hL as T,
  pX as a,
  lF as b,
  lk as c,
  ca as d,
  sT as e,
  c6 as f,
  lL as g,
  c9 as h,
  cF as i,
  lz as j,
  sN as k,
  to as l,
  p5 as m,
  l3 as n,
  sH as o,
  cn as p,
  cH as q,
  lx as r,
  mx as s,
  p3 as t,
  lV as u,
  pZ as v,
  sm as w,
  gx as x,
  vA as y,
  uT as z
};
