import { $t as t, B as e, H as n, J as i, O as s, S as r, V as a, W as l, Xt as o, qt as c } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { $ as h, Z as d } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var u = function() {
	var t = d(function(t, e, n, i) {
		for (n = n || {}, i = t.length; i--; n[t[i]] = e);
		return n;
	}, "o"), e = [
		6,
		8,
		10,
		11,
		12,
		14,
		16,
		17,
		20,
		21
	], n = [1, 9], i = [1, 10], s = [1, 11], r = [1, 12], a = [1, 13], l = [1, 16], o = [1, 17], c = {
		trace: d(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			timeline: 4,
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
			period_statement: 18,
			event_statement: 19,
			period: 20,
			event: 21,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "timeline",
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
			20: "period",
			21: "event"
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
			[9, 1],
			[9, 1],
			[18, 1],
			[19, 1]
		],
		performAction: d(function(t, e, n, i, s, r, a) {
			var l = r.length - 1;
			switch (s) {
				case 1: return r[l - 1];
				case 2:
				case 6:
				case 7:
					this.$ = [];
					break;
				case 3:
					r[l - 1].push(r[l]), this.$ = r[l - 1];
					break;
				case 4:
				case 5:
					this.$ = r[l];
					break;
				case 8:
					i.getCommonDb().setDiagramTitle(r[l].substr(6)), this.$ = r[l].substr(6);
					break;
				case 9:
					this.$ = r[l].trim(), i.getCommonDb().setAccTitle(this.$);
					break;
				case 10:
				case 11:
					this.$ = r[l].trim(), i.getCommonDb().setAccDescription(this.$);
					break;
				case 12:
					i.addSection(r[l].substr(8)), this.$ = r[l].substr(8);
					break;
				case 15:
					i.addTask(r[l], 0, ""), this.$ = r[l];
					break;
				case 16: i.addEvent(r[l].substr(2)), this.$ = r[l];
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
				11: n,
				12: i,
				14: s,
				16: r,
				17: a,
				18: 14,
				19: 15,
				20: l,
				21: o
			},
			t(e, [2, 7], { 1: [2, 1] }),
			t(e, [2, 3]),
			{
				9: 18,
				11: n,
				12: i,
				14: s,
				16: r,
				17: a,
				18: 14,
				19: 15,
				20: l,
				21: o
			},
			t(e, [2, 5]),
			t(e, [2, 6]),
			t(e, [2, 8]),
			{ 13: [1, 19] },
			{ 15: [1, 20] },
			t(e, [2, 11]),
			t(e, [2, 12]),
			t(e, [2, 13]),
			t(e, [2, 14]),
			t(e, [2, 15]),
			t(e, [2, 16]),
			t(e, [2, 4]),
			t(e, [2, 9]),
			t(e, [2, 10])
		],
		defaultActions: {},
		parseError: d(function(t, e) {
			if (e.recoverable) this.trace(t);
			else {
				var n = Error(t);
				throw n.hash = e, n;
			}
		}, "parseError"),
		parse: d(function(t) {
			var e = this, n = [0], i = [], s = [null], r = [], a = this.table, l = "", o = 0, c = 0, h = 0, u = r.slice.call(arguments, 1), p = Object.create(this.lexer), g = {};
			for (var y in this.yy) Object.prototype.hasOwnProperty.call(this.yy, y) && (g[y] = this.yy[y]);
			p.setInput(t, g), g.lexer = p, g.parser = this, typeof p.yylloc > "u" && (p.yylloc = {});
			var f = p.yylloc;
			r.push(f);
			var m = p.options && p.options.ranges;
			function x() {
				var t;
				return "number" != typeof (t = i.pop() || p.lex() || 1) && (t instanceof Array && (t = (i = t).pop()), t = e.symbols_[t] || t), t;
			}
			"function" == typeof g.parseError ? this.parseError = g.parseError : this.parseError = Object.getPrototypeOf(this).parseError, d(function(t) {
				n.length = n.length - 2 * t, s.length = s.length - t, r.length = r.length - t;
			}, "popStack"), d(x, "lex");
			for (var b, _, k, v, w, S, $, E, I, T = {};;) {
				if (k = n[n.length - 1], this.defaultActions[k] ? v = this.defaultActions[k] : ((null === b || typeof b > "u") && (b = x()), v = a[k] && a[k][b]), typeof v > "u" || !v.length || !v[0]) {
					var A = "";
					for (S in I = [], a[k]) this.terminals_[S] && S > 2 && I.push("'" + this.terminals_[S] + "'");
					A = p.showPosition ? "Parse error on line " + (o + 1) + `:
` + p.showPosition() + `
Expecting ` + I.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : "Parse error on line " + (o + 1) + ": Unexpected " + (1 == b ? "end of input" : "'" + (this.terminals_[b] || b) + "'"), this.parseError(A, {
						text: p.match,
						token: this.terminals_[b] || b,
						line: p.yylineno,
						loc: f,
						expected: I
					});
				}
				if (v[0] instanceof Array && v.length > 1) throw Error("Parse Error: multiple actions possible at state: " + k + ", token: " + b);
				switch (v[0]) {
					case 1:
						n.push(b), s.push(p.yytext), r.push(p.yylloc), n.push(v[1]), b = null, _ ? (b = _, _ = null) : (c = p.yyleng, l = p.yytext, o = p.yylineno, f = p.yylloc, h > 0 && h--);
						break;
					case 2:
						if ($ = this.productions_[v[1]][1], T.$ = s[s.length - $], T._$ = {
							first_line: r[r.length - ($ || 1)].first_line,
							last_line: r[r.length - 1].last_line,
							first_column: r[r.length - ($ || 1)].first_column,
							last_column: r[r.length - 1].last_column
						}, m && (T._$.range = [r[r.length - ($ || 1)].range[0], r[r.length - 1].range[1]]), "u" > typeof (w = this.performAction.apply(T, [
							l,
							c,
							o,
							g,
							v[1],
							s,
							r
						].concat(u)))) return w;
						$ && (n = n.slice(0, -1 * $ * 2), s = s.slice(0, -1 * $), r = r.slice(0, -1 * $)), n.push(this.productions_[v[1]][0]), s.push(T.$), r.push(T._$), E = a[n[n.length - 2]][n[n.length - 1]], n.push(E);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	function h() {
		this.yy = {};
	}
	return c.lexer = {
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
			var s = this.yylloc.range;
			return this.yylloc = {
				first_line: this.yylloc.first_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.first_column,
				last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
			}, this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this;
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
			var n, i, s;
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
			}, this.options.ranges && (s.yylloc.range = this.yylloc.range.slice(0))), (i = t[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += i.length), this.yylloc = {
				first_line: this.yylloc.last_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.last_column,
				last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
			}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
			if (this._backtrack) for (var r in s) this[r] = s[r];
			return !1;
		}, "test_match"),
		next: d(function() {
			if (this.done) return this.EOF;
			this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
			for (var t, e, n, i, s = this._currentRules(), r = 0; r < s.length; r++) if ((n = this._input.match(this.rules[s[r]])) && (!e || n[0].length > e[0].length)) {
				if (e = n, i = r, this.options.backtrack_lexer) {
					if (!1 !== (t = this.test_match(n, s[r]))) return t;
					if (!this._backtrack) return !1;
					e = !1;
					continue;
				} else if (!this.options.flex) break;
			}
			return e ? !1 !== (t = this.test_match(e, s[i])) && t : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
				case 15: return 21;
				case 16: return 20;
				case 17: return 6;
				case 18: return "INVALID";
			}
		}, "anonymous"),
		rules: [
			/^(?:%(?!\{)[^\n]*)/i,
			/^(?:[^\}]%%[^\n]*)/i,
			/^(?:[\n]+)/i,
			/^(?:\s+)/i,
			/^(?:#[^\n]*)/i,
			/^(?:timeline\b)/i,
			/^(?:title\s[^\n]+)/i,
			/^(?:accTitle\s*:\s*)/i,
			/^(?:(?!\n||)*[^\n]*)/i,
			/^(?:accDescr\s*:\s*)/i,
			/^(?:(?!\n||)*[^\n]*)/i,
			/^(?:accDescr\s*\{\s*)/i,
			/^(?:[\}])/i,
			/^(?:[^\}]*)/i,
			/^(?:section\s[^:\n]+)/i,
			/^(?::\s(?:[^:\n]|:(?!\s))+)/i,
			/^(?:[^#:\n]+)/i,
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
					18
				],
				inclusive: !0
			}
		}
	}, d(h, "Parser"), h.prototype = c, c.Parser = h, new h();
}();
u.parser = u;
var p = {};
h(p, {
	addEvent: () => $,
	addSection: () => k,
	addTask: () => S,
	addTaskOrg: () => E,
	clear: () => _,
	default: () => T,
	getCommonDb: () => b,
	getSections: () => v,
	getTasks: () => w
});
var g = "", y = 0, f = [], m = [], x = [], b = d(() => l, "getCommonDb"), _ = d(function() {
	f.length = 0, m.length = 0, g = "", x.length = 0, r();
}, "clear"), k = d(function(t) {
	g = t, f.push(t);
}, "addSection"), v = d(function() {
	return f;
}, "getSections"), w = d(function() {
	let t = I(), e = 0;
	for (; !t && e < 100;) t = I(), e++;
	return m.push(...x), m;
}, "getTasks"), S = d(function(t, e, n) {
	let i = {
		id: y++,
		section: g,
		type: g,
		task: t,
		score: e || 0,
		events: n ? [n] : []
	};
	x.push(i);
}, "addTask"), $ = d(function(t) {
	x.find((t) => t.id === y - 1).events.push(t);
}, "addEvent"), E = d(function(t) {
	let e = {
		section: g,
		type: g,
		description: t,
		task: t,
		classes: []
	};
	m.push(e);
}, "addTaskOrg"), I = d(function() {
	let t = d(function(t) {
		return x[t].processed;
	}, "compileTask"), e = !0;
	for (let [n, i] of x.entries()) t(n), e = e && i.processed;
	return e;
}, "compileTasks"), T = {
	clear: _,
	getCommonDb: b,
	addSection: k,
	getSections: v,
	getTasks: w,
	addTask: S,
	addTaskOrg: E,
	addEvent: $
};
d(function(t, e) {
	let n = t.append("rect");
	return n.attr("x", e.x), n.attr("y", e.y), n.attr("fill", e.fill), n.attr("stroke", e.stroke), n.attr("width", e.width), n.attr("height", e.height), n.attr("rx", e.rx), n.attr("ry", e.ry), void 0 !== e.class && n.attr("class", e.class), n;
}, "drawRect");
d(function(t, e) {
	let n = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), i = t.append("g");
	function s(t) {
		let n = o().startAngle(Math.PI / 2).endAngle(Math.PI / 2 * 3).innerRadius(7.5).outerRadius(6.8181818181818175);
		t.append("path").attr("class", "mouth").attr("d", n).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
	}
	function r(t) {
		let n = o().startAngle(3 * Math.PI / 2).endAngle(Math.PI / 2 * 5).innerRadius(7.5).outerRadius(6.8181818181818175);
		t.append("path").attr("class", "mouth").attr("d", n).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
	}
	function a(t) {
		t.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return i.append("circle").attr("cx", e.cx - 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), i.append("circle").attr("cx", e.cx + 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), d(s, "smile"), d(r, "sad"), d(a, "ambivalent"), e.score > 3 ? s(i) : e.score < 3 ? r(i) : a(i), n;
}, "drawFace");
d(function(t, e) {
	let n = e.text.replace(/<br\s*\/?>/gi, " "), i = t.append("text");
	i.attr("x", e.x), i.attr("y", e.y), i.attr("class", "legend"), i.style("text-anchor", e.anchor), void 0 !== e.class && i.attr("class", e.class);
	let s = i.append("tspan");
	return s.attr("x", e.x + 2 * e.textMargin), s.text(n), i;
}, "drawText");
d(function() {
	return {
		x: 0,
		y: 0,
		width: 100,
		anchor: "start",
		height: 100,
		rx: 0,
		ry: 0
	};
}, "getNoteRect");
(function() {
	function t(t, e, n, s, r, a, l, o) {
		i(e.append("text").attr("x", n + r / 2).attr("y", s + a / 2 + 5).style("font-color", o).style("text-anchor", "middle").text(t), l);
	}
	function e(t, e, n, s, r, a, l, o, c) {
		let { taskFontSize: h, taskFontFamily: d } = o, u = t.split(/<br\s*\/?>/gi);
		for (let t = 0; t < u.length; t++) {
			let o = t * h - h * (u.length - 1) / 2, p = e.append("text").attr("x", n + r / 2).attr("y", s).attr("fill", c).style("text-anchor", "middle").style("font-size", h).style("font-family", d);
			p.append("tspan").attr("x", n + r / 2).attr("dy", o).text(u[t]), p.attr("y", s + a / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), i(p, l);
		}
	}
	function n(t, n, s, r, a, l, o, c) {
		let h = n.append("switch"), d = h.append("foreignObject").attr("x", s).attr("y", r).attr("width", a).attr("height", l).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		d.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t), e(t, h, s, r, a, l, o, c), i(d, o);
	}
	function i(t, e) {
		for (let n in e) n in e && t.attr(n, e[n]);
	}
	return d(t, "byText"), d(e, "byTspan"), d(n, "byFo"), d(i, "_setTextAttrs"), function(i) {
		return "fo" === i.textPlacement ? n : "old" === i.textPlacement ? t : e;
	};
})();
var H = d(function(t) {
	t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function N(t, e) {
	t.each(function() {
		var t, n = c(this), i = n.text().split(/(\s+|<br>)/).reverse(), s = [], r = n.attr("y"), a = parseFloat(n.attr("dy")), l = n.text(null).append("tspan").attr("x", 0).attr("y", r).attr("dy", a + "em");
		for (let a = 0; a < i.length; a++) t = i[i.length - 1 - a], s.push(t), l.text(s.join(" ").trim()), (l.node().getComputedTextLength() > e || "<br>" === t) && (s.pop(), l.text(s.join(" ").trim()), s = "<br>" === t ? [""] : [t], l = n.append("tspan").attr("x", 0).attr("y", r).attr("dy", "1.1em").text(t));
	});
}
d(N, "wrap");
var j = d(function(t, e, n, i) {
	let s = n % 12 - 1, r = t.append("g");
	e.section = s, r.attr("class", (e.class ? e.class + " " : "") + "timeline-node section-" + s);
	let a = r.append("g"), l = r.append("g"), o = l.append("text").text(e.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(N, e.width).node().getBBox(), c = i.fontSize?.replace ? i.fontSize.replace("px", "") : i.fontSize;
	return e.height = o.height + 1.1 * c * .5 + e.padding, e.height = Math.max(e.height, e.maxHeight), e.width = e.width + 2 * e.padding, l.attr("transform", "translate(" + e.width / 2 + ", " + e.padding / 2 + ")"), z(a, e, s, i), e;
}, "drawNode"), D = d(function(t, e, n) {
	let i = t.append("g"), s = i.append("text").text(e.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(N, e.width).node().getBBox(), r = n.fontSize?.replace ? n.fontSize.replace("px", "") : n.fontSize;
	return i.remove(), s.height + 1.1 * r * .5 + e.padding;
}, "getVirtualNodeHeight"), z = d(function(t, e, n) {
	t.append("path").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + e.type).attr("d", `M0 ${e.height - 5} v${-e.height + 10} q0,-5 5,-5 h${e.width - 10} q5,0 5,5 v${e.height - 5} H0 Z`), t.append("line").attr("class", "node-line-" + n).attr("x1", 0).attr("y1", e.height).attr("x2", e.width).attr("y2", e.height);
}, "defaultBkg"), W = d(function(e, n, s, r) {
	let l = i(), o = l.timeline?.leftMargin ?? 50;
	t.debug("timeline", r.db);
	let h = l.securityLevel, d;
	"sandbox" === h && (d = c("#i" + n));
	let u = ("sandbox" === h ? c(d.nodes()[0].contentDocument.body) : c("body")).select("#" + n);
	u.append("g");
	let p = r.db.getTasks(), g = r.db.getCommonDb().getDiagramTitle();
	t.debug("task", p), H(u);
	let y = r.db.getSections();
	t.debug("sections", y);
	let f = 0, m = 0, x = 0, b = 0, _ = 50 + o, k = 50;
	b = 50;
	let v = 0, w = !0;
	y.forEach(function(e) {
		let n = D(u, {
			number: v,
			descr: e,
			section: v,
			width: 150,
			padding: 20,
			maxHeight: f
		}, l);
		t.debug("sectionHeight before draw", n), f = Math.max(f, n + 20);
	});
	let S = 0, $ = 0;
	for (let [e, n] of (t.debug("tasks.length", p.length), p.entries())) {
		let i = D(u, {
			number: e,
			descr: n,
			section: n.section,
			width: 150,
			padding: 20,
			maxHeight: m
		}, l);
		t.debug("taskHeight before draw", i), m = Math.max(m, i + 20), S = Math.max(S, n.events.length);
		let s = 0;
		for (let t of n.events) s += D(u, {
			descr: t,
			section: n.section,
			number: n.section,
			width: 150,
			padding: 20,
			maxHeight: 50
		}, l);
		n.events.length > 0 && (s += (n.events.length - 1) * 10), $ = Math.max($, s);
	}
	t.debug("maxSectionHeight before draw", f), t.debug("maxTaskHeight before draw", m), y && y.length > 0 ? y.forEach((e) => {
		let n = p.filter((t) => t.section === e), i = {
			number: v,
			descr: e,
			section: v,
			width: 200 * Math.max(n.length, 1) - 50,
			padding: 20,
			maxHeight: f
		};
		t.debug("sectionNode", i);
		let s = u.append("g"), r = j(s, i, v, l);
		t.debug("sectionNode output", r), s.attr("transform", `translate(${_}, ${b})`), k += f + 50, n.length > 0 && R(u, n, v, _, k, m, l, S, $, f, !1), _ += 200 * Math.max(n.length, 1), k = b, v++;
	}) : (w = !1, R(u, p, v, _, k, m, l, S, $, f, !0));
	let E = u.node().getBBox();
	t.debug("bounds", E), g && u.append("text").text(g).attr("x", E.width / 2 - o).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), x = w ? f + m + 150 : m + 100, u.append("g").attr("class", "lineWrapper").append("line").attr("x1", o).attr("y1", x).attr("x2", E.width + 3 * o).attr("y2", x).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), a(void 0, u, l.timeline?.padding ?? 50, l.timeline?.useMaxWidth ?? !1);
}, "draw"), R = d(function(e, n, i, s, r, a, l, o, c, h, d) {
	for (let o of n) {
		let n = {
			descr: o.task,
			section: i,
			number: i,
			width: 150,
			padding: 20,
			maxHeight: a
		};
		t.debug("taskNode", n);
		let h = e.append("g").attr("class", "taskWrapper"), u = j(h, n, i, l).height;
		if (t.debug("taskHeight after draw", u), h.attr("transform", `translate(${s}, ${r})`), a = Math.max(a, u), o.events) {
			let t = e.append("g").attr("class", "lineWrapper");
			r += 100, F(e, o.events, i, s, r, l), r -= 100, t.append("line").attr("x1", s + 95).attr("y1", r + a).attr("x2", s + 95).attr("y2", r + a + 100 + c + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
		}
		s += 200, d && !l.timeline?.disableMulticolor && i++;
	}
}, "drawTasks"), F = d(function(e, n, i, s, r, a) {
	let l = 0, o = r;
	for (let o of (r += 100, n)) {
		let n = {
			descr: o,
			section: i,
			number: i,
			width: 150,
			padding: 20,
			maxHeight: 50
		};
		t.debug("eventNode", n);
		let c = e.append("g").attr("class", "eventWrapper"), h = j(c, n, i, a).height;
		l += h, c.attr("transform", `translate(${s}, ${r})`), r = r + 10 + h;
	}
	return r = o, l;
}, "drawEvents"), B = {
	setConf: d(() => {}, "setConf"),
	draw: W
}, V = d((t) => {
	let i = "";
	for (let i = 0; i < t.THEME_COLOR_LIMIT; i++) t["lineColor" + i] = t["lineColor" + i] || t["cScaleInv" + i], s(t["lineColor" + i]) ? t["lineColor" + i] = e(t["lineColor" + i], 20) : t["lineColor" + i] = n(t["lineColor" + i], 20);
	for (let e = 0; e < t.THEME_COLOR_LIMIT; e++) {
		let n = "" + (17 - 3 * e);
		i += `
    .section-${e - 1} rect, .section-${e - 1} path, .section-${e - 1} circle, .section-${e - 1} path  {
      fill: ${t["cScale" + e]};
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
      stroke-width: ${n};
    }
    .section-${e - 1} line {
      stroke: ${t["cScaleInv" + e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${t["cScaleLabel" + e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
	}
	return i;
}, "genSections"), U = {
	db: p,
	renderer: B,
	parser: u,
	styles: d((t) => `
  .edge {
    stroke-width: 3;
  }
  ${V(t)}
  .section-root rect, .section-root path, .section-root circle  {
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`, "getStyles")
};
export { U as diagram };
