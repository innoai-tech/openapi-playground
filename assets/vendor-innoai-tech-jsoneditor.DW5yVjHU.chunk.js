import { r as e, t } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { A as r, B as n, D as i, E as a, M as l, N as o, Q as s, S as d, X as p, _ as c, at as u, c as h, ct as y, d as f, dt as m, f as x, g as v, ht as b, j as g, m as C, mt as w, n as N, o as S, ot as E, p as $, r as A, rt as O, s as L, t as k, ut as H, w as M } from "./vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js";
import { a as P, d as V, f as D, i as I, l as T, m as J, p as W, u as B } from "./lib-nodepkg-typedef.C31p5CR7.chunk.js";
import { d as _, f as j, n as R, o as Z, s as z, t as X } from "./vendor-innoai-tech-vueuikit.pf1Bh6eQ.chunk.js";
import { t as F } from "./lib-nodepkg-vuemarkdown.R8axF3Ac.chunk.js";
import { i as U, r as K } from "./lib-nodepkg-vuematerial.M8enR1gt.chunk.js";
import { X as Q, Z as q, et as G, n as Y, nt as ee } from "./index.DdIYnUiz.entry.js";
var et, er, en = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", ei = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", ea = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z", el = "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z", eo = "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z", es = "M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z", ed = "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z", ep = "M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M16 17V15H8V17H16M16 11L12 7L8 11H10.5V14H13.5V11H16Z";
let ec = (e) => y(e) ? e : p(e) ? [] : [e], eu = ((et = {})[et.NONE = 0] = "NONE", et[et.EXACT = 1] = "EXACT", et[et.PREFIX = 2] = "PREFIX", et), eh = ((er = {}).NONE = "NONE", er.ADD = "ADD", er.EDIT = "EDIT", er.DELETE = "DELETE", er);
var ey = class e extends o {
	static of(t, r) {
		return new e(t, r ?? ("array" == t.type ? [] : {}));
	}
	#e = new f({});
	constructor(e, t) {
		super((e) => {
			let t = this.#e.subscribe(e);
			return () => {
				t.unsubscribe();
			};
		}), this.typedef = e, this.initials = t, this.#e.next(t);
	}
	initialsAt(e) {
		return 0 == e.length ? this.initials : b(this.initials, e);
	}
	update(e, t, r, n) {
		if (console.log("[json-editor]", "update", JSON.stringify(e), this.typedef.type), this.#t.next({}), 0 == e.length) return void this.#e.next(t);
		s(t) ? this.#e.next((i) => {
			let a = b(i, e, r);
			n && "array" == n.type && !y(a) && (a = ec(a)), t(a), u(i, e, a);
		}) : this.#e.next((r) => {
			u(r, e, t);
		});
	}
	delete(e) {
		0 != e.length && (console.log("[json-editor]", "delete", e), this.#e.next((t) => {
			let r = m(e);
			if (E(r)) {
				let n = e.slice(0, e.length - 1), i = n.length > 0 ? b(t, n) : t;
				if (y(i)) return void i.splice(r, 1);
			}
			let n = e.slice(0, e.length - 1), i = n.length > 0 ? b(t, n) : t;
			delete i[r];
		}));
	}
	#t = new f({});
	#r = new f({});
	get error$() {
		return this.#t;
	}
	get foldedPointerPrefixes$() {
		return this.#r;
	}
	errorAt$(e) {
		let t = this.#n(e);
		return x(this.error$, i((e) => e[t]), v());
	}
	foldedPrefix$(e) {
		let t = this.#n(e);
		return x(this.foldedPointerPrefixes$, i((e) => {
			for (let [r] of Object.entries(e)) {
				if (r === t) return eu.EXACT;
				if (t.startsWith(r)) return eu.PREFIX;
			}
			return eu.NONE;
		}), v());
	}
	#n(e) {
		return H(e) ? e : D.create(e);
	}
	toggleFold(e) {
		let t = this.#n(e);
		this.#r.next((e) => {
			Object.hasOwn(e, t) ? delete e[t] : e[t] = !0;
		});
	}
	setError(e, t) {
		let r = this.#n(e);
		this.#t.next((e) => {
			null === t ? delete e[r] : e[r] = t;
		});
	}
};
let ef = k(() => new ey(T(), {})), em = k(() => ({}));
var ex = Z("span", { displayName: "ActionToolbar" })({
	px: 2,
	pos: "relative",
	visibility: "hidden",
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	display: "flex",
	alignItems: "center"
}), ev = Z(K, { displayName: "ActionBtn" })({
	transition: "none",
	width: 24,
	height: 24,
	rounded: "xs",
	[`& ${U}`]: { svg: {
		width: 16,
		height: 16
	} }
}), eb = Z("span", { displayName: "TextBox" })({
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 12,
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	py: 4,
	wordBreak: "keep-all",
	whiteSpace: "nowrap"
}), eg = Z(eb, { displayName: "TokenView" })({
	font: "code",
	opacity: .3
}), eC = Z(ex, { displayName: "PropLeading" })({
	position: "absolute",
	ml: -28
}), ew = Z(eb, { displayName: "PropNameView" })({
	position: "relative",
	display: "flex",
	alignItems: "center",
	userSelect: "none",
	_deprecated: { textDecoration: "line-through" },
	_optional: { "&:after": {
		content: "\"?\"",
		color: "sys.secondary",
		opacity: .58
	} }
}), eN = A((e, { slots: t }) => () => q(ew, {
	"data-deprecated": e.deprecated,
	"data-optional": e.optional,
	"data-nullable": e.nullable,
	children: [t.leading && Q(eC, {
		"data-visible-on-hover": !0,
		children: t.leading()
	}), t.default?.()]
}), {
	displayName: "PropName",
	props: [
		"deprecated",
		"optional",
		"nullable"
	]
}), eS = class e extends f {
	static from(t) {
		let n = new e(!1);
		return x(t, C((e) => e ? d(x(M(e, "focus"), $(() => {
			n.show();
		})), x(M(e, "blur"), c(200), $(() => {
			n.value && n.hide();
		}))) : r), h()), n;
	}
	show() {
		this.next(!0);
	}
	hide() {
		this.next(!1);
	}
}, eE = R({ apply({ elements: e, rects: t }) {
	Object.assign(e.floating.style, { width: `${t.reference.width}px` });
} }), e$ = A((e, { emit: t, slots: r, render: n }) => {
	let i = e.open$ ?? new eS(!1), a = (e) => {
		let r = [e.target, ...e.composedPath()].find((e) => e?.hasAttribute?.("data-value"));
		if (r) {
			let e = r.getAttribute("data-value");
			p(e) || (t("selected", e), i.hide());
		}
	};
	return x(i, n((e) => Q(X, {
		isOpen: e,
		onClickOutside: () => i.hide(),
		onEscKeydown: () => i.hide(),
		placement: "bottom-start",
		middleware: [eE],
		$content: Q(eA, {
			onClick: a,
			children: r.content?.()
		}),
		children: r.default?.()?.[0] ?? null
	})));
}, {
	displayName: "Menu",
	props: ["open$"],
	emits: ["selected"]
}), eA = Z("div", { displayName: "PopoverContainer" })({
	textStyle: "sys.body-small",
	pos: "relative",
	containerStyle: "sys.surface-container-lowest",
	borderBottom: "1px solid",
	borderRight: "1px solid",
	borderLeft: "1px solid",
	borderColor: j("sys.outline-variant", _(.38)),
	overflow: "hidden",
	"[data-placement*=bottom] &": { roundedBottom: "sm" },
	"[data-placement*=top] &": { roundedTop: "sm" }
}), eO = Z("div", { displayName: "MenuItem" })({
	px: 8,
	py: 2,
	gap: 8,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	textAlign: "right",
	textStyle: "sys.body-small",
	cursor: "pointer",
	_hover: { containerStyle: "sys.surface-container" },
	_focus: {
		containerStyle: "sys.surface-container",
		outline: 0
	}
}), eL = Z("div", { displayName: "PropDoc" })({
	position: "absolute",
	zIndex: 1,
	opacity: .58,
	fontSize: 10,
	lineHeight: 10,
	top: -3,
	left: 0,
	"& > *": {
		display: "flex",
		alignItems: "center",
		gap: 4,
		"&::before": {
			content: "\"// \"",
			font: "code"
		}
	}
}), ek = Z("span", { displayName: "PropDescription" })({
	display: "block",
	textStyle: "sys.body-small",
	"& p": {
		my: 1,
		wordBreak: "keep-all",
		whiteSpace: "nowrap",
		opacity: .7
	},
	"& code": {
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	}
}), eH = A((e, { slots: t, render: r }) => {
	let n = new eS(!1);
	return x(n, r((r) => {
		let i = t.default?.()[0];
		return Q(X, {
			isOpen: r,
			placement: e.placement ?? "left",
			$content: Q(eP, { children: Q(eM, { children: t.title() }) }),
			children: i ? ee(i, {
				onMouseover: () => {
					n.show();
				},
				onMouseout: () => {
					n.hide();
				}
			}) : null
		});
	}));
}, {
	displayName: "Tooltip",
	props: ["placement"]
}), eM = Z("div", { displayName: "TooltipContainer" })({
	py: 4,
	px: 12,
	rounded: "xs",
	shadow: "3",
	textStyle: "sys.body-small",
	containerStyle: "sys.on-surface",
	pos: "relative",
	zIndex: 100
}), eP = Z("div", { displayName: "TooltipWrapper" })({ px: 8 }), eV = Z("div", { displayName: "LineError" })({
	display: "block",
	fontSize: 10,
	lineHeight: 14,
	color: "sys.error",
	position: "absolute",
	px: 2,
	top: -2,
	right: 0
}), eD = Z("div", { displayName: "LinePrefix" })({
	position: "relative",
	display: "flex",
	alignItems: "start",
	justifyContent: "flex-end",
	minWidth: "2vw",
	px: 12,
	userSelect: "none"
}), eI = Z("div", { displayName: "LineContent" })({
	flex: 1,
	minW: 0
}), eT = Z("div", { displayName: "LineContentMain" })({
	position: "relative",
	display: "flex",
	alignItems: "start"
}), eJ = Z(eg, { displayName: "LineNumber" })({
	opacity: .28,
	font: "code"
}), eW = Z(eg, (e) => (t) => Q(t, { children: Q(U, { path: e.folded ? "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" : "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }) }), {
	displayName: "LineFoldable",
	props: ["folded"]
})({
	position: "absolute",
	top: 0,
	left: 2,
	cursor: "pointer",
	font: "code",
	opacity: .58,
	[`& ${U}`]: { svg: {
		width: 16,
		height: 16
	} }
}), eB = Z("div", (e, { slots: t }) => (r) => q(r, { children: [Q(eD, { children: t.leading?.() }), Q(eI, {
	sx: { paddingLeft: 14 * e.indent * 2 },
	children: q(eT, { children: [t.default?.(), t.comment?.()] })
})] }), {
	displayName: "LineContainer",
	props: ["indent"]
})({
	position: "relative",
	display: "flex",
	py: 2,
	w: "100%",
	maxW: "100%",
	_hover: {
		containerStyle: "sys.surface-container",
		[`& ${ex}`]: { visibility: "visible" }
	},
	"&:focus-within": { containerStyle: "sys.surface-container" },
	[`&[data-dirty=${eh.EDIT}]`]: { bgColor: j("sys.warning-container", _(.38)) },
	[`&[data-dirty=${eh.ADD}]`]: { bgColor: j("sys.success-container", _(.38)) },
	[`&[data-dirty=${eh.DELETE}]`]: {
		bgColor: j("sys.error-container", _(.38)),
		textDecoration: "line-through",
		opacity: .58
	},
	_error: { bgColor: j("sys.error-container", _(.38)) }
}), e_ = class e extends f {
	static from(t) {
		let n = new e("");
		return x(t, C((e) => e ? x(M(e, "input"), $((e) => {
			n.next(e.target.value?.trim());
		})) : r), L()), n;
	}
}, ej = class e extends l {
	static from(t) {
		let n = new e();
		return x(t, C((e) => e ? d(x(M(e, "keypress"), $((e) => {
			"Enter" !== e.key || e.shiftKey || (e.preventDefault(), n.next({ type: "COMMIT" }));
		})), x(M(e, "keydown"), $((e) => {
			switch (e.key) {
				case "Tab":
				case "ArrowDown":
					e.target.getAttribute("data-options") && (e.preventDefault(), n.next({
						type: "SELECT",
						direction: 1
					}));
					break;
				case "ArrowUp": e.target.getAttribute("data-options") && (e.preventDefault(), n.next({
					type: "SELECT",
					direction: -1
				}));
			}
		})), x(M(e, "keyup"), $((e) => {
			"Escape" === e.key && n.next({ type: "CANCEL" });
		}))) : r), L()), n;
	}
}, eR = class extends o {
	static sync(e, t) {
		return x(d(x(e, $((e) => {
			e && e == D.create(t.path()) && t.editing$.show();
		})), x(t.editing$, c(1), $((r) => {
			r || e.disable(t.path());
		})), x(a([t.value$, e]), c(1), $(([r, n]) => {
			p(r) && !n && e.enable(t.path());
		}))), L());
	}
	#i = new g(null);
	constructor() {
		super((e) => {
			let t = this.#i.subscribe(e);
			return () => t.unsubscribe();
		});
	}
	enable(e) {
		this.#i.value || this.#i.next(D.create(e));
	}
	disable(e) {
		this.#i.value === D.create(e) && this.#i.next(null);
	}
};
let eZ = k(() => new eR());
var ez = A((e, { render: t }) => {
	let n, i = S(null), l = S(null), o = S(null), s = ej.from(o), u = e_.from(o), h = eZ.use(), y = eS.from(o), m = ef.use();
	eR.sync(h, {
		editing$: y,
		value$: e.value$,
		path: () => e.ctx.path
	});
	let v = () => {
		if ("enums" === e.typedef.type) {
			let t = (W.schemaProp(e.typedef, "enum") ?? []).indexOf(e.value);
			if (t > -1) return t;
		}
		return 0;
	}, b = new f({ index: v() }), g = () => {
		u.next(""), y.hide();
	}, w = (t) => {
		if ("enums" === e.typedef.type) {
			let r = W.schemaProp(e.typedef, "enum") ?? [];
			t ??= r[b.value.index % r.length];
		} else t ??= o.value?.value ? o.value?.value : void 0;
		if (p(t)) return void m.delete(e.ctx.path);
		let [r, n] = e.typedef.validate(t, { coerce: !0 });
		if (r) return void m.setError(e.ctx.path, r.message);
		m.update(e.ctx.path, n), g();
	};
	return (e.allowRawJSON && x(u, $((t) => {
		let r = t.trim();
		if (r.startsWith("{") && r.endsWith("}") || r.startsWith("[") && r.endsWith("]")) try {
			let t = JSON.parse(r);
			m.update(e.ctx.path, t), g();
		} catch (t) {
			m.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), L()), x(s, $((t) => {
		switch (t.type) {
			case "SELECT":
				b.next((e) => {
					e.index += t.direction;
				});
				break;
			case "COMMIT":
				w();
				break;
			case "CANCEL": g(), b.next({ index: v() }), p(e.value) && m.delete(e.ctx.path);
		}
	}), L()), x(d(x(l, N((e) => {
		if (e) {
			let t = new ResizeObserver((e) => {
				for (let t of e) t.contentBoxSize && (n = t.contentBoxSize[0]?.blockSize);
			});
			return t.observe(e), () => {
				t.disconnect();
			};
		}
		return () => {};
	})), x(o, c(1), $((e) => {
		e && (e?.focus(), e.value && (e.selectionStart = 0, e.selectionEnd = e.value.length));
	})), x(o, C((e) => {
		if (e) {
			let t = n ? n - 2 : e.getBoundingClientRect().height, r = (e) => {
				e.style.height = `${t ?? 0}px`, e.style.height = `${e.scrollHeight}px`;
			};
			return setTimeout(() => r(e)), d(x(M(e, "blur"), $((t) => {
				t.relatedTarget && (l.value?.contains(t.relatedTarget) || i.value?.contains(t.relatedTarget)) || (t.preventDefault(), w(e.value));
			})), x(M(e, "input"), $((e) => {
				r(e.target), u.next(e.target.value);
			})));
		}
		return r;
	}))), L()), "enums" == e.typedef.type) ? x(a([
		e.value$,
		y,
		b
	]), t(([t, r, { index: n }]) => {
		let a = W.schemaProp(e.typedef, "enum") ?? [], s = W.metaProp(e.typedef, "enumLabels") ?? [];
		return Q(eK, {
			ref: l,
			onClick: () => {
				y.show();
			},
			"data-type": typeof t,
			tabindex: 0,
			children: r ? Q(e$, {
				onSelected: (e) => {
					w(e);
				},
				open$: y,
				$content: Q("div", {
					ref: i,
					children: a.map((e, t) => Q(eq, {
						"data-focus": n % a.length === t,
						value: e,
						label: s[t]
					}))
				}),
				children: Q(eF, { children: Q("input", {
					value: void 0 == t ? "" : `${t}`,
					ref: o,
					"data-options": !0
				}) })
			}) : Q(eU, { children: JSON.stringify(t) ?? "undefined" })
		});
	})) : x(a([e.value$, y]), t(([t, r]) => Q(eK, {
		ref: l,
		onClick: () => {
			e.ctx.readOnly || y.show();
		},
		onFocus: () => {
			e.ctx.readOnly || y.show();
		},
		"data-type": typeof t,
		tabindex: 0,
		children: r ? Q(X, {
			isOpen: !0,
			placement: "right-start",
			$content: q(eX, {
				ref: i,
				children: [Q(ev, {
					type: "button",
					onClick: () => s.next({ type: "CANCEL" }),
					children: Q(U, { path: en })
				}), Q(ev, {
					type: "button",
					onClick: () => s.next({ type: "COMMIT" }),
					children: Q(U, { path: ea })
				})]
			}),
			children: Q(eF, { children: Q("textarea", {
				ref: o,
				rows: 1,
				value: void 0 == t ? "" : `${t}`
			}) })
		}) : Q(eU, { children: JSON.stringify(t) ?? "undefined" })
	})));
}, {
	displayName: "ValueInput",
	props: [
		"typedef",
		"ctx",
		"value",
		"allowRawJSON"
	]
}), eX = Z("div", { displayName: "ValueInputActions" })({
	borderRight: "1px solid",
	borderTop: "1px solid",
	borderBottom: "1px solid",
	borderColor: j("sys.outline-variant", _(.38)),
	containerStyle: "sys.surface-container-lowest",
	roundedRight: "sm",
	display: "flex",
	px: 2,
	py: 0,
	ml: -4
}), eF = Z("div", { displayName: "InputWrapper" })({
	flex: 1,
	minWidth: 0,
	maxWidth: "80%",
	display: "flex",
	alignItems: "center",
	border: "1px solid",
	overflow: "hidden",
	borderColor: j("sys.outline-variant", _(.38)),
	opacity: .38,
	"&:hover": { opacity: 1 },
	"&:focus-within": { opacity: 1 },
	"& > textarea,input": {
		flex: 1,
		rounded: "xs",
		containerStyle: "sys.surface-container-lowest",
		width: "100%",
		outline: "none",
		border: "none",
		px: 8,
		py: 0,
		m: 0,
		fontSize: "inherit",
		color: "inherit",
		lineHeight: "inherit",
		overflow: "hidden",
		resize: "none",
		"&[data-options]:focus": { roundedBottom: 0 }
	}
}), eU = Z("div", { displayName: "Value" })({
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	overflow: "hidden",
	textOverflow: "ellipsis",
	_hover: {
		textOverflow: "clip",
		whiteSpace: "normal",
		wordBreak: "break-all"
	}
}), eK = Z("div", { displayName: "ValueContainer" })({
	wordBreak: "keep-all",
	whiteSpace: "nowrap",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	font: "code",
	minWidth: 0,
	flex: 1,
	textStyle: "sys.label-small",
	fontSize: 12,
	lineHeight: 24,
	gap: 8,
	_type__string: { color: "sys.primary" },
	_type__number: { color: "sys.primary" },
	_type__boolean: { color: "sys.warning" },
	_type__undefined: { color: "sys.error" }
}), eQ = Z(eO, { displayName: "EnumMenuItemContainer" })({ [`& ${eN}`]: { textAlign: "left" } }), eq = n((e) => () => q(eQ, {
	"data-value": e.value,
	tabindex: 0,
	children: [Q(eN, { children: e.value }), e.label && Q(ek, { children: e.label })]
}), {
	displayName: "EnumMenuItem",
	props: ["value", "label"]
}), eG = e(t((e, t) => {
	var r = Y(), n = {
		"text/plain": "Text",
		"text/html": "Url",
		default: "Text"
	};
	t.exports = function(e, t) {
		var i, a, l, o, s, d, p, c, u = !1;
		t || (t = {}), l = t.debug || !1;
		try {
			if (s = r(), d = document.createRange(), p = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", function(r) {
				if (r.stopPropagation(), t.format) if (r.preventDefault(), void 0 === r.clipboardData) {
					l && console.warn("unable to use e.clipboardData"), l && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
					var i = n[t.format] || n.default;
					window.clipboardData.setData(i, e);
				} else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
				t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
			}), document.body.appendChild(c), d.selectNodeContents(c), p.addRange(d), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
			u = !0;
		} catch (r) {
			l && console.error("unable to copy using execCommand: ", r), l && console.warn("trying IE specific stuff");
			try {
				window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0;
			} catch (r) {
				l && console.error("unable to copy using clipboardData: ", r), l && console.error("falling back to prompt"), i = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", a = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", o = i.replace(/#{\s*key\s*}/g, a), window.prompt(o, e);
			}
		} finally {
			p && ("function" == typeof p.removeRange ? p.removeRange(d) : p.removeAllRanges()), c && document.body.removeChild(c), s();
		}
		return u;
	};
})()), eY = A((e, {}) => () => Q(eH, {
	$title: "复制当前节点为 JSON 字符串",
	children: Q(ev, {
		type: "button",
		onClick: () => (0, eG.default)(JSON.stringify(e.value, null, 2)),
		children: Q(U, { path: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" })
	})
}), {
	displayName: "CopyAsJSONIconBtn",
	props: ["value"]
}), e1 = A(({}, { emit: e }) => () => Q(eH, {
	$title: "移除项",
	children: Q(ev, {
		type: "button",
		onClick: () => e("remove"),
		children: Q(U, { path: "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z" })
	})
}), {
	displayName: "ItemRemoveIconBtn",
	emits: ["remove"]
}), e0 = A((e, { emit: t, render: r }) => {
	let n = S(null), i = e_.from(n), a = ej.from(n), l = eS.from(n), o = ef.use(), s = () => {
		n.value && (n.value.value = "", n.value.blur());
	}, d = (r) => {
		if (r ??= i.value) {
			let [n, i] = W.schemaProp(e.typedef, "items").validate(r, { coerce: !0 });
			if (n) return void o.setError(e.ctx.path, n);
			t("add", i);
		} else t("add", void 0);
		s();
	};
	x(i, $((t) => {
		let r = t.trim();
		if (r.startsWith("[") && r.endsWith("]")) try {
			let t = JSON.parse(r);
			o.update(e.ctx.path, t), s();
		} catch (t) {
			o.setError(e.ctx.path, "无效的 JSON 字符串");
		}
		if (r.startsWith("{") && r.endsWith("}")) try {
			d(JSON.parse(r));
		} catch (t) {
			o.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), L()), x(a, $((e) => {
		switch (e.type) {
			case "COMMIT":
				d();
				break;
			case "CANCEL": s();
		}
	}), L());
	let p = x(l, r((e) => Q(X, {
		isOpen: e,
		placement: "right-start",
		$content: q(eX, { children: [Q(ev, {
			type: "button",
			onClick: () => a.next({ type: "CANCEL" }),
			children: Q(U, { path: en })
		}), Q(ev, {
			type: "button",
			onClick: () => a.next({ type: "COMMIT" }),
			children: Q(U, { path: ea })
		})] }),
		children: Q(eF, { children: Q("input", {
			ref: n,
			type: "text",
			placeholder: "添加数组项 (可粘贴 JSON 字符串)"
		}) })
	})));
	return () => Q(eK, {
		sx: { mx: -4 },
		children: p
	});
}, {
	displayName: "ItemAddIconBtn",
	props: ["ctx", "typedef"],
	emits: ["add"]
}), e2 = A((e, { emit: t, render: r }) => {
	let n = S(null), i = ej.from(n), l = e_.from(n), o = eS.from(n), s = ef.use(), d = f.seed({ index: 0 }), p = () => {
		o.hide(), l.next(""), n.value && (n.value.value = "", n.value.blur()), d.next({ index: 0 });
	};
	x(l, $((t) => {
		let r = t.trim();
		if (r.startsWith("{") && r.endsWith("}")) try {
			let t = JSON.parse(r);
			s.update(e.ctx.path, t), p();
		} catch (t) {
			s.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), L());
	let c = (r) => {
		e.options ? r ??= e.options[d.value.index % e.options.length]?.propName : r ??= l.value, r ? (t("add", r), p()) : s.setError([...e.ctx.path, W.RecordKey], "无效的属性值");
	};
	x(i, $((e) => {
		switch (e.type) {
			case "SELECT":
				d.next((t) => {
					t.index += e.direction;
				});
				break;
			case "COMMIT":
				c();
				break;
			case "CANCEL": p();
		}
	}), L());
	let u = x(o, r((e) => Q(eF, { children: Q("input", {
		ref: n,
		type: "text",
		placeholder: "添加属性 (可粘贴 JSON 字符串)",
		"data-options": e
	}) })));
	return x(a([
		l,
		o,
		d,
		e.options$
	]), r(([e, t, r, a]) => a ? a.length > 0 ? Q(eK, {
		sx: { mx: -4 },
		children: Q(e$, {
			onSelected: (e) => {
				c(e);
			},
			open$: o,
			$content: Q("div", { children: a.map((t, n) => e && !t.propName.includes(e) ? null : Q(e3, {
				"data-focus": n === r.index % a.length,
				propName: t.propName,
				typedef: t.typedef
			})) }),
			children: u
		})
	}) : null : Q(eK, {
		sx: { mx: -4 },
		children: Q(X, {
			isOpen: t,
			placement: "right-start",
			$content: q(eX, { children: [Q(ev, {
				type: "button",
				onClick: () => i.next({ type: "CANCEL" }),
				children: Q(U, { path: en })
			}), Q(ev, {
				type: "button",
				onClick: () => i.next({ type: "COMMIT" }),
				children: Q(U, { path: ea })
			})] }),
			children: Q(eF, { children: Q("input", {
				ref: n,
				type: "text",
				placeholder: "添加属性 (可粘贴 JSON 字符串)"
			}) })
		})
	})));
}, {
	displayName: "PropValueAddInput",
	props: ["ctx", "options"],
	emits: ["add"]
}), e3 = n((e) => () => q(e5, {
	"data-value": e.propName,
	tabindex: 0,
	children: [Q(eN, {
		optional: !!W.schemaProp(e.typedef, W.optional),
		children: e.propName
	}), Q(ek, { children: W.metaProp(e.typedef, "title") })]
}), {
	displayName: "PropMenuItem",
	props: ["propName", "typedef"]
}), e5 = Z(eO, { displayName: "AddPropMenuItemContainer" })({ [`& ${eN}`]: { textAlign: "left" } }), e7 = A((e, { render: t }) => {
	let r = ef.use(), n = em.use(), i = x(e.n$, t((e) => Q(eJ, { children: e }))), l = D.create(e.ctx.path);
	return x(a([
		e.close$,
		e.value$,
		r.errorAt$(l),
		r.foldedPrefix$(l)
	]), t(([t, a, o, s]) => {
		let d = !!o, c = y(a) || "array" == e.typedef.type, u = !c && O(a);
		if (t) return s ? null : Q(G, { children: Q(eB, {
			"data-error": d,
			$leading: i,
			indent: e.ctx.path.length,
			children: c ? q(G, { children: [q(eg, { children: ["]", "\xA0\xA0"] }), !e.ctx.readOnly && Q(e0, {
				ctx: e.ctx,
				typedef: e.typedef,
				onAdd: (t) => {
					r.update(e.ctx.path, (e) => {
						console.log(e), e.push(t);
					}, [], e.typedef);
				}
			})] }) : u ? q(G, { children: [q(eg, { children: ["}", "\xA0\xA0"] }), !e.ctx.readOnly && Q(e2, {
				ctx: e.ctx,
				onAdd: (t) => {
					r.update([...e.ctx.path, t], void 0);
				},
				options: "record" != e.typedef.type ? [...e.typedef.entries(a, e.ctx)].filter(([e]) => !Object.hasOwn(a, e)).map(([e, t, r]) => ({
					propName: String(e),
					typedef: r
				})) : void 0
			})] }) : null
		}) });
		if (s == eu.PREFIX) return null;
		let h = () => {
			let t = m(e.ctx.path);
			return q(G, { children: [p(t) ? null : Q(eN, {
				deprecated: W.schemaProp(e.typedef, "deprecated"),
				$leading: e.ctx.readOnly ? null : Q(e1, { onRemove: () => {
					r.delete(e.ctx.path);
				} }),
				children: Q(z, {
					sx: H(t) ? { opacity: 1 } : {
						opacity: .3,
						font: "code"
					},
					children: `${t}`
				})
			}), H(t) ? Q(eg, { children: ": " }) : e.ctx.path.length > 0 ? Q(eg, { children: "\xA0\xA0" }) : null] });
		};
		return Q(eB, {
			indent: e.ctx.path.length,
			"data-dirty": ((e, t) => {
				if (!(y(e) || O(e))) {
					if (p(t) && !p(e)) return eh.ADD;
					if (!p(t) && p(e)) return eh.DELETE;
					if (!p(t) && !p(e) && e !== t) return eh.EDIT;
				}
				return eh.NONE;
			})(a, e.previous),
			"data-error": d,
			$leading: q(G, { children: [i, c || u ? Q(eW, {
				folded: s !== eu.NONE,
				onClick: () => {
					r.toggleFold(l);
				}
			}) : null] }),
			$comment: (() => {
				let t = W.metaProp(e.typedef, "title"), r = W.metaProp(e.typedef, "description");
				return q(G, { children: [(t || r) && Q(eL, { children: r ? Q(eH, {
					$title: Q(ek, { children: Q(F, { text: r }) }),
					placement: "top",
					children: q("div", { children: [
						t,
						" ",
						Q(U, { path: "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" })
					] })
				}) : Q("span", { children: t }) }), d && Q(eV, { children: `${o}` })] });
			})(),
			children: (() => {
				if (s) {
					if (s == eu.EXACT) {
						if (c) return q(G, { children: [h(), Q(eg, { children: "[...]" })] });
						if (u) return q(G, { children: [h(), Q(eg, { children: "{...}" })] });
					}
					return null;
				}
				return q(G, { children: [h(), c ? q(G, { children: [Q(eg, { children: "[" }), Q(ex, { children: Q(eY, { value: a }) })] }) : u ? q(G, { children: [Q(eg, { children: "{" }), Q(ex, { children: Q(eY, { value: a }) })] }) : n.$value?.(e.typedef, a, e.ctx)] });
			})()
		});
	}));
}, {
	displayName: "Line",
	props: [
		"n",
		"typedef",
		"ctx",
		"value",
		"previous",
		"close"
	]
});
let e9 = (e, t, r) => Q(ez, {
	typedef: e,
	value: t,
	ctx: r
});
var e6 = A((e, { render: t }) => {
	let r = ef.use(), n = em.use();
	return x(r, t((t) => Q(eZ, { children: Q(em, {
		value: { $value: n.$value ?? e9 },
		children: Q(e8, { children: Q(e4, { children: [...function* e(t, r, n, i) {
			if ("object" == n.type || "record" == n.type || "intersection" == n.type || "union" == n.type && W.schemaProp(n, "discriminator")) {
				let a = {
					value: t ?? {},
					previous: r,
					typedef: n,
					ctx: i
				};
				for (let [t, l, o] of (yield a, n.entries(a.value, i))) Object.hasOwn(a.value, t) && (yield* e(l, b(r, [t]), o, {
					...i,
					path: [...i.path, t],
					branch: [...i.branch, l]
				}));
				yield {
					...a,
					close: !0
				};
				return;
			}
			if ("union" == n.type && p(W.schemaProp(n, "discriminator"))) {
				let a = W.schemaProp(n, "oneOf");
				if (a?.length == 2) {
					let n = a.find((e) => "array" == e.type), l = a.find((e) => "array" != e.type);
					if (n && l && W.schemaProp(n, "items").type == l.type) {
						let a = ec(t), l = ec(r), o = {
							value: a,
							previous: l,
							typedef: n,
							ctx: i
						};
						for (let [t, r, s] of (yield o, n.entries(a, i))) yield* e(r, b(l, [t]), s, {
							...i,
							path: [...i.path, t],
							branch: [...i.branch, r]
						});
						yield {
							...o,
							close: !0
						};
						return;
					}
				}
			}
			if ("array" == n.type) {
				let a = {
					value: t,
					previous: r,
					typedef: n,
					ctx: i
				};
				for (let [l, o, s] of (yield a, n.entries(t, i))) yield* e(o, b(r, [l]), s, {
					...i,
					path: [...i.path, l],
					branch: [...i.branch, o]
				});
				yield {
					...a,
					close: !0
				};
				return;
			}
			if ("any" == n.type || "unknown" == n.type) {
				if (y(t)) return void (yield* e(t, r, P(I()), i));
				if (w(t)) return void (yield* e(t, r, B(V(), I()), i));
			}
			yield {
				value: t,
				previous: r,
				typedef: n,
				ctx: i
			};
		}(t, r.initialsAt([]), r.typedef, {
			...J,
			readOnly: e.readOnly
		})].map((e, t) => {
			let r = D.create(e.ctx.path);
			return Q(e7, {
				n: t + 1,
				ctx: e.ctx,
				typedef: e.typedef,
				value: e.value,
				previous: e.previous,
				close: e.close ?? !1
			}, `${r}::${e.close ?? !1}`);
		}) }) })
	}) })));
}, {
	displayName: "JSONEditorView",
	props: ["readOnly"]
}), e8 = Z("div", { displayName: "JSONEditorContainer" })({
	w: "100%",
	h: "100%",
	overflow: "auto"
}), e4 = Z("div", ({}, { slots: e }) => (t) => Q(t, { children: e.default() }), { displayName: "Lines" })({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	w: "100%",
	maxW: "100%",
	py: 2
});
export { el as a, ed as c, ei as i, ep as l, ey as n, eo as o, ef as r, es as s, e6 as t };
