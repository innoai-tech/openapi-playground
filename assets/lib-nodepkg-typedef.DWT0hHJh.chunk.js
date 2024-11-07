var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
let e = (e10) => void 0 === e10, t = (e10) => Object.is(e10, null), r = (e10) => !!e10 && "object" == typeof e10, i = (e10) => Array.isArray(e10), n = (e10) => "number" == typeof e10 && !Number.isNaN(e10), a = (e10) => "number" == typeof e10 && !Number.isNaN(e10) && Number.isInteger(e10), o = (e10) => "boolean" == typeof e10, s = (e10) => "string" == typeof e10, l = (e10) => "object" == typeof e10 && "function" == typeof e10[Symbol.iterator], c = (e10) => "function" == typeof e10 && `${e10}`.startsWith("class"), u = (e10) => !!(e10 && e10.constructor && e10.call && e10.apply);
var d, f = /* @__PURE__ */ Symbol.for("immer-nothing"), p = /* @__PURE__ */ Symbol.for("immer-draftable"), h = /* @__PURE__ */ Symbol.for("immer-state");
function m(e10) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) r2[i2 - 1] = arguments[i2];
  throw Error(`[Immer] minified error nr: ${e10}. Full error at: https://bit.ly/3cXEKWf`);
}
var y = Object.getPrototypeOf;
function v(e10) {
  return !!e10 && !!e10[h];
}
function g(e10) {
  var t2;
  return !!e10 && (_(e10) || Array.isArray(e10) || !!e10[p] || !!(null === (t2 = e10.constructor) || void 0 === t2 ? void 0 : t2[p]) || j(e10) || S(e10));
}
var b = /* @__PURE__ */ Object.prototype.constructor.toString();
function _(e10) {
  if (!e10 || "object" != typeof e10) return false;
  let t2 = /* @__PURE__ */ y(e10);
  if (null === t2) return true;
  let r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === b;
}
function w(e10, t2) {
  0 === O(e10) ? Reflect.ownKeys(e10).forEach((r2) => {
    t2(r2, e10[r2], e10);
  }) : e10.forEach((r2, i2) => t2(i2, r2, e10));
}
function O(e10) {
  let t2 = e10[h];
  return t2 ? t2.type_ : Array.isArray(e10) ? 1 : j(e10) ? 2 : S(e10) ? 3 : 0;
}
function P(e10, t2) {
  return 2 === O(e10) ? e10.has(t2) : Object.prototype.hasOwnProperty.call(e10, t2);
}
function x(e10, t2, r2) {
  let i2 = /* @__PURE__ */ O(e10);
  2 === i2 ? e10.set(t2, r2) : 3 === i2 ? e10.add(r2) : e10[t2] = r2;
}
function j(e10) {
  return e10 instanceof Map;
}
function S(e10) {
  return e10 instanceof Set;
}
function $(e10) {
  return e10.copy_ || e10.base_;
}
function N(e10, t2) {
  if (j(e10)) return new Map(e10);
  if (S(e10)) return new Set(e10);
  if (Array.isArray(e10)) return Array.prototype.slice.call(e10);
  let r2 = /* @__PURE__ */ _(e10);
  if (true !== t2 && ("class_only" !== t2 || r2)) {
    let t3 = /* @__PURE__ */ y(e10);
    return null !== t3 && r2 ? { ...e10 } : Object.assign(/* @__PURE__ */ Object.create(t3), e10);
  }
  {
    let t3 = /* @__PURE__ */ Object.getOwnPropertyDescriptors(e10);
    delete t3[h];
    let r3 = /* @__PURE__ */ Reflect.ownKeys(t3);
    for (let i2 = 0; i2 < r3.length; i2++) {
      let n2 = r3[i2], a2 = t3[n2];
      false === a2.writable && (a2.writable = true, a2.configurable = true), (a2.get || a2.set) && (t3[n2] = { configurable: true, writable: true, enumerable: a2.enumerable, value: e10[n2] });
    }
    return Object.create(/* @__PURE__ */ y(e10), t3);
  }
}
function M(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return E(e10) || v(e10) || !g(e10) || (O(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = A), Object.freeze(e10), t2 && Object.entries(e10).forEach((e11) => {
    let [t3, r2] = e11;
    return M(r2, true);
  })), e10;
}
function A() {
  m(2);
}
function E(e10) {
  return Object.isFrozen(e10);
}
var z = {};
function F(e10) {
  let t2 = z[e10];
  return t2 || m(0, e10), t2;
}
function k(e10, t2) {
  t2 && (F("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t2);
}
function I(e10) {
  R(e10), e10.drafts_.forEach(D), e10.drafts_ = null;
}
function R(e10) {
  e10 === d && (d = e10.parent_);
}
function C(e10) {
  return d = { drafts_: [], parent_: d, immer_: e10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function D(e10) {
  let t2 = e10[h];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function K(e10, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e10 && e10 !== r2 ? (r2[h].modified_ && (I(t2), m(4)), g(e10) && (e10 = /* @__PURE__ */ q(t2, e10), t2.parent_ || L(t2, e10)), t2.patches_ && F("Patches").generateReplacementPatches_(r2[h].base_, e10, t2.patches_, t2.inversePatches_)) : e10 = /* @__PURE__ */ q(t2, r2, []), I(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e10 !== f ? e10 : void 0;
}
function q(e10, t2, r2) {
  if (E(t2)) return t2;
  let i2 = t2[h];
  if (!i2) return w(t2, (n2, a2) => T(e10, i2, t2, n2, a2, r2)), t2;
  if (i2.scope_ !== e10) return t2;
  if (!i2.modified_) return L(e10, i2.base_, true), i2.base_;
  if (!i2.finalized_) {
    i2.finalized_ = true, i2.scope_.unfinalizedDrafts_--;
    let t3 = i2.copy_, n2 = t3, a2 = false;
    3 === i2.type_ && (n2 = new Set(t3), t3.clear(), a2 = true), w(n2, (n3, o2) => T(e10, i2, t3, n3, o2, r2, a2)), L(e10, t3, false), r2 && e10.patches_ && F("Patches").generatePatches_(i2, r2, e10.patches_, e10.inversePatches_);
  }
  return i2.copy_;
}
function T(e10, t2, r2, i2, n2, a2, o2) {
  if (v(n2)) {
    let o3 = /* @__PURE__ */ q(e10, n2, a2 && t2 && 3 !== t2.type_ && !P(t2.assigned_, i2) ? a2.concat(i2) : void 0);
    if (x(r2, i2, o3), !v(o3)) return;
    e10.canAutoFreeze_ = false;
  } else o2 && r2.add(n2);
  if (g(n2) && !E(n2)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1) return;
    q(e10, n2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof i2 && Object.prototype.propertyIsEnumerable.call(r2, i2) && L(e10, n2);
  }
}
function L(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && M(t2, r2);
}
var W = { get(e10, t2) {
  if (t2 === h) return e10;
  let r2 = /* @__PURE__ */ $(e10);
  if (!P(r2, t2)) return function(e11, t3, r3) {
    var i3;
    let n2 = /* @__PURE__ */ U(t3, r3);
    return n2 ? "value" in n2 ? n2.value : null === (i3 = n2.get) || void 0 === i3 ? void 0 : i3.call(e11.draft_) : void 0;
  }(e10, r2, t2);
  let i2 = r2[t2];
  return e10.finalized_ || !g(i2) ? i2 : i2 === J(e10.base_, t2) ? (X(e10), e10.copy_[t2] = /* @__PURE__ */ G(i2, e10)) : i2;
}, has: (e10, t2) => t2 in $(e10), ownKeys: (e10) => Reflect.ownKeys(/* @__PURE__ */ $(e10)), set(e10, t2, r2) {
  let i2 = /* @__PURE__ */ U(/* @__PURE__ */ $(e10), t2);
  if (null == i2 ? void 0 : i2.set) return i2.set.call(e10.draft_, r2), true;
  if (!e10.modified_) {
    let i3 = /* @__PURE__ */ J(/* @__PURE__ */ $(e10), t2), n2 = null == i3 ? void 0 : i3[h];
    if (n2 && n2.base_ === r2) return e10.copy_[t2] = r2, e10.assigned_[t2] = false, true;
    if ((r2 === i3 ? 0 !== r2 || 1 / r2 == 1 / i3 : r2 != r2 && i3 != i3) && (void 0 !== r2 || P(e10.base_, t2))) return true;
    X(e10), B(e10);
  }
  return !!(e10.copy_[t2] === r2 && (void 0 !== r2 || t2 in e10.copy_) || Number.isNaN(r2) && Number.isNaN(e10.copy_[t2])) || (e10.copy_[t2] = r2, e10.assigned_[t2] = true, true);
}, deleteProperty: (e10, t2) => (void 0 !== J(e10.base_, t2) || t2 in e10.base_ ? (e10.assigned_[t2] = false, X(e10), B(e10)) : delete e10.assigned_[t2], e10.copy_ && delete e10.copy_[t2], true), getOwnPropertyDescriptor(e10, t2) {
  let r2 = /* @__PURE__ */ $(e10), i2 = /* @__PURE__ */ Reflect.getOwnPropertyDescriptor(r2, t2);
  return i2 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t2, enumerable: i2.enumerable, value: r2[t2] } : i2;
}, defineProperty() {
  m(11);
}, getPrototypeOf: (e10) => y(e10.base_), setPrototypeOf() {
  m(12);
} }, V = {};
function J(e10, t2) {
  let r2 = e10[h];
  return (r2 ? $(r2) : e10)[t2];
}
function U(e10, t2) {
  if (!(t2 in e10)) return;
  let r2 = /* @__PURE__ */ y(e10);
  for (; r2; ) {
    let e11 = /* @__PURE__ */ Object.getOwnPropertyDescriptor(r2, t2);
    if (e11) return e11;
    r2 = /* @__PURE__ */ y(r2);
  }
}
function B(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && B(e10.parent_));
}
function X(e10) {
  e10.copy_ || (e10.copy_ = /* @__PURE__ */ N(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function G(e10, t2) {
  let r2 = j(e10) ? F("MapSet").proxyMap_(e10, t2) : S(e10) ? F("MapSet").proxySet_(e10, t2) : function(e11, t3) {
    let r3 = /* @__PURE__ */ Array.isArray(e11), i2 = { type_: r3 ? 1 : 0, scope_: t3 ? t3.scope_ : d, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, n2 = i2, a2 = W;
    r3 && (n2 = [i2], a2 = V);
    let { revoke: o2, proxy: s2 } = Proxy.revocable(n2, a2);
    return i2.draft_ = s2, i2.revoke_ = o2, s2;
  }(e10, t2);
  return (t2 ? t2.scope_ : d).drafts_.push(r2), r2;
}
w(W, (e10, t2) => {
  V[e10] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), V.deleteProperty = function(e10, t2) {
  return V.set.call(this, e10, t2, void 0);
}, V.set = function(e10, t2, r2) {
  return W.set.call(this, e10[0], t2, r2, e10[0]);
};
var H = new class {
  constructor(e10) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e11, t2, r2) => {
      let i2;
      if ("function" == typeof e11 && "function" != typeof t2) {
        let r3 = t2;
        t2 = e11;
        let i3 = this;
        return function() {
          let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r3;
          for (var n2 = arguments.length, a2 = Array(n2 > 1 ? n2 - 1 : 0), o2 = 1; o2 < n2; o2++) a2[o2 - 1] = arguments[o2];
          return i3.produce(e12, (e13) => t2.call(this, e13, ...a2));
        };
      }
      if ("function" != typeof t2 && m(6), void 0 !== r2 && "function" != typeof r2 && m(7), g(e11)) {
        let n2 = /* @__PURE__ */ C(this), a2 = /* @__PURE__ */ G(e11, void 0), o2 = true;
        try {
          i2 = /* @__PURE__ */ t2(a2), o2 = false;
        } finally {
          o2 ? I(n2) : R(n2);
        }
        return k(n2, r2), K(i2, n2);
      }
      if (e11 && "object" == typeof e11) m(1, e11);
      else {
        if (void 0 === (i2 = /* @__PURE__ */ t2(e11)) && (i2 = e11), i2 === f && (i2 = void 0), this.autoFreeze_ && M(i2, true), r2) {
          let t3 = [], n2 = [];
          F("Patches").generateReplacementPatches_(e11, i2, t3, n2), r2(t3, n2);
        }
        return i2;
      }
    }, this.produceWithPatches = (e11, t2) => {
      let r2, i2;
      if ("function" == typeof e11) {
        var n2 = this;
        return function(t3) {
          for (var r3 = arguments.length, i3 = Array(r3 > 1 ? r3 - 1 : 0), a2 = 1; a2 < r3; a2++) i3[a2 - 1] = arguments[a2];
          return n2.produceWithPatches(t3, (t4) => e11(t4, ...i3));
        };
      }
      return [/* @__PURE__ */ this.produce(e11, t2, (e12, t3) => {
        r2 = e12, i2 = t3;
      }), r2, i2];
    }, "boolean" == typeof (null == e10 ? void 0 : e10.autoFreeze) && this.setAutoFreeze(e10.autoFreeze), "boolean" == typeof (null == e10 ? void 0 : e10.useStrictShallowCopy) && this.setUseStrictShallowCopy(e10.useStrictShallowCopy);
  }
  createDraft(e10) {
    var t2;
    g(e10) || m(8), v(e10) && (v(t2 = e10) || m(10, t2), e10 = function e11(t3) {
      let r3;
      if (!g(t3) || E(t3)) return t3;
      let i3 = t3[h];
      if (i3) {
        if (!i3.modified_) return i3.base_;
        i3.finalized_ = true, r3 = /* @__PURE__ */ N(t3, i3.scope_.immer_.useStrictShallowCopy_);
      } else r3 = /* @__PURE__ */ N(t3, true);
      return w(r3, (t4, i4) => {
        x(r3, t4, /* @__PURE__ */ e11(i4));
      }), i3 && (i3.finalized_ = false), r3;
    }(t2));
    let r2 = /* @__PURE__ */ C(this), i2 = /* @__PURE__ */ G(e10, void 0);
    return i2[h].isManual_ = true, R(r2), i2;
  }
  finishDraft(e10, t2) {
    let r2 = e10 && e10[h];
    r2 && r2.isManual_ || m(9);
    let { scope_: i2 } = r2;
    return k(i2, t2), K(void 0, i2);
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
      let i3 = t2[r2];
      if (0 === i3.path.length && "replace" === i3.op) {
        e10 = i3.value;
        break;
      }
    }
    r2 > -1 && (t2 = /* @__PURE__ */ t2.slice(r2 + 1));
    let i2 = F("Patches").applyPatches_;
    return v(e10) ? i2(e10, t2) : this.produce(e10, (e11) => i2(e11, t2));
  }
}(), Q = H.produce;
H.produceWithPatches.bind(H), H.setAutoFreeze.bind(H), H.setUseStrictShallowCopy.bind(H), H.applyPatches.bind(H), H.createDraft.bind(H), H.finishDraft.bind(H);
const _Y = class _Y {
  static getOwnPropertyNames(e10) {
    if (e10 && e10.constructor && e10.constructor != Object) {
      var t2, r2;
      return null !== (r2 = null === (t2 = e10.constructor[_Y.metadata]) || void 0 === t2 ? void 0 : t2.keys().filter((e11) => s(e11))) && void 0 !== r2 ? r2 : [];
    }
    return [];
  }
  static get(e10, t2) {
    if (e10 && e10.constructor && e10.constructor != Object) {
      var r2;
      return null === (r2 = e10.constructor[_Y.metadata]) || void 0 === r2 ? void 0 : r2.get(t2);
    }
  }
  static define(e10, t2, r2, i2) {
    if (e10 && e10.constructor && e10.constructor != Object) {
      var n2, a2, o2, s2, l2;
      let c2 = null !== (o2 = (n2 = e10.constructor)[a2 = _Y.metadata]) && void 0 !== o2 ? o2 : n2[a2] = /* @__PURE__ */ new Map();
      if (u(r2)) {
        c2.set(t2, /* @__PURE__ */ Q(null !== (l2 = null !== (s2 = /* @__PURE__ */ c2.get(t2)) && void 0 !== s2 ? s2 : i2) && void 0 !== l2 ? l2 : {}, r2));
        return;
      }
      c2.set(t2, r2);
    }
  }
};
__publicField(_Y, "metadata", Symbol("metadata"));
let Y = _Y;
let Z = { path: [], branch: [] };
class ee extends TypeError {
  constructor(e10, t2) {
    let r2;
    let { message: i2, explanation: n2, ...a2 } = e10, { path: o2 } = e10, s2 = 0 === o2.length ? i2 : `At path: ${o2.join(".")} -- ${i2}`;
    super(null != n2 ? n2 : s2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != n2 && (this.cause = s2), Object.assign(this, a2), this.name = this.constructor.name, this.failures = () => null != r2 ? r2 : r2 = [e10, .../* @__PURE__ */ t2()];
  }
}
let et = (e10) => !!e10 && e10[er] == er, er = /* @__PURE__ */ Symbol("Type");
function* ei(t2, r2, i2, n2) {
  let a2 = t2;
  for (let t3 of (l(a2) || (a2 = [a2]), a2)) {
    let a3 = /* @__PURE__ */ function(t4, r3, i3, n3) {
      if (true === t4) return;
      let a4 = {};
      a4 = false === t4 ? {} : s(t4) ? { message: t4 } : t4;
      let { path: o2, branch: l2, node: c2 } = r3, { type: u2 } = i3, { refinement: d2, message: f2 = e(n3) ? "Required" : `Expected a value of type \`${u2}\`${d2 ? ` with refinement \`${d2}\`` : ""}, but received: \`${n3}\`` } = a4;
      return { ...a4, value: n3, type: u2, refinement: d2, key: o2[o2.length - 1], path: o2, branch: l2, node: c2, message: f2 };
    }(t3, r2, i2, n2);
    a3 && (yield a3);
  }
}
function en(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = /* @__PURE__ */ ea(e10, t2, r2), n2 = /* @__PURE__ */ function(e11) {
    let { done: t3, value: r3 } = e11.next();
    return t3 ? void 0 : r3;
  }(i2);
  return n2[0] ? [new ee(n2[0], function* () {
    for (let e11 of i2) e11[0] && (yield e11[0]);
  }), void 0] : [void 0, n2[1]];
}
function* ea(e10, t2) {
  let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: n2 = [], branch: a2 = [e10], node: o2 = { current: t2 }, coerce: s2 = false, mask: l2 = false } = i2, c2 = { mask: l2, path: n2, branch: a2, node: o2 }, u2 = e10;
  if (s2) {
    let r2 = /* @__PURE__ */ t2.coercer(e10, c2);
    void 0 != r2 && (u2 = r2);
  }
  let d2 = 0;
  for (let r2 of ei(/* @__PURE__ */ t2.validator(u2, c2), c2, t2, e10)) r2.explanation = i2.message, d2 = 2, yield [r2, void 0];
  for (let [e11, f2, p2] of t2.entries(u2, c2)) for (let t3 of /* @__PURE__ */ ea(f2, p2, { path: void 0 === e11 ? n2 : [...n2, e11], branch: void 0 === e11 ? a2 : [...a2, f2], node: void 0 === e11 ? o2 : { current: p2, parent: o2 }, coerce: s2, mask: l2, message: i2.message })) t3[0] ? (d2 = null != t3[0].refinement ? 1 : 2, yield [t3[0], void 0]) : s2 && (f2 = t3[1], void 0 === e11 ? u2 = f2 : u2 instanceof Map ? u2.set(e11, f2) : u2 instanceof Set ? u2.add(f2) : r(u2) && (u2[e11] = f2));
  if (2 !== d2) for (let r2 of ei(/* @__PURE__ */ t2.refiner(u2, c2), c2, t2, e10)) r2.explanation = i2.message, d2 = 1, yield [r2, void 0];
  0 === d2 && (yield [void 0, u2]);
}
let eo = (e10) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), i2 = 0; i2 < t2; i2++) r2[i2] = arguments[i2];
  let n2 = /* @__PURE__ */ e10(...r2), a2 = (e11, t3) => {
    var r3;
    let i3 = null !== (r3 = /* @__PURE__ */ Y.get(e11, t3)) && void 0 !== r3 ? r3 : {};
    Y.define(e11, t3, { ...i3, type: n2 });
  };
  return a2.toString = () => `@type:${n2.type}`, new Proxy(a2, { ownKeys: () => [.../* @__PURE__ */ Object.getOwnPropertyNames(n2), .../* @__PURE__ */ Object.getOwnPropertySymbols(n2)], get: (e11, t3) => n2[t3] });
}, es = (e10) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), i2 = 0; i2 < t2; i2++) r2[i2] = arguments[i2];
  let n2 = (t3) => e10(t3, ...r2);
  return new Proxy((e11, t3) => {
    Y.define(e11, t3, (e12) => {
      var t4;
      (null !== (t4 = e12.modifies) && void 0 !== t4 ? t4 : e12.modifies = []).push({ modify: n2 });
    }, {});
  }, { get(e11, t3) {
    if ("modify" == t3) return n2;
  } });
};
const _el = class _el {
  static create(e10, t2, r2) {
    var i2;
    let n2;
    let a2 = null != t2 ? t2 : null === (i2 = e10[_el.underlying]) || void 0 === i2 ? void 0 : i2.schema;
    return new Proxy({}, { ownKeys(t3) {
      let i3 = /* @__PURE__ */ new Map();
      if (r2) {
        if (e10[r2]) for (let t4 of Object.getOwnPropertyNames(e10[r2])) i3.set(t4, t4);
        if (a2 && a2[r2]) for (let e11 of Object.getOwnPropertyNames(a2[r2])) i3.set(e11, e11);
      } else {
        for (let t4 of Object.getOwnPropertyNames(e10)) i3.set(t4, t4);
        if (a2) for (let e11 of Object.getOwnPropertyNames(a2)) i3.set(e11, e11);
      }
      return [.../* @__PURE__ */ i3.keys()];
    }, get(t3, i3) {
      var o2, s2, l2, c2;
      return i3 === _el.meta ? null != n2 ? n2 : n2 = /* @__PURE__ */ _el.create(e10, a2, _el.meta) : r2 ? null !== (l2 = null == e10 ? void 0 : null === (o2 = e10[r2]) || void 0 === o2 ? void 0 : o2[i3]) && void 0 !== l2 ? l2 : a2 ? null == a2 ? void 0 : null === (s2 = a2[r2]) || void 0 === s2 ? void 0 : s2[i3] : void 0 : null !== (c2 = e10[i3]) && void 0 !== c2 ? c2 : a2 ? a2[i3] : void 0;
    } });
  }
  static schemaProp(e10, t2) {
    return ec(e10.schema, t2);
  }
  static metaProp(e10, t2) {
    return eu(e10.schema, t2);
  }
};
__publicField(_el, "RecordKey", Symbol("RecordKey"));
__publicField(_el, "meta", Symbol("meta"));
__publicField(_el, "optional", Symbol("optional"));
__publicField(_el, "underlying", Symbol("underlying"));
__publicField(_el, "unwrap", Symbol("unwrap"));
__publicField(_el, "extractSchema", (e10) => new ed().toValue(e10));
__publicField(_el, "extractMeta", (e10) => {
  var t2;
  return new ed().toValue(null !== (t2 = e10.meta) && void 0 !== t2 ? t2 : e10[_el.meta]);
});
let el = _el;
let ec = (e10, t2) => {
  var r2;
  return null !== (r2 = e10[t2]) && void 0 !== r2 ? r2 : e10[el.unwrap] ? ec(e10[el.unwrap]().schema, t2) : void 0;
}, eu = (e10, t2) => {
  var r2, i2;
  return null !== (i2 = null === (r2 = e10[el.meta]) || void 0 === r2 ? void 0 : r2[t2]) && void 0 !== i2 ? i2 : e10[el.unwrap] ? eu(e10[el.unwrap]().schema, t2) : void 0;
};
class ed {
  constructor(e10 = false) {
    this.deref = e10;
  }
  toValue(t2) {
    if (t2) {
      if (!e(t2.schema)) return this.toValue(t2.schema);
      if (this.deref && t2[el.unwrap]) return this.toValue(/* @__PURE__ */ t2[el.unwrap]());
      if (i(t2)) return this.toArray(t2);
      if (t2.constructor === Object) return this.toObject(t2);
    }
    return t2;
  }
  toObject(e10) {
    let t2 = {};
    for (let r2 of Object.getOwnPropertyNames(e10)) t2[r2] = /* @__PURE__ */ this.toValue(e10[r2]);
    return t2;
  }
  toArray(e10) {
    let t2 = [];
    for (let r2 of e10) t2.push(/* @__PURE__ */ this.toValue(r2));
    return t2;
  }
}
class ef {
  static parse(e10) {
    if ("" === e10) return [];
    if ("/" === e10) return [""];
    if ("/" !== e10.charAt(0)) throw Error("Invalid JSON pointer: " + e10);
    let t2 = /* @__PURE__ */ e10.substring(1).split(/\//);
    return t2.map((e11, r2) => ef.unescape(e11, r2 === t2.length - 1));
  }
  static create() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return 0 === e10.length ? "" : "/" + e10.map(ef.escape).join("/");
  }
  static unescape(e10, t2) {
    return "" == e10 && t2 ? el.RecordKey : e10.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e10) {
    return e10 == el.RecordKey ? "" : e10.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e10, t2) {
    let r2 = Array.isArray(t2) ? t2 : ef.parse(t2);
    for (let t3 = 0; t3 < r2.length; t3++) {
      let i2 = r2[t3];
      if (t3 > 0 && i2 == el.RecordKey) return r2[t3 - 1];
      if (!("object" == typeof e10 && i2 in e10)) throw Error("Invalid reference token: " + i2);
      e10 = e10[i2];
    }
    return e10;
  }
}
_a = er;
const _ep = class _ep {
  constructor(e10) {
    __publicField(this, _a, er);
    __publicField(this, "schema");
    if (e10) {
      this.schema = /* @__PURE__ */ el.create(e10);
      return;
    }
    this.schema = null != e10 ? e10 : null;
  }
  get meta() {
    return this.schema ? this.schema[el.meta] : {};
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
    if (s(e10)) {
      let t3 = /* @__PURE__ */ e10.trim();
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
    return en(e10, this, t2);
  }
  create(e10) {
    let t2 = /* @__PURE__ */ en(e10, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e10) {
    let t2 = /* @__PURE__ */ en(e10, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  use() {
    for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e11, t3) => t3.modify(e11), this);
  }
  optional() {
    return ey.create(this);
  }
  default(e10) {
    return em.create(this, e10);
  }
};
__publicField(_ep, "define", eo(function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _ep {
    validator(t2, r2) {
      return e10(t2, r2);
    }
  }(null);
}));
__publicField(_ep, "fromTypeObject", (e10, t2) => {
  var r2, i2, n2;
  let a2 = null !== (i2 = null !== (r2 = e10.type) && void 0 !== r2 ? r2 : t2) && void 0 !== i2 ? i2 : new _ep({});
  return e10.modifies ? a2.use(...null !== (n2 = e10.modifies) && void 0 !== n2 ? n2 : []) : a2;
});
let ep = _ep;
class eh extends ep {
  static of(e10, t2) {
    return new eh({ ...t2, [el.underlying]: e10 });
  }
  static refine(e10, t2, r2) {
    return new class extends eh {
      *refiner(i2, n2) {
        for (let a2 of (yield* this.unwrap.refiner(i2, n2), /* @__PURE__ */ ei(/* @__PURE__ */ t2(i2, n2), n2, e10, i2))) yield { ...a2, refinement: /* @__PURE__ */ Object.keys(r2).join(",") };
      }
    }({ ...r2, [el.underlying]: e10 });
  }
  get unwrap() {
    let e10 = this.schema[el.unwrap];
    return e10 ? e10() : this.schema[el.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z;
    yield* this.unwrap.entries(e10, { ...t2, node: { current: this, parent: t2.node } });
  }
  validator(e10, t2) {
    return ei(/* @__PURE__ */ this.unwrap.validator(e10, t2), t2, this, e10);
  }
  refiner(e10, t2) {
    return ei(/* @__PURE__ */ this.unwrap.refiner(e10, t2), t2, this, e10);
  }
  coercer(e10, t2) {
    return this.unwrap.coercer(e10, t2);
  }
}
const _em = class _em extends eh {
  coercer(e10, t2) {
    return void 0 === e10 ? this.schema.default : super.unwrap.coercer(e10, t2);
  }
};
__publicField(_em, "create", eo((e10, t2) => new _em({ default: t2, [el.underlying]: e10 })));
let em = _em;
const _ey = class _ey extends eh {
  refiner(e10, t2) {
    return void 0 === e10 || super.unwrap.refiner(e10, t2);
  }
  validator(e10, t2) {
    return void 0 === e10 || super.unwrap.validator(e10, t2);
  }
};
__publicField(_ey, "create", eo((e10) => new _ey({ [el.underlying]: e10, [el.optional]: e10 })));
let ey = _ey;
const _ev = class _ev extends eh {
};
__publicField(_ev, "create", eo((e10, t2) => new _ev({ $ref: e10, [el.unwrap]: t2 })));
let ev = _ev;
const _eg = class _eg extends ep {
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
__publicField(_eg, "create", eo(() => new _eg()));
let eg = _eg;
const _eb = class _eb extends ep {
  get type() {
    return "null";
  }
  validator(e10, r2) {
    return t(e10);
  }
};
__publicField(_eb, "create", eo(() => new _eb({ type: "null" })));
let eb = _eb;
const _e_ = class _e_ extends ep {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return s(e10);
  }
};
__publicField(_e_, "create", eo(() => new _e_({ type: "string" })));
let e_ = _e_;
const _ew = class _ew extends ep {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return n(e10);
  }
  coercer(e10, t2) {
    try {
      let t3 = void 0 != e10 ? parseFloat(/* @__PURE__ */ String(e10)) : void 0;
      if (n(t3)) return t3;
    } catch (e11) {
    }
  }
};
__publicField(_ew, "create", eo(() => new _ew({ type: "number" })));
let ew = _ew;
const _eO = class _eO extends ep {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return a(e10);
  }
  coercer(e10, t2) {
    try {
      let t3 = void 0 != e10 ? parseInt(/* @__PURE__ */ String(e10)) : void 0;
      return a(t3) ? t3 : void 0;
    } catch (e11) {
      return;
    }
  }
};
__publicField(_eO, "create", eo(() => new _eO({ type: "integer" })));
let eO = _eO;
const _eP = class _eP extends ep {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return o(e10);
  }
  coercer(e10, t2) {
    try {
      return void 0 != e10 ? "true" === String(e10) : void 0;
    } catch (e11) {
      return;
    }
  }
};
__publicField(_eP, "create", eo(() => new _eP({ type: "boolean" })));
let eP = _eP;
const _ex = class _ex extends ep {
  get type() {
    return "binary";
  }
  validator(e10, t2) {
    return e10 instanceof File || e10 instanceof Blob;
  }
};
__publicField(_ex, "create", eo(() => new _ex({ type: "string", format: "binary" })));
let ex = _ex;
const _ej = class _ej extends ep {
  static createEnum(e10) {
    return new _ej({ enum: e10 });
  }
  get type() {
    return "enums";
  }
  validator(e10, t2) {
    return this.schema.enum.includes(e10);
  }
};
__publicField(_ej, "create", eo(_ej.createEnum));
__publicField(_ej, "literal", eo((e10) => new _ej({ enum: [e10] })));
__publicField(_ej, "nativeEnum", eo((e10) => new _ej({ enum: /* @__PURE__ */ Object.values(e10) })));
let ej = _ej;
const _eS = class _eS extends ep {
  get type() {
    return "never";
  }
  validator(e10, t2) {
    return false;
  }
};
__publicField(_eS, "create", eo(() => new _eS(false)));
let eS = _eS;
class e$ extends ep {
  static create(e10) {
    let t2 = function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = [];
      for (let [r2, i2] of Object.entries(e11)) /* @__PURE__ */ el.schemaProp(i2, el.optional) || t3.push(r2);
      return t3;
    };
    return eo(() => {
      if (e10) {
        if (c(e10)) {
          let n2 = new e10(), a2 = {};
          for (let [e11, t3] of Object.entries(n2)) a2[e11] = /* @__PURE__ */ ej.literal(t3);
          for (let e11 of Y.getOwnPropertyNames(n2)) {
            let t3 = /* @__PURE__ */ Y.get(n2, e11);
            if (t3) {
              let n3 = /* @__PURE__ */ ep.fromTypeObject(t3, a2[e11]);
              if (e11 in a2) {
                var r2, i2;
                a2[e11] = /* @__PURE__ */ n3.default(null === (i2 = a2[e11].schema) || void 0 === i2 ? void 0 : null === (r2 = i2.enum) || void 0 === r2 ? void 0 : r2[0]);
              } else a2[e11] = n3;
            }
          }
          return ev.create(e10.name, () => new e$({ type: "object", properties: a2, required: /* @__PURE__ */ t2(a2), additionalProperties: /* @__PURE__ */ eS.create() }));
        }
        return new e$({ type: "object", properties: e10, required: /* @__PURE__ */ t2(e10), additionalProperties: /* @__PURE__ */ eS.create() });
      }
      return new e$({ type: "object", properties: {}, required: [], additionalProperties: /* @__PURE__ */ eS.create() });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z;
    if (r(e10)) {
      var i2;
      let r2 = new Set(Object.keys(e10));
      if (this.schema.properties) for (let t3 in this.schema.properties) r2.delete(t3), yield [t3, e10[t3], this.schema.properties[t3]];
      if ((null === (i2 = t2.node) || void 0 === i2 ? void 0 : i2.current.type) !== "intersection") for (let t3 of r2) yield [t3, e10[t3], this.schema.additionalProperties];
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
const _eN = class _eN extends ep {
  get type() {
    return "record";
  }
  *entries(e10) {
    if (r(e10)) for (let [t2, r2] of Object.entries(e10)) yield [el.RecordKey, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
  }
  validator(e10) {
    return r(e10);
  }
};
__publicField(_eN, "create", eo((e10, t2) => new _eN({ type: "object", propertyNames: e10, additionalProperties: t2 })));
let eN = _eN;
const _eM = class _eM extends ep {
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], Array.isArray(e10)) for (let [t2, r2] of e10.entries()) yield [t2, r2, this.schema.items];
  }
  validator(e10) {
    return i(e10);
  }
  coercer(e10) {
    return i(e10) ? e10.slice() : e10;
  }
};
__publicField(_eM, "create", eo((e10) => new _eM({ type: "array", items: e10 })));
let eM = _eM;
const _eA = class _eA extends ep {
  get type() {
    return "tuple";
  }
  *entries(e10, t2) {
    if (i(e10)) {
      let t3 = /* @__PURE__ */ Math.max(this.schema.items.length, e10.length);
      for (let i2 = 0; i2 < t3; i2++) {
        var r2;
        yield [i2, e10[i2], null !== (r2 = this.schema.items[i2]) && void 0 !== r2 ? r2 : eS.create()];
      }
    }
  }
  validator(e10) {
    return i(e10) && e10.length === this.schema.items.length;
  }
  coercer(e10) {
    return i(e10) ? e10.slice() : e10;
  }
};
__publicField(_eA, "create", eo((e10) => new _eA({ type: "array", items: e10 })));
let eA = _eA;
const _eE = class _eE extends ep {
  get type() {
    return "intersection";
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z;
    for (let r2 of this.schema.allOf) yield* r2.entries(e10, t2);
  }
  *validator(e10, t2) {
    for (let r2 of this.schema.allOf) yield* ei(/* @__PURE__ */ r2.validator(e10, t2), t2, this, e10);
  }
  *refiner(e10, t2) {
    for (let r2 of this.schema.allOf) yield* ei(/* @__PURE__ */ r2.refiner(e10, t2), t2, this, e10);
  }
};
__publicField(_eE, "create", eo(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _eE({ allOf: t2 });
}));
let eE = _eE;
const _ez = class _ez extends ep {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(e10) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) r2[i2 - 1] = arguments[i2];
    return eo(() => {
      let t3 = [];
      if (1 == r2.length && r2[0].constructor == Object) for (let [i3, n2] of Object.entries(r2[0])) if (el.schemaProp(n2, "$ref")) t3.push(n2);
      else {
        let r3 = { [e10]: /* @__PURE__ */ ej.literal(i3) };
        for (let [e11, t4, i4] of n2.entries({}, Z)) r3[String(e11)] = i4;
        t3.push(/* @__PURE__ */ e$.create(r3));
      }
      else for (let e11 of r2) c(e11) && t3.push(/* @__PURE__ */ e$.create(e11));
      return new _ez({ oneOf: t3, discriminator: { propertyName: e10 } });
    })();
  }
  discriminatorPropType(e10) {
    var t2;
    return null !== (t2 = this._discriminatorPropName) && void 0 !== t2 ? t2 : this._discriminatorPropName = /* @__PURE__ */ (() => {
      var t3, r2, i2, n2;
      let a2 = null !== (i2 = null === (t3 = this.schema.discriminator) || void 0 === t3 ? void 0 : t3.propertyName) && void 0 !== i2 ? i2 : "", o2 = [], s2 = [];
      for (let e11 of this.schema.oneOf) {
        let t4 = el.schemaProp(e11, "properties")[a2];
        if (!t4) continue;
        let r3 = t4.schema.enum;
        r3 && o2.push(...r3), s2.push(t4.meta);
      }
      return eh.of(/* @__PURE__ */ ej.create(o2), { [el.meta]: /* @__PURE__ */ el.create(s2[0], null !== (n2 = null === (r2 = e10.node) || void 0 === r2 ? void 0 : r2.current.meta) && void 0 !== n2 ? n2 : {}) });
    })();
  }
  discriminatorMapping(e10, t2, r2) {
    var i2, n2, a2;
    if (this._discriminatorMappingProps.get(t2)) return this._discriminatorMappingProps.get(t2);
    if ((null !== (a2 = null === (n2 = /* @__PURE__ */ this.discriminatorPropType(r2)) || void 0 === n2 ? void 0 : null === (i2 = n2.schema) || void 0 === i2 ? void 0 : i2.enum) && void 0 !== a2 ? a2 : []).includes(t2)) {
      let r3 = /* @__PURE__ */ this.schema.oneOf.find((r4) => {
        let i3 = el.schemaProp(r4, "properties")[e10];
        if (i3) {
          let [e11, r5] = i3.validate(t2);
          return !e11;
        }
        return false;
      });
      if (r3) {
        if (!this._discriminatorMappingProps.has(t2)) {
          let i3 = {};
          for (let [t3, n3] of Object.entries(/* @__PURE__ */ el.schemaProp(r3, "properties"))) t3 !== e10 && (i3[t3] = n3);
          this._discriminatorMappingProps.set(t2, i3);
        }
        return this._discriminatorMappingProps.get(t2);
      }
    }
    return {};
  }
  *entries(e10) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z;
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, i2 = null == e10 ? void 0 : e10[r2], n2 = /* @__PURE__ */ e$.create({ [r2]: /* @__PURE__ */ this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, i2, t2) });
      yield* n2.entries(e10, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e10) {
    for (let t2 of this.schema.oneOf) {
      let [r2, i2] = en(e10, t2, { coerce: true });
      if (!r2) return i2;
    }
    return e10;
  }
  validator(e10, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, i2 = null == e10 ? void 0 : e10[r3];
      return e$.create({ [r3]: /* @__PURE__ */ this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, i2, t2) }).validator(e10, t2);
    }
    let r2 = [];
    for (let i2 of this.schema.oneOf) {
      let [...n2] = ea(e10, i2, t2), [a2] = n2;
      if (a2 && !a2[0]) return [];
      for (let [e11] of n2) e11 && r2.push(e11);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e11) => e11.type).join(" | ")}\`, but received: ${e10}`, ...r2];
  }
};
__publicField(_ez, "create", eo(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _ez({ oneOf: t2 });
}));
let ez = _ez;
let eF = ev.create, ek = eg.create, eI = eS.create, eR = eb.create, eC = e_.create, eD = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => !!e11 && e11.length >= t2 || (null != r2 ? r2 : `Expected string value length great than or equal ${t2}, but received "${e11}"`), { minLength: t2 })), eK = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => !!e11 && e11.length <= t2 || (null != r2 ? r2 : `Expected string value length less than or equal ${t2}, but received "${e11}"`), { maxLength: t2 })), eq = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (i2) => !!t2.test(i2) || (null != r2 ? r2 : `Expected a ${e10.type} matching \`/${t2.source}/\` but received "${i2}"`), { pattern: t2.source })), eT = ew.create, eL = eO.create, eW = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => e11 >= t2 || (null != r2 ? r2 : `Expected value great than or equal ${t2}, but received "${e11}"`), { minimum: t2 })), eV = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => e11 > t2 || (null != r2 ? r2 : `Expected value great than ${t2}, but received "${e11}"`), { exclusiveMinimum: t2 })), eJ = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => e11 <= t2 || (null != r2 ? r2 : `Expected value less than or equal ${t2}, but received "${e11}"`), { maximum: t2 })), eU = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => e11 < t2 || (null != r2 ? r2 : `Expected value less than or equal ${t2}, but received "${e11}"`), { exclusiveMaximum: t2 })), eB = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => e11 % t2 == 0 || (null != r2 ? r2 : `Expected value multiple of ${t2}, but received "${e11}"`), { multipleOf: t2 })), eX = eP.create, eG = ex.create, eH = ej.create, eQ = ej.nativeEnum, eY = ej.literal, eZ = e$.create, e0 = eN.create, e1 = eA.create, e2 = eM.create, e3 = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => !!i(e11) && e11.length >= t2 || (null != r2 ? r2 : `Expected array value at least ${t2}, but received "${null == e11 ? void 0 : e11.length}"`), { minItems: t2 })), e4 = /* @__PURE__ */ es((e10, t2, r2) => eh.refine(e10, (e11) => !!i(e11) && e11.length <= t2 || (null != r2 ? r2 : `Expected array value  ${t2}, but received "${null == e11 ? void 0 : e11.length}"`), { maxItems: t2 })), e6 = eE.create, e7 = ez.create, e8 = ez.discriminatorMapping, e9 = ep.define, e5 = eh.refine, te = /* @__PURE__ */ es((e10, t2) => em.create(e10, t2)), tt = /* @__PURE__ */ es((e10) => ey.create(e10)), tr = /* @__PURE__ */ es((e10, t2) => eh.of(e10, { [el.meta]: t2 })), ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, annotate: tr, any: ek, array: e2, binary: eG, boolean: eX, custom: e9, defaults: te, discriminatorMapping: e8, enums: eH, exclusiveMaximum: eU, exclusiveMinimum: eV, integer: eL, intersection: e6, literal: eY, maxItems: e4, maxLength: eK, maximum: eJ, minItems: e3, minLength: eD, minimum: eW, multipleOf: eB, nativeEnum: eQ, never: eI, nil: eR, number: eT, object: eZ, optional: tt, pattern: eq, record: e0, ref: eF, refine: e5, string: eC, tuple: e1, union: e7 }, Symbol.toStringTag, { value: "Module" })), tn = (e10) => {
  var t2, r2;
  return null !== (r2 = null === (t2 = /* @__PURE__ */ e10.split("/")) || void 0 === t2 ? void 0 : t2.findLast(() => true)) && void 0 !== r2 ? r2 : "";
};
class ta {
  constructor(e10) {
    __publicField(this, "def", /* @__PURE__ */ new Map());
    __publicField(this, "ref", (e10) => {
      let t2 = /* @__PURE__ */ this.def.get(e10);
      if (t2) return t2;
      throw Error(`undefined type ${e10}`);
    });
    this.resolveRef = e10;
  }
  static decode(e10, t2) {
    return false === e10 ? eI() : new ta(t2).decode(e10);
  }
  decode(e10) {
    let t2 = /* @__PURE__ */ structuredClone(e10), r2 = /* @__PURE__ */ this._decode(t2), i2 = false;
    if ((null == t2 ? void 0 : t2.title) && (r2 = /* @__PURE__ */ r2.use(/* @__PURE__ */ tr({ title: null == t2 ? void 0 : t2.title })), i2 = true), null == t2 ? void 0 : t2.description) {
      if (i2) r2 = /* @__PURE__ */ r2.use(/* @__PURE__ */ tr({ description: null == t2 ? void 0 : t2.description }));
      else {
        let [e11, ...i3] = null == t2 ? void 0 : t2.description.split(/[.\n]/);
        r2 = /* @__PURE__ */ r2.use(/* @__PURE__ */ tr({ title: e11, description: i3 ? i3.join("\n").trim() : void 0 }));
      }
    }
    if (t2) {
      for (let e11 of tp) if (e11 in t2) {
        let i3 = ti[e11];
        r2 = /* @__PURE__ */ r2.use(/* @__PURE__ */ i3(t2[e11]));
      }
    }
    return r2;
  }
  _decode(t2) {
    var r2, n2, a2, o2;
    let s2 = /* @__PURE__ */ ty(t2);
    if (s2.$ref) {
      let [e10, t3] = this.resolveRef(s2.$ref);
      return this.def.has(t3) || (this.def.set(t3, /* @__PURE__ */ ek()), this.def.set(t3, /* @__PURE__ */ this.decode(e10))), eF(t3, () => this.ref(t3));
    }
    if (s2.enum) {
      let e10 = /* @__PURE__ */ eH(s2.enum);
      return s2["x-enum-labels"] ? e10.use(/* @__PURE__ */ tr({ enumLabels: s2["x-enum-labels"] })) : e10;
    }
    if (s2.discriminator) {
      let t3 = s2.discriminator.propertyName;
      if (t3) {
        let i2 = {};
        if (s2.discriminator.mapping) {
          let e10 = s2.discriminator.mapping;
          if (e10) for (let [t4, r3] of Object.entries(e10)) i2[t4] = /* @__PURE__ */ this.decode(r3);
        }
        if (s2.oneOf) for (let n3 of s2.oneOf) {
          let a3 = /* @__PURE__ */ this.decode(n3), o3 = el.schemaProp(a3, "properties")[t3];
          if (o3) {
            let t4 = null === (r2 = /* @__PURE__ */ el.schemaProp(o3, "enum")) || void 0 === r2 ? void 0 : r2[0];
            e(t4) || (i2[`${t4}`] = a3);
          }
        }
        return e8(t3, i2);
      }
    }
    if (s2.oneOf) {
      let e10 = /* @__PURE__ */ s2.oneOf.map((e11) => this.decode(e11));
      return 1 === e10.length ? e10[0] : e7(...e10);
    }
    if (s2.allOf) {
      let e10 = /* @__PURE__ */ s2.allOf.map((e11) => this.decode(e11));
      return 1 === e10.length ? e10[0] : e6(...e10);
    }
    if (to(s2)) {
      if (s2.properties) {
        let e11 = null !== (n2 = s2.required) && void 0 !== n2 ? n2 : [], t3 = {};
        for (let [r3, i2] of Object.entries(s2.properties)) {
          let n3 = /* @__PURE__ */ this.decode(i2);
          e11.includes(r3) || (n3 = /* @__PURE__ */ n3.optional()), t3[r3] = n3;
        }
        return eZ(t3);
      }
      let e10 = null !== (a2 = s2.additionalProperties) && void 0 !== a2 ? a2 : {};
      return e10 ? e0(/* @__PURE__ */ this.decode(null !== (o2 = s2.propertyNames) && void 0 !== o2 ? o2 : { type: "string" }), /* @__PURE__ */ this.decode(e10)) : eZ();
    }
    return tl(s2) ? i(s2.items) ? e1(/* @__PURE__ */ s2.items.map((e10) => this.decode(e10))) : e2(/* @__PURE__ */ this.decode(s2.items)) : tu(s2) ? "binary" === s2.format ? eG() : eC() : tc(s2) ? "integer" === s2.type ? eL() : eT() : td(s2) ? eX() : ts(s2) ? eR() : ek();
  }
}
let to = (e10) => "object" === e10.type, ts = (e10) => "null" === e10.type, tl = (e10) => "array" === e10.type, tc = (e10) => "number" === e10.type || "integer" === e10.type, tu = (e10) => "string" === e10.type, td = (e10) => "boolean" === e10.type, tf = { object: ["properties", "additionalProperties", "unevaluatedProperties", "patternProperties", "propertyNames", "dependentSchemas", "maxProperties", "minProperties"], array: ["contains", "items", "additionalItems", "unevaluatedItems", "maxItems", "minItems", "uniqueItems", "maxContains", "minContains"], string: ["pattern", "contentMediaType", "contentEncoding", "contentSchema", "maxLength", "minLength"], number: ["maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"] }, tp = ["maxProperties", "minProperties", "maxItems", "minItems", "uniqueItems", "pattern", "maxLength", "minLength", "maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"], th = (e10, t2) => t2.some((t3) => Object.hasOwn(e10, t3)), tm = (e10) => !th(e10, ["type", "$ref", "$id", "oneOf", "anyOf", "allOf"]), ty = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (o(e10)) return {};
  if (!e10.type) {
    for (let t3 in tf) if (th(e10, tf[t3])) {
      e10.type = t3;
      break;
    }
  }
  e10.const && (e10.enum = [e10.const]);
  let t2 = (t3) => {
    if (e10[t3]) {
      var r2;
      e10[t3] = /* @__PURE__ */ e10[t3].filter((r3) => {
        let i2 = /* @__PURE__ */ ty(r3);
        return !tm(i2) || ("allOf" === t3 && Object.assign(e10, i2), false);
      }), (null === (r2 = e10[t3]) || void 0 === r2 ? void 0 : r2.length) === 0 && (e10[t3] = void 0);
    }
  };
  return t2("allOf"), t2("anyOf"), t2("oneOf"), e10;
};
export {
  Z as E,
  ef as J,
  el as S,
  tr as a,
  ek as b,
  e9 as c,
  es as d,
  ta as e,
  eH as f,
  eX as g,
  et as i,
  eZ as o,
  Q as p,
  tn as r,
  eC as s
};
