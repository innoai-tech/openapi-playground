const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~info-4N47QTOZ-2BEI6D6A.BuGOaR1D.chunk.js","assets/vendor-min-mermaid~chunk-SWO474TD.COHIkMiZ.chunk.js","assets/vendor-min-mermaid~chunk-JVB3IFOF.BCk7jw1q.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.CA0YTDyr.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.CrSOLbEk.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.Bez5tDRE.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.GEYjlfbR.chunk.js","assets/vendor-min-mermaid~packet-KVYON367-D24LN7JZ.atnB7QS6.chunk.js","assets/vendor-min-mermaid~chunk-237OD7E6.CyYhG9YR.chunk.js","assets/vendor-min-mermaid~pie-R6RNRRYF-FUPP6FTN.DItZckfw.chunk.js","assets/vendor-min-mermaid~chunk-ZWYQHTDX.DFJaJ1Bq.chunk.js","assets/vendor-min-mermaid~architecture-4AB2E3PP-7QDGZQEU.DSUwN5le.chunk.js","assets/vendor-min-mermaid~chunk-DDW4HWGY.DqOJrDrP.chunk.js","assets/vendor-min-mermaid~gitGraph-O2Q2CXLX-CIPL3GNK.BAuVONe-.chunk.js","assets/vendor-min-mermaid~chunk-NA3436M7.CDBfYXei.chunk.js","assets/vendor-min-mermaid~radar-MK3ICKWK-KPFLJ5ZN.BbC3GY55.chunk.js","assets/vendor-min-mermaid~chunk-RRF4A5XS.Dd8IPC1I.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.CzjpWxrC.chunk.js';
import { U } from './vendor-min-mermaid~chunk-JVB3IFOF.BCk7jw1q.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.GEYjlfbR.chunk.js';

var t={},n={info:U(async()=>{let{createInfoServices:e}=await __vitePreload(() => import('./vendor-min-mermaid~info-4N47QTOZ-2BEI6D6A.BuGOaR1D.chunk.js'),true?__vite__mapDeps([0,1,2,3,4,5,6]):void 0),r=e().Info.parser.LangiumParser;t.info=r;},"info"),packet:U(async()=>{let{createPacketServices:e}=await __vitePreload(() => import('./vendor-min-mermaid~packet-KVYON367-D24LN7JZ.atnB7QS6.chunk.js'),true?__vite__mapDeps([7,8,2,3,4,5,6]):void 0),r=e().Packet.parser.LangiumParser;t.packet=r;},"packet"),pie:U(async()=>{let{createPieServices:e}=await __vitePreload(() => import('./vendor-min-mermaid~pie-R6RNRRYF-FUPP6FTN.DItZckfw.chunk.js'),true?__vite__mapDeps([9,10,2,3,4,5,6]):void 0),r=e().Pie.parser.LangiumParser;t.pie=r;},"pie"),architecture:U(async()=>{let{createArchitectureServices:e}=await __vitePreload(() => import('./vendor-min-mermaid~architecture-4AB2E3PP-7QDGZQEU.DSUwN5le.chunk.js'),true?__vite__mapDeps([11,12,2,3,4,5,6]):void 0),r=e().Architecture.parser.LangiumParser;t.architecture=r;},"architecture"),gitGraph:U(async()=>{let{createGitGraphServices:e}=await __vitePreload(() => import('./vendor-min-mermaid~gitGraph-O2Q2CXLX-CIPL3GNK.BAuVONe-.chunk.js'),true?__vite__mapDeps([13,14,2,3,4,5,6]):void 0),r=e().GitGraph.parser.LangiumParser;t.gitGraph=r;},"gitGraph"),radar:U(async()=>{let{createRadarServices:e}=await __vitePreload(() => import('./vendor-min-mermaid~radar-MK3ICKWK-KPFLJ5ZN.BbC3GY55.chunk.js'),true?__vite__mapDeps([15,16,2,3,4,5,6]):void 0),r=e().Radar.parser.LangiumParser;t.radar=r;},"radar")};async function p(e,r){let i=n[e];if(!i)throw new Error(`Unknown diagram type: ${e}`);t[e]||await i();let s=t[e].parse(r);if(s.lexerErrors.length>0||s.parserErrors.length>0)throw new m(s);return s.value}m$1(p,"parse");U(p,"parse");var m=class extends Error{static{m$1(this,"MermaidParseError");}constructor(e){let r=e.lexerErrors.map(c=>c.message).join(`
`),i=e.parserErrors.map(c=>c.message).join(`
`);super(`Parsing failed: ${r} ${i}`),this.result=e;}static{U(this,"MermaidParseError");}};

export { p };
