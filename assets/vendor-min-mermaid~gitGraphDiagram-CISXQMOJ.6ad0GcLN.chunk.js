import { c } from './vendor-min-mermaid~chunk-4KE642ED.-04Badot.chunk.js';
import { p } from './vendor-min-mermaid~chunk-NPRLVKJ3.0d4ampid.chunk.js';
import { s } from './vendor-min-mermaid~chunk-VSLJSFIP.OvUnCEAg.chunk.js';
import { U as Ut, L as Lt, w as wt } from './vendor-min-mermaid~chunk-RGZHNYJS.BZGdGDWl.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { j as jo, $ as $o, U as Uo, G as Go, H as Ho, N as No, u as ur, X as Xo, P as Po, n as nn, M as Mt, a as Pi } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { p as pt, i as ia } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
var u = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4
};
var he = Pi.gitGraph, M = /*#__PURE__*/ m$1(()=>Lt({
        ...he,
        ...Mt().gitGraph
    }), "getConfig"), i = new s(()=>{
    let r = /*#__PURE__*/ M(), e = r.mainBranchName, o = r.mainBranchOrder;
    return {
        mainBranchName: e,
        commits: new Map,
        head: null,
        branchConfig: new Map([
            [
                e,
                {
                    name: e,
                    order: o
                }
            ]
        ]),
        branches: new Map([
            [
                e,
                null
            ]
        ]),
        currBranch: e,
        direction: "LR",
        seq: 0,
        options: {}
    };
});
function q() {
    return wt({
        length: 7
    });
}
m$1(q, "getID");
function ge(r, e) {
    let o = /*#__PURE__*/ Object.create(null);
    return r.reduce((a, t)=>{
        let n = /*#__PURE__*/ e(t);
        return o[n] || (o[n] = true, a.push(t)), a;
    }, []);
}
m$1(ge, "uniqBy");
var fe = /*#__PURE__*/ m$1(function(r) {
    i.records.direction = r;
}, "setDirection"), le = /*#__PURE__*/ m$1(function(r) {
    pt.debug("options str", r), r = r?.trim(), r = r || "{}";
    try {
        i.records.options = /*#__PURE__*/ JSON.parse(r);
    } catch (e) {
        pt.error("error while parsing gitGraph options", e.message);
    }
}, "setOptions"), ye = /*#__PURE__*/ m$1(function() {
    return i.records.options;
}, "getOptions"), ue = /*#__PURE__*/ m$1(function(r) {
    let e = r.msg, o = r.id, a = r.type, t = r.tags;
    pt.info("commit", e, o, a, t), pt.debug("Entering commit:", e, o, a, t);
    let n = /*#__PURE__*/ M();
    o = /*#__PURE__*/ nn.sanitizeText(o, n), e = /*#__PURE__*/ nn.sanitizeText(e, n), t = t?.map((s)=>nn.sanitizeText(s, n));
    let m = {
        id: o || i.records.seq + "-" + q(),
        message: e,
        seq: i.records.seq++,
        type: a ?? u.NORMAL,
        tags: t ?? [],
        parents: i.records.head == null ? [] : [
            i.records.head.id
        ],
        branch: i.records.currBranch
    };
    i.records.head = m, pt.info("main branch", n.mainBranchName), i.records.commits.has(m.id) && pt.warn(`Commit ID ${m.id} already exists`), i.records.commits.set(m.id, m), i.records.branches.set(i.records.currBranch, m.id), pt.debug("in pushCommit " + m.id);
}, "commit"), xe = /*#__PURE__*/ m$1(function(r) {
    let e = r.name, o = r.order;
    if (e = /*#__PURE__*/ nn.sanitizeText(e, /*#__PURE__*/ M()), i.records.branches.has(e)) throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);
    i.records.branches.set(e, i.records.head != null ? i.records.head.id : null), i.records.branchConfig.set(e, {
        name: e,
        order: o
    }), ne(e), pt.debug("in createBranch");
}, "branch"), $e = /*#__PURE__*/ m$1((r)=>{
    let e = r.branch, o = r.id, a = r.type, t = r.tags, n = /*#__PURE__*/ M();
    e = /*#__PURE__*/ nn.sanitizeText(e, n), o && (o = /*#__PURE__*/ nn.sanitizeText(o, n));
    let m = /*#__PURE__*/ i.records.branches.get(i.records.currBranch), s = /*#__PURE__*/ i.records.branches.get(e), g = m ? i.records.commits.get(m) : void 0, p = s ? i.records.commits.get(s) : void 0;
    if (g && p && g.branch === e) throw new Error(`Cannot merge branch '${e}' into itself.`);
    if (i.records.currBranch === e) {
        let c = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
        throw c.hash = {
            text: `merge ${e}`,
            token: `merge ${e}`,
            expected: [
                "branch abc"
            ]
        }, c;
    }
    if (g === void 0 || !g) {
        let c = new Error(`Incorrect usage of "merge". Current branch (${i.records.currBranch})has no commits`);
        throw c.hash = {
            text: `merge ${e}`,
            token: `merge ${e}`,
            expected: [
                "commit"
            ]
        }, c;
    }
    if (!i.records.branches.has(e)) {
        let c = new Error('Incorrect usage of "merge". Branch to be merged (' + e + ") does not exist");
        throw c.hash = {
            text: `merge ${e}`,
            token: `merge ${e}`,
            expected: [
                `branch ${e}`
            ]
        }, c;
    }
    if (p === void 0 || !p) {
        let c = new Error('Incorrect usage of "merge". Branch to be merged (' + e + ") has no commits");
        throw c.hash = {
            text: `merge ${e}`,
            token: `merge ${e}`,
            expected: [
                '"commit"'
            ]
        }, c;
    }
    if (g === p) {
        let c = new Error('Incorrect usage of "merge". Both branches have same head');
        throw c.hash = {
            text: `merge ${e}`,
            token: `merge ${e}`,
            expected: [
                "branch abc"
            ]
        }, c;
    }
    if (o && i.records.commits.has(o)) {
        let c = new Error('Incorrect usage of "merge". Commit with id:' + o + " already exists, use different custom id");
        throw c.hash = {
            text: `merge ${e} ${o} ${a} ${t?.join(" ")}`,
            token: `merge ${e} ${o} ${a} ${t?.join(" ")}`,
            expected: [
                `merge ${e} ${o}_UNIQUE ${a} ${t?.join(" ")}`
            ]
        }, c;
    }
    let h = s || "", f = {
        id: o || `${i.records.seq}-${q()}`,
        message: `merged branch ${e} into ${i.records.currBranch}`,
        seq: i.records.seq++,
        parents: i.records.head == null ? [] : [
            i.records.head.id,
            h
        ],
        branch: i.records.currBranch,
        type: u.MERGE,
        customType: a,
        customId: !!o,
        tags: t ?? []
    };
    i.records.head = f, i.records.commits.set(f.id, f), i.records.branches.set(i.records.currBranch, f.id), pt.debug(i.records.branches), pt.debug("in mergeBranch");
}, "merge"), be = /*#__PURE__*/ m$1(function(r) {
    let e = r.id, o = r.targetId, a = r.tags, t = r.parent;
    pt.debug("Entering cherryPick:", e, o, a);
    let n = /*#__PURE__*/ M();
    if (e = /*#__PURE__*/ nn.sanitizeText(e, n), o = /*#__PURE__*/ nn.sanitizeText(o, n), a = a?.map((g)=>nn.sanitizeText(g, n)), t = /*#__PURE__*/ nn.sanitizeText(t, n), !e || !i.records.commits.has(e)) {
        let g = new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
        throw g.hash = {
            text: `cherryPick ${e} ${o}`,
            token: `cherryPick ${e} ${o}`,
            expected: [
                "cherry-pick abc"
            ]
        }, g;
    }
    let m = /*#__PURE__*/ i.records.commits.get(e);
    if (m === void 0 || !m) throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
    if (t && !(Array.isArray(m.parents) && m.parents.includes(t))) throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
    let s = m.branch;
    if (m.type === u.MERGE && !t) throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
    if (!o || !i.records.commits.has(o)) {
        if (s === i.records.currBranch) {
            let f = new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');
            throw f.hash = {
                text: `cherryPick ${e} ${o}`,
                token: `cherryPick ${e} ${o}`,
                expected: [
                    "cherry-pick abc"
                ]
            }, f;
        }
        let g = /*#__PURE__*/ i.records.branches.get(i.records.currBranch);
        if (g === void 0 || !g) {
            let f = new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);
            throw f.hash = {
                text: `cherryPick ${e} ${o}`,
                token: `cherryPick ${e} ${o}`,
                expected: [
                    "cherry-pick abc"
                ]
            }, f;
        }
        let p = /*#__PURE__*/ i.records.commits.get(g);
        if (p === void 0 || !p) {
            let f = new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);
            throw f.hash = {
                text: `cherryPick ${e} ${o}`,
                token: `cherryPick ${e} ${o}`,
                expected: [
                    "cherry-pick abc"
                ]
            }, f;
        }
        let h = {
            id: i.records.seq + "-" + q(),
            message: `cherry-picked ${m?.message} into ${i.records.currBranch}`,
            seq: i.records.seq++,
            parents: i.records.head == null ? [] : [
                i.records.head.id,
                m.id
            ],
            branch: i.records.currBranch,
            type: u.CHERRY_PICK,
            tags: a ? a.filter(Boolean) : [
                `cherry-pick:${m.id}${m.type === u.MERGE ? `|parent:${t}` : ""}`
            ]
        };
        i.records.head = h, i.records.commits.set(h.id, h), i.records.branches.set(i.records.currBranch, h.id), pt.debug(i.records.branches), pt.debug("in cherryPick");
    }
}, "cherryPick"), ne = /*#__PURE__*/ m$1(function(r) {
    if (r = /*#__PURE__*/ nn.sanitizeText(r, /*#__PURE__*/ M()), i.records.branches.has(r)) {
        i.records.currBranch = r;
        let e = /*#__PURE__*/ i.records.branches.get(i.records.currBranch);
        e === void 0 || !e ? i.records.head = null : i.records.head = i.records.commits.get(e) ?? null;
    } else {
        let e = new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${r}")`);
        throw e.hash = {
            text: `checkout ${r}`,
            token: `checkout ${r}`,
            expected: [
                `branch ${r}`
            ]
        }, e;
    }
}, "checkout");
function re(r, e, o) {
    let a = /*#__PURE__*/ r.indexOf(e);
    a === -1 ? r.push(o) : r.splice(a, 1, o);
}
m$1(re, "upsert");
function oe(r) {
    let e = /*#__PURE__*/ r.reduce((t, n)=>t.seq > n.seq ? t : n, r[0]), o = "";
    r.forEach(function(t) {
        t === e ? o += "	*" : o += "	|";
    });
    let a = [
        o,
        e.id,
        e.seq
    ];
    for(let t in i.records.branches)i.records.branches.get(t) === e.id && a.push(t);
    if (pt.debug(/*#__PURE__*/ a.join(" ")), e.parents && e.parents.length == 2 && e.parents[0] && e.parents[1]) {
        let t = /*#__PURE__*/ i.records.commits.get(e.parents[0]);
        re(r, e, t), e.parents[1] && r.push(/*#__PURE__*/ i.records.commits.get(e.parents[1]));
    } else {
        if (e.parents.length == 0) return;
        if (e.parents[0]) {
            let t = /*#__PURE__*/ i.records.commits.get(e.parents[0]);
            re(r, e, t);
        }
    }
    r = /*#__PURE__*/ ge(r, (t)=>t.id), oe(r);
}
m$1(oe, "prettyPrintCommitHistory");
var Ce = /*#__PURE__*/ m$1(function() {
    pt.debug(i.records.commits);
    let r = ae()[0];
    oe([
        r
    ]);
}, "prettyPrint"), Be = /*#__PURE__*/ m$1(function() {
    i.reset(), Po();
}, "clear"), we = /*#__PURE__*/ m$1(function() {
    return [
        .../*#__PURE__*/ i.records.branchConfig.values()
    ].map((e, o)=>e.order !== null && e.order !== void 0 ? e : {
            ...e,
            order: /*#__PURE__*/ parseFloat(`0.${o}`)
        }).sort((e, o)=>(e.order ?? 0) - (o.order ?? 0)).map(({ name: e })=>({
            name: e
        }));
}, "getBranchesAsObjArray"), ke = /*#__PURE__*/ m$1(function() {
    return i.records.branches;
}, "getBranches"), Te = /*#__PURE__*/ m$1(function() {
    return i.records.commits;
}, "getCommits"), ae = /*#__PURE__*/ m$1(function() {
    let r = [
        .../*#__PURE__*/ i.records.commits.values()
    ];
    return r.forEach(function(e) {
        pt.debug(e.id);
    }), r.sort((e, o)=>e.seq - o.seq), r;
}, "getCommitsArray"), Ee = /*#__PURE__*/ m$1(function() {
    return i.records.currBranch;
}, "getCurrentBranch"), Pe = /*#__PURE__*/ m$1(function() {
    return i.records.direction;
}, "getDirection"), De = /*#__PURE__*/ m$1(function() {
    return i.records.head;
}, "getHead"), v = {
    commitType: u,
    getConfig: M,
    setDirection: fe,
    setOptions: le,
    getOptions: ye,
    commit: ue,
    branch: xe,
    merge: $e,
    cherryPick: be,
    checkout: ne,
    prettyPrint: Ce,
    clear: Be,
    getBranchesAsObjArray: we,
    getBranches: ke,
    getCommits: Te,
    getCommitsArray: ae,
    getCurrentBranch: Ee,
    getDirection: Pe,
    getHead: De,
    setAccTitle: No,
    getAccTitle: Ho,
    getAccDescription: Go,
    setAccDescription: Uo,
    setDiagramTitle: $o,
    getDiagramTitle: jo
};
var Me = /*#__PURE__*/ m$1((r, e)=>{
    c(r, e), r.dir && e.setDirection(r.dir);
    for (let o of r.statements)Ge(o, e);
}, "populate"), Ge = /*#__PURE__*/ m$1((r, e)=>{
    let a = {
        Commit: /*#__PURE__*/ m$1((t)=>e.commit(/*#__PURE__*/ Le(t)), "Commit"),
        Branch: /*#__PURE__*/ m$1((t)=>e.branch(/*#__PURE__*/ Oe(t)), "Branch"),
        Merge: /*#__PURE__*/ m$1((t)=>e.merge(/*#__PURE__*/ ve(t)), "Merge"),
        Checkout: /*#__PURE__*/ m$1((t)=>e.checkout(/*#__PURE__*/ Re(t)), "Checkout"),
        CherryPicking: /*#__PURE__*/ m$1((t)=>e.cherryPick(/*#__PURE__*/ Ae(t)), "CherryPicking")
    }[r.$type];
    a ? a(r) : pt.error(`Unknown statement type: ${r.$type}`);
}, "parseStatement"), Le = /*#__PURE__*/ m$1((r)=>({
        id: r.id,
        msg: r.message ?? "",
        type: r.type !== void 0 ? u[r.type] : u.NORMAL,
        tags: r.tags ?? void 0
    }), "parseCommit"), Oe = /*#__PURE__*/ m$1((r)=>({
        name: r.name,
        order: r.order ?? 0
    }), "parseBranch"), ve = /*#__PURE__*/ m$1((r)=>({
        branch: r.branch,
        id: r.id ?? "",
        type: r.type !== void 0 ? u[r.type] : void 0,
        tags: r.tags ?? void 0
    }), "parseMerge"), Re = /*#__PURE__*/ m$1((r)=>r.branch, "parseCheckout"), Ae = /*#__PURE__*/ m$1((r)=>({
        id: r.id,
        targetId: "",
        tags: r.tags?.length === 0 ? void 0 : r.tags,
        parent: r.parent
    }), "parseCherryPicking"), se = {
    parse: /*#__PURE__*/ m$1(async (r)=>{
        let e = await p("gitGraph", r);
        pt.debug(e), Me(e, v);
    }, "parse")
};
var Ie = /*#__PURE__*/ ur(), w = Ie?.gitGraph, P = 10, D = 40, k = 4, T = 2, G = 8, b = new Map, C = new Map, R = 30, L = new Map, A = [], E = 0, y = "LR", qe = /*#__PURE__*/ m$1(()=>{
    b.clear(), C.clear(), L.clear(), E = 0, A = [], y = "LR";
}, "clear"), ce = /*#__PURE__*/ m$1((r)=>{
    let e = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "text");
    return (typeof r == "string" ? r.split(/\\n|\n|<br\s*\/?>/gi) : r).forEach((a)=>{
        let t = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        t.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), t.setAttribute("dy", "1em"), t.setAttribute("x", "0"), t.setAttribute("class", "row"), t.textContent = /*#__PURE__*/ a.trim(), e.appendChild(t);
    }), e;
}, "drawText"), me = /*#__PURE__*/ m$1((r)=>{
    let e, o, a;
    return y === "BT" ? (o = /*#__PURE__*/ m$1((t, n)=>t <= n, "comparisonFunc"), a = 1 / 0) : (o = /*#__PURE__*/ m$1((t, n)=>t >= n, "comparisonFunc"), a = 0), r.forEach((t)=>{
        let n = y === "TB" || y == "BT" ? C.get(t)?.y : C.get(t)?.x;
        n !== void 0 && o(n, a) && (e = t, a = n);
    }), e;
}, "findClosestParent"), He = /*#__PURE__*/ m$1((r)=>{
    let e = "", o = 1 / 0;
    return r.forEach((a)=>{
        let t = C.get(a).y;
        t <= o && (e = a, o = t);
    }), e || void 0;
}, "findClosestParentBT"), Se = /*#__PURE__*/ m$1((r, e, o)=>{
    let a = o, t = o, n = [];
    r.forEach((m)=>{
        let s = /*#__PURE__*/ e.get(m);
        if (!s) throw new Error(`Commit not found for key ${m}`);
        s.parents.length ? (a = /*#__PURE__*/ Ne(s), t = /*#__PURE__*/ Math.max(a, t)) : n.push(s), _e(s, a);
    }), a = t, n.forEach((m)=>{
        je(m, a, o);
    }), r.forEach((m)=>{
        let s = /*#__PURE__*/ e.get(m);
        if (s?.parents.length) {
            let g = /*#__PURE__*/ He(s.parents);
            a = C.get(g).y - D, a <= t && (t = a);
            let p = b.get(s.branch).pos, h = a - P;
            C.set(s.id, {
                x: p,
                y: h
            });
        }
    });
}, "setParallelBTPos"), We = /*#__PURE__*/ m$1((r)=>{
    let e = /*#__PURE__*/ me(/*#__PURE__*/ r.parents.filter((a)=>a !== null));
    if (!e) throw new Error(`Closest parent not found for commit ${r.id}`);
    let o = C.get(e)?.y;
    if (o === void 0) throw new Error(`Closest parent position not found for commit ${r.id}`);
    return o;
}, "findClosestParentPos"), Ne = /*#__PURE__*/ m$1((r)=>We(r) + D, "calculateCommitPosition"), _e = /*#__PURE__*/ m$1((r, e)=>{
    let o = /*#__PURE__*/ b.get(r.branch);
    if (!o) throw new Error(`Branch not found for commit ${r.id}`);
    let a = o.pos, t = e + P;
    return C.set(r.id, {
        x: a,
        y: t
    }), {
        x: a,
        y: t
    };
}, "setCommitPosition"), je = /*#__PURE__*/ m$1((r, e, o)=>{
    let a = /*#__PURE__*/ b.get(r.branch);
    if (!a) throw new Error(`Branch not found for commit ${r.id}`);
    let t = e + o, n = a.pos;
    C.set(r.id, {
        x: n,
        y: t
    });
}, "setRootPosition"), Fe = /*#__PURE__*/ m$1((r, e, o, a, t, n)=>{
    if (n === u.HIGHLIGHT) r.append("rect").attr("x", o.x - 10).attr("y", o.y - 10).attr("width", 20).attr("height", 20).attr("class", `commit ${e.id} commit-highlight${t % G} ${a}-outer`), r.append("rect").attr("x", o.x - 6).attr("y", o.y - 6).attr("width", 12).attr("height", 12).attr("class", `commit ${e.id} commit${t % G} ${a}-inner`);
    else if (n === u.CHERRY_PICK) r.append("circle").attr("cx", o.x).attr("cy", o.y).attr("r", 10).attr("class", `commit ${e.id} ${a}`), r.append("circle").attr("cx", o.x - 3).attr("cy", o.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${e.id} ${a}`), r.append("circle").attr("cx", o.x + 3).attr("cy", o.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${e.id} ${a}`), r.append("line").attr("x1", o.x + 3).attr("y1", o.y + 1).attr("x2", o.x).attr("y2", o.y - 5).attr("stroke", "#fff").attr("class", `commit ${e.id} ${a}`), r.append("line").attr("x1", o.x - 3).attr("y1", o.y + 1).attr("x2", o.x).attr("y2", o.y - 5).attr("stroke", "#fff").attr("class", `commit ${e.id} ${a}`);
    else {
        let m = /*#__PURE__*/ r.append("circle");
        if (m.attr("cx", o.x), m.attr("cy", o.y), m.attr("r", e.type === u.MERGE ? 9 : 10), m.attr("class", `commit ${e.id} commit${t % G}`), n === u.MERGE) {
            let s = /*#__PURE__*/ r.append("circle");
            s.attr("cx", o.x), s.attr("cy", o.y), s.attr("r", 6), s.attr("class", `commit ${a} ${e.id} commit${t % G}`);
        }
        n === u.REVERSE && r.append("path").attr("d", `M ${o.x - 5},${o.y - 5}L${o.x + 5},${o.y + 5}M${o.x - 5},${o.y + 5}L${o.x + 5},${o.y - 5}`).attr("class", `commit ${a} ${e.id} commit${t % G}`);
    }
}, "drawCommitBullet"), ze = /*#__PURE__*/ m$1((r, e, o, a)=>{
    if (e.type !== u.CHERRY_PICK && (e.customId && e.type === u.MERGE || e.type !== u.MERGE) && w?.showCommitLabel) {
        let t = /*#__PURE__*/ r.append("g"), n = /*#__PURE__*/ t.insert("rect").attr("class", "commit-label-bkg"), m = /*#__PURE__*/ t.append("text").attr("x", a).attr("y", o.y + 25).attr("class", "commit-label").text(e.id), s = m.node()?.getBBox();
        if (s && (n.attr("x", o.posWithOffset - s.width / 2 - T).attr("y", o.y + 13.5).attr("width", s.width + 2 * T).attr("height", s.height + 2 * T), y === "TB" || y === "BT" ? (n.attr("x", o.x - (s.width + 4 * k + 5)).attr("y", o.y - 12), m.attr("x", o.x - (s.width + 4 * k)).attr("y", o.y + s.height - 12)) : m.attr("x", o.posWithOffset - s.width / 2), w.rotateCommitLabel)) if (y === "TB" || y === "BT") m.attr("transform", "rotate(-45, " + o.x + ", " + o.y + ")"), n.attr("transform", "rotate(-45, " + o.x + ", " + o.y + ")");
        else {
            let g = -7.5 - (s.width + 10) / 25 * 9.5, p = 10 + s.width / 25 * 8.5;
            t.attr("transform", "translate(" + g + ", " + p + ") rotate(-45, " + a + ", " + o.y + ")");
        }
    }
}, "drawCommitLabel"), Ke = /*#__PURE__*/ m$1((r, e, o, a)=>{
    if (e.tags.length > 0) {
        let t = 0, n = 0, m = 0, s = [];
        for (let g of e.tags.reverse()){
            let p = /*#__PURE__*/ r.insert("polygon"), h = /*#__PURE__*/ r.append("circle"), f = /*#__PURE__*/ r.append("text").attr("y", o.y - 16 - t).attr("class", "tag-label").text(g), c = f.node()?.getBBox();
            if (!c) throw new Error("Tag bbox not found");
            n = /*#__PURE__*/ Math.max(n, c.width), m = /*#__PURE__*/ Math.max(m, c.height), f.attr("x", o.posWithOffset - c.width / 2), s.push({
                tag: f,
                hole: h,
                rect: p,
                yOffset: t
            }), t += 20;
        }
        for (let { tag: g, hole: p, rect: h, yOffset: f } of s){
            let c = m / 2, l = o.y - 19.2 - f;
            if (h.attr("class", "tag-label-bkg").attr("points", `
      ${a - n / 2 - k / 2},${l + T}  
      ${a - n / 2 - k / 2},${l - T}
      ${o.posWithOffset - n / 2 - k},${l - c - T}
      ${o.posWithOffset + n / 2 + k},${l - c - T}
      ${o.posWithOffset + n / 2 + k},${l + c + T}
      ${o.posWithOffset - n / 2 - k},${l + c + T}`), p.attr("cy", l).attr("cx", a - n / 2 + k / 2).attr("r", 1.5).attr("class", "tag-hole"), y === "TB" || y === "BT") {
                let x = a + f;
                h.attr("class", "tag-label-bkg").attr("points", `
        ${o.x},${x + 2}
        ${o.x},${x - 2}
        ${o.x + P},${x - c - 2}
        ${o.x + P + n + 4},${x - c - 2}
        ${o.x + P + n + 4},${x + c + 2}
        ${o.x + P},${x + c + 2}`).attr("transform", "translate(12,12) rotate(45, " + o.x + "," + a + ")"), p.attr("cx", o.x + k / 2).attr("cy", x).attr("transform", "translate(12,12) rotate(45, " + o.x + "," + a + ")"), g.attr("x", o.x + 5).attr("y", x + 3).attr("transform", "translate(14,14) rotate(45, " + o.x + "," + a + ")");
            }
        }
    }
}, "drawCommitTags"), Ue = /*#__PURE__*/ m$1((r)=>{
    switch(r.customType ?? r.type){
        case u.NORMAL:
            return "commit-normal";
        case u.REVERSE:
            return "commit-reverse";
        case u.HIGHLIGHT:
            return "commit-highlight";
        case u.MERGE:
            return "commit-merge";
        case u.CHERRY_PICK:
            return "commit-cherry-pick";
        default:
            return "commit-normal";
    }
}, "getCommitClassType"), Ve = /*#__PURE__*/ m$1((r, e, o, a)=>{
    let t = {
        x: 0,
        y: 0
    };
    if (r.parents.length > 0) {
        let n = /*#__PURE__*/ me(r.parents);
        if (n) {
            let m = a.get(n) ?? t;
            return e === "TB" ? m.y + D : e === "BT" ? (a.get(r.id) ?? t).y - D : m.x + D;
        }
    } else return e === "TB" ? R : e === "BT" ? (a.get(r.id) ?? t).y - D : 0;
    return 0;
}, "calculatePosition"), Ye = /*#__PURE__*/ m$1((r, e, o)=>{
    let a = y === "BT" && o ? e : e + P, t = y === "TB" || y === "BT" ? a : b.get(r.branch)?.pos, n = y === "TB" || y === "BT" ? b.get(r.branch)?.pos : a;
    if (n === void 0 || t === void 0) throw new Error(`Position were undefined for commit ${r.id}`);
    return {
        x: n,
        y: t,
        posWithOffset: a
    };
}, "getCommitPosition"), ie = /*#__PURE__*/ m$1((r, e, o)=>{
    if (!w) throw new Error("GitGraph config not found");
    let a = /*#__PURE__*/ r.append("g").attr("class", "commit-bullets"), t = /*#__PURE__*/ r.append("g").attr("class", "commit-labels"), n = y === "TB" || y === "BT" ? R : 0, m = [
        .../*#__PURE__*/ e.keys()
    ], s = w?.parallelCommits ?? false, g = /*#__PURE__*/ m$1((h, f)=>{
        let c = e.get(h)?.seq, l = e.get(f)?.seq;
        return c !== void 0 && l !== void 0 ? c - l : 0;
    }, "sortKeys"), p = /*#__PURE__*/ m.sort(g);
    y === "BT" && (s && Se(p, e, n), p = /*#__PURE__*/ p.reverse()), p.forEach((h)=>{
        let f = /*#__PURE__*/ e.get(h);
        if (!f) throw new Error(`Commit not found for key ${h}`);
        s && (n = /*#__PURE__*/ Ve(f, y, n, C));
        let c = /*#__PURE__*/ Ye(f, n, s);
        if (o) {
            let l = /*#__PURE__*/ Ue(f), x = f.customType ?? f.type, I = b.get(f.branch)?.index ?? 0;
            Fe(a, f, c, l, I, x), ze(t, f, c, n), Ke(t, f, c, n);
        }
        y === "TB" || y === "BT" ? C.set(f.id, {
            x: c.x,
            y: c.posWithOffset
        }) : C.set(f.id, {
            x: c.posWithOffset,
            y: c.y
        }), n = y === "BT" && s ? n + D : n + D + P, n > E && (E = n);
    });
}, "drawCommits"), Ze = /*#__PURE__*/ m$1((r, e, o, a, t)=>{
    let m = (y === "TB" || y === "BT" ? o.x < a.x : o.y < a.y) ? e.branch : r.branch, s = /*#__PURE__*/ m$1((p)=>p.branch === m, "isOnBranchToGetCurve"), g = /*#__PURE__*/ m$1((p)=>p.seq > r.seq && p.seq < e.seq, "isBetweenCommits");
    return [
        .../*#__PURE__*/ t.values()
    ].some((p)=>g(p) && s(p));
}, "shouldRerouteArrow"), O = m$1((r, e, o = 0)=>{
    let a = r + Math.abs(r - e) / 2;
    if (o > 5) return a;
    if (A.every((m)=>Math.abs(m - a) >= 10)) return A.push(a), a;
    let n = /*#__PURE__*/ Math.abs(r - e);
    return O(r, e - n / 5, o + 1);
}, "findLane"), Je = /*#__PURE__*/ m$1((r, e, o, a)=>{
    let t = /*#__PURE__*/ C.get(e.id), n = /*#__PURE__*/ C.get(o.id);
    if (t === void 0 || n === void 0) throw new Error(`Commit positions not found for commits ${e.id} and ${o.id}`);
    let m = /*#__PURE__*/ Ze(e, o, t, n, a), s = "", g = "", p = 0, h = 0, f = b.get(o.branch)?.index;
    o.type === u.MERGE && e.id !== o.parents[0] && (f = b.get(e.branch)?.index);
    let c;
    if (m) {
        s = "A 10 10, 0, 0, 0,", g = "A 10 10, 0, 0, 1,", p = 10, h = 10;
        let l = t.y < n.y ? O(t.y, n.y) : O(n.y, t.y), x = t.x < n.x ? O(t.x, n.x) : O(n.x, t.x);
        y === "TB" ? t.x < n.x ? c = `M ${t.x} ${t.y} L ${x - p} ${t.y} ${g} ${x} ${t.y + h} L ${x} ${n.y - p} ${s} ${x + h} ${n.y} L ${n.x} ${n.y}` : (f = b.get(e.branch)?.index, c = `M ${t.x} ${t.y} L ${x + p} ${t.y} ${s} ${x} ${t.y + h} L ${x} ${n.y - p} ${g} ${x - h} ${n.y} L ${n.x} ${n.y}`) : y === "BT" ? t.x < n.x ? c = `M ${t.x} ${t.y} L ${x - p} ${t.y} ${s} ${x} ${t.y - h} L ${x} ${n.y + p} ${g} ${x + h} ${n.y} L ${n.x} ${n.y}` : (f = b.get(e.branch)?.index, c = `M ${t.x} ${t.y} L ${x + p} ${t.y} ${g} ${x} ${t.y - h} L ${x} ${n.y + p} ${s} ${x - h} ${n.y} L ${n.x} ${n.y}`) : t.y < n.y ? c = `M ${t.x} ${t.y} L ${t.x} ${l - p} ${s} ${t.x + h} ${l} L ${n.x - p} ${l} ${g} ${n.x} ${l + h} L ${n.x} ${n.y}` : (f = b.get(e.branch)?.index, c = `M ${t.x} ${t.y} L ${t.x} ${l + p} ${g} ${t.x + h} ${l} L ${n.x - p} ${l} ${s} ${n.x} ${l - h} L ${n.x} ${n.y}`);
    } else s = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", p = 20, h = 20, y === "TB" ? (t.x < n.x && (o.type === u.MERGE && e.id !== o.parents[0] ? c = `M ${t.x} ${t.y} L ${t.x} ${n.y - p} ${s} ${t.x + h} ${n.y} L ${n.x} ${n.y}` : c = `M ${t.x} ${t.y} L ${n.x - p} ${t.y} ${g} ${n.x} ${t.y + h} L ${n.x} ${n.y}`), t.x > n.x && (s = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", p = 20, h = 20, o.type === u.MERGE && e.id !== o.parents[0] ? c = `M ${t.x} ${t.y} L ${t.x} ${n.y - p} ${g} ${t.x - h} ${n.y} L ${n.x} ${n.y}` : c = `M ${t.x} ${t.y} L ${n.x + p} ${t.y} ${s} ${n.x} ${t.y + h} L ${n.x} ${n.y}`), t.x === n.x && (c = `M ${t.x} ${t.y} L ${n.x} ${n.y}`)) : y === "BT" ? (t.x < n.x && (o.type === u.MERGE && e.id !== o.parents[0] ? c = `M ${t.x} ${t.y} L ${t.x} ${n.y + p} ${g} ${t.x + h} ${n.y} L ${n.x} ${n.y}` : c = `M ${t.x} ${t.y} L ${n.x - p} ${t.y} ${s} ${n.x} ${t.y - h} L ${n.x} ${n.y}`), t.x > n.x && (s = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", p = 20, h = 20, o.type === u.MERGE && e.id !== o.parents[0] ? c = `M ${t.x} ${t.y} L ${t.x} ${n.y + p} ${s} ${t.x - h} ${n.y} L ${n.x} ${n.y}` : c = `M ${t.x} ${t.y} L ${n.x - p} ${t.y} ${s} ${n.x} ${t.y - h} L ${n.x} ${n.y}`), t.x === n.x && (c = `M ${t.x} ${t.y} L ${n.x} ${n.y}`)) : (t.y < n.y && (o.type === u.MERGE && e.id !== o.parents[0] ? c = `M ${t.x} ${t.y} L ${n.x - p} ${t.y} ${g} ${n.x} ${t.y + h} L ${n.x} ${n.y}` : c = `M ${t.x} ${t.y} L ${t.x} ${n.y - p} ${s} ${t.x + h} ${n.y} L ${n.x} ${n.y}`), t.y > n.y && (o.type === u.MERGE && e.id !== o.parents[0] ? c = `M ${t.x} ${t.y} L ${n.x - p} ${t.y} ${s} ${n.x} ${t.y - h} L ${n.x} ${n.y}` : c = `M ${t.x} ${t.y} L ${t.x} ${n.y + p} ${g} ${t.x + h} ${n.y} L ${n.x} ${n.y}`), t.y === n.y && (c = `M ${t.x} ${t.y} L ${n.x} ${n.y}`));
    if (c === void 0) throw new Error("Line definition not found");
    r.append("path").attr("d", c).attr("class", "arrow arrow" + f % G);
}, "drawArrow"), Xe = /*#__PURE__*/ m$1((r, e)=>{
    let o = /*#__PURE__*/ r.append("g").attr("class", "commit-arrows");
    [
        .../*#__PURE__*/ e.keys()
    ].forEach((a)=>{
        let t = /*#__PURE__*/ e.get(a);
        t.parents && t.parents.length > 0 && t.parents.forEach((n)=>{
            Je(o, /*#__PURE__*/ e.get(n), t, e);
        });
    });
}, "drawArrows"), Qe = /*#__PURE__*/ m$1((r, e)=>{
    let o = /*#__PURE__*/ r.append("g");
    e.forEach((a, t)=>{
        let n = t % G, m = b.get(a.name)?.pos;
        if (m === void 0) throw new Error(`Position not found for branch ${a.name}`);
        let s = /*#__PURE__*/ o.append("line");
        s.attr("x1", 0), s.attr("y1", m), s.attr("x2", E), s.attr("y2", m), s.attr("class", "branch branch" + n), y === "TB" ? (s.attr("y1", R), s.attr("x1", m), s.attr("y2", E), s.attr("x2", m)) : y === "BT" && (s.attr("y1", E), s.attr("x1", m), s.attr("y2", R), s.attr("x2", m)), A.push(m);
        let g = a.name, p = /*#__PURE__*/ ce(g), h = /*#__PURE__*/ o.insert("rect"), c = /*#__PURE__*/ o.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + n);
        c.node().appendChild(p);
        let l = /*#__PURE__*/ p.getBBox();
        h.attr("class", "branchLabelBkg label" + n).attr("rx", 4).attr("ry", 4).attr("x", -l.width - 4 - (w?.rotateCommitLabel === true ? 30 : 0)).attr("y", -l.height / 2 + 8).attr("width", l.width + 18).attr("height", l.height + 4), c.attr("transform", "translate(" + (-l.width - 14 - (w?.rotateCommitLabel === true ? 30 : 0)) + ", " + (m - l.height / 2 - 1) + ")"), y === "TB" ? (h.attr("x", m - l.width / 2 - 10).attr("y", 0), c.attr("transform", "translate(" + (m - l.width / 2 - 5) + ", 0)")) : y === "BT" ? (h.attr("x", m - l.width / 2 - 10).attr("y", E), c.attr("transform", "translate(" + (m - l.width / 2 - 5) + ", " + E + ")")) : h.attr("transform", "translate(-19, " + (m - l.height / 2) + ")");
    });
}, "drawBranches"), et = /*#__PURE__*/ m$1(function(r, e, o, a, t) {
    return b.set(r, {
        pos: e,
        index: o
    }), e += 50 + (t ? 40 : 0) + (y === "TB" || y === "BT" ? a.width / 2 : 0), e;
}, "setBranchPosition"), tt = /*#__PURE__*/ m$1(function(r, e, o, a) {
    if (qe(), pt.debug("in gitgraph renderer", r + `
`, "id:", e, o), !w) throw new Error("GitGraph config not found");
    let t = w.rotateCommitLabel ?? false, n = a.db;
    L = /*#__PURE__*/ n.getCommits();
    let m = /*#__PURE__*/ n.getBranchesAsObjArray();
    y = /*#__PURE__*/ n.getDirection();
    let s = /*#__PURE__*/ ia(`[id="${e}"]`), g = 0;
    m.forEach((p, h)=>{
        let f = /*#__PURE__*/ ce(p.name), c = /*#__PURE__*/ s.append("g"), l = /*#__PURE__*/ c.insert("g").attr("class", "branchLabel"), x = /*#__PURE__*/ l.insert("g").attr("class", "label branch-label");
        x.node()?.appendChild(f);
        let I = /*#__PURE__*/ f.getBBox();
        g = /*#__PURE__*/ et(p.name, g, h, I, t), x.remove(), l.remove(), c.remove();
    }), ie(s, L, false), w.showBranches && Qe(s, m), Xe(s, L), ie(s, L, true), Ut.insertTitle(s, "gitTitleText", w.titleTopMargin ?? 0, /*#__PURE__*/ n.getDiagramTitle()), Xo(void 0, s, w.diagramPadding, w.useMaxWidth);
}, "draw"), de = {
    draw: tt
};
var rt = /*#__PURE__*/ m$1((r)=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ].map((e)=>`
        .branch-label${e} { fill: ${r["gitBranchLabel" + e]}; }
        .commit${e} { stroke: ${r["git" + e]}; fill: ${r["git" + e]}; }
        .commit-highlight${e} { stroke: ${r["gitInv" + e]}; fill: ${r["gitInv" + e]}; }
        .label${e}  { fill: ${r["git" + e]}; }
        .arrow${e} { stroke: ${r["git" + e]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${r.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}
  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}
  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }
  .tag-hole { fill: ${r.textColor}; }

  .commit-merge {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }
  .commit-reverse {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${r.textColor};
  }
`, "getStyles"), pe = rt;
var Rt = {
    parser: se,
    db: v,
    renderer: de,
    styles: pe
};
export { Rt as diagram };
