import { A as t, G as e, J as i, M as n, S as s, Xt as r, d as a, f as o, j as l, o as c, qt as h } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as u } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as p } from "./vendor-mermaid.B-0J-u47.chunk.js";
import { a as y, i as d, o as f, s as g } from "./vendor-mermaid.mb-sK5ke.chunk.js";
var m = function() {
	var t = u(function(t, e, i, n) {
		for (i = i || {}, n = t.length; n--; i[t[n]] = e);
		return i;
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
	], i = [1, 9], n = [1, 10], s = [1, 11], r = [1, 12], a = [1, 13], o = [1, 14], l = {
		trace: u(function() {}, "trace"),
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
		performAction: u(function(t, e, i, n, s, r, a) {
			var o = r.length - 1;
			switch (s) {
				case 1: return r[o - 1];
				case 2:
				case 6:
				case 7:
					this.$ = [];
					break;
				case 3:
					r[o - 1].push(r[o]), this.$ = r[o - 1];
					break;
				case 4:
				case 5:
					this.$ = r[o];
					break;
				case 8:
					n.setDiagramTitle(r[o].substr(6)), this.$ = r[o].substr(6);
					break;
				case 9:
					this.$ = r[o].trim(), n.setAccTitle(this.$);
					break;
				case 10:
				case 11:
					this.$ = r[o].trim(), n.setAccDescription(this.$);
					break;
				case 12:
					n.addSection(r[o].substr(8)), this.$ = r[o].substr(8);
					break;
				case 13: n.addTask(r[o - 1], r[o]), this.$ = "task";
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			t(e, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: i,
				12: n,
				14: s,
				16: r,
				17: a,
				18: o
			},
			t(e, [2, 7], { 1: [2, 1] }),
			t(e, [2, 3]),
			{
				9: 15,
				11: i,
				12: n,
				14: s,
				16: r,
				17: a,
				18: o
			},
			t(e, [2, 5]),
			t(e, [2, 6]),
			t(e, [2, 8]),
			{ 13: [1, 16] },
			{ 15: [1, 17] },
			t(e, [2, 11]),
			t(e, [2, 12]),
			{ 19: [1, 18] },
			t(e, [2, 4]),
			t(e, [2, 9]),
			t(e, [2, 10]),
			t(e, [2, 13])
		],
		defaultActions: {},
		parseError: u(function(t, e) {
			if (e.recoverable) this.trace(t);
			else {
				var i = Error(t);
				throw i.hash = e, i;
			}
		}, "parseError"),
		parse: u(function(t) {
			var e = this, i = [0], n = [], s = [null], r = [], a = this.table, o = "", l = 0, c = 0, h = 0, p = r.slice.call(arguments, 1), y = Object.create(this.lexer), d = {};
			for (var f in this.yy) Object.prototype.hasOwnProperty.call(this.yy, f) && (d[f] = this.yy[f]);
			y.setInput(t, d), d.lexer = y, d.parser = this, typeof y.yylloc > "u" && (y.yylloc = {});
			var g = y.yylloc;
			r.push(g);
			var m = y.options && y.options.ranges;
			function x() {
				var t;
				return "number" != typeof (t = n.pop() || y.lex() || 1) && (t instanceof Array && (t = (n = t).pop()), t = e.symbols_[t] || t), t;
			}
			"function" == typeof d.parseError ? this.parseError = d.parseError : this.parseError = Object.getPrototypeOf(this).parseError, u(function(t) {
				i.length = i.length - 2 * t, s.length = s.length - t, r.length = r.length - t;
			}, "popStack"), u(x, "lex");
			for (var k, _, b, v, $, w, M, T, S, E = {};;) {
				if (b = i[i.length - 1], this.defaultActions[b] ? v = this.defaultActions[b] : ((null === k || typeof k > "u") && (k = x()), v = a[b] && a[b][k]), typeof v > "u" || !v.length || !v[0]) {
					var A = "";
					for (w in S = [], a[b]) this.terminals_[w] && w > 2 && S.push("'" + this.terminals_[w] + "'");
					A = y.showPosition ? "Parse error on line " + (l + 1) + `:
` + y.showPosition() + `
Expecting ` + S.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == k ? "end of input" : "'" + (this.terminals_[k] || k) + "'"), this.parseError(A, {
						text: y.match,
						token: this.terminals_[k] || k,
						line: y.yylineno,
						loc: g,
						expected: S
					});
				}
				if (v[0] instanceof Array && v.length > 1) throw Error("Parse Error: multiple actions possible at state: " + b + ", token: " + k);
				switch (v[0]) {
					case 1:
						i.push(k), s.push(y.yytext), r.push(y.yylloc), i.push(v[1]), k = null, _ ? (k = _, _ = null) : (c = y.yyleng, o = y.yytext, l = y.yylineno, g = y.yylloc, h > 0 && h--);
						break;
					case 2:
						if (M = this.productions_[v[1]][1], E.$ = s[s.length - M], E._$ = {
							first_line: r[r.length - (M || 1)].first_line,
							last_line: r[r.length - 1].last_line,
							first_column: r[r.length - (M || 1)].first_column,
							last_column: r[r.length - 1].last_column
						}, m && (E._$.range = [r[r.length - (M || 1)].range[0], r[r.length - 1].range[1]]), "u" > typeof ($ = this.performAction.apply(E, [
							o,
							c,
							l,
							d,
							v[1],
							s,
							r
						].concat(p)))) return $;
						M && (i = i.slice(0, -1 * M * 2), s = s.slice(0, -1 * M), r = r.slice(0, -1 * M)), i.push(this.productions_[v[1]][0]), s.push(E.$), r.push(E._$), T = a[i[i.length - 2]][i[i.length - 1]], i.push(T);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	function c() {
		this.yy = {};
	}
	return l.lexer = {
		EOF: 1,
		parseError: u(function(t, e) {
			if (this.yy.parser) this.yy.parser.parseError(t, e);
			else throw Error(t);
		}, "parseError"),
		setInput: u(function(t, e) {
			return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
				first_line: 1,
				first_column: 0,
				last_line: 1,
				last_column: 0
			}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
		}, "setInput"),
		input: u(function() {
			var t = this._input[0];
			return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t;
		}, "input"),
		unput: u(function(t) {
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
		more: u(function() {
			return this._more = !0, this;
		}, "more"),
		reject: u(function() {
			return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "reject"),
		less: u(function(t) {
			this.unput(this.match.slice(t));
		}, "less"),
		pastInput: u(function() {
			var t = this.matched.substr(0, this.matched.length - this.match.length);
			return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
		}, "pastInput"),
		upcomingInput: u(function() {
			var t = this.match;
			return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
		}, "upcomingInput"),
		showPosition: u(function() {
			var t = this.pastInput(), e = Array(t.length + 1).join("-");
			return t + this.upcomingInput() + `
` + e + "^";
		}, "showPosition"),
		test_match: u(function(t, e) {
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
		next: u(function() {
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
		lex: u(function() {
			return this.next() || this.lex();
		}, "lex"),
		begin: u(function(t) {
			this.conditionStack.push(t);
		}, "begin"),
		popState: u(function() {
			return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
		}, "popState"),
		_currentRules: u(function() {
			return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
		}, "_currentRules"),
		topState: u(function(t) {
			return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL";
		}, "topState"),
		pushState: u(function(t) {
			this.begin(t);
		}, "pushState"),
		stateStackSize: u(function() {
			return this.conditionStack.length;
		}, "stateStackSize"),
		options: { "case-insensitive": !0 },
		performAction: u(function(t, e, i, n) {
			switch (i) {
				case 0:
				case 1:
				case 3:
				case 4: break;
				case 2: return 10;
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
	}, u(c, "Parser"), c.prototype = l, l.Parser = c, new c();
}();
m.parser = m;
var x = "", k = [], _ = [], b = [], v = u(function() {
	k.length = 0, _.length = 0, x = "", b.length = 0, s();
}, "clear"), $ = u(function(t) {
	x = t, k.push(t);
}, "addSection"), w = u(function() {
	return k;
}, "getSections"), M = u(function() {
	let t = A(), e = 0;
	for (; !t && e < 100;) t = A(), e++;
	return _.push(...b), _;
}, "getTasks"), T = u(function() {
	let t = [];
	return _.forEach((e) => {
		e.people && t.push(...e.people);
	}), [...new Set(t)].sort();
}, "updateActors"), S = u(function(t, e) {
	let i = e.substr(1).split(":"), n = 0, s = [];
	1 === i.length ? (n = Number(i[0]), s = []) : (n = Number(i[0]), s = i[1].split(","));
	let r = s.map((t) => t.trim()), a = {
		section: x,
		type: x,
		people: r,
		task: t,
		score: n
	};
	b.push(a);
}, "addTask"), E = u(function(t) {
	let e = {
		section: x,
		type: x,
		description: t,
		task: t,
		classes: []
	};
	_.push(e);
}, "addTaskOrg"), A = u(function() {
	let t = u(function(t) {
		return b[t].processed;
	}, "compileTask"), e = !0;
	for (let [i, n] of b.entries()) t(i), e = e && n.processed;
	return e;
}, "compileTasks"), C = u(function() {
	return T();
}, "getActors"), I = {
	getConfig: u(() => i().journey, "getConfig"),
	clear: v,
	setDiagramTitle: e,
	getDiagramTitle: l,
	setAccTitle: o,
	getAccTitle: t,
	setAccDescription: a,
	getAccDescription: c,
	addSection: $,
	getSections: w,
	getTasks: M,
	addTask: S,
	addTaskOrg: E,
	getActors: C
}, P = u((t) => `.label {
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
  ${p()}
`, "getStyles"), j = u(function(t, e) {
	return f(t, e);
}, "drawRect"), F = u(function(t, e) {
	let i = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), n = t.append("g");
	function s(t) {
		let i = r().startAngle(Math.PI / 2).endAngle(Math.PI / 2 * 3).innerRadius(7.5).outerRadius(6.8181818181818175);
		t.append("path").attr("class", "mouth").attr("d", i).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
	}
	function a(t) {
		let i = r().startAngle(3 * Math.PI / 2).endAngle(Math.PI / 2 * 5).innerRadius(7.5).outerRadius(6.8181818181818175);
		t.append("path").attr("class", "mouth").attr("d", i).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
	}
	function o(t) {
		t.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return n.append("circle").attr("cx", e.cx - 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), n.append("circle").attr("cx", e.cx + 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), u(s, "smile"), u(a, "sad"), u(o, "ambivalent"), e.score > 3 ? s(n) : e.score < 3 ? a(n) : o(n), i;
}, "drawFace"), V = u(function(t, e) {
	let i = t.append("circle");
	return i.attr("cx", e.cx), i.attr("cy", e.cy), i.attr("class", "actor-" + e.pos), i.attr("fill", e.fill), i.attr("stroke", e.stroke), i.attr("r", e.r), void 0 !== i.class && i.attr("class", i.class), void 0 !== e.title && i.append("title").text(e.title), i;
}, "drawCircle"), O = u(function(t, e) {
	return g(t, e);
}, "drawText"), B = u(function(t, e, i) {
	let n = t.append("g"), s = y();
	s.x = e.x, s.y = e.y, s.fill = e.fill, s.width = i.width * e.taskCount + i.diagramMarginX * (e.taskCount - 1), s.height = i.height, s.class = "journey-section section-type-" + e.num, s.rx = 3, s.ry = 3, j(n, s), R(i)(e.text, n, s.x, s.y, s.width, s.height, { class: "journey-section section-type-" + e.num }, i, e.colour);
}, "drawSection"), L = -1, D = u(function(t, e, i) {
	let n = e.x + i.width / 2, s = t.append("g");
	L++, s.append("line").attr("id", "task" + L).attr("x1", n).attr("y1", e.y).attr("x2", n).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), F(s, {
		cx: n,
		cy: 300 + (5 - e.score) * 30,
		score: e.score
	});
	let r = y();
	r.x = e.x, r.y = e.y, r.fill = e.fill, r.width = i.width, r.height = i.height, r.class = "task task-type-" + e.num, r.rx = 3, r.ry = 3, j(s, r);
	let a = e.x + 14;
	e.people.forEach((t) => {
		let i = e.actors[t].color;
		V(s, {
			cx: a,
			cy: e.y,
			r: 7,
			fill: i,
			stroke: "#000",
			title: t,
			pos: e.actors[t].position
		}), a += 10;
	}), R(i)(e.task, s, r.x, r.y, r.width, r.height, { class: "task" }, i, e.colour);
}, "drawTask"), R = function() {
	function t(t, e, i, s, r, a, o, l) {
		n(e.append("text").attr("x", i + r / 2).attr("y", s + a / 2 + 5).style("font-color", l).style("text-anchor", "middle").text(t), o);
	}
	function e(t, e, i, s, r, a, o, l, c) {
		let { taskFontSize: h, taskFontFamily: u } = l, p = t.split(/<br\s*\/?>/gi);
		for (let t = 0; t < p.length; t++) {
			let l = t * h - h * (p.length - 1) / 2, y = e.append("text").attr("x", i + r / 2).attr("y", s).attr("fill", c).style("text-anchor", "middle").style("font-size", h).style("font-family", u);
			y.append("tspan").attr("x", i + r / 2).attr("dy", l).text(p[t]), y.attr("y", s + a / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), n(y, o);
		}
	}
	function i(t, i, s, r, a, o, l, c) {
		let h = i.append("switch"), u = h.append("foreignObject").attr("x", s).attr("y", r).attr("width", a).attr("height", o).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		u.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t), e(t, h, s, r, a, o, l, c), n(u, l);
	}
	function n(t, e) {
		for (let i in e) i in e && t.attr(i, e[i]);
	}
	return u(t, "byText"), u(e, "byTspan"), u(i, "byFo"), u(n, "_setTextAttrs"), function(n) {
		return "fo" === n.textPlacement ? i : "old" === n.textPlacement ? t : e;
	};
}(), N = u(function(t) {
	t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics"), z = u(function(t) {
	Object.keys(t).forEach(function(e) {
		q[e] = t[e];
	});
}, "setConf"), W = {}, Y = 0;
function X(t) {
	let e = i().journey, n = e.maxLabelWidth;
	Y = 0;
	let s = 60;
	Object.keys(W).forEach((i) => {
		let r = W[i].color;
		V(t, {
			cx: 20,
			cy: s,
			r: 7,
			fill: r,
			stroke: "#000",
			pos: W[i].position
		});
		let a = t.append("text").attr("visibility", "hidden").text(i), o = a.node().getBoundingClientRect().width;
		a.remove();
		let l = [];
		if (o <= n) l = [i];
		else {
			let e = i.split(" "), s = "";
			a = t.append("text").attr("visibility", "hidden"), e.forEach((t) => {
				let e = s ? `${s} ${t}` : t;
				if (a.text(e), a.node().getBoundingClientRect().width > n) {
					if (s && l.push(s), s = t, a.text(t), a.node().getBoundingClientRect().width > n) {
						let e = "";
						for (let i of t) e += i, a.text(e + "-"), a.node().getBoundingClientRect().width > n && (l.push(e.slice(0, -1) + "-"), e = i);
						s = e;
					}
				} else s = e;
			}), s && l.push(s), a.remove();
		}
		l.forEach((i, n) => {
			let r = O(t, {
				x: 40,
				y: s + 7 + 20 * n,
				fill: "#666",
				text: i,
				textMargin: e.boxTextMargin ?? 5
			}).node().getBoundingClientRect().width;
			r > Y && r > e.leftMargin - r && (Y = r);
		}), s += Math.max(20, 20 * l.length);
	});
}
u(X, "drawActorLegend");
var q = i().journey, U = 0, G = u(function(t, e, s, r) {
	let a = i(), o = a.journey.titleColor, l = a.journey.titleFontSize, c = a.journey.titleFontFamily, u = a.securityLevel, p;
	"sandbox" === u && (p = h("#i" + e));
	let y = "sandbox" === u ? h(p.nodes()[0].contentDocument.body) : h("body");
	J.init();
	let d = y.select("#" + e);
	N(d);
	let f = r.db.getTasks(), g = r.db.getDiagramTitle(), m = r.db.getActors();
	for (let t in W) delete W[t];
	let x = 0;
	m.forEach((t) => {
		W[t] = {
			color: q.actorColours[x % q.actorColours.length],
			position: x
		}, x++;
	}), X(d), U = q.leftMargin + Y, J.insert(0, 0, U, 50 * Object.keys(W).length), K(d, f, 0);
	let k = J.getBounds();
	g && d.append("text").text(g).attr("x", U).attr("font-size", l).attr("font-weight", "bold").attr("y", 25).attr("fill", o).attr("font-family", c);
	let _ = k.stopy - k.starty + 2 * q.diagramMarginY, b = U + k.stopx + 2 * q.diagramMarginX;
	n(d, _, b, q.useMaxWidth), d.append("line").attr("x1", U).attr("y1", 4 * q.height).attr("x2", b - U - 4).attr("y2", 4 * q.height).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
	let v = 70 * !!g;
	d.attr("viewBox", `${k.startx} -25 ${b} ${_ + v}`), d.attr("preserveAspectRatio", "xMinYMin meet"), d.attr("height", _ + v + 25);
}, "draw"), J = {
	data: {
		startx: void 0,
		stopx: void 0,
		starty: void 0,
		stopy: void 0
	},
	verticalPos: 0,
	sequenceItems: [],
	init: u(function() {
		this.sequenceItems = [], this.data = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0
		}, this.verticalPos = 0;
	}, "init"),
	updateVal: u(function(t, e, i, n) {
		void 0 === t[e] ? t[e] = i : t[e] = n(i, t[e]);
	}, "updateVal"),
	updateBounds: u(function(t, e, n, s) {
		let r = i().journey, a = this, o = 0;
		function l(i) {
			return u(function(l) {
				o++;
				let c = a.sequenceItems.length - o + 1;
				a.updateVal(l, "starty", e - c * r.boxMargin, Math.min), a.updateVal(l, "stopy", s + c * r.boxMargin, Math.max), a.updateVal(J.data, "startx", t - c * r.boxMargin, Math.min), a.updateVal(J.data, "stopx", n + c * r.boxMargin, Math.max), "activation" !== i && (a.updateVal(l, "startx", t - c * r.boxMargin, Math.min), a.updateVal(l, "stopx", n + c * r.boxMargin, Math.max), a.updateVal(J.data, "starty", e - c * r.boxMargin, Math.min), a.updateVal(J.data, "stopy", s + c * r.boxMargin, Math.max));
			}, "updateItemBounds");
		}
		u(l, "updateFn"), this.sequenceItems.forEach(l());
	}, "updateBounds"),
	insert: u(function(t, e, i, n) {
		let s = Math.min(t, i), r = Math.max(t, i), a = Math.min(e, n), o = Math.max(e, n);
		this.updateVal(J.data, "startx", s, Math.min), this.updateVal(J.data, "starty", a, Math.min), this.updateVal(J.data, "stopx", r, Math.max), this.updateVal(J.data, "stopy", o, Math.max), this.updateBounds(s, a, r, o);
	}, "insert"),
	bumpVerticalPos: u(function(t) {
		this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
	}, "bumpVerticalPos"),
	getVerticalPos: u(function() {
		return this.verticalPos;
	}, "getVerticalPos"),
	getBounds: u(function() {
		return this.data;
	}, "getBounds")
}, Z = q.sectionFills, H = q.sectionColours, K = u(function(t, e, n) {
	let s = i().journey, r = "", a = n + (2 * s.height + s.diagramMarginY), o = 0, l = "#CCC", c = "black", h = 0;
	for (let [i, n] of e.entries()) {
		if (r !== n.section) {
			l = Z[o % Z.length], h = o % Z.length, c = H[o % H.length];
			let a = 0, u = n.section;
			for (let t = i; t < e.length && e[t].section == u; t++) a += 1;
			B(t, {
				x: i * s.taskMargin + i * s.width + U,
				y: 50,
				text: n.section,
				fill: l,
				num: h,
				colour: c,
				taskCount: a
			}, s), r = n.section, o++;
		}
		let u = n.people.reduce((t, e) => (W[e] && (t[e] = W[e]), t), {});
		n.x = i * s.taskMargin + i * s.width + U, n.y = a, n.width = s.diagramMarginX, n.height = s.diagramMarginY, n.colour = c, n.fill = l, n.num = h, n.actors = u, D(t, n, s), J.insert(n.x, n.y, n.x + n.width + s.taskMargin, 450);
	}
}, "drawTasks"), Q = {
	setConf: z,
	draw: G
}, tt = {
	parser: m,
	db: I,
	renderer: Q,
	styles: P,
	init: u((t) => {
		Q.setConf(t.journey), I.clear();
	}, "init")
};
export { tt as diagram };
