const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.BUJzcPsl.chunk.js","assets/vendor-min-mermaid~architectureDiagram-4X3Z3J56.3cmRlxJg.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BHePMx5P.chunk.js","assets/vendor-min-mermaid~blockDiagram-MFEFEJY7.CWfUmpcG.chunk.js","assets/vendor-min-mermaid~chunk-2K7MXLZZ.qYuMXQX8.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.CVKcaz_P.chunk.js","assets/vendor-min-mermaid~chunk-A6NU47M6.GzJuVpdN.chunk.js","assets/vendor-min-mermaid~chunk-F3RBCZRS.B8Vm61Fo.chunk.js","assets/vendor-min-mermaid~mermaid.esm.min.CCMBNZNV.chunk.js"])))=>i.map(i=>d[i]);
import { $ as e, A as t, B as a, Bt as r, C as i, F as n, G as o, H as l, I as s, J as d, K as p, L as c, M as u, N as m, O as h, P as y, Q as f, Qt as b, Ut as x, V as g, X as v, Z as w, Zt as $, _, _t as N, a as S, c as I, ct as C, dt as O, g as k, gt as D, h as P, j, k as T, l as q, m as B, nn as L, o as E, p as W, r as R, rn as F, rt as J, s as M, t as A, tt as H, u as V, w as z, x as U } from "./vendor-innoai-tech-vuekit.xnGqAMjy.chunk.js";
import { d as K, f as Z, o as Q, s as X } from "./vendor-innoai-tech-vueuikit.DRnVjSOS.chunk.js";
import { i as G, n as Y, r as ee, t as et } from "./vendor-innoai-tech-fetcher.xzrDI7f3.chunk.js";
import { a as ea, c as er, d as ei, f as en, i as eo, l as el, m as es, n as ed, o as ep, p as ec, r as eu, s as em, t as eh, u as ey } from "./vendor-innoai-tech-jsoneditor.D6Ox0hKK.chunk.js";
import { i as ef, n as eb, r as ex, t as eg } from "./lib-nodepkg-vueformdata.Cn_xBo0l.chunk.js";
import { Nn as ev } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.3cmRlxJg.chunk.js";
var ew = class e extends W {
	static empty() {
		return new e({
			openapi: "3.1.0",
			components: { schemas: {} },
			paths: {}
		});
	}
	#e = et({
		paramsSerializer: ee,
		transformRequestBody: G
	});
	#t = new m(/* @__PURE__ */ new Map());
	get #a() {
		return this.value.servers?.[0]?.url ?? "";
	}
	response$(e) {
		return B(this.#t, k((t) => {
			let a = t.get(e);
			return a ? z(a, a.error$) : u;
		}));
	}
	requesting$(e) {
		return B(this.#t, k((a) => a.get(e)?.requesting$ ?? t(!1)));
	}
	asRequestConfigCreator(e) {
		let t = this.#r(e);
		if (!t) return null;
		let a = Object.keys(t.requestBody?.content ?? {})[0];
		return (e = {}) => ({
			method: t.method.toUpperCase(),
			url: this.#a + e_(t.path, e),
			params: x(e, t.parameters?.filter((e) => "query" == e.in).map((e) => e.name) ?? []),
			headers: {
				...x(e, t.parameters?.filter((e) => "header" == e.in).map((e) => e.name) ?? []),
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
			a = Y(Object.assign(t, {
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
		return B(this, k((a) => {
			for (let r of e$(a, { operationId: e })) if (r) return t(r);
			return t(null);
		}));
	}
	operations$(e) {
		return B(this, k((a) => t([...e$(a, e)])));
	}
	schema$(e) {
		let a = e.split("#/")[1]?.split("/") ?? [];
		return B(this, k((e) => a ? t(F(e, a) ?? null) : t(null)), T((e) => e ? {
			...e,
			$id: a[a.length - 1]
		} : e));
	}
	schema(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		if (t) return F(this.value, t) ?? void 0;
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
let e_ = (e, t = {}) => e.replace(/{([\s\S]+?)}/g, (e, a) => [].concat(t[a] || e).join(",")), eN = A(() => ew.empty(), { name: "OpenAPI" });
var eS = R(({}, {}) => {
	let e = eN.use(), t = new W({ operationId: void 0 }), a = new y();
	B(a, U(200), P((e) => {
		t.next((t) => {
			t.operationId = `*${e ?? ""}`;
		});
	}), V());
	let r = I(null);
	B(r, k((e) => {
		if (e) {
			let t = (t) => {
				t && e.scrollTo({ top: t.offsetTop - e.offsetTop });
			};
			return new n(() => {
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
		return u;
	}), q());
	let i = B(t, k((t) => e.operations$(t)), S((e) => {
		let t = Object.groupBy(e, (e) => e.group);
		return M(eC, { children: [E(eO, { children: E("input", {
			type: "text",
			placeholder: "请输入 operationId 查询",
			onInput: (e) => {
				a.next(e.target.value);
			}
		}) }), E(ek, {
			sx: {
				flex: 1,
				overflow: "scroll"
			},
			ref: r,
			children: Object.entries(t).toSorted().map(([e, t]) => M("div", {
				"data-nav-group": !0,
				children: [E("div", {
					"data-nav-group-heading": !0,
					children: e
				}), E("div", {
					"data-nav-group-contents": !0,
					children: t?.map((e) => M(eP, {
						component: s,
						to: `/operations/${e.operationId}`,
						children: [E(X, {
							"data-operation-method": !0,
							sx: { color: {
								get: "sys.primary",
								post: "sys.success",
								put: "sys.warning",
								delete: "sys.error"
							}[e.method] ?? "sys.secondary" },
							children: e.method
						}), M("div", {
							"data-operation-desc": !0,
							children: [E("div", {
								"data-operation-id": !0,
								children: e.operationId
							}), e.summary ? E("div", {
								"data-operation-summary": !0,
								children: e.summary != e.operationId ? e.summary : E("span", { children: "\xA0" })
							}) : void 0]
						})]
					}))
				})]
			}))
		})] });
	}));
	return () => M(eI, { children: [i, E(eD, { children: E(c, {}) })] });
}, { displayName: "OpenAPIView" }), eI = Q("div", { displayName: "Container" })({
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	display: "flex"
}), eC = Q("aside", { displayName: "NavContainer" })({
	width: 240,
	py: 4,
	display: "flex",
	flexDirection: "column",
	gap: 4,
	height: "100%",
	overflow: "hidden",
	borderRight: "1px solid",
	borderColor: "sys.outline"
}), eO = Q("div", { displayName: "NavSearchBox" })({
	input: {
		py: 10,
		px: 12,
		border: "none",
		width: "100%",
		outline: 0
	},
	borderBottom: "1px solid",
	borderColor: "sys.outline"
}), ek = Q("div", { displayName: "Nav" })({
	display: "flex",
	flexDirection: "column",
	gap: 4,
	$data_nav_group_heading: {
		px: 12,
		py: 4,
		textStyle: "sys.label-small",
		containerStyle: "sys.secondary-container"
	}
}), eD = Q("main", { displayName: "Main" })({
	flex: 1,
	overflow: "hidden"
}), eP = Q("a", { displayName: "OperationListItem" })({
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
}), ej = Q("div", { displayName: "Token" })({
	display: "inline-table",
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 11,
	lineHeight: 14
}), eT = Q("div", {
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
}), eq = Q("div", (e, { slots: t }) => {
	let a = eW.use();
	return (r) => E(r, {
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
}), eB = Q("div", (e, {}) => (t) => {
	let a = J.metaProp(e.schema, "title") ?? "", r = J.metaProp(e.schema, "description") ?? "";
	return M(t, { children: [
		a,
		" ",
		r ? E(ea, {
			$title: E(eL, { children: E(es, { text: r }) }),
			children: E(em, { path: el })
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
}), eL = Q("div", { displayName: "MarkdownContainer" })({
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
}), eE = ({ name: e, value: t, extra: a }) => "" == t ? null : E(eq, { children: M(ej, {
	sx: {
		opacity: .7,
		fontSize: "0.9em",
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	},
	children: [
		E(ej, {
			sx: { color: "sys.primary" },
			children: `@${e}(`
		}),
		`${t}`,
		Object.entries(a ?? {}).map(([e, t]) => r(t) ? null : M(C, { children: [
			M(ej, {
				sx: { opacity: .5 },
				children: [",", "\xA0"]
			}),
			E(ej, {
				sx: { opacity: .5 },
				children: e
			}),
			M(ej, {
				sx: { opacity: .5 },
				children: [":", "\xA0"]
			}),
			E(ej, {
				sx: { opacity: .7 },
				children: t
			})
		] })),
		E(ej, {
			sx: { color: "sys.primary" },
			children: ")"
		})
	]
}) }), eW = A(() => ({ indent: 0 }), { name: "IntentContext" }), eR = l(({}, { slots: e }) => {
	let t = eW.use();
	return () => E(eW, {
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
}, eJ = A(() => new eF("")), eM = R((e) => {
	let t = eJ.use(), a = eW.use(), r = I(!1);
	return () => {
		let i = e.schema, n = J.schemaProp(e.schema, "$ref"), o = "intersection" == (i = J.schemaProp(e.schema, J.unwrap)()).type || "object" == i.type || "union" == i.type || "record" == i.type || "array" == i.type || "union" == i.type, l = t.safe(n) && M(C, { children: [E("span", { children: "\xA0" }), E(eH, { schema: i })] });
		return E(eJ, {
			value: t.child(n),
			children: o ? a.indent < 3 ? M(C, { children: [E(s, {
				to: `#${n}`,
				"data-index": a.indent,
				children: E(ej, {
					id: n,
					children: n
				})
			}), l] }) : M(C, { children: [E(X, {
				component: s,
				sx: {},
				to: `#${n}`,
				"data-index": a.indent,
				onClick: (e) => {
					t.safe(n) && (e.preventDefault(), e.stopPropagation(), r.next(!0));
				},
				children: E(ej, {
					id: n,
					children: n
				})
			}), t.safe(n) && E(eo, {
				isOpen: r.value,
				onClose: () => {
					r.next(!1);
				},
				children: E(eA, { children: M(eq, { children: [E(ej, { children: n }), E(eW, {
					value: { indent: 0 },
					children: l
				})] }) })
			})] }) : l
		});
	};
}, {
	displayName: "SchemaViewLink",
	props: ["schema"]
}), eA = Q("div", { displayName: "DialogContainer" })({
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
}), eH = R((e) => {
	let t = e.schema;
	return J.schemaProp(t, "$ref") ? E(eM, { schema: t }) : () => {
		switch (t.type) {
			case "union": return E(C, { children: J.schemaProp(t, "oneOf")?.map((e, t) => M(C, { children: [t > 0 && M(ej, { children: [
				"\xA0",
				" | ",
				"\xA0"
			] }), E(eH, { schema: e })] })) });
			case "intersection": return E(ej, { children: J.schemaProp(t, "allOf")?.filter((e) => !Object.keys(e).length).map((e, t) => M(C, { children: [t > 0 && M(ej, { children: [
				"\xA0",
				"&",
				"\xA0"
			] }), E(eH, { schema: e })] })) });
			case "array": return M(ej, {
				sx: {
					wordBreak: "keep-all",
					whiteSpace: "nowrap"
				},
				children: [
					E(ej, { children: "Array<" }),
					E(eH, { schema: J.schemaProp(t, "items") ?? d() }),
					E(ej, { children: ">" })
				]
			});
			case "object": return M(C, { children: [
				E(ej, { children: "{" }),
				E(eR, { children: E(C, { children: Object.entries(J.schemaProp(t, "properties") ?? {}).map(([e, a]) => a ? E(C, { children: M(eq, {
					spacing: 2,
					children: [E(eB, { schema: a }), M(ej, {
						sx: {
							wordBreak: "keep-all",
							whiteSpace: "nowrap"
						},
						children: [
							E(eT, {
								nullable: J.schemaProp(t, "nullable"),
								deprecated: J.schemaProp(t, "deprecated"),
								optional: !(J.schemaProp(t, "required") ?? []).includes(e),
								children: e
							}),
							E(ej, {
								sx: { mr: "1em" },
								children: ":"
							}),
							E(eH, { schema: a })
						]
					})]
				}) }) : null) }) }),
				E(ej, { children: "}" })
			] });
			case "record": return M(C, { children: [
				E(ej, { children: "{" }),
				J.schemaProp(t, "additionalProperties") && E(C, { children: E(eR, { children: M(eq, { children: [
					M(ej, {
						sx: { mr: 1 },
						children: ["[K:", "\xA0"]
					}),
					E(eH, { schema: J.schemaProp(t, "propertyNames") ?? H() }),
					M(ej, {
						sx: { mr: 1 },
						children: ["]:", "\xA0"]
					}),
					E(eH, { schema: J.schemaProp(t, "additionalProperties") ?? d() })
				] }) }) }),
				E(ej, { children: "}" })
			] });
			case "enums": {
				let e = J.schemaProp(t, "enum") ?? [];
				if (1 == e.length) return E(ej, { children: JSON.stringify(e[0]) });
				let a = "any";
				return e.length > 0 && (a = typeof e[0]), M(C, { children: [E(ej, {
					sx: { fontWeight: "bold" },
					children: a
				}), E(eR, { children: e.map((e, a) => E(eE, {
					name: "enum",
					value: `${e}`,
					extra: J.metaProp(t, "enumLabels")?.[a] ? { label: JSON.stringify(J.metaProp(t, "enumLabels")[a]) } : {}
				}, e)) })] });
			}
		}
		let [e, a, i] = [
			t.type,
			J.metaProp(t, "format"),
			J.metaProp(t, "default")
		];
		return M(C, { children: [E(ej, {
			sx: { fontWeight: "bold" },
			children: e || "any"
		}), M(eR, { children: [
			a && E(eE, {
				name: "format",
				value: a
			}),
			!r(i) && E(eE, {
				name: "default",
				value: i
			}),
			eV.map((e) => {
				let a = J.schemaProp(t, e);
				return r(a) ? null : "pattern" == e ? E(eE, {
					name: e,
					value: a,
					extra: { errMsg: J.metaProp(t, "x-pattern-err-msg") }
				}) : E(eE, {
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
], ez = R((e) => {
	let t = eN.use();
	return () => {
		let a = b(e.response["x-status-return-errors"] ?? []).map((e) => (function(e = "") {
			let t = e.indexOf("{");
			return t > -1 ? e.slice(t + 1, e.length - 1).split(",").reduce((e, t) => (e.joining ? e.values[e.values.length - 1] += "," + t : e.values.push(t), t.split("\"").length % 2 == 0 && (e.joining = !e.joining), e), {
				values: [],
				joining: !1
			}).values.reduce((e, t) => {
				let a = t.indexOf("=");
				if (a < 0) return e;
				let i = t.slice(0, a), n = t.slice(a + 1);
				return r(i) || r(n) ? e : {
					...e,
					[i]: JSON.parse(n)
				};
			}, { code: e.slice(0, t) }) : null;
		})(e));
		return M(eZ, { children: [E(eQ, {
			"data-failed": function(e) {
				try {
					return Number(e) >= 400;
				} catch (e) {
					return !1;
				}
			}(e.code),
			children: e.code
		}), M(X, {
			sx: { pl: "4em" },
			children: [E(C, { children: Object.entries(e.response.content ?? {}).map(([e, { schema: a }]) => M(eX, { children: [E(eq, {
				spacing: 0,
				children: E(eH, { schema: o.decode(a, (e) => [t.schema(e) ?? {}, p(e)]) })
			}), E("div", {
				"data-content-type": !0,
				children: e
			})] })) }), E(C, { children: a.length > 0 ? M(X, {
				sx: {
					mt: 16,
					containerStyle: "sys.surface-container",
					px: 12,
					py: 16,
					rounded: "xs"
				},
				children: [E(X, {
					sx: { pb: 8 },
					children: M("b", { children: [E("small", { children: "可能错误码" }), ":"] })
				}), M(eU, { children: [
					E(eK, {
						sx: { textStyle: "sys.label-small" },
						children: E("code", { children: "errors[*].code" })
					}),
					E(eK, {
						sx: { textStyle: "sys.label-small" },
						children: E("code", { children: "errors[*].message" })
					}),
					a.map((e) => e ? M(C, { children: [E(eK, {
						sx: {
							color: "sys.primary",
							textStyle: "sys.label-small",
							fontWeight: "bold"
						},
						children: E("code", { children: JSON.stringify(e.code) })
					}), E(eK, { children: e.message })] }) : null)
				] })]
			}) : null })]
		})] });
	};
}, {
	displayName: "ResponseView",
	props: ["code", "response"]
}), eU = Q("div", { displayName: "Table" })({
	textStyle: "sys.label-medium",
	display: "grid",
	gap: 8,
	width: "100%",
	gridTemplateColumns: "min-content 1fr",
	gridAutoColumns: "auto"
}), eK = Q("div", { displayName: "TableCell" })({}), eZ = Q("section", { displayName: "ResponseSection" })({}), eQ = Q("div", { displayName: "ResponseStatusCode" })({
	fontSize: 18,
	fontFamily: "code",
	color: "sys.success",
	py: 12,
	pos: "sticky",
	top: 0,
	_data_failed__true: { color: "sys.error" }
}), eX = Q("section", { displayName: "ResponseSchema" })({
	pos: "relative",
	$data_content_type: {
		pos: "absolute",
		right: 0,
		top: 0,
		fontFamily: "code",
		opacity: .3
	}
}), eG = Q("div", (e, { slots: t }) => (a) => {
	let r = e.valued, i = e.invalid, n = e.disabled, o = (t.default?.() ?? []).map((e) => "input" === e.type ? (r = !!(e.props?.value ?? e.props?.placeholder ?? r), n = e.props?.disabled ?? n, O(e, { disabled: n })) : O(e));
	return M(a, {
		"data-valued": r,
		"data-invalid": i,
		"data-disabled": n,
		"data-focus-within": e.focus,
		"data-has-leading": !!t.leading,
		"data-has-trailing": !!t.trailing,
		children: [M("div", {
			"data-input-container": !0,
			children: [M("div", {
				"data-input-decorator-container": !0,
				children: [
					E("div", { "data-input-decorator-leading": !0 }),
					E("div", {
						"data-input-decorator-label": !0,
						children: E("div", {
							"data-input-label": !0,
							children: t.label?.()
						})
					}),
					E("div", { "data-input-decorator-trailing": !0 })
				]
			}), M("div", {
				"data-input-row": !0,
				children: [
					t.leading && E(eY, {
						role: "leading",
						children: t.leading()
					}),
					o,
					t.trailing && E(eY, {
						role: "trailing",
						children: t.trailing()
					})
				]
			})]
		}), t.supporting && E("div", {
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
}), eY = Q("div", { role: f(["leading", "trailing"]) }, { displayName: "Maker" })({
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
}), e0 = R((e, {}) => {
	let t = ed.of(e.field$.typedef, r(e.field$.input) ? void 0 : e.field$.input);
	return B(t, _(1), P((t) => {
		e.field$.update(t);
	}), V()), () => E(e1, { children: E(eu, {
		value: t,
		children: E(eh, {})
	}) });
}, {
	displayName: "JSONEditorInput",
	props: ["field$", "readOnly"]
}), e1 = Q("div", { displayName: "JSONInputContainer" })({
	position: "relative",
	width: "100%",
	minHeight: "40em",
	py: 8,
	px: 12,
	overflow: "hidden"
});
let e2 = ({ field: e, value: t }) => M(X, {
	component: "span",
	sx: { display: "block" },
	children: [M(X, {
		component: "span",
		sx: {
			fontWeight: "bold",
			marginRight: "0.5em"
		},
		children: [e, ":"]
	}), E("span", { children: t })]
});
var e4 = ({ method: e, url: t, params: a }) => {
	let r = ee(a);
	return M(X, {
		component: "span",
		sx: { fontWeight: "bold" },
		children: [
			`${e.toUpperCase()} `,
			M(X, {
				component: "span",
				sx: { fontWeight: "medium" },
				children: [t, r ? `?${r}` : ""]
			}),
			" HTTP/*"
		]
	});
}, e6 = l({ $default: w().optional() }, ({}, { slots: e }) => () => E(X, {
	sx: {
		containerStyle: "sys.surface-container",
		rounded: "xs",
		width: "100%",
		overflow: "auto",
		py: 4,
		px: 8
	},
	children: E(X, {
		component: "pre",
		sx: {
			padding: 4,
			margin: 0,
			textStyle: "sys.body-small",
			fontFamily: "code"
		},
		children: E("code", { children: e.default?.() })
	})
}), { displayName: "CodeView" }), e8 = l({ request: w() }, (e) => () => {
	let t = e.request;
	return M(e6, { children: [
		E(e4, { ...t }),
		E(C, { children: Object.entries({
			"User-Agent": navigator.userAgent,
			Origin: location.origin,
			Referer: `${location.origin}${location.pathname}`,
			...t.headers
		}).toSorted().map(([e, t]) => E(e2, {
			field: e,
			value: t
		}, e)) }),
		t.body && M(C, { children: [E("br", {}), function(e) {
			if (e5(e.headers).includes("multipart/form-data")) {
				var t;
				let a, r = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
				return e.headers = {
					...e.headers,
					"Content-Type": `multipart/form-data; boundary=${r}`
				}, t = e.body, a = (e, t) => t instanceof File || t instanceof Blob ? `${r}
Content-Disposition: form-data; name="${e}"${t.name ? `; filename="${t.name}"` : ""}
Content-Type: ${t.type}

[File Content]
` : $(t) ? t.map((t) => a(e, t)).join("\n") : `${r}
Content-Disposition: form-data; name="${e}"

${L(t) ? JSON.stringify(t) : String(t)}
`, Object.entries(t).map(([e, t]) => a(e, t)).join("\n") + `${r}--`;
			}
			return e5(e.headers).includes("application/x-www-form-urlencoded") ? ee(e.body) : e9(e.headers) ? JSON.stringify(e.body, null, 2) : e.body;
		}(t)] })
	] });
}, { displayName: "HttpRequest" }), e3 = l({ response: w() }, (e, {}) => () => {
	let t = e.response;
	return e5(t.headers).includes("image/") ? E("div", { children: E("img", {
		src: ((e, t) => {
			let a = new Uint8Array(e), r = "";
			for (let e = a.byteLength, t = 0; t < e; t++) r += String.fromCharCode(a[t]);
			return `data:${t};base64,${btoa(r)}`;
		})(t.body, e5(t.headers)),
		alt: ""
	}) }) : (console.log(t), M(e6, { children: [
		M("span", { children: ["HTTP/* ", t.status] }),
		E("br", {}),
		t.headers && E(C, { children: Object.entries(t.headers).map(([e, t]) => E(e2, {
			field: e,
			value: t
		}, e)) }),
		E("br", {}),
		t.body ? e9(t.headers) ? JSON.stringify(t.body, null, 2) : `${t.body}` : null
	] }));
}, { displayName: "HTTPResponse" });
function e5(e = {}) {
	for (let [t, a] of Object.entries(e)) if ("content-type" == t.toLowerCase()) return a;
	return "";
}
var e9 = (e) => e5(e).includes("application/json"), e7 = R((e) => B(eN.use().response$(e.operationID), S((e) => E(te, { children: E(e3, { response: e }) }))), {
	displayName: "ResponsePreview",
	props: ["operationID"]
}), te = Q("section", { displayName: "ResponseSection" })({
	maxHeight: "40vh",
	overflow: "auto"
}), tt = R((t, { slots: r }) => {
	let i = eN.use(), n = {};
	for (let e of t.operation.parameters ?? []) {
		let t = o.decode(e.schema, (e) => [i.schema(e) ?? {}, p(e)]).use(ex(`${e.name}, in=${JSON.stringify(e.in)}`));
		e.required || (t = t.optional()), t.use(eg(e.schema.title)), ["object", "array"].includes(e.schema.type ?? "") ? n[e.name] = t.use(eb(e0)) : n[e.name] = t;
	}
	if (t.operation.requestBody) {
		let e = Object.entries(t.operation.requestBody.content ?? {})[0];
		if (e) {
			let [t, a] = e, r = o.decode(a.schema ?? {}, (e) => [i.schema(e) ?? {}, p(e)]).use(ex(`body, content-type = ${JSON.stringify(t)}`));
			t.includes("text/") ? n.body = r : t.includes("octet-stream") || t.includes("image/") ? n.body = r.use(eb(ti)) : n.body = r.use(eb(e0));
		}
	}
	let l = g(), s = a(), d = ef.of(e(n), (() => {
		try {
			let e = s.query.params;
			return JSON.parse(atob((Array.isArray(e) ? e[0] : e) ?? ""));
		} catch (e) {}
		return {};
	})());
	B(d, P((e) => {
		i.request(t.operation.operationId, e);
	}), P((e) => {
		l.replace({ query: { params: btoa(JSON.stringify(e)) } });
	}), V());
	let c = B(d.inputs$, S((e) => {
		let a = i.asRequestConfigCreator(t.operation.operationId);
		return a ? E(e8, { request: a(e ?? {}) }) : null;
	}));
	return () => M(X, {
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
			e.preventDefault(), d.submit();
		},
		children: [E(X, {
			sx: {
				flex: 2,
				py: 24,
				display: "flex",
				flexDirection: "column",
				gap: 32,
				height: "100%",
				overflow: "auto"
			},
			children: [...d.fields(d.typedef)].map((e) => E(ta, { field$: e }))
		}), E(X, {
			sx: {
				flex: 3,
				gap: 24,
				display: "flex",
				flexDirection: "column",
				height: "100%",
				overflow: "hidden"
			},
			children: M(X, {
				sx: {
					display: "flex",
					flexDirection: "column",
					gap: 24,
					height: "100%",
					overflow: "hidden"
				},
				children: [
					c,
					E(X, {
						sx: { px: 8 },
						children: E(ec, {
							type: "submit",
							children: "发起请求"
						})
					}),
					E(e7, { operationID: t.operation.operationId }),
					E(X, {
						sx: {
							flex: 1,
							overflow: "auto"
						},
						children: r.default?.()
					})
				]
			})
		})]
	}, t.operation.operationId);
}, {
	displayName: "RequestBuilder",
	props: ["operation"]
}), ta = R(({ field$: e }, { render: t }) => (N(() => {
	e.destroy();
}), B(h([e, e.input$]), t(([t, a]) => {
	var i;
	let n = J.metaProp(e.typedef, "inputBy") ?? tr, o = (J.metaProp(e.typedef, "readOnlyWhenInitialExist") ?? !1) && !!t.initial;
	return E(eG, {
		valued: !r(a ?? t.initial),
		invalid: !!t.error,
		focus: !!t.focus,
		$label: M("span", { children: [(i = e).meta.label ?? i.name, e.optional ? "（非必填）" : ""] }),
		$supporting: M(eq, { children: [E(eB, { schema: e.typedef }), E(eH, { schema: e.typedef })] }),
		$trailing: n.$trailing,
		children: E(n, {
			field$: e,
			readOnly: o
		})
	});
}))), {
	displayName: "ParameterInput",
	props: ["field$"]
}), tr = l({
	readOnly: v().optional(),
	field$: w()
}, (e) => () => {
	let { readOnly: t, field$: a,...r } = e;
	return E("input", {
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
}, { displayName: "TextInput" }), ti = R((e) => {
	let t = I(null);
	return B(t, P((t) => {
		t && e.field$.update(t);
	}), q()), () => {
		let { readOnly: a, accept: r } = e;
		return M(X, {
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
				E("input", {
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
				E(em, { path: en }),
				E("span", { children: t.value?.name })
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
}), tn = R((e, { render: t }) => {
	let a = eN.use();
	return D(() => {
		a.request(e.op.operationId, {});
	}), B(a.response$(e.op.operationId), t((e) => E(to, { database: e.body })));
}, {
	displayName: "DatabaseErContainer",
	props: ["op"]
}), to = R((e) => () => M(td, { children: [E(tp, { children: e.database.name }), Object.entries(e.database.tables).map(([t, a]) => E(tl, {
	database: e.database,
	table: a,
	tableName: t
}))] }), {
	displayName: "DatabaseErView",
	props: ["database"]
}), tl = R((e, { render: t }) => {
	let a = new W([]);
	return B(a, t((t) => {
		let r = e.table.columns, i = e.table.constraints;
		return M(tc, {
			open: !0,
			children: [
				M(tu, { children: [
					E("span", { children: e.tableName }),
					E(tw, {}),
					E(tx, { meta: e.table })
				] }),
				Object.keys(r).map((a) => {
					let i = r[a];
					return M(tm, {
						"data-hover": t.includes(a),
						children: [
							E(th, { children: a }),
							i.of ? E(ts, {
								database: e.database,
								of: i.of
							}) : E(tb, { children: i.type }),
							E(ty, { children: E(tx, { meta: i }) })
						]
					});
				}),
				Object.entries(i).map(([e, t]) => E(tm, {
					onMouseover: () => {
						a.next(t.columnNames.map((e) => e.name));
					},
					onMouseleave: () => {
						a.next([]);
					},
					children: M(tv, {
						"data-primary": t.primary,
						"data-unique": t.unique,
						children: [
							E(em, { path: t.unique ? ei : ey }),
							E("span", { children: e }),
							M("span", { children: [
								"(",
								t.columnNames.map((e) => [e.name, ...e.options ?? []].join(" ")).join(","),
								")"
							] })
						]
					})
				})),
				E(X, { sx: { py: 4 } })
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
}), ts = R((e, { render: t }) => {
	let a = W.seed(!1), r = B(a, t((t) => {
		let r = e.of.split(".")[0];
		return E(eo, {
			isOpen: t,
			onClose: () => {
				a.next(!1);
			},
			children: E(tg, { children: E(tl, {
				database: e.database,
				tableName: r,
				table: e.database.tables[r]
			}) })
		});
	}));
	return () => M(tf, {
		onClick: () => {
			a.next(!0);
		},
		children: [e.of, r]
	});
}, {
	displayName: "DatabaseErTableColumnOfView",
	props: ["of", "database"]
}), td = Q("div", { displayName: "DatabaseErMain" })({
	py: 18,
	px: 24,
	flex: 1,
	overflow: "auto"
}), tp = Q("div", { displayName: "DatabaseErHeader" })({
	py: 8,
	px: 16,
	textStyle: "sys.label-large"
}), tc = Q("details", { displayName: "DatabaseErTable" })({
	"& + &": { mt: 16 },
	rounded: "sm",
	border: "1px solid",
	borderColor: Z("sys.outline-variant", K(.38)),
	overflow: "hidden",
	width: "100%"
}), tu = Q("summary", { displayName: "DatabaseErTableSummary" })({
	textStyle: "sys.label-large",
	py: 8,
	px: 16,
	display: "flex",
	color: "sys.primary"
}), tm = Q("div", { displayName: "DatabaseErTableDef" })({
	px: 16,
	py: 4,
	display: "flex",
	_hover: { containerStyle: "sys.surface-container-low" }
}), th = Q("div", { displayName: "DatabaseErTableColumnName" })({
	display: "flex",
	width: "20vw",
	textStyle: "sys.label-small",
	font: "code"
}), ty = Q("div", { displayName: "DatabaseErTableColumnComment" })({
	display: "flex",
	textStyle: "sys.label-small",
	width: "20vw",
	justifyContent: "end"
}), tf = Q("div", { displayName: "DatabaseErTableColumnOf" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	color: "sys.primary",
	_hover: { cursor: "pointer" }
}), tb = Q("div", { displayName: "DatabaseErTableColumnType" })({
	flex: 1,
	textStyle: "sys.label-small"
}), tx = Q("div", (e, {}) => (t) => M(t, { children: [
	e.meta.title,
	" ",
	e.meta.description ? E(ea, {
		$title: E(eL, { children: E(es, { text: e.meta.description }) }),
		children: E(em, { path: el })
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
}), tg = Q("div", { displayName: "DialogContainer" })({
	display: "flex",
	containerStyle: "sys.surface",
	width: "90vw",
	roundedBottom: "sm",
	px: 16,
	py: 36,
	top: 0,
	position: "absolute",
	overflow: "auto"
}), tv = Q("div", { displayName: "DatabaseErTableConstraintName" })({
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
}), tw = Q("div", { displayName: "Spacer" })({ flex: 1 }), t$ = Q("pre", ({}, { slots: e }) => (t) => {
	let a = e.default?.(), r = a?.[0];
	return r && "language-mermaid" === r.props.className ? E(t_, { code: r.children }) : E(t, { children: a });
}, { displayName: "PreWithMermaid" })({}), t_ = R((e, {}) => {
	let t = I(null);
	return B(t, k((e) => e ? j((async () => {
		let { default: t } = await ev(async () => {
			let { default: e } = await import("./vendor-mermaid.BUJzcPsl.chunk.js");
			return { default: e };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
		await t.run({ nodes: [e] });
	})()) : u), q()), () => E(tN, {
		ref: t,
		class: "mermaid",
		children: e.code
	});
}, {
	displayName: "Mermaid",
	props: ["code"]
}), tN = Q("div", { displayName: "MermaidContainer" })({ "& > svg": { minWidth: "80%" } }), tS = R((e, {}) => {
	let t = eN.use(), a = B(e.operationId$, k((e) => t.operation$(e))), r = B(a, i((e) => !!e)), n = W.seed(!1), o = B(r, S((e) => e.description ? E(es, {
		text: e.description,
		components: { pre: t$ }
	}) : null)), l = B(n, S((e) => E(eo, {
		isOpen: e,
		onClose: () => {
			n.next(!1);
		},
		children: E(s, { children: E(eL, { children: o }) })
	}))), s = Q("div", { displayName: "DialogContainer" })({
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
	}), d = B(r, S((e) => e.description ? M(ep, {
		onClick: () => {
			n.next(!0);
		},
		children: [E(em, { path: er }), l]
	}) : null)), p = B(r, S((e) => E(tt, {
		operation: e,
		children: E(C, { children: Object.entries(e.responses ?? {}).map(([e, t]) => E(ez, {
			code: e,
			response: t
		}, e)) })
	}, e.operationId))), c = B(r, S((e) => M(tO, {
		sx: { containerStyle: {
			get: "sys.primary-container",
			post: "sys.success-container",
			put: "sys.warning-container",
			delete: "sys.error-container"
		}[e.method] ?? "sys.secondary-container" },
		children: [
			E("div", {
				"data-operation-method": !0,
				children: e.method
			}),
			M("div", {
				"data-operation-desc": !0,
				children: [E("div", {
					"data-operation-path": !0,
					children: e.path
				}), M("div", {
					"data-operation-summary": !0,
					children: [
						e.summary,
						" ",
						e.operationId != e.summary ? e.operationId : ""
					]
				})]
			}),
			E(X, { sx: { flex: 1 } }),
			d
		]
	})));
	return B(a, S((e) => e ? "SycDatabaseEr" == e.operationId ? M(tI, { children: [c, E(tC, { children: E(tn, { op: e }) })] }, e.operationId) : M(tI, { children: [c, E(tC, { children: E(X, {
		sx: {
			flex: 1,
			overflow: "auto"
		},
		children: p
	}) })] }, e.operationId) : null));
}, {
	displayName: "OperationView",
	props: ["operationId"]
}), tI = Q("div", { displayName: "OperationContainer" })({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), tC = Q("div", { displayName: "OperationMain" })({
	flex: 1,
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), tO = Q("summary", { displayName: "OperationHeading" })({
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
