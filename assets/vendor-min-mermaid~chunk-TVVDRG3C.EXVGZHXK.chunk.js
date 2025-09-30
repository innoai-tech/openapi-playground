import { $t as pt, Ct as Lc, Dt as Qs, Et as Qc, Gt as Zs, J as mr, Nt as Vc, Pt as Vn, St as Kc, Ut as Zc, dt as As, ft as Bc, in as zc, lt as $s, n as g, qt as ia, r as m, xt as Jc, y as Mo } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as m$1 } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { c as Ut } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
import { f as n, g as Rr, s as Rt, u as v } from "./vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js";
import { n as s, r as w, t as d } from "./vendor-min-mermaid~chunk-RV6DXAHM.CHvzwstl.chunk.js";
var xt = /* @__PURE__ */ m$1((r, t, a, s$1, i, n$1) => {
	t.arrowTypeStart && kt(r, "start", t.arrowTypeStart, a, s$1, i, n$1), t.arrowTypeEnd && kt(r, "end", t.arrowTypeEnd, a, s$1, i, n$1);
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
}, kt = /* @__PURE__ */ m$1((r, t, a, s$1, i, n$1, e) => {
	let o = wt[a];
	if (!o) {
		pt.warn(`Unknown arrow type: ${a}`);
		return;
	}
	let c = o.type, p = `${i}_${n$1}-${c}${t === "start" ? "Start" : "End"}`;
	if (e && e.trim() !== "") {
		let d$1 = `${p}_${/* @__PURE__ */ e.replace(/[^\dA-Za-z]/g, "_")}`;
		if (!document.getElementById(d$1)) {
			let y = /* @__PURE__ */ document.getElementById(p);
			if (y) {
				let L = /* @__PURE__ */ y.cloneNode(!0);
				L.id = d$1, L.querySelectorAll("path, circle, line").forEach((k) => {
					k.setAttribute("stroke", e), o.fill && k.setAttribute("fill", e);
				}), y.parentNode?.appendChild(L);
			}
		}
		r.attr(`marker-${t}`, `url(${s$1}#${d$1})`);
	} else r.attr(`marker-${t}`, `url(${s$1}#${p})`);
}, "addEdgeMarker");
var N = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ m$1(() => {
	N.clear(), u.clear();
}, "clear"), q = /* @__PURE__ */ m$1((r) => r ? r.reduce((a, s$1) => a + ";" + s$1, "") : "", "getLabelStyles"), pr = /* @__PURE__ */ m$1(async (r, t) => {
	let a = /* @__PURE__ */ Mo(mr().flowchart.htmlLabels), { labelStyles: s$1 } = m(t);
	t.labelStyle = s$1;
	let i = await Rr(r, t.label, {
		style: t.labelStyle,
		useHtmlLabels: a,
		addSvgBackground: !0,
		isNode: !1
	});
	pt.info("abc82", t, t.labelType);
	let n$1 = /* @__PURE__ */ r.insert("g").attr("class", "edgeLabel"), e = /* @__PURE__ */ n$1.insert("g").attr("class", "label").attr("data-id", t.id);
	e.node().appendChild(i);
	let o = /* @__PURE__ */ i.getBBox();
	if (a) {
		let l = i.children[0], p = /* @__PURE__ */ ia(i);
		o = /* @__PURE__ */ l.getBoundingClientRect(), p.attr("width", o.width), p.attr("height", o.height);
	}
	e.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), N.set(t.id, n$1), t.width = o.width, t.height = o.height;
	let c;
	if (t.startLabelLeft) {
		let l = await Rt(t.startLabelLeft, /* @__PURE__ */ q(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p.insert("g").attr("class", "inner");
		c = /* @__PURE__ */ f.node().appendChild(l);
		let d$1 = /* @__PURE__ */ l.getBBox();
		f.attr("transform", "translate(" + -d$1.width / 2 + ", " + -d$1.height / 2 + ")"), u.get(t.id) || u.set(t.id, {}), u.get(t.id).startLeft = p, I(c, t.startLabelLeft);
	}
	if (t.startLabelRight) {
		let l = await Rt(t.startLabelRight, /* @__PURE__ */ q(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p.insert("g").attr("class", "inner");
		c = /* @__PURE__ */ p.node().appendChild(l), f.node().appendChild(l);
		let d$1 = /* @__PURE__ */ l.getBBox();
		f.attr("transform", "translate(" + -d$1.width / 2 + ", " + -d$1.height / 2 + ")"), u.get(t.id) || u.set(t.id, {}), u.get(t.id).startRight = p, I(c, t.startLabelRight);
	}
	if (t.endLabelLeft) {
		let l = await Rt(t.endLabelLeft, /* @__PURE__ */ q(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p.insert("g").attr("class", "inner");
		c = /* @__PURE__ */ f.node().appendChild(l);
		let d$1 = /* @__PURE__ */ l.getBBox();
		f.attr("transform", "translate(" + -d$1.width / 2 + ", " + -d$1.height / 2 + ")"), p.node().appendChild(l), u.get(t.id) || u.set(t.id, {}), u.get(t.id).endLeft = p, I(c, t.endLabelLeft);
	}
	if (t.endLabelRight) {
		let l = await Rt(t.endLabelRight, /* @__PURE__ */ q(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p.insert("g").attr("class", "inner");
		c = /* @__PURE__ */ f.node().appendChild(l);
		let d$1 = /* @__PURE__ */ l.getBBox();
		f.attr("transform", "translate(" + -d$1.width / 2 + ", " + -d$1.height / 2 + ")"), p.node().appendChild(l), u.get(t.id) || u.set(t.id, {}), u.get(t.id).endRight = p, I(c, t.endLabelRight);
	}
	return i;
}, "insertEdgeLabel");
function I(r, t) {
	mr().flowchart.htmlLabels && r && (r.style.width = t.length * 9 + "px", r.style.height = "12px");
}
m$1(I, "setTerminalWidth");
var dr = /* @__PURE__ */ m$1((r, t) => {
	pt.debug("Moving label abc88 ", r.id, r.label, /* @__PURE__ */ N.get(r.id), t);
	let a = t.updatedPath ? t.updatedPath : t.originalPath, { subGraphTitleTotalMargin: i } = n(/* @__PURE__ */ mr());
	if (r.label) {
		let n$1 = /* @__PURE__ */ N.get(r.id), e = r.x, o = r.y;
		if (a) {
			let c = /* @__PURE__ */ Ut.calcLabelPosition(a);
			pt.debug("Moving label " + r.label + " from (", e, ",", o, ") to (", c.x, ",", c.y, ") abc88"), t.updatedPath && (e = c.x, o = c.y);
		}
		n$1.attr("transform", `translate(${e}, ${o + i / 2})`);
	}
	if (r.startLabelLeft) {
		let n$1 = u.get(r.id).startLeft, e = r.x, o = r.y;
		if (a) {
			let c = /* @__PURE__ */ Ut.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_left", a);
			e = c.x, o = c.y;
		}
		n$1.attr("transform", `translate(${e}, ${o})`);
	}
	if (r.startLabelRight) {
		let n$1 = u.get(r.id).startRight, e = r.x, o = r.y;
		if (a) {
			let c = /* @__PURE__ */ Ut.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_right", a);
			e = c.x, o = c.y;
		}
		n$1.attr("transform", `translate(${e}, ${o})`);
	}
	if (r.endLabelLeft) {
		let n$1 = u.get(r.id).endLeft, e = r.x, o = r.y;
		if (a) {
			let c = /* @__PURE__ */ Ut.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_left", a);
			e = c.x, o = c.y;
		}
		n$1.attr("transform", `translate(${e}, ${o})`);
	}
	if (r.endLabelRight) {
		let n$1 = u.get(r.id).endRight, e = r.x, o = r.y;
		if (a) {
			let c = /* @__PURE__ */ Ut.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_right", a);
			e = c.x, o = c.y;
		}
		n$1.attr("transform", `translate(${e}, ${o})`);
	}
}, "positionEdgeLabel"), St = /* @__PURE__ */ m$1((r, t) => {
	let a = r.x, s$1 = r.y, i = /* @__PURE__ */ Math.abs(t.x - a), n$1 = /* @__PURE__ */ Math.abs(t.y - s$1), e = r.width / 2, o = r.height / 2;
	return i >= e || n$1 >= o;
}, "outsideNode"), _t = /* @__PURE__ */ m$1((r, t, a) => {
	pt.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);
	let s$1 = r.x, i = r.y, n$1 = /* @__PURE__ */ Math.abs(s$1 - a.x), e = r.width / 2, o = a.x < t.x ? e - n$1 : e + n$1, c = r.height / 2, l = /* @__PURE__ */ Math.abs(t.y - a.y), p = /* @__PURE__ */ Math.abs(t.x - a.x);
	if (Math.abs(i - t.y) * e > Math.abs(s$1 - t.x) * c) {
		let f = a.y < t.y ? t.y - c - i : i - c - t.y;
		o = p * f / l;
		let d$1 = {
			x: a.x < t.x ? a.x + o : a.x - p + o,
			y: a.y < t.y ? a.y + l - f : a.y - l + f
		};
		return o === 0 && (d$1.x = t.x, d$1.y = t.y), p === 0 && (d$1.x = t.x), l === 0 && (d$1.y = t.y), pt.debug(`abc89 top/bottom calc, Q ${l}, q ${f}, R ${p}, r ${o}`, d$1), d$1;
	} else {
		a.x < t.x ? o = t.x - e - s$1 : o = s$1 - e - t.x;
		let f = l * o / p, d$1 = a.x < t.x ? a.x + p - o : a.x - p + o, y = a.y < t.y ? a.y + f : a.y - f;
		return pt.debug(`sides calc abc89, Q ${l}, q ${f}, R ${p}, r ${o}`, {
			_x: d$1,
			_y: y
		}), o === 0 && (d$1 = t.x, y = t.y), p === 0 && (d$1 = t.x), l === 0 && (y = t.y), {
			x: d$1,
			y
		};
	}
}, "intersection"), ut = /* @__PURE__ */ m$1((r, t) => {
	pt.warn("abc88 cutPathAtIntersect", r, t);
	let a = [], s$1 = r[0], i = !1;
	return r.forEach((n$1) => {
		if (pt.info("abc88 checking point", n$1, t), !St(t, n$1) && !i) {
			let e = /* @__PURE__ */ _t(t, s$1, n$1);
			pt.debug("abc88 inside", n$1, s$1, e), pt.debug("abc88 intersection", e, t);
			let o = !1;
			a.forEach((c) => {
				o = o || c.x === e.x && c.y === e.y;
			}), a.some((c) => c.x === e.x && c.y === e.y) ? pt.warn("abc88 no intersect", e, a) : a.push(e), i = !0;
		} else pt.warn("abc88 outside", n$1, s$1), s$1 = n$1, i || a.push(n$1);
	}), pt.debug("returning points", a), a;
}, "cutPathAtIntersect");
function $t(r) {
	let t = [], a = [];
	for (let s$1 = 1; s$1 < r.length - 1; s$1++) {
		let i = r[s$1 - 1], n$1 = r[s$1], e = r[s$1 + 1];
		(i.x === n$1.x && n$1.y === e.y && Math.abs(n$1.x - e.x) > 5 && Math.abs(n$1.y - i.y) > 5 || i.y === n$1.y && n$1.x === e.x && Math.abs(n$1.x - i.x) > 5 && Math.abs(n$1.y - e.y) > 5) && (t.push(n$1), a.push(s$1));
	}
	return {
		cornerPoints: t,
		cornerPointPositions: a
	};
}
m$1($t, "extractCornerPoints");
var bt = /* @__PURE__ */ m$1(function(r, t, a) {
	let s$1 = t.x - r.x, i = t.y - r.y, n$1 = /* @__PURE__ */ Math.sqrt(s$1 * s$1 + i * i), e = a / n$1;
	return {
		x: t.x - e * s$1,
		y: t.y - e * i
	};
}, "findAdjacentPoint"), Et = /* @__PURE__ */ m$1(function(r) {
	let { cornerPointPositions: t } = $t(r), a = [];
	for (let s$1 = 0; s$1 < r.length; s$1++) if (t.includes(s$1)) {
		let i = r[s$1 - 1], n$1 = r[s$1 + 1], e = r[s$1], o = /* @__PURE__ */ bt(i, e, 5), c = /* @__PURE__ */ bt(n$1, e, 5), l = c.x - o.x, p = c.y - o.y;
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
				y: p < 0 ? o.y - f : o.y + f
			} : d$1 = {
				x: l < 0 ? o.x - f : o.x + f,
				y: p < 0 ? o.y - y + f : o.y + y - f
			};
		} else pt.debug("Corner point skipping fixing", /* @__PURE__ */ Math.abs(n$1.x - i.x), /* @__PURE__ */ Math.abs(n$1.y - i.y));
		a.push(d$1, c);
	} else a.push(r[s$1]);
	return a;
}, "fixCorners"), Ot = /* @__PURE__ */ m$1((r, t, a) => {
	let s$1 = r - t - a, i = 2, n$1 = 2, e = i + n$1, o = /* @__PURE__ */ Math.floor(s$1 / e);
	return `0 ${t} ${/* @__PURE__ */ Array(o).fill(`${i} ${n$1}`).join(" ")} ${a}`;
}, "generateDashArray"), fr = /* @__PURE__ */ m$1(function(r, t, a, s$1, i, n$1, e, o = !1) {
	let { handDrawnSeed: c } = mr(), l = t.points, p = !1, f = i;
	var d$1 = n$1;
	let y = [];
	for (let b in t.cssCompiledStyles) g(b) || y.push(t.cssCompiledStyles[b]);
	pt.debug("UIO intersect check", t.points, d$1.x, f.x), d$1.intersect && f.intersect && !o && (l = /* @__PURE__ */ l.slice(1, t.points.length - 1), l.unshift(/* @__PURE__ */ f.intersect(l[0])), pt.debug("Last point UIO", t.start, "-->", t.end, l[l.length - 1], d$1, /* @__PURE__ */ d$1.intersect(l[l.length - 1])), l.push(/* @__PURE__ */ d$1.intersect(l[l.length - 1])));
	let L = /* @__PURE__ */ btoa(/* @__PURE__ */ JSON.stringify(l));
	t.toCluster && (pt.info("to cluster abc88", /* @__PURE__ */ a.get(t.toCluster)), l = /* @__PURE__ */ ut(t.points, a.get(t.toCluster).node), p = !0), t.fromCluster && (pt.debug("from cluster abc88", /* @__PURE__ */ a.get(t.fromCluster), /* @__PURE__ */ JSON.stringify(l, null, 2)), l = /* @__PURE__ */ ut(/* @__PURE__ */ l.reverse(), a.get(t.fromCluster).node).reverse(), p = !0);
	let M = /* @__PURE__ */ l.filter((b) => !Number.isNaN(b.y));
	M = /* @__PURE__ */ Et(M);
	let k = $s;
	switch (k = Vn, t.curve) {
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
	let { x: Y, y: C } = w(t), Q = /* @__PURE__ */ As().x(Y).y(C).curve(k), g$1;
	switch (t.thickness) {
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
	switch (t.pattern) {
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
	let x, S = t.curve === "rounded" ? Tt(/* @__PURE__ */ vt(M, t), 5) : Q(M), w$1 = Array.isArray(t.style) ? t.style : [t.style], W = /* @__PURE__ */ w$1.find((b) => b?.startsWith("stroke:")), H = !1;
	if (t.look === "handDrawn") {
		let b = /* @__PURE__ */ v.svg(r);
		Object.assign([], M);
		let B = /* @__PURE__ */ b.path(S, {
			roughness: .3,
			seed: c
		});
		g$1 += " transition", x = /* @__PURE__ */ ia(B).select("path").attr("id", t.id).attr("class", " " + g$1 + (t.classes ? " " + t.classes : "")).attr("style", w$1 ? w$1.reduce((R, A) => R + ";" + A, "") : "");
		let O = /* @__PURE__ */ x.attr("d");
		x.attr("d", O), r.node().appendChild(/* @__PURE__ */ x.node());
	} else {
		let b = /* @__PURE__ */ y.join(";"), B = w$1 ? w$1.reduce((z, T) => z + T + ";", "") : "", O = "";
		t.animate && (O = " edge-animation-fast"), t.animation && (O = " edge-animation-" + t.animation);
		let R = (b ? b + ";" + B + ";" : B) + ";" + (w$1 ? w$1.reduce((z, T) => z + ";" + T, "") : "");
		x = /* @__PURE__ */ r.append("path").attr("d", S).attr("id", t.id).attr("class", " " + g$1 + (t.classes ? " " + t.classes : "") + (O ?? "")).attr("style", R), W = R.match(/stroke:([^;]+)/)?.[1], H = t.animate === !0 || !!t.animation || b.includes("animation");
		let A = /* @__PURE__ */ x.node(), J = typeof A.getTotalLength == "function" ? A.getTotalLength() : 0, Z = d[t.arrowTypeStart] || 0, V = d[t.arrowTypeEnd] || 0;
		if (t.look === "neo" && !H) {
			let T = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? Ot(J, Z, V) : `0 ${Z} ${J - Z - V} ${V}`}; stroke-dashoffset: 0;`;
			x.attr("style", T + x.attr("style"));
		}
	}
	x.attr("data-edge", !0), x.attr("data-et", "edge"), x.attr("data-id", t.id), x.attr("data-points", L), t.showPoints && M.forEach((b) => {
		r.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", b.x).attr("cy", b.y);
	});
	let E = "";
	(mr().flowchart.arrowMarkerAbsolute || mr().state.arrowMarkerAbsolute) && (E = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, E = /* @__PURE__ */ E.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), pt.info("arrowTypeStart", t.arrowTypeStart), pt.info("arrowTypeEnd", t.arrowTypeEnd), xt(x, t, E, e, s$1, W);
	let Lt = /* @__PURE__ */ Math.floor(l.length / 2), Mt = l[Lt];
	Ut.isLabelCoordinateInPath(Mt, /* @__PURE__ */ x.attr("d")) || (p = !0);
	let P = {};
	return p && (P.updatedPath = l), P.originalPath = t.points, P;
}, "insertEdge");
function Tt(r, t) {
	if (r.length < 2) return "";
	let a = "", s$1 = r.length, i = 1e-5;
	for (let n$1 = 0; n$1 < s$1; n$1++) {
		let e = r[n$1], o = r[n$1 - 1], c = r[n$1 + 1];
		if (n$1 === 0) a += `M${e.x},${e.y}`;
		else if (n$1 === s$1 - 1) a += `L${e.x},${e.y}`;
		else {
			let l = e.x - o.x, p = e.y - o.y, f = c.x - e.x, d$1 = c.y - e.y, y = /* @__PURE__ */ Math.hypot(l, p), L = /* @__PURE__ */ Math.hypot(f, d$1);
			if (y < i || L < i) {
				a += `L${e.x},${e.y}`;
				continue;
			}
			let M = l / y, k = p / y, Y = f / L, C = d$1 / L, Q = M * Y + k * C, g$1 = /* @__PURE__ */ Math.max(-1, /* @__PURE__ */ Math.min(1, Q)), x = /* @__PURE__ */ Math.acos(g$1);
			if (x < i || Math.abs(Math.PI - x) < i) {
				a += `L${e.x},${e.y}`;
				continue;
			}
			let S = /* @__PURE__ */ Math.min(t / Math.sin(x / 2), y / 2, L / 2), w$1 = e.x - M * S, W = e.y - k * S, H = e.x + Y * S, E = e.y + C * S;
			a += `L${w$1},${W}`, a += `Q${e.x},${e.y} ${H},${E}`;
		}
	}
	return a;
}
m$1(Tt, "generateRoundedPath");
function gt(r, t) {
	if (!r || !t) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	let a = t.x - r.x, s$1 = t.y - r.y;
	return {
		angle: /* @__PURE__ */ Math.atan2(s$1, a),
		deltaX: a,
		deltaY: s$1
	};
}
m$1(gt, "calculateDeltaAndAngle");
function vt(r, t) {
	let a = /* @__PURE__ */ r.map((i) => ({ ...i }));
	if (r.length >= 2 && s[t.arrowTypeStart]) {
		let i = s[t.arrowTypeStart], n$1 = r[0], e = r[1], { angle: o } = gt(n$1, e), c = i * Math.cos(o), l = i * Math.sin(o);
		a[0].x = n$1.x + c, a[0].y = n$1.y + l;
	}
	let s$1 = r.length;
	if (s$1 >= 2 && s[t.arrowTypeEnd]) {
		let i = s[t.arrowTypeEnd], n$1 = r[s$1 - 1], e = r[s$1 - 2], { angle: o } = gt(e, n$1), c = i * Math.cos(o), l = i * Math.sin(o);
		a[s$1 - 1].x = n$1.x - c, a[s$1 - 1].y = n$1.y - l;
	}
	return a;
}
m$1(vt, "applyMarkerOffsetsToPoints");
var Xt = /* @__PURE__ */ m$1((r, t, a, s$1) => {
	t.forEach((i) => {
		Vt[i](r, a, s$1);
	});
}, "insertMarkers"), Vt = {
	extension: /* @__PURE__ */ m$1((r, t, a) => {
		pt.trace("Making markers for ", a), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
	}, "extension"),
	composition: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
	}, "lollipop"),
	point: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("marker").attr("id", a + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("marker").attr("id", a + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("marker").attr("id", a + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb"),
	only_one: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), r.append("defs").append("marker").attr("id", a + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
	}, "only_one"),
	zero_or_one: /* @__PURE__ */ m$1((r, t, a) => {
		let s$1 = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		s$1.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), s$1.append("path").attr("d", "M9,0 L9,18");
		let i = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		i.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M21,0 L21,18");
	}, "zero_or_one"),
	one_or_more: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), r.append("defs").append("marker").attr("id", a + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
	}, "one_or_more"),
	zero_or_more: /* @__PURE__ */ m$1((r, t, a) => {
		let s$1 = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		s$1.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), s$1.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
		let i = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		i.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
	}, "zero_or_more"),
	requirement_arrow: /* @__PURE__ */ m$1((r, t, a) => {
		r.append("defs").append("marker").attr("id", a + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
	}, "requirement_arrow"),
	requirement_contains: /* @__PURE__ */ m$1((r, t, a) => {
		let s$1 = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
		s$1.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), s$1.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), s$1.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
	}, "requirement_contains")
}, kr = Xt;
export { pr as a, kr as i, dr as n, fr as r, cr as t };
