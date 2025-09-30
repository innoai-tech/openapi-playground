import { $t as t, A as e, G as a, M as r, S as i, d as o, f as s, j as l, o as n, w as d, x as c } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as h } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as p } from "./vendor-mermaid.Vvvvrg2S.chunk.js";
import { t as k } from "./vendor-mermaid.CNStX6fI.chunk.js";
import { t as b } from "./vendor-mermaid.BVwC1HkE.chunk.js";
import { a as m } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
var f = c.packet, g = class {
	constructor() {
		this.packet = [], this.setAccTitle = s, this.getAccTitle = e, this.setDiagramTitle = a, this.getDiagramTitle = l, this.getAccDescription = n, this.setAccDescription = o;
	}
	static {
		h(this, "PacketDB");
	}
	getConfig() {
		let t = m({
			...f,
			...d().packet
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
		i(), this.packet = [];
	}
}, u = h((e, a) => {
	p(e, a);
	let r = -1, i = [], o = 1, { bitsPerRow: s } = a.getConfig();
	for (let { start: l, end: n, bits: d, label: c } of e.blocks) {
		if (void 0 !== l && void 0 !== n && n < l) throw Error(`Packet block ${l} - ${n} is invalid. End must be greater than start.`);
		if ((l ??= r + 1) !== r + 1) throw Error(`Packet block ${l} - ${n ?? l} is not contiguous. It should start from ${r + 1}.`);
		if (0 === d) throw Error(`Packet block ${l} is invalid. Cannot have a zero bit field.`);
		for (n ??= l + (d ?? 1) - 1, d ??= n - l + 1, r = n, t.debug(`Packet block ${l} - ${r} with label ${c}`); i.length <= s + 1 && a.getPacket().length < 1e4;) {
			let [t, e] = w({
				start: l,
				end: n,
				bits: d,
				label: c
			}, o, s);
			if (i.push(t), t.end + 1 === o * s && (a.pushWord(i), i = [], o++), !e) break;
			({start: l, end: n, bits: d, label: c} = e);
		}
	}
	a.pushWord(i);
}, "populate"), w = h((t, e, a) => {
	if (void 0 === t.start) throw Error("start should have been set during first phase");
	if (void 0 === t.end) throw Error("end should have been set during first phase");
	if (t.start > t.end) throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);
	if (t.end + 1 <= e * a) return [t, void 0];
	let r = e * a - 1, i = e * a;
	return [{
		start: t.start,
		end: r,
		label: t.label,
		bits: r - t.start
	}, {
		start: i,
		end: t.end,
		label: t.label,
		bits: t.end - i
	}];
}, "getNextFittingBlock"), x = {
	parser: { yy: void 0 },
	parse: h(async (e) => {
		let a = await k("packet", e), r = x.parser?.yy;
		if (!(r instanceof g)) throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		t.debug(a), u(a, r);
	}, "parse")
}, y = h((t, e, a, i) => {
	let o = i.db, s = o.getConfig(), { rowHeight: l, paddingY: n, bitWidth: d, bitsPerRow: c } = s, h = o.getPacket(), p = o.getDiagramTitle(), k = l + n, m = k * (h.length + 1) - (p ? 0 : l), f = d * c + 2, g = b(e);
	for (let [t, e] of (g.attr("viewbox", `0 0 ${f} ${m}`), r(g, m, f, s.useMaxWidth), h.entries())) $(g, e, t, s);
	g.append("text").text(p).attr("x", f / 2).attr("y", m - k / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), $ = h((t, e, a, { rowHeight: r, paddingX: i, paddingY: o, bitWidth: s, bitsPerRow: l, showBits: n }) => {
	let d = t.append("g"), c = a * (r + o) + o;
	for (let t of e) {
		let e = t.start % l * s + 1, a = (t.end - t.start + 1) * s - i;
		if (d.append("rect").attr("x", e).attr("y", c).attr("width", a).attr("height", r).attr("class", "packetBlock"), d.append("text").attr("x", e + a / 2).attr("y", c + r / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(t.label), !n) continue;
		let o = t.end === t.start, h = c - 2;
		d.append("text").attr("x", e + (o ? a / 2 : 0)).attr("y", h).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", o ? "middle" : "start").text(t.start), o || d.append("text").attr("x", e + a).attr("y", h).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(t.end);
	}
}, "drawWord"), v = {
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
}, B = {
	parser: x,
	get db() {
		return new g();
	},
	renderer: { draw: y },
	styles: h(({ packet: t } = {}) => {
		let e = m(v, t);
		return `
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`;
	}, "styles")
};
export { B as diagram };
