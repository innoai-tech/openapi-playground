import { n as e, r as t, t as n } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { $ as r, $t as i, Bt as l, E as o, F as a, H as u, J as s, Jt as c, Kt as d, M as p, N as f, O as h, P as m, Vt as g, Y as y, Yt as v, Zt as x, a as k, c as b, ct as C, dt as S, en as w, et as A, g as L, h as T, it as E, k as D, l as M, m as I, n as N, nn as O, nt as P, o as z, p as F, r as _, rn as R, rt as H, s as V, t as B, tt as $, u as j, v as U, vt as q, w as W, y as J, yt as Z } from "./vendor-innoai-tech-vuekit.DEP5W_Ql.chunk.js";
import { d as K, f as X, l as Q, n as Y, o as G, r as ee, s as et, t as en, u as er } from "./vendor-innoai-tech-vueuikit.C3vqbvrO.chunk.js";
var ei, el, eo = {};
function ea(e, t, n) {
	var r;
	if ((r = e) && "object" == typeof r) {
		if ("value" in e) return "html" !== e.type || n ? e.value : "";
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return eu(e.children, t, n);
	}
	return Array.isArray(e) ? eu(e, t, n) : "";
}
function eu(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = ea(e[i], t, n);
	return r.join("");
}
var es = document.createElement("i");
function ec(e) {
	let t = "&" + e + ";";
	es.innerHTML = t;
	let n = es.textContent;
	return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n;
}
function ed(e, t, n, r) {
	let i, l = e.length, o = 0;
	if (t = t < 0 ? -t > l ? 0 : l + t : t > l ? l : t, n = n > 0 ? n : 0, r.length < 1e4) (i = Array.from(r)).unshift(t, n), e.splice(...i);
	else for (n && e.splice(t, n); o < r.length;) (i = r.slice(o, o + 1e4)).unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4;
}
function ep(e, t) {
	return e.length > 0 ? (ed(e, e.length, 0, t), e) : t;
}
var ef = {}.hasOwnProperty;
function eh(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) (function(e, t) {
		let n;
		for (n in t) {
			let r, i = (ef.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
			if (l) for (r in l) {
				ef.call(i, r) || (i[r] = []);
				let e = l[r];
				(function(e, t) {
					let n = -1, r = [];
					for (; ++n < t.length;) ("after" === t[n].add ? e : r).push(t[n]);
					ed(e, 0, 0, r);
				})(i[r], Array.isArray(e) ? e : e ? [e] : []);
			}
		}
	})(t, e[n]);
	return t;
}
function em(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
function eg(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
let ey = eD(/[A-Za-z]/), ev = eD(/[\dA-Za-z]/), ex = eD(/[#-'*+\--9=?A-Z^-~]/);
function ek(e) {
	return null !== e && (e < 32 || 127 === e);
}
let eb = eD(/\d/), eC = eD(/[\dA-Fa-f]/), eS = eD(/[!-/:-@[-`{-~]/);
function ew(e) {
	return null !== e && e < -2;
}
function eA(e) {
	return null !== e && (e < 0 || 32 === e);
}
function eL(e) {
	return -2 === e || -1 === e || 32 === e;
}
let eT = eD(/\p{P}|\p{S}/u), eE = eD(/\s/);
function eD(e) {
	return function(t) {
		return null !== t && t > -1 && e.test(String.fromCharCode(t));
	};
}
function eM(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let l = e.charCodeAt(n), o = "";
		if (37 === l && ev(e.charCodeAt(n + 1)) && ev(e.charCodeAt(n + 2))) i = 2;
		else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
		else if (l > 55295 && l < 57344) {
			let t = e.charCodeAt(n + 1);
			l < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(l, t), i = 1) : o = "�";
		} else o = String.fromCharCode(l);
		o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
	}
	return t.join("") + e.slice(r);
}
function eI(e, t, n, r) {
	let i = r ? r - 1 : Infinity, l = 0;
	return function(r) {
		return eL(r) ? (e.enter(n), function r(o) {
			return eL(o) && l++ < i ? (e.consume(o), r) : (e.exit(n), t(o));
		}(r)) : t(r);
	};
}
let eN = { tokenize: function(e) {
	let t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
		return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), eI(e, n, "linePrefix"));
	}, function(n) {
		return e.enter("paragraph"), function n(r) {
			let i = e.enter("chunkText", {
				contentType: "text",
				previous: t
			});
			return t && (t.next = i), t = i, function t(r) {
				if (null === r) {
					e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
					return;
				}
				return ew(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t);
			}(r);
		}(n);
	});
	return n;
} }, eO = { tokenize: function(e) {
	let t, n, r, i = this, l = [], o = 0;
	return a;
	function a(t) {
		if (o < l.length) {
			let n = l[o];
			return i.containerState = n[1], e.attempt(n[0].continuation, u, s)(t);
		}
		return s(t);
	}
	function u(e) {
		if (o++, i.containerState._closeFlow) {
			let n;
			i.containerState._closeFlow = void 0, t && y();
			let r = i.events.length, l = r;
			for (; l--;) if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
				n = i.events[l][1].end;
				break;
			}
			g(o);
			let a = r;
			for (; a < i.events.length;) i.events[a][1].end = { ...n }, a++;
			return ed(i.events, l + 1, 0, i.events.slice(r)), i.events.length = a, s(e);
		}
		return a(e);
	}
	function s(n) {
		if (o === l.length) {
			if (!t) return p(n);
			if (t.currentConstruct && t.currentConstruct.concrete) return h(n);
			i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
		}
		return i.containerState = {}, e.check(eP, c, d)(n);
	}
	function c(e) {
		return t && y(), g(o), p(e);
	}
	function d(e) {
		return i.parser.lazy[i.now().line] = o !== l.length, r = i.now().offset, h(e);
	}
	function p(t) {
		return i.containerState = {}, e.attempt(eP, f, h)(t);
	}
	function f(e) {
		return o++, l.push([i.currentConstruct, i.containerState]), p(e);
	}
	function h(r) {
		if (null === r) {
			t && y(), g(0), e.consume(r);
			return;
		}
		return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
			_tokenizer: t,
			contentType: "flow",
			previous: n
		}), function t(n) {
			if (null === n) {
				m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
				return;
			}
			return ew(n) ? (e.consume(n), m(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, a) : (e.consume(n), t);
		}(r);
	}
	function m(e, l) {
		let a = i.sliceStream(e);
		if (l && a.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(a), i.parser.lazy[e.start.line]) {
			let e, n, l = t.events.length;
			for (; l--;) if (t.events[l][1].start.offset < r && (!t.events[l][1].end || t.events[l][1].end.offset > r)) return;
			let a = i.events.length, u = a;
			for (; u--;) if ("exit" === i.events[u][0] && "chunkFlow" === i.events[u][1].type) {
				if (e) {
					n = i.events[u][1].end;
					break;
				}
				e = !0;
			}
			for (g(o), l = a; l < i.events.length;) i.events[l][1].end = { ...n }, l++;
			ed(i.events, u + 1, 0, i.events.slice(a)), i.events.length = l;
		}
	}
	function g(t) {
		let n = l.length;
		for (; n-- > t;) {
			let t = l[n];
			i.containerState = t[1], t[0].exit.call(i, e);
		}
		l.length = t;
	}
	function y() {
		t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0;
	}
} };
var eP = { tokenize: function(e, t, n) {
	return eI(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
} };
function ez(e) {
	return null === e || eA(e) || eE(e) ? 1 : eT(e) ? 2 : void 0;
}
function eF(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let l = e[i].resolveAll;
		l && !r.includes(l) && (t = l(t, n), r.push(l));
	}
	return t;
}
let e_ = {
	name: "attention",
	resolveAll: function(e, t) {
		let n, r, i, l, o, a, u, s, c = -1;
		for (; ++c < e.length;) if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close) {
			for (n = c; n--;) if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)) {
				if ((e[n][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
				a = e[n][1].end.offset - e[n][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
				let d = { ...e[n][1].end }, p = { ...e[c][1].start };
				eR(d, -a), eR(p, a), l = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: d,
					end: { ...e[n][1].end }
				}, o = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: { ...e[c][1].start },
					end: p
				}, i = {
					type: a > 1 ? "strongText" : "emphasisText",
					start: { ...e[n][1].end },
					end: { ...e[c][1].start }
				}, r = {
					type: a > 1 ? "strong" : "emphasis",
					start: { ...l.start },
					end: { ...o.end }
				}, e[n][1].end = { ...l.start }, e[c][1].start = { ...o.end }, u = [], e[n][1].end.offset - e[n][1].start.offset && (u = ep(u, [[
					"enter",
					e[n][1],
					t
				], [
					"exit",
					e[n][1],
					t
				]])), u = ep(u, [
					[
						"enter",
						r,
						t
					],
					[
						"enter",
						l,
						t
					],
					[
						"exit",
						l,
						t
					],
					[
						"enter",
						i,
						t
					]
				]), u = ep(u, eF(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t)), u = ep(u, [
					[
						"exit",
						i,
						t
					],
					[
						"enter",
						o,
						t
					],
					[
						"exit",
						o,
						t
					],
					[
						"exit",
						r,
						t
					]
				]), e[c][1].end.offset - e[c][1].start.offset ? (s = 2, u = ep(u, [[
					"enter",
					e[c][1],
					t
				], [
					"exit",
					e[c][1],
					t
				]])) : s = 0, ed(e, n - 1, c - n + 3, u), c = n + u.length - s - 2;
				break;
			}
		}
		for (c = -1; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
		return e;
	},
	tokenize: function(e, t) {
		let n, r = this.parser.constructs.attentionMarkers.null, i = this.previous, l = ez(i);
		return function(o) {
			return n = o, e.enter("attentionSequence"), function o(a) {
				if (a === n) return e.consume(a), o;
				let u = e.exit("attentionSequence"), s = ez(a), c = !s || 2 === s && l || r.includes(a), d = !l || 2 === l && s || r.includes(i);
				return u._open = !!(42 === n ? c : c && (l || !d)), u._close = !!(42 === n ? d : d && (s || !c)), t(a);
			}(o);
		};
	}
};
function eR(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
let eH = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return eL(t) ? eI(e, r, "linePrefix")(t) : r(t);
		};
		function r(e) {
			return null === e || ew(e) ? t(e) : n(e);
		}
	}
}, eV = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return eL(t) ? eI(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t);
		};
		function i(r) {
			return e.attempt(eV, t, n)(r);
		}
	} },
	exit: function(e) {
		e.exit("blockQuote");
	},
	name: "blockQuote",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			if (62 === t) {
				let n = r.containerState;
				return n.open || (e.enter("blockQuote", { _container: !0 }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i;
			}
			return n(t);
		};
		function i(n) {
			return eL(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
		}
	}
}, eB = {
	name: "characterEscape",
	tokenize: function(e, t, n) {
		return function(t) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r;
		};
		function r(r) {
			return eS(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
		}
	}
}, e$ = {
	name: "characterReference",
	tokenize: function(e, t, n) {
		let r, i, l = this, o = 0;
		return function(t) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), a;
		};
		function a(t) {
			return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), r = 31, i = ev, s(t));
		}
		function u(t) {
			return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = eC, s) : (e.enter("characterReferenceValue"), r = 7, i = eb, s(t));
		}
		function s(a) {
			if (59 === a && o) {
				let r = e.exit("characterReferenceValue");
				return i !== ev || ec(l.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"), e.consume(a), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(a);
			}
			return i(a) && o++ < r ? (e.consume(a), s) : n(a);
		}
	}
};
var ej = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let eU = {
	concrete: !0,
	name: "codeFenced",
	tokenize: function(e, t, n) {
		let r, i = this, l = {
			partial: !0,
			tokenize: function(e, t, n) {
				let l = 0;
				return function(t) {
					return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o;
				};
				function o(t) {
					return e.enter("codeFencedFence"), eL(t) ? eI(e, u, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : u(t);
				}
				function u(t) {
					return t === r ? (e.enter("codeFencedFenceSequence"), function t(i) {
						return i === r ? (l++, e.consume(i), t) : l >= a ? (e.exit("codeFencedFenceSequence"), eL(i) ? eI(e, s, "whitespace")(i) : s(i)) : n(i);
					}(t)) : n(t);
				}
				function s(r) {
					return null === r || ew(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
				}
			}
		}, o = 0, a = 0;
		return function(t) {
			var l = t;
			let s = i.events[i.events.length - 1];
			return o = s && "linePrefix" === s[1].type ? s[2].sliceSerialize(s[1], !0).length : 0, r = l, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), function t(i) {
				return i === r ? (a++, e.consume(i), t) : a < 3 ? n(i) : (e.exit("codeFencedFenceSequence"), eL(i) ? eI(e, u, "whitespace")(i) : u(i));
			}(l);
		};
		function u(l) {
			return null === l || ew(l) ? (e.exit("codeFencedFence"), i.interrupt ? t(l) : e.check(ej, c, h)(l)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || ew(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(i)) : eL(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), eI(e, s, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(l));
		}
		function s(t) {
			return null === t || ew(t) ? u(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || ew(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(t));
		}
		function c(t) {
			return e.attempt(l, h, d)(t);
		}
		function d(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p;
		}
		function p(t) {
			return o > 0 && eL(t) ? eI(e, f, "linePrefix", o + 1)(t) : f(t);
		}
		function f(t) {
			return null === t || ew(t) ? e.check(ej, c, h)(t) : (e.enter("codeFlowValue"), function t(n) {
				return null === n || ew(n) ? (e.exit("codeFlowValue"), f(n)) : (e.consume(n), t);
			}(t));
		}
		function h(n) {
			return e.exit("codeFenced"), t(n);
		}
	}
}, eq = {
	name: "codeIndented",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("codeIndented"), eI(e, i, "linePrefix", 5)(t);
		};
		function i(t) {
			let i = r.events[r.events.length - 1];
			return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
				return null === n ? l(n) : ew(n) ? e.attempt(eW, t, l)(n) : (e.enter("codeFlowValue"), function n(r) {
					return null === r || ew(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n);
				}(n));
			}(t) : n(t);
		}
		function l(n) {
			return e.exit("codeIndented"), t(n);
		}
	}
};
var eW = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return i;
		function i(t) {
			return r.parser.lazy[r.now().line] ? n(t) : ew(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : eI(e, l, "linePrefix", 5)(t);
		}
		function l(e) {
			let l = r.events[r.events.length - 1];
			return l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(e) : ew(e) ? i(e) : n(e);
		}
	}
}, eJ = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = null == t ? Infinity : t;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		this.setCursor(Math.trunc(e));
		let r = this.right.splice(this.right.length - (t || 0), Infinity);
		return n && eZ(this.left, n), r.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), eZ(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), eZ(this.right, e.reverse());
	}
	setCursor(e) {
		if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			eZ(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			eZ(this.left, t.reverse());
		}
	}
};
function eZ(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function eK(e) {
	let t, n, r, i, l, o, a, u = {}, s = -1, c = new eJ(e);
	for (; ++s < c.length;) {
		for (; s in u;) s = u[s];
		if (t = c.get(s), s && "chunkFlow" === t[1].type && "listItemPrefix" === c.get(s - 1)[1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type)) for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
		if ("enter" === t[0]) t[1].contentType && (Object.assign(u, function(e, t) {
			let n, r, i = e.get(t)[1], l = e.get(t)[2], o = t - 1, a = [], u = i._tokenizer;
			!u && (u = l.parser[i.contentType](i.start), i._contentTypeTextTrailing && (u._contentTypeTextTrailing = !0));
			let s = u.events, c = [], d = {}, p = -1, f = i, h = 0, m = 0, g = [0];
			for (; f;) {
				for (; e.get(++o)[1] !== f;);
				a.push(o), !f._tokenizer && (n = l.sliceStream(f), f.next || n.push(null), r && u.defineSkip(f.start), f._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(n), f._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), r = f, f = f.next;
			}
			for (f = i; ++p < s.length;) "exit" === s[p][0] && "enter" === s[p - 1][0] && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (m = p + 1, g.push(m), f._tokenizer = void 0, f.previous = void 0, f = f.next);
			for (u.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : g.pop(), p = g.length; p--;) {
				let t = s.slice(g[p], g[p + 1]), n = a.pop();
				c.push([n, n + t.length - 1]), e.splice(n, 2, t);
			}
			for (c.reverse(), p = -1; ++p < c.length;) d[h + c[p][0]] = h + c[p][1], h += c[p][1] - c[p][0] - 1;
			return d;
		}(c, s)), s = u[s], a = !0);
		else if (t[1]._container) {
			for (r = s, n = void 0; r--;) if ("lineEnding" === (i = c.get(r))[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (c.get(n)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
			else if ("linePrefix" === i[1].type || "listItemIndent" === i[1].type);
			else break;
			n && (t[1].end = { ...c.get(n)[1].start }, (l = c.slice(n, s)).unshift(t), c.splice(n, s - n + 1, l));
		}
	}
	return ed(e, 0, Infinity, c.slice(0)), !a;
}
let eX = {
	resolve: function(e) {
		return eK(e), e;
	},
	tokenize: function(e, t) {
		let n;
		return function(t) {
			return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), r(t);
		};
		function r(t) {
			return null === t ? i(t) : ew(t) ? e.check(eQ, l, i)(t) : (e.consume(t), r);
		}
		function i(n) {
			return e.exit("chunkContent"), e.exit("content"), t(n);
		}
		function l(t) {
			return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
				contentType: "content",
				previous: n
			}), n = n.next, r;
		}
	}
};
var eQ = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), eI(e, i, "linePrefix");
		};
		function i(i) {
			if (null === i || ew(i)) return n(i);
			let l = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
		}
	}
};
function eY(e, t, n, r, i, l, o, a, u) {
	let s = u || Infinity, c = 0;
	return function(t) {
		return 60 === t ? (e.enter(r), e.enter(i), e.enter(l), e.consume(t), e.exit(l), d) : null === t || 32 === t || 41 === t || ek(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", { contentType: "string" }), h(t));
	};
	function d(n) {
		return 62 === n ? (e.enter(l), e.consume(n), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return 62 === t ? (e.exit("chunkString"), e.exit(a), d(t)) : null === t || 60 === t || ew(t) ? n(t) : (e.consume(t), 92 === t ? f : p);
	}
	function f(t) {
		return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !c && (null === i || 41 === i || eA(i)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(i)) : c < s && 40 === i ? (e.consume(i), c++, h) : 41 === i ? (e.consume(i), c--, h) : null === i || 32 === i || 40 === i || ek(i) ? n(i) : (e.consume(i), 92 === i ? m : h);
	}
	function m(t) {
		return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
	}
}
function eG(e, t, n, r, i, l) {
	let o, a = this, u = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(l), s;
	};
	function s(d) {
		return u > 999 || null === d || 91 === d || 93 === d && !o || 94 === d && !u && "_hiddenFootnoteSupport" in a.parser.constructs ? n(d) : 93 === d ? (e.exit(l), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : ew(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), s) : (e.enter("chunkString", { contentType: "string" }), c(d));
	}
	function c(t) {
		return null === t || 91 === t || 93 === t || ew(t) || u++ > 999 ? (e.exit("chunkString"), s(t)) : (e.consume(t), o || (o = !eL(t)), 92 === t ? d : c);
	}
	function d(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, c) : c(t);
	}
}
function e1(e, t, n, r, i, l) {
	let o;
	return function(t) {
		return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, a) : n(t);
	};
	function a(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), u(n));
	}
	function u(t) {
		return t === o ? (e.exit(l), a(o)) : null === t ? n(t) : ew(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), eI(e, u, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), s(t));
	}
	function s(t) {
		return t === o || null === t || ew(t) ? (e.exit("chunkString"), u(t)) : (e.consume(t), 92 === t ? c : s);
	}
	function c(t) {
		return t === o || 92 === t ? (e.consume(t), s) : s(t);
	}
}
function e0(e, t) {
	let n;
	return function r(i) {
		return ew(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : eL(i) ? eI(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	};
}
var e2 = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return eA(t) ? e0(e, r)(t) : n(t);
		};
		function r(t) {
			return e1(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
		}
		function i(t) {
			return eL(t) ? eI(e, l, "whitespace")(t) : l(t);
		}
		function l(e) {
			return null === e || ew(e) ? t(e) : n(e);
		}
	}
};
let e3 = [
	"address",
	"article",
	"aside",
	"base",
	"basefont",
	"blockquote",
	"body",
	"caption",
	"center",
	"col",
	"colgroup",
	"dd",
	"details",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hr",
	"html",
	"iframe",
	"legend",
	"li",
	"link",
	"main",
	"menu",
	"menuitem",
	"nav",
	"noframes",
	"ol",
	"optgroup",
	"option",
	"p",
	"param",
	"search",
	"section",
	"summary",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"title",
	"tr",
	"track",
	"ul"
], e4 = [
	"pre",
	"script",
	"style",
	"textarea"
];
var e5 = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(eH, t, n);
		};
	}
}, e9 = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return ew(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : n(t);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let e6 = {
	name: "labelEnd",
	resolveAll: function(e) {
		let t = -1, n = [];
		for (; ++t < e.length;) {
			let r = e[t][1];
			if (n.push(e[t]), "labelImage" === r.type || "labelLink" === r.type || "labelEnd" === r.type) {
				let e = "labelImage" === r.type ? 4 : 2;
				r.type = "data", t += e;
			}
		}
		return e.length !== n.length && ed(e, 0, e.length, n), e;
	},
	resolveTo: function(e, t) {
		let n, r, i, l, o = e.length, a = 0;
		for (; o--;) if (n = e[o][1], r) {
			if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
			"enter" === e[o][0] && "labelLink" === n.type && (n._inactive = !0);
		} else if (i) {
			if ("enter" === e[o][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = o, "labelLink" !== n.type)) {
				a = 2;
				break;
			}
		} else "labelEnd" === n.type && (i = o);
		let u = {
			type: "labelLink" === e[r][1].type ? "link" : "image",
			start: { ...e[r][1].start },
			end: { ...e[e.length - 1][1].end }
		}, s = {
			type: "label",
			start: { ...e[r][1].start },
			end: { ...e[i][1].end }
		}, c = {
			type: "labelText",
			start: { ...e[r + a + 2][1].end },
			end: { ...e[i - 2][1].start }
		};
		return l = ep(l = [[
			"enter",
			u,
			t
		], [
			"enter",
			s,
			t
		]], e.slice(r + 1, r + a + 3)), l = ep(l, [[
			"enter",
			c,
			t
		]]), l = ep(l, eF(t.parser.constructs.insideSpan.null, e.slice(r + a + 4, i - 3), t)), l = ep(l, [
			[
				"exit",
				c,
				t
			],
			e[i - 2],
			e[i - 1],
			[
				"exit",
				s,
				t
			]
		]), l = ep(l, e.slice(i + 1)), l = ep(l, [[
			"exit",
			u,
			t
		]]), ed(e, r, e.length, l), e;
	},
	tokenize: function(e, t, n) {
		let r, i, l = this, o = l.events.length;
		for (; o--;) if (("labelImage" === l.events[o][1].type || "labelLink" === l.events[o][1].type) && !l.events[o][1]._balanced) {
			r = l.events[o][1];
			break;
		}
		return function(t) {
			return r ? r._inactive ? c(t) : (i = l.parser.defined.includes(eg(l.sliceSerialize({
				start: r.end,
				end: l.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(t);
		};
		function a(t) {
			return 40 === t ? e.attempt(e8, s, i ? s : c)(t) : 91 === t ? e.attempt(e7, s, i ? u : c)(t) : i ? s(t) : c(t);
		}
		function u(t) {
			return e.attempt(te, s, c)(t);
		}
		function s(e) {
			return t(e);
		}
		function c(e) {
			return r._balanced = !0, n(e);
		}
	}
};
var e8 = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r;
	};
	function r(t) {
		return eA(t) ? e0(e, i)(t) : i(t);
	}
	function i(t) {
		return 41 === t ? s(t) : eY(e, l, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function l(t) {
		return eA(t) ? e0(e, a)(t) : s(t);
	}
	function o(e) {
		return n(e);
	}
	function a(t) {
		return 34 === t || 39 === t || 40 === t ? e1(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : s(t);
	}
	function u(t) {
		return eA(t) ? e0(e, s)(t) : s(t);
	}
	function s(r) {
		return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
} }, e7 = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return eG.call(r, e, i, l, "reference", "referenceMarker", "referenceString")(t);
	};
	function i(e) {
		return r.parser.defined.includes(eg(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function l(e) {
		return n(e);
	}
} }, te = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r;
	};
	function r(r) {
		return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
} };
let tt = {
	name: "labelStartImage",
	resolveAll: e6.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i;
		};
		function i(t) {
			return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), l) : n(t);
		}
		function l(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, tn = {
	name: "labelStartLink",
	resolveAll: e6.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i;
		};
		function i(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, tr = {
	name: "lineEnding",
	tokenize: function(e, t) {
		return function(n) {
			return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), eI(e, t, "linePrefix");
		};
	}
}, ti = {
	name: "thematicBreak",
	tokenize: function(e, t, n) {
		let r, i = 0;
		return function(l) {
			var o;
			return e.enter("thematicBreak"), r = o = l, function l(o) {
				return o === r ? (e.enter("thematicBreakSequence"), function t(n) {
					return n === r ? (e.consume(n), i++, t) : (e.exit("thematicBreakSequence"), eL(n) ? eI(e, l, "whitespace")(n) : l(n));
				}(o)) : i >= 3 && (null === o || ew(o)) ? (e.exit("thematicBreak"), t(o)) : n(o);
			}(o);
		};
	}
}, tl = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return r.containerState._closeFlow = void 0, e.check(eH, function(n) {
			return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, eI(e, t, "listItemIndent", r.containerState.size + 1)(n);
		}, function(n) {
			return r.containerState.furtherBlankLines || !eL(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ta, t, i)(n));
		});
		function i(i) {
			return r.containerState._closeFlow = !0, r.interrupt = void 0, eI(e, e.attempt(tl, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
		}
	} },
	exit: function(e) {
		e.exit(this.containerState.type);
	},
	name: "list",
	tokenize: function(e, t, n) {
		let r = this, i = r.events[r.events.length - 1], l = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
		return function(t) {
			let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
			if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : eb(t)) {
				if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(ti, n, a)(t) : a(t);
				if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), function t(i) {
					return eb(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), a(i)) : n(i);
				}(t);
			}
			return n(t);
		};
		function a(t) {
			return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(eH, r.interrupt ? n : u, e.attempt(to, c, s));
		}
		function u(e) {
			return r.containerState.initialBlankLine = !0, l++, c(e);
		}
		function s(t) {
			return eL(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), c) : n(t);
		}
		function c(n) {
			return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
		}
	}
};
var to = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return eI(e, function(e) {
			let i = r.events[r.events.length - 1];
			return !eL(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e);
		}, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	}
}, ta = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return eI(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
		}, "listItemIndent", r.containerState.size + 1);
	}
};
let tu = {
	name: "setextUnderline",
	resolveTo: function(e, t) {
		let n, r, i, l = e.length;
		for (; l--;) if ("enter" === e[l][0]) {
			if ("content" === e[l][1].type) {
				n = l;
				break;
			}
			"paragraph" === e[l][1].type && (r = l);
		} else "content" === e[l][1].type && e.splice(l, 1), i || "definition" !== e[l][1].type || (i = l);
		let o = {
			type: "setextHeading",
			start: { ...e[n][1].start },
			end: { ...e[e.length - 1][1].end }
		};
		return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, [
			"enter",
			o,
			t
		]), e.splice(i + 1, 0, [
			"exit",
			e[n][1],
			t
		]), e[n][1].end = { ...e[i][1].end }) : e[n][1] = o, e.push([
			"exit",
			o,
			t
		]), e;
	},
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var o;
			let a, u = i.events.length;
			for (; u--;) if ("lineEnding" !== i.events[u][1].type && "linePrefix" !== i.events[u][1].type && "content" !== i.events[u][1].type) {
				a = "paragraph" === i.events[u][1].type;
				break;
			}
			return !i.parser.lazy[i.now().line] && (i.interrupt || a) ? (e.enter("setextHeadingLine"), r = t, o = t, e.enter("setextHeadingLineSequence"), function t(n) {
				return n === r ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), eL(n) ? eI(e, l, "lineSuffix")(n) : l(n));
			}(o)) : n(t);
		};
		function l(r) {
			return null === r || ew(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
		}
	}
}, ts = { tokenize: function(e) {
	let t = this, n = e.attempt(eH, function(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n);
	}, e.attempt(this.parser.constructs.flowInitial, r, eI(e, e.attempt(this.parser.constructs.flow, r, e.attempt(eX, r)), "linePrefix")));
	return n;
	function r(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n);
	}
} }, tc = { resolveAll: th() }, td = tf("string"), tp = tf("text");
function tf(e) {
	return {
		resolveAll: th("text" === e ? tm : void 0),
		tokenize: function(t) {
			let n = this, r = this.parser.constructs[e], i = t.attempt(r, l, o);
			return l;
			function l(e) {
				return u(e) ? i(e) : o(e);
			}
			function o(e) {
				return null === e ? void t.consume(e) : (t.enter("data"), t.consume(e), a);
			}
			function a(e) {
				return u(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
			}
			function u(e) {
				if (null === e) return !0;
				let t = r[e], i = -1;
				if (t) for (; ++i < t.length;) {
					let e = t[i];
					if (!e.previous || e.previous.call(n, n.previous)) return !0;
				}
				return !1;
			}
		}
	};
}
function th(e) {
	return function(t, n) {
		let r, i = -1;
		for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
		return e ? e(t, n) : t;
	};
}
function tm(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
		let r, i = e[n - 1][1], l = t.sliceStream(i), o = l.length, a = -1, u = 0;
		for (; o--;) {
			let e = l[o];
			if ("string" == typeof e) {
				for (a = e.length; 32 === e.charCodeAt(a - 1);) u++, a--;
				if (a) break;
				a = -1;
			} else if (-2 === e) r = !0, u++;
			else if (-1 === e);
			else {
				o++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (u = 0), u) {
			let l = {
				type: n === e.length || r || u < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: o ? a : i.start._bufferIndex + a,
					_index: i.start._index + o,
					line: i.end.line,
					column: i.end.column - u,
					offset: i.end.offset - u
				},
				end: { ...i.end }
			};
			i.end = { ...l.start }, i.start.offset === i.end.offset ? Object.assign(i, l) : (e.splice(n, 0, [
				"enter",
				l,
				t
			], [
				"exit",
				l,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
var tg = e({
	attentionMarkers: () => tw,
	contentInitial: () => tv,
	disable: () => tA,
	document: () => ty,
	flow: () => tk,
	flowInitial: () => tx,
	insideSpan: () => tS,
	string: () => tb,
	text: () => tC
});
let ty = {
	42: tl,
	43: tl,
	45: tl,
	48: tl,
	49: tl,
	50: tl,
	51: tl,
	52: tl,
	53: tl,
	54: tl,
	55: tl,
	56: tl,
	57: tl,
	62: eV
}, tv = { 91: {
	name: "definition",
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var r;
			return e.enter("definition"), r = t, eG.call(i, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r);
		};
		function l(t) {
			return (r = eg(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o) : n(t);
		}
		function o(t) {
			return eA(t) ? e0(e, a)(t) : a(t);
		}
		function a(t) {
			return eY(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
		}
		function u(t) {
			return e.attempt(e2, s, s)(t);
		}
		function s(t) {
			return eL(t) ? eI(e, c, "whitespace")(t) : c(t);
		}
		function c(l) {
			return null === l || ew(l) ? (e.exit("definition"), i.parser.defined.push(r), t(l)) : n(l);
		}
	}
} }, tx = {
	[-2]: eq,
	[-1]: eq,
	32: eq
}, tk = {
	35: {
		name: "headingAtx",
		resolve: function(e, t) {
			let n, r, i = e.length - 2, l = 3;
			return "whitespace" === e[3][1].type && (l += 2), i - 2 > l && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (l === i - 1 || i - 4 > l && "whitespace" === e[i - 2][1].type) && (i -= l + 1 === i ? 2 : 4), i > l && (n = {
				type: "atxHeadingText",
				start: e[l][1].start,
				end: e[i][1].end
			}, r = {
				type: "chunkText",
				start: e[l][1].start,
				end: e[i][1].end,
				contentType: "text"
			}, ed(e, l, i - l + 1, [
				[
					"enter",
					n,
					t
				],
				[
					"enter",
					r,
					t
				],
				[
					"exit",
					r,
					t
				],
				[
					"exit",
					n,
					t
				]
			])), e;
		},
		tokenize: function(e, t, n) {
			let r = 0;
			return function(i) {
				var l;
				return e.enter("atxHeading"), l = i, e.enter("atxHeadingSequence"), function i(l) {
					return 35 === l && r++ < 6 ? (e.consume(l), i) : null === l || eA(l) ? (e.exit("atxHeadingSequence"), function n(r) {
						return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
							return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r));
						}(r)) : null === r || ew(r) ? (e.exit("atxHeading"), t(r)) : eL(r) ? eI(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
							return null === r || 35 === r || eA(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t);
						}(r));
					}(l)) : n(l);
				}(l);
			};
		}
	},
	42: ti,
	45: [tu, ti],
	60: {
		concrete: !0,
		name: "htmlFlow",
		resolveTo: function(e) {
			let t = e.length;
			for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
			return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
		},
		tokenize: function(e, t, n) {
			let r, i, l, o, a, u = this;
			return function(t) {
				var n;
				return n = t, e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), s;
			};
			function s(o) {
				return 33 === o ? (e.consume(o), c) : 47 === o ? (e.consume(o), i = !0, f) : 63 === o ? (e.consume(o), r = 3, u.interrupt ? t : N) : ey(o) ? (e.consume(o), l = String.fromCharCode(o), h) : n(o);
			}
			function c(i) {
				return 45 === i ? (e.consume(i), r = 2, d) : 91 === i ? (e.consume(i), r = 5, o = 0, p) : ey(i) ? (e.consume(i), r = 4, u.interrupt ? t : N) : n(i);
			}
			function d(r) {
				return 45 === r ? (e.consume(r), u.interrupt ? t : N) : n(r);
			}
			function p(r) {
				return r === "CDATA[".charCodeAt(o++) ? (e.consume(r), 6 === o) ? u.interrupt ? t : w : p : n(r);
			}
			function f(t) {
				return ey(t) ? (e.consume(t), l = String.fromCharCode(t), h) : n(t);
			}
			function h(o) {
				if (null === o || 47 === o || 62 === o || eA(o)) {
					let a = 47 === o, s = l.toLowerCase();
					return !a && !i && e4.includes(s) ? (r = 1, u.interrupt ? t(o) : w(o)) : e3.includes(l.toLowerCase()) ? (r = 6, a) ? (e.consume(o), m) : u.interrupt ? t(o) : w(o) : (r = 7, u.interrupt && !u.parser.lazy[u.now().line] ? n(o) : i ? function t(n) {
						return eL(n) ? (e.consume(n), t) : C(n);
					}(o) : g(o));
				}
				return 45 === o || ev(o) ? (e.consume(o), l += String.fromCharCode(o), h) : n(o);
			}
			function m(r) {
				return 62 === r ? (e.consume(r), u.interrupt ? t : w) : n(r);
			}
			function g(t) {
				return 47 === t ? (e.consume(t), C) : 58 === t || 95 === t || ey(t) ? (e.consume(t), y) : eL(t) ? (e.consume(t), g) : C(t);
			}
			function y(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || ev(t) ? (e.consume(t), y) : v(t);
			}
			function v(t) {
				return 61 === t ? (e.consume(t), x) : eL(t) ? (e.consume(t), v) : g(t);
			}
			function x(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), a = t, k) : eL(t) ? (e.consume(t), x) : function t(n) {
					return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || eA(n) ? v(n) : (e.consume(n), t);
				}(t);
			}
			function k(t) {
				return t === a ? (e.consume(t), a = null, b) : null === t || ew(t) ? n(t) : (e.consume(t), k);
			}
			function b(e) {
				return 47 === e || 62 === e || eL(e) ? g(e) : n(e);
			}
			function C(t) {
				return 62 === t ? (e.consume(t), S) : n(t);
			}
			function S(t) {
				return null === t || ew(t) ? w(t) : eL(t) ? (e.consume(t), S) : n(t);
			}
			function w(t) {
				return 45 === t && 2 === r ? (e.consume(t), E) : 60 === t && 1 === r ? (e.consume(t), D) : 62 === t && 4 === r ? (e.consume(t), O) : 63 === t && 3 === r ? (e.consume(t), N) : 93 === t && 5 === r ? (e.consume(t), I) : ew(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(e5, P, A)(t)) : null === t || ew(t) ? (e.exit("htmlFlowData"), A(t)) : (e.consume(t), w);
			}
			function A(t) {
				return e.check(e9, L, P)(t);
			}
			function L(t) {
				return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), T;
			}
			function T(t) {
				return null === t || ew(t) ? A(t) : (e.enter("htmlFlowData"), w(t));
			}
			function E(t) {
				return 45 === t ? (e.consume(t), N) : w(t);
			}
			function D(t) {
				return 47 === t ? (e.consume(t), l = "", M) : w(t);
			}
			function M(t) {
				if (62 === t) {
					let n = l.toLowerCase();
					return e4.includes(n) ? (e.consume(t), O) : w(t);
				}
				return ey(t) && l.length < 8 ? (e.consume(t), l += String.fromCharCode(t), M) : w(t);
			}
			function I(t) {
				return 93 === t ? (e.consume(t), N) : w(t);
			}
			function N(t) {
				return 62 === t ? (e.consume(t), O) : 45 === t && 2 === r ? (e.consume(t), N) : w(t);
			}
			function O(t) {
				return null === t || ew(t) ? (e.exit("htmlFlowData"), P(t)) : (e.consume(t), O);
			}
			function P(n) {
				return e.exit("htmlFlow"), t(n);
			}
		}
	},
	61: tu,
	95: ti,
	96: eU,
	126: eU
}, tb = {
	38: e$,
	92: eB
}, tC = {
	[-5]: tr,
	[-4]: tr,
	[-3]: tr,
	33: tt,
	38: e$,
	42: e_,
	60: [{
		name: "autolink",
		tokenize: function(e, t, n) {
			let r = 0;
			return function(t) {
				return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
			};
			function i(t) {
				return ey(t) ? (e.consume(t), l) : 64 === t ? n(t) : a(t);
			}
			function l(t) {
				return 43 === t || 45 === t || 46 === t || ev(t) ? (r = 1, function t(n) {
					return 58 === n ? (e.consume(n), r = 0, o) : (43 === n || 45 === n || 46 === n || ev(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, a(n));
				}(t)) : a(t);
			}
			function o(r) {
				return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || ek(r) ? n(r) : (e.consume(r), o);
			}
			function a(t) {
				return 64 === t ? (e.consume(t), u) : ex(t) ? (e.consume(t), a) : n(t);
			}
			function u(i) {
				return ev(i) ? function i(l) {
					return 46 === l ? (e.consume(l), r = 0, u) : 62 === l ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(l), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(l) {
						if ((45 === l || ev(l)) && r++ < 63) {
							let n = 45 === l ? t : i;
							return e.consume(l), n;
						}
						return n(l);
					}(l);
				}(i) : n(i);
			}
		}
	}, {
		name: "htmlText",
		tokenize: function(e, t, n) {
			let r, i, l, o = this;
			return function(t) {
				return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), a;
			};
			function a(t) {
				return 33 === t ? (e.consume(t), u) : 47 === t ? (e.consume(t), k) : 63 === t ? (e.consume(t), v) : ey(t) ? (e.consume(t), C) : n(t);
			}
			function u(t) {
				return 45 === t ? (e.consume(t), s) : 91 === t ? (e.consume(t), i = 0, f) : ey(t) ? (e.consume(t), y) : n(t);
			}
			function s(t) {
				return 45 === t ? (e.consume(t), p) : n(t);
			}
			function c(t) {
				return null === t ? n(t) : 45 === t ? (e.consume(t), d) : ew(t) ? (l = c, M(t)) : (e.consume(t), c);
			}
			function d(t) {
				return 45 === t ? (e.consume(t), p) : c(t);
			}
			function p(e) {
				return 62 === e ? D(e) : 45 === e ? d(e) : c(e);
			}
			function f(t) {
				return t === "CDATA[".charCodeAt(i++) ? (e.consume(t), 6 === i ? h : f) : n(t);
			}
			function h(t) {
				return null === t ? n(t) : 93 === t ? (e.consume(t), m) : ew(t) ? (l = h, M(t)) : (e.consume(t), h);
			}
			function m(t) {
				return 93 === t ? (e.consume(t), g) : h(t);
			}
			function g(t) {
				return 62 === t ? D(t) : 93 === t ? (e.consume(t), g) : h(t);
			}
			function y(t) {
				return null === t || 62 === t ? D(t) : ew(t) ? (l = y, M(t)) : (e.consume(t), y);
			}
			function v(t) {
				return null === t ? n(t) : 63 === t ? (e.consume(t), x) : ew(t) ? (l = v, M(t)) : (e.consume(t), v);
			}
			function x(e) {
				return 62 === e ? D(e) : v(e);
			}
			function k(t) {
				return ey(t) ? (e.consume(t), b) : n(t);
			}
			function b(t) {
				return 45 === t || ev(t) ? (e.consume(t), b) : function t(n) {
					return ew(n) ? (l = t, M(n)) : eL(n) ? (e.consume(n), t) : D(n);
				}(t);
			}
			function C(t) {
				return 45 === t || ev(t) ? (e.consume(t), C) : 47 === t || 62 === t || eA(t) ? S(t) : n(t);
			}
			function S(t) {
				return 47 === t ? (e.consume(t), D) : 58 === t || 95 === t || ey(t) ? (e.consume(t), w) : ew(t) ? (l = S, M(t)) : eL(t) ? (e.consume(t), S) : D(t);
			}
			function w(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || ev(t) ? (e.consume(t), w) : function t(n) {
					return 61 === n ? (e.consume(n), A) : ew(n) ? (l = t, M(n)) : eL(n) ? (e.consume(n), t) : S(n);
				}(t);
			}
			function A(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, L) : ew(t) ? (l = A, M(t)) : eL(t) ? (e.consume(t), A) : (e.consume(t), T);
			}
			function L(t) {
				return t === r ? (e.consume(t), r = void 0, E) : null === t ? n(t) : ew(t) ? (l = L, M(t)) : (e.consume(t), L);
			}
			function T(t) {
				return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || eA(t) ? S(t) : (e.consume(t), T);
			}
			function E(e) {
				return 47 === e || 62 === e || eA(e) ? S(e) : n(e);
			}
			function D(r) {
				return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
			}
			function M(t) {
				return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), I;
			}
			function I(t) {
				return eL(t) ? eI(e, N, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : N(t);
			}
			function N(t) {
				return e.enter("htmlTextData"), l(t);
			}
		}
	}],
	91: tn,
	92: [{
		name: "hardBreakEscape",
		tokenize: function(e, t, n) {
			return function(t) {
				return e.enter("hardBreakEscape"), e.consume(t), r;
			};
			function r(r) {
				return ew(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
			}
		}
	}, eB],
	93: e6,
	95: e_,
	96: {
		name: "codeText",
		previous: function(e) {
			return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
		},
		resolve: function(e) {
			let t, n, r = e.length - 4, i = 3;
			if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
				for (t = i; ++t < r;) if ("codeTextData" === e[t][1].type) {
					e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
					break;
				}
			}
			for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
			return e;
		},
		tokenize: function(e, t, n) {
			let r, i, l = 0;
			return function(t) {
				return e.enter("codeText"), e.enter("codeTextSequence"), function t(n) {
					return 96 === n ? (e.consume(n), l++, t) : (e.exit("codeTextSequence"), o(n));
				}(t);
			};
			function o(u) {
				return null === u ? n(u) : 32 === u ? (e.enter("space"), e.consume(u), e.exit("space"), o) : 96 === u ? (i = e.enter("codeTextSequence"), r = 0, function n(o) {
					return 96 === o ? (e.consume(o), r++, n) : r === l ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o)) : (i.type = "codeTextData", a(o));
				}(u)) : ew(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), o) : (e.enter("codeTextData"), a(u));
			}
			function a(t) {
				return null === t || 32 === t || 96 === t || ew(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), a);
			}
		}
	}
}, tS = { null: [e_, tc] }, tw = { null: [42, 95] }, tA = { null: [] };
var tL = /[\0\t\n\r]/g, tT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function tE(e, t, n) {
	if (t) return t;
	if (35 === n.charCodeAt(0)) {
		let e = n.charCodeAt(1), t = 120 === e || 88 === e;
		return em(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return ec(n) || e;
}
function tD(e) {
	return e && "object" == typeof e ? "position" in e || "type" in e ? tI(e.position) : "start" in e || "end" in e ? tI(e) : "line" in e || "column" in e ? tM(e) : "" : "";
}
function tM(e) {
	return tN(e && e.line) + ":" + tN(e && e.column);
}
function tI(e) {
	return tM(e && e.start) + "-" + tM(e && e.end);
}
function tN(e) {
	return e && "number" == typeof e ? e : 1;
}
var tO = {}.hasOwnProperty;
function tP(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function tz(e, t) {
	if (e) throw Error("Cannot close `" + e.type + "` (" + tD({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + tD({
		start: t.start,
		end: t.end
	}) + ") is open");
	throw Error("Cannot close document, a token (`" + t.type + "`, " + tD({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
function tF(e, t) {
	let n = String(e);
	if ("string" != typeof t) throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; -1 !== i;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
let t_ = function(e) {
	var t, n;
	if (null == e) return tH;
	if ("function" == typeof e) return tR(e);
	if ("object" == typeof e) return Array.isArray(e) ? function(e) {
		let t = [], n = -1;
		for (; ++n < e.length;) t[n] = t_(e[n]);
		return tR(function(...e) {
			let n = -1;
			for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
			return !1;
		});
	}(e) : (t = e, tR(function(e) {
		let n;
		for (n in t) if (e[n] !== t[n]) return !1;
		return !0;
	}));
	if ("string" == typeof e) return n = e, tR(function(e) {
		return e && e.type === n;
	});
	throw Error("Expected function, string, or object as test");
};
function tR(e) {
	return function(t, n, r) {
		var i;
		return !!(null !== (i = t) && "object" == typeof i && "type" in i && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0));
	};
}
function tH() {
	return !0;
}
var tV = [];
function tB(e, t, n, r) {
	let i;
	"function" == typeof t && "function" != typeof n ? (r = n, n = t) : i = t;
	let l = t_(i), o = r ? -1 : 1;
	(function e(i, a, u) {
		let s = i && "object" == typeof i ? i : {};
		if ("string" == typeof s.type) {
			let e = "string" == typeof s.tagName ? s.tagName : "string" == typeof s.name ? s.name : void 0;
			Object.defineProperty(c, "name", { value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")" });
		}
		return c;
		function c() {
			var s;
			let c, d, p, f = tV;
			if ((!t || l(i, a, u[u.length - 1] || void 0)) && !1 === (f = Array.isArray(s = n(i, u)) ? s : "number" == typeof s ? [!0, s] : null == s ? tV : [s])[0]) return f;
			if ("children" in i && i.children && i.children && "skip" !== f[0]) for (d = (r ? i.children.length : -1) + o, p = u.concat(i); d > -1 && d < i.children.length;) {
				if (!1 === (c = e(i.children[d], d, p)())[0]) return c;
				d = "number" == typeof c[1] ? c[1] : d + o;
			}
			return f;
		}
	})(e, void 0, [])();
}
function t$(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function tj(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function tU(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function tq(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function tW(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function tJ(e) {
	this.exit(e);
}
function tZ(e) {
	(function(e, t, n) {
		let r = t_((n || {}).ignore || []), i = function(e) {
			let t = [];
			if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
			let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
			for (; ++r < n.length;) {
				var i;
				let e = n[r];
				t.push(["string" == typeof (i = e[0]) ? RegExp(function(e) {
					if ("string" != typeof e) throw TypeError("Expected a string");
					return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
				}(i), "g") : i, function(e) {
					return "function" == typeof e ? e : function() {
						return e;
					};
				}(e[1])]);
			}
			return t;
		}(t), l = -1;
		for (; ++l < i.length;) tB(e, "text", o);
		function o(e, t) {
			let n, o = -1;
			for (; ++o < t.length;) {
				let e = t[o], i = n ? n.children : void 0;
				if (r(e, i ? i.indexOf(e) : void 0, n)) return;
				n = e;
			}
			if (n) return function(e, t) {
				let n = t[t.length - 1], r = i[l][0], o = i[l][1], a = 0, u = n.children.indexOf(e), s = !1, c = [];
				r.lastIndex = 0;
				let d = r.exec(e.value);
				for (; d;) {
					let n = d.index, i = {
						index: d.index,
						input: d.input,
						stack: [...t, e]
					}, l = o(...d, i);
					if ("string" == typeof l && (l = l.length > 0 ? {
						type: "text",
						value: l
					} : void 0), !1 === l ? r.lastIndex = n + 1 : (a !== n && c.push({
						type: "text",
						value: e.value.slice(a, n)
					}), Array.isArray(l) ? c.push(...l) : l && c.push(l), a = n + d[0].length, s = !0), !r.global) break;
					d = r.exec(e.value);
				}
				return s ? (a < e.value.length && c.push({
					type: "text",
					value: e.value.slice(a)
				}), n.children.splice(u, 1, ...c)) : c = [e], u + c.length;
			}(e, t);
		}
	})(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, tK], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, tX]], { ignore: ["link", "linkReference"] });
}
function tK(e, t, n, r, i) {
	let l = "";
	if (!tQ(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !function(e) {
		let t = e.split(".");
		return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
	}(n))) return !1;
	let o = function(e) {
		let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
		if (!t) return [e, void 0];
		e = e.slice(0, t.index);
		let n = t[0], r = n.indexOf(")"), i = tF(e, "("), l = tF(e, ")");
		for (; -1 !== r && i > l;) e += n.slice(0, r + 1), r = (n = n.slice(r + 1)).indexOf(")"), l++;
		return [e, n];
	}(n + r);
	if (!o[0]) return !1;
	let a = {
		type: "link",
		title: null,
		url: l + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [a, {
		type: "text",
		value: o[1]
	}] : a;
}
function tX(e, t, n, r) {
	return !(!tQ(r, !0) || /[-\d_]$/.test(n)) && {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function tQ(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (0 === e.index || eE(n) || eT(n)) && (!t || 47 !== n);
}
function tY() {
	this.buffer();
}
function tG(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function t1() {
	this.buffer();
}
function t0(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function t2(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = eg(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function t3(e) {
	this.exit(e);
}
function t4(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = eg(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function t5(e) {
	this.exit(e);
}
function t9(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function t6(e) {
	this.exit(e);
}
function t8(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return "none" === e ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function t7(e) {
	this.exit(e), this.data.inTable = void 0;
}
function ne(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function nt(e) {
	this.exit(e);
}
function nn(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function nr(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, ni));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function ni(e, t) {
	return "|" === t ? t : e;
}
function nl(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = "taskListCheckValueChecked" === e.type;
}
function no(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && "text" === n.type) {
			let r, i = t.children, l = -1;
			for (; ++l < i.length;) {
				let e = i[l];
				if ("paragraph" === e.type) {
					r = e;
					break;
				}
			}
			r === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
for (var na = {
	tokenize: function(e, t, n) {
		let r = 0;
		return function t(l) {
			return (87 === l || 119 === l) && r < 3 ? (r++, e.consume(l), t) : 46 === l && 3 === r ? (e.consume(l), i) : n(l);
		};
		function i(e) {
			return null === e ? n(e) : t(e);
		}
	},
	partial: !0
}, nu = {
	tokenize: function(e, t, n) {
		let r, i, l;
		return o;
		function o(t) {
			return 46 === t || 95 === t ? e.check(nc, u, a)(t) : null === t || eA(t) || eE(t) || 45 !== t && eT(t) ? u(t) : (l = !0, e.consume(t), o);
		}
		function a(t) {
			return 95 === t ? r = !0 : (i = r, r = void 0), e.consume(t), o;
		}
		function u(e) {
			return i || r || !l ? n(e) : t(e);
		}
	},
	partial: !0
}, ns = {
	tokenize: function(e, t) {
		let n = 0, r = 0;
		return i;
		function i(o) {
			return 40 === o ? (n++, e.consume(o), i) : 41 === o && r < n ? l(o) : 33 === o || 34 === o || 38 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 60 === o || 63 === o || 93 === o || 95 === o || 126 === o ? e.check(nc, t, l)(o) : null === o || eA(o) || eE(o) ? t(o) : (e.consume(o), i);
		}
		function l(t) {
			return 41 === t && r++, e.consume(t), i;
		}
	},
	partial: !0
}, nc = {
	tokenize: function(e, t, n) {
		return r;
		function r(o) {
			return 33 === o || 34 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 63 === o || 95 === o || 126 === o ? (e.consume(o), r) : 38 === o ? (e.consume(o), l) : 93 === o ? (e.consume(o), i) : 60 === o || null === o || eA(o) || eE(o) ? t(o) : n(o);
		}
		function i(e) {
			return null === e || 40 === e || 91 === e || eA(e) || eE(e) ? t(e) : r(e);
		}
		function l(t) {
			return ey(t) ? function t(i) {
				return 59 === i ? (e.consume(i), r) : ey(i) ? (e.consume(i), t) : n(i);
			}(t) : n(t);
		}
	},
	partial: !0
}, nd = {
	tokenize: function(e, t, n) {
		return function(t) {
			return e.consume(t), r;
		};
		function r(e) {
			return ev(e) ? n(e) : t(e);
		}
	},
	partial: !0
}, np = {
	name: "wwwAutolink",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return 87 !== t && 119 !== t || !ny.call(r, r.previous) || nb(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(na, e.attempt(nu, e.attempt(ns, i), n), n)(t));
		};
		function i(n) {
			return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: ny
}, nf = {
	name: "protocolAutolink",
	tokenize: function(e, t, n) {
		let r = this, i = "", l = !1;
		return function(t) {
			return (72 === t || 104 === t) && nv.call(r, r.previous) && !nb(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), o) : n(t);
		};
		function o(t) {
			if (ey(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), o;
			if (58 === t) {
				let n = i.toLowerCase();
				if ("http" === n || "https" === n) return e.consume(t), a;
			}
			return n(t);
		}
		function a(t) {
			return 47 === t ? (e.consume(t), l) ? u : (l = !0, a) : n(t);
		}
		function u(t) {
			return null === t || ek(t) || eA(t) || eE(t) || eT(t) ? n(t) : e.attempt(nu, e.attempt(ns, s), n)(t);
		}
		function s(n) {
			return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: nv
}, nh = {
	name: "emailAutolink",
	tokenize: function(e, t, n) {
		let r, i, l = this;
		return function(t) {
			return !nk(t) || !nx.call(l, l.previous) || nb(l.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
				return nk(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), o) : n(r);
			}(t));
		};
		function o(t) {
			return 46 === t ? e.check(nd, u, a)(t) : 45 === t || 95 === t || ev(t) ? (i = !0, e.consume(t), o) : u(t);
		}
		function a(t) {
			return e.consume(t), r = !0, o;
		}
		function u(o) {
			return i && r && ey(l.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
		}
	},
	previous: nx
}, nm = {}, ng = 48; ng < 123;) nm[ng] = nh, 58 == ++ng ? ng = 65 : 91 === ng && (ng = 97);
function ny(e) {
	return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || eA(e);
}
function nv(e) {
	return !ey(e);
}
function nx(e) {
	return !(47 === e || nk(e));
}
function nk(e) {
	return 43 === e || 45 === e || 46 === e || 95 === e || ev(e);
}
function nb(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
nm[43] = nh, nm[45] = nh, nm[46] = nh, nm[95] = nh, nm[72] = [nh, nf], nm[104] = [nh, nf], nm[87] = [nh, np], nm[119] = [nh, np];
var nC = {
	tokenize: function(e, t, n) {
		let r = this;
		return eI(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e);
		}, "gfmFootnoteDefinitionIndent", 5);
	},
	partial: !0
};
function nS(e, t, n) {
	let r, i = this, l = i.events.length, o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
	for (; l--;) {
		let e = i.events[l][1];
		if ("labelImage" === e.type) {
			r = e;
			break;
		}
		if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break;
	}
	return function(l) {
		if (!r || !r._balanced) return n(l);
		let a = eg(i.sliceSerialize({
			start: r.end,
			end: i.now()
		}));
		return 94 === a.codePointAt(0) && o.includes(a.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l)) : n(l);
	};
}
function nw(e, t) {
	let n = e.length;
	for (; n--;) if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let l = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, l.start),
		end: Object.assign({}, l.end)
	}, a = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			l,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			l,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...a), e;
}
function nA(e, t, n) {
	let r, i = this, l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []), o = 0;
	return function(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), a;
	};
	function a(t) {
		return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
	}
	function u(a) {
		if (o > 999 || 93 === a && !r || null === a || 91 === a || eA(a)) return n(a);
		if (93 === a) {
			e.exit("chunkString");
			let r = e.exit("gfmFootnoteCallString");
			return l.includes(eg(i.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(a);
		}
		return eA(a) || (r = !0), o++, e.consume(a), 92 === a ? s : u;
	}
	function s(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, u) : u(t);
	}
}
function nL(e, t, n) {
	let r, i, l = this, o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []), a = 0;
	return function(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
	};
	function u(t) {
		return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", s) : n(t);
	}
	function s(t) {
		if (a > 999 || 93 === t && !i || null === t || 91 === t || eA(t)) return n(t);
		if (93 === t) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return r = eg(l.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
		}
		return eA(t) || (i = !0), a++, e.consume(t), 92 === t ? c : s;
	}
	function c(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, s) : s(t);
	}
	function d(t) {
		return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o.includes(r) || o.push(r), eI(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function nT(e, t, n) {
	return e.check(eH, t, e.attempt(nC, t, n));
}
function nE(e) {
	e.exit("gfmFootnoteDefinition");
}
var nD = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		(function(e, t, n, r) {
			let i = 0;
			if (0 !== n || 0 !== r.length) {
				for (; i < e.map.length;) {
					if (e.map[i][0] === t) {
						e.map[i][1] += n, e.map[i][2].push(...r);
						return;
					}
					i += 1;
				}
				e.map.push([
					t,
					n,
					r
				]);
			}
		})(this, e, t, n);
	}
	consume(e) {
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), 0 === this.map.length) return;
		let t = this.map.length, n = [];
		for (; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function nM(e, t, n) {
	let r, i = this, l = 0, o = 0;
	return function(e) {
		let t = i.events.length - 1;
		for (; t > -1;) {
			let e = i.events[t][1].type;
			if ("lineEnding" === e || "linePrefix" === e) t--;
			else break;
		}
		let r = t > -1 ? i.events[t][1].type : null, l = "tableHead" === r || "tableRow" === r ? v : a;
		return l === v && i.parser.lazy[i.now().line] ? n(e) : l(e);
	};
	function a(t) {
		var n;
		return e.enter("tableHead"), e.enter("tableRow"), 124 === (n = t) || (r = !0, o += 1), u(n);
	}
	function u(t) {
		return null === t ? n(t) : ew(t) ? o > 1 ? (o = 0, i.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d) : n(t) : eL(t) ? eI(e, u, "whitespace")(t) : (o += 1, r && (r = !1, l += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, u) : (e.enter("data"), s(t));
	}
	function s(t) {
		return null === t || 124 === t || eA(t) ? (e.exit("data"), u(t)) : (e.consume(t), 92 === t ? c : s);
	}
	function c(t) {
		return 92 === t || 124 === t ? (e.consume(t), s) : s(t);
	}
	function d(t) {
		return (i.interrupt = !1, i.parser.lazy[i.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, eL(t)) ? eI(e, p, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : p(t);
	}
	function p(t) {
		return 45 === t || 58 === t ? h(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), f) : n(t);
	}
	function f(t) {
		return eL(t) ? eI(e, h, "whitespace")(t) : h(t);
	}
	function h(t) {
		return 58 === t ? (o += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), m) : 45 === t ? (o += 1, m(t)) : null === t || ew(t) ? y(t) : n(t);
	}
	function m(t) {
		return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
			return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), g) : (e.exit("tableDelimiterFiller"), g(n));
		}(t)) : n(t);
	}
	function g(t) {
		return eL(t) ? eI(e, y, "whitespace")(t) : y(t);
	}
	function y(i) {
		if (124 === i) return p(i);
		if (null === i || ew(i)) return r && l === o ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i)) : n(i);
		return n(i);
	}
	function v(t) {
		return e.enter("tableRow"), x(t);
	}
	function x(n) {
		return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), x) : null === n || ew(n) ? (e.exit("tableRow"), t(n)) : eL(n) ? eI(e, x, "whitespace")(n) : (e.enter("data"), k(n));
	}
	function k(t) {
		return null === t || 124 === t || eA(t) ? (e.exit("data"), x(t)) : (e.consume(t), 92 === t ? b : k);
	}
	function b(t) {
		return 92 === t || 124 === t ? (e.consume(t), k) : k(t);
	}
}
function nI(e, t) {
	let n, r, i, l = -1, o = !0, a = 0, u = [
		0,
		0,
		0,
		0
	], s = [
		0,
		0,
		0,
		0
	], c = !1, d = 0, p = new nD();
	for (; ++l < e.length;) {
		let f = e[l], h = f[1];
		"enter" === f[0] ? "tableHead" === h.type ? (c = !1, 0 !== d && (nO(p, t, d, n, r), r = void 0, d = 0), n = {
			type: "table",
			start: Object.assign({}, h.start),
			end: Object.assign({}, h.end)
		}, p.add(l, 0, [[
			"enter",
			n,
			t
		]])) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (o = !0, i = void 0, u = [
			0,
			0,
			0,
			0
		], s = [
			0,
			l + 1,
			0,
			0
		], c && (c = !1, r = {
			type: "tableBody",
			start: Object.assign({}, h.start),
			end: Object.assign({}, h.end)
		}, p.add(l, 0, [[
			"enter",
			r,
			t
		]])), a = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) ? (o = !1, 0 === s[2] && (0 !== u[1] && (s[0] = s[1], i = nN(p, t, u, a, void 0, i), u = [
			0,
			0,
			0,
			0
		]), s[2] = l)) : "tableCellDivider" === h.type && (o ? o = !1 : (0 !== u[1] && (s[0] = s[1], i = nN(p, t, u, a, void 0, i)), s = [
			(u = s)[1],
			l,
			0,
			0
		])) : "tableHead" === h.type ? (c = !0, d = l) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (d = l, 0 !== u[1] ? (s[0] = s[1], i = nN(p, t, u, a, l, i)) : 0 !== s[1] && (i = nN(p, t, s, a, l, i)), a = 0) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) && (s[3] = l);
	}
	for (0 !== d && nO(p, t, d, n, r), p.consume(t.events), l = -1; ++l < t.events.length;) {
		let e = t.events[l];
		"enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
			let n = !1, r = [];
			for (; t < e.length;) {
				let i = e[t];
				if (n) {
					if ("enter" === i[0]) "tableContent" === i[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
					else if ("tableContent" === i[1].type) {
						if ("tableDelimiterMarker" === e[t - 1][1].type) {
							let e = r.length - 1;
							r[e] = "left" === r[e] ? "center" : "right";
						}
					} else if ("tableDelimiterRow" === i[1].type) break;
				} else "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
				t += 1;
			}
			return r;
		}(t.events, l));
	}
	return e;
}
function nN(e, t, n, r, i, l) {
	0 !== n[0] && (l.end = Object.assign({}, nP(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		l,
		t
	]]));
	let o = nP(t.events, n[1]);
	if (l = {
		type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
		start: Object.assign({}, o),
		end: Object.assign({}, o)
	}, e.add(n[1], 0, [[
		"enter",
		l,
		t
	]]), 0 !== n[2]) {
		let i = nP(t.events, n[2]), l = nP(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, l)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), 2 !== r) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return void 0 !== i && (l.end = Object.assign({}, nP(t.events, i)), e.add(i, 0, [[
		"exit",
		l,
		t
	]]), l = void 0), l;
}
function nO(e, t, n, r, i) {
	let l = [], o = nP(t.events, n);
	i && (i.end = Object.assign({}, o), l.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), l.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, l);
}
function nP(e, t) {
	let n = e[t], r = "enter" === n[0] ? "start" : "end";
	return n[1][r];
}
var nz = {
	name: "tasklistCheck",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t);
		};
		function i(t) {
			return eA(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), l) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), l) : n(t);
		}
		function l(t) {
			return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(t);
		}
		function o(r) {
			return ew(r) ? t(r) : eL(r) ? e.check({ tokenize: nF }, t, n)(r) : n(r);
		}
	}
};
function nF(e, t, n) {
	return eI(e, function(e) {
		return null === e ? n(e) : t(e);
	}, "whitespace");
}
function n_(e, t, n, r, i, l, o, a, u, s, c, d, p, f, h) {
	let m, g;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), y;
	};
	function y(t) {
		return 35 === t ? (m = o, v(t)) : 46 === t ? (m = a, v(t)) : h && eL(t) ? eI(e, y, "whitespace")(t) : !h && eA(t) ? e0(e, y)(t) : null === t || ew(t) || eE(t) || eT(t) && 45 !== t && 95 !== t ? D(t) : (e.enter(l), e.enter(u), e.consume(t), b);
	}
	function v(t) {
		let n = m + "Marker";
		return e.enter(l), e.enter(m), e.enter(n), e.consume(t), e.exit(n), x;
	}
	function x(t) {
		if (null === t || 34 === t || 35 === t || 39 === t || 46 === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || eA(t)) return n(t);
		let r = m + "Value";
		return e.enter(r), e.consume(t), k;
	}
	function k(t) {
		if (null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t) return n(t);
		if (35 === t || 46 === t || 125 === t || eA(t)) {
			let n = m + "Value";
			return e.exit(n), e.exit(m), e.exit(l), y(t);
		}
		return e.consume(t), k;
	}
	function b(t) {
		return null === t || ew(t) || eE(t) || eT(t) && 45 !== t && 46 !== t && 58 !== t && 95 !== t ? (e.exit(u), h && eL(t)) ? eI(e, C, "whitespace")(t) : !h && eA(t) ? e0(e, C)(t) : C(t) : (e.consume(t), b);
	}
	function C(t) {
		return 61 === t ? (e.enter(s), e.consume(t), e.exit(s), S) : (e.exit(l), y(t));
	}
	function S(t) {
		return null === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || h && ew(t) ? n(t) : 34 === t || 39 === t ? (e.enter(c), e.enter(p), e.consume(t), e.exit(p), g = t, A) : h && eL(t) ? eI(e, S, "whitespace")(t) : !h && eA(t) ? e0(e, S)(t) : (e.enter(d), e.enter(f), e.consume(t), g = void 0, w);
	}
	function w(t) {
		return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 125 === t || eA(t) ? (e.exit(f), e.exit(d), e.exit(l), y(t)) : (e.consume(t), w);
	}
	function A(t) {
		return t === g ? (e.enter(p), e.consume(t), e.exit(p), e.exit(c), e.exit(l), E) : (e.enter(d), L(t));
	}
	function L(t) {
		return t === g ? (e.exit(d), A(t)) : null === t ? n(t) : ew(t) ? h ? n(t) : e0(e, L)(t) : (e.enter(f), e.consume(t), T);
	}
	function T(t) {
		return t === g || null === t || ew(t) ? (e.exit(f), L(t)) : (e.consume(t), T);
	}
	function E(e) {
		return 125 === e || eA(e) ? y(e) : D(e);
	}
	function D(l) {
		return 125 === l ? (e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : n(l);
	}
}
function nR(e, t, n, r, i, l, o) {
	let a, u = 0, s = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), c;
	};
	function c(n) {
		return 93 === n ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), d(n));
	}
	function d(t) {
		if (93 === t && !s) return h(t);
		let n = e.enter("chunkText", {
			_contentTypeTextTrailing: !0,
			contentType: "text",
			previous: a
		});
		return a && (a.next = n), a = n, p(t);
	}
	function p(t) {
		return null === t || u > 999 || 91 === t && ++s > 32 ? n(t) : 93 !== t || s-- ? ew(t) ? o ? n(t) : (e.consume(t), e.exit("chunkText"), d) : (e.consume(t), 92 === t ? f : p) : (e.exit("chunkText"), h(t));
	}
	function f(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, p) : p(t);
	}
	function h(n) {
		return e.exit(l), e.enter(i), e.consume(n), e.exit(i), e.exit(r), t;
	}
}
function nH(e, t, n, r) {
	let i = this;
	return function(t) {
		return null === t || ew(t) || eT(t) || eE(t) ? n(t) : (e.enter(r), e.consume(t), l);
	};
	function l(o) {
		return null === o || ew(o) || eE(o) || eT(o) && 45 !== o && 95 !== o ? (e.exit(r), 45 === i.previous || 95 === i.previous ? n(o) : t(o)) : (e.consume(o), l);
	}
}
let nV = {
	tokenize: function(e, t, n) {
		let r, i = this, l = i.events[i.events.length - 1], o = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0, a = 0;
		return function(t) {
			return e.enter("directiveContainer"), e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(r) {
				return 58 === r ? (e.consume(r), a++, t) : a < 3 ? n(r) : (e.exit("directiveContainerSequence"), nH.call(i, e, u, n, "directiveContainerName")(r));
			}(t);
		};
		function u(t) {
			return 91 === t ? e.attempt(nB, s, s)(t) : s(t);
		}
		function s(t) {
			return 123 === t ? e.attempt(n$, c, c)(t) : c(t);
		}
		function c(t) {
			return eI(e, d, "whitespace")(t);
		}
		function d(r) {
			return (e.exit("directiveContainerFence"), null === r) ? k(r) : ew(r) ? i.interrupt ? t(r) : e.attempt(nj, p, k)(r) : n(r);
		}
		function p(t) {
			return null === t ? k(t) : ew(t) ? e.check(nj, g, k)(t) : (e.enter("directiveContainerContent"), f(t));
		}
		function f(t) {
			return e.attempt({
				tokenize: b,
				partial: !0
			}, x, o ? eI(e, h, "linePrefix", o + 1) : h)(t);
		}
		function h(t) {
			return null === t ? x(t) : ew(t) ? e.check(nj, m, x)(t) : m(t);
		}
		function m(t) {
			let n = e.enter("chunkDocument", {
				contentType: "document",
				previous: r
			});
			return r && (r.next = n), r = n, function t(n) {
				if (null === n) {
					let t = e.exit("chunkDocument");
					return i.parser.lazy[t.start.line] = !1, x(n);
				}
				return ew(n) ? e.check(nj, y, v)(n) : (e.consume(n), t);
			}(t);
		}
		function g(t) {
			return e.enter("directiveContainerContent"), f(t);
		}
		function y(t) {
			e.consume(t);
			let n = e.exit("chunkDocument");
			return i.parser.lazy[n.start.line] = !1, f;
		}
		function v(t) {
			let n = e.exit("chunkDocument");
			return i.parser.lazy[n.start.line] = !1, x(t);
		}
		function x(t) {
			return e.exit("directiveContainerContent"), k(t);
		}
		function k(n) {
			return e.exit("directiveContainer"), t(n);
		}
		function b(e, t, n) {
			let r = 0;
			return eI(e, function(t) {
				return e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(i) {
					return 58 === i ? (e.consume(i), r++, t) : r < a ? n(i) : (e.exit("directiveContainerSequence"), eI(e, l, "whitespace")(i));
				}(t);
			}, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
			function l(r) {
				return null === r || ew(r) ? (e.exit("directiveContainerFence"), t(r)) : n(r);
			}
		}
	},
	concrete: !0
};
var nB = {
	tokenize: function(e, t, n) {
		return nR(e, t, n, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", !0);
	},
	partial: !0
}, n$ = {
	tokenize: function(e, t, n) {
		return n_(e, t, n, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", !0);
	},
	partial: !0
}, nj = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i;
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	},
	partial: !0
};
let nU = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return e.enter("directiveLeaf"), e.enter("directiveLeafSequence"), e.consume(t), i;
	};
	function i(t) {
		return 58 === t ? (e.consume(t), e.exit("directiveLeafSequence"), nH.call(r, e, l, n, "directiveLeafName")) : n(t);
	}
	function l(t) {
		return 91 === t ? e.attempt(nq, o, o)(t) : o(t);
	}
	function o(t) {
		return 123 === t ? e.attempt(nW, a, a)(t) : a(t);
	}
	function a(t) {
		return eI(e, u, "whitespace")(t);
	}
	function u(r) {
		return null === r || ew(r) ? (e.exit("directiveLeaf"), t(r)) : n(r);
	}
} };
var nq = {
	tokenize: function(e, t, n) {
		return nR(e, t, n, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", !0);
	},
	partial: !0
}, nW = {
	tokenize: function(e, t, n) {
		return n_(e, t, n, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", !0);
	},
	partial: !0
};
let nJ = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("directiveText"), e.enter("directiveTextMarker"), e.consume(t), e.exit("directiveTextMarker"), nH.call(r, e, i, n, "directiveTextName");
		};
		function i(t) {
			return 58 === t ? n(t) : 91 === t ? e.attempt(nZ, l, l)(t) : l(t);
		}
		function l(t) {
			return 123 === t ? e.attempt(nK, o, o)(t) : o(t);
		}
		function o(n) {
			return e.exit("directiveText"), t(n);
		}
	},
	previous: function(e) {
		return 58 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
	}
};
var nZ = {
	tokenize: function(e, t, n) {
		return nR(e, t, n, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
	},
	partial: !0
}, nK = {
	tokenize: function(e, t, n) {
		return n_(e, t, n, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
	},
	partial: !0
};
let nX = [
	"AElig",
	"AMP",
	"Aacute",
	"Acirc",
	"Agrave",
	"Aring",
	"Atilde",
	"Auml",
	"COPY",
	"Ccedil",
	"ETH",
	"Eacute",
	"Ecirc",
	"Egrave",
	"Euml",
	"GT",
	"Iacute",
	"Icirc",
	"Igrave",
	"Iuml",
	"LT",
	"Ntilde",
	"Oacute",
	"Ocirc",
	"Ograve",
	"Oslash",
	"Otilde",
	"Ouml",
	"QUOT",
	"REG",
	"THORN",
	"Uacute",
	"Ucirc",
	"Ugrave",
	"Uuml",
	"Yacute",
	"aacute",
	"acirc",
	"acute",
	"aelig",
	"agrave",
	"amp",
	"aring",
	"atilde",
	"auml",
	"brvbar",
	"ccedil",
	"cedil",
	"cent",
	"copy",
	"curren",
	"deg",
	"divide",
	"eacute",
	"ecirc",
	"egrave",
	"eth",
	"euml",
	"frac12",
	"frac14",
	"frac34",
	"gt",
	"iacute",
	"icirc",
	"iexcl",
	"igrave",
	"iquest",
	"iuml",
	"laquo",
	"lt",
	"macr",
	"micro",
	"middot",
	"nbsp",
	"not",
	"ntilde",
	"oacute",
	"ocirc",
	"ograve",
	"ordf",
	"ordm",
	"oslash",
	"otilde",
	"ouml",
	"para",
	"plusmn",
	"pound",
	"quot",
	"raquo",
	"reg",
	"sect",
	"shy",
	"sup1",
	"sup2",
	"sup3",
	"szlig",
	"thorn",
	"times",
	"uacute",
	"ucirc",
	"ugrave",
	"uml",
	"uuml",
	"yacute",
	"yen",
	"yuml"
], nQ = {
	0: "�",
	128: "€",
	130: "‚",
	131: "ƒ",
	132: "„",
	133: "…",
	134: "†",
	135: "‡",
	136: "ˆ",
	137: "‰",
	138: "Š",
	139: "‹",
	140: "Œ",
	142: "Ž",
	145: "‘",
	146: "’",
	147: "“",
	148: "”",
	149: "•",
	150: "–",
	151: "—",
	152: "˜",
	153: "™",
	154: "š",
	155: "›",
	156: "œ",
	158: "ž",
	159: "Ÿ"
};
function nY(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 48 && t <= 57;
}
function nG(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
}
function n1(e) {
	return function(e) {
		let t = "string" == typeof e ? e.charCodeAt(0) : e;
		return t >= 97 && t <= 122 || t >= 65 && t <= 90;
	}(e) || nY(e);
}
var n0 = [
	"",
	"Named character references must be terminated by a semicolon",
	"Numeric character references must be terminated by a semicolon",
	"Named character references cannot be empty",
	"Numeric character references cannot be empty",
	"Named character references must be known",
	"Numeric character references cannot be disallowed",
	"Numeric character references cannot be outside the permissible Unicode range"
];
function n2(e, t) {
	let n, r, i, l = t || {}, o = "string" == typeof l.additional ? l.additional.charCodeAt(0) : l.additional, a = [], u = 0, s = -1, c = "";
	l.position && ("start" in l.position || "indent" in l.position ? (r = l.position.indent, n = l.position.start) : n = l.position);
	let d = (n ? n.line : 0) || 1, p = (n ? n.column : 0) || 1, f = g();
	for (u--; ++u <= e.length;) if (10 === i && (p = (r ? r[s] : 0) || 1), 38 === (i = e.charCodeAt(u))) {
		let t, n = e.charCodeAt(u + 1);
		if (9 === n || 10 === n || 12 === n || 32 === n || 38 === n || 60 === n || Number.isNaN(n) || o && n === o) {
			c += String.fromCharCode(i), p++;
			continue;
		}
		let r = u + 1, s = r, d = r;
		if (35 === n) {
			d = ++s;
			let n = e.charCodeAt(d);
			88 === n || 120 === n ? (t = "hexadecimal", d = ++s) : t = "decimal";
		} else t = "named";
		let x = "", k = "", b = "", C = "named" === t ? n1 : "decimal" === t ? nY : nG;
		for (d--; ++d <= e.length;) {
			let n = e.charCodeAt(d);
			if (!C(n)) break;
			b += String.fromCharCode(n), "named" === t && nX.includes(b) && (x = b, k = ec(b));
		}
		let S = 59 === e.charCodeAt(d);
		if (S) {
			d++;
			let e = "named" === t && ec(b);
			e && (x = b, k = e);
		}
		let w = 1 + d - r, A = "";
		if (S || !1 !== l.nonTerminated) if (b) if ("named" === t) {
			if (S && !k) y(5, 1);
			else if (x !== b && (w = 1 + (d = s + x.length) - s, S = !1), !S) {
				let t = x ? 1 : 3;
				if (l.attribute) {
					let n = e.charCodeAt(d);
					61 === n ? (y(t, w), k = "") : n1(n) ? k = "" : y(t, w);
				} else y(t, w);
			}
			A = k;
		} else {
			var h, m;
			S || y(2, w);
			let e = Number.parseInt(b, "hexadecimal" === t ? 16 : 10);
			if ((h = e) >= 55296 && h <= 57343 || h > 1114111) y(7, w), A = String.fromCharCode(65533);
			else if (e in nQ) y(6, w), A = nQ[e];
			else {
				let t = "";
				((m = e) >= 1 && m <= 8 || 11 === m || m >= 13 && m <= 31 || m >= 127 && m <= 159 || m >= 64976 && m <= 65007 || (65535 & m) == 65535 || (65535 & m) == 65534) && y(6, w), e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 | 55296), e = 56320 | 1023 & e), A = t + String.fromCharCode(e);
			}
		}
		else "named" !== t && y(4, w);
		if (A) {
			v(), f = g(), u = d - 1, p += d - r + 1, a.push(A);
			let t = g();
			t.offset++, l.reference && l.reference.call(l.referenceContext || void 0, A, {
				start: f,
				end: t
			}, e.slice(r - 1, d)), f = t;
		} else b = e.slice(r - 1, d), c += b, p += b.length, u = d - 1;
	} else 10 === i && (d++, s++, p = 0), Number.isNaN(i) ? v() : (c += String.fromCharCode(i), p++);
	return a.join("");
	function g() {
		return {
			line: d,
			column: p,
			offset: u + ((n ? n.offset : 0) || 0)
		};
	}
	function y(e, t) {
		let n;
		l.warning && (n = g(), n.column += t, n.offset += t, l.warning.call(l.warningContext || void 0, n0[e], n, e));
	}
	function v() {
		c && (a.push(c), l.text && l.text.call(l.textContext || void 0, c, {
			start: f,
			end: g()
		}), c = "");
	}
}
function n3(e) {
	n9.call(this, "containerDirective", e);
}
function n4(e) {
	n9.call(this, "leafDirective", e);
}
function n5(e) {
	n9.call(this, "textDirective", e);
}
function n9(e, t) {
	this.enter({
		type: e,
		name: "",
		attributes: {},
		children: []
	}, t);
}
function n6(e) {
	let t = this.stack[this.stack.length - 1];
	"containerDirective" === t.type || "leafDirective" === t.type || t.type, t.name = this.sliceSerialize(e);
}
function n8(e) {
	this.enter({
		type: "paragraph",
		data: { directiveLabel: !0 },
		children: []
	}, e);
}
function n7(e) {
	this.exit(e);
}
function re() {
	this.data.directiveAttributes = [], this.buffer();
}
function rt(e) {
	this.data.directiveAttributes.push(["id", n2(this.sliceSerialize(e), { attribute: !0 })]);
}
function rn(e) {
	this.data.directiveAttributes.push(["class", n2(this.sliceSerialize(e), { attribute: !0 })]);
}
function rr(e) {
	let t = this.data.directiveAttributes;
	t[t.length - 1][1] = n2(this.sliceSerialize(e), { attribute: !0 });
}
function ri(e) {
	this.data.directiveAttributes.push([this.sliceSerialize(e), ""]);
}
function rl() {
	let e = this.data.directiveAttributes, t = {}, n = -1;
	for (; ++n < e.length;) {
		let r = e[n];
		"class" === r[0] && t.class ? t.class += " " + r[1] : t[r[0]] = r[1];
	}
	this.data.directiveAttributes = void 0, this.resume();
	let r = this.stack[this.stack.length - 1];
	"containerDirective" === r.type || "leafDirective" === r.type || r.type, r.attributes = t;
}
function ro(e) {
	this.exit(e);
}
var ra = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ru = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, rs = {};
function rc(e, t) {
	return ((t || rs).jsx ? ru : ra).test(e);
}
var rd = /[ \t\n\f\r]/g;
function rp(e) {
	return "" === e.replace(rd, "");
}
var rf = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
function rh(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new rf(n, r, t);
}
function rm(e) {
	return e.toLowerCase();
}
rf.prototype.normal = {}, rf.prototype.property = {}, rf.prototype.space = void 0;
var rg = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
rg.prototype.attribute = "", rg.prototype.booleanish = !1, rg.prototype.boolean = !1, rg.prototype.commaOrSpaceSeparated = !1, rg.prototype.commaSeparated = !1, rg.prototype.defined = !1, rg.prototype.mustUseProperty = !1, rg.prototype.number = !1, rg.prototype.overloadedBoolean = !1, rg.prototype.property = "", rg.prototype.spaceSeparated = !1, rg.prototype.space = void 0;
var ry = e({
	boolean: () => rx,
	booleanish: () => rk,
	commaOrSpaceSeparated: () => rA,
	commaSeparated: () => rw,
	number: () => rC,
	overloadedBoolean: () => rb,
	spaceSeparated: () => rS
}), rv = 0;
let rx = rL(), rk = rL(), rb = rL(), rC = rL(), rS = rL(), rw = rL(), rA = rL();
function rL() {
	return 2 ** ++rv;
}
var rT = Object.keys(ry), rE = class extends rg {
	constructor(e, t, n, r) {
		var i, l, o, a, u;
		let s = -1;
		if (super(e, t), i = this, (l = r) && (i.space = l), "number" == typeof n) for (; ++s < rT.length;) {
			let e = rT[s];
			o = this, a = rT[s], (u = (n & ry[e]) === ry[e]) && (o[a] = u);
		}
	}
};
function rD(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let l = new rE(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[rm(r)] = r, n[rm(l.attribute)] = r;
	}
	return new rf(t, n, e.space);
}
rE.prototype.defined = !0;
let rM = rD({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: rk,
		ariaAutoComplete: null,
		ariaBusy: rk,
		ariaChecked: rk,
		ariaColCount: rC,
		ariaColIndex: rC,
		ariaColSpan: rC,
		ariaControls: rS,
		ariaCurrent: null,
		ariaDescribedBy: rS,
		ariaDetails: null,
		ariaDisabled: rk,
		ariaDropEffect: rS,
		ariaErrorMessage: null,
		ariaExpanded: rk,
		ariaFlowTo: rS,
		ariaGrabbed: rk,
		ariaHasPopup: null,
		ariaHidden: rk,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: rS,
		ariaLevel: rC,
		ariaLive: null,
		ariaModal: rk,
		ariaMultiLine: rk,
		ariaMultiSelectable: rk,
		ariaOrientation: null,
		ariaOwns: rS,
		ariaPlaceholder: null,
		ariaPosInSet: rC,
		ariaPressed: rk,
		ariaReadOnly: rk,
		ariaRelevant: null,
		ariaRequired: rk,
		ariaRoleDescription: rS,
		ariaRowCount: rC,
		ariaRowIndex: rC,
		ariaRowSpan: rC,
		ariaSelected: rk,
		ariaSetSize: rC,
		ariaSort: null,
		ariaValueMax: rC,
		ariaValueMin: rC,
		ariaValueNow: rC,
		ariaValueText: null,
		role: null
	},
	transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
});
function rI(e, t) {
	return t in e ? e[t] : t;
}
function rN(e, t) {
	return rI(e, t.toLowerCase());
}
let rO = rD({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: rw,
		acceptCharset: rS,
		accessKey: rS,
		action: null,
		allow: null,
		allowFullScreen: rx,
		allowPaymentRequest: rx,
		allowUserMedia: rx,
		alt: null,
		as: null,
		async: rx,
		autoCapitalize: null,
		autoComplete: rS,
		autoFocus: rx,
		autoPlay: rx,
		blocking: rS,
		capture: null,
		charSet: null,
		checked: rx,
		cite: null,
		className: rS,
		cols: rC,
		colSpan: null,
		content: null,
		contentEditable: rk,
		controls: rx,
		controlsList: rS,
		coords: rC | rw,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: rx,
		defer: rx,
		dir: null,
		dirName: null,
		disabled: rx,
		download: rb,
		draggable: rk,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: rx,
		formTarget: null,
		headers: rS,
		height: rC,
		hidden: rb,
		high: rC,
		href: null,
		hrefLang: null,
		htmlFor: rS,
		httpEquiv: rS,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: rx,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: rx,
		itemId: null,
		itemProp: rS,
		itemRef: rS,
		itemScope: rx,
		itemType: rS,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: rx,
		low: rC,
		manifest: null,
		max: null,
		maxLength: rC,
		media: null,
		method: null,
		min: null,
		minLength: rC,
		multiple: rx,
		muted: rx,
		name: null,
		nonce: null,
		noModule: rx,
		noValidate: rx,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: rx,
		optimum: rC,
		pattern: null,
		ping: rS,
		placeholder: null,
		playsInline: rx,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: rx,
		referrerPolicy: null,
		rel: rS,
		required: rx,
		reversed: rx,
		rows: rC,
		rowSpan: rC,
		sandbox: rS,
		scope: null,
		scoped: rx,
		seamless: rx,
		selected: rx,
		shadowRootClonable: rx,
		shadowRootDelegatesFocus: rx,
		shadowRootMode: null,
		shape: null,
		size: rC,
		sizes: null,
		slot: null,
		span: rC,
		spellCheck: rk,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: rC,
		step: null,
		style: null,
		tabIndex: rC,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: rx,
		useMap: null,
		value: rk,
		width: rC,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: rS,
		axis: null,
		background: null,
		bgColor: null,
		border: rC,
		borderColor: null,
		bottomMargin: rC,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: rx,
		declare: rx,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: rC,
		leftMargin: rC,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: rC,
		marginWidth: rC,
		noResize: rx,
		noHref: rx,
		noShade: rx,
		noWrap: rx,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: rC,
		rules: null,
		scheme: null,
		scrolling: rk,
		standby: null,
		summary: null,
		text: null,
		topMargin: rC,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: rC,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: rx,
		disableRemotePlayback: rx,
		prefix: null,
		property: null,
		results: rC,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: rN
}), rP = rD({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: rA,
		accentHeight: rC,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: rC,
		amplitude: rC,
		arabicForm: null,
		ascent: rC,
		attributeName: null,
		attributeType: null,
		azimuth: rC,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: rC,
		by: null,
		calcMode: null,
		capHeight: rC,
		className: rS,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: rC,
		diffuseConstant: rC,
		direction: null,
		display: null,
		dur: null,
		divisor: rC,
		dominantBaseline: null,
		download: rx,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: rC,
		enableBackground: null,
		end: null,
		event: null,
		exponent: rC,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: rC,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: rw,
		g2: rw,
		glyphName: rw,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: rC,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: rC,
		horizOriginX: rC,
		horizOriginY: rC,
		id: null,
		ideographic: rC,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: rC,
		k: rC,
		k1: rC,
		k2: rC,
		k3: rC,
		k4: rC,
		kernelMatrix: rA,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: rC,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: rC,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: rC,
		overlineThickness: rC,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: rC,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: rS,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: rC,
		pointsAtY: rC,
		pointsAtZ: rC,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: rA,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: rA,
		rev: rA,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: rA,
		requiredFeatures: rA,
		requiredFonts: rA,
		requiredFormats: rA,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: rC,
		specularExponent: rC,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: rC,
		strikethroughThickness: rC,
		string: null,
		stroke: null,
		strokeDashArray: rA,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: rC,
		strokeOpacity: rC,
		strokeWidth: null,
		style: null,
		surfaceScale: rC,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: rA,
		tabIndex: rC,
		tableValues: null,
		target: null,
		targetX: rC,
		targetY: rC,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: rA,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: rC,
		underlineThickness: rC,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: rC,
		values: null,
		vAlphabetic: rC,
		vMathematical: rC,
		vectorEffect: null,
		vHanging: rC,
		vIdeographic: rC,
		version: null,
		vertAdvY: rC,
		vertOriginX: rC,
		vertOriginY: rC,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: rC,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: rI
}), rz = rD({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform: (e, t) => "xlink:" + t.slice(5).toLowerCase()
}), rF = rD({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: rN
}), r_ = rD({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
}), rR = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
};
var rH = /[A-Z]/g, rV = /-[a-z]/g, rB = /^data[-\w.:]+$/i;
function r$(e) {
	return "-" + e.toLowerCase();
}
function rj(e) {
	return e.charAt(1).toUpperCase();
}
let rU = rh([
	rM,
	rO,
	rz,
	rF,
	r_
], "html"), rq = rh([
	rM,
	rP,
	rz,
	rF,
	r_
], "svg");
var rW = n((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, u = /^[;\s]*/, s = /^\s+|\s+$/g;
	function c(e) {
		return e ? e.replace(s, "") : "";
	}
	t.exports = function(e, t) {
		if ("string" != typeof e) throw TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var s = 1, d = 1;
		function p(e) {
			var t = e.match(r);
			t && (s += t.length);
			var n = e.lastIndexOf("\n");
			d = ~n ? e.length - n : d + e.length;
		}
		function f() {
			var e = {
				line: s,
				column: d
			};
			return function(t) {
				return t.position = new h(e), y(i), t;
			};
		}
		function h(e) {
			this.start = e, this.end = {
				line: s,
				column: d
			}, this.source = t.source;
		}
		h.prototype.content = e;
		var m = [];
		function g(n) {
			var r = Error(t.source + ":" + s + ":" + d + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = s, r.column = d, r.source = e, t.silent) m.push(r);
			else throw r;
		}
		function y(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return p(r), e = e.slice(r.length), n;
			}
		}
		function v(e) {
			var t;
			for (e = e || []; t = x();) !1 !== t && e.push(t);
			return e;
		}
		function x() {
			var t = f();
			if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
				for (var n = 2; "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
				if (n += 2, "" === e.charAt(n - 1)) return g("End of comment missing");
				var r = e.slice(2, n - 2);
				return d += 2, p(r), e = e.slice(n), d += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		y(i);
		var k, b = [];
		for (v(b); k = function() {
			var e = f(), t = y(l);
			if (t) {
				if (x(), !y(o)) return g("property missing ':'");
				var r = y(a), i = e({
					type: "declaration",
					property: c(t[0].replace(n, "")),
					value: r ? c(r[0].replace(n, "")) : ""
				});
				return y(u), i;
			}
		}();) !1 !== k && (b.push(k), v(b));
		return b;
	};
}), rJ = n((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, t) {
		let r = null;
		if (!e || "string" != typeof e) return r;
		let i = (0, n.default)(e), l = "function" == typeof t;
		return i.forEach((e) => {
			if ("declaration" !== e.type) return;
			let { property: n, value: i } = e;
			l ? t(n, i, e) : i && ((r = r || {})[n] = i);
		}), r;
	};
	var n = t(rW());
}), rZ = n((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, l = /^-(ms)-/, o = function(e, t) {
		return t.toUpperCase();
	}, a = function(e, t) {
		return "".concat(t, "-");
	};
	e.camelCase = function(e, u) {
		var s;
		return (void 0 === u && (u = {}), !(s = e) || r.test(s) || t.test(s)) ? e : (e = e.toLowerCase(), (e = u.reactCompat ? e.replace(l, a) : e.replace(i, a)).replace(n, o));
	};
}), rK = n((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(rJ()), r = rZ();
	function i(e, t) {
		var i = {};
		return e && "string" == typeof e && (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
});
let rX = rY("end"), rQ = rY("start");
function rY(e) {
	return function(t) {
		let n = t && t.position && t.position[e] || {};
		if ("number" == typeof n.line && n.line > 0 && "number" == typeof n.column && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0
		};
	};
}
var rG = class extends Error {
	constructor(e, t, n) {
		super(), "string" == typeof t && (n = t, t = void 0);
		let r = "", i = {}, l = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), "string" == typeof e ? r = e : !i.cause && e && (l = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && "string" == typeof n) {
			let e = n.indexOf(":");
			-1 === e ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = tD(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = l && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
rG.prototype.file = "", rG.prototype.name = "", rG.prototype.reason = "", rG.prototype.message = "", rG.prototype.stack = "", rG.prototype.column = void 0, rG.prototype.line = void 0, rG.prototype.ancestors = void 0, rG.prototype.cause = void 0, rG.prototype.fatal = void 0, rG.prototype.place = void 0, rG.prototype.ruleId = void 0, rG.prototype.source = void 0;
var r1 = t(rK()), r0 = {}.hasOwnProperty, r2 = /* @__PURE__ */ new Map(), r3 = /[A-Z]/g, r4 = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), r5 = new Set(["td", "th"]), r9 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function r6(e, t, n) {
	return "element" === t.type ? function(e, t, n) {
		let r = e.schema;
		"svg" === t.tagName.toLowerCase() && "html" === r.space && (e.schema = rq), e.ancestors.push(t);
		let i = it(e, t.tagName, !1), l = function(e, t) {
			let n, r, i = {};
			for (r in t.properties) if ("children" !== r && r0.call(t.properties, r)) {
				let l = function(e, t, n) {
					let r = function(e, t) {
						let n = rm(t), r = t, i = rg;
						if (n in e.normal) return e.property[e.normal[n]];
						if (n.length > 4 && "data" === n.slice(0, 4) && rB.test(t)) {
							if ("-" === t.charAt(4)) {
								let e = t.slice(5).replace(rV, rj);
								r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
							} else {
								let e = t.slice(4);
								if (!rV.test(e)) {
									let n = e.replace(rH, r$);
									"-" !== n.charAt(0) && (n = "-" + n), t = "data" + n;
								}
							}
							i = rE;
						}
						return new i(r, t);
					}(e.schema, t);
					if (!(null == n || "number" == typeof n && Number.isNaN(n))) {
						if (Array.isArray(n) && (n = r.commaSeparated ? function(e, t) {
							let n = {};
							return ("" === e[e.length - 1] ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim();
						}(n) : n.join(" ").trim()), "style" === r.property) {
							let t = "object" == typeof n ? n : function(e, t) {
								try {
									return (0, r1.default)(t, { reactCompat: !0 });
								} catch (n) {
									if (e.ignoreInvalidStyle) return {};
									let t = new rG("Cannot parse `style` attribute", {
										ancestors: e.ancestors,
										cause: n,
										ruleId: "style",
										source: "hast-util-to-jsx-runtime"
									});
									throw t.file = e.filePath || void 0, t.url = r9 + "#cannot-parse-style-attribute", t;
								}
							}(e, String(n));
							return "css" === e.stylePropertyNameCase && (t = function(e) {
								let t, n = {};
								for (t in e) r0.call(e, t) && (n[function(e) {
									let t = e.replace(r3, ii);
									return "ms-" === t.slice(0, 3) && (t = "-" + t), t;
								}(t)] = e[t]);
								return n;
							}(t)), ["style", t];
						}
						return ["react" === e.elementAttributeNameCase && r.space ? rR[r.property] || r.property : r.attribute, n];
					}
				}(e, r, t.properties[r]);
				if (l) {
					let [r, o] = l;
					e.tableCellAlignToStyle && "align" === r && "string" == typeof o && r5.has(t.tagName) ? n = o : i[r] = o;
				}
			}
			return n && ((i.style || (i.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n), i;
		}(e, t), o = ie(e, t);
		return r4.has(t.tagName) && (o = o.filter(function(e) {
			return "string" != typeof e || !("object" == typeof e ? "text" === e.type && rp(e.value) : rp(e));
		})), r8(e, l, i, t), r7(l, o), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
	}(e, t, n) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) {
			let n = t.data.estree.body[0];
			return n.type, e.evaluater.evaluateExpression(n.expression);
		}
		ir(e, t.position);
	}(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? function(e, t, n) {
		let r = e.schema;
		"svg" === t.name && "html" === r.space && (e.schema = rq), e.ancestors.push(t);
		let i = null === t.name ? e.Fragment : it(e, t.name, !0), l = function(e, t) {
			let n = {};
			for (let r of t.attributes) if ("mdxJsxExpressionAttribute" === r.type) if (r.data && r.data.estree && e.evaluater) {
				let t = r.data.estree.body[0];
				t.type;
				let i = t.expression;
				i.type;
				let l = i.properties[0];
				l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument));
			} else ir(e, t.position);
			else {
				let i, l = r.name;
				if (r.value && "object" == typeof r.value) if (r.value.data && r.value.data.estree && e.evaluater) {
					let t = r.value.data.estree.body[0];
					t.type, i = e.evaluater.evaluateExpression(t.expression);
				} else ir(e, t.position);
				else i = null === r.value || r.value;
				n[l] = i;
			}
			return n;
		}(e, t), o = ie(e, t);
		return r8(e, l, i, t), r7(l, o), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
	}(e, t, n) : "mdxjsEsm" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
		ir(e, t.position);
	}(e, t) : "root" === t.type ? function(e, t, n) {
		let r = {};
		return r7(r, ie(e, t)), e.create(t, e.Fragment, r, n);
	}(e, t, n) : "text" === t.type ? t.value : void 0;
}
function r8(e, t, n, r) {
	"string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
}
function r7(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function ie(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : r2;
	for (; ++r < t.children.length;) {
		let l, o = t.children[r];
		if (e.passKeys) {
			let e = "element" === o.type ? o.tagName : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type ? o.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				l = e + "-" + t, i.set(e, t + 1);
			}
		}
		let a = r6(e, o, l);
		void 0 !== a && n.push(a);
	}
	return n;
}
function it(e, t, n) {
	let r;
	if (n) if (t.includes(".")) {
		let e, n = t.split("."), i = -1;
		for (; ++i < n.length;) {
			let t = rc(n[i]) ? {
				type: "Identifier",
				name: n[i]
			} : {
				type: "Literal",
				value: n[i]
			};
			e = e ? {
				type: "MemberExpression",
				object: e,
				property: t,
				computed: !!(i && "Literal" === t.type),
				optional: !1
			} : t;
		}
		r = e;
	} else r = rc(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	else r = {
		type: "Literal",
		value: t
	};
	if ("Literal" === r.type) {
		let t = r.value;
		return r0.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	ir(e);
}
function ir(e, t) {
	let n = new rG("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = r9 + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function ii(e) {
	return "-" + e.toLowerCase();
}
function il(e, t) {
	let n = t.referenceType, r = "]";
	if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), l = i[0];
	l && "text" === l.type ? l.value = "[" + l.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && "text" === o.type ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
function io(e) {
	let t = e.spread;
	return null == t ? e.children.length > 1 : t;
}
function ia(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; 9 === t || 32 === t;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; 9 === t || 32 === t;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
let iu = {
	blockquote: function(e, t) {
		let n = {
			type: "element",
			tagName: "blockquote",
			properties: {},
			children: e.wrap(e.all(t), !0)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	break: function(e, t) {
		let n = {
			type: "element",
			tagName: "br",
			properties: {},
			children: []
		};
		return e.patch(t, n), [e.applyData(t, n), {
			type: "text",
			value: "\n"
		}];
	},
	code: function(e, t) {
		let n = t.value ? t.value + "\n" : "", r = {};
		t.lang && (r.className = ["language-" + t.lang]);
		let i = {
			type: "element",
			tagName: "code",
			properties: r,
			children: [{
				type: "text",
				value: n
			}]
		};
		return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = {
			type: "element",
			tagName: "pre",
			properties: {},
			children: [i = e.applyData(t, i)]
		}, e.patch(t, i), i;
	},
	delete: function(e, t) {
		let n = {
			type: "element",
			tagName: "del",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	emphasis: function(e, t) {
		let n = {
			type: "element",
			tagName: "em",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	footnoteReference: function(e, t) {
		let n, r = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", i = String(t.identifier).toUpperCase(), l = eM(i.toLowerCase()), o = e.footnoteOrder.indexOf(i), a = e.footnoteCounts.get(i);
		void 0 === a ? (a = 0, e.footnoteOrder.push(i), n = e.footnoteOrder.length) : n = o + 1, a += 1, e.footnoteCounts.set(i, a);
		let u = {
			type: "element",
			tagName: "a",
			properties: {
				href: "#" + r + "fn-" + l,
				id: r + "fnref-" + l + (a > 1 ? "-" + a : ""),
				dataFootnoteRef: !0,
				ariaDescribedBy: ["footnote-label"]
			},
			children: [{
				type: "text",
				value: String(n)
			}]
		};
		e.patch(t, u);
		let s = {
			type: "element",
			tagName: "sup",
			properties: {},
			children: [u]
		};
		return e.patch(t, s), e.applyData(t, s);
	},
	heading: function(e, t) {
		let n = {
			type: "element",
			tagName: "h" + t.depth,
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	html: function(e, t) {
		if (e.options.allowDangerousHtml) {
			let n = {
				type: "raw",
				value: t.value
			};
			return e.patch(t, n), e.applyData(t, n);
		}
	},
	imageReference: function(e, t) {
		let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
		if (!r) return il(e, t);
		let i = {
			src: eM(r.url || ""),
			alt: t.alt
		};
		null !== r.title && void 0 !== r.title && (i.title = r.title);
		let l = {
			type: "element",
			tagName: "img",
			properties: i,
			children: []
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	image: function(e, t) {
		let n = { src: eM(t.url) };
		null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "img",
			properties: n,
			children: []
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	inlineCode: function(e, t) {
		let n = {
			type: "text",
			value: t.value.replace(/\r?\n|\r/g, " ")
		};
		e.patch(t, n);
		let r = {
			type: "element",
			tagName: "code",
			properties: {},
			children: [n]
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	linkReference: function(e, t) {
		let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
		if (!r) return il(e, t);
		let i = { href: eM(r.url || "") };
		null !== r.title && void 0 !== r.title && (i.title = r.title);
		let l = {
			type: "element",
			tagName: "a",
			properties: i,
			children: e.all(t)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	link: function(e, t) {
		let n = { href: eM(t.url) };
		null !== t.title && void 0 !== t.title && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "a",
			properties: n,
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	listItem: function(e, t, n) {
		let r = e.all(t), i = n ? function(e) {
			let t = !1;
			if ("list" === e.type) {
				t = e.spread || !1;
				let n = e.children, r = -1;
				for (; !t && ++r < n.length;) t = io(n[r]);
			}
			return t;
		}(n) : io(t), l = {}, o = [];
		if ("boolean" == typeof t.checked) {
			let e, n = r[0];
			n && "element" === n.type && "p" === n.tagName ? e = n : (e = {
				type: "element",
				tagName: "p",
				properties: {},
				children: []
			}, r.unshift(e)), e.children.length > 0 && e.children.unshift({
				type: "text",
				value: " "
			}), e.children.unshift({
				type: "element",
				tagName: "input",
				properties: {
					type: "checkbox",
					checked: t.checked,
					disabled: !0
				},
				children: []
			}), l.className = ["task-list-item"];
		}
		let a = -1;
		for (; ++a < r.length;) {
			let e = r[a];
			(i || 0 !== a || "element" !== e.type || "p" !== e.tagName) && o.push({
				type: "text",
				value: "\n"
			}), "element" !== e.type || "p" !== e.tagName || i ? o.push(e) : o.push(...e.children);
		}
		let u = r[r.length - 1];
		u && (i || "element" !== u.type || "p" !== u.tagName) && o.push({
			type: "text",
			value: "\n"
		});
		let s = {
			type: "element",
			tagName: "li",
			properties: l,
			children: o
		};
		return e.patch(t, s), e.applyData(t, s);
	},
	list: function(e, t) {
		let n = {}, r = e.all(t), i = -1;
		for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++i < r.length;) {
			let e = r[i];
			if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
				n.className = ["contains-task-list"];
				break;
			}
		}
		let l = {
			type: "element",
			tagName: t.ordered ? "ol" : "ul",
			properties: n,
			children: e.wrap(r, !0)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	paragraph: function(e, t) {
		let n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	root: function(e, t) {
		let n = {
			type: "root",
			children: e.wrap(e.all(t))
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	strong: function(e, t) {
		let n = {
			type: "element",
			tagName: "strong",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	table: function(e, t) {
		let n = e.all(t), r = n.shift(), i = [];
		if (r) {
			let n = {
				type: "element",
				tagName: "thead",
				properties: {},
				children: e.wrap([r], !0)
			};
			e.patch(t.children[0], n), i.push(n);
		}
		if (n.length > 0) {
			let r = {
				type: "element",
				tagName: "tbody",
				properties: {},
				children: e.wrap(n, !0)
			}, l = rQ(t.children[1]), o = rX(t.children[t.children.length - 1]);
			l && o && (r.position = {
				start: l,
				end: o
			}), i.push(r);
		}
		let l = {
			type: "element",
			tagName: "table",
			properties: {},
			children: e.wrap(i, !0)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	tableCell: function(e, t) {
		let n = {
			type: "element",
			tagName: "td",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	tableRow: function(e, t, n) {
		let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && "table" === n.type ? n.align : void 0, o = l ? l.length : t.children.length, a = -1, u = [];
		for (; ++a < o;) {
			let n = t.children[a], r = {}, o = l ? l[a] : void 0;
			o && (r.align = o);
			let s = {
				type: "element",
				tagName: i,
				properties: r,
				children: []
			};
			n && (s.children = e.all(n), e.patch(n, s), s = e.applyData(n, s)), u.push(s);
		}
		let s = {
			type: "element",
			tagName: "tr",
			properties: {},
			children: e.wrap(u, !0)
		};
		return e.patch(t, s), e.applyData(t, s);
	},
	text: function(e, t) {
		let n = {
			type: "text",
			value: function(e) {
				let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, l = [];
				for (; r;) l.push(ia(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
				return l.push(ia(t.slice(i), i > 0, !1)), l.join("");
			}(String(t.value))
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	thematicBreak: function(e, t) {
		let n = {
			type: "element",
			tagName: "hr",
			properties: {},
			children: []
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	toml: is,
	yaml: is,
	definition: is,
	footnoteDefinition: is
};
function is() {}
var ic = "object" == typeof self ? self : globalThis;
let id = (e) => ((e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [l, o] = t[i];
		switch (l) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new ic[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new ic[l](o), i);
	};
	return r;
})(/* @__PURE__ */ new Map(), e)(0);
var { toString: ip } = {}, { keys: ih } = Object, im = (e) => {
	let t = typeof e;
	if ("object" !== t || !e) return [0, t];
	let n = ip.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, ""];
		case "Object": return [2, ""];
		case "Date": return [3, ""];
		case "RegExp": return [4, ""];
		case "Map": return [5, ""];
		case "Set": return [6, ""];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, ig = ([e, t]) => 0 === e && ("function" === t || "symbol" === t);
let iy = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return ((e, t, n, r) => {
		let i = (e, t) => {
			let i = r.push(e) - 1;
			return n.set(t, i), i;
		}, l = (r) => {
			if (n.has(r)) return n.get(r);
			let [o, a] = im(r);
			switch (o) {
				case 0: {
					let t = r;
					switch (a) {
						case "bigint":
							o = 8, t = r.toString();
							break;
						case "function":
						case "symbol":
							if (e) throw TypeError("unable to serialize " + a);
							t = null;
							break;
						case "undefined": return i([-1], r);
					}
					return i([o, t], r);
				}
				case 1: {
					if (a) {
						let e = r;
						return "DataView" === a ? e = new Uint8Array(r.buffer) : "ArrayBuffer" === a && (e = new Uint8Array(r)), i([a, [...e]], r);
					}
					let e = [], t = i([o, e], r);
					for (let t of r) e.push(l(t));
					return t;
				}
				case 2: {
					if (a) switch (a) {
						case "BigInt": return i([a, r.toString()], r);
						case "Boolean":
						case "Number":
						case "String": return i([a, r.valueOf()], r);
					}
					if (t && "toJSON" in r) return l(r.toJSON());
					let n = [], u = i([o, n], r);
					for (let t of ih(r)) (e || !ig(im(r[t]))) && n.push([l(t), l(r[t])]);
					return u;
				}
				case 3: return i([o, r.toISOString()], r);
				case 4: {
					let { source: e, flags: t } = r;
					return i([o, {
						source: e,
						flags: t
					}], r);
				}
				case 5: {
					let t = [], n = i([o, t], r);
					for (let [n, i] of r) (e || !(ig(im(n)) || ig(im(i)))) && t.push([l(n), l(i)]);
					return n;
				}
				case 6: {
					let t = [], n = i([o, t], r);
					for (let n of r) (e || !ig(im(n))) && t.push(l(n));
					return n;
				}
			}
			let { message: u } = r;
			return i([o, {
				name: a,
				message: u
			}], r);
		};
		return l;
	})(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
};
var iv = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? id(iy(e, t)) : structuredClone(e) : (e, t) => id(iy(e, t));
function ix(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function ik(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
var ib = {}.hasOwnProperty, iC = {};
function iS(e, t) {
	e.position && (t.position = function(e) {
		let t = rQ(e), n = rX(e);
		if (t && n) return {
			start: t,
			end: n
		};
	}(e));
}
function iw(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		"string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), "element" === n.type && i && Object.assign(n.properties, iv(i)), "children" in n && n.children && null != r && (n.children = r);
	}
	return n;
}
function iA(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function iL(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; 9 === n || 32 === n;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
var iT = _((e, {}) => I(e.text$, U(), k((t) => {
	var n, r;
	let i, l, o, a, u = function(e, t) {
		let n = function(e, t) {
			var n, r;
			let i, l, o, a = t || iC, u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = {
				all: function(e) {
					let t = [];
					if ("children" in e) {
						let n = e.children, r = -1;
						for (; ++r < n.length;) {
							let i = c.one(n[r], e);
							if (i) {
								if (r && "break" === n[r - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = iL(i.value)), !Array.isArray(i) && "element" === i.type)) {
									let e = i.children[0];
									e && "text" === e.type && (e.value = iL(e.value));
								}
								Array.isArray(i) ? t.push(...i) : t.push(i);
							}
						}
					}
					return t;
				},
				applyData: iw,
				definitionById: u,
				footnoteById: s,
				footnoteCounts: /* @__PURE__ */ new Map(),
				footnoteOrder: [],
				handlers: {
					...iu,
					...a.handlers
				},
				one: function(e, t) {
					let n = e.type, r = c.handlers[n];
					if (ib.call(c.handlers, n) && r) return r(c, e, t);
					if (c.options.passThrough && c.options.passThrough.includes(n)) {
						if ("children" in e) {
							let { children: t,...n } = e, r = iv(n);
							return r.children = c.all(e), r;
						}
						return iv(e);
					}
					return (c.options.unknownHandler || function(e, t) {
						let n = t.data || {}, r = "value" in t && !(ib.call(n, "hProperties") || ib.call(n, "hChildren")) ? {
							type: "text",
							value: t.value
						} : {
							type: "element",
							tagName: "div",
							properties: {},
							children: e.all(t)
						};
						return e.patch(t, r), e.applyData(t, r);
					})(c, e, t);
				},
				options: a,
				patch: iS,
				wrap: iA
			};
			return "function" == typeof (n = function(e) {
				if ("definition" === e.type || "footnoteDefinition" === e.type) {
					let t = "definition" === e.type ? u : s, n = String(e.identifier).toUpperCase();
					t.has(n) || t.set(n, e);
				}
			}) ? (l = void 0, o = n, i = r) : (l = n, o = r, i = void 0), tB(e, l, function(e, t) {
				let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
				return o(e, r, n);
			}, i), c;
		}(e, void 0), r = n.one(e, void 0), i = function(e) {
			let t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || ix, r = e.options.footnoteBackLabel || ik, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, a = [], u = -1;
			for (; ++u < e.footnoteOrder.length;) {
				let i = e.footnoteById.get(e.footnoteOrder[u]);
				if (!i) continue;
				let l = e.all(i), o = String(i.identifier).toUpperCase(), s = eM(o.toLowerCase()), c = 0, d = [], p = e.footnoteCounts.get(o);
				for (; void 0 !== p && ++c <= p;) {
					d.length > 0 && d.push({
						type: "text",
						value: " "
					});
					let e = "string" == typeof n ? n : n(u, c);
					"string" == typeof e && (e = {
						type: "text",
						value: e
					}), d.push({
						type: "element",
						tagName: "a",
						properties: {
							href: "#" + t + "fnref-" + s + (c > 1 ? "-" + c : ""),
							dataFootnoteBackref: "",
							ariaLabel: "string" == typeof r ? r : r(u, c),
							className: ["data-footnote-backref"]
						},
						children: Array.isArray(e) ? e : [e]
					});
				}
				let f = l[l.length - 1];
				if (f && "element" === f.type && "p" === f.tagName) {
					let e = f.children[f.children.length - 1];
					e && "text" === e.type ? e.value += " " : f.children.push({
						type: "text",
						value: " "
					}), f.children.push(...d);
				} else l.push(...d);
				let h = {
					type: "element",
					tagName: "li",
					properties: { id: t + "fn-" + s },
					children: e.wrap(l, !0)
				};
				e.patch(i, h), a.push(h);
			}
			if (0 !== a.length) return {
				type: "element",
				tagName: "section",
				properties: {
					dataFootnotes: !0,
					className: ["footnotes"]
				},
				children: [
					{
						type: "element",
						tagName: l,
						properties: {
							...iv(o),
							id: "footnote-label"
						},
						children: [{
							type: "text",
							value: i
						}]
					},
					{
						type: "text",
						value: "\n"
					},
					{
						type: "element",
						tagName: "ol",
						properties: {},
						children: e.wrap(a, !0)
					},
					{
						type: "text",
						value: "\n"
					}
				]
			};
		}(n), l = Array.isArray(r) ? {
			type: "root",
			children: r
		} : r || {
			type: "root",
			children: []
		};
		return i && l.children.push({
			type: "text",
			value: "\n"
		}, i), l;
	}(("string" != typeof (n = {
		extensions: [eh([
			{ text: nm },
			{
				document: { 91: {
					name: "gfmFootnoteDefinition",
					tokenize: nL,
					continuation: { tokenize: nT },
					exit: nE
				} },
				text: {
					91: {
						name: "gfmFootnoteCall",
						tokenize: nA
					},
					93: {
						name: "gfmPotentialFootnoteCall",
						add: "after",
						tokenize: nS,
						resolveTo: nw
					}
				}
			},
			function(e) {
				let t = (e || {}).singleTilde, n = {
					name: "strikethrough",
					tokenize: function(e, n, r) {
						let i = this.previous, l = this.events, o = 0;
						return function(a) {
							return 126 === i && "characterEscape" !== l[l.length - 1][1].type ? r(a) : (e.enter("strikethroughSequenceTemporary"), function l(a) {
								let u = ez(i);
								if (126 === a) return o > 1 ? r(a) : (e.consume(a), o++, l);
								if (o < 2 && !t) return r(a);
								let s = e.exit("strikethroughSequenceTemporary"), c = ez(a);
								return s._open = !c || 2 === c && !!u, s._close = !u || 2 === u && !!c, n(a);
							}(a));
						};
					},
					resolveAll: function(e, t) {
						let n = -1;
						for (; ++n < e.length;) if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
							let r = n;
							for (; r--;) if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
								e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
								let i = {
									type: "strikethrough",
									start: Object.assign({}, e[r][1].start),
									end: Object.assign({}, e[n][1].end)
								}, l = {
									type: "strikethroughText",
									start: Object.assign({}, e[r][1].end),
									end: Object.assign({}, e[n][1].start)
								}, o = [
									[
										"enter",
										i,
										t
									],
									[
										"enter",
										e[r][1],
										t
									],
									[
										"exit",
										e[r][1],
										t
									],
									[
										"enter",
										l,
										t
									]
								], a = t.parser.constructs.insideSpan.null;
								a && ed(o, o.length, 0, eF(a, e.slice(r + 1, n), t)), ed(o, o.length, 0, [
									[
										"exit",
										l,
										t
									],
									[
										"enter",
										e[n][1],
										t
									],
									[
										"exit",
										e[n][1],
										t
									],
									[
										"exit",
										i,
										t
									]
								]), ed(e, r - 1, n - r + 3, o), n = r + o.length - 2;
								break;
							}
						}
						for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
						return e;
					}
				};
				return t ??= !0, {
					text: { 126: n },
					insideSpan: { null: [n] },
					attentionMarkers: { null: [126] }
				};
			}(void 0),
			{ flow: { null: {
				name: "table",
				tokenize: nM,
				resolveAll: nI
			} } },
			{ text: { 91: nz } }
		]), {
			text: { 58: nJ },
			flow: { 58: [nV, nU] }
		}],
		mdastExtensions: [[
			{
				transforms: [tZ],
				enter: {
					literalAutolink: t$,
					literalAutolinkEmail: tj,
					literalAutolinkHttp: tj,
					literalAutolinkWww: tj
				},
				exit: {
					literalAutolink: tJ,
					literalAutolinkEmail: tW,
					literalAutolinkHttp: tU,
					literalAutolinkWww: tq
				}
			},
			{
				enter: {
					gfmFootnoteCallString: tY,
					gfmFootnoteCall: tG,
					gfmFootnoteDefinitionLabelString: t1,
					gfmFootnoteDefinition: t0
				},
				exit: {
					gfmFootnoteCallString: t2,
					gfmFootnoteCall: t3,
					gfmFootnoteDefinitionLabelString: t4,
					gfmFootnoteDefinition: t5
				}
			},
			{
				canContainEols: ["delete"],
				enter: { strikethrough: t9 },
				exit: { strikethrough: t6 }
			},
			{
				enter: {
					table: t8,
					tableData: nn,
					tableHeader: nn,
					tableRow: ne
				},
				exit: {
					codeText: nr,
					table: t7,
					tableData: nt,
					tableHeader: nt,
					tableRow: nt
				}
			},
			{ exit: {
				taskListCheckValueChecked: nl,
				taskListCheckValueUnchecked: nl,
				paragraph: no
			} }
		], {
			canContainEols: ["textDirective"],
			enter: {
				directiveContainer: n3,
				directiveContainerAttributes: re,
				directiveContainerLabel: n8,
				directiveLeaf: n4,
				directiveLeafAttributes: re,
				directiveText: n5,
				directiveTextAttributes: re
			},
			exit: {
				directiveContainer: ro,
				directiveContainerAttributeClassValue: rn,
				directiveContainerAttributeIdValue: rt,
				directiveContainerAttributeName: ri,
				directiveContainerAttributeValue: rr,
				directiveContainerAttributes: rl,
				directiveContainerLabel: n7,
				directiveContainerName: n6,
				directiveLeaf: ro,
				directiveLeafAttributeClassValue: rn,
				directiveLeafAttributeIdValue: rt,
				directiveLeafAttributeName: ri,
				directiveLeafAttributeValue: rr,
				directiveLeafAttributes: rl,
				directiveLeafName: n6,
				directiveText: ro,
				directiveTextAttributeClassValue: rn,
				directiveTextAttributeIdValue: rt,
				directiveTextAttributeName: ri,
				directiveTextAttributeValue: rr,
				directiveTextAttributes: rl,
				directiveTextName: n6
			}
		}]
	}) && (r = n, n = void 0), (function(e) {
		let t = {
			transforms: [],
			canContainEols: [
				"emphasis",
				"fragment",
				"heading",
				"paragraph",
				"strong"
			],
			enter: {
				autolink: r(y),
				autolinkProtocol: s,
				autolinkEmail: s,
				atxHeading: r(h),
				blockQuote: r(function() {
					return {
						type: "blockquote",
						children: []
					};
				}),
				characterEscape: s,
				characterReference: s,
				codeFenced: r(f),
				codeFencedFenceInfo: i,
				codeFencedFenceMeta: i,
				codeIndented: r(f, i),
				codeText: r(function() {
					return {
						type: "inlineCode",
						value: ""
					};
				}, i),
				codeTextData: s,
				data: s,
				codeFlowValue: s,
				definition: r(function() {
					return {
						type: "definition",
						identifier: "",
						label: null,
						title: null,
						url: ""
					};
				}),
				definitionDestinationString: i,
				definitionLabelString: i,
				definitionTitleString: i,
				emphasis: r(function() {
					return {
						type: "emphasis",
						children: []
					};
				}),
				hardBreakEscape: r(m),
				hardBreakTrailing: r(m),
				htmlFlow: r(g, i),
				htmlFlowData: s,
				htmlText: r(g, i),
				htmlTextData: s,
				image: r(function() {
					return {
						type: "image",
						title: null,
						url: "",
						alt: null
					};
				}),
				label: i,
				link: r(y),
				listItem: r(function(e) {
					return {
						type: "listItem",
						spread: e._spread,
						checked: null,
						children: []
					};
				}),
				listItemValue: function(e) {
					this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0);
				},
				listOrdered: r(v, function() {
					this.data.expectingFirstListItemValue = !0;
				}),
				listUnordered: r(v),
				paragraph: r(function() {
					return {
						type: "paragraph",
						children: []
					};
				}),
				reference: function() {
					this.data.referenceType = "collapsed";
				},
				referenceString: i,
				resourceDestinationString: i,
				resourceTitleString: i,
				setextHeading: r(h),
				strong: r(function() {
					return {
						type: "strong",
						children: []
					};
				}),
				thematicBreak: r(function() {
					return { type: "thematicBreak" };
				})
			},
			exit: {
				atxHeading: o(),
				atxHeadingSequence: function(e) {
					let t = this.stack[this.stack.length - 1];
					t.depth || (t.depth = this.sliceSerialize(e).length);
				},
				autolink: o(),
				autolinkEmail: function(e) {
					c.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e);
				},
				autolinkProtocol: function(e) {
					c.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
				},
				blockQuote: o(),
				characterEscapeValue: c,
				characterReferenceMarkerHexadecimal: p,
				characterReferenceMarkerNumeric: p,
				characterReferenceValue: function(e) {
					let t, n = this.sliceSerialize(e), r = this.data.characterReferenceType;
					r ? (t = em(n, "characterReferenceMarkerNumeric" === r ? 10 : 16), this.data.characterReferenceType = void 0) : t = ec(n);
					let i = this.stack[this.stack.length - 1];
					i.value += t;
				},
				characterReference: function(e) {
					this.stack.pop().position.end = tP(e.end);
				},
				codeFenced: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
				}),
				codeFencedFence: function() {
					this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
				},
				codeFencedFenceInfo: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].lang = e;
				},
				codeFencedFenceMeta: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].meta = e;
				},
				codeFlowValue: c,
				codeIndented: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
				}),
				codeText: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				codeTextData: c,
				data: c,
				definition: o(),
				definitionDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				definitionLabelString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = eg(this.sliceSerialize(e)).toLowerCase();
				},
				definitionTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				emphasis: o(),
				hardBreakEscape: o(d),
				hardBreakTrailing: o(d),
				htmlFlow: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlFlowData: c,
				htmlText: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlTextData: c,
				image: o(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				label: function() {
					let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
					this.data.inReference = !0, "link" === n.type ? n.children = e.children : n.alt = t;
				},
				labelText: function(e) {
					let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
					n.label = t.replace(tT, tE), n.identifier = eg(t).toLowerCase();
				},
				lineEnding: function(e) {
					let n = this.stack[this.stack.length - 1];
					if (this.data.atHardBreak) {
						n.children[n.children.length - 1].position.end = tP(e.end), this.data.atHardBreak = void 0;
						return;
					}
					!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (s.call(this, e), c.call(this, e));
				},
				link: o(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				listItem: o(),
				listOrdered: o(),
				listUnordered: o(),
				paragraph: o(),
				referenceString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = eg(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
				},
				resourceDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				resourceTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				resource: function() {
					this.data.inReference = void 0;
				},
				setextHeading: o(function() {
					this.data.setextHeadingSlurpLineEnding = void 0;
				}),
				setextHeadingLineSequence: function(e) {
					this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
				},
				setextHeadingText: function() {
					this.data.setextHeadingSlurpLineEnding = !0;
				},
				strong: o(),
				thematicBreak: o()
			}
		};
		(function e(t, n) {
			let r = -1;
			for (; ++r < n.length;) {
				let i = n[r];
				Array.isArray(i) ? e(t, i) : function(e, t) {
					let n;
					for (n in t) if (tO.call(t, n)) switch (n) {
						case "canContainEols": {
							let r = t[n];
							r && e[n].push(...r);
							break;
						}
						case "transforms": {
							let r = t[n];
							r && e[n].push(...r);
							break;
						}
						case "enter":
						case "exit": {
							let r = t[n];
							r && Object.assign(e[n], r);
						}
					}
				}(t, i);
			}
		})(t, (e || {}).mdastExtensions || []);
		let n = {};
		return function(e) {
			let r = {
				type: "root",
				children: []
			}, o = {
				stack: [r],
				tokenStack: [],
				config: t,
				enter: l,
				exit: a,
				buffer: i,
				resume: u,
				data: n
			}, s = [], c = -1;
			for (; ++c < e.length;) ("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type) && ("enter" === e[c][0] ? s.push(c) : c = function(e, t, n) {
				let r, i, l, o, a = t - 1, u = -1, s = !1;
				for (; ++a <= n;) {
					let t = e[a];
					switch (t[1].type) {
						case "listUnordered":
						case "listOrdered":
						case "blockQuote":
							"enter" === t[0] ? u++ : u--, o = void 0;
							break;
						case "lineEndingBlank":
							"enter" === t[0] && (!r || o || u || l || (l = a), o = void 0);
							break;
						case "linePrefix":
						case "listItemValue":
						case "listItemMarker":
						case "listItemPrefix":
						case "listItemPrefixWhitespace": break;
						default: o = void 0;
					}
					if (!u && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === u && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
						if (r) {
							let o = a;
							for (i = void 0; o--;) {
								let t = e[o];
								if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
									if ("exit" === t[0]) continue;
									i && (e[i][1].type = "lineEndingBlank", s = !0), t[1].type = "lineEnding", i = o;
								} else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
								else break;
							}
							l && (!i || l < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || a, 0, [
								"exit",
								r,
								t[2]
							]), a++, n++;
						}
						if ("listItemPrefix" === t[1].type) {
							let i = {
								type: "listItem",
								_spread: !1,
								start: Object.assign({}, t[1].start),
								end: void 0
							};
							r = i, e.splice(a, 0, [
								"enter",
								i,
								t[2]
							]), a++, n++, l = void 0, o = !0;
						}
					}
				}
				return e[t][1]._spread = s, n;
			}(e, s.pop(), c));
			for (c = -1; ++c < e.length;) {
				let n = t[e[c][0]];
				tO.call(n, e[c][1].type) && n[e[c][1].type].call(Object.assign({ sliceSerialize: e[c][2].sliceSerialize }, o), e[c][1]);
			}
			if (o.tokenStack.length > 0) {
				let e = o.tokenStack[o.tokenStack.length - 1];
				(e[1] || tz).call(o, void 0, e[0]);
			}
			for (r.position = {
				start: tP(e.length > 0 ? e[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: tP(e.length > 0 ? e[e.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, c = -1; ++c < t.transforms.length;) r = t.transforms[c](r) || r;
			return r;
		};
		function r(e, t) {
			return function(n) {
				l.call(this, e(n), n), t && t.call(this, n);
			};
		}
		function i() {
			this.stack.push({
				type: "fragment",
				children: []
			});
		}
		function l(e, t, n) {
			this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
				start: tP(t.start),
				end: void 0
			};
		}
		function o(e) {
			return function(t) {
				e && e.call(this, t), a.call(this, t);
			};
		}
		function a(e, t) {
			let n = this.stack.pop(), r = this.tokenStack.pop();
			if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || tz).call(this, e, r[0]));
			else throw Error("Cannot close `" + e.type + "` (" + tD({
				start: e.start,
				end: e.end
			}) + "): it’s not open");
			n.position.end = tP(e.end);
		}
		function u() {
			return ea(this.stack.pop(), "boolean" != typeof eo.includeImageAlt || eo.includeImageAlt, "boolean" != typeof eo.includeHtml || eo.includeHtml);
		}
		function s(e) {
			let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
			n && "text" === n.type || ((n = {
				type: "text",
				value: ""
			}).position = {
				start: tP(e.start),
				end: void 0
			}, t.push(n)), this.stack.push(n);
		}
		function c(e) {
			let t = this.stack.pop();
			t.value += this.sliceSerialize(e), t.position.end = tP(e.end);
		}
		function d() {
			this.data.atHardBreak = !0;
		}
		function p(e) {
			this.data.characterReferenceType = e.type;
		}
		function f() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			};
		}
		function h() {
			return {
				type: "heading",
				depth: 0,
				children: []
			};
		}
		function m() {
			return { type: "break" };
		}
		function g() {
			return {
				type: "html",
				value: ""
			};
		}
		function y() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			};
		}
		function v(e) {
			return {
				type: "list",
				ordered: "listOrdered" === e.type,
				start: null,
				spread: e._spread,
				children: []
			};
		}
	})(r)(function(e) {
		for (; !eK(e););
		return e;
	}((function(e) {
		let t = {
			constructs: eh([tg, ...(e || {}).extensions || []]),
			content: n(eN),
			defined: [],
			document: n(eO),
			flow: n(ts),
			lazy: {},
			string: n(td),
			text: n(tp)
		};
		return t;
		function n(e) {
			return function(n) {
				return function(e, t, n) {
					let r = {
						_bufferIndex: -1,
						_index: 0,
						line: n && n.line || 1,
						column: n && n.column || 1,
						offset: n && n.offset || 0
					}, i = {}, l = [], o = [], a = [], u = {
						attempt: h(function(e, t) {
							m(e, t.from);
						}),
						check: h(f),
						consume: function(e) {
							ew(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, g()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = e;
						},
						enter: function(e, t) {
							let n = t || {};
							return n.type = e, n.start = p(), s.events.push([
								"enter",
								n,
								s
							]), a.push(n), n;
						},
						exit: function(e) {
							let t = a.pop();
							return t.end = p(), s.events.push([
								"exit",
								t,
								s
							]), t;
						},
						interrupt: h(f, { interrupt: !0 })
					}, s = {
						code: null,
						containerState: {},
						defineSkip: function(e) {
							i[e.line] = e.column, g();
						},
						events: [],
						now: p,
						parser: e,
						previous: null,
						sliceSerialize: function(e, t) {
							return function(e, t) {
								let n, r = -1, i = [];
								for (; ++r < e.length;) {
									let l, o = e[r];
									if ("string" == typeof o) l = o;
									else switch (o) {
										case -5:
											l = "\r";
											break;
										case -4:
											l = "\n";
											break;
										case -3:
											l = "\r\n";
											break;
										case -2:
											l = t ? " " : "	";
											break;
										case -1:
											if (!t && n) continue;
											l = " ";
											break;
										default: l = String.fromCharCode(o);
									}
									n = -2 === o, i.push(l);
								}
								return i.join("");
							}(d(e), t);
						},
						sliceStream: d,
						write: function(e) {
							return (o = ep(o, e), function() {
								let e;
								for (; r._index < o.length;) {
									let n = o[r._index];
									if ("string" == typeof n) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) {
										var t = n.charCodeAt(r._bufferIndex);
										c = c(t);
									}
									else c = c(n);
								}
							}(), null !== o[o.length - 1]) ? [] : (m(t, 0), s.events = eF(l, s.events, s), s.events);
						}
					}, c = t.tokenize.call(s, u);
					return t.resolveAll && l.push(t), s;
					function d(e) {
						return function(e, t) {
							let n, r = t.start._index, i = t.start._bufferIndex, l = t.end._index, o = t.end._bufferIndex;
							if (r === l) n = [e[r].slice(i, o)];
							else {
								if (n = e.slice(r, l), i > -1) {
									let e = n[0];
									"string" == typeof e ? n[0] = e.slice(i) : n.shift();
								}
								o > 0 && n.push(e[l].slice(0, o));
							}
							return n;
						}(o, e);
					}
					function p() {
						let { _bufferIndex: e, _index: t, line: n, column: i, offset: l } = r;
						return {
							_bufferIndex: e,
							_index: t,
							line: n,
							column: i,
							offset: l
						};
					}
					function f(e, t) {
						t.restore();
					}
					function h(e, t) {
						return function(n, i, l) {
							var o;
							let c, d, f, h;
							return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : (o = n, function(e) {
								let t = null !== e && o[e], n = null !== e && o.null;
								return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e);
							});
							function m(e) {
								return (c = e, d = 0, 0 === e.length) ? l : y(e[d]);
							}
							function y(e) {
								return function(n) {
									return (h = function() {
										let e = p(), t = s.previous, n = s.currentConstruct, i = s.events.length, l = Array.from(a);
										return {
											from: i,
											restore: function() {
												r = e, s.previous = t, s.currentConstruct = n, s.events.length = i, a = l, g();
											}
										};
									}(), f = e, e.partial || (s.currentConstruct = e), e.name && s.parser.constructs.disable.null.includes(e.name)) ? x(n) : e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, u, v, x)(n);
								};
							}
							function v(t) {
								return e(f, h), i;
							}
							function x(e) {
								return (h.restore(), ++d < c.length) ? y(c[d]) : l;
							}
						};
					}
					function m(e, t) {
						e.resolveAll && !l.includes(e) && l.push(e), e.resolve && ed(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s)), e.resolveTo && (s.events = e.resolveTo(s.events, s));
					}
					function g() {
						r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
					}
				}(t, e, n);
			};
		}
	})(r).document().write((l = 1, o = "", a = !0, function(e, t, n) {
		let r, u, s, c, d, p = [];
		for (e = o + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), s = 0, o = "", a && (65279 === e.charCodeAt(0) && s++, a = void 0); s < e.length;) {
			if (tL.lastIndex = s, c = (r = tL.exec(e)) && void 0 !== r.index ? r.index : e.length, d = e.charCodeAt(c), !r) {
				o = e.slice(s);
				break;
			}
			if (10 === d && s === c && i) p.push(-3), i = void 0;
			else switch (i && (p.push(-5), i = void 0), s < c && (p.push(e.slice(s, c)), l += c - s), d) {
				case 0:
					p.push(65533), l++;
					break;
				case 9:
					for (u = 4 * Math.ceil(l / 4), p.push(-2); l++ < u;) p.push(-1);
					break;
				case 10:
					p.push(-4), l = 1;
					break;
				default: i = !0, l = 1;
			}
			s = c + 1;
		}
		return n && (i && p.push(-5), o && p.push(o), p.push(null)), p;
	})(t, n, !0))))));
	return (function({ components: e }) {
		return function(t) {
			return function(e, t) {
				var n, r, i, l;
				let o;
				if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
				let a = t.filePath || void 0;
				if (t.development) {
					if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
					n = a, r = t.jsxDEV, o = function(e, t, i, l) {
						let o = Array.isArray(i.children), a = rQ(e);
						return r(t, i, l, o, {
							columnNumber: a ? a.column - 1 : void 0,
							fileName: n,
							lineNumber: a ? a.line : void 0
						}, void 0);
					};
				} else {
					if ("function" != typeof t.jsx) throw TypeError("Expected `jsx` in production options");
					if ("function" != typeof t.jsxs) throw TypeError("Expected `jsxs` in production options");
					i = t.jsx, l = t.jsxs, o = function(e, t, n, r) {
						let o = Array.isArray(n.children) ? l : i;
						return r ? o(t, n, r) : o(t, n);
					};
				}
				let u = {
					Fragment: t.Fragment,
					ancestors: [],
					components: t.components || {},
					create: o,
					elementAttributeNameCase: t.elementAttributeNameCase || "react",
					evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
					filePath: a,
					ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
					passKeys: !1 !== t.passKeys,
					passNode: t.passNode || !1,
					schema: "svg" === t.space ? rq : rU,
					stylePropertyNameCase: t.stylePropertyNameCase || "dom",
					tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
				}, s = r6(u, e, void 0);
				return s && "string" != typeof s ? s : u.create(e, u.Fragment, { children: s || void 0 }, void 0);
			}(t, {
				Fragment: C,
				jsx: z,
				jsxs: V,
				components: e
			});
		};
	})({ components: e.components ?? {} })(u);
})), {
	displayName: "Markdown",
	props: ["text", "components"]
}), iE = G("button", {
	displayName: "ButtonBase",
	props: [
		"hover",
		"focus",
		"active",
		"disabled"
	]
})({
	textStyle: "sys.label-large",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	outline: "none",
	overflow: "hidden",
	border: 0,
	margin: 0,
	userSelect: "none",
	cursor: "pointer",
	_disabled: { cursor: "not-allowed" },
	gap: 4,
	h: 36,
	px: 16,
	rounded: "xs",
	transitionDuration: "md4",
	transitionTimingFunction: "standard-accelerate",
	bg: "none",
	pos: "relative",
	zIndex: 0,
	_$before: {
		content: "\"\"",
		pos: "absolute",
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		zIndex: -1,
		transitionDuration: "md1",
		transitionTimingFunction: "standard-accelerate"
	},
	$data_icon: {
		boxSize: 18,
		_data_placement__start: { ml: -8 },
		_data_placement__end: { mr: -8 }
	}
}), iD = G(iE, { displayName: "FilledButton" })({
	containerStyle: "sys.primary",
	py: 6,
	px: 16,
	_hover: {
		shadow: "1",
		_$before: { bgColor: X("white", K(.08)) }
	},
	_focus: {
		shadow: "1",
		_$before: { bgColor: X("white", K(.12)) }
	},
	_active: {
		shadow: "1",
		_$before: { bgColor: X("white", K(.12)) }
	},
	_disabled: {
		shadow: "0",
		color: X("sys.on-surface", K(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: X("sys.on-surface", K(.12)) }
	}
}), iM = G(iE, { displayName: "TextButton" })({
	extends: [{
		px: 16,
		$data_icon: {
			_data_placement__start: { ml: -4 },
			_data_placement__end: { mr: -4 }
		}
	}],
	color: "sys.primary",
	_$before: { bgColor: "rgba(0,0,0,0)" },
	_hover: { _$before: { bgColor: X("sys.primary", K(.08)) } },
	_focus: { _$before: { bgColor: X("sys.primary", K(.12)) } },
	_active: { _$before: { bgColor: X("sys.primary", K(.12)) } },
	_disabled: {
		color: X("sys.on-surface", K(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: "rgba(0,0,0,0)" }
	}
}), iI = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", iN = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z", iO = "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z", iP = "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z", iz = "M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z", iF = "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z", i_ = "M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M16 17V15H8V17H16M16 11L12 7L8 11H10.5V14H13.5V11H16Z", iR = G("span", (e, {}) => (t) => {
	let n = e.size ?? 24;
	return z(t, {
		"data-icon": !0,
		"data-placement": e.placement,
		"data-has-size": !!e.size,
		children: z("svg", {
			viewBox: `0 0 ${n} ${n}`,
			width: n,
			height: n,
			children: z("path", {
				d: e.path,
				children: e.animate && z("animateTransform", {
					attributeName: "transform",
					attributeType: "XML",
					type: "rotate",
					repeatCount: "indefinite",
					dur: "1s",
					from: `0 ${n / 2} ${n / 2}`,
					to: `360 ${n / 2} ${n / 2}`
				})
			})
		})
	});
}, {
	displayName: "Icon",
	props: [
		"path",
		"placement",
		"animate",
		"size"
	]
})({
	display: "inline-block",
	_data_has_size__false: {
		boxSize: "1.2em",
		"& svg": {
			w: "100%",
			h: "100%"
		}
	}
}), iH = G(iM, { displayName: "IconButton" })({
	boxSize: 36,
	p: 0,
	color: "sys.on-surface-variant",
	[`${iR}`]: { boxSize: 18 }
});
let iV = Q({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: er.duration.md1,
	easing: er.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: er.duration.sm4,
	easing: er.easing.standard.decelerate
});
er.duration.sm4, er.easing.standard.decelerate, er.duration.sm1, er.easing.standard.accelerate, er.duration.sm4, er.easing.standard.decelerate, er.duration.sm1, er.easing.standard.accelerate, er.duration.sm4, er.easing.standard.decelerate, er.duration.sm1, er.easing.standard.accelerate, er.duration.sm4, er.easing.standard.decelerate, er.duration.sm1, er.easing.standard.accelerate;
var iB = G("div", { displayName: "TooltipContainer" })({
	mt: 4,
	py: 2,
	px: 8,
	rounded: "xs",
	shadow: "3",
	containerStyle: "sys.on-surface",
	textStyle: "sys.body-small",
	pos: "relative",
	pointerEvents: "none",
	maxW: "24vw",
	zIndex: 100
}), i$ = u((e, { slots: t }) => {
	let n = Z(!1), r = Z(null);
	return () => {
		let i = t.default ? t.default()[0] : null, l = t.title ? t.title() : e.title;
		return l ? z(en, {
			isOpen: n.value,
			onClickOutside: () => n.value = !1,
			$transition: ({ content: e }) => z(iV, { children: e }),
			$content: z(iB, { children: l }),
			children: i ? S(i, {
				onVnodeMounted: (e) => {
					r.value = function e(t) {
						if (t) {
							if (t instanceof HTMLElement) return t;
							if (t instanceof Text) return e(t.nextElementSibling);
						}
						return null;
					}(e.el);
				},
				onMouseover: () => {
					n.value = !0;
				},
				onMouseleave: () => {
					n.value = !1;
				}
			}) : null
		}) : i;
	};
}, {
	displayName: "Tooltip",
	props: ["title"]
});
var ij = G("div", { displayName: "Container" })({
	pos: "absolute",
	top: 0,
	left: 0,
	h: "100vh",
	w: "100vw",
	zIndex: 100,
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}), iU = G("div", { displayName: "DialogBackdrop" })({
	cursor: "pointer",
	pos: "absolute",
	top: 0,
	left: 0,
	h: "100vh",
	w: "100vw",
	zIndex: -1,
	bgColor: X("sys.scrim", K(.38))
}), iq = Q({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: er.duration.md1,
	easing: er.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: er.duration.sm4,
	easing: er.easing.standard.accelerate
}), iW = u((e, { slots: t, emit: n }) => {
	let r = Z(e.isOpen ?? !1), i = Z(!1);
	return q(() => e.isOpen, (e) => {
		!0 === e ? r.value = !0 : !1 === e && (i.value = !1);
	}), () => z(ee, {
		isOpen: r.value,
		onContentBeforeMount: () => {
			i.value = !0;
		},
		onEscKeydown: () => {
			i.value = !1;
		},
		children: V(ij, { children: [z(iq, {
			onComplete: (e) => {
				"leave" === e && (r.value = !1, n("close"));
			},
			children: i.value ? z(iU, { onClick: () => {
				i.value = !1;
			} }) : null
		}), t.default?.()] })
	});
}, {
	displayName: "Dialog",
	props: ["isOpen"],
	emits: ["close"]
});
er.duration.sm4, er.easing.standard.accelerate, er.duration.sm1, er.easing.standard.accelerate;
let iJ = (e) => x(e) ? e : l(e) ? [] : [e], iZ = ((ei = {})[ei.NONE = 0] = "NONE", ei[ei.EXACT = 1] = "EXACT", ei[ei.PREFIX = 2] = "PREFIX", ei), iK = ((el = {}).NONE = "NONE", el.ADD = "ADD", el.EDIT = "EDIT", el.DELETE = "DELETE", el);
var iX = class e extends a {
	static of(t, n) {
		return new e(t, n ?? ("array" == t.type ? [] : {}));
	}
	#e = new F({});
	constructor(e, t) {
		super((e) => {
			let t = this.#e.subscribe(e);
			return () => {
				t.unsubscribe();
			};
		}), this.typedef = e, this.initials = t, this.#e.next(t);
	}
	initialsAt(e) {
		return 0 == e.length ? this.initials : R(this.initials, e);
	}
	update(e, t, n, r) {
		if (console.log("[json-editor]", "update", JSON.stringify(e), this.typedef.type), this.#t.next({}), 0 == e.length) return void this.#e.next(t);
		g(t) ? this.#e.next((i) => {
			let l = R(i, e, n);
			r && "array" == r.type && !x(l) && (l = iJ(l)), t(l), c(i, e, l);
		}) : this.#e.next((n) => {
			c(n, e, t);
		});
	}
	delete(e) {
		0 != e.length && (console.log("[json-editor]", "delete", e), this.#e.next((t) => {
			let n = w(e);
			if (v(n)) {
				let r = e.slice(0, e.length - 1), i = r.length > 0 ? R(t, r) : t;
				if (x(i)) return void i.splice(n, 1);
			}
			let r = e.slice(0, e.length - 1), i = r.length > 0 ? R(t, r) : t;
			delete i[n];
		}));
	}
	#t = new F({});
	#n = new F({});
	get error$() {
		return this.#t;
	}
	get foldedPointerPrefixes$() {
		return this.#n;
	}
	errorAt$(e) {
		let t = this.#r(e);
		return I(this.error$, D((e) => e[t]), U());
	}
	foldedPrefix$(e) {
		let t = this.#r(e);
		return I(this.foldedPointerPrefixes$, D((e) => {
			for (let [n] of Object.entries(e)) {
				if (n === t) return iZ.EXACT;
				if (t.startsWith(n)) return iZ.PREFIX;
			}
			return iZ.NONE;
		}), U());
	}
	#r(e) {
		return i(e) ? e : P.create(e);
	}
	toggleFold(e) {
		let t = this.#r(e);
		this.#n.next((e) => {
			Object.hasOwn(e, t) ? delete e[t] : e[t] = !0;
		});
	}
	setError(e, t) {
		let n = this.#r(e);
		this.#t.next((e) => {
			null === t ? delete e[n] : e[n] = t;
		});
	}
};
let iQ = B(() => new iX(r(), {})), iY = B(() => ({}));
var iG = G("span", { displayName: "ActionToolbar" })({
	px: 2,
	pos: "relative",
	visibility: "hidden",
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	display: "flex",
	alignItems: "center"
}), i1 = G(iH, { displayName: "ActionBtn" })({
	transition: "none",
	width: 24,
	height: 24,
	rounded: "xs",
	[`& ${iR}`]: { svg: {
		width: 16,
		height: 16
	} }
}), i0 = G("span", { displayName: "TextBox" })({
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 12,
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	py: 4,
	wordBreak: "keep-all",
	whiteSpace: "nowrap"
}), i2 = G(i0, { displayName: "TokenView" })({
	font: "code",
	opacity: .3
}), i3 = G(iG, { displayName: "PropLeading" })({
	position: "absolute",
	ml: -28
}), i4 = G(i0, { displayName: "PropNameView" })({
	position: "relative",
	display: "flex",
	alignItems: "center",
	userSelect: "none",
	_deprecated: { textDecoration: "line-through" },
	_optional: { "&:after": {
		content: "\"?\"",
		color: "sys.secondary",
		opacity: .58
	} }
}), i5 = _((e, { slots: t }) => () => V(i4, {
	"data-deprecated": e.deprecated,
	"data-optional": e.optional,
	"data-nullable": e.nullable,
	children: [t.leading && z(i3, {
		"data-visible-on-hover": !0,
		children: t.leading()
	}), t.default?.()]
}), {
	displayName: "PropName",
	props: [
		"deprecated",
		"optional",
		"nullable"
	]
}), i9 = class e extends F {
	static from(t) {
		let n = new e(!1);
		return I(t, L((e) => e ? W(I(o(e, "focus"), T(() => {
			n.show();
		})), I(o(e, "blur"), J(200), T(() => {
			n.value && n.hide();
		}))) : p), j()), n;
	}
	show() {
		this.next(!0);
	}
	hide() {
		this.next(!1);
	}
}, i6 = Y({ apply({ elements: e, rects: t }) {
	Object.assign(e.floating.style, { width: `${t.reference.width}px` });
} }), i8 = _((e, { emit: t, slots: n, render: r }) => {
	let i = e.open$ ?? new i9(!1), o = (e) => {
		let n = [e.target, ...e.composedPath()].find((e) => e?.hasAttribute?.("data-value"));
		if (n) {
			let e = n.getAttribute("data-value");
			l(e) || (t("selected", e), i.hide());
		}
	};
	return I(i, r((e) => z(en, {
		isOpen: e,
		onClickOutside: () => i.hide(),
		onEscKeydown: () => i.hide(),
		placement: "bottom-start",
		middleware: [i6],
		$content: z(i7, {
			onClick: o,
			children: n.content?.()
		}),
		children: n.default?.()?.[0] ?? null
	})));
}, {
	displayName: "Menu",
	props: ["open$"],
	emits: ["selected"]
}), i7 = G("div", { displayName: "PopoverContainer" })({
	textStyle: "sys.body-small",
	pos: "relative",
	containerStyle: "sys.surface-container-lowest",
	borderBottom: "1px solid",
	borderRight: "1px solid",
	borderLeft: "1px solid",
	borderColor: X("sys.outline-variant", K(.38)),
	overflow: "hidden",
	"[data-placement*=bottom] &": { roundedBottom: "sm" },
	"[data-placement*=top] &": { roundedTop: "sm" }
}), le = G("div", { displayName: "MenuItem" })({
	px: 8,
	py: 2,
	gap: 8,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	textAlign: "right",
	textStyle: "sys.body-small",
	cursor: "pointer",
	_hover: { containerStyle: "sys.surface-container" },
	_focus: {
		containerStyle: "sys.surface-container",
		outline: 0
	}
}), lt = G("div", { displayName: "PropDoc" })({
	position: "absolute",
	zIndex: 1,
	opacity: .58,
	fontSize: 10,
	lineHeight: 10,
	top: -3,
	left: 0,
	"& > *": {
		display: "flex",
		alignItems: "center",
		gap: 4,
		"&::before": {
			content: "\"// \"",
			font: "code"
		}
	}
}), ln = G("span", { displayName: "PropDescription" })({
	display: "block",
	textStyle: "sys.body-small",
	"& p": {
		my: 1,
		wordBreak: "keep-all",
		whiteSpace: "nowrap",
		opacity: .7
	},
	"& code": {
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	}
}), lr = _((e, { slots: t, render: n }) => {
	let r = new i9(!1);
	return I(r, n((n) => {
		let i = t.default?.()[0];
		return z(en, {
			isOpen: n,
			placement: e.placement ?? "left",
			$content: z(ll, { children: z(li, { children: t.title() }) }),
			children: i ? S(i, {
				onMouseover: () => {
					r.show();
				},
				onMouseout: () => {
					r.hide();
				}
			}) : null
		});
	}));
}, {
	displayName: "Tooltip",
	props: ["placement"]
}), li = G("div", { displayName: "TooltipContainer" })({
	py: 4,
	px: 12,
	rounded: "xs",
	shadow: "3",
	textStyle: "sys.body-small",
	containerStyle: "sys.on-surface",
	pos: "relative",
	zIndex: 100
}), ll = G("div", { displayName: "TooltipWrapper" })({ px: 8 }), lo = G("div", { displayName: "LineError" })({
	display: "block",
	fontSize: 10,
	lineHeight: 14,
	color: "sys.error",
	position: "absolute",
	px: 2,
	top: -2,
	right: 0
}), la = G("div", { displayName: "LinePrefix" })({
	position: "relative",
	display: "flex",
	alignItems: "start",
	justifyContent: "flex-end",
	minWidth: "2vw",
	px: 12,
	userSelect: "none"
}), lu = G("div", { displayName: "LineContent" })({
	flex: 1,
	minW: 0
}), ls = G("div", { displayName: "LineContentMain" })({
	position: "relative",
	display: "flex",
	alignItems: "start"
}), lc = G(i2, { displayName: "LineNumber" })({
	opacity: .28,
	font: "code"
}), ld = G(i2, (e) => (t) => z(t, { children: z(iR, { path: e.folded ? "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" : "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }) }), {
	displayName: "LineFoldable",
	props: ["folded"]
})({
	position: "absolute",
	top: 0,
	left: 2,
	cursor: "pointer",
	font: "code",
	opacity: .58,
	[`& ${iR}`]: { svg: {
		width: 16,
		height: 16
	} }
}), lp = G("div", (e, { slots: t }) => (n) => V(n, { children: [z(la, { children: t.leading?.() }), z(lu, {
	sx: { paddingLeft: 14 * e.indent * 2 },
	children: V(ls, { children: [t.default?.(), t.comment?.()] })
})] }), {
	displayName: "LineContainer",
	props: ["indent"]
})({
	position: "relative",
	display: "flex",
	py: 2,
	w: "100%",
	maxW: "100%",
	_hover: {
		containerStyle: "sys.surface-container",
		[`& ${iG}`]: { visibility: "visible" }
	},
	"&:focus-within": { containerStyle: "sys.surface-container" },
	[`&[data-dirty=${iK.EDIT}]`]: { bgColor: X("sys.warning-container", K(.38)) },
	[`&[data-dirty=${iK.ADD}]`]: { bgColor: X("sys.success-container", K(.38)) },
	[`&[data-dirty=${iK.DELETE}]`]: {
		bgColor: X("sys.error-container", K(.38)),
		textDecoration: "line-through",
		opacity: .58
	},
	_error: { bgColor: X("sys.error-container", K(.38)) }
}), lf = class e extends F {
	static from(t) {
		let n = new e("");
		return I(t, L((e) => e ? I(o(e, "input"), T((e) => {
			n.next(e.target.value?.trim());
		})) : p), M()), n;
	}
}, lh = class e extends m {
	static from(t) {
		let n = new e();
		return I(t, L((e) => e ? W(I(o(e, "keypress"), T((e) => {
			"Enter" !== e.key || e.shiftKey || (e.preventDefault(), n.next({ type: "COMMIT" }));
		})), I(o(e, "keydown"), T((e) => {
			switch (e.key) {
				case "Tab":
				case "ArrowDown":
					e.target.getAttribute("data-options") && (e.preventDefault(), n.next({
						type: "SELECT",
						direction: 1
					}));
					break;
				case "ArrowUp": e.target.getAttribute("data-options") && (e.preventDefault(), n.next({
					type: "SELECT",
					direction: -1
				}));
			}
		})), I(o(e, "keyup"), T((e) => {
			"Escape" === e.key && n.next({ type: "CANCEL" });
		}))) : p), M()), n;
	}
}, lm = class extends a {
	static sync(e, t) {
		return I(W(I(e, T((e) => {
			e && e == P.create(t.path()) && t.editing$.show();
		})), I(t.editing$, J(1), T((n) => {
			n || e.disable(t.path());
		})), I(h([t.value$, e]), J(1), T(([n, r]) => {
			l(n) && !r && e.enable(t.path());
		}))), M());
	}
	#i = new f(null);
	constructor() {
		super((e) => {
			let t = this.#i.subscribe(e);
			return () => t.unsubscribe();
		});
	}
	enable(e) {
		this.#i.value || this.#i.next(P.create(e));
	}
	disable(e) {
		this.#i.value === P.create(e) && this.#i.next(null);
	}
};
let lg = B(() => new lm());
var ly = _((e, { render: t }) => {
	let n, r = b(null), i = b(null), a = b(null), u = lh.from(a), s = lf.from(a), c = lg.use(), d = i9.from(a), f = iQ.use();
	lm.sync(c, {
		editing$: d,
		value$: e.value$,
		path: () => e.ctx.path
	});
	let m = () => {
		if ("enums" === e.typedef.type) {
			let t = (H.schemaProp(e.typedef, "enum") ?? []).indexOf(e.value);
			if (t > -1) return t;
		}
		return 0;
	}, g = new F({ index: m() }), y = () => {
		s.next(""), d.hide();
	}, v = (t) => {
		if ("enums" === e.typedef.type) {
			let n = H.schemaProp(e.typedef, "enum") ?? [];
			t ??= n[g.value.index % n.length];
		} else t ??= a.value?.value ? a.value?.value : void 0;
		if (l(t)) return void f.delete(e.ctx.path);
		let [n, r] = e.typedef.validate(t, { coerce: !0 });
		if (n) return void f.setError(e.ctx.path, n.message);
		f.update(e.ctx.path, r), y();
	};
	return (e.allowRawJSON && I(s, T((t) => {
		let n = t.trim();
		if (n.startsWith("{") && n.endsWith("}") || n.startsWith("[") && n.endsWith("]")) try {
			let t = JSON.parse(n);
			f.update(e.ctx.path, t), y();
		} catch (t) {
			f.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), M()), I(u, T((t) => {
		switch (t.type) {
			case "SELECT":
				g.next((e) => {
					e.index += t.direction;
				});
				break;
			case "COMMIT":
				v();
				break;
			case "CANCEL": y(), g.next({ index: m() }), l(e.value) && f.delete(e.ctx.path);
		}
	}), M()), I(W(I(i, N((e) => {
		if (e) {
			let t = new ResizeObserver((e) => {
				for (let t of e) t.contentBoxSize && (n = t.contentBoxSize[0]?.blockSize);
			});
			return t.observe(e), () => {
				t.disconnect();
			};
		}
		return () => {};
	})), I(a, J(1), T((e) => {
		e && (e?.focus(), e.value && (e.selectionStart = 0, e.selectionEnd = e.value.length));
	})), I(a, L((e) => {
		if (e) {
			let t = n ? n - 2 : e.getBoundingClientRect().height, l = (e) => {
				e.style.height = `${t ?? 0}px`, e.style.height = `${e.scrollHeight}px`;
			};
			return setTimeout(() => l(e)), W(I(o(e, "blur"), T((t) => {
				t.relatedTarget && (i.value?.contains(t.relatedTarget) || r.value?.contains(t.relatedTarget)) || (t.preventDefault(), v(e.value));
			})), I(o(e, "input"), T((e) => {
				l(e.target), s.next(e.target.value);
			})));
		}
		return p;
	}))), M()), "enums" == e.typedef.type) ? I(h([
		e.value$,
		d,
		g
	]), t(([t, n, { index: l }]) => {
		let o = H.schemaProp(e.typedef, "enum") ?? [], u = H.metaProp(e.typedef, "enumLabels") ?? [];
		return z(lb, {
			ref: i,
			onClick: () => {
				d.show();
			},
			"data-type": typeof t,
			tabindex: 0,
			children: n ? z(i8, {
				onSelected: (e) => {
					v(e);
				},
				open$: d,
				$content: z("div", {
					ref: r,
					children: o.map((e, t) => z(lS, {
						"data-focus": l % o.length === t,
						value: e,
						label: u[t]
					}))
				}),
				children: z(lx, { children: z("input", {
					value: void 0 == t ? "" : `${t}`,
					ref: a,
					"data-options": !0
				}) })
			}) : z(lk, { children: JSON.stringify(t) ?? "undefined" })
		});
	})) : I(h([e.value$, d]), t(([t, n]) => z(lb, {
		ref: i,
		onClick: () => {
			e.ctx.readOnly || d.show();
		},
		onFocus: () => {
			e.ctx.readOnly || d.show();
		},
		"data-type": typeof t,
		tabindex: 0,
		children: n ? z(en, {
			isOpen: !0,
			placement: "right-start",
			$content: V(lv, {
				ref: r,
				children: [z(i1, {
					type: "button",
					onClick: () => u.next({ type: "CANCEL" }),
					children: z(iR, { path: iI })
				}), z(i1, {
					type: "button",
					onClick: () => u.next({ type: "COMMIT" }),
					children: z(iR, { path: iN })
				})]
			}),
			children: z(lx, { children: z("textarea", {
				ref: a,
				rows: 1,
				value: void 0 == t ? "" : `${t}`
			}) })
		}) : z(lk, { children: JSON.stringify(t) ?? "undefined" })
	})));
}, {
	displayName: "ValueInput",
	props: [
		"typedef",
		"ctx",
		"value",
		"allowRawJSON"
	]
}), lv = G("div", { displayName: "ValueInputActions" })({
	borderRight: "1px solid",
	borderTop: "1px solid",
	borderBottom: "1px solid",
	borderColor: X("sys.outline-variant", K(.38)),
	containerStyle: "sys.surface-container-lowest",
	roundedRight: "sm",
	display: "flex",
	px: 2,
	py: 0,
	ml: -4
}), lx = G("div", { displayName: "InputWrapper" })({
	flex: 1,
	minWidth: 0,
	maxWidth: "80%",
	display: "flex",
	alignItems: "center",
	border: "1px solid",
	overflow: "hidden",
	borderColor: X("sys.outline-variant", K(.38)),
	opacity: .38,
	"&:hover": { opacity: 1 },
	"&:focus-within": { opacity: 1 },
	"& > textarea,input": {
		flex: 1,
		rounded: "xs",
		containerStyle: "sys.surface-container-lowest",
		width: "100%",
		outline: "none",
		border: "none",
		px: 8,
		py: 0,
		m: 0,
		fontSize: "inherit",
		color: "inherit",
		lineHeight: "inherit",
		overflow: "hidden",
		resize: "none",
		"&[data-options]:focus": { roundedBottom: 0 }
	}
}), lk = G("div", { displayName: "Value" })({
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	overflow: "hidden",
	textOverflow: "ellipsis",
	_hover: {
		textOverflow: "clip",
		whiteSpace: "normal",
		wordBreak: "break-all"
	}
}), lb = G("div", { displayName: "ValueContainer" })({
	wordBreak: "keep-all",
	whiteSpace: "nowrap",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	font: "code",
	minWidth: 0,
	flex: 1,
	textStyle: "sys.label-small",
	fontSize: 12,
	lineHeight: 24,
	gap: 8,
	_type__string: { color: "sys.primary" },
	_type__number: { color: "sys.primary" },
	_type__boolean: { color: "sys.warning" },
	_type__undefined: { color: "sys.error" }
}), lC = G(le, { displayName: "EnumMenuItemContainer" })({ [`& ${i5}`]: { textAlign: "left" } }), lS = u((e) => () => V(lC, {
	"data-value": e.value,
	tabindex: 0,
	children: [z(i5, { children: e.value }), e.label && z(ln, { children: e.label })]
}), {
	displayName: "EnumMenuItem",
	props: ["value", "label"]
}), lw = n((e, t) => {
	t.exports = function() {
		var e = document.getSelection();
		if (!e.rangeCount) return function() {};
		for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
		switch (t.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				t.blur();
				break;
			default: t = null;
		}
		return e.removeAllRanges(), function() {
			"Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
				e.addRange(t);
			}), t && t.focus();
		};
	};
}), lA = t(n((e, t) => {
	var n = lw(), r = {
		"text/plain": "Text",
		"text/html": "Url",
		default: "Text"
	};
	t.exports = function(e, t) {
		var i, l, o, a, u, s, c, d, p = !1;
		t || (t = {}), o = t.debug || !1;
		try {
			if (u = n(), s = document.createRange(), c = document.getSelection(), (d = document.createElement("span")).textContent = e, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function(n) {
				if (n.stopPropagation(), t.format) if (n.preventDefault(), void 0 === n.clipboardData) {
					o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
					var i = r[t.format] || r.default;
					window.clipboardData.setData(i, e);
				} else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
				t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
			}), document.body.appendChild(d), s.selectNodeContents(d), c.addRange(s), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
			p = !0;
		} catch (n) {
			o && console.error("unable to copy using execCommand: ", n), o && console.warn("trying IE specific stuff");
			try {
				window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), p = !0;
			} catch (n) {
				o && console.error("unable to copy using clipboardData: ", n), o && console.error("falling back to prompt"), i = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", l = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", a = i.replace(/#{\s*key\s*}/g, l), window.prompt(a, e);
			}
		} finally {
			c && ("function" == typeof c.removeRange ? c.removeRange(s) : c.removeAllRanges()), d && document.body.removeChild(d), u();
		}
		return p;
	};
})()), lL = _((e, {}) => () => z(lr, {
	$title: "复制当前节点为 JSON 字符串",
	children: z(i1, {
		type: "button",
		onClick: () => (0, lA.default)(JSON.stringify(e.value, null, 2)),
		children: z(iR, { path: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" })
	})
}), {
	displayName: "CopyAsJSONIconBtn",
	props: ["value"]
}), lT = _(({}, { emit: e }) => () => z(lr, {
	$title: "移除项",
	children: z(i1, {
		type: "button",
		onClick: () => e("remove"),
		children: z(iR, { path: "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z" })
	})
}), {
	displayName: "ItemRemoveIconBtn",
	emits: ["remove"]
}), lE = _((e, { emit: t, render: n }) => {
	let r = b(null), i = lf.from(r), l = lh.from(r), o = i9.from(r), a = iQ.use(), u = () => {
		r.value && (r.value.value = "", r.value.blur());
	}, s = (n) => {
		if (n ??= i.value) {
			let [r, i] = H.schemaProp(e.typedef, "items").validate(n, { coerce: !0 });
			if (r) return void a.setError(e.ctx.path, r);
			t("add", i);
		} else t("add", void 0);
		u();
	};
	I(i, T((t) => {
		let n = t.trim();
		if (n.startsWith("[") && n.endsWith("]")) try {
			let t = JSON.parse(n);
			a.update(e.ctx.path, t), u();
		} catch (t) {
			a.setError(e.ctx.path, "无效的 JSON 字符串");
		}
		if (n.startsWith("{") && n.endsWith("}")) try {
			s(JSON.parse(n));
		} catch (t) {
			a.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), M()), I(l, T((e) => {
		switch (e.type) {
			case "COMMIT":
				s();
				break;
			case "CANCEL": u();
		}
	}), M());
	let c = I(o, n((e) => z(en, {
		isOpen: e,
		placement: "right-start",
		$content: V(lv, { children: [z(i1, {
			type: "button",
			onClick: () => l.next({ type: "CANCEL" }),
			children: z(iR, { path: iI })
		}), z(i1, {
			type: "button",
			onClick: () => l.next({ type: "COMMIT" }),
			children: z(iR, { path: iN })
		})] }),
		children: z(lx, { children: z("input", {
			ref: r,
			type: "text",
			placeholder: "添加数组项 (可粘贴 JSON 字符串)"
		}) })
	})));
	return () => z(lb, {
		sx: { mx: -4 },
		children: c
	});
}, {
	displayName: "ItemAddIconBtn",
	props: ["ctx", "typedef"],
	emits: ["add"]
}), lD = _((e, { emit: t, render: n }) => {
	let r = b(null), i = lh.from(r), l = lf.from(r), o = i9.from(r), a = iQ.use(), u = F.seed({ index: 0 }), s = () => {
		o.hide(), l.next(""), r.value && (r.value.value = "", r.value.blur()), u.next({ index: 0 });
	};
	I(l, T((t) => {
		let n = t.trim();
		if (n.startsWith("{") && n.endsWith("}")) try {
			let t = JSON.parse(n);
			a.update(e.ctx.path, t), s();
		} catch (t) {
			a.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), M());
	let c = (n) => {
		e.options ? n ??= e.options[u.value.index % e.options.length]?.propName : n ??= l.value, n ? (t("add", n), s()) : a.setError([...e.ctx.path, H.RecordKey], "无效的属性值");
	};
	I(i, T((e) => {
		switch (e.type) {
			case "SELECT":
				u.next((t) => {
					t.index += e.direction;
				});
				break;
			case "COMMIT":
				c();
				break;
			case "CANCEL": s();
		}
	}), M());
	let d = I(o, n((e) => z(lx, { children: z("input", {
		ref: r,
		type: "text",
		placeholder: "添加属性 (可粘贴 JSON 字符串)",
		"data-options": e
	}) })));
	return I(h([
		l,
		o,
		u,
		e.options$
	]), n(([e, t, n, l]) => l ? l.length > 0 ? z(lb, {
		sx: { mx: -4 },
		children: z(i8, {
			onSelected: (e) => {
				c(e);
			},
			open$: o,
			$content: z("div", { children: l.map((t, r) => e && !t.propName.includes(e) ? null : z(lM, {
				"data-focus": r === n.index % l.length,
				propName: t.propName,
				typedef: t.typedef
			})) }),
			children: d
		})
	}) : null : z(lb, {
		sx: { mx: -4 },
		children: z(en, {
			isOpen: t,
			placement: "right-start",
			$content: V(lv, { children: [z(i1, {
				type: "button",
				onClick: () => i.next({ type: "CANCEL" }),
				children: z(iR, { path: iI })
			}), z(i1, {
				type: "button",
				onClick: () => i.next({ type: "COMMIT" }),
				children: z(iR, { path: iN })
			})] }),
			children: z(lx, { children: z("input", {
				ref: r,
				type: "text",
				placeholder: "添加属性 (可粘贴 JSON 字符串)"
			}) })
		})
	})));
}, {
	displayName: "PropValueAddInput",
	props: ["ctx", "options"],
	emits: ["add"]
}), lM = u((e) => () => V(lI, {
	"data-value": e.propName,
	tabindex: 0,
	children: [z(i5, {
		optional: !!H.schemaProp(e.typedef, H.optional),
		children: e.propName
	}), z(ln, { children: H.metaProp(e.typedef, "title") })]
}), {
	displayName: "PropMenuItem",
	props: ["propName", "typedef"]
}), lI = G(le, { displayName: "AddPropMenuItemContainer" })({ [`& ${i5}`]: { textAlign: "left" } }), lN = _((e, { render: t }) => {
	let n = iQ.use(), r = iY.use(), o = I(e.n$, t((e) => z(lc, { children: e }))), a = P.create(e.ctx.path);
	return I(h([
		e.close$,
		e.value$,
		n.errorAt$(a),
		n.foldedPrefix$(a)
	]), t(([t, u, s, c]) => {
		let p = !!s, f = x(u) || "array" == e.typedef.type, h = !f && d(u);
		if (t) return c ? null : z(C, { children: z(lp, {
			"data-error": p,
			$leading: o,
			indent: e.ctx.path.length,
			children: f ? V(C, { children: [V(i2, { children: ["]", "\xA0\xA0"] }), !e.ctx.readOnly && z(lE, {
				ctx: e.ctx,
				typedef: e.typedef,
				onAdd: (t) => {
					n.update(e.ctx.path, (e) => {
						console.log(e), e.push(t);
					}, [], e.typedef);
				}
			})] }) : h ? V(C, { children: [V(i2, { children: ["}", "\xA0\xA0"] }), !e.ctx.readOnly && z(lD, {
				ctx: e.ctx,
				onAdd: (t) => {
					n.update([...e.ctx.path, t], void 0);
				},
				options: "record" != e.typedef.type ? [...e.typedef.entries(u, e.ctx)].filter(([e]) => !Object.hasOwn(u, e)).map(([e, t, n]) => ({
					propName: String(e),
					typedef: n
				})) : void 0
			})] }) : null
		}) });
		if (c == iZ.PREFIX) return null;
		let m = () => {
			let t = w(e.ctx.path);
			return V(C, { children: [l(t) ? null : z(i5, {
				deprecated: H.schemaProp(e.typedef, "deprecated"),
				$leading: e.ctx.readOnly ? null : z(lT, { onRemove: () => {
					n.delete(e.ctx.path);
				} }),
				children: z(et, {
					sx: i(t) ? { opacity: 1 } : {
						opacity: .3,
						font: "code"
					},
					children: `${t}`
				})
			}), i(t) ? z(i2, { children: ": " }) : e.ctx.path.length > 0 ? z(i2, { children: "\xA0\xA0" }) : null] });
		};
		return z(lp, {
			indent: e.ctx.path.length,
			"data-dirty": ((e, t) => {
				if (!(x(e) || d(e))) {
					if (l(t) && !l(e)) return iK.ADD;
					if (!l(t) && l(e)) return iK.DELETE;
					if (!l(t) && !l(e) && e !== t) return iK.EDIT;
				}
				return iK.NONE;
			})(u, e.previous),
			"data-error": p,
			$leading: V(C, { children: [o, f || h ? z(ld, {
				folded: c !== iZ.NONE,
				onClick: () => {
					n.toggleFold(a);
				}
			}) : null] }),
			$comment: (() => {
				let t = H.metaProp(e.typedef, "title"), n = H.metaProp(e.typedef, "description");
				return V(C, { children: [(t || n) && z(lt, { children: n ? z(lr, {
					$title: z(ln, { children: z(iT, { text: n }) }),
					placement: "top",
					children: V("div", { children: [
						t,
						" ",
						z(iR, { path: "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" })
					] })
				}) : z("span", { children: t }) }), p && z(lo, { children: `${s}` })] });
			})(),
			children: (() => {
				if (c) {
					if (c == iZ.EXACT) {
						if (f) return V(C, { children: [m(), z(i2, { children: "[...]" })] });
						if (h) return V(C, { children: [m(), z(i2, { children: "{...}" })] });
					}
					return null;
				}
				return V(C, { children: [m(), f ? V(C, { children: [z(i2, { children: "[" }), z(iG, { children: z(lL, { value: u }) })] }) : h ? V(C, { children: [z(i2, { children: "{" }), z(iG, { children: z(lL, { value: u }) })] }) : r.$value?.(e.typedef, u, e.ctx)] });
			})()
		});
	}));
}, {
	displayName: "Line",
	props: [
		"n",
		"typedef",
		"ctx",
		"value",
		"previous",
		"close"
	]
});
let lO = (e, t, n) => z(ly, {
	typedef: e,
	value: t,
	ctx: n
});
var lP = _((e, { render: t }) => {
	let n = iQ.use(), r = iY.use();
	return I(n, t((t) => z(lg, { children: z(iY, {
		value: { $value: r.$value ?? lO },
		children: z(lz, { children: z(lF, { children: [...function* e(t, n, r, i) {
			if ("object" == r.type || "record" == r.type || "intersection" == r.type || "union" == r.type && H.schemaProp(r, "discriminator")) {
				let l = {
					value: t ?? {},
					previous: n,
					typedef: r,
					ctx: i
				};
				for (let [t, o, a] of (yield l, r.entries(l.value, i))) Object.hasOwn(l.value, t) && (yield* e(o, R(n, [t]), a, {
					...i,
					path: [...i.path, t],
					branch: [...i.branch, o]
				}));
				yield {
					...l,
					close: !0
				};
				return;
			}
			if ("union" == r.type && l(H.schemaProp(r, "discriminator"))) {
				let l = H.schemaProp(r, "oneOf");
				if (l?.length == 2) {
					let r = l.find((e) => "array" == e.type), o = l.find((e) => "array" != e.type);
					if (r && o && H.schemaProp(r, "items").type == o.type) {
						let l = iJ(t), o = iJ(n), a = {
							value: l,
							previous: o,
							typedef: r,
							ctx: i
						};
						for (let [t, n, u] of (yield a, r.entries(l, i))) yield* e(n, R(o, [t]), u, {
							...i,
							path: [...i.path, t],
							branch: [...i.branch, n]
						});
						yield {
							...a,
							close: !0
						};
						return;
					}
				}
			}
			if ("array" == r.type) {
				let l = {
					value: t,
					previous: n,
					typedef: r,
					ctx: i
				};
				for (let [o, a, u] of (yield l, r.entries(t, i))) yield* e(a, R(n, [o]), u, {
					...i,
					path: [...i.path, o],
					branch: [...i.branch, a]
				});
				yield {
					...l,
					close: !0
				};
				return;
			}
			if ("any" == r.type || "unknown" == r.type) {
				if (x(t)) return void (yield* e(t, n, y(s()), i));
				if (O(t)) return void (yield* e(t, n, A($(), s()), i));
			}
			yield {
				value: t,
				previous: n,
				typedef: r,
				ctx: i
			};
		}(t, n.initialsAt([]), n.typedef, {
			...E,
			readOnly: e.readOnly
		})].map((e, t) => {
			let n = P.create(e.ctx.path);
			return z(lN, {
				n: t + 1,
				ctx: e.ctx,
				typedef: e.typedef,
				value: e.value,
				previous: e.previous,
				close: e.close ?? !1
			}, `${n}::${e.close ?? !1}`);
		}) }) })
	}) })));
}, {
	displayName: "JSONEditorView",
	props: ["readOnly"]
}), lz = G("div", { displayName: "JSONEditorContainer" })({
	w: "100%",
	h: "100%",
	overflow: "auto"
}), lF = G("div", ({}, { slots: e }) => (t) => z(t, { children: e.default() }), { displayName: "Lines" })({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	w: "100%",
	maxW: "100%",
	py: 2
});
export { i$ as a, iO as c, iF as d, i_ as f, iW as i, iP as l, iT as m, iX as n, iH as o, iD as p, iQ as r, iR as s, lP as t, iz as u };
