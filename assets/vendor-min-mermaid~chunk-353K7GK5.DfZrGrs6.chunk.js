const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.EzlgaL9o.chunk.js","assets/vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js","assets/vendor-min-mermaid~chunk-A4ITRWGT.Q-yxLqnU.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js","assets/vendor-min-mermaid~chunk-IQQE2MEC.Ch8P21i0.chunk.js","assets/vendor-min-mermaid~chunk-OMTJKCYW.DapDh1DZ.chunk.js","assets/vendor-min-mermaid~chunk-XW6ABFJP.BoQPhuuW.chunk.js","assets/vendor-min-mermaid~info-NVLQJR56-7B66GPTN.wXdnhXVU.chunk.js","assets/vendor-mermaid.DKDJRKhn.chunk.js","assets/vendor-min-mermaid~chunk-DY3L2I7V.uXRuFcRM.chunk.js","assets/vendor-min-mermaid~packet-BFZMPI3H-GN4PBP3H.BVtI02tB.chunk.js","assets/vendor-mermaid.DYxHdHNU.chunk.js","assets/vendor-min-mermaid~chunk-6DHVG6KC.upGZr_y5.chunk.js","assets/vendor-min-mermaid~pie-7BOR55EZ-EOOIGJLO.BQVgr3Fl.chunk.js","assets/vendor-mermaid.yUrrhXt4.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.66RTl5jz.chunk.js","assets/vendor-min-mermaid~chunk-EOITJJC2.C5C7fme7.chunk.js","assets/vendor-mermaid.BOuI9z9o.chunk.js","assets/vendor-min-mermaid~chunk-TLYDTAVK.9vIiSUMn.chunk.js","assets/vendor-min-mermaid~gitGraph-F6HP7TQM-F73VLA63.C116Lse_.chunk.js","assets/vendor-mermaid.BqllCDAr.chunk.js","assets/vendor-min-mermaid~chunk-JXEFGRG2.Cx8itxhU.chunk.js","assets/vendor-min-mermaid~radar-NHE76QYJ-6YWZBFZN.DMF9SqlB.chunk.js","assets/vendor-mermaid.Cy3I8XNt.chunk.js","assets/vendor-min-mermaid~chunk-6XQQT3RD.ON7SPWpV.chunk.js","assets/vendor-min-mermaid~treemap-KMMF4GRG-7ORZ52ND.ojdZ6_qT.chunk.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "./index.DdIYnUiz.entry.js";
import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { n as F } from "./vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js";
var t = {}, n = {
	info: /* @__PURE__ */ F(async () => {
		let { createInfoServices: e } = await __vitePreload(async () => {
			const { createInfoServices: e$1 } = await import("./vendor-mermaid.EzlgaL9o.chunk.js");
			return { createInfoServices: e$1 };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7]));
		t.info = e().Info.parser.LangiumParser;
	}, "info"),
	packet: /* @__PURE__ */ F(async () => {
		let { createPacketServices: e } = await __vitePreload(async () => {
			const { createPacketServices: e$1 } = await import("./vendor-mermaid.DKDJRKhn.chunk.js");
			return { createPacketServices: e$1 };
		}, __vite__mapDeps([8,1,2,3,4,5,9,10]));
		t.packet = e().Packet.parser.LangiumParser;
	}, "packet"),
	pie: /* @__PURE__ */ F(async () => {
		let { createPieServices: e } = await __vitePreload(async () => {
			const { createPieServices: e$1 } = await import("./vendor-mermaid.DYxHdHNU.chunk.js");
			return { createPieServices: e$1 };
		}, __vite__mapDeps([11,1,2,3,4,5,12,13]));
		t.pie = e().Pie.parser.LangiumParser;
	}, "pie"),
	architecture: /* @__PURE__ */ F(async () => {
		let { createArchitectureServices: e } = await __vitePreload(async () => {
			const { createArchitectureServices: e$1 } = await import("./vendor-mermaid.yUrrhXt4.chunk.js");
			return { createArchitectureServices: e$1 };
		}, __vite__mapDeps([14,15,1,2,3,4,5,16]));
		t.architecture = e().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: /* @__PURE__ */ F(async () => {
		let { createGitGraphServices: e } = await __vitePreload(async () => {
			const { createGitGraphServices: e$1 } = await import("./vendor-mermaid.BOuI9z9o.chunk.js");
			return { createGitGraphServices: e$1 };
		}, __vite__mapDeps([17,1,2,3,4,5,18,19]));
		t.gitGraph = e().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	radar: /* @__PURE__ */ F(async () => {
		let { createRadarServices: e } = await __vitePreload(async () => {
			const { createRadarServices: e$1 } = await import("./vendor-mermaid.BqllCDAr.chunk.js");
			return { createRadarServices: e$1 };
		}, __vite__mapDeps([20,1,2,3,4,5,21,22]));
		t.radar = e().Radar.parser.LangiumParser;
	}, "radar"),
	treemap: /* @__PURE__ */ F(async () => {
		let { createTreemapServices: e } = await __vitePreload(async () => {
			const { createTreemapServices: e$1 } = await import("./vendor-mermaid.Cy3I8XNt.chunk.js");
			return { createTreemapServices: e$1 };
		}, __vite__mapDeps([23,1,2,3,4,5,24,25]));
		t.treemap = e().Treemap.parser.LangiumParser;
	}, "treemap")
};
async function p(e, r) {
	let i = n[e];
	if (!i) throw new Error(`Unknown diagram type: ${e}`);
	t[e] || await i();
	let s = /* @__PURE__ */ t[e].parse(r);
	if (s.lexerErrors.length > 0 || s.parserErrors.length > 0) throw new m$1(s);
	return s.value;
}
m(p, "parse");
F(p, "parse");
var m$1 = class extends Error {
	static {
		m(this, "MermaidParseError");
	}
	constructor(e) {
		super(`Parsing failed: ${/* @__PURE__ */ e.lexerErrors.map((c) => c.message).join(`
`)} ${/* @__PURE__ */ e.parserErrors.map((c) => c.message).join(`
`)}`), this.result = e;
	}
	static {
		F(this, "MermaidParseError");
	}
};
export { p as t };
