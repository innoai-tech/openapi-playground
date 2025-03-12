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
var d, p, h = Symbol.for("immer-nothing"), y = Symbol.for("immer-draftable"), m = Symbol.for("immer-state");
function v(e10) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
  throw Error(`[Immer] minified error nr: ${e10}. Full error at: https://bit.ly/3cXEKWf`);
}
var g = Object.getPrototypeOf;
function b(e10) {
  return !!e10 && !!e10[m];
}
function w(e10) {
  var _a2;
  return !!e10 && (O(e10) || Array.isArray(e10) || !!e10[y] || !!((_a2 = e10.constructor) == null ? void 0 : _a2[y]) || x(e10) || E(e10));
}
var _ = Object.prototype.constructor.toString();
function O(e10) {
  if (!e10 || "object" != typeof e10) return false;
  let t2 = g(e10);
  if (null === t2) return true;
  let r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === _;
}
function P(e10, t2) {
  0 === j(e10) ? Reflect.ownKeys(e10).forEach((r2) => {
    t2(r2, e10[r2], e10);
  }) : e10.forEach((r2, n2) => t2(n2, r2, e10));
}
function j(e10) {
  let t2 = e10[m];
  return t2 ? t2.type_ : Array.isArray(e10) ? 1 : x(e10) ? 2 : 3 * !!E(e10);
}
function S(e10, t2) {
  return 2 === j(e10) ? e10.has(t2) : Object.prototype.hasOwnProperty.call(e10, t2);
}
function M(e10, t2, r2) {
  let n2 = j(e10);
  2 === n2 ? e10.set(t2, r2) : 3 === n2 ? e10.add(r2) : e10[t2] = r2;
}
function x(e10) {
  return e10 instanceof Map;
}
function E(e10) {
  return e10 instanceof Set;
}
function A(e10) {
  return e10.copy_ || e10.base_;
}
function N(e10, t2) {
  if (x(e10)) return new Map(e10);
  if (E(e10)) return new Set(e10);
  if (Array.isArray(e10)) return Array.prototype.slice.call(e10);
  let r2 = O(e10);
  if (true !== t2 && ("class_only" !== t2 || r2)) {
    let t3 = g(e10);
    return null !== t3 && r2 ? { ...e10 } : Object.assign(Object.create(t3), e10);
  }
  {
    let t3 = Object.getOwnPropertyDescriptors(e10);
    delete t3[m];
    let r3 = Reflect.ownKeys(t3);
    for (let n2 = 0; n2 < r3.length; n2++) {
      let i2 = r3[n2], a2 = t3[i2];
      false === a2.writable && (a2.writable = true, a2.configurable = true), (a2.get || a2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: a2.enumerable, value: e10[i2] });
    }
    return Object.create(g(e10), t3);
  }
}
function $(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return R(e10) || b(e10) || !w(e10) || (j(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = T), Object.freeze(e10), t2 && Object.entries(e10).forEach((e11) => {
    let [t3, r2] = e11;
    return $(r2, true);
  })), e10;
}
function T() {
  v(2);
}
function R(e10) {
  return Object.isFrozen(e10);
}
var k = {};
function z(e10) {
  let t2 = k[e10];
  return t2 || v(0, e10), t2;
}
function F(e10, t2) {
  t2 && (z("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t2);
}
function D(e10) {
  I(e10), e10.drafts_.forEach(C), e10.drafts_ = null;
}
function I(e10) {
  e10 === d && (d = e10.parent_);
}
function K(e10) {
  return d = { drafts_: [], parent_: d, immer_: e10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function C(e10) {
  let t2 = e10[m];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function L(e10, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e10 && e10 !== r2 ? (r2[m].modified_ && (D(t2), v(4)), w(e10) && (e10 = q(t2, e10), t2.parent_ || V(t2, e10)), t2.patches_ && z("Patches").generateReplacementPatches_(r2[m].base_, e10, t2.patches_, t2.inversePatches_)) : e10 = q(t2, r2, []), D(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e10 !== h ? e10 : void 0;
}
function q(e10, t2, r2) {
  if (R(t2)) return t2;
  let n2 = t2[m];
  if (!n2) return P(t2, (i2, a2) => W(e10, n2, t2, i2, a2, r2)), t2;
  if (n2.scope_ !== e10) return t2;
  if (!n2.modified_) return V(e10, n2.base_, true), n2.base_;
  if (!n2.finalized_) {
    n2.finalized_ = true, n2.scope_.unfinalizedDrafts_--;
    let t3 = n2.copy_, i2 = t3, a2 = false;
    3 === n2.type_ && (i2 = new Set(t3), t3.clear(), a2 = true), P(i2, (i3, o2) => W(e10, n2, t3, i3, o2, r2, a2)), V(e10, t3, false), r2 && e10.patches_ && z("Patches").generatePatches_(n2, r2, e10.patches_, e10.inversePatches_);
  }
  return n2.copy_;
}
function W(e10, t2, r2, n2, i2, a2, o2) {
  if (b(i2)) {
    let o3 = q(e10, i2, a2 && t2 && 3 !== t2.type_ && !S(t2.assigned_, n2) ? a2.concat(n2) : void 0);
    if (M(r2, n2, o3), !b(o3)) return;
    e10.canAutoFreeze_ = false;
  } else o2 && r2.add(i2);
  if (w(i2) && !R(i2)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1) return;
    q(e10, i2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof n2 && Object.prototype.propertyIsEnumerable.call(r2, n2) && V(e10, i2);
  }
}
function V(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && $(t2, r2);
}
var J = { get(e10, t2) {
  if (t2 === m) return e10;
  let r2 = A(e10);
  if (!S(r2, t2)) return function(e11, t3, r3) {
    var _a2;
    let n3 = B(t3, r3);
    return n3 ? "value" in n3 ? n3.value : (_a2 = n3.get) == null ? void 0 : _a2.call(e11.draft_) : void 0;
  }(e10, r2, t2);
  let n2 = r2[t2];
  return e10.finalized_ || !w(n2) ? n2 : n2 === U(e10.base_, t2) ? (X(e10), e10.copy_[t2] = Q(n2, e10)) : n2;
}, has: (e10, t2) => t2 in A(e10), ownKeys: (e10) => Reflect.ownKeys(A(e10)), set(e10, t2, r2) {
  let n2 = B(A(e10), t2);
  if (n2 == null ? void 0 : n2.set) return n2.set.call(e10.draft_, r2), true;
  if (!e10.modified_) {
    let n3 = U(A(e10), t2), i2 = n3 == null ? void 0 : n3[m];
    if (i2 && i2.base_ === r2) return e10.copy_[t2] = r2, e10.assigned_[t2] = false, true;
    if ((r2 === n3 ? 0 !== r2 || 1 / r2 == 1 / n3 : r2 != r2 && n3 != n3) && (void 0 !== r2 || S(e10.base_, t2))) return true;
    X(e10), G(e10);
  }
  return !!(e10.copy_[t2] === r2 && (void 0 !== r2 || t2 in e10.copy_) || Number.isNaN(r2) && Number.isNaN(e10.copy_[t2])) || (e10.copy_[t2] = r2, e10.assigned_[t2] = true, true);
}, deleteProperty: (e10, t2) => (void 0 !== U(e10.base_, t2) || t2 in e10.base_ ? (e10.assigned_[t2] = false, X(e10), G(e10)) : delete e10.assigned_[t2], e10.copy_ && delete e10.copy_[t2], true), getOwnPropertyDescriptor(e10, t2) {
  let r2 = A(e10), n2 = Reflect.getOwnPropertyDescriptor(r2, t2);
  return n2 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t2, enumerable: n2.enumerable, value: r2[t2] } : n2;
}, defineProperty() {
  v(11);
}, getPrototypeOf: (e10) => g(e10.base_), setPrototypeOf() {
  v(12);
} }, H = {};
function U(e10, t2) {
  let r2 = e10[m];
  return (r2 ? A(r2) : e10)[t2];
}
function B(e10, t2) {
  if (!(t2 in e10)) return;
  let r2 = g(e10);
  for (; r2; ) {
    let e11 = Object.getOwnPropertyDescriptor(r2, t2);
    if (e11) return e11;
    r2 = g(r2);
  }
}
function G(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && G(e10.parent_));
}
function X(e10) {
  e10.copy_ || (e10.copy_ = N(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function Q(e10, t2) {
  let r2 = x(e10) ? z("MapSet").proxyMap_(e10, t2) : E(e10) ? z("MapSet").proxySet_(e10, t2) : function(e11, t3) {
    let r3 = Array.isArray(e11), n2 = { type_: +!!r3, scope_: t3 ? t3.scope_ : d, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = n2, a2 = J;
    r3 && (i2 = [n2], a2 = H);
    let { revoke: o2, proxy: s2 } = Proxy.revocable(i2, a2);
    return n2.draft_ = s2, n2.revoke_ = o2, s2;
  }(e10, t2);
  return (t2 ? t2.scope_ : d).drafts_.push(r2), r2;
}
P(J, (e10, t2) => {
  H[e10] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), H.deleteProperty = function(e10, t2) {
  return H.set.call(this, e10, t2, void 0);
}, H.set = function(e10, t2, r2) {
  return J.set.call(this, e10[0], t2, r2, e10[0]);
};
var Y = new class {
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
      if ("function" != typeof t2 && v(6), void 0 !== r2 && "function" != typeof r2 && v(7), w(e11)) {
        let i2 = K(this), a2 = Q(e11, void 0), o2 = true;
        try {
          n2 = t2(a2), o2 = false;
        } finally {
          o2 ? D(i2) : I(i2);
        }
        return F(i2, r2), L(n2, i2);
      }
      if (e11 && "object" == typeof e11) v(1, e11);
      else {
        if (void 0 === (n2 = t2(e11)) && (n2 = e11), n2 === h && (n2 = void 0), this.autoFreeze_ && $(n2, true), r2) {
          let t3 = [], i2 = [];
          z("Patches").generateReplacementPatches_(e11, n2, t3, i2), r2(t3, i2);
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
    w(e10) || v(8), b(e10) && (b(t2 = e10) || v(10, t2), e10 = function e11(t3) {
      let r3;
      if (!w(t3) || R(t3)) return t3;
      let n3 = t3[m];
      if (n3) {
        if (!n3.modified_) return n3.base_;
        n3.finalized_ = true, r3 = N(t3, n3.scope_.immer_.useStrictShallowCopy_);
      } else r3 = N(t3, true);
      return P(r3, (t4, n4) => {
        M(r3, t4, e11(n4));
      }), n3 && (n3.finalized_ = false), r3;
    }(t2));
    let r2 = K(this), n2 = Q(e10, void 0);
    return n2[m].isManual_ = true, I(r2), n2;
  }
  finishDraft(e10, t2) {
    let r2 = e10 && e10[m];
    r2 && r2.isManual_ || v(9);
    let { scope_: n2 } = r2;
    return F(n2, t2), L(void 0, n2);
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
    let n2 = z("Patches").applyPatches_;
    return b(e10) ? n2(e10, t2) : this.produce(e10, (e11) => n2(e11, t2));
  }
}(), Z = Y.produce;
Y.produceWithPatches.bind(Y), Y.setAutoFreeze.bind(Y), Y.setUseStrictShallowCopy.bind(Y), Y.applyPatches.bind(Y), Y.createDraft.bind(Y), Y.finishDraft.bind(Y);
var ee = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function et(e10) {
  return e10 && e10.__esModule && Object.prototype.hasOwnProperty.call(e10, "default") ? e10.default : e10;
}
!function() {
  var e10, t2;
  if (!p) p = 1, t2 = e10 || (e10 = {}), function(e11) {
    var r2 = "object" == typeof globalThis ? globalThis : "object" == typeof ee ? ee : "object" == typeof self ? self : "object" == typeof this ? this : function() {
      throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
    }(), n2 = i2(t2);
    function i2(e12, t3) {
      return function(r3, n3) {
        Object.defineProperty(e12, r3, { configurable: true, writable: true, value: n3 }), t3 && t3(r3, n3);
      };
    }
    void 0 !== r2.Reflect && (n2 = i2(r2.Reflect, n2)), e11(n2, r2), void 0 === r2.Reflect && (r2.Reflect = t2);
  }(function(e11, t3) {
    var r2, n2 = "function" == typeof Symbol, i2 = n2 && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : N2("Symbol.toPrimitive not found."), a2 = n2 && void 0 !== Symbol.iterator ? Symbol.iterator : N2("Symbol.iterator not found."), o2 = Object.getPrototypeOf(Function), s2 = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : N2("A valid Map constructor could not be found."), c2 = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : N2("A valid Set constructor could not be found."), l2 = "function" == typeof WeakMap ? WeakMap : N2("A valid WeakMap constructor could not be found."), u2 = n2 ? Symbol.for("@reflect-metadata:registry") : void 0, f2 = (!g2(u2) && w2(t3.Reflect) && Object.isExtensible(t3.Reflect) && (r2 = t3.Reflect[u2]), g2(r2) && (r2 = function() {
      g2(u2) || void 0 === t3.Reflect || u2 in t3.Reflect || "function" != typeof t3.Reflect.defineMetadata || (r3 = (e12 = t3.Reflect).defineMetadata, n3 = e12.hasOwnMetadata, i3 = e12.getOwnMetadata, a3 = e12.getOwnMetadataKeys, o3 = e12.deleteMetadata, f3 = new l2(), d3 = { isProviderFor: function(e13, t4) {
        var r4 = f3.get(e13);
        return !!(!g2(r4) && r4.has(t4)) || !!a3(e13, t4).length && (g2(r4) && (r4 = new c2(), f3.set(e13, r4)), r4.add(t4), true);
      }, OrdinaryDefineOwnMetadata: r3, OrdinaryHasOwnMetadata: n3, OrdinaryGetOwnMetadata: i3, OrdinaryOwnMetadataKeys: a3, OrdinaryDeleteMetadata: o3 });
      var e12, r3, n3, i3, a3, o3, f3, d3, p3, h3, y3, m3 = new l2(), v3 = { registerProvider: function(e13) {
        if (!Object.isExtensible(v3)) throw Error("Cannot add provider to a frozen registry.");
        switch (true) {
          case d3 === e13:
            break;
          case g2(p3):
            p3 = e13;
            break;
          case p3 === e13:
            break;
          case g2(h3):
            h3 = e13;
            break;
          case h3 === e13:
            break;
          default:
            void 0 === y3 && (y3 = new c2()), y3.add(e13);
        }
      }, getProvider: b3, setProvider: function(e13, t4, r4) {
        if (!function(e14) {
          if (g2(e14)) throw TypeError();
          return p3 === e14 || h3 === e14 || !g2(y3) && y3.has(e14);
        }(r4)) throw Error("Metadata provider not registered.");
        var n4 = b3(e13, t4);
        if (n4 !== r4) {
          if (!g2(n4)) return false;
          var i4 = m3.get(e13);
          g2(i4) && (i4 = new s2(), m3.set(e13, i4)), i4.set(t4, r4);
        }
        return true;
      } };
      return v3;
      function b3(e13, t4) {
        var r4, n4 = m3.get(e13);
        return g2(n4) || (r4 = n4.get(t4)), g2(r4) && (r4 = function(e14, t5) {
          if (!g2(p3)) {
            if (p3.isProviderFor(e14, t5)) return p3;
            if (!g2(h3)) {
              if (h3.isProviderFor(e14, t5)) return p3;
              if (!g2(y3)) for (var r5 = M2(y3); ; ) {
                var n5 = x2(r5);
                if (!n5) return;
                var i4 = n5.value;
                if (i4.isProviderFor(e14, t5)) return E2(r5), i4;
              }
            }
          }
          if (!g2(d3) && d3.isProviderFor(e14, t5)) return d3;
        }(e13, t4), g2(r4) || (g2(n4) && (n4 = new s2(), m3.set(e13, n4)), n4.set(t4, r4))), r4;
      }
    }()), !g2(u2) && w2(t3.Reflect) && Object.isExtensible(t3.Reflect) && Object.defineProperty(t3.Reflect, u2, { enumerable: false, configurable: false, writable: false, value: r2 }), r2), d2 = function(e12) {
      var t4 = new l2(), r3 = { isProviderFor: function(e13, r4) {
        var n4 = t4.get(e13);
        return !g2(n4) && n4.has(r4);
      }, OrdinaryDefineOwnMetadata: function(e13, t5, r4, i3) {
        n3(r4, i3, true).set(e13, t5);
      }, OrdinaryHasOwnMetadata: function(e13, t5, r4) {
        var i3 = n3(t5, r4, false);
        return !g2(i3) && !!i3.has(e13);
      }, OrdinaryGetOwnMetadata: function(e13, t5, r4) {
        var i3 = n3(t5, r4, false);
        if (!g2(i3)) return i3.get(e13);
      }, OrdinaryOwnMetadataKeys: function(e13, t5) {
        var r4 = [], i3 = n3(e13, t5, false);
        if (g2(i3)) return r4;
        for (var a3 = M2(i3.keys()), o3 = 0; ; ) {
          var s3 = x2(a3);
          if (!s3) return r4.length = o3, r4;
          var c3 = s3.value;
          try {
            r4[o3] = c3;
          } catch (e14) {
            try {
              E2(a3);
            } finally {
              throw e14;
            }
          }
          o3++;
        }
      }, OrdinaryDeleteMetadata: function(e13, r4, i3) {
        var a3 = n3(r4, i3, false);
        if (g2(a3) || !a3.delete(e13)) return false;
        if (0 === a3.size) {
          var o3 = t4.get(r4);
          g2(o3) || (o3.delete(i3), 0 === o3.size && t4.delete(o3));
        }
        return true;
      } };
      return f2.registerProvider(r3), r3;
      function n3(n4, i3, a3) {
        var o3 = t4.get(n4), c3 = false;
        if (g2(o3)) {
          if (!a3) return;
          o3 = new s2(), t4.set(n4, o3), c3 = true;
        }
        var l3 = o3.get(i3);
        if (g2(l3)) {
          if (!a3) return;
          if (l3 = new s2(), o3.set(i3, l3), !e12.setProvider(n4, i3, r3)) throw o3.delete(i3), c3 && t4.delete(n4), Error("Wrong provider for target.");
        }
        return l3;
      }
    }(f2);
    function p2(e12, t4, r3) {
      var n3 = $2(t4, r3, false);
      return !g2(n3) && !!n3.OrdinaryHasOwnMetadata(e12, t4, r3);
    }
    function h2(e12, t4, r3) {
      var n3 = $2(t4, r3, false);
      if (!g2(n3)) return n3.OrdinaryGetOwnMetadata(e12, t4, r3);
    }
    function y2(e12, t4, r3, n3) {
      $2(r3, n3, true).OrdinaryDefineOwnMetadata(e12, t4, r3, n3);
    }
    function m2(e12, t4) {
      var r3 = $2(e12, t4, false);
      return r3 ? r3.OrdinaryOwnMetadataKeys(e12, t4) : [];
    }
    function v2(e12) {
      if (null === e12) return 1;
      switch (typeof e12) {
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
          return null === e12 ? 1 : 6;
        default:
          return 6;
      }
    }
    function g2(e12) {
      return void 0 === e12;
    }
    function b2(e12) {
      return null === e12;
    }
    function w2(e12) {
      return "object" == typeof e12 ? null !== e12 : "function" == typeof e12;
    }
    e11("decorate", function(e12, t4, r3, n3) {
      if (g2(r3)) {
        if (!O2(e12) || !j2(t4)) throw TypeError();
        return function(e13, t5) {
          for (var r4 = e13.length - 1; r4 >= 0; --r4) {
            var n4 = (0, e13[r4])(t5);
            if (!g2(n4) && !b2(n4)) {
              if (!j2(n4)) throw TypeError();
              t5 = n4;
            }
          }
          return t5;
        }(e12, t4);
      }
      if (!O2(e12) || !w2(t4) || !w2(n3) && !g2(n3) && !b2(n3)) throw TypeError();
      return b2(n3) && (n3 = void 0), function(e13, t5, r4, n4) {
        for (var i3 = e13.length - 1; i3 >= 0; --i3) {
          var a3 = (0, e13[i3])(t5, r4, n4);
          if (!g2(a3) && !b2(a3)) {
            if (!w2(a3)) throw TypeError();
            n4 = a3;
          }
        }
        return n4;
      }(e12, t4, r3 = _2(r3), n3);
    }), e11("metadata", function(e12, t4) {
      return function(r3, n3) {
        if (!w2(r3) || !g2(n3) && !function(e13) {
          switch (v2(e13)) {
            case 3:
            case 4:
              return true;
            default:
              return false;
          }
        }(n3)) throw TypeError();
        y2(e12, t4, r3, n3);
      };
    }), e11("defineMetadata", function(e12, t4, r3, n3) {
      if (!w2(r3)) throw TypeError();
      return g2(n3) || (n3 = _2(n3)), y2(e12, t4, r3, n3);
    }), e11("hasMetadata", function(e12, t4, r3) {
      if (!w2(t4)) throw TypeError();
      return g2(r3) || (r3 = _2(r3)), function e13(t5, r4, n3) {
        if (p2(t5, r4, n3)) return true;
        var i3 = A2(r4);
        return !b2(i3) && e13(t5, i3, n3);
      }(e12, t4, r3);
    }), e11("hasOwnMetadata", function(e12, t4, r3) {
      if (!w2(t4)) throw TypeError();
      return g2(r3) || (r3 = _2(r3)), p2(e12, t4, r3);
    }), e11("getMetadata", function(e12, t4, r3) {
      if (!w2(t4)) throw TypeError();
      return g2(r3) || (r3 = _2(r3)), function e13(t5, r4, n3) {
        if (p2(t5, r4, n3)) return h2(t5, r4, n3);
        var i3 = A2(r4);
        if (!b2(i3)) return e13(t5, i3, n3);
      }(e12, t4, r3);
    }), e11("getOwnMetadata", function(e12, t4, r3) {
      if (!w2(t4)) throw TypeError();
      return g2(r3) || (r3 = _2(r3)), h2(e12, t4, r3);
    }), e11("getMetadataKeys", function(e12, t4) {
      if (!w2(e12)) throw TypeError();
      return g2(t4) || (t4 = _2(t4)), function e13(t5, r3) {
        var n3 = m2(t5, r3), i3 = A2(t5);
        if (null === i3) return n3;
        var a3 = e13(i3, r3);
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
      }(e12, t4);
    }), e11("getOwnMetadataKeys", function(e12, t4) {
      if (!w2(e12)) throw TypeError();
      return g2(t4) || (t4 = _2(t4)), m2(e12, t4);
    }), e11("deleteMetadata", function(e12, t4, r3) {
      if (!w2(t4)) throw TypeError();
      g2(r3) || (r3 = _2(r3));
      var n3 = $2(t4, r3, false);
      return !g2(n3) && n3.OrdinaryDeleteMetadata(e12, t4, r3);
    });
    function _2(e12) {
      var t4 = function(e13, t5) {
        switch (v2(e13)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            return e13;
        }
        var r3 = S2(e13, i2);
        if (void 0 !== r3) {
          var n3 = r3.call(e13, "string");
          if (w2(n3)) throw TypeError();
          return n3;
        }
        return function(e14, t6) {
          var r4, n4, i3 = e14.toString;
          if (P2(i3)) {
            var n4 = i3.call(e14);
            if (!w2(n4)) return n4;
          }
          var r4 = e14.valueOf;
          if (P2(r4)) {
            var n4 = r4.call(e14);
            if (!w2(n4)) return n4;
          }
          throw TypeError();
        }(e13);
      }(e12);
      return "symbol" == typeof t4 ? t4 : "" + t4;
    }
    function O2(e12) {
      return Array.isArray ? Array.isArray(e12) : e12 instanceof Object ? e12 instanceof Array : "[object Array]" === Object.prototype.toString.call(e12);
    }
    function P2(e12) {
      return "function" == typeof e12;
    }
    function j2(e12) {
      return "function" == typeof e12;
    }
    function S2(e12, t4) {
      var r3 = e12[t4];
      if (null != r3) {
        if (!P2(r3)) throw TypeError();
        return r3;
      }
    }
    function M2(e12) {
      var t4 = S2(e12, a2);
      if (!P2(t4)) throw TypeError();
      var r3 = t4.call(e12);
      if (!w2(r3)) throw TypeError();
      return r3;
    }
    function x2(e12) {
      var t4 = e12.next();
      return !t4.done && t4;
    }
    function E2(e12) {
      var t4 = e12.return;
      t4 && t4.call(e12);
    }
    function A2(e12) {
      var t4 = Object.getPrototypeOf(e12);
      if ("function" != typeof e12 || e12 === o2 || t4 !== o2) return t4;
      var r3 = e12.prototype, n3 = r3 && Object.getPrototypeOf(r3);
      if (null == n3 || n3 === Object.prototype) return t4;
      var i3 = n3.constructor;
      return "function" != typeof i3 || i3 === e12 ? t4 : i3;
    }
    function N2(e12) {
      throw e12;
    }
    function $2(e12, t4, r3) {
      var n3 = f2.getProvider(e12, t4);
      if (!g2(n3)) return n3;
      if (r3) {
        if (f2.setProvider(e12, t4, d2)) return d2;
        throw Error("Illegal state.");
      }
    }
  });
}();
class er {
  static getOwnPropertyNames(e10) {
    return Reflect.getMetadataKeys(e10);
  }
  static get(e10, t2) {
    return Reflect.getMetadata(t2, e10);
  }
  static define(e10, t2, r2, n2) {
    if (e10 && e10.constructor && e10.constructor != Object) {
      if (f(r2)) {
        Reflect.defineMetadata(t2, Z(Reflect.getMetadata(t2, e10) ?? n2 ?? {}, r2), e10);
        return;
      }
      Reflect.defineMetadata(t2, r2, e10);
    }
  }
}
let en = { path: [], branch: [] };
class ei extends TypeError {
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
let ea = (e10) => !!e10 && e10[eo] == eo, eo = Symbol("Type");
function* es(t2, r2, n2, i2) {
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
function ec(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = el(e10, t2, r2), i2 = function(e11) {
    let { done: t3, value: r3 } = e11.next();
    return t3 ? void 0 : r3;
  }(n2);
  return i2[0] ? [new ei(i2[0], function* () {
    for (let e11 of n2) e11[0] && (yield e11[0]);
  }), void 0] : [void 0, i2[1]];
}
function* el(e10, t2) {
  let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e10], node: o2 = { current: t2 }, coerce: s2 = false, mask: c2 = false } = n2, l2 = { mask: c2, path: i2, branch: a2, node: o2 }, u2 = e10;
  if (s2) {
    let r2 = t2.coercer(e10, l2);
    void 0 != r2 && (u2 = r2);
  }
  let f2 = 0;
  for (let r2 of es(t2.validator(u2, l2), l2, t2, e10)) r2.explanation = n2.message, f2 = 2, yield [r2, void 0];
  for (let [e11, d2, p2] of t2.entries(u2, l2)) for (let t3 of el(d2, p2, { path: void 0 === e11 ? i2 : [...i2, e11], branch: void 0 === e11 ? a2 : [...a2, d2], node: void 0 === e11 ? o2 : { current: p2, parent: o2 }, coerce: s2, mask: c2, message: n2.message })) t3[0] ? (f2 = null != t3[0].refinement ? 1 : 2, yield [t3[0], void 0]) : s2 && (d2 = t3[1], void 0 === e11 ? u2 = d2 : u2 instanceof Map ? u2.set(e11, d2) : u2 instanceof Set ? u2.add(d2) : r(u2) && (u2[e11] = d2));
  if (2 !== f2) for (let r2 of es(t2.refiner(u2, l2), l2, t2, e10)) r2.explanation = n2.message, f2 = 1, yield [r2, void 0];
  0 === f2 && (yield [void 0, u2]);
}
let eu = (e10) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = e10(...r2), a2 = (e11, t3) => {
    let r3 = er.get(e11, t3) ?? {};
    er.define(e11, t3, { ...r3, type: i2 });
  };
  return a2.toString = () => `@type:${i2.type}`, new Proxy(a2, { ownKeys: () => [...Object.getOwnPropertyNames(i2), ...Object.getOwnPropertySymbols(i2)], get: (e11, t3) => i2[t3] });
}, ef = (e10) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = (t3) => e10(t3, ...r2);
  return new Proxy((e11, t3) => {
    er.define(e11, t3, (e12) => {
      (e12.modifies ?? (e12.modifies = [])).push({ modify: i2 });
    }, {});
  }, { get(e11, t3) {
    if ("modify" == t3) return i2;
  } });
};
const _ed = class _ed {
  static create(t2, r2, i2) {
    var _a2;
    let a2;
    let o2 = r2 ?? ((_a2 = t2[_ed.underlying]) == null ? void 0 : _a2.schema) ?? {};
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
      if (s2 === _ed.meta) return a2 ?? (a2 = _ed.create(t2, o2, _ed.meta));
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
    return ep(e10.schema, t2);
  }
  static metaProp(e10, t2) {
    return eh(e10.schema, t2);
  }
};
__publicField(_ed, "RecordKey", Symbol("RecordKey"));
__publicField(_ed, "meta", Symbol("meta"));
__publicField(_ed, "optional", Symbol("optional"));
__publicField(_ed, "underlying", Symbol("underlying"));
__publicField(_ed, "unwrap", Symbol("unwrap"));
__publicField(_ed, "extractSchema", (e10) => new ey().toValue(e10));
__publicField(_ed, "extractMeta", (e10) => new ey().toValue(e10.meta ?? e10[_ed.meta]));
let ed = _ed;
let ep = (e10, t2) => {
  if (n(e10)) return e10[t2] ?? (e10[ed.unwrap] ? ep(e10[ed.unwrap]().schema, t2) : void 0);
}, eh = (e10, t2) => {
  var _a2;
  if (n(e10)) return ((_a2 = e10[ed.meta]) == null ? void 0 : _a2[t2]) ?? (e10[ed.unwrap] ? eh(e10[ed.unwrap]().schema, t2) : void 0);
};
class ey {
  constructor(e10 = false) {
    this.deref = e10;
  }
  toValue(t2) {
    if (t2) {
      if (!e(t2.schema)) return this.toValue(t2.schema);
      if (this.deref && t2[ed.unwrap]) return this.toValue(t2[ed.unwrap]());
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
    return "" == e10 && t2 ? ed.RecordKey : e10.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e10) {
    return e10 == ed.RecordKey ? "" : e10.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e10, t2) {
    let r2 = Array.isArray(t2) ? t2 : em.parse(t2);
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n2 = r2[t3];
      if (t3 > 0 && n2 == ed.RecordKey) return r2[t3 - 1];
      if (!("object" == typeof e10 && n2 in e10)) throw Error("Invalid reference token: " + n2);
      e10 = e10[n2];
    }
    return e10;
  }
}
_a = eo;
const _ev = class _ev {
  constructor(e10) {
    __publicField(this, _a, eo);
    __publicField(this, "schema");
    if (e10) {
      this.schema = ed.create(e10);
      return;
    }
    this.schema = e10 ?? null;
  }
  get meta() {
    return this.schema ? this.schema[ed.meta] : {};
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
    return ew.create(this);
  }
  default(e10) {
    return eb.create(this, e10);
  }
};
__publicField(_ev, "define", eu(function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _ev {
    validator(t2, r2) {
      return e10(t2, r2);
    }
  }(null);
}));
__publicField(_ev, "fromTypeObject", (e10, t2) => {
  let r2 = e10.type ?? t2 ?? new _ev({});
  return e10.modifies ? r2.use(...e10.modifies ?? []) : r2;
});
let ev = _ev;
class eg extends ev {
  static of(e10, t2) {
    return new eg({ ...t2, [ed.underlying]: e10 });
  }
  static refine(e10, t2, r2) {
    return new class extends eg {
      *refiner(n2, i2) {
        for (let a2 of (yield* this.unwrap.refiner(n2, i2), es(t2(n2, i2), i2, e10, n2))) yield { ...a2, refinement: Object.keys(r2).join(",") };
      }
    }({ ...r2, [ed.underlying]: e10 });
  }
  get unwrap() {
    let e10 = this.schema[ed.unwrap];
    return e10 ? e10() : this.schema[ed.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en;
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
const _eb = class _eb extends eg {
  coercer(e10, t2) {
    return void 0 === e10 ? this.schema.default : super.unwrap.coercer(e10, t2);
  }
};
__publicField(_eb, "create", eu((e10, t2) => new _eb({ default: t2, [ed.underlying]: e10 })));
let eb = _eb;
const _ew = class _ew extends eg {
  refiner(e10, t2) {
    return void 0 === e10 || super.unwrap.refiner(e10, t2);
  }
  validator(e10, t2) {
    return void 0 === e10 || super.unwrap.validator(e10, t2);
  }
};
__publicField(_ew, "create", eu((e10) => new _ew({ [ed.underlying]: e10, [ed.optional]: e10 })));
let ew = _ew;
const _e_ = class _e_ extends eg {
};
__publicField(_e_, "create", eu((e10, t2) => new _e_({ $ref: e10, [ed.unwrap]: t2 })));
let e_ = _e_;
const _eO = class _eO extends ev {
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
__publicField(_eO, "create", eu(() => new _eO()));
let eO = _eO;
const _eP = class _eP extends ev {
  get type() {
    return "null";
  }
  validator(e10, r2) {
    return t(e10);
  }
  coercer(e10, t2) {
    return e10;
  }
};
__publicField(_eP, "create", eu(() => new _eP({ type: "null" })));
let eP = _eP;
const _ej = class _ej extends ev {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return c(e10);
  }
  coercer(r2, n2) {
    return e(r2) || t(r2) ? r2 : String(r2);
  }
};
__publicField(_ej, "create", eu(() => new _ej({ type: "string" })));
let ej = _ej;
const _eS = class _eS extends ev {
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
__publicField(_eS, "create", eu(() => new _eS({ type: "number" })));
let eS = _eS;
const _eM = class _eM extends ev {
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
__publicField(_eM, "create", eu(() => new _eM({ type: "integer" })));
let eM = _eM;
const _ex = class _ex extends ev {
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
__publicField(_ex, "create", eu(() => new _ex({ type: "boolean" })));
let ex = _ex;
const _eE = class _eE extends ev {
  get type() {
    return "binary";
  }
  validator(e10, t2) {
    return e10 instanceof File || e10 instanceof Blob;
  }
  coercer(e10, t2) {
    return e10;
  }
};
__publicField(_eE, "create", eu(() => new _eE({ type: "string", format: "binary" })));
let eE = _eE;
const _eA = class _eA extends ev {
  static createEnum(e10) {
    return new _eA({ enum: e10 });
  }
  get type() {
    return "enums";
  }
  validator(e10, t2) {
    return this.schema.enum.includes(e10);
  }
  coercer(e10, t2) {
    return e10;
  }
};
__publicField(_eA, "create", eu(_eA.createEnum));
__publicField(_eA, "literal", eu((e10) => new _eA({ enum: [e10] })));
__publicField(_eA, "nativeEnum", eu((e10) => new _eA({ enum: Object.values(e10) })));
let eA = _eA;
const _eN = class _eN extends ev {
  get type() {
    return "never";
  }
  validator(e10, t2) {
    return false;
  }
  coercer(e10, t2) {
    return e10;
  }
};
__publicField(_eN, "create", eu(() => new _eN(false)));
let eN = _eN;
class e$ extends ev {
  static create(e10) {
    let t2 = function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = [];
      for (let [r2, n2] of Object.entries(e11)) ed.schemaProp(n2, ed.optional) || t3.push(r2);
      return t3;
    };
    return eu(() => {
      var _a2, _b;
      if (e10) {
        if (u(e10)) {
          let r2 = new e10(), n2 = {};
          for (let [e11, t3] of Object.entries(r2)) n2[e11] = eA.literal(t3);
          for (let e11 of er.getOwnPropertyNames(r2)) {
            let t3 = er.get(r2, e11);
            if (t3) {
              let r3 = ev.fromTypeObject(t3, n2[e11]);
              e11 in n2 ? n2[e11] = r3.default((_b = (_a2 = n2[e11].schema) == null ? void 0 : _a2.enum) == null ? void 0 : _b[0]) : n2[e11] = r3;
            }
          }
          return new e$({ type: "object", properties: n2, required: t2(n2), additionalProperties: eN.create() });
        }
        return new e$({ type: "object", properties: e10, required: t2(e10), additionalProperties: eN.create() });
      }
      return new e$({ type: "object", properties: {}, required: [], additionalProperties: eN.create() });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    var _a2;
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en;
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
const _eT = class _eT extends ev {
  get type() {
    return "record";
  }
  *entries(e10) {
    if (r(e10)) for (let [t2, r2] of Object.entries(e10)) yield [ed.RecordKey, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
  }
  validator(e10) {
    return r(e10);
  }
};
__publicField(_eT, "create", eu((e10, t2) => new _eT({ type: "object", propertyNames: e10, additionalProperties: t2 })));
let eT = _eT;
const _eR = class _eR extends ev {
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
__publicField(_eR, "create", eu((e10) => new _eR({ type: "array", items: e10 })));
let eR = _eR;
const _ek = class _ek extends ev {
  get type() {
    return "tuple";
  }
  *entries(e10, t2) {
    if (i(e10)) {
      let t3 = Math.max(this.schema.items.length, e10.length);
      for (let r2 = 0; r2 < t3; r2++) yield [r2, e10[r2], this.schema.items[r2] ?? eN.create()];
    }
  }
  validator(e10) {
    return i(e10) && e10.length === this.schema.items.length;
  }
  coercer(e10) {
    return i(e10) ? e10.slice() : e10;
  }
};
__publicField(_ek, "create", eu((e10) => new _ek({ type: "array", items: e10 })));
let ek = _ek;
const _ez = class _ez extends ev {
  get type() {
    return "intersection";
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en;
    for (let r2 of this.schema.allOf) yield* r2.entries(e10, t2);
  }
  *validator(e10, t2) {
    for (let r2 of this.schema.allOf) yield* es(r2.validator(e10, t2), t2, this, e10);
  }
  *refiner(e10, t2) {
    for (let r2 of this.schema.allOf) yield* es(r2.refiner(e10, t2), t2, this, e10);
  }
};
__publicField(_ez, "create", eu(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _ez({ allOf: t2 });
}));
let ez = _ez;
const _eF = class _eF extends ev {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(e10) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
    return eu(() => {
      let t3 = [];
      if (1 == r2.length && r2[0].constructor == Object) for (let [n3, i2] of Object.entries(r2[0])) if (ed.schemaProp(i2, "$ref")) t3.push(i2);
      else {
        let r3 = { [e10]: eA.literal(n3) };
        for (let [e11, t4, n4] of i2.entries({}, en)) r3[String(e11)] = n4;
        t3.push(e$.create(r3));
      }
      else for (let e11 of r2) u(e11) && t3.push(e$.create(e11));
      return new _eF({ oneOf: t3, discriminator: { propertyName: e10 } });
    })();
  }
  discriminatorPropType(e10) {
    return this._discriminatorPropName ?? (this._discriminatorPropName = (() => {
      var _a2, _b;
      let t2 = ((_a2 = this.schema.discriminator) == null ? void 0 : _a2.propertyName) ?? "", r2 = [], n2 = [];
      for (let e11 of this.schema.oneOf) {
        let i2 = ed.schemaProp(e11, "properties")[t2];
        if (!i2) continue;
        let a2 = i2.schema.enum;
        a2 && r2.push(...a2), n2.push(i2.meta);
      }
      return eg.of(eA.create(r2), { [ed.meta]: ed.create(n2[0], ((_b = e10.node) == null ? void 0 : _b.current.meta) ?? {}) });
    })());
  }
  discriminatorMapping(e10, t2, r2) {
    var _a2, _b;
    if (this._discriminatorMappingProps.get(t2)) return this._discriminatorMappingProps.get(t2);
    if ((((_b = (_a2 = this.discriminatorPropType(r2)) == null ? void 0 : _a2.schema) == null ? void 0 : _b.enum) ?? []).includes(t2)) {
      let r3 = this.schema.oneOf.find((r4) => {
        let n2 = ed.schemaProp(r4, "properties")[e10];
        if (n2) {
          let [e11, r5] = n2.validate(t2);
          return !e11;
        }
        return false;
      });
      if (r3) {
        if (!this._discriminatorMappingProps.has(t2)) {
          let n2 = {};
          for (let [t3, i2] of Object.entries(ed.schemaProp(r3, "properties"))) t3 !== e10 && (n2[t3] = i2);
          this._discriminatorMappingProps.set(t2, n2);
        }
        return this._discriminatorMappingProps.get(t2);
      }
    }
    return {};
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en;
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, n2 = e10 == null ? void 0 : e10[r2], i2 = e$.create({ [r2]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, n2, t2) });
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
      let r3 = this.schema.discriminator.propertyName, n2 = e10 == null ? void 0 : e10[r3];
      return e$.create({ [r3]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, n2, t2) }).validator(e10, t2);
    }
    let r2 = [];
    for (let n2 of this.schema.oneOf) {
      let [...i2] = el(e10, n2, t2), [a2] = i2;
      if (a2 && !a2[0]) return [];
      for (let [e11] of i2) e11 && r2.push(e11);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e11) => e11.type).join(" | ")}\`, but received: ${e10}`, ...r2];
  }
};
__publicField(_eF, "create", eu(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _eF({ oneOf: t2 });
}));
let eF = _eF;
let eD = e_.create, eI = eO.create, eK = eN.create, eC = eP.create, eL = ej.create, eq = ef((e10, t2, r2) => eg.refine(e10, (e11) => !!e11 && e11.length >= t2 || (r2 ?? `Expected string value length great than or equal ${t2}, but received "${e11}"`), { minLength: t2 })), eW = ef((e10, t2, r2) => eg.refine(e10, (e11) => !!e11 && e11.length <= t2 || (r2 ?? `Expected string value length less than or equal ${t2}, but received "${e11}"`), { maxLength: t2 })), eV = ef((e10, t2, r2) => eg.refine(e10, (n2) => !!t2.test(n2) || (r2 ?? `Expected a ${e10.type} matching \`/${t2.source}/\` but received "${n2}"`), { pattern: t2.source })), eJ = eS.create, eH = eM.create, eU = ef((e10, t2, r2) => eg.refine(e10, (e11) => e11 >= t2 || (r2 ?? `Expected value great than or equal ${t2}, but received "${e11}"`), { minimum: t2 })), eB = ef((e10, t2, r2) => eg.refine(e10, (e11) => e11 > t2 || (r2 ?? `Expected value great than ${t2}, but received "${e11}"`), { exclusiveMinimum: t2 })), eG = ef((e10, t2, r2) => eg.refine(e10, (e11) => e11 <= t2 || (r2 ?? `Expected value less than or equal ${t2}, but received "${e11}"`), { maximum: t2 })), eX = ef((e10, t2, r2) => eg.refine(e10, (e11) => e11 < t2 || (r2 ?? `Expected value less than or equal ${t2}, but received "${e11}"`), { exclusiveMaximum: t2 })), eQ = ef((e10, t2, r2) => eg.refine(e10, (e11) => e11 % t2 == 0 || (r2 ?? `Expected value multiple of ${t2}, but received "${e11}"`), { multipleOf: t2 })), eY = ex.create, eZ = eE.create, e0 = eA.create, e1 = eA.nativeEnum, e2 = eA.literal, e3 = e$.create, e4 = eT.create, e6 = ek.create, e5 = eR.create, e7 = ef((e10, t2, r2) => eg.refine(e10, (e11) => !!i(e11) && e11.length >= t2 || (r2 ?? `Expected array value at least ${t2}, but received "${e11 == null ? void 0 : e11.length}"`), { minItems: t2 })), e8 = ef((e10, t2, r2) => eg.refine(e10, (e11) => !!i(e11) && e11.length <= t2 || (r2 ?? `Expected array value  ${t2}, but received "${e11 == null ? void 0 : e11.length}"`), { maxItems: t2 })), e9 = ez.create, te = eF.create, tt = eF.discriminatorMapping, tr = ev.define, tn = eg.refine, ti = ef((e10, t2) => eb.create(e10, t2)), ta = ef((e10) => ew.create(e10)), to = ef((e10, t2) => eg.of(e10, { [ed.meta]: t2 })), ts = Object.freeze(Object.defineProperty({ __proto__: null, annotate: to, any: eI, array: e5, binary: eZ, boolean: eY, custom: tr, defaults: ti, discriminatorMapping: tt, enums: e0, exclusiveMaximum: eX, exclusiveMinimum: eB, integer: eH, intersection: e9, literal: e2, maxItems: e8, maxLength: eW, maximum: eG, minItems: e7, minLength: eq, minimum: eU, multipleOf: eQ, nativeEnum: e1, never: eK, nil: eC, number: eJ, object: e3, optional: ta, pattern: eV, record: e4, ref: eD, refine: tn, string: eL, tuple: e6, union: te }, Symbol.toStringTag, { value: "Module" })), tc = (e10) => {
  var _a2;
  return ((_a2 = e10.split("/")) == null ? void 0 : _a2.findLast(() => true)) ?? "";
};
class tl {
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
    return false === e10 ? eK() : new tl(t2).decode(e10);
  }
  decode(e10) {
    let t2 = structuredClone(e10), r2 = this._decode(t2), n2 = false;
    if ((t2 == null ? void 0 : t2.title) && (r2 = r2.use(to({ title: t2 == null ? void 0 : t2.title })), n2 = true), t2 == null ? void 0 : t2.description) {
      if (n2) r2 = r2.use(to({ description: t2 == null ? void 0 : t2.description }));
      else {
        let [e11, ...n3] = t2 == null ? void 0 : t2.description.split(/[.\n]/);
        r2 = r2.use(to({ title: e11, description: n3 ? n3.join("\n").trim() : void 0 }));
      }
    }
    if (t2) {
      for (let e11 of tv) if (e11 in t2) {
        let n3 = ts[e11];
        n3 && (r2 = r2.use(n3(t2[e11])));
      }
    }
    return r2;
  }
  _decode(t2) {
    var _a2, _b;
    let r2 = tw(t2);
    if (r2.$ref) {
      let [e10, t3] = this.resolveRef(r2.$ref);
      return this.def.has(t3) || (this.def.set(t3, eI()), this.def.set(t3, this.decode(e10))), eD(t3, () => this.ref(t3));
    }
    if (r2.enum) {
      let e10 = e0(r2.enum);
      return r2["x-enum-labels"] ? e10.use(to({ enumLabels: r2["x-enum-labels"] })) : e10;
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
          let r3 = this.decode(i2), a2 = (_a2 = ed.schemaProp(r3, "properties")) == null ? void 0 : _a2[t3];
          if (a2) {
            let t4 = (_b = ed.schemaProp(a2, "enum")) == null ? void 0 : _b[0];
            e(t4) || (n2[`${t4}`] = r3);
          }
        }
        return tt(t3, n2);
      }
    }
    if (r2.oneOf) {
      let e10 = r2.oneOf.map((e11) => this.decode(e11));
      return 1 === e10.length ? e10[0] : te(...e10);
    }
    if (r2.allOf) {
      let e10 = r2.allOf.map((e11) => this.decode(e11));
      return 1 === e10.length ? e10[0] : e9(...e10);
    }
    if (tu(r2)) {
      if (r2.properties) {
        let e11 = r2.required ?? [], t3 = {};
        for (let [n2, i2] of Object.entries(r2.properties)) {
          let r3 = this.decode(i2);
          e11.includes(n2) || (r3 = r3.optional()), t3[n2] = r3;
        }
        return e3(t3);
      }
      let e10 = r2.additionalProperties ?? {};
      return e10 ? e4(this.decode(r2.propertyNames ?? { type: "string" }), this.decode(e10)) : e3();
    }
    return td(r2) ? i(r2.items) ? e6(r2.items.map((e10) => this.decode(e10))) : e5(this.decode(r2.items)) : th(r2) ? "binary" === r2.format ? eZ() : eL() : tp(r2) ? "integer" === r2.type ? eH() : eJ() : ty(r2) ? eY() : tf(r2) ? eC() : eI();
  }
}
let tu = (e10) => "object" === e10.type, tf = (e10) => "null" === e10.type, td = (e10) => "array" === e10.type, tp = (e10) => "number" === e10.type || "integer" === e10.type, th = (e10) => "string" === e10.type, ty = (e10) => "boolean" === e10.type, tm = { object: ["properties", "additionalProperties", "unevaluatedProperties", "patternProperties", "propertyNames", "dependentSchemas", "maxProperties", "minProperties"], array: ["contains", "items", "additionalItems", "unevaluatedItems", "maxItems", "minItems", "uniqueItems", "maxContains", "minContains"], string: ["pattern", "contentMediaType", "contentEncoding", "contentSchema", "maxLength", "minLength"], number: ["maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"] }, tv = ["maxProperties", "minProperties", "maxItems", "minItems", "uniqueItems", "pattern", "maxLength", "minLength", "maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"], tg = (e10, t2) => t2.some((t3) => Object.hasOwn(e10, t3)), tb = (e10) => !tg(e10, ["type", "$ref", "$id", "oneOf", "anyOf", "allOf"]), tw = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (s(e10)) return {};
  if (!e10.type) {
    for (let t3 in tm) if (tg(e10, tm[t3])) {
      e10.type = t3;
      break;
    }
  }
  e10.const && (e10.enum = [e10.const]);
  let t2 = (t3) => {
    var _a2;
    e10[t3] && (e10[t3] = e10[t3].filter((r2) => {
      let n2 = tw(r2);
      return !tb(n2) || ("allOf" === t3 && Object.assign(e10, n2), false);
    }), ((_a2 = e10[t3]) == null ? void 0 : _a2.length) === 0 && (e10[t3] = void 0));
  };
  return t2("allOf"), t2("anyOf"), t2("oneOf"), e10;
}, t_ = {}, tO = function(e10, t2, r2) {
  let n2 = Promise.resolve();
  if (t2 && t2.length > 0) {
    document.getElementsByTagName("link");
    let e11 = document.querySelector("meta[property=csp-nonce]"), r3 = (e11 == null ? void 0 : e11.nonce) || (e11 == null ? void 0 : e11.getAttribute("nonce"));
    n2 = Promise.allSettled(t2.map((e12) => {
      if ((e12 = "/__APP_BASE_HREF__/" + e12) in t_) return;
      t_[e12] = true;
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
  en as E,
  em as J,
  ed as S,
  tO as _,
  e5 as a,
  eI as b,
  to as c,
  ef as d,
  tr as e,
  tl as f,
  et as g,
  tc as h,
  ea as i,
  e0 as j,
  eY as k,
  e3 as o,
  Z as p,
  e4 as r,
  eL as s
};
