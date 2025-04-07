const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~mermaid.esm.min.dxqLHM8_.chunk.js","assets/lib-nodepkg-typedef.D-PCYzjh.chunk.js","assets/vendor-min-mermaid~chunk-HQLFZTFY.B_Iiq6uF.chunk.js","assets/vendor-min-mermaid~chunk-MEBTFSOL.CCNoLlnV.chunk.js","assets/vendor-min-mermaid~chunk-ZKYS2E5M.DYmB7G2x.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js","assets/vendor-min-mermaid~chunk-7LIB5WBN.VCeBPxAO.chunk.js","assets/vendor-min-mermaid~chunk-L736DJ4U.CrZlOsoh.chunk.js","assets/vendor-min-mermaid~chunk-QTJCGBHB.B_EP1PNg.chunk.js","assets/vendor-min-mermaid~chunk-USR3SDWQ.C0XgfhoF.chunk.js","assets/vendor-min-mermaid~chunk-2VPXETT4.xhKexg6X.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.CCcUlC7q.chunk.js","assets/vendor-min-mermaid~chunk-HESFG3RP.X24hc0uC.chunk.js","assets/vendor-min-mermaid~chunk-YM3XIQPS.DzKxOkHI.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG.CAA-1BPs.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.BwVspKnk.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.By2qN2hC.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DtdPbVSC.chunk.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _fetcher, _requests$, _OpenAPI_instances, baseURL_get, operation_fn;
import { S as Schema, s as string, b as any, f as JSONSchemaDecoder, h as refName, j as enums, e as custom, o as object, k as boolean, _ as __vitePreload } from "./lib-nodepkg-typedef.D-PCYzjh.chunk.js";
import { I as ImmerBehaviorSubject, r as rx, c as createProvider, a as component$, s as subscribeUntilUnmount, o as observableRef, v as subscribeOnMountedUntilUnmount, h as render, d as jsxs, j as jsx, A as RouterLink, R as RouterView, f as component, F as Fragment, b as cloneVNode, B as useRouter, C as onUnmounted, D as useRoute, k as onMounted } from "./lib-nodepkg-vuekit.BuiIu7Tz.chunk.js";
import { c as createFetcher, a as createRequestSubject, t as transformRequestBody, p as paramsSerializer } from "./vendor-innoai-tech-fetcher.BjdA5DJ0.chunk.js";
import { B as BehaviorSubject, s as switchMap, b as map, m as merge, E as EMPTY, o as of, S as Subject, k as debounceTime, t as tap, O as Observable, l as skip, c as combineLatest, e as from, n as filter } from "./vendor-rxjs.Bs9iBULs.chunk.js";
import { w as pick, g as get, a as isUndefined, x as uniq, d as isArray, e as isObject } from "./vendor-innoai-tech-lodash.DimVzCL6.chunk.js";
import { s as styled, B as Box, v as variant, b as alpha } from "./lib-nodepkg-vueuikit.BzhbdpiR.chunk.js";
import { M as Markdown } from "./lib-nodepkg-vuemarkdown.BrhXtQeo.chunk.js";
import { a as Icon, m as mdiHelpBox, T as Tooltip, D as Dialog, F as FilledButton, f as mdiUploadBox, g as mdiKeyOutline, h as mdiKey, i as mdiHelp, I as IconButton } from "./lib-nodepkg-vuematerial.D3GZY0DO.chunk.js";
import { l as label, h as hint, i as inputBy, F as FormData } from "./lib-nodepkg-vueformdata.BLOk9d5Y.chunk.js";
import { J as JSONEditor, a as JSONEditorProvider, b as JSONEditorView } from "./lib-nodepkg-jsoneditor.CLU__9pP.chunk.js";
const _OpenAPI = class _OpenAPI extends ImmerBehaviorSubject {
  constructor() {
    super(...arguments);
    __privateAdd(this, _OpenAPI_instances);
    __privateAdd(this, _fetcher, createFetcher({
      paramsSerializer,
      transformRequestBody
    }));
    __privateAdd(this, _requests$, new BehaviorSubject(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _OpenAPI({
      openapi: "3.1.0",
      components: {
        schemas: {}
      },
      paths: {}
    });
  }
  response$(operationId) {
    return rx(__privateGet(this, _requests$), switchMap((requests$) => {
      const r$ = requests$.get(operationId);
      if (r$) {
        return merge(r$, r$.error$);
      }
      return EMPTY;
    }));
  }
  requesting$(operationId) {
    return rx(__privateGet(this, _requests$), switchMap((requests$) => {
      var _a;
      return ((_a = requests$.get(operationId)) == null ? void 0 : _a.requesting$) ?? of(false);
    }));
  }
  asRequestConfigCreator(operationId) {
    var _a;
    const op = __privateMethod(this, _OpenAPI_instances, operation_fn).call(this, operationId);
    if (!op) {
      return null;
    }
    const contentType = Object.keys(((_a = op.requestBody) == null ? void 0 : _a.content) ?? {})[0];
    return (inputs) => {
      var _a2, _b;
      return {
        method: op.method,
        url: __privateGet(this, _OpenAPI_instances, baseURL_get) + compilePath(op.path, inputs),
        params: pick(inputs, (_a2 = op.parameters) == null ? void 0 : _a2.filter((p) => p.in == "query").map((p) => p.name)),
        headers: {
          ...pick(inputs, (_b = op.parameters) == null ? void 0 : _b.filter((p) => p.in == "header").map((p) => p.name)),
          ...contentType ? {
            "Content-Type": contentType
          } : {}
        },
        body: inputs["body"],
        inputs
      };
    };
  }
  request(operationId, inputs) {
    let r$ = __privateGet(this, _requests$).value.get(operationId);
    if (!r$) {
      const createRequestConfig = this.asRequestConfigCreator(operationId);
      if (!createRequestConfig) {
        return;
      }
      const createConfig = Object.assign(createRequestConfig, {
        operationID: operationId,
        TRespData: {}
      });
      r$ = createRequestSubject(createConfig, __privateGet(this, _fetcher));
      __privateGet(this, _requests$).value.set(operationId, r$);
      __privateGet(this, _requests$).next(__privateGet(this, _requests$).value);
    }
    r$.next(inputs);
  }
  operation$(operationId) {
    return rx(this, switchMap((openapi) => {
      for (const op of operations(openapi, {
        operationId
      })) {
        if (op) {
          return of(op);
        }
      }
      return of(null);
    }));
  }
  operations$(filters) {
    return rx(this, switchMap((openapi) => of([
      ...operations(openapi, filters)
    ])));
  }
  schema$(ref) {
    var _a;
    const keyPath = ((_a = ref.split("#/")[1]) == null ? void 0 : _a.split("/")) ?? [];
    return rx(this, switchMap((openapi) => {
      if (keyPath) {
        return of(get(openapi, keyPath) ?? null);
      }
      return of(null);
    }), map((s) => {
      return s ? {
        ...s,
        $id: keyPath[keyPath.length - 1]
      } : s;
    }));
  }
  schema(ref) {
    var _a;
    const keyPath = ((_a = ref.split("#/")[1]) == null ? void 0 : _a.split("/")) ?? [];
    if (keyPath) {
      return get(this.value, keyPath) ?? void 0;
    }
    return void 0;
  }
};
_fetcher = new WeakMap();
_requests$ = new WeakMap();
_OpenAPI_instances = new WeakSet();
baseURL_get = function() {
  var _a, _b;
  return ((_b = (_a = this.value.servers) == null ? void 0 : _a[0]) == null ? void 0 : _b.url) ?? "";
};
operation_fn = function(operationId) {
  for (const op of operations(this.value, {
    operationId
  })) {
    if (op) {
      return op;
    }
  }
  return null;
};
let OpenAPI = _OpenAPI;
function* operations(openapi, filters) {
  var _a;
  for (const [path, ops] of Object.entries(openapi.paths)) {
    for (const [method, o] of Object.entries(ops)) {
      if (o.operationId == "OpenAPI" || o.operationId == "OpenAPIView") {
        continue;
      }
      if (filters.tag) {
        if (!(o.tags ?? []).includes(filters.tag)) {
          continue;
        }
      }
      if (filters.operationId) {
        if (filters.operationId.startsWith("*")) {
          if (!o.operationId.toLowerCase().includes(filters.operationId.slice(1).toLowerCase())) {
            continue;
          }
        } else {
          if (o.operationId.toLowerCase() != filters.operationId.toLowerCase()) {
            continue;
          }
        }
      }
      yield {
        ...o,
        method,
        path,
        group: ((_a = o.tags) == null ? void 0 : _a[0]) ?? ""
      };
    }
  }
}
const compilePath = function(path) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return path.replace(/{([\s\S]+?)}/g, (target, key) => [].concat(params[key] || target).join(","));
};
const OpenAPIProvider = createProvider(() => OpenAPI.empty(), {
  name: "OpenAPI"
});
const OpenAPIView = component$((param, param1) => {
  const openapi$ = OpenAPIProvider.use();
  const filters$ = new ImmerBehaviorSubject({
    operationId: void 0
  });
  const operationIDInput = new Subject();
  rx(operationIDInput, debounceTime(200), tap((v) => {
    filters$.next((filters) => {
      filters.operationId = `*${v ?? ""}`;
    });
  }), subscribeUntilUnmount());
  const scrollContainerEl$ = observableRef(null);
  rx(scrollContainerEl$, switchMap((scrollContainerEl) => {
    if (scrollContainerEl) {
      const scrollTo = (item) => {
        if (item) {
          scrollContainerEl.scrollTo({
            top: item.offsetTop - scrollContainerEl.offsetTop
          });
        }
      };
      return new Observable(() => {
        const observer = new MutationObserver((mutationList) => {
          for (const mutation of mutationList) {
            if (mutation.type === "attributes") {
              const target = mutation.target;
              if (target.classList.contains("router-link-active")) {
                scrollTo(target);
              }
            }
          }
        });
        observer.observe(scrollContainerEl, {
          attributes: true,
          subtree: true
        });
        setTimeout(() => {
          scrollTo(scrollContainerEl.querySelector(".router-link-active"));
        }, 100);
        return () => {
          observer.disconnect();
        };
      });
    }
    return EMPTY;
  }), subscribeOnMountedUntilUnmount());
  const $nav = rx(filters$, switchMap((filters) => {
    return openapi$.operations$(filters);
  }), render((operations2) => {
    const grouped = Object.groupBy(operations2, (v) => v.group);
    return /* @__PURE__ */ jsxs(NavContainer, {
      children: [
        /* @__PURE__ */ jsx(NavSearchBox, {
          children: /* @__PURE__ */ jsx("input", {
            type: "text",
            placeholder: "请输入 operationId 查询",
            onInput: (e) => {
              operationIDInput.next(e.target.value);
            }
          })
        }),
        /* @__PURE__ */ jsx(Nav, {
          sx: {
            flex: 1,
            overflow: "scroll"
          },
          ref: scrollContainerEl$,
          children: Object.entries(grouped).toSorted().map((param2) => {
            let [group, operations22] = param2;
            return /* @__PURE__ */ jsxs("div", {
              "data-nav-group": true,
              children: [
                /* @__PURE__ */ jsx("div", {
                  "data-nav-group-heading": true,
                  children: group
                }),
                /* @__PURE__ */ jsx("div", {
                  "data-nav-group-contents": true,
                  children: operations22 == null ? void 0 : operations22.map((op) => {
                    return /* @__PURE__ */ jsxs(OperationListItem, {
                      component: RouterLink,
                      to: `/operations/${op.operationId}`,
                      children: [
                        /* @__PURE__ */ jsx(Box, {
                          "data-operation-method": true,
                          sx: {
                            color: {
                              get: "sys.primary",
                              post: "sys.success",
                              put: "sys.warning",
                              delete: "sys.error"
                            }[op.method] ?? "sys.secondary"
                          },
                          children: op.method
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          "data-operation-desc": true,
                          children: [
                            /* @__PURE__ */ jsx("div", {
                              "data-operation-id": true,
                              children: op.operationId
                            }),
                            op.summary ? /* @__PURE__ */ jsx("div", {
                              "data-operation-summary": true,
                              children: op.summary != op.operationId ? op.summary : /* @__PURE__ */ jsx("span", {
                                children: " "
                              })
                            }) : void 0
                          ]
                        })
                      ]
                    });
                  })
                })
              ]
            });
          })
        })
      ]
    });
  }));
  return () => {
    return /* @__PURE__ */ jsxs(Container, {
      children: [
        $nav,
        /* @__PURE__ */ jsx(Main, {
          children: /* @__PURE__ */ jsx(RouterView, {})
        })
      ]
    });
  };
});
const Container = styled("div")({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex"
});
const NavContainer = styled("aside")({
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
const NavSearchBox = styled("div")({
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
const Nav = styled("div")({
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
const Main = styled("main")({
  flex: 1,
  overflow: "hidden"
});
const OperationListItem = styled("a")({
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
    opacity: 0.7,
    textStyle: "sys.body-small",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  "&.router-link-active": {
    containerStyle: "sys.surface-container"
  }
});
const Token = styled("div")({
  display: "inline-table",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 14
});
const PropName = styled("div")({
  display: "inline-table",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 14,
  color: "sys.primary",
  _deprecated: {
    textDecoration: "line-through"
  },
  _nullable: {
    "&:after": {
      content: `"??"`,
      color: "sys.error"
    }
  },
  _optional: {
    "&:after": {
      content: `"?"`,
      color: "sys.secondary"
    }
  }
});
const Line = styled("div", (props, param) => {
  let { slots } = param;
  const i = IntentContextProvider.use();
  return (Root) => {
    var _a;
    return /* @__PURE__ */ jsx(Root, {
      style: {
        paddingLeft: `${i.indent}em`,
        marginTop: (props.spacing ?? 0) * 0.5
      },
      children: (_a = slots.default) == null ? void 0 : _a.call(slots)
    });
  };
})({
  position: "relative",
  display: "block"
});
const Description = styled("div", (props, param) => {
  return (Root) => {
    const title = Schema.metaProp(props.schema, "title") ?? "";
    const description = Schema.metaProp(props.schema, "description") ?? "";
    return /* @__PURE__ */ jsxs(Root, {
      children: [
        title,
        " ",
        description ? /* @__PURE__ */ jsx(Tooltip, {
          title: /* @__PURE__ */ jsx(MarkdownContainer, {
            children: /* @__PURE__ */ jsx(Markdown, {
              text: description
            })
          }),
          children: /* @__PURE__ */ jsx(Icon, {
            path: mdiHelpBox
          })
        }) : null
      ]
    });
  };
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
const MarkdownContainer = styled("div")({
  textStyle: "sys.body-small",
  "& p": {
    my: 1,
    wordBreak: "keep-all",
    whiteSpace: "nowrap",
    opacity: 0.7
  },
  "& code": {
    wordBreak: "keep-all",
    whiteSpace: "nowrap"
  }
});
const Annotation = (param) => {
  let { name, value, extra } = param;
  if (value == "") {
    return null;
  }
  return /* @__PURE__ */ jsx(Line, {
    children: /* @__PURE__ */ jsxs(Token, {
      sx: {
        opacity: 0.7,
        fontSize: "0.9em",
        wordBreak: "keep-all",
        whiteSpace: "nowrap"
      },
      children: [
        /* @__PURE__ */ jsx(Token, {
          sx: {
            color: "sys.primary"
          },
          children: `@${name}(`
        }),
        `${value}`,
        Object.entries(extra ?? {}).map((param2) => {
          let [k, v] = param2;
          if (isUndefined(v)) {
            return null;
          }
          return /* @__PURE__ */ jsxs(Fragment, {
            children: [
              /* @__PURE__ */ jsxs(Token, {
                sx: {
                  opacity: 0.5
                },
                children: [
                  `,`,
                  " "
                ]
              }),
              /* @__PURE__ */ jsx(Token, {
                sx: {
                  opacity: 0.5
                },
                children: k
              }),
              /* @__PURE__ */ jsxs(Token, {
                sx: {
                  opacity: 0.5
                },
                children: [
                  `:`,
                  " "
                ]
              }),
              /* @__PURE__ */ jsx(Token, {
                sx: {
                  opacity: 0.7
                },
                children: v
              })
            ]
          });
        }),
        /* @__PURE__ */ jsx(Token, {
          sx: {
            color: "sys.primary"
          },
          children: `)`
        })
      ]
    })
  });
};
const IntentContextProvider = createProvider(() => {
  return {
    indent: 0
  };
}, {
  name: "IntentContext"
});
const Indent = component((param, param1) => {
  let { slots } = param1;
  const i = IntentContextProvider.use();
  return () => {
    var _a;
    return /* @__PURE__ */ jsx(IntentContextProvider, {
      value: {
        indent: i.indent + 1
      },
      children: (_a = slots.default) == null ? void 0 : _a.call(slots)
    });
  };
});
class Node {
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
      if (n.id == id) {
        return false;
      }
      n = n.parent;
    }
    return true;
  }
}
const SchemaRenderProvider = createProvider(() => new Node(""));
const SchemaViewLink = component$((props) => {
  const node = SchemaRenderProvider.use();
  const ident = IntentContextProvider.use();
  const open$ = observableRef(false);
  return () => {
    let schema = props.schema;
    const id = Schema.schemaProp(props.schema, "$ref");
    schema = Schema.schemaProp(props.schema, Schema.unwrap)();
    const needID = schema.type == "intersection" || schema.type == "object" || schema.type == "union" || schema.type == "record" || schema.type == "array" || schema.type == "union";
    const $inline = node.safe(id) && /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx("span", {
          children: " "
        }),
        /* @__PURE__ */ jsx(SchemaView, {
          schema
        })
      ]
    });
    return /* @__PURE__ */ jsx(SchemaRenderProvider, {
      value: node.child(id),
      children: needID ? ident.indent < 3 ? /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsx(RouterLink, {
            to: `#${id}`,
            "data-index": ident.indent,
            children: /* @__PURE__ */ jsx(Token, {
              id,
              children: id
            })
          }),
          $inline
        ]
      }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsx(Box, {
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
          }),
          node.safe(id) && /* @__PURE__ */ jsx(Dialog, {
            isOpen: open$.value,
            onClose: () => {
              open$.next(false);
            },
            children: /* @__PURE__ */ jsx(DialogContainer$1, {
              children: /* @__PURE__ */ jsxs(Line, {
                children: [
                  /* @__PURE__ */ jsx(Token, {
                    children: id
                  }),
                  /* @__PURE__ */ jsx(IntentContextProvider, {
                    value: {
                      indent: 0
                    },
                    children: $inline
                  })
                ]
              })
            })
          })
        ]
      }) : $inline
    });
  };
});
const DialogContainer$1 = styled("div")({
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
const SchemaView = component$((props) => {
  const schema = props.schema;
  if (Schema.schemaProp(schema, "$ref")) {
    return /* @__PURE__ */ jsx(SchemaViewLink, {
      schema
    });
  }
  return () => {
    var _a, _b;
    switch (schema.type) {
      case "union":
        return /* @__PURE__ */ jsx(Fragment, {
          children: (_a = Schema.schemaProp(schema, "oneOf")) == null ? void 0 : _a.map((s, i) => {
            return /* @__PURE__ */ jsxs(Fragment, {
              children: [
                i > 0 && /* @__PURE__ */ jsxs(Token, {
                  children: [
                    " ",
                    " | ",
                    " "
                  ]
                }),
                /* @__PURE__ */ jsx(SchemaView, {
                  schema: s
                })
              ]
            });
          })
        });
      case "intersection":
        return /* @__PURE__ */ jsx(Token, {
          children: (_b = Schema.schemaProp(schema, "allOf")) == null ? void 0 : _b.filter((s) => !Object.keys(s).length).map((s, i) => {
            return /* @__PURE__ */ jsxs(Fragment, {
              children: [
                i > 0 && /* @__PURE__ */ jsxs(Token, {
                  children: [
                    " ",
                    "&",
                    " "
                  ]
                }),
                /* @__PURE__ */ jsx(SchemaView, {
                  schema: s
                })
              ]
            });
          })
        });
      case "array":
        return /* @__PURE__ */ jsxs(Token, {
          sx: {
            wordBreak: "keep-all",
            whiteSpace: "nowrap"
          },
          children: [
            /* @__PURE__ */ jsx(Token, {
              children: "Array<"
            }),
            /* @__PURE__ */ jsx(SchemaView, {
              schema: Schema.schemaProp(schema, "items") ?? any()
            }),
            /* @__PURE__ */ jsx(Token, {
              children: ">"
            })
          ]
        });
      case "object":
        return /* @__PURE__ */ jsxs(Fragment, {
          children: [
            /* @__PURE__ */ jsx(Token, {
              children: "{"
            }),
            /* @__PURE__ */ jsx(Indent, {
              children: /* @__PURE__ */ jsx(Fragment, {
                children: Object.entries(Schema.schemaProp(schema, "properties") ?? {}).map((param) => {
                  let [propName, propSchema] = param;
                  if (!propSchema) {
                    return null;
                  }
                  return /* @__PURE__ */ jsx(Fragment, {
                    children: /* @__PURE__ */ jsxs(Line, {
                      spacing: 2,
                      children: [
                        /* @__PURE__ */ jsx(Description, {
                          schema: propSchema
                        }),
                        /* @__PURE__ */ jsxs(Token, {
                          sx: {
                            wordBreak: "keep-all",
                            whiteSpace: "nowrap"
                          },
                          children: [
                            /* @__PURE__ */ jsx(PropName, {
                              nullable: Schema.schemaProp(schema, "nullable"),
                              deprecated: Schema.schemaProp(schema, "deprecated"),
                              optional: !(Schema.schemaProp(schema, "required") ?? []).includes(propName),
                              children: propName
                            }),
                            /* @__PURE__ */ jsx(Token, {
                              sx: {
                                mr: "1em"
                              },
                              children: ":"
                            }),
                            /* @__PURE__ */ jsx(SchemaView, {
                              schema: propSchema
                            })
                          ]
                        })
                      ]
                    })
                  });
                })
              })
            }),
            /* @__PURE__ */ jsx(Token, {
              children: "}"
            })
          ]
        });
      case "record":
        return /* @__PURE__ */ jsxs(Fragment, {
          children: [
            /* @__PURE__ */ jsx(Token, {
              children: "{"
            }),
            Schema.schemaProp(schema, "additionalProperties") && /* @__PURE__ */ jsx(Fragment, {
              children: /* @__PURE__ */ jsx(Indent, {
                children: /* @__PURE__ */ jsxs(Line, {
                  children: [
                    /* @__PURE__ */ jsxs(Token, {
                      sx: {
                        mr: 1
                      },
                      children: [
                        "[K:",
                        " "
                      ]
                    }),
                    /* @__PURE__ */ jsx(SchemaView, {
                      schema: Schema.schemaProp(schema, "propertyNames") ?? string()
                    }),
                    /* @__PURE__ */ jsxs(Token, {
                      sx: {
                        mr: 1
                      },
                      children: [
                        "]:",
                        " "
                      ]
                    }),
                    /* @__PURE__ */ jsx(SchemaView, {
                      schema: Schema.schemaProp(schema, "additionalProperties") ?? any()
                    })
                  ]
                })
              })
            }),
            /* @__PURE__ */ jsx(Token, {
              children: "}"
            })
          ]
        });
      case "enums": {
        const enumValues = Schema.schemaProp(schema, "enum") ?? [];
        if (enumValues.length == 1) {
          return /* @__PURE__ */ jsx(Token, {
            children: JSON.stringify(enumValues[0])
          });
        }
        let type2 = "any";
        if (enumValues.length > 0) {
          type2 = typeof enumValues[0];
        }
        return /* @__PURE__ */ jsxs(Fragment, {
          children: [
            /* @__PURE__ */ jsx(Token, {
              sx: {
                fontWeight: "bold"
              },
              children: type2
            }),
            /* @__PURE__ */ jsx(Indent, {
              children: enumValues.map((value, i) => {
                var _a2;
                return /* @__PURE__ */ jsx(Annotation, {
                  name: "enum",
                  value: `${value}`,
                  extra: ((_a2 = Schema.metaProp(schema, "enumLabels")) == null ? void 0 : _a2[i]) ? {
                    label: JSON.stringify(Schema.metaProp(schema, "enumLabels")[i])
                  } : {}
                }, value);
              })
            })
          ]
        });
      }
    }
    let [type, format, defaultValue] = [
      schema.type,
      Schema.metaProp(schema, "format"),
      Schema.metaProp(schema, "default")
    ];
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx(Token, {
          sx: {
            fontWeight: "bold"
          },
          children: type || "any"
        }),
        /* @__PURE__ */ jsxs(Indent, {
          children: [
            format && /* @__PURE__ */ jsx(Annotation, {
              name: "format",
              value: format
            }),
            !isUndefined(defaultValue) && /* @__PURE__ */ jsx(Annotation, {
              name: "default",
              value: defaultValue
            }),
            validateProps.map((prop) => {
              const v = Schema.schemaProp(schema, prop);
              if (isUndefined(v)) {
                return null;
              }
              if (prop == "pattern") {
                return /* @__PURE__ */ jsx(Annotation, {
                  name: prop,
                  value: v,
                  extra: {
                    errMsg: Schema.metaProp(schema, "x-pattern-err-msg")
                  }
                });
              }
              return /* @__PURE__ */ jsx(Annotation, {
                name: prop,
                value: v
              });
            })
          ]
        })
      ]
    });
  };
});
const validateProps = [
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
const ResponseView = component$((props) => {
  const openapi$ = OpenAPIProvider.use();
  return () => {
    const statusErrors = uniq(props.response["x-status-return-errors"] ?? []).map((statusErr) => {
      return parseStatusErr(statusErr);
    });
    return /* @__PURE__ */ jsxs(ResponseSection$1, {
      children: [
        /* @__PURE__ */ jsx(ResponseStatusCode, {
          "data-failed": isErrorCode(props.code),
          children: props.code
        }),
        /* @__PURE__ */ jsxs(Box, {
          sx: {
            pl: "4em"
          },
          children: [
            /* @__PURE__ */ jsx(Fragment, {
              children: Object.entries(props.response.content ?? {}).map((param) => {
                let [contentType, { schema }] = param;
                return /* @__PURE__ */ jsxs(ResponseSchema, {
                  children: [
                    /* @__PURE__ */ jsx(Line, {
                      spacing: 0,
                      children: /* @__PURE__ */ jsx(SchemaView, {
                        schema: JSONSchemaDecoder.decode(schema, (ref) => {
                          return [
                            openapi$.schema(ref) ?? {},
                            refName(ref)
                          ];
                        })
                      })
                    }),
                    /* @__PURE__ */ jsx("div", {
                      "data-content-type": true,
                      children: contentType
                    })
                  ]
                });
              })
            }),
            /* @__PURE__ */ jsx(Fragment, {
              children: statusErrors.length > 0 ? /* @__PURE__ */ jsxs(Box, {
                sx: {
                  mt: 16,
                  containerStyle: "sys.surface-container",
                  px: 12,
                  py: 16,
                  rounded: "xs"
                },
                children: [
                  /* @__PURE__ */ jsx(Box, {
                    sx: {
                      pb: 8
                    },
                    children: /* @__PURE__ */ jsxs("b", {
                      children: [
                        /* @__PURE__ */ jsx("small", {
                          children: "可能错误码"
                        }),
                        ":"
                      ]
                    })
                  }),
                  /* @__PURE__ */ jsxs(Table, {
                    children: [
                      /* @__PURE__ */ jsx(TableCell, {
                        sx: {
                          textStyle: "sys.label-small"
                        },
                        children: /* @__PURE__ */ jsx("code", {
                          children: `errors[*].code`
                        })
                      }),
                      /* @__PURE__ */ jsx(TableCell, {
                        sx: {
                          textStyle: "sys.label-small"
                        },
                        children: /* @__PURE__ */ jsx("code", {
                          children: `errors[*].message`
                        })
                      }),
                      statusErrors.map((statusErr) => {
                        if (statusErr) {
                          return /* @__PURE__ */ jsxs(Fragment, {
                            children: [
                              /* @__PURE__ */ jsx(TableCell, {
                                sx: {
                                  color: "sys.primary",
                                  textStyle: "sys.label-small",
                                  fontWeight: "bold"
                                },
                                children: /* @__PURE__ */ jsx("code", {
                                  children: JSON.stringify(statusErr.code)
                                })
                              }),
                              /* @__PURE__ */ jsx(TableCell, {
                                children: statusErr.message
                              })
                            ]
                          });
                        }
                        return null;
                      })
                    ]
                  })
                ]
              }) : null
            })
          ]
        })
      ]
    });
  };
});
const Table = styled("div")({
  textStyle: "sys.label-medium",
  display: "grid",
  gap: 8,
  width: "100%",
  gridTemplateColumns: "min-content 1fr",
  gridAutoColumns: "auto"
});
const TableCell = styled("div")({});
function splitCsv(str) {
  return str.split(",").reduce((accum, curr) => {
    if (accum.joining) {
      accum.values[accum.values.length - 1] += "," + curr;
    } else {
      accum.values.push(curr);
    }
    if (curr.split('"').length % 2 == 0) {
      accum.joining = !accum.joining;
    }
    return accum;
  }, {
    values: [],
    joining: false
  }).values;
}
function parseStatusErr() {
  let statusErr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const i = statusErr.indexOf("{");
  if (i > -1) {
    return splitCsv(statusErr.slice(i + 1, statusErr.length - 1)).reduce((ret, keyValue) => {
      const i2 = keyValue.indexOf("=");
      if (i2 < 0) {
        return ret;
      }
      const key = keyValue.slice(0, i2);
      const value = keyValue.slice(i2 + 1);
      if (isUndefined(key) || isUndefined(value)) {
        return ret;
      }
      return {
        ...ret,
        [key]: JSON.parse(value)
      };
    }, {
      code: statusErr.slice(0, i)
    });
  }
  return null;
}
const ResponseSection$1 = styled("section")({});
const ResponseStatusCode = styled("div")({
  fontSize: 18,
  fontFamily: "code",
  color: "sys.success",
  py: 12,
  pos: "sticky",
  top: 0,
  _data_failed__true: {
    color: "sys.error"
  }
});
const ResponseSchema = styled("section")({
  pos: "relative",
  $data_content_type: {
    pos: "absolute",
    right: 0,
    top: 0,
    fontFamily: "code",
    opacity: 0.3
  }
});
const TextField = styled("div", (props, param) => {
  let { slots } = param;
  return (Wrap) => {
    var _a, _b, _c;
    let valued = props.valued;
    let invalid = props.invalid;
    let disabled = props.disabled;
    const children = (((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? []).map((c) => {
      var _a2, _b2, _c2;
      if (c.type === "input") {
        valued = !!(((_a2 = c.props) == null ? void 0 : _a2["value"]) ?? ((_b2 = c.props) == null ? void 0 : _b2["placeholder"]) ?? valued);
        disabled = ((_c2 = c.props) == null ? void 0 : _c2["disabled"]) ?? disabled;
        return cloneVNode(c, {
          disabled
        });
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
      children: [
        /* @__PURE__ */ jsxs("div", {
          "data-input-container": true,
          children: [
            /* @__PURE__ */ jsxs("div", {
              "data-input-decorator-container": true,
              children: [
                /* @__PURE__ */ jsx("div", {
                  "data-input-decorator-leading": true
                }),
                /* @__PURE__ */ jsx("div", {
                  "data-input-decorator-label": true,
                  children: /* @__PURE__ */ jsx("div", {
                    "data-input-label": true,
                    children: (_b = slots.label) == null ? void 0 : _b.call(slots)
                  })
                }),
                /* @__PURE__ */ jsx("div", {
                  "data-input-decorator-trailing": true
                })
              ]
            }),
            /* @__PURE__ */ jsxs("div", {
              "data-input-row": true,
              children: [
                slots.leading && /* @__PURE__ */ jsx(Maker, {
                  role: "leading",
                  children: slots.leading()
                }),
                children,
                slots.trailing && /* @__PURE__ */ jsx(Maker, {
                  role: "trailing",
                  children: slots.trailing()
                })
              ]
            })
          ]
        }),
        slots.supporting && /* @__PURE__ */ jsx("div", {
          "data-input-supporting": true,
          children: (_c = slots.supporting) == null ? void 0 : _c.call(slots)
        })
      ]
    });
  };
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
    "&[readonly]": {
      cursor: "pointer"
    },
    bg: "inherit",
    color: "sys.on-surface",
    outline: "none",
    border: "none",
    textStyle: "sys.body-medium",
    _disabled: {
      cursor: "not-allowed"
    }
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
  $data_icon: {
    color: "sys.on-surface-variant"
  },
  _has_leading: {
    $data_input: {
      pl: 16 + 20
    },
    $data_input_label: {
      left: 16 + 20
    }
  },
  _has_trailing: {
    $data_input: {
      pr: 12 + 20
    }
  },
  _valued: {
    $data_input: {}
  },
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
    $data_input_label: {
      color: "sys.primary"
    }
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
    $data_input_label: {
      color: "sys.error"
    },
    $data_input_supporting: {
      color: "sys.error"
    },
    $data_icon: {
      color: "sys.error"
    }
  },
  _disabled: {
    opacity: 0.38,
    cursor: "not-allowed"
  }
});
const Maker = styled("div", {
  role: enums([
    "leading",
    "trailing"
  ])
})({
  pos: "absolute",
  top: 4,
  bottom: 4,
  display: "flex",
  alignItems: "center",
  color: "sys.on-surface-variant",
  _role__leading: {
    left: 12,
    $data_icon: {
      ml: -4
    }
  },
  _role__trailing: {
    right: 12,
    $data_icon: {
      mr: -4
    }
  }
});
const JSONEditorInput = component$((props, param) => {
  const editor$ = JSONEditor.of(props.field$.typedef, !isUndefined(props.field$.input) ? props.field$.input : void 0);
  rx(editor$, skip(1), tap((values) => {
    props.field$.update(values);
  }), subscribeUntilUnmount());
  return () => /* @__PURE__ */ jsx(JSONInputContainer, {
    children: /* @__PURE__ */ jsx(JSONEditorProvider, {
      value: editor$,
      children: /* @__PURE__ */ jsx(JSONEditorView, {})
    })
  });
});
const JSONInputContainer = styled("div")({
  position: "relative",
  width: "100%",
  minHeight: "40em",
  py: 8,
  px: 12,
  overflow: "hidden"
});
const getDefaultHeads = () => ({
  "User-Agent": navigator.userAgent,
  Origin: location.origin,
  Referer: `${location.origin}${location.pathname}`
});
const HeadRow = (param) => {
  let { field, value } = param;
  return /* @__PURE__ */ jsxs(Box, {
    component: "span",
    sx: {
      display: "block"
    },
    children: [
      /* @__PURE__ */ jsxs(Box, {
        component: "span",
        sx: {
          fontWeight: "bold",
          marginRight: "0.5em"
        },
        children: [
          field,
          ":"
        ]
      }),
      /* @__PURE__ */ jsx("span", {
        children: value
      })
    ]
  });
};
const HTTPFirstLine = (param) => {
  let { method, url, params } = param;
  const queryString = paramsSerializer(params);
  return /* @__PURE__ */ jsxs(Box, {
    component: "span",
    sx: {
      fontWeight: "bold"
    },
    children: [
      `${method.toUpperCase()} `,
      /* @__PURE__ */ jsxs(Box, {
        component: "span",
        sx: {
          fontWeight: "medium"
        },
        children: [
          url,
          queryString ? `?${queryString}` : ""
        ]
      }),
      ` HTTP/*`
    ]
  });
};
const displayMultipart = (boundary, data) => {
  const getPart = (k, v) => {
    if (v instanceof File || v instanceof Blob) {
      return `${boundary}
Content-Disposition: form-data; name="${k}"${v.name ? `; filename="${v.name}"` : ""}
Content-Type: ${v.type}

[File Content]
`;
    }
    if (isArray(v)) {
      return v.map((item) => getPart(k, item)).join("\n");
    }
    return `${boundary}
Content-Disposition: form-data; name="${k}"

${isObject(v) ? JSON.stringify(v) : String(v)}
`;
  };
  return Object.entries(data).map((param) => {
    let [k, v] = param;
    return getPart(k, v);
  }).join("\n") + `${boundary}--`;
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
  if (isContentTypeFormURLEncoded(request.headers)) {
    return paramsSerializer(request.body);
  }
  if (isContentTypeJSON(request.headers)) {
    return JSON.stringify(request.body, null, 2);
  }
  return request.body;
}
const CodeView = component({
  $default: custom().optional()
}, (param, param1) => {
  let { slots } = param1;
  return () => {
    var _a;
    return /* @__PURE__ */ jsx(Box, {
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
        children: /* @__PURE__ */ jsx("code", {
          children: (_a = slots.default) == null ? void 0 : _a.call(slots)
        })
      })
    });
  };
});
const HttpRequest = component({
  request: custom()
}, (props) => {
  return () => {
    const request = props.request;
    return /* @__PURE__ */ jsxs(CodeView, {
      children: [
        /* @__PURE__ */ jsx(HTTPFirstLine, {
          ...request
        }),
        /* @__PURE__ */ jsx(Fragment, {
          children: Object.entries({
            ...getDefaultHeads(),
            ...request.headers
          }).toSorted().map((param) => {
            let [key, value] = param;
            return /* @__PURE__ */ jsx(HeadRow, {
              field: key,
              value
            }, key);
          })
        }),
        request.body && /* @__PURE__ */ jsxs(Fragment, {
          children: [
            /* @__PURE__ */ jsx("br", {}),
            stringifyBody(request)
          ]
        })
      ]
    });
  };
});
const toDataURI = (buffer, contentType) => {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let len = bytes.byteLength, i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:${contentType};base64,${btoa(binary)}`;
};
const HTTPResponse = component({
  response: custom()
}, (props, param) => {
  return () => {
    const response = props.response;
    if (isContentTypeImage(response.headers)) {
      return /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("img", {
          src: toDataURI(response.body, getContentType(response.headers)),
          alt: ""
        })
      });
    }
    return /* @__PURE__ */ jsxs(CodeView, {
      children: [
        /* @__PURE__ */ jsxs("span", {
          children: [
            "HTTP/* ",
            response.status
          ]
        }),
        /* @__PURE__ */ jsx("br", {}),
        response.headers && /* @__PURE__ */ jsx(Fragment, {
          children: Object.entries(response.headers).map((param2) => {
            let [key, value] = param2;
            return /* @__PURE__ */ jsx(HeadRow, {
              field: key,
              value
            }, key);
          })
        }),
        /* @__PURE__ */ jsx("br", {}),
        response.body ? isContentTypeJSON(response.headers) ? JSON.stringify(response.body, null, 2) : `${response.body}` : null
      ]
    });
  };
});
function getContentType() {
  let headers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  for (const [k, v] of Object.entries(headers)) {
    if (k.toLowerCase() == "content-type") {
      return v;
    }
  }
  return "";
}
function isContentTypeMultipartFormData(headers) {
  return getContentType(headers).includes("multipart/form-data");
}
const isContentTypeJSON = (headers) => getContentType(headers).includes("application/json");
function isContentTypeFormURLEncoded(headers) {
  return getContentType(headers).includes("application/x-www-form-urlencoded");
}
function isContentTypeImage(headers) {
  return getContentType(headers).includes("image/");
}
const ResponsePreview = component$((props) => {
  const openapi$ = OpenAPIProvider.use();
  return rx(openapi$.response$(props.operationID), render((resp) => {
    return /* @__PURE__ */ jsx(ResponseSection, {
      children: /* @__PURE__ */ jsx(HTTPResponse, {
        response: resp
      })
    });
  }));
});
const ResponseSection = styled("section")({
  maxHeight: "40vh",
  overflow: "auto"
});
const RequestBuilder = component$((props, param) => {
  let { slots } = param;
  const openapi$ = OpenAPIProvider.use();
  const propSchemas = {};
  for (const p of props.operation.parameters ?? []) {
    let x = JSONSchemaDecoder.decode(p.schema, (ref) => {
      return [
        openapi$.schema(ref) ?? {},
        refName(ref)
      ];
    }).use(label(`${p.name}, in=${JSON.stringify(p.in)}`));
    if (!p.required) {
      x = x.optional();
    }
    x.use(hint(p.schema["title"]));
    if ([
      "object",
      "array"
    ].includes(p.schema.type ?? "")) {
      propSchemas[p.name] = x.use(inputBy(JSONEditorInput));
    } else {
      propSchemas[p.name] = x;
    }
  }
  if (props.operation.requestBody) {
    const first = Object.entries(props.operation.requestBody.content ?? {})[0];
    if (first) {
      const [contentType, content] = first;
      const x = JSONSchemaDecoder.decode(content.schema ?? {}, (ref) => {
        return [
          openapi$.schema(ref) ?? {},
          refName(ref)
        ];
      }).use(label(`body, content-type = ${JSON.stringify(contentType)}`));
      if (contentType.includes("text/")) {
        propSchemas["body"] = x;
      } else if (contentType.includes("octet-stream")) {
        propSchemas["body"] = x.use(inputBy(FileSelectInput));
      } else if (contentType.includes("image/")) {
        propSchemas["body"] = x.use(inputBy(FileSelectInput));
      } else {
        propSchemas["body"] = x.use(inputBy(JSONEditorInput));
      }
    }
  }
  const router = useRouter();
  const route = useRoute();
  const tryParseParams = () => {
    try {
      const params = route.query["params"];
      return JSON.parse(atob((Array.isArray(params) ? params[0] : params) ?? ""));
    } catch (err) {
    }
    return {};
  };
  const form$ = FormData.of(object(propSchemas), tryParseParams());
  rx(form$, tap((values) => {
    openapi$.request(props.operation.operationId, values);
  }), tap((values) => {
    void router.replace({
      query: {
        "params": btoa(JSON.stringify(values))
      }
    });
  }), subscribeUntilUnmount());
  const $requestPreview = rx(form$.inputs$, render((inputs) => {
    const createConfig = openapi$.asRequestConfigCreator(props.operation.operationId);
    if (!createConfig) {
      return null;
    }
    return /* @__PURE__ */ jsx(HttpRequest, {
      request: createConfig(inputs)
    });
  }));
  return () => {
    var _a;
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
      children: [
        /* @__PURE__ */ jsx(Box, {
          sx: {
            flex: 2,
            py: 24,
            display: "flex",
            flexDirection: "column",
            gap: 32,
            height: "100%",
            overflow: "auto"
          },
          children: [
            ...form$.fields(form$.typedef)
          ].map((f2) => {
            return /* @__PURE__ */ jsx(ParameterInput, {
              field$: f2
            });
          })
        }),
        /* @__PURE__ */ jsx(Box, {
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
                sx: {
                  px: 8
                },
                children: /* @__PURE__ */ jsx(FilledButton, {
                  type: "submit",
                  children: "发起请求"
                })
              }),
              /* @__PURE__ */ jsx(ResponsePreview, {
                operationID: props.operation.operationId
              }),
              /* @__PURE__ */ jsx(Box, {
                sx: {
                  flex: 1,
                  overflow: "auto"
                },
                children: (_a = slots.default) == null ? void 0 : _a.call(slots)
              })
            ]
          })
        })
      ]
    }, props.operation.operationId);
  };
});
const ParameterInput = component$((param, param1) => {
  let { field$ } = param, { render: render2 } = param1;
  onUnmounted(() => {
    field$.destroy();
  });
  return rx(combineLatest([
    field$,
    field$.input$
  ]), render2((param2) => {
    let [s, value] = param2;
    let Input = Schema.metaProp(field$.typedef, "inputBy") ?? TextInput;
    const readOnly = (Schema.metaProp(field$.typedef, "readOnlyWhenInitialExist") ?? false) && !!s.initial;
    return /* @__PURE__ */ jsx(TextField, {
      valued: !isUndefined(value ?? s.initial),
      invalid: !!s.error,
      focus: !!s.focus,
      $label: /* @__PURE__ */ jsxs("span", {
        children: [
          labelOrName(field$),
          field$.optional ? "（非必填）" : ""
        ]
      }),
      $supporting: /* @__PURE__ */ jsxs(Line, {
        children: [
          /* @__PURE__ */ jsx(Description, {
            schema: field$.typedef
          }),
          /* @__PURE__ */ jsx(SchemaView, {
            schema: field$.typedef
          })
        ]
      }),
      $trailing: Input.$trailing,
      children: /* @__PURE__ */ jsx(Input, {
        field$,
        readOnly
      })
    });
  }));
});
function labelOrName(field$) {
  return field$.meta.label ?? field$.name;
}
const TextInput = component({
  readOnly: boolean().optional(),
  field$: custom()
}, (props) => {
  return () => {
    const { readOnly, field$, ...others } = props;
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
              field$.update(field$.typedef.create(parseFloat(v)));
            } catch (e2) {
            }
            break;
          case "integer":
            try {
              field$.update(field$.typedef.create(parseInt(v)));
            } catch (e2) {
            }
            break;
          case "boolean":
            try {
              field$.update(field$.typedef.create(v !== "false" || !!v));
            } catch (e2) {
            }
            break;
          default:
            field$.update(field$.typedef.create(v));
        }
      },
      onFocus: () => field$.focus(),
      onBlur: () => field$.blur()
    });
  };
});
const FileSelectInput = component$((props) => {
  const file$ = observableRef(null);
  rx(file$, tap((file) => {
    if (file) {
      props.field$.update(file);
    }
  }), subscribeOnMountedUntilUnmount());
  return () => {
    var _a;
    const { readOnly, accept } = props;
    return /* @__PURE__ */ jsxs(Box, {
      component: "label",
      "data-input": true,
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        $data_file_input: {
          display: "none"
        },
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
            var _a2;
            const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
            if (file) {
              file$.value = file;
            }
          }
        }),
        /* @__PURE__ */ jsx(Icon, {
          path: mdiUploadBox
        }),
        /* @__PURE__ */ jsx("span", {
          children: (_a = file$.value) == null ? void 0 : _a.name
        })
      ]
    });
  };
});
const DatabaseErContainer = component$((props, param) => {
  let { render: render2 } = param;
  const openapi$ = OpenAPIProvider.use();
  onMounted(() => {
    openapi$.request(props.op.operationId, {});
  });
  return rx(openapi$.response$(props.op.operationId), render2((resp) => {
    return /* @__PURE__ */ jsx(DatabaseErView, {
      database: resp.body
    });
  }));
});
const DatabaseErView = component$((props) => {
  return () => {
    return /* @__PURE__ */ jsxs(DatabaseErMain, {
      children: [
        /* @__PURE__ */ jsx(DatabaseErHeader, {
          children: props.database.name
        }),
        Object.entries(props.database.tables).map((param) => {
          let [tableName, t] = param;
          return /* @__PURE__ */ jsx(DatabaseErTableView, {
            database: props.database,
            table: t,
            tableName
          });
        })
      ]
    });
  };
});
const DatabaseErTableView = component$((props, param) => {
  let { render: render2 } = param;
  const focus$ = new ImmerBehaviorSubject([]);
  return rx(focus$, render2((focusColumns) => {
    const columns = props.table.columns;
    const constraints = props.table.constraints;
    return /* @__PURE__ */ jsxs(DatabaseErTable, {
      open: true,
      children: [
        /* @__PURE__ */ jsxs(DatabaseErTableSummary, {
          children: [
            /* @__PURE__ */ jsx("span", {
              children: props.tableName
            }),
            /* @__PURE__ */ jsx(Spacer, {}),
            /* @__PURE__ */ jsx(DatabaseDescription, {
              meta: props.table
            })
          ]
        }),
        Object.keys(columns).map((colName) => {
          const col = columns[colName];
          return /* @__PURE__ */ jsxs(DatabaseErTableDef, {
            "data-hover": focusColumns.includes(colName),
            children: [
              /* @__PURE__ */ jsx(DatabaseErTableColumnName, {
                children: colName
              }),
              col.of ? /* @__PURE__ */ jsx(DatabaseErTableColumnOfView, {
                database: props.database,
                of: col.of
              }) : /* @__PURE__ */ jsx(DatabaseErTableColumnType, {
                children: col.type
              }),
              /* @__PURE__ */ jsx(DatabaseErTableColumnComment, {
                children: /* @__PURE__ */ jsx(DatabaseDescription, {
                  meta: col
                })
              })
            ]
          });
        }),
        Object.entries(constraints).map((param2) => {
          let [constraintName, constraint] = param2;
          return /* @__PURE__ */ jsx(DatabaseErTableDef, {
            onMouseover: () => {
              focus$.next(constraint.columnNames.map((x) => x.name));
            },
            onMouseleave: () => {
              focus$.next([]);
            },
            children: /* @__PURE__ */ jsxs(DatabaseErTableConstraintName, {
              "data-primary": constraint.primary,
              "data-unique": constraint.unique,
              children: [
                /* @__PURE__ */ jsx(Icon, {
                  path: constraint.unique ? mdiKeyOutline : mdiKey
                }),
                /* @__PURE__ */ jsx("span", {
                  children: constraintName
                }),
                /* @__PURE__ */ jsxs("span", {
                  children: [
                    "(",
                    constraint.columnNames.map((x) => [
                      x.name,
                      ...x.options ?? []
                    ].join(" ")).join(","),
                    ")"
                  ]
                })
              ]
            })
          });
        }),
        /* @__PURE__ */ jsx(Box, {
          sx: {
            py: 4
          }
        })
      ]
    });
  }));
});
const DatabaseErTableColumnOfView = component$((props, param) => {
  let { render: render2 } = param;
  const open$ = ImmerBehaviorSubject.seed(false);
  const $dialog = rx(open$, render2((open) => {
    const tableName = props.of.split(".")[0];
    return /* @__PURE__ */ jsx(Dialog, {
      isOpen: open,
      onClose: () => {
        open$.next(false);
      },
      children: /* @__PURE__ */ jsx(DialogContainer, {
        children: /* @__PURE__ */ jsx(DatabaseErTableView, {
          database: props.database,
          tableName,
          table: props.database.tables[tableName]
        })
      })
    });
  }));
  return () => {
    return /* @__PURE__ */ jsxs(DatabaseErTableColumnOf, {
      onClick: () => {
        open$.next(true);
      },
      children: [
        props.of,
        $dialog
      ]
    });
  };
});
const DatabaseErMain = styled("div")({
  py: 18,
  px: 24,
  flex: 1,
  overflow: "auto"
});
const DatabaseErHeader = styled("div")({
  py: 8,
  px: 16,
  textStyle: "sys.label-large"
});
const DatabaseErTable = styled("details")({
  "& + &": {
    mt: 16
  },
  rounded: "sm",
  border: "1px solid",
  borderColor: variant("sys.outline-variant", alpha(0.38)),
  overflow: "hidden",
  width: "100%"
});
const DatabaseErTableSummary = styled("summary")({
  textStyle: "sys.label-large",
  py: 8,
  px: 16,
  display: "flex",
  color: "sys.primary"
});
const DatabaseErTableDef = styled("div")({
  px: 16,
  py: 4,
  display: "flex",
  _hover: {
    containerStyle: "sys.surface-container-low"
  }
});
const DatabaseErTableColumnName = styled("div")({
  display: "flex",
  width: "20vw",
  textStyle: "sys.label-small",
  font: "code"
});
const DatabaseErTableColumnComment = styled("div")({
  display: "flex",
  textStyle: "sys.label-small",
  width: "20vw",
  justifyContent: "end"
});
const DatabaseErTableColumnOf = styled("div")({
  flex: 1,
  textStyle: "sys.label-small",
  font: "code",
  fontWeight: "bold",
  color: "sys.primary",
  _hover: {
    cursor: "pointer"
  }
});
const DatabaseErTableColumnType = styled("div")({
  flex: 1,
  textStyle: "sys.label-small"
});
const DatabaseDescription = styled("div", (props, param) => {
  return (Root) => {
    return /* @__PURE__ */ jsxs(Root, {
      children: [
        props.meta.title,
        " ",
        props.meta.description ? /* @__PURE__ */ jsx(Tooltip, {
          title: /* @__PURE__ */ jsx(MarkdownContainer, {
            children: /* @__PURE__ */ jsx(Markdown, {
              text: props.meta.description
            })
          }),
          children: /* @__PURE__ */ jsx(Icon, {
            path: mdiHelpBox
          })
        }) : null
      ]
    });
  };
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
const DialogContainer = styled("div")({
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
const DatabaseErTableConstraintName = styled("div")({
  flex: 1,
  textStyle: "sys.label-small",
  font: "code",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "1em",
  _primary: {
    [`${Icon}`]: {
      color: "sys.primary"
    }
  },
  _unique: {
    [`${Icon}`]: {
      position: "relative",
      "&::before": {
        content: JSON.stringify("1"),
        position: "absolute",
        right: -6,
        textStyle: "sys.label-small",
        fontSize: 8
      }
    }
  }
});
const Spacer = styled("div")({
  flex: 1
});
const PreWithMermaid = styled("pre", (param, param1) => {
  let { slots } = param1;
  return (Root) => {
    var _a;
    const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
    const child = children == null ? void 0 : children[0];
    if (child && child.props.className === "language-mermaid") {
      return /* @__PURE__ */ jsx(Mermaid, {
        code: child.children
      });
    }
    return /* @__PURE__ */ jsx(Root, {
      children
    });
  };
})({});
const Mermaid = component$((props, param) => {
  const $el = observableRef(null);
  rx($el, switchMap((el) => {
    if (el) {
      return from((async () => {
        const { default: mermaid } = await __vitePreload(async () => {
          const { default: mermaid2 } = await import("./vendor-min-mermaid~mermaid.esm.min.dxqLHM8_.chunk.js");
          return {
            default: mermaid2
          };
        }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]) : void 0);
        await mermaid.run({
          nodes: [
            el
          ]
        });
      })());
    }
    return EMPTY;
  }), subscribeOnMountedUntilUnmount());
  return () => {
    return /* @__PURE__ */ jsx(MermaidContainer, {
      ref: $el,
      class: "mermaid",
      children: props.code
    });
  };
});
const MermaidContainer = styled("div")({
  "& > svg": {
    minWidth: "80%"
  }
});
const OperationView = component$((props, param) => {
  const openapi$ = OpenAPIProvider.use();
  const op$ = rx(props.operationId$, switchMap((operationId) => openapi$.operation$(operationId)));
  const opExists$ = rx(op$, filter((op) => !!op));
  const open$ = ImmerBehaviorSubject.seed(false);
  const $descInDialog = rx(opExists$, render((op) => {
    return op.description ? /* @__PURE__ */ jsx(Markdown, {
      text: op.description,
      components: {
        pre: PreWithMermaid
      }
    }) : null;
  }));
  const $dialog = rx(open$, render((open) => {
    return /* @__PURE__ */ jsx(Dialog, {
      isOpen: open,
      onClose: () => {
        open$.next(false);
      },
      children: /* @__PURE__ */ jsx(DialogContainer2, {
        children: /* @__PURE__ */ jsx(MarkdownContainer, {
          children: $descInDialog
        })
      })
    });
  }));
  const DialogContainer2 = styled("div")({
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
    pre: {
      width: "100%"
    },
    "svg,img": {
      display: "block",
      m: "0 auto"
    }
  });
  const $descBtn = rx(opExists$, render((op) => {
    return op.description ? /* @__PURE__ */ jsxs(IconButton, {
      onClick: () => {
        open$.next(true);
      },
      children: [
        /* @__PURE__ */ jsx(Icon, {
          path: mdiHelp
        }),
        $dialog
      ]
    }) : null;
  }));
  const $requestBuilder = rx(opExists$, render((op) => {
    return /* @__PURE__ */ jsx(RequestBuilder, {
      operation: op,
      children: /* @__PURE__ */ jsx(Fragment, {
        children: Object.entries(op.responses ?? {}).map((param2) => {
          let [code, response] = param2;
          return /* @__PURE__ */ jsx(ResponseView, {
            code,
            response
          }, code);
        })
      })
    }, op.operationId);
  }));
  const $heading = rx(opExists$, render((op) => {
    return /* @__PURE__ */ jsxs(OperationHeading, {
      sx: {
        containerStyle: {
          get: "sys.primary-container",
          post: "sys.success-container",
          put: "sys.warning-container",
          delete: "sys.error-container"
        }[op.method] ?? "sys.secondary-container"
      },
      children: [
        /* @__PURE__ */ jsx("div", {
          "data-operation-method": true,
          children: op.method
        }),
        /* @__PURE__ */ jsxs("div", {
          "data-operation-desc": true,
          children: [
            /* @__PURE__ */ jsx("div", {
              "data-operation-path": true,
              children: op.path
            }),
            /* @__PURE__ */ jsxs("div", {
              "data-operation-summary": true,
              children: [
                op.summary,
                " ",
                op.operationId != op.summary ? op.operationId : ""
              ]
            })
          ]
        }),
        /* @__PURE__ */ jsx(Box, {
          sx: {
            flex: 1
          }
        }),
        $descBtn
      ]
    });
  }));
  return rx(op$, render((op) => {
    if (!op) {
      return null;
    }
    if (op.operationId == "SycDatabaseEr") {
      return /* @__PURE__ */ jsxs(OperationContainer, {
        children: [
          $heading,
          /* @__PURE__ */ jsx(OperationMain, {
            children: /* @__PURE__ */ jsx(DatabaseErContainer, {
              op
            })
          })
        ]
      }, op.operationId);
    }
    return /* @__PURE__ */ jsxs(OperationContainer, {
      children: [
        $heading,
        /* @__PURE__ */ jsx(OperationMain, {
          children: /* @__PURE__ */ jsx(Box, {
            sx: {
              flex: 1,
              overflow: "auto"
            },
            children: $requestBuilder
          })
        })
      ]
    }, op.operationId);
  }));
});
const OperationContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch"
});
const OperationMain = styled("div")({
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch"
});
const OperationHeading = styled("summary")({
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
  $data_operation_path: {
    fontFamily: "code"
  },
  $data_operation_summary: {
    opacity: 0.8,
    textStyle: "sys.body-small"
  }
});
export {
  OpenAPIProvider as O,
  OperationView as a,
  OpenAPIView as b
};
