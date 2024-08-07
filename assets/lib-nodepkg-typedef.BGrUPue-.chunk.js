var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as e, e as t, m as r, a as i, o as n, l as a, f as s, h as o, j as l, d as c, k as u, n as d, p, q as h } from "./vendor-innoai-tech-lodash.DaXqQgFo.chunk.js";
let m = { path: [], branch: [] };
class f extends TypeError {
  constructor(e2, t2) {
    let r2;
    let { message: i2, explanation: n2, ...a2 } = e2, { path: s2 } = e2, o2 = 0 === s2.length ? i2 : `At path: ${s2.join(".")} -- ${i2}`;
    super(null != n2 ? n2 : o2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != n2 && (this.cause = o2), Object.assign(this, a2), this.name = this.constructor.name, this.failures = () => null != r2 ? r2 : r2 = [e2, ...t2()];
  }
}
class y {
  constructor(e2) {
    __publicField(this, "Type");
    __publicField(this, "Schema");
    this.schema = e2;
  }
  static define() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
    return new class extends y {
      validator(t2, r2) {
        return e2(t2, r2);
      }
    }(null);
  }
  get type() {
    var e2;
    return null !== (e2 = (this.schema || {}).type) && void 0 !== e2 ? e2 : "unknown";
  }
  *entries(e2) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  }
  refiner(e2, t2) {
    return [];
  }
  validator(e2, t2) {
    return [];
  }
  coercer(e2, t2) {
    return e2;
  }
  validate(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return O(e2, this, t2);
  }
  create(e2) {
    let t2 = O(e2, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e2) {
    let t2 = O(e2, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  default(e2) {
    return w.create(this, e2);
  }
  optional() {
    return b.create(this);
  }
  use() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e3, t3) => t3(e3), this);
  }
  get unwrap() {
    return this;
  }
  get meta() {
    if (this.schema) {
      var t2;
      return null !== (t2 = e(this.schema, ["$meta"])) && void 0 !== t2 ? t2 : {};
    }
    return {};
  }
  getMeta(t2) {
    if (this.schema) return e(this.schema, ["$meta", t2]);
  }
  getSchema(t2) {
    if (t2 && this.schema) return e(this.schema, [t2]);
  }
  get isOptional() {
    return false;
  }
}
class v extends y {
  static of(e2, t2) {
    return new v({ ...t2, $unwrap: e2 });
  }
  static refine(e2, t2, r2) {
    return new class extends v {
      *refiner(i2, n2) {
        for (let a2 of (yield* this.unwrap.refiner(i2, n2), x(t2(i2, n2), n2, e2, i2))) yield { ...a2, refinement: Object.keys(r2).join(",") };
      }
    }({ ...r2, $unwrap: e2 });
  }
  get type() {
    return this.unwrap.type;
  }
  get unwrap() {
    return "function" == typeof this.schema.$unwrap ? this.schema.$unwrap() : this.schema.$unwrap;
  }
  get isOptional() {
    return this.unwrap.isOptional;
  }
  get meta() {
    return { ...this.unwrap.meta, ...e(this.schema, ["$meta"], {}) };
  }
  getMeta(t2) {
    if (this.schema) {
      var r2;
      return null !== (r2 = e(this.schema, ["$meta", t2])) && void 0 !== r2 ? r2 : this.unwrap.getMeta(t2);
    }
  }
  getSchema(t2) {
    if (t2) {
      var r2;
      return null !== (r2 = e(this.schema, [t2])) && void 0 !== r2 ? r2 : this.unwrap.getSchema(t2);
    }
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
    yield* this.unwrap.entries(e2, { ...t2, node: g.create(this, t2.node) });
  }
  validator(e2, t2) {
    return x(this.unwrap.validator(e2, t2), t2, this, e2);
  }
  refiner(e2, t2) {
    return x(this.unwrap.refiner(e2, t2), t2, this, e2);
  }
  coercer(e2, t2) {
    return this.unwrap.coercer(e2, t2);
  }
}
class g extends v {
  static create(e2, t2) {
    return new g({ $unwrap: e2, $parent: t2 || null });
  }
}
class w extends v {
  static create(e2, t2) {
    return new w({ $unwrap: e2, default: t2 });
  }
  coercer(e2, t2) {
    return void 0 === e2 ? this.schema.default : super.unwrap.coercer(e2, t2);
  }
}
class b extends v {
  static create(e2) {
    return new b({ $unwrap: e2 });
  }
  get isOptional() {
    return true;
  }
  refiner(e2, t2) {
    return void 0 === e2 || super.unwrap.refiner(e2, t2);
  }
  validator(e2, t2) {
    return void 0 === e2 || super.unwrap.validator(e2, t2);
  }
}
function* x(e2, r2, i2, n2) {
  var a2;
  let s2 = e2;
  for (let e3 of (t(a2 = s2) && "function" == typeof a2[Symbol.iterator] || (s2 = [s2]), s2)) {
    let t2 = function(e4, t3, r3, i3) {
      if (true === e4) return;
      let n3 = {}, { path: a3, branch: s3, node: o2 } = t3, { type: l2 } = r3, { refinement: c2, message: u2 = `Expected a value of type \`${l2}\`${c2 ? ` with refinement \`${c2}\`` : ""}, but received: \`${i3}\`` } = n3 = false === e4 ? {} : "string" == typeof e4 ? { message: e4 } : e4;
      return { value: i3, type: l2, refinement: c2, key: a3[a3.length - 1], path: a3, branch: s3, node: o2, ...n3, message: u2 };
    }(e3, r2, i2, n2);
    t2 && (yield t2);
  }
}
function O(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = $(e2, t2, r2), n2 = function(e3) {
    let { done: t3, value: r3 } = e3.next();
    return t3 ? void 0 : r3;
  }(i2);
  return n2[0] ? [new f(n2[0], function* () {
    for (let e3 of i2) e3[0] && (yield e3[0]);
  }), void 0] : [void 0, n2[1]];
}
function* $(e2, r2) {
  let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: n2 = [], branch: a2 = [e2], node: s2 = g.create(r2, null), coerce: o2 = false, mask: l2 = false } = i2, c2 = { mask: l2, path: n2, branch: a2, node: s2 }, u2 = e2;
  o2 && (u2 = r2.coercer(u2, c2));
  let d2 = 0;
  for (let e3 of x(r2.validator(u2, c2), c2, r2, u2)) e3.explanation = i2.message, d2 = 2, yield [e3, void 0];
  for (let [e3, p2, h2] of r2.entries(u2, c2)) for (let r3 of $(p2, h2, { path: void 0 === e3 ? n2 : [...n2, e3], branch: void 0 === e3 ? a2 : [...a2, p2], node: void 0 === e3 ? s2 : g.create(h2, s2), coerce: o2, mask: l2, message: i2.message })) r3[0] ? (d2 = null != r3[0].refinement ? 1 : 2, yield [r3[0], void 0]) : o2 && (p2 = r3[1], void 0 === e3 ? u2 = p2 : u2 instanceof Map ? u2.set(e3, p2) : u2 instanceof Set ? u2.add(p2) : t(u2) && (void 0 !== p2 || e3 in u2) && (u2[e3] = p2));
  if (2 !== d2) for (let e3 of x(r2.refiner(u2, c2), c2, r2, u2)) e3.explanation = i2.message, d2 = 1, yield [e3, void 0];
  0 === d2 && (yield [void 0, u2]);
}
class N extends y {
  static create() {
    return new N(false);
  }
  get type() {
    return "never";
  }
  validator(e2, t2) {
    return false;
  }
}
class S extends v {
  static create(e2, t2) {
    return new S({ $unwrap: t2, $ref: e2 });
  }
  get isOptional() {
    return false;
  }
}
class M extends y {
  static create() {
    return new M();
  }
  constructor() {
    super({});
  }
  get type() {
    return "any";
  }
  validator() {
    return true;
  }
}
class P extends y {
  static create() {
    return new P({ type: "null" });
  }
  get type() {
    return "null";
  }
  validator(e2, t2) {
    return Object.is(e2, null);
  }
}
class j extends y {
  static create() {
    return new j({ type: "string" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return "string" == typeof e2;
  }
}
class A extends y {
  static create() {
    return new A({ type: "number" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return "number" == typeof e2 && !Number.isNaN(e2);
  }
  coercer(e2, t2) {
    try {
      return void 0 != e2 ? parseFloat(String(e2)) : void 0;
    } catch (e3) {
      return;
    }
  }
}
class _ extends y {
  static create() {
    return new _({ type: "integer" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return "number" == typeof e2 && !Number.isNaN(e2) && Number.isInteger(e2);
  }
  coercer(e2, t2) {
    try {
      return void 0 != e2 ? parseInt(String(e2)) : void 0;
    } catch (e3) {
      return;
    }
  }
}
class k extends y {
  static create() {
    return new k({ type: "boolean" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return "boolean" == typeof e2;
  }
  coercer(e2, t2) {
    try {
      return void 0 != e2 ? "true" === String(e2) : void 0;
    } catch (e3) {
      return;
    }
  }
}
class T extends y {
  static create() {
    return new T({ type: "string", format: "binary" });
  }
  get type() {
    return "binary";
  }
  validator(e2, t2) {
    return e2 instanceof File || e2 instanceof Blob;
  }
}
class E extends y {
  static create(e2) {
    return new E({ enum: e2 });
  }
  static literal(e2) {
    return new E({ enum: [e2] });
  }
  static nativeEnum(e2) {
    return new E({ enum: Object.values(e2) });
  }
  get type() {
    return "enums";
  }
  validator(e2, t2) {
    return this.schema.enum.includes(e2);
  }
}
class I extends y {
  static create(e2) {
    let t2 = [];
    if (e2) for (let r2 in e2) {
      let i2 = e2[r2];
      (null == i2 ? void 0 : i2.isOptional) || t2.push(r2);
    }
    return new I({ type: "object", properties: e2, required: t2, additionalProperties: N.create() });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e2, r2) {
    if (t(e2)) {
      var i2;
      let t2 = new Set(Object.keys(e2));
      if (this.schema.properties) for (let r3 in this.schema.properties) t2.delete(r3), yield [r3, e2[r3], this.schema.properties[r3]];
      if ((null === (i2 = r2.node) || void 0 === i2 ? void 0 : i2.type) !== "intersection") for (let r3 of t2) yield [r3, e2[r3], this.schema.additionalProperties];
    }
  }
  validator(e2, r2) {
    return t(e2);
  }
  coercer(e2, r2) {
    if (t(e2)) {
      let t2 = { ...e2 };
      if (r2.mask) {
        let e3 = this.schema.properties;
        if (e3) for (let r3 in t2) void 0 === e3[r3] && delete t2[r3];
      }
      return t2;
    }
    return e2;
  }
}
let C = Symbol("$_key");
class q extends y {
  static create(e2, t2) {
    return new q({ propertyNames: e2, additionalProperties: t2, type: "object" });
  }
  get type() {
    return "record";
  }
  *entries(e2) {
    if (t(e2)) for (let t2 in e2) {
      let r2 = e2[t2];
      yield [C, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
    }
  }
  validator(e2) {
    return t(e2);
  }
}
class L extends y {
  static create(e2) {
    return new L({ type: "array", items: e2 });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    if ("any" !== this.schema.items.type && Array.isArray(e2)) for (let [t2, r2] of e2.entries()) yield [t2, r2, this.schema.items];
  }
  validator(e2) {
    return Array.isArray(e2);
  }
  coercer(e2) {
    return Array.isArray(e2) ? e2.slice() : e2;
  }
}
class R extends y {
  static create(e2) {
    return new R({ type: "array", items: e2 });
  }
  get type() {
    return "tuple";
  }
  *entries(e2, t2) {
    if (Array.isArray(e2)) {
      let t3 = Math.max(this.schema.items.length, e2.length);
      for (let i2 = 0; i2 < t3; i2++) {
        var r2;
        yield [i2, e2[i2], null !== (r2 = this.schema.items[i2]) && void 0 !== r2 ? r2 : N.create()];
      }
    }
  }
  validator(e2) {
    return Array.isArray(e2);
  }
  coercer(e2) {
    return Array.isArray(e2) ? e2.slice() : e2;
  }
}
class F extends y {
  static create() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return new F({ allOf: t2 });
  }
  get type() {
    return "intersection";
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
    for (let r2 of this.schema.allOf) yield* r2.entries(e2, t2);
  }
  *validator(e2, t2) {
    for (let r2 of this.schema.allOf) yield* x(r2.validator(e2, t2), t2, this, e2);
  }
  *refiner(e2, t2) {
    for (let r2 of this.schema.allOf) yield* x(r2.refiner(e2, t2), t2, this, e2);
  }
}
class J extends y {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMapping", {});
  }
  static create() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return new J({ oneOf: t2 });
  }
  static discriminatorMapping(e2, t2) {
    return new J({ oneOf: Object.values(r(t2, (t3, r2) => {
      let i2 = { [e2]: E.literal(r2) };
      for (let [e3, r3, n2] of t3.entries({}, m)) i2[String(e3)] = n2;
      return I.create(i2);
    })), discriminator: { propertyName: e2 } });
  }
  discriminatorPropType(e2) {
    return i(this._discriminatorPropName) && (this._discriminatorPropName = (() => {
      var t2, r2, i2, n2;
      let a2 = null !== (i2 = null === (t2 = this.schema.discriminator) || void 0 === t2 ? void 0 : t2.propertyName) && void 0 !== i2 ? i2 : "", s2 = this.schema.oneOf.reduce((e3, t3) => [...e3, ...t3.unwrap.schema.properties[a2].unwrap.schema.enum], []);
      return v.of(E.create(s2), { $meta: null !== (n2 = null === (r2 = e2.node) || void 0 === r2 ? void 0 : r2.meta) && void 0 !== n2 ? n2 : {} });
    })()), this._discriminatorPropName;
  }
  discriminatorMapping(e2, t2) {
    var r2, a2;
    let s2 = null !== (a2 = null === (r2 = this.schema.discriminator) || void 0 === r2 ? void 0 : r2.propertyName) && void 0 !== a2 ? a2 : "";
    if (this._discriminatorMapping[e2]) return this._discriminatorMapping[e2];
    if (this.discriminatorPropType(t2).unwrap.schema.enum.includes(e2)) {
      let t3 = this.schema.oneOf.find((t4) => {
        let r3 = t4.unwrap.schema.properties[s2];
        if (r3.unwrap.schema.enum) {
          let [t5, i2] = r3.validate(e2);
          return !t5;
        }
        return false;
      });
      if (t3) return i(this._discriminatorMapping[`${e2}`]) && (this._discriminatorMapping[`${e2}`] = n(t3.unwrap.schema.properties, [s2])), this._discriminatorMapping[`${e2}`];
    }
    return {};
  }
  *entries(e2, t2) {
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, i2 = null == e2 ? void 0 : e2[r2], n2 = I.create({ [r2]: this.discriminatorPropType(t2), ...this.discriminatorMapping(i2, t2) });
      yield* n2.entries(e2, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e2) {
    for (let t2 of this.schema.oneOf) {
      let [r2, i2] = O(e2, t2, { coerce: true });
      if (!r2) return i2;
    }
    return e2;
  }
  validator(e2, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, i2 = null == e2 ? void 0 : e2[r3];
      return I.create({ [r3]: this.discriminatorPropType(t2), ...this.discriminatorMapping(i2, t2) }).validator(e2, t2);
    }
    let r2 = [];
    for (let i2 of this.schema.oneOf) {
      let [...n2] = $(e2, i2, t2), [a2] = n2;
      if (a2 && !a2[0]) return [];
      for (let [e3] of n2) e3 && r2.push(e3);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e3) => e3.type).join(" | ")}\`, but received: ${e2}`, ...r2];
  }
}
let B = S.create, D = M.create, K = N.create, W = P.create, z = j.create, G = A.create, H = _.create, Q = k.create, U = T.create, V = E.create, X = E.literal, Y = I.create, Z = q.create, ee = R.create, et = L.create, er = F.create, ei = J.create, en = J.discriminatorMapping, ea = y.define;
function es(e2) {
  return (t2) => v.of(t2, { $meta: e2 });
}
let eo = (e2) => {
  var t2;
  return null !== (t2 = a(e2.split("/"))) && void 0 !== t2 ? t2 : "";
};
class el {
  constructor(e2) {
    __publicField(this, "def", /* @__PURE__ */ new Map());
    __publicField(this, "ref", (e2) => {
      let t2 = this.def.get(e2);
      if (t2) return t2;
      throw Error(`undefined type ${e2}`);
    });
    this.resolveRef = e2;
  }
  static decode(e2, t2) {
    return false === e2 ? K() : new el(t2).decode(e2);
  }
  decode(e2) {
    let t2 = structuredClone(e2), r2 = this._decode(t2);
    return (null == t2 ? void 0 : t2.description) ? r2.use(es({ description: t2.description })) : r2;
  }
  _decode(e2) {
    let t2 = eg(e2);
    if (t2.$ref) {
      let [e3, r2] = this.resolveRef(t2.$ref);
      return this.def.has(r2) || (this.def.set(r2, D()), this.def.set(r2, this.decode(e3))), B(r2, () => this.ref(r2));
    }
    if (t2.enum) {
      let e3 = V(t2.enum);
      return t2["x-enum-labels"] ? e3.use(es({ enumLabels: t2["x-enum-labels"] })) : e3;
    }
    if (t2.discriminator) {
      let e3 = t2.discriminator.propertyName;
      if (e3) {
        let r2 = {};
        if (t2.discriminator.mapping) {
          let i3 = t2.discriminator.mapping;
          for (let t3 in i3) {
            let n3 = this.decode(i3[t3]), a3 = {};
            for (let [r3, i4, s2] of n3.entries({}, { path: [], branch: [] })) if ("never" !== s2.type) {
              if (r3 === e3) {
                a3[r3] = X(t3);
                continue;
              }
              a3[String(r3)] = s2;
            }
            r2[t3] = s(a3) ? Y() : Y(a3);
          }
        } else for (let i3 of t2.oneOf) {
          let t3 = this.decode(i3);
          if (t3) {
            let i4 = {}, n3 = [];
            for (let [r3, a3, s2] of t3.entries({}, { path: [], branch: [] })) if ("never" !== s2.type) {
              if (r3 === e3) {
                switch (s2.type) {
                  case "literal":
                  case "enums":
                    n3.push(...s2.getSchema("enum"));
                }
                continue;
              }
              i4[String(r3)] = s2;
            }
            if (n3.length) for (let e4 of n3) r2[e4] = s(i4) ? Y() : Y(i4);
          }
        }
        return en(e3, r2);
      }
    }
    if (t2.oneOf) {
      let e3 = o(t2.oneOf, (e4) => this.decode(e4));
      return 1 === e3.length ? e3[0] : ei(...e3);
    }
    if (t2.allOf) {
      let e3 = o(t2.allOf, (e4) => this.decode(e4));
      return 1 === e3.length ? e3[0] : er(...e3);
    }
    if (ec(t2)) {
      var i2, n2, a2;
      if (t2.properties) {
        let e4 = null !== (i2 = t2.required) && void 0 !== i2 ? i2 : [];
        return Y(r(t2.properties, (t3, r2) => {
          let i3 = this.decode(t3);
          return e4.includes(r2) && !t3.nullable ? i3 : i3.optional();
        }));
      }
      let e3 = null !== (n2 = t2.additionalProperties) && void 0 !== n2 ? n2 : {};
      return e3 ? Z(this.decode(null !== (a2 = t2.propertyNames) && void 0 !== a2 ? a2 : { type: "string" }), this.decode(e3)) : Y();
    }
    return ed(t2) ? l(t2.items) ? ee(t2.items.map((e3) => this.decode(e3))) : et(this.decode(t2.items)) : eh(t2) ? "binary" === t2.format ? U() : z() : ep(t2) ? "integer" === t2.type ? H() : G() : em(t2) ? Q() : eu(t2) ? W() : D();
  }
}
let ec = (e2) => "object" === e2.type, eu = (e2) => "null" === e2.type, ed = (e2) => "array" === e2.type, ep = (e2) => "number" === e2.type || "integer" === e2.type, eh = (e2) => "string" === e2.type, em = (e2) => "boolean" === e2.type, ef = { object: ["properties", "additionalProperties", "unevaluatedProperties", "patternProperties", "propertyNames", "dependentSchemas", "maxProperties", "minProperties"], array: ["contains", "items", "additionalItems", "unevaluatedItems", "maxItems", "minItems", "uniqueItems", "maxContains", "minContains"], string: ["pattern", "contentMediaType", "contentEncoding", "contentSchema", "maxLength", "minLength"], number: ["maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"] }, ey = (e2, t2) => u(t2, (t3) => p(e2, t3)), ev = (e2) => !ey(e2, ["type", "$ref", "$id", "oneOf", "anyOf", "allOf"]), eg = function() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (c(e2)) return {};
  if (!e2.type) {
    for (let t3 in ef) if (ey(e2, ef[t3])) {
      e2.type = t3;
      break;
    }
  }
  e2.const && (e2.enum = [e2.const]);
  let t2 = (t3) => {
    if (e2[t3]) {
      var r2;
      e2[t3] = d(e2[t3], (r3) => {
        let i2 = eg(r3);
        return !ev(i2) || ("allOf" === t3 && h(e2, i2), false);
      }), (null === (r2 = e2[t3]) || void 0 === r2 ? void 0 : r2.length) === 0 && (e2[t3] = void 0);
    }
  };
  return t2("allOf"), t2("anyOf"), t2("oneOf"), e2;
};
export {
  m as E,
  el as J,
  C as S,
  v as T,
  y as a,
  Q as b,
  ea as c,
  D as d,
  V as e,
  eo as f,
  Y as o,
  Z as r,
  z as s
};
