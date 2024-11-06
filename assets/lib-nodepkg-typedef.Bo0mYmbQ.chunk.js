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
    let n2 = /* @__PURE__ */ B(t3, r3);
    return n2 ? "value" in n2 ? n2.value : null === (i3 = n2.get) || void 0 === i3 ? void 0 : i3.call(e11.draft_) : void 0;
  }(e10, r2, t2);
  let i2 = r2[t2];
  return e10.finalized_ || !g(i2) ? i2 : i2 === U(e10.base_, t2) ? (G(e10), e10.copy_[t2] = /* @__PURE__ */ H(i2, e10)) : i2;
}, has: (e10, t2) => t2 in $(e10), ownKeys: (e10) => Reflect.ownKeys(/* @__PURE__ */ $(e10)), set(e10, t2, r2) {
  let i2 = /* @__PURE__ */ B(/* @__PURE__ */ $(e10), t2);
  if (null == i2 ? void 0 : i2.set) return i2.set.call(e10.draft_, r2), true;
  if (!e10.modified_) {
    let i3 = /* @__PURE__ */ U(/* @__PURE__ */ $(e10), t2), n2 = null == i3 ? void 0 : i3[h];
    if (n2 && n2.base_ === r2) return e10.copy_[t2] = r2, e10.assigned_[t2] = false, true;
    if ((r2 === i3 ? 0 !== r2 || 1 / r2 == 1 / i3 : r2 != r2 && i3 != i3) && (void 0 !== r2 || P(e10.base_, t2))) return true;
    G(e10), X(e10);
  }
  return !!(e10.copy_[t2] === r2 && (void 0 !== r2 || t2 in e10.copy_) || Number.isNaN(r2) && Number.isNaN(e10.copy_[t2])) || (e10.copy_[t2] = r2, e10.assigned_[t2] = true, true);
}, deleteProperty: (e10, t2) => (void 0 !== U(e10.base_, t2) || t2 in e10.base_ ? (e10.assigned_[t2] = false, G(e10), X(e10)) : delete e10.assigned_[t2], e10.copy_ && delete e10.copy_[t2], true), getOwnPropertyDescriptor(e10, t2) {
  let r2 = /* @__PURE__ */ $(e10), i2 = /* @__PURE__ */ Reflect.getOwnPropertyDescriptor(r2, t2);
  return i2 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t2, enumerable: i2.enumerable, value: r2[t2] } : i2;
}, defineProperty() {
  m(11);
}, getPrototypeOf: (e10) => y(e10.base_), setPrototypeOf() {
  m(12);
} }, J = {};
function U(e10, t2) {
  let r2 = e10[h];
  return (r2 ? $(r2) : e10)[t2];
}
function B(e10, t2) {
  if (!(t2 in e10)) return;
  let r2 = /* @__PURE__ */ y(e10);
  for (; r2; ) {
    let e11 = /* @__PURE__ */ Object.getOwnPropertyDescriptor(r2, t2);
    if (e11) return e11;
    r2 = /* @__PURE__ */ y(r2);
  }
}
function X(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && X(e10.parent_));
}
function G(e10) {
  e10.copy_ || (e10.copy_ = /* @__PURE__ */ N(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function H(e10, t2) {
  let r2 = j(e10) ? F("MapSet").proxyMap_(e10, t2) : S(e10) ? F("MapSet").proxySet_(e10, t2) : function(e11, t3) {
    let r3 = /* @__PURE__ */ Array.isArray(e11), i2 = { type_: r3 ? 1 : 0, scope_: t3 ? t3.scope_ : d, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, n2 = i2, a2 = W;
    r3 && (n2 = [i2], a2 = J);
    let { revoke: o2, proxy: s2 } = Proxy.revocable(n2, a2);
    return i2.draft_ = s2, i2.revoke_ = o2, s2;
  }(e10, t2);
  return (t2 ? t2.scope_ : d).drafts_.push(r2), r2;
}
w(W, (e10, t2) => {
  J[e10] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), J.deleteProperty = function(e10, t2) {
  return J.set.call(this, e10, t2, void 0);
}, J.set = function(e10, t2, r2) {
  return W.set.call(this, e10[0], t2, r2, e10[0]);
};
var Q = new class {
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
        let n2 = /* @__PURE__ */ C(this), a2 = /* @__PURE__ */ H(e11, void 0), o2 = true;
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
    let r2 = /* @__PURE__ */ C(this), i2 = /* @__PURE__ */ H(e10, void 0);
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
}(), V = Q.produce;
Q.produceWithPatches.bind(Q), Q.setAutoFreeze.bind(Q), Q.setUseStrictShallowCopy.bind(Q), Q.applyPatches.bind(Q), Q.createDraft.bind(Q), Q.finishDraft.bind(Q);
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
        c2.set(t2, /* @__PURE__ */ V(null !== (l2 = null !== (s2 = /* @__PURE__ */ c2.get(t2)) && void 0 !== s2 ? s2 : i2) && void 0 !== l2 ? l2 : {}, r2));
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
  static create(e10, t2) {
    var r2;
    let i2 = null != t2 ? t2 : null === (r2 = e10[_el.underlying]) || void 0 === r2 ? void 0 : r2.schema;
    return new Proxy({}, { ownKeys(t3) {
      if (i2) {
        let t4 = /* @__PURE__ */ new Map();
        for (let r3 of Object.getOwnPropertyNames(e10)) t4.set(r3, r3);
        for (let e11 of Object.getOwnPropertyNames(i2)) t4.set(e11, e11);
        return [.../* @__PURE__ */ t4.keys()];
      }
      return Object.getOwnPropertyNames(e10);
    }, get(t3, r3) {
      var n2, a2;
      return "metadata" == r3 ? _el.create(null !== (n2 = e10[_el.meta]) && void 0 !== n2 ? n2 : {}, i2 ? i2[_el.meta] : void 0) : null !== (a2 = e10[r3]) && void 0 !== a2 ? a2 : i2 ? i2[r3] : void 0;
    } });
  }
  static schemaProp(e10, t2) {
    var r2;
    return null !== (r2 = e10.schema[t2]) && void 0 !== r2 ? r2 : e10.schema && e10.schema[_el.unwrap] ? _el.schemaProp(/* @__PURE__ */ e10.schema[_el.unwrap](), t2) : void 0;
  }
  static metaProp(e10, t2) {
    var r2;
    return null !== (r2 = e10.meta[t2]) && void 0 !== r2 ? r2 : e10.schema && e10.schema[_el.unwrap] ? _el.metaProp(/* @__PURE__ */ e10.schema[_el.unwrap](), t2) : void 0;
  }
};
__publicField(_el, "RecordKey", Symbol("RecordKey"));
__publicField(_el, "meta", Symbol("meta"));
__publicField(_el, "optional", Symbol("optional"));
__publicField(_el, "underlying", Symbol("underlying"));
__publicField(_el, "unwrap", Symbol("unwrap"));
__publicField(_el, "schemaAll", function t2(r2) {
  if (r2) {
    if (!e(r2.schema)) return t2(r2.schema);
    if (i(r2)) return function(e10) {
      let r3 = [];
      for (let i2 of e10) r3.push(/* @__PURE__ */ t2(i2));
      return r3;
    }(r2);
    if (r2.constructor === Object) return function(e10) {
      let r3 = {};
      for (let i2 of Object.getOwnPropertyNames(e10)) r3[i2] = /* @__PURE__ */ t2(e10[i2]);
      return r3;
    }(r2);
  }
  return r2;
});
let el = _el;
class ec {
  static parse(e10) {
    if ("" === e10) return [];
    if ("/" === e10) return [""];
    if ("/" !== e10.charAt(0)) throw Error("Invalid JSON pointer: " + e10);
    let t2 = /* @__PURE__ */ e10.substring(1).split(/\//);
    return t2.map((e11, r2) => ec.unescape(e11, r2 === t2.length - 1));
  }
  static create() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return 0 === e10.length ? "" : "/" + e10.map(ec.escape).join("/");
  }
  static unescape(e10, t2) {
    return "" == e10 && t2 ? el.RecordKey : e10.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e10) {
    return e10 == el.RecordKey ? "" : e10.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e10, t2) {
    let r2 = Array.isArray(t2) ? t2 : ec.parse(t2);
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
const _eu = class _eu {
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
    var e10, t2;
    return null !== (t2 = null === (e10 = this.schema) || void 0 === e10 ? void 0 : e10.metadata) && void 0 !== t2 ? t2 : {};
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
    return ep.create(this);
  }
  default(e10) {
    return ef.create(this, e10);
  }
};
__publicField(_eu, "define", eo(function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _eu {
    validator(t2, r2) {
      return e10(t2, r2);
    }
  }(null);
}));
__publicField(_eu, "fromTypeObject", (e10, t2) => {
  var r2, i2, n2;
  let a2 = null !== (i2 = null !== (r2 = e10.type) && void 0 !== r2 ? r2 : t2) && void 0 !== i2 ? i2 : new _eu({});
  return e10.modifies ? a2.use(...null !== (n2 = e10.modifies) && void 0 !== n2 ? n2 : []) : a2;
});
let eu = _eu;
class ed extends eu {
  static of(e10, t2) {
    return new ed({ ...t2, [el.underlying]: e10 });
  }
  static refine(e10, t2, r2) {
    return new class extends ed {
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
const _ef = class _ef extends ed {
  coercer(e10, t2) {
    return void 0 === e10 ? this.schema.default : super.unwrap.coercer(e10, t2);
  }
};
__publicField(_ef, "create", eo((e10, t2) => new _ef({ default: t2, [el.underlying]: e10 })));
let ef = _ef;
const _ep = class _ep extends ed {
  refiner(e10, t2) {
    return void 0 === e10 || super.unwrap.refiner(e10, t2);
  }
  validator(e10, t2) {
    return void 0 === e10 || super.unwrap.validator(e10, t2);
  }
};
__publicField(_ep, "create", eo((e10) => new _ep({ [el.underlying]: e10, [el.optional]: e10 })));
let ep = _ep;
const _eh = class _eh extends ed {
};
__publicField(_eh, "create", eo((e10, t2) => new _eh({ $ref: e10, [el.unwrap]: t2 })));
let eh = _eh;
const _em = class _em extends eu {
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
__publicField(_em, "create", eo(() => new _em()));
let em = _em;
const _ey = class _ey extends eu {
  get type() {
    return "null";
  }
  validator(e10, r2) {
    return t(e10);
  }
};
__publicField(_ey, "create", eo(() => new _ey({ type: "null" })));
let ey = _ey;
const _ev = class _ev extends eu {
  get type() {
    return this.schema.type;
  }
  validator(e10, t2) {
    return s(e10);
  }
};
__publicField(_ev, "create", eo(() => new _ev({ type: "string" })));
let ev = _ev;
const _eg = class _eg extends eu {
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
__publicField(_eg, "create", eo(() => new _eg({ type: "number" })));
let eg = _eg;
const _eb = class _eb extends eu {
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
__publicField(_eb, "create", eo(() => new _eb({ type: "integer" })));
let eb = _eb;
const _e_ = class _e_ extends eu {
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
__publicField(_e_, "create", eo(() => new _e_({ type: "boolean" })));
let e_ = _e_;
const _ew = class _ew extends eu {
  get type() {
    return "binary";
  }
  validator(e10, t2) {
    return e10 instanceof File || e10 instanceof Blob;
  }
};
__publicField(_ew, "create", eo(() => new _ew({ type: "string", format: "binary" })));
let ew = _ew;
const _eO = class _eO extends eu {
  static createEnum(e10) {
    return new _eO({ enum: e10 });
  }
  get type() {
    return "enums";
  }
  validator(e10, t2) {
    return this.schema.enum.includes(e10);
  }
};
__publicField(_eO, "create", eo(_eO.createEnum));
__publicField(_eO, "literal", eo((e10) => new _eO({ enum: [e10] })));
__publicField(_eO, "nativeEnum", eo((e10) => new _eO({ enum: /* @__PURE__ */ Object.values(e10) })));
let eO = _eO;
const _eP = class _eP extends eu {
  get type() {
    return "never";
  }
  validator(e10, t2) {
    return false;
  }
};
__publicField(_eP, "create", eo(() => new _eP(false)));
let eP = _eP;
class ex extends eu {
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
          for (let [e11, t3] of Object.entries(n2)) a2[e11] = /* @__PURE__ */ eO.literal(t3);
          for (let e11 of Y.getOwnPropertyNames(n2)) {
            let t3 = /* @__PURE__ */ Y.get(n2, e11);
            if (t3) {
              let n3 = /* @__PURE__ */ eu.fromTypeObject(t3, a2[e11]);
              if (e11 in a2) {
                var r2, i2;
                a2[e11] = /* @__PURE__ */ n3.default(null === (i2 = a2[e11].schema) || void 0 === i2 ? void 0 : null === (r2 = i2.enum) || void 0 === r2 ? void 0 : r2[0]);
              } else a2[e11] = n3;
            }
          }
          return eh.create(e10.name, () => new ex({ type: "object", properties: a2, required: /* @__PURE__ */ t2(a2), additionalProperties: /* @__PURE__ */ eP.create() }));
        }
        return new ex({ type: "object", properties: e10, required: /* @__PURE__ */ t2(e10), additionalProperties: /* @__PURE__ */ eP.create() });
      }
      return new ex({ type: "object", properties: e10, required: [], additionalProperties: /* @__PURE__ */ eP.create() });
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
const _ej = class _ej extends eu {
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
__publicField(_ej, "create", eo((e10, t2) => new _ej({ type: "object", propertyNames: e10, additionalProperties: t2 })));
let ej = _ej;
const _eS = class _eS extends eu {
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
__publicField(_eS, "create", eo((e10) => new _eS({ type: "array", items: e10 })));
let eS = _eS;
const _e$ = class _e$ extends eu {
  get type() {
    return "tuple";
  }
  *entries(e10, t2) {
    if (i(e10)) {
      let t3 = /* @__PURE__ */ Math.max(this.schema.items.length, e10.length);
      for (let i2 = 0; i2 < t3; i2++) {
        var r2;
        yield [i2, e10[i2], null !== (r2 = this.schema.items[i2]) && void 0 !== r2 ? r2 : eP.create()];
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
__publicField(_e$, "create", eo((e10) => new _e$({ type: "array", items: e10 })));
let e$ = _e$;
const _eN = class _eN extends eu {
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
__publicField(_eN, "create", eo(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _eN({ allOf: t2 });
}));
let eN = _eN;
const _eM = class _eM extends eu {
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
        let r3 = { [e10]: /* @__PURE__ */ eO.literal(i3) };
        for (let [e11, t4, i4] of n2.entries({}, Z)) r3[String(e11)] = i4;
        t3.push(/* @__PURE__ */ ex.create(r3));
      }
      else for (let e11 of r2) c(e11) && t3.push(/* @__PURE__ */ ex.create(e11));
      return new _eM({ oneOf: t3, discriminator: { propertyName: e10 } });
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
      return ed.of(/* @__PURE__ */ eO.create(o2), { [el.meta]: /* @__PURE__ */ el.create(s2[0], null !== (n2 = null === (r2 = e10.node) || void 0 === r2 ? void 0 : r2.current.meta) && void 0 !== n2 ? n2 : {}) });
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
      let r2 = this.schema.discriminator.propertyName, i2 = null == e10 ? void 0 : e10[r2], n2 = /* @__PURE__ */ ex.create({ [r2]: /* @__PURE__ */ this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, i2, t2) });
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
      return ex.create({ [r3]: /* @__PURE__ */ this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, i2, t2) }).validator(e10, t2);
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
__publicField(_eM, "create", eo(function() {
  for (var e10 = arguments.length, t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = arguments[r2];
  return new _eM({ oneOf: t2 });
}));
let eM = _eM;
let eA = eh.create, eE = em.create, ez = eP.create, eF = ey.create, ek = ev.create, eI = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => !!e11 && e11.length >= t2 || (null != r2 ? r2 : `Expected string value length great than or equal ${t2}, but received "${e11}"`), { minLength: t2 })), eR = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => !!e11 && e11.length <= t2 || (null != r2 ? r2 : `Expected string value length less than or equal ${t2}, but received "${e11}"`), { maxLength: t2 })), eC = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (i2) => !!t2.test(i2) || (null != r2 ? r2 : `Expected a ${e10.type} matching \`/${t2.source}/\` but received "${i2}"`), { pattern: t2.source })), eD = eg.create, eK = eb.create, eq = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => e11 >= t2 || (null != r2 ? r2 : `Expected value great than or equal ${t2}, but received "${e11}"`), { minimum: t2 })), eT = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => e11 > t2 || (null != r2 ? r2 : `Expected value great than ${t2}, but received "${e11}"`), { exclusiveMinimum: t2 })), eL = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => e11 <= t2 || (null != r2 ? r2 : `Expected value less than or equal ${t2}, but received "${e11}"`), { maximum: t2 })), eW = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => e11 < t2 || (null != r2 ? r2 : `Expected value less than or equal ${t2}, but received "${e11}"`), { exclusiveMaximum: t2 })), eJ = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => e11 % t2 == 0 || (null != r2 ? r2 : `Expected value multiple of ${t2}, but received "${e11}"`), { multipleOf: t2 })), eU = e_.create, eB = ew.create, eX = eO.create, eG = eO.nativeEnum, eH = eO.literal, eQ = ex.create, eV = ej.create, eY = e$.create, eZ = eS.create, e0 = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => !!i(e11) && e11.length >= t2 || (null != r2 ? r2 : `Expected array value at least ${t2}, but received "${null == e11 ? void 0 : e11.length}"`), { minItems: t2 })), e1 = /* @__PURE__ */ es((e10, t2, r2) => ed.refine(e10, (e11) => !!i(e11) && e11.length <= t2 || (null != r2 ? r2 : `Expected array value  ${t2}, but received "${null == e11 ? void 0 : e11.length}"`), { maxItems: t2 })), e2 = eN.create, e3 = eM.create, e4 = eM.discriminatorMapping, e6 = eu.define, e7 = ed.refine, e8 = /* @__PURE__ */ es((e10, t2) => ef.create(e10, t2)), e9 = /* @__PURE__ */ es((e10) => ep.create(e10)), e5 = /* @__PURE__ */ es((e10, t2) => ed.of(e10, { [el.meta]: t2 })), te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, annotate: e5, any: eE, array: eZ, binary: eB, boolean: eU, custom: e6, defaults: e8, discriminatorMapping: e4, enums: eX, exclusiveMaximum: eW, exclusiveMinimum: eT, integer: eK, intersection: e2, literal: eH, maxItems: e1, maxLength: eR, maximum: eL, minItems: e0, minLength: eI, minimum: eq, multipleOf: eJ, nativeEnum: eG, never: ez, nil: eF, number: eD, object: eQ, optional: e9, pattern: eC, record: eV, ref: eA, refine: e7, string: ek, tuple: eY, union: e3 }, Symbol.toStringTag, { value: "Module" })), tt = (e10) => {
  var t2, r2;
  return null !== (r2 = null === (t2 = /* @__PURE__ */ e10.split("/")) || void 0 === t2 ? void 0 : t2.findLast(() => true)) && void 0 !== r2 ? r2 : "";
};
class tr {
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
    return false === e10 ? ez() : new tr(t2).decode(e10);
  }
  decode(e10) {
    let t2 = /* @__PURE__ */ structuredClone(e10), r2 = /* @__PURE__ */ this._decode(t2), i2 = false;
    if ((null == t2 ? void 0 : t2.title) && (r2 = /* @__PURE__ */ r2.use(/* @__PURE__ */ e5({ title: null == t2 ? void 0 : t2.title })), i2 = true), null == t2 ? void 0 : t2.description) {
      if (i2) r2 = /* @__PURE__ */ r2.use(/* @__PURE__ */ e5({ description: null == t2 ? void 0 : t2.description }));
      else {
        let [e11, ...i3] = null == t2 ? void 0 : t2.description.split(/[.\n]/);
        r2 = /* @__PURE__ */ r2.use(/* @__PURE__ */ e5({ title: e11, description: i3 ? i3.join("\n").trim() : void 0 }));
      }
    }
    if (t2) {
      for (let e11 of tu) if (e11 in t2) {
        let i3 = te[e11];
        r2 = /* @__PURE__ */ r2.use(/* @__PURE__ */ i3(t2[e11]));
      }
    }
    return r2;
  }
  _decode(t2) {
    var r2, n2, a2, o2;
    let s2 = /* @__PURE__ */ tp(t2);
    if (s2.$ref) {
      let [e10, t3] = this.resolveRef(s2.$ref);
      return this.def.has(t3) || (this.def.set(t3, /* @__PURE__ */ eE()), this.def.set(t3, /* @__PURE__ */ this.decode(e10))), eA(t3, () => this.ref(t3));
    }
    if (s2.enum) {
      let e10 = /* @__PURE__ */ eX(s2.enum);
      return s2["x-enum-labels"] ? e10.use(/* @__PURE__ */ e5({ enumLabels: s2["x-enum-labels"] })) : e10;
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
        return e4(t3, i2);
      }
    }
    if (s2.oneOf) {
      let e10 = /* @__PURE__ */ s2.oneOf.map((e11) => this.decode(e11));
      return 1 === e10.length ? e10[0] : e3(...e10);
    }
    if (s2.allOf) {
      let e10 = /* @__PURE__ */ s2.allOf.map((e11) => this.decode(e11));
      return 1 === e10.length ? e10[0] : e2(...e10);
    }
    if (ti(s2)) {
      if (s2.properties) {
        let e11 = null !== (n2 = s2.required) && void 0 !== n2 ? n2 : [], t3 = {};
        for (let [r3, i2] of Object.entries(s2.properties)) {
          let n3 = /* @__PURE__ */ this.decode(i2);
          e11.includes(r3) || (n3 = /* @__PURE__ */ n3.optional()), t3[r3] = n3;
        }
        return eQ(t3);
      }
      let e10 = null !== (a2 = s2.additionalProperties) && void 0 !== a2 ? a2 : {};
      return e10 ? eV(/* @__PURE__ */ this.decode(null !== (o2 = s2.propertyNames) && void 0 !== o2 ? o2 : { type: "string" }), /* @__PURE__ */ this.decode(e10)) : eQ();
    }
    return ta(s2) ? i(s2.items) ? eY(/* @__PURE__ */ s2.items.map((e10) => this.decode(e10))) : eZ(/* @__PURE__ */ this.decode(s2.items)) : ts(s2) ? "binary" === s2.format ? eB() : ek() : to(s2) ? "integer" === s2.type ? eK() : eD() : tl(s2) ? eU() : tn(s2) ? eF() : eE();
  }
}
let ti = (e10) => "object" === e10.type, tn = (e10) => "null" === e10.type, ta = (e10) => "array" === e10.type, to = (e10) => "number" === e10.type || "integer" === e10.type, ts = (e10) => "string" === e10.type, tl = (e10) => "boolean" === e10.type, tc = { object: ["properties", "additionalProperties", "unevaluatedProperties", "patternProperties", "propertyNames", "dependentSchemas", "maxProperties", "minProperties"], array: ["contains", "items", "additionalItems", "unevaluatedItems", "maxItems", "minItems", "uniqueItems", "maxContains", "minContains"], string: ["pattern", "contentMediaType", "contentEncoding", "contentSchema", "maxLength", "minLength"], number: ["maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"] }, tu = ["maxProperties", "minProperties", "maxItems", "minItems", "uniqueItems", "pattern", "maxLength", "minLength", "maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"], td = (e10, t2) => t2.some((t3) => Object.hasOwn(e10, t3)), tf = (e10) => !td(e10, ["type", "$ref", "$id", "oneOf", "anyOf", "allOf"]), tp = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (o(e10)) return {};
  if (!e10.type) {
    for (let t3 in tc) if (td(e10, tc[t3])) {
      e10.type = t3;
      break;
    }
  }
  e10.const && (e10.enum = [e10.const]);
  let t2 = (t3) => {
    if (e10[t3]) {
      var r2;
      e10[t3] = /* @__PURE__ */ e10[t3].filter((r3) => {
        let i2 = /* @__PURE__ */ tp(r3);
        return !tf(i2) || ("allOf" === t3 && Object.assign(e10, i2), false);
      }), (null === (r2 = e10[t3]) || void 0 === r2 ? void 0 : r2.length) === 0 && (e10[t3] = void 0);
    }
  };
  return t2("allOf"), t2("anyOf"), t2("oneOf"), e10;
};
export {
  Z as E,
  ec as J,
  el as S,
  e5 as a,
  eE as b,
  e6 as c,
  es as d,
  tr as e,
  eX as f,
  eU as g,
  et as i,
  eQ as o,
  V as p,
  tt as r,
  ek as s
};
