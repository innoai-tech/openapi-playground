import { $t as isString, Bt as isUndefined, Jt as set, Kt as isPlainObject, P as Subject, Vt as isFunction, at as defineModifier, it as EmptyContext, k as map, m as rx, nt as JSONPointer, p as ImmerBehaviorSubject, q as annotate, rn as get, rt as Schema, v as distinctUntilChanged } from "./vendor-innoai-tech-vuekit.CUMstO-e.chunk.js";
var FormData = class FormData extends Subject {
	static of(schema, initials) {
		return new FormData(schema, () => isFunction(initials) ? initials() : initials);
	}
	inputs$;
	constructor(typedef, initials) {
		super();
		this.typedef = typedef;
		this.inputs$ = new ImmerBehaviorSubject(initials() ?? {});
	}
	get inputs() {
		return this.inputs$.value;
	}
	#fields = /* @__PURE__ */ new Map();
	field(pointerOrPath) {
		return this.#fields.get(isString(pointerOrPath) ? pointerOrPath : JSONPointer.create(pointerOrPath));
	}
	delete(pointerOrPath) {
		return this.#fields.delete(isString(pointerOrPath) ? pointerOrPath : JSONPointer.create(pointerOrPath));
	}
	*fields(typedef, value = this.inputs$.value, path = []) {
		for (const [nameOrIdx, _, t] of typedef.entries(value, EmptyContext)) {
			if (nameOrIdx === Schema.RecordKey) continue;
			if (t.type === "never") continue;
			const p = [...path, nameOrIdx];
			const name = /* @__PURE__ */ JSONPointer.create(p);
			let f = /* @__PURE__ */ this.#fields.get(name);
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
			const err = /* @__PURE__ */ f.validate(value);
			if (err) {
				f.next((state) => {
					state.error = err;
				});
				hasError = true;
				continue;
			}
			if (!isUndefined(value)) if (isPlainObject(value)) set(values, f.path, { ...value });
			else set(values, f.path, value);
		}
		if (hasError) return;
		this.next(values);
	};
	reset() {
		for (let [_, f] of this.#fields) f.reset();
	}
	setErrors = (errors = {}) => {
		for (const [pointer, error] of Object.entries(errors)) for (const [instancePath, f] of this.#fields) if (instancePath == pointer) f.next((state) => {
			state.error = error;
		});
	};
};
var FieldImpl = class FieldImpl extends ImmerBehaviorSubject {
	static defaultValue = (def) => {
		try {
			return def.create(void 0);
		} catch (e) {
			return;
		}
	};
	constructor(form$, typedef, path, pointer = JSONPointer.create(path)) {
		super({ initial: /* @__PURE__ */ get(form$.inputs$.value, path, /* @__PURE__ */ FieldImpl.defaultValue(typedef)) });
		this.form$ = form$;
		this.typedef = typedef;
		this.path = path;
		this.pointer = pointer;
	}
	get input() {
		return get(this.form$.inputs$.value, this.path, /* @__PURE__ */ FieldImpl.defaultValue(this.typedef));
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
		if (typeof this.#optional === "undefined") this.#optional = !this.validate(void 0);
		return this.#optional;
	}
	#input$;
	get input$() {
		if (typeof this.#input$ === "undefined") this.#input$ = /* @__PURE__ */ rx(this.form$.inputs$, /* @__PURE__ */ map((v) => get(v, this.path, /* @__PURE__ */ FieldImpl.defaultValue(this.typedef))), /* @__PURE__ */ distinctUntilChanged());
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
		const v = this.typedef.type === "array" && !isUndefined(value) ? value.filter((v$1) => !isUndefined(v$1)) : value;
		const [err] = this.typedef.validate(v);
		if (!err) return;
		const failures = /* @__PURE__ */ err.failures().filter((v$1) => v$1.type !== "never" && v$1.path.length === 0);
		if (failures.length === 0) return;
		return failures.map((f) => {
			if (f.value === void 0) return "字段不能为空";
			return f.message;
		});
	}
	destroy() {
		this.form$.delete(this.name);
	}
};
const label = /* @__PURE__ */ defineModifier((type, label$1) => {
	return annotate({ label: label$1 }).modify(type);
});
const hint = /* @__PURE__ */ defineModifier((type, hint$1) => {
	return annotate({ hint: hint$1 }).modify(type);
});
const inputBy = /* @__PURE__ */ defineModifier((type, inputBy$1) => {
	return annotate({ inputBy: inputBy$1 }).modify(type);
});
export { FormData as i, inputBy as n, label as r, hint as t };
