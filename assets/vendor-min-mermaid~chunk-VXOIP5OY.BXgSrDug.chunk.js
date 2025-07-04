const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-3VTXS3R3-AQVDCF6T.Czlf54XN.chunk.js","assets/vendor-min-mermaid~chunk-2KWOQFVZ.BmWJtBng.chunk.js","assets/vendor-min-mermaid~chunk-NPFRQMEE.DBwAjtMn.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~packet-DSR6H3E6-X5MPTC4R.DjAiK1rj.chunk.js","assets/vendor-min-mermaid~chunk-JQ47BUXN.B6RxyTwB.chunk.js","assets/vendor-min-mermaid~pie-GAM7RPQU-T5NX3J7C.DQvlMPvb.chunk.js","assets/vendor-min-mermaid~chunk-PYF77AR6.FXglLYQw.chunk.js","assets/vendor-min-mermaid~architecture-I2MV5QL6-P6QY7IHZ.EBET8BXi.chunk.js","assets/vendor-min-mermaid~chunk-Y34LE73S.COMjY7wP.chunk.js","assets/vendor-min-mermaid~gitGraph-PIIEIUND-EMGFVSJW.BdvC-G8f.chunk.js","assets/vendor-min-mermaid~chunk-N45264FF.8Yf7QtPW.chunk.js","assets/vendor-min-mermaid~radar-NEH6LVNW-P44L663V.BgikaG4b.chunk.js","assets/vendor-min-mermaid~chunk-T5S727EL.CgY2faO9.chunk.js","assets/vendor-min-mermaid~treemap-FKARHQ26-ARMCRNF4.Qj3imkRn.chunk.js","assets/vendor-min-mermaid~chunk-2C4AIEI3.BfrxeorU.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.DznktY08.chunk.js';
import { F } from './vendor-min-mermaid~chunk-NPFRQMEE.DBwAjtMn.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var t = {}, n = {
    info: /*#__PURE__*/ F(async ()=>{
        let { createInfoServices: e } = await __vitePreload(async ()=>{
            const { createInfoServices: e } = await import('./vendor-min-mermaid~info-3VTXS3R3-AQVDCF6T.Czlf54XN.chunk.js');
            return {
                createInfoServices: e
            };
        }, true               ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0), r = e().Info.parser.LangiumParser;
        t.info = r;
    }, "info"),
    packet: /*#__PURE__*/ F(async ()=>{
        let { createPacketServices: e } = await __vitePreload(async ()=>{
            const { createPacketServices: e } = await import('./vendor-min-mermaid~packet-DSR6H3E6-X5MPTC4R.DjAiK1rj.chunk.js');
            return {
                createPacketServices: e
            };
        }, true               ? __vite__mapDeps([7,8,2,3,4,5,6]) : void 0), r = e().Packet.parser.LangiumParser;
        t.packet = r;
    }, "packet"),
    pie: /*#__PURE__*/ F(async ()=>{
        let { createPieServices: e } = await __vitePreload(async ()=>{
            const { createPieServices: e } = await import('./vendor-min-mermaid~pie-GAM7RPQU-T5NX3J7C.DQvlMPvb.chunk.js');
            return {
                createPieServices: e
            };
        }, true               ? __vite__mapDeps([9,10,2,3,4,5,6]) : void 0), r = e().Pie.parser.LangiumParser;
        t.pie = r;
    }, "pie"),
    architecture: /*#__PURE__*/ F(async ()=>{
        let { createArchitectureServices: e } = await __vitePreload(async ()=>{
            const { createArchitectureServices: e } = await import('./vendor-min-mermaid~architecture-I2MV5QL6-P6QY7IHZ.EBET8BXi.chunk.js');
            return {
                createArchitectureServices: e
            };
        }, true               ? __vite__mapDeps([11,12,2,3,4,5,6]) : void 0), r = e().Architecture.parser.LangiumParser;
        t.architecture = r;
    }, "architecture"),
    gitGraph: /*#__PURE__*/ F(async ()=>{
        let { createGitGraphServices: e } = await __vitePreload(async ()=>{
            const { createGitGraphServices: e } = await import('./vendor-min-mermaid~gitGraph-PIIEIUND-EMGFVSJW.BdvC-G8f.chunk.js');
            return {
                createGitGraphServices: e
            };
        }, true               ? __vite__mapDeps([13,14,2,3,4,5,6]) : void 0), r = e().GitGraph.parser.LangiumParser;
        t.gitGraph = r;
    }, "gitGraph"),
    radar: /*#__PURE__*/ F(async ()=>{
        let { createRadarServices: e } = await __vitePreload(async ()=>{
            const { createRadarServices: e } = await import('./vendor-min-mermaid~radar-NEH6LVNW-P44L663V.BgikaG4b.chunk.js');
            return {
                createRadarServices: e
            };
        }, true               ? __vite__mapDeps([15,16,2,3,4,5,6]) : void 0), r = e().Radar.parser.LangiumParser;
        t.radar = r;
    }, "radar"),
    treemap: /*#__PURE__*/ F(async ()=>{
        let { createTreemapServices: e } = await __vitePreload(async ()=>{
            const { createTreemapServices: e } = await import('./vendor-min-mermaid~treemap-FKARHQ26-ARMCRNF4.Qj3imkRn.chunk.js');
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
    static #_ = m$1(this, "MermaidParseError");
    constructor(e){
        let r = /*#__PURE__*/ e.lexerErrors.map((c)=>c.message).join(`
`), i = /*#__PURE__*/ e.parserErrors.map((c)=>c.message).join(`
`);
        super(`Parsing failed: ${r} ${i}`), this.result = e;
    }
    static #_2 = F(this, "MermaidParseError");
};
export { p };
