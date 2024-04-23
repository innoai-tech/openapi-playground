let e, t;
import { i as s, h as i, a as r, t as n, d as l, b as a, c as h, e as u, f as c, m as o, g as f, N as _ } from "./vendor--vue-shared.DjBT002R.chunk.js";
class d {
  constructor(t2 = false) {
    this.detached = t2, this._active = true, this.effects = [], this.cleanups = [], this.parent = e, !t2 && e && (this.index = (e.scopes || (e.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t2) {
    if (this._active) {
      let s2 = e;
      try {
        return e = this, t2();
      } finally {
        e = s2;
      }
    }
  }
  on() {
    e = this;
  }
  off() {
    e = this.parent;
  }
  stop(e2) {
    if (this._active) {
      let t2, s2;
      for (t2 = 0, s2 = this.effects.length; t2 < s2; t2++)
        this.effects[t2].stop();
      for (t2 = 0, s2 = this.cleanups.length; t2 < s2; t2++)
        this.cleanups[t2]();
      if (this.scopes)
        for (t2 = 0, s2 = this.scopes.length; t2 < s2; t2++)
          this.scopes[t2].stop(true);
      if (!this.detached && this.parent && !e2) {
        let e3 = this.parent.scopes.pop();
        e3 && e3 !== this && (this.parent.scopes[this.index] = e3, e3.index = this.index);
      }
      this.parent = void 0, this._active = false;
    }
  }
}
function v() {
  return e;
}
class g {
  constructor(t2, s2, i2, r2) {
    this.fn = t2, this.trigger = s2, this.scheduler = i2, this.active = true, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, function(t3) {
      let s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
      s3 && s3.active && s3.effects.push(t3);
    }(this, r2);
  }
  get dirty() {
    if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
      this._dirtyLevel = 1, L();
      for (let e2 = 0; e2 < this._depsLength; e2++) {
        let t2 = this.deps[e2];
        if (t2.computed && (t2.computed.value, this._dirtyLevel >= 4))
          break;
      }
      1 === this._dirtyLevel && (this._dirtyLevel = 0), b();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e2) {
    this._dirtyLevel = e2 ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e2 = R, s2 = t;
    try {
      return R = true, t = this, this._runnings++, p(this), this.fn();
    } finally {
      y(this), this._runnings--, t = s2, R = e2;
    }
  }
  stop() {
    var e2;
    this.active && (p(this), y(this), null == (e2 = this.onStop) || e2.call(this), this.active = false);
  }
}
function p(e2) {
  e2._trackId++, e2._depsLength = 0;
}
function y(e2) {
  if (e2.deps.length > e2._depsLength) {
    for (let t2 = e2._depsLength; t2 < e2.deps.length; t2++)
      w(e2.deps[t2], e2);
    e2.deps.length = e2._depsLength;
  }
}
function w(e2, t2) {
  let s2 = e2.get(t2);
  void 0 !== s2 && t2._trackId !== s2 && (e2.delete(t2), 0 === e2.size && e2.cleanup());
}
let R = true, k = 0, S = [];
function L() {
  S.push(R), R = false;
}
function b() {
  let e2 = S.pop();
  R = void 0 === e2 || e2;
}
function m() {
  for (k--; !k && E.length; )
    E.shift()();
}
function x(e2, t2, s2) {
  if (t2.get(e2) !== e2._trackId) {
    t2.set(e2, e2._trackId);
    let s3 = e2.deps[e2._depsLength];
    s3 !== t2 ? (s3 && w(s3, e2), e2.deps[e2._depsLength++] = t2) : e2._depsLength++;
  }
}
let E = [];
function O(e2, t2, s2) {
  for (let s3 of (k++, e2.keys())) {
    let i2;
    s3._dirtyLevel < t2 && (null != i2 ? i2 : i2 = e2.get(s3) === s3._trackId) && (s3._shouldSchedule || (s3._shouldSchedule = 0 === s3._dirtyLevel), s3._dirtyLevel = t2), s3._shouldSchedule && (null != i2 ? i2 : i2 = e2.get(s3) === s3._trackId) && (s3.trigger(), (!s3._runnings || s3.allowRecurse) && 2 !== s3._dirtyLevel && (s3._shouldSchedule = false, s3.scheduler && E.push(s3.scheduler)));
  }
  m();
}
let P = (e2, t2) => {
  let s2 = /* @__PURE__ */ new Map();
  return s2.cleanup = e2, s2.computed = t2, s2;
}, M = /* @__PURE__ */ new WeakMap(), j = Symbol(""), I = Symbol("");
function z(e2, s2, i2) {
  if (R && t) {
    let s3 = M.get(e2);
    s3 || M.set(e2, s3 = /* @__PURE__ */ new Map());
    let r2 = s3.get(i2);
    r2 || s3.set(i2, r2 = P(() => s3.delete(i2))), x(t, r2);
  }
}
function W(e2, t2, i2, r2, n2, l2) {
  let u2 = M.get(e2);
  if (!u2)
    return;
  let o2 = [];
  if ("clear" === t2)
    o2 = [...u2.values()];
  else if ("length" === i2 && a(e2)) {
    let e3 = Number(r2);
    u2.forEach((t3, i3) => {
      ("length" === i3 || !s(i3) && i3 >= e3) && o2.push(t3);
    });
  } else
    switch (void 0 !== i2 && o2.push(u2.get(i2)), t2) {
      case "add":
        a(e2) ? h(i2) && o2.push(u2.get("length")) : (o2.push(u2.get(j)), c(e2) && o2.push(u2.get(I)));
        break;
      case "delete":
        !a(e2) && (o2.push(u2.get(j)), c(e2) && o2.push(u2.get(I)));
        break;
      case "set":
        c(e2) && o2.push(u2.get(j));
    }
  for (let e3 of (k++, o2))
    e3 && O(e3, 4);
  m();
}
let A = o("__proto__,__v_isRef,__isVue"), N = new Set(Object.getOwnPropertyNames(Symbol).filter((e2) => "arguments" !== e2 && "caller" !== e2).map((e2) => Symbol[e2]).filter(s)), V = function() {
  let e2 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t2) => {
    e2[t2] = function() {
      for (var e3 = arguments.length, s2 = Array(e3), i2 = 0; i2 < e3; i2++)
        s2[i2] = arguments[i2];
      let r2 = eS(this);
      for (let e4 = 0, t3 = this.length; e4 < t3; e4++)
        z(r2, "get", e4 + "");
      let n2 = r2[t2](...s2);
      return -1 === n2 || false === n2 ? r2[t2](...s2.map(eS)) : n2;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t2) => {
    e2[t2] = function() {
      for (var e3 = arguments.length, s2 = Array(e3), i2 = 0; i2 < e3; i2++)
        s2[i2] = arguments[i2];
      L(), k++;
      let r2 = eS(this)[t2].apply(this, s2);
      return m(), b(), r2;
    };
  }), e2;
}();
function K(e2) {
  s(e2) || (e2 = String(e2));
  let t2 = eS(this);
  return z(t2, "has", e2), t2.hasOwnProperty(e2);
}
class T {
  constructor(e2 = false, t2 = false) {
    this._isReadonly = e2, this._isShallow = t2;
  }
  get(e2, t2, i2) {
    let n2 = this._isReadonly, l2 = this._isShallow;
    if ("__v_isReactive" === t2)
      return !n2;
    if ("__v_isReadonly" === t2)
      return n2;
    if ("__v_isShallow" === t2)
      return l2;
    if ("__v_raw" === t2)
      return i2 === (n2 ? l2 ? e_ : ef : l2 ? eo : ec).get(e2) || Object.getPrototypeOf(e2) === Object.getPrototypeOf(i2) ? e2 : void 0;
    let c2 = a(e2);
    if (!n2) {
      if (c2 && u(V, t2))
        return Reflect.get(V, t2, i2);
      if ("hasOwnProperty" === t2)
        return K;
    }
    let o2 = Reflect.get(e2, t2, i2);
    return (s(t2) ? N.has(t2) : A(t2)) ? o2 : (n2 || z(e2, "get", t2), l2) ? o2 : eM(o2) ? c2 && h(t2) ? o2 : o2.value : r(o2) ? n2 ? eg(o2) : ed(o2) : o2;
  }
}
class C extends T {
  constructor(e2 = false) {
    super(false, e2);
  }
  set(e2, t2, s2, r2) {
    let n2 = e2[t2];
    if (!this._isShallow) {
      let t3 = ew(n2);
      if (eR(s2) || ew(s2) || (n2 = eS(n2), s2 = eS(s2)), !a(e2) && eM(n2) && !eM(s2))
        return !t3 && (n2.value = s2, true);
    }
    let l2 = a(e2) && h(t2) ? Number(t2) < e2.length : u(e2, t2), c2 = Reflect.set(e2, t2, s2, r2);
    return e2 === eS(r2) && (l2 ? i(s2, n2) && W(e2, "set", t2, s2) : W(e2, "add", t2, s2)), c2;
  }
  deleteProperty(e2, t2) {
    let s2 = u(e2, t2);
    e2[t2];
    let i2 = Reflect.deleteProperty(e2, t2);
    return i2 && s2 && W(e2, "delete", t2, void 0), i2;
  }
  has(e2, t2) {
    let i2 = Reflect.has(e2, t2);
    return s(t2) && N.has(t2) || z(e2, "has", t2), i2;
  }
  ownKeys(e2) {
    return z(e2, "iterate", a(e2) ? "length" : j), Reflect.ownKeys(e2);
  }
}
let q = new C(), B = new class extends T {
  constructor(e2 = false) {
    super(true, e2);
  }
  set(e2, t2) {
    return true;
  }
  deleteProperty(e2, t2) {
    return true;
  }
}(), D = new C(true), F = (e2) => e2, G = (e2) => Reflect.getPrototypeOf(e2);
function H(e2, t2) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], n2 = eS(e2 = e2.__v_raw), l2 = eS(t2);
  s2 || (i(t2, l2) && z(n2, "get", t2), z(n2, "get", l2));
  let { has: a2 } = G(n2), h2 = r2 ? F : s2 ? em : eb;
  return a2.call(n2, t2) ? h2(e2.get(t2)) : a2.call(n2, l2) ? h2(e2.get(l2)) : void (e2 !== n2 && e2.get(t2));
}
function J(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s2 = this.__v_raw, r2 = eS(s2), n2 = eS(e2);
  return t2 || (i(e2, n2) && z(r2, "has", e2), z(r2, "has", n2)), e2 === n2 ? s2.has(e2) : s2.has(e2) || s2.has(n2);
}
function Q(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return e2 = e2.__v_raw, t2 || z(eS(e2), "iterate", j), Reflect.get(e2, "size", e2);
}
function U(e2) {
  e2 = eS(e2);
  let t2 = eS(this);
  return G(t2).has.call(t2, e2) || (t2.add(e2), W(t2, "add", e2, e2)), this;
}
function X(e2, t2) {
  t2 = eS(t2);
  let s2 = eS(this), { has: r2, get: n2 } = G(s2), l2 = r2.call(s2, e2);
  l2 || (e2 = eS(e2), l2 = r2.call(s2, e2));
  let a2 = n2.call(s2, e2);
  return s2.set(e2, t2), l2 ? i(t2, a2) && W(s2, "set", e2, t2) : W(s2, "add", e2, t2), this;
}
function Y(e2) {
  let t2 = eS(this), { has: s2, get: i2 } = G(t2), r2 = s2.call(t2, e2);
  r2 || (e2 = eS(e2), r2 = s2.call(t2, e2)), i2 && i2.call(t2, e2);
  let n2 = t2.delete(e2);
  return r2 && W(t2, "delete", e2, void 0), n2;
}
function Z() {
  let e2 = eS(this), t2 = 0 !== e2.size, s2 = e2.clear();
  return t2 && W(e2, "clear", void 0, void 0), s2;
}
function $(e2, t2) {
  return function(s2, i2) {
    let r2 = this, n2 = r2.__v_raw, l2 = eS(n2), a2 = t2 ? F : e2 ? em : eb;
    return e2 || z(l2, "iterate", j), n2.forEach((e3, t3) => s2.call(i2, a2(e3), a2(t3), r2));
  };
}
function ee(e2, t2, s2) {
  return function() {
    for (var i2 = arguments.length, r2 = Array(i2), n2 = 0; n2 < i2; n2++)
      r2[n2] = arguments[n2];
    let l2 = this.__v_raw, a2 = eS(l2), h2 = c(a2), u2 = "entries" === e2 || e2 === Symbol.iterator && h2, o2 = l2[e2](...r2), f2 = s2 ? F : t2 ? em : eb;
    return t2 || z(a2, "iterate", "keys" === e2 && h2 ? I : j), { next() {
      let { value: e3, done: t3 } = o2.next();
      return t3 ? { value: e3, done: t3 } : { value: u2 ? [f2(e3[0]), f2(e3[1])] : f2(e3), done: t3 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function et(e2) {
  return function() {
    for (var t2 = arguments.length, s2 = Array(t2), i2 = 0; i2 < t2; i2++)
      s2[i2] = arguments[i2];
    return "delete" !== e2 && ("clear" === e2 ? void 0 : this);
  };
}
let [es, ei, er, en] = function() {
  let e2 = { get(e3) {
    return H(this, e3);
  }, get size() {
    return Q(this);
  }, has: J, add: U, set: X, delete: Y, clear: Z, forEach: $(false, false) }, t2 = { get(e3) {
    return H(this, e3, false, true);
  }, get size() {
    return Q(this);
  }, has: J, add: U, set: X, delete: Y, clear: Z, forEach: $(false, true) }, s2 = { get(e3) {
    return H(this, e3, true);
  }, get size() {
    return Q(this, true);
  }, has(e3) {
    return J.call(this, e3, true);
  }, add: et("add"), set: et("set"), delete: et("delete"), clear: et("clear"), forEach: $(true, false) }, i2 = { get(e3) {
    return H(this, e3, true, true);
  }, get size() {
    return Q(this, true);
  }, has(e3) {
    return J.call(this, e3, true);
  }, add: et("add"), set: et("set"), delete: et("delete"), clear: et("clear"), forEach: $(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r2) => {
    e2[r2] = ee(r2, false, false), s2[r2] = ee(r2, true, false), t2[r2] = ee(r2, false, true), i2[r2] = ee(r2, true, true);
  }), [e2, s2, t2, i2];
}();
function el(e2, t2) {
  let s2 = t2 ? e2 ? en : er : e2 ? ei : es;
  return (t3, i2, r2) => "__v_isReactive" === i2 ? !e2 : "__v_isReadonly" === i2 ? e2 : "__v_raw" === i2 ? t3 : Reflect.get(u(s2, i2) && i2 in t3 ? s2 : t3, i2, r2);
}
let ea = { get: el(false, false) }, eh = { get: el(false, true) }, eu = { get: el(true, false) }, ec = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), ef = /* @__PURE__ */ new WeakMap(), e_ = /* @__PURE__ */ new WeakMap();
function ed(e2) {
  return ew(e2) ? e2 : ep(e2, false, q, ea, ec);
}
function ev(e2) {
  return ep(e2, false, D, eh, eo);
}
function eg(e2) {
  return ep(e2, true, B, eu, ef);
}
function ep(e2, t2, s2, i2, l2) {
  if (!r(e2) || e2.__v_raw && !(t2 && e2.__v_isReactive))
    return e2;
  let a2 = l2.get(e2);
  if (a2)
    return a2;
  let h2 = e2.__v_skip || !Object.isExtensible(e2) ? 0 : function(e3) {
    switch (e3) {
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
  }(n(e2));
  if (0 === h2)
    return e2;
  let u2 = new Proxy(e2, 2 === h2 ? i2 : s2);
  return l2.set(e2, u2), u2;
}
function ey(e2) {
  return ew(e2) ? ey(e2.__v_raw) : !!(e2 && e2.__v_isReactive);
}
function ew(e2) {
  return !!(e2 && e2.__v_isReadonly);
}
function eR(e2) {
  return !!(e2 && e2.__v_isShallow);
}
function ek(e2) {
  return !!e2 && !!e2.__v_raw;
}
function eS(e2) {
  let t2 = e2 && e2.__v_raw;
  return t2 ? eS(t2) : e2;
}
function eL(e2) {
  return Object.isExtensible(e2) && l(e2, "__v_skip", true), e2;
}
let eb = (e2) => r(e2) ? ed(e2) : e2, em = (e2) => r(e2) ? eg(e2) : e2;
class ex {
  constructor(e2, t2, s2, i2) {
    this.getter = e2, this._setter = t2, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new g(() => e2(this._value), () => eP(this, 2 === this.effect._dirtyLevel ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !i2, this.__v_isReadonly = s2;
  }
  get value() {
    let e2 = eS(this);
    return (!e2._cacheable || e2.effect.dirty) && i(e2._value, e2._value = e2.effect.run()) && eP(e2, 4), eO(e2), e2.effect._dirtyLevel >= 2 && eP(e2, 2), e2._value;
  }
  set value(e2) {
    this._setter(e2);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e2) {
    this.effect.dirty = e2;
  }
}
function eE(e2, t2) {
  let s2, i2, r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n2 = f(e2);
  return n2 ? (s2 = e2, i2 = _) : (s2 = e2.get, i2 = e2.set), new ex(s2, i2, n2 || !i2, r2);
}
function eO(e2) {
  var s2;
  R && t && (e2 = eS(e2), x(t, null != (s2 = e2.dep) ? s2 : e2.dep = P(() => e2.dep = void 0, e2 instanceof ex ? e2 : void 0)));
}
function eP(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
  arguments.length > 2 && arguments[2];
  let s2 = (e2 = eS(e2)).dep;
  s2 && O(s2, t2);
}
function eM(e2) {
  return !!(e2 && true === e2.__v_isRef);
}
function ej(e2) {
  return ez(e2, false);
}
function eI(e2) {
  return ez(e2, true);
}
function ez(e2, t2) {
  return eM(e2) ? e2 : new eW(e2, t2);
}
class eW {
  constructor(e2, t2) {
    this.__v_isShallow = t2, this.dep = void 0, this.__v_isRef = true, this._rawValue = t2 ? e2 : eS(e2), this._value = t2 ? e2 : eb(e2);
  }
  get value() {
    return eO(this), this._value;
  }
  set value(e2) {
    let t2 = this.__v_isShallow || eR(e2) || ew(e2);
    i(e2 = t2 ? e2 : eS(e2), this._rawValue) && (this._rawValue = e2, this._value = t2 ? e2 : eb(e2), eP(this, 4));
  }
}
function eA(e2) {
  return eM(e2) ? e2.value : e2;
}
let eN = { get: (e2, t2, s2) => eA(Reflect.get(e2, t2, s2)), set: (e2, t2, s2, i2) => {
  let r2 = e2[t2];
  return eM(r2) && !eM(s2) ? (r2.value = s2, true) : Reflect.set(e2, t2, s2, i2);
} };
function eV(e2) {
  return ey(e2) ? e2 : new Proxy(e2, eN);
}
class eK {
  constructor(e2) {
    this.dep = void 0, this.__v_isRef = true;
    let { get: t2, set: s2 } = e2(() => eO(this), () => eP(this));
    this._get = t2, this._set = s2;
  }
  get value() {
    return this._get();
  }
  set value(e2) {
    this._set(e2);
  }
}
function eT(e2) {
  return new eK(e2);
}
export {
  d as E,
  g as R,
  ev as a,
  ej as b,
  eT as c,
  eR as d,
  ey as e,
  b as f,
  ek as g,
  eV as h,
  eM as i,
  z as j,
  W as k,
  eE as l,
  eL as m,
  v as n,
  L as p,
  ed as r,
  eI as s,
  eS as t,
  eA as u
};
