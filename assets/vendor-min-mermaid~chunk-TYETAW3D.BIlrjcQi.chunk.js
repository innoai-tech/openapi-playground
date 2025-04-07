const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-4N47QTOZ-2BEI6D6A.CLI5LrFv.chunk.js","assets/vendor-min-mermaid~chunk-SWO474TD.DyTty_i1.chunk.js","assets/vendor-min-mermaid~chunk-JVB3IFOF.CyFWjgvM.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.DZaYt2YO.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DtdPbVSC.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.BwVspKnk.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js","assets/vendor-min-mermaid~packet-KVYON367-D24LN7JZ.C_HfWak_.chunk.js","assets/vendor-min-mermaid~chunk-237OD7E6.DYMr3-lc.chunk.js","assets/vendor-min-mermaid~pie-R6RNRRYF-FUPP6FTN.BYYHyYC3.chunk.js","assets/vendor-min-mermaid~chunk-ZWYQHTDX.BfhYjC6o.chunk.js","assets/vendor-min-mermaid~architecture-4AB2E3PP-7QDGZQEU.wHbkzAct.chunk.js","assets/vendor-min-mermaid~chunk-DDW4HWGY.ZoJLOt6K.chunk.js","assets/vendor-min-mermaid~gitGraph-O2Q2CXLX-CIPL3GNK.Dq0_WhNf.chunk.js","assets/vendor-min-mermaid~chunk-NA3436M7.DG84OIGm.chunk.js","assets/vendor-min-mermaid~radar-MK3ICKWK-KPFLJ5ZN.DpZlhy6x.chunk.js","assets/vendor-min-mermaid~chunk-RRF4A5XS.CCpQ3CSD.chunk.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { _ as __vitePreload } from "./lib-nodepkg-typedef.D-PCYzjh.chunk.js";
import { U } from "./vendor-min-mermaid~chunk-JVB3IFOF.CyFWjgvM.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var t = {}, n = {
  info: U(async () => {
    let { createInfoServices: e } = await __vitePreload(async () => {
      const { createInfoServices: e2 } = await import("./vendor-min-mermaid~info-4N47QTOZ-2BEI6D6A.CLI5LrFv.chunk.js");
      return {
        createInfoServices: e2
      };
    }, true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0), r = e().Info.parser.LangiumParser;
    t.info = r;
  }, "info"),
  packet: U(async () => {
    let { createPacketServices: e } = await __vitePreload(async () => {
      const { createPacketServices: e2 } = await import("./vendor-min-mermaid~packet-KVYON367-D24LN7JZ.C_HfWak_.chunk.js");
      return {
        createPacketServices: e2
      };
    }, true ? __vite__mapDeps([7,8,2,3,4,5,6]) : void 0), r = e().Packet.parser.LangiumParser;
    t.packet = r;
  }, "packet"),
  pie: U(async () => {
    let { createPieServices: e } = await __vitePreload(async () => {
      const { createPieServices: e2 } = await import("./vendor-min-mermaid~pie-R6RNRRYF-FUPP6FTN.BYYHyYC3.chunk.js");
      return {
        createPieServices: e2
      };
    }, true ? __vite__mapDeps([9,10,2,3,4,5,6]) : void 0), r = e().Pie.parser.LangiumParser;
    t.pie = r;
  }, "pie"),
  architecture: U(async () => {
    let { createArchitectureServices: e } = await __vitePreload(async () => {
      const { createArchitectureServices: e2 } = await import("./vendor-min-mermaid~architecture-4AB2E3PP-7QDGZQEU.wHbkzAct.chunk.js");
      return {
        createArchitectureServices: e2
      };
    }, true ? __vite__mapDeps([11,12,2,3,4,5,6]) : void 0), r = e().Architecture.parser.LangiumParser;
    t.architecture = r;
  }, "architecture"),
  gitGraph: U(async () => {
    let { createGitGraphServices: e } = await __vitePreload(async () => {
      const { createGitGraphServices: e2 } = await import("./vendor-min-mermaid~gitGraph-O2Q2CXLX-CIPL3GNK.Dq0_WhNf.chunk.js");
      return {
        createGitGraphServices: e2
      };
    }, true ? __vite__mapDeps([13,14,2,3,4,5,6]) : void 0), r = e().GitGraph.parser.LangiumParser;
    t.gitGraph = r;
  }, "gitGraph"),
  radar: U(async () => {
    let { createRadarServices: e } = await __vitePreload(async () => {
      const { createRadarServices: e2 } = await import("./vendor-min-mermaid~radar-MK3ICKWK-KPFLJ5ZN.DpZlhy6x.chunk.js");
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
  let s = t[e].parse(r);
  if (s.lexerErrors.length > 0 || s.parserErrors.length > 0) throw new m(s);
  return s.value;
}
m$1(p, "parse");
U(p, "parse");
var m = (_a = class extends Error {
  constructor(e) {
    let r = e.lexerErrors.map((c) => c.message).join(`
`), i = e.parserErrors.map((c) => c.message).join(`
`);
    super(`Parsing failed: ${r} ${i}`), this.result = e;
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "MermaidParseError")), __privateAdd(_a, __2, U(_a, "MermaidParseError")), _a);
export {
  p
};
