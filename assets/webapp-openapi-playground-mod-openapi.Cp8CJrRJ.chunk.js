const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.D3b02Bxi.chunk.js","assets/vendor-min-mermaid~architectureDiagram-4X3Z3J56.BkPEXsWQ.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BA2pzSbr.chunk.js","assets/vendor-min-mermaid~blockDiagram-BWRZOBD3.DzXBMLmV.chunk.js","assets/vendor-min-mermaid~chunk-4HFYJGYH.sOLS5yli.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.DOJWY50z.chunk.js","assets/vendor-min-mermaid~chunk-AI4T2ZLM.Mn7h7yt9.chunk.js","assets/vendor-min-mermaid~chunk-6EQESGSB.dA72SYvD.chunk.js","assets/vendor-min-mermaid~chunk-F3RBCZRS.B1A4fW1G.chunk.js","assets/vendor-min-mermaid~mermaid.esm.min.BobBwK4b.chunk.js"])))=>i.map(i=>d[i]);
import { $ as object, A as of, B as useRoute, Bt as isUndefined, C as filter, F as Observable, G as JSONSchemaDecoder, H as component, I as RouterLink, J as any, K as refName, L as RouterView, M as EMPTY, N as BehaviorSubject, O as combineLatest, P as Subject, Q as enums, Qt as uniq, Ut as pick, V as useRouter, X as boolean, Z as custom, Zt as isArray, _ as skip, _t as onUnmounted, a as render, c as observableRef, ct as Fragment, dt as cloneVNode, g as switchMap, gt as onMounted, h as tap, j as from, k as map, l as subscribeOnMountedUntilUnmount, m as rx, nn as isObject, o as jsx, p as ImmerBehaviorSubject, r as component$, rn as get, rt as Schema, s as jsxs, t as createProvider, tt as string, u as subscribeUntilUnmount, w as merge, x as debounceTime } from "./vendor-innoai-tech-vuekit.CUMstO-e.chunk.js";
import { d as alpha, f as variant, o as styled, s as Box } from "./vendor-innoai-tech-vueuikit.K3ZkBcVq.chunk.js";
import { i as transformRequestBody, n as createRequestSubject, r as paramsSerializer, t as createFetcher } from "./vendor-innoai-tech-fetcher.CYUaQaag.chunk.js";
import { a as Tooltip, c as mdiHelp, d as mdiKeyOutline, f as mdiUploadBox, i as Dialog, l as mdiHelpBox, m as Markdown, n as JSONEditor, o as IconButton, p as FilledButton, r as JSONEditorProvider, s as Icon, t as JSONEditorView, u as mdiKey } from "./vendor-innoai-tech-jsoneditor.VUSYOEK_.chunk.js";
import { i as FormData, n as inputBy, r as label, t as hint } from "./lib-nodepkg-vueformdata.Dgbwxq-V.chunk.js";
import { Nn as __vitePreload } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BkPEXsWQ.chunk.js";
var OpenAPI = class OpenAPI extends ImmerBehaviorSubject {
	static empty() {
		return new OpenAPI({
			openapi: "3.1.0",
			components: { schemas: {} },
			paths: {}
		});
	}
	#fetcher = createFetcher({
		paramsSerializer,
		transformRequestBody
	});
	#requests$ = new BehaviorSubject(/* @__PURE__ */ new Map());
	get #baseURL() {
		return this.value.servers?.[0]?.url ?? "";
	}
	response$(operationId) {
		return rx(this.#requests$, /* @__PURE__ */ switchMap((requests$) => {
			const r$ = /* @__PURE__ */ requests$.get(operationId);
			if (r$) return merge(r$, r$.error$);
			return EMPTY;
		}));
	}
	requesting$(operationId) {
		return rx(this.#requests$, /* @__PURE__ */ switchMap((requests$) => requests$.get(operationId)?.requesting$ ?? of(false)));
	}
	asRequestConfigCreator(operationId) {
		const op = /* @__PURE__ */ this.#operation(operationId);
		if (!op) return null;
		const contentType = Object.keys(op.requestBody?.content ?? {})[0];
		return (inputs = {}) => {
			return {
				method: /* @__PURE__ */ op.method.toUpperCase(),
				url: this.#baseURL + compilePath(op.path, inputs),
				params: /* @__PURE__ */ pick(inputs, op.parameters?.filter((p) => p.in == "query").map((p) => p.name) ?? []),
				headers: {
					...pick(inputs, op.parameters?.filter((p) => p.in == "header").map((p) => p.name) ?? []),
					...contentType ? { "Content-Type": contentType } : {}
				},
				body: inputs["body"],
				inputs
			};
		};
	}
	request(operationId, inputs) {
		let r$ = /* @__PURE__ */ this.#requests$.value.get(operationId);
		if (!r$) {
			const createRequestConfig = /* @__PURE__ */ this.asRequestConfigCreator(operationId);
			if (!createRequestConfig) return;
			r$ = /* @__PURE__ */ createRequestSubject(/* @__PURE__ */ Object.assign(createRequestConfig, {
				operationID: operationId,
				TRespData: {}
			}), this.#fetcher);
			this.#requests$.value.set(operationId, r$);
			this.#requests$.next(this.#requests$.value);
		}
		r$.next(inputs);
	}
	#operation(operationId) {
		for (const op of operations(this.value, { operationId })) if (op) return op;
		return null;
	}
	operation$(operationId) {
		return rx(this, /* @__PURE__ */ switchMap((openapi) => {
			for (const op of operations(openapi, { operationId })) if (op) return of(op);
			return of(null);
		}));
	}
	operations$(filters) {
		return rx(this, /* @__PURE__ */ switchMap((openapi) => of([.../* @__PURE__ */ operations(openapi, filters)])));
	}
	schema$(ref) {
		const keyPath = ref.split("#/")[1]?.split("/") ?? [];
		return rx(this, /* @__PURE__ */ switchMap((openapi) => {
			if (keyPath) return of(get(openapi, keyPath) ?? null);
			return of(null);
		}), /* @__PURE__ */ map((s) => {
			return s ? {
				...s,
				$id: keyPath[keyPath.length - 1]
			} : s;
		}));
	}
	schema(ref) {
		const keyPath = ref.split("#/")[1]?.split("/") ?? [];
		if (keyPath) return get(this.value, keyPath) ?? void 0;
	}
};
function* operations(openapi, filters) {
	for (const [path, ops] of Object.entries(openapi.paths)) for (const [method, o] of Object.entries(ops)) {
		if (o.operationId == "OpenAPI" || o.operationId == "OpenAPIView") continue;
		if (filters.tag) {
			if (!(o.tags ?? []).includes(filters.tag)) continue;
		}
		if (filters.operationId) {
			if (filters.operationId.startsWith("*")) {
				if (!o.operationId.toLowerCase().includes(/* @__PURE__ */ filters.operationId.slice(1).toLowerCase())) continue;
			} else if (o.operationId.toLowerCase() != filters.operationId.toLowerCase()) continue;
		}
		yield {
			...o,
			method,
			path,
			group: o.tags?.[0] ?? ""
		};
	}
}
const compilePath = (path, params = {}) => path.replace(/{([\s\S]+?)}/g, (target, key) => [].concat(params[key] || target).join(","));
const OpenAPIProvider = /* @__PURE__ */ createProvider(() => OpenAPI.empty(), { name: "OpenAPI" });
var OpenAPIView = /* @__PURE__ */ component$(({}, {}) => {
	const openapi$ = /* @__PURE__ */ OpenAPIProvider.use();
	const filters$ = new ImmerBehaviorSubject({ operationId: void 0 });
	const operationIDInput = new Subject();
	rx(operationIDInput, /* @__PURE__ */ debounceTime(200), /* @__PURE__ */ tap((v) => {
		filters$.next((filters) => {
			filters.operationId = `*${v ?? ""}`;
		});
	}), /* @__PURE__ */ subscribeUntilUnmount());
	const scrollContainerEl$ = /* @__PURE__ */ observableRef(null);
	rx(scrollContainerEl$, /* @__PURE__ */ switchMap((scrollContainerEl) => {
		if (scrollContainerEl) {
			const scrollTo = (item) => {
				if (item) scrollContainerEl.scrollTo({ top: item.offsetTop - scrollContainerEl.offsetTop });
			};
			return new Observable(() => {
				const observer = new MutationObserver((mutationList) => {
					for (const mutation of mutationList) if (mutation.type === "attributes") {
						const target = mutation.target;
						if (target.classList.contains("router-link-active")) scrollTo(target);
					}
				});
				observer.observe(scrollContainerEl, {
					attributes: true,
					subtree: true
				});
				setTimeout(() => {
					scrollTo(/* @__PURE__ */ scrollContainerEl.querySelector(".router-link-active"));
				}, 100);
				return () => {
					observer.disconnect();
				};
			});
		}
		return EMPTY;
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	const $nav = /* @__PURE__ */ rx(filters$, /* @__PURE__ */ switchMap((filters) => {
		return openapi$.operations$(filters);
	}), /* @__PURE__ */ render((operations$1) => {
		const grouped = /* @__PURE__ */ Object.groupBy(operations$1, (v) => v.group);
		return /* @__PURE__ */ jsxs(NavContainer, { children: [/* @__PURE__ */ jsx(NavSearchBox, { children: /* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "请输入 operationId 查询",
			onInput: (e) => {
				operationIDInput.next(e.target.value);
			}
		}) }), /* @__PURE__ */ jsx(Nav, {
			sx: {
				flex: 1,
				overflow: "scroll"
			},
			ref: scrollContainerEl$,
			children: /* @__PURE__ */ Object.entries(grouped).toSorted().map(([group, operations$2]) => {
				return /* @__PURE__ */ jsxs("div", {
					"data-nav-group": true,
					children: [/* @__PURE__ */ jsx("div", {
						"data-nav-group-heading": true,
						children: group
					}), /* @__PURE__ */ jsx("div", {
						"data-nav-group-contents": true,
						children: operations$2?.map((op) => {
							return /* @__PURE__ */ jsxs(OperationListItem, {
								component: RouterLink,
								to: `/operations/${op.operationId}`,
								children: [/* @__PURE__ */ jsx(Box, {
									"data-operation-method": true,
									sx: { color: {
										get: "sys.primary",
										post: "sys.success",
										put: "sys.warning",
										delete: "sys.error"
									}[op.method] ?? "sys.secondary" },
									children: op.method
								}), /* @__PURE__ */ jsxs("div", {
									"data-operation-desc": true,
									children: [/* @__PURE__ */ jsx("div", {
										"data-operation-id": true,
										children: op.operationId
									}), op.summary ? /* @__PURE__ */ jsx("div", {
										"data-operation-summary": true,
										children: op.summary != op.operationId ? op.summary : /* @__PURE__ */ jsx("span", { children: "\xA0" })
									}) : void 0]
								})]
							});
						})
					})]
				});
			})
		})] });
	}));
	return () => {
		return /* @__PURE__ */ jsxs(Container, { children: [$nav, /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsx(RouterView, {}) })] });
	};
}, { displayName: "OpenAPIView" });
var Container = /* @__PURE__ */ styled("div", { displayName: "Container" })({
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	display: "flex"
});
var NavContainer = /* @__PURE__ */ styled("aside", { displayName: "NavContainer" })({
	width: 240,
	py: 4,
	display: "flex",
	flexDirection: "column",
	gap: 4,
	height: "100%",
	overflow: "hidden",
	borderRight: "1px solid",
	borderColor: "sys.outline"
});
var NavSearchBox = /* @__PURE__ */ styled("div", { displayName: "NavSearchBox" })({
	input: {
		py: 10,
		px: 12,
		border: "none",
		width: "100%",
		outline: 0
	},
	borderBottom: "1px solid",
	borderColor: "sys.outline"
});
var Nav = /* @__PURE__ */ styled("div", { displayName: "Nav" })({
	display: "flex",
	flexDirection: "column",
	gap: 4,
	$data_nav_group_heading: {
		px: 12,
		py: 4,
		textStyle: "sys.label-small",
		containerStyle: "sys.secondary-container"
	}
});
var Main = /* @__PURE__ */ styled("main", { displayName: "Main" })({
	flex: 1,
	overflow: "hidden"
});
var OperationListItem = /* @__PURE__ */ styled("a", { displayName: "OperationListItem" })({
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
});
var Token = /* @__PURE__ */ styled("div", { displayName: "Token" })({
	display: "inline-table",
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 11,
	lineHeight: 14
});
var PropName = /* @__PURE__ */ styled("div", {
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
		content: `"??"`,
		color: "sys.error"
	} },
	_optional: { "&:after": {
		content: `"?"`,
		color: "sys.secondary"
	} }
});
var Line = /* @__PURE__ */ styled("div", (props, { slots }) => {
	const i = /* @__PURE__ */ IntentContextProvider.use();
	return (Root) => /* @__PURE__ */ jsx(Root, {
		style: {
			paddingLeft: `${i.indent}em`,
			marginTop: (props.spacing ?? 0) * .5
		},
		children: slots.default?.()
	});
}, {
	displayName: "Line",
	props: ["spacing"]
})({
	position: "relative",
	display: "block"
});
var Description = /* @__PURE__ */ styled("div", (props, {}) => {
	return (Root) => {
		const title = Schema.metaProp(props.schema, "title") ?? "";
		const description = Schema.metaProp(props.schema, "description") ?? "";
		return /* @__PURE__ */ jsxs(Root, { children: [
			title,
			" ",
			description ? /* @__PURE__ */ jsx(Tooltip, {
				$title: /* @__PURE__ */ jsx(MarkdownContainer, { children: /* @__PURE__ */ jsx(Markdown, { text: description }) }),
				children: /* @__PURE__ */ jsx(Icon, { path: mdiHelpBox })
			}) : null
		] });
	};
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
		content: `"// "`,
		fontFamily: "code"
	},
	textStyle: "sys.body-small",
	fontSize: 10,
	lineHeight: 12,
	[`${Icon}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
});
var MarkdownContainer = /* @__PURE__ */ styled("div", { displayName: "MarkdownContainer" })({
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
});
var Annotation = ({ name, value, extra }) => {
	if (value == "") return null;
	return /* @__PURE__ */ jsx(Line, { children: /* @__PURE__ */ jsxs(Token, {
		sx: {
			opacity: .7,
			fontSize: "0.9em",
			wordBreak: "keep-all",
			whiteSpace: "nowrap"
		},
		children: [
			/* @__PURE__ */ jsx(Token, {
				sx: { color: "sys.primary" },
				children: `@${name}(`
			}),
			`${value}`,
			/* @__PURE__ */ Object.entries(extra ?? {}).map(([k, v]) => {
				if (isUndefined(v)) return null;
				return /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsxs(Token, {
						sx: { opacity: .5 },
						children: [`,`, "\xA0"]
					}),
					/* @__PURE__ */ jsx(Token, {
						sx: { opacity: .5 },
						children: k
					}),
					/* @__PURE__ */ jsxs(Token, {
						sx: { opacity: .5 },
						children: [`:`, "\xA0"]
					}),
					/* @__PURE__ */ jsx(Token, {
						sx: { opacity: .7 },
						children: v
					})
				] });
			}),
			/* @__PURE__ */ jsx(Token, {
				sx: { color: "sys.primary" },
				children: `)`
			})
		]
	}) });
};
var IntentContextProvider = /* @__PURE__ */ createProvider(() => {
	return { indent: 0 };
}, { name: "IntentContext" });
var Indent = /* @__PURE__ */ component(({}, { slots }) => {
	const i = /* @__PURE__ */ IntentContextProvider.use();
	return () => /* @__PURE__ */ jsx(IntentContextProvider, {
		value: { indent: i.indent + 1 },
		children: slots.default?.()
	});
}, { displayName: "Indent" });
var Node = class Node {
	constructor(id, parent) {
		this.id = id;
		this.parent = parent;
	}
	child(id) {
		return new Node(id, this);
	}
	safe(id) {
		let n = this;
		while (n) {
			if (n.id == id) return false;
			n = n.parent;
		}
		return true;
	}
};
var SchemaRenderProvider = /* @__PURE__ */ createProvider(() => new Node(""));
var SchemaViewLink = /* @__PURE__ */ component$((props) => {
	const node = /* @__PURE__ */ SchemaRenderProvider.use();
	const ident = /* @__PURE__ */ IntentContextProvider.use();
	const open$ = /* @__PURE__ */ observableRef(false);
	return () => {
		let schema = props.schema;
		const id = /* @__PURE__ */ Schema.schemaProp(props.schema, "$ref");
		schema = /* @__PURE__ */ Schema.schemaProp(props.schema, Schema.unwrap)();
		const needID = schema.type == "intersection" || schema.type == "object" || schema.type == "union" || schema.type == "record" || schema.type == "array" || schema.type == "union";
		const $inline = node.safe(id) && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", { children: "\xA0" }), /* @__PURE__ */ jsx(SchemaView, { schema })] });
		return /* @__PURE__ */ jsx(SchemaRenderProvider, {
			value: /* @__PURE__ */ node.child(id),
			children: needID ? ident.indent < 3 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(RouterLink, {
				to: `#${id}`,
				"data-index": ident.indent,
				children: /* @__PURE__ */ jsx(Token, {
					id,
					children: id
				})
			}), $inline] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Box, {
				component: RouterLink,
				sx: {},
				to: `#${id}`,
				"data-index": ident.indent,
				onClick: (e) => {
					if (node.safe(id)) {
						e.preventDefault();
						e.stopPropagation();
						open$.next(true);
					}
				},
				children: /* @__PURE__ */ jsx(Token, {
					id,
					children: id
				})
			}), node.safe(id) && /* @__PURE__ */ jsx(Dialog, {
				isOpen: open$.value,
				onClose: () => {
					open$.next(false);
				},
				children: /* @__PURE__ */ jsx(DialogContainer$1, { children: /* @__PURE__ */ jsxs(Line, { children: [/* @__PURE__ */ jsx(Token, { children: id }), /* @__PURE__ */ jsx(IntentContextProvider, {
					value: { indent: 0 },
					children: $inline
				})] }) })
			})] }) : $inline
		});
	};
}, {
	displayName: "SchemaViewLink",
	props: ["schema"]
});
var DialogContainer$1 = /* @__PURE__ */ styled("div", { displayName: "DialogContainer" })({
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
});
var SchemaView = component$((props) => {
	const schema = props.schema;
	if (Schema.schemaProp(schema, "$ref")) return /* @__PURE__ */ jsx(SchemaViewLink, { schema });
	return () => {
		switch (schema.type) {
			case "union": return /* @__PURE__ */ jsx(Fragment, { children: Schema.schemaProp(schema, "oneOf")?.map((s, i) => {
				return /* @__PURE__ */ jsxs(Fragment, { children: [i > 0 && /* @__PURE__ */ jsxs(Token, { children: [
					"\xA0",
					" | ",
					"\xA0"
				] }), /* @__PURE__ */ jsx(SchemaView, { schema: s })] });
			}) });
			case "intersection": return /* @__PURE__ */ jsx(Token, { children: Schema.schemaProp(schema, "allOf")?.filter((s) => !Object.keys(s).length).map((s, i) => {
				return /* @__PURE__ */ jsxs(Fragment, { children: [i > 0 && /* @__PURE__ */ jsxs(Token, { children: [
					"\xA0",
					"&",
					"\xA0"
				] }), /* @__PURE__ */ jsx(SchemaView, { schema: s })] });
			}) });
			case "array": return /* @__PURE__ */ jsxs(Token, {
				sx: {
					wordBreak: "keep-all",
					whiteSpace: "nowrap"
				},
				children: [
					/* @__PURE__ */ jsx(Token, { children: "Array<" }),
					/* @__PURE__ */ jsx(SchemaView, { schema: Schema.schemaProp(schema, "items") ?? any() }),
					/* @__PURE__ */ jsx(Token, { children: ">" })
				]
			});
			case "object": return /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx(Token, { children: "{" }),
				/* @__PURE__ */ jsx(Indent, { children: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ Object.entries(Schema.schemaProp(schema, "properties") ?? {}).map(([propName, propSchema]) => {
					if (!propSchema) return null;
					return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Line, {
						spacing: 2,
						children: [/* @__PURE__ */ jsx(Description, { schema: propSchema }), /* @__PURE__ */ jsxs(Token, {
							sx: {
								wordBreak: "keep-all",
								whiteSpace: "nowrap"
							},
							children: [
								/* @__PURE__ */ jsx(PropName, {
									nullable: /* @__PURE__ */ Schema.schemaProp(schema, "nullable"),
									deprecated: /* @__PURE__ */ Schema.schemaProp(schema, "deprecated"),
									optional: !(Schema.schemaProp(schema, "required") ?? []).includes(propName),
									children: propName
								}),
								/* @__PURE__ */ jsx(Token, {
									sx: { mr: "1em" },
									children: ":"
								}),
								/* @__PURE__ */ jsx(SchemaView, { schema: propSchema })
							]
						})]
					}) });
				}) }) }),
				/* @__PURE__ */ jsx(Token, { children: "}" })
			] });
			case "record": return /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx(Token, { children: "{" }),
				Schema.schemaProp(schema, "additionalProperties") && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Indent, { children: /* @__PURE__ */ jsxs(Line, { children: [
					/* @__PURE__ */ jsxs(Token, {
						sx: { mr: 1 },
						children: ["[K:", "\xA0"]
					}),
					/* @__PURE__ */ jsx(SchemaView, { schema: Schema.schemaProp(schema, "propertyNames") ?? string() }),
					/* @__PURE__ */ jsxs(Token, {
						sx: { mr: 1 },
						children: ["]:", "\xA0"]
					}),
					/* @__PURE__ */ jsx(SchemaView, { schema: Schema.schemaProp(schema, "additionalProperties") ?? any() })
				] }) }) }),
				/* @__PURE__ */ jsx(Token, { children: "}" })
			] });
			case "enums": {
				const enumValues = Schema.schemaProp(schema, "enum") ?? [];
				if (enumValues.length == 1) return /* @__PURE__ */ jsx(Token, { children: /* @__PURE__ */ JSON.stringify(enumValues[0]) });
				let type$1 = "any";
				if (enumValues.length > 0) type$1 = typeof enumValues[0];
				return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Token, {
					sx: { fontWeight: "bold" },
					children: type$1
				}), /* @__PURE__ */ jsx(Indent, { children: /* @__PURE__ */ enumValues.map((value, i) => /* @__PURE__ */ jsx(Annotation, {
					name: "enum",
					value: `${value}`,
					extra: Schema.metaProp(schema, "enumLabels")?.[i] ? { label: /* @__PURE__ */ JSON.stringify(Schema.metaProp(schema, "enumLabels")[i]) } : {}
				}, value)) })] });
			}
		}
		let [type, format, defaultValue] = [
			schema.type,
			/* @__PURE__ */ Schema.metaProp(schema, "format"),
			/* @__PURE__ */ Schema.metaProp(schema, "default")
		];
		return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Token, {
			sx: { fontWeight: "bold" },
			children: type || "any"
		}), /* @__PURE__ */ jsxs(Indent, { children: [
			format && /* @__PURE__ */ jsx(Annotation, {
				name: "format",
				value: format
			}),
			!isUndefined(defaultValue) && /* @__PURE__ */ jsx(Annotation, {
				name: "default",
				value: defaultValue
			}),
			/* @__PURE__ */ validateProps.map((prop) => {
				const v = /* @__PURE__ */ Schema.schemaProp(schema, prop);
				if (isUndefined(v)) return null;
				if (prop == "pattern") return /* @__PURE__ */ jsx(Annotation, {
					name: prop,
					value: v,
					extra: { errMsg: /* @__PURE__ */ Schema.metaProp(schema, "x-pattern-err-msg") }
				});
				return /* @__PURE__ */ jsx(Annotation, {
					name: prop,
					value: v
				});
			})
		] })] });
	};
}, {
	displayName: "SchemaView",
	props: ["schema"]
});
var validateProps = [
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
];
function isErrorCode(c) {
	try {
		return Number(c) >= 400;
	} catch (err) {
		return false;
	}
}
var ResponseView = /* @__PURE__ */ component$((props) => {
	const openapi$ = /* @__PURE__ */ OpenAPIProvider.use();
	return () => {
		const statusErrors = /* @__PURE__ */ uniq(props.response["x-status-return-errors"] ?? []).map((statusErr) => {
			return parseStatusErr(statusErr);
		});
		return /* @__PURE__ */ jsxs(ResponseSection$1, { children: [/* @__PURE__ */ jsx(ResponseStatusCode, {
			"data-failed": /* @__PURE__ */ isErrorCode(props.code),
			children: props.code
		}), /* @__PURE__ */ jsxs(Box, {
			sx: { pl: "4em" },
			children: [/* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ Object.entries(props.response.content ?? {}).map(([contentType, { schema }]) => /* @__PURE__ */ jsxs(ResponseSchema, { children: [/* @__PURE__ */ jsx(Line, {
				spacing: 0,
				children: /* @__PURE__ */ jsx(SchemaView, { schema: /* @__PURE__ */ JSONSchemaDecoder.decode(schema, (ref) => {
					return [openapi$.schema(ref) ?? {}, /* @__PURE__ */ refName(ref)];
				}) })
			}), /* @__PURE__ */ jsx("div", {
				"data-content-type": true,
				children: contentType
			})] })) }), /* @__PURE__ */ jsx(Fragment, { children: statusErrors.length > 0 ? /* @__PURE__ */ jsxs(Box, {
				sx: {
					mt: 16,
					containerStyle: "sys.surface-container",
					px: 12,
					py: 16,
					rounded: "xs"
				},
				children: [/* @__PURE__ */ jsx(Box, {
					sx: { pb: 8 },
					children: /* @__PURE__ */ jsxs("b", { children: [/* @__PURE__ */ jsx("small", { children: "可能错误码" }), ":"] })
				}), /* @__PURE__ */ jsxs(Table, { children: [
					/* @__PURE__ */ jsx(TableCell, {
						sx: { textStyle: "sys.label-small" },
						children: /* @__PURE__ */ jsx("code", { children: `errors[*].code` })
					}),
					/* @__PURE__ */ jsx(TableCell, {
						sx: { textStyle: "sys.label-small" },
						children: /* @__PURE__ */ jsx("code", { children: `errors[*].message` })
					}),
					/* @__PURE__ */ statusErrors.map((statusErr) => {
						if (statusErr) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(TableCell, {
							sx: {
								color: "sys.primary",
								textStyle: "sys.label-small",
								fontWeight: "bold"
							},
							children: /* @__PURE__ */ jsx("code", { children: /* @__PURE__ */ JSON.stringify(statusErr.code) })
						}), /* @__PURE__ */ jsx(TableCell, { children: statusErr.message })] });
						return null;
					})
				] })]
			}) : null })]
		})] });
	};
}, {
	displayName: "ResponseView",
	props: ["code", "response"]
});
var Table = /* @__PURE__ */ styled("div", { displayName: "Table" })({
	textStyle: "sys.label-medium",
	display: "grid",
	gap: 8,
	width: "100%",
	gridTemplateColumns: "min-content 1fr",
	gridAutoColumns: "auto"
});
var TableCell = /* @__PURE__ */ styled("div", { displayName: "TableCell" })({});
function splitCsv(str) {
	return str.split(",").reduce((accum, curr) => {
		if (accum.joining) accum.values[accum.values.length - 1] += "," + curr;
		else accum.values.push(curr);
		if (curr.split("\"").length % 2 == 0) accum.joining = !accum.joining;
		return accum;
	}, {
		values: [],
		joining: false
	}).values;
}
function parseStatusErr(statusErr = "") {
	const i = /* @__PURE__ */ statusErr.indexOf("{");
	if (i > -1) return splitCsv(/* @__PURE__ */ statusErr.slice(i + 1, statusErr.length - 1)).reduce((ret, keyValue) => {
		const i$1 = /* @__PURE__ */ keyValue.indexOf("=");
		if (i$1 < 0) return ret;
		const key = /* @__PURE__ */ keyValue.slice(0, i$1);
		const value = /* @__PURE__ */ keyValue.slice(i$1 + 1);
		if (isUndefined(key) || isUndefined(value)) return ret;
		return {
			...ret,
			[key]: /* @__PURE__ */ JSON.parse(value)
		};
	}, { code: /* @__PURE__ */ statusErr.slice(0, i) });
	return null;
}
var ResponseSection$1 = /* @__PURE__ */ styled("section", { displayName: "ResponseSection" })({});
var ResponseStatusCode = /* @__PURE__ */ styled("div", { displayName: "ResponseStatusCode" })({
	fontSize: 18,
	fontFamily: "code",
	color: "sys.success",
	py: 12,
	pos: "sticky",
	top: 0,
	_data_failed__true: { color: "sys.error" }
});
var ResponseSchema = /* @__PURE__ */ styled("section", { displayName: "ResponseSchema" })({
	pos: "relative",
	$data_content_type: {
		pos: "absolute",
		right: 0,
		top: 0,
		fontFamily: "code",
		opacity: .3
	}
});
var TextField = /* @__PURE__ */ styled("div", (props, { slots }) => {
	return (Wrap) => {
		let valued = props.valued;
		let invalid = props.invalid;
		let disabled = props.disabled;
		const children = /* @__PURE__ */ (slots.default?.() ?? []).map((c) => {
			if (c.type === "input") {
				valued = !!(c.props?.["value"] ?? c.props?.["placeholder"] ?? valued);
				disabled = c.props?.["disabled"] ?? disabled;
				return cloneVNode(c, { disabled });
			}
			return cloneVNode(c);
		});
		return /* @__PURE__ */ jsxs(Wrap, {
			"data-valued": valued,
			"data-invalid": invalid,
			"data-disabled": disabled,
			"data-focus-within": props.focus,
			"data-has-leading": !!slots.leading,
			"data-has-trailing": !!slots.trailing,
			children: [/* @__PURE__ */ jsxs("div", {
				"data-input-container": true,
				children: [/* @__PURE__ */ jsxs("div", {
					"data-input-decorator-container": true,
					children: [
						/* @__PURE__ */ jsx("div", { "data-input-decorator-leading": true }),
						/* @__PURE__ */ jsx("div", {
							"data-input-decorator-label": true,
							children: /* @__PURE__ */ jsx("div", {
								"data-input-label": true,
								children: slots.label?.()
							})
						}),
						/* @__PURE__ */ jsx("div", { "data-input-decorator-trailing": true })
					]
				}), /* @__PURE__ */ jsxs("div", {
					"data-input-row": true,
					children: [
						slots.leading && /* @__PURE__ */ jsx(Maker, {
							role: "leading",
							children: /* @__PURE__ */ slots.leading()
						}),
						children,
						slots.trailing && /* @__PURE__ */ jsx(Maker, {
							role: "trailing",
							children: /* @__PURE__ */ slots.trailing()
						})
					]
				})]
			}), slots.supporting && /* @__PURE__ */ jsx("div", {
				"data-input-supporting": true,
				children: slots.supporting?.()
			})]
		});
	};
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
});
var Maker = /* @__PURE__ */ styled("div", { role: /* @__PURE__ */ enums(["leading", "trailing"]) }, { displayName: "Maker" })({
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
});
var JSONEditorInput = /* @__PURE__ */ component$((props, {}) => {
	const editor$ = /* @__PURE__ */ JSONEditor.of(props.field$.typedef, !isUndefined(props.field$.input) ? props.field$.input : void 0);
	rx(editor$, /* @__PURE__ */ skip(1), /* @__PURE__ */ tap((values) => {
		props.field$.update(values);
	}), /* @__PURE__ */ subscribeUntilUnmount());
	return () => /* @__PURE__ */ jsx(JSONInputContainer, { children: /* @__PURE__ */ jsx(JSONEditorProvider, {
		value: editor$,
		children: /* @__PURE__ */ jsx(JSONEditorView, {})
	}) });
}, {
	displayName: "JSONEditorInput",
	props: ["field$", "readOnly"]
});
var JSONInputContainer = /* @__PURE__ */ styled("div", { displayName: "JSONInputContainer" })({
	position: "relative",
	width: "100%",
	minHeight: "40em",
	py: 8,
	px: 12,
	overflow: "hidden"
});
var getDefaultHeads = () => ({
	"User-Agent": navigator.userAgent,
	Origin: location.origin,
	Referer: `${location.origin}${location.pathname}`
});
const HeadRow = ({ field, value }) => /* @__PURE__ */ jsxs(Box, {
	component: "span",
	sx: { display: "block" },
	children: [/* @__PURE__ */ jsxs(Box, {
		component: "span",
		sx: {
			fontWeight: "bold",
			marginRight: "0.5em"
		},
		children: [field, ":"]
	}), /* @__PURE__ */ jsx("span", { children: value })]
});
var HTTPFirstLine = ({ method, url, params }) => {
	const queryString = /* @__PURE__ */ paramsSerializer(params);
	return /* @__PURE__ */ jsxs(Box, {
		component: "span",
		sx: { fontWeight: "bold" },
		children: [
			`${method.toUpperCase()} `,
			/* @__PURE__ */ jsxs(Box, {
				component: "span",
				sx: { fontWeight: "medium" },
				children: [url, queryString ? `?${queryString}` : ""]
			}),
			` HTTP/*`
		]
	});
};
var displayMultipart = (boundary, data) => {
	const getPart = (k, v) => {
		if (v instanceof File || v instanceof Blob) return `${boundary}
Content-Disposition: form-data; name="${k}"${v.name ? `; filename="${v.name}"` : ""}
Content-Type: ${v.type}

[File Content]
`;
		if (isArray(v)) return v.map((item) => getPart(k, item)).join("\n");
		return `${boundary}
Content-Disposition: form-data; name="${k}"

${isObject(v) ? JSON.stringify(v) : String(v)}
`;
	};
	return Object.entries(data).map(([k, v]) => getPart(k, v)).join("\n") + `${boundary}--`;
};
function stringifyBody(request) {
	if (isContentTypeMultipartFormData(request.headers)) {
		const boundary = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
		request.headers = {
			...request.headers,
			"Content-Type": `multipart/form-data; boundary=${boundary}`
		};
		return displayMultipart(boundary, request.body);
	}
	if (isContentTypeFormURLEncoded(request.headers)) return paramsSerializer(request.body);
	if (isContentTypeJSON(request.headers)) return JSON.stringify(request.body, null, 2);
	return request.body;
}
var CodeView = /* @__PURE__ */ component({ $default: /* @__PURE__ */ custom().optional() }, ({}, { slots }) => {
	return () => /* @__PURE__ */ jsx(Box, {
		sx: {
			containerStyle: "sys.surface-container",
			rounded: "xs",
			width: "100%",
			overflow: "auto",
			py: 4,
			px: 8
		},
		children: /* @__PURE__ */ jsx(Box, {
			component: "pre",
			sx: {
				padding: 4,
				margin: 0,
				textStyle: "sys.body-small",
				fontFamily: "code"
			},
			children: /* @__PURE__ */ jsx("code", { children: slots.default?.() })
		})
	});
}, { displayName: "CodeView" });
var HttpRequest = /* @__PURE__ */ component({ request: /* @__PURE__ */ custom() }, (props) => {
	return () => {
		const request = props.request;
		return /* @__PURE__ */ jsxs(CodeView, { children: [
			/* @__PURE__ */ jsx(HTTPFirstLine, { ...request }),
			/* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ Object.entries({
				...getDefaultHeads(),
				...request.headers
			}).toSorted().map(([key, value]) => /* @__PURE__ */ jsx(HeadRow, {
				field: key,
				value
			}, key)) }),
			request.body && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ stringifyBody(request)] })
		] });
	};
}, { displayName: "HttpRequest" });
var toDataURI = (buffer, contentType) => {
	const bytes = new Uint8Array(buffer);
	let binary = "";
	for (let len = bytes.byteLength, i = 0; i < len; i++) binary += /* @__PURE__ */ String.fromCharCode(bytes[i]);
	return `data:${contentType};base64,${btoa(binary)}`;
};
var HTTPResponse = /* @__PURE__ */ component({ response: /* @__PURE__ */ custom() }, (props, {}) => {
	return () => {
		const response = props.response;
		if (isContentTypeImage(response.headers)) return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", {
			src: /* @__PURE__ */ toDataURI(response.body, /* @__PURE__ */ getContentType(response.headers)),
			alt: ""
		}) });
		console.log(response);
		return /* @__PURE__ */ jsxs(CodeView, { children: [
			/* @__PURE__ */ jsxs("span", { children: ["HTTP/* ", response.status] }),
			/* @__PURE__ */ jsx("br", {}),
			response.headers && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ Object.entries(response.headers).map(([key, value]) => /* @__PURE__ */ jsx(HeadRow, {
				field: key,
				value
			}, key)) }),
			/* @__PURE__ */ jsx("br", {}),
			response.body ? isContentTypeJSON(response.headers) ? JSON.stringify(response.body, null, 2) : `${response.body}` : null
		] });
	};
}, { displayName: "HTTPResponse" });
function getContentType(headers = {}) {
	for (const [k, v] of Object.entries(headers)) if (k.toLowerCase() == "content-type") return v;
	return "";
}
function isContentTypeMultipartFormData(headers) {
	return getContentType(headers).includes("multipart/form-data");
}
var isContentTypeJSON = (headers) => getContentType(headers).includes("application/json");
function isContentTypeFormURLEncoded(headers) {
	return getContentType(headers).includes("application/x-www-form-urlencoded");
}
function isContentTypeImage(headers) {
	return getContentType(headers).includes("image/");
}
var ResponsePreview = /* @__PURE__ */ component$((props) => {
	return rx(/* @__PURE__ */ OpenAPIProvider.use().response$(props.operationID), /* @__PURE__ */ render((resp) => {
		return /* @__PURE__ */ jsx(ResponseSection, { children: /* @__PURE__ */ jsx(HTTPResponse, { response: resp }) });
	}));
}, {
	displayName: "ResponsePreview",
	props: ["operationID"]
});
var ResponseSection = /* @__PURE__ */ styled("section", { displayName: "ResponseSection" })({
	maxHeight: "40vh",
	overflow: "auto"
});
var RequestBuilder = /* @__PURE__ */ component$((props, { slots }) => {
	const openapi$ = /* @__PURE__ */ OpenAPIProvider.use();
	const propSchemas = {};
	for (const p of props.operation.parameters ?? []) {
		let x = /* @__PURE__ */ JSONSchemaDecoder.decode(p.schema, (ref) => {
			return [openapi$.schema(ref) ?? {}, /* @__PURE__ */ refName(ref)];
		}).use(/* @__PURE__ */ label(`${p.name}, in=${JSON.stringify(p.in)}`));
		if (!p.required) x = /* @__PURE__ */ x.optional();
		x.use(/* @__PURE__ */ hint(p.schema["title"]));
		if (["object", "array"].includes(p.schema.type ?? "")) propSchemas[p.name] = /* @__PURE__ */ x.use(/* @__PURE__ */ inputBy(JSONEditorInput));
		else propSchemas[p.name] = x;
	}
	if (props.operation.requestBody) {
		const first = Object.entries(props.operation.requestBody.content ?? {})[0];
		if (first) {
			const [contentType, content] = first;
			const x = /* @__PURE__ */ JSONSchemaDecoder.decode(content.schema ?? {}, (ref) => {
				return [openapi$.schema(ref) ?? {}, /* @__PURE__ */ refName(ref)];
			}).use(/* @__PURE__ */ label(`body, content-type = ${JSON.stringify(contentType)}`));
			if (contentType.includes("text/")) propSchemas["body"] = x;
			else if (contentType.includes("octet-stream")) propSchemas["body"] = /* @__PURE__ */ x.use(/* @__PURE__ */ inputBy(FileSelectInput));
			else if (contentType.includes("image/")) propSchemas["body"] = /* @__PURE__ */ x.use(/* @__PURE__ */ inputBy(FileSelectInput));
			else propSchemas["body"] = /* @__PURE__ */ x.use(/* @__PURE__ */ inputBy(JSONEditorInput));
		}
	}
	const router = /* @__PURE__ */ useRouter();
	const route = /* @__PURE__ */ useRoute();
	const tryParseParams = () => {
		try {
			const params = route.query["params"];
			return JSON.parse(/* @__PURE__ */ atob((Array.isArray(params) ? params[0] : params) ?? ""));
		} catch (err) {}
		return {};
	};
	const form$ = /* @__PURE__ */ FormData.of(/* @__PURE__ */ object(propSchemas), /* @__PURE__ */ tryParseParams());
	rx(form$, /* @__PURE__ */ tap((values) => {
		openapi$.request(props.operation.operationId, values);
	}), /* @__PURE__ */ tap((values) => {
		router.replace({ query: { "params": /* @__PURE__ */ btoa(/* @__PURE__ */ JSON.stringify(values)) } });
	}), /* @__PURE__ */ subscribeUntilUnmount());
	const $requestPreview = /* @__PURE__ */ rx(form$.inputs$, /* @__PURE__ */ render((inputs) => {
		const createConfig = /* @__PURE__ */ openapi$.asRequestConfigCreator(props.operation.operationId);
		if (!createConfig) return null;
		return /* @__PURE__ */ jsx(HttpRequest, { request: /* @__PURE__ */ createConfig(inputs ?? {}) });
	}));
	return () => {
		return /* @__PURE__ */ jsxs(Box, {
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
				e.preventDefault();
				form$.submit();
			},
			children: [/* @__PURE__ */ jsx(Box, {
				sx: {
					flex: 2,
					py: 24,
					display: "flex",
					flexDirection: "column",
					gap: 32,
					height: "100%",
					overflow: "auto"
				},
				children: /* @__PURE__ */ [.../* @__PURE__ */ form$.fields(form$.typedef)].map((f) => {
					return /* @__PURE__ */ jsx(ParameterInput, { field$: f });
				})
			}), /* @__PURE__ */ jsx(Box, {
				sx: {
					flex: 3,
					gap: 24,
					display: "flex",
					flexDirection: "column",
					height: "100%",
					overflow: "hidden"
				},
				children: /* @__PURE__ */ jsxs(Box, {
					sx: {
						display: "flex",
						flexDirection: "column",
						gap: 24,
						height: "100%",
						overflow: "hidden"
					},
					children: [
						$requestPreview,
						/* @__PURE__ */ jsx(Box, {
							sx: { px: 8 },
							children: /* @__PURE__ */ jsx(FilledButton, {
								type: "submit",
								children: "发起请求"
							})
						}),
						/* @__PURE__ */ jsx(ResponsePreview, { operationID: props.operation.operationId }),
						/* @__PURE__ */ jsx(Box, {
							sx: {
								flex: 1,
								overflow: "auto"
							},
							children: slots.default?.()
						})
					]
				})
			})]
		}, props.operation.operationId);
	};
}, {
	displayName: "RequestBuilder",
	props: ["operation"]
});
var ParameterInput = /* @__PURE__ */ component$(({ field$ }, { render: render$1 }) => {
	onUnmounted(() => {
		field$.destroy();
	});
	return rx(/* @__PURE__ */ combineLatest([field$, field$.input$]), /* @__PURE__ */ render$1(([s, value]) => {
		let Input = Schema.metaProp(field$.typedef, "inputBy") ?? TextInput;
		const readOnly = (Schema.metaProp(field$.typedef, "readOnlyWhenInitialExist") ?? false) && !!s.initial;
		return /* @__PURE__ */ jsx(TextField, {
			valued: !isUndefined(value ?? s.initial),
			invalid: !!s.error,
			focus: !!s.focus,
			$label: /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ labelOrName(field$), field$.optional ? "（非必填）" : ""] }),
			$supporting: /* @__PURE__ */ jsxs(Line, { children: [/* @__PURE__ */ jsx(Description, { schema: field$.typedef }), /* @__PURE__ */ jsx(SchemaView, { schema: field$.typedef })] }),
			$trailing: Input.$trailing,
			children: /* @__PURE__ */ jsx(Input, {
				field$,
				readOnly
			})
		});
	}));
}, {
	displayName: "ParameterInput",
	props: ["field$"]
});
function labelOrName(field$) {
	return field$.meta.label ?? field$.name;
}
var TextInput = /* @__PURE__ */ component({
	readOnly: /* @__PURE__ */ boolean().optional(),
	field$: /* @__PURE__ */ custom()
}, (props) => {
	return () => {
		const { readOnly, field$,...others } = props;
		return /* @__PURE__ */ jsx("input", {
			...others,
			"data-input": true,
			type: "text",
			readonly: readOnly,
			name: field$.name,
			value: field$.input,
			onChange: (e) => {
				const v = e.target.value;
				switch (field$.typedef.type) {
					case "number":
						try {
							field$.update(/* @__PURE__ */ field$.typedef.create(/* @__PURE__ */ parseFloat(v)));
						} catch (e$1) {}
						break;
					case "integer":
						try {
							field$.update(/* @__PURE__ */ field$.typedef.create(/* @__PURE__ */ parseInt(v)));
						} catch (e$1) {}
						break;
					case "boolean":
						try {
							field$.update(/* @__PURE__ */ field$.typedef.create(v !== "false" || !!v));
						} catch (e$1) {}
						break;
					default: field$.update(/* @__PURE__ */ field$.typedef.create(v));
				}
			},
			onFocus: () => field$.focus(),
			onBlur: () => field$.blur()
		});
	};
}, { displayName: "TextInput" });
var FileSelectInput = /* @__PURE__ */ component$((props) => {
	const file$ = /* @__PURE__ */ observableRef(null);
	rx(file$, /* @__PURE__ */ tap((file) => {
		if (file) props.field$.update(file);
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	return () => {
		const { readOnly, accept } = props;
		return /* @__PURE__ */ jsxs(Box, {
			component: "label",
			"data-input": true,
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
				/* @__PURE__ */ jsx("input", {
					type: "file",
					name: props.field$.name,
					readonly: readOnly,
					accept,
					"data-file-input": true,
					onChange: (e) => {
						const file = e.target.files?.[0];
						if (file) file$.value = file;
					}
				}),
				/* @__PURE__ */ jsx(Icon, { path: mdiUploadBox }),
				/* @__PURE__ */ jsx("span", { children: file$.value?.name })
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
});
var DatabaseErContainer = /* @__PURE__ */ component$((props, { render: render$1 }) => {
	const openapi$ = /* @__PURE__ */ OpenAPIProvider.use();
	onMounted(() => {
		openapi$.request(props.op.operationId, {});
	});
	return rx(/* @__PURE__ */ openapi$.response$(props.op.operationId), /* @__PURE__ */ render$1((resp) => {
		return /* @__PURE__ */ jsx(DatabaseErView, { database: resp.body });
	}));
}, {
	displayName: "DatabaseErContainer",
	props: ["op"]
});
var DatabaseErView = /* @__PURE__ */ component$((props) => {
	return () => {
		return /* @__PURE__ */ jsxs(DatabaseErMain, { children: [/* @__PURE__ */ jsx(DatabaseErHeader, { children: props.database.name }), /* @__PURE__ */ Object.entries(props.database.tables).map(([tableName, t]) => {
			return /* @__PURE__ */ jsx(DatabaseErTableView, {
				database: props.database,
				table: t,
				tableName
			});
		})] });
	};
}, {
	displayName: "DatabaseErView",
	props: ["database"]
});
var DatabaseErTableView = /* @__PURE__ */ component$((props, { render: render$1 }) => {
	const focus$ = new ImmerBehaviorSubject([]);
	return rx(focus$, /* @__PURE__ */ render$1((focusColumns) => {
		const columns = props.table.columns;
		const constraints = props.table.constraints;
		return /* @__PURE__ */ jsxs(DatabaseErTable, {
			open: true,
			children: [
				/* @__PURE__ */ jsxs(DatabaseErTableSummary, { children: [
					/* @__PURE__ */ jsx("span", { children: props.tableName }),
					/* @__PURE__ */ jsx(Spacer, {}),
					/* @__PURE__ */ jsx(DatabaseDescription, { meta: props.table })
				] }),
				/* @__PURE__ */ Object.keys(columns).map((colName) => {
					const col = columns[colName];
					return /* @__PURE__ */ jsxs(DatabaseErTableDef, {
						"data-hover": /* @__PURE__ */ focusColumns.includes(colName),
						children: [
							/* @__PURE__ */ jsx(DatabaseErTableColumnName, { children: colName }),
							col.of ? /* @__PURE__ */ jsx(DatabaseErTableColumnOfView, {
								database: props.database,
								of: col.of
							}) : /* @__PURE__ */ jsx(DatabaseErTableColumnType, { children: col.type }),
							/* @__PURE__ */ jsx(DatabaseErTableColumnComment, { children: /* @__PURE__ */ jsx(DatabaseDescription, { meta: col }) })
						]
					});
				}),
				/* @__PURE__ */ Object.entries(constraints).map(([constraintName, constraint]) => {
					return /* @__PURE__ */ jsx(DatabaseErTableDef, {
						onMouseover: () => {
							focus$.next(/* @__PURE__ */ constraint.columnNames.map((x) => x.name));
						},
						onMouseleave: () => {
							focus$.next([]);
						},
						children: /* @__PURE__ */ jsxs(DatabaseErTableConstraintName, {
							"data-primary": constraint.primary,
							"data-unique": constraint.unique,
							children: [
								/* @__PURE__ */ jsx(Icon, { path: constraint.unique ? mdiKeyOutline : mdiKey }),
								/* @__PURE__ */ jsx("span", { children: constraintName }),
								/* @__PURE__ */ jsxs("span", { children: [
									"(",
									/* @__PURE__ */ constraint.columnNames.map((x) => [x.name, ...x.options ?? []].join(" ")).join(","),
									")"
								] })
							]
						})
					});
				}),
				/* @__PURE__ */ jsx(Box, { sx: { py: 4 } })
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
});
var DatabaseErTableColumnOfView = /* @__PURE__ */ component$((props, { render: render$1 }) => {
	const open$ = /* @__PURE__ */ ImmerBehaviorSubject.seed(false);
	const $dialog = /* @__PURE__ */ rx(open$, /* @__PURE__ */ render$1((open) => {
		const tableName = props.of.split(".")[0];
		return /* @__PURE__ */ jsx(Dialog, {
			isOpen: open,
			onClose: () => {
				open$.next(false);
			},
			children: /* @__PURE__ */ jsx(DialogContainer, { children: /* @__PURE__ */ jsx(DatabaseErTableView, {
				database: props.database,
				tableName,
				table: props.database.tables[tableName]
			}) })
		});
	}));
	return () => {
		return /* @__PURE__ */ jsxs(DatabaseErTableColumnOf, {
			onClick: () => {
				open$.next(true);
			},
			children: [props.of, $dialog]
		});
	};
}, {
	displayName: "DatabaseErTableColumnOfView",
	props: ["of", "database"]
});
var DatabaseErMain = /* @__PURE__ */ styled("div", { displayName: "DatabaseErMain" })({
	py: 18,
	px: 24,
	flex: 1,
	overflow: "auto"
});
var DatabaseErHeader = /* @__PURE__ */ styled("div", { displayName: "DatabaseErHeader" })({
	py: 8,
	px: 16,
	textStyle: "sys.label-large"
});
var DatabaseErTable = /* @__PURE__ */ styled("details", { displayName: "DatabaseErTable" })({
	"& + &": { mt: 16 },
	rounded: "sm",
	border: "1px solid",
	borderColor: /* @__PURE__ */ variant("sys.outline-variant", /* @__PURE__ */ alpha(.38)),
	overflow: "hidden",
	width: "100%"
});
var DatabaseErTableSummary = /* @__PURE__ */ styled("summary", { displayName: "DatabaseErTableSummary" })({
	textStyle: "sys.label-large",
	py: 8,
	px: 16,
	display: "flex",
	color: "sys.primary"
});
var DatabaseErTableDef = /* @__PURE__ */ styled("div", { displayName: "DatabaseErTableDef" })({
	px: 16,
	py: 4,
	display: "flex",
	_hover: { containerStyle: "sys.surface-container-low" }
});
var DatabaseErTableColumnName = /* @__PURE__ */ styled("div", { displayName: "DatabaseErTableColumnName" })({
	display: "flex",
	width: "20vw",
	textStyle: "sys.label-small",
	font: "code"
});
var DatabaseErTableColumnComment = /* @__PURE__ */ styled("div", { displayName: "DatabaseErTableColumnComment" })({
	display: "flex",
	textStyle: "sys.label-small",
	width: "20vw",
	justifyContent: "end"
});
var DatabaseErTableColumnOf = /* @__PURE__ */ styled("div", { displayName: "DatabaseErTableColumnOf" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	color: "sys.primary",
	_hover: { cursor: "pointer" }
});
var DatabaseErTableColumnType = /* @__PURE__ */ styled("div", { displayName: "DatabaseErTableColumnType" })({
	flex: 1,
	textStyle: "sys.label-small"
});
var DatabaseDescription = /* @__PURE__ */ styled("div", (props, {}) => {
	return (Root) => {
		return /* @__PURE__ */ jsxs(Root, { children: [
			props.meta.title,
			" ",
			props.meta.description ? /* @__PURE__ */ jsx(Tooltip, {
				$title: /* @__PURE__ */ jsx(MarkdownContainer, { children: /* @__PURE__ */ jsx(Markdown, { text: props.meta.description }) }),
				children: /* @__PURE__ */ jsx(Icon, { path: mdiHelpBox })
			}) : null
		] });
	};
}, {
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
	[`${Icon}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
});
var DialogContainer = /* @__PURE__ */ styled("div", { displayName: "DialogContainer" })({
	display: "flex",
	containerStyle: "sys.surface",
	width: "90vw",
	roundedBottom: "sm",
	px: 16,
	py: 36,
	top: 0,
	position: "absolute",
	overflow: "auto"
});
var DatabaseErTableConstraintName = /* @__PURE__ */ styled("div", { displayName: "DatabaseErTableConstraintName" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	display: "flex",
	alignItems: "center",
	gap: "1em",
	_primary: { [`${Icon}`]: { color: "sys.primary" } },
	_unique: { [`${Icon}`]: {
		position: "relative",
		"&::before": {
			content: /* @__PURE__ */ JSON.stringify("1"),
			position: "absolute",
			right: -6,
			textStyle: "sys.label-small",
			fontSize: 8
		}
	} }
});
var Spacer = /* @__PURE__ */ styled("div", { displayName: "Spacer" })({ flex: 1 });
var PreWithMermaid = /* @__PURE__ */ styled("pre", ({}, { slots }) => {
	return (Root) => {
		const children = slots.default?.();
		const child = children?.[0];
		if (child && child.props.className === "language-mermaid") return /* @__PURE__ */ jsx(Mermaid, { code: child.children });
		return /* @__PURE__ */ jsx(Root, { children });
	};
}, { displayName: "PreWithMermaid" })({});
var Mermaid = /* @__PURE__ */ component$((props, {}) => {
	const $el = /* @__PURE__ */ observableRef(null);
	rx($el, /* @__PURE__ */ switchMap((el) => {
		if (el) return from(/* @__PURE__ */ (async () => {
			const { default: mermaid } = await __vitePreload(async () => {
				const { default: mermaid$1 } = await import("./vendor-mermaid.D3b02Bxi.chunk.js");
				return { default: mermaid$1 };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));
			await mermaid.run({ nodes: [el] });
		})());
		return EMPTY;
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	return () => {
		return /* @__PURE__ */ jsx(MermaidContainer, {
			ref: $el,
			class: "mermaid",
			children: props.code
		});
	};
}, {
	displayName: "Mermaid",
	props: ["code"]
});
var MermaidContainer = /* @__PURE__ */ styled("div", { displayName: "MermaidContainer" })({ "& > svg": { minWidth: "80%" } });
var OperationView = /* @__PURE__ */ component$((props, {}) => {
	const openapi$ = /* @__PURE__ */ OpenAPIProvider.use();
	const op$ = /* @__PURE__ */ rx(props.operationId$, /* @__PURE__ */ switchMap((operationId) => openapi$.operation$(operationId)));
	const opExists$ = /* @__PURE__ */ rx(op$, /* @__PURE__ */ filter((op) => !!op));
	const open$ = /* @__PURE__ */ ImmerBehaviorSubject.seed(false);
	const $descInDialog = /* @__PURE__ */ rx(opExists$, /* @__PURE__ */ render((op) => {
		return op.description ? /* @__PURE__ */ jsx(Markdown, {
			text: op.description,
			components: { pre: PreWithMermaid }
		}) : null;
	}));
	const $dialog = /* @__PURE__ */ rx(open$, /* @__PURE__ */ render((open) => {
		return /* @__PURE__ */ jsx(Dialog, {
			isOpen: open,
			onClose: () => {
				open$.next(false);
			},
			children: /* @__PURE__ */ jsx(DialogContainer$2, { children: /* @__PURE__ */ jsx(MarkdownContainer, { children: $descInDialog }) })
		});
	}));
	const DialogContainer$2 = /* @__PURE__ */ styled("div", { displayName: "DialogContainer" })({
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
	});
	const $descBtn = /* @__PURE__ */ rx(opExists$, /* @__PURE__ */ render((op) => {
		return op.description ? /* @__PURE__ */ jsxs(IconButton, {
			onClick: () => {
				open$.next(true);
			},
			children: [/* @__PURE__ */ jsx(Icon, { path: mdiHelp }), $dialog]
		}) : null;
	}));
	const $requestBuilder = /* @__PURE__ */ rx(opExists$, /* @__PURE__ */ render((op) => {
		return /* @__PURE__ */ jsx(RequestBuilder, {
			operation: op,
			children: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ Object.entries(op.responses ?? {}).map(([code, response]) => {
				return /* @__PURE__ */ jsx(ResponseView, {
					code,
					response
				}, code);
			}) })
		}, op.operationId);
	}));
	const $heading = /* @__PURE__ */ rx(opExists$, /* @__PURE__ */ render((op) => {
		return /* @__PURE__ */ jsxs(OperationHeading, {
			sx: { containerStyle: {
				get: "sys.primary-container",
				post: "sys.success-container",
				put: "sys.warning-container",
				delete: "sys.error-container"
			}[op.method] ?? "sys.secondary-container" },
			children: [
				/* @__PURE__ */ jsx("div", {
					"data-operation-method": true,
					children: op.method
				}),
				/* @__PURE__ */ jsxs("div", {
					"data-operation-desc": true,
					children: [/* @__PURE__ */ jsx("div", {
						"data-operation-path": true,
						children: op.path
					}), /* @__PURE__ */ jsxs("div", {
						"data-operation-summary": true,
						children: [
							op.summary,
							" ",
							op.operationId != op.summary ? op.operationId : ""
						]
					})]
				}),
				/* @__PURE__ */ jsx(Box, { sx: { flex: 1 } }),
				$descBtn
			]
		});
	}));
	return rx(op$, /* @__PURE__ */ render((op) => {
		if (!op) return null;
		if (op.operationId == "SycDatabaseEr") return /* @__PURE__ */ jsxs(OperationContainer, { children: [$heading, /* @__PURE__ */ jsx(OperationMain, { children: /* @__PURE__ */ jsx(DatabaseErContainer, { op }) })] }, op.operationId);
		return /* @__PURE__ */ jsxs(OperationContainer, { children: [$heading, /* @__PURE__ */ jsx(OperationMain, { children: /* @__PURE__ */ jsx(Box, {
			sx: {
				flex: 1,
				overflow: "auto"
			},
			children: $requestBuilder
		}) })] }, op.operationId);
	}));
}, {
	displayName: "OperationView",
	props: ["operationId"]
});
var OperationContainer = /* @__PURE__ */ styled("div", { displayName: "OperationContainer" })({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
});
var OperationMain = /* @__PURE__ */ styled("div", { displayName: "OperationMain" })({
	flex: 1,
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
});
var OperationHeading = /* @__PURE__ */ styled("summary", { displayName: "OperationHeading" })({
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
export { OpenAPIView as n, OpenAPIProvider as r, OperationView as t };
