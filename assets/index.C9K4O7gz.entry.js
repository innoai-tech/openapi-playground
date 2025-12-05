const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webapp-openapi-playground-page.CUVepEjM.chunk.js","assets/vendor-min-mermaid~architectureDiagram-4X3Z3J56.BpJofp52.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.j2WEiM7o.chunk.js","assets/vendor-innoai-tech-vueuikit.DqeK9qrJ.chunk.js","assets/vendor-innoai-tech-vuekit.CZKwDxMf.chunk.js","assets/vendor-rxjs.Dj1P1K2j.chunk.js","assets/rolldown-runtime.BTyDhE9Z.chunk.js","assets/vendor-innoai-tech-jsoneditor.D9LsVlBt.chunk.js","assets/lib-nodepkg-vueformdata.s2cQajqB.chunk.js","assets/webapp-openapi-playground-mod-openapi.D548tpQO.chunk.js","assets/vendor-innoai-tech-fetcher.C9niZ_ld.chunk.js","assets/webapp-openapi-playground-page-operations.3cb4xN-5.chunk.js"])))=>i.map(i=>d[i]);
import{H as e,L as t,R as n,h as r,j as i,l as a,m as o,o as s,s as c,t as l,z as u}from"./vendor-innoai-tech-vuekit.CZKwDxMf.chunk.js";import{a as d,c as f,i as p,m}from"./vendor-innoai-tech-vueuikit.DqeK9qrJ.chunk.js";import{i as h,r as g,t as _}from"./vendor-innoai-tech-fetcher.C9niZ_ld.chunk.js";import{n as v,r as y}from"./webapp-openapi-playground-mod-openapi.D548tpQO.chunk.js";import{Nn as b}from"./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BpJofp52.chunk.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var x=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`,S=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,C=e=>e===``?!1:S.test(e),w=e=>{let t=e.split(`,`),n={};for(let e of t){if(e===``)continue;let[t,...r]=e.split(`=`),i=r.join(`=`);C(i)?n[t]=atob(i):n[t]=i}return n},T=e=>globalThis.document?.querySelector(`meta[name="webapp:${e}"]`)?.getAttribute(`content`)||``,E=()=>globalThis.document?.querySelector(`base`)?.getAttribute(`href`)||`/`,D=()=>{let e=w(T(`base`)),t=w(T(`config`));return()=>({...e,...t,baseHref:E()})};const O={name:`OpenAPI Playground`,group:``,manifest:{crossorigin:`use-credentials`},config:{OPENAPI:({})=>``}};var k=D();const A=l(()=>({name:`undefined`}),{name:`Manifest`});var j=e=>e?e.startsWith(`//`)?`${location.protocol}${e}`:e.startsWith(`/`)?`${location.origin}${e}`:e:location.origin,M=e(()=>{let e=k(),n=y.use(),l=_({paramsSerializer:g,transformRequestBody:h});console.log(j(e.OPENAPI));let u=new URL(j(e.OPENAPI));return o(i(l.request({method:`GET`,url:u.toString(),inputs:null})),r(e=>{n.next(t=>{Object.assign(t,e.body),t.servers||=[{url:u.origin}]})}),a()),()=>c(f,{children:[s(p,{}),s(d,{styles:x}),c(A,{value:{name:e.name,description:O.manifest.description},children:[s(p,{}),s(d,{styles:x}),s(t,{})]})]})},{displayName:`App`}),N=[{name:`operations`,path:`/operations`,component:()=>b(()=>import(`./webapp-openapi-playground-page.CUVepEjM.chunk.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),children:[{name:`operations-operationId`,path:`:operationId`,component:()=>b(()=>import(`./webapp-openapi-playground-page-operations.3cb4xN-5.chunk.js`),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10])),props:!0}],props:!0},{name:`index`,path:`/`,component:e(()=>()=>s(v,{})),props:!0}],P=n({history:u(new URL(document.querySelector(`base`)?.href??`/`).pathname),routes:N});m(M).use(P).mount(`#root`);