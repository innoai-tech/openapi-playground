const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.pf6pZzY2.chunk.js","assets/vendor-min-mermaid~architectureDiagram-4X3Z3J56.DWYnMD9N.chunk.js","assets/vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BHePMx5P.chunk.js","assets/vendor-min-mermaid~blockDiagram-MFEFEJY7.ApPexMK5.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.CvNLxJVJ.chunk.js","assets/vendor-min-mermaid~chunk-QK4BHB5Z.CznrIrya.chunk.js","assets/vendor-min-mermaid~dagre-5ZHZFEXP.DqGc8tCj.chunk.js","assets/vendor-mermaid.CK4Mkaxq.chunk.js","assets/vendor-min-mermaid~cose-bilkent-AZ5BDB2T.-HcUM9y-.chunk.js"])))=>i.map(i=>d[i]);
import { Bt as Jc, Gt as Qc, H as Mo, Ht as Lc, Kt as Qs, Nn as __vitePreload, Nt as As, Pt as Bc, Qt as Vn, St as qo, Vt as Kc, W as Ni, Zt as Vc, _ as Ut, an as Zc, bt as ot, dt as hn, gt as mr, h as M, hn as pt, ht as ln, jt as $s, l as ve, ln as ia, nt as Xo, q as Ot, s as Rr, sn as Zs, u as $, v as Vt$1, vt as nr, w as dt, x as Yt, yn as zc } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.DWYnMD9N.chunk.js";
import { Q as m } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BHePMx5P.chunk.js";
import { a as w, i as s, n, r as d } from "./vendor-min-mermaid~blockDiagram-MFEFEJY7.ApPexMK5.chunk.js";
import { a as u$1, i as p, n as g, r as m$1, t as S$1 } from "./vendor-min-mermaid~chunk-5V7UUW6L.CvNLxJVJ.chunk.js";
var C = /* @__PURE__ */ m(async (c$1, t$1, i) => {
	let r, e = t$1.useHtmlLabels || Mo(mr()?.htmlLabels);
	i ? r = i : r = "node default";
	let a = /* @__PURE__ */ c$1.insert("g").attr("class", r).attr("id", t$1.domId || t$1.id), h = /* @__PURE__ */ a.insert("g").attr("class", "label").attr("style", /* @__PURE__ */ Vt$1(t$1.labelStyle)), s$1;
	t$1.label === void 0 ? s$1 = "" : s$1 = typeof t$1.label == "string" ? t$1.label : t$1.label[0];
	let l = await Rr(h, /* @__PURE__ */ ot(/* @__PURE__ */ Yt(s$1), /* @__PURE__ */ mr()), {
		useHtmlLabels: e,
		width: t$1.width || mr().flowchart?.wrappingWidth,
		cssClasses: "markdown-node-label",
		style: t$1.labelStyle,
		addSvgBackground: !!t$1.icon || !!t$1.img
	}), o = /* @__PURE__ */ l.getBBox(), n$1 = (t$1?.padding ?? 0) / 2;
	if (e) {
		let p$1 = l.children[0], f = /* @__PURE__ */ ia(l), m$2 = /* @__PURE__ */ p$1.getElementsByTagName("img");
		if (m$2) {
			let d$1 = s$1.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all(/* @__PURE__ */ [...m$2].map((g$1) => new Promise((y) => {
				function u$2() {
					if (g$1.style.display = "flex", g$1.style.flexDirection = "column", d$1) {
						let b = mr().fontSize ? mr().fontSize : window.getComputedStyle(document.body).fontSize, S$2 = 5, [k = Ni.fontSize] = $(b), w$1 = k * S$2 + "px";
						g$1.style.minWidth = w$1, g$1.style.maxWidth = w$1;
					} else g$1.style.width = "100%";
					y(g$1);
				}
				m(u$2, "setupImage"), setTimeout(() => {
					g$1.complete && u$2();
				}), g$1.addEventListener("error", u$2), g$1.addEventListener("load", u$2);
			})));
		}
		o = /* @__PURE__ */ p$1.getBoundingClientRect(), f.attr("width", o.width), f.attr("height", o.height);
	}
	return e ? h.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")") : h.attr("transform", "translate(0, " + -o.height / 2 + ")"), t$1.centerLabel && h.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), h.insert("rect", ":first-child"), {
		shapeSvg: a,
		bbox: o,
		halfPadding: n$1,
		label: h
	};
}, "labelHelper"), At = /* @__PURE__ */ m(async (c$1, t$1, i) => {
	let r = i.useHtmlLabels || Mo(mr()?.flowchart?.htmlLabels), e = /* @__PURE__ */ c$1.insert("g").attr("class", "label").attr("style", i.labelStyle || ""), a = await Rr(e, /* @__PURE__ */ ot(/* @__PURE__ */ Yt(t$1), /* @__PURE__ */ mr()), {
		useHtmlLabels: r,
		width: i.width || mr()?.flowchart?.wrappingWidth,
		style: i.labelStyle,
		addSvgBackground: !!i.icon || !!i.img
	}), h = /* @__PURE__ */ a.getBBox(), s$1 = i.padding / 2;
	if (Mo(mr()?.flowchart?.htmlLabels)) {
		let l = a.children[0], o = /* @__PURE__ */ ia(a);
		h = /* @__PURE__ */ l.getBoundingClientRect(), o.attr("width", h.width), o.attr("height", h.height);
	}
	return r ? e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")") : e.attr("transform", "translate(0, " + -h.height / 2 + ")"), i.centerLabel && e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), e.insert("rect", ":first-child"), {
		shapeSvg: c$1,
		bbox: h,
		halfPadding: s$1,
		label: e
	};
}, "insertLabel"), D = /* @__PURE__ */ m((c$1, t$1) => {
	let i = /* @__PURE__ */ t$1.node().getBBox();
	c$1.width = i.width, c$1.height = i.height;
}, "updateNodeBounds");
var P = /* @__PURE__ */ m((c$1, t$1) => (c$1.look === "handDrawn" ? "rough-node" : "node") + " " + c$1.cssClasses + " " + (t$1 || ""), "getNodeClasses");
function H(c$1) {
	let t$1 = /* @__PURE__ */ c$1.map((i, r) => `${r === 0 ? "M" : "L"}${i.x},${i.y}`);
	return t$1.push("Z"), t$1.join(" ");
}
m(H, "createPathFromPoints");
function lt(c$1, t$1, i, r, e, a) {
	let h = [], l = i - c$1, o = r - t$1, n$1 = l / a, p$1 = 2 * Math.PI / n$1, f = t$1 + o / 2;
	for (let m$2 = 0; m$2 <= 50; m$2++) {
		let g$1 = c$1 + m$2 / 50 * l, y = f + e * Math.sin(p$1 * (g$1 - c$1));
		h.push({
			x: g$1,
			y
		});
	}
	return h;
}
m(lt, "generateFullSineWavePoints");
function Nt(c$1, t$1, i, r, e, a) {
	let h = [], s$1 = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s$1) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s$1 + p$1 * n$1, m$2 = c$1 + i * Math.cos(f), d$1 = t$1 + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d$1
		});
	}
	return h;
}
m(Nt, "generateCirclePoints");
function te(c$1, t$1, i) {
	if (c$1 && c$1.length) {
		let [r, e] = t$1, a = Math.PI / 180 * i, h = /* @__PURE__ */ Math.cos(a), s$1 = /* @__PURE__ */ Math.sin(a);
		for (let l of c$1) {
			let [o, n$1] = l;
			l[0] = (o - r) * h - (n$1 - e) * s$1 + r, l[1] = (o - r) * s$1 + (n$1 - e) * h + e;
		}
	}
}
m(te, "t");
function sr(c$1, t$1) {
	return c$1[0] === t$1[0] && c$1[1] === t$1[1];
}
m(sr, "e");
function rr(c$1, t$1, i, r = 1) {
	let e = i, a = /* @__PURE__ */ Math.max(t$1, .1), h = c$1[0] && c$1[0][0] && typeof c$1[0][0] == "number" ? [c$1] : c$1, s$1 = [0, 0];
	if (e) for (let o of h) te(o, s$1, e);
	let l = /* @__PURE__ */ function(o, n$1, p$1) {
		let f = [];
		for (let b of o) {
			let S$2 = [...b];
			sr(S$2[0], S$2[S$2.length - 1]) || S$2.push([S$2[0][0], S$2[0][1]]), S$2.length > 2 && f.push(S$2);
		}
		let m$2 = [];
		n$1 = /* @__PURE__ */ Math.max(n$1, .1);
		let d$1 = [];
		for (let b of f) for (let S$2 = 0; S$2 < b.length - 1; S$2++) {
			let k = b[S$2], w$1 = b[S$2 + 1];
			if (k[1] !== w$1[1]) {
				let B = /* @__PURE__ */ Math.min(k[1], w$1[1]);
				d$1.push({
					ymin: B,
					ymax: /* @__PURE__ */ Math.max(k[1], w$1[1]),
					x: B === k[1] ? k[0] : w$1[0],
					islope: (w$1[0] - k[0]) / (w$1[1] - k[1])
				});
			}
		}
		if (d$1.sort((b, S$2) => b.ymin < S$2.ymin ? -1 : b.ymin > S$2.ymin ? 1 : b.x < S$2.x ? -1 : b.x > S$2.x ? 1 : b.ymax === S$2.ymax ? 0 : (b.ymax - S$2.ymax) / Math.abs(b.ymax - S$2.ymax)), !d$1.length) return m$2;
		let g$1 = [], y = d$1[0].ymin, u$2 = 0;
		for (; g$1.length || d$1.length;) {
			if (d$1.length) {
				let b = -1;
				for (let S$2 = 0; S$2 < d$1.length && !(d$1[S$2].ymin > y); S$2++) b = S$2;
				d$1.splice(0, b + 1).forEach((S$2) => {
					g$1.push({
						s: y,
						edge: S$2
					});
				});
			}
			if (g$1 = /* @__PURE__ */ g$1.filter((b) => !(b.edge.ymax <= y)), g$1.sort((b, S$2) => b.edge.x === S$2.edge.x ? 0 : (b.edge.x - S$2.edge.x) / Math.abs(b.edge.x - S$2.edge.x)), (p$1 !== 1 || u$2 % n$1 == 0) && g$1.length > 1) for (let b = 0; b < g$1.length; b += 2) {
				let S$2 = b + 1;
				if (S$2 >= g$1.length) break;
				let k = g$1[b].edge, w$1 = g$1[S$2].edge;
				m$2.push([[/* @__PURE__ */ Math.round(k.x), y], [/* @__PURE__ */ Math.round(w$1.x), y]]);
			}
			y += p$1, g$1.forEach((b) => {
				b.edge.x = b.edge.x + p$1 * b.edge.islope;
			}), u$2++;
		}
		return m$2;
	}(h, a, r);
	if (e) {
		for (let o of h) te(o, s$1, -e);
		(function(o, n$1, p$1) {
			let f = [];
			o.forEach((m$2) => f.push(...m$2)), te(f, n$1, p$1);
		})(l, s$1, -e);
	}
	return l;
}
m(rr, "s");
function Tt$1(c$1, t$1) {
	var i;
	let r = t$1.hachureAngle + 90, e = t$1.hachureGap;
	e < 0 && (e = 4 * t$1.strokeWidth), e = /* @__PURE__ */ Math.round(/* @__PURE__ */ Math.max(e, .1));
	let a = 1;
	return t$1.roughness >= 1 && (((i = t$1.randomizer) === null || i === void 0 ? void 0 : i.next()) || Math.random()) > .7 && (a = e), rr(c$1, e, r, a || 1);
}
m(Tt$1, "n");
var Ct = class {
	static {
		m(this, "o");
	}
	constructor(t$1) {
		this.helper = t$1;
	}
	fillPolygons(t$1, i) {
		return this._fillPolygons(t$1, i);
	}
	_fillPolygons(t$1, i) {
		let r = /* @__PURE__ */ Tt$1(t$1, i);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.renderLines(r, i)
		};
	}
	renderLines(t$1, i) {
		let r = [];
		for (let e of t$1) r.push(.../* @__PURE__ */ this.helper.doubleLineOps(e[0][0], e[0][1], e[1][0], e[1][1], i));
		return r;
	}
};
function zt(c$1) {
	let t$1 = c$1[0], i = c$1[1];
	return Math.sqrt(Math.pow(t$1[0] - i[0], 2) + Math.pow(t$1[1] - i[1], 2));
}
m(zt, "a");
var oe = class extends Ct {
	static {
		m(this, "h");
	}
	fillPolygons(t$1, i) {
		let r = i.hachureGap;
		r < 0 && (r = 4 * i.strokeWidth), r = /* @__PURE__ */ Math.max(r, .1);
		let e = /* @__PURE__ */ Tt$1(t$1, /* @__PURE__ */ Object.assign({}, i, { hachureGap: r })), a = Math.PI / 180 * i.hachureAngle, h = [], s$1 = .5 * r * Math.cos(a), l = .5 * r * Math.sin(a);
		for (let [o, n$1] of e) zt([o, n$1]) && h.push([[o[0] - s$1, o[1] + l], [...n$1]], [[o[0] + s$1, o[1] - l], [...n$1]]);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.renderLines(h, i)
		};
	}
}, ie = class extends Ct {
	static {
		m(this, "r");
	}
	fillPolygons(t$1, i) {
		let r = /* @__PURE__ */ this._fillPolygons(t$1, i), e = /* @__PURE__ */ Object.assign({}, i, { hachureAngle: i.hachureAngle + 90 }), a = /* @__PURE__ */ this._fillPolygons(t$1, e);
		return r.ops = /* @__PURE__ */ r.ops.concat(a.ops), r;
	}
}, ne = class {
	static {
		m(this, "i");
	}
	constructor(t$1) {
		this.helper = t$1;
	}
	fillPolygons(t$1, i) {
		let r = /* @__PURE__ */ Tt$1(t$1, i = /* @__PURE__ */ Object.assign({}, i, { hachureAngle: 0 }));
		return this.dotsOnLines(r, i);
	}
	dotsOnLines(t$1, i) {
		let r = [], e = i.hachureGap;
		e < 0 && (e = 4 * i.strokeWidth), e = /* @__PURE__ */ Math.max(e, .1);
		let a = i.fillWeight;
		a < 0 && (a = i.strokeWidth / 2);
		let h = e / 4;
		for (let s$1 of t$1) {
			let l = /* @__PURE__ */ zt(s$1), o = l / e, n$1 = Math.ceil(o) - 1, p$1 = l - n$1 * e, f = (s$1[0][0] + s$1[1][0]) / 2 - e / 4, m$2 = /* @__PURE__ */ Math.min(s$1[0][1], s$1[1][1]);
			for (let d$1 = 0; d$1 < n$1; d$1++) {
				let g$1 = m$2 + p$1 + d$1 * e, y = f - h + 2 * Math.random() * h, u$2 = g$1 - h + 2 * Math.random() * h, b = /* @__PURE__ */ this.helper.ellipse(y, u$2, a, a, i);
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
		m(this, "c");
	}
	constructor(t$1) {
		this.helper = t$1;
	}
	fillPolygons(t$1, i) {
		let r = /* @__PURE__ */ Tt$1(t$1, i);
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.dashedLine(r, i)
		};
	}
	dashedLine(t$1, i) {
		let r = i.dashOffset < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashOffset, e = i.dashGap < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashGap, a = [];
		return t$1.forEach((h) => {
			let s$1 = /* @__PURE__ */ zt(h), l = /* @__PURE__ */ Math.floor(s$1 / (r + e)), o = (s$1 + e - l * (r + e)) / 2, n$1 = h[0], p$1 = h[1];
			n$1[0] > p$1[0] && (n$1 = h[1], p$1 = h[0]);
			let f = /* @__PURE__ */ Math.atan((p$1[1] - n$1[1]) / (p$1[0] - n$1[0]));
			for (let m$2 = 0; m$2 < l; m$2++) {
				let d$1 = m$2 * (r + e), g$1 = d$1 + r, y = [n$1[0] + d$1 * Math.cos(f) + o * Math.cos(f), n$1[1] + d$1 * Math.sin(f) + o * Math.sin(f)], u$2 = [n$1[0] + g$1 * Math.cos(f) + o * Math.cos(f), n$1[1] + g$1 * Math.sin(f) + o * Math.sin(f)];
				a.push(.../* @__PURE__ */ this.helper.doubleLineOps(y[0], y[1], u$2[0], u$2[1], i));
			}
		}), a;
	}
}, ce = class {
	static {
		m(this, "l");
	}
	constructor(t$1) {
		this.helper = t$1;
	}
	fillPolygons(t$1, i) {
		let r = i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap, e = i.zigzagOffset < 0 ? r : i.zigzagOffset, a = /* @__PURE__ */ Tt$1(t$1, i = /* @__PURE__ */ Object.assign({}, i, { hachureGap: r + e }));
		return {
			type: "fillSketch",
			ops: /* @__PURE__ */ this.zigzagLines(a, e, i)
		};
	}
	zigzagLines(t$1, i, r) {
		let e = [];
		return t$1.forEach((a) => {
			let h = /* @__PURE__ */ zt(a), s$1 = /* @__PURE__ */ Math.round(h / (2 * i)), l = a[0], o = a[1];
			l[0] > o[0] && (l = a[1], o = a[0]);
			let n$1 = /* @__PURE__ */ Math.atan((o[1] - l[1]) / (o[0] - l[0]));
			for (let p$1 = 0; p$1 < s$1; p$1++) {
				let f = 2 * p$1 * i, m$2 = 2 * (p$1 + 1) * i, d$1 = /* @__PURE__ */ Math.sqrt(2 * Math.pow(i, 2)), g$1 = [l[0] + f * Math.cos(n$1), l[1] + f * Math.sin(n$1)], y = [l[0] + m$2 * Math.cos(n$1), l[1] + m$2 * Math.sin(n$1)], u$2 = [g$1[0] + d$1 * Math.cos(n$1 + Math.PI / 4), g$1[1] + d$1 * Math.sin(n$1 + Math.PI / 4)];
				e.push(.../* @__PURE__ */ this.helper.doubleLineOps(g$1[0], g$1[1], u$2[0], u$2[1], r), .../* @__PURE__ */ this.helper.doubleLineOps(u$2[0], u$2[1], y[0], y[1], r));
			}
		}), e;
	}
}, et = {}, he = class {
	static {
		m(this, "p");
	}
	constructor(t$1) {
		this.seed = t$1;
	}
	next() {
		return this.seed ? (2 ** 31 - 1 & (this.seed = /* @__PURE__ */ Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
	}
}, ar = 0, ee = 1, ve$1 = 2, Ot$2 = {
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
function se(c$1, t$1) {
	return c$1.type === t$1;
}
m(se, "k");
function ue(c$1) {
	let t$1 = [], i = /* @__PURE__ */ function(h) {
		let s$1 = new Array();
		for (; h !== "";) if (h.match(/^([ \t\r\n,]+)/)) h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		else if (h.match(/^([aAcChHlLmMqQsStTvVzZ])/)) s$1[s$1.length] = {
			type: ar,
			text: RegExp.$1
		}, h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		else {
			if (!h.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
			s$1[s$1.length] = {
				type: ee,
				text: `${parseFloat(RegExp.$1)}`
			}, h = /* @__PURE__ */ h.substr(RegExp.$1.length);
		}
		return s$1[s$1.length] = {
			type: ve$1,
			text: ""
		}, s$1;
	}(c$1), r = "BOD", e = 0, a = i[e];
	for (; !se(a, ve$1);) {
		let h = 0, s$1 = [];
		if (r === "BOD") {
			if (a.text !== "M" && a.text !== "m") return ue("M0,0" + c$1);
			e++, h = Ot$2[a.text], r = a.text;
		} else se(a, ee) ? h = Ot$2[r] : (e++, h = Ot$2[a.text], r = a.text);
		if (!(e + h < i.length)) throw new Error("Path data ended short");
		for (let l = e; l < e + h; l++) {
			let o = i[l];
			if (!se(o, ee)) throw new Error("Param not a number: " + r + "," + o.text);
			s$1[s$1.length] = +o.text;
		}
		if (typeof Ot$2[r] != "number") throw new Error("Bad segment: " + r);
		{
			let l = {
				key: r,
				data: s$1
			};
			t$1.push(l), e += h, a = i[e], r === "M" && (r = "L"), r === "m" && (r = "l");
		}
	}
	return t$1;
}
m(ue, "b");
function Ge(c$1) {
	let t$1 = 0, i = 0, r = 0, e = 0, a = [];
	for (let { key: h, data: s$1 } of c$1) switch (h) {
		case "M":
			a.push({
				key: "M",
				data: [...s$1]
			}), [t$1, i] = s$1, [r, e] = s$1;
			break;
		case "m":
			t$1 += s$1[0], i += s$1[1], a.push({
				key: "M",
				data: [t$1, i]
			}), r = t$1, e = i;
			break;
		case "L":
			a.push({
				key: "L",
				data: [...s$1]
			}), [t$1, i] = s$1;
			break;
		case "l":
			t$1 += s$1[0], i += s$1[1], a.push({
				key: "L",
				data: [t$1, i]
			});
			break;
		case "C":
			a.push({
				key: "C",
				data: [...s$1]
			}), t$1 = s$1[4], i = s$1[5];
			break;
		case "c": {
			let l = /* @__PURE__ */ s$1.map((o, n$1) => n$1 % 2 ? o + i : o + t$1);
			a.push({
				key: "C",
				data: l
			}), t$1 = l[4], i = l[5];
			break;
		}
		case "Q":
			a.push({
				key: "Q",
				data: [...s$1]
			}), t$1 = s$1[2], i = s$1[3];
			break;
		case "q": {
			let l = /* @__PURE__ */ s$1.map((o, n$1) => n$1 % 2 ? o + i : o + t$1);
			a.push({
				key: "Q",
				data: l
			}), t$1 = l[2], i = l[3];
			break;
		}
		case "A":
			a.push({
				key: "A",
				data: [...s$1]
			}), t$1 = s$1[5], i = s$1[6];
			break;
		case "a":
			t$1 += s$1[5], i += s$1[6], a.push({
				key: "A",
				data: [
					s$1[0],
					s$1[1],
					s$1[2],
					s$1[3],
					s$1[4],
					t$1,
					i
				]
			});
			break;
		case "H":
			a.push({
				key: "H",
				data: [...s$1]
			}), t$1 = s$1[0];
			break;
		case "h":
			t$1 += s$1[0], a.push({
				key: "H",
				data: [t$1]
			});
			break;
		case "V":
			a.push({
				key: "V",
				data: [...s$1]
			}), i = s$1[0];
			break;
		case "v":
			i += s$1[0], a.push({
				key: "V",
				data: [i]
			});
			break;
		case "S":
			a.push({
				key: "S",
				data: [...s$1]
			}), t$1 = s$1[2], i = s$1[3];
			break;
		case "s": {
			let l = /* @__PURE__ */ s$1.map((o, n$1) => n$1 % 2 ? o + i : o + t$1);
			a.push({
				key: "S",
				data: l
			}), t$1 = l[2], i = l[3];
			break;
		}
		case "T":
			a.push({
				key: "T",
				data: [...s$1]
			}), t$1 = s$1[0], i = s$1[1];
			break;
		case "t":
			t$1 += s$1[0], i += s$1[1], a.push({
				key: "T",
				data: [t$1, i]
			});
			break;
		case "Z":
		case "z": a.push({
			key: "Z",
			data: []
		}), t$1 = r, i = e;
	}
	return a;
}
m(Ge, "y");
function Ee(c$1) {
	let t$1 = [], i = "", r = 0, e = 0, a = 0, h = 0, s$1 = 0, l = 0;
	for (let { key: o, data: n$1 } of c$1) {
		switch (o) {
			case "M":
				t$1.push({
					key: "M",
					data: [...n$1]
				}), [r, e] = n$1, [a, h] = n$1;
				break;
			case "C":
				t$1.push({
					key: "C",
					data: [...n$1]
				}), r = n$1[4], e = n$1[5], s$1 = n$1[2], l = n$1[3];
				break;
			case "L":
				t$1.push({
					key: "L",
					data: [...n$1]
				}), [r, e] = n$1;
				break;
			case "H":
				r = n$1[0], t$1.push({
					key: "L",
					data: [r, e]
				});
				break;
			case "V":
				e = n$1[0], t$1.push({
					key: "L",
					data: [r, e]
				});
				break;
			case "S": {
				let p$1 = 0, f = 0;
				i === "C" || i === "S" ? (p$1 = r + (r - s$1), f = e + (e - l)) : (p$1 = r, f = e), t$1.push({
					key: "C",
					data: [
						p$1,
						f,
						...n$1
					]
				}), s$1 = n$1[0], l = n$1[1], r = n$1[2], e = n$1[3];
				break;
			}
			case "T": {
				let [p$1, f] = n$1, m$2 = 0, d$1 = 0;
				i === "Q" || i === "T" ? (m$2 = r + (r - s$1), d$1 = e + (e - l)) : (m$2 = r, d$1 = e);
				let g$1 = r + 2 * (m$2 - r) / 3, y = e + 2 * (d$1 - e) / 3, u$2 = p$1 + 2 * (m$2 - p$1) / 3, b = f + 2 * (d$1 - f) / 3;
				t$1.push({
					key: "C",
					data: [
						g$1,
						y,
						u$2,
						b,
						p$1,
						f
					]
				}), s$1 = m$2, l = d$1, r = p$1, e = f;
				break;
			}
			case "Q": {
				let [p$1, f, m$2, d$1] = n$1, g$1 = r + 2 * (p$1 - r) / 3, y = e + 2 * (f - e) / 3, u$2 = m$2 + 2 * (p$1 - m$2) / 3, b = d$1 + 2 * (f - d$1) / 3;
				t$1.push({
					key: "C",
					data: [
						g$1,
						y,
						u$2,
						b,
						m$2,
						d$1
					]
				}), s$1 = p$1, l = f, r = m$2, e = d$1;
				break;
			}
			case "A": {
				let p$1 = /* @__PURE__ */ Math.abs(n$1[0]), f = /* @__PURE__ */ Math.abs(n$1[1]), m$2 = n$1[2], d$1 = n$1[3], g$1 = n$1[4], y = n$1[5], u$2 = n$1[6];
				p$1 === 0 || f === 0 ? (t$1.push({
					key: "C",
					data: [
						r,
						e,
						y,
						u$2,
						y,
						u$2
					]
				}), r = y, e = u$2) : (r !== y || e !== u$2) && (je(r, e, y, u$2, p$1, f, m$2, d$1, g$1).forEach(function(b) {
					t$1.push({
						key: "C",
						data: b
					});
				}), r = y, e = u$2);
				break;
			}
			case "Z": t$1.push({
				key: "Z",
				data: []
			}), r = a, e = h;
		}
		i = o;
	}
	return t$1;
}
m(Ee, "m");
function Pt(c$1, t$1, i) {
	return [c$1 * Math.cos(i) - t$1 * Math.sin(i), c$1 * Math.sin(i) + t$1 * Math.cos(i)];
}
m(Pt, "w");
function je(c$1, t$1, i, r, e, a, h, s$1, l, o) {
	let n$1 = (p$1 = h, Math.PI * p$1 / 180);
	var p$1;
	let f = [], m$2 = 0, d$1 = 0, g$1 = 0, y = 0;
	if (o) [m$2, d$1, g$1, y] = o;
	else {
		[c$1, t$1] = /* @__PURE__ */ Pt(c$1, t$1, -n$1), [i, r] = /* @__PURE__ */ Pt(i, r, -n$1);
		let G = (c$1 - i) / 2, j = (t$1 - r) / 2, W = G * G / (e * e) + j * j / (a * a);
		W > 1 && (W = /* @__PURE__ */ Math.sqrt(W), e *= W, a *= W);
		let A = e * e, I$1 = a * a, F = A * I$1 - A * j * j - I$1 * G * G, Q = A * j * j + I$1 * G * G, it = (s$1 === l ? -1 : 1) * Math.sqrt(/* @__PURE__ */ Math.abs(F / Q));
		g$1 = it * e * j / a + (c$1 + i) / 2, y = it * -a * G / e + (t$1 + r) / 2, m$2 = /* @__PURE__ */ Math.asin(/* @__PURE__ */ parseFloat(/* @__PURE__ */ ((t$1 - y) / a).toFixed(9))), d$1 = /* @__PURE__ */ Math.asin(/* @__PURE__ */ parseFloat(/* @__PURE__ */ ((r - y) / a).toFixed(9))), c$1 < g$1 && (m$2 = Math.PI - m$2), i < g$1 && (d$1 = Math.PI - d$1), m$2 < 0 && (m$2 = 2 * Math.PI + m$2), d$1 < 0 && (d$1 = 2 * Math.PI + d$1), l && m$2 > d$1 && (m$2 -= 2 * Math.PI), !l && d$1 > m$2 && (d$1 -= 2 * Math.PI);
	}
	let u$2 = d$1 - m$2;
	if (Math.abs(u$2) > 120 * Math.PI / 180) {
		let G = d$1, j = i, W = r;
		d$1 = l && d$1 > m$2 ? m$2 + 120 * Math.PI / 180 * 1 : m$2 + 120 * Math.PI / 180 * -1, f = /* @__PURE__ */ je(i = g$1 + e * Math.cos(d$1), r = y + a * Math.sin(d$1), j, W, e, a, h, 0, l, [
			d$1,
			G,
			g$1,
			y
		]);
	}
	u$2 = d$1 - m$2;
	let b = /* @__PURE__ */ Math.cos(m$2), S$2 = /* @__PURE__ */ Math.sin(m$2), k = /* @__PURE__ */ Math.cos(d$1), w$1 = /* @__PURE__ */ Math.sin(d$1), B = /* @__PURE__ */ Math.tan(u$2 / 4), T = 4 / 3 * e * B, R = 4 / 3 * a * B, E = [c$1, t$1], L$1 = [c$1 + T * S$2, t$1 - R * b], O = [i + T * w$1, r - R * k], V$1 = [i, r];
	if (L$1[0] = 2 * E[0] - L$1[0], L$1[1] = 2 * E[1] - L$1[1], o) return [
		L$1,
		O,
		V$1
	].concat(f);
	{
		f = /* @__PURE__ */ [
			L$1,
			O,
			V$1
		].concat(f);
		let G = [];
		for (let j = 0; j < f.length; j += 3) {
			let W = /* @__PURE__ */ Pt(f[j][0], f[j][1], n$1), A = /* @__PURE__ */ Pt(f[j + 1][0], f[j + 1][1], n$1), I$1 = /* @__PURE__ */ Pt(f[j + 2][0], f[j + 2][1], n$1);
			G.push([
				W[0],
				W[1],
				A[0],
				A[1],
				I$1[0],
				I$1[1]
			]);
		}
		return G;
	}
}
m(je, "x");
var or = {
	randOffset: /* @__PURE__ */ m(function(c$1, t$1) {
		return _(c$1, t$1);
	}, "randOffset"),
	randOffsetWithRange: /* @__PURE__ */ m(function(c$1, t$1, i) {
		return It(c$1, t$1, i);
	}, "randOffsetWithRange"),
	ellipse: /* @__PURE__ */ m(function(c$1, t$1, i, r, e) {
		return pe(c$1, t$1, e, /* @__PURE__ */ Oe(i, r, e)).opset;
	}, "ellipse"),
	doubleLineOps: /* @__PURE__ */ m(function(c$1, t$1, i, r, e) {
		return ut$1(c$1, t$1, i, r, e, !0);
	}, "doubleLineOps")
};
function Ae(c$1, t$1, i, r, e) {
	return {
		type: "path",
		ops: /* @__PURE__ */ ut$1(c$1, t$1, i, r, e)
	};
}
m(Ae, "v");
function Vt$2(c$1, t$1, i) {
	let r = (c$1 || []).length;
	if (r > 2) {
		let e = [];
		for (let a = 0; a < r - 1; a++) e.push(.../* @__PURE__ */ ut$1(c$1[a][0], c$1[a][1], c$1[a + 1][0], c$1[a + 1][1], i));
		return t$1 && e.push(.../* @__PURE__ */ ut$1(c$1[r - 1][0], c$1[r - 1][1], c$1[0][0], c$1[0][1], i)), {
			type: "path",
			ops: e
		};
	}
	return r === 2 ? Ae(c$1[0][0], c$1[0][1], c$1[1][0], c$1[1][1], i) : {
		type: "path",
		ops: []
	};
}
m(Vt$2, "S");
function ir(c$1, t$1, i, r, e) {
	return function(a, h) {
		return Vt$2(a, !0, h);
	}([
		[c$1, t$1],
		[c$1 + i, t$1],
		[c$1 + i, t$1 + r],
		[c$1, t$1 + r]
	], e);
}
m(ir, "O");
function Me(c$1, t$1) {
	if (c$1.length) {
		let i = typeof c$1[0][0] == "number" ? [c$1] : c$1, r = /* @__PURE__ */ Lt(i[0], 1 * (1 + .2 * t$1.roughness), t$1), e = t$1.disableMultiStroke ? [] : Lt(i[0], 1.5 * (1 + .22 * t$1.roughness), /* @__PURE__ */ Be(t$1));
		for (let a = 1; a < i.length; a++) {
			let h = i[a];
			if (h.length) {
				let s$1 = /* @__PURE__ */ Lt(h, 1 * (1 + .2 * t$1.roughness), t$1), l = t$1.disableMultiStroke ? [] : Lt(h, 1.5 * (1 + .22 * t$1.roughness), /* @__PURE__ */ Be(t$1));
				for (let o of s$1) o.op !== "move" && r.push(o);
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
m(Me, "L");
function Oe(c$1, t$1, i) {
	let r = /* @__PURE__ */ Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(c$1 / 2, 2) + Math.pow(t$1 / 2, 2)) / 2)), e = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ Math.max(i.curveStepCount, i.curveStepCount / Math.sqrt(200) * r)), a = 2 * Math.PI / e, h = /* @__PURE__ */ Math.abs(c$1 / 2), s$1 = /* @__PURE__ */ Math.abs(t$1 / 2), l = 1 - i.curveFitting;
	return h += /* @__PURE__ */ _(h * l, i), s$1 += /* @__PURE__ */ _(s$1 * l, i), {
		increment: a,
		rx: h,
		ry: s$1
	};
}
m(Oe, "T");
function pe(c$1, t$1, i, r) {
	let [e, a] = Ce(r.increment, c$1, t$1, r.rx, r.ry, 1, r.increment * It(.1, /* @__PURE__ */ It(.4, 1, i), i), i), h = /* @__PURE__ */ Ft(e, null, i);
	if (!i.disableMultiStroke && i.roughness !== 0) {
		let [s$1] = Ce(r.increment, c$1, t$1, r.rx, r.ry, 1.5, 0, i), l = /* @__PURE__ */ Ft(s$1, null, i);
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
m(pe, "D");
function ke(c$1, t$1, i, r, e, a, h, s$1, l) {
	let o = c$1, n$1 = t$1, p$1 = /* @__PURE__ */ Math.abs(i / 2), f = /* @__PURE__ */ Math.abs(r / 2);
	p$1 += /* @__PURE__ */ _(.01 * p$1, l), f += /* @__PURE__ */ _(.01 * f, l);
	let m$2 = e, d$1 = a;
	for (; m$2 < 0;) m$2 += 2 * Math.PI, d$1 += 2 * Math.PI;
	d$1 - m$2 > 2 * Math.PI && (m$2 = 0, d$1 = 2 * Math.PI);
	let g$1 = 2 * Math.PI / l.curveStepCount, y = /* @__PURE__ */ Math.min(g$1 / 2, (d$1 - m$2) / 2), u$2 = /* @__PURE__ */ Te(y, o, n$1, p$1, f, m$2, d$1, 1, l);
	if (!l.disableMultiStroke) {
		let b = /* @__PURE__ */ Te(y, o, n$1, p$1, f, m$2, d$1, 1.5, l);
		u$2.push(...b);
	}
	return h && (s$1 ? u$2.push(.../* @__PURE__ */ ut$1(o, n$1, o + p$1 * Math.cos(m$2), n$1 + f * Math.sin(m$2), l), .../* @__PURE__ */ ut$1(o, n$1, o + p$1 * Math.cos(d$1), n$1 + f * Math.sin(d$1), l)) : u$2.push({
		op: "lineTo",
		data: [o, n$1]
	}, {
		op: "lineTo",
		data: [o + p$1 * Math.cos(m$2), n$1 + f * Math.sin(m$2)]
	})), {
		type: "path",
		ops: u$2
	};
}
m(ke, "A");
function Pe(c$1, t$1) {
	let i = /* @__PURE__ */ Ee(/* @__PURE__ */ Ge(/* @__PURE__ */ ue(c$1))), r = [], e = [0, 0], a = [0, 0];
	for (let { key: h, data: s$1 } of i) switch (h) {
		case "M":
			a = [s$1[0], s$1[1]], e = [s$1[0], s$1[1]];
			break;
		case "L":
			r.push(.../* @__PURE__ */ ut$1(a[0], a[1], s$1[0], s$1[1], t$1)), a = [s$1[0], s$1[1]];
			break;
		case "C": {
			let [l, o, n$1, p$1, f, m$2] = s$1;
			r.push(.../* @__PURE__ */ nr$1(l, o, n$1, p$1, f, m$2, a, t$1)), a = [f, m$2];
			break;
		}
		case "Z": r.push(.../* @__PURE__ */ ut$1(a[0], a[1], e[0], e[1], t$1)), a = [e[0], e[1]];
	}
	return {
		type: "path",
		ops: r
	};
}
m(Pe, "_");
function re(c$1, t$1) {
	let i = [];
	for (let r of c$1) if (r.length) {
		let e = t$1.maxRandomnessOffset || 0, a = r.length;
		if (a > 2) {
			i.push({
				op: "move",
				data: [r[0][0] + _(e, t$1), r[0][1] + _(e, t$1)]
			});
			for (let h = 1; h < a; h++) i.push({
				op: "lineTo",
				data: [r[h][0] + _(e, t$1), r[h][1] + _(e, t$1)]
			});
		}
	}
	return {
		type: "fillPath",
		ops: i
	};
}
m(re, "I");
function vt$1(c$1, t$1) {
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
	})(t$1, or).fillPolygons(c$1, t$1);
}
m(vt$1, "C");
function Be(c$1) {
	let t$1 = /* @__PURE__ */ Object.assign({}, c$1);
	return t$1.randomizer = void 0, c$1.seed && (t$1.seed = c$1.seed + 1), t$1;
}
m(Be, "z");
function Le(c$1) {
	return c$1.randomizer || (c$1.randomizer = new he(c$1.seed || 0)), c$1.randomizer.next();
}
m(Le, "W");
function It(c$1, t$1, i, r = 1) {
	return i.roughness * r * (Le(i) * (t$1 - c$1) + c$1);
}
m(It, "E");
function _(c$1, t$1, i = 1) {
	return It(-c$1, c$1, t$1, i);
}
m(_, "G");
function ut$1(c$1, t$1, i, r, e, a = !1) {
	let h = a ? e.disableMultiStrokeFill : e.disableMultiStroke, s$1 = /* @__PURE__ */ me(c$1, t$1, i, r, e, !0, !1);
	if (h) return s$1;
	let l = /* @__PURE__ */ me(c$1, t$1, i, r, e, !0, !0);
	return s$1.concat(l);
}
m(ut$1, "$");
function me(c$1, t$1, i, r, e, a, h) {
	let s$1 = Math.pow(c$1 - i, 2) + Math.pow(t$1 - r, 2), l = /* @__PURE__ */ Math.sqrt(s$1), o = 1;
	o = l < 200 ? 1 : l > 500 ? .4 : -.0016668 * l + 1.233334;
	let n$1 = e.maxRandomnessOffset || 0;
	n$1 * n$1 * 100 > s$1 && (n$1 = l / 10);
	let p$1 = n$1 / 2, f = .2 + .2 * Le(e), m$2 = e.bowing * e.maxRandomnessOffset * (r - t$1) / 200, d$1 = e.bowing * e.maxRandomnessOffset * (c$1 - i) / 200;
	m$2 = /* @__PURE__ */ _(m$2, e, o), d$1 = /* @__PURE__ */ _(d$1, e, o);
	let g$1 = [], y = /* @__PURE__ */ m(() => _(p$1, e, o), "M"), u$2 = /* @__PURE__ */ m(() => _(n$1, e, o), "k"), b = e.preserveVertices;
	return a && (h ? g$1.push({
		op: "move",
		data: [c$1 + (b ? 0 : y()), t$1 + (b ? 0 : y())]
	}) : g$1.push({
		op: "move",
		data: [c$1 + (b ? 0 : _(n$1, e, o)), t$1 + (b ? 0 : _(n$1, e, o))]
	})), h ? g$1.push({
		op: "bcurveTo",
		data: [
			m$2 + c$1 + (i - c$1) * f + y(),
			d$1 + t$1 + (r - t$1) * f + y(),
			m$2 + c$1 + 2 * (i - c$1) * f + y(),
			d$1 + t$1 + 2 * (r - t$1) * f + y(),
			i + (b ? 0 : y()),
			r + (b ? 0 : y())
		]
	}) : g$1.push({
		op: "bcurveTo",
		data: [
			m$2 + c$1 + (i - c$1) * f + u$2(),
			d$1 + t$1 + (r - t$1) * f + u$2(),
			m$2 + c$1 + 2 * (i - c$1) * f + u$2(),
			d$1 + t$1 + 2 * (r - t$1) * f + u$2(),
			i + (b ? 0 : u$2()),
			r + (b ? 0 : u$2())
		]
	}), g$1;
}
m(me, "R");
function Lt(c$1, t$1, i) {
	if (!c$1.length) return [];
	let r = [];
	r.push([c$1[0][0] + _(t$1, i), c$1[0][1] + _(t$1, i)]), r.push([c$1[0][0] + _(t$1, i), c$1[0][1] + _(t$1, i)]);
	for (let e = 1; e < c$1.length; e++) r.push([c$1[e][0] + _(t$1, i), c$1[e][1] + _(t$1, i)]), e === c$1.length - 1 && r.push([c$1[e][0] + _(t$1, i), c$1[e][1] + _(t$1, i)]);
	return Ft(r, null, i);
}
m(Lt, "j");
function Ft(c$1, t$1, i) {
	let r = c$1.length, e = [];
	if (r > 3) {
		let a = [], h = 1 - i.curveTightness;
		e.push({
			op: "move",
			data: [c$1[1][0], c$1[1][1]]
		});
		for (let s$1 = 1; s$1 + 2 < r; s$1++) {
			let l = c$1[s$1];
			a[0] = [l[0], l[1]], a[1] = [l[0] + (h * c$1[s$1 + 1][0] - h * c$1[s$1 - 1][0]) / 6, l[1] + (h * c$1[s$1 + 1][1] - h * c$1[s$1 - 1][1]) / 6], a[2] = [c$1[s$1 + 1][0] + (h * c$1[s$1][0] - h * c$1[s$1 + 2][0]) / 6, c$1[s$1 + 1][1] + (h * c$1[s$1][1] - h * c$1[s$1 + 2][1]) / 6], a[3] = [c$1[s$1 + 1][0], c$1[s$1 + 1][1]], e.push({
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
		if (t$1 && t$1.length === 2) {
			let s$1 = i.maxRandomnessOffset;
			e.push({
				op: "lineTo",
				data: [t$1[0] + _(s$1, i), t$1[1] + _(s$1, i)]
			});
		}
	} else r === 3 ? (e.push({
		op: "move",
		data: [c$1[1][0], c$1[1][1]]
	}), e.push({
		op: "bcurveTo",
		data: [
			c$1[1][0],
			c$1[1][1],
			c$1[2][0],
			c$1[2][1],
			c$1[2][0],
			c$1[2][1]
		]
	})) : r === 2 && e.push(.../* @__PURE__ */ me(c$1[0][0], c$1[0][1], c$1[1][0], c$1[1][1], i, !0, !0));
	return e;
}
m(Ft, "q");
function Ce(c$1, t$1, i, r, e, a, h, s$1) {
	let l = [], o = [];
	if (s$1.roughness === 0) {
		c$1 /= 4, o.push([t$1 + r * Math.cos(-c$1), i + e * Math.sin(-c$1)]);
		for (let n$1 = 0; n$1 <= 2 * Math.PI; n$1 += c$1) {
			let p$1 = [t$1 + r * Math.cos(n$1), i + e * Math.sin(n$1)];
			l.push(p$1), o.push(p$1);
		}
		o.push([t$1 + r * Math.cos(0), i + e * Math.sin(0)]), o.push([t$1 + r * Math.cos(c$1), i + e * Math.sin(c$1)]);
	} else {
		let n$1 = _(.5, s$1) - Math.PI / 2;
		o.push([_(a, s$1) + t$1 + .9 * r * Math.cos(n$1 - c$1), _(a, s$1) + i + .9 * e * Math.sin(n$1 - c$1)]);
		let p$1 = 2 * Math.PI + n$1 - .01;
		for (let f = n$1; f < p$1; f += c$1) {
			let m$2 = [_(a, s$1) + t$1 + r * Math.cos(f), _(a, s$1) + i + e * Math.sin(f)];
			l.push(m$2), o.push(m$2);
		}
		o.push([_(a, s$1) + t$1 + r * Math.cos(n$1 + 2 * Math.PI + .5 * h), _(a, s$1) + i + e * Math.sin(n$1 + 2 * Math.PI + .5 * h)]), o.push([_(a, s$1) + t$1 + .98 * r * Math.cos(n$1 + h), _(a, s$1) + i + .98 * e * Math.sin(n$1 + h)]), o.push([_(a, s$1) + t$1 + .9 * r * Math.cos(n$1 + .5 * h), _(a, s$1) + i + .9 * e * Math.sin(n$1 + .5 * h)]);
	}
	return [o, l];
}
m(Ce, "F");
function Te(c$1, t$1, i, r, e, a, h, s$1, l) {
	let o = a + _(.1, l), n$1 = [];
	n$1.push([_(s$1, l) + t$1 + .9 * r * Math.cos(o - c$1), _(s$1, l) + i + .9 * e * Math.sin(o - c$1)]);
	for (let p$1 = o; p$1 <= h; p$1 += c$1) n$1.push([_(s$1, l) + t$1 + r * Math.cos(p$1), _(s$1, l) + i + e * Math.sin(p$1)]);
	return n$1.push([t$1 + r * Math.cos(h), i + e * Math.sin(h)]), n$1.push([t$1 + r * Math.cos(h), i + e * Math.sin(h)]), Ft(n$1, null, l);
}
m(Te, "V");
function nr$1(c$1, t$1, i, r, e, a, h, s$1) {
	let l = [], o = [s$1.maxRandomnessOffset || 1, (s$1.maxRandomnessOffset || 1) + .3], n$1 = [0, 0], p$1 = s$1.disableMultiStroke ? 1 : 2, f = s$1.preserveVertices;
	for (let m$2 = 0; m$2 < p$1; m$2++) m$2 === 0 ? l.push({
		op: "move",
		data: [h[0], h[1]]
	}) : l.push({
		op: "move",
		data: [h[0] + (f ? 0 : _(o[0], s$1)), h[1] + (f ? 0 : _(o[0], s$1))]
	}), n$1 = f ? [e, a] : [e + _(o[m$2], s$1), a + _(o[m$2], s$1)], l.push({
		op: "bcurveTo",
		data: [
			c$1 + _(o[m$2], s$1),
			t$1 + _(o[m$2], s$1),
			i + _(o[m$2], s$1),
			r + _(o[m$2], s$1),
			n$1[0],
			n$1[1]
		]
	});
	return l;
}
m(nr$1, "Z");
function Bt(c$1) {
	return [...c$1];
}
m(Bt, "Q");
function Re(c$1, t$1 = 0) {
	let i = c$1.length;
	if (i < 3) throw new Error("A curve must have at least three points.");
	let r = [];
	if (i === 3) r.push(/* @__PURE__ */ Bt(c$1[0]), /* @__PURE__ */ Bt(c$1[1]), /* @__PURE__ */ Bt(c$1[2]), /* @__PURE__ */ Bt(c$1[2]));
	else {
		let e = [];
		e.push(c$1[0], c$1[0]);
		for (let s$1 = 1; s$1 < c$1.length; s$1++) e.push(c$1[s$1]), s$1 === c$1.length - 1 && e.push(c$1[s$1]);
		let a = [], h = 1 - t$1;
		r.push(/* @__PURE__ */ Bt(e[0]));
		for (let s$1 = 1; s$1 + 2 < e.length; s$1++) {
			let l = e[s$1];
			a[0] = [l[0], l[1]], a[1] = [l[0] + (h * e[s$1 + 1][0] - h * e[s$1 - 1][0]) / 6, l[1] + (h * e[s$1 + 1][1] - h * e[s$1 - 1][1]) / 6], a[2] = [e[s$1 + 1][0] + (h * e[s$1][0] - h * e[s$1 + 2][0]) / 6, e[s$1 + 1][1] + (h * e[s$1][1] - h * e[s$1 + 2][1]) / 6], a[3] = [e[s$1 + 1][0], e[s$1 + 1][1]], r.push(a[1], a[2], a[3]);
		}
	}
	return r;
}
m(Re, "H");
function Wt(c$1, t$1) {
	return Math.pow(c$1[0] - t$1[0], 2) + Math.pow(c$1[1] - t$1[1], 2);
}
m(Wt, "N");
function lr(c$1, t$1, i) {
	let r = /* @__PURE__ */ Wt(t$1, i);
	if (r === 0) return Wt(c$1, t$1);
	let e = ((c$1[0] - t$1[0]) * (i[0] - t$1[0]) + (c$1[1] - t$1[1]) * (i[1] - t$1[1])) / r;
	return e = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(1, e)), Wt(c$1, /* @__PURE__ */ $t$1(t$1, i, e));
}
m(lr, "B");
function $t$1(c$1, t$1, i) {
	return [c$1[0] + (t$1[0] - c$1[0]) * i, c$1[1] + (t$1[1] - c$1[1]) * i];
}
m($t$1, "J");
function fe(c$1, t$1, i, r) {
	let e = r || [];
	if (function(s$1, l) {
		let o = s$1[l + 0], n$1 = s$1[l + 1], p$1 = s$1[l + 2], f = s$1[l + 3], m$2 = 3 * n$1[0] - 2 * o[0] - f[0];
		m$2 *= m$2;
		let d$1 = 3 * n$1[1] - 2 * o[1] - f[1];
		d$1 *= d$1;
		let g$1 = 3 * p$1[0] - 2 * f[0] - o[0];
		g$1 *= g$1;
		let y = 3 * p$1[1] - 2 * f[1] - o[1];
		return y *= y, m$2 < g$1 && (m$2 = g$1), d$1 < y && (d$1 = y), m$2 + d$1;
	}(c$1, t$1) < i) {
		let s$1 = c$1[t$1 + 0];
		e.length ? (a = e[e.length - 1], h = s$1, Math.sqrt(/* @__PURE__ */ Wt(a, h)) > 1 && e.push(s$1)) : e.push(s$1), e.push(c$1[t$1 + 3]);
	} else {
		let l = c$1[t$1 + 0], o = c$1[t$1 + 1], n$1 = c$1[t$1 + 2], p$1 = c$1[t$1 + 3], f = /* @__PURE__ */ $t$1(l, o, .5), m$2 = /* @__PURE__ */ $t$1(o, n$1, .5), d$1 = /* @__PURE__ */ $t$1(n$1, p$1, .5), g$1 = /* @__PURE__ */ $t$1(f, m$2, .5), y = /* @__PURE__ */ $t$1(m$2, d$1, .5), u$2 = /* @__PURE__ */ $t$1(g$1, y, .5);
		fe([
			l,
			f,
			g$1,
			u$2
		], 0, i, e), fe([
			u$2,
			y,
			d$1,
			p$1
		], 0, i, e);
	}
	var a, h;
	return e;
}
m(fe, "K");
function cr$1(c$1, t$1) {
	return _t$1(c$1, 0, c$1.length, t$1);
}
m(cr$1, "U");
function _t$1(c$1, t$1, i, r, e) {
	let a = e || [], h = c$1[t$1], s$1 = c$1[i - 1], l = 0, o = 1;
	for (let n$1 = t$1 + 1; n$1 < i - 1; ++n$1) {
		let p$1 = /* @__PURE__ */ lr(c$1[n$1], h, s$1);
		p$1 > l && (l = p$1, o = n$1);
	}
	return Math.sqrt(l) > r ? (_t$1(c$1, t$1, o + 1, r, a), _t$1(c$1, o, i, r, a)) : (a.length || a.push(h), a.push(s$1)), a;
}
m(_t$1, "X");
function ae(c$1, t$1 = .15, i) {
	let r = [], e = (c$1.length - 1) / 3;
	for (let a = 0; a < e; a++) fe(c$1, 3 * a, t$1, r);
	return i && i > 0 ? _t$1(r, 0, r.length, i) : r;
}
m(ae, "Y");
var ot$1 = "none", Mt = class {
	static {
		m(this, "et");
	}
	constructor(t$1) {
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
		}, this.config = t$1 || {}, this.config.options && (this.defaultOptions = /* @__PURE__ */ this._o(this.config.options));
	}
	static newSeed() {
		return Math.floor(Math.random() * 2 ** 31);
	}
	_o(t$1) {
		return t$1 ? Object.assign({}, this.defaultOptions, t$1) : this.defaultOptions;
	}
	_d(t$1, i, r) {
		return {
			shape: t$1,
			sets: i || [],
			options: r || this.defaultOptions
		};
	}
	line(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a);
		return this._d("line", [/* @__PURE__ */ Ae(t$1, i, r, e, h)], h);
	}
	rectangle(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a), s$1 = [], l = /* @__PURE__ */ ir(t$1, i, r, e, h);
		if (h.fill) {
			let o = [
				[t$1, i],
				[t$1 + r, i],
				[t$1 + r, i + e],
				[t$1, i + e]
			];
			h.fillStyle === "solid" ? s$1.push(/* @__PURE__ */ re([o], h)) : s$1.push(/* @__PURE__ */ vt$1([o], h));
		}
		return h.stroke !== ot$1 && s$1.push(l), this._d("rectangle", s$1, h);
	}
	ellipse(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this._o(a), s$1 = [], l = /* @__PURE__ */ Oe(r, e, h), o = /* @__PURE__ */ pe(t$1, i, h, l);
		if (h.fill) if (h.fillStyle === "solid") {
			let n$1 = pe(t$1, i, h, l).opset;
			n$1.type = "fillPath", s$1.push(n$1);
		} else s$1.push(/* @__PURE__ */ vt$1([o.estimatedPoints], h));
		return h.stroke !== ot$1 && s$1.push(o.opset), this._d("ellipse", s$1, h);
	}
	circle(t$1, i, r, e) {
		let a = /* @__PURE__ */ this.ellipse(t$1, i, r, r, e);
		return a.shape = "circle", a;
	}
	linearPath(t$1, i) {
		let r = /* @__PURE__ */ this._o(i);
		return this._d("linearPath", [/* @__PURE__ */ Vt$2(t$1, !1, r)], r);
	}
	arc(t$1, i, r, e, a, h, s$1 = !1, l) {
		let o = /* @__PURE__ */ this._o(l), n$1 = [], p$1 = /* @__PURE__ */ ke(t$1, i, r, e, a, h, s$1, !0, o);
		if (s$1 && o.fill) if (o.fillStyle === "solid") {
			let f = /* @__PURE__ */ Object.assign({}, o);
			f.disableMultiStroke = !0;
			let m$2 = /* @__PURE__ */ ke(t$1, i, r, e, a, h, !0, !1, f);
			m$2.type = "fillPath", n$1.push(m$2);
		} else n$1.push(/* @__PURE__ */ function(f, m$2, d$1, g$1, y, u$2, b) {
			let S$2 = f, k = m$2, w$1 = /* @__PURE__ */ Math.abs(d$1 / 2), B = /* @__PURE__ */ Math.abs(g$1 / 2);
			w$1 += /* @__PURE__ */ _(.01 * w$1, b), B += /* @__PURE__ */ _(.01 * B, b);
			let T = y, R = u$2;
			for (; T < 0;) T += 2 * Math.PI, R += 2 * Math.PI;
			R - T > 2 * Math.PI && (T = 0, R = 2 * Math.PI);
			let E = (R - T) / b.curveStepCount, L$1 = [];
			for (let O = T; O <= R; O += E) L$1.push([S$2 + w$1 * Math.cos(O), k + B * Math.sin(O)]);
			return L$1.push([S$2 + w$1 * Math.cos(R), k + B * Math.sin(R)]), L$1.push([S$2, k]), vt$1([L$1], b);
		}(t$1, i, r, e, a, h, o));
		return o.stroke !== ot$1 && n$1.push(p$1), this._d("arc", n$1, o);
	}
	curve(t$1, i) {
		let r = /* @__PURE__ */ this._o(i), e = [], a = /* @__PURE__ */ Me(t$1, r);
		if (r.fill && r.fill !== ot$1) if (r.fillStyle === "solid") {
			let h = /* @__PURE__ */ Me(t$1, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
				disableMultiStroke: !0,
				roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
			}));
			e.push({
				type: "fillPath",
				ops: /* @__PURE__ */ this._mergedShape(h.ops)
			});
		} else {
			let h = [], s$1 = t$1;
			if (s$1.length) {
				let l = typeof s$1[0][0] == "number" ? [s$1] : s$1;
				for (let o of l) o.length < 3 ? h.push(...o) : o.length === 3 ? h.push(.../* @__PURE__ */ ae(/* @__PURE__ */ Re([
					o[0],
					o[0],
					o[1],
					o[2]
				]), 10, (1 + r.roughness) / 2)) : h.push(.../* @__PURE__ */ ae(/* @__PURE__ */ Re(o), 10, (1 + r.roughness) / 2));
			}
			h.length && e.push(/* @__PURE__ */ vt$1([h], r));
		}
		return r.stroke !== ot$1 && e.push(a), this._d("curve", e, r);
	}
	polygon(t$1, i) {
		let r = /* @__PURE__ */ this._o(i), e = [], a = /* @__PURE__ */ Vt$2(t$1, !0, r);
		return r.fill && (r.fillStyle === "solid" ? e.push(/* @__PURE__ */ re([t$1], r)) : e.push(/* @__PURE__ */ vt$1([t$1], r))), r.stroke !== ot$1 && e.push(a), this._d("polygon", e, r);
	}
	path(t$1, i) {
		let r = /* @__PURE__ */ this._o(i), e = [];
		if (!t$1) return this._d("path", e, r);
		t$1 = /* @__PURE__ */ (t$1 || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		let a = r.fill && r.fill !== "transparent" && r.fill !== ot$1, h = r.stroke !== ot$1, s$1 = !!(r.simplification && r.simplification < 1), l = /* @__PURE__ */ function(n$1, p$1, f) {
			let m$2 = /* @__PURE__ */ Ee(/* @__PURE__ */ Ge(/* @__PURE__ */ ue(n$1))), d$1 = [], g$1 = [], y = [0, 0], u$2 = [], b = /* @__PURE__ */ m(() => {
				u$2.length >= 4 && g$1.push(.../* @__PURE__ */ ae(u$2, p$1)), u$2 = [];
			}, "i"), S$2 = /* @__PURE__ */ m(() => {
				b(), g$1.length && (d$1.push(g$1), g$1 = []);
			}, "c");
			for (let { key: w$1, data: B } of m$2) switch (w$1) {
				case "M":
					S$2(), y = [B[0], B[1]], g$1.push(y);
					break;
				case "L":
					b(), g$1.push([B[0], B[1]]);
					break;
				case "C":
					if (!u$2.length) {
						let T = g$1.length ? g$1[g$1.length - 1] : y;
						u$2.push([T[0], T[1]]);
					}
					u$2.push([B[0], B[1]]), u$2.push([B[2], B[3]]), u$2.push([B[4], B[5]]);
					break;
				case "Z": b(), g$1.push([y[0], y[1]]);
			}
			if (S$2(), !f) return d$1;
			let k = [];
			for (let w$1 of d$1) {
				let B = /* @__PURE__ */ cr$1(w$1, f);
				B.length && k.push(B);
			}
			return k;
		}(t$1, 1, s$1 ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), o = /* @__PURE__ */ Pe(t$1, r);
		if (a) if (r.fillStyle === "solid") if (l.length === 1) {
			let n$1 = /* @__PURE__ */ Pe(t$1, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
				disableMultiStroke: !0,
				roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
			}));
			e.push({
				type: "fillPath",
				ops: /* @__PURE__ */ this._mergedShape(n$1.ops)
			});
		} else e.push(/* @__PURE__ */ re(l, r));
		else e.push(/* @__PURE__ */ vt$1(l, r));
		return h && (s$1 ? l.forEach((n$1) => {
			e.push(/* @__PURE__ */ Vt$2(n$1, !1, r));
		}) : e.push(o)), this._d("path", e, r);
	}
	opsToPath(t$1, i) {
		let r = "";
		for (let e of t$1.ops) {
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
	toPaths(t$1) {
		let i = t$1.sets || [], r = t$1.options || this.defaultOptions, e = [];
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
	fillSketch(t$1, i) {
		let r = i.fillWeight;
		return r < 0 && (r = i.strokeWidth / 2), {
			d: /* @__PURE__ */ this.opsToPath(t$1),
			stroke: i.fill || ot$1,
			strokeWidth: r,
			fill: ot$1
		};
	}
	_mergedShape(t$1) {
		return t$1.filter((i, r) => r === 0 || i.op !== "move");
	}
}, de = class {
	static {
		m(this, "st");
	}
	constructor(t$1, i) {
		this.canvas = t$1, this.ctx = /* @__PURE__ */ this.canvas.getContext("2d"), this.gen = new Mt(i);
	}
	draw(t$1) {
		let i = t$1.sets || [], r = t$1.options || this.getDefaultOptions(), e = this.ctx, a = t$1.options.fixedDecimalPlaceDigits;
		for (let h of i) switch (h.type) {
			case "path":
				e.save(), e.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, e.lineWidth = r.strokeWidth, r.strokeLineDash && e.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (e.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(e, h, a), e.restore();
				break;
			case "fillPath": {
				e.save(), e.fillStyle = r.fill || "";
				let s$1 = t$1.shape === "curve" || t$1.shape === "polygon" || t$1.shape === "path" ? "evenodd" : "nonzero";
				this._drawToContext(e, h, a, s$1), e.restore();
				break;
			}
			case "fillSketch": this.fillSketch(e, h, r);
		}
	}
	fillSketch(t$1, i, r) {
		let e = r.fillWeight;
		e < 0 && (e = r.strokeWidth / 2), t$1.save(), r.fillLineDash && t$1.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t$1.lineDashOffset = r.fillLineDashOffset), t$1.strokeStyle = r.fill || "", t$1.lineWidth = e, this._drawToContext(t$1, i, r.fixedDecimalPlaceDigits), t$1.restore();
	}
	_drawToContext(t$1, i, r, e = "nonzero") {
		t$1.beginPath();
		for (let a of i.ops) {
			let h = typeof r == "number" && r >= 0 ? a.data.map((s$1) => +s$1.toFixed(r)) : a.data;
			switch (a.op) {
				case "move":
					t$1.moveTo(h[0], h[1]);
					break;
				case "bcurveTo":
					t$1.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
					break;
				case "lineTo": t$1.lineTo(h[0], h[1]);
			}
		}
		i.type === "fillPath" ? t$1.fill(e) : t$1.stroke();
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	line(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.line(t$1, i, r, e, a);
		return this.draw(h), h;
	}
	rectangle(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.rectangle(t$1, i, r, e, a);
		return this.draw(h), h;
	}
	ellipse(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.ellipse(t$1, i, r, e, a);
		return this.draw(h), h;
	}
	circle(t$1, i, r, e) {
		let a = /* @__PURE__ */ this.gen.circle(t$1, i, r, e);
		return this.draw(a), a;
	}
	linearPath(t$1, i) {
		let r = /* @__PURE__ */ this.gen.linearPath(t$1, i);
		return this.draw(r), r;
	}
	polygon(t$1, i) {
		let r = /* @__PURE__ */ this.gen.polygon(t$1, i);
		return this.draw(r), r;
	}
	arc(t$1, i, r, e, a, h, s$1 = !1, l) {
		let o = /* @__PURE__ */ this.gen.arc(t$1, i, r, e, a, h, s$1, l);
		return this.draw(o), o;
	}
	curve(t$1, i) {
		let r = /* @__PURE__ */ this.gen.curve(t$1, i);
		return this.draw(r), r;
	}
	path(t$1, i) {
		let r = /* @__PURE__ */ this.gen.path(t$1, i);
		return this.draw(r), r;
	}
}, Ht = "http://www.w3.org/2000/svg", ge = class {
	static {
		m(this, "ot");
	}
	constructor(t$1, i) {
		this.svg = t$1, this.gen = new Mt(i);
	}
	draw(t$1) {
		let i = t$1.sets || [], r = t$1.options || this.getDefaultOptions(), e = this.svg.ownerDocument || window.document, a = /* @__PURE__ */ e.createElementNS(Ht, "g"), h = t$1.options.fixedDecimalPlaceDigits;
		for (let s$1 of i) {
			let l = null;
			switch (s$1.type) {
				case "path":
					l = /* @__PURE__ */ e.createElementNS(Ht, "path"), l.setAttribute("d", /* @__PURE__ */ this.opsToPath(s$1, h)), l.setAttribute("stroke", r.stroke), l.setAttribute("stroke-width", r.strokeWidth + ""), l.setAttribute("fill", "none"), r.strokeLineDash && l.setAttribute("stroke-dasharray", /* @__PURE__ */ r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
					break;
				case "fillPath":
					l = /* @__PURE__ */ e.createElementNS(Ht, "path"), l.setAttribute("d", /* @__PURE__ */ this.opsToPath(s$1, h)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", r.fill || ""), t$1.shape !== "curve" && t$1.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
					break;
				case "fillSketch": l = /* @__PURE__ */ this.fillSketch(e, s$1, r);
			}
			l && a.appendChild(l);
		}
		return a;
	}
	fillSketch(t$1, i, r) {
		let e = r.fillWeight;
		e < 0 && (e = r.strokeWidth / 2);
		let a = /* @__PURE__ */ t$1.createElementNS(Ht, "path");
		return a.setAttribute("d", /* @__PURE__ */ this.opsToPath(i, r.fixedDecimalPlaceDigits)), a.setAttribute("stroke", r.fill || ""), a.setAttribute("stroke-width", e + ""), a.setAttribute("fill", "none"), r.fillLineDash && a.setAttribute("stroke-dasharray", /* @__PURE__ */ r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), a;
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	opsToPath(t$1, i) {
		return this.gen.opsToPath(t$1, i);
	}
	line(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.line(t$1, i, r, e, a);
		return this.draw(h);
	}
	rectangle(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.rectangle(t$1, i, r, e, a);
		return this.draw(h);
	}
	ellipse(t$1, i, r, e, a) {
		let h = /* @__PURE__ */ this.gen.ellipse(t$1, i, r, e, a);
		return this.draw(h);
	}
	circle(t$1, i, r, e) {
		let a = /* @__PURE__ */ this.gen.circle(t$1, i, r, e);
		return this.draw(a);
	}
	linearPath(t$1, i) {
		let r = /* @__PURE__ */ this.gen.linearPath(t$1, i);
		return this.draw(r);
	}
	polygon(t$1, i) {
		let r = /* @__PURE__ */ this.gen.polygon(t$1, i);
		return this.draw(r);
	}
	arc(t$1, i, r, e, a, h, s$1 = !1, l) {
		let o = /* @__PURE__ */ this.gen.arc(t$1, i, r, e, a, h, s$1, l);
		return this.draw(o);
	}
	curve(t$1, i) {
		let r = /* @__PURE__ */ this.gen.curve(t$1, i);
		return this.draw(r);
	}
	path(t$1, i) {
		let r = /* @__PURE__ */ this.gen.path(t$1, i);
		return this.draw(r);
	}
}, v = {
	canvas: /* @__PURE__ */ m((c$1, t$1) => new de(c$1, t$1), "canvas"),
	svg: /* @__PURE__ */ m((c$1, t$1) => new ge(c$1, t$1), "svg"),
	generator: /* @__PURE__ */ m((c$1) => new Mt(c$1), "generator"),
	newSeed: /* @__PURE__ */ m(() => Mt.newSeed(), "newSeed")
};
var yt = /* @__PURE__ */ m((c$1, t$1) => {
	var i = c$1.x, r = c$1.y, e = t$1.x - i, a = t$1.y - r, h = c$1.width / 2, s$1 = c$1.height / 2, l, o;
	return Math.abs(a) * h > Math.abs(e) * s$1 ? (a < 0 && (s$1 = -s$1), l = a === 0 ? 0 : s$1 * e / a, o = s$1) : (e < 0 && (h = -h), l = h, o = e === 0 ? 0 : h * a / e), {
		x: i + l,
		y: r + o
	};
}, "intersectRect");
function pr$1(c$1, t$1) {
	t$1 && c$1.attr("style", t$1);
}
m(pr$1, "applyStyle");
async function mr$1(c$1) {
	let t$1 = /* @__PURE__ */ ia(/* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), i = /* @__PURE__ */ t$1.append("xhtml:div"), r = /* @__PURE__ */ mr(), e = c$1.label;
	c$1.label && nr(c$1.label) && (e = await qo(/* @__PURE__ */ c$1.label.replace(hn.lineBreakRegex, `
`), r));
	let h = "<span class=\"" + (c$1.isNode ? "nodeLabel" : "edgeLabel") + "\" " + (c$1.labelStyle ? "style=\"" + c$1.labelStyle + "\"" : "") + ">" + e + "</span>";
	return i.html(/* @__PURE__ */ ot(h, r)), pr$1(i, c$1.labelStyle), i.style("display", "inline-block"), i.style("padding-right", "1px"), i.style("white-space", "nowrap"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), t$1.node();
}
m(mr$1, "addHtmlLabel");
var Rt = /* @__PURE__ */ m(async (c$1, t$1, i, r) => {
	let e = c$1 || "";
	if (typeof e == "object" && (e = e[0]), Mo(mr().flowchart.htmlLabels)) {
		e = /* @__PURE__ */ e.replace(/\\n|\n/g, "<br />"), pt.info("vertexText" + e);
		return await mr$1({
			isNode: r,
			label: /* @__PURE__ */ Yt(e).replace(/fa[blrs]?:fa-[\w-]+/g, (s$1) => `<i class='${s$1.replace(":", " ")}'></i>`),
			labelStyle: t$1 && t$1.replace("fill:", "color:")
		});
	} else {
		let a = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "text");
		a.setAttribute("style", /* @__PURE__ */ t$1.replace("color:", "fill:"));
		let h = [];
		typeof e == "string" ? h = /* @__PURE__ */ e.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(e) ? h = e : h = [];
		for (let s$1 of h) {
			let l = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), i ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = /* @__PURE__ */ s$1.trim(), a.appendChild(l);
		}
		return a;
	}
}, "createLabel");
var st = /* @__PURE__ */ m((c$1, t$1, i, r, e) => [
	"M",
	c$1 + e,
	t$1,
	"H",
	c$1 + i - e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c$1 + i,
	t$1 + e,
	"V",
	t$1 + r - e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c$1 + i - e,
	t$1 + r,
	"H",
	c$1 + e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c$1,
	t$1 + r - e,
	"V",
	t$1 + e,
	"A",
	e,
	e,
	0,
	0,
	1,
	c$1 + e,
	t$1,
	"Z"
].join(" "), "createRoundedRectPathD");
var He = /* @__PURE__ */ m(async (c$1, t$1) => {
	pt.info("Creating subgraph rect for ", t$1.id, t$1);
	let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s$1, nodeStyles: l, borderStyles: o, backgroundStyles: n$1 } = m$1(t$1), p$1 = /* @__PURE__ */ c$1.insert("g").attr("class", "cluster " + t$1.cssClasses).attr("id", t$1.id).attr("data-look", t$1.look), f = /* @__PURE__ */ Mo(i.flowchart.htmlLabels), m$2 = /* @__PURE__ */ p$1.insert("g").attr("class", "cluster-label "), d$1 = await Rr(m$2, t$1.label, {
		style: t$1.labelStyle,
		useHtmlLabels: f,
		isNode: !0
	}), g$1 = /* @__PURE__ */ d$1.getBBox();
	if (Mo(i.flowchart.htmlLabels)) {
		let T = d$1.children[0], R = /* @__PURE__ */ ia(d$1);
		g$1 = /* @__PURE__ */ T.getBoundingClientRect(), R.attr("width", g$1.width), R.attr("height", g$1.height);
	}
	let y = t$1.width <= g$1.width + t$1.padding ? g$1.width + t$1.padding : t$1.width;
	t$1.width <= g$1.width + t$1.padding ? t$1.diff = (y - t$1.width) / 2 - t$1.padding : t$1.diff = -t$1.padding;
	let u$2 = t$1.height, b = t$1.x - y / 2, S$2 = t$1.y - u$2 / 2;
	pt.trace("Data ", t$1, /* @__PURE__ */ JSON.stringify(t$1));
	let k;
	if (t$1.look === "handDrawn") {
		let T = /* @__PURE__ */ v.svg(p$1), R = /* @__PURE__ */ S$1(t$1, {
			roughness: .7,
			fill: a,
			stroke: h,
			fillWeight: 3,
			seed: e
		}), E = /* @__PURE__ */ T.path(/* @__PURE__ */ st(b, S$2, y, u$2, 0), R);
		k = /* @__PURE__ */ p$1.insert(() => (pt.debug("Rough node insert CXC", E), E), ":first-child"), k.select("path:nth-child(2)").attr("style", /* @__PURE__ */ o.join(";")), k.select("path").attr("style", /* @__PURE__ */ n$1.join(";").replace("fill", "stroke"));
	} else k = /* @__PURE__ */ p$1.insert("rect", ":first-child"), k.attr("style", l).attr("rx", t$1.rx).attr("ry", t$1.ry).attr("x", b).attr("y", S$2).attr("width", y).attr("height", u$2);
	let { subGraphTitleTopMargin: w$1 } = n(i);
	if (m$2.attr("transform", `translate(${t$1.x - g$1.width / 2}, ${t$1.y - t$1.height / 2 + w$1})`), s$1) {
		let T = /* @__PURE__ */ m$2.select("span");
		T && T.attr("style", s$1);
	}
	let B = /* @__PURE__ */ k.node().getBBox();
	return t$1.offsetX = 0, t$1.width = B.width, t$1.height = B.height, t$1.offsetY = g$1.height - t$1.padding / 2, t$1.intersect = function(T) {
		return yt(t$1, T);
	}, {
		cluster: p$1,
		labelBBox: g$1
	};
}, "rect"), br = {
	rect: He,
	squareRect: He,
	roundedWithTitle: /* @__PURE__ */ m(async (c$1, t$1) => {
		let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { altBackground: a, compositeBackground: h, compositeTitleBackground: s$1, nodeBorder: l } = r, o = /* @__PURE__ */ c$1.insert("g").attr("class", t$1.cssClasses).attr("id", t$1.id).attr("data-id", t$1.id).attr("data-look", t$1.look), n$1 = /* @__PURE__ */ o.insert("g", ":first-child"), p$1 = /* @__PURE__ */ o.insert("g").attr("class", "cluster-label"), f = /* @__PURE__ */ o.append("rect"), m$2 = /* @__PURE__ */ p$1.node().appendChild(await Rt(t$1.label, t$1.labelStyle, void 0, !0)), d$1 = /* @__PURE__ */ m$2.getBBox();
		if (Mo(i.flowchart.htmlLabels)) {
			let E = m$2.children[0], L$1 = /* @__PURE__ */ ia(m$2);
			d$1 = /* @__PURE__ */ E.getBoundingClientRect(), L$1.attr("width", d$1.width), L$1.attr("height", d$1.height);
		}
		let g$1 = 0 * t$1.padding, y = g$1 / 2, u$2 = (t$1.width <= d$1.width + t$1.padding ? d$1.width + t$1.padding : t$1.width) + g$1;
		t$1.width <= d$1.width + t$1.padding ? t$1.diff = (u$2 - t$1.width) / 2 - t$1.padding : t$1.diff = -t$1.padding;
		let b = t$1.height + g$1, S$2 = t$1.height + g$1 - d$1.height - 6, k = t$1.x - u$2 / 2, w$1 = t$1.y - b / 2;
		t$1.width = u$2;
		let B = t$1.y - t$1.height / 2 - y + d$1.height + 2, T;
		if (t$1.look === "handDrawn") {
			let E = /* @__PURE__ */ t$1.cssClasses.includes("statediagram-cluster-alt"), L$1 = /* @__PURE__ */ v.svg(o), O = t$1.rx || t$1.ry ? L$1.path(/* @__PURE__ */ st(k, w$1, u$2, b, 10), {
				roughness: .7,
				fill: s$1,
				fillStyle: "solid",
				stroke: l,
				seed: e
			}) : L$1.rectangle(k, w$1, u$2, b, { seed: e });
			T = /* @__PURE__ */ o.insert(() => O, ":first-child");
			let V$1 = /* @__PURE__ */ L$1.rectangle(k, B, u$2, S$2, {
				fill: E ? a : h,
				fillStyle: E ? "hachure" : "solid",
				stroke: l,
				seed: e
			});
			T = /* @__PURE__ */ o.insert(() => O, ":first-child"), f = /* @__PURE__ */ o.insert(() => V$1);
		} else T = /* @__PURE__ */ n$1.insert("rect", ":first-child"), T.attr("class", "outer").attr("x", k).attr("y", w$1).attr("width", u$2).attr("height", b).attr("data-look", t$1.look), f.attr("class", "inner").attr("x", k).attr("y", B).attr("width", u$2).attr("height", S$2);
		p$1.attr("transform", `translate(${t$1.x - d$1.width / 2}, ${w$1 + 1 - (Mo(i.flowchart.htmlLabels) ? 0 : 3)})`);
		return t$1.height = T.node().getBBox().height, t$1.offsetX = 0, t$1.offsetY = d$1.height - t$1.padding / 2, t$1.labelBBox = d$1, t$1.intersect = function(E) {
			return yt(t$1, E);
		}, {
			cluster: o,
			labelBBox: d$1
		};
	}, "roundedWithTitle"),
	noteGroup: /* @__PURE__ */ m((c$1, t$1) => {
		let i = /* @__PURE__ */ c$1.insert("g").attr("class", "note-cluster").attr("id", t$1.id), r = /* @__PURE__ */ i.insert("rect", ":first-child"), e = 0 * t$1.padding, a = e / 2;
		r.attr("rx", t$1.rx).attr("ry", t$1.ry).attr("x", t$1.x - t$1.width / 2 - a).attr("y", t$1.y - t$1.height / 2 - a).attr("width", t$1.width + e).attr("height", t$1.height + e).attr("fill", "none");
		let h = /* @__PURE__ */ r.node().getBBox();
		return t$1.width = h.width, t$1.height = h.height, t$1.intersect = function(s$1) {
			return yt(t$1, s$1);
		}, {
			cluster: i,
			labelBBox: {
				width: 0,
				height: 0
			}
		};
	}, "noteGroup"),
	divider: /* @__PURE__ */ m((c$1, t$1) => {
		let { themeVariables: r, handDrawnSeed: e } = mr(), { nodeBorder: a } = r, h = /* @__PURE__ */ c$1.insert("g").attr("class", t$1.cssClasses).attr("id", t$1.id).attr("data-look", t$1.look), s$1 = /* @__PURE__ */ h.insert("g", ":first-child"), l = 0 * t$1.padding, o = t$1.width + l;
		t$1.diff = -t$1.padding;
		let n$1 = t$1.height + l, p$1 = t$1.x - o / 2, f = t$1.y - n$1 / 2;
		t$1.width = o;
		let m$2;
		if (t$1.look === "handDrawn") {
			let y = /* @__PURE__ */ v.svg(h).rectangle(p$1, f, o, n$1, {
				fill: "lightgrey",
				roughness: .5,
				strokeLineDash: [5],
				stroke: a,
				seed: e
			});
			m$2 = /* @__PURE__ */ h.insert(() => y, ":first-child");
		} else m$2 = /* @__PURE__ */ s$1.insert("rect", ":first-child"), m$2.attr("class", "divider").attr("x", p$1).attr("y", f).attr("width", o).attr("height", n$1).attr("data-look", t$1.look);
		return t$1.height = m$2.node().getBBox().height, t$1.offsetX = 0, t$1.offsetY = 0, t$1.intersect = function(g$1) {
			return yt(t$1, g$1);
		}, {
			cluster: h,
			labelBBox: {}
		};
	}, "divider"),
	kanbanSection: /* @__PURE__ */ m(async (c$1, t$1) => {
		pt.info("Creating subgraph rect for ", t$1.id, t$1);
		let i = /* @__PURE__ */ mr(), { themeVariables: r, handDrawnSeed: e } = i, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s$1, nodeStyles: l, borderStyles: o, backgroundStyles: n$1 } = m$1(t$1), p$1 = /* @__PURE__ */ c$1.insert("g").attr("class", "cluster " + t$1.cssClasses).attr("id", t$1.id).attr("data-look", t$1.look), f = /* @__PURE__ */ Mo(i.flowchart.htmlLabels), m$2 = /* @__PURE__ */ p$1.insert("g").attr("class", "cluster-label "), d$1 = await Rr(m$2, t$1.label, {
			style: t$1.labelStyle,
			useHtmlLabels: f,
			isNode: !0,
			width: t$1.width
		}), g$1 = /* @__PURE__ */ d$1.getBBox();
		if (Mo(i.flowchart.htmlLabels)) {
			let T = d$1.children[0], R = /* @__PURE__ */ ia(d$1);
			g$1 = /* @__PURE__ */ T.getBoundingClientRect(), R.attr("width", g$1.width), R.attr("height", g$1.height);
		}
		let y = t$1.width <= g$1.width + t$1.padding ? g$1.width + t$1.padding : t$1.width;
		t$1.width <= g$1.width + t$1.padding ? t$1.diff = (y - t$1.width) / 2 - t$1.padding : t$1.diff = -t$1.padding;
		let u$2 = t$1.height, b = t$1.x - y / 2, S$2 = t$1.y - u$2 / 2;
		pt.trace("Data ", t$1, /* @__PURE__ */ JSON.stringify(t$1));
		let k;
		if (t$1.look === "handDrawn") {
			let T = /* @__PURE__ */ v.svg(p$1), R = /* @__PURE__ */ S$1(t$1, {
				roughness: .7,
				fill: a,
				stroke: h,
				fillWeight: 4,
				seed: e
			}), E = /* @__PURE__ */ T.path(/* @__PURE__ */ st(b, S$2, y, u$2, t$1.rx), R);
			k = /* @__PURE__ */ p$1.insert(() => (pt.debug("Rough node insert CXC", E), E), ":first-child"), k.select("path:nth-child(2)").attr("style", /* @__PURE__ */ o.join(";")), k.select("path").attr("style", /* @__PURE__ */ n$1.join(";").replace("fill", "stroke"));
		} else k = /* @__PURE__ */ p$1.insert("rect", ":first-child"), k.attr("style", l).attr("rx", t$1.rx).attr("ry", t$1.ry).attr("x", b).attr("y", S$2).attr("width", y).attr("height", u$2);
		let { subGraphTitleTopMargin: w$1 } = n(i);
		if (m$2.attr("transform", `translate(${t$1.x - g$1.width / 2}, ${t$1.y - t$1.height / 2 + w$1})`), s$1) {
			let T = /* @__PURE__ */ m$2.select("span");
			T && T.attr("style", s$1);
		}
		let B = /* @__PURE__ */ k.node().getBBox();
		return t$1.offsetX = 0, t$1.width = B.width, t$1.height = B.height, t$1.offsetY = g$1.height - t$1.padding / 2, t$1.intersect = function(T) {
			return yt(t$1, T);
		}, {
			cluster: p$1,
			labelBBox: g$1
		};
	}, "kanbanSection")
}, Ve = /* @__PURE__ */ new Map(), xa = /* @__PURE__ */ m(async (c$1, t$1) => {
	let r = await br[t$1.shape || "rect"](c$1, t$1);
	return Ve.set(t$1.id, r), r;
}, "insertCluster");
var ba = /* @__PURE__ */ m(() => {
	Ve = /* @__PURE__ */ new Map();
}, "clear");
function Sr(c$1, t$1) {
	return c$1.intersect(t$1);
}
m(Sr, "intersectNode");
var We = Sr;
function wr(c$1, t$1, i, r) {
	var e = c$1.x, a = c$1.y, h = e - r.x, s$1 = a - r.y, l = /* @__PURE__ */ Math.sqrt(t$1 * t$1 * s$1 * s$1 + i * i * h * h), o = /* @__PURE__ */ Math.abs(t$1 * i * h / l);
	r.x < e && (o = -o);
	var n$1 = /* @__PURE__ */ Math.abs(t$1 * i * s$1 / l);
	return r.y < a && (n$1 = -n$1), {
		x: e + o,
		y: a + n$1
	};
}
m(wr, "intersectEllipse");
var qt = wr;
function Nr(c$1, t$1, i) {
	return qt(c$1, t$1, t$1, i);
}
m(Nr, "intersectCircle");
var Ie = Nr;
function $r(c$1, t$1, i, r) {
	{
		let e = t$1.y - c$1.y, a = c$1.x - t$1.x, h = t$1.x * c$1.y - c$1.x * t$1.y, s$1 = e * i.x + a * i.y + h, l = e * r.x + a * r.y + h, o = 1e-6;
		if (s$1 !== 0 && l !== 0 && Fe(s$1, l)) return;
		let n$1 = r.y - i.y, p$1 = i.x - r.x, f = r.x * i.y - i.x * r.y, m$2 = n$1 * c$1.x + p$1 * c$1.y + f, d$1 = n$1 * t$1.x + p$1 * t$1.y + f;
		if (Math.abs(m$2) < o && Math.abs(d$1) < o && Fe(m$2, d$1)) return;
		let g$1 = e * p$1 - n$1 * a;
		if (g$1 === 0) return;
		let y = /* @__PURE__ */ Math.abs(g$1 / 2), u$2 = a * f - p$1 * h, b = u$2 < 0 ? (u$2 - y) / g$1 : (u$2 + y) / g$1;
		u$2 = n$1 * h - e * f;
		return {
			x: b,
			y: u$2 < 0 ? (u$2 - y) / g$1 : (u$2 + y) / g$1
		};
	}
}
m($r, "intersectLine");
function Fe(c$1, t$1) {
	return c$1 * t$1 > 0;
}
m(Fe, "sameSign");
var _e = $r;
function Dr(c$1, t$1, i) {
	let r = c$1.x, e = c$1.y, a = [], h = Number.POSITIVE_INFINITY, s$1 = Number.POSITIVE_INFINITY;
	typeof t$1.forEach == "function" ? t$1.forEach(function(n$1) {
		h = /* @__PURE__ */ Math.min(h, n$1.x), s$1 = /* @__PURE__ */ Math.min(s$1, n$1.y);
	}) : (h = /* @__PURE__ */ Math.min(h, t$1.x), s$1 = /* @__PURE__ */ Math.min(s$1, t$1.y));
	let l = r - c$1.width / 2 - h, o = e - c$1.height / 2 - s$1;
	for (let n$1 = 0; n$1 < t$1.length; n$1++) {
		let p$1 = t$1[n$1], f = t$1[n$1 < t$1.length - 1 ? n$1 + 1 : 0], m$2 = /* @__PURE__ */ _e(c$1, i, {
			x: l + p$1.x,
			y: o + p$1.y
		}, {
			x: l + f.x,
			y: o + f.y
		});
		m$2 && a.push(m$2);
	}
	return a.length ? (a.length > 1 && a.sort(function(n$1, p$1) {
		let f = n$1.x - i.x, m$2 = n$1.y - i.y, d$1 = /* @__PURE__ */ Math.sqrt(f * f + m$2 * m$2), g$1 = p$1.x - i.x, y = p$1.y - i.y, u$2 = /* @__PURE__ */ Math.sqrt(g$1 * g$1 + y * y);
		return d$1 < u$2 ? -1 : d$1 === u$2 ? 0 : 1;
	}), a[0]) : c$1;
}
m(Dr, "intersectPolygon");
var N$1 = {
	node: We,
	circle: Ie,
	ellipse: qt,
	polygon: Dr,
	rect: yt
};
function qe(c$1, t$1) {
	let { labelStyles: i } = m$1(t$1);
	t$1.labelStyle = i;
	let r = /* @__PURE__ */ P(t$1), e = r;
	r || (e = "anchor");
	let a = /* @__PURE__ */ c$1.insert("g").attr("class", e).attr("id", t$1.domId || t$1.id), h = 1, { cssStyles: s$1 } = t$1, l = /* @__PURE__ */ v.svg(a), o = /* @__PURE__ */ S$1(t$1, {
		fill: "black",
		stroke: "none",
		fillStyle: "solid"
	});
	t$1.look !== "handDrawn" && (o.roughness = 0);
	let n$1 = /* @__PURE__ */ l.circle(0, 0, h * 2, o), p$1 = /* @__PURE__ */ a.insert(() => n$1, ":first-child");
	return p$1.attr("class", "anchor").attr("style", /* @__PURE__ */ Vt$1(s$1)), D(t$1, p$1), t$1.intersect = function(f) {
		return pt.info("Circle intersect", t$1, h, f), N$1.circle(t$1, h, f);
	}, a;
}
m(qe, "anchor");
function Xe(c$1, t$1, i, r, e, a, h) {
	let l = (c$1 + i) / 2, o = (t$1 + r) / 2, n$1 = /* @__PURE__ */ Math.atan2(r - t$1, i - c$1), p$1 = (i - c$1) / 2, f = (r - t$1) / 2, m$2 = p$1 / e, d$1 = f / a, g$1 = /* @__PURE__ */ Math.sqrt(m$2 ** 2 + d$1 ** 2);
	if (g$1 > 1) throw new Error("The given radii are too small to create an arc between the points.");
	let y = /* @__PURE__ */ Math.sqrt(1 - g$1 ** 2), u$2 = l + y * a * Math.sin(n$1) * (h ? -1 : 1), b = o - y * e * Math.cos(n$1) * (h ? -1 : 1), S$2 = /* @__PURE__ */ Math.atan2((t$1 - b) / a, (c$1 - u$2) / e), w$1 = Math.atan2((r - b) / a, (i - u$2) / e) - S$2;
	h && w$1 < 0 && (w$1 += 2 * Math.PI), !h && w$1 > 0 && (w$1 -= 2 * Math.PI);
	let B = [];
	for (let T = 0; T < 20; T++) {
		let E = S$2 + T / 19 * w$1, L$1 = u$2 + e * Math.cos(E), O = b + a * Math.sin(E);
		B.push({
			x: L$1,
			y: O
		});
	}
	return B;
}
m(Xe, "generateArcPoints");
async function Ye(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = a.width + t$1.padding + 20, s$1 = a.height + t$1.padding, l = s$1 / 2, o = l / (2.5 + s$1 / 50), { cssStyles: n$1 } = t$1, p$1 = [
		{
			x: h / 2,
			y: -s$1 / 2
		},
		{
			x: -h / 2,
			y: -s$1 / 2
		},
		.../* @__PURE__ */ Xe(-h / 2, -s$1 / 2, -h / 2, s$1 / 2, o, l, !1),
		{
			x: h / 2,
			y: s$1 / 2
		},
		.../* @__PURE__ */ Xe(h / 2, s$1 / 2, h / 2, -s$1 / 2, o, l, !0)
	], f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = /* @__PURE__ */ H(p$1), g$1 = /* @__PURE__ */ f.path(d$1, m$2), y = /* @__PURE__ */ e.insert(() => g$1, ":first-child");
	return y.attr("class", "basic label-container"), n$1 && t$1.look !== "handDrawn" && y.selectAll("path").attr("style", n$1), r && t$1.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(${o / 2}, 0)`), D(t$1, y), t$1.intersect = function(u$2) {
		return N$1.polygon(t$1, p$1, u$2);
	}, e;
}
m(Ye, "bowTieRect");
function rt(c$1, t$1, i, r) {
	return c$1.insert("polygon", ":first-child").attr("points", /* @__PURE__ */ r.map(function(e) {
		return e.x + "," + e.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t$1 / 2 + "," + i / 2 + ")");
}
m(rt, "insertPolygonShape");
async function Ze(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = a.height + t$1.padding, s$1 = 12, l = a.width + t$1.padding + s$1, o = 0, n$1 = l, p$1 = -h, f = 0, m$2 = [
		{
			x: o + s$1,
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
			y: p$1 + s$1
		},
		{
			x: o + s$1,
			y: p$1
		}
	], d$1, { cssStyles: g$1 } = t$1;
	if (t$1.look === "handDrawn") {
		let y = /* @__PURE__ */ v.svg(e), u$2 = /* @__PURE__ */ S$1(t$1, {}), b = /* @__PURE__ */ H(m$2), S$2 = /* @__PURE__ */ y.path(b, u$2);
		d$1 = /* @__PURE__ */ e.insert(() => S$2, ":first-child").attr("transform", `translate(${-l / 2}, ${h / 2})`), g$1 && d$1.attr("style", g$1);
	} else d$1 = /* @__PURE__ */ rt(e, l, h, m$2);
	return r && d$1.attr("style", r), D(t$1, d$1), t$1.intersect = function(y) {
		return N$1.polygon(t$1, m$2, y);
	}, e;
}
m(Ze, "card");
function Ue(c$1, t$1) {
	let { nodeStyles: i } = m$1(t$1);
	t$1.label = "";
	let r = /* @__PURE__ */ c$1.insert("g").attr("class", /* @__PURE__ */ P(t$1)).attr("id", t$1.domId ?? t$1.id), { cssStyles: e } = t$1, a = /* @__PURE__ */ Math.max(28, t$1.width ?? 0), h = [
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
	], s$1 = /* @__PURE__ */ v.svg(r), l = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
	let o = /* @__PURE__ */ H(h), n$1 = /* @__PURE__ */ s$1.path(o, l), p$1 = /* @__PURE__ */ r.insert(() => n$1, ":first-child");
	return e && t$1.look !== "handDrawn" && p$1.selectAll("path").attr("style", e), i && t$1.look !== "handDrawn" && p$1.selectAll("path").attr("style", i), t$1.width = 28, t$1.height = 28, t$1.intersect = function(f) {
		return N$1.polygon(t$1, h, f);
	}, r;
}
m(Ue, "choice");
async function Xt$1(c$1, t$1, i) {
	let { labelStyles: r, nodeStyles: e } = m$1(t$1);
	t$1.labelStyle = r;
	let { shapeSvg: a, bbox: h, halfPadding: s$1 } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), l = i?.padding ?? s$1, o = h.width / 2 + l, n$1, { cssStyles: p$1 } = t$1;
	if (t$1.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(a), m$2 = /* @__PURE__ */ S$1(t$1, {}), d$1 = /* @__PURE__ */ f.circle(0, 0, o * 2, m$2);
		n$1 = /* @__PURE__ */ a.insert(() => d$1, ":first-child"), n$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(p$1));
	} else n$1 = /* @__PURE__ */ a.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", e).attr("r", o).attr("cx", 0).attr("cy", 0);
	return D(t$1, n$1), t$1.calcIntersect = function(f, m$2) {
		let d$1 = f.width / 2;
		return N$1.circle(f, d$1, m$2);
	}, t$1.intersect = function(f) {
		return pt.info("Circle intersect", t$1, o, f), N$1.circle(t$1, o, f);
	}, a;
}
m(Xt$1, "circle");
function vr(c$1) {
	let t$1 = /* @__PURE__ */ Math.cos(Math.PI / 4), i = /* @__PURE__ */ Math.sin(Math.PI / 4), r = c$1 * 2, e = {
		x: r / 2 * t$1,
		y: r / 2 * i
	}, a = {
		x: -(r / 2) * t$1,
		y: r / 2 * i
	}, h = {
		x: -(r / 2) * t$1,
		y: -(r / 2) * i
	}, s$1 = {
		x: r / 2 * t$1,
		y: -(r / 2) * i
	};
	return `M ${a.x},${a.y} L ${s$1.x},${s$1.y}
                   M ${e.x},${e.y} L ${h.x},${h.y}`;
}
m(vr, "createLine");
function Qe(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i, t$1.label = "";
	let e = /* @__PURE__ */ c$1.insert("g").attr("class", /* @__PURE__ */ P(t$1)).attr("id", t$1.domId ?? t$1.id), a = /* @__PURE__ */ Math.max(30, t$1?.width ?? 0), { cssStyles: h } = t$1, s$1 = /* @__PURE__ */ v.svg(e), l = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
	let o = /* @__PURE__ */ s$1.circle(0, 0, a * 2, l), n$1 = /* @__PURE__ */ vr(a), p$1 = /* @__PURE__ */ s$1.path(n$1, l), f = /* @__PURE__ */ e.insert(() => o, ":first-child");
	return f.insert(() => p$1), h && t$1.look !== "handDrawn" && f.selectAll("path").attr("style", h), r && t$1.look !== "handDrawn" && f.selectAll("path").attr("style", r), D(t$1, f), t$1.intersect = function(m$2) {
		return pt.info("crossedCircle intersect", t$1, {
			radius: a,
			point: m$2
		}), N$1.circle(t$1, a, m$2);
	}, e;
}
m(Qe, "crossedCircle");
function xt$1(c$1, t$1, i, r = 100, e = 0, a = 180) {
	let h = [], s$1 = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s$1) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s$1 + p$1 * n$1, m$2 = c$1 + i * Math.cos(f), d$1 = t$1 + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d$1
		});
	}
	return h;
}
m(xt$1, "generateCirclePoints");
async function Je(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = a.width + (t$1.padding ?? 0), l = a.height + (t$1.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t$1, p$1 = [
		.../* @__PURE__ */ xt$1(s$1 / 2, -l / 2, o, 30, -90, 0),
		{
			x: -s$1 / 2 - o,
			y: o
		},
		.../* @__PURE__ */ xt$1(s$1 / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ xt$1(s$1 / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s$1 / 2 - o,
			y: -l / 2
		},
		.../* @__PURE__ */ xt$1(s$1 / 2, l / 2, o, 20, 0, 90)
	], f = [
		{
			x: s$1 / 2,
			y: -l / 2 - o
		},
		{
			x: -s$1 / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ xt$1(s$1 / 2, -l / 2, o, 20, -90, 0),
		{
			x: -s$1 / 2 - o,
			y: -o
		},
		.../* @__PURE__ */ xt$1(s$1 / 2 + s$1 * .1, -o, o, 20, -180, -270),
		.../* @__PURE__ */ xt$1(s$1 / 2 + s$1 * .1, o, o, 20, -90, -180),
		{
			x: -s$1 / 2 - o,
			y: l / 2
		},
		.../* @__PURE__ */ xt$1(s$1 / 2, l / 2, o, 20, 0, 90),
		{
			x: -s$1 / 2,
			y: l / 2 + o
		},
		{
			x: s$1 / 2,
			y: l / 2 + o
		}
	], m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, { fill: "none" });
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let y = /* @__PURE__ */ H(p$1).replace("Z", ""), u$2 = /* @__PURE__ */ m$2.path(y, d$1), b = /* @__PURE__ */ H(f), S$2 = /* @__PURE__ */ m$2.path(b, { ...d$1 }), k = /* @__PURE__ */ e.insert("g", ":first-child");
	return k.insert(() => S$2, ":first-child").attr("stroke-opacity", 0), k.insert(() => u$2, ":first-child"), k.attr("class", "text"), n$1 && t$1.look !== "handDrawn" && k.selectAll("path").attr("style", n$1), r && t$1.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(${o}, 0)`), h.attr("transform", `translate(${-s$1 / 2 + o - (a.x - (a.left ?? 0))},${-l / 2 + (t$1.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t$1, k), t$1.intersect = function(w$1) {
		return N$1.polygon(t$1, f, w$1);
	}, e;
}
m(Je, "curlyBraceLeft");
function bt$1(c$1, t$1, i, r = 100, e = 0, a = 180) {
	let h = [], s$1 = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s$1) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s$1 + p$1 * n$1, m$2 = c$1 + i * Math.cos(f), d$1 = t$1 + i * Math.sin(f);
		h.push({
			x: m$2,
			y: d$1
		});
	}
	return h;
}
m(bt$1, "generateCirclePoints");
async function Ke(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = a.width + (t$1.padding ?? 0), l = a.height + (t$1.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t$1, p$1 = [
		.../* @__PURE__ */ bt$1(s$1 / 2, -l / 2, o, 20, -90, 0),
		{
			x: s$1 / 2 + o,
			y: -o
		},
		.../* @__PURE__ */ bt$1(s$1 / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ bt$1(s$1 / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: s$1 / 2 + o,
			y: l / 2
		},
		.../* @__PURE__ */ bt$1(s$1 / 2, l / 2, o, 20, 0, 90)
	], f = [
		{
			x: -s$1 / 2,
			y: -l / 2 - o
		},
		{
			x: s$1 / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ bt$1(s$1 / 2, -l / 2, o, 20, -90, 0),
		{
			x: s$1 / 2 + o,
			y: -o
		},
		.../* @__PURE__ */ bt$1(s$1 / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ bt$1(s$1 / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: s$1 / 2 + o,
			y: l / 2
		},
		.../* @__PURE__ */ bt$1(s$1 / 2, l / 2, o, 20, 0, 90),
		{
			x: s$1 / 2,
			y: l / 2 + o
		},
		{
			x: -s$1 / 2,
			y: l / 2 + o
		}
	], m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, { fill: "none" });
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let y = /* @__PURE__ */ H(p$1).replace("Z", ""), u$2 = /* @__PURE__ */ m$2.path(y, d$1), b = /* @__PURE__ */ H(f), S$2 = /* @__PURE__ */ m$2.path(b, { ...d$1 }), k = /* @__PURE__ */ e.insert("g", ":first-child");
	return k.insert(() => S$2, ":first-child").attr("stroke-opacity", 0), k.insert(() => u$2, ":first-child"), k.attr("class", "text"), n$1 && t$1.look !== "handDrawn" && k.selectAll("path").attr("style", n$1), r && t$1.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(${-o}, 0)`), h.attr("transform", `translate(${-s$1 / 2 + (t$1.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t$1.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t$1, k), t$1.intersect = function(w$1) {
		return N$1.polygon(t$1, f, w$1);
	}, e;
}
m(Ke, "curlyBraceRight");
function K(c$1, t$1, i, r = 100, e = 0, a = 180) {
	let h = [], s$1 = e * Math.PI / 180, n$1 = (a * Math.PI / 180 - s$1) / (r - 1);
	for (let p$1 = 0; p$1 < r; p$1++) {
		let f = s$1 + p$1 * n$1, m$2 = c$1 + i * Math.cos(f), d$1 = t$1 + i * Math.sin(f);
		h.push({
			x: -m$2,
			y: -d$1
		});
	}
	return h;
}
m(K, "generateCirclePoints");
async function ts(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = a.width + (t$1.padding ?? 0), l = a.height + (t$1.padding ?? 0), o = /* @__PURE__ */ Math.max(5, l * .1), { cssStyles: n$1 } = t$1, p$1 = [
		.../* @__PURE__ */ K(s$1 / 2, -l / 2, o, 30, -90, 0),
		{
			x: -s$1 / 2 - o,
			y: o
		},
		.../* @__PURE__ */ K(s$1 / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ K(s$1 / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s$1 / 2 - o,
			y: -l / 2
		},
		.../* @__PURE__ */ K(s$1 / 2, l / 2, o, 20, 0, 90)
	], f = [
		.../* @__PURE__ */ K(-s$1 / 2 + o + o / 2, -l / 2, o, 20, -90, -180),
		{
			x: s$1 / 2 - o / 2,
			y: o
		},
		.../* @__PURE__ */ K(-s$1 / 2 - o / 2, -o, o, 20, 0, 90),
		.../* @__PURE__ */ K(-s$1 / 2 - o / 2, o, o, 20, -90, 0),
		{
			x: s$1 / 2 - o / 2,
			y: -o
		},
		.../* @__PURE__ */ K(-s$1 / 2 + o + o / 2, l / 2, o, 30, -180, -270)
	], m$2 = [
		{
			x: s$1 / 2,
			y: -l / 2 - o
		},
		{
			x: -s$1 / 2,
			y: -l / 2 - o
		},
		.../* @__PURE__ */ K(s$1 / 2, -l / 2, o, 20, -90, 0),
		{
			x: -s$1 / 2 - o,
			y: -o
		},
		.../* @__PURE__ */ K(s$1 / 2 + o * 2, -o, o, 20, -180, -270),
		.../* @__PURE__ */ K(s$1 / 2 + o * 2, o, o, 20, -90, -180),
		{
			x: -s$1 / 2 - o,
			y: l / 2
		},
		.../* @__PURE__ */ K(s$1 / 2, l / 2, o, 20, 0, 90),
		{
			x: -s$1 / 2,
			y: l / 2 + o
		},
		{
			x: s$1 / 2 - o - o / 2,
			y: l / 2 + o
		},
		.../* @__PURE__ */ K(-s$1 / 2 + o + o / 2, -l / 2, o, 20, -90, -180),
		{
			x: s$1 / 2 - o / 2,
			y: o
		},
		.../* @__PURE__ */ K(-s$1 / 2 - o / 2, -o, o, 20, 0, 90),
		.../* @__PURE__ */ K(-s$1 / 2 - o / 2, o, o, 20, -90, 0),
		{
			x: s$1 / 2 - o / 2,
			y: -o
		},
		.../* @__PURE__ */ K(-s$1 / 2 + o + o / 2, l / 2, o, 30, -180, -270)
	], d$1 = /* @__PURE__ */ v.svg(e), g$1 = /* @__PURE__ */ S$1(t$1, { fill: "none" });
	t$1.look !== "handDrawn" && (g$1.roughness = 0, g$1.fillStyle = "solid");
	let u$2 = /* @__PURE__ */ H(p$1).replace("Z", ""), b = /* @__PURE__ */ d$1.path(u$2, g$1), k = /* @__PURE__ */ H(f).replace("Z", ""), w$1 = /* @__PURE__ */ d$1.path(k, g$1), B = /* @__PURE__ */ H(m$2), T = /* @__PURE__ */ d$1.path(B, { ...g$1 }), R = /* @__PURE__ */ e.insert("g", ":first-child");
	return R.insert(() => T, ":first-child").attr("stroke-opacity", 0), R.insert(() => b, ":first-child"), R.insert(() => w$1, ":first-child"), R.attr("class", "text"), n$1 && t$1.look !== "handDrawn" && R.selectAll("path").attr("style", n$1), r && t$1.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(${o - o / 4}, 0)`), h.attr("transform", `translate(${-s$1 / 2 + (t$1.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t$1.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t$1, R), t$1.intersect = function(E) {
		return N$1.polygon(t$1, m$2, E);
	}, e;
}
m(ts, "curlyBraces");
async function es(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = 80, s$1 = 20, l = /* @__PURE__ */ Math.max(h, (a.width + (t$1.padding ?? 0) * 2) * 1.25, t$1?.width ?? 0), o = /* @__PURE__ */ Math.max(s$1, a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), n$1 = o / 2, { cssStyles: p$1 } = t$1, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = l, g$1 = o, y = d$1 - n$1, u$2 = g$1 / 4, b = [
		{
			x: y,
			y: 0
		},
		{
			x: u$2,
			y: 0
		},
		{
			x: 0,
			y: g$1 / 2
		},
		{
			x: u$2,
			y: g$1
		},
		{
			x: y,
			y: g$1
		},
		.../* @__PURE__ */ Nt(-y, -g$1 / 2, n$1, 50, 270, 90)
	], S$2 = /* @__PURE__ */ H(b), k = /* @__PURE__ */ f.path(S$2, m$2), w$1 = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w$1.attr("class", "basic label-container"), p$1 && t$1.look !== "handDrawn" && w$1.selectChildren("path").attr("style", p$1), r && t$1.look !== "handDrawn" && w$1.selectChildren("path").attr("style", r), w$1.attr("transform", `translate(${-l / 2}, ${-o / 2})`), D(t$1, w$1), t$1.intersect = function(B) {
		return N$1.polygon(t$1, b, B);
	}, e;
}
m(es, "curvedTrapezoid");
var Mr = /* @__PURE__ */ m((c$1, t$1, i, r, e, a) => [
	`M${c$1},${t$1 + a}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`
].join(" "), "createCylinderPathD"), kr$1 = /* @__PURE__ */ m((c$1, t$1, i, r, e, a) => [
	`M${c$1},${t$1 + a}`,
	`M${c$1 + i},${t$1 + a}`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`
].join(" "), "createOuterCylinderPathD"), Pr = /* @__PURE__ */ m((c$1, t$1, i, r, e, a) => [`M${c$1 - i / 2},${-r / 2}`, `a${e},${a} 0,0,0 ${i},0`].join(" "), "createInnerCylinderPathD");
async function ss(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + t$1.padding, t$1.width ?? 0), l = s$1 / 2, o = l / (2.5 + s$1 / 50), n$1 = /* @__PURE__ */ Math.max(a.height + o + t$1.padding, t$1.height ?? 0), p$1, { cssStyles: f } = t$1;
	if (t$1.look === "handDrawn") {
		let m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ kr$1(0, 0, s$1, n$1, l, o), g$1 = /* @__PURE__ */ Pr(0, o, s$1, n$1, l, o), y = /* @__PURE__ */ m$2.path(d$1, /* @__PURE__ */ S$1(t$1, {})), u$2 = /* @__PURE__ */ m$2.path(g$1, /* @__PURE__ */ S$1(t$1, { fill: "none" }));
		p$1 = /* @__PURE__ */ e.insert(() => u$2, ":first-child"), p$1 = /* @__PURE__ */ e.insert(() => y, ":first-child"), p$1.attr("class", "basic label-container"), f && p$1.attr("style", f);
	} else {
		let m$2 = /* @__PURE__ */ Mr(0, 0, s$1, n$1, l, o);
		p$1 = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", m$2).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(f)).attr("style", r);
	}
	return p$1.attr("label-offset-y", o), p$1.attr("transform", `translate(${-s$1 / 2}, ${-(n$1 / 2 + o)})`), D(t$1, p$1), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t$1.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`), t$1.intersect = function(m$2) {
		let d$1 = /* @__PURE__ */ N$1.rect(t$1, m$2), g$1 = d$1.x - (t$1.x ?? 0);
		if (l != 0 && (Math.abs(g$1) < (t$1.width ?? 0) / 2 || Math.abs(g$1) == (t$1.width ?? 0) / 2 && Math.abs(d$1.y - (t$1.y ?? 0)) > (t$1.height ?? 0) / 2 - o)) {
			let y = o * o * (1 - g$1 * g$1 / (l * l));
			y > 0 && (y = /* @__PURE__ */ Math.sqrt(y)), y = o - y, m$2.y - (t$1.y ?? 0) > 0 && (y = -y), d$1.y += y;
		}
		return d$1;
	}, e;
}
m(ss, "cylinder");
async function rs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = a.width + t$1.padding, l = a.height + t$1.padding, o = l * .2, n$1 = -s$1 / 2, p$1 = -l / 2 - o / 2, { cssStyles: f } = t$1, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = [
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
	], y = /* @__PURE__ */ m$2.polygon(/* @__PURE__ */ g$1.map((b) => [b.x, b.y]), d$1), u$2 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$2.attr("class", "basic label-container"), f && t$1.look !== "handDrawn" && u$2.selectAll("path").attr("style", f), r && t$1.look !== "handDrawn" && u$2.selectAll("path").attr("style", r), h.attr("transform", `translate(${n$1 + (t$1.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${p$1 + o + (t$1.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t$1, u$2), t$1.intersect = function(b) {
		return N$1.rect(t$1, b);
	}, e;
}
m(rs, "dividedRectangle");
async function as(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), l = a.width / 2 + h + 5, o = a.width / 2 + h, n$1, { cssStyles: p$1 } = t$1;
	if (t$1.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S$1(t$1, {
			roughness: .2,
			strokeWidth: 2.5
		}), d$1 = /* @__PURE__ */ S$1(t$1, {
			roughness: .2,
			strokeWidth: 1.5
		}), g$1 = /* @__PURE__ */ f.circle(0, 0, l * 2, m$2), y = /* @__PURE__ */ f.circle(0, 0, o * 2, d$1);
		n$1 = /* @__PURE__ */ e.insert("g", ":first-child"), n$1.attr("class", /* @__PURE__ */ Vt$1(t$1.cssClasses)).attr("style", /* @__PURE__ */ Vt$1(p$1)), n$1.node()?.appendChild(g$1), n$1.node()?.appendChild(y);
	} else {
		n$1 = /* @__PURE__ */ e.insert("g", ":first-child");
		let f = /* @__PURE__ */ n$1.insert("circle", ":first-child"), m$2 = /* @__PURE__ */ n$1.insert("circle");
		n$1.attr("class", "basic label-container").attr("style", r), f.attr("class", "outer-circle").attr("style", r).attr("r", l).attr("cx", 0).attr("cy", 0), m$2.attr("class", "inner-circle").attr("style", r).attr("r", o).attr("cx", 0).attr("cy", 0);
	}
	return D(t$1, n$1), t$1.intersect = function(f) {
		return pt.info("DoubleCircle intersect", t$1, l, f), N$1.circle(t$1, l, f);
	}, e;
}
m(as, "doublecircle");
function os(c$1, t$1, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m$1(t$1);
	t$1.label = "", t$1.labelStyle = r;
	let a = /* @__PURE__ */ c$1.insert("g").attr("class", /* @__PURE__ */ P(t$1)).attr("id", t$1.domId ?? t$1.id), h = 7, { cssStyles: s$1 } = t$1, l = /* @__PURE__ */ v.svg(a), { nodeBorder: o } = i, n$1 = /* @__PURE__ */ S$1(t$1, { fillStyle: "solid" });
	t$1.look !== "handDrawn" && (n$1.roughness = 0);
	let p$1 = /* @__PURE__ */ l.circle(0, 0, h * 2, n$1), f = /* @__PURE__ */ a.insert(() => p$1, ":first-child");
	return f.selectAll("path").attr("style", `fill: ${o} !important;`), s$1 && s$1.length > 0 && t$1.look !== "handDrawn" && f.selectAll("path").attr("style", s$1), e && t$1.look !== "handDrawn" && f.selectAll("path").attr("style", e), D(t$1, f), t$1.intersect = function(m$2) {
		return pt.info("filledCircle intersect", t$1, {
			radius: h,
			point: m$2
		}), N$1.circle(t$1, h, m$2);
	}, a;
}
m(os, "filledCircle");
async function is(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = a.width + (t$1.padding ?? 0), l = s$1 + a.height, o = s$1 + a.height, n$1 = [
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
	], { cssStyles: p$1 } = t$1, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = /* @__PURE__ */ H(n$1), g$1 = /* @__PURE__ */ f.path(d$1, m$2), y = /* @__PURE__ */ e.insert(() => g$1, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
	return p$1 && t$1.look !== "handDrawn" && y.selectChildren("path").attr("style", p$1), r && t$1.look !== "handDrawn" && y.selectChildren("path").attr("style", r), t$1.width = s$1, t$1.height = l, D(t$1, y), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-l / 2 + (t$1.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`), t$1.intersect = function(u$2) {
		return pt.info("Triangle intersect", t$1, n$1, u$2), N$1.polygon(t$1, n$1, u$2);
	}, e;
}
m(is, "flippedTriangle");
function ns(c$1, t$1, { dir: i, config: { state: r, themeVariables: e } }) {
	let { nodeStyles: a } = m$1(t$1);
	t$1.label = "";
	let h = /* @__PURE__ */ c$1.insert("g").attr("class", /* @__PURE__ */ P(t$1)).attr("id", t$1.domId ?? t$1.id), { cssStyles: s$1 } = t$1, l = /* @__PURE__ */ Math.max(70, t$1?.width ?? 0), o = /* @__PURE__ */ Math.max(10, t$1?.height ?? 0);
	i === "LR" && (l = /* @__PURE__ */ Math.max(10, t$1?.width ?? 0), o = /* @__PURE__ */ Math.max(70, t$1?.height ?? 0));
	let n$1 = -1 * l / 2, p$1 = -1 * o / 2, f = /* @__PURE__ */ v.svg(h), m$2 = /* @__PURE__ */ S$1(t$1, {
		stroke: e.lineColor,
		fill: e.lineColor
	});
	t$1.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = /* @__PURE__ */ f.rectangle(n$1, p$1, l, o, m$2), g$1 = /* @__PURE__ */ h.insert(() => d$1, ":first-child");
	s$1 && t$1.look !== "handDrawn" && g$1.selectAll("path").attr("style", s$1), a && t$1.look !== "handDrawn" && g$1.selectAll("path").attr("style", a), D(t$1, g$1);
	let y = r?.padding ?? 0;
	return t$1.width && t$1.height && (t$1.width += y / 2 || 0, t$1.height += y / 2 || 0), t$1.intersect = function(u$2) {
		return N$1.rect(t$1, u$2);
	}, h;
}
m(ns, "forkJoin");
async function ls(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let e = 80, a = 50, { shapeSvg: h, bbox: s$1 } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), l = /* @__PURE__ */ Math.max(e, s$1.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), o = /* @__PURE__ */ Math.max(a, s$1.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), n$1 = o / 2, { cssStyles: p$1 } = t$1, f = /* @__PURE__ */ v.svg(h), m$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = [
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
	], g$1 = /* @__PURE__ */ H(d$1), y = /* @__PURE__ */ f.path(g$1, m$2), u$2 = /* @__PURE__ */ h.insert(() => y, ":first-child");
	return u$2.attr("class", "basic label-container"), p$1 && t$1.look !== "handDrawn" && u$2.selectChildren("path").attr("style", p$1), r && t$1.look !== "handDrawn" && u$2.selectChildren("path").attr("style", r), D(t$1, u$2), t$1.intersect = function(b) {
		return pt.info("Pill intersect", t$1, {
			radius: n$1,
			point: b
		}), N$1.polygon(t$1, d$1, b);
	}, h;
}
m(ls, "halfRoundedRectangle");
async function cs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = a.height + (t$1.padding ?? 0), s$1 = a.width + (t$1.padding ?? 0) * 2.5, { cssStyles: l } = t$1, o = /* @__PURE__ */ v.svg(e), n$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (n$1.roughness = 0, n$1.fillStyle = "solid");
	let p$1 = s$1 / 2, f = p$1 / 6;
	p$1 = p$1 + f;
	let m$2 = h / 2, d$1 = m$2 / 2, g$1 = p$1 - d$1, y = [
		{
			x: -g$1,
			y: -m$2
		},
		{
			x: 0,
			y: -m$2
		},
		{
			x: g$1,
			y: -m$2
		},
		{
			x: p$1,
			y: 0
		},
		{
			x: g$1,
			y: m$2
		},
		{
			x: 0,
			y: m$2
		},
		{
			x: -g$1,
			y: m$2
		},
		{
			x: -p$1,
			y: 0
		}
	], u$2 = /* @__PURE__ */ H(y), b = /* @__PURE__ */ o.path(u$2, n$1), S$2 = /* @__PURE__ */ e.insert(() => b, ":first-child");
	return S$2.attr("class", "basic label-container"), l && t$1.look !== "handDrawn" && S$2.selectChildren("path").attr("style", l), r && t$1.look !== "handDrawn" && S$2.selectChildren("path").attr("style", r), t$1.width = s$1, t$1.height = h, D(t$1, S$2), t$1.intersect = function(k) {
		return N$1.polygon(t$1, y, k);
	}, e;
}
m(cs, "hexagon");
async function hs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.label = "", t$1.labelStyle = i;
	let { shapeSvg: e } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), a = /* @__PURE__ */ Math.max(30, t$1?.width ?? 0), h = /* @__PURE__ */ Math.max(30, t$1?.height ?? 0), { cssStyles: s$1 } = t$1, l = /* @__PURE__ */ v.svg(e), o = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (o.roughness = 0, o.fillStyle = "solid");
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
	return m$2.attr("class", "basic label-container"), s$1 && t$1.look !== "handDrawn" && m$2.selectChildren("path").attr("style", s$1), r && t$1.look !== "handDrawn" && m$2.selectChildren("path").attr("style", r), m$2.attr("transform", `translate(${-a / 2}, ${-h / 2})`), D(t$1, m$2), t$1.intersect = function(d$1) {
		return pt.info("Pill intersect", t$1, { points: n$1 }), N$1.polygon(t$1, n$1, d$1);
	}, e;
}
m(hs, "hourglass");
async function ps(c$1, t$1, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m$1(t$1);
	t$1.labelStyle = e;
	let a = t$1.assetHeight ?? 48, h = t$1.assetWidth ?? 48, s$1 = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t$1.width = /* @__PURE__ */ Math.max(s$1, l ?? 0);
	let { shapeSvg: o, bbox: n$1, label: p$1 } = await C(c$1, t$1, "icon-shape default"), f = t$1.pos === "t", m$2 = s$1, d$1 = s$1, { nodeBorder: g$1 } = i, { stylesMap: y } = p(t$1), u$2 = -d$1 / 2, b = -m$2 / 2, S$2 = t$1.label ? 8 : 0, k = /* @__PURE__ */ v.svg(o), w$1 = /* @__PURE__ */ S$1(t$1, {
		stroke: "none",
		fill: "none"
	});
	t$1.look !== "handDrawn" && (w$1.roughness = 0, w$1.fillStyle = "solid");
	let B = /* @__PURE__ */ k.rectangle(u$2, b, d$1, m$2, w$1), T = /* @__PURE__ */ Math.max(d$1, n$1.width), R = m$2 + n$1.height + S$2, E = /* @__PURE__ */ k.rectangle(-T / 2, -R / 2, T, R, {
		...w$1,
		fill: "transparent",
		stroke: "none"
	}), L$1 = /* @__PURE__ */ o.insert(() => B, ":first-child"), O = /* @__PURE__ */ o.insert(() => E);
	if (t$1.icon) {
		let V$1 = /* @__PURE__ */ o.append("g");
		V$1.html(`<g>${await ve(t$1.icon, {
			height: s$1,
			width: s$1,
			fallbackPrefix: ""
		})}</g>`);
		let G = /* @__PURE__ */ V$1.node().getBBox(), j = G.width, W = G.height, A = G.x, I$1 = G.y;
		V$1.attr("transform", `translate(${-j / 2 - A},${f ? n$1.height / 2 + S$2 / 2 - W / 2 - I$1 : -n$1.height / 2 - S$2 / 2 - W / 2 - I$1})`), V$1.attr("style", `color: ${y.get("stroke") ?? g$1};`);
	}
	return p$1.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${f ? -R / 2 : R / 2 - n$1.height})`), L$1.attr("transform", `translate(0,${f ? n$1.height / 2 + S$2 / 2 : -n$1.height / 2 - S$2 / 2})`), D(t$1, O), t$1.intersect = function(V$1) {
		if (pt.info("iconSquare intersect", t$1, V$1), !t$1.label) return N$1.rect(t$1, V$1);
		let G = t$1.x ?? 0, j = t$1.y ?? 0, W = t$1.height ?? 0, A = [];
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
				y: j - W / 2 + n$1.height + S$2
			},
			{
				x: G + d$1 / 2,
				y: j - W / 2 + n$1.height + S$2
			},
			{
				x: G + d$1 / 2,
				y: j + W / 2
			},
			{
				x: G - d$1 / 2,
				y: j + W / 2
			},
			{
				x: G - d$1 / 2,
				y: j - W / 2 + n$1.height + S$2
			},
			{
				x: G - n$1.width / 2,
				y: j - W / 2 + n$1.height + S$2
			}
		] : A = [
			{
				x: G - d$1 / 2,
				y: j - W / 2
			},
			{
				x: G + d$1 / 2,
				y: j - W / 2
			},
			{
				x: G + d$1 / 2,
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
				x: G - d$1 / 2,
				y: j - W / 2 + m$2
			}
		], N$1.polygon(t$1, A, V$1);
	}, o;
}
m(ps, "icon");
async function ms(c$1, t$1, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m$1(t$1);
	t$1.labelStyle = e;
	let a = t$1.assetHeight ?? 48, h = t$1.assetWidth ?? 48, s$1 = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t$1.width = /* @__PURE__ */ Math.max(s$1, l ?? 0);
	let { shapeSvg: o, bbox: n$1, label: p$1 } = await C(c$1, t$1, "icon-shape default"), f = 20, m$2 = t$1.label ? 8 : 0, d$1 = t$1.pos === "t", { nodeBorder: g$1, mainBkg: y } = i, { stylesMap: u$2 } = p(t$1), b = /* @__PURE__ */ v.svg(o), S$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (S$2.roughness = 0, S$2.fillStyle = "solid");
	S$2.stroke = u$2.get("fill") ?? y;
	let w$1 = /* @__PURE__ */ o.append("g");
	t$1.icon && w$1.html(`<g>${await ve(t$1.icon, {
		height: s$1,
		width: s$1,
		fallbackPrefix: ""
	})}</g>`);
	let B = /* @__PURE__ */ w$1.node().getBBox(), T = B.width, R = B.height, E = B.x, L$1 = B.y, O = Math.max(T, R) * Math.SQRT2 + f * 2, V$1 = /* @__PURE__ */ b.circle(0, 0, O, S$2), G = /* @__PURE__ */ Math.max(O, n$1.width), j = O + n$1.height + m$2, W = /* @__PURE__ */ b.rectangle(-G / 2, -j / 2, G, j, {
		...S$2,
		fill: "transparent",
		stroke: "none"
	}), A = /* @__PURE__ */ o.insert(() => V$1, ":first-child"), I$1 = /* @__PURE__ */ o.insert(() => W);
	return w$1.attr("transform", `translate(${-T / 2 - E},${d$1 ? n$1.height / 2 + m$2 / 2 - R / 2 - L$1 : -n$1.height / 2 - m$2 / 2 - R / 2 - L$1})`), w$1.attr("style", `color: ${u$2.get("stroke") ?? g$1};`), p$1.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${d$1 ? -j / 2 : j / 2 - n$1.height})`), A.attr("transform", `translate(0,${d$1 ? n$1.height / 2 + m$2 / 2 : -n$1.height / 2 - m$2 / 2})`), D(t$1, I$1), t$1.intersect = function(F) {
		return pt.info("iconSquare intersect", t$1, F), N$1.rect(t$1, F);
	}, o;
}
m(ms, "iconCircle");
async function fs(c$1, t$1, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m$1(t$1);
	t$1.labelStyle = e;
	let a = t$1.assetHeight ?? 48, h = t$1.assetWidth ?? 48, s$1 = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t$1.width = /* @__PURE__ */ Math.max(s$1, l ?? 0);
	let { shapeSvg: o, bbox: n$1, halfPadding: p$1, label: f } = await C(c$1, t$1, "icon-shape default"), m$2 = t$1.pos === "t", d$1 = s$1 + p$1 * 2, g$1 = s$1 + p$1 * 2, { nodeBorder: y, mainBkg: u$2 } = i, { stylesMap: b } = p(t$1), S$2 = -g$1 / 2, k = -d$1 / 2, w$1 = t$1.label ? 8 : 0, B = /* @__PURE__ */ v.svg(o), T = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
	T.stroke = b.get("fill") ?? u$2;
	let E = /* @__PURE__ */ B.path(/* @__PURE__ */ st(S$2, k, g$1, d$1, 5), T), L$1 = /* @__PURE__ */ Math.max(g$1, n$1.width), O = d$1 + n$1.height + w$1, V$1 = /* @__PURE__ */ B.rectangle(-L$1 / 2, -O / 2, L$1, O, {
		...T,
		fill: "transparent",
		stroke: "none"
	}), G = /* @__PURE__ */ o.insert(() => E, ":first-child").attr("class", "icon-shape2"), j = /* @__PURE__ */ o.insert(() => V$1);
	if (t$1.icon) {
		let W = /* @__PURE__ */ o.append("g");
		W.html(`<g>${await ve(t$1.icon, {
			height: s$1,
			width: s$1,
			fallbackPrefix: ""
		})}</g>`);
		let A = /* @__PURE__ */ W.node().getBBox(), I$1 = A.width, F = A.height, Q = A.x, it = A.y;
		W.attr("transform", `translate(${-I$1 / 2 - Q},${m$2 ? n$1.height / 2 + w$1 / 2 - F / 2 - it : -n$1.height / 2 - w$1 / 2 - F / 2 - it})`), W.attr("style", `color: ${b.get("stroke") ?? y};`);
	}
	return f.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${m$2 ? -O / 2 : O / 2 - n$1.height})`), G.attr("transform", `translate(0,${m$2 ? n$1.height / 2 + w$1 / 2 : -n$1.height / 2 - w$1 / 2})`), D(t$1, j), t$1.intersect = function(W) {
		if (pt.info("iconSquare intersect", t$1, W), !t$1.label) return N$1.rect(t$1, W);
		let A = t$1.x ?? 0, I$1 = t$1.y ?? 0, F = t$1.height ?? 0, Q = [];
		return m$2 ? Q = [
			{
				x: A - n$1.width / 2,
				y: I$1 - F / 2
			},
			{
				x: A + n$1.width / 2,
				y: I$1 - F / 2
			},
			{
				x: A + n$1.width / 2,
				y: I$1 - F / 2 + n$1.height + w$1
			},
			{
				x: A + g$1 / 2,
				y: I$1 - F / 2 + n$1.height + w$1
			},
			{
				x: A + g$1 / 2,
				y: I$1 + F / 2
			},
			{
				x: A - g$1 / 2,
				y: I$1 + F / 2
			},
			{
				x: A - g$1 / 2,
				y: I$1 - F / 2 + n$1.height + w$1
			},
			{
				x: A - n$1.width / 2,
				y: I$1 - F / 2 + n$1.height + w$1
			}
		] : Q = [
			{
				x: A - g$1 / 2,
				y: I$1 - F / 2
			},
			{
				x: A + g$1 / 2,
				y: I$1 - F / 2
			},
			{
				x: A + g$1 / 2,
				y: I$1 - F / 2 + d$1
			},
			{
				x: A + n$1.width / 2,
				y: I$1 - F / 2 + d$1
			},
			{
				x: A + n$1.width / 2 / 2,
				y: I$1 + F / 2
			},
			{
				x: A - n$1.width / 2,
				y: I$1 + F / 2
			},
			{
				x: A - n$1.width / 2,
				y: I$1 - F / 2 + d$1
			},
			{
				x: A - g$1 / 2,
				y: I$1 - F / 2 + d$1
			}
		], N$1.polygon(t$1, Q, W);
	}, o;
}
m(fs, "iconRounded");
async function ds(c$1, t$1, { config: { themeVariables: i, flowchart: r } }) {
	let { labelStyles: e } = m$1(t$1);
	t$1.labelStyle = e;
	let a = t$1.assetHeight ?? 48, h = t$1.assetWidth ?? 48, s$1 = /* @__PURE__ */ Math.max(a, h), l = r?.wrappingWidth;
	t$1.width = /* @__PURE__ */ Math.max(s$1, l ?? 0);
	let { shapeSvg: o, bbox: n$1, halfPadding: p$1, label: f } = await C(c$1, t$1, "icon-shape default"), m$2 = t$1.pos === "t", d$1 = s$1 + p$1 * 2, g$1 = s$1 + p$1 * 2, { nodeBorder: y, mainBkg: u$2 } = i, { stylesMap: b } = p(t$1), S$2 = -g$1 / 2, k = -d$1 / 2, w$1 = t$1.label ? 8 : 0, B = /* @__PURE__ */ v.svg(o), T = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
	T.stroke = b.get("fill") ?? u$2;
	let E = /* @__PURE__ */ B.path(/* @__PURE__ */ st(S$2, k, g$1, d$1, .1), T), L$1 = /* @__PURE__ */ Math.max(g$1, n$1.width), O = d$1 + n$1.height + w$1, V$1 = /* @__PURE__ */ B.rectangle(-L$1 / 2, -O / 2, L$1, O, {
		...T,
		fill: "transparent",
		stroke: "none"
	}), G = /* @__PURE__ */ o.insert(() => E, ":first-child"), j = /* @__PURE__ */ o.insert(() => V$1);
	if (t$1.icon) {
		let W = /* @__PURE__ */ o.append("g");
		W.html(`<g>${await ve(t$1.icon, {
			height: s$1,
			width: s$1,
			fallbackPrefix: ""
		})}</g>`);
		let A = /* @__PURE__ */ W.node().getBBox(), I$1 = A.width, F = A.height, Q = A.x, it = A.y;
		W.attr("transform", `translate(${-I$1 / 2 - Q},${m$2 ? n$1.height / 2 + w$1 / 2 - F / 2 - it : -n$1.height / 2 - w$1 / 2 - F / 2 - it})`), W.attr("style", `color: ${b.get("stroke") ?? y};`);
	}
	return f.attr("transform", `translate(${-n$1.width / 2 - (n$1.x - (n$1.left ?? 0))},${m$2 ? -O / 2 : O / 2 - n$1.height})`), G.attr("transform", `translate(0,${m$2 ? n$1.height / 2 + w$1 / 2 : -n$1.height / 2 - w$1 / 2})`), D(t$1, j), t$1.intersect = function(W) {
		if (pt.info("iconSquare intersect", t$1, W), !t$1.label) return N$1.rect(t$1, W);
		let A = t$1.x ?? 0, I$1 = t$1.y ?? 0, F = t$1.height ?? 0, Q = [];
		return m$2 ? Q = [
			{
				x: A - n$1.width / 2,
				y: I$1 - F / 2
			},
			{
				x: A + n$1.width / 2,
				y: I$1 - F / 2
			},
			{
				x: A + n$1.width / 2,
				y: I$1 - F / 2 + n$1.height + w$1
			},
			{
				x: A + g$1 / 2,
				y: I$1 - F / 2 + n$1.height + w$1
			},
			{
				x: A + g$1 / 2,
				y: I$1 + F / 2
			},
			{
				x: A - g$1 / 2,
				y: I$1 + F / 2
			},
			{
				x: A - g$1 / 2,
				y: I$1 - F / 2 + n$1.height + w$1
			},
			{
				x: A - n$1.width / 2,
				y: I$1 - F / 2 + n$1.height + w$1
			}
		] : Q = [
			{
				x: A - g$1 / 2,
				y: I$1 - F / 2
			},
			{
				x: A + g$1 / 2,
				y: I$1 - F / 2
			},
			{
				x: A + g$1 / 2,
				y: I$1 - F / 2 + d$1
			},
			{
				x: A + n$1.width / 2,
				y: I$1 - F / 2 + d$1
			},
			{
				x: A + n$1.width / 2 / 2,
				y: I$1 + F / 2
			},
			{
				x: A - n$1.width / 2,
				y: I$1 + F / 2
			},
			{
				x: A - n$1.width / 2,
				y: I$1 - F / 2 + d$1
			},
			{
				x: A - g$1 / 2,
				y: I$1 - F / 2 + d$1
			}
		], N$1.polygon(t$1, Q, W);
	}, o;
}
m(ds, "iconSquare");
async function gs(c$1, t$1, { config: { flowchart: i } }) {
	let r = new Image();
	r.src = t$1?.img ?? "", await r.decode();
	let e = /* @__PURE__ */ Number(/* @__PURE__ */ r.naturalWidth.toString().replace("px", "")), a = /* @__PURE__ */ Number(/* @__PURE__ */ r.naturalHeight.toString().replace("px", ""));
	t$1.imageAspectRatio = e / a;
	let { labelStyles: h } = m$1(t$1);
	t$1.labelStyle = h;
	let s$1 = i?.wrappingWidth;
	t$1.defaultWidth = i?.wrappingWidth;
	let l = /* @__PURE__ */ Math.max(t$1.label ? s$1 ?? 0 : 0, t$1?.assetWidth ?? e), o = t$1.constraint === "on" && t$1?.assetHeight ? t$1.assetHeight * t$1.imageAspectRatio : l, n$1 = t$1.constraint === "on" ? o / t$1.imageAspectRatio : t$1?.assetHeight ?? a;
	t$1.width = /* @__PURE__ */ Math.max(o, s$1 ?? 0);
	let { shapeSvg: p$1, bbox: f, label: m$2 } = await C(c$1, t$1, "image-shape default"), d$1 = t$1.pos === "t", g$1 = -o / 2, y = -n$1 / 2, u$2 = t$1.label ? 8 : 0, b = /* @__PURE__ */ v.svg(p$1), S$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (S$2.roughness = 0, S$2.fillStyle = "solid");
	let k = /* @__PURE__ */ b.rectangle(g$1, y, o, n$1, S$2), w$1 = /* @__PURE__ */ Math.max(o, f.width), B = n$1 + f.height + u$2, T = /* @__PURE__ */ b.rectangle(-w$1 / 2, -B / 2, w$1, B, {
		...S$2,
		fill: "none",
		stroke: "none"
	}), R = /* @__PURE__ */ p$1.insert(() => k, ":first-child"), E = /* @__PURE__ */ p$1.insert(() => T);
	if (t$1.img) {
		let L$1 = /* @__PURE__ */ p$1.append("image");
		L$1.attr("href", t$1.img), L$1.attr("width", o), L$1.attr("height", n$1), L$1.attr("preserveAspectRatio", "none"), L$1.attr("transform", `translate(${-o / 2},${d$1 ? B / 2 - n$1 : -B / 2})`);
	}
	return m$2.attr("transform", `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${d$1 ? -n$1 / 2 - f.height / 2 - u$2 / 2 : n$1 / 2 - f.height / 2 + u$2 / 2})`), R.attr("transform", `translate(0,${d$1 ? f.height / 2 + u$2 / 2 : -f.height / 2 - u$2 / 2})`), D(t$1, E), t$1.intersect = function(L$1) {
		if (pt.info("iconSquare intersect", t$1, L$1), !t$1.label) return N$1.rect(t$1, L$1);
		let O = t$1.x ?? 0, V$1 = t$1.y ?? 0, G = t$1.height ?? 0, j = [];
		return d$1 ? j = [
			{
				x: O - f.width / 2,
				y: V$1 - G / 2
			},
			{
				x: O + f.width / 2,
				y: V$1 - G / 2
			},
			{
				x: O + f.width / 2,
				y: V$1 - G / 2 + f.height + u$2
			},
			{
				x: O + o / 2,
				y: V$1 - G / 2 + f.height + u$2
			},
			{
				x: O + o / 2,
				y: V$1 + G / 2
			},
			{
				x: O - o / 2,
				y: V$1 + G / 2
			},
			{
				x: O - o / 2,
				y: V$1 - G / 2 + f.height + u$2
			},
			{
				x: O - f.width / 2,
				y: V$1 - G / 2 + f.height + u$2
			}
		] : j = [
			{
				x: O - o / 2,
				y: V$1 - G / 2
			},
			{
				x: O + o / 2,
				y: V$1 - G / 2
			},
			{
				x: O + o / 2,
				y: V$1 - G / 2 + n$1
			},
			{
				x: O + f.width / 2,
				y: V$1 - G / 2 + n$1
			},
			{
				x: O + f.width / 2 / 2,
				y: V$1 + G / 2
			},
			{
				x: O - f.width / 2,
				y: V$1 + G / 2
			},
			{
				x: O - f.width / 2,
				y: V$1 - G / 2 + n$1
			},
			{
				x: O - o / 2,
				y: V$1 - G / 2 + n$1
			}
		], N$1.polygon(t$1, j, L$1);
	}, p$1;
}
m(gs, "imageSquare");
async function us(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), s$1 = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), l = [
		{
			x: 0,
			y: 0
		},
		{
			x: h,
			y: 0
		},
		{
			x: h + 3 * s$1 / 6,
			y: -s$1
		},
		{
			x: -3 * s$1 / 6,
			y: -s$1
		}
	], o, { cssStyles: n$1 } = t$1;
	if (t$1.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S$1(t$1, {}), m$2 = /* @__PURE__ */ H(l), d$1 = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d$1, ":first-child").attr("transform", `translate(${-h / 2}, ${s$1 / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s$1, l);
	return r && o.attr("style", r), t$1.width = h, t$1.height = s$1, D(t$1, o), t$1.intersect = function(p$1) {
		return N$1.polygon(t$1, l, p$1);
	}, e;
}
m(us, "inv_trapezoid");
async function Dt(c$1, t$1, i) {
	let { labelStyles: r, nodeStyles: e } = m$1(t$1);
	t$1.labelStyle = r;
	let { shapeSvg: a, bbox: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(h.width + i.labelPaddingX * 2, t$1?.width || 0), l = /* @__PURE__ */ Math.max(h.height + i.labelPaddingY * 2, t$1?.height || 0), o = -s$1 / 2, n$1 = -l / 2, p$1, { rx: f, ry: m$2 } = t$1, { cssStyles: d$1 } = t$1;
	if (i?.rx && i.ry && (f = i.rx, m$2 = i.ry), t$1.look === "handDrawn") {
		let g$1 = /* @__PURE__ */ v.svg(a), y = /* @__PURE__ */ S$1(t$1, {}), u$2 = f || m$2 ? g$1.path(/* @__PURE__ */ st(o, n$1, s$1, l, f || 0), y) : g$1.rectangle(o, n$1, s$1, l, y);
		p$1 = /* @__PURE__ */ a.insert(() => u$2, ":first-child"), p$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(d$1));
	} else p$1 = /* @__PURE__ */ a.insert("rect", ":first-child"), p$1.attr("class", "basic label-container").attr("style", e).attr("rx", /* @__PURE__ */ Vt$1(f)).attr("ry", /* @__PURE__ */ Vt$1(m$2)).attr("x", o).attr("y", n$1).attr("width", s$1).attr("height", l);
	return D(t$1, p$1), t$1.calcIntersect = function(g$1, y) {
		return N$1.rect(g$1, y);
	}, t$1.intersect = function(g$1) {
		return N$1.rect(t$1, g$1);
	}, a;
}
m(Dt, "drawRect");
async function ys(c$1, t$1) {
	let { shapeSvg: i, bbox: r, label: e } = await C(c$1, t$1, "label"), a = /* @__PURE__ */ i.insert("rect", ":first-child");
	return a.attr("width", .1).attr("height", .1), i.attr("class", "label edgeLabel"), e.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), D(t$1, a), t$1.intersect = function(l) {
		return N$1.rect(t$1, l);
	}, i;
}
m(ys, "labelRect");
async function xs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0), t$1?.width ?? 0), s$1 = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0), t$1?.height ?? 0), l = [
		{
			x: 0,
			y: 0
		},
		{
			x: h + 3 * s$1 / 6,
			y: 0
		},
		{
			x: h,
			y: -s$1
		},
		{
			x: -(3 * s$1) / 6,
			y: -s$1
		}
	], o, { cssStyles: n$1 } = t$1;
	if (t$1.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S$1(t$1, {}), m$2 = /* @__PURE__ */ H(l), d$1 = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d$1, ":first-child").attr("transform", `translate(${-h / 2}, ${s$1 / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s$1, l);
	return r && o.attr("style", r), t$1.width = h, t$1.height = s$1, D(t$1, o), t$1.intersect = function(p$1) {
		return N$1.polygon(t$1, l, p$1);
	}, e;
}
m(xs, "lean_left");
async function bs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0), t$1?.width ?? 0), s$1 = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0), t$1?.height ?? 0), l = [
		{
			x: -3 * s$1 / 6,
			y: 0
		},
		{
			x: h,
			y: 0
		},
		{
			x: h + 3 * s$1 / 6,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1
		}
	], o, { cssStyles: n$1 } = t$1;
	if (t$1.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S$1(t$1, {}), m$2 = /* @__PURE__ */ H(l), d$1 = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d$1, ":first-child").attr("transform", `translate(${-h / 2}, ${s$1 / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s$1, l);
	return r && o.attr("style", r), t$1.width = h, t$1.height = s$1, D(t$1, o), t$1.intersect = function(p$1) {
		return N$1.polygon(t$1, l, p$1);
	}, e;
}
m(bs, "lean_right");
function Ss(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.label = "", t$1.labelStyle = i;
	let e = /* @__PURE__ */ c$1.insert("g").attr("class", /* @__PURE__ */ P(t$1)).attr("id", t$1.domId ?? t$1.id), { cssStyles: a } = t$1, h = /* @__PURE__ */ Math.max(35, t$1?.width ?? 0), s$1 = /* @__PURE__ */ Math.max(35, t$1?.height ?? 0), l = 7, o = [
		{
			x: h,
			y: 0
		},
		{
			x: 0,
			y: s$1 + l / 2
		},
		{
			x: h - 2 * l,
			y: s$1 + l / 2
		},
		{
			x: 0,
			y: 2 * s$1
		},
		{
			x: h,
			y: s$1 - l / 2
		},
		{
			x: 2 * l,
			y: s$1 - l / 2
		}
	], n$1 = /* @__PURE__ */ v.svg(e), p$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = /* @__PURE__ */ H(o), m$2 = /* @__PURE__ */ n$1.path(f, p$1), d$1 = /* @__PURE__ */ e.insert(() => m$2, ":first-child");
	return a && t$1.look !== "handDrawn" && d$1.selectAll("path").attr("style", a), r && t$1.look !== "handDrawn" && d$1.selectAll("path").attr("style", r), d$1.attr("transform", `translate(-${h / 2},${-s$1})`), D(t$1, d$1), t$1.intersect = function(g$1) {
		return pt.info("lightningBolt intersect", t$1, g$1), N$1.polygon(t$1, o, g$1);
	}, e;
}
m(Ss, "lightningBolt");
var Br = /* @__PURE__ */ m((c$1, t$1, i, r, e, a, h) => [
	`M${c$1},${t$1 + a}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`,
	`M${c$1},${t$1 + a + h}`,
	`a${e},${a} 0,0,0 ${i},0`
].join(" "), "createCylinderPathD"), Cr = /* @__PURE__ */ m((c$1, t$1, i, r, e, a, h) => [
	`M${c$1},${t$1 + a}`,
	`M${c$1 + i},${t$1 + a}`,
	`a${e},${a} 0,0,0 ${-i},0`,
	`l0,${r}`,
	`a${e},${a} 0,0,0 ${i},0`,
	`l0,${-r}`,
	`M${c$1},${t$1 + a + h}`,
	`a${e},${a} 0,0,0 ${i},0`
].join(" "), "createOuterCylinderPathD"), Tr = /* @__PURE__ */ m((c$1, t$1, i, r, e, a) => [`M${c$1 - i / 2},${-r / 2}`, `a${e},${a} 0,0,0 ${i},0`].join(" "), "createInnerCylinderPathD");
async function ws(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0), t$1.width ?? 0), l = s$1 / 2, o = l / (2.5 + s$1 / 50), n$1 = /* @__PURE__ */ Math.max(a.height + o + (t$1.padding ?? 0), t$1.height ?? 0), p$1 = n$1 * .1, f, { cssStyles: m$2 } = t$1;
	if (t$1.look === "handDrawn") {
		let d$1 = /* @__PURE__ */ v.svg(e), g$1 = /* @__PURE__ */ Cr(0, 0, s$1, n$1, l, o, p$1), y = /* @__PURE__ */ Tr(0, o, s$1, n$1, l, o), u$2 = /* @__PURE__ */ S$1(t$1, {}), b = /* @__PURE__ */ d$1.path(g$1, u$2), S$2 = /* @__PURE__ */ d$1.path(y, u$2);
		e.insert(() => S$2, ":first-child").attr("class", "line"), f = /* @__PURE__ */ e.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), m$2 && f.attr("style", m$2);
	} else {
		let d$1 = /* @__PURE__ */ Br(0, 0, s$1, n$1, l, o, p$1);
		f = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", d$1).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(m$2)).attr("style", r);
	}
	return f.attr("label-offset-y", o), f.attr("transform", `translate(${-s$1 / 2}, ${-(n$1 / 2 + o)})`), D(t$1, f), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o - (a.y - (a.top ?? 0))})`), t$1.intersect = function(d$1) {
		let g$1 = /* @__PURE__ */ N$1.rect(t$1, d$1), y = g$1.x - (t$1.x ?? 0);
		if (l != 0 && (Math.abs(y) < (t$1.width ?? 0) / 2 || Math.abs(y) == (t$1.width ?? 0) / 2 && Math.abs(g$1.y - (t$1.y ?? 0)) > (t$1.height ?? 0) / 2 - o)) {
			let u$2 = o * o * (1 - y * y / (l * l));
			u$2 > 0 && (u$2 = /* @__PURE__ */ Math.sqrt(u$2)), u$2 = o - u$2, d$1.y - (t$1.y ?? 0) > 0 && (u$2 = -u$2), g$1.y += u$2;
		}
		return g$1;
	}, e;
}
m(ws, "linedCylinder");
async function Ns(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), o = l / 4, n$1 = l + o, { cssStyles: p$1 } = t$1, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = [
		{
			x: -s$1 / 2 - s$1 / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s$1 / 2 - s$1 / 2 * .1,
			y: n$1 / 2
		},
		.../* @__PURE__ */ lt(-s$1 / 2 - s$1 / 2 * .1, n$1 / 2, s$1 / 2 + s$1 / 2 * .1, n$1 / 2, o, .8),
		{
			x: s$1 / 2 + s$1 / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s$1 / 2 - s$1 / 2 * .1,
			y: -n$1 / 2
		},
		{
			x: -s$1 / 2,
			y: -n$1 / 2
		},
		{
			x: -s$1 / 2,
			y: n$1 / 2 * 1.1
		},
		{
			x: -s$1 / 2,
			y: -n$1 / 2
		}
	], g$1 = /* @__PURE__ */ f.polygon(/* @__PURE__ */ d$1.map((u$2) => [u$2.x, u$2.y]), m$2), y = /* @__PURE__ */ e.insert(() => g$1, ":first-child");
	return y.attr("class", "basic label-container"), p$1 && t$1.look !== "handDrawn" && y.selectAll("path").attr("style", p$1), r && t$1.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s$1 / 2 + (t$1.padding ?? 0) + s$1 / 2 * .1 / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t$1.padding ?? 0) - o / 2 - (a.y - (a.top ?? 0))})`), D(t$1, y), t$1.intersect = function(u$2) {
		return N$1.polygon(t$1, d$1, u$2);
	}, e;
}
m(Ns, "linedWaveEdgedRect");
async function $s$1(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), o = 5, n$1 = -s$1 / 2, p$1 = -l / 2, { cssStyles: f } = t$1, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, {}), g$1 = [
		{
			x: n$1 - o,
			y: p$1 + o
		},
		{
			x: n$1 - o,
			y: p$1 + l + o
		},
		{
			x: n$1 + s$1 - o,
			y: p$1 + l + o
		},
		{
			x: n$1 + s$1 - o,
			y: p$1 + l
		},
		{
			x: n$1 + s$1,
			y: p$1 + l
		},
		{
			x: n$1 + s$1,
			y: p$1 + l - o
		},
		{
			x: n$1 + s$1 + o,
			y: p$1 + l - o
		},
		{
			x: n$1 + s$1 + o,
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
			x: n$1 + s$1 - o,
			y: p$1 + o
		},
		{
			x: n$1 + s$1 - o,
			y: p$1 + l
		},
		{
			x: n$1 + s$1,
			y: p$1 + l
		},
		{
			x: n$1 + s$1,
			y: p$1
		},
		{
			x: n$1,
			y: p$1
		}
	];
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let u$2 = /* @__PURE__ */ H(g$1), b = /* @__PURE__ */ m$2.path(u$2, d$1), S$2 = /* @__PURE__ */ H(y), k = /* @__PURE__ */ m$2.path(S$2, {
		...d$1,
		fill: "none"
	}), w$1 = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w$1.insert(() => b, ":first-child"), w$1.attr("class", "basic label-container"), f && t$1.look !== "handDrawn" && w$1.selectAll("path").attr("style", f), r && t$1.look !== "handDrawn" && w$1.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) - o - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o - (a.y - (a.top ?? 0))})`), D(t$1, w$1), t$1.intersect = function(B) {
		return N$1.polygon(t$1, g$1, B);
	}, e;
}
m($s$1, "multiRect");
async function Ds(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), o = l / 4, n$1 = l + o, p$1 = -s$1 / 2, f = -n$1 / 2, m$2 = 5, { cssStyles: d$1 } = t$1, g$1 = /* @__PURE__ */ lt(p$1 - m$2, f + n$1 + m$2, p$1 + s$1 - m$2, f + n$1 + m$2, o, .8), y = g$1?.[g$1.length - 1], u$2 = [
		{
			x: p$1 - m$2,
			y: f + m$2
		},
		{
			x: p$1 - m$2,
			y: f + n$1 + m$2
		},
		...g$1,
		{
			x: p$1 + s$1 - m$2,
			y: y.y - m$2
		},
		{
			x: p$1 + s$1,
			y: y.y - m$2
		},
		{
			x: p$1 + s$1,
			y: y.y - 2 * m$2
		},
		{
			x: p$1 + s$1 + m$2,
			y: y.y - 2 * m$2
		},
		{
			x: p$1 + s$1 + m$2,
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
			x: p$1 + s$1 - m$2,
			y: f + m$2
		},
		{
			x: p$1 + s$1 - m$2,
			y: y.y - m$2
		},
		{
			x: p$1 + s$1,
			y: y.y - m$2
		},
		{
			x: p$1 + s$1,
			y: f
		},
		{
			x: p$1,
			y: f
		}
	], S$2 = /* @__PURE__ */ v.svg(e), k = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
	let w$1 = /* @__PURE__ */ H(u$2), B = /* @__PURE__ */ S$2.path(w$1, k), T = /* @__PURE__ */ H(b), R = /* @__PURE__ */ S$2.path(T, k), E = /* @__PURE__ */ e.insert(() => B, ":first-child");
	return E.insert(() => R), E.attr("class", "basic label-container"), d$1 && t$1.look !== "handDrawn" && E.selectAll("path").attr("style", d$1), r && t$1.look !== "handDrawn" && E.selectAll("path").attr("style", r), E.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-(a.width / 2) - m$2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + m$2 - o / 2 - (a.y - (a.top ?? 0))})`), D(t$1, E), t$1.intersect = function(L$1) {
		return N$1.polygon(t$1, u$2, L$1);
	}, e;
}
m(Ds, "multiWaveEdgedRectangle");
async function vs(c$1, t$1, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m$1(t$1);
	t$1.labelStyle = r, t$1.useHtmlLabels || Ot().flowchart?.htmlLabels !== !1 || (t$1.centerLabel = !0);
	let { shapeSvg: h, bbox: s$1, label: l } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), o = /* @__PURE__ */ Math.max(s$1.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), n$1 = /* @__PURE__ */ Math.max(s$1.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), p$1 = -o / 2, f = -n$1 / 2, { cssStyles: m$2 } = t$1, d$1 = /* @__PURE__ */ v.svg(h), g$1 = /* @__PURE__ */ S$1(t$1, {
		fill: i.noteBkgColor,
		stroke: i.noteBorderColor
	});
	t$1.look !== "handDrawn" && (g$1.roughness = 0, g$1.fillStyle = "solid");
	let y = /* @__PURE__ */ d$1.rectangle(p$1, f, o, n$1, g$1), u$2 = /* @__PURE__ */ h.insert(() => y, ":first-child");
	return u$2.attr("class", "basic label-container"), m$2 && t$1.look !== "handDrawn" && u$2.selectAll("path").attr("style", m$2), e && t$1.look !== "handDrawn" && u$2.selectAll("path").attr("style", e), l.attr("transform", `translate(${-s$1.width / 2 - (s$1.x - (s$1.left ?? 0))}, ${-(s$1.height / 2) - (s$1.y - (s$1.top ?? 0))})`), D(t$1, u$2), t$1.intersect = function(b) {
		return N$1.rect(t$1, b);
	}, h;
}
m(vs, "note");
var Rr$1 = /* @__PURE__ */ m((c$1, t$1, i) => [
	`M${c$1 + i / 2},${t$1}`,
	`L${c$1 + i},${t$1 - i / 2}`,
	`L${c$1 + i / 2},${t$1 - i}`,
	`L${c$1},${t$1 - i / 2}`,
	"Z"
].join(" "), "createDecisionBoxPathD");
async function Ms(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), l = a.width + t$1.padding + (a.height + t$1.padding), o = .5, n$1 = [
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
	], p$1, { cssStyles: f } = t$1;
	if (t$1.look === "handDrawn") {
		let m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, {}), g$1 = /* @__PURE__ */ Rr$1(0, 0, l), y = /* @__PURE__ */ m$2.path(g$1, d$1);
		p$1 = /* @__PURE__ */ e.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + o}, ${l / 2})`), f && p$1.attr("style", f);
	} else p$1 = /* @__PURE__ */ rt(e, l, l, n$1), p$1.attr("transform", `translate(${-l / 2 + o}, ${l / 2})`);
	return r && p$1.attr("style", r), D(t$1, p$1), t$1.calcIntersect = function(m$2, d$1) {
		let g$1 = m$2.width, y = [
			{
				x: g$1 / 2,
				y: 0
			},
			{
				x: g$1,
				y: -g$1 / 2
			},
			{
				x: g$1 / 2,
				y: -g$1
			},
			{
				x: 0,
				y: -g$1 / 2
			}
		], u$2 = /* @__PURE__ */ N$1.polygon(m$2, y, d$1);
		return {
			x: u$2.x - .5,
			y: u$2.y - .5
		};
	}, t$1.intersect = function(m$2) {
		return this.calcIntersect(t$1, m$2);
	}, e;
}
m(Ms, "question");
async function ks(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0), t$1?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0), t$1?.height ?? 0), o = -s$1 / 2, n$1 = -l / 2, p$1 = n$1 / 2, f = [
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
	], { cssStyles: m$2 } = t$1, d$1 = /* @__PURE__ */ v.svg(e), g$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (g$1.roughness = 0, g$1.fillStyle = "solid");
	let y = /* @__PURE__ */ H(f), u$2 = /* @__PURE__ */ d$1.path(y, g$1), b = /* @__PURE__ */ e.insert(() => u$2, ":first-child");
	return b.attr("class", "basic label-container"), m$2 && t$1.look !== "handDrawn" && b.selectAll("path").attr("style", m$2), r && t$1.look !== "handDrawn" && b.selectAll("path").attr("style", r), b.attr("transform", `translate(${-p$1 / 2},0)`), h.attr("transform", `translate(${-p$1 / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), D(t$1, b), t$1.intersect = function(S$2) {
		return N$1.polygon(t$1, f, S$2);
	}, e;
}
m(ks, "rect_left_inv_arrow");
async function Ps(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let e;
	t$1.cssClasses ? e = "node " + t$1.cssClasses : e = "node default";
	let a = /* @__PURE__ */ c$1.insert("g").attr("class", e).attr("id", t$1.domId || t$1.id), h = /* @__PURE__ */ a.insert("g"), s$1 = /* @__PURE__ */ a.insert("g").attr("class", "label").attr("style", r), l = t$1.description, o = t$1.label, n$1 = /* @__PURE__ */ s$1.node().appendChild(await Rt(o, t$1.labelStyle, !0, !0)), p$1 = {
		width: 0,
		height: 0
	};
	if (Mo(mr()?.flowchart?.htmlLabels)) {
		let R = n$1.children[0], E = /* @__PURE__ */ ia(n$1);
		p$1 = /* @__PURE__ */ R.getBoundingClientRect(), E.attr("width", p$1.width), E.attr("height", p$1.height);
	}
	pt.info("Text 2", l);
	let f = l || [], m$2 = /* @__PURE__ */ n$1.getBBox(), d$1 = /* @__PURE__ */ s$1.node().appendChild(await Rt(f.join ? f.join("<br/>") : f, t$1.labelStyle, !0, !0)), g$1 = d$1.children[0], y = /* @__PURE__ */ ia(d$1);
	p$1 = /* @__PURE__ */ g$1.getBoundingClientRect(), y.attr("width", p$1.width), y.attr("height", p$1.height);
	let u$2 = (t$1.padding || 0) / 2;
	ia(d$1).attr("transform", "translate( " + (p$1.width > m$2.width ? 0 : (m$2.width - p$1.width) / 2) + ", " + (m$2.height + u$2 + 5) + ")"), ia(n$1).attr("transform", "translate( " + (p$1.width < m$2.width ? 0 : -(m$2.width - p$1.width) / 2) + ", 0)"), p$1 = /* @__PURE__ */ s$1.node().getBBox(), s$1.attr("transform", "translate(" + -p$1.width / 2 + ", " + (-p$1.height / 2 - u$2 + 3) + ")");
	let b = p$1.width + (t$1.padding || 0), S$2 = p$1.height + (t$1.padding || 0), k = -p$1.width / 2 - u$2, w$1 = -p$1.height / 2 - u$2, B, T;
	if (t$1.look === "handDrawn") {
		let R = /* @__PURE__ */ v.svg(a), E = /* @__PURE__ */ S$1(t$1, {}), L$1 = /* @__PURE__ */ R.path(/* @__PURE__ */ st(k, w$1, b, S$2, t$1.rx || 0), E), O = /* @__PURE__ */ R.line(-p$1.width / 2 - u$2, -p$1.height / 2 - u$2 + m$2.height + u$2, p$1.width / 2 + u$2, -p$1.height / 2 - u$2 + m$2.height + u$2, E);
		T = /* @__PURE__ */ a.insert(() => (pt.debug("Rough node insert CXC", L$1), O), ":first-child"), B = /* @__PURE__ */ a.insert(() => (pt.debug("Rough node insert CXC", L$1), L$1), ":first-child");
	} else B = /* @__PURE__ */ h.insert("rect", ":first-child"), T = /* @__PURE__ */ h.insert("line"), B.attr("class", "outer title-state").attr("style", r).attr("x", -p$1.width / 2 - u$2).attr("y", -p$1.height / 2 - u$2).attr("width", p$1.width + (t$1.padding || 0)).attr("height", p$1.height + (t$1.padding || 0)), T.attr("class", "divider").attr("x1", -p$1.width / 2 - u$2).attr("x2", p$1.width / 2 + u$2).attr("y1", -p$1.height / 2 - u$2 + m$2.height + u$2).attr("y2", -p$1.height / 2 - u$2 + m$2.height + u$2);
	return D(t$1, B), t$1.intersect = function(R) {
		return N$1.rect(t$1, R);
	}, a;
}
m(Ps, "rectWithTitle");
function Yt$1(c$1, t$1, i, r, e, a, h) {
	let l = (c$1 + i) / 2, o = (t$1 + r) / 2, n$1 = /* @__PURE__ */ Math.atan2(r - t$1, i - c$1), p$1 = (i - c$1) / 2, f = (r - t$1) / 2, m$2 = p$1 / e, d$1 = f / a, g$1 = /* @__PURE__ */ Math.sqrt(m$2 ** 2 + d$1 ** 2);
	if (g$1 > 1) throw new Error("The given radii are too small to create an arc between the points.");
	let y = /* @__PURE__ */ Math.sqrt(1 - g$1 ** 2), u$2 = l + y * a * Math.sin(n$1) * (h ? -1 : 1), b = o - y * e * Math.cos(n$1) * (h ? -1 : 1), S$2 = /* @__PURE__ */ Math.atan2((t$1 - b) / a, (c$1 - u$2) / e), w$1 = Math.atan2((r - b) / a, (i - u$2) / e) - S$2;
	h && w$1 < 0 && (w$1 += 2 * Math.PI), !h && w$1 > 0 && (w$1 -= 2 * Math.PI);
	let B = [];
	for (let T = 0; T < 20; T++) {
		let E = S$2 + T / 19 * w$1, L$1 = u$2 + e * Math.cos(E), O = b + a * Math.sin(E);
		B.push({
			x: L$1,
			y: O
		});
	}
	return B;
}
m(Yt$1, "generateArcPoints");
async function Bs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = t$1?.padding ?? 0, s$1 = t$1?.padding ?? 0, l = (t$1?.width ? t$1?.width : a.width) + h * 2, o = (t$1?.height ? t$1?.height : a.height) + s$1 * 2, n$1 = t$1.radius || 5, p$1 = t$1.taper || 5, { cssStyles: f } = t$1, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.stroke && (d$1.stroke = t$1.stroke), t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = [
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
	], y = /* @__PURE__ */ H(g$1), u$2 = /* @__PURE__ */ m$2.path(y, d$1), b = /* @__PURE__ */ e.insert(() => u$2, ":first-child");
	return b.attr("class", "basic label-container outer-path"), f && t$1.look !== "handDrawn" && b.selectChildren("path").attr("style", f), r && t$1.look !== "handDrawn" && b.selectChildren("path").attr("style", r), D(t$1, b), t$1.intersect = function(S$2) {
		return N$1.polygon(t$1, g$1, S$2);
	}, e;
}
m(Bs, "roundedRect");
async function Cs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = t$1?.padding ?? 0, l = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), o = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), n$1 = -a.width / 2 - s$1, p$1 = -a.height / 2 - s$1, { cssStyles: f } = t$1, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = [
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
	], y = /* @__PURE__ */ m$2.polygon(/* @__PURE__ */ g$1.map((b) => [b.x, b.y]), d$1), u$2 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$2.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(f)), r && t$1.look !== "handDrawn" && u$2.selectAll("path").attr("style", r), f && t$1.look !== "handDrawn" && u$2.selectAll("path").attr("style", r), h.attr("transform", `translate(${-l / 2 + 4 + (t$1.padding ?? 0) - (a.x - (a.left ?? 0))},${-o / 2 + (t$1.padding ?? 0) - (a.y - (a.top ?? 0))})`), D(t$1, u$2), t$1.intersect = function(b) {
		return N$1.rect(t$1, b);
	}, e;
}
m(Cs, "shadedProcess");
async function Ts(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), o = -s$1 / 2, n$1 = -l / 2, { cssStyles: p$1 } = t$1, f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (m$2.roughness = 0, m$2.fillStyle = "solid");
	let d$1 = [
		{
			x: o,
			y: n$1
		},
		{
			x: o,
			y: n$1 + l
		},
		{
			x: o + s$1,
			y: n$1 + l
		},
		{
			x: o + s$1,
			y: n$1 - l / 2
		}
	], g$1 = /* @__PURE__ */ H(d$1), y = /* @__PURE__ */ f.path(g$1, m$2), u$2 = /* @__PURE__ */ e.insert(() => y, ":first-child");
	return u$2.attr("class", "basic label-container"), p$1 && t$1.look !== "handDrawn" && u$2.selectChildren("path").attr("style", p$1), r && t$1.look !== "handDrawn" && u$2.selectChildren("path").attr("style", r), u$2.attr("transform", `translate(0, ${l / 4})`), h.attr("transform", `translate(${-s$1 / 2 + (t$1.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-l / 4 + (t$1.padding ?? 0) - (a.y - (a.top ?? 0))})`), D(t$1, u$2), t$1.intersect = function(b) {
		return N$1.polygon(t$1, d$1, b);
	}, e;
}
m(Ts, "slopedRect");
async function Rs(c$1, t$1) {
	return Dt(c$1, t$1, {
		rx: 0,
		ry: 0,
		classes: "",
		labelPaddingX: t$1.labelPaddingX ?? (t$1?.padding || 0) * 2,
		labelPaddingY: (t$1?.padding || 0) * 1
	});
}
m(Rs, "squareRect");
async function Gs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = a.height + t$1.padding, s$1 = a.width + h / 4 + t$1.padding, l = h / 2, { cssStyles: o } = t$1, n$1 = /* @__PURE__ */ v.svg(e), p$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = [
		{
			x: -s$1 / 2 + l,
			y: -h / 2
		},
		{
			x: s$1 / 2 - l,
			y: -h / 2
		},
		.../* @__PURE__ */ Nt(-s$1 / 2 + l, 0, l, 50, 90, 270),
		{
			x: s$1 / 2 - l,
			y: h / 2
		},
		.../* @__PURE__ */ Nt(s$1 / 2 - l, 0, l, 50, 270, 450)
	], m$2 = /* @__PURE__ */ H(f), d$1 = /* @__PURE__ */ n$1.path(m$2, p$1), g$1 = /* @__PURE__ */ e.insert(() => d$1, ":first-child");
	return g$1.attr("class", "basic label-container outer-path"), o && t$1.look !== "handDrawn" && g$1.selectChildren("path").attr("style", o), r && t$1.look !== "handDrawn" && g$1.selectChildren("path").attr("style", r), D(t$1, g$1), t$1.intersect = function(y) {
		return N$1.polygon(t$1, f, y);
	}, e;
}
m(Gs, "stadium");
async function Es(c$1, t$1) {
	return Dt(c$1, t$1, {
		rx: 5,
		ry: 5,
		classes: "flowchart-node"
	});
}
m(Es, "state");
function js(c$1, t$1, { config: { themeVariables: i } }) {
	let { labelStyles: r, nodeStyles: e } = m$1(t$1);
	t$1.labelStyle = r;
	let { cssStyles: a } = t$1, { lineColor: h, stateBorder: s$1, nodeBorder: l } = i, o = /* @__PURE__ */ c$1.insert("g").attr("class", "node default").attr("id", t$1.domId || t$1.id), n$1 = /* @__PURE__ */ v.svg(o), p$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (p$1.roughness = 0, p$1.fillStyle = "solid");
	let f = /* @__PURE__ */ n$1.circle(0, 0, 14, {
		...p$1,
		stroke: h,
		strokeWidth: 2
	}), m$2 = s$1 ?? l, d$1 = /* @__PURE__ */ n$1.circle(0, 0, 5, {
		...p$1,
		fill: m$2,
		stroke: m$2,
		strokeWidth: 2,
		fillStyle: "solid"
	}), g$1 = /* @__PURE__ */ o.insert(() => f, ":first-child");
	return g$1.insert(() => d$1), a && g$1.selectAll("path").attr("style", a), e && g$1.selectAll("path").attr("style", e), D(t$1, g$1), t$1.intersect = function(y) {
		return N$1.circle(t$1, 7, y);
	}, o;
}
m(js, "stateEnd");
function As$1(c$1, t$1, { config: { themeVariables: i } }) {
	let { lineColor: r } = i, e = /* @__PURE__ */ c$1.insert("g").attr("class", "node default").attr("id", t$1.domId || t$1.id), a;
	if (t$1.look === "handDrawn") {
		let s$1 = /* @__PURE__ */ v.svg(e).circle(0, 0, 14, /* @__PURE__ */ u$1(r));
		a = /* @__PURE__ */ e.insert(() => s$1), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
	} else a = /* @__PURE__ */ e.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
	return D(t$1, a), t$1.intersect = function(h) {
		return N$1.circle(t$1, 7, h);
	}, e;
}
m(As$1, "stateStart");
async function Os(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = (t$1?.padding || 0) / 2, s$1 = a.width + t$1.padding, l = a.height + t$1.padding, o = -a.width / 2 - h, n$1 = -a.height / 2 - h, p$1 = [
		{
			x: 0,
			y: 0
		},
		{
			x: s$1,
			y: 0
		},
		{
			x: s$1,
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
			x: s$1 + 8,
			y: 0
		},
		{
			x: s$1 + 8,
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
	if (t$1.look === "handDrawn") {
		let f = /* @__PURE__ */ v.svg(e), m$2 = /* @__PURE__ */ S$1(t$1, {}), d$1 = /* @__PURE__ */ f.rectangle(o - 8, n$1, s$1 + 16, l, m$2), g$1 = /* @__PURE__ */ f.line(o, n$1, o, n$1 + l, m$2), y = /* @__PURE__ */ f.line(o + s$1, n$1, o + s$1, n$1 + l, m$2);
		e.insert(() => g$1, ":first-child"), e.insert(() => y, ":first-child");
		let u$2 = /* @__PURE__ */ e.insert(() => d$1, ":first-child"), { cssStyles: b } = t$1;
		u$2.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(b)), D(t$1, u$2);
	} else {
		let f = /* @__PURE__ */ rt(e, s$1, l, p$1);
		r && f.attr("style", r), D(t$1, f);
	}
	return t$1.intersect = function(f) {
		return N$1.polygon(t$1, p$1, f);
	}, e;
}
m(Os, "subroutine");
async function Ls(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), s$1 = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), l = -h / 2, o = -s$1 / 2, n$1 = .2 * s$1, p$1 = .2 * s$1, { cssStyles: f } = t$1, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, {}), g$1 = [
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
			y: o + s$1
		},
		{
			x: l - n$1 / 2,
			y: o + s$1
		}
	], y = [
		{
			x: l + h - n$1 / 2,
			y: o + s$1
		},
		{
			x: l + h + n$1 / 2,
			y: o + s$1
		},
		{
			x: l + h + n$1 / 2,
			y: o + s$1 - p$1
		}
	];
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let u$2 = /* @__PURE__ */ H(g$1), b = /* @__PURE__ */ m$2.path(u$2, d$1), S$2 = /* @__PURE__ */ H(y), k = /* @__PURE__ */ m$2.path(S$2, {
		...d$1,
		fillStyle: "solid"
	}), w$1 = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w$1.insert(() => b, ":first-child"), w$1.attr("class", "basic label-container"), f && t$1.look !== "handDrawn" && w$1.selectAll("path").attr("style", f), r && t$1.look !== "handDrawn" && w$1.selectAll("path").attr("style", r), D(t$1, w$1), t$1.intersect = function(B) {
		return N$1.polygon(t$1, g$1, B);
	}, e;
}
m(Ls, "taggedRect");
async function Hs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), o = l / 4, n$1 = .2 * s$1, p$1 = .2 * l, f = l + o, { cssStyles: m$2 } = t$1, d$1 = /* @__PURE__ */ v.svg(e), g$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (g$1.roughness = 0, g$1.fillStyle = "solid");
	let y = [
		{
			x: -s$1 / 2 - s$1 / 2 * .1,
			y: f / 2
		},
		.../* @__PURE__ */ lt(-s$1 / 2 - s$1 / 2 * .1, f / 2, s$1 / 2 + s$1 / 2 * .1, f / 2, o, .8),
		{
			x: s$1 / 2 + s$1 / 2 * .1,
			y: -f / 2
		},
		{
			x: -s$1 / 2 - s$1 / 2 * .1,
			y: -f / 2
		}
	], u$2 = -s$1 / 2 + s$1 / 2 * .1, b = -f / 2 - p$1 * .4, S$2 = [
		{
			x: u$2 + s$1 - n$1,
			y: (b + l) * 1.4
		},
		{
			x: u$2 + s$1,
			y: b + l - p$1
		},
		{
			x: u$2 + s$1,
			y: (b + l) * .9
		},
		.../* @__PURE__ */ lt(u$2 + s$1, (b + l) * 1.3, u$2 + s$1 - n$1, (b + l) * 1.5, -l * .03, .5)
	], k = /* @__PURE__ */ H(y), w$1 = /* @__PURE__ */ d$1.path(k, g$1), B = /* @__PURE__ */ H(S$2), T = /* @__PURE__ */ d$1.path(B, {
		...g$1,
		fillStyle: "solid"
	}), R = /* @__PURE__ */ e.insert(() => T, ":first-child");
	return R.insert(() => w$1, ":first-child"), R.attr("class", "basic label-container"), m$2 && t$1.look !== "handDrawn" && R.selectAll("path").attr("style", m$2), r && t$1.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s$1 / 2 + (t$1.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t$1.padding ?? 0) - o / 2 - (a.y - (a.top ?? 0))})`), D(t$1, R), t$1.intersect = function(E) {
		return N$1.polygon(t$1, y, E);
	}, e;
}
m(Hs, "taggedWaveEdgedRectangle");
async function Vs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = /* @__PURE__ */ Math.max(a.width + t$1.padding, t$1?.width || 0), s$1 = /* @__PURE__ */ Math.max(a.height + t$1.padding, t$1?.height || 0), l = -h / 2, o = -s$1 / 2, n$1 = /* @__PURE__ */ e.insert("rect", ":first-child");
	return n$1.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", o).attr("width", h).attr("height", s$1), D(t$1, n$1), t$1.intersect = function(p$1) {
		return N$1.rect(t$1, p$1);
	}, e;
}
m(Vs, "text");
var Gr = /* @__PURE__ */ m((c$1, t$1, i, r, e, a) => `M${c$1},${t$1}
    a${e},${a} 0,0,1 0,${-r}
    l${i},0
    a${e},${a} 0,0,1 0,${r}
    M${i},${-r}
    a${e},${a} 0,0,0 0,${r}
    l${-i},0`, "createCylinderPathD"), Er = /* @__PURE__ */ m((c$1, t$1, i, r, e, a) => [
	`M${c$1},${t$1}`,
	`M${c$1 + i},${t$1}`,
	`a${e},${a} 0,0,0 0,${-r}`,
	`l${-i},0`,
	`a${e},${a} 0,0,0 0,${r}`,
	`l${i},0`
].join(" "), "createOuterCylinderPathD"), jr = /* @__PURE__ */ m((c$1, t$1, i, r, e, a) => [`M${c$1 + i / 2},${-r / 2}`, `a${e},${a} 0,0,0 0,${r}`].join(" "), "createInnerCylinderPathD");
async function Ws(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h, halfPadding: s$1 } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), l = t$1.look === "neo" ? s$1 * 2 : s$1, o = a.height + l, n$1 = o / 2, p$1 = n$1 / (2.5 + o / 50), f = a.width + p$1 + l, { cssStyles: m$2 } = t$1, d$1;
	if (t$1.look === "handDrawn") {
		let g$1 = /* @__PURE__ */ v.svg(e), y = /* @__PURE__ */ Er(0, 0, f, o, p$1, n$1), u$2 = /* @__PURE__ */ jr(0, 0, f, o, p$1, n$1), b = /* @__PURE__ */ g$1.path(y, /* @__PURE__ */ S$1(t$1, {})), S$2 = /* @__PURE__ */ g$1.path(u$2, /* @__PURE__ */ S$1(t$1, { fill: "none" }));
		d$1 = /* @__PURE__ */ e.insert(() => S$2, ":first-child"), d$1 = /* @__PURE__ */ e.insert(() => b, ":first-child"), d$1.attr("class", "basic label-container"), m$2 && d$1.attr("style", m$2);
	} else {
		let g$1 = /* @__PURE__ */ Gr(0, 0, f, o, p$1, n$1);
		d$1 = /* @__PURE__ */ e.insert("path", ":first-child").attr("d", g$1).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(m$2)).attr("style", r), d$1.attr("class", "basic label-container"), m$2 && d$1.selectAll("path").attr("style", m$2), r && d$1.selectAll("path").attr("style", r);
	}
	return d$1.attr("label-offset-x", p$1), d$1.attr("transform", `translate(${-f / 2}, ${o / 2} )`), h.attr("transform", `translate(${-(a.width / 2) - p$1 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), D(t$1, d$1), t$1.intersect = function(g$1) {
		let y = /* @__PURE__ */ N$1.rect(t$1, g$1), u$2 = y.y - (t$1.y ?? 0);
		if (n$1 != 0 && (Math.abs(u$2) < (t$1.height ?? 0) / 2 || Math.abs(u$2) == (t$1.height ?? 0) / 2 && Math.abs(y.x - (t$1.x ?? 0)) > (t$1.width ?? 0) / 2 - p$1)) {
			let b = p$1 * p$1 * (1 - u$2 * u$2 / (n$1 * n$1));
			b != 0 && (b = /* @__PURE__ */ Math.sqrt(/* @__PURE__ */ Math.abs(b))), b = p$1 - b, g$1.x - (t$1.x ?? 0) > 0 && (b = -b), y.x += b;
		}
		return y;
	}, e;
}
m(Ws, "tiltedCylinder");
async function Is(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = a.width + t$1.padding, s$1 = a.height + t$1.padding, l = [
		{
			x: -3 * s$1 / 6,
			y: 0
		},
		{
			x: h + 3 * s$1 / 6,
			y: 0
		},
		{
			x: h,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1
		}
	], o, { cssStyles: n$1 } = t$1;
	if (t$1.look === "handDrawn") {
		let p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S$1(t$1, {}), m$2 = /* @__PURE__ */ H(l), d$1 = /* @__PURE__ */ p$1.path(m$2, f);
		o = /* @__PURE__ */ e.insert(() => d$1, ":first-child").attr("transform", `translate(${-h / 2}, ${s$1 / 2})`), n$1 && o.attr("style", n$1);
	} else o = /* @__PURE__ */ rt(e, h, s$1, l);
	return r && o.attr("style", r), t$1.width = h, t$1.height = s$1, D(t$1, o), t$1.intersect = function(p$1) {
		return N$1.polygon(t$1, l, p$1);
	}, e;
}
m(Is, "trapezoid");
async function Fs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = 60, s$1 = 20, l = /* @__PURE__ */ Math.max(h, a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), o = /* @__PURE__ */ Math.max(s$1, a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), { cssStyles: n$1 } = t$1, p$1 = /* @__PURE__ */ v.svg(e), f = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
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
	], d$1 = /* @__PURE__ */ H(m$2), g$1 = /* @__PURE__ */ p$1.path(d$1, f), y = /* @__PURE__ */ e.insert(() => g$1, ":first-child");
	return y.attr("class", "basic label-container"), n$1 && t$1.look !== "handDrawn" && y.selectChildren("path").attr("style", n$1), r && t$1.look !== "handDrawn" && y.selectChildren("path").attr("style", r), D(t$1, y), t$1.intersect = function(u$2) {
		return N$1.polygon(t$1, m$2, u$2);
	}, e;
}
m(Fs, "trapezoidalPentagon");
async function _s(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Mo(mr().flowchart?.htmlLabels), l = a.width + (t$1.padding ?? 0), o = l + a.height, n$1 = l + a.height, p$1 = [
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
	], { cssStyles: f } = t$1, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = /* @__PURE__ */ H(p$1), y = /* @__PURE__ */ m$2.path(g$1, d$1), u$2 = /* @__PURE__ */ e.insert(() => y, ":first-child").attr("transform", `translate(${-o / 2}, ${o / 2})`);
	return f && t$1.look !== "handDrawn" && u$2.selectChildren("path").attr("style", f), r && t$1.look !== "handDrawn" && u$2.selectChildren("path").attr("style", r), t$1.width = l, t$1.height = o, D(t$1, u$2), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${o / 2 - (a.height + (t$1.padding ?? 0) / (s$1 ? 2 : 1) - (a.y - (a.top ?? 0)))})`), t$1.intersect = function(b) {
		return pt.info("Triangle intersect", t$1, p$1, b), N$1.polygon(t$1, p$1, b);
	}, e;
}
m(_s, "triangle");
async function zs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), o = l / 8, n$1 = l + o, { cssStyles: p$1 } = t$1, m$2 = 70 - s$1, d$1 = m$2 > 0 ? m$2 / 2 : 0, g$1 = /* @__PURE__ */ v.svg(e), y = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let u$2 = [
		{
			x: -s$1 / 2 - d$1,
			y: n$1 / 2
		},
		.../* @__PURE__ */ lt(-s$1 / 2 - d$1, n$1 / 2, s$1 / 2 + d$1, n$1 / 2, o, .8),
		{
			x: s$1 / 2 + d$1,
			y: -n$1 / 2
		},
		{
			x: -s$1 / 2 - d$1,
			y: -n$1 / 2
		}
	], b = /* @__PURE__ */ H(u$2), S$2 = /* @__PURE__ */ g$1.path(b, y), k = /* @__PURE__ */ e.insert(() => S$2, ":first-child");
	return k.attr("class", "basic label-container"), p$1 && t$1.look !== "handDrawn" && k.selectAll("path").attr("style", p$1), r && t$1.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s$1 / 2 + (t$1.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t$1.padding ?? 0) - o - (a.y - (a.top ?? 0))})`), D(t$1, k), t$1.intersect = function(w$1) {
		return N$1.polygon(t$1, u$2, w$1);
	}, e;
}
m(zs, "waveEdgedRectangle");
async function qs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), h = 100, s$1 = 50, l = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), o = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), n$1 = l / o, p$1 = l, f = o;
	p$1 > f * n$1 ? f = p$1 / n$1 : p$1 = f * n$1, p$1 = /* @__PURE__ */ Math.max(p$1, h), f = /* @__PURE__ */ Math.max(f, s$1);
	let m$2 = /* @__PURE__ */ Math.min(f * .2, f / 4), d$1 = f + m$2 * 2, { cssStyles: g$1 } = t$1, y = /* @__PURE__ */ v.svg(e), u$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (u$2.roughness = 0, u$2.fillStyle = "solid");
	let b = [
		{
			x: -p$1 / 2,
			y: d$1 / 2
		},
		.../* @__PURE__ */ lt(-p$1 / 2, d$1 / 2, p$1 / 2, d$1 / 2, m$2, 1),
		{
			x: p$1 / 2,
			y: -d$1 / 2
		},
		.../* @__PURE__ */ lt(p$1 / 2, -d$1 / 2, -p$1 / 2, -d$1 / 2, m$2, -1)
	], S$2 = /* @__PURE__ */ H(b), k = /* @__PURE__ */ y.path(S$2, u$2), w$1 = /* @__PURE__ */ e.insert(() => k, ":first-child");
	return w$1.attr("class", "basic label-container"), g$1 && t$1.look !== "handDrawn" && w$1.selectAll("path").attr("style", g$1), r && t$1.look !== "handDrawn" && w$1.selectAll("path").attr("style", r), D(t$1, w$1), t$1.intersect = function(B) {
		return N$1.polygon(t$1, b, B);
	}, e;
}
m(qs, "waveRectangle");
async function Xs(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, label: h } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), s$1 = /* @__PURE__ */ Math.max(a.width + (t$1.padding ?? 0) * 2, t$1?.width ?? 0), l = /* @__PURE__ */ Math.max(a.height + (t$1.padding ?? 0) * 2, t$1?.height ?? 0), o = 5, n$1 = -s$1 / 2, p$1 = -l / 2, { cssStyles: f } = t$1, m$2 = /* @__PURE__ */ v.svg(e), d$1 = /* @__PURE__ */ S$1(t$1, {}), g$1 = [
		{
			x: n$1 - o,
			y: p$1 - o
		},
		{
			x: n$1 - o,
			y: p$1 + l
		},
		{
			x: n$1 + s$1,
			y: p$1 + l
		},
		{
			x: n$1 + s$1,
			y: p$1 - o
		}
	], y = `M${n$1 - o},${p$1 - o} L${n$1 + s$1},${p$1 - o} L${n$1 + s$1},${p$1 + l} L${n$1 - o},${p$1 + l} L${n$1 - o},${p$1 - o}
                M${n$1 - o},${p$1} L${n$1 + s$1},${p$1}
                M${n$1},${p$1 - o} L${n$1},${p$1 + l}`;
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let u$2 = /* @__PURE__ */ m$2.path(y, d$1), b = /* @__PURE__ */ e.insert(() => u$2, ":first-child");
	return b.attr("transform", `translate(${o / 2}, ${o / 2})`), b.attr("class", "basic label-container"), f && t$1.look !== "handDrawn" && b.selectAll("path").attr("style", f), r && t$1.look !== "handDrawn" && b.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) + o / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o / 2 - (a.y - (a.top ?? 0))})`), D(t$1, b), t$1.intersect = function(S$2) {
		return N$1.polygon(t$1, g$1, S$2);
	}, e;
}
m(Xs, "windowPane");
async function ye(c$1, t$1) {
	let i = t$1;
	if (i.alias && (t$1.label = i.alias), t$1.look === "handDrawn") {
		let { themeVariables: Y } = Ot(), { background: J } = Y;
		await ye(c$1, {
			...t$1,
			id: t$1.id + "-background",
			look: "default",
			cssStyles: ["stroke: none", `fill: ${J}`]
		});
	}
	let r = /* @__PURE__ */ Ot();
	t$1.useHtmlLabels = r.htmlLabels;
	let e = r.er?.diagramPadding ?? 10, a = r.er?.entityPadding ?? 6, { cssStyles: h } = t$1, { labelStyles: s$1, nodeStyles: l } = m$1(t$1);
	if (i.attributes.length === 0 && t$1.label) {
		let Y = {
			rx: 0,
			ry: 0,
			labelPaddingX: e,
			labelPaddingY: e * 1.5,
			classes: ""
		};
		M(t$1.label, r) + Y.labelPaddingX * 2 < r.er.minEntityWidth && (t$1.width = r.er.minEntityWidth);
		let J = await Dt(c$1, t$1, Y);
		if (!Mo(r.htmlLabels)) {
			let tt = /* @__PURE__ */ J.select("text"), at = tt.node()?.getBBox();
			tt.attr("transform", `translate(${-at.width / 2}, 0)`);
		}
		return J;
	}
	r.htmlLabels || (e *= 1.25, a *= 1.25);
	let o = /* @__PURE__ */ P(t$1);
	o || (o = "node default");
	let n$1 = /* @__PURE__ */ c$1.insert("g").attr("class", o).attr("id", t$1.domId || t$1.id), p$1 = await Gt(n$1, t$1.label ?? "", r, 0, 0, ["name"], s$1);
	p$1.height += a;
	let f = 0, m$2 = [], d$1 = [], g$1 = 0, y = 0, u$2 = 0, b = 0, S$2 = !0, k = !0;
	for (let Y of i.attributes) {
		let J = await Gt(n$1, Y.type, r, 0, f, ["attribute-type"], s$1);
		g$1 = /* @__PURE__ */ Math.max(g$1, J.width + e);
		let tt = await Gt(n$1, Y.name, r, 0, f, ["attribute-name"], s$1);
		y = /* @__PURE__ */ Math.max(y, tt.width + e);
		let at = await Gt(n$1, /* @__PURE__ */ Y.keys.join(), r, 0, f, ["attribute-keys"], s$1);
		u$2 = /* @__PURE__ */ Math.max(u$2, at.width + e);
		let St$1 = await Gt(n$1, Y.comment, r, 0, f, ["attribute-comment"], s$1);
		b = /* @__PURE__ */ Math.max(b, St$1.width + e);
		let mt = Math.max(J.height, tt.height, at.height, St$1.height) + a;
		d$1.push({
			yOffset: f,
			rowHeight: mt
		}), f += mt;
	}
	let w$1 = 4;
	u$2 <= e && (S$2 = !1, u$2 = 0, w$1--), b <= e && (k = !1, b = 0, w$1--);
	let B = /* @__PURE__ */ n$1.node().getBBox();
	if (p$1.width + e * 2 - (g$1 + y + u$2 + b) > 0) {
		let Y = p$1.width + e * 2 - (g$1 + y + u$2 + b);
		g$1 += Y / w$1, y += Y / w$1, u$2 > 0 && (u$2 += Y / w$1), b > 0 && (b += Y / w$1);
	}
	let T = g$1 + y + u$2 + b, R = /* @__PURE__ */ v.svg(n$1), E = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
	let L$1 = 0;
	d$1.length > 0 && (L$1 = /* @__PURE__ */ d$1.reduce((Y, J) => Y + (J?.rowHeight ?? 0), 0));
	let O = /* @__PURE__ */ Math.max(B.width + e * 2, t$1?.width || 0, T), V$1 = /* @__PURE__ */ Math.max((L$1 ?? 0) + p$1.height, t$1?.height || 0), G = -O / 2, j = -V$1 / 2;
	n$1.selectAll("g:not(:first-child)").each((Y, J, tt) => {
		let at = /* @__PURE__ */ ia(tt[J]), St$1 = /* @__PURE__ */ at.attr("transform"), mt = 0, be = 0;
		if (St$1) {
			let Qt = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(St$1);
			Qt && (mt = /* @__PURE__ */ parseFloat(Qt[1]), be = /* @__PURE__ */ parseFloat(Qt[2]), at.attr("class").includes("attribute-name") ? mt += g$1 : at.attr("class").includes("attribute-keys") ? mt += g$1 + y : at.attr("class").includes("attribute-comment") && (mt += g$1 + y + u$2));
		}
		at.attr("transform", `translate(${G + e / 2 + mt}, ${be + j + p$1.height + a / 2})`);
	}), n$1.select(".name").attr("transform", "translate(" + -p$1.width / 2 + ", " + (j + a / 2) + ")");
	let W = /* @__PURE__ */ R.rectangle(G, j, O, V$1, E), A = /* @__PURE__ */ n$1.insert(() => W, ":first-child").attr("style", /* @__PURE__ */ h.join("")), { themeVariables: I$1 } = Ot(), { rowEven: F, rowOdd: Q, nodeBorder: it } = I$1;
	m$2.push(0);
	for (let [Y, J] of d$1.entries()) {
		let at = (Y + 1) % 2 === 0 && J.yOffset !== 0, St$1 = /* @__PURE__ */ R.rectangle(G, p$1.height + j + J?.yOffset, O, J?.rowHeight, {
			...E,
			fill: at ? F : Q,
			stroke: it
		});
		n$1.insert(() => St$1, "g.label").attr("style", /* @__PURE__ */ h.join("")).attr("class", `row-rect-${at ? "even" : "odd"}`);
	}
	let ct = /* @__PURE__ */ R.line(G, p$1.height + j, O + G, p$1.height + j, E);
	n$1.insert(() => ct).attr("class", "divider"), ct = /* @__PURE__ */ R.line(g$1 + G, p$1.height + j, g$1 + G, V$1 + j, E), n$1.insert(() => ct).attr("class", "divider"), S$2 && (ct = /* @__PURE__ */ R.line(g$1 + y + G, p$1.height + j, g$1 + y + G, V$1 + j, E), n$1.insert(() => ct).attr("class", "divider")), k && (ct = /* @__PURE__ */ R.line(g$1 + y + u$2 + G, p$1.height + j, g$1 + y + u$2 + G, V$1 + j, E), n$1.insert(() => ct).attr("class", "divider"));
	for (let Y of m$2) ct = /* @__PURE__ */ R.line(G, p$1.height + j + Y, O + G, p$1.height + j + Y, E), n$1.insert(() => ct).attr("class", "divider");
	if (D(t$1, A), l && t$1.look !== "handDrawn") {
		let J = l.split(";")?.filter((tt) => tt.includes("stroke"))?.map((tt) => `${tt}`).join("; ");
		n$1.selectAll("path").attr("style", J ?? ""), n$1.selectAll(".row-rect-even path").attr("style", l);
	}
	return t$1.intersect = function(Y) {
		return N$1.rect(t$1, Y);
	}, n$1;
}
m(ye, "erBox");
async function Gt(c$1, t$1, i, r = 0, e = 0, a = [], h = "") {
	let s$1 = /* @__PURE__ */ c$1.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${r}, ${e})`).attr("style", h);
	t$1 !== ln(t$1) && (t$1 = /* @__PURE__ */ ln(t$1), t$1 = /* @__PURE__ */ t$1.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
	let l = /* @__PURE__ */ s$1.node().appendChild(await Rr(s$1, t$1, {
		width: M(t$1, i) + 100,
		style: h,
		useHtmlLabels: i.htmlLabels
	}, i));
	if (t$1.includes("&lt;") || t$1.includes("&gt;")) {
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
m(Gt, "addText");
async function Ys(c$1, t$1, i, r, e = i.class.padding ?? 12) {
	let a = r ? 0 : 3, h = /* @__PURE__ */ c$1.insert("g").attr("class", /* @__PURE__ */ P(t$1)).attr("id", t$1.domId || t$1.id), s$1 = null, l = null, o = null, n$1 = null, p$1 = 0, f = 0, m$2 = 0;
	if (s$1 = /* @__PURE__ */ h.insert("g").attr("class", "annotation-group text"), t$1.annotations.length > 0) {
		let b = t$1.annotations[0];
		await Zt(s$1, { text: `\xAB${b}\xBB` }, 0), p$1 = s$1.node().getBBox().height;
	}
	l = /* @__PURE__ */ h.insert("g").attr("class", "label-group text"), await Zt(l, t$1, 0, ["font-weight: bolder"]);
	let d$1 = /* @__PURE__ */ l.node().getBBox();
	f = d$1.height, o = /* @__PURE__ */ h.insert("g").attr("class", "members-group text");
	let g$1 = 0;
	for (let b of t$1.members) {
		let S$2 = await Zt(o, b, g$1, [/* @__PURE__ */ b.parseClassifier()]);
		g$1 += S$2 + a;
	}
	m$2 = o.node().getBBox().height, m$2 <= 0 && (m$2 = e / 2), n$1 = /* @__PURE__ */ h.insert("g").attr("class", "methods-group text");
	let y = 0;
	for (let b of t$1.methods) {
		let S$2 = await Zt(n$1, b, y, [/* @__PURE__ */ b.parseClassifier()]);
		y += S$2 + a;
	}
	let u$2 = /* @__PURE__ */ h.node().getBBox();
	if (s$1 !== null) {
		let b = /* @__PURE__ */ s$1.node().getBBox();
		s$1.attr("transform", `translate(${-b.width / 2})`);
	}
	return l.attr("transform", `translate(${-d$1.width / 2}, ${p$1})`), u$2 = /* @__PURE__ */ h.node().getBBox(), o.attr("transform", `translate(0, ${p$1 + f + e * 2})`), u$2 = /* @__PURE__ */ h.node().getBBox(), n$1.attr("transform", `translate(0, ${p$1 + f + (m$2 ? m$2 + e * 4 : e * 2)})`), u$2 = /* @__PURE__ */ h.node().getBBox(), {
		shapeSvg: h,
		bbox: u$2
	};
}
m(Ys, "textHelper");
async function Zt(c$1, t$1, i, r = []) {
	let e = /* @__PURE__ */ c$1.insert("g").attr("class", "label").attr("style", /* @__PURE__ */ r.join("; ")), a = /* @__PURE__ */ Ot(), h = "useHtmlLabels" in t$1 ? t$1.useHtmlLabels : Mo(a.htmlLabels) ?? !0, s$1 = "";
	"text" in t$1 ? s$1 = t$1.text : s$1 = t$1.label, !h && s$1.startsWith("\\") && (s$1 = /* @__PURE__ */ s$1.substring(1)), nr(s$1) && (h = !0);
	let l = await Rr(e, /* @__PURE__ */ Xo(/* @__PURE__ */ Yt(s$1)), {
		width: M(s$1, a) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: h
	}, a), o, n$1 = 1;
	if (h) {
		let p$1 = l.children[0], f = /* @__PURE__ */ ia(l);
		n$1 = p$1.innerHTML.split("<br>").length, p$1.innerHTML.includes("</math>") && (n$1 += p$1.innerHTML.split("<mrow>").length - 1);
		let m$2 = /* @__PURE__ */ p$1.getElementsByTagName("img");
		if (m$2) {
			let d$1 = s$1.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all(/* @__PURE__ */ [...m$2].map((g$1) => new Promise((y) => {
				function u$2() {
					if (g$1.style.display = "flex", g$1.style.flexDirection = "column", d$1) {
						let b = a.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, k = parseInt(b, 10) * 5 + "px";
						g$1.style.minWidth = k, g$1.style.maxWidth = k;
					} else g$1.style.width = "100%";
					y(g$1);
				}
				m(u$2, "setupImage"), setTimeout(() => {
					g$1.complete && u$2();
				}), g$1.addEventListener("error", u$2), g$1.addEventListener("load", u$2);
			})));
		}
		o = /* @__PURE__ */ p$1.getBoundingClientRect(), f.attr("width", o.width), f.attr("height", o.height);
	} else {
		r.includes("font-weight: bolder") && ia(l).selectAll("tspan").attr("font-weight", ""), n$1 = l.children.length;
		let p$1 = l.children[0];
		(l.textContent === "" || l.textContent.includes("&gt")) && (p$1.textContent = s$1[0] + s$1.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s$1[1] === " " && (p$1.textContent = p$1.textContent[0] + " " + p$1.textContent.substring(1))), p$1.textContent === "undefined" && (p$1.textContent = ""), o = /* @__PURE__ */ l.getBBox();
	}
	return e.attr("transform", "translate(0," + (-o.height / (2 * n$1) + i) + ")"), o.height;
}
m(Zt, "addText");
async function Zs$1(c$1, t$1) {
	let i = /* @__PURE__ */ mr(), r = i.class.padding ?? 12, e = r, a = t$1.useHtmlLabels ?? Mo(i.htmlLabels) ?? !0, h = t$1;
	h.annotations = h.annotations ?? [], h.members = h.members ?? [], h.methods = h.methods ?? [];
	let { shapeSvg: s$1, bbox: l } = await Ys(c$1, t$1, i, a, e), { labelStyles: o, nodeStyles: n$1 } = m$1(t$1);
	t$1.labelStyle = o, t$1.cssStyles = h.styles || "";
	let p$1 = h.styles?.join(";") || n$1 || "";
	t$1.cssStyles || (t$1.cssStyles = /* @__PURE__ */ p$1.replaceAll("!important", "").split(";"));
	let f = h.members.length === 0 && h.methods.length === 0 && !i.class?.hideEmptyMembersBox, m$2 = /* @__PURE__ */ v.svg(s$1), d$1 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (d$1.roughness = 0, d$1.fillStyle = "solid");
	let g$1 = l.width, y = l.height;
	h.members.length === 0 && h.methods.length === 0 ? y += e : h.members.length > 0 && h.methods.length === 0 && (y += e * 2);
	let u$2 = -g$1 / 2, b = -y / 2, S$2 = /* @__PURE__ */ m$2.rectangle(u$2 - r, b - r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0), g$1 + 2 * r, y + 2 * r + (f ? r * 2 : h.members.length === 0 && h.methods.length === 0 ? -r : 0), d$1), k = /* @__PURE__ */ s$1.insert(() => S$2, ":first-child");
	k.attr("class", "basic label-container");
	let w$1 = /* @__PURE__ */ k.node().getBBox();
	s$1.selectAll(".text").each((E, L$1, O) => {
		let V$1 = /* @__PURE__ */ ia(O[L$1]), G = /* @__PURE__ */ V$1.attr("transform"), j = 0;
		if (G) {
			let F = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(G);
			F && (j = /* @__PURE__ */ parseFloat(F[2]));
		}
		let W = j + b + r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0);
		a || (W -= 4);
		let A = u$2;
		(V$1.attr("class").includes("label-group") || V$1.attr("class").includes("annotation-group")) && (A = -V$1.node()?.getBBox().width / 2 || 0, s$1.selectAll("text").each(function(I$1, F, Q) {
			window.getComputedStyle(Q[F]).textAnchor === "middle" && (A = 0);
		})), V$1.attr("transform", `translate(${A}, ${W})`);
	});
	let B = s$1.select(".annotation-group").node().getBBox().height - (f ? r / 2 : 0) || 0, T = s$1.select(".label-group").node().getBBox().height - (f ? r / 2 : 0) || 0, R = s$1.select(".members-group").node().getBBox().height - (f ? r / 2 : 0) || 0;
	if (h.members.length > 0 || h.methods.length > 0 || f) {
		let E = /* @__PURE__ */ m$2.line(w$1.x, B + T + b + r, w$1.x + w$1.width, B + T + b + r, d$1);
		s$1.insert(() => E).attr("class", "divider").attr("style", p$1);
	}
	if (f || h.members.length > 0 || h.methods.length > 0) {
		let E = /* @__PURE__ */ m$2.line(w$1.x, B + T + R + b + e * 2 + r, w$1.x + w$1.width, B + T + R + b + r + e * 2, d$1);
		s$1.insert(() => E).attr("class", "divider").attr("style", p$1);
	}
	if (h.look !== "handDrawn" && s$1.selectAll("path").attr("style", p$1), k.select(":nth-child(2)").attr("style", p$1), s$1.selectAll(".divider").select("path").attr("style", p$1), t$1.labelStyle ? s$1.selectAll("span").attr("style", t$1.labelStyle) : s$1.selectAll("span").attr("style", p$1), !a) {
		let E = /* @__PURE__ */ RegExp(/color\s*:\s*([^;]*)/), L$1 = /* @__PURE__ */ E.exec(p$1);
		if (L$1) {
			let O = /* @__PURE__ */ L$1[0].replace("color", "fill");
			s$1.selectAll("tspan").attr("style", O);
		} else if (o) {
			let O = /* @__PURE__ */ E.exec(o);
			if (O) {
				let V$1 = /* @__PURE__ */ O[0].replace("color", "fill");
				s$1.selectAll("tspan").attr("style", V$1);
			}
		}
	}
	return D(t$1, k), t$1.intersect = function(E) {
		return N$1.rect(t$1, E);
	}, s$1;
}
m(Zs$1, "classBox");
async function Us(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let e = t$1, a = t$1, h = 20, s$1 = 20, l = "verifyMethod" in t$1, o = /* @__PURE__ */ P(t$1), n$1 = /* @__PURE__ */ c$1.insert("g").attr("class", o).attr("id", t$1.domId ?? t$1.id), p$1;
	l ? p$1 = await pt$1(n$1, `&lt;&lt;${e.type}&gt;&gt;`, 0, t$1.labelStyle) : p$1 = await pt$1(n$1, "&lt;&lt;Element&gt;&gt;", 0, t$1.labelStyle);
	let f = p$1, m$2 = await pt$1(n$1, e.name, f, t$1.labelStyle + "; font-weight: bold;");
	if (f += m$2 + s$1, l) {
		let B = await pt$1(n$1, `${e.requirementId ? `ID: ${e.requirementId}` : ""}`, f, t$1.labelStyle);
		f += B;
		let T = await pt$1(n$1, `${e.text ? `Text: ${e.text}` : ""}`, f, t$1.labelStyle);
		f += T;
		let R = await pt$1(n$1, `${e.risk ? `Risk: ${e.risk}` : ""}`, f, t$1.labelStyle);
		f += R, await pt$1(n$1, `${e.verifyMethod ? `Verification: ${e.verifyMethod}` : ""}`, f, t$1.labelStyle);
	} else {
		let B = await pt$1(n$1, `${a.type ? `Type: ${a.type}` : ""}`, f, t$1.labelStyle);
		f += B, await pt$1(n$1, `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`, f, t$1.labelStyle);
	}
	let d$1 = (n$1.node()?.getBBox().width ?? 200) + h, g$1 = (n$1.node()?.getBBox().height ?? 200) + h, y = -d$1 / 2, u$2 = -g$1 / 2, b = /* @__PURE__ */ v.svg(n$1), S$2 = /* @__PURE__ */ S$1(t$1, {});
	t$1.look !== "handDrawn" && (S$2.roughness = 0, S$2.fillStyle = "solid");
	let k = /* @__PURE__ */ b.rectangle(y, u$2, d$1, g$1, S$2), w$1 = /* @__PURE__ */ n$1.insert(() => k, ":first-child");
	if (w$1.attr("class", "basic label-container").attr("style", r), n$1.selectAll(".label").each((B, T, R) => {
		let E = /* @__PURE__ */ ia(R[T]), L$1 = /* @__PURE__ */ E.attr("transform"), O = 0, V$1 = 0;
		if (L$1) {
			let A = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(L$1);
			A && (O = /* @__PURE__ */ parseFloat(A[1]), V$1 = /* @__PURE__ */ parseFloat(A[2]));
		}
		let G = V$1 - g$1 / 2, j = y + h / 2;
		(T === 0 || T === 1) && (j = O), E.attr("transform", `translate(${j}, ${G + h})`);
	}), f > p$1 + m$2 + s$1) {
		let B = /* @__PURE__ */ b.line(y, u$2 + p$1 + m$2 + s$1, y + d$1, u$2 + p$1 + m$2 + s$1, S$2);
		n$1.insert(() => B).attr("style", r);
	}
	return D(t$1, w$1), t$1.intersect = function(B) {
		return N$1.rect(t$1, B);
	}, n$1;
}
m(Us, "requirementBox");
async function pt$1(c$1, t$1, i, r = "") {
	if (t$1 === "") return 0;
	let e = /* @__PURE__ */ c$1.insert("g").attr("class", "label").attr("style", r), a = /* @__PURE__ */ mr(), h = a.htmlLabels ?? !0, s$1 = await Rr(e, /* @__PURE__ */ Xo(/* @__PURE__ */ Yt(t$1)), {
		width: M(t$1, a) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: h,
		style: r
	}, a), l;
	if (h) {
		let o = s$1.children[0], n$1 = /* @__PURE__ */ ia(s$1);
		l = /* @__PURE__ */ o.getBoundingClientRect(), n$1.attr("width", l.width), n$1.attr("height", l.height);
	} else {
		let o = s$1.children[0];
		for (let n$1 of o.children) n$1.textContent = /* @__PURE__ */ n$1.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), r && n$1.setAttribute("style", r);
		l = /* @__PURE__ */ s$1.getBBox(), l.height += 6;
	}
	return e.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + i})`), l.height;
}
m(pt$1, "addText");
var Ar = /* @__PURE__ */ m((c$1) => {
	switch (c$1) {
		case "Very High": return "red";
		case "High": return "orange";
		case "Medium": return null;
		case "Low": return "blue";
		case "Very Low": return "lightblue";
	}
}, "colorFromPriority");
async function Qs$1(c$1, t$1, { config: i }) {
	let { labelStyles: r, nodeStyles: e } = m$1(t$1);
	t$1.labelStyle = r || "";
	let a = 10, h = t$1.width;
	t$1.width = (t$1.width ?? 200) - 10;
	let { shapeSvg: s$1, bbox: l, label: o } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), n$1 = t$1.padding || 10, p$1 = "", f;
	"ticket" in t$1 && t$1.ticket && i?.kanban?.ticketBaseUrl && (p$1 = i?.kanban?.ticketBaseUrl.replace("#TICKET#", t$1.ticket), f = /* @__PURE__ */ s$1.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p$1).attr("target", "_blank"));
	let m$2 = {
		useHtmlLabels: t$1.useHtmlLabels,
		labelStyle: t$1.labelStyle || "",
		width: t$1.width,
		img: t$1.img,
		padding: t$1.padding || 8,
		centerLabel: !1
	}, d$1, g$1;
	f ? {label: d$1, bbox: g$1} = await At(f, "ticket" in t$1 && t$1.ticket || "", m$2) : {label: d$1, bbox: g$1} = await At(s$1, "ticket" in t$1 && t$1.ticket || "", m$2);
	let { label: y, bbox: u$2 } = await At(s$1, "assigned" in t$1 && t$1.assigned || "", m$2);
	t$1.width = h;
	let b = 10, S$2 = t$1?.width || 0, k = Math.max(g$1.height, u$2.height) / 2, w$1 = Math.max(l.height + b * 2, t$1?.height || 0) + k, B = -S$2 / 2, T = -w$1 / 2;
	o.attr("transform", "translate(" + (n$1 - S$2 / 2) + ", " + (-k - l.height / 2) + ")"), d$1.attr("transform", "translate(" + (n$1 - S$2 / 2) + ", " + (-k + l.height / 2) + ")"), y.attr("transform", "translate(" + (n$1 + S$2 / 2 - u$2.width - 2 * a) + ", " + (-k + l.height / 2) + ")");
	let R, { rx: E, ry: L$1 } = t$1, { cssStyles: O } = t$1;
	if (t$1.look === "handDrawn") {
		let V$1 = /* @__PURE__ */ v.svg(s$1), G = /* @__PURE__ */ S$1(t$1, {}), j = E || L$1 ? V$1.path(/* @__PURE__ */ st(B, T, S$2, w$1, E || 0), G) : V$1.rectangle(B, T, S$2, w$1, G);
		R = /* @__PURE__ */ s$1.insert(() => j, ":first-child"), R.attr("class", "basic label-container").attr("style", O || null);
	} else {
		R = /* @__PURE__ */ s$1.insert("rect", ":first-child"), R.attr("class", "basic label-container __APA__").attr("style", e).attr("rx", E ?? 5).attr("ry", L$1 ?? 5).attr("x", B).attr("y", T).attr("width", S$2).attr("height", w$1);
		let V$1 = "priority" in t$1 && t$1.priority;
		if (V$1) {
			let G = /* @__PURE__ */ s$1.append("line"), j = B + 2, W = T + Math.floor((E ?? 0) / 2), A = T + w$1 - Math.floor((E ?? 0) / 2);
			G.attr("x1", j).attr("y1", W).attr("x2", j).attr("y2", A).attr("stroke-width", "4").attr("stroke", /* @__PURE__ */ Ar(V$1));
		}
	}
	return D(t$1, R), t$1.height = w$1, t$1.intersect = function(V$1) {
		return N$1.rect(t$1, V$1);
	}, s$1;
}
m(Qs$1, "kanbanItem");
async function Js(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s$1 } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), l = a.width + 10 * h, o = a.height + 8 * h, n$1 = .15 * l, { cssStyles: p$1 } = t$1, f = a.width + 20, m$2 = a.height + 20, d$1 = /* @__PURE__ */ Math.max(l, f), g$1 = /* @__PURE__ */ Math.max(o, m$2);
	s$1.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`);
	let y, u$2 = `M0 0 
    a${n$1},${n$1} 1 0,0 ${d$1 * .25},${-1 * g$1 * .1}
    a${n$1},${n$1} 1 0,0 ${d$1 * .25},0
    a${n$1},${n$1} 1 0,0 ${d$1 * .25},0
    a${n$1},${n$1} 1 0,0 ${d$1 * .25},${g$1 * .1}

    a${n$1},${n$1} 1 0,0 ${d$1 * .15},${g$1 * .33}
    a${n$1 * .8},${n$1 * .8} 1 0,0 0,${g$1 * .34}
    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .15},${g$1 * .33}

    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .25},${g$1 * .15}
    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .25},0
    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .25},0
    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .25},${-1 * g$1 * .15}

    a${n$1},${n$1} 1 0,0 ${-1 * d$1 * .1},${-1 * g$1 * .33}
    a${n$1 * .8},${n$1 * .8} 1 0,0 0,${-1 * g$1 * .34}
    a${n$1},${n$1} 1 0,0 ${d$1 * .1},${-1 * g$1 * .33}
  H0 V0 Z`;
	if (t$1.look === "handDrawn") {
		let b = /* @__PURE__ */ v.svg(e), S$2 = /* @__PURE__ */ S$1(t$1, {}), k = /* @__PURE__ */ b.path(u$2, S$2);
		y = /* @__PURE__ */ e.insert(() => k, ":first-child"), y.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(p$1));
	} else y = /* @__PURE__ */ e.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", u$2);
	return y.attr("transform", `translate(${-d$1 / 2}, ${-g$1 / 2})`), D(t$1, y), t$1.calcIntersect = function(b, S$2) {
		return N$1.rect(b, S$2);
	}, t$1.intersect = function(b) {
		return pt.info("Bang intersect", t$1, b), N$1.rect(t$1, b);
	}, e;
}
m(Js, "bang");
async function Ks(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s$1 } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), l = a.width + 2 * h, o = a.height + 2 * h, n$1 = .15 * l, p$1 = .25 * l, f = .35 * l, m$2 = .2 * l, { cssStyles: d$1 } = t$1, g$1, y = `M0 0 
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
	if (t$1.look === "handDrawn") {
		let u$2 = /* @__PURE__ */ v.svg(e), b = /* @__PURE__ */ S$1(t$1, {}), S$2 = /* @__PURE__ */ u$2.path(y, b);
		g$1 = /* @__PURE__ */ e.insert(() => S$2, ":first-child"), g$1.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Vt$1(d$1));
	} else g$1 = /* @__PURE__ */ e.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", y);
	return s$1.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), g$1.attr("transform", `translate(${-l / 2}, ${-o / 2})`), D(t$1, g$1), t$1.calcIntersect = function(u$2, b) {
		return N$1.rect(u$2, b);
	}, t$1.intersect = function(u$2) {
		return pt.info("Cloud intersect", t$1, u$2), N$1.rect(t$1, u$2);
	}, e;
}
m(Ks, "cloud");
async function tr(c$1, t$1) {
	let { labelStyles: i, nodeStyles: r } = m$1(t$1);
	t$1.labelStyle = i;
	let { shapeSvg: e, bbox: a, halfPadding: h, label: s$1 } = await C(c$1, t$1, /* @__PURE__ */ P(t$1)), l = a.width + 8 * h, o = a.height + 2 * h, n$1 = 5, p$1 = `
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
  `, f = /* @__PURE__ */ e.append("path").attr("id", "node-" + t$1.id).attr("class", "node-bkg node-" + t$1.type).attr("style", r).attr("d", p$1);
	return e.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", o / 2).attr("x2", l / 2).attr("y2", o / 2), s$1.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), e.append(() => s$1.node()), D(t$1, f), t$1.calcIntersect = function(m$2, d$1) {
		return N$1.rect(m$2, d$1);
	}, t$1.intersect = function(m$2) {
		return N$1.rect(t$1, m$2);
	}, e;
}
m(tr, "defaultMindmapNode");
async function er(c$1, t$1) {
	return Xt$1(c$1, t$1, { padding: t$1.padding ?? 0 });
}
m(er, "mindmapCircle");
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
		handler: Xt$1
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
		handler: As$1
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
		handler: $s$1
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
], xe = /* @__PURE__ */ m(() => {
	let t$1 = [.../* @__PURE__ */ Object.entries({
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
		kanbanItem: Qs$1,
		mindmapCircle: er,
		defaultMindmapNode: tr,
		classBox: Zs$1,
		erBox: ye,
		requirementBox: Us
	}), .../* @__PURE__ */ Or.flatMap((i) => [
		i.shortName,
		..."aliases" in i ? i.aliases : [],
		..."internalAliases" in i ? i.internalAliases : []
	].map((e) => [e, i.handler]))];
	return Object.fromEntries(t$1);
}, "generateShapeMap")();
function Md(c$1) {
	return c$1 in xe;
}
m(Md, "isValidShape");
var Ut$1 = /* @__PURE__ */ new Map();
async function Td(c$1, t$1, i) {
	let r, e;
	t$1.shape === "rect" && (t$1.rx && t$1.ry ? t$1.shape = "roundedRect" : t$1.shape = "squareRect");
	let a = t$1.shape ? xe[t$1.shape] : void 0;
	if (!a) throw new Error(`No such shape: ${t$1.shape}. Please check your syntax.`);
	if (t$1.link) {
		let h;
		i.config.securityLevel === "sandbox" ? h = "_top" : t$1.linkTarget && (h = t$1.linkTarget || "_blank"), r = /* @__PURE__ */ c$1.insert("svg:a").attr("xlink:href", t$1.link).attr("target", h ?? null), e = await a(r, t$1, i);
	} else e = await a(c$1, t$1, i), r = e;
	return t$1.tooltip && e.attr("title", t$1.tooltip), Ut$1.set(t$1.id, r), t$1.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
}
m(Td, "insertNode");
var Rd = /* @__PURE__ */ m((c$1, t$1) => {
	Ut$1.set(t$1.id, c$1);
}, "setNodeElem"), Gd = /* @__PURE__ */ m(() => {
	Ut$1.clear();
}, "clear"), Ed = /* @__PURE__ */ m((c$1) => {
	let t$1 = /* @__PURE__ */ Ut$1.get(c$1.id);
	pt.trace("Transforming node", c$1.diff, c$1, "translate(" + (c$1.x - c$1.width / 2 - 5) + ", " + c$1.width / 2 + ")");
	let i = 8, r = c$1.diff || 0;
	return c$1.clusterNode ? t$1.attr("transform", "translate(" + (c$1.x + r - c$1.width / 2) + ", " + (c$1.y - c$1.height / 2 - i) + ")") : t$1.attr("transform", "translate(" + c$1.x + ", " + c$1.y + ")"), r;
}, "positionNode");
var xt = /* @__PURE__ */ m((r, t$1, a, s$1, i, n$1) => {
	t$1.arrowTypeStart && kt(r, "start", t$1.arrowTypeStart, a, s$1, i, n$1), t$1.arrowTypeEnd && kt(r, "end", t$1.arrowTypeEnd, a, s$1, i, n$1);
}, "addEdgeMarkers"), wt = {
	arrow_cross: {
		type: "cross",
		fill: !1
	},
	arrow_point: {
		type: "point",
		fill: !0
	},
	arrow_barb: {
		type: "barb",
		fill: !0
	},
	arrow_circle: {
		type: "circle",
		fill: !1
	},
	aggregation: {
		type: "aggregation",
		fill: !1
	},
	extension: {
		type: "extension",
		fill: !1
	},
	composition: {
		type: "composition",
		fill: !0
	},
	dependency: {
		type: "dependency",
		fill: !0
	},
	lollipop: {
		type: "lollipop",
		fill: !1
	},
	only_one: {
		type: "onlyOne",
		fill: !1
	},
	zero_or_one: {
		type: "zeroOrOne",
		fill: !1
	},
	one_or_more: {
		type: "oneOrMore",
		fill: !1
	},
	zero_or_more: {
		type: "zeroOrMore",
		fill: !1
	},
	requirement_arrow: {
		type: "requirement_arrow",
		fill: !1
	},
	requirement_contains: {
		type: "requirement_contains",
		fill: !1
	}
}, kt = /* @__PURE__ */ m((r, t$1, a, s$1, i, n$1, e) => {
	let o = wt[a];
	if (!o) {
		pt.warn(`Unknown arrow type: ${a}`);
		return;
	}
	let p$1 = `${i}_${n$1}-${o.type}${t$1 === "start" ? "Start" : "End"}`;
	if (e && e.trim() !== "") {
		let d$1 = `${p$1}_${e.replace(/[^\dA-Za-z]/g, "_")}`;
		if (!document.getElementById(d$1)) {
			let y = /* @__PURE__ */ document.getElementById(p$1);
			if (y) {
				let L$1 = /* @__PURE__ */ y.cloneNode(!0);
				L$1.id = d$1, L$1.querySelectorAll("path, circle, line").forEach((k) => {
					k.setAttribute("stroke", e), o.fill && k.setAttribute("fill", e);
				}), y.parentNode?.appendChild(L$1);
			}
		}
		r.attr(`marker-${t$1}`, `url(${s$1}#${d$1})`);
	} else r.attr(`marker-${t$1}`, `url(${s$1}#${p$1})`);
}, "addEdgeMarker");
var N = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ m(() => {
	N.clear(), u.clear();
}, "clear"), q = /* @__PURE__ */ m((r) => r ? r.reduce((a, s$1) => a + ";" + s$1, "") : "", "getLabelStyles"), pr = /* @__PURE__ */ m(async (r, t$1) => {
	let a = /* @__PURE__ */ Mo(mr().flowchart.htmlLabels), { labelStyles: s$1 } = m$1(t$1);
	t$1.labelStyle = s$1;
	let i = await Rr(r, t$1.label, {
		style: t$1.labelStyle,
		useHtmlLabels: a,
		addSvgBackground: !0,
		isNode: !1
	});
	pt.info("abc82", t$1, t$1.labelType);
	let n$1 = /* @__PURE__ */ r.insert("g").attr("class", "edgeLabel"), e = /* @__PURE__ */ n$1.insert("g").attr("class", "label").attr("data-id", t$1.id);
	e.node().appendChild(i);
	let o = /* @__PURE__ */ i.getBBox();
	if (a) {
		let l = i.children[0], p$1 = /* @__PURE__ */ ia(i);
		o = /* @__PURE__ */ l.getBoundingClientRect(), p$1.attr("width", o.width), p$1.attr("height", o.height);
	}
	e.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), N.set(t$1.id, n$1), t$1.width = o.width, t$1.height = o.height;
	let c$1;
	if (t$1.startLabelLeft) {
		let l = await Rt(t$1.startLabelLeft, /* @__PURE__ */ q(t$1.labelStyle)), p$1 = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p$1.insert("g").attr("class", "inner");
		c$1 = /* @__PURE__ */ f.node().appendChild(l);
		let d$1 = /* @__PURE__ */ l.getBBox();
		f.attr("transform", "translate(" + -d$1.width / 2 + ", " + -d$1.height / 2 + ")"), u.get(t$1.id) || u.set(t$1.id, {}), u.get(t$1.id).startLeft = p$1, I(c$1, t$1.startLabelLeft);
	}
	if (t$1.startLabelRight) {
		let l = await Rt(t$1.startLabelRight, /* @__PURE__ */ q(t$1.labelStyle)), p$1 = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p$1.insert("g").attr("class", "inner");
		c$1 = /* @__PURE__ */ p$1.node().appendChild(l), f.node().appendChild(l);
		let d$1 = /* @__PURE__ */ l.getBBox();
		f.attr("transform", "translate(" + -d$1.width / 2 + ", " + -d$1.height / 2 + ")"), u.get(t$1.id) || u.set(t$1.id, {}), u.get(t$1.id).startRight = p$1, I(c$1, t$1.startLabelRight);
	}
	if (t$1.endLabelLeft) {
		let l = await Rt(t$1.endLabelLeft, /* @__PURE__ */ q(t$1.labelStyle)), p$1 = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p$1.insert("g").attr("class", "inner");
		c$1 = /* @__PURE__ */ f.node().appendChild(l);
		let d$1 = /* @__PURE__ */ l.getBBox();
		f.attr("transform", "translate(" + -d$1.width / 2 + ", " + -d$1.height / 2 + ")"), p$1.node().appendChild(l), u.get(t$1.id) || u.set(t$1.id, {}), u.get(t$1.id).endLeft = p$1, I(c$1, t$1.endLabelLeft);
	}
	if (t$1.endLabelRight) {
		let l = await Rt(t$1.endLabelRight, /* @__PURE__ */ q(t$1.labelStyle)), p$1 = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p$1.insert("g").attr("class", "inner");
		c$1 = /* @__PURE__ */ f.node().appendChild(l);
		let d$1 = /* @__PURE__ */ l.getBBox();
		f.attr("transform", "translate(" + -d$1.width / 2 + ", " + -d$1.height / 2 + ")"), p$1.node().appendChild(l), u.get(t$1.id) || u.set(t$1.id, {}), u.get(t$1.id).endRight = p$1, I(c$1, t$1.endLabelRight);
	}
	return i;
}, "insertEdgeLabel");
function I(r, t$1) {
	mr().flowchart.htmlLabels && r && (r.style.width = t$1.length * 9 + "px", r.style.height = "12px");
}
m(I, "setTerminalWidth");
var dr = /* @__PURE__ */ m((r, t$1) => {
	pt.debug("Moving label abc88 ", r.id, r.label, /* @__PURE__ */ N.get(r.id), t$1);
	let a = t$1.updatedPath ? t$1.updatedPath : t$1.originalPath, { subGraphTitleTotalMargin: i } = n(/* @__PURE__ */ mr());
	if (r.label) {
		let n$1 = /* @__PURE__ */ N.get(r.id), e = r.x, o = r.y;
		if (a) {
			let c$1 = /* @__PURE__ */ Ut.calcLabelPosition(a);
			pt.debug("Moving label " + r.label + " from (", e, ",", o, ") to (", c$1.x, ",", c$1.y, ") abc88"), t$1.updatedPath && (e = c$1.x, o = c$1.y);
		}
		n$1.attr("transform", `translate(${e}, ${o + i / 2})`);
	}
	if (r.startLabelLeft) {
		let n$1 = u.get(r.id).startLeft, e = r.x, o = r.y;
		if (a) {
			let c$1 = /* @__PURE__ */ Ut.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_left", a);
			e = c$1.x, o = c$1.y;
		}
		n$1.attr("transform", `translate(${e}, ${o})`);
	}
	if (r.startLabelRight) {
		let n$1 = u.get(r.id).startRight, e = r.x, o = r.y;
		if (a) {
			let c$1 = /* @__PURE__ */ Ut.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_right", a);
			e = c$1.x, o = c$1.y;
		}
		n$1.attr("transform", `translate(${e}, ${o})`);
	}
	if (r.endLabelLeft) {
		let n$1 = u.get(r.id).endLeft, e = r.x, o = r.y;
		if (a) {
			let c$1 = /* @__PURE__ */ Ut.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_left", a);
			e = c$1.x, o = c$1.y;
		}
		n$1.attr("transform", `translate(${e}, ${o})`);
	}
	if (r.endLabelRight) {
		let n$1 = u.get(r.id).endRight, e = r.x, o = r.y;
		if (a) {
			let c$1 = /* @__PURE__ */ Ut.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_right", a);
			e = c$1.x, o = c$1.y;
		}
		n$1.attr("transform", `translate(${e}, ${o})`);
	}
}, "positionEdgeLabel"), St = /* @__PURE__ */ m((r, t$1) => {
	let a = r.x, s$1 = r.y, i = /* @__PURE__ */ Math.abs(t$1.x - a), n$1 = /* @__PURE__ */ Math.abs(t$1.y - s$1), e = r.width / 2, o = r.height / 2;
	return i >= e || n$1 >= o;
}, "outsideNode"), _t = /* @__PURE__ */ m((r, t$1, a) => {
	pt.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t$1)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);
	let s$1 = r.x, i = r.y, n$1 = /* @__PURE__ */ Math.abs(s$1 - a.x), e = r.width / 2, o = a.x < t$1.x ? e - n$1 : e + n$1, c$1 = r.height / 2, l = /* @__PURE__ */ Math.abs(t$1.y - a.y), p$1 = /* @__PURE__ */ Math.abs(t$1.x - a.x);
	if (Math.abs(i - t$1.y) * e > Math.abs(s$1 - t$1.x) * c$1) {
		let f = a.y < t$1.y ? t$1.y - c$1 - i : i - c$1 - t$1.y;
		o = p$1 * f / l;
		let d$1 = {
			x: a.x < t$1.x ? a.x + o : a.x - p$1 + o,
			y: a.y < t$1.y ? a.y + l - f : a.y - l + f
		};
		return o === 0 && (d$1.x = t$1.x, d$1.y = t$1.y), p$1 === 0 && (d$1.x = t$1.x), l === 0 && (d$1.y = t$1.y), pt.debug(`abc89 top/bottom calc, Q ${l}, q ${f}, R ${p$1}, r ${o}`, d$1), d$1;
	} else {
		a.x < t$1.x ? o = t$1.x - e - s$1 : o = s$1 - e - t$1.x;
		let f = l * o / p$1, d$1 = a.x < t$1.x ? a.x + p$1 - o : a.x - p$1 + o, y = a.y < t$1.y ? a.y + f : a.y - f;
		return pt.debug(`sides calc abc89, Q ${l}, q ${f}, R ${p$1}, r ${o}`, {
			_x: d$1,
			_y: y
		}), o === 0 && (d$1 = t$1.x, y = t$1.y), p$1 === 0 && (d$1 = t$1.x), l === 0 && (y = t$1.y), {
			x: d$1,
			y
		};
	}
}, "intersection"), ut = /* @__PURE__ */ m((r, t$1) => {
	pt.warn("abc88 cutPathAtIntersect", r, t$1);
	let a = [], s$1 = r[0], i = !1;
	return r.forEach((n$1) => {
		if (pt.info("abc88 checking point", n$1, t$1), !St(t$1, n$1) && !i) {
			let e = /* @__PURE__ */ _t(t$1, s$1, n$1);
			pt.debug("abc88 inside", n$1, s$1, e), pt.debug("abc88 intersection", e, t$1);
			let o = !1;
			a.forEach((c$1) => {
				o = o || c$1.x === e.x && c$1.y === e.y;
			}), a.some((c$1) => c$1.x === e.x && c$1.y === e.y) ? pt.warn("abc88 no intersect", e, a) : a.push(e), i = !0;
		} else pt.warn("abc88 outside", n$1, s$1), s$1 = n$1, i || a.push(n$1);
	}), pt.debug("returning points", a), a;
}, "cutPathAtIntersect");
function $t(r) {
	let t$1 = [], a = [];
	for (let s$1 = 1; s$1 < r.length - 1; s$1++) {
		let i = r[s$1 - 1], n$1 = r[s$1], e = r[s$1 + 1];
		(i.x === n$1.x && n$1.y === e.y && Math.abs(n$1.x - e.x) > 5 && Math.abs(n$1.y - i.y) > 5 || i.y === n$1.y && n$1.x === e.x && Math.abs(n$1.x - i.x) > 5 && Math.abs(n$1.y - e.y) > 5) && (t$1.push(n$1), a.push(s$1));
	}
	return {
		cornerPoints: t$1,
		cornerPointPositions: a
	};
}
m($t, "extractCornerPoints");
var bt = /* @__PURE__ */ m(function(r, t$1, a) {
	let s$1 = t$1.x - r.x, i = t$1.y - r.y, e = a / Math.sqrt(s$1 * s$1 + i * i);
	return {
		x: t$1.x - e * s$1,
		y: t$1.y - e * i
	};
}, "findAdjacentPoint"), Et = /* @__PURE__ */ m(function(r) {
	let { cornerPointPositions: t$1 } = $t(r), a = [];
	for (let s$1 = 0; s$1 < r.length; s$1++) if (t$1.includes(s$1)) {
		let i = r[s$1 - 1], n$1 = r[s$1 + 1], e = r[s$1], o = /* @__PURE__ */ bt(i, e, 5), c$1 = /* @__PURE__ */ bt(n$1, e, 5), l = c$1.x - o.x, p$1 = c$1.y - o.y;
		a.push(o);
		let f = Math.sqrt(2) * 2, d$1 = {
			x: e.x,
			y: e.y
		};
		if (Math.abs(n$1.x - i.x) > 10 && Math.abs(n$1.y - i.y) >= 10) {
			pt.debug("Corner point fixing", /* @__PURE__ */ Math.abs(n$1.x - i.x), /* @__PURE__ */ Math.abs(n$1.y - i.y));
			let y = 5;
			e.x === o.x ? d$1 = {
				x: l < 0 ? o.x - y + f : o.x + y - f,
				y: p$1 < 0 ? o.y - f : o.y + f
			} : d$1 = {
				x: l < 0 ? o.x - f : o.x + f,
				y: p$1 < 0 ? o.y - y + f : o.y + y - f
			};
		} else pt.debug("Corner point skipping fixing", /* @__PURE__ */ Math.abs(n$1.x - i.x), /* @__PURE__ */ Math.abs(n$1.y - i.y));
		a.push(d$1, c$1);
	} else a.push(r[s$1]);
	return a;
}, "fixCorners"), Ot$1 = /* @__PURE__ */ m((r, t$1, a) => {
	let s$1 = r - t$1 - a, i = 2, n$1 = 2, e = i + n$1, o = /* @__PURE__ */ Math.floor(s$1 / e);
	return `0 ${t$1} ${Array(o).fill(`${i} ${n$1}`).join(" ")} ${a}`;
}, "generateDashArray"), fr = /* @__PURE__ */ m(function(r, t$1, a, s$1, i, n$1, e, o = !1) {
	let { handDrawnSeed: c$1 } = mr(), l = t$1.points, p$1 = !1, f = i;
	var d$1 = n$1;
	let y = [];
	for (let b in t$1.cssCompiledStyles) g(b) || y.push(t$1.cssCompiledStyles[b]);
	pt.debug("UIO intersect check", t$1.points, d$1.x, f.x), d$1.intersect && f.intersect && !o && (l = /* @__PURE__ */ l.slice(1, t$1.points.length - 1), l.unshift(/* @__PURE__ */ f.intersect(l[0])), pt.debug("Last point UIO", t$1.start, "-->", t$1.end, l[l.length - 1], d$1, /* @__PURE__ */ d$1.intersect(l[l.length - 1])), l.push(/* @__PURE__ */ d$1.intersect(l[l.length - 1])));
	let L$1 = /* @__PURE__ */ btoa(/* @__PURE__ */ JSON.stringify(l));
	t$1.toCluster && (pt.info("to cluster abc88", /* @__PURE__ */ a.get(t$1.toCluster)), l = /* @__PURE__ */ ut(t$1.points, a.get(t$1.toCluster).node), p$1 = !0), t$1.fromCluster && (pt.debug("from cluster abc88", /* @__PURE__ */ a.get(t$1.fromCluster), /* @__PURE__ */ JSON.stringify(l, null, 2)), l = /* @__PURE__ */ ut(/* @__PURE__ */ l.reverse(), a.get(t$1.fromCluster).node).reverse(), p$1 = !0);
	let M$1 = /* @__PURE__ */ l.filter((b) => !Number.isNaN(b.y));
	M$1 = /* @__PURE__ */ Et(M$1);
	let k = $s;
	switch (k = Vn, t$1.curve) {
		case "linear":
			k = Vn;
			break;
		case "basis":
			k = $s;
			break;
		case "cardinal":
			k = Bc;
			break;
		case "bumpX":
			k = Lc;
			break;
		case "bumpY":
			k = zc;
			break;
		case "catmullRom":
			k = Vc;
			break;
		case "monotoneX":
			k = Zc;
			break;
		case "monotoneY":
			k = Qc;
			break;
		case "natural":
			k = Zs;
			break;
		case "step":
			k = Qs;
			break;
		case "stepAfter":
			k = Jc;
			break;
		case "stepBefore":
			k = Kc;
			break;
		default: k = $s;
	}
	let { x: Y, y: C$1 } = w(t$1), Q = /* @__PURE__ */ As().x(Y).y(C$1).curve(k), g$1;
	switch (t$1.thickness) {
		case "normal":
			g$1 = "edge-thickness-normal";
			break;
		case "thick":
			g$1 = "edge-thickness-thick";
			break;
		case "invisible":
			g$1 = "edge-thickness-invisible";
			break;
		default: g$1 = "edge-thickness-normal";
	}
	switch (t$1.pattern) {
		case "solid":
			g$1 += " edge-pattern-solid";
			break;
		case "dotted":
			g$1 += " edge-pattern-dotted";
			break;
		case "dashed":
			g$1 += " edge-pattern-dashed";
			break;
		default: g$1 += " edge-pattern-solid";
	}
	let x, S$2 = t$1.curve === "rounded" ? Tt(/* @__PURE__ */ vt(M$1, t$1), 5) : Q(M$1), w$1 = Array.isArray(t$1.style) ? t$1.style : [t$1.style], W = /* @__PURE__ */ w$1.find((b) => b?.startsWith("stroke:")), H$1 = !1;
	if (t$1.look === "handDrawn") {
		let b = /* @__PURE__ */ v.svg(r);
		Object.assign([], M$1);
		let B = /* @__PURE__ */ b.path(S$2, {
			roughness: .3,
			seed: c$1
		});
		g$1 += " transition", x = /* @__PURE__ */ ia(B).select("path").attr("id", t$1.id).attr("class", " " + g$1 + (t$1.classes ? " " + t$1.classes : "")).attr("style", w$1 ? w$1.reduce((R, A) => R + ";" + A, "") : "");
		let O = /* @__PURE__ */ x.attr("d");
		x.attr("d", O), r.node().appendChild(/* @__PURE__ */ x.node());
	} else {
		let b = /* @__PURE__ */ y.join(";"), B = w$1 ? w$1.reduce((z, T) => z + T + ";", "") : "", O = "";
		t$1.animate && (O = " edge-animation-fast"), t$1.animation && (O = " edge-animation-" + t$1.animation);
		let R = (b ? b + ";" + B + ";" : B) + ";" + (w$1 ? w$1.reduce((z, T) => z + ";" + T, "") : "");
		x = /* @__PURE__ */ r.append("path").attr("d", S$2).attr("id", t$1.id).attr("class", " " + g$1 + (t$1.classes ? " " + t$1.classes : "") + (O ?? "")).attr("style", R), W = R.match(/stroke:([^;]+)/)?.[1], H$1 = t$1.animate === !0 || !!t$1.animation || b.includes("animation");
		let A = /* @__PURE__ */ x.node(), J = typeof A.getTotalLength == "function" ? A.getTotalLength() : 0, Z = d[t$1.arrowTypeStart] || 0, V$1 = d[t$1.arrowTypeEnd] || 0;
		if (t$1.look === "neo" && !H$1) {
			let T = `stroke-dasharray: ${t$1.pattern === "dotted" || t$1.pattern === "dashed" ? Ot$1(J, Z, V$1) : `0 ${Z} ${J - Z - V$1} ${V$1}`}; stroke-dashoffset: 0;`;
			x.attr("style", T + x.attr("style"));
		}
	}
	x.attr("data-edge", !0), x.attr("data-et", "edge"), x.attr("data-id", t$1.id), x.attr("data-points", L$1), t$1.showPoints && M$1.forEach((b) => {
		r.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", b.x).attr("cy", b.y);
	});
	let E = "";
	(mr().flowchart.arrowMarkerAbsolute || mr().state.arrowMarkerAbsolute) && (E = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, E = /* @__PURE__ */ E.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), pt.info("arrowTypeStart", t$1.arrowTypeStart), pt.info("arrowTypeEnd", t$1.arrowTypeEnd), xt(x, t$1, E, e, s$1, W);
	let Lt$1 = /* @__PURE__ */ Math.floor(l.length / 2), Mt$1 = l[Lt$1];
	Ut.isLabelCoordinateInPath(Mt$1, /* @__PURE__ */ x.attr("d")) || (p$1 = !0);
	let P$1 = {};
	return p$1 && (P$1.updatedPath = l), P$1.originalPath = t$1.points, P$1;
}, "insertEdge");
function Tt(r, t$1) {
	if (r.length < 2) return "";
	let a = "", s$1 = r.length, i = 1e-5;
	for (let n$1 = 0; n$1 < s$1; n$1++) {
		let e = r[n$1], o = r[n$1 - 1], c$1 = r[n$1 + 1];
		if (n$1 === 0) a += `M${e.x},${e.y}`;
		else if (n$1 === s$1 - 1) a += `L${e.x},${e.y}`;
		else {
			let l = e.x - o.x, p$1 = e.y - o.y, f = c$1.x - e.x, d$1 = c$1.y - e.y, y = /* @__PURE__ */ Math.hypot(l, p$1), L$1 = /* @__PURE__ */ Math.hypot(f, d$1);
			if (y < i || L$1 < i) {
				a += `L${e.x},${e.y}`;
				continue;
			}
			let M$1 = l / y, k = p$1 / y, Y = f / L$1, C$1 = d$1 / L$1, Q = M$1 * Y + k * C$1, g$1 = /* @__PURE__ */ Math.max(-1, /* @__PURE__ */ Math.min(1, Q)), x = /* @__PURE__ */ Math.acos(g$1);
			if (x < i || Math.abs(Math.PI - x) < i) {
				a += `L${e.x},${e.y}`;
				continue;
			}
			let S$2 = /* @__PURE__ */ Math.min(t$1 / Math.sin(x / 2), y / 2, L$1 / 2), w$1 = e.x - M$1 * S$2, W = e.y - k * S$2, H$1 = e.x + Y * S$2, E = e.y + C$1 * S$2;
			a += `L${w$1},${W}`, a += `Q${e.x},${e.y} ${H$1},${E}`;
		}
	}
	return a;
}
m(Tt, "generateRoundedPath");
function gt(r, t$1) {
	if (!r || !t$1) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	let a = t$1.x - r.x, s$1 = t$1.y - r.y;
	return {
		angle: /* @__PURE__ */ Math.atan2(s$1, a),
		deltaX: a,
		deltaY: s$1
	};
}
m(gt, "calculateDeltaAndAngle");
function vt(r, t$1) {
	let a = /* @__PURE__ */ r.map((i) => ({ ...i }));
	if (r.length >= 2 && s[t$1.arrowTypeStart]) {
		let i = s[t$1.arrowTypeStart], n$1 = r[0], e = r[1], { angle: o } = gt(n$1, e), c$1 = i * Math.cos(o), l = i * Math.sin(o);
		a[0].x = n$1.x + c$1, a[0].y = n$1.y + l;
	}
	let s$1 = r.length;
	if (s$1 >= 2 && s[t$1.arrowTypeEnd]) {
		let i = s[t$1.arrowTypeEnd], n$1 = r[s$1 - 1], e = r[s$1 - 2], { angle: o } = gt(e, n$1), c$1 = i * Math.cos(o), l = i * Math.sin(o);
		a[s$1 - 1].x = n$1.x - c$1, a[s$1 - 1].y = n$1.y - l;
	}
	return a;
}
m(vt, "applyMarkerOffsetsToPoints");
var Xt = /* @__PURE__ */ m((r, t$1, a, s$1) => {
	t$1.forEach((i) => {
		Vt[i](r, a, s$1);
	});
}, "insertMarkers"), Vt = {
	extension: /* @__PURE__ */ m((r, t$1, a) => {
		pt.trace("Making markers for ", a), r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-extensionStart").attr("class", "marker extension " + t$1).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-extensionEnd").attr("class", "marker extension " + t$1).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
	}, "extension"),
	composition: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-compositionStart").attr("class", "marker composition " + t$1).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-compositionEnd").attr("class", "marker composition " + t$1).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-aggregationStart").attr("class", "marker aggregation " + t$1).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-aggregationEnd").attr("class", "marker aggregation " + t$1).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-dependencyStart").attr("class", "marker dependency " + t$1).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-dependencyEnd").attr("class", "marker dependency " + t$1).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-lollipopStart").attr("class", "marker lollipop " + t$1).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-lollipopEnd").attr("class", "marker lollipop " + t$1).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
	}, "lollipop"),
	point: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("marker").attr("id", a + "_" + t$1 + "-pointEnd").attr("class", "marker " + t$1).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t$1 + "-pointStart").attr("class", "marker " + t$1).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("marker").attr("id", a + "_" + t$1 + "-circleEnd").attr("class", "marker " + t$1).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t$1 + "-circleStart").attr("class", "marker " + t$1).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("marker").attr("id", a + "_" + t$1 + "-crossEnd").attr("class", "marker cross " + t$1).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t$1 + "-crossStart").attr("class", "marker cross " + t$1).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb"),
	only_one: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-onlyOneStart").attr("class", "marker onlyOne " + t$1).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-onlyOneEnd").attr("class", "marker onlyOne " + t$1).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
	}, "only_one"),
	zero_or_one: /* @__PURE__ */ m((r, t$1, a) => {
		let s$1 = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t$1).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		s$1.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), s$1.append("path").attr("d", "M9,0 L9,18");
		let i = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t$1).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		i.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M21,0 L21,18");
	}, "zero_or_one"),
	one_or_more: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t$1).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t$1).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
	}, "one_or_more"),
	zero_or_more: /* @__PURE__ */ m((r, t$1, a) => {
		let s$1 = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t$1).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		s$1.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), s$1.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
		let i = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t$1).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		i.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
	}, "zero_or_more"),
	requirement_arrow: /* @__PURE__ */ m((r, t$1, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
	}, "requirement_arrow"),
	requirement_contains: /* @__PURE__ */ m((r, t$1, a) => {
		let s$1 = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t$1 + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
		s$1.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), s$1.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), s$1.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
	}, "requirement_contains")
}, kr = Xt;
var L = {
	common: hn,
	getConfig: Ot,
	insertCluster: xa,
	insertEdge: fr,
	insertEdgeLabel: pr,
	insertMarkers: kr,
	insertNode: Td,
	interpolateToCurve: dt,
	labelHelper: C,
	log: pt,
	positionEdgeLabel: dr
};
var t = {}, c = /* @__PURE__ */ m((r) => {
	for (let e of r) t[e.name] = e;
}, "registerLayoutLoaders");
m(() => {
	c([{
		name: "dagre",
		loader: /* @__PURE__ */ m(async () => await __vitePreload(() => import("./vendor-mermaid.pf6pZzY2.chunk.js"), __vite__mapDeps([0,1,2,3,4,5,6])), "loader")
	}, {
		name: "cose-bilkent",
		loader: /* @__PURE__ */ m(async () => await __vitePreload(() => import("./vendor-mermaid.CK4Mkaxq.chunk.js"), __vite__mapDeps([7,1,2,8])), "loader")
	}]);
}, "registerDefaultLayoutLoaders")();
var S = /* @__PURE__ */ m(async (r, e) => {
	if (!(r.layoutAlgorithm in t)) throw new Error(`Unknown layout algorithm: ${r.layoutAlgorithm}`);
	let n$1 = t[r.layoutAlgorithm];
	return (await n$1.loader()).render(r, e, L, { algorithm: n$1.algorithm });
}, "render"), V = /* @__PURE__ */ m((r = "", { fallback: e = "dagre" } = {}) => {
	if (r in t) return r;
	if (e in t) return pt.warn(`Layout algorithm ${r} is not registered. Using ${e} as fallback.`), e;
	throw new Error(`Both layout algorithms ${r} and ${e} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { dr as a, pr as c, Gd as d, Md as f, xa as g, ba as h, cr as i, D as l, Td as m, V as n, fr as o, Rd as p, c as r, kr as s, S as t, Ed as u };
