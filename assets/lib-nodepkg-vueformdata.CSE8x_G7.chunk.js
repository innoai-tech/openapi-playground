import { Dt as t, E as e, F as i, I as s, It as r, L as a, Mt as n, R as l, Tt as u, bt as h, m as o, p as f, yt as p } from "./vendor-innoai-tech-vuekit.Cd-yk6hr.chunk.js";
import { h as d, i as c, x as v } from "./vendor-rxjs.CLbJyizg.chunk.js";
var m = class e extends v {
	static of(t, i) {
		return new e(t, () => h(i) ? i() : i);
	}
	inputs$;
	constructor(t, e) {
		super(), this.typedef = t, this.inputs$ = new f(e() ?? {});
	}
	get inputs() {
		return this.inputs$.value;
	}
	#t = /* @__PURE__ */ new Map();
	field(t) {
		return this.#t.get(n(t) ? t : i.create(t));
	}
	delete(t) {
		return this.#t.delete(n(t) ? t : i.create(t));
	}
	*fields(t, e = this.inputs$.value, r = []) {
		for (let [n, l, u] of t.entries(e, a)) {
			if (n === s.RecordKey || "never" === u.type) continue;
			let t = [...r, n], e = i.create(t), a = this.#t.get(e);
			a || (a = new y(this, u, t), this.#t.set(e, a)), yield a;
		}
	}
	submit = () => {
		let e = {}, i = !1;
		for (let [s, r] of this.#t) {
			if (r.blur(), r.state.error) {
				i = !0;
				continue;
			}
			let s = r.input, a = r.validate(s);
			if (a) {
				r.next((t) => {
					t.error = a;
				}), i = !0;
				continue;
			}
			p(s) || (u(s) ? t(e, r.path, { ...s }) : t(e, r.path, s));
		}
		i || this.next(e);
	};
	reset() {
		for (let [t, e] of this.#t) e.reset();
	}
	setErrors = (t = {}) => {
		for (let [e, i] of Object.entries(t)) for (let [t, s] of this.#t) t == e && s.next((t) => {
			t.error = i;
		});
	};
}, y = class e extends f {
	static defaultValue = (t) => {
		try {
			return t.create(void 0);
		} catch (t) {
			return;
		}
	};
	constructor(t, s, a, n = i.create(a)) {
		super({ initial: r(t.inputs$.value, a, e.defaultValue(s)) }), this.form$ = t, this.typedef = s, this.path = a, this.pointer = n;
	}
	get input() {
		return r(this.form$.inputs$.value, this.path, e.defaultValue(this.typedef));
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
		return void 0 === this.#i && (this.#i = o(this.form$.inputs$, d((t) => r(t, this.path, e.defaultValue(this.typedef))), c())), this.#i;
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
		this.form$.inputs$.next((e) => {
			t(e, this.path, this.value.initial);
		}), this.next({ initial: this.value.initial });
	};
	update = (e) => {
		this.form$.inputs$.next((i) => {
			t(i, this.path, e);
		}), this.next((t) => {
			t.dirty = e !== t.initial, t.error = this.validate(e) ?? null;
		});
	};
	validate(t) {
		let e = "array" !== this.typedef.type || p(t) ? t : t.filter((t) => !p(t)), [i] = this.typedef.validate(e);
		if (!i) return;
		let s = i.failures().filter((t) => "never" !== t.type && 0 === t.path.length);
		if (0 !== s.length) return s.map((t) => void 0 === t.value ? "字段不能为空" : t.message);
	}
	destroy() {
		this.form$.delete(this.name);
	}
};
let $ = l((t, i) => e({ label: i }).modify(t)), x = l((t, i) => e({ hint: i }).modify(t)), g = l((t, i) => e({ inputBy: i }).modify(t));
export { m as i, g as n, $ as r, x as t };
