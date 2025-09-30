const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.B-CSZXuL.chunk.js","assets/vendor-min-mermaid~architectureDiagram-4X3Z3J56.BVgxNvHA.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BH0ewMis.chunk.js","assets/vendor-min-mermaid~blockDiagram-BWRZOBD3.B56fyXqp.chunk.js","assets/vendor-min-mermaid~chunk-4HFYJGYH.Sy06mVxj.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.DShEeGXl.chunk.js","assets/vendor-min-mermaid~chunk-AI4T2ZLM.LnVbLFqH.chunk.js","assets/vendor-min-mermaid~chunk-6EQESGSB.BH4EZufR.chunk.js","assets/vendor-min-mermaid~chunk-F3RBCZRS.Og3fhDJu.chunk.js","assets/vendor-min-mermaid~mermaid.esm.min.CjlKUFeY.chunk.js"])))=>i.map(i=>d[i]);
import { S as e, X as t, Z as a, a as r, c as n, i, j as o, l, n as s, r as d, t as p, u as c, v as u, y as h } from "./vendor-innoai-tech-fetcher.BFkhBuB3.chunk.js";
import { A as m, D as y, Dt as f, I as b, Lt as g, M as x, P as v, St as w, T as $, V as _, W as N, X as S, Y as I, a as C, b as O, c as k, g as D, h as j, j as P, k as T, l as q, m as E, o as W, p as L, r as R, s as B, t as F, u as M, w as J, wt as A, x as V, xt as H, y as z, yt as U } from "./vendor-innoai-tech-vuekit.D5qvH0e4.chunk.js";
import { d as X, f as K, h as Z, o as Y, s as G, y as Q } from "./vendor-innoai-tech-vueuikit.pIVJTYGn.chunk.js";
import { a as ee, f as et, n as ea, o as er, s as en, t as ei, u as eo } from "./vendor-rxjs.nCW51blg.chunk.js";
import { a as el, c as es, d as ed, f as ep, i as ec, l as eu, m as eh, n as em, o as ey, p as ef, r as eb, s as eg, t as ex, u as ev } from "./vendor-innoai-tech-jsoneditor.Ce2UZ9rW.chunk.js";
import { i as ew, n as e$, r as e_, t as eN } from "./lib-nodepkg-vueformdata.zBQ3Gjps.chunk.js";
import { Nn as eS } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BVgxNvHA.chunk.js";
var eI = function(e, t, a, r) {
	for (var n = e.length, i = a + (r ? 1 : -1); r ? i-- : ++i < n;) if (t(e[i], i, e)) return i;
	return -1;
}, eC = function(e) {
	return e != e;
}, eO = function(e, t, a) {
	for (var r = a - 1, n = e.length; ++r < n;) if (e[r] === t) return r;
	return -1;
}, ek = function(e, t) {
	return !!(null == e ? 0 : e.length) && (t == t ? eO(e, t, 0) : eI(e, eC, 0)) > -1;
}, eD = function(e, t, a) {
	for (var r = -1, n = null == e ? 0 : e.length; ++r < n;) if (a(t, e[r])) return !0;
	return !1;
}, ej = Q(function(e, t) {
	return null == e ? {} : Z(e, t, function(t, a) {
		return U(e, a);
	});
}), eP = f && 1 / H(new f([, -0]))[1] == Infinity ? function(e) {
	return new f(e);
} : function() {}, eT = function(e, t, a) {
	var r = -1, n = ek, i = e.length, o = !0, l = [], s = l;
	if (a) o = !1, n = eD;
	else if (i >= 200) {
		var d = t ? null : eP(e);
		if (d) return H(d);
		o = !1, n = w, s = new A();
	} else s = t ? [] : l;
	e: for (; ++r < i;) {
		var p = e[r], c = t ? t(p) : p;
		if (p = a || 0 !== p ? p : 0, o && c == c) {
			for (var u = s.length; u--;) if (s[u] === c) continue e;
			t && s.push(c), l.push(p);
		} else n(s, c, a) || (s !== l && s.push(c), l.push(p));
	}
	return l;
}, eq = class e extends L {
	static empty() {
		return new e({
			openapi: "3.1.0",
			components: { schemas: {} },
			paths: {}
		});
	}
	#e = p({
		paramsSerializer: d,
		transformRequestBody: i
	});
	#t = new u(/* @__PURE__ */ new Map());
	get #a() {
		return this.value.servers?.[0]?.url ?? "";
	}
	response$(e) {
		return E(this.#t, ei((t) => {
			let a = t.get(e);
			return a ? en(a, a.error$) : et;
		}));
	}
	requesting$(e) {
		return E(this.#t, ei((t) => t.get(e)?.requesting$ ?? l(!1)));
	}
	asRequestConfigCreator(e) {
		let t = this.#r(e);
		if (!t) return null;
		let a = Object.keys(t.requestBody?.content ?? {})[0];
		return (e) => ({
			method: t.method.toUpperCase(),
			url: this.#a + eW(t.path, e),
			params: ej(e, t.parameters?.filter((e) => "query" == e.in).map((e) => e.name)),
			headers: {
				...ej(e, t.parameters?.filter((e) => "header" == e.in).map((e) => e.name)),
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
			a = s(Object.assign(t, {
				operationID: e,
				TRespData: {}
			}), this.#e), this.#t.value.set(e, a), this.#t.next(this.#t.value);
		}
		a.next(t);
	}
	#r(e) {
		for (let t of eE(this.value, { operationId: e })) if (t) return t;
		return null;
	}
	operation$(e) {
		return E(this, ei((t) => {
			for (let a of eE(t, { operationId: e })) if (a) return l(a);
			return l(null);
		}));
	}
	operations$(e) {
		return E(this, ei((t) => l([...eE(t, e)])));
	}
	schema$(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		return E(this, ei((e) => t ? l(g(e, t) ?? null) : l(null)), n((e) => e ? {
			...e,
			$id: t[t.length - 1]
		} : e));
	}
	schema(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		if (t) return g(this.value, t) ?? void 0;
	}
};
function* eE(e, t) {
	for (let [a, r] of Object.entries(e.paths)) for (let [e, n] of Object.entries(r)) if ("OpenAPI" != n.operationId && "OpenAPIView" != n.operationId && (!t.tag || (n.tags ?? []).includes(t.tag))) {
		if (t.operationId) {
			if (t.operationId.startsWith("*")) {
				if (!n.operationId.toLowerCase().includes(t.operationId.slice(1).toLowerCase())) continue;
			} else if (n.operationId.toLowerCase() != t.operationId.toLowerCase()) continue;
		}
		yield {
			...n,
			method: e,
			path: a,
			group: n.tags?.[0] ?? ""
		};
	}
}
let eW = (e, t = {}) => e.replace(/{([\s\S]+?)}/g, (e, a) => [].concat(t[a] || e).join(",")), eL = F(() => eq.empty(), { name: "OpenAPI" });
var eR = R(({}, {}) => {
	let t = eL.use(), a = new L({ operationId: void 0 }), n = new h();
	E(n, ee(200), r((e) => {
		a.next((t) => {
			t.operationId = `*${e ?? ""}`;
		});
	}), M());
	let i = k(null);
	E(i, ei((t) => {
		if (t) {
			let a = (e) => {
				e && t.scrollTo({ top: e.offsetTop - t.offsetTop });
			};
			return new e(() => {
				let e = new MutationObserver((e) => {
					for (let t of e) if ("attributes" === t.type) {
						let e = t.target;
						e.classList.contains("router-link-active") && a(e);
					}
				});
				return e.observe(t, {
					attributes: !0,
					subtree: !0
				}), setTimeout(() => {
					a(t.querySelector(".router-link-active"));
				}, 100), () => {
					e.disconnect();
				};
			});
		}
		return et;
	}), q());
	let o = E(a, ei((e) => t.operations$(e)), C((e) => {
		let t = Object.groupBy(e, (e) => e.group);
		return B(eF, { children: [W(eM, { children: W("input", {
			type: "text",
			placeholder: "请输入 operationId 查询",
			onInput: (e) => {
				n.next(e.target.value);
			}
		}) }), W(eJ, {
			sx: {
				flex: 1,
				overflow: "scroll"
			},
			ref: i,
			children: Object.entries(t).toSorted().map(([e, t]) => B("div", {
				"data-nav-group": !0,
				children: [W("div", {
					"data-nav-group-heading": !0,
					children: e
				}), W("div", {
					"data-nav-group-contents": !0,
					children: t?.map((e) => B(eV, {
						component: j,
						to: `/operations/${e.operationId}`,
						children: [W(G, {
							"data-operation-method": !0,
							sx: { color: {
								get: "sys.primary",
								post: "sys.success",
								put: "sys.warning",
								delete: "sys.error"
							}[e.method] ?? "sys.secondary" },
							children: e.method
						}), B("div", {
							"data-operation-desc": !0,
							children: [W("div", {
								"data-operation-id": !0,
								children: e.operationId
							}), e.summary ? W("div", {
								"data-operation-summary": !0,
								children: e.summary != e.operationId ? e.summary : W("span", { children: "\xA0" })
							}) : void 0]
						})]
					}))
				})]
			}))
		})] });
	}));
	return () => B(eB, { children: [o, W(eA, { children: W(D, {}) })] });
}, { displayName: "OpenAPIView" }), eB = Y("div", { displayName: "Container" })({
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	display: "flex"
}), eF = Y("aside", { displayName: "NavContainer" })({
	width: 240,
	py: 4,
	display: "flex",
	flexDirection: "column",
	gap: 4,
	height: "100%",
	overflow: "hidden",
	borderRight: "1px solid",
	borderColor: "sys.outline"
}), eM = Y("div", { displayName: "NavSearchBox" })({
	input: {
		py: 10,
		px: 12,
		border: "none",
		width: "100%",
		outline: 0
	},
	borderBottom: "1px solid",
	borderColor: "sys.outline"
}), eJ = Y("div", { displayName: "Nav" })({
	display: "flex",
	flexDirection: "column",
	gap: 4,
	$data_nav_group_heading: {
		px: 12,
		py: 4,
		textStyle: "sys.label-small",
		containerStyle: "sys.secondary-container"
	}
}), eA = Y("main", { displayName: "Main" })({
	flex: 1,
	overflow: "hidden"
}), eV = Y("a", { displayName: "OperationListItem" })({
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
}), eH = Y("div", { displayName: "Token" })({
	display: "inline-table",
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 11,
	lineHeight: 14
}), ez = Y("div", {
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
}), eU = Y("div", (e, { slots: t }) => {
	let a = eY.use();
	return (r) => W(r, {
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
}), eX = Y("div", (e, {}) => (t) => {
	let a = b.metaProp(e.schema, "title") ?? "", r = b.metaProp(e.schema, "description") ?? "";
	return B(t, { children: [
		a,
		" ",
		r ? W(el, {
			$title: W(eK, { children: W(eh, { text: r }) }),
			children: W(eg, { path: eu })
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
	[`${eg}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
}), eK = Y("div", { displayName: "MarkdownContainer" })({
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
}), eZ = ({ name: e, value: t, extra: a }) => "" == t ? null : W(eU, { children: B(eH, {
	sx: {
		opacity: .7,
		fontSize: "0.9em",
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	},
	children: [
		W(eH, {
			sx: { color: "sys.primary" },
			children: `@${e}(`
		}),
		`${t}`,
		Object.entries(a ?? {}).map(([e, t]) => o(t) ? null : B(_, { children: [
			B(eH, {
				sx: { opacity: .5 },
				children: [",", "\xA0"]
			}),
			W(eH, {
				sx: { opacity: .5 },
				children: e
			}),
			B(eH, {
				sx: { opacity: .5 },
				children: [":", "\xA0"]
			}),
			W(eH, {
				sx: { opacity: .7 },
				children: t
			})
		] })),
		W(eH, {
			sx: { color: "sys.primary" },
			children: ")"
		})
	]
}) }), eY = F(() => ({ indent: 0 }), { name: "IntentContext" }), eG = V(({}, { slots: e }) => {
	let t = eY.use();
	return () => W(eY, {
		value: { indent: t.indent + 1 },
		children: e.default?.()
	});
}, { displayName: "Indent" }), eQ = class e {
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
}, e0 = F(() => new eQ("")), e1 = R((e) => {
	let t = e0.use(), a = eY.use(), r = k(!1);
	return () => {
		let n = e.schema, i = b.schemaProp(e.schema, "$ref"), o = "intersection" == (n = b.schemaProp(e.schema, b.unwrap)()).type || "object" == n.type || "union" == n.type || "record" == n.type || "array" == n.type || "union" == n.type, l = t.safe(i) && B(_, { children: [W("span", { children: "\xA0" }), W(e4, { schema: n })] });
		return W(e0, {
			value: t.child(i),
			children: o ? a.indent < 3 ? B(_, { children: [W(j, {
				to: `#${i}`,
				"data-index": a.indent,
				children: W(eH, {
					id: i,
					children: i
				})
			}), l] }) : B(_, { children: [W(G, {
				component: j,
				sx: {},
				to: `#${i}`,
				"data-index": a.indent,
				onClick: (e) => {
					t.safe(i) && (e.preventDefault(), e.stopPropagation(), r.next(!0));
				},
				children: W(eH, {
					id: i,
					children: i
				})
			}), t.safe(i) && W(ec, {
				isOpen: r.value,
				onClose: () => {
					r.next(!1);
				},
				children: W(e2, { children: B(eU, { children: [W(eH, { children: i }), W(eY, {
					value: { indent: 0 },
					children: l
				})] }) })
			})] }) : l
		});
	};
}, {
	displayName: "SchemaViewLink",
	props: ["schema"]
}), e2 = Y("div", { displayName: "DialogContainer" })({
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
}), e4 = R((e) => {
	let t = e.schema;
	return b.schemaProp(t, "$ref") ? W(e1, { schema: t }) : () => {
		switch (t.type) {
			case "union": return W(_, { children: b.schemaProp(t, "oneOf")?.map((e, t) => B(_, { children: [t > 0 && B(eH, { children: [
				"\xA0",
				" | ",
				"\xA0"
			] }), W(e4, { schema: e })] })) });
			case "intersection": return W(eH, { children: b.schemaProp(t, "allOf")?.filter((e) => !Object.keys(e).length).map((e, t) => B(_, { children: [t > 0 && B(eH, { children: [
				"\xA0",
				"&",
				"\xA0"
			] }), W(e4, { schema: e })] })) });
			case "array": return B(eH, {
				sx: {
					wordBreak: "keep-all",
					whiteSpace: "nowrap"
				},
				children: [
					W(eH, { children: "Array<" }),
					W(e4, { schema: b.schemaProp(t, "items") ?? y() }),
					W(eH, { children: ">" })
				]
			});
			case "object": return B(_, { children: [
				W(eH, { children: "{" }),
				W(eG, { children: W(_, { children: Object.entries(b.schemaProp(t, "properties") ?? {}).map(([e, a]) => a ? W(_, { children: B(eU, {
					spacing: 2,
					children: [W(eX, { schema: a }), B(eH, {
						sx: {
							wordBreak: "keep-all",
							whiteSpace: "nowrap"
						},
						children: [
							W(ez, {
								nullable: b.schemaProp(t, "nullable"),
								deprecated: b.schemaProp(t, "deprecated"),
								optional: !(b.schemaProp(t, "required") ?? []).includes(e),
								children: e
							}),
							W(eH, {
								sx: { mr: "1em" },
								children: ":"
							}),
							W(e4, { schema: a })
						]
					})]
				}) }) : null) }) }),
				W(eH, { children: "}" })
			] });
			case "record": return B(_, { children: [
				W(eH, { children: "{" }),
				b.schemaProp(t, "additionalProperties") && W(_, { children: W(eG, { children: B(eU, { children: [
					B(eH, {
						sx: { mr: 1 },
						children: ["[K:", "\xA0"]
					}),
					W(e4, { schema: b.schemaProp(t, "propertyNames") ?? v() }),
					B(eH, {
						sx: { mr: 1 },
						children: ["]:", "\xA0"]
					}),
					W(e4, { schema: b.schemaProp(t, "additionalProperties") ?? y() })
				] }) }) }),
				W(eH, { children: "}" })
			] });
			case "enums": {
				let e = b.schemaProp(t, "enum") ?? [];
				if (1 == e.length) return W(eH, { children: JSON.stringify(e[0]) });
				let a = "any";
				return e.length > 0 && (a = typeof e[0]), B(_, { children: [W(eH, {
					sx: { fontWeight: "bold" },
					children: a
				}), W(eG, { children: e.map((e, a) => W(eZ, {
					name: "enum",
					value: `${e}`,
					extra: b.metaProp(t, "enumLabels")?.[a] ? { label: JSON.stringify(b.metaProp(t, "enumLabels")[a]) } : {}
				}, e)) })] });
			}
		}
		let [e, a, r] = [
			t.type,
			b.metaProp(t, "format"),
			b.metaProp(t, "default")
		];
		return B(_, { children: [W(eH, {
			sx: { fontWeight: "bold" },
			children: e || "any"
		}), B(eG, { children: [
			a && W(eZ, {
				name: "format",
				value: a
			}),
			!o(r) && W(eZ, {
				name: "default",
				value: r
			}),
			e6.map((e) => {
				let a = b.schemaProp(t, e);
				return o(a) ? null : "pattern" == e ? W(eZ, {
					name: e,
					value: a,
					extra: { errMsg: b.metaProp(t, "x-pattern-err-msg") }
				}) : W(eZ, {
					name: e,
					value: a
				});
			})
		] })] });
	};
}, {
	displayName: "SchemaView",
	props: ["schema"]
}), e6 = [
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
], e8 = R((e) => {
	let t = eL.use();
	return () => {
		var a;
		let r = ((a = e.response["x-status-return-errors"] ?? []) && a.length ? eT(a) : []).map((e) => (function(e = "") {
			let t = e.indexOf("{");
			return t > -1 ? e.slice(t + 1, e.length - 1).split(",").reduce((e, t) => (e.joining ? e.values[e.values.length - 1] += "," + t : e.values.push(t), t.split("\"").length % 2 == 0 && (e.joining = !e.joining), e), {
				values: [],
				joining: !1
			}).values.reduce((e, t) => {
				let a = t.indexOf("=");
				if (a < 0) return e;
				let r = t.slice(0, a), n = t.slice(a + 1);
				return o(r) || o(n) ? e : {
					...e,
					[r]: JSON.parse(n)
				};
			}, { code: e.slice(0, t) }) : null;
		})(e));
		return B(e7, { children: [W(e9, {
			"data-failed": function(e) {
				try {
					return Number(e) >= 400;
				} catch (e) {
					return !1;
				}
			}(e.code),
			children: e.code
		}), B(G, {
			sx: { pl: "4em" },
			children: [W(_, { children: Object.entries(e.response.content ?? {}).map(([e, { schema: a }]) => B(te, { children: [W(eU, {
				spacing: 0,
				children: W(e4, { schema: J.decode(a, (e) => [t.schema(e) ?? {}, $(e)]) })
			}), W("div", {
				"data-content-type": !0,
				children: e
			})] })) }), W(_, { children: r.length > 0 ? B(G, {
				sx: {
					mt: 16,
					containerStyle: "sys.surface-container",
					px: 12,
					py: 16,
					rounded: "xs"
				},
				children: [W(G, {
					sx: { pb: 8 },
					children: B("b", { children: [W("small", { children: "可能错误码" }), ":"] })
				}), B(e3, { children: [
					W(e5, {
						sx: { textStyle: "sys.label-small" },
						children: W("code", { children: "errors[*].code" })
					}),
					W(e5, {
						sx: { textStyle: "sys.label-small" },
						children: W("code", { children: "errors[*].message" })
					}),
					r.map((e) => e ? B(_, { children: [W(e5, {
						sx: {
							color: "sys.primary",
							textStyle: "sys.label-small",
							fontWeight: "bold"
						},
						children: W("code", { children: JSON.stringify(e.code) })
					}), W(e5, { children: e.message })] }) : null)
				] })]
			}) : null })]
		})] });
	};
}, {
	displayName: "ResponseView",
	props: ["code", "response"]
}), e3 = Y("div", { displayName: "Table" })({
	textStyle: "sys.label-medium",
	display: "grid",
	gap: 8,
	width: "100%",
	gridTemplateColumns: "min-content 1fr",
	gridAutoColumns: "auto"
}), e5 = Y("div", { displayName: "TableCell" })({}), e7 = Y("section", { displayName: "ResponseSection" })({}), e9 = Y("div", { displayName: "ResponseStatusCode" })({
	fontSize: 18,
	fontFamily: "code",
	color: "sys.success",
	py: 12,
	pos: "sticky",
	top: 0,
	_data_failed__true: { color: "sys.error" }
}), te = Y("section", { displayName: "ResponseSchema" })({
	pos: "relative",
	$data_content_type: {
		pos: "absolute",
		right: 0,
		top: 0,
		fontFamily: "code",
		opacity: .3
	}
}), tt = Y("div", (e, { slots: t }) => (a) => {
	let r = e.valued, n = e.invalid, i = e.disabled, o = (t.default?.() ?? []).map((e) => "input" === e.type ? (r = !!(e.props?.value ?? e.props?.placeholder ?? r), i = e.props?.disabled ?? i, N(e, { disabled: i })) : N(e));
	return B(a, {
		"data-valued": r,
		"data-invalid": n,
		"data-disabled": i,
		"data-focus-within": e.focus,
		"data-has-leading": !!t.leading,
		"data-has-trailing": !!t.trailing,
		children: [B("div", {
			"data-input-container": !0,
			children: [B("div", {
				"data-input-decorator-container": !0,
				children: [
					W("div", { "data-input-decorator-leading": !0 }),
					W("div", {
						"data-input-decorator-label": !0,
						children: W("div", {
							"data-input-label": !0,
							children: t.label?.()
						})
					}),
					W("div", { "data-input-decorator-trailing": !0 })
				]
			}), B("div", {
				"data-input-row": !0,
				children: [
					t.leading && W(ta, {
						role: "leading",
						children: t.leading()
					}),
					o,
					t.trailing && W(ta, {
						role: "trailing",
						children: t.trailing()
					})
				]
			})]
		}), t.supporting && W("div", {
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
}), ta = Y("div", { role: P(["leading", "trailing"]) }, { displayName: "Maker" })({
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
}), tr = R((e, {}) => {
	let t = em.of(e.field$.typedef, o(e.field$.input) ? void 0 : e.field$.input);
	return E(t, ea(1), r((t) => {
		e.field$.update(t);
	}), M()), () => W(tn, { children: W(eb, {
		value: t,
		children: W(ex, {})
	}) });
}, {
	displayName: "JSONEditorInput",
	props: ["field$", "readOnly"]
}), tn = Y("div", { displayName: "JSONInputContainer" })({
	position: "relative",
	width: "100%",
	minHeight: "40em",
	py: 8,
	px: 12,
	overflow: "hidden"
});
let ti = ({ field: e, value: t }) => B(G, {
	component: "span",
	sx: { display: "block" },
	children: [B(G, {
		component: "span",
		sx: {
			fontWeight: "bold",
			marginRight: "0.5em"
		},
		children: [e, ":"]
	}), W("span", { children: t })]
});
var to = ({ method: e, url: t, params: a }) => {
	let r = d(a);
	return B(G, {
		component: "span",
		sx: { fontWeight: "bold" },
		children: [
			`${e.toUpperCase()} `,
			B(G, {
				component: "span",
				sx: { fontWeight: "medium" },
				children: [t, r ? `?${r}` : ""]
			}),
			" HTTP/*"
		]
	});
}, tl = V({ $default: m().optional() }, ({}, { slots: e }) => () => W(G, {
	sx: {
		containerStyle: "sys.surface-container",
		rounded: "xs",
		width: "100%",
		overflow: "auto",
		py: 4,
		px: 8
	},
	children: W(G, {
		component: "pre",
		sx: {
			padding: 4,
			margin: 0,
			textStyle: "sys.body-small",
			fontFamily: "code"
		},
		children: W("code", { children: e.default?.() })
	})
}), { displayName: "CodeView" }), ts = V({ request: m() }, (e) => () => {
	let r = e.request;
	return B(tl, { children: [
		W(to, { ...r }),
		W(_, { children: Object.entries({
			"User-Agent": navigator.userAgent,
			Origin: location.origin,
			Referer: `${location.origin}${location.pathname}`,
			...r.headers
		}).toSorted().map(([e, t]) => W(ti, {
			field: e,
			value: t
		}, e)) }),
		r.body && B(_, { children: [W("br", {}), function(e) {
			if (tp(e.headers).includes("multipart/form-data")) {
				let n = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
				e.headers = {
					...e.headers,
					"Content-Type": `multipart/form-data; boundary=${n}`
				};
				var r = e.body;
				let i = (e, r) => r instanceof File || r instanceof Blob ? `${n}
Content-Disposition: form-data; name="${e}"${r.name ? `; filename="${r.name}"` : ""}
Content-Type: ${r.type}

[File Content]
` : a(r) ? r.map((t) => i(e, t)).join("\n") : `${n}
Content-Disposition: form-data; name="${e}"

${t(r) ? JSON.stringify(r) : String(r)}
`;
				return Object.entries(r).map(([e, t]) => i(e, t)).join("\n") + `${n}--`;
			}
			return tp(e.headers).includes("application/x-www-form-urlencoded") ? d(e.body) : tc(e.headers) ? JSON.stringify(e.body, null, 2) : e.body;
		}(r)] })
	] });
}, { displayName: "HttpRequest" }), td = V({ response: m() }, (e, {}) => () => {
	let t = e.response;
	return tp(t.headers).includes("image/") ? W("div", { children: W("img", {
		src: ((e, t) => {
			let a = new Uint8Array(e), r = "";
			for (let e = a.byteLength, t = 0; t < e; t++) r += String.fromCharCode(a[t]);
			return `data:${t};base64,${btoa(r)}`;
		})(t.body, tp(t.headers)),
		alt: ""
	}) }) : B(tl, { children: [
		B("span", { children: ["HTTP/* ", t.status] }),
		W("br", {}),
		t.headers && W(_, { children: Object.entries(t.headers).map(([e, t]) => W(ti, {
			field: e,
			value: t
		}, e)) }),
		W("br", {}),
		t.body ? tc(t.headers) ? JSON.stringify(t.body, null, 2) : `${t.body}` : null
	] });
}, { displayName: "HTTPResponse" });
function tp(e = {}) {
	for (let [t, a] of Object.entries(e)) if ("content-type" == t.toLowerCase()) return a;
	return "";
}
var tc = (e) => tp(e).includes("application/json"), tu = R((e) => E(eL.use().response$(e.operationID), C((e) => W(th, { children: W(td, { response: e }) }))), {
	displayName: "ResponsePreview",
	props: ["operationID"]
}), th = Y("section", { displayName: "ResponseSection" })({
	maxHeight: "40vh",
	overflow: "auto"
}), tm = R((e, { slots: t }) => {
	let a = eL.use(), n = {};
	for (let t of e.operation.parameters ?? []) {
		let e = J.decode(t.schema, (e) => [a.schema(e) ?? {}, $(e)]).use(e_(`${t.name}, in=${JSON.stringify(t.in)}`));
		t.required || (e = e.optional()), e.use(eN(t.schema.title)), ["object", "array"].includes(t.schema.type ?? "") ? n[t.name] = e.use(e$(tr)) : n[t.name] = e;
	}
	if (e.operation.requestBody) {
		let t = Object.entries(e.operation.requestBody.content ?? {})[0];
		if (t) {
			let [e, r] = t, i = J.decode(r.schema ?? {}, (e) => [a.schema(e) ?? {}, $(e)]).use(e_(`body, content-type = ${JSON.stringify(e)}`));
			e.includes("text/") ? n.body = i : e.includes("octet-stream") || e.includes("image/") ? n.body = i.use(e$(tb)) : n.body = i.use(e$(tr));
		}
	}
	let i = O(), o = z(), l = ew.of(x(n), (() => {
		try {
			let e = o.query.params;
			return JSON.parse(atob((Array.isArray(e) ? e[0] : e) ?? ""));
		} catch (e) {}
		return {};
	})());
	E(l, r((t) => {
		a.request(e.operation.operationId, t);
	}), r((e) => {
		i.replace({ query: { params: btoa(JSON.stringify(e)) } });
	}), M());
	let s = E(l.inputs$, C((t) => {
		let r = a.asRequestConfigCreator(e.operation.operationId);
		return r ? W(ts, { request: r(t) }) : null;
	}));
	return () => B(G, {
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
		children: [W(G, {
			sx: {
				flex: 2,
				py: 24,
				display: "flex",
				flexDirection: "column",
				gap: 32,
				height: "100%",
				overflow: "auto"
			},
			children: [...l.fields(l.typedef)].map((e) => W(ty, { field$: e }))
		}), W(G, {
			sx: {
				flex: 3,
				gap: 24,
				display: "flex",
				flexDirection: "column",
				height: "100%",
				overflow: "hidden"
			},
			children: B(G, {
				sx: {
					display: "flex",
					flexDirection: "column",
					gap: 24,
					height: "100%",
					overflow: "hidden"
				},
				children: [
					s,
					W(G, {
						sx: { px: 8 },
						children: W(ef, {
							type: "submit",
							children: "发起请求"
						})
					}),
					W(tu, { operationID: e.operation.operationId }),
					W(G, {
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
}), ty = R(({ field$: e }, { render: t }) => (S(() => {
	e.destroy();
}), E(eo([e, e.input$]), t(([t, a]) => {
	var r;
	let n = b.metaProp(e.typedef, "inputBy") ?? tf, i = (b.metaProp(e.typedef, "readOnlyWhenInitialExist") ?? !1) && !!t.initial;
	return W(tt, {
		valued: !o(a ?? t.initial),
		invalid: !!t.error,
		focus: !!t.focus,
		$label: B("span", { children: [(r = e).meta.label ?? r.name, e.optional ? "（非必填）" : ""] }),
		$supporting: B(eU, { children: [W(eX, { schema: e.typedef }), W(e4, { schema: e.typedef })] }),
		$trailing: n.$trailing,
		children: W(n, {
			field$: e,
			readOnly: i
		})
	});
}))), {
	displayName: "ParameterInput",
	props: ["field$"]
}), tf = V({
	readOnly: T().optional(),
	field$: m()
}, (e) => () => {
	let { readOnly: t, field$: a,...r } = e;
	return W("input", {
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
}, { displayName: "TextInput" }), tb = R((e) => {
	let t = k(null);
	return E(t, r((t) => {
		t && e.field$.update(t);
	}), q()), () => {
		let { readOnly: a, accept: r } = e;
		return B(G, {
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
				W("input", {
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
				W(eg, { path: ep }),
				W("span", { children: t.value?.name })
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
}), tg = R((e, { render: t }) => {
	let a = eL.use();
	return I(() => {
		a.request(e.op.operationId, {});
	}), E(a.response$(e.op.operationId), t((e) => W(tx, { database: e.body })));
}, {
	displayName: "DatabaseErContainer",
	props: ["op"]
}), tx = R((e) => () => B(t$, { children: [W(t_, { children: e.database.name }), Object.entries(e.database.tables).map(([t, a]) => W(tv, {
	database: e.database,
	table: a,
	tableName: t
}))] }), {
	displayName: "DatabaseErView",
	props: ["database"]
}), tv = R((e, { render: t }) => {
	let a = new L([]);
	return E(a, t((t) => {
		let r = e.table.columns, n = e.table.constraints;
		return B(tN, {
			open: !0,
			children: [
				B(tS, { children: [
					W("span", { children: e.tableName }),
					W(tq, {}),
					W(tj, { meta: e.table })
				] }),
				Object.keys(r).map((a) => {
					let n = r[a];
					return B(tI, {
						"data-hover": t.includes(a),
						children: [
							W(tC, { children: a }),
							n.of ? W(tw, {
								database: e.database,
								of: n.of
							}) : W(tD, { children: n.type }),
							W(tO, { children: W(tj, { meta: n }) })
						]
					});
				}),
				Object.entries(n).map(([e, t]) => W(tI, {
					onMouseover: () => {
						a.next(t.columnNames.map((e) => e.name));
					},
					onMouseleave: () => {
						a.next([]);
					},
					children: B(tT, {
						"data-primary": t.primary,
						"data-unique": t.unique,
						children: [
							W(eg, { path: t.unique ? ed : ev }),
							W("span", { children: e }),
							B("span", { children: [
								"(",
								t.columnNames.map((e) => [e.name, ...e.options ?? []].join(" ")).join(","),
								")"
							] })
						]
					})
				})),
				W(G, { sx: { py: 4 } })
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
}), tw = R((e, { render: t }) => {
	let a = L.seed(!1), r = E(a, t((t) => {
		let r = e.of.split(".")[0];
		return W(ec, {
			isOpen: t,
			onClose: () => {
				a.next(!1);
			},
			children: W(tP, { children: W(tv, {
				database: e.database,
				tableName: r,
				table: e.database.tables[r]
			}) })
		});
	}));
	return () => B(tk, {
		onClick: () => {
			a.next(!0);
		},
		children: [e.of, r]
	});
}, {
	displayName: "DatabaseErTableColumnOfView",
	props: ["of", "database"]
}), t$ = Y("div", { displayName: "DatabaseErMain" })({
	py: 18,
	px: 24,
	flex: 1,
	overflow: "auto"
}), t_ = Y("div", { displayName: "DatabaseErHeader" })({
	py: 8,
	px: 16,
	textStyle: "sys.label-large"
}), tN = Y("details", { displayName: "DatabaseErTable" })({
	"& + &": { mt: 16 },
	rounded: "sm",
	border: "1px solid",
	borderColor: K("sys.outline-variant", X(.38)),
	overflow: "hidden",
	width: "100%"
}), tS = Y("summary", { displayName: "DatabaseErTableSummary" })({
	textStyle: "sys.label-large",
	py: 8,
	px: 16,
	display: "flex",
	color: "sys.primary"
}), tI = Y("div", { displayName: "DatabaseErTableDef" })({
	px: 16,
	py: 4,
	display: "flex",
	_hover: { containerStyle: "sys.surface-container-low" }
}), tC = Y("div", { displayName: "DatabaseErTableColumnName" })({
	display: "flex",
	width: "20vw",
	textStyle: "sys.label-small",
	font: "code"
}), tO = Y("div", { displayName: "DatabaseErTableColumnComment" })({
	display: "flex",
	textStyle: "sys.label-small",
	width: "20vw",
	justifyContent: "end"
}), tk = Y("div", { displayName: "DatabaseErTableColumnOf" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	color: "sys.primary",
	_hover: { cursor: "pointer" }
}), tD = Y("div", { displayName: "DatabaseErTableColumnType" })({
	flex: 1,
	textStyle: "sys.label-small"
}), tj = Y("div", (e, {}) => (t) => B(t, { children: [
	e.meta.title,
	" ",
	e.meta.description ? W(el, {
		$title: W(eK, { children: W(eh, { text: e.meta.description }) }),
		children: W(eg, { path: eu })
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
	[`${eg}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
}), tP = Y("div", { displayName: "DialogContainer" })({
	display: "flex",
	containerStyle: "sys.surface",
	width: "90vw",
	roundedBottom: "sm",
	px: 16,
	py: 36,
	top: 0,
	position: "absolute",
	overflow: "auto"
}), tT = Y("div", { displayName: "DatabaseErTableConstraintName" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	display: "flex",
	alignItems: "center",
	gap: "1em",
	_primary: { [`${eg}`]: { color: "sys.primary" } },
	_unique: { [`${eg}`]: {
		position: "relative",
		"&::before": {
			content: JSON.stringify("1"),
			position: "absolute",
			right: -6,
			textStyle: "sys.label-small",
			fontSize: 8
		}
	} }
}), tq = Y("div", { displayName: "Spacer" })({ flex: 1 }), tE = Y("pre", ({}, { slots: e }) => (t) => {
	let a = e.default?.(), r = a?.[0];
	return r && "language-mermaid" === r.props.className ? W(tW, { code: r.children }) : W(t, { children: a });
}, { displayName: "PreWithMermaid" })({}), tW = R((e, {}) => {
	let t = k(null);
	return E(t, ei((e) => e ? c((async () => {
		let { default: t } = await eS(async () => {
			let { default: e } = await import("./vendor-mermaid.B-CSZXuL.chunk.js");
			return { default: e };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));
		await t.run({ nodes: [e] });
	})()) : et), q()), () => W(tL, {
		ref: t,
		class: "mermaid",
		children: e.code
	});
}, {
	displayName: "Mermaid",
	props: ["code"]
}), tL = Y("div", { displayName: "MermaidContainer" })({ "& > svg": { minWidth: "80%" } }), tR = R((e, {}) => {
	let t = eL.use(), a = E(e.operationId$, ei((e) => t.operation$(e))), r = E(a, er((e) => !!e)), n = L.seed(!1), i = E(r, C((e) => e.description ? W(eh, {
		text: e.description,
		components: { pre: tE }
	}) : null)), o = E(n, C((e) => W(ec, {
		isOpen: e,
		onClose: () => {
			n.next(!1);
		},
		children: W(l, { children: W(eK, { children: i }) })
	}))), l = Y("div", { displayName: "DialogContainer" })({
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
	}), s = E(r, C((e) => e.description ? B(ey, {
		onClick: () => {
			n.next(!0);
		},
		children: [W(eg, { path: es }), o]
	}) : null)), d = E(r, C((e) => W(tm, {
		operation: e,
		children: W(_, { children: Object.entries(e.responses ?? {}).map(([e, t]) => W(e8, {
			code: e,
			response: t
		}, e)) })
	}, e.operationId))), p = E(r, C((e) => B(tM, {
		sx: { containerStyle: {
			get: "sys.primary-container",
			post: "sys.success-container",
			put: "sys.warning-container",
			delete: "sys.error-container"
		}[e.method] ?? "sys.secondary-container" },
		children: [
			W("div", {
				"data-operation-method": !0,
				children: e.method
			}),
			B("div", {
				"data-operation-desc": !0,
				children: [W("div", {
					"data-operation-path": !0,
					children: e.path
				}), B("div", {
					"data-operation-summary": !0,
					children: [
						e.summary,
						" ",
						e.operationId != e.summary ? e.operationId : ""
					]
				})]
			}),
			W(G, { sx: { flex: 1 } }),
			s
		]
	})));
	return E(a, C((e) => e ? "SycDatabaseEr" == e.operationId ? B(tB, { children: [p, W(tF, { children: W(tg, { op: e }) })] }, e.operationId) : B(tB, { children: [p, W(tF, { children: W(G, {
		sx: {
			flex: 1,
			overflow: "auto"
		},
		children: d
	}) })] }, e.operationId) : null));
}, {
	displayName: "OperationView",
	props: ["operationId"]
}), tB = Y("div", { displayName: "OperationContainer" })({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), tF = Y("div", { displayName: "OperationMain" })({
	flex: 1,
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), tM = Y("summary", { displayName: "OperationHeading" })({
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
export { eR as n, eL as r, tR as t };
