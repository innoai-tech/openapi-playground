import { f as fn } from './vendor-min-mermaid~chunk-FASC7IG4.DYQ7jx_C.chunk.js';
import { m } from './vendor-min-mermaid~chunk-ZN7TASNU.Dd_oVq5J.chunk.js';
import { t as tr, G as Gt, V as Vt, J as Jt, F as Ft } from './vendor-min-mermaid~chunk-QTJCGBHB.C-HPAC45.chunk.js';
import { o as og, x as xo, M, r as rg, s as sg, a as ag, y as yo } from './vendor-min-mermaid~chunk-USR3SDWQ.vyM1OSdF.chunk.js';
import { n } from './vendor-min-mermaid~chunk-LM6QDVU5.Cd9M_jtg.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { t as tt, H as Hl } from './vendor-min-mermaid~chunk-ZKYS2E5M.Dvid1YGB.chunk.js';
import { s as sn, _ as _f, J as Jr } from './vendor-min-mermaid~chunk-5ZJXQJOJ.CxiwLIA0.chunk.js';
function h(e) {
    var t = {
        options: {
            directed: /*#__PURE__*/ e.isDirected(),
            multigraph: /*#__PURE__*/ e.isMultigraph(),
            compound: /*#__PURE__*/ e.isCompound()
        },
        nodes: /*#__PURE__*/ re(e),
        edges: /*#__PURE__*/ se(e)
    };
    return sn(/*#__PURE__*/ e.graph()) || (t.value = /*#__PURE__*/ _f(/*#__PURE__*/ e.graph())), t;
}
m$1(h, "write");
function re(e) {
    return Jr(/*#__PURE__*/ e.nodes(), function(t) {
        var n = /*#__PURE__*/ e.node(t), c = /*#__PURE__*/ e.parent(t), s = {
            v: t
        };
        return sn(n) || (s.value = n), sn(c) || (s.parent = c), s;
    });
}
m$1(re, "writeNodes");
function se(e) {
    return Jr(/*#__PURE__*/ e.edges(), function(t) {
        var n = /*#__PURE__*/ e.edge(t), c = {
            v: t.v,
            w: t.w
        };
        return sn(t.name) || (c.name = t.name), sn(n) || (c.value = n), c;
    });
}
m$1(se, "writeEdges");
var a = new Map, v = new Map, W = new Map, Z = /*#__PURE__*/ m$1(()=>{
    v.clear(), W.clear(), a.clear();
}, "clear"), J = /*#__PURE__*/ m$1((e, t)=>{
    let n = v.get(t) || [];
    return tt.trace("In isDescendant", t, " ", e, " = ", /*#__PURE__*/ n.includes(e)), n.includes(e);
}, "isDescendant"), ce = /*#__PURE__*/ m$1((e, t)=>{
    let n = v.get(t) || [];
    return tt.info("Descendants of ", t, " is ", n), tt.info("Edge is ", e), e.v === t || e.w === t ? false : n ? n.includes(e.v) || J(e.v, t) || J(e.w, t) || n.includes(e.w) : (tt.debug("Tilt, ", t, ",not in descendants"), false);
}, "edgeInCluster"), $ = m$1((e, t, n, c)=>{
    tt.warn("Copying children of ", e, "root", c, "data", /*#__PURE__*/ t.node(e), c);
    let s = t.children(e) || [];
    e !== c && s.push(e), tt.warn("Copying (nodes) clusterId", e, "nodes", s), s.forEach((o)=>{
        if (t.children(o).length > 0) $(o, t, n, c);
        else {
            let l = /*#__PURE__*/ t.node(o);
            tt.info("cp ", o, " to ", c, " with parent ", e), n.setNode(o, l), c !== t.parent(o) && (tt.warn("Setting parent", o, /*#__PURE__*/ t.parent(o)), n.setParent(o, /*#__PURE__*/ t.parent(o))), e !== c && o !== e ? (tt.debug("Setting parent", o, e), n.setParent(o, e)) : (tt.info("In copy ", e, "root", c, "data", /*#__PURE__*/ t.node(e), c), tt.debug("Not Setting parent for node=", o, "cluster!==rootId", e !== c, "node!==clusterId", o !== e));
            let u = /*#__PURE__*/ t.edges(o);
            tt.debug("Copying Edges", u), u.forEach((d)=>{
                tt.info("Edge", d);
                let m = /*#__PURE__*/ t.edge(d.v, d.w, d.name);
                tt.info("Edge data", m, c);
                try {
                    ce(d, c) ? (tt.info("Copying as ", d.v, d.w, m, d.name), n.setEdge(d.v, d.w, m, d.name), tt.info("newGraph edges ", /*#__PURE__*/ n.edges(), /*#__PURE__*/ n.edge(n.edges()[0]))) : tt.info("Skipping copy of edge ", d.v, "-->", d.w, " rootId: ", c, " clusterId:", e);
                } catch (p) {
                    tt.error(p);
                }
            });
        }
        tt.debug("Removing node", o), t.removeNode(o);
    });
}, "copy"), L = m$1((e, t)=>{
    let n = /*#__PURE__*/ t.children(e), c = [
        ...n
    ];
    for (let s of n)W.set(s, e), c = [
        ...c,
        .../*#__PURE__*/ L(s, t)
    ];
    return c;
}, "extractDescendants");
var ae = /*#__PURE__*/ m$1((e, t, n)=>{
    let c = /*#__PURE__*/ e.edges().filter((d)=>d.v === t || d.w === t), s = /*#__PURE__*/ e.edges().filter((d)=>d.v === n || d.w === n), o = /*#__PURE__*/ c.map((d)=>({
            v: d.v === t ? n : d.v,
            w: d.w === t ? t : d.w
        })), l = /*#__PURE__*/ s.map((d)=>({
            v: d.v,
            w: d.w
        }));
    return o.filter((d)=>l.some((m)=>d.v === m.v && d.w === m.w));
}, "findCommonEdges"), x = m$1((e, t, n)=>{
    let c = /*#__PURE__*/ t.children(e);
    if (tt.trace("Searching children of id ", e, c), c.length < 1) return e;
    let s;
    for (let o of c){
        let l = /*#__PURE__*/ x(o, t, n), u = /*#__PURE__*/ ae(t, n, l);
        if (l) if (u.length > 0) s = l;
        else return l;
    }
    return s;
}, "findNonClusterChild"), Q = /*#__PURE__*/ m$1((e)=>!a.has(e) || !a.get(e).externalConnections ? e : a.has(e) ? a.get(e).id : e, "getAnchorId"), I = /*#__PURE__*/ m$1((e, t)=>{
    if (!e || t > 10) {
        tt.debug("Opting out, no graph ");
        return;
    } else tt.debug("Opting in, graph ");
    e.nodes().forEach(function(n) {
        e.children(n).length > 0 && (tt.warn("Cluster identified", n, " Replacement id in edges: ", /*#__PURE__*/ x(n, e, n)), v.set(n, /*#__PURE__*/ L(n, e)), a.set(n, {
            id: /*#__PURE__*/ x(n, e, n),
            clusterData: /*#__PURE__*/ e.node(n)
        }));
    }), e.nodes().forEach(function(n) {
        let c = /*#__PURE__*/ e.children(n), s = /*#__PURE__*/ e.edges();
        c.length > 0 ? (tt.debug("Cluster identified", n, v), s.forEach((o)=>{
            let l = /*#__PURE__*/ J(o.v, n), u = /*#__PURE__*/ J(o.w, n);
            l ^ u && (tt.warn("Edge: ", o, " leaves cluster ", n), tt.warn("Descendants of XXX ", n, ": ", /*#__PURE__*/ v.get(n)), a.get(n).externalConnections = true);
        })) : tt.debug("Not a cluster ", n, v);
    });
    for (let n of a.keys()){
        let c = a.get(n).id, s = /*#__PURE__*/ e.parent(c);
        s !== n && a.has(s) && !a.get(s).externalConnections && (a.get(n).id = s);
    }
    e.edges().forEach(function(n) {
        let c = /*#__PURE__*/ e.edge(n);
        tt.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), tt.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(/*#__PURE__*/ e.edge(n)));
        let s = n.v, o = n.w;
        if (tt.warn("Fix XXX", a, "ids:", n.v, n.w, "Translating: ", /*#__PURE__*/ a.get(n.v), " --- ", /*#__PURE__*/ a.get(n.w)), a.get(n.v) || a.get(n.w)) {
            if (tt.warn("Fixing and trying - removing XXX", n.v, n.w, n.name), s = /*#__PURE__*/ Q(n.v), o = /*#__PURE__*/ Q(n.w), e.removeEdge(n.v, n.w, n.name), s !== n.v) {
                let l = /*#__PURE__*/ e.parent(s);
                a.get(l).externalConnections = true, c.fromCluster = n.v;
            }
            if (o !== n.w) {
                let l = /*#__PURE__*/ e.parent(o);
                a.get(l).externalConnections = true, c.toCluster = n.w;
            }
            tt.warn("Fix Replacing with XXX", s, o, n.name), e.setEdge(s, o, c, n.name);
        }
    }), tt.warn("Adjusted Graph", /*#__PURE__*/ h(e)), ee(e, 0), tt.trace(a);
}, "adjustClustersAndEdges"), ee = m$1((e, t)=>{
    if (tt.warn("extractor - ", t, /*#__PURE__*/ h(e), /*#__PURE__*/ e.children("D")), t > 10) {
        tt.error("Bailing out");
        return;
    }
    let n = /*#__PURE__*/ e.nodes(), c = false;
    for (let s of n){
        let o = /*#__PURE__*/ e.children(s);
        c = c || o.length > 0;
    }
    if (!c) {
        tt.debug("Done, no node has children", /*#__PURE__*/ e.nodes());
        return;
    }
    tt.debug("Nodes = ", n, t);
    for (let s of n)if (tt.debug("Extracting node", s, a, a.has(s) && !a.get(s).externalConnections, !e.parent(s), /*#__PURE__*/ e.node(s), /*#__PURE__*/ e.children("D"), " Depth ", t), !a.has(s)) tt.debug("Not a cluster", s, t);
    else if (!a.get(s).externalConnections && e.children(s) && e.children(s).length > 0) {
        tt.warn("Cluster without external connections, without a parent and with children", s, t);
        let l = e.graph().rankdir === "TB" ? "LR" : "TB";
        a.get(s)?.clusterData?.dir && (l = a.get(s).clusterData.dir, tt.warn("Fixing dir", a.get(s).clusterData.dir, l));
        let u = /*#__PURE__*/ new m({
            multigraph: true,
            compound: true
        }).setGraph({
            rankdir: l,
            nodesep: 50,
            ranksep: 50,
            marginx: 8,
            marginy: 8
        }).setDefaultEdgeLabel(function() {
            return {};
        });
        tt.warn("Old graph before copy", /*#__PURE__*/ h(e)), $(s, e, u, s), e.setNode(s, {
            clusterNode: true,
            id: s,
            clusterData: a.get(s).clusterData,
            label: a.get(s).label,
            graph: u
        }), tt.warn("New graph after copy node: (", s, ")", /*#__PURE__*/ h(u)), tt.debug("Old graph after copy", /*#__PURE__*/ h(e));
    } else tt.warn("Cluster ** ", s, " **not meeting the criteria !externalConnections:", !a.get(s).externalConnections, " no parent: ", !e.parent(s), " children ", e.children(s) && e.children(s).length > 0, /*#__PURE__*/ e.children("D"), t), tt.debug(a);
    n = /*#__PURE__*/ e.nodes(), tt.warn("New list of nodes", n);
    for (let s of n){
        let o = /*#__PURE__*/ e.node(s);
        tt.warn(" Now next level", s, o), o?.clusterNode && ee(o.graph, t + 1);
    }
}, "extractor"), ne = m$1((e, t)=>{
    if (t.length === 0) return [];
    let n = /*#__PURE__*/ Object.assign([], t);
    return t.forEach((c)=>{
        let s = /*#__PURE__*/ e.children(c), o = /*#__PURE__*/ ne(e, s);
        n = [
            ...n,
            ...o
        ];
    }), n;
}, "sorter"), te = /*#__PURE__*/ m$1((e)=>ne(e, /*#__PURE__*/ e.children()), "sortNodesByHierarchy");
var ie = m$1(async (e, t, n$1, c, s, o)=>{
    tt.warn("Graph in recursive render:XAX", /*#__PURE__*/ h(t), s);
    let l = t.graph().rankdir;
    tt.trace("Dir in recursive render - dir:", l);
    let u = /*#__PURE__*/ e.insert("g").attr("class", "root");
    t.nodes() ? tt.info("Recursive render XXX", /*#__PURE__*/ t.nodes()) : tt.info("No nodes found for", t), t.edges().length > 0 && tt.info("Recursive edges", /*#__PURE__*/ t.edge(t.edges()[0]));
    let d = /*#__PURE__*/ u.insert("g").attr("class", "clusters"), m = /*#__PURE__*/ u.insert("g").attr("class", "edgePaths"), p = /*#__PURE__*/ u.insert("g").attr("class", "edgeLabels"), b = /*#__PURE__*/ u.insert("g").attr("class", "nodes");
    await Promise.all(/*#__PURE__*/ t.nodes().map(async function(f) {
        let r = /*#__PURE__*/ t.node(f);
        if (s !== void 0) {
            let w = /*#__PURE__*/ JSON.parse(/*#__PURE__*/ JSON.stringify(s.clusterData));
            tt.trace(`Setting data for parent cluster XXX
 Node.id = `, f, `
 data=`, w.height, `
Parent cluster`, s.height), t.setNode(s.id, w), t.parent(f) || (tt.trace("Setting parent", f, s.id), t.setParent(f, s.id, w));
        }
        if (tt.info("(Insert) Node XXX" + f + ": " + JSON.stringify(/*#__PURE__*/ t.node(f))), r?.clusterNode) {
            tt.info("Cluster identified XBX", f, r.width, /*#__PURE__*/ t.node(f));
            let { ranksep: w, nodesep: E } = t.graph();
            r.graph.setGraph({
                ...r.graph.graph(),
                ranksep: w + 25,
                nodesep: E
            });
            let N = await ie(b, r.graph, n$1, c, /*#__PURE__*/ t.node(f), o), D = N.elem;
            M(r, D), r.diff = N.diff || 0, tt.info("New compound node after recursive render XAX", f, "width", r.width, "height", r.height), rg(D, r);
        } else t.children(f).length > 0 ? (tt.trace("Cluster - the non recursive path XBX", f, r.id, r, r.width, "Graph:", t), tt.trace(/*#__PURE__*/ x(r.id, t)), a.set(r.id, {
            id: /*#__PURE__*/ x(r.id, t),
            node: r
        })) : (tt.trace("Node - the non recursive path XAX", f, b, /*#__PURE__*/ t.node(f), l), await sg(b, /*#__PURE__*/ t.node(f), {
            config: o,
            dir: l
        }));
    })), await m$1(async ()=>{
        let f = /*#__PURE__*/ t.edges().map(async function(r) {
            let w = /*#__PURE__*/ t.edge(r.v, r.w, r.name);
            tt.info("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(r)), tt.info("Edge " + r.v + " -> " + r.w + ": ", r, " ", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ t.edge(r))), tt.info("Fix", a, "ids:", r.v, r.w, "Translating: ", /*#__PURE__*/ a.get(r.v), /*#__PURE__*/ a.get(r.w)), await Vt(p, w);
        });
        await Promise.all(f);
    }, "processEdges")(), tt.info("Graph before layout:", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ h(t))), tt.info("############################################# XXX"), tt.info("###                Layout                 ### XXX"), tt.info("############################################# XXX"), fn(t), tt.info("Graph after layout:", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ h(t)));
    let P = 0, { subGraphTitleTotalMargin: S } = n(o);
    return await Promise.all(/*#__PURE__*/ te(t).map(async function(f) {
        let r = /*#__PURE__*/ t.node(f);
        if (tt.info("Position XBX => " + f + ": (" + r.x, "," + r.y, ") width: ", r.width, " height: ", r.height), r?.clusterNode) r.y += S, tt.info("A tainted cluster node XBX1", f, r.id, r.width, r.height, r.x, r.y, /*#__PURE__*/ t.parent(f)), a.get(r.id).node = r, ag(r);
        else if (t.children(f).length > 0) {
            tt.info("A pure cluster node XBX1", f, r.id, r.x, r.y, r.width, r.height, /*#__PURE__*/ t.parent(f)), r.height += S, t.node(r.parentId);
            let w = r?.padding / 2 || 0, E = r?.labelBBox?.height || 0, N = E - w || 0;
            tt.debug("OffsetY", N, "labelHeight", E, "halfPadding", w), await yo(d, r), a.get(r.id).node = r;
        } else {
            let w = /*#__PURE__*/ t.node(r.parentId);
            r.y += S / 2, tt.info("A regular node XBX1 - using the padding", r.id, "parent", r.parentId, r.width, r.height, r.x, r.y, "offsetY", r.offsetY, "parent", w, w?.offsetY, r), ag(r);
        }
    })), t.edges().forEach(function(f) {
        let r = /*#__PURE__*/ t.edge(f);
        tt.info("Edge " + f.v + " -> " + f.w + ": " + JSON.stringify(r), r), r.points.forEach((D)=>D.y += S / 2);
        let w = /*#__PURE__*/ t.node(f.v);
        var E = /*#__PURE__*/ t.node(f.w);
        let N = /*#__PURE__*/ Jt(m, r, a, n$1, w, E, c);
        Ft(r, N);
    }), t.nodes().forEach(function(f) {
        let r = /*#__PURE__*/ t.node(f);
        tt.info(f, r.type, r.diff), r.isGroup && (P = r.diff);
    }), tt.warn("Returning from recursive render XAX", u, P), {
        elem: u,
        diff: P
    };
}, "recursiveRender"), Se = /*#__PURE__*/ m$1(async (e, t)=>{
    let n = /*#__PURE__*/ new m({
        multigraph: true,
        compound: true
    }).setGraph({
        rankdir: e.direction,
        nodesep: e.config?.nodeSpacing || e.config?.flowchart?.nodeSpacing || e.nodeSpacing,
        ranksep: e.config?.rankSpacing || e.config?.flowchart?.rankSpacing || e.rankSpacing,
        marginx: 8,
        marginy: 8
    }).setDefaultEdgeLabel(function() {
        return {};
    }), c = /*#__PURE__*/ t.select("g");
    tr(c, e.markers, e.type, e.diagramId), og(), Gt(), xo(), Z(), e.nodes.forEach((o)=>{
        n.setNode(o.id, {
            ...o
        }), o.parentId && n.setParent(o.id, o.parentId);
    }), tt.debug("Edges:", e.edges), e.edges.forEach((o)=>{
        if (o.start === o.end) {
            let l = o.start, u = l + "---" + l + "---1", d = l + "---" + l + "---2", m = /*#__PURE__*/ n.node(l);
            n.setNode(u, {
                domId: u,
                id: u,
                parentId: m.parentId,
                labelStyle: "",
                label: "",
                padding: 0,
                shape: "labelRect",
                style: "",
                width: 10,
                height: 10
            }), n.setParent(u, m.parentId), n.setNode(d, {
                domId: d,
                id: d,
                parentId: m.parentId,
                labelStyle: "",
                padding: 0,
                shape: "labelRect",
                label: "",
                style: "",
                width: 10,
                height: 10
            }), n.setParent(d, m.parentId);
            let p = /*#__PURE__*/ structuredClone(o), b = /*#__PURE__*/ structuredClone(o), X = /*#__PURE__*/ structuredClone(o);
            p.label = "", p.arrowTypeEnd = "none", p.id = l + "-cyclic-special-1", b.arrowTypeStart = "none", b.arrowTypeEnd = "none", b.id = l + "-cyclic-special-mid", X.label = "", m.isGroup && (p.fromCluster = l, X.toCluster = l), X.id = l + "-cyclic-special-2", X.arrowTypeStart = "none", n.setEdge(l, u, p, l + "-cyclic-special-0"), n.setEdge(u, d, b, l + "-cyclic-special-1"), n.setEdge(d, l, X, l + "-cyc<lic-special-2");
        } else n.setEdge(o.start, o.end, {
            ...o
        }, o.id);
    }), tt.warn("Graph at first:", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ h(n))), I(n), tt.warn("Graph after XAX:", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ h(n)));
    let s = /*#__PURE__*/ Hl();
    await ie(c, n, e.type, e.diagramId, void 0, s);
}, "render");
export { Se as render };
