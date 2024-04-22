const __vite__fileDeps=["assets/webapp-openapi-playground-page.yu_EgLw-.chunk.js","assets/webapp-openapi-playground-mod-openapi.DIfwng8-.chunk.js","assets/webapp-openapi-playground-page-operations.CPf0K1AQ.chunk.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var n, e;
import { c as t, a as o, O as i, r, f as a, j as s, b as l, s as d, t as c, p, d as m, e as h, C as u, G as f, R as b, T as g, g as y, h as v, i as E, k as w } from "./webapp-openapi-playground-mod-openapi.DIfwng8-.chunk.js";
(function() {
  let n2 = document.createElement("link").relList;
  if (!(n2 && n2.supports && n2.supports("modulepreload"))) {
    for (let n3 of document.querySelectorAll('link[rel="modulepreload"]'))
      e2(n3);
    new MutationObserver((n3) => {
      for (let t2 of n3)
        if ("childList" === t2.type)
          for (let n4 of t2.addedNodes)
            "LINK" === n4.tagName && "modulepreload" === n4.rel && e2(n4);
    }).observe(document, { childList: true, subtree: true });
  }
  function e2(n3) {
    if (n3.ep)
      return;
    n3.ep = true;
    let e3 = function(n4) {
      let e4 = {};
      return n4.integrity && (e4.integrity = n4.integrity), n4.referrerPolicy && (e4.referrerPolicy = n4.referrerPolicy), "use-credentials" === n4.crossOrigin ? e4.credentials = "include" : "anonymous" === n4.crossOrigin ? e4.credentials = "omit" : e4.credentials = "same-origin", e4;
    }(n3);
    fetch(n3.href, e3);
  }
})();
let _ = '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n', x = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, z = (n2) => "" !== n2 && x.test(n2), I = (n2) => {
  let e2 = n2.split(","), t2 = {};
  for (let n3 of e2) {
    if ("" === n3)
      continue;
    let [e3, ...o2] = n3.split("="), i2 = o2.join("=");
    z(i2) ? t2[e3] = atob(i2) : t2[e3] = i2;
  }
  return t2;
}, S = (n2) => {
  var e2, t2;
  return (null === (t2 = globalThis.document) || void 0 === t2 ? void 0 : null === (e2 = t2.querySelector(`meta[name="webapp:${n2}"]`)) || void 0 === e2 ? void 0 : e2.getAttribute("content")) || "";
}, k = { crossorigin: "use-credentials" }, C = (() => {
  let n2 = I(S("base")), e2 = I(S("config"));
  return () => ({ ...n2, ...e2 });
})(), A = t(() => ({ name: "undefined" }), { name: "Manifest" }), R = (n2) => n2 ? n2.startsWith("//") ? `${location.protocol}${n2}` : n2.startsWith("/") ? `${location.origin}${n2}` : n2 : location.origin, O = Object.assign(o(() => {
  let n2 = C(), e2 = i.use(), t2 = l({ paramsSerializer: p, transformRequestBody: m });
  console.log(R(n2.OPENAPI));
  let o2 = new URL(R(n2.OPENAPI));
  return r(a(t2.request({ method: "GET", url: o2.toString(), inputs: null })), c((n3) => {
    e2.next((e3) => {
      Object.assign(e3, n3.body), e3.servers || (e3.servers = [{ url: o2.origin }]);
    });
  }), d()), () => s(g, { children: [h(u, {}), h(f, { styles: _ }), s(A, { value: { name: n2.name, description: k.description }, children: [h(u, {}), h(f, { styles: _ }), h(b, {})] })] });
}), { displayName: "App" }), P = {}, T = function(n2, e2, t2) {
  let o2 = Promise.resolve();
  if (e2 && e2.length > 0) {
    let n3 = document.getElementsByTagName("link"), i2 = document.querySelector("meta[property=csp-nonce]"), r2 = (null == i2 ? void 0 : i2.nonce) || (null == i2 ? void 0 : i2.getAttribute("nonce"));
    o2 = Promise.all(e2.map((e3) => {
      if ((e3 = "/__APP_BASE_HREF__/" + e3) in P)
        return;
      P[e3] = true;
      let o3 = e3.endsWith(".css");
      if (t2)
        for (let t3 = n3.length - 1; t3 >= 0; t3--) {
          let i4 = n3[t3];
          if (i4.href === e3 && (!o3 || "stylesheet" === i4.rel))
            return;
        }
      else if (document.querySelector(`link[href="${e3}"]${o3 ? '[rel="stylesheet"]' : ""}`))
        return;
      let i3 = document.createElement("link");
      if (i3.rel = o3 ? "stylesheet" : "modulepreload", o3 || (i3.as = "script", i3.crossOrigin = ""), i3.href = e3, r2 && i3.setAttribute("nonce", r2), document.head.appendChild(i3), o3)
        return new Promise((n4, t3) => {
          i3.addEventListener("load", n4), i3.addEventListener("error", () => t3(Error(`Unable to preload CSS for ${e3}`)));
        });
    }));
  }
  return o2.then(() => n2()).catch((n3) => {
    let e3 = new Event("vite:preloadError", { cancelable: true });
    if (e3.payload = n3, window.dispatchEvent(e3), !e3.defaultPrevented)
      throw n3;
  });
}, N = Object.assign(o(() => () => h(y, {})), { displayName: "IndexDefault" }), F = v({ history: E(new URL(null !== (e = null === (n = document.querySelector("base")) || void 0 === n ? void 0 : n.href) && void 0 !== e ? e : "/").pathname), routes: [{ name: "operations", path: "/operations", component: () => T(() => import("./webapp-openapi-playground-page.yu_EgLw-.chunk.js"), true ? __vite__mapDeps([0,1]) : void 0), children: [{ name: "operations-operationId", path: ":operationId", component: () => T(() => import("./webapp-openapi-playground-page-operations.CPf0K1AQ.chunk.js"), true ? __vite__mapDeps([2,1]) : void 0), props: true }], props: true }, { name: "index", path: "/", component: N, props: true }] });
w(O).use(F).mount("#root");
