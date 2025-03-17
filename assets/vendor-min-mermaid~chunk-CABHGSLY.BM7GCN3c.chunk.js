const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-QMPBEAWE-NWBFRUMA.BZJWYMl2.chunk.js","assets/vendor-min-mermaid~chunk-TFYMJ66S.cQPYMR2B.chunk.js","assets/vendor-min-mermaid~chunk-AXOSD5AS.pM-XJGXE.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.C1fDHJEj.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.Df5Nckn-.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.DKNoSLq2.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js","assets/vendor-min-mermaid~packet-4R277E7S-3A5RWBGC.BitphYl7.chunk.js","assets/vendor-min-mermaid~chunk-6BTRZBB2.CH-mvCgZ.chunk.js","assets/vendor-min-mermaid~pie-NQMYZUIH-RFNRYPAS.kayqgS-m.chunk.js","assets/vendor-min-mermaid~chunk-GVHZW3KH.BW5mU8HC.chunk.js","assets/vendor-min-mermaid~architecture-U773IC73-ASVDXQKI.BG4Uj_1J.chunk.js","assets/vendor-min-mermaid~chunk-PSZK2YMM.DC-fRjEo.chunk.js","assets/vendor-min-mermaid~gitGraph-WSSBKK6M-L23UEOVH.CwFF2pNN.chunk.js","assets/vendor-min-mermaid~chunk-2LOXN5UN.DTM2iVGB.chunk.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { _ as __vitePreload } from "./lib-nodepkg-typedef.BgZlbiby.chunk.js";
import { j } from "./vendor-min-mermaid~chunk-AXOSD5AS.pM-XJGXE.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var a = {}, n = {
  info: /* @__PURE__ */ j(async () => {
    let { createInfoServices: e } = await __vitePreload(async () => {
      const { createInfoServices: e2 } = await import("./vendor-min-mermaid~info-QMPBEAWE-NWBFRUMA.BZJWYMl2.chunk.js");
      return {
        createInfoServices: e2
      };
    }, true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0), r = e().Info.parser.LangiumParser;
    a.info = r;
  }, "info"),
  packet: /* @__PURE__ */ j(async () => {
    let { createPacketServices: e } = await __vitePreload(async () => {
      const { createPacketServices: e2 } = await import("./vendor-min-mermaid~packet-4R277E7S-3A5RWBGC.BitphYl7.chunk.js");
      return {
        createPacketServices: e2
      };
    }, true ? __vite__mapDeps([7,8,2,3,4,5,6]) : void 0), r = e().Packet.parser.LangiumParser;
    a.packet = r;
  }, "packet"),
  pie: /* @__PURE__ */ j(async () => {
    let { createPieServices: e } = await __vitePreload(async () => {
      const { createPieServices: e2 } = await import("./vendor-min-mermaid~pie-NQMYZUIH-RFNRYPAS.kayqgS-m.chunk.js");
      return {
        createPieServices: e2
      };
    }, true ? __vite__mapDeps([9,10,2,3,4,5,6]) : void 0), r = e().Pie.parser.LangiumParser;
    a.pie = r;
  }, "pie"),
  architecture: /* @__PURE__ */ j(async () => {
    let { createArchitectureServices: e } = await __vitePreload(async () => {
      const { createArchitectureServices: e2 } = await import("./vendor-min-mermaid~architecture-U773IC73-ASVDXQKI.BG4Uj_1J.chunk.js");
      return {
        createArchitectureServices: e2
      };
    }, true ? __vite__mapDeps([11,12,2,3,4,5,6]) : void 0), r = e().Architecture.parser.LangiumParser;
    a.architecture = r;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ j(async () => {
    let { createGitGraphServices: e } = await __vitePreload(async () => {
      const { createGitGraphServices: e2 } = await import("./vendor-min-mermaid~gitGraph-WSSBKK6M-L23UEOVH.CwFF2pNN.chunk.js");
      return {
        createGitGraphServices: e2
      };
    }, true ? __vite__mapDeps([13,14,2,3,4,5,6]) : void 0), r = e().GitGraph.parser.LangiumParser;
    a.gitGraph = r;
  }, "gitGraph")
};
async function p(e, r) {
  let i = n[e];
  if (!i) throw new Error(`Unknown diagram type: ${e}`);
  a[e] || await i();
  let s = /* @__PURE__ */ a[e].parse(r);
  if (s.lexerErrors.length > 0 || s.parserErrors.length > 0) throw new m(s);
  return s.value;
}
m$1(p, "parse");
j(p, "parse");
var m = (_a = class extends Error {
  constructor(e) {
    let r = /* @__PURE__ */ e.lexerErrors.map((c) => c.message).join(`
`), i = /* @__PURE__ */ e.parserErrors.map((c) => c.message).join(`
`);
    super(`Parsing failed: ${r} ${i}`), this.result = e;
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "MermaidParseError")), __privateAdd(_a, __2, j(_a, "MermaidParseError")), _a);
export {
  p
};
