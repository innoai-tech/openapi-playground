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
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _t, _e;
import { i as t, E as e, S as i, a as s, b as n, s as r, g as a, T as l } from "./lib--nodepkg-typedef.5X_Ny0jI.chunk.js";
import { I as u, r as o } from "./lib--nodepkg-vuekit.GwyEMV02.chunk.js";
import { S as f, d as h, m as d } from "./vendor--rxjs.D2Za7iWR.chunk.js";
class p extends f {
  constructor(t2, e2) {
    var i2;
    super();
    __publicField(this, "inputs$");
    __publicField(this, "_fields", /* @__PURE__ */ new Map());
    __publicField(this, "submit", () => {
      let t2 = {}, e2 = false;
      for (let [i2, a2] of this._fields) {
        if (a2.blur(), a2.state.error) {
          e2 = true;
          continue;
        }
        let l2 = a2.input, u2 = a2.validate(l2);
        if (u2) {
          a2.next((t3) => {
            t3.error = u2;
          }), e2 = true;
          continue;
        }
        s(l2) || (n(l2) ? r(t2, i2, { ...l2 }) : r(t2, i2, l2));
      }
      e2 || this.next(t2);
    });
    __publicField(this, "setErrors", (t2) => {
      for (let e2 in t2) {
        let i2 = t2[e2];
        for (let [t3, s2] of this._fields)
          t3 == e2 && s2.next((t4) => {
            t4.error = i2;
          });
      }
    });
    this.typedef = t2, this.inputs$ = new u(null !== (i2 = e2()) && void 0 !== i2 ? i2 : {});
  }
  static of(e2, i2) {
    return new p(e2, () => t(i2) ? i2() : i2);
  }
  get inputs() {
    return this.inputs$.value;
  }
  field(t2) {
    return this._fields.get(t2);
  }
  *fields(t2) {
    let s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.inputs$.value, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let [r2, a2, l2] of t2.entries(s2, e)) {
      if (r2 === i || "never" === l2.type)
        continue;
      let t3 = [...n2, r2], e2 = v.stringify(t3), s3 = this._fields.get(e2);
      s3 || (s3 = new v(this, l2, t3), this._fields.set(e2, s3)), yield s3;
    }
  }
  reset() {
    for (let [t2, e2] of this._fields)
      e2.reset();
  }
}
const _v = class _v extends u {
  constructor(t2, e2, i2, s2 = _v.stringify(i2)) {
    super({ initial: a(t2.inputs$.value, s2, _v.defaultValue(e2)) });
    __privateAdd(this, _t, void 0);
    __privateAdd(this, _e, void 0);
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
        r(t2, this.name, this.value.initial);
      }), this.next({ initial: this.value.initial });
    });
    __publicField(this, "update", (t2) => {
      this.form$.inputs$.next((e2) => {
        r(e2, this.name, t2);
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
    return a(this.form$.inputs$.value, this.name, _v.defaultValue(this.typedef));
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
    return void 0 === __privateGet(this, _e) && __privateSet(this, _e, o(this.form$.inputs$, d((t2) => a(t2, this.name, _v.defaultValue(this.typedef))), h())), __privateGet(this, _e);
  }
  validate(t2) {
    let e2 = "array" !== this.typedef.type || s(t2) ? t2 : t2.filter((t3) => !s(t3)), [i2] = this.typedef.validate(e2);
    if (!i2)
      return;
    let n2 = i2.failures().filter((t3) => "never" !== t3.type && 0 === t3.path.length);
    if (0 !== n2.length)
      return n2.map((t3) => void 0 === t3.value ? "字段不能为空" : t3.message);
  }
  destroy() {
    this.form$._fields.delete(this.name);
  }
};
_t = new WeakMap();
_e = new WeakMap();
__publicField(_v, "defaultValue", (t2) => {
  try {
    return t2.create(void 0);
  } catch (t3) {
    return;
  }
});
let v = _v;
function m(t2) {
  return (e2) => l.of(e2, { $meta: { label: t2 } });
}
function c(t2) {
  return (e2) => l.of(e2, { $meta: { input: t2 } });
}
export {
  p as F,
  c as i,
  m as l
};
