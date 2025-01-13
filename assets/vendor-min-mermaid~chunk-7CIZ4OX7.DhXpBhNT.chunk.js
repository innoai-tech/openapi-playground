var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __;
import { w as w$1, $ } from "./vendor-min-mermaid~chunk-P7KHIEPL.dhUaYSEK.chunk.js";
import { V, S } from "./vendor-min-mermaid~chunk-54VS5GG6.BwAH1iPT.chunk.js";
import { I as Ie, Y as Ye } from "./vendor-min-mermaid~chunk-UENA7NWE.a12nwn0g.chunk.js";
import { D as De, W as Wl, f as uC, m as mC, b as bf, t as tt, r as rh, T as Tf, k as kf, v as vf, S as Sf, w as wf, B as Bf } from "./vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var je = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ m$1(function(O, l, h, d) {
    for (h = h || {}, d = O.length; d--; h[O[d]] = l) ;
    return h;
  }, "o"), i = [
    1,
    18
  ], a = [
    1,
    19
  ], o = [
    1,
    20
  ], u = [
    1,
    41
  ], c = [
    1,
    42
  ], f = [
    1,
    26
  ], b = [
    1,
    24
  ], F = [
    1,
    25
  ], S2 = [
    1,
    32
  ], Ee = [
    1,
    33
  ], Te = [
    1,
    34
  ], k = [
    1,
    45
  ], Fe = [
    1,
    35
  ], De2 = [
    1,
    36
  ], Be = [
    1,
    37
  ], _e = [
    1,
    38
  ], Se = [
    1,
    27
  ], xe = [
    1,
    28
  ], Ne = [
    1,
    29
  ], Le = [
    1,
    30
  ], Ie2 = [
    1,
    31
  ], m = [
    1,
    44
  ], C = [
    1,
    46
  ], y = [
    1,
    43
  ], D = [
    1,
    47
  ], ve = [
    1,
    9
  ], p = [
    1,
    8,
    9
  ], oe = [
    1,
    58
  ], le = [
    1,
    59
  ], ce = [
    1,
    60
  ], he = [
    1,
    61
  ], pe = [
    1,
    62
  ], Oe = [
    1,
    63
  ], we = [
    1,
    64
  ], de = [
    1,
    8,
    9,
    41
  ], He = [
    1,
    76
  ], U = [
    1,
    8,
    9,
    12,
    13,
    22,
    39,
    41,
    44,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    77,
    79
  ], fe = [
    1,
    8,
    9,
    12,
    13,
    17,
    20,
    22,
    39,
    41,
    44,
    48,
    58,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    77,
    79,
    84,
    99,
    101,
    102
  ], ge = [
    13,
    58,
    84,
    99,
    101,
    102
  ], Q = [
    13,
    58,
    71,
    72,
    84,
    99,
    101,
    102
  ], qe = [
    13,
    58,
    66,
    67,
    68,
    69,
    70,
    84,
    99,
    101,
    102
  ], Ve = [
    1,
    98
  ], W = [
    1,
    115
  ], X = [
    1,
    107
  ], H = [
    1,
    113
  ], q = [
    1,
    108
  ], J = [
    1,
    109
  ], Z = [
    1,
    110
  ], $2 = [
    1,
    111
  ], ee = [
    1,
    112
  ], te = [
    1,
    114
  ], Je = [
    22,
    58,
    59,
    80,
    84,
    85,
    86,
    87,
    88,
    89
  ], Me = [
    1,
    8,
    9,
    39,
    41,
    44
  ], Ae = [
    1,
    8,
    9,
    22
  ], Ze = [
    1,
    143
  ], $e = [
    1,
    8,
    9,
    59
  ], N = [
    1,
    8,
    9,
    22,
    58,
    59,
    80,
    84,
    85,
    86,
    87,
    88,
    89
  ], Pe = {
    trace: /* @__PURE__ */ m$1(function() {
    }, "trace"),
    yy: {},
    symbols_: {
      error: 2,
      start: 3,
      mermaidDoc: 4,
      statements: 5,
      graphConfig: 6,
      CLASS_DIAGRAM: 7,
      NEWLINE: 8,
      EOF: 9,
      statement: 10,
      classLabel: 11,
      SQS: 12,
      STR: 13,
      SQE: 14,
      namespaceName: 15,
      alphaNumToken: 16,
      DOT: 17,
      className: 18,
      classLiteralName: 19,
      GENERICTYPE: 20,
      relationStatement: 21,
      LABEL: 22,
      namespaceStatement: 23,
      classStatement: 24,
      memberStatement: 25,
      annotationStatement: 26,
      clickStatement: 27,
      styleStatement: 28,
      cssClassStatement: 29,
      noteStatement: 30,
      classDefStatement: 31,
      direction: 32,
      acc_title: 33,
      acc_title_value: 34,
      acc_descr: 35,
      acc_descr_value: 36,
      acc_descr_multiline_value: 37,
      namespaceIdentifier: 38,
      STRUCT_START: 39,
      classStatements: 40,
      STRUCT_STOP: 41,
      NAMESPACE: 42,
      classIdentifier: 43,
      STYLE_SEPARATOR: 44,
      members: 45,
      CLASS: 46,
      ANNOTATION_START: 47,
      ANNOTATION_END: 48,
      MEMBER: 49,
      SEPARATOR: 50,
      relation: 51,
      NOTE_FOR: 52,
      noteText: 53,
      NOTE: 54,
      CLASSDEF: 55,
      classList: 56,
      stylesOpt: 57,
      ALPHA: 58,
      COMMA: 59,
      direction_tb: 60,
      direction_bt: 61,
      direction_rl: 62,
      direction_lr: 63,
      relationType: 64,
      lineType: 65,
      AGGREGATION: 66,
      EXTENSION: 67,
      COMPOSITION: 68,
      DEPENDENCY: 69,
      LOLLIPOP: 70,
      LINE: 71,
      DOTTED_LINE: 72,
      CALLBACK: 73,
      LINK: 74,
      LINK_TARGET: 75,
      CLICK: 76,
      CALLBACK_NAME: 77,
      CALLBACK_ARGS: 78,
      HREF: 79,
      STYLE: 80,
      CSSCLASS: 81,
      style: 82,
      styleComponent: 83,
      NUM: 84,
      COLON: 85,
      UNIT: 86,
      SPACE: 87,
      BRKT: 88,
      PCT: 89,
      commentToken: 90,
      textToken: 91,
      graphCodeTokens: 92,
      textNoTagsToken: 93,
      TAGSTART: 94,
      TAGEND: 95,
      "==": 96,
      "--": 97,
      DEFAULT: 98,
      MINUS: 99,
      keywords: 100,
      UNICODE_TEXT: 101,
      BQUOTE_STR: 102,
      $accept: 0,
      $end: 1
    },
    terminals_: {
      2: "error",
      7: "CLASS_DIAGRAM",
      8: "NEWLINE",
      9: "EOF",
      12: "SQS",
      13: "STR",
      14: "SQE",
      17: "DOT",
      20: "GENERICTYPE",
      22: "LABEL",
      33: "acc_title",
      34: "acc_title_value",
      35: "acc_descr",
      36: "acc_descr_value",
      37: "acc_descr_multiline_value",
      39: "STRUCT_START",
      41: "STRUCT_STOP",
      42: "NAMESPACE",
      44: "STYLE_SEPARATOR",
      46: "CLASS",
      47: "ANNOTATION_START",
      48: "ANNOTATION_END",
      49: "MEMBER",
      50: "SEPARATOR",
      52: "NOTE_FOR",
      54: "NOTE",
      55: "CLASSDEF",
      58: "ALPHA",
      59: "COMMA",
      60: "direction_tb",
      61: "direction_bt",
      62: "direction_rl",
      63: "direction_lr",
      66: "AGGREGATION",
      67: "EXTENSION",
      68: "COMPOSITION",
      69: "DEPENDENCY",
      70: "LOLLIPOP",
      71: "LINE",
      72: "DOTTED_LINE",
      73: "CALLBACK",
      74: "LINK",
      75: "LINK_TARGET",
      76: "CLICK",
      77: "CALLBACK_NAME",
      78: "CALLBACK_ARGS",
      79: "HREF",
      80: "STYLE",
      81: "CSSCLASS",
      84: "NUM",
      85: "COLON",
      86: "UNIT",
      87: "SPACE",
      88: "BRKT",
      89: "PCT",
      92: "graphCodeTokens",
      94: "TAGSTART",
      95: "TAGEND",
      96: "==",
      97: "--",
      98: "DEFAULT",
      99: "MINUS",
      100: "keywords",
      101: "UNICODE_TEXT",
      102: "BQUOTE_STR"
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
        4,
        1
      ],
      [
        6,
        4
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
        3
      ],
      [
        11,
        3
      ],
      [
        15,
        1
      ],
      [
        15,
        3
      ],
      [
        15,
        2
      ],
      [
        18,
        1
      ],
      [
        18,
        3
      ],
      [
        18,
        1
      ],
      [
        18,
        2
      ],
      [
        18,
        2
      ],
      [
        18,
        2
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
        10,
        1
      ],
      [
        23,
        4
      ],
      [
        23,
        5
      ],
      [
        38,
        2
      ],
      [
        40,
        1
      ],
      [
        40,
        2
      ],
      [
        40,
        3
      ],
      [
        24,
        1
      ],
      [
        24,
        3
      ],
      [
        24,
        4
      ],
      [
        24,
        6
      ],
      [
        43,
        2
      ],
      [
        43,
        3
      ],
      [
        26,
        4
      ],
      [
        45,
        1
      ],
      [
        45,
        2
      ],
      [
        25,
        1
      ],
      [
        25,
        2
      ],
      [
        25,
        1
      ],
      [
        25,
        1
      ],
      [
        21,
        3
      ],
      [
        21,
        4
      ],
      [
        21,
        4
      ],
      [
        21,
        5
      ],
      [
        30,
        3
      ],
      [
        30,
        2
      ],
      [
        31,
        3
      ],
      [
        56,
        1
      ],
      [
        56,
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
        51,
        3
      ],
      [
        51,
        2
      ],
      [
        51,
        2
      ],
      [
        51,
        1
      ],
      [
        64,
        1
      ],
      [
        64,
        1
      ],
      [
        64,
        1
      ],
      [
        64,
        1
      ],
      [
        64,
        1
      ],
      [
        65,
        1
      ],
      [
        65,
        1
      ],
      [
        27,
        3
      ],
      [
        27,
        4
      ],
      [
        27,
        3
      ],
      [
        27,
        4
      ],
      [
        27,
        4
      ],
      [
        27,
        5
      ],
      [
        27,
        3
      ],
      [
        27,
        4
      ],
      [
        27,
        4
      ],
      [
        27,
        5
      ],
      [
        27,
        4
      ],
      [
        27,
        5
      ],
      [
        27,
        5
      ],
      [
        27,
        6
      ],
      [
        28,
        3
      ],
      [
        29,
        3
      ],
      [
        57,
        1
      ],
      [
        57,
        3
      ],
      [
        82,
        1
      ],
      [
        82,
        2
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        93,
        1
      ],
      [
        93,
        1
      ],
      [
        93,
        1
      ],
      [
        93,
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
        19,
        1
      ],
      [
        53,
        1
      ]
    ],
    performAction: /* @__PURE__ */ m$1(function(l, h, d, r, g, t, se) {
      var s = t.length - 1;
      switch (g) {
        case 8:
          this.$ = t[s - 1];
          break;
        case 9:
        case 12:
        case 14:
          this.$ = t[s];
          break;
        case 10:
        case 13:
          this.$ = t[s - 2] + "." + t[s];
          break;
        case 11:
        case 15:
          this.$ = t[s - 1] + t[s];
          break;
        case 16:
        case 17:
          this.$ = t[s - 1] + "~" + t[s] + "~";
          break;
        case 18:
          r.addRelation(t[s]);
          break;
        case 19:
          t[s - 1].title = /* @__PURE__ */ r.cleanupLabel(t[s]), r.addRelation(t[s - 1]);
          break;
        case 30:
          this.$ = /* @__PURE__ */ t[s].trim(), r.setAccTitle(this.$);
          break;
        case 31:
        case 32:
          this.$ = /* @__PURE__ */ t[s].trim(), r.setAccDescription(this.$);
          break;
        case 33:
          r.addClassesToNamespace(t[s - 3], t[s - 1]);
          break;
        case 34:
          r.addClassesToNamespace(t[s - 4], t[s - 1]);
          break;
        case 35:
          this.$ = t[s], r.addNamespace(t[s]);
          break;
        case 36:
          this.$ = [
            t[s]
          ];
          break;
        case 37:
          this.$ = [
            t[s - 1]
          ];
          break;
        case 38:
          t[s].unshift(t[s - 2]), this.$ = t[s];
          break;
        case 40:
          r.setCssClass(t[s - 2], t[s]);
          break;
        case 41:
          r.addMembers(t[s - 3], t[s - 1]);
          break;
        case 42:
          r.setCssClass(t[s - 5], t[s - 3]), r.addMembers(t[s - 5], t[s - 1]);
          break;
        case 43:
          this.$ = t[s], r.addClass(t[s]);
          break;
        case 44:
          this.$ = t[s - 1], r.addClass(t[s - 1]), r.setClassLabel(t[s - 1], t[s]);
          break;
        case 45:
          r.addAnnotation(t[s], t[s - 2]);
          break;
        case 46:
        case 59:
          this.$ = [
            t[s]
          ];
          break;
        case 47:
          t[s].push(t[s - 1]), this.$ = t[s];
          break;
        case 48:
          break;
        case 49:
          r.addMember(t[s - 1], /* @__PURE__ */ r.cleanupLabel(t[s]));
          break;
        case 50:
          break;
        case 51:
          break;
        case 52:
          this.$ = {
            id1: t[s - 2],
            id2: t[s],
            relation: t[s - 1],
            relationTitle1: "none",
            relationTitle2: "none"
          };
          break;
        case 53:
          this.$ = {
            id1: t[s - 3],
            id2: t[s],
            relation: t[s - 1],
            relationTitle1: t[s - 2],
            relationTitle2: "none"
          };
          break;
        case 54:
          this.$ = {
            id1: t[s - 3],
            id2: t[s],
            relation: t[s - 2],
            relationTitle1: "none",
            relationTitle2: t[s - 1]
          };
          break;
        case 55:
          this.$ = {
            id1: t[s - 4],
            id2: t[s],
            relation: t[s - 2],
            relationTitle1: t[s - 3],
            relationTitle2: t[s - 1]
          };
          break;
        case 56:
          r.addNote(t[s], t[s - 1]);
          break;
        case 57:
          r.addNote(t[s]);
          break;
        case 58:
          this.$ = t[s - 2], r.defineClass(t[s - 1], t[s]);
          break;
        case 60:
          this.$ = /* @__PURE__ */ t[s - 2].concat([
            t[s]
          ]);
          break;
        case 61:
          r.setDirection("TB");
          break;
        case 62:
          r.setDirection("BT");
          break;
        case 63:
          r.setDirection("RL");
          break;
        case 64:
          r.setDirection("LR");
          break;
        case 65:
          this.$ = {
            type1: t[s - 2],
            type2: t[s],
            lineType: t[s - 1]
          };
          break;
        case 66:
          this.$ = {
            type1: "none",
            type2: t[s],
            lineType: t[s - 1]
          };
          break;
        case 67:
          this.$ = {
            type1: t[s - 1],
            type2: "none",
            lineType: t[s]
          };
          break;
        case 68:
          this.$ = {
            type1: "none",
            type2: "none",
            lineType: t[s]
          };
          break;
        case 69:
          this.$ = r.relationType.AGGREGATION;
          break;
        case 70:
          this.$ = r.relationType.EXTENSION;
          break;
        case 71:
          this.$ = r.relationType.COMPOSITION;
          break;
        case 72:
          this.$ = r.relationType.DEPENDENCY;
          break;
        case 73:
          this.$ = r.relationType.LOLLIPOP;
          break;
        case 74:
          this.$ = r.lineType.LINE;
          break;
        case 75:
          this.$ = r.lineType.DOTTED_LINE;
          break;
        case 76:
        case 82:
          this.$ = t[s - 2], r.setClickEvent(t[s - 1], t[s]);
          break;
        case 77:
        case 83:
          this.$ = t[s - 3], r.setClickEvent(t[s - 2], t[s - 1]), r.setTooltip(t[s - 2], t[s]);
          break;
        case 78:
          this.$ = t[s - 2], r.setLink(t[s - 1], t[s]);
          break;
        case 79:
          this.$ = t[s - 3], r.setLink(t[s - 2], t[s - 1], t[s]);
          break;
        case 80:
          this.$ = t[s - 3], r.setLink(t[s - 2], t[s - 1]), r.setTooltip(t[s - 2], t[s]);
          break;
        case 81:
          this.$ = t[s - 4], r.setLink(t[s - 3], t[s - 2], t[s]), r.setTooltip(t[s - 3], t[s - 1]);
          break;
        case 84:
          this.$ = t[s - 3], r.setClickEvent(t[s - 2], t[s - 1], t[s]);
          break;
        case 85:
          this.$ = t[s - 4], r.setClickEvent(t[s - 3], t[s - 2], t[s - 1]), r.setTooltip(t[s - 3], t[s]);
          break;
        case 86:
          this.$ = t[s - 3], r.setLink(t[s - 2], t[s]);
          break;
        case 87:
          this.$ = t[s - 4], r.setLink(t[s - 3], t[s - 1], t[s]);
          break;
        case 88:
          this.$ = t[s - 4], r.setLink(t[s - 3], t[s - 1]), r.setTooltip(t[s - 3], t[s]);
          break;
        case 89:
          this.$ = t[s - 5], r.setLink(t[s - 4], t[s - 2], t[s]), r.setTooltip(t[s - 4], t[s - 1]);
          break;
        case 90:
          this.$ = t[s - 2], r.setCssStyle(t[s - 1], t[s]);
          break;
        case 91:
          r.setCssClass(t[s - 1], t[s]);
          break;
        case 92:
          this.$ = [
            t[s]
          ];
          break;
        case 93:
          t[s - 2].push(t[s]), this.$ = t[s - 2];
          break;
        case 95:
          this.$ = t[s - 1] + t[s];
          break;
      }
    }, "anonymous"),
    table: [
      {
        3: 1,
        4: 2,
        5: 3,
        6: 4,
        7: [
          1,
          6
        ],
        10: 5,
        16: 39,
        18: 21,
        19: 40,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: i,
        35: a,
        37: o,
        38: 22,
        42: u,
        43: 23,
        46: c,
        47: f,
        49: b,
        50: F,
        52: S2,
        54: Ee,
        55: Te,
        58: k,
        60: Fe,
        61: De2,
        62: Be,
        63: _e,
        73: Se,
        74: xe,
        76: Ne,
        80: Le,
        81: Ie2,
        84: m,
        99: C,
        101: y,
        102: D
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
        1: [
          2,
          2
        ]
      },
      {
        1: [
          2,
          3
        ]
      },
      /* @__PURE__ */ e(ve, [
        2,
        5
      ], {
        8: [
          1,
          48
        ]
      }),
      {
        8: [
          1,
          49
        ]
      },
      /* @__PURE__ */ e(p, [
        2,
        18
      ], {
        22: [
          1,
          50
        ]
      }),
      /* @__PURE__ */ e(p, [
        2,
        20
      ]),
      /* @__PURE__ */ e(p, [
        2,
        21
      ]),
      /* @__PURE__ */ e(p, [
        2,
        22
      ]),
      /* @__PURE__ */ e(p, [
        2,
        23
      ]),
      /* @__PURE__ */ e(p, [
        2,
        24
      ]),
      /* @__PURE__ */ e(p, [
        2,
        25
      ]),
      /* @__PURE__ */ e(p, [
        2,
        26
      ]),
      /* @__PURE__ */ e(p, [
        2,
        27
      ]),
      /* @__PURE__ */ e(p, [
        2,
        28
      ]),
      /* @__PURE__ */ e(p, [
        2,
        29
      ]),
      {
        34: [
          1,
          51
        ]
      },
      {
        36: [
          1,
          52
        ]
      },
      /* @__PURE__ */ e(p, [
        2,
        32
      ]),
      /* @__PURE__ */ e(p, [
        2,
        48
      ], {
        51: 53,
        64: 56,
        65: 57,
        13: [
          1,
          54
        ],
        22: [
          1,
          55
        ],
        66: oe,
        67: le,
        68: ce,
        69: he,
        70: pe,
        71: Oe,
        72: we
      }),
      {
        39: [
          1,
          65
        ]
      },
      /* @__PURE__ */ e(de, [
        2,
        39
      ], {
        39: [
          1,
          67
        ],
        44: [
          1,
          66
        ]
      }),
      /* @__PURE__ */ e(p, [
        2,
        50
      ]),
      /* @__PURE__ */ e(p, [
        2,
        51
      ]),
      {
        16: 68,
        58: k,
        84: m,
        99: C,
        101: y
      },
      {
        16: 39,
        18: 69,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      {
        16: 39,
        18: 70,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      {
        16: 39,
        18: 71,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      {
        58: [
          1,
          72
        ]
      },
      {
        13: [
          1,
          73
        ]
      },
      {
        16: 39,
        18: 74,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      {
        13: He,
        53: 75
      },
      {
        56: 77,
        58: [
          1,
          78
        ]
      },
      /* @__PURE__ */ e(p, [
        2,
        61
      ]),
      /* @__PURE__ */ e(p, [
        2,
        62
      ]),
      /* @__PURE__ */ e(p, [
        2,
        63
      ]),
      /* @__PURE__ */ e(p, [
        2,
        64
      ]),
      /* @__PURE__ */ e(U, [
        2,
        12
      ], {
        16: 39,
        19: 40,
        18: 80,
        17: [
          1,
          79
        ],
        20: [
          1,
          81
        ],
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      }),
      /* @__PURE__ */ e(U, [
        2,
        14
      ], {
        20: [
          1,
          82
        ]
      }),
      {
        15: 83,
        16: 84,
        58: k,
        84: m,
        99: C,
        101: y
      },
      {
        16: 39,
        18: 85,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      /* @__PURE__ */ e(fe, [
        2,
        118
      ]),
      /* @__PURE__ */ e(fe, [
        2,
        119
      ]),
      /* @__PURE__ */ e(fe, [
        2,
        120
      ]),
      /* @__PURE__ */ e(fe, [
        2,
        121
      ]),
      /* @__PURE__ */ e([
        1,
        8,
        9,
        12,
        13,
        20,
        22,
        39,
        41,
        44,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        77,
        79
      ], [
        2,
        122
      ]),
      /* @__PURE__ */ e(ve, [
        2,
        6
      ], {
        10: 5,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        18: 21,
        38: 22,
        43: 23,
        16: 39,
        19: 40,
        5: 86,
        33: i,
        35: a,
        37: o,
        42: u,
        46: c,
        47: f,
        49: b,
        50: F,
        52: S2,
        54: Ee,
        55: Te,
        58: k,
        60: Fe,
        61: De2,
        62: Be,
        63: _e,
        73: Se,
        74: xe,
        76: Ne,
        80: Le,
        81: Ie2,
        84: m,
        99: C,
        101: y,
        102: D
      }),
      {
        5: 87,
        10: 5,
        16: 39,
        18: 21,
        19: 40,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: i,
        35: a,
        37: o,
        38: 22,
        42: u,
        43: 23,
        46: c,
        47: f,
        49: b,
        50: F,
        52: S2,
        54: Ee,
        55: Te,
        58: k,
        60: Fe,
        61: De2,
        62: Be,
        63: _e,
        73: Se,
        74: xe,
        76: Ne,
        80: Le,
        81: Ie2,
        84: m,
        99: C,
        101: y,
        102: D
      },
      /* @__PURE__ */ e(p, [
        2,
        19
      ]),
      /* @__PURE__ */ e(p, [
        2,
        30
      ]),
      /* @__PURE__ */ e(p, [
        2,
        31
      ]),
      {
        13: [
          1,
          89
        ],
        16: 39,
        18: 88,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      {
        51: 90,
        64: 56,
        65: 57,
        66: oe,
        67: le,
        68: ce,
        69: he,
        70: pe,
        71: Oe,
        72: we
      },
      /* @__PURE__ */ e(p, [
        2,
        49
      ]),
      {
        65: 91,
        71: Oe,
        72: we
      },
      /* @__PURE__ */ e(ge, [
        2,
        68
      ], {
        64: 92,
        66: oe,
        67: le,
        68: ce,
        69: he,
        70: pe
      }),
      /* @__PURE__ */ e(Q, [
        2,
        69
      ]),
      /* @__PURE__ */ e(Q, [
        2,
        70
      ]),
      /* @__PURE__ */ e(Q, [
        2,
        71
      ]),
      /* @__PURE__ */ e(Q, [
        2,
        72
      ]),
      /* @__PURE__ */ e(Q, [
        2,
        73
      ]),
      /* @__PURE__ */ e(qe, [
        2,
        74
      ]),
      /* @__PURE__ */ e(qe, [
        2,
        75
      ]),
      {
        8: [
          1,
          94
        ],
        24: 95,
        40: 93,
        43: 23,
        46: c
      },
      {
        16: 96,
        58: k,
        84: m,
        99: C,
        101: y
      },
      {
        45: 97,
        49: Ve
      },
      {
        48: [
          1,
          99
        ]
      },
      {
        13: [
          1,
          100
        ]
      },
      {
        13: [
          1,
          101
        ]
      },
      {
        77: [
          1,
          102
        ],
        79: [
          1,
          103
        ]
      },
      {
        22: W,
        57: 104,
        58: X,
        80: H,
        82: 105,
        83: 106,
        84: q,
        85: J,
        86: Z,
        87: $2,
        88: ee,
        89: te
      },
      {
        58: [
          1,
          116
        ]
      },
      {
        13: He,
        53: 117
      },
      /* @__PURE__ */ e(p, [
        2,
        57
      ]),
      /* @__PURE__ */ e(p, [
        2,
        123
      ]),
      {
        22: W,
        57: 118,
        58: X,
        59: [
          1,
          119
        ],
        80: H,
        82: 105,
        83: 106,
        84: q,
        85: J,
        86: Z,
        87: $2,
        88: ee,
        89: te
      },
      /* @__PURE__ */ e(Je, [
        2,
        59
      ]),
      {
        16: 39,
        18: 120,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      /* @__PURE__ */ e(U, [
        2,
        15
      ]),
      /* @__PURE__ */ e(U, [
        2,
        16
      ]),
      /* @__PURE__ */ e(U, [
        2,
        17
      ]),
      {
        39: [
          2,
          35
        ]
      },
      {
        15: 122,
        16: 84,
        17: [
          1,
          121
        ],
        39: [
          2,
          9
        ],
        58: k,
        84: m,
        99: C,
        101: y
      },
      /* @__PURE__ */ e(Me, [
        2,
        43
      ], {
        11: 123,
        12: [
          1,
          124
        ]
      }),
      /* @__PURE__ */ e(ve, [
        2,
        7
      ]),
      {
        9: [
          1,
          125
        ]
      },
      /* @__PURE__ */ e(Ae, [
        2,
        52
      ]),
      {
        16: 39,
        18: 126,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      {
        13: [
          1,
          128
        ],
        16: 39,
        18: 127,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      /* @__PURE__ */ e(ge, [
        2,
        67
      ], {
        64: 129,
        66: oe,
        67: le,
        68: ce,
        69: he,
        70: pe
      }),
      /* @__PURE__ */ e(ge, [
        2,
        66
      ]),
      {
        41: [
          1,
          130
        ]
      },
      {
        24: 95,
        40: 131,
        43: 23,
        46: c
      },
      {
        8: [
          1,
          132
        ],
        41: [
          2,
          36
        ]
      },
      /* @__PURE__ */ e(de, [
        2,
        40
      ], {
        39: [
          1,
          133
        ]
      }),
      {
        41: [
          1,
          134
        ]
      },
      {
        41: [
          2,
          46
        ],
        45: 135,
        49: Ve
      },
      {
        16: 39,
        18: 136,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      /* @__PURE__ */ e(p, [
        2,
        76
      ], {
        13: [
          1,
          137
        ]
      }),
      /* @__PURE__ */ e(p, [
        2,
        78
      ], {
        13: [
          1,
          139
        ],
        75: [
          1,
          138
        ]
      }),
      /* @__PURE__ */ e(p, [
        2,
        82
      ], {
        13: [
          1,
          140
        ],
        78: [
          1,
          141
        ]
      }),
      {
        13: [
          1,
          142
        ]
      },
      /* @__PURE__ */ e(p, [
        2,
        90
      ], {
        59: Ze
      }),
      /* @__PURE__ */ e($e, [
        2,
        92
      ], {
        83: 144,
        22: W,
        58: X,
        80: H,
        84: q,
        85: J,
        86: Z,
        87: $2,
        88: ee,
        89: te
      }),
      /* @__PURE__ */ e(N, [
        2,
        94
      ]),
      /* @__PURE__ */ e(N, [
        2,
        96
      ]),
      /* @__PURE__ */ e(N, [
        2,
        97
      ]),
      /* @__PURE__ */ e(N, [
        2,
        98
      ]),
      /* @__PURE__ */ e(N, [
        2,
        99
      ]),
      /* @__PURE__ */ e(N, [
        2,
        100
      ]),
      /* @__PURE__ */ e(N, [
        2,
        101
      ]),
      /* @__PURE__ */ e(N, [
        2,
        102
      ]),
      /* @__PURE__ */ e(N, [
        2,
        103
      ]),
      /* @__PURE__ */ e(N, [
        2,
        104
      ]),
      /* @__PURE__ */ e(p, [
        2,
        91
      ]),
      /* @__PURE__ */ e(p, [
        2,
        56
      ]),
      /* @__PURE__ */ e(p, [
        2,
        58
      ], {
        59: Ze
      }),
      {
        58: [
          1,
          145
        ]
      },
      /* @__PURE__ */ e(U, [
        2,
        13
      ]),
      {
        15: 146,
        16: 84,
        58: k,
        84: m,
        99: C,
        101: y
      },
      {
        39: [
          2,
          11
        ]
      },
      /* @__PURE__ */ e(Me, [
        2,
        44
      ]),
      {
        13: [
          1,
          147
        ]
      },
      {
        1: [
          2,
          4
        ]
      },
      /* @__PURE__ */ e(Ae, [
        2,
        54
      ]),
      /* @__PURE__ */ e(Ae, [
        2,
        53
      ]),
      {
        16: 39,
        18: 148,
        19: 40,
        58: k,
        84: m,
        99: C,
        101: y,
        102: D
      },
      /* @__PURE__ */ e(ge, [
        2,
        65
      ]),
      /* @__PURE__ */ e(p, [
        2,
        33
      ]),
      {
        41: [
          1,
          149
        ]
      },
      {
        24: 95,
        40: 150,
        41: [
          2,
          37
        ],
        43: 23,
        46: c
      },
      {
        45: 151,
        49: Ve
      },
      /* @__PURE__ */ e(de, [
        2,
        41
      ]),
      {
        41: [
          2,
          47
        ]
      },
      /* @__PURE__ */ e(p, [
        2,
        45
      ]),
      /* @__PURE__ */ e(p, [
        2,
        77
      ]),
      /* @__PURE__ */ e(p, [
        2,
        79
      ]),
      /* @__PURE__ */ e(p, [
        2,
        80
      ], {
        75: [
          1,
          152
        ]
      }),
      /* @__PURE__ */ e(p, [
        2,
        83
      ]),
      /* @__PURE__ */ e(p, [
        2,
        84
      ], {
        13: [
          1,
          153
        ]
      }),
      /* @__PURE__ */ e(p, [
        2,
        86
      ], {
        13: [
          1,
          155
        ],
        75: [
          1,
          154
        ]
      }),
      {
        22: W,
        58: X,
        80: H,
        82: 156,
        83: 106,
        84: q,
        85: J,
        86: Z,
        87: $2,
        88: ee,
        89: te
      },
      /* @__PURE__ */ e(N, [
        2,
        95
      ]),
      /* @__PURE__ */ e(Je, [
        2,
        60
      ]),
      {
        39: [
          2,
          10
        ]
      },
      {
        14: [
          1,
          157
        ]
      },
      /* @__PURE__ */ e(Ae, [
        2,
        55
      ]),
      /* @__PURE__ */ e(p, [
        2,
        34
      ]),
      {
        41: [
          2,
          38
        ]
      },
      {
        41: [
          1,
          158
        ]
      },
      /* @__PURE__ */ e(p, [
        2,
        81
      ]),
      /* @__PURE__ */ e(p, [
        2,
        85
      ]),
      /* @__PURE__ */ e(p, [
        2,
        87
      ]),
      /* @__PURE__ */ e(p, [
        2,
        88
      ], {
        75: [
          1,
          159
        ]
      }),
      /* @__PURE__ */ e($e, [
        2,
        93
      ], {
        83: 144,
        22: W,
        58: X,
        80: H,
        84: q,
        85: J,
        86: Z,
        87: $2,
        88: ee,
        89: te
      }),
      /* @__PURE__ */ e(Me, [
        2,
        8
      ]),
      /* @__PURE__ */ e(de, [
        2,
        42
      ]),
      /* @__PURE__ */ e(p, [
        2,
        89
      ])
    ],
    defaultActions: {
      2: [
        2,
        1
      ],
      3: [
        2,
        2
      ],
      4: [
        2,
        3
      ],
      83: [
        2,
        35
      ],
      122: [
        2,
        11
      ],
      125: [
        2,
        4
      ],
      135: [
        2,
        47
      ],
      146: [
        2,
        10
      ],
      150: [
        2,
        38
      ]
    },
    parseError: /* @__PURE__ */ m$1(function(l, h) {
      if (h.recoverable) this.trace(l);
      else {
        var d = new Error(l);
        throw d.hash = h, d;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ m$1(function(l) {
      var h = this, d = [
        0
      ], r = [], g = [
        null
      ], t = [], se = this.table, s = "", be = 0, et = 0, tt2 = 0, _t = 2, st = 1, St = /* @__PURE__ */ t.slice.call(arguments, 1), E = /* @__PURE__ */ Object.create(this.lexer), V2 = {
        yy: {}
      };
      for (var Ge in this.yy) Object.prototype.hasOwnProperty.call(this.yy, Ge) && (V2.yy[Ge] = this.yy[Ge]);
      E.setInput(l, V2.yy), V2.yy.lexer = E, V2.yy.parser = this, typeof E.yylloc > "u" && (E.yylloc = {});
      var Ue = E.yylloc;
      t.push(Ue);
      var xt = E.options && E.options.ranges;
      typeof V2.yy.parseError == "function" ? this.parseError = V2.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function us(_) {
        d.length = d.length - 2 * _, g.length = g.length - _, t.length = t.length - _;
      }
      m$1(us, "popStack");
      function Nt() {
        var _;
        return _ = r.pop() || E.lex() || st, typeof _ != "number" && (_ instanceof Array && (r = _, _ = /* @__PURE__ */ r.pop()), _ = h.symbols_[_] || _), _;
      }
      m$1(Nt, "lex");
      for (var B, ze, M, x, os, Ke, z = {}, ke, v, it, me; ; ) {
        if (M = d[d.length - 1], this.defaultActions[M] ? x = this.defaultActions[M] : ((B === null || typeof B > "u") && (B = /* @__PURE__ */ Nt()), x = se[M] && se[M][B]), typeof x > "u" || !x.length || !x[0]) {
          var Ye2 = "";
          me = [];
          for (ke in se[M]) this.terminals_[ke] && ke > _t && me.push("'" + this.terminals_[ke] + "'");
          E.showPosition ? Ye2 = "Parse error on line " + (be + 1) + `:
` + E.showPosition() + `
Expecting ` + me.join(", ") + ", got '" + (this.terminals_[B] || B) + "'" : Ye2 = "Parse error on line " + (be + 1) + ": Unexpected " + (B == st ? "end of input" : "'" + (this.terminals_[B] || B) + "'"), this.parseError(Ye2, {
            text: E.match,
            token: this.terminals_[B] || B,
            line: E.yylineno,
            loc: Ue,
            expected: me
          });
        }
        if (x[0] instanceof Array && x.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + M + ", token: " + B);
        switch (x[0]) {
          case 1:
            d.push(B), g.push(E.yytext), t.push(E.yylloc), d.push(x[1]), B = null, ze ? (B = ze, ze = null) : (et = E.yyleng, s = E.yytext, be = E.yylineno, Ue = E.yylloc, tt2 > 0);
            break;
          case 2:
            if (v = this.productions_[x[1]][1], z.$ = g[g.length - v], z._$ = {
              first_line: t[t.length - (v || 1)].first_line,
              last_line: t[t.length - 1].last_line,
              first_column: t[t.length - (v || 1)].first_column,
              last_column: t[t.length - 1].last_column
            }, xt && (z._$.range = [
              t[t.length - (v || 1)].range[0],
              t[t.length - 1].range[1]
            ]), Ke = /* @__PURE__ */ this.performAction.apply(z, /* @__PURE__ */ [
              s,
              et,
              be,
              V2.yy,
              x[1],
              g,
              t
            ].concat(St)), typeof Ke < "u") return Ke;
            v && (d = /* @__PURE__ */ d.slice(0, -1 * v * 2), g = /* @__PURE__ */ g.slice(0, -1 * v), t = /* @__PURE__ */ t.slice(0, -1 * v)), d.push(this.productions_[x[1]][0]), g.push(z.$), t.push(z._$), it = se[d[d.length - 2]][d[d.length - 1]], d.push(it);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, Bt = /* @__PURE__ */ function() {
    var O = {
      EOF: 1,
      parseError: /* @__PURE__ */ m$1(function(h, d) {
        if (this.yy.parser) this.yy.parser.parseError(h, d);
        else throw new Error(h);
      }, "parseError"),
      setInput: /* @__PURE__ */ m$1(function(l, h) {
        return this.yy = h || this.yy || {}, this._input = l, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
        var l = this._input[0];
        this.yytext += l, this.yyleng++, this.offset++, this.match += l, this.matched += l;
        var h = /* @__PURE__ */ l.match(/(?:\r\n?|\n).*/g);
        return h ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), l;
      }, "input"),
      unput: /* @__PURE__ */ m$1(function(l) {
        var h = l.length, d = /* @__PURE__ */ l.split(/(?:\r\n?|\n)/g);
        this._input = l + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - h), this.offset -= h;
        var r = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
        this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), d.length - 1 && (this.yylineno -= d.length - 1);
        var g = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: d ? (d.length === r.length ? this.yylloc.first_column : 0) + r[r.length - d.length].length - d[0].length : this.yylloc.first_column - h
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
      less: /* @__PURE__ */ m$1(function(l) {
        this.unput(/* @__PURE__ */ this.match.slice(l));
      }, "less"),
      pastInput: /* @__PURE__ */ m$1(function() {
        var l = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
        return (l.length > 20 ? "..." : "") + l.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: /* @__PURE__ */ m$1(function() {
        var l = this.match;
        return l.length < 20 && (l += /* @__PURE__ */ this._input.substr(0, 20 - l.length)), (l.substr(0, 20) + (l.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: /* @__PURE__ */ m$1(function() {
        var l = /* @__PURE__ */ this.pastInput(), h = /* @__PURE__ */ new Array(l.length + 1).join("-");
        return l + this.upcomingInput() + `
` + h + "^";
      }, "showPosition"),
      test_match: /* @__PURE__ */ m$1(function(l, h) {
        var d, r, g;
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
        }, this.options.ranges && (g.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), r = /* @__PURE__ */ l[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + l[0].length
        }, this.yytext += l[0], this.match += l[0], this.matches = l, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
          this.offset,
          this.offset += this.yyleng
        ]), this._more = false, this._backtrack = false, this._input = /* @__PURE__ */ this._input.slice(l[0].length), this.matched += l[0], d = /* @__PURE__ */ this.performAction.call(this, this.yy, this, h, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), d) return d;
        if (this._backtrack) {
          for (var t in g) this[t] = g[t];
          return false;
        }
        return false;
      }, "test_match"),
      next: /* @__PURE__ */ m$1(function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var l, h, d, r;
        this._more || (this.yytext = "", this.match = "");
        for (var g = /* @__PURE__ */ this._currentRules(), t = 0; t < g.length; t++) if (d = /* @__PURE__ */ this._input.match(this.rules[g[t]]), d && (!h || d[0].length > h[0].length)) {
          if (h = d, r = t, this.options.backtrack_lexer) {
            if (l = /* @__PURE__ */ this.test_match(d, g[t]), l !== false) return l;
            if (this._backtrack) {
              h = false;
              continue;
            } else return false;
          } else if (!this.options.flex) break;
        }
        return h ? (l = /* @__PURE__ */ this.test_match(h, g[r]), l !== false ? l : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
      options: {},
      performAction: /* @__PURE__ */ m$1(function(h, d, r, g) {
        switch (r) {
          case 0:
            return 60;
          case 1:
            return 61;
          case 2:
            return 62;
          case 3:
            return 63;
          case 4:
            break;
          case 5:
            break;
          case 6:
            return this.begin("acc_title"), 33;
          case 7:
            return this.popState(), "acc_title_value";
          case 8:
            return this.begin("acc_descr"), 35;
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
            return 8;
          case 14:
            break;
          case 15:
            return 7;
          case 16:
            return 7;
          case 17:
            return "EDGE_STATE";
          case 18:
            this.begin("callback_name");
            break;
          case 19:
            this.popState();
            break;
          case 20:
            this.popState(), this.begin("callback_args");
            break;
          case 21:
            return 77;
          case 22:
            this.popState();
            break;
          case 23:
            return 78;
          case 24:
            this.popState();
            break;
          case 25:
            return "STR";
          case 26:
            this.begin("string");
            break;
          case 27:
            return 80;
          case 28:
            return 55;
          case 29:
            return this.begin("namespace"), 42;
          case 30:
            return this.popState(), 8;
          case 31:
            break;
          case 32:
            return this.begin("namespace-body"), 39;
          case 33:
            return this.popState(), 41;
          case 34:
            return "EOF_IN_STRUCT";
          case 35:
            return 8;
          case 36:
            break;
          case 37:
            return "EDGE_STATE";
          case 38:
            return this.begin("class"), 46;
          case 39:
            return this.popState(), 8;
          case 40:
            break;
          case 41:
            return this.popState(), this.popState(), 41;
          case 42:
            return this.begin("class-body"), 39;
          case 43:
            return this.popState(), 41;
          case 44:
            return "EOF_IN_STRUCT";
          case 45:
            return "EDGE_STATE";
          case 46:
            return "OPEN_IN_STRUCT";
          case 47:
            break;
          case 48:
            return "MEMBER";
          case 49:
            return 81;
          case 50:
            return 73;
          case 51:
            return 74;
          case 52:
            return 76;
          case 53:
            return 52;
          case 54:
            return 54;
          case 55:
            return 47;
          case 56:
            return 48;
          case 57:
            return 79;
          case 58:
            this.popState();
            break;
          case 59:
            return "GENERICTYPE";
          case 60:
            this.begin("generic");
            break;
          case 61:
            this.popState();
            break;
          case 62:
            return "BQUOTE_STR";
          case 63:
            this.begin("bqstring");
            break;
          case 64:
            return 75;
          case 65:
            return 75;
          case 66:
            return 75;
          case 67:
            return 75;
          case 68:
            return 67;
          case 69:
            return 67;
          case 70:
            return 69;
          case 71:
            return 69;
          case 72:
            return 68;
          case 73:
            return 66;
          case 74:
            return 70;
          case 75:
            return 71;
          case 76:
            return 72;
          case 77:
            return 22;
          case 78:
            return 44;
          case 79:
            return 99;
          case 80:
            return 17;
          case 81:
            return "PLUS";
          case 82:
            return 85;
          case 83:
            return 59;
          case 84:
            return 88;
          case 85:
            return 88;
          case 86:
            return 89;
          case 87:
            return "EQUALS";
          case 88:
            return "EQUALS";
          case 89:
            return 58;
          case 90:
            return 12;
          case 91:
            return 14;
          case 92:
            return "PUNCTUATION";
          case 93:
            return 84;
          case 94:
            return 101;
          case 95:
            return 87;
          case 96:
            return 87;
          case 97:
            return 9;
        }
      }, "anonymous"),
      rules: [
        /^(?:.*direction\s+TB[^\n]*)/,
        /^(?:.*direction\s+BT[^\n]*)/,
        /^(?:.*direction\s+RL[^\n]*)/,
        /^(?:.*direction\s+LR[^\n]*)/,
        /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,
        /^(?:%%[^\n]*(\r?\n)*)/,
        /^(?:accTitle\s*:\s*)/,
        /^(?:(?!\n||)*[^\n]*)/,
        /^(?:accDescr\s*:\s*)/,
        /^(?:(?!\n||)*[^\n]*)/,
        /^(?:accDescr\s*\{\s*)/,
        /^(?:[\}])/,
        /^(?:[^\}]*)/,
        /^(?:\s*(\r?\n)+)/,
        /^(?:\s+)/,
        /^(?:classDiagram-v2\b)/,
        /^(?:classDiagram\b)/,
        /^(?:\[\*\])/,
        /^(?:call[\s]+)/,
        /^(?:\([\s]*\))/,
        /^(?:\()/,
        /^(?:[^(]*)/,
        /^(?:\))/,
        /^(?:[^)]*)/,
        /^(?:["])/,
        /^(?:[^"]*)/,
        /^(?:["])/,
        /^(?:style\b)/,
        /^(?:classDef\b)/,
        /^(?:namespace\b)/,
        /^(?:\s*(\r?\n)+)/,
        /^(?:\s+)/,
        /^(?:[{])/,
        /^(?:[}])/,
        /^(?:$)/,
        /^(?:\s*(\r?\n)+)/,
        /^(?:\s+)/,
        /^(?:\[\*\])/,
        /^(?:class\b)/,
        /^(?:\s*(\r?\n)+)/,
        /^(?:\s+)/,
        /^(?:[}])/,
        /^(?:[{])/,
        /^(?:[}])/,
        /^(?:$)/,
        /^(?:\[\*\])/,
        /^(?:[{])/,
        /^(?:[\n])/,
        /^(?:[^{}\n]*)/,
        /^(?:cssClass\b)/,
        /^(?:callback\b)/,
        /^(?:link\b)/,
        /^(?:click\b)/,
        /^(?:note for\b)/,
        /^(?:note\b)/,
        /^(?:<<)/,
        /^(?:>>)/,
        /^(?:href\b)/,
        /^(?:[~])/,
        /^(?:[^~]*)/,
        /^(?:~)/,
        /^(?:[`])/,
        /^(?:[^`]+)/,
        /^(?:[`])/,
        /^(?:_self\b)/,
        /^(?:_blank\b)/,
        /^(?:_parent\b)/,
        /^(?:_top\b)/,
        /^(?:\s*<\|)/,
        /^(?:\s*\|>)/,
        /^(?:\s*>)/,
        /^(?:\s*<)/,
        /^(?:\s*\*)/,
        /^(?:\s*o\b)/,
        /^(?:\s*\(\))/,
        /^(?:--)/,
        /^(?:\.\.)/,
        /^(?::{1}[^:\n;]+)/,
        /^(?::{3})/,
        /^(?:-)/,
        /^(?:\.)/,
        /^(?:\+)/,
        /^(?::)/,
        /^(?:,)/,
        /^(?:#)/,
        /^(?:#)/,
        /^(?:%)/,
        /^(?:=)/,
        /^(?:=)/,
        /^(?:\w+)/,
        /^(?:\[)/,
        /^(?:\])/,
        /^(?:[!"#$%&'*+,-.`?\\/])/,
        /^(?:[0-9]+)/,
        /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,
        /^(?:\s)/,
        /^(?:\s)/,
        /^(?:$)/
      ],
      conditions: {
        "namespace-body": {
          rules: [
            26,
            33,
            34,
            35,
            36,
            37,
            38,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        namespace: {
          rules: [
            26,
            29,
            30,
            31,
            32,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        "class-body": {
          rules: [
            26,
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
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        class: {
          rules: [
            26,
            39,
            40,
            41,
            42,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [
            11,
            12,
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        acc_descr: {
          rules: [
            9,
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        acc_title: {
          rules: [
            7,
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        callback_args: {
          rules: [
            22,
            23,
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        callback_name: {
          rules: [
            19,
            20,
            21,
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        href: {
          rules: [
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        struct: {
          rules: [
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        generic: {
          rules: [
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        bqstring: {
          rules: [
            26,
            49,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
          ],
          inclusive: false
        },
        string: {
          rules: [
            24,
            25,
            26,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            97
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
            8,
            10,
            13,
            14,
            15,
            16,
            17,
            18,
            26,
            27,
            28,
            29,
            38,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            60,
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
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97
          ],
          inclusive: true
        }
      }
    };
    return O;
  }();
  Pe.lexer = Bt;
  function Re() {
    this.yy = {};
  }
  return m$1(Re, "Parser"), Re.prototype = Pe, Pe.Parser = Re, new Re();
}();
je.parser = je;
var ls = je;
var bt = [
  "#",
  "+",
  "~",
  "-",
  ""
], ne = (_a = class {
  constructor(i, a) {
    this.memberType = a, this.visibility = "", this.classifier = "", this.text = "";
    let o = /* @__PURE__ */ De(i, /* @__PURE__ */ Wl());
    this.parseMember(o);
  }
  getDisplayDetails() {
    let i = this.visibility + uC(this.id);
    this.memberType === "method" && (i += `(${uC(/* @__PURE__ */ this.parameters.trim())})`, this.returnType && (i += " : " + uC(this.returnType))), i = /* @__PURE__ */ i.trim();
    let a = /* @__PURE__ */ this.parseClassifier();
    return {
      displayText: i,
      cssStyle: a
    };
  }
  parseMember(i) {
    let a = "";
    if (this.memberType === "method") {
      let c = /* @__PURE__ */ /([#+~-])?(.+)\((.*)\)([\s$*])?(.*)([$*])?/.exec(i);
      if (c) {
        let f = c[1] ? c[1].trim() : "";
        if (bt.includes(f) && (this.visibility = f), this.id = c[2], this.parameters = c[3] ? c[3].trim() : "", a = c[4] ? c[4].trim() : "", this.returnType = c[5] ? c[5].trim() : "", a === "") {
          let b = /* @__PURE__ */ this.returnType.substring(this.returnType.length - 1);
          /[$*]/.exec(b) && (a = b, this.returnType = /* @__PURE__ */ this.returnType.substring(0, this.returnType.length - 1));
        }
      }
    } else {
      let u = i.length, c = /* @__PURE__ */ i.substring(0, 1), f = /* @__PURE__ */ i.substring(u - 1);
      bt.includes(c) && (this.visibility = c), /[$*]/.exec(f) && (a = f), this.id = /* @__PURE__ */ i.substring(this.visibility === "" ? 0 : 1, a === "" ? u : u - 1);
    }
    this.classifier = a, this.id = this.id.startsWith(" ") ? " " + this.id.trim() : this.id.trim();
    let o = `${this.visibility ? "\\" + this.visibility : ""}${uC(this.id)}${this.memberType === "method" ? `(${uC(this.parameters)})${this.returnType ? " : " + uC(this.returnType) : ""}` : ""}`;
    this.text = /* @__PURE__ */ o.replaceAll("<", "&lt;").replaceAll(">", "&gt;"), this.text.startsWith("\\&lt;") && (this.text = /* @__PURE__ */ this.text.replace("\\&lt;", "~"));
  }
  parseClassifier() {
    switch (this.classifier) {
      case "*":
        return "font-style:italic;";
      case "$":
        return "text-decoration:underline;";
      default:
        return "";
    }
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "ClassMember")), _a);
var Ce = "classId-", ye = [], A = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map(), ae = [], j = [], mt = 0, L = /* @__PURE__ */ new Map(), Qe = 0, ue = [], R = /* @__PURE__ */ m$1((e) => mC.sanitizeText(e, /* @__PURE__ */ Wl()), "sanitizeText"), G = /* @__PURE__ */ m$1(function(e) {
  let i = /* @__PURE__ */ mC.sanitizeText(e, /* @__PURE__ */ Wl()), a = "", o = i;
  if (i.indexOf("~") > 0) {
    let u = /* @__PURE__ */ i.split("~");
    o = /* @__PURE__ */ R(u[0]), a = /* @__PURE__ */ R(u[1]);
  }
  return {
    className: o,
    type: a
  };
}, "splitClassNameAndType"), Lt = /* @__PURE__ */ m$1(function(e, i) {
  let a = /* @__PURE__ */ mC.sanitizeText(e, /* @__PURE__ */ Wl());
  i && (i = /* @__PURE__ */ R(i));
  let { className: o } = G(a);
  A.get(o).label = i, A.get(o).text = `${i}${A.get(o).type ? `<${A.get(o).type}>` : ""}`;
}, "setClassLabel"), Y = /* @__PURE__ */ m$1(function(e) {
  let i = /* @__PURE__ */ mC.sanitizeText(e, /* @__PURE__ */ Wl()), { className: a, type: o } = G(i);
  if (A.has(a)) return;
  let u = /* @__PURE__ */ mC.sanitizeText(a, /* @__PURE__ */ Wl());
  A.set(u, {
    id: u,
    type: o,
    label: u,
    text: `${u}${o ? `&lt;${o}&gt;` : ""}`,
    shape: "classBox",
    cssClasses: "default",
    methods: [],
    members: [],
    annotations: [],
    styles: [],
    domId: Ce + u + "-" + mt
  }), mt++;
}, "addClass"), Ct = /* @__PURE__ */ m$1(function(e, i) {
  let a = {
    id: `interface${j.length}`,
    label: e,
    classId: i
  };
  j.push(a);
}, "addInterface"), Et = /* @__PURE__ */ m$1(function(e) {
  let i = /* @__PURE__ */ mC.sanitizeText(e, /* @__PURE__ */ Wl());
  if (A.has(i)) return A.get(i).domId;
  throw new Error("Class not found: " + i);
}, "lookUpDomId"), It = /* @__PURE__ */ m$1(function() {
  ye = [], A = /* @__PURE__ */ new Map(), ae = [], j = [], ue = [], ue.push(Ft), L = /* @__PURE__ */ new Map(), Qe = 0, Xe = "TB", bf();
}, "clear"), vt = /* @__PURE__ */ m$1(function(e) {
  return A.get(e);
}, "getClass"), Ot = /* @__PURE__ */ m$1(function() {
  return A;
}, "getClasses"), wt = /* @__PURE__ */ m$1(function() {
  return ye;
}, "getRelations"), Vt = /* @__PURE__ */ m$1(function() {
  return ae;
}, "getNotes"), Mt = /* @__PURE__ */ m$1(function(e) {
  tt.debug("Adding relation: " + JSON.stringify(e));
  let i = [
    w.LOLLIPOP,
    w.AGGREGATION,
    w.COMPOSITION,
    w.DEPENDENCY,
    w.EXTENSION
  ];
  e.relation.type1 === w.LOLLIPOP && !i.includes(e.relation.type2) ? (Y(e.id2), Ct(e.id1, e.id2), e.id1 = `interface${j.length - 1}`) : e.relation.type2 === w.LOLLIPOP && !i.includes(e.relation.type1) ? (Y(e.id1), Ct(e.id2, e.id1), e.id2 = `interface${j.length - 1}`) : (Y(e.id1), Y(e.id2)), e.id1 = G(e.id1).className, e.id2 = G(e.id2).className, e.relationTitle1 = /* @__PURE__ */ mC.sanitizeText(/* @__PURE__ */ e.relationTitle1.trim(), /* @__PURE__ */ Wl()), e.relationTitle2 = /* @__PURE__ */ mC.sanitizeText(/* @__PURE__ */ e.relationTitle2.trim(), /* @__PURE__ */ Wl()), ye.push(e);
}, "addRelation"), Pt = /* @__PURE__ */ m$1(function(e, i) {
  let a = G(e).className;
  A.get(a).annotations.push(i);
}, "addAnnotation"), Tt = /* @__PURE__ */ m$1(function(e, i) {
  Y(e);
  let a = G(e).className, o = /* @__PURE__ */ A.get(a);
  if (typeof i == "string") {
    let u = /* @__PURE__ */ i.trim();
    u.startsWith("<<") && u.endsWith(">>") ? o.annotations.push(/* @__PURE__ */ R(/* @__PURE__ */ u.substring(2, u.length - 2))) : u.indexOf(")") > 0 ? o.methods.push(new ne(u, "method")) : u && o.members.push(new ne(u, "attribute"));
  }
}, "addMember"), Rt = /* @__PURE__ */ m$1(function(e, i) {
  Array.isArray(i) && (i.reverse(), i.forEach((a) => Tt(e, a)));
}, "addMembers"), Gt = /* @__PURE__ */ m$1(function(e, i) {
  let a = {
    id: `note${ae.length}`,
    class: i,
    text: e
  };
  ae.push(a);
}, "addNote"), Ut = /* @__PURE__ */ m$1(function(e) {
  return e.startsWith(":") && (e = /* @__PURE__ */ e.substring(1)), R(/* @__PURE__ */ e.trim());
}, "cleanupLabel"), We = /* @__PURE__ */ m$1(function(e, i) {
  e.split(",").forEach(function(a) {
    let o = a;
    /\d/.exec(a[0]) && (o = Ce + o);
    let u = /* @__PURE__ */ A.get(o);
    u && (u.cssClasses += " " + i);
  });
}, "setCssClass"), zt = /* @__PURE__ */ m$1(function(e, i) {
  for (let a of e) {
    let o = /* @__PURE__ */ kt.get(a);
    o === void 0 && (o = {
      id: a,
      styles: [],
      textStyles: []
    }, kt.set(a, o)), i && i.forEach(function(u) {
      if (/color/.exec(u)) {
        let c = /* @__PURE__ */ u.replace("fill", "bgFill");
        o.textStyles.push(c);
      }
      o.styles.push(u);
    }), A.forEach((u) => {
      u.cssClasses.includes(a) && u.styles.push(.../* @__PURE__ */ i.flatMap((c) => c.split(",")));
    });
  }
}, "defineClass"), Kt = /* @__PURE__ */ m$1(function(e, i) {
  e.split(",").forEach(function(a) {
    i !== void 0 && (A.get(a).tooltip = /* @__PURE__ */ R(i));
  });
}, "setTooltip"), Yt = /* @__PURE__ */ m$1(function(e, i) {
  return i && L.has(i) ? L.get(i).classes.get(e).tooltip : A.get(e).tooltip;
}, "getTooltip"), jt = /* @__PURE__ */ m$1(function(e, i, a) {
  let o = /* @__PURE__ */ Wl();
  e.split(",").forEach(function(u) {
    let c = u;
    /\d/.exec(u[0]) && (c = Ce + c);
    let f = /* @__PURE__ */ A.get(c);
    f && (f.link = /* @__PURE__ */ Ie.formatUrl(i, o), o.securityLevel === "sandbox" ? f.linkTarget = "_top" : typeof a == "string" ? f.linkTarget = /* @__PURE__ */ R(a) : f.linkTarget = "_blank");
  }), We(e, "clickable");
}, "setLink"), Qt = /* @__PURE__ */ m$1(function(e, i, a) {
  e.split(",").forEach(function(o) {
    Wt(o, i, a), A.get(o).haveCallback = true;
  }), We(e, "clickable");
}, "setClickEvent"), Wt = /* @__PURE__ */ m$1(function(e, i, a) {
  let o = /* @__PURE__ */ mC.sanitizeText(e, /* @__PURE__ */ Wl());
  if (Wl().securityLevel !== "loose" || i === void 0) return;
  let c = o;
  if (A.has(c)) {
    let f = /* @__PURE__ */ Et(c), b = [];
    if (typeof a == "string") {
      b = /* @__PURE__ */ a.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      for (let F = 0; F < b.length; F++) {
        let S2 = /* @__PURE__ */ b[F].trim();
        S2.startsWith('"') && S2.endsWith('"') && (S2 = /* @__PURE__ */ S2.substr(1, S2.length - 2)), b[F] = S2;
      }
    }
    b.length === 0 && b.push(f), ue.push(function() {
      let F = /* @__PURE__ */ document.querySelector(`[id="${f}"]`);
      F !== null && F.addEventListener("click", function() {
        Ie.runFunc(i, ...b);
      }, false);
    });
  }
}, "setClickFunc"), Xt = /* @__PURE__ */ m$1(function(e) {
  ue.forEach(function(i) {
    i(e);
  });
}, "bindFunctions"), Ht = {
  LINE: 0,
  DOTTED_LINE: 1
}, w = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3,
  LOLLIPOP: 4
}, Ft = /* @__PURE__ */ m$1(function(e) {
  let i = /* @__PURE__ */ rh(".mermaidTooltip");
  (i._groups || i)[0][0] === null && (i = /* @__PURE__ */ rh("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0)), rh(e).select("svg").selectAll("g.node").on("mouseover", function() {
    let u = /* @__PURE__ */ rh(this);
    if (u.attr("title") === null) return;
    let f = /* @__PURE__ */ this.getBoundingClientRect();
    i.transition().duration(200).style("opacity", ".9"), i.text(/* @__PURE__ */ u.attr("title")).style("left", window.scrollX + f.left + (f.right - f.left) / 2 + "px").style("top", window.scrollY + f.top - 14 + document.body.scrollTop + "px"), i.html(/* @__PURE__ */ i.html().replace(/&lt;br\/&gt;/g, "<br/>")), u.classed("hover", true);
  }).on("mouseout", function() {
    i.transition().duration(500).style("opacity", 0), rh(this).classed("hover", false);
  });
}, "setupToolTips");
ue.push(Ft);
var Xe = "TB", Dt = /* @__PURE__ */ m$1(() => Xe, "getDirection"), qt = /* @__PURE__ */ m$1((e) => {
  Xe = e;
}, "setDirection"), Jt = /* @__PURE__ */ m$1(function(e) {
  L.has(e) || (L.set(e, {
    id: e,
    classes: /* @__PURE__ */ new Map(),
    children: {},
    domId: Ce + e + "-" + Qe
  }), Qe++);
}, "addNamespace"), Zt = /* @__PURE__ */ m$1(function(e) {
  return L.get(e);
}, "getNamespace"), $t = /* @__PURE__ */ m$1(function() {
  return L;
}, "getNamespaces"), es = /* @__PURE__ */ m$1(function(e, i) {
  if (L.has(e)) for (let a of i) {
    let { className: o } = G(a);
    A.get(o).parent = e, L.get(e).classes.set(o, /* @__PURE__ */ A.get(o));
  }
}, "addClassesToNamespace"), ts = /* @__PURE__ */ m$1(function(e, i) {
  let a = /* @__PURE__ */ A.get(e);
  if (!(!i || !a)) for (let o of i) o.includes(",") ? a.styles.push(.../* @__PURE__ */ o.split(",")) : a.styles.push(o);
}, "setCssStyle");
function yt(e) {
  let i;
  switch (e) {
    case 0:
      i = "aggregation";
      break;
    case 1:
      i = "extension";
      break;
    case 2:
      i = "composition";
      break;
    case 3:
      i = "dependency";
      break;
    case 4:
      i = "lollipop";
      break;
    default:
      i = "none";
  }
  return i;
}
m$1(yt, "getArrowMarker");
var ss = /* @__PURE__ */ m$1(() => {
  var _a2;
  let e = [], i = [], a = /* @__PURE__ */ Wl();
  for (let u of L.keys()) {
    let c = /* @__PURE__ */ L.get(u);
    if (c) {
      let f = {
        id: c.id,
        label: c.id,
        isGroup: true,
        padding: a.class.padding ?? 16,
        shape: "rect",
        cssStyles: [
          "fill: none",
          "stroke: black"
        ],
        look: a.look
      };
      e.push(f);
    }
  }
  for (let u of A.keys()) {
    let c = /* @__PURE__ */ A.get(u);
    if (c) {
      let f = c;
      f.parentId = c.parent, f.look = a.look, e.push(f);
    }
  }
  let o = 0;
  for (let u of ae) {
    o++;
    let c = {
      id: u.id,
      label: u.text,
      isGroup: false,
      shape: "note",
      padding: a.class.padding ?? 6,
      cssStyles: [
        "text-align: left",
        "white-space: nowrap",
        `fill: ${a.themeVariables.noteBkgColor}`,
        `stroke: ${a.themeVariables.noteBorderColor}`
      ],
      look: a.look
    };
    e.push(c);
    let f = ((_a2 = A.get(u.class)) == null ? void 0 : _a2.id) ?? "";
    if (f) {
      let b = {
        id: `edgeNote${o}`,
        start: u.id,
        end: f,
        type: "normal",
        thickness: "normal",
        classes: "relation",
        arrowTypeStart: "none",
        arrowTypeEnd: "none",
        arrowheadStyle: "",
        labelStyle: [
          ""
        ],
        style: [
          "fill: none"
        ],
        pattern: "dotted",
        look: a.look
      };
      i.push(b);
    }
  }
  for (let u of j) {
    let c = {
      id: u.id,
      label: u.label,
      isGroup: false,
      shape: "rect",
      cssStyles: [
        "opacity: 0;"
      ],
      look: a.look
    };
    e.push(c);
  }
  o = 0;
  for (let u of ye) {
    o++;
    let c = {
      id: /* @__PURE__ */ Ye(u.id1, u.id2, {
        prefix: "id",
        counter: o
      }),
      start: u.id1,
      end: u.id2,
      type: "normal",
      label: u.title,
      labelpos: "c",
      thickness: "normal",
      classes: "relation",
      arrowTypeStart: /* @__PURE__ */ yt(u.relation.type1),
      arrowTypeEnd: /* @__PURE__ */ yt(u.relation.type2),
      startLabelRight: u.relationTitle1 === "none" ? "" : u.relationTitle1,
      endLabelLeft: u.relationTitle2 === "none" ? "" : u.relationTitle2,
      arrowheadStyle: "",
      labelStyle: [
        "display: inline-block"
      ],
      style: u.style || "",
      pattern: u.relation.lineType == 1 ? "dashed" : "solid",
      look: a.look
    };
    i.push(c);
  }
  return {
    nodes: e,
    edges: i,
    other: {},
    config: a,
    direction: /* @__PURE__ */ Dt()
  };
}, "getData"), Ts = {
  setAccTitle: Tf,
  getAccTitle: kf,
  getAccDescription: vf,
  setAccDescription: Sf,
  getConfig: /* @__PURE__ */ m$1(() => Wl().class, "getConfig"),
  addClass: Y,
  bindFunctions: Xt,
  clear: It,
  getClass: vt,
  getClasses: Ot,
  getNotes: Vt,
  addAnnotation: Pt,
  addNote: Gt,
  getRelations: wt,
  addRelation: Mt,
  getDirection: Dt,
  setDirection: qt,
  addMember: Tt,
  addMembers: Rt,
  cleanupLabel: Ut,
  lineType: Ht,
  relationType: w,
  setClickEvent: Qt,
  setCssClass: We,
  defineClass: zt,
  setLink: jt,
  getTooltip: Yt,
  setTooltip: Kt,
  lookUpDomId: Et,
  setDiagramTitle: wf,
  getDiagramTitle: Bf,
  setClassLabel: Lt,
  addNamespace: Jt,
  addClassesToNamespace: es,
  getNamespace: Zt,
  getNamespaces: $t,
  setCssStyle: ts,
  getData: ss
};
var is = /* @__PURE__ */ m$1((e) => `g.classGroup text {
  fill: ${e.nodeBorder || e.classText};
  stroke: none;
  font-family: ${e.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

.nodeLabel, .edgeLabel {
  color: ${e.classText};
}
.edgeLabel .label rect {
  fill: ${e.mainBkg};
}
.label text {
  fill: ${e.classText};
}

.labelBkg {
  background: ${e.mainBkg};
}
.edgeLabel .label span {
  background: ${e.mainBkg};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }


.divider {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.classGroup line {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${e.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${e.lineColor};
  stroke-width: 1;
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

#compositionStart, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
  line-height: initial;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`, "getStyles"), Bs = is;
var rs = /* @__PURE__ */ m$1(function(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "TB";
  if (!e.doc) return i;
  let a = i;
  for (let o of e.doc) o.stmt === "dir" && (a = o.value);
  return a;
}, "getDir"), ns = /* @__PURE__ */ m$1(function(e, i) {
  return i.db.getClasses();
}, "getClasses"), as = /* @__PURE__ */ m$1(async function(e, i, a, o) {
  tt.info("REF0:"), tt.info("Drawing class diagram (v3)", i);
  let { securityLevel: u, state: c, layout: f } = Wl(), b = /* @__PURE__ */ o.db.getData(), F = /* @__PURE__ */ w$1(i, u);
  b.type = o.type, b.layoutAlgorithm = /* @__PURE__ */ V(f), b.nodeSpacing = (c == null ? void 0 : c.nodeSpacing) || 50, b.rankSpacing = (c == null ? void 0 : c.rankSpacing) || 50, b.markers = [
    "aggregation",
    "extension",
    "composition",
    "dependency",
    "lollipop"
  ], b.diagramId = i, await S(b, F);
  let S$1 = 8;
  Ie.insertTitle(F, "classDiagramTitleText", (c == null ? void 0 : c.titleTopMargin) ?? 25, /* @__PURE__ */ o.db.getDiagramTitle()), $(F, S$1, "classDiagram", (c == null ? void 0 : c.useMaxWidth) ?? true);
}, "draw"), ws = {
  getClasses: ns,
  draw: as,
  getDir: rs
};
export {
  Bs as B,
  Ts as T,
  ls as l,
  ws as w
};
