import { $t as t, F as e, J as r, M as a, Q as i, S as s, T as n, U as l, dt as o, l as d, lt as c, qt as h, w as g, y } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { M as u, Z as p } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { c as x, f as b, p as f } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
import { _ as m, f as w, g as k } from "./vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js";
import { t as L } from "./vendor-mermaid.CSvrNZuY.chunk.js";
import { t as S } from "./vendor-mermaid.B-0J-u47.chunk.js";
import { r as _ } from "./vendor-min-mermaid~chunk-RV6DXAHM.CHvzwstl.chunk.js";
var E = function() {
	var t = p(function(t, e, r, a) {
		for (r = r || {}, a = t.length; a--; r[t[a]] = e);
		return r;
	}, "o"), e = [1, 15], r = [1, 7], a = [1, 13], i = [1, 14], s = [1, 19], n = [1, 16], l = [1, 17], o = [1, 18], d = [8, 30], c = [
		8,
		10,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], h = [1, 23], g = [1, 24], y = [
		8,
		10,
		15,
		16,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], u = [
		8,
		10,
		15,
		16,
		21,
		27,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], x = [1, 49], b = {
		trace: p(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			spaceLines: 3,
			SPACELINE: 4,
			NL: 5,
			separator: 6,
			SPACE: 7,
			EOF: 8,
			start: 9,
			BLOCK_DIAGRAM_KEY: 10,
			document: 11,
			stop: 12,
			statement: 13,
			link: 14,
			LINK: 15,
			START_LINK: 16,
			LINK_LABEL: 17,
			STR: 18,
			nodeStatement: 19,
			columnsStatement: 20,
			SPACE_BLOCK: 21,
			blockStatement: 22,
			classDefStatement: 23,
			cssClassStatement: 24,
			styleStatement: 25,
			node: 26,
			SIZE: 27,
			COLUMNS: 28,
			"id-block": 29,
			end: 30,
			NODE_ID: 31,
			nodeShapeNLabel: 32,
			dirList: 33,
			DIR: 34,
			NODE_DSTART: 35,
			NODE_DEND: 36,
			BLOCK_ARROW_START: 37,
			BLOCK_ARROW_END: 38,
			classDef: 39,
			CLASSDEF_ID: 40,
			CLASSDEF_STYLEOPTS: 41,
			DEFAULT: 42,
			class: 43,
			CLASSENTITY_IDS: 44,
			STYLECLASS: 45,
			style: 46,
			STYLE_ENTITY_IDS: 47,
			STYLE_DEFINITION_DATA: 48,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SPACELINE",
			5: "NL",
			7: "SPACE",
			8: "EOF",
			10: "BLOCK_DIAGRAM_KEY",
			15: "LINK",
			16: "START_LINK",
			17: "LINK_LABEL",
			18: "STR",
			21: "SPACE_BLOCK",
			27: "SIZE",
			28: "COLUMNS",
			29: "id-block",
			30: "end",
			31: "NODE_ID",
			34: "DIR",
			35: "NODE_DSTART",
			36: "NODE_DEND",
			37: "BLOCK_ARROW_START",
			38: "BLOCK_ARROW_END",
			39: "classDef",
			40: "CLASSDEF_ID",
			41: "CLASSDEF_STYLEOPTS",
			42: "DEFAULT",
			43: "class",
			44: "CLASSENTITY_IDS",
			45: "STYLECLASS",
			46: "style",
			47: "STYLE_ENTITY_IDS",
			48: "STYLE_DEFINITION_DATA"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[3, 2],
			[6, 1],
			[6, 1],
			[6, 1],
			[9, 3],
			[12, 1],
			[12, 1],
			[12, 2],
			[12, 2],
			[11, 1],
			[11, 2],
			[14, 1],
			[14, 4],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[19, 3],
			[19, 2],
			[19, 1],
			[20, 1],
			[22, 4],
			[22, 3],
			[26, 1],
			[26, 2],
			[33, 1],
			[33, 2],
			[32, 3],
			[32, 4],
			[23, 3],
			[23, 3],
			[24, 3],
			[25, 3]
		],
		performAction: p(function(t, e, r, a, i, s, n) {
			var l = s.length - 1;
			switch (i) {
				case 4:
					a.getLogger().debug("Rule: separator (NL) ");
					break;
				case 5:
					a.getLogger().debug("Rule: separator (Space) ");
					break;
				case 6:
					a.getLogger().debug("Rule: separator (EOF) ");
					break;
				case 7:
					a.getLogger().debug("Rule: hierarchy: ", s[l - 1]), a.setHierarchy(s[l - 1]);
					break;
				case 8:
					a.getLogger().debug("Stop NL ");
					break;
				case 9:
					a.getLogger().debug("Stop EOF ");
					break;
				case 10:
					a.getLogger().debug("Stop NL2 ");
					break;
				case 11:
					a.getLogger().debug("Stop EOF2 ");
					break;
				case 12:
					a.getLogger().debug("Rule: statement: ", s[l]), "number" == typeof s[l].length ? this.$ = s[l] : this.$ = [s[l]];
					break;
				case 13:
					a.getLogger().debug("Rule: statement #2: ", s[l - 1]), this.$ = [s[l - 1]].concat(s[l]);
					break;
				case 14:
					a.getLogger().debug("Rule: link: ", s[l], t), this.$ = {
						edgeTypeStr: s[l],
						label: ""
					};
					break;
				case 15:
					a.getLogger().debug("Rule: LABEL link: ", s[l - 3], s[l - 1], s[l]), this.$ = {
						edgeTypeStr: s[l],
						label: s[l - 1]
					};
					break;
				case 18:
					let o = parseInt(s[l]);
					this.$ = {
						id: a.generateId(),
						type: "space",
						label: "",
						width: o,
						children: []
					};
					break;
				case 23:
					a.getLogger().debug("Rule: (nodeStatement link node) ", s[l - 2], s[l - 1], s[l], " typestr: ", s[l - 1].edgeTypeStr);
					let d = a.edgeStrToEdgeData(s[l - 1].edgeTypeStr);
					this.$ = [
						{
							id: s[l - 2].id,
							label: s[l - 2].label,
							type: s[l - 2].type,
							directions: s[l - 2].directions
						},
						{
							id: s[l - 2].id + "-" + s[l].id,
							start: s[l - 2].id,
							end: s[l].id,
							label: s[l - 1].label,
							type: "edge",
							directions: s[l].directions,
							arrowTypeEnd: d,
							arrowTypeStart: "arrow_open"
						},
						{
							id: s[l].id,
							label: s[l].label,
							type: a.typeStr2Type(s[l].typeStr),
							directions: s[l].directions
						}
					];
					break;
				case 24:
					a.getLogger().debug("Rule: nodeStatement (abc88 node size) ", s[l - 1], s[l]), this.$ = {
						id: s[l - 1].id,
						label: s[l - 1].label,
						type: a.typeStr2Type(s[l - 1].typeStr),
						directions: s[l - 1].directions,
						widthInColumns: parseInt(s[l], 10)
					};
					break;
				case 25:
					a.getLogger().debug("Rule: nodeStatement (node) ", s[l]), this.$ = {
						id: s[l].id,
						label: s[l].label,
						type: a.typeStr2Type(s[l].typeStr),
						directions: s[l].directions,
						widthInColumns: 1
					};
					break;
				case 26:
					a.getLogger().debug("APA123", this ? this : "na"), a.getLogger().debug("COLUMNS: ", s[l]), this.$ = {
						type: "column-setting",
						columns: "auto" === s[l] ? -1 : parseInt(s[l])
					};
					break;
				case 27:
					a.getLogger().debug("Rule: id-block statement : ", s[l - 2], s[l - 1]), a.generateId(), this.$ = {
						...s[l - 2],
						type: "composite",
						children: s[l - 1]
					};
					break;
				case 28:
					a.getLogger().debug("Rule: blockStatement : ", s[l - 2], s[l - 1], s[l]), this.$ = {
						id: a.generateId(),
						type: "composite",
						label: "",
						children: s[l - 1]
					};
					break;
				case 29:
					a.getLogger().debug("Rule: node (NODE_ID separator): ", s[l]), this.$ = { id: s[l] };
					break;
				case 30:
					a.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", s[l - 1], s[l]), this.$ = {
						id: s[l - 1],
						label: s[l].label,
						typeStr: s[l].typeStr,
						directions: s[l].directions
					};
					break;
				case 31:
					a.getLogger().debug("Rule: dirList: ", s[l]), this.$ = [s[l]];
					break;
				case 32:
					a.getLogger().debug("Rule: dirList: ", s[l - 1], s[l]), this.$ = [s[l - 1]].concat(s[l]);
					break;
				case 33:
					a.getLogger().debug("Rule: nodeShapeNLabel: ", s[l - 2], s[l - 1], s[l]), this.$ = {
						typeStr: s[l - 2] + s[l],
						label: s[l - 1]
					};
					break;
				case 34:
					a.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", s[l - 3], s[l - 2], " #3:", s[l - 1], s[l]), this.$ = {
						typeStr: s[l - 3] + s[l],
						label: s[l - 2],
						directions: s[l - 1]
					};
					break;
				case 35:
				case 36:
					this.$ = {
						type: "classDef",
						id: s[l - 1].trim(),
						css: s[l].trim()
					};
					break;
				case 37:
					this.$ = {
						type: "applyClass",
						id: s[l - 1].trim(),
						styleClass: s[l].trim()
					};
					break;
				case 38: this.$ = {
					type: "applyStyles",
					id: s[l - 1].trim(),
					stylesStr: s[l].trim()
				};
			}
		}, "anonymous"),
		table: [
			{
				9: 1,
				10: [1, 2]
			},
			{ 1: [3] },
			{
				10: e,
				11: 3,
				13: 4,
				19: 5,
				20: 6,
				21: r,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: a,
				29: i,
				31: s,
				39: n,
				43: l,
				46: o
			},
			{ 8: [1, 20] },
			t(d, [2, 12], {
				13: 4,
				19: 5,
				20: 6,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				11: 21,
				10: e,
				21: r,
				28: a,
				29: i,
				31: s,
				39: n,
				43: l,
				46: o
			}),
			t(c, [2, 16], {
				14: 22,
				15: h,
				16: g
			}),
			t(c, [2, 17]),
			t(c, [2, 18]),
			t(c, [2, 19]),
			t(c, [2, 20]),
			t(c, [2, 21]),
			t(c, [2, 22]),
			t(y, [2, 25], { 27: [1, 25] }),
			t(c, [2, 26]),
			{
				19: 26,
				26: 12,
				31: s
			},
			{
				10: e,
				11: 27,
				13: 4,
				19: 5,
				20: 6,
				21: r,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: a,
				29: i,
				31: s,
				39: n,
				43: l,
				46: o
			},
			{
				40: [1, 28],
				42: [1, 29]
			},
			{ 44: [1, 30] },
			{ 47: [1, 31] },
			t(u, [2, 29], {
				32: 32,
				35: [1, 33],
				37: [1, 34]
			}),
			{ 1: [2, 7] },
			t(d, [2, 13]),
			{
				26: 35,
				31: s
			},
			{ 31: [2, 14] },
			{ 17: [1, 36] },
			t(y, [2, 24]),
			{
				10: e,
				11: 37,
				13: 4,
				14: 22,
				15: h,
				16: g,
				19: 5,
				20: 6,
				21: r,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: a,
				29: i,
				31: s,
				39: n,
				43: l,
				46: o
			},
			{ 30: [1, 38] },
			{ 41: [1, 39] },
			{ 41: [1, 40] },
			{ 45: [1, 41] },
			{ 48: [1, 42] },
			t(u, [2, 30]),
			{ 18: [1, 43] },
			{ 18: [1, 44] },
			t(y, [2, 23]),
			{ 18: [1, 45] },
			{ 30: [1, 46] },
			t(c, [2, 28]),
			t(c, [2, 35]),
			t(c, [2, 36]),
			t(c, [2, 37]),
			t(c, [2, 38]),
			{ 36: [1, 47] },
			{
				33: 48,
				34: x
			},
			{ 15: [1, 50] },
			t(c, [2, 27]),
			t(u, [2, 33]),
			{ 38: [1, 51] },
			{
				33: 52,
				34: x,
				38: [2, 31]
			},
			{ 31: [2, 15] },
			t(u, [2, 34]),
			{ 38: [2, 32] }
		],
		defaultActions: {
			20: [2, 7],
			23: [2, 14],
			50: [2, 15],
			52: [2, 32]
		},
		parseError: p(function(t, e) {
			if (e.recoverable) this.trace(t);
			else {
				var r = Error(t);
				throw r.hash = e, r;
			}
		}, "parseError"),
		parse: p(function(t) {
			var e = this, r = [0], a = [], i = [null], s = [], n = this.table, l = "", o = 0, d = 0, c = 0, h = s.slice.call(arguments, 1), g = Object.create(this.lexer), y = {};
			for (var u in this.yy) Object.prototype.hasOwnProperty.call(this.yy, u) && (y[u] = this.yy[u]);
			g.setInput(t, y), y.lexer = g, y.parser = this, typeof g.yylloc > "u" && (g.yylloc = {});
			var x = g.yylloc;
			s.push(x);
			var b = g.options && g.options.ranges;
			function f() {
				var t;
				return "number" != typeof (t = a.pop() || g.lex() || 1) && (t instanceof Array && (t = (a = t).pop()), t = e.symbols_[t] || t), t;
			}
			"function" == typeof y.parseError ? this.parseError = y.parseError : this.parseError = Object.getPrototypeOf(this).parseError, p(function(t) {
				r.length = r.length - 2 * t, i.length = i.length - t, s.length = s.length - t;
			}, "popStack"), p(f, "lex");
			for (var m, w, k, L, S, _, E, v, $, D = {};;) {
				if (k = r[r.length - 1], this.defaultActions[k] ? L = this.defaultActions[k] : ((null === m || typeof m > "u") && (m = f()), L = n[k] && n[k][m]), typeof L > "u" || !L.length || !L[0]) {
					var T = "";
					for (_ in $ = [], n[k]) this.terminals_[_] && _ > 2 && $.push("'" + this.terminals_[_] + "'");
					T = g.showPosition ? "Parse error on line " + (o + 1) + `:
` + g.showPosition() + `
Expecting ` + $.join(", ") + ", got '" + (this.terminals_[m] || m) + "'" : "Parse error on line " + (o + 1) + ": Unexpected " + (1 == m ? "end of input" : "'" + (this.terminals_[m] || m) + "'"), this.parseError(T, {
						text: g.match,
						token: this.terminals_[m] || m,
						line: g.yylineno,
						loc: x,
						expected: $
					});
				}
				if (L[0] instanceof Array && L.length > 1) throw Error("Parse Error: multiple actions possible at state: " + k + ", token: " + m);
				switch (L[0]) {
					case 1:
						r.push(m), i.push(g.yytext), s.push(g.yylloc), r.push(L[1]), m = null, w ? (m = w, w = null) : (d = g.yyleng, l = g.yytext, o = g.yylineno, x = g.yylloc, c > 0 && c--);
						break;
					case 2:
						if (E = this.productions_[L[1]][1], D.$ = i[i.length - E], D._$ = {
							first_line: s[s.length - (E || 1)].first_line,
							last_line: s[s.length - 1].last_line,
							first_column: s[s.length - (E || 1)].first_column,
							last_column: s[s.length - 1].last_column
						}, b && (D._$.range = [s[s.length - (E || 1)].range[0], s[s.length - 1].range[1]]), "u" > typeof (S = this.performAction.apply(D, [
							l,
							d,
							o,
							y,
							L[1],
							i,
							s
						].concat(h)))) return S;
						E && (r = r.slice(0, -1 * E * 2), i = i.slice(0, -1 * E), s = s.slice(0, -1 * E)), r.push(this.productions_[L[1]][0]), i.push(D.$), s.push(D._$), v = n[r[r.length - 2]][r[r.length - 1]], r.push(v);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	function f() {
		this.yy = {};
	}
	return b.lexer = {
		EOF: 1,
		parseError: p(function(t, e) {
			if (this.yy.parser) this.yy.parser.parseError(t, e);
			else throw Error(t);
		}, "parseError"),
		setInput: p(function(t, e) {
			return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
				first_line: 1,
				first_column: 0,
				last_line: 1,
				last_column: 0
			}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
		}, "setInput"),
		input: p(function() {
			var t = this._input[0];
			return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t;
		}, "input"),
		unput: p(function(t) {
			var e = t.length, r = t.split(/(?:\r\n?|\n)/g);
			this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
			var a = this.match.split(/(?:\r\n?|\n)/g);
			this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r.length - 1 && (this.yylineno -= r.length - 1);
			var i = this.yylloc.range;
			return this.yylloc = {
				first_line: this.yylloc.first_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.first_column,
				last_column: r ? (r.length === a.length ? this.yylloc.first_column : 0) + a[a.length - r.length].length - r[0].length : this.yylloc.first_column - e
			}, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this;
		}, "unput"),
		more: p(function() {
			return this._more = !0, this;
		}, "more"),
		reject: p(function() {
			return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "reject"),
		less: p(function(t) {
			this.unput(this.match.slice(t));
		}, "less"),
		pastInput: p(function() {
			var t = this.matched.substr(0, this.matched.length - this.match.length);
			return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
		}, "pastInput"),
		upcomingInput: p(function() {
			var t = this.match;
			return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
		}, "upcomingInput"),
		showPosition: p(function() {
			var t = this.pastInput(), e = Array(t.length + 1).join("-");
			return t + this.upcomingInput() + `
` + e + "^";
		}, "showPosition"),
		test_match: p(function(t, e) {
			var r, a, i;
			if (this.options.backtrack_lexer && (i = {
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
			}, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), (a = t[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += a.length), this.yylloc = {
				first_line: this.yylloc.last_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.last_column,
				last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
			}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], r = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), r) return r;
			if (this._backtrack) for (var s in i) this[s] = i[s];
			return !1;
		}, "test_match"),
		next: p(function() {
			if (this.done) return this.EOF;
			this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
			for (var t, e, r, a, i = this._currentRules(), s = 0; s < i.length; s++) if ((r = this._input.match(this.rules[i[s]])) && (!e || r[0].length > e[0].length)) {
				if (e = r, a = s, this.options.backtrack_lexer) {
					if (!1 !== (t = this.test_match(r, i[s]))) return t;
					if (!this._backtrack) return !1;
					e = !1;
					continue;
				} else if (!this.options.flex) break;
			}
			return e ? !1 !== (t = this.test_match(e, i[a])) && t : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "next"),
		lex: p(function() {
			return this.next() || this.lex();
		}, "lex"),
		begin: p(function(t) {
			this.conditionStack.push(t);
		}, "begin"),
		popState: p(function() {
			return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
		}, "popState"),
		_currentRules: p(function() {
			return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
		}, "_currentRules"),
		topState: p(function(t) {
			return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL";
		}, "topState"),
		pushState: p(function(t) {
			this.begin(t);
		}, "pushState"),
		stateStackSize: p(function() {
			return this.conditionStack.length;
		}, "stateStackSize"),
		options: {},
		performAction: p(function(t, e, r, a) {
			switch (r) {
				case 0: return t.getLogger().debug("Found block-beta"), 10;
				case 1: return t.getLogger().debug("Found id-block"), 29;
				case 2: return t.getLogger().debug("Found block"), 10;
				case 3:
					t.getLogger().debug(".", e.yytext);
					break;
				case 4:
					t.getLogger().debug("_", e.yytext);
					break;
				case 5: return 5;
				case 6: return e.yytext = -1, 28;
				case 7: return e.yytext = e.yytext.replace(/columns\s+/, ""), t.getLogger().debug("COLUMNS (LEX)", e.yytext), 28;
				case 8:
				case 76:
				case 77:
				case 99:
					this.pushState("md_string");
					break;
				case 9: return "MD_STR";
				case 10:
				case 34:
				case 79:
					this.popState();
					break;
				case 11:
					this.pushState("string");
					break;
				case 12:
					t.getLogger().debug("LEX: POPPING STR:", e.yytext), this.popState();
					break;
				case 13: return t.getLogger().debug("LEX: STR end:", e.yytext), "STR";
				case 14: return e.yytext = e.yytext.replace(/space\:/, ""), t.getLogger().debug("SPACE NUM (LEX)", e.yytext), 21;
				case 15: return e.yytext = "1", t.getLogger().debug("COLUMNS (LEX)", e.yytext), 21;
				case 16: return 42;
				case 17: return "LINKSTYLE";
				case 18: return "INTERPOLATE";
				case 19: return this.pushState("CLASSDEF"), 39;
				case 20: return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
				case 21: return this.popState(), this.pushState("CLASSDEFID"), 40;
				case 22: return this.popState(), 41;
				case 23: return this.pushState("CLASS"), 43;
				case 24: return this.popState(), this.pushState("CLASS_STYLE"), 44;
				case 25: return this.popState(), 45;
				case 26: return this.pushState("STYLE_STMNT"), 46;
				case 27: return this.popState(), this.pushState("STYLE_DEFINITION"), 47;
				case 28: return this.popState(), 48;
				case 29: return this.pushState("acc_title"), "acc_title";
				case 30: return this.popState(), "acc_title_value";
				case 31: return this.pushState("acc_descr"), "acc_descr";
				case 32: return this.popState(), "acc_descr_value";
				case 33:
					this.pushState("acc_descr_multiline");
					break;
				case 35: return "acc_descr_multiline_value";
				case 36: return 30;
				case 37:
				case 38:
				case 40:
				case 41:
				case 44: return this.popState(), t.getLogger().debug("Lex: (("), "NODE_DEND";
				case 39: return this.popState(), t.getLogger().debug("Lex: ))"), "NODE_DEND";
				case 42: return this.popState(), t.getLogger().debug("Lex: (-"), "NODE_DEND";
				case 43: return this.popState(), t.getLogger().debug("Lex: -)"), "NODE_DEND";
				case 45: return this.popState(), t.getLogger().debug("Lex: ]]"), "NODE_DEND";
				case 46: return this.popState(), t.getLogger().debug("Lex: ("), "NODE_DEND";
				case 47: return this.popState(), t.getLogger().debug("Lex: ])"), "NODE_DEND";
				case 48:
				case 49: return this.popState(), t.getLogger().debug("Lex: /]"), "NODE_DEND";
				case 50: return this.popState(), t.getLogger().debug("Lex: )]"), "NODE_DEND";
				case 51: return this.popState(), t.getLogger().debug("Lex: )"), "NODE_DEND";
				case 52: return this.popState(), t.getLogger().debug("Lex: ]>"), "NODE_DEND";
				case 53: return this.popState(), t.getLogger().debug("Lex: ]"), "NODE_DEND";
				case 54: return t.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 35;
				case 55: return t.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 35;
				case 56: return t.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 35;
				case 57:
				case 59:
				case 60:
				case 61:
				case 64: return t.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
				case 58: return t.getLogger().debug("Lex: ((("), this.pushState("NODE"), 35;
				case 62: return t.getLogger().debug("Lexc: >"), this.pushState("NODE"), 35;
				case 63: return t.getLogger().debug("Lexa: (["), this.pushState("NODE"), 35;
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71: return this.pushState("NODE"), 35;
				case 72: return t.getLogger().debug("Lexa: ["), this.pushState("NODE"), 35;
				case 73: return this.pushState("BLOCK_ARROW"), t.getLogger().debug("LEX ARR START"), 37;
				case 74: return t.getLogger().debug("Lex: NODE_ID", e.yytext), 31;
				case 75: return t.getLogger().debug("Lex: EOF", e.yytext), 8;
				case 78: return "NODE_DESCR";
				case 80:
					t.getLogger().debug("Lex: Starting string"), this.pushState("string");
					break;
				case 81:
					t.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
					break;
				case 82: return t.getLogger().debug("LEX: NODE_DESCR:", e.yytext), "NODE_DESCR";
				case 83:
					t.getLogger().debug("LEX POPPING"), this.popState();
					break;
				case 84:
					t.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
					break;
				case 85: return e.yytext = e.yytext.replace(/^,\s*/, ""), t.getLogger().debug("Lex (right): dir:", e.yytext), "DIR";
				case 86: return e.yytext = e.yytext.replace(/^,\s*/, ""), t.getLogger().debug("Lex (left):", e.yytext), "DIR";
				case 87: return e.yytext = e.yytext.replace(/^,\s*/, ""), t.getLogger().debug("Lex (x):", e.yytext), "DIR";
				case 88: return e.yytext = e.yytext.replace(/^,\s*/, ""), t.getLogger().debug("Lex (y):", e.yytext), "DIR";
				case 89: return e.yytext = e.yytext.replace(/^,\s*/, ""), t.getLogger().debug("Lex (up):", e.yytext), "DIR";
				case 90: return e.yytext = e.yytext.replace(/^,\s*/, ""), t.getLogger().debug("Lex (down):", e.yytext), "DIR";
				case 91: return e.yytext = "]>", t.getLogger().debug("Lex (ARROW_DIR end):", e.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
				case 92: return t.getLogger().debug("Lex: LINK", "#" + e.yytext + "#"), 15;
				case 93:
				case 94:
				case 95: return t.getLogger().debug("Lex: LINK", e.yytext), 15;
				case 96:
				case 97:
				case 98: return t.getLogger().debug("Lex: START_LINK", e.yytext), this.pushState("LLABEL"), 16;
				case 100: return t.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
				case 101: return this.popState(), t.getLogger().debug("Lex: LINK", "#" + e.yytext + "#"), 15;
				case 102:
				case 103: return this.popState(), t.getLogger().debug("Lex: LINK", e.yytext), 15;
				case 104: return t.getLogger().debug("Lex: COLON", e.yytext), e.yytext = e.yytext.slice(1), 27;
			}
		}, "anonymous"),
		rules: [
			/^(?:block-beta\b)/,
			/^(?:block:)/,
			/^(?:block\b)/,
			/^(?:[\s]+)/,
			/^(?:[\n]+)/,
			/^(?:((\u000D\u000A)|(\u000A)))/,
			/^(?:columns\s+auto\b)/,
			/^(?:columns\s+[\d]+)/,
			/^(?:["][`])/,
			/^(?:[^`"]+)/,
			/^(?:[`]["])/,
			/^(?:["])/,
			/^(?:["])/,
			/^(?:[^"]*)/,
			/^(?:space[:]\d+)/,
			/^(?:space\b)/,
			/^(?:default\b)/,
			/^(?:linkStyle\b)/,
			/^(?:interpolate\b)/,
			/^(?:classDef\s+)/,
			/^(?:DEFAULT\s+)/,
			/^(?:\w+\s+)/,
			/^(?:[^\n]*)/,
			/^(?:class\s+)/,
			/^(?:(\w+)+((,\s*\w+)*))/,
			/^(?:[^\n]*)/,
			/^(?:style\s+)/,
			/^(?:(\w+)+((,\s*\w+)*))/,
			/^(?:[^\n]*)/,
			/^(?:accTitle\s*:\s*)/,
			/^(?:(?!\n||)*[^\n]*)/,
			/^(?:accDescr\s*:\s*)/,
			/^(?:(?!\n||)*[^\n]*)/,
			/^(?:accDescr\s*\{\s*)/,
			/^(?:[\}])/,
			/^(?:[^\}]*)/,
			/^(?:end\b\s*)/,
			/^(?:\(\(\()/,
			/^(?:\)\)\))/,
			/^(?:[\)]\))/,
			/^(?:\}\})/,
			/^(?:\})/,
			/^(?:\(-)/,
			/^(?:-\))/,
			/^(?:\(\()/,
			/^(?:\]\])/,
			/^(?:\()/,
			/^(?:\]\))/,
			/^(?:\\\])/,
			/^(?:\/\])/,
			/^(?:\)\])/,
			/^(?:[\)])/,
			/^(?:\]>)/,
			/^(?:[\]])/,
			/^(?:-\))/,
			/^(?:\(-)/,
			/^(?:\)\))/,
			/^(?:\))/,
			/^(?:\(\(\()/,
			/^(?:\(\()/,
			/^(?:\{\{)/,
			/^(?:\{)/,
			/^(?:>)/,
			/^(?:\(\[)/,
			/^(?:\()/,
			/^(?:\[\[)/,
			/^(?:\[\|)/,
			/^(?:\[\()/,
			/^(?:\)\)\))/,
			/^(?:\[\\)/,
			/^(?:\[\/)/,
			/^(?:\[\\)/,
			/^(?:\[)/,
			/^(?:<\[)/,
			/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,
			/^(?:$)/,
			/^(?:["][`])/,
			/^(?:["][`])/,
			/^(?:[^`"]+)/,
			/^(?:[`]["])/,
			/^(?:["])/,
			/^(?:["])/,
			/^(?:[^"]+)/,
			/^(?:["])/,
			/^(?:\]>\s*\()/,
			/^(?:,?\s*right\s*)/,
			/^(?:,?\s*left\s*)/,
			/^(?:,?\s*x\s*)/,
			/^(?:,?\s*y\s*)/,
			/^(?:,?\s*up\s*)/,
			/^(?:,?\s*down\s*)/,
			/^(?:\)\s*)/,
			/^(?:\s*[xo<]?--+[-xo>]\s*)/,
			/^(?:\s*[xo<]?==+[=xo>]\s*)/,
			/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
			/^(?:\s*~~[\~]+\s*)/,
			/^(?:\s*[xo<]?--\s*)/,
			/^(?:\s*[xo<]?==\s*)/,
			/^(?:\s*[xo<]?-\.\s*)/,
			/^(?:["][`])/,
			/^(?:["])/,
			/^(?:\s*[xo<]?--+[-xo>]\s*)/,
			/^(?:\s*[xo<]?==+[=xo>]\s*)/,
			/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
			/^(?::\d+)/
		],
		conditions: {
			STYLE_DEFINITION: {
				rules: [28],
				inclusive: !1
			},
			STYLE_STMNT: {
				rules: [27],
				inclusive: !1
			},
			CLASSDEFID: {
				rules: [22],
				inclusive: !1
			},
			CLASSDEF: {
				rules: [20, 21],
				inclusive: !1
			},
			CLASS_STYLE: {
				rules: [25],
				inclusive: !1
			},
			CLASS: {
				rules: [24],
				inclusive: !1
			},
			LLABEL: {
				rules: [
					99,
					100,
					101,
					102,
					103
				],
				inclusive: !1
			},
			ARROW_DIR: {
				rules: [
					85,
					86,
					87,
					88,
					89,
					90,
					91
				],
				inclusive: !1
			},
			BLOCK_ARROW: {
				rules: [
					76,
					81,
					84
				],
				inclusive: !1
			},
			NODE: {
				rules: [
					37,
					38,
					39,
					40,
					41,
					42,
					43,
					44,
					45,
					46,
					47,
					48,
					49,
					50,
					51,
					52,
					53,
					77,
					80
				],
				inclusive: !1
			},
			md_string: {
				rules: [
					9,
					10,
					78,
					79
				],
				inclusive: !1
			},
			space: {
				rules: [],
				inclusive: !1
			},
			string: {
				rules: [
					12,
					13,
					82,
					83
				],
				inclusive: !1
			},
			acc_descr_multiline: {
				rules: [34, 35],
				inclusive: !1
			},
			acc_descr: {
				rules: [32],
				inclusive: !1
			},
			acc_title: {
				rules: [30],
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
					8,
					11,
					14,
					15,
					16,
					17,
					18,
					19,
					23,
					26,
					29,
					31,
					33,
					36,
					54,
					55,
					56,
					57,
					58,
					59,
					60,
					61,
					62,
					63,
					64,
					65,
					66,
					67,
					68,
					69,
					70,
					71,
					72,
					73,
					74,
					75,
					92,
					93,
					94,
					95,
					96,
					97,
					98,
					104
				],
				inclusive: !0
			}
		}
	}, p(f, "Parser"), f.prototype = b, b.Parser = f, new f();
}();
E.parser = E;
var v = /* @__PURE__ */ new Map(), $ = [], D = /* @__PURE__ */ new Map(), T = "color", C = "fill", N = r(), I = /* @__PURE__ */ new Map(), B = p((t) => l.sanitizeText(t, N), "sanitizeText"), R = p(function(t, e = "") {
	let r = I.get(t);
	r || (r = {
		id: t,
		styles: [],
		textStyles: []
	}, I.set(t, r)), e?.split(",").forEach((t) => {
		let e = t.replace(/([^;]*);/, "$1").trim();
		if (RegExp(T).exec(t)) {
			let t = e.replace(C, "bgFill").replace(T, C);
			r.textStyles.push(t);
		}
		r.styles.push(e);
	});
}, "addStyleClass"), z = p(function(t, e = "") {
	let r = v.get(t);
	null != e && (r.styles = e.split(","));
}, "addStyle2Node"), O = p(function(t, e) {
	t.split(",").forEach(function(t) {
		let r = v.get(t);
		if (void 0 === r) {
			let e = t.trim();
			r = {
				id: e,
				type: "na",
				children: []
			}, v.set(e, r);
		}
		r.classes || (r.classes = []), r.classes.push(e);
	});
}, "setCssClass"), A = p((e, r) => {
	let a = e.flat(), i = [], s = a.find((t) => t?.type === "column-setting")?.columns ?? -1;
	for (let e of a) {
		if ("number" == typeof s && s > 0 && "column-setting" !== e.type && "number" == typeof e.widthInColumns && e.widthInColumns > s && t.warn(`Block ${e.id} width ${e.widthInColumns} exceeds configured column width ${s}`), e.label && (e.label = B(e.label)), "classDef" === e.type) {
			R(e.id, e.css);
			continue;
		}
		if ("applyClass" === e.type) {
			O(e.id, e?.styleClass ?? "");
			continue;
		}
		if ("applyStyles" === e.type) {
			e?.stylesStr && z(e.id, e?.stylesStr);
			continue;
		}
		if ("column-setting" === e.type) r.columns = e.columns ?? -1;
		else if ("edge" === e.type) {
			let t = (D.get(e.id) ?? 0) + 1;
			D.set(e.id, t), e.id = t + "-" + e.id, $.push(e);
		} else {
			e.label || ("composite" === e.type ? e.label = "" : e.label = e.id);
			let t = v.get(e.id);
			if (void 0 === t ? v.set(e.id, e) : ("na" !== e.type && (t.type = e.type), e.label !== e.id && (t.label = e.label)), e.children && A(e.children, e), "space" === e.type) {
				let t = e.width ?? 1;
				for (let r = 0; r < t; r++) {
					let t = u(e);
					t.id = t.id + "-" + r, v.set(t.id, t), i.push(t);
				}
			} else void 0 === t && i.push(e);
		}
	}
	r.children = i;
}, "populateBlockDatabase"), M = [], P = {
	id: "root",
	type: "composite",
	children: [],
	columns: -1
}, Y = p(() => {
	t.debug("Clear called"), s(), v = new Map([["root", P = {
		id: "root",
		type: "composite",
		children: [],
		columns: -1
	}]]), M = [], I = /* @__PURE__ */ new Map(), $ = [], D = /* @__PURE__ */ new Map();
}, "clear");
function W(e) {
	switch (t.debug("typeStr2Type", e), e) {
		case "[]": return "square";
		case "()": return t.debug("we have a round"), "round";
		case "(())": return "circle";
		case ">]": return "rect_left_inv_arrow";
		case "{}": return "diamond";
		case "{{}}": return "hexagon";
		case "([])": return "stadium";
		case "[[]]": return "subroutine";
		case "[()]": return "cylinder";
		case "((()))": return "doublecircle";
		case "[//]": return "lean_right";
		case "[\\\\]": return "lean_left";
		case "[/\\]": return "trapezoid";
		case "[\\/]": return "inv_trapezoid";
		case "<[]>": return "block_arrow";
		default: return "na";
	}
}
function X(e) {
	return (t.debug("typeStr2Type", e), "==" === e) ? "thick" : "normal";
}
function F(t) {
	switch (t.replace(/^[\s-]+|[\s-]+$/g, "")) {
		case "x": return "arrow_cross";
		case "o": return "arrow_circle";
		case ">": return "arrow_point";
		default: return "";
	}
}
p(W, "typeStr2Type"), p(X, "edgeTypeStr2Type"), p(F, "edgeStrToEdgeData");
var H = 0, U = p(() => (H++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + H), "generateId"), j = p((t) => {
	P.children = t, A(t, P), M = P.children;
}, "setHierarchy"), K = p((t) => {
	let e = v.get(t);
	return e ? e.columns ? e.columns : e.children ? e.children.length : -1 : -1;
}, "getColumns"), q = p(() => [...v.values()], "getBlocksFlat"), Z = p(() => M || [], "getBlocks"), J = p(() => $, "getEdges"), G = p((t) => v.get(t), "getBlock"), Q = p((t) => {
	v.set(t.id, t);
}, "setBlock"), V = p(() => t, "getLogger"), tt = p(function() {
	return I;
}, "getClasses"), te = {
	getConfig: p(() => g().block, "getConfig"),
	typeStr2Type: W,
	edgeTypeStr2Type: X,
	edgeStrToEdgeData: F,
	getLogger: V,
	getBlocksFlat: q,
	getBlocks: Z,
	getEdges: J,
	setHierarchy: j,
	getBlock: G,
	setBlock: Q,
	getColumns: K,
	getClasses: tt,
	clear: Y,
	generateId: U
}, tr = p((t, r) => e(n(t, "r"), n(t, "g"), n(t, "b"), r), "fade"), ta = p((t) => `.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor || t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span,p {
    color: ${t.titleColor};
  }



  .label text,span,p {
    fill: ${t.nodeTextColor || t.textColor};
    color: ${t.nodeTextColor || t.textColor};
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
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

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
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${tr(t.edgeLabelBackground, .5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${tr(t.mainBkg, .5)};
    fill: ${tr(t.clusterBkg, .5)};
    stroke: ${tr(t.clusterBorder, .2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span,p {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

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

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
  ${S()}
`, "getStyles"), ti = p((t, e, r, a) => {
	e.forEach((e) => {
		ts[e](t, r, a);
	});
}, "insertMarkers"), ts = {
	extension: p((e, r, a) => {
		t.trace("Making markers for ", a), e.append("defs").append("marker").attr("id", a + "_" + r + "-extensionStart").attr("class", "marker extension " + r).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", a + "_" + r + "-extensionEnd").attr("class", "marker extension " + r).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
	}, "extension"),
	composition: p((t, e, r) => {
		t.append("defs").append("marker").attr("id", r + "_" + e + "-compositionStart").attr("class", "marker composition " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), t.append("defs").append("marker").attr("id", r + "_" + e + "-compositionEnd").attr("class", "marker composition " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: p((t, e, r) => {
		t.append("defs").append("marker").attr("id", r + "_" + e + "-aggregationStart").attr("class", "marker aggregation " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), t.append("defs").append("marker").attr("id", r + "_" + e + "-aggregationEnd").attr("class", "marker aggregation " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: p((t, e, r) => {
		t.append("defs").append("marker").attr("id", r + "_" + e + "-dependencyStart").attr("class", "marker dependency " + e).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), t.append("defs").append("marker").attr("id", r + "_" + e + "-dependencyEnd").attr("class", "marker dependency " + e).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: p((t, e, r) => {
		t.append("defs").append("marker").attr("id", r + "_" + e + "-lollipopStart").attr("class", "marker lollipop " + e).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), t.append("defs").append("marker").attr("id", r + "_" + e + "-lollipopEnd").attr("class", "marker lollipop " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
	}, "lollipop"),
	point: p((t, e, r) => {
		t.append("marker").attr("id", r + "_" + e + "-pointEnd").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), t.append("marker").attr("id", r + "_" + e + "-pointStart").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: p((t, e, r) => {
		t.append("marker").attr("id", r + "_" + e + "-circleEnd").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), t.append("marker").attr("id", r + "_" + e + "-circleStart").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: p((t, e, r) => {
		t.append("marker").attr("id", r + "_" + e + "-crossEnd").attr("class", "marker cross " + e).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), t.append("marker").attr("id", r + "_" + e + "-crossStart").attr("class", "marker cross " + e).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: p((t, e, r) => {
		t.append("defs").append("marker").attr("id", r + "_" + e + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb")
}, tn = r()?.block?.padding ?? 8;
function tl(t, e) {
	if (0 === t || !Number.isInteger(t)) throw Error("Columns must be an integer !== 0.");
	if (e < 0 || !Number.isInteger(e)) throw Error("Position must be a non-negative integer." + e);
	if (t < 0) return {
		px: e,
		py: 0
	};
	if (1 === t) return {
		px: 0,
		py: e
	};
	let r = Math.floor(e / t);
	return {
		px: e % t,
		py: r
	};
}
p(tl, "calculateBlockPosition");
var to = p((e) => {
	let r = 0, a = 0;
	for (let i of e.children) {
		let { width: s, height: n, x: l, y: o } = i.size ?? {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		t.debug("getMaxChildSize abc95 child:", i.id, "width:", s, "height:", n, "x:", l, "y:", o, i.type), "space" !== i.type && (s > r && (r = s / (e.widthInColumns ?? 1)), n > a && (a = n));
	}
	return {
		width: r,
		height: a
	};
}, "getMaxChildSize");
function td(e, r, a = 0, i = 0) {
	t.debug("setBlockSizes abc95 (start)", e.id, e?.size?.x, "block width =", e?.size, "siblingWidth", a), e?.size?.width || (e.size = {
		width: a,
		height: i,
		x: 0,
		y: 0
	});
	let s = 0, n = 0;
	if (e.children?.length > 0) {
		for (let t of e.children) td(t, r);
		let l = to(e);
		for (let r of (s = l.width, n = l.height, t.debug("setBlockSizes abc95 maxWidth of", e.id, ":s children is ", s, n), e.children)) r.size && (t.debug(`abc95 Setting size of children of ${e.id} id=${r.id} ${s} ${n} ${JSON.stringify(r.size)}`), r.size.width = s * (r.widthInColumns ?? 1) + tn * ((r.widthInColumns ?? 1) - 1), r.size.height = n, r.size.x = 0, r.size.y = 0, t.debug(`abc95 updating size of ${e.id} children child:${r.id} maxWidth:${s} maxHeight:${n}`));
		for (let t of e.children) td(t, r, s, n);
		let o = e.columns ?? -1, d = 0;
		for (let t of e.children) d += t.widthInColumns ?? 1;
		let c = e.children.length;
		o > 0 && o < d && (c = o);
		let h = Math.ceil(d / c), g = c * (s + tn) + tn, y = h * (n + tn) + tn;
		if (g < a) {
			t.debug(`Detected to small sibling: abc95 ${e.id} siblingWidth ${a} siblingHeight ${i} width ${g}`), g = a, y = i;
			let r = (a - c * tn - tn) / c, l = (i - h * tn - tn) / h;
			for (let a of (t.debug("Size indata abc88", e.id, "childWidth", r, "maxWidth", s), t.debug("Size indata abc88", e.id, "childHeight", l, "maxHeight", n), t.debug("Size indata abc88 xSize", c, "padding", tn), e.children)) a.size && (a.size.width = r, a.size.height = l, a.size.x = 0, a.size.y = 0);
		}
		if (t.debug(`abc95 (finale calc) ${e.id} xSize ${c} ySize ${h} columns ${o}${e.children.length} width=${Math.max(g, e.size?.width || 0)}`), g < (e?.size?.width || 0)) {
			g = e?.size?.width || 0;
			let r = o > 0 ? Math.min(e.children.length, o) : e.children.length;
			if (r > 0) {
				let a = (g - r * tn - tn) / r;
				for (let r of (t.debug("abc95 (growing to fit) width", e.id, g, e.size?.width, a), e.children)) r.size && (r.size.width = a);
			}
		}
		e.size = {
			width: g,
			height: y,
			x: 0,
			y: 0
		};
	}
	t.debug("setBlockSizes abc94 (done)", e.id, e?.size?.x, e?.size?.width, e?.size?.y, e?.size?.height);
}
function tc(e, r) {
	t.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
	let a = e.columns ?? -1;
	if (t.debug("layoutBlocks columns abc95", e.id, "=>", a, e), e.children && e.children.length > 0) {
		let i = e?.children[0]?.size?.width ?? 0, s = e.children.length * i + (e.children.length - 1) * tn;
		t.debug("widthOfChildren 88", s, "posX");
		let n = 0;
		t.debug("abc91 block?.size?.x", e.id, e?.size?.x);
		let l = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -tn, o = 0;
		for (let i of e.children) {
			if (!i.size) continue;
			let { width: s, height: d } = i.size, { px: c, py: h } = tl(a, n);
			if (h != o && (o = h, l = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -tn, t.debug("New row in layout for block", e.id, " and child ", i.id, o)), t.debug(`abc89 layout blocks (child) id: ${i.id} Pos: ${n} (px, py) ${c},${h} (${e?.size?.x},${e?.size?.y}) parent: ${e.id} width: ${s}${tn}`), e.size) {
				let r = s / 2;
				i.size.x = l + tn + r, t.debug(`abc91 layout blocks (calc) px, pyid:${i.id} startingPos=X${l} new startingPosX${i.size.x} ${r} padding=${tn} width=${s} halfWidth=${r} => x:${i.size.x} y:${i.size.y} ${i.widthInColumns} (width * (child?.w || 1)) / 2 ${s * (i?.widthInColumns ?? 1) / 2}`), l = i.size.x + r, i.size.y = e.size.y - e.size.height / 2 + h * (d + tn) + d / 2 + tn, t.debug(`abc88 layout blocks (calc) px, pyid:${i.id}startingPosX${l}${tn}${r}=>x:${i.size.x}y:${i.size.y}${i.widthInColumns}(width * (child?.w || 1)) / 2${s * (i?.widthInColumns ?? 1) / 2}`);
			}
			i.children && tc(i, r);
			let g = i?.widthInColumns ?? 1;
			a > 0 && (g = Math.min(g, a - n % a)), n += g, t.debug("abc88 columnsPos", i, n);
		}
	}
	t.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
}
function th(t, { minX: e, minY: r, maxX: a, maxY: i } = {
	minX: 0,
	minY: 0,
	maxX: 0,
	maxY: 0
}) {
	if (t.size && "root" !== t.id) {
		let { x: s, y: n, width: l, height: o } = t.size;
		s - l / 2 < e && (e = s - l / 2), n - o / 2 < r && (r = n - o / 2), s + l / 2 > a && (a = s + l / 2), n + o / 2 > i && (i = n + o / 2);
	}
	if (t.children) for (let s of t.children) ({minX: e, minY: r, maxX: a, maxY: i} = th(s, {
		minX: e,
		minY: r,
		maxX: a,
		maxY: i
	}));
	return {
		minX: e,
		minY: r,
		maxX: a,
		maxY: i
	};
}
function tg(e) {
	let r = e.getBlock("root");
	if (!r) return;
	td(r, e, 0, 0), tc(r, e), t.debug("getBlocks", JSON.stringify(r, null, 2));
	let { minX: a, minY: i, maxX: s, maxY: n } = th(r);
	return {
		x: a,
		y: i,
		width: s - a,
		height: n - i
	};
}
function ty(t, e) {
	e && t.attr("style", e);
}
function tu(t, e) {
	let r = h(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), a = r.append("xhtml:div"), s = t.label, n = t.isNode ? "nodeLabel" : "edgeLabel", l = a.append("span");
	return l.html(i(s, e)), ty(l, t.labelStyle), l.attr("class", n), ty(a, t.labelStyle), a.style("display", "inline-block"), a.style("white-space", "nowrap"), a.attr("xmlns", "http://www.w3.org/1999/xhtml"), r.node();
}
p(td, "setBlockSizes"), p(tc, "layoutBlocks"), p(th, "findBounds"), p(tg, "layout"), p(ty, "applyStyle"), p(tu, "addHtmlLabel");
var tp = p(async (e, a, i, s) => {
	let n = e || "";
	"object" == typeof n && (n = n[0]);
	let l = r();
	if (y(l.flowchart.htmlLabels)) return n = n.replace(/\\n|\n/g, "<br />"), t.debug("vertexText" + n), tu({
		isNode: s,
		label: await m(b(n)),
		labelStyle: a.replace("fill:", "color:")
	}, l);
	{
		let t = document.createElementNS("http://www.w3.org/2000/svg", "text");
		t.setAttribute("style", a.replace("color:", "fill:"));
		for (let e of "string" == typeof n ? n.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(n) ? n : []) {
			let r = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			r.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), r.setAttribute("dy", "1em"), r.setAttribute("x", "0"), i ? r.setAttribute("class", "title-row") : r.setAttribute("class", "row"), r.textContent = e.trim(), t.appendChild(r);
		}
		return t;
	}
}, "createLabel"), tx = p((t, e, r, a, i) => {
	e.arrowTypeStart && tf(t, "start", e.arrowTypeStart, r, a, i), e.arrowTypeEnd && tf(t, "end", e.arrowTypeEnd, r, a, i);
}, "addEdgeMarkers"), tb = {
	arrow_cross: "cross",
	arrow_point: "point",
	arrow_barb: "barb",
	arrow_circle: "circle",
	aggregation: "aggregation",
	extension: "extension",
	composition: "composition",
	dependency: "dependency",
	lollipop: "lollipop"
}, tf = p((e, r, a, i, s, n) => {
	let l = tb[a];
	if (!l) return void t.warn(`Unknown arrow type: ${a}`);
	e.attr(`marker-${r}`, `url(${i}#${s}_${n}-${l}${"start" === r ? "Start" : "End"})`);
}, "addEdgeMarker"), tm = {}, tw = {}, tk = p(async (t, e) => {
	let a, i = r(), s = y(i.flowchart.htmlLabels), n = "markdown" === e.labelType ? k(t, e.label, {
		style: e.labelStyle,
		useHtmlLabels: s,
		addSvgBackground: !0
	}, i) : await tp(e.label, e.labelStyle), l = t.insert("g").attr("class", "edgeLabel"), o = l.insert("g").attr("class", "label");
	o.node().appendChild(n);
	let d = n.getBBox();
	if (s) {
		let t = n.children[0], e = h(n);
		d = t.getBoundingClientRect(), e.attr("width", d.width), e.attr("height", d.height);
	}
	if (o.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), tm[e.id] = l, e.width = d.width, e.height = d.height, e.startLabelLeft) {
		let r = await tp(e.startLabelLeft, e.labelStyle), i = t.insert("g").attr("class", "edgeTerminals"), s = i.insert("g").attr("class", "inner");
		a = s.node().appendChild(r);
		let n = r.getBBox();
		s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")"), tw[e.id] || (tw[e.id] = {}), tw[e.id].startLeft = i, tL(a, e.startLabelLeft);
	}
	if (e.startLabelRight) {
		let r = await tp(e.startLabelRight, e.labelStyle), i = t.insert("g").attr("class", "edgeTerminals"), s = i.insert("g").attr("class", "inner");
		a = i.node().appendChild(r), s.node().appendChild(r);
		let n = r.getBBox();
		s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")"), tw[e.id] || (tw[e.id] = {}), tw[e.id].startRight = i, tL(a, e.startLabelRight);
	}
	if (e.endLabelLeft) {
		let r = await tp(e.endLabelLeft, e.labelStyle), i = t.insert("g").attr("class", "edgeTerminals"), s = i.insert("g").attr("class", "inner");
		a = s.node().appendChild(r);
		let n = r.getBBox();
		s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")"), i.node().appendChild(r), tw[e.id] || (tw[e.id] = {}), tw[e.id].endLeft = i, tL(a, e.endLabelLeft);
	}
	if (e.endLabelRight) {
		let r = await tp(e.endLabelRight, e.labelStyle), i = t.insert("g").attr("class", "edgeTerminals"), s = i.insert("g").attr("class", "inner");
		a = s.node().appendChild(r);
		let n = r.getBBox();
		s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")"), i.node().appendChild(r), tw[e.id] || (tw[e.id] = {}), tw[e.id].endRight = i, tL(a, e.endLabelRight);
	}
	return n;
}, "insertEdgeLabel");
function tL(t, e) {
	r().flowchart.htmlLabels && t && (t.style.width = 9 * e.length + "px", t.style.height = "12px");
}
p(tL, "setTerminalWidth");
var tS = p((e, a) => {
	t.debug("Moving label abc88 ", e.id, e.label, tm[e.id], a);
	let i = a.updatedPath ? a.updatedPath : a.originalPath, { subGraphTitleTotalMargin: s } = w(r());
	if (e.label) {
		let r = tm[e.id], n = e.x, l = e.y;
		if (i) {
			let r = x.calcLabelPosition(i);
			t.debug("Moving label " + e.label + " from (", n, ",", l, ") to (", r.x, ",", r.y, ") abc88"), a.updatedPath && (n = r.x, l = r.y);
		}
		r.attr("transform", `translate(${n}, ${l + s / 2})`);
	}
	if (e.startLabelLeft) {
		let t = tw[e.id].startLeft, r = e.x, a = e.y;
		if (i) {
			let t = x.calcTerminalLabelPosition(10 * !!e.arrowTypeStart, "start_left", i);
			r = t.x, a = t.y;
		}
		t.attr("transform", `translate(${r}, ${a})`);
	}
	if (e.startLabelRight) {
		let t = tw[e.id].startRight, r = e.x, a = e.y;
		if (i) {
			let t = x.calcTerminalLabelPosition(10 * !!e.arrowTypeStart, "start_right", i);
			r = t.x, a = t.y;
		}
		t.attr("transform", `translate(${r}, ${a})`);
	}
	if (e.endLabelLeft) {
		let t = tw[e.id].endLeft, r = e.x, a = e.y;
		if (i) {
			let t = x.calcTerminalLabelPosition(10 * !!e.arrowTypeEnd, "end_left", i);
			r = t.x, a = t.y;
		}
		t.attr("transform", `translate(${r}, ${a})`);
	}
	if (e.endLabelRight) {
		let t = tw[e.id].endRight, r = e.x, a = e.y;
		if (i) {
			let t = x.calcTerminalLabelPosition(10 * !!e.arrowTypeEnd, "end_right", i);
			r = t.x, a = t.y;
		}
		t.attr("transform", `translate(${r}, ${a})`);
	}
}, "positionEdgeLabel"), t_ = p((t, e) => {
	let r = t.x, a = t.y, i = Math.abs(e.x - r), s = Math.abs(e.y - a), n = t.width / 2, l = t.height / 2;
	return i >= n || s >= l;
}, "outsideNode"), tE = p((e, r, a) => {
	t.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(r)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
	let i = e.x, s = e.y, n = Math.abs(i - a.x), l = e.width / 2, o = a.x < r.x ? l - n : l + n, d = e.height / 2, c = Math.abs(r.y - a.y), h = Math.abs(r.x - a.x);
	if (Math.abs(s - r.y) * l > Math.abs(i - r.x) * d) {
		let e = a.y < r.y ? r.y - d - s : s - d - r.y;
		o = h * e / c;
		let i = {
			x: a.x < r.x ? a.x + o : a.x - h + o,
			y: a.y < r.y ? a.y + c - e : a.y - c + e
		};
		return 0 === o && (i.x = r.x, i.y = r.y), 0 === h && (i.x = r.x), 0 === c && (i.y = r.y), t.debug(`abc89 topp/bott calc, Q ${c}, q ${e}, R ${h}, r ${o}`, i), i;
	}
	{
		let e = c * (o = a.x < r.x ? r.x - l - i : i - l - r.x) / h, s = a.x < r.x ? a.x + h - o : a.x - h + o, n = a.y < r.y ? a.y + e : a.y - e;
		return t.debug(`sides calc abc89, Q ${c}, q ${e}, R ${h}, r ${o}`, {
			_x: s,
			_y: n
		}), 0 === o && (s = r.x, n = r.y), 0 === h && (s = r.x), 0 === c && (n = r.y), {
			x: s,
			y: n
		};
	}
}, "intersection"), tv = p((e, r) => {
	t.debug("abc88 cutPathAtIntersect", e, r);
	let a = [], i = e[0], s = !1;
	return e.forEach((t) => {
		if (t_(r, t) || s) i = t, s || a.push(t);
		else {
			let e = tE(r, i, t), n = !1;
			a.forEach((t) => {
				n = n || t.x === e.x && t.y === e.y;
			}), a.some((t) => t.x === e.x && t.y === e.y) || a.push(e), s = !0;
		}
	}), a;
}, "cutPathAtIntersect"), t$ = p(function(e, a, i, s, n, l, h) {
	let g = i.points;
	t.debug("abc88 InsertEdge: edge=", i, "e=", a);
	let y = !1, u = l.node(a.v);
	var p = l.node(a.w);
	p?.intersect && u?.intersect && ((g = g.slice(1, i.points.length - 1)).unshift(u.intersect(g[0])), g.push(p.intersect(g[g.length - 1]))), i.toCluster && (t.debug("to cluster abc88", s[i.toCluster]), g = tv(i.points, s[i.toCluster].node), y = !0), i.fromCluster && (t.debug("from cluster abc88", s[i.fromCluster]), g = tv(g.reverse(), s[i.fromCluster].node).reverse(), y = !0);
	let x = g.filter((t) => !Number.isNaN(t.y)), b = c;
	i.curve && ("graph" === n || "flowchart" === n) && (b = i.curve);
	let { x: f, y: m } = _(i), w = o().x(f).y(m).curve(b), k;
	switch (i.thickness) {
		case "normal":
			k = "edge-thickness-normal";
			break;
		case "thick":
		case "invisible":
			k = "edge-thickness-thick";
			break;
		default: k = "";
	}
	switch (i.pattern) {
		case "solid":
			k += " edge-pattern-solid";
			break;
		case "dotted":
			k += " edge-pattern-dotted";
			break;
		case "dashed": k += " edge-pattern-dashed";
	}
	let L = e.append("path").attr("d", w(x)).attr("id", i.id).attr("class", " " + k + (i.classes ? " " + i.classes : "")).attr("style", i.style), S = "";
	(r().flowchart.arrowMarkerAbsolute || r().state.arrowMarkerAbsolute) && (S = d(!0)), tx(L, i, S, h, n);
	let E = {};
	return y && (E.updatedPath = g), E.originalPath = i.points, E;
}, "insertEdge"), tD = p((t) => {
	let e = /* @__PURE__ */ new Set();
	for (let r of t) switch (r) {
		case "x":
			e.add("right"), e.add("left");
			break;
		case "y":
			e.add("up"), e.add("down");
			break;
		default: e.add(r);
	}
	return e;
}, "expandAndDeduplicateDirections"), tT = p((t, e, r) => {
	let a = tD(t), i = e.height + 2 * r.padding, s = i / 2, n = e.width + 2 * s + r.padding, l = r.padding / 2;
	return a.has("right") && a.has("left") && a.has("up") && a.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: s,
			y: 0
		},
		{
			x: n / 2,
			y: 2 * l
		},
		{
			x: n - s,
			y: 0
		},
		{
			x: n,
			y: 0
		},
		{
			x: n,
			y: -i / 3
		},
		{
			x: n + 2 * l,
			y: -i / 2
		},
		{
			x: n,
			y: -2 * i / 3
		},
		{
			x: n,
			y: -i
		},
		{
			x: n - s,
			y: -i
		},
		{
			x: n / 2,
			y: -i - 2 * l
		},
		{
			x: s,
			y: -i
		},
		{
			x: 0,
			y: -i
		},
		{
			x: 0,
			y: -2 * i / 3
		},
		{
			x: -2 * l,
			y: -i / 2
		},
		{
			x: 0,
			y: -i / 3
		}
	] : a.has("right") && a.has("left") && a.has("up") ? [
		{
			x: s,
			y: 0
		},
		{
			x: n - s,
			y: 0
		},
		{
			x: n,
			y: -i / 2
		},
		{
			x: n - s,
			y: -i
		},
		{
			x: s,
			y: -i
		},
		{
			x: 0,
			y: -i / 2
		}
	] : a.has("right") && a.has("left") && a.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: s,
			y: -i
		},
		{
			x: n - s,
			y: -i
		},
		{
			x: n,
			y: 0
		}
	] : a.has("right") && a.has("up") && a.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: -s
		},
		{
			x: n,
			y: -i + s
		},
		{
			x: 0,
			y: -i
		}
	] : a.has("left") && a.has("up") && a.has("down") ? [
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: -s
		},
		{
			x: 0,
			y: -i + s
		},
		{
			x: n,
			y: -i
		}
	] : a.has("right") && a.has("left") ? [
		{
			x: s,
			y: 0
		},
		{
			x: s,
			y: -l
		},
		{
			x: n - s,
			y: -l
		},
		{
			x: n - s,
			y: 0
		},
		{
			x: n,
			y: -i / 2
		},
		{
			x: n - s,
			y: -i
		},
		{
			x: n - s,
			y: -i + l
		},
		{
			x: s,
			y: -i + l
		},
		{
			x: s,
			y: -i
		},
		{
			x: 0,
			y: -i / 2
		}
	] : a.has("up") && a.has("down") ? [
		{
			x: n / 2,
			y: 0
		},
		{
			x: 0,
			y: -l
		},
		{
			x: s,
			y: -l
		},
		{
			x: s,
			y: -i + l
		},
		{
			x: 0,
			y: -i + l
		},
		{
			x: n / 2,
			y: -i
		},
		{
			x: n,
			y: -i + l
		},
		{
			x: n - s,
			y: -i + l
		},
		{
			x: n - s,
			y: -l
		},
		{
			x: n,
			y: -l
		}
	] : a.has("right") && a.has("up") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: -s
		},
		{
			x: 0,
			y: -i
		}
	] : a.has("right") && a.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: -i
		}
	] : a.has("left") && a.has("up") ? [
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: -s
		},
		{
			x: n,
			y: -i
		}
	] : a.has("left") && a.has("down") ? [
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: -i
		}
	] : a.has("right") ? [
		{
			x: s,
			y: -l
		},
		{
			x: s,
			y: -l
		},
		{
			x: n - s,
			y: -l
		},
		{
			x: n - s,
			y: 0
		},
		{
			x: n,
			y: -i / 2
		},
		{
			x: n - s,
			y: -i
		},
		{
			x: n - s,
			y: -i + l
		},
		{
			x: s,
			y: -i + l
		},
		{
			x: s,
			y: -i + l
		}
	] : a.has("left") ? [
		{
			x: s,
			y: 0
		},
		{
			x: s,
			y: -l
		},
		{
			x: n - s,
			y: -l
		},
		{
			x: n - s,
			y: -i + l
		},
		{
			x: s,
			y: -i + l
		},
		{
			x: s,
			y: -i
		},
		{
			x: 0,
			y: -i / 2
		}
	] : a.has("up") ? [
		{
			x: s,
			y: -l
		},
		{
			x: s,
			y: -i + l
		},
		{
			x: 0,
			y: -i + l
		},
		{
			x: n / 2,
			y: -i
		},
		{
			x: n,
			y: -i + l
		},
		{
			x: n - s,
			y: -i + l
		},
		{
			x: n - s,
			y: -l
		}
	] : a.has("down") ? [
		{
			x: n / 2,
			y: 0
		},
		{
			x: 0,
			y: -l
		},
		{
			x: s,
			y: -l
		},
		{
			x: s,
			y: -i + l
		},
		{
			x: n - s,
			y: -i + l
		},
		{
			x: n - s,
			y: -l
		},
		{
			x: n,
			y: -l
		}
	] : [{
		x: 0,
		y: 0
	}];
}, "getArrowPoints");
function tC(t, e, r, a) {
	var i = t.x, s = t.y, n = i - a.x, l = s - a.y, o = Math.sqrt(e * e * l * l + r * r * n * n), d = Math.abs(e * r * n / o);
	a.x < i && (d = -d);
	var c = Math.abs(e * r * l / o);
	return a.y < s && (c = -c), {
		x: i + d,
		y: s + c
	};
}
function tN(t, e, r) {
	return tC(t, e, e, r);
}
function tI(t, e, r, a) {
	var i, s, n, l, o, d, c, h, g, y, u, p, x;
	if (i = e.y - t.y, n = t.x - e.x, o = e.x * t.y - t.x * e.y, g = i * r.x + n * r.y + o, y = i * a.x + n * a.y + o, !(0 !== g && 0 !== y && tB(g, y)) && (s = a.y - r.y, l = r.x - a.x, d = a.x * r.y - r.x * a.y, c = s * t.x + l * t.y + d, h = s * e.x + l * e.y + d, !(0 !== c && 0 !== h && tB(c, h)) && 0 != (u = i * l - s * n))) return p = Math.abs(u / 2), {
		x: (x = n * d - l * o) < 0 ? (x - p) / u : (x + p) / u,
		y: (x = s * o - i * d) < 0 ? (x - p) / u : (x + p) / u
	};
}
function tB(t, e) {
	return t * e > 0;
}
function tR(t, e, r) {
	var a = t.x, i = t.y, s = [], n = Infinity, l = Infinity;
	"function" == typeof e.forEach ? e.forEach(function(t) {
		n = Math.min(n, t.x), l = Math.min(l, t.y);
	}) : (n = Math.min(n, e.x), l = Math.min(l, e.y));
	for (var o = a - t.width / 2 - n, d = i - t.height / 2 - l, c = 0; c < e.length; c++) {
		var h = e[c], g = e[c < e.length - 1 ? c + 1 : 0], y = tI(t, r, {
			x: o + h.x,
			y: d + h.y
		}, {
			x: o + g.x,
			y: d + g.y
		});
		y && s.push(y);
	}
	return s.length ? (s.length > 1 && s.sort(function(t, e) {
		var a = t.x - r.x, i = t.y - r.y, s = Math.sqrt(a * a + i * i), n = e.x - r.x, l = e.y - r.y, o = Math.sqrt(n * n + l * l);
		return s < o ? -1 : +(s !== o);
	}), s[0]) : t;
}
p(function(t, e) {
	return t.intersect(e);
}, "intersectNode"), p(tC, "intersectEllipse"), p(tN, "intersectCircle"), p(tI, "intersectLine"), p(tB, "sameSign"), p(tR, "intersectPolygon");
var tz = p((t, e) => {
	var r, a, i = t.x, s = t.y, n = e.x - i, l = e.y - s, o = t.width / 2, d = t.height / 2;
	return Math.abs(l) * o > Math.abs(n) * d ? (l < 0 && (d = -d), r = 0 === l ? 0 : d * n / l, a = d) : (n < 0 && (o = -o), r = o, a = 0 === n ? 0 : o * l / n), {
		x: i + r,
		y: s + a
	};
}, "intersectRect"), tO = p(async (t, e, a, s) => {
	let n = r(), l = e.useHtmlLabels || y(n.flowchart.htmlLabels), o = t.insert("g").attr("class", a || "node default").attr("id", e.domId || e.id), d = o.insert("g").attr("class", "label").attr("style", e.labelStyle), c;
	c = void 0 === e.labelText ? "" : "string" == typeof e.labelText ? e.labelText : e.labelText[0];
	let g = d.node(), u, x = (u = "markdown" === e.labelType ? k(d, i(b(c), n), {
		useHtmlLabels: l,
		width: e.width || n.flowchart.wrappingWidth,
		classes: "markdown-node-label"
	}, n) : g.appendChild(await tp(i(b(c), n), e.labelStyle, !1, s))).getBBox(), f = e.padding / 2;
	if (y(n.flowchart.htmlLabels)) {
		let t = u.children[0], e = h(u), r = t.getElementsByTagName("img");
		if (r) {
			let t = "" === c.replace(/<img[^>]*>/g, "").trim();
			await Promise.all([...r].map((e) => new Promise((r) => {
				function a() {
					if (e.style.display = "flex", e.style.flexDirection = "column", t) {
						let t = 5 * parseInt(n.fontSize ? n.fontSize : window.getComputedStyle(document.body).fontSize, 10) + "px";
						e.style.minWidth = t, e.style.maxWidth = t;
					} else e.style.width = "100%";
					r(e);
				}
				p(a, "setupImage"), setTimeout(() => {
					e.complete && a();
				}), e.addEventListener("error", a), e.addEventListener("load", a);
			})));
		}
		x = t.getBoundingClientRect(), e.attr("width", x.width), e.attr("height", x.height);
	}
	return l ? d.attr("transform", "translate(" + -x.width / 2 + ", " + -x.height / 2 + ")") : d.attr("transform", "translate(0, " + -x.height / 2 + ")"), e.centerLabel && d.attr("transform", "translate(" + -x.width / 2 + ", " + -x.height / 2 + ")"), d.insert("rect", ":first-child"), {
		shapeSvg: o,
		bbox: x,
		halfPadding: f,
		label: d
	};
}, "labelHelper"), tA = p((t, e) => {
	let r = e.node().getBBox();
	t.width = r.width, t.height = r.height;
}, "updateNodeBounds");
function tM(t, e, r, a) {
	return t.insert("polygon", ":first-child").attr("points", a.map(function(t) {
		return t.x + "," + t.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -e / 2 + "," + r / 2 + ")");
}
p(tM, "insertPolygonShape");
var tP = p(async (e, a) => {
	a.useHtmlLabels || r().flowchart.htmlLabels || (a.centerLabel = !0);
	let { shapeSvg: i, bbox: s, halfPadding: n } = await tO(e, a, "node " + a.classes, !0);
	t.info("Classes = ", a.classes);
	let l = i.insert("rect", ":first-child");
	return l.attr("rx", a.rx).attr("ry", a.ry).attr("x", -s.width / 2 - n).attr("y", -s.height / 2 - n).attr("width", s.width + a.padding).attr("height", s.height + a.padding), tA(a, l), a.intersect = function(t) {
		return tz(a, t);
	}, i;
}, "note"), tY = p((t) => t ? " " + t : "", "formatClass"), tW = p((t, e) => `${e || "node default"}${tY(t.classes)} ${tY(t.class)}`, "getClassesFromNode"), tX = p(async (e, r) => {
	let { shapeSvg: a, bbox: i } = await tO(e, r, tW(r, void 0), !0), s = i.width + r.padding + (i.height + r.padding), n = [
		{
			x: s / 2,
			y: 0
		},
		{
			x: s,
			y: -s / 2
		},
		{
			x: s / 2,
			y: -s
		},
		{
			x: 0,
			y: -s / 2
		}
	];
	t.info("Question main (Circle)");
	let l = tM(a, s, s, n);
	return l.attr("style", r.style), tA(r, l), r.intersect = function(e) {
		return t.warn("Intersect called"), tR(r, n, e);
	}, a;
}, "question"), tF = p((t, e) => {
	let r = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
	return r.insert("polygon", ":first-child").attr("points", [
		{
			x: 0,
			y: 14
		},
		{
			x: 14,
			y: 0
		},
		{
			x: 0,
			y: -14
		},
		{
			x: -14,
			y: 0
		}
	].map(function(t) {
		return t.x + "," + t.y;
	}).join(" ")).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), e.width = 28, e.height = 28, e.intersect = function(t) {
		return tN(e, 14, t);
	}, r;
}, "choice"), tH = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.height + e.padding, s = i / 4, n = a.width + 2 * s + e.padding, l = [
		{
			x: s,
			y: 0
		},
		{
			x: n - s,
			y: 0
		},
		{
			x: n,
			y: -i / 2
		},
		{
			x: n - s,
			y: -i
		},
		{
			x: s,
			y: -i
		},
		{
			x: 0,
			y: -i / 2
		}
	], o = tM(r, n, i, l);
	return o.attr("style", e.style), tA(e, o), e.intersect = function(t) {
		return tR(e, l, t);
	}, r;
}, "hexagon"), tU = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, void 0, !0), i = a.height + 2 * e.padding, s = i / 2, n = a.width + 2 * s + e.padding, l = tT(e.directions, a, e), o = tM(r, n, i, l);
	return o.attr("style", e.style), tA(e, o), e.intersect = function(t) {
		return tR(e, l, t);
	}, r;
}, "block_arrow"), tj = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.width + e.padding, s = a.height + e.padding, n = [
		{
			x: -s / 2,
			y: 0
		},
		{
			x: i,
			y: 0
		},
		{
			x: i,
			y: -s
		},
		{
			x: -s / 2,
			y: -s
		},
		{
			x: 0,
			y: -s / 2
		}
	];
	return tM(r, i, s, n).attr("style", e.style), e.width = i + s, e.height = s, e.intersect = function(t) {
		return tR(e, n, t);
	}, r;
}, "rect_left_inv_arrow"), tK = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e), !0), i = a.width + e.padding, s = a.height + e.padding, n = [
		{
			x: -2 * s / 6,
			y: 0
		},
		{
			x: i - s / 6,
			y: 0
		},
		{
			x: i + 2 * s / 6,
			y: -s
		},
		{
			x: s / 6,
			y: -s
		}
	], l = tM(r, i, s, n);
	return l.attr("style", e.style), tA(e, l), e.intersect = function(t) {
		return tR(e, n, t);
	}, r;
}, "lean_right"), tq = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.width + e.padding, s = a.height + e.padding, n = [
		{
			x: 2 * s / 6,
			y: 0
		},
		{
			x: i + s / 6,
			y: 0
		},
		{
			x: i - 2 * s / 6,
			y: -s
		},
		{
			x: -s / 6,
			y: -s
		}
	], l = tM(r, i, s, n);
	return l.attr("style", e.style), tA(e, l), e.intersect = function(t) {
		return tR(e, n, t);
	}, r;
}, "lean_left"), tZ = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.width + e.padding, s = a.height + e.padding, n = [
		{
			x: -2 * s / 6,
			y: 0
		},
		{
			x: i + 2 * s / 6,
			y: 0
		},
		{
			x: i - s / 6,
			y: -s
		},
		{
			x: s / 6,
			y: -s
		}
	], l = tM(r, i, s, n);
	return l.attr("style", e.style), tA(e, l), e.intersect = function(t) {
		return tR(e, n, t);
	}, r;
}, "trapezoid"), tJ = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.width + e.padding, s = a.height + e.padding, n = [
		{
			x: s / 6,
			y: 0
		},
		{
			x: i - s / 6,
			y: 0
		},
		{
			x: i + 2 * s / 6,
			y: -s
		},
		{
			x: -2 * s / 6,
			y: -s
		}
	], l = tM(r, i, s, n);
	return l.attr("style", e.style), tA(e, l), e.intersect = function(t) {
		return tR(e, n, t);
	}, r;
}, "inv_trapezoid"), tG = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.width + e.padding, s = a.height + e.padding, n = [
		{
			x: 0,
			y: 0
		},
		{
			x: i + s / 2,
			y: 0
		},
		{
			x: i,
			y: -s / 2
		},
		{
			x: i + s / 2,
			y: -s
		},
		{
			x: 0,
			y: -s
		}
	], l = tM(r, i, s, n);
	return l.attr("style", e.style), tA(e, l), e.intersect = function(t) {
		return tR(e, n, t);
	}, r;
}, "rect_right_inv_arrow"), tQ = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.width + e.padding, s = i / 2, n = s / (2.5 + i / 50), l = a.height + n + e.padding, o = "M 0," + n + " a " + s + "," + n + " 0,0,0 " + i + " 0 a " + s + "," + n + " 0,0,0 " + -i + " 0 l 0," + l + " a " + s + "," + n + " 0,0,0 " + i + " 0 l 0," + -l, d = r.attr("label-offset-y", n).insert("path", ":first-child").attr("style", e.style).attr("d", o).attr("transform", "translate(" + -i / 2 + "," + -(l / 2 + n) + ")");
	return tA(e, d), e.intersect = function(t) {
		let r = tz(e, t), a = r.x - e.x;
		if (0 != s && (Math.abs(a) < e.width / 2 || Math.abs(a) == e.width / 2 && Math.abs(r.y - e.y) > e.height / 2 - n)) {
			let i = n * n * (1 - a * a / (s * s));
			0 != i && (i = Math.sqrt(i)), i = n - i, t.y - e.y > 0 && (i = -i), r.y += i;
		}
		return r;
	}, r;
}, "cylinder"), tV = p(async (e, r) => {
	let { shapeSvg: a, bbox: i, halfPadding: s } = await tO(e, r, "node " + r.classes + " " + r.class, !0), n = a.insert("rect", ":first-child"), l = r.positioned ? r.width : i.width + r.padding, o = r.positioned ? r.height : i.height + r.padding, d = r.positioned ? -l / 2 : -i.width / 2 - s, c = r.positioned ? -o / 2 : -i.height / 2 - s;
	if (n.attr("class", "basic label-container").attr("style", r.style).attr("rx", r.rx).attr("ry", r.ry).attr("x", d).attr("y", c).attr("width", l).attr("height", o), r.props) {
		let e = new Set(Object.keys(r.props));
		r.props.borders && (t2(n, r.props.borders, l, o), e.delete("borders")), e.forEach((e) => {
			t.warn(`Unknown node property ${e}`);
		});
	}
	return tA(r, n), r.intersect = function(t) {
		return tz(r, t);
	}, a;
}, "rect"), t1 = p(async (e, r) => {
	let { shapeSvg: a, bbox: i, halfPadding: s } = await tO(e, r, "node " + r.classes, !0), n = a.insert("rect", ":first-child"), l = r.positioned ? r.width : i.width + r.padding, o = r.positioned ? r.height : i.height + r.padding, d = r.positioned ? -l / 2 : -i.width / 2 - s, c = r.positioned ? -o / 2 : -i.height / 2 - s;
	if (n.attr("class", "basic cluster composite label-container").attr("style", r.style).attr("rx", r.rx).attr("ry", r.ry).attr("x", d).attr("y", c).attr("width", l).attr("height", o), r.props) {
		let e = new Set(Object.keys(r.props));
		r.props.borders && (t2(n, r.props.borders, l, o), e.delete("borders")), e.forEach((e) => {
			t.warn(`Unknown node property ${e}`);
		});
	}
	return tA(r, n), r.intersect = function(t) {
		return tz(r, t);
	}, a;
}, "composite"), t0 = p(async (e, r) => {
	let { shapeSvg: a } = await tO(e, r, "label", !0);
	t.trace("Classes = ", r.class);
	let i = a.insert("rect", ":first-child");
	if (i.attr("width", 0).attr("height", 0), a.attr("class", "label edgeLabel"), r.props) {
		let e = new Set(Object.keys(r.props));
		r.props.borders && (t2(i, r.props.borders, 0, 0), e.delete("borders")), e.forEach((e) => {
			t.warn(`Unknown node property ${e}`);
		});
	}
	return tA(r, i), r.intersect = function(t) {
		return tz(r, t);
	}, a;
}, "labelRect");
function t2(e, r, a, i) {
	let s = [], n = p((t) => {
		s.push(t, 0);
	}, "addBorder"), l = p((t) => {
		s.push(0, t);
	}, "skipBorder");
	r.includes("t") ? (t.debug("add top border"), n(a)) : l(a), r.includes("r") ? (t.debug("add right border"), n(i)) : l(i), r.includes("b") ? (t.debug("add bottom border"), n(a)) : l(a), r.includes("l") ? (t.debug("add left border"), n(i)) : l(i), e.attr("stroke-dasharray", s.join(" "));
}
p(t2, "applyNodePropertyBorders");
var t3 = p(async (e, a) => {
	let i;
	i = a.classes ? "node " + a.classes : "node default";
	let s = e.insert("g").attr("class", i).attr("id", a.domId || a.id), n = s.insert("rect", ":first-child"), l = s.insert("line"), o = s.insert("g").attr("class", "label"), d = a.labelText.flat ? a.labelText.flat() : a.labelText, c = "";
	c = "object" == typeof d ? d[0] : d, t.info("Label text abc79", c, d, "object" == typeof d);
	let g = o.node().appendChild(await tp(c, a.labelStyle, !0, !0)), u = {
		width: 0,
		height: 0
	};
	if (y(r().flowchart.htmlLabels)) {
		let t = g.children[0], e = h(g);
		u = t.getBoundingClientRect(), e.attr("width", u.width), e.attr("height", u.height);
	}
	t.info("Text 2", d);
	let p = d.slice(1, d.length), x = g.getBBox(), b = o.node().appendChild(await tp(p.join ? p.join("<br/>") : p, a.labelStyle, !0, !0));
	if (y(r().flowchart.htmlLabels)) {
		let t = b.children[0], e = h(b);
		u = t.getBoundingClientRect(), e.attr("width", u.width), e.attr("height", u.height);
	}
	let f = a.padding / 2;
	return h(b).attr("transform", "translate( " + (u.width > x.width ? 0 : (x.width - u.width) / 2) + ", " + (x.height + f + 5) + ")"), h(g).attr("transform", "translate( " + (u.width < x.width ? 0 : -(x.width - u.width) / 2) + ", 0)"), u = o.node().getBBox(), o.attr("transform", "translate(" + -u.width / 2 + ", " + (-u.height / 2 - f + 3) + ")"), n.attr("class", "outer title-state").attr("x", -u.width / 2 - f).attr("y", -u.height / 2 - f).attr("width", u.width + a.padding).attr("height", u.height + a.padding), l.attr("class", "divider").attr("x1", -u.width / 2 - f).attr("x2", u.width / 2 + f).attr("y1", -u.height / 2 - f + x.height + f).attr("y2", -u.height / 2 - f + x.height + f), tA(a, n), a.intersect = function(t) {
		return tz(a, t);
	}, s;
}, "rectWithTitle"), t4 = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.height + e.padding, s = a.width + i / 4 + e.padding, n = r.insert("rect", ":first-child").attr("style", e.style).attr("rx", i / 2).attr("ry", i / 2).attr("x", -s / 2).attr("y", -i / 2).attr("width", s).attr("height", i);
	return tA(e, n), e.intersect = function(t) {
		return tz(e, t);
	}, r;
}, "stadium"), t8 = p(async (e, r) => {
	let { shapeSvg: a, bbox: i, halfPadding: s } = await tO(e, r, tW(r, void 0), !0), n = a.insert("circle", ":first-child");
	return n.attr("style", r.style).attr("rx", r.rx).attr("ry", r.ry).attr("r", i.width / 2 + s).attr("width", i.width + r.padding).attr("height", i.height + r.padding), t.info("Circle main"), tA(r, n), r.intersect = function(e) {
		return t.info("Circle intersect", r, i.width / 2 + s, e), tN(r, i.width / 2 + s, e);
	}, a;
}, "circle"), t5 = p(async (e, r) => {
	let { shapeSvg: a, bbox: i, halfPadding: s } = await tO(e, r, tW(r, void 0), !0), n = a.insert("g", ":first-child"), l = n.insert("circle"), o = n.insert("circle");
	return n.attr("class", r.class), l.attr("style", r.style).attr("rx", r.rx).attr("ry", r.ry).attr("r", i.width / 2 + s + 5).attr("width", i.width + r.padding + 10).attr("height", i.height + r.padding + 10), o.attr("style", r.style).attr("rx", r.rx).attr("ry", r.ry).attr("r", i.width / 2 + s).attr("width", i.width + r.padding).attr("height", i.height + r.padding), t.info("DoubleCircle main"), tA(r, l), r.intersect = function(e) {
		return t.info("DoubleCircle intersect", r, i.width / 2 + s + 5, e), tN(r, i.width / 2 + s + 5, e);
	}, a;
}, "doublecircle"), t9 = p(async (t, e) => {
	let { shapeSvg: r, bbox: a } = await tO(t, e, tW(e, void 0), !0), i = a.width + e.padding, s = a.height + e.padding, n = [
		{
			x: 0,
			y: 0
		},
		{
			x: i,
			y: 0
		},
		{
			x: i,
			y: -s
		},
		{
			x: 0,
			y: -s
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: i + 8,
			y: 0
		},
		{
			x: i + 8,
			y: -s
		},
		{
			x: -8,
			y: -s
		},
		{
			x: -8,
			y: 0
		}
	], l = tM(r, i, s, n);
	return l.attr("style", e.style), tA(e, l), e.intersect = function(t) {
		return tR(e, n, t);
	}, r;
}, "subroutine"), t6 = p((t, e) => {
	let r = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id), a = r.insert("circle", ":first-child");
	return a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), tA(e, a), e.intersect = function(t) {
		return tN(e, 7, t);
	}, r;
}, "start"), t7 = p((t, e, r) => {
	let a = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id), i = 70, s = 10;
	return "LR" === r && (i = 10, s = 70), tA(e, a.append("rect").attr("x", -1 * i / 2).attr("y", -1 * s / 2).attr("width", i).attr("height", s).attr("class", "fork-join")), e.height = e.height + e.padding / 2, e.width = e.width + e.padding / 2, e.intersect = function(t) {
		return tz(e, t);
	}, a;
}, "forkJoin"), et = {
	rhombus: tX,
	composite: t1,
	question: tX,
	rect: tV,
	labelRect: t0,
	rectWithTitle: t3,
	choice: tF,
	circle: t8,
	doublecircle: t5,
	stadium: t4,
	hexagon: tH,
	block_arrow: tU,
	rect_left_inv_arrow: tj,
	lean_right: tK,
	lean_left: tq,
	trapezoid: tZ,
	inv_trapezoid: tJ,
	rect_right_inv_arrow: tG,
	cylinder: tQ,
	start: t6,
	end: p((t, e) => {
		let r = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id), a = r.insert("circle", ":first-child"), i = r.insert("circle", ":first-child");
		return i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), a.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), tA(e, i), e.intersect = function(t) {
			return tN(e, 7, t);
		}, r;
	}, "end"),
	note: tP,
	subroutine: t9,
	fork: t7,
	join: t7,
	class_box: p(async (t, e) => {
		let a = e.padding / 2, i;
		i = e.classes ? "node " + e.classes : "node default";
		let s = t.insert("g").attr("class", i).attr("id", e.domId || e.id), n = s.insert("rect", ":first-child"), l = s.insert("line"), o = s.insert("line"), d = 0, c = 4, g = s.insert("g").attr("class", "label"), u = 0, p = e.classData.annotations?.[0], x = e.classData.annotations[0] ? "«" + e.classData.annotations[0] + "»" : "", b = g.node().appendChild(await tp(x, e.labelStyle, !0, !0)), f = b.getBBox();
		if (y(r().flowchart.htmlLabels)) {
			let t = b.children[0], e = h(b);
			f = t.getBoundingClientRect(), e.attr("width", f.width), e.attr("height", f.height);
		}
		e.classData.annotations[0] && (c += f.height + 4, d += f.width);
		let m = e.classData.label;
		void 0 !== e.classData.type && "" !== e.classData.type && (r().flowchart.htmlLabels ? m += "&lt;" + e.classData.type + "&gt;" : m += "<" + e.classData.type + ">");
		let w = g.node().appendChild(await tp(m, e.labelStyle, !0, !0));
		h(w).attr("class", "classTitle");
		let k = w.getBBox();
		if (y(r().flowchart.htmlLabels)) {
			let t = w.children[0], e = h(w);
			k = t.getBoundingClientRect(), e.attr("width", k.width), e.attr("height", k.height);
		}
		c += k.height + 4, k.width > d && (d = k.width);
		let L = [];
		e.classData.members.forEach(async (t) => {
			let a = t.getDisplayDetails(), i = a.displayText;
			r().flowchart.htmlLabels && (i = i.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			let s = g.node().appendChild(await tp(i, a.cssStyle ? a.cssStyle : e.labelStyle, !0, !0)), n = s.getBBox();
			if (y(r().flowchart.htmlLabels)) {
				let t = s.children[0], e = h(s);
				n = t.getBoundingClientRect(), e.attr("width", n.width), e.attr("height", n.height);
			}
			n.width > d && (d = n.width), c += n.height + 4, L.push(s);
		}), c += 8;
		let S = [];
		if (e.classData.methods.forEach(async (t) => {
			let a = t.getDisplayDetails(), i = a.displayText;
			r().flowchart.htmlLabels && (i = i.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			let s = g.node().appendChild(await tp(i, a.cssStyle ? a.cssStyle : e.labelStyle, !0, !0)), n = s.getBBox();
			if (y(r().flowchart.htmlLabels)) {
				let t = s.children[0], e = h(s);
				n = t.getBoundingClientRect(), e.attr("width", n.width), e.attr("height", n.height);
			}
			n.width > d && (d = n.width), c += n.height + 4, S.push(s);
		}), c += 8, p) {
			let t = (d - f.width) / 2;
			h(b).attr("transform", "translate( " + (-1 * d / 2 + t) + ", " + -1 * c / 2 + ")"), u = f.height + 4;
		}
		let _ = (d - k.width) / 2;
		return h(w).attr("transform", "translate( " + (-1 * d / 2 + _) + ", " + (-1 * c / 2 + u) + ")"), u += k.height + 4, l.attr("class", "divider").attr("x1", -d / 2 - a).attr("x2", d / 2 + a).attr("y1", -c / 2 - a + 8 + u).attr("y2", -c / 2 - a + 8 + u), u += 8, L.forEach((t) => {
			h(t).attr("transform", "translate( " + -d / 2 + ", " + (-1 * c / 2 + u + 4) + ")");
			let e = t?.getBBox();
			u += (e?.height ?? 0) + 4;
		}), u += 8, o.attr("class", "divider").attr("x1", -d / 2 - a).attr("x2", d / 2 + a).attr("y1", -c / 2 - a + 8 + u).attr("y2", -c / 2 - a + 8 + u), u += 8, S.forEach((t) => {
			h(t).attr("transform", "translate( " + -d / 2 + ", " + (-1 * c / 2 + u) + ")");
			let e = t?.getBBox();
			u += (e?.height ?? 0) + 4;
		}), n.attr("style", e.style).attr("class", "outer title-state").attr("x", -d / 2 - a).attr("y", -(c / 2) - a).attr("width", d + e.padding).attr("height", c + e.padding), tA(e, n), e.intersect = function(t) {
			return tz(e, t);
		}, s;
	}, "class_box")
}, ee = {}, er = p(async (t, e, a) => {
	let i, s;
	if (e.link) {
		let n;
		"sandbox" === r().securityLevel ? n = "_top" : e.linkTarget && (n = e.linkTarget || "_blank"), i = t.insert("svg:a").attr("xlink:href", e.link).attr("target", n), s = await et[e.shape](i, e, a);
	} else i = s = await et[e.shape](t, e, a);
	return e.tooltip && s.attr("title", e.tooltip), e.class && s.attr("class", "node default " + e.class), ee[e.id] = i, e.haveCallback && ee[e.id].attr("class", ee[e.id].attr("class") + " clickable"), i;
}, "insertNode"), ea = p((e) => {
	let r = ee[e.id];
	t.trace("Transforming node", e.diff, e, "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")");
	let a = e.diff || 0;
	return e.clusterNode ? r.attr("transform", "translate(" + (e.x + a - e.width / 2) + ", " + (e.y - e.height / 2 - 8) + ")") : r.attr("transform", "translate(" + e.x + ", " + e.y + ")"), a;
}, "positionNode");
function ei(t, e, r = !1) {
	let a = "default";
	(t?.classes?.length || 0) > 0 && (a = (t?.classes ?? []).join(" ")), a += " flowchart-label";
	let i = 0, s = "", n;
	switch (t.type) {
		case "round":
			i = 5, s = "rect";
			break;
		case "composite":
			i = 0, s = "composite", n = 0;
			break;
		case "square":
		case "group":
		default:
			s = "rect";
			break;
		case "diamond":
			s = "question";
			break;
		case "hexagon":
			s = "hexagon";
			break;
		case "block_arrow":
			s = "block_arrow";
			break;
		case "odd":
		case "rect_left_inv_arrow":
			s = "rect_left_inv_arrow";
			break;
		case "lean_right":
			s = "lean_right";
			break;
		case "lean_left":
			s = "lean_left";
			break;
		case "trapezoid":
			s = "trapezoid";
			break;
		case "inv_trapezoid":
			s = "inv_trapezoid";
			break;
		case "circle":
			s = "circle";
			break;
		case "ellipse":
			s = "ellipse";
			break;
		case "stadium":
			s = "stadium";
			break;
		case "subroutine":
			s = "subroutine";
			break;
		case "cylinder":
			s = "cylinder";
			break;
		case "doublecircle": s = "doublecircle";
	}
	let l = f(t?.styles ?? []), o = t.label, d = t.size ?? {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		labelStyle: l.labelStyle,
		shape: s,
		labelText: o,
		rx: i,
		ry: i,
		class: a,
		style: l.style,
		id: t.id,
		directions: t.directions,
		width: d.width,
		height: d.height,
		x: d.x,
		y: d.y,
		positioned: r,
		intersect: void 0,
		type: t.type,
		padding: n ?? g()?.block?.padding ?? 0
	};
}
async function es(t, e, r) {
	let a = ei(e, r, !1);
	if ("group" === a.type) return;
	let i = g(), s = await er(t, a, { config: i }), n = s.node().getBBox(), l = r.getBlock(a.id);
	l.size = {
		width: n.width,
		height: n.height,
		x: 0,
		y: 0,
		node: s
	}, r.setBlock(l), s.remove();
}
async function en(t, e, r) {
	let a = ei(e, r, !0);
	if ("space" !== r.getBlock(a.id).type) {
		let r = g();
		await er(t, a, { config: r }), e.intersect = a?.intersect, ea(a);
	}
}
async function el(t, e, r, a) {
	for (let i of e) await a(t, i, r), i.children && await el(t, i.children, r, a);
}
async function eo(t, e, r) {
	await el(t, e, r, es);
}
async function ed(t, e, r) {
	await el(t, e, r, en);
}
async function ec(t, e, r, a, i) {
	let s = new L({
		multigraph: !0,
		compound: !0
	});
	for (let t of (s.setGraph({
		rankdir: "TB",
		nodesep: 10,
		ranksep: 10,
		marginx: 8,
		marginy: 8
	}), r)) t.size && s.setNode(t.id, {
		width: t.size.width,
		height: t.size.height,
		intersect: t.intersect
	});
	for (let r of e) if (r.start && r.end) {
		let e = a.getBlock(r.start), n = a.getBlock(r.end);
		if (e?.size && n?.size) {
			let a = e.size, l = n.size, o = [
				{
					x: a.x,
					y: a.y
				},
				{
					x: a.x + (l.x - a.x) / 2,
					y: a.y + (l.y - a.y) / 2
				},
				{
					x: l.x,
					y: l.y
				}
			];
			t$(t, {
				v: r.start,
				w: r.end,
				name: r.id
			}, {
				...r,
				arrowTypeEnd: r.arrowTypeEnd,
				arrowTypeStart: r.arrowTypeStart,
				points: o,
				classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
			}, void 0, "block", s, i), r.label && (await tk(t, {
				...r,
				label: r.label,
				labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
				arrowTypeEnd: r.arrowTypeEnd,
				arrowTypeStart: r.arrowTypeStart,
				points: o,
				classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
			}), tS({
				...r,
				x: o[1].x,
				y: o[1].y
			}, { originalPath: o }));
		}
	}
}
p(ei, "getNodeFromBlock"), p(es, "calculateBlockSize"), p(en, "insertBlockPositioned"), p(el, "performOperations"), p(eo, "calculateBlockSizes"), p(ed, "insertBlocks"), p(ec, "insertEdges");
var eh = p(function(t, e) {
	return e.db.getClasses();
}, "getClasses"), eg = {
	parser: E,
	db: te,
	renderer: {
		draw: p(async function(e, r, i, s) {
			let { securityLevel: n, block: l } = g(), o = s.db, d;
			"sandbox" === n && (d = h("#i" + r));
			let c = "sandbox" === n ? h(d.nodes()[0].contentDocument.body) : h("body"), y = "sandbox" === n ? c.select(`[id="${r}"]`) : h(`[id="${r}"]`);
			ti(y, [
				"point",
				"circle",
				"cross"
			], s.type, r);
			let u = o.getBlocks(), p = o.getBlocksFlat(), x = o.getEdges(), b = y.insert("g").attr("class", "block");
			await eo(b, u, o);
			let f = tg(o);
			if (await ed(b, u, o), await ec(b, x, p, o, r), f) {
				let e = Math.max(1, Math.round(.125 * (f.width / f.height))), r = f.height + e + 10, i = f.width + 10, { useMaxWidth: s } = l;
				a(y, r, i, !!s), t.debug("Here Bounds", f, f), y.attr("viewBox", `${f.x - 5} ${f.y - 5} ${f.width + 10} ${f.height + 10}`);
			}
		}, "draw"),
		getClasses: eh
	},
	styles: ta
};
export { eg as diagram };
