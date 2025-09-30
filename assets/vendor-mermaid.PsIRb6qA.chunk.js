import { A as t, G as e, J as n, S as i, U as r, V as s, c as o, d as l, f as a, j as h, o as c, qt as u, st as f, yt as y } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as d } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var p = function() {
	var t = d(function(t, e, n, i) {
		for (n = n || {}, i = t.length; i--; n[t[i]] = e);
		return n;
	}, "o"), e = [1, 9], n = [1, 10], i = [
		1,
		5,
		10,
		12
	], r = {
		trace: d(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			SANKEY: 4,
			NEWLINE: 5,
			csv: 6,
			opt_eof: 7,
			record: 8,
			csv_tail: 9,
			EOF: 10,
			"field[source]": 11,
			COMMA: 12,
			"field[target]": 13,
			"field[value]": 14,
			field: 15,
			escaped: 16,
			non_escaped: 17,
			DQUOTE: 18,
			ESCAPED_TEXT: 19,
			NON_ESCAPED_TEXT: 20,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SANKEY",
			5: "NEWLINE",
			10: "EOF",
			11: "field[source]",
			12: "COMMA",
			13: "field[target]",
			14: "field[value]",
			18: "DQUOTE",
			19: "ESCAPED_TEXT",
			20: "NON_ESCAPED_TEXT"
		},
		productions_: [
			0,
			[3, 4],
			[6, 2],
			[9, 2],
			[9, 0],
			[7, 1],
			[7, 0],
			[8, 5],
			[15, 1],
			[15, 1],
			[16, 3],
			[17, 1]
		],
		performAction: d(function(t, e, n, i, r, s, o) {
			var l = s.length - 1;
			switch (r) {
				case 7:
					let a = i.findOrCreateNode(s[l - 4].trim().replaceAll("\"\"", "\"")), h = i.findOrCreateNode(s[l - 2].trim().replaceAll("\"\"", "\"")), c = parseFloat(s[l].trim());
					i.addLink(a, h, c);
					break;
				case 8:
				case 9:
				case 11:
					this.$ = s[l];
					break;
				case 10: this.$ = s[l - 1];
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			{ 5: [1, 3] },
			{
				6: 4,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: e,
				20: n
			},
			{
				1: [2, 6],
				7: 11,
				10: [1, 12]
			},
			t(n, [2, 4], {
				9: 13,
				5: [1, 14]
			}),
			{ 12: [1, 15] },
			t(i, [2, 8]),
			t(i, [2, 9]),
			{ 19: [1, 16] },
			t(i, [2, 11]),
			{ 1: [2, 1] },
			{ 1: [2, 5] },
			t(n, [2, 2]),
			{
				6: 17,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: e,
				20: n
			},
			{
				15: 18,
				16: 7,
				17: 8,
				18: e,
				20: n
			},
			{ 18: [1, 19] },
			t(n, [2, 3]),
			{ 12: [1, 20] },
			t(i, [2, 10]),
			{
				15: 21,
				16: 7,
				17: 8,
				18: e,
				20: n
			},
			t([
				1,
				5,
				10
			], [2, 7])
		],
		defaultActions: {
			11: [2, 1],
			12: [2, 5]
		},
		parseError: d(function(t, e) {
			if (e.recoverable) this.trace(t);
			else {
				var n = Error(t);
				throw n.hash = e, n;
			}
		}, "parseError"),
		parse: d(function(t) {
			var e = this, n = [0], i = [], r = [null], s = [], o = this.table, l = "", a = 0, h = 0, c = 0, u = s.slice.call(arguments, 1), f = Object.create(this.lexer), y = {};
			for (var p in this.yy) Object.prototype.hasOwnProperty.call(this.yy, p) && (y[p] = this.yy[p]);
			f.setInput(t, y), y.lexer = f, y.parser = this, typeof f.yylloc > "u" && (f.yylloc = {});
			var g = f.yylloc;
			s.push(g);
			var _ = f.options && f.options.ranges;
			function m() {
				var t;
				return "number" != typeof (t = i.pop() || f.lex() || 1) && (t instanceof Array && (t = (i = t).pop()), t = e.symbols_[t] || t), t;
			}
			"function" == typeof y.parseError ? this.parseError = y.parseError : this.parseError = Object.getPrototypeOf(this).parseError, d(function(t) {
				n.length = n.length - 2 * t, r.length = r.length - t, s.length = s.length - t;
			}, "popStack"), d(m, "lex");
			for (var k, x, v, b, L, S, w, E, A, T = {};;) {
				if (v = n[n.length - 1], this.defaultActions[v] ? b = this.defaultActions[v] : ((null === k || typeof k > "u") && (k = m()), b = o[v] && o[v][k]), typeof b > "u" || !b.length || !b[0]) {
					var M = "";
					for (S in A = [], o[v]) this.terminals_[S] && S > 2 && A.push("'" + this.terminals_[S] + "'");
					M = f.showPosition ? "Parse error on line " + (a + 1) + `:
` + f.showPosition() + `
Expecting ` + A.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : "Parse error on line " + (a + 1) + ": Unexpected " + (1 == k ? "end of input" : "'" + (this.terminals_[k] || k) + "'"), this.parseError(M, {
						text: f.match,
						token: this.terminals_[k] || k,
						line: f.yylineno,
						loc: g,
						expected: A
					});
				}
				if (b[0] instanceof Array && b.length > 1) throw Error("Parse Error: multiple actions possible at state: " + v + ", token: " + k);
				switch (b[0]) {
					case 1:
						n.push(k), r.push(f.yytext), s.push(f.yylloc), n.push(b[1]), k = null, x ? (k = x, x = null) : (h = f.yyleng, l = f.yytext, a = f.yylineno, g = f.yylloc, c > 0 && c--);
						break;
					case 2:
						if (w = this.productions_[b[1]][1], T.$ = r[r.length - w], T._$ = {
							first_line: s[s.length - (w || 1)].first_line,
							last_line: s[s.length - 1].last_line,
							first_column: s[s.length - (w || 1)].first_column,
							last_column: s[s.length - 1].last_column
						}, _ && (T._$.range = [s[s.length - (w || 1)].range[0], s[s.length - 1].range[1]]), "u" > typeof (L = this.performAction.apply(T, [
							l,
							h,
							a,
							y,
							b[1],
							r,
							s
						].concat(u)))) return L;
						w && (n = n.slice(0, -1 * w * 2), r = r.slice(0, -1 * w), s = s.slice(0, -1 * w)), n.push(this.productions_[b[1]][0]), r.push(T.$), s.push(T._$), E = o[n[n.length - 2]][n[n.length - 1]], n.push(E);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	function s() {
		this.yy = {};
	}
	return r.lexer = {
		EOF: 1,
		parseError: d(function(t, e) {
			if (this.yy.parser) this.yy.parser.parseError(t, e);
			else throw Error(t);
		}, "parseError"),
		setInput: d(function(t, e) {
			return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
				first_line: 1,
				first_column: 0,
				last_line: 1,
				last_column: 0
			}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
		}, "setInput"),
		input: d(function() {
			var t = this._input[0];
			return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t;
		}, "input"),
		unput: d(function(t) {
			var e = t.length, n = t.split(/(?:\r\n?|\n)/g);
			this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
			var i = this.match.split(/(?:\r\n?|\n)/g);
			this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
			var r = this.yylloc.range;
			return this.yylloc = {
				first_line: this.yylloc.first_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.first_column,
				last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
			}, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this;
		}, "unput"),
		more: d(function() {
			return this._more = !0, this;
		}, "more"),
		reject: d(function() {
			return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "reject"),
		less: d(function(t) {
			this.unput(this.match.slice(t));
		}, "less"),
		pastInput: d(function() {
			var t = this.matched.substr(0, this.matched.length - this.match.length);
			return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
		}, "pastInput"),
		upcomingInput: d(function() {
			var t = this.match;
			return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
		}, "upcomingInput"),
		showPosition: d(function() {
			var t = this.pastInput(), e = Array(t.length + 1).join("-");
			return t + this.upcomingInput() + `
` + e + "^";
		}, "showPosition"),
		test_match: d(function(t, e) {
			var n, i, r;
			if (this.options.backtrack_lexer && (r = {
				yylineno: this.yylineno,
				yylloc: {
					first_line: this.yylloc.first_line,
					last_line: this.last_line,
					first_column: this.yylloc.first_column,
					last_column: this.yylloc.last_column
				},
				yytext: this.yytext,
				match: this.match,
				matches: this.matches,
				matched: this.matched,
				yyleng: this.yyleng,
				offset: this.offset,
				_more: this._more,
				_input: this._input,
				yy: this.yy,
				conditionStack: this.conditionStack.slice(0),
				done: this.done
			}, this.options.ranges && (r.yylloc.range = this.yylloc.range.slice(0))), (i = t[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += i.length), this.yylloc = {
				first_line: this.yylloc.last_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.last_column,
				last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
			}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
			if (this._backtrack) for (var s in r) this[s] = r[s];
			return !1;
		}, "test_match"),
		next: d(function() {
			if (this.done) return this.EOF;
			this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
			for (var t, e, n, i, r = this._currentRules(), s = 0; s < r.length; s++) if ((n = this._input.match(this.rules[r[s]])) && (!e || n[0].length > e[0].length)) {
				if (e = n, i = s, this.options.backtrack_lexer) {
					if (!1 !== (t = this.test_match(n, r[s]))) return t;
					if (!this._backtrack) return !1;
					e = !1;
					continue;
				} else if (!this.options.flex) break;
			}
			return e ? !1 !== (t = this.test_match(e, r[i])) && t : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "next"),
		lex: d(function() {
			return this.next() || this.lex();
		}, "lex"),
		begin: d(function(t) {
			this.conditionStack.push(t);
		}, "begin"),
		popState: d(function() {
			return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
		}, "popState"),
		_currentRules: d(function() {
			return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
		}, "_currentRules"),
		topState: d(function(t) {
			return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL";
		}, "topState"),
		pushState: d(function(t) {
			this.begin(t);
		}, "pushState"),
		stateStackSize: d(function() {
			return this.conditionStack.length;
		}, "stateStackSize"),
		options: { "case-insensitive": !0 },
		performAction: d(function(t, e, n, i) {
			switch (n) {
				case 0:
				case 1: return this.pushState("csv"), 4;
				case 2: return 10;
				case 3: return 5;
				case 4: return 12;
				case 5: return this.pushState("escaped_text"), 18;
				case 6: return 20;
				case 7: return this.popState("escaped_text"), 18;
				case 8: return 19;
			}
		}, "anonymous"),
		rules: [
			/^(?:sankey-beta\b)/i,
			/^(?:sankey\b)/i,
			/^(?:$)/i,
			/^(?:((\u000D\u000A)|(\u000A)))/i,
			/^(?:(\u002C))/i,
			/^(?:(\u0022))/i,
			/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
			/^(?:(\u0022)(?!(\u0022)))/i,
			/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i
		],
		conditions: {
			csv: {
				rules: [
					2,
					3,
					4,
					5,
					6,
					7,
					8
				],
				inclusive: !1
			},
			escaped_text: {
				rules: [7, 8],
				inclusive: !1
			},
			INITIAL: {
				rules: [
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8
				],
				inclusive: !0
			}
		}
	}, d(s, "Parser"), s.prototype = r, r.Parser = s, new s();
}();
p.parser = p;
var g = [], _ = [], m = /* @__PURE__ */ new Map(), k = d(() => {
	g = [], _ = [], m = /* @__PURE__ */ new Map(), i();
}, "clear"), x = class {
	constructor(t, e, n = 0) {
		this.source = t, this.target = e, this.value = n;
	}
	static {
		d(this, "SankeyLink");
	}
}, v = d((t, e, n) => {
	g.push(new x(t, e, n));
}, "addLink"), b = class {
	constructor(t) {
		this.ID = t;
	}
	static {
		d(this, "SankeyNode");
	}
}, L = d((t) => {
	t = r.sanitizeText(t, n());
	let e = m.get(t);
	return void 0 === e && (e = new b(t), m.set(t, e), _.push(e)), e;
}, "findOrCreateNode"), S = d(() => _, "getNodes"), w = d(() => g, "getLinks"), E = d(() => ({
	nodes: _.map((t) => ({ id: t.ID })),
	links: g.map((t) => ({
		source: t.source.ID,
		target: t.target.ID,
		value: t.value
	}))
}), "getGraph"), A = {
	nodesMap: m,
	getConfig: d(() => n().sankey, "getConfig"),
	getNodes: S,
	getLinks: w,
	getGraph: E,
	addLink: v,
	findOrCreateNode: L,
	getAccTitle: t,
	setAccTitle: a,
	getAccDescription: c,
	setAccDescription: l,
	getDiagramTitle: h,
	setDiagramTitle: e,
	clear: k
};
function T(t, e) {
	let n;
	if (void 0 === e) for (let e of t) null != e && (n < e || void 0 === n && e >= e) && (n = e);
	else {
		let i = -1;
		for (let r of t) null != (r = e(r, ++i, t)) && (n < r || void 0 === n && r >= r) && (n = r);
	}
	return n;
}
function M(t, e) {
	let n;
	if (void 0 === e) for (let e of t) null != e && (n > e || void 0 === n && e >= e) && (n = e);
	else {
		let i = -1;
		for (let r of t) null != (r = e(r, ++i, t)) && (n > r || void 0 === n && r >= r) && (n = r);
	}
	return n;
}
function I(t, e) {
	let n = 0;
	if (void 0 === e) for (let e of t) (e *= 1) && (n += e);
	else {
		let i = -1;
		for (let r of t) (r = +e(r, ++i, t)) && (n += r);
	}
	return n;
}
function N(t) {
	return t.target.depth;
}
function C(t) {
	return t.depth;
}
function P(t, e) {
	return e - 1 - t.height;
}
function O(t, e) {
	return t.sourceLinks.length ? t.depth : e - 1;
}
function D(t) {
	return t.targetLinks.length ? t.depth : t.sourceLinks.length ? M(t.sourceLinks, N) - 1 : 0;
}
function $(t) {
	return function() {
		return t;
	};
}
function j(t, e) {
	return B(t.source, e.source) || t.index - e.index;
}
function z(t, e) {
	return B(t.target, e.target) || t.index - e.index;
}
function B(t, e) {
	return t.y0 - e.y0;
}
function U(t) {
	return t.value;
}
function F(t) {
	return t.index;
}
function W(t) {
	return t.nodes;
}
function V(t) {
	return t.links;
}
function G(t, e) {
	let n = t.get(e);
	if (!n) throw Error("missing: " + e);
	return n;
}
function R({ nodes: t }) {
	for (let e of t) {
		let t = e.y0, n = t;
		for (let n of e.sourceLinks) n.y0 = t + n.width / 2, t += n.width;
		for (let t of e.targetLinks) t.y1 = n + t.width / 2, n += t.width;
	}
}
function q() {
	let t = 0, e = 0, n = 1, i = 1, r = 24, s = 8, o, l = F, a = O, h, c, u = W, f = V, y = 6;
	function p() {
		let t = {
			nodes: u.apply(null, arguments),
			links: f.apply(null, arguments)
		};
		return g(t), _(t), m(t), k(t), b(t), R(t), t;
	}
	function g({ nodes: t, links: e }) {
		for (let [e, n] of t.entries()) n.index = e, n.sourceLinks = [], n.targetLinks = [];
		let n = new Map(t.map((e, n) => [l(e, n, t), e]));
		for (let [t, i] of e.entries()) {
			i.index = t;
			let { source: e, target: r } = i;
			"object" != typeof e && (e = i.source = G(n, e)), "object" != typeof r && (r = i.target = G(n, r)), e.sourceLinks.push(i), r.targetLinks.push(i);
		}
		if (null != c) for (let { sourceLinks: e, targetLinks: n } of t) e.sort(c), n.sort(c);
	}
	function _({ nodes: t }) {
		for (let e of t) e.value = void 0 === e.fixedValue ? Math.max(I(e.sourceLinks, U), I(e.targetLinks, U)) : e.fixedValue;
	}
	function m({ nodes: t }) {
		let e = t.length, n = new Set(t), i = /* @__PURE__ */ new Set(), r = 0;
		for (; n.size;) {
			for (let t of n) for (let { target: e } of (t.depth = r, t.sourceLinks)) i.add(e);
			if (++r > e) throw Error("circular link");
			n = i, i = /* @__PURE__ */ new Set();
		}
	}
	function k({ nodes: t }) {
		let e = t.length, n = new Set(t), i = /* @__PURE__ */ new Set(), r = 0;
		for (; n.size;) {
			for (let t of n) for (let { source: e } of (t.height = r, t.targetLinks)) i.add(e);
			if (++r > e) throw Error("circular link");
			n = i, i = /* @__PURE__ */ new Set();
		}
	}
	function x({ nodes: e }) {
		let i = T(e, (t) => t.depth) + 1, s = (n - t - r) / (i - 1), o = Array(i);
		for (let n of e) {
			let e = Math.max(0, Math.min(i - 1, Math.floor(a.call(null, n, i))));
			n.layer = e, n.x0 = t + e * s, n.x1 = n.x0 + r, o[e] ? o[e].push(n) : o[e] = [n];
		}
		if (h) for (let t of o) t.sort(h);
		return o;
	}
	function v(t) {
		let n = M(t, (t) => (i - e - (t.length - 1) * o) / I(t, U));
		for (let r of t) {
			let t = e;
			for (let e of r) for (let i of (e.y0 = t, e.y1 = t + e.value * n, t = e.y1 + o, e.sourceLinks)) i.width = i.value * n;
			t = (i - t + o) / (r.length + 1);
			for (let e = 0; e < r.length; ++e) {
				let n = r[e];
				n.y0 += t * (e + 1), n.y1 += t * (e + 1);
			}
			C(r);
		}
	}
	function b(t) {
		let n = x(t);
		o = Math.min(s, (i - e) / (T(n, (t) => t.length) - 1)), v(n);
		for (let t = 0; t < y; ++t) {
			let e = Math.pow(.99, t), i = Math.max(1 - e, (t + 1) / y);
			S(n, e, i), L(n, e, i);
		}
	}
	function L(t, e, n) {
		for (let i = 1, r = t.length; i < r; ++i) {
			let r = t[i];
			for (let t of r) {
				let n = 0, i = 0;
				for (let { source: e, value: r } of t.targetLinks) {
					let s = r * (t.layer - e.layer);
					n += P(e, t) * s, i += s;
				}
				if (!(i > 0)) continue;
				let r = (n / i - t.y0) * e;
				t.y0 += r, t.y1 += r, N(t);
			}
			void 0 === h && r.sort(B), w(r, n);
		}
	}
	function S(t, e, n) {
		for (let i = t.length - 2; i >= 0; --i) {
			let r = t[i];
			for (let t of r) {
				let n = 0, i = 0;
				for (let { target: e, value: r } of t.sourceLinks) {
					let s = r * (e.layer - t.layer);
					n += D(t, e) * s, i += s;
				}
				if (!(i > 0)) continue;
				let r = (n / i - t.y0) * e;
				t.y0 += r, t.y1 += r, N(t);
			}
			void 0 === h && r.sort(B), w(r, n);
		}
	}
	function w(t, n) {
		let r = t.length >> 1, s = t[r];
		A(t, s.y0 - o, r - 1, n), E(t, s.y1 + o, r + 1, n), A(t, i, t.length - 1, n), E(t, e, 0, n);
	}
	function E(t, e, n, i) {
		for (; n < t.length; ++n) {
			let r = t[n], s = (e - r.y0) * i;
			s > 1e-6 && (r.y0 += s, r.y1 += s), e = r.y1 + o;
		}
	}
	function A(t, e, n, i) {
		for (; n >= 0; --n) {
			let r = t[n], s = (r.y1 - e) * i;
			s > 1e-6 && (r.y0 -= s, r.y1 -= s), e = r.y0 - o;
		}
	}
	function N({ sourceLinks: t, targetLinks: e }) {
		if (void 0 === c) {
			for (let { source: { sourceLinks: t } } of e) t.sort(z);
			for (let { target: { targetLinks: e } } of t) e.sort(j);
		}
	}
	function C(t) {
		if (void 0 === c) for (let { sourceLinks: e, targetLinks: n } of t) e.sort(z), n.sort(j);
	}
	function P(t, e) {
		let n = t.y0 - (t.sourceLinks.length - 1) * o / 2;
		for (let { target: i, width: r } of t.sourceLinks) {
			if (i === e) break;
			n += r + o;
		}
		for (let { source: i, width: r } of e.targetLinks) {
			if (i === t) break;
			n -= r;
		}
		return n;
	}
	function D(t, e) {
		let n = e.y0 - (e.targetLinks.length - 1) * o / 2;
		for (let { source: i, width: r } of e.targetLinks) {
			if (i === t) break;
			n += r + o;
		}
		for (let { target: i, width: r } of t.sourceLinks) {
			if (i === e) break;
			n -= r;
		}
		return n;
	}
	return d(p, "sankey"), p.update = function(t) {
		return R(t), t;
	}, p.nodeId = function(t) {
		return arguments.length ? (l = "function" == typeof t ? t : $(t), p) : l;
	}, p.nodeAlign = function(t) {
		return arguments.length ? (a = "function" == typeof t ? t : $(t), p) : a;
	}, p.nodeSort = function(t) {
		return arguments.length ? (h = t, p) : h;
	}, p.nodeWidth = function(t) {
		return arguments.length ? (r = +t, p) : r;
	}, p.nodePadding = function(t) {
		return arguments.length ? (s = o = +t, p) : s;
	}, p.nodes = function(t) {
		return arguments.length ? (u = "function" == typeof t ? t : $(t), p) : u;
	}, p.links = function(t) {
		return arguments.length ? (f = "function" == typeof t ? t : $(t), p) : f;
	}, p.linkSort = function(t) {
		return arguments.length ? (c = t, p) : c;
	}, p.size = function(r) {
		return arguments.length ? (t = e = 0, n = +r[0], i = +r[1], p) : [n - t, i - e];
	}, p.extent = function(r) {
		return arguments.length ? (t = +r[0][0], n = +r[1][0], e = +r[0][1], i = +r[1][1], p) : [[t, e], [n, i]];
	}, p.iterations = function(t) {
		return arguments.length ? (y = +t, p) : y;
	}, d(g, "computeNodeLinks"), d(_, "computeNodeValues"), d(m, "computeNodeDepths"), d(k, "computeNodeHeights"), d(x, "computeNodeLayers"), d(v, "initializeNodeBreadths"), d(b, "computeNodeBreadths"), d(L, "relaxLeftToRight"), d(S, "relaxRightToLeft"), d(w, "resolveCollisions"), d(E, "resolveCollisionsTopToBottom"), d(A, "resolveCollisionsBottomToTop"), d(N, "reorderNodeLinks"), d(C, "reorderLinks"), d(P, "targetTop"), d(D, "sourceTop"), p;
}
d(T, "max"), d(M, "min"), d(I, "sum"), d(N, "targetDepth"), d(C, "left"), d(P, "right"), d(O, "justify"), d(D, "center"), d($, "constant"), d(j, "ascendingSourceBreadth"), d(z, "ascendingTargetBreadth"), d(B, "ascendingBreadth"), d(U, "value"), d(F, "defaultId"), d(W, "defaultNodes"), d(V, "defaultLinks"), d(G, "find"), d(R, "computeLinkBreadths"), d(q, "Sankey");
var X = Math.PI, Y = 2 * X, H = Y - 1e-6;
function Q() {
	this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function Z() {
	return new Q();
}
function K(t) {
	return d(function() {
		return t;
	}, "constant");
}
function J(t) {
	return t[0];
}
function tt(t) {
	return t[1];
}
d(Q, "Path"), d(Z, "path"), Q.prototype = Z.prototype = {
	constructor: Q,
	moveTo: d(function(t, e) {
		this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
	}, "moveTo"),
	closePath: d(function() {
		null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
	}, "closePath"),
	lineTo: d(function(t, e) {
		this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
	}, "lineTo"),
	quadraticCurveTo: d(function(t, e, n, i) {
		this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i);
	}, "quadraticCurveTo"),
	bezierCurveTo: d(function(t, e, n, i, r, s) {
		this._ += "C" + +t + "," + +e + "," + +n + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +s);
	}, "bezierCurveTo"),
	arcTo: d(function(t, e, n, i, r) {
		t *= 1, e *= 1, n *= 1, i *= 1, r *= 1;
		var s = this._x1, o = this._y1, l = n - t, a = i - e, h = s - t, c = o - e, u = h * h + c * c;
		if (r < 0) throw Error("negative radius: " + r);
		if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
		else if (u > 1e-6) if (Math.abs(c * l - a * h) > 1e-6 && r) {
			var f = n - s, y = i - o, d = l * l + a * a, p = Math.sqrt(d), g = Math.sqrt(u), _ = r * Math.tan((X - Math.acos((d + u - (f * f + y * y)) / (2 * p * g))) / 2), m = _ / g, k = _ / p;
			Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * h) + "," + (e + m * c)), this._ += "A" + r + "," + r + ",0,0," + +(c * f > h * y) + "," + (this._x1 = t + k * l) + "," + (this._y1 = e + k * a);
		} else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
	}, "arcTo"),
	arc: d(function(t, e, n, i, r, s) {
		t *= 1, e *= 1, n *= 1, s = !!s;
		var o = n * Math.cos(i), l = n * Math.sin(i), a = t + o, h = e + l, c = 1 ^ s, u = s ? i - r : r - i;
		if (n < 0) throw Error("negative radius: " + n);
		null === this._x1 ? this._ += "M" + a + "," + h : (Math.abs(this._x1 - a) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && (this._ += "L" + a + "," + h), n && (u < 0 && (u = u % Y + Y), u > H ? this._ += "A" + n + "," + n + ",0,1," + c + "," + (t - o) + "," + (e - l) + "A" + n + "," + n + ",0,1," + c + "," + (this._x1 = a) + "," + (this._y1 = h) : u > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(u >= X) + "," + c + "," + (this._x1 = t + n * Math.cos(r)) + "," + (this._y1 = e + n * Math.sin(r))));
	}, "arc"),
	rect: d(function(t, e, n, i) {
		this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +i + "h" + -n + "Z";
	}, "rect"),
	toString: d(function() {
		return this._;
	}, "toString")
}, d(K, "default"), d(J, "x"), d(tt, "y");
var te = Array.prototype.slice;
function tn(t) {
	return t.source;
}
function ti(t) {
	return t.target;
}
function tr(t) {
	var e = tn, n = ti, i = J, r = tt, s = null;
	function o() {
		var o, l = te.call(arguments), a = e.apply(this, l), h = n.apply(this, l);
		if (s || (s = o = Z()), t(s, +i.apply(this, (l[0] = a, l)), +r.apply(this, l), +i.apply(this, (l[0] = h, l)), +r.apply(this, l)), o) return s = null, o + "" || null;
	}
	return d(o, "link"), o.source = function(t) {
		return arguments.length ? (e = t, o) : e;
	}, o.target = function(t) {
		return arguments.length ? (n = t, o) : n;
	}, o.x = function(t) {
		return arguments.length ? (i = "function" == typeof t ? t : K(+t), o) : i;
	}, o.y = function(t) {
		return arguments.length ? (r = "function" == typeof t ? t : K(+t), o) : r;
	}, o.context = function(t) {
		return arguments.length ? (s = t ?? null, o) : s;
	}, o;
}
function ts(t, e, n, i, r) {
	t.moveTo(e, n), t.bezierCurveTo(e = (e + i) / 2, n, e, r, i, r);
}
function to() {
	return tr(ts);
}
function tl(t) {
	return [t.source.x1, t.y0];
}
function ta(t) {
	return [t.target.x0, t.y1];
}
function th() {
	return to().source(tl).target(ta);
}
d(tn, "linkSource"), d(ti, "linkTarget"), d(tr, "link"), d(ts, "curveHorizontal"), d(to, "linkHorizontal"), d(tl, "horizontalSource"), d(ta, "horizontalTarget"), d(th, "default");
var tc = class t {
	static {
		d(this, "Uid");
	}
	static {
		this.count = 0;
	}
	static next(e) {
		return new t(e + ++t.count);
	}
	constructor(t) {
		this.id = t, this.href = `#${t}`;
	}
	toString() {
		return "url(" + this.href + ")";
	}
}, tu = {
	left: C,
	right: P,
	center: D,
	justify: O
}, tf = { draw: d(function(t, e, i, r) {
	let l, { securityLevel: a, sankey: h } = n(), c = o.sankey, p;
	"sandbox" === a && (p = u("#i" + e));
	let g = "sandbox" === a ? u(p.nodes()[0].contentDocument.body) : u("body"), _ = "sandbox" === a ? g.select(`[id="${e}"]`) : u(`[id="${e}"]`), m = h?.width ?? c.width, k = h?.height ?? c.width, x = h?.useMaxWidth ?? c.useMaxWidth, v = h?.nodeAlignment ?? c.nodeAlignment, b = h?.prefix ?? c.prefix, L = h?.suffix ?? c.suffix, S = h?.showValues ?? c.showValues, w = r.db.getGraph(), E = tu[v];
	q().nodeId((t) => t.id).nodeWidth(10).nodePadding(10 + 15 * !!S).nodeAlign(E).extent([[0, 0], [m, k]])(w);
	let A = y(f);
	_.append("g").attr("class", "nodes").selectAll(".node").data(w.nodes).join("g").attr("class", "node").attr("id", (t) => (t.uid = tc.next("node-")).id).attr("transform", function(t) {
		return "translate(" + t.x0 + "," + t.y0 + ")";
	}).attr("x", (t) => t.x0).attr("y", (t) => t.y0).append("rect").attr("height", (t) => t.y1 - t.y0).attr("width", (t) => t.x1 - t.x0).attr("fill", (t) => A(t.id));
	let T = d(({ id: t, value: e }) => S ? `${t}
${b}${Math.round(100 * e) / 100}${L}` : t, "getText");
	_.append("g").attr("class", "node-labels").attr("font-size", 14).selectAll("text").data(w.nodes).join("text").attr("x", (t) => t.x0 < m / 2 ? t.x1 + 6 : t.x0 - 6).attr("y", (t) => (t.y1 + t.y0) / 2).attr("dy", `${S ? "0" : "0.35"}em`).attr("text-anchor", (t) => t.x0 < m / 2 ? "start" : "end").text(T);
	let M = _.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", .5).selectAll(".link").data(w.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply"), I = h?.linkColor ?? "gradient";
	if ("gradient" === I) {
		let t = M.append("linearGradient").attr("id", (t) => (t.uid = tc.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (t) => t.source.x1).attr("x2", (t) => t.target.x0);
		t.append("stop").attr("offset", "0%").attr("stop-color", (t) => A(t.source.id)), t.append("stop").attr("offset", "100%").attr("stop-color", (t) => A(t.target.id));
	}
	switch (I) {
		case "gradient":
			l = d((t) => t.uid, "coloring");
			break;
		case "source":
			l = d((t) => A(t.source.id), "coloring");
			break;
		case "target":
			l = d((t) => A(t.target.id), "coloring");
			break;
		default: l = I;
	}
	M.append("path").attr("d", th()).attr("stroke", l).attr("stroke-width", (t) => Math.max(1, t.width)), s(void 0, _, 0, x);
}, "draw") }, ty = d((t) => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, `
`).trim(), "prepareTextForParsing"), td = d((t) => `.label {
      font-family: ${t.fontFamily};
    }`, "getStyles"), tp = p.parse.bind(p);
p.parse = (t) => tp(ty(t));
var tg = {
	styles: td,
	parser: p,
	db: A,
	renderer: tf
};
export { tg as diagram };
