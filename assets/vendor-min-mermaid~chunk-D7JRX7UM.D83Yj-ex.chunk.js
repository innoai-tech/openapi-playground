var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __;
import { w as w$1, $ } from "./vendor-min-mermaid~chunk-IO347I67.C-wIwFwj.chunk.js";
import { S } from "./vendor-min-mermaid~chunk-L736DJ4U.1Ji9oL-I.chunk.js";
import { I as Ie, C as Ce } from "./vendor-min-mermaid~chunk-YM3XIQPS.BhHSAhRp.chunk.js";
import { t as tt, H as Hl, g as gC, S as Sf, w as wf, v as vf, F as Ff, B as Bf, M as Mf, L as Lf } from "./vendor-min-mermaid~chunk-ZKYS2E5M.BYv2PEOY.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var xt = /* @__PURE__ */ function() {
  var t = /* @__PURE__ */ m$1(function(G, o, h, n) {
    for (h = h || {}, n = G.length; n--; h[G[n]] = o) ;
    return h;
  }, "o"), e = [
    1,
    2
  ], s = [
    1,
    3
  ], a = [
    1,
    4
  ], c = [
    2,
    4
  ], f = [
    1,
    9
  ], r = [
    1,
    11
  ], d = [
    1,
    16
  ], p = [
    1,
    17
  ], T = [
    1,
    18
  ], m = [
    1,
    19
  ], b = [
    1,
    32
  ], I = [
    1,
    20
  ], S2 = [
    1,
    21
  ], L = [
    1,
    22
  ], v = [
    1,
    23
  ], $2 = [
    1,
    24
  ], Y = [
    1,
    26
  ], N = [
    1,
    27
  ], P = [
    1,
    28
  ], Q = [
    1,
    29
  ], Z = [
    1,
    30
  ], tt2 = [
    1,
    31
  ], et = [
    1,
    34
  ], st = [
    1,
    35
  ], it = [
    1,
    36
  ], rt = [
    1,
    37
  ], X = [
    1,
    33
  ], y = [
    1,
    4,
    5,
    16,
    17,
    19,
    21,
    22,
    24,
    25,
    26,
    27,
    28,
    29,
    33,
    35,
    37,
    38,
    42,
    45,
    48,
    49,
    50,
    51,
    54
  ], nt = [
    1,
    4,
    5,
    14,
    15,
    16,
    17,
    19,
    21,
    22,
    24,
    25,
    26,
    27,
    28,
    29,
    33,
    35,
    37,
    38,
    42,
    45,
    48,
    49,
    50,
    51,
    54
  ], Mt = [
    4,
    5,
    16,
    17,
    19,
    21,
    22,
    24,
    25,
    26,
    27,
    28,
    29,
    33,
    35,
    37,
    38,
    42,
    45,
    48,
    49,
    50,
    51,
    54
  ], Et = {
    trace: /* @__PURE__ */ m$1(function() {
    }, "trace"),
    yy: {},
    symbols_: {
      error: 2,
      start: 3,
      SPACE: 4,
      NL: 5,
      SD: 6,
      document: 7,
      line: 8,
      statement: 9,
      classDefStatement: 10,
      styleStatement: 11,
      cssClassStatement: 12,
      idStatement: 13,
      DESCR: 14,
      "-->": 15,
      HIDE_EMPTY: 16,
      scale: 17,
      WIDTH: 18,
      COMPOSIT_STATE: 19,
      STRUCT_START: 20,
      STRUCT_STOP: 21,
      STATE_DESCR: 22,
      AS: 23,
      ID: 24,
      FORK: 25,
      JOIN: 26,
      CHOICE: 27,
      CONCURRENT: 28,
      note: 29,
      notePosition: 30,
      NOTE_TEXT: 31,
      direction: 32,
      acc_title: 33,
      acc_title_value: 34,
      acc_descr: 35,
      acc_descr_value: 36,
      acc_descr_multiline_value: 37,
      classDef: 38,
      CLASSDEF_ID: 39,
      CLASSDEF_STYLEOPTS: 40,
      DEFAULT: 41,
      style: 42,
      STYLE_IDS: 43,
      STYLEDEF_STYLEOPTS: 44,
      class: 45,
      CLASSENTITY_IDS: 46,
      STYLECLASS: 47,
      direction_tb: 48,
      direction_bt: 49,
      direction_rl: 50,
      direction_lr: 51,
      eol: 52,
      ";": 53,
      EDGE_STATE: 54,
      STYLE_SEPARATOR: 55,
      left_of: 56,
      right_of: 57,
      $accept: 0,
      $end: 1
    },
    terminals_: {
      2: "error",
      4: "SPACE",
      5: "NL",
      6: "SD",
      14: "DESCR",
      15: "-->",
      16: "HIDE_EMPTY",
      17: "scale",
      18: "WIDTH",
      19: "COMPOSIT_STATE",
      20: "STRUCT_START",
      21: "STRUCT_STOP",
      22: "STATE_DESCR",
      23: "AS",
      24: "ID",
      25: "FORK",
      26: "JOIN",
      27: "CHOICE",
      28: "CONCURRENT",
      29: "note",
      31: "NOTE_TEXT",
      33: "acc_title",
      34: "acc_title_value",
      35: "acc_descr",
      36: "acc_descr_value",
      37: "acc_descr_multiline_value",
      38: "classDef",
      39: "CLASSDEF_ID",
      40: "CLASSDEF_STYLEOPTS",
      41: "DEFAULT",
      42: "style",
      43: "STYLE_IDS",
      44: "STYLEDEF_STYLEOPTS",
      45: "class",
      46: "CLASSENTITY_IDS",
      47: "STYLECLASS",
      48: "direction_tb",
      49: "direction_bt",
      50: "direction_rl",
      51: "direction_lr",
      53: ";",
      54: "EDGE_STATE",
      55: "STYLE_SEPARATOR",
      56: "left_of",
      57: "right_of"
    },
    productions_: [
      0,
      [
        3,
        2
      ],
      [
        3,
        2
      ],
      [
        3,
        2
      ],
      [
        7,
        0
      ],
      [
        7,
        2
      ],
      [
        8,
        2
      ],
      [
        8,
        1
      ],
      [
        8,
        1
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
        3
      ],
      [
        9,
        4
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
        1
      ],
      [
        9,
        4
      ],
      [
        9,
        3
      ],
      [
        9,
        6
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
        1
      ],
      [
        9,
        1
      ],
      [
        9,
        4
      ],
      [
        9,
        4
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
        10,
        3
      ],
      [
        10,
        3
      ],
      [
        11,
        3
      ],
      [
        12,
        3
      ],
      [
        32,
        1
      ],
      [
        32,
        1
      ],
      [
        32,
        1
      ],
      [
        32,
        1
      ],
      [
        52,
        1
      ],
      [
        52,
        1
      ],
      [
        13,
        1
      ],
      [
        13,
        1
      ],
      [
        13,
        3
      ],
      [
        13,
        3
      ],
      [
        30,
        1
      ],
      [
        30,
        1
      ]
    ],
    performAction: /* @__PURE__ */ m$1(function(o, h, n, E, g, i, K) {
      var u = i.length - 1;
      switch (g) {
        case 3:
          return E.setRootDoc(i[u]), i[u];
        case 4:
          this.$ = [];
          break;
        case 5:
          i[u] != "nl" && (i[u - 1].push(i[u]), this.$ = i[u - 1]);
          break;
        case 6:
        case 7:
          this.$ = i[u];
          break;
        case 8:
          this.$ = "nl";
          break;
        case 12:
          this.$ = i[u];
          break;
        case 13:
          let at = i[u - 1];
          at.description = /* @__PURE__ */ E.trimColon(i[u]), this.$ = at;
          break;
        case 14:
          this.$ = {
            stmt: "relation",
            state1: i[u - 2],
            state2: i[u]
          };
          break;
        case 15:
          let ot = /* @__PURE__ */ E.trimColon(i[u]);
          this.$ = {
            stmt: "relation",
            state1: i[u - 3],
            state2: i[u - 1],
            description: ot
          };
          break;
        case 19:
          this.$ = {
            stmt: "state",
            id: i[u - 3],
            type: "default",
            description: "",
            doc: i[u - 1]
          };
          break;
        case 20:
          var F = i[u], U = /* @__PURE__ */ i[u - 2].trim();
          if (i[u].match(":")) {
            var J = /* @__PURE__ */ i[u].split(":");
            F = J[0], U = [
              U,
              J[1]
            ];
          }
          this.$ = {
            stmt: "state",
            id: F,
            type: "default",
            description: U
          };
          break;
        case 21:
          this.$ = {
            stmt: "state",
            id: i[u - 3],
            type: "default",
            description: i[u - 5],
            doc: i[u - 1]
          };
          break;
        case 22:
          this.$ = {
            stmt: "state",
            id: i[u],
            type: "fork"
          };
          break;
        case 23:
          this.$ = {
            stmt: "state",
            id: i[u],
            type: "join"
          };
          break;
        case 24:
          this.$ = {
            stmt: "state",
            id: i[u],
            type: "choice"
          };
          break;
        case 25:
          this.$ = {
            stmt: "state",
            id: /* @__PURE__ */ E.getDividerId(),
            type: "divider"
          };
          break;
        case 26:
          this.$ = {
            stmt: "state",
            id: /* @__PURE__ */ i[u - 1].trim(),
            note: {
              position: /* @__PURE__ */ i[u - 2].trim(),
              text: /* @__PURE__ */ i[u].trim()
            }
          };
          break;
        case 29:
          this.$ = /* @__PURE__ */ i[u].trim(), E.setAccTitle(this.$);
          break;
        case 30:
        case 31:
          this.$ = /* @__PURE__ */ i[u].trim(), E.setAccDescription(this.$);
          break;
        case 32:
        case 33:
          this.$ = {
            stmt: "classDef",
            id: /* @__PURE__ */ i[u - 1].trim(),
            classes: /* @__PURE__ */ i[u].trim()
          };
          break;
        case 34:
          this.$ = {
            stmt: "style",
            id: /* @__PURE__ */ i[u - 1].trim(),
            styleClass: /* @__PURE__ */ i[u].trim()
          };
          break;
        case 35:
          this.$ = {
            stmt: "applyClass",
            id: /* @__PURE__ */ i[u - 1].trim(),
            styleClass: /* @__PURE__ */ i[u].trim()
          };
          break;
        case 36:
          E.setDirection("TB"), this.$ = {
            stmt: "dir",
            value: "TB"
          };
          break;
        case 37:
          E.setDirection("BT"), this.$ = {
            stmt: "dir",
            value: "BT"
          };
          break;
        case 38:
          E.setDirection("RL"), this.$ = {
            stmt: "dir",
            value: "RL"
          };
          break;
        case 39:
          E.setDirection("LR"), this.$ = {
            stmt: "dir",
            value: "LR"
          };
          break;
        case 42:
        case 43:
          this.$ = {
            stmt: "state",
            id: /* @__PURE__ */ i[u].trim(),
            type: "default",
            description: ""
          };
          break;
        case 44:
          this.$ = {
            stmt: "state",
            id: /* @__PURE__ */ i[u - 2].trim(),
            classes: [
              /* @__PURE__ */ i[u].trim()
            ],
            type: "default",
            description: ""
          };
          break;
        case 45:
          this.$ = {
            stmt: "state",
            id: /* @__PURE__ */ i[u - 2].trim(),
            classes: [
              /* @__PURE__ */ i[u].trim()
            ],
            type: "default",
            description: ""
          };
          break;
      }
    }, "anonymous"),
    table: [
      {
        3: 1,
        4: e,
        5: s,
        6: a
      },
      {
        1: [
          3
        ]
      },
      {
        3: 5,
        4: e,
        5: s,
        6: a
      },
      {
        3: 6,
        4: e,
        5: s,
        6: a
      },
      /* @__PURE__ */ t([
        1,
        4,
        5,
        16,
        17,
        19,
        22,
        24,
        25,
        26,
        27,
        28,
        29,
        33,
        35,
        37,
        38,
        42,
        45,
        48,
        49,
        50,
        51,
        54
      ], c, {
        7: 7
      }),
      {
        1: [
          2,
          1
        ]
      },
      {
        1: [
          2,
          2
        ]
      },
      {
        1: [
          2,
          3
        ],
        4: f,
        5: r,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: d,
        17: p,
        19: T,
        22: m,
        24: b,
        25: I,
        26: S2,
        27: L,
        28: v,
        29: $2,
        32: 25,
        33: Y,
        35: N,
        37: P,
        38: Q,
        42: Z,
        45: tt2,
        48: et,
        49: st,
        50: it,
        51: rt,
        54: X
      },
      /* @__PURE__ */ t(y, [
        2,
        5
      ]),
      {
        9: 38,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: d,
        17: p,
        19: T,
        22: m,
        24: b,
        25: I,
        26: S2,
        27: L,
        28: v,
        29: $2,
        32: 25,
        33: Y,
        35: N,
        37: P,
        38: Q,
        42: Z,
        45: tt2,
        48: et,
        49: st,
        50: it,
        51: rt,
        54: X
      },
      /* @__PURE__ */ t(y, [
        2,
        7
      ]),
      /* @__PURE__ */ t(y, [
        2,
        8
      ]),
      /* @__PURE__ */ t(y, [
        2,
        9
      ]),
      /* @__PURE__ */ t(y, [
        2,
        10
      ]),
      /* @__PURE__ */ t(y, [
        2,
        11
      ]),
      /* @__PURE__ */ t(y, [
        2,
        12
      ], {
        14: [
          1,
          39
        ],
        15: [
          1,
          40
        ]
      }),
      /* @__PURE__ */ t(y, [
        2,
        16
      ]),
      {
        18: [
          1,
          41
        ]
      },
      /* @__PURE__ */ t(y, [
        2,
        18
      ], {
        20: [
          1,
          42
        ]
      }),
      {
        23: [
          1,
          43
        ]
      },
      /* @__PURE__ */ t(y, [
        2,
        22
      ]),
      /* @__PURE__ */ t(y, [
        2,
        23
      ]),
      /* @__PURE__ */ t(y, [
        2,
        24
      ]),
      /* @__PURE__ */ t(y, [
        2,
        25
      ]),
      {
        30: 44,
        31: [
          1,
          45
        ],
        56: [
          1,
          46
        ],
        57: [
          1,
          47
        ]
      },
      /* @__PURE__ */ t(y, [
        2,
        28
      ]),
      {
        34: [
          1,
          48
        ]
      },
      {
        36: [
          1,
          49
        ]
      },
      /* @__PURE__ */ t(y, [
        2,
        31
      ]),
      {
        39: [
          1,
          50
        ],
        41: [
          1,
          51
        ]
      },
      {
        43: [
          1,
          52
        ]
      },
      {
        46: [
          1,
          53
        ]
      },
      /* @__PURE__ */ t(nt, [
        2,
        42
      ], {
        55: [
          1,
          54
        ]
      }),
      /* @__PURE__ */ t(nt, [
        2,
        43
      ], {
        55: [
          1,
          55
        ]
      }),
      /* @__PURE__ */ t(y, [
        2,
        36
      ]),
      /* @__PURE__ */ t(y, [
        2,
        37
      ]),
      /* @__PURE__ */ t(y, [
        2,
        38
      ]),
      /* @__PURE__ */ t(y, [
        2,
        39
      ]),
      /* @__PURE__ */ t(y, [
        2,
        6
      ]),
      /* @__PURE__ */ t(y, [
        2,
        13
      ]),
      {
        13: 56,
        24: b,
        54: X
      },
      /* @__PURE__ */ t(y, [
        2,
        17
      ]),
      /* @__PURE__ */ t(Mt, c, {
        7: 57
      }),
      {
        24: [
          1,
          58
        ]
      },
      {
        24: [
          1,
          59
        ]
      },
      {
        23: [
          1,
          60
        ]
      },
      {
        24: [
          2,
          46
        ]
      },
      {
        24: [
          2,
          47
        ]
      },
      /* @__PURE__ */ t(y, [
        2,
        29
      ]),
      /* @__PURE__ */ t(y, [
        2,
        30
      ]),
      {
        40: [
          1,
          61
        ]
      },
      {
        40: [
          1,
          62
        ]
      },
      {
        44: [
          1,
          63
        ]
      },
      {
        47: [
          1,
          64
        ]
      },
      {
        24: [
          1,
          65
        ]
      },
      {
        24: [
          1,
          66
        ]
      },
      /* @__PURE__ */ t(y, [
        2,
        14
      ], {
        14: [
          1,
          67
        ]
      }),
      {
        4: f,
        5: r,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: d,
        17: p,
        19: T,
        21: [
          1,
          68
        ],
        22: m,
        24: b,
        25: I,
        26: S2,
        27: L,
        28: v,
        29: $2,
        32: 25,
        33: Y,
        35: N,
        37: P,
        38: Q,
        42: Z,
        45: tt2,
        48: et,
        49: st,
        50: it,
        51: rt,
        54: X
      },
      /* @__PURE__ */ t(y, [
        2,
        20
      ], {
        20: [
          1,
          69
        ]
      }),
      {
        31: [
          1,
          70
        ]
      },
      {
        24: [
          1,
          71
        ]
      },
      /* @__PURE__ */ t(y, [
        2,
        32
      ]),
      /* @__PURE__ */ t(y, [
        2,
        33
      ]),
      /* @__PURE__ */ t(y, [
        2,
        34
      ]),
      /* @__PURE__ */ t(y, [
        2,
        35
      ]),
      /* @__PURE__ */ t(nt, [
        2,
        44
      ]),
      /* @__PURE__ */ t(nt, [
        2,
        45
      ]),
      /* @__PURE__ */ t(y, [
        2,
        15
      ]),
      /* @__PURE__ */ t(y, [
        2,
        19
      ]),
      /* @__PURE__ */ t(Mt, c, {
        7: 72
      }),
      /* @__PURE__ */ t(y, [
        2,
        26
      ]),
      /* @__PURE__ */ t(y, [
        2,
        27
      ]),
      {
        4: f,
        5: r,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: d,
        17: p,
        19: T,
        21: [
          1,
          73
        ],
        22: m,
        24: b,
        25: I,
        26: S2,
        27: L,
        28: v,
        29: $2,
        32: 25,
        33: Y,
        35: N,
        37: P,
        38: Q,
        42: Z,
        45: tt2,
        48: et,
        49: st,
        50: it,
        51: rt,
        54: X
      },
      /* @__PURE__ */ t(y, [
        2,
        21
      ])
    ],
    defaultActions: {
      5: [
        2,
        1
      ],
      6: [
        2,
        2
      ],
      46: [
        2,
        46
      ],
      47: [
        2,
        47
      ]
    },
    parseError: /* @__PURE__ */ m$1(function(o, h) {
      if (h.recoverable) this.trace(o);
      else {
        var n = new Error(o);
        throw n.hash = h, n;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ m$1(function(o) {
      var h = this, n = [
        0
      ], E = [], g = [
        null
      ], i = [], K = this.table, u = "", F = 0, U = 0, J = 0, at = 2, ot = 1, Ce2 = /* @__PURE__ */ i.slice.call(arguments, 1), k = /* @__PURE__ */ Object.create(this.lexer), B = {
        yy: {}
      };
      for (var _t in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _t) && (B.yy[_t] = this.yy[_t]);
      k.setInput(o, B.yy), B.yy.lexer = k, B.yy.parser = this, typeof k.yylloc > "u" && (k.yylloc = {});
      var mt = k.yylloc;
      i.push(mt);
      var Le = k.options && k.options.ranges;
      typeof B.yy.parseError == "function" ? this.parseError = B.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Ue(A) {
        n.length = n.length - 2 * A, g.length = g.length - A, i.length = i.length - A;
      }
      m$1(Ue, "popStack");
      function Ie2() {
        var A;
        return A = E.pop() || k.lex() || ot, typeof A != "number" && (A instanceof Array && (E = A, A = /* @__PURE__ */ E.pop()), A = h.symbols_[A] || A), A;
      }
      m$1(Ie2, "lex");
      for (var D, bt, M, C, He, kt, H = {}, ct, R, Vt, lt; ; ) {
        if (M = n[n.length - 1], this.defaultActions[M] ? C = this.defaultActions[M] : ((D === null || typeof D > "u") && (D = /* @__PURE__ */ Ie2()), C = K[M] && K[M][D]), typeof C > "u" || !C.length || !C[0]) {
          var Dt = "";
          lt = [];
          for (ct in K[M]) this.terminals_[ct] && ct > at && lt.push("'" + this.terminals_[ct] + "'");
          k.showPosition ? Dt = "Parse error on line " + (F + 1) + `:
` + k.showPosition() + `
Expecting ` + lt.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : Dt = "Parse error on line " + (F + 1) + ": Unexpected " + (D == ot ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError(Dt, {
            text: k.match,
            token: this.terminals_[D] || D,
            line: k.yylineno,
            loc: mt,
            expected: lt
          });
        }
        if (C[0] instanceof Array && C.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + M + ", token: " + D);
        switch (C[0]) {
          case 1:
            n.push(D), g.push(k.yytext), i.push(k.yylloc), n.push(C[1]), D = null, bt ? (D = bt, bt = null) : (U = k.yyleng, u = k.yytext, F = k.yylineno, mt = k.yylloc, J > 0);
            break;
          case 2:
            if (R = this.productions_[C[1]][1], H.$ = g[g.length - R], H._$ = {
              first_line: i[i.length - (R || 1)].first_line,
              last_line: i[i.length - 1].last_line,
              first_column: i[i.length - (R || 1)].first_column,
              last_column: i[i.length - 1].last_column
            }, Le && (H._$.range = [
              i[i.length - (R || 1)].range[0],
              i[i.length - 1].range[1]
            ]), kt = /* @__PURE__ */ this.performAction.apply(H, /* @__PURE__ */ [
              u,
              U,
              F,
              B.yy,
              C[1],
              g,
              i
            ].concat(Ce2)), typeof kt < "u") return kt;
            R && (n = /* @__PURE__ */ n.slice(0, -1 * R * 2), g = /* @__PURE__ */ g.slice(0, -1 * R), i = /* @__PURE__ */ i.slice(0, -1 * R)), n.push(this.productions_[C[1]][0]), g.push(H.$), i.push(H._$), Vt = K[n[n.length - 2]][n[n.length - 1]], n.push(Vt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, Ae = /* @__PURE__ */ function() {
    var G = {
      EOF: 1,
      parseError: /* @__PURE__ */ m$1(function(h, n) {
        if (this.yy.parser) this.yy.parser.parseError(h, n);
        else throw new Error(h);
      }, "parseError"),
      setInput: /* @__PURE__ */ m$1(function(o, h) {
        return this.yy = h || this.yy || {}, this._input = o, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
        var o = this._input[0];
        this.yytext += o, this.yyleng++, this.offset++, this.match += o, this.matched += o;
        var h = /* @__PURE__ */ o.match(/(?:\r\n?|\n).*/g);
        return h ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), o;
      }, "input"),
      unput: /* @__PURE__ */ m$1(function(o) {
        var h = o.length, n = /* @__PURE__ */ o.split(/(?:\r\n?|\n)/g);
        this._input = o + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - h), this.offset -= h;
        var E = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
        this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
        var g = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: n ? (n.length === E.length ? this.yylloc.first_column : 0) + E[E.length - n.length].length - n[0].length : this.yylloc.first_column - h
        }, this.options.ranges && (this.yylloc.range = [
          g[0],
          g[0] + this.yyleng - h
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
      less: /* @__PURE__ */ m$1(function(o) {
        this.unput(/* @__PURE__ */ this.match.slice(o));
      }, "less"),
      pastInput: /* @__PURE__ */ m$1(function() {
        var o = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
        return (o.length > 20 ? "..." : "") + o.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: /* @__PURE__ */ m$1(function() {
        var o = this.match;
        return o.length < 20 && (o += /* @__PURE__ */ this._input.substr(0, 20 - o.length)), (o.substr(0, 20) + (o.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: /* @__PURE__ */ m$1(function() {
        var o = /* @__PURE__ */ this.pastInput(), h = /* @__PURE__ */ new Array(o.length + 1).join("-");
        return o + this.upcomingInput() + `
` + h + "^";
      }, "showPosition"),
      test_match: /* @__PURE__ */ m$1(function(o, h) {
        var n, E, g;
        if (this.options.backtrack_lexer && (g = {
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
        }, this.options.ranges && (g.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), E = /* @__PURE__ */ o[0].match(/(?:\r\n?|\n).*/g), E && (this.yylineno += E.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: E ? E[E.length - 1].length - E[E.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
        }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
          this.offset,
          this.offset += this.yyleng
        ]), this._more = false, this._backtrack = false, this._input = /* @__PURE__ */ this._input.slice(o[0].length), this.matched += o[0], n = /* @__PURE__ */ this.performAction.call(this, this.yy, this, h, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n) return n;
        if (this._backtrack) {
          for (var i in g) this[i] = g[i];
          return false;
        }
        return false;
      }, "test_match"),
      next: /* @__PURE__ */ m$1(function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var o, h, n, E;
        this._more || (this.yytext = "", this.match = "");
        for (var g = /* @__PURE__ */ this._currentRules(), i = 0; i < g.length; i++) if (n = /* @__PURE__ */ this._input.match(this.rules[g[i]]), n && (!h || n[0].length > h[0].length)) {
          if (h = n, E = i, this.options.backtrack_lexer) {
            if (o = /* @__PURE__ */ this.test_match(n, g[i]), o !== false) return o;
            if (this._backtrack) {
              h = false;
              continue;
            } else return false;
          } else if (!this.options.flex) break;
        }
        return h ? (o = /* @__PURE__ */ this.test_match(h, g[E]), o !== false ? o : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      lex: /* @__PURE__ */ m$1(function() {
        var h = /* @__PURE__ */ this.next();
        return h || this.lex();
      }, "lex"),
      begin: /* @__PURE__ */ m$1(function(h) {
        this.conditionStack.push(h);
      }, "begin"),
      popState: /* @__PURE__ */ m$1(function() {
        var h = this.conditionStack.length - 1;
        return h > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      _currentRules: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      topState: /* @__PURE__ */ m$1(function(h) {
        return h = this.conditionStack.length - 1 - Math.abs(h || 0), h >= 0 ? this.conditionStack[h] : "INITIAL";
      }, "topState"),
      pushState: /* @__PURE__ */ m$1(function(h) {
        this.begin(h);
      }, "pushState"),
      stateStackSize: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: /* @__PURE__ */ m$1(function(h, n, E, g) {
        switch (E) {
          case 0:
            return 41;
          case 1:
            return 48;
          case 2:
            return 49;
          case 3:
            return 50;
          case 4:
            return 51;
          case 5:
            break;
          case 6:
            break;
          case 7:
            return 5;
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            break;
          case 12:
            return this.pushState("SCALE"), 17;
          case 13:
            return 18;
          case 14:
            this.popState();
            break;
          case 15:
            return this.begin("acc_title"), 33;
          case 16:
            return this.popState(), "acc_title_value";
          case 17:
            return this.begin("acc_descr"), 35;
          case 18:
            return this.popState(), "acc_descr_value";
          case 19:
            this.begin("acc_descr_multiline");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return "acc_descr_multiline_value";
          case 22:
            return this.pushState("CLASSDEF"), 38;
          case 23:
            return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
          case 24:
            return this.popState(), this.pushState("CLASSDEFID"), 39;
          case 25:
            return this.popState(), 40;
          case 26:
            return this.pushState("CLASS"), 45;
          case 27:
            return this.popState(), this.pushState("CLASS_STYLE"), 46;
          case 28:
            return this.popState(), 47;
          case 29:
            return this.pushState("STYLE"), 42;
          case 30:
            return this.popState(), this.pushState("STYLEDEF_STYLES"), 43;
          case 31:
            return this.popState(), 44;
          case 32:
            return this.pushState("SCALE"), 17;
          case 33:
            return 18;
          case 34:
            this.popState();
            break;
          case 35:
            this.pushState("STATE");
            break;
          case 36:
            return this.popState(), n.yytext = /* @__PURE__ */ n.yytext.slice(0, -8).trim(), 25;
          case 37:
            return this.popState(), n.yytext = /* @__PURE__ */ n.yytext.slice(0, -8).trim(), 26;
          case 38:
            return this.popState(), n.yytext = /* @__PURE__ */ n.yytext.slice(0, -10).trim(), 27;
          case 39:
            return this.popState(), n.yytext = /* @__PURE__ */ n.yytext.slice(0, -8).trim(), 25;
          case 40:
            return this.popState(), n.yytext = /* @__PURE__ */ n.yytext.slice(0, -8).trim(), 26;
          case 41:
            return this.popState(), n.yytext = /* @__PURE__ */ n.yytext.slice(0, -10).trim(), 27;
          case 42:
            return 48;
          case 43:
            return 49;
          case 44:
            return 50;
          case 45:
            return 51;
          case 46:
            this.pushState("STATE_STRING");
            break;
          case 47:
            return this.pushState("STATE_ID"), "AS";
          case 48:
            return this.popState(), "ID";
          case 49:
            this.popState();
            break;
          case 50:
            return "STATE_DESCR";
          case 51:
            return 19;
          case 52:
            this.popState();
            break;
          case 53:
            return this.popState(), this.pushState("struct"), 20;
          case 54:
            break;
          case 55:
            return this.popState(), 21;
          case 56:
            break;
          case 57:
            return this.begin("NOTE"), 29;
          case 58:
            return this.popState(), this.pushState("NOTE_ID"), 56;
          case 59:
            return this.popState(), this.pushState("NOTE_ID"), 57;
          case 60:
            this.popState(), this.pushState("FLOATING_NOTE");
            break;
          case 61:
            return this.popState(), this.pushState("FLOATING_NOTE_ID"), "AS";
          case 62:
            break;
          case 63:
            return "NOTE_TEXT";
          case 64:
            return this.popState(), "ID";
          case 65:
            return this.popState(), this.pushState("NOTE_TEXT"), 24;
          case 66:
            return this.popState(), n.yytext = /* @__PURE__ */ n.yytext.substr(2).trim(), 31;
          case 67:
            return this.popState(), n.yytext = /* @__PURE__ */ n.yytext.slice(0, -8).trim(), 31;
          case 68:
            return 6;
          case 69:
            return 6;
          case 70:
            return 16;
          case 71:
            return 54;
          case 72:
            return 24;
          case 73:
            return n.yytext = /* @__PURE__ */ n.yytext.trim(), 14;
          case 74:
            return 15;
          case 75:
            return 28;
          case 76:
            return 55;
          case 77:
            return 5;
          case 78:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [
        /^(?:default\b)/i,
        /^(?:.*direction\s+TB[^\n]*)/i,
        /^(?:.*direction\s+BT[^\n]*)/i,
        /^(?:.*direction\s+RL[^\n]*)/i,
        /^(?:.*direction\s+LR[^\n]*)/i,
        /^(?:%%(?!\{)[^\n]*)/i,
        /^(?:[^\}]%%[^\n]*)/i,
        /^(?:[\n]+)/i,
        /^(?:[\s]+)/i,
        /^(?:((?!\n)\s)+)/i,
        /^(?:#[^\n]*)/i,
        /^(?:%[^\n]*)/i,
        /^(?:scale\s+)/i,
        /^(?:\d+)/i,
        /^(?:\s+width\b)/i,
        /^(?:accTitle\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*\{\s*)/i,
        /^(?:[\}])/i,
        /^(?:[^\}]*)/i,
        /^(?:classDef\s+)/i,
        /^(?:DEFAULT\s+)/i,
        /^(?:\w+\s+)/i,
        /^(?:[^\n]*)/i,
        /^(?:class\s+)/i,
        /^(?:(\w+)+((,\s*\w+)*))/i,
        /^(?:[^\n]*)/i,
        /^(?:style\s+)/i,
        /^(?:[\w,]+\s+)/i,
        /^(?:[^\n]*)/i,
        /^(?:scale\s+)/i,
        /^(?:\d+)/i,
        /^(?:\s+width\b)/i,
        /^(?:state\s+)/i,
        /^(?:.*<<fork>>)/i,
        /^(?:.*<<join>>)/i,
        /^(?:.*<<choice>>)/i,
        /^(?:.*\[\[fork\]\])/i,
        /^(?:.*\[\[join\]\])/i,
        /^(?:.*\[\[choice\]\])/i,
        /^(?:.*direction\s+TB[^\n]*)/i,
        /^(?:.*direction\s+BT[^\n]*)/i,
        /^(?:.*direction\s+RL[^\n]*)/i,
        /^(?:.*direction\s+LR[^\n]*)/i,
        /^(?:["])/i,
        /^(?:\s*as\s+)/i,
        /^(?:[^\n\{]*)/i,
        /^(?:["])/i,
        /^(?:[^"]*)/i,
        /^(?:[^\n\s\{]+)/i,
        /^(?:\n)/i,
        /^(?:\{)/i,
        /^(?:%%(?!\{)[^\n]*)/i,
        /^(?:\})/i,
        /^(?:[\n])/i,
        /^(?:note\s+)/i,
        /^(?:left of\b)/i,
        /^(?:right of\b)/i,
        /^(?:")/i,
        /^(?:\s*as\s*)/i,
        /^(?:["])/i,
        /^(?:[^"]*)/i,
        /^(?:[^\n]*)/i,
        /^(?:\s*[^:\n\s\-]+)/i,
        /^(?:\s*:[^:\n;]+)/i,
        /^(?:[\s\S]*?end note\b)/i,
        /^(?:stateDiagram\s+)/i,
        /^(?:stateDiagram-v2\s+)/i,
        /^(?:hide empty description\b)/i,
        /^(?:\[\*\])/i,
        /^(?:[^:\n\s\-\{]+)/i,
        /^(?:\s*:[^:\n;]+)/i,
        /^(?:-->)/i,
        /^(?:--)/i,
        /^(?::::)/i,
        /^(?:$)/i,
        /^(?:.)/i
      ],
      conditions: {
        LINE: {
          rules: [
            9,
            10
          ],
          inclusive: false
        },
        struct: {
          rules: [
            9,
            10,
            22,
            26,
            29,
            35,
            42,
            43,
            44,
            45,
            54,
            55,
            56,
            57,
            71,
            72,
            73,
            74,
            75
          ],
          inclusive: false
        },
        FLOATING_NOTE_ID: {
          rules: [
            64
          ],
          inclusive: false
        },
        FLOATING_NOTE: {
          rules: [
            61,
            62,
            63
          ],
          inclusive: false
        },
        NOTE_TEXT: {
          rules: [
            66,
            67
          ],
          inclusive: false
        },
        NOTE_ID: {
          rules: [
            65
          ],
          inclusive: false
        },
        NOTE: {
          rules: [
            58,
            59,
            60
          ],
          inclusive: false
        },
        STYLEDEF_STYLEOPTS: {
          rules: [],
          inclusive: false
        },
        STYLEDEF_STYLES: {
          rules: [
            31
          ],
          inclusive: false
        },
        STYLE_IDS: {
          rules: [],
          inclusive: false
        },
        STYLE: {
          rules: [
            30
          ],
          inclusive: false
        },
        CLASS_STYLE: {
          rules: [
            28
          ],
          inclusive: false
        },
        CLASS: {
          rules: [
            27
          ],
          inclusive: false
        },
        CLASSDEFID: {
          rules: [
            25
          ],
          inclusive: false
        },
        CLASSDEF: {
          rules: [
            23,
            24
          ],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [
            20,
            21
          ],
          inclusive: false
        },
        acc_descr: {
          rules: [
            18
          ],
          inclusive: false
        },
        acc_title: {
          rules: [
            16
          ],
          inclusive: false
        },
        SCALE: {
          rules: [
            13,
            14,
            33,
            34
          ],
          inclusive: false
        },
        ALIAS: {
          rules: [],
          inclusive: false
        },
        STATE_ID: {
          rules: [
            48
          ],
          inclusive: false
        },
        STATE_STRING: {
          rules: [
            49,
            50
          ],
          inclusive: false
        },
        FORK_STATE: {
          rules: [],
          inclusive: false
        },
        STATE: {
          rules: [
            9,
            10,
            36,
            37,
            38,
            39,
            40,
            41,
            46,
            47,
            51,
            52,
            53
          ],
          inclusive: false
        },
        ID: {
          rules: [
            9,
            10
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
            8,
            10,
            11,
            12,
            15,
            17,
            19,
            22,
            26,
            29,
            32,
            35,
            53,
            57,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            76,
            77,
            78
          ],
          inclusive: true
        }
      }
    };
    return G;
  }();
  Et.lexer = Ae;
  function gt() {
    this.yy = {};
  }
  return m$1(gt, "Parser"), gt.prototype = Et, Et.Parser = gt, new gt();
}();
xt.parser = xt;
var je = xt;
var ee = "TB", ht = "TB", At = "dir", j = "state", q = "relation", se = "classDef", ie = "style", re = "applyClass", V = "default", ut = "divider", Ct = "fill:none", Lt = "fill: #333", It = "c", vt = "text", Rt = "normal", dt = "rect", pt = "rectWithTitle", ne = "stateStart", ae = "stateEnd", Ot = "divider", Nt = "roundedWithTitle", oe = "note", ce = "noteGroup", z = "statediagram", ve = "state", le = `${z}-${ve}`, Pt = "transition", Re = "note", Oe = "note-edge", he = `${Pt} ${Oe}`, ue = `${z}-${Re}`, Ne = "cluster", de = `${z}-${Ne}`, Pe = "cluster-alt", pe = `${z}-${Pe}`, Gt = "parent", wt = "note", fe = "state", ft = "----", Se = `${ft}${wt}`, $t = `${ft}${Gt}`;
var Yt = /* @__PURE__ */ m$1(function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht;
  if (!t.doc) return e;
  let s = e;
  for (let a of t.doc) a.stmt === "dir" && (s = a.value);
  return s;
}, "getDir"), Ge = /* @__PURE__ */ m$1(function(t, e) {
  return e.db.getClasses();
}, "getClasses"), we = /* @__PURE__ */ m$1(async function(t, e, s, a) {
  tt.info("REF0:"), tt.info("Drawing state diagram (v2)", e);
  let { securityLevel: c, state: f, layout: r } = Hl();
  a.db.extract(/* @__PURE__ */ a.db.getRootDocV2());
  let d = /* @__PURE__ */ a.db.getData(), p = /* @__PURE__ */ w$1(e, c);
  d.type = a.type, d.layoutAlgorithm = r, d.nodeSpacing = (f == null ? void 0 : f.nodeSpacing) || 50, d.rankSpacing = (f == null ? void 0 : f.rankSpacing) || 50, d.markers = [
    "barb"
  ], d.diagramId = e, await S(d, p);
  let T = 8;
  Ie.insertTitle(p, "statediagramTitleText", (f == null ? void 0 : f.titleTopMargin) ?? 25, /* @__PURE__ */ a.db.getDiagramTitle()), $(p, T, z, (f == null ? void 0 : f.useMaxWidth) ?? true);
}, "draw"), ss = {
  getClasses: Ge,
  draw: we,
  getDir: Yt
};
var yt = /* @__PURE__ */ new Map(), w = 0;
function Ft() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ft;
  let c = s !== null && s.length > 0 ? `${a}${s}` : "";
  return `${fe}-${t}${c}-${e}`;
}
m$1(Ft, "stateDomId");
var $e = /* @__PURE__ */ m$1((t, e, s, a, c, f, r, d) => {
  tt.trace("items", e), e.forEach((p) => {
    switch (p.stmt) {
      case j:
        W(t, p, s, a, c, f, r, d);
        break;
      case V:
        W(t, p, s, a, c, f, r, d);
        break;
      case q:
        {
          W(t, p.state1, s, a, c, f, r, d), W(t, p.state2, s, a, c, f, r, d);
          let T = {
            id: "edge" + w,
            start: p.state1.id,
            end: p.state2.id,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: Ct,
            labelStyle: "",
            label: /* @__PURE__ */ gC.sanitizeText(p.description, /* @__PURE__ */ Hl()),
            arrowheadStyle: Lt,
            labelpos: It,
            labelType: vt,
            thickness: Rt,
            classes: Pt,
            look: r
          };
          c.push(T), w++;
        }
        break;
    }
  });
}, "setupDoc"), ye = /* @__PURE__ */ m$1(function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht;
  let s = e;
  if (t.doc) for (let a of t.doc) a.stmt === "dir" && (s = a.value);
  return s;
}, "getDir");
function St(t, e, s) {
  if (!e.id || e.id === "</join></fork>" || e.id === "</choice>") return;
  e.cssClasses && (Array.isArray(e.cssCompiledStyles) || (e.cssCompiledStyles = []), e.cssClasses.split(" ").forEach((c) => {
    if (s.get(c)) {
      let f = /* @__PURE__ */ s.get(c);
      e.cssCompiledStyles = [
        ...e.cssCompiledStyles,
        ...f.styles
      ];
    }
  }));
  let a = /* @__PURE__ */ t.find((c) => c.id === e.id);
  a ? Object.assign(a, e) : t.push(e);
}
m$1(St, "insertOrUpdateNode");
function Ye(t) {
  var _a2;
  return ((_a2 = t == null ? void 0 : t.classes) == null ? void 0 : _a2.join(" ")) ?? "";
}
m$1(Ye, "getClassesFromDbInfo");
function Fe(t) {
  return (t == null ? void 0 : t.styles) ?? [];
}
m$1(Fe, "getStylesFromDbInfo");
var W = /* @__PURE__ */ m$1((t, e, s, a, c, f, r, d) => {
  var _a2, _b;
  let p = e.id, T = /* @__PURE__ */ s.get(p), m = /* @__PURE__ */ Ye(T), b = /* @__PURE__ */ Fe(T);
  if (tt.info("dataFetcher parsedItem", e, T, b), p !== "root") {
    let I = dt;
    e.start === true ? I = ne : e.start === false && (I = ae), e.type !== V && (I = e.type), yt.get(p) || yt.set(p, {
      id: p,
      shape: I,
      description: /* @__PURE__ */ gC.sanitizeText(p, /* @__PURE__ */ Hl()),
      cssClasses: `${m} ${le}`,
      cssStyles: b
    });
    let S2 = /* @__PURE__ */ yt.get(p);
    e.description && (Array.isArray(S2.description) ? (S2.shape = pt, S2.description.push(e.description)) : ((_a2 = S2.description) == null ? void 0 : _a2.length) > 0 ? (S2.shape = pt, S2.description === p ? S2.description = [
      e.description
    ] : S2.description = [
      S2.description,
      e.description
    ]) : (S2.shape = dt, S2.description = e.description), S2.description = /* @__PURE__ */ gC.sanitizeTextOrArray(S2.description, /* @__PURE__ */ Hl())), ((_b = S2.description) == null ? void 0 : _b.length) === 1 && S2.shape === pt && (S2.type === "group" ? S2.shape = Nt : S2.shape = dt), !S2.type && e.doc && (tt.info("Setting cluster for XCX", p, /* @__PURE__ */ ye(e)), S2.type = "group", S2.isGroup = true, S2.dir = /* @__PURE__ */ ye(e), S2.shape = e.type === ut ? Ot : Nt, S2.cssClasses = `${S2.cssClasses} ${de} ${f ? pe : ""}`);
    let L = {
      labelStyle: "",
      shape: S2.shape,
      label: S2.description,
      cssClasses: S2.cssClasses,
      cssCompiledStyles: [],
      cssStyles: S2.cssStyles,
      id: p,
      dir: S2.dir,
      domId: /* @__PURE__ */ Ft(p, w),
      type: S2.type,
      isGroup: S2.type === "group",
      padding: 8,
      rx: 10,
      ry: 10,
      look: r
    };
    if (L.shape === Ot && (L.label = ""), t && t.id !== "root" && (tt.trace("Setting node ", p, " to be child of its parent ", t.id), L.parentId = t.id), L.centerLabel = true, e.note) {
      let v = {
        labelStyle: "",
        shape: oe,
        label: e.note.text,
        cssClasses: ue,
        cssStyles: [],
        cssCompilesStyles: [],
        id: p + Se + "-" + w,
        domId: /* @__PURE__ */ Ft(p, w, wt),
        type: S2.type,
        isGroup: S2.type === "group",
        padding: Hl().flowchart.padding,
        look: r,
        position: e.note.position
      }, $2 = p + $t, Y = {
        labelStyle: "",
        shape: ce,
        label: e.note.text,
        cssClasses: S2.cssClasses,
        cssStyles: [],
        id: p + $t,
        domId: /* @__PURE__ */ Ft(p, w, Gt),
        type: "group",
        isGroup: true,
        padding: 16,
        look: r,
        position: e.note.position
      };
      w++, Y.id = $2, v.parentId = $2, St(a, Y, d), St(a, v, d), St(a, L, d);
      let N = p, P = v.id;
      e.note.position === "left of" && (N = v.id, P = p), c.push({
        id: N + "-" + P,
        start: N,
        end: P,
        arrowhead: "none",
        arrowTypeEnd: "",
        style: Ct,
        labelStyle: "",
        classes: he,
        arrowheadStyle: Lt,
        labelpos: It,
        labelType: vt,
        thickness: Rt,
        look: r
      });
    } else St(a, L, d);
  }
  e.doc && (tt.trace("Adding nodes children "), $e(e, e.doc, s, a, c, !f, r, d));
}, "dataFetcher"), Te = /* @__PURE__ */ m$1(() => {
  yt.clear(), w = 0;
}, "reset");
var Bt = "[*]", Ee = "start", ge = Bt, _e = "end", me = "color", be = "fill", Be = "bgFill", Me = ",";
function ke() {
  return /* @__PURE__ */ new Map();
}
m$1(ke, "newClassesList");
var De = /* @__PURE__ */ m$1(() => ({
  relations: [],
  states: /* @__PURE__ */ new Map(),
  documents: {}
}), "newDoc"), Tt = /* @__PURE__ */ m$1((t) => JSON.parse(/* @__PURE__ */ JSON.stringify(t)), "clone"), xe = (_a = class {
  constructor(e) {
    __publicField(this, "version");
    __publicField(this, "nodes", []);
    __publicField(this, "edges", []);
    __publicField(this, "rootDoc", []);
    __publicField(this, "classes", ke());
    __publicField(this, "documents", {
      root: /* @__PURE__ */ De()
    });
    __publicField(this, "currentDocument", this.documents.root);
    __publicField(this, "startEndCount", 0);
    __publicField(this, "dividerCnt", 0);
    __publicField(this, "getAccTitle", wf);
    __publicField(this, "setAccTitle", vf);
    __publicField(this, "getAccDescription", Ff);
    __publicField(this, "setAccDescription", Bf);
    __publicField(this, "setDiagramTitle", Mf);
    __publicField(this, "getDiagramTitle", Lf);
    this.clear(), this.version = e, this.setRootDoc = /* @__PURE__ */ this.setRootDoc.bind(this), this.getDividerId = /* @__PURE__ */ this.getDividerId.bind(this), this.setDirection = /* @__PURE__ */ this.setDirection.bind(this), this.trimColon = /* @__PURE__ */ this.trimColon.bind(this);
  }
  setRootDoc(e) {
    tt.info("Setting root doc", e), this.rootDoc = e, this.version === 1 ? this.extract(e) : this.extract(/* @__PURE__ */ this.getRootDocV2());
  }
  getRootDoc() {
    return this.rootDoc;
  }
  docTranslator(e, s, a) {
    if (s.stmt === q) this.docTranslator(e, s.state1, true), this.docTranslator(e, s.state2, false);
    else if (s.stmt === j && (s.id === "[*]" ? (s.id = a ? e.id + "_start" : e.id + "_end", s.start = a) : s.id = /* @__PURE__ */ s.id.trim()), s.doc) {
      let c = [], f = [], r;
      for (r = 0; r < s.doc.length; r++) if (s.doc[r].type === ut) {
        let d = /* @__PURE__ */ Tt(s.doc[r]);
        d.doc = /* @__PURE__ */ Tt(f), c.push(d), f = [];
      } else f.push(s.doc[r]);
      if (c.length > 0 && f.length > 0) {
        let d = {
          stmt: j,
          id: /* @__PURE__ */ Ce(),
          type: "divider",
          doc: /* @__PURE__ */ Tt(f)
        };
        c.push(/* @__PURE__ */ Tt(d)), s.doc = c;
      }
      s.doc.forEach((d) => this.docTranslator(s, d, true));
    }
  }
  getRootDocV2() {
    return this.docTranslator({
      id: "root"
    }, {
      id: "root",
      doc: this.rootDoc
    }, true), {
      id: "root",
      doc: this.rootDoc
    };
  }
  extract(e) {
    let s;
    e.doc ? s = e.doc : s = e, tt.info(s), this.clear(true), tt.info("Extract initial document:", s), s.forEach((r) => {
      switch (tt.warn("Statement", r.stmt), r.stmt) {
        case j:
          this.addState(/* @__PURE__ */ r.id.trim(), r.type, r.doc, r.description, r.note, r.classes, r.styles, r.textStyles);
          break;
        case q:
          this.addRelation(r.state1, r.state2, r.description);
          break;
        case se:
          this.addStyleClass(/* @__PURE__ */ r.id.trim(), r.classes);
          break;
        case ie:
          {
            let d = /* @__PURE__ */ r.id.trim().split(","), p = /* @__PURE__ */ r.styleClass.split(",");
            d.forEach((T) => {
              let m = /* @__PURE__ */ this.getState(T);
              if (m === void 0) {
                let b = /* @__PURE__ */ T.trim();
                this.addState(b), m = /* @__PURE__ */ this.getState(b);
              }
              m.styles = /* @__PURE__ */ p.map((b) => {
                var _a2;
                return (_a2 = b.replace(/;/g, "")) == null ? void 0 : _a2.trim();
              });
            });
          }
          break;
        case re:
          this.setCssClass(/* @__PURE__ */ r.id.trim(), r.styleClass);
          break;
      }
    });
    let a = /* @__PURE__ */ this.getStates(), f = Hl().look;
    Te(), W(void 0, /* @__PURE__ */ this.getRootDocV2(), a, this.nodes, this.edges, true, f, this.classes), this.nodes.forEach((r) => {
      if (Array.isArray(r.label)) {
        if (r.description = /* @__PURE__ */ r.label.slice(1), r.isGroup && r.description.length > 0) throw new Error("Group nodes can only have label. Remove the additional description for node [" + r.id + "]");
        r.label = r.label[0];
      }
    });
  }
  addState(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : V, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, d = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, p = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
    let T = e == null ? void 0 : e.trim();
    if (this.currentDocument.states.has(T) ? (this.currentDocument.states.get(T).doc || (this.currentDocument.states.get(T).doc = a), this.currentDocument.states.get(T).type || (this.currentDocument.states.get(T).type = s)) : (tt.info("Adding state ", T, c), this.currentDocument.states.set(T, {
      id: T,
      descriptions: [],
      type: s,
      doc: a,
      note: f,
      classes: [],
      styles: [],
      textStyles: []
    })), c && (tt.info("Setting state description", T, c), typeof c == "string" && this.addDescription(T, /* @__PURE__ */ c.trim()), typeof c == "object" && c.forEach((m) => this.addDescription(T, /* @__PURE__ */ m.trim()))), f) {
      let m = /* @__PURE__ */ this.currentDocument.states.get(T);
      m.note = f, m.note.text = /* @__PURE__ */ gC.sanitizeText(m.note.text, /* @__PURE__ */ Hl());
    }
    r && (tt.info("Setting state classes", T, r), (typeof r == "string" ? [
      r
    ] : r).forEach((b) => this.setCssClass(T, /* @__PURE__ */ b.trim()))), d && (tt.info("Setting state styles", T, d), (typeof d == "string" ? [
      d
    ] : d).forEach((b) => this.setStyle(T, /* @__PURE__ */ b.trim()))), p && (tt.info("Setting state styles", T, d), (typeof p == "string" ? [
      p
    ] : p).forEach((b) => this.setTextStyle(T, /* @__PURE__ */ b.trim())));
  }
  clear(e) {
    this.nodes = [], this.edges = [], this.documents = {
      root: /* @__PURE__ */ De()
    }, this.currentDocument = this.documents.root, this.startEndCount = 0, this.classes = /* @__PURE__ */ ke(), e || Sf();
  }
  getState(e) {
    return this.currentDocument.states.get(e);
  }
  getStates() {
    return this.currentDocument.states;
  }
  logDocuments() {
    tt.info("Documents = ", this.documents);
  }
  getRelations() {
    return this.currentDocument.relations;
  }
  startIdIfNeeded() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    let s = e;
    return e === Bt && (this.startEndCount++, s = `${Ee}${this.startEndCount}`), s;
  }
  startTypeIfNeeded() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : V;
    return e === Bt ? Ee : s;
  }
  endIdIfNeeded() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    let s = e;
    return e === ge && (this.startEndCount++, s = `${_e}${this.startEndCount}`), s;
  }
  endTypeIfNeeded() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : V;
    return e === ge ? _e : s;
  }
  addRelationObjs(e, s, a) {
    let c = /* @__PURE__ */ this.startIdIfNeeded(/* @__PURE__ */ e.id.trim()), f = /* @__PURE__ */ this.startTypeIfNeeded(/* @__PURE__ */ e.id.trim(), e.type), r = /* @__PURE__ */ this.startIdIfNeeded(/* @__PURE__ */ s.id.trim()), d = /* @__PURE__ */ this.startTypeIfNeeded(/* @__PURE__ */ s.id.trim(), s.type);
    this.addState(c, f, e.doc, e.description, e.note, e.classes, e.styles, e.textStyles), this.addState(r, d, s.doc, s.description, s.note, s.classes, s.styles, s.textStyles), this.currentDocument.relations.push({
      id1: c,
      id2: r,
      relationTitle: /* @__PURE__ */ gC.sanitizeText(a, /* @__PURE__ */ Hl())
    });
  }
  addRelation(e, s, a) {
    if (typeof e == "object") this.addRelationObjs(e, s, a);
    else {
      let c = /* @__PURE__ */ this.startIdIfNeeded(/* @__PURE__ */ e.trim()), f = /* @__PURE__ */ this.startTypeIfNeeded(e), r = /* @__PURE__ */ this.endIdIfNeeded(/* @__PURE__ */ s.trim()), d = /* @__PURE__ */ this.endTypeIfNeeded(s);
      this.addState(c, f), this.addState(r, d), this.currentDocument.relations.push({
        id1: c,
        id2: r,
        title: /* @__PURE__ */ gC.sanitizeText(a, /* @__PURE__ */ Hl())
      });
    }
  }
  addDescription(e, s) {
    let a = /* @__PURE__ */ this.currentDocument.states.get(e), c = s.startsWith(":") ? s.replace(":", "").trim() : s;
    a.descriptions.push(/* @__PURE__ */ gC.sanitizeText(c, /* @__PURE__ */ Hl()));
  }
  cleanupLabel(e) {
    return e.substring(0, 1) === ":" ? e.substr(2).trim() : e.trim();
  }
  getDividerId() {
    return this.dividerCnt++, "divider-id-" + this.dividerCnt;
  }
  addStyleClass(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    this.classes.has(e) || this.classes.set(e, {
      id: e,
      styles: [],
      textStyles: []
    });
    let a = /* @__PURE__ */ this.classes.get(e);
    s == null ? void 0 : s.split(Me).forEach((c) => {
      let f = /* @__PURE__ */ c.replace(/([^;]*);/, "$1").trim();
      if (RegExp(me).exec(c)) {
        let d = /* @__PURE__ */ f.replace(be, Be).replace(me, be);
        a.textStyles.push(d);
      }
      a.styles.push(f);
    });
  }
  getClasses() {
    return this.classes;
  }
  setCssClass(e, s) {
    e.split(",").forEach((a) => {
      let c = /* @__PURE__ */ this.getState(a);
      if (c === void 0) {
        let f = /* @__PURE__ */ a.trim();
        this.addState(f), c = /* @__PURE__ */ this.getState(f);
      }
      c.classes.push(s);
    });
  }
  setStyle(e, s) {
    let a = /* @__PURE__ */ this.getState(e);
    a !== void 0 && a.styles.push(s);
  }
  setTextStyle(e, s) {
    let a = /* @__PURE__ */ this.getState(e);
    a !== void 0 && a.textStyles.push(s);
  }
  getDirectionStatement() {
    return this.rootDoc.find((e) => e.stmt === At);
  }
  getDirection() {
    var _a2;
    return ((_a2 = this.getDirectionStatement()) == null ? void 0 : _a2.value) ?? ee;
  }
  setDirection(e) {
    let s = /* @__PURE__ */ this.getDirectionStatement();
    s ? s.value = e : this.rootDoc.unshift({
      stmt: At,
      value: e
    });
  }
  trimColon(e) {
    return e && e[0] === ":" ? e.substr(1).trim() : e.trim();
  }
  getData() {
    let e = /* @__PURE__ */ Hl();
    return {
      nodes: this.nodes,
      edges: this.edges,
      other: {},
      config: e,
      direction: /* @__PURE__ */ Yt(/* @__PURE__ */ this.getRootDocV2())
    };
  }
  getConfig() {
    return Hl().state;
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "StateDB")), __publicField(_a, "relationType", {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
}), _a);
var Ve = /* @__PURE__ */ m$1((t) => `
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor || t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor || t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground || t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg || t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder || t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground || t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`, "getStyles"), ms = Ve;
export {
  je as j,
  ms as m,
  ss as s,
  xe as x
};
