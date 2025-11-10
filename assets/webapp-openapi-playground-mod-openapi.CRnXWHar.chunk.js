const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.esfBtHsb.chunk.js","assets/vendor-mermaid.CM17roBc.chunk.js"])))=>i.map(i=>d[i]);
import { A as e, At as t, D as a, Ft as r, I as i, It as n, M as o, P as l, St as s, T as d, V as p, W as c, X as u, Y as m, a as h, b as y, c as f, g as b, h as x, j as g, jt as v, k as w, l as $, m as _, o as N, p as S, r as I, s as C, t as O, u as k, w as j, x as D, y as P, yt as T } from "./vendor-innoai-tech-vuekit.DCts1k_-.chunk.js";
import { d as q, f as W, o as E, s as B } from "./vendor-innoai-tech-vueuikit.BxzR6bgF.chunk.js";
import { S as L, _ as R, b as F, h as A, l as M, m as H, n as J, r as V, s as z, t as U, u as K, v as X, x as Y, y as G } from "./vendor-rxjs.TeOs2CXO.chunk.js";
import { i as Q, n as Z, r as ee, t as et } from "./vendor-innoai-tech-fetcher.CUymofST.chunk.js";
import { a as ea, c as er, d as ei, f as en, i as eo, l as el, m as es, n as ed, o as ep, p as ec, r as eu, s as em, t as eh, u as ey } from "./vendor-innoai-tech-jsoneditor.B6QQhzM9.chunk.js";
import { i as ef, n as eb, r as ex, t as eg } from "./lib-nodepkg-vueformdata.CWNA24Ip.chunk.js";
import { rt as ev } from "./vendor-mermaid.CM17roBc.chunk.js";
var ew = class e extends S {
	static empty() {
		return new e({
			openapi: "3.1.0",
			components: { schemas: {} },
			paths: {}
		});
	}
	#e = et({
		paramsSerializer: ee,
		transformRequestBody: Q
	});
	#t = new F(/* @__PURE__ */ new Map());
	get #a() {
		return this.value.servers?.[0]?.url ?? "";
	}
	response$(e) {
		return _(this.#t, J((t) => {
			let a = t.get(e);
			return a ? K(a, a.error$) : G;
		}));
	}
	requesting$(e) {
		return _(this.#t, J((t) => t.get(e)?.requesting$ ?? R(!1)));
	}
	asRequestConfigCreator(e) {
		let t = this.#r(e);
		if (!t) return null;
		let a = Object.keys(t.requestBody?.content ?? {})[0];
		return (e = {}) => ({
			method: t.method.toUpperCase(),
			url: this.#a + e_(t.path, e),
			params: s(e, t.parameters?.filter((e) => "query" == e.in).map((e) => e.name) ?? []),
			headers: {
				...s(e, t.parameters?.filter((e) => "header" == e.in).map((e) => e.name) ?? []),
				...a ? { "Content-Type": a } : {}
			},
			body: e.body,
			inputs: e
		});
	}
	request(e, t) {
		let a = this.#t.value.get(e);
		if (!a) {
			let t = this.asRequestConfigCreator(e);
			if (!t) return;
			a = Z(Object.assign(t, {
				operationID: e,
				TRespData: {}
			}), this.#e), this.#t.value.set(e, a), this.#t.next(this.#t.value);
		}
		a.next(t);
	}
	#r(e) {
		for (let t of e$(this.value, { operationId: e })) if (t) return t;
		return null;
	}
	operation$(e) {
		return _(this, J((t) => {
			for (let a of e$(t, { operationId: e })) if (a) return R(a);
			return R(null);
		}));
	}
	operations$(e) {
		return _(this, J((t) => R([...e$(t, e)])));
	}
	schema$(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		return _(this, J((e) => t ? R(n(e, t) ?? null) : R(null)), A((e) => e ? {
			...e,
			$id: t[t.length - 1]
		} : e));
	}
	schema(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		if (t) return n(this.value, t) ?? void 0;
	}
};
function* e$(e, t) {
	for (let [a, r] of Object.entries(e.paths)) for (let [e, i] of Object.entries(r)) if ("OpenAPI" != i.operationId && "OpenAPIView" != i.operationId && (!t.tag || (i.tags ?? []).includes(t.tag))) {
		if (t.operationId) {
			if (t.operationId.startsWith("*")) {
				if (!i.operationId.toLowerCase().includes(t.operationId.slice(1).toLowerCase())) continue;
			} else if (i.operationId.toLowerCase() != t.operationId.toLowerCase()) continue;
		}
		yield {
			...i,
			method: e,
			path: a,
			group: i.tags?.[0] ?? ""
		};
	}
}
let e_ = (e, t = {}) => e.replace(/{([\s\S]+?)}/g, (e, a) => [].concat(t[a] || e).join(",")), eN = O(() => ew.empty(), { name: "OpenAPI" });
var eS = I(({}, {}) => {
	let e = eN.use(), t = new S({ operationId: void 0 }), a = new Y();
	_(a, z(200), U((e) => {
		t.next((t) => {
			t.operationId = `*${e ?? ""}`;
		});
	}), k());
	let r = f(null);
	_(r, J((e) => {
		if (e) {
			let t = (t) => {
				t && e.scrollTo({ top: t.offsetTop - e.offsetTop });
			};
			return new L(() => {
				let a = new MutationObserver((e) => {
					for (let a of e) if ("attributes" === a.type) {
						let e = a.target;
						e.classList.contains("router-link-active") && t(e);
					}
				});
				return a.observe(e, {
					attributes: !0,
					subtree: !0
				}), setTimeout(() => {
					t(e.querySelector(".router-link-active"));
				}, 100), () => {
					a.disconnect();
				};
			});
		}
		return G;
	}), $());
	let i = _(t, J((t) => e.operations$(t)), h((e) => {
		let t = Object.groupBy(e, (e) => e.group);
		return C(eC, { children: [N(eO, { children: N("input", {
			type: "text",
			placeholder: "请输入 operationId 查询",
			onInput: (e) => {
				a.next(e.target.value);
			}
		}) }), N(ek, {
			sx: {
				flex: 1,
				overflow: "scroll"
			},
			ref: r,
			children: Object.entries(t).toSorted().map(([e, t]) => C("div", {
				"data-nav-group": !0,
				children: [N("div", {
					"data-nav-group-heading": !0,
					children: e
				}), N("div", {
					"data-nav-group-contents": !0,
					children: t?.map((e) => C(eD, {
						component: x,
						to: `/operations/${e.operationId}`,
						children: [N(B, {
							"data-operation-method": !0,
							sx: { color: {
								get: "sys.primary",
								post: "sys.success",
								put: "sys.warning",
								delete: "sys.error"
							}[e.method] ?? "sys.secondary" },
							children: e.method
						}), C("div", {
							"data-operation-desc": !0,
							children: [N("div", {
								"data-operation-id": !0,
								children: e.operationId
							}), e.summary ? N("div", {
								"data-operation-summary": !0,
								children: e.summary != e.operationId ? e.summary : N("span", { children: "\xA0" })
							}) : void 0]
						})]
					}))
				})]
			}))
		})] });
	}));
	return () => C(eI, { children: [i, N(ej, { children: N(b, {}) })] });
}, { displayName: "OpenAPIView" }), eI = E("div", { displayName: "Container" })({
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	display: "flex"
}), eC = E("aside", { displayName: "NavContainer" })({
	width: 240,
	py: 4,
	display: "flex",
	flexDirection: "column",
	gap: 4,
	height: "100%",
	overflow: "hidden",
	borderRight: "1px solid",
	borderColor: "sys.outline"
}), eO = E("div", { displayName: "NavSearchBox" })({
	input: {
		py: 10,
		px: 12,
		border: "none",
		width: "100%",
		outline: 0
	},
	borderBottom: "1px solid",
	borderColor: "sys.outline"
}), ek = E("div", { displayName: "Nav" })({
	display: "flex",
	flexDirection: "column",
	gap: 4,
	$data_nav_group_heading: {
		px: 12,
		py: 4,
		textStyle: "sys.label-small",
		containerStyle: "sys.secondary-container"
	}
}), ej = E("main", { displayName: "Main" })({
	flex: 1,
	overflow: "hidden"
}), eD = E("a", { displayName: "OperationListItem" })({
	px: 12,
	py: 8,
	pos: "relative",
	overflow: "hidden",
	width: 240,
	display: "flex",
	alignItems: "center",
	gap: 8,
	flexDirection: "row-reverse",
	textDecoration: "none",
	$data_operation_method: {
		textTransform: "uppercase",
		fontSize: 18,
		fontFamily: "code",
		display: "flex",
		alignItems: "center",
		pointerEvents: "none"
	},
	$data_operation_desc: {
		flex: 1,
		overflow: "hidden"
	},
	$data_operation_id: {
		textStyle: "sys.label-large",
		textOverflow: "ellipsis",
		overflow: "hidden"
	},
	$data_operation_summary: {
		opacity: .7,
		textStyle: "sys.body-small",
		textOverflow: "ellipsis",
		overflow: "hidden"
	},
	"&.router-link-active": { containerStyle: "sys.surface-container" }
}), eP = E("div", { displayName: "Token" })({
	display: "inline-table",
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 11,
	lineHeight: 14
}), eT = E("div", {
	displayName: "PropName",
	props: [
		"deprecated",
		"optional",
		"nullable"
	]
})({
	display: "inline-table",
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 11,
	lineHeight: 14,
	color: "sys.primary",
	_deprecated: { textDecoration: "line-through" },
	_nullable: { "&:after": {
		content: "\"??\"",
		color: "sys.error"
	} },
	_optional: { "&:after": {
		content: "\"?\"",
		color: "sys.secondary"
	} }
}), eq = E("div", (e, { slots: t }) => {
	let a = eL.use();
	return (r) => N(r, {
		style: {
			paddingLeft: `${a.indent}em`,
			marginTop: (e.spacing ?? 0) * .5
		},
		children: t.default?.()
	});
}, {
	displayName: "Line",
	props: ["spacing"]
})({
	position: "relative",
	display: "block"
}), eW = E("div", (e, {}) => (t) => {
	let a = i.metaProp(e.schema, "title") ?? "", r = i.metaProp(e.schema, "description") ?? "";
	return C(t, { children: [
		a,
		" ",
		r ? N(ea, {
			$title: N(eE, { children: N(es, { text: r }) }),
			children: N(em, { path: el })
		}) : null
	] });
}, {
	displayName: "Description",
	props: ["schema"]
})({
	position: "relative",
	pt: 8,
	display: "flex",
	alignItems: "center",
	gap: 4,
	"&::before": {
		content: "\"// \"",
		fontFamily: "code"
	},
	textStyle: "sys.body-small",
	fontSize: 10,
	lineHeight: 12,
	[`${em}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
}), eE = E("div", { displayName: "MarkdownContainer" })({
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
}), eB = ({ name: e, value: t, extra: a }) => "" == t ? null : N(eq, { children: C(eP, {
	sx: {
		opacity: .7,
		fontSize: "0.9em",
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	},
	children: [
		N(eP, {
			sx: { color: "sys.primary" },
			children: `@${e}(`
		}),
		`${t}`,
		Object.entries(a ?? {}).map(([e, t]) => T(t) ? null : C(p, { children: [
			C(eP, {
				sx: { opacity: .5 },
				children: [",", "\xA0"]
			}),
			N(eP, {
				sx: { opacity: .5 },
				children: e
			}),
			C(eP, {
				sx: { opacity: .5 },
				children: [":", "\xA0"]
			}),
			N(eP, {
				sx: { opacity: .7 },
				children: t
			})
		] })),
		N(eP, {
			sx: { color: "sys.primary" },
			children: ")"
		})
	]
}) }), eL = O(() => ({ indent: 0 }), { name: "IntentContext" }), eR = D(({}, { slots: e }) => {
	let t = eL.use();
	return () => N(eL, {
		value: { indent: t.indent + 1 },
		children: e.default?.()
	});
}, { displayName: "Indent" }), eF = class e {
	constructor(e, t) {
		this.id = e, this.parent = t;
	}
	child(t) {
		return new e(t, this);
	}
	safe(e) {
		let t = this;
		for (; t;) {
			if (t.id == e) return !1;
			t = t.parent;
		}
		return !0;
	}
}, eA = O(() => new eF("")), eM = I((e) => {
	let t = eA.use(), a = eL.use(), r = f(!1);
	return () => {
		let n = e.schema, o = i.schemaProp(e.schema, "$ref"), l = "intersection" == (n = i.schemaProp(e.schema, i.unwrap)()).type || "object" == n.type || "union" == n.type || "record" == n.type || "array" == n.type || "union" == n.type, s = t.safe(o) && C(p, { children: [N("span", { children: "\xA0" }), N(eJ, { schema: n })] });
		return N(eA, {
			value: t.child(o),
			children: l ? a.indent < 3 ? C(p, { children: [N(x, {
				to: `#${o}`,
				"data-index": a.indent,
				children: N(eP, {
					id: o,
					children: o
				})
			}), s] }) : C(p, { children: [N(B, {
				component: x,
				sx: {},
				to: `#${o}`,
				"data-index": a.indent,
				onClick: (e) => {
					t.safe(o) && (e.preventDefault(), e.stopPropagation(), r.next(!0));
				},
				children: N(eP, {
					id: o,
					children: o
				})
			}), t.safe(o) && N(eo, {
				isOpen: r.value,
				onClose: () => {
					r.next(!1);
				},
				children: N(eH, { children: C(eq, { children: [N(eP, { children: o }), N(eL, {
					value: { indent: 0 },
					children: s
				})] }) })
			})] }) : s
		});
	};
}, {
	displayName: "SchemaViewLink",
	props: ["schema"]
}), eH = E("div", { displayName: "DialogContainer" })({
	display: "flex",
	containerStyle: "sys.surface",
	height: "100vh",
	width: "36vw",
	roundedLeft: "sm",
	px: 16,
	py: 36,
	top: 0,
	right: 0,
	position: "absolute",
	overflow: "auto"
}), eJ = I((e) => {
	let t = e.schema;
	return i.schemaProp(t, "$ref") ? N(eM, { schema: t }) : () => {
		switch (t.type) {
			case "union": return N(p, { children: i.schemaProp(t, "oneOf")?.map((e, t) => C(p, { children: [t > 0 && C(eP, { children: [
				"\xA0",
				" | ",
				"\xA0"
			] }), N(eJ, { schema: e })] })) });
			case "intersection": return N(eP, { children: i.schemaProp(t, "allOf")?.filter((e) => !Object.keys(e).length).map((e, t) => C(p, { children: [t > 0 && C(eP, { children: [
				"\xA0",
				"&",
				"\xA0"
			] }), N(eJ, { schema: e })] })) });
			case "array": return C(eP, {
				sx: {
					wordBreak: "keep-all",
					whiteSpace: "nowrap"
				},
				children: [
					N(eP, { children: "Array<" }),
					N(eJ, { schema: i.schemaProp(t, "items") ?? a() }),
					N(eP, { children: ">" })
				]
			});
			case "object": return C(p, { children: [
				N(eP, { children: "{" }),
				N(eR, { children: N(p, { children: Object.entries(i.schemaProp(t, "properties") ?? {}).map(([e, a]) => a ? N(p, { children: C(eq, {
					spacing: 2,
					children: [N(eW, { schema: a }), C(eP, {
						sx: {
							wordBreak: "keep-all",
							whiteSpace: "nowrap"
						},
						children: [
							N(eT, {
								nullable: i.schemaProp(t, "nullable"),
								deprecated: i.schemaProp(t, "deprecated"),
								optional: !(i.schemaProp(t, "required") ?? []).includes(e),
								children: e
							}),
							N(eP, {
								sx: { mr: "1em" },
								children: ":"
							}),
							N(eJ, { schema: a })
						]
					})]
				}) }) : null) }) }),
				N(eP, { children: "}" })
			] });
			case "record": return C(p, { children: [
				N(eP, { children: "{" }),
				i.schemaProp(t, "additionalProperties") && N(p, { children: N(eR, { children: C(eq, { children: [
					C(eP, {
						sx: { mr: 1 },
						children: ["[K:", "\xA0"]
					}),
					N(eJ, { schema: i.schemaProp(t, "propertyNames") ?? l() }),
					C(eP, {
						sx: { mr: 1 },
						children: ["]:", "\xA0"]
					}),
					N(eJ, { schema: i.schemaProp(t, "additionalProperties") ?? a() })
				] }) }) }),
				N(eP, { children: "}" })
			] });
			case "enums": {
				let e = i.schemaProp(t, "enum") ?? [];
				if (1 == e.length) return N(eP, { children: JSON.stringify(e[0]) });
				let a = "any";
				return e.length > 0 && (a = typeof e[0]), C(p, { children: [N(eP, {
					sx: { fontWeight: "bold" },
					children: a
				}), N(eR, { children: e.map((e, a) => N(eB, {
					name: "enum",
					value: `${e}`,
					extra: i.metaProp(t, "enumLabels")?.[a] ? { label: JSON.stringify(i.metaProp(t, "enumLabels")[a]) } : {}
				}, e)) })] });
			}
		}
		let [e, r, n] = [
			t.type,
			i.metaProp(t, "format"),
			i.metaProp(t, "default")
		];
		return C(p, { children: [N(eP, {
			sx: { fontWeight: "bold" },
			children: e || "any"
		}), C(eR, { children: [
			r && N(eB, {
				name: "format",
				value: r
			}),
			!T(n) && N(eB, {
				name: "default",
				value: n
			}),
			eV.map((e) => {
				let a = i.schemaProp(t, e);
				return T(a) ? null : "pattern" == e ? N(eB, {
					name: e,
					value: a,
					extra: { errMsg: i.metaProp(t, "x-pattern-err-msg") }
				}) : N(eB, {
					name: e,
					value: a
				});
			})
		] })] });
	};
}, {
	displayName: "SchemaView",
	props: ["schema"]
}), eV = [
	"enum",
	"maximum",
	"exclusiveMaximum",
	"minimum",
	"exclusiveMinimum",
	"maxLength",
	"minLength",
	"pattern",
	"maxItems",
	"minItems",
	"maxProperties",
	"minProperties"
], ez = I((e) => {
	let t = eN.use();
	return () => {
		let a = v(e.response["x-status-return-errors"] ?? []).map((e) => (function(e = "") {
			let t = e.indexOf("{");
			return t > -1 ? e.slice(t + 1, e.length - 1).split(",").reduce((e, t) => (e.joining ? e.values[e.values.length - 1] += "," + t : e.values.push(t), t.split("\"").length % 2 == 0 && (e.joining = !e.joining), e), {
				values: [],
				joining: !1
			}).values.reduce((e, t) => {
				let a = t.indexOf("=");
				if (a < 0) return e;
				let r = t.slice(0, a), i = t.slice(a + 1);
				return T(r) || T(i) ? e : {
					...e,
					[r]: JSON.parse(i)
				};
			}, { code: e.slice(0, t) }) : null;
		})(e));
		return C(eX, { children: [N(eY, {
			"data-failed": function(e) {
				try {
					return Number(e) >= 400;
				} catch (e) {
					return !1;
				}
			}(e.code),
			children: e.code
		}), C(B, {
			sx: { pl: "4em" },
			children: [N(p, { children: Object.entries(e.response.content ?? {}).map(([e, { schema: a }]) => C(eG, { children: [N(eq, {
				spacing: 0,
				children: N(eJ, { schema: j.decode(a, (e) => [t.schema(e) ?? {}, d(e)]) })
			}), N("div", {
				"data-content-type": !0,
				children: e
			})] })) }), N(p, { children: a.length > 0 ? C(B, {
				sx: {
					mt: 16,
					containerStyle: "sys.surface-container",
					px: 12,
					py: 16,
					rounded: "xs"
				},
				children: [N(B, {
					sx: { pb: 8 },
					children: C("b", { children: [N("small", { children: "可能错误码" }), ":"] })
				}), C(eU, { children: [
					N(eK, {
						sx: { textStyle: "sys.label-small" },
						children: N("code", { children: "errors[*].code" })
					}),
					N(eK, {
						sx: { textStyle: "sys.label-small" },
						children: N("code", { children: "errors[*].message" })
					}),
					a.map((e) => e ? C(p, { children: [N(eK, {
						sx: {
							color: "sys.primary",
							textStyle: "sys.label-small",
							fontWeight: "bold"
						},
						children: N("code", { children: JSON.stringify(e.code) })
					}), N(eK, { children: e.message })] }) : null)
				] })]
			}) : null })]
		})] });
	};
}, {
	displayName: "ResponseView",
	props: ["code", "response"]
}), eU = E("div", { displayName: "Table" })({
	textStyle: "sys.label-medium",
	display: "grid",
	gap: 8,
	width: "100%",
	gridTemplateColumns: "min-content 1fr",
	gridAutoColumns: "auto"
}), eK = E("div", { displayName: "TableCell" })({}), eX = E("section", { displayName: "ResponseSection" })({}), eY = E("div", { displayName: "ResponseStatusCode" })({
	fontSize: 18,
	fontFamily: "code",
	color: "sys.success",
	py: 12,
	pos: "sticky",
	top: 0,
	_data_failed__true: { color: "sys.error" }
}), eG = E("section", { displayName: "ResponseSchema" })({
	pos: "relative",
	$data_content_type: {
		pos: "absolute",
		right: 0,
		top: 0,
		fontFamily: "code",
		opacity: .3
	}
}), eQ = E("div", (e, { slots: t }) => (a) => {
	let r = e.valued, i = e.invalid, n = e.disabled, o = (t.default?.() ?? []).map((e) => "input" === e.type ? (r = !!(e.props?.value ?? e.props?.placeholder ?? r), n = e.props?.disabled ?? n, c(e, { disabled: n })) : c(e));
	return C(a, {
		"data-valued": r,
		"data-invalid": i,
		"data-disabled": n,
		"data-focus-within": e.focus,
		"data-has-leading": !!t.leading,
		"data-has-trailing": !!t.trailing,
		children: [C("div", {
			"data-input-container": !0,
			children: [C("div", {
				"data-input-decorator-container": !0,
				children: [
					N("div", { "data-input-decorator-leading": !0 }),
					N("div", {
						"data-input-decorator-label": !0,
						children: N("div", {
							"data-input-label": !0,
							children: t.label?.()
						})
					}),
					N("div", { "data-input-decorator-trailing": !0 })
				]
			}), C("div", {
				"data-input-row": !0,
				children: [
					t.leading && N(eZ, {
						role: "leading",
						children: t.leading()
					}),
					o,
					t.trailing && N(eZ, {
						role: "trailing",
						children: t.trailing()
					})
				]
			})]
		}), t.supporting && N("div", {
			"data-input-supporting": !0,
			children: t.supporting?.()
		})]
	});
}, {
	displayName: "TextField",
	props: [
		"valued",
		"focus",
		"invalid",
		"disabled"
	]
})({
	display: "block",
	pos: "relative",
	textStyle: "sys.body-medium",
	$data_input_container: {
		pos: "relative",
		zIndex: 1
	},
	$data_input_row: {
		pos: "relative",
		rounded: "xs",
		overflow: "hidden",
		minHeight: 40,
		display: "flex",
		alignItems: "stretch",
		zIndex: 1
	},
	$data_input_decorator_container: {
		pos: "absolute",
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
		display: "flex",
		zIndex: 1,
		rounded: "xs"
	},
	$data_input_decorator_leading: {
		roundedLeft: "xs",
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		width: 16,
		borderLeft: "1px solid",
		borderTop: "1px solid",
		borderBottom: "1px solid",
		borderColor: "sys.outline",
		pointerEvents: "none"
	},
	$data_input_decorator_label: {
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		borderBottom: "1px solid",
		borderColor: "sys.outline"
	},
	$data_input_decorator_trailing: {
		borderRight: "1px solid",
		borderTop: "1px solid",
		borderBottom: "1px solid",
		borderColor: "sys.outline",
		roundedRight: "xs",
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		flex: 1,
		pointerEvents: "none"
	},
	$data_input_label: {
		position: "relative",
		top: -12,
		padding: 4,
		textStyle: "sys.body-small",
		color: "sys.on-surface-variant",
		display: "flex",
		alignItems: "center"
	},
	$data_input: {
		flex: 1,
		w: "100%",
		m: 0,
		px: 16,
		py: 4,
		cursor: "text",
		"&[readonly]": { cursor: "pointer" },
		bg: "inherit",
		color: "sys.on-surface",
		outline: "none",
		border: "none",
		textStyle: "sys.body-medium",
		_disabled: { cursor: "not-allowed" }
	},
	$data_input_supporting: {
		textStyle: "sys.body-small",
		px: 16,
		pt: 4,
		display: "flex",
		gap: 16,
		width: "100%",
		overflow: "auto",
		color: "sys.on-surface-variant"
	},
	$data_icon: { color: "sys.on-surface-variant" },
	_has_leading: {
		$data_input: { pl: 36 },
		$data_input_label: { left: 36 }
	},
	_has_trailing: { $data_input: { pr: 32 } },
	_valued: { $data_input: {} },
	_focusWithin: {
		$data_input_decorator_leading: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_decorator_label: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_decorator_trailing: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_label: { color: "sys.primary" }
	},
	_invalid: {
		$data_input_decorator_leading: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_decorator_label: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_decorator_trailing: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_label: { color: "sys.error" },
		$data_input_supporting: { color: "sys.error" },
		$data_icon: { color: "sys.error" }
	},
	_disabled: {
		opacity: .38,
		cursor: "not-allowed"
	}
}), eZ = E("div", { role: g(["leading", "trailing"]) }, { displayName: "Maker" })({
	pos: "absolute",
	top: 4,
	bottom: 4,
	display: "flex",
	alignItems: "center",
	color: "sys.on-surface-variant",
	_role__leading: {
		left: 12,
		$data_icon: { ml: -4 }
	},
	_role__trailing: {
		right: 12,
		$data_icon: { mr: -4 }
	}
}), e0 = I((e, {}) => {
	let t = ed.of(e.field$.typedef, T(e.field$.input) ? void 0 : e.field$.input);
	return _(t, V(1), U((t) => {
		e.field$.update(t);
	}), k()), () => N(e1, { children: N(eu, {
		value: t,
		children: N(eh, {})
	}) });
}, {
	displayName: "JSONEditorInput",
	props: ["field$", "readOnly"]
}), e1 = E("div", { displayName: "JSONInputContainer" })({
	position: "relative",
	width: "100%",
	minHeight: "40em",
	py: 8,
	px: 12,
	overflow: "hidden"
});
let e2 = ({ field: e, value: t }) => C(B, {
	component: "span",
	sx: { display: "block" },
	children: [C(B, {
		component: "span",
		sx: {
			fontWeight: "bold",
			marginRight: "0.5em"
		},
		children: [e, ":"]
	}), N("span", { children: t })]
});
var e4 = ({ method: e, url: t, params: a }) => {
	let r = ee(a);
	return C(B, {
		component: "span",
		sx: { fontWeight: "bold" },
		children: [
			`${e.toUpperCase()} `,
			C(B, {
				component: "span",
				sx: { fontWeight: "medium" },
				children: [t, r ? `?${r}` : ""]
			}),
			" HTTP/*"
		]
	});
}, e8 = D({ $default: e().optional() }, ({}, { slots: e }) => () => N(B, {
	sx: {
		containerStyle: "sys.surface-container",
		rounded: "xs",
		width: "100%",
		overflow: "auto",
		py: 4,
		px: 8
	},
	children: N(B, {
		component: "pre",
		sx: {
			padding: 4,
			margin: 0,
			textStyle: "sys.body-small",
			fontFamily: "code"
		},
		children: N("code", { children: e.default?.() })
	})
}), { displayName: "CodeView" }), e6 = D({ request: e() }, (e) => () => {
	let a = e.request;
	return C(e8, { children: [
		N(e4, { ...a }),
		N(p, { children: Object.entries({
			"User-Agent": navigator.userAgent,
			Origin: location.origin,
			Referer: `${location.origin}${location.pathname}`,
			...a.headers
		}).toSorted().map(([e, t]) => N(e2, {
			field: e,
			value: t
		}, e)) }),
		a.body && C(p, { children: [N("br", {}), function(e) {
			if (e5(e.headers).includes("multipart/form-data")) {
				var a;
				let i, n = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
				return e.headers = {
					...e.headers,
					"Content-Type": `multipart/form-data; boundary=${n}`
				}, a = e.body, i = (e, a) => a instanceof File || a instanceof Blob ? `${n}
Content-Disposition: form-data; name="${e}"${a.name ? `; filename="${a.name}"` : ""}
Content-Type: ${a.type}

[File Content]
` : t(a) ? a.map((t) => i(e, t)).join("\n") : `${n}
Content-Disposition: form-data; name="${e}"

${r(a) ? JSON.stringify(a) : String(a)}
`, Object.entries(a).map(([e, t]) => i(e, t)).join("\n") + `${n}--`;
			}
			return e5(e.headers).includes("application/x-www-form-urlencoded") ? ee(e.body) : e7(e.headers) ? JSON.stringify(e.body, null, 2) : e.body;
		}(a)] })
	] });
}, { displayName: "HttpRequest" }), e3 = D({ response: e() }, (e, {}) => () => {
	let t = e.response;
	return e5(t.headers).includes("image/") ? N("div", { children: N("img", {
		src: ((e, t) => {
			let a = new Uint8Array(e), r = "";
			for (let e = a.byteLength, t = 0; t < e; t++) r += String.fromCharCode(a[t]);
			return `data:${t};base64,${btoa(r)}`;
		})(t.body, e5(t.headers)),
		alt: ""
	}) }) : (console.log(t), C(e8, { children: [
		C("span", { children: ["HTTP/* ", t.status] }),
		N("br", {}),
		t.headers && N(p, { children: Object.entries(t.headers).map(([e, t]) => N(e2, {
			field: e,
			value: t
		}, e)) }),
		N("br", {}),
		t.body ? e7(t.headers) ? JSON.stringify(t.body, null, 2) : `${t.body}` : null
	] }));
}, { displayName: "HTTPResponse" });
function e5(e = {}) {
	for (let [t, a] of Object.entries(e)) if ("content-type" == t.toLowerCase()) return a;
	return "";
}
var e7 = (e) => e5(e).includes("application/json"), e9 = I((e) => _(eN.use().response$(e.operationID), h((e) => N(te, { children: N(e3, { response: e }) }))), {
	displayName: "ResponsePreview",
	props: ["operationID"]
}), te = E("section", { displayName: "ResponseSection" })({
	maxHeight: "40vh",
	overflow: "auto"
}), tt = I((e, { slots: t }) => {
	let a = eN.use(), r = {};
	for (let t of e.operation.parameters ?? []) {
		let e = j.decode(t.schema, (e) => [a.schema(e) ?? {}, d(e)]).use(ex(`${t.name}, in=${JSON.stringify(t.in)}`));
		t.required || (e = e.optional()), e.use(eg(t.schema.title)), ["object", "array"].includes(t.schema.type ?? "") ? r[t.name] = e.use(eb(e0)) : r[t.name] = e;
	}
	if (e.operation.requestBody) {
		let t = Object.entries(e.operation.requestBody.content ?? {})[0];
		if (t) {
			let [e, i] = t, n = j.decode(i.schema ?? {}, (e) => [a.schema(e) ?? {}, d(e)]).use(ex(`body, content-type = ${JSON.stringify(e)}`));
			e.includes("text/") ? r.body = n : e.includes("octet-stream") || e.includes("image/") ? r.body = n.use(eb(ti)) : r.body = n.use(eb(e0));
		}
	}
	let i = y(), n = P(), l = ef.of(o(r), (() => {
		try {
			let e = n.query.params;
			return JSON.parse(atob((Array.isArray(e) ? e[0] : e) ?? ""));
		} catch (e) {}
		return {};
	})());
	_(l, U((t) => {
		a.request(e.operation.operationId, t);
	}), U((e) => {
		i.replace({ query: { params: btoa(JSON.stringify(e)) } });
	}), k());
	let s = _(l.inputs$, h((t) => {
		let r = a.asRequestConfigCreator(e.operation.operationId);
		return r ? N(e6, { request: r(t ?? {}) }) : null;
	}));
	return () => C(B, {
		sx: {
			py: 24,
			px: 24,
			gap: 24,
			width: "100%",
			height: "100%",
			display: "flex",
			alignItems: "stretch",
			overflow: "hidden"
		},
		component: "form",
		onSubmit: (e) => {
			e.preventDefault(), l.submit();
		},
		children: [N(B, {
			sx: {
				flex: 2,
				py: 24,
				display: "flex",
				flexDirection: "column",
				gap: 32,
				height: "100%",
				overflow: "auto"
			},
			children: [...l.fields(l.typedef)].map((e) => N(ta, { field$: e }))
		}), N(B, {
			sx: {
				flex: 3,
				gap: 24,
				display: "flex",
				flexDirection: "column",
				height: "100%",
				overflow: "hidden"
			},
			children: C(B, {
				sx: {
					display: "flex",
					flexDirection: "column",
					gap: 24,
					height: "100%",
					overflow: "hidden"
				},
				children: [
					s,
					N(B, {
						sx: { px: 8 },
						children: N(ec, {
							type: "submit",
							children: "发起请求"
						})
					}),
					N(e9, { operationID: e.operation.operationId }),
					N(B, {
						sx: {
							flex: 1,
							overflow: "auto"
						},
						children: t.default?.()
					})
				]
			})
		})]
	}, e.operation.operationId);
}, {
	displayName: "RequestBuilder",
	props: ["operation"]
}), ta = I(({ field$: e }, { render: t }) => (u(() => {
	e.destroy();
}), _(H([e, e.input$]), t(([t, a]) => {
	var r;
	let n = i.metaProp(e.typedef, "inputBy") ?? tr, o = (i.metaProp(e.typedef, "readOnlyWhenInitialExist") ?? !1) && !!t.initial;
	return N(eQ, {
		valued: !T(a ?? t.initial),
		invalid: !!t.error,
		focus: !!t.focus,
		$label: C("span", { children: [(r = e).meta.label ?? r.name, e.optional ? "（非必填）" : ""] }),
		$supporting: C(eq, { children: [N(eW, { schema: e.typedef }), N(eJ, { schema: e.typedef })] }),
		$trailing: n.$trailing,
		children: N(n, {
			field$: e,
			readOnly: o
		})
	});
}))), {
	displayName: "ParameterInput",
	props: ["field$"]
}), tr = D({
	readOnly: w().optional(),
	field$: e()
}, (e) => () => {
	let { readOnly: t, field$: a,...r } = e;
	return N("input", {
		...r,
		"data-input": !0,
		type: "text",
		readonly: t,
		name: a.name,
		value: a.input,
		onChange: (e) => {
			let t = e.target.value;
			switch (a.typedef.type) {
				case "number":
					try {
						a.update(a.typedef.create(parseFloat(t)));
					} catch (e) {}
					break;
				case "integer":
					try {
						a.update(a.typedef.create(parseInt(t)));
					} catch (e) {}
					break;
				case "boolean":
					try {
						a.update(a.typedef.create("false" !== t || !!t));
					} catch (e) {}
					break;
				default: a.update(a.typedef.create(t));
			}
		},
		onFocus: () => a.focus(),
		onBlur: () => a.blur()
	});
}, { displayName: "TextInput" }), ti = I((e) => {
	let t = f(null);
	return _(t, U((t) => {
		t && e.field$.update(t);
	}), $()), () => {
		let { readOnly: a, accept: r } = e;
		return C(B, {
			component: "label",
			"data-input": !0,
			sx: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: 8,
				$data_file_input: { display: "none" },
				$data_icon: {
					width: 40,
					height: 40,
					my: 40
				}
			},
			children: [
				N("input", {
					type: "file",
					name: e.field$.name,
					readonly: a,
					accept: r,
					"data-file-input": !0,
					onChange: (e) => {
						let a = e.target.files?.[0];
						a && (t.value = a);
					}
				}),
				N(em, { path: en }),
				N("span", { children: t.value?.name })
			]
		});
	};
}, {
	displayName: "FileSelectInput",
	props: [
		"field$",
		"readOnly",
		"accept"
	]
}), tn = I((e, { render: t }) => {
	let a = eN.use();
	return m(() => {
		a.request(e.op.operationId, {});
	}), _(a.response$(e.op.operationId), t((e) => N(to, { database: e.body })));
}, {
	displayName: "DatabaseErContainer",
	props: ["op"]
}), to = I((e) => () => C(td, { children: [N(tp, { children: e.database.name }), Object.entries(e.database.tables).map(([t, a]) => N(tl, {
	database: e.database,
	table: a,
	tableName: t
}))] }), {
	displayName: "DatabaseErView",
	props: ["database"]
}), tl = I((e, { render: t }) => {
	let a = new S([]);
	return _(a, t((t) => {
		let r = e.table.columns, i = e.table.constraints;
		return C(tc, {
			open: !0,
			children: [
				C(tu, { children: [
					N("span", { children: e.tableName }),
					N(tw, {}),
					N(tx, { meta: e.table })
				] }),
				Object.keys(r).map((a) => {
					let i = r[a];
					return C(tm, {
						"data-hover": t.includes(a),
						children: [
							N(th, { children: a }),
							i.of ? N(ts, {
								database: e.database,
								of: i.of
							}) : N(tb, { children: i.type }),
							N(ty, { children: N(tx, { meta: i }) })
						]
					});
				}),
				Object.entries(i).map(([e, t]) => N(tm, {
					onMouseover: () => {
						a.next(t.columnNames.map((e) => e.name));
					},
					onMouseleave: () => {
						a.next([]);
					},
					children: C(tv, {
						"data-primary": t.primary,
						"data-unique": t.unique,
						children: [
							N(em, { path: t.unique ? ei : ey }),
							N("span", { children: e }),
							C("span", { children: [
								"(",
								t.columnNames.map((e) => [e.name, ...e.options ?? []].join(" ")).join(","),
								")"
							] })
						]
					})
				})),
				N(B, { sx: { py: 4 } })
			]
		});
	}));
}, {
	displayName: "DatabaseErTableView",
	props: [
		"database",
		"table",
		"tableName"
	]
}), ts = I((e, { render: t }) => {
	let a = S.seed(!1), r = _(a, t((t) => {
		let r = e.of.split(".")[0];
		return N(eo, {
			isOpen: t,
			onClose: () => {
				a.next(!1);
			},
			children: N(tg, { children: N(tl, {
				database: e.database,
				tableName: r,
				table: e.database.tables[r]
			}) })
		});
	}));
	return () => C(tf, {
		onClick: () => {
			a.next(!0);
		},
		children: [e.of, r]
	});
}, {
	displayName: "DatabaseErTableColumnOfView",
	props: ["of", "database"]
}), td = E("div", { displayName: "DatabaseErMain" })({
	py: 18,
	px: 24,
	flex: 1,
	overflow: "auto"
}), tp = E("div", { displayName: "DatabaseErHeader" })({
	py: 8,
	px: 16,
	textStyle: "sys.label-large"
}), tc = E("details", { displayName: "DatabaseErTable" })({
	"& + &": { mt: 16 },
	rounded: "sm",
	border: "1px solid",
	borderColor: W("sys.outline-variant", q(.38)),
	overflow: "hidden",
	width: "100%"
}), tu = E("summary", { displayName: "DatabaseErTableSummary" })({
	textStyle: "sys.label-large",
	py: 8,
	px: 16,
	display: "flex",
	color: "sys.primary"
}), tm = E("div", { displayName: "DatabaseErTableDef" })({
	px: 16,
	py: 4,
	display: "flex",
	_hover: { containerStyle: "sys.surface-container-low" }
}), th = E("div", { displayName: "DatabaseErTableColumnName" })({
	display: "flex",
	width: "20vw",
	textStyle: "sys.label-small",
	font: "code"
}), ty = E("div", { displayName: "DatabaseErTableColumnComment" })({
	display: "flex",
	textStyle: "sys.label-small",
	width: "20vw",
	justifyContent: "end"
}), tf = E("div", { displayName: "DatabaseErTableColumnOf" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	color: "sys.primary",
	_hover: { cursor: "pointer" }
}), tb = E("div", { displayName: "DatabaseErTableColumnType" })({
	flex: 1,
	textStyle: "sys.label-small"
}), tx = E("div", (e, {}) => (t) => C(t, { children: [
	e.meta.title,
	" ",
	e.meta.description ? N(ea, {
		$title: N(eE, { children: N(es, { text: e.meta.description }) }),
		children: N(em, { path: el })
	}) : null
] }), {
	displayName: "DatabaseDescription",
	props: ["meta"]
})({
	position: "relative",
	display: "flex",
	alignItems: "center",
	gap: 4,
	textStyle: "sys.body-small",
	fontSize: 10,
	lineHeight: 12,
	[`${em}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
}), tg = E("div", { displayName: "DialogContainer" })({
	display: "flex",
	containerStyle: "sys.surface",
	width: "90vw",
	roundedBottom: "sm",
	px: 16,
	py: 36,
	top: 0,
	position: "absolute",
	overflow: "auto"
}), tv = E("div", { displayName: "DatabaseErTableConstraintName" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	display: "flex",
	alignItems: "center",
	gap: "1em",
	_primary: { [`${em}`]: { color: "sys.primary" } },
	_unique: { [`${em}`]: {
		position: "relative",
		"&::before": {
			content: JSON.stringify("1"),
			position: "absolute",
			right: -6,
			textStyle: "sys.label-small",
			fontSize: 8
		}
	} }
}), tw = E("div", { displayName: "Spacer" })({ flex: 1 }), t$ = E("pre", ({}, { slots: e }) => (t) => {
	let a = e.default?.(), r = a?.[0];
	return r && "language-mermaid" === r.props.className ? N(t_, { code: r.children }) : N(t, { children: a });
}, { displayName: "PreWithMermaid" })({}), t_ = I((e, {}) => {
	let t = f(null);
	return _(t, J((e) => e ? X((async () => {
		let { default: t } = await ev(async () => {
			let { default: e } = await import("./vendor-mermaid.esfBtHsb.chunk.js");
			return { default: e };
		}, __vite__mapDeps([0,1]));
		await t.run({ nodes: [e] });
	})()) : G), $()), () => N(tN, {
		ref: t,
		class: "mermaid",
		children: e.code
	});
}, {
	displayName: "Mermaid",
	props: ["code"]
}), tN = E("div", { displayName: "MermaidContainer" })({ "& > svg": { minWidth: "80%" } }), tS = I((e, {}) => {
	let t = eN.use(), a = _(e.operationId$, J((e) => t.operation$(e))), r = _(a, M((e) => !!e)), i = S.seed(!1), n = _(r, h((e) => e.description ? N(es, {
		text: e.description,
		components: { pre: t$ }
	}) : null)), o = _(i, h((e) => N(eo, {
		isOpen: e,
		onClose: () => {
			i.next(!1);
		},
		children: N(l, { children: N(eE, { children: n }) })
	}))), l = E("div", { displayName: "DialogContainer" })({
		containerStyle: "sys.surface",
		width: "95vw",
		maxHeight: "98vh",
		roundedBottom: "sm",
		px: 32,
		pt: 16,
		py: 48,
		top: 0,
		position: "absolute",
		overflow: "auto",
		pre: { width: "100%" },
		"svg,img": {
			display: "block",
			m: "0 auto"
		}
	}), s = _(r, h((e) => e.description ? C(ep, {
		onClick: () => {
			i.next(!0);
		},
		children: [N(em, { path: er }), o]
	}) : null)), d = _(r, h((e) => N(tt, {
		operation: e,
		children: N(p, { children: Object.entries(e.responses ?? {}).map(([e, t]) => N(ez, {
			code: e,
			response: t
		}, e)) })
	}, e.operationId))), c = _(r, h((e) => C(tO, {
		sx: { containerStyle: {
			get: "sys.primary-container",
			post: "sys.success-container",
			put: "sys.warning-container",
			delete: "sys.error-container"
		}[e.method] ?? "sys.secondary-container" },
		children: [
			N("div", {
				"data-operation-method": !0,
				children: e.method
			}),
			C("div", {
				"data-operation-desc": !0,
				children: [N("div", {
					"data-operation-path": !0,
					children: e.path
				}), C("div", {
					"data-operation-summary": !0,
					children: [
						e.summary,
						" ",
						e.operationId != e.summary ? e.operationId : ""
					]
				})]
			}),
			N(B, { sx: { flex: 1 } }),
			s
		]
	})));
	return _(a, h((e) => e ? "SycDatabaseEr" == e.operationId ? C(tI, { children: [c, N(tC, { children: N(tn, { op: e }) })] }, e.operationId) : C(tI, { children: [c, N(tC, { children: N(B, {
		sx: {
			flex: 1,
			overflow: "auto"
		},
		children: d
	}) })] }, e.operationId) : null));
}, {
	displayName: "OperationView",
	props: ["operationId"]
}), tI = E("div", { displayName: "OperationContainer" })({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), tC = E("div", { displayName: "OperationMain" })({
	flex: 1,
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), tO = E("summary", { displayName: "OperationHeading" })({
	display: "flex",
	alignItems: "center",
	width: "100%",
	px: 16,
	py: 8,
	gap: 16,
	$data_operation_method: {
		textTransform: "uppercase",
		fontSize: 24,
		fontFamily: "code"
	},
	$data_operation_path: { fontFamily: "code" },
	$data_operation_summary: {
		opacity: .8,
		textStyle: "sys.body-small"
	}
});
export { eS as n, eN as r, tS as t };
