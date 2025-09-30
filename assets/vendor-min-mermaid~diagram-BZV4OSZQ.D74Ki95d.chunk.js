import { $ as Vo, A as $o, F as Go, G as No, I as Ho, Mn as c, Q as Uo, W as Ni, et as Wo, hn as pt, jn as p, k as d, m as Lt, pt as jo, q as Ot } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BVgxNvHA.chunk.js";
import { Q as m } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BH0ewMis.chunk.js";
var O = Ni.packet, b = class {
	constructor() {
		this.packet = [];
		this.setAccTitle = Ho;
		this.getAccTitle = Uo;
		this.setDiagramTitle = jo;
		this.getDiagramTitle = Vo;
		this.getAccDescription = $o;
		this.setAccDescription = Go;
	}
	static {
		m(this, "PacketDB");
	}
	getConfig() {
		let t = /* @__PURE__ */ Lt({
			...O,
			...Ot().packet
		});
		return t.showBits && (t.paddingY += 10), t;
	}
	getPacket() {
		return this.packet;
	}
	pushWord(t) {
		t.length > 0 && this.packet.push(t);
	}
	clear() {
		No(), this.packet = [];
	}
};
var _ = 1e4, V = /* @__PURE__ */ m((e, t) => {
	c(e, t);
	let a = -1, o = [], s = 1, { bitsPerRow: l } = t.getConfig();
	for (let { start: r, end: n, bits: d$1, label: p$1 } of e.blocks) {
		if (r !== void 0 && n !== void 0 && n < r) throw new Error(`Packet block ${r} - ${n} is invalid. End must be greater than start.`);
		if (r ??= a + 1, r !== a + 1) throw new Error(`Packet block ${r} - ${n ?? r} is not contiguous. It should start from ${a + 1}.`);
		if (d$1 === 0) throw new Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);
		for (n ??= r + (d$1 ?? 1) - 1, d$1 ??= n - r + 1, a = n, pt.debug(`Packet block ${r} - ${a} with label ${p$1}`); o.length <= l + 1 && t.getPacket().length < _;) {
			let [m$1, i] = q({
				start: r,
				end: n,
				bits: d$1,
				label: p$1
			}, s, l);
			if (o.push(m$1), m$1.end + 1 === s * l && (t.pushWord(o), o = [], s++), !i) break;
			({start: r, end: n, bits: d$1, label: p$1} = i);
		}
	}
	t.pushWord(o);
}, "populate"), q = /* @__PURE__ */ m((e, t, a) => {
	if (e.start === void 0) throw new Error("start should have been set during first phase");
	if (e.end === void 0) throw new Error("end should have been set during first phase");
	if (e.start > e.end) throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);
	if (e.end + 1 <= t * a) return [e, void 0];
	let o = t * a - 1, s = t * a;
	return [{
		start: e.start,
		end: o,
		label: e.label,
		bits: o - e.start
	}, {
		start: s,
		end: e.end,
		label: e.label,
		bits: e.end - s
	}];
}, "getNextFittingBlock"), D = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ m(async (e) => {
		let t = await p("packet", e), a = D.parser?.yy;
		if (!(a instanceof b)) throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		pt.debug(t), V(t, a);
	}, "parse")
};
var L = /* @__PURE__ */ m((e, t, a, o) => {
	let s = o.db, l = /* @__PURE__ */ s.getConfig(), { rowHeight: r, paddingY: n, bitWidth: d$1, bitsPerRow: p$1 } = l, m$1 = /* @__PURE__ */ s.getPacket(), i = /* @__PURE__ */ s.getDiagramTitle(), g = r + n, f = g * (m$1.length + 1) - (i ? 0 : r), k = d$1 * p$1 + 2, u = /* @__PURE__ */ d(t);
	u.attr("viewbox", `0 0 ${k} ${f}`), Wo(u, f, k, l.useMaxWidth);
	for (let [G, R] of m$1.entries()) M(u, R, G, l);
	u.append("text").text(i).attr("x", k / 2).attr("y", f - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), M = /* @__PURE__ */ m((e, t, a, { rowHeight: o, paddingX: s, paddingY: l, bitWidth: r, bitsPerRow: n, showBits: d$1 }) => {
	let p$1 = /* @__PURE__ */ e.append("g"), m$1 = a * (o + l) + l;
	for (let i of t) {
		let g = i.start % n * r + 1, f = (i.end - i.start + 1) * r - s;
		if (p$1.append("rect").attr("x", g).attr("y", m$1).attr("width", f).attr("height", o).attr("class", "packetBlock"), p$1.append("text").attr("x", g + f / 2).attr("y", m$1 + o / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(i.label), !d$1) continue;
		let k = i.end === i.start, u = m$1 - 2;
		p$1.append("text").attr("x", g + (k ? f / 2 : 0)).attr("y", u).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", k ? "middle" : "start").text(i.start), k || p$1.append("text").attr("x", g + f).attr("y", u).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(i.end);
	}
}, "drawWord"), F = { draw: L };
var N = {
	byteFontSize: "10px",
	startByteColor: "black",
	endByteColor: "black",
	labelColor: "black",
	labelFontSize: "12px",
	titleColor: "black",
	titleFontSize: "14px",
	blockStrokeColor: "black",
	blockStrokeWidth: "1",
	blockFillColor: "#efefef"
};
var gt = {
	parser: D,
	get db() {
		return new b();
	},
	renderer: F,
	styles: /* @__PURE__ */ m(({ packet: e } = {}) => {
		let t = /* @__PURE__ */ Lt(N, e);
		return `
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`;
	}, "styles")
};
export { gt as t };
