const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-4N47QTOZ-2BEI6D6A.BdeLCGGW.chunk.js","assets/vendor-min-mermaid~chunk-SWO474TD.DNUZohzu.chunk.js","assets/vendor-min-mermaid~chunk-JVB3IFOF.DIxodtGj.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.CxiwLIA0.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~packet-KVYON367-D24LN7JZ.57pkrEx6.chunk.js","assets/vendor-min-mermaid~chunk-237OD7E6.Bk5CO1nW.chunk.js","assets/vendor-min-mermaid~pie-R6RNRRYF-FUPP6FTN.D2zLmPek.chunk.js","assets/vendor-min-mermaid~chunk-ZWYQHTDX.CYNlaOdO.chunk.js","assets/vendor-min-mermaid~architecture-4AB2E3PP-7QDGZQEU.BhsbNNH4.chunk.js","assets/vendor-min-mermaid~chunk-DDW4HWGY.Cg6oDHfc.chunk.js","assets/vendor-min-mermaid~gitGraph-O2Q2CXLX-CIPL3GNK.C7XoE1KQ.chunk.js","assets/vendor-min-mermaid~chunk-NA3436M7.C_tfeljX.chunk.js","assets/vendor-min-mermaid~radar-MK3ICKWK-KPFLJ5ZN.CAhJS8Me.chunk.js","assets/vendor-min-mermaid~chunk-RRF4A5XS.D7R8dAJs.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.BfNI1ZyL.chunk.js';
import { U } from './vendor-min-mermaid~chunk-JVB3IFOF.DIxodtGj.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var t = {}, n = {
    info: /*#__PURE__*/ U(async ()=>{
        let { createInfoServices: e } = await __vitePreload(async ()=>{
            const { createInfoServices: e } = await import('./vendor-min-mermaid~info-4N47QTOZ-2BEI6D6A.BdeLCGGW.chunk.js');
            return {
                createInfoServices: e
            };
        }, true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0), r = e().Info.parser.LangiumParser;
        t.info = r;
    }, "info"),
    packet: /*#__PURE__*/ U(async ()=>{
        let { createPacketServices: e } = await __vitePreload(async ()=>{
            const { createPacketServices: e } = await import('./vendor-min-mermaid~packet-KVYON367-D24LN7JZ.57pkrEx6.chunk.js');
            return {
                createPacketServices: e
            };
        }, true ? __vite__mapDeps([7,8,2,3,4,5,6]) : void 0), r = e().Packet.parser.LangiumParser;
        t.packet = r;
    }, "packet"),
    pie: /*#__PURE__*/ U(async ()=>{
        let { createPieServices: e } = await __vitePreload(async ()=>{
            const { createPieServices: e } = await import('./vendor-min-mermaid~pie-R6RNRRYF-FUPP6FTN.D2zLmPek.chunk.js');
            return {
                createPieServices: e
            };
        }, true ? __vite__mapDeps([9,10,2,3,4,5,6]) : void 0), r = e().Pie.parser.LangiumParser;
        t.pie = r;
    }, "pie"),
    architecture: /*#__PURE__*/ U(async ()=>{
        let { createArchitectureServices: e } = await __vitePreload(async ()=>{
            const { createArchitectureServices: e } = await import('./vendor-min-mermaid~architecture-4AB2E3PP-7QDGZQEU.BhsbNNH4.chunk.js');
            return {
                createArchitectureServices: e
            };
        }, true ? __vite__mapDeps([11,12,2,3,4,5,6]) : void 0), r = e().Architecture.parser.LangiumParser;
        t.architecture = r;
    }, "architecture"),
    gitGraph: /*#__PURE__*/ U(async ()=>{
        let { createGitGraphServices: e } = await __vitePreload(async ()=>{
            const { createGitGraphServices: e } = await import('./vendor-min-mermaid~gitGraph-O2Q2CXLX-CIPL3GNK.C7XoE1KQ.chunk.js');
            return {
                createGitGraphServices: e
            };
        }, true ? __vite__mapDeps([13,14,2,3,4,5,6]) : void 0), r = e().GitGraph.parser.LangiumParser;
        t.gitGraph = r;
    }, "gitGraph"),
    radar: /*#__PURE__*/ U(async ()=>{
        let { createRadarServices: e } = await __vitePreload(async ()=>{
            const { createRadarServices: e } = await import('./vendor-min-mermaid~radar-MK3ICKWK-KPFLJ5ZN.CAhJS8Me.chunk.js');
            return {
                createRadarServices: e
            };
        }, true ? __vite__mapDeps([15,16,2,3,4,5,6]) : void 0), r = e().Radar.parser.LangiumParser;
        t.radar = r;
    }, "radar")
};
async function p(e, r) {
    let i = n[e];
    if (!i) throw new Error(`Unknown diagram type: ${e}`);
    t[e] || await i();
    let s = /*#__PURE__*/ t[e].parse(r);
    if (s.lexerErrors.length > 0 || s.parserErrors.length > 0) throw new m(s);
    return s.value;
}
m$1(p, "parse");
U(p, "parse");
var m = class extends Error {
    static #_ = m$1(this, "MermaidParseError");
    constructor(e){
        let r = /*#__PURE__*/ e.lexerErrors.map((c)=>c.message).join(`
`), i = /*#__PURE__*/ e.parserErrors.map((c)=>c.message).join(`
`);
        super(`Parsing failed: ${r} ${i}`), this.result = e;
    }
    static #_2 = U(this, "MermaidParseError");
};
export { p };
