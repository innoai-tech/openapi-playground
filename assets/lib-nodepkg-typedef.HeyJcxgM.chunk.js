var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
import { i as e } from "./lib-nodepkg-vuekit.DEOFcjz1.chunk.js";
let t = (e10) => void 0 === e10, r = (e10) => Object.is(e10, null), n = (e10) => !!e10 && "object" == typeof e10, i = (e10) => !!e10 && e10.constructor == Object, a = (e10) => Array.isArray(e10), o = (e10) => "number" == typeof e10 && !Number.isNaN(e10), l = (e10) => "number" == typeof e10 && !Number.isNaN(e10) && Number.isInteger(e10), s = (e10) => "boolean" == typeof e10, c = (e10) => "string" == typeof e10, u = (e10) => "object" == typeof e10 && "function" == typeof e10[Symbol.iterator], f = (e10) => "function" == typeof e10 && `${e10}`.startsWith("class"), d = (e10) => !!(e10 && e10.constructor && e10.call && e10.apply);
var p, h, y, v, m = Symbol.for("immer-nothing"), g = Symbol.for("immer-draftable"), b = Symbol.for("immer-state");
function w(e10) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
  throw Error(`[Immer] minified error nr: ${e10}. Full error at: https://bit.ly/3cXEKWf`);
}
var _ = Object.getPrototypeOf;
function O(e10) {
  return !!e10 && !!e10[b];
}
function P(e10) {
  var t2;
  return !!e10 && (M(e10) || Array.isArray(e10) || !!e10[g] || !!(null === (t2 = e10.constructor) || void 0 === t2 ? void 0 : t2[g]) || $(e10) || N(e10));
}
var j = Object.prototype.constructor.toString();
function M(e10) {
  if (!e10 || "object" != typeof e10) return false;
  let t2 = _(e10);
  if (null === t2) return true;
  let r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === j;
}
function x(e10, t2) {
  0 === S(e10) ? Reflect.ownKeys(e10).forEach((r2) => {
    t2(r2, e10[r2], e10);
  }) : e10.forEach((r2, n2) => t2(n2, r2, e10));
}
function S(e10) {
  let t2 = e10[b];
  return t2 ? t2.type_ : Array.isArray(e10) ? 1 : $(e10) ? 2 : N(e10) ? 3 : 0;
}
function E(e10, t2) {
  return 2 === S(e10) ? e10.has(t2) : Object.prototype.hasOwnProperty.call(e10, t2);
}
function A(e10, t2, r2) {
  let n2 = S(e10);
  2 === n2 ? e10.set(t2, r2) : 3 === n2 ? e10.add(r2) : e10[t2] = r2;
}
function $(e10) {
  return e10 instanceof Map;
}
function N(e10) {
  return e10 instanceof Set;
}
function R(e10) {
  return e10.copy_ || e10.base_;
}
function T(e10, t2) {
  if ($(e10)) return new Map(e10);
  if (N(e10)) return new Set(e10);
  if (Array.isArray(e10)) return Array.prototype.slice.call(e10);
  let r2 = M(e10);
  if (true !== t2 && ("class_only" !== t2 || r2)) {
    let t3 = _(e10);
    return null !== t3 && r2 ? { ...e10 } : Object.assign(Object.create(t3), e10);
  }
  {
    let t3 = Object.getOwnPropertyDescriptors(e10);
    delete t3[b];
    let r3 = Reflect.ownKeys(t3);
    for (let n2 = 0; n2 < r3.length; n2++) {
      let i2 = r3[n2], a2 = t3[i2];
      false === a2.writable && (a2.writable = true, a2.configurable = true), (a2.get || a2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: a2.enumerable, value: e10[i2] });
    }
    return Object.create(_(e10), t3);
  }
}
function z(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return F(e10) || O(e10) || !P(e10) || (S(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = k), Object.freeze(e10), t2 && Object.entries(e10).forEach((e11) => {
    let [t3, r2] = e11;
    return z(r2, true);
  })), e10;
}
function k() {
  w(2);
}
function F(e10) {
  return Object.isFrozen(e10);
}
var K = {};
function D(e10) {
  let t2 = K[e10];
  return t2 || w(0, e10), t2;
}
function I(e10, t2) {
  t2 && (D("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t2);
}
function C(e10) {
  W(e10), e10.drafts_.forEach(L), e10.drafts_ = null;
}
function W(e10) {
  e10 === y && (y = e10.parent_);
}
function q(e10) {
  return y = { drafts_: [], parent_: y, immer_: e10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function L(e10) {
  let t2 = e10[b];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function V(e10, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e10 && e10 !== r2 ? (r2[b].modified_ && (C(t2), w(4)), P(e10) && (e10 = J(t2, e10), t2.parent_ || H(t2, e10)), t2.patches_ && D("Patches").generateReplacementPatches_(r2[b].base_, e10, t2.patches_, t2.inversePatches_)) : e10 = J(t2, r2, []), C(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e10 !== m ? e10 : void 0;
}
function J(e10, t2, r2) {
  if (F(t2)) return t2;
  let n2 = t2[b];
  if (!n2) return x(t2, (i2, a2) => G(e10, n2, t2, i2, a2, r2)), t2;
  if (n2.scope_ !== e10) return t2;
  if (!n2.modified_) return H(e10, n2.base_, true), n2.base_;
  if (!n2.finalized_) {
    n2.finalized_ = true, n2.scope_.unfinalizedDrafts_--;
    let t3 = n2.copy_, i2 = t3, a2 = false;
    3 === n2.type_ && (i2 = new Set(t3), t3.clear(), a2 = true), x(i2, (i3, o2) => G(e10, n2, t3, i3, o2, r2, a2)), H(e10, t3, false), r2 && e10.patches_ && D("Patches").generatePatches_(n2, r2, e10.patches_, e10.inversePatches_);
  }
  return n2.copy_;
}
function G(e10, t2, r2, n2, i2, a2, o2) {
  if (O(i2)) {
    let o3 = J(e10, i2, a2 && t2 && 3 !== t2.type_ && !E(t2.assigned_, n2) ? a2.concat(n2) : void 0);
    if (A(r2, n2, o3), !O(o3)) return;
    e10.canAutoFreeze_ = false;
  } else o2 && r2.add(i2);
  if (P(i2) && !F(i2)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1) return;
    J(e10, i2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof n2 && Object.prototype.propertyIsEnumerable.call(r2, n2) && H(e10, i2);
  }
}
function H(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && z(t2, r2);
}
var U = { get(e10, t2) {
  if (t2 === b) return e10;
  let r2 = R(e10);
  if (!E(r2, t2)) return function(e11, t3, r3) {
    var n3;
    let i2 = Q(t3, r3);
    return i2 ? "value" in i2 ? i2.value : null === (n3 = i2.get) || void 0 === n3 ? void 0 : n3.call(e11.draft_) : void 0;
  }(e10, r2, t2);
  let n2 = r2[t2];
  return e10.finalized_ || !P(n2) ? n2 : n2 === X(e10.base_, t2) ? (Z(e10), e10.copy_[t2] = ee(n2, e10)) : n2;
}, has: (e10, t2) => t2 in R(e10), ownKeys: (e10) => Reflect.ownKeys(R(e10)), set(e10, t2, r2) {
  let n2 = Q(R(e10), t2);
  if (null == n2 ? void 0 : n2.set) return n2.set.call(e10.draft_, r2), true;
  if (!e10.modified_) {
    let n3 = X(R(e10), t2), i2 = null == n3 ? void 0 : n3[b];
    if (i2 && i2.base_ === r2) return e10.copy_[t2] = r2, e10.assigned_[t2] = false, true;
    if ((r2 === n3 ? 0 !== r2 || 1 / r2 == 1 / n3 : r2 != r2 && n3 != n3) && (void 0 !== r2 || E(e10.base_, t2))) return true;
    Z(e10), Y(e10);
  }
  return !!(e10.copy_[t2] === r2 && (void 0 !== r2 || t2 in e10.copy_) || Number.isNaN(r2) && Number.isNaN(e10.copy_[t2])) || (e10.copy_[t2] = r2, e10.assigned_[t2] = true, true);
}, deleteProperty: (e10, t2) => (void 0 !== X(e10.base_, t2) || t2 in e10.base_ ? (e10.assigned_[t2] = false, Z(e10), Y(e10)) : delete e10.assigned_[t2], e10.copy_ && delete e10.copy_[t2], true), getOwnPropertyDescriptor(e10, t2) {
  let r2 = R(e10), n2 = Reflect.getOwnPropertyDescriptor(r2, t2);
  return n2 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t2, enumerable: n2.enumerable, value: r2[t2] } : n2;
}, defineProperty() {
  w(11);
}, getPrototypeOf: (e10) => _(e10.base_), setPrototypeOf() {
  w(12);
} }, B = {};
function X(e10, t2) {
  let r2 = e10[b];
  return (r2 ? R(r2) : e10)[t2];
}
function Q(e10, t2) {
  if (!(t2 in e10)) return;
  let r2 = _(e10);
  for (; r2; ) {
    let e11 = Object.getOwnPropertyDescriptor(r2, t2);
    if (e11) return e11;
    r2 = _(r2);
  }
}
function Y(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && Y(e10.parent_));
}
function Z(e10) {
  e10.copy_ || (e10.copy_ = T(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function ee(e10, t2) {
  let r2 = $(e10) ? D("MapSet").proxyMap_(e10, t2) : N(e10) ? D("MapSet").proxySet_(e10, t2) : function(e11, t3) {
    let r3 = Array.isArray(e11), n2 = { type_: r3 ? 1 : 0, scope_: t3 ? t3.scope_ : y, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = n2, a2 = U;
    r3 && (i2 = [n2], a2 = B);
    let { revoke: o2, proxy: l2 } = Proxy.revocable(i2, a2);
    return n2.draft_ = l2, n2.revoke_ = o2, l2;
  }(e10, t2);
  return (t2 ? t2.scope_ : y).drafts_.push(r2), r2;
}
x(U, (e10, t2) => {
  B[e10] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), B.deleteProperty = function(e10, t2) {
  return B.set.call(this, e10, t2, void 0);
}, B.set = function(e10, t2, r2) {
  return U.set.call(this, e10[0], t2, r2, e10[0]);
};
var et = new class {
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
      if ("function" != typeof t2 && w(6), void 0 !== r2 && "function" != typeof r2 && w(7), P(e11)) {
        let i2 = q(this), a2 = ee(e11, void 0), o2 = true;
        try {
          n2 = t2(a2), o2 = false;
        } finally {
          o2 ? C(i2) : W(i2);
        }
        return I(i2, r2), V(n2, i2);
      }
      if (e11 && "object" == typeof e11) w(1, e11);
      else {
        if (void 0 === (n2 = t2(e11)) && (n2 = e11), n2 === m && (n2 = void 0), this.autoFreeze_ && z(n2, true), r2) {
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
    }, "boolean" == typeof (null == e10 ? void 0 : e10.autoFreeze) && this.setAutoFreeze(e10.autoFreeze), "boolean" == typeof (null == e10 ? void 0 : e10.useStrictShallowCopy) && this.setUseStrictShallowCopy(e10.useStrictShallowCopy);
  }
  createDraft(e10) {
    var t2;
    P(e10) || w(8), O(e10) && (O(t2 = e10) || w(10, t2), e10 = function e11(t3) {
      let r3;
      if (!P(t3) || F(t3)) return t3;
      let n3 = t3[b];
      if (n3) {
        if (!n3.modified_) return n3.base_;
        n3.finalized_ = true, r3 = T(t3, n3.scope_.immer_.useStrictShallowCopy_);
      } else r3 = T(t3, true);
      return x(r3, (t4, n4) => {
        A(r3, t4, e11(n4));
      }), n3 && (n3.finalized_ = false), r3;
    }(t2));
    let r2 = q(this), n2 = ee(e10, void 0);
    return n2[b].isManual_ = true, W(r2), n2;
  }
  finishDraft(e10, t2) {
    let r2 = e10 && e10[b];
    r2 && r2.isManual_ || w(9);
    let { scope_: n2 } = r2;
    return I(n2, t2), V(void 0, n2);
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
    return O(e10) ? n2(e10, t2) : this.produce(e10, (e11) => n2(e11, t2));
  }
}(), er = et.produce;
et.produceWithPatches.bind(et), et.setAutoFreeze.bind(et), et.setUseStrictShallowCopy.bind(et), et.applyPatches.bind(et), et.createDraft.bind(et), et.finishDraft.bind(et), v || (v = 1, h = p || (p = {}), function(t2) {
  var r2 = "object" == typeof globalThis ? globalThis : "object" == typeof e ? e : "object" == typeof self ? self : "object" == typeof this ? this : function() {
    throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
  }(), n2 = i2(h);
  function i2(e10, t3) {
    return function(r3, n3) {
      Object.defineProperty(e10, r3, { configurable: true, writable: true, value: n3 }), t3 && t3(r3, n3);
    };
  }
  void 0 !== r2.Reflect && (n2 = i2(r2.Reflect, n2)), t2(n2, r2), void 0 === r2.Reflect && (r2.Reflect = h);
}(function(e10, t2) {
  var r2, n2 = "function" == typeof Symbol, i2 = n2 && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : $2("Symbol.toPrimitive not found."), a2 = n2 && void 0 !== Symbol.iterator ? Symbol.iterator : $2("Symbol.iterator not found."), o2 = Object.getPrototypeOf(Function), l2 = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : $2("A valid Map constructor could not be found."), s2 = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : $2("A valid Set constructor could not be found."), c2 = "function" == typeof WeakMap ? WeakMap : $2("A valid WeakMap constructor could not be found."), u2 = n2 ? Symbol.for("@reflect-metadata:registry") : void 0, f2 = (!g2(u2) && w2(t2.Reflect) && Object.isExtensible(t2.Reflect) && (r2 = t2.Reflect[u2]), g2(r2) && (r2 = function() {
    g2(u2) || void 0 === t2.Reflect || u2 in t2.Reflect || "function" != typeof t2.Reflect.defineMetadata || (r3 = (e11 = t2.Reflect).defineMetadata, n3 = e11.hasOwnMetadata, i3 = e11.getOwnMetadata, a3 = e11.getOwnMetadataKeys, o3 = e11.deleteMetadata, f3 = new c2(), d3 = { isProviderFor: function(e12, t3) {
      var r4 = f3.get(e12);
      return !!(!g2(r4) && r4.has(t3)) || !!a3(e12, t3).length && (g2(r4) && (r4 = new s2(), f3.set(e12, r4)), r4.add(t3), true);
    }, OrdinaryDefineOwnMetadata: r3, OrdinaryHasOwnMetadata: n3, OrdinaryGetOwnMetadata: i3, OrdinaryOwnMetadataKeys: a3, OrdinaryDeleteMetadata: o3 });
    var e11, r3, n3, i3, a3, o3, f3, d3, p3, h3, y3, v3 = new c2(), m3 = { registerProvider: function(e12) {
      if (!Object.isExtensible(m3)) throw Error("Cannot add provider to a frozen registry.");
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
          void 0 === y3 && (y3 = new s2()), y3.add(e12);
      }
    }, getProvider: b3, setProvider: function(e12, t3, r4) {
      if (!function(e13) {
        if (g2(e13)) throw TypeError();
        return p3 === e13 || h3 === e13 || !g2(y3) && y3.has(e13);
      }(r4)) throw Error("Metadata provider not registered.");
      var n4 = b3(e12, t3);
      if (n4 !== r4) {
        if (!g2(n4)) return false;
        var i4 = v3.get(e12);
        g2(i4) && (i4 = new l2(), v3.set(e12, i4)), i4.set(t3, r4);
      }
      return true;
    } };
    return m3;
    function b3(e12, t3) {
      var r4, n4 = v3.get(e12);
      return g2(n4) || (r4 = n4.get(t3)), g2(r4) && (r4 = function(e13, t4) {
        if (!g2(p3)) {
          if (p3.isProviderFor(e13, t4)) return p3;
          if (!g2(h3)) {
            if (h3.isProviderFor(e13, t4)) return p3;
            if (!g2(y3)) for (var r5 = x2(y3); ; ) {
              var n5 = S2(r5);
              if (!n5) return;
              var i4 = n5.value;
              if (i4.isProviderFor(e13, t4)) return E2(r5), i4;
            }
          }
        }
        if (!g2(d3) && d3.isProviderFor(e13, t4)) return d3;
      }(e12, t3), g2(r4) || (g2(n4) && (n4 = new l2(), v3.set(e12, n4)), n4.set(t3, r4))), r4;
    }
  }()), !g2(u2) && w2(t2.Reflect) && Object.isExtensible(t2.Reflect) && Object.defineProperty(t2.Reflect, u2, { enumerable: false, configurable: false, writable: false, value: r2 }), r2), d2 = function(e11) {
    var t3 = new c2(), r3 = { isProviderFor: function(e12, r4) {
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
      for (var a3 = x2(i3.keys()), o3 = 0; ; ) {
        var l3 = S2(a3);
        if (!l3) return r4.length = o3, r4;
        var s3 = l3.value;
        try {
          r4[o3] = s3;
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
      var o3 = t3.get(n4), s3 = false;
      if (g2(o3)) {
        if (!a3) return;
        o3 = new l2(), t3.set(n4, o3), s3 = true;
      }
      var c3 = o3.get(i3);
      if (g2(c3)) {
        if (!a3) return;
        if (c3 = new l2(), o3.set(i3, c3), !e11.setProvider(n4, i3, r3)) throw o3.delete(i3), s3 && t3.delete(n4), Error("Wrong provider for target.");
      }
      return c3;
    }
  }(f2);
  function p2(e11, t3, r3) {
    var n3 = N2(t3, r3, false);
    return !g2(n3) && !!n3.OrdinaryHasOwnMetadata(e11, t3, r3);
  }
  function h2(e11, t3, r3) {
    var n3 = N2(t3, r3, false);
    if (!g2(n3)) return n3.OrdinaryGetOwnMetadata(e11, t3, r3);
  }
  function y2(e11, t3, r3, n3) {
    N2(r3, n3, true).OrdinaryDefineOwnMetadata(e11, t3, r3, n3);
  }
  function v2(e11, t3) {
    var r3 = N2(e11, t3, false);
    return r3 ? r3.OrdinaryOwnMetadataKeys(e11, t3) : [];
  }
  function m2(e11) {
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
      switch (m2(e12)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return e12;
      }
      var r3 = M2(e12, i2);
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
  function M2(e11, t3) {
    var r3 = e11[t3];
    if (null != r3) {
      if (!P2(r3)) throw TypeError();
      return r3;
    }
  }
  function x2(e11) {
    var t3 = M2(e11, a2);
    if (!P2(t3)) throw TypeError();
    var r3 = t3.call(e11);
    if (!w2(r3)) throw TypeError();
    return r3;
  }
  function S2(e11) {
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
  function $2(e11) {
    throw e11;
  }
  function N2(e11, t3, r3) {
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
        switch (m2(e12)) {
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
      var n3 = v2(t4, r3), i3 = A2(t4);
      if (null === i3) return n3;
      var a3 = e12(i3, r3);
      if (a3.length <= 0) return n3;
      if (n3.length <= 0) return a3;
      for (var o3 = new s2(), l3 = [], c3 = 0; c3 < n3.length; c3++) {
        var u3 = n3[c3], f3 = o3.has(u3);
        f3 || (o3.add(u3), l3.push(u3));
      }
      for (var d3 = 0; d3 < a3.length; d3++) {
        var u3 = a3[d3], f3 = o3.has(u3);
        f3 || (o3.add(u3), l3.push(u3));
      }
      return l3;
    }(e11, t3);
  }), e10("getOwnMetadataKeys", function(e11, t3) {
    if (!w2(e11)) throw TypeError();
    return g2(t3) || (t3 = _2(t3)), v2(e11, t3);
  }), e10("deleteMetadata", function(e11, t3, r3) {
    if (!w2(t3)) throw TypeError();
    g2(r3) || (r3 = _2(r3));
    var n3 = N2(t3, r3, false);
    return !g2(n3) && n3.OrdinaryDeleteMetadata(e11, t3, r3);
  });
}));
class en {
  static getOwnPropertyNames(e10) {
    return Reflect.getMetadataKeys(e10);
  }
  static get(e10, t2) {
    return Reflect.getMetadata(t2, e10);
  }
  static define(e10, t2, r2, n2) {
    if (e10 && e10.constructor && e10.constructor != Object) {
      if (d(r2)) {
        var i2, a2;
        Reflect.defineMetadata(t2, er(null !== (a2 = null !== (i2 = Reflect.getMetadata(t2, e10)) && void 0 !== i2 ? i2 : n2) && void 0 !== a2 ? a2 : {}, r2), e10);
        return;
      }
      Reflect.defineMetadata(t2, r2, e10);
    }
  }
}
let ei = { path: [], branch: [] };
class ea extends TypeError {
  constructor(e10, t2) {
    let r2;
    let { message: n2, explanation: i2, ...a2 } = e10, { path: o2 } = e10, l2 = 0 === o2.length ? n2 : `At path: ${o2.join(".")} -- ${n2}`;
    super(null != i2 ? i2 : l2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != i2 && (this.cause = l2), Object.assign(this, a2), this.name = this.constructor.name, this.failures = () => null != r2 ? r2 : r2 = [e10, ...t2()];
  }
}
let eo = (e10) => !!e10 && e10[el] == el, el = Symbol("Type");
function* es(e10, r2, n2, i2) {
  let a2 = e10;
  for (let e11 of (u(a2) || (a2 = [a2]), a2)) {
    let a3 = function(e12, r3, n3, i3) {
      if (true === e12) return;
      let a4 = {};
      a4 = false === e12 ? {} : c(e12) ? { message: e12 } : e12;
      let { path: o2, branch: l2, node: s2 } = r3, { type: u2 } = n3, { refinement: f2, message: d2 = t(i3) ? "Required" : `Expected a value of type \`${u2}\`${f2 ? ` with refinement \`${f2}\`` : ""}, but received: \`${i3}\`` } = a4;
      return { ...a4, value: i3, type: u2, refinement: f2, key: o2[o2.length - 1], path: o2, branch: l2, node: s2, message: d2 };
    }(e11, r2, n2, i2);
    a3 && (yield a3);
  }
}
function ec(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = eu(e10, t2, r2), i2 = function(e11) {
    let { done: t3, value: r3 } = e11.next();
    return t3 ? void 0 : r3;
  }(n2);
  return i2[0] ? [new ea(i2[0], function* () {
    for (let e11 of n2) e11[0] && (yield e11[0]);
  }), void 0] : [void 0, i2[1]];
}
function* eu(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e10], node: o2 = { current: t2 }, coerce: l2 = false, mask: s2 = false } = r2, c2 = { mask: s2, path: i2, branch: a2, node: o2 }, u2 = e10;
  if (l2) {
    let r3 = t2.coercer(e10, c2);
    void 0 != r3 && (u2 = r3);
  }
  let f2 = 0;
  for (let n2 of es(t2.validator(u2, c2), c2, t2, e10)) n2.explanation = r2.message, f2 = 2, yield [n2, void 0];
  for (let [e11, d2, p2] of t2.entries(u2, c2)) for (let t3 of eu(d2, p2, { path: void 0 === e11 ? i2 : [...i2, e11], branch: void 0 === e11 ? a2 : [...a2, d2], node: void 0 === e11 ? o2 : { current: p2, parent: o2 }, coerce: l2, mask: s2, message: r2.message })) t3[0] ? (f2 = null != t3[0].refinement ? 1 : 2, yield [t3[0], void 0]) : l2 && (d2 = t3[1], void 0 === e11 ? u2 = d2 : u2 instanceof Map ? u2.set(e11, d2) : u2 instanceof Set ? u2.add(d2) : n(u2) && (u2[e11] = d2));
  if (2 !== f2) for (let n2 of es(t2.refiner(u2, c2), c2, t2, e10)) n2.explanation = r2.message, f2 = 1, yield [n2, void 0];
  0 === f2 && (yield [void 0, u2]);
}
let ef = (e10) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = e10(...r2), a2 = (e11, t3) => {
    var r3;
    let n3 = null !== (r3 = en.get(e11, t3)) && void 0 !== r3 ? r3 : {};
    en.define(e11, t3, { ...n3, type: i2 });
  };
  return a2.toString = () => `@type:${i2.type}`, new Proxy(a2, { ownKeys: () => [...Object.getOwnPropertyNames(i2), ...Object.getOwnPropertySymbols(i2)], get: (e11, t3) => i2[t3] });
}, ed = (e10) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = (t3) => e10(t3, ...r2);
  return new Proxy((e11, t3) => {
    en.define(e11, t3, (e12) => {
      var t4;
      (null !== (t4 = e12.modifies) && void 0 !== t4 ? t4 : e12.modifies = []).push({ modify: i2 });
    }, {});
  }, { get(e11, t3) {
    if ("modify" == t3) return i2;
  } });
};
const _ep = class _ep {
  static create(e10, r2, n2) {
    var a2, o2;
    let l2;
    let s2 = null !== (o2 = null != r2 ? r2 : null === (a2 = e10[_ep.underlying]) || void 0 === a2 ? void 0 : a2.schema) && void 0 !== o2 ? o2 : {};
    return new Proxy({}, { ownKeys(t2) {
      let r3 = /* @__PURE__ */ new Map();
      if (n2) {
        if (e10[n2]) for (let t3 of Object.getOwnPropertyNames(e10[n2])) r3.set(t3, t3);
        if (s2 && s2[n2]) for (let e11 of Object.getOwnPropertyNames(s2[n2])) r3.set(e11, e11);
      } else {
        for (let t3 of Object.getOwnPropertyNames(e10)) r3.set(t3, t3);
        if (s2) for (let e11 of Object.getOwnPropertyNames(s2)) r3.set(e11, e11);
      }
      return [...r3.keys()];
    }, get(r3, a3) {
      if (a3 === _ep.meta) return null != l2 ? l2 : l2 = _ep.create(e10, s2, _ep.meta);
      if (n2) {
        var o3, c2;
        if (i(e10)) {
          let r4 = null == e10 ? void 0 : null === (c2 = e10[n2]) || void 0 === c2 ? void 0 : c2[a3];
          if (!t(r4)) return r4;
        }
        return s2 ? null == s2 ? void 0 : null === (o3 = s2[n2]) || void 0 === o3 ? void 0 : o3[a3] : void 0;
      }
      if (i(e10)) {
        let r4 = null == e10 ? void 0 : e10[a3];
        if (!t(r4)) return r4;
      }
      return s2 ? s2[a3] : void 0;
    } });
  }
  static schemaProp(e10, t2) {
    return eh(e10.schema, t2);
  }
  static metaProp(e10, t2) {
    return ey(e10.schema, t2);
  }
};
__publicField(_ep, "RecordKey", Symbol("RecordKey"));
__publicField(_ep, "meta", Symbol("meta"));
__publicField(_ep, "optional", Symbol("optional"));
__publicField(_ep, "underlying", Symbol("underlying"));
__publicField(_ep, "unwrap", Symbol("unwrap"));
__publicField(_ep, "extractSchema", (e10) => new ev().toValue(e10));
__publicField(_ep, "extractMeta", (e10) => {
  var t2;
  return new ev().toValue(null !== (t2 = e10.meta) && void 0 !== t2 ? t2 : e10[_ep.meta]);
});
let ep = _ep;
let eh = (e10, t2) => {
  var r2;
  if (i(e10)) return null !== (r2 = e10[t2]) && void 0 !== r2 ? r2 : e10[ep.unwrap] ? eh(e10[ep.unwrap]().schema, t2) : void 0;
}, ey = (e10, t2) => {
  var r2, n2;
  if (i(e10)) return null !== (n2 = null === (r2 = e10[ep.meta]) || void 0 === r2 ? void 0 : r2[t2]) && void 0 !== n2 ? n2 : e10[ep.unwrap] ? ey(e10[ep.unwrap]().schema, t2) : void 0;
};
class ev {
  constructor(e10 = false) {
    this.deref = e10;
  }
  toValue(e10) {
    if (e10) {
      if (!t(e10.schema)) return this.toValue(e10.schema);
      if (this.deref && e10[ep.unwrap]) return this.toValue(e10[ep.unwrap]());
      if (a(e10)) return this.toArray(e10);
      if (e10.constructor === Object) return this.toObject(e10);
    }
    return e10;
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
class em {
  static parse(e10) {
    if ("" === e10) return [];
    if ("/" === e10) return [""];
    if ("/" !== e10.charAt(0)) throw Error("Invalid JSON pointer: " + e10);
    let t2 = e10.substring(1).split(/\//);
    return t2.map((e11, r2) => em.unescape(e11, r2 === t2.length - 1));
  }
  static create() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return 0 === e10.length ? "" : "/" + e10.map(em.escape).join("/");
  }
  static unescape(e10, t2) {
    return "" == e10 && t2 ? ep.RecordKey : e10.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e10) {
    return e10 == ep.RecordKey ? "" : e10.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e10, t2) {
    let r2 = Array.isArray(t2) ? t2 : em.parse(t2);
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n2 = r2[t3];
      if (t3 > 0 && n2 == ep.RecordKey) return r2[t3 - 1];
      if (!("object" == typeof e10 && n2 in e10)) throw Error("Invalid reference token: " + n2);
      e10 = e10[n2];
    }
    return e10;
  }
}
_a = el;
const _eg = class _eg {
  constructor(e10) {
    __publicField(this, _a, el);
    __publicField(this, "schema");
    if (e10) {
      this.schema = ep.create(e10);
      return;
    }
    this.schema = null != e10 ? e10 : null;
  }
  get meta() {
    return this.schema ? this.schema[ep.meta] : {};
  }
  get type() {
    var e10, t2;
    return null !== (t2 = null === (e10 = this.schema) || void 0 === e10 ? void 0 : e10.type) && void 0 !== t2 ? t2 : "unknown";
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
      if (t3.length >= 2 && (t3.startsWith("{") && t3.endsWith("}") || t3.startsWith("[") && t3.endsWith("]"))) try {
        return JSON.parse(t3);
      } catch (e11) {
      }
    }
    return e10;
  }
  *entries(e10) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  }
  validate(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return ec(e10, this, t2);
  }
  create(e10) {
    let t2 = ec(e10, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e10) {
    let t2 = ec(e10, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  use() {
    for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e11, t3) => t3.modify(e11), this);
  }
  optional() {
    return e_.create(this);
  }
  default(e10) {
    return ew.create(this, e10);
  }
};
__publicField(_eg, "define", ef(function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _eg {
    validator(t2, r2) {
      return e10(t2, r2);
    }
  }(null);
}));
__publicField(_eg, "fromTypeObject", (e10, t2) => {
  var r2, n2, i2;
  let a2 = null !== (n2 = null !== (r2 = e10.type) && void 0 !== r2 ? r2 : t2) && void 0 !== n2 ? n2 : new _eg({});
  return e10.modifies ? a2.use(...null !== (i2 = e10.modifies) && void 0 !== i2 ? i2 : []) : a2;
});
let eg = _eg;
class eb extends eg {
  static of(e10, t2) {
    return new eb({ ...t2, [ep.underlying]: e10 });
  }
  static refine(e10, t2, r2) {
    return new class extends eb {
      *refiner(n2, i2) {
        for (let a2 of (yield* this.unwrap.refiner(n2, i2), es(t2(n2, i2), i2, e10, n2))) yield { ...a2, refinement: Object.keys(r2).join(",") };
      }
    }({ ...r2, [ep.underlying]: e10 });
  }
  get unwrap() {
    let e10 = this.schema[ep.unwrap];
    return e10 ? e10() : this.schema[ep.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei;
    yield* this.unwrap.entries(e10, { ...t2, node: { current: this, parent: t2.node } });
  }
  validator(e10, t2) {
    return es(this.unwrap.validator(e10, t2), t2, this, e10);
  }
  refiner(e10, t2) {
    return es(this.unwrap.refiner(e10, t2), t2, this, e10);
  }
  coercer(e10, t2) {
    return this.unwrap.coercer(e10, t2);
  }
}
const _ew = class _ew extends eb {
  coercer(e10, t2) {
    return void 0 === e10 ? this.schema.default : super.unwrap.coercer(e10, t2);
  }
};
__publicField(_ew, "create", ef((e10, t2) => new _ew({ default: t2, [ep.underlying]: e10 })));
let ew = _ew;
const _e_ = class _e_ extends eb {
  refiner(e10, t2) {
    return void 0 === e10 || super.unwrap.refiner(e10, t2);
  }
  validator(e10, t2) {
    return void 0 === e10 || super.unwrap.validator(e10, t2);
  }
};
__publicField(_e_, "create", ef((e10) => new _e_({ [ep.underlying]: e10, [ep.optional]: e10 })));
let e_ = _e_;
const _eO = class _eO extends eb {
};
__publicField(_eO, "create", ef((e10, t2) => new _eO({ $ref: e10, [ep.unwrap]: t2 })));
let eO = _eO;
const _eP = class _eP extends eg {
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
__publicField(_eP, "create", ef(() => new _eP()));
let eP = _eP;
const _ej = class _ej extends eg {
  get type() {
    return "null";
  }
  validator(e10, t2) {
    return r(e10);
  }
};
__publicField(_ej, "create", ef(() => new _ej({ type: "null" })));
let ej = _ej;
const _eM = class _eM extends eg {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return c(e10);
  }
};
__publicField(_eM, "create", ef(() => new _eM({ type: "string" })));
let eM = _eM;
const _ex = class _ex extends eg {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return o(e10);
  }
  coercer(e10, t2) {
    try {
      let t3 = void 0 != e10 ? parseFloat(String(e10)) : void 0;
      if (o(t3)) return t3;
    } catch (e11) {
    }
  }
};
__publicField(_ex, "create", ef(() => new _ex({ type: "number" })));
let ex = _ex;
const _eS = class _eS extends eg {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return l(e10);
  }
  coercer(e10, t2) {
    try {
      let t3 = void 0 != e10 ? parseInt(String(e10)) : void 0;
      return l(t3) ? t3 : void 0;
    } catch (e11) {
      return;
    }
  }
};
__publicField(_eS, "create", ef(() => new _eS({ type: "integer" })));
let eS = _eS;
const _eE = class _eE extends eg {
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
__publicField(_eE, "create", ef(() => new _eE({ type: "boolean" })));
let eE = _eE;
const _eA = class _eA extends eg {
  get type() {
    return "binary";
  }
  validator(e10, t2) {
    return e10 instanceof File || e10 instanceof Blob;
  }
};
__publicField(_eA, "create", ef(() => new _eA({ type: "string", format: "binary" })));
let eA = _eA;
const _e$ = class _e$ extends eg {
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
__publicField(_e$, "create", ef(_e$.createEnum));
__publicField(_e$, "literal", ef((e10) => new _e$({ enum: [e10] })));
__publicField(_e$, "nativeEnum", ef((e10) => new _e$({ enum: Object.values(e10) })));
let e$ = _e$;
const _eN = class _eN extends eg {
  get type() {
    return "never";
  }
  validator(e10, t2) {
    return false;
  }
};
__publicField(_eN, "create", ef(() => new _eN(false)));
let eN = _eN;
class eR extends eg {
  static create(e10) {
    let t2 = function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = [];
      for (let [r2, n2] of Object.entries(e11)) ep.schemaProp(n2, ep.optional) || t3.push(r2);
      return t3;
    };
    return ef(() => {
      if (e10) {
        if (f(e10)) {
          let i2 = new e10(), a2 = {};
          for (let [e11, t3] of Object.entries(i2)) a2[e11] = e$.literal(t3);
          for (let e11 of en.getOwnPropertyNames(i2)) {
            let t3 = en.get(i2, e11);
            if (t3) {
              let i3 = eg.fromTypeObject(t3, a2[e11]);
              if (e11 in a2) {
                var r2, n2;
                a2[e11] = i3.default(null === (n2 = a2[e11].schema) || void 0 === n2 ? void 0 : null === (r2 = n2.enum) || void 0 === r2 ? void 0 : r2[0]);
              } else a2[e11] = i3;
            }
          }
          return new eR({ type: "object", properties: a2, required: t2(a2), additionalProperties: eN.create() });
        }
        return new eR({ type: "object", properties: e10, required: t2(e10), additionalProperties: eN.create() });
      }
      return new eR({ type: "object", properties: {}, required: [], additionalProperties: eN.create() });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei;
    if (n(e10)) {
      var r2;
      let n2 = new Set(Object.keys(e10));
      if (this.schema.properties) for (let t3 in this.schema.properties) n2.delete(t3), yield [t3, e10[t3], this.schema.properties[t3]];
      if ((null === (r2 = t2.node) || void 0 === r2 ? void 0 : r2.current.type) !== "intersection") for (let t3 of n2) yield [t3, e10[t3], this.schema.additionalProperties];
    }
  }
  validator(e10, t2) {
    return n(e10);
  }
  coercer(e10, t2) {
    if (n(e10)) {
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
const _eT = class _eT extends eg {
  get type() {
    return "record";
  }
  *entries(e10) {
    if (n(e10)) for (let [t2, r2] of Object.entries(e10)) yield [ep.RecordKey, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
  }
  validator(e10) {
    return n(e10);
  }
};
__publicField(_eT, "create", ef((e10, t2) => new _eT({ type: "object", propertyNames: e10, additionalProperties: t2 })));
let eT = _eT;
const _ez = class _ez extends eg {
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], Array.isArray(e10)) for (let [t2, r2] of e10.entries()) yield [t2, r2, this.schema.items];
  }
  validator(e10) {
    return a(e10);
  }
  coercer(e10) {
    return a(e10) ? e10.slice() : e10;
  }
};
__publicField(_ez, "create", ef((e10) => new _ez({ type: "array", items: e10 })));
let ez = _ez;
const _ek = class _ek extends eg {
  get type() {
    return "tuple";
  }
  *entries(e10, t2) {
    if (a(e10)) {
      let t3 = Math.max(this.schema.items.length, e10.length);
      for (let n2 = 0; n2 < t3; n2++) {
        var r2;
        yield [n2, e10[n2], null !== (r2 = this.schema.items[n2]) && void 0 !== r2 ? r2 : eN.create()];
      }
    }
  }
  validator(e10) {
    return a(e10) && e10.length === this.schema.items.length;
  }
  coercer(e10) {
    return a(e10) ? e10.slice() : e10;
  }
};
__publicField(_ek, "create", ef((e10) => new _ek({ type: "array", items: e10 })));
let ek = _ek;
const _eF = class _eF extends eg {
  get type() {
    return "intersection";
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei;
    for (let r2 of this.schema.allOf) yield* r2.entries(e10, t2);
  }
  *validator(e10, t2) {
    for (let r2 of this.schema.allOf) yield* es(r2.validator(e10, t2), t2, this, e10);
  }
  *refiner(e10, t2) {
    for (let r2 of this.schema.allOf) yield* es(r2.refiner(e10, t2), t2, this, e10);
  }
};
__publicField(_eF, "create", ef(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _eF({ allOf: t2 });
}));
let eF = _eF;
const _eK = class _eK extends eg {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(e10) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
    return ef(() => {
      let t3 = [];
      if (1 == r2.length && r2[0].constructor == Object) for (let [n3, i2] of Object.entries(r2[0])) if (ep.schemaProp(i2, "$ref")) t3.push(i2);
      else {
        let r3 = { [e10]: e$.literal(n3) };
        for (let [e11, t4, n4] of i2.entries({}, ei)) r3[String(e11)] = n4;
        t3.push(eR.create(r3));
      }
      else for (let e11 of r2) f(e11) && t3.push(eR.create(e11));
      return new _eK({ oneOf: t3, discriminator: { propertyName: e10 } });
    })();
  }
  discriminatorPropType(e10) {
    var t2;
    return null !== (t2 = this._discriminatorPropName) && void 0 !== t2 ? t2 : this._discriminatorPropName = (() => {
      var t3, r2, n2, i2;
      let a2 = null !== (n2 = null === (t3 = this.schema.discriminator) || void 0 === t3 ? void 0 : t3.propertyName) && void 0 !== n2 ? n2 : "", o2 = [], l2 = [];
      for (let e11 of this.schema.oneOf) {
        let t4 = ep.schemaProp(e11, "properties")[a2];
        if (!t4) continue;
        let r3 = t4.schema.enum;
        r3 && o2.push(...r3), l2.push(t4.meta);
      }
      return eb.of(e$.create(o2), { [ep.meta]: ep.create(l2[0], null !== (i2 = null === (r2 = e10.node) || void 0 === r2 ? void 0 : r2.current.meta) && void 0 !== i2 ? i2 : {}) });
    })();
  }
  discriminatorMapping(e10, t2, r2) {
    var n2, i2, a2;
    if (this._discriminatorMappingProps.get(t2)) return this._discriminatorMappingProps.get(t2);
    if ((null !== (a2 = null === (i2 = this.discriminatorPropType(r2)) || void 0 === i2 ? void 0 : null === (n2 = i2.schema) || void 0 === n2 ? void 0 : n2.enum) && void 0 !== a2 ? a2 : []).includes(t2)) {
      let r3 = this.schema.oneOf.find((r4) => {
        let n3 = ep.schemaProp(r4, "properties")[e10];
        if (n3) {
          let [e11, r5] = n3.validate(t2);
          return !e11;
        }
        return false;
      });
      if (r3) {
        if (!this._discriminatorMappingProps.has(t2)) {
          let n3 = {};
          for (let [t3, i3] of Object.entries(ep.schemaProp(r3, "properties"))) t3 !== e10 && (n3[t3] = i3);
          this._discriminatorMappingProps.set(t2, n3);
        }
        return this._discriminatorMappingProps.get(t2);
      }
    }
    return {};
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei;
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, n2 = null == e10 ? void 0 : e10[r2], i2 = eR.create({ [r2]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, n2, t2) });
      yield* i2.entries(e10, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e10) {
    for (let t2 of this.schema.oneOf) {
      let [r2, n2] = ec(e10, t2, { coerce: true });
      if (!r2) return n2;
    }
    return e10;
  }
  validator(e10, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, n2 = null == e10 ? void 0 : e10[r3];
      return eR.create({ [r3]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, n2, t2) }).validator(e10, t2);
    }
    let r2 = [];
    for (let n2 of this.schema.oneOf) {
      let [...i2] = eu(e10, n2, t2), [a2] = i2;
      if (a2 && !a2[0]) return [];
      for (let [e11] of i2) e11 && r2.push(e11);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e11) => e11.type).join(" | ")}\`, but received: ${e10}`, ...r2];
  }
};
__publicField(_eK, "create", ef(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _eK({ oneOf: t2 });
}));
let eK = _eK;
let eD = eO.create, eI = eP.create, eC = eN.create, eW = ej.create, eq = eM.create, eL = ed((e10, t2, r2) => eb.refine(e10, (e11) => !!e11 && e11.length >= t2 || (null != r2 ? r2 : `Expected string value length great than or equal ${t2}, but received "${e11}"`), { minLength: t2 })), eV = ed((e10, t2, r2) => eb.refine(e10, (e11) => !!e11 && e11.length <= t2 || (null != r2 ? r2 : `Expected string value length less than or equal ${t2}, but received "${e11}"`), { maxLength: t2 })), eJ = ed((e10, t2, r2) => eb.refine(e10, (n2) => !!t2.test(n2) || (null != r2 ? r2 : `Expected a ${e10.type} matching \`/${t2.source}/\` but received "${n2}"`), { pattern: t2.source })), eG = ex.create, eH = eS.create, eU = ed((e10, t2, r2) => eb.refine(e10, (e11) => e11 >= t2 || (null != r2 ? r2 : `Expected value great than or equal ${t2}, but received "${e11}"`), { minimum: t2 })), eB = ed((e10, t2, r2) => eb.refine(e10, (e11) => e11 > t2 || (null != r2 ? r2 : `Expected value great than ${t2}, but received "${e11}"`), { exclusiveMinimum: t2 })), eX = ed((e10, t2, r2) => eb.refine(e10, (e11) => e11 <= t2 || (null != r2 ? r2 : `Expected value less than or equal ${t2}, but received "${e11}"`), { maximum: t2 })), eQ = ed((e10, t2, r2) => eb.refine(e10, (e11) => e11 < t2 || (null != r2 ? r2 : `Expected value less than or equal ${t2}, but received "${e11}"`), { exclusiveMaximum: t2 })), eY = ed((e10, t2, r2) => eb.refine(e10, (e11) => e11 % t2 == 0 || (null != r2 ? r2 : `Expected value multiple of ${t2}, but received "${e11}"`), { multipleOf: t2 })), eZ = eE.create, e0 = eA.create, e1 = e$.create, e2 = e$.nativeEnum, e3 = e$.literal, e4 = eR.create, e6 = eT.create, e5 = ek.create, e7 = ez.create, e8 = ed((e10, t2, r2) => eb.refine(e10, (e11) => !!a(e11) && e11.length >= t2 || (null != r2 ? r2 : `Expected array value at least ${t2}, but received "${null == e11 ? void 0 : e11.length}"`), { minItems: t2 })), e9 = ed((e10, t2, r2) => eb.refine(e10, (e11) => !!a(e11) && e11.length <= t2 || (null != r2 ? r2 : `Expected array value  ${t2}, but received "${null == e11 ? void 0 : e11.length}"`), { maxItems: t2 })), te = eF.create, tt = eK.create, tr = eK.discriminatorMapping, tn = eg.define, ti = eb.refine, ta = ed((e10, t2) => ew.create(e10, t2)), to = ed((e10) => e_.create(e10)), tl = ed((e10, t2) => eb.of(e10, { [ep.meta]: t2 })), ts = Object.freeze(Object.defineProperty({ __proto__: null, annotate: tl, any: eI, array: e7, binary: e0, boolean: eZ, custom: tn, defaults: ta, discriminatorMapping: tr, enums: e1, exclusiveMaximum: eQ, exclusiveMinimum: eB, integer: eH, intersection: te, literal: e3, maxItems: e9, maxLength: eV, maximum: eX, minItems: e8, minLength: eL, minimum: eU, multipleOf: eY, nativeEnum: e2, never: eC, nil: eW, number: eG, object: e4, optional: to, pattern: eJ, record: e6, ref: eD, refine: ti, string: eq, tuple: e5, union: tt }, Symbol.toStringTag, { value: "Module" })), tc = (e10) => {
  var t2, r2;
  return null !== (r2 = null === (t2 = e10.split("/")) || void 0 === t2 ? void 0 : t2.findLast(() => true)) && void 0 !== r2 ? r2 : "";
};
class tu {
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
    return false === e10 ? eC() : new tu(t2).decode(e10);
  }
  decode(e10) {
    let t2 = structuredClone(e10), r2 = this._decode(t2), n2 = false;
    if ((null == t2 ? void 0 : t2.title) && (r2 = r2.use(tl({ title: null == t2 ? void 0 : t2.title })), n2 = true), null == t2 ? void 0 : t2.description) {
      if (n2) r2 = r2.use(tl({ description: null == t2 ? void 0 : t2.description }));
      else {
        let [e11, ...n3] = null == t2 ? void 0 : t2.description.split(/[.\n]/);
        r2 = r2.use(tl({ title: e11, description: n3 ? n3.join("\n").trim() : void 0 }));
      }
    }
    if (t2) {
      for (let e11 of tg) if (e11 in t2) {
        let n3 = ts[e11];
        n3 && (r2 = r2.use(n3(t2[e11])));
      }
    }
    return r2;
  }
  _decode(e10) {
    var r2, n2, i2, o2, l2;
    let s2 = t_(e10);
    if (s2.$ref) {
      let [e11, t2] = this.resolveRef(s2.$ref);
      return this.def.has(t2) || (this.def.set(t2, eI()), this.def.set(t2, this.decode(e11))), eD(t2, () => this.ref(t2));
    }
    if (s2.enum) {
      let e11 = e1(s2.enum);
      return s2["x-enum-labels"] ? e11.use(tl({ enumLabels: s2["x-enum-labels"] })) : e11;
    }
    if (s2.discriminator) {
      let e11 = s2.discriminator.propertyName;
      if (e11) {
        let i3 = {};
        if (s2.discriminator.mapping) {
          let e12 = s2.discriminator.mapping;
          if (e12) for (let [t2, r3] of Object.entries(e12)) i3[t2] = this.decode(r3);
        }
        if (s2.oneOf) for (let a2 of s2.oneOf) {
          let o3 = this.decode(a2), l3 = null === (r2 = ep.schemaProp(o3, "properties")) || void 0 === r2 ? void 0 : r2[e11];
          if (l3) {
            let e12 = null === (n2 = ep.schemaProp(l3, "enum")) || void 0 === n2 ? void 0 : n2[0];
            t(e12) || (i3[`${e12}`] = o3);
          }
        }
        return tr(e11, i3);
      }
    }
    if (s2.oneOf) {
      let e11 = s2.oneOf.map((e12) => this.decode(e12));
      return 1 === e11.length ? e11[0] : tt(...e11);
    }
    if (s2.allOf) {
      let e11 = s2.allOf.map((e12) => this.decode(e12));
      return 1 === e11.length ? e11[0] : te(...e11);
    }
    if (tf(s2)) {
      if (s2.properties) {
        let e12 = null !== (i2 = s2.required) && void 0 !== i2 ? i2 : [], t2 = {};
        for (let [r3, n3] of Object.entries(s2.properties)) {
          let i3 = this.decode(n3);
          e12.includes(r3) || (i3 = i3.optional()), t2[r3] = i3;
        }
        return e4(t2);
      }
      let e11 = null !== (o2 = s2.additionalProperties) && void 0 !== o2 ? o2 : {};
      return e11 ? e6(this.decode(null !== (l2 = s2.propertyNames) && void 0 !== l2 ? l2 : { type: "string" }), this.decode(e11)) : e4();
    }
    return tp(s2) ? a(s2.items) ? e5(s2.items.map((e11) => this.decode(e11))) : e7(this.decode(s2.items)) : ty(s2) ? "binary" === s2.format ? e0() : eq() : th(s2) ? "integer" === s2.type ? eH() : eG() : tv(s2) ? eZ() : td(s2) ? eW() : eI();
  }
}
let tf = (e10) => "object" === e10.type, td = (e10) => "null" === e10.type, tp = (e10) => "array" === e10.type, th = (e10) => "number" === e10.type || "integer" === e10.type, ty = (e10) => "string" === e10.type, tv = (e10) => "boolean" === e10.type, tm = { object: ["properties", "additionalProperties", "unevaluatedProperties", "patternProperties", "propertyNames", "dependentSchemas", "maxProperties", "minProperties"], array: ["contains", "items", "additionalItems", "unevaluatedItems", "maxItems", "minItems", "uniqueItems", "maxContains", "minContains"], string: ["pattern", "contentMediaType", "contentEncoding", "contentSchema", "maxLength", "minLength"], number: ["maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"] }, tg = ["maxProperties", "minProperties", "maxItems", "minItems", "uniqueItems", "pattern", "maxLength", "minLength", "maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"], tb = (e10, t2) => t2.some((t3) => Object.hasOwn(e10, t3)), tw = (e10) => !tb(e10, ["type", "$ref", "$id", "oneOf", "anyOf", "allOf"]), t_ = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (s(e10)) return {};
  if (!e10.type) {
    for (let t3 in tm) if (tb(e10, tm[t3])) {
      e10.type = t3;
      break;
    }
  }
  e10.const && (e10.enum = [e10.const]);
  let t2 = (t3) => {
    if (e10[t3]) {
      var r2;
      e10[t3] = e10[t3].filter((r3) => {
        let n2 = t_(r3);
        return !tw(n2) || ("allOf" === t3 && Object.assign(e10, n2), false);
      }), (null === (r2 = e10[t3]) || void 0 === r2 ? void 0 : r2.length) === 0 && (e10[t3] = void 0);
    }
  };
  return t2("allOf"), t2("anyOf"), t2("oneOf"), e10;
};
export {
  ei as E,
  em as J,
  ep as S,
  e7 as a,
  eI as b,
  tl as c,
  ed as d,
  tn as e,
  tu as f,
  tc as g,
  e1 as h,
  eo as i,
  eZ as j,
  e4 as o,
  er as p,
  e6 as r,
  eq as s
};
