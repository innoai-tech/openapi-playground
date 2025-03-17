import { g, h, y, x } from "./vendor-min-mermaid~chunk-IPFMBKT6.D8ti7foT.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
import { F as Ff, B as Bf, w as wf, v as vf, L as Lf, M as Mf, H as Hl, i as ih, T as Tf, S as Sf, ak as bc } from "./vendor-min-mermaid~chunk-QJLC67TO.Dw34GYds.chunk.js";
var U = /* @__PURE__ */ function() {
  var t = /* @__PURE__ */ m$1(function(g2, n, a, o) {
    for (a = a || {}, o = g2.length; o--; a[g2[o]] = n) ;
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
  ], s = [
    1,
    9
  ], c = [
    1,
    10
  ], i = [
    1,
    11
  ], u = [
    1,
    12
  ], h2 = [
    1,
    13
  ], d = [
    1,
    14
  ], f = {
    trace: /* @__PURE__ */ m$1(function() {
    }, "trace"),
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
      [
        3,
        3
      ],
      [
        5,
        0
      ],
      [
        5,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        1
      ],
      [
        7,
        1
      ],
      [
        7,
        1
      ],
      [
        9,
        1
      ],
      [
        9,
        2
      ],
      [
        9,
        2
      ],
      [
        9,
        1
      ],
      [
        9,
        1
      ],
      [
        9,
        2
      ]
    ],
    performAction: /* @__PURE__ */ m$1(function(n, a, o, y2, p, l, $) {
      var _ = l.length - 1;
      switch (p) {
        case 1:
          return l[_ - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          l[_ - 1].push(l[_]), this.$ = l[_ - 1];
          break;
        case 4:
        case 5:
          this.$ = l[_];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          y2.setDiagramTitle(/* @__PURE__ */ l[_].substr(6)), this.$ = /* @__PURE__ */ l[_].substr(6);
          break;
        case 9:
          this.$ = /* @__PURE__ */ l[_].trim(), y2.setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = /* @__PURE__ */ l[_].trim(), y2.setAccDescription(this.$);
          break;
        case 12:
          y2.addSection(/* @__PURE__ */ l[_].substr(8)), this.$ = /* @__PURE__ */ l[_].substr(8);
          break;
        case 13:
          y2.addTask(l[_ - 1], l[_]), this.$ = "task";
          break;
      }
    }, "anonymous"),
    table: [
      {
        3: 1,
        4: [
          1,
          2
        ]
      },
      {
        1: [
          3
        ]
      },
      /* @__PURE__ */ t(e, [
        2,
        2
      ], {
        5: 3
      }),
      {
        6: [
          1,
          4
        ],
        7: 5,
        8: [
          1,
          6
        ],
        9: 7,
        10: [
          1,
          8
        ],
        11: s,
        12: c,
        14: i,
        16: u,
        17: h2,
        18: d
      },
      /* @__PURE__ */ t(e, [
        2,
        7
      ], {
        1: [
          2,
          1
        ]
      }),
      /* @__PURE__ */ t(e, [
        2,
        3
      ]),
      {
        9: 15,
        11: s,
        12: c,
        14: i,
        16: u,
        17: h2,
        18: d
      },
      /* @__PURE__ */ t(e, [
        2,
        5
      ]),
      /* @__PURE__ */ t(e, [
        2,
        6
      ]),
      /* @__PURE__ */ t(e, [
        2,
        8
      ]),
      {
        13: [
          1,
          16
        ]
      },
      {
        15: [
          1,
          17
        ]
      },
      /* @__PURE__ */ t(e, [
        2,
        11
      ]),
      /* @__PURE__ */ t(e, [
        2,
        12
      ]),
      {
        19: [
          1,
          18
        ]
      },
      /* @__PURE__ */ t(e, [
        2,
        4
      ]),
      /* @__PURE__ */ t(e, [
        2,
        9
      ]),
      /* @__PURE__ */ t(e, [
        2,
        10
      ]),
      /* @__PURE__ */ t(e, [
        2,
        13
      ])
    ],
    defaultActions: {},
    parseError: /* @__PURE__ */ m$1(function(n, a) {
      if (a.recoverable) this.trace(n);
      else {
        var o = new Error(n);
        throw o.hash = a, o;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ m$1(function(n) {
      var a = this, o = [
        0
      ], y2 = [], p = [
        null
      ], l = [], $ = this.table, _ = "", N = 0, et = 0, nt = 0, Tt = 2, rt = 1, $t = /* @__PURE__ */ l.slice.call(arguments, 1), k = /* @__PURE__ */ Object.create(this.lexer), C = {
        yy: {}
      };
      for (var O in this.yy) Object.prototype.hasOwnProperty.call(this.yy, O) && (C.yy[O] = this.yy[O]);
      k.setInput(n, C.yy), C.yy.lexer = k, C.yy.parser = this, typeof k.yylloc > "u" && (k.yylloc = {});
      var q = k.yylloc;
      l.push(q);
      var Mt = k.options && k.options.ranges;
      typeof C.yy.parseError == "function" ? this.parseError = C.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Gt(v) {
        o.length = o.length - 2 * v, p.length = p.length - v, l.length = l.length - v;
      }
      m$1(Gt, "popStack");
      function St() {
        var v;
        return v = y2.pop() || k.lex() || rt, typeof v != "number" && (v instanceof Array && (y2 = v, v = /* @__PURE__ */ y2.pop()), v = a.symbols_[v] || v), v;
      }
      m$1(St, "lex");
      for (var b, D, P, w, Ht, W, A = {}, B, M, it, j; ; ) {
        if (P = o[o.length - 1], this.defaultActions[P] ? w = this.defaultActions[P] : ((b === null || typeof b > "u") && (b = /* @__PURE__ */ St()), w = $[P] && $[P][b]), typeof w > "u" || !w.length || !w[0]) {
          var X = "";
          j = [];
          for (B in $[P]) this.terminals_[B] && B > Tt && j.push("'" + this.terminals_[B] + "'");
          k.showPosition ? X = "Parse error on line " + (N + 1) + `:
` + k.showPosition() + `
Expecting ` + j.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : X = "Parse error on line " + (N + 1) + ": Unexpected " + (b == rt ? "end of input" : "'" + (this.terminals_[b] || b) + "'"), this.parseError(X, {
            text: k.match,
            token: this.terminals_[b] || b,
            line: k.yylineno,
            loc: q,
            expected: j
          });
        }
        if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + P + ", token: " + b);
        switch (w[0]) {
          case 1:
            o.push(b), p.push(k.yytext), l.push(k.yylloc), o.push(w[1]), b = null, D ? (b = D, D = null) : (et = k.yyleng, _ = k.yytext, N = k.yylineno, q = k.yylloc, nt > 0);
            break;
          case 2:
            if (M = this.productions_[w[1]][1], A.$ = p[p.length - M], A._$ = {
              first_line: l[l.length - (M || 1)].first_line,
              last_line: l[l.length - 1].last_line,
              first_column: l[l.length - (M || 1)].first_column,
              last_column: l[l.length - 1].last_column
            }, Mt && (A._$.range = [
              l[l.length - (M || 1)].range[0],
              l[l.length - 1].range[1]
            ]), W = /* @__PURE__ */ this.performAction.apply(A, /* @__PURE__ */ [
              _,
              et,
              N,
              C.yy,
              w[1],
              p,
              l
            ].concat($t)), typeof W < "u") return W;
            M && (o = /* @__PURE__ */ o.slice(0, -1 * M * 2), p = /* @__PURE__ */ p.slice(0, -1 * M), l = /* @__PURE__ */ l.slice(0, -1 * M)), o.push(this.productions_[w[1]][0]), p.push(A.$), l.push(A._$), it = $[o[o.length - 2]][o[o.length - 1]], o.push(it);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, x2 = /* @__PURE__ */ function() {
    var g2 = {
      EOF: 1,
      parseError: /* @__PURE__ */ m$1(function(a, o) {
        if (this.yy.parser) this.yy.parser.parseError(a, o);
        else throw new Error(a);
      }, "parseError"),
      setInput: /* @__PURE__ */ m$1(function(n, a) {
        return this.yy = a || this.yy || {}, this._input = n, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
          "INITIAL"
        ], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [
          0,
          0
        ]), this.offset = 0, this;
      }, "setInput"),
      input: /* @__PURE__ */ m$1(function() {
        var n = this._input[0];
        this.yytext += n, this.yyleng++, this.offset++, this.match += n, this.matched += n;
        var a = /* @__PURE__ */ n.match(/(?:\r\n?|\n).*/g);
        return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), n;
      }, "input"),
      unput: /* @__PURE__ */ m$1(function(n) {
        var a = n.length, o = /* @__PURE__ */ n.split(/(?:\r\n?|\n)/g);
        this._input = n + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
        var y2 = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
        this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), o.length - 1 && (this.yylineno -= o.length - 1);
        var p = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: o ? (o.length === y2.length ? this.yylloc.first_column : 0) + y2[y2.length - o.length].length - o[0].length : this.yylloc.first_column - a
        }, this.options.ranges && (this.yylloc.range = [
          p[0],
          p[0] + this.yyleng - a
        ]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      more: /* @__PURE__ */ m$1(function() {
        return this._more = true, this;
      }, "more"),
      reject: /* @__PURE__ */ m$1(function() {
        if (this.options.backtrack_lexer) this._backtrack = true;
        else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
        return this;
      }, "reject"),
      less: /* @__PURE__ */ m$1(function(n) {
        this.unput(/* @__PURE__ */ this.match.slice(n));
      }, "less"),
      pastInput: /* @__PURE__ */ m$1(function() {
        var n = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
        return (n.length > 20 ? "..." : "") + n.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: /* @__PURE__ */ m$1(function() {
        var n = this.match;
        return n.length < 20 && (n += /* @__PURE__ */ this._input.substr(0, 20 - n.length)), (n.substr(0, 20) + (n.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: /* @__PURE__ */ m$1(function() {
        var n = /* @__PURE__ */ this.pastInput(), a = /* @__PURE__ */ new Array(n.length + 1).join("-");
        return n + this.upcomingInput() + `
` + a + "^";
      }, "showPosition"),
      test_match: /* @__PURE__ */ m$1(function(n, a) {
        var o, y2, p;
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
        }, this.options.ranges && (p.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), y2 = /* @__PURE__ */ n[0].match(/(?:\r\n?|\n).*/g), y2 && (this.yylineno += y2.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: y2 ? y2[y2.length - 1].length - y2[y2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + n[0].length
        }, this.yytext += n[0], this.match += n[0], this.matches = n, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
          this.offset,
          this.offset += this.yyleng
        ]), this._more = false, this._backtrack = false, this._input = /* @__PURE__ */ this._input.slice(n[0].length), this.matched += n[0], o = /* @__PURE__ */ this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), o) return o;
        if (this._backtrack) {
          for (var l in p) this[l] = p[l];
          return false;
        }
        return false;
      }, "test_match"),
      next: /* @__PURE__ */ m$1(function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var n, a, o, y2;
        this._more || (this.yytext = "", this.match = "");
        for (var p = /* @__PURE__ */ this._currentRules(), l = 0; l < p.length; l++) if (o = /* @__PURE__ */ this._input.match(this.rules[p[l]]), o && (!a || o[0].length > a[0].length)) {
          if (a = o, y2 = l, this.options.backtrack_lexer) {
            if (n = /* @__PURE__ */ this.test_match(o, p[l]), n !== false) return n;
            if (this._backtrack) {
              a = false;
              continue;
            } else return false;
          } else if (!this.options.flex) break;
        }
        return a ? (n = /* @__PURE__ */ this.test_match(a, p[y2]), n !== false ? n : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      lex: /* @__PURE__ */ m$1(function() {
        var a = /* @__PURE__ */ this.next();
        return a || this.lex();
      }, "lex"),
      begin: /* @__PURE__ */ m$1(function(a) {
        this.conditionStack.push(a);
      }, "begin"),
      popState: /* @__PURE__ */ m$1(function() {
        var a = this.conditionStack.length - 1;
        return a > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      _currentRules: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      topState: /* @__PURE__ */ m$1(function(a) {
        return a = this.conditionStack.length - 1 - Math.abs(a || 0), a >= 0 ? this.conditionStack[a] : "INITIAL";
      }, "topState"),
      pushState: /* @__PURE__ */ m$1(function(a) {
        this.begin(a);
      }, "pushState"),
      stateStackSize: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: /* @__PURE__ */ m$1(function(a, o, y2, p) {
        switch (y2) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 10;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            return this.begin("acc_title"), 12;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.begin("acc_descr"), 14;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 18;
          case 16:
            return 19;
          case 17:
            return ":";
          case 18:
            return 6;
          case 19:
            return "INVALID";
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
          rules: [
            12,
            13
          ],
          inclusive: false
        },
        acc_descr: {
          rules: [
            10
          ],
          inclusive: false
        },
        acc_title: {
          rules: [
            8
          ],
          inclusive: false
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
          inclusive: true
        }
      }
    };
    return g2;
  }();
  f.lexer = x2;
  function m() {
    this.yy = {};
  }
  return m$1(m, "Parser"), m.prototype = f, f.Parser = m, new m();
}();
U.parser = U;
var gt = U;
var V = "", Z = [], L = [], R = [], Et = /* @__PURE__ */ m$1(function() {
  Z.length = 0, L.length = 0, V = "", R.length = 0, Sf();
}, "clear"), Ct = /* @__PURE__ */ m$1(function(t) {
  V = t, Z.push(t);
}, "addSection"), Pt = /* @__PURE__ */ m$1(function() {
  return Z;
}, "getSections"), It = /* @__PURE__ */ m$1(function() {
  let t = /* @__PURE__ */ mt(), e = 100, s = 0;
  for (; !t && s < e; ) t = /* @__PURE__ */ mt(), s++;
  return L.push(...R), L;
}, "getTasks"), At = /* @__PURE__ */ m$1(function() {
  let t = [];
  return L.forEach((s) => {
    s.people && t.push(...s.people);
  }), [
    ...new Set(t)
  ].sort();
}, "updateActors"), Vt = /* @__PURE__ */ m$1(function(t, e) {
  let s = /* @__PURE__ */ e.substr(1).split(":"), c = 0, i = [];
  s.length === 1 ? (c = /* @__PURE__ */ Number(s[0]), i = []) : (c = /* @__PURE__ */ Number(s[0]), i = /* @__PURE__ */ s[1].split(","));
  let u = /* @__PURE__ */ i.map((d) => d.trim()), h2 = {
    section: V,
    type: V,
    people: u,
    task: t,
    score: c
  };
  R.push(h2);
}, "addTask"), Ft = /* @__PURE__ */ m$1(function(t) {
  let e = {
    section: V,
    type: V,
    description: t,
    task: t,
    classes: []
  };
  L.push(e);
}, "addTaskOrg"), mt = /* @__PURE__ */ m$1(function() {
  let t = /* @__PURE__ */ m$1(function(s) {
    return R[s].processed;
  }, "compileTask"), e = true;
  for (let [s, c] of R.entries()) t(s), e = e && c.processed;
  return e;
}, "compileTasks"), Lt = /* @__PURE__ */ m$1(function() {
  return At();
}, "getActors"), J = {
  getConfig: /* @__PURE__ */ m$1(() => Hl().journey, "getConfig"),
  clear: Et,
  setDiagramTitle: Mf,
  getDiagramTitle: Lf,
  setAccTitle: vf,
  getAccTitle: wf,
  setAccDescription: Bf,
  getAccDescription: Ff,
  addSection: Ct,
  getSections: Pt,
  getTasks: It,
  addTask: Vt,
  addTaskOrg: Ft,
  getActors: Lt
};
var Rt = /* @__PURE__ */ m$1((t) => `.label {
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
`, "getStyles"), xt = Rt;
var K = /* @__PURE__ */ m$1(function(t, e) {
  return x(t, e);
}, "drawRect"), Nt = /* @__PURE__ */ m$1(function(t, e) {
  let c = /* @__PURE__ */ t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), i = /* @__PURE__ */ t.append("g");
  i.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), i.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function u(f) {
    let x2 = /* @__PURE__ */ bc().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    f.append("path").attr("class", "mouth").attr("d", x2).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
  }
  m$1(u, "smile");
  function h2(f) {
    let x2 = /* @__PURE__ */ bc().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    f.append("path").attr("class", "mouth").attr("d", x2).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
  }
  m$1(h2, "sad");
  function d(f) {
    f.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return m$1(d, "ambivalent"), e.score > 3 ? u(i) : e.score < 3 ? h2(i) : d(i), c;
}, "drawFace"), _t = /* @__PURE__ */ m$1(function(t, e) {
  let s = /* @__PURE__ */ t.append("circle");
  return s.attr("cx", e.cx), s.attr("cy", e.cy), s.attr("class", "actor-" + e.pos), s.attr("fill", e.fill), s.attr("stroke", e.stroke), s.attr("r", e.r), s.class !== void 0 && s.attr("class", s.class), e.title !== void 0 && s.append("title").text(e.title), s;
}, "drawCircle"), bt = /* @__PURE__ */ m$1(function(t, e) {
  return y(t, e);
}, "drawText"), Bt = /* @__PURE__ */ m$1(function(t, e) {
  function s(i, u, h2, d, f) {
    return i + "," + u + " " + (i + h2) + "," + u + " " + (i + h2) + "," + (u + d - f) + " " + (i + h2 - f * 1.2) + "," + (u + d) + " " + i + "," + (u + d);
  }
  m$1(s, "genPoints");
  let c = /* @__PURE__ */ t.append("polygon");
  c.attr("points", /* @__PURE__ */ s(e.x, e.y, 50, 20, 7)), c.attr("class", "labelBox"), e.y = e.y + e.labelMargin, e.x = e.x + 0.5 * e.labelMargin, bt(t, e);
}, "drawLabel"), jt = /* @__PURE__ */ m$1(function(t, e, s) {
  let c = /* @__PURE__ */ t.append("g"), i = /* @__PURE__ */ h();
  i.x = e.x, i.y = e.y, i.fill = e.fill, i.width = s.width * e.taskCount + s.diagramMarginX * (e.taskCount - 1), i.height = s.height, i.class = "journey-section section-type-" + e.num, i.rx = 3, i.ry = 3, K(c, i), vt(s)(e.text, c, i.x, i.y, i.width, i.height, {
    class: "journey-section section-type-" + e.num
  }, s, e.colour);
}, "drawSection"), kt = -1, zt = /* @__PURE__ */ m$1(function(t, e, s) {
  let c = e.x + s.width / 2, i = /* @__PURE__ */ t.append("g");
  kt++;
  let u = 300 + 5 * 30;
  i.append("line").attr("id", "task" + kt).attr("x1", c).attr("y1", e.y).attr("x2", c).attr("y2", u).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Nt(i, {
    cx: c,
    cy: 300 + (5 - e.score) * 30,
    score: e.score
  });
  let h$1 = /* @__PURE__ */ h();
  h$1.x = e.x, h$1.y = e.y, h$1.fill = e.fill, h$1.width = s.width, h$1.height = s.height, h$1.class = "task task-type-" + e.num, h$1.rx = 3, h$1.ry = 3, K(i, h$1);
  let d = e.x + 14;
  e.people.forEach((f) => {
    let x2 = e.actors[f].color, m = {
      cx: d,
      cy: e.y,
      r: 7,
      fill: x2,
      stroke: "#000",
      title: f,
      pos: e.actors[f].position
    };
    _t(i, m), d += 10;
  }), vt(s)(e.task, i, h$1.x, h$1.y, h$1.width, h$1.height, {
    class: "task"
  }, s, e.colour);
}, "drawTask"), Yt = /* @__PURE__ */ m$1(function(t, e) {
  g(t, e);
}, "drawBackgroundRect"), vt = /* @__PURE__ */ function() {
  function t(i, u, h2, d, f, x2, m, g2) {
    let n = /* @__PURE__ */ u.append("text").attr("x", h2 + f / 2).attr("y", d + x2 / 2 + 5).style("font-color", g2).style("text-anchor", "middle").text(i);
    c(n, m);
  }
  m$1(t, "byText");
  function e(i, u, h2, d, f, x2, m, g2, n) {
    let { taskFontSize: a, taskFontFamily: o } = g2, y2 = /* @__PURE__ */ i.split(/<br\s*\/?>/gi);
    for (let p = 0; p < y2.length; p++) {
      let l = p * a - a * (y2.length - 1) / 2, $ = /* @__PURE__ */ u.append("text").attr("x", h2 + f / 2).attr("y", d).attr("fill", n).style("text-anchor", "middle").style("font-size", a).style("font-family", o);
      $.append("tspan").attr("x", h2 + f / 2).attr("dy", l).text(y2[p]), $.attr("y", d + x2 / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), c($, m);
    }
  }
  m$1(e, "byTspan");
  function s(i, u, h2, d, f, x2, m, g2) {
    let n = /* @__PURE__ */ u.append("switch"), o = /* @__PURE__ */ n.append("foreignObject").attr("x", h2).attr("y", d).attr("width", f).attr("height", x2).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    o.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(i), e(i, n, h2, d, f, x2, m, g2), c(o, m);
  }
  m$1(s, "byFo");
  function c(i, u) {
    for (let h2 in u) h2 in u && i.attr(h2, u[h2]);
  }
  return m$1(c, "_setTextAttrs"), function(i) {
    return i.textPlacement === "fo" ? s : i.textPlacement === "old" ? t : e;
  };
}(), Ot = /* @__PURE__ */ m$1(function(t) {
  t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics"), F = {
  drawRect: K,
  drawCircle: _t,
  drawSection: jt,
  drawText: bt,
  drawLabel: Bt,
  drawTask: zt,
  drawBackgroundRect: Yt,
  initGraphics: Ot
};
var qt = /* @__PURE__ */ m$1(function(t) {
  Object.keys(t).forEach(function(s) {
    Y[s] = t[s];
  });
}, "setConf"), E = {};
function Dt(t) {
  let e = Hl().journey, s = 60;
  Object.keys(E).forEach((c) => {
    let i = E[c].color, u = {
      cx: 20,
      cy: s,
      r: 7,
      fill: i,
      stroke: "#000",
      pos: E[c].position
    };
    F.drawCircle(t, u);
    let h2 = {
      x: 40,
      y: s + 7,
      fill: "#666",
      text: c,
      textMargin: e.boxTextMargin | 5
    };
    F.drawText(t, h2), s += 20;
  });
}
m$1(Dt, "drawActorLegend");
var Y = Hl().journey, I = Y.leftMargin, Wt = /* @__PURE__ */ m$1(function(t, e, s, c) {
  let i = Hl().journey, u = Hl().securityLevel, h2;
  u === "sandbox" && (h2 = /* @__PURE__ */ ih("#i" + e));
  let d = u === "sandbox" ? ih(h2.nodes()[0].contentDocument.body) : ih("body");
  T.init();
  let f = /* @__PURE__ */ d.select("#" + e);
  F.initGraphics(f);
  let x2 = /* @__PURE__ */ c.db.getTasks(), m = /* @__PURE__ */ c.db.getDiagramTitle(), g2 = /* @__PURE__ */ c.db.getActors();
  for (let l in E) delete E[l];
  let n = 0;
  g2.forEach((l) => {
    E[l] = {
      color: i.actorColours[n % i.actorColours.length],
      position: n
    }, n++;
  }), Dt(f), T.insert(0, 0, I, Object.keys(E).length * 50), Xt(f, x2, 0);
  let a = /* @__PURE__ */ T.getBounds();
  m && f.append("text").text(m).attr("x", I).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 25);
  let o = a.stopy - a.starty + 2 * i.diagramMarginY, y2 = I + a.stopx + 2 * i.diagramMarginX;
  Tf(f, o, y2, i.useMaxWidth), f.append("line").attr("x1", I).attr("y1", i.height * 4).attr("x2", y2 - I - 4).attr("y2", i.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  let p = m ? 70 : 0;
  f.attr("viewBox", `${a.startx} -25 ${y2} ${o + p}`), f.attr("preserveAspectRatio", "xMinYMin meet"), f.attr("height", o + p + 25);
}, "draw"), T = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  init: /* @__PURE__ */ m$1(function() {
    this.sequenceItems = [], this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0;
  }, "init"),
  updateVal: /* @__PURE__ */ m$1(function(t, e, s, c) {
    t[e] === void 0 ? t[e] = s : t[e] = /* @__PURE__ */ c(s, t[e]);
  }, "updateVal"),
  updateBounds: /* @__PURE__ */ m$1(function(t, e, s, c) {
    let i = Hl().journey, u = this, h2 = 0;
    function d(f) {
      return m$1(function(m) {
        h2++;
        let g2 = u.sequenceItems.length - h2 + 1;
        u.updateVal(m, "starty", e - g2 * i.boxMargin, Math.min), u.updateVal(m, "stopy", c + g2 * i.boxMargin, Math.max), u.updateVal(T.data, "startx", t - g2 * i.boxMargin, Math.min), u.updateVal(T.data, "stopx", s + g2 * i.boxMargin, Math.max), f !== "activation" && (u.updateVal(m, "startx", t - g2 * i.boxMargin, Math.min), u.updateVal(m, "stopx", s + g2 * i.boxMargin, Math.max), u.updateVal(T.data, "starty", e - g2 * i.boxMargin, Math.min), u.updateVal(T.data, "stopy", c + g2 * i.boxMargin, Math.max));
      }, "updateItemBounds");
    }
    m$1(d, "updateFn"), this.sequenceItems.forEach(/* @__PURE__ */ d());
  }, "updateBounds"),
  insert: /* @__PURE__ */ m$1(function(t, e, s, c) {
    let i = /* @__PURE__ */ Math.min(t, s), u = /* @__PURE__ */ Math.max(t, s), h2 = /* @__PURE__ */ Math.min(e, c), d = /* @__PURE__ */ Math.max(e, c);
    this.updateVal(T.data, "startx", i, Math.min), this.updateVal(T.data, "starty", h2, Math.min), this.updateVal(T.data, "stopx", u, Math.max), this.updateVal(T.data, "stopy", d, Math.max), this.updateBounds(i, h2, u, d);
  }, "insert"),
  bumpVerticalPos: /* @__PURE__ */ m$1(function(t) {
    this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
  }, "bumpVerticalPos"),
  getVerticalPos: /* @__PURE__ */ m$1(function() {
    return this.verticalPos;
  }, "getVerticalPos"),
  getBounds: /* @__PURE__ */ m$1(function() {
    return this.data;
  }, "getBounds")
}, Q = Y.sectionFills, wt = Y.sectionColours, Xt = /* @__PURE__ */ m$1(function(t, e, s) {
  let c = Hl().journey, i = "", u = c.height * 2 + c.diagramMarginY, h2 = s + u, d = 0, f = "#CCC", x2 = "black", m = 0;
  for (let [g2, n] of e.entries()) {
    if (i !== n.section) {
      f = Q[d % Q.length], m = d % Q.length, x2 = wt[d % wt.length];
      let o = 0, y2 = n.section;
      for (let l = g2; l < e.length && e[l].section == y2; l++) o = o + 1;
      let p = {
        x: g2 * c.taskMargin + g2 * c.width + I,
        y: 50,
        text: n.section,
        fill: f,
        num: m,
        colour: x2,
        taskCount: o
      };
      F.drawSection(t, p, c), i = n.section, d++;
    }
    let a = /* @__PURE__ */ n.people.reduce((o, y2) => (E[y2] && (o[y2] = E[y2]), o), {});
    n.x = g2 * c.taskMargin + g2 * c.width + I, n.y = h2, n.width = c.diagramMarginX, n.height = c.diagramMarginY, n.colour = x2, n.fill = f, n.num = m, n.actors = a, F.drawTask(t, n, c), T.insert(n.x, n.y, n.x + n.width + c.taskMargin, 300 + 5 * 30);
  }
}, "drawTasks"), tt = {
  setConf: qt,
  draw: Wt
};
var me = {
  parser: gt,
  db: J,
  renderer: tt,
  styles: xt,
  init: /* @__PURE__ */ m$1((t) => {
    tt.setConf(t.journey), J.clear();
  }, "init")
};
export {
  me as diagram
};
