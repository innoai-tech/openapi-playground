const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-63CPKGFF-G4RG6W7N.BeBAJ2e_.chunk.js","assets/vendor-min-mermaid~chunk-F5X5OFIH.BrSe3Esj.chunk.js","assets/vendor-min-mermaid~chunk-QFDCAKKT.Ci_HvmD4.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~packet-HUATNLJX-ASQIZSON.DXLt70F1.chunk.js","assets/vendor-min-mermaid~chunk-CIPFSH2J.DXbiOEQN.chunk.js","assets/vendor-min-mermaid~pie-WTHONI2E-T7UMFUIW.Wp8N5krm.chunk.js","assets/vendor-min-mermaid~chunk-PLCDSWN2.Ww3_Oi1t.chunk.js","assets/vendor-min-mermaid~architecture-O4VJ6CD3-KYOUMTRL.Da1CMPIq.chunk.js","assets/vendor-min-mermaid~chunk-BQEYV4WX.DnmEiYVr.chunk.js","assets/vendor-min-mermaid~gitGraph-ZV4HHKMB-E5WIAIJK.B4Lsw6ti.chunk.js","assets/vendor-min-mermaid~chunk-F5P7Q7EI.e0tO_xPB.chunk.js","assets/vendor-min-mermaid~radar-NJJJXTRR-RMDMJZOI.JT6_RpQf.chunk.js","assets/vendor-min-mermaid~chunk-MO23DTBY.BWjczJIV.chunk.js","assets/vendor-min-mermaid~treemap-75Q7IDZK-HKTH2UG6.dyE5nZdf.chunk.js","assets/vendor-min-mermaid~chunk-YVFZI336.DpPDlJxQ.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.BBnvnZfU.chunk.js';
import { F } from './vendor-min-mermaid~chunk-QFDCAKKT.Ci_HvmD4.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var t = {}, n = {
    info: /*#__PURE__*/ F(async ()=>{
        let { createInfoServices: e } = await __vitePreload(async ()=>{
            const { createInfoServices: e } = await import('./vendor-min-mermaid~info-63CPKGFF-G4RG6W7N.BeBAJ2e_.chunk.js');
            return {
                createInfoServices: e
            };
        }, true               ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0), r = e().Info.parser.LangiumParser;
        t.info = r;
    }, "info"),
    packet: /*#__PURE__*/ F(async ()=>{
        let { createPacketServices: e } = await __vitePreload(async ()=>{
            const { createPacketServices: e } = await import('./vendor-min-mermaid~packet-HUATNLJX-ASQIZSON.DXLt70F1.chunk.js');
            return {
                createPacketServices: e
            };
        }, true               ? __vite__mapDeps([7,8,2,3,4,5,6]) : void 0), r = e().Packet.parser.LangiumParser;
        t.packet = r;
    }, "packet"),
    pie: /*#__PURE__*/ F(async ()=>{
        let { createPieServices: e } = await __vitePreload(async ()=>{
            const { createPieServices: e } = await import('./vendor-min-mermaid~pie-WTHONI2E-T7UMFUIW.Wp8N5krm.chunk.js');
            return {
                createPieServices: e
            };
        }, true               ? __vite__mapDeps([9,10,2,3,4,5,6]) : void 0), r = e().Pie.parser.LangiumParser;
        t.pie = r;
    }, "pie"),
    architecture: /*#__PURE__*/ F(async ()=>{
        let { createArchitectureServices: e } = await __vitePreload(async ()=>{
            const { createArchitectureServices: e } = await import('./vendor-min-mermaid~architecture-O4VJ6CD3-KYOUMTRL.Da1CMPIq.chunk.js');
            return {
                createArchitectureServices: e
            };
        }, true               ? __vite__mapDeps([11,12,2,3,4,5,6]) : void 0), r = e().Architecture.parser.LangiumParser;
        t.architecture = r;
    }, "architecture"),
    gitGraph: /*#__PURE__*/ F(async ()=>{
        let { createGitGraphServices: e } = await __vitePreload(async ()=>{
            const { createGitGraphServices: e } = await import('./vendor-min-mermaid~gitGraph-ZV4HHKMB-E5WIAIJK.B4Lsw6ti.chunk.js');
            return {
                createGitGraphServices: e
            };
        }, true               ? __vite__mapDeps([13,14,2,3,4,5,6]) : void 0), r = e().GitGraph.parser.LangiumParser;
        t.gitGraph = r;
    }, "gitGraph"),
    radar: /*#__PURE__*/ F(async ()=>{
        let { createRadarServices: e } = await __vitePreload(async ()=>{
            const { createRadarServices: e } = await import('./vendor-min-mermaid~radar-NJJJXTRR-RMDMJZOI.JT6_RpQf.chunk.js');
            return {
                createRadarServices: e
            };
        }, true               ? __vite__mapDeps([15,16,2,3,4,5,6]) : void 0), r = e().Radar.parser.LangiumParser;
        t.radar = r;
    }, "radar"),
    treemap: /*#__PURE__*/ F(async ()=>{
        let { createTreemapServices: e } = await __vitePreload(async ()=>{
            const { createTreemapServices: e } = await import('./vendor-min-mermaid~treemap-75Q7IDZK-HKTH2UG6.dyE5nZdf.chunk.js');
            return {
                createTreemapServices: e
            };
        }, true               ? __vite__mapDeps([17,18,2,3,4,5,6]) : void 0), r = e().Treemap.parser.LangiumParser;
        t.treemap = r;
    }, "treemap")
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
F(p, "parse");
var m = class extends Error {
    static{
        m$1(this, "MermaidParseError");
    }
    constructor(e){
        let r = /*#__PURE__*/ e.lexerErrors.map((c)=>c.message).join(`
`), i = /*#__PURE__*/ e.parserErrors.map((c)=>c.message).join(`
`);
        super(`Parsing failed: ${r} ${i}`), this.result = e;
    }
    static{
        F(this, "MermaidParseError");
    }
};
export { p };
