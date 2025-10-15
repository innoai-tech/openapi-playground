import { t as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { V as ia, q as pt } from "./vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js";
import { G as nr, H as ln, R as hn, U as mr, Y as qo, g as Ni, k as Xo, m as Mo, q as ot, y as Ot } from "./vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js";
import { f as Yt, l as Vt, o as M, t as $ } from "./vendor-min-mermaid~chunk-EFRVIJHI.Df9d5nYk.chunk.js";
import { i as Rr, s as ve } from "./vendor-min-mermaid~chunk-GOL2OBWC.B4BOjWXT.chunk.js";
import { t as n } from "./vendor-min-mermaid~chunk-LM6QDVU5.Cv6-ZsBo.chunk.js";
import { a as u, i as p, r as m, t as S } from "./vendor-min-mermaid~chunk-5V7UUW6L.DAO7dsPA.chunk.js";
var C = /* @__PURE__ */ m$1(async (c, t, i) => {
	let r, e = t.useHtmlLabels || Mo(mr()?.htmlLabels);
	i ? r = i : r = "node default";
	let a = /* @__PURE__ */ c.insert("g").attr("class", r).attr("id", t.domId || t.id), h = /* @__PURE__ */ a.insert("g").attr("class", "label").attr("style", /* @__PURE__ */ Vt(t.labelStyle)), s;
	t.label === void 0 ? s = "" : s = typeof t.label == "string" ? t.label : t.label[0];
	let l = await Rr(h, /* @__PURE__ */ ot(/* @__PURE__ */ Yt(s), /* @__PURE__ */ mr()), {
		useHtmlLabels: e,
		width: t.width || mr().flowchart?.wrappingWidth,
		cssClasses: "markdown-node-label",
		style: t.labelStyle,
		addSvgBackground: !!t.icon || !!t.img
	}), o = /* @__PURE__ */ l.getBBox(), n$1 = (t?.padding ?? 0) / 2;
	if (e) {
		let p$1 = l.children[0], f = /* @__PURE__ */ ia(l), m$2 = /* @__PURE__ */ p$1.getElementsByTagName("img");
		if (m$2) {
			let d = s.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all(/* @__PURE__ */ [...m$2].map((g) => new Promise((y) => {
				function u$1() {
					if (g.style.display = "flex", g.style.flexDirection = "column", d) {
						let b = mr().fontSize ? mr().fontSize : window.getComputedStyle(document.body).fontSize, S$1 = 5, [k = Ni.fontSize] = $(b), w = k * S$1 + "px";
						g.style.minWidth = w, g.style.maxWidth = w;
					} else g.style.width = "100%";
					y(g);
				}
				m$1(u$1, "setupImage"), setTimeout(() => {
					g.complete && u$1();
				}), g.addEventListener("error", u$1), g.addEventListener("load", u$1);
			})));
		}
		o = /* @__PURE__ */ p$1.getBoundingClientRect(), f.attr("width", o.width), f.attr("height", o.height);
	}
	return e ? h.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")") : h.attr("transform", "translate(0, " + -o.height / 2 + ")"), t.centerLabel && h.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), h.insert("rect", ":first-child"), {
		shapeSvg: a,
		bbox: o,
		halfPadding: n$1,
		label: h
	};
}, "labelHelper"), At = /* @__PURE__ */ m$1(async (c, t, i) => {
	let r = i.useHtmlLabels || Mo(mr()?.flowchart?.htmlLabels), e = /* @__PURE__ */ c.insert("g").attr("class", "label").attr("style", i.labelStyle || ""), a = await Rr(e, /* @__PURE__ */ ot(/* @__PURE__ */ Yt(t), /* @__PURE__ */ mr()), {
		useHtmlLabels: r,
		width: i.width || mr()?.flowchart?.wrappingWidth,
		style: i.labelStyle,
		addSvgBackground: !!i.icon || !!i.img
	}), h = /* @__PURE__ */ a.getBBox(), s = i.padding / 2;
	if (Mo(mr()?.flowchart?.htmlLabels)) {
		let l = a.children[0], o = /* @__PURE__ */ ia(a);
		h = /* @__PURE__ */ l.getBoundingClientRect(), o.attr("width", h.width), o.attr("height", h.height);
	}
	return r ? e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")") : e.attr("transform", "translate(0, " + -h.height / 2 + ")"), i.centerLabel && e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), e.insert("rect", ":first-child"), {
		shapeSvg: c,
		bbox: h,
		halfPadding: s,
		label: e
	};
}, "insertLabel"), D = /* @__PURE__ */ m$1((c, t) => {
	let i = /* @__PURE__ */ t.node().getBBox();
	c.width = i.width, c.height = i.height;
}, "updateNodeBounds");
var P = /* @__PURE__ */ m$1((c, t) => (c.look === "handDrawn" ? "rough-node" : "node") + " " + c.cssClasses + " " + (t || ""), "getNodeClasses");
function H(c) {
	let t = /* @__PURE__ */ c.map((i, r) => `${r === 0 ? "M" : "L"}${i.x},${i.y}`);
	return t.push("Z"), t.join(" ");
}
m$1(H, "createPathFromPoints");
function lt(c, t, i, r, e, a) {
	let h = [], l = i - c, o = r - t, n$1 = l / a, p$1 = 2 * Math.PI / n$1, f = t + o / 2;
	for (let m$2 = 0; m$2 <= 50; m$2++) {
		let g = c + m$2 / 50 * l, y = f + e * Math.sin(p$1 * (g - c));
		h.push({
			x: g,
			y
		});
	}
	return h;
}
m$1(lt, "generateFullSineWavePoints");
function Nt(c, t, i, r, e, a) {
	let h = [], s = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s + p$1 * n$1, m$2 = c + i * Math.cos(f), d = t + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d
		});
	}
	return h;
}
m$1(Nt, "generateCirclePoints");
function te(c, t, i) {
	if (c && c.length) {
		let [r, e] = t, a = Math.PI / 180 * i, h = /* @__PURE__ */ Math.cos(a), s = /* @__PURE__ */ Math.sin(a);
		for (let l of c) {
			let [o, n$1] = l;
			l[0] = (o - r) * h - (n$1 - e) * s + r, l[1] = (o - r) * s + (n$1 - e) * h + e;
		}
	}
}
m$1(te, "t");
function sr(c, t) {
	return c[0] === t[0] && c[1] === t[1];
}
m$1(sr, "e");
function rr(c, t, i, r = 1) {
	let e = i, a = /* @__PURE__ */ Math.max(t, .1), h = c[0] && c[0][0] && typeof c[0][0] == "number" ? [c] : c, s = [0, 0];
	if (e) for (let o of h) te(o, s, e);
	let l = /* @__PURE__ */ function(o, n$1, p$1) {
		let f = [];
		for (let b of o) {
			let S$1 = [...b];
			sr(S$1[0], S$1[S$1.length - 1]) || S$1.push([S$1[0][0], S$1[0][1]]), S$1.length > 2 && f.push(S$1);
		}
		let m$2 = [];
		n$1 = /* @__PURE__ */ Math.max(n$1, .1);
		let d = [];
		for (let b of f) for (let S$1 = 0; S$1 < b.length - 1; S$1++) {
			let k = b[S$1], w = b[S$1 + 1];
			if (k[1] !== w[1]) {
				let B = /* @__PURE__ */ Math.min(k[1], w[1]);
				d.push({
					ymin: B,
					ymax: /* @__PURE__ */ Math.max(k[1], w[1]),
					x: B === k[1] ? k[0] : w[0],
					islope: (w[0] - k[0]) / (w[1] - k[1])
				});
			}
		}
		if (d.sort((b, S$1) => b.ymin < S$1.ymin ? -1 : b.ymin > S$1.ymin ? 1 : b.x < S$1.x ? -1 : b.x > S$1.x ? 1 : b.ymax === S$1.ymax ? 0 : (b.ymax - S$1.ymax) / Math.abs(b.ymax - S$1.ymax)), !d.length) return m$2;
		let g = [], y = d[0].ymin, u$1 = 0;
		for (; g.length || d.length;) {
			if (d.length) {
				let b = -1;
				for (let S$1 = 0; S$1 < d.length && !(d[S$1].ymin > y); S$1++) b = S$1;
				d.splice(0, b + 1).forEach((S$1) => {
					g.push({
						s: y,
						edge: S$1
					});
				});
			}
			if (g = /* @__PURE__ */ g.filter((b) => !(b.edge.ymax <= y)), g.sort((b, S$1) => b.edge.x === S$1.edge.x ? 0 : (b.edge.x - S$1.edge.x) / Math.abs(b.edge.x - S$1.edge.x)), (p$1 !== 1 || u$1 % n$1 == 0) && g.length > 1) for (let b = 0; b < g.length; b += 2) {
				let S$1 = b + 1;
				if (S$1 >= g.length) break;
				let k = g[b].edge, w = g[S$1].edge;
				m$2.push([[/* @__PURE__ */ Math.round(k.x), y], [/* @__PURE__ */ Math.round(w.x), y]]);
			}
			y += p$1, g.forEach((b) => {
				b.edge.x = b.edge.x + p$1 * b.edge.islope;
			}), u$1++;
		}
		return m$2;
	}(h, a, r);
	if (e) {
		for (let o of h) te(o, s, -e);
		(function(o, n$1, p$1) {
			let f = [];
			o.forEach((m$2) => f.push(...m$2)), te(f, n$1, p$1);
		})(l, s, -e);
	}
	return l;
}
m$1(rr, "s");
function Tt(c, t) {
	var i;
	let r = t.hachureAngle + 90, e = t.hachureGap;
	e < 0 && (e = 4 * t.strokeWidth), e = /* @__PURE__ */ Math.round(/* @__PURE__ */ Math.max(e, .1));
	let a = 1;
	return t.roughness >= 1 && (((i = t.randomizer) === null || i === void 0 ? void 0 : i.next()) || Math.random()) > .7 && (a = e), rr(c, e, r, a || 1);
}
m$1(Tt, "n");
var Ct = class {
	static {
		m$1(this, "o");
	}
	constructor(t) {
		this.helper = t;
	}
	fillPolygons(t, i) {
		return this._fillPolygons(t, i);
	}
	_fillPolygons(t, i) {
		let r = /* @__PURE__ */ Tt(t, i);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.renderLines(r, i)
		};
	}
	renderLines(t, i) {
		let r = [];
		for (let e of t) r.push(.../* @__PURE__ */ this.helper.doubleLineOps(e[0][0], e[0][1], e[1][0], e[1][1], i));
		return r;
	}
};
function zt(c) {
	let t = c[0], i = c[1];
	return Math.sqrt(Math.pow(t[0] - i[0], 2) + Math.pow(t[1] - i[1], 2));
}
m$1(zt, "a");
var oe = class extends Ct {
	static {
		m$1(this, "h");
	}
	fillPolygons(t, i) {
		let r = i.hachureGap;
		r < 0 && (r = 4 * i.strokeWidth), r = /* @__PURE__ */ Math.max(r, .1);
		let e = /* @__PURE__ */ Tt(t, /* @__PURE__ */ Object.assign({}, i, { hachureGap: r })), a = Math.PI / 180 * i.hachureAngle, h = [], s = .5 * r * Math.cos(a), l = .5 * r * Math.sin(a);
		for (let [o, n$1] of e) zt([o, n$1]) && h.push([[o[0] - s, o[1] + l], [...n$1]], [[o[0] + s, o[1] - l], [...n$1]]);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.renderLines(h, i)
		};
	}
}, ie = class extends Ct {
	static {
		m$1(this, "r");
	}
	fillPolygons(t, i) {
		let r = /* @__PURE__ */ this._fillPolygons(t, i), e = /* @__PURE__ */ Object.assign({}, i, { hachureAngle: i.hachureAngle + 90 }), a = /* @__PURE__ */ this._fillPolygons(t, e);
		return r.ops = /* @__PURE__ */ r.ops.concat(a.ops), r;
	}
}, ne = class {
	static {
		m$1(this, "i");
	}
	constructor(t) {
		this.helper = t;
	}
	fillPolygons(t, i) {
		let r = /* @__PURE__ */ Tt(t, i = /* @__PURE__ */ Object.assign({}, i, { hachureAngle: 0 }));
		return this.dotsOnLines(r, i);
	}
	dotsOnLines(t, i) {
		let r = [], e = i.hachureGap;
		e < 0 && (e = 4 * i.strokeWidth), e = /* @__PURE__ */ Math.max(e, .1);
		let a = i.fillWeight;
		a < 0 && (a = i.strokeWidth / 2);
		let h = e / 4;
		for (let s of t) {
			let l = /* @__PURE__ */ zt(s), o = l / e, n$1 = Math.ceil(o) - 1, p$1 = l - n$1 * e, f = (s[0][0] + s[1][0]) / 2 - e / 4, m$2 = /* @__PURE__ */ Math.min(s[0][1], s[1][1]);
			for (let d = 0; d < n$1; d++) {
				let g = m$2 + p$1 + d * e, y = f - h + 2 * Math.random() * h, u$1 = g - h + 2 * Math.random() * h, b = /* @__PURE__ */ this.helper.ellipse(y, u$1, a, a, i);
				r.push(...b.ops);
			}
		}
		return {
			type: "fillSketch",
			ops: r
		};
	}
}, le = class {
	static {
		m$1(this, "c");
	}
	constructor(t) {
		this.helper = t;
	}
	fillPolygons(t, i) {
		let r = /* @__PURE__ */ Tt(t, i);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.dashedLine(r, i)
		};
	}
	dashedLine(t, i) {
		let r = i.dashOffset < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashOffset, e = i.dashGap < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashGap, a = [];
		return t.forEach((h) => {
			let s = /* @__PURE__ */ zt(h), l = /* @__PURE__ */ Math.floor(s / (r + e)), o = (s + e - l * (r + e)) / 2, n$1 = h[0], p$1 = h[1];
			n$1[0] > p$1[0] && (n$1 = h[1], p$1 = h[0]);
			let f = /* @__PURE__ */ Math.atan((p$1[1] - n$1[1]) / (p$1[0] - n$1[0]));
			for (let m$2 = 0; m$2 < l; m$2++) {
				let d = m$2 * (r + e), g = d + r, y = [n$1[0] + d * Math.cos(f) + o * Math.cos(f), n$1[1] + d * Math.sin(f) + o * Math.sin(f)], u$1 = [n$1[0] + g * Math.cos(f) + o * Math.cos(f), n$1[1] + g * Math.sin(f) + o * Math.sin(f)];
				a.push(.../* @__PURE__ */ this.helper.doubleLineOps(y[0], y[1], u$1[0], u$1[1], i));
			}
		}), a;
	}
}, ce = class {
	static {
		m$1(this, "l");
	}
	constructor(t) {
		this.helper = t;
	}
	fillPolygons(t, i) {
		let r = i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap, e = i.zigzagOffset < 0 ? r : i.zigzagOffset, a = /* @__PURE__ */ Tt(t, i = /* @__PURE__ */ Object.assign({}, i, { hachureGap: r + e }));
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.zigzagLines(a, e, i)
		};
	}
	zigzagLines(t, i, r) {
		let e = [];
		return t.forEach((a) => {
			let h = /* @__PURE__ */ zt(a), s = /* @__PURE__ */ Math.round(h / (2 * i)), l = a[0], o = a[1];
			l[0] > o[0] && (l = a[1], o = a[0]);
			let n$1 = /* @__PURE__ */ Math.atan((o[1] - l[1]) / (o[0] - l[0]));
			for (let p$1 = 0; p$1 < s; p$1++) {
				let f = 2 * p$1 * i, m$2 = 2 * (p$1 + 1) * i, d = /* @__PURE__ */ Math.sqrt(2 * Math.pow(i, 2)), g = [l[0] + f * Math.cos(n$1), l[1] + f * Math.sin(n$1)], y = [l[0] + m$2 * Math.cos(n$1), l[1] + m$2 * Math.sin(n$1)], u$1 = [g[0] + d * Math.cos(n$1 + Math.PI / 4), g[1] + d * Math.sin(n$1 + Math.PI / 4)];
				e.push(.../* @__PURE__ */ this.helper.doubleLineOps(g[0], g[1], u$1[0], u$1[1], r), .../* @__PURE__ */ this.helper.doubleLineOps(u$1[0], u$1[1], y[0], y[1], r));
			}
		}), e;
	}
}, et = {}, he = class {
	static {
		m$1(this, "p");
	}
	constructor(t) {
		this.seed = t;
	}
	next() {
		return this.seed ? (2 ** 31 - 1 & (this.seed = /* @__PURE__ */ Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
	}
}, ar = 0, ee = 1, ve$1 = 2, Ot$1 = {
	A: 7,
	a: 7,
	C: 6,
	c: 6,
	H: 1,
	h: 1,
	L: 2,
	l: 2,
	M: 2,
	m: 2,
	Q: 4,
	q: 4,
	S: 4,
	s: 4,
	T: 2,
	t: 2,
	V: 1,
	v: 1,
	Z: 0,
	z: 0
};
function se(c, t) {
	return c.type === t;
}
m$1(se, "k");
function ue(c) {
	let t = [], i = /* @__PURE__ */ function(h) {
		let s = new Array();
		for (; h !== "";) if (h.match(/^([ \t\r\n,]+)/)) h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		else if (h.match(/^([aAcChHlLmMqQsStTvVzZ])/)) s[s.length] = {
			type: ar,
			text: RegExp.$1
		}, h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		else {
			if (!h.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
			s[s.length] = {
				type: ee,
				text: `${parseFloat(RegExp.$1)}`
			}, h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		}
		return s[s.length] = {
			type: ve$1,
			text: ""
		}, s;
	}(c), r = "BOD", e = 0, a = i[e];
	for (; !se(a, ve$1);) {
		let h = 0, s = [];
		if (r === "BOD") {
			if (a.text !== "M" && a.text !== "m") return ue("M0,0" + c);
			e++, h = Ot$1[a.text], r = a.text;
		} else se(a, ee) ? h = Ot$1[r] : (e++, h = Ot$1[a.text], r = a.text);
		if (!(e + h < i.length)) throw new Error("Path data ended short");
		for (let l = e; l < e + h; l++) {
			let o = i[l];
			if (!se(o, ee)) throw new Error("Param not a number: " + r + "," + o.text);
			s[s.length] = +o.text;
		}
		if (typeof Ot$1[r] != "number") throw new Error("Bad segment: " + r);
		{
			let l = {
				key: r,
				data: s
			};
			t.push(l), e += h, a = i[e], r === "M" && (r = "L"), r === "m" && (r = "l");
		}
	}
	return t;
}
m$1(ue, "b");
function Ge(c) {
	let t = 0, i = 0, r = 0, e = 0, a = [];
	for (let { key: h, data: s } of c) switch (h) {
		case "M":
			a.push({
				key: "M",
				data: [...s]
			}), [t, i] = s, [r, e] = s;
			break;
		case "m":
			t += s[0], i += s[1], a.push({
				key: "M",
				data: [t, i]
			}), r = t, e = i;
			break;
		case "L":
			a.push({
				key: "L",
				data: [...s]
			}), [t, i] = s;
			break;
		case "l":
			t += s[0], i += s[1], a.push({
				key: "L",
				data: [t, i]
			});
			break;
		case "C":
			a.push({
				key: "C",
				data: [...s]
			}), t = s[4], i = s[5];
			break;
		case "c": {
			let l = /* @__PURE__ */ s.map((o, n$1) => n$1 % 2 ? o + i : o + t);
			a.push({
				key: "C",
				data: l
			}), t = l[4], i = l[5];
			break;
		}
		case "Q":
			a.push({
				key: "Q",
				data: [...s]
			}), t = s[2], i = s[3];
			break;
		case "q": {
			let l = /* @__PURE__ */ s.map((o, n$1) => n$1 % 2 ? o + i : o + t);
			a.push({
				key: "Q",
				data: l
			}), t = l[2], i = l[3];
			break;
		}
		case "A":
			a.push({
				key: "A",
				data: [...s]
			}), t = s[5], i = s[6];
			break;
		case "a":
			t += s[5], i += s[6], a.push({
				key: "A",
				data: [
					s[0],
					s[1],
					s[2],
					s[3],
					s[4],
					t,
					i
				]
			});
			break;
		case "H":
			a.push({
				key: "H",
				data: [...s]
			}), t = s[0];
			break;
		case "h":
			t += s[0], a.push({
				key: "H",
				data: [t]
			});
			break;
		case "V":
			a.push({
				key: "V",
				data: [...s]
			}), i = s[0];
			break;
		case "v":
			i += s[0], a.push({
				key: "V",
				data: [i]
			});
			break;
		case "S":
			a.push({
				key: "S",
				data: [...s]
			}), t = s[2], i = s[3];
			break;
		case "s": {
			let l = /* @__PURE__ */ s.map((o, n$1) => n$1 % 2 ? o + i : o + t);
			a.push({
				key: "S",
				data: l
			}), t = l[2], i = l[3];
			break;
		}
		case "T":
			a.push({
				key: "T",
				data: [...s]
			}), t = s[0], i = s[1];
			break;
		case "t":
			t += s[0], i += s[1], a.push({
				key: "T",
				data: [t, i]
			});
			break;
		case "Z":
		case "z": a.push({
			key: "Z",
			data: []
		}), t = r, i = e;
	}
	return a;
}
m$1(Ge, "y");
function Ee(c) {
	let t = [], i = "", r = 0, e = 0, a = 0, h = 0, s = 0, l = 0;
	for (let { key: o, data: n$1 } of c) {
		switch (o) {
			case "M":
				t.push({
					key: "M",
					data: [...n$1]
				}), [r, e] = n$1, [a, h] = n$1;
				break;
			case "C":
				t.push({
					key: "C",
					data: [...n$1]
				}), r = n$1[4], e = n$1[5], s = n$1[2], l = n$1[3];
				break;
			case "L":
				t.push({
					key: "L",
					data: [...n$1]
				}), [r, e] = n$1;
				break;
			case "H":
				r = n$1[0], t.push({
					key: "L",
					data: [r, e]
				});
				break;
			case "V":
				e = n$1[0], t.push({
					key: "L",
					data: [r, e]
				});
				break;
			case "S": {
				let p$1 = 0, f = 0;
				i === "C" || i === "S" ? (p$1 = r + (r - s), f = e + (e - l)) : (p$1 = r, f = e), t.push({
					key: "C",
					data: [
						p$1,
						f,
						...n$1
					]
				}), s = n$1[0], l = n$1[1], r = n$1[2], e = n$1[3];
				break;
			}
			case "T": {
				let [p$1, f] = n$1, m$2 = 0, d = 0;
				i === "Q" || i === "T" ? (m$2 = r + (r - s), d = e + (e - l)) : (m$2 = r, d = e);
				let g = r + 2 * (m$2 - r) / 3, y = e + 2 * (d - e) / 3, u$1 = p$1 + 2 * (m$2 - p$1) / 3, b = f + 2 * (d - f) / 3;
				t.push({
					key: "C",
					data: [
						g,
						y,
						u$1,
						b,
						p$1,
						f
					]
				}), s = m$2, l = d, r = p$1, e = f;
				break;
			}
			case "Q": {
				let [p$1, f, m$2, d] = n$1, g = r + 2 * (p$1 - r) / 3, y = e + 2 * (f - e) / 3, u$1 = m$2 + 2 * (p$1 - m$2) / 3, b = d + 2 * (f - d) / 3;
				t.push({
					key: "C",
					data: [
						g,
						y,
						u$1,
						b,
						m$2,
						d
					]
				}), s = p$1, l = f, r = m$2, e = d;
				break;
			}
			case "A": {
				let p$1 = /* @__PURE__ */ Math.abs(n$1[0]), f = /* @__PURE__ */ Math.abs(n$1[1]), m$2 = n$1[2], d = n$1[3], g = n$1[4], y = n$1[5], u$1 = n$1[6];
				p$1 === 0 || f === 0 ? (t.push({
					key: "C",
					data: [
						r,
						e,
						y,
						u$1,
						y,
						u$1
					]
				}), r = y, e = u$1) : (r !== y || e !== u$1) && (je(r, e, y, u$1, p$1, f, m$2, d, g).forEach(function(b) {
					t.push({
						key: "C",
						data: b
					});
				}), r = y, e = u$1);
				break;
			}
			case "Z": t.push({
				key: "Z",
				data: []
			}), r = a, e = h;
		}
		i = o;
	}
	return t;
}
m$1(Ee, "m");
function Pt(c, t, i) {
	return [c * Math.cos(i) - t * Math.sin(i), c * Math.sin(i) + t * Math.cos(i)];
}
m$1(Pt, "w");
function je(c, t, i, r, e, a, h, s, l, o) {
	let n$1 = (p$1 = h, Math.PI * p$1 / 180);
	var p$1;
	let f = [], m$2 = 0, d = 0, g = 0, y = 0;
	if (o) [m$2, d, g, y] = o;
	else {
		[c, t] = /* @__PURE__ */ Pt(c, t, -n$1), [i, r] = /* @__PURE__ */ Pt(i, r, -n$1);
		let G = (c - i) / 2, j = (t - r) / 2, W = G * G / (e * e) + j * j / (a * a);
		W > 1 && (W = /* @__PURE__ */ Math.sqrt(W), e *= W, a *= W);
		let A = e * e, I = a * a, F = A * I - A * j * j - I * G * G, Q = A * j * j + I * G * G, it = (s === l ? -1 : 1) * Math.sqrt(/* @__PURE__ */ Math.abs(F / Q));
		g = it * e * j / a + (c + i) / 2, y = it * -a * G / e + (t + r) / 2, m$2 = /* @__PURE__ */ Math.asin(/* @__PURE__ */ parseFloat(/* @__PURE__ */ ((t - y) / a).toFixed(9))), d = /* @__PURE__ */ Math.asin(/* @__PURE__ */ parseFloat(/* @__PURE__ */ ((r - y) / a).toFixed(9))), c < g && (m$2 = Math.PI - m$2), i < g && (d = Math.PI - d), m$2 < 0 && (m$2 = 2 * Math.PI + m$2), d < 0 && (d = 2 * Math.PI + d), l && m$2 > d && (m$2 -= 2 * Math.PI), !l && d > m$2 && (d -= 2 * Math.PI);
	}
	let u$1 = d - m$2;
	if (Math.abs(u$1) > 120 * Math.PI / 180) {
		let G = d, j = i, W = r;
		d = l && d > m$2 ? m$2 + 120 * Math.PI / 180 * 1 : m$2 + 120 * Math.PI / 180 * -1, f = /* @__PURE__ */ je(i = g + e * Math.cos(d), r = y + a * Math.sin(d), j, W, e, a, h, 0, l, [
			d,
			G,
			g,
			y
		]);
	}
	u$1 = d - m$2;
	let b = /* @__PURE__ */ Math.cos(m$2), S$1 = /* @__PURE__ */ Math.sin(m$2), k = /* @__PURE__ */ Math.cos(d), w = /* @__PURE__ */ Math.sin(d), B = /* @__PURE__ */ Math.tan(u$1 / 4), T = 4 / 3 * e * B, R = 4 / 3 * a * B, E = [c, t], L = [c + T * S$1, t - R * b], O = [i + T * w, r - R * k], V = [i, r];
	if (L[0] = 2 * E[0] - L[0], L[1] = 2 * E[1] - L[1], o) return [
		L,
		O,
		V
	].concat(f);
	{
		f = /* @__PURE__ */ [
			L,
			O,
			V
		].concat(f);
		let G = [];
		for (let j = 0; j < f.length; j += 3) {
			let W = /* @__PURE__ */ Pt(f[j][0], f[j][1], n$1), A = /* @__PURE__ */ Pt(f[j + 1][0], f[j + 1][1], n$1), I = /* @__PURE__ */ Pt(f[j + 2][0], f[j + 2][1], n$1);
			G.push([
				W[0],
				W[1],
				A[0],
				A[1],
				I[0],
				I[1]
			]);
		}
		return G;
	}
}
m$1(je, "x");
var or = {
	randOffset: /* @__PURE__ */ m$1(function(c, t) {
		return _(c, t);
	}, "randOffset"),
	randOffsetWithRange: /* @__PURE__ */ m$1(function(c, t, i) {
		return It(c, t, i);
	}, "randOffsetWithRange"),
	ellipse: /* @__PURE__ */ m$1(function(c, t, i, r, e) {
		return pe(c, t, e, /* @__PURE__ */ Oe(i, r, e)).opset;
	}, "ellipse"),
	doubleLineOps: /* @__PURE__ */ m$1(function(c, t, i, r, e) {
		return ut(c, t, i, r, e, !0);
	}, "doubleLineOps")
};
function Ae(c, t, i, r, e) {
	return {
		type: "path",
		ops: /* @__PURE__ */ ut(c, t, i, r, e)
	};
}
m$1(Ae, "v");
function Vt$1(c, t, i) {
	let r = (c || []).length;
	if (r > 2) {
		let e = [];
		for (let a = 0; a < r - 1; a++) e.push(.../* @__PURE__ */ ut(c[a][0], c[a][1], c[a + 1][0], c[a + 1][1], i));
		return t && e.push(.../* @__PURE__ */ ut(c[r - 1][0], c[r - 1][1], c[0][0], c[0][1], i)), {
			type: "path",
			ops: e
		};
	}
	return r === 2 ? Ae(c[0][0], c[0][1], c[1][0], c[1][1], i) : {
		type: "path",
		ops: []
	};
}
m$1(Vt$1, "S");
function ir(c, t, i, r, e) {
	return function(a, h) {
		return Vt$1(a, !0, h);
	}([
		[c, t],
		[c + i, t],
		[c + i, t + r],
		[c, t + r]
	], e);
}
m$1(ir, "O");
function Me(c, t) {
	if (c.length) {
		let i = typeof c[0][0] == "number" ? [c] : c, r = /* @__PURE__ */ Lt(i[0], 1 * (1 + .2 * t.roughness), t), e = t.disableMultiStroke ? [] : Lt(i[0], 1.5 * (1 + .22 * t.roughness), /* @__PURE__ */ Be(t));
		for (let a = 1; a < i.length; a++) {
			let h = i[a];
			if (h.length) {
				let s = /* @__PURE__ */ Lt(h, 1 * (1 + .2 * t.roughness), t), l = t.disableMultiStroke ? [] : Lt(h, 1.5 * (1 + .22 * t.roughness), /* @__PURE__ */ Be(t));
				for (let o of s) o.op !== "move" && r.push(o);
				for (let o of l) o.op !== "move" && e.push(o);
			}
		}
		return {
			type: "path",
			ops: /* @__PURE__ */ r.concat(e)
		};
	}
	return {
		type: "path",
		ops: []
	};
}
m$1(Me, "L");
function Oe(c, t, i) {
	let r = /* @__PURE__ */ Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(c / 2, 2) + Math.pow(t / 2, 2)) / 2)), e = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ Math.max(i.curveStepCount, i.curveStepCount / Math.sqrt(200) * r)), a = 2 * Math.PI / e, h = /* @__PURE__ */ Math.abs(c / 2), s = /* @__PURE__ */ Math.abs(t / 2), l = 1 - i.curveFitting;
	return h += /* @__PURE__ */ _(h * l, i), s += /* @__PURE__ */ _(s * l, i), {
		increment: a,
		rx: h,
		ry: s
	};
}
m$1(Oe, "T");
function pe(c, t, i, r) {
	let [e, a] = Ce(r.increment, c, t, r.rx, r.ry, 1, r.increment * It(.1, /* @__PURE__ */ It(.4, 1, i), i), i), h = /* @__PURE__ */ Ft(e, null, i);
	if (!i.disableMultiStroke && i.roughness !== 0) {
		let [s] = Ce(r.increment, c, t, r.rx, r.ry, 1.5, 0, i), l = /* @__PURE__ */ Ft(s, null, i);
		h = /* @__PURE__ */ h.concat(l);
	}
	return {
		estimatedPoints: a,
		opset: {
			type: "path",
			ops: h
		}
	};
}
m$1(pe, "D");
function ke(c, t, i, r, e, a, h, s, l) {
	let o = c, n$1 = t, p$1 = /* @__PURE__ */ Math.abs(i / 2), f = /* @__PURE__ */ Math.abs(r / 2);
	p$1 += /* @__PURE__ */ _(.01 * p$1, l), f += /* @__PURE__ */ _(.01 * f, l);
	let m$2 = e, d = a;
	for (; m$2 < 0;) m$2 += 2 * Math.PI, d += 2 * Math.PI;
	d - m$2 > 2 * Math.PI && (m$2 = 0, d = 2 * Math.PI);
	let g = 2 * Math.PI / l.curveStepCount, y = /* @__PURE__ */ Math.min(g / 2, (d - m$2) / 2), u$1 = /* @__PURE__ */ Te(y, o, n$1, p$1, f, m$2, d, 1, l);
	if (!l.disableMultiStroke) {
		let b = /* @__PURE__ */ Te(y, o, n$1, p$1, f, m$2, d, 1.5, l);
		u$1.push(...b);
	}
	return h && (s ? u$1.push(.../* @__PURE__ */ ut(o, n$1, o + p$1 * Math.cos(m$2), n$1 + f * Math.sin(m$2), l), .../* @__PURE__ */ ut(o, n$1, o + p$1 * Math.cos(d), n$1 + f * Math.sin(d), l)) : u$1.push({
		op: "lineTo",
		data: [o, n$1]
	}, {
		op: "lineTo",
		data: [o + p$1 * Math.cos(m$2), n$1 + f * Math.sin(m$2)]
	})), {
		type: "path",
		ops: u$1
	};
}
m$1(ke, "A");
function Pe(c, t) {
	let i = /* @__PURE__ */ Ee(/* @__PURE__ */ Ge(/* @__PURE__ */ ue(c))), r = [], e = [0, 0], a = [0, 0];
	for (let { key: h, data: s } of i) switch (h) {
		case "M":
			a = [s[0], s[1]], e = [s[0], s[1]];
			break;
		case "L":
			r.push(.../* @__PURE__ */ ut(a[0], a[1], s[0], s[1], t)), a = [s[0], s[1]];
			break;
		case "C": {
			let [l, o, n$1, p$1, f, m$2] = s;
			r.push(.../* @__PURE__ */ nr$1(l, o, n$1, p$1, f, m$2, a, t)), a = [f, m$2];
			break;
		}
		case "Z": r.push(.../* @__PURE__ */ ut(a[0], a[1], e[0], e[1], t)), a = [e[0], e[1]];
	}
	return {
		type: "path",
		ops: r
	};
}
m$1(Pe, "_");
function re(c, t) {
	let i = [];
	for (let r of c) if (r.length) {
		let e = t.maxRandomnessOffset || 0, a = r.length;
		if (a > 2) {
			i.push({
				op: "move",
				data: [r[0][0] + _(e, t), r[0][1] + _(e, t)]
			});
			for (let h = 1; h < a; h++) i.push({
				op: "lineTo",
				data: [r[h][0] + _(e, t), r[h][1] + _(e, t)]
			});
		}
	}
	return {
		type: "fillPath",
		ops: i
	};
}
m$1(re, "I");
function vt(c, t) {
	return (function(i, r) {
		let e = i.fillStyle || "hachure";
		if (!et[e]) switch (e) {
			case "zigzag":
				et[e] || (et[e] = new oe(r));
				break;
			case "cross-hatch":
				et[e] || (et[e] = new ie(r));
				break;
			case "dots":
				et[e] || (et[e] = new ne(r));
				break;
			case "dashed":
				et[e] || (et[e] = new le(r));
				break;
			case "zigzag-line":
				et[e] || (et[e] = new ce(r));
				break;
			default: e = "hachure", et[e] || (et[e] = new Ct(r));
		}
		return et[e];
	})(t, or).fillPolygons(c, t);
}
m$1(vt, "C");
function Be(c) {
	let t = /* @__PURE__ */ Object.assign({}, c);
	return t.randomizer = void 0, c.seed && (t.seed = c.seed + 1), t;
}
m$1(Be, "z");
function Le(c) {
	return c.randomizer || (c.randomizer = new he(c.seed || 0)), c.randomizer.next();
}
m$1(Le, "W");
function It(c, t, i, r = 1) {
	return i.roughness * r * (Le(i) * (t - c) + c);
}
m$1(It, "E");
function _(c, t, i = 1) {
	return It(-c, c, t, i);
}
m$1(_, "G");
function ut(c, t, i, r, e, a = !1) {
	let h = a ? e.disableMultiStrokeFill : e.disableMultiStroke, s = /* @__PURE__ */ me(c, t, i, r, e, !0, !1);
	if (h) return s;
	let l = /* @__PURE__ */ me(c, t, i, r, e, !0, !0);
	return s.concat(l);
}
m$1(ut, "$");
function me(c, t, i, r, e, a, h) {
	let s = Math.pow(c - i, 2) + Math.pow(t - r, 2), l = /* @__PURE__ */ Math.sqrt(s), o = 1;
	o = l < 200 ? 1 : l > 500 ? .4 : -.0016668 * l + 1.233334;
	let n$1 = e.maxRandomnessOffset || 0;
	n$1 * n$1 * 100 > s && (n$1 = l / 10);
	let p$1 = n$1 / 2, f = .2 + .2 * Le(e), m$2 = e.bowing * e.maxRandomnessOffset * (r - t) / 200, d = e.bowing * e.maxRandomnessOffset * (c - i) / 200;
	m$2 = /* @__PURE__ */ _(m$2, e, o), d = /* @__PURE__ */ _(d, e, o);
	let g = [], y = /* @__PURE__ */ m$1(() => _(p$1, e, o), "M"), u$1 = /* @__PURE__ */ m$1(() => _(n$1, e, o), "k"), b = e.preserveVertices;
	return a && (h ? g.push({
		op: "move",
		data: [c + (b ? 0 : y()), t + (b ? 0 : y())]
	}) : g.push({
		op: "move",
		data: [c + (b ? 0 : _(n$1, e, o)), t + (b ? 0 : _(n$1, e, o))]
	})), h ? g.push({
		op: "bcurveTo",
		data: [
			m$2 + c + (i - c) * f + y(),
			d + t + (r - t) * f + y(),
			m$2 + c + 2 * (i - c) * f + y(),
			d + t + 2 * (r - t) * f + y(),
			i + (b ? 0 : y()),
			r + (b ? 0 : y())
		]
	}) : g.push({
		op: "bcurveTo",
		data: [
			m$2 + c + (i - c) * f + u$1(),
			d + t + (r - t) * f + u$1(),
			m$2 + c + 2 * (i - c) * f + u$1(),
			d + t + 2 * (r - t) * f + u$1(),
			i + (b ? 0 : u$1()),
			r + (b ? 0 : u$1())
		]
	}), g;
}
m$1(me, "R");
function Lt(c, t, i) {
	if (!c.length) return [];
	let r = [];
	r.push([c[0][0] + _(t, i), c[0][1] + _(t, i)]), r.push([c[0][0] + _(t, i), c[0][1] + _(t, i)]);
	for (let e = 1; e < c.length; e++) r.push([c[e][0] + _(t, i), c[e][1] + _(t, i)]), e === c.length - 1 && r.push([c[e][0] + _(t, i), c[e][1] + _(t, i)]);
	return Ft(r, null, i);
}
m$1(Lt, "j");
function Ft(c, t, i) {
	let r = c.length, e = [];
	if (r > 3) {
		let a = [], h = 1 - i.curveTightness;
		e.push({
			op: "move",
			data: [c[1][0], c[1][1]]
		});
		for (let s = 1; s + 2 < r; s++) {
			let l = c[s];
			a[0] = [l[0], l[1]], a[1] = [l[0] + (h * c[s + 1][0] - h * c[s - 1][0]) / 6, l[1] + (h * c[s + 1][1] - h * c[s - 1][1]) / 6], a[2] = [c[s + 1][0] + (h * c[s][0] - h * c[s + 2][0]) / 6, c[s + 1][1] + (h * c[s][1] - h * c[s + 2][1]) / 6], a[3] = [c[s + 1][0], c[s + 1][1]], e.push({
				op: "bcurveTo",
				data: [
					a[1][0],
					a[1][1],
					a[2][0],
					a[2][1],
					a[3][0],
					a[3][1]
				]
			});
		}
		if (t && t.length === 2) {
			let s = i.maxRandomnessOffset;
			e.push({
				op: "lineTo",
				data: [t[0] + _(s, i), t[1] + _(s, i)]
			});
		}
	} else r === 3 ? (e.push({
		op: "move",
		data: [c[1][0], c[1][1]]
	}), e.push({
		op: "bcurveTo",
		data: [
			c[1][0],
			c[1][1],
			c[2][0],
			c[2][1],
			c[2][0],
			c[2][1]
		]
	})) : r === 2 && e.push(.../* @__PURE__ */ me(c[0][0], c[0][1], c[1][0], c[1][1], i, !0, !0));
	return e;
}
m$1(Ft, "q");
function Ce(c, t, i, r, e, a, h, s) {
	let l = [], o = [];
	if (s.roughness === 0) {
		c /= 4, o.push([t + r * Math.cos(-c), i + e * Math.sin(-c)]);
		for (let n$1 = 0; n$1 <= 2 * Math.PI; n$1 += c) {
			let p$1 = [t + r * Math.cos(n$1), i + e * Math.sin(n$1)];
			l.push(p$1), o.push(p$1);
		}
		o.push([t + r * Math.cos(0), i + e * Math.sin(0)]), o.push([t + r * Math.cos(c), i + e * Math.sin(c)]);
	} else {
		let n$1 = _(.5, s) - Math.PI / 2;
		o.push([_(a, s) + t + .9 * r * Math.cos(n$1 - c), _(a, s) + i + .9 * e * Math.sin(n$1 - c)]);
		let p$1 = 2 * Math.PI + n$1 - .01;
		for (let f = n$1; f < p$1; f += c) {
			let m$2 = [_(a, s) + t + r * Math.cos(f), _(a, s) + i + e * Math.sin(f)];
			l.push(m$2), o.push(m$2);
		}
		o.push([_(a, s) + t + r * Math.cos(n$1 + 2 * Math.PI + .5 * h), _(a, s) + i + e * Math.sin(n$1 + 2 * Math.PI + .5 * h)]), o.push([_(a, s) + t + .98 * r * Math.cos(n$1 + h), _(a, s) + i + .98 * e * Math.sin(n$1 + h)]), o.push([_(a, s) + t + .9 * r * Math.cos(n$1 + .5 * h), _(a, s) + i + .9 * e * Math.sin(n$1 + .5 * h)]);
	}
	return [o, l];
}
m$1(Ce, "F");
function Te(c, t, i, r, e, a, h, s, l) {
	let o = a + _(.1, l), n$1 = [];
	n$1.push([_(s, l) + t + .9 * r * Math.cos(o - c), _(s, l) + i + .9 * e * Math.sin(o - c)]);
	for (let p$1 = o; p$1 <= h; p$1 += c) n$1.push([_(s, l) + t + r * Math.cos(p$1), _(s, l) + i + e * Math.sin(p$1)]);
	return n$1.push([t + r * Math.cos(h), i + e * Math.sin(h)]), n$1.push([t + r * Math.cos(h), i + e * Math.sin(h)]), Ft(n$1, null, l);
}
m$1(Te, "V");
function nr$1(c, t, i, r, e, a, h, s) {
	let l = [], o = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + .3], n$1 = [0, 0], p$1 = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
	for (let m$2 = 0; m$2 < p$1; m$2++) m$2 === 0 ? l.push({
		op: "move",
		data: [h[0], h[1]]
	}) : l.push({
		op: "move",
		data: [h[0] + (f ? 0 : _(o[0], s)), h[1] + (f ? 0 : _(o[0], s))]
	}), n$1 = f ? [e, a] : [e + _(o[m$2], s), a + _(o[m$2], s)], l.push({
		op: "bcurveTo",
		data: [
			c + _(o[m$2], s),
			t + _(o[m$2], s),
			i + _(o[m$2], s),
			r + _(o[m$2], s),
			n$1[0],
			n$1[1]
		]
	});
	return l;
}
m$1(nr$1, "Z");
function Bt(c) {
	return [...c];
}
m$1(Bt, "Q");
function Re(c, t = 0) {
	let i = c.length;
	if (i < 3) throw new Error("A curve must have at least three points.");
	let r = [];
	if (i === 3) r.push(/* @__PURE__ */ Bt(c[0]), /* @__PURE__ */ Bt(c[1]), /* @__PURE__ */ Bt(c[2]), /* @__PURE__ */ Bt(c[2]));
	else {
		let e = [];
		e.push(c[0], c[0]);
		for (let s = 1; s < c.length; s++) e.push(c[s]), s === c.length - 1 && e.push(c[s]);
		let a = [], h = 1 - t;
		r.push(/* @__PURE__ */ Bt(e[0]));
		for (let s = 1; s + 2 < e.length; s++) {
			let l = e[s];
			a[0] = [l[0], l[1]], a[1] = [l[0] + (h * e[s + 1][0] - h * e[s - 1][0]) / 6, l[1] + (h * e[s + 1][1] - h * e[s - 1][1]) / 6], a[2] = [e[s + 1][0] + (h * e[s][0] - h * e[s + 2][0]) / 6, e[s + 1][1] + (h * e[s][1] - h * e[s + 2][1]) / 6], a[3] = [e[s + 1][0], e[s + 1][1]], r.push(a[1], a[2], a[3]);
		}
	}
	return r;
}
m$1(Re, "H");
function Wt(c, t) {
	return Math.pow(c[0] - t[0], 2) + Math.pow(c[1] - t[1], 2);
}
m$1(Wt, "N");
function lr(c, t, i) {
	let r = /* @__PURE__ */ Wt(t, i);
	if (r === 0) return Wt(c, t);
	let e = ((c[0] - t[0]) * (i[0] - t[0]) + (c[1] - t[1]) * (i[1] - t[1])) / r;
	return e = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(1, e)), Wt(c, /* @__PURE__ */ $t(t, i, e));
}
m$1(lr, "B");
function $t(c, t, i) {
	return [c[0] + (t[0] - c[0]) * i, c[1] + (t[1] - c[1]) * i];
}
m$1($t, "J");
function fe(c, t, i, r) {
	let e = r || [];
	if (function(s, l) {
		let o = s[l + 0], n$1 = s[l + 1], p$1 = s[l + 2], f = s[l + 3], m$2 = 3 * n$1[0] - 2 * o[0] - f[0];
		m$2 *= m$2;
		let d = 3 * n$1[1] - 2 * o[1] - f[1];
		d *= d;
		let g = 3 * p$1[0] - 2 * f[0] - o[0];
		g *= g;
		let y = 3 * p$1[1] - 2 * f[1] - o[1];
		return y *= y, m$2 < g && (m$2 = g), d < y && (d = y), m$2 + d;
	}(c, t) < i) {
		let s = c[t + 0];
		e.length ? (a = e[e.length - 1], h = s, Math.sqrt(/* @__PURE__ */ Wt(a, h)) > 1 && e.push(s)) : e.push(s), e.push(c[t + 3]);
	} else {
		let l = c[t + 0], o = c[t + 1], n$1 = c[t + 2], p$1 = c[t + 3], f = /* @__PURE__ */ $t(l, o, .5), m$2 = /* @__PURE__ */ $t(o, n$1, .5), d = /* @__PURE__ */ $t(n$1, p$1, .5), g = /* @__PURE__ */ $t(f, m$2, .5), y = /* @__PURE__ */ $t(m$2, d, .5), u$1 = /* @__PURE__ */ $t(g, y, .5);
		fe([
			l,
			f,
			g,
			u$1
		], 0, i, e), fe([
			u$1,
			y,
			d,
			p$1
		], 0, i, e);
	}
	var a, h;
	return e;
}
m$1(fe, "K");
function cr(c, t) {
	return _t(c, 0, c.length, t);
}
m$1(cr, "U");
function _t(c, t, i, r, e) {
	let a = e || [], h = c[t], s = c[i - 1], l = 0, o = 1;
	for (let n$1 = t + 1; n$1 < i - 1; ++n$1) {
		let p$1 = /* @__PURE__ */ lr(c[n$1], h, s);
		p$1 > l && (l = p$1, o = n$1);
	}
	return Math.sqrt(l) > r ? (_t(c, t, o + 1, r, a), _t(c, o, i, r, a)) : (a.length || a.push(h), a.push(s)), a;
}
m$1(_t, "X");
function ae(c, t = .15, i) {
	let r = [], e = (c.length - 1) / 3;
	for (let a = 0; a < e; a++) fe(c, 3 * a, t, r);
	return i && i > 0 ? _t(r, 0, r.length, i) : r;
}
m$1(ae, "Y");
var ot$1 = "none", Mt = class {
	static {
		m$1(this, "et");
	}
	constructor(t) {
		this.defaultOptions = {
			maxRandomnessOffset: 2,
			roughness: 1,
			bowing: 1,
			stroke: "#000",
			strokeWidth: 1,
			curveTightness: 0,
			curveFitting: .95,
			curveStepCount: 9,
			fillStyle: "hachure",
			fillWeight: -1,
			hachureAngle: -41,
			hachureGap: -1,
			dashOffset: -1,
			dashGap: -1,
			zigzagOffset: -1,
			seed: 0,
			disableMultiStroke: !1,
			disableMultiStrokeFill: !1,
			preserveVertices: !1,
			fillShapeRoughnessGain: .8
		}, this.config = t || {}, this.config.options && (this.defaultOptions = /* @__PURE__ */ this._o(this.config.options));
	}
	static newSeed() {
		return Math.floor(Math.random() * 2 ** 31);
	}
	_o(t) {
		return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
	}
	_d(t, i, r) {
		return {
			shape: t,
			sets: i || [],
			options: r || this.defaultOptions
		};
	}
	line(t, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a);
		return this._d("line", [/* @__PURE__ */ Ae(t, i, r, e, h)], h);
	}
	rectangle(t, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a), s = [], l = /* @__PURE__ */ ir(t, i, r, e, h);
		if (h.fill) {
			let o = [
				[t, i],
				[t + r, i],
				[t + r, i + e],
				[t, i + e]
			];
			h.fillStyle === "solid" ? s.push(/* @__PURE__ */ re([o], h)) : s.push(/* @__PURE__ */ vt([o], h));
		}
		return h.stroke !== ot$1 && s.push(l), this._d("rectangle", s, h);
	}
	ellipse(t, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a), s = [], l = /* @__PURE__ */ Oe(r, e, h), o = /* @__PURE__ */ pe(t, i, h, l);
		if (h.fill) if (h.fillStyle === "solid") {
			let n$1 = pe(t, i, h, l).opset;
			n$1.type = "fillPath", s.push(n$1);
		} else s.push(/* @__PURE__ */ vt([o.estimatedPoints], h));
		return h.stroke !== ot$1 && s.push(o.opset), this._d("ellipse", s, h);
	}
	circle(t, i, r, e) {
		let a = /* @__PURE__ */ this.ellipse(t, i, r, r, e);
		return a.shape = "circle", a;
	}
	linearPath(t, i) {
		let r = /* @__PURE__ */ this._o(i);
		return this._d("linearPath", [/* @__PURE__ */ Vt$1(t, !1, r)], r);
	}
	arc(t, i, r, e, a, h, s = !1, l) {
		let o = /* @__PURE__ */ this._o(l), n$1 = [], p$1 = /* @__PURE__ */ ke(t, i, r, e, a, h, s, !0, o);
		if (s && o.fill) if (o.fillStyle === "solid") {
			let f = /* @__PURE__ */ Object.assign({}, o);
			f.disableMultiStroke = !0;
			let m$2 = /* @__PURE__ */ ke(t, i, r, e, a, h, !0, !1, f);
			m$2.type = "fillPath", n$1.push(m$2);
		} else n$1.push(/* @__PURE__ */ function(f, m$2, d, g, y, u$1, b) {
			let S$1 = f, k = m$2, w = /* @__PURE__ */ Math.abs(d / 2), B = /* @__PURE__ */ Math.abs(g / 2);
			w += /* @__PURE__ */ _(.01 * w, b), B += /* @__PURE__ */ _(.01 * B, b);
			let T = y, R = u$1;
			for (; T < 0;) T += 2 * Math.PI, R += 2 * Math.PI;
			R - T > 2 * Math.PI && (T = 0, R = 2 * Math.PI);
			let E = (R - T) / b.curveStepCount, L = [];
			for (let O = T; O <= R; O += E) L.push([S$1 + w * Math.cos(O), k + B * Math.sin(O)]);
			return L.push([S$1 + w * Math.cos(R), k + B * Math.sin(R)]), L.push([S$1, k]), vt([L], b);
		}(t, i, r, e, a, h, o));
		return o.stroke !== ot$1 && n$1.push(p$1), this._d("arc", n$1, o);
	}
	curve(t, i) {
		let r = /* @__PURE__ */ this._o(i), e = [], a = /* @__PURE__ */ Me(t, r);
		if (r.fill && r.fill !== ot$1) if (r.fillStyle === "solid") {
			let h = /* @__PURE__ */ Me(t, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
				disableMultiStroke: !0,
				roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
			}));
			e.push({
				type: "fillPath",
				ops: /* @__PURE__ */ this._mergedShape(h.ops)
			});
		} else {
			let h = [], s = t;
			if (s.length) {
				let l = typeof s[0][0] == "number" ? [s] : s;
				for (let o of l) o.length < 3 ? h.push(...o) : o.length === 3 ? h.push(.../* @__PURE__ */ ae(/* @__PURE__ */ Re([
					o[0],
					o[0],
					o[1],
					o[2]
				]), 10, (1 + r.roughness) / 2)) : h.push(.../* @__PURE__ */ ae(/* @__PURE__ */ Re(o), 10, (1 + r.roughness) / 2));
			}
			h.length && e.push(/* @__PURE__ */ vt([h], r));
		}
		return r.stroke !== ot$1 && e.push(a), this._d("curve", e, r);
	}
	polygon(t, i) {
		let r = /* @__PURE__ */ this._o(i), e = [], a = /* @__PURE__ */ Vt$1(t, !0, r);
		return r.fill && (r.fillStyle === "solid" ? e.push(/* @__PURE__ */ re([t], r)) : e.push(/* @__PURE__ */ vt([t], r))), r.stroke !== ot$1 && e.push(a), this._d("polygon", e, r);
	}
	path(t, i) {
		let r = /* @__PURE__ */ this._o(i), e = [];
		if (!t) return this._d("path", e, r);
		t = /* @__PURE__ */ (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		let a = r.fill && r.fill !== "transparent" && r.fill !== ot$1, h = r.stroke !== ot$1, s = !!(r.simplification && r.simplification < 1), l = /* @__PURE__ */ function(n$1, p$1, f) {
			let m$2 = /* @__PURE__ */ Ee(/* @__PURE__ */ Ge(/* @__PURE__ */ ue(n$1))), d = [], g = [], y = [0, 0], u$1 = [], b = /* @__PURE__ */ m$1(() => {
				u$1.length >= 4 && g.push(.../* @__PURE__ */ ae(u$1, p$1)), u$1 = [];
			}, "i"), S$1 = /* @__PURE__ */ m$1(() => {
				b(), g.length && (d.push(g), g = []);
			}, "c");
			for (let { key: w, data: B } of m$2) switch (w) {
				case "M":
					S$1(), y = [B[0], B[1]], g.push(y);
					break;
				case "L":
					b(), g.push([B[0], B[1]]);
					break;
				case "C":
					if (!u$1.length) {
						let T = g.length ? g[g.length - 1] : y;
						u$1.push([T[0], T[1]]);
					}
					u$1.push([B[0], B[1]]), u$1.push([B[2], B[3]]), u$1.push([B[4], B[5]]);
					break;
				case "Z": b(), g.push([y[0], y[1]]);
			}
			if (S$1(), !f) return d;
			let k = [];
			for (let w of d) {
				let B = /* @__PURE__ */ cr(w, f);
				B.length && k.push(B);
			}
			return k;
		}(t, 1, s ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), o = /* @__PURE__ */ Pe(t, r);
		if (a) if (r.fillStyle === "solid") if (l.length === 1) {
			let n$1 = /* @__PURE__ */ Pe(t, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
				disableMultiStroke: !0,
				roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
			}));
			e.push({
				type: "fillPath",
				ops: /* @__PURE__ */ this._mergedShape(n$1.ops)
			});
		} else e.push(/* @__PURE__ */ re(l, r));
		else e.push(/* @__PURE__ */ vt(l, r));
		return h && (s ? l.forEach((n$1) => {
			e.push(/* @__PURE__ */ Vt$1(n$1, !1, r));
		}) : e.push(o)), this._d("path", e, r);
	}
	opsToPath(t, i) {
		let r = "";
		for (let e of t.ops) {
			let a = typeof i == "number" && i >= 0 ? e.data.map((h) => +h.toFixed(i)) : e.data;
			switch (e.op) {
				case "move":
					r += `M${a[0]} ${a[1]} `;
					break;
				case "bcurveTo":
					r += `C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;
					break;
				case "lineTo": r += `L${a[0]} ${a[1]} `;
			}
		}
		return r.trim();
	}
	toPaths(t) {
		let i = t.sets || [], r = t.options || this.defaultOptions, e = [];
		for (let a of i) {
			let h = null;
			switch (a.type) {
				case "path":
					h = {
						d: /* @__PURE__ */ this.opsToPath(a),
						stroke: r.stroke,
						strokeWidth: r.strokeWidth,
						fill: ot$1
					};
					break;
				case "fillPath":
					h = {
						d: /* @__PURE__ */ this.opsToPath(a),
						stroke: ot$1,
						strokeWidth: 0,
						fill: r.fill || ot$1
					};
					break;
				case "fillSketch": h = /* @__PURE__ */ this.fillSketch(a, r);
			}
			h && e.push(h);
		}
		return e;
	}
	fillSketch(t, i) {
		let r = i.fillWeight;
		return r < 0 && (r = i.strokeWidth / 2), {
			d: /* @__PURE__ */ this.opsToPath(t),
			stroke: i.fill || ot$1,
			strokeWidth: r,
			fill: ot$1
		};
	}
	_mergedShape(t) {
		return t.filter((i, r) => r === 0 || i.op !== "move");
	}
}, de = class {
	static {
		m$1(this, "st");
	}
	constructor(t, i) {
		this.canvas = t, this.ctx = /* @__PURE__ */ this.canvas.getContext("2d"), this.gen = new Mt(i);
	}
	draw(t) {
		let i = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.ctx, a = t.options.fixedDecimalPlaceDigits;
		for (let h of i) switch (h.type) {
			case "path":
				e.save(), e.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, e.lineWidth = r.strokeWidth, r.strokeLineDash && e.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (e.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(e, h, a), e.restore();
				break;
			case "fillPath": {
				e.save(), e.fillStyle = r.fill || "";
				let s = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
				this._drawToContext(e, h, a, s), e.restore();
				break;
			}
			case "fillSketch": this.fillSketch(e, h, r);
		}
	}
	fillSketch(t, i, r) {
		let e = r.fillWeight;
		e < 0 && (e = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = e, this._drawToContext(t, i, r.fixedDecimalPlaceDigits), t.restore();
	}
	_drawToContext(t, i, r, e = "nonzero") {
		t.beginPath();
		for (let a of i.ops) {
			let h = typeof r == "number" && r >= 0 ? a.data.map((s) => +s.toFixed(r)) : a.data;
			switch (a.op) {
				case "move":
					t.moveTo(h[0], h[1]);
					break;
				case "bcurveTo":
					t.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
					break;
				case "lineTo": t.lineTo(h[0], h[1]);
			}
		}
		i.type === "fillPath" ? t.fill(e) : t.stroke();
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	line(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.line(t, i, r, e, a);
		return this.draw(h), h;
	}
	rectangle(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.rectangle(t, i, r, e, a);
		return this.draw(h), h;
	}
	ellipse(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.ellipse(t, i, r, e, a);
		return this.draw(h), h;
	}
	circle(t, i, r, e) {
		let a = /* @__PURE__ */ this.gen.circle(t, i, r, e);
		return this.draw(a), a;
	}
	linearPath(t, i) {
		let r = /* @__PURE__ */ this.gen.linearPath(t, i);
		return this.draw(r), r;
	}
	polygon(t, i) {
		let r = /* @__PURE__ */ this.gen.polygon(t, i);
		return this.draw(r), r;
	}
	arc(t, i, r, e, a, h, s = !1, l) {
		let o = /* @__PURE__ */ this.gen.arc(t, i, r, e, a, h, s, l);
		return this.draw(o), o;
	}
	curve(t, i) {
		let r = /* @__PURE__ */ this.gen.curve(t, i);
		return this.draw(r), r;
	}
	path(t, i) {
		let r = /* @__PURE__ */ this.gen.path(t, i);
		return this.draw(r), r;
	}
}, Ht = "http://www.w3.org/2000/svg", ge = class {
	static {
		m$1(this, "ot");
	}
	constructor(t, i) {
		this.svg = t, this.gen = new Mt(i);
	}
	draw(t) {
		let i = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.svg.ownerDocument || window.document, a = /* @__PURE__ */ e.createElementNS(Ht, "g"), h = t.options.fixedDecimalPlaceDigits;
		for (let s of i) {
			let l = null;
			switch (s.type) {
				case "path":
					l = /* @__PURE__ */ e.createElementNS(Ht, "path"), l.setAttribute("d", /* @__PURE__ */ this.opsToPath(s, h)), l.setAttribute("stroke", r.stroke), l.setAttribute("stroke-width", r.strokeWidth + ""), l.setAttribute("fill", "none"), r.strokeLineDash && l.setAttribute("stroke-dasharray", /* @__PURE__ */ r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
					break;
				case "fillPath":
					l = /* @__PURE__ */ e.createElementNS(Ht, "path"), l.setAttribute("d", /* @__PURE__ */ this.opsToPath(s, h)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
					break;
				case "fillSketch": l = /* @__PURE__ */ this.fillSketch(e, s, r);
			}
			l && a.appendChild(l);
		}
		return a;
	}
	fillSketch(t, i, r) {
		let e = r.fillWeight;
		e < 0 && (e = r.strokeWidth / 2);
		let a = /* @__PURE__ */ t.createElementNS(Ht, "path");
		return a.setAttribute("d", /* @__PURE__ */ this.opsToPath(i, r.fixedDecimalPlaceDigits)), a.setAttribute("stroke", r.fill || ""), a.setAttribute("stroke-width", e + ""), a.setAttribute("fill", "none"), r.fillLineDash && a.setAttribute("stroke-dasharray", /* @__PURE__ */ r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), a;
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	opsToPath(t, i) {
		return this.gen.opsToPath(t, i);
	}
	line(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.line(t, i, r, e, a);
		return this.draw(h);
	}
	rectangle(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.rectangle(t, i, r, e, a);
		return this.draw(h);
	}
	ellipse(t, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.ellipse(t, i, r, e, a);
		return this.draw(h);
	}
	circle(t, i, r, e) {
		let a = /* @__PURE__ */ this.gen.circle(t, i, r, e);
		return this.draw(a);
	}
	linearPath(t, i) {
		let r = /* @__PURE__ */ this.gen.linearPath(t, i);
		return this.draw(r);
	}
	polygon(t, i) {
		let r = /* @__PURE__ */ this.gen.polygon(t, i);
		return this.draw(r);
	}
	arc(t, i, r, e, a, h, s = !1, l) {
		let o = /* @__PURE__ */ this.gen.arc(t, i, r, e, a, h, s, l);
		return this.draw(o);
	}
	curve(t, i) {
		let r = /* @__PURE__ */ this.gen.curve(t, i);
		return this.draw(r);
	}
	path(t, i) {
		let r = /* @__PURE__ */ this.gen.path(t, i);
		return this.draw(r);
	}
}, v = {
	canvas: /* @__PURE__ */ m$1((c, t) => new de(c, t), "canvas"),
	svg: /* @__PURE__ */ m$1((c, t) => new ge(c, t), "svg"),
	generator: /* @__PURE__ */ m$1((c) => new Mt(c), "generator"),
	newSeed: /* @__PURE__ */ m$1(() => Mt.newSeed(), "newSeed")
};
var yt = /* @__PURE__ */ m$1((c, t) => {
	var i = c.x, r = c.y, e = t.x - i, a = t.y - r, h = c.width / 2, s = c.height / 2, l, o;
	return Math.abs(a) * h > Math.abs(e) * s ? (a < 0 && (s = -s), l = a === 0 ? 0 : s * e / a, o = s) : (e < 0 && (h = -h), l = h, o = e === 0 ? 0 : h * a / e), {
		x: i + l,
		y: r + o
	};
}, "intersectRect");
function pr(c, t) {
	t && c.attr("style", t);
}
m$1(pr, "applyStyle");
async function mr$1(c) {
	let t = /* @__PURE__ */ ia(/* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), i = /* @__PURE__ */ t.append("xhtml:div"), r = /* @__PURE__ */ mr(), e = c.label;
	c.label && nr(c.label) && (e = await qo(/* @__PURE__ */ c.label.replace(hn.lineBreakRegex, `
`), r));
	let h = "<span class=\"" + (c.isNode ? "nodeLabel" : "edgeLabel") + "\" " + (c.labelStyle ? "style=\"" + c.labelStyle + "\"" : "") + ">" + e + "</span>";
	return i.html(/* @__PURE__ */ ot(h, r)), pr(i, c.labelStyle), i.style("display", "inline-block"), i.style("padding-right", "1px"), i.style("white-space", "nowrap"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
m$1(mr$1, "addHtmlLabel");
var Rt = /* @__PURE__ */ m$1(async (c, t, i, r) => {
	let e = c || "";
	if (typeof e == "object" && (e = e[0]), Mo(mr().flowchart.htmlLabels)) {
		e = /* @__PURE__ */ e.replace(/\\n|\n/g, "<br />"), pt.info("vertexText" + e);
		return await mr$1({
			isNode: r,
			label: /* @__PURE__ */ Yt(e).replace(/fa[blrs]?:fa-[\w-]+/g, (s) => `<i class='${s.replace(":", " ")}'></i>`),
			labelStyle: t && t.replace("fill:", "color:")
		});
	} else {
		let a = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "text");
		a.setAttribute("style", /* @__PURE__ */ t.replace("color:", "fill:"));
		let h = [];
		typeof e == "string" ? h = /* @__PURE__ */ e.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(e) ? h = e : h = [];
		for (let s of h) {
			let l = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), i ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = /* @__PURE__ */ s.trim(), a.appendChild(l);
		}
		return a;
	}
}, "createLabel");
var st = /* @__PURE__ */ m$1((c, t, i, r, e) => [
	"M",
	c + e,
	t,
	"H",
	c + i - e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c + i,
	t + e,
	"V",
	t + r - e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c + i - e,
	t + r,
	"H",
	c + e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c,
	t + r - e,
	"V",
	t + e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c + e,
	t,
	"Z"
].join(" "), "createRoundedRectPathD");
var He = /* @__PURE__ */ m$1(async (c, t) => {
	pt.info("Creating subgraph rect for ", t.id, t);
	let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: l, borderStyles: o, backgroundStyles: n$1 } = m(t), p$1 = /* @__PURE__ */ c.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = /* @__PURE__ */ Mo(i.flowchart.htmlLabels), m$2 = /* @__PURE__ */ p$1.insert("g").attr("class", "cluster-label "), d = await Rr(m$2, t.label, {
		style: t.labelStyle,
		useHtmlLabels: f,
		isNode: !0
	}), g = /* @__PURE__ */ d.getBBox();
	if (Mo(i.flowchart.htmlLabels)) {
		let T = d.children[0], R = /* @__PURE__ */ ia(d);
		g = /* @__PURE__ */ T.getBoundingClientRect(), R.attr("width", g.width), R.attr("height", g.height);
	}
	let y = t.width <= g.width + t.padding ? g.width + t.padding : t.width;
	t.width <= g.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
	let u$1 = t.height, b = t.x - y / 2, S$1 = t.y - u$1 / 2;
	pt.trace("Data ", t, /* @__PURE__ */ JSON.stringify(t));
	let k;
	if (t.look === "handDrawn") {
		let T = /* @__PURE__ */ v.svg(p$1), R = /* @__PURE__ */ S(t, {
			roughness: .7,
			fill: a,
			stroke: h,
			fillWeight: 3,
			seed: e
		}), E = /* @__PURE__ */ T.path(/* @__PURE__ */ st(b, S$1, y, u$1, 0), R);
		k = /* @__PURE__ */ p$1.insert(() => (pt.debug("Rough node insert CXC", E), E), ":first-child"), k.select("path:nth-child(2)").attr("style", /* @__PURE__ */ o.join(";")), k.select("path").attr("style", /* @__PURE__ */ n$1.join(";").replace("fill", "stroke"));
	} else k = /* @__PURE__ */ p$1.insert("rect", ":first-child"), k.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S$1).attr("width", y).attr("height", u$1);
	let { subGraphTitleTopMargin: w } = n(i);
	if (m$2.attr("transform", `translate(${t.x - g.width / 2}, ${t.y - t.height / 2 + w})`), s) {
		let T = /* @__PURE__ */ m$2.select("span");
		T && T.attr("style", s);
	}
	let B = /* @__PURE__ */ k.node().getBBox();
	return t.offsetX = 0, t.width = B.width, t.height = B.height, t.offsetY = g.height - t.padding / 2, t.intersect = function(T) {
		return yt(t, T);
	}, {
		cluster: p$1,
		labelBBox: g
	};
}, "rect"), br = {
	rect: He,
	squareRect: He,
	roundedWithTitle: /* @__PURE__ */ m$1(async (c, t) => {
		let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { altBackground: a, compositeBackground: h, compositeTitleBackground: s, nodeBorder: l } = r, o = /* @__PURE__ */ c.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), n$1 = /* @__PURE__ */ o.insert("g", ":first-child"), p$1 = /* @__PURE__ */ o.insert("g").attr("class", "cluster-label"), f = /* @__PURE__ */ o.append("rect"), m$2 = /* @__PURE__ */ p$1.node().appendChild(await Rt(t.label, t.labelStyle, void 0, !0)), d = /* @__PURE__ */ m$2.getBBox();
		if (Mo(i.flowchart.htmlLabels)) {
			let E = m$2.children[0], L = /* @__PURE__ */ ia(m$2);
			d = /* @__PURE__ */ E.getBoundingClientRect(), L.attr("width", d.width), L.attr("height", d.height);
		}
		let g = 0 * t.padding, y = g / 2, u$1 = (t.width <= d.width + t.padding ? d.width + t.padding : t.width) + g;
		t.width <= d.width + t.padding ? t.diff = (u$1 - t.width) / 2 - t.padding : t.diff = -t.padding;
		let b = t.height + g, S$1 = t.height + g - d.height - 6, k = t.x - u$1 / 2, w = t.y - b / 2;
		t.width = u$1;
		let B = t.y - t.height / 2 - y + d.height + 2, T;
		if (t.look === "handDrawn") {
			let E = /* @__PURE__ */ t.cssClasses.includes("statediagram-cluster-alt"), L = /* @__PURE__ */ v.svg(o), O = t.rx || t.ry ? L.path(/* @__PURE__ */ st(k, w, u$1, b, 10), {
				roughness: .7,
				fill: s,
				fillStyle: "solid",
				stroke: l,
				seed: e
			}) : L.rectangle(k, w, u$1, b, { seed: e });
			T = /* @__PURE__ */ o.insert(() => O, ":first-child");
			let V = /* @__PURE__ */ L.rectangle(k, B, u$1, S$1, {
				fill: E ? a : h,
				fillStyle: E ? "hachure" : "solid",
				stroke: l,
				seed: e
			});
			T = /* @__PURE__ */ o.insert(() => O, ":first-child"), f = /* @__PURE__ */ o.insert(() => V);
		} else T = /* @__PURE__ */ n$1.insert("rect", ":first-child"), T.attr("class", "outer").attr("x", k).attr("y", w).attr("width", u$1).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", k).attr("y", B).attr("width", u$1).attr("height", S$1);
		p$1.attr("transform", `translate(${t.x - d.width / 2}, ${w + 1 - (Mo(i.flowchart.htmlLabels) ? 0 : 3)})`);
		return t.height = T.node().getBBox().height, t.offsetX = 0, t.offsetY = d.height - t.padding / 2, t.labelBBox = d, t.intersect = function(E) {
			return yt(t, E);
		}, {
			cluster: o,
			labelBBox: d
		};
	}, "roundedWithTitle"),
	noteGroup: /* @__PURE__ */ m$1((c, t) => {
		let i = /* @__PURE__ */ c.insert("g").attr("class", "note-cluster").attr("id", t.id), r = /* @__PURE__ */ i.insert("rect", ":first-child"), e = 0 * t.padding, a = e / 2;
		r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + e).attr("height", t.height + e).attr("fill", "none");
		let h = /* @__PURE__ */ r.node().getBBox();
		return t.width = h.width, t.height = h.height, t.intersect = function(s) {
			return yt(t, s);
		}, {
			cluster: i,
			labelBBox: {
				width: 0,
				height: 0
			}
		};
	}, "noteGroup"),
	divider: /* @__PURE__ */ m$1((c, t) => {
		let { themeVariables: r, handDrawnSeed: e } = mr(), { nodeBorder: a } = r, h = /* @__PURE__ */ c.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), s = /* @__PURE__ */ h.insert("g", ":first-child"), l = 0 * t.padding, o = t.width + l;
		t.diff = -t.padding;
		let n$1 = t.height + l, p$1 = t.x - o / 2, f = t.y - n$1 / 2;
		t.width = o;
		let m$2;
		if (t.look === "handDrawn") {
			let y = /* @__PURE__ */ v.svg(h).rectangle(p$1, f, o, n$1, {
				fill: "lightgrey",
				roughness: .5,
				strokeLineDash: [5],
				stroke: a,
				seed: e
			});
			m$2 = /* @__PURE__ */ h.insert(() => y, ":first-child");
		} else m$2 = /* @__PURE__ */ s.insert("rect", ":first-child"), m$2.attr("class", "divider").attr("x", p$1).attr("y", f).attr("width", o).attr("height", n$1).attr("data-look", t.look);
		return t.height = m$2.node().getBBox().height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(g) {
			return yt(t, g);
		}, {
			cluster: h,
			labelBBox: {}
		};
	}, "divider"),
	kanbanSection: /* @__PURE__ */ m$1(async (c, t) => {
		pt.info("Creating subgraph rect for ", t.id, t);
		let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: l, borderStyles: o, backgroundStyles: n$1 } = m(t), p$1 = /* @__PURE__ */ c.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = /* @__PURE__ */ Mo(i.flowchart.htmlLabels), m$2 = /* @__PURE__ */ p$1.insert("g").attr("class", "cluster-label "), d = await Rr(m$2, t.label, {
			style: t.labelStyle,
			useHtmlLabels: f,
			isNode: !0,
			width: t.width
		}), g = /* @__PURE__ */ d.getBBox();
		if (Mo(i.flowchart.htmlLabels)) {
			let T = d.children[0], R = /* @__PURE__ */ ia(d);
			g = /* @__PURE__ */ T.getBoundingClientRect(), R.attr("width", g.width), R.attr("height", g.height);
		}
		let y = t.width <= g.width + t.padding ? g.width + t.padding : t.width;
		t.width <= g.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
		let u$1 = t.height, b = t.x - y / 2, S$1 = t.y - u$1 / 2;
		pt.trace("Data ", t, /* @__PURE__ */ JSON.stringify(t));
		let k;
		if (t.look === "handDrawn") {
			let T = /* @__PURE__ */ v.svg(p$1), R = /* @__PURE__ */ S(t, {
				roughness: .7,
				fill: a,
				stroke: h,
				fillWeight: 4,
				seed: e
			}), E = /* @__PURE__ */ T.path(/* @__PURE__ */ st(b, S$1, y, u$1, t.rx), R);
			k = /* @__PURE__ */ p$1.insert(() => (pt.debug("Rough node insert CXC", E), E), ":first-child"), k.select("path:nth-child(2)").attr("style", /* @__PURE__ */ o.join(";")), k.select("path").attr("style", /* @__PURE__ */ n$1.join(";").replace("fill", "stroke"));
		} else k = /* @__PURE__ */ p$1.insert("rect", ":first-child"), k.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S$1).attr("width", y).attr("height", u$1);
		let { subGraphTitleTopMargin: w } = n(i);
		if (m$2.attr("transform", `translate(${t.x - g.width / 2}, ${t.y - t.height / 2 + w})`), s) {
			let T = /* @__PURE__ */ m$2.select("span");
			T && T.attr("style", s);
		}
		let B = /* @__PURE__ */ k.node().getBBox();
		return t.offsetX = 0, t.width = B.width, t.height = B.height, t.offsetY = g.height - t.padding / 2, t.intersect = function(T) {
			return yt(t, T);
		}, {
			cluster: p$1,
			labelBBox: g
		};
	}, "kanbanSection")
}, Ve = /* @__PURE__ */ new Map(), xa = /* @__PURE__ */ m$1(async (c, t) => {
	let r = await br[t.shape || "rect"](c, t);
	return Ve.set(t.id, r), r;
}, "insertCluster");
var ba = /* @__PURE__ */ m$1(() => {
	Ve = /* @__PURE__ */ new Map();
}, "clear");
function Sr(c, t) {
	return c.intersect(t);
}
m$1(Sr, "intersectNode");
var We = Sr;
function wr(c, t, i, r) {
	var e = c.x, a = c.y, h = e - r.x, s = a - r.y, l = /* @__PURE__ */ Math.sqrt(t * t * s * s + i * i * h * h), o = /* @__PURE__ */ Math.abs(t * i * h / l);
	r.x < e && (o = -o);
	var n$1 = /* @__PURE__ */ Math.abs(t * i * s / l);
	return r.y < a && (n$1 = -n$1), {
		x: e + o,
		y: a + n$1
	};
}
m$1(wr, "intersectEllipse");
var qt = wr;
function Nr(c, t, i) {
	return qt(c, t, t, i);
}
m$1(Nr, "intersectCircle");
var Ie = Nr;
function $r(c, t, i, r) {
	{
		let e = t.y - c.y, a = c.x - t.x, h = t.x * c.y - c.x * t.y, s = e * i.x + a * i.y + h, l = e * r.x + a * r.y + h, o = 1e-6;
		if (s !== 0 && l !== 0 && Fe(s, l)) return;
		let n$1 = r.y - i.y, p$1 = i.x - r.x, f = r.x * i.y - i.x * r.y, m$2 = n$1 * c.x + p$1 * c.y + f, d = n$1 * t.x + p$1 * t.y + f;
		if (Math.abs(m$2) < o && Math.abs(d) < o && Fe(m$2, d)) return;
		let g = e * p$1 - n$1 * a;
		if (g === 0) return;
		let y = /* @__PURE__ */ Math.abs(g / 2), u$1 = a * f - p$1 * h, b = u$1 < 0 ? (u$1 - y) / g : (u$1 + y) / g;
		u$1 = n$1 * h - e * f;
		return {
			x: b,
			y: u$1 < 0 ? (u$1 - y) / g : (u$1 + y) / g
		};
	}
}
m$1($r, "intersectLine");
function Fe(c, t) {
	return c * t > 0;
}
m$1(Fe, "sameSign");
var _e = $r;
function Dr(c, t, i) {
	let r = c.x, e = c.y, a = [], h = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
	typeof t.forEach == "function" ? t.forEach(function(n$1) {
		h = /* @__PURE__ */ Math.min(h, n$1.x), s = /* @__PURE__ */ Math.min(s, n$1.y);
	}) : (h = /* @__PURE__ */ Math.min(h, t.x), s = /* @__PURE__ */ Math.min(s, t.y));
	let l = r - c.width / 2 - h, o = e - c.height / 2 - s;
	for (let n$1 = 0; n$1 < t.length; n$1++) {
		let p$1 = t[n$1], f = t[n$1 < t.length - 1 ? n$1 + 1 : 0], m$2 = /* @__PURE__ */ _e(c, i, {
			x: l + p$1.x,
			y: o + p$1.y
		}, {
			x: l + f.x,
			y: o + f.y
		});
		m$2 && a.push(m$2);
	}
	return a.length ? (a.length > 1 && a.sort(function(n$1, p$1) {
		let f = n$1.x - i.x, m$2 = n$1.y - i.y, d = /* @__PURE__ */ Math.sqrt(f * f + m$2 * m$2), g = p$1.x - i.x, y = p$1.y - i.y, u$1 = /* @__PURE__ */ Math.sqrt(g * g + y * y);
		return d < u$1 ? -1 : d === u$1 ? 0 : 1;
	}), a[0]) : c;
}
m$1(Dr, "intersectPolygon");
var N = {
	node: We,
	circle: Ie,
	ellipse: qt,
	polygon: Dr,
	rect: yt
};
function qe(c, t) {
	let { labelStyles: i } = m(t);
	t.labelStyle = i;
	let r = /* @__PURE__ */ P(t), e = r;
	r || (e = "anchor");
	let a = /* @__PURE__ */ c.insert("g").attr("class", e).attr("id", t.domId || t.id), h = 1, { cssStyles: s } = t, l = /* @__PURE__ */ v.svg(a), o = /* @__PURE__ */ S(t, {
		fill: "black",
		stroke: "none",
		fillStyle: "solid"
	});
	t.look !== "handDrawn" && (o.roughness = 0);
	let n$1 = /* @__PURE__ */ l.circle(0, 0, h * 2, o), p$1 = /* @__PURE__ */ a.insert(() => n$1, ":first-child");
	return p$1.attr("class", "anchor").attr("style", /* @__PURE__ */ Vt(s)), D(t, p$1), t.intersect = function(f) {
		return pt.info("Circle intersect", t, h, f), N.circle(t, h, f);
	}, a;
}
m$1(qe, "anchor");
function Xe(c, t, i, r, e, a, h) {
	let l = (c + i) / 2, o = (t + r) / 2, n$1 = /* @__PURE__ */ Math.atan2(r - t, i - c), p$1 = (i - c) / 2, f = (r - t) / 2, m$2 = p$1 / e, d = f / a, g = /* @__PURE__ */ Math.sqrt(m$2 ** 2 + d ** 2);
	if (g > 1) throw new Error("The given radii are too small to create an arc between the points.");
	let y = /* @__PURE__ */ Math.sqrt(1 - g ** 2), u$1 = l + y * a * Math.sin(n$1) * (h ? -1 : 1), b = o - y * e * Math.cos(n$1) * (h ? -1 : 1), S$1 = /* @__PURE__ */ Math.atan2((t - b) / a, (c - u$1) / e), w = Math.atan2((r - b) / a, (i - u$1) / e) - S$1;
	h && w < 0 && (w += 2 * Math.PI), !h && w > 0 && (w -= 2 * Math.PI);
	let B = [];
	for (let T = 0; T < 20; T++) {
		let E = S$1 + T / 19 * w, L = u$1 + e * Math.cos(E), O = b + a * Math.sin(E);
		B.push({
			x: L,
			y: O
		});
	}
	return B;
}
m$1(Xe, "generateArcPoints");
async function Ye(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.width + t.padding + 20, s = a.height + t.padding, l = s / 2, o = l / (2.5 + s / 50), { cssStyles: n$1 } = t, p$1 = [
		{
			x: h / 2,
			y: -s / 2
		},
		{
			x: -h / 2,
			y: -s / 2
		},
		.../* @__PURE__ */ Xe(-h / 2, -s / 2, -h / 2, s / 2, o, l, !1),
		{
			x: h / 2,
			y: s / 2
		},
		.../* @__PURE__ */ Xe(h / 2, s / 2, h / 2, -s / 2, o, l, !0)
	], f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d = /* @__PURE__ */ H(p$1), g = /* @__PURE__ */ f.path(d, m$2), y = /* @__PURE__ */ e.insert(() => g, ":first-child");
	return y.attr("class", "basic label-container"), n$1 && t.look !== "handDrawn" && y.selectAll("path").attr("style", n$1), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(${o / 2}, 0)`), D(t, y), t.intersect = function(u$1) {
		return N.polygon(t, p$1, u$1);
	}, e;
}
m$1(Ye, "bowTieRect");
function rt(c, t, i, r) {
	return c.insert("polygon", ":first-child").attr("points", /* @__PURE__ */ r.map(function(e) {
		return e.x + "," + e.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + i / 2 + ")");
}
m$1(rt, "insertPolygonShape");
async function Ze(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.height + t.padding, s = 12, l = a.width + t.padding + s, o = 0, n$1 = l, p$1 = -h, f = 0, m$2 = [
		{
			x: o + s,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		},
		{
			x: n$1,
			y: f
		},
		{
			x: o,
			y: f
		},
		{
			x: o,
			y: p$1 + s
		},
		{
			x: o + s,
			y: p$1
		}
	], d, { cssStyles: g } = t;
	if (t.look === "handDrawn") {
		let y = /* @__PURE__ */ v.svg(e), u$1 = /* @__PURE__ */ S(t, {}), b = /* @__PURE__ */ H(m$2), S$1 = /* @__PURE__ */ y.path(b, u$1);
		d = /* @__PURE__ */ e.insert(() => S$1, ":first-child").attr("transform", `translate(${-l / 2}, ${h / 2})`), g && d.attr("style", g);
	} else d = /* @__PURE__ */ rt(e, l, h, m$2);
	return r && d.attr("style", r), D(t, d), t.intersect = function(y) {
		return N.polygon(t, m$2, y);
	}, e;
}
m$1(Ze, "card");
function Ue(c, t) {
	let { nodeStyles: i } = m(t);
	t.label = "";
	let r = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: e } = t, a = /* @__PURE__ */ Math.max(28, t.width ?? 0), h = [
		{
			x: 0,
			y: a / 2
		},
		{
			x: a / 2,
			y: 0
		},
		{
			x: 0,
			y: -a / 2
		},
		{
			x: -a / 2,
			y: 0
		}
	], s = /* @__PURE__ */ v.svg(r), l = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
	let o = /* @__PURE__ */ H(h), n$1 = /* @__PURE__ */ s.path(o, l), p$1 = /* @__PURE__ */ r.insert(() => n$1, ":first-child");
	return e && t.look !== "handDrawn" && p$1.selectAll("path").attr("style", e), i && t.look !== "handDrawn" && p$1.selectAll("path").attr("style", i), t.width = 28, t.height = 28, t.intersect = function(f) {
		return N.polygon(t, h, f);
	}, r;
}
m$1(Ue, "choice");
async function Xt(c, t, i) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r;
	let { shapeSvg: a, bbox: h, halfPadding: s } = await C(c, t, /* @__PURE__ */ P(t)), l = i?.padding ?? s, o = h.width / 2 + l, n$1, { cssStyles: p$1 } = t;
	if (t.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(a), m$2 = /* @__PURE__ */ S(t, {}), d = /* @__PURE__ */ f.circle(0, 0, o * 2, m$2);
		n$1 = /* @__PURE__ */ a.insert(() => d, ":first-child"), n$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(p$1));
	} else n$1 = /* @__PURE__ */ a.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", e).attr("r", o).attr("cx", 0).attr("cy", 0);
	return D(t, n$1), t.calcIntersect = function(f, m$2) {
		let d = f.width / 2;
		return N.circle(f, d, m$2);
	}, t.intersect = function(f) {
		return pt.info("Circle intersect", t, o, f), N.circle(t, o, f);
	}, a;
}
m$1(Xt, "circle");
function vr(c) {
	let t = /* @__PURE__ */ Math.cos(Math.PI / 4), i = /* @__PURE__ */ Math.sin(Math.PI / 4), r = c * 2, e = {
		x: r / 2 * t,
		y: r / 2 * i
	}, a = {
		x: -(r / 2) * t,
		y: r / 2 * i
	}, h = {
		x: -(r / 2) * t,
		y: -(r / 2) * i
	}, s = {
		x: r / 2 * t,
		y: -(r / 2) * i
	};
	return `M ${a.x},${a.y} L ${s.x},${s.y}
                   M ${e.x},${e.y} L ${h.x},${h.y}`;
}
m$1(vr, "createLine");
function Qe(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i, t.label = "";
	let e = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), a = /* @__PURE__ */ Math.max(30, t?.width ?? 0), { cssStyles: h } = t, s = /* @__PURE__ */ v.svg(e), l = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
	let o = /* @__PURE__ */ s.circle(0, 0, a * 2, l), n$1 = /* @__PURE__ */ vr(a), p$1 = /* @__PURE__ */ s.path(n$1, l), f = /* @__PURE__ */ e.insert(() => o, ":first-child");
	return f.insert(() => p$1), h && t.look !== "handDrawn" && f.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && f.selectAll("path").attr("style", r), D(t, f), t.intersect = function(m$2) {
		return pt.info("crossedCircle intersect", t, {
			radius: a,
			point: m$2
		}), N.circle(t, a, m$2);
	}, e;
}
m$1(Qe, "crossedCircle");
function xt(c, t, i, r = 100, e = 0, a = 180) {
	let h = [], s = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s + p$1 * n$1, m$2 = c + i * Math.cos(f), d = t + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d
		});
	}
	return h;
}
m$1(xt, "generateCirclePoints");
async function Je(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t, p$1 = [
		.../* @__PURE__ */ xt(s / 2, -l / 2, o, 30, -90, 0),
		{
			x: -s / 2 - o,
			y: o
		},
		.../* @__PURE__ */ xt(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ xt(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s / 2 - o,
			y: -l / 2
		},
		.../* @__PURE__ */ xt(s / 2, l / 2, o, 20, 0, 90)
	], f = [
		{
			x: s / 2,
			y: -l / 2 - o
		},
		{
			x: -s / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ xt(s / 2, -l / 2, o, 20, -90, 0),
		{
			x: -s / 2 - o,
			y: -o
		},
		.../* @__PURE__ */ xt(s / 2 + s * .1, -o, o, 20, -180, -270),
		.../* @__PURE__ */ xt(s / 2 + s * .1, o, o, 20, -90, -180),
		{
			x: -s / 2 - o,
			y: l / 2
		},
		.../* @__PURE__ */ xt(s / 2, l / 2, o, 20, 0, 90),
		{
			x: -s / 2,
			y: l / 2 + o
		},
		{
			x: s / 2,
			y: l / 2 + o
		}
	], m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, { fill: "none" });
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let y = /* @__PURE__ */ H(p$1).replace("Z", ""), u$1 = /* @__PURE__ */ m$2.path(y, d), b = /* @__PURE__ */ H(f), S$1 = /* @__PURE__ */ m$2.path(b, { ...d }), k = /* @__PURE__ */ e.insert("g", ":first-child");
	return k.insert(() => S$1, ":first-child").attr("stroke-opacity", 0), k.insert(() => u$1, ":first-child"), k.attr("class", "text"), n$1 && t.look !== "handDrawn" && k.selectAll("path").attr("style", n$1), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(${o}, 0)`), h.attr("transform", `translate(${-s / 2 + o - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w) {
		return N.polygon(t, f, w);
	}, e;
}
m$1(Je, "curlyBraceLeft");
function bt(c, t, i, r = 100, e = 0, a = 180) {
	let h = [], s = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s + p$1 * n$1, m$2 = c + i * Math.cos(f), d = t + i * Math.sin(f);
		h.push({
			x: m$2,
			y: d
		});
	}
	return h;
}
m$1(bt, "generateCirclePoints");
async function Ke(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t, p$1 = [
		.../* @__PURE__ */ bt(s / 2, -l / 2, o, 20, -90, 0),
		{
			x: s / 2 + o,
			y: -o
		},
		.../* @__PURE__ */ bt(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ bt(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: s / 2 + o,
			y: l / 2
		},
		.../* @__PURE__ */ bt(s / 2, l / 2, o, 20, 0, 90)
	], f = [
		{
			x: -s / 2,
			y: -l / 2 - o
		},
		{
			x: s / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ bt(s / 2, -l / 2, o, 20, -90, 0),
		{
			x: s / 2 + o,
			y: -o
		},
		.../* @__PURE__ */ bt(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ bt(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: s / 2 + o,
			y: l / 2
		},
		.../* @__PURE__ */ bt(s / 2, l / 2, o, 20, 0, 90),
		{
			x: s / 2,
			y: l / 2 + o
		},
		{
			x: -s / 2,
			y: l / 2 + o
		}
	], m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, { fill: "none" });
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let y = /* @__PURE__ */ H(p$1).replace("Z", ""), u$1 = /* @__PURE__ */ m$2.path(y, d), b = /* @__PURE__ */ H(f), S$1 = /* @__PURE__ */ m$2.path(b, { ...d }), k = /* @__PURE__ */ e.insert("g", ":first-child");
	return k.insert(() => S$1, ":first-child").attr("stroke-opacity", 0), k.insert(() => u$1, ":first-child"), k.attr("class", "text"), n$1 && t.look !== "handDrawn" && k.selectAll("path").attr("style", n$1), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(${-o}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w) {
		return N.polygon(t, f, w);
	}, e;
}
m$1(Ke, "curlyBraceRight");
function K(c, t, i, r = 100, e = 0, a = 180) {
	let h = [], s = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s + p$1 * n$1, m$2 = c + i * Math.cos(f), d = t + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d
		});
	}
	return h;
}
m$1(K, "generateCirclePoints");
async function ts(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t, p$1 = [
		.../* @__PURE__ */ K(s / 2, -l / 2, o, 30, -90, 0),
		{
			x: -s / 2 - o,
			y: o
		},
		.../* @__PURE__ */ K(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ K(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s / 2 - o,
			y: -l / 2
		},
		.../* @__PURE__ */ K(s / 2, l / 2, o, 20, 0, 90)
	], f = [
		.../* @__PURE__ */ K(-s / 2 + o + o / 2, -l / 2, o, 20, -90, -180),
		{
			x: s / 2 - o / 2,
			y: o
		},
		.../* @__PURE__ */ K(-s / 2 - o / 2, -o, o, 20, 0, 90),
		.../* @__PURE__ */ K(-s / 2 - o / 2, o, o, 20, -90, 0),
		{
			x: s / 2 - o / 2,
			y: -o
		},
		.../* @__PURE__ */ K(-s / 2 + o + o / 2, l / 2, o, 30, -180, -270)
	], m$2 = [
		{
			x: s / 2,
			y: -l / 2 - o
		},
		{
			x: -s / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ K(s / 2, -l / 2, o, 20, -90, 0),
		{
			x: -s / 2 - o,
			y: -o
		},
		.../* @__PURE__ */ K(s / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ K(s / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s / 2 - o,
			y: l / 2
		},
		.../* @__PURE__ */ K(s / 2, l / 2, o, 20, 0, 90),
		{
			x: -s / 2,
			y: l / 2 + o
		},
		{
			x: s / 2 - o - o / 2,
			y: l / 2 + o
		},
		.../* @__PURE__ */ K(-s / 2 + o + o / 2, -l / 2, o, 20, -90, -180),
		{
			x: s / 2 - o / 2,
			y: o
		},
		.../* @__PURE__ */ K(-s / 2 - o / 2, -o, o, 20, 0, 90),
		.../* @__PURE__ */ K(-s / 2 - o / 2, o, o, 20, -90, 0),
		{
			x: s / 2 - o / 2,
			y: -o
		},
		.../* @__PURE__ */ K(-s / 2 + o + o / 2, l / 2, o, 30, -180, -270)
	], d = /* @__PURE__ */ v.svg(e), g = /* @__PURE__ */ S(t, { fill: "none" });
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let u$1 = /* @__PURE__ */ H(p$1).replace("Z", ""), b = /* @__PURE__ */ d.path(u$1, g), k = /* @__PURE__ */ H(f).replace("Z", ""), w = /* @__PURE__ */ d.path(k, g), B = /* @__PURE__ */ H(m$2), T = /* @__PURE__ */ d.path(B, { ...g }), R = /* @__PURE__ */ e.insert("g", ":first-child");
	return R.insert(() => T, ":first-child").attr("stroke-opacity", 0), R.insert(() => b, ":first-child"), R.insert(() => w, ":first-child"), R.attr("class", "text"), n$1 && t.look !== "handDrawn" && R.selectAll("path").attr("style", n$1), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(${o - o / 4}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, R), t.intersect = function(E) {
		return N.polygon(t, m$2, E);
	}, e;
}
m$1(ts, "curlyBraces");
async function es(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = 80, s = 20, l = /* @__PURE__ */ Math.max(h, (a.width + (t.padding ?? 0) * 2) * 1.25, t?.width ?? 0), o = /* @__PURE__ */ Math.max(s, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n$1 = o / 2, { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d = l, g = o, y = d - n$1, u$1 = g / 4, b = [
		{
			x: y,
			y: 0
		},
		{
			x: u$1,
			y: 0
		},
		{
			x: 0,
			y: g / 2
		},
		{
			x: u$1,
			y: g
		},
		{
			x: y,
			y: g
		},
		.../* @__PURE__ */ Nt(-y, -g / 2, n$1, 50, 270, 90)
	], S$1 = /* @__PURE__ */ H(b), k = /* @__PURE__ */ f.path(S$1, m$2), w = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && w.selectChildren("path").attr("style", p$1), r && t.look !== "handDrawn" && w.selectChildren("path").attr("style", r), w.attr("transform", `translate(${-l / 2}, ${-o / 2})`), D(t, w), t.intersect = function(B) {
		return N.polygon(t, b, B);
	}, e;
}
m$1(es, "curvedTrapezoid");
var Mr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [
	`M${c},${t + a}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`
].join(" "), "createCylinderPathD"), kr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [
	`M${c},${t + a}`,
	`M${c + i},${t + a}`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`
].join(" "), "createOuterCylinderPathD"), Pr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [`M${c - i / 2},${-r / 2}`, `a${e},${a} 0,0,0 ${i},0`].join(" "), "createInnerCylinderPathD");
async function ss(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + t.padding, t.width ?? 0), l = s / 2, o = l / (2.5 + s / 50), n$1 = /* @__PURE__ */ Math.max(a.height + o + t.padding, t.height ?? 0), p$1, { cssStyles: f } = t;
	if (t.look === "handDrawn") {
		let m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ kr(0, 0, s, n$1, l, o), g = /* @__PURE__ */ Pr(0, o, s, n$1, l, o), y = /* @__PURE__ */ m$2.path(d, /* @__PURE__ */ S(t, {})), u$1 = /* @__PURE__ */ m$2.path(g, /* @__PURE__ */ S(t, { fill: "none" }));
		p$1 = /* @__PURE__ */ e.insert(() => u$1, ":first-child"), p$1 = /* @__PURE__ */ e.insert(() => y, ":first-child"), p$1.attr("class", "basic label-container"), f && p$1.attr("style", f);
	} else {
		let m$2 = /* @__PURE__ */ Mr(0, 0, s, n$1, l, o);
		p$1 = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", m$2).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(f)).attr("style", r);
	}
	return p$1.attr("label-offset-y", o), p$1.attr("transform", `translate(${-s / 2}, ${-(n$1 / 2 + o)})`), D(t, p$1), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`), t.intersect = function(m$2) {
		let d = /* @__PURE__ */ N.rect(t, m$2), g = d.x - (t.x ?? 0);
		if (l != 0 && (Math.abs(g) < (t.width ?? 0) / 2 || Math.abs(g) == (t.width ?? 0) / 2 && Math.abs(d.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - o)) {
			let y = o * o * (1 - g * g / (l * l));
			y > 0 && (y = /* @__PURE__ */ Math.sqrt(y)), y = o - y, m$2.y - (t.y ?? 0) > 0 && (y = -y), d.y += y;
		}
		return d;
	}, e;
}
m$1(ss, "cylinder");
async function rs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + t.padding, l = a.height + t.padding, o = l * .2, n$1 = -s / 2, p$1 = -l / 2 - o / 2, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let g = [
		{
			x: n$1,
			y: p$1 + o
		},
		{
			x: -n$1,
			y: p$1 + o
		},
		{
			x: -n$1,
			y: -p$1
		},
		{
			x: n$1,
			y: -p$1
		},
		{
			x: n$1,
			y: p$1
		},
		{
			x: -n$1,
			y: p$1
		},
		{
			x: -n$1,
			y: p$1 + o
		}
	], y = /* @__PURE__ */ m$2.polygon(/* @__PURE__ */ g.map((b) => [b.x, b.y]), d), u$1 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container"), f && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), h.attr("transform", `translate(${n$1 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${p$1 + o + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, u$1), t.intersect = function(b) {
		return N.rect(t, b);
	}, e;
}
m$1(rs, "dividedRectangle");
async function as(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width / 2 + h + 5, o = a.width / 2 + h, n$1, { cssStyles: p$1 } = t;
	if (t.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {
			roughness: .2,
			strokeWidth: 2.5
		}), d = /* @__PURE__ */ S(t, {
			roughness: .2,
			strokeWidth: 1.5
		}), g = /* @__PURE__ */ f.circle(0, 0, l * 2, m$2), y = /* @__PURE__ */ f.circle(0, 0, o * 2, d);
		n$1 = /* @__PURE__ */ e.insert("g", ":first-child"), n$1.attr("class", /* @__PURE__ */ Vt(t.cssClasses)).attr("style", /* @__PURE__ */ Vt(p$1)), n$1.node()?.appendChild(g), n$1.node()?.appendChild(y);
	} else {
		n$1 = /* @__PURE__ */ e.insert("g", ":first-child");
		let f = /* @__PURE__ */ n$1.insert("circle", ":first-child"), m$2 = /* @__PURE__ */ n$1.insert("circle");
		n$1.attr("class", "basic label-container").attr("style", r), f.attr("class", "outer-circle").attr("style", r).attr("r", l).attr("cx", 0).attr("cy", 0), m$2.attr("class", "inner-circle").attr("style", r).attr("r", o).attr("cx", 0).attr("cy", 0);
	}
	return D(t, n$1), t.intersect = function(f) {
		return pt.info("DoubleCircle intersect", t, l, f), N.circle(t, l, f);
	}, e;
}
m$1(as, "doublecircle");
function os(c, t, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.label = "", t.labelStyle = r;
	let a = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), h = 7, { cssStyles: s } = t, l = /* @__PURE__ */ v.svg(a), { nodeBorder: o } = i, n$1 = /* @__PURE__ */ S(t, { fillStyle: "solid" });
	t.look !== "handDrawn" && (n$1.roughness = 0);
	let p$1 = /* @__PURE__ */ l.circle(0, 0, h * 2, n$1), f = /* @__PURE__ */ a.insert(() => p$1, ":first-child");
	return f.selectAll("path").attr("style", `fill: ${o} !important;`), s && s.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), e && t.look !== "handDrawn" && f.selectAll("path").attr("style", e), D(t, f), t.intersect = function(m$2) {
		return pt.info("filledCircle intersect", t, {
			radius: h,
			point: m$2
		}), N.circle(t, h, m$2);
	}, a;
}
m$1(os, "filledCircle");
async function is(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = a.width + (t.padding ?? 0), l = s + a.height, o = s + a.height, n$1 = [
		{
			x: 0,
			y: -l
		},
		{
			x: o,
			y: -l
		},
		{
			x: o / 2,
			y: 0
		}
	], { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d = /* @__PURE__ */ H(n$1), g = /* @__PURE__ */ f.path(d, m$2), y = /* @__PURE__ */ e.insert(() => g, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
	return p$1 && t.look !== "handDrawn" && y.selectChildren("path").attr("style", p$1), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), t.width = s, t.height = l, D(t, y), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`), t.intersect = function(u$1) {
		return pt.info("Triangle intersect", t, n$1, u$1), N.polygon(t, n$1, u$1);
	}, e;
}
m$1(is, "flippedTriangle");
function ns(c, t, { dir: i, config: { state: r, themeVariables: e } }) {
	let { nodeStyles: a } = m(t);
	t.label = "";
	let h = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, l = /* @__PURE__ */ Math.max(70, t?.width ?? 0), o = /* @__PURE__ */ Math.max(10, t?.height ?? 0);
	i === "LR" && (l = /* @__PURE__ */ Math.max(10, t?.width ?? 0), o = /* @__PURE__ */ Math.max(70, t?.height ?? 0));
	let n$1 = -1 * l / 2, p$1 = -1 * o / 2, f = /* @__PURE__ */ v.svg(h), m$2 = /* @__PURE__ */ S(t, {
		stroke: e.lineColor,
		fill: e.lineColor
	});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d = /* @__PURE__ */ f.rectangle(n$1, p$1, l, o, m$2), g = /* @__PURE__ */ h.insert(() => d, ":first-child");
	s && t.look !== "handDrawn" && g.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && g.selectAll("path").attr("style", a), D(t, g);
	let y = r?.padding ?? 0;
	return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(u$1) {
		return N.rect(t, u$1);
	}, h;
}
m$1(ns, "forkJoin");
async function ls(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let e = 80, a = 50, { shapeSvg: h, bbox: s } = await C(c, t, /* @__PURE__ */ P(t)), l = /* @__PURE__ */ Math.max(e, s.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /* @__PURE__ */ Math.max(a, s.height + (t.padding ?? 0) * 2, t?.height ?? 0), n$1 = o / 2, { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(h), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d = [
		{
			x: -l / 2,
			y: -o / 2
		},
		{
			x: l / 2 - n$1,
			y: -o / 2
		},
		.../* @__PURE__ */ Nt(-l / 2 + n$1, 0, n$1, 50, 90, 270),
		{
			x: l / 2 - n$1,
			y: o / 2
		},
		{
			x: -l / 2,
			y: o / 2
		}
	], g = /* @__PURE__ */ H(d), y = /* @__PURE__ */ f.path(g, m$2), u$1 = /* @__PURE__ */ h.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", p$1), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), D(t, u$1), t.intersect = function(b) {
		return pt.info("Pill intersect", t, {
			radius: n$1,
			point: b
		}), N.polygon(t, d, b);
	}, h;
}
m$1(ls, "halfRoundedRectangle");
async function cs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.height + (t.padding ?? 0), s = a.width + (t.padding ?? 0) * 2.5, { cssStyles: l } = t, o = /* @__PURE__ */ v.svg(e), n$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (n$1.roughness = 0, n$1.fillStyle = "solid");
	let p$1 = s / 2, f = p$1 / 6;
	p$1 = p$1 + f;
	let m$2 = h / 2, d = m$2 / 2, g = p$1 - d, y = [
		{
			x: -g,
			y: -m$2
		},
		{
			x: 0,
			y: -m$2
		},
		{
			x: g,
			y: -m$2
		},
		{
			x: p$1,
			y: 0
		},
		{
			x: g,
			y: m$2
		},
		{
			x: 0,
			y: m$2
		},
		{
			x: -g,
			y: m$2
		},
		{
			x: -p$1,
			y: 0
		}
	], u$1 = /* @__PURE__ */ H(y), b = /* @__PURE__ */ o.path(u$1, n$1), S$1 = /* @__PURE__ */ e.insert(() => b, ":first-child");
	return S$1.attr("class", "basic label-container"), l && t.look !== "handDrawn" && S$1.selectChildren("path").attr("style", l), r && t.look !== "handDrawn" && S$1.selectChildren("path").attr("style", r), t.width = s, t.height = h, D(t, S$1), t.intersect = function(k) {
		return N.polygon(t, y, k);
	}, e;
}
m$1(cs, "hexagon");
async function hs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.label = "", t.labelStyle = i;
	let { shapeSvg: e } = await C(c, t, /* @__PURE__ */ P(t)), a = /* @__PURE__ */ Math.max(30, t?.width ?? 0), h = /* @__PURE__ */ Math.max(30, t?.height ?? 0), { cssStyles: s } = t, l = /* @__PURE__ */ v.svg(e), o = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (o.roughness = 0, o.fillStyle = "solid");
	let n$1 = [
		{
			x: 0,
			y: 0
		},
		{
			x: a,
			y: 0
		},
		{
			x: 0,
			y: h
		},
		{
			x: a,
			y: h
		}
	], p$1 = /* @__PURE__ */ H(n$1), f = /* @__PURE__ */ l.path(p$1, o), m$2 = /* @__PURE__ */ e.insert(() => f, ":first-child");
	return m$2.attr("class", "basic label-container"), s && t.look !== "handDrawn" && m$2.selectChildren("path").attr("style", s), r && t.look !== "handDrawn" && m$2.selectChildren("path").attr("style", r), m$2.attr("transform", `translate(${-a / 2}, ${-h / 2})`), D(t, m$2), t.intersect = function(d) {
		return pt.info("Pill intersect", t, { points: n$1 }), N.polygon(t, n$1, d);
	}, e;
}
m$1(hs, "hourglass");
async function ps(c, t, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m(t);
	t.labelStyle = e;
	let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t.width = /* @__PURE__ */ Math.max(s, l ?? 0);
	let { shapeSvg: o, bbox: n$1, label: p$1 } = await C(c, t, "icon-shape default"), f = t.pos === "t", m$2 = s, d = s, { nodeBorder: g } = i, { stylesMap: y } = p(t), u$1 = -d / 2, b = -m$2 / 2, S$1 = t.label ? 8 : 0, k = /* @__PURE__ */ v.svg(o), w = /* @__PURE__ */ S(t, {
		stroke: "none",
		fill: "none"
	});
	t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
	let B = /* @__PURE__ */ k.rectangle(u$1, b, d, m$2, w), T = /* @__PURE__ */ Math.max(d, n$1.width), R = m$2 + n$1.height + S$1, E = /* @__PURE__ */ k.rectangle(-T / 2, -R / 2, T, R, {
		...w,
		fill: "transparent",
		stroke: "none"
	}), L = /* @__PURE__ */ o.insert(() => B, ":first-child"), O = /* @__PURE__ */ o.insert(() => E);
	if (t.icon) {
		let V = /* @__PURE__ */ o.append("g");
		V.html(`<g>${await ve(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let G = /* @__PURE__ */ V.node().getBBox(), j = G.width, W = G.height, A = G.x, I = G.y;
		V.attr("transform", `translate(${-j / 2 - A},${f ? n$1.height / 2 + S$1 / 2 - W / 2 - I : -n$1.height / 2 - S$1 / 2 - W / 2 - I})`), V.attr("style", `color: ${y.get("stroke") ?? g};`);
	}
	return p$1.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${f ? -R / 2 : R / 2 - n$1.height})`), L.attr("transform", `translate(0,${f ? n$1.height / 2 + S$1 / 2 : -n$1.height / 2 - S$1 / 2})`), D(t, O), t.intersect = function(V) {
		if (pt.info("iconSquare intersect", t, V), !t.label) return N.rect(t, V);
		let G = t.x ?? 0, j = t.y ?? 0, W = t.height ?? 0, A = [];
		return f ? A = [
			{
				x: G - n$1.width / 2,
				y: j - W / 2
			},
			{
				x: G + n$1.width / 2,
				y: j - W / 2
			},
			{
				x: G + n$1.width / 2,
				y: j - W / 2 + n$1.height + S$1
			},
			{
				x: G + d / 2,
				y: j - W / 2 + n$1.height + S$1
			},
			{
				x: G + d / 2,
				y: j + W / 2
			},
			{
				x: G - d / 2,
				y: j + W / 2
			},
			{
				x: G - d / 2,
				y: j - W / 2 + n$1.height + S$1
			},
			{
				x: G - n$1.width / 2,
				y: j - W / 2 + n$1.height + S$1
			}
		] : A = [
			{
				x: G - d / 2,
				y: j - W / 2
			},
			{
				x: G + d / 2,
				y: j - W / 2
			},
			{
				x: G + d / 2,
				y: j - W / 2 + m$2
			},
			{
				x: G + n$1.width / 2,
				y: j - W / 2 + m$2
			},
			{
				x: G + n$1.width / 2 / 2,
				y: j + W / 2
			},
			{
				x: G - n$1.width / 2,
				y: j + W / 2
			},
			{
				x: G - n$1.width / 2,
				y: j - W / 2 + m$2
			},
			{
				x: G - d / 2,
				y: j - W / 2 + m$2
			}
		], N.polygon(t, A, V);
	}, o;
}
m$1(ps, "icon");
async function ms(c, t, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m(t);
	t.labelStyle = e;
	let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t.width = /* @__PURE__ */ Math.max(s, l ?? 0);
	let { shapeSvg: o, bbox: n$1, label: p$1 } = await C(c, t, "icon-shape default"), f = 20, m$2 = t.label ? 8 : 0, d = t.pos === "t", { nodeBorder: g, mainBkg: y } = i, { stylesMap: u$1 } = p(t), b = /* @__PURE__ */ v.svg(o), S$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
	S$1.stroke = u$1.get("fill") ?? y;
	let w = /* @__PURE__ */ o.append("g");
	t.icon && w.html(`<g>${await ve(t.icon, {
		height: s,
		width: s,
		fallbackPrefix: ""
	})}</g>`);
	let B = /* @__PURE__ */ w.node().getBBox(), T = B.width, R = B.height, E = B.x, L = B.y, O = Math.max(T, R) * Math.SQRT2 + f * 2, V = /* @__PURE__ */ b.circle(0, 0, O, S$1), G = /* @__PURE__ */ Math.max(O, n$1.width), j = O + n$1.height + m$2, W = /* @__PURE__ */ b.rectangle(-G / 2, -j / 2, G, j, {
		...S$1,
		fill: "transparent",
		stroke: "none"
	}), A = /* @__PURE__ */ o.insert(() => V, ":first-child"), I = /* @__PURE__ */ o.insert(() => W);
	return w.attr("transform", `translate(${-T / 2 - E},${d ? n$1.height / 2 + m$2 / 2 - R / 2 - L : -n$1.height / 2 - m$2 / 2 - R / 2 - L})`), w.attr("style", `color: ${u$1.get("stroke") ?? g};`), p$1.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${d ? -j / 2 : j / 2 - n$1.height})`), A.attr("transform", `translate(0,${d ? n$1.height / 2 + m$2 / 2 : -n$1.height / 2 - m$2 / 2})`), D(t, I), t.intersect = function(F) {
		return pt.info("iconSquare intersect", t, F), N.rect(t, F);
	}, o;
}
m$1(ms, "iconCircle");
async function fs(c, t, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m(t);
	t.labelStyle = e;
	let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t.width = /* @__PURE__ */ Math.max(s, l ?? 0);
	let { shapeSvg: o, bbox: n$1, halfPadding: p$1, label: f } = await C(c, t, "icon-shape default"), m$2 = t.pos === "t", d = s + p$1 * 2, g = s + p$1 * 2, { nodeBorder: y, mainBkg: u$1 } = i, { stylesMap: b } = p(t), S$1 = -g / 2, k = -d / 2, w = t.label ? 8 : 0, B = /* @__PURE__ */ v.svg(o), T = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
	T.stroke = b.get("fill") ?? u$1;
	let E = /* @__PURE__ */ B.path(/* @__PURE__ */ st(S$1, k, g, d, 5), T), L = /* @__PURE__ */ Math.max(g, n$1.width), O = d + n$1.height + w, V = /* @__PURE__ */ B.rectangle(-L / 2, -O / 2, L, O, {
		...T,
		fill: "transparent",
		stroke: "none"
	}), G = /* @__PURE__ */ o.insert(() => E, ":first-child").attr("class", "icon-shape2"), j = /* @__PURE__ */ o.insert(() => V);
	if (t.icon) {
		let W = /* @__PURE__ */ o.append("g");
		W.html(`<g>${await ve(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let A = /* @__PURE__ */ W.node().getBBox(), I = A.width, F = A.height, Q = A.x, it = A.y;
		W.attr("transform", `translate(${-I / 2 - Q},${m$2 ? n$1.height / 2 + w / 2 - F / 2 - it : -n$1.height / 2 - w / 2 - F / 2 - it})`), W.attr("style", `color: ${b.get("stroke") ?? y};`);
	}
	return f.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${m$2 ? -O / 2 : O / 2 - n$1.height})`), G.attr("transform", `translate(0,${m$2 ? n$1.height / 2 + w / 2 : -n$1.height / 2 - w / 2})`), D(t, j), t.intersect = function(W) {
		if (pt.info("iconSquare intersect", t, W), !t.label) return N.rect(t, W);
		let A = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0, Q = [];
		return m$2 ? Q = [
			{
				x: A - n$1.width / 2,
				y: I - F / 2
			},
			{
				x: A + n$1.width / 2,
				y: I - F / 2
			},
			{
				x: A + n$1.width / 2,
				y: I - F / 2 + n$1.height + w
			},
			{
				x: A + g / 2,
				y: I - F / 2 + n$1.height + w
			},
			{
				x: A + g / 2,
				y: I + F / 2
			},
			{
				x: A - g / 2,
				y: I + F / 2
			},
			{
				x: A - g / 2,
				y: I - F / 2 + n$1.height + w
			},
			{
				x: A - n$1.width / 2,
				y: I - F / 2 + n$1.height + w
			}
		] : Q = [
			{
				x: A - g / 2,
				y: I - F / 2
			},
			{
				x: A + g / 2,
				y: I - F / 2
			},
			{
				x: A + g / 2,
				y: I - F / 2 + d
			},
			{
				x: A + n$1.width / 2,
				y: I - F / 2 + d
			},
			{
				x: A + n$1.width / 2 / 2,
				y: I + F / 2
			},
			{
				x: A - n$1.width / 2,
				y: I + F / 2
			},
			{
				x: A - n$1.width / 2,
				y: I - F / 2 + d
			},
			{
				x: A - g / 2,
				y: I - F / 2 + d
			}
		], N.polygon(t, Q, W);
	}, o;
}
m$1(fs, "iconRounded");
async function ds(c, t, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m(t);
	t.labelStyle = e;
	let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t.width = /* @__PURE__ */ Math.max(s, l ?? 0);
	let { shapeSvg: o, bbox: n$1, halfPadding: p$1, label: f } = await C(c, t, "icon-shape default"), m$2 = t.pos === "t", d = s + p$1 * 2, g = s + p$1 * 2, { nodeBorder: y, mainBkg: u$1 } = i, { stylesMap: b } = p(t), S$1 = -g / 2, k = -d / 2, w = t.label ? 8 : 0, B = /* @__PURE__ */ v.svg(o), T = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
	T.stroke = b.get("fill") ?? u$1;
	let E = /* @__PURE__ */ B.path(/* @__PURE__ */ st(S$1, k, g, d, .1), T), L = /* @__PURE__ */ Math.max(g, n$1.width), O = d + n$1.height + w, V = /* @__PURE__ */ B.rectangle(-L / 2, -O / 2, L, O, {
		...T,
		fill: "transparent",
		stroke: "none"
	}), G = /* @__PURE__ */ o.insert(() => E, ":first-child"), j = /* @__PURE__ */ o.insert(() => V);
	if (t.icon) {
		let W = /* @__PURE__ */ o.append("g");
		W.html(`<g>${await ve(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let A = /* @__PURE__ */ W.node().getBBox(), I = A.width, F = A.height, Q = A.x, it = A.y;
		W.attr("transform", `translate(${-I / 2 - Q},${m$2 ? n$1.height / 2 + w / 2 - F / 2 - it : -n$1.height / 2 - w / 2 - F / 2 - it})`), W.attr("style", `color: ${b.get("stroke") ?? y};`);
	}
	return f.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${m$2 ? -O / 2 : O / 2 - n$1.height})`), G.attr("transform", `translate(0,${m$2 ? n$1.height / 2 + w / 2 : -n$1.height / 2 - w / 2})`), D(t, j), t.intersect = function(W) {
		if (pt.info("iconSquare intersect", t, W), !t.label) return N.rect(t, W);
		let A = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0, Q = [];
		return m$2 ? Q = [
			{
				x: A - n$1.width / 2,
				y: I - F / 2
			},
			{
				x: A + n$1.width / 2,
				y: I - F / 2
			},
			{
				x: A + n$1.width / 2,
				y: I - F / 2 + n$1.height + w
			},
			{
				x: A + g / 2,
				y: I - F / 2 + n$1.height + w
			},
			{
				x: A + g / 2,
				y: I + F / 2
			},
			{
				x: A - g / 2,
				y: I + F / 2
			},
			{
				x: A - g / 2,
				y: I - F / 2 + n$1.height + w
			},
			{
				x: A - n$1.width / 2,
				y: I - F / 2 + n$1.height + w
			}
		] : Q = [
			{
				x: A - g / 2,
				y: I - F / 2
			},
			{
				x: A + g / 2,
				y: I - F / 2
			},
			{
				x: A + g / 2,
				y: I - F / 2 + d
			},
			{
				x: A + n$1.width / 2,
				y: I - F / 2 + d
			},
			{
				x: A + n$1.width / 2 / 2,
				y: I + F / 2
			},
			{
				x: A - n$1.width / 2,
				y: I + F / 2
			},
			{
				x: A - n$1.width / 2,
				y: I - F / 2 + d
			},
			{
				x: A - g / 2,
				y: I - F / 2 + d
			}
		], N.polygon(t, Q, W);
	}, o;
}
m$1(ds, "iconSquare");
async function gs(c, t, { config: { flowchart: i } }) {
	let r = new Image();
	r.src = t?.img ?? "", await r.decode();
	let e = /* @__PURE__ */ Number(/* @__PURE__ */ r.naturalWidth.toString().replace("px", "")), a = /* @__PURE__ */ Number(/* @__PURE__ */ r.naturalHeight.toString().replace("px", ""));
	t.imageAspectRatio = e / a;
	let { labelStyles: h } = m(t);
	t.labelStyle = h;
	let s = i?.wrappingWidth;
	t.defaultWidth = i?.wrappingWidth;
	let l = /* @__PURE__ */ Math.max(t.label ? s ?? 0 : 0, t?.assetWidth ?? e), o = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, n$1 = t.constraint === "on" ? o / t.imageAspectRatio : t?.assetHeight ?? a;
	t.width = /* @__PURE__ */ Math.max(o, s ?? 0);
	let { shapeSvg: p$1, bbox: f, label: m$2 } = await C(c, t, "image-shape default"), d = t.pos === "t", g = -o / 2, y = -n$1 / 2, u$1 = t.label ? 8 : 0, b = /* @__PURE__ */ v.svg(p$1), S$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
	let k = /* @__PURE__ */ b.rectangle(g, y, o, n$1, S$1), w = /* @__PURE__ */ Math.max(o, f.width), B = n$1 + f.height + u$1, T = /* @__PURE__ */ b.rectangle(-w / 2, -B / 2, w, B, {
		...S$1,
		fill: "none",
		stroke: "none"
	}), R = /* @__PURE__ */ p$1.insert(() => k, ":first-child"), E = /* @__PURE__ */ p$1.insert(() => T);
	if (t.img) {
		let L = /* @__PURE__ */ p$1.append("image");
		L.attr("href", t.img), L.attr("width", o), L.attr("height", n$1), L.attr("preserveAspectRatio", "none"), L.attr("transform", `translate(${-o / 2},${d ? B / 2 - n$1 : -B / 2})`);
	}
	return m$2.attr("transform", `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${d ? -n$1 / 2 - f.height / 2 - u$1 / 2 : n$1 / 2 - f.height / 2 + u$1 / 2})`), R.attr("transform", `translate(0,${d ? f.height / 2 + u$1 / 2 : -f.height / 2 - u$1 / 2})`), D(t, E), t.intersect = function(L) {
		if (pt.info("iconSquare intersect", t, L), !t.label) return N.rect(t, L);
		let O = t.x ?? 0, V = t.y ?? 0, G = t.height ?? 0, j = [];
		return d ? j = [
			{
				x: O - f.width / 2,
				y: V - G / 2
			},
			{
				x: O + f.width / 2,
				y: V - G / 2
			},
			{
				x: O + f.width / 2,
				y: V - G / 2 + f.height + u$1
			},
			{
				x: O + o / 2,
				y: V - G / 2 + f.height + u$1
			},
			{
				x: O + o / 2,
				y: V + G / 2
			},
			{
				x: O - o / 2,
				y: V + G / 2
			},
			{
				x: O - o / 2,
				y: V - G / 2 + f.height + u$1
			},
			{
				x: O - f.width / 2,
				y: V - G / 2 + f.height + u$1
			}
		] : j = [
			{
				x: O - o / 2,
				y: V - G / 2
			},
			{
				x: O + o / 2,
				y: V - G / 2
			},
			{
				x: O + o / 2,
				y: V - G / 2 + n$1
			},
			{
				x: O + f.width / 2,
				y: V - G / 2 + n$1
			},
			{
				x: O + f.width / 2 / 2,
				y: V + G / 2
			},
			{
				x: O - f.width / 2,
				y: V + G / 2
			},
			{
				x: O - f.width / 2,
				y: V - G / 2 + n$1
			},
			{
				x: O - o / 2,
				y: V - G / 2 + n$1
			}
		], N.polygon(t, j, L);
	}, p$1;
}
m$1(gs, "imageSquare");
async function us(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), s = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = [
		{
			x: 0,
			y: 0
		},
		{
			x: h,
			y: 0
		},
		{
			x: h + 3 * s / 6,
			y: -s
		},
		{
			x: -3 * s / 6,
			y: -s
		}
	], o, { cssStyles: n$1 } = t;
	if (t.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {}), m$2 = /* @__PURE__ */ H(l), d = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s, l);
	return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p$1) {
		return N.polygon(t, l, p$1);
	}, e;
}
m$1(us, "inv_trapezoid");
async function Dt(c, t, i) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r;
	let { shapeSvg: a, bbox: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(h.width + i.labelPaddingX * 2, t?.width || 0), l = /* @__PURE__ */ Math.max(h.height + i.labelPaddingY * 2, t?.height || 0), o = -s / 2, n$1 = -l / 2, p$1, { rx: f, ry: m$2 } = t, { cssStyles: d } = t;
	if (i?.rx && i.ry && (f = i.rx, m$2 = i.ry), t.look === "handDrawn") {
		let g = /* @__PURE__ */ v.svg(a), y = /* @__PURE__ */ S(t, {}), u$1 = f || m$2 ? g.path(/* @__PURE__ */ st(o, n$1, s, l, f || 0), y) : g.rectangle(o, n$1, s, l, y);
		p$1 = /* @__PURE__ */ a.insert(() => u$1, ":first-child"), p$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(d));
	} else p$1 = /* @__PURE__ */ a.insert("rect", ":first-child"), p$1.attr("class", "basic label-container").attr("style", e).attr("rx", /* @__PURE__ */ Vt(f)).attr("ry", /* @__PURE__ */ Vt(m$2)).attr("x", o).attr("y", n$1).attr("width", s).attr("height", l);
	return D(t, p$1), t.calcIntersect = function(g, y) {
		return N.rect(g, y);
	}, t.intersect = function(g) {
		return N.rect(t, g);
	}, a;
}
m$1(Dt, "drawRect");
async function ys(c, t) {
	let { shapeSvg: i, bbox: r, label: e } = await C(c, t, "label"), a = /* @__PURE__ */ i.insert("rect", ":first-child");
	return a.attr("width", .1).attr("height", .1), i.attr("class", "label edgeLabel"), e.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), D(t, a), t.intersect = function(l) {
		return N.rect(t, l);
	}, i;
}
m$1(ys, "labelRect");
async function xs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), s = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), l = [
		{
			x: 0,
			y: 0
		},
		{
			x: h + 3 * s / 6,
			y: 0
		},
		{
			x: h,
			y: -s
		},
		{
			x: -(3 * s) / 6,
			y: -s
		}
	], o, { cssStyles: n$1 } = t;
	if (t.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {}), m$2 = /* @__PURE__ */ H(l), d = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s, l);
	return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p$1) {
		return N.polygon(t, l, p$1);
	}, e;
}
m$1(xs, "lean_left");
async function bs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), s = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), l = [
		{
			x: -3 * s / 6,
			y: 0
		},
		{
			x: h,
			y: 0
		},
		{
			x: h + 3 * s / 6,
			y: -s
		},
		{
			x: 0,
			y: -s
		}
	], o, { cssStyles: n$1 } = t;
	if (t.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {}), m$2 = /* @__PURE__ */ H(l), d = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s, l);
	return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p$1) {
		return N.polygon(t, l, p$1);
	}, e;
}
m$1(bs, "lean_right");
function Ss(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.label = "", t.labelStyle = i;
	let e = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, h = /* @__PURE__ */ Math.max(35, t?.width ?? 0), s = /* @__PURE__ */ Math.max(35, t?.height ?? 0), l = 7, o = [
		{
			x: h,
			y: 0
		},
		{
			x: 0,
			y: s + l / 2
		},
		{
			x: h - 2 * l,
			y: s + l / 2
		},
		{
			x: 0,
			y: 2 * s
		},
		{
			x: h,
			y: s - l / 2
		},
		{
			x: 2 * l,
			y: s - l / 2
		}
	], n$1 = /* @__PURE__ */ v.svg(e), p$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = /* @__PURE__ */ H(o), m$2 = /* @__PURE__ */ n$1.path(f, p$1), d = /* @__PURE__ */ e.insert(() => m$2, ":first-child");
	return a && t.look !== "handDrawn" && d.selectAll("path").attr("style", a), r && t.look !== "handDrawn" && d.selectAll("path").attr("style", r), d.attr("transform", `translate(-${h / 2},${-s})`), D(t, d), t.intersect = function(g) {
		return pt.info("lightningBolt intersect", t, g), N.polygon(t, o, g);
	}, e;
}
m$1(Ss, "lightningBolt");
var Br = /* @__PURE__ */ m$1((c, t, i, r, e, a, h) => [
	`M${c},${t + a}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`,
	`M${c},${t + a + h}`,
	`a${e},${a} 0,0,0 ${i},0`
].join(" "), "createCylinderPathD"), Cr = /* @__PURE__ */ m$1((c, t, i, r, e, a, h) => [
	`M${c},${t + a}`,
	`M${c + i},${t + a}`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`,
	`M${c},${t + a + h}`,
	`a${e},${a} 0,0,0 ${i},0`
].join(" "), "createOuterCylinderPathD"), Tr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [`M${c - i / 2},${-r / 2}`, `a${e},${a} 0,0,0 ${i},0`].join(" "), "createInnerCylinderPathD");
async function ws(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t.width ?? 0), l = s / 2, o = l / (2.5 + s / 50), n$1 = /* @__PURE__ */ Math.max(a.height + o + (t.padding ?? 0), t.height ?? 0), p$1 = n$1 * .1, f, { cssStyles: m$2 } = t;
	if (t.look === "handDrawn") {
		let d = /* @__PURE__ */ v.svg(e), g = /* @__PURE__ */ Cr(0, 0, s, n$1, l, o, p$1), y = /* @__PURE__ */ Tr(0, o, s, n$1, l, o), u$1 = /* @__PURE__ */ S(t, {}), b = /* @__PURE__ */ d.path(g, u$1), S$1 = /* @__PURE__ */ d.path(y, u$1);
		e.insert(() => S$1, ":first-child").attr("class", "line"), f = /* @__PURE__ */ e.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), m$2 && f.attr("style", m$2);
	} else {
		let d = /* @__PURE__ */ Br(0, 0, s, n$1, l, o, p$1);
		f = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", d).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(m$2)).attr("style", r);
	}
	return f.attr("label-offset-y", o), f.attr("transform", `translate(${-s / 2}, ${-(n$1 / 2 + o)})`), D(t, f), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o - (a.y - (a.top ?? 0))})`), t.intersect = function(d) {
		let g = /* @__PURE__ */ N.rect(t, d), y = g.x - (t.x ?? 0);
		if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - o)) {
			let u$1 = o * o * (1 - y * y / (l * l));
			u$1 > 0 && (u$1 = /* @__PURE__ */ Math.sqrt(u$1)), u$1 = o - u$1, d.y - (t.y ?? 0) > 0 && (u$1 = -u$1), g.y += u$1;
		}
		return g;
	}, e;
}
m$1(ws, "linedCylinder");
async function Ns(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n$1 = l + o, { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d = [
		{
			x: -s / 2 - s / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s / 2 - s / 2 * .1,
			y: n$1 / 2
		},
		.../* @__PURE__ */ lt(-s / 2 - s / 2 * .1, n$1 / 2, s / 2 + s / 2 * .1, n$1 / 2, o, .8),
		{
			x: s / 2 + s / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s / 2 - s / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s / 2,
			y: -n$1 / 2
		},
		{
			x: -s / 2,
			y: n$1 / 2 * 1.1
		},
		{
			x: -s / 2,
			y: -n$1 / 2
		}
	], g = /* @__PURE__ */ f.polygon(/* @__PURE__ */ d.map((u$1) => [u$1.x, u$1.y]), m$2), y = /* @__PURE__ */ e.insert(() => g, ":first-child");
	return y.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && y.selectAll("path").attr("style", p$1), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) + s / 2 * .1 / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o / 2 - (a.y - (a.top ?? 0))})`), D(t, y), t.intersect = function(u$1) {
		return N.polygon(t, d, u$1);
	}, e;
}
m$1(Ns, "linedWaveEdgedRect");
async function $s(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = 5, n$1 = -s / 2, p$1 = -l / 2, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, {}), g = [
		{
			x: n$1 - o,
			y: p$1 + o
		},
		{
			x: n$1 - o,
			y: p$1 + l + o
		},
		{
			x: n$1 + s - o,
			y: p$1 + l + o
		},
		{
			x: n$1 + s - o,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 + l - o
		},
		{
			x: n$1 + s + o,
			y: p$1 + l - o
		},
		{
			x: n$1 + s + o,
			y: p$1 - o
		},
		{
			x: n$1 + o,
			y: p$1 - o
		},
		{
			x: n$1 + o,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		},
		{
			x: n$1,
			y: p$1 + o
		}
	], y = [
		{
			x: n$1,
			y: p$1 + o
		},
		{
			x: n$1 + s - o,
			y: p$1 + o
		},
		{
			x: n$1 + s - o,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		}
	];
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let u$1 = /* @__PURE__ */ H(g), b = /* @__PURE__ */ m$2.path(u$1, d), S$1 = /* @__PURE__ */ H(y), k = /* @__PURE__ */ m$2.path(S$1, {
		...d,
		fill: "none"
	}), w = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w.insert(() => b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) - o - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o - (a.y - (a.top ?? 0))})`), D(t, w), t.intersect = function(B) {
		return N.polygon(t, g, B);
	}, e;
}
m$1($s, "multiRect");
async function Ds(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n$1 = l + o, p$1 = -s / 2, f = -n$1 / 2, m$2 = 5, { cssStyles: d } = t, g = /* @__PURE__ */ lt(p$1 - m$2, f + n$1 + m$2, p$1 + s - m$2, f + n$1 + m$2, o, .8), y = g?.[g.length - 1], u$1 = [
		{
			x: p$1 - m$2,
			y: f + m$2
		},
		{
			x: p$1 - m$2,
			y: f + n$1 + m$2
		},
		...g,
		{
			x: p$1 + s - m$2,
			y: y.y - m$2
		},
		{
			x: p$1 + s,
			y: y.y - m$2
		},
		{
			x: p$1 + s,
			y: y.y - 2 * m$2
		},
		{
			x: p$1 + s + m$2,
			y: y.y - 2 * m$2
		},
		{
			x: p$1 + s + m$2,
			y: f - m$2
		},
		{
			x: p$1 + m$2,
			y: f - m$2
		},
		{
			x: p$1 + m$2,
			y: f
		},
		{
			x: p$1,
			y: f
		},
		{
			x: p$1,
			y: f + m$2
		}
	], b = [
		{
			x: p$1,
			y: f + m$2
		},
		{
			x: p$1 + s - m$2,
			y: f + m$2
		},
		{
			x: p$1 + s - m$2,
			y: y.y - m$2
		},
		{
			x: p$1 + s,
			y: y.y - m$2
		},
		{
			x: p$1 + s,
			y: f
		},
		{
			x: p$1,
			y: f
		}
	], S$1 = /* @__PURE__ */ v.svg(e), k = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
	let w = /* @__PURE__ */ H(u$1), B = /* @__PURE__ */ S$1.path(w, k), T = /* @__PURE__ */ H(b), R = /* @__PURE__ */ S$1.path(T, k), E = /* @__PURE__ */ e.insert(() => B, ":first-child");
	return E.insert(() => R), E.attr("class", "basic label-container"), d && t.look !== "handDrawn" && E.selectAll("path").attr("style", d), r && t.look !== "handDrawn" && E.selectAll("path").attr("style", r), E.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-(a.width / 2) - m$2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + m$2 - o / 2 - (a.y - (a.top ?? 0))})`), D(t, E), t.intersect = function(L) {
		return N.polygon(t, u$1, L);
	}, e;
}
m$1(Ds, "multiWaveEdgedRectangle");
async function vs(c, t, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r, t.useHtmlLabels || Ot().flowchart?.htmlLabels !== !1 || (t.centerLabel = !0);
	let { shapeSvg: h, bbox: s, label: l } = await C(c, t, /* @__PURE__ */ P(t)), o = /* @__PURE__ */ Math.max(s.width + (t.padding ?? 0) * 2, t?.width ?? 0), n$1 = /* @__PURE__ */ Math.max(s.height + (t.padding ?? 0) * 2, t?.height ?? 0), p$1 = -o / 2, f = -n$1 / 2, { cssStyles: m$2 } = t, d = /* @__PURE__ */ v.svg(h), g = /* @__PURE__ */ S(t, {
		fill: i.noteBkgColor,
		stroke: i.noteBorderColor
	});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let y = /* @__PURE__ */ d.rectangle(p$1, f, o, n$1, g), u$1 = /* @__PURE__ */ h.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container"), m$2 && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", m$2), e && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", e), l.attr("transform", `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) - (s.y - (s.top ?? 0))})`), D(t, u$1), t.intersect = function(b) {
		return N.rect(t, b);
	}, h;
}
m$1(vs, "note");
var Rr$1 = /* @__PURE__ */ m$1((c, t, i) => [
	`M${c + i / 2},${t}`,
	`L${c + i},${t - i / 2}`,
	`L${c + i / 2},${t - i}`,
	`L${c},${t - i / 2}`,
	"Z"
].join(" "), "createDecisionBoxPathD");
async function Ms(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width + t.padding + (a.height + t.padding), o = .5, n$1 = [
		{
			x: l / 2,
			y: 0
		},
		{
			x: l,
			y: -l / 2
		},
		{
			x: l / 2,
			y: -l
		},
		{
			x: 0,
			y: -l / 2
		}
	], p$1, { cssStyles: f } = t;
	if (t.look === "handDrawn") {
		let m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, {}), g = /* @__PURE__ */ Rr$1(0, 0, l), y = /* @__PURE__ */ m$2.path(g, d);
		p$1 = /* @__PURE__ */ e.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + o}, ${l / 2})`), f && p$1.attr("style", f);
	} else p$1 = /* @__PURE__ */ rt(e, l, l, n$1), p$1.attr("transform", `translate(${-l / 2 + o}, ${l / 2})`);
	return r && p$1.attr("style", r), D(t, p$1), t.calcIntersect = function(m$2, d) {
		let g = m$2.width, y = [
			{
				x: g / 2,
				y: 0
			},
			{
				x: g,
				y: -g / 2
			},
			{
				x: g / 2,
				y: -g
			},
			{
				x: 0,
				y: -g / 2
			}
		], u$1 = /* @__PURE__ */ N.polygon(m$2, y, d);
		return {
			x: u$1.x - .5,
			y: u$1.y - .5
		};
	}, t.intersect = function(m$2) {
		return this.calcIntersect(t, m$2);
	}, e;
}
m$1(Ms, "question");
async function ks(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), o = -s / 2, n$1 = -l / 2, p$1 = n$1 / 2, f = [
		{
			x: o + p$1,
			y: n$1
		},
		{
			x: o,
			y: 0
		},
		{
			x: o + p$1,
			y: -n$1
		},
		{
			x: -o,
			y: -n$1
		},
		{
			x: -o,
			y: n$1
		}
	], { cssStyles: m$2 } = t, d = /* @__PURE__ */ v.svg(e), g = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let y = /* @__PURE__ */ H(f), u$1 = /* @__PURE__ */ d.path(y, g), b = /* @__PURE__ */ e.insert(() => u$1, ":first-child");
	return b.attr("class", "basic label-container"), m$2 && t.look !== "handDrawn" && b.selectAll("path").attr("style", m$2), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), b.attr("transform", `translate(${-p$1 / 2},0)`), h.attr("transform", `translate(${-p$1 / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), D(t, b), t.intersect = function(S$1) {
		return N.polygon(t, f, S$1);
	}, e;
}
m$1(ks, "rect_left_inv_arrow");
async function Ps(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let e;
	t.cssClasses ? e = "node " + t.cssClasses : e = "node default";
	let a = /* @__PURE__ */ c.insert("g").attr("class", e).attr("id", t.domId || t.id), h = /* @__PURE__ */ a.insert("g"), s = /* @__PURE__ */ a.insert("g").attr("class", "label").attr("style", r), l = t.description, o = t.label, n$1 = /* @__PURE__ */ s.node().appendChild(await Rt(o, t.labelStyle, !0, !0)), p$1 = {
		width: 0,
		height: 0
	};
	if (Mo(mr()?.flowchart?.htmlLabels)) {
		let R = n$1.children[0], E = /* @__PURE__ */ ia(n$1);
		p$1 = /* @__PURE__ */ R.getBoundingClientRect(), E.attr("width", p$1.width), E.attr("height", p$1.height);
	}
	pt.info("Text 2", l);
	let f = l || [], m$2 = /* @__PURE__ */ n$1.getBBox(), d = /* @__PURE__ */ s.node().appendChild(await Rt(f.join ? f.join("<br/>") : f, t.labelStyle, !0, !0)), g = d.children[0], y = /* @__PURE__ */ ia(d);
	p$1 = /* @__PURE__ */ g.getBoundingClientRect(), y.attr("width", p$1.width), y.attr("height", p$1.height);
	let u$1 = (t.padding || 0) / 2;
	ia(d).attr("transform", "translate( " + (p$1.width > m$2.width ? 0 : (m$2.width - p$1.width) / 2) + ", " + (m$2.height + u$1 + 5) + ")"), ia(n$1).attr("transform", "translate( " + (p$1.width < m$2.width ? 0 : -(m$2.width - p$1.width) / 2) + ", 0)"), p$1 = /* @__PURE__ */ s.node().getBBox(), s.attr("transform", "translate(" + -p$1.width / 2 + ", " + (-p$1.height / 2 - u$1 + 3) + ")");
	let b = p$1.width + (t.padding || 0), S$1 = p$1.height + (t.padding || 0), k = -p$1.width / 2 - u$1, w = -p$1.height / 2 - u$1, B, T;
	if (t.look === "handDrawn") {
		let R = /* @__PURE__ */ v.svg(a), E = /* @__PURE__ */ S(t, {}), L = /* @__PURE__ */ R.path(/* @__PURE__ */ st(k, w, b, S$1, t.rx || 0), E), O = /* @__PURE__ */ R.line(-p$1.width / 2 - u$1, -p$1.height / 2 - u$1 + m$2.height + u$1, p$1.width / 2 + u$1, -p$1.height / 2 - u$1 + m$2.height + u$1, E);
		T = /* @__PURE__ */ a.insert(() => (pt.debug("Rough node insert CXC", L), O), ":first-child"), B = /* @__PURE__ */ a.insert(() => (pt.debug("Rough node insert CXC", L), L), ":first-child");
	} else B = /* @__PURE__ */ h.insert("rect", ":first-child"), T = /* @__PURE__ */ h.insert("line"), B.attr("class", "outer title-state").attr("style", r).attr("x", -p$1.width / 2 - u$1).attr("y", -p$1.height / 2 - u$1).attr("width", p$1.width + (t.padding || 0)).attr("height", p$1.height + (t.padding || 0)), T.attr("class", "divider").attr("x1", -p$1.width / 2 - u$1).attr("x2", p$1.width / 2 + u$1).attr("y1", -p$1.height / 2 - u$1 + m$2.height + u$1).attr("y2", -p$1.height / 2 - u$1 + m$2.height + u$1);
	return D(t, B), t.intersect = function(R) {
		return N.rect(t, R);
	}, a;
}
m$1(Ps, "rectWithTitle");
function Yt$1(c, t, i, r, e, a, h) {
	let l = (c + i) / 2, o = (t + r) / 2, n$1 = /* @__PURE__ */ Math.atan2(r - t, i - c), p$1 = (i - c) / 2, f = (r - t) / 2, m$2 = p$1 / e, d = f / a, g = /* @__PURE__ */ Math.sqrt(m$2 ** 2 + d ** 2);
	if (g > 1) throw new Error("The given radii are too small to create an arc between the points.");
	let y = /* @__PURE__ */ Math.sqrt(1 - g ** 2), u$1 = l + y * a * Math.sin(n$1) * (h ? -1 : 1), b = o - y * e * Math.cos(n$1) * (h ? -1 : 1), S$1 = /* @__PURE__ */ Math.atan2((t - b) / a, (c - u$1) / e), w = Math.atan2((r - b) / a, (i - u$1) / e) - S$1;
	h && w < 0 && (w += 2 * Math.PI), !h && w > 0 && (w -= 2 * Math.PI);
	let B = [];
	for (let T = 0; T < 20; T++) {
		let E = S$1 + T / 19 * w, L = u$1 + e * Math.cos(E), O = b + a * Math.sin(E);
		B.push({
			x: L,
			y: O
		});
	}
	return B;
}
m$1(Yt$1, "generateArcPoints");
async function Bs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = t?.padding ?? 0, s = t?.padding ?? 0, l = (t?.width ? t?.width : a.width) + h * 2, o = (t?.height ? t?.height : a.height) + s * 2, n$1 = t.radius || 5, p$1 = t.taper || 5, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, {});
	t.stroke && (d.stroke = t.stroke), t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let g = [
		{
			x: -l / 2 + p$1,
			y: -o / 2
		},
		{
			x: l / 2 - p$1,
			y: -o / 2
		},
		.../* @__PURE__ */ Yt$1(l / 2 - p$1, -o / 2, l / 2, -o / 2 + p$1, n$1, n$1, !0),
		{
			x: l / 2,
			y: -o / 2 + p$1
		},
		{
			x: l / 2,
			y: o / 2 - p$1
		},
		.../* @__PURE__ */ Yt$1(l / 2, o / 2 - p$1, l / 2 - p$1, o / 2, n$1, n$1, !0),
		{
			x: l / 2 - p$1,
			y: o / 2
		},
		{
			x: -l / 2 + p$1,
			y: o / 2
		},
		.../* @__PURE__ */ Yt$1(-l / 2 + p$1, o / 2, -l / 2, o / 2 - p$1, n$1, n$1, !0),
		{
			x: -l / 2,
			y: o / 2 - p$1
		},
		{
			x: -l / 2,
			y: -o / 2 + p$1
		},
		.../* @__PURE__ */ Yt$1(-l / 2, -o / 2 + p$1, -l / 2 + p$1, -o / 2, n$1, n$1, !0)
	], y = /* @__PURE__ */ H(g), u$1 = /* @__PURE__ */ m$2.path(y, d), b = /* @__PURE__ */ e.insert(() => u$1, ":first-child");
	return b.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && b.selectChildren("path").attr("style", r), D(t, b), t.intersect = function(S$1) {
		return N.polygon(t, g, S$1);
	}, e;
}
m$1(Bs, "roundedRect");
async function Cs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = t?.padding ?? 0, l = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n$1 = -a.width / 2 - s, p$1 = -a.height / 2 - s, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let g = [
		{
			x: n$1,
			y: p$1
		},
		{
			x: n$1 + l + 8,
			y: p$1
		},
		{
			x: n$1 + l + 8,
			y: p$1 + o
		},
		{
			x: n$1 - 8,
			y: p$1 + o
		},
		{
			x: n$1 - 8,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		},
		{
			x: n$1,
			y: p$1 + o
		}
	], y = /* @__PURE__ */ m$2.polygon(/* @__PURE__ */ g.map((b) => [b.x, b.y]), d), u$1 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(f)), r && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), f && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), h.attr("transform", `translate(${-l / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-o / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), D(t, u$1), t.intersect = function(b) {
		return N.rect(t, b);
	}, e;
}
m$1(Cs, "shadedProcess");
async function Ts(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = -s / 2, n$1 = -l / 2, { cssStyles: p$1 } = t, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d = [
		{
			x: o,
			y: n$1
		},
		{
			x: o,
			y: n$1 + l
		},
		{
			x: o + s,
			y: n$1 + l
		},
		{
			x: o + s,
			y: n$1 - l / 2
		}
	], g = /* @__PURE__ */ H(d), y = /* @__PURE__ */ f.path(g, m$2), u$1 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$1.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", p$1), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), u$1.attr("transform", `translate(0, ${l / 4})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), D(t, u$1), t.intersect = function(b) {
		return N.polygon(t, d, b);
	}, e;
}
m$1(Ts, "slopedRect");
async function Rs(c, t) {
	return Dt(c, t, {
		rx: 0,
		ry: 0,
		classes: "",
		labelPaddingX: t.labelPaddingX ?? (t?.padding || 0) * 2,
		labelPaddingY: (t?.padding || 0) * 1
	});
}
m$1(Rs, "squareRect");
async function Gs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.height + t.padding, s = a.width + h / 4 + t.padding, l = h / 2, { cssStyles: o } = t, n$1 = /* @__PURE__ */ v.svg(e), p$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = [
		{
			x: -s / 2 + l,
			y: -h / 2
		},
		{
			x: s / 2 - l,
			y: -h / 2
		},
		.../* @__PURE__ */ Nt(-s / 2 + l, 0, l, 50, 90, 270),
		{
			x: s / 2 - l,
			y: h / 2
		},
		.../* @__PURE__ */ Nt(s / 2 - l, 0, l, 50, 270, 450)
	], m$2 = /* @__PURE__ */ H(f), d = /* @__PURE__ */ n$1.path(m$2, p$1), g = /* @__PURE__ */ e.insert(() => d, ":first-child");
	return g.attr("class", "basic label-container outer-path"), o && t.look !== "handDrawn" && g.selectChildren("path").attr("style", o), r && t.look !== "handDrawn" && g.selectChildren("path").attr("style", r), D(t, g), t.intersect = function(y) {
		return N.polygon(t, f, y);
	}, e;
}
m$1(Gs, "stadium");
async function Es(c, t) {
	return Dt(c, t, {
		rx: 5,
		ry: 5,
		classes: "flowchart-node"
	});
}
m$1(Es, "state");
function js(c, t, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r;
	let { cssStyles: a } = t, { lineColor: h, stateBorder: s, nodeBorder: l } = i, o = /* @__PURE__ */ c.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n$1 = /* @__PURE__ */ v.svg(o), p$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = /* @__PURE__ */ n$1.circle(0, 0, 14, {
		...p$1,
		stroke: h,
		strokeWidth: 2
	}), m$2 = s ?? l, d = /* @__PURE__ */ n$1.circle(0, 0, 5, {
		...p$1,
		fill: m$2,
		stroke: m$2,
		strokeWidth: 2,
		fillStyle: "solid"
	}), g = /* @__PURE__ */ o.insert(() => f, ":first-child");
	return g.insert(() => d), a && g.selectAll("path").attr("style", a), e && g.selectAll("path").attr("style", e), D(t, g), t.intersect = function(y) {
		return N.circle(t, 7, y);
	}, o;
}
m$1(js, "stateEnd");
function As(c, t, { config: { themeVariables: i } }) {
	let { lineColor: r } = i, e = /* @__PURE__ */ c.insert("g").attr("class", "node default").attr("id", t.domId || t.id), a;
	if (t.look === "handDrawn") {
		let s = /* @__PURE__ */ v.svg(e).circle(0, 0, 14, /* @__PURE__ */ u(r));
		a = /* @__PURE__ */ e.insert(() => s), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
	} else a = /* @__PURE__ */ e.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
	return D(t, a), t.intersect = function(h) {
		return N.circle(t, 7, h);
	}, e;
}
m$1(As, "stateStart");
async function Os(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = (t?.padding || 0) / 2, s = a.width + t.padding, l = a.height + t.padding, o = -a.width / 2 - h, n$1 = -a.height / 2 - h, p$1 = [
		{
			x: 0,
			y: 0
		},
		{
			x: s,
			y: 0
		},
		{
			x: s,
			y: -l
		},
		{
			x: 0,
			y: -l
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: s + 8,
			y: 0
		},
		{
			x: s + 8,
			y: -l
		},
		{
			x: -8,
			y: -l
		},
		{
			x: -8,
			y: 0
		}
	];
	if (t.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S(t, {}), d = /* @__PURE__ */ f.rectangle(o - 8, n$1, s + 16, l, m$2), g = /* @__PURE__ */ f.line(o, n$1, o, n$1 + l, m$2), y = /* @__PURE__ */ f.line(o + s, n$1, o + s, n$1 + l, m$2);
		e.insert(() => g, ":first-child"), e.insert(() => y, ":first-child");
		let u$1 = /* @__PURE__ */ e.insert(() => d, ":first-child"), { cssStyles: b } = t;
		u$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(b)), D(t, u$1);
	} else {
		let f = /* @__PURE__ */ rt(e, s, l, p$1);
		r && f.attr("style", r), D(t, f);
	}
	return t.intersect = function(f) {
		return N.polygon(t, p$1, f);
	}, e;
}
m$1(Os, "subroutine");
async function Ls(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), s = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = -h / 2, o = -s / 2, n$1 = .2 * s, p$1 = .2 * s, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, {}), g = [
		{
			x: l - n$1 / 2,
			y: o
		},
		{
			x: l + h + n$1 / 2,
			y: o
		},
		{
			x: l + h + n$1 / 2,
			y: o + s
		},
		{
			x: l - n$1 / 2,
			y: o + s
		}
	], y = [
		{
			x: l + h - n$1 / 2,
			y: o + s
		},
		{
			x: l + h + n$1 / 2,
			y: o + s
		},
		{
			x: l + h + n$1 / 2,
			y: o + s - p$1
		}
	];
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let u$1 = /* @__PURE__ */ H(g), b = /* @__PURE__ */ m$2.path(u$1, d), S$1 = /* @__PURE__ */ H(y), k = /* @__PURE__ */ m$2.path(S$1, {
		...d,
		fillStyle: "solid"
	}), w = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w.insert(() => b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), D(t, w), t.intersect = function(B) {
		return N.polygon(t, g, B);
	}, e;
}
m$1(Ls, "taggedRect");
async function Hs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n$1 = .2 * s, p$1 = .2 * l, f = l + o, { cssStyles: m$2 } = t, d = /* @__PURE__ */ v.svg(e), g = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let y = [
		{
			x: -s / 2 - s / 2 * .1,
			y: f / 2
		},
		.../* @__PURE__ */ lt(-s / 2 - s / 2 * .1, f / 2, s / 2 + s / 2 * .1, f / 2, o, .8),
		{
			x: s / 2 + s / 2 * .1,
			y: -f / 2
		},
		{
			x: -s / 2 - s / 2 * .1,
			y: -f / 2
		}
	], u$1 = -s / 2 + s / 2 * .1, b = -f / 2 - p$1 * .4, S$1 = [
		{
			x: u$1 + s - n$1,
			y: (b + l) * 1.4
		},
		{
			x: u$1 + s,
			y: b + l - p$1
		},
		{
			x: u$1 + s,
			y: (b + l) * .9
		},
		.../* @__PURE__ */ lt(u$1 + s, (b + l) * 1.3, u$1 + s - n$1, (b + l) * 1.5, -l * .03, .5)
	], k = /* @__PURE__ */ H(y), w = /* @__PURE__ */ d.path(k, g), B = /* @__PURE__ */ H(S$1), T = /* @__PURE__ */ d.path(B, {
		...g,
		fillStyle: "solid"
	}), R = /* @__PURE__ */ e.insert(() => T, ":first-child");
	return R.insert(() => w, ":first-child"), R.attr("class", "basic label-container"), m$2 && t.look !== "handDrawn" && R.selectAll("path").attr("style", m$2), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o / 2 - (a.y - (a.top ?? 0))})`), D(t, R), t.intersect = function(E) {
		return N.polygon(t, y, E);
	}, e;
}
m$1(Hs, "taggedWaveEdgedRectangle");
async function Vs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(a.width + t.padding, t?.width || 0), s = /* @__PURE__ */ Math.max(a.height + t.padding, t?.height || 0), l = -h / 2, o = -s / 2, n$1 = /* @__PURE__ */ e.insert("rect", ":first-child");
	return n$1.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", o).attr("width", h).attr("height", s), D(t, n$1), t.intersect = function(p$1) {
		return N.rect(t, p$1);
	}, e;
}
m$1(Vs, "text");
var Gr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => `M${c},${t}
    a${e},${a} 0,0,1 0,${-r}
    l${i},0
    a${e},${a} 0,0,1 0,${r}
    M${i},${-r}
    a${e},${a} 0,0,0 0,${r}
    l${-i},0`, "createCylinderPathD"), Er = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [
	`M${c},${t}`,
	`M${c + i},${t}`,
	`a${e},${a} 0,0,0 0,${-r}`,
	`l${-i},0`,
	`a${e},${a} 0,0,0 0,${r}`,
	`l${i},0`
].join(" "), "createOuterCylinderPathD"), jr = /* @__PURE__ */ m$1((c, t, i, r, e, a) => [`M${c + i / 2},${-r / 2}`, `a${e},${a} 0,0,0 0,${r}`].join(" "), "createInnerCylinderPathD");
async function Ws(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h, halfPadding: s } = await C(c, t, /* @__PURE__ */ P(t)), l = t.look === "neo" ? s * 2 : s, o = a.height + l, n$1 = o / 2, p$1 = n$1 / (2.5 + o / 50), f = a.width + p$1 + l, { cssStyles: m$2 } = t, d;
	if (t.look === "handDrawn") {
		let g = /* @__PURE__ */ v.svg(e), y = /* @__PURE__ */ Er(0, 0, f, o, p$1, n$1), u$1 = /* @__PURE__ */ jr(0, 0, f, o, p$1, n$1), b = /* @__PURE__ */ g.path(y, /* @__PURE__ */ S(t, {})), S$1 = /* @__PURE__ */ g.path(u$1, /* @__PURE__ */ S(t, { fill: "none" }));
		d = /* @__PURE__ */ e.insert(() => S$1, ":first-child"), d = /* @__PURE__ */ e.insert(() => b, ":first-child"), d.attr("class", "basic label-container"), m$2 && d.attr("style", m$2);
	} else {
		let g = /* @__PURE__ */ Gr(0, 0, f, o, p$1, n$1);
		d = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(m$2)).attr("style", r), d.attr("class", "basic label-container"), m$2 && d.selectAll("path").attr("style", m$2), r && d.selectAll("path").attr("style", r);
	}
	return d.attr("label-offset-x", p$1), d.attr("transform", `translate(${-f / 2}, ${o / 2} )`), h.attr("transform", `translate(${-(a.width / 2) - p$1 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), D(t, d), t.intersect = function(g) {
		let y = /* @__PURE__ */ N.rect(t, g), u$1 = y.y - (t.y ?? 0);
		if (n$1 != 0 && (Math.abs(u$1) < (t.height ?? 0) / 2 || Math.abs(u$1) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - p$1)) {
			let b = p$1 * p$1 * (1 - u$1 * u$1 / (n$1 * n$1));
			b != 0 && (b = /* @__PURE__ */ Math.sqrt(/* @__PURE__ */ Math.abs(b))), b = p$1 - b, g.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
		}
		return y;
	}, e;
}
m$1(Ws, "tiltedCylinder");
async function Is(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = a.width + t.padding, s = a.height + t.padding, l = [
		{
			x: -3 * s / 6,
			y: 0
		},
		{
			x: h + 3 * s / 6,
			y: 0
		},
		{
			x: h,
			y: -s
		},
		{
			x: 0,
			y: -s
		}
	], o, { cssStyles: n$1 } = t;
	if (t.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {}), m$2 = /* @__PURE__ */ H(l), d = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s, l);
	return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p$1) {
		return N.polygon(t, l, p$1);
	}, e;
}
m$1(Is, "trapezoid");
async function Fs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = 60, s = 20, l = /* @__PURE__ */ Math.max(h, a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /* @__PURE__ */ Math.max(s, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), { cssStyles: n$1 } = t, p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
	let m$2 = [
		{
			x: -l / 2 * .8,
			y: -o / 2
		},
		{
			x: l / 2 * .8,
			y: -o / 2
		},
		{
			x: l / 2,
			y: -o / 2 * .6
		},
		{
			x: l / 2,
			y: o / 2
		},
		{
			x: -l / 2,
			y: o / 2
		},
		{
			x: -l / 2,
			y: -o / 2 * .6
		}
	], d = /* @__PURE__ */ H(m$2), g = /* @__PURE__ */ p$1.path(d, f), y = /* @__PURE__ */ e.insert(() => g, ":first-child");
	return y.attr("class", "basic label-container"), n$1 && t.look !== "handDrawn" && y.selectChildren("path").attr("style", n$1), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), D(t, y), t.intersect = function(u$1) {
		return N.polygon(t, m$2, u$1);
	}, e;
}
m$1(Fs, "trapezoidalPentagon");
async function _s(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Mo(mr().flowchart?.htmlLabels), l = a.width + (t.padding ?? 0), o = l + a.height, n$1 = l + a.height, p$1 = [
		{
			x: 0,
			y: 0
		},
		{
			x: n$1,
			y: 0
		},
		{
			x: n$1 / 2,
			y: -o
		}
	], { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let g = /* @__PURE__ */ H(p$1), y = /* @__PURE__ */ m$2.path(g, d), u$1 = /* @__PURE__ */ e.insert(() => y, ":first-child").attr("transform", `translate(${-o / 2}, ${o / 2})`);
	return f && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), t.width = l, t.height = o, D(t, u$1), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${o / 2 - (a.height + (t.padding ?? 0) / (s ? 2 : 1) - (a.y - (a.top ?? 0)))})`), t.intersect = function(b) {
		return pt.info("Triangle intersect", t, p$1, b), N.polygon(t, p$1, b);
	}, e;
}
m$1(_s, "triangle");
async function zs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 8, n$1 = l + o, { cssStyles: p$1 } = t, m$2 = 70 - s, d = m$2 > 0 ? m$2 / 2 : 0, g = /* @__PURE__ */ v.svg(e), y = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let u$1 = [
		{
			x: -s / 2 - d,
			y: n$1 / 2
		},
		.../* @__PURE__ */ lt(-s / 2 - d, n$1 / 2, s / 2 + d, n$1 / 2, o, .8),
		{
			x: s / 2 + d,
			y: -n$1 / 2
		},
		{
			x: -s / 2 - d,
			y: -n$1 / 2
		}
	], b = /* @__PURE__ */ H(u$1), S$1 = /* @__PURE__ */ g.path(b, y), k = /* @__PURE__ */ e.insert(() => S$1, ":first-child");
	return k.attr("class", "basic label-container"), p$1 && t.look !== "handDrawn" && k.selectAll("path").attr("style", p$1), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w) {
		return N.polygon(t, u$1, w);
	}, e;
}
m$1(zs, "waveEdgedRectangle");
async function qs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c, t, /* @__PURE__ */ P(t)), h = 100, s = 50, l = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n$1 = l / o, p$1 = l, f = o;
	p$1 > f * n$1 ? f = p$1 / n$1 : p$1 = f * n$1, p$1 = /* @__PURE__ */ Math.max(p$1, h), f = /* @__PURE__ */ Math.max(f, s);
	let m$2 = /* @__PURE__ */ Math.min(f * .2, f / 4), d = f + m$2 * 2, { cssStyles: g } = t, y = /* @__PURE__ */ v.svg(e), u$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (u$1.roughness = 0, u$1.fillStyle = "solid");
	let b = [
		{
			x: -p$1 / 2,
			y: d / 2
		},
		.../* @__PURE__ */ lt(-p$1 / 2, d / 2, p$1 / 2, d / 2, m$2, 1),
		{
			x: p$1 / 2,
			y: -d / 2
		},
		.../* @__PURE__ */ lt(p$1 / 2, -d / 2, -p$1 / 2, -d / 2, m$2, -1)
	], S$1 = /* @__PURE__ */ H(b), k = /* @__PURE__ */ y.path(S$1, u$1), w = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w.attr("class", "basic label-container"), g && t.look !== "handDrawn" && w.selectAll("path").attr("style", g), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), D(t, w), t.intersect = function(B) {
		return N.polygon(t, b, B);
	}, e;
}
m$1(qs, "waveRectangle");
async function Xs(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /* @__PURE__ */ P(t)), s = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = 5, n$1 = -s / 2, p$1 = -l / 2, { cssStyles: f } = t, m$2 = /* @__PURE__ */ v.svg(e), d = /* @__PURE__ */ S(t, {}), g = [
		{
			x: n$1 - o,
			y: p$1 - o
		},
		{
			x: n$1 - o,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 + l
		},
		{
			x: n$1 + s,
			y: p$1 - o
		}
	], y = `M${n$1 - o},${p$1 - o} L${n$1 + s},${p$1 - o} L${n$1 + s},${p$1 + l} L${n$1 - o},${p$1 + l} L${n$1 - o},${p$1 - o}
                M${n$1 - o},${p$1} L${n$1 + s},${p$1}
                M${n$1},${p$1 - o} L${n$1},${p$1 + l}`;
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let u$1 = /* @__PURE__ */ m$2.path(y, d), b = /* @__PURE__ */ e.insert(() => u$1, ":first-child");
	return b.attr("transform", `translate(${o / 2}, ${o / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) + o / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o / 2 - (a.y - (a.top ?? 0))})`), D(t, b), t.intersect = function(S$1) {
		return N.polygon(t, g, S$1);
	}, e;
}
m$1(Xs, "windowPane");
async function ye(c, t) {
	let i = t;
	if (i.alias && (t.label = i.alias), t.look === "handDrawn") {
		let { themeVariables: Y } = Ot(), { background: J } = Y;
		await ye(c, {
			...t,
			id: t.id + "-background",
			look: "default",
			cssStyles: ["stroke: none", `fill: ${J}`]
		});
	}
	let r = /* @__PURE__ */ Ot();
	t.useHtmlLabels = r.htmlLabels;
	let e = r.er?.diagramPadding ?? 10, a = r.er?.entityPadding ?? 6, { cssStyles: h } = t, { labelStyles: s, nodeStyles: l } = m(t);
	if (i.attributes.length === 0 && t.label) {
		let Y = {
			rx: 0,
			ry: 0,
			labelPaddingX: e,
			labelPaddingY: e * 1.5,
			classes: ""
		};
		M(t.label, r) + Y.labelPaddingX * 2 < r.er.minEntityWidth && (t.width = r.er.minEntityWidth);
		let J = await Dt(c, t, Y);
		if (!Mo(r.htmlLabels)) {
			let tt = /* @__PURE__ */ J.select("text"), at = tt.node()?.getBBox();
			tt.attr("transform", `translate(${-at.width / 2}, 0)`);
		}
		return J;
	}
	r.htmlLabels || (e *= 1.25, a *= 1.25);
	let o = /* @__PURE__ */ P(t);
	o || (o = "node default");
	let n$1 = /* @__PURE__ */ c.insert("g").attr("class", o).attr("id", t.domId || t.id), p$1 = await Gt(n$1, t.label ?? "", r, 0, 0, ["name"], s);
	p$1.height += a;
	let f = 0, m$2 = [], d = [], g = 0, y = 0, u$1 = 0, b = 0, S$1 = !0, k = !0;
	for (let Y of i.attributes) {
		let J = await Gt(n$1, Y.type, r, 0, f, ["attribute-type"], s);
		g = /* @__PURE__ */ Math.max(g, J.width + e);
		let tt = await Gt(n$1, Y.name, r, 0, f, ["attribute-name"], s);
		y = /* @__PURE__ */ Math.max(y, tt.width + e);
		let at = await Gt(n$1, /* @__PURE__ */ Y.keys.join(), r, 0, f, ["attribute-keys"], s);
		u$1 = /* @__PURE__ */ Math.max(u$1, at.width + e);
		let St = await Gt(n$1, Y.comment, r, 0, f, ["attribute-comment"], s);
		b = /* @__PURE__ */ Math.max(b, St.width + e);
		let mt = Math.max(J.height, tt.height, at.height, St.height) + a;
		d.push({
			yOffset: f,
			rowHeight: mt
		}), f += mt;
	}
	let w = 4;
	u$1 <= e && (S$1 = !1, u$1 = 0, w--), b <= e && (k = !1, b = 0, w--);
	let B = /* @__PURE__ */ n$1.node().getBBox();
	if (p$1.width + e * 2 - (g + y + u$1 + b) > 0) {
		let Y = p$1.width + e * 2 - (g + y + u$1 + b);
		g += Y / w, y += Y / w, u$1 > 0 && (u$1 += Y / w), b > 0 && (b += Y / w);
	}
	let T = g + y + u$1 + b, R = /* @__PURE__ */ v.svg(n$1), E = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
	let L = 0;
	d.length > 0 && (L = /* @__PURE__ */ d.reduce((Y, J) => Y + (J?.rowHeight ?? 0), 0));
	let O = /* @__PURE__ */ Math.max(B.width + e * 2, t?.width || 0, T), V = /* @__PURE__ */ Math.max((L ?? 0) + p$1.height, t?.height || 0), G = -O / 2, j = -V / 2;
	n$1.selectAll("g:not(:first-child)").each((Y, J, tt) => {
		let at = /* @__PURE__ */ ia(tt[J]), St = /* @__PURE__ */ at.attr("transform"), mt = 0, be = 0;
		if (St) {
			let Qt = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(St);
			Qt && (mt = /* @__PURE__ */ parseFloat(Qt[1]), be = /* @__PURE__ */ parseFloat(Qt[2]), at.attr("class").includes("attribute-name") ? mt += g : at.attr("class").includes("attribute-keys") ? mt += g + y : at.attr("class").includes("attribute-comment") && (mt += g + y + u$1));
		}
		at.attr("transform", `translate(${G + e / 2 + mt}, ${be + j + p$1.height + a / 2})`);
	}), n$1.select(".name").attr("transform", "translate(" + -p$1.width / 2 + ", " + (j + a / 2) + ")");
	let W = /* @__PURE__ */ R.rectangle(G, j, O, V, E), A = /* @__PURE__ */ n$1.insert(() => W, ":first-child").attr("style", /* @__PURE__ */ h.join("")), { themeVariables: I } = Ot(), { rowEven: F, rowOdd: Q, nodeBorder: it } = I;
	m$2.push(0);
	for (let [Y, J] of d.entries()) {
		let at = (Y + 1) % 2 === 0 && J.yOffset !== 0, St = /* @__PURE__ */ R.rectangle(G, p$1.height + j + J?.yOffset, O, J?.rowHeight, {
			...E,
			fill: at ? F : Q,
			stroke: it
		});
		n$1.insert(() => St, "g.label").attr("style", /* @__PURE__ */ h.join("")).attr("class", `row-rect-${at ? "even" : "odd"}`);
	}
	let ct = /* @__PURE__ */ R.line(G, p$1.height + j, O + G, p$1.height + j, E);
	n$1.insert(() => ct).attr("class", "divider"), ct = /* @__PURE__ */ R.line(g + G, p$1.height + j, g + G, V + j, E), n$1.insert(() => ct).attr("class", "divider"), S$1 && (ct = /* @__PURE__ */ R.line(g + y + G, p$1.height + j, g + y + G, V + j, E), n$1.insert(() => ct).attr("class", "divider")), k && (ct = /* @__PURE__ */ R.line(g + y + u$1 + G, p$1.height + j, g + y + u$1 + G, V + j, E), n$1.insert(() => ct).attr("class", "divider"));
	for (let Y of m$2) ct = /* @__PURE__ */ R.line(G, p$1.height + j + Y, O + G, p$1.height + j + Y, E), n$1.insert(() => ct).attr("class", "divider");
	if (D(t, A), l && t.look !== "handDrawn") {
		let J = l.split(";")?.filter((tt) => tt.includes("stroke"))?.map((tt) => `${tt}`).join("; ");
		n$1.selectAll("path").attr("style", J ?? ""), n$1.selectAll(".row-rect-even path").attr("style", l);
	}
	return t.intersect = function(Y) {
		return N.rect(t, Y);
	}, n$1;
}
m$1(ye, "erBox");
async function Gt(c, t, i, r = 0, e = 0, a = [], h = "") {
	let s = /* @__PURE__ */ c.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${r}, ${e})`).attr("style", h);
	t !== ln(t) && (t = /* @__PURE__ */ ln(t), t = /* @__PURE__ */ t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
	let l = /* @__PURE__ */ s.node().appendChild(await Rr(s, t, {
		width: M(t, i) + 100,
		style: h,
		useHtmlLabels: i.htmlLabels
	}, i));
	if (t.includes("&lt;") || t.includes("&gt;")) {
		let n$1 = l.children[0];
		for (n$1.textContent = /* @__PURE__ */ n$1.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); n$1.childNodes[0];) n$1 = n$1.childNodes[0], n$1.textContent = /* @__PURE__ */ n$1.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
	}
	let o = /* @__PURE__ */ l.getBBox();
	if (Mo(i.htmlLabels)) {
		let n$1 = l.children[0];
		n$1.style.textAlign = "start";
		let p$1 = /* @__PURE__ */ ia(l);
		o = /* @__PURE__ */ n$1.getBoundingClientRect(), p$1.attr("width", o.width), p$1.attr("height", o.height);
	}
	return o;
}
m$1(Gt, "addText");
async function Ys(c, t, i, r, e = i.class.padding ?? 12) {
	let a = r ? 0 : 3, h = /* @__PURE__ */ c.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId || t.id), s = null, l = null, o = null, n$1 = null, p$1 = 0, f = 0, m$2 = 0;
	if (s = /* @__PURE__ */ h.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
		let b = t.annotations[0];
		await Zt(s, { text: `\xAB${b}\xBB` }, 0), p$1 = s.node().getBBox().height;
	}
	l = /* @__PURE__ */ h.insert("g").attr("class", "label-group text"), await Zt(l, t, 0, ["font-weight: bolder"]);
	let d = /* @__PURE__ */ l.node().getBBox();
	f = d.height, o = /* @__PURE__ */ h.insert("g").attr("class", "members-group text");
	let g = 0;
	for (let b of t.members) {
		let S$1 = await Zt(o, b, g, [/* @__PURE__ */ b.parseClassifier()]);
		g += S$1 + a;
	}
	m$2 = o.node().getBBox().height, m$2 <= 0 && (m$2 = e / 2), n$1 = /* @__PURE__ */ h.insert("g").attr("class", "methods-group text");
	let y = 0;
	for (let b of t.methods) {
		let S$1 = await Zt(n$1, b, y, [/* @__PURE__ */ b.parseClassifier()]);
		y += S$1 + a;
	}
	let u$1 = /* @__PURE__ */ h.node().getBBox();
	if (s !== null) {
		let b = /* @__PURE__ */ s.node().getBBox();
		s.attr("transform", `translate(${-b.width / 2})`);
	}
	return l.attr("transform", `translate(${-d.width / 2}, ${p$1})`), u$1 = /* @__PURE__ */ h.node().getBBox(), o.attr("transform", `translate(0, ${p$1 + f + e * 2})`), u$1 = /* @__PURE__ */ h.node().getBBox(), n$1.attr("transform", `translate(0, ${p$1 + f + (m$2 ? m$2 + e * 4 : e * 2)})`), u$1 = /* @__PURE__ */ h.node().getBBox(), {
		shapeSvg: h,
		bbox: u$1
	};
}
m$1(Ys, "textHelper");
async function Zt(c, t, i, r = []) {
	let e = /* @__PURE__ */ c.insert("g").attr("class", "label").attr("style", /* @__PURE__ */ r.join("; ")), a = /* @__PURE__ */ Ot(), h = "useHtmlLabels" in t ? t.useHtmlLabels : Mo(a.htmlLabels) ?? !0, s = "";
	"text" in t ? s = t.text : s = t.label, !h && s.startsWith("\\") && (s = /* @__PURE__ */ s.substring(1)), nr(s) && (h = !0);
	let l = await Rr(e, /* @__PURE__ */ Xo(/* @__PURE__ */ Yt(s)), {
		width: M(s, a) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: h
	}, a), o, n$1 = 1;
	if (h) {
		let p$1 = l.children[0], f = /* @__PURE__ */ ia(l);
		n$1 = p$1.innerHTML.split("<br>").length, p$1.innerHTML.includes("</math>") && (n$1 += p$1.innerHTML.split("<mrow>").length - 1);
		let m$2 = /* @__PURE__ */ p$1.getElementsByTagName("img");
		if (m$2) {
			let d = s.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all(/* @__PURE__ */ [...m$2].map((g) => new Promise((y) => {
				function u$1() {
					if (g.style.display = "flex", g.style.flexDirection = "column", d) {
						let b = a.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, k = parseInt(b, 10) * 5 + "px";
						g.style.minWidth = k, g.style.maxWidth = k;
					} else g.style.width = "100%";
					y(g);
				}
				m$1(u$1, "setupImage"), setTimeout(() => {
					g.complete && u$1();
				}), g.addEventListener("error", u$1), g.addEventListener("load", u$1);
			})));
		}
		o = /* @__PURE__ */ p$1.getBoundingClientRect(), f.attr("width", o.width), f.attr("height", o.height);
	} else {
		r.includes("font-weight: bolder") && ia(l).selectAll("tspan").attr("font-weight", ""), n$1 = l.children.length;
		let p$1 = l.children[0];
		(l.textContent === "" || l.textContent.includes("&gt")) && (p$1.textContent = s[0] + s.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s[1] === " " && (p$1.textContent = p$1.textContent[0] + " " + p$1.textContent.substring(1))), p$1.textContent === "undefined" && (p$1.textContent = ""), o = /* @__PURE__ */ l.getBBox();
	}
	return e.attr("transform", "translate(0," + (-o.height / (2 * n$1) + i) + ")"), o.height;
}
m$1(Zt, "addText");
async function Zs(c, t) {
	let i = /* @__PURE__ */ mr(), r = i.class.padding ?? 12, e = r, a = t.useHtmlLabels ?? Mo(i.htmlLabels) ?? !0, h = t;
	h.annotations = h.annotations ?? [], h.members = h.members ?? [], h.methods = h.methods ?? [];
	let { shapeSvg: s, bbox: l } = await Ys(c, t, i, a, e), { labelStyles: o, nodeStyles: n$1 } = m(t);
	t.labelStyle = o, t.cssStyles = h.styles || "";
	let p$1 = h.styles?.join(";") || n$1 || "";
	t.cssStyles || (t.cssStyles = /* @__PURE__ */ p$1.replaceAll("!important", "").split(";"));
	let f = h.members.length === 0 && h.methods.length === 0 && !i.class?.hideEmptyMembersBox, m$2 = /* @__PURE__ */ v.svg(s), d = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
	let g = l.width, y = l.height;
	h.members.length === 0 && h.methods.length === 0 ? y += e : h.members.length > 0 && h.methods.length === 0 && (y += e * 2);
	let u$1 = -g / 2, b = -y / 2, S$1 = /* @__PURE__ */ m$2.rectangle(u$1 - r, b - r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0), g + 2 * r, y + 2 * r + (f ? r * 2 : h.members.length === 0 && h.methods.length === 0 ? -r : 0), d), k = /* @__PURE__ */ s.insert(() => S$1, ":first-child");
	k.attr("class", "basic label-container");
	let w = /* @__PURE__ */ k.node().getBBox();
	s.selectAll(".text").each((E, L, O) => {
		let V = /* @__PURE__ */ ia(O[L]), G = /* @__PURE__ */ V.attr("transform"), j = 0;
		if (G) {
			let F = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(G);
			F && (j = /* @__PURE__ */ parseFloat(F[2]));
		}
		let W = j + b + r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0);
		a || (W -= 4);
		let A = u$1;
		(V.attr("class").includes("label-group") || V.attr("class").includes("annotation-group")) && (A = -V.node()?.getBBox().width / 2 || 0, s.selectAll("text").each(function(I, F, Q) {
			window.getComputedStyle(Q[F]).textAnchor === "middle" && (A = 0);
		})), V.attr("transform", `translate(${A}, ${W})`);
	});
	let B = s.select(".annotation-group").node().getBBox().height - (f ? r / 2 : 0) || 0, T = s.select(".label-group").node().getBBox().height - (f ? r / 2 : 0) || 0, R = s.select(".members-group").node().getBBox().height - (f ? r / 2 : 0) || 0;
	if (h.members.length > 0 || h.methods.length > 0 || f) {
		let E = /* @__PURE__ */ m$2.line(w.x, B + T + b + r, w.x + w.width, B + T + b + r, d);
		s.insert(() => E).attr("class", "divider").attr("style", p$1);
	}
	if (f || h.members.length > 0 || h.methods.length > 0) {
		let E = /* @__PURE__ */ m$2.line(w.x, B + T + R + b + e * 2 + r, w.x + w.width, B + T + R + b + r + e * 2, d);
		s.insert(() => E).attr("class", "divider").attr("style", p$1);
	}
	if (h.look !== "handDrawn" && s.selectAll("path").attr("style", p$1), k.select(":nth-child(2)").attr("style", p$1), s.selectAll(".divider").select("path").attr("style", p$1), t.labelStyle ? s.selectAll("span").attr("style", t.labelStyle) : s.selectAll("span").attr("style", p$1), !a) {
		let E = /* @__PURE__ */ RegExp(/color\s*:\s*([^;]*)/), L = /* @__PURE__ */ E.exec(p$1);
		if (L) {
			let O = /* @__PURE__ */ L[0].replace("color", "fill");
			s.selectAll("tspan").attr("style", O);
		} else if (o) {
			let O = /* @__PURE__ */ E.exec(o);
			if (O) {
				let V = /* @__PURE__ */ O[0].replace("color", "fill");
				s.selectAll("tspan").attr("style", V);
			}
		}
	}
	return D(t, k), t.intersect = function(E) {
		return N.rect(t, E);
	}, s;
}
m$1(Zs, "classBox");
async function Us(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let e = t, a = t, h = 20, s = 20, l = "verifyMethod" in t, o = /* @__PURE__ */ P(t), n$1 = /* @__PURE__ */ c.insert("g").attr("class", o).attr("id", t.domId ?? t.id), p$1;
	l ? p$1 = await pt$1(n$1, `&lt;&lt;${e.type}&gt;&gt;`, 0, t.labelStyle) : p$1 = await pt$1(n$1, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
	let f = p$1, m$2 = await pt$1(n$1, e.name, f, t.labelStyle + "; font-weight: bold;");
	if (f += m$2 + s, l) {
		let B = await pt$1(n$1, `${e.requirementId ? `ID: ${e.requirementId}` : ""}`, f, t.labelStyle);
		f += B;
		let T = await pt$1(n$1, `${e.text ? `Text: ${e.text}` : ""}`, f, t.labelStyle);
		f += T;
		let R = await pt$1(n$1, `${e.risk ? `Risk: ${e.risk}` : ""}`, f, t.labelStyle);
		f += R, await pt$1(n$1, `${e.verifyMethod ? `Verification: ${e.verifyMethod}` : ""}`, f, t.labelStyle);
	} else {
		let B = await pt$1(n$1, `${a.type ? `Type: ${a.type}` : ""}`, f, t.labelStyle);
		f += B, await pt$1(n$1, `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`, f, t.labelStyle);
	}
	let d = (n$1.node()?.getBBox().width ?? 200) + h, g = (n$1.node()?.getBBox().height ?? 200) + h, y = -d / 2, u$1 = -g / 2, b = /* @__PURE__ */ v.svg(n$1), S$1 = /* @__PURE__ */ S(t, {});
	t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
	let k = /* @__PURE__ */ b.rectangle(y, u$1, d, g, S$1), w = /* @__PURE__ */ n$1.insert(() => k, ":first-child");
	if (w.attr("class", "basic label-container").attr("style", r), n$1.selectAll(".label").each((B, T, R) => {
		let E = /* @__PURE__ */ ia(R[T]), L = /* @__PURE__ */ E.attr("transform"), O = 0, V = 0;
		if (L) {
			let A = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(L);
			A && (O = /* @__PURE__ */ parseFloat(A[1]), V = /* @__PURE__ */ parseFloat(A[2]));
		}
		let G = V - g / 2, j = y + h / 2;
		(T === 0 || T === 1) && (j = O), E.attr("transform", `translate(${j}, ${G + h})`);
	}), f > p$1 + m$2 + s) {
		let B = /* @__PURE__ */ b.line(y, u$1 + p$1 + m$2 + s, y + d, u$1 + p$1 + m$2 + s, S$1);
		n$1.insert(() => B).attr("style", r);
	}
	return D(t, w), t.intersect = function(B) {
		return N.rect(t, B);
	}, n$1;
}
m$1(Us, "requirementBox");
async function pt$1(c, t, i, r = "") {
	if (t === "") return 0;
	let e = /* @__PURE__ */ c.insert("g").attr("class", "label").attr("style", r), a = /* @__PURE__ */ mr(), h = a.htmlLabels ?? !0, s = await Rr(e, /* @__PURE__ */ Xo(/* @__PURE__ */ Yt(t)), {
		width: M(t, a) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: h,
		style: r
	}, a), l;
	if (h) {
		let o = s.children[0], n$1 = /* @__PURE__ */ ia(s);
		l = /* @__PURE__ */ o.getBoundingClientRect(), n$1.attr("width", l.width), n$1.attr("height", l.height);
	} else {
		let o = s.children[0];
		for (let n$1 of o.children) n$1.textContent = /* @__PURE__ */ n$1.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), r && n$1.setAttribute("style", r);
		l = /* @__PURE__ */ s.getBBox(), l.height += 6;
	}
	return e.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + i})`), l.height;
}
m$1(pt$1, "addText");
var Ar = /* @__PURE__ */ m$1((c) => {
	switch (c) {
		case "Very High": return "red";
		case "High": return "orange";
		case "Medium": return null;
		case "Low": return "blue";
		case "Very Low": return "lightblue";
	}
}, "colorFromPriority");
async function Qs(c, t, { config: i }) {
	let { labelStyles: r, nodeStyles: e } = m(t);
	t.labelStyle = r || "";
	let a = 10, h = t.width;
	t.width = (t.width ?? 200) - 10;
	let { shapeSvg: s, bbox: l, label: o } = await C(c, t, /* @__PURE__ */ P(t)), n$1 = t.padding || 10, p$1 = "", f;
	"ticket" in t && t.ticket && i?.kanban?.ticketBaseUrl && (p$1 = i?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), f = /* @__PURE__ */ s.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p$1).attr("target", "_blank"));
	let m$2 = {
		useHtmlLabels: t.useHtmlLabels,
		labelStyle: t.labelStyle || "",
		width: t.width,
		img: t.img,
		padding: t.padding || 8,
		centerLabel: !1
	}, d, g;
	f ? {label: d, bbox: g} = await At(f, "ticket" in t && t.ticket || "", m$2) : {label: d, bbox: g} = await At(s, "ticket" in t && t.ticket || "", m$2);
	let { label: y, bbox: u$1 } = await At(s, "assigned" in t && t.assigned || "", m$2);
	t.width = h;
	let b = 10, S$1 = t?.width || 0, k = Math.max(g.height, u$1.height) / 2, w = Math.max(l.height + b * 2, t?.height || 0) + k, B = -S$1 / 2, T = -w / 2;
	o.attr("transform", "translate(" + (n$1 - S$1 / 2) + ", " + (-k - l.height / 2) + ")"), d.attr("transform", "translate(" + (n$1 - S$1 / 2) + ", " + (-k + l.height / 2) + ")"), y.attr("transform", "translate(" + (n$1 + S$1 / 2 - u$1.width - 2 * a) + ", " + (-k + l.height / 2) + ")");
	let R, { rx: E, ry: L } = t, { cssStyles: O } = t;
	if (t.look === "handDrawn") {
		let V = /* @__PURE__ */ v.svg(s), G = /* @__PURE__ */ S(t, {}), j = E || L ? V.path(/* @__PURE__ */ st(B, T, S$1, w, E || 0), G) : V.rectangle(B, T, S$1, w, G);
		R = /* @__PURE__ */ s.insert(() => j, ":first-child"), R.attr("class", "basic label-container").attr("style", O || null);
	} else {
		R = /* @__PURE__ */ s.insert("rect", ":first-child"), R.attr("class", "basic label-container __APA__").attr("style", e).attr("rx", E ?? 5).attr("ry", L ?? 5).attr("x", B).attr("y", T).attr("width", S$1).attr("height", w);
		let V = "priority" in t && t.priority;
		if (V) {
			let G = /* @__PURE__ */ s.append("line"), j = B + 2, W = T + Math.floor((E ?? 0) / 2), A = T + w - Math.floor((E ?? 0) / 2);
			G.attr("x1", j).attr("y1", W).attr("x2", j).attr("y2", A).attr("stroke-width", "4").attr("stroke", /* @__PURE__ */ Ar(V));
		}
	}
	return D(t, R), t.height = w, t.intersect = function(V) {
		return N.rect(t, V);
	}, s;
}
m$1(Qs, "kanbanItem");
async function Js(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width + 10 * h, o = a.height + 8 * h, n$1 = .15 * l, { cssStyles: p$1 } = t, f = a.width + 20, m$2 = a.height + 20, d = /* @__PURE__ */ Math.max(l, f), g = /* @__PURE__ */ Math.max(o, m$2);
	s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`);
	let y, u$1 = `M0 0 
    a${n$1},${n$1} 1 0,0 ${d * .25},${-1 * g * .1}
    a${n$1},${n$1} 1 0,0 ${d * .25},0
    a${n$1},${n$1} 1 0,0 ${d * .25},0
    a${n$1},${n$1} 1 0,0 ${d * .25},${g * .1}

    a${n$1},${n$1} 1 0,0 ${d * .15},${g * .33}
    a${n$1 * .8},${n$1 * .8} 1 0,0 0,${g * .34}
    a${n$1},${n$1} 1 0,0 ${-1 * d * .15},${g * .33}

    a${n$1},${n$1} 1 0,0 ${-1 * d * .25},${g * .15}
    a${n$1},${n$1} 1 0,0 ${-1 * d * .25},0
    a${n$1},${n$1} 1 0,0 ${-1 * d * .25},0
    a${n$1},${n$1} 1 0,0 ${-1 * d * .25},${-1 * g * .15}

    a${n$1},${n$1} 1 0,0 ${-1 * d * .1},${-1 * g * .33}
    a${n$1 * .8},${n$1 * .8} 1 0,0 0,${-1 * g * .34}
    a${n$1},${n$1} 1 0,0 ${d * .1},${-1 * g * .33}
  H0 V0 Z`;
	if (t.look === "handDrawn") {
		let b = /* @__PURE__ */ v.svg(e), S$1 = /* @__PURE__ */ S(t, {}), k = /* @__PURE__ */ b.path(u$1, S$1);
		y = /* @__PURE__ */ e.insert(() => k, ":first-child"), y.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(p$1));
	} else y = /* @__PURE__ */ e.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", u$1);
	return y.attr("transform", `translate(${-d / 2}, ${-g / 2})`), D(t, y), t.calcIntersect = function(b, S$1) {
		return N.rect(b, S$1);
	}, t.intersect = function(b) {
		return pt.info("Bang intersect", t, b), N.rect(t, b);
	}, e;
}
m$1(Js, "bang");
async function Ks(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width + 2 * h, o = a.height + 2 * h, n$1 = .15 * l, p$1 = .25 * l, f = .35 * l, m$2 = .2 * l, { cssStyles: d } = t, g, y = `M0 0 
    a${n$1},${n$1} 0 0,1 ${l * .25},${-1 * l * .1}
    a${f},${f} 1 0,1 ${l * .4},${-1 * l * .1}
    a${p$1},${p$1} 1 0,1 ${l * .35},${l * .2}

    a${n$1},${n$1} 1 0,1 ${l * .15},${o * .35}
    a${m$2},${m$2} 1 0,1 ${-1 * l * .15},${o * .65}

    a${p$1},${n$1} 1 0,1 ${-1 * l * .25},${l * .15}
    a${f},${f} 1 0,1 ${-1 * l * .5},0
    a${n$1},${n$1} 1 0,1 ${-1 * l * .25},${-1 * l * .15}

    a${n$1},${n$1} 1 0,1 ${-1 * l * .1},${-1 * o * .35}
    a${m$2},${m$2} 1 0,1 ${l * .1},${-1 * o * .65}
  H0 V0 Z`;
	if (t.look === "handDrawn") {
		let u$1 = /* @__PURE__ */ v.svg(e), b = /* @__PURE__ */ S(t, {}), S$1 = /* @__PURE__ */ u$1.path(y, b);
		g = /* @__PURE__ */ e.insert(() => S$1, ":first-child"), g.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt(d));
	} else g = /* @__PURE__ */ e.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", y);
	return s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), g.attr("transform", `translate(${-l / 2}, ${-o / 2})`), D(t, g), t.calcIntersect = function(u$1, b) {
		return N.rect(u$1, b);
	}, t.intersect = function(u$1) {
		return pt.info("Cloud intersect", t, u$1), N.rect(t, u$1);
	}, e;
}
m$1(Ks, "cloud");
async function tr(c, t) {
	let { labelStyles: i, nodeStyles: r } = m(t);
	t.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /* @__PURE__ */ P(t)), l = a.width + 8 * h, o = a.height + 2 * h, n$1 = 5, p$1 = `
    M${-l / 2} ${o / 2 - n$1}
    v${-o + 2 * n$1}
    q0,-${n$1} ${n$1},-${n$1}
    h${l - 2 * n$1}
    q${n$1},0 ${n$1},${n$1}
    v${o - 2 * n$1}
    q0,${n$1} -${n$1},${n$1}
    h${-l + 2 * n$1}
    q-${n$1},0 -${n$1},-${n$1}
    Z
  `, f = /* @__PURE__ */ e.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr("style", r).attr("d", p$1);
	return e.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", o / 2).attr("x2", l / 2).attr("y2", o / 2), s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), e.append(() => s.node()), D(t, f), t.calcIntersect = function(m$2, d) {
		return N.rect(m$2, d);
	}, t.intersect = function(m$2) {
		return N.rect(t, m$2);
	}, e;
}
m$1(tr, "defaultMindmapNode");
async function er(c, t) {
	return Xt(c, t, { padding: t.padding ?? 0 });
}
m$1(er, "mindmapCircle");
var Or = [
	{
		semanticName: "Process",
		name: "Rectangle",
		shortName: "rect",
		description: "Standard process shape",
		aliases: [
			"proc",
			"process",
			"rectangle"
		],
		internalAliases: ["squareRect"],
		handler: Rs
	},
	{
		semanticName: "Event",
		name: "Rounded Rectangle",
		shortName: "rounded",
		description: "Represents an event",
		aliases: ["event"],
		internalAliases: ["roundedRect"],
		handler: Bs
	},
	{
		semanticName: "Terminal Point",
		name: "Stadium",
		shortName: "stadium",
		description: "Terminal point",
		aliases: ["terminal", "pill"],
		handler: Gs
	},
	{
		semanticName: "Subprocess",
		name: "Framed Rectangle",
		shortName: "fr-rect",
		description: "Subprocess",
		aliases: [
			"subprocess",
			"subproc",
			"framed-rectangle",
			"subroutine"
		],
		handler: Os
	},
	{
		semanticName: "Database",
		name: "Cylinder",
		shortName: "cyl",
		description: "Database storage",
		aliases: [
			"db",
			"database",
			"cylinder"
		],
		handler: ss
	},
	{
		semanticName: "Start",
		name: "Circle",
		shortName: "circle",
		description: "Starting point",
		aliases: ["circ"],
		handler: Xt
	},
	{
		semanticName: "Bang",
		name: "Bang",
		shortName: "bang",
		description: "Bang",
		aliases: ["bang"],
		handler: Js
	},
	{
		semanticName: "Cloud",
		name: "Cloud",
		shortName: "cloud",
		description: "cloud",
		aliases: ["cloud"],
		handler: Ks
	},
	{
		semanticName: "Decision",
		name: "Diamond",
		shortName: "diam",
		description: "Decision-making step",
		aliases: [
			"decision",
			"diamond",
			"question"
		],
		handler: Ms
	},
	{
		semanticName: "Prepare Conditional",
		name: "Hexagon",
		shortName: "hex",
		description: "Preparation or condition step",
		aliases: ["hexagon", "prepare"],
		handler: cs
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Right",
		shortName: "lean-r",
		description: "Represents input or output",
		aliases: ["lean-right", "in-out"],
		internalAliases: ["lean_right"],
		handler: bs
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Left",
		shortName: "lean-l",
		description: "Represents output or input",
		aliases: ["lean-left", "out-in"],
		internalAliases: ["lean_left"],
		handler: xs
	},
	{
		semanticName: "Priority Action",
		name: "Trapezoid Base Bottom",
		shortName: "trap-b",
		description: "Priority action",
		aliases: [
			"priority",
			"trapezoid-bottom",
			"trapezoid"
		],
		handler: Is
	},
	{
		semanticName: "Manual Operation",
		name: "Trapezoid Base Top",
		shortName: "trap-t",
		description: "Represents a manual task",
		aliases: [
			"manual",
			"trapezoid-top",
			"inv-trapezoid"
		],
		internalAliases: ["inv_trapezoid"],
		handler: us
	},
	{
		semanticName: "Stop",
		name: "Double Circle",
		shortName: "dbl-circ",
		description: "Represents a stop point",
		aliases: ["double-circle"],
		internalAliases: ["doublecircle"],
		handler: as
	},
	{
		semanticName: "Text Block",
		name: "Text Block",
		shortName: "text",
		description: "Text block",
		handler: Vs
	},
	{
		semanticName: "Card",
		name: "Notched Rectangle",
		shortName: "notch-rect",
		description: "Represents a card",
		aliases: ["card", "notched-rectangle"],
		handler: Ze
	},
	{
		semanticName: "Lined/Shaded Process",
		name: "Lined Rectangle",
		shortName: "lin-rect",
		description: "Lined process shape",
		aliases: [
			"lined-rectangle",
			"lined-process",
			"lin-proc",
			"shaded-process"
		],
		handler: Cs
	},
	{
		semanticName: "Start",
		name: "Small Circle",
		shortName: "sm-circ",
		description: "Small starting point",
		aliases: ["start", "small-circle"],
		internalAliases: ["stateStart"],
		handler: As
	},
	{
		semanticName: "Stop",
		name: "Framed Circle",
		shortName: "fr-circ",
		description: "Stop point",
		aliases: ["stop", "framed-circle"],
		internalAliases: ["stateEnd"],
		handler: js
	},
	{
		semanticName: "Fork/Join",
		name: "Filled Rectangle",
		shortName: "fork",
		description: "Fork or join in process flow",
		aliases: ["join"],
		internalAliases: ["forkJoin"],
		handler: ns
	},
	{
		semanticName: "Collate",
		name: "Hourglass",
		shortName: "hourglass",
		description: "Represents a collate operation",
		aliases: ["hourglass", "collate"],
		handler: hs
	},
	{
		semanticName: "Comment",
		name: "Curly Brace",
		shortName: "brace",
		description: "Adds a comment",
		aliases: ["comment", "brace-l"],
		handler: Je
	},
	{
		semanticName: "Comment Right",
		name: "Curly Brace",
		shortName: "brace-r",
		description: "Adds a comment",
		handler: Ke
	},
	{
		semanticName: "Comment with braces on both sides",
		name: "Curly Braces",
		shortName: "braces",
		description: "Adds a comment",
		handler: ts
	},
	{
		semanticName: "Com Link",
		name: "Lightning Bolt",
		shortName: "bolt",
		description: "Communication link",
		aliases: ["com-link", "lightning-bolt"],
		handler: Ss
	},
	{
		semanticName: "Document",
		name: "Document",
		shortName: "doc",
		description: "Represents a document",
		aliases: ["doc", "document"],
		handler: zs
	},
	{
		semanticName: "Delay",
		name: "Half-Rounded Rectangle",
		shortName: "delay",
		description: "Represents a delay",
		aliases: ["half-rounded-rectangle"],
		handler: ls
	},
	{
		semanticName: "Direct Access Storage",
		name: "Horizontal Cylinder",
		shortName: "h-cyl",
		description: "Direct access storage",
		aliases: ["das", "horizontal-cylinder"],
		handler: Ws
	},
	{
		semanticName: "Disk Storage",
		name: "Lined Cylinder",
		shortName: "lin-cyl",
		description: "Disk storage",
		aliases: ["disk", "lined-cylinder"],
		handler: ws
	},
	{
		semanticName: "Display",
		name: "Curved Trapezoid",
		shortName: "curv-trap",
		description: "Represents a display",
		aliases: ["curved-trapezoid", "display"],
		handler: es
	},
	{
		semanticName: "Divided Process",
		name: "Divided Rectangle",
		shortName: "div-rect",
		description: "Divided process shape",
		aliases: [
			"div-proc",
			"divided-rectangle",
			"divided-process"
		],
		handler: rs
	},
	{
		semanticName: "Extract",
		name: "Triangle",
		shortName: "tri",
		description: "Extraction process",
		aliases: ["extract", "triangle"],
		handler: _s
	},
	{
		semanticName: "Internal Storage",
		name: "Window Pane",
		shortName: "win-pane",
		description: "Internal storage",
		aliases: ["internal-storage", "window-pane"],
		handler: Xs
	},
	{
		semanticName: "Junction",
		name: "Filled Circle",
		shortName: "f-circ",
		description: "Junction point",
		aliases: ["junction", "filled-circle"],
		handler: os
	},
	{
		semanticName: "Loop Limit",
		name: "Trapezoidal Pentagon",
		shortName: "notch-pent",
		description: "Loop limit step",
		aliases: ["loop-limit", "notched-pentagon"],
		handler: Fs
	},
	{
		semanticName: "Manual File",
		name: "Flipped Triangle",
		shortName: "flip-tri",
		description: "Manual file operation",
		aliases: ["manual-file", "flipped-triangle"],
		handler: is
	},
	{
		semanticName: "Manual Input",
		name: "Sloped Rectangle",
		shortName: "sl-rect",
		description: "Manual input step",
		aliases: ["manual-input", "sloped-rectangle"],
		handler: Ts
	},
	{
		semanticName: "Multi-Document",
		name: "Stacked Document",
		shortName: "docs",
		description: "Multiple documents",
		aliases: [
			"documents",
			"st-doc",
			"stacked-document"
		],
		handler: Ds
	},
	{
		semanticName: "Multi-Process",
		name: "Stacked Rectangle",
		shortName: "st-rect",
		description: "Multiple processes",
		aliases: [
			"procs",
			"processes",
			"stacked-rectangle"
		],
		handler: $s
	},
	{
		semanticName: "Stored Data",
		name: "Bow Tie Rectangle",
		shortName: "bow-rect",
		description: "Stored data",
		aliases: ["stored-data", "bow-tie-rectangle"],
		handler: Ye
	},
	{
		semanticName: "Summary",
		name: "Crossed Circle",
		shortName: "cross-circ",
		description: "Summary",
		aliases: ["summary", "crossed-circle"],
		handler: Qe
	},
	{
		semanticName: "Tagged Document",
		name: "Tagged Document",
		shortName: "tag-doc",
		description: "Tagged document",
		aliases: ["tag-doc", "tagged-document"],
		handler: Hs
	},
	{
		semanticName: "Tagged Process",
		name: "Tagged Rectangle",
		shortName: "tag-rect",
		description: "Tagged process",
		aliases: [
			"tagged-rectangle",
			"tag-proc",
			"tagged-process"
		],
		handler: Ls
	},
	{
		semanticName: "Paper Tape",
		name: "Flag",
		shortName: "flag",
		description: "Paper tape",
		aliases: ["paper-tape"],
		handler: qs
	},
	{
		semanticName: "Odd",
		name: "Odd",
		shortName: "odd",
		description: "Odd shape",
		internalAliases: ["rect_left_inv_arrow"],
		handler: ks
	},
	{
		semanticName: "Lined Document",
		name: "Lined Document",
		shortName: "lin-doc",
		description: "Lined document",
		aliases: ["lined-document"],
		handler: Ns
	}
], xe = /* @__PURE__ */ m$1(() => {
	let t = [.../* @__PURE__ */ Object.entries({
		state: Es,
		choice: Ue,
		note: vs,
		rectWithTitle: Ps,
		labelRect: ys,
		iconSquare: ds,
		iconCircle: ms,
		icon: ps,
		iconRounded: fs,
		imageSquare: gs,
		anchor: qe,
		kanbanItem: Qs,
		mindmapCircle: er,
		defaultMindmapNode: tr,
		classBox: Zs,
		erBox: ye,
		requirementBox: Us
	}), .../* @__PURE__ */ Or.flatMap((i) => [
		i.shortName,
		..."aliases" in i ? i.aliases : [],
		..."internalAliases" in i ? i.internalAliases : []
	].map((e) => [e, i.handler]))];
	return Object.fromEntries(t);
}, "generateShapeMap")();
function Md(c) {
	return c in xe;
}
m$1(Md, "isValidShape");
var Ut = /* @__PURE__ */ new Map();
async function Td(c, t, i) {
	let r, e;
	t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
	let a = t.shape ? xe[t.shape] : void 0;
	if (!a) throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
	if (t.link) {
		let h;
		i.config.securityLevel === "sandbox" ? h = "_top" : t.linkTarget && (h = t.linkTarget || "_blank"), r = /* @__PURE__ */ c.insert("svg:a").attr("xlink:href", t.link).attr("target", h ?? null), e = await a(r, t, i);
	} else e = await a(c, t, i), r = e;
	return t.tooltip && e.attr("title", t.tooltip), Ut.set(t.id, r), t.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
}
m$1(Td, "insertNode");
var Rd = /* @__PURE__ */ m$1((c, t) => {
	Ut.set(t.id, c);
}, "setNodeElem"), Gd = /* @__PURE__ */ m$1(() => {
	Ut.clear();
}, "clear"), Ed = /* @__PURE__ */ m$1((c) => {
	let t = /* @__PURE__ */ Ut.get(c.id);
	pt.trace("Transforming node", c.diff, c, "translate(" + (c.x - c.width / 2 - 5) + ", " + c.width / 2 + ")");
	let i = 8, r = c.diff || 0;
	return c.clusterNode ? t.attr("transform", "translate(" + (c.x + r - c.width / 2) + ", " + (c.y - c.height / 2 - i) + ")") : t.attr("transform", "translate(" + c.x + ", " + c.y + ")"), r;
}, "positionNode");
export { Md as a, Td as c, xa as d, Gd as i, ba as l, D as n, Rd as o, Ed as r, Rt as s, C as t, v as u };
