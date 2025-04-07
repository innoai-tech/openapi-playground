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
var _fields, _optional, _input$;
import { J as JSONPointer, E as EmptyContext, S as Schema, d as defineModifier, c as annotate } from "./lib-nodepkg-typedef.D-PCYzjh.chunk.js";
import { I as ImmerBehaviorSubject, r as rx } from "./lib-nodepkg-vuekit.BuiIu7Tz.chunk.js";
import { S as Subject, a as distinctUntilChanged, b as map } from "./vendor-rxjs.Bs9iBULs.chunk.js";
import { b as isFunction, f as isString, a as isUndefined, i as isPlainObject, s as set, g as get } from "./vendor-innoai-tech-lodash.DimVzCL6.chunk.js";
const _FormData = class _FormData extends Subject {
  constructor(typedef, initials) {
    super();
    __publicField(this, "inputs$");
    __privateAdd(this, _fields, /* @__PURE__ */ new Map());
    __publicField(this, "submit", () => {
      const values = {};
      let hasError = false;
      for (const [_, f] of __privateGet(this, _fields)) {
        f.blur();
        if (f.state.error) {
          hasError = true;
          continue;
        }
        const value = f.input;
        const err = f.validate(value);
        if (err) {
          f.next((state) => {
            state.error = err;
          });
          hasError = true;
          continue;
        }
        if (!isUndefined(value)) {
          if (isPlainObject(value)) {
            set(values, f.path, {
              ...value
            });
          } else {
            set(values, f.path, value);
          }
        }
      }
      if (hasError) {
        return;
      }
      this.next(values);
    });
    __publicField(this, "setErrors", /* @__PURE__ */ (() => {
      var _this = this;
      return function() {
        let errors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        for (const [pointer, error] of Object.entries(errors)) {
          for (const [instancePath, f] of __privateGet(_this, _fields)) {
            if (instancePath == pointer) {
              f.next((state) => {
                state.error = error;
              });
            }
          }
        }
      };
    })());
    this.typedef = typedef;
    this.inputs$ = new ImmerBehaviorSubject(initials() ?? {});
  }
  static of(schema, initials) {
    return new _FormData(schema, () => isFunction(initials) ? initials() : initials);
  }
  get inputs() {
    return this.inputs$.value;
  }
  field(pointerOrPath) {
    return __privateGet(this, _fields).get(isString(pointerOrPath) ? pointerOrPath : JSONPointer.create(pointerOrPath));
  }
  delete(pointerOrPath) {
    return __privateGet(this, _fields).delete(isString(pointerOrPath) ? pointerOrPath : JSONPointer.create(pointerOrPath));
  }
  *fields(typedef) {
    let value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.inputs$.value, path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    for (const [nameOrIdx, _, t] of typedef.entries(value, EmptyContext)) {
      if (nameOrIdx === Schema.RecordKey) {
        continue;
      }
      if (t.type === "never") {
        continue;
      }
      const p = [
        ...path,
        nameOrIdx
      ];
      const name = JSONPointer.create(p);
      let f = __privateGet(this, _fields).get(name);
      if (!f) {
        f = new FieldImpl(this, t, p);
        __privateGet(this, _fields).set(name, f);
      }
      yield f;
    }
  }
  reset() {
    for (let [_, f] of __privateGet(this, _fields)) {
      f.reset();
    }
  }
};
_fields = new WeakMap();
let FormData = _FormData;
const _FieldImpl = class _FieldImpl extends ImmerBehaviorSubject {
  constructor(form$, typedef, path, pointer = JSONPointer.create(path)) {
    super({
      initial: get(form$.inputs$.value, path, _FieldImpl.defaultValue(typedef))
    });
    __privateAdd(this, _optional);
    __privateAdd(this, _input$);
    __publicField(this, "focus", () => {
      this.next((state) => {
        state.focus = true;
        state.visited = true;
      });
    });
    __publicField(this, "blur", () => {
      this.next((state) => {
        state.focus = false;
        state.touched = true;
      });
    });
    __publicField(this, "reset", () => {
      this.form$.inputs$.next((inputs) => {
        set(inputs, this.path, this.value.initial);
      });
      this.next({
        initial: this.value.initial
      });
    });
    __publicField(this, "update", (v) => {
      this.form$.inputs$.next((inputs) => {
        set(inputs, this.path, v);
      });
      this.next((state) => {
        state.dirty = v !== state.initial;
        state.error = this.validate(v) ?? null;
      });
    });
    this.form$ = form$;
    this.typedef = typedef;
    this.path = path;
    this.pointer = pointer;
  }
  get input() {
    return get(this.form$.inputs$.value, this.path, _FieldImpl.defaultValue(this.typedef));
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
    if (typeof __privateGet(this, _optional) === "undefined") {
      __privateSet(this, _optional, !this.validate(void 0));
    }
    return __privateGet(this, _optional);
  }
  get input$() {
    if (typeof __privateGet(this, _input$) === "undefined") {
      __privateSet(this, _input$, rx(this.form$.inputs$, map((v) => get(v, this.path, _FieldImpl.defaultValue(this.typedef))), distinctUntilChanged()));
    }
    return __privateGet(this, _input$);
  }
  validate(value) {
    const v = this.typedef.type === "array" && !isUndefined(value) ? value.filter((v2) => !isUndefined(v2)) : value;
    const [err] = this.typedef.validate(v);
    if (!err) {
      return;
    }
    const failures = err.failures().filter((v2) => v2.type !== "never" && v2.path.length === 0);
    if (failures.length === 0) {
      return;
    }
    return failures.map((f) => {
      if (f.value === void 0) {
        return "字段不能为空";
      }
      return f.message;
    });
  }
  destroy() {
    this.form$.delete(this.name);
  }
};
_optional = new WeakMap();
_input$ = new WeakMap();
__publicField(_FieldImpl, "defaultValue", (def) => {
  try {
    return def.create(void 0);
  } catch (e) {
    return;
  }
});
let FieldImpl = _FieldImpl;
const label = defineModifier((type, label2) => {
  return annotate({
    label: label2
  }).modify(type);
});
const hint = defineModifier((type, hint2) => {
  return annotate({
    hint: hint2
  }).modify(type);
});
const inputBy = defineModifier((type, inputBy2) => {
  return annotate({
    inputBy: inputBy2
  }).modify(type);
});
export {
  FormData as F,
  hint as h,
  inputBy as i,
  label as l
};
