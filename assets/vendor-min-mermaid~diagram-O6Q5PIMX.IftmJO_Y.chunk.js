import { c } from './vendor-min-mermaid~chunk-4KE642ED.-04Badot.chunk.js';
import { p } from './vendor-min-mermaid~chunk-7ON4XGU6.CvQ3UDwh.chunk.js';
import { d } from './vendor-min-mermaid~chunk-I2YQ4O7X.eSgKSoUq.chunk.js';
import { L as Le } from './vendor-min-mermaid~chunk-IIWVAQKY.CwtpAX-Q.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { B as Bf, F as Ff, M as Mf, L as Lf, w as wf, v as vf, T as Tf, S as Sf, E as Er, p as pl, t as tt } from './vendor-min-mermaid~chunk-RAMAZW42.vc82q0BN.chunk.js';
var G = {
    packet: []
}, h = /*#__PURE__*/ structuredClone(G), q = pl.packet, V = /*#__PURE__*/ m$1(()=>{
    let t = /*#__PURE__*/ Le({
        ...q,
        ...Er().packet
    });
    return t.showBits && (t.paddingY += 10), t;
}, "getConfig"), L = /*#__PURE__*/ m$1(()=>h.packet, "getPacket"), N = /*#__PURE__*/ m$1((t)=>{
    t.length > 0 && h.packet.push(t);
}, "pushWord"), I = /*#__PURE__*/ m$1(()=>{
    Sf(), h = /*#__PURE__*/ structuredClone(G);
}, "clear"), f = {
    pushWord: N,
    getPacket: L,
    getConfig: V,
    clear: I,
    setAccTitle: vf,
    getAccTitle: wf,
    setDiagramTitle: Lf,
    getDiagramTitle: Mf,
    getAccDescription: Ff,
    setAccDescription: Bf
};
var M = 1e4, Y = /*#__PURE__*/ m$1((t)=>{
    c(t, f);
    let e = -1, i = [], n = 1, { bitsPerRow: s } = f.getConfig();
    for (let { start: r, end: o, bits: l, label: k } of t.blocks){
        if (r !== void 0 && o !== void 0 && o < r) throw new Error(`Packet block ${r} - ${o} is invalid. End must be greater than start.`);
        if (r ??= e + 1, r !== e + 1) throw new Error(`Packet block ${r} - ${o ?? r} is not contiguous. It should start from ${e + 1}.`);
        if (l === 0) throw new Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);
        for(o ??= r + (l ?? 1) - 1, l ??= o - r + 1, e = o, tt.debug(`Packet block ${r} - ${e} with label ${k}`); i.length <= s + 1 && f.getPacket().length < M;){
            let [d, p] = U({
                start: r,
                end: o,
                bits: l,
                label: k
            }, n, s);
            if (i.push(d), d.end + 1 === n * s && (f.pushWord(i), i = [], n++), !p) break;
            ({ start: r, end: o, bits: l, label: k } = p);
        }
    }
    f.pushWord(i);
}, "populate"), U = /*#__PURE__*/ m$1((t, e, i)=>{
    if (t.start === void 0) throw new Error("start should have been set during first phase");
    if (t.end === void 0) throw new Error("end should have been set during first phase");
    if (t.start > t.end) throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);
    if (t.end + 1 <= e * i) return [
        t,
        void 0
    ];
    let n = e * i - 1, s = e * i;
    return [
        {
            start: t.start,
            end: n,
            label: t.label,
            bits: n - t.start
        },
        {
            start: s,
            end: t.end,
            label: t.label,
            bits: t.end - s
        }
    ];
}, "getNextFittingBlock"), T = {
    parse: /*#__PURE__*/ m$1(async (t)=>{
        let e = await p("packet", t);
        tt.debug(e), Y(e);
    }, "parse")
};
var H = /*#__PURE__*/ m$1((t, e, i, n)=>{
    let s = n.db, r = /*#__PURE__*/ s.getConfig(), { rowHeight: o, paddingY: l, bitWidth: k, bitsPerRow: d$1 } = r, p = /*#__PURE__*/ s.getPacket(), c = /*#__PURE__*/ s.getDiagramTitle(), g = o + l, m = g * (p.length + 1) - (c ? 0 : o), u = k * d$1 + 2, b = /*#__PURE__*/ d(e);
    b.attr("viewbox", `0 0 ${u} ${m}`), Tf(b, m, u, r.useMaxWidth);
    for (let [O, _] of p.entries())K(b, _, O, r);
    b.append("text").text(c).attr("x", u / 2).attr("y", m - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), K = /*#__PURE__*/ m$1((t, e, i, param)=>{
    let { rowHeight: n, paddingX: s, paddingY: r, bitWidth: o, bitsPerRow: l, showBits: k } = param;
    let d = /*#__PURE__*/ t.append("g"), p = i * (n + r) + r;
    for (let c of e){
        let g = c.start % l * o + 1, m = (c.end - c.start + 1) * o - s;
        if (d.append("rect").attr("x", g).attr("y", p).attr("width", m).attr("height", n).attr("class", "packetBlock"), d.append("text").attr("x", g + m / 2).attr("y", p + n / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(c.label), !k) continue;
        let u = c.end === c.start, b = p - 2;
        d.append("text").attr("x", g + (u ? m / 2 : 0)).attr("y", b).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", u ? "middle" : "start").text(c.start), u || d.append("text").attr("x", g + m).attr("y", b).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(c.end);
    }
}, "drawWord"), A = {
    draw: H
};
var X = {
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
}, R = /*#__PURE__*/ m$1(function() {
    let { packet: t } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let e = /*#__PURE__*/ Le(X, t);
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
}, "styles");
var ht = {
    parser: T,
    db: f,
    renderer: A,
    styles: R
};
export { ht as diagram };
