const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webapp-openapi-playground-page.CJ2Db6C1.chunk.js","assets/vendor-min-mermaid~architectureDiagram-4X3Z3J56.BkPEXsWQ.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BA2pzSbr.chunk.js","assets/vendor-innoai-tech-vueuikit.K3ZkBcVq.chunk.js","assets/vendor-innoai-tech-vuekit.CUMstO-e.chunk.js","assets/vendor-rxjs.SmEpAT9z.chunk.js","assets/rolldown-runtime.CCUY1tSp.chunk.js","assets/vendor-innoai-tech-fetcher.CYUaQaag.chunk.js","assets/vendor-innoai-tech-jsoneditor.VUSYOEK_.chunk.js","assets/lib-nodepkg-vueformdata.Dgbwxq-V.chunk.js","assets/webapp-openapi-playground-mod-openapi.Cp8CJrRJ.chunk.js","assets/webapp-openapi-playground-page-operations.B1bPlHy4.chunk.js"])))=>i.map(i=>d[i]);
import { H as component, L as RouterView, R as createRouter, h as tap, j as from, l as subscribeOnMountedUntilUnmount, m as rx, o as jsx, s as jsxs, t as createProvider, z as createWebHistory } from "./vendor-innoai-tech-vuekit.CUMstO-e.chunk.js";
import { a as GlobalStyle, c as ThemeProvider, i as CSSReset, m as createApp } from "./vendor-innoai-tech-vueuikit.K3ZkBcVq.chunk.js";
import { i as transformRequestBody, r as paramsSerializer, t as createFetcher } from "./vendor-innoai-tech-fetcher.CYUaQaag.chunk.js";
import { n as OpenAPIView, r as OpenAPIProvider } from "./webapp-openapi-playground-mod-openapi.Cp8CJrRJ.chunk.js";
import { Nn as __vitePreload } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BkPEXsWQ.chunk.js";
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = /* @__PURE__ */ getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
var normalize_default = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";
var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var isBase64 = (v) => {
	if (v === "") return false;
	return base64regex.test(v);
};
var parse = (s) => {
	const kvs = /* @__PURE__ */ s.split(",");
	const c = {};
	for (const kv of kvs) {
		if (kv === "") continue;
		const [k, ...vs] = kv.split("=");
		const v = /* @__PURE__ */ vs.join("=");
		if (isBase64(v)) c[k] = /* @__PURE__ */ atob(v);
		else c[k] = v;
	}
	return c;
};
var getWebAppConfigValue = (key) => {
	return globalThis.document?.querySelector(`meta[name="webapp:${key}"]`)?.getAttribute("content") || "";
};
var getAppBaseHref = () => {
	return globalThis.document?.querySelector("base")?.getAttribute("href") || "/";
};
var confLoader = () => {
	const base = /* @__PURE__ */ parse(/* @__PURE__ */ getWebAppConfigValue("base"));
	const config = /* @__PURE__ */ parse(/* @__PURE__ */ getWebAppConfigValue("config"));
	return () => {
		return {
			...base,
			...config,
			baseHref: /* @__PURE__ */ getAppBaseHref()
		};
	};
};
const CONFIG = {
	name: "OpenAPI Playground",
	group: "",
	manifest: { crossorigin: "use-credentials" },
	config: { OPENAPI: ({}) => {
		return "";
	} }
};
var config_default = /* @__PURE__ */ confLoader();
const ManifestProvider = /* @__PURE__ */ createProvider(() => ({ name: "undefined" }), { name: "Manifest" });
var fixBaseURL = (baseURL) => {
	if (baseURL) {
		if (baseURL.startsWith("//")) return `${location.protocol}${baseURL}`;
		if (baseURL.startsWith("/")) return `${location.origin}${baseURL}`;
		return baseURL;
	}
	return location.origin;
};
var App = /* @__PURE__ */ component(() => {
	const c = /* @__PURE__ */ config_default();
	const openapi$ = /* @__PURE__ */ OpenAPIProvider.use();
	const fetcher = /* @__PURE__ */ createFetcher({
		paramsSerializer,
		transformRequestBody
	});
	console.log(/* @__PURE__ */ fixBaseURL(c.OPENAPI));
	const url = new URL(fixBaseURL(c.OPENAPI));
	rx(/* @__PURE__ */ from(/* @__PURE__ */ fetcher.request({
		method: "GET",
		url: /* @__PURE__ */ url.toString(),
		inputs: null
	})), /* @__PURE__ */ tap((resp) => {
		openapi$.next((o) => {
			Object.assign(o, resp.body);
			if (!o.servers) o.servers = [{ url: url.origin }];
		});
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	return () => {
		return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
			/* @__PURE__ */ jsx(CSSReset, {}),
			/* @__PURE__ */ jsx(GlobalStyle, { styles: normalize_default }),
			/* @__PURE__ */ jsxs(ManifestProvider, {
				value: {
					name: c.name,
					description: CONFIG.manifest["description"]
				},
				children: [
					/* @__PURE__ */ jsx(CSSReset, {}),
					/* @__PURE__ */ jsx(GlobalStyle, { styles: normalize_default }),
					/* @__PURE__ */ jsx(RouterView, {})
				]
			})
		] });
	};
}, { displayName: "App" });
var page_default = /* @__PURE__ */ component(() => () => /* @__PURE__ */ jsx(OpenAPIView, {}));
var __pages_import_0__ = () => __vitePreload(() => import("./webapp-openapi-playground-page.CJ2Db6C1.chunk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));
var __pages_import_1__ = () => __vitePreload(() => import("./webapp-openapi-playground-page-operations.B1bPlHy4.chunk.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]));
var generated_pages_id__pages_default = [{
	"name": "operations",
	"path": "/operations",
	"component": __pages_import_0__,
	"children": [{
		"name": "operations-operationId",
		"path": ":operationId",
		"component": __pages_import_1__,
		"props": true
	}],
	"props": true
}, {
	"name": "index",
	"path": "/",
	"component": page_default,
	"props": true
}];
var router = /* @__PURE__ */ createRouter({
	history: /* @__PURE__ */ createWebHistory(new URL(document.querySelector("base")?.href ?? "/").pathname),
	routes: generated_pages_id__pages_default
});
createApp(App).use(router).mount("#root");
