import { c } from "./vendor-min-mermaid~chunk-4KE642ED.C6bdL_Ha.chunk.js";
import { p } from "./vendor-min-mermaid~chunk-TYETAW3D.GV9BFlX7.chunk.js";
import { d as d$1 } from "./vendor-min-mermaid~chunk-MEBTFSOL.CzbWTQ25.chunk.js";
import { L as Le } from "./vendor-min-mermaid~chunk-YM3XIQPS.TrSm0jHB.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
import { B as Bf, F as Ff, L as Lf, M as Mf, w as wf, v as vf, T as Tf, S as Sf, E as Er, p as pl, t as tt } from "./vendor-min-mermaid~chunk-ZKYS2E5M.BgSjvTzJ.chunk.js";
var T = {
  packet: []
}, D = /* @__PURE__ */ structuredClone(T), q = pl.packet, V = /* @__PURE__ */ m$1(() => {
  let t = /* @__PURE__ */ Le({
    ...q,
    ...Er().packet
  });
  return t.showBits && (t.paddingY += 10), t;
}, "getConfig"), L = /* @__PURE__ */ m$1(() => D.packet, "getPacket"), N = /* @__PURE__ */ m$1((t) => {
  t.length > 0 && D.packet.push(t);
}, "pushWord"), I = /* @__PURE__ */ m$1(() => {
  Sf(), D = /* @__PURE__ */ structuredClone(T);
}, "clear"), d = {
  pushWord: N,
  getPacket: L,
  getConfig: V,
  clear: I,
  setAccTitle: vf,
  getAccTitle: wf,
  setDiagramTitle: Mf,
  getDiagramTitle: Lf,
  getAccDescription: Ff,
  setAccDescription: Bf
};
var M = 1e4, Y = /* @__PURE__ */ m$1((t) => {
  c(t, d);
  let e = -1, i = [], s = 1, { bitsPerRow: c$1 } = d.getConfig();
  for (let { start: r, end: o, label: m } of t.blocks) {
    if (o && o < r) throw new Error(`Packet block ${r} - ${o} is invalid. End must be greater than start.`);
    if (r !== e + 1) throw new Error(`Packet block ${r} - ${o ?? r} is not contiguous. It should start from ${e + 1}.`);
    for (e = o ?? r, tt.debug(`Packet block ${r} - ${e} with label ${m}`); i.length <= c$1 + 1 && d.getPacket().length < M; ) {
      let [y, l] = U({
        start: r,
        end: o,
        label: m
      }, s, c$1);
      if (i.push(y), y.end + 1 === s * c$1 && (d.pushWord(i), i = [], s++), !l) break;
      ({ start: r, end: o, label: m } = l);
    }
  }
  d.pushWord(i);
}, "populate"), U = /* @__PURE__ */ m$1((t, e, i) => {
  if (t.end === void 0 && (t.end = t.start), t.start > t.end) throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);
  return t.end + 1 <= e * i ? [
    t,
    void 0
  ] : [
    {
      start: t.start,
      end: e * i - 1,
      label: t.label
    },
    {
      start: e * i,
      end: t.end,
      label: t.label
    }
  ];
}, "getNextFittingBlock"), A = {
  parse: /* @__PURE__ */ m$1(async (t) => {
    let e = await p("packet", t);
    tt.debug(e), Y(e);
  }, "parse")
};
var H = /* @__PURE__ */ m$1((t, e, i, s) => {
  let c2 = s.db, r = /* @__PURE__ */ c2.getConfig(), { rowHeight: o, paddingY: m, bitWidth: y, bitsPerRow: l } = r, P = /* @__PURE__ */ c2.getPacket(), n = /* @__PURE__ */ c2.getDiagramTitle(), f = o + m, p2 = f * (P.length + 1) - (n ? 0 : o), k = y * l + 2, g = /* @__PURE__ */ d$1(e);
  g.attr("viewbox", `0 0 ${k} ${p2}`), Tf(g, p2, k, r.useMaxWidth);
  for (let [O, _] of P.entries()) K(g, _, O, r);
  g.append("text").text(n).attr("x", k / 2).attr("y", p2 - f / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), K = /* @__PURE__ */ m$1((t, e, i, param) => {
  let { rowHeight: s, paddingX: c2, paddingY: r, bitWidth: o, bitsPerRow: m, showBits: y } = param;
  let l = /* @__PURE__ */ t.append("g"), P = i * (s + r) + r;
  for (let n of e) {
    let f = n.start % m * o + 1, p2 = (n.end - n.start + 1) * o - c2;
    if (l.append("rect").attr("x", f).attr("y", P).attr("width", p2).attr("height", s).attr("class", "packetBlock"), l.append("text").attr("x", f + p2 / 2).attr("y", P + s / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(n.label), !y) continue;
    let k = n.end === n.start, g = P - 2;
    l.append("text").attr("x", f + (k ? p2 / 2 : 0)).attr("y", g).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", k ? "middle" : "start").text(n.start), k || l.append("text").attr("x", f + p2).attr("y", g).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(n.end);
  }
}, "drawWord"), E = {
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
}, R = /* @__PURE__ */ m$1(function() {
  let { packet: t } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let e = /* @__PURE__ */ Le(X, t);
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
var Dt = {
  parser: A,
  db: d,
  renderer: E,
  styles: R
};
export {
  Dt as diagram
};
