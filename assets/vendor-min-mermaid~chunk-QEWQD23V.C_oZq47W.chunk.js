import { k as fi$1, _ as _f$1, Z as Zr$1, m as h, J as Jr$1, o as kr, R as Rn$1, D as Df, p as De$1, f as fm$1, A as Ai$1, Q as Qr$1, X as Xr$1, q as Qm, r as pr$1, z as zi$1, s as sn$1, N as Nf$1, U as Ui$1, u as Tm$1, e as fn$1, y as ym$1, v as s0, w as Ri$1, V as Vi$1, M as Mi$1, x as pm$1, B as cm$1, C as _i$1, K as Ki$1, E as mp$1, F as fp$1, G as lm$1 } from './vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js';
import { C as Cr$1 } from './vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js';
import { a as N, Y as Y$1, m as m$2, T } from './vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js';
import { m as m$1, o, p, q as q$1, n } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var rc = /*#__PURE__*/ n((tc)=>{
    Object.defineProperty(tc, "__esModule", {
        value: true
    });
    var Zl;
    function ec() {
        if (Zl === void 0) throw new Error("No runtime abstraction layer installed");
        return Zl;
    }
    m$1(ec, "RAL");
    (function(r) {
        function e(t) {
            if (t === void 0) throw new Error("No runtime abstraction layer provided");
            Zl = t;
        }
        m$1(e, "install"), r.install = e;
    })(ec || (ec = {}));
    tc.default = ec;
});
var Ff = /*#__PURE__*/ n((we)=>{
    Object.defineProperty(we, "__esModule", {
        value: true
    });
    we.stringArray = we.array = we.func = we.error = we.number = we.string = we.boolean = void 0;
    function qm(r) {
        return r === true || r === false;
    }
    m$1(qm, "boolean");
    we.boolean = qm;
    function Mf(r) {
        return typeof r == "string" || r instanceof String;
    }
    m$1(Mf, "string");
    we.string = Mf;
    function Xm(r) {
        return typeof r == "number" || r instanceof Number;
    }
    m$1(Xm, "number");
    we.number = Xm;
    function Ym(r) {
        return r instanceof Error;
    }
    m$1(Ym, "error");
    we.error = Ym;
    function Jm(r) {
        return typeof r == "function";
    }
    m$1(Jm, "func");
    we.func = Jm;
    function Df(r) {
        return Array.isArray(r);
    }
    m$1(Df, "array");
    we.array = Df;
    function Qm(r) {
        return Df(r) && r.every((e)=>Mf(e));
    }
    m$1(Qm, "stringArray");
    we.stringArray = Qm;
});
var ic = /*#__PURE__*/ n((Kn)=>{
    Object.defineProperty(Kn, "__esModule", {
        value: true
    });
    Kn.Emitter = Kn.Event = void 0;
    var Zm = /*#__PURE__*/ rc(), Uf;
    (function(r) {
        let e = {
            dispose () {}
        };
        r.None = function() {
            return e;
        };
    })(Uf || (Kn.Event = Uf = {}));
    var nc = class {
        static #_ = m$1(this, "CallbackList");
        add(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 ? arguments[2] : void 0;
            this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(n) && n.push({
                dispose: /*#__PURE__*/ m$1(()=>this.remove(e, t), "dispose")
            });
        }
        remove(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            if (!this._callbacks) return;
            let n = false;
            for(let i = 0, s = this._callbacks.length; i < s; i++)if (this._callbacks[i] === e) if (this._contexts[i] === t) {
                this._callbacks.splice(i, 1), this._contexts.splice(i, 1);
                return;
            } else n = true;
            if (n) throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
        invoke() {
            for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
                e[_key] = arguments[_key];
            }
            if (!this._callbacks) return [];
            let t = [], n = /*#__PURE__*/ this._callbacks.slice(0), i = /*#__PURE__*/ this._contexts.slice(0);
            for(let s = 0, o = n.length; s < o; s++)try {
                t.push(/*#__PURE__*/ n[s].apply(i[s], e));
            } catch (l) {
                (0, Zm.default)().console.error(l);
            }
            return t;
        }
        isEmpty() {
            return !this._callbacks || this._callbacks.length === 0;
        }
        dispose() {
            this._callbacks = void 0, this._contexts = void 0;
        }
    }, Pa = class r {
        static #_ = m$1(this, "Emitter");
        constructor(e){
            this._options = e;
        }
        get event() {
            return this._event || (this._event = (e, t, n)=>{
                this._callbacks || (this._callbacks = new nc), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
                let i = {
                    dispose: /*#__PURE__*/ m$1(()=>{
                        this._callbacks && (this._callbacks.remove(e, t), i.dispose = r._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
                    }, "dispose")
                };
                return Array.isArray(n) && n.push(i), i;
            }), this._event;
        }
        fire(e) {
            this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
        }
        dispose() {
            this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
        }
    };
    Kn.Emitter = Pa;
    Pa._noop = function() {};
});
var Gf = /*#__PURE__*/ n((Vn)=>{
    Object.defineProperty(Vn, "__esModule", {
        value: true
    });
    Vn.CancellationTokenSource = Vn.CancellationToken = void 0;
    var eg = /*#__PURE__*/ rc(), tg = /*#__PURE__*/ Ff(), sc = /*#__PURE__*/ ic(), ba;
    (function(r) {
        r.None = /*#__PURE__*/ Object.freeze({
            isCancellationRequested: false,
            onCancellationRequested: sc.Event.None
        }), r.Cancelled = /*#__PURE__*/ Object.freeze({
            isCancellationRequested: true,
            onCancellationRequested: sc.Event.None
        });
        function e(t) {
            let n = t;
            return n && (n === r.None || n === r.Cancelled || tg.boolean(n.isCancellationRequested) && !!n.onCancellationRequested);
        }
        m$1(e, "is"), r.is = e;
    })(ba || (Vn.CancellationToken = ba = {}));
    var rg = /*#__PURE__*/ Object.freeze(function(r, e) {
        let t = /*#__PURE__*/ (0, eg.default)().timer.setTimeout(/*#__PURE__*/ r.bind(e), 0);
        return {
            dispose () {
                t.dispose();
            }
        };
    }), Ma = class {
        static #_ = m$1(this, "MutableToken");
        constructor(){
            this._isCancelled = false;
        }
        cancel() {
            this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
        }
        get isCancellationRequested() {
            return this._isCancelled;
        }
        get onCancellationRequested() {
            return this._isCancelled ? rg : (this._emitter || (this._emitter = new sc.Emitter), this._emitter.event);
        }
        dispose() {
            this._emitter && (this._emitter.dispose(), this._emitter = void 0);
        }
    }, ac = class {
        static #_ = m$1(this, "CancellationTokenSource");
        get token() {
            return this._token || (this._token = new Ma), this._token;
        }
        cancel() {
            this._token ? this._token.cancel() : this._token = ba.Cancelled;
        }
        dispose() {
            this._token ? this._token instanceof Ma && this._token.dispose() : this._token = ba.None;
        }
    };
    Vn.CancellationTokenSource = ac;
});
var de = {};
o(de, {
    AbstractAstReflection: ()=>Jt,
    AbstractCstNode: ()=>Wi,
    AbstractLangiumParser: ()=>Ki,
    AbstractParserErrorMessageProvider: ()=>La,
    AbstractThreadedAsyncParser: ()=>Tc,
    AstUtils: ()=>Fs,
    BiMap: ()=>xr,
    Cancellation: ()=>$,
    CompositeCstNodeImpl: ()=>gr,
    ContextCache: ()=>Rr,
    CstNodeBuilder: ()=>Bi,
    CstUtils: ()=>$s,
    DEFAULT_TOKENIZE_OPTIONS: ()=>Wa,
    DONE_RESULT: ()=>Se,
    DatatypeSymbol: ()=>wa,
    DefaultAstNodeDescriptionProvider: ()=>as,
    DefaultAstNodeLocator: ()=>ls,
    DefaultAsyncParser: ()=>Ts,
    DefaultCommentProvider: ()=>ys,
    DefaultConfigurationProvider: ()=>cs,
    DefaultDocumentBuilder: ()=>us,
    DefaultDocumentValidator: ()=>ss,
    DefaultHydrator: ()=>Rs,
    DefaultIndexManager: ()=>ds,
    DefaultJsonSerializer: ()=>rs,
    DefaultLangiumDocumentFactory: ()=>zi,
    DefaultLangiumDocuments: ()=>qi,
    DefaultLexer: ()=>Ar,
    DefaultLexerErrorMessageProvider: ()=>hs,
    DefaultLinker: ()=>Xi,
    DefaultNameProvider: ()=>Yi,
    DefaultReferenceDescriptionProvider: ()=>os,
    DefaultReferences: ()=>Ji,
    DefaultScopeComputation: ()=>Qi,
    DefaultScopeProvider: ()=>ts,
    DefaultServiceRegistry: ()=>ns,
    DefaultTokenBuilder: ()=>Pt,
    DefaultValueConverter: ()=>Tr,
    DefaultWorkspaceLock: ()=>xs,
    DefaultWorkspaceManager: ()=>fs,
    Deferred: ()=>Ue,
    Disposable: ()=>jt,
    DisposableCache: ()=>qn,
    DocumentCache: ()=>Ga,
    DocumentState: ()=>Y,
    DocumentValidator: ()=>Qe,
    EMPTY_SCOPE: ()=>ig,
    EMPTY_STREAM: ()=>ei,
    EmptyFileSystem: ()=>Ic,
    EmptyFileSystemProvider: ()=>Xa,
    ErrorWithLocation: ()=>tr,
    GrammarAST: ()=>ci,
    GrammarUtils: ()=>Ks,
    IndentationAwareLexer: ()=>kc,
    IndentationAwareTokenBuilder: ()=>qa,
    JSDocDocumentationProvider: ()=>gs,
    LangiumCompletionParser: ()=>ji,
    LangiumParser: ()=>Vi,
    LangiumParserErrorMessageProvider: ()=>Wn,
    LeafCstNodeImpl: ()=>mr,
    LexingMode: ()=>vr,
    MapScope: ()=>Zi,
    Module: ()=>Ac,
    MultiMap: ()=>st,
    OperationCancelled: ()=>pt,
    ParserWorker: ()=>xc,
    Reduction: ()=>Nr,
    RegExpUtils: ()=>Bs,
    RootCstNodeImpl: ()=>Bn,
    SimpleCache: ()=>es,
    StreamImpl: ()=>je,
    StreamScope: ()=>zn,
    TextDocument: ()=>jn,
    TreeStreamImpl: ()=>ot,
    URI: ()=>Ge,
    UriUtils: ()=>Be,
    ValidationCategory: ()=>Yn,
    ValidationRegistry: ()=>is,
    ValueConverter: ()=>ht,
    WorkspaceCache: ()=>Xn,
    assertUnreachable: ()=>ct,
    createCompletionParser: ()=>Jl,
    createDefaultCoreModule: ()=>Rc,
    createDefaultSharedCoreModule: ()=>Ec,
    createGrammarConfig: ()=>el,
    createLangiumParser: ()=>Ql,
    createParser: ()=>Hi,
    delayNextTick: ()=>oc,
    diagnosticData: ()=>Er,
    eagerLoad: ()=>ah,
    getDiagnosticRange: ()=>Xf,
    indentationBuilderDefaultOptions: ()=>vc,
    inject: ()=>za,
    interruptAndCheck: ()=>ue,
    isAstNode: ()=>le,
    isAstNodeDescription: ()=>co,
    isAstNodeWithComment: ()=>uc,
    isCompositeCstNode: ()=>tt,
    isIMultiModeLexerDefinition: ()=>fc,
    isJSDoc: ()=>gc,
    isLeafCstNode: ()=>Ut,
    isLinkingError: ()=>Qt,
    isNamed: ()=>zf,
    isOperationCancelled: ()=>mt,
    isReference: ()=>Ee,
    isRootCstNode: ()=>Zn,
    isTokenTypeArray: ()=>Ka,
    isTokenTypeDictionary: ()=>dc,
    loadGrammarFromJson: ()=>bt,
    parseJSDoc: ()=>mc,
    prepareLangiumParser: ()=>bf,
    setInterruptionPeriod: ()=>Wf,
    startCancelableOperation: ()=>Fa,
    stream: ()=>j,
    toDiagnosticData: ()=>Yf,
    toDiagnosticSeverity: ()=>Ba
});
var $s = {};
o($s, {
    DefaultNameRegexp: ()=>Ss,
    RangeComparison: ()=>lt,
    compareRange: ()=>Vc,
    findCommentNode: ()=>po,
    findDeclarationNodeAtOffset: ()=>xh,
    findLeafNodeAtOffset: ()=>mo,
    findLeafNodeBeforeOffset: ()=>jc,
    flattenCst: ()=>Th,
    getInteriorNodes: ()=>Ah,
    getNextNode: ()=>Rh,
    getPreviousNode: ()=>zc,
    getStartlineNode: ()=>Eh,
    inRange: ()=>ho,
    isChildNode: ()=>fo,
    isCommentNode: ()=>uo,
    streamCst: ()=>Zt,
    toDocumentSegment: ()=>er,
    tokenToRange: ()=>Cr
});
function le(r) {
    return typeof r == "object" && r !== null && typeof r.$type == "string";
}
m$1(le, "isAstNode");
function Ee(r) {
    return typeof r == "object" && r !== null && typeof r.$refText == "string";
}
m$1(Ee, "isReference");
function co(r) {
    return typeof r == "object" && r !== null && typeof r.name == "string" && typeof r.type == "string" && typeof r.path == "string";
}
m$1(co, "isAstNodeDescription");
function Qt(r) {
    return typeof r == "object" && r !== null && le(r.container) && Ee(r.reference) && typeof r.message == "string";
}
m$1(Qt, "isLinkingError");
var Jt = class {
    static #_ = m$1(this, "AbstractAstReflection");
    constructor(){
        this.subtypes = {}, this.allSubtypes = {};
    }
    isInstance(e, t) {
        return le(e) && this.isSubtype(e.$type, t);
    }
    isSubtype(e, t) {
        if (e === t) return true;
        let n = this.subtypes[e];
        n || (n = this.subtypes[e] = {});
        let i = n[t];
        if (i !== void 0) return i;
        {
            let s = /*#__PURE__*/ this.computeIsSubtype(e, t);
            return n[t] = s, s;
        }
    }
    getAllSubTypes(e) {
        let t = this.allSubtypes[e];
        if (t) return t;
        {
            let n = /*#__PURE__*/ this.getAllTypes(), i = [];
            for (let s of n)this.isSubtype(s, e) && i.push(s);
            return this.allSubtypes[e] = i, i;
        }
    }
};
function tt(r) {
    return typeof r == "object" && r !== null && Array.isArray(r.content);
}
m$1(tt, "isCompositeCstNode");
function Ut(r) {
    return typeof r == "object" && r !== null && typeof r.tokenType == "object";
}
m$1(Ut, "isLeafCstNode");
function Zn(r) {
    return tt(r) && typeof r.fullText == "string";
}
m$1(Zn, "isRootCstNode");
var je = class r {
    static #_ = m$1(this, "StreamImpl");
    constructor(e, t){
        this.startFn = e, this.nextFn = t;
    }
    iterator() {
        let e = {
            state: /*#__PURE__*/ this.startFn(),
            next: /*#__PURE__*/ m$1(()=>this.nextFn(e.state), "next"),
            [Symbol.iterator]: ()=>e
        };
        return e;
    }
    [Symbol.iterator]() {
        return this.iterator();
    }
    isEmpty() {
        return !!this.iterator().next().done;
    }
    count() {
        let e = /*#__PURE__*/ this.iterator(), t = 0, n = /*#__PURE__*/ e.next();
        for(; !n.done;)t++, n = /*#__PURE__*/ e.next();
        return t;
    }
    toArray() {
        let e = [], t = /*#__PURE__*/ this.iterator(), n;
        do n = /*#__PURE__*/ t.next(), n.value !== void 0 && e.push(n.value);
        while (!n.done);
        return e;
    }
    toSet() {
        return new Set(this);
    }
    toMap(e, t) {
        let n = /*#__PURE__*/ this.map((i)=>[
                e ? e(i) : i,
                t ? t(i) : i
            ]);
        return new Map(n);
    }
    toString() {
        return this.join();
    }
    concat(e) {
        return new r(()=>({
                first: /*#__PURE__*/ this.startFn(),
                firstDone: false,
                iterator: /*#__PURE__*/ e[Symbol.iterator]()
            }), (t)=>{
            let n;
            if (!t.firstDone) {
                do if (n = /*#__PURE__*/ this.nextFn(t.first), !n.done) return n;
                while (!n.done);
                t.firstDone = true;
            }
            do if (n = /*#__PURE__*/ t.iterator.next(), !n.done) return n;
            while (!n.done);
            return Se;
        });
    }
    join() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ",";
        let t = /*#__PURE__*/ this.iterator(), n = "", i, s = false;
        do i = /*#__PURE__*/ t.next(), i.done || (s && (n += e), n += /*#__PURE__*/ yh(i.value)), s = true;
        while (!i.done);
        return n;
    }
    indexOf(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        let n = /*#__PURE__*/ this.iterator(), i = 0, s = /*#__PURE__*/ n.next();
        for(; !s.done;){
            if (i >= t && s.value === e) return i;
            s = /*#__PURE__*/ n.next(), i++;
        }
        return -1;
    }
    every(e) {
        let t = /*#__PURE__*/ this.iterator(), n = /*#__PURE__*/ t.next();
        for(; !n.done;){
            if (!e(n.value)) return false;
            n = /*#__PURE__*/ t.next();
        }
        return true;
    }
    some(e) {
        let t = /*#__PURE__*/ this.iterator(), n = /*#__PURE__*/ t.next();
        for(; !n.done;){
            if (e(n.value)) return true;
            n = /*#__PURE__*/ t.next();
        }
        return false;
    }
    forEach(e) {
        let t = /*#__PURE__*/ this.iterator(), n = 0, i = /*#__PURE__*/ t.next();
        for(; !i.done;)e(i.value, n), i = /*#__PURE__*/ t.next(), n++;
    }
    map(e) {
        return new r(this.startFn, (t)=>{
            let { done: n, value: i } = this.nextFn(t);
            return n ? Se : {
                done: false,
                value: /*#__PURE__*/ e(i)
            };
        });
    }
    filter(e) {
        return new r(this.startFn, (t)=>{
            let n;
            do if (n = /*#__PURE__*/ this.nextFn(t), !n.done && e(n.value)) return n;
            while (!n.done);
            return Se;
        });
    }
    nonNullable() {
        return this.filter((e)=>e != null);
    }
    reduce(e, t) {
        let n = /*#__PURE__*/ this.iterator(), i = t, s = /*#__PURE__*/ n.next();
        for(; !s.done;)i === void 0 ? i = s.value : i = /*#__PURE__*/ e(i, s.value), s = /*#__PURE__*/ n.next();
        return i;
    }
    reduceRight(e, t) {
        return this.recursiveReduce(/*#__PURE__*/ this.iterator(), e, t);
    }
    recursiveReduce(e, t, n) {
        let i = /*#__PURE__*/ e.next();
        if (i.done) return n;
        let s = /*#__PURE__*/ this.recursiveReduce(e, t, n);
        return s === void 0 ? i.value : t(s, i.value);
    }
    find(e) {
        let t = /*#__PURE__*/ this.iterator(), n = /*#__PURE__*/ t.next();
        for(; !n.done;){
            if (e(n.value)) return n.value;
            n = /*#__PURE__*/ t.next();
        }
    }
    findIndex(e) {
        let t = /*#__PURE__*/ this.iterator(), n = 0, i = /*#__PURE__*/ t.next();
        for(; !i.done;){
            if (e(i.value)) return n;
            i = /*#__PURE__*/ t.next(), n++;
        }
        return -1;
    }
    includes(e) {
        let t = /*#__PURE__*/ this.iterator(), n = /*#__PURE__*/ t.next();
        for(; !n.done;){
            if (n.value === e) return true;
            n = /*#__PURE__*/ t.next();
        }
        return false;
    }
    flatMap(e) {
        return new r(()=>({
                this: /*#__PURE__*/ this.startFn()
            }), (t)=>{
            do {
                if (t.iterator) {
                    let s = /*#__PURE__*/ t.iterator.next();
                    if (s.done) t.iterator = void 0;
                    else return s;
                }
                let { done: n, value: i } = this.nextFn(t.this);
                if (!n) {
                    let s = /*#__PURE__*/ e(i);
                    if (Cs(s)) t.iterator = /*#__PURE__*/ s[Symbol.iterator]();
                    else return {
                        done: false,
                        value: s
                    };
                }
            }while (t.iterator);
            return Se;
        });
    }
    flat(e) {
        if (e === void 0 && (e = 1), e <= 0) return this;
        let t = e > 1 ? this.flat(e - 1) : this;
        return new r(()=>({
                this: /*#__PURE__*/ t.startFn()
            }), (n)=>{
            do {
                if (n.iterator) {
                    let o = /*#__PURE__*/ n.iterator.next();
                    if (o.done) n.iterator = void 0;
                    else return o;
                }
                let { done: i, value: s } = t.nextFn(n.this);
                if (!i) if (Cs(s)) n.iterator = /*#__PURE__*/ s[Symbol.iterator]();
                else return {
                    done: false,
                    value: s
                };
            }while (n.iterator);
            return Se;
        });
    }
    head() {
        let t = /*#__PURE__*/ this.iterator().next();
        if (!t.done) return t.value;
    }
    tail() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        return new r(()=>{
            let t = /*#__PURE__*/ this.startFn();
            for(let n = 0; n < e; n++)if (this.nextFn(t).done) return t;
            return t;
        }, this.nextFn);
    }
    limit(e) {
        return new r(()=>({
                size: 0,
                state: /*#__PURE__*/ this.startFn()
            }), (t)=>(t.size++, t.size > e ? Se : this.nextFn(t.state)));
    }
    distinct(e) {
        return new r(()=>({
                set: new Set,
                internalState: /*#__PURE__*/ this.startFn()
            }), (t)=>{
            let n;
            do if (n = /*#__PURE__*/ this.nextFn(t.internalState), !n.done) {
                let i = e ? e(n.value) : n.value;
                if (!t.set.has(i)) return t.set.add(i), n;
            }
            while (!n.done);
            return Se;
        });
    }
    exclude(e, t) {
        let n = new Set;
        for (let i of e){
            let s = t ? t(i) : i;
            n.add(s);
        }
        return this.filter((i)=>{
            let s = t ? t(i) : i;
            return !n.has(s);
        });
    }
};
function yh(r) {
    return typeof r == "string" ? r : typeof r > "u" ? "undefined" : typeof r.toString == "function" ? r.toString() : Object.prototype.toString.call(r);
}
m$1(yh, "toString");
function Cs(r) {
    return !!r && typeof r[Symbol.iterator] == "function";
}
m$1(Cs, "isIterable");
var ei = new je(()=>{}, ()=>Se), Se = /*#__PURE__*/ Object.freeze({
    done: true,
    value: void 0
});
function j() {
    for(var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++){
        r[_key] = arguments[_key];
    }
    if (r.length === 1) {
        let e = r[0];
        if (e instanceof je) return e;
        if (Cs(e)) return new je(()=>e[Symbol.iterator](), (t)=>t.next());
        if (typeof e.length == "number") return new je(()=>({
                index: 0
            }), (t)=>t.index < e.length ? {
                done: false,
                value: e[t.index++]
            } : Se);
    }
    return r.length > 1 ? new je(()=>({
            collIndex: 0,
            arrIndex: 0
        }), (e)=>{
        do {
            if (e.iterator) {
                let t = /*#__PURE__*/ e.iterator.next();
                if (!t.done) return t;
                e.iterator = void 0;
            }
            if (e.array) {
                if (e.arrIndex < e.array.length) return {
                    done: false,
                    value: e.array[e.arrIndex++]
                };
                e.array = void 0, e.arrIndex = 0;
            }
            if (e.collIndex < r.length) {
                let t = r[e.collIndex++];
                Cs(t) ? e.iterator = /*#__PURE__*/ t[Symbol.iterator]() : t && typeof t.length == "number" && (e.array = t);
            }
        }while (e.iterator || e.array || e.collIndex < r.length);
        return Se;
    }) : ei;
}
m$1(j, "stream");
var ot = class extends je {
    static #_ = m$1(this, "TreeStreamImpl");
    constructor(e, t, n){
        super(()=>({
                iterators: n?.includeRoot ? [
                    /*#__PURE__*/ [
                        e
                    ][Symbol.iterator]()
                ] : [
                    /*#__PURE__*/ t(e)[Symbol.iterator]()
                ],
                pruned: false
            }), (i)=>{
            for(i.pruned && (i.iterators.pop(), i.pruned = false); i.iterators.length > 0;){
                let o = /*#__PURE__*/ i.iterators[i.iterators.length - 1].next();
                if (o.done) i.iterators.pop();
                else return i.iterators.push(/*#__PURE__*/ t(o.value)[Symbol.iterator]()), o;
            }
            return Se;
        });
    }
    iterator() {
        let e = {
            state: /*#__PURE__*/ this.startFn(),
            next: /*#__PURE__*/ m$1(()=>this.nextFn(e.state), "next"),
            prune: /*#__PURE__*/ m$1(()=>{
                e.state.pruned = true;
            }, "prune"),
            [Symbol.iterator]: ()=>e
        };
        return e;
    }
}, Nr;
(function(r) {
    function e(s) {
        return s.reduce((o, l)=>o + l, 0);
    }
    m$1(e, "sum"), r.sum = e;
    function t(s) {
        return s.reduce((o, l)=>o * l, 0);
    }
    m$1(t, "product"), r.product = t;
    function n(s) {
        return s.reduce((o, l)=>Math.min(o, l));
    }
    m$1(n, "min"), r.min = n;
    function i(s) {
        return s.reduce((o, l)=>Math.max(o, l));
    }
    m$1(i, "max"), r.max = i;
})(Nr || (Nr = {}));
function Zt(r) {
    return new ot(r, (e)=>tt(e) ? e.content : [], {
        includeRoot: true
    });
}
m$1(Zt, "streamCst");
function Th(r) {
    return Zt(r).filter(Ut);
}
m$1(Th, "flattenCst");
function fo(r, e) {
    for(; r.container;)if (r = r.container, r === e) return true;
    return false;
}
m$1(fo, "isChildNode");
function Cr(r) {
    return {
        start: {
            character: r.startColumn - 1,
            line: r.startLine - 1
        },
        end: {
            character: r.endColumn,
            line: r.endLine - 1
        }
    };
}
m$1(Cr, "tokenToRange");
function er(r) {
    if (!r) return;
    let { offset: e, end: t, range: n } = r;
    return {
        range: n,
        offset: e,
        end: t,
        length: t - e
    };
}
m$1(er, "toDocumentSegment");
var lt;
(function(r) {
    r[r.Before = 0] = "Before", r[r.After = 1] = "After", r[r.OverlapFront = 2] = "OverlapFront", r[r.OverlapBack = 3] = "OverlapBack", r[r.Inside = 4] = "Inside", r[r.Outside = 5] = "Outside";
})(lt || (lt = {}));
function Vc(r, e) {
    if (r.end.line < e.start.line || r.end.line === e.start.line && r.end.character <= e.start.character) return lt.Before;
    if (r.start.line > e.end.line || r.start.line === e.end.line && r.start.character >= e.end.character) return lt.After;
    let t = r.start.line > e.start.line || r.start.line === e.start.line && r.start.character >= e.start.character, n = r.end.line < e.end.line || r.end.line === e.end.line && r.end.character <= e.end.character;
    return t && n ? lt.Inside : t ? lt.OverlapBack : n ? lt.OverlapFront : lt.Outside;
}
m$1(Vc, "compareRange");
function ho(r, e) {
    return Vc(r, e) > lt.After;
}
m$1(ho, "inRange");
var Ss = /^[\w\p{L}]$/u;
function xh(r, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ss;
    if (r) {
        if (e > 0) {
            let n = e - r.offset, i = /*#__PURE__*/ r.text.charAt(n);
            t.test(i) || e--;
        }
        return mo(r, e);
    }
}
m$1(xh, "findDeclarationNodeAtOffset");
function po(r, e) {
    if (r) {
        let t = /*#__PURE__*/ zc(r, true);
        if (t && uo(t, e)) return t;
        if (Zn(r)) {
            let n = /*#__PURE__*/ r.content.findIndex((i)=>!i.hidden);
            for(let i = n - 1; i >= 0; i--){
                let s = r.content[i];
                if (uo(s, e)) return s;
            }
        }
    }
}
m$1(po, "findCommentNode");
function uo(r, e) {
    return Ut(r) && e.includes(r.tokenType.name);
}
m$1(uo, "isCommentNode");
function mo(r, e) {
    if (Ut(r)) return r;
    if (tt(r)) {
        let t = /*#__PURE__*/ Hc(r, e, false);
        if (t) return mo(t, e);
    }
}
m$1(mo, "findLeafNodeAtOffset");
function jc(r, e) {
    if (Ut(r)) return r;
    if (tt(r)) {
        let t = /*#__PURE__*/ Hc(r, e, true);
        if (t) return jc(t, e);
    }
}
m$1(jc, "findLeafNodeBeforeOffset");
function Hc(r, e, t) {
    let n = 0, i = r.content.length - 1, s;
    for(; n <= i;){
        let o = /*#__PURE__*/ Math.floor((n + i) / 2), l = r.content[o];
        if (l.offset <= e && l.end > e) return l;
        l.end <= e ? (s = t ? l : void 0, n = o + 1) : i = o - 1;
    }
    return s;
}
m$1(Hc, "binarySearch");
function zc(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    for(; r.container;){
        let t = r.container, n = /*#__PURE__*/ t.content.indexOf(r);
        for(; n > 0;){
            n--;
            let i = t.content[n];
            if (e || !i.hidden) return i;
        }
        r = t;
    }
}
m$1(zc, "getPreviousNode");
function Rh(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    for(; r.container;){
        let t = r.container, n = /*#__PURE__*/ t.content.indexOf(r), i = t.content.length - 1;
        for(; n < i;){
            n++;
            let s = t.content[n];
            if (e || !s.hidden) return s;
        }
        r = t;
    }
}
m$1(Rh, "getNextNode");
function Eh(r) {
    if (r.range.start.character === 0) return r;
    let e = r.range.start.line, t = r, n;
    for(; r.container;){
        let i = r.container, s = n ?? i.content.indexOf(r);
        if (s === 0 ? (r = i, n = void 0) : (n = s - 1, r = i.content[n]), r.range.start.line !== e) break;
        t = r;
    }
    return t;
}
m$1(Eh, "getStartlineNode");
function Ah(r, e) {
    let t = /*#__PURE__*/ vh(r, e);
    return t ? t.parent.content.slice(t.a + 1, t.b) : [];
}
m$1(Ah, "getInteriorNodes");
function vh(r, e) {
    let t = /*#__PURE__*/ Kc(r), n = /*#__PURE__*/ Kc(e), i;
    for(let s = 0; s < t.length && s < n.length; s++){
        let o = t[s], l = n[s];
        if (o.parent === l.parent) i = {
            parent: o.parent,
            a: o.index,
            b: l.index
        };
        else break;
    }
    return i;
}
m$1(vh, "getCommonParent");
function Kc(r) {
    let e = [];
    for(; r.container;){
        let t = r.container, n = /*#__PURE__*/ t.content.indexOf(r);
        e.push({
            parent: t,
            index: n
        }), r = t;
    }
    return e.reverse();
}
m$1(Kc, "getParentChain");
var Ks = {};
o(Ks, {
    findAssignment: ()=>Jo,
    findNameAssignment: ()=>Ws,
    findNodeForKeyword: ()=>Xo,
    findNodeForProperty: ()=>gi,
    findNodesForKeyword: ()=>Vh,
    findNodesForKeywordInternal: ()=>Yo,
    findNodesForProperty: ()=>zo,
    getActionAtElement: ()=>nu,
    getActionType: ()=>su,
    getAllReachableRules: ()=>mi,
    getCrossReferenceTerminal: ()=>jo,
    getEntryRule: ()=>Zc,
    getExplicitRuleType: ()=>yn,
    getHiddenRules: ()=>eu,
    getRuleType: ()=>Qo,
    getRuleTypeName: ()=>Xh,
    getTypeName: ()=>Ti,
    isArrayCardinality: ()=>Hh,
    isArrayOperator: ()=>zh,
    isCommentTerminal: ()=>Ho,
    isDataType: ()=>qh,
    isDataTypeRule: ()=>yi,
    isOptionalCardinality: ()=>jh,
    terminalRegex: ()=>Tn
});
var tr = class extends Error {
    static #_ = m$1(this, "ErrorWithLocation");
    constructor(e, t){
        super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
    }
};
function ct(r) {
    throw new Error("Error! The input value was not handled.");
}
m$1(ct, "assertUnreachable");
var ci = {};
o(ci, {
    AbstractElement: ()=>_r,
    AbstractRule: ()=>Sr,
    AbstractType: ()=>$r,
    Action: ()=>Xr,
    Alternatives: ()=>Yr,
    ArrayLiteral: ()=>wr,
    ArrayType: ()=>Lr,
    Assignment: ()=>Jr,
    BooleanLiteral: ()=>Or,
    CharacterRange: ()=>Qr,
    Condition: ()=>ti,
    Conjunction: ()=>Pr,
    CrossReference: ()=>Zr,
    Disjunction: ()=>br,
    EndOfFile: ()=>en,
    Grammar: ()=>Mr,
    GrammarImport: ()=>ni,
    Group: ()=>tn,
    InferredType: ()=>Dr,
    Interface: ()=>Fr,
    Keyword: ()=>rn,
    LangiumGrammarAstReflection: ()=>hn,
    LangiumGrammarTerminals: ()=>kh,
    NamedArgument: ()=>ii,
    NegatedToken: ()=>nn,
    Negation: ()=>Ur,
    NumberLiteral: ()=>Gr,
    Parameter: ()=>Br,
    ParameterReference: ()=>Wr,
    ParserRule: ()=>Kr,
    ReferenceType: ()=>Vr,
    RegexToken: ()=>sn,
    ReturnType: ()=>si,
    RuleCall: ()=>an,
    SimpleType: ()=>jr,
    StringLiteral: ()=>Hr,
    TerminalAlternatives: ()=>on,
    TerminalGroup: ()=>ln,
    TerminalRule: ()=>rr,
    TerminalRuleCall: ()=>cn,
    Type: ()=>zr,
    TypeAttribute: ()=>ai,
    TypeDefinition: ()=>_s,
    UnionType: ()=>qr,
    UnorderedGroup: ()=>un,
    UntilToken: ()=>dn,
    ValueLiteral: ()=>ri,
    Wildcard: ()=>fn,
    isAbstractElement: ()=>oi,
    isAbstractRule: ()=>Ih,
    isAbstractType: ()=>Nh,
    isAction: ()=>kt,
    isAlternatives: ()=>Ps,
    isArrayLiteral: ()=>wh,
    isArrayType: ()=>go,
    isAssignment: ()=>rt,
    isBooleanLiteral: ()=>yo,
    isCharacterRange: ()=>Io,
    isCondition: ()=>Ch,
    isConjunction: ()=>To,
    isCrossReference: ()=>nr,
    isDisjunction: ()=>xo,
    isEndOfFile: ()=>No,
    isFeatureName: ()=>Sh,
    isGrammar: ()=>Lh,
    isGrammarImport: ()=>Oh,
    isGroup: ()=>Gt,
    isInferredType: ()=>ws,
    isInterface: ()=>Ls,
    isKeyword: ()=>Ye,
    isNamedArgument: ()=>Ph,
    isNegatedToken: ()=>Co,
    isNegation: ()=>Ro,
    isNumberLiteral: ()=>bh,
    isParameter: ()=>Mh,
    isParameterReference: ()=>Eo,
    isParserRule: ()=>$e,
    isPrimitiveType: ()=>qc,
    isReferenceType: ()=>Ao,
    isRegexToken: ()=>So,
    isReturnType: ()=>vo,
    isRuleCall: ()=>nt,
    isSimpleType: ()=>Os,
    isStringLiteral: ()=>Dh,
    isTerminalAlternatives: ()=>$o,
    isTerminalGroup: ()=>_o,
    isTerminalRule: ()=>He,
    isTerminalRuleCall: ()=>bs,
    isType: ()=>li,
    isTypeAttribute: ()=>Fh,
    isTypeDefinition: ()=>$h,
    isUnionType: ()=>ko,
    isUnorderedGroup: ()=>Ms,
    isUntilToken: ()=>wo,
    isValueLiteral: ()=>_h,
    isWildcard: ()=>Lo,
    reflection: ()=>w
});
var kh = {
    ID: /\^?[_a-zA-Z][\w_]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
    RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
    WS: /\s+/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
}, Sr = "AbstractRule";
function Ih(r) {
    return w.isInstance(r, Sr);
}
m$1(Ih, "isAbstractRule");
var $r = "AbstractType";
function Nh(r) {
    return w.isInstance(r, $r);
}
m$1(Nh, "isAbstractType");
var ti = "Condition";
function Ch(r) {
    return w.isInstance(r, ti);
}
m$1(Ch, "isCondition");
function Sh(r) {
    return qc(r) || r === "current" || r === "entry" || r === "extends" || r === "false" || r === "fragment" || r === "grammar" || r === "hidden" || r === "import" || r === "interface" || r === "returns" || r === "terminal" || r === "true" || r === "type" || r === "infer" || r === "infers" || r === "with" || typeof r == "string" && /\^?[_a-zA-Z][\w_]*/.test(r);
}
m$1(Sh, "isFeatureName");
function qc(r) {
    return r === "string" || r === "number" || r === "boolean" || r === "Date" || r === "bigint";
}
m$1(qc, "isPrimitiveType");
var _s = "TypeDefinition";
function $h(r) {
    return w.isInstance(r, _s);
}
m$1($h, "isTypeDefinition");
var ri = "ValueLiteral";
function _h(r) {
    return w.isInstance(r, ri);
}
m$1(_h, "isValueLiteral");
var _r = "AbstractElement";
function oi(r) {
    return w.isInstance(r, _r);
}
m$1(oi, "isAbstractElement");
var wr = "ArrayLiteral";
function wh(r) {
    return w.isInstance(r, wr);
}
m$1(wh, "isArrayLiteral");
var Lr = "ArrayType";
function go(r) {
    return w.isInstance(r, Lr);
}
m$1(go, "isArrayType");
var Or = "BooleanLiteral";
function yo(r) {
    return w.isInstance(r, Or);
}
m$1(yo, "isBooleanLiteral");
var Pr = "Conjunction";
function To(r) {
    return w.isInstance(r, Pr);
}
m$1(To, "isConjunction");
var br = "Disjunction";
function xo(r) {
    return w.isInstance(r, br);
}
m$1(xo, "isDisjunction");
var Mr = "Grammar";
function Lh(r) {
    return w.isInstance(r, Mr);
}
m$1(Lh, "isGrammar");
var ni = "GrammarImport";
function Oh(r) {
    return w.isInstance(r, ni);
}
m$1(Oh, "isGrammarImport");
var Dr = "InferredType";
function ws(r) {
    return w.isInstance(r, Dr);
}
m$1(ws, "isInferredType");
var Fr = "Interface";
function Ls(r) {
    return w.isInstance(r, Fr);
}
m$1(Ls, "isInterface");
var ii = "NamedArgument";
function Ph(r) {
    return w.isInstance(r, ii);
}
m$1(Ph, "isNamedArgument");
var Ur = "Negation";
function Ro(r) {
    return w.isInstance(r, Ur);
}
m$1(Ro, "isNegation");
var Gr = "NumberLiteral";
function bh(r) {
    return w.isInstance(r, Gr);
}
m$1(bh, "isNumberLiteral");
var Br = "Parameter";
function Mh(r) {
    return w.isInstance(r, Br);
}
m$1(Mh, "isParameter");
var Wr = "ParameterReference";
function Eo(r) {
    return w.isInstance(r, Wr);
}
m$1(Eo, "isParameterReference");
var Kr = "ParserRule";
function $e(r) {
    return w.isInstance(r, Kr);
}
m$1($e, "isParserRule");
var Vr = "ReferenceType";
function Ao(r) {
    return w.isInstance(r, Vr);
}
m$1(Ao, "isReferenceType");
var si = "ReturnType";
function vo(r) {
    return w.isInstance(r, si);
}
m$1(vo, "isReturnType");
var jr = "SimpleType";
function Os(r) {
    return w.isInstance(r, jr);
}
m$1(Os, "isSimpleType");
var Hr = "StringLiteral";
function Dh(r) {
    return w.isInstance(r, Hr);
}
m$1(Dh, "isStringLiteral");
var rr = "TerminalRule";
function He(r) {
    return w.isInstance(r, rr);
}
m$1(He, "isTerminalRule");
var zr = "Type";
function li(r) {
    return w.isInstance(r, zr);
}
m$1(li, "isType");
var ai = "TypeAttribute";
function Fh(r) {
    return w.isInstance(r, ai);
}
m$1(Fh, "isTypeAttribute");
var qr = "UnionType";
function ko(r) {
    return w.isInstance(r, qr);
}
m$1(ko, "isUnionType");
var Xr = "Action";
function kt(r) {
    return w.isInstance(r, Xr);
}
m$1(kt, "isAction");
var Yr = "Alternatives";
function Ps(r) {
    return w.isInstance(r, Yr);
}
m$1(Ps, "isAlternatives");
var Jr = "Assignment";
function rt(r) {
    return w.isInstance(r, Jr);
}
m$1(rt, "isAssignment");
var Qr = "CharacterRange";
function Io(r) {
    return w.isInstance(r, Qr);
}
m$1(Io, "isCharacterRange");
var Zr = "CrossReference";
function nr(r) {
    return w.isInstance(r, Zr);
}
m$1(nr, "isCrossReference");
var en = "EndOfFile";
function No(r) {
    return w.isInstance(r, en);
}
m$1(No, "isEndOfFile");
var tn = "Group";
function Gt(r) {
    return w.isInstance(r, tn);
}
m$1(Gt, "isGroup");
var rn = "Keyword";
function Ye(r) {
    return w.isInstance(r, rn);
}
m$1(Ye, "isKeyword");
var nn = "NegatedToken";
function Co(r) {
    return w.isInstance(r, nn);
}
m$1(Co, "isNegatedToken");
var sn = "RegexToken";
function So(r) {
    return w.isInstance(r, sn);
}
m$1(So, "isRegexToken");
var an = "RuleCall";
function nt(r) {
    return w.isInstance(r, an);
}
m$1(nt, "isRuleCall");
var on = "TerminalAlternatives";
function $o(r) {
    return w.isInstance(r, on);
}
m$1($o, "isTerminalAlternatives");
var ln = "TerminalGroup";
function _o(r) {
    return w.isInstance(r, ln);
}
m$1(_o, "isTerminalGroup");
var cn = "TerminalRuleCall";
function bs(r) {
    return w.isInstance(r, cn);
}
m$1(bs, "isTerminalRuleCall");
var un = "UnorderedGroup";
function Ms(r) {
    return w.isInstance(r, un);
}
m$1(Ms, "isUnorderedGroup");
var dn = "UntilToken";
function wo(r) {
    return w.isInstance(r, dn);
}
m$1(wo, "isUntilToken");
var fn = "Wildcard";
function Lo(r) {
    return w.isInstance(r, fn);
}
m$1(Lo, "isWildcard");
var hn = class extends Jt {
    static #_ = m$1(this, "LangiumGrammarAstReflection");
    getAllTypes() {
        return [
            _r,
            Sr,
            $r,
            Xr,
            Yr,
            wr,
            Lr,
            Jr,
            Or,
            Qr,
            ti,
            Pr,
            Zr,
            br,
            en,
            Mr,
            ni,
            tn,
            Dr,
            Fr,
            rn,
            ii,
            nn,
            Ur,
            Gr,
            Br,
            Wr,
            Kr,
            Vr,
            sn,
            si,
            an,
            jr,
            Hr,
            on,
            ln,
            rr,
            cn,
            zr,
            ai,
            _s,
            qr,
            un,
            dn,
            ri,
            fn
        ];
    }
    computeIsSubtype(e, t) {
        switch(e){
            case Xr:
            case Yr:
            case Jr:
            case Qr:
            case Zr:
            case en:
            case tn:
            case rn:
            case nn:
            case sn:
            case an:
            case on:
            case ln:
            case cn:
            case un:
            case dn:
            case fn:
                return this.isSubtype(_r, t);
            case wr:
            case Gr:
            case Hr:
                return this.isSubtype(ri, t);
            case Lr:
            case Vr:
            case jr:
            case qr:
                return this.isSubtype(_s, t);
            case Or:
                return this.isSubtype(ti, t) || this.isSubtype(ri, t);
            case Pr:
            case br:
            case Ur:
            case Wr:
                return this.isSubtype(ti, t);
            case Dr:
            case Fr:
            case zr:
                return this.isSubtype($r, t);
            case Kr:
                return this.isSubtype(Sr, t) || this.isSubtype($r, t);
            case rr:
                return this.isSubtype(Sr, t);
            default:
                return false;
        }
    }
    getReferenceType(e) {
        let t = `${e.container.$type}:${e.property}`;
        switch(t){
            case "Action:type":
            case "CrossReference:type":
            case "Interface:superTypes":
            case "ParserRule:returnType":
            case "SimpleType:typeRef":
                return $r;
            case "Grammar:hiddenTokens":
            case "ParserRule:hiddenTokens":
            case "RuleCall:rule":
                return Sr;
            case "Grammar:usedGrammars":
                return Mr;
            case "NamedArgument:parameter":
            case "ParameterReference:parameter":
                return Br;
            case "TerminalRuleCall:rule":
                return rr;
            default:
                throw new Error(`${t} is not a valid reference id.`);
        }
    }
    getTypeMetaData(e) {
        switch(e){
            case _r:
                return {
                    name: _r,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        }
                    ]
                };
            case wr:
                return {
                    name: wr,
                    properties: [
                        {
                            name: "elements",
                            defaultValue: []
                        }
                    ]
                };
            case Lr:
                return {
                    name: Lr,
                    properties: [
                        {
                            name: "elementType"
                        }
                    ]
                };
            case Or:
                return {
                    name: Or,
                    properties: [
                        {
                            name: "true",
                            defaultValue: false
                        }
                    ]
                };
            case Pr:
                return {
                    name: Pr,
                    properties: [
                        {
                            name: "left"
                        },
                        {
                            name: "right"
                        }
                    ]
                };
            case br:
                return {
                    name: br,
                    properties: [
                        {
                            name: "left"
                        },
                        {
                            name: "right"
                        }
                    ]
                };
            case Mr:
                return {
                    name: Mr,
                    properties: [
                        {
                            name: "definesHiddenTokens",
                            defaultValue: false
                        },
                        {
                            name: "hiddenTokens",
                            defaultValue: []
                        },
                        {
                            name: "imports",
                            defaultValue: []
                        },
                        {
                            name: "interfaces",
                            defaultValue: []
                        },
                        {
                            name: "isDeclared",
                            defaultValue: false
                        },
                        {
                            name: "name"
                        },
                        {
                            name: "rules",
                            defaultValue: []
                        },
                        {
                            name: "types",
                            defaultValue: []
                        },
                        {
                            name: "usedGrammars",
                            defaultValue: []
                        }
                    ]
                };
            case ni:
                return {
                    name: ni,
                    properties: [
                        {
                            name: "path"
                        }
                    ]
                };
            case Dr:
                return {
                    name: Dr,
                    properties: [
                        {
                            name: "name"
                        }
                    ]
                };
            case Fr:
                return {
                    name: Fr,
                    properties: [
                        {
                            name: "attributes",
                            defaultValue: []
                        },
                        {
                            name: "name"
                        },
                        {
                            name: "superTypes",
                            defaultValue: []
                        }
                    ]
                };
            case ii:
                return {
                    name: ii,
                    properties: [
                        {
                            name: "calledByName",
                            defaultValue: false
                        },
                        {
                            name: "parameter"
                        },
                        {
                            name: "value"
                        }
                    ]
                };
            case Ur:
                return {
                    name: Ur,
                    properties: [
                        {
                            name: "value"
                        }
                    ]
                };
            case Gr:
                return {
                    name: Gr,
                    properties: [
                        {
                            name: "value"
                        }
                    ]
                };
            case Br:
                return {
                    name: Br,
                    properties: [
                        {
                            name: "name"
                        }
                    ]
                };
            case Wr:
                return {
                    name: Wr,
                    properties: [
                        {
                            name: "parameter"
                        }
                    ]
                };
            case Kr:
                return {
                    name: Kr,
                    properties: [
                        {
                            name: "dataType"
                        },
                        {
                            name: "definesHiddenTokens",
                            defaultValue: false
                        },
                        {
                            name: "definition"
                        },
                        {
                            name: "entry",
                            defaultValue: false
                        },
                        {
                            name: "fragment",
                            defaultValue: false
                        },
                        {
                            name: "hiddenTokens",
                            defaultValue: []
                        },
                        {
                            name: "inferredType"
                        },
                        {
                            name: "name"
                        },
                        {
                            name: "parameters",
                            defaultValue: []
                        },
                        {
                            name: "returnType"
                        },
                        {
                            name: "wildcard",
                            defaultValue: false
                        }
                    ]
                };
            case Vr:
                return {
                    name: Vr,
                    properties: [
                        {
                            name: "referenceType"
                        }
                    ]
                };
            case si:
                return {
                    name: si,
                    properties: [
                        {
                            name: "name"
                        }
                    ]
                };
            case jr:
                return {
                    name: jr,
                    properties: [
                        {
                            name: "primitiveType"
                        },
                        {
                            name: "stringType"
                        },
                        {
                            name: "typeRef"
                        }
                    ]
                };
            case Hr:
                return {
                    name: Hr,
                    properties: [
                        {
                            name: "value"
                        }
                    ]
                };
            case rr:
                return {
                    name: rr,
                    properties: [
                        {
                            name: "definition"
                        },
                        {
                            name: "fragment",
                            defaultValue: false
                        },
                        {
                            name: "hidden",
                            defaultValue: false
                        },
                        {
                            name: "name"
                        },
                        {
                            name: "type"
                        }
                    ]
                };
            case zr:
                return {
                    name: zr,
                    properties: [
                        {
                            name: "name"
                        },
                        {
                            name: "type"
                        }
                    ]
                };
            case ai:
                return {
                    name: ai,
                    properties: [
                        {
                            name: "defaultValue"
                        },
                        {
                            name: "isOptional",
                            defaultValue: false
                        },
                        {
                            name: "name"
                        },
                        {
                            name: "type"
                        }
                    ]
                };
            case qr:
                return {
                    name: qr,
                    properties: [
                        {
                            name: "types",
                            defaultValue: []
                        }
                    ]
                };
            case Xr:
                return {
                    name: Xr,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "feature"
                        },
                        {
                            name: "inferredType"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "operator"
                        },
                        {
                            name: "type"
                        }
                    ]
                };
            case Yr:
                return {
                    name: Yr,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "elements",
                            defaultValue: []
                        },
                        {
                            name: "lookahead"
                        }
                    ]
                };
            case Jr:
                return {
                    name: Jr,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "feature"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "operator"
                        },
                        {
                            name: "terminal"
                        }
                    ]
                };
            case Qr:
                return {
                    name: Qr,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "left"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "right"
                        }
                    ]
                };
            case Zr:
                return {
                    name: Zr,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "deprecatedSyntax",
                            defaultValue: false
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "terminal"
                        },
                        {
                            name: "type"
                        }
                    ]
                };
            case en:
                return {
                    name: en,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        }
                    ]
                };
            case tn:
                return {
                    name: tn,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "elements",
                            defaultValue: []
                        },
                        {
                            name: "guardCondition"
                        },
                        {
                            name: "lookahead"
                        }
                    ]
                };
            case rn:
                return {
                    name: rn,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "value"
                        }
                    ]
                };
            case nn:
                return {
                    name: nn,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "terminal"
                        }
                    ]
                };
            case sn:
                return {
                    name: sn,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "regex"
                        }
                    ]
                };
            case an:
                return {
                    name: an,
                    properties: [
                        {
                            name: "arguments",
                            defaultValue: []
                        },
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "rule"
                        }
                    ]
                };
            case on:
                return {
                    name: on,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "elements",
                            defaultValue: []
                        },
                        {
                            name: "lookahead"
                        }
                    ]
                };
            case ln:
                return {
                    name: ln,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "elements",
                            defaultValue: []
                        },
                        {
                            name: "lookahead"
                        }
                    ]
                };
            case cn:
                return {
                    name: cn,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "rule"
                        }
                    ]
                };
            case un:
                return {
                    name: un,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "elements",
                            defaultValue: []
                        },
                        {
                            name: "lookahead"
                        }
                    ]
                };
            case dn:
                return {
                    name: dn,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        },
                        {
                            name: "terminal"
                        }
                    ]
                };
            case fn:
                return {
                    name: fn,
                    properties: [
                        {
                            name: "cardinality"
                        },
                        {
                            name: "lookahead"
                        }
                    ]
                };
            default:
                return {
                    name: e,
                    properties: []
                };
        }
    }
}, w = new hn;
var Fs = {};
o(Fs, {
    assignMandatoryProperties: ()=>bo,
    copyAstNode: ()=>Po,
    findLocalReferences: ()=>Gh,
    findRootNode: ()=>ui,
    getContainerOfType: ()=>ir,
    getDocument: ()=>_e,
    hasContainerOfType: ()=>Uh,
    linkContentToContainer: ()=>Ds,
    streamAllContents: ()=>ut,
    streamAst: ()=>Je,
    streamContents: ()=>di,
    streamReferences: ()=>pn
});
function Ds(r) {
    for (let [e, t] of Object.entries(r))e.startsWith("$") || (Array.isArray(t) ? t.forEach((n, i)=>{
        le(n) && (n.$container = r, n.$containerProperty = e, n.$containerIndex = i);
    }) : le(t) && (t.$container = r, t.$containerProperty = e));
}
m$1(Ds, "linkContentToContainer");
function ir(r, e) {
    let t = r;
    for(; t;){
        if (e(t)) return t;
        t = t.$container;
    }
}
m$1(ir, "getContainerOfType");
function Uh(r, e) {
    let t = r;
    for(; t;){
        if (e(t)) return true;
        t = t.$container;
    }
    return false;
}
m$1(Uh, "hasContainerOfType");
function _e(r) {
    let t = ui(r).$document;
    if (!t) throw new Error("AST node has no document.");
    return t;
}
m$1(_e, "getDocument");
function ui(r) {
    for(; r.$container;)r = r.$container;
    return r;
}
m$1(ui, "findRootNode");
function di(r, e) {
    if (!r) throw new Error("Node must be an AstNode.");
    let t = e?.range;
    return new je(()=>({
            keys: /*#__PURE__*/ Object.keys(r),
            keyIndex: 0,
            arrayIndex: 0
        }), (n)=>{
        for(; n.keyIndex < n.keys.length;){
            let i = n.keys[n.keyIndex];
            if (!i.startsWith("$")) {
                let s = r[i];
                if (le(s)) {
                    if (n.keyIndex++, Oo(s, t)) return {
                        done: false,
                        value: s
                    };
                } else if (Array.isArray(s)) {
                    for(; n.arrayIndex < s.length;){
                        let o = n.arrayIndex++, l = s[o];
                        if (le(l) && Oo(l, t)) return {
                            done: false,
                            value: l
                        };
                    }
                    n.arrayIndex = 0;
                }
            }
            n.keyIndex++;
        }
        return Se;
    });
}
m$1(di, "streamContents");
function ut(r, e) {
    if (!r) throw new Error("Root node must be an AstNode.");
    return new ot(r, (t)=>di(t, e));
}
m$1(ut, "streamAllContents");
function Je(r, e) {
    if (r) {
        if (e?.range && !Oo(r, e.range)) return new ot(r, ()=>[]);
    } else throw new Error("Root node must be an AstNode.");
    return new ot(r, (t)=>di(t, e), {
        includeRoot: true
    });
}
m$1(Je, "streamAst");
function Oo(r, e) {
    var t;
    if (!e) return true;
    let n = (t = r.$cstNode) === null || t === void 0 ? void 0 : t.range;
    return n ? ho(n, e) : false;
}
m$1(Oo, "isAstNodeInRange");
function pn(r) {
    return new je(()=>({
            keys: /*#__PURE__*/ Object.keys(r),
            keyIndex: 0,
            arrayIndex: 0
        }), (e)=>{
        for(; e.keyIndex < e.keys.length;){
            let t = e.keys[e.keyIndex];
            if (!t.startsWith("$")) {
                let n = r[t];
                if (Ee(n)) return e.keyIndex++, {
                    done: false,
                    value: {
                        reference: n,
                        container: r,
                        property: t
                    }
                };
                if (Array.isArray(n)) {
                    for(; e.arrayIndex < n.length;){
                        let i = e.arrayIndex++, s = n[i];
                        if (Ee(s)) return {
                            done: false,
                            value: {
                                reference: s,
                                container: r,
                                property: t,
                                index: i
                            }
                        };
                    }
                    e.arrayIndex = 0;
                }
            }
            e.keyIndex++;
        }
        return Se;
    });
}
m$1(pn, "streamReferences");
function Gh(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e(r).parseResult.value;
    let t = [];
    return Je(e).forEach((n)=>{
        pn(n).forEach((i)=>{
            i.reference.ref === r && t.push(i.reference);
        });
    }), j(t);
}
m$1(Gh, "findLocalReferences");
function bo(r, e) {
    let t = /*#__PURE__*/ r.getTypeMetaData(e.$type), n = e;
    for (let i of t.properties)i.defaultValue !== void 0 && n[i.name] === void 0 && (n[i.name] = /*#__PURE__*/ Xc(i.defaultValue));
}
m$1(bo, "assignMandatoryProperties");
function Xc(r) {
    return Array.isArray(r) ? [
        .../*#__PURE__*/ r.map(Xc)
    ] : r;
}
m$1(Xc, "copyDefaultValue");
function Po(r, e) {
    let t = {
        $type: r.$type
    };
    for (let [n, i] of Object.entries(r))if (!n.startsWith("$")) if (le(i)) t[n] = /*#__PURE__*/ Po(i, e);
    else if (Ee(i)) t[n] = /*#__PURE__*/ e(t, n, i.$refNode, i.$refText);
    else if (Array.isArray(i)) {
        let s = [];
        for (let o of i)le(o) ? s.push(/*#__PURE__*/ Po(o, e)) : Ee(o) ? s.push(/*#__PURE__*/ e(t, n, o.$refNode, o.$refText)) : s.push(o);
        t[n] = s;
    } else t[n] = i;
    return Ds(t), t;
}
m$1(Po, "copyAstNode");
var Bs = {};
o(Bs, {
    NEWLINE_REGEXP: ()=>Uo,
    escapeRegExp: ()=>lr,
    getCaseInsensitivePattern: ()=>Bo,
    getTerminalParts: ()=>Kh,
    isMultilineComment: ()=>Go,
    isWhitespace: ()=>gn,
    partialMatches: ()=>Wo,
    partialRegExp: ()=>Qc,
    whitespaceCharacters: ()=>Jc
});
function _(r) {
    return r.charCodeAt(0);
}
m$1(_, "cc");
function Us(r, e) {
    Array.isArray(r) ? r.forEach(function(t) {
        e.push(t);
    }) : e.push(r);
}
m$1(Us, "insertToSet");
function mn(r, e) {
    if (r[e] === true) throw "duplicate flag " + e;
    r[e];
    r[e] = true;
}
m$1(mn, "addFlag");
function sr(r) {
    if (r === void 0) throw Error("Internal Error - Should never get here!");
    return true;
}
m$1(sr, "ASSERT_EXISTS");
function fi() {
    throw Error("Internal Error - Should never get here!");
}
m$1(fi, "ASSERT_NEVER_REACH_HERE");
function Mo(r) {
    return r.type === "Character";
}
m$1(Mo, "isCharacter");
var hi = [];
for(let r = /*#__PURE__*/ _("0"); r <= _("9"); r++)hi.push(r);
var pi = /*#__PURE__*/ [
    /*#__PURE__*/ _("_")
].concat(hi);
for(let r = /*#__PURE__*/ _("a"); r <= _("z"); r++)pi.push(r);
for(let r = /*#__PURE__*/ _("A"); r <= _("Z"); r++)pi.push(r);
var Do = [
    /*#__PURE__*/ _(" "),
    /*#__PURE__*/ _("\f"),
    /*#__PURE__*/ _(`
`),
    /*#__PURE__*/ _("\r"),
    /*#__PURE__*/ _("	"),
    /*#__PURE__*/ _("\v"),
    /*#__PURE__*/ _("	"),
    /*#__PURE__*/ _("\xA0"),
    /*#__PURE__*/ _("\u1680"),
    /*#__PURE__*/ _("\u2000"),
    /*#__PURE__*/ _("\u2001"),
    /*#__PURE__*/ _("\u2002"),
    /*#__PURE__*/ _("\u2003"),
    /*#__PURE__*/ _("\u2004"),
    /*#__PURE__*/ _("\u2005"),
    /*#__PURE__*/ _("\u2006"),
    /*#__PURE__*/ _("\u2007"),
    /*#__PURE__*/ _("\u2008"),
    /*#__PURE__*/ _("\u2009"),
    /*#__PURE__*/ _("\u200A"),
    /*#__PURE__*/ _("\u2028"),
    /*#__PURE__*/ _("\u2029"),
    /*#__PURE__*/ _("\u202F"),
    /*#__PURE__*/ _("\u205F"),
    /*#__PURE__*/ _("\u3000"),
    /*#__PURE__*/ _("\uFEFF")
];
var Bh = /[0-9a-fA-F]/, Gs = /[0-9]/, Wh = /[1-9]/, ar = class {
    static #_ = m$1(this, "RegExpParser");
    constructor(){
        this.idx = 0, this.input = "", this.groupIdx = 0;
    }
    saveState() {
        return {
            idx: this.idx,
            input: this.input,
            groupIdx: this.groupIdx
        };
    }
    restoreState(e) {
        this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
    }
    pattern(e) {
        this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
        let t = /*#__PURE__*/ this.disjunction();
        this.consumeChar("/");
        let n = {
            type: "Flags",
            loc: {
                begin: this.idx,
                end: e.length
            },
            global: false,
            ignoreCase: false,
            multiLine: false,
            unicode: false,
            sticky: false
        };
        for(; this.isRegExpFlag();)switch(this.popChar()){
            case "g":
                mn(n, "global");
                break;
            case "i":
                mn(n, "ignoreCase");
                break;
            case "m":
                mn(n, "multiLine");
                break;
            case "u":
                mn(n, "unicode");
                break;
            case "y":
                mn(n, "sticky");
                break;
        }
        if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));
        return {
            type: "Pattern",
            flags: n,
            value: t,
            loc: /*#__PURE__*/ this.loc(0)
        };
    }
    disjunction() {
        let e = [], t = this.idx;
        for(e.push(/*#__PURE__*/ this.alternative()); this.peekChar() === "|";)this.consumeChar("|"), e.push(/*#__PURE__*/ this.alternative());
        return {
            type: "Disjunction",
            value: e,
            loc: /*#__PURE__*/ this.loc(t)
        };
    }
    alternative() {
        let e = [], t = this.idx;
        for(; this.isTerm();)e.push(/*#__PURE__*/ this.term());
        return {
            type: "Alternative",
            value: e,
            loc: /*#__PURE__*/ this.loc(t)
        };
    }
    term() {
        return this.isAssertion() ? this.assertion() : this.atom();
    }
    assertion() {
        let e = this.idx;
        switch(this.popChar()){
            case "^":
                return {
                    type: "StartAnchor",
                    loc: /*#__PURE__*/ this.loc(e)
                };
            case "$":
                return {
                    type: "EndAnchor",
                    loc: /*#__PURE__*/ this.loc(e)
                };
            case "\\":
                switch(this.popChar()){
                    case "b":
                        return {
                            type: "WordBoundary",
                            loc: /*#__PURE__*/ this.loc(e)
                        };
                    case "B":
                        return {
                            type: "NonWordBoundary",
                            loc: /*#__PURE__*/ this.loc(e)
                        };
                }
                throw Error("Invalid Assertion Escape");
            case "(":
                this.consumeChar("?");
                let t;
                switch(this.popChar()){
                    case "=":
                        t = "Lookahead";
                        break;
                    case "!":
                        t = "NegativeLookahead";
                        break;
                }
                sr(t);
                let n = /*#__PURE__*/ this.disjunction();
                return this.consumeChar(")"), {
                    type: t,
                    value: n,
                    loc: /*#__PURE__*/ this.loc(e)
                };
        }
        return fi();
    }
    quantifier() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        let t, n = this.idx;
        switch(this.popChar()){
            case "*":
                t = {
                    atLeast: 0,
                    atMost: 1 / 0
                };
                break;
            case "+":
                t = {
                    atLeast: 1,
                    atMost: 1 / 0
                };
                break;
            case "?":
                t = {
                    atLeast: 0,
                    atMost: 1
                };
                break;
            case "{":
                let i = /*#__PURE__*/ this.integerIncludingZero();
                switch(this.popChar()){
                    case "}":
                        t = {
                            atLeast: i,
                            atMost: i
                        };
                        break;
                    case ",":
                        let s;
                        this.isDigit() ? (s = /*#__PURE__*/ this.integerIncludingZero(), t = {
                            atLeast: i,
                            atMost: s
                        }) : t = {
                            atLeast: i,
                            atMost: 1 / 0
                        }, this.consumeChar("}");
                        break;
                }
                if (e === true && t === void 0) return;
                sr(t);
                break;
        }
        if (!(e === true && t === void 0) && sr(t)) return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = false) : t.greedy = true, t.type = "Quantifier", t.loc = /*#__PURE__*/ this.loc(n), t;
    }
    atom() {
        let e, t = this.idx;
        switch(this.peekChar()){
            case ".":
                e = /*#__PURE__*/ this.dotAll();
                break;
            case "\\":
                e = /*#__PURE__*/ this.atomEscape();
                break;
            case "[":
                e = /*#__PURE__*/ this.characterClass();
                break;
            case "(":
                e = /*#__PURE__*/ this.group();
                break;
        }
        return e === void 0 && this.isPatternCharacter() && (e = /*#__PURE__*/ this.patternCharacter()), sr(e) ? (e.loc = /*#__PURE__*/ this.loc(t), this.isQuantifier() && (e.quantifier = /*#__PURE__*/ this.quantifier()), e) : fi();
    }
    dotAll() {
        return this.consumeChar("."), {
            type: "Set",
            complement: true,
            value: [
                /*#__PURE__*/ _(`
`),
                /*#__PURE__*/ _("\r"),
                /*#__PURE__*/ _("\u2028"),
                /*#__PURE__*/ _("\u2029")
            ]
        };
    }
    atomEscape() {
        switch(this.consumeChar("\\"), this.peekChar()){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return this.decimalEscapeAtom();
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
                return this.characterClassEscape();
            case "f":
            case "n":
            case "r":
            case "t":
            case "v":
                return this.controlEscapeAtom();
            case "c":
                return this.controlLetterEscapeAtom();
            case "0":
                return this.nulCharacterAtom();
            case "x":
                return this.hexEscapeSequenceAtom();
            case "u":
                return this.regExpUnicodeEscapeSequenceAtom();
            default:
                return this.identityEscapeAtom();
        }
    }
    decimalEscapeAtom() {
        return {
            type: "GroupBackReference",
            value: /*#__PURE__*/ this.positiveInteger()
        };
    }
    characterClassEscape() {
        let e, t = false;
        switch(this.popChar()){
            case "d":
                e = hi;
                break;
            case "D":
                e = hi, t = true;
                break;
            case "s":
                e = Do;
                break;
            case "S":
                e = Do, t = true;
                break;
            case "w":
                e = pi;
                break;
            case "W":
                e = pi, t = true;
                break;
        }
        return sr(e) ? {
            type: "Set",
            value: e,
            complement: t
        } : fi();
    }
    controlEscapeAtom() {
        let e;
        switch(this.popChar()){
            case "f":
                e = /*#__PURE__*/ _("\f");
                break;
            case "n":
                e = /*#__PURE__*/ _(`
`);
                break;
            case "r":
                e = /*#__PURE__*/ _("\r");
                break;
            case "t":
                e = /*#__PURE__*/ _("	");
                break;
            case "v":
                e = /*#__PURE__*/ _("\v");
                break;
        }
        return sr(e) ? {
            type: "Character",
            value: e
        } : fi();
    }
    controlLetterEscapeAtom() {
        this.consumeChar("c");
        let e = /*#__PURE__*/ this.popChar();
        if (/[a-zA-Z]/.test(e) === false) throw Error("Invalid ");
        return {
            type: "Character",
            value: e.toUpperCase().charCodeAt(0) - 64
        };
    }
    nulCharacterAtom() {
        return this.consumeChar("0"), {
            type: "Character",
            value: /*#__PURE__*/ _("\0")
        };
    }
    hexEscapeSequenceAtom() {
        return this.consumeChar("x"), this.parseHexDigits(2);
    }
    regExpUnicodeEscapeSequenceAtom() {
        return this.consumeChar("u"), this.parseHexDigits(4);
    }
    identityEscapeAtom() {
        let e = /*#__PURE__*/ this.popChar();
        return {
            type: "Character",
            value: /*#__PURE__*/ _(e)
        };
    }
    classPatternCharacterAtom() {
        switch(this.peekChar()){
            case `
`:
            case "\r":
            case "\u2028":
            case "\u2029":
            case "\\":
            case "]":
                throw Error("TBD");
            default:
                let e = /*#__PURE__*/ this.popChar();
                return {
                    type: "Character",
                    value: /*#__PURE__*/ _(e)
                };
        }
    }
    characterClass() {
        let e = [], t = false;
        for(this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = true); this.isClassAtom();){
            let n = /*#__PURE__*/ this.classAtom();
            n.type === "Character";
            if (Mo(n) && this.isRangeDash()) {
                this.consumeChar("-");
                let s = /*#__PURE__*/ this.classAtom();
                s.type === "Character";
                if (Mo(s)) {
                    if (s.value < n.value) throw Error("Range out of order in character class");
                    e.push({
                        from: n.value,
                        to: s.value
                    });
                } else Us(n.value, e), e.push(/*#__PURE__*/ _("-")), Us(s.value, e);
            } else Us(n.value, e);
        }
        return this.consumeChar("]"), {
            type: "Set",
            complement: t,
            value: e
        };
    }
    classAtom() {
        switch(this.peekChar()){
            case "]":
            case `
`:
            case "\r":
            case "\u2028":
            case "\u2029":
                throw Error("TBD");
            case "\\":
                return this.classEscape();
            default:
                return this.classPatternCharacterAtom();
        }
    }
    classEscape() {
        switch(this.consumeChar("\\"), this.peekChar()){
            case "b":
                return this.consumeChar("b"), {
                    type: "Character",
                    value: /*#__PURE__*/ _("\b")
                };
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
                return this.characterClassEscape();
            case "f":
            case "n":
            case "r":
            case "t":
            case "v":
                return this.controlEscapeAtom();
            case "c":
                return this.controlLetterEscapeAtom();
            case "0":
                return this.nulCharacterAtom();
            case "x":
                return this.hexEscapeSequenceAtom();
            case "u":
                return this.regExpUnicodeEscapeSequenceAtom();
            default:
                return this.identityEscapeAtom();
        }
    }
    group() {
        let e = true;
        switch(this.consumeChar("("), this.peekChar(0)){
            case "?":
                this.consumeChar("?"), this.consumeChar(":"), e = false;
                break;
            default:
                this.groupIdx++;
                break;
        }
        let t = /*#__PURE__*/ this.disjunction();
        this.consumeChar(")");
        let n = {
            type: "Group",
            capturing: e,
            value: t
        };
        return e && (n.idx = this.groupIdx), n;
    }
    positiveInteger() {
        let e = /*#__PURE__*/ this.popChar();
        if (Wh.test(e) === false) throw Error("Expecting a positive integer");
        for(; Gs.test(/*#__PURE__*/ this.peekChar(0));)e += /*#__PURE__*/ this.popChar();
        return parseInt(e, 10);
    }
    integerIncludingZero() {
        let e = /*#__PURE__*/ this.popChar();
        if (Gs.test(e) === false) throw Error("Expecting an integer");
        for(; Gs.test(/*#__PURE__*/ this.peekChar(0));)e += /*#__PURE__*/ this.popChar();
        return parseInt(e, 10);
    }
    patternCharacter() {
        let e = /*#__PURE__*/ this.popChar();
        switch(e){
            case `
`:
            case "\r":
            case "\u2028":
            case "\u2029":
            case "^":
            case "$":
            case "\\":
            case ".":
            case "*":
            case "+":
            case "?":
            case "(":
            case ")":
            case "[":
            case "|":
                throw Error("TBD");
            default:
                return {
                    type: "Character",
                    value: /*#__PURE__*/ _(e)
                };
        }
    }
    isRegExpFlag() {
        switch(this.peekChar(0)){
            case "g":
            case "i":
            case "m":
            case "u":
            case "y":
                return true;
            default:
                return false;
        }
    }
    isRangeDash() {
        return this.peekChar() === "-" && this.isClassAtom(1);
    }
    isDigit() {
        return Gs.test(/*#__PURE__*/ this.peekChar(0));
    }
    isClassAtom() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        switch(this.peekChar(e)){
            case "]":
            case `
`:
            case "\r":
            case "\u2028":
            case "\u2029":
                return false;
            default:
                return true;
        }
    }
    isTerm() {
        return this.isAtom() || this.isAssertion();
    }
    isAtom() {
        if (this.isPatternCharacter()) return true;
        switch(this.peekChar(0)){
            case ".":
            case "\\":
            case "[":
            case "(":
                return true;
            default:
                return false;
        }
    }
    isAssertion() {
        switch(this.peekChar(0)){
            case "^":
            case "$":
                return true;
            case "\\":
                switch(this.peekChar(1)){
                    case "b":
                    case "B":
                        return true;
                    default:
                        return false;
                }
            case "(":
                return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
            default:
                return false;
        }
    }
    isQuantifier() {
        let e = /*#__PURE__*/ this.saveState();
        try {
            return this.quantifier(!0) !== void 0;
        } catch  {
            return false;
        } finally{
            this.restoreState(e);
        }
    }
    isPatternCharacter() {
        switch(this.peekChar()){
            case "^":
            case "$":
            case "\\":
            case ".":
            case "*":
            case "+":
            case "?":
            case "(":
            case ")":
            case "[":
            case "|":
            case "/":
            case `
`:
            case "\r":
            case "\u2028":
            case "\u2029":
                return false;
            default:
                return true;
        }
    }
    parseHexDigits(e) {
        let t = "";
        for(let i = 0; i < e; i++){
            let s = /*#__PURE__*/ this.popChar();
            if (Bh.test(s) === false) throw Error("Expecting a HexDecimal digits");
            t += s;
        }
        return {
            type: "Character",
            value: /*#__PURE__*/ parseInt(t, 16)
        };
    }
    peekChar() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return this.input[this.idx + e];
    }
    popChar() {
        let e = /*#__PURE__*/ this.peekChar(0);
        return this.consumeChar(void 0), e;
    }
    consumeChar(e) {
        if (e !== void 0 && this.input[this.idx] !== e) throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
        if (this.idx >= this.input.length) throw Error("Unexpected end of input");
        this.idx++;
    }
    loc(e) {
        return {
            begin: e,
            end: this.idx
        };
    }
};
var dt = class {
    static #_ = m$1(this, "BaseRegExpVisitor");
    visitChildren(e) {
        for(let t in e){
            let n = e[t];
            e.hasOwnProperty(t) && (n.type !== void 0 ? this.visit(n) : Array.isArray(n) && n.forEach((i)=>{
                this.visit(i);
            }, this));
        }
    }
    visit(e) {
        switch(e.type){
            case "Pattern":
                this.visitPattern(e);
                break;
            case "Flags":
                this.visitFlags(e);
                break;
            case "Disjunction":
                this.visitDisjunction(e);
                break;
            case "Alternative":
                this.visitAlternative(e);
                break;
            case "StartAnchor":
                this.visitStartAnchor(e);
                break;
            case "EndAnchor":
                this.visitEndAnchor(e);
                break;
            case "WordBoundary":
                this.visitWordBoundary(e);
                break;
            case "NonWordBoundary":
                this.visitNonWordBoundary(e);
                break;
            case "Lookahead":
                this.visitLookahead(e);
                break;
            case "NegativeLookahead":
                this.visitNegativeLookahead(e);
                break;
            case "Character":
                this.visitCharacter(e);
                break;
            case "Set":
                this.visitSet(e);
                break;
            case "Group":
                this.visitGroup(e);
                break;
            case "GroupBackReference":
                this.visitGroupBackReference(e);
                break;
            case "Quantifier":
                this.visitQuantifier(e);
                break;
        }
        this.visitChildren(e);
    }
    visitPattern(e) {}
    visitFlags(e) {}
    visitDisjunction(e) {}
    visitAlternative(e) {}
    visitStartAnchor(e) {}
    visitEndAnchor(e) {}
    visitWordBoundary(e) {}
    visitNonWordBoundary(e) {}
    visitLookahead(e) {}
    visitNegativeLookahead(e) {}
    visitCharacter(e) {}
    visitSet(e) {}
    visitGroup(e) {}
    visitGroupBackReference(e) {}
    visitQuantifier(e) {}
};
var Uo = /\r?\n/gm, Yc = new ar, Fo = class extends dt {
    static #_ = m$1(this, "TerminalRegExpVisitor");
    constructor(){
        super(...arguments), this.isStarting = true, this.endRegexpStack = [], this.multiline = false;
    }
    get endRegex() {
        return this.endRegexpStack.join("");
    }
    reset(e) {
        this.multiline = false, this.regex = e, this.startRegexp = "", this.isStarting = true, this.endRegexpStack = [];
    }
    visitGroup(e) {
        e.quantifier && (this.isStarting = false, this.endRegexpStack = []);
    }
    visitCharacter(e) {
        let t = /*#__PURE__*/ String.fromCharCode(e.value);
        if (!this.multiline && t === `
` && (this.multiline = true), e.quantifier) this.isStarting = false, this.endRegexpStack = [];
        else {
            let n = /*#__PURE__*/ lr(t);
            this.endRegexpStack.push(n), this.isStarting && (this.startRegexp += n);
        }
    }
    visitSet(e) {
        if (!this.multiline) {
            let t = /*#__PURE__*/ this.regex.substring(e.loc.begin, e.loc.end), n = new RegExp(t);
            this.multiline = !!`
`.match(n);
        }
        if (e.quantifier) this.isStarting = false, this.endRegexpStack = [];
        else {
            let t = /*#__PURE__*/ this.regex.substring(e.loc.begin, e.loc.end);
            this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
        }
    }
    visitChildren(e) {
        e.type === "Group" && e.quantifier || super.visitChildren(e);
    }
}, or = new Fo;
function Kh(r) {
    try {
        typeof r != "string" && (r = r.source), r = `/${r}/`;
        let e = /*#__PURE__*/ Yc.pattern(r), t = [];
        for (let n of e.value.value)or.reset(r), or.visit(n), t.push({
            start: or.startRegexp,
            end: or.endRegex
        });
        return t;
    } catch  {
        return [];
    }
}
m$1(Kh, "getTerminalParts");
function Go(r) {
    try {
        return typeof r == "string" && (r = new RegExp(r)), r = /*#__PURE__*/ r.toString(), or.reset(r), or.visit(/*#__PURE__*/ Yc.pattern(r)), or.multiline;
    } catch  {
        return false;
    }
}
m$1(Go, "isMultilineComment");
var Jc = /*#__PURE__*/ `\f
\r	\v \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`.split("");
function gn(r) {
    let e = typeof r == "string" ? new RegExp(r) : r;
    return Jc.some((t)=>e.test(t));
}
m$1(gn, "isWhitespace");
function lr(r) {
    return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
m$1(lr, "escapeRegExp");
function Bo(r) {
    return Array.prototype.map.call(r, (e)=>/\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : lr(e)).join("");
}
m$1(Bo, "getCaseInsensitivePattern");
function Wo(r, e) {
    let t = /*#__PURE__*/ Qc(r), n = /*#__PURE__*/ e.match(t);
    return !!n && n[0].length > 0;
}
m$1(Wo, "partialMatches");
function Qc(r) {
    typeof r == "string" && (r = new RegExp(r));
    let e = r, t = r.source, n = 0;
    function i() {
        let s = "", o;
        function l(u) {
            s += /*#__PURE__*/ t.substr(n, u), n += u;
        }
        m$1(l, "appendRaw");
        function c(u) {
            s += "(?:" + t.substr(n, u) + "|$)", n += u;
        }
        for(m$1(c, "appendOptional"); n < t.length;)switch(t[n]){
            case "\\":
                switch(t[n + 1]){
                    case "c":
                        c(3);
                        break;
                    case "x":
                        c(4);
                        break;
                    case "u":
                        e.unicode ? t[n + 2] === "{" ? c(t.indexOf("}", n) - n + 1) : c(6) : c(2);
                        break;
                    case "p":
                    case "P":
                        e.unicode ? c(t.indexOf("}", n) - n + 1) : c(2);
                        break;
                    case "k":
                        c(t.indexOf(">", n) - n + 1);
                        break;
                    default:
                        c(2);
                        break;
                }
                break;
            case "[":
                o = /\[(?:\\.|.)*?\]/g, o.lastIndex = n, o = o.exec(t) || [], c(o[0].length);
                break;
            case "|":
            case "^":
            case "$":
            case "*":
            case "+":
            case "?":
                l(1);
                break;
            case "{":
                o = /\{\d+,?\d*\}/g, o.lastIndex = n, o = /*#__PURE__*/ o.exec(t), o ? l(o[0].length) : c(1);
                break;
            case "(":
                if (t[n + 1] === "?") switch(t[n + 2]){
                    case ":":
                        s += "(?:", n += 3, s += i() + "|$)";
                        break;
                    case "=":
                        s += "(?=", n += 3, s += i() + ")";
                        break;
                    case "!":
                        o = n, n += 3, i(), s += /*#__PURE__*/ t.substr(o, n - o);
                        break;
                    case "<":
                        switch(t[n + 3]){
                            case "=":
                            case "!":
                                o = n, n += 4, i(), s += /*#__PURE__*/ t.substr(o, n - o);
                                break;
                            default:
                                l(t.indexOf(">", n) - n + 1), s += i() + "|$)";
                                break;
                        }
                        break;
                }
                else l(1), s += i() + "|$)";
                break;
            case ")":
                return ++n, s;
            default:
                c(1);
                break;
        }
        return s;
    }
    return m$1(i, "process"), new RegExp(i(), r.flags);
}
m$1(Qc, "partialRegExp");
function Zc(r) {
    return r.rules.find((e)=>$e(e) && e.entry);
}
m$1(Zc, "getEntryRule");
function eu(r) {
    return r.rules.filter((e)=>He(e) && e.hidden);
}
m$1(eu, "getHiddenRules");
function mi(r, e) {
    let t = new Set, n = /*#__PURE__*/ Zc(r);
    if (!n) return new Set(r.rules);
    let i = /*#__PURE__*/ [
        n
    ].concat(/*#__PURE__*/ eu(r));
    for (let o of i)tu(o, t, e);
    let s = new Set;
    for (let o of r.rules)(t.has(o.name) || He(o) && o.hidden) && s.add(o);
    return s;
}
m$1(mi, "getAllReachableRules");
function tu(r, e, t) {
    e.add(r.name), ut(r).forEach((n)=>{
        if (nt(n) || t && bs(n)) {
            let i = n.rule.ref;
            i && !e.has(i.name) && tu(i, e, t);
        }
    });
}
m$1(tu, "ruleDfs");
function jo(r) {
    if (r.terminal) return r.terminal;
    if (r.type.ref) {
        let e = /*#__PURE__*/ Ws(r.type.ref);
        return e?.terminal;
    }
}
m$1(jo, "getCrossReferenceTerminal");
function Ho(r) {
    return r.hidden && !gn(/*#__PURE__*/ Tn(r));
}
m$1(Ho, "isCommentTerminal");
function zo(r, e) {
    return !r || !e ? [] : qo(r, e, r.astNode, true);
}
m$1(zo, "findNodesForProperty");
function gi(r, e, t) {
    if (!r || !e) return;
    let n = /*#__PURE__*/ qo(r, e, r.astNode, true);
    if (n.length !== 0) return t !== void 0 ? t = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.min(t, n.length - 1)) : t = 0, n[t];
}
m$1(gi, "findNodeForProperty");
function qo(r, e, t, n) {
    if (!n) {
        let i = /*#__PURE__*/ ir(r.grammarSource, rt);
        if (i && i.feature === e) return [
            r
        ];
    }
    return tt(r) && r.astNode === t ? r.content.flatMap((i)=>qo(i, e, t, false)) : [];
}
m$1(qo, "findNodesForPropertyInternal");
function Vh(r, e) {
    return r ? Yo(r, e, r?.astNode) : [];
}
m$1(Vh, "findNodesForKeyword");
function Xo(r, e, t) {
    if (!r) return;
    let n = /*#__PURE__*/ Yo(r, e, r?.astNode);
    if (n.length !== 0) return t !== void 0 ? t = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.min(t, n.length - 1)) : t = 0, n[t];
}
m$1(Xo, "findNodeForKeyword");
function Yo(r, e, t) {
    if (r.astNode !== t) return [];
    if (Ye(r.grammarSource) && r.grammarSource.value === e) return [
        r
    ];
    let n = /*#__PURE__*/ Zt(r).iterator(), i, s = [];
    do if (i = /*#__PURE__*/ n.next(), !i.done) {
        let o = i.value;
        o.astNode === t ? Ye(o.grammarSource) && o.grammarSource.value === e && s.push(o) : n.prune();
    }
    while (!i.done);
    return s;
}
m$1(Yo, "findNodesForKeywordInternal");
function Jo(r) {
    var e;
    let t = r.astNode;
    for(; t === ((e = r.container) === null || e === void 0 ? void 0 : e.astNode);){
        let n = /*#__PURE__*/ ir(r.grammarSource, rt);
        if (n) return n;
        r = r.container;
    }
}
m$1(Jo, "findAssignment");
function Ws(r) {
    let e = r;
    return ws(e) && (kt(e.$container) ? e = e.$container.$container : $e(e.$container) ? e = e.$container : ct(e.$container)), ru(r, e, new Map);
}
m$1(Ws, "findNameAssignment");
function ru(r, e, t) {
    var n;
    function i(s, o) {
        let l;
        return ir(s, rt) || (l = /*#__PURE__*/ ru(o, o, t)), t.set(r, l), l;
    }
    if (m$1(i, "go"), t.has(r)) return t.get(r);
    t.set(r, void 0);
    for (let s of ut(e)){
        if (rt(s) && s.feature.toLowerCase() === "name") return t.set(r, s), s;
        if (nt(s) && $e(s.rule.ref)) return i(s, s.rule.ref);
        if (Os(s) && !((n = s.typeRef) === null || n === void 0) && n.ref) return i(s, s.typeRef.ref);
    }
}
m$1(ru, "findNameAssignmentInternal");
function nu(r) {
    let e = r.$container;
    if (Gt(e)) {
        let t = e.elements, n = /*#__PURE__*/ t.indexOf(r);
        for(let i = n - 1; i >= 0; i--){
            let s = t[i];
            if (kt(s)) return s;
            {
                let o = /*#__PURE__*/ ut(t[i]).find(kt);
                if (o) return o;
            }
        }
    }
    if (oi(e)) return nu(e);
}
m$1(nu, "getActionAtElement");
function jh(r, e) {
    return r === "?" || r === "*" || Gt(e) && !!e.guardCondition;
}
m$1(jh, "isOptionalCardinality");
function Hh(r) {
    return r === "*" || r === "+";
}
m$1(Hh, "isArrayCardinality");
function zh(r) {
    return r === "+=";
}
m$1(zh, "isArrayOperator");
function yi(r) {
    return iu(r, new Set);
}
m$1(yi, "isDataTypeRule");
function iu(r, e) {
    if (e.has(r)) return true;
    e.add(r);
    for (let t of ut(r))if (nt(t)) {
        if (!t.rule.ref || $e(t.rule.ref) && !iu(t.rule.ref, e)) return false;
    } else {
        if (rt(t)) return false;
        if (kt(t)) return false;
    }
    return !!r.definition;
}
m$1(iu, "isDataTypeRuleInternal");
function qh(r) {
    return Vo(r.type, new Set);
}
m$1(qh, "isDataType");
function Vo(r, e) {
    if (e.has(r)) return true;
    if (e.add(r), go(r)) return false;
    if (Ao(r)) return false;
    if (ko(r)) return r.types.every((t)=>Vo(t, e));
    if (Os(r)) {
        if (r.primitiveType !== void 0) return true;
        if (r.stringType !== void 0) return true;
        if (r.typeRef !== void 0) {
            let t = r.typeRef.ref;
            return li(t) ? Vo(t.type, e) : false;
        } else return false;
    } else return false;
}
m$1(Vo, "isDataTypeInternal");
function yn(r) {
    if (r.inferredType) return r.inferredType.name;
    if (r.dataType) return r.dataType;
    if (r.returnType) {
        let e = r.returnType.ref;
        if (e) {
            if ($e(e)) return e.name;
            if (Ls(e) || li(e)) return e.name;
        }
    }
}
m$1(yn, "getExplicitRuleType");
function Ti(r) {
    var e;
    if ($e(r)) return yi(r) ? r.name : (e = /*#__PURE__*/ yn(r)) !== null && e !== void 0 ? e : r.name;
    if (Ls(r) || li(r) || vo(r)) return r.name;
    if (kt(r)) {
        let t = /*#__PURE__*/ su(r);
        if (t) return t;
    } else if (ws(r)) return r.name;
    throw new Error("Cannot get name of Unknown Type");
}
m$1(Ti, "getTypeName");
function su(r) {
    var e;
    if (r.inferredType) return r.inferredType.name;
    if (!((e = r.type) === null || e === void 0) && e.ref) return Ti(r.type.ref);
}
m$1(su, "getActionType");
function Xh(r) {
    var e, t, n;
    return He(r) ? (t = (e = r.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : yi(r) ? r.name : (n = /*#__PURE__*/ yn(r)) !== null && n !== void 0 ? n : r.name;
}
m$1(Xh, "getRuleTypeName");
function Qo(r) {
    var e, t, n;
    return He(r) ? (t = (e = r.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : (n = /*#__PURE__*/ yn(r)) !== null && n !== void 0 ? n : r.name;
}
m$1(Qo, "getRuleType");
function Tn(r) {
    let e = {
        s: false,
        i: false,
        u: false
    }, t = /*#__PURE__*/ xn(r.definition, e), n = /*#__PURE__*/ Object.entries(e).filter((param)=>{
        let [, i] = param;
        return i;
    }).map((param)=>{
        let [i] = param;
        return i;
    }).join("");
    return new RegExp(t, n);
}
m$1(Tn, "terminalRegex");
var Zo = /[\s\S]/.source;
function xn(r, e) {
    if ($o(r)) return Yh(r);
    if (_o(r)) return Jh(r);
    if (Io(r)) return ep(r);
    if (bs(r)) {
        let t = r.rule.ref;
        if (!t) throw new Error("Missing rule reference.");
        return It(/*#__PURE__*/ xn(t.definition), {
            cardinality: r.cardinality,
            lookahead: r.lookahead
        });
    } else {
        if (Co(r)) return Zh(r);
        if (wo(r)) return Qh(r);
        if (So(r)) {
            let t = /*#__PURE__*/ r.regex.lastIndexOf("/"), n = /*#__PURE__*/ r.regex.substring(1, t), i = /*#__PURE__*/ r.regex.substring(t + 1);
            return e && (e.i = /*#__PURE__*/ i.includes("i"), e.s = /*#__PURE__*/ i.includes("s"), e.u = /*#__PURE__*/ i.includes("u")), It(n, {
                cardinality: r.cardinality,
                lookahead: r.lookahead,
                wrap: false
            });
        } else {
            if (Lo(r)) return It(Zo, {
                cardinality: r.cardinality,
                lookahead: r.lookahead
            });
            throw new Error(`Invalid terminal element: ${r?.$type}`);
        }
    }
}
m$1(xn, "abstractElementToRegex");
function Yh(r) {
    return It(/*#__PURE__*/ r.elements.map((e)=>xn(e)).join("|"), {
        cardinality: r.cardinality,
        lookahead: r.lookahead
    });
}
m$1(Yh, "terminalAlternativesToRegex");
function Jh(r) {
    return It(/*#__PURE__*/ r.elements.map((e)=>xn(e)).join(""), {
        cardinality: r.cardinality,
        lookahead: r.lookahead
    });
}
m$1(Jh, "terminalGroupToRegex");
function Qh(r) {
    return It(`${Zo}*?${xn(r.terminal)}`, {
        cardinality: r.cardinality,
        lookahead: r.lookahead
    });
}
m$1(Qh, "untilTokenToRegex");
function Zh(r) {
    return It(`(?!${xn(r.terminal)})${Zo}*?`, {
        cardinality: r.cardinality,
        lookahead: r.lookahead
    });
}
m$1(Zh, "negateTokenToRegex");
function ep(r) {
    return r.right ? It(`[${Ko(r.left)}-${Ko(r.right)}]`, {
        cardinality: r.cardinality,
        lookahead: r.lookahead,
        wrap: false
    }) : It(/*#__PURE__*/ Ko(r.left), {
        cardinality: r.cardinality,
        lookahead: r.lookahead,
        wrap: false
    });
}
m$1(ep, "characterRangeToRegex");
function Ko(r) {
    return lr(r.value);
}
m$1(Ko, "keywordToRegex");
function It(r, e) {
    var t;
    return (e.wrap !== false || e.lookahead) && (r = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ""}${r})`), e.cardinality ? `${r}${e.cardinality}` : r;
}
m$1(It, "withCardinality");
function el(r) {
    let e = [], t = r.Grammar;
    for (let n of t.rules)He(n) && Ho(n) && Go(/*#__PURE__*/ Tn(n)) && e.push(n.name);
    return {
        multilineCommentRules: e,
        nameRegexp: Ss
    };
}
m$1(el, "createGrammarConfig");
function Rn(r) {
    console && console.error && console.error(`Error: ${r}`);
}
m$1(Rn, "PRINT_ERROR");
function xi(r) {
    console && console.warn && console.warn(`Warning: ${r}`);
}
m$1(xi, "PRINT_WARNING");
function Ri(r) {
    let e = /*#__PURE__*/ new Date().getTime(), t = /*#__PURE__*/ r();
    return {
        time: new Date().getTime() - e,
        value: t
    };
}
m$1(Ri, "timer");
function Ei(r) {
    function e() {}
    m$1(e, "FakeConstructor"), e.prototype = r;
    let t = new e;
    function n() {
        return typeof t.bar;
    }
    return m$1(n, "fakeAccess"), n(), n(), r;
}
m$1(Ei, "toFastProperties");
function tp(r) {
    return rp(r) ? r.LABEL : r.name;
}
m$1(tp, "tokenLabel");
function rp(r) {
    return pr$1(r.LABEL) && r.LABEL !== "";
}
m$1(rp, "hasTokenLabel");
var ze = class {
    static #_ = m$1(this, "AbstractProduction");
    get definition() {
        return this._definition;
    }
    set definition(e) {
        this._definition = e;
    }
    constructor(e){
        this._definition = e;
    }
    accept(e) {
        e.visit(this), Zr$1(this.definition, (t)=>{
            t.accept(e);
        });
    }
}, H = class extends ze {
    static #_ = m$1(this, "NonTerminal");
    constructor(e){
        super([]), this.idx = 1, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
    set definition(e) {}
    get definition() {
        return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
    }
    accept(e) {
        e.visit(this);
    }
}, Me = class extends ze {
    static #_ = m$1(this, "Rule");
    constructor(e){
        super(e.definition), this.orgText = "", fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
}, J = class extends ze {
    static #_ = m$1(this, "Alternative");
    constructor(e){
        super(e.definition), this.ignoreAmbiguities = false, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
}, z = class extends ze {
    static #_ = m$1(this, "Option");
    constructor(e){
        super(e.definition), this.idx = 1, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
}, Q = class extends ze {
    static #_ = m$1(this, "RepetitionMandatory");
    constructor(e){
        super(e.definition), this.idx = 1, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
}, Z = class extends ze {
    static #_ = m$1(this, "RepetitionMandatoryWithSeparator");
    constructor(e){
        super(e.definition), this.idx = 1, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
}, F = class extends ze {
    static #_ = m$1(this, "Repetition");
    constructor(e){
        super(e.definition), this.idx = 1, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
}, q = class extends ze {
    static #_ = m$1(this, "RepetitionWithSeparator");
    constructor(e){
        super(e.definition), this.idx = 1, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
}, X = class extends ze {
    static #_ = m$1(this, "Alternation");
    get definition() {
        return this._definition;
    }
    set definition(e) {
        this._definition = e;
    }
    constructor(e){
        super(e.definition), this.idx = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
}, D = class {
    static #_ = m$1(this, "Terminal");
    constructor(e){
        this.idx = 1, fi$1(this, /*#__PURE__*/ Tm$1(e, (t)=>t !== void 0));
    }
    accept(e) {
        e.visit(this);
    }
};
function Vs(r) {
    return Jr$1(r, En);
}
m$1(Vs, "serializeGrammar");
function En(r) {
    function e(t) {
        return Jr$1(t, En);
    }
    if (m$1(e, "convertDefinition"), r instanceof H) {
        let t = {
            type: "NonTerminal",
            name: r.nonTerminalName,
            idx: r.idx
        };
        return pr$1(r.label) && (t.label = r.label), t;
    } else {
        if (r instanceof J) return {
            type: "Alternative",
            definition: /*#__PURE__*/ e(r.definition)
        };
        if (r instanceof z) return {
            type: "Option",
            idx: r.idx,
            definition: /*#__PURE__*/ e(r.definition)
        };
        if (r instanceof Q) return {
            type: "RepetitionMandatory",
            idx: r.idx,
            definition: /*#__PURE__*/ e(r.definition)
        };
        if (r instanceof Z) return {
            type: "RepetitionMandatoryWithSeparator",
            idx: r.idx,
            separator: /*#__PURE__*/ En(new D({
                terminalType: r.separator
            })),
            definition: /*#__PURE__*/ e(r.definition)
        };
        if (r instanceof q) return {
            type: "RepetitionWithSeparator",
            idx: r.idx,
            separator: /*#__PURE__*/ En(new D({
                terminalType: r.separator
            })),
            definition: /*#__PURE__*/ e(r.definition)
        };
        if (r instanceof F) return {
            type: "Repetition",
            idx: r.idx,
            definition: /*#__PURE__*/ e(r.definition)
        };
        if (r instanceof X) return {
            type: "Alternation",
            idx: r.idx,
            definition: /*#__PURE__*/ e(r.definition)
        };
        if (r instanceof D) {
            let t = {
                type: "Terminal",
                name: r.terminalType.name,
                label: /*#__PURE__*/ tp(r.terminalType),
                idx: r.idx
            };
            pr$1(r.label) && (t.terminalLabel = r.label);
            let n = r.terminalType.PATTERN;
            return r.terminalType.PATTERN && (t.pattern = cm$1(n) ? n.source : n), t;
        } else {
            if (r instanceof Me) return {
                type: "Rule",
                name: r.name,
                orgText: r.orgText,
                definition: /*#__PURE__*/ e(r.definition)
            };
            throw Error("non exhaustive match");
        }
    }
}
m$1(En, "serializeProduction");
var De = class {
    static #_ = m$1(this, "GAstVisitor");
    visit(e) {
        let t = e;
        switch(t.constructor){
            case H:
                return this.visitNonTerminal(t);
            case J:
                return this.visitAlternative(t);
            case z:
                return this.visitOption(t);
            case Q:
                return this.visitRepetitionMandatory(t);
            case Z:
                return this.visitRepetitionMandatoryWithSeparator(t);
            case q:
                return this.visitRepetitionWithSeparator(t);
            case F:
                return this.visitRepetition(t);
            case X:
                return this.visitAlternation(t);
            case D:
                return this.visitTerminal(t);
            case Me:
                return this.visitRule(t);
            default:
                throw Error("non exhaustive match");
        }
    }
    visitNonTerminal(e) {}
    visitAlternative(e) {}
    visitOption(e) {}
    visitRepetition(e) {}
    visitRepetitionMandatory(e) {}
    visitRepetitionMandatoryWithSeparator(e) {}
    visitRepetitionWithSeparator(e) {}
    visitAlternation(e) {}
    visitTerminal(e) {}
    visitRule(e) {}
};
function tl(r) {
    return r instanceof J || r instanceof z || r instanceof F || r instanceof Q || r instanceof Z || r instanceof q || r instanceof D || r instanceof Me;
}
m$1(tl, "isSequenceProd");
function cr(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return r instanceof z || r instanceof F || r instanceof q ? true : r instanceof X ? fp$1(r.definition, (n)=>cr(n, e)) : r instanceof H && pm$1(e, r) ? false : r instanceof ze ? (r instanceof H && e.push(r), Ui$1(r.definition, (n)=>cr(n, e))) : false;
}
m$1(cr, "isOptionalProd");
function rl(r) {
    return r instanceof X;
}
m$1(rl, "isBranchingProd");
function We(r) {
    if (r instanceof H) return "SUBRULE";
    if (r instanceof z) return "OPTION";
    if (r instanceof X) return "OR";
    if (r instanceof Q) return "AT_LEAST_ONE";
    if (r instanceof Z) return "AT_LEAST_ONE_SEP";
    if (r instanceof q) return "MANY_SEP";
    if (r instanceof F) return "MANY";
    if (r instanceof D) return "CONSUME";
    throw Error("non exhaustive match");
}
m$1(We, "getProductionDslName");
var Nt = class {
    static #_ = m$1(this, "RestWalker");
    walk(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        Zr$1(e.definition, (n, i)=>{
            let s = /*#__PURE__*/ Mi$1(e.definition, i + 1);
            if (n instanceof H) this.walkProdRef(n, s, t);
            else if (n instanceof D) this.walkTerminal(n, s, t);
            else if (n instanceof J) this.walkFlat(n, s, t);
            else if (n instanceof z) this.walkOption(n, s, t);
            else if (n instanceof Q) this.walkAtLeastOne(n, s, t);
            else if (n instanceof Z) this.walkAtLeastOneSep(n, s, t);
            else if (n instanceof q) this.walkManySep(n, s, t);
            else if (n instanceof F) this.walkMany(n, s, t);
            else if (n instanceof X) this.walkOr(n, s, t);
            else throw Error("non exhaustive match");
        });
    }
    walkTerminal(e, t, n) {}
    walkProdRef(e, t, n) {}
    walkFlat(e, t, n) {
        let i = /*#__PURE__*/ t.concat(n);
        this.walk(e, i);
    }
    walkOption(e, t, n) {
        let i = /*#__PURE__*/ t.concat(n);
        this.walk(e, i);
    }
    walkAtLeastOne(e, t, n) {
        let i = /*#__PURE__*/ [
            new z({
                definition: e.definition
            })
        ].concat(t, n);
        this.walk(e, i);
    }
    walkAtLeastOneSep(e, t, n) {
        let i = /*#__PURE__*/ au(e, t, n);
        this.walk(e, i);
    }
    walkMany(e, t, n) {
        let i = /*#__PURE__*/ [
            new z({
                definition: e.definition
            })
        ].concat(t, n);
        this.walk(e, i);
    }
    walkManySep(e, t, n) {
        let i = /*#__PURE__*/ au(e, t, n);
        this.walk(e, i);
    }
    walkOr(e, t, n) {
        let i = /*#__PURE__*/ t.concat(n);
        Zr$1(e.definition, (s)=>{
            let o = new J({
                definition: [
                    s
                ]
            });
            this.walk(o, i);
        });
    }
};
function au(r, e, t) {
    return [
        new z({
            definition: /*#__PURE__*/ [
                new D({
                    terminalType: r.separator
                })
            ].concat(r.definition)
        })
    ].concat(e, t);
}
m$1(au, "restForRepetitionWithSeparator");
function ur(r) {
    if (r instanceof H) return ur(r.referencedRule);
    if (r instanceof D) return sp(r);
    if (tl(r)) return np(r);
    if (rl(r)) return ip(r);
    throw Error("non exhaustive match");
}
m$1(ur, "first");
function np(r) {
    let e = [], t = r.definition, n = 0, i = t.length > n, s, o = true;
    for(; i && o;)s = t[n], o = /*#__PURE__*/ cr(s), e = /*#__PURE__*/ e.concat(/*#__PURE__*/ ur(s)), n = n + 1, i = t.length > n;
    return mp$1(e);
}
m$1(np, "firstForSequence");
function ip(r) {
    let e = /*#__PURE__*/ Jr$1(r.definition, (t)=>ur(t));
    return mp$1(/*#__PURE__*/ Qr$1(e));
}
m$1(ip, "firstForBranching");
function sp(r) {
    return [
        r.terminalType
    ];
}
m$1(sp, "firstForTerminal");
var js = "_~IN~_";
var nl = class extends Nt {
    static #_ = m$1(this, "ResyncFollowsWalker");
    constructor(e){
        super(), this.topProd = e, this.follows = {};
    }
    startWalking() {
        return this.walk(this.topProd), this.follows;
    }
    walkTerminal(e, t, n) {}
    walkProdRef(e, t, n) {
        let i = ap(e.referencedRule, e.idx) + this.topProd.name, s = /*#__PURE__*/ t.concat(n), o = new J({
            definition: s
        }), l = /*#__PURE__*/ ur(o);
        this.follows[i] = l;
    }
};
function ou(r) {
    let e = {};
    return Zr$1(r, (t)=>{
        let n = /*#__PURE__*/ new nl(t).startWalking();
        fi$1(e, n);
    }), e;
}
m$1(ou, "computeAllProdsFollows");
function ap(r, e) {
    return r.name + e + js;
}
m$1(ap, "buildBetweenProdsFollowPrefix");
var Hs = {}, op = new ar;
function An(r) {
    let e = /*#__PURE__*/ r.toString();
    if (Hs.hasOwnProperty(e)) return Hs[e];
    {
        let t = /*#__PURE__*/ op.pattern(e);
        return Hs[e] = t, t;
    }
}
m$1(An, "getRegExpAst");
function lu() {
    Hs = {};
}
m$1(lu, "clearRegExpParserCache");
var uu = "Complement Sets are not supported for first char optimization", Ai = `Unable to use "first char" lexer optimizations:
`;
function du(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    try {
        let t = /*#__PURE__*/ An(r);
        return il(t.value, {}, t.flags.ignoreCase);
    } catch (t) {
        if (t.message === uu) e && xi(`${Ai}	Unable to optimize: < ${r.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
        else {
            let n = "";
            e && (n = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), Rn(`${Ai}
	Failed parsing: < ${r.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n);
        }
    }
    return [];
}
m$1(du, "getOptimizedStartCodesIndices");
function il(r, e, t) {
    switch(r.type){
        case "Disjunction":
            for(let i = 0; i < r.value.length; i++)il(r.value[i], e, t);
            break;
        case "Alternative":
            let n = r.value;
            for(let i = 0; i < n.length; i++){
                let s = n[i];
                switch(s.type){
                    case "EndAnchor":
                    case "GroupBackReference":
                    case "Lookahead":
                    case "NegativeLookahead":
                    case "StartAnchor":
                    case "WordBoundary":
                    case "NonWordBoundary":
                        continue;
                }
                let o = s;
                switch(o.type){
                    case "Character":
                        zs(o.value, e, t);
                        break;
                    case "Set":
                        if (o.complement === true) throw Error(uu);
                        Zr$1(o.value, (c)=>{
                            if (typeof c == "number") zs(c, e, t);
                            else {
                                let u = c;
                                if (t === true) for(let d = u.from; d <= u.to; d++)zs(d, e, t);
                                else {
                                    for(let d = u.from; d <= u.to && d < vn; d++)zs(d, e, t);
                                    if (u.to >= vn) {
                                        let d = u.from >= vn ? u.from : vn, f = u.to, h = /*#__PURE__*/ ft(d), p = /*#__PURE__*/ ft(f);
                                        for(let g = h; g <= p; g++)e[g] = g;
                                    }
                                }
                            }
                        });
                        break;
                    case "Group":
                        il(o.value, e, t);
                        break;
                    default:
                        throw Error("Non Exhaustive Match");
                }
                let l = o.quantifier !== void 0 && o.quantifier.atLeast === 0;
                if (o.type === "Group" && sl(o) === false || o.type !== "Group" && l === false) break;
            }
            break;
        default:
            throw Error("non exhaustive match!");
    }
    return Xr$1(e);
}
m$1(il, "firstCharOptimizedIndices");
function zs(r, e, t) {
    let n = /*#__PURE__*/ ft(r);
    e[n] = n, t === true && lp(r, e);
}
m$1(zs, "addOptimizedIdxToResult");
function lp(r, e) {
    let t = /*#__PURE__*/ String.fromCharCode(r), n = /*#__PURE__*/ t.toUpperCase();
    if (n !== t) {
        let i = /*#__PURE__*/ ft(/*#__PURE__*/ n.charCodeAt(0));
        e[i] = i;
    } else {
        let i = /*#__PURE__*/ t.toLowerCase();
        if (i !== t) {
            let s = /*#__PURE__*/ ft(/*#__PURE__*/ i.charCodeAt(0));
            e[s] = s;
        }
    }
}
m$1(lp, "handleIgnoreCase");
function cu(r, e) {
    return Ki$1(r.value, (t)=>{
        if (typeof t == "number") return pm$1(e, t);
        {
            let n = t;
            return Ki$1(e, (i)=>n.from <= i && i <= n.to) !== void 0;
        }
    });
}
m$1(cu, "findCode");
function sl(r) {
    let e = r.quantifier;
    return e && e.atLeast === 0 ? true : r.value ? N(r.value) ? Ui$1(r.value, sl) : sl(r.value) : false;
}
m$1(sl, "isWholeOptional");
var al = class extends dt {
    static #_ = m$1(this, "CharCodeFinder");
    constructor(e){
        super(), this.targetCharCodes = e, this.found = false;
    }
    visitChildren(e) {
        if (this.found !== true) {
            switch(e.type){
                case "Lookahead":
                    this.visitLookahead(e);
                    return;
                case "NegativeLookahead":
                    this.visitNegativeLookahead(e);
                    return;
            }
            super.visitChildren(e);
        }
    }
    visitCharacter(e) {
        pm$1(this.targetCharCodes, e.value) && (this.found = true);
    }
    visitSet(e) {
        e.complement ? cu(e, this.targetCharCodes) === void 0 && (this.found = true) : cu(e, this.targetCharCodes) !== void 0 && (this.found = true);
    }
};
function qs(r, e) {
    if (e instanceof RegExp) {
        let t = /*#__PURE__*/ An(e), n = new al(r);
        return n.visit(t), n.found;
    } else return Ki$1(e, (t)=>pm$1(r, /*#__PURE__*/ t.charCodeAt(0))) !== void 0;
}
m$1(qs, "canMatchCharCode");
var dr = "PATTERN", kn = "defaultMode", Xs = "modes", ll = typeof new RegExp("(?:)").sticky == "boolean";
function pu(r, e) {
    e = /*#__PURE__*/ Nf$1(e, {
        useSticky: ll,
        debug: false,
        safeMode: false,
        positionTracking: "full",
        lineTerminatorCharacters: [
            "\r",
            `
`
        ],
        tracer: /*#__PURE__*/ m$1((A, x)=>x(), "tracer")
    });
    let t = e.tracer;
    t("initCharCodeToOptimizedIndexMap", ()=>{
        Np();
    });
    let n;
    t("Reject Lexer.NA", ()=>{
        n = /*#__PURE__*/ Qm(r, (A)=>A[dr] === se.NA);
    });
    let i = false, s;
    t("Transform Patterns", ()=>{
        i = false, s = /*#__PURE__*/ Jr$1(n, (A)=>{
            let x = A[dr];
            if (cm$1(x)) {
                let P = x.source;
                return P.length === 1 && P !== "^" && P !== "$" && P !== "." && !x.ignoreCase ? P : P.length === 2 && P[0] === "\\" && !pm$1([
                    "d",
                    "D",
                    "s",
                    "S",
                    "t",
                    "r",
                    "n",
                    "t",
                    "0",
                    "c",
                    "b",
                    "B",
                    "f",
                    "v",
                    "w",
                    "W"
                ], P[1]) ? P[1] : e.useSticky ? hu(x) : fu(x);
            } else {
                if (T(x)) return i = true, {
                    exec: x
                };
                if (typeof x == "object") return i = true, x;
                if (typeof x == "string") {
                    if (x.length === 1) return x;
                    {
                        let P = /*#__PURE__*/ x.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), b = new RegExp(P);
                        return e.useSticky ? hu(b) : fu(b);
                    }
                } else throw Error("non exhaustive match");
            }
        });
    });
    let o, l, c, u, d;
    t("misc mapping", ()=>{
        o = /*#__PURE__*/ Jr$1(n, (A)=>A.tokenTypeIdx), l = /*#__PURE__*/ Jr$1(n, (A)=>{
            let x = A.GROUP;
            if (x !== se.SKIPPED) {
                if (pr$1(x)) return x;
                if (sn$1(x)) return false;
                throw Error("non exhaustive match");
            }
        }), c = /*#__PURE__*/ Jr$1(n, (A)=>{
            let x = A.LONGER_ALT;
            if (x) return N(x) ? Jr$1(x, (b)=>lm$1(n, b)) : [
                /*#__PURE__*/ lm$1(n, x)
            ];
        }), u = /*#__PURE__*/ Jr$1(n, (A)=>A.PUSH_MODE), d = /*#__PURE__*/ Jr$1(n, (A)=>fm$1(A, "POP_MODE"));
    });
    let f;
    t("Line Terminator Handling", ()=>{
        let A = /*#__PURE__*/ Au(e.lineTerminatorCharacters);
        f = /*#__PURE__*/ Jr$1(n, (x)=>false), e.positionTracking !== "onlyOffset" && (f = /*#__PURE__*/ Jr$1(n, (x)=>fm$1(x, "LINE_BREAKS") ? !!x.LINE_BREAKS : Eu(x, A) === false && qs(A, x.PATTERN)));
    });
    let h, p, g, y;
    t("Misc Mapping #2", ()=>{
        h = /*#__PURE__*/ Jr$1(n, xu), p = /*#__PURE__*/ Jr$1(s, kp), g = /*#__PURE__*/ Rn$1(n, (A, x)=>{
            let P = x.GROUP;
            return pr$1(P) && P !== se.SKIPPED && (A[P] = []), A;
        }, {}), y = /*#__PURE__*/ Jr$1(s, (A, x)=>({
                pattern: s[x],
                longerAlt: c[x],
                canLineTerminator: f[x],
                isCustom: h[x],
                short: p[x],
                group: l[x],
                push: u[x],
                pop: d[x],
                tokenTypeIdx: o[x],
                tokenType: n[x]
            }));
    });
    let v = true, R = [];
    return e.safeMode || t("First Char Optimization", ()=>{
        R = /*#__PURE__*/ Rn$1(n, (A, x, P)=>{
            if (typeof x.PATTERN == "string") {
                let b = /*#__PURE__*/ x.PATTERN.charCodeAt(0), Te = /*#__PURE__*/ ft(b);
                ol(A, Te, y[P]);
            } else if (N(x.START_CHARS_HINT)) {
                let b;
                Zr$1(x.START_CHARS_HINT, (Te)=>{
                    let kr = typeof Te == "string" ? Te.charCodeAt(0) : Te, Ae = /*#__PURE__*/ ft(kr);
                    b !== Ae && (b = Ae, ol(A, Ae, y[P]));
                });
            } else if (cm$1(x.PATTERN)) if (x.PATTERN.unicode) v = false, e.ensureOptimizations && Rn(`${Ai}	Unable to analyze < ${x.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
            else {
                let b = /*#__PURE__*/ du(x.PATTERN, e.ensureOptimizations);
                Cr$1(b) && (v = false), Zr$1(b, (Te)=>{
                    ol(A, Te, y[P]);
                });
            }
            else e.ensureOptimizations && Rn(`${Ai}	TokenType: <${x.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), v = false;
            return A;
        }, []);
    }), {
        emptyGroups: g,
        patternIdxToConfig: y,
        charCodeToPatternIdxToConfig: R,
        hasCustom: i,
        canBeOptimized: v
    };
}
m$1(pu, "analyzeTokenTypes");
function mu(r, e) {
    let t = [], n = /*#__PURE__*/ up(r);
    t = /*#__PURE__*/ t.concat(n.errors);
    let i = /*#__PURE__*/ dp(n.valid), s = i.valid;
    return t = /*#__PURE__*/ t.concat(i.errors), t = /*#__PURE__*/ t.concat(/*#__PURE__*/ cp(s)), t = /*#__PURE__*/ t.concat(/*#__PURE__*/ xp(s)), t = /*#__PURE__*/ t.concat(/*#__PURE__*/ Rp(s, e)), t = /*#__PURE__*/ t.concat(/*#__PURE__*/ Ep(s)), t;
}
m$1(mu, "validatePatterns");
function cp(r) {
    let e = [], t = /*#__PURE__*/ fn$1(r, (n)=>cm$1(n[dr]));
    return e = /*#__PURE__*/ e.concat(/*#__PURE__*/ hp(t)), e = /*#__PURE__*/ e.concat(/*#__PURE__*/ gp(t)), e = /*#__PURE__*/ e.concat(/*#__PURE__*/ yp(t)), e = /*#__PURE__*/ e.concat(/*#__PURE__*/ Tp(t)), e = /*#__PURE__*/ e.concat(/*#__PURE__*/ pp(t)), e;
}
m$1(cp, "validateRegExpPattern");
function up(r) {
    let e = /*#__PURE__*/ fn$1(r, (i)=>!fm$1(i, dr)), t = /*#__PURE__*/ Jr$1(e, (i)=>({
            message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
            type: ie.MISSING_PATTERN,
            tokenTypes: [
                i
            ]
        })), n = /*#__PURE__*/ Ri$1(r, e);
    return {
        errors: t,
        valid: n
    };
}
m$1(up, "findMissingPatterns");
function dp(r) {
    let e = /*#__PURE__*/ fn$1(r, (i)=>{
        let s = i[dr];
        return !cm$1(s) && !T(s) && !fm$1(s, "exec") && !pr$1(s);
    }), t = /*#__PURE__*/ Jr$1(e, (i)=>({
            message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
            type: ie.INVALID_PATTERN,
            tokenTypes: [
                i
            ]
        })), n = /*#__PURE__*/ Ri$1(r, e);
    return {
        errors: t,
        valid: n
    };
}
m$1(dp, "findInvalidPatterns");
var fp = /[^\\][$]/;
function hp(r) {
    class e extends dt {
        static #_ = m$1(this, "EndAnchorFinder");
        constructor(){
            super(...arguments), this.found = false;
        }
        visitEndAnchor(s) {
            this.found = true;
        }
    }
    let t = /*#__PURE__*/ fn$1(r, (i)=>{
        let s = i.PATTERN;
        try {
            let o = /*#__PURE__*/ An(s), l = new e;
            return l.visit(o), l.found;
        } catch  {
            return fp.test(s.source);
        }
    });
    return Jr$1(t, (i)=>({
            message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
            type: ie.EOI_ANCHOR_FOUND,
            tokenTypes: [
                i
            ]
        }));
}
m$1(hp, "findEndOfInputAnchor");
function pp(r) {
    let e = /*#__PURE__*/ fn$1(r, (n)=>n.PATTERN.test(""));
    return Jr$1(e, (n)=>({
            message: "Token Type: ->" + n.name + "<- static 'PATTERN' must not match an empty string",
            type: ie.EMPTY_MATCH_PATTERN,
            tokenTypes: [
                n
            ]
        }));
}
m$1(pp, "findEmptyMatchRegExps");
var mp = /[^\\[][\^]|^\^/;
function gp(r) {
    class e extends dt {
        static #_ = m$1(this, "StartAnchorFinder");
        constructor(){
            super(...arguments), this.found = false;
        }
        visitStartAnchor(s) {
            this.found = true;
        }
    }
    let t = /*#__PURE__*/ fn$1(r, (i)=>{
        let s = i.PATTERN;
        try {
            let o = /*#__PURE__*/ An(s), l = new e;
            return l.visit(o), l.found;
        } catch  {
            return mp.test(s.source);
        }
    });
    return Jr$1(t, (i)=>({
            message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
            type: ie.SOI_ANCHOR_FOUND,
            tokenTypes: [
                i
            ]
        }));
}
m$1(gp, "findStartOfInputAnchor");
function yp(r) {
    let e = /*#__PURE__*/ fn$1(r, (n)=>{
        let i = n[dr];
        return i instanceof RegExp && (i.multiline || i.global);
    });
    return Jr$1(e, (n)=>({
            message: "Token Type: ->" + n.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
            type: ie.UNSUPPORTED_FLAGS_FOUND,
            tokenTypes: [
                n
            ]
        }));
}
m$1(yp, "findUnsupportedFlags");
function Tp(r) {
    let e = [], t = /*#__PURE__*/ Jr$1(r, (s)=>Rn$1(r, (o, l)=>(s.PATTERN.source === l.PATTERN.source && !pm$1(e, l) && l.PATTERN !== se.NA && (e.push(l), o.push(l)), o), []));
    t = /*#__PURE__*/ Ai$1(t);
    let n = /*#__PURE__*/ fn$1(t, (s)=>s.length > 1);
    return Jr$1(n, (s)=>{
        let o = /*#__PURE__*/ Jr$1(s, (c)=>c.name);
        return {
            message: `The same RegExp pattern ->${De$1(s).PATTERN}<-has been used in all of the following Token Types: ${o.join(", ")} <-`,
            type: ie.DUPLICATE_PATTERNS_FOUND,
            tokenTypes: s
        };
    });
}
m$1(Tp, "findDuplicatePatterns");
function xp(r) {
    let e = /*#__PURE__*/ fn$1(r, (n)=>{
        if (!fm$1(n, "GROUP")) return false;
        let i = n.GROUP;
        return i !== se.SKIPPED && i !== se.NA && !pr$1(i);
    });
    return Jr$1(e, (n)=>({
            message: "Token Type: ->" + n.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
            type: ie.INVALID_GROUP_TYPE_FOUND,
            tokenTypes: [
                n
            ]
        }));
}
m$1(xp, "findInvalidGroupType");
function Rp(r, e) {
    let t = /*#__PURE__*/ fn$1(r, (i)=>i.PUSH_MODE !== void 0 && !pm$1(e, i.PUSH_MODE));
    return Jr$1(t, (i)=>({
            message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
            type: ie.PUSH_MODE_DOES_NOT_EXIST,
            tokenTypes: [
                i
            ]
        }));
}
m$1(Rp, "findModesThatDoNotExist");
function Ep(r) {
    let e = [], t = /*#__PURE__*/ Rn$1(r, (n, i, s)=>{
        let o = i.PATTERN;
        return o === se.NA || (pr$1(o) ? n.push({
            str: o,
            idx: s,
            tokenType: i
        }) : cm$1(o) && vp(o) && n.push({
            str: o.source,
            idx: s,
            tokenType: i
        })), n;
    }, []);
    return Zr$1(r, (n, i)=>{
        Zr$1(t, (param)=>{
            let { str: s, idx: o, tokenType: l } = param;
            if (i < o && Ap(s, n.PATTERN)) {
                let c = `Token: ->${l.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
                e.push({
                    message: c,
                    type: ie.UNREACHABLE_PATTERN,
                    tokenTypes: [
                        n,
                        l
                    ]
                });
            }
        });
    }), e;
}
m$1(Ep, "findUnreachablePatterns");
function Ap(r, e) {
    if (cm$1(e)) {
        let t = /*#__PURE__*/ e.exec(r);
        return t !== null && t.index === 0;
    } else {
        if (T(e)) return e(r, 0, [], {});
        if (fm$1(e, "exec")) return e.exec(r, 0, [], {});
        if (typeof e == "string") return e === r;
        throw Error("non exhaustive match");
    }
}
m$1(Ap, "testTokenType");
function vp(r) {
    return Ki$1([
        ".",
        "\\",
        "[",
        "]",
        "|",
        "^",
        "$",
        "(",
        ")",
        "?",
        "*",
        "+",
        "{"
    ], (t)=>r.source.indexOf(t) !== -1) === void 0;
}
m$1(vp, "noMetaChar");
function fu(r) {
    let e = r.ignoreCase ? "i" : "";
    return new RegExp(`^(?:${r.source})`, e);
}
m$1(fu, "addStartOfInput");
function hu(r) {
    let e = r.ignoreCase ? "iy" : "y";
    return new RegExp(`${r.source}`, e);
}
m$1(hu, "addStickyFlag");
function gu(r, e, t) {
    let n = [];
    return fm$1(r, kn) || n.push({
        message: "A MultiMode Lexer cannot be initialized without a <" + kn + `> property in its definition
`,
        type: ie.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
    }), fm$1(r, Xs) || n.push({
        message: "A MultiMode Lexer cannot be initialized without a <" + Xs + `> property in its definition
`,
        type: ie.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
    }), fm$1(r, Xs) && fm$1(r, kn) && !fm$1(r.modes, r.defaultMode) && n.push({
        message: `A MultiMode Lexer cannot be initialized with a ${kn}: <${r.defaultMode}>which does not exist
`,
        type: ie.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
    }), fm$1(r, Xs) && Zr$1(r.modes, (i, s)=>{
        Zr$1(i, (o, l)=>{
            if (sn$1(o)) n.push({
                message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${l}>
`,
                type: ie.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
            });
            else if (fm$1(o, "LONGER_ALT")) {
                let c = N(o.LONGER_ALT) ? o.LONGER_ALT : [
                    o.LONGER_ALT
                ];
                Zr$1(c, (u)=>{
                    !sn$1(u) && !pm$1(i, u) && n.push({
                        message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${o.name}> outside of mode <${s}>
`,
                        type: ie.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
                    });
                });
            }
        });
    }), n;
}
m$1(gu, "performRuntimeChecks");
function yu(r, e, t) {
    let n = [], i = false, s = /*#__PURE__*/ Ai$1(/*#__PURE__*/ Qr$1(/*#__PURE__*/ Xr$1(r.modes))), o = /*#__PURE__*/ Qm(s, (c)=>c[dr] === se.NA), l = /*#__PURE__*/ Au(t);
    return e && Zr$1(o, (c)=>{
        let u = /*#__PURE__*/ Eu(c, l);
        if (u !== false) {
            let f = {
                message: /*#__PURE__*/ Ip(c, u),
                type: u.issue,
                tokenType: c
            };
            n.push(f);
        } else fm$1(c, "LINE_BREAKS") ? c.LINE_BREAKS === true && (i = true) : qs(l, c.PATTERN) && (i = true);
    }), e && !i && n.push({
        message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
        type: ie.NO_LINE_BREAKS_FLAGS
    }), n;
}
m$1(yu, "performWarningRuntimeChecks");
function Tu(r) {
    let e = {}, t = /*#__PURE__*/ h(r);
    return Zr$1(t, (n)=>{
        let i = r[n];
        if (N(i)) e[n] = [];
        else throw Error("non exhaustive match");
    }), e;
}
m$1(Tu, "cloneEmptyGroups");
function xu(r) {
    let e = r.PATTERN;
    if (cm$1(e)) return false;
    if (T(e)) return true;
    if (fm$1(e, "exec")) return true;
    if (pr$1(e)) return false;
    throw Error("non exhaustive match");
}
m$1(xu, "isCustomPattern");
function kp(r) {
    return pr$1(r) && r.length === 1 ? r.charCodeAt(0) : false;
}
m$1(kp, "isShortPattern");
var Ru = {
    test: /*#__PURE__*/ m$1(function(r) {
        let e = r.length;
        for(let t = this.lastIndex; t < e; t++){
            let n = /*#__PURE__*/ r.charCodeAt(t);
            if (n === 10) return this.lastIndex = t + 1, true;
            if (n === 13) return r.charCodeAt(t + 1) === 10 ? this.lastIndex = t + 2 : this.lastIndex = t + 1, true;
        }
        return false;
    }, "test"),
    lastIndex: 0
};
function Eu(r, e) {
    if (fm$1(r, "LINE_BREAKS")) return false;
    if (cm$1(r.PATTERN)) {
        try {
            qs(e, r.PATTERN);
        } catch (t) {
            return {
                issue: ie.IDENTIFY_TERMINATOR,
                errMsg: t.message
            };
        }
        return false;
    } else {
        if (pr$1(r.PATTERN)) return false;
        if (xu(r)) return {
            issue: ie.CUSTOM_LINE_BREAK
        };
        throw Error("non exhaustive match");
    }
}
m$1(Eu, "checkLineBreaksIssues");
function Ip(r, e) {
    if (e.issue === ie.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${r.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
    if (e.issue === ie.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${r.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
    throw Error("non exhaustive match");
}
m$1(Ip, "buildLineBreakIssueMessage");
function Au(r) {
    return Jr$1(r, (t)=>pr$1(t) ? t.charCodeAt(0) : t);
}
m$1(Au, "getCharCodes");
function ol(r, e, t) {
    r[e] === void 0 ? r[e] = [
        t
    ] : r[e].push(t);
}
m$1(ol, "addToMapOfArrays");
var vn = 256, Ys = [];
function ft(r) {
    return r < vn ? r : Ys[r];
}
m$1(ft, "charCodeToOptimizedIndex");
function Np() {
    if (Cr$1(Ys)) {
        Ys = new Array(65536);
        for(let r = 0; r < 65536; r++)Ys[r] = r > 255 ? 255 + ~~(r / 255) : r;
    }
}
m$1(Np, "initCharCodeToOptimizedIndexMap");
function Ct(r, e) {
    let t = r.tokenTypeIdx;
    return t === e.tokenTypeIdx ? true : e.isParent === true && e.categoryMatchesMap[t] === true;
}
m$1(Ct, "tokenStructuredMatcher");
function In(r, e) {
    return r.tokenTypeIdx === e.tokenTypeIdx;
}
m$1(In, "tokenStructuredMatcherNoCategories");
var vu = 1, Iu = {};
function St(r) {
    let e = /*#__PURE__*/ Cp(r);
    Sp(e), _p(e), $p(e), Zr$1(e, (t)=>{
        t.isParent = t.categoryMatches.length > 0;
    });
}
m$1(St, "augmentTokenTypes");
function Cp(r) {
    let e = /*#__PURE__*/ _f$1(r), t = r, n = true;
    for(; n;){
        t = /*#__PURE__*/ Ai$1(/*#__PURE__*/ Qr$1(/*#__PURE__*/ Jr$1(t, (s)=>s.CATEGORIES)));
        let i = /*#__PURE__*/ Ri$1(t, e);
        e = /*#__PURE__*/ e.concat(i), Cr$1(i) ? n = false : t = i;
    }
    return e;
}
m$1(Cp, "expandCategories");
function Sp(r) {
    Zr$1(r, (e)=>{
        cl(e) || (Iu[vu] = e, e.tokenTypeIdx = vu++), ku(e) && !N(e.CATEGORIES) && (e.CATEGORIES = [
            e.CATEGORIES
        ]), ku(e) || (e.CATEGORIES = []), wp(e) || (e.categoryMatches = []), Lp(e) || (e.categoryMatchesMap = {});
    });
}
m$1(Sp, "assignTokenDefaultProps");
function $p(r) {
    Zr$1(r, (e)=>{
        e.categoryMatches = [], Zr$1(e.categoryMatchesMap, (t, n)=>{
            e.categoryMatches.push(Iu[n].tokenTypeIdx);
        });
    });
}
m$1($p, "assignCategoriesTokensProp");
function _p(r) {
    Zr$1(r, (e)=>{
        Nu([], e);
    });
}
m$1(_p, "assignCategoriesMapProp");
function Nu(r, e) {
    Zr$1(r, (t)=>{
        e.categoryMatchesMap[t.tokenTypeIdx] = true;
    }), Zr$1(e.CATEGORIES, (t)=>{
        let n = /*#__PURE__*/ r.concat(e);
        pm$1(n, t) || Nu(n, t);
    });
}
m$1(Nu, "singleAssignCategoriesToksMap");
function cl(r) {
    return fm$1(r, "tokenTypeIdx");
}
m$1(cl, "hasShortKeyProperty");
function ku(r) {
    return fm$1(r, "CATEGORIES");
}
m$1(ku, "hasCategoriesProperty");
function wp(r) {
    return fm$1(r, "categoryMatches");
}
m$1(wp, "hasExtendingTokensTypesProperty");
function Lp(r) {
    return fm$1(r, "categoryMatchesMap");
}
m$1(Lp, "hasExtendingTokensTypesMapProperty");
function Cu(r) {
    return fm$1(r, "tokenTypeIdx");
}
m$1(Cu, "isTokenType");
var Nn = {
    buildUnableToPopLexerModeMessage (r) {
        return `Unable to pop Lexer Mode after encountering Token ->${r.image}<- The Mode Stack is empty`;
    },
    buildUnexpectedCharactersMessage (r, e, t, n, i) {
        return `unexpected character: ->${r.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`;
    }
};
var ie;
(function(r) {
    r[r.MISSING_PATTERN = 0] = "MISSING_PATTERN", r[r.INVALID_PATTERN = 1] = "INVALID_PATTERN", r[r.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", r[r.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", r[r.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", r[r.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", r[r.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", r[r.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", r[r.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", r[r.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", r[r.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", r[r.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", r[r.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", r[r.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", r[r.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", r[r.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", r[r.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", r[r.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(ie || (ie = {}));
var vi = {
    deferDefinitionErrorsHandling: false,
    positionTracking: "full",
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: [
        `
`,
        "\r"
    ],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: Nn,
    traceInitPerf: false,
    skipValidations: false,
    recoveryEnabled: true
};
Object.freeze(vi);
var se = class {
    static #_ = m$1(this, "Lexer");
    constructor(e, t = vi){
        if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s)=>{
            if (this.traceInitPerf === true) {
                this.traceInitIndent++;
                let o = /*#__PURE__*/ new Array(this.traceInitIndent + 1).join("	");
                this.traceInitIndent < this.traceInitMaxIdent && console.log(`${o}--> <${i}>`);
                let { time: l, value: c } = Ri(s), u = l > 10 ? console.warn : console.log;
                return this.traceInitIndent < this.traceInitMaxIdent && u(`${o}<-- <${i}> time: ${l}ms`), this.traceInitIndent--, c;
            } else return s();
        }, typeof t == "boolean") throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
        this.config = /*#__PURE__*/ fi$1({}, vi, t);
        let n = this.config.traceInitPerf;
        n === true ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = true) : typeof n == "number" && (this.traceInitMaxIdent = n, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", ()=>{
            let i, s = true;
            this.TRACE_INIT("Lexer Config handling", ()=>{
                if (this.config.lineTerminatorsPattern === vi.lineTerminatorsPattern) this.config.lineTerminatorsPattern = Ru;
                else if (this.config.lineTerminatorCharacters === vi.lineTerminatorCharacters) throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
                if (t.safeMode && t.ensureOptimizations) throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
                this.trackStartLines = /*#__PURE__*/ /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /*#__PURE__*/ /full/i.test(this.config.positionTracking), N(e) ? i = {
                    modes: {
                        defaultMode: /*#__PURE__*/ _f$1(e)
                    },
                    defaultMode: kn
                } : (s = false, i = /*#__PURE__*/ _f$1(e));
            }), this.config.skipValidations === false && (this.TRACE_INIT("performRuntimeChecks", ()=>{
                this.lexerDefinitionErrors = /*#__PURE__*/ this.lexerDefinitionErrors.concat(/*#__PURE__*/ gu(i, this.trackStartLines, this.config.lineTerminatorCharacters));
            }), this.TRACE_INIT("performWarningRuntimeChecks", ()=>{
                this.lexerDefinitionWarning = /*#__PURE__*/ this.lexerDefinitionWarning.concat(/*#__PURE__*/ yu(i, this.trackStartLines, this.config.lineTerminatorCharacters));
            })), i.modes = i.modes ? i.modes : {}, Zr$1(i.modes, (l, c)=>{
                i.modes[c] = /*#__PURE__*/ Qm(l, (u)=>sn$1(u));
            });
            let o = /*#__PURE__*/ h(i.modes);
            if (Zr$1(i.modes, (l, c)=>{
                this.TRACE_INIT(`Mode: <${c}> processing`, ()=>{
                    if (this.modes.push(c), this.config.skipValidations === false && this.TRACE_INIT("validatePatterns", ()=>{
                        this.lexerDefinitionErrors = /*#__PURE__*/ this.lexerDefinitionErrors.concat(/*#__PURE__*/ mu(l, o));
                    }), Cr$1(this.lexerDefinitionErrors)) {
                        St(l);
                        let u;
                        this.TRACE_INIT("analyzeTokenTypes", ()=>{
                            u = /*#__PURE__*/ pu(l, {
                                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                                positionTracking: t.positionTracking,
                                ensureOptimizations: t.ensureOptimizations,
                                safeMode: t.safeMode,
                                tracer: this.TRACE_INIT
                            });
                        }), this.patternIdxToConfig[c] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[c] = u.charCodeToPatternIdxToConfig, this.emptyGroups = /*#__PURE__*/ fi$1({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[c] = u.canBeOptimized;
                    }
                });
            }), this.defaultMode = i.defaultMode, !Cr$1(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
                let c = /*#__PURE__*/ Jr$1(this.lexerDefinitionErrors, (u)=>u.message).join(`-----------------------
`);
                throw new Error(`Errors detected in definition of Lexer:
` + c);
            }
            Zr$1(this.lexerDefinitionWarning, (l)=>{
                xi(l.message);
            }), this.TRACE_INIT("Choosing sub-methods implementations", ()=>{
                if (ll ? (this.chopInput = Y$1, this.match = this.matchWithTest) : (this.updateLastIndex = kr, this.match = this.matchWithExec), s && (this.handleModes = kr), this.trackStartLines === false && (this.computeNewColumn = Y$1), this.trackEndLines === false && (this.updateTokenEndLineColumnLocation = kr), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
                else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
                else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
                else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
                this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
            }), this.TRACE_INIT("Failed Optimization Warnings", ()=>{
                let l = /*#__PURE__*/ Rn$1(this.canModeBeOptimized, (c, u, d)=>(u === false && c.push(d), c), []);
                if (t.ensureOptimizations && !Cr$1(l)) throw Error(`Lexer Modes: < ${l.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
            }), this.TRACE_INIT("clearRegExpParserCache", ()=>{
                lu();
            }), this.TRACE_INIT("toFastProperties", ()=>{
                Ei(this);
            });
        });
    }
    tokenize(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.defaultMode;
        if (!Cr$1(this.lexerDefinitionErrors)) {
            let i = /*#__PURE__*/ Jr$1(this.lexerDefinitionErrors, (s)=>s.message).join(`-----------------------
`);
            throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
        }
        return this.tokenizeInternal(e, t);
    }
    tokenizeInternal(e, t) {
        let n, i, s, o, l, c, u, d, f, h, p, g, y, R, A, x = e, P = x.length, b = 0, Te = 0, kr = this.hasCustom ? 0 : Math.floor(e.length / 10), Ae = new Array(kr), Mt = [], yt = this.trackStartLines ? 1 : void 0, k = this.trackStartLines ? 1 : void 0, T = /*#__PURE__*/ Tu(this.emptyGroups), S = this.trackStartLines, C = this.config.lineTerminatorsPattern, V = 0, O = [], L = [], Le = [], Oe = [];
        Object.freeze(Oe);
        let ee;
        function Ht() {
            return O;
        }
        m$1(Ht, "getPossiblePatternsSlow");
        function Pc(ve) {
            let Xe = /*#__PURE__*/ ft(ve), Ir = L[Xe];
            return Ir === void 0 ? Oe : Ir;
        }
        m$1(Pc, "getPossiblePatternsOptimized");
        let gh = /*#__PURE__*/ m$1((ve)=>{
            if (Le.length === 1 && ve.tokenType.PUSH_MODE === void 0) {
                let Xe = /*#__PURE__*/ this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ve);
                Mt.push({
                    offset: ve.startOffset,
                    line: ve.startLine,
                    column: ve.startColumn,
                    length: ve.image.length,
                    message: Xe
                });
            } else {
                Le.pop();
                let Xe = /*#__PURE__*/ Df(Le);
                O = this.patternIdxToConfig[Xe], L = this.charCodeToPatternIdxToConfig[Xe], V = O.length;
                let Ir = this.canModeBeOptimized[Xe] && this.config.safeMode === false;
                L && Ir ? ee = Pc : ee = Ht;
            }
        }, "pop_mode");
        function bc(ve) {
            Le.push(ve), L = this.charCodeToPatternIdxToConfig[ve], O = this.patternIdxToConfig[ve], V = O.length, V = O.length;
            let Xe = this.canModeBeOptimized[ve] && this.config.safeMode === false;
            L && Xe ? ee = Pc : ee = Ht;
        }
        m$1(bc, "push_mode"), bc.call(this, t);
        let Ze, Mc = this.config.recoveryEnabled;
        for(; b < P;){
            c = null;
            let ve = /*#__PURE__*/ x.charCodeAt(b), Xe = /*#__PURE__*/ ee(ve), Ir = Xe.length;
            for(n = 0; n < Ir; n++){
                Ze = Xe[n];
                let Ke = Ze.pattern;
                u = null;
                let Tt = Ze.short;
                if (Tt !== false ? ve === Tt && (c = Ke) : Ze.isCustom === true ? (A = /*#__PURE__*/ Ke.exec(x, b, Ae, T), A !== null ? (c = A[0], A.payload !== void 0 && (u = A.payload)) : c = null) : (this.updateLastIndex(Ke, b), c = /*#__PURE__*/ this.match(Ke, e, b)), c !== null) {
                    if (l = Ze.longerAlt, l !== void 0) {
                        let Dt = l.length;
                        for(s = 0; s < Dt; s++){
                            let xt = O[l[s]], zt = xt.pattern;
                            if (d = null, xt.isCustom === true ? (A = /*#__PURE__*/ zt.exec(x, b, Ae, T), A !== null ? (o = A[0], A.payload !== void 0 && (d = A.payload)) : o = null) : (this.updateLastIndex(zt, b), o = /*#__PURE__*/ this.match(zt, e, b)), o && o.length > c.length) {
                                c = o, u = d, Ze = xt;
                                break;
                            }
                        }
                    }
                    break;
                }
            }
            if (c !== null) {
                if (f = c.length, h = Ze.group, h !== void 0 && (p = Ze.tokenTypeIdx, g = /*#__PURE__*/ this.createTokenInstance(c, b, p, Ze.tokenType, yt, k, f), this.handlePayload(g, u), h === false ? Te = /*#__PURE__*/ this.addToken(Ae, Te, g) : T[h].push(g)), e = /*#__PURE__*/ this.chopInput(e, f), b = b + f, k = /*#__PURE__*/ this.computeNewColumn(k, f), S === true && Ze.canLineTerminator === true) {
                    let Ke = 0, Tt, Dt;
                    C.lastIndex = 0;
                    do Tt = /*#__PURE__*/ C.test(c), Tt === true && (Dt = C.lastIndex - 1, Ke++);
                    while (Tt === true);
                    Ke !== 0 && (yt = yt + Ke, k = f - Dt, this.updateTokenEndLineColumnLocation(g, h, Dt, Ke, yt, k, f));
                }
                this.handleModes(Ze, gh, bc, g);
            } else {
                let Ke = b, Tt = yt, Dt = k, xt = Mc === false;
                for(; xt === false && b < P;)for(e = /*#__PURE__*/ this.chopInput(e, 1), b++, i = 0; i < V; i++){
                    let zt = O[i], ao = zt.pattern, Dc = zt.short;
                    if (Dc !== false ? x.charCodeAt(b) === Dc && (xt = true) : zt.isCustom === true ? xt = ao.exec(x, b, Ae, T) !== null : (this.updateLastIndex(ao, b), xt = ao.exec(e) !== null), xt === true) break;
                }
                if (y = b - Ke, k = /*#__PURE__*/ this.computeNewColumn(k, y), R = /*#__PURE__*/ this.config.errorMessageProvider.buildUnexpectedCharactersMessage(x, Ke, y, Tt, Dt), Mt.push({
                    offset: Ke,
                    line: Tt,
                    column: Dt,
                    length: y,
                    message: R
                }), Mc === false) break;
            }
        }
        return this.hasCustom || (Ae.length = Te), {
            tokens: Ae,
            groups: T,
            errors: Mt
        };
    }
    handleModes(e, t, n, i) {
        if (e.pop === true) {
            let s = e.push;
            t(i), s !== void 0 && n.call(this, s);
        } else e.push !== void 0 && n.call(this, e.push);
    }
    chopInput(e, t) {
        return e.substring(t);
    }
    updateLastIndex(e, t) {
        e.lastIndex = t;
    }
    updateTokenEndLineColumnLocation(e, t, n, i, s, o, l) {
        let c, u;
        t !== void 0 && (c = n === l - 1, u = c ? -1 : 0, i === 1 && c === true || (e.endLine = s + u, e.endColumn = o - 1 + -u));
    }
    computeNewColumn(e, t) {
        return e + t;
    }
    createOffsetOnlyToken(e, t, n, i) {
        return {
            image: e,
            startOffset: t,
            tokenTypeIdx: n,
            tokenType: i
        };
    }
    createStartOnlyToken(e, t, n, i, s, o) {
        return {
            image: e,
            startOffset: t,
            startLine: s,
            startColumn: o,
            tokenTypeIdx: n,
            tokenType: i
        };
    }
    createFullToken(e, t, n, i, s, o, l) {
        return {
            image: e,
            startOffset: t,
            endOffset: t + l - 1,
            startLine: s,
            endLine: s,
            startColumn: o,
            endColumn: o + l - 1,
            tokenTypeIdx: n,
            tokenType: i
        };
    }
    addTokenUsingPush(e, t, n) {
        return e.push(n), t;
    }
    addTokenUsingMemberAccess(e, t, n) {
        return e[t] = n, t++, t;
    }
    handlePayloadNoCustom(e, t) {}
    handlePayloadWithCustom(e, t) {
        t !== null && (e.payload = t);
    }
    matchWithTest(e, t, n) {
        return e.test(t) === true ? t.substring(n, e.lastIndex) : null;
    }
    matchWithExec(e, t) {
        let n = /*#__PURE__*/ e.exec(t);
        return n !== null ? n[0] : null;
    }
};
se.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
se.NA = /NOT_APPLICABLE/;
function $t(r) {
    return ul(r) ? r.LABEL : r.name;
}
m$1($t, "tokenLabel");
function ul(r) {
    return pr$1(r.LABEL) && r.LABEL !== "";
}
m$1(ul, "hasTokenLabel");
var Op = "parent", Su = "categories", $u = "label", _u = "group", wu = "push_mode", Lu = "pop_mode", Ou = "longer_alt", Pu = "line_breaks", bu = "start_chars_hint";
function Bt(r) {
    return Pp(r);
}
m$1(Bt, "createToken");
function Pp(r) {
    let e = r.pattern, t = {};
    if (t.name = r.name, sn$1(e) || (t.PATTERN = e), fm$1(r, Op)) throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
    return fm$1(r, Su) && (t.CATEGORIES = r[Su]), St([
        t
    ]), fm$1(r, $u) && (t.LABEL = r[$u]), fm$1(r, _u) && (t.GROUP = r[_u]), fm$1(r, Lu) && (t.POP_MODE = r[Lu]), fm$1(r, wu) && (t.PUSH_MODE = r[wu]), fm$1(r, Ou) && (t.LONGER_ALT = r[Ou]), fm$1(r, Pu) && (t.LINE_BREAKS = r[Pu]), fm$1(r, bu) && (t.START_CHARS_HINT = r[bu]), t;
}
m$1(Pp, "createTokenInternal");
var qe = /*#__PURE__*/ Bt({
    name: "EOF",
    pattern: se.NA
});
St([
    qe
]);
function _t(r, e, t, n, i, s, o, l) {
    return {
        image: e,
        startOffset: t,
        endOffset: n,
        startLine: i,
        endLine: s,
        startColumn: o,
        endColumn: l,
        tokenTypeIdx: r.tokenTypeIdx,
        tokenType: r
    };
}
m$1(_t, "createTokenInstance");
function ki(r, e) {
    return Ct(r, e);
}
m$1(ki, "tokenMatcher");
var wt = {
    buildMismatchTokenMessage (param) {
        let { expected: r, actual: e, previous: t, ruleName: n } = param;
        return `Expecting ${ul(r) ? `--> ${$t(r)} <--` : `token of type --> ${r.name} <--`} but found --> '${e.image}' <--`;
    },
    buildNotAllInputParsedMessage (param) {
        let { firstRedundant: r, ruleName: e } = param;
        return "Redundant input, expecting EOF but found: " + r.image;
    },
    buildNoViableAltMessage (param) {
        let { expectedPathsPerAlt: r, actual: e, previous: t, customUserDescription: n, ruleName: i } = param;
        let s = "Expecting: ", l = `
but found: '` + De$1(e).image + "'";
        if (n) return s + n + l;
        {
            let c = /*#__PURE__*/ Rn$1(r, (h, p)=>h.concat(p), []), u = /*#__PURE__*/ Jr$1(c, (h)=>`[${Jr$1(h, (p)=>$t(p)).join(", ")}]`), f = `one of these possible Token sequences:
${Jr$1(u, (h, p)=>`  ${p + 1}. ${h}`).join(`
`)}`;
            return s + f + l;
        }
    },
    buildEarlyExitMessage (param) {
        let { expectedIterationPaths: r, actual: e, customUserDescription: t, ruleName: n } = param;
        let i = "Expecting: ", o = `
but found: '` + De$1(e).image + "'";
        if (t) return i + t + o;
        {
            let c = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${Jr$1(r, (u)=>`[${Jr$1(u, (d)=>$t(d)).join(",")}]`).join(" ,")}>`;
            return i + c + o;
        }
    }
};
Object.freeze(wt);
var Mu = {
    buildRuleNotFoundError (r, e) {
        return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + r.name + "<-";
    }
}, it = {
    buildDuplicateFoundError (r, e) {
        function t(d) {
            return d instanceof D ? d.terminalType.name : d instanceof H ? d.nonTerminalName : "";
        }
        m$1(t, "getExtraProductionArgument");
        let n = r.name, i = /*#__PURE__*/ De$1(e), s = i.idx, o = /*#__PURE__*/ We(i), l = /*#__PURE__*/ t(i), c = s > 0, u = `->${o}${c ? s : ""}<- ${l ? `with argument: ->${l}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
        return u = /*#__PURE__*/ u.replace(/[ \t]+/g, " "), u = /*#__PURE__*/ u.replace(/\s\s+/g, `
`), u;
    },
    buildNamespaceConflictError (r) {
        return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${r.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
    },
    buildAlternationPrefixAmbiguityError (r) {
        let e = /*#__PURE__*/ Jr$1(r.prefixPath, (i)=>$t(i)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx;
        return `Ambiguous alternatives: <${r.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
    },
    buildAlternationAmbiguityError (r) {
        let e = /*#__PURE__*/ Jr$1(r.prefixPath, (i)=>$t(i)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx, n = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
        return n = n + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n;
    },
    buildEmptyRepetitionError (r) {
        let e = /*#__PURE__*/ We(r.repetition);
        return r.repetition.idx !== 0 && (e += r.repetition.idx), `The repetition <${e}> within Rule <${r.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
    },
    buildTokenNameError (r) {
        return "deprecated";
    },
    buildEmptyAlternationError (r) {
        return `Ambiguous empty alternative: <${r.emptyChoiceIdx + 1}> in <OR${r.alternation.idx}> inside <${r.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
    },
    buildTooManyAlternativesError (r) {
        return `An Alternation cannot have more than 256 alternatives:
<OR${r.alternation.idx}> inside <${r.topLevelRule.name}> Rule.
 has ${r.alternation.definition.length + 1} alternatives.`;
    },
    buildLeftRecursionError (r) {
        let e = r.topLevelRule.name, t = /*#__PURE__*/ Jr$1(r.leftRecursionPath, (s)=>s.name), n = `${e} --> ${t.concat([
            e
        ]).join(" --> ")}`;
        return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
    },
    buildInvalidRuleNameError (r) {
        return "deprecated";
    },
    buildDuplicateRuleNameError (r) {
        let e;
        return r.topLevelRule instanceof Me ? e = r.topLevelRule.name : e = r.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${r.grammarName}<-`;
    }
};
function Du(r, e) {
    let t = new dl(r, e);
    return t.resolveRefs(), t.errors;
}
m$1(Du, "resolveGrammar");
var dl = class extends De {
    static #_ = m$1(this, "GastRefResolverVisitor");
    constructor(e, t){
        super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
    }
    resolveRefs() {
        Zr$1(/*#__PURE__*/ Xr$1(this.nameToTopRule), (e)=>{
            this.currTopLevel = e, e.accept(this);
        });
    }
    visitNonTerminal(e) {
        let t = this.nameToTopRule[e.nonTerminalName];
        if (t) e.referencedRule = t;
        else {
            let n = /*#__PURE__*/ this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
            this.errors.push({
                message: n,
                type: ye.UNRESOLVED_SUBRULE_REF,
                ruleName: this.currTopLevel.name,
                unresolvedRefName: e.nonTerminalName
            });
        }
    }
};
var fl = class extends Nt {
    static #_ = m$1(this, "AbstractNextPossibleTokensWalker");
    constructor(e, t){
        super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = false, this.isAtEndOfPath = false;
    }
    startWalking() {
        if (this.found = false, this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");
        return this.ruleStack = /*#__PURE__*/ _f$1(this.path.ruleStack).reverse(), this.occurrenceStack = /*#__PURE__*/ _f$1(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
    }
    walk(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        this.found || super.walk(e, t);
    }
    walkProdRef(e, t, n) {
        if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
            let i = /*#__PURE__*/ t.concat(n);
            this.updateExpectedNext(), this.walk(e.referencedRule, i);
        }
    }
    updateExpectedNext() {
        Cr$1(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = true) : (this.nextProductionName = /*#__PURE__*/ this.ruleStack.pop(), this.nextProductionOccurrence = /*#__PURE__*/ this.occurrenceStack.pop());
    }
}, Js = class extends fl {
    static #_ = m$1(this, "NextAfterTokenWalker");
    constructor(e, t){
        super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
    }
    walkTerminal(e, t, n) {
        if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
            let i = /*#__PURE__*/ t.concat(n), s = new J({
                definition: i
            });
            this.possibleTokTypes = /*#__PURE__*/ ur(s), this.found = true;
        }
    }
}, Cn = class extends Nt {
    static #_ = m$1(this, "AbstractNextTerminalAfterProductionWalker");
    constructor(e, t){
        super(), this.topRule = e, this.occurrence = t, this.result = {
            token: void 0,
            occurrence: void 0,
            isEndOfRule: void 0
        };
    }
    startWalking() {
        return this.walk(this.topRule), this.result;
    }
}, Qs = class extends Cn {
    static #_ = m$1(this, "NextTerminalAfterManyWalker");
    walkMany(e, t, n) {
        if (e.idx === this.occurrence) {
            let i = /*#__PURE__*/ De$1(/*#__PURE__*/ t.concat(n));
            this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
        } else super.walkMany(e, t, n);
    }
}, Ii = class extends Cn {
    static #_ = m$1(this, "NextTerminalAfterManySepWalker");
    walkManySep(e, t, n) {
        if (e.idx === this.occurrence) {
            let i = /*#__PURE__*/ De$1(/*#__PURE__*/ t.concat(n));
            this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
        } else super.walkManySep(e, t, n);
    }
}, Zs = class extends Cn {
    static #_ = m$1(this, "NextTerminalAfterAtLeastOneWalker");
    walkAtLeastOne(e, t, n) {
        if (e.idx === this.occurrence) {
            let i = /*#__PURE__*/ De$1(/*#__PURE__*/ t.concat(n));
            this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
        } else super.walkAtLeastOne(e, t, n);
    }
}, Ni = class extends Cn {
    static #_ = m$1(this, "NextTerminalAfterAtLeastOneSepWalker");
    walkAtLeastOneSep(e, t, n) {
        if (e.idx === this.occurrence) {
            let i = /*#__PURE__*/ De$1(/*#__PURE__*/ t.concat(n));
            this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
        } else super.walkAtLeastOneSep(e, t, n);
    }
};
function ea(r, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    t = /*#__PURE__*/ _f$1(t);
    let n = [], i = 0;
    function s(l) {
        return l.concat(/*#__PURE__*/ Mi$1(r, i + 1));
    }
    m$1(s, "remainingPathWith");
    function o(l) {
        let c = /*#__PURE__*/ ea(/*#__PURE__*/ s(l), e, t);
        return n.concat(c);
    }
    for(m$1(o, "getAlternativesForProd"); t.length < e && i < r.length;){
        let l = r[i];
        if (l instanceof J) return o(l.definition);
        if (l instanceof H) return o(l.definition);
        if (l instanceof z) n = /*#__PURE__*/ o(l.definition);
        else if (l instanceof Q) {
            let c = /*#__PURE__*/ l.definition.concat([
                new F({
                    definition: l.definition
                })
            ]);
            return o(c);
        } else if (l instanceof Z) {
            let c = [
                new J({
                    definition: l.definition
                }),
                new F({
                    definition: /*#__PURE__*/ [
                        new D({
                            terminalType: l.separator
                        })
                    ].concat(l.definition)
                })
            ];
            return o(c);
        } else if (l instanceof q) {
            let c = /*#__PURE__*/ l.definition.concat([
                new F({
                    definition: /*#__PURE__*/ [
                        new D({
                            terminalType: l.separator
                        })
                    ].concat(l.definition)
                })
            ]);
            n = /*#__PURE__*/ o(c);
        } else if (l instanceof F) {
            let c = /*#__PURE__*/ l.definition.concat([
                new F({
                    definition: l.definition
                })
            ]);
            n = /*#__PURE__*/ o(c);
        } else {
            if (l instanceof X) return Zr$1(l.definition, (c)=>{
                Cr$1(c.definition) === false && (n = /*#__PURE__*/ o(c.definition));
            }), n;
            if (l instanceof D) t.push(l.terminalType);
            else throw Error("non exhaustive match");
        }
        i++;
    }
    return n.push({
        partialPath: t,
        suffixDef: /*#__PURE__*/ Mi$1(r, i)
    }), n;
}
m$1(ea, "possiblePathsFrom");
function ta(r, e, t, n) {
    let i = "EXIT_NONE_TERMINAL", s = [
        i
    ], o = "EXIT_ALTERNATIVE", l = false, c = e.length, u = c - n - 1, d = [], f = [];
    for(f.push({
        idx: -1,
        def: r,
        ruleStack: [],
        occurrenceStack: []
    }); !Cr$1(f);){
        let h = /*#__PURE__*/ f.pop();
        if (h === o) {
            l && Df(f).idx <= u && f.pop();
            continue;
        }
        let p = h.def, g = h.idx, y = h.ruleStack, v = h.occurrenceStack;
        if (Cr$1(p)) continue;
        let R = p[0];
        if (R === i) {
            let A = {
                idx: g,
                def: /*#__PURE__*/ Mi$1(p),
                ruleStack: /*#__PURE__*/ _i$1(y),
                occurrenceStack: /*#__PURE__*/ _i$1(v)
            };
            f.push(A);
        } else if (R instanceof D) if (g < c - 1) {
            let A = g + 1, x = e[A];
            if (t(x, R.terminalType)) {
                let P = {
                    idx: A,
                    def: /*#__PURE__*/ Mi$1(p),
                    ruleStack: y,
                    occurrenceStack: v
                };
                f.push(P);
            }
        } else if (g === c - 1) d.push({
            nextTokenType: R.terminalType,
            nextTokenOccurrence: R.idx,
            ruleStack: y,
            occurrenceStack: v
        }), l = true;
        else throw Error("non exhaustive match");
        else if (R instanceof H) {
            let A = /*#__PURE__*/ _f$1(y);
            A.push(R.nonTerminalName);
            let x = /*#__PURE__*/ _f$1(v);
            x.push(R.idx);
            let P = {
                idx: g,
                def: /*#__PURE__*/ R.definition.concat(s, /*#__PURE__*/ Mi$1(p)),
                ruleStack: A,
                occurrenceStack: x
            };
            f.push(P);
        } else if (R instanceof z) {
            let A = {
                idx: g,
                def: /*#__PURE__*/ Mi$1(p),
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(A), f.push(o);
            let x = {
                idx: g,
                def: /*#__PURE__*/ R.definition.concat(/*#__PURE__*/ Mi$1(p)),
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(x);
        } else if (R instanceof Q) {
            let A = new F({
                definition: R.definition,
                idx: R.idx
            }), x = /*#__PURE__*/ R.definition.concat([
                A
            ], /*#__PURE__*/ Mi$1(p)), P = {
                idx: g,
                def: x,
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(P);
        } else if (R instanceof Z) {
            let A = new D({
                terminalType: R.separator
            }), x = new F({
                definition: /*#__PURE__*/ [
                    A
                ].concat(R.definition),
                idx: R.idx
            }), P = /*#__PURE__*/ R.definition.concat([
                x
            ], /*#__PURE__*/ Mi$1(p)), b = {
                idx: g,
                def: P,
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(b);
        } else if (R instanceof q) {
            let A = {
                idx: g,
                def: /*#__PURE__*/ Mi$1(p),
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(A), f.push(o);
            let x = new D({
                terminalType: R.separator
            }), P = new F({
                definition: /*#__PURE__*/ [
                    x
                ].concat(R.definition),
                idx: R.idx
            }), b = /*#__PURE__*/ R.definition.concat([
                P
            ], /*#__PURE__*/ Mi$1(p)), Te = {
                idx: g,
                def: b,
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(Te);
        } else if (R instanceof F) {
            let A = {
                idx: g,
                def: /*#__PURE__*/ Mi$1(p),
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(A), f.push(o);
            let x = new F({
                definition: R.definition,
                idx: R.idx
            }), P = /*#__PURE__*/ R.definition.concat([
                x
            ], /*#__PURE__*/ Mi$1(p)), b = {
                idx: g,
                def: P,
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(b);
        } else if (R instanceof X) for(let A = R.definition.length - 1; A >= 0; A--){
            let x = R.definition[A], P = {
                idx: g,
                def: /*#__PURE__*/ x.definition.concat(/*#__PURE__*/ Mi$1(p)),
                ruleStack: y,
                occurrenceStack: v
            };
            f.push(P), f.push(o);
        }
        else if (R instanceof J) f.push({
            idx: g,
            def: /*#__PURE__*/ R.definition.concat(/*#__PURE__*/ Mi$1(p)),
            ruleStack: y,
            occurrenceStack: v
        });
        else if (R instanceof Me) f.push(/*#__PURE__*/ bp(R, g, y, v));
        else throw Error("non exhaustive match");
    }
    return d;
}
m$1(ta, "nextPossibleTokensAfter");
function bp(r, e, t, n) {
    let i = /*#__PURE__*/ _f$1(t);
    i.push(r.name);
    let s = /*#__PURE__*/ _f$1(n);
    return s.push(1), {
        idx: e,
        def: r.definition,
        ruleStack: i,
        occurrenceStack: s
    };
}
m$1(bp, "expandTopLevelRule");
var ae;
(function(r) {
    r[r.OPTION = 0] = "OPTION", r[r.REPETITION = 1] = "REPETITION", r[r.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", r[r.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", r[r.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", r[r.ALTERNATION = 5] = "ALTERNATION";
})(ae || (ae = {}));
function Ci(r) {
    if (r instanceof z || r === "Option") return ae.OPTION;
    if (r instanceof F || r === "Repetition") return ae.REPETITION;
    if (r instanceof Q || r === "RepetitionMandatory") return ae.REPETITION_MANDATORY;
    if (r instanceof Z || r === "RepetitionMandatoryWithSeparator") return ae.REPETITION_MANDATORY_WITH_SEPARATOR;
    if (r instanceof q || r === "RepetitionWithSeparator") return ae.REPETITION_WITH_SEPARATOR;
    if (r instanceof X || r === "Alternation") return ae.ALTERNATION;
    throw Error("non exhaustive match");
}
m$1(Ci, "getProdType");
function na(r) {
    let { occurrence: e, rule: t, prodType: n, maxLookahead: i } = r, s = /*#__PURE__*/ Ci(n);
    return s === ae.ALTERNATION ? Sn(e, t, i) : $n(e, t, s, i);
}
m$1(na, "getLookaheadPaths");
function Uu(r, e, t, n, i, s) {
    let o = /*#__PURE__*/ Sn(r, e, t), l = ju(o) ? In : Ct;
    return s(o, n, l, i);
}
m$1(Uu, "buildLookaheadFuncForOr");
function Gu(r, e, t, n, i, s) {
    let o = /*#__PURE__*/ $n(r, e, i, t), l = ju(o) ? In : Ct;
    return s(o[0], l, n);
}
m$1(Gu, "buildLookaheadFuncForOptionalProd");
function Bu(r, e, t, n) {
    let i = r.length, s = /*#__PURE__*/ Ui$1(r, (o)=>Ui$1(o, (l)=>l.length === 1));
    if (e) return function(o) {
        let l = /*#__PURE__*/ Jr$1(o, (c)=>c.GATE);
        for(let c = 0; c < i; c++){
            let u = r[c], d = u.length, f = l[c];
            if (!(f !== void 0 && f.call(this) === false)) e: for(let h = 0; h < d; h++){
                let p = u[h], g = p.length;
                for(let y = 0; y < g; y++){
                    let v = /*#__PURE__*/ this.LA(y + 1);
                    if (t(v, p[y]) === false) continue e;
                }
                return c;
            }
        }
    };
    if (s && !n) {
        let o = /*#__PURE__*/ Jr$1(r, (c)=>Qr$1(c)), l = /*#__PURE__*/ Rn$1(o, (c, u, d)=>(Zr$1(u, (f)=>{
                fm$1(c, f.tokenTypeIdx) || (c[f.tokenTypeIdx] = d), Zr$1(f.categoryMatches, (h)=>{
                    fm$1(c, h) || (c[h] = d);
                });
            }), c), {});
        return function() {
            let c = /*#__PURE__*/ this.LA(1);
            return l[c.tokenTypeIdx];
        };
    } else return function() {
        for(let o = 0; o < i; o++){
            let l = r[o], c = l.length;
            e: for(let u = 0; u < c; u++){
                let d = l[u], f = d.length;
                for(let h = 0; h < f; h++){
                    let p = /*#__PURE__*/ this.LA(h + 1);
                    if (t(p, d[h]) === false) continue e;
                }
                return o;
            }
        }
    };
}
m$1(Bu, "buildAlternativesLookAheadFunc");
function Wu(r, e, t) {
    let n = /*#__PURE__*/ Ui$1(r, (s)=>s.length === 1), i = r.length;
    if (n && !t) {
        let s = /*#__PURE__*/ Qr$1(r);
        if (s.length === 1 && Cr$1(s[0].categoryMatches)) {
            let l = s[0].tokenTypeIdx;
            return function() {
                return this.LA(1).tokenTypeIdx === l;
            };
        } else {
            let o = /*#__PURE__*/ Rn$1(s, (l, c, u)=>(l[c.tokenTypeIdx] = true, Zr$1(c.categoryMatches, (d)=>{
                    l[d] = true;
                }), l), []);
            return function() {
                let l = /*#__PURE__*/ this.LA(1);
                return o[l.tokenTypeIdx] === true;
            };
        }
    } else return function() {
        e: for(let s = 0; s < i; s++){
            let o = r[s], l = o.length;
            for(let c = 0; c < l; c++){
                let u = /*#__PURE__*/ this.LA(c + 1);
                if (e(u, o[c]) === false) continue e;
            }
            return true;
        }
        return false;
    };
}
m$1(Wu, "buildSingleAlternativeLookaheadFunction");
var pl = class extends Nt {
    static #_ = m$1(this, "RestDefinitionFinderWalker");
    constructor(e, t, n){
        super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = n;
    }
    startWalking() {
        return this.walk(this.topProd), this.restDef;
    }
    checkIsTarget(e, t, n, i) {
        return e.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = /*#__PURE__*/ n.concat(i), true) : false;
    }
    walkOption(e, t, n) {
        this.checkIsTarget(e, ae.OPTION, t, n) || super.walkOption(e, t, n);
    }
    walkAtLeastOne(e, t, n) {
        this.checkIsTarget(e, ae.REPETITION_MANDATORY, t, n) || super.walkOption(e, t, n);
    }
    walkAtLeastOneSep(e, t, n) {
        this.checkIsTarget(e, ae.REPETITION_MANDATORY_WITH_SEPARATOR, t, n) || super.walkOption(e, t, n);
    }
    walkMany(e, t, n) {
        this.checkIsTarget(e, ae.REPETITION, t, n) || super.walkOption(e, t, n);
    }
    walkManySep(e, t, n) {
        this.checkIsTarget(e, ae.REPETITION_WITH_SEPARATOR, t, n) || super.walkOption(e, t, n);
    }
}, ra = class extends De {
    static #_ = m$1(this, "InsideDefinitionFinderVisitor");
    constructor(e, t, n){
        super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = n, this.result = [];
    }
    checkIsTarget(e, t) {
        e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
    }
    visitOption(e) {
        this.checkIsTarget(e, ae.OPTION);
    }
    visitRepetition(e) {
        this.checkIsTarget(e, ae.REPETITION);
    }
    visitRepetitionMandatory(e) {
        this.checkIsTarget(e, ae.REPETITION_MANDATORY);
    }
    visitRepetitionMandatoryWithSeparator(e) {
        this.checkIsTarget(e, ae.REPETITION_MANDATORY_WITH_SEPARATOR);
    }
    visitRepetitionWithSeparator(e) {
        this.checkIsTarget(e, ae.REPETITION_WITH_SEPARATOR);
    }
    visitAlternation(e) {
        this.checkIsTarget(e, ae.ALTERNATION);
    }
};
function Fu(r) {
    let e = new Array(r);
    for(let t = 0; t < r; t++)e[t] = [];
    return e;
}
m$1(Fu, "initializeArrayOfArrays");
function hl(r) {
    let e = [
        ""
    ];
    for(let t = 0; t < r.length; t++){
        let n = r[t], i = [];
        for(let s = 0; s < e.length; s++){
            let o = e[s];
            i.push(o + "_" + n.tokenTypeIdx);
            for(let l = 0; l < n.categoryMatches.length; l++){
                let c = "_" + n.categoryMatches[l];
                i.push(o + c);
            }
        }
        e = i;
    }
    return e;
}
m$1(hl, "pathToHashKeys");
function Mp(r, e, t) {
    for(let n = 0; n < r.length; n++){
        if (n === t) continue;
        let i = r[n];
        for(let s = 0; s < e.length; s++){
            let o = e[s];
            if (i[o] === true) return false;
        }
    }
    return true;
}
m$1(Mp, "isUniquePrefixHash");
function Ku(r, e) {
    let t = /*#__PURE__*/ Jr$1(r, (o)=>ea([
            o
        ], 1)), n = /*#__PURE__*/ Fu(t.length), i = /*#__PURE__*/ Jr$1(t, (o)=>{
        let l = {};
        return Zr$1(o, (c)=>{
            let u = /*#__PURE__*/ hl(c.partialPath);
            Zr$1(u, (d)=>{
                l[d] = true;
            });
        }), l;
    }), s = t;
    for(let o = 1; o <= e; o++){
        let l = s;
        s = /*#__PURE__*/ Fu(l.length);
        for(let c = 0; c < l.length; c++){
            let u = l[c];
            for(let d = 0; d < u.length; d++){
                let f = u[d].partialPath, h = u[d].suffixDef, p = /*#__PURE__*/ hl(f);
                if (Mp(i, p, c) || Cr$1(h) || f.length === e) {
                    let y = n[c];
                    if (ia(y, f) === false) {
                        y.push(f);
                        for(let v = 0; v < p.length; v++){
                            let R = p[v];
                            i[c][R] = true;
                        }
                    }
                } else {
                    let y = /*#__PURE__*/ ea(h, o + 1, f);
                    s[c] = /*#__PURE__*/ s[c].concat(y), Zr$1(y, (v)=>{
                        let R = /*#__PURE__*/ hl(v.partialPath);
                        Zr$1(R, (A)=>{
                            i[c][A] = true;
                        });
                    });
                }
            }
        }
    }
    return n;
}
m$1(Ku, "lookAheadSequenceFromAlternatives");
function Sn(r, e, t, n) {
    let i = new ra(r, ae.ALTERNATION, n);
    return e.accept(i), Ku(i.result, t);
}
m$1(Sn, "getLookaheadPathsForOr");
function $n(r, e, t, n) {
    let i = new ra(r, t);
    e.accept(i);
    let s = i.result, l = /*#__PURE__*/ new pl(e, r, t).startWalking(), c = new J({
        definition: s
    }), u = new J({
        definition: l
    });
    return Ku([
        c,
        u
    ], n);
}
m$1($n, "getLookaheadPathsForOptionalProd");
function ia(r, e) {
    e: for(let t = 0; t < r.length; t++){
        let n = r[t];
        if (n.length === e.length) {
            for(let i = 0; i < n.length; i++){
                let s = e[i], o = n[i];
                if ((s === o || o.categoryMatchesMap[s.tokenTypeIdx] !== void 0) === false) continue e;
            }
            return true;
        }
    }
    return false;
}
m$1(ia, "containsPath");
function Vu(r, e) {
    return r.length < e.length && Ui$1(r, (t, n)=>{
        let i = e[n];
        return t === i || i.categoryMatchesMap[t.tokenTypeIdx];
    });
}
m$1(Vu, "isStrictPrefixOfPath");
function ju(r) {
    return Ui$1(r, (e)=>Ui$1(e, (t)=>Ui$1(t, (n)=>Cr$1(n.categoryMatches))));
}
m$1(ju, "areTokenCategoriesNotUsed");
function Hu(r) {
    let e = /*#__PURE__*/ r.lookaheadStrategy.validate({
        rules: r.rules,
        tokenTypes: r.tokenTypes,
        grammarName: r.grammarName
    });
    return Jr$1(e, (t)=>Object.assign({
            type: ye.CUSTOM_LOOKAHEAD_VALIDATION
        }, t));
}
m$1(Hu, "validateLookahead");
function zu(r, e, t, n) {
    let i = /*#__PURE__*/ zi$1(r, (c)=>Dp(c, t)), s = /*#__PURE__*/ Kp(r, e, t), o = /*#__PURE__*/ zi$1(r, (c)=>Gp(c, t)), l = /*#__PURE__*/ zi$1(r, (c)=>Up(c, r, n, t));
    return i.concat(s, o, l);
}
m$1(zu, "validateGrammar");
function Dp(r, e) {
    let t = new ml;
    r.accept(t);
    let n = t.allProductions, i = /*#__PURE__*/ Vi$1(n, Fp), s = /*#__PURE__*/ Tm$1(i, (l)=>l.length > 1);
    return Jr$1(/*#__PURE__*/ Xr$1(s), (l)=>{
        let c = /*#__PURE__*/ De$1(l), u = /*#__PURE__*/ e.buildDuplicateFoundError(r, l), d = /*#__PURE__*/ We(c), f = {
            message: u,
            type: ye.DUPLICATE_PRODUCTIONS,
            ruleName: r.name,
            dslName: d,
            occurrence: c.idx
        }, h = /*#__PURE__*/ qu(c);
        return h && (f.parameter = h), f;
    });
}
m$1(Dp, "validateDuplicateProductions");
function Fp(r) {
    return `${We(r)}_#_${r.idx}_#_${qu(r)}`;
}
m$1(Fp, "identifyProductionForDuplicates");
function qu(r) {
    return r instanceof D ? r.terminalType.name : r instanceof H ? r.nonTerminalName : "";
}
m$1(qu, "getExtraProductionArgument");
var ml = class extends De {
    static #_ = m$1(this, "OccurrenceValidationCollector");
    constructor(){
        super(...arguments), this.allProductions = [];
    }
    visitNonTerminal(e) {
        this.allProductions.push(e);
    }
    visitOption(e) {
        this.allProductions.push(e);
    }
    visitRepetitionWithSeparator(e) {
        this.allProductions.push(e);
    }
    visitRepetitionMandatory(e) {
        this.allProductions.push(e);
    }
    visitRepetitionMandatoryWithSeparator(e) {
        this.allProductions.push(e);
    }
    visitRepetition(e) {
        this.allProductions.push(e);
    }
    visitAlternation(e) {
        this.allProductions.push(e);
    }
    visitTerminal(e) {
        this.allProductions.push(e);
    }
};
function Up(r, e, t, n) {
    let i = [];
    if (Rn$1(e, (o, l)=>l.name === r.name ? o + 1 : o, 0) > 1) {
        let o = /*#__PURE__*/ n.buildDuplicateRuleNameError({
            topLevelRule: r,
            grammarName: t
        });
        i.push({
            message: o,
            type: ye.DUPLICATE_RULE_NAME,
            ruleName: r.name
        });
    }
    return i;
}
m$1(Up, "validateRuleDoesNotAlreadyExist");
function Xu(r, e, t) {
    let n = [], i;
    return pm$1(e, r) || (i = `Invalid rule override, rule: ->${r}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, n.push({
        message: i,
        type: ye.INVALID_RULE_OVERRIDE,
        ruleName: r
    })), n;
}
m$1(Xu, "validateRuleIsOverridden");
function yl(r, e, t) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    let i = [], s = /*#__PURE__*/ sa(e.definition);
    if (Cr$1(s)) return [];
    {
        let o = r.name;
        pm$1(s, r) && i.push({
            message: /*#__PURE__*/ t.buildLeftRecursionError({
                topLevelRule: r,
                leftRecursionPath: n
            }),
            type: ye.LEFT_RECURSION,
            ruleName: o
        });
        let c = /*#__PURE__*/ Ri$1(s, /*#__PURE__*/ n.concat([
            r
        ])), u = /*#__PURE__*/ zi$1(c, (d)=>{
            let f = /*#__PURE__*/ _f$1(n);
            return f.push(d), yl(r, d, t, f);
        });
        return i.concat(u);
    }
}
m$1(yl, "validateNoLeftRecursion");
function sa(r) {
    let e = [];
    if (Cr$1(r)) return e;
    let t = /*#__PURE__*/ De$1(r);
    if (t instanceof H) e.push(t.referencedRule);
    else if (t instanceof J || t instanceof z || t instanceof Q || t instanceof Z || t instanceof q || t instanceof F) e = /*#__PURE__*/ e.concat(/*#__PURE__*/ sa(t.definition));
    else if (t instanceof X) e = /*#__PURE__*/ Qr$1(/*#__PURE__*/ Jr$1(t.definition, (s)=>sa(s.definition)));
    else if (!(t instanceof D)) throw Error("non exhaustive match");
    let n = /*#__PURE__*/ cr(t), i = r.length > 1;
    if (n && i) {
        let s = /*#__PURE__*/ Mi$1(r);
        return e.concat(/*#__PURE__*/ sa(s));
    } else return e;
}
m$1(sa, "getFirstNoneTerminal");
var Si = class extends De {
    static #_ = m$1(this, "OrCollector");
    constructor(){
        super(...arguments), this.alternations = [];
    }
    visitAlternation(e) {
        this.alternations.push(e);
    }
};
function Yu(r, e) {
    let t = new Si;
    r.accept(t);
    let n = t.alternations;
    return zi$1(n, (s)=>{
        let o = /*#__PURE__*/ _i$1(s.definition);
        return zi$1(o, (l, c)=>{
            let u = /*#__PURE__*/ ta([
                l
            ], [], Ct, 1);
            return Cr$1(u) ? [
                {
                    message: /*#__PURE__*/ e.buildEmptyAlternationError({
                        topLevelRule: r,
                        alternation: s,
                        emptyChoiceIdx: c
                    }),
                    type: ye.NONE_LAST_EMPTY_ALT,
                    ruleName: r.name,
                    occurrence: s.idx,
                    alternative: c + 1
                }
            ] : [];
        });
    });
}
m$1(Yu, "validateEmptyOrAlternative");
function Ju(r, e, t) {
    let n = new Si;
    r.accept(n);
    let i = n.alternations;
    return i = /*#__PURE__*/ Qm(i, (o)=>o.ignoreAmbiguities === true), zi$1(i, (o)=>{
        let l = o.idx, c = o.maxLookahead || e, u = /*#__PURE__*/ Sn(l, r, c, o), d = /*#__PURE__*/ Bp(u, o, r, t), f = /*#__PURE__*/ Wp(u, o, r, t);
        return d.concat(f);
    });
}
m$1(Ju, "validateAmbiguousAlternationAlternatives");
var gl = class extends De {
    static #_ = m$1(this, "RepetitionCollector");
    constructor(){
        super(...arguments), this.allProductions = [];
    }
    visitRepetitionWithSeparator(e) {
        this.allProductions.push(e);
    }
    visitRepetitionMandatory(e) {
        this.allProductions.push(e);
    }
    visitRepetitionMandatoryWithSeparator(e) {
        this.allProductions.push(e);
    }
    visitRepetition(e) {
        this.allProductions.push(e);
    }
};
function Gp(r, e) {
    let t = new Si;
    r.accept(t);
    let n = t.alternations;
    return zi$1(n, (s)=>s.definition.length > 255 ? [
            {
                message: /*#__PURE__*/ e.buildTooManyAlternativesError({
                    topLevelRule: r,
                    alternation: s
                }),
                type: ye.TOO_MANY_ALTS,
                ruleName: r.name,
                occurrence: s.idx
            }
        ] : []);
}
m$1(Gp, "validateTooManyAlts");
function Qu(r, e, t) {
    let n = [];
    return Zr$1(r, (i)=>{
        let s = new gl;
        i.accept(s);
        let o = s.allProductions;
        Zr$1(o, (l)=>{
            let c = /*#__PURE__*/ Ci(l), u = l.maxLookahead || e, d = l.idx, h = $n(d, i, c, u)[0];
            if (Cr$1(/*#__PURE__*/ Qr$1(h))) {
                let p = /*#__PURE__*/ t.buildEmptyRepetitionError({
                    topLevelRule: i,
                    repetition: l
                });
                n.push({
                    message: p,
                    type: ye.NO_NON_EMPTY_LOOKAHEAD,
                    ruleName: i.name
                });
            }
        });
    }), n;
}
m$1(Qu, "validateSomeNonEmptyLookaheadPath");
function Bp(r, e, t, n) {
    let i = [], s = /*#__PURE__*/ Rn$1(r, (l, c, u)=>(e.definition[u].ignoreAmbiguities === true || Zr$1(c, (d)=>{
            let f = [
                u
            ];
            Zr$1(r, (h, p)=>{
                u !== p && ia(h, d) && e.definition[p].ignoreAmbiguities !== true && f.push(p);
            }), f.length > 1 && !ia(i, d) && (i.push(d), l.push({
                alts: f,
                path: d
            }));
        }), l), []);
    return Jr$1(s, (l)=>{
        let c = /*#__PURE__*/ Jr$1(l.alts, (d)=>d + 1);
        return {
            message: /*#__PURE__*/ n.buildAlternationAmbiguityError({
                topLevelRule: t,
                alternation: e,
                ambiguityIndices: c,
                prefixPath: l.path
            }),
            type: ye.AMBIGUOUS_ALTS,
            ruleName: t.name,
            occurrence: e.idx,
            alternatives: l.alts
        };
    });
}
m$1(Bp, "checkAlternativesAmbiguities");
function Wp(r, e, t, n) {
    let i = /*#__PURE__*/ Rn$1(r, (o, l, c)=>{
        let u = /*#__PURE__*/ Jr$1(l, (d)=>({
                idx: c,
                path: d
            }));
        return o.concat(u);
    }, []);
    return Ai$1(/*#__PURE__*/ zi$1(i, (o)=>{
        if (e.definition[o.idx].ignoreAmbiguities === true) return [];
        let c = o.idx, u = o.path, d = /*#__PURE__*/ fn$1(i, (h)=>e.definition[h.idx].ignoreAmbiguities !== true && h.idx < c && Vu(h.path, u));
        return Jr$1(d, (h)=>{
            let p = [
                h.idx + 1,
                c + 1
            ], g = e.idx === 0 ? "" : e.idx;
            return {
                message: /*#__PURE__*/ n.buildAlternationPrefixAmbiguityError({
                    topLevelRule: t,
                    alternation: e,
                    ambiguityIndices: p,
                    prefixPath: h.path
                }),
                type: ye.AMBIGUOUS_PREFIX_ALTS,
                ruleName: t.name,
                occurrence: g,
                alternatives: p
            };
        });
    }));
}
m$1(Wp, "checkPrefixAlternativesAmbiguities");
function Kp(r, e, t) {
    let n = [], i = /*#__PURE__*/ Jr$1(e, (s)=>s.name);
    return Zr$1(r, (s)=>{
        let o = s.name;
        if (pm$1(i, o)) {
            let l = /*#__PURE__*/ t.buildNamespaceConflictError(s);
            n.push({
                message: l,
                type: ye.CONFLICT_TOKENS_RULES_NAMESPACE,
                ruleName: o
            });
        }
    }), n;
}
m$1(Kp, "checkTerminalAndNoneTerminalsNameSpace");
function Zu(r) {
    let e = /*#__PURE__*/ Nf$1(r, {
        errMsgProvider: Mu
    }), t = {};
    return Zr$1(r.rules, (n)=>{
        t[n.name] = n;
    }), Du(t, e.errMsgProvider);
}
m$1(Zu, "resolveGrammar");
function ed(r) {
    return r = /*#__PURE__*/ Nf$1(r, {
        errMsgProvider: it
    }), zu(r.rules, r.tokenTypes, r.errMsgProvider, r.grammarName);
}
m$1(ed, "validateGrammar");
var td = "MismatchedTokenException", rd = "NoViableAltException", nd = "EarlyExitException", id = "NotAllInputParsedException", sd = [
    td,
    rd,
    nd,
    id
];
Object.freeze(sd);
function Wt(r) {
    return pm$1(sd, r.name);
}
m$1(Wt, "isRecognitionException");
var _n = class extends Error {
    static #_ = m$1(this, "RecognitionException");
    constructor(e, t){
        super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }
}, fr = class extends _n {
    static #_ = m$1(this, "MismatchedTokenException");
    constructor(e, t, n){
        super(e, t), this.previousToken = n, this.name = td;
    }
}, $i = class extends _n {
    static #_ = m$1(this, "NoViableAltException");
    constructor(e, t, n){
        super(e, t), this.previousToken = n, this.name = rd;
    }
}, _i = class extends _n {
    static #_ = m$1(this, "NotAllInputParsedException");
    constructor(e, t){
        super(e, t), this.name = id;
    }
}, wi = class extends _n {
    static #_ = m$1(this, "EarlyExitException");
    constructor(e, t, n){
        super(e, t), this.previousToken = n, this.name = nd;
    }
};
var Tl = {}, Rl = "InRuleRecoveryException", xl = class extends Error {
    static #_ = m$1(this, "InRuleRecoveryException");
    constructor(e){
        super(e), this.name = Rl;
    }
}, aa = class {
    static #_ = m$1(this, "Recoverable");
    initRecoverable(e) {
        this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = fm$1(e, "recoveryEnabled") ? e.recoveryEnabled : Fe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = Vp);
    }
    getTokenToInsert(e) {
        let t = /*#__PURE__*/ _t(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
        return t.isInsertedInRecovery = true, t;
    }
    canTokenTypeBeInsertedInRecovery(e) {
        return true;
    }
    canTokenTypeBeDeletedInRecovery(e) {
        return true;
    }
    tryInRepetitionRecovery(e, t, n, i) {
        let s = /*#__PURE__*/ this.findReSyncTokenType(), o = /*#__PURE__*/ this.exportLexerState(), l = [], c = false, u = /*#__PURE__*/ this.LA(1), d = /*#__PURE__*/ this.LA(1), f = /*#__PURE__*/ m$1(()=>{
            let h = /*#__PURE__*/ this.LA(0), p = /*#__PURE__*/ this.errorMessageProvider.buildMismatchTokenMessage({
                expected: i,
                actual: u,
                previous: h,
                ruleName: /*#__PURE__*/ this.getCurrRuleFullName()
            }), g = new fr(p, u, this.LA(0));
            g.resyncedTokens = /*#__PURE__*/ _i$1(l), this.SAVE_ERROR(g);
        }, "generateErrorMessage");
        for(; !c;)if (this.tokenMatcher(d, i)) {
            f();
            return;
        } else if (n.call(this)) {
            f(), e.apply(this, t);
            return;
        } else this.tokenMatcher(d, s) ? c = true : (d = /*#__PURE__*/ this.SKIP_TOKEN(), this.addToResyncTokens(d, l));
        this.importLexerState(o);
    }
    shouldInRepetitionRecoveryBeTried(e, t, n) {
        return !(n === false || this.tokenMatcher(/*#__PURE__*/ this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, /*#__PURE__*/ this.getFollowsForInRuleRecovery(e, t)));
    }
    getFollowsForInRuleRecovery(e, t) {
        let n = /*#__PURE__*/ this.getCurrentGrammarPath(e, t);
        return this.getNextPossibleTokenTypes(n);
    }
    tryInRuleRecovery(e, t) {
        if (this.canRecoverWithSingleTokenInsertion(e, t)) return this.getTokenToInsert(e);
        if (this.canRecoverWithSingleTokenDeletion(e)) {
            let n = /*#__PURE__*/ this.SKIP_TOKEN();
            return this.consumeToken(), n;
        }
        throw new xl("sad sad panda");
    }
    canPerformInRuleRecovery(e, t) {
        return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
    }
    canRecoverWithSingleTokenInsertion(e, t) {
        if (!this.canTokenTypeBeInsertedInRecovery(e) || Cr$1(t)) return false;
        let n = /*#__PURE__*/ this.LA(1);
        return Ki$1(t, (s)=>this.tokenMatcher(n, s)) !== void 0;
    }
    canRecoverWithSingleTokenDeletion(e) {
        return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(/*#__PURE__*/ this.LA(2), e) : false;
    }
    isInCurrentRuleReSyncSet(e) {
        let t = /*#__PURE__*/ this.getCurrFollowKey(), n = /*#__PURE__*/ this.getFollowSetFromFollowKey(t);
        return pm$1(n, e);
    }
    findReSyncTokenType() {
        let e = /*#__PURE__*/ this.flattenFollowSet(), t = /*#__PURE__*/ this.LA(1), n = 2;
        for(;;){
            let i = /*#__PURE__*/ Ki$1(e, (s)=>ki(t, s));
            if (i !== void 0) return i;
            t = /*#__PURE__*/ this.LA(n), n++;
        }
    }
    getCurrFollowKey() {
        if (this.RULE_STACK.length === 1) return Tl;
        let e = /*#__PURE__*/ this.getLastExplicitRuleShortName(), t = /*#__PURE__*/ this.getLastExplicitRuleOccurrenceIndex(), n = /*#__PURE__*/ this.getPreviousExplicitRuleShortName();
        return {
            ruleName: /*#__PURE__*/ this.shortRuleNameToFullName(e),
            idxInCallingRule: t,
            inRule: /*#__PURE__*/ this.shortRuleNameToFullName(n)
        };
    }
    buildFullFollowKeyStack() {
        let e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
        return Jr$1(e, (n, i)=>i === 0 ? Tl : {
                ruleName: /*#__PURE__*/ this.shortRuleNameToFullName(n),
                idxInCallingRule: t[i],
                inRule: /*#__PURE__*/ this.shortRuleNameToFullName(e[i - 1])
            });
    }
    flattenFollowSet() {
        let e = /*#__PURE__*/ Jr$1(/*#__PURE__*/ this.buildFullFollowKeyStack(), (t)=>this.getFollowSetFromFollowKey(t));
        return Qr$1(e);
    }
    getFollowSetFromFollowKey(e) {
        if (e === Tl) return [
            qe
        ];
        let t = e.ruleName + e.idxInCallingRule + js + e.inRule;
        return this.resyncFollows[t];
    }
    addToResyncTokens(e, t) {
        return this.tokenMatcher(e, qe) || t.push(e), t;
    }
    reSyncTo(e) {
        let t = [], n = /*#__PURE__*/ this.LA(1);
        for(; this.tokenMatcher(n, e) === false;)n = /*#__PURE__*/ this.SKIP_TOKEN(), this.addToResyncTokens(n, t);
        return _i$1(t);
    }
    attemptInRepetitionRecovery(e, t, n, i, s, o, l) {}
    getCurrentGrammarPath(e, t) {
        let n = /*#__PURE__*/ this.getHumanReadableRuleStack(), i = /*#__PURE__*/ _f$1(this.RULE_OCCURRENCE_STACK);
        return {
            ruleStack: n,
            occurrenceStack: i,
            lastTok: e,
            lastTokOccurrence: t
        };
    }
    getHumanReadableRuleStack() {
        return Jr$1(this.RULE_STACK, (e)=>this.shortRuleNameToFullName(e));
    }
};
function Vp(r, e, t, n, i, s, o) {
    let l = /*#__PURE__*/ this.getKeyForAutomaticLookahead(n, i), c = this.firstAfterRepMap[l];
    if (c === void 0) {
        let h = /*#__PURE__*/ this.getCurrRuleFullName(), p = this.getGAstProductions()[h];
        c = /*#__PURE__*/ new s(p, i).startWalking(), this.firstAfterRepMap[l] = c;
    }
    let u = c.token, d = c.occurrence, f = c.isEndOfRule;
    this.RULE_STACK.length === 1 && f && u === void 0 && (u = qe, d = 1), !(u === void 0 || d === void 0) && this.shouldInRepetitionRecoveryBeTried(u, d, o) && this.tryInRepetitionRecovery(r, e, t, u);
}
m$1(Vp, "attemptInRepetitionRecovery");
function oa(r, e, t) {
    return t | e | r;
}
m$1(oa, "getKeyForAutomaticLookahead");
var Lt = class {
    static #_ = m$1(this, "LLkLookaheadStrategy");
    constructor(e){
        var t;
        this.maxLookahead = (t = e?.maxLookahead) !== null && t !== void 0 ? t : Fe.maxLookahead;
    }
    validate(e) {
        let t = /*#__PURE__*/ this.validateNoLeftRecursion(e.rules);
        if (Cr$1(t)) {
            let n = /*#__PURE__*/ this.validateEmptyOrAlternatives(e.rules), i = /*#__PURE__*/ this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = /*#__PURE__*/ this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
            return [
                ...t,
                ...n,
                ...i,
                ...s
            ];
        }
        return t;
    }
    validateNoLeftRecursion(e) {
        return zi$1(e, (t)=>yl(t, t, it));
    }
    validateEmptyOrAlternatives(e) {
        return zi$1(e, (t)=>Yu(t, it));
    }
    validateAmbiguousAlternationAlternatives(e, t) {
        return zi$1(e, (n)=>Ju(n, t, it));
    }
    validateSomeNonEmptyLookaheadPath(e, t) {
        return Qu(e, t, it);
    }
    buildLookaheadForAlternation(e) {
        return Uu(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, Bu);
    }
    buildLookaheadForOptional(e) {
        return Gu(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, /*#__PURE__*/ Ci(e.prodType), Wu);
    }
};
var ca = class {
    static #_ = m$1(this, "LooksAhead");
    initLooksAhead(e) {
        this.dynamicTokensEnabled = fm$1(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Fe.dynamicTokensEnabled, this.maxLookahead = fm$1(e, "maxLookahead") ? e.maxLookahead : Fe.maxLookahead, this.lookaheadStrategy = fm$1(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Lt({
            maxLookahead: this.maxLookahead
        }), this.lookAheadFuncsCache = new Map;
    }
    preComputeLookaheadFunctions(e) {
        Zr$1(e, (t)=>{
            this.TRACE_INIT(`${t.name} Rule Lookahead`, ()=>{
                let { alternation: n, repetition: i, option: s, repetitionMandatory: o, repetitionMandatoryWithSeparator: l, repetitionWithSeparator: c } = jp(t);
                Zr$1(n, (u)=>{
                    let d = u.idx === 0 ? "" : u.idx;
                    this.TRACE_INIT(`${We(u)}${d}`, ()=>{
                        let f = /*#__PURE__*/ this.lookaheadStrategy.buildLookaheadForAlternation({
                            prodOccurrence: u.idx,
                            rule: t,
                            maxLookahead: u.maxLookahead || this.maxLookahead,
                            hasPredicates: u.hasPredicates,
                            dynamicTokensEnabled: this.dynamicTokensEnabled
                        }), h = /*#__PURE__*/ oa(this.fullRuleNameToShort[t.name], 256, u.idx);
                        this.setLaFuncCache(h, f);
                    });
                }), Zr$1(i, (u)=>{
                    this.computeLookaheadFunc(t, u.idx, 768, "Repetition", u.maxLookahead, /*#__PURE__*/ We(u));
                }), Zr$1(s, (u)=>{
                    this.computeLookaheadFunc(t, u.idx, 512, "Option", u.maxLookahead, /*#__PURE__*/ We(u));
                }), Zr$1(o, (u)=>{
                    this.computeLookaheadFunc(t, u.idx, 1024, "RepetitionMandatory", u.maxLookahead, /*#__PURE__*/ We(u));
                }), Zr$1(l, (u)=>{
                    this.computeLookaheadFunc(t, u.idx, 1536, "RepetitionMandatoryWithSeparator", u.maxLookahead, /*#__PURE__*/ We(u));
                }), Zr$1(c, (u)=>{
                    this.computeLookaheadFunc(t, u.idx, 1280, "RepetitionWithSeparator", u.maxLookahead, /*#__PURE__*/ We(u));
                });
            });
        });
    }
    computeLookaheadFunc(e, t, n, i, s, o) {
        this.TRACE_INIT(`${o}${t === 0 ? "" : t}`, ()=>{
            let l = /*#__PURE__*/ this.lookaheadStrategy.buildLookaheadForOptional({
                prodOccurrence: t,
                rule: e,
                maxLookahead: s || this.maxLookahead,
                dynamicTokensEnabled: this.dynamicTokensEnabled,
                prodType: i
            }), c = /*#__PURE__*/ oa(this.fullRuleNameToShort[e.name], n, t);
            this.setLaFuncCache(c, l);
        });
    }
    getKeyForAutomaticLookahead(e, t) {
        let n = /*#__PURE__*/ this.getLastExplicitRuleShortName();
        return oa(n, e, t);
    }
    getLaFuncFromCache(e) {
        return this.lookAheadFuncsCache.get(e);
    }
    setLaFuncCache(e, t) {
        this.lookAheadFuncsCache.set(e, t);
    }
}, El = class extends De {
    static #_ = m$1(this, "DslMethodsCollectorVisitor");
    constructor(){
        super(...arguments), this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
    }
    reset() {
        this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
    }
    visitOption(e) {
        this.dslMethods.option.push(e);
    }
    visitRepetitionWithSeparator(e) {
        this.dslMethods.repetitionWithSeparator.push(e);
    }
    visitRepetitionMandatory(e) {
        this.dslMethods.repetitionMandatory.push(e);
    }
    visitRepetitionMandatoryWithSeparator(e) {
        this.dslMethods.repetitionMandatoryWithSeparator.push(e);
    }
    visitRepetition(e) {
        this.dslMethods.repetition.push(e);
    }
    visitAlternation(e) {
        this.dslMethods.alternation.push(e);
    }
}, la = new El;
function jp(r) {
    la.reset(), r.accept(la);
    let e = la.dslMethods;
    return la.reset(), e;
}
m$1(jp, "collectMethods");
function kl(r, e) {
    isNaN(r.startOffset) === true ? (r.startOffset = e.startOffset, r.endOffset = e.endOffset) : r.endOffset < e.endOffset && (r.endOffset = e.endOffset);
}
m$1(kl, "setNodeLocationOnlyOffset");
function Il(r, e) {
    isNaN(r.startOffset) === true ? (r.startOffset = e.startOffset, r.startColumn = e.startColumn, r.startLine = e.startLine, r.endOffset = e.endOffset, r.endColumn = e.endColumn, r.endLine = e.endLine) : r.endOffset < e.endOffset && (r.endOffset = e.endOffset, r.endColumn = e.endColumn, r.endLine = e.endLine);
}
m$1(Il, "setNodeLocationFull");
function ad(r, e, t) {
    r.children[t] === void 0 ? r.children[t] = [
        e
    ] : r.children[t].push(e);
}
m$1(ad, "addTerminalToCst");
function od(r, e, t) {
    r.children[e] === void 0 ? r.children[e] = [
        t
    ] : r.children[e].push(t);
}
m$1(od, "addNoneTerminalToCst");
var Hp = "name";
function Nl(r, e) {
    Object.defineProperty(r, Hp, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: e
    });
}
m$1(Nl, "defineNameProp");
function zp(r, e) {
    let t = /*#__PURE__*/ h(r), n = t.length;
    for(let i = 0; i < n; i++){
        let s = t[i], o = r[s], l = o.length;
        for(let c = 0; c < l; c++){
            let u = o[c];
            u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
        }
    }
}
m$1(zp, "defaultVisit");
function ld(r, e) {
    let t = /*#__PURE__*/ m$1(function() {}, "derivedConstructor");
    Nl(t, r + "BaseSemantics");
    let n = {
        visit: /*#__PURE__*/ m$1(function(i, s) {
            if (N(i) && (i = i[0]), !sn$1(i)) return this[i.name](i.children, s);
        }, "visit"),
        validateVisitor: /*#__PURE__*/ m$1(function() {
            let i = /*#__PURE__*/ qp(this, e);
            if (!Cr$1(i)) {
                let s = /*#__PURE__*/ Jr$1(i, (o)=>o.msg);
                throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
            }
        }, "validateVisitor")
    };
    return t.prototype = n, t.prototype.constructor = t, t._RULE_NAMES = e, t;
}
m$1(ld, "createBaseSemanticVisitorConstructor");
function cd(r, e, t) {
    let n = /*#__PURE__*/ m$1(function() {}, "derivedConstructor");
    Nl(n, r + "BaseSemanticsWithDefaults");
    let i = /*#__PURE__*/ Object.create(t.prototype);
    return Zr$1(e, (s)=>{
        i[s] = zp;
    }), n.prototype = i, n.prototype.constructor = n, n;
}
m$1(cd, "createBaseVisitorConstructorWithDefaults");
var Cl;
(function(r) {
    r[r.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", r[r.MISSING_METHOD = 1] = "MISSING_METHOD";
})(Cl || (Cl = {}));
function qp(r, e) {
    return Xp(r, e);
}
m$1(qp, "validateVisitor");
function Xp(r, e) {
    let t = /*#__PURE__*/ fn$1(e, (i)=>T(r[i]) === false), n = /*#__PURE__*/ Jr$1(t, (i)=>({
            msg: `Missing visitor method: <${i}> on ${r.constructor.name} CST Visitor.`,
            type: Cl.MISSING_METHOD,
            methodName: i
        }));
    return Ai$1(n);
}
m$1(Xp, "validateMissingCstMethods");
var ha = class {
    static #_ = m$1(this, "TreeBuilder");
    initTreeBuilder(e) {
        if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = fm$1(e, "nodeLocationTracking") ? e.nodeLocationTracking : Fe.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = kr, this.cstFinallyStateUpdate = kr, this.cstPostTerminal = kr, this.cstPostNonTerminal = kr, this.cstPostRule = kr;
        else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = Il, this.setNodeLocationFromNode = Il, this.cstPostRule = kr, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
        else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = kl, this.setNodeLocationFromNode = kl, this.cstPostRule = kr, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
        else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = kr, this.setInitialNodeLocation = kr;
        else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
    }
    setInitialNodeLocationOnlyOffsetRecovery(e) {
        e.location = {
            startOffset: NaN,
            endOffset: NaN
        };
    }
    setInitialNodeLocationOnlyOffsetRegular(e) {
        e.location = {
            startOffset: this.LA(1).startOffset,
            endOffset: NaN
        };
    }
    setInitialNodeLocationFullRecovery(e) {
        e.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    }
    setInitialNodeLocationFullRegular(e) {
        let t = /*#__PURE__*/ this.LA(1);
        e.location = {
            startOffset: t.startOffset,
            startLine: t.startLine,
            startColumn: t.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    }
    cstInvocationStateUpdate(e) {
        let t = {
            name: e,
            children: /*#__PURE__*/ Object.create(null)
        };
        this.setInitialNodeLocation(t), this.CST_STACK.push(t);
    }
    cstFinallyStateUpdate() {
        this.CST_STACK.pop();
    }
    cstPostRuleFull(e) {
        let t = /*#__PURE__*/ this.LA(0), n = e.location;
        n.startOffset <= t.startOffset ? (n.endOffset = t.endOffset, n.endLine = t.endLine, n.endColumn = t.endColumn) : (n.startOffset = NaN, n.startLine = NaN, n.startColumn = NaN);
    }
    cstPostRuleOnlyOffset(e) {
        let t = /*#__PURE__*/ this.LA(0), n = e.location;
        n.startOffset <= t.startOffset ? n.endOffset = t.endOffset : n.startOffset = NaN;
    }
    cstPostTerminal(e, t) {
        let n = this.CST_STACK[this.CST_STACK.length - 1];
        ad(n, t, e), this.setNodeLocationFromToken(n.location, t);
    }
    cstPostNonTerminal(e, t) {
        let n = this.CST_STACK[this.CST_STACK.length - 1];
        od(n, t, e), this.setNodeLocationFromNode(n.location, e.location);
    }
    getBaseCstVisitorConstructor() {
        if (sn$1(this.baseCstVisitorConstructor)) {
            let e = /*#__PURE__*/ ld(this.className, /*#__PURE__*/ h(this.gastProductionsCache));
            return this.baseCstVisitorConstructor = e, e;
        }
        return this.baseCstVisitorConstructor;
    }
    getBaseCstVisitorConstructorWithDefaults() {
        if (sn$1(this.baseCstVisitorWithDefaultsConstructor)) {
            let e = /*#__PURE__*/ cd(this.className, /*#__PURE__*/ h(this.gastProductionsCache), /*#__PURE__*/ this.getBaseCstVisitorConstructor());
            return this.baseCstVisitorWithDefaultsConstructor = e, e;
        }
        return this.baseCstVisitorWithDefaultsConstructor;
    }
    getLastExplicitRuleShortName() {
        let e = this.RULE_STACK;
        return e[e.length - 1];
    }
    getPreviousExplicitRuleShortName() {
        let e = this.RULE_STACK;
        return e[e.length - 2];
    }
    getLastExplicitRuleOccurrenceIndex() {
        let e = this.RULE_OCCURRENCE_STACK;
        return e[e.length - 1];
    }
};
var pa = class {
    static #_ = m$1(this, "LexerAdapter");
    initLexerAdapter() {
        this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
    }
    set input(e) {
        if (this.selfAnalysisDone !== true) throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
        this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
    }
    get input() {
        return this.tokVector;
    }
    SKIP_TOKEN() {
        return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : wn;
    }
    LA(e) {
        let t = this.currIdx + e;
        return t < 0 || this.tokVectorLength <= t ? wn : this.tokVector[t];
    }
    consumeToken() {
        this.currIdx++;
    }
    exportLexerState() {
        return this.currIdx;
    }
    importLexerState(e) {
        this.currIdx = e;
    }
    resetLexerState() {
        this.currIdx = -1;
    }
    moveToTerminatedState() {
        this.currIdx = this.tokVector.length - 1;
    }
    getLexerPosition() {
        return this.exportLexerState();
    }
};
var ma = class {
    static #_ = m$1(this, "RecognizerApi");
    ACTION(e) {
        return e.call(this);
    }
    consume(e, t, n) {
        return this.consumeInternal(t, e, n);
    }
    subrule(e, t, n) {
        return this.subruleInternal(t, e, n);
    }
    option(e, t) {
        return this.optionInternal(t, e);
    }
    or(e, t) {
        return this.orInternal(t, e);
    }
    many(e, t) {
        return this.manyInternal(e, t);
    }
    atLeastOne(e, t) {
        return this.atLeastOneInternal(e, t);
    }
    CONSUME(e, t) {
        return this.consumeInternal(e, 0, t);
    }
    CONSUME1(e, t) {
        return this.consumeInternal(e, 1, t);
    }
    CONSUME2(e, t) {
        return this.consumeInternal(e, 2, t);
    }
    CONSUME3(e, t) {
        return this.consumeInternal(e, 3, t);
    }
    CONSUME4(e, t) {
        return this.consumeInternal(e, 4, t);
    }
    CONSUME5(e, t) {
        return this.consumeInternal(e, 5, t);
    }
    CONSUME6(e, t) {
        return this.consumeInternal(e, 6, t);
    }
    CONSUME7(e, t) {
        return this.consumeInternal(e, 7, t);
    }
    CONSUME8(e, t) {
        return this.consumeInternal(e, 8, t);
    }
    CONSUME9(e, t) {
        return this.consumeInternal(e, 9, t);
    }
    SUBRULE(e, t) {
        return this.subruleInternal(e, 0, t);
    }
    SUBRULE1(e, t) {
        return this.subruleInternal(e, 1, t);
    }
    SUBRULE2(e, t) {
        return this.subruleInternal(e, 2, t);
    }
    SUBRULE3(e, t) {
        return this.subruleInternal(e, 3, t);
    }
    SUBRULE4(e, t) {
        return this.subruleInternal(e, 4, t);
    }
    SUBRULE5(e, t) {
        return this.subruleInternal(e, 5, t);
    }
    SUBRULE6(e, t) {
        return this.subruleInternal(e, 6, t);
    }
    SUBRULE7(e, t) {
        return this.subruleInternal(e, 7, t);
    }
    SUBRULE8(e, t) {
        return this.subruleInternal(e, 8, t);
    }
    SUBRULE9(e, t) {
        return this.subruleInternal(e, 9, t);
    }
    OPTION(e) {
        return this.optionInternal(e, 0);
    }
    OPTION1(e) {
        return this.optionInternal(e, 1);
    }
    OPTION2(e) {
        return this.optionInternal(e, 2);
    }
    OPTION3(e) {
        return this.optionInternal(e, 3);
    }
    OPTION4(e) {
        return this.optionInternal(e, 4);
    }
    OPTION5(e) {
        return this.optionInternal(e, 5);
    }
    OPTION6(e) {
        return this.optionInternal(e, 6);
    }
    OPTION7(e) {
        return this.optionInternal(e, 7);
    }
    OPTION8(e) {
        return this.optionInternal(e, 8);
    }
    OPTION9(e) {
        return this.optionInternal(e, 9);
    }
    OR(e) {
        return this.orInternal(e, 0);
    }
    OR1(e) {
        return this.orInternal(e, 1);
    }
    OR2(e) {
        return this.orInternal(e, 2);
    }
    OR3(e) {
        return this.orInternal(e, 3);
    }
    OR4(e) {
        return this.orInternal(e, 4);
    }
    OR5(e) {
        return this.orInternal(e, 5);
    }
    OR6(e) {
        return this.orInternal(e, 6);
    }
    OR7(e) {
        return this.orInternal(e, 7);
    }
    OR8(e) {
        return this.orInternal(e, 8);
    }
    OR9(e) {
        return this.orInternal(e, 9);
    }
    MANY(e) {
        this.manyInternal(0, e);
    }
    MANY1(e) {
        this.manyInternal(1, e);
    }
    MANY2(e) {
        this.manyInternal(2, e);
    }
    MANY3(e) {
        this.manyInternal(3, e);
    }
    MANY4(e) {
        this.manyInternal(4, e);
    }
    MANY5(e) {
        this.manyInternal(5, e);
    }
    MANY6(e) {
        this.manyInternal(6, e);
    }
    MANY7(e) {
        this.manyInternal(7, e);
    }
    MANY8(e) {
        this.manyInternal(8, e);
    }
    MANY9(e) {
        this.manyInternal(9, e);
    }
    MANY_SEP(e) {
        this.manySepFirstInternal(0, e);
    }
    MANY_SEP1(e) {
        this.manySepFirstInternal(1, e);
    }
    MANY_SEP2(e) {
        this.manySepFirstInternal(2, e);
    }
    MANY_SEP3(e) {
        this.manySepFirstInternal(3, e);
    }
    MANY_SEP4(e) {
        this.manySepFirstInternal(4, e);
    }
    MANY_SEP5(e) {
        this.manySepFirstInternal(5, e);
    }
    MANY_SEP6(e) {
        this.manySepFirstInternal(6, e);
    }
    MANY_SEP7(e) {
        this.manySepFirstInternal(7, e);
    }
    MANY_SEP8(e) {
        this.manySepFirstInternal(8, e);
    }
    MANY_SEP9(e) {
        this.manySepFirstInternal(9, e);
    }
    AT_LEAST_ONE(e) {
        this.atLeastOneInternal(0, e);
    }
    AT_LEAST_ONE1(e) {
        return this.atLeastOneInternal(1, e);
    }
    AT_LEAST_ONE2(e) {
        this.atLeastOneInternal(2, e);
    }
    AT_LEAST_ONE3(e) {
        this.atLeastOneInternal(3, e);
    }
    AT_LEAST_ONE4(e) {
        this.atLeastOneInternal(4, e);
    }
    AT_LEAST_ONE5(e) {
        this.atLeastOneInternal(5, e);
    }
    AT_LEAST_ONE6(e) {
        this.atLeastOneInternal(6, e);
    }
    AT_LEAST_ONE7(e) {
        this.atLeastOneInternal(7, e);
    }
    AT_LEAST_ONE8(e) {
        this.atLeastOneInternal(8, e);
    }
    AT_LEAST_ONE9(e) {
        this.atLeastOneInternal(9, e);
    }
    AT_LEAST_ONE_SEP(e) {
        this.atLeastOneSepFirstInternal(0, e);
    }
    AT_LEAST_ONE_SEP1(e) {
        this.atLeastOneSepFirstInternal(1, e);
    }
    AT_LEAST_ONE_SEP2(e) {
        this.atLeastOneSepFirstInternal(2, e);
    }
    AT_LEAST_ONE_SEP3(e) {
        this.atLeastOneSepFirstInternal(3, e);
    }
    AT_LEAST_ONE_SEP4(e) {
        this.atLeastOneSepFirstInternal(4, e);
    }
    AT_LEAST_ONE_SEP5(e) {
        this.atLeastOneSepFirstInternal(5, e);
    }
    AT_LEAST_ONE_SEP6(e) {
        this.atLeastOneSepFirstInternal(6, e);
    }
    AT_LEAST_ONE_SEP7(e) {
        this.atLeastOneSepFirstInternal(7, e);
    }
    AT_LEAST_ONE_SEP8(e) {
        this.atLeastOneSepFirstInternal(8, e);
    }
    AT_LEAST_ONE_SEP9(e) {
        this.atLeastOneSepFirstInternal(9, e);
    }
    RULE(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ln;
        if (pm$1(this.definedRulesNames, e)) {
            let o = {
                message: /*#__PURE__*/ it.buildDuplicateRuleNameError({
                    topLevelRule: e,
                    grammarName: this.className
                }),
                type: ye.DUPLICATE_RULE_NAME,
                ruleName: e
            };
            this.definitionErrors.push(o);
        }
        this.definedRulesNames.push(e);
        let i = /*#__PURE__*/ this.defineRule(e, t, n);
        return this[e] = i, i;
    }
    OVERRIDE_RULE(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ln;
        let i = /*#__PURE__*/ Xu(e, this.definedRulesNames, this.className);
        this.definitionErrors = /*#__PURE__*/ this.definitionErrors.concat(i);
        let s = /*#__PURE__*/ this.defineRule(e, t, n);
        return this[e] = s, s;
    }
    BACKTRACK(e, t) {
        return function() {
            this.isBackTrackingStack.push(1);
            let n = /*#__PURE__*/ this.saveRecogState();
            try {
                return e.apply(this, t), !0;
            } catch (i) {
                if (Wt(i)) return false;
                throw i;
            } finally{
                this.reloadRecogState(n), this.isBackTrackingStack.pop();
            }
        };
    }
    getGAstProductions() {
        return this.gastProductionsCache;
    }
    getSerializedGastProductions() {
        return Vs(/*#__PURE__*/ Xr$1(this.gastProductionsCache));
    }
};
var ga = class {
    static #_ = m$1(this, "RecognizerEngine");
    initRecognizerEngine(e, t) {
        if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = In, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, fm$1(t, "serializedGrammar")) throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
        if (N(e)) {
            if (Cr$1(e)) throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
            if (typeof e[0].startOffset == "number") throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
        }
        if (N(e)) this.tokensMap = /*#__PURE__*/ Rn$1(e, (s, o)=>(s[o.name] = o, s), {});
        else if (fm$1(e, "modes") && Ui$1(/*#__PURE__*/ Qr$1(/*#__PURE__*/ Xr$1(e.modes)), Cu)) {
            let s = /*#__PURE__*/ Qr$1(/*#__PURE__*/ Xr$1(e.modes)), o = /*#__PURE__*/ mp$1(s);
            this.tokensMap = /*#__PURE__*/ Rn$1(o, (l, c)=>(l[c.name] = c, l), {});
        } else if (m$2(e)) this.tokensMap = /*#__PURE__*/ _f$1(e);
        else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
        this.tokensMap.EOF = qe;
        let n = fm$1(e, "modes") ? Qr$1(/*#__PURE__*/ Xr$1(e.modes)) : Xr$1(e), i = /*#__PURE__*/ Ui$1(n, (s)=>Cr$1(s.categoryMatches));
        this.tokenMatcher = i ? In : Ct, St(/*#__PURE__*/ Xr$1(this.tokensMap));
    }
    defineRule(e, t, n) {
        if (this.selfAnalysisDone) throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
        let i = fm$1(n, "resyncEnabled") ? n.resyncEnabled : Ln.resyncEnabled, s = fm$1(n, "recoveryValueFunc") ? n.recoveryValueFunc : Ln.recoveryValueFunc, o = this.ruleShortNameIdx << 12;
        this.ruleShortNameIdx++, this.shortRuleNameToFull[o] = e, this.fullRuleNameToShort[e] = o;
        let l;
        return this.outputCst === true ? l = /*#__PURE__*/ m$1(function() {
            for(var _len = arguments.length, d = new Array(_len), _key = 0; _key < _len; _key++){
                d[_key] = arguments[_key];
            }
            try {
                this.ruleInvocationStateUpdate(o, e, this.subruleIdx), t.apply(this, d);
                let f = this.CST_STACK[this.CST_STACK.length - 1];
                return this.cstPostRule(f), f;
            } catch (f) {
                return this.invokeRuleCatch(f, i, s);
            } finally{
                this.ruleFinallyStateUpdate();
            }
        }, "invokeRuleWithTry") : l = /*#__PURE__*/ m$1(function() {
            for(var _len = arguments.length, d = new Array(_len), _key = 0; _key < _len; _key++){
                d[_key] = arguments[_key];
            }
            try {
                return this.ruleInvocationStateUpdate(o, e, this.subruleIdx), t.apply(this, d);
            } catch (f) {
                return this.invokeRuleCatch(f, i, s);
            } finally{
                this.ruleFinallyStateUpdate();
            }
        }, "invokeRuleWithTryCst"), Object.assign(l, {
            ruleName: e,
            originalGrammarAction: t
        });
    }
    invokeRuleCatch(e, t, n) {
        let i = this.RULE_STACK.length === 1, s = t && !this.isBackTracking() && this.recoveryEnabled;
        if (Wt(e)) {
            let o = e;
            if (s) {
                let l = /*#__PURE__*/ this.findReSyncTokenType();
                if (this.isInCurrentRuleReSyncSet(l)) if (o.resyncedTokens = /*#__PURE__*/ this.reSyncTo(l), this.outputCst) {
                    let c = this.CST_STACK[this.CST_STACK.length - 1];
                    return c.recoveredNode = true, c;
                } else return n(e);
                else {
                    if (this.outputCst) {
                        let c = this.CST_STACK[this.CST_STACK.length - 1];
                        c.recoveredNode = true, o.partialCstResult = c;
                    }
                    throw o;
                }
            } else {
                if (i) return this.moveToTerminatedState(), n(e);
                throw o;
            }
        } else throw e;
    }
    optionInternal(e, t) {
        let n = /*#__PURE__*/ this.getKeyForAutomaticLookahead(512, t);
        return this.optionInternalLogic(e, t, n);
    }
    optionInternalLogic(e, t, n) {
        let i = /*#__PURE__*/ this.getLaFuncFromCache(n), s;
        if (typeof e != "function") {
            s = e.DEF;
            let o = e.GATE;
            if (o !== void 0) {
                let l = i;
                i = /*#__PURE__*/ m$1(()=>o.call(this) && l.call(this), "lookAheadFunc");
            }
        } else s = e;
        if (i.call(this) === true) return s.call(this);
    }
    atLeastOneInternal(e, t) {
        let n = /*#__PURE__*/ this.getKeyForAutomaticLookahead(1024, e);
        return this.atLeastOneInternalLogic(e, t, n);
    }
    atLeastOneInternalLogic(e, t, n) {
        let i = /*#__PURE__*/ this.getLaFuncFromCache(n), s;
        if (typeof t != "function") {
            s = t.DEF;
            let o = t.GATE;
            if (o !== void 0) {
                let l = i;
                i = /*#__PURE__*/ m$1(()=>o.call(this) && l.call(this), "lookAheadFunc");
            }
        } else s = t;
        if (i.call(this) === true) {
            let o = /*#__PURE__*/ this.doSingleRepetition(s);
            for(; i.call(this) === true && o === true;)o = /*#__PURE__*/ this.doSingleRepetition(s);
        } else throw this.raiseEarlyExitException(e, ae.REPETITION_MANDATORY, t.ERR_MSG);
        this.attemptInRepetitionRecovery(this.atLeastOneInternal, [
            e,
            t
        ], i, 1024, e, Zs);
    }
    atLeastOneSepFirstInternal(e, t) {
        let n = /*#__PURE__*/ this.getKeyForAutomaticLookahead(1536, e);
        this.atLeastOneSepFirstInternalLogic(e, t, n);
    }
    atLeastOneSepFirstInternalLogic(e, t, n) {
        let i = t.DEF, s = t.SEP;
        if (this.getLaFuncFromCache(n).call(this) === true) {
            i.call(this);
            let l = /*#__PURE__*/ m$1(()=>this.tokenMatcher(/*#__PURE__*/ this.LA(1), s), "separatorLookAheadFunc");
            for(; this.tokenMatcher(/*#__PURE__*/ this.LA(1), s) === true;)this.CONSUME(s), i.call(this);
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                e,
                s,
                l,
                i,
                Ni
            ], l, 1536, e, Ni);
        } else throw this.raiseEarlyExitException(e, ae.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
    }
    manyInternal(e, t) {
        let n = /*#__PURE__*/ this.getKeyForAutomaticLookahead(768, e);
        return this.manyInternalLogic(e, t, n);
    }
    manyInternalLogic(e, t, n) {
        let i = /*#__PURE__*/ this.getLaFuncFromCache(n), s;
        if (typeof t != "function") {
            s = t.DEF;
            let l = t.GATE;
            if (l !== void 0) {
                let c = i;
                i = /*#__PURE__*/ m$1(()=>l.call(this) && c.call(this), "lookaheadFunction");
            }
        } else s = t;
        let o = true;
        for(; i.call(this) === true && o === true;)o = /*#__PURE__*/ this.doSingleRepetition(s);
        this.attemptInRepetitionRecovery(this.manyInternal, [
            e,
            t
        ], i, 768, e, Qs, o);
    }
    manySepFirstInternal(e, t) {
        let n = /*#__PURE__*/ this.getKeyForAutomaticLookahead(1280, e);
        this.manySepFirstInternalLogic(e, t, n);
    }
    manySepFirstInternalLogic(e, t, n) {
        let i = t.DEF, s = t.SEP;
        if (this.getLaFuncFromCache(n).call(this) === true) {
            i.call(this);
            let l = /*#__PURE__*/ m$1(()=>this.tokenMatcher(/*#__PURE__*/ this.LA(1), s), "separatorLookAheadFunc");
            for(; this.tokenMatcher(/*#__PURE__*/ this.LA(1), s) === true;)this.CONSUME(s), i.call(this);
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                e,
                s,
                l,
                i,
                Ii
            ], l, 1280, e, Ii);
        }
    }
    repetitionSepSecondInternal(e, t, n, i, s) {
        for(; n();)this.CONSUME(t), i.call(this);
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            e,
            t,
            n,
            i,
            s
        ], n, 1536, e, s);
    }
    doSingleRepetition(e) {
        let t = /*#__PURE__*/ this.getLexerPosition();
        return e.call(this), this.getLexerPosition() > t;
    }
    orInternal(e, t) {
        let n = /*#__PURE__*/ this.getKeyForAutomaticLookahead(256, t), i = N(e) ? e : e.DEF, o = /*#__PURE__*/ this.getLaFuncFromCache(n).call(this, i);
        if (o !== void 0) return i[o].ALT.call(this);
        this.raiseNoAltException(t, e.ERR_MSG);
    }
    ruleFinallyStateUpdate() {
        if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
            let e = /*#__PURE__*/ this.LA(1), t = /*#__PURE__*/ this.errorMessageProvider.buildNotAllInputParsedMessage({
                firstRedundant: e,
                ruleName: /*#__PURE__*/ this.getCurrRuleFullName()
            });
            this.SAVE_ERROR(new _i(t, e));
        }
    }
    subruleInternal(e, t, n) {
        let i;
        try {
            let s = n !== void 0 ? n.ARGS : void 0;
            return this.subruleIdx = t, i = /*#__PURE__*/ e.apply(this, s), this.cstPostNonTerminal(i, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.ruleName), i;
        } catch (s) {
            throw this.subruleInternalError(s, n, e.ruleName);
        }
    }
    subruleInternalError(e, t, n) {
        throw Wt(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : n), delete e.partialCstResult), e;
    }
    consumeInternal(e, t, n) {
        let i;
        try {
            let s = /*#__PURE__*/ this.LA(1);
            this.tokenMatcher(s, e) === !0 ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, n);
        } catch (s) {
            i = /*#__PURE__*/ this.consumeInternalRecovery(e, t, s);
        }
        return this.cstPostTerminal(n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.name, i), i;
    }
    consumeInternalError(e, t, n) {
        let i, s = /*#__PURE__*/ this.LA(0);
        throw n !== void 0 && n.ERR_MSG ? i = n.ERR_MSG : i = /*#__PURE__*/ this.errorMessageProvider.buildMismatchTokenMessage({
            expected: e,
            actual: t,
            previous: s,
            ruleName: /*#__PURE__*/ this.getCurrRuleFullName()
        }), this.SAVE_ERROR(new fr(i, t, s));
    }
    consumeInternalRecovery(e, t, n) {
        if (this.recoveryEnabled && n.name === "MismatchedTokenException" && !this.isBackTracking()) {
            let i = /*#__PURE__*/ this.getFollowsForInRuleRecovery(e, t);
            try {
                return this.tryInRuleRecovery(e, i);
            } catch (s) {
                throw s.name === Rl ? n : s;
            }
        } else throw n;
    }
    saveRecogState() {
        let e = this.errors, t = /*#__PURE__*/ _f$1(this.RULE_STACK);
        return {
            errors: e,
            lexerState: /*#__PURE__*/ this.exportLexerState(),
            RULE_STACK: t,
            CST_STACK: this.CST_STACK
        };
    }
    reloadRecogState(e) {
        this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
    }
    ruleInvocationStateUpdate(e, t, n) {
        this.RULE_OCCURRENCE_STACK.push(n), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
    }
    isBackTracking() {
        return this.isBackTrackingStack.length !== 0;
    }
    getCurrRuleFullName() {
        let e = /*#__PURE__*/ this.getLastExplicitRuleShortName();
        return this.shortRuleNameToFull[e];
    }
    shortRuleNameToFullName(e) {
        return this.shortRuleNameToFull[e];
    }
    isAtEndOfInput() {
        return this.tokenMatcher(/*#__PURE__*/ this.LA(1), qe);
    }
    reset() {
        this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
    }
};
var ya = class {
    static #_ = m$1(this, "ErrorHandler");
    initErrorHandler(e) {
        this._errors = [], this.errorMessageProvider = fm$1(e, "errorMessageProvider") ? e.errorMessageProvider : Fe.errorMessageProvider;
    }
    SAVE_ERROR(e) {
        if (Wt(e)) return e.context = {
            ruleStack: /*#__PURE__*/ this.getHumanReadableRuleStack(),
            ruleOccurrenceStack: /*#__PURE__*/ _f$1(this.RULE_OCCURRENCE_STACK)
        }, this._errors.push(e), e;
        throw Error("Trying to save an Error which is not a RecognitionException");
    }
    get errors() {
        return _f$1(this._errors);
    }
    set errors(e) {
        this._errors = e;
    }
    raiseEarlyExitException(e, t, n) {
        let i = /*#__PURE__*/ this.getCurrRuleFullName(), s = this.getGAstProductions()[i], l = $n(e, s, t, this.maxLookahead)[0], c = [];
        for(let d = 1; d <= this.maxLookahead; d++)c.push(/*#__PURE__*/ this.LA(d));
        let u = /*#__PURE__*/ this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: l,
            actual: c,
            previous: /*#__PURE__*/ this.LA(0),
            customUserDescription: n,
            ruleName: i
        });
        throw this.SAVE_ERROR(new wi(u, this.LA(1), this.LA(0)));
    }
    raiseNoAltException(e, t) {
        let n = /*#__PURE__*/ this.getCurrRuleFullName(), i = this.getGAstProductions()[n], s = /*#__PURE__*/ Sn(e, i, this.maxLookahead), o = [];
        for(let u = 1; u <= this.maxLookahead; u++)o.push(/*#__PURE__*/ this.LA(u));
        let l = /*#__PURE__*/ this.LA(0), c = /*#__PURE__*/ this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: s,
            actual: o,
            previous: l,
            customUserDescription: t,
            ruleName: /*#__PURE__*/ this.getCurrRuleFullName()
        });
        throw this.SAVE_ERROR(new $i(c, this.LA(1), l));
    }
};
var Ta = class {
    static #_ = m$1(this, "ContentAssist");
    initContentAssist() {}
    computeContentAssist(e, t) {
        let n = this.gastProductionsCache[e];
        if (sn$1(n)) throw Error(`Rule ->${e}<- does not exist in this grammar.`);
        return ta([
            n
        ], t, this.tokenMatcher, this.maxLookahead);
    }
    getNextPossibleTokenTypes(e) {
        let t = /*#__PURE__*/ De$1(e.ruleStack), i = this.getGAstProductions()[t];
        return new Js(i, e).startWalking();
    }
};
var Ea = {
    description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(Ea);
var ud = true, dd = Math.pow(2, 8) - 1, hd = /*#__PURE__*/ Bt({
    name: "RECORDING_PHASE_TOKEN",
    pattern: se.NA
});
St([
    hd
]);
var pd = /*#__PURE__*/ _t(hd, `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, -1, -1, -1, -1, -1, -1);
Object.freeze(pd);
var Jp = {
    name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
    children: {}
}, xa = class {
    static #_ = m$1(this, "GastRecorder");
    initGastRecorder(e) {
        this.recordingProdStack = [], this.RECORDING_PHASE = false;
    }
    enableRecording() {
        this.RECORDING_PHASE = true, this.TRACE_INIT("Enable Recording", ()=>{
            for(let e = 0; e < 10; e++){
                let t = e > 0 ? e : "";
                this[`CONSUME${t}`] = function(n, i) {
                    return this.consumeInternalRecord(n, e, i);
                }, this[`SUBRULE${t}`] = function(n, i) {
                    return this.subruleInternalRecord(n, e, i);
                }, this[`OPTION${t}`] = function(n) {
                    return this.optionInternalRecord(n, e);
                }, this[`OR${t}`] = function(n) {
                    return this.orInternalRecord(n, e);
                }, this[`MANY${t}`] = function(n) {
                    this.manyInternalRecord(e, n);
                }, this[`MANY_SEP${t}`] = function(n) {
                    this.manySepFirstInternalRecord(e, n);
                }, this[`AT_LEAST_ONE${t}`] = function(n) {
                    this.atLeastOneInternalRecord(e, n);
                }, this[`AT_LEAST_ONE_SEP${t}`] = function(n) {
                    this.atLeastOneSepFirstInternalRecord(e, n);
                };
            }
            this.consume = function(e, t, n) {
                return this.consumeInternalRecord(t, e, n);
            }, this.subrule = function(e, t, n) {
                return this.subruleInternalRecord(t, e, n);
            }, this.option = function(e, t) {
                return this.optionInternalRecord(t, e);
            }, this.or = function(e, t) {
                return this.orInternalRecord(t, e);
            }, this.many = function(e, t) {
                this.manyInternalRecord(e, t);
            }, this.atLeastOne = function(e, t) {
                this.atLeastOneInternalRecord(e, t);
            }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
        });
    }
    disableRecording() {
        this.RECORDING_PHASE = false, this.TRACE_INIT("Deleting Recording methods", ()=>{
            let e = this;
            for(let t = 0; t < 10; t++){
                let n = t > 0 ? t : "";
                delete e[`CONSUME${n}`], delete e[`SUBRULE${n}`], delete e[`OPTION${n}`], delete e[`OR${n}`], delete e[`MANY${n}`], delete e[`MANY_SEP${n}`], delete e[`AT_LEAST_ONE${n}`], delete e[`AT_LEAST_ONE_SEP${n}`];
            }
            delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
        });
    }
    ACTION_RECORD(e) {}
    BACKTRACK_RECORD(e, t) {
        return ()=>true;
    }
    LA_RECORD(e) {
        return wn;
    }
    topLevelRuleRecord(e, t) {
        try {
            let n = new Me({
                definition: [],
                name: e
            });
            return n.name = e, this.recordingProdStack.push(n), t.call(this), this.recordingProdStack.pop(), n;
        } catch (n) {
            if (n.KNOWN_RECORDER_ERROR !== true) try {
                n.message = n.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
            } catch  {
                throw n;
            }
            throw n;
        }
    }
    optionInternalRecord(e, t) {
        return Oi.call(this, z, e, t);
    }
    atLeastOneInternalRecord(e, t) {
        Oi.call(this, Q, t, e);
    }
    atLeastOneSepFirstInternalRecord(e, t) {
        Oi.call(this, Z, t, e, ud);
    }
    manyInternalRecord(e, t) {
        Oi.call(this, F, t, e);
    }
    manySepFirstInternalRecord(e, t) {
        Oi.call(this, q, t, e, ud);
    }
    orInternalRecord(e, t) {
        return Qp.call(this, e, t);
    }
    subruleInternalRecord(e, t, n) {
        if (Ra(t), !e || fm$1(e, "ruleName") === false) {
            let l = new Error(`<SUBRULE${fd(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
            throw l.KNOWN_RECORDER_ERROR = true, l;
        }
        let i = /*#__PURE__*/ Df(this.recordingProdStack), s = e.ruleName, o = new H({
            idx: t,
            nonTerminalName: s,
            label: n?.LABEL,
            referencedRule: void 0
        });
        return i.definition.push(o), this.outputCst ? Jp : Ea;
    }
    consumeInternalRecord(e, t, n) {
        if (Ra(t), !cl(e)) {
            let o = new Error(`<CONSUME${fd(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
            throw o.KNOWN_RECORDER_ERROR = true, o;
        }
        let i = /*#__PURE__*/ Df(this.recordingProdStack), s = new D({
            idx: t,
            terminalType: e,
            label: n?.LABEL
        });
        return i.definition.push(s), pd;
    }
};
function Oi(r, e, t) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    Ra(t);
    let i = /*#__PURE__*/ Df(this.recordingProdStack), s = T(e) ? e : e.DEF, o = new r({
        definition: [],
        idx: t
    });
    return n && (o.separator = e.SEP), fm$1(e, "MAX_LOOKAHEAD") && (o.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(o), s.call(this), i.definition.push(o), this.recordingProdStack.pop(), Ea;
}
m$1(Oi, "recordProd");
function Qp(r, e) {
    Ra(e);
    let t = /*#__PURE__*/ Df(this.recordingProdStack), n = N(r) === false, i = n === false ? r : r.DEF, s = new X({
        definition: [],
        idx: e,
        ignoreAmbiguities: n && r.IGNORE_AMBIGUITIES === true
    });
    fm$1(r, "MAX_LOOKAHEAD") && (s.maxLookahead = r.MAX_LOOKAHEAD);
    let o = /*#__PURE__*/ fp$1(i, (l)=>T(l.GATE));
    return s.hasPredicates = o, t.definition.push(s), Zr$1(i, (l)=>{
        let c = new J({
            definition: []
        });
        s.definition.push(c), fm$1(l, "IGNORE_AMBIGUITIES") ? c.ignoreAmbiguities = l.IGNORE_AMBIGUITIES : fm$1(l, "GATE") && (c.ignoreAmbiguities = true), this.recordingProdStack.push(c), l.ALT.call(this), this.recordingProdStack.pop();
    }), Ea;
}
m$1(Qp, "recordOrProd");
function fd(r) {
    return r === 0 ? "" : `${r}`;
}
m$1(fd, "getIdxSuffix");
function Ra(r) {
    if (r < 0 || r > dd) {
        let e = new Error(`Invalid DSL Method idx value: <${r}>
	Idx value must be a none negative value smaller than ${dd + 1}`);
        throw e.KNOWN_RECORDER_ERROR = true, e;
    }
}
m$1(Ra, "assertMethodIdxIsValid");
var Aa = class {
    static #_ = m$1(this, "PerformanceTracer");
    initPerformanceTracer(e) {
        if (fm$1(e, "traceInitPerf")) {
            let t = e.traceInitPerf, n = typeof t == "number";
            this.traceInitMaxIdent = n ? t : 1 / 0, this.traceInitPerf = n ? t > 0 : t;
        } else this.traceInitMaxIdent = 0, this.traceInitPerf = Fe.traceInitPerf;
        this.traceInitIndent = -1;
    }
    TRACE_INIT(e, t) {
        if (this.traceInitPerf === true) {
            this.traceInitIndent++;
            let n = /*#__PURE__*/ new Array(this.traceInitIndent + 1).join("	");
            this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n}--> <${e}>`);
            let { time: i, value: s } = Ri(t), o = i > 10 ? console.warn : console.log;
            return this.traceInitIndent < this.traceInitMaxIdent && o(`${n}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
        } else return t();
    }
};
function md(r, e) {
    e.forEach((t)=>{
        let n = t.prototype;
        Object.getOwnPropertyNames(n).forEach((i)=>{
            if (i === "constructor") return;
            let s = /*#__PURE__*/ Object.getOwnPropertyDescriptor(n, i);
            s && (s.get || s.set) ? Object.defineProperty(r.prototype, i, s) : r.prototype[i] = t.prototype[i];
        });
    });
}
m$1(md, "applyMixins");
var wn = /*#__PURE__*/ _t(qe, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(wn);
var Fe = /*#__PURE__*/ Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 3,
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: wt,
    nodeLocationTracking: "none",
    traceInitPerf: false,
    skipValidations: false
}), Ln = /*#__PURE__*/ Object.freeze({
    recoveryValueFunc: /*#__PURE__*/ m$1(()=>{}, "recoveryValueFunc"),
    resyncEnabled: true
}), ye;
(function(r) {
    r[r.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", r[r.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", r[r.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", r[r.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", r[r.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", r[r.LEFT_RECURSION = 5] = "LEFT_RECURSION", r[r.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", r[r.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", r[r.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", r[r.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", r[r.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", r[r.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", r[r.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", r[r.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ye || (ye = {}));
function va() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    return function() {
        return r;
    };
}
m$1(va, "EMPTY_ALT");
var Pi = class r {
    static #_ = m$1(this, "Parser");
    static performSelfAnalysis(e) {
        throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
    }
    performSelfAnalysis() {
        this.TRACE_INIT("performSelfAnalysis", ()=>{
            let e;
            this.selfAnalysisDone = true;
            let t = this.className;
            this.TRACE_INIT("toFastProps", ()=>{
                Ei(this);
            }), this.TRACE_INIT("Grammar Recording", ()=>{
                try {
                    this.enableRecording(), Zr$1(this.definedRulesNames, (i)=>{
                        let o = this[i].originalGrammarAction, l;
                        this.TRACE_INIT(`${i} Rule`, ()=>{
                            l = /*#__PURE__*/ this.topLevelRuleRecord(i, o);
                        }), this.gastProductionsCache[i] = l;
                    });
                } finally{
                    this.disableRecording();
                }
            });
            let n = [];
            if (this.TRACE_INIT("Grammar Resolving", ()=>{
                n = /*#__PURE__*/ Zu({
                    rules: /*#__PURE__*/ Xr$1(this.gastProductionsCache)
                }), this.definitionErrors = /*#__PURE__*/ this.definitionErrors.concat(n);
            }), this.TRACE_INIT("Grammar Validations", ()=>{
                if (Cr$1(n) && this.skipValidations === false) {
                    let i = /*#__PURE__*/ ed({
                        rules: /*#__PURE__*/ Xr$1(this.gastProductionsCache),
                        tokenTypes: /*#__PURE__*/ Xr$1(this.tokensMap),
                        errMsgProvider: it,
                        grammarName: t
                    }), s = /*#__PURE__*/ Hu({
                        lookaheadStrategy: this.lookaheadStrategy,
                        rules: /*#__PURE__*/ Xr$1(this.gastProductionsCache),
                        tokenTypes: /*#__PURE__*/ Xr$1(this.tokensMap),
                        grammarName: t
                    });
                    this.definitionErrors = /*#__PURE__*/ this.definitionErrors.concat(i, s);
                }
            }), Cr$1(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", ()=>{
                let i = /*#__PURE__*/ ou(/*#__PURE__*/ Xr$1(this.gastProductionsCache));
                this.resyncFollows = i;
            }), this.TRACE_INIT("ComputeLookaheadFunctions", ()=>{
                var i, s;
                (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
                    rules: /*#__PURE__*/ Xr$1(this.gastProductionsCache)
                }), this.preComputeLookaheadFunctions(/*#__PURE__*/ Xr$1(this.gastProductionsCache));
            })), !r.DEFER_DEFINITION_ERRORS_HANDLING && !Cr$1(this.definitionErrors)) throw e = /*#__PURE__*/ Jr$1(this.definitionErrors, (i)=>i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
        });
    }
    constructor(e, t){
        this.definitionErrors = [], this.selfAnalysisDone = false;
        let n = this;
        if (n.initErrorHandler(t), n.initLexerAdapter(), n.initLooksAhead(t), n.initRecognizerEngine(e, t), n.initRecoverable(t), n.initTreeBuilder(t), n.initContentAssist(), n.initGastRecorder(t), n.initPerformanceTracer(t), fm$1(t, "ignoredIssues")) throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
        this.skipValidations = fm$1(t, "skipValidations") ? t.skipValidations : Fe.skipValidations;
    }
};
Pi.DEFER_DEFINITION_ERRORS_HANDLING = false;
md(Pi, [
    aa,
    ca,
    ha,
    pa,
    ga,
    ma,
    ya,
    Ta,
    xa,
    Aa
]);
var bi = class extends Pi {
    static #_ = m$1(this, "EmbeddedActionsParser");
    constructor(e, t = Fe){
        let n = /*#__PURE__*/ _f$1(t);
        n.outputCst = false, super(e, n);
    }
};
function hr(r, e, t) {
    return `${r.name}_${e}_${t}`;
}
m$1(hr, "buildATNKey");
var Kt = 1, em = 2, gd = 4, yd = 5;
var bn = 7, tm = 8, rm = 9, nm = 10, im = 11, Td = 12, Mi = class {
    static #_ = m$1(this, "AbstractTransition");
    constructor(e){
        this.target = e;
    }
    isEpsilon() {
        return false;
    }
}, On = class extends Mi {
    static #_ = m$1(this, "AtomTransition");
    constructor(e, t){
        super(e), this.tokenType = t;
    }
}, Di = class extends Mi {
    static #_ = m$1(this, "EpsilonTransition");
    constructor(e){
        super(e);
    }
    isEpsilon() {
        return true;
    }
}, Pn = class extends Mi {
    static #_ = m$1(this, "RuleTransition");
    constructor(e, t, n){
        super(e), this.rule = t, this.followState = n;
    }
    isEpsilon() {
        return true;
    }
};
function xd(r) {
    let e = {
        decisionMap: {},
        decisionStates: [],
        ruleToStartState: new Map,
        ruleToStopState: new Map,
        states: []
    };
    sm(e, r);
    let t = r.length;
    for(let n = 0; n < t; n++){
        let i = r[n], s = /*#__PURE__*/ pr(e, i, i);
        s !== void 0 && gm(e, i, s);
    }
    return e;
}
m$1(xd, "createATN");
function sm(r, e) {
    let t = e.length;
    for(let n = 0; n < t; n++){
        let i = e[n], s = /*#__PURE__*/ xe(r, i, void 0, {
            type: em
        }), o = /*#__PURE__*/ xe(r, i, void 0, {
            type: bn
        });
        s.stop = o, r.ruleToStartState.set(i, s), r.ruleToStopState.set(i, o);
    }
}
m$1(sm, "createRuleStartAndStopATNStates");
function Rd(r, e, t) {
    return t instanceof D ? $l(r, e, t.terminalType, t) : t instanceof H ? mm(r, e, t) : t instanceof X ? um(r, e, t) : t instanceof z ? dm(r, e, t) : t instanceof F ? am(r, e, t) : t instanceof q ? om(r, e, t) : t instanceof Q ? lm(r, e, t) : t instanceof Z ? cm(r, e, t) : pr(r, e, t);
}
m$1(Rd, "atom");
function am(r, e, t) {
    let n = /*#__PURE__*/ xe(r, e, t, {
        type: yd
    });
    Vt(r, n);
    let i = /*#__PURE__*/ Mn(r, e, n, t, /*#__PURE__*/ pr(r, e, t));
    return Ad(r, e, t, i);
}
m$1(am, "repetition");
function om(r, e, t) {
    let n = /*#__PURE__*/ xe(r, e, t, {
        type: yd
    });
    Vt(r, n);
    let i = /*#__PURE__*/ Mn(r, e, n, t, /*#__PURE__*/ pr(r, e, t)), s = /*#__PURE__*/ $l(r, e, t.separator, t);
    return Ad(r, e, t, i, s);
}
m$1(om, "repetitionSep");
function lm(r, e, t) {
    let n = /*#__PURE__*/ xe(r, e, t, {
        type: gd
    });
    Vt(r, n);
    let i = /*#__PURE__*/ Mn(r, e, n, t, /*#__PURE__*/ pr(r, e, t));
    return Ed(r, e, t, i);
}
m$1(lm, "repetitionMandatory");
function cm(r, e, t) {
    let n = /*#__PURE__*/ xe(r, e, t, {
        type: gd
    });
    Vt(r, n);
    let i = /*#__PURE__*/ Mn(r, e, n, t, /*#__PURE__*/ pr(r, e, t)), s = /*#__PURE__*/ $l(r, e, t.separator, t);
    return Ed(r, e, t, i, s);
}
m$1(cm, "repetitionMandatorySep");
function um(r, e, t) {
    let n = /*#__PURE__*/ xe(r, e, t, {
        type: Kt
    });
    Vt(r, n);
    let i = /*#__PURE__*/ Jr$1(t.definition, (o)=>Rd(r, e, o));
    return Mn(r, e, n, t, ...i);
}
m$1(um, "alternation");
function dm(r, e, t) {
    let n = /*#__PURE__*/ xe(r, e, t, {
        type: Kt
    });
    Vt(r, n);
    let i = /*#__PURE__*/ Mn(r, e, n, t, /*#__PURE__*/ pr(r, e, t));
    return fm(r, e, t, i);
}
m$1(dm, "option");
function pr(r, e, t) {
    let n = /*#__PURE__*/ fn$1(/*#__PURE__*/ Jr$1(t.definition, (i)=>Rd(r, e, i)), (i)=>i !== void 0);
    return n.length === 1 ? n[0] : n.length === 0 ? void 0 : pm(r, n);
}
m$1(pr, "block");
function Ed(r, e, t, n, i) {
    let s = n.left, o = n.right, l = /*#__PURE__*/ xe(r, e, t, {
        type: im
    });
    Vt(r, l);
    let c = /*#__PURE__*/ xe(r, e, t, {
        type: Td
    });
    return s.loopback = l, c.loopback = l, r.decisionMap[hr(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = l, me(o, l), i === void 0 ? (me(l, s), me(l, c)) : (me(l, c), me(l, i.left), me(i.right, s)), {
        left: s,
        right: c
    };
}
m$1(Ed, "plus");
function Ad(r, e, t, n, i) {
    let s = n.left, o = n.right, l = /*#__PURE__*/ xe(r, e, t, {
        type: nm
    });
    Vt(r, l);
    let c = /*#__PURE__*/ xe(r, e, t, {
        type: Td
    }), u = /*#__PURE__*/ xe(r, e, t, {
        type: rm
    });
    return l.loopback = u, c.loopback = u, me(l, s), me(l, c), me(o, u), i !== void 0 ? (me(u, c), me(u, i.left), me(i.right, s)) : me(u, l), r.decisionMap[hr(e, i ? "RepetitionWithSeparator" : "Repetition", t.idx)] = l, {
        left: l,
        right: c
    };
}
m$1(Ad, "star");
function fm(r, e, t, n) {
    let i = n.left, s = n.right;
    return me(i, s), r.decisionMap[hr(e, "Option", t.idx)] = i, n;
}
m$1(fm, "optional");
function Vt(r, e) {
    return r.decisionStates.push(e), e.decision = r.decisionStates.length - 1, e.decision;
}
m$1(Vt, "defineDecisionState");
function Mn(r, e, t, n) {
    for(var _len = arguments.length, i = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
        i[_key - 4] = arguments[_key];
    }
    let s = /*#__PURE__*/ xe(r, e, n, {
        type: tm,
        start: t
    });
    t.end = s;
    for (let l of i)l !== void 0 ? (me(t, l.left), me(l.right, s)) : me(t, s);
    let o = {
        left: t,
        right: s
    };
    return r.decisionMap[hr(e, /*#__PURE__*/ hm(n), n.idx)] = t, o;
}
m$1(Mn, "makeAlts");
function hm(r) {
    if (r instanceof X) return "Alternation";
    if (r instanceof z) return "Option";
    if (r instanceof F) return "Repetition";
    if (r instanceof q) return "RepetitionWithSeparator";
    if (r instanceof Q) return "RepetitionMandatory";
    if (r instanceof Z) return "RepetitionMandatoryWithSeparator";
    throw new Error("Invalid production type encountered");
}
m$1(hm, "getProdType");
function pm(r, e) {
    let t = e.length;
    for(let s = 0; s < t - 1; s++){
        let o = e[s], l;
        o.left.transitions.length === 1 && (l = o.left.transitions[0]);
        let c = l instanceof Pn, u = l, d = e[s + 1].left;
        o.left.type === Kt && o.right.type === Kt && l !== void 0 && (c && u.followState === o.right || l.target === o.right) ? (c ? u.followState = d : l.target = d, ym(r, o.right)) : me(o.right, d);
    }
    let n = e[0], i = e[t - 1];
    return {
        left: n.left,
        right: i.right
    };
}
m$1(pm, "makeBlock");
function $l(r, e, t, n) {
    let i = /*#__PURE__*/ xe(r, e, n, {
        type: Kt
    }), s = /*#__PURE__*/ xe(r, e, n, {
        type: Kt
    });
    return _l(i, new On(s, t)), {
        left: i,
        right: s
    };
}
m$1($l, "tokenRef");
function mm(r, e, t) {
    let n = t.referencedRule, i = /*#__PURE__*/ r.ruleToStartState.get(n), s = /*#__PURE__*/ xe(r, e, t, {
        type: Kt
    }), o = /*#__PURE__*/ xe(r, e, t, {
        type: Kt
    }), l = new Pn(i, n, o);
    return _l(s, l), {
        left: s,
        right: o
    };
}
m$1(mm, "ruleRef");
function gm(r, e, t) {
    let n = /*#__PURE__*/ r.ruleToStartState.get(e);
    me(n, t.left);
    let i = /*#__PURE__*/ r.ruleToStopState.get(e);
    return me(t.right, i), {
        left: n,
        right: i
    };
}
m$1(gm, "buildRuleHandle");
function me(r, e) {
    let t = new Di(e);
    _l(r, t);
}
m$1(me, "epsilon");
function xe(r, e, t, n) {
    let i = /*#__PURE__*/ Object.assign({
        atn: r,
        production: t,
        epsilonOnlyTransitions: false,
        rule: e,
        transitions: [],
        nextTokenWithinRule: [],
        stateNumber: r.states.length
    }, n);
    return r.states.push(i), i;
}
m$1(xe, "newState");
function _l(r, e) {
    r.transitions.length === 0 && (r.epsilonOnlyTransitions = /*#__PURE__*/ e.isEpsilon()), r.transitions.push(e);
}
m$1(_l, "addTransition");
function ym(r, e) {
    r.states.splice(/*#__PURE__*/ r.states.indexOf(e), 1);
}
m$1(ym, "removeState");
var Fi = {}, Dn = class {
    static #_ = m$1(this, "ATNConfigSet");
    constructor(){
        this.map = {}, this.configs = [];
    }
    get size() {
        return this.configs.length;
    }
    finalize() {
        this.map = {};
    }
    add(e) {
        let t = /*#__PURE__*/ wl(e);
        t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
    }
    get elements() {
        return this.configs;
    }
    get alts() {
        return Jr$1(this.configs, (e)=>e.alt);
    }
    get key() {
        let e = "";
        for(let t in this.map)e += t + ":";
        return e;
    }
};
function wl(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return `${e ? `a${r.alt}` : ""}s${r.state.stateNumber}:${r.stack.map((t)=>t.stateNumber.toString()).join("_")}`;
}
m$1(wl, "getATNConfigKey");
function Tm(r, e) {
    let t = {};
    return (n)=>{
        let i = /*#__PURE__*/ n.toString(), s = t[i];
        return s !== void 0 || (s = {
            atnStartState: r,
            decision: e,
            states: {}
        }, t[i] = s), s;
    };
}
m$1(Tm, "createDFACache");
var ka = class {
    static #_ = m$1(this, "PredicateSet");
    constructor(){
        this.predicates = [];
    }
    is(e) {
        return e >= this.predicates.length || this.predicates[e];
    }
    set(e, t) {
        this.predicates[e] = t;
    }
    toString() {
        let e = "", t = this.predicates.length;
        for(let n = 0; n < t; n++)e += this.predicates[n] === true ? "1" : "0";
        return e;
    }
}, vd = new ka, Ui = class extends Lt {
    static #_ = m$1(this, "LLStarLookaheadStrategy");
    constructor(e){
        var t;
        super(), this.logging = (t = e?.logging) !== null && t !== void 0 ? t : (n)=>console.log(n);
    }
    initialize(e) {
        this.atn = /*#__PURE__*/ xd(e.rules), this.dfas = /*#__PURE__*/ xm(this.atn);
    }
    validateAmbiguousAlternationAlternatives() {
        return [];
    }
    validateEmptyOrAlternatives() {
        return [];
    }
    buildLookaheadForAlternation(e) {
        let { prodOccurrence: t, rule: n, hasPredicates: i, dynamicTokensEnabled: s } = e, o = this.dfas, l = this.logging, c = /*#__PURE__*/ hr(n, "Alternation", t), d = this.atn.decisionMap[c].decision, f = /*#__PURE__*/ Jr$1(/*#__PURE__*/ na({
            maxLookahead: 1,
            occurrence: t,
            prodType: "Alternation",
            rule: n
        }), (h)=>Jr$1(h, (p)=>p[0]));
        if (kd(f, false) && !s) {
            let h = /*#__PURE__*/ Rn$1(f, (p, g, y)=>(Zr$1(g, (v)=>{
                    v && (p[v.tokenTypeIdx] = y, Zr$1(v.categoryMatches, (R)=>{
                        p[R] = y;
                    }));
                }), p), {});
            return i ? function(p) {
                var g;
                let y = /*#__PURE__*/ this.LA(1), v = h[y.tokenTypeIdx];
                if (p !== void 0 && v !== void 0) {
                    let R = (g = p[v]) === null || g === void 0 ? void 0 : g.GATE;
                    if (R !== void 0 && R.call(this) === false) return;
                }
                return v;
            } : function() {
                let p = /*#__PURE__*/ this.LA(1);
                return h[p.tokenTypeIdx];
            };
        } else return i ? function(h) {
            let p = new ka, g = h === void 0 ? 0 : h.length;
            for(let v = 0; v < g; v++){
                let R = h?.[v].GATE;
                p.set(v, R === void 0 || R.call(this));
            }
            let y = /*#__PURE__*/ Ll.call(this, o, d, p, l);
            return typeof y == "number" ? y : void 0;
        } : function() {
            let h = /*#__PURE__*/ Ll.call(this, o, d, vd, l);
            return typeof h == "number" ? h : void 0;
        };
    }
    buildLookaheadForOptional(e) {
        let { prodOccurrence: t, rule: n, prodType: i, dynamicTokensEnabled: s } = e, o = this.dfas, l = this.logging, c = /*#__PURE__*/ hr(n, i, t), d = this.atn.decisionMap[c].decision, f = /*#__PURE__*/ Jr$1(/*#__PURE__*/ na({
            maxLookahead: 1,
            occurrence: t,
            prodType: i,
            rule: n
        }), (h)=>Jr$1(h, (p)=>p[0]));
        if (kd(f) && f[0][0] && !s) {
            let h = f[0], p = /*#__PURE__*/ Qr$1(h);
            if (p.length === 1 && Cr$1(p[0].categoryMatches)) {
                let y = p[0].tokenTypeIdx;
                return function() {
                    return this.LA(1).tokenTypeIdx === y;
                };
            } else {
                let g = /*#__PURE__*/ Rn$1(p, (y, v)=>(v !== void 0 && (y[v.tokenTypeIdx] = true, Zr$1(v.categoryMatches, (R)=>{
                        y[R] = true;
                    })), y), {});
                return function() {
                    let y = /*#__PURE__*/ this.LA(1);
                    return g[y.tokenTypeIdx] === true;
                };
            }
        }
        return function() {
            let h = /*#__PURE__*/ Ll.call(this, o, d, vd, l);
            return typeof h == "object" ? false : h === 0;
        };
    }
};
function kd(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    let t = new Set;
    for (let n of r){
        let i = new Set;
        for (let s of n){
            if (s === void 0) {
                if (e) break;
                return false;
            }
            let o = /*#__PURE__*/ [
                s.tokenTypeIdx
            ].concat(s.categoryMatches);
            for (let l of o)if (t.has(l)) {
                if (!i.has(l)) return false;
            } else t.add(l), i.add(l);
        }
    }
    return true;
}
m$1(kd, "isLL1Sequence");
function xm(r) {
    let e = r.decisionStates.length, t = /*#__PURE__*/ Array(e);
    for(let n = 0; n < e; n++)t[n] = /*#__PURE__*/ Tm(r.decisionStates[n], n);
    return t;
}
m$1(xm, "initATNSimulator");
function Ll(r, e, t, n) {
    let i = /*#__PURE__*/ r[e](t), s = i.start;
    if (s === void 0) {
        let l = /*#__PURE__*/ _m(i.atnStartState);
        s = /*#__PURE__*/ Cd(i, /*#__PURE__*/ Nd(l)), i.start = s;
    }
    return Rm.apply(this, [
        i,
        s,
        t,
        n
    ]);
}
m$1(Ll, "adaptivePredict");
function Rm(r, e, t, n) {
    let i = e, s = 1, o = [], l = /*#__PURE__*/ this.LA(s++);
    for(;;){
        let c = /*#__PURE__*/ Nm(i, l);
        if (c === void 0 && (c = /*#__PURE__*/ Em.apply(this, [
            r,
            i,
            l,
            s,
            t,
            n
        ])), c === Fi) return Im(o, i, l);
        if (c.isAcceptState === true) return c.prediction;
        i = c, o.push(l), l = /*#__PURE__*/ this.LA(s++);
    }
}
m$1(Rm, "performLookahead");
function Em(r, e, t, n, i, s) {
    let o = /*#__PURE__*/ Cm(e.configs, t, i);
    if (o.size === 0) return Id(r, e, t, Fi), Fi;
    let l = /*#__PURE__*/ Nd(o), c = /*#__PURE__*/ $m(o, i);
    if (c !== void 0) l.isAcceptState = true, l.prediction = c, l.configs.uniqueAlt = c;
    else if (Pm(o)) {
        let u = /*#__PURE__*/ ym$1(o.alts);
        l.isAcceptState = true, l.prediction = u, l.configs.uniqueAlt = u, Am.apply(this, [
            r,
            n,
            o.alts,
            s
        ]);
    }
    return l = /*#__PURE__*/ Id(r, e, t, l), l;
}
m$1(Em, "computeLookaheadTarget");
function Am(r, e, t, n) {
    let i = [];
    for(let u = 1; u <= e; u++)i.push(this.LA(u).tokenType);
    let s = r.atnStartState, o = s.rule, l = s.production, c = /*#__PURE__*/ vm({
        topLevelRule: o,
        ambiguityIndices: t,
        production: l,
        prefixPath: i
    });
    n(c);
}
m$1(Am, "reportLookaheadAmbiguity");
function vm(r) {
    let e = /*#__PURE__*/ Jr$1(r.prefixPath, (i)=>$t(i)).join(", "), t = r.production.idx === 0 ? "" : r.production.idx, n = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(", ")}> in <${km(r.production)}${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return n = n + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n;
}
m$1(vm, "buildAmbiguityError");
function km(r) {
    if (r instanceof H) return "SUBRULE";
    if (r instanceof z) return "OPTION";
    if (r instanceof X) return "OR";
    if (r instanceof Q) return "AT_LEAST_ONE";
    if (r instanceof Z) return "AT_LEAST_ONE_SEP";
    if (r instanceof q) return "MANY_SEP";
    if (r instanceof F) return "MANY";
    if (r instanceof D) return "CONSUME";
    throw Error("non exhaustive match");
}
m$1(km, "getProductionDslName");
function Im(r, e, t) {
    let n = /*#__PURE__*/ zi$1(e.configs.elements, (s)=>s.state.transitions), i = /*#__PURE__*/ s0(/*#__PURE__*/ n.filter((s)=>s instanceof On).map((s)=>s.tokenType), (s)=>s.tokenTypeIdx);
    return {
        actualToken: t,
        possibleTokenTypes: i,
        tokenPath: r
    };
}
m$1(Im, "buildAdaptivePredictError");
function Nm(r, e) {
    return r.edges[e.tokenTypeIdx];
}
m$1(Nm, "getExistingTargetState");
function Cm(r, e, t) {
    let n = new Dn, i = [];
    for (let o of r.elements){
        if (t.is(o.alt) === false) continue;
        if (o.state.type === bn) {
            i.push(o);
            continue;
        }
        let l = o.state.transitions.length;
        for(let c = 0; c < l; c++){
            let u = o.state.transitions[c], d = /*#__PURE__*/ Sm(u, e);
            d !== void 0 && n.add({
                state: d,
                alt: o.alt,
                stack: o.stack
            });
        }
    }
    let s;
    if (i.length === 0 && n.size === 1 && (s = n), s === void 0) {
        s = new Dn;
        for (let o of n.elements)Ia(o, s);
    }
    if (i.length > 0 && !Lm(s)) for (let o of i)s.add(o);
    return s;
}
m$1(Cm, "computeReachSet");
function Sm(r, e) {
    if (r instanceof On && ki(e, r.tokenType)) return r.target;
}
m$1(Sm, "getReachableTarget");
function $m(r, e) {
    let t;
    for (let n of r.elements)if (e.is(n.alt) === true) {
        if (t === void 0) t = n.alt;
        else if (t !== n.alt) return;
    }
    return t;
}
m$1($m, "getUniqueAlt");
function Nd(r) {
    return {
        configs: r,
        edges: {},
        isAcceptState: false,
        prediction: -1
    };
}
m$1(Nd, "newDFAState");
function Id(r, e, t, n) {
    return n = /*#__PURE__*/ Cd(r, n), e.edges[t.tokenTypeIdx] = n, n;
}
m$1(Id, "addDFAEdge");
function Cd(r, e) {
    if (e === Fi) return e;
    let t = e.configs.key, n = r.states[t];
    return n !== void 0 ? n : (e.configs.finalize(), r.states[t] = e, e);
}
m$1(Cd, "addDFAState");
function _m(r) {
    let e = new Dn, t = r.transitions.length;
    for(let n = 0; n < t; n++){
        let s = {
            state: r.transitions[n].target,
            alt: n,
            stack: []
        };
        Ia(s, e);
    }
    return e;
}
m$1(_m, "computeStartState");
function Ia(r, e) {
    let t = r.state;
    if (t.type === bn) {
        if (r.stack.length > 0) {
            let i = [
                ...r.stack
            ], o = {
                state: /*#__PURE__*/ i.pop(),
                alt: r.alt,
                stack: i
            };
            Ia(o, e);
        } else e.add(r);
        return;
    }
    t.epsilonOnlyTransitions || e.add(r);
    let n = t.transitions.length;
    for(let i = 0; i < n; i++){
        let s = t.transitions[i], o = /*#__PURE__*/ wm(r, s);
        o !== void 0 && Ia(o, e);
    }
}
m$1(Ia, "closure");
function wm(r, e) {
    if (e instanceof Di) return {
        state: e.target,
        alt: r.alt,
        stack: r.stack
    };
    if (e instanceof Pn) {
        let t = [
            ...r.stack,
            e.followState
        ];
        return {
            state: e.target,
            alt: r.alt,
            stack: t
        };
    }
}
m$1(wm, "getEpsilonTarget");
function Lm(r) {
    for (let e of r.elements)if (e.state.type === bn) return true;
    return false;
}
m$1(Lm, "hasConfigInRuleStopState");
function Om(r) {
    for (let e of r.elements)if (e.state.type !== bn) return false;
    return true;
}
m$1(Om, "allConfigsInRuleStopStates");
function Pm(r) {
    if (Om(r)) return true;
    let e = /*#__PURE__*/ bm(r.elements);
    return Mm(e) && !Dm(e);
}
m$1(Pm, "hasConflictTerminatingPrediction");
function bm(r) {
    let e = new Map;
    for (let t of r){
        let n = /*#__PURE__*/ wl(t, false), i = /*#__PURE__*/ e.get(n);
        i === void 0 && (i = {}, e.set(n, i)), i[t.alt] = true;
    }
    return e;
}
m$1(bm, "getConflictingAltSets");
function Mm(r) {
    for (let e of Array.from(/*#__PURE__*/ r.values()))if (Object.keys(e).length > 1) return true;
    return false;
}
m$1(Mm, "hasConflictingAltSet");
function Dm(r) {
    for (let e of Array.from(/*#__PURE__*/ r.values()))if (Object.keys(e).length === 1) return true;
    return false;
}
m$1(Dm, "hasStateAssociatedWithOneAlt");
var Sd;
(function(r) {
    function e(t) {
        return typeof t == "string";
    }
    m$1(e, "is"), r.is = e;
})(Sd || (Sd = {}));
var Ol;
(function(r) {
    function e(t) {
        return typeof t == "string";
    }
    m$1(e, "is"), r.is = e;
})(Ol || (Ol = {}));
var $d;
(function(r) {
    r.MIN_VALUE = -2147483648, r.MAX_VALUE = 2147483647;
    function e(t) {
        return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
    }
    m$1(e, "is"), r.is = e;
})($d || ($d = {}));
var Na;
(function(r) {
    r.MIN_VALUE = 0, r.MAX_VALUE = 2147483647;
    function e(t) {
        return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
    }
    m$1(e, "is"), r.is = e;
})(Na || (Na = {}));
var W;
(function(r) {
    function e(n, i) {
        return n === Number.MAX_VALUE && (n = Na.MAX_VALUE), i === Number.MAX_VALUE && (i = Na.MAX_VALUE), {
            line: n,
            character: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && m.uinteger(i.line) && m.uinteger(i.character);
    }
    m$1(t, "is"), r.is = t;
})(W || (W = {}));
var U;
(function(r) {
    function e(n, i, s, o) {
        if (m.uinteger(n) && m.uinteger(i) && m.uinteger(s) && m.uinteger(o)) return {
            start: /*#__PURE__*/ W.create(n, i),
            end: /*#__PURE__*/ W.create(s, o)
        };
        if (W.is(n) && W.is(i)) return {
            start: n,
            end: i
        };
        throw new Error(`Range#create called with invalid arguments[${n}, ${i}, ${s}, ${o}]`);
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && W.is(i.start) && W.is(i.end);
    }
    m$1(t, "is"), r.is = t;
})(U || (U = {}));
var Ca;
(function(r) {
    function e(n, i) {
        return {
            uri: n,
            range: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && U.is(i.range) && (m.string(i.uri) || m.undefined(i.uri));
    }
    m$1(t, "is"), r.is = t;
})(Ca || (Ca = {}));
var _d;
(function(r) {
    function e(n, i, s, o) {
        return {
            targetUri: n,
            targetRange: i,
            targetSelectionRange: s,
            originSelectionRange: o
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && U.is(i.targetRange) && m.string(i.targetUri) && U.is(i.targetSelectionRange) && (U.is(i.originSelectionRange) || m.undefined(i.originSelectionRange));
    }
    m$1(t, "is"), r.is = t;
})(_d || (_d = {}));
var Pl;
(function(r) {
    function e(n, i, s, o) {
        return {
            red: n,
            green: i,
            blue: s,
            alpha: o
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && m.numberRange(i.red, 0, 1) && m.numberRange(i.green, 0, 1) && m.numberRange(i.blue, 0, 1) && m.numberRange(i.alpha, 0, 1);
    }
    m$1(t, "is"), r.is = t;
})(Pl || (Pl = {}));
var wd;
(function(r) {
    function e(n, i) {
        return {
            range: n,
            color: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && U.is(i.range) && Pl.is(i.color);
    }
    m$1(t, "is"), r.is = t;
})(wd || (wd = {}));
var Ld;
(function(r) {
    function e(n, i, s) {
        return {
            label: n,
            textEdit: i,
            additionalTextEdits: s
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && m.string(i.label) && (m.undefined(i.textEdit) || Un.is(i)) && (m.undefined(i.additionalTextEdits) || m.typedArray(i.additionalTextEdits, Un.is));
    }
    m$1(t, "is"), r.is = t;
})(Ld || (Ld = {}));
var Od;
(function(r) {
    r.Comment = "comment", r.Imports = "imports", r.Region = "region";
})(Od || (Od = {}));
var Pd;
(function(r) {
    function e(n, i, s, o, l, c) {
        let u = {
            startLine: n,
            endLine: i
        };
        return m.defined(s) && (u.startCharacter = s), m.defined(o) && (u.endCharacter = o), m.defined(l) && (u.kind = l), m.defined(c) && (u.collapsedText = c), u;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && m.uinteger(i.startLine) && m.uinteger(i.startLine) && (m.undefined(i.startCharacter) || m.uinteger(i.startCharacter)) && (m.undefined(i.endCharacter) || m.uinteger(i.endCharacter)) && (m.undefined(i.kind) || m.string(i.kind));
    }
    m$1(t, "is"), r.is = t;
})(Pd || (Pd = {}));
var bl;
(function(r) {
    function e(n, i) {
        return {
            location: n,
            message: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && Ca.is(i.location) && m.string(i.message);
    }
    m$1(t, "is"), r.is = t;
})(bl || (bl = {}));
var bd;
(function(r) {
    r.Error = 1, r.Warning = 2, r.Information = 3, r.Hint = 4;
})(bd || (bd = {}));
var Md;
(function(r) {
    r.Unnecessary = 1, r.Deprecated = 2;
})(Md || (Md = {}));
var Dd;
(function(r) {
    function e(t) {
        let n = t;
        return m.objectLiteral(n) && m.string(n.href);
    }
    m$1(e, "is"), r.is = e;
})(Dd || (Dd = {}));
var Sa;
(function(r) {
    function e(n, i, s, o, l, c) {
        let u = {
            range: n,
            message: i
        };
        return m.defined(s) && (u.severity = s), m.defined(o) && (u.code = o), m.defined(l) && (u.source = l), m.defined(c) && (u.relatedInformation = c), u;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        var i;
        let s = n;
        return m.defined(s) && U.is(s.range) && m.string(s.message) && (m.number(s.severity) || m.undefined(s.severity)) && (m.integer(s.code) || m.string(s.code) || m.undefined(s.code)) && (m.undefined(s.codeDescription) || m.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (m.string(s.source) || m.undefined(s.source)) && (m.undefined(s.relatedInformation) || m.typedArray(s.relatedInformation, bl.is));
    }
    m$1(t, "is"), r.is = t;
})(Sa || (Sa = {}));
var Fn;
(function(r) {
    function e(n, i) {
        for(var _len = arguments.length, s = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            s[_key - 2] = arguments[_key];
        }
        let o = {
            title: n,
            command: i
        };
        return m.defined(s) && s.length > 0 && (o.arguments = s), o;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && m.string(i.title) && m.string(i.command);
    }
    m$1(t, "is"), r.is = t;
})(Fn || (Fn = {}));
var Un;
(function(r) {
    function e(s, o) {
        return {
            range: s,
            newText: o
        };
    }
    m$1(e, "replace"), r.replace = e;
    function t(s, o) {
        return {
            range: {
                start: s,
                end: s
            },
            newText: o
        };
    }
    m$1(t, "insert"), r.insert = t;
    function n(s) {
        return {
            range: s,
            newText: ""
        };
    }
    m$1(n, "del"), r.del = n;
    function i(s) {
        let o = s;
        return m.objectLiteral(o) && m.string(o.newText) && U.is(o.range);
    }
    m$1(i, "is"), r.is = i;
})(Un || (Un = {}));
var Ml;
(function(r) {
    function e(n, i, s) {
        let o = {
            label: n
        };
        return i !== void 0 && (o.needsConfirmation = i), s !== void 0 && (o.description = s), o;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && m.string(i.label) && (m.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (m.string(i.description) || i.description === void 0);
    }
    m$1(t, "is"), r.is = t;
})(Ml || (Ml = {}));
var Gn;
(function(r) {
    function e(t) {
        let n = t;
        return m.string(n);
    }
    m$1(e, "is"), r.is = e;
})(Gn || (Gn = {}));
var Fd;
(function(r) {
    function e(s, o, l) {
        return {
            range: s,
            newText: o,
            annotationId: l
        };
    }
    m$1(e, "replace"), r.replace = e;
    function t(s, o, l) {
        return {
            range: {
                start: s,
                end: s
            },
            newText: o,
            annotationId: l
        };
    }
    m$1(t, "insert"), r.insert = t;
    function n(s, o) {
        return {
            range: s,
            newText: "",
            annotationId: o
        };
    }
    m$1(n, "del"), r.del = n;
    function i(s) {
        let o = s;
        return Un.is(o) && (Ml.is(o.annotationId) || Gn.is(o.annotationId));
    }
    m$1(i, "is"), r.is = i;
})(Fd || (Fd = {}));
var Dl;
(function(r) {
    function e(n, i) {
        return {
            textDocument: n,
            edits: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && Wl.is(i.textDocument) && Array.isArray(i.edits);
    }
    m$1(t, "is"), r.is = t;
})(Dl || (Dl = {}));
var Fl;
(function(r) {
    function e(n, i, s) {
        let o = {
            kind: "create",
            uri: n
        };
        return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (o.options = i), s !== void 0 && (o.annotationId = s), o;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i && i.kind === "create" && m.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || m.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || m.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
    }
    m$1(t, "is"), r.is = t;
})(Fl || (Fl = {}));
var Ul;
(function(r) {
    function e(n, i, s, o) {
        let l = {
            kind: "rename",
            oldUri: n,
            newUri: i
        };
        return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (l.options = s), o !== void 0 && (l.annotationId = o), l;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i && i.kind === "rename" && m.string(i.oldUri) && m.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || m.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || m.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
    }
    m$1(t, "is"), r.is = t;
})(Ul || (Ul = {}));
var Gl;
(function(r) {
    function e(n, i, s) {
        let o = {
            kind: "delete",
            uri: n
        };
        return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (o.options = i), s !== void 0 && (o.annotationId = s), o;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i && i.kind === "delete" && m.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || m.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || m.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
    }
    m$1(t, "is"), r.is = t;
})(Gl || (Gl = {}));
var Bl;
(function(r) {
    function e(t) {
        let n = t;
        return n && (n.changes !== void 0 || n.documentChanges !== void 0) && (n.documentChanges === void 0 || n.documentChanges.every((i)=>m.string(i.kind) ? Fl.is(i) || Ul.is(i) || Gl.is(i) : Dl.is(i)));
    }
    m$1(e, "is"), r.is = e;
})(Bl || (Bl = {}));
var Ud;
(function(r) {
    function e(n) {
        return {
            uri: n
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && m.string(i.uri);
    }
    m$1(t, "is"), r.is = t;
})(Ud || (Ud = {}));
var Gd;
(function(r) {
    function e(n, i) {
        return {
            uri: n,
            version: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && m.string(i.uri) && m.integer(i.version);
    }
    m$1(t, "is"), r.is = t;
})(Gd || (Gd = {}));
var Wl;
(function(r) {
    function e(n, i) {
        return {
            uri: n,
            version: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && m.string(i.uri) && (i.version === null || m.integer(i.version));
    }
    m$1(t, "is"), r.is = t;
})(Wl || (Wl = {}));
var Bd;
(function(r) {
    function e(n, i, s, o) {
        return {
            uri: n,
            languageId: i,
            version: s,
            text: o
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && m.string(i.uri) && m.string(i.languageId) && m.integer(i.version) && m.string(i.text);
    }
    m$1(t, "is"), r.is = t;
})(Bd || (Bd = {}));
var Kl;
(function(r) {
    r.PlainText = "plaintext", r.Markdown = "markdown";
    function e(t) {
        let n = t;
        return n === r.PlainText || n === r.Markdown;
    }
    m$1(e, "is"), r.is = e;
})(Kl || (Kl = {}));
var Gi;
(function(r) {
    function e(t) {
        let n = t;
        return m.objectLiteral(t) && Kl.is(n.kind) && m.string(n.value);
    }
    m$1(e, "is"), r.is = e;
})(Gi || (Gi = {}));
var Wd;
(function(r) {
    r.Text = 1, r.Method = 2, r.Function = 3, r.Constructor = 4, r.Field = 5, r.Variable = 6, r.Class = 7, r.Interface = 8, r.Module = 9, r.Property = 10, r.Unit = 11, r.Value = 12, r.Enum = 13, r.Keyword = 14, r.Snippet = 15, r.Color = 16, r.File = 17, r.Reference = 18, r.Folder = 19, r.EnumMember = 20, r.Constant = 21, r.Struct = 22, r.Event = 23, r.Operator = 24, r.TypeParameter = 25;
})(Wd || (Wd = {}));
var Kd;
(function(r) {
    r.PlainText = 1, r.Snippet = 2;
})(Kd || (Kd = {}));
var Vd;
(function(r) {
    r.Deprecated = 1;
})(Vd || (Vd = {}));
var jd;
(function(r) {
    function e(n, i, s) {
        return {
            newText: n,
            insert: i,
            replace: s
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i && m.string(i.newText) && U.is(i.insert) && U.is(i.replace);
    }
    m$1(t, "is"), r.is = t;
})(jd || (jd = {}));
var Hd;
(function(r) {
    r.asIs = 1, r.adjustIndentation = 2;
})(Hd || (Hd = {}));
var zd;
(function(r) {
    function e(t) {
        let n = t;
        return n && (m.string(n.detail) || n.detail === void 0) && (m.string(n.description) || n.description === void 0);
    }
    m$1(e, "is"), r.is = e;
})(zd || (zd = {}));
var qd;
(function(r) {
    function e(t) {
        return {
            label: t
        };
    }
    m$1(e, "create"), r.create = e;
})(qd || (qd = {}));
var Xd;
(function(r) {
    function e(t, n) {
        return {
            items: t || [],
            isIncomplete: !!n
        };
    }
    m$1(e, "create"), r.create = e;
})(Xd || (Xd = {}));
var $a;
(function(r) {
    function e(n) {
        return n.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    m$1(e, "fromPlainText"), r.fromPlainText = e;
    function t(n) {
        let i = n;
        return m.string(i) || m.objectLiteral(i) && m.string(i.language) && m.string(i.value);
    }
    m$1(t, "is"), r.is = t;
})($a || ($a = {}));
var Yd;
(function(r) {
    function e(t) {
        let n = t;
        return !!n && m.objectLiteral(n) && (Gi.is(n.contents) || $a.is(n.contents) || m.typedArray(n.contents, $a.is)) && (t.range === void 0 || U.is(t.range));
    }
    m$1(e, "is"), r.is = e;
})(Yd || (Yd = {}));
var Jd;
(function(r) {
    function e(t, n) {
        return n ? {
            label: t,
            documentation: n
        } : {
            label: t
        };
    }
    m$1(e, "create"), r.create = e;
})(Jd || (Jd = {}));
var Qd;
(function(r) {
    function e(t, n) {
        for(var _len = arguments.length, i = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            i[_key - 2] = arguments[_key];
        }
        let s = {
            label: t
        };
        return m.defined(n) && (s.documentation = n), m.defined(i) ? s.parameters = i : s.parameters = [], s;
    }
    m$1(e, "create"), r.create = e;
})(Qd || (Qd = {}));
var Zd;
(function(r) {
    r.Text = 1, r.Read = 2, r.Write = 3;
})(Zd || (Zd = {}));
var ef;
(function(r) {
    function e(t, n) {
        let i = {
            range: t
        };
        return m.number(n) && (i.kind = n), i;
    }
    m$1(e, "create"), r.create = e;
})(ef || (ef = {}));
var tf;
(function(r) {
    r.File = 1, r.Module = 2, r.Namespace = 3, r.Package = 4, r.Class = 5, r.Method = 6, r.Property = 7, r.Field = 8, r.Constructor = 9, r.Enum = 10, r.Interface = 11, r.Function = 12, r.Variable = 13, r.Constant = 14, r.String = 15, r.Number = 16, r.Boolean = 17, r.Array = 18, r.Object = 19, r.Key = 20, r.Null = 21, r.EnumMember = 22, r.Struct = 23, r.Event = 24, r.Operator = 25, r.TypeParameter = 26;
})(tf || (tf = {}));
var rf;
(function(r) {
    r.Deprecated = 1;
})(rf || (rf = {}));
var nf;
(function(r) {
    function e(t, n, i, s, o) {
        let l = {
            name: t,
            kind: n,
            location: {
                uri: s,
                range: i
            }
        };
        return o && (l.containerName = o), l;
    }
    m$1(e, "create"), r.create = e;
})(nf || (nf = {}));
var sf;
(function(r) {
    function e(t, n, i, s) {
        return s !== void 0 ? {
            name: t,
            kind: n,
            location: {
                uri: i,
                range: s
            }
        } : {
            name: t,
            kind: n,
            location: {
                uri: i
            }
        };
    }
    m$1(e, "create"), r.create = e;
})(sf || (sf = {}));
var af;
(function(r) {
    function e(n, i, s, o, l, c) {
        let u = {
            name: n,
            detail: i,
            kind: s,
            range: o,
            selectionRange: l
        };
        return c !== void 0 && (u.children = c), u;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i && m.string(i.name) && m.number(i.kind) && U.is(i.range) && U.is(i.selectionRange) && (i.detail === void 0 || m.string(i.detail)) && (i.deprecated === void 0 || m.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
    }
    m$1(t, "is"), r.is = t;
})(af || (af = {}));
var of;
(function(r) {
    r.Empty = "", r.QuickFix = "quickfix", r.Refactor = "refactor", r.RefactorExtract = "refactor.extract", r.RefactorInline = "refactor.inline", r.RefactorRewrite = "refactor.rewrite", r.Source = "source", r.SourceOrganizeImports = "source.organizeImports", r.SourceFixAll = "source.fixAll";
})(of || (of = {}));
var _a;
(function(r) {
    r.Invoked = 1, r.Automatic = 2;
})(_a || (_a = {}));
var lf;
(function(r) {
    function e(n, i, s) {
        let o = {
            diagnostics: n
        };
        return i != null && (o.only = i), s != null && (o.triggerKind = s), o;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && m.typedArray(i.diagnostics, Sa.is) && (i.only === void 0 || m.typedArray(i.only, m.string)) && (i.triggerKind === void 0 || i.triggerKind === _a.Invoked || i.triggerKind === _a.Automatic);
    }
    m$1(t, "is"), r.is = t;
})(lf || (lf = {}));
var cf;
(function(r) {
    function e(n, i, s) {
        let o = {
            title: n
        }, l = true;
        return typeof i == "string" ? (l = false, o.kind = i) : Fn.is(i) ? o.command = i : o.edit = i, l && s !== void 0 && (o.kind = s), o;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i && m.string(i.title) && (i.diagnostics === void 0 || m.typedArray(i.diagnostics, Sa.is)) && (i.kind === void 0 || m.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Fn.is(i.command)) && (i.isPreferred === void 0 || m.boolean(i.isPreferred)) && (i.edit === void 0 || Bl.is(i.edit));
    }
    m$1(t, "is"), r.is = t;
})(cf || (cf = {}));
var uf;
(function(r) {
    function e(n, i) {
        let s = {
            range: n
        };
        return m.defined(i) && (s.data = i), s;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && U.is(i.range) && (m.undefined(i.command) || Fn.is(i.command));
    }
    m$1(t, "is"), r.is = t;
})(uf || (uf = {}));
var df;
(function(r) {
    function e(n, i) {
        return {
            tabSize: n,
            insertSpaces: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && m.uinteger(i.tabSize) && m.boolean(i.insertSpaces);
    }
    m$1(t, "is"), r.is = t;
})(df || (df = {}));
var ff;
(function(r) {
    function e(n, i, s) {
        return {
            range: n,
            target: i,
            data: s
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && U.is(i.range) && (m.undefined(i.target) || m.string(i.target));
    }
    m$1(t, "is"), r.is = t;
})(ff || (ff = {}));
var hf;
(function(r) {
    function e(n, i) {
        return {
            range: n,
            parent: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && U.is(i.range) && (i.parent === void 0 || r.is(i.parent));
    }
    m$1(t, "is"), r.is = t;
})(hf || (hf = {}));
var pf;
(function(r) {
    r.namespace = "namespace", r.type = "type", r.class = "class", r.enum = "enum", r.interface = "interface", r.struct = "struct", r.typeParameter = "typeParameter", r.parameter = "parameter", r.variable = "variable", r.property = "property", r.enumMember = "enumMember", r.event = "event", r.function = "function", r.method = "method", r.macro = "macro", r.keyword = "keyword", r.modifier = "modifier", r.comment = "comment", r.string = "string", r.number = "number", r.regexp = "regexp", r.operator = "operator", r.decorator = "decorator";
})(pf || (pf = {}));
var mf;
(function(r) {
    r.declaration = "declaration", r.definition = "definition", r.readonly = "readonly", r.static = "static", r.deprecated = "deprecated", r.abstract = "abstract", r.async = "async", r.modification = "modification", r.documentation = "documentation", r.defaultLibrary = "defaultLibrary";
})(mf || (mf = {}));
var gf;
(function(r) {
    function e(t) {
        let n = t;
        return m.objectLiteral(n) && (n.resultId === void 0 || typeof n.resultId == "string") && Array.isArray(n.data) && (n.data.length === 0 || typeof n.data[0] == "number");
    }
    m$1(e, "is"), r.is = e;
})(gf || (gf = {}));
var yf;
(function(r) {
    function e(n, i) {
        return {
            range: n,
            text: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i != null && U.is(i.range) && m.string(i.text);
    }
    m$1(t, "is"), r.is = t;
})(yf || (yf = {}));
var Tf;
(function(r) {
    function e(n, i, s) {
        return {
            range: n,
            variableName: i,
            caseSensitiveLookup: s
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i != null && U.is(i.range) && m.boolean(i.caseSensitiveLookup) && (m.string(i.variableName) || i.variableName === void 0);
    }
    m$1(t, "is"), r.is = t;
})(Tf || (Tf = {}));
var xf;
(function(r) {
    function e(n, i) {
        return {
            range: n,
            expression: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return i != null && U.is(i.range) && (m.string(i.expression) || i.expression === void 0);
    }
    m$1(t, "is"), r.is = t;
})(xf || (xf = {}));
var Rf;
(function(r) {
    function e(n, i) {
        return {
            frameId: n,
            stoppedLocation: i
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.defined(i) && U.is(n.stoppedLocation);
    }
    m$1(t, "is"), r.is = t;
})(Rf || (Rf = {}));
var Vl;
(function(r) {
    r.Type = 1, r.Parameter = 2;
    function e(t) {
        return t === 1 || t === 2;
    }
    m$1(e, "is"), r.is = e;
})(Vl || (Vl = {}));
var jl;
(function(r) {
    function e(n) {
        return {
            value: n
        };
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && (i.tooltip === void 0 || m.string(i.tooltip) || Gi.is(i.tooltip)) && (i.location === void 0 || Ca.is(i.location)) && (i.command === void 0 || Fn.is(i.command));
    }
    m$1(t, "is"), r.is = t;
})(jl || (jl = {}));
var Ef;
(function(r) {
    function e(n, i, s) {
        let o = {
            position: n,
            label: i
        };
        return s !== void 0 && (o.kind = s), o;
    }
    m$1(e, "create"), r.create = e;
    function t(n) {
        let i = n;
        return m.objectLiteral(i) && W.is(i.position) && (m.string(i.label) || m.typedArray(i.label, jl.is)) && (i.kind === void 0 || Vl.is(i.kind)) && i.textEdits === void 0 || m.typedArray(i.textEdits, Un.is) && (i.tooltip === void 0 || m.string(i.tooltip) || Gi.is(i.tooltip)) && (i.paddingLeft === void 0 || m.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || m.boolean(i.paddingRight));
    }
    m$1(t, "is"), r.is = t;
})(Ef || (Ef = {}));
var Af;
(function(r) {
    function e(t) {
        return {
            kind: "snippet",
            value: t
        };
    }
    m$1(e, "createSnippet"), r.createSnippet = e;
})(Af || (Af = {}));
var vf;
(function(r) {
    function e(t, n, i, s) {
        return {
            insertText: t,
            filterText: n,
            range: i,
            command: s
        };
    }
    m$1(e, "create"), r.create = e;
})(vf || (vf = {}));
var kf;
(function(r) {
    function e(t) {
        return {
            items: t
        };
    }
    m$1(e, "create"), r.create = e;
})(kf || (kf = {}));
var If;
(function(r) {
    r.Invoked = 0, r.Automatic = 1;
})(If || (If = {}));
var Nf;
(function(r) {
    function e(t, n) {
        return {
            range: t,
            text: n
        };
    }
    m$1(e, "create"), r.create = e;
})(Nf || (Nf = {}));
var Cf;
(function(r) {
    function e(t, n) {
        return {
            triggerKind: t,
            selectedCompletionInfo: n
        };
    }
    m$1(e, "create"), r.create = e;
})(Cf || (Cf = {}));
var Sf;
(function(r) {
    function e(t) {
        let n = t;
        return m.objectLiteral(n) && Ol.is(n.uri) && m.string(n.name);
    }
    m$1(e, "is"), r.is = e;
})(Sf || (Sf = {}));
var $f;
(function(r) {
    function e(s, o, l, c) {
        return new Hl(s, o, l, c);
    }
    m$1(e, "create"), r.create = e;
    function t(s) {
        let o = s;
        return !!(m.defined(o) && m.string(o.uri) && (m.undefined(o.languageId) || m.string(o.languageId)) && m.uinteger(o.lineCount) && m.func(o.getText) && m.func(o.positionAt) && m.func(o.offsetAt));
    }
    m$1(t, "is"), r.is = t;
    function n(s, o) {
        let l = /*#__PURE__*/ s.getText(), c = /*#__PURE__*/ i(o, (d, f)=>{
            let h = d.range.start.line - f.range.start.line;
            return h === 0 ? d.range.start.character - f.range.start.character : h;
        }), u = l.length;
        for(let d = c.length - 1; d >= 0; d--){
            let f = c[d], h = /*#__PURE__*/ s.offsetAt(f.range.start), p = /*#__PURE__*/ s.offsetAt(f.range.end);
            if (p <= u) l = l.substring(0, h) + f.newText + l.substring(p, l.length);
            else throw new Error("Overlapping edit");
            u = h;
        }
        return l;
    }
    m$1(n, "applyEdits"), r.applyEdits = n;
    function i(s, o) {
        if (s.length <= 1) return s;
        let l = s.length / 2 | 0, c = /*#__PURE__*/ s.slice(0, l), u = /*#__PURE__*/ s.slice(l);
        i(c, o), i(u, o);
        let d = 0, f = 0, h = 0;
        for(; d < c.length && f < u.length;)o(c[d], u[f]) <= 0 ? s[h++] = c[d++] : s[h++] = u[f++];
        for(; d < c.length;)s[h++] = c[d++];
        for(; f < u.length;)s[h++] = u[f++];
        return s;
    }
    m$1(i, "mergeSort");
})($f || ($f = {}));
var Hl = class {
    static #_ = m$1(this, "FullTextDocument");
    constructor(e, t, n, i){
        this._uri = e, this._languageId = t, this._version = n, this._content = i, this._lineOffsets = void 0;
    }
    get uri() {
        return this._uri;
    }
    get languageId() {
        return this._languageId;
    }
    get version() {
        return this._version;
    }
    getText(e) {
        if (e) {
            let t = /*#__PURE__*/ this.offsetAt(e.start), n = /*#__PURE__*/ this.offsetAt(e.end);
            return this._content.substring(t, n);
        }
        return this._content;
    }
    update(e, t) {
        this._content = e.text, this._version = t, this._lineOffsets = void 0;
    }
    getLineOffsets() {
        if (this._lineOffsets === void 0) {
            let e = [], t = this._content, n = true;
            for(let i = 0; i < t.length; i++){
                n && (e.push(i), n = false);
                let s = /*#__PURE__*/ t.charAt(i);
                n = s === "\r" || s === `
`, s === "\r" && i + 1 < t.length && t.charAt(i + 1) === `
` && i++;
            }
            n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
        }
        return this._lineOffsets;
    }
    positionAt(e) {
        e = /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.min(e, this._content.length), 0);
        let t = /*#__PURE__*/ this.getLineOffsets(), n = 0, i = t.length;
        if (i === 0) return W.create(0, e);
        for(; n < i;){
            let o = /*#__PURE__*/ Math.floor((n + i) / 2);
            t[o] > e ? i = o : n = o + 1;
        }
        let s = n - 1;
        return W.create(s, e - t[s]);
    }
    offsetAt(e) {
        let t = /*#__PURE__*/ this.getLineOffsets();
        if (e.line >= t.length) return this._content.length;
        if (e.line < 0) return 0;
        let n = t[e.line], i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
        return Math.max(/*#__PURE__*/ Math.min(n + e.character, i), n);
    }
    get lineCount() {
        return this.getLineOffsets().length;
    }
}, m;
(function(r) {
    let e = Object.prototype.toString;
    function t(p) {
        return typeof p < "u";
    }
    m$1(t, "defined"), r.defined = t;
    function n(p) {
        return typeof p > "u";
    }
    m$1(n, "undefined"), r.undefined = n;
    function i(p) {
        return p === true || p === false;
    }
    m$1(i, "boolean"), r.boolean = i;
    function s(p) {
        return e.call(p) === "[object String]";
    }
    m$1(s, "string"), r.string = s;
    function o(p) {
        return e.call(p) === "[object Number]";
    }
    m$1(o, "number"), r.number = o;
    function l(p, g, y) {
        return e.call(p) === "[object Number]" && g <= p && p <= y;
    }
    m$1(l, "numberRange"), r.numberRange = l;
    function c(p) {
        return e.call(p) === "[object Number]" && -2147483648 <= p && p <= 2147483647;
    }
    m$1(c, "integer"), r.integer = c;
    function u(p) {
        return e.call(p) === "[object Number]" && 0 <= p && p <= 2147483647;
    }
    m$1(u, "uinteger"), r.uinteger = u;
    function d(p) {
        return e.call(p) === "[object Function]";
    }
    m$1(d, "func"), r.func = d;
    function f(p) {
        return p !== null && typeof p == "object";
    }
    m$1(f, "objectLiteral"), r.objectLiteral = f;
    function h(p, g) {
        return Array.isArray(p) && p.every(g);
    }
    m$1(h, "typedArray"), r.typedArray = h;
})(m || (m = {}));
var Bi = class {
    static #_ = m$1(this, "CstNodeBuilder");
    constructor(){
        this.nodeStack = [];
    }
    get current() {
        var e;
        return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
    }
    buildRootNode(e) {
        return this.rootNode = new Bn(e), this.rootNode.root = this.rootNode, this.nodeStack = [
            this.rootNode
        ], this.rootNode;
    }
    buildCompositeNode(e) {
        let t = new gr;
        return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
    }
    buildLeafNode(e, t) {
        let n = new mr(e.startOffset, e.image.length, Cr(e), e.tokenType, !t);
        return n.grammarSource = t, n.root = this.rootNode, this.current.content.push(n), n;
    }
    removeNode(e) {
        let t = e.container;
        if (t) {
            let n = /*#__PURE__*/ t.content.indexOf(e);
            n >= 0 && t.content.splice(n, 1);
        }
    }
    addHiddenNodes(e) {
        let t = [];
        for (let s of e){
            let o = new mr(s.startOffset, s.image.length, Cr(s), s.tokenType, true);
            o.root = this.rootNode, t.push(o);
        }
        let n = this.current, i = false;
        if (n.content.length > 0) {
            n.content.push(...t);
            return;
        }
        for(; n.container;){
            let s = /*#__PURE__*/ n.container.content.indexOf(n);
            if (s > 0) {
                n.container.content.splice(s, 0, ...t), i = true;
                break;
            }
            n = n.container;
        }
        i || this.rootNode.content.unshift(...t);
    }
    construct(e) {
        let t = this.current;
        typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = t;
        let n = /*#__PURE__*/ this.nodeStack.pop();
        n?.content.length === 0 && this.removeNode(n);
    }
}, Wi = class {
    static #_ = m$1(this, "AbstractCstNode");
    get parent() {
        return this.container;
    }
    get feature() {
        return this.grammarSource;
    }
    get hidden() {
        return false;
    }
    get astNode() {
        var e, t;
        let n = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (t = this.container) === null || t === void 0 ? void 0 : t.astNode;
        if (!n) throw new Error("This node has no associated AST element");
        return n;
    }
    set astNode(e) {
        this._astNode = e;
    }
    get element() {
        return this.astNode;
    }
    get text() {
        return this.root.fullText.substring(this.offset, this.end);
    }
}, mr = class extends Wi {
    static #_ = m$1(this, "LeafCstNodeImpl");
    get offset() {
        return this._offset;
    }
    get length() {
        return this._length;
    }
    get end() {
        return this._offset + this._length;
    }
    get hidden() {
        return this._hidden;
    }
    get tokenType() {
        return this._tokenType;
    }
    get range() {
        return this._range;
    }
    constructor(e, t, n, i, s = false){
        super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = t, this._range = n;
    }
}, gr = class extends Wi {
    static #_ = m$1(this, "CompositeCstNodeImpl");
    constructor(){
        super(...arguments), this.content = new zl(this);
    }
    get children() {
        return this.content;
    }
    get offset() {
        var e, t;
        return (t = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && t !== void 0 ? t : 0;
    }
    get length() {
        return this.end - this.offset;
    }
    get end() {
        var e, t;
        return (t = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && t !== void 0 ? t : 0;
    }
    get range() {
        let e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
        if (e && t) {
            if (this._rangeCache === void 0) {
                let { range: n } = e, { range: i } = t;
                this._rangeCache = {
                    start: n.start,
                    end: i.end.line < n.start.line ? n.start : i.end
                };
            }
            return this._rangeCache;
        } else return {
            start: /*#__PURE__*/ W.create(0, 0),
            end: /*#__PURE__*/ W.create(0, 0)
        };
    }
    get firstNonHiddenNode() {
        for (let e of this.content)if (!e.hidden) return e;
        return this.content[0];
    }
    get lastNonHiddenNode() {
        for(let e = this.content.length - 1; e >= 0; e--){
            let t = this.content[e];
            if (!t.hidden) return t;
        }
        return this.content[this.content.length - 1];
    }
}, zl = class r extends Array {
    static #_ = m$1(this, "CstNodeContainer");
    constructor(e){
        super(), this.parent = e, Object.setPrototypeOf(this, r.prototype);
    }
    push() {
        for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
            e[_key] = arguments[_key];
        }
        return this.addParents(e), super.push(...e);
    }
    unshift() {
        for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
            e[_key] = arguments[_key];
        }
        return this.addParents(e), super.unshift(...e);
    }
    splice(e, t) {
        for(var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            n[_key - 2] = arguments[_key];
        }
        return this.addParents(n), super.splice(e, t, ...n);
    }
    addParents(e) {
        for (let t of e)t.container = this.parent;
    }
}, Bn = class extends gr {
    static #_ = m$1(this, "RootCstNodeImpl");
    get text() {
        return this._text.substring(this.offset, this.end);
    }
    get fullText() {
        return this._text;
    }
    constructor(e){
        super(), this._text = "", this._text = e ?? "";
    }
};
var wa = /*#__PURE__*/ Symbol("Datatype");
function ql(r) {
    return r.$type === wa;
}
m$1(ql, "isDataTypeNode");
var _f = "\u200B", wf = /*#__PURE__*/ m$1((r)=>r.endsWith(_f) ? r : r + _f, "withRuleSuffix"), Ki = class {
    static #_ = m$1(this, "AbstractLangiumParser");
    constructor(e){
        this._unorderedGroups = new Map, this.allRules = new Map, this.lexer = e.parser.Lexer;
        let t = this.lexer.definition, n = e.LanguageMetaData.mode === "production";
        this.wrapper = new Xl(t, Object.assign(/*#__PURE__*/ Object.assign({}, e.parser.ParserConfig), {
            skipValidations: n,
            errorMessageProvider: e.parser.ParserErrorMessageProvider
        }));
    }
    alternatives(e, t) {
        this.wrapper.wrapOr(e, t);
    }
    optional(e, t) {
        this.wrapper.wrapOption(e, t);
    }
    many(e, t) {
        this.wrapper.wrapMany(e, t);
    }
    atLeastOne(e, t) {
        this.wrapper.wrapAtLeastOne(e, t);
    }
    getRule(e) {
        return this.allRules.get(e);
    }
    isRecording() {
        return this.wrapper.IS_RECORDING;
    }
    get unorderedGroups() {
        return this._unorderedGroups;
    }
    getRuleStack() {
        return this.wrapper.RULE_STACK;
    }
    finalize() {
        this.wrapper.wrapSelfAnalysis();
    }
}, Vi = class extends Ki {
    static #_ = m$1(this, "LangiumParser");
    get current() {
        return this.stack[this.stack.length - 1];
    }
    constructor(e){
        super(e), this.nodeBuilder = new Bi, this.stack = [], this.assignmentMap = new Map, this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
    }
    rule(e, t) {
        let n = /*#__PURE__*/ this.computeRuleType(e), i = /*#__PURE__*/ this.wrapper.DEFINE_RULE(/*#__PURE__*/ wf(e.name), /*#__PURE__*/ this.startImplementation(n, t).bind(this));
        return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
    }
    computeRuleType(e) {
        if (!e.fragment) {
            if (yi(e)) return wa;
            {
                let t = /*#__PURE__*/ yn(e);
                return t ?? e.name;
            }
        }
    }
    parse(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.nodeBuilder.buildRootNode(e);
        let n = this.lexerResult = /*#__PURE__*/ this.lexer.tokenize(e);
        this.wrapper.input = n.tokens;
        let i = t.rule ? this.allRules.get(t.rule) : this.mainRule;
        if (!i) throw new Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
        let s = /*#__PURE__*/ i.call(this.wrapper, {});
        return this.nodeBuilder.addHiddenNodes(n.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
            value: s,
            lexerErrors: n.errors,
            lexerReport: n.report,
            parserErrors: this.wrapper.errors
        };
    }
    startImplementation(e, t) {
        return (n)=>{
            let i = !this.isRecording() && e !== void 0;
            if (i) {
                let o = {
                    $type: e
                };
                this.stack.push(o), e === wa && (o.value = "");
            }
            let s;
            try {
                s = /*#__PURE__*/ t(n);
            } catch  {
                s = void 0;
            }
            return s === void 0 && i && (s = /*#__PURE__*/ this.construct()), s;
        };
    }
    extractHiddenTokens(e) {
        let t = this.lexerResult.hidden;
        if (!t.length) return [];
        let n = e.startOffset;
        for(let i = 0; i < t.length; i++)if (t[i].startOffset > n) return t.splice(0, i);
        return t.splice(0, t.length);
    }
    consume(e, t, n) {
        let i = /*#__PURE__*/ this.wrapper.wrapConsume(e, t);
        if (!this.isRecording() && this.isValidToken(i)) {
            let s = /*#__PURE__*/ this.extractHiddenTokens(i);
            this.nodeBuilder.addHiddenNodes(s);
            let o = /*#__PURE__*/ this.nodeBuilder.buildLeafNode(i, n), { assignment: l, isCrossRef: c } = this.getAssignment(n), u = this.current;
            if (l) {
                let d = Ye(n) ? i.image : this.converter.convert(i.image, o);
                this.assign(l.operator, l.feature, d, o, c);
            } else if (ql(u)) {
                let d = i.image;
                Ye(n) || (d = /*#__PURE__*/ this.converter.convert(d, o).toString()), u.value += d;
            }
        }
    }
    isValidToken(e) {
        return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
    }
    subrule(e, t, n, i, s) {
        let o;
        !this.isRecording() && !n && (o = /*#__PURE__*/ this.nodeBuilder.buildCompositeNode(i));
        let l = /*#__PURE__*/ this.wrapper.wrapSubrule(e, t, s);
        !this.isRecording() && o && o.length > 0 && this.performSubruleAssignment(l, i, o);
    }
    performSubruleAssignment(e, t, n) {
        let { assignment: i, isCrossRef: s } = this.getAssignment(t);
        if (i) this.assign(i.operator, i.feature, e, n, s);
        else if (!i) {
            let o = this.current;
            if (ql(o)) o.value += /*#__PURE__*/ e.toString();
            else if (typeof e == "object" && e) {
                let c = /*#__PURE__*/ this.assignWithoutOverride(e, o);
                this.stack.pop(), this.stack.push(c);
            }
        }
    }
    action(e, t) {
        if (!this.isRecording()) {
            let n = this.current;
            if (t.feature && t.operator) {
                n = /*#__PURE__*/ this.construct(), this.nodeBuilder.removeNode(n.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(n.$cstNode);
                let s = {
                    $type: e
                };
                this.stack.push(s), this.assign(t.operator, t.feature, n, n.$cstNode, false);
            } else n.$type = e;
        }
    }
    construct() {
        if (this.isRecording()) return;
        let e = this.current;
        return Ds(e), this.nodeBuilder.construct(e), this.stack.pop(), ql(e) ? this.converter.convert(e.value, e.$cstNode) : (bo(this.astReflection, e), e);
    }
    getAssignment(e) {
        if (!this.assignmentMap.has(e)) {
            let t = /*#__PURE__*/ ir(e, rt);
            this.assignmentMap.set(e, {
                assignment: t,
                isCrossRef: t ? nr(t.terminal) : false
            });
        }
        return this.assignmentMap.get(e);
    }
    assign(e, t, n, i, s) {
        let o = this.current, l;
        switch(s && typeof n == "string" ? l = /*#__PURE__*/ this.linker.buildReference(o, t, i, n) : l = n, e){
            case "=":
                {
                    o[t] = l;
                    break;
                }
            case "?=":
                {
                    o[t] = true;
                    break;
                }
            case "+=":
                Array.isArray(o[t]) || (o[t] = []), o[t].push(l);
        }
    }
    assignWithoutOverride(e, t) {
        for (let [i, s] of Object.entries(t)){
            let o = e[i];
            o === void 0 ? e[i] = s : Array.isArray(o) && Array.isArray(s) && (s.push(...o), e[i] = s);
        }
        let n = e.$cstNode;
        return n && (n.astNode = void 0, e.$cstNode = void 0), e;
    }
    get definitionErrors() {
        return this.wrapper.definitionErrors;
    }
}, La = class {
    static #_ = m$1(this, "AbstractParserErrorMessageProvider");
    buildMismatchTokenMessage(e) {
        return wt.buildMismatchTokenMessage(e);
    }
    buildNotAllInputParsedMessage(e) {
        return wt.buildNotAllInputParsedMessage(e);
    }
    buildNoViableAltMessage(e) {
        return wt.buildNoViableAltMessage(e);
    }
    buildEarlyExitMessage(e) {
        return wt.buildEarlyExitMessage(e);
    }
}, Wn = class extends La {
    static #_ = m$1(this, "LangiumParserErrorMessageProvider");
    buildMismatchTokenMessage(param) {
        let { expected: e, actual: t } = param;
        return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
    }
    buildNotAllInputParsedMessage(param) {
        let { firstRedundant: e } = param;
        return `Expecting end of file but found \`${e.image}\`.`;
    }
}, ji = class extends Ki {
    static #_ = m$1(this, "LangiumCompletionParser");
    constructor(){
        super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
    }
    action() {}
    construct() {}
    parse(e) {
        this.resetState();
        let t = /*#__PURE__*/ this.lexer.tokenize(e, {
            mode: "partial"
        });
        return this.tokens = t.tokens, this.wrapper.input = [
            ...this.tokens
        ], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
            tokens: this.tokens,
            elementStack: [
                ...this.lastElementStack
            ],
            tokenIndex: this.nextTokenIndex
        };
    }
    rule(e, t) {
        let n = /*#__PURE__*/ this.wrapper.DEFINE_RULE(/*#__PURE__*/ wf(e.name), /*#__PURE__*/ this.startImplementation(t).bind(this));
        return this.allRules.set(e.name, n), e.entry && (this.mainRule = n), n;
    }
    resetState() {
        this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
    }
    startImplementation(e) {
        return (t)=>{
            let n = /*#__PURE__*/ this.keepStackSize();
            try {
                e(t);
            } finally{
                this.resetStackSize(n);
            }
        };
    }
    removeUnexpectedElements() {
        this.elementStack.splice(this.stackSize);
    }
    keepStackSize() {
        let e = this.elementStack.length;
        return this.stackSize = e, e;
    }
    resetStackSize(e) {
        this.removeUnexpectedElements(), this.stackSize = e;
    }
    consume(e, t, n) {
        this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [
            ...this.elementStack,
            n
        ], this.nextTokenIndex = this.currIdx + 1);
    }
    subrule(e, t, n, i, s) {
        this.before(i), this.wrapper.wrapSubrule(e, t, s), this.after(i);
    }
    before(e) {
        this.isRecording() || this.elementStack.push(e);
    }
    after(e) {
        if (!this.isRecording()) {
            let t = /*#__PURE__*/ this.elementStack.lastIndexOf(e);
            t >= 0 && this.elementStack.splice(t);
        }
    }
    get currIdx() {
        return this.wrapper.currIdx;
    }
}, Fm = {
    recoveryEnabled: true,
    nodeLocationTracking: "full",
    skipValidations: true,
    errorMessageProvider: new Wn
}, Xl = class extends bi {
    static #_ = m$1(this, "ChevrotainWrapper");
    constructor(e, t){
        let n = t && "maxLookahead" in t;
        super(e, /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, Fm), {
            lookaheadStrategy: n ? new Lt({
                maxLookahead: t.maxLookahead
            }) : new Ui({
                logging: t.skipValidations ? ()=>{} : void 0
            })
        }), t));
    }
    get IS_RECORDING() {
        return this.RECORDING_PHASE;
    }
    DEFINE_RULE(e, t) {
        return this.RULE(e, t);
    }
    wrapSelfAnalysis() {
        this.performSelfAnalysis();
    }
    wrapConsume(e, t) {
        return this.consume(e, t);
    }
    wrapSubrule(e, t, n) {
        return this.subrule(e, t, {
            ARGS: [
                n
            ]
        });
    }
    wrapOr(e, t) {
        this.or(e, t);
    }
    wrapOption(e, t) {
        this.option(e, t);
    }
    wrapMany(e, t) {
        this.many(e, t);
    }
    wrapAtLeastOne(e, t) {
        this.atLeastOne(e, t);
    }
};
function Hi(r, e, t) {
    return Um({
        parser: e,
        tokens: t,
        ruleNames: new Map
    }, r), e;
}
m$1(Hi, "createParser");
function Um(r, e) {
    let t = /*#__PURE__*/ mi(e, false), n = /*#__PURE__*/ j(e.rules).filter($e).filter((i)=>t.has(i));
    for (let i of n){
        let s = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, r), {
            consume: 1,
            optional: 1,
            subrule: 1,
            many: 1,
            or: 1
        });
        r.parser.rule(i, /*#__PURE__*/ yr(s, i.definition));
    }
}
m$1(Um, "buildRules");
function yr(r, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    let n;
    if (Ye(e)) n = /*#__PURE__*/ Hm(r, e);
    else if (kt(e)) n = /*#__PURE__*/ Gm(r, e);
    else if (rt(e)) n = /*#__PURE__*/ yr(r, e.terminal);
    else if (nr(e)) n = /*#__PURE__*/ Lf(r, e);
    else if (nt(e)) n = /*#__PURE__*/ Bm(r, e);
    else if (Ps(e)) n = /*#__PURE__*/ Km(r, e);
    else if (Ms(e)) n = /*#__PURE__*/ Vm(r, e);
    else if (Gt(e)) n = /*#__PURE__*/ jm(r, e);
    else if (No(e)) {
        let i = r.consume++;
        n = /*#__PURE__*/ m$1(()=>r.parser.consume(i, qe, e), "method");
    } else throw new tr(e.$cstNode, `Unexpected element type: ${e.$type}`);
    return Of(r, t ? void 0 : Oa(e), n, e.cardinality);
}
m$1(yr, "buildElement");
function Gm(r, e) {
    let t = /*#__PURE__*/ Ti(e);
    return ()=>r.parser.action(t, e);
}
m$1(Gm, "buildAction");
function Bm(r, e) {
    let t = e.rule.ref;
    if ($e(t)) {
        let n = r.subrule++, i = t.fragment, s = e.arguments.length > 0 ? Wm(t, e.arguments) : ()=>({});
        return (o)=>r.parser.subrule(n, /*#__PURE__*/ Pf(r, t), i, e, /*#__PURE__*/ s(o));
    } else if (He(t)) {
        let n = r.consume++, i = /*#__PURE__*/ Yl(r, t.name);
        return ()=>r.parser.consume(n, i, e);
    } else if (t) ct();
    else throw new tr(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
m$1(Bm, "buildRuleCall");
function Wm(r, e) {
    let t = /*#__PURE__*/ e.map((n)=>Ot(n.value));
    return (n)=>{
        let i = {};
        for(let s = 0; s < t.length; s++){
            let o = r.parameters[s], l = t[s];
            i[o.name] = /*#__PURE__*/ l(n);
        }
        return i;
    };
}
m$1(Wm, "buildRuleCallPredicate");
function Ot(r) {
    if (xo(r)) {
        let e = /*#__PURE__*/ Ot(r.left), t = /*#__PURE__*/ Ot(r.right);
        return (n)=>e(n) || t(n);
    } else if (To(r)) {
        let e = /*#__PURE__*/ Ot(r.left), t = /*#__PURE__*/ Ot(r.right);
        return (n)=>e(n) && t(n);
    } else if (Ro(r)) {
        let e = /*#__PURE__*/ Ot(r.value);
        return (t)=>!e(t);
    } else if (Eo(r)) {
        let e = r.parameter.ref.name;
        return (t)=>t !== void 0 && t[e] === true;
    } else if (yo(r)) {
        let e = !!r.true;
        return ()=>e;
    }
    ct();
}
m$1(Ot, "buildPredicate");
function Km(r, e) {
    if (e.elements.length === 1) return yr(r, e.elements[0]);
    {
        let t = [];
        for (let i of e.elements){
            let s = {
                ALT: /*#__PURE__*/ yr(r, i, true)
            }, o = /*#__PURE__*/ Oa(i);
            o && (s.GATE = /*#__PURE__*/ Ot(o)), t.push(s);
        }
        let n = r.or++;
        return (i)=>r.parser.alternatives(n, /*#__PURE__*/ t.map((s)=>{
                let o = {
                    ALT: /*#__PURE__*/ m$1(()=>s.ALT(i), "ALT")
                }, l = s.GATE;
                return l && (o.GATE = ()=>l(i)), o;
            }));
    }
}
m$1(Km, "buildAlternatives");
function Vm(r, e) {
    if (e.elements.length === 1) return yr(r, e.elements[0]);
    let t = [];
    for (let l of e.elements){
        let c = {
            ALT: /*#__PURE__*/ yr(r, l, true)
        }, u = /*#__PURE__*/ Oa(l);
        u && (c.GATE = /*#__PURE__*/ Ot(u)), t.push(c);
    }
    let n = r.or++, i = /*#__PURE__*/ m$1((l, c)=>{
        let u = /*#__PURE__*/ c.getRuleStack().join("-");
        return `uGroup_${l}_${u}`;
    }, "idFunc"), s = /*#__PURE__*/ m$1((l)=>r.parser.alternatives(n, /*#__PURE__*/ t.map((c, u)=>{
            let d = {
                ALT: /*#__PURE__*/ m$1(()=>true, "ALT")
            }, f = r.parser;
            d.ALT = ()=>{
                if (c.ALT(l), !f.isRecording()) {
                    let p = /*#__PURE__*/ i(n, f);
                    f.unorderedGroups.get(p) || f.unorderedGroups.set(p, []);
                    let g = /*#__PURE__*/ f.unorderedGroups.get(p);
                    typeof g?.[u] > "u" && (g[u] = true);
                }
            };
            let h = c.GATE;
            return h ? d.GATE = ()=>h(l) : d.GATE = ()=>{
                let p = /*#__PURE__*/ f.unorderedGroups.get(/*#__PURE__*/ i(n, f));
                return !p?.[u];
            }, d;
        })), "alternatives"), o = /*#__PURE__*/ Of(r, /*#__PURE__*/ Oa(e), s, "*");
    return (l)=>{
        o(l), r.parser.isRecording() || r.parser.unorderedGroups.delete(/*#__PURE__*/ i(n, r.parser));
    };
}
m$1(Vm, "buildUnorderedGroup");
function jm(r, e) {
    let t = /*#__PURE__*/ e.elements.map((n)=>yr(r, n));
    return (n)=>t.forEach((i)=>i(n));
}
m$1(jm, "buildGroup");
function Oa(r) {
    if (Gt(r)) return r.guardCondition;
}
m$1(Oa, "getGuardCondition");
function Lf(r, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.terminal;
    if (t) if (nt(t) && $e(t.rule.ref)) {
        let n = t.rule.ref, i = r.subrule++;
        return (s)=>r.parser.subrule(i, /*#__PURE__*/ Pf(r, n), false, e, s);
    } else if (nt(t) && He(t.rule.ref)) {
        let n = r.consume++, i = /*#__PURE__*/ Yl(r, t.rule.ref.name);
        return ()=>r.parser.consume(n, i, e);
    } else if (Ye(t)) {
        let n = r.consume++, i = /*#__PURE__*/ Yl(r, t.value);
        return ()=>r.parser.consume(n, i, e);
    } else throw new Error("Could not build cross reference parser");
    else {
        if (!e.type.ref) throw new Error("Could not resolve reference to type: " + e.type.$refText);
        let n = /*#__PURE__*/ Ws(e.type.ref), i = n?.terminal;
        if (!i) throw new Error("Could not find name assignment for type: " + Ti(e.type.ref));
        return Lf(r, e, i);
    }
}
m$1(Lf, "buildCrossReference");
function Hm(r, e) {
    let t = r.consume++, n = r.tokens[e.value];
    if (!n) throw new Error("Could not find token for keyword: " + e.value);
    return ()=>r.parser.consume(t, n, e);
}
m$1(Hm, "buildKeyword");
function Of(r, e, t, n) {
    let i = e && Ot(e);
    if (!n) if (i) {
        let s = r.or++;
        return (o)=>r.parser.alternatives(s, [
                {
                    ALT: /*#__PURE__*/ m$1(()=>t(o), "ALT"),
                    GATE: /*#__PURE__*/ m$1(()=>i(o), "GATE")
                },
                {
                    ALT: /*#__PURE__*/ va(),
                    GATE: /*#__PURE__*/ m$1(()=>!i(o), "GATE")
                }
            ]);
    } else return t;
    if (n === "*") {
        let s = r.many++;
        return (o)=>r.parser.many(s, {
                DEF: /*#__PURE__*/ m$1(()=>t(o), "DEF"),
                GATE: i ? ()=>i(o) : void 0
            });
    } else if (n === "+") {
        let s = r.many++;
        if (i) {
            let o = r.or++;
            return (l)=>r.parser.alternatives(o, [
                    {
                        ALT: /*#__PURE__*/ m$1(()=>r.parser.atLeastOne(s, {
                                DEF: /*#__PURE__*/ m$1(()=>t(l), "DEF")
                            }), "ALT"),
                        GATE: /*#__PURE__*/ m$1(()=>i(l), "GATE")
                    },
                    {
                        ALT: /*#__PURE__*/ va(),
                        GATE: /*#__PURE__*/ m$1(()=>!i(l), "GATE")
                    }
                ]);
        } else return (o)=>r.parser.atLeastOne(s, {
                DEF: /*#__PURE__*/ m$1(()=>t(o), "DEF")
            });
    } else if (n === "?") {
        let s = r.optional++;
        return (o)=>r.parser.optional(s, {
                DEF: /*#__PURE__*/ m$1(()=>t(o), "DEF"),
                GATE: i ? ()=>i(o) : void 0
            });
    } else ct();
}
m$1(Of, "wrap");
function Pf(r, e) {
    let t = /*#__PURE__*/ zm(r, e), n = /*#__PURE__*/ r.parser.getRule(t);
    if (!n) throw new Error(`Rule "${t}" not found."`);
    return n;
}
m$1(Pf, "getRule");
function zm(r, e) {
    if ($e(e)) return e.name;
    if (r.ruleNames.has(e)) return r.ruleNames.get(e);
    {
        let t = e, n = t.$container, i = e.$type;
        for(; !$e(n);)(Gt(n) || Ps(n) || Ms(n)) && (i = n.elements.indexOf(t).toString() + ":" + i), t = n, n = n.$container;
        return i = n.name + ":" + i, r.ruleNames.set(e, i), i;
    }
}
m$1(zm, "getRuleName");
function Yl(r, e) {
    let t = r.tokens[e];
    if (!t) throw new Error(`Token "${e}" not found."`);
    return t;
}
m$1(Yl, "getToken");
function Jl(r) {
    let e = r.Grammar, t = r.parser.Lexer, n = new ji(r);
    return Hi(e, n, t.definition), n.finalize(), n;
}
m$1(Jl, "createCompletionParser");
function Ql(r) {
    let e = /*#__PURE__*/ bf(r);
    return e.finalize(), e;
}
m$1(Ql, "createLangiumParser");
function bf(r) {
    let e = r.Grammar, t = r.parser.Lexer, n = new Vi(r);
    return Hi(e, n, t.definition);
}
m$1(bf, "prepareLangiumParser");
var Pt = class {
    static #_ = m$1(this, "DefaultTokenBuilder");
    constructor(){
        this.diagnostics = [];
    }
    buildTokens(e, t) {
        let n = /*#__PURE__*/ j(/*#__PURE__*/ mi(e, false)), i = /*#__PURE__*/ this.buildTerminalTokens(n), s = /*#__PURE__*/ this.buildKeywordTokens(n, i, t);
        return i.forEach((o)=>{
            let l = o.PATTERN;
            typeof l == "object" && l && "test" in l && gn(l) ? s.unshift(o) : s.push(o);
        }), s;
    }
    flushLexingReport(e) {
        return {
            diagnostics: /*#__PURE__*/ this.popDiagnostics()
        };
    }
    popDiagnostics() {
        let e = [
            ...this.diagnostics
        ];
        return this.diagnostics = [], e;
    }
    buildTerminalTokens(e) {
        return e.filter(He).filter((t)=>!t.fragment).map((t)=>this.buildTerminalToken(t)).toArray();
    }
    buildTerminalToken(e) {
        let t = /*#__PURE__*/ Tn(e), n = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i = {
            name: e.name,
            PATTERN: n
        };
        return typeof n == "function" && (i.LINE_BREAKS = true), e.hidden && (i.GROUP = gn(t) ? se.SKIPPED : "hidden"), i;
    }
    requiresCustomPattern(e) {
        return e.flags.includes("u") || e.flags.includes("s") ? true : !!(e.source.includes("?<=") || e.source.includes("?<!"));
    }
    regexPatternFunction(e) {
        let t = new RegExp(e, e.flags + "y");
        return (n, i)=>(t.lastIndex = i, t.exec(n));
    }
    buildKeywordTokens(e, t, n) {
        return e.filter($e).flatMap((i)=>ut(i).filter(Ye)).distinct((i)=>i.value).toArray().sort((i, s)=>s.value.length - i.value.length).map((i)=>this.buildKeywordToken(i, t, !!n?.caseInsensitive));
    }
    buildKeywordToken(e, t, n) {
        let i = /*#__PURE__*/ this.buildKeywordPattern(e, n), s = {
            name: e.value,
            PATTERN: i,
            LONGER_ALT: /*#__PURE__*/ this.findLongerAlt(e, t)
        };
        return typeof i == "function" && (s.LINE_BREAKS = true), s;
    }
    buildKeywordPattern(e, t) {
        return t ? new RegExp(Bo(e.value)) : e.value;
    }
    findLongerAlt(e, t) {
        return t.reduce((n, i)=>{
            let s = i?.PATTERN;
            return s?.source && Wo("^" + s.source + "$", e.value) && n.push(i), n;
        }, []);
    }
};
var Tr = class {
    static #_ = m$1(this, "DefaultValueConverter");
    convert(e, t) {
        let n = t.grammarSource;
        if (nr(n) && (n = /*#__PURE__*/ jo(n)), nt(n)) {
            let i = n.rule.ref;
            if (!i) throw new Error("This cst node was not parsed by a rule.");
            return this.runConverter(i, e, t);
        }
        return e;
    }
    runConverter(e, t, n) {
        var i;
        switch(e.name.toUpperCase()){
            case "INT":
                return ht.convertInt(t);
            case "STRING":
                return ht.convertString(t);
            case "ID":
                return ht.convertID(t);
        }
        switch((i = /*#__PURE__*/ Qo(e)) === null || i === void 0 ? void 0 : i.toLowerCase()){
            case "number":
                return ht.convertNumber(t);
            case "boolean":
                return ht.convertBoolean(t);
            case "bigint":
                return ht.convertBigint(t);
            case "date":
                return ht.convertDate(t);
            default:
                return t;
        }
    }
}, ht;
(function(r) {
    function e(u) {
        let d = "";
        for(let f = 1; f < u.length - 1; f++){
            let h = /*#__PURE__*/ u.charAt(f);
            if (h === "\\") {
                let p = /*#__PURE__*/ u.charAt(++f);
                d += /*#__PURE__*/ t(p);
            } else d += h;
        }
        return d;
    }
    m$1(e, "convertString"), r.convertString = e;
    function t(u) {
        switch(u){
            case "b":
                return "\b";
            case "f":
                return "\f";
            case "n":
                return `
`;
            case "r":
                return "\r";
            case "t":
                return "	";
            case "v":
                return "\v";
            case "0":
                return "\0";
            default:
                return u;
        }
    }
    m$1(t, "convertEscapeCharacter");
    function n(u) {
        return u.charAt(0) === "^" ? u.substring(1) : u;
    }
    m$1(n, "convertID"), r.convertID = n;
    function i(u) {
        return parseInt(u);
    }
    m$1(i, "convertInt"), r.convertInt = i;
    function s(u) {
        return BigInt(u);
    }
    m$1(s, "convertBigint"), r.convertBigint = s;
    function o(u) {
        return new Date(u);
    }
    m$1(o, "convertDate"), r.convertDate = o;
    function l(u) {
        return Number(u);
    }
    m$1(l, "convertNumber"), r.convertNumber = l;
    function c(u) {
        return u.toLowerCase() === "true";
    }
    m$1(c, "convertBoolean"), r.convertBoolean = c;
})(ht || (ht = {}));
var $ = {};
p($, /*#__PURE__*/ q$1(/*#__PURE__*/ Gf()));
function oc() {
    return new Promise((r)=>{
        typeof setImmediate > "u" ? setTimeout(r, 0) : setImmediate(r);
    });
}
m$1(oc, "delayNextTick");
var Da = 0, Bf = 10;
function Fa() {
    return Da = /*#__PURE__*/ performance.now(), new $.CancellationTokenSource;
}
m$1(Fa, "startCancelableOperation");
function Wf(r) {
    Bf = r;
}
m$1(Wf, "setInterruptionPeriod");
var pt = /*#__PURE__*/ Symbol("OperationCancelled");
function mt(r) {
    return r === pt;
}
m$1(mt, "isOperationCancelled");
async function ue(r) {
    if (r === $.CancellationToken.None) return;
    let e = /*#__PURE__*/ performance.now();
    if (e - Da >= Bf && (Da = e, await oc(), Da = /*#__PURE__*/ performance.now()), r.isCancellationRequested) throw pt;
}
m$1(ue, "interruptAndCheck");
var Ue = class {
    static #_ = m$1(this, "Deferred");
    constructor(){
        this.promise = new Promise((e, t)=>{
            this.resolve = (n)=>(e(n), this), this.reject = (n)=>(t(n), this);
        });
    }
};
var Ua = class r {
    static #_ = m$1(this, "FullTextDocument");
    constructor(e, t, n, i){
        this._uri = e, this._languageId = t, this._version = n, this._content = i, this._lineOffsets = void 0;
    }
    get uri() {
        return this._uri;
    }
    get languageId() {
        return this._languageId;
    }
    get version() {
        return this._version;
    }
    getText(e) {
        if (e) {
            let t = /*#__PURE__*/ this.offsetAt(e.start), n = /*#__PURE__*/ this.offsetAt(e.end);
            return this._content.substring(t, n);
        }
        return this._content;
    }
    update(e, t) {
        for (let n of e)if (r.isIncremental(n)) {
            let i = /*#__PURE__*/ jf(n.range), s = /*#__PURE__*/ this.offsetAt(i.start), o = /*#__PURE__*/ this.offsetAt(i.end);
            this._content = this._content.substring(0, s) + n.text + this._content.substring(o, this._content.length);
            let l = /*#__PURE__*/ Math.max(i.start.line, 0), c = /*#__PURE__*/ Math.max(i.end.line, 0), u = this._lineOffsets, d = /*#__PURE__*/ Kf(n.text, false, s);
            if (c - l === d.length) for(let h = 0, p = d.length; h < p; h++)u[h + l + 1] = d[h];
            else d.length < 1e4 ? u.splice(l + 1, c - l, ...d) : this._lineOffsets = u = /*#__PURE__*/ u.slice(0, l + 1).concat(d, /*#__PURE__*/ u.slice(c + 1));
            let f = n.text.length - (o - s);
            if (f !== 0) for(let h = l + 1 + d.length, p = u.length; h < p; h++)u[h] = u[h] + f;
        } else if (r.isFull(n)) this._content = n.text, this._lineOffsets = void 0;
        else throw new Error("Unknown change event received");
        this._version = t;
    }
    getLineOffsets() {
        return this._lineOffsets === void 0 && (this._lineOffsets = /*#__PURE__*/ Kf(this._content, true)), this._lineOffsets;
    }
    positionAt(e) {
        e = /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.min(e, this._content.length), 0);
        let t = /*#__PURE__*/ this.getLineOffsets(), n = 0, i = t.length;
        if (i === 0) return {
            line: 0,
            character: e
        };
        for(; n < i;){
            let o = /*#__PURE__*/ Math.floor((n + i) / 2);
            t[o] > e ? i = o : n = o + 1;
        }
        let s = n - 1;
        return e = /*#__PURE__*/ this.ensureBeforeEOL(e, t[s]), {
            line: s,
            character: e - t[s]
        };
    }
    offsetAt(e) {
        let t = /*#__PURE__*/ this.getLineOffsets();
        if (e.line >= t.length) return this._content.length;
        if (e.line < 0) return 0;
        let n = t[e.line];
        if (e.character <= 0) return n;
        let i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, s = /*#__PURE__*/ Math.min(n + e.character, i);
        return this.ensureBeforeEOL(s, n);
    }
    ensureBeforeEOL(e, t) {
        for(; e > t && Vf(/*#__PURE__*/ this._content.charCodeAt(e - 1));)e--;
        return e;
    }
    get lineCount() {
        return this.getLineOffsets().length;
    }
    static isIncremental(e) {
        let t = e;
        return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
    }
    static isFull(e) {
        let t = e;
        return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
    }
}, jn;
(function(r) {
    function e(i, s, o, l) {
        return new Ua(i, s, o, l);
    }
    m$1(e, "create"), r.create = e;
    function t(i, s, o) {
        if (i instanceof Ua) return i.update(s, o), i;
        throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
    m$1(t, "update"), r.update = t;
    function n(i, s) {
        let o = /*#__PURE__*/ i.getText(), l = /*#__PURE__*/ lc(/*#__PURE__*/ s.map(ng), (d, f)=>{
            let h = d.range.start.line - f.range.start.line;
            return h === 0 ? d.range.start.character - f.range.start.character : h;
        }), c = 0, u = [];
        for (let d of l){
            let f = /*#__PURE__*/ i.offsetAt(d.range.start);
            if (f < c) throw new Error("Overlapping edit");
            f > c && u.push(/*#__PURE__*/ o.substring(c, f)), d.newText.length && u.push(d.newText), c = /*#__PURE__*/ i.offsetAt(d.range.end);
        }
        return u.push(/*#__PURE__*/ o.substr(c)), u.join("");
    }
    m$1(n, "applyEdits"), r.applyEdits = n;
})(jn || (jn = {}));
function lc(r, e) {
    if (r.length <= 1) return r;
    let t = r.length / 2 | 0, n = /*#__PURE__*/ r.slice(0, t), i = /*#__PURE__*/ r.slice(t);
    lc(n, e), lc(i, e);
    let s = 0, o = 0, l = 0;
    for(; s < n.length && o < i.length;)e(n[s], i[o]) <= 0 ? r[l++] = n[s++] : r[l++] = i[o++];
    for(; s < n.length;)r[l++] = n[s++];
    for(; o < i.length;)r[l++] = i[o++];
    return r;
}
m$1(lc, "mergeSort");
function Kf(r, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    let n = e ? [
        t
    ] : [];
    for(let i = 0; i < r.length; i++){
        let s = /*#__PURE__*/ r.charCodeAt(i);
        Vf(s) && (s === 13 && i + 1 < r.length && r.charCodeAt(i + 1) === 10 && i++, n.push(t + i + 1));
    }
    return n;
}
m$1(Kf, "computeLineOffsets");
function Vf(r) {
    return r === 13 || r === 10;
}
m$1(Vf, "isEOL");
function jf(r) {
    let e = r.start, t = r.end;
    return e.line > t.line || e.line === t.line && e.character > t.character ? {
        start: t,
        end: e
    } : r;
}
m$1(jf, "getWellformedRange");
function ng(r) {
    let e = /*#__PURE__*/ jf(r.range);
    return e !== r.range ? {
        newText: r.newText,
        range: e
    } : r;
}
m$1(ng, "getWellformedEdit");
var Hf;
(()=>{
    var r = {
        470: (i)=>{
            function s(c) {
                if (typeof c != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(c));
            }
            m$1(s, "e");
            function o(c, u) {
                for(var d, f = "", h = 0, p = -1, g = 0, y = 0; y <= c.length; ++y){
                    if (y < c.length) d = /*#__PURE__*/ c.charCodeAt(y);
                    else {
                        if (d === 47) break;
                        d = 47;
                    }
                    if (d === 47) {
                        if (!(p === y - 1 || g === 1)) if (p !== y - 1 && g === 2) {
                            if (f.length < 2 || h !== 2 || f.charCodeAt(f.length - 1) !== 46 || f.charCodeAt(f.length - 2) !== 46) {
                                if (f.length > 2) {
                                    var v = /*#__PURE__*/ f.lastIndexOf("/");
                                    if (v !== f.length - 1) {
                                        v === -1 ? (f = "", h = 0) : h = (f = /*#__PURE__*/ f.slice(0, v)).length - 1 - f.lastIndexOf("/"), p = y, g = 0;
                                        continue;
                                    }
                                } else if (f.length === 2 || f.length === 1) {
                                    f = "", h = 0, p = y, g = 0;
                                    continue;
                                }
                            }
                            u && (f.length > 0 ? f += "/.." : f = "..", h = 2);
                        } else f.length > 0 ? f += "/" + c.slice(p + 1, y) : f = /*#__PURE__*/ c.slice(p + 1, y), h = y - p - 1;
                        p = y, g = 0;
                    } else d === 46 && g !== -1 ? ++g : g = -1;
                }
                return f;
            }
            m$1(o, "r");
            var l = {
                resolve: /*#__PURE__*/ m$1(function() {
                    for(var c, u = "", d = false, f = arguments.length - 1; f >= -1 && !d; f--){
                        var h;
                        f >= 0 ? h = arguments[f] : (c === void 0 && (c = /*#__PURE__*/ process.cwd()), h = c), s(h), h.length !== 0 && (u = h + "/" + u, d = h.charCodeAt(0) === 47);
                    }
                    return u = /*#__PURE__*/ o(u, !d), d ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
                }, "resolve"),
                normalize: /*#__PURE__*/ m$1(function(c) {
                    if (s(c), c.length === 0) return ".";
                    var u = c.charCodeAt(0) === 47, d = c.charCodeAt(c.length - 1) === 47;
                    return (c = /*#__PURE__*/ o(c, !u)).length !== 0 || u || (c = "."), c.length > 0 && d && (c += "/"), u ? "/" + c : c;
                }, "normalize"),
                isAbsolute: /*#__PURE__*/ m$1(function(c) {
                    return s(c), c.length > 0 && c.charCodeAt(0) === 47;
                }, "isAbsolute"),
                join: /*#__PURE__*/ m$1(function() {
                    if (arguments.length === 0) return ".";
                    for(var c, u = 0; u < arguments.length; ++u){
                        var d = arguments[u];
                        s(d), d.length > 0 && (c === void 0 ? c = d : c += "/" + d);
                    }
                    return c === void 0 ? "." : l.normalize(c);
                }, "join"),
                relative: /*#__PURE__*/ m$1(function(c, u) {
                    if (s(c), s(u), c === u || (c = /*#__PURE__*/ l.resolve(c)) === (u = /*#__PURE__*/ l.resolve(u))) return "";
                    for(var d = 1; d < c.length && c.charCodeAt(d) === 47; ++d);
                    for(var f = c.length, h = f - d, p = 1; p < u.length && u.charCodeAt(p) === 47; ++p);
                    for(var g = u.length - p, y = h < g ? h : g, v = -1, R = 0; R <= y; ++R){
                        if (R === y) {
                            if (g > y) {
                                if (u.charCodeAt(p + R) === 47) return u.slice(p + R + 1);
                                if (R === 0) return u.slice(p + R);
                            } else h > y && (c.charCodeAt(d + R) === 47 ? v = R : R === 0 && (v = 0));
                            break;
                        }
                        var A = /*#__PURE__*/ c.charCodeAt(d + R);
                        if (A !== u.charCodeAt(p + R)) break;
                        A === 47 && (v = R);
                    }
                    var x = "";
                    for(R = d + v + 1; R <= f; ++R)R !== f && c.charCodeAt(R) !== 47 || (x.length === 0 ? x += ".." : x += "/..");
                    return x.length > 0 ? x + u.slice(p + v) : (p += v, u.charCodeAt(p) === 47 && ++p, u.slice(p));
                }, "relative"),
                _makeLong: /*#__PURE__*/ m$1(function(c) {
                    return c;
                }, "_makeLong"),
                dirname: /*#__PURE__*/ m$1(function(c) {
                    if (s(c), c.length === 0) return ".";
                    for(var u = /*#__PURE__*/ c.charCodeAt(0), d = u === 47, f = -1, h = true, p = c.length - 1; p >= 1; --p)if ((u = /*#__PURE__*/ c.charCodeAt(p)) === 47) {
                        if (!h) {
                            f = p;
                            break;
                        }
                    } else h = false;
                    return f === -1 ? d ? "/" : "." : d && f === 1 ? "//" : c.slice(0, f);
                }, "dirname"),
                basename: /*#__PURE__*/ m$1(function(c, u) {
                    if (u !== void 0 && typeof u != "string") throw new TypeError('"ext" argument must be a string');
                    s(c);
                    var d, f = 0, h = -1, p = true;
                    if (u !== void 0 && u.length > 0 && u.length <= c.length) {
                        if (u.length === c.length && u === c) return "";
                        var g = u.length - 1, y = -1;
                        for(d = c.length - 1; d >= 0; --d){
                            var v = /*#__PURE__*/ c.charCodeAt(d);
                            if (v === 47) {
                                if (!p) {
                                    f = d + 1;
                                    break;
                                }
                            } else y === -1 && (p = false, y = d + 1), g >= 0 && (v === u.charCodeAt(g) ? --g == -1 && (h = d) : (g = -1, h = y));
                        }
                        return f === h ? h = y : h === -1 && (h = c.length), c.slice(f, h);
                    }
                    for(d = c.length - 1; d >= 0; --d)if (c.charCodeAt(d) === 47) {
                        if (!p) {
                            f = d + 1;
                            break;
                        }
                    } else h === -1 && (p = false, h = d + 1);
                    return h === -1 ? "" : c.slice(f, h);
                }, "basename"),
                extname: /*#__PURE__*/ m$1(function(c) {
                    s(c);
                    for(var u = -1, d = 0, f = -1, h = true, p = 0, g = c.length - 1; g >= 0; --g){
                        var y = /*#__PURE__*/ c.charCodeAt(g);
                        if (y !== 47) f === -1 && (h = false, f = g + 1), y === 46 ? u === -1 ? u = g : p !== 1 && (p = 1) : u !== -1 && (p = -1);
                        else if (!h) {
                            d = g + 1;
                            break;
                        }
                    }
                    return u === -1 || f === -1 || p === 0 || p === 1 && u === f - 1 && u === d + 1 ? "" : c.slice(u, f);
                }, "extname"),
                format: /*#__PURE__*/ m$1(function(c) {
                    if (c === null || typeof c != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof c);
                    return function(u, d) {
                        var f = d.dir || d.root, h = d.base || (d.name || "") + (d.ext || "");
                        return f ? f === d.root ? f + h : f + "/" + h : h;
                    }(0, c);
                }, "format"),
                parse: /*#__PURE__*/ m$1(function(c) {
                    s(c);
                    var u = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (c.length === 0) return u;
                    var d, f = /*#__PURE__*/ c.charCodeAt(0), h = f === 47;
                    h ? (u.root = "/", d = 1) : d = 0;
                    for(var p = -1, g = 0, y = -1, v = true, R = c.length - 1, A = 0; R >= d; --R)if ((f = /*#__PURE__*/ c.charCodeAt(R)) !== 47) y === -1 && (v = false, y = R + 1), f === 46 ? p === -1 ? p = R : A !== 1 && (A = 1) : p !== -1 && (A = -1);
                    else if (!v) {
                        g = R + 1;
                        break;
                    }
                    return p === -1 || y === -1 || A === 0 || A === 1 && p === y - 1 && p === g + 1 ? y !== -1 && (u.base = u.name = g === 0 && h ? c.slice(1, y) : c.slice(g, y)) : (g === 0 && h ? (u.name = /*#__PURE__*/ c.slice(1, p), u.base = /*#__PURE__*/ c.slice(1, y)) : (u.name = /*#__PURE__*/ c.slice(g, p), u.base = /*#__PURE__*/ c.slice(g, y)), u.ext = /*#__PURE__*/ c.slice(p, y)), g > 0 ? u.dir = /*#__PURE__*/ c.slice(0, g - 1) : h && (u.dir = "/"), u;
                }, "parse"),
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            l.posix = l, i.exports = l;
        }
    }, e = {};
    function t(i) {
        var s = e[i];
        if (s !== void 0) return s.exports;
        var o = e[i] = {
            exports: {}
        };
        return r[i](o, o.exports, t), o.exports;
    }
    m$1(t, "r"), t.d = (i, s)=>{
        for(var o in s)t.o(s, o) && !t.o(i, o) && Object.defineProperty(i, o, {
            enumerable: true,
            get: s[o]
        });
    }, t.o = (i, s)=>Object.prototype.hasOwnProperty.call(i, s), t.r = (i)=>{
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(i, "__esModule", {
            value: true
        });
    };
    var n = {};
    (()=>{
        let i;
        t.r(n), t.d(n, {
            URI: /*#__PURE__*/ m$1(()=>h, "URI"),
            Utils: /*#__PURE__*/ m$1(()=>yt, "Utils")
        }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
        let s = /^\w[\w\d+.-]*$/, o = /^\//, l = /^\/\//;
        function c(k, T) {
            if (!k.scheme && T) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${k.authority}", path: "${k.path}", query: "${k.query}", fragment: "${k.fragment}"}`);
            if (k.scheme && !s.test(k.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
            if (k.path) {
                if (k.authority) {
                    if (!o.test(k.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
                } else if (l.test(k.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
            }
        }
        m$1(c, "s");
        let u = "", d = "/", f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
        class h {
            static #_ = m$1(this, "f");
            static isUri(T) {
                return T instanceof h || !!T && typeof T.authority == "string" && typeof T.fragment == "string" && typeof T.path == "string" && typeof T.query == "string" && typeof T.scheme == "string" && typeof T.fsPath == "string" && typeof T.with == "function" && typeof T.toString == "function";
            }
            scheme;
            authority;
            path;
            query;
            fragment;
            constructor(T, S, C, V, O, L = false){
                typeof T == "object" ? (this.scheme = T.scheme || u, this.authority = T.authority || u, this.path = T.path || u, this.query = T.query || u, this.fragment = T.fragment || u) : (this.scheme = /*#__PURE__*/ function(Le, Oe) {
                    return Le || Oe ? Le : "file";
                }(T, L), this.authority = S || u, this.path = /*#__PURE__*/ function(Le, Oe) {
                    switch(Le){
                        case "https":
                        case "http":
                        case "file":
                            Oe ? Oe[0] !== d && (Oe = d + Oe) : Oe = d;
                    }
                    return Oe;
                }(this.scheme, C || u), this.query = V || u, this.fragment = O || u, c(this, L));
            }
            get fsPath() {
                return A(this, false);
            }
            with(T) {
                if (!T) return this;
                let { scheme: S, authority: C, path: V, query: O, fragment: L } = T;
                return S === void 0 ? S = this.scheme : S === null && (S = u), C === void 0 ? C = this.authority : C === null && (C = u), V === void 0 ? V = this.path : V === null && (V = u), O === void 0 ? O = this.query : O === null && (O = u), L === void 0 ? L = this.fragment : L === null && (L = u), S === this.scheme && C === this.authority && V === this.path && O === this.query && L === this.fragment ? this : new g(S, C, V, O, L);
            }
            static parse(T) {
                let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                let C = /*#__PURE__*/ f.exec(T);
                return C ? new g(C[2] || u, Te(C[4] || u), Te(C[5] || u), Te(C[7] || u), Te(C[9] || u), S) : new g(u, u, u, u, u);
            }
            static file(T) {
                let S = u;
                if (i && (T = /*#__PURE__*/ T.replace(/\\/g, d)), T[0] === d && T[1] === d) {
                    let C = /*#__PURE__*/ T.indexOf(d, 2);
                    C === -1 ? (S = /*#__PURE__*/ T.substring(2), T = d) : (S = /*#__PURE__*/ T.substring(2, C), T = T.substring(C) || d);
                }
                return new g("file", S, T, u, u);
            }
            static from(T) {
                let S = new g(T.scheme, T.authority, T.path, T.query, T.fragment);
                return c(S, true), S;
            }
            toString() {
                let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                return x(this, T);
            }
            toJSON() {
                return this;
            }
            static revive(T) {
                if (T) {
                    if (T instanceof h) return T;
                    {
                        let S = new g(T);
                        return S._formatted = T.external, S._fsPath = T._sep === p ? T.fsPath : null, S;
                    }
                }
                return T;
            }
        }
        let p = i ? 1 : void 0;
        class g extends h {
            static #_ = m$1(this, "l");
            _formatted = null;
            _fsPath = null;
            get fsPath() {
                return this._fsPath || (this._fsPath = /*#__PURE__*/ A(this, false)), this._fsPath;
            }
            toString() {
                let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                return T ? x(this, true) : (this._formatted || (this._formatted = /*#__PURE__*/ x(this, false)), this._formatted);
            }
            toJSON() {
                let T = {
                    $mid: 1
                };
                return this._fsPath && (T.fsPath = this._fsPath, T._sep = p), this._formatted && (T.external = this._formatted), this.path && (T.path = this.path), this.scheme && (T.scheme = this.scheme), this.authority && (T.authority = this.authority), this.query && (T.query = this.query), this.fragment && (T.fragment = this.fragment), T;
            }
        }
        let y = {
            58: "%3A",
            47: "%2F",
            63: "%3F",
            35: "%23",
            91: "%5B",
            93: "%5D",
            64: "%40",
            33: "%21",
            36: "%24",
            38: "%26",
            39: "%27",
            40: "%28",
            41: "%29",
            42: "%2A",
            43: "%2B",
            44: "%2C",
            59: "%3B",
            61: "%3D",
            32: "%20"
        };
        function v(k, T, S) {
            let C, V = -1;
            for(let O = 0; O < k.length; O++){
                let L = /*#__PURE__*/ k.charCodeAt(O);
                if (L >= 97 && L <= 122 || L >= 65 && L <= 90 || L >= 48 && L <= 57 || L === 45 || L === 46 || L === 95 || L === 126 || T && L === 47 || S && L === 91 || S && L === 93 || S && L === 58) V !== -1 && (C += /*#__PURE__*/ encodeURIComponent(/*#__PURE__*/ k.substring(V, O)), V = -1), C !== void 0 && (C += /*#__PURE__*/ k.charAt(O));
                else {
                    C === void 0 && (C = /*#__PURE__*/ k.substr(0, O));
                    let Le = y[L];
                    Le !== void 0 ? (V !== -1 && (C += /*#__PURE__*/ encodeURIComponent(/*#__PURE__*/ k.substring(V, O)), V = -1), C += Le) : V === -1 && (V = O);
                }
            }
            return V !== -1 && (C += /*#__PURE__*/ encodeURIComponent(/*#__PURE__*/ k.substring(V))), C !== void 0 ? C : k;
        }
        m$1(v, "d");
        function R(k) {
            let T;
            for(let S = 0; S < k.length; S++){
                let C = /*#__PURE__*/ k.charCodeAt(S);
                C === 35 || C === 63 ? (T === void 0 && (T = /*#__PURE__*/ k.substr(0, S)), T += y[C]) : T !== void 0 && (T += k[S]);
            }
            return T !== void 0 ? T : k;
        }
        m$1(R, "p");
        function A(k, T) {
            let S;
            return S = k.authority && k.path.length > 1 && k.scheme === "file" ? `//${k.authority}${k.path}` : k.path.charCodeAt(0) === 47 && (k.path.charCodeAt(1) >= 65 && k.path.charCodeAt(1) <= 90 || k.path.charCodeAt(1) >= 97 && k.path.charCodeAt(1) <= 122) && k.path.charCodeAt(2) === 58 ? T ? k.path.substr(1) : k.path[1].toLowerCase() + k.path.substr(2) : k.path, i && (S = /*#__PURE__*/ S.replace(/\//g, "\\")), S;
        }
        m$1(A, "m");
        function x(k, T) {
            let S = T ? R : v, C = "", { scheme: V, authority: O, path: L, query: Le, fragment: Oe } = k;
            if (V && (C += V, C += ":"), (O || V === "file") && (C += d, C += d), O) {
                let ee = /*#__PURE__*/ O.indexOf("@");
                if (ee !== -1) {
                    let Ht = /*#__PURE__*/ O.substr(0, ee);
                    O = /*#__PURE__*/ O.substr(ee + 1), ee = /*#__PURE__*/ Ht.lastIndexOf(":"), ee === -1 ? C += /*#__PURE__*/ S(Ht, false, false) : (C += /*#__PURE__*/ S(/*#__PURE__*/ Ht.substr(0, ee), false, false), C += ":", C += /*#__PURE__*/ S(/*#__PURE__*/ Ht.substr(ee + 1), false, true)), C += "@";
                }
                O = /*#__PURE__*/ O.toLowerCase(), ee = /*#__PURE__*/ O.lastIndexOf(":"), ee === -1 ? C += /*#__PURE__*/ S(O, false, true) : (C += /*#__PURE__*/ S(/*#__PURE__*/ O.substr(0, ee), false, true), C += /*#__PURE__*/ O.substr(ee));
            }
            if (L) {
                if (L.length >= 3 && L.charCodeAt(0) === 47 && L.charCodeAt(2) === 58) {
                    let ee = /*#__PURE__*/ L.charCodeAt(1);
                    ee >= 65 && ee <= 90 && (L = `/${String.fromCharCode(ee + 32)}:${L.substr(3)}`);
                } else if (L.length >= 2 && L.charCodeAt(1) === 58) {
                    let ee = /*#__PURE__*/ L.charCodeAt(0);
                    ee >= 65 && ee <= 90 && (L = `${String.fromCharCode(ee + 32)}:${L.substr(2)}`);
                }
                C += /*#__PURE__*/ S(L, true, false);
            }
            return Le && (C += "?", C += /*#__PURE__*/ S(Le, false, false)), Oe && (C += "#", C += T ? Oe : v(Oe, false, false)), C;
        }
        m$1(x, "y");
        function P(k) {
            try {
                return decodeURIComponent(k);
            } catch  {
                return k.length > 3 ? k.substr(0, 3) + P(/*#__PURE__*/ k.substr(3)) : k;
            }
        }
        m$1(P, "v");
        let b = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
        function Te(k) {
            return k.match(b) ? k.replace(b, (T)=>P(T)) : k;
        }
        m$1(Te, "C");
        var kr = /*#__PURE__*/ t(470);
        let Ae = kr.posix || kr, Mt = "/";
        var yt;
        (function(k) {
            k.joinPath = function(T) {
                for(var _len = arguments.length, S = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    S[_key - 1] = arguments[_key];
                }
                return T.with({
                    path: /*#__PURE__*/ Ae.join(T.path, ...S)
                });
            }, k.resolvePath = function(T) {
                for(var _len = arguments.length, S = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    S[_key - 1] = arguments[_key];
                }
                let C = T.path, V = false;
                C[0] !== Mt && (C = Mt + C, V = true);
                let O = /*#__PURE__*/ Ae.resolve(C, ...S);
                return V && O[0] === Mt && !T.authority && (O = /*#__PURE__*/ O.substring(1)), T.with({
                    path: O
                });
            }, k.dirname = function(T) {
                if (T.path.length === 0 || T.path === Mt) return T;
                let S = /*#__PURE__*/ Ae.dirname(T.path);
                return S.length === 1 && S.charCodeAt(0) === 46 && (S = ""), T.with({
                    path: S
                });
            }, k.basename = function(T) {
                return Ae.basename(T.path);
            }, k.extname = function(T) {
                return Ae.extname(T.path);
            };
        })(yt || (yt = {}));
    })(), Hf = n;
})();
var { URI: Ge, Utils: Hn } = Hf;
var Be;
(function(r) {
    r.basename = Hn.basename, r.dirname = Hn.dirname, r.extname = Hn.extname, r.joinPath = Hn.joinPath, r.resolvePath = Hn.resolvePath;
    function e(i, s) {
        return i?.toString() === s?.toString();
    }
    m$1(e, "equals"), r.equals = e;
    function t(i, s) {
        let o = typeof i == "string" ? i : i.path, l = typeof s == "string" ? s : s.path, c = /*#__PURE__*/ o.split("/").filter((p)=>p.length > 0), u = /*#__PURE__*/ l.split("/").filter((p)=>p.length > 0), d = 0;
        for(; d < c.length && c[d] === u[d]; d++);
        let f = /*#__PURE__*/ "../".repeat(c.length - d), h = /*#__PURE__*/ u.slice(d).join("/");
        return f + h;
    }
    m$1(t, "relative"), r.relative = t;
    function n(i) {
        return Ge.parse(/*#__PURE__*/ i.toString()).toString();
    }
    m$1(n, "normalize"), r.normalize = n;
})(Be || (Be = {}));
var Y;
(function(r) {
    r[r.Changed = 0] = "Changed", r[r.Parsed = 1] = "Parsed", r[r.IndexedContent = 2] = "IndexedContent", r[r.ComputedScopes = 3] = "ComputedScopes", r[r.Linked = 4] = "Linked", r[r.IndexedReferences = 5] = "IndexedReferences", r[r.Validated = 6] = "Validated";
})(Y || (Y = {}));
var zi = class {
    static #_ = m$1(this, "DefaultLangiumDocumentFactory");
    constructor(e){
        this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
    }
    async fromUri(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.CancellationToken.None;
        let n = await this.fileSystemProvider.readFile(e);
        return this.createAsync(e, n, t);
    }
    fromTextDocument(e, t, n) {
        return t = t ?? Ge.parse(e.uri), $.CancellationToken.is(n) ? this.createAsync(t, e, n) : this.create(t, e, n);
    }
    fromString(e, t, n) {
        return $.CancellationToken.is(n) ? this.createAsync(t, e, n) : this.create(t, e, n);
    }
    fromModel(e, t) {
        return this.create(t, {
            $model: e
        });
    }
    create(e, t, n) {
        if (typeof t == "string") {
            let i = /*#__PURE__*/ this.parse(e, t, n);
            return this.createLangiumDocument(i, e, void 0, t);
        } else if ("$model" in t) {
            let i = {
                value: t.$model,
                parserErrors: [],
                lexerErrors: []
            };
            return this.createLangiumDocument(i, e);
        } else {
            let i = /*#__PURE__*/ this.parse(e, /*#__PURE__*/ t.getText(), n);
            return this.createLangiumDocument(i, e, t);
        }
    }
    async createAsync(e, t, n) {
        if (typeof t == "string") {
            let i = await this.parseAsync(e, t, n);
            return this.createLangiumDocument(i, e, void 0, t);
        } else {
            let i = await this.parseAsync(e, /*#__PURE__*/ t.getText(), n);
            return this.createLangiumDocument(i, e, t);
        }
    }
    createLangiumDocument(e, t, n, i) {
        let s;
        if (n) s = {
            parseResult: e,
            uri: t,
            state: Y.Parsed,
            references: [],
            textDocument: n
        };
        else {
            let o = /*#__PURE__*/ this.createTextDocumentGetter(t, i);
            s = {
                parseResult: e,
                uri: t,
                state: Y.Parsed,
                references: [],
                get textDocument () {
                    return o();
                }
            };
        }
        return e.value.$document = s, s;
    }
    async update(e, t) {
        var n, i;
        let s = (n = e.parseResult.value.$cstNode) === null || n === void 0 ? void 0 : n.root.fullText, o = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(/*#__PURE__*/ e.uri.toString()), l = o ? o.getText() : await this.fileSystemProvider.readFile(e.uri);
        if (o) Object.defineProperty(e, "textDocument", {
            value: o
        });
        else {
            let c = /*#__PURE__*/ this.createTextDocumentGetter(e.uri, l);
            Object.defineProperty(e, "textDocument", {
                get: c
            });
        }
        return s !== l && (e.parseResult = await this.parseAsync(e.uri, l, t), e.parseResult.value.$document = e), e.state = Y.Parsed, e;
    }
    parse(e, t, n) {
        return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, n);
    }
    parseAsync(e, t, n) {
        return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, n);
    }
    createTextDocumentGetter(e, t) {
        let n = this.serviceRegistry, i;
        return ()=>i ?? (i = /*#__PURE__*/ jn.create(/*#__PURE__*/ e.toString(), n.getServices(e).LanguageMetaData.languageId, 0, t ?? ""));
    }
}, qi = class {
    static #_ = m$1(this, "DefaultLangiumDocuments");
    constructor(e){
        this.documentMap = new Map, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
    }
    get all() {
        return j(/*#__PURE__*/ this.documentMap.values());
    }
    addDocument(e) {
        let t = /*#__PURE__*/ e.uri.toString();
        if (this.documentMap.has(t)) throw new Error(`A document with the URI '${t}' is already present.`);
        this.documentMap.set(t, e);
    }
    getDocument(e) {
        let t = /*#__PURE__*/ e.toString();
        return this.documentMap.get(t);
    }
    async getOrCreateDocument(e, t) {
        let n = /*#__PURE__*/ this.getDocument(e);
        return n || (n = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(n), n);
    }
    createDocument(e, t, n) {
        if (n) return this.langiumDocumentFactory.fromString(t, e, n).then((i)=>(this.addDocument(i), i));
        {
            let i = /*#__PURE__*/ this.langiumDocumentFactory.fromString(t, e);
            return this.addDocument(i), i;
        }
    }
    hasDocument(e) {
        return this.documentMap.has(/*#__PURE__*/ e.toString());
    }
    invalidateDocument(e) {
        let t = /*#__PURE__*/ e.toString(), n = /*#__PURE__*/ this.documentMap.get(t);
        return n && (this.serviceRegistry.getServices(e).references.Linker.unlink(n), n.state = Y.Changed, n.precomputedScopes = void 0, n.diagnostics = void 0), n;
    }
    deleteDocument(e) {
        let t = /*#__PURE__*/ e.toString(), n = /*#__PURE__*/ this.documentMap.get(t);
        return n && (n.state = Y.Changed, this.documentMap.delete(t)), n;
    }
};
var cc = /*#__PURE__*/ Symbol("ref_resolving"), Xi = class {
    static #_ = m$1(this, "DefaultLinker");
    constructor(e){
        this.reflection = e.shared.AstReflection, this.langiumDocuments = ()=>e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
    }
    async link(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.CancellationToken.None;
        for (let n of Je(e.parseResult.value))await ue(t), pn(n).forEach((i)=>this.doLink(i, e));
    }
    doLink(e, t) {
        var n;
        let i = e.reference;
        if (i._ref === void 0) {
            i._ref = cc;
            try {
                let s = /*#__PURE__*/ this.getCandidate(e);
                if (Qt(s)) i._ref = s;
                else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
                    let o = /*#__PURE__*/ this.loadAstNode(s);
                    i._ref = o ?? this.createLinkingError(e, s);
                } else i._ref = void 0;
            } catch (s) {
                console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
                let o = (n = s.message) !== null && n !== void 0 ? n : String(s);
                i._ref = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, e), {
                    message: `An error occurred while resolving reference to '${i.$refText}': ${o}`
                });
            }
            t.references.push(i);
        }
    }
    unlink(e) {
        for (let t of e.references)delete t._ref, delete t._nodeDescription;
        e.references = [];
    }
    getCandidate(e) {
        let n = /*#__PURE__*/ this.scopeProvider.getScope(e).getElement(e.reference.$refText);
        return n ?? this.createLinkingError(e);
    }
    buildReference(e, t, n, i) {
        let s = this, o = {
            $refNode: n,
            $refText: i,
            get ref () {
                var l;
                if (le(this._ref)) return this._ref;
                if (co(this._nodeDescription)) {
                    let c = /*#__PURE__*/ s.loadAstNode(this._nodeDescription);
                    this._ref = c ?? s.createLinkingError({
                        reference: o,
                        container: e,
                        property: t
                    }, this._nodeDescription);
                } else if (this._ref === void 0) {
                    this._ref = cc;
                    let c = ui(e).$document, u = /*#__PURE__*/ s.getLinkedNode({
                        reference: o,
                        container: e,
                        property: t
                    });
                    if (u.error && c && c.state < Y.ComputedScopes) return this._ref = void 0;
                    this._ref = (l = u.node) !== null && l !== void 0 ? l : u.error, this._nodeDescription = u.descr, c?.references.push(this);
                } else if (this._ref === cc) throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${i}')`);
                return le(this._ref) ? this._ref : void 0;
            },
            get $nodeDescription () {
                return this._nodeDescription;
            },
            get error () {
                return Qt(this._ref) ? this._ref : void 0;
            }
        };
        return o;
    }
    getLinkedNode(e) {
        var t;
        try {
            let n = /*#__PURE__*/ this.getCandidate(e);
            if (Qt(n)) return {
                error: n
            };
            let i = /*#__PURE__*/ this.loadAstNode(n);
            return i ? {
                node: i,
                descr: n
            } : {
                descr: n,
                error: /*#__PURE__*/ this.createLinkingError(e, n)
            };
        } catch (n) {
            console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, n);
            let i = (t = n.message) !== null && t !== void 0 ? t : String(n);
            return {
                error: /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, e), {
                    message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}`
                })
            };
        }
    }
    loadAstNode(e) {
        if (e.node) return e.node;
        let t = /*#__PURE__*/ this.langiumDocuments().getDocument(e.documentUri);
        if (t) return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
    }
    createLinkingError(e, t) {
        let n = ui(e.container).$document;
        n && n.state < Y.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);
        let i = /*#__PURE__*/ this.reflection.getReferenceType(e);
        return Object.assign(/*#__PURE__*/ Object.assign({}, e), {
            message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`,
            targetDescription: t
        });
    }
};
function zf(r) {
    return typeof r.name == "string";
}
m$1(zf, "isNamed");
var Yi = class {
    static #_ = m$1(this, "DefaultNameProvider");
    getName(e) {
        if (zf(e)) return e.name;
    }
    getNameNode(e) {
        return gi(e.$cstNode, "name");
    }
};
var Ji = class {
    static #_ = m$1(this, "DefaultReferences");
    constructor(e){
        this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
    }
    findDeclaration(e) {
        if (e) {
            let t = /*#__PURE__*/ Jo(e), n = e.astNode;
            if (t && n) {
                let i = n[t.feature];
                if (Ee(i)) return i.ref;
                if (Array.isArray(i)) {
                    for (let s of i)if (Ee(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end) return s.ref;
                }
            }
            if (n) {
                let i = /*#__PURE__*/ this.nameProvider.getNameNode(n);
                if (i && (i === e || fo(e, i))) return n;
            }
        }
    }
    findDeclarationNode(e) {
        let t = /*#__PURE__*/ this.findDeclaration(e);
        if (t?.$cstNode) {
            let n = /*#__PURE__*/ this.nameProvider.getNameNode(t);
            return n ?? t.$cstNode;
        }
    }
    findReferences(e, t) {
        let n = [];
        if (t.includeDeclaration) {
            let s = /*#__PURE__*/ this.getReferenceToSelf(e);
            s && n.push(s);
        }
        let i = /*#__PURE__*/ this.index.findAllReferences(e, /*#__PURE__*/ this.nodeLocator.getAstNodePath(e));
        return t.documentUri && (i = /*#__PURE__*/ i.filter((s)=>Be.equals(s.sourceUri, t.documentUri))), n.push(...i), j(n);
    }
    getReferenceToSelf(e) {
        let t = /*#__PURE__*/ this.nameProvider.getNameNode(e);
        if (t) {
            let n = /*#__PURE__*/ _e(e), i = /*#__PURE__*/ this.nodeLocator.getAstNodePath(e);
            return {
                sourceUri: n.uri,
                sourcePath: i,
                targetUri: n.uri,
                targetPath: i,
                segment: /*#__PURE__*/ er(t),
                local: true
            };
        }
    }
};
var st = class {
    static #_ = m$1(this, "MultiMap");
    constructor(e){
        if (this.map = new Map, e) for (let [t, n] of e)this.add(t, n);
    }
    get size() {
        return Nr.sum(/*#__PURE__*/ j(/*#__PURE__*/ this.map.values()).map((e)=>e.length));
    }
    clear() {
        this.map.clear();
    }
    delete(e, t) {
        if (t === void 0) return this.map.delete(e);
        {
            let n = /*#__PURE__*/ this.map.get(e);
            if (n) {
                let i = /*#__PURE__*/ n.indexOf(t);
                if (i >= 0) return n.length === 1 ? this.map.delete(e) : n.splice(i, 1), true;
            }
            return false;
        }
    }
    get(e) {
        var t;
        return (t = /*#__PURE__*/ this.map.get(e)) !== null && t !== void 0 ? t : [];
    }
    has(e, t) {
        if (t === void 0) return this.map.has(e);
        {
            let n = /*#__PURE__*/ this.map.get(e);
            return n ? n.indexOf(t) >= 0 : false;
        }
    }
    add(e, t) {
        return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [
            t
        ]), this;
    }
    addAll(e, t) {
        return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, /*#__PURE__*/ Array.from(t)), this;
    }
    forEach(e) {
        this.map.forEach((t, n)=>t.forEach((i)=>e(i, n, this)));
    }
    [Symbol.iterator]() {
        return this.entries().iterator();
    }
    entries() {
        return j(/*#__PURE__*/ this.map.entries()).flatMap((param)=>{
            let [e, t] = param;
            return t.map((n)=>[
                    e,
                    n
                ]);
        });
    }
    keys() {
        return j(/*#__PURE__*/ this.map.keys());
    }
    values() {
        return j(/*#__PURE__*/ this.map.values()).flat();
    }
    entriesGroupedByKey() {
        return j(/*#__PURE__*/ this.map.entries());
    }
}, xr = class {
    static #_ = m$1(this, "BiMap");
    get size() {
        return this.map.size;
    }
    constructor(e){
        if (this.map = new Map, this.inverse = new Map, e) for (let [t, n] of e)this.set(t, n);
    }
    clear() {
        this.map.clear(), this.inverse.clear();
    }
    set(e, t) {
        return this.map.set(e, t), this.inverse.set(t, e), this;
    }
    get(e) {
        return this.map.get(e);
    }
    getKey(e) {
        return this.inverse.get(e);
    }
    delete(e) {
        let t = /*#__PURE__*/ this.map.get(e);
        return t !== void 0 ? (this.map.delete(e), this.inverse.delete(t), true) : false;
    }
};
var Qi = class {
    static #_ = m$1(this, "DefaultScopeComputation");
    constructor(e){
        this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
    }
    async computeExports(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.CancellationToken.None;
        return this.computeExportsForNode(e.parseResult.value, e, void 0, t);
    }
    async computeExportsForNode(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : di, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : $.CancellationToken.None;
        let s = [];
        this.exportNode(e, s, t);
        for (let o of n(e))await ue(i), this.exportNode(o, s, t);
        return s;
    }
    exportNode(e, t, n) {
        let i = /*#__PURE__*/ this.nameProvider.getName(e);
        i && t.push(/*#__PURE__*/ this.descriptions.createDescription(e, i, n));
    }
    async computeLocalScopes(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.CancellationToken.None;
        let n = e.parseResult.value, i = new st;
        for (let s of ut(n))await ue(t), this.processNode(s, e, i);
        return i;
    }
    processNode(e, t, n) {
        let i = e.$container;
        if (i) {
            let s = /*#__PURE__*/ this.nameProvider.getName(e);
            s && n.add(i, /*#__PURE__*/ this.descriptions.createDescription(e, s, t));
        }
    }
};
var zn = class {
    static #_ = m$1(this, "StreamScope");
    constructor(e, t, n){
        var i;
        this.elements = e, this.outerScope = t, this.caseInsensitive = (i = n?.caseInsensitive) !== null && i !== void 0 ? i : false;
    }
    getAllElements() {
        return this.outerScope ? this.elements.concat(/*#__PURE__*/ this.outerScope.getAllElements()) : this.elements;
    }
    getElement(e) {
        let t = this.caseInsensitive ? this.elements.find((n)=>n.name.toLowerCase() === e.toLowerCase()) : this.elements.find((n)=>n.name === e);
        if (t) return t;
        if (this.outerScope) return this.outerScope.getElement(e);
    }
}, Zi = class {
    static #_ = m$1(this, "MapScope");
    constructor(e, t, n){
        var i;
        this.elements = new Map, this.caseInsensitive = (i = n?.caseInsensitive) !== null && i !== void 0 ? i : false;
        for (let s of e){
            let o = this.caseInsensitive ? s.name.toLowerCase() : s.name;
            this.elements.set(o, s);
        }
        this.outerScope = t;
    }
    getElement(e) {
        let t = this.caseInsensitive ? e.toLowerCase() : e, n = /*#__PURE__*/ this.elements.get(t);
        if (n) return n;
        if (this.outerScope) return this.outerScope.getElement(e);
    }
    getAllElements() {
        let e = /*#__PURE__*/ j(/*#__PURE__*/ this.elements.values());
        return this.outerScope && (e = /*#__PURE__*/ e.concat(/*#__PURE__*/ this.outerScope.getAllElements())), e;
    }
}, ig = {
    getElement () {},
    getAllElements () {
        return ei;
    }
};
var qn = class {
    static #_ = m$1(this, "DisposableCache");
    constructor(){
        this.toDispose = [], this.isDisposed = false;
    }
    onDispose(e) {
        this.toDispose.push(e);
    }
    dispose() {
        this.throwIfDisposed(), this.clear(), this.isDisposed = true, this.toDispose.forEach((e)=>e.dispose());
    }
    throwIfDisposed() {
        if (this.isDisposed) throw new Error("This cache has already been disposed");
    }
}, es = class extends qn {
    static #_ = m$1(this, "SimpleCache");
    constructor(){
        super(...arguments), this.cache = new Map;
    }
    has(e) {
        return this.throwIfDisposed(), this.cache.has(e);
    }
    set(e, t) {
        this.throwIfDisposed(), this.cache.set(e, t);
    }
    get(e, t) {
        if (this.throwIfDisposed(), this.cache.has(e)) return this.cache.get(e);
        if (t) {
            let n = /*#__PURE__*/ t();
            return this.cache.set(e, n), n;
        } else return;
    }
    delete(e) {
        return this.throwIfDisposed(), this.cache.delete(e);
    }
    clear() {
        this.throwIfDisposed(), this.cache.clear();
    }
}, Rr = class extends qn {
    static #_ = m$1(this, "ContextCache");
    constructor(e){
        super(), this.cache = new Map, this.converter = e ?? ((t)=>t);
    }
    has(e, t) {
        return this.throwIfDisposed(), this.cacheForContext(e).has(t);
    }
    set(e, t, n) {
        this.throwIfDisposed(), this.cacheForContext(e).set(t, n);
    }
    get(e, t, n) {
        this.throwIfDisposed();
        let i = /*#__PURE__*/ this.cacheForContext(e);
        if (i.has(t)) return i.get(t);
        if (n) {
            let s = /*#__PURE__*/ n();
            return i.set(t, s), s;
        } else return;
    }
    delete(e, t) {
        return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
    }
    clear(e) {
        if (this.throwIfDisposed(), e) {
            let t = /*#__PURE__*/ this.converter(e);
            this.cache.delete(t);
        } else this.cache.clear();
    }
    cacheForContext(e) {
        let t = /*#__PURE__*/ this.converter(e), n = /*#__PURE__*/ this.cache.get(t);
        return n || (n = new Map, this.cache.set(t, n)), n;
    }
}, Ga = class extends Rr {
    static #_ = m$1(this, "DocumentCache");
    constructor(e, t){
        super((n)=>n.toString()), t ? (this.toDispose.push(/*#__PURE__*/ e.workspace.DocumentBuilder.onDocumentPhase(t, (n)=>{
            this.clear(/*#__PURE__*/ n.uri.toString());
        })), this.toDispose.push(/*#__PURE__*/ e.workspace.DocumentBuilder.onUpdate((n, i)=>{
            for (let s of i)this.clear(s);
        }))) : this.toDispose.push(/*#__PURE__*/ e.workspace.DocumentBuilder.onUpdate((n, i)=>{
            let s = /*#__PURE__*/ n.concat(i);
            for (let o of s)this.clear(o);
        }));
    }
}, Xn = class extends es {
    static #_ = m$1(this, "WorkspaceCache");
    constructor(e, t){
        super(), t ? (this.toDispose.push(/*#__PURE__*/ e.workspace.DocumentBuilder.onBuildPhase(t, ()=>{
            this.clear();
        })), this.toDispose.push(/*#__PURE__*/ e.workspace.DocumentBuilder.onUpdate((n, i)=>{
            i.length > 0 && this.clear();
        }))) : this.toDispose.push(/*#__PURE__*/ e.workspace.DocumentBuilder.onUpdate(()=>{
            this.clear();
        }));
    }
};
var ts = class {
    static #_ = m$1(this, "DefaultScopeProvider");
    constructor(e){
        this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new Xn(e.shared);
    }
    getScope(e) {
        let t = [], n = /*#__PURE__*/ this.reflection.getReferenceType(e), i = _e(e.container).precomputedScopes;
        if (i) {
            let o = e.container;
            do {
                let l = /*#__PURE__*/ i.get(o);
                l.length > 0 && t.push(/*#__PURE__*/ j(l).filter((c)=>this.reflection.isSubtype(c.type, n))), o = o.$container;
            }while (o);
        }
        let s = /*#__PURE__*/ this.getGlobalScope(n, e);
        for(let o = t.length - 1; o >= 0; o--)s = /*#__PURE__*/ this.createScope(t[o], s);
        return s;
    }
    createScope(e, t, n) {
        return new zn(j(e), t, n);
    }
    createScopeForNodes(e, t, n) {
        let i = /*#__PURE__*/ j(e).map((s)=>{
            let o = /*#__PURE__*/ this.nameProvider.getName(s);
            if (o) return this.descriptions.createDescription(s, o);
        }).nonNullable();
        return new zn(i, t, n);
    }
    getGlobalScope(e, t) {
        return this.globalScopeCache.get(e, ()=>new Zi(this.indexManager.allElements(e)));
    }
};
function uc(r) {
    return typeof r.$comment == "string";
}
m$1(uc, "isAstNodeWithComment");
function qf(r) {
    return typeof r == "object" && !!r && ("$ref" in r || "$error" in r);
}
m$1(qf, "isIntermediateReference");
var rs = class {
    static #_ = m$1(this, "DefaultJsonSerializer");
    constructor(e){
        this.ignoreProperties = new Set([
            "$container",
            "$containerProperty",
            "$containerIndex",
            "$document",
            "$cstNode"
        ]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
    }
    serialize(e, t) {
        let n = t ?? {}, i = t?.replacer, s = /*#__PURE__*/ m$1((l, c)=>this.replacer(l, c, n), "defaultReplacer"), o = i ? (l, c)=>i(l, c, s) : s;
        try {
            return this.currentDocument = /*#__PURE__*/ _e(e), JSON.stringify(e, o, t?.space);
        } finally{
            this.currentDocument = void 0;
        }
    }
    deserialize(e, t) {
        let n = t ?? {}, i = /*#__PURE__*/ JSON.parse(e);
        return this.linkNode(i, i, n), i;
    }
    replacer(e, t, param) {
        let { refText: n, sourceText: i, textRegions: s, comments: o, uriConverter: l } = param;
        var c, u, d, f;
        if (!this.ignoreProperties.has(e)) if (Ee(t)) {
            let h = t.ref, p = n ? t.$refText : void 0;
            if (h) {
                let g = /*#__PURE__*/ _e(h), y = "";
                this.currentDocument && this.currentDocument !== g && (l ? y = /*#__PURE__*/ l(g.uri, t) : y = /*#__PURE__*/ g.uri.toString());
                let v = /*#__PURE__*/ this.astNodeLocator.getAstNodePath(h);
                return {
                    $ref: `${y}#${v}`,
                    $refText: p
                };
            } else return {
                $error: (u = (c = t.error) === null || c === void 0 ? void 0 : c.message) !== null && u !== void 0 ? u : "Could not resolve reference",
                $refText: p
            };
        } else if (le(t)) {
            let h;
            if (s && (h = /*#__PURE__*/ this.addAstNodeRegionWithAssignmentsTo(/*#__PURE__*/ Object.assign({}, t)), (!e || t.$document) && h?.$textRegion && (h.$textRegion.documentURI = (d = this.currentDocument) === null || d === void 0 ? void 0 : d.uri.toString())), i && !e && (h ?? (h = /*#__PURE__*/ Object.assign({}, t)), h.$sourceText = (f = t.$cstNode) === null || f === void 0 ? void 0 : f.text), o) {
                h ?? (h = /*#__PURE__*/ Object.assign({}, t));
                let p = /*#__PURE__*/ this.commentProvider.getComment(t);
                p && (h.$comment = /*#__PURE__*/ p.replace(/\r/g, ""));
            }
            return h ?? t;
        } else return t;
    }
    addAstNodeRegionWithAssignmentsTo(e) {
        let t = /*#__PURE__*/ m$1((n)=>({
                offset: n.offset,
                end: n.end,
                length: n.length,
                range: n.range
            }), "createDocumentSegment");
        if (e.$cstNode) {
            let n = e.$textRegion = /*#__PURE__*/ t(e.$cstNode), i = n.assignments = {};
            return Object.keys(e).filter((s)=>!s.startsWith("$")).forEach((s)=>{
                let o = /*#__PURE__*/ zo(e.$cstNode, s).map(t);
                o.length !== 0 && (i[s] = o);
            }), e;
        }
    }
    linkNode(e, t, n, i, s, o) {
        for (let [c, u] of Object.entries(e))if (Array.isArray(u)) for(let d = 0; d < u.length; d++){
            let f = u[d];
            qf(f) ? u[d] = /*#__PURE__*/ this.reviveReference(e, c, t, f, n) : le(f) && this.linkNode(f, t, n, e, c, d);
        }
        else qf(u) ? e[c] = /*#__PURE__*/ this.reviveReference(e, c, t, u, n) : le(u) && this.linkNode(u, t, n, e, c);
        let l = e;
        l.$container = i, l.$containerProperty = s, l.$containerIndex = o;
    }
    reviveReference(e, t, n, i, s) {
        let o = i.$refText, l = i.$error;
        if (i.$ref) {
            let c = /*#__PURE__*/ this.getRefNode(n, i.$ref, s.uriConverter);
            if (le(c)) return o || (o = /*#__PURE__*/ this.nameProvider.getName(c)), {
                $refText: o ?? "",
                ref: c
            };
            l = c;
        }
        if (l) {
            let c = {
                $refText: o ?? ""
            };
            return c.error = {
                container: e,
                property: t,
                message: l,
                reference: c
            }, c;
        } else return;
    }
    getRefNode(e, t, n) {
        try {
            let i = /*#__PURE__*/ t.indexOf("#");
            if (i === 0) {
                let c = /*#__PURE__*/ this.astNodeLocator.getAstNode(e, /*#__PURE__*/ t.substring(1));
                return c || "Could not resolve path: " + t;
            }
            if (i < 0) {
                let c = n ? n(t) : Ge.parse(t), u = /*#__PURE__*/ this.langiumDocuments.getDocument(c);
                return u ? u.parseResult.value : "Could not find document for URI: " + t;
            }
            let s = n ? n(/*#__PURE__*/ t.substring(0, i)) : Ge.parse(/*#__PURE__*/ t.substring(0, i)), o = /*#__PURE__*/ this.langiumDocuments.getDocument(s);
            if (!o) return "Could not find document for URI: " + t;
            if (i === t.length - 1) return o.parseResult.value;
            let l = /*#__PURE__*/ this.astNodeLocator.getAstNode(o.parseResult.value, /*#__PURE__*/ t.substring(i + 1));
            return l || "Could not resolve URI: " + t;
        } catch (i) {
            return String(i);
        }
    }
};
var ns = class {
    static #_ = m$1(this, "DefaultServiceRegistry");
    get map() {
        return this.fileExtensionMap;
    }
    constructor(e){
        this.languageIdMap = new Map, this.fileExtensionMap = new Map, this.textDocuments = e?.workspace.TextDocuments;
    }
    register(e) {
        let t = e.LanguageMetaData;
        for (let n of t.fileExtensions)this.fileExtensionMap.has(n) && console.warn(`The file extension ${n} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(n, e);
        this.languageIdMap.set(t.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
    }
    getServices(e) {
        var t, n;
        if (this.singleton !== void 0) return this.singleton;
        if (this.languageIdMap.size === 0) throw new Error("The service registry is empty. Use `register` to register the services of a language.");
        let i = (n = (t = this.textDocuments) === null || t === void 0 ? void 0 : t.get(e)) === null || n === void 0 ? void 0 : n.languageId;
        if (i !== void 0) {
            let l = /*#__PURE__*/ this.languageIdMap.get(i);
            if (l) return l;
        }
        let s = /*#__PURE__*/ Be.extname(e), o = /*#__PURE__*/ this.fileExtensionMap.get(s);
        if (!o) throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
        return o;
    }
    hasServices(e) {
        try {
            return this.getServices(e), !0;
        } catch  {
            return false;
        }
    }
    get all() {
        return Array.from(/*#__PURE__*/ this.languageIdMap.values());
    }
};
function Er(r) {
    return {
        code: r
    };
}
m$1(Er, "diagnosticData");
var Yn;
(function(r) {
    r.all = [
        "fast",
        "slow",
        "built-in"
    ];
})(Yn || (Yn = {}));
var is = class {
    static #_ = m$1(this, "ValidationRegistry");
    constructor(e){
        this.entries = new st, this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
    }
    register(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "fast";
        if (n === "built-in") throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
        for (let [i, s] of Object.entries(e)){
            let o = s;
            if (Array.isArray(o)) for (let l of o){
                let c = {
                    check: /*#__PURE__*/ this.wrapValidationException(l, t),
                    category: n
                };
                this.addEntry(i, c);
            }
            else if (typeof o == "function") {
                let l = {
                    check: /*#__PURE__*/ this.wrapValidationException(o, t),
                    category: n
                };
                this.addEntry(i, l);
            } else ct();
        }
    }
    wrapValidationException(e, t) {
        return async (n, i, s)=>{
            await this.handleException(()=>e.call(t, n, i, s), "An error occurred during validation", i, n);
        };
    }
    async handleException(e, t, n, i) {
        try {
            await e();
        } catch (s) {
            if (mt(s)) throw s;
            console.error(`${t}:`, s), s instanceof Error && s.stack && console.error(s.stack);
            let o = s instanceof Error ? s.message : String(s);
            n("error", `${t}: ${o}`, {
                node: i
            });
        }
    }
    addEntry(e, t) {
        if (e === "AstNode") {
            this.entries.add("AstNode", t);
            return;
        }
        for (let n of this.reflection.getAllSubTypes(e))this.entries.add(n, t);
    }
    getChecks(e, t) {
        let n = /*#__PURE__*/ j(/*#__PURE__*/ this.entries.get(e)).concat(/*#__PURE__*/ this.entries.get("AstNode"));
        return t && (n = /*#__PURE__*/ n.filter((i)=>t.includes(i.category))), n.map((i)=>i.check);
    }
    registerBeforeDocument(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
        this.entriesBefore.push(/*#__PURE__*/ this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
    }
    registerAfterDocument(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
        this.entriesAfter.push(/*#__PURE__*/ this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
    }
    wrapPreparationException(e, t, n) {
        return async (i, s, o, l)=>{
            await this.handleException(()=>e.call(n, i, s, o, l), t, s, i);
        };
    }
    get checksBefore() {
        return this.entriesBefore;
    }
    get checksAfter() {
        return this.entriesAfter;
    }
};
var ss = class {
    static #_ = m$1(this, "DefaultDocumentValidator");
    constructor(e){
        this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
    }
    async validateDocument(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $.CancellationToken.None;
        let i = e.parseResult, s = [];
        if (await ue(n), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i, s, t), t.stopAfterLexingErrors && s.some((o)=>{
            var l;
            return ((l = o.data) === null || l === void 0 ? void 0 : l.code) === Qe.LexingError;
        }) || (this.processParsingErrors(i, s, t), t.stopAfterParsingErrors && s.some((o)=>{
            var l;
            return ((l = o.data) === null || l === void 0 ? void 0 : l.code) === Qe.ParsingError;
        })) || (this.processLinkingErrors(e, s, t), t.stopAfterLinkingErrors && s.some((o)=>{
            var l;
            return ((l = o.data) === null || l === void 0 ? void 0 : l.code) === Qe.LinkingError;
        })))) return s;
        try {
            s.push(...await this.validateAst(i.value, t, n));
        } catch (o) {
            if (mt(o)) throw o;
            console.error("An error occurred during validation:", o);
        }
        return await ue(n), s;
    }
    processLexingErrors(e, t, n) {
        var i, s, o;
        let l = [
            ...e.lexerErrors,
            ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []
        ];
        for (let c of l){
            let u = (o = c.severity) !== null && o !== void 0 ? o : "error", d = {
                severity: /*#__PURE__*/ Ba(u),
                range: {
                    start: {
                        line: c.line - 1,
                        character: c.column - 1
                    },
                    end: {
                        line: c.line - 1,
                        character: c.column + c.length - 1
                    }
                },
                message: c.message,
                data: /*#__PURE__*/ Yf(u),
                source: /*#__PURE__*/ this.getSource()
            };
            t.push(d);
        }
    }
    processParsingErrors(e, t, n) {
        for (let i of e.parserErrors){
            let s;
            if (isNaN(i.token.startOffset)) {
                if ("previousToken" in i) {
                    let o = i.previousToken;
                    if (isNaN(o.startOffset)) {
                        let l = {
                            line: 0,
                            character: 0
                        };
                        s = {
                            start: l,
                            end: l
                        };
                    } else {
                        let l = {
                            line: o.endLine - 1,
                            character: o.endColumn
                        };
                        s = {
                            start: l,
                            end: l
                        };
                    }
                }
            } else s = /*#__PURE__*/ Cr(i.token);
            if (s) {
                let o = {
                    severity: /*#__PURE__*/ Ba("error"),
                    range: s,
                    message: i.message,
                    data: /*#__PURE__*/ Er(Qe.ParsingError),
                    source: /*#__PURE__*/ this.getSource()
                };
                t.push(o);
            }
        }
    }
    processLinkingErrors(e, t, n) {
        for (let i of e.references){
            let s = i.error;
            if (s) {
                let o = {
                    node: s.container,
                    property: s.property,
                    index: s.index,
                    data: {
                        code: Qe.LinkingError,
                        containerType: s.container.$type,
                        property: s.property,
                        refText: s.reference.$refText
                    }
                };
                t.push(/*#__PURE__*/ this.toDiagnostic("error", s.message, o));
            }
        }
    }
    async validateAst(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $.CancellationToken.None;
        let i = [], s = /*#__PURE__*/ m$1((o, l, c)=>{
            i.push(/*#__PURE__*/ this.toDiagnostic(o, l, c));
        }, "acceptor");
        return await this.validateAstBefore(e, t, s, n), await this.validateAstNodes(e, t, s, n), await this.validateAstAfter(e, t, s, n), i;
    }
    async validateAstBefore(e, t, n) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : $.CancellationToken.None;
        var s;
        let o = this.validationRegistry.checksBefore;
        for (let l of o)await ue(i), await l(e, n, (s = t.categories) !== null && s !== void 0 ? s : [], i);
    }
    async validateAstNodes(e, t, n) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : $.CancellationToken.None;
        await Promise.all(/*#__PURE__*/ Je(e).map(async (s)=>{
            await ue(i);
            let o = /*#__PURE__*/ this.validationRegistry.getChecks(s.$type, t.categories);
            for (let l of o)await l(s, n, i);
        }));
    }
    async validateAstAfter(e, t, n) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : $.CancellationToken.None;
        var s;
        let o = this.validationRegistry.checksAfter;
        for (let l of o)await ue(i), await l(e, n, (s = t.categories) !== null && s !== void 0 ? s : [], i);
    }
    toDiagnostic(e, t, n) {
        return {
            message: t,
            range: /*#__PURE__*/ Xf(n),
            severity: /*#__PURE__*/ Ba(e),
            code: n.code,
            codeDescription: n.codeDescription,
            tags: n.tags,
            relatedInformation: n.relatedInformation,
            data: n.data,
            source: /*#__PURE__*/ this.getSource()
        };
    }
    getSource() {
        return this.metadata.languageId;
    }
};
function Xf(r) {
    if (r.range) return r.range;
    let e;
    return typeof r.property == "string" ? e = /*#__PURE__*/ gi(r.node.$cstNode, r.property, r.index) : typeof r.keyword == "string" && (e = /*#__PURE__*/ Xo(r.node.$cstNode, r.keyword, r.index)), e ?? (e = r.node.$cstNode), e ? e.range : {
        start: {
            line: 0,
            character: 0
        },
        end: {
            line: 0,
            character: 0
        }
    };
}
m$1(Xf, "getDiagnosticRange");
function Ba(r) {
    switch(r){
        case "error":
            return 1;
        case "warning":
            return 2;
        case "info":
            return 3;
        case "hint":
            return 4;
        default:
            throw new Error("Invalid diagnostic severity: " + r);
    }
}
m$1(Ba, "toDiagnosticSeverity");
function Yf(r) {
    switch(r){
        case "error":
            return Er(Qe.LexingError);
        case "warning":
            return Er(Qe.LexingWarning);
        case "info":
            return Er(Qe.LexingInfo);
        case "hint":
            return Er(Qe.LexingHint);
        default:
            throw new Error("Invalid diagnostic severity: " + r);
    }
}
m$1(Yf, "toDiagnosticData");
var Qe;
(function(r) {
    r.LexingError = "lexing-error", r.LexingWarning = "lexing-warning", r.LexingInfo = "lexing-info", r.LexingHint = "lexing-hint", r.ParsingError = "parsing-error", r.LinkingError = "linking-error";
})(Qe || (Qe = {}));
var as = class {
    static #_ = m$1(this, "DefaultAstNodeDescriptionProvider");
    constructor(e){
        this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
    }
    createDescription(e, t, n) {
        let i = n ?? _e(e);
        t ?? (t = /*#__PURE__*/ this.nameProvider.getName(e));
        let s = /*#__PURE__*/ this.astNodeLocator.getAstNodePath(e);
        if (!t) throw new Error(`Node at path ${s} has no name.`);
        let o, l = /*#__PURE__*/ m$1(()=>{
            var c;
            return o ?? (o = /*#__PURE__*/ er((c = /*#__PURE__*/ this.nameProvider.getNameNode(e)) !== null && c !== void 0 ? c : e.$cstNode));
        }, "nameSegmentGetter");
        return {
            node: e,
            name: t,
            get nameSegment () {
                return l();
            },
            selectionSegment: /*#__PURE__*/ er(e.$cstNode),
            type: e.$type,
            documentUri: i.uri,
            path: s
        };
    }
}, os = class {
    static #_ = m$1(this, "DefaultReferenceDescriptionProvider");
    constructor(e){
        this.nodeLocator = e.workspace.AstNodeLocator;
    }
    async createDescriptions(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.CancellationToken.None;
        let n = [], i = e.parseResult.value;
        for (let s of Je(i))await ue(t), pn(s).filter((o)=>!Qt(o)).forEach((o)=>{
            let l = /*#__PURE__*/ this.createDescription(o);
            l && n.push(l);
        });
        return n;
    }
    createDescription(e) {
        let t = e.reference.$nodeDescription, n = e.reference.$refNode;
        if (!t || !n) return;
        let i = _e(e.container).uri;
        return {
            sourceUri: i,
            sourcePath: /*#__PURE__*/ this.nodeLocator.getAstNodePath(e.container),
            targetUri: t.documentUri,
            targetPath: t.path,
            segment: /*#__PURE__*/ er(n),
            local: /*#__PURE__*/ Be.equals(t.documentUri, i)
        };
    }
};
var ls = class {
    static #_ = m$1(this, "DefaultAstNodeLocator");
    constructor(){
        this.segmentSeparator = "/", this.indexSeparator = "@";
    }
    getAstNodePath(e) {
        if (e.$container) {
            let t = /*#__PURE__*/ this.getAstNodePath(e.$container), n = /*#__PURE__*/ this.getPathSegment(e);
            return t + this.segmentSeparator + n;
        }
        return "";
    }
    getPathSegment(param) {
        let { $containerProperty: e, $containerIndex: t } = param;
        if (!e) throw new Error("Missing '$containerProperty' in AST node.");
        return t !== void 0 ? e + this.indexSeparator + t : e;
    }
    getAstNode(e, t) {
        return t.split(this.segmentSeparator).reduce((i, s)=>{
            if (!i || s.length === 0) return i;
            let o = /*#__PURE__*/ s.indexOf(this.indexSeparator);
            if (o > 0) {
                let l = /*#__PURE__*/ s.substring(0, o), c = /*#__PURE__*/ parseInt(/*#__PURE__*/ s.substring(o + 1)), u = i[l];
                return u?.[c];
            }
            return i[s];
        }, e);
    }
};
var ne = {};
p(ne, /*#__PURE__*/ q$1(/*#__PURE__*/ ic()));
var cs = class {
    static #_ = m$1(this, "DefaultConfigurationProvider");
    constructor(e){
        this._ready = new Ue, this.settings = {}, this.workspaceConfig = false, this.onConfigurationSectionUpdateEmitter = new ne.Emitter, this.serviceRegistry = e.ServiceRegistry;
    }
    get ready() {
        return this._ready.promise;
    }
    initialize(e) {
        var t, n;
        this.workspaceConfig = (n = (t = e.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !== null && n !== void 0 ? n : false;
    }
    async initialized(e) {
        if (this.workspaceConfig) {
            if (e.register) {
                let t = this.serviceRegistry.all;
                e.register({
                    section: /*#__PURE__*/ t.map((n)=>this.toSectionName(n.LanguageMetaData.languageId))
                });
            }
            if (e.fetchConfiguration) {
                let t = /*#__PURE__*/ this.serviceRegistry.all.map((i)=>({
                        section: /*#__PURE__*/ this.toSectionName(i.LanguageMetaData.languageId)
                    })), n = await e.fetchConfiguration(t);
                t.forEach((i, s)=>{
                    this.updateSectionConfiguration(i.section, n[s]);
                });
            }
        }
        this._ready.resolve();
    }
    updateConfiguration(e) {
        e.settings && Object.keys(e.settings).forEach((t)=>{
            let n = e.settings[t];
            this.updateSectionConfiguration(t, n), this.onConfigurationSectionUpdateEmitter.fire({
                section: t,
                configuration: n
            });
        });
    }
    updateSectionConfiguration(e, t) {
        this.settings[e] = t;
    }
    async getConfiguration(e, t) {
        await this.ready;
        let n = /*#__PURE__*/ this.toSectionName(e);
        if (this.settings[n]) return this.settings[n][t];
    }
    toSectionName(e) {
        return `${e}`;
    }
    get onConfigurationSectionUpdate() {
        return this.onConfigurationSectionUpdateEmitter.event;
    }
};
var jt;
(function(r) {
    function e(t) {
        return {
            dispose: /*#__PURE__*/ m$1(async ()=>await t(), "dispose")
        };
    }
    m$1(e, "create"), r.create = e;
})(jt || (jt = {}));
var us = class {
    static #_ = m$1(this, "DefaultDocumentBuilder");
    constructor(e){
        this.updateBuildOptions = {
            validation: {
                categories: [
                    "built-in",
                    "fast"
                ]
            }
        }, this.updateListeners = [], this.buildPhaseListeners = new st, this.documentPhaseListeners = new st, this.buildState = new Map, this.documentBuildWaiters = new Map, this.currentState = Y.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
    }
    async build(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $.CancellationToken.None;
        var i, s;
        for (let o of e){
            let l = /*#__PURE__*/ o.uri.toString();
            if (o.state === Y.Validated) {
                if (typeof t.validation == "boolean" && t.validation) o.state = Y.IndexedReferences, o.diagnostics = void 0, this.buildState.delete(l);
                else if (typeof t.validation == "object") {
                    let c = /*#__PURE__*/ this.buildState.get(l), u = (i = c?.result) === null || i === void 0 ? void 0 : i.validationChecks;
                    if (u) {
                        let f = /*#__PURE__*/ ((s = t.validation.categories) !== null && s !== void 0 ? s : Yn.all).filter((h)=>!u.includes(h));
                        f.length > 0 && (this.buildState.set(l, {
                            completed: false,
                            options: {
                                validation: /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, t.validation), {
                                    categories: f
                                })
                            },
                            result: c.result
                        }), o.state = Y.IndexedReferences);
                    }
                }
            } else this.buildState.delete(l);
        }
        this.currentState = Y.Changed, await this.emitUpdate(/*#__PURE__*/ e.map((o)=>o.uri), []), await this.buildDocuments(e, t, n);
    }
    async update(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $.CancellationToken.None;
        this.currentState = Y.Changed;
        for (let o of t)this.langiumDocuments.deleteDocument(o), this.buildState.delete(/*#__PURE__*/ o.toString()), this.indexManager.remove(o);
        for (let o of e){
            if (!this.langiumDocuments.invalidateDocument(o)) {
                let c = /*#__PURE__*/ this.langiumDocumentFactory.fromModel({
                    $type: "INVALID"
                }, o);
                c.state = Y.Changed, this.langiumDocuments.addDocument(c);
            }
            this.buildState.delete(/*#__PURE__*/ o.toString());
        }
        let i = /*#__PURE__*/ j(e).concat(t).map((o)=>o.toString()).toSet();
        this.langiumDocuments.all.filter((o)=>!i.has(/*#__PURE__*/ o.uri.toString()) && this.shouldRelink(o, i)).forEach((o)=>{
            this.serviceRegistry.getServices(o.uri).references.Linker.unlink(o), o.state = /*#__PURE__*/ Math.min(o.state, Y.ComputedScopes), o.diagnostics = void 0;
        }), await this.emitUpdate(e, t), await ue(n);
        let s = /*#__PURE__*/ this.sortDocuments(/*#__PURE__*/ this.langiumDocuments.all.filter((o)=>{
            var l;
            return o.state < Y.Linked || !(!((l = /*#__PURE__*/ this.buildState.get(/*#__PURE__*/ o.uri.toString())) === null || l === void 0) && l.completed);
        }).toArray());
        await this.buildDocuments(s, this.updateBuildOptions, n);
    }
    async emitUpdate(e, t) {
        await Promise.all(/*#__PURE__*/ this.updateListeners.map((n)=>n(e, t)));
    }
    sortDocuments(e) {
        let t = 0, n = e.length - 1;
        for(; t < n;){
            for(; t < e.length && this.hasTextDocument(e[t]);)t++;
            for(; n >= 0 && !this.hasTextDocument(e[n]);)n--;
            t < n && ([e[t], e[n]] = [
                e[n],
                e[t]
            ]);
        }
        return e;
    }
    hasTextDocument(e) {
        var t;
        return !!(!((t = this.textDocuments) === null || t === void 0) && t.get(e.uri));
    }
    shouldRelink(e, t) {
        return e.references.some((n)=>n.error !== void 0) ? true : this.indexManager.isAffected(e, t);
    }
    onUpdate(e) {
        return this.updateListeners.push(e), jt.create(()=>{
            let t = /*#__PURE__*/ this.updateListeners.indexOf(e);
            t >= 0 && this.updateListeners.splice(t, 1);
        });
    }
    async buildDocuments(e, t, n) {
        this.prepareBuild(e, t), await this.runCancelable(e, Y.Parsed, n, (s)=>this.langiumDocumentFactory.update(s, n)), await this.runCancelable(e, Y.IndexedContent, n, (s)=>this.indexManager.updateContent(s, n)), await this.runCancelable(e, Y.ComputedScopes, n, async (s)=>{
            let o = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
            s.precomputedScopes = await o.computeLocalScopes(s, n);
        }), await this.runCancelable(e, Y.Linked, n, (s)=>this.serviceRegistry.getServices(s.uri).references.Linker.link(s, n)), await this.runCancelable(e, Y.IndexedReferences, n, (s)=>this.indexManager.updateReferences(s, n));
        let i = /*#__PURE__*/ e.filter((s)=>this.shouldValidate(s));
        await this.runCancelable(i, Y.Validated, n, (s)=>this.validate(s, n));
        for (let s of e){
            let o = /*#__PURE__*/ this.buildState.get(/*#__PURE__*/ s.uri.toString());
            o && (o.completed = true);
        }
    }
    prepareBuild(e, t) {
        for (let n of e){
            let i = /*#__PURE__*/ n.uri.toString(), s = /*#__PURE__*/ this.buildState.get(i);
            (!s || s.completed) && this.buildState.set(i, {
                completed: false,
                options: t,
                result: s?.result
            });
        }
    }
    async runCancelable(e, t, n, i) {
        let s = /*#__PURE__*/ e.filter((l)=>l.state < t);
        for (let l of s)await ue(n), await i(l), l.state = t, await this.notifyDocumentPhase(l, t, n);
        let o = /*#__PURE__*/ e.filter((l)=>l.state === t);
        await this.notifyBuildPhase(o, t, n), this.currentState = t;
    }
    onBuildPhase(e, t) {
        return this.buildPhaseListeners.add(e, t), jt.create(()=>{
            this.buildPhaseListeners.delete(e, t);
        });
    }
    onDocumentPhase(e, t) {
        return this.documentPhaseListeners.add(e, t), jt.create(()=>{
            this.documentPhaseListeners.delete(e, t);
        });
    }
    waitUntil(e, t, n) {
        let i;
        if (t && "path" in t ? i = t : n = t, n ?? (n = $.CancellationToken.None), i) {
            let s = /*#__PURE__*/ this.langiumDocuments.getDocument(i);
            if (s && s.state > e) return Promise.resolve(i);
        }
        return this.currentState >= e ? Promise.resolve(void 0) : n.isCancellationRequested ? Promise.reject(pt) : new Promise((s, o)=>{
            let l = this.onBuildPhase(e, ()=>{
                if (l.dispose(), c.dispose(), i) {
                    let u = /*#__PURE__*/ this.langiumDocuments.getDocument(i);
                    s(u?.uri);
                } else s(void 0);
            }), c = n.onCancellationRequested(()=>{
                l.dispose(), c.dispose(), o(pt);
            });
        });
    }
    async notifyDocumentPhase(e, t, n) {
        let s = /*#__PURE__*/ this.documentPhaseListeners.get(t).slice();
        for (let o of s)try {
            await o(e, n);
        } catch (l) {
            if (!mt(l)) throw l;
        }
    }
    async notifyBuildPhase(e, t, n) {
        if (e.length === 0) return;
        let s = /*#__PURE__*/ this.buildPhaseListeners.get(t).slice();
        for (let o of s)await ue(n), await o(e, n);
    }
    shouldValidate(e) {
        return !!this.getBuildOptions(e).validation;
    }
    async validate(e, t) {
        var n, i;
        let s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, o = this.getBuildOptions(e).validation, l = typeof o == "object" ? o : void 0, c = await s.validateDocument(e, l, t);
        e.diagnostics ? e.diagnostics.push(...c) : e.diagnostics = c;
        let u = /*#__PURE__*/ this.buildState.get(/*#__PURE__*/ e.uri.toString());
        if (u) {
            (n = u.result) !== null && n !== void 0 || (u.result = {});
            let d = (i = l?.categories) !== null && i !== void 0 ? i : Yn.all;
            u.result.validationChecks ? u.result.validationChecks.push(...d) : u.result.validationChecks = [
                ...d
            ];
        }
    }
    getBuildOptions(e) {
        var t, n;
        return (n = (t = /*#__PURE__*/ this.buildState.get(/*#__PURE__*/ e.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && n !== void 0 ? n : {};
    }
};
var ds = class {
    static #_ = m$1(this, "DefaultIndexManager");
    constructor(e){
        this.symbolIndex = new Map, this.symbolByTypeIndex = new Rr, this.referenceIndex = new Map, this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
    }
    findAllReferences(e, t) {
        let n = _e(e).uri, i = [];
        return this.referenceIndex.forEach((s)=>{
            s.forEach((o)=>{
                Be.equals(o.targetUri, n) && o.targetPath === t && i.push(o);
            });
        }), j(i);
    }
    allElements(e, t) {
        let n = /*#__PURE__*/ j(/*#__PURE__*/ this.symbolIndex.keys());
        return t && (n = /*#__PURE__*/ n.filter((i)=>!t || t.has(i))), n.map((i)=>this.getFileDescriptions(i, e)).flat();
    }
    getFileDescriptions(e, t) {
        var n;
        return t ? this.symbolByTypeIndex.get(e, t, ()=>{
            var s;
            return ((s = /*#__PURE__*/ this.symbolIndex.get(e)) !== null && s !== void 0 ? s : []).filter((l)=>this.astReflection.isSubtype(l.type, t));
        }) : (n = /*#__PURE__*/ this.symbolIndex.get(e)) !== null && n !== void 0 ? n : [];
    }
    remove(e) {
        let t = /*#__PURE__*/ e.toString();
        this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t);
    }
    async updateContent(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.CancellationToken.None;
        let i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, t), s = /*#__PURE__*/ e.uri.toString();
        this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
    }
    async updateReferences(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.CancellationToken.None;
        let i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
        this.referenceIndex.set(/*#__PURE__*/ e.uri.toString(), i);
    }
    isAffected(e, t) {
        let n = /*#__PURE__*/ this.referenceIndex.get(/*#__PURE__*/ e.uri.toString());
        return n ? n.some((i)=>!i.local && t.has(/*#__PURE__*/ i.targetUri.toString())) : false;
    }
};
var fs = class {
    static #_ = m$1(this, "DefaultWorkspaceManager");
    constructor(e){
        this.initialBuildOptions = {}, this._ready = new Ue, this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
    }
    get ready() {
        return this._ready.promise;
    }
    get workspaceFolders() {
        return this.folders;
    }
    initialize(e) {
        var t;
        this.folders = (t = e.workspaceFolders) !== null && t !== void 0 ? t : void 0;
    }
    initialized(e) {
        return this.mutex.write((t)=>{
            var n;
            return this.initializeWorkspace((n = this.folders) !== null && n !== void 0 ? n : [], t);
        });
    }
    async initializeWorkspace(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $.CancellationToken.None;
        let n = await this.performStartup(e);
        await ue(t), await this.documentBuilder.build(n, this.initialBuildOptions, t);
    }
    async performStartup(e) {
        let t = /*#__PURE__*/ this.serviceRegistry.all.flatMap((s)=>s.LanguageMetaData.fileExtensions), n = [], i = /*#__PURE__*/ m$1((s)=>{
            n.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
        }, "collector");
        return await this.loadAdditionalDocuments(e, i), await Promise.all(/*#__PURE__*/ e.map((s)=>[
                s,
                /*#__PURE__*/ this.getRootFolder(s)
            ]).map(async (s)=>this.traverseFolder(...s, t, i))), this._ready.resolve(), n;
    }
    loadAdditionalDocuments(e, t) {
        return Promise.resolve();
    }
    getRootFolder(e) {
        return Ge.parse(e.uri);
    }
    async traverseFolder(e, t, n, i) {
        let s = await this.fileSystemProvider.readDirectory(t);
        await Promise.all(/*#__PURE__*/ s.map(async (o)=>{
            if (this.includeEntry(e, o, n)) {
                if (o.isDirectory) await this.traverseFolder(e, o.uri, n, i);
                else if (o.isFile) {
                    let l = await this.langiumDocuments.getOrCreateDocument(o.uri);
                    i(l);
                }
            }
        }));
    }
    includeEntry(e, t, n) {
        let i = /*#__PURE__*/ Be.basename(t.uri);
        if (i.startsWith(".")) return false;
        if (t.isDirectory) return i !== "node_modules" && i !== "out";
        if (t.isFile) {
            let s = /*#__PURE__*/ Be.extname(t.uri);
            return n.includes(s);
        }
        return false;
    }
};
var hs = class {
    static #_ = m$1(this, "DefaultLexerErrorMessageProvider");
    buildUnexpectedCharactersMessage(e, t, n, i, s) {
        return Nn.buildUnexpectedCharactersMessage(e, t, n, i, s);
    }
    buildUnableToPopLexerModeMessage(e) {
        return Nn.buildUnableToPopLexerModeMessage(e);
    }
}, Wa = {
    mode: "full"
}, Ar = class {
    static #_ = m$1(this, "DefaultLexer");
    constructor(e){
        this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
        let t = /*#__PURE__*/ this.tokenBuilder.buildTokens(e.Grammar, {
            caseInsensitive: e.LanguageMetaData.caseInsensitive
        });
        this.tokenTypes = /*#__PURE__*/ this.toTokenTypeDictionary(t);
        let n = dc(t) ? Object.values(t) : t, i = e.LanguageMetaData.mode === "production";
        this.chevrotainLexer = new se(n, {
            positionTracking: "full",
            skipValidations: i,
            errorMessageProvider: this.errorMessageProvider
        });
    }
    get definition() {
        return this.tokenTypes;
    }
    tokenize(e) {
        var n, i, s;
        let o = /*#__PURE__*/ this.chevrotainLexer.tokenize(e);
        return {
            tokens: o.tokens,
            errors: o.errors,
            hidden: (n = o.groups.hidden) !== null && n !== void 0 ? n : [],
            report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
        };
    }
    toTokenTypeDictionary(e) {
        if (dc(e)) return e;
        let t = fc(e) ? Object.values(e.modes).flat() : e, n = {};
        return t.forEach((i)=>n[i.name] = i), n;
    }
};
function Ka(r) {
    return Array.isArray(r) && (r.length === 0 || "name" in r[0]);
}
m$1(Ka, "isTokenTypeArray");
function fc(r) {
    return r && "modes" in r && "defaultMode" in r;
}
m$1(fc, "isIMultiModeLexerDefinition");
function dc(r) {
    return !Ka(r) && !fc(r);
}
m$1(dc, "isTokenTypeDictionary");
function mc(r, e, t) {
    let n, i;
    typeof r == "string" ? (i = e, n = t) : (i = r.range.start, n = e), i || (i = /*#__PURE__*/ W.create(0, 0));
    let s = /*#__PURE__*/ Zf(r), o = /*#__PURE__*/ yc(n), l = /*#__PURE__*/ ag({
        lines: s,
        position: i,
        options: o
    });
    return dg({
        index: 0,
        tokens: l,
        position: i
    });
}
m$1(mc, "parseJSDoc");
function gc(r, e) {
    let t = /*#__PURE__*/ yc(e), n = /*#__PURE__*/ Zf(r);
    if (n.length === 0) return false;
    let i = n[0], s = n[n.length - 1], o = t.start, l = t.end;
    return !!o?.exec(i) && !!l?.exec(s);
}
m$1(gc, "isJSDoc");
function Zf(r) {
    let e = "";
    return typeof r == "string" ? e = r : e = r.text, e.split(Uo);
}
m$1(Zf, "getLines");
var Jf = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, sg = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function ag(r) {
    var e, t, n;
    let i = [], s = r.position.line, o = r.position.character;
    for(let l = 0; l < r.lines.length; l++){
        let c = l === 0, u = l === r.lines.length - 1, d = r.lines[l], f = 0;
        if (c && r.options.start) {
            let p = (e = r.options.start) === null || e === void 0 ? void 0 : e.exec(d);
            p && (f = p.index + p[0].length);
        } else {
            let p = (t = r.options.line) === null || t === void 0 ? void 0 : t.exec(d);
            p && (f = p.index + p[0].length);
        }
        if (u) {
            let p = (n = r.options.end) === null || n === void 0 ? void 0 : n.exec(d);
            p && (d = /*#__PURE__*/ d.substring(0, p.index));
        }
        if (d = /*#__PURE__*/ d.substring(0, /*#__PURE__*/ ug(d)), pc(d, f) >= d.length) {
            if (i.length > 0) {
                let p = /*#__PURE__*/ W.create(s, o);
                i.push({
                    type: "break",
                    content: "",
                    range: /*#__PURE__*/ U.create(p, p)
                });
            }
        } else {
            Jf.lastIndex = f;
            let p = /*#__PURE__*/ Jf.exec(d);
            if (p) {
                let g = p[0], y = p[1], v = /*#__PURE__*/ W.create(s, o + f), R = /*#__PURE__*/ W.create(s, o + f + g.length);
                i.push({
                    type: "tag",
                    content: y,
                    range: /*#__PURE__*/ U.create(v, R)
                }), f += g.length, f = /*#__PURE__*/ pc(d, f);
            }
            if (f < d.length) {
                let g = /*#__PURE__*/ d.substring(f), y = /*#__PURE__*/ Array.from(/*#__PURE__*/ g.matchAll(sg));
                i.push(.../*#__PURE__*/ og(y, g, s, o + f));
            }
        }
        s++, o = 0;
    }
    return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
m$1(ag, "tokenize");
function og(r, e, t, n) {
    let i = [];
    if (r.length === 0) {
        let s = /*#__PURE__*/ W.create(t, n), o = /*#__PURE__*/ W.create(t, n + e.length);
        i.push({
            type: "text",
            content: e,
            range: /*#__PURE__*/ U.create(s, o)
        });
    } else {
        let s = 0;
        for (let l of r){
            let c = l.index, u = /*#__PURE__*/ e.substring(s, c);
            u.length > 0 && i.push({
                type: "text",
                content: /*#__PURE__*/ e.substring(s, c),
                range: /*#__PURE__*/ U.create(/*#__PURE__*/ W.create(t, s + n), /*#__PURE__*/ W.create(t, c + n))
            });
            let d = u.length + 1, f = l[1];
            if (i.push({
                type: "inline-tag",
                content: f,
                range: /*#__PURE__*/ U.create(/*#__PURE__*/ W.create(t, s + d + n), /*#__PURE__*/ W.create(t, s + d + f.length + n))
            }), d += f.length, l.length === 4) {
                d += l[2].length;
                let h = l[3];
                i.push({
                    type: "text",
                    content: h,
                    range: /*#__PURE__*/ U.create(/*#__PURE__*/ W.create(t, s + d + n), /*#__PURE__*/ W.create(t, s + d + h.length + n))
                });
            } else i.push({
                type: "text",
                content: "",
                range: /*#__PURE__*/ U.create(/*#__PURE__*/ W.create(t, s + d + n), /*#__PURE__*/ W.create(t, s + d + n))
            });
            s = c + l[0].length;
        }
        let o = /*#__PURE__*/ e.substring(s);
        o.length > 0 && i.push({
            type: "text",
            content: o,
            range: /*#__PURE__*/ U.create(/*#__PURE__*/ W.create(t, s + n), /*#__PURE__*/ W.create(t, s + n + o.length))
        });
    }
    return i;
}
m$1(og, "buildInlineTokens");
var lg = /\S/, cg = /\s*$/;
function pc(r, e) {
    let t = /*#__PURE__*/ r.substring(e).match(lg);
    return t ? e + t.index : r.length;
}
m$1(pc, "skipWhitespace");
function ug(r) {
    let e = /*#__PURE__*/ r.match(cg);
    if (e && typeof e.index == "number") return e.index;
}
m$1(ug, "lastCharacter");
function dg(r) {
    var e, t, n, i;
    let s = /*#__PURE__*/ W.create(r.position.line, r.position.character);
    if (r.tokens.length === 0) return new Va([], U.create(s, s));
    let o = [];
    for(; r.index < r.tokens.length;){
        let u = /*#__PURE__*/ fg(r, o[o.length - 1]);
        u && o.push(u);
    }
    let l = (t = (e = o[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0 ? t : s, c = (i = (n = o[o.length - 1]) === null || n === void 0 ? void 0 : n.range.end) !== null && i !== void 0 ? i : s;
    return new Va(o, U.create(l, c));
}
m$1(dg, "parseJSDocComment");
function fg(r, e) {
    let t = r.tokens[r.index];
    if (t.type === "tag") return th(r, false);
    if (t.type === "text" || t.type === "inline-tag") return eh(r);
    hg(t, e), r.index++;
}
m$1(fg, "parseJSDocElement");
function hg(r, e) {
    if (e) {
        let t = new ja("", r.range);
        "inlines" in e ? e.inlines.push(t) : e.content.inlines.push(t);
    }
}
m$1(hg, "appendEmptyLine");
function eh(r) {
    let e = r.tokens[r.index], t = e, n = e, i = [];
    for(; e && e.type !== "break" && e.type !== "tag";)i.push(/*#__PURE__*/ pg(r)), n = e, e = r.tokens[r.index];
    return new ms(i, U.create(t.range.start, n.range.end));
}
m$1(eh, "parseJSDocText");
function pg(r) {
    return r.tokens[r.index].type === "inline-tag" ? th(r, true) : rh(r);
}
m$1(pg, "parseJSDocInline");
function th(r, e) {
    let t = r.tokens[r.index++], n = /*#__PURE__*/ t.content.substring(1), i = r.tokens[r.index];
    if (i?.type === "text") if (e) {
        let s = /*#__PURE__*/ rh(r);
        return new ps(n, new ms([
            s
        ], s.range), e, U.create(t.range.start, s.range.end));
    } else {
        let s = /*#__PURE__*/ eh(r);
        return new ps(n, s, e, U.create(t.range.start, s.range.end));
    }
    else {
        let s = t.range;
        return new ps(n, new ms([], s), e, s);
    }
}
m$1(th, "parseJSDocTag");
function rh(r) {
    let e = r.tokens[r.index++];
    return new ja(e.content, e.range);
}
m$1(rh, "parseJSDocLine");
function yc(r) {
    if (!r) return yc({
        start: "/**",
        end: "*/",
        line: "*"
    });
    let { start: e, end: t, line: n } = r;
    return {
        start: /*#__PURE__*/ hc(e, true),
        end: /*#__PURE__*/ hc(t, false),
        line: /*#__PURE__*/ hc(n, true)
    };
}
m$1(yc, "normalizeOptions");
function hc(r, e) {
    if (typeof r == "string" || typeof r == "object") {
        let t = typeof r == "string" ? lr(r) : r.source;
        return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`);
    } else return r;
}
m$1(hc, "normalizeOption");
var Va = class {
    static #_ = m$1(this, "JSDocCommentImpl");
    constructor(e, t){
        this.elements = e, this.range = t;
    }
    getTag(e) {
        return this.getAllTags().find((t)=>t.name === e);
    }
    getTags(e) {
        return this.getAllTags().filter((t)=>t.name === e);
    }
    getAllTags() {
        return this.elements.filter((e)=>"name" in e);
    }
    toString() {
        let e = "";
        for (let t of this.elements)if (e.length === 0) e = /*#__PURE__*/ t.toString();
        else {
            let n = /*#__PURE__*/ t.toString();
            e += Qf(e) + n;
        }
        return e.trim();
    }
    toMarkdown(e) {
        let t = "";
        for (let n of this.elements)if (t.length === 0) t = /*#__PURE__*/ n.toMarkdown(e);
        else {
            let i = /*#__PURE__*/ n.toMarkdown(e);
            t += Qf(t) + i;
        }
        return t.trim();
    }
}, ps = class {
    static #_ = m$1(this, "JSDocTagImpl");
    constructor(e, t, n, i){
        this.name = e, this.content = t, this.inline = n, this.range = i;
    }
    toString() {
        let e = `@${this.name}`, t = /*#__PURE__*/ this.content.toString();
        return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
    }
    toMarkdown(e) {
        var t, n;
        return (n = (t = e?.renderTag) === null || t === void 0 ? void 0 : t.call(e, this)) !== null && n !== void 0 ? n : this.toMarkdownDefault(e);
    }
    toMarkdownDefault(e) {
        let t = /*#__PURE__*/ this.content.toMarkdown(e);
        if (this.inline) {
            let s = /*#__PURE__*/ mg(this.name, t, e ?? {});
            if (typeof s == "string") return s;
        }
        let n = "";
        e?.tag === "italic" || e?.tag === void 0 ? n = "*" : e?.tag === "bold" ? n = "**" : e?.tag === "bold-italic" && (n = "***");
        let i = `${n}@${this.name}${n}`;
        return this.content.inlines.length === 1 ? i = `${i} \u2014 ${t}` : this.content.inlines.length > 1 && (i = `${i}
${t}`), this.inline ? `{${i}}` : i;
    }
};
function mg(r, e, t) {
    var n, i;
    if (r === "linkplain" || r === "linkcode" || r === "link") {
        let s = /*#__PURE__*/ e.indexOf(" "), o = e;
        if (s > 0) {
            let c = /*#__PURE__*/ pc(e, s);
            o = /*#__PURE__*/ e.substring(c), e = /*#__PURE__*/ e.substring(0, s);
        }
        return (r === "linkcode" || r === "link" && t.link === "code") && (o = `\`${o}\``), (i = (n = t.renderLink) === null || n === void 0 ? void 0 : n.call(t, e, o)) !== null && i !== void 0 ? i : gg(e, o);
    }
}
m$1(mg, "renderInlineTag");
function gg(r, e) {
    try {
        return Ge.parse(r, !0), `[${e}](${r})`;
    } catch  {
        return r;
    }
}
m$1(gg, "renderLinkDefault");
var ms = class {
    static #_ = m$1(this, "JSDocTextImpl");
    constructor(e, t){
        this.inlines = e, this.range = t;
    }
    toString() {
        let e = "";
        for(let t = 0; t < this.inlines.length; t++){
            let n = this.inlines[t], i = this.inlines[t + 1];
            e += /*#__PURE__*/ n.toString(), i && i.range.start.line > n.range.start.line && (e += `
`);
        }
        return e;
    }
    toMarkdown(e) {
        let t = "";
        for(let n = 0; n < this.inlines.length; n++){
            let i = this.inlines[n], s = this.inlines[n + 1];
            t += /*#__PURE__*/ i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (t += `
`);
        }
        return t;
    }
}, ja = class {
    static #_ = m$1(this, "JSDocLineImpl");
    constructor(e, t){
        this.text = e, this.range = t;
    }
    toString() {
        return this.text;
    }
    toMarkdown() {
        return this.text;
    }
};
function Qf(r) {
    return r.endsWith(`
`) ? `
` : `

`;
}
m$1(Qf, "fillNewlines");
var gs = class {
    static #_ = m$1(this, "JSDocDocumentationProvider");
    constructor(e){
        this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
    }
    getDocumentation(e) {
        let t = /*#__PURE__*/ this.commentProvider.getComment(e);
        if (t && gc(t)) return mc(t).toMarkdown({
            renderLink: /*#__PURE__*/ m$1((i, s)=>this.documentationLinkRenderer(e, i, s), "renderLink"),
            renderTag: /*#__PURE__*/ m$1((i)=>this.documentationTagRenderer(e, i), "renderTag")
        });
    }
    documentationLinkRenderer(e, t, n) {
        var i;
        let s = (i = /*#__PURE__*/ this.findNameInPrecomputedScopes(e, t)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, t);
        if (s && s.nameSegment) {
            let o = s.nameSegment.range.start.line + 1, l = s.nameSegment.range.start.character + 1, c = /*#__PURE__*/ s.documentUri.with({
                fragment: `L${o},${l}`
            });
            return `[${n}](${c.toString()})`;
        } else return;
    }
    documentationTagRenderer(e, t) {}
    findNameInPrecomputedScopes(e, t) {
        let i = _e(e).precomputedScopes;
        if (!i) return;
        let s = e;
        do {
            let l = /*#__PURE__*/ i.get(s).find((c)=>c.name === t);
            if (l) return l;
            s = s.$container;
        }while (s);
    }
    findNameInGlobalScope(e, t) {
        return this.indexManager.allElements().find((i)=>i.name === t);
    }
};
var ys = class {
    static #_ = m$1(this, "DefaultCommentProvider");
    constructor(e){
        this.grammarConfig = ()=>e.parser.GrammarConfig;
    }
    getComment(e) {
        var t;
        return uc(e) ? e.$comment : (t = /*#__PURE__*/ po(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
    }
};
var Ts = class {
    static #_ = m$1(this, "DefaultAsyncParser");
    constructor(e){
        this.syncParser = e.parser.LangiumParser;
    }
    parse(e, t) {
        return Promise.resolve(/*#__PURE__*/ this.syncParser.parse(e));
    }
}, Tc = class {
    static #_ = m$1(this, "AbstractThreadedAsyncParser");
    constructor(e){
        this.threadCount = 8, this.terminationDelay = 200, this.workerPool = [], this.queue = [], this.hydrator = e.serializer.Hydrator;
    }
    initializeWorkers() {
        for(; this.workerPool.length < this.threadCount;){
            let e = /*#__PURE__*/ this.createWorker();
            e.onReady(()=>{
                if (this.queue.length > 0) {
                    let t = /*#__PURE__*/ this.queue.shift();
                    t && (e.lock(), t.resolve(e));
                }
            }), this.workerPool.push(e);
        }
    }
    async parse(e, t) {
        let n = await this.acquireParserWorker(t), i = new Ue, s, o = /*#__PURE__*/ t.onCancellationRequested(()=>{
            s = /*#__PURE__*/ setTimeout(()=>{
                this.terminateWorker(n);
            }, this.terminationDelay);
        });
        return n.parse(e).then((l)=>{
            let c = /*#__PURE__*/ this.hydrator.hydrate(l);
            i.resolve(c);
        }).catch((l)=>{
            i.reject(l);
        }).finally(()=>{
            o.dispose(), clearTimeout(s);
        }), i.promise;
    }
    terminateWorker(e) {
        e.terminate();
        let t = /*#__PURE__*/ this.workerPool.indexOf(e);
        t >= 0 && this.workerPool.splice(t, 1);
    }
    async acquireParserWorker(e) {
        this.initializeWorkers();
        for (let n of this.workerPool)if (n.ready) return n.lock(), n;
        let t = new Ue;
        return e.onCancellationRequested(()=>{
            let n = /*#__PURE__*/ this.queue.indexOf(t);
            n >= 0 && this.queue.splice(n, 1), t.reject(pt);
        }), this.queue.push(t), t.promise;
    }
}, xc = class {
    static #_ = m$1(this, "ParserWorker");
    get ready() {
        return this._ready;
    }
    get onReady() {
        return this.onReadyEmitter.event;
    }
    constructor(e, t, n, i){
        this.onReadyEmitter = new ne.Emitter, this.deferred = new Ue, this._ready = true, this._parsing = false, this.sendMessage = e, this._terminate = i, t((s)=>{
            let o = s;
            this.deferred.resolve(o), this.unlock();
        }), n((s)=>{
            this.deferred.reject(s), this.unlock();
        });
    }
    terminate() {
        this.deferred.reject(pt), this._terminate();
    }
    lock() {
        this._ready = false;
    }
    unlock() {
        this._parsing = false, this._ready = true, this.onReadyEmitter.fire();
    }
    parse(e) {
        if (this._parsing) throw new Error("Parser worker is busy");
        return this._parsing = true, this.deferred = new Ue, this.sendMessage(e), this.deferred.promise;
    }
};
var xs = class {
    static #_ = m$1(this, "DefaultWorkspaceLock");
    constructor(){
        this.previousTokenSource = new $.CancellationTokenSource, this.writeQueue = [], this.readQueue = [], this.done = true;
    }
    write(e) {
        this.cancelWrite();
        let t = /*#__PURE__*/ Fa();
        return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
    }
    read(e) {
        return this.enqueue(this.readQueue, e);
    }
    enqueue(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $.CancellationToken.None;
        let i = new Ue, s = {
            action: t,
            deferred: i,
            cancellationToken: n
        };
        return e.push(s), this.performNextOperation(), i.promise;
    }
    async performNextOperation() {
        if (!this.done) return;
        let e = [];
        if (this.writeQueue.length > 0) e.push(/*#__PURE__*/ this.writeQueue.shift());
        else if (this.readQueue.length > 0) e.push(.../*#__PURE__*/ this.readQueue.splice(0, this.readQueue.length));
        else return;
        this.done = false, await Promise.all(/*#__PURE__*/ e.map(async (param)=>{
            let { action: t, deferred: n, cancellationToken: i } = param;
            try {
                let s = await Promise.resolve().then(()=>t(i));
                n.resolve(s);
            } catch (s) {
                mt(s) ? n.resolve(void 0) : n.reject(s);
            }
        })), this.done = true, this.performNextOperation();
    }
    cancelWrite() {
        this.previousTokenSource.cancel();
    }
};
var Rs = class {
    static #_ = m$1(this, "DefaultHydrator");
    constructor(e){
        this.grammarElementIdMap = new xr, this.tokenTypeIdMap = new xr, this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
    }
    dehydrate(e) {
        return {
            lexerErrors: e.lexerErrors,
            lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
            parserErrors: /*#__PURE__*/ e.parserErrors.map((t)=>Object.assign(/*#__PURE__*/ Object.assign({}, t), {
                    message: t.message
                })),
            value: /*#__PURE__*/ this.dehydrateAstNode(e.value, /*#__PURE__*/ this.createDehyrationContext(e.value))
        };
    }
    dehydrateLexerReport(e) {
        return e;
    }
    createDehyrationContext(e) {
        let t = new Map, n = new Map;
        for (let i of Je(e))t.set(i, {});
        if (e.$cstNode) for (let i of Zt(e.$cstNode))n.set(i, {});
        return {
            astNodes: t,
            cstNodes: n
        };
    }
    dehydrateAstNode(e, t) {
        let n = /*#__PURE__*/ t.astNodes.get(e);
        n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (n.$cstNode = /*#__PURE__*/ this.dehydrateCstNode(e.$cstNode, t));
        for (let [i, s] of Object.entries(e))if (!i.startsWith("$")) if (Array.isArray(s)) {
            let o = [];
            n[i] = o;
            for (let l of s)le(l) ? o.push(/*#__PURE__*/ this.dehydrateAstNode(l, t)) : Ee(l) ? o.push(/*#__PURE__*/ this.dehydrateReference(l, t)) : o.push(l);
        } else le(s) ? n[i] = /*#__PURE__*/ this.dehydrateAstNode(s, t) : Ee(s) ? n[i] = /*#__PURE__*/ this.dehydrateReference(s, t) : s !== void 0 && (n[i] = s);
        return n;
    }
    dehydrateReference(e, t) {
        let n = {};
        return n.$refText = e.$refText, e.$refNode && (n.$refNode = /*#__PURE__*/ t.cstNodes.get(e.$refNode)), n;
    }
    dehydrateCstNode(e, t) {
        let n = /*#__PURE__*/ t.cstNodes.get(e);
        return Zn(e) ? n.fullText = e.fullText : n.grammarSource = /*#__PURE__*/ this.getGrammarElementId(e.grammarSource), n.hidden = e.hidden, n.astNode = /*#__PURE__*/ t.astNodes.get(e.astNode), tt(e) ? n.content = /*#__PURE__*/ e.content.map((i)=>this.dehydrateCstNode(i, t)) : Ut(e) && (n.tokenType = e.tokenType.name, n.offset = e.offset, n.length = e.length, n.startLine = e.range.start.line, n.startColumn = e.range.start.character, n.endLine = e.range.end.line, n.endColumn = e.range.end.character), n;
    }
    hydrate(e) {
        let t = e.value, n = /*#__PURE__*/ this.createHydrationContext(t);
        return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, n), {
            lexerErrors: e.lexerErrors,
            lexerReport: e.lexerReport,
            parserErrors: e.parserErrors,
            value: /*#__PURE__*/ this.hydrateAstNode(t, n)
        };
    }
    createHydrationContext(e) {
        let t = new Map, n = new Map;
        for (let s of Je(e))t.set(s, {});
        let i;
        if (e.$cstNode) for (let s of Zt(e.$cstNode)){
            let o;
            "fullText" in s ? (o = new Bn(s.fullText), i = o) : "content" in s ? o = new gr : "tokenType" in s && (o = /*#__PURE__*/ this.hydrateCstLeafNode(s)), o && (n.set(s, o), o.root = i);
        }
        return {
            astNodes: t,
            cstNodes: n
        };
    }
    hydrateAstNode(e, t) {
        let n = /*#__PURE__*/ t.astNodes.get(e);
        n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode && (n.$cstNode = /*#__PURE__*/ t.cstNodes.get(e.$cstNode));
        for (let [i, s] of Object.entries(e))if (!i.startsWith("$")) if (Array.isArray(s)) {
            let o = [];
            n[i] = o;
            for (let l of s)le(l) ? o.push(/*#__PURE__*/ this.setParent(/*#__PURE__*/ this.hydrateAstNode(l, t), n)) : Ee(l) ? o.push(/*#__PURE__*/ this.hydrateReference(l, n, i, t)) : o.push(l);
        } else le(s) ? n[i] = /*#__PURE__*/ this.setParent(/*#__PURE__*/ this.hydrateAstNode(s, t), n) : Ee(s) ? n[i] = /*#__PURE__*/ this.hydrateReference(s, n, i, t) : s !== void 0 && (n[i] = s);
        return n;
    }
    setParent(e, t) {
        return e.$container = t, e;
    }
    hydrateReference(e, t, n, i) {
        return this.linker.buildReference(t, n, /*#__PURE__*/ i.cstNodes.get(e.$refNode), e.$refText);
    }
    hydrateCstNode(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        let i = /*#__PURE__*/ t.cstNodes.get(e);
        if (typeof e.grammarSource == "number" && (i.grammarSource = /*#__PURE__*/ this.getGrammarElement(e.grammarSource)), i.astNode = /*#__PURE__*/ t.astNodes.get(e.astNode), tt(i)) for (let s of e.content){
            let o = /*#__PURE__*/ this.hydrateCstNode(s, t, n++);
            i.content.push(o);
        }
        return i;
    }
    hydrateCstLeafNode(e) {
        let t = /*#__PURE__*/ this.getTokenType(e.tokenType), n = e.offset, i = e.length, s = e.startLine, o = e.startColumn, l = e.endLine, c = e.endColumn, u = e.hidden;
        return new mr(n, i, {
            start: {
                line: s,
                character: o
            },
            end: {
                line: l,
                character: c
            }
        }, t, u);
    }
    getTokenType(e) {
        return this.lexer.definition[e];
    }
    getGrammarElementId(e) {
        if (e) return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
    }
    getGrammarElement(e) {
        return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
    }
    createGrammarElementIdMap() {
        let e = 0;
        for (let t of Je(this.grammar))oi(t) && this.grammarElementIdMap.set(t, e++);
    }
};
function Rc(r) {
    return {
        documentation: {
            CommentProvider: /*#__PURE__*/ m$1((e)=>new ys(e), "CommentProvider"),
            DocumentationProvider: /*#__PURE__*/ m$1((e)=>new gs(e), "DocumentationProvider")
        },
        parser: {
            AsyncParser: /*#__PURE__*/ m$1((e)=>new Ts(e), "AsyncParser"),
            GrammarConfig: /*#__PURE__*/ m$1((e)=>el(e), "GrammarConfig"),
            LangiumParser: /*#__PURE__*/ m$1((e)=>Ql(e), "LangiumParser"),
            CompletionParser: /*#__PURE__*/ m$1((e)=>Jl(e), "CompletionParser"),
            ValueConverter: /*#__PURE__*/ m$1(()=>new Tr, "ValueConverter"),
            TokenBuilder: /*#__PURE__*/ m$1(()=>new Pt, "TokenBuilder"),
            Lexer: /*#__PURE__*/ m$1((e)=>new Ar(e), "Lexer"),
            ParserErrorMessageProvider: /*#__PURE__*/ m$1(()=>new Wn, "ParserErrorMessageProvider"),
            LexerErrorMessageProvider: /*#__PURE__*/ m$1(()=>new hs, "LexerErrorMessageProvider")
        },
        workspace: {
            AstNodeLocator: /*#__PURE__*/ m$1(()=>new ls, "AstNodeLocator"),
            AstNodeDescriptionProvider: /*#__PURE__*/ m$1((e)=>new as(e), "AstNodeDescriptionProvider"),
            ReferenceDescriptionProvider: /*#__PURE__*/ m$1((e)=>new os(e), "ReferenceDescriptionProvider")
        },
        references: {
            Linker: /*#__PURE__*/ m$1((e)=>new Xi(e), "Linker"),
            NameProvider: /*#__PURE__*/ m$1(()=>new Yi, "NameProvider"),
            ScopeProvider: /*#__PURE__*/ m$1((e)=>new ts(e), "ScopeProvider"),
            ScopeComputation: /*#__PURE__*/ m$1((e)=>new Qi(e), "ScopeComputation"),
            References: /*#__PURE__*/ m$1((e)=>new Ji(e), "References")
        },
        serializer: {
            Hydrator: /*#__PURE__*/ m$1((e)=>new Rs(e), "Hydrator"),
            JsonSerializer: /*#__PURE__*/ m$1((e)=>new rs(e), "JsonSerializer")
        },
        validation: {
            DocumentValidator: /*#__PURE__*/ m$1((e)=>new ss(e), "DocumentValidator"),
            ValidationRegistry: /*#__PURE__*/ m$1((e)=>new is(e), "ValidationRegistry")
        },
        shared: /*#__PURE__*/ m$1(()=>r.shared, "shared")
    };
}
m$1(Rc, "createDefaultCoreModule");
function Ec(r) {
    return {
        ServiceRegistry: /*#__PURE__*/ m$1((e)=>new ns(e), "ServiceRegistry"),
        workspace: {
            LangiumDocuments: /*#__PURE__*/ m$1((e)=>new qi(e), "LangiumDocuments"),
            LangiumDocumentFactory: /*#__PURE__*/ m$1((e)=>new zi(e), "LangiumDocumentFactory"),
            DocumentBuilder: /*#__PURE__*/ m$1((e)=>new us(e), "DocumentBuilder"),
            IndexManager: /*#__PURE__*/ m$1((e)=>new ds(e), "IndexManager"),
            WorkspaceManager: /*#__PURE__*/ m$1((e)=>new fs(e), "WorkspaceManager"),
            FileSystemProvider: /*#__PURE__*/ m$1((e)=>r.fileSystemProvider(e), "FileSystemProvider"),
            WorkspaceLock: /*#__PURE__*/ m$1(()=>new xs, "WorkspaceLock"),
            ConfigurationProvider: /*#__PURE__*/ m$1((e)=>new cs(e), "ConfigurationProvider")
        }
    };
}
m$1(Ec, "createDefaultSharedCoreModule");
var Ac;
(function(r) {
    r.merge = (e, t)=>Ha(/*#__PURE__*/ Ha({}, e), t);
})(Ac || (Ac = {}));
function za(r, e, t, n, i, s, o, l, c) {
    let u = /*#__PURE__*/ [
        r,
        e,
        t,
        n,
        i,
        s,
        o,
        l,
        c
    ].reduce(Ha, {});
    return oh(u);
}
m$1(za, "inject");
var sh = /*#__PURE__*/ Symbol("isProxy");
function ah(r) {
    if (r && r[sh]) for (let e of Object.values(r))ah(e);
    return r;
}
m$1(ah, "eagerLoad");
function oh(r, e) {
    let t = new Proxy({}, {
        deleteProperty: /*#__PURE__*/ m$1(()=>false, "deleteProperty"),
        set: /*#__PURE__*/ m$1(()=>{
            throw new Error("Cannot set property on injected service container");
        }, "set"),
        get: /*#__PURE__*/ m$1((n, i)=>i === sh ? true : ih(n, i, r, e || t), "get"),
        getOwnPropertyDescriptor: /*#__PURE__*/ m$1((n, i)=>(ih(n, i, r, e || t), Object.getOwnPropertyDescriptor(n, i)), "getOwnPropertyDescriptor"),
        has: /*#__PURE__*/ m$1((n, i)=>i in r, "has"),
        ownKeys: /*#__PURE__*/ m$1(()=>[
                .../*#__PURE__*/ Object.getOwnPropertyNames(r)
            ], "ownKeys")
    });
    return t;
}
m$1(oh, "_inject");
var nh = /*#__PURE__*/ Symbol();
function ih(r, e, t, n) {
    if (e in r) {
        if (r[e] instanceof Error) throw new Error("Construction failure. Please make sure that your dependencies are constructable.", {
            cause: r[e]
        });
        if (r[e] === nh) throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
        return r[e];
    } else if (e in t) {
        let i = t[e];
        r[e] = nh;
        try {
            r[e] = typeof i == "function" ? i(n) : oh(i, n);
        } catch (s) {
            throw r[e] = s instanceof Error ? s : void 0, s;
        }
        return r[e];
    } else return;
}
m$1(ih, "_resolve");
function Ha(r, e) {
    if (e) {
        for (let [t, n] of Object.entries(e))if (n !== void 0) {
            let i = r[t];
            i !== null && n !== null && typeof i == "object" && typeof n == "object" ? r[t] = /*#__PURE__*/ Ha(i, n) : r[t] = n;
        }
    }
    return r;
}
m$1(Ha, "_merge");
var vc = {
    indentTokenName: "INDENT",
    dedentTokenName: "DEDENT",
    whitespaceTokenName: "WS",
    ignoreIndentationDelimiters: []
}, vr;
(function(r) {
    r.REGULAR = "indentation-sensitive", r.IGNORE_INDENTATION = "ignore-indentation";
})(vr || (vr = {}));
var qa = class extends Pt {
    static #_ = m$1(this, "IndentationAwareTokenBuilder");
    constructor(e = vc){
        super(), this.indentationStack = [
            0
        ], this.whitespaceRegExp = /[ \t]+/y, this.options = /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, vc), e), this.indentTokenType = /*#__PURE__*/ Bt({
            name: this.options.indentTokenName,
            pattern: /*#__PURE__*/ this.indentMatcher.bind(this),
            line_breaks: false
        }), this.dedentTokenType = /*#__PURE__*/ Bt({
            name: this.options.dedentTokenName,
            pattern: /*#__PURE__*/ this.dedentMatcher.bind(this),
            line_breaks: false
        });
    }
    buildTokens(e, t) {
        let n = /*#__PURE__*/ super.buildTokens(e, t);
        if (!Ka(n)) throw new Error("Invalid tokens built by default builder");
        let { indentTokenName: i, dedentTokenName: s, whitespaceTokenName: o, ignoreIndentationDelimiters: l } = this.options, c, u, d, f = [];
        for (let h of n){
            for (let [p, g] of l)h.name === p ? h.PUSH_MODE = vr.IGNORE_INDENTATION : h.name === g && (h.POP_MODE = true);
            h.name === s ? c = h : h.name === i ? u = h : h.name === o ? d = h : f.push(h);
        }
        if (!c || !u || !d) throw new Error("Some indentation/whitespace tokens not found!");
        return l.length > 0 ? {
            modes: {
                [vr.REGULAR]: [
                    c,
                    u,
                    ...f,
                    d
                ],
                [vr.IGNORE_INDENTATION]: [
                    ...f,
                    d
                ]
            },
            defaultMode: vr.REGULAR
        } : [
            c,
            u,
            d,
            ...f
        ];
    }
    flushLexingReport(e) {
        let t = /*#__PURE__*/ super.flushLexingReport(e);
        return Object.assign(/*#__PURE__*/ Object.assign({}, t), {
            remainingDedents: /*#__PURE__*/ this.flushRemainingDedents(e)
        });
    }
    isStartOfLine(e, t) {
        return t === 0 || `\r
`.includes(e[t - 1]);
    }
    matchWhitespace(e, t, n, i) {
        var s;
        this.whitespaceRegExp.lastIndex = t;
        let o = /*#__PURE__*/ this.whitespaceRegExp.exec(e);
        return {
            currIndentLevel: (s = o?.[0].length) !== null && s !== void 0 ? s : 0,
            prevIndentLevel: /*#__PURE__*/ this.indentationStack.at(-1),
            match: o
        };
    }
    createIndentationTokenInstance(e, t, n, i) {
        let s = /*#__PURE__*/ this.getLineNumber(t, i);
        return _t(e, n, i, i + n.length, s, s, 1, n.length);
    }
    getLineNumber(e, t) {
        return e.substring(0, t).split(/\r\n|\r|\n/).length;
    }
    indentMatcher(e, t, n, i) {
        if (!this.isStartOfLine(e, t)) return null;
        let { currIndentLevel: s, prevIndentLevel: o, match: l } = this.matchWhitespace(e, t, n, i);
        return s <= o ? null : (this.indentationStack.push(s), l);
    }
    dedentMatcher(e, t, n, i) {
        var s, o, l, c;
        if (!this.isStartOfLine(e, t)) return null;
        let { currIndentLevel: u, prevIndentLevel: d, match: f } = this.matchWhitespace(e, t, n, i);
        if (u >= d) return null;
        let h = /*#__PURE__*/ this.indentationStack.lastIndexOf(u);
        if (h === -1) return this.diagnostics.push({
            severity: "error",
            message: `Invalid dedent level ${u} at offset: ${t}. Current indentation stack: ${this.indentationStack}`,
            offset: t,
            length: (o = (s = f?.[0]) === null || s === void 0 ? void 0 : s.length) !== null && o !== void 0 ? o : 0,
            line: /*#__PURE__*/ this.getLineNumber(e, t),
            column: 1
        }), null;
        let p = this.indentationStack.length - h - 1, g = (c = (l = /*#__PURE__*/ e.substring(0, t).match(/[\r\n]+$/)) === null || l === void 0 ? void 0 : l[0].length) !== null && c !== void 0 ? c : 1;
        for(let y = 0; y < p; y++){
            let v = /*#__PURE__*/ this.createIndentationTokenInstance(this.dedentTokenType, e, "", t - (g - 1));
            n.push(v), this.indentationStack.pop();
        }
        return null;
    }
    buildTerminalToken(e) {
        let t = /*#__PURE__*/ super.buildTerminalToken(e), { indentTokenName: n, dedentTokenName: i, whitespaceTokenName: s } = this.options;
        return t.name === n ? this.indentTokenType : t.name === i ? this.dedentTokenType : t.name === s ? Bt({
            name: s,
            pattern: this.whitespaceRegExp,
            group: se.SKIPPED
        }) : t;
    }
    flushRemainingDedents(e) {
        let t = [];
        for(; this.indentationStack.length > 1;)t.push(/*#__PURE__*/ this.createIndentationTokenInstance(this.dedentTokenType, e, "", e.length)), this.indentationStack.pop();
        return this.indentationStack = [
            0
        ], t;
    }
}, kc = class extends Ar {
    static #_ = m$1(this, "IndentationAwareLexer");
    constructor(e){
        if (super(e), e.parser.TokenBuilder instanceof qa) this.indentationTokenBuilder = e.parser.TokenBuilder;
        else throw new Error("IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder");
    }
    tokenize(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wa;
        let n = /*#__PURE__*/ super.tokenize(e), i = n.report;
        t?.mode === "full" && n.tokens.push(...i.remainingDedents), i.remainingDedents = [];
        let { indentTokenType: s, dedentTokenType: o } = this.indentationTokenBuilder, l = s.tokenTypeIdx, c = o.tokenTypeIdx, u = [], d = n.tokens.length - 1;
        for(let f = 0; f < d; f++){
            let h = n.tokens[f], p = n.tokens[f + 1];
            if (h.tokenTypeIdx === l && p.tokenTypeIdx === c) {
                f++;
                continue;
            }
            u.push(h);
        }
        return d >= 0 && u.push(n.tokens[d]), n.tokens = u, n;
    }
};
var K = {};
o(K, {
    AstUtils: ()=>Fs,
    BiMap: ()=>xr,
    Cancellation: ()=>$,
    ContextCache: ()=>Rr,
    CstUtils: ()=>$s,
    DONE_RESULT: ()=>Se,
    Deferred: ()=>Ue,
    Disposable: ()=>jt,
    DisposableCache: ()=>qn,
    DocumentCache: ()=>Ga,
    EMPTY_STREAM: ()=>ei,
    ErrorWithLocation: ()=>tr,
    GrammarUtils: ()=>Ks,
    MultiMap: ()=>st,
    OperationCancelled: ()=>pt,
    Reduction: ()=>Nr,
    RegExpUtils: ()=>Bs,
    SimpleCache: ()=>es,
    StreamImpl: ()=>je,
    TreeStreamImpl: ()=>ot,
    URI: ()=>Ge,
    UriUtils: ()=>Be,
    WorkspaceCache: ()=>Xn,
    assertUnreachable: ()=>ct,
    delayNextTick: ()=>oc,
    interruptAndCheck: ()=>ue,
    isOperationCancelled: ()=>mt,
    loadGrammarFromJson: ()=>bt,
    setInterruptionPeriod: ()=>Wf,
    startCancelableOperation: ()=>Fa,
    stream: ()=>j
});
p(K, ne);
var Xa = class {
    static #_ = m$1(this, "EmptyFileSystemProvider");
    readFile() {
        throw new Error("No file system is available.");
    }
    async readDirectory() {
        return [];
    }
}, Ic = {
    fileSystemProvider: /*#__PURE__*/ m$1(()=>new Xa, "fileSystemProvider")
};
var yg = {
    Grammar: /*#__PURE__*/ m$1(()=>{}, "Grammar"),
    LanguageMetaData: /*#__PURE__*/ m$1(()=>({
            caseInsensitive: false,
            fileExtensions: [
                ".langium"
            ],
            languageId: "langium"
        }), "LanguageMetaData")
}, Tg = {
    AstReflection: /*#__PURE__*/ m$1(()=>new hn, "AstReflection")
};
function xg() {
    let r = /*#__PURE__*/ za(/*#__PURE__*/ Ec(Ic), Tg), e = /*#__PURE__*/ za(/*#__PURE__*/ Rc({
        shared: r
    }), yg);
    return r.ServiceRegistry.register(e), e;
}
m$1(xg, "createMinimalGrammarServices");
function bt(r) {
    var e;
    let t = /*#__PURE__*/ xg(), n = /*#__PURE__*/ t.serializer.JsonSerializer.deserialize(r);
    return t.shared.workspace.LangiumDocumentFactory.fromModel(n, /*#__PURE__*/ Ge.parse(`memory://${(e = n.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), n;
}
m$1(bt, "loadGrammarFromJson");
p(de, K);
var Rg = Object.defineProperty, B = /*#__PURE__*/ m$1((r, e)=>Rg(r, "name", {
        value: e,
        configurable: true
    }), "__name"), lh = "Statement", eo = "Architecture";
function Eg(r) {
    return gt.isInstance(r, eo);
}
m$1(Eg, "isArchitecture");
B(Eg, "isArchitecture");
var Ya = "Axis", Es = "Branch";
function Ag(r) {
    return gt.isInstance(r, Es);
}
m$1(Ag, "isBranch");
B(Ag, "isBranch");
var Ja = "Checkout", Qa = "CherryPicking", As = "Commit";
function vg(r) {
    return gt.isInstance(r, As);
}
m$1(vg, "isCommit");
B(vg, "isCommit");
var Nc = "Curve", Cc = "Edge", Sc = "Entry", vs = "GitGraph";
function kg(r) {
    return gt.isInstance(r, vs);
}
m$1(kg, "isGitGraph");
B(kg, "isGitGraph");
var $c = "Group", to = "Info";
function Ig(r) {
    return gt.isInstance(r, to);
}
m$1(Ig, "isInfo");
B(Ig, "isInfo");
var _c = "Junction", ks = "Merge";
function Ng(r) {
    return gt.isInstance(r, ks);
}
m$1(Ng, "isMerge");
B(Ng, "isMerge");
var wc = "Option", ro = "Packet";
function Cg(r) {
    return gt.isInstance(r, ro);
}
m$1(Cg, "isPacket");
B(Cg, "isPacket");
var no = "PacketBlock";
function Sg(r) {
    return gt.isInstance(r, no);
}
m$1(Sg, "isPacketBlock");
B(Sg, "isPacketBlock");
var io = "Pie";
function $g(r) {
    return gt.isInstance(r, io);
}
m$1($g, "isPie");
B($g, "isPie");
var so = "PieSection";
function _g(r) {
    return gt.isInstance(r, so);
}
m$1(_g, "isPieSection");
B(_g, "isPieSection");
var Lc = "Radar", Oc = "Service", Za = "Direction", mh = class extends Jt {
    static #_ = m$1(this, "MermaidAstReflection");
    static #_2 = B(this, "MermaidAstReflection");
    getAllTypes() {
        return [
            eo,
            Ya,
            Es,
            Ja,
            Qa,
            As,
            Nc,
            Za,
            Cc,
            Sc,
            vs,
            $c,
            to,
            _c,
            ks,
            wc,
            ro,
            no,
            io,
            so,
            Lc,
            Oc,
            lh
        ];
    }
    computeIsSubtype(r, e) {
        switch(r){
            case Es:
            case Ja:
            case Qa:
            case As:
            case ks:
                return this.isSubtype(lh, e);
            case Za:
                return this.isSubtype(vs, e);
            default:
                return false;
        }
    }
    getReferenceType(r) {
        let e = `${r.container.$type}:${r.property}`;
        switch(e){
            case "Entry:axis":
                return Ya;
            default:
                throw new Error(`${e} is not a valid reference id.`);
        }
    }
    getTypeMetaData(r) {
        switch(r){
            case eo:
                return {
                    name: eo,
                    properties: [
                        {
                            name: "accDescr"
                        },
                        {
                            name: "accTitle"
                        },
                        {
                            name: "edges",
                            defaultValue: []
                        },
                        {
                            name: "groups",
                            defaultValue: []
                        },
                        {
                            name: "junctions",
                            defaultValue: []
                        },
                        {
                            name: "services",
                            defaultValue: []
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case Ya:
                return {
                    name: Ya,
                    properties: [
                        {
                            name: "label"
                        },
                        {
                            name: "name"
                        }
                    ]
                };
            case Es:
                return {
                    name: Es,
                    properties: [
                        {
                            name: "name"
                        },
                        {
                            name: "order"
                        }
                    ]
                };
            case Ja:
                return {
                    name: Ja,
                    properties: [
                        {
                            name: "branch"
                        }
                    ]
                };
            case Qa:
                return {
                    name: Qa,
                    properties: [
                        {
                            name: "id"
                        },
                        {
                            name: "parent"
                        },
                        {
                            name: "tags",
                            defaultValue: []
                        }
                    ]
                };
            case As:
                return {
                    name: As,
                    properties: [
                        {
                            name: "id"
                        },
                        {
                            name: "message"
                        },
                        {
                            name: "tags",
                            defaultValue: []
                        },
                        {
                            name: "type"
                        }
                    ]
                };
            case Nc:
                return {
                    name: Nc,
                    properties: [
                        {
                            name: "entries",
                            defaultValue: []
                        },
                        {
                            name: "label"
                        },
                        {
                            name: "name"
                        }
                    ]
                };
            case Cc:
                return {
                    name: Cc,
                    properties: [
                        {
                            name: "lhsDir"
                        },
                        {
                            name: "lhsGroup",
                            defaultValue: false
                        },
                        {
                            name: "lhsId"
                        },
                        {
                            name: "lhsInto",
                            defaultValue: false
                        },
                        {
                            name: "rhsDir"
                        },
                        {
                            name: "rhsGroup",
                            defaultValue: false
                        },
                        {
                            name: "rhsId"
                        },
                        {
                            name: "rhsInto",
                            defaultValue: false
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case Sc:
                return {
                    name: Sc,
                    properties: [
                        {
                            name: "axis"
                        },
                        {
                            name: "value"
                        }
                    ]
                };
            case vs:
                return {
                    name: vs,
                    properties: [
                        {
                            name: "accDescr"
                        },
                        {
                            name: "accTitle"
                        },
                        {
                            name: "statements",
                            defaultValue: []
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case $c:
                return {
                    name: $c,
                    properties: [
                        {
                            name: "icon"
                        },
                        {
                            name: "id"
                        },
                        {
                            name: "in"
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case to:
                return {
                    name: to,
                    properties: [
                        {
                            name: "accDescr"
                        },
                        {
                            name: "accTitle"
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case _c:
                return {
                    name: _c,
                    properties: [
                        {
                            name: "id"
                        },
                        {
                            name: "in"
                        }
                    ]
                };
            case ks:
                return {
                    name: ks,
                    properties: [
                        {
                            name: "branch"
                        },
                        {
                            name: "id"
                        },
                        {
                            name: "tags",
                            defaultValue: []
                        },
                        {
                            name: "type"
                        }
                    ]
                };
            case wc:
                return {
                    name: wc,
                    properties: [
                        {
                            name: "name"
                        },
                        {
                            name: "value",
                            defaultValue: false
                        }
                    ]
                };
            case ro:
                return {
                    name: ro,
                    properties: [
                        {
                            name: "accDescr"
                        },
                        {
                            name: "accTitle"
                        },
                        {
                            name: "blocks",
                            defaultValue: []
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case no:
                return {
                    name: no,
                    properties: [
                        {
                            name: "bits"
                        },
                        {
                            name: "end"
                        },
                        {
                            name: "label"
                        },
                        {
                            name: "start"
                        }
                    ]
                };
            case io:
                return {
                    name: io,
                    properties: [
                        {
                            name: "accDescr"
                        },
                        {
                            name: "accTitle"
                        },
                        {
                            name: "sections",
                            defaultValue: []
                        },
                        {
                            name: "showData",
                            defaultValue: false
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case so:
                return {
                    name: so,
                    properties: [
                        {
                            name: "label"
                        },
                        {
                            name: "value"
                        }
                    ]
                };
            case Lc:
                return {
                    name: Lc,
                    properties: [
                        {
                            name: "accDescr"
                        },
                        {
                            name: "accTitle"
                        },
                        {
                            name: "axes",
                            defaultValue: []
                        },
                        {
                            name: "curves",
                            defaultValue: []
                        },
                        {
                            name: "options",
                            defaultValue: []
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case Oc:
                return {
                    name: Oc,
                    properties: [
                        {
                            name: "icon"
                        },
                        {
                            name: "iconText"
                        },
                        {
                            name: "id"
                        },
                        {
                            name: "in"
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            case Za:
                return {
                    name: Za,
                    properties: [
                        {
                            name: "accDescr"
                        },
                        {
                            name: "accTitle"
                        },
                        {
                            name: "dir"
                        },
                        {
                            name: "statements",
                            defaultValue: []
                        },
                        {
                            name: "title"
                        }
                    ]
                };
            default:
                return {
                    name: r,
                    properties: []
                };
        }
    }
}, gt = new mh, ch, wg = /*#__PURE__*/ B(()=>ch ?? (ch = /*#__PURE__*/ bt(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "InfoGrammar"), uh, Lg = /*#__PURE__*/ B(()=>uh ?? (uh = /*#__PURE__*/ bt(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"packet-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), dh, Og = /*#__PURE__*/ B(()=>dh ?? (dh = /*#__PURE__*/ bt(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PieGrammar"), fh, Pg = /*#__PURE__*/ B(()=>fh ?? (fh = /*#__PURE__*/ bt(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "ArchitectureGrammar"), hh, bg = /*#__PURE__*/ B(()=>hh ?? (hh = /*#__PURE__*/ bt(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), ph, Mg = /*#__PURE__*/ B(()=>ph ?? (ph = /*#__PURE__*/ bt(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar"), Dg = {
    languageId: "info",
    fileExtensions: [
        ".mmd",
        ".mermaid"
    ],
    caseInsensitive: false,
    mode: "production"
}, Fg = {
    languageId: "packet",
    fileExtensions: [
        ".mmd",
        ".mermaid"
    ],
    caseInsensitive: false,
    mode: "production"
}, Ug = {
    languageId: "pie",
    fileExtensions: [
        ".mmd",
        ".mermaid"
    ],
    caseInsensitive: false,
    mode: "production"
}, Gg = {
    languageId: "architecture",
    fileExtensions: [
        ".mmd",
        ".mermaid"
    ],
    caseInsensitive: false,
    mode: "production"
}, Bg = {
    languageId: "gitGraph",
    fileExtensions: [
        ".mmd",
        ".mermaid"
    ],
    caseInsensitive: false,
    mode: "production"
}, Wg = {
    languageId: "radar",
    fileExtensions: [
        ".mmd",
        ".mermaid"
    ],
    caseInsensitive: false,
    mode: "production"
}, BC = {
    AstReflection: /*#__PURE__*/ B(()=>new mh, "AstReflection")
}, WC = {
    Grammar: /*#__PURE__*/ B(()=>wg(), "Grammar"),
    LanguageMetaData: /*#__PURE__*/ B(()=>Dg, "LanguageMetaData"),
    parser: {}
}, KC = {
    Grammar: /*#__PURE__*/ B(()=>Lg(), "Grammar"),
    LanguageMetaData: /*#__PURE__*/ B(()=>Fg, "LanguageMetaData"),
    parser: {}
}, VC = {
    Grammar: /*#__PURE__*/ B(()=>Og(), "Grammar"),
    LanguageMetaData: /*#__PURE__*/ B(()=>Ug, "LanguageMetaData"),
    parser: {}
}, jC = {
    Grammar: /*#__PURE__*/ B(()=>Pg(), "Grammar"),
    LanguageMetaData: /*#__PURE__*/ B(()=>Gg, "LanguageMetaData"),
    parser: {}
}, HC = {
    Grammar: /*#__PURE__*/ B(()=>bg(), "Grammar"),
    LanguageMetaData: /*#__PURE__*/ B(()=>Bg, "LanguageMetaData"),
    parser: {}
}, zC = {
    Grammar: /*#__PURE__*/ B(()=>Mg(), "Grammar"),
    LanguageMetaData: /*#__PURE__*/ B(()=>Wg, "LanguageMetaData"),
    parser: {}
}, Kg = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, Vg = /accTitle[\t ]*:([^\n\r]*)/, jg = /title([\t ][^\n\r]*|)/, Hg = {
    ACC_DESCR: Kg,
    ACC_TITLE: Vg,
    TITLE: jg
}, zg = class extends Tr {
    static #_ = m$1(this, "AbstractMermaidValueConverter");
    static #_2 = B(this, "AbstractMermaidValueConverter");
    runConverter(r, e, t) {
        let n = /*#__PURE__*/ this.runCommonConverter(r, e, t);
        return n === void 0 && (n = /*#__PURE__*/ this.runCustomConverter(r, e, t)), n === void 0 ? super.runConverter(r, e, t) : n;
    }
    runCommonConverter(r, e, t) {
        let n = Hg[r.name];
        if (n === void 0) return;
        let i = /*#__PURE__*/ n.exec(e);
        if (i !== null) {
            if (i[1] !== void 0) return i[1].trim().replace(/[\t ]{2,}/gm, " ");
            if (i[2] !== void 0) return i[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
        }
    }
}, XC = class extends zg {
    static #_ = m$1(this, "CommonValueConverter");
    static #_2 = B(this, "CommonValueConverter");
    runCustomConverter(r, e, t) {}
}, qg = class extends Pt {
    static #_ = m$1(this, "AbstractMermaidTokenBuilder");
    static #_2 = B(this, "AbstractMermaidTokenBuilder");
    constructor(r){
        super(), this.keywords = new Set(r);
    }
    buildKeywordTokens(r, e, t) {
        let n = /*#__PURE__*/ super.buildKeywordTokens(r, e, t);
        return n.forEach((i)=>{
            this.keywords.has(i.name) && i.PATTERN !== void 0 && (i.PATTERN = new RegExp(i.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
        }), n;
    }
};
(class extends qg {
    static #_ = m$1(this, "CommonTokenBuilder");
    static #_2 = B(this, "CommonTokenBuilder");
});
export { B, Ec as E, HC as H, Ic as I, KC as K, Rc as R, VC as V, WC as W, XC as X, BC as a, zC as b, zg as c, jC as j, qg as q, za as z };
