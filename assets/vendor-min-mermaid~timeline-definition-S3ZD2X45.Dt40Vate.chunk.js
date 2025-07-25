import { h as hh, t as tt$1, k as kh, a as ah, ar as $t$1, as as E, at as I, aq as Uc, aQ as mn, V as Vf } from './vendor-min-mermaid~chunk-U6SPV2NK.BkMACcv9.chunk.js';
import { m as m$1, o } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var X = /*#__PURE__*/ function() {
    var n = /*#__PURE__*/ m$1(function(m, i, a, c) {
        for(a = a || {}, c = m.length; c--; a[m[c]] = i);
        return a;
    }, "o"), t = [
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
    ], e = [
        1,
        9
    ], o = [
        1,
        10
    ], r = [
        1,
        11
    ], u = [
        1,
        12
    ], h = [
        1,
        13
    ], f = [
        1,
        16
    ], g = [
        1,
        17
    ], p = {
        trace: /*#__PURE__*/ m$1(function() {}, "trace"),
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
                1
            ],
            [
                9,
                1
            ],
            [
                18,
                1
            ],
            [
                19,
                1
            ]
        ],
        performAction: /*#__PURE__*/ m$1(function(i, a, c, d, y, l, E) {
            var k = l.length - 1;
            switch(y){
                case 1:
                    return l[k - 1];
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
                    d.getCommonDb().setDiagramTitle(/*#__PURE__*/ l[k].substr(6)), this.$ = /*#__PURE__*/ l[k].substr(6);
                    break;
                case 9:
                    this.$ = /*#__PURE__*/ l[k].trim(), d.getCommonDb().setAccTitle(this.$);
                    break;
                case 10:
                case 11:
                    this.$ = /*#__PURE__*/ l[k].trim(), d.getCommonDb().setAccDescription(this.$);
                    break;
                case 12:
                    d.addSection(/*#__PURE__*/ l[k].substr(8)), this.$ = /*#__PURE__*/ l[k].substr(8);
                    break;
                case 15:
                    d.addTask(l[k], 0, ""), this.$ = l[k];
                    break;
                case 16:
                    d.addEvent(/*#__PURE__*/ l[k].substr(2)), this.$ = l[k];
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
            /*#__PURE__*/ n(t, [
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
                11: e,
                12: o,
                14: r,
                16: u,
                17: h,
                18: 14,
                19: 15,
                20: f,
                21: g
            },
            /*#__PURE__*/ n(t, [
                2,
                7
            ], {
                1: [
                    2,
                    1
                ]
            }),
            /*#__PURE__*/ n(t, [
                2,
                3
            ]),
            {
                9: 18,
                11: e,
                12: o,
                14: r,
                16: u,
                17: h,
                18: 14,
                19: 15,
                20: f,
                21: g
            },
            /*#__PURE__*/ n(t, [
                2,
                5
            ]),
            /*#__PURE__*/ n(t, [
                2,
                6
            ]),
            /*#__PURE__*/ n(t, [
                2,
                8
            ]),
            {
                13: [
                    1,
                    19
                ]
            },
            {
                15: [
                    1,
                    20
                ]
            },
            /*#__PURE__*/ n(t, [
                2,
                11
            ]),
            /*#__PURE__*/ n(t, [
                2,
                12
            ]),
            /*#__PURE__*/ n(t, [
                2,
                13
            ]),
            /*#__PURE__*/ n(t, [
                2,
                14
            ]),
            /*#__PURE__*/ n(t, [
                2,
                15
            ]),
            /*#__PURE__*/ n(t, [
                2,
                16
            ]),
            /*#__PURE__*/ n(t, [
                2,
                4
            ]),
            /*#__PURE__*/ n(t, [
                2,
                9
            ]),
            /*#__PURE__*/ n(t, [
                2,
                10
            ])
        ],
        defaultActions: {},
        parseError: /*#__PURE__*/ m$1(function(i, a) {
            if (a.recoverable) this.trace(i);
            else {
                var c = new Error(i);
                throw c.hash = a, c;
            }
        }, "parseError"),
        parse: /*#__PURE__*/ m$1(function(i) {
            var a = this, c = [
                0
            ], d = [], y = [
                null
            ], l = [], E = this.table, k = "", N = 0, C = 0, V = 0, et = 2, L = 1, v = /*#__PURE__*/ l.slice.call(arguments, 1), x = /*#__PURE__*/ Object.create(this.lexer), T = {
                yy: {}
            };
            for(var $ in this.yy)Object.prototype.hasOwnProperty.call(this.yy, $) && (T.yy[$] = this.yy[$]);
            x.setInput(i, T.yy), T.yy.lexer = x, T.yy.parser = this, typeof x.yylloc > "u" && (x.yylloc = {});
            var P = x.yylloc;
            l.push(P);
            var U = x.options && x.options.ranges;
            typeof T.yy.parseError == "function" ? this.parseError = T.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
            function Zt(I) {
                c.length = c.length - 2 * I, y.length = y.length - I, l.length = l.length - I;
            }
            m$1(Zt, "popStack");
            function Mt() {
                var I;
                return I = d.pop() || x.lex() || L, typeof I != "number" && (I instanceof Array && (d = I, I = /*#__PURE__*/ d.pop()), I = a.symbols_[I] || I), I;
            }
            m$1(Mt, "lex");
            for(var w, Z, B, M, Jt, J, R = {}, O, H, nt, j;;){
                if (B = c[c.length - 1], this.defaultActions[B] ? M = this.defaultActions[B] : ((w === null || typeof w > "u") && (w = /*#__PURE__*/ Mt()), M = E[B] && E[B][w]), typeof M > "u" || !M.length || !M[0]) {
                    var K = "";
                    j = [];
                    for(O in E[B])this.terminals_[O] && O > et && j.push("'" + this.terminals_[O] + "'");
                    x.showPosition ? K = "Parse error on line " + (N + 1) + `:
` + x.showPosition() + `
Expecting ` + j.join(", ") + ", got '" + (this.terminals_[w] || w) + "'" : K = "Parse error on line " + (N + 1) + ": Unexpected " + (w == L ? "end of input" : "'" + (this.terminals_[w] || w) + "'"), this.parseError(K, {
                        text: x.match,
                        token: this.terminals_[w] || w,
                        line: x.yylineno,
                        loc: P,
                        expected: j
                    });
                }
                if (M[0] instanceof Array && M.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + B + ", token: " + w);
                switch(M[0]){
                    case 1:
                        c.push(w), y.push(x.yytext), l.push(x.yylloc), c.push(M[1]), w = null, Z ? (w = Z, Z = null) : (C = x.yyleng, k = x.yytext, N = x.yylineno, P = x.yylloc, V > 0);
                        break;
                    case 2:
                        if (H = this.productions_[M[1]][1], R.$ = y[y.length - H], R._$ = {
                            first_line: l[l.length - (H || 1)].first_line,
                            last_line: l[l.length - 1].last_line,
                            first_column: l[l.length - (H || 1)].first_column,
                            last_column: l[l.length - 1].last_column
                        }, U && (R._$.range = [
                            l[l.length - (H || 1)].range[0],
                            l[l.length - 1].range[1]
                        ]), J = /*#__PURE__*/ this.performAction.apply(R, /*#__PURE__*/ [
                            k,
                            C,
                            N,
                            T.yy,
                            M[1],
                            y,
                            l
                        ].concat(v)), typeof J < "u") return J;
                        H && (c = /*#__PURE__*/ c.slice(0, -1 * H * 2), y = /*#__PURE__*/ y.slice(0, -1 * H), l = /*#__PURE__*/ l.slice(0, -1 * H)), c.push(this.productions_[M[1]][0]), y.push(R.$), l.push(R._$), nt = E[c[c.length - 2]][c[c.length - 1]], c.push(nt);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    }, b = /*#__PURE__*/ function() {
        var m = {
            EOF: 1,
            parseError: /*#__PURE__*/ m$1(function(a, c) {
                if (this.yy.parser) this.yy.parser.parseError(a, c);
                else throw new Error(a);
            }, "parseError"),
            setInput: /*#__PURE__*/ m$1(function(i, a) {
                return this.yy = a || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
            input: /*#__PURE__*/ m$1(function() {
                var i = this._input[0];
                this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
                var a = /*#__PURE__*/ i.match(/(?:\r\n?|\n).*/g);
                return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /*#__PURE__*/ this._input.slice(1), i;
            }, "input"),
            unput: /*#__PURE__*/ m$1(function(i) {
                var a = i.length, c = /*#__PURE__*/ i.split(/(?:\r\n?|\n)/g);
                this._input = i + this._input, this.yytext = /*#__PURE__*/ this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
                var d = /*#__PURE__*/ this.match.split(/(?:\r\n?|\n)/g);
                this.match = /*#__PURE__*/ this.match.substr(0, this.match.length - 1), this.matched = /*#__PURE__*/ this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                var y = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - a
                }, this.options.ranges && (this.yylloc.range = [
                    y[0],
                    y[0] + this.yyleng - a
                ]), this.yyleng = this.yytext.length, this;
            }, "unput"),
            more: /*#__PURE__*/ m$1(function() {
                return this._more = true, this;
            }, "more"),
            reject: /*#__PURE__*/ m$1(function() {
                if (this.options.backtrack_lexer) this._backtrack = true;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
                return this;
            }, "reject"),
            less: /*#__PURE__*/ m$1(function(i) {
                this.unput(/*#__PURE__*/ this.match.slice(i));
            }, "less"),
            pastInput: /*#__PURE__*/ m$1(function() {
                var i = /*#__PURE__*/ this.matched.substr(0, this.matched.length - this.match.length);
                return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: /*#__PURE__*/ m$1(function() {
                var i = this.match;
                return i.length < 20 && (i += /*#__PURE__*/ this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: /*#__PURE__*/ m$1(function() {
                var i = /*#__PURE__*/ this.pastInput(), a = /*#__PURE__*/ new Array(i.length + 1).join("-");
                return i + this.upcomingInput() + `
` + a + "^";
            }, "showPosition"),
            test_match: /*#__PURE__*/ m$1(function(i, a) {
                var c, d, y;
                if (this.options.backtrack_lexer && (y = {
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
                    conditionStack: /*#__PURE__*/ this.conditionStack.slice(0),
                    done: this.done
                }, this.options.ranges && (y.yylloc.range = /*#__PURE__*/ this.yylloc.range.slice(0))), d = /*#__PURE__*/ i[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
                }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
                    this.offset,
                    this.offset += this.yyleng
                ]), this._more = false, this._backtrack = false, this._input = /*#__PURE__*/ this._input.slice(i[0].length), this.matched += i[0], c = /*#__PURE__*/ this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), c) return c;
                if (this._backtrack) {
                    for(var l in y)this[l] = y[l];
                    return false;
                }
                return false;
            }, "test_match"),
            next: /*#__PURE__*/ m$1(function() {
                if (this.done) return this.EOF;
                this._input || (this.done = true);
                var i, a, c, d;
                this._more || (this.yytext = "", this.match = "");
                for(var y = /*#__PURE__*/ this._currentRules(), l = 0; l < y.length; l++)if (c = /*#__PURE__*/ this._input.match(this.rules[y[l]]), c && (!a || c[0].length > a[0].length)) {
                    if (a = c, d = l, this.options.backtrack_lexer) {
                        if (i = /*#__PURE__*/ this.test_match(c, y[l]), i !== false) return i;
                        if (this._backtrack) {
                            a = false;
                            continue;
                        } else return false;
                    } else if (!this.options.flex) break;
                }
                return a ? (i = /*#__PURE__*/ this.test_match(a, y[d]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            }, "next"),
            lex: /*#__PURE__*/ m$1(function() {
                var a = /*#__PURE__*/ this.next();
                return a || this.lex();
            }, "lex"),
            begin: /*#__PURE__*/ m$1(function(a) {
                this.conditionStack.push(a);
            }, "begin"),
            popState: /*#__PURE__*/ m$1(function() {
                var a = this.conditionStack.length - 1;
                return a > 0 ? this.conditionStack.pop() : this.conditionStack[0];
            }, "popState"),
            _currentRules: /*#__PURE__*/ m$1(function() {
                return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
            }, "_currentRules"),
            topState: /*#__PURE__*/ m$1(function(a) {
                return a = this.conditionStack.length - 1 - Math.abs(a || 0), a >= 0 ? this.conditionStack[a] : "INITIAL";
            }, "topState"),
            pushState: /*#__PURE__*/ m$1(function(a) {
                this.begin(a);
            }, "pushState"),
            stateStackSize: /*#__PURE__*/ m$1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: /*#__PURE__*/ m$1(function(a, c, d, y) {
                switch(d){
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
                        return 21;
                    case 16:
                        return 20;
                    case 17:
                        return 6;
                    case 18:
                        return "INVALID";
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
                        18
                    ],
                    inclusive: true
                }
            }
        };
        return m;
    }();
    p.lexer = b;
    function _() {
        this.yy = {};
    }
    return m$1(_, "Parser"), _.prototype = p, p.Parser = _, new _;
}();
X.parser = X;
var ht = X;
var D = {};
o(D, {
    addEvent: ()=>bt,
    addSection: ()=>ft,
    addTask: ()=>xt,
    addTaskOrg: ()=>kt,
    clear: ()=>yt,
    default: ()=>Lt,
    getCommonDb: ()=>pt,
    getSections: ()=>gt,
    getTasks: ()=>mt
});
var z = "", dt = 0, Y = [], G = [], F = [], pt = /*#__PURE__*/ m$1(()=>mn, "getCommonDb"), yt = /*#__PURE__*/ m$1(function() {
    Y.length = 0, G.length = 0, z = "", F.length = 0, Vf();
}, "clear"), ft = /*#__PURE__*/ m$1(function(n) {
    z = n, Y.push(n);
}, "addSection"), gt = /*#__PURE__*/ m$1(function() {
    return Y;
}, "getSections"), mt = /*#__PURE__*/ m$1(function() {
    let n = /*#__PURE__*/ ut(), t = 100, e = 0;
    for(; !n && e < t;)n = /*#__PURE__*/ ut(), e++;
    return G.push(...F), G;
}, "getTasks"), xt = /*#__PURE__*/ m$1(function(n, t, e) {
    let o = {
        id: dt++,
        section: z,
        type: z,
        task: n,
        score: t || 0,
        events: e ? [
            e
        ] : []
    };
    F.push(o);
}, "addTask"), bt = /*#__PURE__*/ m$1(function(n) {
    F.find((e)=>e.id === dt - 1).events.push(n);
}, "addEvent"), kt = /*#__PURE__*/ m$1(function(n) {
    let t = {
        section: z,
        type: z,
        description: n,
        task: n,
        classes: []
    };
    G.push(t);
}, "addTaskOrg"), ut = /*#__PURE__*/ m$1(function() {
    let n = /*#__PURE__*/ m$1(function(e) {
        return F[e].processed;
    }, "compileTask"), t = true;
    for (let [e, o] of F.entries())n(e), t = t && o.processed;
    return t;
}, "compileTasks"), Lt = {
    clear: yt,
    getCommonDb: pt,
    addSection: ft,
    getSections: gt,
    getTasks: mt,
    addTask: xt,
    addTaskOrg: kt,
    addEvent: bt
};
var $t = 12, q = /*#__PURE__*/ m$1(function(n, t) {
    let e = /*#__PURE__*/ n.append("rect");
    return e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), e.attr("rx", t.rx), e.attr("ry", t.ry), t.class !== void 0 && e.attr("class", t.class), e;
}, "drawRect"), Ht = /*#__PURE__*/ m$1(function(n, t) {
    let o = /*#__PURE__*/ n.append("circle").attr("cx", t.cx).attr("cy", t.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), r = /*#__PURE__*/ n.append("g");
    r.append("circle").attr("cx", t.cx - 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), r.append("circle").attr("cx", t.cx + 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    function u(g) {
        let p = /*#__PURE__*/ Uc().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
        g.append("path").attr("class", "mouth").attr("d", p).attr("transform", "translate(" + t.cx + "," + (t.cy + 2) + ")");
    }
    m$1(u, "smile");
    function h(g) {
        let p = /*#__PURE__*/ Uc().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
        g.append("path").attr("class", "mouth").attr("d", p).attr("transform", "translate(" + t.cx + "," + (t.cy + 7) + ")");
    }
    m$1(h, "sad");
    function f(g) {
        g.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", t.cx - 5).attr("y1", t.cy + 7).attr("x2", t.cx + 5).attr("y2", t.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
    }
    return m$1(f, "ambivalent"), t.score > 3 ? u(r) : t.score < 3 ? h(r) : f(r), o;
}, "drawFace"), At = /*#__PURE__*/ m$1(function(n, t) {
    let e = /*#__PURE__*/ n.append("circle");
    return e.attr("cx", t.cx), e.attr("cy", t.cy), e.attr("class", "actor-" + t.pos), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("r", t.r), e.class !== void 0 && e.attr("class", e.class), t.title !== void 0 && e.append("title").text(t.title), e;
}, "drawCircle"), vt = /*#__PURE__*/ m$1(function(n, t) {
    let e = /*#__PURE__*/ t.text.replace(/<br\s*\/?>/gi, " "), o = /*#__PURE__*/ n.append("text");
    o.attr("x", t.x), o.attr("y", t.y), o.attr("class", "legend"), o.style("text-anchor", t.anchor), t.class !== void 0 && o.attr("class", t.class);
    let r = /*#__PURE__*/ o.append("tspan");
    return r.attr("x", t.x + t.textMargin * 2), r.text(e), o;
}, "drawText"), Ct = /*#__PURE__*/ m$1(function(n, t) {
    function e(r, u, h, f, g) {
        return r + "," + u + " " + (r + h) + "," + u + " " + (r + h) + "," + (u + f - g) + " " + (r + h - g * 1.2) + "," + (u + f) + " " + r + "," + (u + f);
    }
    m$1(e, "genPoints");
    let o = /*#__PURE__*/ n.append("polygon");
    o.attr("points", /*#__PURE__*/ e(t.x, t.y, 50, 20, 7)), o.attr("class", "labelBox"), t.y = t.y + t.labelMargin, t.x = t.x + .5 * t.labelMargin, vt(n, t);
}, "drawLabel"), Pt = /*#__PURE__*/ m$1(function(n, t, e) {
    let o = /*#__PURE__*/ n.append("g"), r = /*#__PURE__*/ tt();
    r.x = t.x, r.y = t.y, r.fill = t.fill, r.width = e.width, r.height = e.height, r.class = "journey-section section-type-" + t.num, r.rx = 3, r.ry = 3, q(o, r), wt(e)(t.text, o, r.x, r.y, r.width, r.height, {
        class: "journey-section section-type-" + t.num
    }, e, t.colour);
}, "drawSection"), _t = -1, Bt = /*#__PURE__*/ m$1(function(n, t, e) {
    let o = t.x + e.width / 2, r = /*#__PURE__*/ n.append("g");
    _t++;
    let u = 300 + 5 * 30;
    r.append("line").attr("id", "task" + _t).attr("x1", o).attr("y1", t.y).attr("x2", o).attr("y2", u).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Ht(r, {
        cx: o,
        cy: 300 + (5 - t.score) * 30,
        score: t.score
    });
    let h = /*#__PURE__*/ tt();
    h.x = t.x, h.y = t.y, h.fill = t.fill, h.width = e.width, h.height = e.height, h.class = "task task-type-" + t.num, h.rx = 3, h.ry = 3, q(r, h), wt(e)(t.task, r, h.x, h.y, h.width, h.height, {
        class: "task"
    }, e, t.colour);
}, "drawTask"), Vt = /*#__PURE__*/ m$1(function(n, t) {
    q(n, {
        x: t.startx,
        y: t.starty,
        width: t.stopx - t.startx,
        height: t.stopy - t.starty,
        fill: t.fill,
        class: "rect"
    }).lower();
}, "drawBackgroundRect"), Rt = /*#__PURE__*/ m$1(function() {
    return {
        x: 0,
        y: 0,
        fill: void 0,
        "text-anchor": "start",
        width: 100,
        height: 100,
        textMargin: 0,
        rx: 0,
        ry: 0
    };
}, "getTextObj"), tt = /*#__PURE__*/ m$1(function() {
    return {
        x: 0,
        y: 0,
        width: 100,
        anchor: "start",
        height: 100,
        rx: 0,
        ry: 0
    };
}, "getNoteRect"), wt = /*#__PURE__*/ function() {
    function n(r, u, h, f, g, p, b, _) {
        let m = /*#__PURE__*/ u.append("text").attr("x", h + g / 2).attr("y", f + p / 2 + 5).style("font-color", _).style("text-anchor", "middle").text(r);
        o(m, b);
    }
    m$1(n, "byText");
    function t(r, u, h, f, g, p, b, _, m) {
        let { taskFontSize: i, taskFontFamily: a } = _, c = /*#__PURE__*/ r.split(/<br\s*\/?>/gi);
        for(let d = 0; d < c.length; d++){
            let y = d * i - i * (c.length - 1) / 2, l = /*#__PURE__*/ u.append("text").attr("x", h + g / 2).attr("y", f).attr("fill", m).style("text-anchor", "middle").style("font-size", i).style("font-family", a);
            l.append("tspan").attr("x", h + g / 2).attr("dy", y).text(c[d]), l.attr("y", f + p / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), o(l, b);
        }
    }
    m$1(t, "byTspan");
    function e(r, u, h, f, g, p, b, _) {
        let m = /*#__PURE__*/ u.append("switch"), a = /*#__PURE__*/ m.append("foreignObject").attr("x", h).attr("y", f).attr("width", g).attr("height", p).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
        a.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(r), t(r, m, h, f, g, p, b, _), o(a, b);
    }
    m$1(e, "byFo");
    function o(r, u) {
        for(let h in u)h in u && r.attr(h, u[h]);
    }
    return m$1(o, "_setTextAttrs"), function(r) {
        return r.textPlacement === "fo" ? e : r.textPlacement === "old" ? n : t;
    };
}(), Wt = /*#__PURE__*/ m$1(function(n) {
    n.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function St(n, t) {
    n.each(function() {
        var e = /*#__PURE__*/ kh(this), o = /*#__PURE__*/ e.text().split(/(\s+|<br>)/).reverse(), r, u = [], h = 1.1, f = /*#__PURE__*/ e.attr("y"), g = /*#__PURE__*/ parseFloat(/*#__PURE__*/ e.attr("dy")), p = /*#__PURE__*/ e.text(null).append("tspan").attr("x", 0).attr("y", f).attr("dy", g + "em");
        for(let b = 0; b < o.length; b++)r = o[o.length - 1 - b], u.push(r), p.text(/*#__PURE__*/ u.join(" ").trim()), (p.node().getComputedTextLength() > t || r === "<br>") && (u.pop(), p.text(/*#__PURE__*/ u.join(" ").trim()), r === "<br>" ? u = [
            ""
        ] : u = [
            r
        ], p = /*#__PURE__*/ e.append("tspan").attr("x", 0).attr("y", f).attr("dy", h + "em").text(r));
    });
}
m$1(St, "wrap");
var zt = /*#__PURE__*/ m$1(function(n, t, e, o) {
    let r = e % $t - 1, u = /*#__PURE__*/ n.append("g");
    t.section = r, u.attr("class", (t.class ? t.class + " " : "") + "timeline-node " + ("section-" + r));
    let h = /*#__PURE__*/ u.append("g"), f = /*#__PURE__*/ u.append("g"), p = /*#__PURE__*/ f.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(St, t.width).node().getBBox(), b = o.fontSize?.replace ? o.fontSize.replace("px", "") : o.fontSize;
    return t.height = p.height + b * 1.1 * .5 + t.padding, t.height = /*#__PURE__*/ Math.max(t.height, t.maxHeight), t.width = t.width + 2 * t.padding, f.attr("transform", "translate(" + t.width / 2 + ", " + t.padding / 2 + ")"), Ot(h, t, r, o), t;
}, "drawNode"), Ft = /*#__PURE__*/ m$1(function(n, t, e) {
    let o = /*#__PURE__*/ n.append("g"), u = /*#__PURE__*/ o.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(St, t.width).node().getBBox(), h = e.fontSize?.replace ? e.fontSize.replace("px", "") : e.fontSize;
    return o.remove(), u.height + h * 1.1 * .5 + t.padding;
}, "getVirtualNodeHeight"), Ot = /*#__PURE__*/ m$1(function(n, t, e) {
    n.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr("d", `M0 ${t.height - 5} v${-t.height + 2 * 5} q0,-5 5,-5 h${t.width - 2 * 5} q5,0 5,5 v${t.height - 5} H0 Z`), n.append("line").attr("class", "node-line-" + e).attr("x1", 0).attr("y1", t.height).attr("x2", t.width).attr("y2", t.height);
}, "defaultBkg"), A = {
    drawRect: q,
    drawCircle: At,
    drawSection: Pt,
    drawText: vt,
    drawLabel: Ct,
    drawTask: Bt,
    drawBackgroundRect: Vt,
    getTextObj: Rt,
    getNoteRect: tt,
    initGraphics: Wt,
    drawNode: zt,
    getVirtualNodeHeight: Ft
};
var jt = /*#__PURE__*/ m$1(function(n, t, e, o) {
    let r = /*#__PURE__*/ hh(), u = r.timeline?.leftMargin ?? 50;
    tt$1.debug("timeline", o.db);
    let h = r.securityLevel, f;
    h === "sandbox" && (f = /*#__PURE__*/ kh("#i" + t));
    let p = /*#__PURE__*/ (h === "sandbox" ? kh(f.nodes()[0].contentDocument.body) : kh("body")).select("#" + t);
    p.append("g");
    let b = /*#__PURE__*/ o.db.getTasks(), _ = /*#__PURE__*/ o.db.getCommonDb().getDiagramTitle();
    tt$1.debug("task", b), A.initGraphics(p);
    let m = /*#__PURE__*/ o.db.getSections();
    tt$1.debug("sections", m);
    let i = 0, a = 0, c = 0, d = 0, y = 50 + u, l = 50;
    d = 50;
    let E = 0, k = true;
    m.forEach(function(L) {
        let v = {
            number: E,
            descr: L,
            section: E,
            width: 150,
            padding: 20,
            maxHeight: i
        }, x = /*#__PURE__*/ A.getVirtualNodeHeight(p, v, r);
        tt$1.debug("sectionHeight before draw", x), i = /*#__PURE__*/ Math.max(i, x + 20);
    });
    let N = 0, C = 0;
    tt$1.debug("tasks.length", b.length);
    for (let [L, v] of b.entries()){
        let x = {
            number: L,
            descr: v,
            section: v.section,
            width: 150,
            padding: 20,
            maxHeight: a
        }, T = /*#__PURE__*/ A.getVirtualNodeHeight(p, x, r);
        tt$1.debug("taskHeight before draw", T), a = /*#__PURE__*/ Math.max(a, T + 20), N = /*#__PURE__*/ Math.max(N, v.events.length);
        let $ = 0;
        for (let P of v.events){
            let U = {
                descr: P,
                section: v.section,
                number: v.section,
                width: 150,
                padding: 20,
                maxHeight: 50
            };
            $ += /*#__PURE__*/ A.getVirtualNodeHeight(p, U, r);
        }
        v.events.length > 0 && ($ += (v.events.length - 1) * 10), C = /*#__PURE__*/ Math.max(C, $);
    }
    tt$1.debug("maxSectionHeight before draw", i), tt$1.debug("maxTaskHeight before draw", a), m && m.length > 0 ? m.forEach((L)=>{
        let v = /*#__PURE__*/ b.filter((P)=>P.section === L), x = {
            number: E,
            descr: L,
            section: E,
            width: 200 * Math.max(v.length, 1) - 50,
            padding: 20,
            maxHeight: i
        };
        tt$1.debug("sectionNode", x);
        let T = /*#__PURE__*/ p.append("g"), $ = /*#__PURE__*/ A.drawNode(T, x, E, r);
        tt$1.debug("sectionNode output", $), T.attr("transform", `translate(${y}, ${d})`), l += i + 50, v.length > 0 && Et(p, v, E, y, l, a, r, N, C, i, false), y += 200 * Math.max(v.length, 1), l = d, E++;
    }) : (k = false, Et(p, b, E, y, l, a, r, N, C, i, true));
    let V = /*#__PURE__*/ p.node().getBBox();
    tt$1.debug("bounds", V), _ && p.append("text").text(_).attr("x", V.width / 2 - u).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), c = k ? i + a + 150 : a + 100, p.append("g").attr("class", "lineWrapper").append("line").attr("x1", u).attr("y1", c).attr("x2", V.width + 3 * u).attr("y2", c).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), ah(void 0, p, r.timeline?.padding ?? 50, r.timeline?.useMaxWidth ?? false);
}, "draw"), Et = /*#__PURE__*/ m$1(function(n, t, e, o, r, u, h, f, g, p, b) {
    for (let _ of t){
        let m = {
            descr: _.task,
            section: e,
            number: e,
            width: 150,
            padding: 20,
            maxHeight: u
        };
        tt$1.debug("taskNode", m);
        let i = /*#__PURE__*/ n.append("g").attr("class", "taskWrapper"), c = A.drawNode(i, m, e, h).height;
        if (tt$1.debug("taskHeight after draw", c), i.attr("transform", `translate(${o}, ${r})`), u = /*#__PURE__*/ Math.max(u, c), _.events) {
            let d = /*#__PURE__*/ n.append("g").attr("class", "lineWrapper"), y = u;
            r += 100, y = y + Gt(n, _.events, e, o, r, h), r -= 100, d.append("line").attr("x1", o + 190 / 2).attr("y1", r + u).attr("x2", o + 190 / 2).attr("y2", r + u + 100 + g + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
        }
        o = o + 200, b && !h.timeline?.disableMulticolor && e++;
    }
    r = r - 10;
}, "drawTasks"), Gt = /*#__PURE__*/ m$1(function(n, t, e, o, r, u) {
    let h = 0, f = r;
    r = r + 100;
    for (let g of t){
        let p = {
            descr: g,
            section: e,
            number: e,
            width: 150,
            padding: 20,
            maxHeight: 50
        };
        tt$1.debug("eventNode", p);
        let b = /*#__PURE__*/ n.append("g").attr("class", "eventWrapper"), m = A.drawNode(b, p, e, u).height;
        h = h + m, b.attr("transform", `translate(${o}, ${r})`), r = r + 10 + m;
    }
    return r = f, h;
}, "drawEvents"), Tt = {
    setConf: /*#__PURE__*/ m$1(()=>{}, "setConf"),
    draw: jt
};
var qt = /*#__PURE__*/ m$1((n)=>{
    let t = "";
    for(let e = 0; e < n.THEME_COLOR_LIMIT; e++)n["lineColor" + e] = n["lineColor" + e] || n["cScaleInv" + e], $t$1(n["lineColor" + e]) ? n["lineColor" + e] = /*#__PURE__*/ E(n["lineColor" + e], 20) : n["lineColor" + e] = /*#__PURE__*/ I(n["lineColor" + e], 20);
    for(let e = 0; e < n.THEME_COLOR_LIMIT; e++){
        let o = "" + (17 - 3 * e);
        t += `
    .section-${e - 1} rect, .section-${e - 1} path, .section-${e - 1} circle, .section-${e - 1} path  {
      fill: ${n["cScale" + e]};
    }
    .section-${e - 1} text {
     fill: ${n["cScaleLabel" + e]};
    }
    .node-icon-${e - 1} {
      font-size: 40px;
      color: ${n["cScaleLabel" + e]};
    }
    .section-edge-${e - 1}{
      stroke: ${n["cScale" + e]};
    }
    .edge-depth-${e - 1}{
      stroke-width: ${o};
    }
    .section-${e - 1} line {
      stroke: ${n["cScaleInv" + e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel" + e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
    }
    return t;
}, "genSections"), Ut = /*#__PURE__*/ m$1((n)=>`
  .edge {
    stroke-width: 3;
  }
  ${qt(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
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
`, "getStyles"), It = Ut;
var ye = {
    db: D,
    renderer: Tt,
    parser: ht,
    styles: It
};
export { ye as diagram };
