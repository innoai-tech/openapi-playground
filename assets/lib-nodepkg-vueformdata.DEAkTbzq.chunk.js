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
var _t, _e, _i;
import { J as t, E as e, S as i, d as s, c as r } from "./lib-nodepkg-typedef.fSjiL-FI.chunk.js";
import { I as a, r as n } from "./lib-nodepkg-vuekit.DBltawvf.chunk.js";
import { S as l, a as o, b as u } from "./vendor-rxjs.DXC5TYZz.chunk.js";
import { b as h, f, a as p, i as d, s as c, g as v } from "./vendor-innoai-tech-lodash.BqsjFXV_.chunk.js";
const _m = class _m extends l {
  constructor(t2, e2) {
    super();
    __publicField(this, "inputs$");
    __privateAdd(this, _t, /* @__PURE__ */ new Map());
    __publicField(this, "submit", () => {
      let t2 = {}, e2 = false;
      for (let [i2, s2] of __privateGet(this, _t)) {
        if (s2.blur(), s2.state.error) {
          e2 = true;
          continue;
        }
        let i3 = s2.input, r2 = s2.validate(i3);
        if (r2) {
          s2.next((t3) => {
            t3.error = r2;
          }), e2 = true;
          continue;
        }
        p(i3) || (d(i3) ? c(t2, s2.path, { ...i3 }) : c(t2, s2.path, i3));
      }
      !e2 && this.next(t2);
    });
    __publicField(this, "setErrors", /* @__PURE__ */ (() => {
      var t2 = this;
      return function() {
        let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        for (let [i2, s2] of Object.entries(e2)) for (let [e3, r2] of __privateGet(t2, _t)) e3 == i2 && r2.next((t3) => {
          t3.error = s2;
        });
      };
    })());
    this.typedef = t2, this.inputs$ = new a(e2() ?? {});
  }
  static of(t2, e2) {
    return new _m(t2, () => h(e2) ? e2() : e2);
  }
  get inputs() {
    return this.inputs$.value;
  }
  field(e2) {
    return __privateGet(this, _t).get(f(e2) ? e2 : t.create(e2));
  }
  delete(e2) {
    return __privateGet(this, _t).delete(f(e2) ? e2 : t.create(e2));
  }
  *fields(s2) {
    let r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.inputs$.value, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let [n2, l2, o2] of s2.entries(r2, e)) {
      if (n2 === i.RecordKey || "never" === o2.type) continue;
      let e2 = [...a2, n2], s3 = t.create(e2), r3 = __privateGet(this, _t).get(s3);
      r3 || (r3 = new y(this, o2, e2), __privateGet(this, _t).set(s3, r3)), yield r3;
    }
  }
  reset() {
    for (let [t2, e2] of __privateGet(this, _t)) e2.reset();
  }
};
_t = new WeakMap();
let m = _m;
const _y = class _y extends a {
  constructor(e2, i2, s2, r2 = t.create(s2)) {
    super({ initial: v(e2.inputs$.value, s2, _y.defaultValue(i2)) });
    __privateAdd(this, _e);
    __privateAdd(this, _i);
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
        c(t2, this.path, this.value.initial);
      }), this.next({ initial: this.value.initial });
    });
    __publicField(this, "update", (t2) => {
      this.form$.inputs$.next((e2) => {
        c(e2, this.path, t2);
      }), this.next((e2) => {
        e2.dirty = t2 !== e2.initial, e2.error = this.validate(t2) ?? null;
      });
    });
    this.form$ = e2, this.typedef = i2, this.path = s2, this.pointer = r2;
  }
  get input() {
    return v(this.form$.inputs$.value, this.path, _y.defaultValue(this.typedef));
  }
  get meta() {
    return this.typedef.meta;
  }
  get state() {
    return this.value;
  }
  get name() {
    return this.pointer;
  }
  get optional() {
    return void 0 === __privateGet(this, _e) && __privateSet(this, _e, !this.validate(void 0)), __privateGet(this, _e);
  }
  get input$() {
    return void 0 === __privateGet(this, _i) && __privateSet(this, _i, n(this.form$.inputs$, u((t2) => v(t2, this.path, _y.defaultValue(this.typedef))), o())), __privateGet(this, _i);
  }
  validate(t2) {
    let e2 = "array" !== this.typedef.type || p(t2) ? t2 : t2.filter((t3) => !p(t3)), [i2] = this.typedef.validate(e2);
    if (!i2) return;
    let s2 = i2.failures().filter((t3) => "never" !== t3.type && 0 === t3.path.length);
    if (0 !== s2.length) return s2.map((t3) => void 0 === t3.value ? "字段不能为空" : t3.message);
  }
  destroy() {
    this.form$.delete(this.name);
  }
};
_e = new WeakMap();
_i = new WeakMap();
__publicField(_y, "defaultValue", (t2) => {
  try {
    return t2.create(void 0);
  } catch (t3) {
    return;
  }
});
let y = _y;
let $ = s((t2, e2) => r({ label: e2 }).modify(t2)), g = s((t2, e2) => r({ hint: e2 }).modify(t2)), x = s((t2, e2) => r({ inputBy: e2 }).modify(t2));
export {
  m as F,
  g as h,
  x as i,
  $ as l
};
