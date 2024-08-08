var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _t, _e;
import { I as t, r as e } from "./lib-nodepkg-vuekit.DmlM5yvO.chunk.js";
import { E as i, S as s, T as n } from "./lib-nodepkg-typedef.BXGogezP.chunk.js";
import { S as r, d as a, m as l } from "./vendor-rxjs.D2F2rdN9.chunk.js";
import { r as u, a as o, i as f, s as h, g as d } from "./vendor-innoai-tech-lodash.DaXqQgFo.chunk.js";
class p extends r {
  constructor(e2, i2) {
    var s2;
    super();
    __publicField(this, "inputs$");
    __publicField(this, "_fields", /* @__PURE__ */ new Map());
    __publicField(this, "submit", () => {
      let t2 = {}, e2 = false;
      for (let [i2, s2] of this._fields) {
        if (s2.blur(), s2.state.error) {
          e2 = true;
          continue;
        }
        let n2 = s2.input, r2 = s2.validate(n2);
        if (r2) {
          s2.next((t3) => {
            t3.error = r2;
          }), e2 = true;
          continue;
        }
        o(n2) || (f(n2) ? h(t2, i2, { ...n2 }) : h(t2, i2, n2));
      }
      e2 || this.next(t2);
    });
    __publicField(this, "setErrors", (t2) => {
      for (let e2 in t2) {
        let i2 = t2[e2];
        for (let [t3, s2] of this._fields) t3 == e2 && s2.next((t4) => {
          t4.error = i2;
        });
      }
    });
    this.typedef = e2, this.inputs$ = new t(null !== (s2 = i2()) && void 0 !== s2 ? s2 : {});
  }
  static of(t2, e2) {
    return new p(t2, () => u(e2) ? e2() : e2);
  }
  get inputs() {
    return this.inputs$.value;
  }
  field(t2) {
    return this._fields.get(t2);
  }
  *fields(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.inputs$.value, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let [r2, a2, l2] of t2.entries(e2, i)) {
      if (r2 === s || "never" === l2.type) continue;
      let t3 = [...n2, r2], e3 = m.stringify(t3), i2 = this._fields.get(e3);
      i2 || (i2 = new m(this, l2, t3), this._fields.set(e3, i2)), yield i2;
    }
  }
  reset() {
    for (let [t2, e2] of this._fields) e2.reset();
  }
}
const _m = class _m extends t {
  constructor(t2, e2, i2, s2 = _m.stringify(i2)) {
    super({ initial: d(t2.inputs$.value, s2, _m.defaultValue(e2)) });
    __privateAdd(this, _t);
    __privateAdd(this, _e);
    __publicField(this, "focus", () => {
      this.next((t2) => {
        t2.focus = true, t2.visited = true;
      });
    });
    __publicField(this, "blur", () => {
      this.next((t2) => {
        t2.focus = false, t2.touched = true;
      });
    });
    __publicField(this, "reset", () => {
      this.form$.inputs$.next((t2) => {
        h(t2, this.name, this.value.initial);
      }), this.next({ initial: this.value.initial });
    });
    __publicField(this, "update", (t2) => {
      this.form$.inputs$.next((e2) => {
        h(e2, this.name, t2);
      }), this.next((e2) => {
        var i2;
        e2.dirty = t2 !== e2.initial, e2.error = null !== (i2 = this.validate(t2)) && void 0 !== i2 ? i2 : null;
      });
    });
    this.form$ = t2, this.typedef = e2, this.path = i2, this.name = s2;
  }
  static stringify(t2) {
    let e2 = "";
    for (let i2 of t2) {
      if ("number" == typeof i2) {
        e2 += `[${i2}]`;
        continue;
      }
      e2 += e2 ? `.${i2}` : i2;
    }
    return e2;
  }
  get input() {
    return d(this.form$.inputs$.value, this.name, _m.defaultValue(this.typedef));
  }
  get meta() {
    return this.typedef.meta;
  }
  get state() {
    return this.value;
  }
  get optional() {
    return void 0 === __privateGet(this, _t) && __privateSet(this, _t, !this.validate(void 0)), __privateGet(this, _t);
  }
  get input$() {
    return void 0 === __privateGet(this, _e) && __privateSet(this, _e, e(this.form$.inputs$, l((t2) => d(t2, this.name, _m.defaultValue(this.typedef))), a())), __privateGet(this, _e);
  }
  validate(t2) {
    let e2 = "array" !== this.typedef.type || o(t2) ? t2 : t2.filter((t3) => !o(t3)), [i2] = this.typedef.validate(e2);
    if (!i2) return;
    let s2 = i2.failures().filter((t3) => "never" !== t3.type && 0 === t3.path.length);
    if (0 !== s2.length) return s2.map((t3) => void 0 === t3.value ? "字段不能为空" : t3.message);
  }
  destroy() {
    this.form$._fields.delete(this.name);
  }
};
_t = new WeakMap();
_e = new WeakMap();
__publicField(_m, "defaultValue", (t2) => {
  try {
    return t2.create(void 0);
  } catch (t3) {
    return;
  }
});
let m = _m;
function v(t2) {
  return (e2) => n.of(e2, { $meta: { label: t2 } });
}
function c(t2) {
  return (e2) => n.of(e2, { $meta: { input: t2 } });
}
export {
  p as F,
  c as i,
  v as l
};
