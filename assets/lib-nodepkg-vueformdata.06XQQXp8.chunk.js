import { $t as t, Bt as e, Jt as i, Kt as s, P as a, Vt as r, at as n, it as l, k as u, m as h, nt as o, p as f, q as p, rn as d, rt as c, v } from "./vendor-innoai-tech-vuekit.DnGUFH6p.chunk.js";
var y = class n extends a {
	static of(t, e) {
		return new n(t, () => r(e) ? e() : e);
	}
	inputs$;
	constructor(t, e) {
		super(), this.typedef = t, this.inputs$ = new f(e() ?? {});
	}
	get inputs() {
		return this.inputs$.value;
	}
	#t = /* @__PURE__ */ new Map();
	field(e) {
		return this.#t.get(t(e) ? e : o.create(e));
	}
	delete(e) {
		return this.#t.delete(t(e) ? e : o.create(e));
	}
	*fields(t, e = this.inputs$.value, i = []) {
		for (let [s, a, r] of t.entries(e, l)) {
			if (s === c.RecordKey || "never" === r.type) continue;
			let t = [...i, s], e = o.create(t), a = this.#t.get(e);
			a || (a = new $(this, r, t), this.#t.set(e, a)), yield a;
		}
	}
	submit = () => {
		let t = {}, a = !1;
		for (let [r, n] of this.#t) {
			if (n.blur(), n.state.error) {
				a = !0;
				continue;
			}
			let r = n.input, l = n.validate(r);
			if (l) {
				n.next((t) => {
					t.error = l;
				}), a = !0;
				continue;
			}
			e(r) || (s(r) ? i(t, n.path, { ...r }) : i(t, n.path, r));
		}
		a || this.next(t);
	};
	reset() {
		for (let [t, e] of this.#t) e.reset();
	}
	setErrors = (t = {}) => {
		for (let [e, i] of Object.entries(t)) for (let [t, s] of this.#t) t == e && s.next((t) => {
			t.error = i;
		});
	};
}, $ = class t extends f {
	static defaultValue = (t) => {
		try {
			return t.create(void 0);
		} catch (t) {
			return;
		}
	};
	constructor(e, i, s, a = o.create(s)) {
		super({ initial: d(e.inputs$.value, s, t.defaultValue(i)) }), this.form$ = e, this.typedef = i, this.path = s, this.pointer = a;
	}
	get input() {
		return d(this.form$.inputs$.value, this.path, t.defaultValue(this.typedef));
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
	#e;
	get optional() {
		return void 0 === this.#e && (this.#e = !this.validate(void 0)), this.#e;
	}
	#i;
	get input$() {
		return void 0 === this.#i && (this.#i = h(this.form$.inputs$, u((e) => d(e, this.path, t.defaultValue(this.typedef))), v())), this.#i;
	}
	focus = () => {
		this.next((t) => {
			t.focus = !0, t.visited = !0;
		});
	};
	blur = () => {
		this.next((t) => {
			t.focus = !1, t.touched = !0;
		});
	};
	reset = () => {
		this.form$.inputs$.next((t) => {
			i(t, this.path, this.value.initial);
		}), this.next({ initial: this.value.initial });
	};
	update = (t) => {
		this.form$.inputs$.next((e) => {
			i(e, this.path, t);
		}), this.next((e) => {
			e.dirty = t !== e.initial, e.error = this.validate(t) ?? null;
		});
	};
	validate(t) {
		let i = "array" !== this.typedef.type || e(t) ? t : t.filter((t) => !e(t)), [s] = this.typedef.validate(i);
		if (!s) return;
		let a = s.failures().filter((t) => "never" !== t.type && 0 === t.path.length);
		if (0 !== a.length) return a.map((t) => void 0 === t.value ? "字段不能为空" : t.message);
	}
	destroy() {
		this.form$.delete(this.name);
	}
};
let m = n((t, e) => p({ label: e }).modify(t)), g = n((t, e) => p({ hint: e }).modify(t)), x = n((t, e) => p({ inputBy: e }).modify(t));
export { y as i, x as n, m as r, g as t };
