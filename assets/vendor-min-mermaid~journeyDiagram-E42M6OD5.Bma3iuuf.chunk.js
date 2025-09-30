import { $ as Vo, A as $o, F as Go, G as No, I as Ho, Q as Uo, et as Wo, fn as ks, gt as mr, ln as ia, pt as jo } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BVgxNvHA.chunk.js";
import { Q as m } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BH0ewMis.chunk.js";
import { o } from "./vendor-min-mermaid~blockDiagram-BWRZOBD3.B56fyXqp.chunk.js";
import { a as g, c as y, o as h, s as x } from "./vendor-min-mermaid~c4Diagram-Q5SP5FFD.C2iMBplo.chunk.js";
var Z = /* @__PURE__ */ function() {
	var t = /* @__PURE__ */ m(function(h$1, n, a, o$1) {
		for (a = a || {}, o$1 = h$1.length; o$1--; a[h$1[o$1]] = n);
		return a;
	}, "o"), e = [
		6,
		8,
		10,
		11,
		12,
		14,
		16,
		17,
		18
	], s = [1, 9], c = [1, 10], r = [1, 11], d = [1, 12], u = [1, 13], f = [1, 14], g$1 = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			journey: 4,
			document: 5,
			EOF: 6,
			line: 7,
			SPACE: 8,
			statement: 9,
			NEWLINE: 10,
			title: 11,
			acc_title: 12,
			acc_title_value: 13,
			acc_descr: 14,
			acc_descr_value: 15,
			acc_descr_multiline_value: 16,
			section: 17,
			taskName: 18,
			taskData: 19,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "journey",
			6: "EOF",
			8: "SPACE",
			10: "NEWLINE",
			11: "title",
			12: "acc_title",
			13: "acc_title_value",
			14: "acc_descr",
			15: "acc_descr_value",
			16: "acc_descr_multiline_value",
			17: "section",
			18: "taskName",
			19: "taskData"
		},
		productions_: [
			0,
			[3, 3],
			[5, 0],
			[5, 2],
			[7, 2],
			[7, 1],
			[7, 1],
			[7, 1],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 2]
		],
		performAction: /* @__PURE__ */ m(function(n, a, o$1, y$1, p, l, v) {
			var k = l.length - 1;
			switch (p) {
				case 1: return l[k - 1];
				case 2:
					this.$ = [];
					break;
				case 3:
					l[k - 1].push(l[k]), this.$ = l[k - 1];
					break;
				case 4:
				case 5:
					this.$ = l[k];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					y$1.setDiagramTitle(/* @__PURE__ */ l[k].substr(6)), this.$ = /* @__PURE__ */ l[k].substr(6);
					break;
				case 9:
					this.$ = /* @__PURE__ */ l[k].trim(), y$1.setAccTitle(this.$);
					break;
				case 10:
				case 11:
					this.$ = /* @__PURE__ */ l[k].trim(), y$1.setAccDescription(this.$);
					break;
				case 12:
					y$1.addSection(/* @__PURE__ */ l[k].substr(8)), this.$ = /* @__PURE__ */ l[k].substr(8);
					break;
				case 13:
					y$1.addTask(l[k - 1], l[k]), this.$ = "task";
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			/* @__PURE__ */ t(e, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: s,
				12: c,
				14: r,
				16: d,
				17: u,
				18: f
			},
			/* @__PURE__ */ t(e, [2, 7], { 1: [2, 1] }),
			/* @__PURE__ */ t(e, [2, 3]),
			{
				9: 15,
				11: s,
				12: c,
				14: r,
				16: d,
				17: u,
				18: f
			},
			/* @__PURE__ */ t(e, [2, 5]),
			/* @__PURE__ */ t(e, [2, 6]),
			/* @__PURE__ */ t(e, [2, 8]),
			{ 13: [1, 16] },
			{ 15: [1, 17] },
			/* @__PURE__ */ t(e, [2, 11]),
			/* @__PURE__ */ t(e, [2, 12]),
			{ 19: [1, 18] },
			/* @__PURE__ */ t(e, [2, 4]),
			/* @__PURE__ */ t(e, [2, 9]),
			/* @__PURE__ */ t(e, [2, 10]),
			/* @__PURE__ */ t(e, [2, 13])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ m(function(n, a) {
			if (a.recoverable) this.trace(n);
			else {
				var o$1 = new Error(n);
				throw o$1.hash = a, o$1;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(n) {
			var a = this, o$1 = [0], y$1 = [], p = [null], l = [], v = this.table, k = "", E = 0, nt = 0, it = 0, St = 2, rt = 1, Mt = /* @__PURE__ */ l.slice.call(arguments, 1), b = /* @__PURE__ */ Object.create(this.lexer), A = { yy: {} };
			for (var Y in this.yy) Object.prototype.hasOwnProperty.call(this.yy, Y) && (A.yy[Y] = this.yy[Y]);
			b.setInput(n, A.yy), A.yy.lexer = b, A.yy.parser = this, typeof b.yylloc > "u" && (b.yylloc = {});
			var q = b.yylloc;
			l.push(q);
			var Ct = b.options && b.options.ranges;
			typeof A.yy.parseError == "function" ? this.parseError = A.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function Ut(w) {
				o$1.length = o$1.length - 2 * w, p.length = p.length - w, l.length = l.length - w;
			}
			m(Ut, "popStack");
			function Et() {
				var w;
				return w = y$1.pop() || b.lex() || rt, typeof w != "number" && (w instanceof Array && (y$1 = w, w = /* @__PURE__ */ y$1.pop()), w = a.symbols_[w] || w), w;
			}
			m(Et, "lex");
			for (var _, D, F, T, H, V = {}, j, M, st, W;;) {
				if (F = o$1[o$1.length - 1], this.defaultActions[F] ? T = this.defaultActions[F] : ((_ === null || typeof _ > "u") && (_ = /* @__PURE__ */ Et()), T = v[F] && v[F][_]), typeof T > "u" || !T.length || !T[0]) {
					var X = "";
					W = [];
					for (j in v[F]) this.terminals_[j] && j > St && W.push("'" + this.terminals_[j] + "'");
					b.showPosition ? X = "Parse error on line " + (E + 1) + `:
` + b.showPosition() + `
Expecting ` + W.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : X = "Parse error on line " + (E + 1) + ": Unexpected " + (_ == rt ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(X, {
						text: b.match,
						token: this.terminals_[_] || _,
						line: b.yylineno,
						loc: q,
						expected: W
					});
				}
				if (T[0] instanceof Array && T.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + F + ", token: " + _);
				switch (T[0]) {
					case 1:
						o$1.push(_), p.push(b.yytext), l.push(b.yylloc), o$1.push(T[1]), _ = null, D ? (_ = D, D = null) : (nt = b.yyleng, k = b.yytext, E = b.yylineno, q = b.yylloc, it > 0 && it--);
						break;
					case 2:
						if (M = this.productions_[T[1]][1], V.$ = p[p.length - M], V._$ = {
							first_line: l[l.length - (M || 1)].first_line,
							last_line: l[l.length - 1].last_line,
							first_column: l[l.length - (M || 1)].first_column,
							last_column: l[l.length - 1].last_column
						}, Ct && (V._$.range = [l[l.length - (M || 1)].range[0], l[l.length - 1].range[1]]), H = /* @__PURE__ */ this.performAction.apply(V, /* @__PURE__ */ [
							k,
							nt,
							E,
							A.yy,
							T[1],
							p,
							l
						].concat(Mt)), typeof H < "u") return H;
						M && (o$1 = /* @__PURE__ */ o$1.slice(0, -1 * M * 2), p = /* @__PURE__ */ p.slice(0, -1 * M), l = /* @__PURE__ */ l.slice(0, -1 * M)), o$1.push(this.productions_[T[1]][0]), p.push(V.$), l.push(V._$), st = v[o$1[o$1.length - 2]][o$1[o$1.length - 1]], o$1.push(st);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	g$1.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(a, o$1) {
				if (this.yy.parser) this.yy.parser.parseError(a, o$1);
				else throw new Error(a);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(n, a) {
				return this.yy = a || this.yy || {}, this._input = n, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var n = this._input[0];
				this.yytext += n, this.yyleng++, this.offset++, this.match += n, this.matched += n;
				return n.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), n;
			}, "input"),
			unput: /* @__PURE__ */ m(function(n) {
				var a = n.length, o$1 = /* @__PURE__ */ n.split(/(?:\r\n?|\n)/g);
				this._input = n + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
				var y$1 = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
				this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), o$1.length - 1 && (this.yylineno -= o$1.length - 1);
				var p = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: o$1 ? (o$1.length === y$1.length ? this.yylloc.first_column : 0) + y$1[y$1.length - o$1.length].length - o$1[0].length : this.yylloc.first_column - a
				}, this.options.ranges && (this.yylloc.range = [p[0], p[0] + this.yyleng - a]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ m(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ m(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ m(function(n) {
				this.unput(/* @__PURE__ */ this.match.slice(n));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var n = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
				return (n.length > 20 ? "..." : "") + n.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var n = this.match;
				return n.length < 20 && (n += /* @__PURE__ */ this._input.substr(0, 20 - n.length)), (n.substr(0, 20) + (n.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var n = /* @__PURE__ */ this.pastInput(), a = /* @__PURE__ */ new Array(n.length + 1).join("-");
				return n + this.upcomingInput() + `
` + a + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(n, a) {
				var o$1, y$1, p;
				if (this.options.backtrack_lexer && (p = {
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
					conditionStack: /* @__PURE__ */ this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (p.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), y$1 = /* @__PURE__ */ n[0].match(/(?:\r\n?|\n).*/g), y$1 && (this.yylineno += y$1.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: y$1 ? y$1[y$1.length - 1].length - y$1[y$1.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + n[0].length
				}, this.yytext += n[0], this.match += n[0], this.matches = n, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = /* @__PURE__ */ this._input.slice(n[0].length), this.matched += n[0], o$1 = /* @__PURE__ */ this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), o$1) return o$1;
				if (this._backtrack) {
					for (var l in p) this[l] = p[l];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var n, a, o$1, y$1;
				this._more || (this.yytext = "", this.match = "");
				for (var p = /* @__PURE__ */ this._currentRules(), l = 0; l < p.length; l++) if (o$1 = /* @__PURE__ */ this._input.match(this.rules[p[l]]), o$1 && (!a || o$1[0].length > a[0].length)) {
					if (a = o$1, y$1 = l, this.options.backtrack_lexer) {
						if (n = /* @__PURE__ */ this.test_match(o$1, p[l]), n !== !1) return n;
						if (this._backtrack) {
							a = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return a ? (n = /* @__PURE__ */ this.test_match(a, p[y$1]), n !== !1 ? n : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(a) {
				this.conditionStack.push(a);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(a) {
				return a = this.conditionStack.length - 1 - Math.abs(a || 0), a >= 0 ? this.conditionStack[a] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(a) {
				this.begin(a);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ m(function(a, o$1, y$1, p) {
				switch (y$1) {
					case 0: break;
					case 1: break;
					case 2: return 10;
					case 3: break;
					case 4: break;
					case 5: return 4;
					case 6: return 11;
					case 7: return this.begin("acc_title"), 12;
					case 8: return this.popState(), "acc_title_value";
					case 9: return this.begin("acc_descr"), 14;
					case 10: return this.popState(), "acc_descr_value";
					case 11:
						this.begin("acc_descr_multiline");
						break;
					case 12:
						this.popState();
						break;
					case 13: return "acc_descr_multiline_value";
					case 14: return 17;
					case 15: return 18;
					case 16: return 19;
					case 17: return ":";
					case 18: return 6;
					case 19: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:journey\b)/i,
				/^(?:title\s[^#\n;]+)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:section\s[^#:\n;]+)/i,
				/^(?:[^#:\n;]+)/i,
				/^(?::[^#\n;]+)/i,
				/^(?::)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [12, 13],
					inclusive: !1
				},
				acc_descr: {
					rules: [10],
					inclusive: !1
				},
				acc_title: {
					rules: [8],
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
						9,
						11,
						14,
						15,
						16,
						17,
						18,
						19
					],
					inclusive: !0
				}
			}
		};
	}();
	function x$1() {
		this.yy = {};
	}
	return m(x$1, "Parser"), x$1.prototype = g$1, g$1.Parser = x$1, new x$1();
}();
Z.parser = Z;
var xt = Z;
var L = "", J = [], B = [], N = [], Pt = /* @__PURE__ */ m(function() {
	J.length = 0, B.length = 0, L = "", N.length = 0, No();
}, "clear"), It = /* @__PURE__ */ m(function(t) {
	L = t, J.push(t);
}, "addSection"), At = /* @__PURE__ */ m(function() {
	return J;
}, "getSections"), Ft = /* @__PURE__ */ m(function() {
	let t = /* @__PURE__ */ kt(), e = 100, s = 0;
	for (; !t && s < e;) t = /* @__PURE__ */ kt(), s++;
	return B.push(...N), B;
}, "getTasks"), Vt = /* @__PURE__ */ m(function() {
	let t = [];
	return B.forEach((s) => {
		s.people && t.push(...s.people);
	}), [...new Set(t)].sort();
}, "updateActors"), Lt = /* @__PURE__ */ m(function(t, e) {
	let s = /* @__PURE__ */ e.substr(1).split(":"), c = 0, r = [];
	s.length === 1 ? (c = /* @__PURE__ */ Number(s[0]), r = []) : (c = /* @__PURE__ */ Number(s[0]), r = /* @__PURE__ */ s[1].split(","));
	let u = {
		section: L,
		type: L,
		people: /* @__PURE__ */ r.map((f) => f.trim()),
		task: t,
		score: c
	};
	N.push(u);
}, "addTask"), Rt = /* @__PURE__ */ m(function(t) {
	let e = {
		section: L,
		type: L,
		description: t,
		task: t,
		classes: []
	};
	B.push(e);
}, "addTaskOrg"), kt = /* @__PURE__ */ m(function() {
	let t = /* @__PURE__ */ m(function(s) {
		return N[s].processed;
	}, "compileTask"), e = !0;
	for (let [s, c] of N.entries()) t(s), e = e && c.processed;
	return e;
}, "compileTasks"), K = {
	getConfig: /* @__PURE__ */ m(() => mr().journey, "getConfig"),
	clear: Pt,
	setDiagramTitle: jo,
	getDiagramTitle: Vo,
	setAccTitle: Ho,
	getAccTitle: Uo,
	setAccDescription: Go,
	getAccDescription: $o,
	addSection: It,
	getSections: At,
	getTasks: Ft,
	addTask: Lt,
	addTaskOrg: Rt,
	getActors: /* @__PURE__ */ m(function() {
		return Vt();
	}, "getActors")
};
var bt = /* @__PURE__ */ m((t) => `.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
  ${o()}
`, "getStyles");
var Q = /* @__PURE__ */ m(function(t, e) {
	return x(t, e);
}, "drawRect"), jt = /* @__PURE__ */ m(function(t, e) {
	let c = /* @__PURE__ */ t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), r = /* @__PURE__ */ t.append("g");
	r.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), r.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
	function d(g$1) {
		let m$1 = /* @__PURE__ */ ks().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
		g$1.append("path").attr("class", "mouth").attr("d", m$1).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
	}
	m(d, "smile");
	function u(g$1) {
		let m$1 = /* @__PURE__ */ ks().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
		g$1.append("path").attr("class", "mouth").attr("d", m$1).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
	}
	m(u, "sad");
	function f(g$1) {
		g$1.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return m(f, "ambivalent"), e.score > 3 ? d(r) : e.score < 3 ? u(r) : f(r), c;
}, "drawFace"), vt = /* @__PURE__ */ m(function(t, e) {
	let s = /* @__PURE__ */ t.append("circle");
	return s.attr("cx", e.cx), s.attr("cy", e.cy), s.attr("class", "actor-" + e.pos), s.attr("fill", e.fill), s.attr("stroke", e.stroke), s.attr("r", e.r), s.class !== void 0 && s.attr("class", s.class), e.title !== void 0 && s.append("title").text(e.title), s;
}, "drawCircle"), wt = /* @__PURE__ */ m(function(t, e) {
	return y(t, e);
}, "drawText"), Wt = /* @__PURE__ */ m(function(t, e) {
	function s(r, d, u, f, g$1) {
		return r + "," + d + " " + (r + u) + "," + d + " " + (r + u) + "," + (d + f - g$1) + " " + (r + u - g$1 * 1.2) + "," + (d + f) + " " + r + "," + (d + f);
	}
	m(s, "genPoints");
	let c = /* @__PURE__ */ t.append("polygon");
	c.attr("points", /* @__PURE__ */ s(e.x, e.y, 50, 20, 7)), c.attr("class", "labelBox"), e.y = e.y + e.labelMargin, e.x = e.x + .5 * e.labelMargin, wt(t, e);
}, "drawLabel"), zt = /* @__PURE__ */ m(function(t, e, s) {
	let c = /* @__PURE__ */ t.append("g"), r = /* @__PURE__ */ h();
	r.x = e.x, r.y = e.y, r.fill = e.fill, r.width = s.width * e.taskCount + s.diagramMarginX * (e.taskCount - 1), r.height = s.height, r.class = "journey-section section-type-" + e.num, r.rx = 3, r.ry = 3, Q(c, r), Tt(s)(e.text, c, r.x, r.y, r.width, r.height, { class: "journey-section section-type-" + e.num }, s, e.colour);
}, "drawSection"), _t = -1, Ot = /* @__PURE__ */ m(function(t, e, s) {
	let c = e.x + s.width / 2, r = /* @__PURE__ */ t.append("g");
	_t++, r.append("line").attr("id", "task" + _t).attr("x1", c).attr("y1", e.y).attr("x2", c).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), jt(r, {
		cx: c,
		cy: 300 + (5 - e.score) * 30,
		score: e.score
	});
	let u = /* @__PURE__ */ h();
	u.x = e.x, u.y = e.y, u.fill = e.fill, u.width = s.width, u.height = s.height, u.class = "task task-type-" + e.num, u.rx = 3, u.ry = 3, Q(r, u);
	let f = e.x + 14;
	e.people.forEach((g$1) => {
		let m$1 = e.actors[g$1].color, x$1 = {
			cx: f,
			cy: e.y,
			r: 7,
			fill: m$1,
			stroke: "#000",
			title: g$1,
			pos: e.actors[g$1].position
		};
		vt(r, x$1), f += 10;
	}), Tt(s)(e.task, r, u.x, u.y, u.width, u.height, { class: "task" }, s, e.colour);
}, "drawTask"), Yt = /* @__PURE__ */ m(function(t, e) {
	g(t, e);
}, "drawBackgroundRect"), Tt = /* @__PURE__ */ function() {
	function t(r, d, u, f, g$1, m$1, x$1, h$1) {
		c(/* @__PURE__ */ d.append("text").attr("x", u + g$1 / 2).attr("y", f + m$1 / 2 + 5).style("font-color", h$1).style("text-anchor", "middle").text(r), x$1);
	}
	m(t, "byText");
	function e(r, d, u, f, g$1, m$1, x$1, h$1, n) {
		let { taskFontSize: a, taskFontFamily: o$1 } = h$1, y$1 = /* @__PURE__ */ r.split(/<br\s*\/?>/gi);
		for (let p = 0; p < y$1.length; p++) {
			let l = p * a - a * (y$1.length - 1) / 2, v = /* @__PURE__ */ d.append("text").attr("x", u + g$1 / 2).attr("y", f).attr("fill", n).style("text-anchor", "middle").style("font-size", a).style("font-family", o$1);
			v.append("tspan").attr("x", u + g$1 / 2).attr("dy", l).text(y$1[p]), v.attr("y", f + m$1 / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), c(v, x$1);
		}
	}
	m(e, "byTspan");
	function s(r, d, u, f, g$1, m$1, x$1, h$1) {
		let n = /* @__PURE__ */ d.append("switch"), o$1 = /* @__PURE__ */ n.append("foreignObject").attr("x", u).attr("y", f).attr("width", g$1).attr("height", m$1).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		o$1.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(r), e(r, n, u, f, g$1, m$1, x$1, h$1), c(o$1, x$1);
	}
	m(s, "byFo");
	function c(r, d) {
		for (let u in d) u in d && r.attr(u, d[u]);
	}
	return m(c, "_setTextAttrs"), function(r) {
		return r.textPlacement === "fo" ? s : r.textPlacement === "old" ? t : e;
	};
}(), R = {
	drawRect: Q,
	drawCircle: vt,
	drawSection: zt,
	drawText: wt,
	drawLabel: Wt,
	drawTask: Ot,
	drawBackgroundRect: Yt,
	initGraphics: /* @__PURE__ */ m(function(t) {
		t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
	}, "initGraphics")
};
var Dt = /* @__PURE__ */ m(function(t) {
	Object.keys(t).forEach(function(s) {
		S[s] = t[s];
	});
}, "setConf"), C = {}, O = 0;
function Ht(t) {
	let e = mr().journey, s = e.maxLabelWidth;
	O = 0;
	let c = 60;
	Object.keys(C).forEach((r) => {
		let d = C[r].color, u = {
			cx: 20,
			cy: c,
			r: 7,
			fill: d,
			stroke: "#000",
			pos: C[r].position
		};
		R.drawCircle(t, u);
		let f = /* @__PURE__ */ t.append("text").attr("visibility", "hidden").text(r), g$1 = f.node().getBoundingClientRect().width;
		f.remove();
		let m$1 = [];
		if (g$1 <= s) m$1 = [r];
		else {
			let x$1 = /* @__PURE__ */ r.split(" "), h$1 = "";
			f = /* @__PURE__ */ t.append("text").attr("visibility", "hidden"), x$1.forEach((n) => {
				let a = h$1 ? `${h$1} ${n}` : n;
				if (f.text(a), f.node().getBoundingClientRect().width > s) {
					if (h$1 && m$1.push(h$1), h$1 = n, f.text(n), f.node().getBoundingClientRect().width > s) {
						let y$1 = "";
						for (let p of n) y$1 += p, f.text(y$1 + "-"), f.node().getBoundingClientRect().width > s && (m$1.push(y$1.slice(0, -1) + "-"), y$1 = p);
						h$1 = y$1;
					}
				} else h$1 = a;
			}), h$1 && m$1.push(h$1), f.remove();
		}
		m$1.forEach((x$1, h$1) => {
			let n = {
				x: 40,
				y: c + 7 + h$1 * 20,
				fill: "#666",
				text: x$1,
				textMargin: e.boxTextMargin ?? 5
			}, o$1 = R.drawText(t, n).node().getBoundingClientRect().width;
			o$1 > O && o$1 > e.leftMargin - o$1 && (O = o$1);
		}), c += /* @__PURE__ */ Math.max(20, m$1.length * 20);
	});
}
m(Ht, "drawActorLegend");
var S = mr().journey, I = 0, Xt = /* @__PURE__ */ m(function(t, e, s, c) {
	let r = /* @__PURE__ */ mr(), d = r.journey.titleColor, u = r.journey.titleFontSize, f = r.journey.titleFontFamily, g$1 = r.securityLevel, m$1;
	g$1 === "sandbox" && (m$1 = /* @__PURE__ */ ia("#i" + e));
	let x$1 = g$1 === "sandbox" ? ia(m$1.nodes()[0].contentDocument.body) : ia("body");
	$.init();
	let h$1 = /* @__PURE__ */ x$1.select("#" + e);
	R.initGraphics(h$1);
	let n = /* @__PURE__ */ c.db.getTasks(), a = /* @__PURE__ */ c.db.getDiagramTitle(), o$1 = /* @__PURE__ */ c.db.getActors();
	for (let E in C) delete C[E];
	let y$1 = 0;
	o$1.forEach((E) => {
		C[E] = {
			color: S.actorColours[y$1 % S.actorColours.length],
			position: y$1
		}, y$1++;
	}), Ht(h$1), I = S.leftMargin + O, $.insert(0, 0, I, Object.keys(C).length * 50), Gt(h$1, n, 0);
	let p = /* @__PURE__ */ $.getBounds();
	a && h$1.append("text").text(a).attr("x", I).attr("font-size", u).attr("font-weight", "bold").attr("y", 25).attr("fill", d).attr("font-family", f);
	let l = p.stopy - p.starty + 2 * S.diagramMarginY, v = I + p.stopx + 2 * S.diagramMarginX;
	Wo(h$1, l, v, S.useMaxWidth), h$1.append("line").attr("x1", I).attr("y1", S.height * 4).attr("x2", v - I - 4).attr("y2", S.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
	let k = a ? 70 : 0;
	h$1.attr("viewBox", `${p.startx} -25 ${v} ${l + k}`), h$1.attr("preserveAspectRatio", "xMinYMin meet"), h$1.attr("height", l + k + 25);
}, "draw"), $ = {
	data: {
		startx: void 0,
		stopx: void 0,
		starty: void 0,
		stopy: void 0
	},
	verticalPos: 0,
	sequenceItems: [],
	init: /* @__PURE__ */ m(function() {
		this.sequenceItems = [], this.data = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0
		}, this.verticalPos = 0;
	}, "init"),
	updateVal: /* @__PURE__ */ m(function(t, e, s, c) {
		t[e] === void 0 ? t[e] = s : t[e] = /* @__PURE__ */ c(s, t[e]);
	}, "updateVal"),
	updateBounds: /* @__PURE__ */ m(function(t, e, s, c) {
		let r = mr().journey, d = this, u = 0;
		function f(g$1) {
			return m(function(x$1) {
				u++;
				let h$1 = d.sequenceItems.length - u + 1;
				d.updateVal(x$1, "starty", e - h$1 * r.boxMargin, Math.min), d.updateVal(x$1, "stopy", c + h$1 * r.boxMargin, Math.max), d.updateVal($.data, "startx", t - h$1 * r.boxMargin, Math.min), d.updateVal($.data, "stopx", s + h$1 * r.boxMargin, Math.max), g$1 !== "activation" && (d.updateVal(x$1, "startx", t - h$1 * r.boxMargin, Math.min), d.updateVal(x$1, "stopx", s + h$1 * r.boxMargin, Math.max), d.updateVal($.data, "starty", e - h$1 * r.boxMargin, Math.min), d.updateVal($.data, "stopy", c + h$1 * r.boxMargin, Math.max));
			}, "updateItemBounds");
		}
		m(f, "updateFn"), this.sequenceItems.forEach(/* @__PURE__ */ f());
	}, "updateBounds"),
	insert: /* @__PURE__ */ m(function(t, e, s, c) {
		let r = /* @__PURE__ */ Math.min(t, s), d = /* @__PURE__ */ Math.max(t, s), u = /* @__PURE__ */ Math.min(e, c), f = /* @__PURE__ */ Math.max(e, c);
		this.updateVal($.data, "startx", r, Math.min), this.updateVal($.data, "starty", u, Math.min), this.updateVal($.data, "stopx", d, Math.max), this.updateVal($.data, "stopy", f, Math.max), this.updateBounds(r, u, d, f);
	}, "insert"),
	bumpVerticalPos: /* @__PURE__ */ m(function(t) {
		this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
	}, "bumpVerticalPos"),
	getVerticalPos: /* @__PURE__ */ m(function() {
		return this.verticalPos;
	}, "getVerticalPos"),
	getBounds: /* @__PURE__ */ m(function() {
		return this.data;
	}, "getBounds")
}, tt = S.sectionFills, $t = S.sectionColours, Gt = /* @__PURE__ */ m(function(t, e, s) {
	let c = mr().journey, r = "", d = c.height * 2 + c.diagramMarginY, u = s + d, f = 0, g$1 = "#CCC", m$1 = "black", x$1 = 0;
	for (let [h$1, n] of e.entries()) {
		if (r !== n.section) {
			g$1 = tt[f % tt.length], x$1 = f % tt.length, m$1 = $t[f % $t.length];
			let o$1 = 0, y$1 = n.section;
			for (let l = h$1; l < e.length && e[l].section == y$1; l++) o$1 = o$1 + 1;
			let p = {
				x: h$1 * c.taskMargin + h$1 * c.width + I,
				y: 50,
				text: n.section,
				fill: g$1,
				num: x$1,
				colour: m$1,
				taskCount: o$1
			};
			R.drawSection(t, p, c), r = n.section, f++;
		}
		let a = /* @__PURE__ */ n.people.reduce((o$1, y$1) => (C[y$1] && (o$1[y$1] = C[y$1]), o$1), {});
		n.x = h$1 * c.taskMargin + h$1 * c.width + I, n.y = u, n.width = c.diagramMarginX, n.height = c.diagramMarginY, n.colour = m$1, n.fill = g$1, n.num = x$1, n.actors = a, R.drawTask(t, n, c), $.insert(n.x, n.y, n.x + n.width + c.taskMargin, 450);
	}
}, "drawTasks"), et = {
	setConf: Dt,
	draw: Xt
};
var be = {
	parser: xt,
	db: K,
	renderer: et,
	styles: bt,
	init: /* @__PURE__ */ m((t) => {
		et.setConf(t.journey), K.clear();
	}, "init")
};
export { be as t };
