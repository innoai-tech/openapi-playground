var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, _b, __2;
import { B as Bf, F as Ff, L as Lf, M as Mf, w as wf, v as vf, H as Hl, t as tt, i as ih, T as Tf, S as Sf, p as pl, W as hl, a1 as Is, O as Oe } from "./vendor-min-mermaid~chunk-ZKYS2E5M.BYv2PEOY.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var Et = /* @__PURE__ */ function() {
  var t = /* @__PURE__ */ m$1(function(X, o, l, x) {
    for (l = l || {}, x = X.length; x--; l[X[x]] = o) ;
    return l;
  }, "o"), n = [
    1,
    3
  ], f = [
    1,
    4
  ], u = [
    1,
    5
  ], c = [
    1,
    6
  ], g = [
    1,
    7
  ], y = [
    1,
    4,
    5,
    10,
    12,
    13,
    14,
    18,
    25,
    35,
    37,
    39,
    41,
    42,
    48,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    60,
    61,
    63,
    64,
    65,
    66,
    67
  ], S = [
    1,
    4,
    5,
    10,
    12,
    13,
    14,
    18,
    25,
    28,
    35,
    37,
    39,
    41,
    42,
    48,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    60,
    61,
    63,
    64,
    65,
    66,
    67
  ], i = [
    55,
    56,
    57
  ], A = [
    2,
    36
  ], h = [
    1,
    37
  ], T = [
    1,
    36
  ], m = [
    1,
    38
  ], b = [
    1,
    35
  ], q = [
    1,
    43
  ], p = [
    1,
    41
  ], K = [
    1,
    14
  ], dt = [
    1,
    23
  ], ft = [
    1,
    18
  ], pt = [
    1,
    19
  ], gt = [
    1,
    20
  ], ut = [
    1,
    21
  ], kt = [
    1,
    22
  ], ct = [
    1,
    24
  ], a = [
    1,
    25
  ], Bt = [
    1,
    26
  ], wt = [
    1,
    27
  ], It = [
    1,
    28
  ], Ot = [
    1,
    29
  ], W = [
    1,
    32
  ], N = [
    1,
    33
  ], P = [
    1,
    34
  ], _ = [
    1,
    39
  ], F = [
    1,
    40
  ], Q = [
    1,
    42
  ], C = [
    1,
    44
  ], R = [
    1,
    62
  ], H = [
    1,
    61
  ], v = [
    4,
    5,
    8,
    10,
    12,
    13,
    14,
    18,
    44,
    47,
    49,
    55,
    56,
    57,
    63,
    64,
    65,
    66,
    67
  ], Wt = [
    1,
    65
  ], Nt = [
    1,
    66
  ], Rt = [
    1,
    67
  ], Ht = [
    1,
    68
  ], Ut = [
    1,
    69
  ], jt = [
    1,
    70
  ], Xt = [
    1,
    71
  ], Mt = [
    1,
    72
  ], Yt = [
    1,
    73
  ], Gt = [
    1,
    74
  ], Kt = [
    1,
    75
  ], Zt = [
    1,
    76
  ], B = [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    18
  ], Z = [
    1,
    90
  ], J = [
    1,
    91
  ], $ = [
    1,
    92
  ], tt2 = [
    1,
    99
  ], et = [
    1,
    93
  ], at = [
    1,
    96
  ], it = [
    1,
    94
  ], nt = [
    1,
    95
  ], rt = [
    1,
    97
  ], st = [
    1,
    98
  ], St = [
    1,
    102
  ], Jt = [
    10,
    55,
    56,
    57
  ], I = [
    4,
    5,
    6,
    8,
    10,
    11,
    13,
    17,
    18,
    19,
    20,
    55,
    56,
    57
  ], At = {
    trace: /* @__PURE__ */ m$1(function() {
    }, "trace"),
    yy: {},
    symbols_: {
      error: 2,
      idStringToken: 3,
      ALPHA: 4,
      NUM: 5,
      NODE_STRING: 6,
      DOWN: 7,
      MINUS: 8,
      DEFAULT: 9,
      COMMA: 10,
      COLON: 11,
      AMP: 12,
      BRKT: 13,
      MULT: 14,
      UNICODE_TEXT: 15,
      styleComponent: 16,
      UNIT: 17,
      SPACE: 18,
      STYLE: 19,
      PCT: 20,
      idString: 21,
      style: 22,
      stylesOpt: 23,
      classDefStatement: 24,
      CLASSDEF: 25,
      start: 26,
      eol: 27,
      QUADRANT: 28,
      document: 29,
      line: 30,
      statement: 31,
      axisDetails: 32,
      quadrantDetails: 33,
      points: 34,
      title: 35,
      title_value: 36,
      acc_title: 37,
      acc_title_value: 38,
      acc_descr: 39,
      acc_descr_value: 40,
      acc_descr_multiline_value: 41,
      section: 42,
      text: 43,
      point_start: 44,
      point_x: 45,
      point_y: 46,
      class_name: 47,
      "X-AXIS": 48,
      "AXIS-TEXT-DELIMITER": 49,
      "Y-AXIS": 50,
      QUADRANT_1: 51,
      QUADRANT_2: 52,
      QUADRANT_3: 53,
      QUADRANT_4: 54,
      NEWLINE: 55,
      SEMI: 56,
      EOF: 57,
      alphaNumToken: 58,
      textNoTagsToken: 59,
      STR: 60,
      MD_STR: 61,
      alphaNum: 62,
      PUNCTUATION: 63,
      PLUS: 64,
      EQUALS: 65,
      DOT: 66,
      UNDERSCORE: 67,
      $accept: 0,
      $end: 1
    },
    terminals_: {
      2: "error",
      4: "ALPHA",
      5: "NUM",
      6: "NODE_STRING",
      7: "DOWN",
      8: "MINUS",
      9: "DEFAULT",
      10: "COMMA",
      11: "COLON",
      12: "AMP",
      13: "BRKT",
      14: "MULT",
      15: "UNICODE_TEXT",
      17: "UNIT",
      18: "SPACE",
      19: "STYLE",
      20: "PCT",
      25: "CLASSDEF",
      28: "QUADRANT",
      35: "title",
      36: "title_value",
      37: "acc_title",
      38: "acc_title_value",
      39: "acc_descr",
      40: "acc_descr_value",
      41: "acc_descr_multiline_value",
      42: "section",
      44: "point_start",
      45: "point_x",
      46: "point_y",
      47: "class_name",
      48: "X-AXIS",
      49: "AXIS-TEXT-DELIMITER",
      50: "Y-AXIS",
      51: "QUADRANT_1",
      52: "QUADRANT_2",
      53: "QUADRANT_3",
      54: "QUADRANT_4",
      55: "NEWLINE",
      56: "SEMI",
      57: "EOF",
      60: "STR",
      61: "MD_STR",
      63: "PUNCTUATION",
      64: "PLUS",
      65: "EQUALS",
      66: "DOT",
      67: "UNDERSCORE"
    },
    productions_: [
      0,
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        3,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        16,
        1
      ],
      [
        21,
        1
      ],
      [
        21,
        2
      ],
      [
        22,
        1
      ],
      [
        22,
        2
      ],
      [
        23,
        1
      ],
      [
        23,
        3
      ],
      [
        24,
        5
      ],
      [
        26,
        2
      ],
      [
        26,
        2
      ],
      [
        26,
        2
      ],
      [
        29,
        0
      ],
      [
        29,
        2
      ],
      [
        30,
        2
      ],
      [
        31,
        0
      ],
      [
        31,
        1
      ],
      [
        31,
        2
      ],
      [
        31,
        1
      ],
      [
        31,
        1
      ],
      [
        31,
        1
      ],
      [
        31,
        2
      ],
      [
        31,
        2
      ],
      [
        31,
        2
      ],
      [
        31,
        1
      ],
      [
        31,
        1
      ],
      [
        34,
        4
      ],
      [
        34,
        5
      ],
      [
        34,
        5
      ],
      [
        34,
        6
      ],
      [
        32,
        4
      ],
      [
        32,
        3
      ],
      [
        32,
        2
      ],
      [
        32,
        4
      ],
      [
        32,
        3
      ],
      [
        32,
        2
      ],
      [
        33,
        2
      ],
      [
        33,
        2
      ],
      [
        33,
        2
      ],
      [
        33,
        2
      ],
      [
        27,
        1
      ],
      [
        27,
        1
      ],
      [
        27,
        1
      ],
      [
        43,
        1
      ],
      [
        43,
        2
      ],
      [
        43,
        1
      ],
      [
        43,
        1
      ],
      [
        62,
        1
      ],
      [
        62,
        2
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        58,
        1
      ],
      [
        59,
        1
      ],
      [
        59,
        1
      ],
      [
        59,
        1
      ]
    ],
    performAction: /* @__PURE__ */ m$1(function(o, l, x, d, k, e, ht) {
      var s = e.length - 1;
      switch (k) {
        case 23:
          this.$ = e[s];
          break;
        case 24:
          this.$ = e[s - 1] + "" + e[s];
          break;
        case 26:
          this.$ = e[s - 1] + e[s];
          break;
        case 27:
          this.$ = [
            /* @__PURE__ */ e[s].trim()
          ];
          break;
        case 28:
          e[s - 2].push(/* @__PURE__ */ e[s].trim()), this.$ = e[s - 2];
          break;
        case 29:
          this.$ = e[s - 4], d.addClass(e[s - 2], e[s]);
          break;
        case 37:
          this.$ = [];
          break;
        case 42:
          this.$ = /* @__PURE__ */ e[s].trim(), d.setDiagramTitle(this.$);
          break;
        case 43:
          this.$ = /* @__PURE__ */ e[s].trim(), d.setAccTitle(this.$);
          break;
        case 44:
        case 45:
          this.$ = /* @__PURE__ */ e[s].trim(), d.setAccDescription(this.$);
          break;
        case 46:
          d.addSection(/* @__PURE__ */ e[s].substr(8)), this.$ = /* @__PURE__ */ e[s].substr(8);
          break;
        case 47:
          d.addPoint(e[s - 3], "", e[s - 1], e[s], []);
          break;
        case 48:
          d.addPoint(e[s - 4], e[s - 3], e[s - 1], e[s], []);
          break;
        case 49:
          d.addPoint(e[s - 4], "", e[s - 2], e[s - 1], e[s]);
          break;
        case 50:
          d.addPoint(e[s - 5], e[s - 4], e[s - 2], e[s - 1], e[s]);
          break;
        case 51:
          d.setXAxisLeftText(e[s - 2]), d.setXAxisRightText(e[s]);
          break;
        case 52:
          e[s - 1].text += " ⟶ ", d.setXAxisLeftText(e[s - 1]);
          break;
        case 53:
          d.setXAxisLeftText(e[s]);
          break;
        case 54:
          d.setYAxisBottomText(e[s - 2]), d.setYAxisTopText(e[s]);
          break;
        case 55:
          e[s - 1].text += " ⟶ ", d.setYAxisBottomText(e[s - 1]);
          break;
        case 56:
          d.setYAxisBottomText(e[s]);
          break;
        case 57:
          d.setQuadrant1Text(e[s]);
          break;
        case 58:
          d.setQuadrant2Text(e[s]);
          break;
        case 59:
          d.setQuadrant3Text(e[s]);
          break;
        case 60:
          d.setQuadrant4Text(e[s]);
          break;
        case 64:
          this.$ = {
            text: e[s],
            type: "text"
          };
          break;
        case 65:
          this.$ = {
            text: e[s - 1].text + "" + e[s],
            type: e[s - 1].type
          };
          break;
        case 66:
          this.$ = {
            text: e[s],
            type: "text"
          };
          break;
        case 67:
          this.$ = {
            text: e[s],
            type: "markdown"
          };
          break;
        case 68:
          this.$ = e[s];
          break;
        case 69:
          this.$ = e[s - 1] + "" + e[s];
          break;
      }
    }, "anonymous"),
    table: [
      {
        18: n,
        26: 1,
        27: 2,
        28: f,
        55: u,
        56: c,
        57: g
      },
      {
        1: [
          3
        ]
      },
      {
        18: n,
        26: 8,
        27: 2,
        28: f,
        55: u,
        56: c,
        57: g
      },
      {
        18: n,
        26: 9,
        27: 2,
        28: f,
        55: u,
        56: c,
        57: g
      },
      /* @__PURE__ */ t(y, [
        2,
        33
      ], {
        29: 10
      }),
      /* @__PURE__ */ t(S, [
        2,
        61
      ]),
      /* @__PURE__ */ t(S, [
        2,
        62
      ]),
      /* @__PURE__ */ t(S, [
        2,
        63
      ]),
      {
        1: [
          2,
          30
        ]
      },
      {
        1: [
          2,
          31
        ]
      },
      /* @__PURE__ */ t(i, A, {
        30: 11,
        31: 12,
        24: 13,
        32: 15,
        33: 16,
        34: 17,
        43: 30,
        58: 31,
        1: [
          2,
          32
        ],
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        18: K,
        25: dt,
        35: ft,
        37: pt,
        39: gt,
        41: ut,
        42: kt,
        48: ct,
        50: a,
        51: Bt,
        52: wt,
        53: It,
        54: Ot,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(y, [
        2,
        34
      ]),
      {
        27: 45,
        55: u,
        56: c,
        57: g
      },
      /* @__PURE__ */ t(i, [
        2,
        37
      ]),
      /* @__PURE__ */ t(i, A, {
        24: 13,
        32: 15,
        33: 16,
        34: 17,
        43: 30,
        58: 31,
        31: 46,
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        18: K,
        25: dt,
        35: ft,
        37: pt,
        39: gt,
        41: ut,
        42: kt,
        48: ct,
        50: a,
        51: Bt,
        52: wt,
        53: It,
        54: Ot,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        39
      ]),
      /* @__PURE__ */ t(i, [
        2,
        40
      ]),
      /* @__PURE__ */ t(i, [
        2,
        41
      ]),
      {
        36: [
          1,
          47
        ]
      },
      {
        38: [
          1,
          48
        ]
      },
      {
        40: [
          1,
          49
        ]
      },
      /* @__PURE__ */ t(i, [
        2,
        45
      ]),
      /* @__PURE__ */ t(i, [
        2,
        46
      ]),
      {
        18: [
          1,
          50
        ]
      },
      {
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        43: 51,
        58: 31,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      },
      {
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        43: 52,
        58: 31,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      },
      {
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        43: 53,
        58: 31,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      },
      {
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        43: 54,
        58: 31,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      },
      {
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        43: 55,
        58: 31,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      },
      {
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        43: 56,
        58: 31,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      },
      {
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        44: [
          1,
          57
        ],
        47: [
          1,
          58
        ],
        58: 60,
        59: 59,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      },
      /* @__PURE__ */ t(v, [
        2,
        64
      ]),
      /* @__PURE__ */ t(v, [
        2,
        66
      ]),
      /* @__PURE__ */ t(v, [
        2,
        67
      ]),
      /* @__PURE__ */ t(v, [
        2,
        70
      ]),
      /* @__PURE__ */ t(v, [
        2,
        71
      ]),
      /* @__PURE__ */ t(v, [
        2,
        72
      ]),
      /* @__PURE__ */ t(v, [
        2,
        73
      ]),
      /* @__PURE__ */ t(v, [
        2,
        74
      ]),
      /* @__PURE__ */ t(v, [
        2,
        75
      ]),
      /* @__PURE__ */ t(v, [
        2,
        76
      ]),
      /* @__PURE__ */ t(v, [
        2,
        77
      ]),
      /* @__PURE__ */ t(v, [
        2,
        78
      ]),
      /* @__PURE__ */ t(v, [
        2,
        79
      ]),
      /* @__PURE__ */ t(v, [
        2,
        80
      ]),
      /* @__PURE__ */ t(y, [
        2,
        35
      ]),
      /* @__PURE__ */ t(i, [
        2,
        38
      ]),
      /* @__PURE__ */ t(i, [
        2,
        42
      ]),
      /* @__PURE__ */ t(i, [
        2,
        43
      ]),
      /* @__PURE__ */ t(i, [
        2,
        44
      ]),
      {
        3: 64,
        4: Wt,
        5: Nt,
        6: Rt,
        7: Ht,
        8: Ut,
        9: jt,
        10: Xt,
        11: Mt,
        12: Yt,
        13: Gt,
        14: Kt,
        15: Zt,
        21: 63
      },
      /* @__PURE__ */ t(i, [
        2,
        53
      ], {
        59: 59,
        58: 60,
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        49: [
          1,
          77
        ],
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        56
      ], {
        59: 59,
        58: 60,
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        49: [
          1,
          78
        ],
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        57
      ], {
        59: 59,
        58: 60,
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        58
      ], {
        59: 59,
        58: 60,
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        59
      ], {
        59: 59,
        58: 60,
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        60
      ], {
        59: 59,
        58: 60,
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      {
        45: [
          1,
          79
        ]
      },
      {
        44: [
          1,
          80
        ]
      },
      /* @__PURE__ */ t(v, [
        2,
        65
      ]),
      /* @__PURE__ */ t(v, [
        2,
        81
      ]),
      /* @__PURE__ */ t(v, [
        2,
        82
      ]),
      /* @__PURE__ */ t(v, [
        2,
        83
      ]),
      {
        3: 82,
        4: Wt,
        5: Nt,
        6: Rt,
        7: Ht,
        8: Ut,
        9: jt,
        10: Xt,
        11: Mt,
        12: Yt,
        13: Gt,
        14: Kt,
        15: Zt,
        18: [
          1,
          81
        ]
      },
      /* @__PURE__ */ t(B, [
        2,
        23
      ]),
      /* @__PURE__ */ t(B, [
        2,
        1
      ]),
      /* @__PURE__ */ t(B, [
        2,
        2
      ]),
      /* @__PURE__ */ t(B, [
        2,
        3
      ]),
      /* @__PURE__ */ t(B, [
        2,
        4
      ]),
      /* @__PURE__ */ t(B, [
        2,
        5
      ]),
      /* @__PURE__ */ t(B, [
        2,
        6
      ]),
      /* @__PURE__ */ t(B, [
        2,
        7
      ]),
      /* @__PURE__ */ t(B, [
        2,
        8
      ]),
      /* @__PURE__ */ t(B, [
        2,
        9
      ]),
      /* @__PURE__ */ t(B, [
        2,
        10
      ]),
      /* @__PURE__ */ t(B, [
        2,
        11
      ]),
      /* @__PURE__ */ t(B, [
        2,
        12
      ]),
      /* @__PURE__ */ t(i, [
        2,
        52
      ], {
        58: 31,
        43: 83,
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        55
      ], {
        58: 31,
        43: 84,
        4: h,
        5: T,
        10: m,
        12: b,
        13: q,
        14: p,
        60: W,
        61: N,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      {
        46: [
          1,
          85
        ]
      },
      {
        45: [
          1,
          86
        ]
      },
      {
        4: Z,
        5: J,
        6: $,
        8: tt2,
        11: et,
        13: at,
        16: 89,
        17: it,
        18: nt,
        19: rt,
        20: st,
        22: 88,
        23: 87
      },
      /* @__PURE__ */ t(B, [
        2,
        24
      ]),
      /* @__PURE__ */ t(i, [
        2,
        51
      ], {
        59: 59,
        58: 60,
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        54
      ], {
        59: 59,
        58: 60,
        4: h,
        5: T,
        8: R,
        10: m,
        12: b,
        13: q,
        14: p,
        18: H,
        63: P,
        64: _,
        65: F,
        66: Q,
        67: C
      }),
      /* @__PURE__ */ t(i, [
        2,
        47
      ], {
        22: 88,
        16: 89,
        23: 100,
        4: Z,
        5: J,
        6: $,
        8: tt2,
        11: et,
        13: at,
        17: it,
        18: nt,
        19: rt,
        20: st
      }),
      {
        46: [
          1,
          101
        ]
      },
      /* @__PURE__ */ t(i, [
        2,
        29
      ], {
        10: St
      }),
      /* @__PURE__ */ t(Jt, [
        2,
        27
      ], {
        16: 103,
        4: Z,
        5: J,
        6: $,
        8: tt2,
        11: et,
        13: at,
        17: it,
        18: nt,
        19: rt,
        20: st
      }),
      /* @__PURE__ */ t(I, [
        2,
        25
      ]),
      /* @__PURE__ */ t(I, [
        2,
        13
      ]),
      /* @__PURE__ */ t(I, [
        2,
        14
      ]),
      /* @__PURE__ */ t(I, [
        2,
        15
      ]),
      /* @__PURE__ */ t(I, [
        2,
        16
      ]),
      /* @__PURE__ */ t(I, [
        2,
        17
      ]),
      /* @__PURE__ */ t(I, [
        2,
        18
      ]),
      /* @__PURE__ */ t(I, [
        2,
        19
      ]),
      /* @__PURE__ */ t(I, [
        2,
        20
      ]),
      /* @__PURE__ */ t(I, [
        2,
        21
      ]),
      /* @__PURE__ */ t(I, [
        2,
        22
      ]),
      /* @__PURE__ */ t(i, [
        2,
        49
      ], {
        10: St
      }),
      /* @__PURE__ */ t(i, [
        2,
        48
      ], {
        22: 88,
        16: 89,
        23: 104,
        4: Z,
        5: J,
        6: $,
        8: tt2,
        11: et,
        13: at,
        17: it,
        18: nt,
        19: rt,
        20: st
      }),
      {
        4: Z,
        5: J,
        6: $,
        8: tt2,
        11: et,
        13: at,
        16: 89,
        17: it,
        18: nt,
        19: rt,
        20: st,
        22: 105
      },
      /* @__PURE__ */ t(I, [
        2,
        26
      ]),
      /* @__PURE__ */ t(i, [
        2,
        50
      ], {
        10: St
      }),
      /* @__PURE__ */ t(Jt, [
        2,
        28
      ], {
        16: 103,
        4: Z,
        5: J,
        6: $,
        8: tt2,
        11: et,
        13: at,
        17: it,
        18: nt,
        19: rt,
        20: st
      })
    ],
    defaultActions: {
      8: [
        2,
        30
      ],
      9: [
        2,
        31
      ]
    },
    parseError: /* @__PURE__ */ m$1(function(o, l) {
      if (l.recoverable) this.trace(o);
      else {
        var x = new Error(o);
        throw x.hash = l, x;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ m$1(function(o) {
      var l = this, x = [
        0
      ], d = [], k = [
        null
      ], e = [], ht = this.table, s = "", yt = 0, $t = 0, te = 0, Te = 2, ee = 1, me = /* @__PURE__ */ e.slice.call(arguments, 1), D = /* @__PURE__ */ Object.create(this.lexer), M = {
        yy: {}
      };
      for (var _t in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _t) && (M.yy[_t] = this.yy[_t]);
      D.setInput(o, M.yy), M.yy.lexer = D, M.yy.parser = this, typeof D.yylloc > "u" && (D.yylloc = {});
      var Ft = D.yylloc;
      e.push(Ft);
      var be = D.options && D.options.ranges;
      typeof M.yy.parseError == "function" ? this.parseError = M.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Ie(w) {
        x.length = x.length - 2 * w, k.length = k.length - w, e.length = e.length - w;
      }
      m$1(Ie, "popStack");
      function qe() {
        var w;
        return w = d.pop() || D.lex() || ee, typeof w != "number" && (w instanceof Array && (d = w, w = /* @__PURE__ */ d.pop()), w = l.symbols_[w] || w), w;
      }
      m$1(qe, "lex");
      for (var z, Qt, Y, O, Oe2, Ct, ot = {}, Tt, U, ae, mt; ; ) {
        if (Y = x[x.length - 1], this.defaultActions[Y] ? O = this.defaultActions[Y] : ((z === null || typeof z > "u") && (z = /* @__PURE__ */ qe()), O = ht[Y] && ht[Y][z]), typeof O > "u" || !O.length || !O[0]) {
          var Lt = "";
          mt = [];
          for (Tt in ht[Y]) this.terminals_[Tt] && Tt > Te && mt.push("'" + this.terminals_[Tt] + "'");
          D.showPosition ? Lt = "Parse error on line " + (yt + 1) + `:
` + D.showPosition() + `
Expecting ` + mt.join(", ") + ", got '" + (this.terminals_[z] || z) + "'" : Lt = "Parse error on line " + (yt + 1) + ": Unexpected " + (z == ee ? "end of input" : "'" + (this.terminals_[z] || z) + "'"), this.parseError(Lt, {
            text: D.match,
            token: this.terminals_[z] || z,
            line: D.yylineno,
            loc: Ft,
            expected: mt
          });
        }
        if (O[0] instanceof Array && O.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Y + ", token: " + z);
        switch (O[0]) {
          case 1:
            x.push(z), k.push(D.yytext), e.push(D.yylloc), x.push(O[1]), z = null, Qt ? (z = Qt, Qt = null) : ($t = D.yyleng, s = D.yytext, yt = D.yylineno, Ft = D.yylloc, te > 0);
            break;
          case 2:
            if (U = this.productions_[O[1]][1], ot.$ = k[k.length - U], ot._$ = {
              first_line: e[e.length - (U || 1)].first_line,
              last_line: e[e.length - 1].last_line,
              first_column: e[e.length - (U || 1)].first_column,
              last_column: e[e.length - 1].last_column
            }, be && (ot._$.range = [
              e[e.length - (U || 1)].range[0],
              e[e.length - 1].range[1]
            ]), Ct = /* @__PURE__ */ this.performAction.apply(ot, /* @__PURE__ */ [
              s,
              $t,
              yt,
              M.yy,
              O[1],
              k,
              e
            ].concat(me)), typeof Ct < "u") return Ct;
            U && (x = /* @__PURE__ */ x.slice(0, -1 * U * 2), k = /* @__PURE__ */ k.slice(0, -1 * U), e = /* @__PURE__ */ e.slice(0, -1 * U)), x.push(this.productions_[O[1]][0]), k.push(ot.$), e.push(ot._$), ae = ht[x[x.length - 2]][x[x.length - 1]], x.push(ae);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, ye = /* @__PURE__ */ function() {
    var X = {
      EOF: 1,
      parseError: /* @__PURE__ */ m$1(function(l, x) {
        if (this.yy.parser) this.yy.parser.parseError(l, x);
        else throw new Error(l);
      }, "parseError"),
      setInput: /* @__PURE__ */ m$1(function(o, l) {
        return this.yy = l || this.yy || {}, this._input = o, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
        var l = /* @__PURE__ */ o.match(/(?:\r\n?|\n).*/g);
        return l ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), o;
      }, "input"),
      unput: /* @__PURE__ */ m$1(function(o) {
        var l = o.length, x = /* @__PURE__ */ o.split(/(?:\r\n?|\n)/g);
        this._input = o + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - l), this.offset -= l;
        var d = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
        this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), x.length - 1 && (this.yylineno -= x.length - 1);
        var k = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: x ? (x.length === d.length ? this.yylloc.first_column : 0) + d[d.length - x.length].length - x[0].length : this.yylloc.first_column - l
        }, this.options.ranges && (this.yylloc.range = [
          k[0],
          k[0] + this.yyleng - l
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
        var o = /* @__PURE__ */ this.pastInput(), l = /* @__PURE__ */ new Array(o.length + 1).join("-");
        return o + this.upcomingInput() + `
` + l + "^";
      }, "showPosition"),
      test_match: /* @__PURE__ */ m$1(function(o, l) {
        var x, d, k;
        if (this.options.backtrack_lexer && (k = {
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
        }, this.options.ranges && (k.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), d = /* @__PURE__ */ o[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
        }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
          this.offset,
          this.offset += this.yyleng
        ]), this._more = false, this._backtrack = false, this._input = /* @__PURE__ */ this._input.slice(o[0].length), this.matched += o[0], x = /* @__PURE__ */ this.performAction.call(this, this.yy, this, l, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), x) return x;
        if (this._backtrack) {
          for (var e in k) this[e] = k[e];
          return false;
        }
        return false;
      }, "test_match"),
      next: /* @__PURE__ */ m$1(function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var o, l, x, d;
        this._more || (this.yytext = "", this.match = "");
        for (var k = /* @__PURE__ */ this._currentRules(), e = 0; e < k.length; e++) if (x = /* @__PURE__ */ this._input.match(this.rules[k[e]]), x && (!l || x[0].length > l[0].length)) {
          if (l = x, d = e, this.options.backtrack_lexer) {
            if (o = /* @__PURE__ */ this.test_match(x, k[e]), o !== false) return o;
            if (this._backtrack) {
              l = false;
              continue;
            } else return false;
          } else if (!this.options.flex) break;
        }
        return l ? (o = /* @__PURE__ */ this.test_match(l, k[d]), o !== false ? o : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      lex: /* @__PURE__ */ m$1(function() {
        var l = /* @__PURE__ */ this.next();
        return l || this.lex();
      }, "lex"),
      begin: /* @__PURE__ */ m$1(function(l) {
        this.conditionStack.push(l);
      }, "begin"),
      popState: /* @__PURE__ */ m$1(function() {
        var l = this.conditionStack.length - 1;
        return l > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      _currentRules: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      topState: /* @__PURE__ */ m$1(function(l) {
        return l = this.conditionStack.length - 1 - Math.abs(l || 0), l >= 0 ? this.conditionStack[l] : "INITIAL";
      }, "topState"),
      pushState: /* @__PURE__ */ m$1(function(l) {
        this.begin(l);
      }, "pushState"),
      stateStackSize: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: /* @__PURE__ */ m$1(function(l, x, d, k) {
        switch (d) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 55;
          case 3:
            break;
          case 4:
            return this.begin("title"), 35;
          case 5:
            return this.popState(), "title_value";
          case 6:
            return this.begin("acc_title"), 37;
          case 7:
            return this.popState(), "acc_title_value";
          case 8:
            return this.begin("acc_descr"), 39;
          case 9:
            return this.popState(), "acc_descr_value";
          case 10:
            this.begin("acc_descr_multiline");
            break;
          case 11:
            this.popState();
            break;
          case 12:
            return "acc_descr_multiline_value";
          case 13:
            return 48;
          case 14:
            return 50;
          case 15:
            return 49;
          case 16:
            return 51;
          case 17:
            return 52;
          case 18:
            return 53;
          case 19:
            return 54;
          case 20:
            return 25;
          case 21:
            this.begin("md_string");
            break;
          case 22:
            return "MD_STR";
          case 23:
            this.popState();
            break;
          case 24:
            this.begin("string");
            break;
          case 25:
            this.popState();
            break;
          case 26:
            return "STR";
          case 27:
            this.begin("class_name");
            break;
          case 28:
            return this.popState(), 47;
          case 29:
            return this.begin("point_start"), 44;
          case 30:
            return this.begin("point_x"), 45;
          case 31:
            this.popState();
            break;
          case 32:
            this.popState(), this.begin("point_y");
            break;
          case 33:
            return this.popState(), 46;
          case 34:
            return 28;
          case 35:
            return 4;
          case 36:
            return 11;
          case 37:
            return 64;
          case 38:
            return 10;
          case 39:
            return 65;
          case 40:
            return 65;
          case 41:
            return 14;
          case 42:
            return 13;
          case 43:
            return 67;
          case 44:
            return 66;
          case 45:
            return 12;
          case 46:
            return 8;
          case 47:
            return 5;
          case 48:
            return 18;
          case 49:
            return 56;
          case 50:
            return 63;
          case 51:
            return 57;
        }
      }, "anonymous"),
      rules: [
        /^(?:%%(?!\{)[^\n]*)/i,
        /^(?:[^\}]%%[^\n]*)/i,
        /^(?:[\n\r]+)/i,
        /^(?:%%[^\n]*)/i,
        /^(?:title\b)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accTitle\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*\{\s*)/i,
        /^(?:[\}])/i,
        /^(?:[^\}]*)/i,
        /^(?: *x-axis *)/i,
        /^(?: *y-axis *)/i,
        /^(?: *--+> *)/i,
        /^(?: *quadrant-1 *)/i,
        /^(?: *quadrant-2 *)/i,
        /^(?: *quadrant-3 *)/i,
        /^(?: *quadrant-4 *)/i,
        /^(?:classDef\b)/i,
        /^(?:["][`])/i,
        /^(?:[^`"]+)/i,
        /^(?:[`]["])/i,
        /^(?:["])/i,
        /^(?:["])/i,
        /^(?:[^"]*)/i,
        /^(?::::)/i,
        /^(?:^\w+)/i,
        /^(?:\s*:\s*\[\s*)/i,
        /^(?:(1)|(0(.\d+)?))/i,
        /^(?:\s*\] *)/i,
        /^(?:\s*,\s*)/i,
        /^(?:(1)|(0(.\d+)?))/i,
        /^(?: *quadrantChart *)/i,
        /^(?:[A-Za-z]+)/i,
        /^(?::)/i,
        /^(?:\+)/i,
        /^(?:,)/i,
        /^(?:=)/i,
        /^(?:=)/i,
        /^(?:\*)/i,
        /^(?:#)/i,
        /^(?:[\_])/i,
        /^(?:\.)/i,
        /^(?:&)/i,
        /^(?:-)/i,
        /^(?:[0-9]+)/i,
        /^(?:\s)/i,
        /^(?:;)/i,
        /^(?:[!"#$%&'*+,-.`?\\_/])/i,
        /^(?:$)/i
      ],
      conditions: {
        class_name: {
          rules: [
            28
          ],
          inclusive: false
        },
        point_y: {
          rules: [
            33
          ],
          inclusive: false
        },
        point_x: {
          rules: [
            32
          ],
          inclusive: false
        },
        point_start: {
          rules: [
            30,
            31
          ],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [
            11,
            12
          ],
          inclusive: false
        },
        acc_descr: {
          rules: [
            9
          ],
          inclusive: false
        },
        acc_title: {
          rules: [
            7
          ],
          inclusive: false
        },
        title: {
          rules: [
            5
          ],
          inclusive: false
        },
        md_string: {
          rules: [
            22,
            23
          ],
          inclusive: false
        },
        string: {
          rules: [
            25,
            26
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
            6,
            8,
            10,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            24,
            27,
            29,
            34,
            35,
            36,
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
            51
          ],
          inclusive: true
        }
      }
    };
    return X;
  }();
  At.lexer = ye;
  function Pt() {
    this.yy = {};
  }
  return m$1(Pt, "Parser"), Pt.prototype = At, At.Parser = Pt, new Pt();
}();
Et.parser = Et;
var he = Et;
var V = /* @__PURE__ */ hl(), qt = (_a = class {
  constructor() {
    this.classes = /* @__PURE__ */ new Map();
    this.config = /* @__PURE__ */ this.getDefaultConfig(), this.themeConfig = /* @__PURE__ */ this.getDefaultThemeConfig(), this.data = /* @__PURE__ */ this.getDefaultData();
  }
  getDefaultData() {
    return {
      titleText: "",
      quadrant1Text: "",
      quadrant2Text: "",
      quadrant3Text: "",
      quadrant4Text: "",
      xAxisLeftText: "",
      xAxisRightText: "",
      yAxisBottomText: "",
      yAxisTopText: "",
      points: []
    };
  }
  getDefaultConfig() {
    var _a2, _b2, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    return {
      showXAxis: true,
      showYAxis: true,
      showTitle: true,
      chartHeight: ((_a2 = pl.quadrantChart) == null ? void 0 : _a2.chartWidth) || 500,
      chartWidth: ((_b2 = pl.quadrantChart) == null ? void 0 : _b2.chartHeight) || 500,
      titlePadding: ((_c = pl.quadrantChart) == null ? void 0 : _c.titlePadding) || 10,
      titleFontSize: ((_d = pl.quadrantChart) == null ? void 0 : _d.titleFontSize) || 20,
      quadrantPadding: ((_e2 = pl.quadrantChart) == null ? void 0 : _e2.quadrantPadding) || 5,
      xAxisLabelPadding: ((_f = pl.quadrantChart) == null ? void 0 : _f.xAxisLabelPadding) || 5,
      yAxisLabelPadding: ((_g = pl.quadrantChart) == null ? void 0 : _g.yAxisLabelPadding) || 5,
      xAxisLabelFontSize: ((_h = pl.quadrantChart) == null ? void 0 : _h.xAxisLabelFontSize) || 16,
      yAxisLabelFontSize: ((_i = pl.quadrantChart) == null ? void 0 : _i.yAxisLabelFontSize) || 16,
      quadrantLabelFontSize: ((_j = pl.quadrantChart) == null ? void 0 : _j.quadrantLabelFontSize) || 16,
      quadrantTextTopPadding: ((_k = pl.quadrantChart) == null ? void 0 : _k.quadrantTextTopPadding) || 5,
      pointTextPadding: ((_l = pl.quadrantChart) == null ? void 0 : _l.pointTextPadding) || 5,
      pointLabelFontSize: ((_m = pl.quadrantChart) == null ? void 0 : _m.pointLabelFontSize) || 12,
      pointRadius: ((_n = pl.quadrantChart) == null ? void 0 : _n.pointRadius) || 5,
      xAxisPosition: ((_o = pl.quadrantChart) == null ? void 0 : _o.xAxisPosition) || "top",
      yAxisPosition: ((_p = pl.quadrantChart) == null ? void 0 : _p.yAxisPosition) || "left",
      quadrantInternalBorderStrokeWidth: ((_q = pl.quadrantChart) == null ? void 0 : _q.quadrantInternalBorderStrokeWidth) || 1,
      quadrantExternalBorderStrokeWidth: ((_r = pl.quadrantChart) == null ? void 0 : _r.quadrantExternalBorderStrokeWidth) || 2
    };
  }
  getDefaultThemeConfig() {
    return {
      quadrant1Fill: V.quadrant1Fill,
      quadrant2Fill: V.quadrant2Fill,
      quadrant3Fill: V.quadrant3Fill,
      quadrant4Fill: V.quadrant4Fill,
      quadrant1TextFill: V.quadrant1TextFill,
      quadrant2TextFill: V.quadrant2TextFill,
      quadrant3TextFill: V.quadrant3TextFill,
      quadrant4TextFill: V.quadrant4TextFill,
      quadrantPointFill: V.quadrantPointFill,
      quadrantPointTextFill: V.quadrantPointTextFill,
      quadrantXAxisTextFill: V.quadrantXAxisTextFill,
      quadrantYAxisTextFill: V.quadrantYAxisTextFill,
      quadrantTitleFill: V.quadrantTitleFill,
      quadrantInternalBorderStrokeFill: V.quadrantInternalBorderStrokeFill,
      quadrantExternalBorderStrokeFill: V.quadrantExternalBorderStrokeFill
    };
  }
  clear() {
    this.config = /* @__PURE__ */ this.getDefaultConfig(), this.themeConfig = /* @__PURE__ */ this.getDefaultThemeConfig(), this.data = /* @__PURE__ */ this.getDefaultData(), this.classes = /* @__PURE__ */ new Map(), tt.info("clear called");
  }
  setData(n) {
    this.data = {
      ...this.data,
      ...n
    };
  }
  addPoints(n) {
    this.data.points = [
      ...n,
      ...this.data.points
    ];
  }
  addClass(n, f) {
    this.classes.set(n, f);
  }
  setConfig(n) {
    tt.trace("setConfig called with: ", n), this.config = {
      ...this.config,
      ...n
    };
  }
  setThemeConfig(n) {
    tt.trace("setThemeConfig called with: ", n), this.themeConfig = {
      ...this.themeConfig,
      ...n
    };
  }
  calculateSpace(n, f, u, c) {
    let g = this.config.xAxisLabelPadding * 2 + this.config.xAxisLabelFontSize, y = {
      top: n === "top" && f ? g : 0,
      bottom: n === "bottom" && f ? g : 0
    }, S = this.config.yAxisLabelPadding * 2 + this.config.yAxisLabelFontSize, i = {
      left: this.config.yAxisPosition === "left" && u ? S : 0,
      right: this.config.yAxisPosition === "right" && u ? S : 0
    }, A = this.config.titleFontSize + this.config.titlePadding * 2, h = {
      top: c ? A : 0
    }, T = this.config.quadrantPadding + i.left, m = this.config.quadrantPadding + y.top + h.top, b = this.config.chartWidth - this.config.quadrantPadding * 2 - i.left - i.right, q = this.config.chartHeight - this.config.quadrantPadding * 2 - y.top - y.bottom - h.top, p = b / 2, K = q / 2;
    return {
      xAxisSpace: y,
      yAxisSpace: i,
      titleSpace: h,
      quadrantSpace: {
        quadrantLeft: T,
        quadrantTop: m,
        quadrantWidth: b,
        quadrantHalfWidth: p,
        quadrantHeight: q,
        quadrantHalfHeight: K
      }
    };
  }
  getAxisLabels(n, f, u, c) {
    let { quadrantSpace: g, titleSpace: y } = c, { quadrantHalfHeight: S, quadrantHeight: i, quadrantLeft: A, quadrantHalfWidth: h, quadrantTop: T, quadrantWidth: m } = g, b = !!this.data.xAxisRightText, q = !!this.data.yAxisTopText, p = [];
    return this.data.xAxisLeftText && f && p.push({
      text: this.data.xAxisLeftText,
      fill: this.themeConfig.quadrantXAxisTextFill,
      x: A + (b ? h / 2 : 0),
      y: n === "top" ? this.config.xAxisLabelPadding + y.top : this.config.xAxisLabelPadding + T + i + this.config.quadrantPadding,
      fontSize: this.config.xAxisLabelFontSize,
      verticalPos: b ? "center" : "left",
      horizontalPos: "top",
      rotation: 0
    }), this.data.xAxisRightText && f && p.push({
      text: this.data.xAxisRightText,
      fill: this.themeConfig.quadrantXAxisTextFill,
      x: A + h + (b ? h / 2 : 0),
      y: n === "top" ? this.config.xAxisLabelPadding + y.top : this.config.xAxisLabelPadding + T + i + this.config.quadrantPadding,
      fontSize: this.config.xAxisLabelFontSize,
      verticalPos: b ? "center" : "left",
      horizontalPos: "top",
      rotation: 0
    }), this.data.yAxisBottomText && u && p.push({
      text: this.data.yAxisBottomText,
      fill: this.themeConfig.quadrantYAxisTextFill,
      x: this.config.yAxisPosition === "left" ? this.config.yAxisLabelPadding : this.config.yAxisLabelPadding + A + m + this.config.quadrantPadding,
      y: T + i - (q ? S / 2 : 0),
      fontSize: this.config.yAxisLabelFontSize,
      verticalPos: q ? "center" : "left",
      horizontalPos: "top",
      rotation: -90
    }), this.data.yAxisTopText && u && p.push({
      text: this.data.yAxisTopText,
      fill: this.themeConfig.quadrantYAxisTextFill,
      x: this.config.yAxisPosition === "left" ? this.config.yAxisLabelPadding : this.config.yAxisLabelPadding + A + m + this.config.quadrantPadding,
      y: T + S - (q ? S / 2 : 0),
      fontSize: this.config.yAxisLabelFontSize,
      verticalPos: q ? "center" : "left",
      horizontalPos: "top",
      rotation: -90
    }), p;
  }
  getQuadrants(n) {
    let { quadrantSpace: f } = n, { quadrantHalfHeight: u, quadrantLeft: c, quadrantHalfWidth: g, quadrantTop: y } = f, S = [
      {
        text: {
          text: this.data.quadrant1Text,
          fill: this.themeConfig.quadrant1TextFill,
          x: 0,
          y: 0,
          fontSize: this.config.quadrantLabelFontSize,
          verticalPos: "center",
          horizontalPos: "middle",
          rotation: 0
        },
        x: c + g,
        y,
        width: g,
        height: u,
        fill: this.themeConfig.quadrant1Fill
      },
      {
        text: {
          text: this.data.quadrant2Text,
          fill: this.themeConfig.quadrant2TextFill,
          x: 0,
          y: 0,
          fontSize: this.config.quadrantLabelFontSize,
          verticalPos: "center",
          horizontalPos: "middle",
          rotation: 0
        },
        x: c,
        y,
        width: g,
        height: u,
        fill: this.themeConfig.quadrant2Fill
      },
      {
        text: {
          text: this.data.quadrant3Text,
          fill: this.themeConfig.quadrant3TextFill,
          x: 0,
          y: 0,
          fontSize: this.config.quadrantLabelFontSize,
          verticalPos: "center",
          horizontalPos: "middle",
          rotation: 0
        },
        x: c,
        y: y + u,
        width: g,
        height: u,
        fill: this.themeConfig.quadrant3Fill
      },
      {
        text: {
          text: this.data.quadrant4Text,
          fill: this.themeConfig.quadrant4TextFill,
          x: 0,
          y: 0,
          fontSize: this.config.quadrantLabelFontSize,
          verticalPos: "center",
          horizontalPos: "middle",
          rotation: 0
        },
        x: c + g,
        y: y + u,
        width: g,
        height: u,
        fill: this.themeConfig.quadrant4Fill
      }
    ];
    for (let i of S) i.text.x = i.x + i.width / 2, this.data.points.length === 0 ? (i.text.y = i.y + i.height / 2, i.text.horizontalPos = "middle") : (i.text.y = i.y + this.config.quadrantTextTopPadding, i.text.horizontalPos = "top");
    return S;
  }
  getQuadrantPoints(n) {
    let { quadrantSpace: f } = n, { quadrantHeight: u, quadrantLeft: c, quadrantTop: g, quadrantWidth: y } = f, S = /* @__PURE__ */ Is().domain([
      0,
      1
    ]).range([
      c,
      y + c
    ]), i = /* @__PURE__ */ Is().domain([
      0,
      1
    ]).range([
      u + g,
      g
    ]);
    return this.data.points.map((h) => {
      let T = /* @__PURE__ */ this.classes.get(h.className);
      return T && (h = {
        ...T,
        ...h
      }), {
        x: /* @__PURE__ */ S(h.x),
        y: /* @__PURE__ */ i(h.y),
        fill: h.color ?? this.themeConfig.quadrantPointFill,
        radius: h.radius ?? this.config.pointRadius,
        text: {
          text: h.text,
          fill: this.themeConfig.quadrantPointTextFill,
          x: /* @__PURE__ */ S(h.x),
          y: i(h.y) + this.config.pointTextPadding,
          verticalPos: "center",
          horizontalPos: "top",
          fontSize: this.config.pointLabelFontSize,
          rotation: 0
        },
        strokeColor: h.strokeColor ?? this.themeConfig.quadrantPointFill,
        strokeWidth: h.strokeWidth ?? "0px"
      };
    });
  }
  getBorders(n) {
    let f = this.config.quadrantExternalBorderStrokeWidth / 2, { quadrantSpace: u } = n, { quadrantHalfHeight: c, quadrantHeight: g, quadrantLeft: y, quadrantHalfWidth: S, quadrantTop: i, quadrantWidth: A } = u;
    return [
      {
        strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
        strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
        x1: y - f,
        y1: i,
        x2: y + A + f,
        y2: i
      },
      {
        strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
        strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
        x1: y + A,
        y1: i + f,
        x2: y + A,
        y2: i + g - f
      },
      {
        strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
        strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
        x1: y - f,
        y1: i + g,
        x2: y + A + f,
        y2: i + g
      },
      {
        strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
        strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
        x1: y,
        y1: i + f,
        x2: y,
        y2: i + g - f
      },
      {
        strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
        strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
        x1: y + S,
        y1: i + f,
        x2: y + S,
        y2: i + g - f
      },
      {
        strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
        strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
        x1: y + f,
        y1: i + c,
        x2: y + A - f,
        y2: i + c
      }
    ];
  }
  getTitle(n) {
    if (n) return {
      text: this.data.titleText,
      fill: this.themeConfig.quadrantTitleFill,
      fontSize: this.config.titleFontSize,
      horizontalPos: "top",
      verticalPos: "center",
      rotation: 0,
      y: this.config.titlePadding,
      x: this.config.chartWidth / 2
    };
  }
  build() {
    let n = this.config.showXAxis && !!(this.data.xAxisLeftText || this.data.xAxisRightText), f = this.config.showYAxis && !!(this.data.yAxisTopText || this.data.yAxisBottomText), u = this.config.showTitle && !!this.data.titleText, c = this.data.points.length > 0 ? "bottom" : this.config.xAxisPosition, g = /* @__PURE__ */ this.calculateSpace(c, n, f, u);
    return {
      points: /* @__PURE__ */ this.getQuadrantPoints(g),
      quadrants: /* @__PURE__ */ this.getQuadrants(g),
      axisLabels: /* @__PURE__ */ this.getAxisLabels(c, n, f, g),
      borderLines: /* @__PURE__ */ this.getBorders(g),
      title: /* @__PURE__ */ this.getTitle(u)
    };
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "QuadrantBuilder")), _a);
var G = (_b = class extends Error {
  constructor(n, f, u) {
    super(`value for ${n} ${f} is invalid, please use a valid ${u}`), this.name = "InvalidStyleError";
  }
}, __2 = new WeakMap(), __privateAdd(_b, __2, m$1(_b, "InvalidStyleError")), _b);
function zt(t) {
  return !/^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(t);
}
m$1(zt, "validateHexCode");
function xe(t) {
  return !/^\d+$/.test(t);
}
m$1(xe, "validateNumber");
function fe(t) {
  return !/^\d+px$/.test(t);
}
m$1(fe, "validateSizeInPixels");
var ke = /* @__PURE__ */ Hl();
function j(t) {
  return Oe(/* @__PURE__ */ t.trim(), ke);
}
m$1(j, "textSanitizer");
var E = new qt();
function Se(t) {
  E.setData({
    quadrant1Text: /* @__PURE__ */ j(t.text)
  });
}
m$1(Se, "setQuadrant1Text");
function Ae(t) {
  E.setData({
    quadrant2Text: /* @__PURE__ */ j(t.text)
  });
}
m$1(Ae, "setQuadrant2Text");
function Pe(t) {
  E.setData({
    quadrant3Text: /* @__PURE__ */ j(t.text)
  });
}
m$1(Pe, "setQuadrant3Text");
function _e(t) {
  E.setData({
    quadrant4Text: /* @__PURE__ */ j(t.text)
  });
}
m$1(_e, "setQuadrant4Text");
function Fe(t) {
  E.setData({
    xAxisLeftText: /* @__PURE__ */ j(t.text)
  });
}
m$1(Fe, "setXAxisLeftText");
function Qe(t) {
  E.setData({
    xAxisRightText: /* @__PURE__ */ j(t.text)
  });
}
m$1(Qe, "setXAxisRightText");
function Ce(t) {
  E.setData({
    yAxisTopText: /* @__PURE__ */ j(t.text)
  });
}
m$1(Ce, "setYAxisTopText");
function Le(t) {
  E.setData({
    yAxisBottomText: /* @__PURE__ */ j(t.text)
  });
}
m$1(Le, "setYAxisBottomText");
function Vt(t) {
  let n = {};
  for (let f of t) {
    let [u, c] = f.trim().split(/\s*:\s*/);
    if (u === "radius") {
      if (xe(c)) throw new G(u, c, "number");
      n.radius = /* @__PURE__ */ parseInt(c);
    } else if (u === "color") {
      if (zt(c)) throw new G(u, c, "hex code");
      n.color = c;
    } else if (u === "stroke-color") {
      if (zt(c)) throw new G(u, c, "hex code");
      n.strokeColor = c;
    } else if (u === "stroke-width") {
      if (fe(c)) throw new G(u, c, "number of pixels (eg. 10px)");
      n.strokeWidth = c;
    } else throw new Error(`style named ${u} is not supported.`);
  }
  return n;
}
m$1(Vt, "parseStyles");
function ve(t, n, f, u, c) {
  let g = /* @__PURE__ */ Vt(c);
  E.addPoints([
    {
      x: f,
      y: u,
      text: /* @__PURE__ */ j(t.text),
      className: n,
      ...g
    }
  ]);
}
m$1(ve, "addPoint");
function De(t, n) {
  E.addClass(t, /* @__PURE__ */ Vt(n));
}
m$1(De, "addClass");
function Ee(t) {
  E.setConfig({
    chartWidth: t
  });
}
m$1(Ee, "setWidth");
function ze(t) {
  E.setConfig({
    chartHeight: t
  });
}
m$1(ze, "setHeight");
function Ve() {
  let t = /* @__PURE__ */ Hl(), { themeVariables: n, quadrantChart: f } = t;
  return f && E.setConfig(f), E.setThemeConfig({
    quadrant1Fill: n.quadrant1Fill,
    quadrant2Fill: n.quadrant2Fill,
    quadrant3Fill: n.quadrant3Fill,
    quadrant4Fill: n.quadrant4Fill,
    quadrant1TextFill: n.quadrant1TextFill,
    quadrant2TextFill: n.quadrant2TextFill,
    quadrant3TextFill: n.quadrant3TextFill,
    quadrant4TextFill: n.quadrant4TextFill,
    quadrantPointFill: n.quadrantPointFill,
    quadrantPointTextFill: n.quadrantPointTextFill,
    quadrantXAxisTextFill: n.quadrantXAxisTextFill,
    quadrantYAxisTextFill: n.quadrantYAxisTextFill,
    quadrantExternalBorderStrokeFill: n.quadrantExternalBorderStrokeFill,
    quadrantInternalBorderStrokeFill: n.quadrantInternalBorderStrokeFill,
    quadrantTitleFill: n.quadrantTitleFill
  }), E.setData({
    titleText: /* @__PURE__ */ Lf()
  }), E.build();
}
m$1(Ve, "getQuadrantData");
var Be = /* @__PURE__ */ m$1(function() {
  E.clear(), Sf();
}, "clear"), pe = {
  setWidth: Ee,
  setHeight: ze,
  setQuadrant1Text: Se,
  setQuadrant2Text: Ae,
  setQuadrant3Text: Pe,
  setQuadrant4Text: _e,
  setXAxisLeftText: Fe,
  setXAxisRightText: Qe,
  setYAxisTopText: Ce,
  setYAxisBottomText: Le,
  parseStyles: Vt,
  addPoint: ve,
  addClass: De,
  getQuadrantData: Ve,
  clear: Be,
  setAccTitle: vf,
  getAccTitle: wf,
  setDiagramTitle: Mf,
  getDiagramTitle: Lf,
  getAccDescription: Ff,
  setAccDescription: Bf
};
var we = /* @__PURE__ */ m$1((t, n, f, u) => {
  var _a2, _b2, _c;
  function c(a) {
    return a === "top" ? "hanging" : "middle";
  }
  m$1(c, "getDominantBaseLine");
  function g(a) {
    return a === "left" ? "start" : "middle";
  }
  m$1(g, "getTextAnchor");
  function y(a) {
    return `translate(${a.x}, ${a.y}) rotate(${a.rotation || 0})`;
  }
  m$1(y, "getTransformation");
  let S = /* @__PURE__ */ Hl();
  tt.debug(`Rendering quadrant chart
` + t);
  let i = S.securityLevel, A;
  i === "sandbox" && (A = /* @__PURE__ */ ih("#i" + n));
  let T = /* @__PURE__ */ (i === "sandbox" ? ih(A.nodes()[0].contentDocument.body) : ih("body")).select(`[id="${n}"]`), m = /* @__PURE__ */ T.append("g").attr("class", "main"), b = ((_a2 = S.quadrantChart) == null ? void 0 : _a2.chartWidth) ?? 500, q = ((_b2 = S.quadrantChart) == null ? void 0 : _b2.chartHeight) ?? 500;
  Tf(T, q, b, ((_c = S.quadrantChart) == null ? void 0 : _c.useMaxWidth) ?? true), T.attr("viewBox", "0 0 " + b + " " + q), u.db.setHeight(q), u.db.setWidth(b);
  let p = /* @__PURE__ */ u.db.getQuadrantData(), K = /* @__PURE__ */ m.append("g").attr("class", "quadrants"), dt = /* @__PURE__ */ m.append("g").attr("class", "border"), ft = /* @__PURE__ */ m.append("g").attr("class", "data-points"), pt = /* @__PURE__ */ m.append("g").attr("class", "labels"), gt = /* @__PURE__ */ m.append("g").attr("class", "title");
  p.title && gt.append("text").attr("x", 0).attr("y", 0).attr("fill", p.title.fill).attr("font-size", p.title.fontSize).attr("dominant-baseline", /* @__PURE__ */ c(p.title.horizontalPos)).attr("text-anchor", /* @__PURE__ */ g(p.title.verticalPos)).attr("transform", /* @__PURE__ */ y(p.title)).text(p.title.text), p.borderLines && dt.selectAll("line").data(p.borderLines).enter().append("line").attr("x1", (a) => a.x1).attr("y1", (a) => a.y1).attr("x2", (a) => a.x2).attr("y2", (a) => a.y2).style("stroke", (a) => a.strokeFill).style("stroke-width", (a) => a.strokeWidth);
  let ut = /* @__PURE__ */ K.selectAll("g.quadrant").data(p.quadrants).enter().append("g").attr("class", "quadrant");
  ut.append("rect").attr("x", (a) => a.x).attr("y", (a) => a.y).attr("width", (a) => a.width).attr("height", (a) => a.height).attr("fill", (a) => a.fill), ut.append("text").attr("x", 0).attr("y", 0).attr("fill", (a) => a.text.fill).attr("font-size", (a) => a.text.fontSize).attr("dominant-baseline", (a) => c(a.text.horizontalPos)).attr("text-anchor", (a) => g(a.text.verticalPos)).attr("transform", (a) => y(a.text)).text((a) => a.text.text), pt.selectAll("g.label").data(p.axisLabels).enter().append("g").attr("class", "label").append("text").attr("x", 0).attr("y", 0).text((a) => a.text).attr("fill", (a) => a.fill).attr("font-size", (a) => a.fontSize).attr("dominant-baseline", (a) => c(a.horizontalPos)).attr("text-anchor", (a) => g(a.verticalPos)).attr("transform", (a) => y(a));
  let ct = /* @__PURE__ */ ft.selectAll("g.data-point").data(p.points).enter().append("g").attr("class", "data-point");
  ct.append("circle").attr("cx", (a) => a.x).attr("cy", (a) => a.y).attr("r", (a) => a.radius).attr("fill", (a) => a.fill).attr("stroke", (a) => a.strokeColor).attr("stroke-width", (a) => a.strokeWidth), ct.append("text").attr("x", 0).attr("y", 0).text((a) => a.text.text).attr("fill", (a) => a.text.fill).attr("font-size", (a) => a.text.fontSize).attr("dominant-baseline", (a) => c(a.text.horizontalPos)).attr("text-anchor", (a) => g(a.text.verticalPos)).attr("transform", (a) => y(a.text));
}, "draw"), ge = {
  draw: we
};
var ha = {
  parser: he,
  db: pe,
  renderer: ge,
  styles: /* @__PURE__ */ m$1(() => "", "styles")
};
export {
  ha as diagram
};
