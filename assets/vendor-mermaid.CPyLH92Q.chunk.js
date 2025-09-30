import { $t as t, A as r, G as e, J as a, S as o, U as i, _ as s, d as c, f as n, j as d, o as h, qt as m, w as l, x as $ } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as y } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as g } from "./vendor-mermaid.Vvvvrg2S.chunk.js";
import { t as p } from "./vendor-mermaid.CNStX6fI.chunk.js";
import { a as x, c as f, g as u } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
import { t as b } from "./vendor-mermaid.BUC4NZqG.chunk.js";
var w = {
	NORMAL: 0,
	REVERSE: 1,
	HIGHLIGHT: 2,
	MERGE: 3,
	CHERRY_PICK: 4
}, B = $.gitGraph, E = y(() => x({
	...B,
	...l().gitGraph
}), "getConfig"), k = new b(() => {
	let t = E(), r = t.mainBranchName, e = t.mainBranchOrder;
	return {
		mainBranchName: r,
		commits: /* @__PURE__ */ new Map(),
		head: null,
		branchConfig: new Map([[r, {
			name: r,
			order: e
		}]]),
		branches: new Map([[r, null]]),
		currBranch: r,
		direction: "LR",
		seq: 0,
		options: {}
	};
});
function C() {
	return u({ length: 7 });
}
function L(t, r) {
	let e = Object.create(null);
	return t.reduce((t, a) => {
		let o = r(a);
		return e[o] || (e[o] = !0, t.push(a)), t;
	}, []);
}
y(C, "getID"), y(L, "uniqBy");
var T = y(function(t) {
	k.records.direction = t;
}, "setDirection"), M = y(function(r) {
	t.debug("options str", r), r = (r = r?.trim()) || "{}";
	try {
		k.records.options = JSON.parse(r);
	} catch (r) {
		t.error("error while parsing gitGraph options", r.message);
	}
}, "setOptions"), v = y(function() {
	return k.records.options;
}, "getOptions"), R = y(function(r) {
	let e = r.msg, a = r.id, o = r.type, s = r.tags;
	t.info("commit", e, a, o, s), t.debug("Entering commit:", e, a, o, s);
	let c = E();
	a = i.sanitizeText(a, c), e = i.sanitizeText(e, c), s = s?.map((t) => i.sanitizeText(t, c));
	let n = {
		id: a || k.records.seq + "-" + C(),
		message: e,
		seq: k.records.seq++,
		type: o ?? w.NORMAL,
		tags: s ?? [],
		parents: null == k.records.head ? [] : [k.records.head.id],
		branch: k.records.currBranch
	};
	k.records.head = n, t.info("main branch", c.mainBranchName), k.records.commits.has(n.id) && t.warn(`Commit ID ${n.id} already exists`), k.records.commits.set(n.id, n), k.records.branches.set(k.records.currBranch, n.id), t.debug("in pushCommit " + n.id);
}, "commit"), P = y(function(r) {
	let e = r.name, a = r.order;
	if (e = i.sanitizeText(e, E()), k.records.branches.has(e)) throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);
	k.records.branches.set(e, null != k.records.head ? k.records.head.id : null), k.records.branchConfig.set(e, {
		name: e,
		order: a
	}), G(e), t.debug("in createBranch");
}, "branch"), I = y((r) => {
	let e = r.branch, a = r.id, o = r.type, s = r.tags, c = E();
	e = i.sanitizeText(e, c), a && (a = i.sanitizeText(a, c));
	let n = k.records.branches.get(k.records.currBranch), d = k.records.branches.get(e), h = n ? k.records.commits.get(n) : void 0, m = d ? k.records.commits.get(d) : void 0;
	if (h && m && h.branch === e) throw Error(`Cannot merge branch '${e}' into itself.`);
	if (k.records.currBranch === e) {
		let t = Error("Incorrect usage of \"merge\". Cannot merge a branch to itself");
		throw t.hash = {
			text: `merge ${e}`,
			token: `merge ${e}`,
			expected: ["branch abc"]
		}, t;
	}
	if (void 0 === h || !h) {
		let t = Error(`Incorrect usage of "merge". Current branch (${k.records.currBranch})has no commits`);
		throw t.hash = {
			text: `merge ${e}`,
			token: `merge ${e}`,
			expected: ["commit"]
		}, t;
	}
	if (!k.records.branches.has(e)) {
		let t = Error("Incorrect usage of \"merge\". Branch to be merged (" + e + ") does not exist");
		throw t.hash = {
			text: `merge ${e}`,
			token: `merge ${e}`,
			expected: [`branch ${e}`]
		}, t;
	}
	if (void 0 === m || !m) {
		let t = Error("Incorrect usage of \"merge\". Branch to be merged (" + e + ") has no commits");
		throw t.hash = {
			text: `merge ${e}`,
			token: `merge ${e}`,
			expected: ["\"commit\""]
		}, t;
	}
	if (h === m) {
		let t = Error("Incorrect usage of \"merge\". Both branches have same head");
		throw t.hash = {
			text: `merge ${e}`,
			token: `merge ${e}`,
			expected: ["branch abc"]
		}, t;
	}
	if (a && k.records.commits.has(a)) {
		let t = Error("Incorrect usage of \"merge\". Commit with id:" + a + " already exists, use different custom id");
		throw t.hash = {
			text: `merge ${e} ${a} ${o} ${s?.join(" ")}`,
			token: `merge ${e} ${a} ${o} ${s?.join(" ")}`,
			expected: [`merge ${e} ${a}_UNIQUE ${o} ${s?.join(" ")}`]
		}, t;
	}
	let l = {
		id: a || `${k.records.seq}-${C()}`,
		message: `merged branch ${e} into ${k.records.currBranch}`,
		seq: k.records.seq++,
		parents: null == k.records.head ? [] : [k.records.head.id, d || ""],
		branch: k.records.currBranch,
		type: w.MERGE,
		customType: o,
		customId: !!a,
		tags: s ?? []
	};
	k.records.head = l, k.records.commits.set(l.id, l), k.records.branches.set(k.records.currBranch, l.id), t.debug(k.records.branches), t.debug("in mergeBranch");
}, "merge"), A = y(function(r) {
	let e = r.id, a = r.targetId, o = r.tags, s = r.parent;
	t.debug("Entering cherryPick:", e, a, o);
	let c = E();
	if (e = i.sanitizeText(e, c), a = i.sanitizeText(a, c), o = o?.map((t) => i.sanitizeText(t, c)), s = i.sanitizeText(s, c), !e || !k.records.commits.has(e)) {
		let t = Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
		throw t.hash = {
			text: `cherryPick ${e} ${a}`,
			token: `cherryPick ${e} ${a}`,
			expected: ["cherry-pick abc"]
		}, t;
	}
	let n = k.records.commits.get(e);
	if (void 0 === n || !n) throw Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
	if (s && !(Array.isArray(n.parents) && n.parents.includes(s))) throw Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
	let d = n.branch;
	if (n.type === w.MERGE && !s) throw Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
	if (!a || !k.records.commits.has(a)) {
		if (d === k.records.currBranch) {
			let t = Error("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
			throw t.hash = {
				text: `cherryPick ${e} ${a}`,
				token: `cherryPick ${e} ${a}`,
				expected: ["cherry-pick abc"]
			}, t;
		}
		let r = k.records.branches.get(k.records.currBranch);
		if (void 0 === r || !r) {
			let t = Error(`Incorrect usage of "cherry-pick". Current branch (${k.records.currBranch})has no commits`);
			throw t.hash = {
				text: `cherryPick ${e} ${a}`,
				token: `cherryPick ${e} ${a}`,
				expected: ["cherry-pick abc"]
			}, t;
		}
		let i = k.records.commits.get(r);
		if (void 0 === i || !i) {
			let t = Error(`Incorrect usage of "cherry-pick". Current branch (${k.records.currBranch})has no commits`);
			throw t.hash = {
				text: `cherryPick ${e} ${a}`,
				token: `cherryPick ${e} ${a}`,
				expected: ["cherry-pick abc"]
			}, t;
		}
		let c = {
			id: k.records.seq + "-" + C(),
			message: `cherry-picked ${n?.message} into ${k.records.currBranch}`,
			seq: k.records.seq++,
			parents: null == k.records.head ? [] : [k.records.head.id, n.id],
			branch: k.records.currBranch,
			type: w.CHERRY_PICK,
			tags: o ? o.filter(Boolean) : [`cherry-pick:${n.id}${n.type === w.MERGE ? `|parent:${s}` : ""}`]
		};
		k.records.head = c, k.records.commits.set(c.id, c), k.records.branches.set(k.records.currBranch, c.id), t.debug(k.records.branches), t.debug("in cherryPick");
	}
}, "cherryPick"), G = y(function(t) {
	if (t = i.sanitizeText(t, E()), k.records.branches.has(t)) {
		k.records.currBranch = t;
		let r = k.records.branches.get(k.records.currBranch);
		void 0 !== r && r ? k.records.head = k.records.commits.get(r) ?? null : k.records.head = null;
	} else {
		let r = Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);
		throw r.hash = {
			text: `checkout ${t}`,
			token: `checkout ${t}`,
			expected: [`branch ${t}`]
		}, r;
	}
}, "checkout");
function O(t, r, e) {
	let a = t.indexOf(r);
	-1 === a ? t.push(e) : t.splice(a, 1, e);
}
function q(r) {
	let e = r.reduce((t, r) => t.seq > r.seq ? t : r, r[0]), a = "";
	r.forEach(function(t) {
		t === e ? a += "	*" : a += "	|";
	});
	let o = [
		a,
		e.id,
		e.seq
	];
	for (let t in k.records.branches) k.records.branches.get(t) === e.id && o.push(t);
	if (t.debug(o.join(" ")), e.parents && 2 == e.parents.length && e.parents[0] && e.parents[1]) {
		let t = k.records.commits.get(e.parents[0]);
		O(r, e, t), e.parents[1] && r.push(k.records.commits.get(e.parents[1]));
	} else {
		if (0 == e.parents.length) return;
		if (e.parents[0]) {
			let t = k.records.commits.get(e.parents[0]);
			O(r, e, t);
		}
	}
	q(r = L(r, (t) => t.id));
}
y(O, "upsert"), y(q, "prettyPrintCommitHistory");
var H = y(function() {
	t.debug(k.records.commits), q([W()[0]]);
}, "prettyPrint"), z = y(function() {
	k.reset(), o();
}, "clear"), j = y(function() {
	return [...k.records.branchConfig.values()].map((t, r) => null !== t.order && void 0 !== t.order ? t : {
		...t,
		order: parseFloat(`0.${r}`)
	}).sort((t, r) => (t.order ?? 0) - (r.order ?? 0)).map(({ name: t }) => ({ name: t }));
}, "getBranchesAsObjArray"), S = y(function() {
	return k.records.branches;
}, "getBranches"), D = y(function() {
	return k.records.commits;
}, "getCommits"), W = y(function() {
	let r = [...k.records.commits.values()];
	return r.forEach(function(r) {
		t.debug(r.id);
	}), r.sort((t, r) => t.seq - r.seq), r;
}, "getCommitsArray"), N = {
	commitType: w,
	getConfig: E,
	setDirection: T,
	setOptions: M,
	getOptions: v,
	commit: R,
	branch: P,
	merge: I,
	cherryPick: A,
	checkout: G,
	prettyPrint: H,
	clear: z,
	getBranchesAsObjArray: j,
	getBranches: S,
	getCommits: D,
	getCommitsArray: W,
	getCurrentBranch: y(function() {
		return k.records.currBranch;
	}, "getCurrentBranch"),
	getDirection: y(function() {
		return k.records.direction;
	}, "getDirection"),
	getHead: y(function() {
		return k.records.head;
	}, "getHead"),
	setAccTitle: n,
	getAccTitle: r,
	getAccDescription: h,
	setAccDescription: c,
	setDiagramTitle: e,
	getDiagramTitle: d
}, F = y((t, r) => {
	for (let e of (g(t, r), t.dir && r.setDirection(t.dir), t.statements)) _(e, r);
}, "populate"), _ = y((r, e) => {
	let a = {
		Commit: y((t) => e.commit(K(t)), "Commit"),
		Branch: y((t) => e.branch(U(t)), "Branch"),
		Merge: y((t) => e.merge(Y(t)), "Merge"),
		Checkout: y((t) => e.checkout(V(t)), "Checkout"),
		CherryPicking: y((t) => e.cherryPick(J(t)), "CherryPicking")
	}[r.$type];
	a ? a(r) : t.error(`Unknown statement type: ${r.$type}`);
}, "parseStatement"), K = y((t) => ({
	id: t.id,
	msg: t.message ?? "",
	type: void 0 !== t.type ? w[t.type] : w.NORMAL,
	tags: t.tags ?? void 0
}), "parseCommit"), U = y((t) => ({
	name: t.name,
	order: t.order ?? 0
}), "parseBranch"), Y = y((t) => ({
	branch: t.branch,
	id: t.id ?? "",
	type: void 0 !== t.type ? w[t.type] : void 0,
	tags: t.tags ?? void 0
}), "parseMerge"), V = y((t) => t.branch, "parseCheckout"), J = y((t) => ({
	id: t.id,
	targetId: "",
	tags: t.tags?.length === 0 ? void 0 : t.tags,
	parent: t.parent
}), "parseCherryPicking"), X = { parse: y(async (r) => {
	let e = await p("gitGraph", r);
	t.debug(e), F(e, N);
}, "parse") }, Q = a()?.gitGraph, Z = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), tr = /* @__PURE__ */ new Map(), te = [], ta = 0, to = "LR", ti = y(() => {
	Z.clear(), tt.clear(), tr.clear(), ta = 0, te = [], to = "LR";
}, "clear"), ts = y((t) => {
	let r = document.createElementNS("http://www.w3.org/2000/svg", "text");
	return ("string" == typeof t ? t.split(/\\n|\n|<br\s*\/?>/gi) : t).forEach((t) => {
		let e = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
		e.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), e.setAttribute("dy", "1em"), e.setAttribute("x", "0"), e.setAttribute("class", "row"), e.textContent = t.trim(), r.appendChild(e);
	}), r;
}, "drawText"), tc = y((t) => {
	let r, e, a;
	return "BT" === to ? (e = y((t, r) => t <= r, "comparisonFunc"), a = Infinity) : (e = y((t, r) => t >= r, "comparisonFunc"), a = 0), t.forEach((t) => {
		let o = "TB" === to || "BT" == to ? tt.get(t)?.y : tt.get(t)?.x;
		void 0 !== o && e(o, a) && (r = t, a = o);
	}), r;
}, "findClosestParent"), tn = y((t) => {
	let r = "", e = Infinity;
	return t.forEach((t) => {
		let a = tt.get(t).y;
		a <= e && (r = t, e = a);
	}), r || void 0;
}, "findClosestParentBT"), td = y((t, r, e) => {
	let a = e, o = e, i = [];
	t.forEach((t) => {
		let e = r.get(t);
		if (!e) throw Error(`Commit not found for key ${t}`);
		e.parents.length ? o = Math.max(a = tm(e), o) : i.push(e), tl(e, a);
	}), a = o, i.forEach((t) => {
		t$(t, a, e);
	}), t.forEach((t) => {
		let e = r.get(t);
		if (e?.parents.length) {
			let t = tn(e.parents);
			(a = tt.get(t).y - 40) <= o && (o = a);
			let r = Z.get(e.branch).pos, i = a - 10;
			tt.set(e.id, {
				x: r,
				y: i
			});
		}
	});
}, "setParallelBTPos"), th = y((t) => {
	let r = tc(t.parents.filter((t) => null !== t));
	if (!r) throw Error(`Closest parent not found for commit ${t.id}`);
	let e = tt.get(r)?.y;
	if (void 0 === e) throw Error(`Closest parent position not found for commit ${t.id}`);
	return e;
}, "findClosestParentPos"), tm = y((t) => th(t) + 40, "calculateCommitPosition"), tl = y((t, r) => {
	let e = Z.get(t.branch);
	if (!e) throw Error(`Branch not found for commit ${t.id}`);
	let a = e.pos, o = r + 10;
	return tt.set(t.id, {
		x: a,
		y: o
	}), {
		x: a,
		y: o
	};
}, "setCommitPosition"), t$ = y((t, r, e) => {
	let a = Z.get(t.branch);
	if (!a) throw Error(`Branch not found for commit ${t.id}`);
	let o = a.pos;
	tt.set(t.id, {
		x: o,
		y: r + e
	});
}, "setRootPosition"), ty = y((t, r, e, a, o, i) => {
	if (i === w.HIGHLIGHT) t.append("rect").attr("x", e.x - 10).attr("y", e.y - 10).attr("width", 20).attr("height", 20).attr("class", `commit ${r.id} commit-highlight${o % 8} ${a}-outer`), t.append("rect").attr("x", e.x - 6).attr("y", e.y - 6).attr("width", 12).attr("height", 12).attr("class", `commit ${r.id} commit${o % 8} ${a}-inner`);
	else if (i === w.CHERRY_PICK) t.append("circle").attr("cx", e.x).attr("cy", e.y).attr("r", 10).attr("class", `commit ${r.id} ${a}`), t.append("circle").attr("cx", e.x - 3).attr("cy", e.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${a}`), t.append("circle").attr("cx", e.x + 3).attr("cy", e.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${a}`), t.append("line").attr("x1", e.x + 3).attr("y1", e.y + 1).attr("x2", e.x).attr("y2", e.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${a}`), t.append("line").attr("x1", e.x - 3).attr("y1", e.y + 1).attr("x2", e.x).attr("y2", e.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${a}`);
	else {
		let s = t.append("circle");
		if (s.attr("cx", e.x), s.attr("cy", e.y), s.attr("r", r.type === w.MERGE ? 9 : 10), s.attr("class", `commit ${r.id} commit${o % 8}`), i === w.MERGE) {
			let i = t.append("circle");
			i.attr("cx", e.x), i.attr("cy", e.y), i.attr("r", 6), i.attr("class", `commit ${a} ${r.id} commit${o % 8}`);
		}
		i === w.REVERSE && t.append("path").attr("d", `M ${e.x - 5},${e.y - 5}L${e.x + 5},${e.y + 5}M${e.x - 5},${e.y + 5}L${e.x + 5},${e.y - 5}`).attr("class", `commit ${a} ${r.id} commit${o % 8}`);
	}
}, "drawCommitBullet"), tg = y((t, r, e, a) => {
	if (r.type !== w.CHERRY_PICK && (r.customId && r.type === w.MERGE || r.type !== w.MERGE) && Q?.showCommitLabel) {
		let o = t.append("g"), i = o.insert("rect").attr("class", "commit-label-bkg"), s = o.append("text").attr("x", a).attr("y", e.y + 25).attr("class", "commit-label").text(r.id), c = s.node()?.getBBox();
		if (c && (i.attr("x", e.posWithOffset - c.width / 2 - 2).attr("y", e.y + 13.5).attr("width", c.width + 4).attr("height", c.height + 4), "TB" === to || "BT" === to ? (i.attr("x", e.x - (c.width + 16 + 5)).attr("y", e.y - 12), s.attr("x", e.x - (c.width + 16)).attr("y", e.y + c.height - 12)) : s.attr("x", e.posWithOffset - c.width / 2), Q.rotateCommitLabel)) if ("TB" === to || "BT" === to) s.attr("transform", "rotate(-45, " + e.x + ", " + e.y + ")"), i.attr("transform", "rotate(-45, " + e.x + ", " + e.y + ")");
		else {
			let t = -7.5 - (c.width + 10) / 25 * 9.5, r = 10 + c.width / 25 * 8.5;
			o.attr("transform", "translate(" + t + ", " + r + ") rotate(-45, " + a + ", " + e.y + ")");
		}
	}
}, "drawCommitLabel"), tp = y((t, r, e, a) => {
	if (r.tags.length > 0) {
		let o = 0, i = 0, s = 0, c = [];
		for (let a of r.tags.reverse()) {
			let r = t.insert("polygon"), n = t.append("circle"), d = t.append("text").attr("y", e.y - 16 - o).attr("class", "tag-label").text(a), h = d.node()?.getBBox();
			if (!h) throw Error("Tag bbox not found");
			i = Math.max(i, h.width), s = Math.max(s, h.height), d.attr("x", e.posWithOffset - h.width / 2), c.push({
				tag: d,
				hole: n,
				rect: r,
				yOffset: o
			}), o += 20;
		}
		for (let { tag: t, hole: r, rect: o, yOffset: n } of c) {
			let c = s / 2, d = e.y - 19.2 - n;
			if (o.attr("class", "tag-label-bkg").attr("points", `
      ${a - i / 2 - 2},${d + 2}  
      ${a - i / 2 - 2},${d - 2}
      ${e.posWithOffset - i / 2 - 4},${d - c - 2}
      ${e.posWithOffset + i / 2 + 4},${d - c - 2}
      ${e.posWithOffset + i / 2 + 4},${d + c + 2}
      ${e.posWithOffset - i / 2 - 4},${d + c + 2}`), r.attr("cy", d).attr("cx", a - i / 2 + 2).attr("r", 1.5).attr("class", "tag-hole"), "TB" === to || "BT" === to) {
				let s = a + n;
				o.attr("class", "tag-label-bkg").attr("points", `
        ${e.x},${s + 2}
        ${e.x},${s - 2}
        ${e.x + 10},${s - c - 2}
        ${e.x + 10 + i + 4},${s - c - 2}
        ${e.x + 10 + i + 4},${s + c + 2}
        ${e.x + 10},${s + c + 2}`).attr("transform", "translate(12,12) rotate(45, " + e.x + "," + a + ")"), r.attr("cx", e.x + 2).attr("cy", s).attr("transform", "translate(12,12) rotate(45, " + e.x + "," + a + ")"), t.attr("x", e.x + 5).attr("y", s + 3).attr("transform", "translate(14,14) rotate(45, " + e.x + "," + a + ")");
			}
		}
	}
}, "drawCommitTags"), tx = y((t) => {
	switch (t.customType ?? t.type) {
		case w.NORMAL: return "commit-normal";
		case w.REVERSE: return "commit-reverse";
		case w.HIGHLIGHT: return "commit-highlight";
		case w.MERGE: return "commit-merge";
		case w.CHERRY_PICK: return "commit-cherry-pick";
		default: return "commit-normal";
	}
}, "getCommitClassType"), tf = y((t, r, e, a) => {
	let o = {
		x: 0,
		y: 0
	};
	if (!(t.parents.length > 0)) return "TB" === r ? 30 : "BT" === r ? (a.get(t.id) ?? o).y - 40 : 0;
	{
		let e = tc(t.parents);
		if (e) {
			let i = a.get(e) ?? o;
			return "TB" === r ? i.y + 40 : "BT" === r ? (a.get(t.id) ?? o).y - 40 : i.x + 40;
		}
	}
	return 0;
}, "calculatePosition"), tu = y((t, r, e) => {
	let a = "BT" === to && e ? r : r + 10, o = "TB" === to || "BT" === to ? a : Z.get(t.branch)?.pos, i = "TB" === to || "BT" === to ? Z.get(t.branch)?.pos : a;
	if (void 0 === i || void 0 === o) throw Error(`Position were undefined for commit ${t.id}`);
	return {
		x: i,
		y: o,
		posWithOffset: a
	};
}, "getCommitPosition"), tb = y((t, r, e) => {
	if (!Q) throw Error("GitGraph config not found");
	let a = t.append("g").attr("class", "commit-bullets"), o = t.append("g").attr("class", "commit-labels"), i = 30 * ("TB" === to || "BT" === to), s = [...r.keys()], c = Q?.parallelCommits ?? !1, n = s.sort(y((t, e) => {
		let a = r.get(t)?.seq, o = r.get(e)?.seq;
		return void 0 !== a && void 0 !== o ? a - o : 0;
	}, "sortKeys"));
	"BT" === to && (c && td(n, r, i), n = n.reverse()), n.forEach((t) => {
		let s = r.get(t);
		if (!s) throw Error(`Commit not found for key ${t}`);
		c && (i = tf(s, to, i, tt));
		let n = tu(s, i, c);
		if (e) {
			let t = tx(s), r = s.customType ?? s.type, e = Z.get(s.branch)?.index ?? 0;
			ty(a, s, n, t, e, r), tg(o, s, n, i), tp(o, s, n, i);
		}
		"TB" === to || "BT" === to ? tt.set(s.id, {
			x: n.x,
			y: n.posWithOffset
		}) : tt.set(s.id, {
			x: n.posWithOffset,
			y: n.y
		}), (i = "BT" === to && c ? i + 40 : i + 40 + 10) > ta && (ta = i);
	});
}, "drawCommits"), tw = y((t, r, e, a, o) => {
	let i = ("TB" === to || "BT" === to ? e.x < a.x : e.y < a.y) ? r.branch : t.branch, s = y((t) => t.branch === i, "isOnBranchToGetCurve"), c = y((e) => e.seq > t.seq && e.seq < r.seq, "isBetweenCommits");
	return [...o.values()].some((t) => c(t) && s(t));
}, "shouldRerouteArrow"), tB = y((t, r, e = 0) => {
	let a = t + Math.abs(t - r) / 2;
	if (e > 5) return a;
	if (te.every((t) => Math.abs(t - a) >= 10)) return te.push(a), a;
	let o = Math.abs(t - r);
	return tB(t, r - o / 5, e + 1);
}, "findLane"), tE = y((t, r, e, a) => {
	let o, i = tt.get(r.id), s = tt.get(e.id);
	if (void 0 === i || void 0 === s) throw Error(`Commit positions not found for commits ${r.id} and ${e.id}`);
	let c = tw(r, e, i, s, a), n = "", d = "", h = 0, m = 0, l = Z.get(e.branch)?.index;
	if (e.type === w.MERGE && r.id !== e.parents[0] && (l = Z.get(r.branch)?.index), c) {
		n = "A 10 10, 0, 0, 0,", d = "A 10 10, 0, 0, 1,", h = 10, m = 10;
		let t = i.y < s.y ? tB(i.y, s.y) : tB(s.y, i.y), e = i.x < s.x ? tB(i.x, s.x) : tB(s.x, i.x);
		"TB" === to ? i.x < s.x ? o = `M ${i.x} ${i.y} L ${e - h} ${i.y} ${d} ${e} ${i.y + m} L ${e} ${s.y - h} ${n} ${e + m} ${s.y} L ${s.x} ${s.y}` : (l = Z.get(r.branch)?.index, o = `M ${i.x} ${i.y} L ${e + h} ${i.y} ${n} ${e} ${i.y + m} L ${e} ${s.y - h} ${d} ${e - m} ${s.y} L ${s.x} ${s.y}`) : "BT" === to ? i.x < s.x ? o = `M ${i.x} ${i.y} L ${e - h} ${i.y} ${n} ${e} ${i.y - m} L ${e} ${s.y + h} ${d} ${e + m} ${s.y} L ${s.x} ${s.y}` : (l = Z.get(r.branch)?.index, o = `M ${i.x} ${i.y} L ${e + h} ${i.y} ${d} ${e} ${i.y - m} L ${e} ${s.y + h} ${n} ${e - m} ${s.y} L ${s.x} ${s.y}`) : i.y < s.y ? o = `M ${i.x} ${i.y} L ${i.x} ${t - h} ${n} ${i.x + m} ${t} L ${s.x - h} ${t} ${d} ${s.x} ${t + m} L ${s.x} ${s.y}` : (l = Z.get(r.branch)?.index, o = `M ${i.x} ${i.y} L ${i.x} ${t + h} ${d} ${i.x + m} ${t} L ${s.x - h} ${t} ${n} ${s.x} ${t - m} L ${s.x} ${s.y}`);
	} else n = "A 20 20, 0, 0, 0,", d = "A 20 20, 0, 0, 1,", h = 20, m = 20, "TB" === to ? (i.x < s.x && (o = e.type === w.MERGE && r.id !== e.parents[0] ? `M ${i.x} ${i.y} L ${i.x} ${s.y - h} ${n} ${i.x + m} ${s.y} L ${s.x} ${s.y}` : `M ${i.x} ${i.y} L ${s.x - h} ${i.y} ${d} ${s.x} ${i.y + m} L ${s.x} ${s.y}`), i.x > s.x && (n = "A 20 20, 0, 0, 0,", d = "A 20 20, 0, 0, 1,", h = 20, m = 20, o = e.type === w.MERGE && r.id !== e.parents[0] ? `M ${i.x} ${i.y} L ${i.x} ${s.y - h} ${d} ${i.x - m} ${s.y} L ${s.x} ${s.y}` : `M ${i.x} ${i.y} L ${s.x + h} ${i.y} ${n} ${s.x} ${i.y + m} L ${s.x} ${s.y}`), i.x === s.x && (o = `M ${i.x} ${i.y} L ${s.x} ${s.y}`)) : "BT" === to ? (i.x < s.x && (o = e.type === w.MERGE && r.id !== e.parents[0] ? `M ${i.x} ${i.y} L ${i.x} ${s.y + h} ${d} ${i.x + m} ${s.y} L ${s.x} ${s.y}` : `M ${i.x} ${i.y} L ${s.x - h} ${i.y} ${n} ${s.x} ${i.y - m} L ${s.x} ${s.y}`), i.x > s.x && (n = "A 20 20, 0, 0, 0,", d = "A 20 20, 0, 0, 1,", h = 20, m = 20, o = e.type === w.MERGE && r.id !== e.parents[0] ? `M ${i.x} ${i.y} L ${i.x} ${s.y + h} ${n} ${i.x - m} ${s.y} L ${s.x} ${s.y}` : `M ${i.x} ${i.y} L ${s.x - h} ${i.y} ${n} ${s.x} ${i.y - m} L ${s.x} ${s.y}`), i.x === s.x && (o = `M ${i.x} ${i.y} L ${s.x} ${s.y}`)) : (i.y < s.y && (o = e.type === w.MERGE && r.id !== e.parents[0] ? `M ${i.x} ${i.y} L ${s.x - h} ${i.y} ${d} ${s.x} ${i.y + m} L ${s.x} ${s.y}` : `M ${i.x} ${i.y} L ${i.x} ${s.y - h} ${n} ${i.x + m} ${s.y} L ${s.x} ${s.y}`), i.y > s.y && (o = e.type === w.MERGE && r.id !== e.parents[0] ? `M ${i.x} ${i.y} L ${s.x - h} ${i.y} ${n} ${s.x} ${i.y - m} L ${s.x} ${s.y}` : `M ${i.x} ${i.y} L ${i.x} ${s.y + h} ${d} ${i.x + m} ${s.y} L ${s.x} ${s.y}`), i.y === s.y && (o = `M ${i.x} ${i.y} L ${s.x} ${s.y}`));
	if (void 0 === o) throw Error("Line definition not found");
	t.append("path").attr("d", o).attr("class", "arrow arrow" + l % 8);
}, "drawArrow"), tk = y((t, r) => {
	let e = t.append("g").attr("class", "commit-arrows");
	[...r.keys()].forEach((t) => {
		let a = r.get(t);
		a.parents && a.parents.length > 0 && a.parents.forEach((t) => {
			tE(e, r.get(t), a, r);
		});
	});
}, "drawArrows"), tC = y((t, r) => {
	let e = t.append("g");
	r.forEach((t, r) => {
		let a = r % 8, o = Z.get(t.name)?.pos;
		if (void 0 === o) throw Error(`Position not found for branch ${t.name}`);
		let i = e.append("line");
		i.attr("x1", 0), i.attr("y1", o), i.attr("x2", ta), i.attr("y2", o), i.attr("class", "branch branch" + a), "TB" === to ? (i.attr("y1", 30), i.attr("x1", o), i.attr("y2", ta), i.attr("x2", o)) : "BT" === to && (i.attr("y1", ta), i.attr("x1", o), i.attr("y2", 30), i.attr("x2", o)), te.push(o);
		let s = ts(t.name), c = e.insert("rect"), n = e.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + a);
		n.node().appendChild(s);
		let d = s.getBBox();
		c.attr("class", "branchLabelBkg label" + a).attr("rx", 4).attr("ry", 4).attr("x", -d.width - 4 - 30 * (Q?.rotateCommitLabel === !0)).attr("y", -d.height / 2 + 8).attr("width", d.width + 18).attr("height", d.height + 4), n.attr("transform", "translate(" + (-d.width - 14 - 30 * (Q?.rotateCommitLabel === !0)) + ", " + (o - d.height / 2 - 1) + ")"), "TB" === to ? (c.attr("x", o - d.width / 2 - 10).attr("y", 0), n.attr("transform", "translate(" + (o - d.width / 2 - 5) + ", 0)")) : "BT" === to ? (c.attr("x", o - d.width / 2 - 10).attr("y", ta), n.attr("transform", "translate(" + (o - d.width / 2 - 5) + ", " + ta + ")")) : c.attr("transform", "translate(-19, " + (o - d.height / 2) + ")");
	});
}, "drawBranches"), tL = y(function(t, r, e, a, o) {
	return Z.set(t, {
		pos: r,
		index: e
	}), r += 50 + 40 * !!o + ("TB" === to || "BT" === to ? a.width / 2 : 0);
}, "setBranchPosition"), tT = {
	parser: X,
	db: N,
	renderer: { draw: y(function(r, e, a, o) {
		if (ti(), t.debug("in gitgraph renderer", r + `
`, "id:", e, a), !Q) throw Error("GitGraph config not found");
		let i = Q.rotateCommitLabel ?? !1, c = o.db;
		tr = c.getCommits();
		let n = c.getBranchesAsObjArray();
		to = c.getDirection();
		let d = m(`[id="${e}"]`), h = 0;
		n.forEach((t, r) => {
			let e = ts(t.name), a = d.append("g"), o = a.insert("g").attr("class", "branchLabel"), s = o.insert("g").attr("class", "label branch-label");
			s.node()?.appendChild(e);
			let c = e.getBBox();
			h = tL(t.name, h, r, c, i), s.remove(), o.remove(), a.remove();
		}), tb(d, tr, !1), Q.showBranches && tC(d, n), tk(d, tr), tb(d, tr, !0), f.insertTitle(d, "gitTitleText", Q.titleTopMargin ?? 0, c.getDiagramTitle()), s(void 0, d, Q.diagramPadding, Q.useMaxWidth);
	}, "draw") },
	styles: y((t) => `
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
	].map((r) => `
        .branch-label${r} { fill: ${t["gitBranchLabel" + r]}; }
        .commit${r} { stroke: ${t["git" + r]}; fill: ${t["git" + r]}; }
        .commit-highlight${r} { stroke: ${t["gitInv" + r]}; fill: ${t["gitInv" + r]}; }
        .label${r}  { fill: ${t["git" + r]}; }
        .arrow${r} { stroke: ${t["git" + r]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`, "getStyles")
};
export { tT as diagram };
