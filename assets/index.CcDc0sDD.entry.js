const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webapp-openapi-playground-page.B4kSo0b0.chunk.js","assets/lib-nodepkg-vuekit.BrSJ_ipC.chunk.js","assets/lib-nodepkg-typedef.D2OyHZDO.chunk.js","assets/webapp-openapi-playground-mod-openapi.BSOIjgpf.chunk.js","assets/lib-nodepkg-vueuikit.fvtR80zW.chunk.js","assets/lib-nodepkg-vuemarkdown.CKQcTMKp.chunk.js","assets/lib-nodepkg-vueformdata.Cynm5gqo.chunk.js","assets/lib-nodepkg-vuematerial.B3a4eGJX.chunk.js","assets/lib-nodepkg-codemirror.C1lpJ55M.chunk.js","assets/lib-nodepkg-jsoncue.BhKolm4y.chunk.js"])))=>i.map(i=>d[i]);
var n, e;
import { z as t, r as o, $ as i, w as r, a0 as a, a1 as s, v as l, a2 as d, a3 as p, a4 as c, a5 as m, a6 as h } from "./lib-nodepkg-vuekit.BrSJ_ipC.chunk.js";
import { s as b } from "./lib-nodepkg-typedef.D2OyHZDO.chunk.js";
import { O as u, c as f, p as g, t as y, a as v } from "./webapp-openapi-playground-mod-openapi.BSOIjgpf.chunk.js";
import { C as w, G as x, T as z } from "./lib-nodepkg-vueuikit.fvtR80zW.chunk.js";
import { M as E } from "./webapp-openapi-playground-common-manifest.BUWHPhob.chunk.js";
import { I } from "./webapp-openapi-playground-page.B4kSo0b0.chunk.js";
let k = '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n', _ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, C = (n2) => "" !== n2 && _.test(n2), S = (n2) => {
  let e2 = n2.split(","), t2 = {};
  for (let n3 of e2) {
    if ("" === n3) continue;
    let [e3, ...o2] = n3.split("="), i2 = o2.join("=");
    C(i2) ? t2[e3] = atob(i2) : t2[e3] = i2;
  }
  return t2;
}, R = (n2) => {
  var e2, t2;
  return (null === (t2 = globalThis.document) || void 0 === t2 ? void 0 : null === (e2 = t2.querySelector(`meta[name="webapp:${n2}"]`)) || void 0 === e2 ? void 0 : e2.getAttribute("content")) || "";
}, A = { crossorigin: "use-credentials" }, O = (() => {
  let n2 = S(R("base")), e2 = S(R("config"));
  return () => ({ ...n2, ...e2 });
})(), j = (n2) => n2 ? n2.startsWith("//") ? `${location.protocol}${n2}` : n2.startsWith("/") ? `${location.origin}${n2}` : n2 : location.origin, T = t(() => {
  let n2 = O(), e2 = u.use(), t2 = f({ paramsSerializer: g, transformRequestBody: y });
  console.log(j(n2.OPENAPI));
  let p2 = new URL(j(n2.OPENAPI));
  return o(i(t2.request({ method: "GET", url: p2.toString(), inputs: null })), s((n3) => {
    e2.next((e3) => {
      Object.assign(e3, n3.body), e3.servers || (e3.servers = [{ url: p2.origin }]);
    });
  }), a()), () => r(z, { children: [l(w, {}), l(x, { styles: k }), r(E, { value: { name: n2.name, description: A.description }, children: [l(w, {}), l(x, { styles: k }), l(d, {})] })] });
}, { displayName: "App" }), F = [{ name: "operations", path: "/operations", component: () => p(() => import("./webapp-openapi-playground-page.B4kSo0b0.chunk.js").then((n2) => n2.o), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0), children: [{ name: "operations-operationId", path: ":operationId", component: () => p(() => Promise.resolve().then(() => $), true ? void 0 : void 0), props: true }], props: true }, { name: "index", path: "/", component: I, props: true }], P = c({ history: m(new URL(null !== (e = null === (n = document.querySelector("base")) || void 0 === n ? void 0 : n.href) && void 0 !== e ? e : "/").pathname), routes: F });
h(T).use(P).mount("#root");
let $ = Object.freeze(Object.defineProperty({ __proto__: null, default: t({ operationId: b() }, (n2) => () => l(v, { operationId: n2.operationId }, n2.operationId)) }, Symbol.toStringTag, { value: "Module" }));