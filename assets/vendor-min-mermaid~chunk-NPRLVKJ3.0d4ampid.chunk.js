const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-NVLQJR56-WY6RGRGJ.DSxbsRD5.chunk.js","assets/vendor-min-mermaid~chunk-WSUO5DN6.Ce5rcZM0.chunk.js","assets/vendor-min-mermaid~chunk-L6MQJ2ZU.Dhxm8h8M.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~packet-BFZMPI3H-BQ2TQ635.CKTNMeuc.chunk.js","assets/vendor-min-mermaid~chunk-JCWWVGLQ.ZD1w7D5R.chunk.js","assets/vendor-min-mermaid~pie-7BOR55EZ-J4DISVIY.BrUEwAV3.chunk.js","assets/vendor-min-mermaid~chunk-P6UA7CIO.BOew2Fl6.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-MUC43IVM.ulia0l8q.chunk.js","assets/vendor-min-mermaid~chunk-4AZJR7FE.BuJAGtib.chunk.js","assets/vendor-min-mermaid~gitGraph-F6HP7TQM-JOQHTAS5.DUtAqDis.chunk.js","assets/vendor-min-mermaid~chunk-XAVRVNBM.Dx3JfK6E.chunk.js","assets/vendor-min-mermaid~radar-NHE76QYJ-6MRNKVGF.Dsa4csXE.chunk.js","assets/vendor-min-mermaid~chunk-JHXWDPGM.Bp1WZztT.chunk.js","assets/vendor-min-mermaid~treemap-KMMF4GRG-DK74C3S3.F_nMBPQP.chunk.js","assets/vendor-min-mermaid~chunk-V4WPH7A7.DBP-g35S.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.JfBGL8NS.chunk.js';
import { F } from './vendor-min-mermaid~chunk-L6MQJ2ZU.Dhxm8h8M.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var t = {}, n = {
    info: /*#__PURE__*/ F(async ()=>{
        let { createInfoServices: e } = await __vitePreload(async ()=>{
            const { createInfoServices: e } = await import('./vendor-min-mermaid~info-NVLQJR56-WY6RGRGJ.DSxbsRD5.chunk.js');
            return {
                createInfoServices: e
            };
        }, true               ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0), r = e().Info.parser.LangiumParser;
        t.info = r;
    }, "info"),
    packet: /*#__PURE__*/ F(async ()=>{
        let { createPacketServices: e } = await __vitePreload(async ()=>{
            const { createPacketServices: e } = await import('./vendor-min-mermaid~packet-BFZMPI3H-BQ2TQ635.CKTNMeuc.chunk.js');
            return {
                createPacketServices: e
            };
        }, true               ? __vite__mapDeps([7,8,2,3,4,5,6]) : void 0), r = e().Packet.parser.LangiumParser;
        t.packet = r;
    }, "packet"),
    pie: /*#__PURE__*/ F(async ()=>{
        let { createPieServices: e } = await __vitePreload(async ()=>{
            const { createPieServices: e } = await import('./vendor-min-mermaid~pie-7BOR55EZ-J4DISVIY.BrUEwAV3.chunk.js');
            return {
                createPieServices: e
            };
        }, true               ? __vite__mapDeps([9,10,2,3,4,5,6]) : void 0), r = e().Pie.parser.LangiumParser;
        t.pie = r;
    }, "pie"),
    architecture: /*#__PURE__*/ F(async ()=>{
        let { createArchitectureServices: e } = await __vitePreload(async ()=>{
            const { createArchitectureServices: e } = await import('./vendor-min-mermaid~architecture-U656AL7Q-MUC43IVM.ulia0l8q.chunk.js');
            return {
                createArchitectureServices: e
            };
        }, true               ? __vite__mapDeps([11,12,2,3,4,5,6]) : void 0), r = e().Architecture.parser.LangiumParser;
        t.architecture = r;
    }, "architecture"),
    gitGraph: /*#__PURE__*/ F(async ()=>{
        let { createGitGraphServices: e } = await __vitePreload(async ()=>{
            const { createGitGraphServices: e } = await import('./vendor-min-mermaid~gitGraph-F6HP7TQM-JOQHTAS5.DUtAqDis.chunk.js');
            return {
                createGitGraphServices: e
            };
        }, true               ? __vite__mapDeps([13,14,2,3,4,5,6]) : void 0), r = e().GitGraph.parser.LangiumParser;
        t.gitGraph = r;
    }, "gitGraph"),
    radar: /*#__PURE__*/ F(async ()=>{
        let { createRadarServices: e } = await __vitePreload(async ()=>{
            const { createRadarServices: e } = await import('./vendor-min-mermaid~radar-NHE76QYJ-6MRNKVGF.Dsa4csXE.chunk.js');
            return {
                createRadarServices: e
            };
        }, true               ? __vite__mapDeps([15,16,2,3,4,5,6]) : void 0), r = e().Radar.parser.LangiumParser;
        t.radar = r;
    }, "radar"),
    treemap: /*#__PURE__*/ F(async ()=>{
        let { createTreemapServices: e } = await __vitePreload(async ()=>{
            const { createTreemapServices: e } = await import('./vendor-min-mermaid~treemap-KMMF4GRG-DK74C3S3.F_nMBPQP.chunk.js');
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
