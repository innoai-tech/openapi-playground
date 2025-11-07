const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webapp-openapi-playground-page.0I4el5cM.chunk.js","assets/vendor-min-mermaid~architectureDiagram-4X3Z3J56.DWYnMD9N.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BHePMx5P.chunk.js","assets/vendor-innoai-tech-vueuikit.FUYLyU58.chunk.js","assets/vendor-innoai-tech-vuekit.DnGUFH6p.chunk.js","assets/vendor-rxjs.Bnzpw5oq.chunk.js","assets/rolldown-runtime.BUi7Tn5u.chunk.js","assets/vendor-innoai-tech-fetcher.DL-yvDAz.chunk.js","assets/vendor-innoai-tech-jsoneditor.5MZ97n1G.chunk.js","assets/lib-nodepkg-vueformdata.06XQQXp8.chunk.js","assets/webapp-openapi-playground-mod-openapi.D47MTYso.chunk.js","assets/webapp-openapi-playground-page-operations.DhOaUoAk.chunk.js"])))=>i.map(i=>d[i]);
import { H as n, L as e, R as t, h as o, j as i, l as r, m as a, o as s, s as l, t as c, z as d } from "./vendor-innoai-tech-vuekit.DnGUFH6p.chunk.js";
import { a as p, c as m, i as h, m as u } from "./vendor-innoai-tech-vueuikit.FUYLyU58.chunk.js";
import { i as f, r as b, t as g } from "./vendor-innoai-tech-fetcher.DL-yvDAz.chunk.js";
import { n as y, r as v } from "./webapp-openapi-playground-mod-openapi.D47MTYso.chunk.js";
import { Nn as w } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.DWYnMD9N.chunk.js";
let x = document.createElement("link").relList;
if (!(x && x.supports && x.supports("modulepreload"))) {
	for (let n of document.querySelectorAll("link[rel=\"modulepreload\"]")) z(n);
	new MutationObserver((n) => {
		for (let e of n) if ("childList" === e.type) for (let n of e.addedNodes) "LINK" === n.tagName && "modulepreload" === n.rel && z(n);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
}
function z(n) {
	if (n.ep) return;
	n.ep = !0;
	let e = function(n) {
		let e = {};
		return n.integrity && (e.integrity = n.integrity), n.referrerPolicy && (e.referrerPolicy = n.referrerPolicy), "use-credentials" === n.crossOrigin ? e.credentials = "include" : "anonymous" === n.crossOrigin ? e.credentials = "omit" : e.credentials = "same-origin", e;
	}(n);
	fetch(n.href, e);
}
var E = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", k = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, C = (n) => "" !== n && k.test(n), I = (n) => {
	let e = n.split(","), t = {};
	for (let n of e) {
		if ("" === n) continue;
		let [e, ...o] = n.split("="), i = o.join("=");
		C(i) ? t[e] = atob(i) : t[e] = i;
	}
	return t;
}, S = (n) => globalThis.document?.querySelector(`meta[name="webapp:${n}"]`)?.getAttribute("content") || "";
let A = { crossorigin: "use-credentials" };
var R = (() => {
	let n = I(S("base")), e = I(S("config"));
	return () => ({
		...n,
		...e,
		baseHref: globalThis.document?.querySelector("base")?.getAttribute("href") || "/"
	});
})();
let O = c(() => ({ name: "undefined" }), { name: "Manifest" });
var j = (n) => n ? n.startsWith("//") ? `${location.protocol}${n}` : n.startsWith("/") ? `${location.origin}${n}` : n : location.origin, P = n(() => {
	let n = R(), t = v.use(), c = g({
		paramsSerializer: b,
		transformRequestBody: f
	});
	console.log(j(n.OPENAPI));
	let d = new URL(j(n.OPENAPI));
	return a(i(c.request({
		method: "GET",
		url: d.toString(),
		inputs: null
	})), o((n) => {
		t.next((e) => {
			Object.assign(e, n.body), e.servers || (e.servers = [{ url: d.origin }]);
		});
	}), r()), () => l(m, { children: [
		s(h, {}),
		s(p, { styles: E }),
		l(O, {
			value: {
				name: n.name,
				description: A.description
			},
			children: [
				s(h, {}),
				s(p, { styles: E }),
				s(e, {})
			]
		})
	] });
}, { displayName: "App" }), F = n(() => () => s(y, {})), L = t({
	history: d(new URL(document.querySelector("base")?.href ?? "/").pathname),
	routes: [{
		name: "operations",
		path: "/operations",
		component: () => w(() => import("./webapp-openapi-playground-page.0I4el5cM.chunk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),
		children: [{
			name: "operations-operationId",
			path: ":operationId",
			component: () => w(() => import("./webapp-openapi-playground-page-operations.DhOaUoAk.chunk.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10])),
			props: !0
		}],
		props: !0
	}, {
		name: "index",
		path: "/",
		component: F,
		props: !0
	}]
});
u(P).use(L).mount("#root");
