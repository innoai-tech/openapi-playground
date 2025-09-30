const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.YrH_VXnH.chunk.js","assets/vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js","assets/vendor-mermaid.BdalkndP.chunk.js","assets/vendor-mermaid.BzseqLhI.chunk.js","assets/vendor-mermaid.lMjwO3wI.chunk.js","assets/vendor-mermaid.fYseW-_Q.chunk.js","assets/vendor-mermaid.8_65zcA1.chunk.js","assets/vendor-mermaid.DF5hcQrK.chunk.js","assets/vendor-mermaid.Cl3slwnO.chunk.js","assets/vendor-mermaid.JzZnkDzE.chunk.js","assets/vendor-mermaid.7ryZlrh6.chunk.js","assets/vendor-mermaid.DJPNdAH2.chunk.js","assets/vendor-mermaid.5oGf2OBm.chunk.js","assets/vendor-mermaid.B8-aQqyi.chunk.js","assets/vendor-mermaid.DHsASuxs.chunk.js"])))=>i.map(i=>d[i]);
import { sn as e } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as r, n as a } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var t = {}, i = {
	info: a(async () => {
		let { createInfoServices: r } = await e(async () => {
			let { createInfoServices: e } = await import("./vendor-mermaid.YrH_VXnH.chunk.js");
			return { createInfoServices: e };
		}, __vite__mapDeps([0,1,2]));
		t.info = r().Info.parser.LangiumParser;
	}, "info"),
	packet: a(async () => {
		let { createPacketServices: r } = await e(async () => {
			let { createPacketServices: e } = await import("./vendor-mermaid.BzseqLhI.chunk.js");
			return { createPacketServices: e };
		}, __vite__mapDeps([3,1,4]));
		t.packet = r().Packet.parser.LangiumParser;
	}, "packet"),
	pie: a(async () => {
		let { createPieServices: r } = await e(async () => {
			let { createPieServices: e } = await import("./vendor-mermaid.fYseW-_Q.chunk.js");
			return { createPieServices: e };
		}, __vite__mapDeps([5,1,6]));
		t.pie = r().Pie.parser.LangiumParser;
	}, "pie"),
	architecture: a(async () => {
		let { createArchitectureServices: r } = await e(async () => {
			let { createArchitectureServices: e } = await import("./vendor-mermaid.DF5hcQrK.chunk.js");
			return { createArchitectureServices: e };
		}, __vite__mapDeps([7,1,8]));
		t.architecture = r().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: a(async () => {
		let { createGitGraphServices: r } = await e(async () => {
			let { createGitGraphServices: e } = await import("./vendor-mermaid.JzZnkDzE.chunk.js");
			return { createGitGraphServices: e };
		}, __vite__mapDeps([9,1,10]));
		t.gitGraph = r().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	radar: a(async () => {
		let { createRadarServices: r } = await e(async () => {
			let { createRadarServices: e } = await import("./vendor-mermaid.DJPNdAH2.chunk.js");
			return { createRadarServices: e };
		}, __vite__mapDeps([11,1,12]));
		t.radar = r().Radar.parser.LangiumParser;
	}, "radar"),
	treemap: a(async () => {
		let { createTreemapServices: r } = await e(async () => {
			let { createTreemapServices: e } = await import("./vendor-mermaid.B8-aQqyi.chunk.js");
			return { createTreemapServices: e };
		}, __vite__mapDeps([13,1,14]));
		t.treemap = r().Treemap.parser.LangiumParser;
	}, "treemap")
};
async function c(e, r) {
	let a = i[e];
	if (!a) throw Error(`Unknown diagram type: ${e}`);
	t[e] || await a();
	let c = t[e].parse(r);
	if (c.lexerErrors.length > 0 || c.parserErrors.length > 0) throw new s(c);
	return c.value;
}
r(c, "parse"), a(c, "parse");
var s = class extends Error {
	static {
		r(this, "MermaidParseError");
	}
	constructor(e) {
		super(`Parsing failed: ${e.lexerErrors.map((e) => e.message).join(`
`)} ${e.parserErrors.map((e) => e.message).join(`
`)}`), this.result = e;
	}
	static {
		a(this, "MermaidParseError");
	}
};
export { c as t };
