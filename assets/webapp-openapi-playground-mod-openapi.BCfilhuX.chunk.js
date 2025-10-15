const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.DygN0EEt.chunk.js","assets/vendor-min-mermaid~chunk-4HFYJGYH.HqzFUhrb.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.DAO7dsPA.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js","assets/vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js","assets/index.DdIYnUiz.entry.js","assets/vendor-innoai-tech-vueuikit.pf1Bh6eQ.chunk.js","assets/vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js","assets/vendor-rxjs.Bnzpw5oq.chunk.js","assets/lib-nodepkg-typedef.C31p5CR7.chunk.js","assets/rolldown-runtime.BUi7Tn5u.chunk.js","assets/vendor-mermaid.BLxVj147.chunk.js","assets/vendor-innoai-tech-fetcher.CcPeqamQ.chunk.js","assets/vendor-innoai-tech-jsoneditor.DW5yVjHU.chunk.js","assets/lib-nodepkg-vuemarkdown.R8axF3Ac.chunk.js","assets/lib-nodepkg-vuematerial.M8enR1gt.chunk.js","assets/lib-nodepkg-vueformdata.BFynmKwt.chunk.js","assets/vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js","assets/vendor-min-mermaid~chunk-A4ITRWGT.Q-yxLqnU.chunk.js","assets/vendor-min-mermaid~chunk-ASAHGCDZ.CiiPqzVN.chunk.js","assets/vendor-min-mermaid~chunk-EFRVIJHI.Df9d5nYk.chunk.js","assets/vendor-min-mermaid~chunk-THXVA4DE.LE6PFG6l.chunk.js","assets/vendor-min-mermaid~chunk-EQI6KKA3.DKxGc_Rn.chunk.js","assets/vendor-min-mermaid~chunk-GOL2OBWC.B4BOjWXT.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.Cv6-ZsBo.chunk.js","assets/vendor-min-mermaid~chunk-F3RBCZRS.BtPoETau.chunk.js","assets/vendor-min-mermaid~chunk-IQQE2MEC.Ch8P21i0.chunk.js","assets/vendor-min-mermaid~chunk-RV6DXAHM.B4WAb6xn.chunk.js","assets/vendor-min-mermaid~chunk-TVVDRG3C.tqzZ9l_C.chunk.js","assets/vendor-min-mermaid~chunk-W6CKT3PL.BF21TxWL.chunk.js","assets/vendor-min-mermaid~mermaid.esm.min.DW4bssxk.chunk.js"])))=>i.map(i=>d[i]);
import { A as e, B as t, D as a, E as r, F as i, M as n, N as o, O as l, P as s, R as d, S as p, X as c, a as u, c as m, ct as h, d as y, et as f, f as b, h as x, ht as g, j as v, k as w, lt as $, m as _, mt as N, o as S, p as I, r as C, s as O, t as k, x as j, y as D, z as P } from "./vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js";
import { c as T, d as q, i as E, l as R, n as B, o as W, p as L, s as F, t as M } from "./lib-nodepkg-typedef.C31p5CR7.chunk.js";
import { i as A, n as H, r as J, t as V } from "./vendor-innoai-tech-fetcher.CcPeqamQ.chunk.js";
import { d as z, f as U, o as K, s as X } from "./vendor-innoai-tech-vueuikit.pf1Bh6eQ.chunk.js";
import { t as Z } from "./lib-nodepkg-vuemarkdown.R8axF3Ac.chunk.js";
import { a as G, i as Q, n as Y, r as ee, t as et } from "./lib-nodepkg-vuematerial.M8enR1gt.chunk.js";
import { a as ea, c as er, l as ei, n as en, o as eo, r as el, s as es, t as ed } from "./vendor-innoai-tech-jsoneditor.DW5yVjHU.chunk.js";
import { i as ep, n as ec, r as eu, t as em } from "./lib-nodepkg-vueformdata.BFynmKwt.chunk.js";
import { X as eh, Z as ey, dt as ef, et as eb, nt as ex, t as eg, ut as ev } from "./index.DdIYnUiz.entry.js";
var ew = class t extends y {
	static empty() {
		return new t({
			openapi: "3.1.0",
			components: { schemas: {} },
			paths: {}
		});
	}
	#e = V({
		paramsSerializer: J,
		transformRequestBody: A
	});
	#t = new v(/* @__PURE__ */ new Map());
	get #a() {
		return this.value.servers?.[0]?.url ?? "";
	}
	response$(t) {
		return b(this.#t, _((a) => {
			let r = a.get(t);
			return r ? p(r, r.error$) : e;
		}));
	}
	requesting$(e) {
		return b(this.#t, _((t) => t.get(e)?.requesting$ ?? l(!1)));
	}
	asRequestConfigCreator(e) {
		let t = this.#r(e);
		if (!t) return null;
		let a = Object.keys(t.requestBody?.content ?? {})[0];
		return (e = {}) => ({
			method: t.method.toUpperCase(),
			url: this.#a + e_(t.path, e),
			params: f(e, t.parameters?.filter((e) => "query" == e.in).map((e) => e.name) ?? []),
			headers: {
				...f(e, t.parameters?.filter((e) => "header" == e.in).map((e) => e.name) ?? []),
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
			a = H(Object.assign(t, {
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
		return b(this, _((t) => {
			for (let a of e$(t, { operationId: e })) if (a) return l(a);
			return l(null);
		}));
	}
	operations$(e) {
		return b(this, _((t) => l([...e$(t, e)])));
	}
	schema$(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		return b(this, _((e) => t ? l(g(e, t) ?? null) : l(null)), a((e) => e ? {
			...e,
			$id: t[t.length - 1]
		} : e));
	}
	schema(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		if (t) return g(this.value, t) ?? void 0;
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
let e_ = (e, t = {}) => e.replace(/{([\s\S]+?)}/g, (e, a) => [].concat(t[a] || e).join(",")), eN = k(() => ew.empty(), { name: "OpenAPI" });
var eS = C(({}, {}) => {
	let t = eN.use(), a = new y({ operationId: void 0 }), r = new n();
	b(r, D(200), I((e) => {
		a.next((t) => {
			t.operationId = `*${e ?? ""}`;
		});
	}), m());
	let l = S(null);
	b(l, _((t) => {
		if (t) {
			let e = (e) => {
				e && t.scrollTo({ top: e.offsetTop - t.offsetTop });
			};
			return new o(() => {
				let a = new MutationObserver((t) => {
					for (let a of t) if ("attributes" === a.type) {
						let t = a.target;
						t.classList.contains("router-link-active") && e(t);
					}
				});
				return a.observe(t, {
					attributes: !0,
					subtree: !0
				}), setTimeout(() => {
					e(t.querySelector(".router-link-active"));
				}, 100), () => {
					a.disconnect();
				};
			});
		}
		return e;
	}), O());
	let d = b(a, _((e) => t.operations$(e)), u((e) => {
		let t = Object.groupBy(e, (e) => e.group);
		return ey(eC, { children: [eh(eO, { children: eh("input", {
			type: "text",
			placeholder: "请输入 operationId 查询",
			onInput: (e) => {
				r.next(e.target.value);
			}
		}) }), eh(ek, {
			sx: {
				flex: 1,
				overflow: "scroll"
			},
			ref: l,
			children: Object.entries(t).toSorted().map(([e, t]) => ey("div", {
				"data-nav-group": !0,
				children: [eh("div", {
					"data-nav-group-heading": !0,
					children: e
				}), eh("div", {
					"data-nav-group-contents": !0,
					children: t?.map((e) => ey(eD, {
						component: s,
						to: `/operations/${e.operationId}`,
						children: [eh(X, {
							"data-operation-method": !0,
							sx: { color: {
								get: "sys.primary",
								post: "sys.success",
								put: "sys.warning",
								delete: "sys.error"
							}[e.method] ?? "sys.secondary" },
							children: e.method
						}), ey("div", {
							"data-operation-desc": !0,
							children: [eh("div", {
								"data-operation-id": !0,
								children: e.operationId
							}), e.summary ? eh("div", {
								"data-operation-summary": !0,
								children: e.summary != e.operationId ? e.summary : eh("span", { children: "\xA0" })
							}) : void 0]
						})]
					}))
				})]
			}))
		})] });
	}));
	return () => ey(eI, { children: [d, eh(ej, { children: eh(i, {}) })] });
}, { displayName: "OpenAPIView" }), eI = K("div", { displayName: "Container" })({
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	display: "flex"
}), eC = K("aside", { displayName: "NavContainer" })({
	width: 240,
	py: 4,
	display: "flex",
	flexDirection: "column",
	gap: 4,
	height: "100%",
	overflow: "hidden",
	borderRight: "1px solid",
	borderColor: "sys.outline"
}), eO = K("div", { displayName: "NavSearchBox" })({
	input: {
		py: 10,
		px: 12,
		border: "none",
		width: "100%",
		outline: 0
	},
	borderBottom: "1px solid",
	borderColor: "sys.outline"
}), ek = K("div", { displayName: "Nav" })({
	display: "flex",
	flexDirection: "column",
	gap: 4,
	$data_nav_group_heading: {
		px: 12,
		py: 4,
		textStyle: "sys.label-small",
		containerStyle: "sys.secondary-container"
	}
}), ej = K("main", { displayName: "Main" })({
	flex: 1,
	overflow: "hidden"
}), eD = K("a", { displayName: "OperationListItem" })({
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
}), eP = K("div", { displayName: "Token" })({
	display: "inline-table",
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 11,
	lineHeight: 14
}), eT = K("div", {
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
}), eq = K("div", (e, { slots: t }) => {
	let a = eW.use();
	return (r) => eh(r, {
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
}), eE = K("div", (e, {}) => (t) => {
	let a = L.metaProp(e.schema, "title") ?? "", r = L.metaProp(e.schema, "description") ?? "";
	return ey(t, { children: [
		a,
		" ",
		r ? eh(Y, {
			$title: eh(eR, { children: eh(Z, { text: r }) }),
			children: eh(Q, { path: eo })
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
	[`${Q}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
}), eR = K("div", { displayName: "MarkdownContainer" })({
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
}), eB = ({ name: e, value: t, extra: a }) => "" == t ? null : eh(eq, { children: ey(eP, {
	sx: {
		opacity: .7,
		fontSize: "0.9em",
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	},
	children: [
		eh(eP, {
			sx: { color: "sys.primary" },
			children: `@${e}(`
		}),
		`${t}`,
		Object.entries(a ?? {}).map(([e, t]) => c(t) ? null : ey(eb, { children: [
			ey(eP, {
				sx: { opacity: .5 },
				children: [",", "\xA0"]
			}),
			eh(eP, {
				sx: { opacity: .5 },
				children: e
			}),
			ey(eP, {
				sx: { opacity: .5 },
				children: [":", "\xA0"]
			}),
			eh(eP, {
				sx: { opacity: .7 },
				children: t
			})
		] })),
		eh(eP, {
			sx: { color: "sys.primary" },
			children: ")"
		})
	]
}) }), eW = k(() => ({ indent: 0 }), { name: "IntentContext" }), eL = t(({}, { slots: e }) => {
	let t = eW.use();
	return () => eh(eW, {
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
}, eM = k(() => new eF("")), eA = C((e) => {
	let t = eM.use(), a = eW.use(), r = S(!1);
	return () => {
		let i = e.schema, n = L.schemaProp(e.schema, "$ref"), o = "intersection" == (i = L.schemaProp(e.schema, L.unwrap)()).type || "object" == i.type || "union" == i.type || "record" == i.type || "array" == i.type || "union" == i.type, l = t.safe(n) && ey(eb, { children: [eh("span", { children: "\xA0" }), eh(eJ, { schema: i })] });
		return eh(eM, {
			value: t.child(n),
			children: o ? a.indent < 3 ? ey(eb, { children: [eh(s, {
				to: `#${n}`,
				"data-index": a.indent,
				children: eh(eP, {
					id: n,
					children: n
				})
			}), l] }) : ey(eb, { children: [eh(X, {
				component: s,
				sx: {},
				to: `#${n}`,
				"data-index": a.indent,
				onClick: (e) => {
					t.safe(n) && (e.preventDefault(), e.stopPropagation(), r.next(!0));
				},
				children: eh(eP, {
					id: n,
					children: n
				})
			}), t.safe(n) && eh(et, {
				isOpen: r.value,
				onClose: () => {
					r.next(!1);
				},
				children: eh(eH, { children: ey(eq, { children: [eh(eP, { children: n }), eh(eW, {
					value: { indent: 0 },
					children: l
				})] }) })
			})] }) : l
		});
	};
}, {
	displayName: "SchemaViewLink",
	props: ["schema"]
}), eH = K("div", { displayName: "DialogContainer" })({
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
}), eJ = C((e) => {
	let t = e.schema;
	return L.schemaProp(t, "$ref") ? eh(eA, { schema: t }) : () => {
		switch (t.type) {
			case "union": return eh(eb, { children: L.schemaProp(t, "oneOf")?.map((e, t) => ey(eb, { children: [t > 0 && ey(eP, { children: [
				"\xA0",
				" | ",
				"\xA0"
			] }), eh(eJ, { schema: e })] })) });
			case "intersection": return eh(eP, { children: L.schemaProp(t, "allOf")?.filter((e) => !Object.keys(e).length).map((e, t) => ey(eb, { children: [t > 0 && ey(eP, { children: [
				"\xA0",
				"&",
				"\xA0"
			] }), eh(eJ, { schema: e })] })) });
			case "array": return ey(eP, {
				sx: {
					wordBreak: "keep-all",
					whiteSpace: "nowrap"
				},
				children: [
					eh(eP, { children: "Array<" }),
					eh(eJ, { schema: L.schemaProp(t, "items") ?? E() }),
					eh(eP, { children: ">" })
				]
			});
			case "object": return ey(eb, { children: [
				eh(eP, { children: "{" }),
				eh(eL, { children: eh(eb, { children: Object.entries(L.schemaProp(t, "properties") ?? {}).map(([e, a]) => a ? eh(eb, { children: ey(eq, {
					spacing: 2,
					children: [eh(eE, { schema: a }), ey(eP, {
						sx: {
							wordBreak: "keep-all",
							whiteSpace: "nowrap"
						},
						children: [
							eh(eT, {
								nullable: L.schemaProp(t, "nullable"),
								deprecated: L.schemaProp(t, "deprecated"),
								optional: !(L.schemaProp(t, "required") ?? []).includes(e),
								children: e
							}),
							eh(eP, {
								sx: { mr: "1em" },
								children: ":"
							}),
							eh(eJ, { schema: a })
						]
					})]
				}) }) : null) }) }),
				eh(eP, { children: "}" })
			] });
			case "record": return ey(eb, { children: [
				eh(eP, { children: "{" }),
				L.schemaProp(t, "additionalProperties") && eh(eb, { children: eh(eL, { children: ey(eq, { children: [
					ey(eP, {
						sx: { mr: 1 },
						children: ["[K:", "\xA0"]
					}),
					eh(eJ, { schema: L.schemaProp(t, "propertyNames") ?? q() }),
					ey(eP, {
						sx: { mr: 1 },
						children: ["]:", "\xA0"]
					}),
					eh(eJ, { schema: L.schemaProp(t, "additionalProperties") ?? E() })
				] }) }) }),
				eh(eP, { children: "}" })
			] });
			case "enums": {
				let e = L.schemaProp(t, "enum") ?? [];
				if (1 == e.length) return eh(eP, { children: JSON.stringify(e[0]) });
				let a = "any";
				return e.length > 0 && (a = typeof e[0]), ey(eb, { children: [eh(eP, {
					sx: { fontWeight: "bold" },
					children: a
				}), eh(eL, { children: e.map((e, a) => eh(eB, {
					name: "enum",
					value: `${e}`,
					extra: L.metaProp(t, "enumLabels")?.[a] ? { label: JSON.stringify(L.metaProp(t, "enumLabels")[a]) } : {}
				}, e)) })] });
			}
		}
		let [e, a, r] = [
			t.type,
			L.metaProp(t, "format"),
			L.metaProp(t, "default")
		];
		return ey(eb, { children: [eh(eP, {
			sx: { fontWeight: "bold" },
			children: e || "any"
		}), ey(eL, { children: [
			a && eh(eB, {
				name: "format",
				value: a
			}),
			!c(r) && eh(eB, {
				name: "default",
				value: r
			}),
			eV.map((e) => {
				let a = L.schemaProp(t, e);
				return c(a) ? null : "pattern" == e ? eh(eB, {
					name: e,
					value: a,
					extra: { errMsg: L.metaProp(t, "x-pattern-err-msg") }
				}) : eh(eB, {
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
], ez = C((e) => {
	let t = eN.use();
	return () => {
		let a = $(e.response["x-status-return-errors"] ?? []).map((e) => (function(e = "") {
			let t = e.indexOf("{");
			return t > -1 ? e.slice(t + 1, e.length - 1).split(",").reduce((e, t) => (e.joining ? e.values[e.values.length - 1] += "," + t : e.values.push(t), t.split("\"").length % 2 == 0 && (e.joining = !e.joining), e), {
				values: [],
				joining: !1
			}).values.reduce((e, t) => {
				let a = t.indexOf("=");
				if (a < 0) return e;
				let r = t.slice(0, a), i = t.slice(a + 1);
				return c(r) || c(i) ? e : {
					...e,
					[r]: JSON.parse(i)
				};
			}, { code: e.slice(0, t) }) : null;
		})(e));
		return ey(eX, { children: [eh(eZ, {
			"data-failed": function(e) {
				try {
					return Number(e) >= 400;
				} catch (e) {
					return !1;
				}
			}(e.code),
			children: e.code
		}), ey(X, {
			sx: { pl: "4em" },
			children: [eh(eb, { children: Object.entries(e.response.content ?? {}).map(([e, { schema: a }]) => ey(eG, { children: [eh(eq, {
				spacing: 0,
				children: eh(eJ, { schema: M.decode(a, (e) => [t.schema(e) ?? {}, B(e)]) })
			}), eh("div", {
				"data-content-type": !0,
				children: e
			})] })) }), eh(eb, { children: a.length > 0 ? ey(X, {
				sx: {
					mt: 16,
					containerStyle: "sys.surface-container",
					px: 12,
					py: 16,
					rounded: "xs"
				},
				children: [eh(X, {
					sx: { pb: 8 },
					children: ey("b", { children: [eh("small", { children: "可能错误码" }), ":"] })
				}), ey(eU, { children: [
					eh(eK, {
						sx: { textStyle: "sys.label-small" },
						children: eh("code", { children: "errors[*].code" })
					}),
					eh(eK, {
						sx: { textStyle: "sys.label-small" },
						children: eh("code", { children: "errors[*].message" })
					}),
					a.map((e) => e ? ey(eb, { children: [eh(eK, {
						sx: {
							color: "sys.primary",
							textStyle: "sys.label-small",
							fontWeight: "bold"
						},
						children: eh("code", { children: JSON.stringify(e.code) })
					}), eh(eK, { children: e.message })] }) : null)
				] })]
			}) : null })]
		})] });
	};
}, {
	displayName: "ResponseView",
	props: ["code", "response"]
}), eU = K("div", { displayName: "Table" })({
	textStyle: "sys.label-medium",
	display: "grid",
	gap: 8,
	width: "100%",
	gridTemplateColumns: "min-content 1fr",
	gridAutoColumns: "auto"
}), eK = K("div", { displayName: "TableCell" })({}), eX = K("section", { displayName: "ResponseSection" })({}), eZ = K("div", { displayName: "ResponseStatusCode" })({
	fontSize: 18,
	fontFamily: "code",
	color: "sys.success",
	py: 12,
	pos: "sticky",
	top: 0,
	_data_failed__true: { color: "sys.error" }
}), eG = K("section", { displayName: "ResponseSchema" })({
	pos: "relative",
	$data_content_type: {
		pos: "absolute",
		right: 0,
		top: 0,
		fontFamily: "code",
		opacity: .3
	}
}), eQ = K("div", (e, { slots: t }) => (a) => {
	let r = e.valued, i = e.invalid, n = e.disabled, o = (t.default?.() ?? []).map((e) => "input" === e.type ? (r = !!(e.props?.value ?? e.props?.placeholder ?? r), n = e.props?.disabled ?? n, ex(e, { disabled: n })) : ex(e));
	return ey(a, {
		"data-valued": r,
		"data-invalid": i,
		"data-disabled": n,
		"data-focus-within": e.focus,
		"data-has-leading": !!t.leading,
		"data-has-trailing": !!t.trailing,
		children: [ey("div", {
			"data-input-container": !0,
			children: [ey("div", {
				"data-input-decorator-container": !0,
				children: [
					eh("div", { "data-input-decorator-leading": !0 }),
					eh("div", {
						"data-input-decorator-label": !0,
						children: eh("div", {
							"data-input-label": !0,
							children: t.label?.()
						})
					}),
					eh("div", { "data-input-decorator-trailing": !0 })
				]
			}), ey("div", {
				"data-input-row": !0,
				children: [
					t.leading && eh(eY, {
						role: "leading",
						children: t.leading()
					}),
					o,
					t.trailing && eh(eY, {
						role: "trailing",
						children: t.trailing()
					})
				]
			})]
		}), t.supporting && eh("div", {
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
}), eY = K("div", { role: T(["leading", "trailing"]) }, { displayName: "Maker" })({
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
}), e0 = C((e, {}) => {
	let t = en.of(e.field$.typedef, c(e.field$.input) ? void 0 : e.field$.input);
	return b(t, x(1), I((t) => {
		e.field$.update(t);
	}), m()), () => eh(e1, { children: eh(el, {
		value: t,
		children: eh(ed, {})
	}) });
}, {
	displayName: "JSONEditorInput",
	props: ["field$", "readOnly"]
}), e1 = K("div", { displayName: "JSONInputContainer" })({
	position: "relative",
	width: "100%",
	minHeight: "40em",
	py: 8,
	px: 12,
	overflow: "hidden"
});
let e2 = ({ field: e, value: t }) => ey(X, {
	component: "span",
	sx: { display: "block" },
	children: [ey(X, {
		component: "span",
		sx: {
			fontWeight: "bold",
			marginRight: "0.5em"
		},
		children: [e, ":"]
	}), eh("span", { children: t })]
});
var e4 = ({ method: e, url: t, params: a }) => {
	let r = J(a);
	return ey(X, {
		component: "span",
		sx: { fontWeight: "bold" },
		children: [
			`${e.toUpperCase()} `,
			ey(X, {
				component: "span",
				sx: { fontWeight: "medium" },
				children: [t, r ? `?${r}` : ""]
			}),
			" HTTP/*"
		]
	});
}, e8 = t({ $default: F().optional() }, ({}, { slots: e }) => () => eh(X, {
	sx: {
		containerStyle: "sys.surface-container",
		rounded: "xs",
		width: "100%",
		overflow: "auto",
		py: 4,
		px: 8
	},
	children: eh(X, {
		component: "pre",
		sx: {
			padding: 4,
			margin: 0,
			textStyle: "sys.body-small",
			fontFamily: "code"
		},
		children: eh("code", { children: e.default?.() })
	})
}), { displayName: "CodeView" }), e6 = t({ request: F() }, (e) => () => {
	let t = e.request;
	return ey(e8, { children: [
		eh(e4, { ...t }),
		eh(eb, { children: Object.entries({
			"User-Agent": navigator.userAgent,
			Origin: location.origin,
			Referer: `${location.origin}${location.pathname}`,
			...t.headers
		}).toSorted().map(([e, t]) => eh(e2, {
			field: e,
			value: t
		}, e)) }),
		t.body && ey(eb, { children: [eh("br", {}), function(e) {
			if (e5(e.headers).includes("multipart/form-data")) {
				let a = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
				e.headers = {
					...e.headers,
					"Content-Type": `multipart/form-data; boundary=${a}`
				};
				var t = e.body;
				let r = (e, t) => t instanceof File || t instanceof Blob ? `${a}
Content-Disposition: form-data; name="${e}"${t.name ? `; filename="${t.name}"` : ""}
Content-Type: ${t.type}

[File Content]
` : h(t) ? t.map((t) => r(e, t)).join("\n") : `${a}
Content-Disposition: form-data; name="${e}"

${N(t) ? JSON.stringify(t) : String(t)}
`;
				return Object.entries(t).map(([e, t]) => r(e, t)).join("\n") + `${a}--`;
			}
			return e5(e.headers).includes("application/x-www-form-urlencoded") ? J(e.body) : e9(e.headers) ? JSON.stringify(e.body, null, 2) : e.body;
		}(t)] })
	] });
}, { displayName: "HttpRequest" }), e3 = t({ response: F() }, (e, {}) => () => {
	let t = e.response;
	return e5(t.headers).includes("image/") ? eh("div", { children: eh("img", {
		src: ((e, t) => {
			let a = new Uint8Array(e), r = "";
			for (let e = a.byteLength, t = 0; t < e; t++) r += String.fromCharCode(a[t]);
			return `data:${t};base64,${btoa(r)}`;
		})(t.body, e5(t.headers)),
		alt: ""
	}) }) : (console.log(t), ey(e8, { children: [
		ey("span", { children: ["HTTP/* ", t.status] }),
		eh("br", {}),
		t.headers && eh(eb, { children: Object.entries(t.headers).map(([e, t]) => eh(e2, {
			field: e,
			value: t
		}, e)) }),
		eh("br", {}),
		t.body ? e9(t.headers) ? JSON.stringify(t.body, null, 2) : `${t.body}` : null
	] }));
}, { displayName: "HTTPResponse" });
function e5(e = {}) {
	for (let [t, a] of Object.entries(e)) if ("content-type" == t.toLowerCase()) return a;
	return "";
}
var e9 = (e) => e5(e).includes("application/json"), e7 = C((e) => b(eN.use().response$(e.operationID), u((e) => eh(te, { children: eh(e3, { response: e }) }))), {
	displayName: "ResponsePreview",
	props: ["operationID"]
}), te = K("section", { displayName: "ResponseSection" })({
	maxHeight: "40vh",
	overflow: "auto"
}), tt = C((e, { slots: t }) => {
	let a = eN.use(), r = {};
	for (let t of e.operation.parameters ?? []) {
		let e = M.decode(t.schema, (e) => [a.schema(e) ?? {}, B(e)]).use(eu(`${t.name}, in=${JSON.stringify(t.in)}`));
		t.required || (e = e.optional()), e.use(em(t.schema.title)), ["object", "array"].includes(t.schema.type ?? "") ? r[t.name] = e.use(ec(e0)) : r[t.name] = e;
	}
	if (e.operation.requestBody) {
		let t = Object.entries(e.operation.requestBody.content ?? {})[0];
		if (t) {
			let [e, i] = t, n = M.decode(i.schema ?? {}, (e) => [a.schema(e) ?? {}, B(e)]).use(eu(`body, content-type = ${JSON.stringify(e)}`));
			e.includes("text/") ? r.body = n : e.includes("octet-stream") || e.includes("image/") ? r.body = n.use(ec(ti)) : r.body = n.use(ec(e0));
		}
	}
	let i = P(), n = d(), o = ep.of(R(r), (() => {
		try {
			let e = n.query.params;
			return JSON.parse(atob((Array.isArray(e) ? e[0] : e) ?? ""));
		} catch (e) {}
		return {};
	})());
	b(o, I((t) => {
		a.request(e.operation.operationId, t);
	}), I((e) => {
		i.replace({ query: { params: btoa(JSON.stringify(e)) } });
	}), m());
	let l = b(o.inputs$, u((t) => {
		let r = a.asRequestConfigCreator(e.operation.operationId);
		return r ? eh(e6, { request: r(t ?? {}) }) : null;
	}));
	return () => ey(X, {
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
			e.preventDefault(), o.submit();
		},
		children: [eh(X, {
			sx: {
				flex: 2,
				py: 24,
				display: "flex",
				flexDirection: "column",
				gap: 32,
				height: "100%",
				overflow: "auto"
			},
			children: [...o.fields(o.typedef)].map((e) => eh(ta, { field$: e }))
		}), eh(X, {
			sx: {
				flex: 3,
				gap: 24,
				display: "flex",
				flexDirection: "column",
				height: "100%",
				overflow: "hidden"
			},
			children: ey(X, {
				sx: {
					display: "flex",
					flexDirection: "column",
					gap: 24,
					height: "100%",
					overflow: "hidden"
				},
				children: [
					l,
					eh(X, {
						sx: { px: 8 },
						children: eh(G, {
							type: "submit",
							children: "发起请求"
						})
					}),
					eh(e7, { operationID: e.operation.operationId }),
					eh(X, {
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
}), ta = C(({ field$: e }, { render: t }) => (ef(() => {
	e.destroy();
}), b(r([e, e.input$]), t(([t, a]) => {
	var r;
	let i = L.metaProp(e.typedef, "inputBy") ?? tr, n = (L.metaProp(e.typedef, "readOnlyWhenInitialExist") ?? !1) && !!t.initial;
	return eh(eQ, {
		valued: !c(a ?? t.initial),
		invalid: !!t.error,
		focus: !!t.focus,
		$label: ey("span", { children: [(r = e).meta.label ?? r.name, e.optional ? "（非必填）" : ""] }),
		$supporting: ey(eq, { children: [eh(eE, { schema: e.typedef }), eh(eJ, { schema: e.typedef })] }),
		$trailing: i.$trailing,
		children: eh(i, {
			field$: e,
			readOnly: n
		})
	});
}))), {
	displayName: "ParameterInput",
	props: ["field$"]
}), tr = t({
	readOnly: W().optional(),
	field$: F()
}, (e) => () => {
	let { readOnly: t, field$: a,...r } = e;
	return eh("input", {
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
}, { displayName: "TextInput" }), ti = C((e) => {
	let t = S(null);
	return b(t, I((t) => {
		t && e.field$.update(t);
	}), O()), () => {
		let { readOnly: a, accept: r } = e;
		return ey(X, {
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
				eh("input", {
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
				eh(Q, { path: ei }),
				eh("span", { children: t.value?.name })
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
}), tn = C((e, { render: t }) => {
	let a = eN.use();
	return ev(() => {
		a.request(e.op.operationId, {});
	}), b(a.response$(e.op.operationId), t((e) => eh(to, { database: e.body })));
}, {
	displayName: "DatabaseErContainer",
	props: ["op"]
}), to = C((e) => () => ey(td, { children: [eh(tp, { children: e.database.name }), Object.entries(e.database.tables).map(([t, a]) => eh(tl, {
	database: e.database,
	table: a,
	tableName: t
}))] }), {
	displayName: "DatabaseErView",
	props: ["database"]
}), tl = C((e, { render: t }) => {
	let a = new y([]);
	return b(a, t((t) => {
		let r = e.table.columns, i = e.table.constraints;
		return ey(tc, {
			open: !0,
			children: [
				ey(tu, { children: [
					eh("span", { children: e.tableName }),
					eh(tw, {}),
					eh(tx, { meta: e.table })
				] }),
				Object.keys(r).map((a) => {
					let i = r[a];
					return ey(tm, {
						"data-hover": t.includes(a),
						children: [
							eh(th, { children: a }),
							i.of ? eh(ts, {
								database: e.database,
								of: i.of
							}) : eh(tb, { children: i.type }),
							eh(ty, { children: eh(tx, { meta: i }) })
						]
					});
				}),
				Object.entries(i).map(([e, t]) => eh(tm, {
					onMouseover: () => {
						a.next(t.columnNames.map((e) => e.name));
					},
					onMouseleave: () => {
						a.next([]);
					},
					children: ey(tv, {
						"data-primary": t.primary,
						"data-unique": t.unique,
						children: [
							eh(Q, { path: t.unique ? er : es }),
							eh("span", { children: e }),
							ey("span", { children: [
								"(",
								t.columnNames.map((e) => [e.name, ...e.options ?? []].join(" ")).join(","),
								")"
							] })
						]
					})
				})),
				eh(X, { sx: { py: 4 } })
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
}), ts = C((e, { render: t }) => {
	let a = y.seed(!1), r = b(a, t((t) => {
		let r = e.of.split(".")[0];
		return eh(et, {
			isOpen: t,
			onClose: () => {
				a.next(!1);
			},
			children: eh(tg, { children: eh(tl, {
				database: e.database,
				tableName: r,
				table: e.database.tables[r]
			}) })
		});
	}));
	return () => ey(tf, {
		onClick: () => {
			a.next(!0);
		},
		children: [e.of, r]
	});
}, {
	displayName: "DatabaseErTableColumnOfView",
	props: ["of", "database"]
}), td = K("div", { displayName: "DatabaseErMain" })({
	py: 18,
	px: 24,
	flex: 1,
	overflow: "auto"
}), tp = K("div", { displayName: "DatabaseErHeader" })({
	py: 8,
	px: 16,
	textStyle: "sys.label-large"
}), tc = K("details", { displayName: "DatabaseErTable" })({
	"& + &": { mt: 16 },
	rounded: "sm",
	border: "1px solid",
	borderColor: U("sys.outline-variant", z(.38)),
	overflow: "hidden",
	width: "100%"
}), tu = K("summary", { displayName: "DatabaseErTableSummary" })({
	textStyle: "sys.label-large",
	py: 8,
	px: 16,
	display: "flex",
	color: "sys.primary"
}), tm = K("div", { displayName: "DatabaseErTableDef" })({
	px: 16,
	py: 4,
	display: "flex",
	_hover: { containerStyle: "sys.surface-container-low" }
}), th = K("div", { displayName: "DatabaseErTableColumnName" })({
	display: "flex",
	width: "20vw",
	textStyle: "sys.label-small",
	font: "code"
}), ty = K("div", { displayName: "DatabaseErTableColumnComment" })({
	display: "flex",
	textStyle: "sys.label-small",
	width: "20vw",
	justifyContent: "end"
}), tf = K("div", { displayName: "DatabaseErTableColumnOf" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	color: "sys.primary",
	_hover: { cursor: "pointer" }
}), tb = K("div", { displayName: "DatabaseErTableColumnType" })({
	flex: 1,
	textStyle: "sys.label-small"
}), tx = K("div", (e, {}) => (t) => ey(t, { children: [
	e.meta.title,
	" ",
	e.meta.description ? eh(Y, {
		$title: eh(eR, { children: eh(Z, { text: e.meta.description }) }),
		children: eh(Q, { path: eo })
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
	[`${Q}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
}), tg = K("div", { displayName: "DialogContainer" })({
	display: "flex",
	containerStyle: "sys.surface",
	width: "90vw",
	roundedBottom: "sm",
	px: 16,
	py: 36,
	top: 0,
	position: "absolute",
	overflow: "auto"
}), tv = K("div", { displayName: "DatabaseErTableConstraintName" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	display: "flex",
	alignItems: "center",
	gap: "1em",
	_primary: { [`${Q}`]: { color: "sys.primary" } },
	_unique: { [`${Q}`]: {
		position: "relative",
		"&::before": {
			content: JSON.stringify("1"),
			position: "absolute",
			right: -6,
			textStyle: "sys.label-small",
			fontSize: 8
		}
	} }
}), tw = K("div", { displayName: "Spacer" })({ flex: 1 }), t$ = K("pre", ({}, { slots: e }) => (t) => {
	let a = e.default?.(), r = a?.[0];
	return r && "language-mermaid" === r.props.className ? eh(t_, { code: r.children }) : eh(t, { children: a });
}, { displayName: "PreWithMermaid" })({}), t_ = C((t, {}) => {
	let a = S(null);
	return b(a, _((t) => t ? w((async () => {
		let { default: e } = await eg(async () => {
			let { default: e } = await import("./vendor-mermaid.DygN0EEt.chunk.js");
			return { default: e };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]));
		await e.run({ nodes: [t] });
	})()) : e), O()), () => eh(tN, {
		ref: a,
		class: "mermaid",
		children: t.code
	});
}, {
	displayName: "Mermaid",
	props: ["code"]
}), tN = K("div", { displayName: "MermaidContainer" })({ "& > svg": { minWidth: "80%" } }), tS = C((e, {}) => {
	let t = eN.use(), a = b(e.operationId$, _((e) => t.operation$(e))), r = b(a, j((e) => !!e)), i = y.seed(!1), n = b(r, u((e) => e.description ? eh(Z, {
		text: e.description,
		components: { pre: t$ }
	}) : null)), o = b(i, u((e) => eh(et, {
		isOpen: e,
		onClose: () => {
			i.next(!1);
		},
		children: eh(l, { children: eh(eR, { children: n }) })
	}))), l = K("div", { displayName: "DialogContainer" })({
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
	}), s = b(r, u((e) => e.description ? ey(ee, {
		onClick: () => {
			i.next(!0);
		},
		children: [eh(Q, { path: ea }), o]
	}) : null)), d = b(r, u((e) => eh(tt, {
		operation: e,
		children: eh(eb, { children: Object.entries(e.responses ?? {}).map(([e, t]) => eh(ez, {
			code: e,
			response: t
		}, e)) })
	}, e.operationId))), p = b(r, u((e) => ey(tO, {
		sx: { containerStyle: {
			get: "sys.primary-container",
			post: "sys.success-container",
			put: "sys.warning-container",
			delete: "sys.error-container"
		}[e.method] ?? "sys.secondary-container" },
		children: [
			eh("div", {
				"data-operation-method": !0,
				children: e.method
			}),
			ey("div", {
				"data-operation-desc": !0,
				children: [eh("div", {
					"data-operation-path": !0,
					children: e.path
				}), ey("div", {
					"data-operation-summary": !0,
					children: [
						e.summary,
						" ",
						e.operationId != e.summary ? e.operationId : ""
					]
				})]
			}),
			eh(X, { sx: { flex: 1 } }),
			s
		]
	})));
	return b(a, u((e) => e ? "SycDatabaseEr" == e.operationId ? ey(tI, { children: [p, eh(tC, { children: eh(tn, { op: e }) })] }, e.operationId) : ey(tI, { children: [p, eh(tC, { children: eh(X, {
		sx: {
			flex: 1,
			overflow: "auto"
		},
		children: d
	}) })] }, e.operationId) : null));
}, {
	displayName: "OperationView",
	props: ["operationId"]
}), tI = K("div", { displayName: "OperationContainer" })({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), tC = K("div", { displayName: "OperationMain" })({
	flex: 1,
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), tO = K("summary", { displayName: "OperationHeading" })({
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
