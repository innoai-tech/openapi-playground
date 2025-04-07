const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webapp-openapi-playground-page.B6sTYhE8.chunk.js","assets/lib-nodepkg-vuekit.CtL-AQwf.chunk.js","assets/lib-nodepkg-typedef.CzjpWxrC.chunk.js","assets/vendor-rxjs.BO1Fdxz5.chunk.js","assets/vendor-innoai-tech-lodash.CDxVqk50.chunk.js","assets/webapp-openapi-playground-mod-openapi.CsJkrq7A.chunk.js","assets/vendor-innoai-tech-fetcher.DNVZV45V.chunk.js","assets/lib-nodepkg-vueuikit.CtMcShXR.chunk.js","assets/lib-nodepkg-vuemarkdown.CqPUQo9q.chunk.js","assets/lib-nodepkg-vuematerial.C1cIH2hj.chunk.js","assets/lib-nodepkg-vueformdata.CtrWbgbl.chunk.js","assets/lib-nodepkg-jsoneditor.BBY1fFvr.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload, s as string } from './lib-nodepkg-typedef.CzjpWxrC.chunk.js';
import { f as component, r as rx, v as subscribeOnMountedUntilUnmount, d as jsxs, j as jsx, R as RouterView, x as createRouter, y as createWebHistory, z as createApp } from './lib-nodepkg-vuekit.CtL-AQwf.chunk.js';
import { c as createFetcher, p as paramsSerializer, t as transformRequestBody } from './vendor-innoai-tech-fetcher.DNVZV45V.chunk.js';
import { C as CSSReset, G as GlobalStyle, T as ThemeProvider } from './lib-nodepkg-vueuikit.CtMcShXR.chunk.js';
import { M as ManifestProvider } from './webapp-openapi-playground-common-manifest.w3gUmVUd.chunk.js';
import { O as OpenAPIProvider, a as OperationView } from './webapp-openapi-playground-mod-openapi.CsJkrq7A.chunk.js';
import { t as tap, e as from } from './vendor-rxjs.BO1Fdxz5.chunk.js';
import { c as cIndexDefault } from './webapp-openapi-playground-page.B6sTYhE8.chunk.js';
import './vendor-innoai-tech-lodash.CDxVqk50.chunk.js';
import './lib-nodepkg-vuemarkdown.CqPUQo9q.chunk.js';
import './lib-nodepkg-vuematerial.C1cIH2hj.chunk.js';
import './lib-nodepkg-vueformdata.CtrWbgbl.chunk.js';
import './lib-nodepkg-jsoneditor.BBY1fFvr.chunk.js';

const normalizeCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";

const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const isBase64 = (v)=>{
    if (v === "") {
        return false;
    }
    return base64regex.test(v);
};
const parse = (s)=>{
    const kvs = /*#__PURE__*/ s.split(",");
    const c = {};
    for (const kv of kvs){
        if (kv === "") {
            continue;
        }
        const [k, ...vs] = kv.split("=");
        const v = /*#__PURE__*/ vs.join("=");
        if (isBase64(v)) {
            c[k] = /*#__PURE__*/ atob(v);
        } else {
            c[k] = v;
        }
    }
    return c;
};

const getWebAppConfigValue = (key)=>{
    return globalThis.document?.querySelector(`meta[name="webapp:${key}"]`)?.getAttribute("content") || "";
};
const getAppBaseHref = ()=>{
    return globalThis.document?.querySelector("base")?.getAttribute("href") || "/";
};
const confLoader = ()=>{
    const base = /*#__PURE__*/ parse(/*#__PURE__*/ getWebAppConfigValue("base"));
    const config = /*#__PURE__*/ parse(/*#__PURE__*/ getWebAppConfigValue("config"));
    return ()=>{
        return {
            ...base,
            ...config,
            baseHref: /*#__PURE__*/ getAppBaseHref()
        };
    };
};

const CONFIG = {
  manifest: {
    }};
const conf = confLoader();

const fixBaseURL = (baseURL) => {
  if (baseURL) {
    if (baseURL.startsWith("//")) {
      return `${location.protocol}${baseURL}`;
    }
    if (baseURL.startsWith("/")) {
      return `${location.origin}${baseURL}`;
    }
    return baseURL;
  }
  return location.origin;
};
const App = component(() => {
  const c = conf();
  const openapi$ = OpenAPIProvider.use();
  const fetcher = createFetcher({
    paramsSerializer,
    transformRequestBody
  });
  console.log(fixBaseURL(c.OPENAPI));
  const url = new URL(fixBaseURL(c.OPENAPI));
  rx(from(fetcher.request({
    method: "GET",
    url: url.toString(),
    inputs: null
  })), tap((resp) => {
    openapi$.next((o) => {
      Object.assign(o, resp.body);
      if (!o.servers) {
        o.servers = [
          {
            url: url.origin
          }
        ];
      }
    });
  }), subscribeOnMountedUntilUnmount());
  return () => {
    return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
      /* @__PURE__ */ jsx(CSSReset, {}),
      /* @__PURE__ */ jsx(GlobalStyle, { styles: normalizeCss }),
      /* @__PURE__ */ jsxs(ManifestProvider, { value: {
        name: c.name,
        description: CONFIG.manifest["description"]
      }, children: [
        /* @__PURE__ */ jsx(CSSReset, {}),
        /* @__PURE__ */ jsx(GlobalStyle, { styles: normalizeCss }),
        /* @__PURE__ */ jsx(RouterView, {})
      ] })
    ] });
  };
});

const __pages_import_0__ = () => __vitePreload(() => import('./webapp-openapi-playground-page.B6sTYhE8.chunk.js').then(n => n.o),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]):void 0);
const __pages_import_1__ = () => __vitePreload(() => Promise.resolve().then(() => _operationId_),true?void 0:void 0);

const routes = [{"name":"operations","path":"/operations","component":__pages_import_0__,"children":[{"name":"operations-operationId","path":":operationId","component":__pages_import_1__,"props":true}],"props":true},{"name":"index","path":"/","component":cIndexDefault,"props":true}];

const base = new URL(document.querySelector("base")?.href ?? "/");
const router = createRouter({
  history: createWebHistory(base.pathname),
  routes
});
createApp(App).use(router).mount("#root");

const cOperationIdDefault = component({
  operationId: string()
}, (props) => {
  return () => /* @__PURE__ */ jsx(OperationView, { operationId: props.operationId }, props.operationId);
});

const _operationId_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: cOperationIdDefault
}, Symbol.toStringTag, { value: 'Module' }));
