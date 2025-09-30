const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.DrO1GOuI.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js","assets/vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js","assets/vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js","assets/vendor-mermaid.mb-sK5ke.chunk.js","assets/vendor-mermaid.tZx6e6yq.chunk.js","assets/vendor-mermaid.2KapFdMM.chunk.js","assets/vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js","assets/vendor-mermaid.Br1eVBMi.chunk.js","assets/vendor-min-mermaid~chunk-RV6DXAHM.CHvzwstl.chunk.js","assets/vendor-mermaid.CERiOASV.chunk.js","assets/vendor-min-mermaid~chunk-TVVDRG3C.EXVGZHXK.chunk.js","assets/vendor-mermaid.Dn-IDRMQ.chunk.js","assets/vendor-mermaid.B-0J-u47.chunk.js","assets/vendor-mermaid.BbPEtU4d.chunk.js","assets/vendor-mermaid.CPyLH92Q.chunk.js","assets/vendor-mermaid.CNStX6fI.chunk.js","assets/vendor-mermaid.Vvvvrg2S.chunk.js","assets/vendor-mermaid.8_65zcA1.chunk.js","assets/vendor-mermaid.DHsASuxs.chunk.js","assets/vendor-mermaid.lMjwO3wI.chunk.js","assets/vendor-mermaid.Cl3slwnO.chunk.js","assets/vendor-mermaid.5oGf2OBm.chunk.js","assets/vendor-mermaid.7ryZlrh6.chunk.js","assets/vendor-mermaid.BUC4NZqG.chunk.js","assets/vendor-mermaid.BdalkndP.chunk.js","assets/vendor-mermaid.DuDYRdNu.chunk.js","assets/vendor-mermaid.CqYKHY_h.chunk.js","assets/vendor-mermaid.D2DrBU7P.chunk.js","assets/vendor-mermaid.BVwC1HkE.chunk.js","assets/vendor-mermaid.CM4sNxjT.chunk.js","assets/vendor-mermaid.CIugcRoc.chunk.js","assets/vendor-mermaid.BUGAwJEI.chunk.js","assets/vendor-mermaid.DMFIR9K7.chunk.js","assets/vendor-mermaid.D-jwrVTP.chunk.js","assets/vendor-mermaid.BL35mG4Z.chunk.js","assets/vendor-mermaid.C9L1tmxJ.chunk.js","assets/vendor-mermaid.BYfka7W_.chunk.js","assets/vendor-mermaid.B8jXsBNu.chunk.js","assets/vendor-mermaid.CjrCBb2b.chunk.js","assets/vendor-mermaid.D7AYFHeZ.chunk.js","assets/vendor-mermaid.CSvrNZuY.chunk.js","assets/vendor-mermaid.Cj2EL0lq.chunk.js","assets/vendor-mermaid.CDgrb8eB.chunk.js","assets/vendor-mermaid.fEP3Hl1H.chunk.js","assets/vendor-mermaid.DwDE3TK1.chunk.js","assets/vendor-mermaid.CvzDvdPk.chunk.js","assets/vendor-mermaid.PsIRb6qA.chunk.js","assets/vendor-mermaid.DupYe3hi.chunk.js","assets/vendor-mermaid.BGBT-Y-B.chunk.js","assets/vendor-mermaid.Bku55bOO.chunk.js","assets/vendor-mermaid.CKrsDpSi.chunk.js","assets/vendor-mermaid.9XzSy1EA.chunk.js","assets/vendor-mermaid.DFOoXK8l.chunk.js"])))=>i.map(i=>d[i]);
import { $ as e, $t as r, C as t, E as a, I as i, K as n, L as d, M as o, N as s, R as c, Rt as l, Z as m, at as u, b as _, g, it as p, k as f, m as h, nt as y, qt as w, s as E, sn as v, tt as b, v as I, w as D, y as T, z as k } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { G as R, Z as x } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as V } from "./vendor-mermaid.BVwC1HkE.chunk.js";
import { _ as O, a as S, c as L, d as A, f as M, r as j } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
import { h as P, m as C } from "./vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js";
import { r as N } from "./vendor-mermaid.Dn-IDRMQ.chunk.js";
import { n as $, t as F } from "./vendor-mermaid.Br1eVBMi.chunk.js";
import { t as z } from "./vendor-mermaid.D2DrBU7P.chunk.js";
var q = {
	id: "c4",
	detector: x((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"),
	loader: x(async () => {
		let { diagram: e } = await v(async () => {
			let { diagram: e } = await import("./vendor-mermaid.DrO1GOuI.chunk.js");
			return { diagram: e };
		}, __vite__mapDeps([0,1,2,3,4]));
		return {
			id: "c4",
			diagram: e
		};
	}, "loader")
}, H = "flowchart", B = x((e, r) => r?.flowchart?.defaultRenderer !== "dagre-wrapper" && r?.flowchart?.defaultRenderer !== "elk" && /^\s*graph/.test(e), "detector"), G = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.tZx6e6yq.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([5,1,2,6,3,7,8,9,10,11,12,13]));
	return {
		id: H,
		diagram: e
	};
}, "loader"), U = {
	id: H,
	detector: B,
	loader: G
}, Z = "flowchart-v2", X = x((e, r) => r?.flowchart?.defaultRenderer !== "dagre-d3" && (r?.flowchart?.defaultRenderer === "elk" && (r.layout = "elk"), !!/^\s*graph/.test(e) && r?.flowchart?.defaultRenderer === "dagre-wrapper" || /^\s*flowchart/.test(e)), "detector"), K = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.tZx6e6yq.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([5,1,2,6,3,7,8,9,10,11,12,13]));
	return {
		id: Z,
		diagram: e
	};
}, "loader"), W = {
	id: Z,
	detector: X,
	loader: K
}, Y = {
	id: "er",
	detector: x((e) => /^\s*erDiagram/.test(e), "detector"),
	loader: x(async () => {
		let { diagram: e } = await v(async () => {
			let { diagram: e } = await import("./vendor-mermaid.BbPEtU4d.chunk.js");
			return { diagram: e };
		}, __vite__mapDeps([14,1,2,6,3,7,9,10,11,12]));
		return {
			id: "er",
			diagram: e
		};
	}, "loader")
}, J = "gitGraph", Q = x((e) => /^\s*gitGraph/.test(e), "detector"), ee = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.CPyLH92Q.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([15,1,2,16,17,18,19,20,3,21,22,23,24,25]));
	return {
		id: J,
		diagram: e
	};
}, "loader"), er = {
	id: J,
	detector: Q,
	loader: ee
}, et = "gantt", ea = x((e) => /^\s*gantt/.test(e), "detector"), ei = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.DuDYRdNu.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([26,1,2,3]));
	return {
		id: et,
		diagram: e
	};
}, "loader"), en = {
	id: et,
	detector: ea,
	loader: ei
}, ed = "info", eo = x((e) => /^\s*info/.test(e), "detector"), es = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.CqYKHY_h.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([27,1,2,16,28,18,19,29,20,21,22,23,25]));
	return {
		id: ed,
		diagram: e
	};
}, "loader"), ec = {
	id: ed,
	detector: eo,
	loader: es
}, el = {
	id: "pie",
	detector: x((e) => /^\s*pie/.test(e), "detector"),
	loader: x(async () => {
		let { diagram: e } = await v(async () => {
			let { diagram: e } = await import("./vendor-mermaid.CM4sNxjT.chunk.js");
			return { diagram: e };
		}, __vite__mapDeps([30,1,2,16,17,18,19,29,20,3,21,22,23,25]));
		return {
			id: "pie",
			diagram: e
		};
	}, "loader")
}, em = "quadrantChart", eu = x((e) => /^\s*quadrantChart/.test(e), "detector"), e_ = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.CIugcRoc.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([31,1,2]));
	return {
		id: em,
		diagram: e
	};
}, "loader"), eg = {
	id: em,
	detector: eu,
	loader: e_
}, ep = "xychart", ef = x((e) => /^\s*xychart(-beta)?/.test(e), "detector"), eh = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.BUGAwJEI.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([32,1,2,29,3,7]));
	return {
		id: ep,
		diagram: e
	};
}, "loader"), ey = {
	id: ep,
	detector: ef,
	loader: eh
}, ew = "requirement", eE = x((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), ev = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.DMFIR9K7.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([33,1,2,6,3,7,9,10,11,12]));
	return {
		id: ew,
		diagram: e
	};
}, "loader"), eb = {
	id: ew,
	detector: eE,
	loader: ev
}, eI = "sequence", eD = x((e) => /^\s*sequenceDiagram/.test(e), "detector"), eT = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.D-jwrVTP.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([34,1,2,3,8,24,4]));
	return {
		id: eI,
		diagram: e
	};
}, "loader"), ek = {
	id: eI,
	detector: eD,
	loader: eT
}, eR = "class", ex = x((e, r) => r?.class?.defaultRenderer !== "dagre-wrapper" && /^\s*classDiagram/.test(e), "detector"), eV = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.BL35mG4Z.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([35,1,2,6,3,7,36,10,12,11,9,13]));
	return {
		id: eR,
		diagram: e
	};
}, "loader"), eO = {
	id: eR,
	detector: ex,
	loader: eV
}, eS = "classDiagram", eL = x((e, r) => !!/^\s*classDiagram/.test(e) && r?.class?.defaultRenderer === "dagre-wrapper" || /^\s*classDiagram-v2/.test(e), "detector"), eA = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.BYfka7W_.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([37,1,2,6,3,7,36,10,12,11,9,13]));
	return {
		id: eS,
		diagram: e
	};
}, "loader"), eM = {
	id: eS,
	detector: eL,
	loader: eA
}, ej = "state", eP = x((e, r) => r?.state?.defaultRenderer !== "dagre-wrapper" && /^\s*stateDiagram/.test(e), "detector"), eC = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.B8jXsBNu.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([38,1,2,6,39,3,10,12,7,11,9,40,41]));
	return {
		id: ej,
		diagram: e
	};
}, "loader"), eN = {
	id: ej,
	detector: eP,
	loader: eC
}, e$ = "stateDiagram", eF = x((e, r) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && r?.state?.defaultRenderer === "dagre-wrapper"), "detector"), ez = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.Cj2EL0lq.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([42,1,2,6,39,3,10,12,7,11,9]));
	return {
		id: e$,
		diagram: e
	};
}, "loader"), eq = {
	id: e$,
	detector: eF,
	loader: ez
}, eH = "journey", eB = x((e) => /^\s*journey/.test(e), "detector"), eG = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.CDgrb8eB.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([43,1,2,3,4,13]));
	return {
		id: eH,
		diagram: e
	};
}, "loader"), eU = {
	id: eH,
	detector: eB,
	loader: eG
}, eZ = { draw: x((e, t, a) => {
	r.debug(`rendering svg for syntax error
`);
	let i = V(t), n = i.append("g");
	i.attr("viewBox", "0 0 2412 512"), o(i, 100, 512, !0), n.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), n.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), n.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), n.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), n.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), n.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${a}`);
}, "draw") }, eX = {
	db: {},
	renderer: eZ,
	parser: { parse: x(() => {}, "parse") }
}, eK = "flowchart-elk", eW = x((e, r = {}) => !!(/^\s*flowchart-elk/.test(e) || /^\s*(flowchart|graph)/.test(e) && r?.flowchart?.defaultRenderer === "elk") && (r.layout = "elk", !0), "detector"), eY = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.tZx6e6yq.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([5,1,2,6,3,7,8,9,10,11,12,13]));
	return {
		id: eK,
		diagram: e
	};
}, "loader"), eJ = {
	id: eK,
	detector: eW,
	loader: eY
}, eQ = "timeline", e1 = x((e) => /^\s*timeline/.test(e), "detector"), e0 = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.fEP3Hl1H.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([44,1,2]));
	return {
		id: eQ,
		diagram: e
	};
}, "loader"), e6 = {
	id: eQ,
	detector: e1,
	loader: e0
}, e2 = "mindmap", e5 = x((e) => /^\s*mindmap/.test(e), "detector"), e3 = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.DwDE3TK1.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([45,1,2,6,3,7,9,10,11,12]));
	return {
		id: e2,
		diagram: e
	};
}, "loader"), e4 = {
	id: e2,
	detector: e5,
	loader: e3
}, e8 = "kanban", e9 = x((e) => /^\s*kanban/.test(e), "detector"), e7 = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.CvzDvdPk.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([46,1,2,29,3,7,8,13]));
	return {
		id: e8,
		diagram: e
	};
}, "loader"), re = {
	id: e8,
	detector: e9,
	loader: e7
}, rr = "sankey", rt = x((e) => /^\s*sankey(-beta)?/.test(e), "detector"), ra = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.PsIRb6qA.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([47,1,2]));
	return {
		id: rr,
		diagram: e
	};
}, "loader"), ri = {
	id: rr,
	detector: rt,
	loader: ra
}, rn = "packet", rd = x((e) => /^\s*packet(-beta)?/.test(e), "detector"), ro = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.DupYe3hi.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([48,1,2,16,17,18,19,29,20,3,21,22,23,25]));
	return {
		id: rn,
		diagram: e
	};
}, "loader"), rs = {
	id: rn,
	detector: rd,
	loader: ro
}, rc = "radar", rl = x((e) => /^\s*radar-beta/.test(e), "detector"), rm = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.BGBT-Y-B.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([49,1,2,16,17,18,19,29,20,3,21,22,23,25]));
	return {
		id: rc,
		diagram: e
	};
}, "loader"), ru = {
	id: rc,
	detector: rl,
	loader: rm
}, r_ = "block", rg = x((e) => /^\s*block(-beta)?/.test(e), "detector"), rp = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.Bku55bOO.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([50,1,2,3,7,41,9,13]));
	return {
		id: r_,
		diagram: e
	};
}, "loader"), rf = {
	id: r_,
	detector: rg,
	loader: rp
}, rh = "architecture", ry = x((e) => /^\s*architecture/.test(e), "detector"), rw = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.CKrsDpSi.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([51,1,2,16,17,18,19,52,29,20,3,21,7,22,23,25]));
	return {
		id: rh,
		diagram: e
	};
}, "loader"), rE = {
	id: rh,
	detector: ry,
	loader: rw
}, rv = "treemap", rb = x((e) => /^\s*treemap/.test(e), "detector"), rI = x(async () => {
	let { diagram: e } = await v(async () => {
		let { diagram: e } = await import("./vendor-mermaid.DFOoXK8l.chunk.js");
		return { diagram: e };
	}, __vite__mapDeps([53,1,2,16,17,18,19,29,20,3,21,22,10,23,25]));
	return {
		id: rv,
		diagram: e
	};
}, "loader"), rD = {
	id: rv,
	detector: rb,
	loader: rI
}, rT = !1, rk = x(() => {
	rT || (rT = !0, I("error", eX, (e) => "error" === e.toLowerCase().trim()), I("---", {
		db: { clear: x(() => {}, "clear") },
		styles: {},
		renderer: { draw: x(() => {}, "draw") },
		parser: { parse: x(() => {
			throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
		}, "parse") },
		init: x(() => null, "init")
	}, (e) => e.toLowerCase().trimStart().startsWith("---")), y(eJ, e4, rE), y(q, re, eM, eO, Y, en, ec, el, eb, ek, W, U, e6, er, eq, eN, eU, eg, ri, rs, ey, rf, ru, rD));
}, "addDiagrams"), rR = x(async () => {
	r.debug("Loading registered diagrams");
	let e = (await Promise.allSettled(Object.entries(n).map(async ([e, { detector: a, loader: i }]) => {
		if (i) try {
			t(e);
		} catch {
			try {
				let { diagram: e, id: r } = await i();
				I(r, e, a);
			} catch (t) {
				throw r.error(`Failed to load external diagram with key ${e}. Removing from detectors.`), delete n[e], t;
			}
		}
	}))).filter((e) => "rejected" === e.status);
	if (e.length > 0) {
		for (let t of (r.error(`Failed to load ${e.length} external diagrams`), e)) r.error(t);
		throw Error(`Failed to load ${e.length} external diagrams`);
	}
}, "loadRegisteredDiagrams"), rx = "comm", rV = "rule", rO = "decl", rS = Math.abs, rL = String.fromCharCode;
function rA(e) {
	return e.trim();
}
function rM(e, r, t) {
	return e.replace(r, t);
}
function rj(e, r, t) {
	return e.indexOf(r, t);
}
function rP(e, r) {
	return 0 | e.charCodeAt(r);
}
function rC(e, r, t) {
	return e.slice(r, t);
}
function rN(e) {
	return e.length;
}
function r$(e) {
	return e.length;
}
function rF(e, r) {
	return r.push(e), e;
}
x(rA, "trim"), x(rM, "replace"), x(rj, "indexof"), x(rP, "charat"), x(rC, "substr"), x(rN, "strlen"), x(r$, "sizeof"), x(rF, "append");
var rz = 1, rq = 1, rH = 0, rB = 0, rG = 0, rU = "";
function rZ(e, r, t, a, i, n, d, o) {
	return {
		value: e,
		root: r,
		parent: t,
		type: a,
		props: i,
		children: n,
		line: rz,
		column: rq,
		length: d,
		return: "",
		siblings: o
	};
}
function rX() {
	return rG;
}
function rK() {
	return rG = rB > 0 ? rP(rU, --rB) : 0, rq--, 10 === rG && (rq = 1, rz--), rG;
}
function rW() {
	return rG = rB < rH ? rP(rU, rB++) : 0, rq++, 10 === rG && (rq = 1, rz++), rG;
}
function rY() {
	return rP(rU, rB);
}
function rJ() {
	return rB;
}
function rQ(e, r) {
	return rC(rU, e, r);
}
function r1(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function r0(e) {
	return rz = rq = 1, rH = rN(rU = e), rB = 0, [];
}
function r6(e) {
	return rU = "", e;
}
function r2(e) {
	return rA(rQ(rB - 1, r4(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function r5(e) {
	for (; (rG = rY()) && rG < 33;) rW();
	return r1(e) > 2 || r1(rG) > 3 ? "" : " ";
}
function r3(e, r) {
	for (; --r && rW() && !(rG < 48 || rG > 102 || rG > 57 && rG < 65 || rG > 70 && rG < 97););
	return rQ(e, rJ() + (r < 6 && 32 == rY() && 32 == rW()));
}
function r4(e) {
	for (; rW();) switch (rG) {
		case e: return rB;
		case 34:
		case 39:
			34 !== e && 39 !== e && r4(rG);
			break;
		case 40:
			41 === e && r4(e);
			break;
		case 92: rW();
	}
	return rB;
}
function r8(e, r) {
	for (; rW() && e + rG !== 57 && (e + rG !== 84 || 47 !== rY()););
	return "/*" + rQ(r, rB - 1) + "*" + rL(47 === e ? e : rW());
}
function r9(e) {
	for (; !r1(rY());) rW();
	return rQ(e, rB);
}
function r7(e) {
	return r6(te("", null, null, null, [""], e = r0(e), 0, [0], e));
}
function te(e, r, t, a, i, n, d, o, s) {
	for (var c = 0, l = 0, m = d, u = 0, _ = 0, g = 0, p = 1, f = 1, h = 1, y = 0, w = "", E = i, v = n, b = a, I = w; f;) switch (g = y, y = rW()) {
		case 40: if (108 != g && 58 == rP(I, m - 1)) {
			-1 != rj(I += rM(r2(y), "&", "&\f"), "&\f", rS(c ? o[c - 1] : 0)) && (h = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			I += r2(y);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			I += r5(g);
			break;
		case 92:
			I += r3(rJ() - 1, 7);
			continue;
		case 47:
			switch (rY()) {
				case 42:
				case 47:
					rF(tt(r8(rW(), rJ()), r, t, s), s), (5 == r1(g || 1) || 5 == r1(rY() || 1)) && rN(I) && " " !== rC(I, -1, void 0) && (I += " ");
					break;
				default: I += "/";
			}
			break;
		case 123 * p: o[c++] = rN(I) * h;
		case 125 * p:
		case 59:
		case 0:
			switch (y) {
				case 0:
				case 125: f = 0;
				case 59 + l:
					-1 == h && (I = rM(I, /\f/g, "")), _ > 0 && (rN(I) - m || 0 === p && 47 === g) && rF(_ > 32 ? ta(I + ";", a, t, m - 1, s) : ta(rM(I, " ", "") + ";", a, t, m - 2, s), s);
					break;
				case 59: I += ";";
				default: if (rF(b = tr(I, r, t, c, l, i, o, w, E = [], v = [], m, n), n), 123 === y) if (0 === l) te(I, r, b, b, E, n, m, o, v);
				else {
					switch (u) {
						case 99: if (110 === rP(I, 3)) break;
						case 108: if (97 === rP(I, 2)) break;
						default: l = 0;
						case 100:
						case 109:
						case 115:
					}
					l ? te(e, b, b, a && rF(tr(e, b, b, 0, 0, i, o, w, i, E = [], m, v), v), i, v, m, o, a ? E : v) : te(I, b, b, b, [""], v, 0, o, v);
				}
			}
			c = l = _ = 0, p = h = 1, w = I = "", m = d;
			break;
		case 58: m = 1 + rN(I), _ = g;
		default:
			if (p < 1) {
				if (123 == y) --p;
				else if (125 == y && 0 == p++ && 125 == rK()) continue;
			}
			switch (I += rL(y), y * p) {
				case 38:
					h = l > 0 ? 1 : (I += "\f", -1);
					break;
				case 44:
					o[c++] = (rN(I) - 1) * h, h = 1;
					break;
				case 64:
					45 === rY() && (I += r2(rW())), u = rY(), l = m = rN(w = I += r9(rJ())), y++;
					break;
				case 45: 45 === g && 2 == rN(I) && (p = 0);
			}
	}
	return n;
}
function tr(e, r, t, a, i, n, d, o, s, c, l, m) {
	for (var u = i - 1, _ = 0 === i ? n : [""], g = r$(_), p = 0, f = 0, h = 0; p < a; ++p) for (var y = 0, w = rC(e, u + 1, u = rS(f = d[p])), E = e; y < g; ++y) (E = rA(f > 0 ? _[y] + " " + w : rM(w, /&\f/g, _[y]))) && (s[h++] = E);
	return rZ(e, r, t, 0 === i ? rV : o, s, c, l, m);
}
function tt(e, r, t, a) {
	return rZ(e, r, t, rx, rL(rX()), rC(e, 2, -2), 0, a);
}
function ta(e, r, t, a, i) {
	return rZ(e, r, t, rO, rC(e, 0, a), rC(e, a + 1, -1), a, i);
}
function ti(e, r) {
	for (var t = "", a = 0; a < e.length; a++) t += r(e[a], a, e, r) || "";
	return t;
}
function tn(e, r, t, a) {
	switch (e.type) {
		case "@layer": if (e.children.length) break;
		case "@import":
		case "@namespace":
		case rO: return e.return = e.return || e.value;
		case rx: return "";
		case "@keyframes": return e.return = e.value + "{" + ti(e.children, a) + "}";
		case rV: if (!rN(e.value = e.props.join(","))) return "";
	}
	return rN(t = ti(e.children, a)) ? e.return = e.value + "{" + t + "}" : "";
}
function td(e, r) {
	e.attr("role", "graphics-document document"), "" !== r && e.attr("aria-roledescription", r);
}
function to(e, r, t, a) {
	if (void 0 !== e.insert) {
		if (t) {
			let r = `chart-desc-${a}`;
			e.attr("aria-describedby", r), e.insert("desc", ":first-child").attr("id", r).text(t);
		}
		if (r) {
			let t = `chart-title-${a}`;
			e.attr("aria-labelledby", t), e.insert("title", ":first-child").attr("id", t).text(r);
		}
	}
}
x(rZ, "node"), x(rX, "char"), x(rK, "prev"), x(rW, "next"), x(rY, "peek"), x(rJ, "caret"), x(rQ, "slice"), x(r1, "token"), x(r0, "alloc"), x(r6, "dealloc"), x(r2, "delimit"), x(r5, "whitespace"), x(r3, "escaping"), x(r4, "delimiter"), x(r8, "commenter"), x(r9, "identifier"), x(r7, "compile"), x(te, "parse"), x(tr, "ruleset"), x(tt, "comment"), x(ta, "declaration"), x(ti, "serialize"), x(tn, "stringify"), x(td, "setA11yDiagramInfo"), x(to, "addSVGa11yTitleDescription");
var ts = class e {
	constructor(e, r, t, a, i) {
		this.type = e, this.text = r, this.db = t, this.parser = a, this.renderer = i;
	}
	static {
		x(this, "Diagram");
	}
	static async fromText(r, a = {}) {
		let i = D(), n = m(r, i);
		r = A(r) + `
