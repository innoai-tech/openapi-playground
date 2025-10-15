import { A as $o, D as f, Et as v, F as Go, I as Ho, Ot as zt$1, Q as Uo, bt as ot, dt as hn, et as Wo, g as St, gt as mr, h as M, hn as pt, ln as ia, y as Wt } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BkPEXsWQ.chunk.js";
import { Q as m, tt as q } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BA2pzSbr.chunk.js";
var i = /* @__PURE__ */ q(/* @__PURE__ */ f(), 1);
var x = /* @__PURE__ */ m((n, t) => {
	let e = /* @__PURE__ */ n.append("rect");
	if (e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), t.name && e.attr("name", t.name), t.rx && e.attr("rx", t.rx), t.ry && e.attr("ry", t.ry), t.attrs !== void 0) for (let r in t.attrs) e.attr(r, t.attrs[r]);
	return t.class && e.attr("class", t.class), e;
}, "drawRect"), g = /* @__PURE__ */ m((n, t) => {
	x(n, {
		x: t.startx,
		y: t.starty,
		width: t.stopx - t.startx,
		height: t.stopy - t.starty,
		fill: t.fill,
		stroke: t.stroke,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), y = /* @__PURE__ */ m((n, t) => {
	let e = /* @__PURE__ */ t.text.replace(zt$1, " "), r = /* @__PURE__ */ n.append("text");
	r.attr("x", t.x), r.attr("y", t.y), r.attr("class", "legend"), r.style("text-anchor", t.anchor), t.class && r.attr("class", t.class);
	let s = /* @__PURE__ */ r.append("tspan");
	return s.attr("x", t.x + t.textMargin * 2), s.text(e), r;
}, "drawText"), d = /* @__PURE__ */ m((n, t, e, r) => {
	let s = /* @__PURE__ */ n.append("image");
	s.attr("x", t), s.attr("y", e);
	let a = /* @__PURE__ */ (0, i.sanitizeUrl)(r);
	s.attr("xlink:href", a);
}, "drawImage"), E = /* @__PURE__ */ m((n, t, e, r) => {
	let s = /* @__PURE__ */ n.append("use");
	s.attr("x", t), s.attr("y", e);
	let a = /* @__PURE__ */ (0, i.sanitizeUrl)(r);
	s.attr("xlink:href", `#${a}`);
}, "drawEmbeddedImage"), h = /* @__PURE__ */ m(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	fill: "#EDF2AE",
	stroke: "#666",
	anchor: "start",
	rx: 0,
	ry: 0
}), "getNoteRect"), f$1 = /* @__PURE__ */ m(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	"text-anchor": "start",
	style: "#666",
	textMargin: 0,
	rx: 0,
	ry: 0,
	tspan: !0
}), "getTextObj");
var Mt = /* @__PURE__ */ function() {
	var e = /* @__PURE__ */ m(function(xt, m$1, _, k) {
		for (_ = _ || {}, k = xt.length; k--; _[xt[k]] = m$1);
		return _;
	}, "o"), t = [1, 24], s = [1, 25], o = [1, 26], l = [1, 27], n = [1, 28], a = [1, 63], r = [1, 64], i$1 = [1, 65], u = [1, 66], d$1 = [1, 67], b = [1, 68], p = [1, 69], E$1 = [1, 29], T = [1, 30], D = [1, 31], P = [1, 32], B = [1, 33], j = [1, 34], H = [1, 35], q$1 = [1, 36], G = [1, 37], K = [1, 38], J = [1, 39], Z = [1, 40], $ = [1, 41], tt = [1, 42], et = [1, 43], nt = [1, 44], it = [1, 45], rt = [1, 46], at = [1, 47], st = [1, 48], lt = [1, 50], ot$1 = [1, 51], ct = [1, 52], ht = [1, 53], ut = [1, 54], dt = [1, 55], ft = [1, 56], pt$1 = [1, 57], yt = [1, 58], bt = [1, 59], gt = [1, 60], Ot = [14, 42], Qt = [
		14,
		34,
		36,
		37,
		38,
		39,
		40,
		41,
		42,
		44,
		45,
		46,
		47,
		48,
		49,
		50,
		51,
		52,
		53,
		54,
		55,
		56,
		57,
		58,
		59,
		60,
		61,
		62,
		63,
		64,
		65,
		66,
		67,
		68,
		69,
		70,
		71,
		72,
		73,
		74
	], Rt = [
		12,
		14,
		34,
		36,
		37,
		38,
		39,
		40,
		41,
		42,
		44,
		45,
		46,
		47,
		48,
		49,
		50,
		51,
		52,
		53,
		54,
		55,
		56,
		57,
		58,
		59,
		60,
		61,
		62,
		63,
		64,
		65,
		66,
		67,
		68,
		69,
		70,
		71,
		72,
		73,
		74
	], A = [1, 82], C = [1, 83], v$1 = [1, 84], w = [1, 85], O = [
		12,
		14,
		42
	], he = [
		12,
		14,
		33,
		42
	], Yt = [
		12,
		14,
		33,
		42,
		76,
		77,
		79,
		80
	], kt = [12, 33], Ht = [
		34,
		36,
		37,
		38,
		39,
		40,
		41,
		44,
		45,
		46,
		47,
		48,
		49,
		50,
		51,
		52,
		53,
		54,
		55,
		56,
		57,
		58,
		59,
		60,
		61,
		62,
		63,
		64,
		65,
		66,
		67,
		68,
		69,
		70,
		71,
		72,
		73,
		74
	], qt = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			mermaidDoc: 4,
			direction: 5,
			direction_tb: 6,
			direction_bt: 7,
			direction_rl: 8,
			direction_lr: 9,
			graphConfig: 10,
			C4_CONTEXT: 11,
			NEWLINE: 12,
			statements: 13,
			EOF: 14,
			C4_CONTAINER: 15,
			C4_COMPONENT: 16,
			C4_DYNAMIC: 17,
			C4_DEPLOYMENT: 18,
			otherStatements: 19,
			diagramStatements: 20,
			otherStatement: 21,
			title: 22,
			accDescription: 23,
			acc_title: 24,
			acc_title_value: 25,
			acc_descr: 26,
			acc_descr_value: 27,
			acc_descr_multiline_value: 28,
			boundaryStatement: 29,
			boundaryStartStatement: 30,
			boundaryStopStatement: 31,
			boundaryStart: 32,
			LBRACE: 33,
			ENTERPRISE_BOUNDARY: 34,
			attributes: 35,
			SYSTEM_BOUNDARY: 36,
			BOUNDARY: 37,
			CONTAINER_BOUNDARY: 38,
			NODE: 39,
			NODE_L: 40,
			NODE_R: 41,
			RBRACE: 42,
			diagramStatement: 43,
			PERSON: 44,
			PERSON_EXT: 45,
			SYSTEM: 46,
			SYSTEM_DB: 47,
			SYSTEM_QUEUE: 48,
			SYSTEM_EXT: 49,
			SYSTEM_EXT_DB: 50,
			SYSTEM_EXT_QUEUE: 51,
			CONTAINER: 52,
			CONTAINER_DB: 53,
			CONTAINER_QUEUE: 54,
			CONTAINER_EXT: 55,
			CONTAINER_EXT_DB: 56,
			CONTAINER_EXT_QUEUE: 57,
			COMPONENT: 58,
			COMPONENT_DB: 59,
			COMPONENT_QUEUE: 60,
			COMPONENT_EXT: 61,
			COMPONENT_EXT_DB: 62,
			COMPONENT_EXT_QUEUE: 63,
			REL: 64,
			BIREL: 65,
			REL_U: 66,
			REL_D: 67,
			REL_L: 68,
			REL_R: 69,
			REL_B: 70,
			REL_INDEX: 71,
			UPDATE_EL_STYLE: 72,
			UPDATE_REL_STYLE: 73,
			UPDATE_LAYOUT_CONFIG: 74,
			attribute: 75,
			STR: 76,
			STR_KEY: 77,
			STR_VALUE: 78,
			ATTRIBUTE: 79,
			ATTRIBUTE_EMPTY: 80,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "direction_tb",
			7: "direction_bt",
			8: "direction_rl",
			9: "direction_lr",
			11: "C4_CONTEXT",
			12: "NEWLINE",
			14: "EOF",
			15: "C4_CONTAINER",
			16: "C4_COMPONENT",
			17: "C4_DYNAMIC",
			18: "C4_DEPLOYMENT",
			22: "title",
			23: "accDescription",
			24: "acc_title",
			25: "acc_title_value",
			26: "acc_descr",
			27: "acc_descr_value",
			28: "acc_descr_multiline_value",
			33: "LBRACE",
			34: "ENTERPRISE_BOUNDARY",
			36: "SYSTEM_BOUNDARY",
			37: "BOUNDARY",
			38: "CONTAINER_BOUNDARY",
			39: "NODE",
			40: "NODE_L",
			41: "NODE_R",
			42: "RBRACE",
			44: "PERSON",
			45: "PERSON_EXT",
			46: "SYSTEM",
			47: "SYSTEM_DB",
			48: "SYSTEM_QUEUE",
			49: "SYSTEM_EXT",
			50: "SYSTEM_EXT_DB",
			51: "SYSTEM_EXT_QUEUE",
			52: "CONTAINER",
			53: "CONTAINER_DB",
			54: "CONTAINER_QUEUE",
			55: "CONTAINER_EXT",
			56: "CONTAINER_EXT_DB",
			57: "CONTAINER_EXT_QUEUE",
			58: "COMPONENT",
			59: "COMPONENT_DB",
			60: "COMPONENT_QUEUE",
			61: "COMPONENT_EXT",
			62: "COMPONENT_EXT_DB",
			63: "COMPONENT_EXT_QUEUE",
			64: "REL",
			65: "BIREL",
			66: "REL_U",
			67: "REL_D",
			68: "REL_L",
			69: "REL_R",
			70: "REL_B",
			71: "REL_INDEX",
			72: "UPDATE_EL_STYLE",
			73: "UPDATE_REL_STYLE",
			74: "UPDATE_LAYOUT_CONFIG",
			76: "STR",
			77: "STR_KEY",
			78: "STR_VALUE",
			79: "ATTRIBUTE",
			80: "ATTRIBUTE_EMPTY"
		},
		productions_: [
			0,
			[3, 1],
			[3, 1],
			[5, 1],
			[5, 1],
			[5, 1],
			[5, 1],
			[4, 1],
			[10, 4],
			[10, 4],
			[10, 4],
			[10, 4],
			[10, 4],
			[13, 1],
			[13, 1],
			[13, 2],
			[19, 1],
			[19, 2],
			[19, 3],
			[21, 1],
			[21, 1],
			[21, 2],
			[21, 2],
			[21, 1],
			[29, 3],
			[30, 3],
			[30, 3],
			[30, 4],
			[32, 2],
			[32, 2],
			[32, 2],
			[32, 2],
			[32, 2],
			[32, 2],
			[32, 2],
			[31, 1],
			[20, 1],
			[20, 2],
			[20, 3],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 1],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[35, 1],
			[35, 2],
			[75, 1],
			[75, 2],
			[75, 1],
			[75, 1]
		],
		performAction: /* @__PURE__ */ m(function(m$1, _, k, g$1, R, h$1, Dt) {
			var f$2 = h$1.length - 1;
			switch (R) {
				case 3:
					g$1.setDirection("TB");
					break;
				case 4:
					g$1.setDirection("BT");
					break;
				case 5:
					g$1.setDirection("RL");
					break;
				case 6:
					g$1.setDirection("LR");
					break;
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
					g$1.setC4Type(h$1[f$2 - 3]);
					break;
				case 19:
					g$1.setTitle(/* @__PURE__ */ h$1[f$2].substring(6)), this.$ = /* @__PURE__ */ h$1[f$2].substring(6);
					break;
				case 20:
					g$1.setAccDescription(/* @__PURE__ */ h$1[f$2].substring(15)), this.$ = /* @__PURE__ */ h$1[f$2].substring(15);
					break;
				case 21:
					this.$ = /* @__PURE__ */ h$1[f$2].trim(), g$1.setTitle(this.$);
					break;
				case 22:
				case 23:
					this.$ = /* @__PURE__ */ h$1[f$2].trim(), g$1.setAccDescription(this.$);
					break;
				case 28:
					h$1[f$2].splice(2, 0, "ENTERPRISE"), g$1.addPersonOrSystemBoundary(...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 29:
					h$1[f$2].splice(2, 0, "SYSTEM"), g$1.addPersonOrSystemBoundary(...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 30:
					g$1.addPersonOrSystemBoundary(...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 31:
					h$1[f$2].splice(2, 0, "CONTAINER"), g$1.addContainerBoundary(...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 32:
					g$1.addDeploymentNode("node", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 33:
					g$1.addDeploymentNode("nodeL", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 34:
					g$1.addDeploymentNode("nodeR", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 35:
					g$1.popBoundaryParseStack();
					break;
				case 39:
					g$1.addPersonOrSystem("person", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 40:
					g$1.addPersonOrSystem("external_person", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 41:
					g$1.addPersonOrSystem("system", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 42:
					g$1.addPersonOrSystem("system_db", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 43:
					g$1.addPersonOrSystem("system_queue", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 44:
					g$1.addPersonOrSystem("external_system", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 45:
					g$1.addPersonOrSystem("external_system_db", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 46:
					g$1.addPersonOrSystem("external_system_queue", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 47:
					g$1.addContainer("container", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 48:
					g$1.addContainer("container_db", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 49:
					g$1.addContainer("container_queue", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 50:
					g$1.addContainer("external_container", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 51:
					g$1.addContainer("external_container_db", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 52:
					g$1.addContainer("external_container_queue", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 53:
					g$1.addComponent("component", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 54:
					g$1.addComponent("component_db", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 55:
					g$1.addComponent("component_queue", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 56:
					g$1.addComponent("external_component", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 57:
					g$1.addComponent("external_component_db", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 58:
					g$1.addComponent("external_component_queue", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 60:
					g$1.addRel("rel", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 61:
					g$1.addRel("birel", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 62:
					g$1.addRel("rel_u", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 63:
					g$1.addRel("rel_d", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 64:
					g$1.addRel("rel_l", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 65:
					g$1.addRel("rel_r", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 66:
					g$1.addRel("rel_b", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 67:
					h$1[f$2].splice(0, 1), g$1.addRel("rel", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 68:
					g$1.updateElStyle("update_el_style", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 69:
					g$1.updateRelStyle("update_rel_style", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 70:
					g$1.updateLayoutConfig("update_layout_config", ...h$1[f$2]), this.$ = h$1[f$2];
					break;
				case 71:
					this.$ = [h$1[f$2]];
					break;
				case 72:
					h$1[f$2].unshift(h$1[f$2 - 1]), this.$ = h$1[f$2];
					break;
				case 73:
				case 75:
					this.$ = /* @__PURE__ */ h$1[f$2].trim();
					break;
				case 74:
					let Et = {};
					Et[h$1[f$2 - 1].trim()] = /* @__PURE__ */ h$1[f$2].trim(), this.$ = Et;
					break;
				case 76:
					this.$ = "";
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				5: 3,
				6: [1, 5],
				7: [1, 6],
				8: [1, 7],
				9: [1, 8],
				10: 4,
				11: [1, 9],
				15: [1, 10],
				16: [1, 11],
				17: [1, 12],
				18: [1, 13]
			},
			{ 1: [3] },
			{ 1: [2, 1] },
			{ 1: [2, 2] },
			{ 1: [2, 7] },
			{ 1: [2, 3] },
			{ 1: [2, 4] },
			{ 1: [2, 5] },
			{ 1: [2, 6] },
			{ 12: [1, 14] },
			{ 12: [1, 15] },
			{ 12: [1, 16] },
			{ 12: [1, 17] },
			{ 12: [1, 18] },
			{
				13: 19,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: s,
				24: o,
				26: l,
				28: n,
				29: 49,
				30: 61,
				32: 62,
				34: a,
				36: r,
				37: i$1,
				38: u,
				39: d$1,
				40: b,
				41: p,
				43: 23,
				44: E$1,
				45: T,
				46: D,
				47: P,
				48: B,
				49: j,
				50: H,
				51: q$1,
				52: G,
				53: K,
				54: J,
				55: Z,
				56: $,
				57: tt,
				58: et,
				59: nt,
				60: it,
				61: rt,
				62: at,
				63: st,
				64: lt,
				65: ot$1,
				66: ct,
				67: ht,
				68: ut,
				69: dt,
				70: ft,
				71: pt$1,
				72: yt,
				73: bt,
				74: gt
			},
			{
				13: 70,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: s,
				24: o,
				26: l,
				28: n,
				29: 49,
				30: 61,
				32: 62,
				34: a,
				36: r,
				37: i$1,
				38: u,
				39: d$1,
				40: b,
				41: p,
				43: 23,
				44: E$1,
				45: T,
				46: D,
				47: P,
				48: B,
				49: j,
				50: H,
				51: q$1,
				52: G,
				53: K,
				54: J,
				55: Z,
				56: $,
				57: tt,
				58: et,
				59: nt,
				60: it,
				61: rt,
				62: at,
				63: st,
				64: lt,
				65: ot$1,
				66: ct,
				67: ht,
				68: ut,
				69: dt,
				70: ft,
				71: pt$1,
				72: yt,
				73: bt,
				74: gt
			},
			{
				13: 71,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: s,
				24: o,
				26: l,
				28: n,
				29: 49,
				30: 61,
				32: 62,
				34: a,
				36: r,
				37: i$1,
				38: u,
				39: d$1,
				40: b,
				41: p,
				43: 23,
				44: E$1,
				45: T,
				46: D,
				47: P,
				48: B,
				49: j,
				50: H,
				51: q$1,
				52: G,
				53: K,
				54: J,
				55: Z,
				56: $,
				57: tt,
				58: et,
				59: nt,
				60: it,
				61: rt,
				62: at,
				63: st,
				64: lt,
				65: ot$1,
				66: ct,
				67: ht,
				68: ut,
				69: dt,
				70: ft,
				71: pt$1,
				72: yt,
				73: bt,
				74: gt
			},
			{
				13: 72,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: s,
				24: o,
				26: l,
				28: n,
				29: 49,
				30: 61,
				32: 62,
				34: a,
				36: r,
				37: i$1,
				38: u,
				39: d$1,
				40: b,
				41: p,
				43: 23,
				44: E$1,
				45: T,
				46: D,
				47: P,
				48: B,
				49: j,
				50: H,
				51: q$1,
				52: G,
				53: K,
				54: J,
				55: Z,
				56: $,
				57: tt,
				58: et,
				59: nt,
				60: it,
				61: rt,
				62: at,
				63: st,
				64: lt,
				65: ot$1,
				66: ct,
				67: ht,
				68: ut,
				69: dt,
				70: ft,
				71: pt$1,
				72: yt,
				73: bt,
				74: gt
			},
			{
				13: 73,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: s,
				24: o,
				26: l,
				28: n,
				29: 49,
				30: 61,
				32: 62,
				34: a,
				36: r,
				37: i$1,
				38: u,
				39: d$1,
				40: b,
				41: p,
				43: 23,
				44: E$1,
				45: T,
				46: D,
				47: P,
				48: B,
				49: j,
				50: H,
				51: q$1,
				52: G,
				53: K,
				54: J,
				55: Z,
				56: $,
				57: tt,
				58: et,
				59: nt,
				60: it,
				61: rt,
				62: at,
				63: st,
				64: lt,
				65: ot$1,
				66: ct,
				67: ht,
				68: ut,
				69: dt,
				70: ft,
				71: pt$1,
				72: yt,
				73: bt,
				74: gt
			},
			{ 14: [1, 74] },
			/* @__PURE__ */ e(Ot, [2, 13], {
				43: 23,
				29: 49,
				30: 61,
				32: 62,
				20: 75,
				34: a,
				36: r,
				37: i$1,
				38: u,
				39: d$1,
				40: b,
				41: p,
				44: E$1,
				45: T,
				46: D,
				47: P,
				48: B,
				49: j,
				50: H,
				51: q$1,
				52: G,
				53: K,
				54: J,
				55: Z,
				56: $,
				57: tt,
				58: et,
				59: nt,
				60: it,
				61: rt,
				62: at,
				63: st,
				64: lt,
				65: ot$1,
				66: ct,
				67: ht,
				68: ut,
				69: dt,
				70: ft,
				71: pt$1,
				72: yt,
				73: bt,
				74: gt
			}),
			/* @__PURE__ */ e(Ot, [2, 14]),
			/* @__PURE__ */ e(Qt, [2, 16], { 12: [1, 76] }),
			/* @__PURE__ */ e(Ot, [2, 36], { 12: [1, 77] }),
			/* @__PURE__ */ e(Rt, [2, 19]),
			/* @__PURE__ */ e(Rt, [2, 20]),
			{ 25: [1, 78] },
			{ 27: [1, 79] },
			/* @__PURE__ */ e(Rt, [2, 23]),
			{
				35: 80,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 86,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 87,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 88,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 89,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 90,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 91,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 92,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 93,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 94,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 95,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 96,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 97,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 98,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 99,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 100,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 101,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 102,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 103,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 104,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			/* @__PURE__ */ e(O, [2, 59]),
			{
				35: 105,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 106,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 107,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 108,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 109,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 110,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 111,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 112,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 113,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 114,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 115,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				20: 116,
				29: 49,
				30: 61,
				32: 62,
				34: a,
				36: r,
				37: i$1,
				38: u,
				39: d$1,
				40: b,
				41: p,
				43: 23,
				44: E$1,
				45: T,
				46: D,
				47: P,
				48: B,
				49: j,
				50: H,
				51: q$1,
				52: G,
				53: K,
				54: J,
				55: Z,
				56: $,
				57: tt,
				58: et,
				59: nt,
				60: it,
				61: rt,
				62: at,
				63: st,
				64: lt,
				65: ot$1,
				66: ct,
				67: ht,
				68: ut,
				69: dt,
				70: ft,
				71: pt$1,
				72: yt,
				73: bt,
				74: gt
			},
			{
				12: [1, 118],
				33: [1, 117]
			},
			{
				35: 119,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 120,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 121,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 122,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 123,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 124,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{
				35: 125,
				75: 81,
				76: A,
				77: C,
				79: v$1,
				80: w
			},
			{ 14: [1, 126] },
			{ 14: [1, 127] },
			{ 14: [1, 128] },
			{ 14: [1, 129] },
			{ 1: [2, 8] },
			/* @__PURE__ */ e(Ot, [2, 15]),
			/* @__PURE__ */ e(Qt, [2, 17], {
				21: 22,
				19: 130,
				22: t,
				23: s,
				24: o,
				26: l,
				28: n
			}),
			/* @__PURE__ */ e(Ot, [2, 37], {
				19: 20,
				20: 21,
				21: 22,
				43: 23,
				29: 49,
				30: 61,
				32: 62,
				13: 131,
				22: t,
				23: s,
				24: o,
				26: l,
				28: n,
				34: a,
				36: r,
				37: i$1,
				38: u,
				39: d$1,
				40: b,
				41: p,
				44: E$1,
				45: T,
				46: D,
				47: P,
				48: B,
				49: j,
				50: H,
				51: q$1,
				52: G,
				53: K,
				54: J,
				55: Z,
				56: $,
				57: tt,
				58: et,
				59: nt,
				60: it,
				61: rt,
				62: at,
				63: st,
				64: lt,
				65: ot$1,
				66: ct,
				67: ht,
				68: ut,
				69: dt,
				70: ft,
				71: pt$1,
				72: yt,
				73: bt,
				74: gt
			}),
			/* @__PURE__ */ e(Rt, [2, 21]),
			/* @__PURE__ */ e(Rt, [2, 22]),
			/* @__PURE__ */ e(O, [2, 39]),
			/* @__PURE__ */ e(he, [2, 71], {
				75: 81,
				35: 132,
				76: A,
				77: C,
				79: v$1,
				80: w
			}),
			/* @__PURE__ */ e(Yt, [2, 73]),
			{ 78: [1, 133] },
			/* @__PURE__ */ e(Yt, [2, 75]),
			/* @__PURE__ */ e(Yt, [2, 76]),
			/* @__PURE__ */ e(O, [2, 40]),
			/* @__PURE__ */ e(O, [2, 41]),
			/* @__PURE__ */ e(O, [2, 42]),
			/* @__PURE__ */ e(O, [2, 43]),
			/* @__PURE__ */ e(O, [2, 44]),
			/* @__PURE__ */ e(O, [2, 45]),
			/* @__PURE__ */ e(O, [2, 46]),
			/* @__PURE__ */ e(O, [2, 47]),
			/* @__PURE__ */ e(O, [2, 48]),
			/* @__PURE__ */ e(O, [2, 49]),
			/* @__PURE__ */ e(O, [2, 50]),
			/* @__PURE__ */ e(O, [2, 51]),
			/* @__PURE__ */ e(O, [2, 52]),
			/* @__PURE__ */ e(O, [2, 53]),
			/* @__PURE__ */ e(O, [2, 54]),
			/* @__PURE__ */ e(O, [2, 55]),
			/* @__PURE__ */ e(O, [2, 56]),
			/* @__PURE__ */ e(O, [2, 57]),
			/* @__PURE__ */ e(O, [2, 58]),
			/* @__PURE__ */ e(O, [2, 60]),
			/* @__PURE__ */ e(O, [2, 61]),
			/* @__PURE__ */ e(O, [2, 62]),
			/* @__PURE__ */ e(O, [2, 63]),
			/* @__PURE__ */ e(O, [2, 64]),
			/* @__PURE__ */ e(O, [2, 65]),
			/* @__PURE__ */ e(O, [2, 66]),
			/* @__PURE__ */ e(O, [2, 67]),
			/* @__PURE__ */ e(O, [2, 68]),
			/* @__PURE__ */ e(O, [2, 69]),
			/* @__PURE__ */ e(O, [2, 70]),
			{
				31: 134,
				42: [1, 135]
			},
			{ 12: [1, 136] },
			{ 33: [1, 137] },
			/* @__PURE__ */ e(kt, [2, 28]),
			/* @__PURE__ */ e(kt, [2, 29]),
			/* @__PURE__ */ e(kt, [2, 30]),
			/* @__PURE__ */ e(kt, [2, 31]),
			/* @__PURE__ */ e(kt, [2, 32]),
			/* @__PURE__ */ e(kt, [2, 33]),
			/* @__PURE__ */ e(kt, [2, 34]),
			{ 1: [2, 9] },
			{ 1: [2, 10] },
			{ 1: [2, 11] },
			{ 1: [2, 12] },
			/* @__PURE__ */ e(Qt, [2, 18]),
			/* @__PURE__ */ e(Ot, [2, 38]),
			/* @__PURE__ */ e(he, [2, 72]),
			/* @__PURE__ */ e(Yt, [2, 74]),
			/* @__PURE__ */ e(O, [2, 24]),
			/* @__PURE__ */ e(O, [2, 35]),
			/* @__PURE__ */ e(Ht, [2, 25]),
			/* @__PURE__ */ e(Ht, [2, 26], { 12: [1, 138] }),
			/* @__PURE__ */ e(Ht, [2, 27])
		],
		defaultActions: {
			2: [2, 1],
			3: [2, 2],
			4: [2, 7],
			5: [2, 3],
			6: [2, 4],
			7: [2, 5],
			8: [2, 6],
			74: [2, 8],
			126: [2, 9],
			127: [2, 10],
			128: [2, 11],
			129: [2, 12]
		},
		parseError: /* @__PURE__ */ m(function(m$1, _) {
			if (_.recoverable) this.trace(m$1);
			else {
				var k = new Error(m$1);
				throw k.hash = _, k;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(m$1) {
			var _ = this, k = [0], g$1 = [], R = [null], h$1 = [], Dt = this.table, f$2 = "", Et = 0, ue = 0, de = 0, Ye = 2, fe = 1, Ie = /* @__PURE__ */ h$1.slice.call(arguments, 1), S = /* @__PURE__ */ Object.create(this.lexer), At = { yy: {} };
			for (var Kt in this.yy) Object.prototype.hasOwnProperty.call(this.yy, Kt) && (At.yy[Kt] = this.yy[Kt]);
			S.setInput(m$1, At.yy), At.yy.lexer = S, At.yy.parser = this, typeof S.yylloc > "u" && (S.yylloc = {});
			var Jt = S.yylloc;
			h$1.push(Jt);
			var je = S.options && S.options.ranges;
			typeof At.yy.parseError == "function" ? this.parseError = At.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function L0(Y) {
				k.length = k.length - 2 * Y, R.length = R.length - Y, h$1.length = h$1.length - Y;
			}
			m(L0, "popStack");
			function Ue() {
				var Y;
				return Y = g$1.pop() || S.lex() || fe, typeof Y != "number" && (Y instanceof Array && (g$1 = Y, Y = /* @__PURE__ */ g$1.pop()), Y = _.symbols_[Y] || Y), Y;
			}
			m(Ue, "lex");
			for (var M$1, Zt, Ct, I, $t, Tt = {}, It, W, pe, jt;;) {
				if (Ct = k[k.length - 1], this.defaultActions[Ct] ? I = this.defaultActions[Ct] : ((M$1 === null || typeof M$1 > "u") && (M$1 = /* @__PURE__ */ Ue()), I = Dt[Ct] && Dt[Ct][M$1]), typeof I > "u" || !I.length || !I[0]) {
					var te = "";
					jt = [];
					for (It in Dt[Ct]) this.terminals_[It] && It > Ye && jt.push("'" + this.terminals_[It] + "'");
					S.showPosition ? te = "Parse error on line " + (Et + 1) + `:
` + S.showPosition() + `
Expecting ` + jt.join(", ") + ", got '" + (this.terminals_[M$1] || M$1) + "'" : te = "Parse error on line " + (Et + 1) + ": Unexpected " + (M$1 == fe ? "end of input" : "'" + (this.terminals_[M$1] || M$1) + "'"), this.parseError(te, {
						text: S.match,
						token: this.terminals_[M$1] || M$1,
						line: S.yylineno,
						loc: Jt,
						expected: jt
					});
				}
				if (I[0] instanceof Array && I.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Ct + ", token: " + M$1);
				switch (I[0]) {
					case 1:
						k.push(M$1), R.push(S.yytext), h$1.push(S.yylloc), k.push(I[1]), M$1 = null, Zt ? (M$1 = Zt, Zt = null) : (ue = S.yyleng, f$2 = S.yytext, Et = S.yylineno, Jt = S.yylloc, de > 0 && de--);
						break;
					case 2:
						if (W = this.productions_[I[1]][1], Tt.$ = R[R.length - W], Tt._$ = {
							first_line: h$1[h$1.length - (W || 1)].first_line,
							last_line: h$1[h$1.length - 1].last_line,
							first_column: h$1[h$1.length - (W || 1)].first_column,
							last_column: h$1[h$1.length - 1].last_column
						}, je && (Tt._$.range = [h$1[h$1.length - (W || 1)].range[0], h$1[h$1.length - 1].range[1]]), $t = /* @__PURE__ */ this.performAction.apply(Tt, /* @__PURE__ */ [
							f$2,
							ue,
							Et,
							At.yy,
							I[1],
							R,
							h$1
						].concat(Ie)), typeof $t < "u") return $t;
						W && (k = /* @__PURE__ */ k.slice(0, -1 * W * 2), R = /* @__PURE__ */ R.slice(0, -1 * W), h$1 = /* @__PURE__ */ h$1.slice(0, -1 * W)), k.push(this.productions_[I[1]][0]), R.push(Tt.$), h$1.push(Tt._$), pe = Dt[k[k.length - 2]][k[k.length - 1]], k.push(pe);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	qt.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(_, k) {
				if (this.yy.parser) this.yy.parser.parseError(_, k);
				else throw new Error(_);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(m$1, _) {
				return this.yy = _ || this.yy || {}, this._input = m$1, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var m$1 = this._input[0];
				this.yytext += m$1, this.yyleng++, this.offset++, this.match += m$1, this.matched += m$1;
				return m$1.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), m$1;
			}, "input"),
			unput: /* @__PURE__ */ m(function(m$1) {
				var _ = m$1.length, k = /* @__PURE__ */ m$1.split(/(?:\r\n?|\n)/g);
				this._input = m$1 + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - _), this.offset -= _;
				var g$1 = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
				this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), k.length - 1 && (this.yylineno -= k.length - 1);
				var R = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: k ? (k.length === g$1.length ? this.yylloc.first_column : 0) + g$1[g$1.length - k.length].length - k[0].length : this.yylloc.first_column - _
				}, this.options.ranges && (this.yylloc.range = [R[0], R[0] + this.yyleng - _]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ m(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ m(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ m(function(m$1) {
				this.unput(/* @__PURE__ */ this.match.slice(m$1));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var m$1 = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
				return (m$1.length > 20 ? "..." : "") + m$1.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var m$1 = this.match;
				return m$1.length < 20 && (m$1 += /* @__PURE__ */ this._input.substr(0, 20 - m$1.length)), (m$1.substr(0, 20) + (m$1.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var m$1 = /* @__PURE__ */ this.pastInput(), _ = /* @__PURE__ */ new Array(m$1.length + 1).join("-");
				return m$1 + this.upcomingInput() + `
` + _ + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(m$1, _) {
				var k, g$1, R;
				if (this.options.backtrack_lexer && (R = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: /* @__PURE__ */ this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (R.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), g$1 = /* @__PURE__ */ m$1[0].match(/(?:\r\n?|\n).*/g), g$1 && (this.yylineno += g$1.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: g$1 ? g$1[g$1.length - 1].length - g$1[g$1.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + m$1[0].length
				}, this.yytext += m$1[0], this.match += m$1[0], this.matches = m$1, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = /* @__PURE__ */ this._input.slice(m$1[0].length), this.matched += m$1[0], k = /* @__PURE__ */ this.performAction.call(this, this.yy, this, _, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), k) return k;
				if (this._backtrack) {
					for (var h$1 in R) this[h$1] = R[h$1];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var m$1, _, k, g$1;
				this._more || (this.yytext = "", this.match = "");
				for (var R = /* @__PURE__ */ this._currentRules(), h$1 = 0; h$1 < R.length; h$1++) if (k = /* @__PURE__ */ this._input.match(this.rules[R[h$1]]), k && (!_ || k[0].length > _[0].length)) {
					if (_ = k, g$1 = h$1, this.options.backtrack_lexer) {
						if (m$1 = /* @__PURE__ */ this.test_match(k, R[h$1]), m$1 !== !1) return m$1;
						if (this._backtrack) {
							_ = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return _ ? (m$1 = /* @__PURE__ */ this.test_match(_, R[g$1]), m$1 !== !1 ? m$1 : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(_) {
				this.conditionStack.push(_);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(_) {
				return _ = this.conditionStack.length - 1 - Math.abs(_ || 0), _ >= 0 ? this.conditionStack[_] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(_) {
				this.begin(_);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: {},
			performAction: /* @__PURE__ */ m(function(_, k, g$1, R) {
				switch (g$1) {
					case 0: return 6;
					case 1: return 7;
					case 2: return 8;
					case 3: return 9;
					case 4: return 22;
					case 5: return 23;
					case 6: return this.begin("acc_title"), 24;
					case 7: return this.popState(), "acc_title_value";
					case 8: return this.begin("acc_descr"), 26;
					case 9: return this.popState(), "acc_descr_value";
					case 10:
						this.begin("acc_descr_multiline");
						break;
					case 11:
						this.popState();
						break;
					case 12: return "acc_descr_multiline_value";
					case 13: break;
					case 14:
						c;
						break;
					case 15: return 12;
					case 16: break;
					case 17: return 11;
					case 18: return 15;
					case 19: return 16;
					case 20: return 17;
					case 21: return 18;
					case 22: return this.begin("person_ext"), 45;
					case 23: return this.begin("person"), 44;
					case 24: return this.begin("system_ext_queue"), 51;
					case 25: return this.begin("system_ext_db"), 50;
					case 26: return this.begin("system_ext"), 49;
					case 27: return this.begin("system_queue"), 48;
					case 28: return this.begin("system_db"), 47;
					case 29: return this.begin("system"), 46;
					case 30: return this.begin("boundary"), 37;
					case 31: return this.begin("enterprise_boundary"), 34;
					case 32: return this.begin("system_boundary"), 36;
					case 33: return this.begin("container_ext_queue"), 57;
					case 34: return this.begin("container_ext_db"), 56;
					case 35: return this.begin("container_ext"), 55;
					case 36: return this.begin("container_queue"), 54;
					case 37: return this.begin("container_db"), 53;
					case 38: return this.begin("container"), 52;
					case 39: return this.begin("container_boundary"), 38;
					case 40: return this.begin("component_ext_queue"), 63;
					case 41: return this.begin("component_ext_db"), 62;
					case 42: return this.begin("component_ext"), 61;
					case 43: return this.begin("component_queue"), 60;
					case 44: return this.begin("component_db"), 59;
					case 45: return this.begin("component"), 58;
					case 46: return this.begin("node"), 39;
					case 47: return this.begin("node"), 39;
					case 48: return this.begin("node_l"), 40;
					case 49: return this.begin("node_r"), 41;
					case 50: return this.begin("rel"), 64;
					case 51: return this.begin("birel"), 65;
					case 52: return this.begin("rel_u"), 66;
					case 53: return this.begin("rel_u"), 66;
					case 54: return this.begin("rel_d"), 67;
					case 55: return this.begin("rel_d"), 67;
					case 56: return this.begin("rel_l"), 68;
					case 57: return this.begin("rel_l"), 68;
					case 58: return this.begin("rel_r"), 69;
					case 59: return this.begin("rel_r"), 69;
					case 60: return this.begin("rel_b"), 70;
					case 61: return this.begin("rel_index"), 71;
					case 62: return this.begin("update_el_style"), 72;
					case 63: return this.begin("update_rel_style"), 73;
					case 64: return this.begin("update_layout_config"), 74;
					case 65: return "EOF_IN_STRUCT";
					case 66: return this.begin("attribute"), "ATTRIBUTE_EMPTY";
					case 67:
						this.begin("attribute");
						break;
					case 68:
						this.popState(), this.popState();
						break;
					case 69: return 80;
					case 70: break;
					case 71: return 80;
					case 72:
						this.begin("string");
						break;
					case 73:
						this.popState();
						break;
					case 74: return "STR";
					case 75:
						this.begin("string_kv");
						break;
					case 76: return this.begin("string_kv_key"), "STR_KEY";
					case 77:
						this.popState(), this.begin("string_kv_value");
						break;
					case 78: return "STR_VALUE";
					case 79:
						this.popState(), this.popState();
						break;
					case 80: return "STR";
					case 81: return "LBRACE";
					case 82: return "RBRACE";
					case 83: return "SPACE";
					case 84: return "EOL";
					case 85: return 14;
				}
			}, "anonymous"),
			rules: [
				/^(?:.*direction\s+TB[^\n]*)/,
				/^(?:.*direction\s+BT[^\n]*)/,
				/^(?:.*direction\s+RL[^\n]*)/,
				/^(?:.*direction\s+LR[^\n]*)/,
				/^(?:title\s[^#\n;]+)/,
				/^(?:accDescription\s[^#\n;]+)/,
				/^(?:accTitle\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*\{\s*)/,
				/^(?:[\}])/,
				/^(?:[^\}]*)/,
				/^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,
				/^(?:%%[^\n]*(\r?\n)*)/,
				/^(?:\s*(\r?\n)+)/,
				/^(?:\s+)/,
				/^(?:C4Context\b)/,
				/^(?:C4Container\b)/,
				/^(?:C4Component\b)/,
				/^(?:C4Dynamic\b)/,
				/^(?:C4Deployment\b)/,
				/^(?:Person_Ext\b)/,
				/^(?:Person\b)/,
				/^(?:SystemQueue_Ext\b)/,
				/^(?:SystemDb_Ext\b)/,
				/^(?:System_Ext\b)/,
				/^(?:SystemQueue\b)/,
				/^(?:SystemDb\b)/,
				/^(?:System\b)/,
				/^(?:Boundary\b)/,
				/^(?:Enterprise_Boundary\b)/,
				/^(?:System_Boundary\b)/,
				/^(?:ContainerQueue_Ext\b)/,
				/^(?:ContainerDb_Ext\b)/,
				/^(?:Container_Ext\b)/,
				/^(?:ContainerQueue\b)/,
				/^(?:ContainerDb\b)/,
				/^(?:Container\b)/,
				/^(?:Container_Boundary\b)/,
				/^(?:ComponentQueue_Ext\b)/,
				/^(?:ComponentDb_Ext\b)/,
				/^(?:Component_Ext\b)/,
				/^(?:ComponentQueue\b)/,
				/^(?:ComponentDb\b)/,
				/^(?:Component\b)/,
				/^(?:Deployment_Node\b)/,
				/^(?:Node\b)/,
				/^(?:Node_L\b)/,
				/^(?:Node_R\b)/,
				/^(?:Rel\b)/,
				/^(?:BiRel\b)/,
				/^(?:Rel_Up\b)/,
				/^(?:Rel_U\b)/,
				/^(?:Rel_Down\b)/,
				/^(?:Rel_D\b)/,
				/^(?:Rel_Left\b)/,
				/^(?:Rel_L\b)/,
				/^(?:Rel_Right\b)/,
				/^(?:Rel_R\b)/,
				/^(?:Rel_Back\b)/,
				/^(?:RelIndex\b)/,
				/^(?:UpdateElementStyle\b)/,
				/^(?:UpdateRelStyle\b)/,
				/^(?:UpdateLayoutConfig\b)/,
				/^(?:$)/,
				/^(?:[(][ ]*[,])/,
				/^(?:[(])/,
				/^(?:[)])/,
				/^(?:,,)/,
				/^(?:,)/,
				/^(?:[ ]*["]["])/,
				/^(?:[ ]*["])/,
				/^(?:["])/,
				/^(?:[^"]*)/,
				/^(?:[ ]*[\$])/,
				/^(?:[^=]*)/,
				/^(?:[=][ ]*["])/,
				/^(?:[^"]+)/,
				/^(?:["])/,
				/^(?:[^,]+)/,
				/^(?:\{)/,
				/^(?:\})/,
				/^(?:[\s]+)/,
				/^(?:[\n\r]+)/,
				/^(?:$)/
			],
			conditions: {
				acc_descr_multiline: {
					rules: [11, 12],
					inclusive: !1
				},
				acc_descr: {
					rules: [9],
					inclusive: !1
				},
				acc_title: {
					rules: [7],
					inclusive: !1
				},
				string_kv_value: {
					rules: [78, 79],
					inclusive: !1
				},
				string_kv_key: {
					rules: [77],
					inclusive: !1
				},
				string_kv: {
					rules: [76],
					inclusive: !1
				},
				string: {
					rules: [73, 74],
					inclusive: !1
				},
				attribute: {
					rules: [
						68,
						69,
						70,
						71,
						72,
						75,
						80
					],
					inclusive: !1
				},
				update_layout_config: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				update_rel_style: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				update_el_style: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_b: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_r: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_l: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_d: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_u: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_bi: {
					rules: [],
					inclusive: !1
				},
				rel: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				node_r: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				node_l: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				node: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				index: {
					rules: [],
					inclusive: !1
				},
				rel_index: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component_ext_queue: {
					rules: [],
					inclusive: !1
				},
				component_ext_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component_ext: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_boundary: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_ext_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_ext_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_ext: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				birel: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_boundary: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				enterprise_boundary: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				boundary: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_ext_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_ext_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_ext: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				person_ext: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				person: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						8,
						10,
						13,
						14,
						15,
						16,
						17,
						18,
						19,
						20,
						21,
						22,
						23,
						24,
						25,
						26,
						27,
						28,
						29,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46,
						47,
						48,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						58,
						59,
						60,
						61,
						62,
						63,
						64,
						81,
						82,
						83,
						84,
						85
					],
					inclusive: !0
				}
			}
		};
	}();
	function Gt() {
		this.yy = {};
	}
	return m(Gt, "Parser"), Gt.prototype = qt, qt.Parser = Gt, new Gt();
}();
Mt.parser = Mt;
var Ce = Mt;
var F = [], mt = [""], L = "global", U = "", X = [{
	alias: "global",
	label: { text: "global" },
	type: { text: "global" },
	tags: null,
	link: null,
	parentBoundary: ""
}], Lt = [], re = "", ae = !1, Ut = 4, Ft = 2, ve, ze = /* @__PURE__ */ m(function() {
	return ve;
}, "getC4Type"), Xe = /* @__PURE__ */ m(function(e) {
	ve = /* @__PURE__ */ ot(e, /* @__PURE__ */ mr());
}, "setC4Type"), We = /* @__PURE__ */ m(function(e, t, s, o, l, n, a, r, i$1) {
	if (e == null || t === void 0 || t === null || s === void 0 || s === null || o === void 0 || o === null) return;
	let u = {}, d$1 = /* @__PURE__ */ Lt.find((b) => b.from === t && b.to === s);
	if (d$1 ? u = d$1 : Lt.push(u), u.type = e, u.from = t, u.to = s, u.label = { text: o }, l == null) u.techn = { text: "" };
	else if (typeof l == "object") {
		let [b, p] = Object.entries(l)[0];
		u[b] = { text: p };
	} else u.techn = { text: l };
	if (n == null) u.descr = { text: "" };
	else if (typeof n == "object") {
		let [b, p] = Object.entries(n)[0];
		u[b] = { text: p };
	} else u.descr = { text: n };
	if (typeof a == "object") {
		let [b, p] = Object.entries(a)[0];
		u[b] = p;
	} else u.sprite = a;
	if (typeof r == "object") {
		let [b, p] = Object.entries(r)[0];
		u[b] = p;
	} else u.tags = r;
	if (typeof i$1 == "object") {
		let [b, p] = Object.entries(i$1)[0];
		u[b] = p;
	} else u.link = i$1;
	u.wrap = /* @__PURE__ */ _t();
}, "addRel"), Qe = /* @__PURE__ */ m(function(e, t, s, o, l, n, a) {
	if (t === null || s === null) return;
	let r = {}, i$1 = /* @__PURE__ */ F.find((u) => u.alias === t);
	if (i$1 && t === i$1.alias ? r = i$1 : (r.alias = t, F.push(r)), s == null ? r.label = { text: "" } : r.label = { text: s }, o == null) r.descr = { text: "" };
	else if (typeof o == "object") {
		let [u, d$1] = Object.entries(o)[0];
		r[u] = { text: d$1 };
	} else r.descr = { text: o };
	if (typeof l == "object") {
		let [u, d$1] = Object.entries(l)[0];
		r[u] = d$1;
	} else r.sprite = l;
	if (typeof n == "object") {
		let [u, d$1] = Object.entries(n)[0];
		r[u] = d$1;
	} else r.tags = n;
	if (typeof a == "object") {
		let [u, d$1] = Object.entries(a)[0];
		r[u] = d$1;
	} else r.link = a;
	r.typeC4Shape = { text: e }, r.parentBoundary = L, r.wrap = /* @__PURE__ */ _t();
}, "addPersonOrSystem"), He = /* @__PURE__ */ m(function(e, t, s, o, l, n, a, r) {
	if (t === null || s === null) return;
	let i$1 = {}, u = /* @__PURE__ */ F.find((d$1) => d$1.alias === t);
	if (u && t === u.alias ? i$1 = u : (i$1.alias = t, F.push(i$1)), s == null ? i$1.label = { text: "" } : i$1.label = { text: s }, o == null) i$1.techn = { text: "" };
	else if (typeof o == "object") {
		let [d$1, b] = Object.entries(o)[0];
		i$1[d$1] = { text: b };
	} else i$1.techn = { text: o };
	if (l == null) i$1.descr = { text: "" };
	else if (typeof l == "object") {
		let [d$1, b] = Object.entries(l)[0];
		i$1[d$1] = { text: b };
	} else i$1.descr = { text: l };
	if (typeof n == "object") {
		let [d$1, b] = Object.entries(n)[0];
		i$1[d$1] = b;
	} else i$1.sprite = n;
	if (typeof a == "object") {
		let [d$1, b] = Object.entries(a)[0];
		i$1[d$1] = b;
	} else i$1.tags = a;
	if (typeof r == "object") {
		let [d$1, b] = Object.entries(r)[0];
		i$1[d$1] = b;
	} else i$1.link = r;
	i$1.wrap = /* @__PURE__ */ _t(), i$1.typeC4Shape = { text: e }, i$1.parentBoundary = L;
}, "addContainer"), qe = /* @__PURE__ */ m(function(e, t, s, o, l, n, a, r) {
	if (t === null || s === null) return;
	let i$1 = {}, u = /* @__PURE__ */ F.find((d$1) => d$1.alias === t);
	if (u && t === u.alias ? i$1 = u : (i$1.alias = t, F.push(i$1)), s == null ? i$1.label = { text: "" } : i$1.label = { text: s }, o == null) i$1.techn = { text: "" };
	else if (typeof o == "object") {
		let [d$1, b] = Object.entries(o)[0];
		i$1[d$1] = { text: b };
	} else i$1.techn = { text: o };
	if (l == null) i$1.descr = { text: "" };
	else if (typeof l == "object") {
		let [d$1, b] = Object.entries(l)[0];
		i$1[d$1] = { text: b };
	} else i$1.descr = { text: l };
	if (typeof n == "object") {
		let [d$1, b] = Object.entries(n)[0];
		i$1[d$1] = b;
	} else i$1.sprite = n;
	if (typeof a == "object") {
		let [d$1, b] = Object.entries(a)[0];
		i$1[d$1] = b;
	} else i$1.tags = a;
	if (typeof r == "object") {
		let [d$1, b] = Object.entries(r)[0];
		i$1[d$1] = b;
	} else i$1.link = r;
	i$1.wrap = /* @__PURE__ */ _t(), i$1.typeC4Shape = { text: e }, i$1.parentBoundary = L;
}, "addComponent"), Ge = /* @__PURE__ */ m(function(e, t, s, o, l) {
	if (e === null || t === null) return;
	let n = {}, a = /* @__PURE__ */ X.find((r) => r.alias === e);
	if (a && e === a.alias ? n = a : (n.alias = e, X.push(n)), t == null ? n.label = { text: "" } : n.label = { text: t }, s == null) n.type = { text: "system" };
	else if (typeof s == "object") {
		let [r, i$1] = Object.entries(s)[0];
		n[r] = { text: i$1 };
	} else n.type = { text: s };
	if (typeof o == "object") {
		let [r, i$1] = Object.entries(o)[0];
		n[r] = i$1;
	} else n.tags = o;
	if (typeof l == "object") {
		let [r, i$1] = Object.entries(l)[0];
		n[r] = i$1;
	} else n.link = l;
	n.parentBoundary = L, n.wrap = /* @__PURE__ */ _t(), U = L, L = e, mt.push(U);
}, "addPersonOrSystemBoundary"), Ke = /* @__PURE__ */ m(function(e, t, s, o, l) {
	if (e === null || t === null) return;
	let n = {}, a = /* @__PURE__ */ X.find((r) => r.alias === e);
	if (a && e === a.alias ? n = a : (n.alias = e, X.push(n)), t == null ? n.label = { text: "" } : n.label = { text: t }, s == null) n.type = { text: "container" };
	else if (typeof s == "object") {
		let [r, i$1] = Object.entries(s)[0];
		n[r] = { text: i$1 };
	} else n.type = { text: s };
	if (typeof o == "object") {
		let [r, i$1] = Object.entries(o)[0];
		n[r] = i$1;
	} else n.tags = o;
	if (typeof l == "object") {
		let [r, i$1] = Object.entries(l)[0];
		n[r] = i$1;
	} else n.link = l;
	n.parentBoundary = L, n.wrap = /* @__PURE__ */ _t(), U = L, L = e, mt.push(U);
}, "addContainerBoundary"), Je = /* @__PURE__ */ m(function(e, t, s, o, l, n, a, r) {
	if (t === null || s === null) return;
	let i$1 = {}, u = /* @__PURE__ */ X.find((d$1) => d$1.alias === t);
	if (u && t === u.alias ? i$1 = u : (i$1.alias = t, X.push(i$1)), s == null ? i$1.label = { text: "" } : i$1.label = { text: s }, o == null) i$1.type = { text: "node" };
	else if (typeof o == "object") {
		let [d$1, b] = Object.entries(o)[0];
		i$1[d$1] = { text: b };
	} else i$1.type = { text: o };
	if (l == null) i$1.descr = { text: "" };
	else if (typeof l == "object") {
		let [d$1, b] = Object.entries(l)[0];
		i$1[d$1] = { text: b };
	} else i$1.descr = { text: l };
	if (typeof a == "object") {
		let [d$1, b] = Object.entries(a)[0];
		i$1[d$1] = b;
	} else i$1.tags = a;
	if (typeof r == "object") {
		let [d$1, b] = Object.entries(r)[0];
		i$1[d$1] = b;
	} else i$1.link = r;
	i$1.nodeType = e, i$1.parentBoundary = L, i$1.wrap = /* @__PURE__ */ _t(), U = L, L = t, mt.push(U);
}, "addDeploymentNode"), Ze = /* @__PURE__ */ m(function() {
	L = U, mt.pop(), U = /* @__PURE__ */ mt.pop(), mt.push(U);
}, "popBoundaryParseStack"), $e = /* @__PURE__ */ m(function(e, t, s, o, l, n, a, r, i$1, u, d$1) {
	let b = /* @__PURE__ */ F.find((p) => p.alias === t);
	if (!(b === void 0 && (b = /* @__PURE__ */ X.find((p) => p.alias === t), b === void 0))) {
		if (s != null) if (typeof s == "object") {
			let [p, E$1] = Object.entries(s)[0];
			b[p] = E$1;
		} else b.bgColor = s;
		if (o != null) if (typeof o == "object") {
			let [p, E$1] = Object.entries(o)[0];
			b[p] = E$1;
		} else b.fontColor = o;
		if (l != null) if (typeof l == "object") {
			let [p, E$1] = Object.entries(l)[0];
			b[p] = E$1;
		} else b.borderColor = l;
		if (n != null) if (typeof n == "object") {
			let [p, E$1] = Object.entries(n)[0];
			b[p] = E$1;
		} else b.shadowing = n;
		if (a != null) if (typeof a == "object") {
			let [p, E$1] = Object.entries(a)[0];
			b[p] = E$1;
		} else b.shape = a;
		if (r != null) if (typeof r == "object") {
			let [p, E$1] = Object.entries(r)[0];
			b[p] = E$1;
		} else b.sprite = r;
		if (i$1 != null) if (typeof i$1 == "object") {
			let [p, E$1] = Object.entries(i$1)[0];
			b[p] = E$1;
		} else b.techn = i$1;
		if (u != null) if (typeof u == "object") {
			let [p, E$1] = Object.entries(u)[0];
			b[p] = E$1;
		} else b.legendText = u;
		if (d$1 != null) if (typeof d$1 == "object") {
			let [p, E$1] = Object.entries(d$1)[0];
			b[p] = E$1;
		} else b.legendSprite = d$1;
	}
}, "updateElStyle"), t0 = /* @__PURE__ */ m(function(e, t, s, o, l, n, a) {
	let r = /* @__PURE__ */ Lt.find((i$1) => i$1.from === t && i$1.to === s);
	if (r !== void 0) {
		if (o != null) if (typeof o == "object") {
			let [i$1, u] = Object.entries(o)[0];
			r[i$1] = u;
		} else r.textColor = o;
		if (l != null) if (typeof l == "object") {
			let [i$1, u] = Object.entries(l)[0];
			r[i$1] = u;
		} else r.lineColor = l;
		if (n != null) if (typeof n == "object") {
			let [i$1, u] = Object.entries(n)[0];
			r[i$1] = /* @__PURE__ */ parseInt(u);
		} else r.offsetX = /* @__PURE__ */ parseInt(n);
		if (a != null) if (typeof a == "object") {
			let [i$1, u] = Object.entries(a)[0];
			r[i$1] = /* @__PURE__ */ parseInt(u);
		} else r.offsetY = /* @__PURE__ */ parseInt(a);
	}
}, "updateRelStyle"), e0 = /* @__PURE__ */ m(function(e, t, s) {
	let o = Ut, l = Ft;
	if (typeof t == "object") {
		let n = Object.values(t)[0];
		o = /* @__PURE__ */ parseInt(n);
	} else o = /* @__PURE__ */ parseInt(t);
	if (typeof s == "object") {
		let n = Object.values(s)[0];
		l = /* @__PURE__ */ parseInt(n);
	} else l = /* @__PURE__ */ parseInt(s);
	o >= 1 && (Ut = o), l >= 1 && (Ft = l);
}, "updateLayoutConfig"), n0 = /* @__PURE__ */ m(function() {
	return Ut;
}, "getC4ShapeInRow"), i0 = /* @__PURE__ */ m(function() {
	return Ft;
}, "getC4BoundaryInRow"), r0 = /* @__PURE__ */ m(function() {
	return L;
}, "getCurrentBoundaryParse"), a0 = /* @__PURE__ */ m(function() {
	return U;
}, "getParentBoundaryParse"), we = /* @__PURE__ */ m(function(e) {
	return e == null ? F : F.filter((t) => t.parentBoundary === e);
}, "getC4ShapeArray"), s0 = /* @__PURE__ */ m(function(e) {
	return F.find((t) => t.alias === e);
}, "getC4Shape"), l0 = /* @__PURE__ */ m(function(e) {
	return Object.keys(/* @__PURE__ */ we(e));
}, "getC4ShapeKeys"), Oe = /* @__PURE__ */ m(function(e) {
	return e == null ? X : X.filter((t) => t.parentBoundary === e);
}, "getBoundaries"), o0 = Oe, c0 = /* @__PURE__ */ m(function() {
	return Lt;
}, "getRels"), h0 = /* @__PURE__ */ m(function() {
	return re;
}, "getTitle"), u0 = /* @__PURE__ */ m(function(e) {
	ae = e;
}, "setWrap"), _t = /* @__PURE__ */ m(function() {
	return ae;
}, "autoWrap"), Nt = {
	addPersonOrSystem: Qe,
	addPersonOrSystemBoundary: Ge,
	addContainer: He,
	addContainerBoundary: Ke,
	addComponent: qe,
	addDeploymentNode: Je,
	popBoundaryParseStack: Ze,
	addRel: We,
	updateElStyle: $e,
	updateRelStyle: t0,
	updateLayoutConfig: e0,
	autoWrap: _t,
	setWrap: u0,
	getC4ShapeArray: we,
	getC4Shape: s0,
	getC4ShapeKeys: l0,
	getBoundaries: Oe,
	getBoundarys: o0,
	getCurrentBoundaryParse: r0,
	getParentBoundaryParse: a0,
	getRels: c0,
	getTitle: h0,
	getC4Type: ze,
	getC4ShapeInRow: n0,
	getC4BoundaryInRow: i0,
	setAccTitle: Ho,
	getAccTitle: Uo,
	getAccDescription: $o,
	setAccDescription: Go,
	getConfig: /* @__PURE__ */ m(() => mr().c4, "getConfig"),
	clear: /* @__PURE__ */ m(function() {
		F = [], X = [{
			alias: "global",
			label: { text: "global" },
			type: { text: "global" },
			tags: null,
			link: null,
			parentBoundary: ""
		}], U = "", L = "global", mt = [""], Lt = [], mt = [""], re = "", ae = !1, Ut = 4, Ft = 2;
	}, "clear"),
	LINETYPE: {
		SOLID: 0,
		DOTTED: 1,
		NOTE: 2,
		SOLID_CROSS: 3,
		DOTTED_CROSS: 4,
		SOLID_OPEN: 5,
		DOTTED_OPEN: 6,
		LOOP_START: 10,
		LOOP_END: 11,
		ALT_START: 12,
		ALT_ELSE: 13,
		ALT_END: 14,
		OPT_START: 15,
		OPT_END: 16,
		ACTIVE_START: 17,
		ACTIVE_END: 18,
		PAR_START: 19,
		PAR_AND: 20,
		PAR_END: 21,
		RECT_START: 22,
		RECT_END: 23,
		SOLID_POINT: 24,
		DOTTED_POINT: 25
	},
	ARROWTYPE: {
		FILLED: 0,
		OPEN: 1
	},
	PLACEMENT: {
		LEFTOF: 0,
		RIGHTOF: 1,
		OVER: 2
	},
	setTitle: /* @__PURE__ */ m(function(e) {
		re = /* @__PURE__ */ ot(e, /* @__PURE__ */ mr());
	}, "setTitle"),
	setC4Type: Xe
};
var Te = /* @__PURE__ */ q(/* @__PURE__ */ f(), 1);
var se = /* @__PURE__ */ m(function(e, t) {
	return x(e, t);
}, "drawRect"), Re = /* @__PURE__ */ m(function(e, t, s, o, l, n) {
	let a = /* @__PURE__ */ e.append("image");
	a.attr("width", t), a.attr("height", s), a.attr("x", o), a.attr("y", l);
	let r = n.startsWith("data:image/png;base64") ? n : (0, Te.sanitizeUrl)(n);
	a.attr("xlink:href", r);
}, "drawImage"), g0 = /* @__PURE__ */ m((e, t, s) => {
	let o = /* @__PURE__ */ e.append("g"), l = 0;
	for (let n of t) {
		let a = n.textColor ? n.textColor : "#444444", r = n.lineColor ? n.lineColor : "#444444", i$1 = n.offsetX ? parseInt(n.offsetX) : 0, u = n.offsetY ? parseInt(n.offsetY) : 0, d$1 = "";
		if (l === 0) {
			let p = /* @__PURE__ */ o.append("line");
			p.attr("x1", n.startPoint.x), p.attr("y1", n.startPoint.y), p.attr("x2", n.endPoint.x), p.attr("y2", n.endPoint.y), p.attr("stroke-width", "1"), p.attr("stroke", r), p.style("fill", "none"), n.type !== "rel_b" && p.attr("marker-end", "url(" + d$1 + "#arrowhead)"), (n.type === "birel" || n.type === "rel_b") && p.attr("marker-start", "url(" + d$1 + "#arrowend)"), l = -1;
		} else {
			let p = /* @__PURE__ */ o.append("path");
			p.attr("fill", "none").attr("stroke-width", "1").attr("stroke", r).attr("d", /* @__PURE__ */ "Mstartx,starty Qcontrolx,controly stopx,stopy ".replaceAll("startx", n.startPoint.x).replaceAll("starty", n.startPoint.y).replaceAll("controlx", n.startPoint.x + (n.endPoint.x - n.startPoint.x) / 2 - (n.endPoint.x - n.startPoint.x) / 4).replaceAll("controly", n.startPoint.y + (n.endPoint.y - n.startPoint.y) / 2).replaceAll("stopx", n.endPoint.x).replaceAll("stopy", n.endPoint.y)), n.type !== "rel_b" && p.attr("marker-end", "url(" + d$1 + "#arrowhead)"), (n.type === "birel" || n.type === "rel_b") && p.attr("marker-start", "url(" + d$1 + "#arrowend)");
		}
		let b = /* @__PURE__ */ s.messageFont();
		Q(s)(n.label.text, o, Math.min(n.startPoint.x, n.endPoint.x) + Math.abs(n.endPoint.x - n.startPoint.x) / 2 + i$1, Math.min(n.startPoint.y, n.endPoint.y) + Math.abs(n.endPoint.y - n.startPoint.y) / 2 + u, n.label.width, n.label.height, { fill: a }, b), n.techn && n.techn.text !== "" && (b = /* @__PURE__ */ s.messageFont(), Q(s)("[" + n.techn.text + "]", o, Math.min(n.startPoint.x, n.endPoint.x) + Math.abs(n.endPoint.x - n.startPoint.x) / 2 + i$1, Math.min(n.startPoint.y, n.endPoint.y) + Math.abs(n.endPoint.y - n.startPoint.y) / 2 + s.messageFontSize + 5 + u, /* @__PURE__ */ Math.max(n.label.width, n.techn.width), n.techn.height, {
			fill: a,
			"font-style": "italic"
		}, b));
	}
}, "drawRels"), x0 = /* @__PURE__ */ m(function(e, t, s) {
	let o = /* @__PURE__ */ e.append("g"), l = t.bgColor ? t.bgColor : "none", n = t.borderColor ? t.borderColor : "#444444", a = t.fontColor ? t.fontColor : "black", r = {
		"stroke-width": 1,
		"stroke-dasharray": "7.0,7.0"
	};
	t.nodeType && (r = { "stroke-width": 1 });
	se(o, {
		x: t.x,
		y: t.y,
		fill: l,
		stroke: n,
		width: t.width,
		height: t.height,
		rx: 2.5,
		ry: 2.5,
		attrs: r
	});
	let u = /* @__PURE__ */ s.boundaryFont();
	u.fontWeight = "bold", u.fontSize = u.fontSize + 2, u.fontColor = a, Q(s)(t.label.text, o, t.x, t.y + t.label.Y, t.width, t.height, { fill: "#444444" }, u), t.type && t.type.text !== "" && (u = /* @__PURE__ */ s.boundaryFont(), u.fontColor = a, Q(s)(t.type.text, o, t.x, t.y + t.type.Y, t.width, t.height, { fill: "#444444" }, u)), t.descr && t.descr.text !== "" && (u = /* @__PURE__ */ s.boundaryFont(), u.fontSize = u.fontSize - 2, u.fontColor = a, Q(s)(t.descr.text, o, t.x, t.y + t.descr.Y, t.width, t.height, { fill: "#444444" }, u));
}, "drawBoundary"), m0 = /* @__PURE__ */ m(function(e, t, s) {
	let o = t.bgColor ? t.bgColor : s[t.typeC4Shape.text + "_bg_color"], l = t.borderColor ? t.borderColor : s[t.typeC4Shape.text + "_border_color"], n = t.fontColor ? t.fontColor : "#FFFFFF", a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
	switch (t.typeC4Shape.text) {
		case "person":
			a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
			break;
		case "external_person":
			a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAB6ElEQVR4Xu2YLY+EMBCG9+dWr0aj0Wg0Go1Go0+j8Xdv2uTCvv1gpt0ebHKPuhDaeW4605Z9mJvx4AdXUyTUdd08z+u6flmWZRnHsWkafk9DptAwDPu+f0eAYtu2PEaGWuj5fCIZrBAC2eLBAnRCsEkkxmeaJp7iDJ2QMDdHsLg8SxKFEJaAo8lAXnmuOFIhTMpxxKATebo4UiFknuNo4OniSIXQyRxEA3YsnjGCVEjVXD7yLUAqxBGUyPv/Y4W2beMgGuS7kVQIBycH0fD+oi5pezQETxdHKmQKGk1eQEYldK+jw5GxPfZ9z7Mk0Qnhf1W1m3w//EUn5BDmSZsbR44QQLBEqrBHqOrmSKaQAxdnLArCrxZcM7A7ZKs4ioRq8LFC+NpC3WCBJsvpVw5edm9iEXFuyNfxXAgSwfrFQ1c0iNda8AdejvUgnktOtJQQxmcfFzGglc5WVCj7oDgFqU18boeFSs52CUh8LE8BIVQDT1ABrB0HtgSEYlX5doJnCwv9TXocKCaKbnwhdDKPq4lf3SwU3HLq4V/+WYhHVMa/3b4IlfyikAduCkcBc7mQ3/z/Qq/cTuikhkzB12Ae/mcJC9U+Vo8Ej1gWAtgbeGgFsAMHr50BIWOLCbezvhpBFUdY6EJuJ/QDW0XoMX60zZ0AAAAASUVORK5CYII=";
			break;
	}
	let r = /* @__PURE__ */ e.append("g");
	r.attr("class", "person-man");
	let i$1 = /* @__PURE__ */ h();
	switch (t.typeC4Shape.text) {
		case "person":
		case "external_person":
		case "system":
		case "external_system":
		case "container":
		case "external_container":
		case "component":
		case "external_component":
			i$1.x = t.x, i$1.y = t.y, i$1.fill = o, i$1.width = t.width, i$1.height = t.height, i$1.stroke = l, i$1.rx = 2.5, i$1.ry = 2.5, i$1.attrs = { "stroke-width": .5 }, se(r, i$1);
			break;
		case "system_db":
		case "external_system_db":
		case "container_db":
		case "external_container_db":
		case "component_db":
		case "external_component_db":
			r.append("path").attr("fill", o).attr("stroke-width", "0.5").attr("stroke", l).attr("d", /* @__PURE__ */ "Mstartx,startyc0,-10 half,-10 half,-10c0,0 half,0 half,10l0,heightc0,10 -half,10 -half,10c0,0 -half,0 -half,-10l0,-height".replaceAll("startx", t.x).replaceAll("starty", t.y).replaceAll("half", t.width / 2).replaceAll("height", t.height)), r.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", l).attr("d", /* @__PURE__ */ "Mstartx,startyc0,10 half,10 half,10c0,0 half,0 half,-10".replaceAll("startx", t.x).replaceAll("starty", t.y).replaceAll("half", t.width / 2));
			break;
		case "system_queue":
		case "external_system_queue":
		case "container_queue":
		case "external_container_queue":
		case "component_queue":
		case "external_component_queue":
			r.append("path").attr("fill", o).attr("stroke-width", "0.5").attr("stroke", l).attr("d", /* @__PURE__ */ "Mstartx,startylwidth,0c5,0 5,half 5,halfc0,0 0,half -5,halfl-width,0c-5,0 -5,-half -5,-halfc0,0 0,-half 5,-half".replaceAll("startx", t.x).replaceAll("starty", t.y).replaceAll("width", t.width).replaceAll("half", t.height / 2)), r.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", l).attr("d", /* @__PURE__ */ "Mstartx,startyc-5,0 -5,half -5,halfc0,half 5,half 5,half".replaceAll("startx", t.x + t.width).replaceAll("starty", t.y).replaceAll("half", t.height / 2));
			break;
	}
	let u = /* @__PURE__ */ T0(s, t.typeC4Shape.text);
	switch (r.append("text").attr("fill", n).attr("font-family", u.fontFamily).attr("font-size", u.fontSize - 2).attr("font-style", "italic").attr("lengthAdjust", "spacing").attr("textLength", t.typeC4Shape.width).attr("x", t.x + t.width / 2 - t.typeC4Shape.width / 2).attr("y", t.y + t.typeC4Shape.Y).text("<<" + t.typeC4Shape.text + ">>"), t.typeC4Shape.text) {
		case "person":
		case "external_person":
			Re(r, 48, 48, t.x + t.width / 2 - 24, t.y + t.image.Y, a);
			break;
	}
	let d$1 = /* @__PURE__ */ s[t.typeC4Shape.text + "Font"]();
	return d$1.fontWeight = "bold", d$1.fontSize = d$1.fontSize + 2, d$1.fontColor = n, Q(s)(t.label.text, r, t.x, t.y + t.label.Y, t.width, t.height, { fill: n }, d$1), d$1 = /* @__PURE__ */ s[t.typeC4Shape.text + "Font"](), d$1.fontColor = n, t.techn && t.techn?.text !== "" ? Q(s)(t.techn.text, r, t.x, t.y + t.techn.Y, t.width, t.height, {
		fill: n,
		"font-style": "italic"
	}, d$1) : t.type && t.type.text !== "" && Q(s)(t.type.text, r, t.x, t.y + t.type.Y, t.width, t.height, {
		fill: n,
		"font-style": "italic"
	}, d$1), t.descr && t.descr.text !== "" && (d$1 = /* @__PURE__ */ s.personFont(), d$1.fontColor = n, Q(s)(t.descr.text, r, t.x, t.y + t.descr.Y, t.width, t.height, { fill: n }, d$1)), t.height;
}, "drawC4Shape"), _0 = /* @__PURE__ */ m(function(e) {
	e.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr("d", "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z");
}, "insertDatabaseIcon"), k0 = /* @__PURE__ */ m(function(e) {
	e.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z");
}, "insertComputerIcon"), E0 = /* @__PURE__ */ m(function(e) {
	e.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z");
}, "insertClockIcon"), A0 = /* @__PURE__ */ m(function(e) {
	e.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
}, "insertArrowHead"), C0 = /* @__PURE__ */ m(function(e) {
	e.append("defs").append("marker").attr("id", "arrowend").attr("refX", 1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 10 0 L 0 5 L 10 10 z");
}, "insertArrowEnd"), v0 = /* @__PURE__ */ m(function(e) {
	e.append("defs").append("marker").attr("id", "filled-head").attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "insertArrowFilledHead"), w0 = /* @__PURE__ */ m(function(e) {
	e.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
}, "insertDynamicNumber"), O0 = /* @__PURE__ */ m(function(e) {
	let s = /* @__PURE__ */ e.append("defs").append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 16).attr("refY", 4);
	s.append("path").attr("fill", "black").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 9,2 V 6 L16,4 Z"), s.append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 0,1 L 6,7 M 6,1 L 0,7");
}, "insertArrowCrossHead"), T0 = /* @__PURE__ */ m((e, t) => ({
	fontFamily: e[t + "FontFamily"],
	fontSize: e[t + "FontSize"],
	fontWeight: e[t + "FontWeight"]
}), "getC4ShapeFont"), Q = /* @__PURE__ */ function() {
	function e(l, n, a, r, i$1, u, d$1) {
		o(/* @__PURE__ */ n.append("text").attr("x", a + i$1 / 2).attr("y", r + u / 2 + 5).style("text-anchor", "middle").text(l), d$1);
	}
	m(e, "byText");
	function t(l, n, a, r, i$1, u, d$1, b) {
		let { fontSize: p, fontFamily: E$1, fontWeight: T } = b, D = /* @__PURE__ */ l.split(hn.lineBreakRegex);
		for (let P = 0; P < D.length; P++) {
			let B = P * p - p * (D.length - 1) / 2, j = /* @__PURE__ */ n.append("text").attr("x", a + i$1 / 2).attr("y", r).style("text-anchor", "middle").attr("dominant-baseline", "middle").style("font-size", p).style("font-weight", T).style("font-family", E$1);
			j.append("tspan").attr("dy", B).text(D[P]).attr("alignment-baseline", "mathematical"), o(j, d$1);
		}
	}
	m(t, "byTspan");
	function s(l, n, a, r, i$1, u, d$1, b) {
		let p = /* @__PURE__ */ n.append("switch"), T = /* @__PURE__ */ p.append("foreignObject").attr("x", a).attr("y", r).attr("width", i$1).attr("height", u).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		T.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(l), t(l, p, a, r, i$1, u, d$1, b), o(T, d$1);
	}
	m(s, "byFo");
	function o(l, n) {
		for (let a in n) n.hasOwnProperty(a) && l.attr(a, n[a]);
	}
	return m(o, "_setTextAttrs"), function(l) {
		return l.textPlacement === "fo" ? s : l.textPlacement === "old" ? e : t;
	};
}(), V = {
	drawRect: se,
	drawBoundary: x0,
	drawC4Shape: m0,
	drawRels: g0,
	drawImage: Re,
	insertArrowHead: A0,
	insertArrowEnd: C0,
	insertArrowFilledHead: v0,
	insertDynamicNumber: w0,
	insertArrowCrossHead: O0,
	insertDatabaseIcon: _0,
	insertComputerIcon: k0,
	insertClockIcon: E0
};
var zt = 0, Xt = 0, Se = 4, le = 2;
Mt.yy = Nt;
var x$1 = {}, Wt$1 = class {
	static {
		m(this, "Bounds");
	}
	constructor(t) {
		this.name = "", this.data = {}, this.data.startx = void 0, this.data.stopx = void 0, this.data.starty = void 0, this.data.stopy = void 0, this.data.widthLimit = void 0, this.nextData = {}, this.nextData.startx = void 0, this.nextData.stopx = void 0, this.nextData.starty = void 0, this.nextData.stopy = void 0, this.nextData.cnt = 0, oe(/* @__PURE__ */ t.db.getConfig());
	}
	setData(t, s, o, l) {
		this.nextData.startx = this.data.startx = t, this.nextData.stopx = this.data.stopx = s, this.nextData.starty = this.data.starty = o, this.nextData.stopy = this.data.stopy = l;
	}
	updateVal(t, s, o, l) {
		t[s] === void 0 ? t[s] = o : t[s] = /* @__PURE__ */ l(o, t[s]);
	}
	insert(t) {
		this.nextData.cnt = this.nextData.cnt + 1;
		let s = this.nextData.startx === this.nextData.stopx ? this.nextData.stopx + t.margin : this.nextData.stopx + t.margin * 2, o = s + t.width, l = this.nextData.starty + t.margin * 2, n = l + t.height;
		(s >= this.data.widthLimit || o >= this.data.widthLimit || this.nextData.cnt > Se) && (s = this.nextData.startx + t.margin + x$1.nextLinePaddingX, l = this.nextData.stopy + t.margin * 2, this.nextData.stopx = o = s + t.width, this.nextData.starty = this.nextData.stopy, this.nextData.stopy = n = l + t.height, this.nextData.cnt = 1), t.x = s, t.y = l, this.updateVal(this.data, "startx", s, Math.min), this.updateVal(this.data, "starty", l, Math.min), this.updateVal(this.data, "stopx", o, Math.max), this.updateVal(this.data, "stopy", n, Math.max), this.updateVal(this.nextData, "startx", s, Math.min), this.updateVal(this.nextData, "starty", l, Math.min), this.updateVal(this.nextData, "stopx", o, Math.max), this.updateVal(this.nextData, "stopy", n, Math.max);
	}
	init(t) {
		this.name = "", this.data = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0,
			widthLimit: void 0
		}, this.nextData = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0,
			cnt: 0
		}, oe(/* @__PURE__ */ t.db.getConfig());
	}
	bumpLastMargin(t) {
		this.data.stopx += t, this.data.stopy += t;
	}
}, oe = /* @__PURE__ */ m(function(e) {
	v(x$1, e), e.fontFamily && (x$1.personFontFamily = x$1.systemFontFamily = x$1.messageFontFamily = e.fontFamily), e.fontSize && (x$1.personFontSize = x$1.systemFontSize = x$1.messageFontSize = e.fontSize), e.fontWeight && (x$1.personFontWeight = x$1.systemFontWeight = x$1.messageFontWeight = e.fontWeight);
}, "setConf"), Bt = /* @__PURE__ */ m((e, t) => ({
	fontFamily: e[t + "FontFamily"],
	fontSize: e[t + "FontSize"],
	fontWeight: e[t + "FontWeight"]
}), "c4ShapeFont"), Vt = /* @__PURE__ */ m((e) => ({
	fontFamily: e.boundaryFontFamily,
	fontSize: e.boundaryFontSize,
	fontWeight: e.boundaryFontWeight
}), "boundaryFont"), R0 = /* @__PURE__ */ m((e) => ({
	fontFamily: e.messageFontFamily,
	fontSize: e.messageFontSize,
	fontWeight: e.messageFontWeight
}), "messageFont");
function z(e, t, s, o, l) {
	if (!t[e].width) if (s) t[e].text = /* @__PURE__ */ St(t[e].text, l, o), t[e].textLines = t[e].text.split(hn.lineBreakRegex).length, t[e].width = l, t[e].height = /* @__PURE__ */ Wt(t[e].text, o);
	else {
		let n = /* @__PURE__ */ t[e].text.split(hn.lineBreakRegex);
		t[e].textLines = n.length;
		let a = 0;
		t[e].height = 0, t[e].width = 0;
		for (let r of n) t[e].width = /* @__PURE__ */ Math.max(/* @__PURE__ */ M(r, o), t[e].width), a = /* @__PURE__ */ Wt(r, o), t[e].height = t[e].height + a;
	}
}
m(z, "calcC4ShapeTextWH");
var Pe = /* @__PURE__ */ m(function(e, t, s) {
	t.x = s.data.startx, t.y = s.data.starty, t.width = s.data.stopx - s.data.startx, t.height = s.data.stopy - s.data.starty, t.label.y = x$1.c4ShapeMargin - 35;
	let o = t.wrap && x$1.wrap, l = /* @__PURE__ */ Vt(x$1);
	l.fontSize = l.fontSize + 2, l.fontWeight = "bold";
	z("label", t, o, l, /* @__PURE__ */ M(t.label.text, l)), V.drawBoundary(e, t, x$1);
}, "drawBoundary"), Me = /* @__PURE__ */ m(function(e, t, s, o) {
	let l = 0;
	for (let n of o) {
		l = 0;
		let a = s[n], r = /* @__PURE__ */ Bt(x$1, a.typeC4Shape.text);
		switch (r.fontSize = r.fontSize - 2, a.typeC4Shape.width = /* @__PURE__ */ M("«" + a.typeC4Shape.text + "»", r), a.typeC4Shape.height = r.fontSize + 2, a.typeC4Shape.Y = x$1.c4ShapePadding, l = a.typeC4Shape.Y + a.typeC4Shape.height - 4, a.image = {
			width: 0,
			height: 0,
			Y: 0
		}, a.typeC4Shape.text) {
			case "person":
			case "external_person":
				a.image.width = 48, a.image.height = 48, a.image.Y = l, l = a.image.Y + a.image.height;
				break;
		}
		a.sprite && (a.image.width = 48, a.image.height = 48, a.image.Y = l, l = a.image.Y + a.image.height);
		let i$1 = a.wrap && x$1.wrap, u = x$1.width - x$1.c4ShapePadding * 2, d$1 = /* @__PURE__ */ Bt(x$1, a.typeC4Shape.text);
		if (d$1.fontSize = d$1.fontSize + 2, d$1.fontWeight = "bold", z("label", a, i$1, d$1, u), a.label.Y = l + 8, l = a.label.Y + a.label.height, a.type && a.type.text !== "") {
			a.type.text = "[" + a.type.text + "]";
			z("type", a, i$1, /* @__PURE__ */ Bt(x$1, a.typeC4Shape.text), u), a.type.Y = l + 5, l = a.type.Y + a.type.height;
		} else if (a.techn && a.techn.text !== "") {
			a.techn.text = "[" + a.techn.text + "]";
			z("techn", a, i$1, /* @__PURE__ */ Bt(x$1, a.techn.text), u), a.techn.Y = l + 5, l = a.techn.Y + a.techn.height;
		}
		let b = l, p = a.label.width;
		if (a.descr && a.descr.text !== "") z("descr", a, i$1, /* @__PURE__ */ Bt(x$1, a.typeC4Shape.text), u), a.descr.Y = l + 20, l = a.descr.Y + a.descr.height, p = /* @__PURE__ */ Math.max(a.label.width, a.descr.width), b = l - a.descr.textLines * 5;
		p = p + x$1.c4ShapePadding, a.width = /* @__PURE__ */ Math.max(a.width || x$1.width, p, x$1.width), a.height = /* @__PURE__ */ Math.max(a.height || x$1.height, b, x$1.height), a.margin = a.margin || x$1.c4ShapeMargin, e.insert(a), V.drawC4Shape(t, a, x$1);
	}
	e.bumpLastMargin(x$1.c4ShapeMargin);
}, "drawC4ShapeArray"), N = class {
	static {
		m(this, "Point");
	}
	constructor(t, s) {
		this.x = t, this.y = s;
	}
}, De = /* @__PURE__ */ m(function(e, t) {
	let s = e.x, o = e.y, l = t.x, n = t.y, a = s + e.width / 2, r = o + e.height / 2, i$1 = /* @__PURE__ */ Math.abs(s - l), u = /* @__PURE__ */ Math.abs(o - n), d$1 = u / i$1, b = e.height / e.width, p = null;
	return o == n && s < l ? p = new N(s + e.width, r) : o == n && s > l ? p = new N(s, r) : s == l && o < n ? p = new N(a, o + e.height) : s == l && o > n && (p = new N(a, o)), s > l && o < n ? b >= d$1 ? p = new N(s, r + d$1 * e.width / 2) : p = new N(a - i$1 / u * e.height / 2, o + e.height) : s < l && o < n ? b >= d$1 ? p = new N(s + e.width, r + d$1 * e.width / 2) : p = new N(a + i$1 / u * e.height / 2, o + e.height) : s < l && o > n ? b >= d$1 ? p = new N(s + e.width, r - d$1 * e.width / 2) : p = new N(a + e.height / 2 * i$1 / u, o) : s > l && o > n && (b >= d$1 ? p = new N(s, r - e.width / 2 * d$1) : p = new N(a - e.height / 2 * i$1 / u, o)), p;
}, "getIntersectPoint"), D0 = /* @__PURE__ */ m(function(e, t) {
	let s = {
		x: 0,
		y: 0
	};
	s.x = t.x + t.width / 2, s.y = t.y + t.height / 2;
	let o = /* @__PURE__ */ De(e, s);
	s.x = e.x + e.width / 2, s.y = e.y + e.height / 2;
	return {
		startPoint: o,
		endPoint: /* @__PURE__ */ De(t, s)
	};
}, "getIntersectPoints"), S0 = /* @__PURE__ */ m(function(e, t, s, o) {
	let l = 0;
	for (let n of t) {
		l = l + 1;
		let a = n.wrap && x$1.wrap, r = /* @__PURE__ */ R0(x$1);
		o.db.getC4Type() === "C4Dynamic" && (n.label.text = l + ": " + n.label.text);
		let u = /* @__PURE__ */ M(n.label.text, r);
		z("label", n, a, r, u), n.techn && n.techn.text !== "" && (u = /* @__PURE__ */ M(n.techn.text, r), z("techn", n, a, r, u)), n.descr && n.descr.text !== "" && (u = /* @__PURE__ */ M(n.descr.text, r), z("descr", n, a, r, u));
		let p = /* @__PURE__ */ D0(/* @__PURE__ */ s(n.from), /* @__PURE__ */ s(n.to));
		n.startPoint = p.startPoint, n.endPoint = p.endPoint;
	}
	V.drawRels(e, t, x$1);
}, "drawRels");
function Le(e, t, s, o, l) {
	let n = new Wt$1(l);
	n.data.widthLimit = s.data.widthLimit / Math.min(le, o.length);
	for (let [a, r] of o.entries()) {
		let i$1 = 0;
		r.image = {
			width: 0,
			height: 0,
			Y: 0
		}, r.sprite && (r.image.width = 48, r.image.height = 48, r.image.Y = i$1, i$1 = r.image.Y + r.image.height);
		let u = r.wrap && x$1.wrap, d$1 = /* @__PURE__ */ Vt(x$1);
		if (d$1.fontSize = d$1.fontSize + 2, d$1.fontWeight = "bold", z("label", r, u, d$1, n.data.widthLimit), r.label.Y = i$1 + 8, i$1 = r.label.Y + r.label.height, r.type && r.type.text !== "") {
			r.type.text = "[" + r.type.text + "]";
			z("type", r, u, /* @__PURE__ */ Vt(x$1), n.data.widthLimit), r.type.Y = i$1 + 5, i$1 = r.type.Y + r.type.height;
		}
		if (r.descr && r.descr.text !== "") {
			let T = /* @__PURE__ */ Vt(x$1);
			T.fontSize = T.fontSize - 2, z("descr", r, u, T, n.data.widthLimit), r.descr.Y = i$1 + 20, i$1 = r.descr.Y + r.descr.height;
		}
		if (a == 0 || a % le === 0) {
			let T = s.data.startx + x$1.diagramMarginX, D = s.data.stopy + x$1.diagramMarginY + i$1;
			n.setData(T, T, D, D);
		} else {
			let T = n.data.stopx !== n.data.startx ? n.data.stopx + x$1.diagramMarginX : n.data.startx, D = n.data.starty;
			n.setData(T, T, D, D);
		}
		n.name = r.alias;
		let b = /* @__PURE__ */ l.db.getC4ShapeArray(r.alias), p = /* @__PURE__ */ l.db.getC4ShapeKeys(r.alias);
		p.length > 0 && Me(n, e, b, p), t = r.alias;
		let E$1 = /* @__PURE__ */ l.db.getBoundaries(t);
		E$1.length > 0 && Le(e, t, n, E$1, l), r.alias !== "global" && Pe(e, r, n), s.data.stopy = /* @__PURE__ */ Math.max(n.data.stopy + x$1.c4ShapeMargin, s.data.stopy), s.data.stopx = /* @__PURE__ */ Math.max(n.data.stopx + x$1.c4ShapeMargin, s.data.stopx), zt = /* @__PURE__ */ Math.max(zt, s.data.stopx), Xt = /* @__PURE__ */ Math.max(Xt, s.data.stopy);
	}
}
m(Le, "drawInsideBoundary");
var ce = {
	drawPersonOrSystemArray: Me,
	drawBoundary: Pe,
	setConf: oe,
	draw: /* @__PURE__ */ m(function(e, t, s, o) {
		x$1 = mr().c4;
		let l = mr().securityLevel, n;
		l === "sandbox" && (n = /* @__PURE__ */ ia("#i" + t));
		let a = l === "sandbox" ? ia(n.nodes()[0].contentDocument.body) : ia("body"), r = o.db;
		o.db.setWrap(x$1.wrap), Se = /* @__PURE__ */ r.getC4ShapeInRow(), le = /* @__PURE__ */ r.getC4BoundaryInRow(), pt.debug(`C:${JSON.stringify(x$1, null, 2)}`);
		let i$1 = l === "sandbox" ? a.select(`[id="${t}"]`) : ia(`[id="${t}"]`);
		V.insertComputerIcon(i$1), V.insertDatabaseIcon(i$1), V.insertClockIcon(i$1);
		let u = new Wt$1(o);
		u.setData(x$1.diagramMarginX, x$1.diagramMarginX, x$1.diagramMarginY, x$1.diagramMarginY), u.data.widthLimit = screen.availWidth, zt = x$1.diagramMarginX, Xt = x$1.diagramMarginY;
		let d$1 = /* @__PURE__ */ o.db.getTitle();
		Le(i$1, "", u, /* @__PURE__ */ o.db.getBoundaries(""), o), V.insertArrowHead(i$1), V.insertArrowEnd(i$1), V.insertArrowCrossHead(i$1), V.insertArrowFilledHead(i$1), S0(i$1, /* @__PURE__ */ o.db.getRels(), o.db.getC4Shape, o), u.data.stopx = zt, u.data.stopy = Xt;
		let p = u.data, T = p.stopy - p.starty + 2 * x$1.diagramMarginY, P = p.stopx - p.startx + 2 * x$1.diagramMarginX;
		d$1 && i$1.append("text").text(d$1).attr("x", (p.stopx - p.startx) / 2 - 4 * x$1.diagramMarginX).attr("y", p.starty + x$1.diagramMarginY), Wo(i$1, T, P, x$1.useMaxWidth);
		let B = d$1 ? 60 : 0;
		i$1.attr("viewBox", p.startx - x$1.diagramMarginX + " -" + (x$1.diagramMarginY + B) + " " + P + " " + (T + B)), pt.debug("models:", p);
	}, "draw")
};
var u1 = {
	parser: Ce,
	db: Nt,
	renderer: ce,
	styles: /* @__PURE__ */ m((e) => `.person {
    stroke: ${e.personBorder};
    fill: ${e.personBkg};
  }
`, "getStyles"),
	init: /* @__PURE__ */ m(({ c4: e, wrap: t }) => {
		ce.setConf(e), Nt.setWrap(t);
	}, "init")
};
export { g as a, y as c, f$1 as i, E as n, h as o, d as r, x as s, u1 as t };
