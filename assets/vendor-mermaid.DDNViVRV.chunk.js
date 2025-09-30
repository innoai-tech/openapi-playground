import { $t as e, J as n } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { H as t, M as r, Z as a, b as i } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { c as d, d as o, f as s, i as l, l as g, n as c, o as f, r as h } from "./vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js";
import { t as u } from "./vendor-mermaid.CSvrNZuY.chunk.js";
import { a as p, i as w, n as m, r as v, t as y } from "./vendor-min-mermaid~chunk-TVVDRG3C.EXVGZHXK.chunk.js";
import { t as X } from "./vendor-mermaid.D7AYFHeZ.chunk.js";
function E(e) {
	var n = {
		options: {
			directed: e.isDirected(),
			multigraph: e.isMultigraph(),
			compound: e.isCompound()
		},
		nodes: N(e),
		edges: b(e)
	};
	return t(e.graph()) || (n.value = r(e.graph())), n;
}
function N(e) {
	return i(e.nodes(), function(n) {
		var r = e.node(n), a = e.parent(n), i = { v: n };
		return t(r) || (i.value = r), t(a) || (i.parent = a), i;
	});
}
function b(e) {
	return i(e.edges(), function(n) {
		var r = e.edge(n), a = {
			v: n.v,
			w: n.w
		};
		return t(n.name) || (a.name = n.name), t(r) || (a.value = r), a;
	});
}
a(E, "write"), a(N, "writeNodes"), a(b, "writeEdges");
var C = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), I = a(() => {
	S.clear(), x.clear(), C.clear();
}, "clear"), k = a((n, t) => {
	let r = S.get(t) || [];
	return e.trace("In isDescendant", t, " ", n, " = ", r.includes(n)), r.includes(n);
}, "isDescendant"), D = a((n, t) => {
	let r = S.get(t) || [];
	return e.info("Descendants of ", t, " is ", r), e.info("Edge is ", n), n.v !== t && n.w !== t && (r ? r.includes(n.v) || k(n.v, t) || k(n.w, t) || r.includes(n.w) : (e.debug("Tilt, ", t, ",not in descendants"), !1));
}, "edgeInCluster"), O = a((n, t, r, a) => {
	e.warn("Copying children of ", n, "root", a, "data", t.node(n), a);
	let i = t.children(n) || [];
	n !== a && i.push(n), e.warn("Copying (nodes) clusterId", n, "nodes", i), i.forEach((i) => {
		if (t.children(i).length > 0) O(i, t, r, a);
		else {
			let d = t.node(i);
			e.info("cp ", i, " to ", a, " with parent ", n), r.setNode(i, d), a !== t.parent(i) && (e.warn("Setting parent", i, t.parent(i)), r.setParent(i, t.parent(i))), n !== a && i !== n ? (e.debug("Setting parent", i, n), r.setParent(i, n)) : (e.info("In copy ", n, "root", a, "data", t.node(n), a), e.debug("Not Setting parent for node=", i, "cluster!==rootId", n !== a, "node!==clusterId", i !== n));
			let o = t.edges(i);
			e.debug("Copying Edges", o), o.forEach((i) => {
				e.info("Edge", i);
				let d = t.edge(i.v, i.w, i.name);
				e.info("Edge data", d, a);
				try {
					D(i, a) ? (e.info("Copying as ", i.v, i.w, d, i.name), r.setEdge(i.v, i.w, d, i.name), e.info("newGraph edges ", r.edges(), r.edge(r.edges()[0]))) : e.info("Skipping copy of edge ", i.v, "-->", i.w, " rootId: ", a, " clusterId:", n);
				} catch (n) {
					e.error(n);
				}
			});
		}
		e.debug("Removing node", i), t.removeNode(i);
	});
}, "copy"), G = a((e, n) => {
	let t = n.children(e), r = [...t];
	for (let a of t) x.set(a, e), r = [...r, ...G(a, n)];
	return r;
}, "extractDescendants"), P = a((e, n, t) => {
	let r = e.edges().filter((e) => e.v === n || e.w === n), a = e.edges().filter((e) => e.v === t || e.w === t), i = r.map((e) => ({
		v: e.v === n ? t : e.v,
		w: e.w === n ? n : e.w
	})), d = a.map((e) => ({
		v: e.v,
		w: e.w
	}));
	return i.filter((e) => d.some((n) => e.v === n.v && e.w === n.w));
}, "findCommonEdges"), A = a((n, t, r) => {
	let a, i = t.children(n);
	if (e.trace("Searching children of id ", n, i), i.length < 1) return n;
	for (let e of i) {
		let n = A(e, t, r), i = P(t, r, n);
		if (n) if (!(i.length > 0)) return n;
		else a = n;
	}
	return a;
}, "findNonClusterChild"), B = a((e) => C.has(e) && C.get(e).externalConnections && C.has(e) ? C.get(e).id : e, "getAnchorId"), J = a((n, t) => {
	if (!n || t > 10) return void e.debug("Opting out, no graph ");
	for (let t of (e.debug("Opting in, graph "), n.nodes().forEach(function(t) {
		n.children(t).length > 0 && (e.warn("Cluster identified", t, " Replacement id in edges: ", A(t, n, t)), S.set(t, G(t, n)), C.set(t, {
			id: A(t, n, t),
			clusterData: n.node(t)
		}));
	}), n.nodes().forEach(function(t) {
		let r = n.children(t), a = n.edges();
		r.length > 0 ? (e.debug("Cluster identified", t, S), a.forEach((n) => {
			k(n.v, t) ^ k(n.w, t) && (e.warn("Edge: ", n, " leaves cluster ", t), e.warn("Descendants of XXX ", t, ": ", S.get(t)), C.get(t).externalConnections = !0);
		})) : e.debug("Not a cluster ", t, S);
	}), C.keys())) {
		let e = C.get(t).id, r = n.parent(e);
		r !== t && C.has(r) && !C.get(r).externalConnections && (C.get(t).id = r);
	}
	n.edges().forEach(function(t) {
		let r = n.edge(t);
		e.warn("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(t)), e.warn("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(n.edge(t)));
		let a = t.v, i = t.w;
		if (e.warn("Fix XXX", C, "ids:", t.v, t.w, "Translating: ", C.get(t.v), " --- ", C.get(t.w)), C.get(t.v) || C.get(t.w)) {
			if (e.warn("Fixing and trying - removing XXX", t.v, t.w, t.name), a = B(t.v), i = B(t.w), n.removeEdge(t.v, t.w, t.name), a !== t.v) {
				let e = n.parent(a);
				C.get(e).externalConnections = !0, r.fromCluster = t.v;
			}
			if (i !== t.w) {
				let e = n.parent(i);
				C.get(e).externalConnections = !0, r.toCluster = t.w;
			}
			e.warn("Fix Replacing with XXX", a, i, t.name), n.setEdge(a, i, r, t.name);
		}
	}), e.warn("Adjusted Graph", E(n)), R(n, 0), e.trace(C);
}, "adjustClustersAndEdges"), R = a((n, t) => {
	if (e.warn("extractor - ", t, E(n), n.children("D")), t > 10) return void e.error("Bailing out");
	let r = n.nodes(), a = !1;
	for (let e of r) {
		let t = n.children(e);
		a = a || t.length > 0;
	}
	if (!a) return void e.debug("Done, no node has children", n.nodes());
	for (let a of (e.debug("Nodes = ", r, t), r)) if (e.debug("Extracting node", a, C, C.has(a) && !C.get(a).externalConnections, !n.parent(a), n.node(a), n.children("D"), " Depth ", t), C.has(a)) if (!C.get(a).externalConnections && n.children(a) && n.children(a).length > 0) {
		e.warn("Cluster without external connections, without a parent and with children", a, t);
		let r = "TB" === n.graph().rankdir ? "LR" : "TB";
		C.get(a)?.clusterData?.dir && (r = C.get(a).clusterData.dir, e.warn("Fixing dir", C.get(a).clusterData.dir, r));
		let i = new u({
			multigraph: !0,
			compound: !0
		}).setGraph({
			rankdir: r,
			nodesep: 50,
			ranksep: 50,
			marginx: 8,
			marginy: 8
		}).setDefaultEdgeLabel(function() {
			return {};
		});
		e.warn("Old graph before copy", E(n)), O(a, n, i, a), n.setNode(a, {
			clusterNode: !0,
			id: a,
			clusterData: C.get(a).clusterData,
			label: C.get(a).label,
			graph: i
		}), e.warn("New graph after copy node: (", a, ")", E(i)), e.debug("Old graph after copy", E(n));
	} else e.warn("Cluster ** ", a, " **not meeting the criteria !externalConnections:", !C.get(a).externalConnections, " no parent: ", !n.parent(a), " children ", n.children(a) && n.children(a).length > 0, n.children("D"), t), e.debug(C);
	else e.debug("Not a cluster", a, t);
	for (let a of (r = n.nodes(), e.warn("New list of nodes", r), r)) {
		let r = n.node(a);
		e.warn(" Now next level", a, r), r?.clusterNode && R(r.graph, t + 1);
	}
}, "extractor"), T = a((e, n) => {
	if (0 === n.length) return [];
	let t = Object.assign([], n);
	return n.forEach((n) => {
		let r = e.children(n), a = T(e, r);
		t = [...t, ...a];
	}), t;
}, "sorter"), j = a((e) => T(e, e.children()), "sortNodesByHierarchy"), L = a(async (n, t, r, i, l, g) => {
	e.warn("Graph in recursive render:XAX", E(t), l);
	let u = t.graph().rankdir;
	e.trace("Dir in recursive render - dir:", u);
	let w = n.insert("g").attr("class", "root");
	t.nodes() ? e.info("Recursive render XXX", t.nodes()) : e.info("No nodes found for", t), t.edges().length > 0 && e.info("Recursive edges", t.edge(t.edges()[0]));
	let y = w.insert("g").attr("class", "clusters"), N = w.insert("g").attr("class", "edgePaths"), b = w.insert("g").attr("class", "edgeLabels"), S = w.insert("g").attr("class", "nodes");
	await Promise.all(t.nodes().map(async function(n) {
		let a = t.node(n);
		if (void 0 !== l) {
			let r = JSON.parse(JSON.stringify(l.clusterData));
			e.trace(`Setting data for parent cluster XXX
 Node.id = `, n, `
 data=`, r.height, `
Parent cluster`, l.height), t.setNode(l.id, r), t.parent(n) || (e.trace("Setting parent", n, l.id), t.setParent(n, l.id, r));
		}
		if (e.info("(Insert) Node XXX" + n + ": " + JSON.stringify(t.node(n))), a?.clusterNode) {
			e.info("Cluster identified XBX", n, a.width, t.node(n));
			let { ranksep: d, nodesep: o } = t.graph();
			a.graph.setGraph({
				...a.graph.graph(),
				ranksep: d + 25,
				nodesep: o
			});
			let s = await L(S, a.graph, r, i, t.node(n), g), l = s.elem;
			c(a, l), a.diff = s.diff || 0, e.info("New compound node after recursive render XAX", n, "width", a.width, "height", a.height), f(l, a);
		} else t.children(n).length > 0 ? (e.trace("Cluster - the non recursive path XBX", n, a.id, a, a.width, "Graph:", t), e.trace(A(a.id, t)), C.set(a.id, {
			id: A(a.id, t),
			node: a
		})) : (e.trace("Node - the non recursive path XAX", n, S, t.node(n), u), await d(S, t.node(n), {
			config: g,
			dir: u
		}));
	})), await a(async () => {
		let n = t.edges().map(async function(n) {
			let r = t.edge(n.v, n.w, n.name);
			e.info("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), e.info("Edge " + n.v + " -> " + n.w + ": ", n, " ", JSON.stringify(t.edge(n))), e.info("Fix", C, "ids:", n.v, n.w, "Translating: ", C.get(n.v), C.get(n.w)), await p(b, r);
		});
		await Promise.all(n);
	}, "processEdges")(), e.info("Graph before layout:", JSON.stringify(E(t))), e.info("############################################# XXX"), e.info("###                Layout                 ### XXX"), e.info("############################################# XXX"), X(t), e.info("Graph after layout:", JSON.stringify(E(t)));
	let x = 0, { subGraphTitleTotalMargin: I } = s(g);
	return await Promise.all(j(t).map(async function(n) {
		let r = t.node(n);
		if (e.info("Position XBX => " + n + ": (" + r.x, "," + r.y, ") width: ", r.width, " height: ", r.height), r?.clusterNode) r.y += I, e.info("A tainted cluster node XBX1", n, r.id, r.width, r.height, r.x, r.y, t.parent(n)), C.get(r.id).node = r, h(r);
		else if (t.children(n).length > 0) {
			e.info("A pure cluster node XBX1", n, r.id, r.x, r.y, r.width, r.height, t.parent(n)), r.height += I, t.node(r.parentId);
			let a = r?.padding / 2 || 0, i = r?.labelBBox?.height || 0;
			e.debug("OffsetY", i - a || 0, "labelHeight", i, "halfPadding", a), await o(y, r), C.get(r.id).node = r;
		} else {
			let n = t.node(r.parentId);
			r.y += I / 2, e.info("A regular node XBX1 - using the padding", r.id, "parent", r.parentId, r.width, r.height, r.x, r.y, "offsetY", r.offsetY, "parent", n, n?.offsetY, r), h(r);
		}
	})), t.edges().forEach(function(n) {
		let a = t.edge(n);
		e.info("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(a), a), a.points.forEach((e) => e.y += I / 2);
		let d = v(N, a, C, r, t.node(n.v), t.node(n.w), i);
		m(a, d);
	}), t.nodes().forEach(function(n) {
		let r = t.node(n);
		e.info(n, r.type, r.diff), r.isGroup && (x = r.diff);
	}), e.warn("Returning from recursive render XAX", w, x), {
		elem: w,
		diff: x
	};
}, "recursiveRender"), M = a(async (t, r) => {
	let a = new u({
		multigraph: !0,
		compound: !0
	}).setGraph({
		rankdir: t.direction,
		nodesep: t.config?.nodeSpacing || t.config?.flowchart?.nodeSpacing || t.nodeSpacing,
		ranksep: t.config?.rankSpacing || t.config?.flowchart?.rankSpacing || t.rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	}), i = r.select("g");
	w(i, t.markers, t.type, t.diagramId), l(), y(), g(), I(), t.nodes.forEach((e) => {
		a.setNode(e.id, { ...e }), e.parentId && a.setParent(e.id, e.parentId);
	}), e.debug("Edges:", t.edges), t.edges.forEach((e) => {
		if (e.start === e.end) {
			let n = e.start, t = n + "---" + n + "---1", r = n + "---" + n + "---2", i = a.node(n);
			a.setNode(t, {
				domId: t,
				id: t,
				parentId: i.parentId,
				labelStyle: "",
				label: "",
				padding: 0,
				shape: "labelRect",
				style: "",
				width: 10,
				height: 10
			}), a.setParent(t, i.parentId), a.setNode(r, {
				domId: r,
				id: r,
				parentId: i.parentId,
				labelStyle: "",
				padding: 0,
				shape: "labelRect",
				label: "",
				style: "",
				width: 10,
				height: 10
			}), a.setParent(r, i.parentId);
			let d = structuredClone(e), o = structuredClone(e), s = structuredClone(e);
			d.label = "", d.arrowTypeEnd = "none", d.id = n + "-cyclic-special-1", o.arrowTypeStart = "none", o.arrowTypeEnd = "none", o.id = n + "-cyclic-special-mid", s.label = "", i.isGroup && (d.fromCluster = n, s.toCluster = n), s.id = n + "-cyclic-special-2", s.arrowTypeStart = "none", a.setEdge(n, t, d, n + "-cyclic-special-0"), a.setEdge(t, r, o, n + "-cyclic-special-1"), a.setEdge(r, n, s, n + "-cyc<lic-special-2");
		} else a.setEdge(e.start, e.end, { ...e }, e.id);
	}), e.warn("Graph at first:", JSON.stringify(E(a))), J(a), e.warn("Graph after XAX:", JSON.stringify(E(a)));
	let d = n();
	await L(i, a, t.type, t.diagramId, void 0, d);
}, "render");
export { M as render };