`;
		try {
			t(n);
		} catch {
			let e = c(n);
			if (!e) throw new E(`Diagram ${n} not found.`);
			let { id: r, diagram: t } = await e();
			I(r, t);
		}
		let { db: d, parser: o, renderer: s, init: l } = t(n);
		return o.parser && (o.parser.yy = d), d.clear?.(), l?.(i), a.title && d.setDiagramTitle?.(a.title), await o.parse(r), new e(n, r, d, o, s);
	}
	async render(e, r) {
		await this.renderer.draw(this.text, e, r, this);
	}
	getParser() {
		return this.parser;
	}
	getType() {
		return this.type;
	}
}, tc = [], tl = x(() => {
	tc.forEach((e) => {
		e();
	}), tc = [];
}, "attachFunctions"), tm = x((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function tu(e) {
	let r = e.match(k);
	if (!r) return {
		text: e,
		metadata: {}
	};
	let t = F(r[1], { schema: $ }) ?? {};
	t = "object" != typeof t || Array.isArray(t) ? {} : t;
	let a = {};
	return t.displayMode && (a.displayMode = t.displayMode.toString()), t.title && (a.title = t.title.toString()), t.config && (a.config = t.config), {
		text: e.slice(r[0].length),
		metadata: a
	};
}
x(tu, "extractFrontMatter");
var t_ = x((e) => e.replace(/\r\n?/g, `
`).replace(/<(\w+)([^>]*)>/g, (e, r, t) => "<" + r + t.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), tg = x((e) => {
	let { text: r, metadata: t } = tu(e), { displayMode: a, title: i, config: n = {} } = t;
	return a && (n.gantt || (n.gantt = {}), n.gantt.displayMode = a), {
		title: i,
		config: n,
		text: r
	};
}, "processFrontmatter"), tp = x((e) => {
	let r = L.detectInit(e) ?? {}, t = L.detectDirective(e, "wrap");
	return Array.isArray(t) ? r.wrap = t.some(({ type: e }) => "wrap" === e) : t?.type === "wrap" && (r.wrap = !0), {
		text: O(e),
		directive: r
	};
}, "processDirectives");
function tf(e) {
	let r = tg(t_(e)), t = tp(r.text), a = S(r.config, t.directive);
	return {
		code: e = tm(t.text),
		title: r.title,
		config: a
	};
}
function th(e) {
	return btoa(Array.from(new TextEncoder().encode(e), (e) => String.fromCodePoint(e)).join(""));
}
x(tf, "preprocessDiagram"), x(th, "toBase64");
var ty = ["foreignobject"], tw = ["dominant-baseline"];
function tE(e) {
	let r = tf(e);
	return a(), h(r.config ?? {}), r;
}
async function tv(e, r) {
	rk();
	try {
		let { code: r, config: t } = tE(e);
		return {
			diagramType: (await tL(r)).type,
			config: t
		};
	} catch (e) {
		if (r?.suppressErrors) return !1;
		throw e;
	}
}
x(tE, "processAndSetConfigs"), x(tv, "parse");
var tb = x((e, r, t = []) => `
.${e} ${r} { ${t.join(" !important; ")} !important; }`, "cssImportantStyles"), tI = x((e, r = /* @__PURE__ */ new Map()) => {
	let t = "";
	if (void 0 !== e.themeCSS && (t += `
