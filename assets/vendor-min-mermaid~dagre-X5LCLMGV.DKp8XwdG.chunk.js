import { f as fn } from './vendor-min-mermaid~chunk-CCU7O4O5.rLJtzEeZ.chunk.js';
import { m } from './vendor-min-mermaid~chunk-EYG76IYJ.B68ANacC.chunk.js';
import { k as kr, c as cr, p as pr, f as fr, d as dr } from './vendor-min-mermaid~chunk-TVVDRG3C.CRw_45GB.chunk.js';
import { G as Gd, b as ba, D, a as Rd, T as Td, E as Ed, x as xa } from './vendor-min-mermaid~chunk-EQI6KKA3.DOKLknab.chunk.js';
import { n } from './vendor-min-mermaid~chunk-LM6QDVU5.BAO1h6r1.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { m as mr } from './vendor-min-mermaid~chunk-KXVH62NG.CUpUCMGK.chunk.js';
import { p as pt } from './vendor-min-mermaid~chunk-63GW7ZVL.CUmzAGpZ.chunk.js';
import { s as sn, _ as _f, J as Jr } from './vendor-min-mermaid~chunk-OMTJKCYW.Drk1AmJ7.chunk.js';
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
    return pt.trace("In isDescendant", t, " ", e, " = ", /*#__PURE__*/ n.includes(e)), n.includes(e);
}, "isDescendant"), ce = /*#__PURE__*/ m$1((e, t)=>{
    let n = v.get(t) || [];
    return pt.info("Descendants of ", t, " is ", n), pt.info("Edge is ", e), e.v === t || e.w === t ? false : n ? n.includes(e.v) || J(e.v, t) || J(e.w, t) || n.includes(e.w) : (pt.debug("Tilt, ", t, ",not in descendants"), false);
}, "edgeInCluster"), $ = m$1((e, t, n, c)=>{
    pt.warn("Copying children of ", e, "root", c, "data", /*#__PURE__*/ t.node(e), c);
    let s = t.children(e) || [];
    e !== c && s.push(e), pt.warn("Copying (nodes) clusterId", e, "nodes", s), s.forEach((o)=>{
        if (t.children(o).length > 0) $(o, t, n, c);
        else {
            let l = /*#__PURE__*/ t.node(o);
            pt.info("cp ", o, " to ", c, " with parent ", e), n.setNode(o, l), c !== t.parent(o) && (pt.warn("Setting parent", o, /*#__PURE__*/ t.parent(o)), n.setParent(o, /*#__PURE__*/ t.parent(o))), e !== c && o !== e ? (pt.debug("Setting parent", o, e), n.setParent(o, e)) : (pt.info("In copy ", e, "root", c, "data", /*#__PURE__*/ t.node(e), c), pt.debug("Not Setting parent for node=", o, "cluster!==rootId", e !== c, "node!==clusterId", o !== e));
            let u = /*#__PURE__*/ t.edges(o);
            pt.debug("Copying Edges", u), u.forEach((d)=>{
                pt.info("Edge", d);
                let m = /*#__PURE__*/ t.edge(d.v, d.w, d.name);
                pt.info("Edge data", m, c);
                try {
                    ce(d, c) ? (pt.info("Copying as ", d.v, d.w, m, d.name), n.setEdge(d.v, d.w, m, d.name), pt.info("newGraph edges ", /*#__PURE__*/ n.edges(), /*#__PURE__*/ n.edge(n.edges()[0]))) : pt.info("Skipping copy of edge ", d.v, "-->", d.w, " rootId: ", c, " clusterId:", e);
                } catch (p) {
                    pt.error(p);
                }
            });
        }
        pt.debug("Removing node", o), t.removeNode(o);
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
    if (pt.trace("Searching children of id ", e, c), c.length < 1) return e;
    let s;
    for (let o of c){
        let l = /*#__PURE__*/ x(o, t, n), u = /*#__PURE__*/ ae(t, n, l);
        if (l) if (u.length > 0) s = l;
        else return l;
    }
    return s;
}, "findNonClusterChild"), Q = /*#__PURE__*/ m$1((e)=>!a.has(e) || !a.get(e).externalConnections ? e : a.has(e) ? a.get(e).id : e, "getAnchorId"), I = /*#__PURE__*/ m$1((e, t)=>{
    if (!e || t > 10) {
        pt.debug("Opting out, no graph ");
        return;
    } else pt.debug("Opting in, graph ");
    e.nodes().forEach(function(n) {
        e.children(n).length > 0 && (pt.warn("Cluster identified", n, " Replacement id in edges: ", /*#__PURE__*/ x(n, e, n)), v.set(n, /*#__PURE__*/ L(n, e)), a.set(n, {
            id: /*#__PURE__*/ x(n, e, n),
            clusterData: /*#__PURE__*/ e.node(n)
        }));
    }), e.nodes().forEach(function(n) {
        let c = /*#__PURE__*/ e.children(n), s = /*#__PURE__*/ e.edges();
        c.length > 0 ? (pt.debug("Cluster identified", n, v), s.forEach((o)=>{
            let l = /*#__PURE__*/ J(o.v, n), u = /*#__PURE__*/ J(o.w, n);
            l ^ u && (pt.warn("Edge: ", o, " leaves cluster ", n), pt.warn("Descendants of XXX ", n, ": ", /*#__PURE__*/ v.get(n)), a.get(n).externalConnections = true);
        })) : pt.debug("Not a cluster ", n, v);
    });
    for (let n of a.keys()){
        let c = a.get(n).id, s = /*#__PURE__*/ e.parent(c);
        s !== n && a.has(s) && !a.get(s).externalConnections && (a.get(n).id = s);
    }
    e.edges().forEach(function(n) {
        let c = /*#__PURE__*/ e.edge(n);
        pt.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), pt.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(/*#__PURE__*/ e.edge(n)));
        let s = n.v, o = n.w;
        if (pt.warn("Fix XXX", a, "ids:", n.v, n.w, "Translating: ", /*#__PURE__*/ a.get(n.v), " --- ", /*#__PURE__*/ a.get(n.w)), a.get(n.v) || a.get(n.w)) {
            if (pt.warn("Fixing and trying - removing XXX", n.v, n.w, n.name), s = /*#__PURE__*/ Q(n.v), o = /*#__PURE__*/ Q(n.w), e.removeEdge(n.v, n.w, n.name), s !== n.v) {
                let l = /*#__PURE__*/ e.parent(s);
                a.get(l).externalConnections = true, c.fromCluster = n.v;
            }
            if (o !== n.w) {
                let l = /*#__PURE__*/ e.parent(o);
                a.get(l).externalConnections = true, c.toCluster = n.w;
            }
            pt.warn("Fix Replacing with XXX", s, o, n.name), e.setEdge(s, o, c, n.name);
        }
    }), pt.warn("Adjusted Graph", /*#__PURE__*/ h(e)), ee(e, 0), pt.trace(a);
}, "adjustClustersAndEdges"), ee = m$1((e, t)=>{
    if (pt.warn("extractor - ", t, /*#__PURE__*/ h(e), /*#__PURE__*/ e.children("D")), t > 10) {
        pt.error("Bailing out");
        return;
    }
    let n = /*#__PURE__*/ e.nodes(), c = false;
    for (let s of n){
        let o = /*#__PURE__*/ e.children(s);
        c = c || o.length > 0;
    }
    if (!c) {
        pt.debug("Done, no node has children", /*#__PURE__*/ e.nodes());
        return;
    }
    pt.debug("Nodes = ", n, t);
    for (let s of n)if (pt.debug("Extracting node", s, a, a.has(s) && !a.get(s).externalConnections, !e.parent(s), /*#__PURE__*/ e.node(s), /*#__PURE__*/ e.children("D"), " Depth ", t), !a.has(s)) pt.debug("Not a cluster", s, t);
    else if (!a.get(s).externalConnections && e.children(s) && e.children(s).length > 0) {
        pt.warn("Cluster without external connections, without a parent and with children", s, t);
        let l = e.graph().rankdir === "TB" ? "LR" : "TB";
        a.get(s)?.clusterData?.dir && (l = a.get(s).clusterData.dir, pt.warn("Fixing dir", a.get(s).clusterData.dir, l));
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
        pt.warn("Old graph before copy", /*#__PURE__*/ h(e)), $(s, e, u, s), e.setNode(s, {
            clusterNode: true,
            id: s,
            clusterData: a.get(s).clusterData,
            label: a.get(s).label,
            graph: u
        }), pt.warn("New graph after copy node: (", s, ")", /*#__PURE__*/ h(u)), pt.debug("Old graph after copy", /*#__PURE__*/ h(e));
    } else pt.warn("Cluster ** ", s, " **not meeting the criteria !externalConnections:", !a.get(s).externalConnections, " no parent: ", !e.parent(s), " children ", e.children(s) && e.children(s).length > 0, /*#__PURE__*/ e.children("D"), t), pt.debug(a);
    n = /*#__PURE__*/ e.nodes(), pt.warn("New list of nodes", n);
    for (let s of n){
        let o = /*#__PURE__*/ e.node(s);
        pt.warn(" Now next level", s, o), o?.clusterNode && ee(o.graph, t + 1);
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
    pt.warn("Graph in recursive render:XAX", /*#__PURE__*/ h(t), s);
    let l = t.graph().rankdir;
    pt.trace("Dir in recursive render - dir:", l);
    let u = /*#__PURE__*/ e.insert("g").attr("class", "root");
    t.nodes() ? pt.info("Recursive render XXX", /*#__PURE__*/ t.nodes()) : pt.info("No nodes found for", t), t.edges().length > 0 && pt.info("Recursive edges", /*#__PURE__*/ t.edge(t.edges()[0]));
    let d = /*#__PURE__*/ u.insert("g").attr("class", "clusters"), m = /*#__PURE__*/ u.insert("g").attr("class", "edgePaths"), p = /*#__PURE__*/ u.insert("g").attr("class", "edgeLabels"), b = /*#__PURE__*/ u.insert("g").attr("class", "nodes");
    await Promise.all(/*#__PURE__*/ t.nodes().map(async function(f) {
        let r = /*#__PURE__*/ t.node(f);
        if (s !== void 0) {
            let w = /*#__PURE__*/ JSON.parse(/*#__PURE__*/ JSON.stringify(s.clusterData));
            pt.trace(`Setting data for parent cluster XXX
 Node.id = `, f, `
 data=`, w.height, `
Parent cluster`, s.height), t.setNode(s.id, w), t.parent(f) || (pt.trace("Setting parent", f, s.id), t.setParent(f, s.id, w));
        }
        if (pt.info("(Insert) Node XXX" + f + ": " + JSON.stringify(/*#__PURE__*/ t.node(f))), r?.clusterNode) {
            pt.info("Cluster identified XBX", f, r.width, /*#__PURE__*/ t.node(f));
            let { ranksep: w, nodesep: E } = t.graph();
            r.graph.setGraph({
                ...r.graph.graph(),
                ranksep: w + 25,
                nodesep: E
            });
            let N = await ie(b, r.graph, n$1, c, /*#__PURE__*/ t.node(f), o), D$1 = N.elem;
            D(r, D$1), r.diff = N.diff || 0, pt.info("New compound node after recursive render XAX", f, "width", r.width, "height", r.height), Rd(D$1, r);
        } else t.children(f).length > 0 ? (pt.trace("Cluster - the non recursive path XBX", f, r.id, r, r.width, "Graph:", t), pt.trace(/*#__PURE__*/ x(r.id, t)), a.set(r.id, {
            id: /*#__PURE__*/ x(r.id, t),
            node: r
        })) : (pt.trace("Node - the non recursive path XAX", f, b, /*#__PURE__*/ t.node(f), l), await Td(b, /*#__PURE__*/ t.node(f), {
            config: o,
            dir: l
        }));
    })), await m$1(async ()=>{
        let f = /*#__PURE__*/ t.edges().map(async function(r) {
            let w = /*#__PURE__*/ t.edge(r.v, r.w, r.name);
            pt.info("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(r)), pt.info("Edge " + r.v + " -> " + r.w + ": ", r, " ", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ t.edge(r))), pt.info("Fix", a, "ids:", r.v, r.w, "Translating: ", /*#__PURE__*/ a.get(r.v), /*#__PURE__*/ a.get(r.w)), await pr(p, w);
        });
        await Promise.all(f);
    }, "processEdges")(), pt.info("Graph before layout:", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ h(t))), pt.info("############################################# XXX"), pt.info("###                Layout                 ### XXX"), pt.info("############################################# XXX"), fn(t), pt.info("Graph after layout:", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ h(t)));
    let P = 0, { subGraphTitleTotalMargin: S } = n(o);
    return await Promise.all(/*#__PURE__*/ te(t).map(async function(f) {
        let r = /*#__PURE__*/ t.node(f);
        if (pt.info("Position XBX => " + f + ": (" + r.x, "," + r.y, ") width: ", r.width, " height: ", r.height), r?.clusterNode) r.y += S, pt.info("A tainted cluster node XBX1", f, r.id, r.width, r.height, r.x, r.y, /*#__PURE__*/ t.parent(f)), a.get(r.id).node = r, Ed(r);
        else if (t.children(f).length > 0) {
            pt.info("A pure cluster node XBX1", f, r.id, r.x, r.y, r.width, r.height, /*#__PURE__*/ t.parent(f)), r.height += S, t.node(r.parentId);
            let w = r?.padding / 2 || 0, E = r?.labelBBox?.height || 0, N = E - w || 0;
            pt.debug("OffsetY", N, "labelHeight", E, "halfPadding", w), await xa(d, r), a.get(r.id).node = r;
        } else {
            let w = /*#__PURE__*/ t.node(r.parentId);
            r.y += S / 2, pt.info("A regular node XBX1 - using the padding", r.id, "parent", r.parentId, r.width, r.height, r.x, r.y, "offsetY", r.offsetY, "parent", w, w?.offsetY, r), Ed(r);
        }
    })), t.edges().forEach(function(f) {
        let r = /*#__PURE__*/ t.edge(f);
        pt.info("Edge " + f.v + " -> " + f.w + ": " + JSON.stringify(r), r), r.points.forEach((D)=>D.y += S / 2);
        let w = /*#__PURE__*/ t.node(f.v);
        var E = /*#__PURE__*/ t.node(f.w);
        let N = /*#__PURE__*/ fr(m, r, a, n$1, w, E, c);
        dr(r, N);
    }), t.nodes().forEach(function(f) {
        let r = /*#__PURE__*/ t.node(f);
        pt.info(f, r.type, r.diff), r.isGroup && (P = r.diff);
    }), pt.warn("Returning from recursive render XAX", u, P), {
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
    kr(c, e.markers, e.type, e.diagramId), Gd(), cr(), ba(), Z(), e.nodes.forEach((o)=>{
        n.setNode(o.id, {
            ...o
        }), o.parentId && n.setParent(o.id, o.parentId);
    }), pt.debug("Edges:", e.edges), e.edges.forEach((o)=>{
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
    }), pt.warn("Graph at first:", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ h(n))), I(n), pt.warn("Graph after XAX:", /*#__PURE__*/ JSON.stringify(/*#__PURE__*/ h(n)));
    let s = /*#__PURE__*/ mr();
    await ie(c, n, e.type, e.diagramId, void 0, s);
}, "render");
export { Se as render };
