var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
(function() {
  let e10 = document.createElement("link").relList;
  if (!(e10 && e10.supports && e10.supports("modulepreload"))) {
    for (let e11 of document.querySelectorAll('link[rel="modulepreload"]')) t2(e11);
    new MutationObserver((e11) => {
      for (let r2 of e11) if ("childList" === r2.type) for (let e12 of r2.addedNodes) "LINK" === e12.tagName && "modulepreload" === e12.rel && t2(e12);
    }).observe(document, { childList: true, subtree: true });
  }
  function t2(e11) {
    if (e11.ep) return;
    e11.ep = true;
    let t3 = function(e12) {
      let t4 = {};
      return e12.integrity && (t4.integrity = e12.integrity), e12.referrerPolicy && (t4.referrerPolicy = e12.referrerPolicy), "use-credentials" === e12.crossOrigin ? t4.credentials = "include" : "anonymous" === e12.crossOrigin ? t4.credentials = "omit" : t4.credentials = "same-origin", t4;
    }(e11);
    fetch(e11.href, t3);
  }
})();
let e = (e10) => void 0 === e10, t = (e10) => Object.is(e10, null), r = (e10) => !!e10 && "object" == typeof e10, n = (e10) => !!e10 && e10.constructor == Object, i = (e10) => Array.isArray(e10), a = (e10) => "number" == typeof e10 && !Number.isNaN(e10), o = (e10) => "number" == typeof e10 && !Number.isNaN(e10) && Number.isInteger(e10), s = (e10) => "boolean" == typeof e10, c = (e10) => "string" == typeof e10, l = (e10) => "object" == typeof e10 && "function" == typeof e10[Symbol.iterator], u = (e10) => "function" == typeof e10 && `${e10}`.startsWith("class"), f = (e10) => !!(e10 && e10.constructor && e10.call && e10.apply);
var d, p, h, y, m = Symbol.for("immer-nothing"), v = Symbol.for("immer-draftable"), g = Symbol.for("immer-state");
function b(e10) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
  throw Error(`[Immer] minified error nr: ${e10}. Full error at: https://bit.ly/3cXEKWf`);
}
var w = Object.getPrototypeOf;
function _(e10) {
  return !!e10 && !!e10[g];
}
function O(e10) {
  var _a2;
  return !!e10 && (j(e10) || Array.isArray(e10) || !!e10[v] || !!((_a2 = e10.constructor) == null ? void 0 : _a2[v]) || A(e10) || N(e10));
}
var P = Object.prototype.constructor.toString();
function j(e10) {
  if (!e10 || "object" != typeof e10) return false;
  let t2 = w(e10);
  if (null === t2) return true;
  let r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === P;
}
function S(e10, t2) {
  0 === M(e10) ? Reflect.ownKeys(e10).forEach((r2) => {
    t2(r2, e10[r2], e10);
  }) : e10.forEach((r2, n2) => t2(n2, r2, e10));
}
function M(e10) {
  let t2 = e10[g];
  return t2 ? t2.type_ : Array.isArray(e10) ? 1 : A(e10) ? 2 : N(e10) ? 3 : 0;
}
function x(e10, t2) {
  return 2 === M(e10) ? e10.has(t2) : Object.prototype.hasOwnProperty.call(e10, t2);
}
function E(e10, t2, r2) {
  let n2 = M(e10);
  2 === n2 ? e10.set(t2, r2) : 3 === n2 ? e10.add(r2) : e10[t2] = r2;
}
function A(e10) {
  return e10 instanceof Map;
}
function N(e10) {
  return e10 instanceof Set;
}
function $(e10) {
  return e10.copy_ || e10.base_;
}
function T(e10, t2) {
  if (A(e10)) return new Map(e10);
  if (N(e10)) return new Set(e10);
  if (Array.isArray(e10)) return Array.prototype.slice.call(e10);
  let r2 = j(e10);
  if (true !== t2 && ("class_only" !== t2 || r2)) {
    let t3 = w(e10);
    return null !== t3 && r2 ? { ...e10 } : Object.assign(Object.create(t3), e10);
  }
  {
    let t3 = Object.getOwnPropertyDescriptors(e10);
    delete t3[g];
    let r3 = Reflect.ownKeys(t3);
    for (let n2 = 0; n2 < r3.length; n2++) {
      let i2 = r3[n2], a2 = t3[i2];
      false === a2.writable && (a2.writable = true, a2.configurable = true), (a2.get || a2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: a2.enumerable, value: e10[i2] });
    }
    return Object.create(w(e10), t3);
  }
}
function R(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return z(e10) || _(e10) || !O(e10) || (M(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = k), Object.freeze(e10), t2 && Object.entries(e10).forEach((e11) => {
    let [t3, r2] = e11;
    return R(r2, true);
  })), e10;
}
function k() {
  b(2);
}
function z(e10) {
  return Object.isFrozen(e10);
}
var F = {};
function D(e10) {
  let t2 = F[e10];
  return t2 || b(0, e10), t2;
}
function I(e10, t2) {
  t2 && (D("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t2);
}
function K(e10) {
  C(e10), e10.drafts_.forEach(q), e10.drafts_ = null;
}
function C(e10) {
  e10 === h && (h = e10.parent_);
}
function L(e10) {
  return h = { drafts_: [], parent_: h, immer_: e10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function q(e10) {
  let t2 = e10[g];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function W(e10, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e10 && e10 !== r2 ? (r2[g].modified_ && (K(t2), b(4)), O(e10) && (e10 = V(t2, e10), t2.parent_ || H(t2, e10)), t2.patches_ && D("Patches").generateReplacementPatches_(r2[g].base_, e10, t2.patches_, t2.inversePatches_)) : e10 = V(t2, r2, []), K(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e10 !== m ? e10 : void 0;
}
function V(e10, t2, r2) {
  if (z(t2)) return t2;
  let n2 = t2[g];
  if (!n2) return S(t2, (i2, a2) => J(e10, n2, t2, i2, a2, r2)), t2;
  if (n2.scope_ !== e10) return t2;
  if (!n2.modified_) return H(e10, n2.base_, true), n2.base_;
  if (!n2.finalized_) {
    n2.finalized_ = true, n2.scope_.unfinalizedDrafts_--;
    let t3 = n2.copy_, i2 = t3, a2 = false;
    3 === n2.type_ && (i2 = new Set(t3), t3.clear(), a2 = true), S(i2, (i3, o2) => J(e10, n2, t3, i3, o2, r2, a2)), H(e10, t3, false), r2 && e10.patches_ && D("Patches").generatePatches_(n2, r2, e10.patches_, e10.inversePatches_);
  }
  return n2.copy_;
}
function J(e10, t2, r2, n2, i2, a2, o2) {
  if (_(i2)) {
    let o3 = V(e10, i2, a2 && t2 && 3 !== t2.type_ && !x(t2.assigned_, n2) ? a2.concat(n2) : void 0);
    if (E(r2, n2, o3), !_(o3)) return;
    e10.canAutoFreeze_ = false;
  } else o2 && r2.add(i2);
  if (O(i2) && !z(i2)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1) return;
    V(e10, i2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof n2 && Object.prototype.propertyIsEnumerable.call(r2, n2) && H(e10, i2);
  }
}
function H(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && R(t2, r2);
}
var U = { get(e10, t2) {
  if (t2 === g) return e10;
  let r2 = $(e10);
  if (!x(r2, t2)) return function(e11, t3, r3) {
    var _a2;
    let n3 = X(t3, r3);
    return n3 ? "value" in n3 ? n3.value : (_a2 = n3.get) == null ? void 0 : _a2.call(e11.draft_) : void 0;
  }(e10, r2, t2);
  let n2 = r2[t2];
  return e10.finalized_ || !O(n2) ? n2 : n2 === G(e10.base_, t2) ? (Y(e10), e10.copy_[t2] = Z(n2, e10)) : n2;
}, has: (e10, t2) => t2 in $(e10), ownKeys: (e10) => Reflect.ownKeys($(e10)), set(e10, t2, r2) {
  let n2 = X($(e10), t2);
  if (n2 == null ? void 0 : n2.set) return n2.set.call(e10.draft_, r2), true;
  if (!e10.modified_) {
    let n3 = G($(e10), t2), i2 = n3 == null ? void 0 : n3[g];
    if (i2 && i2.base_ === r2) return e10.copy_[t2] = r2, e10.assigned_[t2] = false, true;
    if ((r2 === n3 ? 0 !== r2 || 1 / r2 == 1 / n3 : r2 != r2 && n3 != n3) && (void 0 !== r2 || x(e10.base_, t2))) return true;
    Y(e10), Q(e10);
  }
  return !!(e10.copy_[t2] === r2 && (void 0 !== r2 || t2 in e10.copy_) || Number.isNaN(r2) && Number.isNaN(e10.copy_[t2])) || (e10.copy_[t2] = r2, e10.assigned_[t2] = true, true);
}, deleteProperty: (e10, t2) => (void 0 !== G(e10.base_, t2) || t2 in e10.base_ ? (e10.assigned_[t2] = false, Y(e10), Q(e10)) : delete e10.assigned_[t2], e10.copy_ && delete e10.copy_[t2], true), getOwnPropertyDescriptor(e10, t2) {
  let r2 = $(e10), n2 = Reflect.getOwnPropertyDescriptor(r2, t2);
  return n2 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t2, enumerable: n2.enumerable, value: r2[t2] } : n2;
}, defineProperty() {
  b(11);
}, getPrototypeOf: (e10) => w(e10.base_), setPrototypeOf() {
  b(12);
} }, B = {};
function G(e10, t2) {
  let r2 = e10[g];
  return (r2 ? $(r2) : e10)[t2];
}
function X(e10, t2) {
  if (!(t2 in e10)) return;
  let r2 = w(e10);
  for (; r2; ) {
    let e11 = Object.getOwnPropertyDescriptor(r2, t2);
    if (e11) return e11;
    r2 = w(r2);
  }
}
function Q(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && Q(e10.parent_));
}
function Y(e10) {
  e10.copy_ || (e10.copy_ = T(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function Z(e10, t2) {
  let r2 = A(e10) ? D("MapSet").proxyMap_(e10, t2) : N(e10) ? D("MapSet").proxySet_(e10, t2) : function(e11, t3) {
    let r3 = Array.isArray(e11), n2 = { type_: r3 ? 1 : 0, scope_: t3 ? t3.scope_ : h, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = n2, a2 = U;
    r3 && (i2 = [n2], a2 = B);
    let { revoke: o2, proxy: s2 } = Proxy.revocable(i2, a2);
    return n2.draft_ = s2, n2.revoke_ = o2, s2;
  }(e10, t2);
  return (t2 ? t2.scope_ : h).drafts_.push(r2), r2;
}
S(U, (e10, t2) => {
  B[e10] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), B.deleteProperty = function(e10, t2) {
  return B.set.call(this, e10, t2, void 0);
}, B.set = function(e10, t2, r2) {
  return U.set.call(this, e10[0], t2, r2, e10[0]);
};
var ee = new class {
  constructor(e10) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e11, t2, r2) => {
      let n2;
      if ("function" == typeof e11 && "function" != typeof t2) {
        let r3 = t2;
        t2 = e11;
        let n3 = this;
        return function() {
          let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r3;
          for (var i2 = arguments.length, a2 = Array(i2 > 1 ? i2 - 1 : 0), o2 = 1; o2 < i2; o2++) a2[o2 - 1] = arguments[o2];
          return n3.produce(e12, (e13) => t2.call(this, e13, ...a2));
        };
      }
      if ("function" != typeof t2 && b(6), void 0 !== r2 && "function" != typeof r2 && b(7), O(e11)) {
        let i2 = L(this), a2 = Z(e11, void 0), o2 = true;
        try {
          n2 = t2(a2), o2 = false;
        } finally {
          o2 ? K(i2) : C(i2);
        }
        return I(i2, r2), W(n2, i2);
      }
      if (e11 && "object" == typeof e11) b(1, e11);
      else {
        if (void 0 === (n2 = t2(e11)) && (n2 = e11), n2 === m && (n2 = void 0), this.autoFreeze_ && R(n2, true), r2) {
          let t3 = [], i2 = [];
          D("Patches").generateReplacementPatches_(e11, n2, t3, i2), r2(t3, i2);
        }
        return n2;
      }
    }, this.produceWithPatches = (e11, t2) => {
      let r2, n2;
      if ("function" == typeof e11) {
        var i2 = this;
        return function(t3) {
          for (var r3 = arguments.length, n3 = Array(r3 > 1 ? r3 - 1 : 0), a2 = 1; a2 < r3; a2++) n3[a2 - 1] = arguments[a2];
          return i2.produceWithPatches(t3, (t4) => e11(t4, ...n3));
        };
      }
      return [this.produce(e11, t2, (e12, t3) => {
        r2 = e12, n2 = t3;
      }), r2, n2];
    }, "boolean" == typeof (e10 == null ? void 0 : e10.autoFreeze) && this.setAutoFreeze(e10.autoFreeze), "boolean" == typeof (e10 == null ? void 0 : e10.useStrictShallowCopy) && this.setUseStrictShallowCopy(e10.useStrictShallowCopy);
  }
  createDraft(e10) {
    var t2;
    O(e10) || b(8), _(e10) && (_(t2 = e10) || b(10, t2), e10 = function e11(t3) {
      let r3;
      if (!O(t3) || z(t3)) return t3;
      let n3 = t3[g];
      if (n3) {
        if (!n3.modified_) return n3.base_;
        n3.finalized_ = true, r3 = T(t3, n3.scope_.immer_.useStrictShallowCopy_);
      } else r3 = T(t3, true);
      return S(r3, (t4, n4) => {
        E(r3, t4, e11(n4));
      }), n3 && (n3.finalized_ = false), r3;
    }(t2));
    let r2 = L(this), n2 = Z(e10, void 0);
    return n2[g].isManual_ = true, C(r2), n2;
  }
  finishDraft(e10, t2) {
    let r2 = e10 && e10[g];
    r2 && r2.isManual_ || b(9);
    let { scope_: n2 } = r2;
    return I(n2, t2), W(void 0, n2);
  }
  setAutoFreeze(e10) {
    this.autoFreeze_ = e10;
  }
  setUseStrictShallowCopy(e10) {
    this.useStrictShallowCopy_ = e10;
  }
  applyPatches(e10, t2) {
    let r2;
    for (r2 = t2.length - 1; r2 >= 0; r2--) {
      let n3 = t2[r2];
      if (0 === n3.path.length && "replace" === n3.op) {
        e10 = n3.value;
        break;
      }
    }
    r2 > -1 && (t2 = t2.slice(r2 + 1));
    let n2 = D("Patches").applyPatches_;
    return _(e10) ? n2(e10, t2) : this.produce(e10, (e11) => n2(e11, t2));
  }
}(), et = ee.produce;
ee.produceWithPatches.bind(ee), ee.setAutoFreeze.bind(ee), ee.setUseStrictShallowCopy.bind(ee), ee.applyPatches.bind(ee), ee.createDraft.bind(ee), ee.finishDraft.bind(ee);
var er = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function en(e10) {
  return e10 && e10.__esModule && Object.prototype.hasOwnProperty.call(e10, "default") ? e10.default : e10;
}
y || (y = 1, p = d || (d = {}), function(e10) {
  var t2 = "object" == typeof globalThis ? globalThis : "object" == typeof er ? er : "object" == typeof self ? self : "object" == typeof this ? this : function() {
    throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
  }(), r2 = n2(p);
  function n2(e11, t3) {
    return function(r3, n3) {
      Object.defineProperty(e11, r3, { configurable: true, writable: true, value: n3 }), t3 && t3(r3, n3);
    };
  }
  void 0 !== t2.Reflect && (r2 = n2(t2.Reflect, r2)), e10(r2, t2), void 0 === t2.Reflect && (t2.Reflect = p);
}(function(e10, t2) {
  var r2, n2 = "function" == typeof Symbol, i2 = n2 && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : N2("Symbol.toPrimitive not found."), a2 = n2 && void 0 !== Symbol.iterator ? Symbol.iterator : N2("Symbol.iterator not found."), o2 = Object.getPrototypeOf(Function), s2 = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : N2("A valid Map constructor could not be found."), c2 = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : N2("A valid Set constructor could not be found."), l2 = "function" == typeof WeakMap ? WeakMap : N2("A valid WeakMap constructor could not be found."), u2 = n2 ? Symbol.for("@reflect-metadata:registry") : void 0, f2 = (!g2(u2) && w2(t2.Reflect) && Object.isExtensible(t2.Reflect) && (r2 = t2.Reflect[u2]), g2(r2) && (r2 = function() {
    g2(u2) || void 0 === t2.Reflect || u2 in t2.Reflect || "function" != typeof t2.Reflect.defineMetadata || (r3 = (e11 = t2.Reflect).defineMetadata, n3 = e11.hasOwnMetadata, i3 = e11.getOwnMetadata, a3 = e11.getOwnMetadataKeys, o3 = e11.deleteMetadata, f3 = new l2(), d3 = { isProviderFor: function(e12, t3) {
      var r4 = f3.get(e12);
      return !!(!g2(r4) && r4.has(t3)) || !!a3(e12, t3).length && (g2(r4) && (r4 = new c2(), f3.set(e12, r4)), r4.add(t3), true);
    }, OrdinaryDefineOwnMetadata: r3, OrdinaryHasOwnMetadata: n3, OrdinaryGetOwnMetadata: i3, OrdinaryOwnMetadataKeys: a3, OrdinaryDeleteMetadata: o3 });
    var e11, r3, n3, i3, a3, o3, f3, d3, p3, h3, y3, m3 = new l2(), v3 = { registerProvider: function(e12) {
      if (!Object.isExtensible(v3)) throw Error("Cannot add provider to a frozen registry.");
      switch (true) {
        case d3 === e12:
          break;
        case g2(p3):
          p3 = e12;
          break;
        case p3 === e12:
          break;
        case g2(h3):
          h3 = e12;
          break;
        case h3 === e12:
          break;
        default:
          void 0 === y3 && (y3 = new c2()), y3.add(e12);
      }
    }, getProvider: b3, setProvider: function(e12, t3, r4) {
      if (!function(e13) {
        if (g2(e13)) throw TypeError();
        return p3 === e13 || h3 === e13 || !g2(y3) && y3.has(e13);
      }(r4)) throw Error("Metadata provider not registered.");
      var n4 = b3(e12, t3);
      if (n4 !== r4) {
        if (!g2(n4)) return false;
        var i4 = m3.get(e12);
        g2(i4) && (i4 = new s2(), m3.set(e12, i4)), i4.set(t3, r4);
      }
      return true;
    } };
    return v3;
    function b3(e12, t3) {
      var r4, n4 = m3.get(e12);
      return g2(n4) || (r4 = n4.get(t3)), g2(r4) && (r4 = function(e13, t4) {
        if (!g2(p3)) {
          if (p3.isProviderFor(e13, t4)) return p3;
          if (!g2(h3)) {
            if (h3.isProviderFor(e13, t4)) return p3;
            if (!g2(y3)) for (var r5 = M2(y3); ; ) {
              var n5 = x2(r5);
              if (!n5) return;
              var i4 = n5.value;
              if (i4.isProviderFor(e13, t4)) return E2(r5), i4;
            }
          }
        }
        if (!g2(d3) && d3.isProviderFor(e13, t4)) return d3;
      }(e12, t3), g2(r4) || (g2(n4) && (n4 = new s2(), m3.set(e12, n4)), n4.set(t3, r4))), r4;
    }
  }()), !g2(u2) && w2(t2.Reflect) && Object.isExtensible(t2.Reflect) && Object.defineProperty(t2.Reflect, u2, { enumerable: false, configurable: false, writable: false, value: r2 }), r2), d2 = function(e11) {
    var t3 = new l2(), r3 = { isProviderFor: function(e12, r4) {
      var n4 = t3.get(e12);
      return !g2(n4) && n4.has(r4);
    }, OrdinaryDefineOwnMetadata: function(e12, t4, r4, i3) {
      n3(r4, i3, true).set(e12, t4);
    }, OrdinaryHasOwnMetadata: function(e12, t4, r4) {
      var i3 = n3(t4, r4, false);
      return !g2(i3) && !!i3.has(e12);
    }, OrdinaryGetOwnMetadata: function(e12, t4, r4) {
      var i3 = n3(t4, r4, false);
      if (!g2(i3)) return i3.get(e12);
    }, OrdinaryOwnMetadataKeys: function(e12, t4) {
      var r4 = [], i3 = n3(e12, t4, false);
      if (g2(i3)) return r4;
      for (var a3 = M2(i3.keys()), o3 = 0; ; ) {
        var s3 = x2(a3);
        if (!s3) return r4.length = o3, r4;
        var c3 = s3.value;
        try {
          r4[o3] = c3;
        } catch (e13) {
          try {
            E2(a3);
          } finally {
            throw e13;
          }
        }
        o3++;
      }
    }, OrdinaryDeleteMetadata: function(e12, r4, i3) {
      var a3 = n3(r4, i3, false);
      if (g2(a3) || !a3.delete(e12)) return false;
      if (0 === a3.size) {
        var o3 = t3.get(r4);
        g2(o3) || (o3.delete(i3), 0 === o3.size && t3.delete(o3));
      }
      return true;
    } };
    return f2.registerProvider(r3), r3;
    function n3(n4, i3, a3) {
      var o3 = t3.get(n4), c3 = false;
      if (g2(o3)) {
        if (!a3) return;
        o3 = new s2(), t3.set(n4, o3), c3 = true;
      }
      var l3 = o3.get(i3);
      if (g2(l3)) {
        if (!a3) return;
        if (l3 = new s2(), o3.set(i3, l3), !e11.setProvider(n4, i3, r3)) throw o3.delete(i3), c3 && t3.delete(n4), Error("Wrong provider for target.");
      }
      return l3;
    }
  }(f2);
  function p2(e11, t3, r3) {
    var n3 = $2(t3, r3, false);
    return !g2(n3) && !!n3.OrdinaryHasOwnMetadata(e11, t3, r3);
  }
  function h2(e11, t3, r3) {
    var n3 = $2(t3, r3, false);
    if (!g2(n3)) return n3.OrdinaryGetOwnMetadata(e11, t3, r3);
  }
  function y2(e11, t3, r3, n3) {
    $2(r3, n3, true).OrdinaryDefineOwnMetadata(e11, t3, r3, n3);
  }
  function m2(e11, t3) {
    var r3 = $2(e11, t3, false);
    return r3 ? r3.OrdinaryOwnMetadataKeys(e11, t3) : [];
  }
  function v2(e11) {
    if (null === e11) return 1;
    switch (typeof e11) {
      case "undefined":
        return 0;
      case "boolean":
        return 2;
      case "string":
        return 3;
      case "symbol":
        return 4;
      case "number":
        return 5;
      case "object":
        return null === e11 ? 1 : 6;
      default:
        return 6;
    }
  }
  function g2(e11) {
    return void 0 === e11;
  }
  function b2(e11) {
    return null === e11;
  }
  function w2(e11) {
    return "object" == typeof e11 ? null !== e11 : "function" == typeof e11;
  }
  function _2(e11) {
    var t3 = function(e12, t4) {
      switch (v2(e12)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return e12;
      }
      var r3 = S2(e12, i2);
      if (void 0 !== r3) {
        var n3 = r3.call(e12, "string");
        if (w2(n3)) throw TypeError();
        return n3;
      }
      return function(e13, t5) {
        var r4, n4, i3 = e13.toString;
        if (P2(i3)) {
          var n4 = i3.call(e13);
          if (!w2(n4)) return n4;
        }
        var r4 = e13.valueOf;
        if (P2(r4)) {
          var n4 = r4.call(e13);
          if (!w2(n4)) return n4;
        }
        throw TypeError();
      }(e12);
    }(e11);
    return "symbol" == typeof t3 ? t3 : "" + t3;
  }
  function O2(e11) {
    return Array.isArray ? Array.isArray(e11) : e11 instanceof Object ? e11 instanceof Array : "[object Array]" === Object.prototype.toString.call(e11);
  }
  function P2(e11) {
    return "function" == typeof e11;
  }
  function j2(e11) {
    return "function" == typeof e11;
  }
  function S2(e11, t3) {
    var r3 = e11[t3];
    if (null != r3) {
      if (!P2(r3)) throw TypeError();
      return r3;
    }
  }
  function M2(e11) {
    var t3 = S2(e11, a2);
    if (!P2(t3)) throw TypeError();
    var r3 = t3.call(e11);
    if (!w2(r3)) throw TypeError();
    return r3;
  }
  function x2(e11) {
    var t3 = e11.next();
    return !t3.done && t3;
  }
  function E2(e11) {
    var t3 = e11.return;
    t3 && t3.call(e11);
  }
  function A2(e11) {
    var t3 = Object.getPrototypeOf(e11);
    if ("function" != typeof e11 || e11 === o2 || t3 !== o2) return t3;
    var r3 = e11.prototype, n3 = r3 && Object.getPrototypeOf(r3);
    if (null == n3 || n3 === Object.prototype) return t3;
    var i3 = n3.constructor;
    return "function" != typeof i3 || i3 === e11 ? t3 : i3;
  }
  function N2(e11) {
    throw e11;
  }
  function $2(e11, t3, r3) {
    var n3 = f2.getProvider(e11, t3);
    if (!g2(n3)) return n3;
    if (r3) {
      if (f2.setProvider(e11, t3, d2)) return d2;
      throw Error("Illegal state.");
    }
  }
  e10("decorate", function(e11, t3, r3, n3) {
    if (g2(r3)) {
      if (!O2(e11) || !j2(t3)) throw TypeError();
      return function(e12, t4) {
        for (var r4 = e12.length - 1; r4 >= 0; --r4) {
          var n4 = (0, e12[r4])(t4);
          if (!g2(n4) && !b2(n4)) {
            if (!j2(n4)) throw TypeError();
            t4 = n4;
          }
        }
        return t4;
      }(e11, t3);
    }
    if (!O2(e11) || !w2(t3) || !w2(n3) && !g2(n3) && !b2(n3)) throw TypeError();
    return b2(n3) && (n3 = void 0), function(e12, t4, r4, n4) {
      for (var i3 = e12.length - 1; i3 >= 0; --i3) {
        var a3 = (0, e12[i3])(t4, r4, n4);
        if (!g2(a3) && !b2(a3)) {
          if (!w2(a3)) throw TypeError();
          n4 = a3;
        }
      }
      return n4;
    }(e11, t3, r3 = _2(r3), n3);
  }), e10("metadata", function(e11, t3) {
    return function(r3, n3) {
      if (!w2(r3) || !g2(n3) && !function(e12) {
        switch (v2(e12)) {
          case 3:
          case 4:
            return true;
          default:
            return false;
        }
      }(n3)) throw TypeError();
      y2(e11, t3, r3, n3);
    };
  }), e10("defineMetadata", function(e11, t3, r3, n3) {
    if (!w2(r3)) throw TypeError();
    return g2(n3) || (n3 = _2(n3)), y2(e11, t3, r3, n3);
  }), e10("hasMetadata", function(e11, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = _2(r3)), function e12(t4, r4, n3) {
      if (p2(t4, r4, n3)) return true;
      var i3 = A2(r4);
      return !b2(i3) && e12(t4, i3, n3);
    }(e11, t3, r3);
  }), e10("hasOwnMetadata", function(e11, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = _2(r3)), p2(e11, t3, r3);
  }), e10("getMetadata", function(e11, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = _2(r3)), function e12(t4, r4, n3) {
      if (p2(t4, r4, n3)) return h2(t4, r4, n3);
      var i3 = A2(r4);
      if (!b2(i3)) return e12(t4, i3, n3);
    }(e11, t3, r3);
  }), e10("getOwnMetadata", function(e11, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = _2(r3)), h2(e11, t3, r3);
  }), e10("getMetadataKeys", function(e11, t3) {
    if (!w2(e11)) throw TypeError();
    return g2(t3) || (t3 = _2(t3)), function e12(t4, r3) {
      var n3 = m2(t4, r3), i3 = A2(t4);
      if (null === i3) return n3;
      var a3 = e12(i3, r3);
      if (a3.length <= 0) return n3;
      if (n3.length <= 0) return a3;
      for (var o3 = new c2(), s3 = [], l3 = 0; l3 < n3.length; l3++) {
        var u3 = n3[l3], f3 = o3.has(u3);
        f3 || (o3.add(u3), s3.push(u3));
      }
      for (var d3 = 0; d3 < a3.length; d3++) {
        var u3 = a3[d3], f3 = o3.has(u3);
        f3 || (o3.add(u3), s3.push(u3));
      }
      return s3;
    }(e11, t3);
  }), e10("getOwnMetadataKeys", function(e11, t3) {
    if (!w2(e11)) throw TypeError();
    return g2(t3) || (t3 = _2(t3)), m2(e11, t3);
  }), e10("deleteMetadata", function(e11, t3, r3) {
    if (!w2(t3)) throw TypeError();
    g2(r3) || (r3 = _2(r3));
    var n3 = $2(t3, r3, false);
    return !g2(n3) && n3.OrdinaryDeleteMetadata(e11, t3, r3);
  });
}));
class ei {
  static getOwnPropertyNames(e10) {
    return Reflect.getMetadataKeys(e10);
  }
  static get(e10, t2) {
    return Reflect.getMetadata(t2, e10);
  }
  static define(e10, t2, r2, n2) {
    if (e10 && e10.constructor && e10.constructor != Object) {
      if (f(r2)) {
        Reflect.defineMetadata(t2, et(Reflect.getMetadata(t2, e10) ?? n2 ?? {}, r2), e10);
        return;
      }
      Reflect.defineMetadata(t2, r2, e10);
    }
  }
}
let ea = { path: [], branch: [] };
class eo extends TypeError {
  constructor(e10, t2) {
    let r2;
    let { message: n2, explanation: i2, ...a2 } = e10, { path: o2 } = e10, s2 = 0 === o2.length ? n2 : `At path: ${o2.join(".")} -- ${n2}`;
    super(i2 ?? s2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != i2 && (this.cause = s2), Object.assign(this, a2), this.name = this.constructor.name, this.failures = () => r2 ?? (r2 = [e10, ...t2()]);
  }
}
let es = (e10) => !!e10 && e10[ec] == ec, ec = Symbol("Type");
function* el(t2, r2, n2, i2) {
  let a2 = t2;
  for (let t3 of (l(a2) || (a2 = [a2]), a2)) {
    let a3 = function(t4, r3, n3, i3) {
      if (true === t4) return;
      let a4 = {};
      a4 = false === t4 ? {} : c(t4) ? { message: t4 } : t4;
      let { path: o2, branch: s2, node: l2 } = r3, { type: u2 } = n3, { refinement: f2, message: d2 = e(i3) ? "Required" : `Expected a value of type \`${u2}\`${f2 ? ` with refinement \`${f2}\`` : ""}, but received: \`${i3}\`` } = a4;
      return { ...a4, value: i3, type: u2, refinement: f2, key: o2[o2.length - 1], path: o2, branch: s2, node: l2, message: d2 };
    }(t3, r2, n2, i2);
    a3 && (yield a3);
  }
}
function eu(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = ef(e10, t2, r2), i2 = function(e11) {
    let { done: t3, value: r3 } = e11.next();
    return t3 ? void 0 : r3;
  }(n2);
  return i2[0] ? [new eo(i2[0], function* () {
    for (let e11 of n2) e11[0] && (yield e11[0]);
  }), void 0] : [void 0, i2[1]];
}
function* ef(e10, t2) {
  let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e10], node: o2 = { current: t2 }, coerce: s2 = false, mask: c2 = false } = n2, l2 = { mask: c2, path: i2, branch: a2, node: o2 }, u2 = e10;
  if (s2) {
    let r2 = t2.coercer(e10, l2);
    void 0 != r2 && (u2 = r2);
  }
  let f2 = 0;
  for (let r2 of el(t2.validator(u2, l2), l2, t2, e10)) r2.explanation = n2.message, f2 = 2, yield [r2, void 0];
  for (let [e11, d2, p2] of t2.entries(u2, l2)) for (let t3 of ef(d2, p2, { path: void 0 === e11 ? i2 : [...i2, e11], branch: void 0 === e11 ? a2 : [...a2, d2], node: void 0 === e11 ? o2 : { current: p2, parent: o2 }, coerce: s2, mask: c2, message: n2.message })) t3[0] ? (f2 = null != t3[0].refinement ? 1 : 2, yield [t3[0], void 0]) : s2 && (d2 = t3[1], void 0 === e11 ? u2 = d2 : u2 instanceof Map ? u2.set(e11, d2) : u2 instanceof Set ? u2.add(d2) : r(u2) && (u2[e11] = d2));
  if (2 !== f2) for (let r2 of el(t2.refiner(u2, l2), l2, t2, e10)) r2.explanation = n2.message, f2 = 1, yield [r2, void 0];
  0 === f2 && (yield [void 0, u2]);
}
let ed = (e10) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = e10(...r2), a2 = (e11, t3) => {
    let r3 = ei.get(e11, t3) ?? {};
    ei.define(e11, t3, { ...r3, type: i2 });
  };
  return a2.toString = () => `@type:${i2.type}`, new Proxy(a2, { ownKeys: () => [...Object.getOwnPropertyNames(i2), ...Object.getOwnPropertySymbols(i2)], get: (e11, t3) => i2[t3] });
}, ep = (e10) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = (t3) => e10(t3, ...r2);
  return new Proxy((e11, t3) => {
    ei.define(e11, t3, (e12) => {
      (e12.modifies ?? (e12.modifies = [])).push({ modify: i2 });
    }, {});
  }, { get(e11, t3) {
    if ("modify" == t3) return i2;
  } });
};
const _eh = class _eh {
  static create(t2, r2, i2) {
    var _a2;
    let a2;
    let o2 = r2 ?? ((_a2 = t2[_eh.underlying]) == null ? void 0 : _a2.schema) ?? {};
    return new Proxy({}, { ownKeys(e10) {
      let r3 = /* @__PURE__ */ new Map();
      if (i2) {
        if (t2[i2]) for (let e11 of Object.getOwnPropertyNames(t2[i2])) r3.set(e11, e11);
        if (o2 && o2[i2]) for (let e11 of Object.getOwnPropertyNames(o2[i2])) r3.set(e11, e11);
      } else {
        for (let e11 of Object.getOwnPropertyNames(t2)) r3.set(e11, e11);
        if (o2) for (let e11 of Object.getOwnPropertyNames(o2)) r3.set(e11, e11);
      }
      return [...r3.keys()];
    }, get(r3, s2) {
      var _a3, _b;
      if (s2 === _eh.meta) return a2 ?? (a2 = _eh.create(t2, o2, _eh.meta));
      if (i2) {
        if (n(t2)) {
          let r4 = (_a3 = t2 == null ? void 0 : t2[i2]) == null ? void 0 : _a3[s2];
          if (!e(r4)) return r4;
        }
        return o2 ? (_b = o2 == null ? void 0 : o2[i2]) == null ? void 0 : _b[s2] : void 0;
      }
      if (n(t2)) {
        let r4 = t2 == null ? void 0 : t2[s2];
        if (!e(r4)) return r4;
      }
      return o2 ? o2[s2] : void 0;
    } });
  }
  static schemaProp(e10, t2) {
    return ey(e10.schema, t2);
  }
  static metaProp(e10, t2) {
    return em(e10.schema, t2);
  }
};
__publicField(_eh, "RecordKey", Symbol("RecordKey"));
__publicField(_eh, "meta", Symbol("meta"));
__publicField(_eh, "optional", Symbol("optional"));
__publicField(_eh, "underlying", Symbol("underlying"));
__publicField(_eh, "unwrap", Symbol("unwrap"));
__publicField(_eh, "extractSchema", (e10) => new ev().toValue(e10));
__publicField(_eh, "extractMeta", (e10) => new ev().toValue(e10.meta ?? e10[_eh.meta]));
let eh = _eh;
let ey = (e10, t2) => {
  if (n(e10)) return e10[t2] ?? (e10[eh.unwrap] ? ey(e10[eh.unwrap]().schema, t2) : void 0);
}, em = (e10, t2) => {
  var _a2;
  if (n(e10)) return ((_a2 = e10[eh.meta]) == null ? void 0 : _a2[t2]) ?? (e10[eh.unwrap] ? em(e10[eh.unwrap]().schema, t2) : void 0);
};
class ev {
  constructor(e10 = false) {
    this.deref = e10;
  }
  toValue(t2) {
    if (t2) {
      if (!e(t2.schema)) return this.toValue(t2.schema);
      if (this.deref && t2[eh.unwrap]) return this.toValue(t2[eh.unwrap]());
      if (i(t2)) return this.toArray(t2);
      if (t2.constructor === Object) return this.toObject(t2);
    }
    return t2;
  }
  toObject(e10) {
    let t2 = {};
    for (let r2 of Object.getOwnPropertyNames(e10)) t2[r2] = this.toValue(e10[r2]);
    return t2;
  }
  toArray(e10) {
    let t2 = [];
    for (let r2 of e10) t2.push(this.toValue(r2));
    return t2;
  }
}
class eg {
  static parse(e10) {
    if ("" === e10) return [];
    if ("/" === e10) return [""];
    if ("/" !== e10.charAt(0)) throw Error("Invalid JSON pointer: " + e10);
    let t2 = e10.substring(1).split(/\//);
    return t2.map((e11, r2) => eg.unescape(e11, r2 === t2.length - 1));
  }
  static create() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return 0 === e10.length ? "" : "/" + e10.map(eg.escape).join("/");
  }
  static unescape(e10, t2) {
    return "" == e10 && t2 ? eh.RecordKey : e10.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e10) {
    return e10 == eh.RecordKey ? "" : e10.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e10, t2) {
    let r2 = Array.isArray(t2) ? t2 : eg.parse(t2);
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n2 = r2[t3];
      if (t3 > 0 && n2 == eh.RecordKey) return r2[t3 - 1];
      if (!("object" == typeof e10 && n2 in e10)) throw Error("Invalid reference token: " + n2);
      e10 = e10[n2];
    }
    return e10;
  }
}
_a = ec;
const _eb = class _eb {
  constructor(e10) {
    __publicField(this, _a, ec);
    __publicField(this, "schema");
    if (e10) {
      this.schema = eh.create(e10);
      return;
    }
    this.schema = e10 ?? null;
  }
  get meta() {
    return this.schema ? this.schema[eh.meta] : {};
  }
  get type() {
    var _a2;
    return ((_a2 = this.schema) == null ? void 0 : _a2.type) ?? "unknown";
  }
  refiner(e10, t2) {
    return [];
  }
  validator(e10, t2) {
    return [];
  }
  coercer(e10, t2) {
    if (c(e10)) {
      let t3 = e10.trim();
      if (t3.length >= 2) {
        if (t3.startsWith("{") && t3.endsWith("}")) try {
          return JSON.parse(t3);
        } catch (e11) {
        }
        if (t3.startsWith("[") && t3.endsWith("]")) try {
          return JSON.parse(t3);
        } catch (e11) {
        }
      }
    }
    return e10;
  }
  *entries(e10) {
  }
  validate(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return eu(e10, this, t2);
  }
  create(e10) {
    let t2 = eu(e10, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e10) {
    let t2 = eu(e10, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  use() {
    for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e11, t3) => t3.modify(e11), this);
  }
  optional() {
    return eO.create(this);
  }
  default(e10) {
    return e_.create(this, e10);
  }
};
__publicField(_eb, "define", ed(function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _eb {
    validator(t2, r2) {
      return e10(t2, r2);
    }
  }(null);
}));
__publicField(_eb, "fromTypeObject", (e10, t2) => {
  let r2 = e10.type ?? t2 ?? new _eb({});
  return e10.modifies ? r2.use(...e10.modifies ?? []) : r2;
});
let eb = _eb;
class ew extends eb {
  static of(e10, t2) {
    return new ew({ ...t2, [eh.underlying]: e10 });
  }
  static refine(e10, t2, r2) {
    return new class extends ew {
      *refiner(n2, i2) {
        for (let a2 of (yield* this.unwrap.refiner(n2, i2), el(t2(n2, i2), i2, e10, n2))) yield { ...a2, refinement: Object.keys(r2).join(",") };
      }
    }({ ...r2, [eh.underlying]: e10 });
  }
  get unwrap() {
    let e10 = this.schema[eh.unwrap];
    return e10 ? e10() : this.schema[eh.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea;
    yield* this.unwrap.entries(e10, { ...t2, node: { current: this, parent: t2.node } });
  }
  validator(e10, t2) {
    return el(this.unwrap.validator(e10, t2), t2, this, e10);
  }
  refiner(e10, t2) {
    return el(this.unwrap.refiner(e10, t2), t2, this, e10);
  }
  coercer(e10, t2) {
    return this.unwrap.coercer(e10, t2);
  }
}
const _e_ = class _e_ extends ew {
  coercer(e10, t2) {
    return void 0 === e10 ? this.schema.default : super.unwrap.coercer(e10, t2);
  }
};
__publicField(_e_, "create", ed((e10, t2) => new _e_({ default: t2, [eh.underlying]: e10 })));
let e_ = _e_;
const _eO = class _eO extends ew {
  refiner(e10, t2) {
    return void 0 === e10 || super.unwrap.refiner(e10, t2);
  }
  validator(e10, t2) {
    return void 0 === e10 || super.unwrap.validator(e10, t2);
  }
};
__publicField(_eO, "create", ed((e10) => new _eO({ [eh.underlying]: e10, [eh.optional]: e10 })));
let eO = _eO;
const _eP = class _eP extends ew {
};
__publicField(_eP, "create", ed((e10, t2) => new _eP({ $ref: e10, [eh.unwrap]: t2 })));
let eP = _eP;
const _ej = class _ej extends eb {
  constructor() {
    super({});
  }
  get type() {
    return "any";
  }
  validator() {
    return true;
  }
};
__publicField(_ej, "create", ed(() => new _ej()));
let ej = _ej;
const _eS = class _eS extends eb {
  get type() {
    return "null";
  }
  validator(e10, r2) {
    return t(e10);
  }
};
__publicField(_eS, "create", ed(() => new _eS({ type: "null" })));
let eS = _eS;
const _eM = class _eM extends eb {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return c(e10);
  }
};
__publicField(_eM, "create", ed(() => new _eM({ type: "string" })));
let eM = _eM;
const _ex = class _ex extends eb {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return a(e10);
  }
  coercer(e10, t2) {
    try {
      let t3 = void 0 != e10 ? parseFloat(String(e10)) : void 0;
      if (a(t3)) return t3;
    } catch (e11) {
    }
  }
};
__publicField(_ex, "create", ed(() => new _ex({ type: "number" })));
let ex = _ex;
const _eE = class _eE extends eb {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return o(e10);
  }
  coercer(e10, t2) {
    try {
      let t3 = void 0 != e10 ? parseInt(String(e10)) : void 0;
      return o(t3) ? t3 : void 0;
    } catch (e11) {
      return;
    }
  }
};
__publicField(_eE, "create", ed(() => new _eE({ type: "integer" })));
let eE = _eE;
const _eA = class _eA extends eb {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return s(e10);
  }
  coercer(e10, t2) {
    try {
      return void 0 != e10 ? "true" === String(e10) : void 0;
    } catch (e11) {
      return;
    }
  }
};
__publicField(_eA, "create", ed(() => new _eA({ type: "boolean" })));
let eA = _eA;
const _eN = class _eN extends eb {
  get type() {
    return "binary";
  }
  validator(e10, t2) {
    return e10 instanceof File || e10 instanceof Blob;
  }
};
__publicField(_eN, "create", ed(() => new _eN({ type: "string", format: "binary" })));
let eN = _eN;
const _e$ = class _e$ extends eb {
  static createEnum(e10) {
    return new _e$({ enum: e10 });
  }
  get type() {
    return "enums";
  }
  validator(e10, t2) {
    return this.schema.enum.includes(e10);
  }
};
__publicField(_e$, "create", ed(_e$.createEnum));
__publicField(_e$, "literal", ed((e10) => new _e$({ enum: [e10] })));
__publicField(_e$, "nativeEnum", ed((e10) => new _e$({ enum: Object.values(e10) })));
let e$ = _e$;
const _eT = class _eT extends eb {
  get type() {
    return "never";
  }
  validator(e10, t2) {
    return false;
  }
};
__publicField(_eT, "create", ed(() => new _eT(false)));
let eT = _eT;
class eR extends eb {
  static create(e10) {
    let t2 = function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = [];
      for (let [r2, n2] of Object.entries(e11)) eh.schemaProp(n2, eh.optional) || t3.push(r2);
      return t3;
    };
    return ed(() => {
      var _a2, _b;
      if (e10) {
        if (u(e10)) {
          let r2 = new e10(), n2 = {};
          for (let [e11, t3] of Object.entries(r2)) n2[e11] = e$.literal(t3);
          for (let e11 of ei.getOwnPropertyNames(r2)) {
            let t3 = ei.get(r2, e11);
            if (t3) {
              let r3 = eb.fromTypeObject(t3, n2[e11]);
              e11 in n2 ? n2[e11] = r3.default((_b = (_a2 = n2[e11].schema) == null ? void 0 : _a2.enum) == null ? void 0 : _b[0]) : n2[e11] = r3;
            }
          }
          return new eR({ type: "object", properties: n2, required: t2(n2), additionalProperties: eT.create() });
        }
        return new eR({ type: "object", properties: e10, required: t2(e10), additionalProperties: eT.create() });
      }
      return new eR({ type: "object", properties: {}, required: [], additionalProperties: eT.create() });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    var _a2;
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea;
    if (r(e10)) {
      let r2 = new Set(Object.keys(e10));
      if (this.schema.properties) for (let t3 in this.schema.properties) r2.delete(t3), yield [t3, e10[t3], this.schema.properties[t3]];
      if (((_a2 = t2.node) == null ? void 0 : _a2.current.type) !== "intersection") for (let t3 of r2) yield [t3, e10[t3], this.schema.additionalProperties];
    }
  }
  validator(e10, t2) {
    return r(e10);
  }
  coercer(e10, t2) {
    if (r(e10)) {
      let r2 = { ...e10 };
      if (t2.mask) {
        let e11 = this.schema.properties;
        if (e11) for (let t3 in r2) void 0 === e11[t3] && delete r2[t3];
      }
      return r2;
    }
    return super.coercer(e10, t2);
  }
}
const _ek = class _ek extends eb {
  get type() {
    return "record";
  }
  *entries(e10) {
    if (r(e10)) for (let [t2, r2] of Object.entries(e10)) yield [eh.RecordKey, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
  }
  validator(e10) {
    return r(e10);
  }
};
__publicField(_ek, "create", ed((e10, t2) => new _ek({ type: "object", propertyNames: e10, additionalProperties: t2 })));
let ek = _ek;
const _ez = class _ez extends eb {
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    if (Array.isArray(e10)) for (let [t2, r2] of e10.entries()) yield [t2, r2, this.schema.items];
  }
  validator(e10) {
    return i(e10);
  }
  coercer(e10) {
    return i(e10) ? e10.slice() : e10;
  }
};
__publicField(_ez, "create", ed((e10) => new _ez({ type: "array", items: e10 })));
let ez = _ez;
const _eF = class _eF extends eb {
  get type() {
    return "tuple";
  }
  *entries(e10, t2) {
    if (i(e10)) {
      let t3 = Math.max(this.schema.items.length, e10.length);
      for (let r2 = 0; r2 < t3; r2++) yield [r2, e10[r2], this.schema.items[r2] ?? eT.create()];
    }
  }
  validator(e10) {
    return i(e10) && e10.length === this.schema.items.length;
  }
  coercer(e10) {
    return i(e10) ? e10.slice() : e10;
  }
};
__publicField(_eF, "create", ed((e10) => new _eF({ type: "array", items: e10 })));
let eF = _eF;
const _eD = class _eD extends eb {
  get type() {
    return "intersection";
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea;
    for (let r2 of this.schema.allOf) yield* r2.entries(e10, t2);
  }
  *validator(e10, t2) {
    for (let r2 of this.schema.allOf) yield* el(r2.validator(e10, t2), t2, this, e10);
  }
  *refiner(e10, t2) {
    for (let r2 of this.schema.allOf) yield* el(r2.refiner(e10, t2), t2, this, e10);
  }
};
__publicField(_eD, "create", ed(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _eD({ allOf: t2 });
}));
let eD = _eD;
const _eI = class _eI extends eb {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(e10) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
    return ed(() => {
      let t3 = [];
      if (1 == r2.length && r2[0].constructor == Object) for (let [n3, i2] of Object.entries(r2[0])) if (eh.schemaProp(i2, "$ref")) t3.push(i2);
      else {
        let r3 = { [e10]: e$.literal(n3) };
        for (let [e11, t4, n4] of i2.entries({}, ea)) r3[String(e11)] = n4;
        t3.push(eR.create(r3));
      }
      else for (let e11 of r2) u(e11) && t3.push(eR.create(e11));
      return new _eI({ oneOf: t3, discriminator: { propertyName: e10 } });
    })();
  }
  discriminatorPropType(e10) {
    return this._discriminatorPropName ?? (this._discriminatorPropName = (() => {
      var _a2, _b;
      let t2 = ((_a2 = this.schema.discriminator) == null ? void 0 : _a2.propertyName) ?? "", r2 = [], n2 = [];
      for (let e11 of this.schema.oneOf) {
        let i2 = eh.schemaProp(e11, "properties")[t2];
        if (!i2) continue;
        let a2 = i2.schema.enum;
        a2 && r2.push(...a2), n2.push(i2.meta);
      }
      return ew.of(e$.create(r2), { [eh.meta]: eh.create(n2[0], ((_b = e10.node) == null ? void 0 : _b.current.meta) ?? {}) });
    })());
  }
  discriminatorMapping(e10, t2, r2) {
    var _a2, _b;
    if (this._discriminatorMappingProps.get(t2)) return this._discriminatorMappingProps.get(t2);
    if ((((_b = (_a2 = this.discriminatorPropType(r2)) == null ? void 0 : _a2.schema) == null ? void 0 : _b.enum) ?? []).includes(t2)) {
      let r3 = this.schema.oneOf.find((r4) => {
        let n2 = eh.schemaProp(r4, "properties")[e10];
        if (n2) {
          let [e11, r5] = n2.validate(t2);
          return !e11;
        }
        return false;
      });
      if (r3) {
        if (!this._discriminatorMappingProps.has(t2)) {
          let n2 = {};
          for (let [t3, i2] of Object.entries(eh.schemaProp(r3, "properties"))) t3 !== e10 && (n2[t3] = i2);
          this._discriminatorMappingProps.set(t2, n2);
        }
        return this._discriminatorMappingProps.get(t2);
      }
    }
    return {};
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea;
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, n2 = e10 == null ? void 0 : e10[r2], i2 = eR.create({ [r2]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, n2, t2) });
      yield* i2.entries(e10, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e10) {
    for (let t2 of this.schema.oneOf) {
      let [r2, n2] = eu(e10, t2, { coerce: true });
      if (!r2) return n2;
    }
    return e10;
  }
  validator(e10, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, n2 = e10 == null ? void 0 : e10[r3];
      return eR.create({ [r3]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, n2, t2) }).validator(e10, t2);
    }
    let r2 = [];
    for (let n2 of this.schema.oneOf) {
      let [...i2] = ef(e10, n2, t2), [a2] = i2;
      if (a2 && !a2[0]) return [];
      for (let [e11] of i2) e11 && r2.push(e11);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e11) => e11.type).join(" | ")}\`, but received: ${e10}`, ...r2];
  }
};
__publicField(_eI, "create", ed(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _eI({ oneOf: t2 });
}));
let eI = _eI;
let eK = eP.create, eC = ej.create, eL = eT.create, eq = eS.create, eW = eM.create, eV = ep((e10, t2, r2) => ew.refine(e10, (e11) => !!e11 && e11.length >= t2 || (r2 ?? `Expected string value length great than or equal ${t2}, but received "${e11}"`), { minLength: t2 })), eJ = ep((e10, t2, r2) => ew.refine(e10, (e11) => !!e11 && e11.length <= t2 || (r2 ?? `Expected string value length less than or equal ${t2}, but received "${e11}"`), { maxLength: t2 })), eH = ep((e10, t2, r2) => ew.refine(e10, (n2) => !!t2.test(n2) || (r2 ?? `Expected a ${e10.type} matching \`/${t2.source}/\` but received "${n2}"`), { pattern: t2.source })), eU = ex.create, eB = eE.create, eG = ep((e10, t2, r2) => ew.refine(e10, (e11) => e11 >= t2 || (r2 ?? `Expected value great than or equal ${t2}, but received "${e11}"`), { minimum: t2 })), eX = ep((e10, t2, r2) => ew.refine(e10, (e11) => e11 > t2 || (r2 ?? `Expected value great than ${t2}, but received "${e11}"`), { exclusiveMinimum: t2 })), eQ = ep((e10, t2, r2) => ew.refine(e10, (e11) => e11 <= t2 || (r2 ?? `Expected value less than or equal ${t2}, but received "${e11}"`), { maximum: t2 })), eY = ep((e10, t2, r2) => ew.refine(e10, (e11) => e11 < t2 || (r2 ?? `Expected value less than or equal ${t2}, but received "${e11}"`), { exclusiveMaximum: t2 })), eZ = ep((e10, t2, r2) => ew.refine(e10, (e11) => e11 % t2 == 0 || (r2 ?? `Expected value multiple of ${t2}, but received "${e11}"`), { multipleOf: t2 })), e0 = eA.create, e1 = eN.create, e2 = e$.create, e3 = e$.nativeEnum, e4 = e$.literal, e6 = eR.create, e5 = ek.create, e7 = eF.create, e8 = ez.create, e9 = ep((e10, t2, r2) => ew.refine(e10, (e11) => !!i(e11) && e11.length >= t2 || (r2 ?? `Expected array value at least ${t2}, but received "${e11 == null ? void 0 : e11.length}"`), { minItems: t2 })), te = ep((e10, t2, r2) => ew.refine(e10, (e11) => !!i(e11) && e11.length <= t2 || (r2 ?? `Expected array value  ${t2}, but received "${e11 == null ? void 0 : e11.length}"`), { maxItems: t2 })), tt = eD.create, tr = eI.create, tn = eI.discriminatorMapping, ti = eb.define, ta = ew.refine, to = ep((e10, t2) => e_.create(e10, t2)), ts = ep((e10) => eO.create(e10)), tc = ep((e10, t2) => ew.of(e10, { [eh.meta]: t2 })), tl = Object.freeze(Object.defineProperty({ __proto__: null, annotate: tc, any: eC, array: e8, binary: e1, boolean: e0, custom: ti, defaults: to, discriminatorMapping: tn, enums: e2, exclusiveMaximum: eY, exclusiveMinimum: eX, integer: eB, intersection: tt, literal: e4, maxItems: te, maxLength: eJ, maximum: eQ, minItems: e9, minLength: eV, minimum: eG, multipleOf: eZ, nativeEnum: e3, never: eL, nil: eq, number: eU, object: e6, optional: ts, pattern: eH, record: e5, ref: eK, refine: ta, string: eW, tuple: e7, union: tr }, Symbol.toStringTag, { value: "Module" })), tu = (e10) => {
  var _a2;
  return ((_a2 = e10.split("/")) == null ? void 0 : _a2.findLast(() => true)) ?? "";
};
class tf {
  constructor(e10) {
    __publicField(this, "def", /* @__PURE__ */ new Map());
    __publicField(this, "ref", (e10) => {
      let t2 = this.def.get(e10);
      if (t2) return t2;
      throw Error(`undefined type ${e10}`);
    });
    this.resolveRef = e10;
  }
  static decode(e10, t2) {
    return false === e10 ? eL() : new tf(t2).decode(e10);
  }
  decode(e10) {
    let t2 = structuredClone(e10), r2 = this._decode(t2), n2 = false;
    if ((t2 == null ? void 0 : t2.title) && (r2 = r2.use(tc({ title: t2 == null ? void 0 : t2.title })), n2 = true), t2 == null ? void 0 : t2.description) {
      if (n2) r2 = r2.use(tc({ description: t2 == null ? void 0 : t2.description }));
      else {
        let [e11, ...n3] = t2 == null ? void 0 : t2.description.split(/[.\n]/);
        r2 = r2.use(tc({ title: e11, description: n3 ? n3.join("\n").trim() : void 0 }));
      }
    }
    if (t2) {
      for (let e11 of tb) if (e11 in t2) {
        let n3 = tl[e11];
        n3 && (r2 = r2.use(n3(t2[e11])));
      }
    }
    return r2;
  }
  _decode(t2) {
    var _a2, _b;
    let r2 = tO(t2);
    if (r2.$ref) {
      let [e10, t3] = this.resolveRef(r2.$ref);
      return this.def.has(t3) || (this.def.set(t3, eC()), this.def.set(t3, this.decode(e10))), eK(t3, () => this.ref(t3));
    }
    if (r2.enum) {
      let e10 = e2(r2.enum);
      return r2["x-enum-labels"] ? e10.use(tc({ enumLabels: r2["x-enum-labels"] })) : e10;
    }
    if (r2.discriminator) {
      let t3 = r2.discriminator.propertyName;
      if (t3) {
        let n2 = {};
        if (r2.discriminator.mapping) {
          let e10 = r2.discriminator.mapping;
          if (e10) for (let [t4, r3] of Object.entries(e10)) n2[t4] = this.decode(r3);
        }
        if (r2.oneOf) for (let i2 of r2.oneOf) {
          let r3 = this.decode(i2), a2 = (_a2 = eh.schemaProp(r3, "properties")) == null ? void 0 : _a2[t3];
          if (a2) {
            let t4 = (_b = eh.schemaProp(a2, "enum")) == null ? void 0 : _b[0];
            e(t4) || (n2[`${t4}`] = r3);
          }
        }
        return tn(t3, n2);
      }
    }
    if (r2.oneOf) {
      let e10 = r2.oneOf.map((e11) => this.decode(e11));
      return 1 === e10.length ? e10[0] : tr(...e10);
    }
    if (r2.allOf) {
      let e10 = r2.allOf.map((e11) => this.decode(e11));
      return 1 === e10.length ? e10[0] : tt(...e10);
    }
    if (td(r2)) {
      if (r2.properties) {
        let e11 = r2.required ?? [], t3 = {};
        for (let [n2, i2] of Object.entries(r2.properties)) {
          let r3 = this.decode(i2);
          e11.includes(n2) || (r3 = r3.optional()), t3[n2] = r3;
        }
        return e6(t3);
      }
      let e10 = r2.additionalProperties ?? {};
      return e10 ? e5(this.decode(r2.propertyNames ?? { type: "string" }), this.decode(e10)) : e6();
    }
    return th(r2) ? i(r2.items) ? e7(r2.items.map((e10) => this.decode(e10))) : e8(this.decode(r2.items)) : tm(r2) ? "binary" === r2.format ? e1() : eW() : ty(r2) ? "integer" === r2.type ? eB() : eU() : tv(r2) ? e0() : tp(r2) ? eq() : eC();
  }
}
let td = (e10) => "object" === e10.type, tp = (e10) => "null" === e10.type, th = (e10) => "array" === e10.type, ty = (e10) => "number" === e10.type || "integer" === e10.type, tm = (e10) => "string" === e10.type, tv = (e10) => "boolean" === e10.type, tg = { object: ["properties", "additionalProperties", "unevaluatedProperties", "patternProperties", "propertyNames", "dependentSchemas", "maxProperties", "minProperties"], array: ["contains", "items", "additionalItems", "unevaluatedItems", "maxItems", "minItems", "uniqueItems", "maxContains", "minContains"], string: ["pattern", "contentMediaType", "contentEncoding", "contentSchema", "maxLength", "minLength"], number: ["maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"] }, tb = ["maxProperties", "minProperties", "maxItems", "minItems", "uniqueItems", "pattern", "maxLength", "minLength", "maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"], tw = (e10, t2) => t2.some((t3) => Object.hasOwn(e10, t3)), t_ = (e10) => !tw(e10, ["type", "$ref", "$id", "oneOf", "anyOf", "allOf"]), tO = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (s(e10)) return {};
  if (!e10.type) {
    for (let t3 in tg) if (tw(e10, tg[t3])) {
      e10.type = t3;
      break;
    }
  }
  e10.const && (e10.enum = [e10.const]);
  let t2 = (t3) => {
    var _a2;
    e10[t3] && (e10[t3] = e10[t3].filter((r2) => {
      let n2 = tO(r2);
      return !t_(n2) || ("allOf" === t3 && Object.assign(e10, n2), false);
    }), ((_a2 = e10[t3]) == null ? void 0 : _a2.length) === 0 && (e10[t3] = void 0));
  };
  return t2("allOf"), t2("anyOf"), t2("oneOf"), e10;
}, tP = {}, tj = function(e10, t2, r2) {
  let n2 = Promise.resolve();
  if (t2 && t2.length > 0) {
    document.getElementsByTagName("link");
    let e11 = document.querySelector("meta[property=csp-nonce]"), r3 = (e11 == null ? void 0 : e11.nonce) || (e11 == null ? void 0 : e11.getAttribute("nonce"));
    n2 = Promise.allSettled(t2.map((e12) => {
      if ((e12 = "/__APP_BASE_HREF__/" + e12) in tP) return;
      tP[e12] = true;
      let t3 = e12.endsWith(".css");
      if (document.querySelector(`link[href="${e12}"]${t3 ? '[rel="stylesheet"]' : ""}`)) return;
      let n3 = document.createElement("link");
      if (n3.rel = t3 ? "stylesheet" : "modulepreload", t3 || (n3.as = "script"), n3.crossOrigin = "", n3.href = e12, r3 && n3.setAttribute("nonce", r3), document.head.appendChild(n3), t3) return new Promise((t4, r4) => {
        n3.addEventListener("load", t4), n3.addEventListener("error", () => r4(Error(`Unable to preload CSS for ${e12}`)));
      });
    }));
  }
  function i2(e11) {
    let t3 = new Event("vite:preloadError", { cancelable: true });
    if (t3.payload = e11, window.dispatchEvent(t3), !t3.defaultPrevented) throw e11;
  }
  return n2.then((t3) => {
    for (let e11 of t3 || []) "rejected" === e11.status && i2(e11.reason);
    return e10().catch(i2);
  });
};
export {
  ea as E,
  eg as J,
  eh as S,
  tj as _,
  e8 as a,
  eC as b,
  tc as c,
  ep as d,
  ti as e,
  tf as f,
  en as g,
  tu as h,
  es as i,
  e2 as j,
  e0 as k,
  e6 as o,
  et as p,
  e5 as r,
  eW as s
};
