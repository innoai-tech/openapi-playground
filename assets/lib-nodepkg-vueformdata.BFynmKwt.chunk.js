import { D as t, M as e, Q as i, X as s, at as r, d as a, f as n, g as l, ht as u, rt as h, ut as o } from "./vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js";
import { f, h as p, m as d, p as c, r as v } from "./lib-nodepkg-typedef.C31p5CR7.chunk.js";
var m = class t extends e {
	static of(e, s) {
		return new t(e, () => i(s) ? s() : s);
	}
	inputs$;
	constructor(t, e) {
		super(), this.typedef = t, this.inputs$ = new a(e() ?? {});
	}
	get inputs() {
		return this.inputs$.value;
	}
	#t = /* @__PURE__ */ new Map();
	field(t) {
		return this.#t.get(o(t) ? t : f.create(t));
	}
	delete(t) {
		return this.#t.delete(o(t) ? t : f.create(t));
	}
	*fields(t, e = this.inputs$.value, i = []) {
		for (let [s, r, a] of t.entries(e, d)) {
			if (s === c.RecordKey || "never" === a.type) continue;
			let t = [...i, s], e = f.create(t), r = this.#t.get(e);
			r || (r = new y(this, a, t), this.#t.set(e, r)), yield r;
		}
	}
	submit = () => {
		let t = {}, e = !1;
		for (let [i, a] of this.#t) {
			if (a.blur(), a.state.error) {
				e = !0;
				continue;
			}
			let i = a.input, n = a.validate(i);
			if (n) {
				a.next((t) => {
					t.error = n;
				}), e = !0;
				continue;
			}
			s(i) || (h(i) ? r(t, a.path, { ...i }) : r(t, a.path, i));
		}
		e || this.next(t);
	};
	reset() {
		for (let [t, e] of this.#t) e.reset();
	}
	setErrors = (t = {}) => {
		for (let [e, i] of Object.entries(t)) for (let [t, s] of this.#t) t == e && s.next((t) => {
			t.error = i;
		});
	};
}, y = class e extends a {
	static defaultValue = (t) => {
		try {
			return t.create(void 0);
		} catch (t) {
			return;
		}
	};
	constructor(t, i, s, r = f.create(s)) {
		super({ initial: u(t.inputs$.value, s, e.defaultValue(i)) }), this.form$ = t, this.typedef = i, this.path = s, this.pointer = r;
	}
	get input() {
		return u(this.form$.inputs$.value, this.path, e.defaultValue(this.typedef));
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
		return void 0 === this.#i && (this.#i = n(this.form$.inputs$, t((t) => u(t, this.path, e.defaultValue(this.typedef))), l())), this.#i;
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
			r(t, this.path, this.value.initial);
		}), this.next({ initial: this.value.initial });
	};
	update = (t) => {
		this.form$.inputs$.next((e) => {
			r(e, this.path, t);
		}), this.next((e) => {
			e.dirty = t !== e.initial, e.error = this.validate(t) ?? null;
		});
	};
	validate(t) {
		let e = "array" !== this.typedef.type || s(t) ? t : t.filter((t) => !s(t)), [i] = this.typedef.validate(e);
		if (!i) return;
		let r = i.failures().filter((t) => "never" !== t.type && 0 === t.path.length);
		if (0 !== r.length) return r.map((t) => void 0 === t.value ? "字段不能为空" : t.message);
	}
	destroy() {
		this.form$.delete(this.name);
	}
};
let $ = p((t, e) => v({ label: e }).modify(t)), g = p((t, e) => v({ hint: e }).modify(t)), x = p((t, e) => v({ inputBy: e }).modify(t));
export { m as i, x as n, $ as r, g as t };
