import { $t as t, B as e, H as i, J as n, O as s, Q as r, V as o, x as a } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as l } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as c } from "./vendor-mermaid.BVwC1HkE.chunk.js";
import { c as h, d as u, r as g } from "./vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js";
import { t as d } from "./vendor-mermaid.B-0J-u47.chunk.js";
import { n as p, t as y } from "./vendor-mermaid.Br1eVBMi.chunk.js";
var f = function() {
	var t = l(function(t, e, i, n) {
		for (i = i || {}, n = t.length; n--; i[t[n]] = e);
		return i;
	}, "o"), e = [1, 4], i = [1, 13], n = [1, 12], s = [1, 15], r = [1, 16], o = [1, 20], a = [1, 19], c = [
		6,
		7,
		8
	], h = [1, 26], u = [1, 24], g = [1, 25], d = [
		6,
		7,
		11
	], p = [1, 31], y = [
		6,
		7,
		11,
		24
	], f = [
		1,
		6,
		13,
		16,
		17,
		20,
		23
	], m = [1, 35], k = [1, 36], b = [
		1,
		6,
		7,
		11,
		13,
		16,
		17,
		20,
		23
	], _ = [1, 38], E = {
		trace: l(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			mindMap: 4,
			spaceLines: 5,
			SPACELINE: 6,
			NL: 7,
			KANBAN: 8,
			document: 9,
			stop: 10,
			EOF: 11,
			statement: 12,
			SPACELIST: 13,
			node: 14,
			shapeData: 15,
			ICON: 16,
			CLASS: 17,
			nodeWithId: 18,
			nodeWithoutId: 19,
			NODE_DSTART: 20,
			NODE_DESCR: 21,
			NODE_DEND: 22,
			NODE_ID: 23,
			SHAPE_DATA: 24,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "SPACELINE",
			7: "NL",
			8: "KANBAN",
			11: "EOF",
			13: "SPACELIST",
			16: "ICON",
			17: "CLASS",
			20: "NODE_DSTART",
			21: "NODE_DESCR",
			22: "NODE_DEND",
			23: "NODE_ID",
			24: "SHAPE_DATA"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[5, 1],
			[5, 2],
			[5, 2],
			[4, 2],
			[4, 3],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 2],
			[10, 2],
			[9, 3],
			[9, 2],
			[12, 3],
			[12, 2],
			[12, 2],
			[12, 2],
			[12, 1],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[14, 1],
			[14, 1],
			[19, 3],
			[18, 1],
			[18, 4],
			[15, 2],
			[15, 1]
		],
		performAction: l(function(t, e, i, n, s, r, o) {
			var a = r.length - 1;
			switch (s) {
				case 6:
				case 7: return n;
				case 8:
					n.getLogger().trace("Stop NL ");
					break;
				case 9:
					n.getLogger().trace("Stop EOF ");
					break;
				case 11:
					n.getLogger().trace("Stop NL2 ");
					break;
				case 12:
					n.getLogger().trace("Stop EOF2 ");
					break;
				case 15:
					n.getLogger().info("Node: ", r[a - 1].id), n.addNode(r[a - 2].length, r[a - 1].id, r[a - 1].descr, r[a - 1].type, r[a]);
					break;
				case 16:
					n.getLogger().info("Node: ", r[a].id), n.addNode(r[a - 1].length, r[a].id, r[a].descr, r[a].type);
					break;
				case 17:
					n.getLogger().trace("Icon: ", r[a]), n.decorateNode({ icon: r[a] });
					break;
				case 18:
				case 23:
					n.decorateNode({ class: r[a] });
					break;
				case 19:
					n.getLogger().trace("SPACELIST");
					break;
				case 20:
					n.getLogger().trace("Node: ", r[a - 1].id), n.addNode(0, r[a - 1].id, r[a - 1].descr, r[a - 1].type, r[a]);
					break;
				case 21:
					n.getLogger().trace("Node: ", r[a].id), n.addNode(0, r[a].id, r[a].descr, r[a].type);
					break;
				case 22:
					n.decorateNode({ icon: r[a] });
					break;
				case 27:
					n.getLogger().trace("node found ..", r[a - 2]), this.$ = {
						id: r[a - 1],
						descr: r[a - 1],
						type: n.getType(r[a - 2], r[a])
					};
					break;
				case 28:
					this.$ = {
						id: r[a],
						descr: r[a],
						type: 0
					};
					break;
				case 29:
					n.getLogger().trace("node found ..", r[a - 3]), this.$ = {
						id: r[a - 3],
						descr: r[a - 1],
						type: n.getType(r[a - 2], r[a])
					};
					break;
				case 30:
					this.$ = r[a - 1] + r[a];
					break;
				case 31: this.$ = r[a];
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				5: 3,
				6: [1, 5],
				8: e
			},
			{ 1: [3] },
			{ 1: [2, 1] },
			{
				4: 6,
				6: [1, 7],
				7: [1, 8],
				8: e
			},
			{
				6: i,
				7: [1, 10],
				9: 9,
				12: 11,
				13: n,
				14: 14,
				16: s,
				17: r,
				18: 17,
				19: 18,
				20: o,
				23: a
			},
			t(c, [2, 3]),
			{ 1: [2, 2] },
			t(c, [2, 4]),
			t(c, [2, 5]),
			{
				1: [2, 6],
				6: i,
				12: 21,
				13: n,
				14: 14,
				16: s,
				17: r,
				18: 17,
				19: 18,
				20: o,
				23: a
			},
			{
				6: i,
				9: 22,
				12: 11,
				13: n,
				14: 14,
				16: s,
				17: r,
				18: 17,
				19: 18,
				20: o,
				23: a
			},
			{
				6: h,
				7: u,
				10: 23,
				11: g
			},
			t(d, [2, 24], {
				18: 17,
				19: 18,
				14: 27,
				16: [1, 28],
				17: [1, 29],
				20: o,
				23: a
			}),
			t(d, [2, 19]),
			t(d, [2, 21], {
				15: 30,
				24: p
			}),
			t(d, [2, 22]),
			t(d, [2, 23]),
			t(y, [2, 25]),
			t(y, [2, 26]),
			t(y, [2, 28], { 20: [1, 32] }),
			{ 21: [1, 33] },
			{
				6: h,
				7: u,
				10: 34,
				11: g
			},
			{
				1: [2, 7],
				6: i,
				12: 21,
				13: n,
				14: 14,
				16: s,
				17: r,
				18: 17,
				19: 18,
				20: o,
				23: a
			},
			t(f, [2, 14], {
				7: m,
				11: k
			}),
			t(b, [2, 8]),
			t(b, [2, 9]),
			t(b, [2, 10]),
			t(d, [2, 16], {
				15: 37,
				24: p
			}),
			t(d, [2, 17]),
			t(d, [2, 18]),
			t(d, [2, 20], { 24: _ }),
			t(y, [2, 31]),
			{ 21: [1, 39] },
			{ 22: [1, 40] },
			t(f, [2, 13], {
				7: m,
				11: k
			}),
			t(b, [2, 11]),
			t(b, [2, 12]),
			t(d, [2, 15], { 24: _ }),
			t(y, [2, 30]),
			{ 22: [1, 41] },
			t(y, [2, 27]),
			t(y, [2, 29])
		],
		defaultActions: {
			2: [2, 1],
			6: [2, 2]
		},
		parseError: l(function(t, e) {
			if (e.recoverable) this.trace(t);
			else {
				var i = Error(t);
				throw i.hash = e, i;
			}
		}, "parseError"),
		parse: l(function(t) {
			var e = this, i = [0], n = [], s = [null], r = [], o = this.table, a = "", c = 0, h = 0, u = 0, g = r.slice.call(arguments, 1), d = Object.create(this.lexer), p = {};
			for (var y in this.yy) Object.prototype.hasOwnProperty.call(this.yy, y) && (p[y] = this.yy[y]);
			d.setInput(t, p), p.lexer = d, p.parser = this, typeof d.yylloc > "u" && (d.yylloc = {});
			var f = d.yylloc;
			r.push(f);
			var m = d.options && d.options.ranges;
			function k() {
				var t;
				return "number" != typeof (t = n.pop() || d.lex() || 1) && (t instanceof Array && (t = (n = t).pop()), t = e.symbols_[t] || t), t;
			}
			"function" == typeof p.parseError ? this.parseError = p.parseError : this.parseError = Object.getPrototypeOf(this).parseError, l(function(t) {
				i.length = i.length - 2 * t, s.length = s.length - t, r.length = r.length - t;
			}, "popStack"), l(k, "lex");
			for (var b, _, E, S, N, x, L, D, I, O = {};;) {
				if (E = i[i.length - 1], this.defaultActions[E] ? S = this.defaultActions[E] : ((null === b || typeof b > "u") && (b = k()), S = o[E] && o[E][b]), typeof S > "u" || !S.length || !S[0]) {
					var v = "";
					for (x in I = [], o[E]) this.terminals_[x] && x > 2 && I.push("'" + this.terminals_[x] + "'");
					v = d.showPosition ? "Parse error on line " + (c + 1) + `:
` + d.showPosition() + `
Expecting ` + I.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (1 == b ? "end of input" : "'" + (this.terminals_[b] || b) + "'"), this.parseError(v, {
						text: d.match,
						token: this.terminals_[b] || b,
						line: d.yylineno,
						loc: f,
						expected: I
					});
				}
				if (S[0] instanceof Array && S.length > 1) throw Error("Parse Error: multiple actions possible at state: " + E + ", token: " + b);
				switch (S[0]) {
					case 1:
						i.push(b), s.push(d.yytext), r.push(d.yylloc), i.push(S[1]), b = null, _ ? (b = _, _ = null) : (h = d.yyleng, a = d.yytext, c = d.yylineno, f = d.yylloc, u > 0 && u--);
						break;
					case 2:
						if (L = this.productions_[S[1]][1], O.$ = s[s.length - L], O._$ = {
							first_line: r[r.length - (L || 1)].first_line,
							last_line: r[r.length - 1].last_line,
							first_column: r[r.length - (L || 1)].first_column,
							last_column: r[r.length - 1].last_column
						}, m && (O._$.range = [r[r.length - (L || 1)].range[0], r[r.length - 1].range[1]]), "u" > typeof (N = this.performAction.apply(O, [
							a,
							h,
							c,
							p,
							S[1],
							s,
							r
						].concat(g)))) return N;
						L && (i = i.slice(0, -1 * L * 2), s = s.slice(0, -1 * L), r = r.slice(0, -1 * L)), i.push(this.productions_[S[1]][0]), s.push(O.$), r.push(O._$), D = o[i[i.length - 2]][i[i.length - 1]], i.push(D);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	function S() {
		this.yy = {};
	}
	return E.lexer = {
		EOF: 1,
		parseError: l(function(t, e) {
			if (this.yy.parser) this.yy.parser.parseError(t, e);
			else throw Error(t);
		}, "parseError"),
		setInput: l(function(t, e) {
			return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
				first_line: 1,
				first_column: 0,
				last_line: 1,
				last_column: 0
			}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
		}, "setInput"),
		input: l(function() {
			var t = this._input[0];
			return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t;
		}, "input"),
		unput: l(function(t) {
			var e = t.length, i = t.split(/(?:\r\n?|\n)/g);
			this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
			var n = this.match.split(/(?:\r\n?|\n)/g);
			this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i.length - 1 && (this.yylineno -= i.length - 1);
			var s = this.yylloc.range;
			return this.yylloc = {
				first_line: this.yylloc.first_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.first_column,
				last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - e
			}, this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this;
		}, "unput"),
		more: l(function() {
			return this._more = !0, this;
		}, "more"),
		reject: l(function() {
			return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "reject"),
		less: l(function(t) {
			this.unput(this.match.slice(t));
		}, "less"),
		pastInput: l(function() {
			var t = this.matched.substr(0, this.matched.length - this.match.length);
			return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
		}, "pastInput"),
		upcomingInput: l(function() {
			var t = this.match;
			return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
		}, "upcomingInput"),
		showPosition: l(function() {
			var t = this.pastInput(), e = Array(t.length + 1).join("-");
			return t + this.upcomingInput() + `
` + e + "^";
		}, "showPosition"),
		test_match: l(function(t, e) {
			var i, n, s;
			if (this.options.backtrack_lexer && (s = {
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
			}, this.options.ranges && (s.yylloc.range = this.yylloc.range.slice(0))), (n = t[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += n.length), this.yylloc = {
				first_line: this.yylloc.last_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.last_column,
				last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
			}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], i = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), i) return i;
			if (this._backtrack) for (var r in s) this[r] = s[r];
			return !1;
		}, "test_match"),
		next: l(function() {
			if (this.done) return this.EOF;
			this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
			for (var t, e, i, n, s = this._currentRules(), r = 0; r < s.length; r++) if ((i = this._input.match(this.rules[s[r]])) && (!e || i[0].length > e[0].length)) {
				if (e = i, n = r, this.options.backtrack_lexer) {
					if (!1 !== (t = this.test_match(i, s[r]))) return t;
					if (!this._backtrack) return !1;
					e = !1;
					continue;
				} else if (!this.options.flex) break;
			}
			return e ? !1 !== (t = this.test_match(e, s[n])) && t : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "next"),
		lex: l(function() {
			return this.next() || this.lex();
		}, "lex"),
		begin: l(function(t) {
			this.conditionStack.push(t);
		}, "begin"),
		popState: l(function() {
			return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
		}, "popState"),
		_currentRules: l(function() {
			return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
		}, "_currentRules"),
		topState: l(function(t) {
			return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL";
		}, "topState"),
		pushState: l(function(t) {
			this.begin(t);
		}, "pushState"),
		stateStackSize: l(function() {
			return this.conditionStack.length;
		}, "stateStackSize"),
		options: { "case-insensitive": !0 },
		performAction: l(function(t, e, i, n) {
			switch (i) {
				case 0: return this.pushState("shapeData"), e.yytext = "", 24;
				case 1: return this.pushState("shapeDataStr"), 24;
				case 2: return this.popState(), 24;
				case 3: return e.yytext = e.yytext.replace(/\n\s*/g, "<br/>"), 24;
				case 4: return 24;
				case 5:
				case 10:
				case 29:
				case 32:
					this.popState();
					break;
				case 6: return t.getLogger().trace("Found comment", e.yytext), 6;
				case 7: return 8;
				case 8:
					this.begin("CLASS");
					break;
				case 9: return this.popState(), 17;
				case 11:
					t.getLogger().trace("Begin icon"), this.begin("ICON");
					break;
				case 12: return t.getLogger().trace("SPACELINE"), 6;
				case 13: return 7;
				case 14: return 16;
				case 15:
					t.getLogger().trace("end icon"), this.popState();
					break;
				case 16: return t.getLogger().trace("Exploding node"), this.begin("NODE"), 20;
				case 17: return t.getLogger().trace("Cloud"), this.begin("NODE"), 20;
				case 18: return t.getLogger().trace("Explosion Bang"), this.begin("NODE"), 20;
				case 19: return t.getLogger().trace("Cloud Bang"), this.begin("NODE"), 20;
				case 20:
				case 21:
				case 22:
				case 23: return this.begin("NODE"), 20;
				case 24: return 13;
				case 25: return 23;
				case 26: return 11;
				case 27:
					this.begin("NSTR2");
					break;
				case 28: return "NODE_DESCR";
				case 30:
					t.getLogger().trace("Starting NSTR"), this.begin("NSTR");
					break;
				case 31: return t.getLogger().trace("description:", e.yytext), "NODE_DESCR";
				case 33: return this.popState(), t.getLogger().trace("node end ))"), "NODE_DEND";
				case 34: return this.popState(), t.getLogger().trace("node end )"), "NODE_DEND";
				case 35: return this.popState(), t.getLogger().trace("node end ...", e.yytext), "NODE_DEND";
				case 36:
				case 39:
				case 40: return this.popState(), t.getLogger().trace("node end (("), "NODE_DEND";
				case 37:
				case 38: return this.popState(), t.getLogger().trace("node end (-"), "NODE_DEND";
				case 41:
				case 42: return t.getLogger().trace("Long description:", e.yytext), 21;
			}
		}, "anonymous"),
		rules: [
			/^(?:@\{)/i,
			/^(?:["])/i,
			/^(?:["])/i,
			/^(?:[^\"]+)/i,
			/^(?:[^}^"]+)/i,
			/^(?:\})/i,
			/^(?:\s*%%.*)/i,
			/^(?:kanban\b)/i,
			/^(?::::)/i,
			/^(?:.+)/i,
			/^(?:\n)/i,
			/^(?:::icon\()/i,
			/^(?:[\s]+[\n])/i,
			/^(?:[\n]+)/i,
			/^(?:[^\)]+)/i,
			/^(?:\))/i,
			/^(?:-\))/i,
			/^(?:\(-)/i,
			/^(?:\)\))/i,
			/^(?:\))/i,
			/^(?:\(\()/i,
			/^(?:\{\{)/i,
			/^(?:\()/i,
			/^(?:\[)/i,
			/^(?:[\s]+)/i,
			/^(?:[^\(\[\n\)\{\}@]+)/i,
			/^(?:$)/i,
			/^(?:["][`])/i,
			/^(?:[^`"]+)/i,
			/^(?:[`]["])/i,
			/^(?:["])/i,
			/^(?:[^"]+)/i,
			/^(?:["])/i,
			/^(?:[\)]\))/i,
			/^(?:[\)])/i,
			/^(?:[\]])/i,
			/^(?:\}\})/i,
			/^(?:\(-)/i,
			/^(?:-\))/i,
			/^(?:\(\()/i,
			/^(?:\()/i,
			/^(?:[^\)\]\(\}]+)/i,
			/^(?:.+(?!\(\())/i
		],
		conditions: {
			shapeDataEndBracket: {
				rules: [],
				inclusive: !1
			},
			shapeDataStr: {
				rules: [2, 3],
				inclusive: !1
			},
			shapeData: {
				rules: [
					1,
					4,
					5
				],
				inclusive: !1
			},
			CLASS: {
				rules: [9, 10],
				inclusive: !1
			},
			ICON: {
				rules: [14, 15],
				inclusive: !1
			},
			NSTR2: {
				rules: [28, 29],
				inclusive: !1
			},
			NSTR: {
				rules: [31, 32],
				inclusive: !1
			},
			NODE: {
				rules: [
					27,
					30,
					33,
					34,
					35,
					36,
					37,
					38,
					39,
					40,
					41,
					42
				],
				inclusive: !1
			},
			INITIAL: {
				rules: [
					0,
					6,
					7,
					8,
					11,
					12,
					13,
					16,
					17,
					18,
					19,
					20,
					21,
					22,
					23,
					24,
					25,
					26
				],
				inclusive: !0
			}
		}
	}, l(S, "Parser"), S.prototype = E, E.Parser = S, new S();
}();
f.parser = f;
var m = [], k = [], b = 0, _ = {}, E = l(() => {
	m = [], k = [], b = 0, _ = {};
}, "clear"), S = l((t) => {
	if (0 === m.length) return null;
	let e = m[0].level, i = null;
	for (let t = m.length - 1; t >= 0; t--) if (m[t].level !== e || i || (i = m[t]), m[t].level < e) throw Error("Items without section detected, found section (\"" + m[t].label + "\")");
	return t === i?.level ? null : i;
}, "getSection"), N = l(function() {
	return k;
}, "getSections"), x = l(function() {
	let t = [], e = N(), i = n();
	for (let n of e) {
		let e = {
			id: n.id,
			label: r(n.label ?? "", i),
			isGroup: !0,
			ticket: n.ticket,
			shape: "kanbanSection",
			level: n.level,
			look: i.look
		};
		for (let s of (t.push(e), m.filter((t) => t.parentId === n.id))) {
			let e = {
				id: s.id,
				parentId: n.id,
				label: r(s.label ?? "", i),
				isGroup: !1,
				ticket: s?.ticket,
				priority: s?.priority,
				assigned: s?.assigned,
				icon: s?.icon,
				shape: "kanbanItem",
				level: s.level,
				rx: 5,
				ry: 5,
				cssStyles: ["text-align: left"]
			};
			t.push(e);
		}
	}
	return {
		nodes: t,
		edges: [],
		other: {},
		config: n()
	};
}, "getData"), L = l((t, e, i, s, o) => {
	let l = n(), c = l.mindmap?.padding ?? a.mindmap.padding;
	switch (s) {
		case D.ROUNDED_RECT:
		case D.RECT:
		case D.HEXAGON: c *= 2;
	}
	let h = {
		id: r(e, l) || "kbn" + b++,
		level: t,
		label: r(i, l),
		width: l.mindmap?.maxNodeWidth ?? a.mindmap.maxNodeWidth,
		padding: c,
		isGroup: !1
	};
	if (void 0 !== o) {
		let t = y(o.includes(`
`) ? o + `
` : `{
` + o + `
}`, { schema: p });
		if (t.shape && (t.shape !== t.shape.toLowerCase() || t.shape.includes("_"))) throw Error(`No such shape: ${t.shape}. Shape names should be lowercase.`);
		t?.shape && "kanbanItem" === t.shape && (h.shape = t?.shape), t?.label && (h.label = t?.label), t?.icon && (h.icon = t?.icon.toString()), t?.assigned && (h.assigned = t?.assigned.toString()), t?.ticket && (h.ticket = t?.ticket.toString()), t?.priority && (h.priority = t?.priority);
	}
	let u = S(t);
	u ? h.parentId = u.id || "kbn" + b++ : k.push(h), m.push(h);
}, "addNode"), D = {
	DEFAULT: 0,
	NO_BORDER: 0,
	ROUNDED_RECT: 1,
	RECT: 2,
	CIRCLE: 3,
	CLOUD: 4,
	BANG: 5,
	HEXAGON: 6
}, I = l((e, i) => {
	switch (t.debug("In get type", e, i), e) {
		case "[": return D.RECT;
		case "(": return ")" === i ? D.ROUNDED_RECT : D.CLOUD;
		case "((": return D.CIRCLE;
		case ")": return D.CLOUD;
		case "))": return D.BANG;
		case "{{": return D.HEXAGON;
		default: return D.DEFAULT;
	}
}, "getType"), O = l((t, e) => {
	_[t] = e;
}, "setElementForId"), v = l((t) => {
	if (!t) return;
	let e = n(), i = m[m.length - 1];
	t.icon && (i.icon = r(t.icon, e)), t.class && (i.cssClasses = r(t.class, e));
}, "decorateNode"), C = l((t) => {
	switch (t) {
		case D.DEFAULT: return "no-border";
		case D.RECT: return "rect";
		case D.ROUNDED_RECT: return "rounded-rect";
		case D.CIRCLE: return "circle";
		case D.CLOUD: return "cloud";
		case D.BANG: return "bang";
		case D.HEXAGON: return "hexgon";
		default: return "no-border";
	}
}, "type2Str"), A = l(() => t, "getLogger"), $ = l((t) => _[t], "getElementById"), w = { draw: l(async (e, i, s, r) => {
	t.debug(`Rendering kanban diagram
` + e);
	let l = r.db.getData(), d = n();
	d.htmlLabels = !1;
	let p = c(i), y = p.append("g");
	y.attr("class", "sections");
	let f = p.append("g");
	f.attr("class", "items");
	let m = l.nodes.filter((t) => t.isGroup), k = 0, b = [], _ = 25;
	for (let t of m) {
		let e = d?.kanban?.sectionWidth || 200;
		t.x = e * (k += 1) + (k - 1) * 10 / 2, t.width = e, t.y = 0, t.height = 3 * e, t.rx = 5, t.ry = 5, t.cssClasses = t.cssClasses + " section-" + k;
		let i = await u(y, t);
		_ = Math.max(_, i?.labelBBox?.height), b.push(i);
	}
	let E = 0;
	for (let t of m) {
		let e = b[E];
		E += 1;
		let i = d?.kanban?.sectionWidth || 200, n = -(3 * i) / 2 + _, s = n;
		for (let e of l.nodes.filter((e) => e.parentId === t.id)) {
			if (e.isGroup) throw Error("Groups within groups are not allowed in Kanban diagrams");
			e.x = t.x, e.width = i - 15;
			let n = (await h(f, e, { config: d })).node().getBBox();
			e.y = s + n.height / 2, await g(e), s = e.y + n.height / 2 + 5;
		}
		let r = e.cluster.select("rect"), o = Math.max(s - n + 30, 50) + (_ - 25);
		r.attr("height", o);
	}
	o(void 0, p, d.mindmap?.padding ?? a.kanban.padding, d.mindmap?.useMaxWidth ?? a.kanban.useMaxWidth);
}, "draw") }, T = l((t) => {
	let n = "";
	for (let n = 0; n < t.THEME_COLOR_LIMIT; n++) t["lineColor" + n] = t["lineColor" + n] || t["cScaleInv" + n], s(t["lineColor" + n]) ? t["lineColor" + n] = e(t["lineColor" + n], 20) : t["lineColor" + n] = i(t["lineColor" + n], 20);
	let r = l((n, s) => t.darkMode ? i(n, s) : e(n, s), "adjuster");
	for (let e = 0; e < t.THEME_COLOR_LIMIT; e++) {
		let i = "" + (17 - 3 * e);
		n += `
    .section-${e - 1} rect, .section-${e - 1} path, .section-${e - 1} circle, .section-${e - 1} polygon, .section-${e - 1} path  {
      fill: ${r(t["cScale" + e], 10)};
      stroke: ${r(t["cScale" + e], 10)};

    }
    .section-${e - 1} text {
     fill: ${t["cScaleLabel" + e]};
    }
    .node-icon-${e - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + e]};
    }
    .section-edge-${e - 1}{
      stroke: ${t["cScale" + e]};
    }
    .edge-depth-${e - 1}{
      stroke-width: ${i};
    }
    .section-${e - 1} line {
      stroke: ${t["cScaleInv" + e]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.background};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${t.background};
    stroke: ${t.nodeBorder};
    text-decoration: underline;
  }
    `;
	}
	return n;
}, "genSections"), R = {
	db: {
		clear: E,
		addNode: L,
		getSections: N,
		getData: x,
		nodeType: D,
		getType: I,
		setElementForId: O,
		decorateNode: v,
		type2Str: C,
		getLogger: A,
		getElementById: $
	},
	renderer: w,
	parser: f,
	styles: l((t) => `
  .edge {
    stroke-width: 3;
  }
  ${T(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${t.textColor};
    fill: ${t.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${d()}
`, "getStyles")
};
export { R as diagram };
