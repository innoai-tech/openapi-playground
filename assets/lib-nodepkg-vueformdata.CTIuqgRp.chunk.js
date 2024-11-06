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
import { I as t, e } from "./lib-nodepkg-vuekit.BvzCpXNU.chunk.js";
import { E as i, S as s, J as a, d as r, a as n } from "./lib-nodepkg-typedef.Bo0mYmbQ.chunk.js";
import { S as l, a as o, b as u } from "./vendor-rxjs.B9ojupzi.chunk.js";
import { b as h, a as f, i as d, s as p, g as v } from "./vendor-innoai-tech-lodash.XmF8H4xo.chunk.js";
class c extends l {
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
        let a2 = s2.input, r2 = /* @__PURE__ */ s2.validate(a2);
        if (r2) {
          s2.next((t3) => {
            t3.error = r2;
          }), e2 = true;
          continue;
        }
        f(a2) || (d(a2) ? p(t2, i2, { ...a2 }) : p(t2, i2, a2));
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
    this.typedef = e2, this.inputs$ = new t(null !== (s2 = /* @__PURE__ */ i2()) && void 0 !== s2 ? s2 : {});
  }
  static of(t2, e2) {
    return new c(t2, () => h(e2) ? e2() : e2);
  }
  get inputs() {
    return this.inputs$.value;
  }
  field(t2) {
    return this._fields.get(t2);
  }
  *fields(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.inputs$.value, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let [n2, l2, o2] of t2.entries(e2, i)) {
      if (n2 === s.RecordKey || "never" === o2.type) continue;
      let t3 = [...r2, n2], e3 = /* @__PURE__ */ a.create(t3), i2 = /* @__PURE__ */ this._fields.get(e3);
      i2 || (i2 = new m(this, o2, t3), this._fields.set(e3, i2)), yield i2;
    }
  }
  reset() {
    for (let [t2, e2] of this._fields) e2.reset();
  }
}
const _m = class _m extends t {
  constructor(t2, e2, i2, s2 = a.create(i2)) {
    super({ initial: /* @__PURE__ */ v(t2.inputs$.value, i2, /* @__PURE__ */ _m.defaultValue(e2)) });
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
        p(t2, this.path, this.value.initial);
      }), this.next({ initial: this.value.initial });
    });
    __publicField(this, "update", (t2) => {
      this.form$.inputs$.next((e2) => {
        p(e2, this.path, t2);
      }), this.next((e2) => {
        var i2;
        e2.dirty = t2 !== e2.initial, e2.error = null !== (i2 = /* @__PURE__ */ this.validate(t2)) && void 0 !== i2 ? i2 : null;
      });
    });
    this.form$ = t2, this.typedef = e2, this.path = i2, this.name = s2;
  }
  get input() {
    return v(this.form$.inputs$.value, this.path, /* @__PURE__ */ _m.defaultValue(this.typedef));
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
    return void 0 === __privateGet(this, _e) && __privateSet(this, _e, /* @__PURE__ */ e(this.form$.inputs$, /* @__PURE__ */ u((t2) => v(t2, this.path, /* @__PURE__ */ _m.defaultValue(this.typedef))), /* @__PURE__ */ o())), __privateGet(this, _e);
  }
  validate(t2) {
    let e2 = "array" !== this.typedef.type || f(t2) ? t2 : t2.filter((t3) => !f(t3)), [i2] = this.typedef.validate(e2);
    if (!i2) return;
    let s2 = /* @__PURE__ */ i2.failures().filter((t3) => "never" !== t3.type && 0 === t3.path.length);
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
let y = /* @__PURE__ */ r((t2, e2) => n({ label: e2 }).modify(t2)), $ = /* @__PURE__ */ r((t2, e2) => n({ inputBy: e2 }).modify(t2));
export {
  c as F,
  $ as i,
  y as l
};
