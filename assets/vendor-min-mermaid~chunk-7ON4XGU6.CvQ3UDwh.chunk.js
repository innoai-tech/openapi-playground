const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-HZACV5O2-ROAE4ANS.CDgLgnIz.chunk.js","assets/vendor-min-mermaid~chunk-CDQXVDZP.aiAMXNrY.chunk.js","assets/vendor-min-mermaid~chunk-QEWQD23V.C_oZq47W.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~packet-U6EVFAJE-T23SHD6Q.DfjQAq93.chunk.js","assets/vendor-min-mermaid~chunk-OYYLQQZV.D8xH9NY5.chunk.js","assets/vendor-min-mermaid~pie-6QXAW7JJ-Q3A5K32I.DiIW8ndG.chunk.js","assets/vendor-min-mermaid~chunk-OBNPYTZW.C5O7QQEf.chunk.js","assets/vendor-min-mermaid~architecture-DI4KNLHI-3TKAZUYQ.AncM7N5j.chunk.js","assets/vendor-min-mermaid~chunk-TKVI7ZNW.CFFA0NUb.chunk.js","assets/vendor-min-mermaid~gitGraph-CPDBPTLG-6WUMQRTJ.PlEvK_yu.chunk.js","assets/vendor-min-mermaid~chunk-ZXMOIRAS.BP49B-rF.chunk.js","assets/vendor-min-mermaid~radar-VG2SY3DT-YD637NEH.CZw9Aqpy.chunk.js","assets/vendor-min-mermaid~chunk-JWZWTJUD.Kv4Kh9Bh.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.DznktY08.chunk.js';
import { B } from './vendor-min-mermaid~chunk-QEWQD23V.C_oZq47W.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var t = {}, n = {
    info: /*#__PURE__*/ B(async ()=>{
        let { createInfoServices: e } = await __vitePreload(async ()=>{
            const { createInfoServices: e } = await import('./vendor-min-mermaid~info-HZACV5O2-ROAE4ANS.CDgLgnIz.chunk.js');
            return {
                createInfoServices: e
            };
        }, true               ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0), r = e().Info.parser.LangiumParser;
        t.info = r;
    }, "info"),
    packet: /*#__PURE__*/ B(async ()=>{
        let { createPacketServices: e } = await __vitePreload(async ()=>{
            const { createPacketServices: e } = await import('./vendor-min-mermaid~packet-U6EVFAJE-T23SHD6Q.DfjQAq93.chunk.js');
            return {
                createPacketServices: e
            };
        }, true               ? __vite__mapDeps([7,8,2,3,4,5,6]) : void 0), r = e().Packet.parser.LangiumParser;
        t.packet = r;
    }, "packet"),
    pie: /*#__PURE__*/ B(async ()=>{
        let { createPieServices: e } = await __vitePreload(async ()=>{
            const { createPieServices: e } = await import('./vendor-min-mermaid~pie-6QXAW7JJ-Q3A5K32I.DiIW8ndG.chunk.js');
            return {
                createPieServices: e
            };
        }, true               ? __vite__mapDeps([9,10,2,3,4,5,6]) : void 0), r = e().Pie.parser.LangiumParser;
        t.pie = r;
    }, "pie"),
    architecture: /*#__PURE__*/ B(async ()=>{
        let { createArchitectureServices: e } = await __vitePreload(async ()=>{
            const { createArchitectureServices: e } = await import('./vendor-min-mermaid~architecture-DI4KNLHI-3TKAZUYQ.AncM7N5j.chunk.js');
            return {
                createArchitectureServices: e
            };
        }, true               ? __vite__mapDeps([11,12,2,3,4,5,6]) : void 0), r = e().Architecture.parser.LangiumParser;
        t.architecture = r;
    }, "architecture"),
    gitGraph: /*#__PURE__*/ B(async ()=>{
        let { createGitGraphServices: e } = await __vitePreload(async ()=>{
            const { createGitGraphServices: e } = await import('./vendor-min-mermaid~gitGraph-CPDBPTLG-6WUMQRTJ.PlEvK_yu.chunk.js');
            return {
                createGitGraphServices: e
            };
        }, true               ? __vite__mapDeps([13,14,2,3,4,5,6]) : void 0), r = e().GitGraph.parser.LangiumParser;
        t.gitGraph = r;
    }, "gitGraph"),
    radar: /*#__PURE__*/ B(async ()=>{
        let { createRadarServices: e } = await __vitePreload(async ()=>{
            const { createRadarServices: e } = await import('./vendor-min-mermaid~radar-VG2SY3DT-YD637NEH.CZw9Aqpy.chunk.js');
            return {
                createRadarServices: e
            };
        }, true               ? __vite__mapDeps([15,16,2,3,4,5,6]) : void 0), r = e().Radar.parser.LangiumParser;
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
B(p, "parse");
var m = class extends Error {
    static #_ = m$1(this, "MermaidParseError");
    constructor(e){
        let r = /*#__PURE__*/ e.lexerErrors.map((c)=>c.message).join(`
`), i = /*#__PURE__*/ e.parserErrors.map((c)=>c.message).join(`
`);
        super(`Parsing failed: ${r} ${i}`), this.result = e;
    }
    static #_2 = B(this, "MermaidParseError");
};
export { p };
