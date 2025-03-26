const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-4N47QTOZ-2BEI6D6A.DF0MIaJA.chunk.js","assets/vendor-min-mermaid~chunk-SWO474TD.DCTGh7v5.chunk.js","assets/vendor-min-mermaid~chunk-JVB3IFOF.Df_azfO7.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.XQW5ctaF.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.Df5Nckn-.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.DKNoSLq2.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js","assets/vendor-min-mermaid~packet-KVYON367-D24LN7JZ.DJjvaTVE.chunk.js","assets/vendor-min-mermaid~chunk-237OD7E6.D6jm2gca.chunk.js","assets/vendor-min-mermaid~pie-R6RNRRYF-FUPP6FTN.BHMBWWWM.chunk.js","assets/vendor-min-mermaid~chunk-ZWYQHTDX.BVJRc7xP.chunk.js","assets/vendor-min-mermaid~architecture-4AB2E3PP-7QDGZQEU.BmjM9P2P.chunk.js","assets/vendor-min-mermaid~chunk-DDW4HWGY.BptMvdxT.chunk.js","assets/vendor-min-mermaid~gitGraph-O2Q2CXLX-CIPL3GNK.B11RJ6CX.chunk.js","assets/vendor-min-mermaid~chunk-NA3436M7.5odQ7DMq.chunk.js","assets/vendor-min-mermaid~radar-MK3ICKWK-KPFLJ5ZN.B_dcCUMF.chunk.js","assets/vendor-min-mermaid~chunk-RRF4A5XS.DopzNfXv.chunk.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { _ as __vitePreload } from "./lib-nodepkg-typedef.BgZlbiby.chunk.js";
import { U } from "./vendor-min-mermaid~chunk-JVB3IFOF.Df_azfO7.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var t = {}, n = {
  info: /* @__PURE__ */ U(async () => {
    let { createInfoServices: e } = await __vitePreload(async () => {
      const { createInfoServices: e2 } = await import("./vendor-min-mermaid~info-4N47QTOZ-2BEI6D6A.DF0MIaJA.chunk.js");
      return {
        createInfoServices: e2
      };
    }, true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0), r = e().Info.parser.LangiumParser;
    t.info = r;
  }, "info"),
  packet: /* @__PURE__ */ U(async () => {
    let { createPacketServices: e } = await __vitePreload(async () => {
      const { createPacketServices: e2 } = await import("./vendor-min-mermaid~packet-KVYON367-D24LN7JZ.DJjvaTVE.chunk.js");
      return {
        createPacketServices: e2
      };
    }, true ? __vite__mapDeps([7,8,2,3,4,5,6]) : void 0), r = e().Packet.parser.LangiumParser;
    t.packet = r;
  }, "packet"),
  pie: /* @__PURE__ */ U(async () => {
    let { createPieServices: e } = await __vitePreload(async () => {
      const { createPieServices: e2 } = await import("./vendor-min-mermaid~pie-R6RNRRYF-FUPP6FTN.BHMBWWWM.chunk.js");
      return {
        createPieServices: e2
      };
    }, true ? __vite__mapDeps([9,10,2,3,4,5,6]) : void 0), r = e().Pie.parser.LangiumParser;
    t.pie = r;
  }, "pie"),
  architecture: /* @__PURE__ */ U(async () => {
    let { createArchitectureServices: e } = await __vitePreload(async () => {
      const { createArchitectureServices: e2 } = await import("./vendor-min-mermaid~architecture-4AB2E3PP-7QDGZQEU.BmjM9P2P.chunk.js");
      return {
        createArchitectureServices: e2
      };
    }, true ? __vite__mapDeps([11,12,2,3,4,5,6]) : void 0), r = e().Architecture.parser.LangiumParser;
    t.architecture = r;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ U(async () => {
    let { createGitGraphServices: e } = await __vitePreload(async () => {
      const { createGitGraphServices: e2 } = await import("./vendor-min-mermaid~gitGraph-O2Q2CXLX-CIPL3GNK.B11RJ6CX.chunk.js");
      return {
        createGitGraphServices: e2
      };
    }, true ? __vite__mapDeps([13,14,2,3,4,5,6]) : void 0), r = e().GitGraph.parser.LangiumParser;
    t.gitGraph = r;
  }, "gitGraph"),
  radar: /* @__PURE__ */ U(async () => {
    let { createRadarServices: e } = await __vitePreload(async () => {
      const { createRadarServices: e2 } = await import("./vendor-min-mermaid~radar-MK3ICKWK-KPFLJ5ZN.B_dcCUMF.chunk.js");
      return {
        createRadarServices: e2
      };
    }, true ? __vite__mapDeps([15,16,2,3,4,5,6]) : void 0), r = e().Radar.parser.LangiumParser;
    t.radar = r;
  }, "radar")
};
async function p(e, r) {
  let i = n[e];
  if (!i) throw new Error(`Unknown diagram type: ${e}`);
  t[e] || await i();
  let s = /* @__PURE__ */ t[e].parse(r);
  if (s.lexerErrors.length > 0 || s.parserErrors.length > 0) throw new m(s);
  return s.value;
}
m$1(p, "parse");
U(p, "parse");
var m = (_a = class extends Error {
  constructor(e) {
    let r = /* @__PURE__ */ e.lexerErrors.map((c) => c.message).join(`
`), i = /* @__PURE__ */ e.parserErrors.map((c) => c.message).join(`
`);
    super(`Parsing failed: ${r} ${i}`), this.result = e;
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "MermaidParseError")), __privateAdd(_a, __2, U(_a, "MermaidParseError")), _a);
export {
  p
};
