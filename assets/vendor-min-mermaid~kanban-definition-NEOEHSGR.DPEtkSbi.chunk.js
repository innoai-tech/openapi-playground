import { d } from "./vendor-min-mermaid~chunk-3YFHLAX3.BuB3QxH5.chunk.js";
import { g as gr, m as mr } from "./vendor-min-mermaid~chunk-7LIB5WBN.mzbHd62r.chunk.js";
import { r as ro, b as bf, N as Nf } from "./vendor-min-mermaid~chunk-E7A2AWYO.9sfNWd-b.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
import { W as Wl, D as De, d as dl, t as tt, z as zl, al as Wt, am as A, an as R } from "./vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js";
var ie = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ m$1(function(v, i, n, s) {
    for (n = n || {}, s = v.length; s--; n[v[s]] = i) ;
    return n;
  }, "o"), u = [
    1,
    4
  ], p = [
    1,
    13
  ], r = [
    1,
    12
  ], d2 = [
    1,
    15
  ], _ = [
    1,
    16
  ], b = [
    1,
    20
  ], l = [
    1,
    19
  ], L = [
    6,
    7,
    8
  ], C = [
    1,
    26
  ], g = [
    1,
    24
  ], w = [
    1,
    25
  ], k = [
    6,
    7,
    11
  ], K = [
    1,
    31
  ], N = [
    6,
    7,
    11,
    24
  ], M = [
    1,
    6,
    13,
    16,
    17,
    20,
    23
  ], y = [
    1,
    35
  ], A2 = [
    1,
    36
  ], O = [
    1,
    6,
    7,
    11,
    13,
    16,
    17,
    20,
    23
  ], U = [
    1,
    38
  ], T = {
    trace: /* @__PURE__ */ m$1(function() {
    }, "trace"),
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
      [
        3,
        1
      ],
      [
        3,
        2
      ],
      [
        5,
        1
      ],
      [
        5,
        2
      ],
      [
        5,
        2
      ],
      [
        4,
        2
      ],
      [
        4,
        3
      ],
      [
        10,
        1
      ],
      [
        10,
        1
      ],
      [
        10,
        1
      ],
      [
        10,
        2
      ],
      [
        10,
        2
      ],
      [
        9,
        3
      ],
      [
        9,
        2
      ],
      [
        12,
        3
      ],
      [
        12,
        2
      ],
      [
        12,
        2
      ],
      [
        12,
        2
      ],
      [
        12,
        1
      ],
      [
        12,
        2
      ],
      [
        12,
        1
      ],
      [
        12,
        1
      ],
      [
        12,
        1
      ],
      [
        12,
        1
      ],
      [
        14,
        1
      ],
      [
        14,
        1
      ],
      [
        19,
        3
      ],
      [
        18,
        1
      ],
      [
        18,
        4
      ],
      [
        15,
        2
      ],
      [
        15,
        1
      ]
    ],
    performAction: /* @__PURE__ */ m$1(function(i, n, s, a, h, t, R2) {
      var c = t.length - 1;
      switch (h) {
        case 6:
        case 7:
          return a;
        case 8:
          a.getLogger().trace("Stop NL ");
          break;
        case 9:
          a.getLogger().trace("Stop EOF ");
          break;
        case 11:
          a.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          a.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          a.getLogger().info("Node: ", t[c - 1].id), a.addNode(t[c - 2].length, t[c - 1].id, t[c - 1].descr, t[c - 1].type, t[c]);
          break;
        case 16:
          a.getLogger().info("Node: ", t[c].id), a.addNode(t[c - 1].length, t[c].id, t[c].descr, t[c].type);
          break;
        case 17:
          a.getLogger().trace("Icon: ", t[c]), a.decorateNode({
            icon: t[c]
          });
          break;
        case 18:
        case 23:
          a.decorateNode({
            class: t[c]
          });
          break;
        case 19:
          a.getLogger().trace("SPACELIST");
          break;
        case 20:
          a.getLogger().trace("Node: ", t[c - 1].id), a.addNode(0, t[c - 1].id, t[c - 1].descr, t[c - 1].type, t[c]);
          break;
        case 21:
          a.getLogger().trace("Node: ", t[c].id), a.addNode(0, t[c].id, t[c].descr, t[c].type);
          break;
        case 22:
          a.decorateNode({
            icon: t[c]
          });
          break;
        case 27:
          a.getLogger().trace("node found ..", t[c - 2]), this.$ = {
            id: t[c - 1],
            descr: t[c - 1],
            type: /* @__PURE__ */ a.getType(t[c - 2], t[c])
          };
          break;
        case 28:
          this.$ = {
            id: t[c],
            descr: t[c],
            type: 0
          };
          break;
        case 29:
          a.getLogger().trace("node found ..", t[c - 3]), this.$ = {
            id: t[c - 3],
            descr: t[c - 1],
            type: /* @__PURE__ */ a.getType(t[c - 2], t[c])
          };
          break;
        case 30:
          this.$ = t[c - 1] + t[c];
          break;
        case 31:
          this.$ = t[c];
          break;
      }
    }, "anonymous"),
    table: [
      {
        3: 1,
        4: 2,
        5: 3,
        6: [
          1,
          5
        ],
        8: u
      },
      {
        1: [
          3
        ]
      },
      {
        1: [
          2,
          1
        ]
      },
      {
        4: 6,
        6: [
          1,
          7
        ],
        7: [
          1,
          8
        ],
        8: u
      },
      {
        6: p,
        7: [
          1,
          10
        ],
        9: 9,
        12: 11,
        13: r,
        14: 14,
        16: d2,
        17: _,
        18: 17,
        19: 18,
        20: b,
        23: l
      },
      /* @__PURE__ */ e(L, [
        2,
        3
      ]),
      {
        1: [
          2,
          2
        ]
      },
      /* @__PURE__ */ e(L, [
        2,
        4
      ]),
      /* @__PURE__ */ e(L, [
        2,
        5
      ]),
      {
        1: [
          2,
          6
        ],
        6: p,
        12: 21,
        13: r,
        14: 14,
        16: d2,
        17: _,
        18: 17,
        19: 18,
        20: b,
        23: l
      },
      {
        6: p,
        9: 22,
        12: 11,
        13: r,
        14: 14,
        16: d2,
        17: _,
        18: 17,
        19: 18,
        20: b,
        23: l
      },
      {
        6: C,
        7: g,
        10: 23,
        11: w
      },
      /* @__PURE__ */ e(k, [
        2,
        24
      ], {
        18: 17,
        19: 18,
        14: 27,
        16: [
          1,
          28
        ],
        17: [
          1,
          29
        ],
        20: b,
        23: l
      }),
      /* @__PURE__ */ e(k, [
        2,
        19
      ]),
      /* @__PURE__ */ e(k, [
        2,
        21
      ], {
        15: 30,
        24: K
      }),
      /* @__PURE__ */ e(k, [
        2,
        22
      ]),
      /* @__PURE__ */ e(k, [
        2,
        23
      ]),
      /* @__PURE__ */ e(N, [
        2,
        25
      ]),
      /* @__PURE__ */ e(N, [
        2,
        26
      ]),
      /* @__PURE__ */ e(N, [
        2,
        28
      ], {
        20: [
          1,
          32
        ]
      }),
      {
        21: [
          1,
          33
        ]
      },
      {
        6: C,
        7: g,
        10: 34,
        11: w
      },
      {
        1: [
          2,
          7
        ],
        6: p,
        12: 21,
        13: r,
        14: 14,
        16: d2,
        17: _,
        18: 17,
        19: 18,
        20: b,
        23: l
      },
      /* @__PURE__ */ e(M, [
        2,
        14
      ], {
        7: y,
        11: A2
      }),
      /* @__PURE__ */ e(O, [
        2,
        8
      ]),
      /* @__PURE__ */ e(O, [
        2,
        9
      ]),
      /* @__PURE__ */ e(O, [
        2,
        10
      ]),
      /* @__PURE__ */ e(k, [
        2,
        16
      ], {
        15: 37,
        24: K
      }),
      /* @__PURE__ */ e(k, [
        2,
        17
      ]),
      /* @__PURE__ */ e(k, [
        2,
        18
      ]),
      /* @__PURE__ */ e(k, [
        2,
        20
      ], {
        24: U
      }),
      /* @__PURE__ */ e(N, [
        2,
        31
      ]),
      {
        21: [
          1,
          39
        ]
      },
      {
        22: [
          1,
          40
        ]
      },
      /* @__PURE__ */ e(M, [
        2,
        13
      ], {
        7: y,
        11: A2
      }),
      /* @__PURE__ */ e(O, [
        2,
        11
      ]),
      /* @__PURE__ */ e(O, [
        2,
        12
      ]),
      /* @__PURE__ */ e(k, [
        2,
        15
      ], {
        24: U
      }),
      /* @__PURE__ */ e(N, [
        2,
        30
      ]),
      {
        22: [
          1,
          41
        ]
      },
      /* @__PURE__ */ e(N, [
        2,
        27
      ]),
      /* @__PURE__ */ e(N, [
        2,
        29
      ])
    ],
    defaultActions: {
      2: [
        2,
        1
      ],
      6: [
        2,
        2
      ]
    },
    parseError: /* @__PURE__ */ m$1(function(i, n) {
      if (n.recoverable) this.trace(i);
      else {
        var s = new Error(i);
        throw s.hash = n, s;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ m$1(function(i) {
      var n = this, s = [
        0
      ], a = [], h = [
        null
      ], t = [], R2 = this.table, c = "", z = 0, ae = 0, ce = 0, De2 = 2, le = 1, xe = /* @__PURE__ */ t.slice.call(arguments, 1), m = /* @__PURE__ */ Object.create(this.lexer), P = {
        yy: {}
      };
      for (var q in this.yy) Object.prototype.hasOwnProperty.call(this.yy, q) && (P.yy[q] = this.yy[q]);
      m.setInput(i, P.yy), P.yy.lexer = m, P.yy.parser = this, typeof m.yylloc > "u" && (m.yylloc = {});
      var Q = m.yylloc;
      t.push(Q);
      var Le = m.options && m.options.ranges;
      typeof P.yy.parseError == "function" ? this.parseError = P.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Ke(S) {
        s.length = s.length - 2 * S, h.length = h.length - S, t.length = t.length - S;
      }
      m$1(Ke, "popStack");
      function Oe() {
        var S;
        return S = a.pop() || m.lex() || le, typeof S != "number" && (S instanceof Array && (a = S, S = /* @__PURE__ */ a.pop()), S = n.symbols_[S] || S), S;
      }
      m$1(Oe, "lex");
      for (var E, Z, j, D, Ue, $, G = {}, X, I, he, Y; ; ) {
        if (j = s[s.length - 1], this.defaultActions[j] ? D = this.defaultActions[j] : ((E === null || typeof E > "u") && (E = /* @__PURE__ */ Oe()), D = R2[j] && R2[j][E]), typeof D > "u" || !D.length || !D[0]) {
          var ee = "";
          Y = [];
          for (X in R2[j]) this.terminals_[X] && X > De2 && Y.push("'" + this.terminals_[X] + "'");
          m.showPosition ? ee = "Parse error on line " + (z + 1) + `:
` + m.showPosition() + `
Expecting ` + Y.join(", ") + ", got '" + (this.terminals_[E] || E) + "'" : ee = "Parse error on line " + (z + 1) + ": Unexpected " + (E == le ? "end of input" : "'" + (this.terminals_[E] || E) + "'"), this.parseError(ee, {
            text: m.match,
            token: this.terminals_[E] || E,
            line: m.yylineno,
            loc: Q,
            expected: Y
          });
        }
        if (D[0] instanceof Array && D.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + j + ", token: " + E);
        switch (D[0]) {
          case 1:
            s.push(E), h.push(m.yytext), t.push(m.yylloc), s.push(D[1]), E = null, Z ? (E = Z, Z = null) : (ae = m.yyleng, c = m.yytext, z = m.yylineno, Q = m.yylloc, ce > 0);
            break;
          case 2:
            if (I = this.productions_[D[1]][1], G.$ = h[h.length - I], G._$ = {
              first_line: t[t.length - (I || 1)].first_line,
              last_line: t[t.length - 1].last_line,
              first_column: t[t.length - (I || 1)].first_column,
              last_column: t[t.length - 1].last_column
            }, Le && (G._$.range = [
              t[t.length - (I || 1)].range[0],
              t[t.length - 1].range[1]
            ]), $ = /* @__PURE__ */ this.performAction.apply(G, /* @__PURE__ */ [
              c,
              ae,
              z,
              P.yy,
              D[1],
              h,
              t
            ].concat(xe)), typeof $ < "u") return $;
            I && (s = /* @__PURE__ */ s.slice(0, -1 * I * 2), h = /* @__PURE__ */ h.slice(0, -1 * I), t = /* @__PURE__ */ t.slice(0, -1 * I)), s.push(this.productions_[D[1]][0]), h.push(G.$), t.push(G._$), he = R2[s[s.length - 2]][s[s.length - 1]], s.push(he);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, J = /* @__PURE__ */ function() {
    var v = {
      EOF: 1,
      parseError: /* @__PURE__ */ m$1(function(n, s) {
        if (this.yy.parser) this.yy.parser.parseError(n, s);
        else throw new Error(n);
      }, "parseError"),
      setInput: /* @__PURE__ */ m$1(function(i, n) {
        return this.yy = n || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
        var i = this._input[0];
        this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
        var n = /* @__PURE__ */ i.match(/(?:\r\n?|\n).*/g);
        return n ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), i;
      }, "input"),
      unput: /* @__PURE__ */ m$1(function(i) {
        var n = i.length, s = /* @__PURE__ */ i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - n), this.offset -= n;
        var a = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
        this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), s.length - 1 && (this.yylineno -= s.length - 1);
        var h = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: s ? (s.length === a.length ? this.yylloc.first_column : 0) + a[a.length - s.length].length - s[0].length : this.yylloc.first_column - n
        }, this.options.ranges && (this.yylloc.range = [
          h[0],
          h[0] + this.yyleng - n
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
      less: /* @__PURE__ */ m$1(function(i) {
        this.unput(/* @__PURE__ */ this.match.slice(i));
      }, "less"),
      pastInput: /* @__PURE__ */ m$1(function() {
        var i = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
        return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: /* @__PURE__ */ m$1(function() {
        var i = this.match;
        return i.length < 20 && (i += /* @__PURE__ */ this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: /* @__PURE__ */ m$1(function() {
        var i = /* @__PURE__ */ this.pastInput(), n = /* @__PURE__ */ new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + n + "^";
      }, "showPosition"),
      test_match: /* @__PURE__ */ m$1(function(i, n) {
        var s, a, h;
        if (this.options.backtrack_lexer && (h = {
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
        }, this.options.ranges && (h.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), a = /* @__PURE__ */ i[0].match(/(?:\r\n?|\n).*/g), a && (this.yylineno += a.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
          this.offset,
          this.offset += this.yyleng
        ]), this._more = false, this._backtrack = false, this._input = /* @__PURE__ */ this._input.slice(i[0].length), this.matched += i[0], s = /* @__PURE__ */ this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), s) return s;
        if (this._backtrack) {
          for (var t in h) this[t] = h[t];
          return false;
        }
        return false;
      }, "test_match"),
      next: /* @__PURE__ */ m$1(function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var i, n, s, a;
        this._more || (this.yytext = "", this.match = "");
        for (var h = /* @__PURE__ */ this._currentRules(), t = 0; t < h.length; t++) if (s = /* @__PURE__ */ this._input.match(this.rules[h[t]]), s && (!n || s[0].length > n[0].length)) {
          if (n = s, a = t, this.options.backtrack_lexer) {
            if (i = /* @__PURE__ */ this.test_match(s, h[t]), i !== false) return i;
            if (this._backtrack) {
              n = false;
              continue;
            } else return false;
          } else if (!this.options.flex) break;
        }
        return n ? (i = /* @__PURE__ */ this.test_match(n, h[a]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      lex: /* @__PURE__ */ m$1(function() {
        var n = /* @__PURE__ */ this.next();
        return n || this.lex();
      }, "lex"),
      begin: /* @__PURE__ */ m$1(function(n) {
        this.conditionStack.push(n);
      }, "begin"),
      popState: /* @__PURE__ */ m$1(function() {
        var n = this.conditionStack.length - 1;
        return n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      _currentRules: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      topState: /* @__PURE__ */ m$1(function(n) {
        return n = this.conditionStack.length - 1 - Math.abs(n || 0), n >= 0 ? this.conditionStack[n] : "INITIAL";
      }, "topState"),
      pushState: /* @__PURE__ */ m$1(function(n) {
        this.begin(n);
      }, "pushState"),
      stateStackSize: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: /* @__PURE__ */ m$1(function(n, s, a, h) {
        switch (a) {
          case 0:
            return this.pushState("shapeData"), s.yytext = "", 24;
          case 1:
            return this.pushState("shapeDataStr"), 24;
          case 2:
            return this.popState(), 24;
          case 3:
            let R2 = /\n\s*/g;
            return s.yytext = /* @__PURE__ */ s.yytext.replace(R2, "<br/>"), 24;
          case 4:
            return 24;
          case 5:
            this.popState();
            break;
          case 6:
            return n.getLogger().trace("Found comment", s.yytext), 6;
          case 7:
            return 8;
          case 8:
            this.begin("CLASS");
            break;
          case 9:
            return this.popState(), 17;
          case 10:
            this.popState();
            break;
          case 11:
            n.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 12:
            return n.getLogger().trace("SPACELINE"), 6;
          case 13:
            return 7;
          case 14:
            return 16;
          case 15:
            n.getLogger().trace("end icon"), this.popState();
            break;
          case 16:
            return n.getLogger().trace("Exploding node"), this.begin("NODE"), 20;
          case 17:
            return n.getLogger().trace("Cloud"), this.begin("NODE"), 20;
          case 18:
            return n.getLogger().trace("Explosion Bang"), this.begin("NODE"), 20;
          case 19:
            return n.getLogger().trace("Cloud Bang"), this.begin("NODE"), 20;
          case 20:
            return this.begin("NODE"), 20;
          case 21:
            return this.begin("NODE"), 20;
          case 22:
            return this.begin("NODE"), 20;
          case 23:
            return this.begin("NODE"), 20;
          case 24:
            return 13;
          case 25:
            return 23;
          case 26:
            return 11;
          case 27:
            this.begin("NSTR2");
            break;
          case 28:
            return "NODE_DESCR";
          case 29:
            this.popState();
            break;
          case 30:
            n.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 31:
            return n.getLogger().trace("description:", s.yytext), "NODE_DESCR";
          case 32:
            this.popState();
            break;
          case 33:
            return this.popState(), n.getLogger().trace("node end ))"), "NODE_DEND";
          case 34:
            return this.popState(), n.getLogger().trace("node end )"), "NODE_DEND";
          case 35:
            return this.popState(), n.getLogger().trace("node end ...", s.yytext), "NODE_DEND";
          case 36:
            return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
          case 37:
            return this.popState(), n.getLogger().trace("node end (-"), "NODE_DEND";
          case 38:
            return this.popState(), n.getLogger().trace("node end (-"), "NODE_DEND";
          case 39:
            return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
          case 40:
            return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
          case 41:
            return n.getLogger().trace("Long description:", s.yytext), 21;
          case 42:
            return n.getLogger().trace("Long description:", s.yytext), 21;
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
          inclusive: false
        },
        shapeDataStr: {
          rules: [
            2,
            3
          ],
          inclusive: false
        },
        shapeData: {
          rules: [
            1,
            4,
            5
          ],
          inclusive: false
        },
        CLASS: {
          rules: [
            9,
            10
          ],
          inclusive: false
        },
        ICON: {
          rules: [
            14,
            15
          ],
          inclusive: false
        },
        NSTR2: {
          rules: [
            28,
            29
          ],
          inclusive: false
        },
        NSTR: {
          rules: [
            31,
            32
          ],
          inclusive: false
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
          inclusive: false
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
          inclusive: true
        }
      }
    };
    return v;
  }();
  T.lexer = J;
  function H() {
    this.yy = {};
  }
  return m$1(H, "Parser"), H.prototype = T, T.Parser = H, new H();
}();
ie.parser = ie;
var ke = ie;
var x = [], se = [], re = 0, oe = {}, ve = /* @__PURE__ */ m$1(() => {
  x = [], se = [], re = 0, oe = {};
}, "clear"), Ce = /* @__PURE__ */ m$1((e) => {
  if (x.length === 0) return null;
  let u = x[0].level, p = null;
  for (let r = x.length - 1; r >= 0; r--) if (x[r].level === u && !p && (p = x[r]), x[r].level < u) throw new Error('Items without section detected, found section ("' + x[r].label + '")');
  return e === (p == null ? void 0 : p.level) ? null : p;
}, "getSection"), Ee = /* @__PURE__ */ m$1(function() {
  return se;
}, "getSections"), Ie = /* @__PURE__ */ m$1(function() {
  let e = [], u = [], p = /* @__PURE__ */ Ee(), r = /* @__PURE__ */ Wl();
  for (let d2 of p) {
    let _ = {
      id: d2.id,
      label: /* @__PURE__ */ De(d2.label ?? "", r),
      isGroup: true,
      ticket: d2.ticket,
      shape: "kanbanSection",
      level: d2.level,
      look: r.look
    };
    u.push(_);
    let b = /* @__PURE__ */ x.filter((l) => l.parentId === d2.id);
    for (let l of b) {
      let L = {
        id: l.id,
        parentId: d2.id,
        label: /* @__PURE__ */ De(l.label ?? "", r),
        isGroup: false,
        ticket: l == null ? void 0 : l.ticket,
        priority: l == null ? void 0 : l.priority,
        assigned: l == null ? void 0 : l.assigned,
        icon: l == null ? void 0 : l.icon,
        shape: "kanbanItem",
        level: l.level,
        rx: 5,
        ry: 5,
        cssStyles: [
          "text-align: left"
        ]
      };
      u.push(L);
    }
  }
  return {
    nodes: u,
    edges: e,
    other: {},
    config: /* @__PURE__ */ Wl()
  };
}, "getData"), we = /* @__PURE__ */ m$1((e, u, p, r, d2) => {
  var _a, _b;
  let _ = /* @__PURE__ */ Wl(), b = ((_a = _.mindmap) == null ? void 0 : _a.padding) ?? dl.mindmap.padding;
  switch (r) {
    case f.ROUNDED_RECT:
    case f.RECT:
    case f.HEXAGON:
      b *= 2;
  }
  let l = {
    id: De(u, _) || "kbn" + re++,
    level: e,
    label: /* @__PURE__ */ De(p, _),
    width: ((_b = _.mindmap) == null ? void 0 : _b.maxNodeWidth) ?? dl.mindmap.maxNodeWidth,
    padding: b,
    isGroup: false
  };
  if (d2 !== void 0) {
    let C;
    d2.includes(`
`) ? C = d2 + `
` : C = `{
` + d2 + `
}`;
    let g = /* @__PURE__ */ gr(C, {
      schema: mr
    });
    if (g.shape && (g.shape !== g.shape.toLowerCase() || g.shape.includes("_"))) throw new Error(`No such shape: ${g.shape}. Shape names should be lowercase.`);
    (g == null ? void 0 : g.shape) && g.shape === "kanbanItem" && (l.shape = g == null ? void 0 : g.shape), (g == null ? void 0 : g.label) && (l.label = g == null ? void 0 : g.label), (g == null ? void 0 : g.icon) && (l.icon = g == null ? void 0 : g.icon.toString()), (g == null ? void 0 : g.assigned) && (l.assigned = g == null ? void 0 : g.assigned.toString()), (g == null ? void 0 : g.ticket) && (l.ticket = g == null ? void 0 : g.ticket.toString()), (g == null ? void 0 : g.priority) && (l.priority = g == null ? void 0 : g.priority);
  }
  let L = /* @__PURE__ */ Ce(e);
  L ? l.parentId = L.id || "kbn" + re++ : se.push(l), x.push(l);
}, "addNode"), f = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, Ae = /* @__PURE__ */ m$1((e, u) => {
  switch (tt.debug("In get type", e, u), e) {
    case "[":
      return f.RECT;
    case "(":
      return u === ")" ? f.ROUNDED_RECT : f.CLOUD;
    case "((":
      return f.CIRCLE;
    case ")":
      return f.CLOUD;
    case "))":
      return f.BANG;
    case "{{":
      return f.HEXAGON;
    default:
      return f.DEFAULT;
  }
}, "getType"), Te = /* @__PURE__ */ m$1((e, u) => {
  oe[e] = u;
}, "setElementForId"), Re = /* @__PURE__ */ m$1((e) => {
  if (!e) return;
  let u = /* @__PURE__ */ Wl(), p = x[x.length - 1];
  e.icon && (p.icon = /* @__PURE__ */ De(e.icon, u)), e.class && (p.cssClasses = /* @__PURE__ */ De(e.class, u));
}, "decorateNode"), Pe = /* @__PURE__ */ m$1((e) => {
  switch (e) {
    case f.DEFAULT:
      return "no-border";
    case f.RECT:
      return "rect";
    case f.ROUNDED_RECT:
      return "rounded-rect";
    case f.CIRCLE:
      return "circle";
    case f.CLOUD:
      return "cloud";
    case f.BANG:
      return "bang";
    case f.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
}, "type2Str"), je = /* @__PURE__ */ m$1(() => tt, "getLogger"), Be = /* @__PURE__ */ m$1((e) => oe[e], "getElementById"), Ve = {
  clear: ve,
  addNode: we,
  getSections: Ee,
  getData: Ie,
  nodeType: f,
  getType: Ae,
  setElementForId: Te,
  decorateNode: Re,
  type2Str: Pe,
  getLogger: je,
  getElementById: Be
}, _e = Ve;
var Me = /* @__PURE__ */ m$1(async (e, u, p, r) => {
  var _a, _b, _c, _d, _e2;
  tt.debug(`Rendering kanban diagram
` + e);
  let _ = /* @__PURE__ */ r.db.getData(), b = /* @__PURE__ */ Wl();
  b.htmlLabels = false;
  let l = /* @__PURE__ */ d(u), L = /* @__PURE__ */ l.append("g");
  L.attr("class", "sections");
  let C = /* @__PURE__ */ l.append("g");
  C.attr("class", "items");
  let g = /* @__PURE__ */ _.nodes.filter((y) => y.isGroup), w = 0, k = 10, K = [], N = 25;
  for (let y of g) {
    let A2 = ((_a = b == null ? void 0 : b.kanban) == null ? void 0 : _a.sectionWidth) || 200;
    w = w + 1, y.x = A2 * w + (w - 1) * k / 2, y.width = A2, y.y = 0, y.height = A2 * 3, y.rx = 5, y.ry = 5, y.cssClasses = y.cssClasses + " section-" + w;
    let O = await ro(L, y);
    N = /* @__PURE__ */ Math.max(N, (_b = O == null ? void 0 : O.labelBBox) == null ? void 0 : _b.height), K.push(O);
  }
  let M = 0;
  for (let y of g) {
    let A2 = K[M];
    M = M + 1;
    let O = ((_c = b == null ? void 0 : b.kanban) == null ? void 0 : _c.sectionWidth) || 200, U = -O * 3 / 2 + N, T = U, J = /* @__PURE__ */ _.nodes.filter((i) => i.parentId === y.id);
    for (let i of J) {
      if (i.isGroup) throw new Error("Groups within groups are not allowed in Kanban diagrams");
      i.x = y.x, i.width = O - 1.5 * k;
      let s = /* @__PURE__ */ (await bf(C, i, {
        config: b
      })).node().getBBox();
      i.y = T + s.height / 2, await Nf(i), T = i.y + s.height / 2 + k / 2;
    }
    let H = /* @__PURE__ */ A2.cluster.select("rect"), v = Math.max(T - U + 3 * k, 50) + (N - 25);
    H.attr("height", v);
  }
  zl(void 0, l, ((_d = b.mindmap) == null ? void 0 : _d.padding) ?? dl.kanban.padding, ((_e2 = b.mindmap) == null ? void 0 : _e2.useMaxWidth) ?? dl.kanban.useMaxWidth);
}, "draw"), Se = {
  draw: Me
};
var Ge = /* @__PURE__ */ m$1((e) => {
  let u = "";
  for (let r = 0; r < e.THEME_COLOR_LIMIT; r++) e["lineColor" + r] = e["lineColor" + r] || e["cScaleInv" + r], Wt(e["lineColor" + r]) ? e["lineColor" + r] = /* @__PURE__ */ A(e["lineColor" + r], 20) : e["lineColor" + r] = /* @__PURE__ */ R(e["lineColor" + r], 20);
  let p = /* @__PURE__ */ m$1((r, d2) => e.darkMode ? R(r, d2) : A(r, d2), "adjuster");
  for (let r = 0; r < e.THEME_COLOR_LIMIT; r++) {
    let d2 = "" + (17 - 3 * r);
    u += `
    .section-${r - 1} rect, .section-${r - 1} path, .section-${r - 1} circle, .section-${r - 1} polygon, .section-${r - 1} path  {
      fill: ${p(e["cScale" + r], 10)};
      stroke: ${p(e["cScale" + r], 10)};

    }
    .section-${r - 1} text {
     fill: ${e["cScaleLabel" + r]};
    }
    .node-icon-${r - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + r]};
    }
    .section-edge-${r - 1}{
      stroke: ${e["cScale" + r]};
    }
    .edge-depth-${r - 1}{
      stroke-width: ${d2};
    }
    .section-${r - 1} line {
      stroke: ${e["cScaleInv" + r]} ;
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
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `;
  }
  return u;
}, "genSections"), Fe = /* @__PURE__ */ m$1((e) => `
  .edge {
    stroke-width: 3;
  }
  ${Ge(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
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
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, "getStyles"), Ne = Fe;
var ft = {
  db: _e,
  renderer: Se,
  parser: ke,
  styles: Ne
};
export {
  ft as diagram
};