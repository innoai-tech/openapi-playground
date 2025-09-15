import { $ as $o, j as jo, U as Uo, G as Go, N as No, H as Ho, u as ur, g as En, c as cr, P as Po, n as nn } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { i as ia, g as He, O as $c } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var lt = /*#__PURE__*/ function() {
    var t = /*#__PURE__*/ m$1(function(x, o, a, l) {
        for(a = a || {}, l = x.length; l--; a[x[l]] = o);
        return a;
    }, "o"), r = [
        1,
        9
    ], i = [
        1,
        10
    ], u = [
        1,
        5,
        10,
        12
    ], c = {
        trace: /*#__PURE__*/ m$1(function() {}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            SANKEY: 4,
            NEWLINE: 5,
            csv: 6,
            opt_eof: 7,
            record: 8,
            csv_tail: 9,
            EOF: 10,
            "field[source]": 11,
            COMMA: 12,
            "field[target]": 13,
            "field[value]": 14,
            field: 15,
            escaped: 16,
            non_escaped: 17,
            DQUOTE: 18,
            ESCAPED_TEXT: 19,
            NON_ESCAPED_TEXT: 20,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            4: "SANKEY",
            5: "NEWLINE",
            10: "EOF",
            11: "field[source]",
            12: "COMMA",
            13: "field[target]",
            14: "field[value]",
            18: "DQUOTE",
            19: "ESCAPED_TEXT",
            20: "NON_ESCAPED_TEXT"
        },
        productions_: [
            0,
            [
                3,
                4
            ],
            [
                6,
                2
            ],
            [
                9,
                2
            ],
            [
                9,
                0
            ],
            [
                7,
                1
            ],
            [
                7,
                0
            ],
            [
                8,
                5
            ],
            [
                15,
                1
            ],
            [
                15,
                1
            ],
            [
                16,
                3
            ],
            [
                17,
                1
            ]
        ],
        performAction: /*#__PURE__*/ m$1(function(o, a, l, k, _, p, v) {
            var C = p.length - 1;
            switch(_){
                case 7:
                    let E = /*#__PURE__*/ k.findOrCreateNode(/*#__PURE__*/ p[C - 4].trim().replaceAll('""', '"')), M = /*#__PURE__*/ k.findOrCreateNode(/*#__PURE__*/ p[C - 2].trim().replaceAll('""', '"')), D = /*#__PURE__*/ parseFloat(/*#__PURE__*/ p[C].trim());
                    k.addLink(E, M, D);
                    break;
                case 8:
                case 9:
                case 11:
                    this.$ = p[C];
                    break;
                case 10:
                    this.$ = p[C - 1];
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
            {
                5: [
                    1,
                    3
                ]
            },
            {
                6: 4,
                8: 5,
                15: 6,
                16: 7,
                17: 8,
                18: r,
                20: i
            },
            {
                1: [
                    2,
                    6
                ],
                7: 11,
                10: [
                    1,
                    12
                ]
            },
            /*#__PURE__*/ t(i, [
                2,
                4
            ], {
                9: 13,
                5: [
                    1,
                    14
                ]
            }),
            {
                12: [
                    1,
                    15
                ]
            },
            /*#__PURE__*/ t(u, [
                2,
                8
            ]),
            /*#__PURE__*/ t(u, [
                2,
                9
            ]),
            {
                19: [
                    1,
                    16
                ]
            },
            /*#__PURE__*/ t(u, [
                2,
                11
            ]),
            {
                1: [
                    2,
                    1
                ]
            },
            {
                1: [
                    2,
                    5
                ]
            },
            /*#__PURE__*/ t(i, [
                2,
                2
            ]),
            {
                6: 17,
                8: 5,
                15: 6,
                16: 7,
                17: 8,
                18: r,
                20: i
            },
            {
                15: 18,
                16: 7,
                17: 8,
                18: r,
                20: i
            },
            {
                18: [
                    1,
                    19
                ]
            },
            /*#__PURE__*/ t(i, [
                2,
                3
            ]),
            {
                12: [
                    1,
                    20
                ]
            },
            /*#__PURE__*/ t(u, [
                2,
                10
            ]),
            {
                15: 21,
                16: 7,
                17: 8,
                18: r,
                20: i
            },
            /*#__PURE__*/ t([
                1,
                5,
                10
            ], [
                2,
                7
            ])
        ],
        defaultActions: {
            11: [
                2,
                1
            ],
            12: [
                2,
                5
            ]
        },
        parseError: /*#__PURE__*/ m$1(function(o, a) {
            if (a.recoverable) this.trace(o);
            else {
                var l = new Error(o);
                throw l.hash = a, l;
            }
        }, "parseError"),
        parse: /*#__PURE__*/ m$1(function(o) {
            var a = this, l = [
                0
            ], k = [], _ = [
                null
            ], p = [], v = this.table, C = "", E = 0, M = 0, D = 0, z = 2, B = 1, R = /*#__PURE__*/ p.slice.call(arguments, 1), w = /*#__PURE__*/ Object.create(this.lexer), N = {
                yy: {}
            };
            for(var P in this.yy)Object.prototype.hasOwnProperty.call(this.yy, P) && (N.yy[P] = this.yy[P]);
            w.setInput(o, N.yy), N.yy.lexer = w, N.yy.parser = this, typeof w.yylloc > "u" && (w.yylloc = {});
            var O = w.yylloc;
            p.push(O);
            var y = w.options && w.options.ranges;
            typeof N.yy.parseError == "function" ? this.parseError = N.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
            function T(L) {
                l.length = l.length - 2 * L, _.length = _.length - L, p.length = p.length - L;
            }
            m$1(T, "popStack");
            function st() {
                var L;
                return L = k.pop() || w.lex() || B, typeof L != "number" && (L instanceof Array && (k = L, L = /*#__PURE__*/ k.pop()), L = a.symbols_[L] || L), L;
            }
            m$1(st, "lex");
            for(var A, Y, n, f, h, d, s = {}, g, b, $, I;;){
                if (n = l[l.length - 1], this.defaultActions[n] ? f = this.defaultActions[n] : ((A === null || typeof A > "u") && (A = /*#__PURE__*/ st()), f = v[n] && v[n][A]), typeof f > "u" || !f.length || !f[0]) {
                    var j = "";
                    I = [];
                    for(g in v[n])this.terminals_[g] && g > z && I.push("'" + this.terminals_[g] + "'");
                    w.showPosition ? j = "Parse error on line " + (E + 1) + `:
` + w.showPosition() + `
Expecting ` + I.join(", ") + ", got '" + (this.terminals_[A] || A) + "'" : j = "Parse error on line " + (E + 1) + ": Unexpected " + (A == B ? "end of input" : "'" + (this.terminals_[A] || A) + "'"), this.parseError(j, {
                        text: w.match,
                        token: this.terminals_[A] || A,
                        line: w.yylineno,
                        loc: O,
                        expected: I
                    });
                }
                if (f[0] instanceof Array && f.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + n + ", token: " + A);
                switch(f[0]){
                    case 1:
                        l.push(A), _.push(w.yytext), p.push(w.yylloc), l.push(f[1]), A = null, Y ? (A = Y, Y = null) : (M = w.yyleng, C = w.yytext, E = w.yylineno, O = w.yylloc, D > 0);
                        break;
                    case 2:
                        if (b = this.productions_[f[1]][1], s.$ = _[_.length - b], s._$ = {
                            first_line: p[p.length - (b || 1)].first_line,
                            last_line: p[p.length - 1].last_line,
                            first_column: p[p.length - (b || 1)].first_column,
                            last_column: p[p.length - 1].last_column
                        }, y && (s._$.range = [
                            p[p.length - (b || 1)].range[0],
                            p[p.length - 1].range[1]
                        ]), d = /*#__PURE__*/ this.performAction.apply(s, /*#__PURE__*/ [
                            C,
                            M,
                            E,
                            N.yy,
                            f[1],
                            _,
                            p
                        ].concat(R)), typeof d < "u") return d;
                        b && (l = /*#__PURE__*/ l.slice(0, -1 * b * 2), _ = /*#__PURE__*/ _.slice(0, -1 * b), p = /*#__PURE__*/ p.slice(0, -1 * b)), l.push(this.productions_[f[1]][0]), _.push(s.$), p.push(s._$), $ = v[l[l.length - 2]][l[l.length - 1]], l.push($);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    }, S = /*#__PURE__*/ function() {
        var x = {
            EOF: 1,
            parseError: /*#__PURE__*/ m$1(function(a, l) {
                if (this.yy.parser) this.yy.parser.parseError(a, l);
                else throw new Error(a);
            }, "parseError"),
            setInput: /*#__PURE__*/ m$1(function(o, a) {
                return this.yy = a || this.yy || {}, this._input = o, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
                var o = this._input[0];
                this.yytext += o, this.yyleng++, this.offset++, this.match += o, this.matched += o;
                var a = /*#__PURE__*/ o.match(/(?:\r\n?|\n).*/g);
                return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /*#__PURE__*/ this._input.slice(1), o;
            }, "input"),
            unput: /*#__PURE__*/ m$1(function(o) {
                var a = o.length, l = /*#__PURE__*/ o.split(/(?:\r\n?|\n)/g);
                this._input = o + this._input, this.yytext = /*#__PURE__*/ this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
                var k = /*#__PURE__*/ this.match.split(/(?:\r\n?|\n)/g);
                this.match = /*#__PURE__*/ this.match.substr(0, this.match.length - 1), this.matched = /*#__PURE__*/ this.matched.substr(0, this.matched.length - 1), l.length - 1 && (this.yylineno -= l.length - 1);
                var _ = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: l ? (l.length === k.length ? this.yylloc.first_column : 0) + k[k.length - l.length].length - l[0].length : this.yylloc.first_column - a
                }, this.options.ranges && (this.yylloc.range = [
                    _[0],
                    _[0] + this.yyleng - a
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
            less: /*#__PURE__*/ m$1(function(o) {
                this.unput(/*#__PURE__*/ this.match.slice(o));
            }, "less"),
            pastInput: /*#__PURE__*/ m$1(function() {
                var o = /*#__PURE__*/ this.matched.substr(0, this.matched.length - this.match.length);
                return (o.length > 20 ? "..." : "") + o.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: /*#__PURE__*/ m$1(function() {
                var o = this.match;
                return o.length < 20 && (o += /*#__PURE__*/ this._input.substr(0, 20 - o.length)), (o.substr(0, 20) + (o.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: /*#__PURE__*/ m$1(function() {
                var o = /*#__PURE__*/ this.pastInput(), a = /*#__PURE__*/ new Array(o.length + 1).join("-");
                return o + this.upcomingInput() + `
` + a + "^";
            }, "showPosition"),
            test_match: /*#__PURE__*/ m$1(function(o, a) {
                var l, k, _;
                if (this.options.backtrack_lexer && (_ = {
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
                }, this.options.ranges && (_.yylloc.range = /*#__PURE__*/ this.yylloc.range.slice(0))), k = /*#__PURE__*/ o[0].match(/(?:\r\n?|\n).*/g), k && (this.yylineno += k.length), this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: k ? k[k.length - 1].length - k[k.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
                }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
                    this.offset,
                    this.offset += this.yyleng
                ]), this._more = false, this._backtrack = false, this._input = /*#__PURE__*/ this._input.slice(o[0].length), this.matched += o[0], l = /*#__PURE__*/ this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), l) return l;
                if (this._backtrack) {
                    for(var p in _)this[p] = _[p];
                    return false;
                }
                return false;
            }, "test_match"),
            next: /*#__PURE__*/ m$1(function() {
                if (this.done) return this.EOF;
                this._input || (this.done = true);
                var o, a, l, k;
                this._more || (this.yytext = "", this.match = "");
                for(var _ = /*#__PURE__*/ this._currentRules(), p = 0; p < _.length; p++)if (l = /*#__PURE__*/ this._input.match(this.rules[_[p]]), l && (!a || l[0].length > a[0].length)) {
                    if (a = l, k = p, this.options.backtrack_lexer) {
                        if (o = /*#__PURE__*/ this.test_match(l, _[p]), o !== false) return o;
                        if (this._backtrack) {
                            a = false;
                            continue;
                        } else return false;
                    } else if (!this.options.flex) break;
                }
                return a ? (o = /*#__PURE__*/ this.test_match(a, _[k]), o !== false ? o : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
            performAction: /*#__PURE__*/ m$1(function(a, l, k, _) {
                switch(k){
                    case 0:
                        return this.pushState("csv"), 4;
                    case 1:
                        return this.pushState("csv"), 4;
                    case 2:
                        return 10;
                    case 3:
                        return 5;
                    case 4:
                        return 12;
                    case 5:
                        return this.pushState("escaped_text"), 18;
                    case 6:
                        return 20;
                    case 7:
                        return this.popState("escaped_text"), 18;
                    case 8:
                        return 19;
                }
            }, "anonymous"),
            rules: [
                /^(?:sankey-beta\b)/i,
                /^(?:sankey\b)/i,
                /^(?:$)/i,
                /^(?:((\u000D\u000A)|(\u000A)))/i,
                /^(?:(\u002C))/i,
                /^(?:(\u0022))/i,
                /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
                /^(?:(\u0022)(?!(\u0022)))/i,
                /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i
            ],
            conditions: {
                csv: {
                    rules: [
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8
                    ],
                    inclusive: false
                },
                escaped_text: {
                    rules: [
                        7,
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
                        8
                    ],
                    inclusive: true
                }
            }
        };
        return x;
    }();
    c.lexer = S;
    function m() {
        this.yy = {};
    }
    return m$1(m, "Parser"), m.prototype = c, c.Parser = m, new m;
}();
lt.parser = lt;
var G = lt;
var tt = [], et = [], Z = new Map, Ht = /*#__PURE__*/ m$1(()=>{
    tt = [], et = [], Z = new Map, Po();
}, "clear"), ut = class {
    constructor(r, i, u = 0){
        this.source = r;
        this.target = i;
        this.value = u;
    }
    static{
        m$1(this, "SankeyLink");
    }
}, Yt = /*#__PURE__*/ m$1((t, r, i)=>{
    tt.push(new ut(t, r, i));
}, "addLink"), ft = class {
    constructor(r){
        this.ID = r;
    }
    static{
        m$1(this, "SankeyNode");
    }
}, qt = /*#__PURE__*/ m$1((t)=>{
    t = /*#__PURE__*/ nn.sanitizeText(t, /*#__PURE__*/ ur());
    let r = /*#__PURE__*/ Z.get(t);
    return r === void 0 && (r = new ft(t), Z.set(t, r), et.push(r)), r;
}, "findOrCreateNode"), Ut = /*#__PURE__*/ m$1(()=>et, "getNodes"), Xt = /*#__PURE__*/ m$1(()=>tt, "getLinks"), Gt = /*#__PURE__*/ m$1(()=>({
        nodes: /*#__PURE__*/ et.map((t)=>({
                id: t.ID
            })),
        links: /*#__PURE__*/ tt.map((t)=>({
                source: t.source.ID,
                target: t.target.ID,
                value: t.value
            }))
    }), "getGraph"), Ot = {
    nodesMap: Z,
    getConfig: /*#__PURE__*/ m$1(()=>ur().sankey, "getConfig"),
    getNodes: Ut,
    getLinks: Xt,
    getGraph: Gt,
    addLink: Yt,
    findOrCreateNode: qt,
    getAccTitle: Ho,
    setAccTitle: No,
    getAccDescription: Go,
    setAccDescription: Uo,
    getDiagramTitle: jo,
    setDiagramTitle: $o,
    clear: Ht
};
function J(t, r) {
    let i;
    if (r === void 0) for (let u of t)u != null && (i < u || i === void 0 && u >= u) && (i = u);
    else {
        let u = -1;
        for (let c of t)(c = /*#__PURE__*/ r(c, ++u, t)) != null && (i < c || i === void 0 && c >= c) && (i = c);
    }
    return i;
}
m$1(J, "max");
function F(t, r) {
    let i;
    if (r === void 0) for (let u of t)u != null && (i > u || i === void 0 && u >= u) && (i = u);
    else {
        let u = -1;
        for (let c of t)(c = /*#__PURE__*/ r(c, ++u, t)) != null && (i > c || i === void 0 && c >= c) && (i = c);
    }
    return i;
}
m$1(F, "min");
function W(t, r) {
    let i = 0;
    if (r === void 0) for (let u of t)(u = +u) && (i += u);
    else {
        let u = -1;
        for (let c of t)(c = +r(c, ++u, t)) && (i += c);
    }
    return i;
}
m$1(W, "sum");
function Jt(t) {
    return t.target.depth;
}
m$1(Jt, "targetDepth");
function ct(t) {
    return t.depth;
}
m$1(ct, "left");
function ht(t, r) {
    return r - 1 - t.height;
}
m$1(ht, "right");
function Q(t, r) {
    return t.sourceLinks.length ? t.depth : r - 1;
}
m$1(Q, "justify");
function dt(t) {
    return t.targetLinks.length ? t.depth : t.sourceLinks.length ? F(t.sourceLinks, Jt) - 1 : 0;
}
m$1(dt, "center");
function H(t) {
    return function() {
        return t;
    };
}
m$1(H, "constant");
function It(t, r) {
    return nt(t.source, r.source) || t.index - r.index;
}
m$1(It, "ascendingSourceBreadth");
function Dt(t, r) {
    return nt(t.target, r.target) || t.index - r.index;
}
m$1(Dt, "ascendingTargetBreadth");
function nt(t, r) {
    return t.y0 - r.y0;
}
m$1(nt, "ascendingBreadth");
function pt(t) {
    return t.value;
}
m$1(pt, "value");
function Qt(t) {
    return t.index;
}
m$1(Qt, "defaultId");
function Kt(t) {
    return t.nodes;
}
m$1(Kt, "defaultNodes");
function Zt(t) {
    return t.links;
}
m$1(Zt, "defaultLinks");
function Pt(t, r) {
    let i = /*#__PURE__*/ t.get(r);
    if (!i) throw new Error("missing: " + r);
    return i;
}
m$1(Pt, "find");
function Rt({ nodes: t }) {
    for (let r of t){
        let i = r.y0, u = i;
        for (let c of r.sourceLinks)c.y0 = i + c.width / 2, i += c.width;
        for (let c of r.targetLinks)c.y1 = u + c.width / 2, u += c.width;
    }
}
m$1(Rt, "computeLinkBreadths");
function rt() {
    let t = 0, r = 0, i = 1, u = 1, c = 24, S = 8, m, x = Qt, o = Q, a, l, k = Kt, _ = Zt, p = 6;
    function v() {
        let n = {
            nodes: /*#__PURE__*/ k.apply(null, arguments),
            links: /*#__PURE__*/ _.apply(null, arguments)
        };
        return C(n), E(n), M(n), D(n), R(n), Rt(n), n;
    }
    m$1(v, "sankey"), v.update = function(n) {
        return Rt(n), n;
    }, v.nodeId = function(n) {
        return arguments.length ? (x = typeof n == "function" ? n : H(n), v) : x;
    }, v.nodeAlign = function(n) {
        return arguments.length ? (o = typeof n == "function" ? n : H(n), v) : o;
    }, v.nodeSort = function(n) {
        return arguments.length ? (a = n, v) : a;
    }, v.nodeWidth = function(n) {
        return arguments.length ? (c = +n, v) : c;
    }, v.nodePadding = function(n) {
        return arguments.length ? (S = m = +n, v) : S;
    }, v.nodes = function(n) {
        return arguments.length ? (k = typeof n == "function" ? n : H(n), v) : k;
    }, v.links = function(n) {
        return arguments.length ? (_ = typeof n == "function" ? n : H(n), v) : _;
    }, v.linkSort = function(n) {
        return arguments.length ? (l = n, v) : l;
    }, v.size = function(n) {
        return arguments.length ? (t = r = 0, i = +n[0], u = +n[1], v) : [
            i - t,
            u - r
        ];
    }, v.extent = function(n) {
        return arguments.length ? (t = +n[0][0], i = +n[1][0], r = +n[0][1], u = +n[1][1], v) : [
            [
                t,
                r
            ],
            [
                i,
                u
            ]
        ];
    }, v.iterations = function(n) {
        return arguments.length ? (p = +n, v) : p;
    };
    function C({ nodes: n, links: f }) {
        for (let [d, s] of n.entries())s.index = d, s.sourceLinks = [], s.targetLinks = [];
        let h = new Map(n.map((d, s)=>[
                /*#__PURE__*/ x(d, s, n),
                d
            ]));
        for (let [d, s] of f.entries()){
            s.index = d;
            let { source: g, target: b } = s;
            typeof g != "object" && (g = s.source = /*#__PURE__*/ Pt(h, g)), typeof b != "object" && (b = s.target = /*#__PURE__*/ Pt(h, b)), g.sourceLinks.push(s), b.targetLinks.push(s);
        }
        if (l != null) for (let { sourceLinks: d, targetLinks: s } of n)d.sort(l), s.sort(l);
    }
    m$1(C, "computeNodeLinks");
    function E({ nodes: n }) {
        for (let f of n)f.value = f.fixedValue === void 0 ? Math.max(/*#__PURE__*/ W(f.sourceLinks, pt), /*#__PURE__*/ W(f.targetLinks, pt)) : f.fixedValue;
    }
    m$1(E, "computeNodeValues");
    function M({ nodes: n }) {
        let f = n.length, h = new Set(n), d = new Set, s = 0;
        for(; h.size;){
            for (let g of h){
                g.depth = s;
                for (let { target: b } of g.sourceLinks)d.add(b);
            }
            if (++s > f) throw new Error("circular link");
            h = d, d = new Set;
        }
    }
    m$1(M, "computeNodeDepths");
    function D({ nodes: n }) {
        let f = n.length, h = new Set(n), d = new Set, s = 0;
        for(; h.size;){
            for (let g of h){
                g.height = s;
                for (let { source: b } of g.targetLinks)d.add(b);
            }
            if (++s > f) throw new Error("circular link");
            h = d, d = new Set;
        }
    }
    m$1(D, "computeNodeHeights");
    function z({ nodes: n }) {
        let f = J(n, (s)=>s.depth) + 1, h = (i - t - c) / (f - 1), d = new Array(f);
        for (let s of n){
            let g = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.min(f - 1, /*#__PURE__*/ Math.floor(/*#__PURE__*/ o.call(null, s, f))));
            s.layer = g, s.x0 = t + g * h, s.x1 = s.x0 + c, d[g] ? d[g].push(s) : d[g] = [
                s
            ];
        }
        if (a) for (let s of d)s.sort(a);
        return d;
    }
    m$1(z, "computeNodeLayers");
    function B(n) {
        let f = /*#__PURE__*/ F(n, (h)=>(u - r - (h.length - 1) * m) / W(h, pt));
        for (let h of n){
            let d = r;
            for (let s of h){
                s.y0 = d, s.y1 = d + s.value * f, d = s.y1 + m;
                for (let g of s.sourceLinks)g.width = g.value * f;
            }
            d = (u - d + m) / (h.length + 1);
            for(let s = 0; s < h.length; ++s){
                let g = h[s];
                g.y0 += d * (s + 1), g.y1 += d * (s + 1);
            }
            st(h);
        }
    }
    m$1(B, "initializeNodeBreadths");
    function R(n) {
        let f = /*#__PURE__*/ z(n);
        m = /*#__PURE__*/ Math.min(S, (u - r) / (J(f, (h)=>h.length) - 1)), B(f);
        for(let h = 0; h < p; ++h){
            let d = /*#__PURE__*/ Math.pow(.99, h), s = /*#__PURE__*/ Math.max(1 - d, (h + 1) / p);
            N(f, d, s), w(f, d, s);
        }
    }
    m$1(R, "computeNodeBreadths");
    function w(n, f, h) {
        for(let d = 1, s = n.length; d < s; ++d){
            let g = n[d];
            for (let b of g){
                let $ = 0, I = 0;
                for (let { source: L, value: at } of b.targetLinks){
                    let q = at * (b.layer - L.layer);
                    $ += A(L, b) * q, I += q;
                }
                if (!(I > 0)) continue;
                let j = ($ / I - b.y0) * f;
                b.y0 += j, b.y1 += j, T(b);
            }
            a === void 0 && g.sort(nt), P(g, h);
        }
    }
    m$1(w, "relaxLeftToRight");
    function N(n, f, h) {
        for(let d = n.length, s = d - 2; s >= 0; --s){
            let g = n[s];
            for (let b of g){
                let $ = 0, I = 0;
                for (let { target: L, value: at } of b.sourceLinks){
                    let q = at * (L.layer - b.layer);
                    $ += Y(b, L) * q, I += q;
                }
                if (!(I > 0)) continue;
                let j = ($ / I - b.y0) * f;
                b.y0 += j, b.y1 += j, T(b);
            }
            a === void 0 && g.sort(nt), P(g, h);
        }
    }
    m$1(N, "relaxRightToLeft");
    function P(n, f) {
        let h = n.length >> 1, d = n[h];
        y(n, d.y0 - m, h - 1, f), O(n, d.y1 + m, h + 1, f), y(n, u, n.length - 1, f), O(n, r, 0, f);
    }
    m$1(P, "resolveCollisions");
    function O(n, f, h, d) {
        for(; h < n.length; ++h){
            let s = n[h], g = (f - s.y0) * d;
            g > 1e-6 && (s.y0 += g, s.y1 += g), f = s.y1 + m;
        }
    }
    m$1(O, "resolveCollisionsTopToBottom");
    function y(n, f, h, d) {
        for(; h >= 0; --h){
            let s = n[h], g = (s.y1 - f) * d;
            g > 1e-6 && (s.y0 -= g, s.y1 -= g), f = s.y0 - m;
        }
    }
    m$1(y, "resolveCollisionsBottomToTop");
    function T({ sourceLinks: n, targetLinks: f }) {
        if (l === void 0) {
            for (let { source: { sourceLinks: h } } of f)h.sort(Dt);
            for (let { target: { targetLinks: h } } of n)h.sort(It);
        }
    }
    m$1(T, "reorderNodeLinks");
    function st(n) {
        if (l === void 0) for (let { sourceLinks: f, targetLinks: h } of n)f.sort(Dt), h.sort(It);
    }
    m$1(st, "reorderLinks");
    function A(n, f) {
        let h = n.y0 - (n.sourceLinks.length - 1) * m / 2;
        for (let { target: d, width: s } of n.sourceLinks){
            if (d === f) break;
            h += s + m;
        }
        for (let { source: d, width: s } of f.targetLinks){
            if (d === n) break;
            h -= s;
        }
        return h;
    }
    m$1(A, "targetTop");
    function Y(n, f) {
        let h = f.y0 - (f.targetLinks.length - 1) * m / 2;
        for (let { source: d, width: s } of f.targetLinks){
            if (d === n) break;
            h += s + m;
        }
        for (let { target: d, width: s } of n.sourceLinks){
            if (d === f) break;
            h -= s;
        }
        return h;
    }
    return m$1(Y, "sourceTop"), v;
}
m$1(rt, "Sankey");
var yt = Math.PI, mt = 2 * yt, V = 1e-6, te = mt - V;
function gt() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
m$1(gt, "Path");
function jt() {
    return new gt;
}
m$1(jt, "path");
gt.prototype = jt.prototype = {
    constructor: gt,
    moveTo: /*#__PURE__*/ m$1(function(t, r) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +r);
    }, "moveTo"),
    closePath: /*#__PURE__*/ m$1(function() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
    }, "closePath"),
    lineTo: /*#__PURE__*/ m$1(function(t, r) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +r);
    }, "lineTo"),
    quadraticCurveTo: /*#__PURE__*/ m$1(function(t, r, i, u) {
        this._ += "Q" + +t + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +u);
    }, "quadraticCurveTo"),
    bezierCurveTo: /*#__PURE__*/ m$1(function(t, r, i, u, c, S) {
        this._ += "C" + +t + "," + +r + "," + +i + "," + +u + "," + (this._x1 = +c) + "," + (this._y1 = +S);
    }, "bezierCurveTo"),
    arcTo: /*#__PURE__*/ m$1(function(t, r, i, u, c) {
        t = +t, r = +r, i = +i, u = +u, c = +c;
        var S = this._x1, m = this._y1, x = i - t, o = u - r, a = S - t, l = m - r, k = a * a + l * l;
        if (c < 0) throw new Error("negative radius: " + c);
        if (this._x1 === null) this._ += "M" + (this._x1 = t) + "," + (this._y1 = r);
        else if (k > V) if (!(Math.abs(l * x - o * a) > V) || !c) this._ += "L" + (this._x1 = t) + "," + (this._y1 = r);
        else {
            var _ = i - S, p = u - m, v = x * x + o * o, C = _ * _ + p * p, E = /*#__PURE__*/ Math.sqrt(v), M = /*#__PURE__*/ Math.sqrt(k), D = c * Math.tan((yt - Math.acos((v + k - C) / (2 * E * M))) / 2), z = D / M, B = D / E;
            Math.abs(z - 1) > V && (this._ += "L" + (t + z * a) + "," + (r + z * l)), this._ += "A" + c + "," + c + ",0,0," + +(l * _ > a * p) + "," + (this._x1 = t + B * x) + "," + (this._y1 = r + B * o);
        }
    }, "arcTo"),
    arc: /*#__PURE__*/ m$1(function(t, r, i, u, c, S) {
        t = +t, r = +r, i = +i, S = !!S;
        var m = i * Math.cos(u), x = i * Math.sin(u), o = t + m, a = r + x, l = 1 ^ S, k = S ? u - c : c - u;
        if (i < 0) throw new Error("negative radius: " + i);
        this._x1 === null ? this._ += "M" + o + "," + a : (Math.abs(this._x1 - o) > V || Math.abs(this._y1 - a) > V) && (this._ += "L" + o + "," + a), i && (k < 0 && (k = k % mt + mt), k > te ? this._ += "A" + i + "," + i + ",0,1," + l + "," + (t - m) + "," + (r - x) + "A" + i + "," + i + ",0,1," + l + "," + (this._x1 = o) + "," + (this._y1 = a) : k > V && (this._ += "A" + i + "," + i + ",0," + +(k >= yt) + "," + l + "," + (this._x1 = t + i * Math.cos(c)) + "," + (this._y1 = r + i * Math.sin(c))));
    }, "arc"),
    rect: /*#__PURE__*/ m$1(function(t, r, i, u) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +r) + "h" + +i + "v" + +u + "h" + -i + "Z";
    }, "rect"),
    toString: /*#__PURE__*/ m$1(function() {
        return this._;
    }, "toString")
};
var xt = jt;
function ot(t) {
    return m$1(function() {
        return t;
    }, "constant");
}
m$1(ot, "default");
function zt(t) {
    return t[0];
}
m$1(zt, "x");
function Bt(t) {
    return t[1];
}
m$1(Bt, "y");
var $t = Array.prototype.slice;
function ee(t) {
    return t.source;
}
m$1(ee, "linkSource");
function ne(t) {
    return t.target;
}
m$1(ne, "linkTarget");
function re(t) {
    var r = ee, i = ne, u = zt, c = Bt, S = null;
    function m() {
        var x, o = /*#__PURE__*/ $t.call(arguments), a = /*#__PURE__*/ r.apply(this, o), l = /*#__PURE__*/ i.apply(this, o);
        if (S || (S = x = /*#__PURE__*/ xt()), t(S, +u.apply(this, (o[0] = a, o)), +c.apply(this, o), +u.apply(this, (o[0] = l, o)), +c.apply(this, o)), x) return S = null, x + "" || null;
    }
    return m$1(m, "link"), m.source = function(x) {
        return arguments.length ? (r = x, m) : r;
    }, m.target = function(x) {
        return arguments.length ? (i = x, m) : i;
    }, m.x = function(x) {
        return arguments.length ? (u = typeof x == "function" ? x : ot(+x), m) : u;
    }, m.y = function(x) {
        return arguments.length ? (c = typeof x == "function" ? x : ot(+x), m) : c;
    }, m.context = function(x) {
        return arguments.length ? (S = x ?? null, m) : S;
    }, m;
}
m$1(re, "link");
function oe(t, r, i, u, c) {
    t.moveTo(r, i), t.bezierCurveTo(r = (r + u) / 2, i, r, c, u, c);
}
m$1(oe, "curveHorizontal");
function kt() {
    return re(oe);
}
m$1(kt, "linkHorizontal");
function ie(t) {
    return [
        t.source.x1,
        t.y0
    ];
}
m$1(ie, "horizontalSource");
function se(t) {
    return [
        t.target.x0,
        t.y1
    ];
}
m$1(se, "horizontalTarget");
function it() {
    return kt().source(ie).target(se);
}
m$1(it, "default");
var K = class t {
    static{
        m$1(this, "Uid");
    }
    static{
        this.count = 0;
    }
    static next(r) {
        return new t(r + ++t.count);
    }
    constructor(r){
        this.id = r, this.href = `#${r}`;
    }
    toString() {
        return "url(" + this.href + ")";
    }
};
var ae = {
    left: ct,
    right: ht,
    center: dt,
    justify: Q
}, le = /*#__PURE__*/ m$1(function(t, r, i, u) {
    let { securityLevel: c, sankey: S } = ur(), m = En.sankey, x;
    c === "sandbox" && (x = /*#__PURE__*/ ia("#i" + r));
    let o = c === "sandbox" ? ia(x.nodes()[0].contentDocument.body) : ia("body"), a = c === "sandbox" ? o.select(`[id="${r}"]`) : ia(`[id="${r}"]`), l = S?.width ?? m.width, k = S?.height ?? m.width, _ = S?.useMaxWidth ?? m.useMaxWidth, p = S?.nodeAlignment ?? m.nodeAlignment, v = S?.prefix ?? m.prefix, C = S?.suffix ?? m.suffix, E = S?.showValues ?? m.showValues, M = /*#__PURE__*/ u.db.getGraph(), D = ae[p];
    rt().nodeId((y)=>y.id).nodeWidth(10).nodePadding(10 + (E ? 15 : 0)).nodeAlign(D).extent([
        [
            0,
            0
        ],
        [
            l,
            k
        ]
    ])(M);
    let R = /*#__PURE__*/ He($c);
    a.append("g").attr("class", "nodes").selectAll(".node").data(M.nodes).join("g").attr("class", "node").attr("id", (y)=>(y.uid = /*#__PURE__*/ K.next("node-")).id).attr("transform", function(y) {
        return "translate(" + y.x0 + "," + y.y0 + ")";
    }).attr("x", (y)=>y.x0).attr("y", (y)=>y.y0).append("rect").attr("height", (y)=>y.y1 - y.y0).attr("width", (y)=>y.x1 - y.x0).attr("fill", (y)=>R(y.id));
    let w = /*#__PURE__*/ m$1(({ id: y, value: T })=>E ? `${y}
${v}${Math.round(T * 100) / 100}${C}` : y, "getText");
    a.append("g").attr("class", "node-labels").attr("font-size", 14).selectAll("text").data(M.nodes).join("text").attr("x", (y)=>y.x0 < l / 2 ? y.x1 + 6 : y.x0 - 6).attr("y", (y)=>(y.y1 + y.y0) / 2).attr("dy", `${E ? "0" : "0.35"}em`).attr("text-anchor", (y)=>y.x0 < l / 2 ? "start" : "end").text(w);
    let N = /*#__PURE__*/ a.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", .5).selectAll(".link").data(M.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply"), P = S?.linkColor ?? "gradient";
    if (P === "gradient") {
        let y = /*#__PURE__*/ N.append("linearGradient").attr("id", (T)=>(T.uid = /*#__PURE__*/ K.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (T)=>T.source.x1).attr("x2", (T)=>T.target.x0);
        y.append("stop").attr("offset", "0%").attr("stop-color", (T)=>R(T.source.id)), y.append("stop").attr("offset", "100%").attr("stop-color", (T)=>R(T.target.id));
    }
    let O;
    switch(P){
        case "gradient":
            O = /*#__PURE__*/ m$1((y)=>y.uid, "coloring");
            break;
        case "source":
            O = /*#__PURE__*/ m$1((y)=>R(y.source.id), "coloring");
            break;
        case "target":
            O = /*#__PURE__*/ m$1((y)=>R(y.target.id), "coloring");
            break;
        default:
            O = P;
    }
    N.append("path").attr("d", /*#__PURE__*/ it()).attr("stroke", O).attr("stroke-width", (y)=>Math.max(1, y.width)), cr(void 0, a, 0, _);
}, "draw"), Vt = {
    draw: le
};
var Ft = /*#__PURE__*/ m$1((t)=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, `
`).trim(), "prepareTextForParsing");
var ue = /*#__PURE__*/ m$1((t)=>`.label {
      font-family: ${t.fontFamily};
    }`, "getStyles"), Wt = ue;
var fe = /*#__PURE__*/ G.parse.bind(G);
G.parse = (t)=>fe(/*#__PURE__*/ Ft(t));
var Cn = {
    styles: Wt,
    parser: G,
    db: Ot,
    renderer: Vt
};
export { Cn as diagram };
