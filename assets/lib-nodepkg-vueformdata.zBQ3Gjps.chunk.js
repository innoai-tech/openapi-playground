import { J as t, c as e, j as i, y as s } from "./vendor-innoai-tech-fetcher.BFkhBuB3.chunk.js";
import { E as r, F as a, I as n, L as u, Lt as o, Pt as l, R as h, m as f, p } from "./vendor-innoai-tech-vuekit.D5qvH0e4.chunk.js";
import { _ as d, m as c } from "./vendor-innoai-tech-vueuikit.pIVJTYGn.chunk.js";
import { r as v } from "./vendor-rxjs.nCW51blg.chunk.js";
var m = class e extends s {
	static of(i, s) {
		return new e(i, () => t(s) ? s() : s);
	}
	inputs$;
	constructor(t, e) {
		super(), this.typedef = t, this.inputs$ = new p(e() ?? {});
	}
	get inputs() {
		return this.inputs$.value;
	}
	#t = /* @__PURE__ */ new Map();
	field(t) {
		return this.#t.get(d(t) ? t : a.create(t));
	}
	delete(t) {
		return this.#t.delete(d(t) ? t : a.create(t));
	}
	*fields(t, e = this.inputs$.value, i = []) {
		for (let [s, r, o] of t.entries(e, u)) {
			if (s === n.RecordKey || "never" === o.type) continue;
			let t = [...i, s], e = a.create(t), r = this.#t.get(e);
			r || (r = new y(this, o, t), this.#t.set(e, r)), yield r;
		}
	}
	submit = () => {
		let t = {}, e = !1;
		for (let [s, r] of this.#t) {
			if (r.blur(), r.state.error) {
				e = !0;
				continue;
			}
			let s = r.input, a = r.validate(s);
			if (a) {
				r.next((t) => {
					t.error = a;
				}), e = !0;
				continue;
			}
			i(s) || (l(s) ? c(t, r.path, { ...s }) : c(t, r.path, s));
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
}, y = class t extends p {
	static defaultValue = (t) => {
		try {
			return t.create(void 0);
		} catch (t) {
			return;
		}
	};
	constructor(e, i, s, r = a.create(s)) {
		super({ initial: o(e.inputs$.value, s, t.defaultValue(i)) }), this.form$ = e, this.typedef = i, this.path = s, this.pointer = r;
	}
	get input() {
		return o(this.form$.inputs$.value, this.path, t.defaultValue(this.typedef));
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
		return void 0 === this.#i && (this.#i = f(this.form$.inputs$, e((e) => o(e, this.path, t.defaultValue(this.typedef))), v())), this.#i;
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
			c(t, this.path, this.value.initial);
		}), this.next({ initial: this.value.initial });
	};
	update = (t) => {
		this.form$.inputs$.next((e) => {
			c(e, this.path, t);
		}), this.next((e) => {
			e.dirty = t !== e.initial, e.error = this.validate(t) ?? null;
		});
	};
	validate(t) {
		let e = "array" !== this.typedef.type || i(t) ? t : t.filter((t) => !i(t)), [s] = this.typedef.validate(e);
		if (!s) return;
		let r = s.failures().filter((t) => "never" !== t.type && 0 === t.path.length);
		if (0 !== r.length) return r.map((t) => void 0 === t.value ? "字段不能为空" : t.message);
	}
	destroy() {
		this.form$.delete(this.name);
	}
};
let $ = h((t, e) => r({ label: e }).modify(t)), x = h((t, e) => r({ hint: e }).modify(t)), g = h((t, e) => r({ inputBy: e }).modify(t));
export { m as i, g as n, $ as r, x as t };