${e.themeCSS}`), void 0 !== e.fontFamily && (t += `
:root { --mermaid-font-family: ${e.fontFamily}}`), void 0 !== e.altFontFamily && (t += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`), r instanceof Map) {
		let a = e.htmlLabels ?? e.flowchart?.htmlLabels ? ["> *", "span"] : [
			"rect",
			"polygon",
			"ellipse",
			"circle",
			"path"
		];
		r.forEach((e) => {
			R(e.styles) || a.forEach((r) => {
				t += tb(e.id, r, e.styles);
			}), R(e.textStyles) || (t += tb(e.id, "tspan", (e?.textStyles || []).map((e) => e.replace("color", "fill"))));
		});
	}
	return t;
}, "createCssStyles"), tD = x((r, t, a, i) => {
	let n = e(t, tI(r, a), r.themeVariables);
	return ti(r7(`${i}{${n}}`), tn);
}, "createUserStyles"), tT = x((e = "", r, t) => {
	let a = e;
	return t || r || (a = a.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#")), a = (a = M(a)).replace(/<br>/g, "<br/>");
}, "cleanUpSvgCode"), tk = x((e = "", r) => {
	let t = r?.viewBox?.baseVal?.height ? r.viewBox.baseVal.height + "px" : "100%", a = th(`<body style="margin:0">${e}</body>`);
	return `<iframe style="width:100%;height:${t};border:0;margin:0;" src="data:text/html;charset=UTF-8;base64,${a}" sandbox="allow-top-navigation-by-user-activation allow-popups">
  The "iframe" tag is not supported by your browser.
</iframe>`;
}, "putIntoIFrame"), tR = x((e, r, t, a, i) => {
	let n = e.append("div");
	n.attr("id", t), a && n.attr("style", a);
	let d = n.append("svg").attr("id", r).attr("width", "100%").attr("xmlns", "http://www.w3.org/2000/svg");
	return i && d.attr("xmlns:xlink", i), d.append("g"), e;
}, "appendDivSvgG");
function tx(e, r) {
	return e.append("iframe").attr("id", r).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
x(tx, "sandboxedIframe");
var tV = x((e, r, t, a) => {
	e.getElementById(r)?.remove(), e.getElementById(t)?.remove(), e.getElementById(a)?.remove();
}, "removeExistingElements"), tO = x(async function(e, t, a) {
	let i, n;
	rk();
	let d = tE(t);
	t = d.code;
	let o = D();
	r.debug(o), t.length > (o?.maxTextSize ?? 5e4) && (t = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa");
	let s = "#" + e, c = "i" + e, l = "#" + c, m = "d" + e, _ = "#" + m, g = x(() => {
		let e = w(f ? l : _).node();
		e && "remove" in e && e.remove();
	}, "removeTempElements"), p = w("body"), f = "sandbox" === o.securityLevel, h = "loose" === o.securityLevel, y = o.fontFamily;
	if (void 0 !== a) {
		if (a && (a.innerHTML = ""), f) {
			let e = tx(w(a), c);
			(p = w(e.nodes()[0].contentDocument.body)).node().style.margin = 0;
		} else p = w(a);
		tR(p, e, m, `font-family: ${y}`, "http://www.w3.org/1999/xlink");
	} else {
		if (tV(document, e, m, c), f) {
			let e = tx(w("body"), c);
			(p = w(e.nodes()[0].contentDocument.body)).node().style.margin = 0;
		} else p = w("body");
		tR(p, e, m);
	}
	try {
		i = await ts.fromText(t, { title: d.title });
	} catch (e) {
		if (o.suppressErrorRendering) throw g(), e;
		i = await ts.fromText("error"), n = e;
	}
	let E = p.select(_).node(), v = i.type, b = E.firstChild, I = b.firstChild, k = tD(o, v, i.renderer.getClasses?.(t, i), s), R = document.createElement("style");
	R.innerHTML = k, b.insertBefore(R, I);
	try {
		await i.renderer.draw(t, e, z.version, i);
	} catch (r) {
		throw o.suppressErrorRendering ? g() : eZ.draw(t, e, z.version), r;
	}
	tA(v, p.select(`${_} svg`), i.db.getAccTitle?.(), i.db.getAccDescription?.()), p.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", "http://www.w3.org/1999/xhtml");
	let V = p.select(_).node().innerHTML;
	if ((r.debug("config.arrowMarkerAbsolute", o.arrowMarkerAbsolute), V = tT(V, f, T(o.arrowMarkerAbsolute)), f) ? V = tk(V, p.select(_ + " svg").node()) : h || (V = u.sanitize(V, {
		ADD_TAGS: ty,
		ADD_ATTR: tw,
		HTML_INTEGRATION_POINTS: { foreignobject: !0 }
	})), tl(), n) throw n;
	return g(), {
		diagramType: v,
		svg: V,
		bindFunctions: i.db.bindFunctions
	};
}, "render");
function tS(e = {}) {
	let r = p({}, e);
	r?.fontFamily && !r.themeVariables?.fontFamily && (r.themeVariables || (r.themeVariables = {}), r.themeVariables.fontFamily = r.fontFamily), s(r), r?.theme && r.theme in b ? r.themeVariables = b[r.theme].getThemeVariables(r.themeVariables) : r && (r.themeVariables = b.default.getThemeVariables(r.themeVariables)), l(("object" == typeof r ? d(r) : i()).logLevel), rk();
}
x(tS, "initialize");
var tL = x((e, r = {}) => {
	let { code: t } = tf(e);
	return ts.fromText(t, r);
}, "getDiagramFromText");
function tA(e, r, t, a) {
	td(r, e), to(r, t, a, r.attr("id"));
}
x(tA, "addA11yInfo");
var tM = Object.freeze({
	render: tO,
	parse: tv,
	getDiagramFromText: tL,
	initialize: tS,
	getConfig: D,
	setConfig: f,
	getSiteConfig: i,
	updateSiteConfig: g,
	reset: x(() => {
		a();
	}, "reset"),
	globalReset: x(() => {
		a(_);
	}, "globalReset"),
	defaultConfig: _
});
l(D().logLevel), a(D());
var tj = x((e, t, a) => {
	r.warn(e), j(e) ? (a && a(e.str, e.hash), t.push({
		...e,
		message: e.str,
		error: e
	})) : (a && a(e), e instanceof Error && t.push({
		str: e.message,
		message: e.message,
		hash: e.name,
		error: e
	}));
}, "handleError"), tP = x(async function(e = { querySelector: ".mermaid" }) {
	try {
		await tC(e);
	} catch (t) {
		if (j(t) && r.error(t.str), tX.parseError && tX.parseError(t), !e.suppressErrors) throw r.error("Use the suppressErrors option to suppress these errors"), t;
	}
}, "run"), tC = x(async function({ postRenderCallback: e, querySelector: t, nodes: a } = { querySelector: ".mermaid" }) {
	let i, n = tM.getConfig();
	if (r.debug(`${e ? "" : "No "}Callback function found`), a) i = a;
	else if (t) i = document.querySelectorAll(t);
	else throw Error("Nodes and querySelector are both undefined");
	r.debug(`Found ${i.length} diagrams`), n?.startOnLoad !== void 0 && (r.debug("Start On Load: " + n?.startOnLoad), tM.updateSiteConfig({ startOnLoad: n?.startOnLoad }));
	let d = new L.InitIDGenerator(n.deterministicIds, n.deterministicIDSeed), o, s = [];
	for (let t of Array.from(i)) {
		if (r.info("Rendering diagram: " + t.id), t.getAttribute("data-processed")) continue;
		t.setAttribute("data-processed", "true");
		let a = `mermaid-${d.next()}`;
		o = t.innerHTML, o = C(L.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
		let i = L.detectInit(o);
		i && r.debug("Detected early reinit: ", i);
		try {
			let { svg: r, bindFunctions: i } = await tZ(a, o, t);
			t.innerHTML = r, e && await e(a), i && i(t);
		} catch (e) {
			tj(e, s, tX.parseError);
		}
	}
	if (s.length > 0) throw s[0];
}, "runThrowsErrors"), tN = x(function(e) {
	tM.initialize(e);
}, "initialize"), t$ = x(async function(e, t, a) {
	r.warn("mermaid.init is deprecated. Please use run instead."), e && tN(e);
	let i = {
		postRenderCallback: a,
		querySelector: ".mermaid"
	};
	"string" == typeof t ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await tP(i);
}, "init"), tF = x(async (e, { lazyLoad: r = !0 } = {}) => {
	rk(), y(...e), !1 === r && await rR();
}, "registerExternalDiagrams"), tz = x(function() {
	if (tX.startOnLoad) {
		let { startOnLoad: e } = tM.getConfig();
		e && tX.run().catch((e) => r.error("Mermaid failed to initialize", e));
	}
}, "contentLoaded");
"u" > typeof document && window.addEventListener("load", tz, !1);
var tq = x(function(e) {
	tX.parseError = e;
}, "setParseErrorHandler"), tH = [], tB = !1, tG = x(async () => {
	if (!tB) {
		for (tB = !0; tH.length > 0;) {
			let e = tH.shift();
			if (e) try {
				await e();
			} catch (e) {
				r.error("Error executing queue", e);
			}
		}
		tB = !1;
	}
}, "executeQueue"), tU = x(async (e, t) => new Promise((a, i) => {
	let n = x(() => new Promise((n, d) => {
		tM.parse(e, t).then((e) => {
			n(e), a(e);
		}, (e) => {
			r.error("Error parsing", e), tX.parseError?.(e), d(e), i(e);
		});
	}), "performCall");
	tH.push(n), tG().catch(i);
}), "parse"), tZ = x((e, t, a) => new Promise((i, n) => {
	let d = x(() => new Promise((d, o) => {
		tM.render(e, t, a).then((e) => {
			d(e), i(e);
		}, (e) => {
			r.error("Error parsing", e), tX.parseError?.(e), o(e), n(e);
		});
	}), "performCall");
	tH.push(d), tG().catch(n);
}), "render"), tX = {
	startOnLoad: !0,
	mermaidAPI: tM,
	parse: tU,
	render: tZ,
	init: t$,
	run: tP,
	registerExternalDiagrams: tF,
	registerLayoutLoaders: N,
	initialize: tN,
	parseError: void 0,
	contentLoaded: tz,
	setParseErrorHandler: tq,
	detectType: m,
	registerIconPacks: P,
	getRegisteredDiagramsMetadata: x(() => Object.keys(n).map((e) => ({ id: e })), "getRegisteredDiagramsMetadata")
}, tK = tX;
export { tK as default };
