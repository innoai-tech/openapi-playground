import { J as JSONPointer, E as EmptyContext, S as Schema, d as defineModifier, c as annotate } from './lib-nodepkg-typedef.CzjpWxrC.chunk.js';
import { I as ImmerBehaviorSubject, r as rx } from './lib-nodepkg-vuekit.CtL-AQwf.chunk.js';
import { S as Subject, a as distinctUntilChanged, b as map } from './vendor-rxjs.BO1Fdxz5.chunk.js';
import { b as isFunction, f as isString, a as isUndefined, i as isPlainObject, s as set, g as get } from './vendor-innoai-tech-lodash.CDxVqk50.chunk.js';

class FormData extends Subject {
  constructor(typedef, initials) {
    super();
    this.typedef = typedef;
    this.inputs$ = new ImmerBehaviorSubject(initials() ?? {});
  }
  static of(schema, initials) {
    return new FormData(
      schema,
      () => isFunction(initials) ? initials() : initials
    );
  }
  inputs$;
  get inputs() {
    return this.inputs$.value;
  }
  #fields = /* @__PURE__ */ new Map();
  field(pointerOrPath) {
    return this.#fields.get(
      isString(pointerOrPath) ? pointerOrPath : JSONPointer.create(pointerOrPath)
    );
  }
  delete(pointerOrPath) {
    return this.#fields.delete(
      isString(pointerOrPath) ? pointerOrPath : JSONPointer.create(pointerOrPath)
    );
  }
  *fields(typedef, value = this.inputs$.value, path = []) {
    for (const [nameOrIdx, _, t] of typedef.entries(value, EmptyContext)) {
      if (nameOrIdx === Schema.RecordKey) {
        continue;
      }
      if (t.type === "never") {
        continue;
      }
      const p = [...path, nameOrIdx];
      const name = JSONPointer.create(p);
      let f = this.#fields.get(name);
      if (!f) {
        f = new FieldImpl(this, t, p);
        this.#fields.set(name, f);
      }
      yield f;
    }
  }
  submit = () => {
    const values = {};
    let hasError = false;
    for (const [_, f] of this.#fields) {
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
          set(values, f.path, { ...value });
        } else {
          set(values, f.path, value);
        }
      }
    }
    if (hasError) {
      return;
    }
    this.next(values);
  };
  reset() {
    for (let [_, f] of this.#fields) {
      f.reset();
    }
  }
  setErrors = (errors = {}) => {
    for (const [pointer, error] of Object.entries(errors)) {
      for (const [instancePath, f] of this.#fields) {
        if (instancePath == pointer) {
          f.next((state) => {
            state.error = error;
          });
        }
      }
    }
  };
}
class FieldImpl extends ImmerBehaviorSubject {
  constructor(form$, typedef, path, pointer = JSONPointer.create(path)) {
    super({
      initial: get(form$.inputs$.value, path, FieldImpl.defaultValue(typedef))
    });
    this.form$ = form$;
    this.typedef = typedef;
    this.path = path;
    this.pointer = pointer;
  }
  static defaultValue = (def) => {
    try {
      return def.create(void 0);
    } catch (e) {
      return;
    }
  };
  get input() {
    return get(
      this.form$.inputs$.value,
      this.path,
      FieldImpl.defaultValue(this.typedef)
    );
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
  #optional;
  get optional() {
    if (typeof this.#optional === "undefined") {
      this.#optional = !this.validate(void 0);
    }
    return this.#optional;
  }
  #input$;
  get input$() {
    if (typeof this.#input$ === "undefined") {
      this.#input$ = rx(
        this.form$.inputs$,
        map(
          (v) => get(v, this.path, FieldImpl.defaultValue(this.typedef))
        ),
        distinctUntilChanged()
      );
    }
    return this.#input$;
  }
  focus = () => {
    this.next((state) => {
      state.focus = true;
      state.visited = true;
    });
  };
  blur = () => {
    this.next((state) => {
      state.focus = false;
      state.touched = true;
    });
  };
  reset = () => {
    this.form$.inputs$.next((inputs) => {
      set(inputs, this.path, this.value.initial);
    });
    this.next({ initial: this.value.initial });
  };
  update = (v) => {
    this.form$.inputs$.next((inputs) => {
      set(inputs, this.path, v);
    });
    this.next((state) => {
      state.dirty = v !== state.initial;
      state.error = this.validate(v) ?? null;
    });
  };
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
}

const label = defineModifier(
  (type, label2) => {
    return annotate({ label: label2 }).modify(type);
  }
);
const hint = defineModifier(
  (type, hint2) => {
    return annotate({ hint: hint2 }).modify(type);
  }
);
const inputBy = defineModifier(
  (type, inputBy2) => {
    return annotate({ inputBy: inputBy2 }).modify(type);
  }
);

export { FormData as F, hint as h, inputBy as i, label as l };
