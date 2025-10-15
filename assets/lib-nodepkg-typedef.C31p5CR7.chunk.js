import { n as e, r as t } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { Q as r, U as i, X as n, Y as a, Z as s, ct as o, ft as c, mt as l, ot as u, q as d, ut as p } from "./vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js";
import { Q as m } from "./index.DdIYnUiz.entry.js";
var f, h = t(m()), y = class {
	static getOwnPropertyNames(e) {
		return h.getMetadataKeys(e);
	}
	static get(e, t) {
		return h.getMetadata(t, e);
	}
	static define(e, t, n, a) {
		if (e && e.constructor && e.constructor != Object) {
			if (r(n)) return void h.defineMetadata(t, i(h.getMetadata(t, e) ?? a ?? {}, n), e);
			h.defineMetadata(t, n, e);
		}
	}
};
let g = (e) => "function" == typeof e && `${e}`.startsWith("class"), v = {
	path: [],
	branch: []
};
var w = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let r, { message: i, explanation: n,...a } = e, { path: s } = e, o = 0 === s.length ? i : `At path: ${s.join(".")} -- ${i}`;
		super(n ?? o), null != n && (this.cause = o), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let b = (e) => !!e && e[x] == x, x = Symbol("Type");
function* O(e, t, r, i) {
	let a, s = e;
	for (let e of (("object" != typeof (a = s) || "function" != typeof a[Symbol.iterator]) && (s = [s]), s)) {
		let a = function(e, t, r, i) {
			if (!0 === e) return;
			let a = {};
			a = !1 === e ? {} : p(e) ? { message: e } : e;
			let { path: s, branch: o, node: c } = t, { type: l } = r, { refinement: u, message: d = n(i) ? "Required" : `Expected a value of type \`${l}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${i}\`` } = a;
			return {
				...a,
				value: i,
				type: l,
				refinement: u,
				key: s[s.length - 1],
				path: s,
				branch: o,
				node: c,
				message: d
			};
		}(e, t, r, i);
		a && (yield a);
	}
}
function j(e, t, r = {}) {
	let i = P(e, t, r), n = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(i);
	return n[0] ? [new w(n[0], function* () {
		for (let e of i) e[0] && (yield e[0]);
	}), void 0] : [void 0, n[1]];
}
function* P(e, t, r = {}) {
	let { path: i = [], branch: n = [e], node: a = { current: t }, coerce: s = !1, mask: o = !1 } = r, l = {
		mask: o,
		path: i,
		branch: n,
		node: a
	}, u = e;
	if (s) {
		let r = t.coercer(e, l);
		void 0 != r && (u = r);
	}
	let d = $.valid;
	for (let i of O(t.validator(u, l), l, t, e)) i.explanation = r.message, d = $.not_valid, yield [i, void 0];
	for (let [e, p, m] of t.entries(u, l)) for (let t of P(p, m, {
		path: void 0 === e ? i : [...i, e],
		branch: void 0 === e ? n : [...n, p],
		node: void 0 === e ? a : {
			current: m,
			parent: a
		},
		coerce: s,
		mask: o,
		message: r.message
	})) t[0] ? (d = null != t[0].refinement ? $.not_refined : $.not_valid, yield [t[0], void 0]) : s && (p = t[1], void 0 === e ? u = p : u instanceof Map ? u.set(e, p) : u instanceof Set ? u.add(p) : c(u) && (u[e] = p));
	if (d !== $.not_valid) for (let i of O(t.refiner(u, l), l, t, e)) i.explanation = r.message, d = $.not_refined, yield [i, void 0];
	d === $.valid && (yield [void 0, u]);
}
var $ = ((f = $ || {})[f.valid = 0] = "valid", f[f.not_refined = 1] = "not_refined", f[f.not_valid = 2] = "not_valid", f);
let M = (e) => (...t) => {
	let r = e(...t), i = (e, t) => {
		let i = y.get(e, t) ?? {};
		y.define(e, t, {
			...i,
			type: r
		});
	};
	return i.toString = () => `@type:${r.type}`, new Proxy(i, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, S = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		y.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var N = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new k().toValue(e);
	static extractMeta = (t) => new k().toValue(t.meta ?? t[e.meta]);
	static create(t, r, i) {
		let a, s = r ?? t[e.underlying]?.schema ?? {};
		return new Proxy({}, {
			ownKeys(e) {
				let r = /* @__PURE__ */ new Map();
				if (i) {
					if (t[i]) for (let e of Object.getOwnPropertyNames(t[i])) r.set(e, e);
					if (s && s[i]) for (let e of Object.getOwnPropertyNames(s[i])) r.set(e, e);
				} else {
					for (let e of Object.getOwnPropertyNames(t)) r.set(e, e);
					if (s) for (let e of Object.getOwnPropertyNames(s)) r.set(e, e);
				}
				return [...r.keys()];
			},
			get(r, o) {
				if (o === e.meta) return a ??= e.create(t, s, e.meta);
				if (i) {
					if (l(t)) {
						let e = t?.[i]?.[o];
						if (!n(e)) return e;
					}
					return s ? s?.[i]?.[o] : void 0;
				}
				if (l(t)) {
					let e = t?.[o];
					if (!n(e)) return e;
				}
				return s ? s[o] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return E(e.schema, t);
	}
	static metaProp(e, t) {
		return _(e.schema, t);
	}
}, E = (e, t) => {
	if (l(e)) return e[t] ?? (e[N.unwrap] ? E(e[N.unwrap]().schema, t) : void 0);
}, _ = (e, t) => {
	if (l(e)) return e[N.meta]?.[t] ?? (e[N.unwrap] ? _(e[N.unwrap]().schema, t) : void 0);
}, k = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!n(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[N.unwrap]) return this.toValue(e[N.unwrap]());
			if (o(e)) return this.toArray(e);
			if (e.constructor === Object) return this.toObject(e);
		}
		return e;
	}
	toObject(e) {
		let t = {};
		for (let r of Object.getOwnPropertyNames(e)) t[r] = this.toValue(e[r]);
		return t;
	}
	toArray(e) {
		let t = [];
		for (let r of e) t.push(this.toValue(r));
		return t;
	}
}, I = class e {
	static parse(t) {
		if ("" === t) return [];
		if ("/" === t) return [""];
		if ("/" !== t.charAt(0)) throw Error("Invalid JSON pointer: " + t);
		let r = t.substring(1).split(/\//);
		return r.map((t, i) => e.unescape(t, i === r.length - 1));
	}
	static create(t = []) {
		return 0 === t.length ? "" : "/" + t.map(e.escape).join("/");
	}
	static unescape(e, t) {
		return "" == e && t ? N.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == N.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let i = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < i.length; e++) {
			let r = i[e];
			if (e > 0 && r == N.RecordKey) return i[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, q = class e {
	static define = M((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let i = t.type ?? r ?? new e({});
		return t.modifies ? i.use(...t.modifies ?? []) : i;
	};
	[x] = x;
	schema;
	constructor(e) {
		if (e) {
			this.schema = N.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[N.meta] : {};
	}
	get type() {
		return this.schema?.type ?? "unknown";
	}
	refiner(e, t) {
		return [];
	}
	validator(e, t) {
		return [];
	}
	coercer(e, t) {
		if (p(e)) {
			let t = e.trim();
			if (t.length >= 2) {
				if (t.startsWith("{") && t.endsWith("}")) try {
					return JSON.parse(t);
				} catch (e) {}
				if (t.startsWith("[") && t.endsWith("]")) try {
					return JSON.parse(t);
				} catch (e) {}
			}
		}
		return e;
	}
	*entries(e, t = v) {}
	validate(e, t = {}) {
		return j(e, this, t);
	}
	create(e) {
		let t = j(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = j(e, this, {
			coerce: !0,
			mask: !0
		});
		if (t[0]) throw t[0];
		return t[1];
	}
	use(...e) {
		return e.reduce((e, t) => t.modify(e), this);
	}
	optional() {
		return T.create(this);
	}
	default(e) {
		return R.create(this, e);
	}
}, L = class e extends q {
	static of(t, r) {
		return new e({
			...r,
			[N.underlying]: t
		});
	}
	static refine(t, r, i) {
		return new class extends e {
			*refiner(e, n) {
				for (let a of (yield* this.unwrap.refiner(e, n), O(r(e, n), n, t, e))) yield {
					...a,
					refinement: Object.keys(i).join(",")
				};
			}
		}({
			...i,
			[N.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[N.unwrap];
		return e ? e() : this.schema[N.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = v) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return O(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return O(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, R = class e extends L {
	static create = M((t, r) => new e({
		default: r,
		[N.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, T = class e extends L {
	static create = M((t) => new e({
		[N.underlying]: t,
		[N.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, K = class e extends L {
	static create = M((t, r) => new e({
		$ref: t,
		[N.unwrap]: r
	}));
}, A = class e extends q {
	static create = M(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, V = class e extends q {
	static create = M(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return s(e);
	}
	coercer(e, t) {
		return e;
	}
}, J = class e extends q {
	static create = M(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return p(e);
	}
	coercer(e, t) {
		return n(e) || s(e) ? e : String(e);
	}
}, W = class e extends q {
	static create = M(() => new e({ type: "number" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return u(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseFloat(String(e)) : void 0;
			if (u(t)) return t;
		} catch (e) {}
	}
}, C = class e extends q {
	static create = M(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return d(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return d(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, F = class e extends q {
	static create = M(() => new e({ type: "boolean" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return a(e);
	}
	coercer(e, t) {
		try {
			return void 0 != e ? "true" === String(e) : void 0;
		} catch (e) {
			return;
		}
	}
}, Q = class e extends q {
	static create = M(() => new e({
		type: "string",
		format: "binary"
	}));
	get type() {
		return "binary";
	}
	validator(e, t) {
		return e instanceof File || e instanceof Blob;
	}
	coercer(e, t) {
		return e;
	}
}, B = class e extends q {
	static create = M(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = M((t) => new e({ enum: [t] }));
	static nativeEnum = M((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, D = class e extends q {
	static create = M(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, U = class e extends q {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, i] of Object.entries(e)) N.schemaProp(i, N.optional) || t.push(r);
			return t;
		};
		return M(() => {
			if (t) {
				if (g(t)) {
					let i = new t(), n = {};
					for (let [e, t] of Object.entries(i)) n[e] = B.literal(t);
					for (let e of y.getOwnPropertyNames(i)) {
						let t = y.get(i, e);
						if (t) {
							let r = q.fromTypeObject(t, n[e]);
							e in n ? n[e] = r.default(n[e].schema?.enum?.[0]) : n[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: n,
						required: r(n),
						additionalProperties: D.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
					additionalProperties: D.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: D.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = v) {
		if (c(e)) {
			let r = new Set(Object.keys(e));
			if (this.schema.properties) for (let t in this.schema.properties) r.delete(t), yield [
				t,
				e[t],
				this.schema.properties[t]
			];
			if (t.node?.current.type !== "intersection") for (let t of r) yield [
				t,
				e[t],
				this.schema.additionalProperties
			];
		}
	}
	validator(e, t) {
		return c(e);
	}
	coercer(e, t) {
		if (c(e)) {
			let r = { ...e };
			if (t.mask) {
				let e = this.schema.properties;
				if (e) for (let t in r) void 0 === e[t] && delete r[t];
			}
			return r;
		}
		return super.coercer(e, t);
	}
}, X = class e extends q {
	static create = M((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (c(e)) for (let [t, r] of Object.entries(e)) yield [
			N.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			r,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return c(e);
	}
}, Y = class e extends q {
	static create = M((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = v) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return o(e);
	}
	coercer(e) {
		return o(e) ? e.slice() : e;
	}
}, Z = class e extends q {
	static create = M((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (o(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? D.create()
			];
		}
	}
	validator(e) {
		return o(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return o(e) ? e.slice() : e;
	}
}, z = class e extends q {
	static create = M((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = v) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* O(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* O(r.refiner(e, t), t, this, e);
	}
}, G = class e extends q {
	static create = M((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return M(() => {
			let i = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, n] of Object.entries(r[0])) if (N.schemaProp(n, "$ref")) i.push(n);
			else {
				let r = { [t]: B.literal(e) };
				for (let [e, t, i] of n.entries({}, v)) r[String(e)] = i;
				i.push(U.create(r));
			}
			else for (let e of r) g(e) && i.push(U.create(e));
			return new e({
				oneOf: i,
				discriminator: { propertyName: t }
			});
		})();
	}
	_discriminatorPropName;
	discriminatorPropType(e) {
		return this._discriminatorPropName ??= (() => {
			let t = this.schema.discriminator?.propertyName ?? "", r = [], i = [];
			for (let e of this.schema.oneOf) {
				let n = N.schemaProp(e, "properties")[t];
				if (!n) continue;
				let a = n.schema.enum;
				a && r.push(...a), i.push(n.meta);
			}
			return L.of(B.create(r), { [N.meta]: N.create(i[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let i = N.schemaProp(r, "properties")[e];
				if (i) {
					let [e, r] = i.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let i = {};
					for (let [t, n] of Object.entries(N.schemaProp(r, "properties"))) t !== e && (i[t] = n);
					this._discriminatorMappingProps.set(t, i);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = v) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			yield* U.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).entries(e, t);
		}
	}
	get type() {
		return "union";
	}
	coercer(e) {
		for (let t of this.schema.oneOf) {
			let [r, i] = j(e, t, { coerce: !0 });
			if (!r) return i;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			return U.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).validator(e, t);
		}
		let r = [];
		for (let i of this.schema.oneOf) {
			let [ ...n] = P(e, i, t), [a] = n;
			if (a && !a[0]) return [];
			for (let [e] of n) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
}, H = e({
	annotate: () => eq,
	any: () => et,
	array: () => ej,
	binary: () => ey,
	boolean: () => eh,
	custom: () => eE,
	defaults: () => ek,
	discriminatorMapping: () => eN,
	enums: () => eg,
	exclusiveMaximum: () => em,
	exclusiveMinimum: () => ed,
	integer: () => el,
	intersection: () => eM,
	literal: () => ew,
	maxItems: () => e$,
	maxLength: () => es,
	maximum: () => ep,
	minItems: () => eP,
	minLength: () => ea,
	minimum: () => eu,
	multipleOf: () => ef,
	nativeEnum: () => ev,
	never: () => er,
	nil: () => ei,
	number: () => ec,
	object: () => eb,
	optional: () => eI,
	pattern: () => eo,
	record: () => ex,
	ref: () => ee,
	refine: () => e_,
	string: () => en,
	tuple: () => eO,
	union: () => eS
});
let ee = K.create, et = A.create, er = D.create, ei = V.create, en = J.create, ea = S((e, t, r) => L.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t })), es = S((e, t, r) => L.refine(e, (e) => !!e && e.length <= t || (r ?? `Expected string value length less than or equal ${t}, but received "${e}"`), { maxLength: t })), eo = S((e, t, r) => {
	let i = L.refine(e, (i) => !!t.test(i) || (r ?? `Expected a ${e.type} matching \`/${t.source}/\` but received "${i}"`), { pattern: t.source });
	return r ? i.use(eq({ "x-pattern-err-msg": r })) : i;
}), ec = W.create, el = C.create, eu = S((e, t, r) => L.refine(e, (e) => e >= t || (r ?? `Expected value great than or equal ${t}, but received "${e}"`), { minimum: t })), ed = S((e, t, r) => L.refine(e, (e) => e > t || (r ?? `Expected value great than ${t}, but received "${e}"`), { exclusiveMinimum: t })), ep = S((e, t, r) => L.refine(e, (e) => e <= t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { maximum: t })), em = S((e, t, r) => L.refine(e, (e) => e < t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { exclusiveMaximum: t })), ef = S((e, t, r) => L.refine(e, (e) => e % t == 0 || (r ?? `Expected value multiple of ${t}, but received "${e}"`), { multipleOf: t })), eh = F.create, ey = Q.create, eg = B.create, ev = B.nativeEnum, ew = B.literal, eb = U.create, ex = X.create, eO = Z.create, ej = Y.create, eP = S((e, t, r) => L.refine(e, (e) => !!o(e) && e.length >= t || (r ?? `Expected array value at least ${t}, but received "${e?.length}"`), { minItems: t })), e$ = S((e, t, r) => L.refine(e, (e) => !!o(e) && e.length <= t || (r ?? `Expected array value  ${t}, but received "${e?.length}"`), { maxItems: t })), eM = z.create, eS = G.create, eN = G.discriminatorMapping, eE = q.define, e_ = L.refine, ek = S((e, t) => R.create(e, t)), eI = S((e) => T.create(e)), eq = S((e, t) => L.of(e, { [N.meta]: t })), eL = (e) => e.split("/")?.findLast(() => !0) ?? "";
var eR = class e {
	static decode(t, r) {
		return !1 === t ? er() : new e(r).decode(t);
	}
	def = /* @__PURE__ */ new Map();
	constructor(e) {
		this.resolveRef = e;
	}
	decode(e) {
		let t = structuredClone(e), r = this._decode(t), i = !1;
		if (t?.title && (r = r.use(eq({ title: t?.title })), i = !0), t?.description) if (i) r = r.use(eq({ description: t?.description }));
		else {
			let [e, ...i] = t?.description.split(/[.\n]/);
			r = r.use(eq({
				title: e,
				description: i ? i.join("\n").trim() : void 0
			}));
		}
		if (t) {
			for (let e of eF) if (!n(t[e])) {
				if ("pattern" == e) {
					r = r.use(eo(new RegExp(t[e]), t["x-pattern-err-msg"])), delete t[e];
					continue;
				}
				let i = H[e];
				i && (r = r.use(i(t[e])), delete t[e]);
			}
			delete t.title, delete t.description, Object.keys(t).length > 0 && (r = r.use(eq(t)));
		}
		return r;
	}
	ref = (e) => {
		let t = this.def.get(e);
		if (t) return t;
		throw Error(`undefined type ${e}`);
	};
	_decode(e) {
		let t = eB(e);
		if (t.$ref) {
			let [e, r] = this.resolveRef(t.$ref);
			return this.def.has(r) || (this.def.set(r, et()), this.def.set(r, this.decode(e))), ee(r, () => this.ref(r));
		}
		if (t.enum) {
			let e = eg(t.enum);
			return t["x-enum-labels"] ? e.use(eq({ enumLabels: t["x-enum-labels"] })) : e;
		}
		if (t.discriminator) {
			let e = t.discriminator.propertyName;
			if (e) {
				let r = {};
				if (t.discriminator.mapping) {
					let e = t.discriminator.mapping;
					if (e) for (let t of Object.keys(e).toSorted()) r[t] = this.decode(e[t]);
				}
				if (t.oneOf) for (let i of t.oneOf) {
					let t = this.decode(i), a = N.schemaProp(t, "properties")?.[e];
					if (a) {
						let e = N.schemaProp(a, "enum")?.[0];
						n(e) || (r[`${e}`] = t);
					}
				}
				return eN(e, r);
			}
		}
		if (t.oneOf) {
			let e = t.oneOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : eS(...e);
		}
		if (t.allOf) {
			let e = t.allOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : eM(...e);
		}
		if (eT(t)) {
			if (t.properties) {
				let e = t.required ?? [], r = {};
				for (let [i, n] of Object.entries(t.properties)) {
					let t = this.decode(n);
					e.includes(i) || (t = t.optional()), r[i] = t;
				}
				return eb(r);
			}
			let e = t.additionalProperties ?? {};
			return e ? ex(this.decode(t.propertyNames ?? { type: "string" }), this.decode(e)) : eb();
		}
		return eA(t) ? o(t.items) ? eO(t.items.map((e) => this.decode(e))) : ej(this.decode(t.items)) : eJ(t) ? "binary" === t.format ? ey() : en() : eV(t) ? "integer" === t.type ? el() : ec() : eW(t) ? eh() : eK(t) ? ei() : et();
	}
}, eT = (e) => "object" === e.type, eK = (e) => "null" === e.type, eA = (e) => "array" === e.type, eV = (e) => "number" === e.type || "integer" === e.type, eJ = (e) => "string" === e.type, eW = (e) => "boolean" === e.type, eC = {
	object: [
		"properties",
		"additionalProperties",
		"propertyNames",
		"maxProperties",
		"minProperties"
	],
	array: [
		"contains",
		"items",
		"additionalItems",
		"unevaluatedItems",
		"maxItems",
		"minItems",
		"uniqueItems",
		"maxContains",
		"minContains"
	],
	string: [
		"pattern",
		"contentMediaType",
		"contentEncoding",
		"contentSchema",
		"maxLength",
		"minLength"
	],
	number: [
		"maximum",
		"minimum",
		"multipleOf",
		"exclusiveMaximum",
		"exclusiveMinimum"
	]
};
let eF = [
	"maxProperties",
	"minProperties",
	"maxItems",
	"minItems",
	"uniqueItems",
	"pattern",
	"maxLength",
	"minLength",
	"maximum",
	"minimum",
	"multipleOf",
	"exclusiveMaximum",
	"exclusiveMinimum"
];
var eQ = (e, t) => t.some((t) => Object.hasOwn(e, t)), eB = (e = {}) => {
	if (a(e)) return {};
	if (!e.type) {
		for (let t in eC) if (eQ(e, eC[t])) {
			e.type = t;
			break;
		}
	}
	e.const && (e.enum = [e.const]);
	let t = (t) => {
		e[t] && (e[t] = e[t].filter((r) => {
			let i = eB(r);
			return !!eQ(i, [
				"type",
				"$ref",
				"$id",
				"oneOf",
				"anyOf",
				"allOf"
			]) || ("allOf" === t && Object.assign(e, i), !1);
		}), e[t]?.length === 0 && (e[t] = void 0));
	};
	return t("allOf"), t("anyOf"), t("oneOf"), e;
};
export { ej as a, eg as c, en as d, I as f, b as g, S as h, et as i, eb as l, v as m, eL as n, eh as o, N as p, eq as r, eE as s, eR as t, ex as u };
