import { B as e } from "./vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js";
import { d as a, f as t, l as n, n as o, o as r, r as i, t as s, u as l } from "./vendor-innoai-tech-vueuikit.pf1Bh6eQ.chunk.js";
import { X as d, Z as c, gt as u, nt as p, pt as m } from "./index.DdIYnUiz.entry.js";
var y = r("button", {
	displayName: "ButtonBase",
	props: [
		"hover",
		"focus",
		"active",
		"disabled"
	]
})({
	textStyle: "sys.label-large",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	outline: "none",
	overflow: "hidden",
	border: 0,
	margin: 0,
	userSelect: "none",
	cursor: "pointer",
	_disabled: { cursor: "not-allowed" },
	gap: 4,
	h: 36,
	px: 16,
	rounded: "xs",
	transitionDuration: "md4",
	transitionTimingFunction: "standard-accelerate",
	bg: "none",
	pos: "relative",
	zIndex: 0,
	_$before: {
		content: "\"\"",
		pos: "absolute",
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		zIndex: -1,
		transitionDuration: "md1",
		transitionTimingFunction: "standard-accelerate"
	},
	$data_icon: {
		boxSize: 18,
		_data_placement__start: { ml: -8 },
		_data_placement__end: { mr: -8 }
	}
}), g = r(y, { displayName: "FilledButton" })({
	containerStyle: "sys.primary",
	py: 6,
	px: 16,
	_hover: {
		shadow: "1",
		_$before: { bgColor: t("white", a(.08)) }
	},
	_focus: {
		shadow: "1",
		_$before: { bgColor: t("white", a(.12)) }
	},
	_active: {
		shadow: "1",
		_$before: { bgColor: t("white", a(.12)) }
	},
	_disabled: {
		shadow: "0",
		color: t("sys.on-surface", a(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: t("sys.on-surface", a(.12)) }
	}
}), f = r(y, { displayName: "TextButton" })({
	extends: [{
		px: 16,
		$data_icon: {
			_data_placement__start: { ml: -4 },
			_data_placement__end: { mr: -4 }
		}
	}],
	color: "sys.primary",
	_$before: { bgColor: "rgba(0,0,0,0)" },
	_hover: { _$before: { bgColor: t("sys.primary", a(.08)) } },
	_focus: { _$before: { bgColor: t("sys.primary", a(.12)) } },
	_active: { _$before: { bgColor: t("sys.primary", a(.12)) } },
	_disabled: {
		color: t("sys.on-surface", a(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: "rgba(0,0,0,0)" }
	}
}), b = r("span", (e, {}) => (a) => {
	let t = e.size ?? 24;
	return d(a, {
		"data-icon": !0,
		"data-placement": e.placement,
		"data-has-size": !!e.size,
		children: d("svg", {
			viewBox: `0 0 ${t} ${t}`,
			width: t,
			height: t,
			children: d("path", {
				d: e.path,
				children: e.animate && d("animateTransform", {
					attributeName: "transform",
					attributeType: "XML",
					type: "rotate",
					repeatCount: "indefinite",
					dur: "1s",
					from: `0 ${t / 2} ${t / 2}`,
					to: `360 ${t / 2} ${t / 2}`
				})
			})
		})
	});
}, {
	displayName: "Icon",
	props: [
		"path",
		"placement",
		"animate",
		"size"
	]
})({
	display: "inline-block",
	_data_has_size__false: {
		boxSize: "1.2em",
		"& svg": {
			w: "100%",
			h: "100%"
		}
	}
}), v = r(f, { displayName: "IconButton" })({
	boxSize: 36,
	p: 0,
	color: "sys.on-surface-variant",
	[`${b}`]: { boxSize: 18 }
});
let _ = n({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: l.duration.md1,
	easing: l.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: l.duration.sm4,
	easing: l.easing.standard.decelerate
});
l.duration.sm4, l.easing.standard.decelerate, l.duration.sm1, l.easing.standard.accelerate, l.duration.sm4, l.easing.standard.decelerate, l.duration.sm1, l.easing.standard.accelerate, l.duration.sm4, l.easing.standard.decelerate, l.duration.sm1, l.easing.standard.accelerate, l.duration.sm4, l.easing.standard.decelerate, l.duration.sm1, l.easing.standard.accelerate;
var h = r("div", { displayName: "TooltipContainer" })({
	mt: 4,
	py: 2,
	px: 8,
	rounded: "xs",
	shadow: "3",
	containerStyle: "sys.on-surface",
	textStyle: "sys.body-small",
	pos: "relative",
	pointerEvents: "none",
	maxW: "24vw",
	zIndex: 100
}), x = e((e, { slots: a }) => {
	let t = u(!1), n = u(null);
	return () => {
		let o = a.default ? a.default()[0] : null, r = a.title ? a.title() : e.title;
		return r ? d(s, {
			isOpen: t.value,
			onClickOutside: () => t.value = !1,
			$transition: ({ content: e }) => d(_, { children: e }),
			$content: d(h, { children: r }),
			children: o ? p(o, {
				onVnodeMounted: (e) => {
					n.value = function e(a) {
						if (a) {
							if (a instanceof HTMLElement) return a;
							if (a instanceof Text) return e(a.nextElementSibling);
						}
						return null;
					}(e.el);
				},
				onMouseover: () => {
					t.value = !0;
				},
				onMouseleave: () => {
					t.value = !1;
				}
			}) : null
		}) : o;
	};
}, {
	displayName: "Tooltip",
	props: ["title"]
});
var C = r("div", { displayName: "Container" })({
	pos: "absolute",
	top: 0,
	left: 0,
	h: "100vh",
	w: "100vw",
	zIndex: 100,
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}), $ = r("div", { displayName: "DialogBackdrop" })({
	cursor: "pointer",
	pos: "absolute",
	top: 0,
	left: 0,
	h: "100vh",
	w: "100vw",
	zIndex: -1,
	bgColor: t("sys.scrim", a(.38))
}), w = n({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: l.duration.md1,
	easing: l.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: l.duration.sm4,
	easing: l.easing.standard.accelerate
}), z = e((e, { slots: a, emit: t }) => {
	let n = u(e.isOpen ?? !1), o = u(!1);
	return m(() => e.isOpen, (e) => {
		!0 === e ? n.value = !0 : !1 === e && (o.value = !1);
	}), () => d(i, {
		isOpen: n.value,
		onContentBeforeMount: () => {
			o.value = !0;
		},
		onEscKeydown: () => {
			o.value = !1;
		},
		children: c(C, { children: [d(w, {
			onComplete: (e) => {
				"leave" === e && (n.value = !1, t("close"));
			},
			children: o.value ? d($, { onClick: () => {
				o.value = !1;
			} }) : null
		}), a.default?.()] })
	});
}, {
	displayName: "Dialog",
	props: ["isOpen"],
	emits: ["close"]
});
l.duration.sm4, l.easing.standard.accelerate, l.duration.sm1, l.easing.standard.accelerate;
export { g as a, b as i, x as n, v as r, z as t };
