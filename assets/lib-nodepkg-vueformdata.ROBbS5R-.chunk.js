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
var t;
import { J as e, E as i, S as s, d as r, c as a } from "./lib-nodepkg-typedef.zwRRER3a.chunk.js";
import { I as n, r as l } from "./lib-nodepkg-vuekit.BFTeRu50.chunk.js";
import { S as o, a as h, b as u } from "./vendor-rxjs.CCKTxAfl.chunk.js";
import { b as f, f as p, a as d, i as c, s as v, g as m } from "./vendor-innoai-tech-lodash.pIS0vKJX.chunk.js";
const _y = class _y extends o {
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
        d(i3) || (c(i3) ? v(t2, s2.path, { ...i3 }) : v(t2, s2.path, i3));
      }
      e2 || this.next(t2);
    });
    __publicField(this, "setErrors", (t = this, function() {
      let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      for (let [i2, s2] of Object.entries(e2)) for (let [e3, r2] of __privateGet(t, _t)) e3 == i2 && r2.next((t2) => {
        t2.error = s2;
      });
    }));
    this.typedef = t2, this.inputs$ = new n(e2() ?? {});
  }
  static of(t2, e2) {
    return new _y(t2, () => f(e2) ? e2() : e2);
  }
  get inputs() {
    return this.inputs$.value;
  }
  field(t2) {
    return __privateGet(this, _t).get(p(t2) ? t2 : e.create(t2));
  }
  delete(t2) {
    return __privateGet(this, _t).delete(p(t2) ? t2 : e.create(t2));
  }
  *fields(t2) {
    let r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.inputs$.value, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let [n2, l2, o2] of t2.entries(r2, i)) {
      if (n2 === s.RecordKey || "never" === o2.type) continue;
      let t3 = [...a2, n2], i2 = e.create(t3), r3 = __privateGet(this, _t).get(i2);
      r3 || (r3 = new $(this, o2, t3), __privateGet(this, _t).set(i2, r3)), yield r3;
    }
  }
  reset() {
    for (let [t2, e2] of __privateGet(this, _t)) e2.reset();
  }
};
_t = new WeakMap();
let y = _y;
const _$ = class _$ extends n {
  constructor(t2, i2, s2, r2 = e.create(s2)) {
    super({ initial: m(t2.inputs$.value, s2, _$.defaultValue(i2)) });
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
        v(t2, this.path, this.value.initial);
      }), this.next({ initial: this.value.initial });
    });
    __publicField(this, "update", (t2) => {
      this.form$.inputs$.next((e2) => {
        v(e2, this.path, t2);
      }), this.next((e2) => {
        e2.dirty = t2 !== e2.initial, e2.error = this.validate(t2) ?? null;
      });
    });
    this.form$ = t2, this.typedef = i2, this.path = s2, this.pointer = r2;
  }
  get input() {
    return m(this.form$.inputs$.value, this.path, _$.defaultValue(this.typedef));
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
    return void 0 === __privateGet(this, _i) && __privateSet(this, _i, l(this.form$.inputs$, u((t2) => m(t2, this.path, _$.defaultValue(this.typedef))), h())), __privateGet(this, _i);
  }
  validate(t2) {
    let e2 = "array" !== this.typedef.type || d(t2) ? t2 : t2.filter((t3) => !d(t3)), [i2] = this.typedef.validate(e2);
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
__publicField(_$, "defaultValue", (t2) => {
  try {
    return t2.create(void 0);
  } catch (t3) {
    return;
  }
});
let $ = _$;
let g = r((t2, e2) => a({ label: e2 }).modify(t2)), x = r((t2, e2) => a({ hint: e2 }).modify(t2)), b = r((t2, e2) => a({ inputBy: e2 }).modify(t2));
export {
  y as F,
  x as h,
  b as i,
  g as l
};
